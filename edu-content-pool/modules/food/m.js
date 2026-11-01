/* 창체 법정교육 영양·식생활 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 food 중.
 * 근거: 학교급식법 제13조, 식생활교육지원법 제26조 — 건강한 식생활·영양교육 연 2회 이상(research-mandatory §1).
 *   근거 파일에는 항목 이름과 회수만 있고 표시 읽기·영양 수치·식사 효과 같은 세부 사실이 없다. 주제마다 source 는 체계도에 있다(모두 '근거 약함').
 * 중 기준: 사례 분석·딜레마 토의·자료 해석·짧은 글쓰기(기준표 자기 평가)·캠페인. 인물은 모두 가상 인물(가명 두 글자)이다.
 * 주제 4개 × 8모듈 = 32모듈. 7학년 식품 표시 읽기, 8학년 당류·나트륨 표시와 다이어트 오해, 9학년 아침 식사.
 * 지킨 틀:
 *   - 음식을 '좋은 음식/나쁜 음식'으로 낙인찍지 않는다. 고르는 기준은 늘 '표시를 읽고 상황에 맞게'이고, 간식·라면도 먹는 방법을 따진다.
 *   - 몸·체형·외모를 평가하지 않고, 다이어트·보충제·건강기능식품을 권하지 않는다. 체중 숫자를 쓰거나 묻지 않는다.
 *   - 학생 자신의 식습관·몸무게·건강 상태·알레르기·가정 형편을 묻거나 채점하지 않는다. 채점 문항·글쓰기·기록표는 모두 가상 인물의 것이다.
 *   - 영양성분 값·가격·설문 비율은 모두 수업용 가상 값이고 화면 제목에 '가상'을 밝힌다(실제 제품·통계·권장량 아님). 하루 권장량·기준치 수치는 쓰지 않는다.
 *   - 알레르기·섭식 문제처럼 몸과 관련된 걱정은 보건 선생님·영양 선생님·상담 선생님·보호자에게 잇는다(전화번호는 쓰지 않는다).
 *   - 같은 학년군의 생활안전(saf-life 식품 보관·식중독)·약물(saf-drug 카페인·다이어트약)·성교육(gender 외모 기준) 모듈과 장면을 겹치지 않게 했다.
 *
 * 사람 확인: 근거 파일에 없는 사실·수칙 문장(모듈 id — 확인할 곳)
 *   - food.m.label-read 전반: 포장에 영양성분·원재료명·알레르기 유발 물질·소비기한·보관 방법·내용량이 표시된다는 것, 알레르기 유발 물질은 원재료명 근처에 따로 표시된다는 것,
 *     "같은 시설에서 땅콩을 쓴 제품과 함께 만들었다"는 혼입 주의 문구가 있다는 것 — 식품의약품안전처 「식품 등의 표시기준」(알레르기 유발물질 표시 대상)
 *   - food.m.label-read 전반: 소비기한은 표시된 보관 방법을 지켰을 때 먹어도 되는 기한이라는 것, 보관 방법을 어기면 기한 전에도 상할 수 있다는 것 — 식품의약품안전처 소비기한 표시제 안내
 *   - food.m.label-read.activity.check-order·wrap.guide-write: 확인 차례(알레르기 → 소비기한 → 보관 → 영양성분)는 수업에서 정한 차례(공식 기준 아님) — 영양 선생님이 확인
 *   - food.m.label-read.activity.party-dilemma: 알레르기가 있는 사람은 표시를 확인하고 모르면 먹지 않는다, "아주 적은 양에도 반응이 생길 수 있다", 먹은 뒤 입 주변 가려움 같은 증상이 생기면 바로 어른·보건실에 알린다 — 식품의약품안전처·질병관리청 식품 알레르기 안내
 *   - food.m.label-read.activity.check-order: 급식 식단표에 알레르기 유발 식품 번호가 표시된다는 것 — 학교급식법 시행규칙(알레르기 유발식품 표시)·우리 학교 식단표로 확인
 *   - food.m.breakfast.intro.two-mornings·activity.morning-dilemma: 아침을 거르면 오전에 배가 고파 집중이 흐트러질 수 있다는 장면 — 질병관리청 국가건강정보포털·농림축산식품부 식생활교육 자료(효과 단정 아님)
 *   - food.m.label-read.activity.label-chart·safe-shop, food.m.sugar-sodium 전반: 영양성분 값·가격·소비기한 날짜는 가상 값
 *   - food.m.sugar-sodium 전반: 영양성분 표시가 '1회 섭취량당' 또는 '총 내용량당'으로 적힐 수 있어 비교할 때 기준을 맞춰야 한다는 것 — 식품의약품안전처 「식품 등의 표시기준」(영양성분 표시)
 *   - food.m.sugar-sodium.activity.ramen-steps: 스프를 덜 넣고 국물을 남기면 나트륨을 덜 먹는다, 채소를 더한다 — 식품의약품안전처 나트륨 줄이기 안내
 *   - food.m.sugar-sodium.activity.drink-dilemma: 운동 뒤 목마를 때 물을 마실 수 있다(음료를 낙인찍지 않음) — 식품의약품안전처·질병관리청 국가건강정보포털
 *   - food.m.diet-myth 전반: 굶기·원푸드 다이어트가 몸에 부담을 줄 수 있다, 끼니를 거르면 다음 끼니에 몰아 먹기 쉽다, 성장기에는 여러 식품군을 고루 먹는다,
 *     "일주일 만에 5kg" 같은 광고는 과장 광고 신호다 — 질병관리청 국가건강정보포털, 식품의약품안전처 부당광고 안내, 농림축산식품부 식생활교육 자료
 *   - food.m.diet-myth.wrap.help-map: 몸·먹기 고민을 보건실·상담실·영양 선생님께 이야기할 수 있다 — 학교가 이름·자리를 확인
 *   - food.m.breakfast 전반: 아침 식사가 오전 활동에 필요한 에너지를 준다, 간단한 아침도 식품군을 둘 셋 담을 수 있다 — 농림축산식품부 식생활교육 자료, 질병관리청 국가건강정보포털
 *   - food.m.breakfast.intro.reason-chart: 아침을 거르는 까닭 원그래프 비율은 가상 설문
 *   - food.m.breakfast.activity.routine-clock·wrap.track: 가상 인물의 일과 시각·기록은 가상 값
 *   - food.m.diet-myth.activity.energy-day: 걷기·스트레칭 구간 길이는 '우리 반 약속' 값(근거 수치 아님) */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `food.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'food', band: '중', topic: `food.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } ----
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);
  const H = (h, m) => ({ h, m });

  // ---- 갈림길(dilemma) ----
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // 쉬움 = 갈림 2번(근거 없음), 기본 = 갈림 3번 + 근거, 도전 = 갈림 3번 + 함께 고를 근거(more)까지
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: R, compare: true }, target: { path: paths(good, 3), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), reasons: [] }, target: { path: paths(good, 2) } },
      challenge: { prompt: p.challenge, toolOptions: { reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true } },
    },
  }, extra);
  const DEMO_DIL = (title, tree, good, R, d) => ({ tool: 'dilemma', options: { title, scene: cut(tree, d || 2), reasons: R || [] }, sequence: [{ path: paths(good, d || 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });
  // 리듬(keyboard rhythm) 조각
  const BEAT = (prompt, o, t, more) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'rhythm', meter: 4 }, o), target: t }, more);
  // 예산(economy budget) 조각
  const BUD = (prompt, items, budget, target, ask) => ({ prompt, toolOptions: { mode: 'budget', items, budget, ask }, target: { budget: target } });

  const SAFE_NOTE = '인물·장면·수치는 모두 가상이다. 학생 자신의 식습관·몸무게·건강 상태·알레르기·가정 형편을 묻지 않고 "가상 인물이라면"으로만 이야기한다. 걱정을 말하는 학생은 수업 뒤 따로 만나 보건·영양 선생님께 잇는다.';
  const DATA_NOTE = '포장 표시 값·가격은 수업용 가상 값이다(실제 제품·권장량 아님) — 화면 제목에 \'가상\'을 밝혔다.';

  // ==== 7학년 · 식품 표시 읽고 안전하게 고르기 (food.m.label-read) ====
  {
    const M = MK('label-read', [7]);
    // 가상 과자 포장 뒷면을 칸 지도로 — 칸 이름 = 표시 자리
    const PACK = { grid: [6, 4], title: '가상 과자 포장 뒷면', regions: [
      { name: '제품명', cells: [[0, 0], [1, 0], [2, 0]] }, { name: '앞면 광고 문구', cells: [[3, 0], [4, 0], [5, 0]] },
      { name: '원재료명', cells: [[0, 1], [1, 1], [2, 1]] }, { name: '영양성분', cells: [[3, 1], [4, 1], [5, 1]] },
      { name: '알레르기 표시', cells: [[0, 2], [1, 2]] }, { name: '소비기한', cells: [[2, 2], [3, 2]] }, { name: '보관 방법', cells: [[4, 2], [5, 2]] },
      { name: '내용량', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '만든 곳', cells: [[3, 3], [4, 3], [5, 3]] },
    ] };
    // 반 파티 간식 갈림길(깊이 3) — 반에 땅콩 알레르기가 있는 가상 친구 서아
    const PARTY = { text: '반 파티 간식을 사러 하린이 편의점에 왔다. 우리 반 서아는 땅콩 알레르기가 있다. 진열대 앞에 \'1+1 할인\' 초콜릿 과자가 쌓여 있다.', ask: '하린은 어떻게 할까?', motif: 'house', choices: [
      { id: 'cheap', text: '할인 과자를 바로 바구니에 담는다', result: '계산하고 보니 뒷면에 \'땅콩 함유\'라고 적혀 있다.', impact: [{ who: '서아', text: '먹을 수 없는 간식이 된다', tone: -1 }], why: '사기 전에 알레르기 표시부터 읽어야 모두가 먹을 간식을 고를 수 있어요.', end: '표시를 보지 않고 사서 서아가 먹을 수 없어요.',
        next: { text: '계산을 마쳤는데 과자에 \'땅콩 함유\' 표시가 있다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'hide', text: '서아에게는 말하지 않고 그냥 나눠 준다', result: '서아가 모르고 먹을 수도 있다.', impact: [{ who: '서아', text: '몸이 위험해질 수 있다', tone: -1 }], why: '알레르기가 있는 친구에게 표시를 숨기면 위험해요.' },
          { id: 'swap', text: '영수증을 들고 표시를 확인한 과자로 바꾼다', result: '조금 번거롭지만 모두 먹을 간식이 된다.', impact: [{ who: '서아', text: '같이 먹을 수 있다', tone: 1 }] }] } },
      { id: 'read', text: '담기 전에 뒷면 알레르기 표시부터 읽는다', result: '\'땅콩 함유\' 과자는 빼고, 표시에 땅콩이 없는 과자를 고른다.', impact: [{ who: '서아', text: '먹을 수 있는 간식이 늘어난다', tone: 1 }], end: '표시를 읽고 땅콩이 든 과자를 뺐어요.',
        next: { text: '고른 과자 뒷면에 \'같은 시설에서 땅콩을 쓴 제품과 함께 만들었다\'는 문구가 있다.', ask: '이 과자를 살까?', choices: [
          { id: 'ignore', text: '땅콩이 직접 들어 있지는 않으니 산다', result: '서아가 그 문구를 보고 먹기를 망설인다.', impact: [{ who: '서아', text: '혼자 못 먹을까 걱정한다', tone: -1 }], why: '함께 만든 시설 문구도 알레르기가 있는 사람에게는 중요한 표시예요.' },
          { id: 'ask', text: '서아에게 이 문구도 괜찮은지 미리 물어본다', result: '서아가 "그 문구가 있으면 나는 안 먹어"라고 알려 준다.', impact: [{ who: '서아', text: '자기 기준을 존중받는다', tone: 1 }], end: '서아에게 직접 물어 기준을 알았어요.',
            next: { text: '예산은 조금 남았고, 서아는 함께 먹을 간식이 있으면 좋겠다고 한다.', choices: [
              { id: 'together', text: '서아와 함께 표시를 읽고 둘 다 괜찮은 간식으로 바꾼다', result: '반 모두가 같은 간식을 나눠 먹는다.', impact: [{ who: '서아', text: '빠지지 않고 함께 먹는다', tone: 1 }] },
              { id: 'alone', text: '서아 것은 따로 없으니 "너는 먹지 마"라고 한다', result: '서아만 파티에서 빈손이 된다.', impact: [{ who: '서아', text: '소외감을 느낀다', tone: -1 }], why: '함께 먹을 수 있는 간식을 고르면 아무도 빠지지 않아요.' }] } }] } },
      { id: 'teacher', text: '담임 선생님께 알레르기가 있는 친구를 위한 간식 기준을 먼저 여쭌다', result: '선생님과 함께 알레르기 표시를 확인하는 기준을 정한다.', impact: [{ who: '서아', text: '안심하고 파티를 기다린다', tone: 1 }], ending: '기준을 먼저 정하고 표시를 함께 확인했어요.' }] };
    const PARTY_R = [{ id: 'r1', text: '알레르기 표시는 사기 전에 확인한다' }, { id: 'r2', text: '헷갈리는 표시는 알레르기가 있는 친구에게 묻는다' },
      { id: 'r3', text: '조금 들어 있으면 괜찮다', why: '아주 적은 양에도 반응이 생길 수 있어요.' }, { id: 'r4', text: '할인 상품을 먼저 고르는 것이 알뜰하다', why: '모두가 먹을 수 없으면 알뜰한 선택이 아니에요.' }];
    const PARTY_MORE = { reasons: [{ id: 'r5', text: '한 친구도 빠지지 않고 함께 먹을 간식을 고른다' }], ok: ['r5'] };
    // 표시 없는 수제 머핀 갈림길(깊이 3)
    const MUFFIN = { text: '파티 날, 다른 친구가 집에서 구운 머핀을 가져왔다. 포장에는 아무 표시가 없다. 서아가 하린에게 "하나 먹어도 될까?" 하고 묻는다.', ask: '하린은 뭐라고 할까?', motif: 'house', choices: [
      { id: 'eat', text: '"괜찮겠지, 먹어 봐"라고 한다', result: '서아가 머핀을 반쯤 먹는다.', impact: [{ who: '서아', text: '무엇을 먹었는지 모른다', tone: -1 }], why: '표시가 없으면 무엇이 들었는지 알 수 없어요. 확인하기 전에는 먹지 않아요.', end: '확인하지 않고 먹게 했어요.',
        next: { text: '조금 뒤 서아가 입 주변이 가렵고 이상하다고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'wait', text: '좀 지나면 나을 거라며 기다린다', result: '서아가 점점 불안해한다.', impact: [{ who: '서아', text: '도움을 늦게 받는다', tone: -1 }], why: '먹은 뒤 몸이 이상하면 바로 어른에게 알려야 해요.' },
          { id: 'tell', text: '바로 선생님께 알리고 보건실에 같이 간다', result: '보건 선생님이 서아를 살핀다.', impact: [{ who: '서아', text: '빨리 도움을 받는다', tone: 1 }] }] } },
      { id: 'ask', text: '만든 친구에게 무엇을 넣었는지 물어본다', result: '땅콩버터를 조금 넣었다는 답을 듣는다.', impact: [{ who: '서아', text: '위험을 미리 안다', tone: 1 }], end: '물어봐서 땅콩이 든 것을 알았어요.',
        next: { text: '머핀을 만든 친구가 "조금이라 괜찮을 거야"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'little', text: '조금이니 하나만 먹어 보라고 한다', result: '서아가 망설이며 머핀을 든다.', impact: [{ who: '서아', text: '몸이 위험해질 수 있다', tone: -1 }], why: '조금이어도 알레르기 반응이 생길 수 있어요.' },
          { id: 'no', text: '서아에게 먹지 말자고 하고 다른 간식을 찾는다', result: '서아가 고맙다며 머핀을 내려놓는다.', impact: [{ who: '서아', text: '안전하게 지낸다', tone: 1 }], end: '먹지 않고 다른 간식을 찾았어요.',
            next: { text: '남은 간식은 표시를 확인한 과자와 귤뿐이다.', choices: [
              { id: 'share', text: '과자 표시를 서아와 같이 읽고 귤을 나눠 먹는다', result: '서아도 파티를 함께 즐긴다.', impact: [{ who: '서아', text: '함께 먹는다', tone: 1 }] },
              { id: 'none', text: '서아 혼자 아무것도 안 먹게 둔다', result: '서아만 구경한다.', impact: [{ who: '서아', text: '서운하다', tone: -1 }], why: '확인한 간식을 함께 고르면 아무도 빠지지 않아요.' }] } }] } },
      { id: 'skip', text: '"모르면 안 먹는 게 좋겠어"라고 하고 선생님께 여쭌다', result: '선생님이 만든 친구에게 재료를 물어 확인해 준다.', impact: [{ who: '서아', text: '안심한다', tone: 1 }], ending: '표시가 없는 음식은 먼저 확인했어요.' }] };
    const MUFFIN_R = [{ id: 'r1', text: '표시가 없으면 무엇이 들었는지 묻거나 먹지 않는다' }, { id: 'r2', text: '먹은 뒤 몸이 이상하면 바로 어른에게 알린다' },
      { id: 'r3', text: '친구가 직접 만든 음식은 다 괜찮다', why: '정성과 재료는 따로예요. 무엇이 들었는지 확인해요.' }, { id: 'r4', text: '조금이면 알레르기 반응이 생기지 않는다', why: '아주 적은 양에도 반응이 생길 수 있어요.' }];
    // 가상 포장 두 개의 영양성분(한 봉지당, 가 50g·나 100g) — 가상 값
    const NUT = [['가 당류', 12], ['나 당류', 8], ['가 지방', 9], ['나 지방', 14], ['가 단백질', 3], ['나 단백질', 5]];
    const NUT_O = { type: 'bar', title: '가상 포장 영양성분(한 봉지당 · 가 50g, 나 100g)', unit: 'g', xLabel: '과자와 성분', yLabel: '양', max: 16, scale: 1 };
    // 가족 캠핑 장보기 — 2박 3일, 이틀 뒤 출발, 동생은 새우 알레르기(가상)
    const SHOP = [
      { id: 'water', text: '생수 묶음(실온 보관)', price: 3000 }, { id: 'rice', text: '즉석밥 3개(기한 넉넉)', price: 4000 },
      { id: 'shrimp', text: '새우 과자(새우 함유 표시)', price: 1500 }, { id: 'tuna', text: '참치 통조림(기한 넉넉)', price: 2500 },
      { id: 'fishcake', text: '할인 어묵(소비기한 내일까지)', price: 1000 }, { id: 'apple', text: '사과 4개', price: 3000 },
      { id: 'cereal', text: '시리얼(기한 넉넉, 새우 없음)', price: 3000 }, { id: 'ramen', text: '컵라면(원재료에 새우)', price: 1200 },
    ];
    const SALE = [
      { id: 'sau', text: '할인 소시지(소비기한 닷새 뒤)', price: 1500 }, { id: 'yog', text: '할인 요구르트(소비기한 오늘)', price: 800 },
      { id: 'bun', text: '할인 빵(소비기한 내일)', price: 1000 }, { id: 'can', text: '할인 옥수수 통조림(기한 넉넉)', price: 1200 },
      { id: 'water', text: '생수 묶음(실온 보관)', price: 3000 },
    ];
    const ORDER = [{ id: 'o1', text: '알레르기 표시 보기' }, { id: 'o2', text: '소비기한 보기' }, { id: 'o3', text: '보관 방법 보기' }, { id: 'o4', text: '영양성분 보기' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.allergy-case', {
        title: '받은 과자, 먹기 전에 한 번', method: '알레르기 사례 분석', tool: 'story', minutes: 6,
        levels: { easy: '교사가 "위험을 막은 행동 하나"를 찾자고 하고, 결정적 장면 한 장만 고른다.', base: '위험을 막은 결정적 행동 두 장면을 고르고 까닭을 말한다.', challenge: '두 장면을 고른 뒤, 표시를 확인하지 않았다면 생길 결과를 짝에게 한 문장으로 말한다.' },
        intro: {
          teacher: '"지아는 친구가 준 과자를 바로 먹지 않았어요. 어느 장면이 지아를 지켰을까요?" 우유 알레르기가 있는 가상 인물 지아의 네 장면을 넘겨 보이고, 시연 단추로 \'뒷면 표시 읽기\'와 \'못 먹는다고 말하기\' 장면이 바구니에 담기는 모습을 보인다. "친구가 주는 걸 안 먹으면 예의가 없다"는 말이 나오면 "까닭을 말하고 다른 간식을 나눠 먹으면 예의가 없는 걸까요?"라고 되묻는다. 학생 자신의 알레르기는 묻지 않는다.',
          student: '가상 인물 지아의 네 장면을 보고, 위험을 막은 결정적 행동이 담긴 장면을 골라요. 그 행동이 없었다면 어떻게 됐을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험을 막은 행동', title: '지아가 받은 과자', cards: [
            { id: 'c1', text: '친구가 과자를 건넨다', motif: 'star' }, { id: 'c2', text: '지아가 뒷면 알레르기 표시를 읽는다', motif: 'leaf' },
            { id: 'c3', text: '"우유가 들어서 못 먹어"라고 말한다', motif: 'cloud' }, { id: 'c4', text: '친구와 다른 간식을 나눠 먹는다', motif: 'house' }], shuffle: false }, sequence: [{ pick: ['c2', 'c3'] }] },
          art: { draw: 'a paper-cut classroom where a teenager turns over a snack package to read the small label on the back while a friend holds out the snack', banner: '먹기 전에, 뒷면 한 번', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.label-map', {
        title: '포장 뒷면 정보 지도', method: '포장 정보 지도', tool: 'map', minutes: 6,
        levels: { easy: '알레르기 표시·소비기한·보관 방법 세 곳만 짚고, 교사가 칸 이름을 소리 내어 읽어 준다.', base: '영양성분·원재료명까지 다섯 곳을 짚고 각 표시가 무엇을 알려 주는지 말한다.', challenge: '다섯 곳을 짚은 뒤, 찾기 어려웠던 자리를 어떻게 바꾸면 읽기 쉬울지 짝과 제안한다.' },
        intro: {
          teacher: '"과자 봉지 뒷면에는 무엇이 적혀 있을까요? 앞면 광고 문구와 무엇이 다를까요?" 가상 과자 포장 뒷면을 칸 지도로 띄우고, 시연 단추로 알레르기 표시·소비기한·보관 방법 칸에 핀이 꽂히는 모습을 보인다. "앞면에 \'건강한\'이라고 쓰여 있으면 뒷면은 안 봐도 된다"는 말에는 "앞면은 누가 무엇을 팔려고 쓴 글일까요?"라고 되묻는다. 오늘은 뒷면 표시를 상황에 맞게 골라 읽는 연습을 한다고 밝힌다.',
          student: '가상 과자 포장 뒷면 지도에서 알레르기 표시·소비기한·보관 방법·영양성분·원재료명 자리를 찾아 보고, 각 표시가 무엇을 알려 주는지 말해요.',
          demo: { tool: 'map', options: PACK, sequence: [{ region: '알레르기 표시' }, { region: '소비기한' }, { region: '보관 방법' }] },
          art: { draw: 'a large paper-cut snack package seen from the back, its label divided into neat paper panels with small pins pointing at the allergy and date boxes', banner: '뒷면에 답이 있어요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '실제 제품 포장이 아니라 가상 포장이다. 실물 포장을 보일 때는 상표가 가려진 것을 쓴다.',
      }),

      // ---- 활동 ----
      M('activity.party-dilemma', {
        title: '반 파티 간식 갈림길', method: '반 파티 간식 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 가 보고 결과 장면을 본다(근거 카드 없음).', base: '갈림길 3번을 끝까지 가고 내 선택의 근거 카드를 고른다.', challenge: '근거 카드에 \'함께 먹기\' 근거가 더해지고, 마지막 문항에서 처음으로 돌아가 다른 길도 끝까지 가 본 뒤 견준다.' },
        activity: {
          title: '반 파티 간식 갈림길', tool: 'dilemma',
          teacher: '"할인 과자를 먼저 담은 길과 표시부터 읽은 길, 끝에서 서아의 모습은 어떻게 달라질까요?" 한 길을 끝까지 가 본 뒤 결과의 \'서아\' 영향 칸을 소리 내어 읽게 한다. "땅콩이 직접 안 들었으면 괜찮다"는 학생에게 "같은 시설에서 만들었다는 문구는 누구를 위해 적어 둔 걸까요?"라고 되묻는다. 알레르기가 있는 친구를 빼는 것이 아니라 모두 함께 먹을 간식을 찾는 것이 목표라는 점을 짚는다.',
          task: '반 파티 간식을 사는 가상 인물 하린이 되어 길을 고르고, 서아에게 생기는 결과를 따라가며 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '하린이 파티 간식을 사러 왔어요. 두 번 골라 결과를 보세요.', base: '하린이 파티 간식을 사러 왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '하린이 파티 간식을 사러 왔어요. 세 번 골라 끝까지 가고, 함께 먹기 근거까지 고르세요.' },
              '반 파티 간식 사기', PARTY, [['read', 'ask', 'together'], ['teacher']], PARTY_R, ['r1', 'r2'], PARTY_MORE),
            DIL({ easy: '표시 없는 머핀을 서아가 먹고 싶어 해요. 두 번 골라 결과를 보세요.', base: '표시 없는 머핀을 서아가 먹고 싶어 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '표시 없는 머핀을 서아가 먹고 싶어 해요. 세 번 골라 끝까지 가고, 함께 먹기 근거까지 고르세요.' },
              '표시 없는 수제 머핀', MUFFIN, [['ask', 'no', 'share'], ['skip']], MUFFIN_R, ['r1', 'r2'], PARTY_MORE),
            IT({ prompt: '파티 간식 장면 처음으로 돌아가, 서로 다른 끝 장면 두 개를 끝까지 가 보고 결과를 견주세요.', toolOptions: { title: '두 길 견주기', scene: cut(PARTY, 3), reasons: [], compare: true }, target: { explore: 2 } },
              { prompt: '파티 간식 장면에서 두 번씩 골라, 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(PARTY, 2) } },
              null, { conclude: '알레르기 표시는 사기 전에 읽고, 헷갈리면 당사자에게 묻고, 모두 함께 먹을 간식을 골라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '\'같은 시설에서 땅콩을 쓴 제품과 함께 만들었다\'는 문구를 보았을 때 가장 알맞은 행동은?', options: ['땅콩이 직접 없으니 그냥 산다', '알레르기가 있는 친구에게 괜찮은지 묻는다', '문구는 무시한다'], answer: '알레르기가 있는 친구에게 괜찮은지 묻는다' }] },
        notes: '서아·하린은 가상 인물이다. 학생에게 자기 알레르기를 밝히게 하지 않는다. 알레르기가 있는 학생이 있으면 그 학생이 원할 때만 이야기를 보탠다.',
      }),
      M('activity.label-chart', {
        title: '두 과자 표시 막대그래프', method: '두 식품 표시 그래프 비교', tool: 'chart', minutes: 15,
        levels: { easy: '당류 한 성분의 막대 2개만 그리고, 더 많은 쪽을 고른다(값이 보인다).', base: '당류·지방·단백질 세 성분의 막대 6개를 그리고 차이를 읽는다.', challenge: '마지막 문항에서 내용량(50g·100g)이 다른 두 봉지를 같은 양으로 맞춰 견주는 값을 구한다.' },
        activity: {
          title: '두 과자 표시 막대그래프', tool: 'chart',
          teacher: '"과자 가는 당류 12g, 과자 나는 8g이에요. 그럼 과자 가가 더 달까요?" 막대를 그린 뒤 그래프 제목의 \'가 50g, 나 100g\'을 함께 읽게 한다. "숫자가 큰 쪽이 무조건 더 많다"는 학생에게 "한 봉지 크기가 두 배 다르면 같은 양으로 맞췄을 때도 그럴까요?"라고 되묻는다. 값은 수업용 가상 표시이고, 어느 과자가 좋다 나쁘다를 정하는 것이 아니라 표시를 바르게 견주는 연습이라는 점을 밝힌다.',
          task: '가상 포장 두 개의 영양성분 표시를 막대그래프로 그리고, 내용량을 따져 차이를 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 보고 두 과자의 세 성분을 막대그래프로 그리세요(가상 표시).', toolOptions: Object.assign({ mode: 'build', data: NUT, showTable: true }, NUT_O), target: { build: true } },
              { prompt: '표를 보고 두 과자의 당류 막대 2개를 그리세요(가상 표시).', toolOptions: { data: NUT.slice(0, 2) } }),
            IT({ prompt: '한 봉지당 표시로 보면 지방이 더 많은 과자를 고르세요.', toolOptions: Object.assign({ mode: 'read', data: NUT, question: '한 봉지당 지방이 더 많은 과자는?', choices: ['과자 가', '과자 나'] }, NUT_O), target: { pick: 1 } },
              { prompt: '한 봉지당 당류가 더 많은 과자를 고르세요.', toolOptions: { data: NUT.slice(0, 2), question: '한 봉지당 당류가 더 많은 과자는?' }, target: { pick: 0 } }),
            IT({ prompt: '한 봉지당 지방은 과자 나가 과자 가보다 몇 g 많은지 그래프에서 읽어 쓰세요.', toolOptions: Object.assign({ mode: 'read', data: NUT, question: '몇 g 많은가요?' }, NUT_O), target: { value: 5 } },
              null,
              { prompt: '과자 가(50g)를 과자 나처럼 100g으로 맞추면 당류는 몇 g일지 쓰세요.', toolOptions: { question: '과자 가 100g의 당류는 몇 g일까요?' }, target: { value: 24 } },
              { conclude: '영양성분은 한 봉지 크기가 다르면 같은 양으로 맞춰 견줘요. 그래야 표시를 바르게 읽을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내용량이 다른 두 식품의 표시를 견줄 때 먼저 해야 할 일을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '봉지 크기가 다른 두 과자를 견줄 때 알맞은 것은?', options: ['같은 양으로 맞춰 견준다', '숫자만 견준다'], answer: '같은 양으로 맞춰 견준다' }] },
        notes: DATA_NOTE,
      }),
      M('activity.safe-shop', {
        title: '캠핑 장보기 표시 확인', method: '표시 확인 장보기', tool: 'economy', minutes: 15,
        levels: { easy: '물건 6개 가운데 예산 안에서 세 품목을 고른다.', base: '물건 8개 가운데 예산 안에서 알레르기·소비기한 표시를 따져 다섯 품목을 고른다.', challenge: '마지막 문항에서 할인 상품의 소비기한을 캠핑 날짜와 견주어 고른다.' },
        activity: {
          title: '캠핑 장보기 표시 확인', tool: 'economy',
          teacher: '"이틀 뒤에 떠나는 2박 3일 캠핑이에요. 소비기한이 내일까지인 어묵은 싸니까 사도 될까요?" 가상 인물 도윤 가족의 장보기 목록을 띄우고, 물건을 고를 때마다 괄호 속 표시를 소리 내어 읽게 한다. "할인하면 무조건 이득"이라는 학생에게 "캠핑 날 먹을 수 없으면 아낀 돈일까요, 버린 돈일까요?"라고 되묻는다. 동생의 새우 알레르기도 함께 따지게 하고, 값과 날짜는 모두 가상이라는 점을 밝힌다.',
          task: '가상 인물 도윤 가족의 캠핑 장보기에서 예산을 지키면서 알레르기·소비기한·보관 표시를 따져 물건을 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(BUD('이틀 뒤 2박 3일 캠핑, 동생은 새우 알레르기예요. 15,000원 안에서 생수·즉석밥을 넣고, 먹을 수 없거나 기한이 맞지 않는 것은 빼고 고르세요.', SHOP, 15000, { must: ['water', 'rice'], not: ['shrimp', 'fishcake', 'ramen'], min: 10000 }, '가상 캠핑 장보기'),
              BUD('15,000원 안에서 생수를 넣어 딱 세 품목을 고르세요. 새우가 든 것은 빼요.', pickCards(SHOP, ['water', 'rice', 'shrimp', 'tuna', 'apple', 'ramen']), 15000, { must: ['water'], not: ['shrimp', 'ramen'], count: 3 }, '가상 캠핑 장보기')),
            IT(BUD('캠핑 아침거리예요. 16,000원 안에서 딱 다섯 품목을 고르되, 새우가 든 것과 기한이 맞지 않는 것은 빼세요.', SHOP, 16000, { not: ['shrimp', 'fishcake', 'ramen'], count: 5 }, '아침거리 다섯 품목'),
              BUD('캠핑 아침거리예요. 12,000원 안에서 딱 세 품목을 고르세요. 새우가 든 것은 빼요.', pickCards(SHOP, ['water', 'rice', 'shrimp', 'tuna', 'apple', 'cereal']), 12000, { not: ['shrimp'], count: 3 }, '아침거리 세 품목')),
            IT(BUD('할인 코너예요. 캠핑은 이틀 뒤부터 사흘 동안이에요. 6,000원 안에서 생수를 넣고, 캠핑 날 소비기한이 지나는 할인 상품은 빼고 고르세요.', SALE, 6000, { must: ['water'], not: ['yog', 'bun'], min: 4000 }, '할인 코너'),
              null, null, { conclude: '싸게 사는 것보다 먹을 날까지 소비기한이 남았는지, 알레르기 표시가 맞는지를 먼저 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 뺀 물건과 뺀 까닭(표시)을 써요.', columns: ['뺀 물건', '까닭(어떤 표시)'], cells: [['새우 과자', ''], ['할인 어묵', '']], answer: '새우 함유 표시(알레르기), 소비기한이 캠핑 전에 지남' }] },
        notes: '도윤 가족·물건값·날짜는 가상이다. 학생 가족의 장보기 예산이나 형편을 묻지 않는다. ' + DATA_NOTE,
      }),
      M('activity.check-order', {
        title: '표시 확인 차례 세우기', method: '표시 확인 순서표', tool: 'kitchen', minutes: 15,
        levels: { easy: '확인 카드 3장(알레르기·소비기한·보관)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '확인 카드 4장을 차례로 놓고, 가상 샌드위치 포장에서 확인할 표시만 점검한다.', challenge: '마지막 문항에서 급식 식단표를 볼 때의 차례로 바꾸어 카드 4장을 놓는다.' },
        activity: {
          title: '표시 확인 차례 세우기', tool: 'kitchen',
          teacher: '"알레르기, 소비기한, 보관 방법, 영양성분 — 무엇부터 봐야 할까요? 왜 그 차례일까요?" 카드를 놓은 뒤 \'먹으면 바로 위험한 것부터\'라는 기준을 학생 말로 다시 말하게 한다. "영양성분이 제일 중요하다"는 학생에게 "알레르기가 있는 사람이 영양성분부터 보고 땅콩 표시를 놓치면 어떻게 될까요?"라고 되묻는다. 이 차례는 우리 반이 정한 확인 습관이고, 급식처럼 상황이 바뀌면 보는 자리도 바뀐다는 점을 짚는다.',
          task: '식품 표시를 확인하는 차례를 카드로 정하고, 가상 포장과 급식 식단표에 적용해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('편의점에서 식품을 고를 때 표시를 확인할 차례대로 카드를 놓으세요.', ORDER),
              OB('편의점에서 식품을 고를 때 표시를 확인할 차례대로 카드 3장을 놓으세요.', ORDER.slice(0, 3))),
            IT(CL('달걀 알레르기가 있는 가상 인물 지우가 냉장 샌드위치를 고를 때 꼭 볼 표시만 표시하세요.', '지우의 샌드위치 점검', [
              { id: 'k1', text: '원재료명 옆 알레르기 표시', ok: true }, { id: 'k2', text: '소비기한 날짜', ok: true }, { id: 'k3', text: '보관 방법(냉장)', ok: true },
              { id: 'k4', text: '앞면 모델 사진' }, { id: 'k5', text: '포장 색깔' }, { id: 'k6', text: '\'1+1\' 행사 문구' }])),
            IT(OB('급식 식단표를 볼 때의 차례대로 카드를 놓으세요(가상 인물 지우).', [{ id: 'g1', text: '지우의 알레르기 번호 찾기' }, { id: 'g2', text: '오늘 메뉴 옆 번호와 견주기' }, { id: 'g3', text: '헷갈리면 영양 선생님께 묻기' }]),
              null,
              OB('급식 식단표를 볼 때의 차례대로 카드 4장을 놓으세요(가상 인물 지우).', [{ id: 'g1', text: '지우의 알레르기 번호 찾기' }, { id: 'g2', text: '오늘 메뉴 옆 번호와 견주기' }, { id: 'g3', text: '헷갈리면 영양 선생님께 묻기' }, { id: 'g4', text: '먹을 반찬 정하기' }]),
              { conclude: '먹으면 바로 위험한 것(알레르기)부터, 상하는 것(소비기한·보관), 그다음 영양성분을 봐요. 상황마다 보는 자리는 달라져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '알레르기 표시를 가장 먼저 확인하는 까닭을 한 문장으로 써요.' }] },
        notes: '확인 차례는 수업에서 정한 습관이다(공식 기준 아님). 급식 식단표의 알레르기 번호 표시 방식은 우리 학교 식단표로 바꿔 보인다.',
      }),

      // ---- 정리 ----
      M('wrap.guide-write', {
        title: '친구에게 주는 표시 읽기 안내', method: '친구에게 주는 표시 읽기 안내', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 채워 두 문장으로 쓰고 기준 2개를 점검한다.', base: '세 문장으로 쓰고 기준 3개(확인 항목·차례·까닭)를 점검한다.', challenge: '초등학생이 읽는다고 생각하고 쉬운 말로 다시 쓴 뒤 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'표시 잘 봐\'와 \'먼저 알레르기 표시를 보고, 다음에 소비기한을 봐. 먹으면 바로 위험한 것부터 보는 거야\' 가운데 어느 말이 친구에게 쓸모 있을까요?" 두 문장을 견주어 읽은 뒤 안내를 쓰게 한다. "표시는 어른이 보는 것"이라는 말에는 혼자 편의점에 갈 때 누가 대신 읽어 줄지 되묻는다. 이름이나 자기 알레르기는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '친구에게 식품 표시 읽는 법을 알려 주는 안내를 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '표시 읽기 안내', placeholder: '예: 과자를 사기 전에는…' },
              prompt: '표시 읽기 안내를 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['확인할 표시 항목을 썼다', '확인하는 차례를 썼다', '그 차례인 까닭을 썼다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 안내를 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, minChars: 25, starter: '먼저 ___ 표시를 봐. 왜냐하면 ___ 때문이야.' }, target: { selfCheck: ['확인할 표시 항목을 썼다', '그 까닭을 썼다'] } },
            { prompt: '초등학생이 읽는다고 생각하고 쉬운 말로 안내를 다시 쓴 뒤 기준표에 표시해요.', target: { selfCheck: ['확인할 표시 항목을 썼다', '확인하는 차례를 썼다', '그 차례인 까닭을 썼다', '초등학생도 알 쉬운 말로 썼다'] } }),
            { type: 'choice', prompt: '소비기한에 대한 설명으로 알맞은 것은?', options: ['조금 지나도 보관과 상관없이 먹어도 된다', '표시된 보관 방법을 지켰을 때 먹어도 되는 기한이다', '포장을 뜯지 않으면 기한이 없다'], answer: 1, difficulty: 0.2, explain: '소비기한은 보관 방법을 지켰을 때의 기한이에요. 보관을 어기면 기한 전에도 상할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '식품 표시 읽기 안내',
          items: [
            { type: 'short', prompt: '친구에게 주는 식품 표시 읽기 안내를 세 문장으로 써요(항목·차례·까닭).' },
            { type: 'check', prompt: '내 안내문을 기준표로 점검해요.', options: ['확인할 표시 항목이 있다', '확인 차례가 있다', '까닭이 있다'] },
          ],
          easy: { note: '"먼저 ___ 표시를 봐. 왜냐하면 ___" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 안내를 써요.', text: '먼저 ___ 표시를 봐. 왜냐하면 ___ 때문이야.', answer: '(예) 알레르기, 먹으면 바로 위험할 수 있기' }] },
        },
      }),
      M('wrap.campaign', {
        title: '"먹기 전, 표시 한 번" 포스터', method: '알레르기 배려 캠페인', tool: 'collage', minutes: 7,
        levels: { easy: '보기 문구 하나를 골라(활동지) 조각 3개 이상으로 포스터 바탕을 꾸민다.', base: '문구를 직접 쓰고(활동지) 조각 5개 이상으로 문구와 어울리는 그림을 꾸민다.', challenge: '포스터를 볼 대상(1학년·급식실·매점)을 정하고 문구를 그 대상에 맞게 고쳐 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"알레르기가 있는 친구를 배려하는 포스터라면, 겁주는 말과 할 행동을 알려 주는 말 가운데 무엇이 오래 남을까요?" 문구는 활동지에 쓰고 조각으로 포스터 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). "알레르기는 그 친구가 알아서 조심할 일"이라는 말에는 오늘 파티 갈림길에서 서아에게 생긴 결과를 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14, shapes: ['circle', 'square', 'rect', 'star', 'heart', 'leaf', 'semi'] }, prompt: '"먹기 전, 표시 한 번" 포스터 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '표시를 확인하는 행동이 떠오르는 그림을 넣었다', '문구를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '보기 문구 하나를 골랐다'], minPieces: 3 } },
              { prompt: '포스터를 볼 대상을 정하고, 그 대상에 맞게 꾸민 뒤 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '표시를 확인하는 행동이 떠오르는 그림을 넣었다', '문구를 활동지에 썼다', '볼 대상에 맞게 문구를 고쳤다'], minPieces: 5 } }),
            { type: 'choice', prompt: '알레르기 배려 캠페인 문구로 가장 알맞은 것은?', options: ['알레르기는 각자 알아서!', '나눠 먹기 전, 뒷면 알레르기 표시 한 번', '모르는 음식은 무서워요'], answer: 1, difficulty: 0.15, explain: '할 행동이 구체적으로 들어 있어야 읽은 사람이 따라 할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '먹기 전, 표시 한 번',
          items: [
            { type: 'short', prompt: '우리 반 알레르기 배려 캠페인 문구를 한 줄로 써요.' },
            { type: 'check', prompt: '내 문구를 점검해요.', options: ['할 행동이 들어 있다', '누군가를 탓하지 않는다', '짧고 읽기 쉽다'] },
          ],
          easy: { note: '보기 문구를 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 문구 하나를 골라요.', options: ['나눠 먹기 전, 표시 한 번', '모르면 묻고, 확인하고 먹어요', '같이 먹을 간식을 함께 골라요'], answer: '나눠 먹기 전, 표시 한 번' }] },
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 문구는 활동지에 쓰게 했다.',
      }),
    );
  }

  // ==== 8학년 · 당류·나트륨, 포장의 표시를 읽는다 (food.m.sugar-sodium) ====
  {
    const M = MK('sugar-sodium', [8]);
    // 가상 음료 네 종(한 병 기준 당류 g) · 가상 간식 네 종(한 봉지 기준 나트륨 mg) — 수업용 가상 표시
    const SUGAR = [['음료 가', 30], ['음료 나', 18], ['음료 다', 12], ['음료 라', 4]];
    const SUGAR_O = { type: 'bar', title: '가상 음료 표시 — 한 병 기준 당류', unit: 'g', xLabel: '음료', yLabel: '당류', max: 32, scale: 2 };
    const SALT = [['간식 가', 400], ['간식 나', 200], ['간식 다', 600], ['간식 라', 100]];
    const SALT_O = { type: 'bar', title: '가상 간식 표시 — 한 봉지 기준 나트륨', unit: 'mg', xLabel: '간식', yLabel: '나트륨', max: 700, scale: 100 };
    // 축구 뒤 음료 갈림길(깊이 3) — 가상 인물 준서
    const DRINK = { text: '축구를 마친 준서가 친구들과 편의점 앞에 왔다. 목이 몹시 마르다. 친구들은 \'1+1\' 큰 병 음료를 집어 든다.', ask: '준서는 어떻게 할까?', motif: 'sun', choices: [
      { id: 'big', text: '친구를 따라 1+1 큰 병 두 개를 사서 다 마신다', result: '배가 불러 저녁 생각이 없어진다.', impact: [{ who: '준서', text: '저녁을 거를 것 같다', tone: -1 }], why: '목마를 땐 먼저 물로 축이고, 단 음료는 표시를 보고 양을 정해요.', end: '음료로 배가 불러 저녁 생각이 없어졌어요.',
        next: { text: '저녁 시간인데 배가 불러 숟가락이 안 간다.', ask: '어떻게 할까?', choices: [
          { id: 'skipmeal', text: '저녁을 건너뛰고 방으로 간다', result: '밤늦게 배가 고파 과자를 찾는다.', impact: [{ who: '준서', text: '끼니가 흐트러진다', tone: -1 }], why: '음료가 끼니를 대신하면 여러 식품군을 고루 먹기 어려워요.' },
          { id: 'smalleat', text: '저녁을 조금이라도 먹고, 남은 한 병은 내일로 둔다', result: '끼니를 지키고 음료 양도 나눈다.', impact: [{ who: '준서', text: '끼니를 지킨다', tone: 1 }] }] } },
      { id: 'water', text: '먼저 생수를 사서 목을 축인다', result: '숨이 고르고 갈증이 가라앉는다.', impact: [{ who: '준서', text: '몸이 편해진다', tone: 1 }], end: '물로 먼저 목을 축였어요.',
        next: { text: '친구들이 "단 거 하나는 마셔야지" 하며 음료를 권한다.', ask: '어떻게 할까?', choices: [
          { id: 'two', text: '권하는 대로 큰 병을 하나 더 다 마신다', result: '저녁 전에 배가 부르다.', impact: [{ who: '준서', text: '저녁 생각이 줄어든다', tone: -1 }], why: '권해도 뒷면 표시를 보고 내가 마실 양을 정할 수 있어요.' },
          { id: 'label', text: '뒷면 당류 표시를 보고 작은 병을 골라 친구와 나눠 마신다', result: '친구들과 즐겁게 마시고 양도 알맞다.', impact: [{ who: '친구들', text: '함께 즐긴다', tone: 1 }], end: '표시를 보고 작은 병을 나눠 마셨어요.',
            next: { text: '집에 와 보니 저녁이 차려져 있다.', choices: [
              { id: 'dinner', text: '저녁을 맛있게 먹는다', result: '하루 끼니를 고루 챙긴다.', impact: [{ who: '준서', text: '끼니를 지킨다', tone: 1 }] },
              { id: 'snackmeal', text: '저녁 대신 과자로 때운다', result: '밥과 반찬을 거른다.', impact: [{ who: '준서', text: '고루 먹지 못한다', tone: -1 }], why: '끼니를 간식으로 대신하면 여러 식품군을 고루 먹기 어려워요.' }] } }] } },
      { id: 'share', text: '큰 병 하나를 친구와 나누고, 생수도 한 병 산다', result: '목도 축이고 음료도 함께 즐긴다.', impact: [{ who: '준서', text: '양을 알맞게 정한다', tone: 1 }], ending: '나눠 마시고 물도 챙겼어요.' }] };
    const DRINK_R = [{ id: 'r1', text: '목마를 때는 먼저 물로 목을 축인다' }, { id: 'r2', text: '단 음료는 뒷면 표시를 보고 양을 정한다' },
      { id: 'r3', text: '운동했으니 얼마든지 마셔도 된다', why: '운동한 날에도 표시를 보고 양을 정해요.' }, { id: 'r4', text: '1+1은 둘 다 마셔야 이득이다', why: '남겨 두거나 나눠도 손해가 아니에요.' }];
    const MEAL_MORE = { reasons: [{ id: 'r5', text: '음료나 간식이 끼니를 대신하지 않게 한다' }], ok: ['r5'] };
    // 학원 전 편의점 갈림길(깊이 3) — 가상 인물 수아, 20분
    const ACAD = { text: '수아는 학원 가기 전 20분 동안 편의점에서 저녁을 먹으려 한다. 컵라면 뒷면에는 나트륨이 크게 표시되어 있다.', ask: '수아는 무엇을 고를까?', motif: 'house', choices: [
      { id: 'skipit', text: '시간이 없으니 굶고 학원에 간다', result: '학원 중간에 배가 고파 집중이 흐트러진다.', impact: [{ who: '수아', text: '힘이 빠진다', tone: -1 }], why: '짧은 시간에도 끼니를 거르지 않을 방법을 찾아요.', ending: '굶어서 학원에서 힘이 빠졌어요.' },
      { id: 'double', text: '컵라면 두 개를 사서 국물까지 다 먹는다', result: '학원에서 자꾸 목이 마르다.', impact: [{ who: '수아', text: '목이 마르다', tone: -1 }], why: '나트륨 표시를 보고 국물 양을 정할 수 있어요.', end: '국물까지 두 개를 다 먹었어요.',
        next: { text: '쉬는 시간마다 목이 말라 음료를 사려 한다.', ask: '어떻게 할까?', choices: [
          { id: 'buymore', text: '단 음료를 두 번 더 사 마신다', result: '용돈이 줄고 배도 더부룩하다.', impact: [{ who: '수아', text: '용돈이 줄어든다', tone: -1 }] },
          { id: 'refill', text: '물병에 물을 채워 마신다', result: '목이 가라앉는다.', impact: [{ who: '수아', text: '갈증이 풀린다', tone: 1 }] }] } },
      { id: 'read', text: '표시를 보고 컵라면 하나에 삼각김밥과 우유를 더한다', result: '여러 가지를 조금씩 고른다.', impact: [{ who: '수아', text: '고루 먹는다', tone: 1 }], end: '표시를 보고 여러 가지를 골랐어요.',
        next: { text: '먹다 보니 라면 국물이 많이 남았다. 친구가 "국물이 제일 맛있지" 한다.', ask: '국물을 어떻게 할까?', choices: [
          { id: 'drinkall', text: '국물을 끝까지 마신다', result: '학원에서 목이 마르다.', impact: [{ who: '수아', text: '목이 마르다', tone: -1 }], why: '라면 국물에 나트륨이 많이 들어 있어요. 국물은 남길 수 있어요.' },
          { id: 'leave', text: '국물은 남기고 김밥을 마저 먹는다', result: '배도 부르고 목도 편하다.', impact: [{ who: '수아', text: '편하게 공부한다', tone: 1 }], end: '국물은 남기고 김밥을 먹었어요.',
            next: { text: '내일도 학원 전 시간이 짧다.', choices: [
              { id: 'plan', text: '표시를 보고 고를 메뉴 두 가지를 미리 정해 둔다', result: '내일은 고르는 시간이 줄어든다.', impact: [{ who: '수아', text: '여유가 생긴다', tone: 1 }] },
              { id: 'random', text: '그날 끌리는 대로 아무거나 담기로 한다', result: '급하게 고르다 표시를 못 본다.', impact: [{ who: '수아', text: '또 서두른다', tone: -1 }], why: '미리 정해 두면 짧은 시간에도 표시를 볼 여유가 생겨요.' }] } }] } }] };
    const ACAD_R = [{ id: 'r1', text: '나트륨 표시를 보고 국물 양을 정한다' }, { id: 'r2', text: '짧은 시간에도 끼니를 거르지 않는다' },
      { id: 'r3', text: '국물을 남기면 손해다', why: '남겨도 배는 충분히 부를 수 있어요.' }, { id: 'r4', text: '바쁠 때는 굶는 것이 낫다', why: '끼니를 거르면 오히려 집중이 흐트러져요.' }];
    // 가상 인물 은우의 일주일 간식 장보기 — 값·표시는 가상
    const WEEK = [
      { id: 'water', text: '생수 3병', price: 1500 }, { id: 'drink1', text: '음료 가 1병(당류 27g)', price: 1500 },
      { id: 'drink2', text: '음료 가 2병(당류 54g)', price: 3000 }, { id: 'chip1', text: '과자 작은 봉지(나트륨 200mg)', price: 1200 },
      { id: 'chip2', text: '과자 큰 봉지(나트륨 600mg)', price: 2500 }, { id: 'milk', text: '우유 2팩', price: 2400 },
      { id: 'corn', text: '찐 옥수수 2개', price: 2000 }, { id: 'banana', text: '바나나 한 송이', price: 3000 },
    ];
    const RAMEN = [{ id: 'r1', text: '물 끓이기' }, { id: 'r2', text: '양파·버섯 같은 채소 넣기' }, { id: 'r3', text: '면 넣기' }, { id: 'r4', text: '스프는 반만 넣기' }, { id: 'r5', text: '국물은 남기고 먹기' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.serving-trap', {
        title: '"1회 섭취량"의 함정', method: '1회 섭취량의 함정', tool: 'story', minutes: 6,
        levels: { easy: '교사가 "숫자 옆 작은 글씨"를 단서로 주고, 오해가 생긴 장면 하나를 고른다.', base: '오해가 생긴 장면 두 곳을 고르고 각각 무엇을 놓쳤는지 말한다.', challenge: '두 곳을 고른 뒤, 포장 표시를 어떻게 바꾸면 오해가 줄지 짝과 제안한다.' },
        intro: {
          teacher: '"민재는 \'당류 5g\'만 봤어요. 한 봉지를 다 먹은 민재가 먹은 당류는 정말 5g일까요?" 가상 인물 민재의 네 장면을 넘겨 보이고, 시연 단추로 \'1회 섭취량 글씨를 지나친 장면\'과 \'5g밖에 안 먹었다고 생각한 장면\'이 바구니에 담기는 모습을 보인다. "한 봉지가 1회분"이라는 말이 나오면 뒷면의 \'1회 섭취량 30g, 총 내용량 90g\'을 함께 읽고 세 번이면 몇 g인지 되묻는다. 값은 가상 표시다.',
          student: '가상 인물 민재의 네 장면에서 오해가 생긴 장면을 골라요. 민재가 표시의 어느 글씨를 놓쳤는지 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '오해가 생긴 장면', title: '민재의 과자 한 봉지', cards: [
            { id: 'c1', text: '앞면 \'당류 5g\' 글씨를 본다', motif: 'star' }, { id: 'c2', text: '\'1회 섭취량 30g\' 글씨를 지나친다', motif: 'cloud' },
            { id: 'c3', text: '90g 한 봉지를 다 먹는다', motif: 'leaf' }, { id: 'c4', text: '"5g밖에 안 먹었네" 하고 생각한다', motif: 'house' }], shuffle: false }, sequence: [{ pick: ['c2', 'c4'] }] },
          art: { draw: 'a paper-cut teenager on a sofa holding an empty snack bag, a magnifying glass over the tiny serving-size line on the label', banner: '한 봉지 = 몇 회분?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '민재는 가상 인물이고 표시 값은 가상이다. 학생이 무엇을 얼마나 먹는지 묻지 않는다.',
      }),
      M('intro.guess-rank', {
        title: '음료 당류 예상 순위', method: '예상 순위 매기기', tool: 'wordcards', minutes: 6,
        levels: { easy: '음료 세 종 카드만 예상 순서로 놓는다.', base: '음료 네 종 카드를 예상 순서로 놓고 그렇게 놓은 근거(맛·색·광고 문구)를 말한다.', challenge: '뒤 활동에서 가상 표시로 확인한 뒤, 예상이 틀렸다면 그 까닭을 활동지에 쓴다.' },
        intro: {
          teacher: '"맛과 색만 보고 당류가 많은 차례를 맞힐 수 있을까요?" 가상 음료 네 종 카드를 띄우고, 시연 단추로 예상 순서가 놓이는 모습을 보인다. 학생마다 예상 차례와 그 근거(\'달다\', \'과일 그림\', \'제로라는 글자\')를 말하게 한 뒤, 정답은 뒤 활동의 가상 표시로 확인한다고 밝힌다. "과일 그림이 있으면 당류가 적다"는 말에는 "그림과 뒷면 숫자 가운데 무엇을 믿을까요?"라고 되묻는다. 어떤 음료가 나쁘다고 말하지 않는다.',
          student: '가상 음료 네 종 카드를 당류가 많을 것 같은 차례로 놓고, 그렇게 생각한 근거를 말해요. 뒤에서 가상 표시로 확인해요.',
          demo: { tool: 'wordcards', options: { mode: 'order', speak: false, slots: 4, cards: [
            { id: 'd1', text: '음료 가(과일 그림)' }, { id: 'd2', text: '음료 나(스포츠 음료)' }, { id: 'd3', text: '음료 다(가당 우유)' }, { id: 'd4', text: '음료 라(제로 표시)' }] },
            sequence: [{ order: ['d1', 'd2', 'd3', 'd4'] }] },
          art: { draw: 'four paper-cut drink bottles lined up on a shelf, each with a blank paper tag, students placing number cards above them', banner: '맛으로 맞힐 수 있을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '예상 순서에는 정답이 없다(시연은 한 가지 예상일 뿐). 확인은 bar-compare 활동의 가상 표시로 한다. 음료를 좋다·나쁘다로 나누지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.bar-compare', {
        title: '가상 표시로 막대그래프', method: '가상 표시로 막대그래프', tool: 'chart', minutes: 15,
        levels: { easy: '당류 한 성분의 막대만 그리고 읽는다(값이 보인다).', base: '당류와 나트륨 두 성분을 같은 기준(한 병·한 봉지)으로 그리고 비교 문장을 쓴다.', challenge: '마지막 문항에서 \'1회 섭취량\' 기준 표시만 견주면 생기는 착시를 고른다.' },
        activity: {
          title: '가상 표시로 막대그래프', tool: 'chart',
          teacher: '"도입에서 예상한 순서와 막대가 같나요?" 막대를 다 그린 뒤 예상과 다른 음료를 짚게 하고, 그래프 제목의 \'한 병 기준\'을 소리 내어 읽게 한다. "작은 숫자가 적힌 음료가 적게 든 음료"라는 학생에게 "한 사람이 한 병을 다 마신다면 무엇과 견줘야 할까요?"라고 되묻는다. 값은 수업용 가상 표시이고, 기준을 맞추는 연습이 목표라는 점을 밝힌다.',
          task: '가상 포장 표시의 당류·나트륨을 같은 기준(한 병·한 봉지)으로 맞춰 막대그래프를 그리고, 비교하는 문장을 써요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 음료 네 종의 한 병 기준 당류를 막대그래프로 그리세요(가상 표시).', toolOptions: Object.assign({ mode: 'build', data: SUGAR, showTable: true }, SUGAR_O), target: { build: true } },
            IT({ prompt: '표를 보고 간식 네 종의 한 봉지 기준 나트륨을 막대그래프로 그리세요(가상 표시).', toolOptions: Object.assign({ mode: 'build', data: SALT, showTable: true }, SALT_O), target: { build: true } },
              { prompt: '한 병 기준 당류가 가장 많은 음료를 고르세요.', toolOptions: Object.assign({ mode: 'read', data: SUGAR, question: '당류가 가장 많은 음료는?', choices: SUGAR.map((d) => d[0]) }, SUGAR_O), target: { pick: 0 } }),
            IT({ prompt: '한 병 기준으로 음료 가는 음료 다보다 당류가 몇 g 많은지 읽어 쓰세요.', toolOptions: Object.assign({ mode: 'read', data: SUGAR, question: '몇 g 많은가요?' }, SUGAR_O), target: { value: 18 } },
              null,
              { prompt: '음료 가의 포장 앞면에는 \'1회 섭취량(⅓병)당 당류 10g\'만 크게 적혀 있어요. 이 숫자만 음료 나(18g, 한 병)와 견주면 생기는 착시를 고르세요.', toolOptions: { question: '1회 섭취량 숫자만 견주면?', choices: ['음료 가가 당류가 더 적어 보인다', '두 음료가 똑같아 보인다', '착시가 생기지 않는다'] }, target: { pick: 0 } },
              { conclude: '영양 표시는 \'한 병·한 봉지\' 같은 같은 기준으로 맞춰 견줘요. 기준이 다르면 숫자가 작은 쪽이 적게 든 것처럼 보이는 착시가 생겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 표시 그래프를 보고 "음료 가는 음료 다보다 …" 로 시작하는 비교 문장을 써요(기준을 함께 써요).' }] },
        notes: DATA_NOTE + ' 실제 음료의 당류·나트륨이 아니다.',
      }),
      M('activity.drink-dilemma', {
        title: '운동 뒤 음료 갈림길', method: '운동 뒤 음료 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 가 보고 결과 장면을 본다(근거 카드 없음).', base: '갈림길 3번을 끝까지 가고 근거 카드를 고른다.', challenge: '끼니 근거 카드까지 고르고, 마지막 문항에서 다른 길도 끝까지 가 본 뒤 견준다.' },
        activity: {
          title: '운동 뒤 음료 갈림길', tool: 'dilemma',
          teacher: '"목이 마를 때 먼저 마실 것과, 단 음료를 마실 때 따질 것은 무엇일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 그날 저녁 준서의 모습이 길마다 어떻게 다른지 말하게 한다. "운동했으니 얼마든지 마셔도 된다"는 학생에게 "음료로 배가 부르면 저녁 끼니는 어떻게 될까요?"라고 되묻는다. 음료를 금지하는 것이 아니라 표시를 보고 양을 정하는 것이라는 점을 짚는다.',
          task: '축구를 마친 가상 인물 준서·학원 가기 전 수아가 되어 길을 고르고, 그날 하루에 생기는 결과를 따라가며 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '축구 뒤 목이 말라요. 두 번 골라 결과를 보세요.', base: '축구 뒤 목이 말라요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '축구 뒤 목이 말라요. 세 번 골라 끝까지 가고, 끼니 근거까지 고르세요.' },
              '축구 뒤 편의점 앞', DRINK, [['water', 'label', 'dinner'], ['share']], DRINK_R, ['r1', 'r2'], MEAL_MORE),
            DIL({ easy: '학원 전 20분, 편의점에서 저녁을 골라요. 두 번 골라 결과를 보세요.', base: '학원 전 20분, 편의점에서 저녁을 골라요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '학원 전 20분, 편의점에서 저녁을 골라요. 세 번 골라 끝까지 가고, 끼니 근거까지 고르세요.' },
              '학원 전 편의점', ACAD, [['read', 'leave', 'plan']], ACAD_R, ['r1', 'r2'], MEAL_MORE),
            IT({ prompt: '축구 뒤 장면 처음으로 돌아가, 서로 다른 끝 장면 두 개를 끝까지 가 보고 저녁의 모습을 견주세요.', toolOptions: { title: '두 길 견주기', scene: cut(DRINK, 3), reasons: [], compare: true }, target: { explore: 2 } },
              { prompt: '축구 뒤 장면에서 두 번씩 골라, 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(DRINK, 2) } },
              null, { conclude: '목마를 땐 물로 먼저 축이고, 단 음료와 국물은 표시를 보고 양을 정하고, 끼니는 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '축구 뒤 목이 마를 때 가장 먼저 할 일로 알맞은 것은?', options: ['1+1 음료 두 병을 다 마신다', '물로 먼저 목을 축인다', '저녁까지 참는다'], answer: '물로 먼저 목을 축인다' }] },
        notes: '준서·수아는 가상 인물이다. 학생이 실제로 무엇을 마시고 먹는지 묻지 않는다.',
      }),
      M('activity.swap-budget', {
        title: '일주일 간식 바꿔 사기', method: '바꿔 사기 장보기', tool: 'economy', minutes: 15,
        levels: { easy: '물건 6개 가운데 예산 안에서 세 품목을 고른다.', base: '물건 8개 가운데 은우의 약속(음료 한 병만·작은 봉지)을 지켜 다섯 품목을 고르고, 바꾼 품목과 까닭을 적는다.', challenge: '마지막 문항에서 같은 예산으로 처음 목록을 바꿔 사는 조합을 찾는다.' },
        activity: {
          title: '일주일 간식 바꿔 사기', tool: 'economy',
          teacher: '"은우는 \'음료는 한 병만, 과자는 작은 봉지로\'라고 스스로 약속했어요. 같은 돈으로 무엇을 바꿔 살 수 있을까요?" 물건을 고를 때마다 괄호 속 가상 표시를 읽게 하고, 바꾼 품목을 활동지에 적게 한다. "과자는 다 빼야 한다"는 학생에게 "은우의 약속은 빼는 것일까요, 양을 정하는 것일까요?"라고 되묻는다. 값·표시는 가상이며 학생의 용돈은 묻지 않는다.',
          task: '가상 인물 은우의 일주일 간식 장보기에서 예산과 약속을 지키며 물건을 고르고, 바꾼 품목과 까닭을 적어요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(BUD('은우의 약속: 음료는 한 병만, 과자는 작은 봉지로. 10,000원 안에서 생수를 넣어 딱 다섯 품목을 고르세요.', WEEK, 10000, { must: ['water'], not: ['drink2', 'chip2'], count: 5 }, '은우의 일주일 간식(가상)'),
              BUD('10,000원 안에서 생수를 넣어 딱 세 품목을 고르세요. 음료는 한 병만이에요.', pickCards(WEEK, ['water', 'drink1', 'drink2', 'chip1', 'milk', 'corn']), 10000, { must: ['water'], not: ['drink2'], count: 3 }, '은우의 일주일 간식(가상)')),
            IT(BUD('은우가 처음에 음료 가 2병과 큰 과자를 골랐어요. 8,000원 안에서 음료 가 1병과 작은 과자로 바꿔 넣어 고르세요.', WEEK, 8000, { must: ['drink1', 'chip1'], not: ['drink2', 'chip2'], min: 5000 }, '바꿔 사기(가상)')),
            IT(BUD('6,000원 안에서 우유를 꼭 넣어 딱 세 품목을 고르세요. 음료 가 2병은 빼요.', WEEK, 6000, { must: ['milk'], not: ['drink2'], count: 3 }, '우유 넣은 세 품목(가상)'),
              null,
              BUD('처음 목록(음료 가 2병·큰 과자 = 5,500원)과 같은 5,500원 안에서 음료 가 1병을 넣고, 큰 봉지 대신 다른 것을 더해 딱 세 품목을 고르세요.', WEEK, 5500, { must: ['drink1'], not: ['drink2', 'chip2'], count: 3 }, '같은 돈으로 바꿔 사기(가상)'),
              { conclude: '간식을 다 빼지 않아도 돼요. 표시를 보고 양을 정하고, 같은 돈으로 바꿔 살 것을 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '은우가 바꾼 품목과 바꾼 까닭(표시)을 써요.', columns: ['처음 고른 것', '바꾼 것', '까닭'], cells: [['음료 가 2병', '', ''], ['과자 큰 봉지', '', '']], answer: '음료 가 1병·당류가 절반, 과자 작은 봉지·나트륨이 적음' }] },
        notes: '은우의 약속과 값·표시는 가상이다. 학생의 용돈·간식 습관을 묻거나 채점하지 않는다. ' + DATA_NOTE,
      }),
      M('activity.ramen-steps', {
        title: '국물 덜 먹는 조리 차례', method: '국물 덜 먹는 조리 차례', tool: 'kitchen', minutes: 15,
        levels: { easy: '조리 카드 3장(물 끓이기·면 넣기·국물 남기기)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '채소 넣기·스프 반만 넣기를 더한 카드 5장을 차례로 놓고, 나트륨을 덜 먹는 행동을 고른다.', challenge: '마지막 문항에서 즉석 떡볶이에 같은 생각을 적용해 차례를 놓는다.' },
        activity: {
          title: '국물 덜 먹는 조리 차례', tool: 'kitchen',
          teacher: '"라면을 안 먹는 것 말고, 라면을 먹으면서 나트륨을 덜 먹는 방법은 무엇일까요?" 카드를 놓은 뒤 채소를 넣는 때와 스프 양을 정하는 때를 짚게 한다. "라면은 무조건 몸에 나쁘다"는 학생에게 "같은 라면이라도 국물을 얼마나 먹는지에 따라 무엇이 달라질까요?"라고 되묻는다. 음식을 낙인찍지 않고 먹는 방법을 고르는 활동이라는 점을 밝힌다.',
          task: '라면 조리 차례에 채소 넣기·스프 반만·국물 남기기 단계를 알맞게 놓고, 다른 간편식에도 적용해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('채소를 더하고 국물을 덜 먹는 라면 조리 차례대로 카드를 놓으세요.', RAMEN),
              OB('라면 조리 차례대로 카드 3장을 놓으세요.', pickCards(RAMEN, ['r1', 'r3', 'r5']))),
            IT(PB('같은 라면을 먹으면서 나트륨을 덜 먹는 행동만 골라 담으세요.', '나트륨을 덜 먹는 행동', [
              { id: 'p1', text: '스프를 반만 넣는다', ok: true }, { id: 'p2', text: '국물은 남긴다', ok: true }, { id: 'p3', text: '채소를 더해 양을 채운다', ok: true },
              { id: 'p4', text: '국물에 밥을 말아 다 먹는다' }, { id: 'p5', text: '스프를 두 개 넣는다' }])),
            IT(OB('컵라면을 먹는 차례대로 카드를 놓으세요.', [{ id: 'c1', text: '뚜껑을 반쯤 열기' }, { id: 'c2', text: '스프는 반만 넣기' }, { id: 'c3', text: '뜨거운 물 붓고 기다리기' }, { id: 'c4', text: '국물은 남기기' }]),
              null,
              OB('즉석 떡볶이를 만드는 차례대로 카드를 놓으세요.', [{ id: 't1', text: '떡을 물에 헹구기' }, { id: 't2', text: '양배추·어묵 더하기' }, { id: 't3', text: '소스는 반만 넣기' }, { id: 't4', text: '끓여 졸이기' }, { id: 't5', text: '남은 소스는 남기기' }]),
              { conclude: '스프·소스는 덜 넣고, 채소를 더하고, 국물은 남기면 같은 간편식도 나트륨을 덜 먹을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '라면을 먹을 때 나트륨을 덜 먹는 방법 두 가지를 써요.' }],
          easy: [{ type: 'choice', prompt: '라면 국물을 덜 먹는 방법은?', options: ['국물을 남긴다', '국물에 밥을 만다'], answer: '국물을 남긴다' }] },
      }),

      // ---- 정리 ----
      M('wrap.claim-write', {
        title: '근거 있는 주장 쓰기', method: '근거 있는 주장 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 채워 두 문장으로 쓰고 기준 2개를 점검한다.', base: '세 문장으로 쓰고 기준 3개(표시 근거·같은 기준 비교·가상 자료 표시)를 점검한다.', challenge: '반론("맛있으면 됐지")과 재반론을 넣어 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'간식은 표시를 보고 고른다\'를 주장할 때, 오늘 그래프에서 어떤 근거를 가져올 수 있을까요?" 근거에 \'가상 자료\'라는 말을 꼭 붙이게 하고, 견줄 때 같은 기준을 썼는지 스스로 점검하게 한다. "숫자는 어려워서 아무도 안 본다"는 반론이 나오면 "한 봉지에 몇 번 먹는 양이 들었는지만 봐도 무엇이 달라질까요?"라고 되묻는다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '"간식은 표시를 보고 고른다"는 주장을 근거와 함께 세 문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 4, title: '근거 있는 주장' },
              prompt: '주장 글을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['표시에서 가져온 근거를 썼다', '같은 기준(한 봉지·한 병)으로 견줬다', '자료가 가상 자료임을 밝혔다'], mustInclude: [['왜냐하면', '때문에', '근거']] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 주장을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, minChars: 25, starter: '간식은 표시를 보고 고른다. 왜냐하면 ___ 때문이다.' }, target: { selfCheck: ['표시에서 가져온 근거를 썼다', '자료가 가상 자료임을 밝혔다'], mustInclude: [['왜냐하면', '때문에']] } },
            { prompt: '반론과 재반론을 넣어 주장 글을 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5, maxChars: 300 }, target: { selfCheck: ['표시에서 가져온 근거를 썼다', '같은 기준(한 봉지·한 병)으로 견줬다', '자료가 가상 자료임을 밝혔다', '반론과 재반론을 넣었다'], mustInclude: [['왜냐하면', '때문에', '근거']] } }),
            { type: 'choice', prompt: '"한 봉지와 1회 섭취량 표시는 같은 양이다"는 생각을 바로잡는 말로 알맞은 것은?', options: ['맞다, 봉지마다 1회분이다', '한 봉지에 1회 섭취량이 여러 번 들어 있을 수 있다', '1회 섭취량은 아무 뜻이 없다'], answer: 1, difficulty: 0.2, explain: '총 내용량이 1회 섭취량의 몇 배인지 봐야 한 봉지에 든 양을 알 수 있어요.' },
          ],
        },
        worksheet: {
          title: '표시를 보고 고른다',
          items: [
            { type: 'short', prompt: '"간식은 표시를 보고 고른다"는 주장을 근거와 함께 세 문장으로 써요.' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['표시 근거가 있다', '같은 기준으로 견줬다', '가상 자료임을 밝혔다'] },
          ],
          easy: { note: '"간식은 표시를 보고 고른다. 왜냐하면 ___" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '간식은 표시를 보고 고른다. 왜냐하면 ___ 때문이다.', answer: '(예) 한 봉지에 1회 섭취량이 여러 번 들어 있을 수 있기' }] },
        },
      }),
      M('wrap.label-chant', {
        title: '"앞면 말고 뒷면" 구호 리듬', method: '표시 읽기 구호', tool: 'keyboard', minutes: 7,
        levels: { easy: '구호 한 줄("앞면 말고 뒷면")을 4박 마디 하나 리듬으로 짓는다(박이 보인다).', base: '구호 두 줄("앞면 말고 뒷면 / 한 봉지 기준")을 4박 마디 둘에 맞춰 짓는다.', challenge: '모둠 구호 한 줄을 새로 지어 더하고 4박 마디 셋에 맞춰 짓는다.' },
        wrap: {
          teacher: '"\'앞면 말고 뒷면, 한 봉지 기준\' — 이 구호를 네 박에 어떻게 나눠 칠까요?" 모둠마다 리듬 블록으로 박을 채운 뒤 소리 내어 맞춰 친다. 구호의 \'한 봉지 기준\'에서 1회 섭취량 오해를 한 번 더 바로잡는다. "구호는 장난"이라는 말에는 편의점 진열대 앞에서 떠올릴 한 줄이 있으면 무엇이 달라질지 되묻는다.',
          exitTicket: [
            IT(Object.assign(X('keyboard', BEAT('구호 "앞면 말고 뒷면 / 한 봉지 기준"을 4박 마디 두 개 리듬으로 지어요.', { measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '모둠과 함께 소리 내어 쳐 보았다'] })), { difficulty: 0.2 }),
              { prompt: '구호 한 줄 "앞면 말고 뒷면"을 4박 마디 하나 리듬으로 지어요.', toolOptions: { measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다'] } },
              { prompt: '모둠 구호 한 줄을 더해 4박 마디 세 개 리듬으로 지어요.', toolOptions: { measures: 3, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '모둠 구호 한 줄을 새로 지었다', '모둠과 함께 소리 내어 쳐 보았다'] } }),
            { type: 'choice', prompt: '표시를 견줄 때 먼저 맞춰야 할 것은?', options: ['포장 색깔', '같은 기준(한 봉지·한 병)', '광고 모델'], answer: 1, difficulty: 0.15, explain: '기준이 같아야 숫자를 바르게 견줄 수 있어요.' },
            { type: 'short', prompt: '우리 모둠이 새로 지은 표시 읽기 구호 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '표시 읽기 구호',
          items: [
            { type: 'blank', prompt: '구호를 완성해요.', text: '앞면 말고 ___, 한 봉지 ___', answer: '뒷면, 기준' },
            { type: 'short', prompt: '우리 모둠 구호를 한 줄로 써요.' },
          ],
        },
        notes: '교구는 구호 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 구호 글은 문제 글·활동지에 적었다.',
      }),
    );
  }

  // ==== 8학년 · 다이어트 오해와 건강한 몸 이미지 (food.m.diet-myth) ====
  {
    const M = MK('diet-myth', [8]);
    // 저녁 굶기 권유 갈림길(깊이 3) — 가상 인물 다은·예린. 몸을 평가하는 말은 선택지에 넣지 않는다.
    const SKIP = { text: '수학여행을 2주 앞두고 친구 예린이 다은에게 "사진 잘 나오게 우리 일주일 동안 저녁 굶자"고 한다.', ask: '다은은 어떻게 할까?', motif: 'house', choices: [
      { id: 'join', text: '"좋아, 같이 하자"고 한다', result: '이틀째 학원에서 어지럽고 짜증이 난다.', impact: [{ who: '다은', text: '기운이 빠진다', tone: -1 }], why: '끼니를 굶으면 몸에 부담이 되고 다음 끼니에 몰아 먹기 쉬워요.', end: '함께 굶다가 기운이 빠졌어요.',
        next: { text: '사흘째, 예린이 "배고파도 참아, 점심도 줄이자"고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'more', text: '점심도 반만 먹는다', result: '체육 시간에 숨이 차고 힘이 없다.', impact: [{ who: '다은', text: '몸이 더 힘들다', tone: -1 }], why: '성장기에는 끼니를 거르지 않고 고루 먹어야 해요.' },
          { id: 'stopj', text: '"몸이 힘들어, 그만하자"고 말하고 저녁을 먹는다', result: '다은의 기운이 돌아온다.', impact: [{ who: '다은', text: '몸을 지킨다', tone: 1 }] }] } },
      { id: 'decline', text: '"굶는 건 안 할래. 대신 저녁 먹고 같이 걷자"고 한다', result: '예린이 머뭇거린다.', impact: [{ who: '다은', text: '몸을 지킨다', tone: 1 }], end: '굶기 대신 함께 걷자고 했어요.',
        next: { text: '예린이 "너는 내 마음 몰라"라며 서운해한다.', ask: '어떻게 할까?', choices: [
          { id: 'snap', text: '"그럼 너 혼자 해"라고 쏘아붙인다', result: '예린이 말없이 돌아선다.', impact: [{ who: '예린', text: '혼자 남는다', tone: -1 }], why: '거절하면서도 친구의 마음은 들어 줄 수 있어요.' },
          { id: 'listen', text: '예린이 왜 그런지 차분히 들어 준다', result: '예린이 사진에 찍히는 게 걱정된다고 털어놓는다.', impact: [{ who: '예린', text: '마음을 털어놓는다', tone: 1 }], end: '예린의 이야기를 들어 주었어요.',
            next: { text: '예린이 요즘 거의 먹지 않는다며 "아무한테도 말하지 마"라고 한다.', choices: [
              { id: 'nurse', text: '"혼자 힘들지 않게 보건 선생님께 같이 가 보자"고 한다', result: '예린이 망설이다 같이 가겠다고 한다.', impact: [{ who: '예린', text: '도움을 받을 길이 열린다', tone: 1 }] },
              { id: 'secret', text: '둘만의 비밀로 하고 넘어간다', result: '예린은 혼자 계속 굶는다.', impact: [{ who: '예린', text: '도움을 못 받는다', tone: -1 }], why: '먹기를 계속 거르는 친구는 믿을 만한 어른과 이어 주어야 해요.' }] } }] } },
      { id: 'ignore', text: '대답하지 않고 화제를 돌린다', result: '예린은 혼자 저녁을 굶기 시작한다.', impact: [{ who: '예린', text: '혼자 굶는다', tone: -1 }], why: '모른 척하면 친구가 혼자 위험한 길로 가요.', ending: '대답을 피해 예린이 혼자 굶었어요.' }] };
    const SKIP_R = [{ id: 'r1', text: '굶기는 몸에 부담을 줄 수 있다' }, { id: 'r2', text: '먹기를 계속 거르는 친구는 믿을 만한 어른과 잇는다' },
      { id: 'r3', text: '친구가 원하면 같이 굶어 주는 것이 우정이다', why: '친구를 지키는 것도 우정이에요.' }, { id: 'r4', text: '사진만 잘 나오면 된다', why: '사진보다 몸과 마음이 먼저예요.' }];
    const LISTEN_MORE = { reasons: [{ id: 'r5', text: '거절하면서도 친구의 마음을 먼저 들어 준다' }], ok: ['r5'] };
    // 원푸드 챌린지 단톡방 갈림길(깊이 3) — 가상 인물 지민
    const ONE = { text: '반 단톡방에 "7일 동안 한 가지 음식만 먹기 챌린지, 인증하면 살 쭉!"이라는 글이 올라왔다. 친구들이 하나둘 참여한다.', ask: '지민은 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'joinc', text: '바로 참여해 첫 인증 사진을 올린다', result: '사흘째 기운이 없고 체육 시간이 힘들다.', impact: [{ who: '지민', text: '기운이 빠진다', tone: -1 }], why: '한 가지 음식만 먹으면 여러 영양소를 고루 얻기 어려워요.', end: '챌린지를 하다 기운이 빠졌어요.',
        next: { text: '친구들이 "포기하면 지는 거야"라며 인증을 기다린다.', ask: '어떻게 할까?', choices: [
          { id: 'keepc', text: '끝까지 인증을 올린다', result: '점점 더 힘이 없어진다.', impact: [{ who: '지민', text: '몸이 지친다', tone: -1 }] },
          { id: 'quitc', text: '그만두고 급식을 고루 먹는다고 말한다', result: '몇몇 친구도 따라 그만둔다.', impact: [{ who: '친구들', text: '함께 멈춘다', tone: 1 }] }] } },
      { id: 'check', text: '챌린지 글의 근거가 무엇인지 먼저 찾아본다', result: '출처는 없고 \'개인차 있음\'만 작게 적혀 있다.', impact: [{ who: '지민', text: '주장을 따져 본다', tone: 1 }], end: '근거를 찾아보고 출처가 없다는 것을 알았어요.',
        next: { text: '친구가 "재미로 하는 건데 뭐 어때" 하며 글을 다른 방에도 퍼 나르자고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'sharec', text: '재미로 다른 방에도 퍼 나른다', result: '더 많은 친구가 챌린지를 시작한다.', impact: [{ who: '다른 반 친구들', text: '근거 없는 정보를 따른다', tone: -1 }], why: '근거 없는 다이어트 정보를 퍼 나르면 더 많은 사람이 따라 해요.' },
          { id: 'reply', text: '"출처가 없어. 고루 먹는 게 먼저래"라고 차분히 답한다', result: '친구 몇이 글을 다시 읽어 본다.', impact: [{ who: '친구들', text: '한 번 더 생각한다', tone: 1 }], end: '출처가 없다고 차분히 답했어요.',
            next: { text: '한 친구가 "그럼 뭘 어떻게 하는데?"라고 묻는다.', choices: [
              { id: 'plate', text: '여러 식품군을 고루 먹고 몸을 움직이자고 답한다', result: '단톡방 이야기가 함께 걷기 약속으로 바뀐다.', impact: [{ who: '친구들', text: '건강한 방법을 나눈다', tone: 1 }] },
              { id: 'product', text: '다른 다이어트 제품을 알아보자고 한다', result: '또 다른 광고 링크가 올라온다.', impact: [{ who: '친구들', text: '광고에 휩쓸린다', tone: -1 }], why: '제품을 찾기보다 고루 먹고 움직이는 것이 먼저예요.' }] } }] } },
      { id: 'leave', text: '아무 말 없이 단톡방 알림만 끈다', result: '지민은 참여하지 않지만 챌린지는 계속 퍼진다.', impact: [{ who: '친구들', text: '그대로 따라 한다', tone: 0 }], why: '나는 지켰지만, 근거를 물어 주면 친구들도 한 번 더 생각할 수 있어요.', ending: '나는 참여하지 않았지만 챌린지는 계속됐어요.' }] };
    const ONE_R = [{ id: 'r1', text: '근거와 출처가 없는 주장은 따르지 않는다' }, { id: 'r2', text: '한 가지 음식만 먹으면 고루 먹기 어렵다' },
      { id: 'r3', text: '친구들이 다 하면 효과가 있다', why: '여럿이 한다고 근거가 생기지는 않아요.' }, { id: 'r4', text: '인증 사진이 많으면 사실이다', why: '인증 사진은 근거가 아니라 광고처럼 쓰일 수 있어요.' }];
    // 가상 광고 분석 카드
    const AD_SLOTS = ['주장', '근거처럼 보이는 것', '빠진 정보', '숨은 목적'];
    const AD = [
      { id: 'a1', text: '"7일 만에 5kg!"', to: '주장' }, { id: 'a2', text: '"누구나 쉽게 성공"', to: '주장' },
      { id: 'b1', text: '"후기 2,000개"', to: '근거처럼 보이는 것' }, { id: 'b2', text: '보정한 전후 사진', to: '근거처럼 보이는 것' },
      { id: 'c1', text: '몸에 어떤 부담이 생기는지', to: '빠진 정보' }, { id: 'c2', text: '누가 어떻게 조사했는지(출처)', to: '빠진 정보' },
      { id: 'd1', text: '식단 앱 정기 결제 팔기', to: '숨은 목적' }, { id: 'd2', text: '"오늘만 할인"으로 서두르게 하기', to: '숨은 목적' },
    ];
    // 식품군 칸(kitchen 기본 칸 id)
    const FG = [{ id: '곡류', label: '곡류' }, { id: '고기', label: '고기·생선·달걀·콩류' }, { id: '채소', label: '채소·과일류' }, { id: '우유', label: '우유·유제품류' }, { id: '유지', label: '유지·당류' }];
    const PLATE = [
      { id: 'rice', text: '밥', to: '곡류' }, { id: 'egg', text: '달걀', to: '고기' }, { id: 'spin', text: '시금치', to: '채소' },
      { id: 'apple', text: '사과', to: '채소' }, { id: 'milk', text: '우유', to: '우유' }, { id: 'oil', text: '참기름', to: '유지' },
    ];
    // 가상 중학교 칸 지도 — 고민될 때 찾아갈 곳
    const SCHOOL = { grid: [6, 4], title: '가상의 우리 중학교', regions: [
      { name: '교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '보건실', cells: [[2, 0], [3, 0]] }, { name: '상담실(Wee 클래스)', cells: [[4, 0], [5, 0]] },
      { name: '복도', cells: [[2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '급식실(영양 선생님)', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] },
      { name: '교무실', cells: [[2, 2], [3, 2]] }, { name: '도서관', cells: [[4, 2], [5, 2]] }, { name: '운동장 문', cells: [[2, 3], [3, 3], [4, 3], [5, 3]] },
    ] };

    ALL.push(
      // ---- 도입 ----
      M('intro.sns-feed', {
        title: '가상 SNS 피드 네 컷', method: 'SNS 피드 장면 분석', tool: 'story', minutes: 6,
        levels: { easy: '교사가 "숫자로 약속하는 글"을 단서로 주고, 판단을 흐리는 장치 하나를 고른다.', base: '판단을 흐리는 장치 두 가지를 고르고 각각 무엇을 숨기는지 말한다.', challenge: '장치를 고른 뒤, 그 장치가 보는 사람의 어떤 마음(조급함·비교하는 마음)을 노리는지 짝에게 말한다.' },
        intro: {
          teacher: '"이 피드를 넘기다 보면 어느 순간 \'나도 해 볼까?\' 하는 마음이 들까요?" 보정 사진과 \'일주일 만에 5kg\' 광고가 이어지는 가상 피드 네 컷을 넘겨 보이고, 시연 단추로 \'보정한 사진\'과 \'숫자로 약속하는 글\' 컷이 바구니에 담기는 모습을 보인다. "사진은 진짜니까 믿어도 된다"는 말에는 컷 귀퉁이의 작은 \'보정 앱 사용\' 글씨를 함께 찾게 한다. 몸을 평가하는 말은 하지 않고, 광고가 쓰는 장치만 따진다.',
          student: '가상 SNS 피드 네 컷에서 보는 사람의 판단을 흐리는 장치를 골라요. 그 장치가 무엇을 숨기는지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '판단을 흐리는 장치', title: '가상 SNS 피드', cards: [
            { id: 'c1', text: '보정한 사진(작게 \'보정 앱\')', motif: 'star' }, { id: 'c2', text: '"일주일 만에 5kg" 큰 글씨', motif: 'cloud' },
            { id: 'c3', text: '친구가 누른 \'좋아요\' 알림', motif: 'leaf' }, { id: 'c4', text: '맨 아래 작은 \'개인차 있음\'', motif: 'house' }], shuffle: false }, sequence: [{ pick: ['c1', 'c2'] }] },
          art: { draw: 'a paper-cut smartphone screen with a scrolling feed of glossy edited photos and a giant number banner, a magnifying glass revealing tiny fine print at the bottom', banner: '이 피드, 무엇을 숨겼을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '피드·광고는 가상이다. 학생의 몸·체중·외모를 이야기하거나 비교하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.myth-sort', {
        title: '다이어트 말, 사실·오해 가르기', method: '사실·오해 가르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '문장 세 장만 \'사실·오해\' 두 칸에 나눈다.', base: '문장 다섯 장을 \'사실·오해·확인 필요\' 세 칸에 나눈다.', challenge: '\'확인 필요\' 칸의 문장을 어디서 어떻게 확인할지(출처·전문가) 짝과 말한다.' },
        intro: {
          teacher: '"\'굶으면 빨리 빠진다\'는 말, 들어 본 적 있지요? 사실일까요, 오해일까요, 아직 확인이 필요할까요?" 문장 카드를 띄우고 시연 단추로 카드가 세 칸에 나뉘는 모습을 보인다. "다들 그렇게 말하니 사실"이라는 학생에게 "많이 들은 말과 확인된 말은 같은 걸까요?"라고 되묻는다. 오늘은 다이어트 정보를 근거로 따져 본다고 밝힌다. 학생 자신의 다이어트 경험은 묻지 않는다.',
          student: '다이어트에 대한 문장 카드를 \'사실·오해·확인 필요\'로 나눠 보고, 확인이 필요한 문장은 어디서 확인할지 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', speak: false, slots: ['사실', '오해', '확인 필요'], cards: [
            { id: 'm1', text: '굶으면 건강하게 빨리 빠진다' }, { id: 'm2', text: '한 가지 음식만 먹으면 고루 먹기 어렵다' },
            { id: 'm3', text: '마른 몸이 곧 건강한 몸이다' }, { id: 'm4', text: '"이 차를 마시면 지방이 녹는다"는 광고' },
            { id: 'm5', text: '끼니를 거르면 다음에 몰아 먹기 쉽다' }] },
            sequence: [{ sort: { 사실: ['m2', 'm5'], 오해: ['m1', 'm3'], '확인 필요': ['m4'] } }] },
          art: { draw: 'paper-cut speech bubbles with diet rumors floating above three paper trays labelled with a check, a cross and a question mark', banner: '사실? 오해? 확인 필요?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.diet-dilemma', {
        title: '같이 굶자는 친구 갈림길', method: '친구의 다이어트 권유 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 가 보고 결과 장면을 본다(근거 카드 없음).', base: '갈림길 3번을 끝까지 가고 근거 카드를 고른다(보건 선생님께 잇는 길도 있다).', challenge: '친구 마음 들어 주기 근거까지 고르고, 마지막 문항에서 다른 길도 끝까지 가 본 뒤 몸·관계 결과를 견준다.' },
        activity: {
          title: '같이 굶자는 친구 갈림길', tool: 'dilemma',
          teacher: '"\'같이 굶자\'는 친구에게 거절하면서도 친구를 지킬 수 있을까요?" 학생마다 한 길을 끝까지 가 본 뒤, 다은의 몸과 예린과의 관계가 길마다 어떻게 달라지는지 말하게 한다. "친구 비밀은 무조건 지켜야 한다"는 학생에게 "친구가 계속 먹지 않는다면 그 비밀은 친구를 지켜 줄까요?"라고 되묻는다. 거절·들어 주기·보건 선생님께 같이 가기가 함께 갈 수 있다는 점을 짚는다.',
          task: '가상 인물 다은·지민이 되어 굶기·원푸드 권유에 대한 길을 고르고, 몸과 관계에 생기는 결과를 따라가며 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '예린이 같이 저녁을 굶자고 해요. 두 번 골라 결과를 보세요.', base: '예린이 같이 저녁을 굶자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '예린이 같이 저녁을 굶자고 해요. 세 번 골라 끝까지 가고, 마음 들어 주기 근거까지 고르세요.' },
              '같이 굶자는 권유', SKIP, [['decline', 'listen', 'nurse']], SKIP_R, ['r1', 'r2'], LISTEN_MORE),
            DIL({ easy: '단톡방에 원푸드 챌린지가 올라왔어요. 두 번 골라 결과를 보세요.', base: '단톡방에 원푸드 챌린지가 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '단톡방에 원푸드 챌린지가 올라왔어요. 세 번 골라 끝까지 가고, 마음 들어 주기 근거까지 살펴 고르세요.' },
              '원푸드 챌린지 단톡방', ONE, [['check', 'reply', 'plate']], ONE_R, ['r1', 'r2']),
            IT({ prompt: '굶자는 권유 장면 처음으로 돌아가, 서로 다른 끝 장면 두 개를 끝까지 가 보고 몸·관계 결과를 견주세요.', toolOptions: { title: '두 길 견주기', scene: cut(SKIP, 3), reasons: [], compare: true }, target: { explore: 2 } },
              { prompt: '굶자는 권유 장면에서 두 번씩 골라, 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(SKIP, 2) } },
              null, { conclude: '굶기·한 가지 음식 다이어트는 몸에 부담을 줄 수 있어요. 거절하고, 친구 마음을 들어 주고, 믿을 만한 어른과 이어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 요즘 거의 먹지 않는다며 비밀로 해 달라고 할 때 가장 알맞은 행동은?', options: ['비밀이니 아무에게도 말하지 않는다', '같이 굶어 준다', '보건 선생님께 같이 가 보자고 한다'], answer: '보건 선생님께 같이 가 보자고 한다' }] },
        notes: '다은·예린·지민은 가상 인물이다. 학생에게 다이어트·식사 습관·체중을 묻지 않는다. 먹기 문제로 걱정되는 학생이 보이면 수업 뒤 보건 선생님·상담 선생님과 의논한다.',
      }),
      M('activity.ad-analysis', {
        title: '가상 다이어트 광고 뜯어보기', method: '다이어트 광고 분석', tool: 'mindmap', minutes: 15,
        levels: { easy: '\'주장\'·\'숨은 목적\' 가지 두 개에 카드 4장을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '네 가지(주장·근거처럼 보이는 것·빠진 정보·숨은 목적)에 카드 8장을 잇고, 광고 문장마다 던질 질문을 짝짓는다.', challenge: '마지막 문항에서 함정 문구가 더 섞인 판에서 정직하게 고친 문구만 고르고, 광고를 활동지에 정직하게 고쳐 쓴다.' },
        activity: {
          title: '가상 다이어트 광고 뜯어보기', tool: 'mindmap',
          teacher: '"\'후기 2,000개\'는 근거일까요, 근거처럼 보이는 것일까요?" 가상 식단 앱 광고를 가운데 두고 카드를 가지에 이을 때마다 그 카드가 광고에서 무슨 일을 하는지 말하게 한다. "전문가가 추천했으니 믿어도 된다"는 학생에게 "그 사람이 누구인지, 광고비를 받았는지 광고에 적혀 있나요?"라고 되묻는다. 광고가 노리는 것은 몸이 아니라 결제라는 점을 짚고, 어떤 몸이 좋다고 말하지 않는다.',
          task: '가상 식단 앱 광고를 \'주장·근거처럼 보이는 것·빠진 정보·숨은 목적\' 가지로 나누고, 광고에 던질 질문을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('가상 식단 앱 광고 카드를 네 가지에 나누세요.', AD_SLOTS, AD, { topic: '가상 광고: 7일 식단 앱' }),
              SB('가상 광고 카드 4장을 \'주장\'·\'숨은 목적\' 두 가지에 나누세요.', ['주장', '숨은 목적'], pickCards(AD, ['a1', 'a2', 'd1', 'd2']), { topic: '가상 광고: 7일 식단 앱' })),
            IT(MB('광고 문장마다 던질 질문을 이어 보세요.', [['"7일 만에 5kg!"', '누구를 어떻게 쟀고 그 뒤엔 어땠나?'], ['"전문가 추천"', '그 사람은 누구이고 광고비를 받았나?'], ['"후기 2,000개"', '광고로 만든 후기는 아닌가?']], ['사진 속 사람이 예쁜가?'], { topic: '광고에 던질 질문' }),
              MB('광고 문장 두 개에 던질 질문을 이어 보세요.', [['"7일 만에 5kg!"', '누구를 어떻게 쟀고 그 뒤엔 어땠나?'], ['"후기 2,000개"', '광고로 만든 후기는 아닌가?']], [], { topic: '광고에 던질 질문' })),
            IT(PB('광고를 정직하게 고친 문구만 골라 담으세요.', '정직하게 고친 문구', [
              { id: 'p1', text: '결과는 사람마다 달라요', ok: true }, { id: 'p2', text: '정기 결제 상품이에요', ok: true },
              { id: 'p3', text: '일주일이면 누구나 성공!' }, { id: 'p4', text: '오늘 안 사면 늦어요' }], { topic: '정직한 광고' }),
              null,
              PB('함정 문구가 더 섞였어요. 광고를 정직하게 고친 문구만 골라 담으세요.', '정직하게 고친 문구', [
                { id: 'p1', text: '결과는 사람마다 달라요', ok: true }, { id: 'p2', text: '정기 결제 상품이에요', ok: true }, { id: 'p5', text: '후기는 광고비를 받고 쓴 것이에요', ok: true },
                { id: 'p3', text: '일주일이면 누구나 성공!' }, { id: 'p4', text: '오늘 안 사면 늦어요' }, { id: 'p6', text: '전문가가 보증해요' }], { topic: '정직한 광고' }),
              { conclude: '다이어트 광고는 큰 숫자와 후기로 주장하지만, 몸에 생길 부담과 출처는 빠져 있기 쉬워요. 숨은 목적은 대개 판매예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 광고 "7일 만에 5kg!"을 정직한 광고 문구로 고쳐 써요.' }] },
        notes: '광고는 가상이다. 실제 상품·앱 이름을 쓰지 않는다. 다이어트·건강기능식품을 권하는 말로 흐르지 않게 한다.',
      }),
      M('activity.energy-day', {
        title: '끼니를 지키는 움직이는 하루', method: '움직이는 하루 설계', tool: 'timer', minutes: 15,
        levels: { easy: '일과 카드 3장을 차례로 놓고 걷기 구간 하나를 타이머에 맞춘다.', base: '일과 카드 5장(끼니 세 번 포함)을 차례로 놓고, 걷기 구간을 3번으로 맞춘 뒤 점검 칸을 표시한다.', challenge: '마지막 문항에서 시험 기간 일과로 바꾸어 카드를 다시 놓는다.' },
        activity: {
          title: '끼니를 지키는 움직이는 하루', tool: 'timer',
          teacher: '"굶는 대신 할 수 있는 것은 무엇일까요?" 가상 인물 다은의 하루 카드를 놓으며 끼니 세 번이 다 들어갔는지 먼저 짚게 하고, 방과 후 걷기 구간을 타이머로 맞추게 한다. "운동을 많이 하면 밥은 안 먹어도 된다"는 학생에게 "움직일 힘은 어디에서 올까요?"라고 되묻는다. 걷기 시간은 우리 반이 정한 연습 약속이며, 학생의 실제 하루나 운동량은 묻지 않는다.',
          task: '가상 인물 다은의 하루에 끼니 세 번과 가벼운 걷기 구간을 넣어 차례를 정하고, 타이머와 점검 칸으로 일과를 확인해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '다은의 하루 카드를 차례대로 놓으세요. 끼니 세 번이 모두 들어가요.', toolOptions: { title: '다은의 하루(가상)', cards: ['저녁 먹기', '아침 먹기', '방과 후 걷기', '점심 급식', '등교하기'] }, target: { order: ['아침 먹기', '등교하기', '점심 급식', '방과 후 걷기', '저녁 먹기'] } },
              { prompt: '다은의 하루 카드 3장을 차례대로 놓으세요.', toolOptions: { cards: ['저녁 먹기', '아침 먹기', '점심 급식'] }, target: { order: ['아침 먹기', '점심 급식', '저녁 먹기'] } }),
            IT({ prompt: '우리 반 약속: 방과 후 걷기 10분, 쉬기 2분을 3번. 타이머를 맞추세요.', toolOptions: { title: '방과 후 걷기(우리 반 약속)', timeUnit: 'min', labels: ['걷기', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { work: 10, rest: 2, rounds: 3 } } },
              { prompt: '우리 반 약속: 걷기 10분을 1번. 타이머를 맞추세요.', target: { plan: { work: 10, rounds: 1 } } }),
            IT({ prompt: '다은의 하루를 점검 칸으로 확인하세요.', toolOptions: { title: '하루 점검', safety: ['아침·점심·저녁을 모두 넣었다', '걷기 전후 물 마시기를 넣었다', '걷기 사이에 쉬는 구간을 넣었다', '끼니 대신 운동을 넣지 않았다'] }, target: { safety: true } },
              null,
              { prompt: '시험 기간이에요. 다은의 시험 기간 하루 카드를 차례대로 놓으세요.', toolOptions: { title: '다은의 시험 기간 하루(가상)', cards: ['저녁 먹고 복습', '아침 먹기', '쉬는 시간 스트레칭', '점심 급식', '시험 보기'], safety: [] }, target: { order: ['아침 먹기', '시험 보기', '쉬는 시간 스트레칭', '점심 급식', '저녁 먹고 복습'] } },
              { conclude: '몸을 위한 하루는 끼니를 거르지 않고, 가벼운 움직임을 틈틈이 넣는 하루예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"굶기 대신 ___" 로 시작하는 하루 습관 한 가지를 써요.' }] },
        notes: '걷기 10분·쉬기 2분은 우리 반 연습 약속 값이다(근거 수치 아님). 다은은 가상 인물이다. 학생의 운동량·식사를 묻지 않는다.',
      }),
      M('activity.balanced-plate', {
        title: '몸을 위한 한 끼 차리기', method: '몸을 위한 한 끼', tool: 'kitchen', minutes: 15,
        levels: { easy: '음식 카드 3장을 식품군 세 칸(곡류·고기·채소)에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '음식 카드 6장을 다섯 식품군 칸에 나누어 한 끼를 차리고, 급식 반찬과 식품군을 잇는다.', challenge: '마지막 문항에서 간식까지 넣은 하루 음식 카드를 다섯 식품군에 나눈다.' },
        activity: {
          title: '몸을 위한 한 끼 차리기', tool: 'kitchen',
          teacher: '"굶는 대신 한 끼를 차린다면 식판에 무엇이 있어야 할까요?" 음식 카드를 식품군 칸에 넣을 때마다 그 음식이 어느 식품군인지 까닭을 말하게 한다. "기름은 무조건 빼야 한다"는 학생에게 "다섯 식품군에 왜 유지·당류 칸도 있을까요?"라고 되묻는다. 어느 음식이 좋다 나쁘다가 아니라 여러 식품군을 고루 담는 것이 목표라는 점을 짚는다.',
          task: '음식 카드를 다섯 식품군 칸에 나누어 여러 식품군이 고루 든 한 끼를 차려요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('음식 카드를 다섯 식품군 칸에 나누어 한 끼를 차리세요.', FG, PLATE),
              SB('음식 카드 3장을 식품군 세 칸에 나누세요.', FG.slice(0, 3), pickCards(PLATE, ['rice', 'egg', 'spin']))),
            IT(MB('급식 반찬과 식품군을 이어 보세요.', [['곡류', '잡곡밥'], ['고기·생선·달걀·콩류', '고등어구이'], ['채소·과일류', '콩나물무침'], ['우유·유제품류', '요구르트']], ['얼음물'])),
            IT(SB('저녁 한 끼 음식 카드를 식품군 칸에 나누세요.', FG.slice(0, 4), [
              { id: 'n1', text: '국수', to: '곡류' }, { id: 'n2', text: '닭고기', to: '고기' }, { id: 'n3', text: '오이', to: '채소' }, { id: 'n4', text: '치즈', to: '우유' }]),
              null,
              SB('간식까지 넣은 하루 음식 카드를 다섯 식품군 칸에 나누세요.', FG, [
                { id: 'd1', text: '떡', to: '곡류' }, { id: 'd2', text: '삶은 달걀', to: '고기' }, { id: 'd3', text: '바나나', to: '채소' },
                { id: 'd4', text: '우유', to: '우유' }, { id: 'd5', text: '버터', to: '유지' }, { id: 'd6', text: '두부', to: '고기' }]),
              { conclude: '굶기 대신 다섯 식품군을 고루 담은 끼니가 몸을 지켜요. 간식도 식품군을 생각하며 고를 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '한 끼 식판에 식품군마다 음식을 하나씩 써요.', columns: ['식품군', '음식'], cells: [['곡류', ''], ['고기·생선·달걀·콩류', ''], ['채소·과일류', ''], ['우유·유제품류', '']], answer: '(예) 밥, 달걀, 시금치, 우유' }],
          easy: [{ type: 'choice', prompt: '밥은 어느 식품군일까요?', options: ['곡류', '우유·유제품류'], answer: '곡류' }] },
      }),

      // ---- 정리 ----
      M('wrap.letter', {
        title: '내 몸을 존중하는 습관 글', method: '나에게 쓰는 짧은 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 채워 두 문장으로 쓰고 기준 2개를 점검한다.', base: '세 문장으로 쓰고 기준 3개(구체적 습관·근거·도움 경로)를 점검한다.', challenge: '같은 고민을 하는 친구에게 건넬 한마디를 더해 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'살 빼기\' 말고 \'몸을 존중하는 습관\'을 쓴다면 어떤 문장이 될까요?" 몸무게·체형 숫자는 쓰지 않고, 앞으로 해 볼 습관과 그 까닭, 고민될 때 찾아갈 곳을 쓰게 한다. "마른 몸이 건강한 몸"이라는 말이 나오면 오늘 광고 분석에서 빠져 있던 정보를 떠올리게 한다. 쓴 글은 걷지 않고 본인만 보거나, 원하는 학생만 나눈다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '"내 몸을 존중하는 습관"을 세 문장으로 쓰세요(몸무게·체형 숫자는 쓰지 않아요).', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '나에게 쓰는 글', placeholder: '예: 나는 끼니를 거르지 않고…' },
              prompt: '나에게 쓰는 짧은 글을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['해 볼 습관을 구체적으로 썼다', '그 습관의 까닭을 썼다', '고민될 때 찾아갈 곳을 썼다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, minChars: 25, starter: '나는 굶기 대신 ___ 하겠다. 고민될 때는 ___에 찾아가겠다.' }, target: { selfCheck: ['해 볼 습관을 구체적으로 썼다', '고민될 때 찾아갈 곳을 썼다'] } },
            { prompt: '같은 고민을 하는 친구에게 건넬 한마디를 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5, maxChars: 280 }, target: { selfCheck: ['해 볼 습관을 구체적으로 썼다', '그 습관의 까닭을 썼다', '고민될 때 찾아갈 곳을 썼다', '친구에게 건넬 한마디를 썼다'] } }),
            { type: 'choice', prompt: '"마른 몸이 곧 건강한 몸이다"에 대한 생각으로 알맞은 것은?', options: ['맞다, 마를수록 건강하다', '건강은 몸의 크기가 아니라 고루 먹고 움직이고 쉬는 생활과 관련이 있다', '사진에 잘 나오면 건강하다'], answer: 1, difficulty: 0.2, explain: '몸의 크기만으로 건강을 알 수 없어요. 생활 습관을 봐요.' },
          ],
        },
        worksheet: {
          title: '내 몸을 존중하는 습관',
          items: [
            { type: 'short', prompt: '"내 몸을 존중하는 습관"을 세 문장으로 써요(몸무게·체형 숫자는 쓰지 않아요).' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['구체적인 습관이 있다', '까닭이 있다', '도움 받을 곳이 있다'] },
          ],
          easy: { note: '"나는 굶기 대신 ___ 하겠다" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '나는 굶기 대신 ___ 하겠다. 고민될 때는 ___에 찾아가겠다.', answer: '(예) 세 끼를 챙겨 먹고 걷기를, 보건실' }] },
        },
        notes: '글은 채점하지 않고 스스로 점검만 한다. 체중·체형·식사량을 쓰게 하거나 발표시키지 않는다. ' + SAFE_NOTE,
      }),
      M('wrap.help-map', {
        title: '고민될 때 찾아갈 곳 지도', method: '고민될 때 도움 받을 곳', tool: 'map', minutes: 7,
        levels: { easy: '교사가 보건실 한 곳을 함께 짚고, 나머지는 칸 이름을 소리 내어 읽어 주며 꽂는다.', base: '보건실·상담실·영양 선생님 계신 곳 세 곳에 핀을 꽂는다.', challenge: '세 곳을 꽂은 뒤, 찾아갔을 때 건넬 첫마디를 고르고 내 말로 바꿔 말한다.' },
        wrap: {
          teacher: '"몸이나 먹는 것 때문에 고민될 때, 우리 학교에서 어디로 가면 될까요?" 가상 학교 칸 지도에 세 곳을 꽂은 뒤, 우리 학교 실제 자리와 선생님 이름을 덧붙여 알려 준다. "이런 걸로 찾아가면 이상하게 볼 것"이라는 말에는 보건실·상담실은 바로 그런 이야기를 들으려고 있는 곳이라고 답한다. 누가 무엇으로 고민하는지는 묻지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: SCHOOL, prompt: '몸이 힘들거나 먹는 것이 고민될 때 먼저 찾아갈 수 있는 보건실에 핀을 꽂아요.', target: { region: '보건실' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: SCHOOL, prompt: '마음이 힘들어 이야기하고 싶을 때 찾아갈 상담실(Wee 클래스)에 핀을 꽂아요.', target: { region: '상담실(Wee 클래스)' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: SCHOOL, prompt: '급식·식단이 궁금할 때 영양 선생님을 만날 수 있는 곳에 핀을 꽂아요.', target: { region: '급식실(영양 선생님)' }, difficulty: 0.15 },
            { type: 'choice', prompt: '보건실에 찾아갔을 때 건넬 첫마디로 알맞은 것은?', options: ['"요즘 먹는 게 고민인데 이야기해도 될까요?"', '"아무것도 아니에요"', '"친구가 대신 말해 줄 거예요"'], answer: 0, difficulty: 0.15, explain: '짧게라도 고민이 있다고 말하면 선생님이 이야기를 이어 가도록 도와줘요.' },
          ],
        },
        worksheet: {
          title: '고민될 때 찾아갈 곳',
          items: [
            { type: 'table', prompt: '우리 학교에서 찾아갈 곳과 그곳에서 나눌 수 있는 이야기를 써요.', columns: ['곳', '나눌 수 있는 이야기'], cells: [['보건실', ''], ['상담실(Wee 클래스)', ''], ['영양 선생님', '']], answer: '(예) 몸이 힘들 때, 마음이 힘들 때, 급식·식단이 궁금할 때' },
            { type: 'short', prompt: '찾아갔을 때 건넬 첫마디를 한 문장으로 써요.' },
          ],
        },
        notes: '지도는 가상 학교다. 우리 학교 보건실·상담실·급식실 자리와 선생님을 수업 전에 확인해 함께 알려 준다.',
      }),
    );
  }

  // ==== 9학년 · 아침밥, 나의 하루를 여는 식사 (food.m.breakfast) ====
  {
    const M = MK('breakfast', [9]);
    // 가상 설문(실제 통계 아님) — 아침을 거르는 까닭
    const WHY = [['시간이 없어서', 40], ['입맛이 없어서', 25], ['늦잠을 자서', 20], ['습관이 안 돼서', 10], ['기타', 5]];
    const WHY_O = { type: 'circle', mode: 'read', title: '아침을 거르는 까닭(가상 설문, 실제 통계 아님)', unit: '%', data: WHY };
    // 늦잠 아침 갈림길(깊이 3) — 가상 인물 하준
    const LATE = { text: '하준이 알람을 끄고 다시 잠들어 10분 늦게 일어났다. 집을 나설 때까지 20분 남았다.', ask: '하준은 아침을 어떻게 할까?', motif: 'sun', choices: [
      { id: 'skip', text: '아침을 굶고 뛰어간다', result: '3교시쯤 배가 고파 수업에 집중이 잘 안 된다.', impact: [{ who: '하준', text: '오전에 힘이 빠진다', tone: -1 }], why: '간단한 아침이라도 먹으면 오전을 버티는 힘이 돼요.', end: '굶고 가서 오전에 힘이 빠졌어요.',
        next: { text: '쉬는 시간, 친구가 매점에서 과자를 사 먹자고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'chips', text: '과자 두 봉지로 배를 채운다', result: '점심 급식을 많이 남긴다.', impact: [{ who: '하준', text: '점심을 고루 못 먹는다', tone: -1 }], why: '간식으로 배를 채우면 점심을 고루 먹기 어려워요.' },
          { id: 'wait', text: '물을 마시고 점심 급식을 든든히 먹는다', result: '오후에는 기운이 돌아온다.', impact: [{ who: '하준', text: '점심을 고루 먹는다', tone: 1 }] }] } },
      { id: 'store', text: '편의점에 들러 먹을 것을 산다', result: '줄이 길어 지각할 뻔한다.', impact: [{ who: '하준', text: '마음이 급해진다', tone: -1 }], end: '편의점에 들렀다가 늦을 뻔했어요.',
        next: { text: '계산대 앞, 3분밖에 남지 않았다.', ask: '무엇을 집을까?', choices: [
          { id: 'quick', text: '삼각김밥과 우유를 집어 걸으며 먹는다', result: '빠듯하지만 아침을 챙긴다.', impact: [{ who: '하준', text: '오전 힘을 챙긴다', tone: 1 }] },
          { id: 'drinkonly', text: '손에 잡히는 단 음료 하나만 산다', result: '금방 다시 배가 고프다.', impact: [{ who: '하준', text: '배가 금방 꺼진다', tone: -1 }], why: '음료 하나로는 끼니가 되기 어려워요. 식품군을 둘 이상 골라요.' }] } },
      { id: 'simple', text: '바나나와 우유를 들고 나선다', result: '가는 길에 다 먹고 제때 도착한다.', impact: [{ who: '하준', text: '아침을 챙긴다', tone: 1 }], end: '간단한 아침을 들고 나섰어요.',
        next: { text: '학교에 도착한 하준은 내일도 늦잠을 잘까 걱정된다.', ask: '어떻게 할까?', choices: [
          { id: 'nothing', text: '내일 일은 내일 생각하기로 한다', result: '다음 날도 허둥지둥한다.', impact: [{ who: '하준', text: '또 서두른다', tone: -1 }], why: '전날 밤에 조금만 준비해 두면 늦잠 잔 아침도 챙길 수 있어요.' },
          { id: 'prep', text: '밤에 아침거리를 식탁에 꺼내 두기로 한다', result: '내일 아침이 조금 여유로워진다.', impact: [{ who: '하준', text: '준비가 쉬워진다', tone: 1 }], end: '전날 밤에 준비하기로 했어요.',
            next: { text: '그날 밤, 잠들기 전 할 일을 정한다.', choices: [
              { id: 'alarm', text: '아침거리를 꺼내 두고 알람을 하나 더 맞춘다', result: '다음 날 제때 일어나 앉아서 먹는다.', impact: [{ who: '하준', text: '여유 있는 아침', tone: 1 }] },
              { id: 'video', text: '늦게까지 영상을 보다 잠든다', result: '다음 날 또 늦잠을 잔다.', impact: [{ who: '하준', text: '늦잠이 되풀이된다', tone: -1 }], why: '늦게 자면 늦잠과 아침 거르기가 되풀이되기 쉬워요.' }] } }] } }] };
    const LATE_R = [{ id: 'r1', text: '간단한 아침이라도 오전에 힘이 된다' }, { id: 'r2', text: '전날 밤에 준비하면 늦잠 잔 아침도 챙길 수 있다' },
      { id: 'r3', text: '바쁘면 굶는 것이 낫다', why: '들고 갈 수 있는 간단한 아침이 있어요.' }, { id: 'r4', text: '점심에 몰아 먹으면 된다', why: '굶은 뒤 몰아 먹으면 고루 먹기 어려워요.' }];
    const LATE_MORE = { reasons: [{ id: 'r5', text: '시간이 없을 땐 들고 갈 수 있는 것을 고른다' }], ok: ['r5'] };
    // 입맛 없는 아침 갈림길(깊이 3) — 가상 인물 수아
    const NOAPP = { text: '수아는 아침마다 입맛이 없다. 오늘도 식탁에 토스트와 우유가 있지만 먹고 싶지 않다.', ask: '수아는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'none', text: '아무것도 먹지 않고 나간다', result: '2교시부터 기운이 없고 멍하다.', impact: [{ who: '수아', text: '오전에 힘이 없다', tone: -1 }], why: '입맛이 없을 땐 조금씩 나눠 먹는 방법이 있어요.', ending: '아무것도 먹지 않아 오전에 힘이 없었어요.' },
      { id: 'small', text: '우유 한 컵이라도 천천히 마신다', result: '속이 조금 든든해진다.', impact: [{ who: '수아', text: '조금이라도 챙긴다', tone: 1 }], end: '우유 한 컵을 마셨어요.',
        next: { text: '토스트가 남았다. 입맛은 여전히 없다.', ask: '토스트를 어떻게 할까?', choices: [
          { id: 'force', text: '억지로 다 먹는다', result: '속이 더부룩해 등굣길이 불편하다.', impact: [{ who: '수아', text: '속이 불편하다', tone: -1 }], why: '입맛이 없으면 나눠 먹어도 돼요. 억지로 다 먹지 않아도 돼요.' },
          { id: 'half', text: '반쪽만 먹고 나머지는 싸 간다', result: '가방에 토스트 반쪽이 들어 있다.', impact: [{ who: '수아', text: '나눠 먹을 수 있다', tone: 1 }], end: '반쪽은 싸 갔어요.',
            next: { text: '1교시가 끝나고 쉬는 시간이다.', choices: [
              { id: 'eat', text: '싸 온 토스트를 먹는다', result: '3교시까지 기운이 이어진다.', impact: [{ who: '수아', text: '오전을 버틴다', tone: 1 }] },
              { id: 'forget', text: '가방에 그대로 둔다', result: '집에 와서야 토스트를 발견한다.', impact: [{ who: '수아', text: '오전에 힘이 빠진다', tone: -1 }], why: '싸 간 아침은 쉬는 시간에 먹을 수 있어요.' }] } }] } },
      { id: 'later', text: '학교 매점에서 사 먹기로 하고 그냥 나간다', result: '매점이 열기 전이라 2교시까지 못 먹는다.', impact: [{ who: '수아', text: '배가 고프다', tone: 0 }], why: '먹을 것을 미리 챙기면 기다리지 않아도 돼요.', ending: '매점이 열 때까지 못 먹었어요.' }] };
    const NOAPP_R = [{ id: 'r1', text: '입맛이 없으면 조금씩 나눠 먹어도 된다' }, { id: 'r2', text: '싸 간 아침은 쉬는 시간에 먹을 수 있다' },
      { id: 'r3', text: '입맛이 없으면 굶는 수밖에 없다', why: '우유 한 컵, 토스트 반쪽처럼 조금씩 먹을 수 있어요.' }, { id: 'r4', text: '억지로라도 다 먹어야 한다', why: '나눠 먹는 방법도 있어요.' }];
    const FG = [{ id: '곡류', label: '곡류' }, { id: '고기', label: '고기·생선·달걀·콩류' }, { id: '채소', label: '채소·과일류' }, { id: '우유', label: '우유·유제품류' }];
    const QUICK = [{ id: 'q1', text: '식빵', to: '곡류' }, { id: 'q2', text: '삶은 달걀', to: '고기' }, { id: 'q3', text: '바나나', to: '채소' }, { id: 'q4', text: '우유', to: '우유' }, { id: 'q5', text: '주먹밥', to: '곡류' }];
    // 가상 인물 하준 가족의 일주일 아침 장보기 — 가상 값
    const WEEKB = [
      { id: 'bread', text: '식빵 한 봉지(굽기 2분)', price: 2500 }, { id: 'egg', text: '달걀 10개(삶기 10분)', price: 3500 },
      { id: 'milk', text: '우유 큰 팩(따르기 1분)', price: 2800 }, { id: 'banana', text: '바나나 한 송이(바로)', price: 3000 },
      { id: 'cereal', text: '시리얼(붓기 1분)', price: 3000 }, { id: 'yog', text: '요구르트 4개(바로)', price: 2400 },
      { id: 'rice', text: '즉석밥 3개(데우기 2분)', price: 4000 }, { id: 'apple', text: '사과 4개(깎기 3분)', price: 4000 },
    ];
    // 가상 인물 하준의 2주 기록 — 아침 먹은 날 수(가상)
    const TRACK = [['1주', 3], ['2주', 5]];

    ALL.push(
      // ---- 도입 ----
      M('intro.reason-chart', {
        title: '아침 거르는 까닭 원그래프', method: '아침 거르는 까닭 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 조각(가장 많은 까닭) 하나만 읽는다.', base: '상위 세 까닭을 읽고, 그 가운데 생활을 바꿔 해결할 수 있는 것을 고른다.', challenge: '이 설문이 알려 주지 못하는 것(가상 자료·한 반만 물음·까닭이 여럿인 사람)을 짝과 말한다.' },
        intro: {
          teacher: '"아침을 거르는 까닭 가운데 가장 큰 조각은 무엇일까요? 그 까닭은 바꿀 수 있는 걸까요?" 가상 설문 원그래프를 띄우고 시연 단추로 가장 큰 조각이 골라지는 모습을 보인다. "아침을 먹을 시간이 없으면 방법이 없다"는 말에는 "\'시간이 없어서\'와 \'늦잠을 자서\'는 서로 이어져 있지 않을까요?"라고 되묻는다. 이 그래프는 수업용 가상 설문이며, 학생에게 아침을 먹었는지 묻지 않는다.',
          student: '가상 설문 원그래프에서 아침을 거르는 까닭을 읽고, 생활을 바꿔 해결할 수 있는 까닭을 골라요.',
          demo: { tool: 'chart', options: Object.assign({ question: '가장 큰 조각은?', choices: WHY.map((d) => d[0]) }, WHY_O), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut breakfast table at sunrise with a big paper pie chart standing like a plate, a clock on the wall', banner: '아침을 거르는 까닭은?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: DATA_NOTE + ' 설문 비율은 실제 통계가 아니다. 학생 자신의 아침 식사 여부를 묻거나 손들게 하지 않는다.',
      }),
      M('intro.two-mornings', {
        title: '두 학생의 오전 견주기', method: '두 학생의 오전 비교', tool: 'story', minutes: 6,
        levels: { easy: '두 장면씩만 두 학생 칸에 나눈다.', base: '네 장면을 두 학생 칸에 나누고 오전 동안의 차이를 말한다.', challenge: '네 장면을 나눈 뒤, 차이를 만든 다른 요인(잠·전날 밤 준비)도 짝과 말한다.' },
        intro: {
          teacher: '"같은 반 하준과 서준, 4교시까지 무엇이 달랐을까요?" 아침을 먹고 온 가상 인물 하준과 거르고 온 서준의 오전 장면 카드를 띄우고, 시연 단추로 장면이 두 사람 칸에 나뉘는 모습을 보인다. "아침만 먹으면 다 해결된다"는 말에는 "서준이 아침을 거른 까닭은 무엇이었을까요? 잠과도 이어져 있을까요?"라고 되묻는다. 어느 학생이 잘하고 못한다고 평가하지 않고 오전 기운의 차이만 견준다.',
          student: '가상 인물 하준(아침 먹음)과 서준(아침 거름)의 오전 장면을 두 칸에 나누고, 두 사람의 오전이 어떻게 달랐는지 말해요.',
          demo: { tool: 'story', options: { mode: 'sort', title: '두 학생의 오전', slots: ['하준(아침 먹음)', '서준(아침 거름)'], cards: [
            { id: 'h1', text: '1교시에 또렷하게 발표한다', motif: 'sun' }, { id: 's1', text: '2교시에 배가 고파 멍하다', motif: 'cloud' },
            { id: 'h2', text: '3교시 체육에서 끝까지 뛴다', motif: 'star' }, { id: 's2', text: '4교시 전 매점 앞을 서성인다', motif: 'leaf' }] },
            sequence: [{ sort: { '하준(아침 먹음)': ['h1', 'h2'], '서준(아침 거름)': ['s1', 's2'] } }] },
          art: { draw: 'a paper-cut split classroom scene: on the left an energetic student raising a hand in the morning light, on the right a sleepy student resting a chin on a hand', banner: '같은 오전, 다른 기운', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '하준·서준은 가상 인물이다. 아침을 거르는 까닭에는 잠·시간·입맛 등 여러 요인이 있고, 학생의 가정 사정을 묻지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.morning-dilemma', {
        title: '늦잠 잔 아침 갈림길', method: '늦잠 잔 아침 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 가 보고 결과 장면을 본다(근거 카드 없음).', base: '굶기·편의점·간단히 먹기 가운데 골라 갈림길 3번을 끝까지 가고 근거 카드를 고른다.', challenge: '들고 갈 아침 근거까지 고르고, 마지막 문항에서 다른 길도 끝까지 가 본 뒤 견준다.' },
        activity: {
          title: '늦잠 잔 아침 갈림길', tool: 'dilemma',
          teacher: '"10분 늦었을 때 \'굶기\' 말고 고를 수 있는 길은 무엇일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 3교시의 하준 모습이 길마다 어떻게 다른지 말하게 한다. "시간이 없으면 방법이 없다"는 학생에게 "전날 밤 1분만 준비하면 아침의 무엇이 달라질까요?"라고 되묻는다. 입맛이 없는 아침(수아)도 굶기와 억지로 다 먹기 말고 나눠 먹는 길이 있다는 점을 짚는다.',
          task: '늦잠 잔 가상 인물 하준, 입맛 없는 수아가 되어 아침 길을 고르고, 오전에 생기는 결과를 따라가며 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '하준이 10분 늦게 일어났어요. 두 번 골라 결과를 보세요.', base: '하준이 10분 늦게 일어났어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '하준이 10분 늦게 일어났어요. 세 번 골라 끝까지 가고, 들고 갈 아침 근거까지 고르세요.' },
              '늦잠 잔 아침', LATE, [['simple', 'prep', 'alarm']], LATE_R, ['r1', 'r2'], LATE_MORE),
            DIL({ easy: '수아가 입맛이 없는 아침이에요. 두 번 골라 결과를 보세요.', base: '수아가 입맛이 없는 아침이에요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '수아가 입맛이 없는 아침이에요. 세 번 골라 끝까지 가고, 들고 갈 아침 근거까지 고르세요.' },
              '입맛 없는 아침', NOAPP, [['small', 'half', 'eat']], NOAPP_R, ['r1', 'r2'], LATE_MORE),
            IT({ prompt: '늦잠 장면 처음으로 돌아가, 서로 다른 끝 장면 두 개를 끝까지 가 보고 하준의 오전을 견주세요.', toolOptions: { title: '두 길 견주기', scene: cut(LATE, 3), reasons: [], compare: true }, target: { explore: 2 } },
              { prompt: '늦잠 장면에서 두 번씩 골라, 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(LATE, 2) } },
              null, { conclude: '시간이 없을 땐 들고 갈 아침, 입맛이 없을 땐 나눠 먹는 아침이 있어요. 전날 밤 준비가 아침을 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '10분 늦게 일어났을 때 알맞은 아침은?', options: ['굶고 뛰어간다', '바나나와 우유처럼 들고 갈 것을 챙긴다', '점심에 몰아 먹는다'], answer: '바나나와 우유처럼 들고 갈 것을 챙긴다' }] },
        notes: '하준·수아는 가상 인물이다. 학생에게 아침을 먹는지, 집에 아침거리가 있는지 묻지 않는다.',
      }),
      M('activity.quick-menu', {
        title: '5분 아침 차림 설계', method: '5분 아침 차림 설계', tool: 'kitchen', minutes: 15,
        levels: { easy: '음식 카드를 식품군 두 칸(곡류·우유)에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '음식 카드 5장을 식품군 네 칸에 나누어 식품군 셋 이상 든 5분 아침을 차리고, 5분 안에 준비할 수 있는 아침을 고른다.', challenge: '마지막 문항에서 전날 밤에 할 준비 차례를 놓는다.' },
        activity: {
          title: '5분 아침 차림 설계', tool: 'kitchen',
          teacher: '"5분 안에 차릴 수 있는 아침에도 식품군 셋을 담을 수 있을까요?" 음식 카드를 식품군 칸에 넣은 뒤, 몇 개 식품군이 들어갔는지 세어 말하게 한다. "아침은 밥과 국을 차려야만 아침"이라는 학생에게 "식빵·삶은 달걀·우유는 몇 분이면 차릴 수 있을까요?"라고 되묻는다. 집마다 아침 모습이 다르다는 점을 존중하고, 학생 집 아침을 묻지 않는다.',
          task: '음식 카드를 식품군 칸에 나누어 식품군 셋 이상 든 5분 아침을 차리고, 전날 밤 준비 차례까지 정해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('음식 카드를 식품군 칸에 나누어 5분 아침을 차리세요.', FG, QUICK),
              SB('음식 카드를 식품군 두 칸에 나누세요.', [FG[0], FG[3]], pickCards(QUICK, ['q1', 'q4', 'q5']))),
            IT(PB('5분 안에 준비할 수 있는 아침만 골라 담으세요.', '5분 아침', [
              { id: 'p1', text: '시리얼에 우유 붓기', ok: true }, { id: 'p2', text: '전날 싸 둔 주먹밥', ok: true }, { id: 'p3', text: '바나나와 요구르트', ok: true },
              { id: 'p4', text: '갈비찜 새로 끓이기' }, { id: 'p5', text: '빵 반죽부터 굽기' }])),
            IT(OB('5분 아침을 차리는 차례대로 카드를 놓으세요.', [{ id: 'b1', text: '손 씻기' }, { id: 'b2', text: '꺼내 둔 재료 식탁에 놓기' }, { id: 'b3', text: '빵 굽는 동안 우유 따르기' }, { id: 'b4', text: '먹고 그릇 정리하기' }]),
              null,
              OB('전날 밤에 할 아침 준비 차례대로 카드를 놓으세요.', [{ id: 'n1', text: '내일 아침 메뉴 정하기' }, { id: 'n2', text: '재료가 있는지 보기' }, { id: 'n3', text: '먹을 것을 앞에 꺼내 두기' }, { id: 'n4', text: '알람 맞추기' }]),
              { conclude: '5분 아침도 식품군 셋을 담을 수 있어요. 전날 밤에 메뉴와 재료를 정해 두면 더 쉬워요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 설계한 5분 아침을 식품군과 함께 써요.', columns: ['음식', '식품군'], cells: [['', ''], ['', ''], ['', '']], answer: '(예) 식빵·곡류, 삶은 달걀·고기·생선·달걀·콩류, 우유·우유·유제품류' }],
          easy: [{ type: 'choice', prompt: '우유는 어느 식품군일까요?', options: ['우유·유제품류', '곡류'], answer: '우유·유제품류' }] },
        notes: '실제로 집에서 아침을 차리는지 묻지 않는다. 설계는 "이렇게 할 수 있다"는 연습이다.',
      }),
      M('activity.routine-clock', {
        title: '하준의 아침 시간표 다시 짜기', method: '아침 시간표 다시 짜기', tool: 'clock', minutes: 15,
        levels: { easy: '디지털 시각이 함께 보이고 긴바늘이 30분씩 움직인다. 30분 단위로 짠 아침 시각을 맞춘다.', base: '긴바늘이 10분씩 움직이고, 10분 단위로 다시 짠 아침 시각을 맞춘 뒤 아침 먹을 10분이 어디서 생겼는지 말한다.', challenge: '작은 눈금 없이 맞추고, 마지막 문항에서 주말 아침 일과 시각을 맞춘다.' },
        activity: {
          title: '하준의 아침 시간표 다시 짜기', tool: 'clock',
          teacher: '"하준이 아침 먹을 10분을 만들려면 어느 시각을 바꿔야 할까요?" 가상 인물 하준의 다시 짠 아침 시각을 시계에 하나씩 맞추게 한다. "10분 일찍 일어나는 건 불가능하다"는 학생에게 "씻기·옷 입기 가운데 전날 밤으로 옮길 수 있는 일은 없을까요?"라고 되묻는다. 시각은 가상 일과이며 학생의 기상 시각은 묻지 않는다.',
          task: '가상 인물 하준의 아침 시간표(기상·씻기·아침·등교)를 다시 짜서 시계에 맞추고, 아침 먹을 10분을 만들어요.',
          levels: { easy: { showDigital: true, minuteStep: 30 }, base: { minuteStep: 10 }, challenge: { minuteStep: 10, showMinuteMarks: false } },
          items: [
            IT({ prompt: '하준의 새 기상 시각, 6시 50분에 시계를 맞추세요.', target: H(6, 50), difficulty: 0.2 },
              { prompt: '하준의 새 기상 시각, 6시 30분에 시계를 맞추세요.', target: H(6, 30) }),
            IT({ prompt: '씻고 옷을 다 입는 시각, 7시 10분에 시계를 맞추세요.', target: H(7, 10), difficulty: 0.2 },
              { prompt: '씻고 옷을 다 입는 시각, 7시에 시계를 맞추세요.', target: H(7, 0) }),
            IT({ prompt: '아침을 다 먹는 시각, 7시 20분에 시계를 맞추세요(아침 먹는 10분).', target: H(7, 20), difficulty: 0.2 },
              { prompt: '아침을 다 먹는 시각, 7시 30분에 시계를 맞추세요.', target: H(7, 30) }),
            IT({ prompt: '집을 나서는 시각, 7시 40분에 시계를 맞추세요.', target: H(7, 40), difficulty: 0.2 },
              { prompt: '집을 나서는 시각, 8시에 시계를 맞추세요.', target: H(8, 0) },
              { prompt: '주말 아침이에요. 하준이 평일보다 1시간 늦게 일어나도 아침을 먹고 9시 10분에 산책을 나서요. 그 시각에 맞추세요.', target: H(9, 10) },
              { conclude: '기상 시각을 조금 당기거나 전날 밤에 준비를 옮기면 아침 먹을 10분이 생겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '하준의 다시 짠 아침 시간표를 써요.', columns: ['할 일', '시각'], cells: [['일어나기', '6시 50분'], ['씻기·옷 입기 끝', ''], ['아침 다 먹기', ''], ['집 나서기', '']], answer: '7시 10분, 7시 20분, 7시 40분' }],
          easy: [{ type: 'choice', prompt: '아침 먹을 시간을 만드는 방법은?', options: ['조금 일찍 일어난다', '아침을 건너뛴다'], answer: '조금 일찍 일어난다' }] },
        notes: '시계 교구는 한 번에 한 시각만 맞춰, 시간표 짜기를 시각 맞추기 문항 여러 개로 바꾸었다. 시각은 모두 가상 일과다.',
      }),
      M('activity.week-budget', {
        title: '일주일 아침 장보기', method: '일주일 아침 장보기', tool: 'economy', minutes: 15,
        levels: { easy: '사흘치 아침거리를 예산 안에서 세 품목 고른다.', base: '이레치 아침거리를 예산 안에서 식품군과 준비 시간을 따져 다섯 품목 고른다.', challenge: '마지막 문항에서 가족 넷이 우유 한 팩을 나눌 때 한 사람 몫 값을 낸다.' },
        activity: {
          title: '일주일 아침 장보기', tool: 'economy',
          teacher: '"일주일 아침거리를 살 때 값 말고 무엇을 함께 따져야 할까요?" 괄호 속 준비 시간을 읽게 하고, 고른 물건이 몇 개 식품군을 채우는지 세게 한다. "싼 것만 사면 된다"는 학생에게 "준비에 10분 걸리는 재료는 늦잠 잔 아침에 쓸 수 있을까요?"라고 되묻는다. 하준 가족과 값은 모두 가상이고, 학생 가정의 장보기나 형편은 묻지 않는다.',
          task: '가상 인물 하준 가족의 일주일 아침 장보기에서 예산 안에서 식품군과 준비 시간을 함께 따져 물건을 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(BUD('이레치 아침거리예요. 16,000원 안에서 식빵·달걀·우유를 넣어 딱 다섯 품목을 고르세요.', WEEKB, 16000, { must: ['bread', 'egg', 'milk'], count: 5 }, '하준 가족 이레 아침(가상)'),
              BUD('사흘치 아침거리예요. 9,000원 안에서 식빵을 넣어 딱 세 품목을 고르세요.', pickCards(WEEKB, ['bread', 'egg', 'milk', 'banana', 'cereal', 'apple']), 9000, { must: ['bread'], count: 3 }, '하준 가족 사흘 아침(가상)')),
            IT(BUD('늦잠 잔 날 쓸 아침거리예요. 준비 시간이 3분 안인 것만으로 9,000원 안에서 딱 세 품목을 고르세요.', WEEKB, 9000, { not: ['egg', 'apple'], count: 3 }, '늦잠 날 아침(가상)')),
            IT(BUD('바로 먹을 수 있는 것과 곡류를 함께 넣어요. 10,000원 안에서 즉석밥과 바나나를 넣어 고르세요.', WEEKB, 10000, { must: ['rice', 'banana'], min: 7000 }, '곡류와 바로 먹을 것(가상)'),
              null,
              { prompt: '하준 가족 넷이 우유 큰 팩(2,800원)을 똑같이 나눠 내기로 했어요. 하준의 몫을 내 보세요.', toolOptions: { mode: 'pay', item: { text: '우유 큰 팩 한 사람 몫', price: 700 }, coins: [10, 50, 100, 500] }, target: { pay: 700 } },
              { conclude: '아침 장보기는 값과 함께 식품군과 준비 시간을 따져요. 바쁜 날 쓸 재료를 따로 챙겨 두면 굶지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '하준 가족이 고른 아침거리와 준비 시간을 써요.', columns: ['물건', '준비 시간', '식품군'], cells: [['식빵', '', ''], ['달걀', '', ''], ['우유', '', '']], answer: '2분·곡류, 10분·고기·생선·달걀·콩류, 1분·우유·유제품류' }] },
        notes: '하준 가족·값·준비 시간은 가상이다. 학생 가정의 장보기 예산·형편을 묻지 않는다. ' + DATA_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.plan-write', {
        title: '"만약 늦잠 자면" 아침 계획 글', method: '나의 아침 식사 계획', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 채워 두 문장으로 쓰고 기준 2개를 점검한다.', base: '"만약 늦잠 자면 ___"을 넣어 세 문장으로 쓰고 기준 3개(구체적·현실적·대안)를 점검한다.', challenge: '실천을 점검할 방법을 더해 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'아침을 꼭 먹겠다\'와 \'늦잠 자면 바나나와 우유를 들고 나간다\', 내일 지켰는지 확인할 수 있는 계획은 무엇일까요?" 두 문장을 견주어 읽은 뒤 계획을 쓰게 한다. 지금 아침을 먹는지는 쓰지 않아도 되고, 앞으로 해 볼 계획만 쓴다고 밝힌다. "아침 먹을 시간이 없으면 방법이 없다"는 말에는 오늘 다시 짠 하준의 시간표를 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '"만약 늦잠 자면 ___"을 넣어 앞으로 해 볼 아침 식사 계획을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '나의 아침 계획', placeholder: '예: 나는 전날 밤에…' },
              prompt: '아침 계획을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['무엇을 먹을지 구체적으로 썼다', '지킬 수 있는 계획으로 썼다', '늦잠 잘 때의 대안을 썼다'], mustInclude: [['늦잠', '늦게']] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, minChars: 25, starter: '나는 아침에 ___을 먹겠다. 만약 늦잠 자면 ___.' }, target: { selfCheck: ['무엇을 먹을지 구체적으로 썼다', '늦잠 잘 때의 대안을 썼다'], mustInclude: [['늦잠', '늦게']] } },
            { prompt: '실천을 점검할 방법을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5, maxChars: 280 }, target: { selfCheck: ['무엇을 먹을지 구체적으로 썼다', '지킬 수 있는 계획으로 썼다', '늦잠 잘 때의 대안을 썼다', '실천을 점검할 방법을 썼다'], mustInclude: [['늦잠', '늦게']] } }),
            { type: 'choice', prompt: '"아침을 먹을 시간이 없으면 방법이 없다"는 생각을 바로잡는 말로 알맞은 것은?', options: ['맞다, 그날은 굶는 수밖에 없다', '전날 밤에 준비하거나 들고 갈 아침을 고를 수 있다', '점심을 두 배로 먹으면 된다'], answer: 1, difficulty: 0.2, explain: '전날 밤 준비, 들고 갈 아침처럼 시간이 없을 때의 길이 있어요.' },
          ],
        },
        worksheet: {
          title: '나의 아침 계획',
          items: [
            { type: 'short', prompt: '"만약 늦잠 자면 ___"을 넣어 아침 계획을 세 문장으로 써요.' },
            { type: 'check', prompt: '내 계획을 기준표로 점검해요.', options: ['구체적이다', '지킬 수 있다', '늦잠 날 대안이 있다'] },
          ],
          easy: { note: '"나는 아침에 ___을 먹겠다. 만약 늦잠 자면 ___" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '나는 아침에 ___을 먹겠다. 만약 늦잠 자면 ___.', answer: '(예) 토스트와 우유, 바나나를 들고 나간다' }] },
        },
        notes: '계획만 쓰고 지금의 아침 식사 여부는 묻거나 채점하지 않는다.',
      }),
      M('wrap.track', {
        title: '2주 실천 기록 막대그래프', method: '2주 실천 기록표', tool: 'chart', minutes: 7,
        levels: { easy: '가상 인물 하준의 1주 기록 막대 하나를 그리고 목표 5일과 견준다.', base: '하준의 2주 기록 막대 두 개를 그리고, 목표 5일에 닿은 주를 고른다.', challenge: '목표에 못 미친 날의 까닭을 적을 칸을 활동지 기록표에 더한다.' },
        wrap: {
          teacher: '"계획은 기록할 때 이어져요. 하준의 2주 기록을 막대로 그리면 무엇이 보일까요?" 가상 인물 하준의 기록을 막대로 그린 뒤, 목표 5일은 손가락이나 자로 그래프 위에 가로선으로 짚어 보이게 한다(교구는 목표선을 그리지 못한다). "목표를 못 채우면 실패"라는 말에는 1주와 2주 막대를 견주어 늘어난 것을 먼저 보게 한다. 학생 자신의 기록표는 활동지에 원하는 사람만 쓰고 걷지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '가상 인물 하준의 아침 먹은 날(가상 기록, 목표 5일)', unit: '일', xLabel: '주', yLabel: '아침 먹은 날', max: 7, scale: 1, data: TRACK, showTable: true }, prompt: '표를 보고 하준의 2주 기록을 막대그래프로 그려요.', target: { build: true }, difficulty: 0.2 },
              { prompt: '표를 보고 하준의 1주 기록 막대를 그려요.', options: { data: TRACK.slice(0, 1) } }),
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 인물 하준의 아침 먹은 날(가상 기록, 목표 5일)', unit: '일', xLabel: '주', yLabel: '아침 먹은 날', max: 7, scale: 1, data: TRACK, question: '목표 5일에 닿은 주는?', choices: ['1주', '2주', '둘 다 못 닿음'] }, prompt: '목표 5일에 닿은 주를 골라요.', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'short', prompt: '하준에게 3주째 목표를 이어 가는 방법 한 가지를 조언해 써요.' },
          ],
        },
        worksheet: {
          title: '2주 실천 기록표',
          items: [
            { type: 'table', prompt: '2주 실천 기록표 틀이에요(원하는 사람만 써요, 걷지 않아요).', columns: ['주', '해 본 날 수', '목표'], cells: [['1주', '', '5일'], ['2주', '', '5일']], answer: '(스스로 기록)' },
            { type: 'short', prompt: '목표에 못 미친 날이 있다면 그 까닭을 적을 칸에 무엇을 쓸지 정해요(예: 늦잠, 입맛).' },
          ],
        },
        notes: '교구는 목표선을 그리지 못해 목표 5일을 그래프 제목에 적고 읽기 문항으로 견주게 했다. 하준의 기록은 가상이다. 학생 자신의 기록은 채점하거나 걷지 않는다.',
      }),
    );
  }


  PaperLessons.registerModules(ALL);
})();
