/* 창체 안전교육 약물 중독 예방 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-drug 중.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 중학교 약물 및 사이버 중독 예방
 *   ('향정신성 물질에 대한 위험성·피해 알기' / '중독성 물질에 대한 위험성·피해 알기') + 학교 안전교육 7대 표준안 약물 소분류(마약류·흡연·음주·고카페인).
 *   주제마다 source 는 체계도에 있다. 근거 파일(sources/changche/research-safety.md)에는 항목 제목만 있고 세부 사실·수치가 없다.
 * 중 기준: 사례 분석·딜레마 토의·자료 해석·짧은 글쓰기(기준표 자기 평가)·역할극 대본·캠페인. 자료·그래프 수치와 인물·장면은 모두 지어낸 가상 자료다(가명).
 *   약물 이름은 체계도·근거의 범주어(담배·전자담배·술·카페인·진통제·감기약·다이어트약·향정신성의약품·마약·대마)까지만 쓴다.
 *   구하는 법·쓰는 법·효과를 미화하는 묘사는 하지 않는다. 학생에게 경험을 묻지 않고 "가상 인물", "본 적 있는 장면"으로만 묻는다.
 *   도움 받을 곳: 112(체계도 개념 '거절과 신고(112)')·1388(같은 영역 체계도 개념 '도움 요청(112·1388)', 계획 brief)·담임·상담 선생님·보건실·약국·병원·약사·의사·보호자.
 *   그 밖의 기관 이름·전화번호는 쓰지 않는다.
 * 주제 9개 × 8모듈 = 72모듈. 7학년 3주제(고카페인·전자담배 거절·음주), 8학년 3주제(의약품 오남용·향정신성 물질·미디어 캠페인), 9학년 3주제(마약류 법·운반 아르바이트·의존과 돕기).
 *
 * 사람 확인: 근거 파일에 없는 일반 사실·수칙 문장(모듈 id — 확인할 곳)
 *   - energy-drink.*: 카페인은 잠들기 어렵게 할 수 있고, 밤늦게 마시면 잠이 늦어진다 / 많이 마시면 가슴이 두근거릴 수 있다 / 졸음을 음료로 막으면 밤잠이 줄어드는 되풀이가 생긴다 / 잠이 부족하면 다음 날 집중·기억이 떨어진다 / 커피 음료에도 카페인이 들어 있다 — 식품의약품안전처
 *   - energy-drink.intro.label: 고카페인 음료 표시 문구('고카페인 함유', '어린이, 임산부, 카페인 민감자는 섭취에 주의') 와 '총 카페인 함량' 표시 — 식품의약품안전처(식품 등의 표시기준)
 *   - vape-refuse.*: 액상형 전자담배에서 나오는 것은 수증기만이 아니며 니코틴 등이 들어 있을 수 있다 / 니코틴은 의존을 일으킨다 / 가끔 피워도 의존이 생길 수 있다 / 거절 4단계(분명히·까닭·대안·자리 뜨기) — 질병관리청·보건복지부
 *   - alcohol.*: 알코올은 뇌(판단·기억)와 간에 영향을 준다 / 자라는 뇌에 더 해롭다 / 술을 마시면 판단이 흐려진다 / 청소년 보호법은 청소년에게 술·담배를 파는 것을 막는다 / '조금 마시면 술이 는다'는 오해 — 보건복지부·법제처(청소년 보호법)
 *   - misuse-case.*: 오남용 네 유형(정해진 양 넘기·기간 넘기·남의 약·목적 외 사용) / 약국 약도 많이 먹으면 해로울 수 있다 / 같은 성분 약을 겹쳐 먹지 않는다 / 사용기한 지난 약은 약국 등에 가져가 버린다 / 처방 없는 다이어트약을 친구끼리 나누지 않는다 — 식품의약품안전처
 *   - psychoactive.*: 향정신성 물질은 뇌에 작용해 의존·내성·금단을 일으킬 수 있다 / 처방약은 처방받은 사람만 먹는다(나눠 주지 않는다) / '공부 잘 되는 약'은 없다는 표현 / 법으로 관리하는 까닭 — 식품의약품안전처
 *   - media-campaign.*: 광고가 쓰는 장치(분위기·모델·문구·작은 글씨)와 숨긴 정보 / 공포에만 기대는 캠페인보다 사실과 공감에 기댄 캠페인 — 보건복지부·질병관리청 캠페인 자료
 *   - drug-law.*: 「마약류 관리에 관한 법률」이 마약류를 마약·향정신성의약품·대마로 나누어 관리한다 / 갖고 있기·건네주기·옮겨 주기·광고 퍼뜨리기에도 책임이 따른다 / 해외 직구 제품이라도 마약류 성분이 들어 있으면 같이 관리된다 / 도움을 청하는 행동을 '나를 지키는 행동' 칸에 둔 것(법적 보호를 뜻하지 않게 문구 확인) — 법제처·식품의약품안전처
 *   - easy-money.*: 고수익 운반 아르바이트의 위험 신호(신분증 사진 요구·비밀 메신저 이동·물건 확인 금지·당일 높은 대가) / 내용물을 몰랐다는 말만으로 책임을 벗기 어렵다 / 이미 사진을 보냈어도 바로 어른·112에 알리는 것이 낫다 — 경찰청·법제처
 *   - quit-support.*: 니코틴·알코올 의존은 뇌의 보상 회로가 익숙해져 끊기 어렵다 / 금단 때문에 '피우고 싶은 마음'이 날마다 오르내린다 / 겁주는 말보다 존중과 구체적 도움이 끊는 데 낫다 — 질병관리청·보건복지부 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `saf-drug.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'saf-drug', band: '중', topic: `saf-drug.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } (문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [[칸 글(___ 포함), 카드 글]] — who 를 주면 말풍선 칸
  const FB = (prompt, pairs, extra, opt, who) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => Object.assign({ id: `f${i + 1}`, label: p[0] }, who ? { who: p[2] || who } : {})), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 마음 크기(emotion scale) 출구 질문 — 내 생각 돌아보기라 어느 크기든 맞다
  const SCALE = (situation, feeling, prompt, labels) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: labels || { 1: '전혀 아니다', 5: '아주 그렇다' } }, prompt, target: { level: 'any' }, difficulty: 0.1 });

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 단계별 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 깊이에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // 쉬움 = 2단계(근거 없음), 기본 = 3단계 + 근거, 도전 = ch 로 고른다:
  //   ch.explore → 다른 길도 끝까지 가 보고 견주기 / ch.good → 도전에서 찾을 다른 바른 길 / ch.reasons·ch.ok → 더할 근거 / ch.all → 근거를 빠짐없이
  const DIL = (p, title, tree, good, R, ok, ch, extra) => {
    const c = ch || {};
    const ct = { path: paths(c.good || good, 3), reasons: [...ok, ...(c.ok || [])], some: true };
    if (c.explore) ct.explore = c.explore;
    if (c.all) delete ct.some; // ch.all → 도전에서는 근거를 정확히 이 카드들(여러 측면을 다 고르기)
    return Object.assign({
      prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: R, compare: true }, target: { path: paths(good, 3), reasons: ok, some: true },
      levels: {
        easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), reasons: [] }, target: { path: paths(good, 2) } },
        challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...(c.reasons || [])] }, target: ct },
      },
    }, extra);
  };
  // 도입 시연용 갈림길
  const DEMO_DIL = (title, tree, depth, good, R) => ({ tool: 'dilemma', options: { title, scene: cut(tree, depth), reasons: R || [] }, sequence: [{ path: paths(good, depth)[0], reasons: R && R.length ? [R[0].id] : [] }] });
  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  // ---- 가상 자료 그래프(chart read) ----
  const CH = (type, title, unit, data, extra) => Object.assign({ type, mode: 'read', title, unit, data }, extra);

  // ==== 7학년 · 에너지 음료와 고카페인 — 시험 기간의 선택 (saf-drug.m.energy-drink) ====
  {
    const M = MK('energy-drink', [7]);
    const POLL = [['에너지 음료 마시기', 35], ['커피 음료 마시기', 20], ['잠깐 낮잠', 15], ['일어나 스트레칭', 15], ['일찍 자고 아침 공부', 15]];
    const POLL_T = '시험 기간 졸음을 이기는 방법(가상 학급 조사)';
    const CASE = [
      { id: 'c1', text: '밤 11시, 시험 걱정에 첫 캔을 딴다' }, { id: 'c2', text: '새벽 1시, 두 번째 캔을 마신다' },
      { id: 'c3', text: '새벽 3시, 누워도 잠이 오지 않는다' }, { id: 'c4', text: '아침, 머리가 무겁고 몸이 처진다' },
      { id: 'c5', text: '시험 중 집중이 자꾸 흐트러진다' }, { id: 'c6', text: '그날 밤 피곤을 쫓으려 또 캔을 찾는다' },
    ];
    const EFFECT = [
      { id: 'e1', text: '잠들기 어려워진다', to: '몸에 생기는 일' }, { id: 'e2', text: '가슴이 두근거릴 수 있다', to: '몸에 생기는 일' },
      { id: 'e3', text: '다음 날 피곤하고 몸이 처진다', to: '몸에 생기는 일' }, { id: 'e4', text: '수업 시간에 졸음이 쏟아진다', to: '생활에 생기는 일' },
      { id: 'e5', text: '피곤해서 또 음료를 찾는다', to: '생활에 생기는 일' }, { id: 'e6', text: '용돈이 음료에 자꾸 나간다', to: '생활에 생기는 일' },
      { id: 't1', text: '키가 더 빨리 자란다' }, { id: 't2', text: '시험 점수가 저절로 오른다' },
    ];
    const LOOP = [{ id: 'l1', text: '밤늦게 고카페인 음료를 마신다' }, { id: 'l2', text: '잠드는 시간이 늦어진다' }, { id: 'l3', text: '다음 날 피곤하고 졸리다' }, { id: 'l4', text: '졸음을 쫓으려 또 음료를 찾는다' }];
    const DAY = [
      { id: 'd1', text: '밤 11시에 잠자리에 들기', to: '잠' }, { id: 'd2', text: '아침 7시까지 푹 자기', to: '잠' },
      { id: 'd3', text: '오늘 배운 것 복습', to: '공부' }, { id: 'd4', text: '틀린 문제 다시 풀기', to: '공부' },
      { id: 'd5', text: '10분 걷기·스트레칭', to: '쉬기' }, { id: 'd6', text: '음악 들으며 잠깐 쉬기', to: '쉬기' },
      { id: 'd7', text: '가족과 저녁 먹기', to: '식사' }, { id: 'd8', text: '아침밥 챙겨 먹기', to: '식사' },
      { id: 't1', text: '새벽 3시까지 버티기' }, { id: 't2', text: '에너지 음료로 저녁 대신하기' },
    ];
    const NIGHT = [{ id: 'n1', text: '6시 저녁 먹기' }, { id: 'n2', text: '7시 어려운 과목 먼저 복습' }, { id: 'n3', text: '8시 10분 걷기·스트레칭' }, { id: 'n4', text: '8시 반 쉬운 과목 훑기' }, { id: 'n5', text: '10시 반 씻고 휴대전화 내려놓기' }, { id: 'n6', text: '11시 잠자리에 들기' }];
    const D1 = { text: '시험 전날 저녁, 친구들이 편의점에서 에너지 음료를 단체로 사서 밤새 공부하자고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'buy', text: '같이 사서 밤새 마시며 공부한다', result: '새벽이 되어도 잠이 오지 않는다.', impact: [{ who: '나', text: '잠이 줄어든다', tone: -1 }], why: '밤늦게 마신 카페인은 잠드는 것을 방해할 수 있어요.', end: '밤새 깨어 있었어요. 다음 날이 걱정돼요.',
        next: { text: '새벽 2시, 눈은 뜨여 있는데 읽은 내용이 머리에 잘 남지 않는다.', choices: [
          { id: 'more', text: '한 캔 더 마시고 버틴다', result: '가슴이 두근거리고 더 잠들기 어렵다.', impact: [{ who: '나', text: '몸이 불편해진다', tone: -1 }], why: '더 마셔도 잠이 부족한 문제는 풀리지 않아요.' },
          { id: 'sleep', text: '불을 끄고 지금이라도 잔다', result: '몇 시간이라도 자고 일어난다.', impact: [{ who: '나', text: '조금 쉰다', tone: 1 }], end: '짧게라도 잤어요.',
            next: { text: '아침, 친구가 "한 캔 더 마시고 시험 보자"고 한다.', choices: [
              { id: 'can', text: '또 마시고 시험을 본다', result: '시험 중 손이 떨리고 집중이 흐트러진다.', impact: [{ who: '나', text: '실력을 다 못 낸다', tone: -1 }], why: '졸음을 음료로 막으면 몸이 더 지쳐요.' },
              { id: 'water', text: '물과 아침밥을 먹고 간다', result: '조금 피곤하지만 문제에 집중한다.', impact: [{ who: '나', text: '컨디션을 지킨다', tone: 1 }] }] } }] } },
      { id: 'plan', text: '음료 대신 정한 시간까지만 공부하겠다고 말한다', result: '친구들이 "그래도 한 캔은?" 하며 다시 권한다.', impact: [{ who: '친구들', text: '조금 서운해한다', tone: 0 }], end: '내 계획을 친구들에게 말했어요.',
        next: { text: '친구가 "너만 안 마시면 혼자 자는 거냐"며 웃는다.', choices: [
          { id: 'give', text: '분위기 때문에 한 캔만 산다', result: '밤늦게 마셔 잠드는 시간이 늦어진다.', impact: [{ who: '나', text: '계획이 흔들린다', tone: -1 }], why: '한 캔이라도 밤늦게 마시면 잠이 늦어질 수 있어요.' },
          { id: 'keep', text: '"자는 것도 시험 준비야"라고 웃으며 말한다', result: '친구 한 명이 "나도 오늘은 일찍 잘래"라고 한다.', impact: [{ who: '친구', text: '함께 잠을 지킨다', tone: 1 }], end: '계획대로 일찍 자러 갔어요.',
            next: { text: '밤 11시, 공부할 양이 아직 조금 남았다.', choices: [
              { id: 'bed', text: '중요한 것만 훑고 정한 시간에 잔다', result: '아침에 맑은 머리로 남은 것을 복습한다.', impact: [{ who: '나', text: '컨디션을 지킨다', tone: 1 }] },
              { id: 'stay', text: '다 끝낼 때까지 버틴다', result: '새벽까지 깨어 있어 아침이 힘들다.', impact: [{ who: '나', text: '잠이 줄어든다', tone: -1 }], why: '정한 잠 시간을 지켜야 다음 날 집중할 수 있어요.' }] } }] } },
      { id: 'home', text: '사지 않고 먼저 집에 간다', result: '친구들은 내가 왜 갔는지 모른다.', impact: [{ who: '친구들', text: '그대로 밤을 샌다', tone: 0 }], ending: '집에서 계획대로 공부하고 잤어요. 친구들에게 까닭을 말했다면 어땠을까요?' }] };
    const R1 = [{ id: 'r1', text: '잠을 줄이면 다음 날 집중과 기억이 떨어진다' }, { id: 'r2', text: '밤늦은 카페인은 잠드는 것을 방해한다' },
      { id: 'r3', text: '친구들이 다 마시면 나도 마셔야 사이가 좋다', why: '내 계획을 웃으며 말해도 사이는 지킬 수 있어요.' }, { id: 'r4', text: '에너지 음료를 마시면 공부 효율이 오른다', why: '깨어 있는 것과 머리에 잘 남는 것은 달라요.' }];
    const D2 = { text: '시험 주간, 학원이 끝난 밤 10시. 편의점 냉장고 앞에서 졸음을 쫓을 음료를 고른다.', ask: '무엇을 고를까?', motif: 'house', choices: [
      { id: 'energy', text: '"고카페인" 표시가 있는 큰 캔을 산다', result: '집에 와서 마시니 자정이 넘어도 눈이 말똥하다.', impact: [{ who: '나', text: '잠이 늦어진다', tone: -1 }], why: '밤에 졸린 것은 잘 시간이라는 몸의 신호예요.', end: '잠이 늦어졌어요.',
        next: { text: '다음 날 아침, 몸이 무겁고 1교시에 졸음이 쏟아진다.', choices: [
          { id: 'again', text: '점심에 또 한 캔 마신다', result: '오후엔 괜찮다가 밤에 또 잠이 안 온다.', impact: [{ who: '나', text: '되풀이 고리에 빠진다', tone: -1 }], why: '졸음을 음료로 막으면 밤잠이 또 줄어드는 고리가 생겨요.' },
          { id: 'rest', text: '오늘 밤은 음료 없이 일찍 자기로 한다', result: '다음 날 아침이 한결 가볍다.', impact: [{ who: '나', text: '고리를 끊는다', tone: 1 }], end: '음료 없이 일찍 잤어요.',
            next: { text: '밤에 친구가 "같이 영상 통화하며 밤새 공부하자"고 한다.', choices: [
              { id: 'call', text: '새벽까지 통화하며 공부한다', result: '다시 잠이 줄어든다.', impact: [{ who: '나', text: '잠이 줄어든다', tone: -1 }], why: '음료가 아니어도 잠을 줄이면 같은 결과가 와요.' },
              { id: 'bye', text: '"오늘은 일찍 자기로 했어"라고 말한다', result: '정한 시간에 잔다.', impact: [{ who: '나', text: '잠을 지킨다', tone: 1 }] }] } }] } },
      { id: 'water', text: '물을 사고 집에 가서 씻고 잔다', result: '바로 잠들어 아침에 개운하다.', impact: [{ who: '나', text: '잠을 지킨다', tone: 1 }], end: '푹 자고 일어났어요.',
        next: { text: '아침에 짝이 "어제 몇 캔 마셨어?"라며 자랑하듯 묻는다.', choices: [
          { id: 'envy', text: '"나도 다음엔 마셔 볼게"라고 한다', result: '오늘 밤 음료를 살 생각이 든다.', impact: [{ who: '나', text: '계획이 흔들린다', tone: -1 }], why: '푹 잔 내 몸의 느낌이 더 믿을 만한 근거예요.' },
          { id: 'share', text: '"그냥 잤더니 머리가 맑아"라고 말한다', result: '짝이 "나도 오늘은 자 볼까"라고 한다.', impact: [{ who: '짝', text: '생각이 바뀐다', tone: 1 }], end: '잠의 좋은 점을 짝과 나눴어요.',
            next: { text: '짝이 "근데 자면 공부할 시간이 줄잖아"라고 한다.', choices: [
              { id: 'plan2', text: '잠 시간을 먼저 정하고 남은 시간을 나누자고 한다', result: '둘이 함께 시간 계획을 세운다.', impact: [{ who: '짝', text: '계획을 얻는다', tone: 1 }] },
              { id: 'ignore', text: '"그건 네 마음대로 해"라고 한다', result: '짝은 오늘도 밤을 새운다.', impact: [{ who: '짝', text: '잠이 줄어든다', tone: -1 }], why: '알게 된 방법을 나누면 둘 다 지킬 수 있어요.' }] } }] } },
      { id: 'coffee', text: '커피 음료 큰 컵을 산다', result: '역시 밤에 잠이 오지 않는다.', impact: [{ who: '나', text: '잠이 늦어진다', tone: -1 }], why: '커피 음료에도 카페인이 들어 있어요.', ending: '이름만 다를 뿐 카페인이 들어 있었어요.' }] };
    const R2 = [{ id: 'r1', text: '졸음을 음료로 막으면 밤잠이 줄어드는 고리가 생긴다' }, { id: 'r2', text: '잠 시간을 먼저 정해야 공부 시간도 계획할 수 있다' },
      { id: 'r3', text: '커피는 에너지 음료가 아니니 괜찮다', why: '커피 음료에도 카페인이 들어 있어요.' }, { id: 'r4', text: '많이 마셔도 다음 날 쉬면 손해가 없다', why: '잠이 부족한 날의 수업과 시험은 되돌릴 수 없어요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.poll', {
        title: '졸음 이기는 방법 원그래프', method: '가상 설문 원그래프 해석', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 큰 조각 3개만 짚어 읽어 주고, 가장 큰 조각 하나를 고른다.', base: '조각 5개를 모두 읽고 가장 큰 조각과 그 방법의 문제점을 말한다.', challenge: '이 가상 조사로 알 수 없는 것(실제 효과·우리 반 실제 습관)을 짚는다.' },
        intro: {
          teacher: '"시험 기간 밤, 졸음을 이기려고 우리 반은 무엇을 가장 많이 할까요?" 수업용으로 지어낸 가상 학급 조사 원그래프를 띄우고 시연 단추로 가장 큰 조각을 고르는 모습을 보인다. "많은 사람이 하면 좋은 방법"이라는 말이 나오면 "많이 고른 방법과 다음 날 머리가 맑은 방법은 같은 것일까요?"라고 되묻는다. 오늘은 고카페인 음료가 잠과 몸에 주는 영향을 사례로 따져 본다고 밝힌다.',
          student: '가상 학급 조사 원그래프에서 가장 큰 조각을 찾고, 그 방법에 어떤 문제가 있을지 짝에게 한 가지 말해요.',
          demo: { tool: 'chart', options: CH('circle', POLL_T, '%', POLL, { question: '가장 큰 조각은?', choices: POLL.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut desk at night with an open textbook, a desk lamp and several energy drink cans, and a simple pie chart floating above', banner: '졸음, 무엇으로 이길까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 가상 자료다. 학생에게 실제로 몇 캔을 마시는지 발표시키지 않는다.',
      }),
      M('intro.label', {
        title: '캔 뒷면 표시 문구 풀이', method: '표시 문구 해석', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 문구 2개(고카페인 함유·섭취 주의)만 읽어 주고 뜻 카드를 함께 고른다.', base: '문구 4개를 뜻 카드와 짝 짓고 내 말로 풀이한다.', challenge: '짝 지은 뒤 그 문구가 왜 캔에 적혀 있는지(누구를 지키려는지) 추론해 말한다.' },
        intro: {
          teacher: '"캔 뒷면의 작은 글씨는 누구를 위해 적혀 있을까요?" 가상 에너지 음료 캔 뒷면 문구 카드를 하나씩 넘겨 읽고, 시연 단추로 문구와 뜻이 짝 지어지는 모습을 보인다. "작은 글씨는 형식일 뿐"이라는 말에는 "\'어린이·카페인 민감자는 주의\'라는 말이 왜 앞면이 아니라 뒷면에 있을까요?"라고 되묻는다. 앞면의 \'에너지·집중\' 같은 말은 표시가 아니라 사게 하려는 광고 말이라는 점을 함께 짚는다.',
          student: '캔 뒷면 문구 카드를 넘기며 각 문구가 무슨 뜻인지 짝 지어요. 그 문구가 왜 적혀 있는지 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '"고카페인 함유"' }, { id: 's2', label: '"어린이, 임산부, 카페인 민감자는 섭취에 주의"' }, { id: 's3', label: '"총 카페인 함량 ○○mg"' }, { id: 's4', label: '앞면의 "에너지 충전! 집중력 UP"' }],
            cards: [{ id: 'k1', text: '카페인이 많이 들어 있다는 표시' }, { id: 'k2', text: '몸이 약하거나 예민하면 조심하라는 말' }, { id: 'k3', text: '한 캔에 든 카페인의 양' }, { id: 'k4', text: '사게 하려는 광고 말' }], shuffle: false },
            sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3', s4: 'k4' } }] },
          art: { draw: 'a paper-cut close-up of the back of a drink can with small label text panels, a magnifying glass over the words', banner: '캔 뒷면을 읽어요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '캔 문구는 수업용으로 바꾼 예시다. 실제 제품 이름은 쓰지 않는다. 함량 숫자는 ○○으로 비워 두었다.',
      }),

      // ---- 활동 ----
      M('activity.case', {
        title: '가람이의 하루 차례', method: '사례 원인·결과 차례', tool: 'story', minutes: 16,
        levels: { easy: '장면 카드 4장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 6장을 원인·결과 차례로 놓고, 바꿀 수 있었던 장면을 고른다.', challenge: '바꿀 장면마다 대안 카드를 짝 짓고(함정 카드 포함), 활동지에 대안 하나를 내 말로 쓴다.' },
        activity: {
          title: '가람이의 하루 차례', tool: 'story',
          teacher: '"가람이의 하루에서 어느 장면이 다음 장면을 불렀을까요?" 장면을 차례로 놓을 때마다 앞 장면이 뒤 장면의 원인이 되는지 한 문장으로 말하게 한다. "가람이는 음료 덕분에 시험을 봤다"는 말에는 "깨어 있었던 것과 시험 중 집중한 것은 같은 일일까요?"라고 되묻는다. 마지막 장면이 첫 장면으로 다시 이어진다는 점, 즉 되풀이 고리를 짚는다. 가람은 가상 인물이다.',
          task: '밤샘 공부를 하며 에너지 음료를 여러 캔 마신 가상 학생 가람이의 하루를 원인·결과 차례로 놓고, 바꿀 수 있었던 장면을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('가람이의 하루 장면 6장을 원인·결과 차례로 놓으세요.', CASE, { title: '가람이의 시험 전날' }),
              OB('가람이의 하루 장면 4장을 차례로 놓으세요.', pickCards(CASE, ['c1', 'c3', 'c4', 'c5']), { title: '가람이의 시험 전날' })),
            IT(PB('가람이가 다르게 했다면 뒤 장면이 바뀌었을 장면을 골라 담으세요.', '바꿀 수 있었던 장면', [
              { id: 'c1', text: '밤 11시, 시험 걱정에 첫 캔을 딴다', ok: true }, { id: 'c2', text: '새벽 1시, 두 번째 캔을 마신다', ok: true },
              { id: 'c6', text: '그날 밤 피곤을 쫓으려 또 캔을 찾는다', ok: true }, { id: 'c4', text: '아침, 머리가 무겁고 몸이 처진다' }, { id: 'c5', text: '시험 중 집중이 자꾸 흐트러진다' }]),
              PB('가람이가 스스로 고를 수 있었던 장면을 골라 담으세요.', '바꿀 수 있었던 장면', [
                { id: 'c1', text: '밤 11시, 시험 걱정에 첫 캔을 딴다', ok: true }, { id: 'c4', text: '아침, 머리가 무겁고 몸이 처진다' }, { id: 'c6', text: '그날 밤 피곤을 쫓으려 또 캔을 찾는다', ok: true }])),
            IT(MB('바꿀 수 있었던 장면마다 알맞은 대안을 이어 보세요.', [['밤 11시 첫 캔을 딸 때', '물을 마시고 중요한 것부터 정리'], ['새벽 1시 두 번째 캔', '불을 끄고 지금이라도 자기'], ['그날 밤 또 캔을 찾을 때', '음료 없이 일찍 자기']], [], { title: '대신 이렇게' }),
              MB('장면 두 개에 알맞은 대안을 이어 보세요.', [['밤 11시 첫 캔을 딸 때', '물을 마시고 중요한 것부터 정리'], ['그날 밤 또 캔을 찾을 때', '음료 없이 일찍 자기']], [], { title: '대신 이렇게' }),
              MB('바꿀 장면마다 대안을 이어 보세요(어울리지 않는 카드는 남겨요).', [['밤 11시 첫 캔을 딸 때', '물을 마시고 중요한 것부터 정리'], ['새벽 1시 두 번째 캔', '불을 끄고 지금이라도 자기'], ['그날 밤 또 캔을 찾을 때', '음료 없이 일찍 자기']], ['커피로 바꿔 마시기', '한 캔만 더 마시기'], { title: '대신 이렇게' }),
              { conclude: '피곤을 음료로 막으면 다음 날 또 피곤해지는 고리가 생겨요. 고리는 잠을 지키는 선택으로 끊을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가람이의 하루에서 바꿀 장면 하나를 골라, 대신 무엇을 하면 좋을지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '가람이가 고리를 끊을 수 있는 행동에 ○ 해요.', options: ['음료 없이 일찍 자기', '한 캔 더 마시기'], answer: '음료 없이 일찍 자기' }] },
        notes: '가람은 가상 인물이다. 학생에게 밤샘이나 음료를 마신 경험을 발표시키지 않는다.',
      }),
      M('activity.choice', {
        title: '단체 에너지 음료 갈림길', method: '딜레마 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길을 두 번 골라 결과를 본다(근거 고르기 없음).', base: '갈림길을 세 번 골라 다음 날 아침까지 따라가고 가장 알맞은 근거를 고른다.', challenge: '한 길을 끝까지 간 뒤 되돌아가 다른 길도 끝까지 가 보고 두 결과를 견준다.' },
        activity: {
          title: '단체 에너지 음료 갈림길', tool: 'dilemma',
          teacher: '"친구들이 다 같이 마시자고 할 때 거절하면 정말 무리에서 빠질까요?" 학생마다 한 길을 다음 날 아침까지 따라가게 한 뒤, 되돌아가 다른 길의 결과와 견주게 한다. "한 번쯤은 괜찮다"는 학생에게 "시험 전날 밤의 한 번은 다음 날 시험에 어떤 영향을 줄까요?"라고 되묻는다. 끝 장면에서 근거를 고를 때 나의 잠·친구와의 관계·다음 날 컨디션을 함께 따지게 한다.',
          task: '시험 전날 친구들이 단체로 에너지 음료를 사자는 장면에서 길을 골라 다음 날까지 결과를 따라가고, 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구들이 단체로 음료를 사자고 해요. 두 번 골라 결과를 보세요.', base: '친구들이 단체로 음료를 사자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 되돌아가 다른 길도 끝까지 가 보고 근거를 고르세요.' },
              '시험 전날 편의점', D1, [['plan', 'keep', 'bed'], ['home']], R1, ['r1', 'r2'], { explore: 2 }),
            DIL({ easy: '밤 10시 편의점에서 음료를 골라요. 두 번 골라 결과를 보세요.', base: '밤 10시 편의점에서 음료를 골라요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 다른 길도 끝까지 가 보고 두 결과를 견주어 근거를 고르세요.' },
              '학원 끝난 밤', D2, [['water', 'share', 'plan2']], R2, ['r1', 'r2'], { explore: 2 }),
            DIL({ easy: '이미 밤새 마시기로 한 뒤라도 바꿀 수 있어요. 두 번 골라 결과를 보세요.', base: '밤새 마시기로 한 뒤에도 바로잡을 길을 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '바로잡는 길과 그대로 가는 길을 둘 다 끝까지 가 보고 근거를 고르세요.' },
              '이미 음료를 산 밤', { text: '친구들과 에너지 음료를 사 와 밤새 공부하기로 했다. 첫 캔을 따려는 참이다.', ask: '지금 어떻게 할까?', motif: 'house', choices: D1.choices.filter((c) => c.id === 'buy').map((c) => Object.assign({}, c, { text: '그대로 마시며 밤새 공부한다' })).concat([
                { id: 'stopnow', text: '"나는 지금 자고 아침에 볼게"라고 말한다', result: '친구들이 놀라지만 말리지는 않는다.', impact: [{ who: '나', text: '잠을 지킨다', tone: 1 }], ending: '처음 계획을 바꿔도 늦지 않았어요.' }]) },
              [['buy', 'sleep', 'water'], ['stopnow']], R1, ['r1', 'r2'], { explore: 2 },
              { conclude: '잠을 줄이고 음료로 버티는 길은 다음 날 컨디션을 잃게 해요. 처음에 못 지켰어도 중간에 바로잡을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '시험 전날 친구들이 단체로 에너지 음료를 사자고 할 때 가장 알맞은 행동은?', options: ['분위기를 위해 한 캔만 산다', '내 잠 계획을 웃으며 말하고 정한 시간에 잔다', '말없이 피한다'], answer: '내 잠 계획을 웃으며 말하고 정한 시간에 잔다' }] },
      }),
      M('activity.effects', {
        title: '카페인 결과와 고리', method: '영향 원인·결과 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '결과 카드 3장씩만 가지에 붙이고, 놓으면 바로 맞는지 알려 준다.', base: '결과 카드 6장을 몸·생활 가지에 나누고, 되풀이 고리를 차례로 놓는다.', challenge: '고리를 놓은 뒤 고리를 끊는 행동을 고르는데 함정 카드가 더 섞인다.' },
        activity: {
          title: '카페인 결과와 고리', tool: 'mindmap',
          teacher: '"카페인을 많이 마시면 생기는 일 가운데 다시 처음으로 돌아가게 만드는 것은 무엇일까요?" 결과 카드를 몸과 생활 가지로 나눈 뒤, 그 가운데 네 장으로 되풀이 고리를 만들게 한다. "에너지 음료를 마시면 공부 효율이 오른다"는 학생에게 "깨어 있는 시간이 늘어도 다음 날 졸면 공부한 시간은 늘어난 걸까요?"라고 되묻는다. 고리의 어느 칸이든 끊으면 전체가 멈춘다는 점을 짚는다.',
          task: '\'카페인을 많이 마시면\' 가지에 결과 카드를 나누어 붙이고, 그 가운데 되풀이되는 고리를 찾아 끊는 행동을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('결과 카드를 \'몸에 생기는 일\'과 \'생활에 생기는 일\' 가지에 나누세요(맞지 않는 카드는 남겨요).', ['몸에 생기는 일', '생활에 생기는 일'], EFFECT, { topic: '카페인을 많이 마시면' }),
              SB('결과 카드 3장씩을 두 가지에 나누세요.', ['몸에 생기는 일', '생활에 생기는 일'], pickCards(EFFECT, ['e1', 'e2', 'e3', 'e4', 'e5', 'e6']), { topic: '카페인을 많이 마시면' })),
            IT(OB('되풀이되는 고리를 차례대로 놓으세요.', LOOP, { topic: '되풀이 고리' }),
              OB('되풀이되는 고리 세 칸을 차례대로 놓으세요.', LOOP.slice(0, 3), { topic: '되풀이 고리' }),
              OB('되풀이되는 고리를 차례대로 놓으세요(고리에 들지 않는 카드는 남겨요).', LOOP, { topic: '되풀이 고리' }, [{ id: 'lx', text: '키가 더 빨리 자란다' }])),
            IT(PB('고리를 끊는 행동만 골라 담으세요.', '고리를 끊는 행동', [
              { id: 'b1', text: '정한 시간에 잠자리에 들기', ok: true }, { id: 'b2', text: '오후 늦게는 카페인 음료 마시지 않기', ok: true },
              { id: 'b3', text: '졸릴 때 잠깐 쉬고 스트레칭하기', ok: true }, { id: 'b4', text: '졸리면 한 캔 더 마시기' }], { topic: '고리 끊기' }),
              PB('고리를 끊는 행동만 골라 담으세요.', '고리를 끊는 행동', [{ id: 'b1', text: '정한 시간에 잠자리에 들기', ok: true }, { id: 'b4', text: '졸리면 한 캔 더 마시기' }, { id: 'b3', text: '졸릴 때 잠깐 쉬고 스트레칭하기', ok: true }], { topic: '고리 끊기' }),
              PB('고리를 끊는 행동만 골라 담으세요(헷갈리는 카드가 섞여 있어요).', '고리를 끊는 행동', [
                { id: 'b1', text: '정한 시간에 잠자리에 들기', ok: true }, { id: 'b2', text: '오후 늦게는 카페인 음료 마시지 않기', ok: true },
                { id: 'b3', text: '졸릴 때 잠깐 쉬고 스트레칭하기', ok: true }, { id: 'b4', text: '졸리면 한 캔 더 마시기' },
                { id: 'b5', text: '에너지 음료를 커피 음료로 바꾸기' }, { id: 'b6', text: '주말에 몰아서 자기' }], { topic: '고리 끊기' }),
              { conclude: '카페인으로 졸음을 막으면 잠 → 피곤 → 또 음료로 이어지는 고리가 생겨요. 잠 시간을 지키는 것이 고리를 끊는 가장 쉬운 방법이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '되풀이 고리를 네 칸으로 쓰고, 끊을 칸에 ○ 해요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '고카페인 음료 → 잠이 늦어짐 → 다음 날 피곤 → 또 음료' }] },
      }),
      M('activity.timeplan', {
        title: '시험 주간 하루 시간 나누기', method: '시간 예산 짜기', tool: 'economy', minutes: 16,
        levels: { easy: '활동 카드를 잠·공부·쉬기 3칸에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '활동 카드를 잠·공부·쉬기·식사 4칸에 나누고(함정 카드는 남김), 시험 전날 저녁 계획 6칸을 차례로 놓는다.', challenge: '잠을 먼저 정한 날과 밤새 버틴 날의 다음 날 모습을 견주어 나눈다.' },
        activity: {
          title: '시험 주간 하루 시간 나누기', tool: 'economy',
          teacher: '"하루는 누구에게나 24시간인데, 잠 칸을 빼면 공부 시간이 정말 늘어날까요?" 활동 카드를 나눈 뒤 시험 전날 저녁 계획을 차례로 놓게 한다. "잠은 시험 끝나고 몰아서 자면 된다"는 학생에게 "오늘 밤 줄인 잠을 다음 주에 자면, 내일 시험 볼 때의 머리는 어떨까요?"라고 되묻는다. 시간 계획은 잠 칸을 가장 먼저 정하고 남은 시간을 나눈다는 점을 짚는다. 교구가 시간 막대를 그리지 못해 카드로 나눈다.',
          task: '시험 주간 하루의 활동 카드를 잠·공부·쉬기·식사 칸에 나누고, 잠 칸을 꼭 넣어 시험 전날 저녁 계획을 차례로 세워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('하루 활동 카드를 네 칸에 나누세요(계획에 넣지 않을 카드는 남겨요).', ['잠', '공부', '쉬기', '식사'], DAY),
              SB('하루 활동 카드를 세 칸에 나누세요.', ['잠', '공부', '쉬기'], pickCards(DAY, ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']))),
            IT(OB('시험 전날 저녁 계획을 시간 차례로 놓으세요(넣지 않을 카드는 남겨요).', NIGHT, {}, [{ id: 'nx', text: '12시 에너지 음료 마시고 더 공부' }]),
              OB('시험 전날 저녁 계획 세 칸을 시간 차례로 놓으세요.', pickCards(NIGHT, ['n1', 'n2', 'n6']))),
            IT(PB('잠 칸을 지키는 계획만 골라 담으세요.', '잠을 지키는 계획', [
              { id: 'p1', text: '잠잘 시각을 먼저 정해 두기', ok: true }, { id: 'p2', text: '잠자기 30분 전 휴대전화 내려놓기', ok: true },
              { id: 'p3', text: '어려운 과목을 저녁 이른 시간에', ok: true }, { id: 'p4', text: '남은 공부는 새벽까지 끝내기' }, { id: 'p5', text: '졸리면 고카페인 음료 마시기' }]),
              null,
              SB('두 날의 계획과 다음 날 모습을 견주어 나누세요(어느 쪽도 아닌 카드는 남겨요).', ['잠을 먼저 정한 날', '밤새 버틴 날'], [
                { id: 'q1', text: '11시에 잠자리, 아침밥 먹고 등교', to: '잠을 먼저 정한 날' }, { id: 'q2', text: '1교시부터 문제에 집중', to: '잠을 먼저 정한 날' },
                { id: 'q3', text: '새벽 3시까지 음료 마시며 공부', to: '밤새 버틴 날' }, { id: 'q4', text: '시험 중 졸음이 쏟아짐', to: '밤새 버틴 날' },
                { id: 'q5', text: '잠은 그대로인데 점수가 저절로 오름' }]),
              { conclude: '시간 계획은 잠 칸을 가장 먼저 정하고, 남은 시간에 공부·쉬기·식사를 나눠요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 시험 주간 하루 계획을 써요(잠 칸부터).', columns: ['칸', '시간과 할 일'], cells: [['잠', ''], ['공부', ''], ['쉬기·식사', '']], answer: '(예) 밤 11시~아침 7시, 저녁 7시~10시 복습, 저녁 식사·10분 걷기' }] },
        notes: 'economy 교구는 돈(원)만 세어 24시간 막대를 그리지 못한다. 시간 예산은 카드 나누기·차례로 했다. 칠판에 24칸 막대를 그려 함께 칠하면 좋다.',
      }),

      // ---- 정리 ----
      M('wrap.write', {
        title: '시험 기간 컨디션 계획 글', method: '컨디션 계획 짧은 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 문장 틀("나는 ___시에 잔다. 왜냐하면 ___. 졸릴 때는 ___")을 칠판에 적어 주고 채워 쓰게 한다.', base: '컨디션 계획을 세 문장으로 쓰고 기준 3개(구체성·근거·실천 가능성)를 스스로 점검한다.', challenge: '교사가 근거에 오늘 본 가상 사례(가람이의 하루)를 넣어 보라고 덧붙이고, 짝과 바꿔 읽게 한다.' },
        wrap: {
          teacher: '"\'잠을 잘 자자\'와 \'11시에 휴대전화를 내려놓고 잔다, 잠을 줄이면 다음 날 집중이 떨어지니까\' 가운데 어느 계획이 지켜질까요?" 두 문장을 견주어 읽은 뒤 나의 시험 기간 컨디션 계획을 세 문장으로 쓰게 한다. "의지가 강하면 계획은 필요 없다"는 학생에게 시각과 행동이 정해진 계획이 지키기 더 쉽다고 말해 준다. 학생 이름이나 실제 학원 일정은 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '나의 시험 기간 컨디션 계획을 세 문장으로 쓰세요(잠·졸릴 때·음료).', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '컨디션 계획', starter: '나는 ___시에 잔다. 왜냐하면 ___. 졸릴 때는 ___.', placeholder: '예: 시험 주간에는…' },
              prompt: '컨디션 계획을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['시각이나 행동을 구체적으로 썼다', '그렇게 하는 근거를 썼다', '내가 실제로 지킬 수 있다'] }, difficulty: 0.3 },
            { type: 'choice', prompt: '"에너지 음료를 마시면 공부 효율이 오른다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['음료는 비싸다', '깨어 있어도 잠이 부족하면 다음 날 집중과 기억이 떨어진다', '어른들이 마시지 말라고 했다'], answer: 1, difficulty: 0.2, explain: '깨어 있는 시간과 머리에 남는 공부는 달라요.' },
            { type: 'mood', prompt: '오늘 세운 계획을 지킬 자신이 얼마나 있나요?' },
          ],
        },
        worksheet: {
          title: '나의 시험 기간 컨디션 계획',
          items: [
            { type: 'short', prompt: '나의 시험 기간 컨디션 계획을 세 문장으로 써요(잠·졸릴 때·음료).' },
            { type: 'check', prompt: '내 계획을 기준표로 점검해요.', options: ['시각이나 행동이 구체적이다', '근거가 들어 있다', '실제로 지킬 수 있다'] },
          ],
          easy: { note: '"나는 ___시에 잔다. 왜냐하면 ___. 졸릴 때는 ___." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 계획을 써요.', text: '나는 ___시에 잔다. 왜냐하면 ___ 때문이다. 졸릴 때는 ___.', answer: '(예) 11, 잠이 부족하면 다음 날 집중이 떨어지기, 잠깐 걷고 스트레칭한다' }] },
        },
      }),
      M('wrap.reflect', {
        title: '\'음료가 필요하다\' 생각의 크기', method: '생각 변화 크기', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 수업 뒤 생각의 크기 하나만 고르게 한다.', base: '수업 전과 뒤의 생각 크기를 각각 고르고, 바뀐 까닭을 한 줄로 말한다.', challenge: '생각이 바뀌지 않은 학생에게는 그 까닭을 근거와 함께 한 줄로 써 보게 한다(바뀌지 않아도 괜찮다고 먼저 말한다).' },
        wrap: {
          teacher: '"수업 전에 \'시험 기간엔 에너지 음료가 꼭 필요하다\'는 생각은 얼마나 컸나요? 지금은 어떤가요?" 두 눈금을 차례로 고르게 한 뒤 바뀐 까닭을 짝에게 한 줄로 말하게 한다. "생각이 그대로면 수업을 잘못 들은 것"이라는 말이 나오면, 생각이 그대로여도 근거를 대어 말하면 된다고 짚는다. 실제로 마시는 양은 묻지 않는다.',
          exitTicket: [
            SCALE('수업 전: 시험 기간에는 에너지 음료가 꼭 필요하다', '걱정', '수업 전에 이 생각은 얼마나 컸는지 골라요.'),
            SCALE('수업 뒤: 시험 기간에는 에너지 음료가 꼭 필요하다', '걱정', '지금 이 생각은 얼마나 큰지 골라요.'),
            { type: 'short', prompt: '생각의 크기가 바뀌었다면(또는 그대로라면) 그 까닭을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '내 생각의 크기',
          items: [
            { type: 'table', prompt: '\'에너지 음료가 꼭 필요하다\' 생각의 크기를 1~5로 적어요.', columns: ['때', '크기(1~5)'], cells: [['수업 전', ''], ['수업 뒤', '']] },
            { type: 'short', prompt: '생각이 바뀐(또는 그대로인) 까닭을 오늘 배운 근거로 한 줄 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 담배·전자담배 권유, 역할극 대본으로 거절하기 (saf-drug.m.vape-refuse) ====
  {
    const M = MK('vape-refuse', [7]);
    const ROUTE = { grid: [6, 4], title: '가상의 등하굣길', legend: false, places: [
      { name: '학교', icon: 'school', at: [0, 0] }, { name: '학교 뒤 골목', icon: 'dot', at: [1, 1] }, { name: '상담실', icon: 'office', at: [0, 1] },
      { name: '공원 정자', icon: 'park', at: [3, 1] }, { name: '지구대', icon: 'police', at: [5, 0] }, { name: '편의점', icon: 'market', at: [3, 3] },
      { name: '학원 건물 뒤 계단', icon: 'library', at: [4, 2] }, { name: '우리 집', icon: 'apartment', at: [5, 3] },
    ] };
    const DATA = [['친구가 권해서', 40], ['호기심', 25], ['스트레스', 15], ['멋있어 보여서', 12], ['가족이 피워서', 8]];
    const DATA_T = '처음 흡연을 시작한 까닭(가상 자료)';
    const STEPS = ['분명히 거절하기', '까닭 말하기', '대안 내기', '자리 뜨기'];
    const C1 = { text: '친구 단톡방에 "토요일에 다 같이 전자담배 해 보자, 너도 올 거지?"라는 메시지가 올라왔다.', ask: '나는 어떻게 답할까?', motif: 'house', choices: [
      { id: 'go', text: '"그래, 갈게"라고 답한다', result: '"역시!"라는 메시지가 쏟아진다.', impact: [{ who: '나', text: '거절하기 더 어려워진다', tone: -1 }], why: '처음에 분명히 말하지 않으면 그 자리에서 거절하기가 더 어려워요.', end: '가겠다고 답했어요.',
        next: { text: '토요일, 공원에서 친구가 기기를 내밀며 "한 번만"이라고 한다.', choices: [
          { id: 'try', text: '한 번만 해 본다', result: '다음 주에 또 하자는 말을 듣는다.', impact: [{ who: '나', text: '니코틴에 노출된다', tone: -1 }], why: '가끔 해도 니코틴 의존이 생길 수 있어요.' },
          { id: 'leave', text: '"생각해 보니 싫어"라고 하고 먼저 일어난다', result: '친구 하나가 "나도 사실 싫었어"라며 따라온다.', impact: [{ who: '따라온 친구', text: '함께 빠져나온다', tone: 1 }], end: '늦게라도 거절하고 자리를 떴어요.',
            next: { text: '다음 날 단톡방에 "어제 왜 갔냐"는 놀림이 올라온다.', choices: [
              { id: 'reply', text: '"난 안 해. 다른 거 하면 같이 놀자"라고 짧게 답한다', result: '몇 명이 "다음엔 축구 하자"고 답한다.', impact: [{ who: '친구들', text: '관계가 이어진다', tone: 1 }] },
              { id: 'out', text: '말없이 단톡방을 나간다', result: '까닭을 모르는 친구들의 오해가 커진다.', impact: [{ who: '나', text: '친구들과 멀어진다', tone: -1 }], why: '짧게라도 내 생각을 말하면 관계를 지킬 수 있어요.' }] } }] } },
      { id: 'no', text: '"난 안 해. 대신 노래방 가자"라고 답한다', result: '"에이, 재미없게"라는 메시지가 온다.', impact: [{ who: '나', text: '내 생각을 지킨다', tone: 1 }], end: '분명히 거절하고 대안을 냈어요.',
        next: { text: '한 친구가 "한 번만 같이 하자, 안 하면 우리랑 안 노는 거다"라고 압박한다.', choices: [
          { id: 'give', text: '"알았어, 한 번만"이라고 답한다', result: '토요일에 그 자리에 가게 된다.', impact: [{ who: '나', text: '압박에 밀린다', tone: -1 }], why: '"한 번만"은 다음 권유로 이어지기 쉬워요.' },
          { id: 'firm', text: '"그래도 안 해. 다른 걸로 놀자"라고 다시 말한다', result: '단톡방이 잠깐 조용해진다.', impact: [{ who: '나', text: '생각을 지킨다', tone: 1 }], end: '압박에도 다시 거절했어요.',
            next: { text: '한 친구가 개인 메시지로 "사실 나도 하기 싫어"라고 보낸다.', choices: [
              { id: 'together', text: '"그럼 우리 둘이 다른 거 하자"고 답한다', result: '둘이 함께 거절할 힘이 생긴다.', impact: [{ who: '그 친구', text: '혼자가 아니게 된다', tone: 1 }] },
              { id: 'alone', text: '"알아서 해"라고 답한다', result: '그 친구는 혼자 고민하다 토요일에 나간다.', impact: [{ who: '그 친구', text: '혼자 남는다', tone: -1 }], why: '같은 마음인 친구와 함께하면 거절이 훨씬 쉬워요.' }] } }] } },
      { id: 'silent', text: '답하지 않고 읽기만 한다', result: '"온다는 걸로 알게"라는 메시지가 온다.', impact: [{ who: '나', text: '가는 사람이 된다', tone: -1 }], why: '침묵은 거절로 읽히지 않을 수 있어요.', ending: '답을 안 했더니 가는 사람으로 정해졌어요.' }] };
    const RC1 = [{ id: 'r1', text: '가끔 해도 니코틴 의존이 생길 수 있다' }, { id: 'r2', text: '분명히 거절하고 대안을 내면 관계를 지킬 수 있다' },
      { id: 'r3', text: '거절하면 무리에서 빠진다', why: '같은 마음인 친구가 생각보다 많아요. 대안 놀이로 관계를 이어 갈 수 있어요.' }, { id: 'r4', text: '전자담배는 담배가 아니니 괜찮다', why: '전자담배도 니코틴이 들어 있을 수 있는 담배예요.' }];
    const C2 = { text: '반 단톡방에 한 친구가 전자담배 사진을 올리며 "이거 수증기라 괜찮아, 다들 한 번씩?"이라고 썼다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'like', text: '웃는 이모티콘을 단다', result: '분위기가 "다들 한다"로 흘러간다.', impact: [{ who: '반 친구들', text: '괜찮다고 여기게 된다', tone: -1 }], why: '가벼운 반응도 "다들 괜찮다"는 신호가 돼요.', end: '웃는 이모티콘을 달았어요.',
        next: { text: '그 친구가 "너도 하는 거지?"라고 개인 메시지를 보낸다.', choices: [
          { id: 'yes', text: '"응"이라고 답한다', result: '다음 모임에 이름이 올라간다.', impact: [{ who: '나', text: '권유 자리에 끼게 된다', tone: -1 }], why: '분위기에 맞춰 답하면 거절할 때를 놓쳐요.' },
          { id: 'fact', text: '"수증기만 나오는 거 아니래. 난 안 할래"라고 답한다', result: '그 친구가 "아는 척하네"라며 비꼰다.', impact: [{ who: '나', text: '생각을 밝힌다', tone: 1 }], end: '사실을 들어 거절했어요.',
            next: { text: '그 친구가 "아는 척하네"라며 비꼬는 말을 이어 보낸다.', choices: [
              { id: 'calm', text: '"그냥 내 생각이야. 내일 축구 하자"라고 답한다', result: '친구가 "그래, 축구는 하자"라고 답한다.', impact: [{ who: '그 친구', text: '관계가 이어진다', tone: 1 }] },
              { id: 'fight', text: '같이 비꼬는 말로 맞받는다', result: '말다툼이 커지고 반 분위기가 나빠진다.', impact: [{ who: '반 친구들', text: '편이 갈린다', tone: -1 }], why: '맞받아치기보다 짧게 내 생각을 말하고 화제를 돌려요.' }] } }] } },
      { id: 'fact', text: '"수증기만 나오는 거 아니래"라고 짧게 남긴다', result: '몇 명이 "진짜?" 하고 묻는다.', impact: [{ who: '반 친구들', text: '다시 생각해 본다', tone: 1 }], end: '사실을 짧게 남겼어요.',
        next: { text: '사진을 올린 친구가 "분위기 깨지 마"라고 한다.', choices: [
          { id: 'back', text: '"미안, 걱정돼서 그래"라고 부드럽게 말한다', result: '그 친구가 "알았어"라며 말을 줄인다.', impact: [{ who: '그 친구', text: '체면을 지킨다', tone: 1 }], end: '부드럽게 내 걱정을 말했어요.',
            next: { text: '단톡방이 어색하게 조용해졌다.', choices: [
              { id: 'ball', text: '"내일 점심에 축구 할 사람?"이라고 화제를 돌린다', result: '여러 명이 축구 하자고 답한다.', impact: [{ who: '반 친구들', text: '다른 놀이로 모인다', tone: 1 }] },
              { id: 'join', text: '"나도 한번 해 볼까"라며 맞장구친다', result: '"역시 너도!"라는 메시지가 쏟아진다.', impact: [{ who: '나', text: '권유 자리에 끼게 된다', tone: -1 }], why: '어색함을 풀려고 내 생각을 바꾸지 않아도 돼요.' }] } },
          { id: 'quit', text: '단톡방에서 바로 나간다', result: '남은 친구들끼리 "다들 한다"는 말이 이어진다.', impact: [{ who: '반 친구들', text: '다른 목소리를 못 듣는다', tone: -1 }], why: '나가기 전에 짧게 내 생각과 대안을 남길 수 있어요.' }] } },
      { id: 'mute', text: '알림을 끄고 못 본 척한다', result: '"다들 괜찮대"라는 메시지만 남는다.', impact: [{ who: '반 친구들', text: '잘못된 말만 듣는다', tone: -1 }], why: '한 사람의 짧은 말이 분위기를 바꿀 수 있어요.', ending: '못 본 척하는 사이 "다들 한다"는 분위기가 굳었어요.' }] };
    const RC2 = [{ id: 'r1', text: '전자담배에서 나오는 것은 수증기만이 아니다' }, { id: 'r2', text: '"다들 한다"는 분위기는 한 사람의 말로도 바뀔 수 있다' },
      { id: 'r3', text: '단톡방 말은 장난이라 상관없다', why: '단톡방 분위기가 실제 모임과 권유로 이어져요.' }, { id: 'r4', text: '맞받아쳐야 무시당하지 않는다', why: '짧게 내 생각을 말하고 화제를 돌려도 존중받을 수 있어요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.myth', {
        title: '전자담배 문장, 오해일까 사실일까', method: '오해·사실 판정과 근거', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 문장 4장을 하나씩 읽어 주고 오해·사실 가지에 함께 붙인다.', base: '문장 6장을 오해·사실 가지에 나누고, 사실 문장마다 근거를 한 가지 말한다.', challenge: '오해 문장 하나를 골라 그런 오해가 왜 퍼졌을지(향·모양·광고) 짐작해 말한다.' },
        intro: {
          teacher: '"\'전자담배는 수증기일 뿐\'이라는 말, 들어 본 적 있나요? 오해일까요, 사실일까요?" 문장 카드를 하나씩 읽고 시연 단추로 오해·사실 가지에 나뉘는 모습을 보인다. "향이 좋으면 몸에 덜 해롭다"는 말이 나오면 "향과 니코틴은 같은 것일까요, 다른 것일까요?"라고 되묻는다. 오늘은 오해를 근거로 바로잡고, 권유를 받았을 때 쓸 거절 대본을 만든다고 밝힌다.',
          student: '전자담배에 대한 문장을 오해와 사실로 나누어 보고, 사실이라고 생각한 까닭을 짝에게 한 가지 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '전자담배, 진짜일까?', slots: ['오해', '사실'], cards: [
            { id: 'm1', text: '전자담배는 수증기일 뿐이다' }, { id: 'f1', text: '니코틴은 의존을 일으킨다' }, { id: 'm2', text: '가끔 피우면 중독되지 않는다' },
            { id: 'f2', text: '전자담배도 담배의 한 가지다' }, { id: 'm3', text: '향이 나면 몸에 덜 해롭다' }, { id: 'f3', text: '청소년에게 담배를 팔 수 없다' }], shuffle: false },
            sequence: [{ sort: { 오해: ['m1', 'm2', 'm3'], 사실: ['f1', 'f2', 'f3'] } }] },
          art: { draw: 'a paper-cut classroom board with two paper branches labeled myth and fact, small paper speech bubbles being sorted between them', banner: '오해일까, 사실일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학생에게 흡연·전자담배 경험을 묻지 않는다. 기기 모양이나 쓰는 법은 다루지 않는다.',
      }),
      M('intro.route', {
        title: '등하굣길 권유·도움 지점 핀', method: '등하굣길 위험·도움 지점', tool: 'map', minutes: 6,
        levels: { easy: '교사가 권유받기 쉬운 곳 하나, 도움 청할 곳 하나만 함께 핀으로 꽂는다.', base: '권유받기 쉬운 곳 2곳과 도움 청할 곳 2곳을 꽂고 곳마다 까닭을 말한다.', challenge: '권유받기 쉬운 곳을 피해 집에 가는 길을 손으로 짚어 말한다.' },
        intro: {
          teacher: '"권유는 어디서 가장 많이 생길까요? 그리고 그때 가장 가까운 도움은 어디에 있을까요?" 가상 등하굣길 칸 지도를 띄우고 시연 단추로 학교 뒤 골목·공원 정자·지구대·상담실에 핀이 꽂히는 모습을 보인다. "도움 청할 곳은 집뿐"이라는 말에는 "집에 가기 전, 지금 서 있는 자리에서 가장 가까운 어른은 어디에 있을까요?"라고 되묻는다. 어른 눈이 닿지 않는 곳에서 권유가 생기기 쉽다는 점을 짚는다.',
          student: '가상 등하굣길 지도에서 권유받기 쉬운 곳과 도움을 청할 곳을 찾아보고, 왜 그곳인지 까닭을 한 가지씩 말해요.',
          demo: { tool: 'map', options: ROUTE, sequence: [{ place: '학교 뒤 골목' }, { place: '공원 정자' }, { place: '지구대' }, { place: '상담실' }] },
          art: { draw: 'a paper-cut neighborhood route map from a school to apartments with a hidden alley, a park pavilion and a police box marked by small paper pins', banner: '어디서 권유가 생길까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.script', {
        title: '거절 대본 말풍선', method: '역할극 대본 말풍선', tool: 'story', minutes: 16,
        levels: { easy: '빈 말풍선 2개(나의 거절·까닭)만 채우고, 놓으면 바로 맞는지 알려 준다.', base: '빈 말풍선 4개(거절·까닭·대안·끼어드는 친구)를 채우고 모둠에서 소리 내어 읽는다.', challenge: '함정 대사가 섞인 판에서 채우고, 활동지에 끼어드는 친구의 대사를 직접 쓴다.' },
        activity: {
          title: '거절 대본 말풍선', tool: 'story',
          teacher: '"권하는 선배, 거절하는 나, 끼어드는 친구 — 세 사람의 대사가 어떻게 이어져야 모두 그 자리를 벗어날까요?" 말풍선을 채운 뒤 모둠에서 세 역할을 나눠 소리 내어 읽게 한다. "선배 말은 거절하면 안 된다"는 학생에게 "선배가 권하는 것이 내 몸에 해로운 것이라면, 예의를 지키는 길은 받는 것일까요, 정중하게 거절하는 것일까요?"라고 되묻는다. 끼어드는 친구는 싸우는 대신 함께 자리를 뜨는 말을 한다는 점을 짚는다.',
          task: '권하는 선배·거절하는 나·끼어드는 친구 세 역할의 대본에서 빈 말풍선을 알맞은 대사로 채우고, 모둠에서 읽어 봐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(FB('공원 정자 장면의 빈 말풍선을 채우세요.', [
              ['(선배: "이거 한 번만 해 봐. 다들 해.") "___"', '"아니요, 저는 안 할래요."', '나'], ['(선배: "왜? 한 번은 괜찮아.") "___"', '"니코틴은 한 번만으로 안 끝나요."', '나'],
              ['(선배: "그럼 뭐 할 건데?") "___"', '"저희 매점 가려고요."', '나'], ['(친구가 다가와서) "___"', '"얘랑 약속 있어요. 가자!"', '친구']], [], { title: '공원 정자에서' }, '나'),
              FB('공원 정자 장면의 빈 말풍선 두 개를 채우세요.', [
                ['(선배: "이거 한 번만 해 봐. 다들 해.") "___"', '"아니요, 저는 안 할래요."', '나'], ['(선배: "왜? 한 번은 괜찮아.") "___"', '"니코틴은 한 번만으로 안 끝나요."', '나']], [], { title: '공원 정자에서' }, '나'),
              FB('공원 정자 장면의 빈 말풍선을 채우세요(어울리지 않는 대사는 남겨요).', [
                ['(선배: "이거 한 번만 해 봐. 다들 해.") "___"', '"아니요, 저는 안 할래요."', '나'], ['(선배: "왜? 한 번은 괜찮아.") "___"', '"니코틴은 한 번만으로 안 끝나요."', '나'],
                ['(선배: "그럼 뭐 할 건데?") "___"', '"저희 매점 가려고요."', '나'], ['(친구가 다가와서) "___"', '"얘랑 약속 있어요. 가자!"', '친구']], ['"선배 말이니까 한 번만요."', '"너 그거 하면 혼난다!"'], { title: '공원 정자에서' }, '나')),
            IT(FB('쉬는 시간 교실 장면의 빈 말풍선을 채우세요.', [
              ['(친구: "이거 향이 달아. 너도 해 볼래?") "___"', '"난 안 해."', '나'], ['(친구: "수증기라서 괜찮다니까.") "___"', '"수증기만 나오는 게 아니래."', '나'],
              ['(친구: "너만 빠지면 재미없잖아.") "___"', '"대신 점심에 같이 농구 하자."', '나'], ['(옆 친구가 끼어들며) "___"', '"농구 좋다! 나도 낄래."', '옆 친구']], [], { title: '쉬는 시간 교실' }, '나'),
              FB('쉬는 시간 교실 장면의 빈 말풍선 두 개를 채우세요.', [
                ['(친구: "이거 향이 달아. 너도 해 볼래?") "___"', '"난 안 해."', '나'], ['(친구: "너만 빠지면 재미없잖아.") "___"', '"대신 점심에 같이 농구 하자."', '나']], [], { title: '쉬는 시간 교실' }, '나')),
            IT(OB('거절 대본의 대사를 이어지는 차례로 놓으세요.', [
              { id: 'o1', text: '선배: "한 번만 해 봐."' }, { id: 'o2', text: '나: "아니요, 안 할래요."' }, { id: 'o3', text: '선배: "왜? 다들 하는데."' },
              { id: 'o4', text: '나: "니코틴은 끊기 어렵대요."' }, { id: 'o5', text: '친구: "얘랑 약속 있어요, 가자!"' }, { id: 'o6', text: '나: "다음에 봬요." (자리를 뜬다)' }], { title: '대본 차례' }),
              OB('거절 대본의 대사 네 줄을 차례로 놓으세요.', [
                { id: 'o1', text: '선배: "한 번만 해 봐."' }, { id: 'o2', text: '나: "아니요, 안 할래요."' }, { id: 'o3', text: '선배: "왜? 다들 하는데."' }, { id: 'o4', text: '나: "니코틴은 끊기 어렵대요."' }], { title: '대본 차례' }),
              null, { conclude: '거절 대본은 분명한 거절 → 까닭 → 대안 → 자리 뜨기로 이어져요. 끼어드는 친구 한 사람이 그 자리를 함께 벗어나게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '공원 정자 장면에서 끼어드는 친구가 할 대사를 내 말로 한 줄 써요.' }],
          easy: [{ type: 'choice', prompt: '분명한 거절에 ○ 해요.', options: ['"아니요, 저는 안 할래요."', '"음… 나중에요."'], answer: '"아니요, 저는 안 할래요."' }] },
        notes: '역할극에서 기기를 흉내 내는 몸짓은 하지 않게 한다. 거절하는 말과 자리 뜨기만 연습한다.',
      }),
      M('activity.chat', {
        title: '단톡방 압박 갈림길', method: '딜레마 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길을 두 번 골라 결과를 본다(근거 고르기 없음).', base: '갈림길을 세 번 골라 끝까지 가고, 관계·건강·신뢰에 맞는 근거를 고른다.', challenge: '한 길을 끝까지 간 뒤 되돌아가 다른 길도 끝까지 가 보고 두 결과를 견준다.' },
        activity: {
          title: '단톡방 압박 갈림길', tool: 'dilemma',
          teacher: '"단톡방에서 대답하지 않으면 거절한 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 결과 칸의 관계·건강·신뢰 영향을 소리 내어 읽게 한다. "거절하면 무리에서 빠진다"는 학생에게 "끝 장면에서 \'사실 나도 싫어\'라고 말한 친구는 몇 명이었나요?"라고 되묻는다. 침묵은 거절로 읽히지 않을 수 있고, 짧게라도 분명히 말하는 것이 관계를 지킨다는 점을 짚는다.',
          task: '단톡방에서 \'한 번만 같이 하자\'는 압박이 이어지는 장면에서 길을 골라 끝까지 가고, 관계·건강·신뢰에 미치는 영향을 따라가요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '단톡방에 함께 하자는 메시지가 왔어요. 두 번 골라 결과를 보세요.', base: '단톡방에 함께 하자는 메시지가 왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 되돌아가 다른 길도 끝까지 가 보고 근거를 고르세요.' },
              '토요일 약속 단톡방', C1, [['no', 'firm', 'together'], ['go', 'leave', 'reply']], RC1, ['r1', 'r2'], { explore: 2 }),
            DIL({ easy: '반 단톡방에 전자담배 사진이 올라왔어요. 두 번 골라 결과를 보세요.', base: '반 단톡방에 전자담배 사진이 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 다른 길도 끝까지 가 보고 두 결과를 견주어 근거를 고르세요.' },
              '반 단톡방 사진', C2, [['fact', 'back', 'ball'], ['like', 'fact', 'calm']], RC2, ['r1', 'r2'], { explore: 2 }),
            DIL({ easy: '이미 가겠다고 답했어요. 바로잡을 길을 두 번 골라 보세요.', base: '이미 가겠다고 답했어요. 바로잡을 길을 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '가겠다고 답한 뒤 바로잡는 길과 그대로 가는 길을 둘 다 끝까지 가 보고 근거를 고르세요.' },
              '이미 답한 단톡방', { text: '단톡방에 "토요일에 다 같이 전자담배 해 보자"는 메시지에 나는 얼떨결에 "그래"라고 답해 버렸다.', ask: '지금 어떻게 할까?', motif: 'house', choices: C1.choices.filter((c) => c.id === 'go').map((c) => Object.assign({}, c, { text: '그대로 토요일에 나간다' })).concat([
                { id: 'undo', text: '"생각해 보니 난 안 할래. 대신 노래방 가자"라고 다시 보낸다', result: '친구 하나가 "나도 노래방!"이라고 답한다.', impact: [{ who: '나', text: '생각을 되찾는다', tone: 1 }], ending: '한 번 답했어도 다시 말할 수 있었어요.' }]) },
              [['go', 'leave', 'reply'], ['undo']], RC1, ['r1', 'r2'], { explore: 2 },
              { conclude: '침묵이나 "한 번만"은 거절이 아니에요. 짧고 분명한 거절과 대안이 관계와 건강을 함께 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '단톡방에서 "한 번만 같이 하자"는 압박을 받을 때 가장 알맞은 답은?', options: ['답하지 않고 읽기만 한다', '"난 안 해. 대신 다른 거 하자"라고 분명히 답한다', '같이 비꼬는 말로 맞받는다'], answer: '"난 안 해. 대신 다른 거 하자"라고 분명히 답한다' }] },
      }),
      M('activity.data', {
        title: '처음 시작 까닭 그래프', method: '가상 자료 막대그래프 해석', tool: 'chart', minutes: 16,
        levels: { easy: '막대 3개만 보이고 값이 함께 적혀 있다.', base: '막대 5개를 읽고 또래 영향의 크기를 다른 까닭과 견주어 읽는다.', challenge: '마지막 문항에서 이 가상 자료만으로 단정할 수 없는 것을 고른다.' },
        activity: {
          title: '처음 시작 까닭 그래프', tool: 'chart',
          teacher: '"처음 흡연을 시작한 까닭 가운데 가장 큰 막대는 무엇일까요? 그렇다면 예방은 어디에 힘을 써야 할까요?" 이 그래프는 수업용으로 지어낸 가상 자료라는 점을 먼저 밝히고, 막대를 하나씩 읽게 한다. "그럼 친구가 권하면 누구나 시작한다"는 말이 나오면 "이 그래프는 시작한 사람에게만 물었어요. 권유를 받고 거절한 사람은 그래프에 있을까요?"라고 되묻는다. 또래 영향이 크다면 또래끼리 거절을 연습하는 것이 예방이 된다는 점을 짚는다.',
          task: '가상 자료 \'처음 흡연을 시작한 까닭\' 막대그래프를 읽고, 또래 영향의 크기를 찾아 예방에 쓸 점을 정리해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '그래프에서 가장 큰 막대의 까닭을 고르세요.', toolOptions: CH('bar', DATA_T, '%', DATA, { xLabel: '까닭', yLabel: '응답 비율', question: '가장 큰 막대는?', choices: DATA.map((d) => d[0]) }), target: { pick: 0 } },
              { prompt: '막대 3개 가운데 가장 큰 막대의 까닭을 고르세요.', toolOptions: { data: DATA.slice(0, 3), choices: DATA.slice(0, 3).map((d) => d[0]) } }),
            IT({ prompt: '\'친구가 권해서\'는 \'호기심\'보다 몇 %p 큰지 그래프에서 읽어 쓰세요.', toolOptions: CH('bar', DATA_T, '%', DATA, { xLabel: '까닭', yLabel: '응답 비율', question: '몇 %p 큰가요?' }), target: { value: 15 } },
              { toolOptions: { data: DATA.slice(0, 3) } }),
            IT({ prompt: '이 그래프를 예방에 쓴다면 가장 알맞은 것을 고르세요.', toolOptions: CH('bar', DATA_T, '%', DATA, { xLabel: '까닭', yLabel: '응답 비율', question: '예방에 쓸 점은?', choices: ['거절하는 말을 또래끼리 함께 연습한다', '담배 사진을 더 무섭게 보여 준다', '혼자 참으라고만 말한다'] }), target: { pick: 0 } },
              { toolOptions: { data: DATA.slice(0, 3) } },
              { prompt: '이 가상 자료만으로 단정할 수 없는 것을 고르세요.', toolOptions: { question: '이 자료만으로 단정할 수 없는 것은?', choices: ['친구 권유가 가장 큰 까닭으로 나왔다', '권유를 받은 사람은 반드시 시작한다', '호기심도 까닭으로 나왔다'] }, target: { pick: 1 } },
              { conclude: '그래프는 시작한 사람의 까닭을 보여 줄 뿐, 권유를 받은 모두가 시작한다는 뜻은 아니에요. 또래 영향이 크다면 또래가 함께 거절하는 것이 예방이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프에서 읽은 것과 예방에 쓸 점을 써요.', columns: ['읽은 것', '예방에 쓸 점'], cells: [['가장 큰 까닭: ', ''], ['둘째 까닭: ', '']], answer: '친구가 권해서 — 또래끼리 거절 연습, 호기심 — 사실을 알려 주는 정보' }] },
        notes: '그래프는 가상 자료다. 학생에게 주변 사람의 흡연 여부를 묻지 않는다.',
      }),
      M('activity.drill', {
        title: '거절 4단계 짝 연습', method: '거절 기술 순서와 연습 시간', tool: 'timer', minutes: 16,
        levels: { easy: '거절 단계 카드 3장(거절·까닭·자리 뜨기)을 차례로 놓는다.', base: '거절 4단계를 차례로 놓고, 짝 역할극 시간을 맞춘 뒤 스스로 점검한다.', challenge: '다시 권할 때 한 번 더 거절하는 단계까지 5장을 차례로 놓고, 점검 항목이 하나 더 붙는다.' },
        activity: {
          title: '거절 4단계 짝 연습', tool: 'timer',
          teacher: '"거절에도 차례가 있을까요? 까닭부터 길게 말하면 어떻게 될까요?" 단계 카드를 놓은 뒤 짝과 1분씩 역할을 바꿔 연습하게 하고, 끝나면 스스로 점검 칸을 표시하게 한다. "거절은 한 번이면 끝난다"는 학생에게 "선배가 \'왜? 한 번만\' 하고 다시 권하면, 그다음 말은 무엇일까요?"라고 되묻는다. 처음에 "아니"를 먼저 분명히 말하고, 까닭은 짧게 한다는 점을 짚는다.',
          task: '거절 4단계(분명히·까닭·대안·자리 뜨기) 차례를 정하고, 짝 역할극을 시간 재며 한 뒤 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '거절 4단계를 차례로 놓으세요.', toolOptions: { title: '거절 4단계', cards: [STEPS[2], STEPS[0], STEPS[3], STEPS[1]] }, target: { order: STEPS } },
              { prompt: '거절 3단계를 차례로 놓으세요.', toolOptions: { cards: ['자리 뜨기', '분명히 거절하기', '까닭 말하기'] }, target: { order: ['분명히 거절하기', '까닭 말하기', '자리 뜨기'] } },
              { prompt: '다시 권할 때까지 이어지는 거절 5단계를 차례로 놓으세요.', toolOptions: { cards: ['대안 내기', '다시 권하면 한 번 더 거절', '분명히 거절하기', '자리 뜨기', '까닭 말하기'] }, target: { order: ['분명히 거절하기', '까닭 말하기', '대안 내기', '다시 권하면 한 번 더 거절', '자리 뜨기'] } }),
            IT({ prompt: '짝 역할극 시간을 맞추세요: 한 사람 1분(60초), 역할 바꾸기 20초, 두 번.', toolOptions: { title: '짝 역할극 시간', plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { work: 60, rest: 20, rounds: 2 } } }),
            IT({ prompt: '짝 역할극을 마치고 내가 한 것에 스스로 표시하세요.', toolOptions: { title: '역할극 스스로 점검' }, target: { selfCheck: ['처음에 "아니"라고 분명히 말했다', '까닭을 짧게 한 가지 말했다', '대안을 하나 냈다', '자리를 뜨는 말을 했다'] } },
              { prompt: '짝 역할극을 마치고 내가 한 것에 스스로 표시하세요(3가지).', target: { selfCheck: ['처음에 "아니"라고 분명히 말했다', '까닭을 짧게 한 가지 말했다', '자리를 뜨는 말을 했다'] } },
              { prompt: '짝 역할극을 마치고 내가 한 것에 스스로 표시하세요(5가지).', target: { selfCheck: ['처음에 "아니"라고 분명히 말했다', '까닭을 짧게 한 가지 말했다', '대안을 하나 냈다', '다시 권해도 한 번 더 거절했다', '자리를 뜨는 말을 했다'] } },
              { conclude: '거절은 "아니"를 먼저, 까닭은 짧게, 대안을 내고, 그래도 권하면 자리를 떠요. 몸에 익도록 소리 내어 연습해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '거절 4단계마다 내가 쓸 말을 한 줄씩 써요.', columns: ['단계', '내가 쓸 말'], cells: [['분명히 거절', ''], ['까닭', ''], ['대안', ''], ['자리 뜨기', '']], answer: '(예) "아니, 안 할래." / "끊기 어렵대." / "매점 가자." / "먼저 갈게."' }] },
      }),

      // ---- 정리 ----
      M('wrap.slogan', {
        title: '금연 캠페인 한 줄 문구', method: '캠페인 문구와 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 보기 문구("한 번만은 없어요, 니코틴은 다시 부르니까")를 칠판에 적고 고쳐 쓰게 한다.', base: '또래에게 보낼 한 줄 문구를 쓰고 기준 3개(사실·공감·짧음)를 스스로 점검한다.', challenge: '교사가 다른 모둠 문구 하나를 읽어 주고 같은 기준으로 평가해 말하게 한다.' },
        wrap: {
          teacher: '"\'담배 피우면 죽는다!\'와 \'싫다고 말해도 우리는 친구야\' 가운데 또래가 끝까지 읽을 문구는 무엇일까요?" 두 문구를 견주어 읽은 뒤 또래에게 보낼 한 줄 문구를 쓰게 한다. "무섭게 써야 효과가 있다"는 학생에게 겁주는 말은 금방 잊히고 사실과 공감이 오래 남는다고 말해 준다. 이름·학교 이름은 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '또래에게 보낼 금연 캠페인 문구를 한 줄로 쓰세요.', minChars: 8, maxChars: 60, minSentences: 1, maxSentences: 2, title: '캠페인 한 줄', placeholder: '예: 한 번만은 없어요…', lines: 2 },
              prompt: '캠페인 문구를 한 줄로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['사실에 맞는다', '듣는 친구의 마음을 생각했다', '한 줄로 짧다'] }, difficulty: 0.3 },
            { type: 'choice', prompt: '또래 금연 캠페인 문구로 가장 알맞은 것은?', options: ['담배 피우면 큰일 난다!', '"아니"라고 말해도 우리는 친구야. 같이 지키자', '전자담배는 괜찮지만 담배는 안 돼'], answer: 1, difficulty: 0.2, explain: '사실과 공감이 들어간 문구가 또래에게 오래 남아요.' },
            { type: 'short', prompt: '오늘 연습한 거절 말 가운데 실제로 쓸 한 마디를 써요.' },
          ],
        },
        worksheet: {
          title: '금연 캠페인 한 줄',
          items: [
            { type: 'short', prompt: '또래에게 보낼 금연 캠페인 문구를 한 줄로 써요.' },
            { type: 'check', prompt: '내 문구를 기준표로 점검해요.', options: ['사실에 맞는다', '듣는 친구 마음을 생각했다', '한 줄로 짧다'] },
          ],
          easy: { note: '보기 문구를 내 말로 바꿔 써도 돼요.', items: [{ type: 'blank', prompt: '보기 문구의 빈칸을 내 말로 채워요.', text: '한 번만은 없어요. ___ 다시 부르니까.', answer: '니코틴은' }] },
        },
      }),
      M('wrap.web', {
        title: '권유받았을 때 그물', method: '오늘 배운 것 그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 하나씩 짚으며 카드 3장을 함께 붙인다.', base: '세 가지(거절하는 말·도움 청할 곳·기억할 사실)에 카드를 나눠 붙인다.', challenge: '붙인 뒤 두 가지를 이어 한 문장으로 설명하게 한다(예: 사실을 알면 거절 말이 쉬워진다).' },
        wrap: {
          teacher: '"\'권유를 받았을 때\' 둘레에 오늘 배운 것을 모으면 어떤 그물이 될까요?" 학생이 카드를 다 붙이면 가지 두 개를 골라 이어 말하게 한다. "도움은 큰일이 났을 때만 청한다"는 말에는 오늘 지도에서 꽂은 상담실·지구대 핀을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '권유를 받았을 때', slots: ['거절하는 말', '도움 청할 곳', '기억할 사실'], cards: [
              { id: 'a1', text: '"아니, 안 할래."' }, { id: 'a2', text: '"대신 농구 하자."' }, { id: 'b1', text: '담임·상담 선생님' }, { id: 'b2', text: '보호자' },
              { id: 'c1', text: '수증기만 나오는 게 아니다' }, { id: 'c2', text: '가끔 해도 의존이 생길 수 있다' }, { id: 't1', text: '선배 말은 따라야 한다' }] },
              prompt: '오늘 배운 것을 세 가지에 나누어 붙여요(맞지 않는 카드는 남겨요).', target: { sort: { '거절하는 말': ['a1', 'a2'], '도움 청할 곳': ['b1', 'b2'], '기억할 사실': ['c1', 'c2'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"가끔 피우면 중독되지 않는다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['가끔 해도 니코틴 의존이 생길 수 있다', '가끔은 괜찮다', '어른이 되면 괜찮다'], answer: 0, difficulty: 0.2, explain: '니코틴은 가끔 써도 다시 찾게 만들 수 있어요.' },
            { type: 'short', prompt: '그물의 가지 두 개를 이어 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '권유를 받았을 때',
          items: [
            { type: 'table', prompt: '가지마다 오늘 배운 것을 하나씩 써요.', columns: ['거절하는 말', '도움 청할 곳', '기억할 사실'], cells: [['', '', '']], answer: '(예) "아니, 안 할래." / 담임·상담 선생님 / 수증기만 나오는 게 아니다' },
            { type: 'check', prompt: '다음 주에 내가 할 것에 표시해요.', options: ['권유받으면 "아니"를 먼저 말하기', '같은 마음인 친구와 함께 자리 뜨기', '곤란하면 담임·상담 선생님께 말하기'] },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 음주의 위험과 술자리 권유 (saf-drug.m.alcohol) ====
  {
    const M = MK('alcohol', [7]);
    const MYTH = [
      { id: 'm1', text: '조금은 괜찮다', to: '오해' }, { id: 'f1', text: '자라는 뇌에 더 해롭다', to: '사실' },
      { id: 'm2', text: '어른이 권하는 술은 괜찮다', to: '오해' }, { id: 'f2', text: '술은 판단을 흐리게 한다', to: '사실' },
      { id: 'm3', text: '조금씩 마셔 봐야 술이 는다', to: '오해' }, { id: 'f3', text: '간은 술 때문에 지칠 수 있다', to: '사실' },
    ];
    const MYTH2 = [
      { id: 'n1', text: '맥주는 술이 아니라 음료다', to: '오해' }, { id: 'g1', text: '청소년에게 술을 팔 수 없다', to: '사실' },
      { id: 'n2', text: '얼굴이 안 빨개지면 몸에 괜찮다', to: '오해' }, { id: 'g2', text: '취하면 위험을 알아채기 어렵다', to: '사실' },
      { id: 'n3', text: '광고 속 사람들처럼 즐거워진다', to: '오해' }, { id: 'g3', text: '술을 거절해도 관계는 지킬 수 있다', to: '사실' },
    ];
    const AD = [
      { id: 'a1', text: '웃고 있는 젊은 모델', to: '끌어들이는 장치' }, { id: 'a2', text: '해변 파티 분위기', to: '끌어들이는 장치' },
      { id: 'a3', text: '"청춘의 맛" 큰 글씨 문구', to: '끌어들이는 장치' }, { id: 'a4', text: '시원한 물방울이 맺힌 병', to: '끌어들이는 장치' },
      { id: 'h1', text: '판단이 흐려진다는 내용', to: '숨긴 정보' }, { id: 'h2', text: '간에 부담을 준다는 내용', to: '숨긴 정보' },
      { id: 'h3', text: '취한 뒤 다음 날 모습', to: '숨긴 정보' }, { id: 'h4', text: '아주 작게 쓴 경고 글', to: '숨긴 정보' },
    ];
    const F1 = { text: '명절 저녁, 삼촌이 "어른한테 배워야지" 하며 술잔을 내민다. 다른 어른들도 웃으며 본다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'sip', text: '한 모금만 마신다', result: '얼굴이 화끈거리고 삼촌이 "한 잔 더"라고 한다.', impact: [{ who: '나', text: '몸에 부담이 간다', tone: -1 }], why: '자라는 뇌와 몸에는 한 모금도 해로울 수 있어요.', end: '한 모금을 마셨어요.',
        next: { text: '삼촌이 잔을 다시 채우며 "한 잔 더"라고 한다.', choices: [
          { id: 'more', text: '분위기 때문에 더 마신다', result: '머리가 어지럽고 속이 불편해진다.', impact: [{ who: '나', text: '몸이 불편해진다', tone: -1 }], why: '분위기보다 내 몸이 먼저예요.' },
          { id: 'stop', text: '"이제 그만 마실게요"라며 잔을 내려놓는다', result: '삼촌이 "에이, 섭섭하다"고 한다.', impact: [{ who: '나', text: '더 마시지 않는다', tone: 1 }], end: '그만 마시겠다고 말했어요.',
            next: { text: '삼촌이 "섭섭하다"며 계속 쳐다본다.', choices: [
              { id: 'juice', text: '"대신 음료로 건배할게요"라고 웃으며 말한다', result: '삼촌도 웃으며 음료 잔을 부딪친다.', impact: [{ who: '삼촌', text: '기분 좋게 넘어간다', tone: 1 }] },
              { id: 'give', text: '섭섭해할까 봐 다시 잔을 든다', result: '또 마시게 된다.', impact: [{ who: '나', text: '몸에 부담이 간다', tone: -1 }], why: '섭섭함은 다른 건배로 풀 수 있어요.' }] } }] } },
      { id: 'polite', text: '"저는 음료로 할게요"라고 정중히 말한다', result: '삼촌이 "한 잔은 괜찮아"라며 다시 권한다.', impact: [{ who: '나', text: '생각을 밝힌다', tone: 1 }], end: '정중하게 거절했어요.',
        next: { text: '삼촌이 "한 잔은 괜찮아, 어른이 주는 건데"라며 다시 권한다.', choices: [
          { id: 'take', text: '어른 말이라 할 수 없이 받는다', result: '마시고 나서 속이 불편하다.', impact: [{ who: '나', text: '몸에 부담이 간다', tone: -1 }], why: '어른이 권한다고 내 몸에 덜 해로운 것은 아니에요.' },
          { id: 'again', text: '"자라는 동안은 안 마시는 게 좋대요"라고 한 번 더 말한다', result: '삼촌이 잠깐 머뭇거린다.', impact: [{ who: '삼촌', text: '다시 생각한다', tone: 0 }], end: '까닭을 들어 다시 거절했어요.',
            next: { text: '삼촌이 그래도 잔을 거두지 않는다.', choices: [
              { id: 'parent', text: '보호자에게 눈짓해 도움을 청한다', result: '보호자가 "얘는 음료로 할게요"라며 거든다.', impact: [{ who: '보호자', text: '나를 도와준다', tone: 1 }] },
              { id: 'cheers', text: '음료 잔을 들고 "건강하세요!" 하고 건배한다', result: '삼촌도 웃으며 잔을 거둔다.', impact: [{ who: '삼촌', text: '기분 좋게 넘어간다', tone: 1 }] }] } }] } },
      { id: 'away', text: '화장실 간다며 자리를 피한다', result: '그 자리는 넘어갔지만 삼촌이 다음에 또 권한다.', impact: [{ who: '나', text: '다음이 걱정된다', tone: 0 }], why: '피하기만 하면 다음 권유 때 할 말을 정하지 못해요.', ending: '그 자리는 넘겼지만 다음 권유 때 할 말을 정하지 못했어요.' }] };
    const RF1 = [{ id: 'r1', text: '자라는 뇌와 몸에는 적은 양의 술도 해로울 수 있다' }, { id: 'r2', text: '정중히 거절하고 다른 건배를 내면 관계를 지킬 수 있다' },
      { id: 'r3', text: '어른이 권하는 술은 괜찮다', why: '누가 권하든 술이 몸에 주는 영향은 같아요.' }, { id: 'r4', text: '명절에는 분위기를 맞추는 것이 먼저다', why: '분위기는 음료 건배로도 맞출 수 있어요.' }];
    const F2 = { text: '가족 여행 저녁, 대학생 사촌 형이 "몰래 맥주 한 캔 같이 하자, 조금은 괜찮아"라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'follow', text: '"조금이면 괜찮겠지" 하고 따라간다', result: '형이 숙소 뒤편에서 캔을 내민다.', impact: [{ who: '나', text: '거절하기 더 어려워진다', tone: -1 }], why: '"조금은 괜찮다"는 오해예요.', end: '형을 따라갔어요.',
        next: { text: '형이 "조금씩 마셔 봐야 술이 는대"라며 캔을 내민다.', choices: [
          { id: 'drink', text: '받아서 마신다', result: '어지럽고 속이 불편해 잠을 설친다.', impact: [{ who: '나', text: '몸이 불편해진다', tone: -1 }], why: '마셔 본다고 몸이 술에 강해지는 것이 아니에요.' },
          { id: 'myth', text: '"그건 오해래. 난 안 마실래"라고 말한다', result: '형이 "그럼 어른들한테 말하지 마"라고 한다.', impact: [{ who: '나', text: '생각을 지킨다', tone: 1 }], end: '오해를 짚고 거절했어요.',
            next: { text: '형이 "어른들한테 말하지 마"라고 하고 혼자 마시러 간다.', choices: [
              { id: 'tell', text: '보호자에게 있었던 일을 차분히 이야기한다', result: '보호자가 형과 따로 이야기를 나눈다.', impact: [{ who: '사촌 형', text: '어른의 도움을 받는다', tone: 1 }] },
              { id: 'hide', text: '비밀로 하고 모른 척한다', result: '형은 밤늦게까지 혼자 마신다.', impact: [{ who: '사촌 형', text: '위험한 채로 남는다', tone: -1 }], why: '"말하지 마"라는 비밀보다 안전이 먼저예요. 어른에게 알리는 것은 고자질이 아니에요.' }] } }] } },
      { id: 'no', text: '"난 안 마실래. 같이 산책 가자"라고 말한다', result: '형이 "겁쟁이네"라며 놀린다.', impact: [{ who: '나', text: '생각을 지킨다', tone: 1 }], end: '거절하고 대안을 냈어요.',
        next: { text: '형이 "겁쟁이네"라며 놀린다.', choices: [
          { id: 'cave', text: '놀림이 싫어 한 모금 마신다', result: '형이 "그래, 그렇게 배우는 거야"라며 더 권한다.', impact: [{ who: '나', text: '압박에 밀린다', tone: -1 }], why: '놀림에 밀려 마시면 다음 권유도 거절하기 어려워요.' },
          { id: 'firm', text: '"겁나서가 아니라 내 몸 지키는 거야"라고 말한다', result: '형이 머쓱해하며 혼자 숙소 뒤로 간다.', impact: [{ who: '나', text: '생각을 지킨다', tone: 1 }], end: '놀림에도 다시 거절했어요.',
            next: { text: '형이 혼자 숙소 뒤편으로 마시러 갔다. 날이 어둡다.', choices: [
              { id: 'tell', text: '보호자에게 형이 혼자 있다고 알린다', result: '보호자가 형을 찾아가 이야기를 나눈다.', impact: [{ who: '사촌 형', text: '어른의 도움을 받는다', tone: 1 }] },
              { id: 'leave', text: '내 일이 아니니 모른 척한다', result: '형은 어두운 곳에서 혼자 마신다.', impact: [{ who: '사촌 형', text: '위험한 채로 남는다', tone: -1 }], why: '어두운 곳에서 혼자 마시는 것은 위험해요. 어른에게 알려요.' }] } }] } },
      { id: 'phone', text: '대답 없이 휴대전화만 본다', result: '형이 "그럼 이따 와"라며 혼자 간다.', impact: [{ who: '사촌 형', text: '혼자 마시러 간다', tone: -1 }], why: '대답하지 않으면 거절인지 알 수 없고, 형이 혼자 남아요.', ending: '대답을 안 하는 사이 형이 혼자 마시러 갔어요.' }] };
    const RF2 = [{ id: 'r1', text: '조금씩 마신다고 술에 강해지지 않는다' }, { id: 'r2', text: '"말하지 마"보다 안전이 먼저라 어른에게 알린다' },
      { id: 'r3', text: '가족끼리 마시는 술은 괜찮다', why: '누구와 마시든 자라는 몸에 주는 영향은 같아요.' }, { id: 'r4', text: '형의 비밀을 지키는 것이 의리다', why: '위험할 때 어른에게 알리는 것이 형을 지키는 일이에요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.headline', {
        title: '가상 기사 제목으로 질문 만들기', method: '가상 기사 제목 읽고 질문 만들기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 기사 제목 1장만 읽어 주고 어울리는 질문 카드를 함께 고른다.', base: '기사 제목 3장마다 어울리는 질문 카드를 짝 짓는다.', challenge: '짝 지은 질문을 \'사실을 묻는 질문\'과 \'판단을 묻는 질문\'으로 말로 나눈다.' },
        intro: {
          teacher: '"이 기사 제목을 보고 가장 먼저 궁금한 것은 무엇인가요?" 수업용으로 지어낸 가상 기사 제목 카드를 넘겨 읽고, 시연 단추로 제목마다 질문 카드가 짝 지어지는 모습을 보인다. "어른이 권하면 괜찮다"는 말이 나오면 "누가 권하느냐에 따라 술이 몸에 주는 영향이 달라질까요?"라고 되묻는다. 오늘은 이 질문들의 답을 사실과 근거로 찾아본다고 밝힌다.',
          student: '가상 기사 제목 카드를 넘기며 제목마다 떠오르는 질문을 골라요. 오늘 수업에서 답을 찾고 싶은 질문 하나를 정해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '"명절에 어른이 준 한 잔, 괜찮을까"' }, { id: 's2', label: '"청소년 술 광고 노출 늘어"' }, { id: 's3', label: '"조금씩 마셔야 는다? 전문가 고개 저어"' }],
            cards: [{ id: 'k1', text: '누가 권하면 몸에 덜 해로울까?' }, { id: 'k2', text: '광고는 왜 술을 즐겁게만 보여 줄까?' }, { id: 'k3', text: '마셔 보면 정말 술이 늘까?' }], shuffle: false },
            sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3' } }] },
          art: { draw: 'a paper-cut newspaper page with three headline strips and paper question marks rising from them', banner: '제목을 질문으로 바꿔요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '기사 제목은 수업용 가상 자료다. 학생 가족의 음주 여부를 묻지 않는다.',
      }),
      M('intro.organs', {
        title: '알코올이 영향 주는 뇌·간', method: '영향 받는 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 뇌 한 곳만 함께 짚고 하는 일을 읽어 준다.', base: '뇌와 간 두 곳을 찾고 각각 하는 일을 말한다.', challenge: '자라는 시기에 술이 더 해로운 까닭을 뇌가 하는 일과 이어 추론해 말한다.' },
        intro: {
          teacher: '"술을 마시면 몸의 어디가 먼저 영향을 받을까요?" 종이 몸을 띄우고 시연 단추로 뇌와 간이 골라지며 하는 일이 보이는 모습을 보인다. "술은 위로 들어가니 위만 상한다"는 말에는 "판단이 흐려지는 것은 위가 하는 일일까요, 뇌가 하는 일일까요?"라고 되묻는다. 판단과 기억을 맡는 뇌가 자라는 중이라 더 조심해야 한다는 점을 짚는다.',
          student: '종이 몸에서 술이 영향을 주는 뇌와 간을 찾고, 두 곳이 하는 일을 짝에게 한 가지씩 말해요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '심장', '폐', '간', '위'], jobs: { 뇌: '판단하고 기억하고 마음을 조절해요', 간: '몸에 들어온 해로운 물질을 걸러 내요' }, names: true }, sequence: [{ sel: '뇌' }, { sel: '간' }] },
          art: { draw: 'a paper-cut human body outline with the brain and liver highlighted in soft colors and small paper labels', banner: '술은 어디에 영향을 줄까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.myth', {
        title: '술 사실·오해 가르기', method: '사실/오해 판정과 근거', tool: 'story', minutes: 16,
        levels: { easy: '문장 4장을 사실·오해로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '문장 6장을 나누고, 오해 문장마다 근거 카드를 짝 짓는다.', challenge: '함정 근거가 섞인 판에서 짝 짓고, 활동지에 오해 하나를 반박하는 문장을 쓴다.' },
        activity: {
          title: '술 사실·오해 가르기', tool: 'story',
          teacher: '"\'조금은 괜찮다\'는 말은 사실일까요, 오해일까요? 근거는 무엇인가요?" 문장을 나눈 뒤 오해 문장마다 근거 카드를 짝 짓게 한다. "어른들은 다 마시니 괜찮은 것"이라는 학생에게 "다 자란 몸과 자라는 몸이 술을 같은 방식으로 견딜까요?"라고 되묻는다. 반박할 때는 상대를 탓하지 않고 근거를 한 문장으로 말한다는 점을 짚는다.',
          task: '술에 대한 문장 카드를 사실과 오해로 나누고, 오해 문장마다 반박할 근거 카드를 짝 지어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('술에 대한 문장을 사실과 오해로 나누세요.', ['사실', '오해'], MYTH, { title: '술, 진짜일까?' }),
              SB('술에 대한 문장 4장을 사실과 오해로 나누세요.', ['사실', '오해'], pickCards(MYTH, ['m1', 'f1', 'm2', 'f2']), { title: '술, 진짜일까?' })),
            IT(MB('오해 문장마다 반박할 근거를 이어 보세요.', [['조금은 괜찮다', '자라는 뇌에는 적은 양도 해로울 수 있다'], ['어른이 권하는 술은 괜찮다', '누가 권하든 몸에 주는 영향은 같다'], ['조금씩 마셔 봐야 술이 는다', '마셔 본다고 몸이 술에 강해지지 않는다']], [], { title: '근거로 반박하기' }),
              MB('오해 문장 두 개에 반박할 근거를 이어 보세요.', [['조금은 괜찮다', '자라는 뇌에는 적은 양도 해로울 수 있다'], ['어른이 권하는 술은 괜찮다', '누가 권하든 몸에 주는 영향은 같다']], [], { title: '근거로 반박하기' }),
              MB('오해 문장마다 반박할 근거를 이어 보세요(근거가 아닌 카드는 남겨요).', [['조금은 괜찮다', '자라는 뇌에는 적은 양도 해로울 수 있다'], ['어른이 권하는 술은 괜찮다', '누가 권하든 몸에 주는 영향은 같다'], ['조금씩 마셔 봐야 술이 는다', '마셔 본다고 몸이 술에 강해지지 않는다']], ['어른들이 하지 말라고 했으니까', '맛이 없으니까'], { title: '근거로 반박하기' })),
            IT(SB('술과 광고·관계에 대한 문장을 사실과 오해로 나누세요.', ['사실', '오해'], MYTH2, { title: '술, 또 진짜일까?' }),
              SB('술과 광고·관계에 대한 문장 4장을 나누세요.', ['사실', '오해'], pickCards(MYTH2, ['n1', 'g1', 'n2', 'g2']), { title: '술, 또 진짜일까?' }),
              null, { conclude: '술에 대한 오해는 근거 한 문장으로 반박할 수 있어요. 자라는 몸에는 적은 양도, 누가 권해도 해로울 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오해 문장 하나를 골라, 근거를 들어 반박하는 문장을 써요.' }],
          easy: [{ type: 'choice', prompt: '사실인 문장에 ○ 해요.', options: ['자라는 뇌에 더 해롭다', '조금은 괜찮다'], answer: '자라는 뇌에 더 해롭다' }] },
      }),
      M('activity.family', {
        title: '가족 모임 술 권유 갈림길', method: '딜레마 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길을 두 번 골라 결과를 본다(근거 고르기 없음).', base: '갈림길을 세 번 골라 관계와 건강 영향을 따라가고 근거를 고른다.', challenge: '보호자가 도와주는 길을 찾아 끝까지 가고, 근거를 고른다.' },
        activity: {
          title: '가족 모임 술 권유 갈림길', tool: 'dilemma',
          teacher: '"가족이 권할 때는 친구가 권할 때보다 거절하기 쉬울까요, 어려울까요?" 학생마다 한 길을 끝까지 가 본 뒤 결과 칸의 관계·건강 영향을 견주게 한다. "어른한테 배우는 술은 괜찮다"는 학생에게 "누가 따라 주느냐에 따라 술이 뇌에 주는 영향이 달라질까요?"라고 되묻는다. 거절이 어려우면 보호자에게 도움을 청하는 것도 좋은 길이라는 점을 짚는다. 학생 가족의 음주 습관은 묻지 않는다.',
          task: '가족 행사에서 친척이 술을 권하는 장면에서 길을 골라 끝까지 가고, 관계와 건강 영향을 따라가요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '명절에 삼촌이 술잔을 내밀어요. 두 번 골라 결과를 보세요.', base: '명절에 삼촌이 술잔을 내밀어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '명절에 삼촌이 술잔을 내밀어요. 보호자가 도와주는 길을 찾아 끝까지 가고 근거를 고르세요.' },
              '명절 저녁', F1, [['polite', 'again', 'cheers'], ['polite', 'again', 'parent'], ['sip', 'stop', 'juice']], RF1, ['r1', 'r2'], { good: [['polite', 'again', 'parent']] }),
            DIL({ easy: '사촌 형이 몰래 맥주를 권해요. 두 번 골라 결과를 보세요.', base: '사촌 형이 몰래 맥주를 권해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '사촌 형이 몰래 맥주를 권해요. 보호자에게 도움을 청하는 길을 찾아 끝까지 가고 근거를 고르세요.' },
              '가족 여행 저녁', F2, [['no', 'firm', 'tell'], ['follow', 'myth', 'tell']], RF2, ['r1', 'r2']),
            DIL({ easy: '명절 장면에서 다른 길도 가 볼 수 있어요. 두 번 골라 결과를 보세요.', base: '명절 장면에서 한 길을 끝까지 가고, 되돌아가 다른 길도 끝까지 가 본 뒤 근거를 고르세요.', challenge: '명절 장면에서 서로 다른 끝 장면 세 곳까지 가 보고 근거를 고르세요.' },
              '명절 저녁, 다른 길', F1, [['polite', 'again', 'cheers'], ['polite', 'again', 'parent'], ['sip', 'stop', 'juice']], RF1, ['r1', 'r2'], { explore: 3 },
              { target: { path: [['polite', 'again', 'cheers'], ['polite', 'again', 'parent'], ['sip', 'stop', 'juice']], reasons: ['r1', 'r2'], some: true, explore: 2 }, conclude: '누가 권해도 술이 자라는 몸에 주는 영향은 같아요. 정중히 거절하고, 어려우면 보호자에게 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친척이 "어른한테 배워야지" 하며 술을 권할 때 가장 알맞은 행동은?', options: ['한 모금만 마신다', '"저는 음료로 할게요"라고 정중히 말하고, 어려우면 보호자에게 도움을 청한다', '말없이 자리를 피한다'], answer: '"저는 음료로 할게요"라고 정중히 말하고, 어려우면 보호자에게 도움을 청한다' }] },
      }),
      M('activity.ads', {
        title: '가상 주류 광고 장치 나누기', method: '광고 장치 분석', tool: 'mindmap', minutes: 16,
        levels: { easy: '광고 조각 4장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '광고 조각 8장을 \'끌어들이는 장치\'·\'숨긴 정보\'로 나누고, 장치마다 노린 마음을 짝 짓는다.', challenge: '청소년 보호법이 청소년에게 술 판매를 막는 까닭을 고르는데 함정 카드가 더 섞인다.' },
        activity: {
          title: '가상 주류 광고 장치 나누기', tool: 'mindmap',
          teacher: '"이 가상 광고에서 보이는 것은 무엇이고, 보이지 않는 것은 무엇일까요?" 광고 조각을 두 가지에 나눈 뒤 장치마다 어떤 마음을 노렸는지 짝 짓게 한다. "광고는 정보일 뿐 영향이 없다"는 학생에게 "광고 속 사람들은 왜 모두 웃고 있고, 다음 날 아침 모습은 왜 없을까요?"라고 되묻는다. 청소년 보호법이 청소년에게 술을 팔지 못하게 한 까닭을 광고가 숨긴 정보와 이어 짚는다.',
          task: '가상 주류 광고의 모델·분위기·문구·작은 글씨 조각을 \'끌어들이는 장치\'와 \'숨긴 정보\' 가지로 나누고, 장치가 노린 마음을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('가상 주류 광고 조각을 두 가지에 나누세요.', ['끌어들이는 장치', '숨긴 정보'], AD, { topic: '가상 주류 광고' }),
              SB('가상 주류 광고 조각 4장을 두 가지에 나누세요.', ['끌어들이는 장치', '숨긴 정보'], pickCards(AD, ['a1', 'a2', 'h1', 'h2']), { topic: '가상 주류 광고' })),
            IT(MB('광고 장치마다 노린 마음을 이어 보세요.', [['웃고 있는 젊은 모델', '나도 저렇게 멋져 보이고 싶다'], ['해변 파티 분위기', '술이 있으면 즐거워진다'], ['"청춘의 맛" 문구', '젊은 사람이라면 마셔야 한다']], [], { topic: '노린 마음' }),
              MB('광고 장치 두 개가 노린 마음을 이어 보세요.', [['웃고 있는 젊은 모델', '나도 저렇게 멋져 보이고 싶다'], ['해변 파티 분위기', '술이 있으면 즐거워진다']], [], { topic: '노린 마음' })),
            IT(PB('청소년 보호법이 청소년에게 술 판매를 막는 까닭만 골라 담으세요.', '판매를 막는 까닭', [
              { id: 'w1', text: '자라는 뇌와 몸에 더 해롭다', ok: true }, { id: 'w2', text: '판단이 흐려져 사고로 이어질 수 있다', ok: true },
              { id: 'w3', text: '술값이 비싸서', }, { id: 'w4', text: '어른들만 즐기려고' }], { topic: '청소년 보호법' }),
              null,
              PB('청소년 보호법이 청소년에게 술 판매를 막는 까닭만 골라 담으세요(헷갈리는 카드가 섞여 있어요).', '판매를 막는 까닭', [
                { id: 'w1', text: '자라는 뇌와 몸에 더 해롭다', ok: true }, { id: 'w2', text: '판단이 흐려져 사고로 이어질 수 있다', ok: true },
                { id: 'w5', text: '어릴 때 시작할수록 끊기 어려울 수 있다', ok: true }, { id: 'w3', text: '술값이 비싸서' }, { id: 'w4', text: '어른들만 즐기려고' }, { id: 'w6', text: '광고가 금지되어 있어서' }], { topic: '청소년 보호법' }),
              { conclude: '광고는 즐거운 장면만 크게 보여 주고 몸과 판단에 주는 영향은 숨겨요. 법은 그 숨긴 정보 때문에 청소년을 보호해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 광고의 장치와 숨긴 정보를 하나씩 써요.', columns: ['끌어들이는 장치', '숨긴 정보'], cells: [['', ''], ['', '']], answer: '(예) 웃는 모델·파티 분위기 / 판단이 흐려진다·간에 부담' }] },
        notes: '광고는 수업용으로 지어낸 가상 광고다. 실제 상표는 쓰지 않는다.',
      }),
      M('activity.script', {
        title: '술자리 거절 대본 쓰기', method: '거절 대본 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '대본 틀("권유: ___ / 나: 아니, ___ / 나: 대신 ___")을 따라 채워 쓴다.', base: '또래 모임 장면의 거절 대본을 6줄 안팎으로 쓰고 기준 3개(분명한 거절·관계 지키기·대안)를 스스로 점검한다.', challenge: '대본에 끼어들어 돕는 친구의 대사를 더하고 기준 4개를 점검한다.' },
        activity: {
          title: '술자리 거절 대본 쓰기', tool: 'rubric-writing',
          teacher: '"\'싫어!\'만 말하는 대본과 \'난 안 마실래, 대신 같이 노래 부르자\' 대본은 무엇이 다를까요?" 두 대본을 견주어 읽은 뒤 장면마다 짧은 대본을 쓰게 한다. "거절하면 분위기를 깬다"는 학생에게 "대안을 내는 말은 분위기를 깨는 말일까요, 바꾸는 말일까요?"라고 되묻는다. 대본 속 인물은 가명으로 쓰고 실제 친구 이름은 쓰지 않게 한다.',
          task: '또래 모임에서 술을 권받는 짧은 장면의 거절 대본을 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '생일 모임에서 친구가 몰래 가져온 술을 권하는 장면의 거절 대본을 쓰세요.', toolOptions: { topic: '생일 모임, 친구가 몰래 가져온 술을 "한 잔만"이라며 권한다. 거절 대본을 6줄 안팎으로 쓰세요(인물은 가명).', minChars: 50, maxChars: 300, minSentences: 4, maxSentences: 8, title: '생일 모임 대본', lines: 6 }, target: { selfCheck: ['분명하게 거절했다', '관계를 지키는 말을 넣었다', '대안을 하나 냈다'] } },
              { prompt: '틀을 따라 생일 모임 장면의 거절 대본을 쓰세요.', toolOptions: { starter: '친구: "한 잔만." / 나: "아니, ___." / 친구: "왜?" / 나: "___ 때문이야." / 나: "대신 ___."' } },
              { prompt: '생일 모임 장면의 거절 대본에 끼어들어 돕는 친구의 대사를 더해 쓰세요.', target: { selfCheck: ['분명하게 거절했다', '관계를 지키는 말을 넣었다', '대안을 하나 냈다', '돕는 친구의 대사를 넣었다'] } }),
            IT({ prompt: '학원 끝나고 선배가 편의점 앞에서 캔맥주를 권하는 장면의 대본을 쓰세요.', toolOptions: { topic: '학원 끝나고 편의점 앞, 선배가 "어른 되기 연습"이라며 캔맥주를 권한다. 거절 대본을 6줄 안팎으로 쓰세요(인물은 가명).', minChars: 50, maxChars: 300, minSentences: 4, maxSentences: 8, title: '편의점 앞 대본', lines: 6 }, target: { selfCheck: ['분명하게 거절했다', '관계를 지키는 말을 넣었다', '대안을 하나 냈다'] } },
              { prompt: '틀을 따라 편의점 앞 장면의 거절 대본을 쓰세요.', toolOptions: { starter: '선배: "연습 삼아 한 캔." / 나: "아니요, ___." / 선배: "겁나?" / 나: "___." / 나: "저 먼저 갈게요."' } },
              { prompt: '편의점 앞 장면의 대본에 끼어들어 돕는 친구의 대사를 더해 쓰세요.', target: { selfCheck: ['분명하게 거절했다', '관계를 지키는 말을 넣었다', '대안을 하나 냈다', '돕는 친구의 대사를 넣었다'] } }),
            IT({ prompt: '친구가 "한 번 마셔 봐야 어른이 된다"며 다시 권할 때 이어 갈 대본을 쓰세요.', toolOptions: { topic: '거절했는데 친구가 "한 번 마셔 봐야 어른이 된다"며 다시 권한다. 이어 갈 대본을 4~6줄로 쓰세요(인물은 가명).', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 7, title: '다시 권할 때', lines: 5 }, target: { selfCheck: ['다시 분명하게 거절했다', '관계를 지키는 말을 넣었다', '자리를 뜨는 말을 넣었다'] } },
              { prompt: '틀을 따라 다시 권할 때 이어 갈 대본을 쓰세요.', toolOptions: { starter: '친구: "마셔 봐야 어른이지." / 나: "그래도 ___." / 나: "___ 하러 먼저 갈게."' } },
              { prompt: '다시 권할 때 이어 갈 대본에 돕는 친구의 대사를 더해 쓰세요.', target: { selfCheck: ['다시 분명하게 거절했다', '관계를 지키는 말을 넣었다', '자리를 뜨는 말을 넣었다', '돕는 친구의 대사를 넣었다'] } },
              { conclude: '좋은 거절 대본은 분명한 거절, 관계를 지키는 말, 대안이 함께 들어 있어요. 돕는 친구 한 사람이 거절을 훨씬 쉽게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 대본에서 가장 자신 있는 거절 대사 한 줄을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.self', {
        title: '음주 예방 자기 점검표', method: '자기 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개를 하나씩 읽어 주고 표시하게 한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '표시하지 못한 항목 하나를 골라 보완 계획을 한 줄로 쓰게 한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 지금 바로 할 수 있는 것은 무엇이고, 아직 어려운 것은 무엇인가요?" 점검 항목을 함께 읽고 할 수 있는 것에만 표시하게 한다. "다 표시해야 잘한 것"이라는 말에는 표시하지 못한 칸이 다음에 연습할 곳이라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '음주 예방 자기 점검', items: [
              { id: 'c1', text: '오해 하나를 근거로 반박할 수 있다' }, { id: 'c2', text: '술이 뇌·간에 주는 영향을 말할 수 있다' }, { id: 'c3', text: '광고의 숨긴 정보를 찾을 수 있다' },
              { id: 'c4', text: '거절 대본을 소리 내어 말할 수 있다' }, { id: 'c5', text: '도움을 청할 어른을 정했다' }] },
              prompt: '지금 할 수 있는 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '"조금 마셔 봐야 술이 는다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['마셔 본다고 몸이 술에 강해지지 않는다', '어른이 되면 저절로 는다', '맥주는 괜찮다'], answer: 0, difficulty: 0.2, explain: '마셔 보는 것은 연습이 아니라 몸에 부담을 주는 일이에요.' },
            { type: 'short', prompt: '표시하지 못한 항목 하나를 골라, 다음에 어떻게 연습할지 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '음주 예방 자기 점검',
          items: [
            { type: 'check', prompt: '지금 할 수 있는 것에 표시해요.', options: ['오해를 근거로 반박하기', '술이 뇌·간에 주는 영향 말하기', '광고의 숨긴 정보 찾기', '거절 대본 말하기', '도움 청할 어른 정하기'] },
            { type: 'short', prompt: '아직 어려운 항목의 보완 계획을 한 줄로 써요.' },
          ],
        },
      }),
      M('wrap.share', {
        title: '짝 대본 듣고 마음 나누기', method: '대본 읽고 마음 나누기', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 짝 대본을 들은 뒤 권받는 사람의 마음 크기 하나만 고르게 한다.', base: '마음 크기를 고르고 짝 대본에서 좋았던 점을 한 가지 말한다.', challenge: '좋았던 점에 더해 대본을 고칠 점 하나를 존중하는 말로 제안하게 한다.' },
        wrap: {
          teacher: '"짝의 대본 속에서 권유를 받는 사람은 얼마나 부담스러웠을까요? 거절 대사를 듣고 나서는 어떤가요?" 짝끼리 대본을 바꿔 읽은 뒤 두 눈금을 차례로 고르게 한다. "부담스러우면 거절을 못 한 것"이라는 말에는 부담을 느끼면서도 거절하는 것이 진짜 용기라고 말해 준다. 고칠 점은 "~하면 더 좋겠어"처럼 존중하는 말로 하게 한다.',
          exitTicket: [
            SCALE('짝의 대본에서 권유를 받는 사람의 부담', '걱정', '권유를 받는 사람의 부담은 얼마나 컸을지 골라요.', { 1: '조금', 5: '아주 많이' }),
            SCALE('거절 대사를 들은 뒤 권유를 받는 사람의 마음', '편안함', '거절 대사를 듣고 난 뒤 그 사람은 얼마나 편해졌을지 골라요.', { 1: '조금', 5: '아주 많이' }),
            { type: 'short', prompt: '짝 대본에서 좋았던 점 한 가지(그리고 고칠 점 한 가지)를 써요.' },
          ],
        },
        worksheet: {
          title: '짝 대본 나누기',
          items: [
            { type: 'short', prompt: '짝 대본에서 가장 좋았던 거절 대사를 옮겨 쓰고 까닭을 써요.' },
            { type: 'short', prompt: '짝 대본을 더 좋게 할 점을 "~하면 더 좋겠어"로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 의약품 오남용 사례 분석 (saf-drug.m.misuse-case) ====
  {
    const M = MK('misuse-case', [8]);
    const T4 = ['양 초과', '기간 초과', '남의 약', '목적 외 사용'];
    const CASE_A = [
      { id: 'a1', text: '두통이 심해 한 번에 두 배를 먹었다', to: '양 초과' }, { id: 'a2', text: '열흘 넘게 매일 진통제를 먹었다', to: '기간 초과' },
      { id: 'a3', text: '시험 걱정을 잊으려고 진통제를 먹었다', to: '목적 외 사용' },
    ];
    const CASE_BC = [
      { id: 'b1', text: '언니가 처방받은 감기약을 먹었다', to: '남의 약' }, { id: 'b2', text: '다 나았는데 남은 감기약을 계속 먹었다', to: '기간 초과' },
      { id: 'c1', text: '친구가 준 다이어트약을 먹었다', to: '남의 약' }, { id: 'c2', text: '살이 안 빠지자 정해진 것보다 더 먹었다', to: '양 초과' },
      { id: 'c3', text: '배고픔을 참으려고 감기약을 먹었다', to: '목적 외 사용' }, { id: 'ok1', text: '설명서대로 먹고 다 나아 멈췄다' },
    ];
    const SCENE = [{ id: 's1', text: '체중 고민을 친구에게 털어놓는다' }, { id: 's2', text: '친구가 "나 먹던 약"이라며 나눠 준다' }, { id: 's3', text: '설명서 없이 아침마다 먹기 시작한다' }, { id: 's4', text: '효과가 없자 두 알씩 먹는다' }, { id: 's5', text: '가슴이 두근거리고 잠을 못 잔다' }];
    const POLL = [['늘 읽는다', 20], ['가끔 읽는다', 35], ['거의 안 읽는다', 30], ['어른이 읽어 준다', 15]];
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네', legend: false, places: [
      { name: '우리 학교 보건실', icon: 'school', at: [0, 0] }, { name: '약국', icon: 'hospital', at: [3, 0] }, { name: '병원', icon: 'hospital', at: [5, 1] },
      { name: '편의점', icon: 'market', at: [2, 2] }, { name: '공원', icon: 'park', at: [4, 3] }, { name: '우리 집', icon: 'apartment', at: [0, 3] },
    ] };
    const ASKQ = (q, i) => ({ q, choices: ['지금 먹는 약과 같이 먹어도 되나요?', '이 증상에 학교에서 어떤 도움을 받을 수 있나요?', '이 증상이 약 때문일 수 있나요?'], why: ['약사는 약끼리 같이 먹어도 되는지 알려 줘요.', '보건실은 학교에서 바로 도움을 받는 곳이에요.', '몸에 이상 반응이 있으면 의사에게 진찰을 받아요.'].map((w, j) => (j === i ? '' : w)) });
    const O1 = { text: '체중 고민을 하던 친구 솔이 어디서 났는지 모르는 다이어트약을 보여 주며 "같이 먹자"고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'take', text: '한 알 받아 같이 먹는다', result: '오후에 가슴이 두근거리고 손이 떨린다.', impact: [{ who: '나', text: '몸에 이상이 생긴다', tone: -1 }], why: '처방 없이 어디서 났는지 모르는 약은 몸에 어떤 영향을 줄지 알 수 없어요.', end: '같이 먹었고 몸이 이상해졌어요.',
        next: { text: '솔이 "처음엔 원래 그래, 계속 먹어"라고 한다.', choices: [
          { id: 'cont', text: '계속 먹는다', result: '두근거림이 심해져 잠을 못 잔다.', impact: [{ who: '나', text: '몸이 더 나빠진다', tone: -1 }], why: '몸에 이상이 생기면 바로 멈추고 어른에게 알려요.' },
          { id: 'stop', text: '그만 먹고 보건실에 가서 증상을 말한다', result: '보건 선생님이 쉬게 하고 보호자에게 연락한다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }], end: '멈추고 보건실에 알렸어요.',
            next: { text: '보건 선생님이 "어떤 약을 먹었는지 알려 줄래?"라고 묻는다.', choices: [
              { id: 'hide', text: '솔이 혼날까 봐 모른다고 한다', result: '어떤 약인지 몰라 살피기가 어렵다.', impact: [{ who: '나', text: '알맞은 도움이 늦어진다', tone: -1 }], why: '무슨 약인지 알아야 알맞게 도울 수 있어요.' },
              { id: 'show', text: '받은 약 봉지를 보여 주고 사실대로 말한다', result: '선생님이 약을 살피고 솔과도 따로 이야기한다.', impact: [{ who: '솔', text: '어른의 도움을 받게 된다', tone: 1 }] }] } }] } },
      { id: 'refuse', text: '"처방 없는 약은 위험해. 난 안 먹을래"라고 말한다', result: '솔이 "너는 고민이 없으니 그렇지"라며 서운해한다.', impact: [{ who: '나', text: '몸을 지킨다', tone: 1 }], end: '분명히 거절했어요.',
        next: { text: '솔이 서운해하며 혼자라도 먹겠다고 한다.', choices: [
          { id: 'leave', text: '"그럼 너 알아서 해"라고 하고 간다', result: '솔은 혼자 약을 먹기 시작한다.', impact: [{ who: '솔', text: '혼자 위험을 안는다', tone: -1 }], why: '친구가 걱정되면 혼자 두지 말고 도움을 함께 찾아요.' },
          { id: 'care', text: '"네가 걱정돼서 그래. 같이 보건 선생님께 물어볼래?"라고 한다', result: '솔이 "혼나지 않을까" 하며 망설인다.', impact: [{ who: '솔', text: '걱정을 들어 준 사람이 생긴다', tone: 1 }], end: '걱정을 말하고 함께 묻자고 했어요.',
            next: { text: '솔이 "선생님한테 말하면 혼나"라며 망설인다.', choices: [
              { id: 'together', text: '"같이 가 줄게"라며 보건실에 함께 간다', result: '보건 선생님이 체중 고민을 들어 주고 건강한 방법을 함께 찾는다.', impact: [{ who: '솔', text: '안전한 도움을 받는다', tone: 1 }] },
              { id: 'alone', text: '솔 몰래 혼자 선생님께 말한다', result: '선생님이 솔을 돕지만 솔은 서운해한다.', impact: [{ who: '솔', text: '도움은 받지만 서운하다', tone: 0 }], why: '몰래 말해도 돕는 일이지만, 함께 가자고 먼저 권하면 믿음도 지켜요.' }] } }] } },
      { id: 'laugh', text: '"효과 있으면 알려 줘"라고 웃어넘긴다', result: '솔은 혼자 계속 약을 먹는다.', impact: [{ who: '솔', text: '혼자 위험을 안는다', tone: -1 }], why: '웃어넘기면 친구는 괜찮은 일이라고 여겨요.', ending: '웃어넘긴 사이 솔은 혼자 계속 약을 먹었어요.' }] };
    const RO1 = [{ id: 'r1', text: '처방 없는 약을 친구끼리 나누면 위험하다' }, { id: 'r2', text: '친구가 걱정되면 어른·전문가에게 함께 묻는다' },
      { id: 'r3', text: '친구에게 효과 있었던 약은 나에게도 맞다', why: '사람마다 몸이 달라 같은 약도 다르게 작용해요.' }, { id: 'r4', text: '약국에서 파는 약은 많이 먹어도 안전하다', why: '약국 약도 정해진 양을 넘기면 해로울 수 있어요.' }];
    const O2 = { text: '친구 별이 SNS 후기를 보여 주며 "이 다이어트약 효과 좋대, 너도 반 알만 먹어 봐"라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'review', text: '후기가 많으니 믿고 반 알 먹어 본다', result: '속이 메스껍고 어지럽다.', impact: [{ who: '나', text: '몸에 이상이 생긴다', tone: -1 }], why: '후기는 광고일 수 있고 내 몸에 맞는지는 알려 주지 않아요.', end: '후기를 믿고 먹었어요.',
        next: { text: '별이 "처음엔 그래, 내일 또 먹으면 괜찮아져"라고 한다.', choices: [
          { id: 'more', text: '내일 또 먹는다', result: '어지러움이 이어져 수업에 집중하지 못한다.', impact: [{ who: '나', text: '몸이 더 나빠진다', tone: -1 }], why: '이상이 있으면 멈추고 전문가에게 물어요.' },
          { id: 'tell', text: '먹은 약을 보호자에게 말하고 약사에게 묻는다', result: '약사가 "처방 없이 먹으면 안 되는 약일 수 있다"고 알려 준다.', impact: [{ who: '나', text: '바른 정보를 얻는다', tone: 1 }], end: '보호자와 약사에게 물었어요.',
            next: { text: '별은 아직 그 약을 먹고 있다.', choices: [
              { id: 'share', text: '들은 것을 별에게 전하며 함께 상담받자고 한다', result: '별이 "나도 사실 어지러웠어"라며 같이 가겠다고 한다.', impact: [{ who: '별', text: '도움을 받게 된다', tone: 1 }] },
              { id: 'keep', text: '별에게는 아무 말도 하지 않는다', result: '별은 계속 약을 먹는다.', impact: [{ who: '별', text: '혼자 위험을 안는다', tone: -1 }], why: '알게 된 것을 친구에게 나누면 친구도 지킬 수 있어요.' }] } }] } },
      { id: 'check', text: '"후기 말고 약사에게 먼저 물어보자"고 한다', result: '별이 "약사는 먹지 말라고 할 게 뻔해"라며 싫어한다.', impact: [{ who: '별', text: '다시 생각해 본다', tone: 0 }], end: '전문가에게 먼저 묻자고 했어요.',
        next: { text: '별이 "약사는 먹지 말라고 할 게 뻔해"라며 싫어한다.', choices: [
          { id: 'half', text: '"그럼 반만 먹어 보자"고 맞춰 준다', result: '둘 다 어지러움을 느낀다.', impact: [{ who: '나와 별', text: '몸에 이상이 생긴다', tone: -1 }], why: '양을 줄여도 처방 없는 약의 위험은 사라지지 않아요.' },
          { id: 'go', text: '"그러니까 더 물어봐야지. 같이 가 줄게"라고 한다', result: '약사가 "체중 고민은 보건 선생님이나 병원과도 이야기해 보라"고 한다.', impact: [{ who: '별', text: '바른 정보를 얻는다', tone: 1 }], end: '함께 약사에게 물었어요.',
            next: { text: '약국을 나오며 별이 "그럼 이제 어떻게 하지?"라고 묻는다.', choices: [
              { id: 'plan', text: '보건실에 같이 가서 건강한 방법을 찾자고 한다', result: '보건 선생님과 식사·운동 계획을 함께 세운다.', impact: [{ who: '별', text: '안전한 방법을 찾는다', tone: 1 }] },
              { id: 'drop', text: '"알아서 해"라고 하고 헤어진다', result: '별은 다른 다이어트약 후기를 찾아본다.', impact: [{ who: '별', text: '다시 위험해진다', tone: -1 }], why: '정보를 얻은 뒤에도 실천할 방법을 함께 찾아야 해요.' }] } }] } },
      { id: 'ignore', text: '"네 몸이니 알아서 해"라고 한다', result: '별은 혼자 약을 먹기 시작한다.', impact: [{ who: '별', text: '혼자 위험을 안는다', tone: -1 }], why: '친구의 위험을 알았다면 함께 도움을 찾아요.', ending: '별은 혼자 약을 먹기 시작했어요.' }] };
    const RO2 = [{ id: 'r1', text: 'SNS 후기는 내 몸에 맞는지 알려 주지 않는다' }, { id: 'r2', text: '약이 궁금하면 약사·의사에게 먼저 묻는다' },
      { id: 'r3', text: '반 알이면 괜찮다', why: '양을 줄여도 처방 없는 약의 위험은 그대로예요.' }, { id: 'r4', text: '후기가 많으면 안전한 약이다', why: '후기는 광고일 수 있고 사람마다 몸이 달라요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.case', {
        title: '다이어트약 사례 장면 차례', method: '사례 장면 차례', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 3장(약을 받음·두 알씩 먹음·몸에 이상)만 짚어 차례로 읽어 준다.', base: '장면 5장의 차례를 함께 정하고 문제가 시작된 장면을 고른다.', challenge: '문제가 시작된 장면에서 그 원인(체중 고민·친구를 믿음·설명서를 안 읽음)을 짝과 말한다.' },
        intro: {
          teacher: '"이 다섯 장면 가운데 문제는 어디서부터 시작됐을까요?" 가상 학생의 장면 카드를 섞어 보인 뒤 시연 단추로 차례가 맞춰지는 모습을 보인다. "두 알씩 먹은 장면이 문제"라는 말이 나오면 "그 전에, 처방도 설명서도 없는 약을 받은 순간은 괜찮았을까요?"라고 되묻는다. 오늘은 진통제·감기약·다이어트약을 잘못 쓰는 네 가지 모습을 사례로 가려 본다고 밝힌다.',
          student: '친구에게 받은 다이어트약을 먹기 시작한 가상 학생의 장면을 차례로 놓고, 문제가 시작된 장면을 찾아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '가상 학생의 한 달', cards: [SCENE[2], SCENE[0], SCENE[4], SCENE[1], SCENE[3]] }, sequence: [{ order: SCENE.map((c) => c.id) }] },
          art: { draw: 'a paper-cut sequence of five small panels showing a teenager receiving a pill bottle from a friend and later feeling unwell at a desk', banner: '문제는 어디서 시작됐을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이다. 학생의 체중이나 다이어트 경험은 묻지 않는다. 약 이름·성분은 다루지 않는다.',
      }),
      M('intro.poll', {
        title: '설명서 읽기 띠그래프', method: '가상 설문 띠그래프 해석', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 \'늘 읽는다\'와 \'거의 안 읽는다\' 두 칸만 짚어 견준다.', base: '네 칸을 모두 읽고 가장 큰 칸을 고른 뒤 우리 반은 어떨지 예상한다.', challenge: '가상 자료와 실제 우리 반이 다를 수 있는 까닭(지어낸 자료·스스로 답한 조사)을 짚는다.' },
        intro: {
          teacher: '"약을 먹기 전에 설명서를 읽는 사람은 얼마나 될까요?" 수업용 가상 학급 조사 띠그래프를 띄우고 시연 단추로 가장 큰 칸을 고르는 모습을 보인다. "어른이 주는 약이면 안 읽어도 된다"는 말에는 "어른이 늘 곁에 있을까요? 혼자 감기약을 먹어야 할 때는요?"라고 되묻는다. 이 띠그래프는 지어낸 자료라 우리 반 실제와 다를 수 있다는 점을 밝힌다.',
          student: '가상 학급 조사 띠그래프에서 가장 큰 칸을 찾고, 우리 반이라면 어떻게 나올지 짝과 예상해 말해요.',
          demo: { tool: 'chart', options: CH('band', '약 먹기 전 설명서를 읽나요?(가상 학급 조사)', '%', POLL, { question: '가장 큰 칸은?', choices: POLL.map((d) => d[0]) }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut medicine box with a folded instruction leaflet beside a horizontal striped band chart', banner: '설명서, 읽고 먹나요?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.find', {
        title: '사례 속 오남용 네 유형', method: '사례 속 오남용 분류', tool: 'mindmap', minutes: 16,
        levels: { easy: '감기약·다이어트약 사례는 감기약 카드 2장만 나누고(진통제 사례는 그대로), 놓으면 바로 맞는지 알려 준다.', base: '세 사례의 행동 카드를 네 유형 칸에 나눈다(바르게 쓴 카드는 남김).', challenge: '한 행동에 두 유형이 함께 들어 있는 경우를 따로 골라 까닭을 활동지에 쓴다.' },
        activity: {
          title: '사례 속 오남용 네 유형', tool: 'mindmap',
          teacher: '"약을 잘못 쓰는 모습에는 어떤 갈래가 있을까요?" 세 가상 사례(진통제·감기약·다이어트약)의 행동 카드를 네 유형 칸에 나누게 한다. "약국에서 파는 약은 많이 먹어도 안전하다"는 학생에게 "설명서에 하루에 먹는 양이 적혀 있는 까닭은 무엇일까요?"라고 되묻는다. 칸에 모인 카드를 보며 오남용은 \'나쁜 약\'이 아니라 \'잘못 쓰는 방법\'의 문제라는 점을 짚는다.',
          task: '세 가상 사례의 행동 카드를 \'양 초과·기간 초과·남의 약·목적 외 사용\' 칸에 나누고, 바르게 쓴 카드는 남겨요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('진통제 사례(하늘)의 행동 카드를 유형 칸에 나누세요.', ['양 초과', '기간 초과', '목적 외 사용'], CASE_A, { topic: '하늘의 진통제' })),
            IT(SB('감기약(바다)·다이어트약(솔) 사례의 행동 카드를 네 유형 칸에 나누세요(바르게 쓴 카드는 남겨요).', T4, CASE_BC, { topic: '바다와 솔의 약' }),
              SB('감기약 사례(바다)의 행동 카드를 유형 칸에 나누세요.', ['남의 약', '기간 초과'], pickCards(CASE_BC, ['b1', 'b2']), { topic: '바다의 감기약' })),
            IT(PB('"친구가 준 다이어트약을 정해진 것보다 더 먹었다" — 이 행동에 들어 있는 유형을 모두 담으세요.', '들어 있는 유형', [
              { id: 'y1', text: '양 초과', ok: true }, { id: 'y2', text: '기간 초과' }, { id: 'y3', text: '남의 약', ok: true }, { id: 'y4', text: '목적 외 사용' }], { topic: '두 유형이 겹칠 때' }),
              null, null, { conclude: '오남용은 약 자체보다 쓰는 방법의 문제예요. 양·기간·누구의 약·무엇을 위해 쓰는지 네 가지를 늘 살펴요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '한 행동에 두 유형이 함께 들어 있는 예를 하나 들고, 왜 두 유형인지 써요.' }],
          easy: [{ type: 'choice', prompt: '\'남의 약\'에 해당하는 행동에 ○ 해요.', options: ['언니가 처방받은 감기약 먹기', '설명서대로 내 약 먹기'], answer: '언니가 처방받은 감기약 먹기' }] },
        notes: '하늘·바다·솔은 가상 인물이다. 약 이름·성분·양(알 수)은 다루지 않는다.',
      }),
      M('activity.advice', {
        title: '사례 인물에게 조언 쪽지', method: '조언 쪽지 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '쪽지 틀("___야, 걱정돼서 쓰는 쪽지야. ___은 위험할 수 있대. ___에게 같이 물어보자.")을 채워 쓴다.', base: '쪽지를 다섯 문장 안팎으로 쓰고 기준 3개(사실·공감·구체적 행동)를 점검한다. 도움받을 사람(약사·의사·보건 선생님·보호자)을 꼭 넣는다.', challenge: '마지막 쪽지를 다른 사례 인물에게도 맞게 고쳐 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '사례 인물에게 조언 쪽지', tool: 'rubric-writing',
          teacher: '"\'그러니까 약을 왜 먹었어\'와 \'걱정돼서 그래, 약사 선생님께 같이 물어보자\' 가운데 어느 쪽지가 친구를 움직일까요?" 두 문장을 견주어 읽은 뒤 사례 인물에게 보낼 쪽지를 쓰게 한다. "겁을 줘야 안 먹는다"는 학생에게 "겁만 주면 친구는 숨기고 혼자 먹지 않을까요?"라고 되묻는다. 쪽지에는 사실 하나, 마음을 알아주는 말 하나, 함께 할 행동 하나가 들어가야 한다는 점을 짚는다.',
          task: '사례 속 가상 인물에게 바른 복용과 상담을 권하는 쪽지를 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '두통 때문에 진통제를 두 배로, 열흘 넘게 먹은 하늘에게 쪽지를 쓰세요.', toolOptions: { topic: '하늘은 두통이 심해 진통제를 한 번에 두 배로, 열흘 넘게 먹었다. 하늘에게 보낼 쪽지를 다섯 문장 안팎으로 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '하늘에게', lines: 5 }, target: { selfCheck: ['사실에 맞는 정보를 썼다', '하늘의 마음을 알아주는 말을 썼다', '함께 할 구체적인 행동을 권했다'], mustInclude: [['약사', '의사', '보건 선생님', '보호자', '병원']] } },
              { prompt: '틀을 따라 하늘에게 쪽지를 쓰세요.', toolOptions: { starter: '하늘아, 걱정돼서 쓰는 쪽지야. ___은 위험할 수 있대. ___에게 같이 물어보자.' } }),
            IT({ prompt: '언니가 처방받은 감기약을 먹고, 다 나은 뒤에도 남은 약을 먹는 바다에게 쪽지를 쓰세요.', toolOptions: { topic: '바다는 언니가 처방받은 감기약을 먹고, 다 나은 뒤에도 남은 약을 계속 먹는다. 바다에게 보낼 쪽지를 다섯 문장 안팎으로 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '바다에게', lines: 5 }, target: { selfCheck: ['사실에 맞는 정보를 썼다', '바다의 마음을 알아주는 말을 썼다', '함께 할 구체적인 행동을 권했다'], mustInclude: [['약사', '의사', '보건 선생님', '보호자', '병원']] } },
              { prompt: '틀을 따라 바다에게 쪽지를 쓰세요.', toolOptions: { starter: '바다야, 걱정돼서 쓰는 쪽지야. ___은 위험할 수 있대. ___에게 같이 물어보자.' } }),
            IT({ prompt: '친구가 준 다이어트약을 먹고 있는 솔에게 쪽지를 쓰세요.', toolOptions: { topic: '솔은 친구가 준 다이어트약을 먹고 있고, 효과가 없자 더 많이 먹으려 한다. 솔에게 보낼 쪽지를 다섯 문장 안팎으로 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '솔에게', lines: 5 }, target: { selfCheck: ['사실에 맞는 정보를 썼다', '솔의 마음을 알아주는 말을 썼다', '함께 할 구체적인 행동을 권했다'], mustInclude: [['약사', '의사', '보건 선생님', '보호자', '병원']] } },
              { prompt: '틀을 따라 솔에게 쪽지를 쓰세요.', toolOptions: { starter: '솔아, 걱정돼서 쓰는 쪽지야. ___은 위험할 수 있대. ___에게 같이 물어보자.' } },
              { prompt: '솔에게 쓴 쪽지를 하늘·바다에게도 맞게 고쳐 쓰세요(세 사람에게 함께 보내는 쪽지).', toolOptions: { topic: '솔에게 쓴 쪽지를 하늘·바다에게도 맞게 고쳐, 세 사람에게 함께 보내는 쪽지로 쓰세요.', maxSentences: 7 }, target: { selfCheck: ['사실에 맞는 정보를 썼다', '세 사람의 마음을 알아주는 말을 썼다', '함께 할 구체적인 행동을 권했다', '세 사례에 모두 맞게 고쳤다'], mustInclude: [['약사', '의사', '보건 선생님', '보호자', '병원']] } },
              { conclude: '친구를 돕는 쪽지에는 사실 하나, 마음을 알아주는 말, 함께 할 행동이 들어가요. 약이 궁금할 때는 약사·의사에게 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쪽지에 꼭 넣을 \'함께 할 행동\' 한 가지를 써요.' }] },
      }),
      M('activity.offer', {
        title: '처방 없는 다이어트약 갈림길', method: '딜레마 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길을 두 번 골라 결과를 본다(근거 고르기 없음).', base: '갈림길을 세 번 골라 끝까지 가고 근거를 고른다.', challenge: '친구도 함께 도움을 받는 길을 찾아 끝까지 가고 근거를 고른다.' },
        activity: {
          title: '처방 없는 다이어트약 갈림길', tool: 'dilemma',
          teacher: '"친구가 같이 먹자고 할 때, 나만 거절하면 할 일을 다 한 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 결과 칸에서 나와 친구가 각각 어떤 영향을 받았는지 견주게 한다. "친구에게 효과 있었던 약은 나에게도 맞다"는 학생에게 "키도 몸무게도 다른 두 사람의 몸이 같은 약에 똑같이 반응할까요?"라고 되묻는다. 거절에서 멈추지 않고 친구가 믿을 만한 어른에게 닿게 돕는 길을 짚는다.',
          task: '체중 고민을 하던 친구가 처방 없는 약을 같이 먹자고 하는 장면에서 길을 골라 결과를 세 단계까지 따라가요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '솔이 다이어트약을 같이 먹자고 해요. 두 번 골라 결과를 보세요.', base: '솔이 다이어트약을 같이 먹자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '솔도 함께 도움을 받는 길을 찾아 끝까지 가고 근거를 고르세요.' },
              '친구가 내민 약', O1, [['refuse', 'care', 'together'], ['take', 'stop', 'show']], RO1, ['r1', 'r2'], { good: [['refuse', 'care', 'together']] }),
            DIL({ easy: '별이 SNS 후기를 보여 주며 약을 권해요. 두 번 골라 결과를 보세요.', base: '별이 SNS 후기를 보여 주며 약을 권해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '별도 함께 안전한 방법을 찾는 길을 골라 끝까지 가고 근거를 고르세요.' },
              'SNS 후기 다이어트약', O2, [['check', 'go', 'plan'], ['review', 'tell', 'share']], RO2, ['r1', 'r2'], { good: [['check', 'go', 'plan']] }),
            DIL({ easy: '솔의 장면에서 다른 길도 가 볼 수 있어요. 두 번 골라 결과를 보세요.', base: '솔의 장면에서 한 길을 끝까지 가고, 되돌아가 다른 길도 끝까지 가 본 뒤 근거를 고르세요.', challenge: '솔의 장면에서 서로 다른 끝 장면 세 곳까지 가 보고 근거를 고르세요.' },
              '친구가 내민 약, 다른 길', O1, [['refuse', 'care', 'together'], ['refuse', 'care', 'alone'], ['take', 'stop', 'show']], RO1, ['r1', 'r2'], { explore: 3 },
              { target: { path: [['refuse', 'care', 'together'], ['refuse', 'care', 'alone'], ['take', 'stop', 'show']], reasons: ['r1', 'r2'], some: true, explore: 2 }, conclude: '처방 없는 약은 친구끼리 나누지 않아요. 거절한 뒤에는 친구가 믿을 만한 어른에게 닿도록 함께 가 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 처방 없는 다이어트약을 같이 먹자고 할 때 가장 알맞은 행동은?', options: ['반 알만 먹어 본다', '거절하고, 걱정을 말한 뒤 보건 선생님께 같이 가자고 한다', '웃어넘긴다'], answer: '거절하고, 걱정을 말한 뒤 보건 선생님께 같이 가자고 한다' }] },
        notes: '솔·별은 가상 인물이다. 학생의 체중·외모 이야기는 하지 않는다. 약을 어디서 구하는지는 다루지 않는다.',
      }),
      M('activity.consult', {
        title: '약 상담 장소 지도와 질문', method: '상담 장소 지도와 질문', tool: 'map', minutes: 16,
        levels: { easy: '상황마다 알맞은 곳에 핀을 꽂는다(장소 이름이 보인다).', base: '핀을 꽂고, 그곳에서 할 알맞은 질문을 고른다.', challenge: '지도에 장소 이름이 숨겨진 채 기호만 보고 핀을 꽂고 질문을 고른다.' },
        activity: {
          title: '약 상담 장소 지도와 질문', tool: 'map',
          teacher: '"약이 궁금할 때 인터넷 검색과 약국 가운데 어디가 더 정확할까요?" 상황 카드를 읽고 가상 동네 지도에 핀을 꽂은 뒤 그곳에서 물을 질문을 고르게 한다. "약사에게 물으면 귀찮아한다"는 학생에게 "약사는 약에 대해 묻는 사람에게 알려 주는 일을 하는 사람이에요. 어떤 질문을 하면 좋을까요?"라고 되묻는다. 몸에 이상 반응이 있으면 병원, 학교에서는 보건실이 먼저라는 점을 짚는다.',
          task: '동네 칸 지도에서 상황마다 약국·보건실·병원 가운데 알맞은 곳에 핀을 꽂고, 그곳에서 할 질문을 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(PIN('지금 먹는 감기약이 있는데 진통제를 같이 먹어도 될지 궁금해요. 물어볼 곳에 핀을 꽂고 질문을 고르세요.', Object.assign({}, TOWN, { ask: ASKQ('이곳에서 할 질문은?', 0) }), { place: '약국', pick: 0 }),
              PIN('지금 먹는 감기약이 있는데 진통제를 같이 먹어도 될지 궁금해요. 물어볼 곳에 핀을 꽂으세요.', TOWN, { place: '약국' }),
              { toolOptions: { names: false } }),
            IT(PIN('수업 중 배가 갑자기 아파요. 학교에서 먼저 갈 곳에 핀을 꽂고 질문을 고르세요.', Object.assign({}, TOWN, { ask: ASKQ('이곳에서 할 질문은?', 1) }), { place: '우리 학교 보건실', pick: 1 }),
              PIN('수업 중 배가 갑자기 아파요. 학교에서 먼저 갈 곳에 핀을 꽂으세요.', TOWN, { place: '우리 학교 보건실' }),
              { toolOptions: { names: false } }),
            IT(PIN('약을 먹은 뒤 몸에 두드러기가 나고 열이 나요. 진찰받을 곳에 핀을 꽂고 질문을 고르세요.', Object.assign({}, TOWN, { ask: ASKQ('이곳에서 할 질문은?', 2) }), { place: '병원', pick: 2 }),
              PIN('약을 먹은 뒤 몸에 두드러기가 나고 열이 나요. 진찰받을 곳에 핀을 꽂으세요.', TOWN, { place: '병원' }),
              { toolOptions: { names: false } },
              { conclude: '약이 궁금하면 약국(약사), 학교에서는 보건실, 몸에 이상 반응이 있으면 병원(의사)에 가요. 편의점은 상담하는 곳이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '곳마다 할 질문을 하나씩 써요.', columns: ['곳', '할 질문'], cells: [['약국', ''], ['보건실', ''], ['병원', '']], answer: '(예) 같이 먹어도 되나요? / 학교에서 어떤 도움을 받나요? / 이 증상이 약 때문인가요?' }] },
        notes: '지도는 가상의 동네다. 학생의 실제 집 위치나 다니는 병원은 묻지 않는다. 장소 이름을 숨기는 단계에서는 약국·병원 기호가 같아 보일 수 있으니 교사가 위치를 한 번 짚어 준다.',
      }),

      // ---- 정리 ----
      M('wrap.web', {
        title: '오남용 개념 그물', method: '오남용 개념 그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 유형 2개(양 초과·남의 약) 가지부터 함께 붙이고 나머지는 같이 읽는다.', base: '네 유형 가지에 예를 두 장씩 붙인다.', challenge: '유형마다 막는 예방 행동을 한 가지씩 말로 이어 붙이게 한다.' },
        wrap: {
          teacher: '"\'오남용\' 가운데 칸 둘레에 오늘 찾은 네 유형을 달면 어떤 그물이 될까요?" 학생이 예 카드를 다 붙이면 유형마다 막는 행동을 한 가지씩 말하게 한다. "남의 약도 같은 병이면 괜찮다"는 말에는 처방은 그 사람의 몸에 맞춘 것이라는 점을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '오남용', slots: T4, cards: [
              { id: 'a1', text: '진통제를 한 번에 두 배로' }, { id: 'a2', text: '정해진 것보다 더 먹기' }, { id: 'b1', text: '열흘 넘게 매일 먹기' }, { id: 'b2', text: '다 나아도 남은 약 계속' },
              { id: 'c1', text: '언니 처방약 먹기' }, { id: 'c2', text: '친구가 준 약 먹기' }, { id: 'd1', text: '걱정을 잊으려고 먹기' }, { id: 'd2', text: '배고픔을 참으려고 먹기' }] },
              prompt: '네 유형 가지에 예를 두 장씩 붙여요.', target: { sort: { '양 초과': ['a1', 'a2'], '기간 초과': ['b1', 'b2'], '남의 약': ['c1', 'c2'], '목적 외 사용': ['d1', 'd2'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"약국에서 파는 약은 많이 먹어도 안전하다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['약국 약도 정해진 양을 넘기면 해로울 수 있다', '약국 약은 비싸다', '병원 약만 위험하다'], answer: 0, difficulty: 0.2, explain: '설명서의 양과 기간은 안전을 위해 정해진 것이에요.' },
            { type: 'short', prompt: '네 유형 가운데 하나를 골라, 그것을 막는 행동을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '오남용 네 유형',
          items: [
            { type: 'table', prompt: '유형마다 예와 막는 행동을 써요.', columns: ['유형', '예', '막는 행동'], cells: [['양 초과', '', ''], ['기간 초과', '', ''], ['남의 약', '', ''], ['목적 외 사용', '', '']], answer: '(예) 설명서의 양 지키기 / 정해진 기간만 / 내 처방약만 / 아픈 곳에만' },
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['설명서를 읽고 먹기', '남의 약 먹지 않기', '궁금하면 약사에게 묻기'] },
          ],
        },
      }),
      M('wrap.check', {
        title: '우리 집 약 점검표', method: '우리 집 약 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개(사용기한·보관·남의 약)를 먼저 함께 읽고 고르게 한다.', base: '점검표에서 알맞은 항목 5개를 고르고(틀린 항목은 남김) 가족과 할 날을 정한다.', challenge: '남은 약을 어떻게 처리하는지 가족과 조사할 계획을 한 줄로 쓰게 한다.' },
        wrap: {
          teacher: '"우리 집 약상자를 연다면 무엇부터 확인할까요?" 점검 항목을 읽고 알맞은 것만 표시하게 한다. "남은 약은 다음에 아플 때 쓰면 아깝지 않다"는 말에는 남은 약은 그때 그 사람에게 맞춘 것이고 사용기한도 있다는 점을 짚는다. 집 주소나 가족의 병명은 쓰지 않게 하고, 점검은 보호자와 함께 하자고 한다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'kitchen', difficulty: 0.2 }, (() => { const c = CL('우리 집 약 점검표에서 알맞은 항목만 표시해요.', '우리 집 약 점검', [
              { id: 'k1', text: '사용기한이 지난 약이 있는지 본다', ok: true }, { id: 'k2', text: '약을 원래 상자·설명서와 함께 둔다', ok: true },
              { id: 'k3', text: '어린 동생 손이 닿지 않는 곳에 둔다', ok: true }, { id: 'k4', text: '누구의 약인지 이름이 보이게 둔다', ok: true },
              { id: 'k5', text: '남은 처방약을 가족끼리 나눠 먹지 않는다', ok: true }, { id: 'k6', text: '남은 약은 다음 감기 때 쓰려고 둔다' }, { id: 'k7', text: '알약을 다른 통에 옮겨 섞어 둔다' }]);
              return { options: c.toolOptions, prompt: c.prompt, target: c.target }; })()),
            { type: 'choice', prompt: '사용기한이 지난 약을 처리하는 방법으로 가장 알맞은 것은?', options: ['변기에 버린다', '보호자와 함께 약국 등 정해진 곳에 가져간다', '아깝으니 먹는다'], answer: 1, difficulty: 0.2, explain: '남은 약은 보호자와 함께 정해진 곳에 가져가요. 우리 동네의 수거 장소는 함께 알아봐요.' },
            { type: 'short', prompt: '보호자와 약상자를 점검할 때(요일·때)를 정해 써요.' },
          ],
        },
        worksheet: {
          title: '우리 집 약 점검',
          items: [
            { type: 'check', prompt: '집에서 보호자와 함께 확인할 것에 표시해요.', options: ['사용기한', '원래 상자·설명서와 함께 보관', '어린 동생 손이 닿지 않는 곳', '누구의 약인지 이름', '남은 처방약 나누지 않기'] },
            { type: 'short', prompt: '남은 약을 어떻게 처리할지 가족과 알아볼 계획을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 뇌에 작용하는 물질 — 향정신성 물질과 관리 이유 (saf-drug.m.psychoactive) ====
  {
    const M = MK('psychoactive', [8]);
    const MEAN = [['의존', '없으면 안 될 것 같아 자꾸 찾게 되는 것'], ['내성', '같은 양으로는 예전만큼 느껴지지 않는 것'], ['금단', '끊거나 줄이면 몸과 마음이 불편해지는 것']];
    const EX = [
      { id: 'x1', text: '그것 없이는 하루를 못 버틸 것 같다', to: '의존' }, { id: 'x2', text: '하지 말아야지 해도 또 찾게 된다', to: '의존' },
      { id: 'x3', text: '예전보다 더 많이 해야 같은 느낌이 든다', to: '내성' }, { id: 'x4', text: '같은 양으로는 점점 효과가 덜하다', to: '내성' },
      { id: 'x5', text: '안 하면 머리가 아프고 짜증이 난다', to: '금단' }, { id: 'x6', text: '줄이면 잠이 안 오고 불안하다', to: '금단' },
    ];
    const CYC = [{ id: 'y1', text: '잠깐 기분이 달라진다' }, { id: 'y2', text: '그 느낌을 다시 찾게 된다' }, { id: 'y3', text: '잠·공부·관계에 피해가 생긴다' }, { id: 'y4', text: '힘들어서 또 찾는다' }];
    const LIFE = [['잠 · 전', 8], ['잠 · 후', 3], ['학업 · 전', 7], ['학업 · 후', 4], ['관계 · 전', 8], ['관계 · 후', 4]];
    const LIFE_T = '가상 인물의 생활 점수(10점 만점) — 의존 전과 후';
    const S1 = { text: '친구가 "너희 형이 처방받은 약 있지? 그거 공부 잘 되는 약이래. 몇 알만 갖다 줘"라고 부탁한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'bring', text: '몇 알만 몰래 가져다준다', result: '형의 약이 모자라고, 친구는 먹은 뒤 가슴이 두근거린다.', impact: [{ who: '형', text: '먹어야 할 약이 모자란다', tone: -1 }, { who: '친구', text: '몸에 이상이 생긴다', tone: -1 }], why: '처방약은 처방받은 사람의 몸에 맞춘 약이에요.', end: '약을 몰래 가져다줬어요.',
        next: { text: '친구가 "더 구해 줄 수 있어?"라고 묻는다.', choices: [
          { id: 'again', text: '한 번 더 가져다준다', result: '친구는 그 약을 더 자주 찾게 된다.', impact: [{ who: '친구', text: '의존이 생길 수 있다', tone: -1 }], why: '뇌에 작용하는 약은 자꾸 찾게 만들 수 있어요.' },
          { id: 'stop', text: '"처방받은 사람만 먹는 약이야. 더는 안 돼"라고 말한다', result: '친구가 서운해하지만 더 묻지 않는다.', impact: [{ who: '친구', text: '더 먹지 않는다', tone: 1 }], end: '더는 안 된다고 말했어요.',
            next: { text: '친구가 아까부터 어지럽다며 엎드려 있다.', choices: [
              { id: 'tell', text: '보호자와 보건 선생님께 사실대로 알린다', result: '보건 선생님이 친구를 살피고 형의 약도 다시 챙긴다.', impact: [{ who: '친구', text: '도움을 받는다', tone: 1 }] },
              { id: 'hide', text: '들킬까 봐 아무 말도 하지 않는다', result: '친구의 어지러움이 오후까지 이어진다.', impact: [{ who: '친구', text: '도움을 못 받는다', tone: -1 }], why: '몸에 이상이 있을 때는 혼날 걱정보다 알리는 것이 먼저예요.' }] } }] } },
      { id: 'no', text: '"처방약은 형만 먹는 거야. 안 돼"라고 거절한다', result: '친구가 "치사하다"며 서운해한다.', impact: [{ who: '형', text: '자기 약을 지킨다', tone: 1 }], end: '분명히 거절했어요.',
        next: { text: '친구가 "공부 잘 되는 약이라던데, 치사하다"고 한다.', choices: [
          { id: 'give', text: '미안해서 한 알만 가져다준다', result: '친구가 먹고 나서 속이 메스껍다고 한다.', impact: [{ who: '친구', text: '몸에 이상이 생긴다', tone: -1 }], why: '한 알이라도 처방받지 않은 사람에게는 위험할 수 있어요.' },
          { id: 'explain', text: '"공부 잘 되는 약은 없어. 뇌에 작용하는 약이라 위험해"라고 말한다', result: '친구가 "그럼 시험은 어떡하지"라며 한숨을 쉰다.', impact: [{ who: '친구', text: '사실을 알게 된다', tone: 1 }], end: '까닭을 들어 다시 거절했어요.',
            next: { text: '친구가 "다른 데서 구해 볼까"라고 중얼거린다.', choices: [
              { id: 'care', text: '"걱정돼서 그래. 공부는 같이 하자"며 담임 선생님과 상담을 권한다', result: '친구가 시험 걱정을 선생님께 털어놓는다.', impact: [{ who: '친구', text: '걱정을 나눌 어른이 생긴다', tone: 1 }] },
              { id: 'ignore', text: '못 들은 척한다', result: '친구는 혼자 다른 방법을 찾는다.', impact: [{ who: '친구', text: '혼자 위험을 안는다', tone: -1 }], why: '친구가 위험한 방법을 찾으려 하면 어른에게 함께 가요.' }] } }] } },
      { id: 'joke', text: '"나도 먹어 봐야겠다"며 웃는다', result: '친구가 "그럼 같이 먹자"며 더 조른다.', impact: [{ who: '나', text: '권유가 더 세진다', tone: -1 }], why: '농담도 괜찮다는 신호로 읽혀요.', ending: '농담처럼 받았더니 친구가 더 졸랐어요.' }] };
    const RS1 = [{ id: 'r1', text: '처방약은 처방받은 사람의 몸에 맞춘 약이다' }, { id: 'r2', text: '뇌에 작용하는 약은 법으로 관리된다' },
      { id: 'r4', text: '병원 약이니 나눠 먹어도 괜찮다', why: '병원 약일수록 그 사람의 몸과 병에 맞춘 약이에요.' }, { id: 'r5', text: '공부 잘 되는 약이 있다', why: '뇌에 작용하는 약은 공부를 대신해 주지 않고 의존을 부를 수 있어요.' }];
    const RS1_REL = { reasons: [{ id: 'r3', text: '걱정을 말해 주는 것이 친구를 지키는 일이다' }], ok: ['r3'] };
    const S2 = { text: '시험 기간, 짝이 "엄마가 처방받은 약인데 마음이 편해진대. 반 알씩 나눠 먹자"고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'half', text: '반 알만 받아 먹는다', result: '수업 중 졸리고 머리가 멍하다.', impact: [{ who: '나', text: '몸과 판단이 흐려진다', tone: -1 }], why: '처방약은 반 알이라도 처방받지 않은 사람에게는 위험할 수 있어요.', end: '반 알을 먹었어요.',
        next: { text: '짝이 "내일도 먹자"고 한다.', choices: [
          { id: 'tomorrow', text: '내일도 먹기로 한다', result: '시험 날 문제를 읽어도 머리에 잘 들어오지 않는다.', impact: [{ who: '나', text: '시험을 망친다', tone: -1 }], why: '불안을 약으로 누르면 다시 찾게 될 수 있어요.' },
          { id: 'no2', text: '"처방받은 사람만 먹는 거래. 그만 먹자"라고 말한다', result: '짝이 "불안해서 그래"라고 털어놓는다.', impact: [{ who: '짝', text: '마음을 털어놓는다', tone: 1 }], end: '그만 먹자고 말했어요.',
            next: { text: '짝이 "시험 생각만 하면 너무 불안해"라고 말한다.', choices: [
              { id: 'listen', text: '"상담 선생님께 같이 가 볼래?"라고 권한다', result: '짝이 상담 선생님과 시험 불안을 이야기한다.', impact: [{ who: '짝', text: '도움을 받는다', tone: 1 }] },
              { id: 'scold', text: '"그러니까 약을 왜 먹어"라고 나무란다', result: '짝이 마음을 닫고 혼자 약을 먹는다.', impact: [{ who: '짝', text: '혼자 남는다', tone: -1 }], why: '나무라기보다 마음을 들어 주고 도움을 함께 찾아요.' }] } }] } },
      { id: 'no', text: '"그 약은 너희 엄마 몸에 맞춘 거야. 안 먹을래"라고 한다', result: '짝이 "너만 유난이야"라고 한다.', impact: [{ who: '나', text: '몸을 지킨다', tone: 1 }], end: '분명히 거절했어요.',
        next: { text: '짝이 "너만 유난이야"라며 혼자 먹으려 한다.', choices: [
          { id: 'give', text: '유난 떤다는 말이 싫어 같이 먹는다', result: '둘 다 수업 중 멍해진다.', impact: [{ who: '나와 짝', text: '판단이 흐려진다', tone: -1 }], why: '놀림을 피하려고 내 몸을 걸지 않아요.' },
          { id: 'ask', text: '"요즘 많이 불안해?"라고 짝의 마음을 묻는다', result: '짝이 "시험이 너무 무서워"라고 말한다.', impact: [{ who: '짝', text: '마음을 털어놓는다', tone: 1 }], end: '짝의 마음을 물었어요.',
            next: { text: '짝이 "시험이 너무 무서워"라고 말한다.', choices: [
              { id: 'counsel', text: '상담 선생님과 이야기해 보자며 함께 가 준다', result: '짝이 상담 선생님과 불안을 줄이는 방법을 찾는다.', impact: [{ who: '짝', text: '도움을 받는다', tone: 1 }] },
              { id: 'endure', text: '"그냥 참아"라고 말한다', result: '짝은 불안할 때마다 약을 찾는다.', impact: [{ who: '짝', text: '혼자 남는다', tone: -1 }], why: '불안은 참기만 할 일이 아니라 어른과 함께 다룰 일이에요.' }] } }] } },
      { id: 'shout', text: '반 친구들에게 큰 소리로 알린다', result: '짝이 창피해하며 마음을 닫는다.', impact: [{ who: '짝', text: '창피를 당한다', tone: -1 }], why: '도움은 조용히, 믿을 만한 어른에게 청해요.', ending: '큰 소리로 알렸더니 짝이 마음을 닫았어요.' }] };
    const RS2 = [{ id: 'r1', text: '처방약은 처방받은 사람의 몸에 맞춘 것이다' }, { id: 'r2', text: '불안은 약이 아니라 상담으로 함께 다룰 수 있다' },
      { id: 'r4', text: '반 알은 괜찮다', why: '양을 줄여도 처방받지 않은 사람에게는 위험해요.' }, { id: 'r5', text: '친구 비밀은 무조건 지켜야 한다', why: '친구가 위험할 때는 믿을 만한 어른에게 알리는 것이 친구를 지키는 일이에요.' }];
    const RS2_REL = { reasons: [{ id: 'r3', text: '조용히 믿을 만한 어른에게 도움을 청한다' }], ok: ['r3'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.brain', {
        title: '판단과 감정을 맡는 뇌', method: '뇌 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 종이 몸에서 뇌를 함께 짚는다.', base: '뇌를 찾고 판단·감정 조절 두 가지 하는 일을 말한다.', challenge: '어떤 물질이 뇌에 작용하면 판단·감정·잠에 어떤 변화가 생길지 추론해 말한다.' },
        intro: {
          teacher: '"오늘 할 일을 정하고, 화가 날 때 참게 하는 곳은 몸의 어디일까요?" 종이 몸을 띄우고 시연 단추로 뇌가 골라지며 하는 일이 보이는 모습을 보인다. "마음은 심장에 있다"는 말이 나오면 "화를 참기로 결정하는 일은 심장이 할까요, 뇌가 할까요?"라고 되묻는다. 오늘 배울 \'향정신성\'은 바로 이 뇌에 작용한다는 뜻이라고 밝힌다.',
          student: '종이 몸에서 뇌를 찾고, 뇌가 판단과 감정 조절을 맡는다는 설명을 읽어요. 뇌에 무언가가 작용하면 무엇이 달라질지 생각해요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '심장', '폐', '간', '위'], jobs: { 뇌: '판단하고 감정을 조절해요' }, names: true }, sequence: [{ sel: '뇌' }] },
          art: { draw: 'a paper-cut human head silhouette with a layered paper brain glowing softly, small paper arrows pointing to thinking and feeling', banner: '판단과 감정은 뇌에서', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.term', {
        title: '\'향정신성\' 낱말 쪼개기', method: '낱말 뜻 풀이', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 \'향정신성\' 뜻 보기 두 개 가운데 고르게 한다.', base: '낱말을 세 조각(향·정신·성)으로 쪼개 조각마다 뜻 카드를 짝 짓고 한 문장으로 풀이한다.', challenge: '\'중독성\'처럼 \'-성\'이 붙은 낱말과 견주어 뜻을 말한다.' },
        intro: {
          teacher: '"\'향정신성\'이라는 어려운 낱말을 쪼개 보면 뜻이 보일까요?" 낱말 조각 카드를 넘기며 시연 단추로 조각마다 뜻이 짝 지어지는 모습을 보인다. "정신이 이상한 사람이 먹는 약"이라는 말이 나오면 "\'정신\'은 생각·마음·느낌을 말해요. 누구의 생각과 마음에도 작용할 수 있다면 어떤 뜻일까요?"라고 되묻는다. 향정신성 = \'정신(생각·마음)에 작용하는 성질\'이라고 정리한다.',
          student: '\'향정신성\' 낱말을 향·정신·성 세 조각으로 쪼개 조각마다 뜻을 짝 짓고, 전체 뜻을 한 문장으로 풀이해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '향(向)' }, { id: 's2', label: '정신(精神)' }, { id: 's3', label: '성(性)' }],
            cards: [{ id: 'k1', text: '~을 향해 작용하는' }, { id: 'k2', text: '생각·마음·느낌' }, { id: 'k3', text: '~하는 성질' }], shuffle: false },
            sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3' } }] },
          art: { draw: 'a paper-cut word card split into three pieces with small paper labels and a magnifying glass above', banner: '낱말을 쪼개 봐요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.terms', {
        title: '세 낱말 뜻 잇기', method: '개념과 뜻 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '개념 2개(의존·금단)만 뜻·예와 잇고, 놓으면 바로 맞는지 알려 준다.', base: '개념 3개(의존·내성·금단)를 뜻 카드와 생활 속 예 카드에 잇는다.', challenge: '세 개념이 이어지는 차례(내성 → 의존 → 금단)를 놓아 개념끼리의 관계를 설명한다.' },
        activity: {
          title: '세 낱말 뜻 잇기', tool: 'mindmap',
          teacher: '"의존·내성·금단은 서로 어떻게 다를까요? 생활 속 예로 떠올려 볼까요?" 뜻 카드를 먼저 잇고, 카페인·게임처럼 익숙한 예로 생활 속 모습을 나누게 한다. "의존은 의지가 약한 사람만 생긴다"는 학생에게 "같은 양으로 덜 느껴지는 \'내성\'은 의지와 상관이 있을까요, 몸과 뇌의 변화일까요?"라고 되묻는다. 세 개념은 뇌가 물질에 익숙해지며 생기는 변화라는 점을 짚는다.',
          task: '의존·내성·금단 개념 카드를 뜻 카드와 생활 속 예 카드에 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('개념마다 알맞은 뜻을 이어 보세요.', MEAN, [], { topic: '세 낱말의 뜻' }),
              MB('개념 두 개에 알맞은 뜻을 이어 보세요.', [MEAN[0], MEAN[2]], [], { topic: '세 낱말의 뜻' })),
            IT(SB('생활 속 예 카드를 알맞은 개념 가지에 붙이세요.', ['의존', '내성', '금단'], EX, { topic: '생활 속 모습' }),
              SB('생활 속 예 카드를 두 개념 가지에 붙이세요.', ['의존', '금단'], pickCards(EX, ['x1', 'x2', 'x5', 'x6']), { topic: '생활 속 모습' })),
            IT(PB('의존이 생겼을 때 나타날 수 있는 모습만 골라 담으세요.', '의존의 모습', [
              { id: 'p1', text: '하지 말아야지 해도 또 찾는다', ok: true }, { id: 'p2', text: '그것 생각에 다른 일에 집중이 안 된다', ok: true },
              { id: 'p3', text: '필요할 때만 정해진 양을 쓴다' }, { id: 'p4', text: '그만두고 싶을 때 바로 그만둔다' }], { topic: '의존의 모습' }),
              null,
              OB('세 개념이 이어지는 차례를 놓으세요.', [{ id: 'q1', text: '같은 양으로는 덜 느껴진다(내성)' }, { id: 'q2', text: '더 자주, 더 많이 찾게 된다(의존)' }, { id: 'q3', text: '줄이면 몸과 마음이 불편하다(금단)' }], { topic: '세 개념의 관계' }),
              { conclude: '의존·내성·금단은 뇌가 물질에 익숙해지며 생기는 변화예요. 의지만의 문제가 아니라서 처음부터 시작하지 않는 것이 가장 안전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 개념의 뜻을 내 말로 써요.', columns: ['개념', '내 말로 쓴 뜻'], cells: [['의존', ''], ['내성', ''], ['금단', '']], answer: '자꾸 찾게 됨 / 같은 양으로 덜 느껴짐 / 줄이면 몸과 마음이 불편함' }] },
      }),
      M('activity.cycle', {
        title: '의존 고리 순환판', method: '의존 고리 순환', tool: 'lifecycle', minutes: 16,
        levels: { easy: '고리 단계 3장을 순환판에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '고리 단계 4장을 놓고, 단계마다 고리를 끊는 도움을 짝 짓는다.', challenge: '시작·내성·금단·의존 이름을 고리 자리마다 붙이는데 함정 카드가 섞인다.' },
        activity: {
          title: '의존 고리 순환판', tool: 'lifecycle',
          teacher: '"잠깐 달라진 기분이 왜 다시 처음으로 돌아오는 고리가 될까요?" 순환판에 단계를 놓게 하고, 마지막 칸에서 첫 칸으로 이어지는 화살표를 짚는다. "한 번은 의존이 생기지 않는다"는 학생에게 "이 고리의 첫 칸은 몇 번째에 시작될까요?"라고 되묻는다. 고리의 어느 칸에서든 믿을 만한 어른·상담으로 끊을 수 있다는 점을 짚는다.',
          task: '\'잠깐 기분이 달라짐 → 다시 찾음 → 생활 피해 → 또 찾음\' 고리를 순환판에 놓고, 끊을 수 있는 자리마다 도움을 짝 지어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT({ prompt: '의존 고리 단계를 순환판에 차례대로 놓으세요.', toolOptions: { center: '의존 고리', cards: [CYC[2], CYC[0], CYC[3], CYC[1]] }, target: { order: CYC.map((c) => c.id), cyclic: true } },
              { prompt: '의존 고리 단계 3장을 순환판에 차례대로 놓으세요.', toolOptions: { cards: [CYC[2], CYC[0], CYC[1]] }, target: { order: ['y1', 'y2', 'y3'], cyclic: true } }),
            IT({ prompt: '고리 단계마다 고리를 끊는 도움 카드를 짝 지으세요.', toolOptions: { mode: 'match', center: '고리 끊기', slots: [{ id: 'p1', label: '잠깐 기분이 달라진다' }, { id: 'p2', label: '그 느낌을 다시 찾게 된다' }, { id: 'p3', label: '생활에 피해가 생긴다' }, { id: 'p4', label: '힘들어서 또 찾는다' }],
              cards: ['처음부터 시작하지 않기', '믿을 만한 어른에게 말하기', '보건·상담 선생님과 상담', '상담·치료를 꾸준히 이어 가기'] }, target: { match: { p1: '처음부터 시작하지 않기', p2: '믿을 만한 어른에게 말하기', p3: '보건·상담 선생님과 상담', p4: '상담·치료를 꾸준히 이어 가기' } } },
              { prompt: '고리 단계 세 곳에 끊는 도움 카드를 짝 지으세요.', toolOptions: { slots: [{ id: 'p1', label: '잠깐 기분이 달라진다' }, { id: 'p2', label: '그 느낌을 다시 찾게 된다' }, { id: 'p3', label: '생활에 피해가 생긴다' }], cards: ['처음부터 시작하지 않기', '믿을 만한 어른에게 말하기', '보건·상담 선생님과 상담'] }, target: { match: { p1: '처음부터 시작하지 않기', p2: '믿을 만한 어른에게 말하기', p3: '보건·상담 선생님과 상담' } } }),
            IT({ prompt: '고리 자리마다 알맞은 개념 이름을 붙이세요.', toolOptions: { mode: 'match', center: '고리 속 개념', slots: [{ id: 'q1', label: '처음 써 본다' }, { id: 'q2', label: '같은 양으로는 덜 느껴진다' }, { id: 'q3', label: '없으면 몸과 마음이 불편하다' }, { id: 'q4', label: '자꾸 다시 찾는다' }],
              cards: ['시작', '내성', '금단', '의존'] }, target: { match: { q1: '시작', q2: '내성', q3: '금단', q4: '의존' } } },
              null,
              { prompt: '고리 자리마다 알맞은 개념 이름을 붙이세요(어울리지 않는 카드는 남겨요).', toolOptions: { cards: ['시작', '내성', '금단', '의존', '회복', '집중력 향상'] } },
              { conclude: '의존 고리는 한 번 시작되면 스스로 돌아가요. 처음부터 시작하지 않고, 고리 안에 있다면 어느 칸에서든 어른·상담의 도움으로 끊을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '의존 고리 네 칸과 끊는 도움을 써요.', columns: ['고리 칸', '끊는 도움'], cells: [['', ''], ['', ''], ['', ''], ['', '']], answer: '기분 변화—시작하지 않기 / 다시 찾음—어른에게 말하기 / 생활 피해—상담 / 또 찾음—치료 이어 가기' }] },
      }),
      M('activity.share', {
        title: '처방약 나눔 갈림길', method: '딜레마 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길을 두 번 골라 결과를 본다(근거 고르기 없음).', base: '갈림길을 세 번 골라 끝까지 가고 근거를 고른다.', challenge: '끝 장면에서 법·건강·관계 세 측면의 근거를 빠짐없이 골라 견준다.' },
        activity: {
          title: '처방약 나눔 갈림길', tool: 'dilemma',
          teacher: '"\'공부 잘 되는 약\'이라는 말은 사실일까요?" 학생마다 한 길을 끝까지 가 본 뒤 결과 칸의 영향을 형·친구·나로 나눠 읽게 한다. "병원 약이니 나눠 먹어도 괜찮다"는 학생에게 "의사는 그 약을 누구의 몸과 증상을 보고 정했을까요?"라고 되묻는다. 끝 장면에서는 법(관리되는 약)·건강(맞춤 처방)·관계(걱정을 말하기) 세 측면을 함께 따지게 한다.',
          task: '친구가 형이 처방받은 약을 \'공부 잘 되는 약\'이라며 나눠 달라는 장면에서 길을 골라 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 형의 처방약을 달라고 해요. 두 번 골라 결과를 보세요.', base: '친구가 형의 처방약을 달라고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 가고, 법·건강·관계 세 측면의 근거를 빠짐없이 고르세요.' },
              '형의 처방약', S1, [['no', 'explain', 'care'], ['bring', 'stop', 'tell']], RS1, ['r1', 'r2'], Object.assign({ all: true }, RS1_REL)),
            DIL({ easy: '짝이 엄마의 처방약을 나눠 먹자고 해요. 두 번 골라 결과를 보세요.', base: '짝이 엄마의 처방약을 나눠 먹자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 가고, 건강·마음·도움 세 측면의 근거를 빠짐없이 고르세요.' },
              '시험 기간 짝의 제안', S2, [['no', 'ask', 'counsel'], ['half', 'no2', 'listen']], RS2, ['r1', 'r2'], Object.assign({ all: true }, RS2_REL)),
            DIL({ easy: '형의 처방약 장면에서 다른 길도 가 볼 수 있어요. 두 번 골라 결과를 보세요.', base: '형의 처방약 장면에서 한 길을 끝까지 가고, 되돌아가 다른 길도 끝까지 가 본 뒤 근거를 고르세요.', challenge: '형의 처방약 장면에서 서로 다른 끝 장면 세 곳까지 가 보고 근거를 고르세요.' },
              '형의 처방약, 다른 길', S1, [['no', 'explain', 'care'], ['bring', 'stop', 'tell']], RS1, ['r1', 'r2'], { explore: 3 },
              { target: { path: [['no', 'explain', 'care'], ['bring', 'stop', 'tell']], reasons: ['r1', 'r2'], some: true, explore: 2 }, conclude: '처방약은 처방받은 사람만 먹어요. 뇌에 작용하는 약은 법으로 관리되고, \'공부 잘 되는 약\'은 없어요. 친구가 걱정되면 어른에게 함께 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '처방약을 나누면 안 되는 까닭을 세 측면으로 써요.', columns: ['측면', '까닭'], cells: [['법', ''], ['건강', ''], ['관계', '']], answer: '뇌에 작용하는 약은 법으로 관리된다 / 처방받은 사람의 몸에 맞춘 약이다 / 걱정을 말하고 어른에게 함께 가는 것이 친구를 지킨다' }] },
        notes: '약 이름·모양·효과 묘사는 하지 않는다. \'공부 잘 되는 약\'은 오해라는 점만 다룬다.',
      }),
      M('activity.impact', {
        title: '의존 전후 생활 그래프', method: '가상 자료 막대그래프 해석', tool: 'chart', minutes: 16,
        levels: { easy: '잠·학업 두 항목의 막대만 보이고 값이 함께 적혀 있다.', base: '잠·학업·관계 세 항목의 전후 막대를 읽고 피해를 정리한다.', challenge: '마지막 문항에서 그래프에 나오지 않는 피해를 찾는다.' },
        activity: {
          title: '의존 전후 생활 그래프', tool: 'chart',
          teacher: '"의존이 생기기 전과 뒤에 이 가상 인물의 생활은 어떻게 달라졌을까요?" 수업용 가상 자료라는 점을 먼저 밝히고, 항목마다 전·후 막대를 짝지어 읽게 한다. "잠깐 기분이 좋아지면 생활도 좋아진다"는 학생에게 "기분이 달라진 뒤 잠·학업·관계 막대는 올라갔나요, 내려갔나요?"라고 되묻는다. 그래프에 없는 피해(가족의 걱정·돈·법적 문제)도 함께 짚는다.',
          task: '가상 인물의 의존 전후 생활(잠·학업·관계) 점수 막대그래프를 읽고 피해를 정리해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '\'잠\' 점수는 의존 뒤에 몇 점 줄었는지 읽어 쓰세요.', toolOptions: CH('bar', LIFE_T, '점', LIFE, { xLabel: '항목', yLabel: '점수', max: 10, question: '잠 점수는 몇 점 줄었나요?' }), target: { value: 5 } },
              { toolOptions: { data: LIFE.slice(0, 4) } }),
            IT({ prompt: '의존 뒤에 가장 크게 줄어든 항목을 고르세요.', toolOptions: CH('bar', LIFE_T, '점', LIFE, { xLabel: '항목', yLabel: '점수', max: 10, question: '가장 크게 줄어든 항목은?', choices: ['잠', '학업', '관계'] }), target: { pick: 0 } },
              { toolOptions: { data: LIFE.slice(0, 4), choices: ['잠', '학업'] } }),
            IT({ prompt: '그래프로 알 수 있는 것을 고르세요.', toolOptions: CH('bar', LIFE_T, '점', LIFE, { xLabel: '항목', yLabel: '점수', max: 10, question: '그래프로 알 수 있는 것은?', choices: ['의존 뒤 모든 항목의 점수가 줄었다', '의존 뒤 학업 점수만 올랐다', '의존은 생활과 상관없다'] }), target: { pick: 0 } },
              { toolOptions: { data: LIFE.slice(0, 4) } },
              { prompt: '이 그래프에 나오지 않는 피해를 고르세요.', toolOptions: { question: '그래프에 나오지 않는 피해는?', choices: ['잠이 줄었다', '학업 점수가 줄었다', '가족의 걱정과 돈 문제'] }, target: { pick: 2 } },
              { conclude: '잠깐의 기분 변화 뒤에 잠·학업·관계가 함께 무너져요. 그래프에 없는 가족의 걱정·돈·법적 문제까지 피해는 더 넓어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '항목마다 전·후 점수와 줄어든 점수를 써요.', columns: ['항목', '전', '후', '줄어든 점수'], cells: [['잠', '8', '3', ''], ['학업', '7', '4', ''], ['관계', '8', '4', '']], answer: '5, 3, 4' }] },
        notes: '그래프는 지어낸 가상 인물의 자료다. 실제 통계가 아니라고 화면 제목에 밝혔다.',
      }),

      // ---- 정리 ----
      M('wrap.write', {
        title: '법으로 관리하는 까닭 글', method: '관리 이유 짧은 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 문장 틀("향정신성 물질은 ___에 작용한다. 그래서 ___이 생길 수 있다. 그래서 법으로 ___")을 칠판에 적어 준다.', base: '세 문장으로 쓰고 기준 3개(개념 사용·근거·명확함)를 스스로 점검한다. 의존·내성·금단 가운데 하나를 꼭 쓴다.', challenge: '교사가 의존·내성·금단 세 개념을 모두 넣어 써 보라고 덧붙인다.' },
        wrap: {
          teacher: '"\'위험하니까요\'라는 한마디로 충분할까요? 오늘 배운 낱말로 까닭을 말해 볼까요?" 의존·내성·금단 낱말을 칠판에 남겨 두고 세 문장으로 쓰게 한다. "법으로 막으면 아픈 사람도 못 쓴다"는 학생에게 "관리한다는 것은 금지만이 아니라, 꼭 필요한 사람이 의사의 처방으로 쓰게 하는 것이에요"라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '향정신성 물질을 법으로 관리하는 까닭을 세 문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 4, title: '관리하는 까닭', placeholder: '예: 향정신성 물질은 뇌에…' },
              prompt: '관리하는 까닭을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['오늘 배운 개념을 썼다', '까닭에 근거를 들었다', '읽는 사람이 알기 쉽게 썼다'], mustInclude: [['의존', '내성', '금단']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '향정신성 물질을 \'관리\'한다는 말의 뜻으로 가장 알맞은 것은?', options: ['누구도 절대 쓰지 못하게 한다', '꼭 필요한 사람이 의사의 처방으로만 쓰게 한다', '어른이면 누구나 살 수 있게 한다'], answer: 1, difficulty: 0.25, explain: '관리는 필요한 치료에는 쓰되, 잘못 쓰이지 않게 막는 것이에요.' },
          ],
        },
        worksheet: {
          title: '법으로 관리하는 까닭',
          items: [
            { type: 'short', prompt: '향정신성 물질을 법으로 관리하는 까닭을 세 문장으로 써요(의존·내성·금단 가운데 하나 이상).' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['개념을 썼다', '근거가 있다', '알기 쉽다'] },
          ],
          easy: { note: '"향정신성 물질은 ___에 작용한다. 그래서 ___이 생길 수 있다." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '향정신성 물질은 ___에 작용한다. 그래서 ___이 생길 수 있어 법으로 관리한다.', answer: '뇌, 의존' }] },
        },
      }),
      M('wrap.reflect', {
        title: '\'처방약은 나눠도 된다\' 생각 크기', method: '생각 변화 크기', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 수업 뒤 생각의 크기 하나만 고르게 한다.', base: '수업 전과 뒤의 생각 크기를 각각 고르고 까닭을 말한다.', challenge: '가족에게 알릴 한 문장(예: "처방약은 처방받은 사람만 먹어요")을 만들어 보게 한다.' },
        wrap: {
          teacher: '"수업 전에 \'병원 약이니 가족끼리 나눠 먹어도 된다\'는 생각은 얼마나 컸나요? 지금은 어떤가요?" 두 눈금을 차례로 고르게 한 뒤 바뀐 까닭을 한 줄로 말하게 한다. "우리 집은 원래 나눠 먹는다"는 말이 나오면 나무라지 말고, 오늘 배운 한 문장을 가족에게 전해 보자고 권한다. 가족의 실제 약이나 병명은 묻지 않는다.',
          exitTicket: [
            SCALE('수업 전: 병원 약은 가족·친구끼리 나눠 먹어도 된다', '걱정', '수업 전에 이 생각은 얼마나 컸는지 골라요.'),
            SCALE('수업 뒤: 병원 약은 가족·친구끼리 나눠 먹어도 된다', '걱정', '지금 이 생각은 얼마나 큰지 골라요.'),
            { type: 'short', prompt: '가족에게 알려 줄 한 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '내 생각의 크기',
          items: [
            { type: 'table', prompt: '\'처방약은 나눠도 된다\' 생각의 크기를 1~5로 적어요.', columns: ['때', '크기(1~5)'], cells: [['수업 전', ''], ['수업 뒤', '']] },
            { type: 'short', prompt: '가족에게 알려 줄 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 광고·미디어 분석과 예방 캠페인 만들기 (saf-drug.m.media-campaign) ====
  {
    const M = MK('media-campaign', [8]);
    const EXPO = [['동영상 앱', 9], ['드라마', 5], ['편의점 진열', 4], ['게임 광고', 2]];
    const PIECE = [
      { id: 'a1', text: '노을 진 바닷가 파티', to: '분위기' }, { id: 'a2', text: '밤새 신나는 축제 무대', to: '분위기' },
      { id: 'b1', text: '인기 있는 젊은 배우', to: '모델' }, { id: 'b2', text: '근육질 운동선수', to: '모델' },
      { id: 'c1', text: '"청춘이라면 오늘 밤!"', to: '문구' }, { id: 'c2', text: '"밤새도 쌩쌩, 시험 필승"', to: '문구' },
      { id: 'd1', text: '판단이 흐려진다는 내용', to: '숨긴 정보' }, { id: 'd2', text: '잠을 방해한다는 내용', to: '숨긴 정보' },
    ];
    const NEWAD = [
      { id: 'n1', text: '시험 기간 도서관 불빛', to: '분위기' }, { id: 'n2', text: '1등 했다는 선배 학생', to: '모델' },
      { id: 'n3', text: '"한 캔이면 밤샘 끝"', to: '문구' }, { id: 'n4', text: '다음 날 피로와 두근거림', to: '숨긴 정보' }, { id: 'nx', text: '캔 색깔이 파랗다' },
    ];
    const STEP5 = ['목표 정하기', '대상 정하기', '메시지 쓰기', '매체 고르기', '점검하기'];
    const SB4 = [{ id: 'v1', text: '시험 전날 밤 책상 위 캔 하나' }, { id: 'v2', text: '친구 문자 "같이 자자, 내일 맑게"' }, { id: 'v3', text: '아침, 개운하게 등교하는 두 친구' }, { id: 'v4', text: '"잠도 시험 준비야" 문구' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.ad', {
        title: '가상 광고 첫 느낌 크기', method: '가상 광고 첫 느낌', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 광고 장면을 읽어 주고 끌리는 크기만 고르게 한다.', base: '끌리는 크기를 고르고 무엇 때문에 끌렸는지(색·사람·음악·문구) 짐작해 말한다.', challenge: '이 광고가 보는 사람의 어떤 마음을 노렸을지 한 줄로 써 보게 한다.' },
        intro: {
          teacher: '"이 가상 광고를 처음 봤을 때 얼마나 끌리나요? 무엇 때문일까요?" 수업용 가상 광고 장면을 읽고 시연 단추로 눈금이 골라지는 모습을 보인다. "광고는 정보일 뿐 나한테는 영향이 없다"는 말이 나오면 "그렇다면 왜 광고 속 사람들은 모두 웃고 있을까요?"라고 되묻는다. 끌리는 것은 잘못이 아니라 광고가 그렇게 만들어졌기 때문이며, 오늘은 그 장치를 찾아 거꾸로 예방 캠페인을 만든다고 밝힌다.',
          student: '가상 광고 장면을 읽고 얼마나 끌리는지 골라요. 무엇 때문에 끌렸는지 짐작해 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 광고: 노을 진 해변, 웃는 친구들이 반짝이는 캔을 부딪치고 신나는 음악이 흐른다.', feeling: '신남', steps: 5, scaleLabels: { 1: '조금 끌린다', 5: '아주 끌린다' } }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper-cut beach at sunset with smiling paper figures raising shiny cans, framed like a TV advertisement screen', banner: '이 광고, 얼마나 끌리나요?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '광고는 수업용 가상 장면이다. 실제 상표·제품은 쓰지 않는다. 끌린다고 답한 학생을 나무라지 않는다.',
      }),
      M('intro.exposure', {
        title: '하루 노출 장면 막대그래프', method: '가상 노출 기록 막대그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 2개(동영상 앱·드라마)만 함께 그려 보인다.', base: '가상 학생의 기록표를 보고 막대 4개를 완성한 뒤 가장 많은 매체를 찾는다.', challenge: '내 하루와 견줘 볼 계획(어떤 매체를 하루 동안 세어 볼지)을 말한다.' },
        intro: {
          teacher: '"하루 동안 술·담배·고카페인 음료가 나오는 장면을 몇 번이나 볼까요?" 가상 학생의 기록표를 읽고 시연 단추로 막대가 완성되는 모습을 보인다. "나는 광고를 안 본다"는 말이 나오면 "드라마 속 인물이 술을 마시는 장면, 편의점 진열대도 광고일까요?"라고 되묻는다. 기록은 수업용 가상 자료이며, 학생의 실제 시청 기록은 발표시키지 않는다.',
          student: '가상 학생이 하루 동안 본 술·담배·음료 장면 수를 막대그래프로 완성하고, 가장 많이 본 매체를 찾아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '가상 학생이 하루 동안 본 술·담배·음료 장면', unit: '번', xLabel: '매체', yLabel: '장면 수', data: EXPO, showTable: true, max: 10 }, sequence: [{ build: true }] },
          art: { draw: 'a paper-cut phone, TV and convenience store shelf around a growing paper bar chart', banner: '하루에 몇 번 볼까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.devices', {
        title: '광고 조각 네 칸 나누기', method: '광고 장치 분류', tool: 'mindmap', minutes: 16,
        levels: { easy: '광고 조각 4장을 네 칸에 한 장씩 나누고, 놓으면 바로 맞는지 알려 준다.', base: '광고 조각 8장을 분위기·모델·문구·숨긴 정보 칸에 나누고, 칸마다 예를 하나 더 고른다.', challenge: '새 가상 광고(고카페인 음료)에 같은 네 칸을 적용해 나누는데 함정 카드가 섞인다.' },
        activity: {
          title: '광고 조각 네 칸 나누기', tool: 'mindmap',
          teacher: '"광고는 무엇으로 우리를 끌어들이고, 무엇을 말하지 않을까요?" 술·고카페인 음료 가상 광고 조각을 네 칸에 나눈 뒤 칸마다 예를 하나씩 더 고르게 한다. "모델이 멋있으면 제품도 좋은 것"이라는 학생에게 "모델은 그 제품을 실제로 날마다 쓰는 사람일까요, 광고를 찍는 사람일까요?"라고 되묻는다. 숨긴 정보 칸이 바로 캠페인이 드러낼 내용이라는 점을 짚는다.',
          task: '가상 광고 조각을 \'분위기·모델·문구·숨긴 정보\' 칸에 나누고, 칸마다 예를 하나씩 더해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('가상 광고 조각을 네 칸에 나누세요.', ['분위기', '모델', '문구', '숨긴 정보'], PIECE, { topic: '광고의 장치' }),
              SB('가상 광고 조각 4장을 네 칸에 한 장씩 나누세요.', ['분위기', '모델', '문구', '숨긴 정보'], pickCards(PIECE, ['a1', 'b1', 'c1', 'd1']), { topic: '광고의 장치' })),
            IT(PB('\'숨긴 정보\' 칸에 더할 예만 골라 담으세요.', '숨긴 정보에 더할 예', [
              { id: 'h1', text: '다음 날 머리가 아프다는 내용', ok: true }, { id: 'h2', text: '청소년에게 더 해롭다는 내용', ok: true },
              { id: 'h3', text: '캔이 시원해 보인다' }, { id: 'h4', text: '모델이 웃고 있다' }], { topic: '숨긴 정보 더하기' })),
            IT(SB('새 가상 광고(고카페인 음료) 조각을 네 칸에 나누세요(맞지 않는 카드는 남겨요).', ['분위기', '모델', '문구', '숨긴 정보'], NEWAD, { topic: '새 광고에 적용' }),
              SB('새 가상 광고(고카페인 음료) 조각 4장을 네 칸에 나누세요.', ['분위기', '모델', '문구', '숨긴 정보'], NEWAD.filter((c) => c.to), { topic: '새 광고에 적용' }),
              null, { conclude: '광고는 분위기·모델·문구로 끌어들이고 몸과 생활에 주는 영향은 숨겨요. 숨긴 정보를 드러내는 것이 예방 캠페인의 출발점이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '새 광고에서 찾은 장치를 칸마다 써요.', columns: ['분위기', '모델', '문구', '숨긴 정보'], cells: [['', '', '', '']], answer: '(예) 도서관 불빛 / 1등 선배 / "한 캔이면 밤샘 끝" / 다음 날 피로' }] },
        notes: '광고 조각은 모두 지어낸 것이다. 실제 상표·인물은 쓰지 않는다.',
      }),
      M('activity.rewrite', {
        title: '숨긴 정보 넣어 다시 쓰기', method: '숨긴 정보 넣어 다시 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀("광고는 ___라고 말하지만, ___는 말하지 않아요. 사실은 ___")을 채워 쓴다.', base: '가상 광고 문구를 숨긴 정보까지 넣어 두세 문장으로 다시 쓰고 기준 3개(사실·균형·대상에 맞는 말)를 점검한다.', challenge: '마지막 글에서 다른 모둠 글을 같은 기준으로 평가하는 항목이 더해진다.' },
        activity: {
          title: '숨긴 정보 넣어 다시 쓰기', tool: 'rubric-writing',
          teacher: '"광고 문구에 빠진 한 문장을 넣으면 느낌이 어떻게 달라질까요?" 가상 광고 문구를 읽고 숨긴 정보까지 넣어 다시 쓰게 한다. "광고를 다시 쓰면 무섭게 써야 한다"는 학생에게 "사실을 차분히 쓴 문장과 겁주는 문장 가운데 중학생이 더 믿는 것은 어느 쪽일까요?"라고 되묻는다. 좋은 다시 쓰기는 광고의 말과 숨긴 사실을 나란히 보여 준다는 점을 짚는다.',
          task: '가상 광고 문구를 숨긴 정보까지 넣어 다시 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '가상 음료 광고 "밤새도 쌩쌩, 시험 필승!"을 숨긴 정보까지 넣어 다시 쓰세요.', toolOptions: { topic: '가상 음료 광고 "밤새도 쌩쌩, 시험 필승!"을 숨긴 정보까지 넣어 두세 문장으로 다시 쓰세요.', minChars: 30, maxChars: 220, minSentences: 2, maxSentences: 3, title: '음료 광고 다시 쓰기', lines: 4 }, target: { selfCheck: ['사실에 맞는 정보를 넣었다', '광고의 말과 숨긴 사실을 함께 썼다', '중학생에게 맞는 말로 썼다'] } },
              { prompt: '틀을 따라 음료 광고를 다시 쓰세요.', toolOptions: { starter: '광고는 "밤새도 쌩쌩"이라고 말하지만, ___는 말하지 않아요. 사실은 ___.' } }),
            IT({ prompt: '가상 주류 광고 "청춘이라면 오늘 밤!"을 숨긴 정보까지 넣어 다시 쓰세요.', toolOptions: { topic: '가상 주류 광고 "청춘이라면 오늘 밤!"을 숨긴 정보까지 넣어 두세 문장으로 다시 쓰세요.', minChars: 30, maxChars: 220, minSentences: 2, maxSentences: 3, title: '주류 광고 다시 쓰기', lines: 4 }, target: { selfCheck: ['사실에 맞는 정보를 넣었다', '광고의 말과 숨긴 사실을 함께 썼다', '중학생에게 맞는 말로 썼다'] } },
              { prompt: '틀을 따라 주류 광고를 다시 쓰세요.', toolOptions: { starter: '광고는 "청춘이라면 오늘 밤"이라고 말하지만, ___는 말하지 않아요. 사실은 ___.' } }),
            IT({ prompt: '편의점 진열대 문구 "공부 친구 에너지 음료 1+1"을 숨긴 정보까지 넣어 다시 쓰세요.', toolOptions: { topic: '편의점 진열대 문구 "공부 친구 에너지 음료 1+1"을 숨긴 정보까지 넣어 두세 문장으로 다시 쓰세요.', minChars: 30, maxChars: 220, minSentences: 2, maxSentences: 3, title: '진열대 문구 다시 쓰기', lines: 4 }, target: { selfCheck: ['사실에 맞는 정보를 넣었다', '광고의 말과 숨긴 사실을 함께 썼다', '중학생에게 맞는 말로 썼다'] } },
              { prompt: '틀을 따라 진열대 문구를 다시 쓰세요.', toolOptions: { starter: '진열대는 "공부 친구"라고 말하지만, ___는 말하지 않아요. 사실은 ___.' } },
              { prompt: '진열대 문구를 다시 쓴 뒤, 다른 모둠 글을 같은 기준으로 평가하고 기준표에 표시하세요.', target: { selfCheck: ['사실에 맞는 정보를 넣었다', '광고의 말과 숨긴 사실을 함께 썼다', '중학생에게 맞는 말로 썼다', '다른 모둠 글을 같은 기준으로 평가했다'] } },
              { conclude: '좋은 다시 쓰기는 광고의 말과 숨긴 사실을 나란히 놓아요. 겁주는 말보다 차분한 사실이 더 오래 믿음을 얻어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 다시 쓴 문구 가운데 하나를 옮겨 써요.' }] },
      }),
      M('activity.plan', {
        title: '캠페인 준비 차례', method: '캠페인 준비 순서', tool: 'kitchen', minutes: 16,
        levels: { easy: '준비 카드 3장(목표·메시지·매체)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '준비 카드 5장(목표 → 대상 → 메시지 → 매체 → 점검)을 놓고 단계마다 우리 모둠 예를 짝 짓는다.', challenge: '마지막 문항에서 캠페인을 점검할 방법을 고르는데 함정 항목이 더 섞인다.' },
        activity: {
          title: '캠페인 준비 차례', tool: 'kitchen',
          teacher: '"포스터부터 그리면 왜 캠페인이 흔들릴까요?" 준비 카드를 차례로 놓은 뒤 단계마다 우리 모둠 예를 짝 짓게 한다. "무섭게 만들수록 좋은 캠페인"이라는 학생에게 "대상이 시험을 앞둔 1학년이라면, 겁주는 그림과 \'잠도 시험 준비야\' 가운데 무엇이 행동을 바꿀까요?"라고 되묻는다. 목표와 대상을 먼저 정해야 메시지와 매체가 맞춰진다는 점을 짚는다.',
          task: '\'목표 → 대상 → 메시지 → 매체 → 점검\' 카드를 차례로 놓고, 단계마다 우리 모둠 캠페인 계획을 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '캠페인 준비 카드를 차례로 놓으세요.', toolOptions: { mode: 'order', slots: 5, cards: [STEP5[3], STEP5[0], STEP5[4], STEP5[2], STEP5[1]] }, target: { order: STEP5 } },
              { prompt: '캠페인 준비 카드 3장을 차례로 놓으세요.', toolOptions: { slots: 3, cards: ['매체 고르기', '목표 정하기', '메시지 쓰기'] }, target: { order: ['목표 정하기', '메시지 쓰기', '매체 고르기'] } }),
            IT(MB('준비 단계마다 우리 모둠의 예를 이어 보세요.', [['목표', '시험 기간에 잠 지키기'], ['대상', '시험을 앞둔 1학년'], ['메시지', '"잠도 시험 준비야"'], ['매체', '복도 포스터와 학급 방송']], [], { autoMotif: false }),
              MB('준비 단계 두 곳에 우리 모둠의 예를 이어 보세요.', [['목표', '시험 기간에 잠 지키기'], ['대상', '시험을 앞둔 1학년']], [], { autoMotif: false })),
            IT(CL('캠페인을 점검할 방법으로 알맞은 것만 표시하세요.', '캠페인 점검 방법', [
              { id: 'k1', text: '대상 학생 몇 명에게 먼저 보여 준다', ok: true }, { id: 'k2', text: '사실의 출처를 다시 확인한다', ok: true },
              { id: 'k3', text: '겁주는 그림이 없는지 본다', ok: true }, { id: 'k4', text: '가장 무서운 사진을 하나 더 넣는다' }]),
              null,
              CL('캠페인을 점검할 방법으로 알맞은 것만 표시하세요(헷갈리는 항목이 섞여 있어요).', '캠페인 점검 방법', [
                { id: 'k1', text: '대상 학생 몇 명에게 먼저 보여 준다', ok: true }, { id: 'k2', text: '사실의 출처를 다시 확인한다', ok: true },
                { id: 'k3', text: '겁주는 그림이 없는지 본다', ok: true }, { id: 'k5', text: '보고 나서 할 행동이 들어 있는지 본다', ok: true },
                { id: 'k4', text: '가장 무서운 사진을 하나 더 넣는다' }, { id: 'k6', text: '글씨를 최대한 많이 넣는다' }]),
              { conclude: '캠페인은 목표와 대상을 먼저 정하고, 그에 맞춘 메시지·매체를 고른 뒤, 대상에게 먼저 보여 점검해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 캠페인 계획을 단계마다 써요.', columns: ['목표', '대상', '메시지', '매체', '점검'], cells: [['', '', '', '', '']], answer: '(예) 잠 지키기 / 1학년 / "잠도 시험 준비야" / 포스터 / 1학년 3명에게 먼저 보이기' }] },
      }),
      M('activity.storyboard', {
        title: '캠페인 영상 네 장면', method: '캠페인 영상 스토리보드', tool: 'story', minutes: 16,
        levels: { easy: '장면 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례로 놓고 장면마다 알맞은 문구를 짝 짓는다.', challenge: '마지막 장면에 넣을 행동 촉구 문구를 고르는데 겁주는 문구가 더 섞인다.' },
        activity: {
          title: '캠페인 영상 네 장면', tool: 'story',
          teacher: '"공포 대신 사실과 공감으로 영상을 만들면 어떤 장면이 들어갈까요?" 장면 카드를 차례로 놓고 장면마다 문구를 짝 짓게 한다. "쓰러지는 장면이 있어야 기억에 남는다"는 학생에게 "겁나는 장면을 본 뒤 오늘 밤 내가 할 일이 떠오를까요?"라고 되묻는다. 마지막 장면에는 보는 사람이 바로 할 수 있는 행동 하나를 넣는다는 점을 짚는다.',
          task: '공포보다 사실과 공감에 기댄 캠페인 영상 네 장면을 차례로 짜고, 장면마다 문구를 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('캠페인 영상 장면을 차례로 놓으세요.', SB4, { title: '잠도 시험 준비야' }),
              OB('캠페인 영상 장면 3장을 차례로 놓으세요.', SB4.slice(0, 3), { title: '잠도 시험 준비야' })),
            IT(MB('장면마다 알맞은 문구를 이어 보세요.', [['책상 위 캔 하나', '"오늘 밤, 또 버틸 거야?"'], ['친구 문자', '"같이 자자, 내일 맑게"'], ['개운한 아침 등교', '"푹 잔 머리가 이긴다"'], ['마지막 장면', '"오늘은 11시에 불 끄기"']], [], { title: '장면과 문구' }),
              MB('장면 두 곳에 알맞은 문구를 이어 보세요.', [['책상 위 캔 하나', '"오늘 밤, 또 버틸 거야?"'], ['개운한 아침 등교', '"푹 잔 머리가 이긴다"']], [], { title: '장면과 문구' })),
            IT(PB('마지막 장면에 넣을 행동 촉구 문구만 골라 담으세요.', '행동 촉구 문구', [
              { id: 'p1', text: '"오늘은 11시에 불 끄기"', ok: true }, { id: 'p2', text: '"졸리면 캔 대신 10분 걷기"', ok: true }, { id: 'p3', text: '"마시면 큰일 난다!"' }]),
              null,
              PB('마지막 장면에 넣을 행동 촉구 문구만 골라 담으세요(겁주는 문구는 남겨요).', '행동 촉구 문구', [
                { id: 'p1', text: '"오늘은 11시에 불 끄기"', ok: true }, { id: 'p2', text: '"졸리면 캔 대신 10분 걷기"', ok: true }, { id: 'p4', text: '"친구에게 같이 자자고 문자하기"', ok: true },
                { id: 'p3', text: '"마시면 큰일 난다!"' }, { id: 'p5', text: '"이걸 보고도 마실 거야?"' }]),
              { conclude: '공포보다 사실과 공감이 오래 남아요. 마지막 장면에는 오늘 바로 할 수 있는 행동 하나를 넣어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 캠페인 영상 네 장면과 문구를 써요.', columns: ['장면', '문구'], cells: [['1', ''], ['2', ''], ['3', ''], ['4 (행동)', '']], answer: '(예) 책상 위 캔 / 친구 문자 / 개운한 아침 / "오늘은 11시에 불 끄기"' }] },
      }),

      // ---- 정리 ----
      M('wrap.self', {
        title: '캠페인 스스로 점검', method: '스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개(근거·대상·공포 자극 없음)를 먼저 함께 읽고 표시하게 한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '표시하지 못한 항목에서 고칠 점 한 가지를 적게 한다.' },
        wrap: {
          teacher: '"우리 모둠 캠페인을 대상 학생이 본다면, 무엇을 먼저 확인해야 할까요?" 점검 항목을 하나씩 읽으며 실제로 한 것에만 표시하게 한다. "다 표시해야 좋은 캠페인"이라는 말에는 표시하지 못한 칸이 바로 고칠 곳이라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '캠페인 스스로 점검' }, prompt: '우리 모둠 캠페인에서 실제로 한 것에 스스로 표시해요.', target: { selfCheck: ['근거 있는 사실을 넣었다', '대상에 맞는 말을 썼다', '겁주는 장면 없이 만들었다', '보고 나서 할 행동을 넣었다', '광고가 숨긴 정보를 드러냈다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '"무섭게 만들수록 좋은 캠페인"이라는 말에 대한 반박으로 가장 알맞은 것은?', options: ['무서운 그림은 비싸다', '겁만 주면 할 일이 떠오르지 않아, 사실과 행동이 더 오래 남는다', '캠페인은 아무도 안 본다'], answer: 1, difficulty: 0.2, explain: '사실과 공감, 할 수 있는 행동이 들어간 캠페인이 행동을 바꿔요.' },
            { type: 'short', prompt: '우리 캠페인에서 고칠 점 한 가지를 써요.' },
          ],
        },
        worksheet: {
          title: '캠페인 스스로 점검',
          items: [
            { type: 'check', prompt: '우리 모둠 캠페인에서 한 것에 표시해요.', options: ['근거 있는 사실', '대상에 맞는 말', '겁주는 장면 없음', '할 행동', '숨긴 정보 드러내기'] },
            { type: 'short', prompt: '고칠 점 한 가지와 고칠 방법을 써요.' },
          ],
        },
      }),
      M('wrap.peer', {
        title: '다른 모둠 피드백 그물', method: '다른 모둠 피드백 그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 \'좋은 점\'·\'제안\' 카드를 한 장씩만 붙이게 한다.', base: '\'좋은 점\'·\'제안\' 가지에 카드를 두 장씩 붙인다.', challenge: '제안 카드마다 그렇게 생각한 근거를 한 문장 덧붙여 말하게 한다.' },
        wrap: {
          teacher: '"다른 모둠 캠페인에 건넬 말은 \'별로야\'일까요, \'~하면 더 좋겠어\'일까요?" 피드백 카드를 좋은 점과 제안 가지에 나누어 붙이게 한다. "칭찬만 하면 된다"는 말에는 구체적인 제안이 있어야 캠페인이 나아진다고 짚는다. 사람이 아니라 캠페인에 대해 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '다른 모둠 캠페인', slots: ['좋은 점', '제안'], cards: [
              { id: 'g1', text: '대상에 맞는 말을 썼다' }, { id: 'g2', text: '숨긴 정보를 잘 드러냈다' },
              { id: 's1', text: '마지막에 할 행동을 넣으면 좋겠다' }, { id: 's2', text: '사실의 출처를 적으면 좋겠다' }, { id: 't1', text: '그냥 별로다' }] },
              prompt: '피드백 카드를 \'좋은 점\'과 \'제안\' 가지에 나누어 붙여요(도움이 안 되는 말은 남겨요).', target: { sort: { '좋은 점': ['g1', 'g2'], 제안: ['s1', 's2'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '다른 모둠에 건넬 제안으로 가장 알맞은 것은?', options: ['이건 별로야', '마지막 장면에 오늘 할 행동을 넣으면 더 좋겠어', '우리 모둠 게 더 낫다'], answer: 1, difficulty: 0.15, explain: '제안은 구체적이고 존중하는 말로 해요.' },
            { type: 'short', prompt: '다른 모둠 캠페인에 건넬 제안 한 가지와 그 근거를 써요.' },
          ],
        },
        worksheet: {
          title: '다른 모둠 피드백',
          items: [
            { type: 'table', prompt: '다른 모둠 캠페인에 건넬 말을 써요.', columns: ['좋은 점', '제안(근거)'], cells: [['', ''], ['', '']] },
            { type: 'short', prompt: '받은 피드백 가운데 우리 캠페인에 반영할 것 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 마약류의 세 갈래와 법적 책임 (saf-drug.m.drug-law) ====
  {
    const M = MK('drug-law', [9]);
    const KIND = [
      { id: 'a1', text: '의료용 강한 진통제로 쓰이기도 한다', to: '마약' }, { id: 'a2', text: '법이 정한 식물 성분에서 나온 것이 많다', to: '마약' },
      { id: 'b1', text: '뇌에 작용하는 의약품 가운데 법이 정한 것', to: '향정신성의약품' }, { id: 'b2', text: '병원 처방약 가운데에도 있다', to: '향정신성의약품' },
      { id: 'c1', text: '대마라는 식물과 그것으로 만든 것', to: '대마' }, { id: 'c2', text: '외국에서 허용돼도 우리나라에선 마약류', to: '대마' },
      { id: 't1', text: '편의점에서 파는 사탕' },
    ];
    const DUTY = [
      { id: 'd1', text: '마약류를 갖고 있기', to: '책임이 따르는 행위' }, { id: 'd2', text: '친구에게 건네주기', to: '책임이 따르는 행위' },
      { id: 'd3', text: '부탁받은 상자 옮겨 주기', to: '책임이 따르는 행위' }, { id: 'd4', text: '마약류 광고 글 퍼뜨리기', to: '책임이 따르는 행위' },
      { id: 'p1', text: '어른에게 도움 요청하기', to: '나를 지키는 행동' }, { id: 'p2', text: '권유를 분명히 거절하기', to: '나를 지키는 행동' },
      { id: 'p3', text: '위험할 때 112에 신고하기', to: '나를 지키는 행동' }, { id: 'p4', text: '모르는 물건 받지 않기', to: '나를 지키는 행동' },
    ];
    const MAP = { grid: [6, 4], title: '가상의 우리 학교와 동네', legend: false, places: [
      { name: '담임 교실', icon: 'school', at: [0, 0] }, { name: '상담실', icon: 'office', at: [1, 0] }, { name: '보건실', icon: 'hospital', at: [2, 0] },
      { name: '지구대', icon: 'police', at: [5, 1] }, { name: '공원', icon: 'park', at: [3, 2] }, { name: '편의점', icon: 'market', at: [1, 3] }, { name: '우리 집', icon: 'apartment', at: [5, 3] },
    ] };
    const PHONE = (i) => ({ q: '이때 전화한다면 어디로?', choices: ['112(경찰)', '1388(청소년 상담)', '아무에게도 하지 않는다'], why: ['급하게 위험하거나 범죄가 의심될 때는 112예요.', '급하지 않은 고민 상담은 1388이에요.', '혼자 두지 말고 도움을 청해요.'].map((w, j) => (j === i ? '' : w)) });
    const HOOK = { text: '친구가 해외 직구로 산 \'잠 잘 오는 젤리\'라며 하나 먹어 보라고 내민다. 포장에 외국어만 적혀 있다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'eat', text: '하나 받아 먹는다', result: '무슨 성분인지 모르는 채 먹었다.', impact: [{ who: '나', text: '알 수 없는 위험을 안는다', tone: -1 }], end: '성분을 모르는 채 먹었어요.',
        next: { text: '친구가 "더 줄까? 반 친구들한테도 나눠 줄 거야"라고 한다.', choices: [
          { id: 'more', text: '"나도 몇 개 더"라며 받는다', result: '성분을 모르는 젤리가 여러 사람에게 퍼진다.', impact: [{ who: '반 친구들', text: '위험이 퍼진다', tone: -1 }] },
          { id: 'stop', text: '"성분을 모르니 그만하자"며 어른에게 알리자고 한다', result: '친구가 망설이다 담임 선생님께 함께 간다.', impact: [{ who: '친구', text: '도움을 받는다', tone: 1 }] }] } },
      { id: 'ask', text: '"성분이 뭔지 알아?"라고 묻고 받지 않는다', result: '친구가 "해외에선 다 파는 거래"라고 한다.', impact: [{ who: '나', text: '몸을 지킨다', tone: 1 }], end: '받지 않고 성분을 물었어요.',
        next: { text: '친구가 "해외에선 다 파는 거래. 괜찮아"라고 한다.', choices: [
          { id: 'take', text: '"그럼 괜찮겠지" 하고 받는다', result: '성분을 모르는 채 먹게 된다.', impact: [{ who: '나', text: '알 수 없는 위험을 안는다', tone: -1 }] },
          { id: 'tell', text: '"해외 제품도 성분이 문제일 수 있어. 선생님께 여쭤보자"고 한다', result: '담임 선생님이 젤리를 살펴보고 보호자와 이야기한다.', impact: [{ who: '친구', text: '도움을 받는다', tone: 1 }] }] } }] };
    const RH = [{ id: 'r1', text: '해외 직구 제품이라도 성분을 모르면 받지 않는다' }, { id: 'r2', text: '해외에서 판다고 우리나라에서 괜찮은 것은 아니다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.hook', {
        title: '\'잠 잘 오는 젤리\' 첫 판단', method: '짧은 딜레마로 첫 판단', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림길 하나만 함께 고르고 결과를 읽는다.', base: '갈림길 두 번을 끝까지 가 보고 결과를 말한다.', challenge: '끝 장면에서 내 판단의 근거 카드를 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"포장에 외국어만 적힌 \'잠 잘 오는 젤리\', 해외에서 판다면 괜찮을까요?" 갈림길 장면을 읽고 시연 단추로 \'성분을 묻고 받지 않는다\' 길이 끝까지 가는 모습을 보인다. "해외 직구 제품은 괜찮다"는 말이 나오면 "우리나라에서 마약류로 관리하는 성분이 들어 있다면, 산 곳이 해외라는 것이 달라지게 할까요?"라고 되묻는다. 오늘은 법이 마약류를 어떻게 나누어 관리하는지, 어떤 행동에 책임이 따르는지 알아본다고 밝힌다.',
          student: '친구가 해외 직구 젤리를 내미는 장면에서 첫 판단을 하고, 그 결과를 봐요. 왜 그렇게 골랐는지 짝에게 말해요.',
          demo: DEMO_DIL('해외 직구 젤리', HOOK, 2, [['ask', 'tell']], [RH[0]]),
          art: { draw: 'a paper-cut school hallway with one student holding out a small foreign-labeled candy pack and another student pausing with a raised hand', banner: '해외 제품이면 괜찮을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '젤리는 수업용 가상 장면이다. 실제 제품·성분 이름은 다루지 않는다.',
      }),
      M('intro.news', {
        title: '가상 기사 낱말 뜻 맞추기', method: '가상 기사 낱말 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 \'마약류\'·\'대마\' 두 낱말만 함께 뜻과 맞춘다.', base: '\'마약류\'·\'향정\'·\'대마\' 세 낱말을 뜻 카드와 맞춘다.', challenge: '기사 속 행위 낱말(소지)까지 뜻과 맞추고 쉬운 말로 바꿔 말한다.' },
        intro: {
          teacher: '"뉴스에서 \'마약류\', \'향정\' 같은 낱말을 들으면 무슨 뜻인지 아나요?" 수업용 가상 기사 제목 카드를 넘기고 시연 단추로 낱말과 뜻이 짝 지어지는 모습을 보인다. "마약류는 어른들만의 문제"라는 말에는 "이 가상 기사 제목에 \'청소년\'이라는 낱말이 왜 들어 있을까요?"라고 되묻는다. 어려운 낱말을 쉬운 말로 바꾸면 뉴스를 스스로 판단할 수 있다는 점을 짚는다.',
          student: '가상 기사 제목에서 \'마약류\'·\'향정\'·\'대마\'·\'소지\' 낱말을 찾아 뜻 카드와 맞춰요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '마약류' }, { id: 's2', label: '향정' }, { id: 's3', label: '대마' }, { id: 's4', label: '소지' }],
            cards: [{ id: 'k1', text: '마약·향정신성의약품·대마를 함께 이르는 말' }, { id: 'k2', text: '향정신성의약품을 줄인 말' }, { id: 'k3', text: '법에서 마약류로 관리하는 식물과 그 제품' }, { id: 'k4', text: '갖고 있음' }], shuffle: false },
            sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3', s4: 'k4' } }] },
          art: { draw: 'a paper-cut newspaper headline strip with a few highlighted words and small paper meaning cards beneath', banner: '기사 속 낱말, 무슨 뜻?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '기사 제목은 지어낸 가상 자료다. 실제 사건·인물은 다루지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.classify', {
        title: '마약류 세 갈래 나누기', method: '법의 세 갈래 분류', tool: 'mindmap', minutes: 16,
        levels: { easy: '설명 카드 3장(갈래마다 한 장)을 붙이고, 놓으면 바로 맞는지 알려 준다.', base: '설명 카드 6장을 세 갈래에 나누고(함정 카드는 남김), 가상 사건을 갈래와 잇는다.', challenge: '나누어 관리하는 까닭을 고르는데 함정 카드가 더 섞이고, 활동지에 까닭을 쓴다.' },
        activity: {
          title: '마약류 세 갈래 나누기', tool: 'mindmap',
          teacher: '"「마약류 관리에 관한 법률」은 마약류를 왜 세 갈래로 나눴을까요?" 설명 카드를 마약·향정신성의약품·대마 가지에 나누게 한다. "병원 약은 마약류와 상관없다"는 학생에게 "\'병원 처방약 가운데에도 있다\'는 카드는 어느 가지에 붙었나요?"라고 되묻는다. 치료에 필요한 것은 처방으로 쓰게 하고, 잘못 쓰이는 것은 막으려고 갈래마다 관리한다는 점을 짚는다.',
          task: '\'마약류\' 가운데 칸에서 마약·향정신성의약품·대마 세 가지에 설명 카드를 알맞게 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('설명 카드를 마약류 세 갈래에 나누세요(마약류가 아닌 카드는 남겨요).', ['마약', '향정신성의약품', '대마'], KIND, { topic: '마약류' }),
              SB('설명 카드 3장을 세 갈래에 한 장씩 붙이세요.', ['마약', '향정신성의약품', '대마'], pickCards(KIND, ['a1', 'b2', 'c1']), { topic: '마약류' })),
            IT(MB('가상 사건마다 관련된 갈래를 이어 보세요.', [['처방받은 약을 친구에게 나눠 준 사건', '향정신성의약품'], ['외국에서 사 온 대마 젤리 사건', '대마'], ['의료용 진통제를 빼돌린 사건', '마약']], [], { topic: '가상 사건' }),
              MB('가상 사건 두 개에 관련된 갈래를 이어 보세요.', [['처방받은 약을 친구에게 나눠 준 사건', '향정신성의약품'], ['외국에서 사 온 대마 젤리 사건', '대마']], [], { topic: '가상 사건' })),
            IT(PB('마약류를 갈래마다 나누어 관리하는 까닭만 골라 담으세요.', '나누어 관리하는 까닭', [
              { id: 'w1', text: '물질마다 성질과 쓰임이 달라서', ok: true }, { id: 'w2', text: '치료에 필요한 것은 처방으로 쓰게 하려고', ok: true }, { id: 'w3', text: '이름이 어려워서' }], { topic: '왜 나눌까?' }),
              null,
              PB('마약류를 갈래마다 나누어 관리하는 까닭만 골라 담으세요(헷갈리는 카드가 섞여 있어요).', '나누어 관리하는 까닭', [
                { id: 'w1', text: '물질마다 성질과 쓰임이 달라서', ok: true }, { id: 'w2', text: '치료에 필요한 것은 처방으로 쓰게 하려고', ok: true },
                { id: 'w4', text: '잘못 쓰이는 것을 막으려고', ok: true }, { id: 'w3', text: '이름이 어려워서' }, { id: 'w5', text: '어른만 쓰게 하려고' }], { topic: '왜 나눌까?' }),
              { conclude: '마약류는 법에서 마약·향정신성의약품·대마로 나뉘어 관리돼요. 치료에 필요한 것은 처방으로만 쓰고, 잘못 쓰이는 것은 막기 위해서예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '마약류를 세 갈래로 나누어 관리하는 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '마약류의 세 갈래가 아닌 것에 ○ 해요.', options: ['대마', '감기 사탕'], answer: '감기 사탕' }] },
      }),
      M('activity.duty', {
        title: '행위와 책임 나누기', method: '행위와 책임 분류', tool: 'story', minutes: 16,
        levels: { easy: '행동 카드 4장을 두 칸에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '행동 카드 8장을 \'책임이 따르는 행위\'·\'나를 지키는 행동\'으로 나누고 상황마다 행위 이름을 잇는다.', challenge: '도움 요청이 왜 다른 칸인지 까닭을 고르는데 함정 카드가 섞이고, 활동지에 설명을 쓴다.' },
        activity: {
          title: '행위와 책임 나누기', tool: 'story',
          teacher: '"직접 쓰지 않고 옮겨 주기만 했다면 책임이 없을까요?" 행동 카드를 두 칸에 나눈 뒤 상황마다 어떤 행위인지 이름을 잇게 한다. "옮겨 주기만 하면 괜찮다"는 학생에게 "\'옮겨 주기\' 카드는 어느 칸에 붙었나요? 왜 법은 갖고 있기·건네주기·옮겨 주기까지 책임을 묻는 걸까요?"라고 되묻는다. 반대로 어른에게 도움을 청하는 것은 나와 친구를 지키는 행동이라는 점을 짚는다. 형량은 다루지 않는다.',
          task: '\'갖고 있기·건네주기·옮겨 주기·광고 퍼뜨리기·도움 요청하기\' 같은 카드를 책임이 따르는 행위와 나를 지키는 행동으로 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('행동 카드를 두 칸에 나누세요.', ['책임이 따르는 행위', '나를 지키는 행동'], DUTY, { title: '행위와 책임' }),
              SB('행동 카드 4장을 두 칸에 나누세요.', ['책임이 따르는 행위', '나를 지키는 행동'], pickCards(DUTY, ['d1', 'd3', 'p1', 'p2']), { title: '행위와 책임' })),
            IT(MB('상황마다 어떤 행위인지 이름을 이어 보세요.', [['모르는 사람이 맡긴 상자를 다른 곳에 갖다줌', '옮겨 주기'], ['가방 속에 마약류를 넣어 다님', '갖고 있기'], ['SNS에 판매 광고 글을 공유함', '광고 퍼뜨리기']], [], { title: '무슨 행위일까?' }),
              MB('상황 두 개에 행위 이름을 이어 보세요.', [['모르는 사람이 맡긴 상자를 다른 곳에 갖다줌', '옮겨 주기'], ['가방 속에 마약류를 넣어 다님', '갖고 있기']], [], { title: '무슨 행위일까?' })),
            IT(PB('어른에게 도움을 청하는 것이 \'나를 지키는 행동\'인 까닭만 골라 담으세요.', '다른 칸인 까닭', [
              { id: 'q1', text: '위험을 더 퍼지지 않게 막는다', ok: true }, { id: 'q2', text: '나와 친구가 빨리 도움을 받는다', ok: true }, { id: 'q3', text: '친구를 혼나게 하려고' }]),
              null,
              PB('도움 요청이 \'나를 지키는 행동\'인 까닭만 골라 담으세요(헷갈리는 카드가 섞여 있어요).', '다른 칸인 까닭', [
                { id: 'q1', text: '위험을 더 퍼지지 않게 막는다', ok: true }, { id: 'q2', text: '나와 친구가 빨리 도움을 받는다', ok: true },
                { id: 'q4', text: '혼자 감당하지 않아도 된다', ok: true }, { id: 'q3', text: '친구를 혼나게 하려고' }, { id: 'q5', text: '말하면 무조건 아무 책임이 없어서' }]),
              { conclude: '갖고 있기·건네주기·옮겨 주기·광고 퍼뜨리기에도 책임이 따라요. 도움을 청하고 거절하는 것은 나와 친구를 지키는 행동이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'도움 요청하기\'가 왜 다른 행동과 다른 칸에 있는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '책임이 따르는 행위에 ○ 해요.', options: ['부탁받은 상자 옮겨 주기', '어른에게 도움 요청하기'], answer: '부탁받은 상자 옮겨 주기' }] },
        notes: '처벌 형량·조문 번호는 다루지 않는다. 학생의 주변 사람 이야기는 묻지 않는다.',
      }),
      M('activity.opinion', {
        title: '엄격히 관리하는 까닭 의견 글', method: '의견 글과 기준표', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '글 틀("나는 ___라고 생각한다. 왜냐하면 ___. 그래서 ___")을 채워 쓴다.', base: '가상 사례를 읽고 한 문단 의견 글을 쓴 뒤 기준 3개(주장·근거·반론 고려)를 점검한다.', challenge: '반론과 그에 대한 재반론까지 넣어 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '엄격히 관리하는 까닭 의견 글', tool: 'rubric-writing',
          teacher: '"\'내 몸이니 내 마음대로\'라는 반론에 어떻게 답할 수 있을까요?" 가상 사례를 읽고 왜 법으로 엄격히 관리하는지 의견 글을 쓰게 한다. "어른들이 알아서 할 일"이라는 학생에게 "오늘 본 가상 사건들에서 피해를 입은 사람은 쓴 사람 한 명뿐이었나요?"라고 되묻는다. 주장은 첫 문장에, 근거는 오늘 배운 사실로 쓰게 한다.',
          task: '가상 사례를 읽고 \'왜 마약류를 법으로 엄격히 관리하나\'에 대한 의견 글을 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '해외 직구 젤리 사례를 읽고 의견 글을 쓰세요.', toolOptions: { topic: '가상 사례: 해외 직구 젤리에 마약류 성분이 들어 있었다. "왜 법으로 엄격히 관리하나"에 대한 내 의견을 한 문단으로 쓰세요.', minChars: 60, maxChars: 320, minSentences: 3, maxSentences: 6, title: '해외 직구 사례', lines: 5 }, target: { selfCheck: ['주장을 첫 문장에 썼다', '근거를 하나 이상 썼다', '반대 의견을 생각해 썼다'] } },
              { prompt: '틀을 따라 해외 직구 사례 의견 글을 쓰세요.', toolOptions: { starter: '나는 ___라고 생각한다. 왜냐하면 ___. 그래서 ___.' } },
              { prompt: '해외 직구 사례 의견 글에 반론과 재반론을 넣어 쓰세요.', toolOptions: { maxSentences: 7 }, target: { selfCheck: ['주장을 첫 문장에 썼다', '근거를 하나 이상 썼다', '반대 의견을 생각해 썼다', '반론에 대한 재반론을 썼다'] } }),
            IT({ prompt: '\'옮겨 주기만 했다\'는 가상 사례를 읽고 의견 글을 쓰세요.', toolOptions: { topic: '가상 사례: 한 학생이 "옮겨 주기만 했다"며 책임이 없다고 말한다. 이 말에 대한 내 의견을 한 문단으로 쓰세요.', minChars: 60, maxChars: 320, minSentences: 3, maxSentences: 6, title: '옮겨 주기 사례', lines: 5 }, target: { selfCheck: ['주장을 첫 문장에 썼다', '근거를 하나 이상 썼다', '반대 의견을 생각해 썼다'] } },
              { prompt: '틀을 따라 옮겨 주기 사례 의견 글을 쓰세요.', toolOptions: { starter: '나는 ___라고 생각한다. 왜냐하면 ___. 그래서 ___.' } },
              { prompt: '옮겨 주기 사례 의견 글에 반론과 재반론을 넣어 쓰세요.', toolOptions: { maxSentences: 7 }, target: { selfCheck: ['주장을 첫 문장에 썼다', '근거를 하나 이상 썼다', '반대 의견을 생각해 썼다', '반론에 대한 재반론을 썼다'] } }),
            IT({ prompt: '"내 몸이니 내 마음대로"라는 주장에 대한 의견 글을 쓰세요.', toolOptions: { topic: '"마약류도 내 몸이니 내 마음대로 해도 된다"는 주장에 대한 내 의견을 한 문단으로 쓰세요.', minChars: 60, maxChars: 320, minSentences: 3, maxSentences: 6, title: '내 몸이니 내 마음대로?', lines: 5 }, target: { selfCheck: ['주장을 첫 문장에 썼다', '근거를 하나 이상 썼다', '반대 의견을 생각해 썼다'] } },
              { prompt: '틀을 따라 "내 몸이니 내 마음대로"에 대한 의견 글을 쓰세요.', toolOptions: { starter: '나는 ___라고 생각한다. 왜냐하면 ___. 그래서 ___.' } },
              { prompt: '"내 몸이니 내 마음대로"에 대한 의견 글에 반론과 재반론을 넣어 쓰세요.', toolOptions: { maxSentences: 7 }, target: { selfCheck: ['주장을 첫 문장에 썼다', '근거를 하나 이상 썼다', '반대 의견을 생각해 썼다', '반론에 대한 재반론을 썼다'] } },
              { conclude: '좋은 의견 글은 주장, 오늘 배운 사실로 된 근거, 반대 의견에 대한 답을 함께 담아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 의견 글의 주장 문장을 옮겨 써요.' }] },
      }),
      M('activity.help', {
        title: '도움 경로 지도', method: '도움 경로 지도', tool: 'map', minutes: 16,
        levels: { easy: '상황마다 알맞은 곳에 핀을 꽂는다(장소 이름이 보인다).', base: '핀을 꽂고 112·1388 가운데 언제 어디에 연락할지 고른다.', challenge: '장소 이름이 숨겨진 지도에서 핀을 꽂고 연락처를 고른다.' },
        activity: {
          title: '도움 경로 지도', tool: 'map',
          teacher: '"위험한 일이 생기면 누구에게, 어디로 가야 할까요? 112와 1388은 언제 쓸까요?" 상황 카드를 읽고 칸 지도에 핀을 꽂은 뒤 연락처를 고르게 한다. "신고하면 친구가 다친다"는 학생에게 "친구가 혼자 위험을 안고 있는 것과 어른의 도움을 받는 것 가운데 무엇이 친구를 지킬까요?"라고 되묻는다. 급하게 위험하면 112, 고민 상담은 1388, 학교에서는 담임·상담 선생님·보건실이라는 점을 짚는다.',
          task: '학교·동네 칸 지도에 상담실·보건실·지구대 등을 핀으로 놓고, 상황마다 112·1388 가운데 언제 연락할지 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(PIN('모르는 사람이 젤리를 건네며 따라오라고 해요. 바로 갈 곳에 핀을 꽂고 연락처를 고르세요.', Object.assign({}, MAP, { ask: PHONE(0) }), { place: '지구대', pick: 0 }),
              PIN('모르는 사람이 젤리를 건네며 따라오라고 해요. 바로 갈 곳에 핀을 꽂으세요.', MAP, { place: '지구대' }), { toolOptions: { names: false } }),
            IT(PIN('친구가 약물 문제로 고민을 털어놓았어요. 학교에서 함께 갈 곳에 핀을 꽂고, 학교 밖에서 상담할 연락처를 고르세요.', Object.assign({}, MAP, { ask: PHONE(1) }), { place: '상담실', pick: 1 }),
              PIN('친구가 약물 문제로 고민을 털어놓았어요. 학교에서 함께 갈 곳에 핀을 꽂으세요.', MAP, { place: '상담실' }), { toolOptions: { names: false } }),
            IT(PIN('친구가 성분 모르는 젤리를 먹고 어지럽다고 해요. 학교에서 먼저 갈 곳에 핀을 꽂으세요.', Object.assign({}, MAP, { ask: { q: '그다음 함께 알릴 사람은?', choices: ['담임 선생님과 보호자', '아무도 알리지 않는다', 'SNS 친구들'], why: ['', '혼자 두면 도움이 늦어져요.', '도움은 믿을 만한 어른에게 청해요.'] } }), { place: '보건실', pick: 0 }),
              PIN('친구가 성분 모르는 젤리를 먹고 어지럽다고 해요. 학교에서 먼저 갈 곳에 핀을 꽂으세요.', MAP, { place: '보건실' }), { toolOptions: { names: false } }),
            IT(PIN('친구를 대신 도우려 하는데 어떻게 할지 모르겠어요. 먼저 의논할 어른이 있는 곳에 핀을 꽂으세요.', Object.assign({}, MAP, { ask: { q: '친구를 대신 도울 때 알맞은 것은?', choices: ['친구와 함께, 또는 친구에게 알리고 어른과 의논한다', '혼자 그 사람을 찾아가 따진다', '모른 척한다'], why: ['', '혼자 맞서면 나도 위험해질 수 있어요.', '모른 척하면 친구가 혼자 남아요.'] } }), { place: '담임 교실', pick: 0 }),
              PIN('친구를 대신 도우려 하는데 어떻게 할지 모르겠어요. 먼저 의논할 어른이 있는 곳에 핀을 꽂으세요.', MAP, { place: '담임 교실' }), { toolOptions: { names: false } },
              { conclude: '급하게 위험하면 112, 고민 상담은 1388, 학교에서는 담임·상담 선생님과 보건실에 알려요. 친구를 도울 때도 혼자 맞서지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 연락할 곳을 써요.', columns: ['상황', '연락할 곳'], cells: [['급하게 위험할 때', ''], ['고민을 상담하고 싶을 때', ''], ['학교에서 몸이 이상할 때', '']], answer: '112 / 1388 / 보건실·담임 선생님' }] },
        notes: '지도는 가상이다. 학생의 실제 집 위치는 묻지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.reflect', {
        title: '\'옮겨 주기만 하면 괜찮다\' 생각 크기', method: '생각 변화 크기', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 수업 뒤 생각의 크기 하나만 고르게 한다.', base: '수업 전과 뒤의 생각 크기를 각각 고르고 바뀐 까닭을 말한다.', challenge: '친구에게 알려 줄 한 문장을 만들어 보게 한다.' },
        wrap: {
          teacher: '"수업 전에 \'옮겨 주기만 하면 괜찮다\'는 생각은 얼마나 컸나요? 지금은요?" 두 눈금을 차례로 고르게 한 뒤 바뀐 까닭을 한 줄로 말하게 한다. "그래도 모르고 옮기면 어쩔 수 없다"는 말에는 모르는 물건은 처음부터 받지 않는 것이 나를 지킨다고 짚는다.',
          exitTicket: [
            SCALE('수업 전: 마약류를 옮겨 주기만 하면 책임이 없다', '걱정', '수업 전에 이 생각은 얼마나 컸는지 골라요.'),
            SCALE('수업 뒤: 마약류를 옮겨 주기만 하면 책임이 없다', '걱정', '지금 이 생각은 얼마나 큰지 골라요.'),
            { type: 'short', prompt: '친구에게 알려 줄 한 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '내 생각의 크기',
          items: [
            { type: 'table', prompt: '\'옮겨 주기만 하면 괜찮다\' 생각의 크기를 1~5로 적어요.', columns: ['때', '크기(1~5)'], cells: [['수업 전', ''], ['수업 뒤', '']] },
            { type: 'short', prompt: '생각이 바뀐(또는 그대로인) 까닭을 써요.' },
          ],
        },
      }),
      M('wrap.check', {
        title: '마약류 단원 자기 점검표', method: '자기 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개를 하나씩 읽어 주고 표시하게 한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '표시하지 못한 항목 하나의 보완 계획을 한 줄로 쓰게 한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 친구에게 설명할 수 있는 것은 무엇인가요?" 점검 항목을 함께 읽고 할 수 있는 것에만 표시하게 한다. "다 알아야 한다"는 말에는 표시하지 못한 칸이 다음 시간에 다시 볼 곳이라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '마약류 단원 자기 점검', items: [
              { id: 'c1', text: '마약류 세 갈래를 말할 수 있다' }, { id: 'c2', text: '옮겨 주기에도 책임이 따름을 안다' }, { id: 'c3', text: '성분 모르는 해외 제품은 받지 않는다' },
              { id: 'c4', text: '도움 경로(담임·상담·112·1388)를 안다' }, { id: 'c5', text: '친구가 고민하면 함께 어른에게 간다' }] },
              prompt: '지금 할 수 있는 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '마약류의 세 갈래로 알맞은 것은?', options: ['마약·향정신성의약품·대마', '술·담배·카페인', '감기약·진통제·소화제'], answer: 0, difficulty: 0.2, explain: '법은 마약류를 마약·향정신성의약품·대마로 나누어 관리해요.' },
            { type: 'short', prompt: '표시하지 못한 항목 하나의 보완 계획을 써요.' },
          ],
        },
        worksheet: {
          title: '마약류 단원 자기 점검',
          items: [
            { type: 'check', prompt: '할 수 있는 것에 표시해요.', options: ['세 갈래 말하기', '행위와 책임 알기', '해외 제품 판단', '도움 경로 알기', '친구와 함께 어른에게 가기'] },
            { type: 'short', prompt: '아직 어려운 항목의 보완 계획을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 고수익 운반 아르바이트 제안 판단하기 (saf-drug.m.easy-money) ====
  {
    const M = MK('easy-money', [9]);
    const SIG = [
      { id: 'i1', text: '신분증 사진부터 보내라고 한다', to: '개인정보 요구' }, { id: 'i2', text: '계좌 번호를 먼저 묻는다', to: '개인정보 요구' },
      { id: 'i3', text: '다니는 학교와 집 주소를 묻는다', to: '개인정보 요구' }, { id: 's1', text: '비밀 메신저로 옮기자고 한다', to: '비밀 유도' },
      { id: 's2', text: '보호자에게 말하지 말라고 한다', to: '비밀 유도' }, { id: 's3', text: '물건은 절대 열어 보지 말라고 한다', to: '비밀 유도' },
      { id: 'm1', text: '물건 하나 옮기면 큰돈을 준다', to: '지나친 대가' }, { id: 'm2', text: '한 시간에 하루 용돈의 몇 배를 준다', to: '지나친 대가' },
    ];
    const NEWPOST = [
      { id: 'n1', text: '"얼굴 사진 먼저 보내 주세요"', to: '개인정보 요구' }, { id: 'n2', text: '"부모님께는 비밀로"', to: '비밀 유도' },
      { id: 'n3', text: '"짐 하나 전달에 큰돈"', to: '지나친 대가' }, { id: 'nx', text: '"근로계약서 쓰고 시작해요"' },
    ];
    const B1 = { text: '고수익 운반 제안 DM에 답하다가 이미 신분증 사진을 보냈다. 상대가 "이제 빠지면 사진 퍼뜨린다"고 한다.', ask: '지금 어떻게 할까?', motif: 'house', choices: [
      { id: 'go', text: '겁이 나서 시키는 대로 하러 나간다', result: '모르는 상자를 건네받게 된다.', impact: [{ who: '나', text: '더 깊이 끌려 들어간다', tone: -1 }], why: '시키는 대로 하면 협박은 끝나지 않고 더 커질 수 있어요.', end: '시키는 대로 나갔어요.',
        next: { text: '상자를 받자 상대가 "한 번 더 하면 놓아 줄게"라고 한다.', choices: [
          { id: 'again', text: '한 번만 더 하기로 한다', result: '또 다른 부탁과 협박이 이어진다.', impact: [{ who: '나', text: '빠져나오기 더 어렵다', tone: -1 }], why: '"한 번만 더"는 끝이 아니라 다음 협박의 시작일 수 있어요.' },
          { id: 'stop2', text: '그 자리에서 멈추고 보호자에게 전화한다', result: '보호자가 달려와 "같이 112에 신고하자"고 한다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }], end: '멈추고 보호자에게 알렸어요.',
            next: { text: '보호자가 "같이 112에 신고하자"고 한다.', choices: [
              { id: 'report', text: '보호자와 함께 112에 신고하고 대화 기록을 보여 준다', result: '경찰이 기록을 바탕으로 도움을 준다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'erase', text: '무서워서 대화 기록을 지운다', result: '무슨 일이 있었는지 밝히기 어려워진다.', impact: [{ who: '나', text: '도움이 늦어진다', tone: -1 }], why: '대화 기록은 신고할 때 증거가 돼요. 지우지 않아요.' }] } }] } },
      { id: 'parent', text: '보호자에게 바로 사실대로 말한다', result: '보호자가 놀라지만 "말해 줘서 고맙다"고 한다.', impact: [{ who: '나', text: '혼자가 아니게 된다', tone: 1 }], end: '보호자에게 바로 말했어요.',
        next: { text: '보호자와 어떻게 할지 정한다.', choices: [
          { id: 'block', text: '"그냥 차단하면 되겠지" 하고 넘긴다', result: '다른 계정으로 협박 메시지가 또 온다.', impact: [{ who: '나', text: '불안이 이어진다', tone: -1 }], why: '차단만으로는 협박이 끝나지 않을 수 있어요. 신고해요.' },
          { id: 'call', text: '대화 기록을 남긴 채 112에 신고한다', result: '경찰이 기록을 살피고 대처 방법을 알려 준다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }], end: '기록을 남기고 신고했어요.',
            next: { text: '신고 뒤에도 상대에게서 메시지가 또 온다.', choices: [
              { id: 'argue', text: '직접 따지는 답장을 보낸다', result: '상대가 말을 바꾸며 더 압박한다.', impact: [{ who: '나', text: '다시 끌려 들어간다', tone: -1 }], why: '직접 맞서지 말고 경찰과 보호자에게 맡겨요.' },
              { id: 'keep', text: '답하지 않고 새 메시지도 경찰에 전한다', result: '경찰이 새 기록까지 함께 살핀다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] }] } }] } },
      { id: 'hide', text: '대화를 지우고 아무에게도 말하지 않는다', result: '협박 메시지가 계속 온다.', impact: [{ who: '나', text: '혼자 위험을 안는다', tone: -1 }], why: '혼자 숨기면 협박이 길어져요. 지금 어른에게 알려요.', ending: '혼자 숨기는 사이 협박이 이어졌어요.' }] };
    const RB1 = [{ id: 'r1', text: '이미 사진을 보냈어도 지금 알리는 것이 가장 빠른 길이다' }, { id: 'r2', text: '대화 기록은 신고할 때 증거가 된다' },
      { id: 'r3', text: '한 번만 하면 빠져나올 수 있다', why: '"한 번만"은 다음 협박의 시작일 수 있어요.' }, { id: 'r4', text: '물건 내용을 모르면 책임이 없다', why: '몰랐다는 말만으로 책임을 벗기 어려워요.' }];
    const B2 = { text: '친구가 "나 이거 해 보려고. 하루에 큰돈 준대"라며 운반 아르바이트 DM을 보여 준다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'envy', text: '"대박, 나도 소개해 줘"라고 한다', result: '친구가 상대에게 내 연락처도 넘기려 한다.', impact: [{ who: '나', text: '함께 끌려 들어갈 수 있다', tone: -1 }], why: '쉽게 큰돈을 준다는 말은 위험 신호예요.', end: '나도 소개해 달라고 했어요.',
        next: { text: '친구가 "네 번호도 넘길게"라고 한다.', choices: [
          { id: 'okay', text: '"그래"라고 한다', result: '모르는 계정에서 나에게도 DM이 온다.', impact: [{ who: '나', text: '개인정보가 넘어간다', tone: -1 }], why: '연락처도 개인정보예요. 넘기지 않아요.' },
          { id: 'nope', text: '"잠깐, 이거 이상해. 물건 열어 보지 말래"라고 짚는다', result: '친구가 "그래도 돈 주잖아"라고 한다.', impact: [{ who: '친구', text: '다시 생각해 본다', tone: 0 }], end: '위험 신호를 짚었어요.',
            next: { text: '친구가 "그래도 돈 주잖아"라고 한다.', choices: [
              { id: 'adult', text: '"같이 담임 선생님께 물어보자"며 함께 간다', result: '선생님이 위험 신호를 짚어 주고 보호자와도 이야기한다.', impact: [{ who: '친구', text: '도움을 받는다', tone: 1 }] },
              { id: 'leave', text: '"네 맘대로 해"라고 한다', result: '친구는 혼자 제안을 받아들인다.', impact: [{ who: '친구', text: '혼자 위험을 안는다', tone: -1 }], why: '친구가 위험한 제안을 받으면 어른에게 함께 가요.' }] } }] } },
      { id: 'signal', text: '"신분증 사진 요구는 위험 신호야"라고 짚는다', result: '친구가 "벌써 사진 보냈는데…"라며 겁낸다.', impact: [{ who: '친구', text: '위험을 알아챈다', tone: 1 }], end: '위험 신호를 짚어 줬어요.',
        next: { text: '친구가 "벌써 사진 보냈는데…"라며 겁낸다.', choices: [
          { id: 'blame', text: '"그걸 왜 보냈어!"라고 나무란다', result: '친구가 창피해하며 입을 닫는다.', impact: [{ who: '친구', text: '혼자 숨기게 된다', tone: -1 }], why: '나무라면 친구는 숨겨요. 지금 할 일을 함께 찾아요.' },
          { id: 'calm', text: '"지금 말하면 돼. 보호자께 같이 말하자"고 한다', result: '친구가 "엄마한테 혼날까 봐"라며 망설인다.', impact: [{ who: '친구', text: '용기를 낸다', tone: 1 }], end: '지금 알리자고 함께 말했어요.',
            next: { text: '친구가 "엄마한테 혼날까 봐"라며 망설인다.', choices: [
              { id: 'teacher', text: '"그럼 상담 선생님께 먼저 같이 가자"고 한다', result: '상담 선생님이 보호자와 함께 신고를 돕는다.', impact: [{ who: '친구', text: '보호를 받는다', tone: 1 }] },
              { id: 'secret', text: '"그럼 비밀로 하자"고 한다', result: '친구에게 협박 메시지가 계속 온다.', impact: [{ who: '친구', text: '혼자 위험을 안는다', tone: -1 }], why: '위험할 때는 비밀보다 친구의 안전이 먼저예요.' }] } }] } },
      { id: 'skip', text: '못 본 척 넘어간다', result: '친구는 혼자 제안을 받아들인다.', impact: [{ who: '친구', text: '혼자 위험을 안는다', tone: -1 }], why: '위험 신호를 본 사람이 한마디 해 줄 수 있어요.', ending: '못 본 척하는 사이 친구는 제안을 받아들였어요.' }] };
    const RB2 = [{ id: 'r1', text: '위험 신호를 짚어 주는 것이 친구를 지키는 일이다' }, { id: 'r2', text: '혼날 걱정보다 지금 어른에게 알리는 것이 먼저다' },
      { id: 'r3', text: '친구 일이니 내가 끼어들 일이 아니다', why: '위험을 본 친구의 한마디가 친구를 지켜요.' }, { id: 'r4', text: '돈을 많이 주면 그만한 일이다', why: '쉬운 일에 큰돈을 준다면 숨긴 위험이 있다는 신호예요.' }];
    const ROUTE = { grid: [4, 3], title: '가상의 우리 학교와 동네', legend: false, places: [
      { name: '담임 교실', icon: 'school', at: [0, 0] }, { name: '상담실', icon: 'office', at: [2, 0] }, { name: '지구대', icon: 'police', at: [3, 1] },
      { name: '공원', icon: 'park', at: [1, 2] }, { name: '우리 집', icon: 'apartment', at: [3, 2] },
    ] };

    ALL.push(
      // ---- 도입 ----
      M('intro.post', {
        title: '가상 구인 글 이상한 낱말', method: '가상 구인 글 낱말 표시', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 이상한 낱말 2개(내용물 묻지 않기·신분증 사진 먼저)를 함께 짚는다.', base: '가상 구인 글 낱말 카드에서 이상한 낱말 4개를 골라 담는다.', challenge: '고른 낱말마다 왜 이상한지 한 가지씩 설명한다.' },
        intro: {
          teacher: '"이 가상 구인 글에서 보통 아르바이트 글과 다른 낱말은 무엇일까요?" 낱말 카드를 넘기고 시연 단추로 이상한 낱말이 바구니에 담기는 모습을 보인다. "돈을 많이 주면 좋은 일자리"라는 말이 나오면 "물건 하나 옮기는 데 왜 그렇게 큰돈을 줄까요? 무엇을 숨기고 있을까요?"라고 되묻는다. 오늘은 이런 제안에 숨은 위험 신호를 분석하고 거절·신고·친구 말리기를 연습한다고 밝힌다.',
          student: '가상 SNS 구인 글의 낱말 카드에서 이상하다고 느낀 낱말을 골라 담고, 왜 이상한지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '이상한 낱말', cards: [
            { id: 'w1', text: '당일 큰돈 지급' }, { id: 'w2', text: '내용물 묻지 않기' }, { id: 'w3', text: '신분증 사진 먼저' }, { id: 'w4', text: '비밀 메신저로 연락' },
            { id: 'w5', text: '근로계약서 작성' }, { id: 'w6', text: '일하는 시간 안내' }], shuffle: false }, sequence: [{ pick: ['w1', 'w2', 'w3', 'w4'] }] },
          art: { draw: 'a paper-cut smartphone screen showing a job post with a few highlighted suspicious words and a paper warning sign beside it', banner: '이 구인 글, 뭔가 이상해', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '구인 글은 수업용 가상 자료다. 실제 계정·연락 방법은 보이지 않는다.',
      }),
      M('intro.compare', {
        title: '정상 조건과 위험 신호', method: '정상 조건/위험 신호 나누기', tool: 'economy', minutes: 6,
        levels: { easy: '교사가 카드 4장만 읽어 주고 두 칸에 함께 나눈다.', base: '조건 카드 6장을 \'정상적인 조건\'과 \'위험 신호\'로 나눈다.', challenge: '헷갈리는 조건 하나(예: 당일 지급)를 골라 근거를 대어 어느 칸인지 말한다.' },
        intro: {
          teacher: '"정상적인 아르바이트는 무엇을 먼저 알려 주고, 위험한 제안은 무엇을 먼저 요구할까요?" 조건 카드를 두 칸에 나누는 모습을 시연 단추로 보인다. "돈만 잘 주면 조건은 상관없다"는 말에는 "하는 일을 알려 주지 않는 일자리에서 문제가 생기면 누가 책임을 질까요?"라고 되묻는다. 정상적인 일은 하는 일·시간·계약을 먼저 밝힌다는 점을 짚는다.',
          student: '아르바이트 조건 카드를 정상적인 조건과 위험 신호로 나누어 보고, 헷갈리는 카드 하나를 골라 까닭을 말해요.',
          demo: { tool: 'economy', options: { mode: 'sort', slots: ['정상적인 조건', '위험 신호'], cards: [
            { id: 'o1', text: '근로계약서를 쓴다' }, { id: 'o2', text: '하는 일을 정확히 알려 준다' }, { id: 'o3', text: '일하는 시간과 시급이 적혀 있다' },
            { id: 'x1', text: '물건만 옮기면 큰돈을 준다' }, { id: 'x2', text: '신분증 사진부터 요구한다' }, { id: 'x3', text: '내용물은 열어 보지 말라고 한다' }], shuffle: false },
            sequence: [{ sort: { '정상적인 조건': ['o1', 'o2', 'o3'], '위험 신호': ['x1', 'x2', 'x3'] } }] },
          art: { draw: 'a paper-cut table split in two with a neat contract paper on one side and a sealed mystery box with cash on the other', banner: '정상일까, 위험 신호일까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.signals', {
        title: '위험 신호 세 유형', method: '위험 신호 유형 분류', tool: 'mindmap', minutes: 16,
        levels: { easy: '신호 카드 4장을 세 유형에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '신호 카드 8장을 개인정보 요구·비밀 유도·지나친 대가로 나누고 신호마다 위험한 까닭을 잇는다.', challenge: '새 가상 제안 글에 세 유형을 적용해 나누는데 정상 조건 카드가 함정으로 섞인다.' },
        activity: {
          title: '위험 신호 세 유형', tool: 'mindmap',
          teacher: '"위험한 제안은 늘 같은 모양으로 올까요?" 신호 카드를 세 유형에 나눈 뒤 신호마다 왜 위험한지 잇게 한다. "물건 내용을 모르면 책임이 없다"는 학생에게 "\'열어 보지 말라\'는 말은 누구를 지키려는 말일까요, 나일까요, 보낸 사람일까요?"라고 되묻는다. 세 유형 가운데 하나만 보여도 멈추고 어른에게 묻는다는 점을 짚는다.',
          task: '\'신분증 사진 요구·비밀 메신저 이동·물건 확인 금지·높은 대가\' 같은 카드를 개인정보 요구·비밀 유도·지나친 대가로 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('위험 신호 카드를 세 유형에 나누세요.', ['개인정보 요구', '비밀 유도', '지나친 대가'], SIG, { topic: '위험 신호' }),
              SB('위험 신호 카드 4장을 세 유형에 나누세요.', ['개인정보 요구', '비밀 유도', '지나친 대가'], pickCards(SIG, ['i1', 's1', 's3', 'm1']), { topic: '위험 신호' })),
            IT(MB('신호마다 위험한 까닭을 이어 보세요.', [['신분증 사진 요구', '나중에 협박에 쓰일 수 있다'], ['보호자에게 비밀', '도움받을 길을 끊으려 한다'], ['물건 확인 금지', '무엇을 옮기는지 숨기려 한다']], [], { topic: '왜 위험할까?' }),
              MB('신호 두 개에 위험한 까닭을 이어 보세요.', [['신분증 사진 요구', '나중에 협박에 쓰일 수 있다'], ['물건 확인 금지', '무엇을 옮기는지 숨기려 한다']], [], { topic: '왜 위험할까?' })),
            IT(SB('새 가상 제안 글의 문장을 세 유형에 나누세요(정상적인 조건은 남겨요).', ['개인정보 요구', '비밀 유도', '지나친 대가'], NEWPOST, { topic: '새 제안 글' }),
              SB('새 가상 제안 글의 문장 3장을 세 유형에 나누세요.', ['개인정보 요구', '비밀 유도', '지나친 대가'], NEWPOST.filter((c) => c.to), { topic: '새 제안 글' }),
              null, { conclude: '개인정보 요구·비밀 유도·지나친 대가 가운데 하나라도 보이면 멈추고, 답하지 말고 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 유형마다 위험 신호를 하나씩 써요.', columns: ['개인정보 요구', '비밀 유도', '지나친 대가'], cells: [['', '', '']], answer: '(예) 신분증 사진 / 비밀 메신저·보호자에게 비밀 / 물건 하나에 큰돈' }] },
      }),
      M('activity.branch', {
        title: '이미 사진을 보냈다면 갈림길', method: '딜레마 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길을 두 번 골라 결과를 본다(근거 고르기 없음).', base: '갈림길을 세 번 골라 거절·어른 알리기·112 신고 길의 결과를 끝까지 따라가고 근거를 고른다.', challenge: '한 길을 끝까지 간 뒤 되돌아가 다른 길도 끝까지 가 보고 두 결과를 견준다.' },
        activity: {
          title: '이미 사진을 보냈다면 갈림길', tool: 'dilemma',
          teacher: '"이미 사진을 보냈다면, 이제 늦은 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 결과 칸을 견주게 한다. "한 번만 하면 빠져나올 수 있다"는 학생에게 "\'한 번 더 하면 놓아 줄게\'라는 말 뒤에는 무엇이 왔나요?"라고 되묻는다. 어느 단계에서든 멈추고 어른·112에 알리는 것이 가장 빠른 길이며, 대화 기록은 지우지 않는다는 점을 짚는다.',
          task: '제안을 받아 대화를 이어 가다 \'이미 사진을 보냈다\'는 장면에서 길을 골라, 거절·어른 알리기·112 신고 길의 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '이미 신분증 사진을 보냈고 협박이 왔어요. 두 번 골라 결과를 보세요.', base: '이미 신분증 사진을 보냈고 협박이 왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 되돌아가 다른 길도 끝까지 가 보고 근거를 고르세요.' },
              '이미 보낸 사진', B1, [['parent', 'call', 'keep'], ['go', 'stop2', 'report']], RB1, ['r1', 'r2'], { explore: 2 }),
            DIL({ easy: '친구가 운반 아르바이트 DM을 보여 줘요. 두 번 골라 결과를 보세요.', base: '친구가 운반 아르바이트 DM을 보여 줘요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 다른 길도 끝까지 가 보고 두 결과를 견주어 근거를 고르세요.' },
              '친구가 받은 DM', B2, [['signal', 'calm', 'teacher'], ['envy', 'nope', 'adult']], RB2, ['r1', 'r2'], { explore: 2 }),
            DIL({ easy: '이미 보낸 사진 장면에서 다른 길도 가 볼 수 있어요. 두 번 골라 결과를 보세요.', base: '이미 보낸 사진 장면에서 한 길을 끝까지 가고, 되돌아가 다른 길도 끝까지 가 본 뒤 근거를 고르세요.', challenge: '이미 보낸 사진 장면에서 서로 다른 끝 장면 세 곳까지 가 보고 근거를 고르세요.' },
              '이미 보낸 사진, 다른 길', B1, [['parent', 'call', 'keep'], ['go', 'stop2', 'report']], RB1, ['r1', 'r2'], { explore: 3 },
              { target: { path: [['parent', 'call', 'keep'], ['go', 'stop2', 'report']], reasons: ['r1', 'r2'], some: true, explore: 2 }, conclude: '이미 사진을 보냈어도 늦지 않아요. 시키는 대로 하지 말고, 대화 기록을 남긴 채 보호자와 112에 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '이미 신분증 사진을 보냈는데 협박을 받을 때 가장 알맞은 행동은?', options: ['한 번만 시키는 대로 한다', '대화 기록을 남기고 보호자와 함께 112에 신고한다', '대화를 지우고 혼자 참는다'], answer: '대화 기록을 남기고 보호자와 함께 112에 신고한다' }] },
        notes: '물건을 옮기는 방법·장소는 다루지 않는다. 학생에게 이런 제안을 받은 적이 있는지 묻지 않는다.',
      }),
      M('activity.talk', {
        title: '친구 말리는 대화', method: '친구 말리는 대화 대본', tool: 'story', minutes: 16,
        levels: { easy: '빈 말풍선 2개를 채우고, 놓으면 바로 맞는지 알려 준다.', base: '빈 말풍선 4개를 채워 친구를 말리는 대화를 완성한다.', challenge: '친구의 반박에 답하는 대사를 고르는데 함정 대사가 섞이고, 활동지에 내 대사를 쓴다.' },
        activity: {
          title: '친구 말리는 대화', tool: 'story',
          teacher: '"친구가 \'하루에 큰돈\'이라며 들떠 있을 때, 어떤 말이 친구를 멈추게 할까요?" 말풍선을 채운 뒤 짝과 친구·나 역할을 나눠 읽게 한다. "말려도 안 들으면 그만"이라는 학생에게 "친구가 \'몰랐다고 하면 되잖아\'라고 반박할 때 할 말이 준비되어 있나요?"라고 되묻는다. 나무라지 않고 위험 신호를 짚은 뒤 어른에게 함께 가자고 말한다는 점을 짚는다.',
          task: '운반 제안을 받아들이려는 친구를 말리는 대화의 빈 말풍선을 알맞은 대사로 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(FB('친구를 말리는 대화의 빈 말풍선을 채우세요.', [
              ['(친구: "물건 하나 옮기면 큰돈 준대!") "___"', '"쉬운 일에 큰돈이면 이상한 거야."'], ['(친구: "그냥 상자만 전해 주면 돼.") "___"', '"열어 보지 말라는 게 위험 신호래."'],
              ['(친구: "엄마한테는 비밀이래.") "___"', '"비밀로 하라는 것도 위험 신호야."'], ['(친구: "그럼 어떡해?") "___"', '"담임 선생님께 같이 물어보자."']], [], { title: '친구 말리기' }, '나'),
              FB('친구를 말리는 대화의 빈 말풍선 두 개를 채우세요.', [
                ['(친구: "물건 하나 옮기면 큰돈 준대!") "___"', '"쉬운 일에 큰돈이면 이상한 거야."'], ['(친구: "그럼 어떡해?") "___"', '"담임 선생님께 같이 물어보자."']], [], { title: '친구 말리기' }, '나')),
            IT(FB('친구의 반박에 답하는 빈 말풍선을 채우세요.', [
              ['(친구: "내용물 몰랐다고 하면 되잖아.") "___"', '"몰랐다는 말만으로 책임을 벗기 어렵대."'], ['(친구: "한 번만 하고 그만둘 거야.") "___"', '"한 번이 협박의 시작일 수 있어."'],
              ['(친구: "벌써 사진 보냈는데.") "___"', '"지금 말하면 돼. 같이 가 줄게."'], ['(친구: "혼날까 봐 무서워.") "___"', '"혼나는 것보다 네가 안전한 게 먼저야."']], [], { title: '친구의 반박' }, '나'),
              FB('친구의 반박에 답하는 빈 말풍선 두 개를 채우세요.', [
                ['(친구: "내용물 몰랐다고 하면 되잖아.") "___"', '"몰랐다는 말만으로 책임을 벗기 어렵대."'], ['(친구: "한 번만 하고 그만둘 거야.") "___"', '"한 번이 협박의 시작일 수 있어."']], [], { title: '친구의 반박' }, '나'),
              FB('친구의 반박에 답하는 빈 말풍선을 채우세요(어울리지 않는 대사는 남겨요).', [
                ['(친구: "내용물 몰랐다고 하면 되잖아.") "___"', '"몰랐다는 말만으로 책임을 벗기 어렵대."'], ['(친구: "한 번만 하고 그만둘 거야.") "___"', '"한 번이 협박의 시작일 수 있어."'],
                ['(친구: "벌써 사진 보냈는데.") "___"', '"지금 말하면 돼. 같이 가 줄게."'], ['(친구: "혼날까 봐 무서워.") "___"', '"혼나는 것보다 네가 안전한 게 먼저야."']], ['"그걸 왜 보냈어, 바보야."', '"그럼 나도 같이 할래."'], { title: '친구의 반박' }, '나')),
            IT(OB('친구를 말리는 대화를 이어지는 차례로 놓으세요.', [
              { id: 'o1', text: '친구: "큰돈 주는 알바 할 거야."' }, { id: 'o2', text: '나: "어떤 일인데? 같이 보자."' }, { id: 'o3', text: '친구: "상자만 옮기면 된대."' },
              { id: 'o4', text: '나: "열어 보지 말라는 건 위험 신호야."' }, { id: 'o5', text: '친구: "그럼 어떡해?"' }, { id: 'o6', text: '나: "선생님께 같이 가자."' }], { title: '대화 차례' }),
              OB('친구를 말리는 대화 네 줄을 차례로 놓으세요.', [
                { id: 'o1', text: '친구: "큰돈 주는 알바 할 거야."' }, { id: 'o4', text: '나: "열어 보지 말라는 건 위험 신호야."' }, { id: 'o5', text: '친구: "그럼 어떡해?"' }, { id: 'o6', text: '나: "선생님께 같이 가자."' }], { title: '대화 차례' }),
              null, { conclude: '친구를 말릴 때는 나무라지 않고 위험 신호를 짚은 뒤, 어른에게 함께 가자고 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 "그래도 돈 주잖아"라고 반박할 때 할 내 대사를 한 줄로 써요.' }],
          easy: [{ type: 'choice', prompt: '친구를 말리는 말로 알맞은 것에 ○ 해요.', options: ['"선생님께 같이 물어보자."', '"그걸 왜 해, 바보야."'], answer: '"선생님께 같이 물어보자."' }] },
      }),
      M('activity.warning', {
        title: '후배에게 보내는 경고 글', method: '후배에게 경고 글', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '글 틀("이런 글을 보면 조심해: ___. 그럴 땐 ___. 도움은 ___")을 채워 쓴다.', base: '후배에게 보내는 경고 글을 한 문단으로 쓰고 기준 3개(위험 신호·행동 방법·도움 연락처)를 점검한다.', challenge: '마지막 글에서 기준 3개를 모두 넣고, 위험 신호를 두 가지 이상 넣는 기준이 더해진다.' },
        activity: {
          title: '후배에게 보내는 경고 글', tool: 'rubric-writing',
          teacher: '"내년 1학년 후배가 이런 DM을 받는다면, 무엇을 알려 주고 싶나요?" 오늘 배운 위험 신호·행동·연락처를 넣어 후배에게 보내는 경고 글을 쓰게 한다. "무섭게 써야 조심한다"는 학생에게 "겁만 주면 후배는 어떤 행동을 해야 할지 알까요?"라고 되묻는다. 연락처는 담임·상담 선생님·보호자·112·1388만 쓰고, 이름·학교 이름은 쓰지 않게 한다.',
          task: '후배에게 보내는 경고 글을 쓰고, 기준표(위험 신호·행동 방법·도움 연락처)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '학급 게시판에 올릴 후배용 경고 글을 쓰세요.', toolOptions: { topic: '내년 1학년 후배가 볼 학급 게시판에 고수익 운반 제안에 대한 경고 글을 한 문단으로 쓰세요.', minChars: 60, maxChars: 320, minSentences: 3, maxSentences: 6, title: '게시판 경고 글', lines: 5 }, target: { selfCheck: ['위험 신호를 썼다', '할 행동을 썼다', '도움 연락처를 썼다'], mustInclude: [['112', '1388', '담임', '상담 선생님', '보호자']] } },
              { prompt: '틀을 따라 게시판 경고 글을 쓰세요.', toolOptions: { starter: '이런 글을 보면 조심해: ___. 그럴 땐 ___. 도움은 ___에게 청해.' } }),
            IT({ prompt: '친한 후배에게 보낼 짧은 경고 메시지를 쓰세요.', toolOptions: { topic: '친한 후배에게 "큰돈 주는 운반 알바" 제안을 조심하라는 짧은 메시지를 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 5, title: '후배에게 메시지', lines: 4 }, target: { selfCheck: ['위험 신호를 썼다', '할 행동을 썼다', '도움 연락처를 썼다'], mustInclude: [['112', '1388', '담임', '상담 선생님', '보호자']] } },
              { prompt: '틀을 따라 후배에게 메시지를 쓰세요.', toolOptions: { starter: '___ 같은 제안은 위험 신호야. 답하지 말고 ___. 곤란하면 ___에게 말해.' } }),
            IT({ prompt: '이미 사진을 보낸 후배에게 보낼 경고·응원 글을 쓰세요.', toolOptions: { topic: '이미 신분증 사진을 보내 겁먹은 후배에게 지금 할 일과 도움받을 곳을 알려 주는 글을 쓰세요.', minChars: 50, maxChars: 280, minSentences: 3, maxSentences: 6, title: '겁먹은 후배에게', lines: 5 }, target: { selfCheck: ['위험 신호를 썼다', '할 행동을 썼다', '도움 연락처를 썼다'], mustInclude: [['112', '1388', '담임', '상담 선생님', '보호자']] } },
              { prompt: '틀을 따라 겁먹은 후배에게 글을 쓰세요.', toolOptions: { starter: '지금 말해도 늦지 않아. ___는 지우지 말고, ___에게 같이 말하자.' } },
              { prompt: '겁먹은 후배에게 글을 쓰되, 위험 신호를 두 가지 이상 넣으세요.', target: { selfCheck: ['위험 신호를 두 가지 이상 썼다', '할 행동을 썼다', '도움 연락처를 썼다', '나무라지 않는 말로 썼다'], mustInclude: [['112', '1388', '담임', '상담 선생님', '보호자']] } },
              { conclude: '좋은 경고 글은 위험 신호, 지금 할 행동, 도움받을 곳을 함께 알려 줘요. 겁주기보다 할 일을 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 경고 글에서 가장 중요한 한 문장을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.route', {
        title: '도움 요청 경로 지도', method: '도움 요청 경로 지도', tool: 'map', minutes: 7,
        levels: { easy: '교사가 학교 안 도움 장소 하나를 먼저 함께 짚는다.', base: '학교에서 먼저 말할 곳에 핀을 꽂고, 112·1388을 쓸 때를 고른다.', challenge: '급할 때와 급하지 않을 때의 도움 경로를 나누어 말하게 한다.' },
        wrap: {
          teacher: '"위험한 제안을 받았다면, 누구에게 어떤 차례로 알릴까요?" 지도에 핀을 꽂고 연락처를 고르게 한다. "경찰에 말하면 일이 커진다"는 말에는 급하게 위험할 때는 112가 나를 지키는 가장 빠른 길이라고 짚는다. 급하지 않은 고민은 1388이나 상담 선생님과 나눌 수 있다고 덧붙인다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: Object.assign({}, ROUTE, { ask: { q: '협박을 받는 등 급하게 위험할 때 전화는?', choices: ['112(경찰)', '1388(청소년 상담)'], why: ['', '급하게 위험할 때는 112예요. 1388은 고민 상담이에요.'] } }),
              prompt: '학교에서 고민을 먼저 털어놓을 곳에 핀을 꽂고, 급할 때 전화할 곳을 골라요.', target: { place: '상담실', pick: 0 }, difficulty: 0.2 },
            { type: 'choice', prompt: '급하지 않지만 고민을 털어놓고 싶을 때 전화할 곳은?', options: ['112', '1388'], answer: 1, difficulty: 0.15, explain: '1388은 청소년 고민 상담 전화예요.' },
            { type: 'short', prompt: '위험한 제안을 받았을 때 내가 알릴 차례를 써요(예: 보호자 → 담임 선생님 → 112).' },
          ],
        },
        worksheet: {
          title: '도움 요청 경로',
          items: [
            { type: 'table', prompt: '급할 때와 급하지 않을 때의 도움 경로를 써요.', columns: ['때', '도움 경로'], cells: [['급하게 위험할 때', ''], ['고민을 나누고 싶을 때', '']], answer: '보호자·112 / 담임·상담 선생님·1388' },
            { type: 'check', prompt: '내가 할 것에 표시해요.', options: ['위험 신호가 보이면 답하지 않기', '대화 기록 지우지 않기', '보호자·선생님께 바로 알리기'] },
          ],
        },
      }),
      M('wrap.web', {
        title: '쉬운 돈 제안 그물', method: '오늘 배운 것 그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 하나씩 짚으며 카드 3장을 함께 붙인다.', base: '세 가지(위험 신호·할 행동·연락처)에 카드를 나누어 붙인다.', challenge: '두 가지를 이어 한 문장으로 설명하게 한다(예: 위험 신호를 보면 112).' },
        wrap: {
          teacher: '"\'쉬운 돈 제안\' 둘레에 오늘 배운 것을 모으면 어떤 그물이 될까요?" 카드를 다 붙이면 가지 두 개를 이어 말하게 한다. "나는 그런 제안 안 받을 것"이라는 말에는 친구가 받았을 때 말해 줄 수 있는 것도 오늘 배운 것이라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '쉬운 돈 제안', slots: ['위험 신호', '할 행동', '연락처'], cards: [
              { id: 'a1', text: '신분증 사진 요구' }, { id: 'a2', text: '물건 확인 금지' }, { id: 'b1', text: '답하지 않고 기록 남기기' }, { id: 'b2', text: '보호자에게 바로 알리기' },
              { id: 'c1', text: '112(급할 때)' }, { id: 'c2', text: '1388(고민 상담)' }, { id: 't1', text: '한 번만 해 보기' }] },
              prompt: '오늘 배운 것을 세 가지에 나누어 붙여요(맞지 않는 카드는 남겨요).', target: { sort: { '위험 신호': ['a1', 'a2'], '할 행동': ['b1', 'b2'], 연락처: ['c1', 'c2'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"물건 내용을 모르면 책임이 없다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['몰랐다는 말만으로 책임을 벗기 어렵다', '몰랐으면 괜찮다', '돈을 받았으면 괜찮다'], answer: 0, difficulty: 0.2, explain: '모르는 물건은 처음부터 받지 않는 것이 나를 지켜요.' },
            { type: 'short', prompt: '그물의 가지 두 개를 이어 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '쉬운 돈 제안',
          items: [
            { type: 'table', prompt: '가지마다 오늘 배운 것을 써요.', columns: ['위험 신호', '할 행동', '연락처'], cells: [['', '', '']], answer: '(예) 신분증 사진 요구 / 답하지 않고 보호자에게 / 112·1388' },
            { type: 'short', prompt: '친구가 이런 제안을 받았다면 해 줄 말 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 니코틴·알코올 의존, 끊기 어려운 이유와 돕는 법 (saf-drug.m.quit-support) ====
  {
    const M = MK('quit-support', [9]);
    const RING = [{ id: 'g1', text: '찾는다' }, { id: 'g2', text: '잠깐 편해진다' }, { id: 'g3', text: '없으면 불편하다' }, { id: 'g4', text: '다시 찾는다' }];
    const STORY = [
      { id: 'q1', text: '삼촌이 "이번엔 끊는다"고 결심한다' }, { id: 'q2', text: '사흘째, 짜증이 나고 피우고 싶다' },
      { id: 'q3', text: '가족이 저녁마다 산책을 함께한다' }, { id: 'q4', text: '모임에서 한 번 피우고 실망한다' },
      { id: 'q5', text: '가족이 "다시 하면 돼"라고 말한다' }, { id: 'q6', text: '의사와 상담하며 금연을 이어 간다' },
    ];
    const DIARY = [['1일', 9], ['2일', 8], ['3일', 9], ['4일', 7], ['5일', 6], ['6일', 8], ['7일', 5], ['8일', 4], ['9일', 5], ['10일', 3]];
    const DIARY_T = '가상 인물의 금연 일기 — 날짜별 \'피우고 싶은 마음\'(10점)';
    const Q1 = { text: '친구 도윤이 "나 전자담배 끊고 싶은데 잘 안 돼"라고 조용히 털어놓는다.', ask: '나는 어떻게 반응할까?', motif: 'house', choices: [
      { id: 'scare', text: '"그거 하면 큰일 나, 당장 끊어!"라고 겁을 준다', result: '도윤이 "역시 말하지 말걸"이라며 입을 닫는다.', impact: [{ who: '도윤', text: '마음을 닫는다', tone: -1 }], why: '겁을 주면 친구는 숨기고 혼자 남아요.', end: '겁을 줬더니 도윤이 입을 닫았어요.',
        next: { text: '도윤이 며칠째 그 이야기를 꺼내지 않는다.', choices: [
          { id: 'harder', text: '더 무섭게 다시 경고한다', result: '도윤이 나를 피한다.', impact: [{ who: '도윤', text: '더 멀어진다', tone: -1 }], why: '겁주기를 되풀이하면 믿음이 깨져요.' },
          { id: 'sorry', text: '"겁줘서 미안해. 네 마음 듣고 싶어"라고 다시 말한다', result: '도윤이 "끊으려 하면 짜증이 나"라고 털어놓는다.', impact: [{ who: '도윤', text: '다시 마음을 연다', tone: 1 }], end: '사과하고 다시 들었어요.',
            next: { text: '도윤이 "끊으려 하면 짜증이 나고 집중이 안 돼"라고 한다.', choices: [
              { id: 'plan', text: '짜증 날 때 같이 걸을 시간을 정하자고 한다', result: '쉬는 시간마다 함께 걸으며 견딘다.', impact: [{ who: '도윤', text: '혼자가 아니다', tone: 1 }] },
              { id: 'adult', text: '"보건 선생님께 끊는 방법을 같이 물어보자"고 한다', result: '보건 선생님이 도윤과 금연 계획을 함께 세운다.', impact: [{ who: '도윤', text: '전문적인 도움을 받는다', tone: 1 }] }] } }] } },
      { id: 'listen', text: '"말해 줘서 고마워. 뭐가 제일 힘들어?"라고 묻는다', result: '도윤이 "쉬는 시간마다 생각나"라고 한다.', impact: [{ who: '도윤', text: '이해받는다고 느낀다', tone: 1 }], end: '고맙다고 하고 마음을 물었어요.',
        next: { text: '도윤이 "쉬는 시간마다 생각나"라고 한다.', choices: [
          { id: 'watch', text: '"그럼 내가 감시해 줄게"라고 한다', result: '도윤이 감시받는 것 같아 불편해한다.', impact: [{ who: '도윤', text: '부담을 느낀다', tone: -1 }], why: '감시보다 함께하기가 도움이 돼요.' },
          { id: 'together', text: '쉬는 시간에 같이 할 일을 정하자고 한다', result: '둘이 쉬는 시간마다 농구를 한다.', impact: [{ who: '도윤', text: '생각이 덜 난다', tone: 1 }], end: '쉬는 시간에 함께할 일을 정했어요.',
            next: { text: '며칠 뒤 도윤이 "어제 한 번 했어"라며 미안해한다.', choices: [
              { id: 'blame', text: '"그럴 줄 알았어"라고 한다', result: '도윤이 "역시 난 안 돼"라며 포기하려 한다.', impact: [{ who: '도윤', text: '포기하려 한다', tone: -1 }], why: '한 번 실패는 끝이 아니에요. 다시 하면 돼요.' },
              { id: 'cheer', text: '"다시 시작하면 돼"라며 보건 선생님 상담을 권한다', result: '도윤이 보건 선생님과 다시 계획을 세운다.', impact: [{ who: '도윤', text: '다시 도전한다', tone: 1 }] }] } }] } },
      { id: 'spread', text: '단톡방에 "도윤이 전자담배 한대"라고 알린다', result: '도윤이 창피해하며 마음을 닫는다.', impact: [{ who: '도윤', text: '창피를 당한다', tone: -1 }], why: '털어놓은 이야기는 소문이 아니라 도움으로 이어져야 해요.', ending: '소문을 냈더니 도윤이 마음을 닫았어요.' }] };
    const RQ1 = [{ id: 'r1', text: '의존은 의지만으로 바로 끊기 어렵다' }, { id: 'r2', text: '겁주기보다 존중하고 함께할 때 끊기가 쉬워진다' },
      { id: 'r3', text: '의지만 있으면 바로 끊을 수 있다', why: '뇌가 익숙해진 것이라 의지만으로는 어려울 수 있어요.' }, { id: 'r4', text: '겁을 주면 효과가 있다', why: '겁을 주면 숨기고 혼자 남기 쉬워요.' }];
    const Q2 = { text: '"이번엔 진짜 끊는다"던 가상 인물 삼촌이 명절에 다시 담배를 피우는 모습을 봤다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'mock', text: '"또 실패했네요"라고 놀린다', result: '삼촌이 머쓱해하며 밖으로 나간다.', impact: [{ who: '삼촌', text: '부끄러워한다', tone: -1 }], why: '놀리면 다시 도전할 힘이 빠져요.', end: '놀렸더니 삼촌이 밖으로 나갔어요.',
        next: { text: '삼촌이 밖에 혼자 서 있다.', choices: [
          { id: 'leave2', text: '그냥 둔다', result: '삼촌은 "어차피 안 돼"라고 혼잣말한다.', impact: [{ who: '삼촌', text: '포기하려 한다', tone: -1 }], why: '놀린 뒤에는 사과하고 응원해요.' },
          { id: 'follow', text: '"놀려서 죄송해요. 응원할게요"라고 말한다', result: '삼촌이 "끊는 게 이렇게 어려울 줄 몰랐다"고 한다.', impact: [{ who: '삼촌', text: '마음을 연다', tone: 1 }], end: '사과하고 응원했어요.',
            next: { text: '삼촌이 "끊는 게 이렇게 어려울 줄 몰랐다"고 한다.', choices: [
              { id: 'help', text: '"상담받으면 도움이 된대요"라며 가족과 함께 알아보자고 한다', result: '가족이 함께 금연 상담을 알아본다.', impact: [{ who: '삼촌', text: '도움을 받는다', tone: 1 }] },
              { id: 'weak', text: '"의지가 약하신 거예요"라고 한다', result: '삼촌이 다시 입을 닫는다.', impact: [{ who: '삼촌', text: '상처받는다', tone: -1 }], why: '의존은 의지만의 문제가 아니에요.' }] } }] } },
      { id: 'respect', text: '"며칠 참으신 것도 대단해요"라고 말한다', result: '삼촌이 "근데 또 피웠잖아"라며 웃는다.', impact: [{ who: '삼촌', text: '힘을 얻는다', tone: 1 }], end: '참은 날들을 알아줬어요.',
        next: { text: '삼촌이 "근데 또 피웠잖아"라고 한다.', choices: [
          { id: 'shame', text: '"그러게요"라고 맞장구친다', result: '삼촌이 다시 시작할 마음을 접는다.', impact: [{ who: '삼촌', text: '포기하려 한다', tone: -1 }], why: '실패를 맞장구치기보다 다시 할 힘을 줘요.' },
          { id: 'again', text: '"다시 시작하면 돼요. 같이 산책할래요?"라고 한다', result: '산책하며 삼촌이 "혼자는 힘들다"고 한다.', impact: [{ who: '삼촌', text: '다시 도전한다', tone: 1 }], end: '다시 시작하자며 함께 걸었어요.',
            next: { text: '산책하며 삼촌이 "혼자는 너무 힘들다"고 한다.', choices: [
              { id: 'expert', text: '"의사 선생님께 상담받는 방법도 있대요"라고 한다', result: '삼촌이 병원 금연 상담을 받아 보기로 한다.', impact: [{ who: '삼촌', text: '전문적인 도움을 받는다', tone: 1 }] },
              { id: 'endure', text: '"그냥 참으시면 돼요"라고 한다', result: '삼촌은 혼자 버티다 또 지친다.', impact: [{ who: '삼촌', text: '혼자 지친다', tone: -1 }], why: '의지만으로 끊기 어려울 수 있어요. 도움을 함께 찾아요.' }] } }] } },
      { id: 'ignore', text: '못 본 척한다', result: '삼촌은 아무도 모른다고 생각하며 계속 피운다.', impact: [{ who: '삼촌', text: '혼자 남는다', tone: 0 }], why: '응원의 한마디가 다시 도전할 힘이 될 수 있어요.', ending: '못 본 척했고 삼촌은 혼자 남았어요.' }] };
    const RQ2 = [{ id: 'r1', text: '한 번 실패해도 다시 시작할 수 있다' }, { id: 'r2', text: '혼자보다 가족·전문가의 도움을 받을 때 끊기 쉽다' },
      { id: 'r3', text: '다시 피웠으면 의지가 약한 것이다', why: '의존은 뇌가 익숙해진 것이라 의지만의 문제가 아니에요.' }, { id: 'r4', text: '놀려야 정신을 차린다', why: '놀리면 숨기고 포기하기 쉬워요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.cycle', {
        title: '의존 고리 놓아 보기', method: '의존 고리 놓기', tool: 'lifecycle', minutes: 6,
        levels: { easy: '교사가 고리 3칸(찾음·편해짐·다시 찾음)만 함께 놓는다.', base: '고리 4칸을 순환판에 놓고 화살표가 처음으로 돌아오는 것을 짚는다.', challenge: '고리가 돌수록 왜 더 단단해지는지(내성·금단) 짝과 말한다.' },
        intro: {
          teacher: '"끊고 싶은데 왜 자꾸 다시 처음으로 돌아갈까요?" 고리 카드를 순환판에 놓는 모습을 시연 단추로 보이고, 마지막 칸에서 첫 칸으로 돌아오는 화살표를 짚는다. "의지만 있으면 바로 끊을 수 있다"는 말이 나오면 "\'없으면 불편하다\' 칸은 의지로 사라질까요, 몸과 뇌가 겪는 변화일까요?"라고 되묻는다. 오늘은 끊기 어려운 까닭을 알고, 끊으려는 사람을 돕는 말과 행동을 찾는다고 밝힌다.',
          student: '\'찾는다 → 잠깐 편해진다 → 없으면 불편하다 → 다시 찾는다\' 고리를 순환판에 놓고, 왜 다시 처음으로 돌아가는지 생각해요.',
          demo: { tool: 'lifecycle', options: { center: '의존 고리', cards: [RING[2], RING[0], RING[3], RING[1]] }, sequence: [{ order: RING.map((c) => c.id), cyclic: true }] },
          art: { draw: 'a paper-cut circular loop of four paper arrows around a small paper figure, with one arrow being cut by paper scissors', banner: '왜 끊기 어려울까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      M('intro.brain', {
        title: '익숙해지는 뇌의 회로', method: '뇌 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 종이 몸에서 뇌를 함께 짚는다.', base: '뇌를 찾고 \'좋은 느낌을 기억해 다시 찾게 하는 회로가 익숙해진다\'는 설명과 잇는다.', challenge: '이 설명을 금단(없으면 불편함)과 이어 말한다.' },
        intro: {
          teacher: '"\'다시 찾고 싶은 마음\'은 몸의 어디에서 생길까요?" 종이 몸을 띄우고 시연 단추로 뇌가 골라지며 하는 일이 보이는 모습을 보인다. "끊지 못하는 건 성격 탓"이라는 말에는 "뇌의 회로가 익숙해진 것이라면, 성격만 바꾸면 해결될까요?"라고 되묻는다. 그래서 끊으려는 사람에게는 비난보다 도움이 필요하다는 점을 짚는다.',
          student: '종이 몸에서 뇌를 찾고, 좋은 느낌을 기억해 다시 찾게 하는 회로가 익숙해진다는 설명을 읽어요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '심장', '폐', '간', '위'], jobs: { 뇌: '좋은 느낌을 기억하고 다시 찾게 해요' }, names: true }, sequence: [{ sel: '뇌' }] },
          art: { draw: 'a paper-cut head silhouette with a small looping paper path inside the brain, glowing softly', banner: '뇌가 익숙해져요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.case', {
        title: '금연 도전 차례', method: '금연 시도 사례 차례', tool: 'story', minutes: 16,
        levels: { easy: '장면 카드 4장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 6장을 차례로 놓고 도움이 된 장면을 고른다.', challenge: '도움 장면마다 도움의 종류를 짝 짓는데 함정 카드가 섞이고, 활동지에 공통점을 쓴다.' },
        activity: {
          title: '금연 도전 차례', tool: 'story',
          teacher: '"삼촌이 다시 피운 장면에서 금연은 끝난 걸까요?" 가상 인물 삼촌의 금연 장면을 차례로 놓고 도움이 된 장면을 고르게 한다. "한 번 실패하면 끝"이라는 학생에게 "마지막 장면의 삼촌은 실패한 사람일까요, 다시 도전한 사람일까요?"라고 되묻는다. 도움이 된 장면에는 함께하기·존중하는 말·전문가 상담이 있다는 공통점을 짚는다. 학생 가족의 흡연 여부는 묻지 않는다.',
          task: '가상 인물 삼촌의 금연 시도(결심 → 어려움 → 도움 → 다시 시도) 장면을 차례로 놓고 도움이 된 장면을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('삼촌의 금연 장면 6장을 차례로 놓으세요.', STORY, { title: '삼촌의 금연 도전' }),
              OB('삼촌의 금연 장면 4장을 차례로 놓으세요.', pickCards(STORY, ['q1', 'q2', 'q4', 'q6']), { title: '삼촌의 금연 도전' })),
            IT(PB('삼촌에게 도움이 된 장면만 골라 담으세요.', '도움이 된 장면', [
              { id: 'q3', text: '가족이 저녁마다 산책을 함께한다', ok: true }, { id: 'q5', text: '가족이 "다시 하면 돼"라고 말한다', ok: true },
              { id: 'q6', text: '의사와 상담하며 금연을 이어 간다', ok: true }, { id: 'q2', text: '사흘째, 짜증이 나고 피우고 싶다' }, { id: 'q4', text: '모임에서 한 번 피우고 실망한다' }])),
            IT(MB('도움이 된 장면마다 도움의 종류를 이어 보세요.', [['저녁마다 함께 산책', '함께하기'], ['"다시 하면 돼"라는 말', '존중하는 말'], ['의사와 상담', '전문가 상담']], [], { title: '도움의 종류' }),
              MB('도움이 된 장면 두 개에 도움의 종류를 이어 보세요.', [['저녁마다 함께 산책', '함께하기'], ['의사와 상담', '전문가 상담']], [], { title: '도움의 종류' }),
              MB('도움이 된 장면마다 도움의 종류를 이어 보세요(어울리지 않는 카드는 남겨요).', [['저녁마다 함께 산책', '함께하기'], ['"다시 하면 돼"라는 말', '존중하는 말'], ['의사와 상담', '전문가 상담']], ['겁주기', '감시하기'], { title: '도움의 종류' }),
              { conclude: '금연은 한 번에 끝나지 않을 수 있어요. 함께하기·존중하는 말·전문가 상담이 다시 도전할 힘이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도움이 된 장면들의 공통점을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '도움이 된 장면에 ○ 해요.', options: ['가족이 함께 산책한다', '모임에서 한 번 피운다'], answer: '가족이 함께 산책한다' }] },
        notes: '삼촌은 가상 인물이다. 학생 가족의 흡연·음주 여부는 묻지 않는다.',
      }),
      M('activity.diary', {
        title: '금연 일기 꺾은선 읽기', method: '가상 일기 꺾은선 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '5일치 꺾은선만 보이고 값이 함께 적혀 있다.', base: '10일치 꺾은선을 읽고 높아진 날과 그날의 상황을 찾는다.', challenge: '마지막 문항에서 높아진 날에 맞는 도움을 고른다.' },
        activity: {
          title: '금연 일기 꺾은선 읽기', tool: 'chart',
          teacher: '"피우고 싶은 마음은 날마다 줄기만 할까요?" 수업용 가상 금연 일기 꺾은선을 띄우고 날짜별 높낮이를 읽게 한다. "다시 올라간 날이 있으면 실패"라는 학생에게 "10일째 점수는 1일째와 견주어 어떤가요? 오르내리면서도 전체는 어느 쪽으로 가나요?"라고 되묻는다. 높아진 날의 상황(모임·스트레스)을 알면 그날 맞는 도움을 미리 준비할 수 있다는 점을 짚는다.',
          task: '가상 인물의 금연 일기 속 날짜별 \'피우고 싶은 마음\' 꺾은선을 읽고, 높아진 날의 상황과 맞는 도움을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '\'피우고 싶은 마음\'이 가장 낮은 날을 고르세요.', toolOptions: CH('line', DIARY_T, '점', DIARY, { xLabel: '날짜', yLabel: '피우고 싶은 마음', max: 10, question: '가장 낮은 날은?', choices: DIARY.map((d) => d[0]) }), target: { pick: 9 } },
              { prompt: '5일 가운데 \'피우고 싶은 마음\'이 가장 낮은 날을 고르세요.', toolOptions: { data: DIARY.slice(0, 5), choices: DIARY.slice(0, 5).map((d) => d[0]) }, target: { pick: 4 } }),
            IT({ prompt: '1일과 10일의 점수 차이를 읽어 쓰세요.', toolOptions: CH('line', DIARY_T, '점', DIARY, { xLabel: '날짜', yLabel: '피우고 싶은 마음', max: 10, question: '1일과 10일의 차이는?' }), target: { value: 6 } },
              { prompt: '1일과 5일의 점수 차이를 읽어 쓰세요.', toolOptions: { data: DIARY.slice(0, 5), question: '1일과 5일의 차이는?' }, target: { value: 3 } }),
            IT({ prompt: '6일 일기에 "모임에서 다들 피우더라"라고 적혀 있어요. 6일에 점수가 다시 오른 까닭으로 알맞은 것을 고르세요.', toolOptions: CH('line', DIARY_T, '점', DIARY, { xLabel: '날짜', yLabel: '피우고 싶은 마음', max: 10, question: '6일에 오른 까닭은?', choices: ['다른 사람이 피우는 자리에 있었다', '푹 잤다', '산책을 했다'] }), target: { pick: 0 } },
              { prompt: '3일 일기에 "짜증이 나고 집중이 안 된다"라고 적혀 있어요. 3일에 점수가 오른 까닭으로 알맞은 것을 고르세요.', toolOptions: { data: DIARY.slice(0, 5), question: '3일에 오른 까닭은?', choices: ['끊은 뒤 불편함(금단)이 왔다', '푹 잤다', '산책을 했다'] }, target: { pick: 0 } },
              { prompt: '6일처럼 모임이 있는 날에 맞는 도움을 고르세요.', toolOptions: { question: '모임 날에 맞는 도움은?', choices: ['미리 "나 끊는 중이야"라고 말하고 일찍 자리를 뜬다', '모임 날은 한 번 피워도 된다', '아무 준비 없이 간다'] }, target: { pick: 0 } },
              { conclude: '피우고 싶은 마음은 오르내리면서 줄어요. 높아질 날(모임·스트레스)을 미리 알면 그날 맞는 도움을 준비할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '높아진 날과 그날 맞는 도움을 써요.', columns: ['높아진 날', '상황', '맞는 도움'], cells: [['3일', '', ''], ['6일', '', '']], answer: '끊은 뒤 불편함 — 함께 걷기·상담 / 모임 — 미리 알리고 일찍 자리 뜨기' }] },
        notes: '일기와 점수는 지어낸 가상 자료다.',
      }),
      M('activity.support', {
        title: '털어놓은 친구', method: '딜레마 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길을 두 번 골라 결과를 본다(근거 고르기 없음).', base: '갈림길을 세 번 골라 신뢰와 결과를 끝까지 따라가고 근거를 고른다.', challenge: '어른의 도움을 권하는 길을 찾아 끝까지 가고 근거를 고른다.' },
        activity: {
          title: '털어놓은 친구', tool: 'dilemma',
          teacher: '"친구가 끊고 싶다고 털어놓을 때 첫 반응이 왜 중요할까요?" 학생마다 한 길을 끝까지 가 본 뒤 결과 칸에서 신뢰가 어떻게 바뀌었는지 읽게 한다. "끊으려는 사람에게 겁을 주면 효과가 있다"는 학생에게 "겁을 준 길에서 도윤은 그다음 무엇을 했나요?"라고 되묻는다. 들어 주기·함께하기 다음에는 보건 선생님 같은 어른의 도움을 권하는 것이 좋다는 점을 짚는다.',
          task: '친구가 전자담배를 끊고 싶다고 털어놓는 장면에서 반응을 고르고, 신뢰와 결과를 끝까지 따라가요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '도윤이 끊고 싶다고 털어놓아요. 두 번 골라 결과를 보세요.', base: '도윤이 끊고 싶다고 털어놓아요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '도윤이 끊고 싶다고 털어놓아요. 어른의 도움을 권하는 길을 찾아 끝까지 가고 근거를 고르세요.' },
              '털어놓은 도윤', Q1, [['listen', 'together', 'cheer'], ['scare', 'sorry', 'adult'], ['scare', 'sorry', 'plan']], RQ1, ['r1', 'r2'], { good: [['listen', 'together', 'cheer'], ['scare', 'sorry', 'adult']] }),
            DIL({ easy: '금연하던 삼촌이 다시 피우는 모습을 봤어요. 두 번 골라 결과를 보세요.', base: '금연하던 삼촌이 다시 피우는 모습을 봤어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '금연하던 삼촌이 다시 피워요. 전문가·가족의 도움으로 이어지는 길을 찾아 끝까지 가고 근거를 고르세요.' },
              '명절의 삼촌', Q2, [['respect', 'again', 'expert'], ['mock', 'follow', 'help']], RQ2, ['r1', 'r2']),
            DIL({ easy: '도윤의 장면에서 다른 길도 가 볼 수 있어요. 두 번 골라 결과를 보세요.', base: '도윤의 장면에서 한 길을 끝까지 가고, 되돌아가 다른 길도 끝까지 가 본 뒤 근거를 고르세요.', challenge: '도윤의 장면에서 서로 다른 끝 장면 세 곳까지 가 보고 근거를 고르세요.' },
              '털어놓은 도윤, 다른 길', Q1, [['listen', 'together', 'cheer'], ['scare', 'sorry', 'adult'], ['scare', 'sorry', 'plan']], RQ1, ['r1', 'r2'], { explore: 3 },
              { target: { path: [['listen', 'together', 'cheer'], ['scare', 'sorry', 'adult'], ['scare', 'sorry', 'plan']], reasons: ['r1', 'r2'], some: true, explore: 2 }, conclude: '끊으려는 사람에게는 겁보다 존중이, 감시보다 함께하기가 힘이 돼요. 한 번 실패해도 다시 시작할 수 있게 어른의 도움을 함께 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 끊고 싶다고 털어놓을 때 가장 알맞은 첫 반응은?', options: ['"당장 끊어!"라고 겁을 준다', '"말해 줘서 고마워. 뭐가 제일 힘들어?"라고 묻는다', '다른 친구들에게 알린다'], answer: '"말해 줘서 고마워. 뭐가 제일 힘들어?"라고 묻는다' }] },
      }),
      M('activity.letter', {
        title: '끊으려는 사람에게 응원 편지', method: '응원 편지와 기준표', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '편지 틀("___에게, 끊으려는 마음이 멋져요. 힘들 땐 ___. 같이 ___")을 채워 쓴다.', base: '응원 편지를 한 문단으로 쓰고 기준 3개(존중·구체적 도움·겁주지 않기)를 점검한다.', challenge: '마지막 편지에서 \'실패해도 다시 하자\'는 말을 넣는 기준이 더해진다.' },
        activity: {
          title: '끊으려는 사람에게 응원 편지', tool: 'rubric-writing',
          teacher: '"\'끊지 않으면 큰일 나요\'와 \'참은 날들이 대단해요, 힘들 땐 같이 걸어요\' 가운데 어느 편지가 힘이 될까요?" 두 문장을 견주어 읽은 뒤 응원 편지를 쓰게 한다. "의지만 있으면 끊는다"고 쓰려는 학생에게 오늘 본 의존 고리를 떠올리게 하고, 구체적인 도움 하나를 넣자고 한다. 받는 사람은 가상 인물로 쓰고 실제 가족 이름은 쓰지 않게 한다.',
          task: '끊으려는 사람에게 보내는 응원 편지를 쓰고, 기준표(존중·구체적 도움·겁주지 않기)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '전자담배를 끊으려는 친구 도윤에게 응원 편지를 쓰세요.', toolOptions: { topic: '전자담배를 끊으려는 친구 도윤에게 응원 편지를 한 문단으로 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '도윤에게', lines: 5 }, target: { selfCheck: ['존중하는 말을 썼다', '구체적인 도움을 제안했다', '겁주는 말을 쓰지 않았다'] } },
              { prompt: '틀을 따라 도윤에게 편지를 쓰세요.', toolOptions: { starter: '도윤에게, 끊으려는 마음이 멋져. 힘들 땐 ___. 같이 ___.' } }),
            IT({ prompt: '금연 중인 가상 인물 삼촌에게 응원 편지를 쓰세요.', toolOptions: { topic: '금연을 시작한 가상 인물 삼촌에게 응원 편지를 한 문단으로 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '삼촌께', lines: 5 }, target: { selfCheck: ['존중하는 말을 썼다', '구체적인 도움을 제안했다', '겁주는 말을 쓰지 않았다'] } },
              { prompt: '틀을 따라 삼촌께 편지를 쓰세요.', toolOptions: { starter: '삼촌께, 끊으려는 마음이 멋져요. 힘들 땐 ___. 같이 ___.' } }),
            IT({ prompt: '한 번 실패해 다시 시작하려는 사람에게 응원 편지를 쓰세요.', toolOptions: { topic: '금연 중 한 번 실패해 다시 시작하려는 가상 인물에게 응원 편지를 한 문단으로 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '다시 시작하는 분께', lines: 5 }, target: { selfCheck: ['존중하는 말을 썼다', '구체적인 도움을 제안했다', '겁주는 말을 쓰지 않았다'] } },
              { prompt: '틀을 따라 다시 시작하는 분께 편지를 쓰세요.', toolOptions: { starter: '다시 시작하시는 분께, 참은 날들이 대단해요. 힘들 땐 ___. 같이 ___.' } },
              { prompt: '다시 시작하는 분께 편지를 쓰되, \'실패해도 다시 하자\'는 말을 넣으세요.', target: { selfCheck: ['존중하는 말을 썼다', '구체적인 도움을 제안했다', '겁주는 말을 쓰지 않았다', '실패해도 다시 하자는 말을 넣었다'] } },
              { conclude: '응원 편지에는 존중하는 말, 구체적인 도움, 다시 해도 된다는 말이 들어가요. 겁주는 말은 빼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 편지에서 가장 힘이 될 것 같은 한 문장을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.self', {
        title: '나의 결정 기준 점검', method: '나의 결정 기준 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 기준 3개를 먼저 함께 읽고 표시하게 한다.', base: '중학교 약물 단원의 결정 기준 5가지를 스스로 표시한다.', challenge: '나만의 기준 하나를 새로 써 보게 한다.' },
        wrap: {
          teacher: '"중학교 약물 단원을 마치며, 권유나 제안을 받았을 때 나를 지킬 기준은 무엇인가요?" 기준 다섯 가지를 함께 읽고 지킬 수 있는 것에 표시하게 한다. "기준은 어른이 정해 주는 것"이라는 말에는 오늘 표시한 기준이 바로 내가 고른 기준이라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 결정 기준' }, prompt: '내가 지킬 결정 기준에 스스로 표시해요.', target: { selfCheck: ['권유를 받으면 "아니"를 먼저 말한다', '사실과 오해를 근거로 가린다', '처방약은 처방받은 사람만 먹는다', '위험 신호가 보이면 어른·112에 알린다', '친구가 고민하면 겁주지 않고 함께 도움을 찾는다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '"의지만 있으면 바로 끊을 수 있다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['의존은 뇌가 익숙해진 것이라 도움이 필요할 수 있다', '의지가 약한 사람만 의존이 생긴다', '끊을 필요가 없다'], answer: 0, difficulty: 0.2, explain: '의존은 의지만의 문제가 아니라서 존중과 도움이 필요해요.' },
            { type: 'short', prompt: '나만의 결정 기준 하나를 새로 써요.' },
          ],
        },
        worksheet: {
          title: '나의 결정 기준',
          items: [
            { type: 'check', prompt: '내가 지킬 결정 기준에 표시해요.', options: ['"아니"를 먼저 말하기', '사실과 오해 가리기', '처방약은 처방받은 사람만', '위험 신호면 어른·112', '친구를 겁주지 않고 돕기'] },
            { type: 'short', prompt: '나만의 결정 기준 하나를 써요.' },
          ],
        },
      }),
      M('wrap.share', {
        title: '다짐 카드 나누기', method: '다짐 카드 나누기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 다짐 카드를 읽어 주고 지킬 다짐과 고칠 다짐을 함께 나눈다.', base: '다짐 카드를 나눈 뒤 지킬 다짐 하나를 골라 모둠에 까닭과 함께 읽어 준다.', challenge: '고른 다짐을 내 말로 바꿔 써서 읽어 주게 한다.' },
        wrap: {
          teacher: '"이 다짐 가운데 오늘 배운 것과 맞는 다짐은 무엇이고, 고쳐야 할 다짐은 무엇일까요?" 다짐 카드를 두 칸에 나눈 뒤 지킬 다짐 하나를 골라 모둠에게 까닭과 함께 읽어 주게 한다. "다짐은 멋있게 써야 한다"는 말에는 실제로 지킬 수 있는 짧은 다짐이 더 오래 간다고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', slots: ['지킬 다짐', '고칠 다짐'], cards: [
              { id: 'g1', text: '권유를 받으면 "아니"를 먼저' }, { id: 'g2', text: '친구가 털어놓으면 끝까지 듣기' }, { id: 'g3', text: '위험 신호면 바로 어른에게' },
              { id: 'b1', text: '분위기 맞추려면 한 번은 해 보기' }, { id: 'b2', text: '친구를 겁줘서라도 말리기' }] },
              prompt: '다짐 카드를 지킬 다짐과 고칠 다짐으로 나눠요.', target: { sort: { '지킬 다짐': ['g1', 'g2', 'g3'], '고칠 다짐': ['b1', 'b2'] } }, difficulty: 0.15 },
            { type: 'short', prompt: '지킬 다짐 하나를 골라 내 말로 쓰고, 고른 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '나의 다짐',
          items: [
            { type: 'short', prompt: '중학교 약물 단원을 마치며 지킬 다짐을 내 말로 써요.' },
            { type: 'short', prompt: '그 다짐을 고른 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
