/* 창체 안전교육 약물 중독 예방 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-drug 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 약물 및 사이버 중독 예방
 *   ('약물 오남용의 위험성 및 올바른 약물 복용법 알기' / '중독성물질을 알고 안전한 활용 방법') + 7대 표준안 약물 소분류(흡연·고카페인).
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 약 이름·용량은 쓰지 않는다. 약 봉투·설명서·제품·가게·조사 자료·인물은 모두 직접 지은 가상의 것이다(가명). 피해 경험은 묻지 않는다.
 * 주제 6개(3학년 3 · 4학년 3), 계획 모듈 46개.
 *
 * 사람 확인: 근거 파일(research-*.md)에는 고시 항목 제목만 있어 아래 문장은 일반 안전 수칙으로 썼다. 공식 안내처에서 확인한다.
 *   [식품의약품안전처 의약품안전나라·약 바로 쓰기 안내]
 *   - dose-rules.*: 약은 봉투·설명서에 적힌 양과 때를 지킨다 / 많이(두 배) 먹어도 빨리 낫지 않고 몸에 해로울 수 있다 / 남은 약·다른 사람 약은 마음대로 먹지 않는다
 *   - dose-rules.activity.order: '먹기 전 내 이름 → 양 → 때 확인 → 물과 함께 먹기' 차례 / 깜빡하면 두 번치를 한꺼번에 먹지 않고 어른(약사)에게 묻는다
 *   - dose-rules.intro.story: 약을 더 먹으면 속이 불편하거나 어지러울 수 있다
 *   - read-insert.*: 봉투·설명서에서 이름·먹는 양·먹는 때·보관·주의할 점을 찾는다 / 증상이 같아도 남의 약은 먹지 않는다 / 사용기한 지난 약은 먹지 않고 어른께 드린다 / 기한을 모르는 약도 먹지 않는다 / 약은 어린이 손이 닿지 않는 곳에 둔다
 *   - read-insert.intro.clock: '6시간마다' 는 가상 봉투의 연습 값이다(어떤 약의 복용법도 아님) — 화면에 '가상'이라고 밝혔다
 *   [환경부 생활화학제품 안전정보·한국소비자원]
 *   - label-warning.*: 생활 화학제품은 원래 통에 담아 어린이 손이 닿지 않는 곳에 둔다 / 음료병 등 다른 통에 옮겨 담지 않는다 / 두 세제를 섞으면 해로운 기체가 생길 수 있다 / 쓸 때 창문을 연다 / 다 쓰면 손을 씻는다 / 피부에 묻으면 물로 씻는다 / 스프레이를 사람 쪽으로 뿌리지 않는다 / 벌레약을 뿌린 뒤 잠시 환기한다
 *   - label-warning.activity.read: 주의 표시 문구('어린이 손이 닿지 않는 곳에 보관' '섞어 쓰지 마시오' 등)는 실제 제품 문구를 본뜬 가상 문구다
 *   [보건복지부·한국건강증진개발원 금연 안내]
 *   - secondhand-smoke.*: 간접흡연(옆 사람 연기)도 몸에 해롭다 / 연기는 코·입 → 기관 → 폐로 들어간다 / 밖에서 피운 연기·옷에 밴 냄새도 해로울 수 있다 / 연기가 오면 자리를 옮긴다
 *   - secondhand-smoke.activity.signs: 놀이터·학교 앞·버스 정류장 금연 표지는 가상 동네의 것이다(실제 금연구역 범위는 법령·지자체 조례로 확인)
 *   [식품의약품안전처 카페인 안내]
 *   - caffeine.*: 커피 우유·콜라·녹차·에너지 음료에는 카페인이 들어 있을 수 있다 / 물·우유·보리차에는 없다 / '고카페인 함유' 표시가 있는 음료가 있다 / 표시가 없어도 카페인이 든 음료가 있다 / 카페인은 잠이 안 오거나 가슴이 두근거리게 할 수 있다 / 어린이는 에너지 음료를 마시지 않는 것이 좋다
 *   - caffeine.activity.label: 아이스티에도 카페인이 들 수 있다 / '어린이 섭취에 주의' '카페인 함량' '무카페인' 표시 문구가 실제로 쓰이는지와 그 뜻
 *   - caffeine.activity.offer: 에너지 음료를 마시면 가슴이 두근거리거나 밤에 잠이 안 올 수 있다(반만 마셔도 카페인이 많다)
 *   - caffeine.activity.sleep: 그래프는 가상의 우리 반 자료다(실제 조사 아님)
 *   [소방청 119 신고 요령·식품의약품안전처]
 *   - help-call.*: 약·화학제품을 잘못 먹거나 만지면 바로 어른께 알리고, 제품 통(봉투)을 챙겨 보여 드린다 / 어른이 없으면 119에 '어디인지·무엇을·언제·지금 모습'을 말한다 / 혼날까 봐 숨기거나 괜찮아질 때까지 기다리지 않는다 / 학교에서는 보건실, 동네에서는 약국에서 물어볼 수 있다
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-drug', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-drug.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });

  // 나누기(mindmap·kitchen sort): 기본 = groups(칸마다 카드), 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
  const SORT = (prompt, base, slots, groups, ne, hard, d, more) => {
    const easyG = groups.map((g, i) => g.slice(0, Array.isArray(ne) ? ne[i] : ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { cards: mix(easyG) }, target: sortT(slots, easyG) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 차례 놓기(story·kitchen order): 기본 = 장면 4장, 쉬움 = drop 번째를 뺀 3장, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const SLOTS = { 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
  const ORD = (prompt, base, steps, drop, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: SLOTS[steps.length], cards: steps.slice().reverse() }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(3장).`, toolOptions: { slots: SLOTS[3], cards: easy.slice().reverse() }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: [steps[1], trap, steps[3], steps[0], steps[2]] }, target: { order: ids } },
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

  // 해야 할 것만 표시하는 점검표(kitchen checklist): items = [{id,text,ok}], easyIdx = 쉬움 단계에 남길 칸 번호
  const CHK = (prompt, title, items, easyIdx, d, more) => {
    const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
    const bare = (list) => list.map((x) => ({ id: x.id, text: x.text }));
    const easy = easyIdx.map((i) => items[i]);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: bare(items) }, target: { checklist: ok(items) }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(${easy.length}칸).`, toolOptions: { items: bare(easy) }, target: { checklist: ok(easy) } } },
      ...more,
    };
  };

  // 짝 잇기(kitchen·mindmap match): rows = [[칸 글, 카드 글], …] 기본 3줄, 쉬움 앞 2줄, 도전 = 함정 카드 한 장 더
  const MATCH = (prompt, base, rows, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cards = rows.map((r) => r[1]);
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots, cards: cards.slice().reverse() }), target: tg(rows.length), difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(2줄).`, toolOptions: { slots: slots.slice(0, 2), cards: cards.slice(0, 2).reverse() }, target: tg(2) },
        challenge: { prompt: `${strip(prompt)}. 남는 카드가 하나 있어요.`, toolOptions: { cards: [cards[1], trap, cards[2], cards[0]].concat(cards.slice(3)) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 칸 지도 핀: 쉬움 = 핀 자리 이름이 바로 보임(활동 levels readout), 도전 = '왜 여기일까' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. 까닭도 골라요.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 갈림 상황 하나(emotion branch): 쉬움 = 보기 2개(바른 것 + 첫 틀린 것), 기본 = 보기 3개, 도전 = 결과를 맞힌 뒤에만 보임
  const BR = (prompt, situation, choices, good, d, more) => {
    const g = Array.isArray(good) ? good : [good];
    const two = choices.filter((c) => c.id === g[0] || c.id === choices.find((x) => !g.includes(x.id)).id);
    return {
      prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice: good }, difficulty: d,
      levels: { easy: { toolOptions: { choices: two }, target: { choice: g[0] } }, challenge: { toolOptions: { revealAfterCheck: true } } },
      ...more,
    };
  };

  // 스스로 점검(timer selfCheck) 출구 질문: n = [쉬움, 기본, 도전] 칸 수
  const SELF = (title, checks, n, prompt) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, n[1]) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, n[0]) } }, challenge: { target: { selfCheck: checks.slice(0, n[2]) } } },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  // ======================================================================================================
  // 3학년 · 정해진 양과 때를 지켜요 (별표 2 초등 '약물 오남용의 위험성 및 올바른 약물 복용법 알기')
  // ======================================================================================================
  {
    const C = T('dose-rules', 3);
    const PLAN = [['첫째 날', 3], ['둘째 날', 3], ['셋째 날', 2]];
    const PIC = { type: 'picture', title: '가상의 약 먹기 계획(사흘)', unit: '번', xLabel: '날', yLabel: '먹는 횟수', icons: [{ value: 2, name: '2번' }, { value: 1, name: '1번' }], icon: 'circle', anyIcons: true };
    M.push(
      C({
        id: 'saf-drug.e34.dose-rules.intro.clock', type: 'intro', title: '약 먹는 시각을 시계로',
        method: '약 먹는 시각 시계로 나타내기', tool: 'clock', minutes: 6,
        levels: { easy: '아침 8시 정각 하나를 함께 읽는다.', base: '아침 8시·점심 12시·저녁 6시 세 시각을 차례로 읽는다.', challenge: '12시 30분처럼 30분 단위 시각이 섞인 봉투(가상)를 읽고 바늘 자리를 말한다.' },
        intro: {
          teacher: '"가상의 약 봉투에 \'아침·점심·저녁 밥 먹은 뒤\'라고 적혀 있어요. 몇 시에 먹으면 될까요?" 시연 단추로 시계 바늘이 8시 → 12시 → 6시로 움직이는 것을 보이고 시각마다 한 목소리로 읽는다(기다릴 반응: "아침 먹고 8시요"). "생각날 때 아무 때나 먹으면 돼요"라는 말이 나오면 "봉투에 왜 때를 적어 두었을까요? 아무 때나 먹으면 하루에 몇 번 먹었는지 알 수 있을까요?"라고 되묻는다. 오늘은 약은 정해진 양과 때를 지켜 먹는다는 것을 배운다고 밝힌다.',
          student: '가상의 약 봉투에 적힌 먹는 때를 읽고, 시계 바늘이 가리키는 시각을 함께 읽어 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 8, m: 0 }, { h: 12, m: 0 }, { h: 6, m: 0 }, { h: 12, m: 30 }] },
          art: { draw: 'a paper medicine envelope with three small paper suns for morning, noon and evening next to a large paper clock', banner: '약은 정해진 때에', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '봉투·시각은 가상의 연습 자료다. 어떤 약의 이름이나 먹는 양도 말하지 않는다.',
      }),
      C({
        id: 'saf-drug.e34.dose-rules.intro.story', type: 'intro', title: '민호 이야기 차례 맞추기',
        method: '이야기 장면 차례 맞추기', tool: 'story', minutes: 6,
        levels: { easy: '감기 → 두 번 먹음 → 몸이 불편함, 세 장면을 함께 놓는다.', base: '네 장면을 차례로 놓는다.', challenge: '네 장면을 놓은 뒤 무엇이 문제였던 장면인지 고르고 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"민호는 빨리 나으려고 약을 두 번 먹었어요. 어떻게 되었을까요?" 시연 단추로 장면 카드가 처음 → 끝 차례로 놓이는 모습을 보인다. "두 번 먹으면 두 배 빨리 나아요"라는 말이 나오면 "민호는 빨리 나았나요? 약을 더 먹었더니 몸이 어떻게 되었나요?"라고 되물어 정해진 양보다 많이 먹으면 오히려 몸에 해로울 수 있다는 것을 짚는다. 짝과 "민호가 어떻게 했으면 좋았을까?"를 한 문장씩 말하게 한다.',
          student: '민호 이야기 장면을 차례로 놓고, 무엇이 문제였는지 짝과 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'tell', text: '엄마께 말씀드림' }, { id: 'sick', text: '몸이 불편해짐' }, { id: 'twice', text: '두 번 먹음' }, { id: 'cold', text: '감기에 걸린 민호' }], shuffle: false }, sequence: [{ order: ['cold', 'twice', 'sick', 'tell'] }] },
          art: { draw: 'a paper boy holding his tummy beside a paper medicine envelope, a thought bubble with a fast running rabbit crossed out', banner: '두 번 먹으면 빨리 나을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '"약을 잘못 먹어 본 적 있나요?"처럼 겪은 일을 묻지 않는다. 이야기 속 민호(가명)의 일로만 말한다.',
      }),
      C({
        id: 'saf-drug.e34.dose-rules.activity.myth', type: 'activity', title: '약에 대한 맞는 말·틀린 말',
        method: '맞는 말/틀린 말 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 틀린 말 하나를 맞는 말로 고쳐 짝에게 말한다.' },
        activity: {
          title: '약에 대한 맞는 말·틀린 말', tool: 'mindmap',
          teacher: '"이 말은 맞는 말일까요, 틀린 말일까요? 왜 그렇게 생각해요?" 카드를 놓을 때마다 까닭을 한 문장으로 말하게 한다. "많이 먹으면 빨리 나아요"를 맞는 말에 두는 학생에게 "약 봉투에 적힌 양은 누가 정했을까요? 더 먹으면 몸은 어떻게 될까요?"라고 묻는다. 틀린 말은 "~가 아니라 ~예요" 틀로 고쳐 말하게 한다.',
          task: '약에 대한 말 카드를 맞는 말과 틀린 말로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('먹는 양에 대한 말을 나누어요.', { topic: '약 먹는 양' }, ['맞는 말', '틀린 말'], [['양은 봉투에 있어요', '적힌 만큼만 먹어요', '모르면 어른께 물어요'], ['많이 먹으면 빨리 나아요', '두 배면 두 배 빨라요', '덜 먹어도 그만이에요']], 2, [['의사·약사 말대로 해요'], ['맛있는 약은 더 먹어요']], 0.15),
            SORT('먹는 때에 대한 말을 나누어요.', { topic: '약 먹는 때' }, ['맞는 말', '틀린 말'], [['정해진 때에 먹어요', '때는 봉투에 있어요', '깜빡하면 어른께 말해요'], ['남은 약은 아무 때나', '생각날 때 먹어요', '두 번치를 한 번에']], 2, [['밥 뒤라면 밥 먹고'], ['배고플 때 약 먹어요']], 0.2),
            SORT('누구의 약인지에 대한 말을 나누어요.', { topic: '누구의 약' }, ['맞는 말', '틀린 말'], [['내 이름 약만 먹어요', '어른과 함께 먹어요', '약은 어른이 맡아요'], ['가족 약은 먹어도 돼요', '단 약은 간식이에요', '친구 약을 나눠 먹어요']], 2, [['모르는 약은 안 먹어요'], ['혼자 약 상자를 열어요']], 0.25, { conclude: '약은 내 이름이 적힌 것만, 정해진 양과 때를 지켜 어른과 함께 먹어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '맞는 말이면 ○, 틀린 말이면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['많이 먹으면 빨리 나아요', ''], ['적힌 만큼만 먹어요', ''], ['친구 약을 나눠 먹어요', ''], ['정해진 때에 먹어요', '']], answer: '×, ○, ×, ○' }] },
      }),
      C({
        id: 'saf-drug.e34.dose-rules.activity.plan', type: 'activity', title: '약 먹기 계획 그림그래프',
        method: '약 먹기 계획 그림그래프', tool: 'chart', minutes: 13,
        levels: { easy: '이틀치 계획만 그림그래프로 나타내고, 이틀 동안 먹는 횟수를 센다.', base: '사흘치 계획을 그림그래프로 완성하고 모두 몇 번인지 센다.', challenge: '사흘치를 완성한 뒤, 계획과 달리 하나를 빠뜨려 그린 그래프에서 빠뜨린 날을 찾는다.' },
        activity: {
          title: '약 먹기 계획 그림그래프', tool: 'chart',
          teacher: '"가상의 약 봉투에 첫째 날과 둘째 날은 아침·점심·저녁, 셋째 날은 아침·저녁에 먹으라고 적혀 있어요. 하루에 몇 번일까요?" 표의 수를 소리 내어 읽고 그림을 놓게 한다. 셋째 날에도 3번을 놓는 학생에게 "셋째 날 칸에는 몇 번이라고 적혀 있나요? 마음대로 한 번 더 먹어도 될까요?"라고 묻는다. 계획표가 있으면 빠뜨리거나 두 번 먹는 일을 막을 수 있다는 것을 짚는다.',
          task: '가상의 약 먹기 계획표를 보고 그림그래프를 완성한 뒤 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '계획표를 보고 날마다 먹는 횟수를 그림그래프로 나타내요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: PLAN }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '계획표를 보고 이틀 동안 먹는 횟수를 그림그래프로 나타내요.', toolOptions: { data: PLAN.slice(0, 2) }, target: { build: true } } } },
            { prompt: '그래프를 보고 사흘 동안 모두 몇 번 먹는지 써요.', toolOptions: Object.assign({}, PIC, { mode: 'read', data: PLAN, question: '사흘 동안 모두 몇 번인가요?' }), target: { value: 8 }, difficulty: 0.25,
              levels: { easy: { prompt: '그래프를 보고 이틀 동안 모두 몇 번 먹는지 써요.', toolOptions: { data: PLAN.slice(0, 2), question: '이틀 동안 모두 몇 번인가요?' }, target: { value: 6 } } } },
            { prompt: '그래프에서 먹는 횟수가 가장 적은 날은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: PLAN, question: '가장 적게 먹는 날은?', choices: ['첫째 날', '둘째 날', '셋째 날'] }), target: { pick: 2 }, difficulty: 0.2,
              levels: { challenge: { prompt: '계획(3·3·2번)과 달리 하나를 빠뜨린 날을 찾아요.', toolOptions: { data: [['첫째 날', 3], ['둘째 날', 2], ['셋째 날', 2]], question: '하나를 빠뜨린 날은?' }, target: { pick: 1 } } },
              conclude: '계획표대로 먹으면 빠뜨리거나 두 번 먹는 일을 막을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상의 계획표 빈칸에 먹는 횟수를 써요.', columns: ['날', '먹는 횟수(번)'], cells: [['첫째 날', '3'], ['둘째 날', ''], ['셋째 날', '2']], answer: '3' }] },
      }),
      C({
        id: 'saf-drug.e34.dose-rules.activity.why', type: 'activity', title: '이럴 때 어떻게 할까?',
        method: '상황 판단과 까닭 말하기', tool: 'emotion', minutes: 14,
        levels: { easy: '보기 2개 가운데 고르고 결과를 본다.', base: '보기 3개 가운데 고르고, 고른 까닭을 짝에게 말한다.', challenge: '결과는 맞힌 뒤에만 보이고, 다른 보기를 골랐다면 어떻게 되었을지 짝에게 말한다.' },
        activity: {
          title: '이럴 때 어떻게 할까?', tool: 'emotion',
          teacher: '"이 친구는 어떻게 하면 좋을까요? 왜 그렇게 골랐어요?" 고른 뒤 "나는 ○○을 골랐어. 왜냐하면 ○○이기 때문이야." 틀로 짝에게 말하게 한다. "엄마 약이니까 먹어도 돼요"라는 학생에게 "그 약이 어떤 약인지, 얼마나 먹어야 하는지 알 수 있을까요? 누구에게 물어보면 될까요?"라고 묻는다. 아프면 참지 말고 어른께 말하는 것이 먼저라는 것을 짚는다.',
          task: '그림 속 친구가 할 행동을 골라요. 고른 까닭을 짝에게 말해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BR('머리가 아파요. 엄마 약 상자 앞이에요. 어떻게 할까요?', '머리가 아픈데 집에 엄마 약 상자가 있어요.', [
              { id: 'open', text: '혼자 꺼내 먹어요', result: '어떤 약인지 몰라 몸에 해로울 수 있어요.', mood: '걱정' },
              { id: 'tell', text: '어른께 아프다고 말해요', result: '어른이 살펴보고 알맞게 도와주셨어요.', mood: '편안함' },
              { id: 'hide', text: '참고 아무 말 안 해요', result: '아픈 것이 계속되는데 아무도 몰라요.', mood: '속상함' },
            ], 'tell', 0.15),
            BR('어제 남은 약이 있어요. 어떻게 할까요?', '어제 먹다 남은 약이 식탁에 있어요. 오늘 또 콧물이 나요.', [
              { id: 'eat', text: '남은 약을 그냥 먹어요', result: '오늘 먹어도 되는 약인지 알 수 없어요.', mood: '걱정' },
              { id: 'ask', text: '먹어도 되는지 어른께 물어요', result: '어른이 봉투를 보고 정해진 때를 알려 주셨어요.', mood: '편안함' },
              { id: 'two', text: '두 봉지를 한꺼번에 먹어요', result: '정해진 양보다 많이 먹게 돼요.', mood: '걱정' },
            ], 'ask', 0.2),
            BR('친구가 자기 약을 줘요. 어떻게 할까요?', '친구가 "이 약 먹으면 금방 나아" 하며 자기 약을 줘요.', [
              { id: 'take', text: '고맙다며 먹어요', result: '친구 몸에 맞춘 약이라 나에게 해로울 수 있어요.', mood: '걱정' },
              { id: 'no', text: '"내 약이 아니야" 거절해요', result: '친구도 약은 나누는 것이 아님을 알았어요.', mood: '뿌듯함' },
              { id: 'half', text: '반만 먹어요', result: '반이라도 내 약이 아니면 위험해요.', mood: '걱정' },
            ], 'no', 0.25, { conclude: '아프면 참거나 마음대로 먹지 말고 어른께 말해요. 남의 약은 먹지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '머리가 아플 때 가장 먼저 할 일은?', options: ['약 상자를 연다', '어른께 말한다', '친구 약을 먹는다'], answer: '어른께 말한다' }] },
      }),
      C({
        id: 'saf-drug.e34.dose-rules.activity.order', type: 'activity', title: '먹기 전 확인 차례',
        method: '먹기 전 확인 차례 정하기', tool: 'kitchen', minutes: 13,
        levels: { easy: '카드 3장을 차례로 놓는다.', base: '카드 4장을 차례로 놓는다.', challenge: '틀린 카드(맛 보고 고르기 등) 한 장이 섞인 5장에서 그 카드를 빼고 4장을 차례로 놓는다.' },
        activity: {
          title: '먹기 전 확인 차례', tool: 'kitchen',
          teacher: '"약을 먹기 전에 무엇부터 확인할까요?" 카드를 다 놓으면 처음부터 끝까지 한 목소리로 읽는다. "맛을 보면 무슨 약인지 알아요"라는 학생에게 "맛이 달면 먹어도 되는 약일까요? 무엇을 보아야 내 약인지 알 수 있을까요?"라고 묻는다. 내 이름 → 양 → 때를 확인하는 습관이 실수를 막는다는 것을 짚는다.',
          task: '확인할 일 카드를 처음부터 끝까지 차례로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('약을 먹기 전 확인할 일을 차례로 놓아요.', { autoMotif: false }, [{ id: 'name', text: '내 이름 확인' }, { id: 'amount', text: '먹는 양 확인' }, { id: 'time', text: '먹는 때 확인' }, { id: 'water', text: '물과 함께 먹기' }], 3, { id: 'taste', text: '맛 보고 고르기', why: '맛으로는 어떤 약인지 알 수 없어요.' }, 0.15),
            ORD('약 봉투를 받았을 때 할 일을 차례로 놓아요.', { autoMotif: false }, [{ id: 'see', text: '어른과 봉투 보기' }, { id: 'mine', text: '내 이름 맞나 보기' }, { id: 'wait', text: '적힌 때 기다리기' }, { id: 'keep', text: '남은 약은 어른께' }], 1, { id: 'swap', text: '친구 약과 바꾸기', why: '다른 사람 약은 내 몸에 맞지 않을 수 있어요.' }, 0.2),
            ORD('약 먹을 때를 깜빡했을 때 차례로 놓아요.', { autoMotif: false }, [{ id: 'notice', text: '못 먹은 걸 알아챔' }, { id: 'say', text: '어른께 말하기' }, { id: 'ask', text: '어른이 약사께 물음' }, { id: 'do', text: '들은 대로 하기' }], 2, { id: 'double', text: '두 번치 한꺼번에', why: '한꺼번에 먹으면 정해진 양을 넘어요.' }, 0.25, { conclude: '약을 먹기 전에는 내 이름·양·때를 확인하고, 모르면 어른께 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '약을 먹기 전에 봉투에서 내 ___을 먼저 확인해요.', answer: '이름' }] },
      }),
      C({
        id: 'saf-drug.e34.dose-rules.wrap.pair', type: 'wrap', title: '양·때·물 기준 카드',
        method: '짝과 기준 카드 말하기', tool: 'wordcards', minutes: 7,
        levels: { easy: '양·때 카드 2장을 뒤집으며 뜻을 말한다.', base: '양·때·물 카드 3장을 짝과 번갈아 뒤집으며 뜻을 말한다.', challenge: '3장을 뒤집은 뒤 기준마다 예를 하나씩 짝에게 말한다.' },
        wrap: {
          teacher: '"\'양\' 카드를 뒤집기 전에 뜻을 먼저 말해 볼까요?" 짝과 한 장씩 번갈아 뜻을 말하고 뒤집어 확인하게 한다. "양은 많을수록 좋아요"라고 말하는 학생에게 "봉투에 적힌 양보다 더 먹으면 어떻게 될까요? 민호 이야기를 떠올려 볼까요?"라고 되묻는다. 도전 단계는 기준마다 "예를 들면 ○○" 하고 한 가지씩 덧붙이게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'flip', front: 'en', speak: false, words: [{ en: '양', ko: '봉투에 적힌 만큼만' }, { en: '때', ko: '정해진 때에 먹기' }, { en: '물', ko: '물과 함께 먹기' }] }, prompt: '기준 카드를 모두 뒤집으며 뜻을 말해요.', target: { flip: ['양', '때', '물'] }, difficulty: 0.1,
              levels: { easy: { prompt: '양·때 카드를 뒤집으며 뜻을 말해요.', toolOptions: { words: [{ en: '양', ko: '봉투에 적힌 만큼만' }, { en: '때', ko: '정해진 때에 먹기' }] }, target: { flip: ['양', '때'] } } } },
            { type: 'choice', prompt: '가상 봉투에 "하루 세 번"이라면 어떻게 먹을까요?', options: ['아무 때나 세 번', '정해진 때에 한 번씩', '한꺼번에 세 번치'], answer: 1, difficulty: 0.15, explain: '정해진 때에 나누어 먹어요. 한꺼번에 먹으면 양을 넘어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '약을 먹는 세 가지 기준',
          items: [
            { type: 'table', prompt: '기준과 뜻을 이어 써요.', columns: ['기준', '뜻'], cells: [['양', ''], ['때', ''], ['물', '']], answer: '봉투에 적힌 만큼만, 정해진 때에, 물과 함께' },
            { type: 'short', prompt: '약을 먹기 전에 내가 꼭 확인할 것을 한 줄로 써요.' },
          ],
          easy: { note: '양은 "얼마나", 때는 "언제"예요.', items: [{ type: 'choice', prompt: '약은 얼마나 먹나요?', options: ['적힌 만큼', '많이'], answer: '적힌 만큼' }] },
        },
      }),
      C({
        id: 'saf-drug.e34.dose-rules.wrap.self', type: 'wrap', title: '약 먹기 약속 스스로 점검',
        method: '스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 3개에 표시한다.', base: '점검 칸 4개에 표시한다.', challenge: '점검 칸 4개에 표시하고, 아직 못 하는 항목에 할 일을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 약속 가운데 나는 무엇을 이미 알고 있고, 무엇을 더 연습해야 할까요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 모두 표시만 하고 넘어가는 학생에게 "\'정해진 양\'은 어디에 적혀 있었나요?"처럼 하나를 되물어 확인한다. 출구 2번에서 "남은 약을 먹어요"를 고른 학생에게 "그 약이 오늘도 먹어도 되는 약인지 누가 알려 줄 수 있을까요?"라고 묻는다.',
          exitTicket: [
            SELF('약 먹기 약속 점검', ['정해진 양을 알아요', '정해진 때를 알아요', '마음대로 안 먹어요', '모르면 어른께 물어요'], [3, 4, 4]),
            { type: 'choice', prompt: '콧물이 나는데 어제 남은 약이 있어요. 바른 행동은?', options: ['남은 약을 먹어요', '어른께 먼저 물어요', '두 봉지를 먹어요'], answer: 1, difficulty: 0.15, explain: '먹어도 되는 약인지 어른께 먼저 물어요.' },
            { type: 'short', prompt: '아직 잘 못 하는 약속과 그것을 위해 할 일을 써요.' },
          ],
        },
        worksheet: {
          title: '약 먹기 약속',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['적힌 양만 먹기', '정해진 때에 먹기', '남의 약 안 먹기', '모르면 어른께 묻기'] },
            { type: 'draw', prompt: '어른과 함께 약 봉투를 읽는 모습을 그려요.' },
          ],
          easy: { note: '양·때·어른께 묻기를 떠올려요.', items: [{ type: 'choice', prompt: '약이 남았어요. 어떻게 할까요?', options: ['어른께 물어요', '그냥 먹어요'], answer: '어른께 물어요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 제품 주의 표시 읽고 안전하게 두기 (별표 2 초등 '중독성물질을 알고 안전한 활용 방법')
  // ======================================================================================================
  {
    const C = T('label-warning', 3);
    const HOME = {
      title: '우리 집 지도(가상)', grid: [6, 3],
      regions: [
        { name: '싱크대 아래', cells: [[0, 0], [1, 0]] }, { name: '높은 찬장', cells: [[2, 0], [3, 0]] }, { name: '욕실 바닥', cells: [[4, 0], [5, 0]] },
        { name: '베란다 바닥', cells: [[0, 1], [1, 1]] }, { name: '거실', cells: [[2, 1], [3, 1], [2, 2], [3, 2]] }, { name: '세탁기 옆', cells: [[4, 1], [5, 1]] },
        { name: '현관 신발장', cells: [[0, 2], [1, 2]] }, { name: '잠금 수납장', cells: [[4, 2], [5, 2]] },
      ],
    };
    const W = (rows) => rows.map(([ko, en]) => ({ en, ko }));
    const READ = [
      W([['어린이 손이 닿지 않는 곳에 보관', '동생이 못 꺼내게 높이'], ['섞어 쓰지 마시오', '다른 세제와 섞지 않기'], ['눈에 들어가지 않게 주의', '얼굴 가까이 쓰지 않기'], ['먹지 마시오', '입에 넣지 않기']]),
      W([['환기가 잘 되는 곳에서 사용', '창문 열고 쓰기'], ['원래 용기에 보관', '다른 병에 안 옮기기'], ['사용 후 손을 씻으시오', '다 쓰면 손 씻기'], ['피부에 묻으면 물로 씻으시오', '묻으면 물로 씻기']]),
      W([['사람을 향해 뿌리지 마시오', '얼굴 쪽에 안 뿌리기'], ['불 가까이 두지 마시오', '불 옆에 두지 않기'], ['햇볕이 드는 곳을 피해 보관', '그늘에 두기'], ['어린이는 어른과 함께 사용', '혼자 쓰지 않기']]),
    ];
    const WM = (prompt, words, d, more) => ({
      prompt, toolOptions: { words }, target: { match: Object.fromEntries(words.map((w) => [w.en, w.en])) }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(2개).`, toolOptions: { words: words.slice(0, 2) }, target: { match: Object.fromEntries(words.slice(0, 2).map((w) => [w.en, w.en])) } },
        challenge: { prompt: `${strip(prompt)}. 지키지 않으면 생길 일도 말해요.` },
      },
      ...more,
    });
    M.push(
      C({
        id: 'saf-drug.e34.label-warning.intro.home', type: 'intro', title: '집 지도에서 세제가 놓인 곳',
        method: '집 지도에 보관 위치 핀', tool: 'map', minutes: 6,
        levels: { easy: '싱크대 아래·욕실 바닥 두 곳에 핀이 꽂히는 것을 본다.', base: '베란다 바닥·세탁기 옆까지 네 곳을 차례로 보고, 동생 손이 닿는 곳인지 말한다.', challenge: '네 곳을 본 뒤 세제를 옮겨 둘 안전한 칸(높은 찬장)을 고른다.' },
        intro: {
          teacher: '"우리 집에서 세제·표백제·벌레약은 어디에 놓여 있을까요?" 시연 단추로 가상의 집 지도에 핀이 싱크대 아래 → 욕실 바닥 → 베란다 바닥 → 세탁기 옆 차례로 꽂히는 것을 보이고, 곳마다 "동생 손이 닿을까요?"라고 묻는다(기다릴 반응: "바닥이라 닿아요"). "뚜껑이 있으니 괜찮아요"라는 말이 나오면 "동생이 뚜껑을 열 수 있을까요? 뚜껑이 헐거우면요?"라고 되묻는다. 마지막에 핀이 높은 찬장으로 옮겨지는 것을 보이며 오늘은 제품을 안전하게 두는 법을 배운다고 밝힌다.',
          student: '집 지도에서 세제와 벌레약이 놓인 곳을 보고, 동생 손이 닿는 곳인지 말해 보아요.',
          demo: { tool: 'map', options: HOME, sequence: [{ pin: [0, 0] }, { pin: [4, 0] }, { pin: [0, 1] }, { pin: [4, 1] }, { pin: [2, 0] }] },
          art: { draw: 'a paper cut house cross section with detergent bottles under the sink and on the bathroom floor, a small paper child reaching toward them, a high cupboard above', banner: '동생 손이 닿을까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '집 지도는 가상의 것이다. 학생 집 구조를 발표시키지 않는다.',
      }),
      C({
        id: 'saf-drug.e34.label-warning.intro.web', type: 'intro', title: '우리 집 생활 화학제품',
        method: '생활 화학제품 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '세제·표백제·방향제 카드 3장이 바구니에 담기는 것을 본다.', base: '접착제·벌레약까지 5장이 담기는 것을 보고 더 떠올려 말한다.', challenge: '제품이 아닌 함정 카드(사과·수건)가 왜 빠졌는지 말한다.' },
        intro: {
          teacher: '"생활 화학제품은 집에서 청소·빨래·벌레 잡기에 쓰는 물건이에요. 무엇이 있을까요?" 시연 단추로 세제·표백제·방향제·접착제·벌레약 카드가 바구니에 담기는 모습을 보이고 더 떠오르는 것을 묻는다(기다릴 반응: "섬유 유연제요", "손 세정제요"). "향이 좋은 방향제는 괜찮아요"라는 말이 나오면 "향이 좋아도 먹거나 눈에 뿌려도 될까요?"라고 되묻는다. 사과·수건이 바구니에 들어가지 않은 까닭도 함께 짚는다.',
          student: '우리 집에서 쓰는 생활 화학제품을 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '생활 화학제품', cards: [{ id: 'soap', text: '세제' }, { id: 'apple', text: '사과' }, { id: 'bleach', text: '표백제' }, { id: 'air', text: '방향제' }, { id: 'towel', text: '수건' }, { id: 'glue', text: '접착제' }, { id: 'bug', text: '벌레약' }], shuffle: false }, sequence: [{ pick: ['soap', 'bleach', 'air'] }, { pick: ['soap', 'bleach', 'air', 'glue', 'bug'] }] },
          art: { draw: 'a paper basket in the centre surrounded by paper bottles of detergent, bleach, air freshener and glue, an apple and a towel set apart', banner: '우리 집 생활 화학제품', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-drug.e34.label-warning.activity.read', type: 'activity', title: '주의 표시 문구와 쉬운 뜻',
        method: '표시 문구와 뜻 잇기', tool: 'wordcards', minutes: 14,
        levels: { easy: '문구 2개에 쉬운 뜻 카드를 잇는다.', base: '문구 4개에 쉬운 뜻 카드를 잇는다.', challenge: '문구 4개를 잇고, 그 문구를 지키지 않으면 생길 일을 짝에게 말한다.' },
        activity: {
          title: '주의 표시 문구와 쉬운 뜻', tool: 'wordcards',
          teacher: '"가상 제품 뒷면에 \'섞어 쓰지 마시오\'라고 적혀 있어요. 무슨 뜻일까요?" 문구를 소리 내어 읽고 쉬운 뜻 카드를 옆에 놓게 한다. "주의 표시는 어른만 읽으면 돼요"라는 학생에게 "동생이 그 통을 들고 있으면 누가 알려 줄 수 있을까요?"라고 묻는다. 문구마다 "이 말을 안 지키면 어떻게 될까?"를 한 가지씩 말하게 한다.',
          task: '가상 제품의 주의 표시 문구 옆에 알맞은 쉬운 뜻 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            WM('세제 통 뒷면의 문구와 뜻을 이어요.', READ[0], 0.15),
            WM('표백제 통 뒷면의 문구와 뜻을 이어요.', READ[1], 0.2),
            WM('벌레약 통 뒷면의 문구와 뜻을 이어요.', READ[2], 0.25, { conclude: '주의 표시는 제품을 안전하게 쓰는 약속이에요. 읽고 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"섞어 쓰지 마시오"의 뜻은?', options: ['다른 세제와 섞지 않기', '물에 섞어 마시기', '많이 섞어 쓰기'], answer: '다른 세제와 섞지 않기' }] },
      }),
      C({
        id: 'saf-drug.e34.label-warning.activity.place', type: 'activity', title: '안전한 보관·위험한 보관',
        method: '보관 방법 나누기', tool: 'kitchen', minutes: 13,
        levels: { easy: '카드 4장을 나누고(놓으면 바로 알려 줌), 까닭 잇기는 2줄이다.', base: '카드 6장을 나누고, 보관 방법마다 까닭 카드를 3줄 잇는다.', challenge: '헷갈리는 카드가 더해진 8장을 나누고, 까닭 잇기에서 남는 함정 카드를 가려낸다.' },
        activity: {
          title: '안전한 보관·위험한 보관', tool: 'kitchen',
          teacher: '"이렇게 두면 안전할까요, 위험할까요? 누가 다칠 수 있을까요?" 카드를 놓을 때마다 까닭을 말하게 한다. "음료병에 옮기면 쓰기 편해요"를 안전한 보관에 두는 학생에게 "목마른 동생이 그 병을 보면 무엇이라고 생각할까요?"라고 묻는다. 원래 통에는 주의 표시가 있어 누구나 읽을 수 있다는 것을 짚는다.',
          task: '보관 방법 카드를 안전한 보관과 위험한 보관으로 나누고, 까닭을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('부엌 세제 보관 방법을 나누어요.', { groups: false, autoMotif: false }, ['안전한 보관', '위험한 보관'], [['원래 통 그대로', '높은 장에 두기', '뚜껑 꼭 닫기'], ['음료병에 옮기기', '바닥에 두기', '뚜껑 열어 두기']], 2, [['잠금 장에 두기'], ['간식 옆에 두기']], 0.15),
            SORT('욕실·베란다 제품 보관 방법을 나누어요.', { groups: false, autoMotif: false }, ['안전한 보관', '위험한 보관'], [['쓰고 바로 제자리', '먹을 것과 따로', '표시 떼지 않기'], ['욕조 옆 바닥에', '컵에 덜어 두기', '장난감 옆에 두기']], 2, [['햇볕 피해 두기'], ['약병에 옮기기']], 0.2),
            MATCH('보관 방법과 까닭을 이어요.', { autoMotif: false, title: '보관 방법 → 까닭' }, [['원래 통 그대로', '표시를 읽을 수 있게'], ['높은 장에 두기', '동생 손이 안 닿게'], ['음료병에 안 옮기기', '마실 것과 안 헷갈리게']], '예뻐 보이게', 0.25, { conclude: '생활 화학제품은 원래 통 그대로, 어린이 손이 닿지 않는 높은 곳에 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '안전한 보관이면 ○, 위험한 보관이면 ×를 써요.', columns: ['보관 방법', '○ / ×'], cells: [['원래 통 그대로', ''], ['음료병에 옮기기', ''], ['높은 장에 두기', ''], ['바닥에 두기', '']], answer: '○, ×, ○, ×' }] },
      }),
      C({
        id: 'saf-drug.e34.label-warning.activity.mix', type: 'activity', title: '갈림길: 세제를 섞으면?',
        method: '갈림길 결과 보기', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 세제를 섞으면?', tool: 'dilemma',
          teacher: '"두 세제를 섞으면 정말 더 깨끗해질까요?" 보기를 고를 때마다 결과 장면을 소리 내어 읽고, 누가 위험해지는지 짝과 말하게 한다. "조금만 섞으면 괜찮아요"라는 학생에게 "통 뒷면에 무엇이라고 적혀 있었나요? 조금이면 그 약속을 안 지켜도 될까요?"라고 묻는다. 섞으면 해로운 기체가 생길 수 있어서 \'섞지 마시오\'라고 적는다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('형이 두 세제를 섞자고 해요. 어떻게 할까요?', {
              text: '욕실 청소를 돕는데 형이 "두 세제를 섞으면 더 깨끗할 거야" 해요.', motif: 'cloud',
              choices: [
                { id: 'mix', text: '같이 섞어 본다', result: '코를 찌르는 냄새가 나서 숨쉬기 힘들었어요.', impact: [{ who: '나와 형', text: '숨쉬기 힘들어요', tone: -1 }] },
                { id: 'no', text: '"섞으면 안 돼"라고 말한다', result: '형이 멈칫했어요.', ending: '섞지 않아서 아무도 다치지 않았어요.', next: {
                  text: '형이 "조금만인데 뭐 어때?" 해요.', choices: [
                    { id: 'read', text: '통의 주의 표시를 같이 읽는다', result: '"섞어 쓰지 마시오"를 보고 형이 그만두었어요.', impact: [{ who: '형', text: '안전하게 청소했어요', tone: 1 }], ending: '주의 표시를 읽고 지켜서 위험을 막았어요.' },
                    { id: 'adult', text: '어른께 여쭤본다', result: '어른이 한 가지씩만 쓰라고 알려 주셨어요.', impact: [{ who: '형과 나', text: '바르게 알았어요', tone: 1 }], ending: '모를 때 어른께 물어 위험을 막았어요.' },
                    { id: 'leave', text: '형 혼자 하게 둔다', result: '형이 몰래 섞다가 기침을 했어요.', impact: [{ who: '형', text: '숨쉬기 힘들어요', tone: -1 }] },
                  ] } },
                { id: 'smell', text: '냄새를 맡아 본다', result: '냄새를 맡다 콜록콜록 기침이 났어요.', impact: [{ who: '나', text: '목이 따가워요', tone: -1 }] },
              ] }, [['no', 'read'], ['no', 'adult']],
            [{ id: 'label', text: '통에 섞지 말라고 적혀 있어서' }, { id: 'gas', text: '섞으면 해로운 냄새가 날 수 있어서' }, { id: 'clean', text: '섞으면 더 깨끗해지니까', why: '섞는다고 더 깨끗해지지 않고 위험해질 수 있어요.' }], ['label', 'gas'], 0.2),
            DIL('세제를 음료병에 옮기려 해요. 어떻게 할까요?', {
              text: '엄마가 쓰기 편하게 세제를 빈 음료병에 옮겨 담으려 해요.', motif: 'house',
              choices: [
                { id: 'help', text: '빈 병을 가져다 드린다', result: '나중에 동생이 음료인 줄 알고 마실 뻔했어요.', impact: [{ who: '동생', text: '세제를 마실 수 있어요', tone: -1 }] },
                { id: 'tell', text: '"원래 통에 두면 좋겠어요"', result: '엄마가 "왜?" 하고 물으셨어요.', ending: '원래 통에 두자고 말씀드렸어요.', next: {
                  text: '엄마가 "왜 원래 통이 좋아?" 하고 물으세요.', choices: [
                    { id: 'why', text: '"동생이 음료로 알 수 있어요"', result: '엄마가 고개를 끄덕이며 원래 통에 두셨어요.', impact: [{ who: '동생', text: '안전해졌어요', tone: 1 }], ending: '까닭을 말해 가족 모두를 지켰어요.' },
                    { id: 'just', text: '"그냥요"', result: '까닭을 몰라 엄마가 그대로 옮기셨어요.', impact: [{ who: '동생', text: '헷갈릴 수 있어요', tone: -1 }] },
                    { id: 'name', text: '"병에 이름만 쓰면 돼요"', result: '이름을 써도 동생은 아직 글을 못 읽어요.', impact: [{ who: '동생', text: '여전히 헷갈려요', tone: -1 }] },
                  ] } },
                { id: 'quiet', text: '모른 척한다', result: '음료병 세제가 냉장고 옆에 놓였어요.', impact: [{ who: '가족', text: '헷갈릴 수 있어요', tone: -1 }] },
              ] }, [['tell', 'why']],
            [{ id: 'label', text: '원래 통에는 주의 표시가 있어서' }, { id: 'drink', text: '음료병은 마실 것으로 보여서' }, { id: 'easy', text: '작은 병이 쓰기 편해서', why: '편해도 헷갈리면 누군가 마실 수 있어요.' }], ['label', 'drink'], 0.25),
            DIL('동생이 벌레약을 뿌리겠대요. 어떻게 할까요?', {
              text: '방에 모기가 있어요. 동생이 벌레약 통을 들고 "내가 뿌릴래!" 해요.', motif: 'star',
              choices: [
                { id: 'spray', text: '같이 뿌려 본다', result: '얼굴 가까이 뿌려져 눈이 따가웠어요.', impact: [{ who: '동생', text: '눈이 따가워요', tone: -1 }] },
                { id: 'adult', text: '"어른께 부탁하자"', result: '어른이 와서 대신 뿌려 주셨어요.', ending: '어른께 맡겨서 안전했어요.', next: {
                  text: '어른이 뿌린 뒤 동생이 방에 바로 들어가 누우려 해요.', choices: [
                    { id: 'wait', text: '창문 열고 잠시 밖에서 기다린다', result: '바람이 통한 뒤 들어가 편히 잤어요.', impact: [{ who: '동생', text: '안전하게 잤어요', tone: 1 }], ending: '환기한 뒤에 들어가 안전했어요.' },
                    { id: 'in', text: '바로 들어가 눕는다', result: '약 냄새 때문에 머리가 아팠어요.', impact: [{ who: '동생', text: '머리가 아파요', tone: -1 }] },
                    { id: 'sniff', text: '냄새를 맡아 본다', result: '냄새를 맡다 기침이 났어요.', impact: [{ who: '나', text: '목이 따가워요', tone: -1 }] },
                  ] } },
                { id: 'hide', text: '통을 침대 밑에 숨긴다', result: '나중에 동생이 다시 찾아 갖고 놀았어요.', impact: [{ who: '동생', text: '또 만질 수 있어요', tone: -1 }] },
              ] }, [['adult', 'wait']],
            [{ id: 'adult', text: '어린이는 어른과 함께 써야 해서' }, { id: 'air', text: '뿌린 뒤에는 바람이 통해야 해서' }, { id: 'fun', text: '뿌리는 것이 재미있어서', why: '재미로 뿌리면 눈이나 숨에 해로울 수 있어요.' }], ['adult', 'air'], 0.3, { conclude: '생활 화학제품은 섞지 않고, 원래 통에 두고, 어린이는 어른과 함께 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '두 세제를 ___ 쓰지 않아요.', answer: '섞어' }] },
      }),
      C({
        id: 'saf-drug.e34.label-warning.activity.talk', type: 'activity', title: '동생에게 할 말 고르기',
        method: '짝 토의로 할 말 고르기', tool: 'emotion', minutes: 13,
        levels: { easy: '바른 말 2개를 고른다(카드 3장).', base: '바른 말 3개를 고르고(카드 5장), 동생 마음 카드를 잇는다.', challenge: '카드 7장에서 바른 말을 고른 뒤 더 좋은 말을 하나 만들어 짝에게 말한다.' },
        activity: {
          title: '동생에게 할 말 고르기', tool: 'emotion',
          teacher: '"동생이 세제 병을 들고 놀아요. 무엇이라고 말하면 동생이 병을 내려놓을까요?" 고른 말을 짝에게 동생 역할을 맡겨 실제로 말해 보게 한다. "소리 지르면 빨리 내려놔요"라는 학생에게 "놀란 동생이 병을 떨어뜨리면 어떻게 될까요? 동생 마음은 어떨까요?"라고 묻는다. 부드럽게 말하고 바로 어른께 알리는 것이 함께 필요하다는 것을 짚는다.',
          task: '동생이 세제 병을 들고 노는 장면에서 할 말과 동생 마음을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '동생에게 할 바른 말을 골라요.', toolOptions: { mode: 'pick', basket: '동생에게 할 말', cards: [{ id: 'give', text: '위험해, 나 줄래?' }, { id: 'yell', text: '바보야, 내놔!' }, { id: 'go', text: '같이 엄마께 가자' }, { id: 'play', text: '혼자 갖고 놀아' }, { id: 'toy', text: '이 장난감이랑 바꾸자' }] }, target: { pick: ['give', 'go', 'toy'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '동생에게 할 바른 말 2개를 골라요.', toolOptions: { cards: [{ id: 'give', text: '위험해, 나 줄래?' }, { id: 'yell', text: '바보야, 내놔!' }, { id: 'go', text: '같이 엄마께 가자' }] }, target: { pick: ['give', 'go'] } },
                challenge: { prompt: '동생에게 할 바른 말을 모두 골라요(7장).', toolOptions: { cards: [{ id: 'give', text: '위험해, 나 줄래?' }, { id: 'yell', text: '바보야, 내놔!' }, { id: 'go', text: '같이 엄마께 가자' }, { id: 'play', text: '혼자 갖고 놀아' }, { id: 'toy', text: '이 장난감이랑 바꾸자' }, { id: 'drink', text: '한번 마셔 봐' }, { id: 'hug', text: '괜찮아, 같이 치우자' }] }, target: { pick: ['give', 'go', 'toy', 'hug'] } },
              } },
            { prompt: '내 말을 들은 동생의 마음을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'soft', label: '다정하게 말해 줬어요' }, { id: 'grab', label: '소리치며 뺏었어요' }], cards: ['편안함', '고마움', '속상함', '무서움'] }, target: { match: { soft: ['편안함', '고마움'], grab: ['속상함', '무서움'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '다정한 말을 들은 동생 마음을 골라요.', toolOptions: { slots: [{ id: 'soft', label: '다정하게 말해 줬어요' }] }, target: { match: { soft: ['편안함', '고마움'] } } } } },
            BR('동생이 병을 꼭 쥐어요. 어떻게 할까요?', '동생이 "싫어, 내 거야!" 하며 세제 병을 꼭 쥐어요.', [
              { id: 'pull', text: '힘으로 뺏어요', result: '병이 쏟아져 둘 다 세제가 묻었어요.', mood: '걱정' },
              { id: 'call', text: '바로 어른을 불러요', result: '어른이 오셔서 병을 높은 곳에 두셨어요.', mood: '편안함' },
              { id: 'leave', text: '그냥 놀게 둬요', result: '동생이 뚜껑을 열려고 해요.', mood: '무서움' },
            ], 'call', 0.25, { conclude: '동생이 위험한 것을 들면 부드럽게 말하고 바로 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '동생이 세제 병을 들고 놀 때 할 말은?', options: ['"바보야, 내놔!"', '"위험해, 나 줄래?"', '"혼자 놀아"'], answer: '"위험해, 나 줄래?"' }] },
      }),
      C({
        id: 'saf-drug.e34.label-warning.wrap.comic', type: 'wrap', title: '우리 집 안전 보관 네 장면',
        method: '네 장면 차례', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장을 차례로 놓는다.', base: '장면 4장을 차례로 놓는다.', challenge: '틀린 장면 한 장이 섞인 5장에서 그 장면을 빼고 4장을 놓는다. 마지막 장면 말풍선 고르기는 모든 단계가 함께 한다.' },
        wrap: {
          teacher: '"오늘 배운 것을 네 장면 이야기로 정리해 볼까요?" 장면을 다 놓으면 처음부터 끝까지 짝과 번갈아 읽게 한다. "음료병에 옮겨 둠" 장면을 넣으려는 학생에게 "그렇게 두면 동생에게 어떤 일이 생길 수 있었나요?"라고 묻는다. 출구 2번은 마지막 장면에서 내가 할 말을 고르는 것이다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'story' }, (() => {
              const it = ORD('우리 집 안전 보관 장면을 차례로 놓아요.', { title: '우리 집 안전 보관' }, [{ id: 'see', text: '바닥에 세제가 있어요' }, { id: 'tell', text: '어른께 알려요' }, { id: 'move', text: '원래 통째 높은 장에' }, { id: 'safe', text: '동생이 안전해요' }], 2, { id: 'pour', text: '음료병에 옮겨 둠', why: '음료병에 옮기면 마실 것으로 헷갈려요.' }, 0.15);
              return { prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels };
            })()),
            { type: 'choice', prompt: '마지막 장면에서 동생에게 할 말로 알맞은 것은?', options: ['"세제는 높은 곳에 있어"', '"세제 갖고 놀자"', '"음료병에 넣자"'], answer: 0, difficulty: 0.1, explain: '세제는 원래 통 그대로 높은 곳에 둔다고 알려 줘요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 집 안전 보관',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '세제는 원래 ___ 그대로 높은 곳에 두어요.', answer: '통' },
            { type: 'draw', prompt: '세제를 안전하게 둔 우리 집 모습을 그려요.' },
          ],
          easy: { note: '원래 통, 높은 곳을 떠올려요.', items: [{ type: 'choice', prompt: '세제는 어디에 둘까요?', options: ['높은 장', '바닥'], answer: '높은 장' }] },
        },
      }),
      C({
        id: 'saf-drug.e34.label-warning.wrap.home', type: 'wrap', title: '집에서 어른과 확인할 점검표',
        method: '가정 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검표 2칸 가운데 확인할 것을 고른다.', base: '점검표 4칸 가운데 확인할 것 3개를 고른다.', challenge: '3개를 고른 뒤 우리 집에 더할 칸 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"집에 가서 어른과 함께 확인할 것은 무엇일까요?" 점검표를 함께 읽고 확인할 칸만 고르게 한다. "예쁜 병에 옮겼나"를 고르는 학생에게 "옮겨 담는 것은 안전한 보관이었나요, 위험한 보관이었나요?"라고 묻는다. 점검은 꼭 어른과 함께 하고, 혼자 세제 통을 옮기지 않는다는 것을 짚는다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'kitchen' }, (() => {
              const it = CHK('집에서 어른과 확인할 것만 골라요.', '우리 집 점검표', [{ id: 'orig', text: '원래 통에 있나', ok: true }, { id: 'pour', text: '예쁜 병에 옮겼나', ok: false }, { id: 'high', text: '높은 곳에 있나', ok: true }, { id: 'mix', text: '섞지 않기 약속', ok: true }], [0, 1], 0.15);
              return { prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels };
            })()),
            { type: 'choice', prompt: '점검하다 바닥에서 세제 통을 찾았어요. 어떻게 할까요?', options: ['혼자 높이 올려요', '어른께 알려요', '음료병에 옮겨요'], answer: 1, difficulty: 0.15, explain: '혼자 옮기다 쏟을 수 있으니 어른께 알려 함께 옮겨요.' },
            { type: 'short', prompt: '우리 집 점검표에 더하고 싶은 칸을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '우리 집 안전 점검(어른과 함께)',
          items: [
            { type: 'check', prompt: '어른과 함께 확인한 것에 표시해요.', options: ['원래 통에 있어요', '높은 곳에 있어요', '섞지 않기로 했어요'] },
            { type: 'short', prompt: '확인하며 어른께 들은 말을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 흡연과 간접흡연이 몸에 주는 피해 (별표 2 '중독성물질을 알고 안전한 활용 방법' + 7대 표준안 흡연)
  // ======================================================================================================
  {
    const C = T('secondhand-smoke', 3);
    const TOWN = {
      title: '가상의 우리 동네', grid: [6, 4],
      regions: [
        { name: '놀이터(금연)', cells: [[0, 0], [1, 0]] }, { name: '학교 앞(금연)', cells: [[2, 0], [3, 0]] }, { name: '버스 정류장(금연)', cells: [[4, 0], [5, 0]] },
        { name: '골목길', cells: [[0, 1], [1, 1], [2, 1]] }, { name: '시장', cells: [[3, 1], [4, 1], [5, 1]] },
        { name: '우리 집', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '공원', cells: [[2, 2], [3, 2], [2, 3], [3, 3]] }, { name: '주차장', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] },
      ],
    };
    const AVOID = [['자리 옮기기', 12], ['부탁하기', 7], ['창문 닫기', 5]];
    const APIC = { type: 'picture', title: '연기를 피하는 방법(가상의 우리 반 조사)', unit: '명', xLabel: '방법', yLabel: '친구 수', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'person' };
    M.push(
      C({
        id: 'saf-drug.e34.secondhand-smoke.intro.path', type: 'intro', title: '연기가 들어가는 숨길',
        method: '숨길 따라 누르기', tool: 'body', minutes: 6,
        levels: { easy: '코 → 기관 두 칸이 눌리는 것을 본다.', base: '코 → 기관 → 폐 세 칸이 차례로 눌리는 것을 본다.', challenge: '세 칸을 본 뒤 연기가 폐에 남기는 영향 하나를 말한다.' },
        intro: {
          teacher: '"담배 연기를 마시면 연기는 몸 어디로 갈까요?" 시연 단추로 종이 몸에서 코 → 기관 → 폐가 차례로 눌려 숨길이 이어지는 것을 보인다. "옆에 있기만 하면 연기는 안 들어와요"라는 말이 나오면 "옆 사람도 숨을 쉬지요? 숨을 쉬면 공기와 함께 무엇이 들어올까요?"라고 되묻는다. 담배를 피우는 사람뿐 아니라 옆 사람의 몸에도 연기가 들어간다(간접흡연)는 것을 짚는다.',
          student: '종이 몸에서 연기가 코로 들어가 어디까지 가는지 숨길을 따라가 보아요.',
          demo: { tool: 'body', options: { mode: 'path', organs: ['코', '입', '기관', '폐', '심장', '위'] }, sequence: [{ path: ['코', '기관'] }, { path: ['코', '기관', '폐'] }] },
          art: { draw: 'a paper body outline with a dotted grey smoke trail entering the nose, going down the windpipe into the lungs, a paper child standing next to a smoking adult silhouette', banner: '연기는 폐까지 가요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가족의 흡연 여부를 묻거나 발표시키지 않는다. 담배를 피우는 사람을 탓하는 말보다 연기를 피하는 행동에 초점을 둔다.',
      }),
      C({
        id: 'saf-drug.e34.secondhand-smoke.intro.scene', type: 'intro', title: '정류장 연기 장면, 내 마음 크기',
        method: '장면 속 마음 크기', tool: 'emotion', minutes: 6,
        levels: { easy: '불편함과 편안함 두 마음 가운데 어느 쪽인지 말한다.', base: '불편한 마음이 얼마나 큰지 1~5 크기로 함께 본다.', challenge: '아이 마음 크기를 본 뒤 담배를 피우는 어른은 어떤 마음일지도 생각해 말한다.' },
        intro: {
          teacher: '"버스 정류장에서 옆 사람 담배 연기가 날아와요. 그림 속 아이 마음은 얼마나 불편할까요?" 시연 단추로 마음 크기 칸이 4로 올라가는 것을 보이고 "왜 그만큼 불편할까요?"라고 묻는다(기다릴 반응: "냄새가 나요", "기침이 나요"). "밖이라서 괜찮아요"라는 말이 나오면 "바로 옆에서 날아오는 연기도 밖이니까 괜찮을까요?"라고 되묻는다.',
          student: '연기가 날아오는 장면을 보고, 그림 속 아이의 불편한 마음이 얼마나 클지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '정류장에서 옆 사람 담배 연기가 날아와요.', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper bus stop with a child covering the nose while grey paper smoke curls toward her from an adult silhouette', banner: '연기가 날아와요', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-drug.e34.secondhand-smoke.activity.signs', type: 'activity', title: '동네 지도에서 금연 표지 찾기',
        method: '동네 지도에 금연 표지 찾기', tool: 'map', minutes: 9,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 금연 표지가 있는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳에서 할 행동이나 까닭을 보기에서 고른다(표지 없는 골목길 포함).' },
        activity: {
          title: '동네 지도에서 금연 표지 찾기', tool: 'map',
          teacher: '"가상의 우리 동네에서 \'금연\' 표지가 붙은 곳은 어디일까요? 왜 그곳에 붙였을까요?" 핀을 꽂은 뒤 그곳에 누가 많이 모이는지 말하게 한다. "표지가 없는 곳은 연기가 와도 괜찮아요"라는 학생에게 "표지가 없으면 연기가 몸에 덜 해로울까요? 그럴 때 나는 어떻게 할 수 있을까요?"라고 묻는다. 표지가 있든 없든 연기는 피한다는 것을 짚는다.',
          task: '가상의 동네 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(TOWN, '어린이가 노는 곳의 금연 표지에 핀을 꽂아요.', '놀이터(금연)', { q: '이곳이 금연인 까닭은?', choices: ['어린이가 연기를 안 마시게', '놀이기구가 낡아서', '시끄러워서'], answer: 0 }, 0.15),
            PIN(TOWN, '학교 앞 금연 표지에 핀을 꽂아요.', '학교 앞(금연)', { q: '학교 앞에서 연기가 오면?', choices: ['연기 쪽으로 간다', '자리를 옮긴다', '숨을 크게 쉰다'], answer: 1 }, 0.2),
            PIN(TOWN, '버스를 기다리는 곳의 금연 표지에 핀을 꽂아요.', '버스 정류장(금연)', { q: '여럿이 기다리는 곳이 금연인 까닭은?', choices: ['옆 사람도 연기를 마셔서', '버스가 늦어서', '비가 와서'], answer: 0 }, 0.2),
            PIN(TOWN, '표지는 없지만 연기가 날아오는 곳에 핀을 꽂아요.', '골목길', { q: '표지가 없는 곳에서 연기가 오면?', choices: ['참고 그냥 걷는다', '다른 쪽으로 비켜 걷는다', '연기를 따라 걷는다'], answer: 1 }, 0.25, { conclude: '금연 표지는 모두의 몸을 지키는 약속이에요. 표지가 없어도 연기는 피해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '금연 표지가 있는 곳으로 알맞은 것은?', options: ['놀이터', '내 방 책상', '냉장고'], answer: '놀이터' }] },
      }),
      C({
        id: 'saf-drug.e34.secondhand-smoke.activity.harm', type: 'activity', title: '담배 연기에 대한 말 나누기',
        method: '맞는 말/틀린 말 나누기', tool: 'mindmap', minutes: 9,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장을 나누고, 틀린 말 하나를 맞는 말로 고쳐 짝에게 말한다.' },
        activity: {
          title: '담배 연기에 대한 말 나누기', tool: 'mindmap',
          teacher: '"\'옆 사람은 괜찮다\'는 맞는 말일까요?" 카드를 놓을 때마다 까닭을 짧게 말하게 한다. "밖에서 피운 연기는 상관없어요"를 맞는 말에 두는 학생에게 "바람이 불면 연기는 어디로 갈까요? 옆에 서 있는 사람은요?"라고 묻는다. 틀린 말은 "~가 아니라 ~예요"로 고쳐 말하게 한다.',
          task: '담배 연기에 대한 말 카드를 알맞은 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('연기가 들어가는 길에 대한 말을 나누어요.', { topic: '연기와 숨' }, ['맞는 말', '틀린 말'], [['연기는 폐로 들어가요', '옆 사람도 연기를 마셔요', '숨 쉴 때 함께 들어와요'], ['옆에 있으면 괜찮아요', '밖 연기는 상관없어요', '코로는 안 들어와요']], 2, [['연기는 피하는 게 좋아요'], ['조금 마시면 괜찮아요']], 0.15),
            SORT('담배 연기와 몸에 대한 말을 나누어요.', { topic: '연기와 몸' }, ['맞는 말', '틀린 말'], [['기침이 날 수 있어요', '해로운 것이 들어 있어요', '냄새가 옷에 배요'], ['연기는 금방 사라져요', '어른만 해로워요', '향 좋은 연기는 괜찮아요']], 2, [['어린이 몸에도 해로워요'], ['한 번은 괜찮아요']], 0.2),
            SORT('연기가 날아올 때 할 일과 안 할 일을 나누어요.', { topic: '연기가 올 때' }, ['할 일', '안 할 일'], [['자리를 옮겨요', '부드럽게 부탁해요', '어른께 말해요'], ['연기 쪽으로 가요', '화내며 소리쳐요', '꾹 참고 서 있어요']], 2, [['바람 반대쪽에 서요'], ['연기를 마셔 봐요']], 0.25, { conclude: '담배 연기는 옆 사람 몸에도 들어가요. 연기는 피하고, 필요하면 부드럽게 부탁해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '맞는 말이면 ○, 틀린 말이면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['연기는 폐로 들어가요', ''], ['옆에 있으면 괜찮아요', ''], ['어른만 해로워요', ''], ['냄새가 옷에 배요', '']], answer: '○, ×, ×, ○' }] },
      }),
      C({
        id: 'saf-drug.e34.secondhand-smoke.activity.ask', type: 'activity', title: '부드럽게 부탁하는 말',
        method: '부탁하는 말풍선 채우기', tool: 'story', minutes: 10,
        levels: { easy: '부드러운 말 2개를 고르고(카드 3장), 말풍선 1칸을 채운다.', base: '부드러운 말 3개를 고르고(카드 5장), 말풍선 2칸을 채운 뒤 까닭을 말한다.', challenge: '카드 7장에서 고르고, 말풍선 3칸을 채운 뒤 내 말로 바꿔 짝에게 말한다.' },
        activity: {
          title: '부드럽게 부탁하는 말', tool: 'story',
          teacher: '"집에서 가족이 담배를 피울 때 무엇이라고 말하면 기분 좋게 들어 줄까요?" 말풍선을 채운 뒤 짝에게 가족 역할을 맡겨 실제로 말해 보게 한다. "싫어! 저리 가!"를 고르는 학생에게 "그 말을 들은 가족은 어떤 마음일까요? 내 몸이 어떤지 알려 주면 어떨까요?"라고 묻는다. 내 몸 상태(기침이 나요) + 부탁(밖에서 피워 주세요) + 고마움 틀을 짚는다.',
          task: '가족에게 부드럽게 부탁하는 말을 고르고, 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '가족에게 할 부드러운 부탁을 골라요.', toolOptions: { mode: 'pick', basket: '부드러운 부탁', cards: [{ id: 'cough', text: '기침이 나요, 부탁해요' }, { id: 'go', text: '싫어! 저리 가!' }, { id: 'out', text: '밖에서 피워 주세요' }, { id: 'hate', text: '아빠 미워!' }, { id: 'thanks', text: '들어 주면 고마워요' }] }, target: { pick: ['cough', 'out', 'thanks'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '부드러운 부탁 2개를 골라요.', toolOptions: { cards: [{ id: 'cough', text: '기침이 나요, 부탁해요' }, { id: 'go', text: '싫어! 저리 가!' }, { id: 'out', text: '밖에서 피워 주세요' }] }, target: { pick: ['cough', 'out'] } },
                challenge: { prompt: '부드러운 부탁을 모두 골라요(7장).', toolOptions: { cards: [{ id: 'cough', text: '기침이 나요, 부탁해요' }, { id: 'go', text: '싫어! 저리 가!' }, { id: 'out', text: '밖에서 피워 주세요' }, { id: 'hate', text: '아빠 미워!' }, { id: 'thanks', text: '들어 주면 고마워요' }, { id: 'cry', text: '울면서 떼쓰기' }, { id: 'smell', text: '냄새가 매워요' }] }, target: { pick: ['cough', 'out', 'thanks', 'smell'] } },
              } },
            { prompt: '말풍선 빈칸을 채워 부탁하는 말을 만들어요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '나', label: '연기 때문에 ___.' }, { id: 'b2', who: '나', label: '___ 피워 주실래요?' }], cards: ['기침이 나요', '밖에서', '시끄러워요', '내 옆에서'] }, target: { fill: { b1: '기침이 나요', b2: '밖에서' } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '말풍선 빈칸 1칸을 채워요.', toolOptions: { slots: [{ id: 'b1', who: '나', label: '연기 때문에 ___.' }], cards: ['기침이 나요', '시끄러워요'] }, target: { fill: { b1: '기침이 나요' } } },
                challenge: { prompt: '말풍선 빈칸 3칸을 채워요.', toolOptions: { slots: [{ id: 'b1', who: '나', label: '연기 때문에 ___.' }, { id: 'b2', who: '나', label: '___ 피워 주실래요?' }, { id: 'b3', who: '나', label: '들어 주셔서 ___.' }], cards: ['기침이 나요', '밖에서', '시끄러워요', '내 옆에서', '고마워요', '싫어요'] }, target: { fill: { b1: '기침이 나요', b2: '밖에서', b3: '고마워요' } } },
              } },
            ORD('부탁하는 말을 차례로 놓아요.', { title: '부탁하는 차례' }, [{ id: 'call', text: '아빠, 있잖아요' }, { id: 'body', text: '연기에 기침이 나요' }, { id: 'ask', text: '밖에서 피워 주세요' }, { id: 'thank', text: '들어 주셔서 고마워요' }], 3, { id: 'yell', text: '소리 지르며 울기', why: '소리 지르면 내 부탁이 잘 전해지지 않아요.' }, 0.25, { conclude: '내 몸이 어떤지 알리고 부드럽게 부탁하면 가족도 기분 좋게 들어 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '부탁하는 말을 완성해요.', text: '"연기 때문에 기침이 나요. ___에서 피워 주실래요?"', answer: '밖' }] },
      }),
      C({
        id: 'saf-drug.e34.secondhand-smoke.wrap.chart', type: 'wrap', title: '연기 피하는 방법 그림그래프',
        method: '가상 조사 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '방법 2칸의 그림그래프를 완성하고 더 많은 쪽을 고른다.', base: '방법 3칸을 완성하고 가장 많은 방법을 고른다.', challenge: '3칸을 완성하고 두 방법이 몇 명 차이인지 읽는다.' },
        wrap: {
          teacher: '"가상의 우리 반 조사에서 연기를 피하는 방법으로 가장 많이 고른 것은 무엇일까요?" 큰 그림이 5명이라는 것을 먼저 함께 읽고 그래프를 완성하게 한다. 12명을 작은 그림 12개로만 놓는 학생에게 "큰 그림 하나가 5명이에요. 더 쉽게 놓을 수 있을까요?"라고 묻는다. 그래프는 가상 자료이며, 어떤 방법이든 연기를 피하는 것이 중요하다는 것을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: Object.assign({}, APIC, { mode: 'build', data: AVOID }), prompt: '표를 보고 연기 피하는 방법 그림그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 방법 2칸의 그림그래프를 완성해요.', toolOptions: { data: AVOID.slice(0, 2) }, target: { build: true } } } },
            { type: 'tool', tool: 'chart', options: Object.assign({}, APIC, { mode: 'read', data: AVOID, question: '가장 많은 방법은?', choices: AVOID.map((x) => x[0]) }), prompt: '그래프에서 가장 많이 고른 방법은?', target: { pick: 0 }, difficulty: 0.15,
              levels: {
                easy: { prompt: '그래프에서 더 많이 고른 방법은?', toolOptions: { data: AVOID.slice(0, 2), choices: AVOID.slice(0, 2).map((x) => x[0]) }, target: { pick: 0 } },
                challenge: { prompt: '자리 옮기기는 부탁하기보다 몇 명 많나요?', toolOptions: { question: '두 방법의 차이는 몇 명?', choices: [] }, target: { value: 5 } },
              } },
            MOOD,
          ],
        },
        worksheet: {
          title: '연기를 피하는 방법',
          items: [
            { type: 'table', prompt: '가상의 우리 반 조사 표의 빈칸을 채워요.', columns: ['방법', '친구 수(명)'], cells: [['자리 옮기기', '12'], ['부탁하기', ''], ['창문 닫기', '5']], answer: '7' },
            { type: 'short', prompt: '연기가 날아올 때 내가 할 방법을 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-drug.e34.secondhand-smoke.wrap.self', type: 'wrap', title: '연기 피하기 스스로 점검',
        method: '스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 이번 주 실천할 날을 정한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 나는 무엇을 할 수 있나요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 출구 2번에서 "꾹 참아요"를 고른 학생에게 "참고 있으면 연기는 내 몸에 안 들어올까요? 한 걸음 옮기면 어떨까요?"라고 되묻는다. 도전 단계는 실천할 요일을 정해 출구 3번에 쓰게 한다.',
          exitTicket: [
            SELF('연기 피하기 점검', ['연기를 피할 수 있어요', '부드럽게 부탁할 수 있어요', '금연 표지를 알아요', '실천할 날을 정했어요'], [2, 3, 4]),
            { type: 'choice', prompt: '길에서 담배 연기가 날아와요. 바른 행동은?', options: ['꾹 참아요', '자리를 옮겨요', '연기 쪽으로 가요'], answer: 1, difficulty: 0.1, explain: '연기가 오면 자리를 옮겨 피해요.' },
            { type: 'short', prompt: '이번 주에 연기를 피하는 행동을 할 날과 할 일을 써요.' },
          ],
        },
        worksheet: {
          title: '연기를 피해요',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 것에 표시해요.', options: ['연기가 오면 자리 옮기기', '부드럽게 부탁하기', '금연 표지 알아보기'] },
            { type: 'draw', prompt: '연기를 피해 자리를 옮기는 내 모습을 그려요.' },
          ],
          easy: { note: '연기가 오면 "옮기기"를 떠올려요.', items: [{ type: 'choice', prompt: '연기가 오면?', options: ['자리 옮기기', '참기'], answer: '자리 옮기기' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 약 봉투와 설명서 읽기 (별표 2 초등 '약물 오남용의 위험성 및 올바른 약물 복용법 알기')
  // ======================================================================================================
  {
    const C = T('read-insert', 4);
    const KEYS = ['먹는 양', '먹는 때', '보관', '주의'];
    // 설명서 문장 나누기: groups = 칸마다 문장 2개(기본 4칸 8장), 쉬움 = 앞 두 칸(4장), 도전 = 어느 칸에도 안 맞는 함정 문장(trap)이 섞인다
    const FIND = (prompt, title, groups, trap, d, more) => {
      const p = strip(prompt);
      return {
        prompt, toolOptions: { mode: 'sort', topic: title, slots: KEYS, cards: mix(groups) }, target: sortT(KEYS, groups), difficulty: d,
        levels: {
          easy: { prompt: `${p}(칸 2개).`, toolOptions: { slots: KEYS.slice(0, 2), cards: mix(groups.slice(0, 2)) }, target: sortT(KEYS.slice(0, 2), groups.slice(0, 2)) },
          challenge: { prompt: `${p}. 어느 칸에도 안 맞는 문장은 빼요.`, toolOptions: { cards: mix(groups).concat([trap]) }, target: sortT(KEYS, groups) },
        },
        ...more,
      };
    };
    const NOTE = (o) => Object.assign({ showDigital: true }, o);
    M.push(
      C({
        id: 'saf-drug.e34.read-insert.intro.words', type: 'intro', title: '약 봉투 낱말 카드 넘기기',
        method: '약 봉투 낱말 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '이름·먹는 양 카드 2장을 넘기며 뜻을 본다.', base: '이름·먹는 양·먹는 때·주의할 점 4장을 넘기며 봉투 그림에서 자리를 짚는다.', challenge: '봉투 그림을 가리고 카드 4장의 뜻을 먼저 말한 뒤 넘겨 확인한다.' },
        intro: {
          teacher: '"가상의 약 봉투에는 어떤 낱말이 적혀 있을까요?" 시연 단추로 \'이름\' \'먹는 양\' 카드가 먼저, 이어서 \'먹는 때\' \'주의할 점\' 카드가 뒤집히는 것을 보이며 봉투 그림에서 그 자리를 손가락으로 짚는다. "약 봉투는 어른만 읽으면 돼요"라는 말이 나오면 "내 이름이 적힌 봉투인지는 누가 확인할 수 있을까요?"라고 되묻는다. 오늘은 봉투와 설명서에서 꼭 볼 것을 찾아 읽는다고 밝힌다.',
          student: '약 봉투 낱말 카드를 넘기며, 봉투 그림에서 그 낱말이 어디에 있는지 짚어 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'flip', front: 'en', speak: false, words: [{ en: '이름', ko: '누구의 약인지' }, { en: '먹는 양', ko: '한 번에 먹을 만큼' }, { en: '먹는 때', ko: '언제 먹는지' }, { en: '주의할 점', ko: '조심할 것' }] }, sequence: [{ flip: ['이름', '먹는 양'] }, { flip: ['이름', '먹는 양', '먹는 때', '주의할 점'] }] },
          art: { draw: 'a large paper medicine envelope with four labelled paper strips for name, amount, time and caution, a paper magnifying glass beside it', banner: '약 봉투에서 찾아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '봉투는 가상의 것이다. 실제 약 이름·먹는 양은 보이지 않는다.',
      }),
      C({
        id: 'saf-drug.e34.read-insert.intro.clock', type: 'intro', title: '다음 먹는 시각 구하기',
        method: '다음 먹는 시각 구하기', tool: 'clock', minutes: 6,
        levels: { easy: '디지털 시각을 보며 아침 7시와 6시간 뒤인 오후 1시를 읽는다.', base: '디지털 시각 없이 바늘이 7시 → 1시로 가는 것을 보고 시각을 말한다.', challenge: '오후 1시 다음, 그다음 먹는 시각(저녁 7시)까지 구해 말한다.' },
        intro: {
          teacher: '"가상의 약 봉투에 \'6시간마다\'라고 적혀 있어요. 아침 7시에 먹었으면 다음은 몇 시일까요?" 시연 단추로 바늘이 7시 → 1시 → 7시로 움직이는 것을 보이며 손가락으로 6칸을 함께 센다(기다릴 반응: "1시요"). "빨리 나으려면 3시간 뒤에 또 먹어도 돼요"라는 말이 나오면 "봉투에 적힌 때보다 빨리 먹으면 하루에 먹는 양은 어떻게 될까요?"라고 되묻는다. 이 봉투와 시각은 연습용 가상 자료라는 것을 밝힌다.',
          student: '가상 봉투의 \'6시간마다\'를 읽고, 아침 7시 다음에 먹을 시각을 시계로 구해 보아요.',
          demo: { tool: 'clock', options: NOTE({}), sequence: [{ h: 7, m: 0 }, { h: 1, m: 0 }, { h: 7, m: 0 }] },
          art: { draw: 'a paper clock with a curved paper arrow sweeping six hours from seven to one, a small paper medicine envelope tag reading every six hours', banner: '다음은 몇 시?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '\'6시간마다\'는 시각 계산 연습을 위한 가상 값이다. 어떤 약의 복용법으로 소개하지 않는다.',
      }),
      C({
        id: 'saf-drug.e34.read-insert.activity.find', type: 'activity', title: '설명서 문장을 네 칸에 나누기',
        method: '설명서 문장 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '먹는 양·먹는 때 두 칸에 문장 4개를 나눈다(놓으면 바로 알려 줌).', base: '먹는 양·먹는 때·보관·주의 네 칸에 문장 8개를 나눈다.', challenge: '어느 칸에도 안 맞는 함정 문장 한 장이 섞인 9장에서 함정 문장을 빼고 나눈다.' },
        activity: {
          title: '설명서 문장을 네 칸에 나누기', tool: 'mindmap',
          teacher: '"이 문장은 얼마나 먹는지, 언제 먹는지, 어디에 두는지, 무엇을 조심하는지 가운데 무엇을 알려 줄까요?" 문장을 소리 내어 읽고 칸을 고르게 한다. "서늘한 곳에 두어요"를 먹는 때에 두는 학생에게 "이 문장은 언제 먹는지 알려 주나요, 어디에 두는지 알려 주나요?"라고 묻는다. 함정 문장(맛·색)은 안전하게 먹는 데 필요한 정보가 아니라는 것을 짚는다.',
          task: '가상 설명서의 문장을 먹는 양·먹는 때·보관·주의 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            FIND('가상 시럽약 설명서 문장을 나누어요.', '시럽약 설명서', [['정해진 양만 먹어요', '나이마다 양이 달라요'], ['밥 먹은 뒤에 먹어요', '정해진 간격을 지켜요'], ['서늘한 곳에 두어요', '어린이 손 안 닿게'], ['이상하면 바로 멈춰요', '먹고 졸릴 수 있어요']], { id: 'taste', text: '딸기 맛이 나요' }, 0.2),
            FIND('가상 가루약 봉투 문장을 나누어요.', '가루약 봉투', [['봉투에 적힌 만큼', '더 먹지 않아요'], ['아침·저녁에 먹어요', '자기 전에 먹어요'], ['봉투째 보관해요', '햇볕 피해 두어요'], ['다른 약과 먹기 전 묻기', '몸이 이상하면 어른께']], { id: 'color', text: '봉투 색이 예뻐요' }, 0.25),
            FIND('가상 알약 설명서 문장을 나누어요.', '알약 설명서', [['나이에 맞게 먹어요', '어른이 덜어 줘요'], ['정해진 시각에 먹어요', '밥 먹고 나서 먹어요'], ['뚜껑 꼭 닫아 두기', '원래 통에 두기'], ['기한 지나면 안 먹기', '먹고 졸리면 쉬기']], { id: 'shape', text: '모양이 동그래요' }, 0.3, { conclude: '약 봉투와 설명서에는 먹는 양·먹는 때·보관·주의가 적혀 있어요. 먹기 전에 어른과 함께 읽어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '문장이 알려 주는 것을 골라 써요(양·때·보관·주의).', columns: ['문장', '알려 주는 것'], cells: [['밥 먹은 뒤에 먹어요', ''], ['서늘한 곳에 두어요', ''], ['정해진 양만 먹어요', ''], ['먹고 졸릴 수 있어요', '']], answer: '때, 보관, 양, 주의' }] },
      }),
      C({
        id: 'saf-drug.e34.read-insert.activity.check', type: 'activity', title: '우리 반 약 확인표 만들기',
        method: '먹기 전 확인표 만들기', tool: 'kitchen', minutes: 13,
        levels: { easy: '확인할 것 4칸 가운데 꼭 볼 것 3개를 고른다.', base: '확인할 것 6칸 가운데 꼭 볼 것 4개를 고른다.', challenge: '6칸 가운데 4개를 고른 뒤, 고르지 않은 칸은 왜 뺐는지 짝에게 말한다.' },
        activity: {
          title: '우리 반 약 확인표 만들기', tool: 'kitchen',
          teacher: '"약을 먹기 전에 꼭 보아야 할 것은 무엇일까요? 색깔이나 맛도 봐야 할까요?" 고른 칸을 모아 칠판에 우리 반 확인표로 적는다. "맛이 단지 확인해요"를 고르는 학생에게 "맛이 달면 내 약일까요? 맛으로 먹는 양을 알 수 있을까요?"라고 묻는다. 사용기한 칸을 빠뜨리는 학생이 많으면 다음 시간에 날짜 띠로 이어 배운다고 알린다.',
          task: '확인할 것 칸 가운데 꼭 볼 것만 골라 우리 반 확인표를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('약을 먹기 전에 꼭 볼 것만 골라요.', '먹기 전 확인표', [{ id: 'name', text: '내 이름이 맞나', ok: true }, { id: 'amount', text: '먹는 양', ok: true }, { id: 'time', text: '먹는 때', ok: true }, { id: 'color', text: '약 색깔이 예쁜가', ok: false }, { id: 'expiry', text: '사용기한', ok: true }, { id: 'taste', text: '맛이 단가', ok: false }], [0, 1, 2, 3], 0.15),
            CHK('남은 약을 찾았을 때 볼 것만 골라요.', '남은 약 확인표', [{ id: 'expiry', text: '사용기한이 지났나', ok: true }, { id: 'shape', text: '모양이 비슷한가', ok: false }, { id: 'whose', text: '누구 약인가', ok: true }, { id: 'bag', text: '원래 봉투에 있나', ok: true }, { id: 'wrap', text: '포장이 예쁜가', ok: false }, { id: 'adult', text: '어른께 보였나', ok: true }], [0, 1, 2, 3], 0.2),
            CHK('약사님께 물어볼 것만 골라요.', '약국에서 물을 것', [{ id: 'amount', text: '먹는 양', ok: true }, { id: 'yummy', text: '가장 맛있는 약', ok: false }, { id: 'time', text: '먹는 때', ok: true }, { id: 'keep', text: '두는 곳', ok: true }, { id: 'friend', text: '친구가 먹는 약', ok: false }, { id: 'with', text: '함께 먹으면 안 될 것', ok: true }], [0, 1, 2, 3], 0.25, { conclude: '약을 먹기 전에는 이름·양·때·사용기한을 확인하고, 모르면 약사님께 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '약을 먹기 전에 꼭 볼 것에 표시해요.', options: ['내 이름', '먹는 양', '약 색깔', '사용기한'] }] },
      }),
      C({
        id: 'saf-drug.e34.read-insert.activity.cough', type: 'activity', title: '갈림길: 동생에게 내 약을?',
        method: '갈림길 결과 보기', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 남의 약, 비슷한 약', tool: 'dilemma',
          teacher: '"증상이 같으면 내 약을 동생에게 줘도 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 누가 위험해지는지 짝과 말하게 한다. "같은 기침이니까 괜찮아요"라는 학생에게 "약 봉투에는 누구의 이름이 적혀 있었나요? 동생은 나와 나이·몸무게가 같을까요?"라고 묻는다. 모를 때는 어른·약사에게 묻는 길이 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('동생이 기침을 해요. 어떻게 할까요?', {
              text: '동생이 밤에 콜록콜록 기침을 해요. 내 기침약 봉투가 책상에 있어요.', motif: 'cloud',
              choices: [
                { id: 'give', text: '내 기침약을 준다', result: '동생 나이와 몸에 맞는 약인지 알 수 없어요.', impact: [{ who: '동생', text: '몸에 안 맞을 수 있어요', tone: -1 }] },
                { id: 'adult', text: '어른께 알린다', result: '어른이 "잠깐 기다려" 하고 오셨어요.', ending: '어른께 알려 동생이 알맞은 도움을 받았어요.', next: {
                  text: '어른이 "약국에 물어볼게" 하시며 내 약 봉투를 보세요.', choices: [
                    { id: 'show', text: '"이건 제 이름 약이에요"라고 알린다', result: '어른이 동생 몫은 따로 물어보기로 하셨어요.', impact: [{ who: '동생', text: '알맞은 약을 받아요', tone: 1 }], ending: '봉투 이름을 확인해 남의 약을 먹지 않게 했어요.' },
                    { id: 'half', text: '"반만 주면 돼요"라고 한다', result: '반이라도 동생에게 맞는지 알 수 없어요.', impact: [{ who: '동생', text: '위험할 수 있어요', tone: -1 }] },
                    { id: 'search', text: '비슷한 약을 찾아 상자를 뒤진다', result: '이름 없는 약이 쏟아졌어요.', impact: [{ who: '가족', text: '약이 섞였어요', tone: -1 }] },
                  ] } },
                { id: 'ignore', text: '모른 척 잔다', result: '동생이 밤새 기침을 했어요.', impact: [{ who: '동생', text: '힘들었어요', tone: -1 }] },
              ] }, [['adult', 'show']],
            [{ id: 'name', text: '봉투에 내 이름이 적혀 있어서' }, { id: 'body', text: '사람마다 맞는 약과 양이 달라서' }, { id: 'same', text: '같은 기침이면 같은 약이니까', why: '증상이 같아도 사람마다 맞는 약이 달라요.' }], ['name', 'body'], 0.2),
            DIL('할머니 약 봉투가 내 것과 비슷해요. 어떻게 할까요?', {
              text: '할머니 댁에서 내 감기약인 줄 알고 비슷한 봉투를 집었어요.', motif: 'house',
              choices: [
                { id: 'eat', text: '그냥 먹는다', result: '할머니 약을 먹을 뻔했어요.', impact: [{ who: '나', text: '몸에 안 맞을 수 있어요', tone: -1 }] },
                { id: 'check', text: '봉투의 이름을 확인한다', result: '봉투에 할머니 이름이 적혀 있어요.', ending: '이름을 확인해 남의 약을 먹지 않았어요.', next: {
                  text: '할머니 이름이에요. 그런데 콧물이 나는 건 똑같아요.', choices: [
                    { id: 'back', text: '제자리에 두고 어른께 말씀드린다', result: '어른이 내 봉투를 찾아 주셨어요.', impact: [{ who: '할머니와 나', text: '각자 약을 지켰어요', tone: 1 }], ending: '남의 약은 제자리에 두고 어른께 알렸어요.' },
                    { id: 'same', text: '증상이 같으니 먹는다', result: '할머니 몸에 맞춘 약이라 나에게 맞지 않아요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                    { id: 'pocket', text: '주머니에 넣어 둔다', result: '할머니가 약을 찾으셨어요.', impact: [{ who: '할머니', text: '약을 못 드세요', tone: -1 }] },
                  ] } },
                { id: 'color', text: '색깔로 내 약을 고른다', result: '색이 같아서 구별할 수 없었어요.', impact: [{ who: '나', text: '헷갈렸어요', tone: -1 }] },
              ] }, [['check', 'back']],
            [{ id: 'name', text: '봉투 이름으로 누구 약인지 알 수 있어서' }, { id: 'own', text: '사람마다 몸에 맞춘 약이라서' }, { id: 'look', text: '색과 모양이 같으면 같은 약이라서', why: '색과 모양이 같아도 다른 약일 수 있어요.' }], ['name', 'own'], 0.25),
            DIL('약국에서 약사님이 "궁금한 것 있니?" 하세요. 어떻게 할까요?', {
              text: '엄마와 약국에 갔어요. 약사님이 "궁금한 것 있니?" 하고 물으세요.', motif: 'star',
              choices: [
                { id: 'quiet', text: '부끄러워 그냥 나온다', result: '집에서 먹는 때가 헷갈렸어요.', impact: [{ who: '나', text: '헷갈렸어요', tone: -1 }] },
                { id: 'ask', text: '먹는 때를 여쭤본다', result: '약사님이 친절하게 알려 주셨어요.', ending: '궁금한 것을 약사님께 물었어요.', next: {
                  text: '들은 말을 잊을 것 같아요.', choices: [
                    { id: 'reread', text: '봉투에 적힌 것을 다시 읽는다', result: '봉투에도 먹는 때가 적혀 있었어요.', impact: [{ who: '나', text: '정확히 알았어요', tone: 1 }], ending: '약사님께 묻고 봉투로 다시 확인했어요.' },
                    { id: 'guess', text: '대충 기억한다', result: '저녁에 먹는 때를 잊었어요.', impact: [{ who: '나', text: '빠뜨렸어요', tone: -1 }] },
                    { id: 'skip', text: '헷갈리니 안 먹기로 한다', result: '어른과 정한 약을 마음대로 빼먹었어요.', impact: [{ who: '나', text: '낫는 게 늦어요', tone: -1 }] },
                  ] } },
                { id: 'friend', text: '나중에 친구에게 묻는다', result: '친구도 내 약을 몰라요.', impact: [{ who: '나', text: '여전히 몰라요', tone: -1 }] },
              ] }, [['ask', 'reread']],
            [{ id: 'expert', text: '약사님은 약을 잘 아는 분이라서' }, { id: 'paper', text: '봉투에도 적혀 있어 다시 볼 수 있어서' }, { id: 'shy', text: '부끄러우면 안 물어도 되니까', why: '궁금한 것을 물어야 약을 바르게 먹을 수 있어요.' }], ['expert', 'paper'], 0.3, { conclude: '증상이 같아도 남의 약은 먹지 않아요. 모르면 어른·약사님께 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '동생이 기침할 때 바른 행동은?', options: ['내 기침약을 준다', '어른께 알린다', '비슷한 약을 찾는다'], answer: '어른께 알린다' }] },
      }),
      C({
        id: 'saf-drug.e34.read-insert.activity.expiry', type: 'activity', title: '날짜 띠로 사용기한 판단',
        method: '날짜 띠에 놓고 판단하기', tool: 'timeline', minutes: 13,
        levels: { easy: '오늘과 약 1개의 날짜를 띠에 놓고, 약 1개를 판단한다.', base: '오늘과 약 3개의 날짜를 띠에 놓고, 약 3개를 판단한다.', challenge: '약 3개에 날짜가 안 보이는 약 하나를 더해 판단하고 어떻게 할지 말한다.' },
        activity: {
          title: '날짜 띠로 사용기한 판단', tool: 'timeline',
          teacher: '"오늘은 가상의 11월 1일이에요. \'10월 3일까지\'라고 적힌 약은 먹어도 될까요?" 날짜 카드를 띠에 놓은 뒤 오늘보다 앞에 놓인 약을 손가락으로 짚게 한다. "며칠 지난 것은 괜찮아요"라는 학생에게 "\'까지\'라는 말은 무슨 뜻일까요? 그날이 지나면 어떻게 하기로 했나요?"라고 묻는다. 기한이 지났거나 날짜를 모르는 약은 먹지 않고 어른께 드린다는 것을 짚는다.',
          task: '날짜 띠에 오늘과 사용기한을 놓고, 약을 먹어도 될지 판단해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '오늘(가상 11월 1일)과 약 날짜를 띠에 차례로 놓아요.', toolOptions: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: [{ id: 'b', text: '나 약 12월 20일까지' }, { id: 'today', text: '오늘 11월 1일' }, { id: 'c', text: '다 약 내년 3월까지' }, { id: 'a', text: '가 약 10월 3일까지' }] }, target: { order: ['a', 'today', 'b', 'c'] }, difficulty: 0.2,
              levels: { easy: { prompt: '오늘과 가 약 날짜를 띠에 차례로 놓아요.', toolOptions: { slots: 2, cards: [{ id: 'today', text: '오늘 11월 1일' }, { id: 'a', text: '가 약 10월 3일까지' }] }, target: { order: ['a', 'today'] } } } },
            { prompt: '오늘은 가상 11월 1일이에요. 약을 알맞은 칸에 놓아요.', toolOptions: { mode: 'sort', axis: ['먼저', '나중'], slots: [{ id: 'stop', label: '먹지 않고 어른께' }, { id: 'ok', label: '어른과 확인해요' }], cards: [{ id: 'a', text: '가 약 10월 3일까지' }, { id: 'b', text: '나 약 12월 20일까지' }, { id: 'd', text: '라 약 9월 30일까지' }] }, target: { sort: { stop: ['a', 'd'], ok: ['b'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '오늘은 가상 11월 1일이에요. 가 약을 알맞은 칸에 놓아요.', toolOptions: { cards: [{ id: 'a', text: '가 약 10월 3일까지' }] }, target: { sort: { stop: ['a'], ok: [] } } },
                challenge: { prompt: '날짜가 안 보이는 약까지 알맞은 칸에 놓아요.', toolOptions: { cards: [{ id: 'a', text: '가 약 10월 3일까지' }, { id: 'b', text: '나 약 12월 20일까지' }, { id: 'd', text: '라 약 9월 30일까지' }, { id: 'x', text: '날짜가 안 보이는 약' }] }, target: { sort: { stop: ['a', 'd', 'x'], ok: ['b'] } } },
              } },
            { prompt: '오늘(가상 5월 10일)과 약 날짜를 띠에 차례로 놓아요.', toolOptions: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: [{ id: 'today', text: '오늘 5월 10일' }, { id: 'f', text: '바 약 6월 1일까지' }, { id: 'm', text: '마 약 5월 9일까지' }, { id: 'r', text: '사 약 4월 30일까지' }] }, target: { order: ['r', 'm', 'today', 'f'] }, difficulty: 0.3,
              levels: { easy: { prompt: '오늘과 마 약 날짜를 띠에 차례로 놓아요.', toolOptions: { slots: 2, cards: [{ id: 'today', text: '오늘 5월 10일' }, { id: 'm', text: '마 약 5월 9일까지' }] }, target: { order: ['m', 'today'] } } },
              conclude: '오늘보다 앞에 놓인 날짜의 약은 기한이 지났어요. 먹지 않고 어른께 드려요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '오늘이 11월 1일일 때 먹지 않을 약은?', options: ['10월 3일까지인 약', '12월 20일까지인 약'], answer: '10월 3일까지인 약' }] },
      }),
      C({
        id: 'saf-drug.e34.read-insert.wrap.pair', type: 'wrap', title: '약 봉투 읽기 자신감',
        method: '짝과 알게 된 것 나누기', tool: 'emotion', minutes: 7,
        levels: { easy: '자신감 크기(3칸)만 고른다.', base: '자신감 크기(5칸)를 고르고 짝에게 알게 된 것 한 가지를 말한다.', challenge: '크기를 고른 뒤 알게 된 것과 아직 헷갈리는 것을 하나씩 말한다.' },
        wrap: {
          teacher: '"이제 약 봉투를 읽을 수 있다는 마음이 얼마나 큰가요?" 크기를 고른 뒤 짝에게 "나는 봉투에서 ○○를 찾을 수 있게 됐어." 틀로 말하게 한다. 크기를 작게 고른 학생에게 "어떤 칸이 아직 헷갈려요? 그 칸 하나만 다시 찾아볼까요?"라고 묻는다. 도전 단계는 헷갈리는 것을 출구 3번에 쓰게 해 다음 시간에 다룬다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '이제 약 봉투를 읽을 수 있어요', feeling: '뿌듯함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 잘' } }, prompt: '약 봉투를 읽는 자신감 크기를 골라요.', target: { level: 'any' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3, scaleLabels: { 1: '조금', 3: '아주 잘' } } } } },
            { type: 'choice', prompt: '증상이 같은 동생에게 내 약을 줘도 될까요?', options: ['줘도 돼요', '안 돼요, 어른께 알려요', '반만 줘요'], answer: 1, difficulty: 0.15, explain: '약은 사람마다 맞는 것이 달라요. 어른께 알려요.' },
            { type: 'short', prompt: '오늘 알게 된 것 하나와 아직 헷갈리는 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '약 봉투를 읽어요',
          items: [
            { type: 'check', prompt: '약 봉투에서 찾을 수 있는 것에 표시해요.', options: ['이름', '먹는 양', '먹는 때', '주의할 점'] },
            { type: 'short', prompt: '짝에게 들은 알게 된 것을 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-drug.e34.read-insert.wrap.self', type: 'wrap', title: '봉투 읽기 스스로 점검',
        method: '스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 4개에 표시한다.', challenge: '점검 칸 4개에 표시하고 집 약 봉투를 어른과 확인할 날을 정해 쓴다.' },
        wrap: {
          teacher: '"봉투에서 이름·먹는 양·먹는 때·주의할 점을 찾을 수 있나요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 출구 2번에서 "조금 지나도 먹어요"를 고른 학생에게 "날짜 띠에서 오늘보다 앞에 놓인 약은 어떻게 하기로 했나요?"라고 되묻는다. 집 약 봉투는 꼭 어른과 함께 보기로 약속한다.',
          exitTicket: [
            SELF('봉투 읽기 점검', ['이름을 찾아요', '먹는 양을 찾아요', '먹는 때를 찾아요', '주의할 점을 찾아요'], [2, 4, 4]),
            { type: 'choice', prompt: '사용기한이 며칠 지난 약을 찾았어요. 어떻게 할까요?', options: ['조금 지나도 먹어요', '먹지 않고 어른께 드려요', '친구에게 줘요'], answer: 1, difficulty: 0.15, explain: '기한이 지난 약은 먹지 않고 어른께 드려요.' },
            { type: 'short', prompt: '집 약 봉투를 어른과 함께 확인할 날을 써요.' },
          ],
        },
        worksheet: {
          title: '약 봉투 점검',
          items: [
            { type: 'table', prompt: '약 봉투에서 찾을 것을 써요.', columns: ['찾을 것', '알려 주는 것'], cells: [['먹는 양', ''], ['먹는 때', '']], answer: '얼마나 먹는지, 언제 먹는지' },
            { type: 'draw', prompt: '어른과 함께 약 봉투를 읽는 모습을 그려요.' },
          ],
          easy: { note: '"얼마나"와 "언제"를 찾아요.', items: [{ type: 'choice', prompt: '봉투에서 "언제 먹는지"는?', options: ['먹는 때', '이름'], answer: '먹는 때' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 카페인 음료 알아보기 (별표 2 '중독성물질을 알고 안전한 활용 방법' + 7대 표준안 고카페인)
  // ======================================================================================================
  {
    const C = T('caffeine', 4);
    const G = {
      water: { id: 'water', text: '생수', price: 500 }, milk: { id: 'milk', text: '흰 우유', price: 900 }, barley: { id: 'barley', text: '보리차', price: 800 },
      energy: { id: 'energy', text: '에너지 음료', price: 1500 }, coffee: { id: 'coffee', text: '커피 우유', price: 1200 }, cola: { id: 'cola', text: '콜라', price: 1000 },
    };
    const S = (...ids) => ids.map((k) => G[k]);
    const CAF = ['energy', 'coffee', 'cola'];
    const SLEEP = [['월(마신 날)', 40], ['화(안 마신 날)', 15], ['수(마신 날)', 35], ['목(안 마신 날)', 20]];
    const BAR = { type: 'bar', title: '잠들기까지 걸린 시간(가상의 우리 반 자료)', unit: '분', xLabel: '날', yLabel: '걸린 시간', max: 45, scale: 5 };
    M.push(
      C({
        id: 'saf-drug.e34.caffeine.intro.fridge', type: 'intro', title: '가게 냉장고에서 카페인 음료',
        method: '가게 냉장고에서 고르기', tool: 'mindmap', minutes: 6,
        levels: { easy: '커피 우유·에너지 음료·물·우유 4개 가운데 카페인 음료 2개가 담기는 것을 본다.', base: '콜라·녹차를 더한 6개 가운데 카페인이 있을 수 있는 4개가 담기는 것을 본다.', challenge: '담긴 까닭(커피·차·콜라에 들어 있음)을 짝에게 말한다.' },
        intro: {
          teacher: '"가게 냉장고에 여러 음료가 있어요. 카페인이 들어 있을 수 있는 것은 무엇일까요?" 시연 단추로 커피 우유·콜라·녹차·에너지 음료가 바구니에 담기는 모습을 보인다. "콜라·녹차에는 카페인이 없어요"라는 말이 나오면 "녹차도 차예요. 콜라는 왜 마시면 잠이 안 온다고 할까요?"라고 되묻는다. 물과 우유는 담기지 않은 것도 함께 짚는다.',
          student: '가게 냉장고 음료 가운데 카페인이 들어 있을 수 있는 것을 골라 보아요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '카페인이 있을 수 있어요', cards: [{ id: 'coffee', text: '커피 우유' }, { id: 'water', text: '물' }, { id: 'cola', text: '콜라' }, { id: 'tea', text: '녹차' }, { id: 'milk', text: '우유' }, { id: 'energy', text: '에너지 음료' }], shuffle: false }, sequence: [{ pick: ['coffee', 'energy'] }, { pick: ['coffee', 'cola', 'tea', 'energy'] }] },
          art: { draw: 'a paper cut shop fridge with rows of paper cans and bottles, a paper basket in front holding a coffee milk carton, a cola can, a green tea bottle and an energy drink can', banner: '카페인이 들어 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '음료는 상품명 없이 종류로만 말한다.',
      }),
      C({
        id: 'saf-drug.e34.caffeine.intro.body', type: 'intro', title: '카페인이 영향을 주는 곳',
        method: '영향 받는 곳 찾기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 뇌 한 곳을 함께 찾는다.', base: '뇌와 심장 두 곳을 찾고 \'잠이 안 오거나 가슴이 두근거릴 수 있어요\'를 읽는다.', challenge: '두 곳을 찾은 뒤 그런 느낌이 들 때 할 일(마시지 않기·어른께 말하기)을 말한다.' },
        intro: {
          teacher: '"카페인이 많은 음료를 마시면 몸의 어디가 영향을 받을까요?" 시연 단추로 종이 몸에서 뇌 → 심장이 차례로 짚이는 것을 보이고 "잠이 안 오거나 가슴이 두근거릴 수 있어요"를 함께 읽는다. "운동하는 어린이에게는 에너지 음료가 좋아요"라는 말이 나오면 "이름이 \'에너지\'라고 해서 몸에 힘이 생길까요? 잠을 못 자면 다음 날 몸은 어떨까요?"라고 되묻는다.',
          student: '종이 몸에서 카페인이 영향을 줄 수 있는 뇌와 심장을 찾아보아요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '심장', '폐', '위', '간'], names: true }, sequence: [{ sel: '뇌' }, { sel: '심장' }] },
          art: { draw: 'a paper body figure lying in a paper bed with wide open eyes, small paper stars above the head and a paper heart drum beating on the chest', banner: '잠이 안 와요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '"마시고 잠을 못 잔 적 있나요?"처럼 겪은 일을 묻지 않는다.',
      }),
      C({
        id: 'saf-drug.e34.caffeine.activity.label', type: 'activity', title: '캔에서 고카페인 표시 찾기',
        method: '캔 표시 찾기', tool: 'wordcards', minutes: 14,
        levels: { easy: '가상 캔 3개 가운데 표시가 있는 캔을 고르고, 표시와 뜻 2줄을 잇는다.', base: '가상 캔 5개 가운데 표시가 있는 캔을 고르고, 표시와 뜻 4줄을 잇는다.', challenge: '표시가 없어도 카페인이 들 수 있는 음료까지 7개 가운데 찾는다.' },
        activity: {
          title: '캔에서 고카페인 표시 찾기', tool: 'wordcards',
          teacher: '"가상의 캔 뒷면에 \'고카페인 함유\'라고 적힌 캔은 무엇일까요?" 카드를 소리 내어 읽고 고르게 한 뒤, 고른 표시의 뜻을 짝에게 말하게 한다. "표시가 없으면 카페인이 하나도 없어요"라는 학생에게 "콜라나 녹차 캔에도 이 표시가 있었나요? 그런데 카페인은 들어 있을까요?"라고 묻는다. 표시는 카페인이 많다는 알림이고, 표시가 없어도 카페인이 든 음료가 있다는 것을 짚는다.',
          task: '가상의 음료 캔 카드를 읽고 고카페인 표시와 그 뜻을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '\'고카페인 함유\' 표시가 있는 가상 캔을 골라요.', toolOptions: { mode: 'pick', basket: '고카페인 표시 캔', cards: [{ id: 'a', text: '가 캔: 고카페인 함유' }, { id: 'b', text: '나 캔: 과일 맛 탄산' }, { id: 'c', text: '다 캔: 고카페인 함유' }, { id: 'd', text: '라 캔: 보리차' }, { id: 'e', text: '마 캔: 이온 음료' }] }, target: { pick: ['a', 'c'] }, difficulty: 0.15,
              levels: { easy: { prompt: '\'고카페인 함유\' 표시가 있는 캔을 골라요(3개 중).', toolOptions: { cards: [{ id: 'a', text: '가 캔: 고카페인 함유' }, { id: 'b', text: '나 캔: 과일 맛 탄산' }, { id: 'd', text: '라 캔: 보리차' }] }, target: { pick: ['a'] } } } },
            { prompt: '캔에 적힌 표시와 뜻을 이어요.', toolOptions: { words: [{ en: '카페인이 많아요', ko: '고카페인 함유' }, { en: '어린이는 조심해요', ko: '어린이 섭취에 주의' }, { en: '카페인 양이 적혔어요', ko: '카페인 함량 표시' }, { en: '카페인이 없어요', ko: '무카페인' }] }, target: { match: { '카페인이 많아요': '카페인이 많아요', '어린이는 조심해요': '어린이는 조심해요', '카페인 양이 적혔어요': '카페인 양이 적혔어요', '카페인이 없어요': '카페인이 없어요' } }, difficulty: 0.2,
              levels: { easy: { prompt: '캔에 적힌 표시와 뜻을 이어요(2줄).', toolOptions: { words: [{ en: '카페인이 많아요', ko: '고카페인 함유' }, { en: '어린이는 조심해요', ko: '어린이 섭취에 주의' }] }, target: { match: { '카페인이 많아요': '카페인이 많아요', '어린이는 조심해요': '어린이는 조심해요' } } } } },
            { prompt: '표시가 없어도 카페인이 들 수 있는 음료를 골라요.', toolOptions: { mode: 'pick', basket: '카페인이 들 수 있어요', cards: [{ id: 'cola', text: '콜라' }, { id: 'water', text: '물' }, { id: 'tea', text: '녹차' }, { id: 'milk', text: '흰 우유' }, { id: 'coffee', text: '커피 우유' }] }, target: { pick: ['cola', 'tea', 'coffee'] }, difficulty: 0.25,
              levels: {
                easy: { prompt: '표시가 없어도 카페인이 들 수 있는 음료를 골라요(3개 중).', toolOptions: { cards: [{ id: 'cola', text: '콜라' }, { id: 'water', text: '물' }, { id: 'milk', text: '흰 우유' }] }, target: { pick: ['cola'] } },
                challenge: { prompt: '표시가 없어도 카페인이 들 수 있는 음료를 골라요(7개 중).', toolOptions: { cards: [{ id: 'cola', text: '콜라' }, { id: 'water', text: '물' }, { id: 'tea', text: '녹차' }, { id: 'milk', text: '흰 우유' }, { id: 'coffee', text: '커피 우유' }, { id: 'icetea', text: '아이스티' }, { id: 'barley', text: '보리차' }] }, target: { pick: ['cola', 'tea', 'coffee', 'icetea'] } },
              },
              conclude: '\'고카페인 함유\' 표시는 카페인이 많다는 알림이에요. 표시가 없어도 카페인이 든 음료가 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '\'고카페인 함유\' 표시의 뜻은?', options: ['카페인이 많아요', '카페인이 없어요', '맛이 달아요'], answer: '카페인이 많아요' }] },
      }),
      C({
        id: 'saf-drug.e34.caffeine.activity.budget', type: 'activity', title: '용돈 안에서 음료 고르기',
        method: '용돈 안에서 음료 고르기', tool: 'economy', minutes: 13,
        levels: { easy: '음료 3개 가운데 용돈 안에서 카페인 음료를 빼고 고른다.', base: '음료 5개 가운데 용돈 안에서 카페인 음료를 빼고 고른다.', challenge: '용돈이 늘어 나와 동생 두 사람 몫을 카페인 음료 없이 고른다.' },
        activity: {
          title: '용돈 안에서 음료 고르기', tool: 'economy',
          teacher: '"운동 뒤 목이 마를 때 가상의 용돈으로 무엇을 살까요?" 예산 막대가 넘치지 않는지 보며 고르게 한다. 에너지 음료를 고르는 학생에게 "이름에 \'에너지\'가 있으면 운동 뒤에 좋을까요? 오늘 배운 표시를 떠올려 볼까요?"라고 묻는다. 값싼 것보다 몸에 맞는 것을 고르는 것이 먼저라는 것을 짚는다.',
          task: '가상 가게에서 용돈 안에서 마실 것을 골라요. 카페인 음료는 빼요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '1,500원 안에서 운동 뒤 마실 것을 골라요. 카페인 음료는 빼요.', toolOptions: { mode: 'budget', budget: 1500, items: S('water', 'energy', 'milk', 'coffee', 'cola'), ask: '운동 뒤 마실 것' }, target: { budget: { min: 500, not: CAF } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '1,500원 안에서 마실 것을 골라요(3개 중). 카페인 음료는 빼요.', toolOptions: { items: S('water', 'energy', 'milk') }, target: { budget: { min: 500, not: ['energy'] } } },
                challenge: { prompt: '3,000원 안에서 나와 동생 몫 2개를 골라요. 카페인 음료는 빼요.', toolOptions: { budget: 3000, items: S('water', 'energy', 'milk', 'coffee', 'cola', 'barley'), ask: '나와 동생 몫' }, target: { budget: { count: 2, not: CAF } } },
              } },
            { prompt: '1,000원 안에서 물이나 우유를 골라요. 카페인 음료는 빼요.', toolOptions: { mode: 'budget', budget: 1000, items: S('cola', 'water', 'energy', 'milk', 'barley'), ask: '쉬는 시간 마실 것' }, target: { budget: { min: 500, not: CAF } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '1,000원 안에서 물이나 우유를 골라요(3개 중).', toolOptions: { items: S('cola', 'water', 'milk') }, target: { budget: { min: 500, not: ['cola'] } } },
                challenge: { prompt: '2,000원 안에서 나와 동생 몫 2개를 골라요. 카페인 음료는 빼요.', toolOptions: { budget: 2000, ask: '나와 동생 몫' }, target: { budget: { count: 2, not: CAF } } },
              } },
            { prompt: '1,500원 안에서 물은 꼭 넣고, 카페인 음료는 빼고 골라요.', toolOptions: { mode: 'budget', budget: 1500, items: S('coffee', 'water', 'cola', 'barley', 'energy'), ask: '목마를 땐 물' }, target: { budget: { must: ['water'], not: CAF } }, difficulty: 0.3,
              levels: {
                easy: { prompt: '1,500원 안에서 물은 꼭 넣어 골라요(3개 중).', toolOptions: { items: S('coffee', 'water', 'barley') }, target: { budget: { must: ['water'], not: ['coffee'] } } },
                challenge: { prompt: '3,000원 안에서 두 사람 몫 2개, 물은 꼭 넣어 골라요.', toolOptions: { budget: 3000, items: S('coffee', 'water', 'cola', 'barley', 'energy', 'milk'), ask: '나와 동생 몫' }, target: { budget: { count: 2, must: ['water'], not: CAF } } },
              },
              conclude: '목이 마를 때는 물·우유처럼 카페인이 없는 음료를 골라요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '운동 뒤 목이 마를 때 알맞은 음료는?', options: ['에너지 음료', '생수', '커피 우유'], answer: '생수' }] },
      }),
      C({
        id: 'saf-drug.e34.caffeine.activity.sleep', type: 'activity', title: '가상 조사 막대그래프 읽기',
        method: '가상 조사 막대그래프 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '막대 2개(마신 날·안 마신 날)를 견주어 읽는다.', base: '막대 4개를 읽고 걸린 시간을 쓴다.', challenge: '막대 4개를 읽고, 가상 자료라서 확실히 말할 수 없는 것을 고른다.' },
        activity: {
          title: '가상 조사 막대그래프 읽기', tool: 'chart',
          teacher: '"저녁에 카페인 음료를 마신 날과 안 마신 날, 잠들기까지 걸린 시간은 어떻게 다를까요?" 눈금 한 칸이 5분이라는 것을 먼저 함께 읽는다. 눈금 한 칸을 1분으로 읽는 학생에게 "눈금 숫자가 몇씩 커지나요?"라고 묻는다. 이 그래프는 가상 자료라서 \'모든 어린이가 꼭 그렇다\'고까지는 말할 수 없다는 것을 짚는다.',
          task: '가상의 우리 반 막대그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '잠들기까지 가장 오래 걸린 날은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: SLEEP, question: '가장 오래 걸린 날은?', choices: SLEEP.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '두 날 가운데 더 오래 걸린 날은?', toolOptions: { data: SLEEP.slice(0, 2), choices: SLEEP.slice(0, 2).map((x) => x[0]) }, target: { pick: 0 } } } },
            { prompt: '화요일은 잠들기까지 몇 분 걸렸는지 써요.', toolOptions: Object.assign({}, BAR, { mode: 'read', data: SLEEP, question: '화요일은 몇 분?' }), target: { value: 15 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { data: SLEEP.slice(0, 2) } } } },
            { prompt: '이 그래프로 말할 수 있는 것은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: SLEEP, question: '그래프로 말할 수 있는 것은?', choices: ['마신 날이 더 오래 걸렸다', '물을 마시면 바로 잠든다', '목요일이 가장 오래 걸렸다'] }), target: { pick: 0 }, difficulty: 0.25,
              levels: {
                easy: { toolOptions: { data: SLEEP.slice(0, 2) } },
                challenge: { prompt: '가상 자료라서 확실히 말할 수 없는 것은?', toolOptions: { question: '확실히 말할 수 없는 것은?', choices: ['이 반은 마신 날이 오래 걸렸다', '모든 어린이가 꼭 그렇다', '월요일은 40분 걸렸다'] }, target: { pick: 1 } },
              },
              conclude: '그래프로 경향을 읽을 수 있어요. 가상 자료 하나로 모든 사람이 그렇다고 말하지는 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프를 읽고 표의 빈칸을 채워요(가상 자료).', columns: ['날', '걸린 시간(분)'], cells: [['월(마신 날)', '40'], ['화(안 마신 날)', ''], ['수(마신 날)', '35']], answer: '15' }] },
      }),
      C({
        id: 'saf-drug.e34.caffeine.activity.offer', type: 'activity', title: '에너지 음료를 건넬 때',
        method: '상황 판단 짝 토의', tool: 'emotion', minutes: 13,
        levels: { easy: '보기 2개 가운데 고르고 결과를 본다.', base: '보기 3개 가운데 고르고 까닭을 짝과 나눈다.', challenge: '결과는 맞힌 뒤에만 보이고, 건넨 사람에게 할 말을 만들어 짝에게 말한다.' },
        activity: {
          title: '에너지 음료를 건넬 때', tool: 'emotion',
          teacher: '"형이 \'이거 마시면 안 졸려\' 하며 에너지 음료를 줘요. 어떻게 할까요?" 고른 뒤 짝과 까닭을 나누게 한다. "안 졸리면 공부를 더 잘해요"라는 학생에게 "밤에 잠을 못 자면 다음 날 시험 때 머리는 어떨까요?"라고 묻는다. 거절할 때는 "괜찮아, 나는 물 마실래"처럼 다른 것을 말하면 쉽다는 것을 짚는다.',
          task: '음료를 건네받는 장면에서 할 행동을 골라요. 까닭을 짝과 나눠요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BR('시험 전날 밤, 형이 에너지 음료를 줘요. 어떻게 할까요?', '시험 전날 밤, 형이 "이거 마시면 안 졸려" 하며 에너지 음료를 줘요.', [
              { id: 'drink', text: '받아 마셔요', result: '잠이 안 와 다음 날 더 피곤했어요.', mood: '걱정' },
              { id: 'no', text: '"괜찮아, 물 마실래"', result: '일찍 자고 개운하게 일어났어요.', mood: '편안함' },
              { id: 'keep', text: '받아서 몰래 둬요', result: '나중에 동생이 찾아 마실 수 있어요.', mood: '걱정' },
            ], 'no', 0.15),
            BR('운동 뒤 친구가 에너지 음료를 사 줘요. 어떻게 할까요?', '축구를 마치고 친구가 "운동했으니 이거 마셔" 하며 에너지 음료를 사 줘요.', [
              { id: 'drink', text: '운동했으니 마셔요', result: '가슴이 두근거리고 밤에 잠이 안 왔어요.', mood: '걱정' },
              { id: 'water', text: '"고마워, 나는 물 마실게"', result: '친구도 같이 물을 마셨어요.', mood: '고마움' },
              { id: 'half', text: '반만 마셔요', result: '반이라도 카페인이 많아요.', mood: '걱정' },
            ], 'water', 0.2),
            BR('밤 9시 가족 모임에 콜라가 있어요. 어떻게 할까요?', '밤 9시 가족 모임 식탁에 콜라와 보리차가 있어요.', [
              { id: 'cola', text: '콜라를 잔뜩 마셔요', result: '잠자리에서 눈이 말똥말똥했어요.', mood: '걱정' },
              { id: 'barley', text: '저녁엔 보리차로 바꿔요', result: '편히 잠들었어요.', mood: '편안함' },
              { id: 'two', text: '콜라 두 잔을 마셔요', result: '늦게까지 잠이 오지 않았어요.', mood: '걱정' },
            ], 'barley', 0.25, { conclude: '카페인 음료를 건네받으면 부드럽게 거절하고 물·우유·보리차로 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '에너지 음료를 건네는 형에게 할 말을 써요.' }] },
      }),
      C({
        id: 'saf-drug.e34.caffeine.wrap.plan', type: 'wrap', title: '나의 음료 약속 점검표',
        method: '나의 음료 약속 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '약속 3칸 가운데 지킬 것 2개를 고른다.', base: '약속 4칸 가운데 지킬 것 3개를 고른다.', challenge: '3개를 고른 뒤 가족과 함께 지킬 약속 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘부터 내가 지킬 음료 약속은 무엇일까요?" 점검표를 함께 읽고 지킬 것만 고르게 한다. "졸리면 커피 우유"를 고르는 학생에게 "졸릴 때 몸이 바라는 것은 카페인일까요, 잠일까요?"라고 묻는다. 도전 단계는 가족과 함께 지킬 약속을 정해 출구 3번에 쓰게 한다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'kitchen' }, (() => {
              const it = CHK('내가 지킬 음료 약속만 골라요.', '나의 음료 약속', [{ id: 'water', text: '목마르면 물 마시기', ok: true }, { id: 'night', text: '저녁엔 카페인 음료 안 마시기', ok: true }, { id: 'mark', text: '고카페인 표시 확인', ok: true }, { id: 'coffee', text: '졸리면 커피 우유', ok: false }], [0, 1, 3], 0.15);
              return { prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels };
            })()),
            { type: 'choice', prompt: '저녁에 목이 마를 때 알맞은 음료는?', options: ['콜라', '보리차', '에너지 음료'], answer: 1, difficulty: 0.1, explain: '보리차에는 카페인이 없어 잠에 방해가 되지 않아요.' },
            { type: 'short', prompt: '가족과 함께 지킬 음료 약속을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '나의 음료 약속',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['목마르면 물', '저녁엔 카페인 음료 안 마시기', '고카페인 표시 확인'] },
            { type: 'short', prompt: '가족에게 알려 줄 카페인 이야기를 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-drug.e34.caffeine.wrap.comic', type: 'wrap', title: '가게에서 음료 고르기 네 장면',
        method: '네 장면 정리', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장을 차례로 놓는다.', base: '장면 4장을 차례로 놓는다.', challenge: '틀린 장면 한 장이 섞인 5장에서 그 장면을 빼고 놓는다. 말풍선 채우기는 모든 단계가 함께 한다.' },
        wrap: {
          teacher: '"가게에서 음료를 고를 때 무엇부터 할까요?" 장면을 다 놓으면 짝과 번갈아 읽게 한다. "광고만 보고 골라요" 장면을 넣으려는 학생에게 "광고에 카페인 표시가 나올까요? 캔 어디를 보아야 할까요?"라고 묻는다. 출구 2번 말풍선을 채운 뒤 짝에게 실제로 말해 보게 한다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'story' }, (() => {
              const it = ORD('가게에서 음료 고르는 장면을 차례로 놓아요.', { title: '가게에서 음료 고르기' }, [{ id: 'go', text: '목이 말라 가게에 가요' }, { id: 'look', text: '캔 뒷면 표시를 봐요' }, { id: 'put', text: '고카페인 캔은 내려놔요' }, { id: 'water', text: '물을 골라 마셔요' }], 1, { id: 'ad', text: '광고만 보고 골라요', why: '광고에는 카페인이 얼마나 들었는지 잘 나오지 않아요.' }, 0.15);
              return { prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels };
            })()),
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'b1', who: '나', label: '"저녁에는 ___ 마실래."' }], cards: ['물을', '에너지 음료를', '콜라를'] }, prompt: '마지막 장면의 말풍선을 채워요.', target: { fill: { b1: '물을' } }, difficulty: 0.1 },
            MOOD,
          ],
        },
        worksheet: {
          title: '가게에서 음료 고르기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '음료를 고를 때 캔 뒷면의 ___ 표시를 봐요.', answer: '고카페인' },
            { type: 'draw', prompt: '가게에서 물을 고르는 내 모습을 그려요.' },
          ],
          easy: { note: '캔 뒷면을 먼저 봐요.', items: [{ type: 'choice', prompt: '저녁에 마실 것은?', options: ['물', '콜라'], answer: '물' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 잘못 먹었거나 만졌을 때 도움 요청하기 (별표 2 '약물 오남용의 위험성…' + 응급처치 '신고·조치' 연계)
  // ======================================================================================================
  {
    const C = T('help-call', 4);
    const HELP = {
      title: '학교와 동네(가상)', grid: [6, 3],
      regions: [
        { name: '보건실', cells: [[0, 0], [1, 0]] }, { name: '교실', cells: [[2, 0], [3, 0]] }, { name: '운동장', cells: [[4, 0], [5, 0], [4, 1], [5, 1]] },
        { name: '우리 집', cells: [[0, 1], [1, 1], [0, 2], [1, 2]] }, { name: '약국', cells: [[2, 1], [3, 1]] }, { name: '놀이터', cells: [[2, 2], [3, 2]] }, { name: '편의점', cells: [[4, 2], [5, 2]] },
      ],
    };
    M.push(
      C({
        id: 'saf-drug.e34.help-call.intro.scene', type: 'intro', title: '열린 알약 통 장면, 두 사람 마음',
        method: '장면 속 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '내 마음 하나(놀람)를 함께 고른다.', base: '내 마음과 동생 마음을 하나씩 잇는다.', challenge: '두 사람 마음을 이은 뒤 가장 먼저 할 일을 말한다.' },
        intro: {
          teacher: '"동생 옆에 알약 통이 열려 있어요. 지금 내 마음은 어떨까요? 동생은요?" 시연 단추로 \'내 마음\'에 놀람, \'동생 마음\'에 궁금함 카드가 이어지는 것을 보인다. "혼날까 봐 무서워서 모른 척해요"라는 말이 나오면 그 마음을 인정하고 "동생이 약을 먹었다면 누가 가장 빨리 도와줄 수 있을까요?"라고 되묻는다. 무서워도 가장 먼저 할 일은 어른께 바로 알리는 것이라고 밝힌다.',
          student: '열린 알약 통 장면을 보고 내 마음과 동생 마음을 골라, 가장 먼저 할 일을 생각해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'me', label: '지금 내 마음' }, { id: 'sib', label: '동생 마음' }], cards: ['놀람', '걱정', '궁금함', '신남'] }, sequence: [{ match: { me: '놀람' } }, { match: { me: '놀람', sib: '궁금함' } }] },
          art: { draw: 'a paper living room floor with an open paper pill bottle and a curious toddler sitting beside it, an older child stopping in surprise at the door', banner: '가장 먼저 할 일은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 가상의 것이다. 학생 집에서 있었던 일을 묻지 않는다.',
      }),
      C({
        id: 'saf-drug.e34.help-call.intro.steps', type: 'intro', title: '도움 요청 세 단계',
        method: '도움 요청 차례', tool: 'timer', minutes: 6,
        levels: { easy: '바로 알리기 → 통 챙기기 두 장의 차례를 본다.', base: '바로 알리기 → 통 챙기기 → 어른이 없으면 119, 세 장의 차례를 본다.', challenge: '세 장을 본 뒤 교사가 말로 보이는 \'숨기기\' 카드를 왜 빼야 하는지 말한다.' },
        intro: {
          teacher: '"약이나 세제를 잘못 먹었을 때 무엇부터 할까요?" 시연 단추로 카드가 \'바로 알리기\' → \'통 챙기기\' → \'어른이 없으면 119\' 차례로 놓이는 것을 보인다. 이어 "\'혼날까 봐 숨기기\' 카드는 어디에 둘까요?" 하고 말로 묻는다(기다릴 반응: "빼요"). "조금이니까 괜찮아질 때까지 기다려요"라는 말이 나오면 "기다리는 동안 몸이 더 나빠지면 어떻게 될까요?"라고 되묻는다.',
          student: '도움 요청 카드 세 장이 놓이는 차례를 보고, 따라 말해 보아요.',
          demo: { tool: 'timer', options: { title: '도움 요청 차례', cards: ['통 챙기기', '어른이 없으면 119', '바로 알리기'] }, sequence: [{ order: ['바로 알리기', '통 챙기기', '어른이 없으면 119'] }] },
          art: { draw: 'three paper cards in a row with arrows between them: a child running to an adult, a hand holding a product bottle, and a paper phone with one one nine', banner: '바로 알려요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-drug.e34.help-call.activity.who', type: 'activity', title: '도움받을 곳 지도에 핀',
        method: '도움받을 곳 핀', tool: 'map', minutes: 9,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 도움받을 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳에서 무엇을 도와주는지 보기에서 고른다.' },
        activity: {
          title: '도움받을 곳 지도에 핀', tool: 'map',
          teacher: '"학교에서 약을 잘못 먹었다면 어디로 가야 할까요? 집에서는요? 동네에서는요?" 핀을 꽂은 뒤 그곳에 누가 있는지 말하게 한다. 편의점에 핀을 꽂는 학생에게 "편의점 직원은 약에 대해 잘 알까요? 약에 대해 잘 아는 분은 어디에 있을까요?"라고 묻는다. 곳마다 도와주는 사람이 다르다는 것을 짚는다.',
          task: '가상의 학교·동네 지도를 보고 도움받을 수 있는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(HELP, '학교에서 약을 잘못 먹었을 때 갈 곳에 핀을 꽂아요.', '보건실', { q: '보건실에서 도와주는 것은?', choices: ['보건 선생님이 살펴 줘요', '숙제를 내 줘요', '간식을 줘요'], answer: 0 }, 0.15),
            PIN(HELP, '집에서 바로 알릴 어른이 있는 곳에 핀을 꽂아요.', '우리 집', { q: '집에서는 누구에게 알릴까요?', choices: ['아무에게도 안 해요', '집에 있는 어른', '어린 동생'], answer: 1 }, 0.2),
            PIN(HELP, '약에 대해 물어볼 수 있는 곳에 핀을 꽂아요.', '약국', { q: '약국에서 할 수 있는 일은?', choices: ['장난감을 사요', '숨어 있어요', '약사님께 약을 물어요'], answer: 2 }, 0.25, { conclude: '학교에서는 보건실, 집에서는 어른, 동네에서는 약국에서 도움을 받을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '학교에서 약을 잘못 먹었을 때 갈 곳은?', options: ['보건실', '운동장', '편의점'], answer: '보건실' }] },
      }),
      C({
        id: 'saf-drug.e34.help-call.activity.call', type: 'activity', title: '119에 말할 것 나누기',
        method: '119에 말할 것 나누기', tool: 'mindmap', minutes: 9,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드가 더해진 8장을 나누고, 상담원이 물으면 어떤 말부터 할지 짝과 정해 본다(교사 진행).' },
        activity: {
          title: '119에 말할 것 나누기', tool: 'mindmap',
          teacher: '"어른이 없어 119에 전화했어요. 무엇을 말해야 빨리 도와줄 수 있을까요?" 카드를 놓을 때마다 "이 말을 들으면 119가 무엇을 알 수 있을까요?"라고 묻는다. "내 별명"을 말할 것에 두는 학생에게 "구급대원이 별명을 알면 우리 집을 찾을 수 있을까요?"라고 묻는다. 119 상담원이 묻는 대로 또박또박 답하면 된다는 것을 짚는다.',
          task: '카드를 119에 말할 것과 말하지 않아도 될 것으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('약을 잘못 먹었을 때 119에 말할 것을 나누어요.', { topic: '약을 잘못 먹음' }, ['119에 말할 것', '안 해도 될 말'], [['지금 있는 곳', '무엇을 먹었는지', '언제 먹었는지'], ['좋아하는 노래', '어제 본 만화', '내 별명']], 2, [['지금 몸의 모습'], ['가방 색깔']], 0.15),
            SORT('세제가 눈에 튀었을 때 119에 말할 것을 나누어요.', { topic: '세제가 튐' }, ['119에 말할 것', '안 해도 될 말'], [['무엇이 튀었는지', '어른이 없다는 것', '지금 있는 곳'], ['세제 향기 이름', '오늘 급식 반찬', '친구 생일']], 2, [['통에 적힌 이름'], ['좋아하는 색']], 0.2),
            SORT('동생이 알약을 먹은 것 같을 때 말할 것을 나누어요.', { topic: '동생이 알약을' }, ['119에 말할 것', '안 해도 될 말'], [['우리 집 주소', '동생 나이', '약 통에 적힌 이름'], ['동생이 좋아하는 간식', '내 학년 반', '집 강아지 이름']], 2, [['지금 동생 모습'], ['혼날까 걱정한 것']], 0.25, { conclude: '119에는 어디인지, 무엇을·언제 먹었는지, 지금 모습을 말해요. 상담원이 묻는 대로 답해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '119에 말할 것에 표시해요.', options: ['지금 있는 곳', '무엇을 먹었는지', '좋아하는 노래', '언제 먹었는지'] }] },
      }),
      C({
        id: 'saf-drug.e34.help-call.activity.friend', type: 'activity', title: '갈림길: 잘못 먹었을 때',
        method: '갈림길 결과 보기', tool: 'dilemma', minutes: 10,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 잘못 먹었을 때', tool: 'dilemma',
          teacher: '"친구가 비타민인 줄 알고 어른 약을 먹었어요. 어떻게 할까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 친구가 어떻게 되는지 짝과 말하게 한다. "친구가 혼날까 봐 비밀로 해 줘요"라는 학생에게 "비밀로 하면 친구 몸은 누가 살펴 줄까요?"라고 묻는다. 숨기지 않고 바로 알리고, 먹은 것의 통을 챙기는 것이 친구를 돕는 길이라는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 어른 약을 먹었어요. 어떻게 할까요?', {
              text: '친구 집에서 친구가 "비타민이야" 하며 식탁 위 어른 약을 먹었어요.', motif: 'house',
              choices: [
                { id: 'wait', text: '괜찮아질 때까지 기다린다', result: '친구 얼굴이 하얘지고 배가 아프대요.', impact: [{ who: '친구', text: '몸이 나빠져요', tone: -1 }] },
                { id: 'tell', text: '친구 집 어른께 바로 알린다', result: '어른이 달려오셨어요.', ending: '바로 알려 친구가 빨리 도움을 받았어요.', next: {
                  text: '어른이 "무엇을 먹었니?" 하고 물으세요.', choices: [
                    { id: 'bottle', text: '약 통을 챙겨 보여 드린다', result: '어른이 통을 보고 바로 전화하셨어요.', impact: [{ who: '친구', text: '빨리 도움을 받아요', tone: 1 }], ending: '바로 알리고 통을 챙겨 친구를 도왔어요.' },
                    { id: 'guess', text: '"사탕 같았어요"만 말한다', result: '어른이 무슨 약인지 알기 어려웠어요.', impact: [{ who: '친구', text: '도움이 늦어요', tone: -1 }] },
                    { id: 'run', text: '집에 가 버린다', result: '어른이 무슨 일인지 몰라 당황하셨어요.', impact: [{ who: '친구', text: '도움이 늦어요', tone: -1 }] },
                  ] } },
                { id: 'same', text: '나도 하나 먹어 본다', result: '나도 몸이 이상해졌어요.', impact: [{ who: '나와 친구', text: '둘 다 위험해요', tone: -1 }] },
              ] }, [['tell', 'bottle']],
            [{ id: 'fast', text: '빨리 알려야 빨리 도울 수 있어서' }, { id: 'bottle', text: '통을 보면 무엇을 먹었는지 알아서' }, { id: 'secret', text: '친구가 혼나지 않게 비밀로', why: '숨기면 친구가 도움을 늦게 받아요.' }], ['fast', 'bottle'], 0.2),
            DIL('동생이 세제 통을 입에 댔어요. 어떻게 할까요?', {
              text: '욕실에서 동생이 세제 통 뚜껑을 입에 대고 있었어요.', motif: 'cloud',
              choices: [
                { id: 'hide', text: '혼날까 봐 통을 숨긴다', result: '어른이 무엇을 먹었는지 몰라요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                { id: 'tell', text: '바로 어른께 알린다', result: '어른이 동생을 살피기 시작하셨어요.', ending: '바로 알려 동생이 도움을 받았어요.', next: {
                  text: '어른이 119에 전화하며 "무슨 제품이니?" 하고 물으세요.', choices: [
                    { id: 'show', text: '세제 통을 가져다 보여 드린다', result: '어른이 통에 적힌 이름을 119에 말씀하셨어요.', impact: [{ who: '동생', text: '알맞은 도움을 받아요', tone: 1 }], ending: '통을 챙겨 보여 드려 빨리 도왔어요.' },
                    { id: 'throw', text: '통을 쓰레기통에 버린다', result: '무슨 제품인지 알 수 없게 되었어요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                    { id: 'dunno', text: '"몰라요"라고 한다', result: '어른이 한참 찾으셨어요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                  ] } },
                { id: 'little', text: '조금이니 그냥 둔다', result: '동생이 기침을 하며 울기 시작했어요.', impact: [{ who: '동생', text: '몸이 나빠질 수 있어요', tone: -1 }] },
              ] }, [['tell', 'show']],
            [{ id: 'quick', text: '조금이어도 바로 알려야 해서' }, { id: 'label', text: '통에 적힌 이름이 도움이 돼서' }, { id: 'scold', text: '혼나는 게 더 무서우니까', why: '혼날까 봐 숨기면 동생이 더 위험해져요.' }], ['quick', 'label'], 0.25),
            DIL('어른이 없는데 동생이 알약을 먹은 것 같아요. 어떻게 할까요?', {
              text: '집에 어른이 없는데 동생 옆에 알약 통이 열려 있어요. 무언가 먹은 것 같아요.', motif: 'star',
              choices: [
                { id: 'wait', text: '어른이 올 때까지 기다린다', result: '기다리는 동안 동생이 축 늘어졌어요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                { id: 'call', text: '119에 전화한다', result: '상담원이 전화를 받았어요.', ending: '어른이 없어서 119에 바로 알렸어요.', next: {
                  text: '119 상담원이 "어디예요? 무슨 일이에요?" 하고 물어요.', choices: [
                    { id: 'answer', text: '주소와 일어난 일을 또박또박 말한다', result: '구급대가 출발했다고 알려 줬어요.', impact: [{ who: '동생', text: '빨리 도움을 받아요', tone: 1 }], ending: '묻는 대로 또박또박 답해 도움을 불렀어요.' },
                    { id: 'cry', text: '울기만 한다', result: '상담원이 어디인지 알 수 없었어요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                    { id: 'hang', text: '무서워서 전화를 끊는다', result: '도움이 오지 못했어요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                  ] } },
                { id: 'mom', text: '엄마께 전화한다', result: '엄마가 "바로 119에 전화해!" 하셨어요.', next: {
                  text: '엄마가 "엄마도 갈게. 바로 119에 전화해!" 하셨어요.', choices: [
                    { id: 'call', text: '119에 전화해 묻는 대로 말한다', result: '구급대가 출발했다고 알려 줬어요.', impact: [{ who: '동생', text: '빨리 도움을 받아요', tone: 1 }], ending: '어른과 119에 알려 동생을 도왔어요.' },
                    { id: 'wait', text: '엄마가 올 때까지 기다린다', result: '엄마가 오시기까지 시간이 걸렸어요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                    { id: 'hide', text: '알약 통을 치워 숨긴다', result: '무엇을 먹었는지 알 수 없게 되었어요.', impact: [{ who: '동생', text: '도움이 늦어요', tone: -1 }] },
                  ] } },
              ] }, [['call', 'answer'], ['mom', 'call']],
            [{ id: 'none', text: '어른이 없을 때는 119가 도와줘서' }, { id: 'clear', text: '어디인지 말해야 찾아올 수 있어서' }, { id: 'later', text: '어른이 오면 그때 말하면 되니까', why: '기다리는 동안 몸이 더 나빠질 수 있어요.' }], ['none', 'clear'], 0.3, { conclude: '잘못 먹었거나 만졌으면 숨기지 말고 바로 알려요. 어른이 없으면 119에 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '어른이 없으면 ___에 전화해 어디인지 말해요.', answer: '119' }] },
      }),
      C({
        id: 'saf-drug.e34.help-call.wrap.home', type: 'wrap', title: '집에서 확인할 것 점검표',
        method: '가정 확인표', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검표 2칸 가운데 확인할 것을 고른다.', base: '점검표 4칸 가운데 확인할 것 3개를 고른다.', challenge: '3개를 고른 뒤 가족에게 물어볼 것 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"집에 가서 가족과 확인할 것은 무엇일까요?" 점검표를 함께 읽고 확인할 칸만 고르게 한다. "약 상자 열어 보기"를 고르는 학생에게 "약 상자는 누가 여는 것이었나요? 우리는 무엇만 알아 두면 될까요?"라고 묻는다. 어른 연락처는 집에서 어른과 함께 적어 두고, 학교에 가져오거나 발표하지 않는다는 것을 짚는다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'kitchen' }, (() => {
              const it = CHK('집에서 가족과 확인할 것만 골라요.', '우리 집 확인표', [{ id: 'phone', text: '어른 연락처 알기', ok: true }, { id: 'open', text: '약 상자 열어 보기', ok: false }, { id: 'place', text: '약 둔 곳 알기', ok: true }, { id: 'say', text: '119에 말할 것 알기', ok: true }], [0, 1], 0.15);
              return { prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels };
            })()),
            { type: 'choice', prompt: '동생이 세제를 만지고 울어요. 가장 먼저 할 일은?', options: ['혼날까 봐 숨겨요', '바로 어른께 알려요', '괜찮아질 때까지 기다려요'], answer: 1, difficulty: 0.1, explain: '숨기거나 기다리지 말고 바로 어른께 알려요.' },
            { type: 'short', prompt: '집에서 가족에게 물어볼 것을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '우리 집 도움 요청 준비(가족과 함께)',
          items: [
            { type: 'check', prompt: '가족과 함께 확인한 것에 표시해요.', options: ['어른 연락처를 알아요', '약 둔 곳을 알아요', '119에 말할 것을 알아요'] },
            { type: 'short', prompt: '119에 전화하면 먼저 말할 것을 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-drug.e34.help-call.wrap.words', type: 'wrap', title: '도움 요청 핵심 낱말 카드',
        method: '핵심 낱말 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '숨기지 않기·바로 알리기 카드 2장을 뒤집으며 뜻을 말한다.', base: '통 챙기기까지 3장을 뒤집으며 뜻을 말한다.', challenge: '3장을 뒤집은 뒤 세 낱말을 넣어 한 문장을 만들어 쓴다.' },
        wrap: {
          teacher: '"\'숨기지 않기\'는 왜 중요할까요? 카드를 뒤집기 전에 먼저 말해 볼까요?" 짝과 번갈아 뜻을 말한 뒤 뒤집어 확인하게 한다. "숨기면 아무도 몰라서 괜찮아요"라는 학생에게 "아무도 모르면 몸이 아플 때 누가 도와줄까요?"라고 되묻는다. 도전 단계는 세 낱말로 "잘못 먹으면 ○○하고 ○○하고 ○○해요." 한 문장을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'flip', front: 'en', speak: false, words: [{ en: '숨기지 않기', ko: '혼날까 봐 감추지 않아요' }, { en: '바로 알리기', ko: '어른께 곧바로 말해요' }, { en: '통 챙기기', ko: '먹은 것의 통을 보여 드려요' }] }, prompt: '낱말 카드를 모두 뒤집으며 뜻을 말해요.', target: { flip: ['숨기지 않기', '바로 알리기', '통 챙기기'] }, difficulty: 0.1,
              levels: { easy: { prompt: '낱말 카드 2장을 뒤집으며 뜻을 말해요.', toolOptions: { words: [{ en: '숨기지 않기', ko: '혼날까 봐 감추지 않아요' }, { en: '바로 알리기', ko: '어른께 곧바로 말해요' }] }, target: { flip: ['숨기지 않기', '바로 알리기'] } } } },
            { type: 'choice', prompt: '어른께 알릴 때 함께 챙길 것은?', options: ['먹은 것의 통', '내 장난감', '가방'], answer: 0, difficulty: 0.1, explain: '통을 보면 무엇을 먹었는지 알 수 있어요.' },
            { type: 'short', prompt: '세 낱말을 넣어 한 문장을 만들어 써요.' },
          ],
        },
        worksheet: {
          title: '도움 요청 세 낱말',
          items: [
            { type: 'table', prompt: '낱말과 뜻을 이어 써요.', columns: ['낱말', '뜻'], cells: [['숨기지 않기', ''], ['바로 알리기', ''], ['통 챙기기', '']], answer: '감추지 않아요, 어른께 곧바로 말해요, 통을 보여 드려요' },
            { type: 'draw', prompt: '어른께 바로 알리는 내 모습을 그려요.' },
          ],
          easy: { note: '숨기지 말고 바로 알려요.', items: [{ type: 'choice', prompt: '잘못 먹으면?', options: ['바로 알려요', '숨겨요'], answer: '바로 알려요' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
