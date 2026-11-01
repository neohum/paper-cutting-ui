/* 창체 안전교육 생활안전 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-life 중.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 중학교 생활안전 네 항목
 *   (공공시설 이용 시 안전과 에티켓 / 식품의 종류에 따른 안전한 보관 방법 / 실험·실습실 및 체육·여가활동의 안전규칙 / 실종·유괴·미아 상황 알고 예방하기)
 *   + 학교 안전교육 7대 표준안 생활안전 중분류(시설 및 제품이용 안전·신체활동 안전·유괴·미아사고 예방). 주제마다 source 는 체계도에 있다.
 * 중 기준: 사례 분석·딜레마 토의·자료 해석·짧은 글쓰기(기준표 자기 평가)·역할극 대본·캠페인. 자료·그래프 수치와 인물·장면은 모두 지어낸 가상 자료다(가명).
 *   피해 경험은 묻지 않는다 — "본 적 있는 장면", "가상 인물"로만 묻는다. 전화번호는 112(경찰)·1388(청소년 상담)만 쓴다(체계도 개념).
 * 주제 15개 × 8모듈 = 120모듈. 7학년 5주제(공공시설·식품 보관·실험실 규칙·체육 야외·유인 신호), 8학년 5주제, 9학년 5주제. */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `saf-life.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'saf-life', band: '중', topic: `saf-life.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글]] — 칸 하나에 카드 한 장
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => ({ id: `f${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(1단)·기본(2단)·도전(3단) 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // p = { easy, base, challenge } 문항 글, good = 도전 단계의 바른 길, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok } 도전에만 더할 근거
  // good = 도전 단계의 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true } },
    },
  }, extra);
  // 도입 시연용 갈림길: 깊이 2 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R) => ({ tool: 'dilemma', options: { title, scene: cut(tree, 2), reasons: R || [] }, sequence: [{ path: paths(good, 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);

  // ==== 7학년 · 공공시설 이용 안전과 에티켓 (saf-life.m.public-etiquette) ====
  {
    const M = MK('public-etiquette', [7]);
    const RISK3 = ['사고 위험', '불편과 민폐', '둘 다'];
    const RISK2 = ['사고 위험', '불편과 민폐'];
    const EV = [
      { id: 'r1', text: '닫히는 문에 손 넣기', to: '사고 위험' }, { id: 'm1', text: '안에서 큰 소리로 통화하기', to: '불편과 민폐' },
      { id: 'b1', text: '에스컬레이터에서 뛰어 내려가기', to: '둘 다' }, { id: 'r2', text: '손잡이 밖으로 몸 내밀기', to: '사고 위험' },
      { id: 'm2', text: '층 버튼을 모두 눌러 두기', to: '불편과 민폐' }, { id: 'b2', text: '내리기 전에 밀고 타기', to: '둘 다' },
      { id: 'r3', text: '노란 선을 밟고 서기', to: '사고 위험' }, { id: 'm3', text: '엘리베이터 안에서 음식 먹기', to: '불편과 민폐' },
      { id: 'b3', text: '에스컬레이터에서 친구 밀며 장난', to: '둘 다' }, { id: 'b4', text: '통로에 큰 가방 세워 두기', to: '둘 다' },
    ];
    const LIB = [
      { id: 'l1', text: '책장 사이에서 뛰기', to: '둘 다' }, { id: 'l2', text: '열람실에서 큰 소리로 웃기', to: '불편과 민폐' },
      { id: 'l3', text: '의자를 밟고 높은 칸 책 꺼내기', to: '사고 위험' }, { id: 'l4', text: '지하상가 계단 입구를 막고 모여 서기', to: '둘 다' },
      { id: 'l5', text: '쏟은 음료를 닦지 않고 가기', to: '둘 다' }, { id: 'l6', text: '젖은 계단을 뛰어 내려가기', to: '사고 위험' },
      { id: 'l7', text: '빈자리를 가방으로 맡아 두기', to: '불편과 민폐' }, { id: 'l8', text: '진열대 물건을 함부로 만지기', to: '불편과 민폐' },
    ];
    // 가상의 중학교 칸 지도 — 쉬는 시간 부딪힘이 잦은 곳
    const SCHOOL = { grid: [6, 4], title: '가상의 우리 중학교 1층', regions: [
      { name: '교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '복도 모퉁이', cells: [[2, 0], [2, 1]] },
      { name: '계단', cells: [[3, 0], [3, 1]] }, { name: '도서관', cells: [[4, 0], [5, 0], [4, 1], [5, 1]] },
      { name: '현관', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '급식실 입구', cells: [[2, 2], [3, 2], [2, 3], [3, 3]] },
      { name: '운동장 문', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] },
    ] };
    const SURVEY = [['계단에서 뛰기', 11], ['에스컬레이터 장난', 8], ['닫히는 문 잡기', 6], ['통로에 짐 두기', 5], ['도서관에서 뛰기', 3], ['줄 새치기', 2]];
    const D1 = { text: '학원 건물 엘리베이터 문이 닫히는데 친구 하린이 "잠깐만!" 하며 뛰어온다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'hand', text: '손을 뻗어 닫히는 문을 막는다', result: '문틈에 손이 끼일 뻔해 깜짝 놀란다.', impact: [{ who: '나', text: '손을 다칠 수 있다', tone: -1 }], why: '닫히는 문은 손을 넣어도 늘 다시 열리지는 않아요. 몸으로 막지 않아요.', end: '손을 다칠 뻔했어요. 버튼이나 다음 차가 있었어요.',
        next: { text: '문이 다시 열렸고, 하린이 뛰어 들어오다 안에 있던 어르신과 부딪칠 뻔했다.', choices: [
          { id: 'again', text: '다음에도 이렇게 잡아 주기로 한다', result: '위험한 습관이 굳는다.', impact: [{ who: '어르신', text: '또 부딪칠 수 있다', tone: -1 }] },
          { id: 'sorry', text: '어르신께 사과하고 "다음엔 버튼으로 열자"고 한다', result: '하린도 뛰어든 것이 위험했다고 말한다.', impact: [{ who: '어르신', text: '사과를 받는다', tone: 1 }] }] } },
      { id: 'button', text: '열림 버튼을 누르고 기다린다', result: '문이 천천히 다시 열린다.', impact: [{ who: '하린', text: '탈 수 있다', tone: 1 }], end: '버튼으로 문을 열어 기다렸어요.',
        next: { text: '하린이 계속 뛰어온다. 안에는 사람이 꽤 많다.', choices: [
          { id: 'squeeze', text: '"빨리 끼어 타!" 하고 문 앞 자리를 만든다', result: '하린이 뛰어들며 문 앞 사람을 민다.', impact: [{ who: '안에 있던 사람', text: '밀려 휘청인다', tone: -1 }] },
          { id: 'walk', text: '"뛰지 말고 걸어와"라고 말한다', result: '하린이 걸어와 조심히 탄다.', impact: [{ who: '하린', text: '넘어지지 않는다', tone: 1 }], end: '하린이 걸어와 모두 안전하게 탔어요.',
            next: { text: '안이 꽉 차 문이 닫히지 않고 경고음이 울린다.', choices: [
              { id: 'getoff', text: '문 가까이 선 내가 내려 다음 차를 탄다', result: '문이 닫히고 엘리베이터가 움직인다.', impact: [{ who: '안에 있던 사람', text: '늦지 않는다', tone: 1 }] },
              { id: 'stay', text: '모두 그대로 버틴다', result: '문이 계속 열려 모두가 늦어진다.', impact: [{ who: '관리인', text: '문 고장을 살피러 와야 한다', tone: -1 }], why: '정원을 넘으면 다 같이 기다려야 해요. 한 사람이 내리면 풀려요.' }] } }] } },
      { id: 'next', text: '하린에게 다음 엘리베이터를 같이 타자고 한다', result: '조금 늦지만 아무도 다치지 않는다.', impact: [{ who: '하린', text: '뛰지 않아도 된다', tone: 1 }], ending: '다음 차를 같이 타서 모두 안전했어요.' }] };
    const R1 = [{ id: 'r1', text: '닫히는 문을 몸으로 막으면 끼일 수 있다' }, { id: 'r2', text: '기다리면 아무도 다치지 않고 탈 수 있다' },
      { id: 'r3', text: '친구를 위해서라면 손으로 잡아 줘도 된다', why: '친구를 기다려 주는 방법은 버튼이나 다음 차예요.' }, { id: 'r4', text: '빨리 가는 것이 가장 중요하다', why: '몇십 초 늦는 것보다 다치지 않는 것이 먼저예요.' }];
    const D2 = { text: '지하철역 엘리베이터 앞에 친구들과 줄을 섰다. 뒤에 유모차를 민 어른이 왔고, 바로 옆에 계단도 있다.', ask: '문이 열리면 어떻게 할까?', motif: 'house', choices: [
      { id: 'rush', text: '문이 열리자 친구들과 먼저 탄다', result: '안이 꽉 차 유모차가 못 탄다.', impact: [{ who: '유모차 보호자', text: '한참 기다린다', tone: -1 }], why: '엘리베이터가 꼭 필요한 사람이 있어요. 계단을 쓸 수 있으면 양보해요.', end: '유모차가 못 탔어요.',
        next: { text: '문이 닫히려는데 유모차 보호자가 탈 자리가 없다.', choices: [
          { id: 'go', text: '모른 척 그대로 올라간다', result: '보호자는 다음 차를 또 기다린다.', impact: [{ who: '유모차 보호자', text: '늦어진다', tone: -1 }] },
          { id: 'out', text: '우리 몇 명이 내려 자리를 비켜 준다', result: '유모차가 탄다.', impact: [{ who: '유모차 보호자', text: '탈 수 있다', tone: 1 }] }] } },
      { id: 'yield', text: '유모차가 먼저 타게 하고 우리는 계단으로 간다', result: '유모차가 바로 탄다.', impact: [{ who: '유모차 보호자', text: '바로 탄다', tone: 1 }], end: '유모차에 양보하고 계단으로 갔어요.',
        next: { text: '계단에서 친구가 "뛰어가서 먼저 가자"고 한다.', choices: [
          { id: 'run', text: '계단을 두 칸씩 뛰어 내려간다', result: '올라오던 사람과 부딪칠 뻔한다.', impact: [{ who: '올라오던 사람', text: '부딪칠 뻔한다', tone: -1 }], why: '계단에서 뛰면 나와 마주 오는 사람이 함께 넘어질 수 있어요.' },
          { id: 'walk', text: '손잡이 쪽으로 걸어 내려가자고 한다', result: '모두 걸어 내려간다.', impact: [{ who: '친구들', text: '넘어지지 않는다', tone: 1 }], end: '걸어 내려가 모두 안전했어요.',
            next: { text: '계단 아래에서 사람들이 한꺼번에 올라온다.', choices: [
              { id: 'side', text: '한쪽으로 비켜 한 줄로 걷는다', result: '오가는 사람이 엉키지 않는다.', impact: [{ who: '올라오는 사람', text: '길이 열린다', tone: 1 }] },
              { id: 'push', text: '친구들과 나란히 틈을 비집고 내려간다', result: '계단 가운데가 막힌다.', impact: [{ who: '올라오는 사람', text: '밀려 휘청인다', tone: -1 }], why: '붐비는 계단에서는 한 줄로 비켜 걸어야 엉키지 않아요.' }] } }] } },
      { id: 'wait', text: '유모차를 먼저 보내고 다음 차를 기다린다', result: '유모차가 먼저 타고 우리는 다음 차를 탄다.', impact: [{ who: '유모차 보호자', text: '먼저 탄다', tone: 1 }], ending: '양보하고 기다려서 모두 편했어요.' }] };
    const R2 = [{ id: 'r1', text: '엘리베이터가 꼭 필요한 사람이 먼저 타야 한다' }, { id: 'r2', text: '뛰지 않고 걸으면 부딪힘을 막는다' },
      { id: 'r3', text: '먼저 줄 선 사람이 언제나 먼저 탄다', why: '줄 순서도 중요하지만, 계단을 쓸 수 있는 사람은 양보할 수 있어요.' }, { id: 'r4', text: '계단은 늘 엘리베이터보다 위험하다', why: '걸어서 손잡이 쪽으로 가면 계단도 안전하게 쓸 수 있어요.' }];
    const D3 = { text: '엘리베이터 안에서 친구 도윤이 재미로 같이 쿵쿵 뛰자고 한다. 다른 어른도 함께 타고 있다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'jump', text: '같이 뛴다', result: '엘리베이터가 흔들리고 함께 탄 어른이 놀란다.', impact: [{ who: '함께 탄 어른', text: '놀라고 불안하다', tone: -1 }], why: '흔들림은 멈춤 같은 고장으로 이어질 수 있어요.', end: '엘리베이터가 흔들렸어요.',
        next: { text: '"뛰지 마십시오"라는 안내 방송이 나온다.', choices: [
          { id: 'more', text: '방송을 무시하고 더 세게 뛴다', result: '엘리베이터가 덜컹 멈춘다.', impact: [{ who: '모두', text: '갇혀서 기다린다', tone: -1 }] },
          { id: 'stopj', text: '바로 멈추고 어른께 사과한다', result: '어른이 고개를 끄덕인다.', impact: [{ who: '함께 탄 어른', text: '안심한다', tone: 1 }] }] } },
      { id: 'refuse', text: '"흔들리면 위험해"라며 거절한다', result: '도윤이 머쓱해하며 멈춘다.', impact: [{ who: '함께 탄 어른', text: '편하게 간다', tone: 1 }], end: '거절해서 모두 편하게 갔어요.',
        next: { text: '도윤이 이번엔 층 버튼을 모두 누르려 한다.', choices: [
          { id: 'allbtn', text: '웃으며 같이 누른다', result: '층마다 서서 모두 늦어진다.', impact: [{ who: '함께 탄 어른', text: '늦어진다', tone: -1 }], why: '버튼 장난은 다른 사람의 시간을 빼앗아요.' },
          { id: 'talk', text: '"다른 사람이 늦어져"라고 말린다', result: '도윤이 손을 내린다.', impact: [{ who: '함께 탄 어른', text: '제때 내린다', tone: 1 }], end: '말려서 아무도 늦지 않았어요.',
            next: { text: '내리려는데 밖에서 사람들이 바로 밀고 들어오려 한다.', choices: [
              { id: 'say', text: '"내릴게요"라고 말하고 내린 뒤 옆으로 비킨다', result: '내리고 타는 사람이 엉키지 않는다.', impact: [{ who: '타려는 사람', text: '곧바로 탄다', tone: 1 }] },
              { id: 'shove', text: '어깨로 밀고 나간다', result: '문 앞에서 서로 부딪친다.', impact: [{ who: '타려는 사람', text: '밀려 넘어질 뻔한다', tone: -1 }], why: '말로 알리고 내리면 밀지 않아도 돼요.' }] } }] } },
      { id: 'phone', text: '못 들은 척 휴대전화만 본다', result: '도윤이 혼자 뛰다 문 쪽에 부딪칠 뻔한다.', impact: [{ who: '도윤', text: '다칠 뻔한다', tone: -1 }], why: '모른 척하면 친구도, 함께 탄 사람도 지키지 못해요.', ending: '말리지 않아 위험했어요.' }] };
    const R3 = [{ id: 'r1', text: '흔들림은 고장과 사고로 이어질 수 있다' }, { id: 'r2', text: '함께 탄 사람의 시간과 안전도 지켜야 한다' },
      { id: 'r3', text: '친구가 하자는 대로 해야 사이가 좋다', why: '친구를 말리는 것도 친구를 지키는 일이에요.' }, { id: 'r4', text: '방송이 나오기 전까지는 괜찮다', why: '방송은 위험이 생긴 뒤에 나와요. 미리 멈춰요.' }];
    const ROLE = { reasons: [{ id: 'r5', text: '뒤에 탈 사람과 내리는 사람의 길을 막지 않는다' }, { id: 'r6', text: '관리인이 고장을 고치는 동안 모두가 못 쓴다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.escalator-case', {
        title: '에스컬레이터 네 컷에서 막을 지점', method: '사례 네 컷에서 사고를 막을 지점 찾기', tool: 'story', minutes: 6,
        levels: { easy: '컷 3장만 보이고, 막을 지점 컷에 테두리를 그어 단서를 준다.', base: '컷 4장을 넘겨 보며 막을 수 있던 컷을 고르고 이유를 한 줄 말한다.', challenge: '컷 5장(뒷이야기 한 장 더)에서 막을 지점 두 곳과 각각 다른 해결책을 말한다.' },
        intro: {
          teacher: '"이 네 컷 가운데 어느 장면에서 멈췄다면 아무도 휘청이지 않았을까요?" 지하상가 에스컬레이터에서 두 학생이 장난치다 뒷사람이 휘청이는 가상 네 컷을 넘겨 보이고, 시연 단추로 첫 컷이 바구니에 담기는 모습을 보인다. "넘어진 사람이 조심했어야죠"라는 말이 나오면 "뒷사람은 앞에서 무슨 일이 벌어질지 미리 알 수 있었을까요?"라고 되묻는다. 오늘은 공공시설 에티켓이 다른 사람의 안전을 지키는 약속이라는 것을 사례로 따져 본다고 밝힌다.',
          student: '네 컷을 보고 사고를 막을 수 있었던 컷을 골라요. 그 컷에서 누가 무엇을 바꿨으면 좋았을지 짝에게 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '막을 수 있던 컷', title: '지하상가 에스컬레이터', cards: [
            { id: 'c1', text: '두 친구가 손잡이를 놓고 장난친다', motif: 'star' }, { id: 'c2', text: '한 명이 계단을 뛰어 내려간다', motif: 'cloud' },
            { id: 'c3', text: '뒷사람 가방에 부딪힌다', motif: 'leaf' }, { id: 'c4', text: '뒷사람이 휘청이며 넘어질 뻔한다', motif: 'house' }], shuffle: false }, sequence: [{ pick: ['c1'] }] },
          art: { draw: 'a paper-cut underground shopping arcade with an escalator, two teenagers fooling around without holding the handrail and an adult behind them losing balance', banner: '어느 컷에서 막을 수 있었을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 가상이다. 학생에게 다친 일을 묻지 않고 "본 적 있는 장면"으로만 이야기한다.',
      }),
      M('intro.school-map', {
        title: '학교 칸 지도에 위험 지점 핀', method: '학교 칸 지도에 위험 지점 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '핀 2개만 꽂고, 교사가 "쉬는 시간에 사람이 몰리는 곳"이라는 단서를 말한다.', base: '핀 3개를 꽂고 곳마다 까닭을 말한다.', challenge: '핀 3개에 사람·환경·시설 가운데 어느 요인인지 붙여 말한다.' },
        intro: {
          teacher: '"쉬는 시간 종이 울리면 우리 학교에서 가장 붐비는 곳은 어디일까요?" 가상 중학교 칸 지도를 띄우고 시연 단추로 계단·복도 모퉁이·급식실 입구에 핀이 꽂히는 모습을 보인다. "교실이 제일 위험해요"라는 말에는 "교실과 복도 모퉁이 가운데 앞이 안 보이는 곳은 어디일까요?"라고 되묻는다. 익숙한 학교 시설도 사람이 몰리고 앞이 안 보이면 위험해진다는 점을 짚는다.',
          student: '가상의 학교 지도에서 쉬는 시간에 부딪힘이 잦을 곳 세 군데를 떠올려 보고, 왜 그곳인지 까닭을 한 가지씩 말해요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ region: '계단' }, { region: '복도 모퉁이' }, { region: '급식실 입구' }] },
          art: { draw: 'a paper-cut school hallway map seen from above with stairs, a blind corner and a cafeteria entrance marked by small paper pins', banner: '우리 학교 위험 지점은 어디?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.risk-or-manner', {
        title: '위험·민폐·둘 다로 나누기', method: '장면을 위험·민폐·둘 다로 나누고 근거 고르기', tool: 'mindmap', minutes: 16,
        levels: { easy: '카드 6장을 칸 두 개(사고 위험·불편과 민폐)로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 10장을 칸 세 개에 나누고, \'둘 다\' 장면마다 에티켓이 곧 안전인 근거 카드를 고른다.', challenge: '근거 카드를 고른 뒤 활동지에 그 근거를 내 말로 한 문장 직접 쓴다(함정 근거 카드가 더 섞인다).' },
        activity: {
          title: '위험·민폐·둘 다로 나누기', tool: 'mindmap',
          teacher: '"이 장면은 사고로 이어질까요, 남을 불편하게만 할까요, 아니면 둘 다일까요?" 카드를 놓을 때마다 누가 다칠 수 있는지 한 사람씩 말하게 한다. "민폐는 예의 문제일 뿐"이라는 학생에게 "통로에 세워 둔 가방은 예의 문제일까요, 걸려 넘어질 문제일까요?"라고 되묻는다. \'둘 다\' 칸에 모인 카드가 바로 에티켓이 안전인 장면이라는 점을 짚는다.',
          task: '공공시설 장면 카드를 \'사고 위험\'·\'불편과 민폐\'·\'둘 다\'로 나누고, \'둘 다\' 장면의 근거를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('엘리베이터·에스컬레이터 장면을 세 칸에 나누어 보세요.', RISK3, EV, { topic: '엘리베이터·에스컬레이터' }),
              SB('엘리베이터·에스컬레이터 장면을 두 칸에 나누어 보세요(6장).', RISK2, EV.filter((c) => c.to !== '둘 다').concat([]).slice(0, 6), { topic: '엘리베이터·에스컬레이터' })),
            IT(MB('\'둘 다\' 장면마다 에티켓이 곧 안전인 근거를 이어 보세요.', [['에스컬레이터에서 뛰기', '앞사람과 부딪혀 여럿이 넘어진다'], ['내리기 전에 밀고 타기', '내리는 사람과 엉켜 문 앞이 막힌다'], ['통로에 큰 가방 두기', '지나는 사람이 걸려 넘어진다']], ['어른에게 혼나기 때문이다'], { topic: '왜 둘 다일까?' }),
              MB('\'둘 다\' 장면 두 개의 근거를 이어 보세요.', [['에스컬레이터에서 뛰기', '앞사람과 부딪혀 여럿이 넘어진다'], ['통로에 큰 가방 두기', '지나는 사람이 걸려 넘어진다']], [], { topic: '왜 둘 다일까?' }),
              MB('\'둘 다\' 장면의 근거를 이은 뒤 하나를 골라 활동지에 내 말로 써요.', [['에스컬레이터에서 뛰기', '앞사람과 부딪혀 여럿이 넘어진다'], ['내리기 전에 밀고 타기', '내리는 사람과 엉켜 문 앞이 막힌다'], ['통로에 큰 가방 두기', '지나는 사람이 걸려 넘어진다']], ['어른에게 혼나기 때문이다', '내가 빨리 가는 것이 중요하다'], { topic: '왜 둘 다일까?' })),
            IT(SB('도서관·지하상가 장면을 세 칸에 나누어 보세요.', RISK3, LIB, { topic: '도서관·지하상가' }),
              SB('도서관·지하상가 장면을 두 칸에 나누어 보세요(4장).', RISK2, pickCards(LIB, ['l2', 'l3', 'l6', 'l7']), { topic: '도서관·지하상가' }),
              null, { conclude: '남을 불편하게 하는 행동 가운데 많은 것이 사고로도 이어져요. 에티켓은 서로의 안전을 지키는 약속이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'둘 다\' 장면 하나를 골라, 그 에티켓이 왜 안전을 지키는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '사고로도 이어지는 행동에 ○ 해요.', options: ['통로에 가방 세워 두기', '조용히 책 읽기'], answer: '통로에 가방 세워 두기' }] },
      }),
      M('activity.elevator-dilemma', {
        title: '엘리베이터 갈림길 따라가기', method: '엘리베이터 갈림길에서 결과 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 가장 알맞은 근거 카드를 고른다.', challenge: '갈림길 3번까지 가고, 뒷사람·관리인 입장의 근거 카드까지 함께 고른다.' },
        activity: {
          title: '엘리베이터 갈림길 따라가기', tool: 'dilemma',
          teacher: '"닫히는 문을 손으로 막으면 늘 다시 열릴까요?" 학생마다 한 길을 끝까지 가 본 뒤, 되돌아가 다른 길의 결과와 견주게 한다. "센서가 있어서 괜찮아요"라는 학생에게 "손이 센서 아래 틈에 끼면 어떻게 될까요?"라고 되묻는다. 끝 장면에서 근거 카드를 고를 때 나만이 아니라 함께 탄 사람·뒷사람·관리인은 어떤 영향을 받는지 따지게 한다.',
          task: '엘리베이터 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '문이 닫히는데 친구가 뛰어와요. 한 번 골라 결과를 보세요.', base: '문이 닫히는데 친구가 뛰어와요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '문이 닫히는데 친구가 뛰어와요. 세 번 골라 끝까지 가고, 함께 탄 사람·관리인 입장의 근거도 고르세요.' },
              '닫히는 엘리베이터', D1, [['button', 'walk', 'getoff'], ['next']], R1, ['r1', 'r2'], ROLE),
            DIL({ easy: '유모차가 뒤에 왔어요. 한 번 골라 결과를 보세요.', base: '유모차가 뒤에 왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '유모차가 뒤에 왔어요. 세 번 골라 끝까지 가고, 뒷사람 입장의 근거도 고르세요.' },
              '역 엘리베이터 앞', D2, [['yield', 'walk', 'side'], ['wait']], R2, ['r1', 'r2'], ROLE),
            DIL({ easy: '친구가 엘리베이터에서 뛰자고 해요. 한 번 골라 결과를 보세요.', base: '친구가 엘리베이터에서 뛰자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 엘리베이터에서 뛰자고 해요. 세 번 골라 끝까지 가고, 관리인 입장의 근거도 고르세요.' },
              '엘리베이터 안 장난', D3, [['refuse', 'talk', 'say']], R3, ['r1', 'r2'], ROLE, { conclude: '닫히는 문은 몸으로 막지 않고, 함께 쓰는 시설에서는 나와 다른 사람의 안전을 같이 따져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '닫히는 엘리베이터에 친구가 뛰어올 때 가장 알맞은 행동은?', options: ['손으로 문을 막는다', '열림 버튼을 누르거나 다음 차를 탄다', '발을 문틈에 넣는다'], answer: '열림 버튼을 누르거나 다음 차를 탄다' }] },
      }),
      M('activity.survey-chart', {
        title: '가상 학급 조사 그래프 읽기', method: '가상의 학급 조사 그래프 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '막대 4개만 보고 가장 큰 막대를 고른다.', base: '막대 6개를 읽고 상위 두 행동과 그 행동이 다치게 할 수 있는 사람을 짝지어 설명한다.', challenge: '마지막 문항에서 이 그래프의 한계(가상 자료·스스로 답한 조사)를 짚는 보기를 고른다.' },
        activity: {
          title: '가상 학급 조사 그래프 읽기', tool: 'chart',
          teacher: '"우리 반 친구들이 공공시설에서 가장 많이 본 위험 행동은 무엇일까요?" 가상 조사 막대그래프를 띄우고, 막대를 읽을 때마다 그 행동으로 다칠 수 있는 사람이 누구인지 함께 말한다. "많이 본 행동이 가장 위험한 행동"이라고 말하는 학생에게 "자주 본 것과 크게 다치는 것은 같은 말일까요?"라고 되묻는다. 이 자료는 수업용으로 지어낸 가상 조사라는 점을 처음에 밝힌다.',
          task: '가상의 우리 반 조사 그래프를 읽고, 많이 나온 행동과 그 행동이 다치게 할 수 있는 사람을 짝지어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '그래프에서 가장 많이 본 위험 행동을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '공공시설에서 본 위험 행동(가상 조사)', unit: '명', xLabel: '행동', yLabel: '응답 수', data: SURVEY, question: '가장 많이 본 위험 행동은?', choices: SURVEY.map((d) => d[0]) }, target: { pick: 0 } },
              { prompt: '막대 4개 가운데 가장 많이 본 위험 행동을 고르세요.', toolOptions: { data: SURVEY.slice(0, 4), choices: SURVEY.slice(0, 4).map((d) => d[0]) } }),
            IT({ prompt: '상위 두 행동이 함께 다치게 할 수 있는 사람은 누구인지 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '공공시설에서 본 위험 행동(가상 조사)', unit: '명', xLabel: '행동', yLabel: '응답 수', data: SURVEY, question: '1·2위 행동이 함께 다치게 할 수 있는 사람은?', choices: ['행동한 사람만', '앞이나 아래에 있던 다른 사람까지', '아무도 다치지 않는다'] }, target: { pick: 1 } }),
            IT({ prompt: '\'에스컬레이터 장난\'은 \'계단에서 뛰기\'보다 응답이 몇 명 적은지 그래프에서 읽어 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '공공시설에서 본 위험 행동(가상 조사)', unit: '명', xLabel: '행동', yLabel: '응답 수', data: SURVEY, question: '몇 명 적은가요?' }, target: { value: 3 } },
              null,
              { prompt: '이 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: { question: '이 가상 조사로 알 수 없는 것은?', choices: ['우리 반이 많이 본 행동의 차례', '실제로 일어난 사고 수', '계단 뛰기를 본 응답 수'] }, target: { pick: 1 } },
              { conclude: '조사 그래프는 많이 본 행동을 알려 주지만, 실제 사고 수까지 알려 주지는 않아요. 자료가 무엇을 쟀는지 먼저 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프의 상위 두 행동과 다칠 수 있는 사람을 써요.', columns: ['행동', '다칠 수 있는 사람'], cells: [['계단에서 뛰기', ''], ['에스컬레이터 장난', '']], answer: '마주 오는 사람·앞사람, 뒷사람·아래에 선 사람' }] },
      }),
      M('activity.campaign-words', {
        title: '낱말 카드로 캠페인 문구 짓기', method: '낱말 카드로 시설별 캠페인 문구 짓기', tool: 'wordcards', minutes: 16,
        levels: { easy: '시설 2곳의 문구 틀에 낱말 카드를 넣는다.', base: '시설 4곳의 문구를 만들고, 실제 수칙과 맞는 문구만 골라 서로 점검한다.', challenge: '문구마다 그 문구가 지키는 사람을 짝짓는다(함정 카드가 섞인다).' },
        activity: {
          title: '낱말 카드로 캠페인 문구 짓기', tool: 'wordcards',
          teacher: '"한 줄 문구만 읽고도 무엇을 해야 할지 알 수 있을까요?" 낱말 카드를 넣어 문구를 만든 뒤, 짝과 바꿔 읽으며 실제 수칙과 맞는지 서로 점검하게 한다. "멋진 말이 좋은 문구"라는 학생에게 "\'안전 제일!\'만 보고 에스컬레이터에서 무엇을 해야 할지 알 수 있을까요?"라고 되묻는다. 좋은 문구에는 구체적인 행동이 들어간다는 점을 짚는다.',
          task: '낱말 카드로 시설별 한 줄 캠페인 문구를 만들고, 실제 수칙과 맞는지 점검해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(FB('낱말 카드를 넣어 시설 네 곳의 캠페인 문구를 완성하세요.', [['에스컬레이터: ___ 잡고 걷지 않기', '손잡이'], ['엘리베이터: ___, 그다음 타기', '먼저 내리기'], ['도서관: 뛰지 말고 ___', '조용히'], ['지하상가 계단: ___로 비켜 걷기', '한 줄']], ['서두르기', '앞지르기']),
              FB('낱말 카드를 넣어 시설 두 곳의 문구를 완성하세요.', [['에스컬레이터: ___ 잡고 걷지 않기', '손잡이'], ['엘리베이터: ___, 그다음 타기', '먼저 내리기']], ['서두르기'])),
            IT(PB('실제 안전 수칙과 맞는 캠페인 문구만 골라 담으세요.', '수칙에 맞는 문구', [
              { id: 'p1', text: '손잡이 잡고 멈춰 서요', ok: true }, { id: 'p2', text: '닫히는 문은 손으로 잡아요' },
              { id: 'p3', text: '내릴 사람 먼저, 그다음 타요', ok: true }, { id: 'p4', text: '급하면 에스컬레이터는 뛰어요' },
              { id: 'p5', text: '통로에 가방을 두지 않아요', ok: true }, { id: 'p6', text: '붐비면 밀어서라도 가요' }])),
            IT(MB('문구마다 그 문구가 지켜 주는 사람을 이어 보세요.', [['에스컬레이터에서 걷지 않기', '뒤와 아래에 선 사람'], ['내릴 사람 먼저', '문 앞에서 내리는 사람'], ['통로에 짐 두지 않기', '지나가는 사람']], ['문구를 만든 사람'], { topic: '누구를 지킬까?' }),
              MB('문구 두 개가 지켜 주는 사람을 이어 보세요.', [['에스컬레이터에서 걷지 않기', '뒤와 아래에 선 사람'], ['통로에 짐 두지 않기', '지나가는 사람']], []),
              null, { conclude: '좋은 캠페인 문구는 구체적인 행동과 그 행동이 지키는 사람을 함께 떠올리게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 낱말을 써요.', text: '엘리베이터에서는 내릴 사람이 ___ 내리고 그다음 타요.', answer: '먼저' }] },
      }),

      // ---- 정리 ----
      M('wrap.rule-map', {
        title: '시설별 수칙 마인드맵', method: '시설별 수칙 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '시설 2곳 가지에 수칙 카드 4장을 골라 잇는다.', base: '시설 4곳 가지에 수칙을 2개씩 잇는다.', challenge: '함정 카드 2장이 섞인 판에서 잇고, 수칙 하나가 나를 지키는지 남을 지키는지 써 낸다.' },
        wrap: {
          teacher: '"\'에티켓이 곧 안전\' 가지에 시설마다 어떤 약속을 달 수 있을까요?" 학생이 가지를 다 이으면 수칙 하나씩을 골라 그 수칙이 나를 지키는지, 다른 사람도 지키는지 말하게 한다. "학교 시설은 익숙해서 괜찮다"는 말에는 오늘 꽂은 학교 지도 핀을 다시 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '에티켓이 곧 안전', slots: ['엘리베이터', '에스컬레이터', '도서관', '지하상가'], cards: [
              { id: 'a1', text: '내릴 사람 먼저 내리기' }, { id: 'a2', text: '닫히는 문 몸으로 막지 않기' }, { id: 'b1', text: '손잡이 잡기' }, { id: 'b2', text: '걷거나 뛰지 않기' },
              { id: 'c1', text: '책장 사이 뛰지 않기' }, { id: 'c2', text: '통로에 가방 두지 않기' }, { id: 'd1', text: '계단 입구 막지 않기' }, { id: 'd2', text: '쏟은 음료는 바로 알리기' }] },
              prompt: '시설마다 지킬 수칙을 두 개씩 이어요.', target: { sort: { 엘리베이터: ['a1', 'a2'], 에스컬레이터: ['b1', 'b2'], 도서관: ['c1', 'c2'], 지하상가: ['d1', 'd2'] } }, difficulty: 0.2 },
            { prompt: '시설 두 곳에 수칙을 두 개씩 이어요.', toolOptions: { slots: ['엘리베이터', '에스컬레이터'], cards: [{ id: 'a1', text: '내릴 사람 먼저 내리기' }, { id: 'a2', text: '닫히는 문 몸으로 막지 않기' }, { id: 'b1', text: '손잡이 잡기' }, { id: 'b2', text: '걷거나 뛰지 않기' }] }, target: { sort: { 엘리베이터: ['a1', 'a2'], 에스컬레이터: ['b1', 'b2'] } } },
            { toolOptions: { cards: [
              { id: 'a1', text: '내릴 사람 먼저 내리기' }, { id: 'a2', text: '닫히는 문 몸으로 막지 않기' }, { id: 'b1', text: '손잡이 잡기' }, { id: 'b2', text: '걷거나 뛰지 않기' },
              { id: 'c1', text: '책장 사이 뛰지 않기' }, { id: 'c2', text: '통로에 가방 두지 않기' }, { id: 'd1', text: '계단 입구 막지 않기' }, { id: 'd2', text: '쏟은 음료는 바로 알리기' },
              { id: 't1', text: '급하면 닫히는 문 잡기' }, { id: 't2', text: '책 찾을 땐 빨리 뛰기' }] } }),
            { type: 'choice', prompt: '"에티켓은 예의일 뿐 안전과 상관없다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['예의를 지키면 칭찬받는다', '통로를 막는 행동은 다른 사람이 넘어지게 할 수 있다', '공공시설에는 규칙이 많다'], answer: 1, difficulty: 0.25, explain: '불편을 주는 행동 가운데 많은 것이 사고로 이어져요.' },
            { type: 'short', prompt: '오늘 이은 수칙 하나를 골라, 그 수칙이 나를 지키는지 남을 지키는지(또는 둘 다인지) 써요.' },
          ],
        },
        worksheet: {
          title: '에티켓이 곧 안전',
          items: [
            { type: 'table', prompt: '시설마다 지킬 수칙을 한 가지씩 써요.', columns: ['시설', '수칙'], cells: [['엘리베이터', ''], ['에스컬레이터', ''], ['도서관', '']], answer: '먼저 내리기·문 막지 않기, 손잡이 잡고 걷지 않기, 뛰지 않기·통로 비우기' },
            { type: 'check', prompt: '다음 주에 내가 지킬 약속에 표시해요.', options: ['에스컬레이터에서 손잡이 잡기', '내릴 사람 먼저 보내기', '통로에 가방 두지 않기'] },
          ],
        },
      }),
      M('wrap.notice-writing', {
        title: '시설 안내문 쓰고 기준표 점검', method: '시설 안내문 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("___에서는 ___ 해요. 왜냐하면 ___")의 빈칸을 채워 쓴다.', base: '안내문을 세 문장으로 쓰고 기준 3개(구체적 행동·이유·지키는 사람)를 스스로 점검한다.', challenge: '1학년이 처음 읽는다고 생각하고 쉬운 말로 고쳐 쓴 뒤 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'계단 조심\'과 \'계단에서는 한 줄로 걸어요, 부딪히면 여럿이 넘어지니까요\' 가운데 어느 안내문이 행동을 바꿀까요?" 두 문장을 견주어 읽은 뒤 우리 학교 시설 한 곳의 안내문을 쓰게 한다. "무섭게 써야 지킨다"는 학생에게 겁주는 말보다 할 행동과 까닭이 더 오래 남는다고 말해 준다. 학생 이름이나 반 번호는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '우리 학교 시설 한 곳(계단·급식실·도서관 등)의 이용 안내문을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '시설 안내문', placeholder: '예: 급식실 입구에서는…' },
              prompt: '시설 안내문을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['해야 할 행동을 구체적으로 썼다', '그 행동을 해야 하는 이유를 썼다', '누구를 지키는지 썼다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 따라 시설 안내문을 세 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '___에서는 ___ 해요. 왜냐하면 ___ 때문이에요. 그러면 ___을 지킬 수 있어요.' } },
            { prompt: '1학년이 읽는다고 생각하고 쉬운 말로 안내문을 고쳐 쓴 뒤 기준표에 표시해요.', target: { selfCheck: ['해야 할 행동을 구체적으로 썼다', '그 행동을 해야 하는 이유를 썼다', '누구를 지키는지 썼다', '처음 읽는 1학년도 알 쉬운 말로 썼다'] } }),
            { type: 'choice', prompt: '안내문에 넣기 가장 알맞은 문장은?', options: ['계단은 위험해요!', '계단에서는 한 줄로 걸어요. 부딪히면 여럿이 넘어지기 때문이에요.', '계단을 조심하지 않으면 큰일 나요.'], answer: 1, difficulty: 0.2, explain: '할 행동과 그 까닭이 함께 있어야 읽은 사람이 행동을 바꿔요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '우리 학교 시설 안내문',
          items: [
            { type: 'short', prompt: '우리 학교 시설 한 곳의 안내문을 세 문장으로 써요(구체적 행동·이유·지키는 사람).' },
            { type: 'check', prompt: '내 안내문을 기준표로 점검해요.', options: ['해야 할 행동이 구체적이다', '이유가 들어 있다', '지키는 사람이 드러난다'] },
          ],
          easy: { note: '"___에서는 ___ 해요. 왜냐하면 ___" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 안내문을 써요.', text: '___에서는 ___ 해요. 왜냐하면 ___ 때문이에요.', answer: '(예) 계단, 한 줄로 걸어야, 부딪히면 여럿이 넘어지기' }] },
        },
      }),
    );
  }

  // ==== 7학년 · 식품 종류별 보관과 소비기한 (saf-life.m.food-storage) ====
  {
    const M = MK('food-storage', [7]);
    const PLACE = ['냉장', '냉동', '실온'];
    const SHOP = [
      { id: 'egg', text: '달걀', to: '냉장', back: '포장: 냉장 보관' }, { id: 'tofu', text: '두부', to: '냉장', back: '포장: 냉장 보관' },
      { id: 'dumpling', text: '냉동만두', to: '냉동', back: '포장: 냉동 보관' }, { id: 'bread', text: '식빵', to: '실온', back: '포장: 직사광선 피해 보관' },
      { id: 'potato', text: '감자', to: '실온', back: '서늘하고 그늘진 곳' }, { id: 'milk', text: '우유', to: '냉장', back: '포장: 냉장 보관' },
      { id: 'icecream', text: '아이스크림', to: '냉동', back: '포장: 냉동 보관' }, { id: 'ramen', text: '라면', to: '실온', back: '포장: 실온 보관' },
      { id: 'shrimp', text: '냉동 새우', to: '냉동', back: '포장: 냉동 보관' }, { id: 'yogurt', text: '요구르트', to: '냉장', back: '포장: 냉장 보관' },
    ];
    const FRIDGE = [
      { id: 'meat-top', text: '맨 윗칸의 날고기 봉지' }, { id: 'veg', text: '채소 칸의 오이' }, { id: 'milk-door', text: '문 칸의 우유' },
      { id: 'fish-fruit', text: '과일 위에 올린 생선 봉지' }, { id: 'open-dish', text: '뚜껑 없이 넣은 남은 반찬' }, { id: 'meat-low', text: '맨 아랫칸 통에 담은 날고기' },
    ];
    const MILK = { text: '학교 가방에 반나절 넣어 둔 우유가 있다. 소비기한은 하루 남았고, 포장에 \'냉장 보관\'이라고 적혀 있다.', ask: '마실까?', motif: 'house', choices: [
      { id: 'drink', text: '기한이 남았으니 마신다', result: '한 모금 마셨는데 맛이 조금 이상하다.', impact: [{ who: '나', text: '배탈이 날 수 있다', tone: -1 }], why: '소비기한은 표시된 보관 방법을 지켰을 때의 날짜예요.', end: '보관 조건을 보지 않고 마셨어요.',
        next: { text: '맛이 조금 이상하지만 아깝다는 생각이 든다.', choices: [
          { id: 'more', text: '아까우니 끝까지 마신다', result: '오후에 배가 아프기 시작한다.', impact: [{ who: '나', text: '배가 아프다', tone: -1 }] },
          { id: 'stop', text: '그만 마시고 버린 뒤 몸 상태를 살핀다', result: '더 마시지 않아 다행이다.', impact: [{ who: '나', text: '더 나빠지지 않는다', tone: 1 }] }] } },
      { id: 'check', text: '보관 방법 표시를 다시 읽는다', result: '\'냉장 보관\'인데 반나절 밖에 있었다는 것을 깨닫는다.', impact: [{ who: '나', text: '위험을 미리 안다', tone: 1 }], end: '표시를 읽고 보관 조건을 따졌어요.',
        next: { text: '친구가 "냄새 맡아 보고 괜찮으면 마셔"라고 한다.', choices: [
          { id: 'smell', text: '냄새가 괜찮아서 마신다', result: '냄새로는 상한 것을 다 알 수 없다.', impact: [{ who: '나', text: '배탈이 날 수 있다', tone: -1 }], why: '냄새가 괜찮아도 상했을 수 있어요.' },
          { id: 'throw', text: '마시지 않고 버린다', result: '아깝지만 몸을 지켰다.', impact: [{ who: '나', text: '배탈을 피한다', tone: 1 }] }] } },
      { id: 'fridge', text: '집 냉장고에 넣었다가 내일 마신다', result: '이미 오래 밖에 있던 우유는 다시 차갑게 해도 그대로다.', impact: [{ who: '나', text: '배탈이 날 수 있다', tone: -1 }], why: '밖에 오래 둔 뒤 다시 넣어도 되돌아가지 않아요.', ending: '다시 차갑게 해도 보관 조건을 어긴 것은 그대로예요.' }] };
    const MILK_R = [{ id: 'r1', text: '기한은 보관 방법을 지켰을 때의 날짜다' }, { id: 'r2', text: '냄새가 괜찮으면 안전하다', why: '냄새로는 상한 것을 다 알 수 없어요.' }, { id: 'r3', text: '기한이 남았으면 언제든 먹어도 된다', why: '보관을 잘못하면 기한 전에도 상해요.' }];
    const TEMP = [['1시간', 0], ['2시간', 1], ['3시간', 3], ['4시간', 6], ['5시간', 9]];
    const PIC = [
      { id: 'p1', text: '김밥을 다 식힌 뒤 도시락에 담는다' }, { id: 'p2', text: '도시락을 햇빛 드는 차 뒷좌석에 둔다', ok: true },
      { id: 'p3', text: '과일은 아이스박스에 넣는다' }, { id: 'p4', text: '오후 3시가 넘어서 김밥을 먹는다', ok: true },
      { id: 'p5', text: '남은 김밥을 저녁에 먹으려 가방에 넣는다', ok: true }, { id: 'p6', text: '먹기 전에 물티슈 대신 손을 씻는다' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.fridge-scene', {
        title: '냉장고 장면에서 잘못 둔 식품', method: '냉장고 사진 장면에서 잘못 둔 식품 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '잘못 둔 식품 2개(날고기·생선 봉지)만 찾게 하고 교사가 칸을 가리킨다.', base: '잘못 둔 식품 3개를 고르고 무엇이 문제인지 한 줄 말한다.', challenge: '잘못 둔 식품 4개를 고르고 옮길 자리까지 정해 말한다.' },
        intro: {
          teacher: '"이 냉장고에서 다른 음식을 상하게 할 수 있는 칸은 어디일까요?" 날고기 봉지가 맨 윗칸에서 과일 위로 새는 냉장고 그림을 보이고, 시연 단추로 잘못 둔 식품이 바구니에 담기는 모습을 보인다. "냉장고에 넣었으니 다 괜찮아요"라는 말이 나오면 "윗칸 고기 물이 아래 과일에 떨어지면 과일은 괜찮을까요?"라고 되묻는다. 오늘은 식품마다 보관 장소가 다른 까닭과 표시 읽는 법을 배운다고 밝힌다.',
          student: '냉장고 그림을 보고 잘못 둔 식품을 골라요. 무엇이 문제인지, 어디로 옮기면 좋을지 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '잘못 둔 식품', cards: FRIDGE, shuffle: false }, sequence: [{ pick: ['meat-top', 'fish-fruit', 'open-dish'] }] },
          art: { draw: 'a paper-cut open refrigerator where a raw meat package on the top shelf is dripping onto fruit below, with eggs and milk on the door shelves', banner: '잘못 둔 식품은 어디?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '가정 형편에 따라 냉장고 크기·구성이 다르다. "우리 집 냉장고"를 자세히 묻지 않고 그림 장면으로만 이야기한다.',
      }),
      M('intro.label-dilemma', {
        title: '하루 남은 우유 갈림길', method: '소비기한 하루 남은 우유 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '갈림길 1번에서 고르고 결과를 함께 읽는다.', base: '갈림길 2번까지 가 보고 \'기한보다 보관 조건\' 근거를 고른다.', challenge: '교사가 "이미 뜯은 우유였다면?"으로 개봉 여부를 바꿔 갈림길 3번째를 말로 더 따라간다.' },
        intro: {
          teacher: '"소비기한이 하루 남았다면 가방에 반나절 있던 우유를 마셔도 될까요?" 손을 들어 의견을 나눈 뒤 시연 단추로 \'표시 다시 읽기 → 버리기\' 길과 근거가 고르는 모습을 보인다. "냄새가 괜찮으면 괜찮다"는 말에는 "냄새로 세균이 보일까요?"라고 되묻는다. 소비기한은 표시된 보관 방법을 지켰을 때의 기한이라는 점을 오늘의 열쇠말로 칠판에 적는다.',
          student: '가방에 반나절 있던 우유를 마실지 골라 보고, 고른 길의 결과를 보며 무엇을 근거로 판단해야 하는지 생각해요.',
          demo: DEMO_DIL('하루 남은 우유', MILK, [['check', 'throw']], MILK_R),
          art: { draw: 'a paper-cut school bag with a small milk carton peeking out, a calendar page and a thermometer beside it', banner: '기한보다 보관 조건!', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.storage-sort', {
        title: '장 봐 온 식품 보관 장소', method: '장 봐 온 식품을 보관 장소에 넣기', tool: 'kitchen', minutes: 16,
        levels: { easy: '카드 6장을 넣고, 카드에 포장 표시(냉장·냉동·실온) 그림 단서가 처음부터 보인다.', base: '카드 10장을 냉장·냉동·실온 칸에 넣고, 개봉 뒤 냉장고로 옮길 식품을 고른다.', challenge: '개봉 뒤 옮길 식품 고르기에 헷갈리는 카드가 더 섞이고, 날것·익힌 것 칸 나누기까지 표시 단서 없이 한다.' },
        activity: {
          title: '장 봐 온 식품 보관 장소', tool: 'kitchen',
          teacher: '"장 봐 온 봉투에서 가장 먼저 꺼내 넣어야 할 것은 무엇일까요?" 카드를 놓을 때마다 포장 표시를 소리 내어 읽게 한다. "냉장고에 넣으면 무엇이든 오래 간다"는 학생에게 "감자나 라면도 냉장고에 넣어야 할까요? 포장에는 무엇이라고 적혀 있을까요?"라고 되묻는다. 케첩·잼처럼 개봉한 뒤에 자리가 바뀌는 식품은 따로 짚는다.',
          task: '장 봐 온 식품을 냉장·냉동·실온 칸에 넣고, 개봉한 뒤 자리가 바뀌는 식품을 따로 골라요.',
          levels: { easy: { live: true, instant: true, showBack: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('장 봐 온 식품을 알맞은 보관 장소에 넣으세요.', PLACE, SHOP, { groups: false }),
              SB('장 봐 온 식품 6가지를 알맞은 보관 장소에 넣으세요.', PLACE, pickCards(SHOP, ['egg', 'dumpling', 'potato', 'milk', 'icecream', 'ramen']), { groups: false })),
            IT(PB('개봉한 뒤에는 냉장고로 옮겨야 하는 식품만 골라 담으세요.', '개봉 뒤 냉장', [
              { id: 'ketchup', text: '케첩', ok: true }, { id: 'jam', text: '딸기잼', ok: true }, { id: 'tuna', text: '먹고 남은 통조림 참치', ok: true },
              { id: 'snack', text: '과자', ok: false }, { id: 'rice', text: '쌀', ok: false }]),
              null,
              PB('개봉한 뒤에는 냉장고로 옮겨야 하는 식품만 골라 담으세요(헷갈리는 카드 포함).', '개봉 뒤 냉장', [
                { id: 'ketchup', text: '케첩', ok: true }, { id: 'jam', text: '딸기잼', ok: true }, { id: 'tuna', text: '먹고 남은 통조림 참치', ok: true },
                { id: 'snack', text: '과자', ok: false }, { id: 'rice', text: '쌀', ok: false }, { id: 'ramen2', text: '뜯은 라면 봉지', ok: false }, { id: 'juice', text: '마시다 남긴 주스', ok: true }])),
            IT(SB('냉장고에서 날것과 익힌 것을 나눠 두세요.', [{ id: 'up', label: '위 칸: 익힌·바로 먹는 것' }, { id: 'down', label: '아래 칸: 날것' }], [
              { id: 'side', text: '익힌 반찬', to: 'up' }, { id: 'fruit', text: '씻은 과일', to: 'up' }, { id: 'rawmeat', text: '날고기', to: 'down' }, { id: 'rawfish', text: '날생선', to: 'down' }], { groups: false }),
              null, null, { conclude: '식품마다 알맞은 보관 장소가 있고, 날것은 다른 음식에 물이 떨어지지 않게 아래에 나눠 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '식품마다 보관 장소를 써요.', columns: ['식품', '보관 장소'], cells: [['두부', ''], ['냉동만두', ''], ['라면', ''], ['개봉한 케첩', '']], answer: '냉장, 냉동, 실온, 냉장' }],
          easy: [{ type: 'choice', prompt: '냉동실에 넣을 식품에 ○ 해요.', options: ['아이스크림', '감자'], answer: '아이스크림' }] },
      }),
      M('activity.label-reading', {
        title: '포장 표시 읽고 판단하기', method: '포장 표시를 읽고 먹을지 판단하기', tool: 'wordcards', minutes: 16,
        levels: { easy: '표시 2개만 판단하고, 칸 아래에 근거가 되는 표시 낱말을 강조해 보여 준다.', base: '표시 3개마다 판단 카드와 근거 낱말 카드를 짝짓는다.', challenge: '조건을 바꾼 표시(개봉·보관 장소가 바뀜)에서 판단을 다시 한다.' },
        activity: {
          title: '포장 표시 읽고 판단하기', tool: 'wordcards',
          teacher: '"표시에서 날짜만 보면 될까요, 날짜 말고 또 무엇을 봐야 할까요?" 표시를 한 줄씩 소리 내어 읽게 한 뒤 판단 카드를 놓게 한다. "기한이 남았으면 보관을 잘못해도 괜찮다"는 학생에게 "\'냉장 보관\'이라고 적힌 우유가 반나절 책상 위에 있었다면 그 날짜를 믿을 수 있을까요?"라고 되묻는다. 판단의 근거는 늘 표시 안의 낱말에서 찾게 한다.',
          task: '가상 포장 표시를 읽고 \'먹어도 됨·바로 먹기·먹지 않음\'을 판단한 뒤, 근거가 되는 표시 낱말을 짝지어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('표시마다 알맞은 판단 카드를 이어 보세요.', [['요구르트 · 소비기한 내일 · 냉장 보관 · 냉장고에 있었음', '먹어도 됨'], ['샌드위치 · 소비기한 오늘 · 냉장 보관 · 오늘 아침 냉장 칸에서 삼', '바로 먹기'], ['우유 · 소비기한 사흘 남음 · 냉장 보관 · 책상 위에 반나절', '먹지 않음']], []),
              { prompt: '표시 두 개에 알맞은 판단 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '요구르트 · 소비기한 내일 · 냉장 보관 · 냉장고에 있었음', sub: '근거: 냉장 보관을 지킴' }, { id: 's3', label: '우유 · 소비기한 사흘 남음 · 냉장 보관 · 책상 위에 반나절', sub: '근거: 냉장 보관을 어김' }], cards: [{ id: 'k1', text: '먹어도 됨' }, { id: 'k3', text: '먹지 않음' }] }, target: { match: { s1: 'k1', s3: 'k3' } } }),
            IT(MB('판단마다 근거가 된 표시 낱말을 이어 보세요.', [['먹어도 됨(요구르트)', '냉장 보관을 지킴'], ['바로 먹기(샌드위치)', '소비기한 오늘'], ['먹지 않음(우유)', '보관 조건을 어김']], ['브랜드가 유명함']),
              MB('판단마다 근거가 된 표시 낱말을 이어 보세요(두 개).', [['먹어도 됨(요구르트)', '냉장 보관을 지킴'], ['먹지 않음(우유)', '보관 조건을 어김']], [])),
            IT(MB('조건이 바뀐 표시를 읽고 판단 카드를 다시 이어 보세요.', [['요구르트 · 소비기한 내일 · 뚜껑을 연 채 밤새 책상 위', '먹지 않음'], ['통조림 · 소비기한 넉넉 · 뜯지 않음 · 서늘한 찬장', '먹어도 됨'], ['샌드위치 · 소비기한 오늘 · 방금 냉장 칸에서 꺼냄', '바로 먹기']], []),
              null,
              MB('조건이 바뀐 표시를 읽고 판단 카드를 다시 이어 보세요(함정 카드가 섞여 있어요).', [['요구르트 · 소비기한 내일 · 뚜껑을 연 채 밤새 책상 위', '먹지 않음'], ['통조림 · 소비기한 넉넉 · 뜯지 않음 · 서늘한 찬장', '먹어도 됨'], ['샌드위치 · 소비기한 오늘 · 방금 냉장 칸에서 꺼냄', '바로 먹기']], ['냄새 맡고 결정', '기한만 보고 결정']),
              { conclude: '날짜만이 아니라 보관 방법과 지금까지 어떻게 뒀는지를 함께 읽어야 먹을지 판단할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '소비기한이 남은 우유가 반나절 책상 위에 있었어요. 알맞은 판단은?', options: ['기한이 남았으니 마신다', '보관 조건을 어겼으니 마시지 않는다', '냄새를 맡고 정한다'], answer: '보관 조건을 어겼으니 마시지 않는다' }] },
      }),
      M('activity.temperature-chart', {
        title: '실온에 둔 시간 자료 읽기', method: '상온에 둔 시간과 상태 자료 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '자료 3구간(1~3시간)만 읽고, 막대 끝에 값이 보인다.', base: '5구간을 읽고 오래 둘수록 위험이 커지는 경향을 설명한다.', challenge: '마지막 문항에서 냄새로 판단하면 안 되는 까닭을 가상 자료로 근거 댄다.' },
        activity: {
          title: '실온에 둔 시간 자료 읽기', tool: 'chart',
          teacher: '"도시락을 실온에 오래 둘수록 상한 도시락 수는 어떻게 변할까요?" 꺾은선이 오르는 모양을 손으로 따라 그리게 한 뒤 값을 읽는다. "냄새가 괜찮으면 먹어도 된다"는 학생에게 마지막 자료에서 상했는데도 냄새가 괜찮았던 도시락 수를 찾아 보게 한다. 이 자료는 수업용으로 지어낸 가상 실험 기록이고 실제 기준 시간이 아니라는 점을 꼭 밝힌다.',
          task: '가상 실험 기록 그래프를 읽고, 실온에 둔 시간이 길수록 어떻게 되는지 설명해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '실온에 4시간 둔 도시락 가운데 상한 것은 몇 개인지 읽어 쓰세요.', toolOptions: { type: 'line', mode: 'read', title: '실온에 둔 시간과 상한 도시락 수(가상 실험, 10개씩)', unit: '개', xLabel: '실온에 둔 시간', yLabel: '상한 도시락', data: TEMP, question: '4시간일 때 상한 도시락은?' }, target: { value: 6 } },
              { prompt: '실온에 3시간 둔 도시락 가운데 상한 것은 몇 개인지 읽어 쓰세요.', toolOptions: { data: TEMP.slice(0, 3), question: '3시간일 때 상한 도시락은?' }, target: { value: 3 } }),
            IT({ prompt: '그래프의 경향으로 알맞은 것을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '실온에 둔 시간과 상한 도시락 수(가상 실험, 10개씩)', unit: '개', xLabel: '실온에 둔 시간', yLabel: '상한 도시락', data: TEMP, question: '실온에 둔 시간이 길어질수록?', choices: ['상한 도시락이 늘어난다', '상한 도시락이 줄어든다', '시간과 상관없다'] }, target: { pick: 0 } },
              { toolOptions: { data: TEMP.slice(0, 3) } }),
            IT({ prompt: '상한 도시락이 처음으로 절반(5개)을 넘는 때를 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '실온에 둔 시간과 상한 도시락 수(가상 실험, 10개씩)', unit: '개', xLabel: '실온에 둔 시간', yLabel: '상한 도시락', data: TEMP, question: '처음 5개를 넘는 때는?', choices: ['3시간', '4시간', '5시간'] }, target: { pick: 1 } },
              { prompt: '상한 도시락이 처음으로 2개를 넘는 때를 고르세요.', toolOptions: { data: TEMP.slice(0, 3), question: '처음 2개를 넘는 때는?', choices: ['1시간', '2시간', '3시간'] }, target: { pick: 2 } },
              { prompt: '5시간 둔 상한 도시락 9개 가운데 냄새가 괜찮았던 것은 몇 개인지 읽어 쓰세요.', toolOptions: { type: 'bar', title: '5시간 둔 상한 도시락 9개의 냄새(가상 실험)', xLabel: '냄새', yLabel: '도시락 수', data: [['냄새가 이상함', 4], ['냄새가 괜찮음', 5]], question: '냄새가 괜찮았던 상한 도시락은?', choices: null }, target: { value: 5 } },
              { conclude: '실온에 오래 둘수록 상할 위험이 커지고, 상해도 냄새가 괜찮을 수 있으니 냄새로 판단하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 보고 "도시락은 싸고 나서 되도록 빨리 먹어야 한다"는 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.picnic-story', {
        title: '소풍 도시락 사례 분석', method: '소풍 도시락 사례 분석', tool: 'story', minutes: 16,
        levels: { easy: '장면 3개에서 보관을 잘못한 장면을 고른다(바로 맞는지 알려 줌).', base: '장면 5개를 분석해 잘못한 장면을 고르고 고칠 방법을 짝짓는다.', challenge: '장면 6개를 분석하고, 고친 계획을 함정 카드를 빼고 순서대로 다시 세운다.' },
        activity: {
          title: '소풍 도시락 사례 분석', tool: 'story',
          teacher: '"서윤이네 가족은 어느 장면에서 도시락을 위험하게 만들었을까요?" 장면 카드를 한 장씩 소리 내어 읽고, 고를 때마다 \'시간\'과 \'온도\' 가운데 무엇이 문제인지 말하게 한다. "김밥은 원래 실온 음식이라 괜찮다"는 학생에게 "햇빛 드는 차 안에서 몇 시간 지난 김밥도 같을까요?"라고 되묻는다. 서윤이네는 가상의 가족이며, 학생 집 이야기는 묻지 않는다.',
          task: '가상 가족의 소풍 도시락 이야기를 장면별로 읽고, 보관을 잘못한 장면과 고칠 방법을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(PB('보관을 잘못한 장면만 골라 담으세요.', '잘못한 장면', PIC.slice(0, 5)),
              PB('장면 세 개 가운데 보관을 잘못한 장면을 골라 담으세요.', '잘못한 장면', PIC.slice(0, 3)),
              PB('장면 여섯 개 가운데 보관을 잘못한 장면만 골라 담으세요.', '잘못한 장면', PIC)),
            IT(MB('잘못한 장면마다 고칠 방법을 이어 보세요.', [['차 뒷좌석에 둔 도시락', '아이스박스나 그늘에 둔다'], ['오후 늦게 먹은 김밥', '싸고 나서 되도록 빨리 먹는다'], ['가방에 넣은 남은 김밥', '남은 것은 버린다']], ['냄새를 맡아 보고 먹는다']),
              MB('잘못한 장면 두 개에 고칠 방법을 이어 보세요.', [['차 뒷좌석에 둔 도시락', '아이스박스나 그늘에 둔다'], ['가방에 넣은 남은 김밥', '남은 것은 버린다']], [])),
            IT(OB('고친 소풍 도시락 계획을 차례대로 놓으세요.', [{ id: 'cool', text: '김밥을 식혀 담기' }, { id: 'box', text: '아이스박스에 넣기' }, { id: 'hand', text: '점심때 손 씻고 먹기' }, { id: 'left', text: '남은 음식 버리기' }]),
              OB('고친 소풍 도시락 계획 세 단계를 차례대로 놓으세요.', [{ id: 'cool', text: '김밥을 식혀 담기' }, { id: 'box', text: '아이스박스에 넣기' }, { id: 'hand', text: '점심때 손 씻고 먹기' }]),
              OB('함정 카드를 빼고 고친 계획을 차례대로 놓으세요.', [{ id: 'cool', text: '김밥을 식혀 담기' }, { id: 'box', text: '아이스박스에 넣기' }, { id: 'hand', text: '점심때 손 씻고 먹기' }, { id: 'left', text: '남은 음식 버리기' }], {}, [{ id: 'sun', text: '햇빛 드는 자리에 두기' }]),
              { conclude: '들고 다니는 음식은 차갑게, 되도록 빨리 먹고, 남은 것은 버려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '서윤이네가 다음 소풍에서 도시락을 안전하게 둘 방법을 한 가지 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.storage-timeline', {
        title: '식품이 식탁에 오기까지', method: '식품 하나가 식탁에 오기까지 보관 차례', tool: 'timeline', minutes: 7,
        levels: { easy: '단계 카드 3장(장보기·냉장·조리)을 차례로 놓는다.', base: '단계 카드 5장을 차례로 놓는다.', challenge: '수칙이 붙은 카드 5장에 함정 카드(실온에서 녹이기)가 섞여, 걸러 내며 놓는다.' },
        wrap: {
          teacher: '"마트에서 산 생선이 우리 집 식탁에 오기까지 어느 틈에서 가장 위험해질까요?" 학생이 차례를 놓으면 단계 사이 \'틈\'(운반 시간·녹이는 방법)을 함께 짚는다. "녹일 때는 그냥 식탁에 두면 된다"는 말에는 오늘 본 실온 자료를 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['마트', '식탁'], slots: 5, cards: [{ id: 't1', text: '장보기 끝에 생선 담기' }, { id: 't2', text: '곧장 집으로 옮기기' }, { id: 't3', text: '바로 냉장·냉동 넣기' }, { id: 't4', text: '냉장고 안에서 녹이기' }, { id: 't5', text: '충분히 익혀 조리하기' }] },
              prompt: '생선이 식탁에 오기까지 단계를 차례대로 놓아요.', target: { order: ['t1', 't2', 't3', 't4', 't5'] }, difficulty: 0.25 },
            { prompt: '생선이 식탁에 오기까지 세 단계를 차례대로 놓아요.', toolOptions: { slots: 3, cards: [{ id: 't1', text: '장보기 끝에 생선 담기' }, { id: 't3', text: '바로 냉장·냉동 넣기' }, { id: 't5', text: '충분히 익혀 조리하기' }] }, target: { order: ['t1', 't3', 't5'] } },
            { prompt: '함정 카드를 빼고 생선이 식탁에 오기까지 단계를 차례대로 놓아요.', toolOptions: { cards: [{ id: 't1', text: '장보기 끝에 생선 담기' }, { id: 't2', text: '곧장 집으로 옮기기' }, { id: 't3', text: '바로 냉장·냉동 넣기' }, { id: 't4', text: '냉장고 안에서 녹이기' }, { id: 't5', text: '충분히 익혀 조리하기' }, { id: 'x1', text: '식탁에 꺼내 두고 녹이기' }] } }),
            { type: 'choice', prompt: '소비기한이 남은 냉장 식품을 여름날 차 안에 오래 두었어요. 알맞은 판단은?', options: ['기한이 남았으니 먹는다', '보관 조건을 어겼으니 먹지 않는다', '다시 냉장고에 넣으면 된다'], answer: 1, difficulty: 0.2, explain: '소비기한은 표시된 보관 방법을 지켰을 때만 믿을 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '식품 보관 차례',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '소비기한은 표시된 ___ 방법을 지켰을 때의 기한이에요.', answer: '보관' },
            { type: 'short', prompt: '생선이 식탁에 오기까지 가장 위험한 틈 하나와 막는 방법을 써요.' },
          ],
        },
      }),
      M('wrap.fridge-check', {
        title: '우리 집 냉장고 점검표', method: '우리 집 냉장고 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 4개 가운데 알맞은 것을 표시한다.', base: '항목 6개 가운데 함정 2개를 빼고 알맞은 것만 표시한다.', challenge: '알맞은 것을 표시한 뒤 우리 집에 필요한 항목 하나를 직접 더해 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것으로 집 냉장고를 점검한다면 어떤 항목을 넣을까요?" 점검표에서 알맞은 항목만 고르게 하고, 함정 항목(꽉 채우기·오래된 반찬 두기)을 고른 학생에게 "냉장고에 넣으면 무엇이든 오래 갈까요?"라고 되묻는다. 집 냉장고를 사진으로 찍어 오게 하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: CL('', '우리 집 냉장고 점검', [
              { id: 'raw', text: '날음식은 아래 칸에 둔다', ok: true }, { id: 'date', text: '개봉한 날짜를 적어 둔다', ok: true }, { id: 'door', text: '문을 오래 열어 두지 않는다', ok: true },
              { id: 'full', text: '빈틈없이 꽉 채워 둔다' }, { id: 'old', text: '오래된 반찬도 냉장고면 그냥 둔다' }, { id: 'cover', text: '남은 반찬은 뚜껑을 덮는다', ok: true }]).toolOptions,
              prompt: '냉장고 점검표에서 알맞은 항목만 표시해요.', target: { checklist: ['raw', 'date', 'door', 'cover'] }, difficulty: 0.2 },
            { prompt: '냉장고 점검표 항목 4개 가운데 알맞은 것만 표시해요.', toolOptions: { items: [{ id: 'raw', text: '날음식은 아래 칸에 둔다' }, { id: 'date', text: '개봉한 날짜를 적어 둔다' }, { id: 'old', text: '오래된 반찬도 냉장고면 그냥 둔다' }, { id: 'cover', text: '남은 반찬은 뚜껑을 덮는다' }] }, target: { checklist: ['raw', 'date', 'cover'] } }),
            { type: 'choice', prompt: '"냉장고에 넣으면 무엇이든 오래 간다"는 생각이 틀린 까닭은?', options: ['냉장고는 전기를 많이 쓴다', '냉장고 안에서도 식품은 상하고 보관 기한이 있다', '냉장고는 냄새가 난다'], answer: 1, difficulty: 0.2, explain: '차갑게 두면 느리게 상할 뿐 멈추지는 않아요.' },
            { type: 'short', prompt: '우리 집 냉장고 점검표에 더하고 싶은 항목 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 집 냉장고 점검표',
          items: [
            { type: 'check', prompt: '집에 가서 가족과 함께 점검해요.', options: ['날음식은 아래 칸에 있다', '개봉한 날짜가 적혀 있다', '남은 반찬에 뚜껑이 있다', '오래된 반찬을 정리했다'] },
            { type: 'short', prompt: '점검하고 바꾼 것 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 과학실·실습실 기본 안전 규칙 (saf-life.m.lab-rules) ====
  {
    const M = MK('lab-rules', [7]);
    const SMELL = { text: '실험 중에 짝 지호가 시험관을 내밀며 "무슨 냄새인지 맡아 봐"라고 한다. 선생님은 다른 모둠을 돌보고 계신다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'nose', text: '시험관에 코를 대고 깊게 맡는다', result: '코가 따갑고 머리가 핑 돈다.', impact: [{ who: '나', text: '코와 목이 따갑다', tone: -1 }], why: '시약은 코를 대고 직접 맡지 않아요.', end: '코를 대고 맡아 위험했어요.',
        next: { text: '눈물이 나고 기침이 멈추지 않는다.', choices: [
          { id: 'hide', text: '혼날까 봐 참고 계속한다', result: '증상이 더 심해진다.', impact: [{ who: '나', text: '더 아프다', tone: -1 }] },
          { id: 'report', text: '바로 선생님께 알리고 창가로 간다', result: '선생님이 창을 열고 상태를 살핀다.', impact: [{ who: '나', text: '빨리 도움을 받는다', tone: 1 }] }] } },
      { id: 'fan', text: '손으로 부채질해 살짝 맡는다', result: '냄새가 아주 약하게 난다.', impact: [{ who: '나', text: '덜 위험하지만 무슨 시약인지 모른다', tone: 0 }], end: '부채질로 맡았지만, 먼저 물어보는 것이 더 안전했어요.',
        next: { text: '냄새가 잘 안 나자 지호가 "더 가까이 대 봐"라고 한다.', choices: [
          { id: 'closer', text: '코를 시험관 가까이 댄다', result: '갑자기 강한 냄새에 기침이 난다.', impact: [{ who: '나', text: '목이 따갑다', tone: -1 }], why: '냄새가 약하다고 가까이 대면 안 돼요.' },
          { id: 'stopask', text: '멈추고 선생님께 확인을 부탁한다', result: '선생님이 무슨 시약인지 알려 주신다.', impact: [{ who: '모둠', text: '바르게 실험한다', tone: 1 }], end: '멈추고 물어서 안전했어요.',
            next: { text: '선생님이 "냄새 확인이 필요하면 꼭 손으로 부채질만 해"라고 하신다.', choices: [
              { id: 'rule', text: '모둠 규칙으로 정해 모두에게 알린다', result: '모둠 친구 모두 같은 방법을 쓴다.', impact: [{ who: '모둠', text: '모두 안전하다', tone: 1 }] },
              { id: 'only', text: '나만 알고 넘어간다', result: '다음 시간에 다른 친구가 또 코를 댄다.', impact: [{ who: '다른 친구', text: '같은 위험에 놓인다', tone: -1 }], why: '알게 된 규칙은 모둠과 나눠야 모두를 지켜요.' }] } }] } },
      { id: 'ask', text: '맡기 전에 선생님께 먼저 묻는다', result: '선생님이 "부채질로만 맡아"라고 알려 주신다.', impact: [{ who: '나', text: '안전한 방법을 안다', tone: 1 }], end: '먼저 물어서 안전한 방법을 알았어요.',
        next: { text: '선생님 말씀대로 하려는데 지호가 "그냥 코 대는 게 빨라"라고 한다.', choices: [
          { id: 'fanok', text: '알려 주신 대로 부채질로 살짝 맡는다', result: '냄새를 안전하게 확인한다.', impact: [{ who: '나', text: '다치지 않는다', tone: 1 }], end: '배운 대로 맡아 안전했어요.',
            next: { text: '실험이 끝나고 지호가 다음에도 코로 맡겠다고 한다.', choices: [
              { id: 'rule2', text: '"부채질만 하자"를 모둠 규칙으로 제안한다', result: '모둠이 규칙을 정한다.', impact: [{ who: '지호', text: '안전한 방법을 익힌다', tone: 1 }] },
              { id: 'let', text: '지호 마음대로 하게 둔다', result: '지호가 다음 실험에서 기침을 한다.', impact: [{ who: '지호', text: '다칠 수 있다', tone: -1 }], why: '친구에게 안전한 방법을 알려 주는 것도 실험 규칙이에요.' }] } },
          { id: 'nose3', text: '지호 말대로 가까이 대고 맡는다', result: '코가 따끔하다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], why: '배운 방법을 지켜요.' }] } }] };
    const SMELL_R = [{ id: 'r1', text: '시약은 직접 맡거나 맛보지 않는다' }, { id: 'r2', text: '모르는 것은 선생님께 먼저 묻는다' },
      { id: 'r3', text: '짧은 실험이면 대충 해도 된다', why: '짧은 실험에서도 시약은 똑같이 위험해요.' }, { id: 'r4', text: '친구가 괜찮다면 괜찮다', why: '친구도 무슨 시약인지 모를 수 있어요.' }];
    const TASTE = { text: '실험에 쓰고 남은 설탕물이 비커에 있다. 친구가 "설탕이니까 맛봐도 돼"라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'taste', text: '손가락으로 찍어 맛본다', result: '비커가 다른 실험에도 쓰였다는 것을 나중에 안다.', impact: [{ who: '나', text: '무엇이 묻었는지 모른다', tone: -1 }], why: '실험실 기구와 시약은 맛보지 않아요.', end: '실험실에서 맛을 봐서 위험했어요.',
        next: { text: '친구들도 따라 맛보려 한다.', choices: [
          { id: 'join', text: '"괜찮아"라며 권한다', result: '여럿이 같은 위험에 놓인다.', impact: [{ who: '친구들', text: '위험해진다', tone: -1 }] },
          { id: 'warn', text: '"맛보면 안 돼"라고 말리고 손을 씻는다', result: '친구들이 멈춘다.', impact: [{ who: '친구들', text: '위험을 피한다', tone: 1 }] }] } },
      { id: 'refuse', text: '"실험실에서는 맛보지 않아"라고 거절한다', result: '친구가 머쓱해한다.', impact: [{ who: '나', text: '다치지 않는다', tone: 1 }], end: '거절해서 안전했어요.',
        next: { text: '친구가 비커를 들고 개수대에 그냥 버리려 한다.', choices: [
          { id: 'dump', text: '같이 아무 데나 버린다', result: '버리는 곳이 정해진 용액이었다.', impact: [{ who: '실험실', text: '정리가 엉킨다', tone: -1 }], why: '남은 용액은 선생님이 정한 방법으로 처리해요.' },
          { id: 'askdump', text: '버리는 방법을 선생님께 묻는다', result: '정해진 통에 모아 버린다.', impact: [{ who: '실험실', text: '안전하게 정리된다', tone: 1 }], end: '정해진 방법으로 치웠어요.',
            next: { text: '다 치운 뒤 손에 설탕물이 묻어 있다.', choices: [
              { id: 'wash', text: '흐르는 물에 손을 씻고 나간다', result: '손이 깨끗해진다.', impact: [{ who: '나', text: '깨끗하다', tone: 1 }] },
              { id: 'lick', text: '손을 핥아 닦는다', result: '실험실에서 입에 넣은 셈이다.', impact: [{ who: '나', text: '위험하다', tone: -1 }], why: '실험 뒤에는 손을 씻어요.' }] } }] } },
      { id: 'later', text: '나중에 집에 가져가 맛보려 한다', result: '실험실 물질을 밖으로 가져가게 된다.', impact: [{ who: '나', text: '무엇인지 모른다', tone: -1 }], why: '실험실 물질은 밖으로 가져가지 않아요.', ending: '실험실 물질은 실험실에 두어요.' }] };
    const TASTE_R = [{ id: 'r1', text: '실험실 기구와 시약은 맛보지 않는다' }, { id: 'r2', text: '남은 것은 정해진 방법으로 처리한다' },
      { id: 'r3', text: '설탕처럼 익숙한 것은 괜찮다', why: '기구에 다른 물질이 묻어 있을 수 있어요.' }, { id: 'r4', text: '조금은 괜찮다', why: '양과 상관없이 맛보지 않아요.' }];
    const LABEL = { text: '선반 구석에 이름표가 떨어진 투명한 액체 병이 있다. 물처럼 보인다. 마침 실험에 물이 필요하다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'use', text: '물 같으니 그냥 쓴다', result: '넣자마자 거품이 일어난다.', impact: [{ who: '모둠', text: '실험이 위험해진다', tone: -1 }], why: '물처럼 보이는 액체도 위험할 수 있어요.', end: '이름표 없는 병을 써서 위험했어요.',
        next: { text: '거품이 넘치기 시작한다.', choices: [
          { id: 'wipe', text: '휴지로 얼른 닦아 숨긴다', result: '손에 묻어 따끔하다.', impact: [{ who: '나', text: '손을 다칠 수 있다', tone: -1 }] },
          { id: 'tell2', text: '물러서서 바로 선생님께 알린다', result: '선생님이 정리하신다.', impact: [{ who: '모둠', text: '더 다치지 않는다', tone: 1 }] }] } },
      { id: 'sniff', text: '뚜껑을 열고 냄새로 확인한다', result: '냄새로는 무엇인지 알 수 없다.', impact: [{ who: '나', text: '코가 따가울 수 있다', tone: -1 }], why: '냄새로 시약을 확인하지 않아요.', ending: '냄새로는 알 수 없었어요.' },
      { id: 'tell', text: '쓰지 않고 선생님께 병을 알린다', result: '선생님이 병을 따로 치우신다.', impact: [{ who: '모둠', text: '안전하게 실험한다', tone: 1 }], end: '이름표 없는 병을 알려 안전했어요.',
        next: { text: '선생님이 정수기 물을 쓰라고 하신다. 친구가 "그 병 그냥 버리자"고 한다.', choices: [
          { id: 'throwbottle', text: '몰래 개수대에 쏟아 버린다', result: '무엇인지 모르는 액체가 하수구로 간다.', impact: [{ who: '실험실', text: '위험이 남는다', tone: -1 }], why: '모르는 액체는 선생님이 처리해요.' },
          { id: 'leave', text: '병은 선생님께 맡기고 정수기 물을 쓴다', result: '실험을 안전하게 이어 간다.', impact: [{ who: '모둠', text: '안전하다', tone: 1 }], end: '맡기고 안전한 물을 썼어요.',
            next: { text: '실험이 끝났다. 다음 반도 이 선반을 쓴다.', choices: [
              { id: 'note', text: '\'이름표 없는 병 주의\'를 모둠 규칙에 적는다', result: '다음 반도 조심한다.', impact: [{ who: '다음 반', text: '같은 위험을 피한다', tone: 1 }] },
              { id: 'forget', text: '그냥 잊는다', result: '다음 반이 같은 일을 겪을 수 있다.', impact: [{ who: '다음 반', text: '위험할 수 있다', tone: -1 }], why: '알게 된 위험은 기록해 나눠요.' }] } }] } }] };
    const LABEL_R = [{ id: 'r1', text: '물처럼 보여도 이름표 없는 액체는 쓰지 않는다' }, { id: 'r2', text: '모르는 것은 선생님께 먼저 묻는다' },
      { id: 'r3', text: '냄새를 맡아 보면 알 수 있다', why: '냄새로 시약을 확인하지 않아요.' }, { id: 'r4', text: '급하면 아무 병이나 써도 된다', why: '급할수록 확인해요.' }];
    const RULE = { reasons: [{ id: 'r5', text: '알게 된 위험을 모둠 규칙으로 나눈다' }, { id: 'r6', text: '다음에 쓸 사람의 안전까지 생각한다' }], ok: ['r5', 'r6'] };
    const T1 = ['쓰기 전 점검하기', '바르게 사용하기', '다 쓰면 전원 끄기', '식은 뒤 제자리에 두기', '마지막으로 작업대 정리'];
    const T2 = ['가스 밸브와 불 점검하기', '조리 기구 쓰기', '불 끄고 밸브 잠그기', '식힌 뒤 기구 닦기', '제자리에 두고 손 씻기'];
    const TOOLSAFE = ['보호안경을 썼다', '긴 머리를 묶었다', '전선이 꼬이지 않았다', '손과 작업대에 물기가 없다'];
    const COOKSAFE = ['앞치마를 둘렀다', '손을 씻었다', '행주가 불에서 멀다', '바닥에 물기가 없다'];
    const shuffle5 = (a) => [a[2], a[0], a[4], a[1], a[3]];
    const LINES = [
      { id: 'g1', text: '"보호안경 모두 썼지?"', to: '안전 지킴이' }, { id: 'g2', text: '"불 켜기 전에 주변 치우자"', to: '안전 지킴이' },
      { id: 'w1', text: '"가열 시작 시각 적을게"', to: '기록 담당' }, { id: 'w2', text: '"이상한 점은 바로 적을게"', to: '기록 담당' },
      { id: 't1', text: '"시약병 뚜껑 닫았어"', to: '도구 담당' }, { id: 't2', text: '"비커 제자리에 둘게"', to: '도구 담당' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.lab-body', {
        title: '보호구가 지키는 몸 부위', method: '몸에서 보호구가 지키는 곳 고르기', tool: 'body', minutes: 6,
        levels: { easy: '눈·손목 2곳만 고르고 교사가 보호안경·장갑을 함께 보여 준다.', base: '눈·손목·팔꿈치·발목 4곳을 고르고 곳마다 지키는 보호구를 말한다.', challenge: '고른 부위마다 다치는 원인을 두 가지씩(약품·열·유리 조각) 말한다.' },
        intro: {
          teacher: '"실험하다 약품이 튀거나 유리가 깨지면 몸의 어디가 가장 먼저 다칠까요?" 종이 몸을 띄우고 시연 단추로 눈·손목·팔꿈치·발목이 골라지는 모습을 보인 뒤, 부위마다 보호안경·장갑·실험복·막힌 신발을 짝지어 말하게 한다. "짧은 실험은 보호구 없이 해도 된다"는 말이 나오면 "튀는 데 걸리는 시간은 실험 시간과 상관이 있을까요?"라고 되묻는다.',
          student: '종이 몸에서 실험 중 약품·열·유리 조각에 다치기 쉬운 곳을 골라 보고, 그곳을 지키는 보호구를 짝에게 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '손목', '팔꿈치', '허리', '발목'], names: true }, sequence: [{ parts: ['눈', '손목', '팔꿈치', '발목'] }] },
          art: { draw: 'a paper-cut science lab with a student wearing safety goggles, a lab coat and gloves beside a beaker on a stand', banner: '보호구는 어디를 지킬까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.lab-story', {
        title: '실습 끝난 가사실 장면', method: '실험이 끝난 뒤 장면 사례 읽기', tool: 'story', minutes: 6,
        levels: { easy: '장면 2개(불·칼)만 보고 남은 위험을 고른다.', base: '장면 4개에서 남은 위험을 고른다.', challenge: '위험마다 누가 무엇을 확인해야 했는지 모둠 역할(불·도구·바닥)로 나눠 말한다.' },
        intro: {
          teacher: '"실습이 끝나고 다 같이 우르르 나간 가사실에 무엇이 남았을까요?" 가상 가사실 장면 카드를 넘겨 보이고, 시연 단추로 남은 위험(약한 불·칼·바닥 물기)이 바구니에 담기는 모습을 보인다. "정리는 수업 끝나고 아무 때나 하면 된다"는 말에는 "약한 불이 켜진 채 쉬는 시간 10분이 지나면 어떻게 될까요?"라고 되묻는다.',
          student: '실습이 끝난 가사실 장면을 보고 남아 있는 위험을 골라요. 누가 무엇을 확인했어야 했는지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '남은 위험', title: '실습 끝난 가사실', cards: [
            { id: 'fire', text: '가스레인지 불이 약하게 켜져 있다', motif: 'sun' }, { id: 'knife', text: '도마 위에 칼이 그대로 있다', motif: 'leaf' },
            { id: 'apron', text: '앞치마가 의자에 걸려 있다', motif: 'house' }, { id: 'water', text: '개수대 앞 바닥에 물이 흥건하다', motif: 'cloud' }], shuffle: false }, sequence: [{ pick: ['fire', 'knife', 'water'] }] },
          art: { draw: 'a paper-cut home economics classroom after class with a small gas flame still on, a knife on a cutting board and a puddle near the sink, students leaving through the door', banner: '실습이 끝난 뒤 남은 위험', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.ppe-sort', {
        title: '실험별 보호구와 까닭', method: '실험별 보호구와 까닭 짝짓기', tool: 'story', minutes: 16,
        levels: { easy: '실험 2개에 꼭 필요한 보호구를 짝짓는다(바로 맞는지 알려 줌).', base: '실험 3개에 보호구를 짝짓고, 빠뜨리면 생길 일을 고른다.', challenge: '빠뜨리면 생길 일에 함정이 더 섞이고, 보호구 하나를 뺀 경우의 결과를 활동지에 직접 쓴다.' },
        activity: {
          title: '실험별 보호구와 까닭', tool: 'story',
          teacher: '"가열 실험과 시약 섞기 실험에서 꼭 챙길 것은 같을까요, 다를까요?" 카드를 놓을 때마다 \'이것을 빠뜨리면 무슨 일이 생길까?\'를 한 사람씩 말하게 한다. "보호안경은 불편하니 잠깐은 벗어도 된다"는 학생에게 "약품이 튀는 순간을 미리 알 수 있을까요?"라고 되묻는다.',
          task: '실험 카드마다 꼭 필요한 보호구를 짝짓고, 빠뜨리면 생길 일을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('실험마다 가장 먼저 챙길 차림을 이어 보세요.', [['알코올램프로 가열하기', '긴 머리 묶고 보호안경 쓰기'], ['시약 두 가지 섞기', '보호안경과 장갑 끼기'], ['유리 기구 씻기', '고무장갑 끼고 천천히 씻기']], ['슬리퍼 신기']),
              MB('실험 두 개에 가장 먼저 챙길 차림을 이어 보세요.', [['알코올램프로 가열하기', '긴 머리 묶고 보호안경 쓰기'], ['시약 두 가지 섞기', '보호안경과 장갑 끼기']], [])),
            IT(MB('보호구를 빠뜨리면 생길 일을 이어 보세요.', [['보호안경을 안 씀', '튄 약품이 눈에 들어간다'], ['긴 머리를 안 묶음', '머리카락이 불꽃에 닿는다'], ['장갑을 안 낌', '약품이 손에 닿는다'], ['실험복을 안 입음', '옷에 약품이 스며든다']], []),
              MB('보호구 두 가지를 빠뜨리면 생길 일을 이어 보세요.', [['보호안경을 안 씀', '튄 약품이 눈에 들어간다'], ['긴 머리를 안 묶음', '머리카락이 불꽃에 닿는다']], []),
              MB('보호구를 빠뜨리면 생길 일을 이어 보세요(함정 카드 포함).', [['보호안경을 안 씀', '튄 약품이 눈에 들어간다'], ['긴 머리를 안 묶음', '머리카락이 불꽃에 닿는다'], ['장갑을 안 낌', '약품이 손에 닿는다'], ['실험복을 안 입음', '옷에 약품이 스며든다']], ['아무 일도 없다', '실험이 빨리 끝난다'])),
            IT(PB('가열 실험을 시작하기 전 알맞은 차림만 골라 담으세요.', '가열 실험 차림', [
              { id: 'goggle', text: '보호안경 쓰기', ok: true }, { id: 'coat', text: '실험복 입기', ok: true }, { id: 'hair', text: '긴 머리 묶기', ok: true },
              { id: 'slipper', text: '슬리퍼 신기' }, { id: 'sleeve', text: '헐렁한 소매 그대로 두기' }]),
              null, null, { conclude: '보호구는 사고가 나는 순간을 미리 알 수 없어서 처음부터 갖추는 것이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보호구 하나를 빼고 실험한다면 어떤 일이 생길지, 그 보호구와 결과를 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '가열 실험 전에 할 일에 ○ 해요.', options: ['긴 머리 묶기', '슬리퍼 신기'], answer: '긴 머리 묶기' }] },
      }),
      M('activity.reagent-dilemma', {
        title: '냄새 맡아 보라는 친구', method: '냄새를 확인하라는 친구 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번까지 가 보고 근거 카드를 고른다.', challenge: '결과를 본 뒤 갈림길 3번에서 모둠 규칙 한 줄을 제안하는 길을 고르고, 다음 사람의 안전까지 생각한 근거를 고른다.' },
        activity: {
          title: '냄새 맡아 보라는 친구', tool: 'dilemma',
          teacher: '"친구가 \'맡아 봐\' 하고 내밀면 거절하기 어렵지 않나요? 그럴 때 쓸 수 있는 말은 무엇일까요?" 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "물처럼 보이면 위험하지 않다"는 학생에게 이름표 없는 병 장면의 결과를 다시 보게 한다. 시약 이름이나 위험한 반응을 자세히 설명하지 않고, 확인 방법(묻기·부채질·쓰지 않기)에만 집중한다.',
          task: '실험실 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 냄새를 맡아 보라고 해요. 한 번 골라 결과를 보세요.', base: '친구가 냄새를 맡아 보라고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 냄새를 맡아 보라고 해요. 세 번 골라 모둠 규칙까지 정하고 근거를 고르세요.' },
              '냄새를 맡아 보라는 친구', SMELL, [['ask', 'fanok', 'rule2'], ['fan', 'stopask', 'rule']], SMELL_R, ['r1', 'r2'], RULE),
            DIL({ easy: '실험에 쓴 설탕물을 맛보자고 해요. 한 번 골라 결과를 보세요.', base: '실험에 쓴 설탕물을 맛보자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '실험에 쓴 설탕물을 맛보자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '맛보자는 친구', TASTE, [['refuse', 'askdump', 'wash']], TASTE_R, ['r1', 'r2'], RULE),
            DIL({ easy: '이름표 없는 병이 있어요. 한 번 골라 결과를 보세요.', base: '이름표 없는 병이 있어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '이름표 없는 병이 있어요. 세 번 골라 다음 반의 안전까지 정하고 근거를 고르세요.' },
              '이름표 없는 병', LABEL, [['tell', 'leave', 'note']], LABEL_R, ['r1', 'r2'], RULE, { conclude: '시약은 맡거나 맛보지 않고, 모르는 것은 먼저 묻고, 알게 된 규칙은 모둠과 나눠요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 "냄새 맡아 봐"라고 할 때 거절하며 할 말을 한 문장으로 써요.' }] },
      }),
      M('activity.tool-order', {
        title: '공구·조리 기구 쓰는 차례', method: '공구·조리 기구 쓰는 차례 세우기', tool: 'timer', minutes: 16,
        levels: { easy: '순서 카드 3장만 차례로 놓는다.', base: '순서 카드 5장을 놓고 안전 점검 칸 4개를 표시한다.', challenge: '마지막 문항에서 공구 판과 조리 기구 판에 공통으로 들어간 단계만 골라 차례로 놓는다.' },
        activity: {
          title: '공구·조리 기구 쓰는 차례', tool: 'timer',
          teacher: '"전동 드릴과 가스레인지는 전혀 다른 기구인데 쓰는 차례에는 같은 점이 있을까요?" 순서 카드를 놓은 뒤 안전 점검 칸을 하나씩 소리 내어 읽고 표시하게 한다. "정리는 끝나고 아무 때나 하면 된다"는 학생에게 "식기 전에 제자리에 넣으면 어떻게 될까요?"라고 되묻는다. 점검은 실습 전에, 정리는 실습 안에 들어간다는 점을 짚는다.',
          task: '공구와 조리 기구를 쓰는 순서 카드를 바른 차례로 놓고, 실습 전에 확인할 점검 칸을 표시해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '공구를 쓰는 차례를 놓고, 실습 전 안전 점검을 모두 표시하세요.', toolOptions: { title: '공구 쓰는 차례', cards: shuffle5(T1), safety: TOOLSAFE }, target: { order: T1, safety: true } },
              { prompt: '공구를 쓰는 차례 세 단계를 놓으세요.', toolOptions: { cards: [T1[2], T1[0], T1[1]], safety: [] }, target: { order: T1.slice(0, 3) } }),
            IT({ prompt: '조리 기구를 쓰는 차례를 놓고, 실습 전 안전 점검을 모두 표시하세요.', toolOptions: { title: '조리 기구 쓰는 차례', cards: shuffle5(T2), safety: COOKSAFE }, target: { order: T2, safety: true } },
              { prompt: '조리 기구를 쓰는 차례 세 단계를 놓으세요.', toolOptions: { cards: [T2[1], T2[2], T2[0]], safety: [] }, target: { order: T2.slice(0, 3) } }),
            IT({ prompt: '전기 다리미를 쓰는 차례를 놓으세요.', toolOptions: { title: '전기 다리미 쓰는 차례', cards: ['플러그 뽑기', '전선·플러그 점검하기', '식힌 뒤 제자리에', '다림질하기'] }, target: { order: ['전선·플러그 점검하기', '다림질하기', '플러그 뽑기', '식힌 뒤 제자리에'] } },
              null,
              { prompt: '공구 판과 조리 기구 판에 공통으로 들어간 단계를 차례대로 놓으세요.', toolOptions: { title: '두 판의 공통 단계', cards: ['전원·불 끄기', '쓰기 전 점검하기', '제자리에 두기', '바르게 쓰기'] }, target: { order: ['쓰기 전 점검하기', '바르게 쓰기', '전원·불 끄기', '제자리에 두기'] } },
              { conclude: '어떤 기구든 쓰기 전 점검, 바르게 쓰기, 끄기, 식힌 뒤 제자리 차례는 같아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 기구를 쓰는 차례의 공통 단계를 써요.', columns: ['차례', '공통 단계'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '쓰기 전 점검, 바르게 쓰기, 전원·불 끄기, 제자리에 두기' }] },
      }),
      M('activity.role-script', {
        title: '실습실 안전 지킴이 역할극', method: '실습실 안전 지킴이 역할극 대본', tool: 'mindmap', minutes: 16,
        levels: { easy: '역할 2개(안전 지킴이·도구 담당) 가지에 대사 보기 카드를 나눠 붙인다.', base: '역할 3개 가지에 대사를 붙여 대본을 꾸미고, 상황마다 나설 역할을 잇는다.', challenge: '규칙을 어긴 친구에게 하는 말 고르기에 함정 대사가 더 섞인다.' },
        activity: {
          title: '실습실 안전 지킴이 역할극', tool: 'mindmap',
          teacher: '"안전 지킴이는 친구를 감시하는 사람일까요, 모둠을 돕는 사람일까요?" 역할 가지에 대사를 붙인 뒤 모둠별로 30초씩 대본을 읽어 보게 한다. "규칙을 어긴 친구에게는 크게 혼내야 고친다"는 학생에게 "\'너 때문에 망했어\'와 \'보호안경 쓰고 다시 하자\' 가운데 어느 말이 친구를 움직일까요?"라고 되묻는다.',
          task: '모둠 역할 가지마다 실습 중 할 말을 붙여 짧은 역할극 대본을 꾸며요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('대사 카드를 알맞은 역할 가지에 붙이세요.', ['안전 지킴이', '기록 담당', '도구 담당'], LINES, { topic: '실습 모둠 역할' }),
              SB('대사 카드를 두 역할 가지에 붙이세요.', ['안전 지킴이', '도구 담당'], LINES.filter((c) => c.to !== '기록 담당'), { topic: '실습 모둠 역할' })),
            IT(MB('상황마다 먼저 나설 역할을 이어 보세요.', [['보호안경을 안 쓴 친구가 있다', '안전 지킴이'], ['시약병 뚜껑이 열려 있다', '도구 담당'], ['가열 중 이상한 소리가 났다', '기록 담당']], [], { topic: '누가 나설까?' }),
              MB('상황마다 먼저 나설 역할을 이어 보세요(두 상황).', [['보호안경을 안 쓴 친구가 있다', '안전 지킴이'], ['시약병 뚜껑이 열려 있다', '도구 담당']], [], { topic: '누가 나설까?' })),
            IT(PB('규칙을 어긴 친구에게 할 알맞은 말만 골라 담으세요.', '건넬 말', [
              { id: 'k1', text: '"보호안경 쓰고 다시 하자"', ok: true }, { id: 'k2', text: '"선생님께 같이 말씀드리자"', ok: true },
              { id: 'k3', text: '"너 때문에 다 망했어"' }, { id: 'k4', text: '"못 본 척할게"' }], { topic: '규칙을 어겼을 때' }),
              null,
              PB('규칙을 어긴 친구에게 할 알맞은 말만 골라 담으세요(함정 대사 포함).', '건넬 말', [
                { id: 'k1', text: '"보호안경 쓰고 다시 하자"', ok: true }, { id: 'k2', text: '"선생님께 같이 말씀드리자"', ok: true }, { id: 'k5', text: '"불 끄고 같이 정리하자"', ok: true },
                { id: 'k3', text: '"너 때문에 다 망했어"' }, { id: 'k4', text: '"못 본 척할게"' }, { id: 'k6', text: '"이번만 그냥 하자"' }], { topic: '규칙을 어겼을 때' }),
              { conclude: '역할을 나누면 모두가 서로의 안전을 챙기고, 규칙을 어긴 친구에게는 다시 할 방법을 말해 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 맡고 싶은 역할과 실습 중에 할 대사 한 줄을 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.lab-words', {
        title: '실험실 안전 낱말 정리', method: '실험실 안전 낱말 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 4개를 뜻과 짝짓는다.', base: '낱말 6개를 뜻과 짝짓는다.', challenge: '함정 뜻 카드가 섞인 판에서 짝짓고, 낱말 두 개로 규칙 문장을 직접 쓴다.' },
        wrap: {
          teacher: '"오늘 나온 낱말 가운데 다음 실험 때 가장 먼저 떠올려야 할 낱말은 무엇일까요?" 짝짓기를 마치면 낱말 두 개를 넣어 규칙 문장을 소리 내어 말하게 한다. "부채질은 냄새를 더 잘 맡으려는 것"이라는 말에는 "가까이 대지 않으려는 것"이라고 바로잡아 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'wordcards', options: MB('', [['보호안경', '튀는 약품에서 눈을 지킨다'], ['부채질', '냄새를 손으로 살짝 끌어와 맡는다'], ['점검', '쓰기 전에 고장과 물기를 살핀다'], ['제자리', '쓴 도구를 정한 곳에 둔다'], ['환기', '창을 열어 공기를 바꾼다'], ['보고', '사고를 바로 선생님께 알린다']], []).toolOptions,
              prompt: '낱말과 뜻을 이어요.', target: MB('', [['보호안경', ''], ['부채질', ''], ['점검', ''], ['제자리', ''], ['환기', ''], ['보고', '']]).target, difficulty: 0.2 },
            Object.assign(MB('낱말 네 개와 뜻을 이어요.', [['보호안경', '튀는 약품에서 눈을 지킨다'], ['부채질', '냄새를 손으로 살짝 끌어와 맡는다'], ['점검', '쓰기 전에 고장과 물기를 살핀다'], ['제자리', '쓴 도구를 정한 곳에 둔다']], [])),
            { toolOptions: MB('', [['보호안경', '튀는 약품에서 눈을 지킨다'], ['부채질', '냄새를 손으로 살짝 끌어와 맡는다'], ['점검', '쓰기 전에 고장과 물기를 살핀다'], ['제자리', '쓴 도구를 정한 곳에 둔다'], ['환기', '창을 열어 공기를 바꾼다'], ['보고', '사고를 바로 선생님께 알린다']], ['코를 대고 깊게 맡는다', '끝난 뒤 아무 데나 둔다']).toolOptions }),
            { type: 'choice', prompt: '실험이 끝난 뒤 가장 먼저 할 일은?', options: ['바로 교실로 간다', '불·전원을 끄고 시약 뚜껑을 닫는다', '친구와 결과를 비교한다'], answer: 1, difficulty: 0.2, explain: '끄고 닫는 것이 정리의 첫 단계예요.' },
            { type: 'short', prompt: '오늘 낱말 두 개를 넣어 실험실 규칙 문장을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '실험실 안전 낱말',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 써요.', columns: ['낱말', '뜻'], cells: [['부채질', ''], ['점검', ''], ['환기', '']], answer: '손으로 냄새를 살짝 끌어와 맡기, 쓰기 전 고장·물기 살피기, 창을 열어 공기 바꾸기' },
            { type: 'short', prompt: '낱말 두 개로 실험실 규칙 문장을 만들어 써요.' },
          ],
        },
      }),
      M('wrap.lab-selfcheck', {
        title: '실습 뒤 스스로 점검', method: '실습 뒤 스스로 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 4개 가운데 오늘 한 것에 표시한다.', base: '점검 항목 6개 가운데 오늘 한 것에 표시한다.', challenge: '표시한 뒤 못 한 항목의 다음 실천을 직접 쓴다.' },
        wrap: {
          teacher: '"오늘 실습이 끝나고 내가 실제로 한 것은 무엇인가요?" 점검표는 맞히는 문제가 아니라 스스로 돌아보는 표라고 말하고, 못 한 항목이 있어도 솔직하게 표시하게 한다. "다른 친구가 했으니 나는 안 해도 된다"는 말에는 정리는 모둠 모두의 일이라고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '실습 뒤 점검', items: [{ id: 'off', text: '불·전원을 껐다' }, { id: 'lid', text: '시약 뚜껑을 닫았다' }, { id: 'back', text: '도구를 제자리에 뒀다' }, { id: 'wash', text: '손을 씻었다' }, { id: 'wipe', text: '작업대를 닦았다' }, { id: 'tell', text: '깨진 것·이상한 것을 알렸다' }] },
              prompt: '오늘 실습 뒤 내가 한 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
            { prompt: '점검 항목 네 개 가운데 오늘 한 것에 스스로 표시해요.', toolOptions: { items: [{ id: 'off', text: '불·전원을 껐다' }, { id: 'lid', text: '시약 뚜껑을 닫았다' }, { id: 'back', text: '도구를 제자리에 뒀다' }, { id: 'wash', text: '손을 씻었다' }] } }),
            { type: 'choice', prompt: '"정리는 수업이 끝난 뒤 아무 때나 하면 된다"가 위험한 까닭은?', options: ['선생님께 혼나서', '켜진 불이나 열린 시약이 그동안 사고를 낼 수 있어서', '다음 반이 기다려서'], answer: 1, difficulty: 0.2, explain: '정리는 실습 안에 들어가는 안전 단계예요.' },
            { type: 'short', prompt: '못 한 항목이 있다면 다음 실습에서 어떻게 할지 써요.' },
          ],
        },
        worksheet: {
          title: '실습 뒤 스스로 점검',
          items: [
            { type: 'check', prompt: '오늘 실습 뒤 내가 한 것에 표시해요.', options: ['불·전원 끄기', '시약 뚜껑 닫기', '도구 제자리', '손 씻기'] },
            { type: 'short', prompt: '다음 실습에서 꼭 지킬 것 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 체육 시간과 야외 활동 안전 규칙 (saf-life.m.sports-outdoor) ====
  {
    const M = MK('sports-outdoor', [7]);
    const PE = [
      { id: 's1', text: '피구공은 어깨 아래로 던지기', to: '안전한 선택' }, { id: 'd1', text: '얼굴을 향해 세게 던지기', to: '위험한 선택' },
      { id: 's2', text: '뜀틀 앞 매트가 깔렸는지 보기', to: '안전한 선택' }, { id: 'd2', text: '매트 없이 뜀틀 넘기', to: '위험한 선택' },
      { id: 's3', text: '줄넘기 전 옆 사람과 간격 넓히기', to: '안전한 선택' }, { id: 'd3', text: '좁은 곳에서 줄을 크게 돌리기', to: '위험한 선택' },
      { id: 's4', text: '앞사람이 끝난 뒤 출발하기', to: '안전한 선택' }, { id: 'd4', text: '앞사람이 넘기 전에 달려 나가기', to: '위험한 선택' },
      { id: 's5', text: '숨이 차면 손 들고 잠깐 쉬기', to: '안전한 선택' },
    ];
    const WEAR = [
      { id: 'w1', text: '반지·목걸이 빼기', to: '안전한 선택' }, { id: 'w2', text: '운동화 끈 단단히 묶기', to: '안전한 선택' },
      { id: 'w3', text: '슬리퍼 신고 뛰기', to: '위험한 선택' }, { id: 'w4', text: '주머니에 볼펜 넣고 뛰기', to: '위험한 선택' },
      { id: 'w5', text: '긴 머리 묶기', to: '안전한 선택' }, { id: 'w6', text: '딱딱한 머리핀 꽂고 뛰기', to: '위험한 선택' },
    ];
    const TRAIL = { grid: [6, 4], title: '가상의 동네 산책로', legend: false, places: [
      { name: '입구 안내판', icon: 'office', at: [0, 3] }, { name: '다리', icon: 'bridge', at: [1, 2] }, { name: '숲 쉼터', icon: 'park', at: [2, 2] },
      { name: '약수터', icon: 'dot', at: [3, 3] }, { name: '갈림길', icon: 'dot', at: [3, 1] }, { name: '전망대', icon: 'mountain', at: [5, 0] }, { name: '샛길', icon: 'forest', at: [5, 2] },
    ] };
    const PACK = [
      { id: 'q1', text: '샌들을 신고 출발한다' }, { id: 'q2', text: '물 한 병을 셋이 나눠 마신다' }, { id: 'q3', text: '예보를 안 보고 반소매로 간다' },
      { id: 'q4', text: '휴대전화 배터리가 거의 없다' }, { id: 'q5', text: '해 질 무렵까지 산에 있다' },
    ];
    const PROB = [['샌들을 신고 출발한다', '돌길에서 발목을 삐끗한다'], ['물 한 병을 셋이 나눠 마신다', '목이 마르고 어지럽다'], ['예보를 안 보고 반소매로 간다', '바람이 불자 몸이 떨린다'], ['휴대전화 배터리가 거의 없다', '연락이 끊길까 걱정된다'], ['해 질 무렵까지 산에 있다', '길이 어두워 내려오기 힘들다']];
    const FIX = [['샌들을 신고 출발한다', '발목을 감싸는 운동화'], ['물 한 병을 셋이 나눠 마신다', '한 사람에 물 한 병 이상'], ['예보를 안 보고 반소매로 간다', '예보 확인과 겉옷'], ['휴대전화 배터리가 거의 없다', '미리 충전한 휴대전화'], ['해 질 무렵까지 산에 있다', '돌아올 시각 정하기']];
    const PEWHY = ['안전한 선택', '위험한 선택'];

    ALL.push(
      // ---- 도입 ----
      M('intro.warmup-timer', {
        title: '준비운동 구간 타이머', method: '준비운동 구간 타이머 맞추기', tool: 'timer', minutes: 6,
        levels: { easy: '준비운동·본운동·정리운동 순서 카드 3장만 놓는다.', base: '순서 카드를 놓고 구간 타이머(운동 30초·쉬기 10초·3번)를 맞춰 함께 해 본다.', challenge: '오늘 종목(피구·뜀틀·줄넘기)에 맞는 준비운동 부위를 하나씩 덧붙여 말한다.' },
        intro: {
          teacher: '"준비운동을 건너뛰고 바로 뛰면 몸은 어떻게 될까요?" 시연 단추로 순서 카드가 \'준비운동 → 본운동 → 정리운동\'으로 놓이고 타이머가 \'운동 30초·쉬기 10초·3번\'으로 맞춰지는 모습을 보인 뒤, 자리에서 발목·손목 돌리기를 함께 짧게 해 본다. "준비운동은 시간 낭비"라는 말이 나오면 "차가운 고무줄을 갑자기 세게 당기면 어떻게 될까요?"라고 되묻는다. 몸이 불편한 학생은 앉아서 따라 하게 한다.',
          student: '준비운동·본운동·정리운동 순서를 생각해 보고, 타이머에 맞춰 자리에서 발목과 손목을 함께 풀어 봐요.',
          demo: { tool: 'timer', options: { title: '체육 시간 순서와 준비운동', plan: { work: 20, rest: 20, rounds: 2 }, cards: ['정리운동', '준비운동', '본운동'] }, sequence: [{ order: ['준비운동', '본운동', '정리운동'], plan: { work: 30, rest: 10, rounds: 3 } }] },
          art: { draw: 'a paper-cut school field with students stretching their ankles and wrists in a circle, a big paper stopwatch beside them', banner: '준비 → 활동 → 정리', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '몸이 불편하거나 다친 학생은 동작을 하지 않고 순서 카드만 함께 놓는다.',
      }),
      M('intro.choice-emotion', {
        title: '아픈데 계속 뛰는 친구 마음', method: '아픈데 계속 뛰는 친구 마음 읽기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면을 읽어 주고 마음 카드 2개(미안함·걱정) 가운데 고른다.', base: '친구의 마음과 그 선택이 부를 결과를 함께 고른다.', challenge: '친구에게 건넬 말을 한 문장으로 짓는다.' },
        intro: {
          teacher: '"수아는 발목이 아픈데도 왜 계속 뛰었을까요?" 장면을 읽고 수아의 마음을 먼저 말하게 한 뒤, 시연 단추로 \'멈추고 알린다\'를 골라 결과를 보인다. "아파도 참고 끝까지 하는 것이 멋있다"는 말이 나오면 "오늘 참고 뛰면 다음 경기에는 뛸 수 있을까요?"라고 되묻는다. 수아는 가상 인물이며, 학생에게 다친 경험을 묻지 않는다.',
          student: '발목을 삐끗한 친구가 팀에 미안해 계속 뛰어요. 친구의 마음은 어떨지, 그 선택이 어떤 결과를 부를지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '피구 시합 중 발목을 삐끗한 수아가 팀에 미안해 계속 뛰고 있다.', feeling: '미안함', who: '수아', ask: '수아에게 가장 좋은 선택은?', choices: [
            { id: 'keep', text: '참고 끝까지 뛴다', result: '발목이 더 아파 다음 시합에도 못 나간다.' },
            { id: 'tell', text: '멈추고 선생님께 알린다', result: '보건실에서 살펴보고 쉰 뒤 다음 시합을 준비한다.' },
            { id: 'hide', text: '아무 말 없이 벤치에 앉는다', result: '아무도 몰라 제때 도움을 못 받는다.' }] }, sequence: [{ choice: 'tell' }] },
          art: { draw: 'a paper-cut gym with a dodgeball game, one student holding an ankle and looking worried while a teacher walks over', banner: '아프면 멈추고 알려요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '다친 경험을 묻지 않는다. 가상 인물 수아의 마음으로만 이야기한다.',
      }),

      // ---- 활동 ----
      M('activity.pe-situations', {
        title: '체육 장면 안전한 선택', method: '체육 장면별 안전한 선택과 근거', tool: 'mindmap', minutes: 16,
        levels: { easy: '카드 6장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 9장을 안전한·위험한 선택으로 나누고, 위험한 카드마다 바꿀 행동을 고른다.', challenge: '바꿀 행동 고르기에 함정이 섞이고, 바꿀 행동 하나를 활동지에 직접 쓴다.' },
        activity: {
          title: '체육 장면 안전한 선택', tool: 'mindmap',
          teacher: '"이 장면에서 누가 다칠 수 있을까요?" 카드를 놓을 때마다 다칠 수 있는 사람과 몸 부위를 함께 말하게 한다. "피구는 원래 세게 던져야 이긴다"는 학생에게 "이기는 것과 다치지 않게 하는 것 가운데 무엇이 경기 규칙에 먼저 들어 있을까요?"라고 되묻는다. 위험한 선택은 \'하지 마\'가 아니라 \'대신 이렇게\'로 바꿔 말하게 한다.',
          task: '피구·뜀틀·줄넘기 장면 카드를 안전한 선택과 위험한 선택으로 나누고, 위험한 카드마다 바꿀 행동을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('체육 장면 카드를 안전한 선택과 위험한 선택으로 나누세요.', PEWHY, PE, { topic: '피구·뜀틀·줄넘기' }),
              SB('체육 장면 카드 6장을 안전한 선택과 위험한 선택으로 나누세요.', PEWHY, pickCards(PE, ['s1', 'd1', 's2', 'd2', 's3', 'd3']), { topic: '피구·뜀틀·줄넘기' })),
            IT(MB('위험한 선택마다 바꿀 행동을 이어 보세요.', [['얼굴을 향해 세게 던지기', '어깨 아래로 던지기'], ['매트 없이 뜀틀 넘기', '매트를 깔고 넘기'], ['좁은 곳에서 줄 돌리기', '간격을 넓히고 돌리기'], ['앞사람보다 먼저 달려 나가기', '앞사람이 끝난 뒤 출발']], [], { topic: '대신 이렇게' }),
              MB('위험한 선택 두 개에 바꿀 행동을 이어 보세요.', [['얼굴을 향해 세게 던지기', '어깨 아래로 던지기'], ['매트 없이 뜀틀 넘기', '매트를 깔고 넘기']], [], { topic: '대신 이렇게' }),
              MB('위험한 선택마다 바꿀 행동을 이어 보세요(함정 카드 포함).', [['얼굴을 향해 세게 던지기', '어깨 아래로 던지기'], ['매트 없이 뜀틀 넘기', '매트를 깔고 넘기'], ['좁은 곳에서 줄 돌리기', '간격을 넓히고 돌리기'], ['앞사람보다 먼저 달려 나가기', '앞사람이 끝난 뒤 출발']], ['더 빨리 뛰기', '눈 감고 넘기'], { topic: '대신 이렇게' })),
            IT(SB('복장·장신구 카드를 안전한 선택과 위험한 선택으로 나누세요.', PEWHY, WEAR, { topic: '복장·신발·장신구' }),
              SB('복장·장신구 카드 4장을 나누세요.', PEWHY, pickCards(WEAR, ['w1', 'w2', 'w3', 'w4']), { topic: '복장·신발·장신구' }),
              null, { conclude: '체육 시간의 안전한 선택은 \'하지 마\'가 아니라 \'대신 이렇게\'로 바꿔 말할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '위험한 선택 하나를 골라 \'대신 이렇게\' 바꿀 행동을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '안전한 선택에 ○ 해요.', options: ['매트를 깔고 뜀틀 넘기', '슬리퍼 신고 뛰기'], answer: '매트를 깔고 뜀틀 넘기' }] },
      }),
      M('activity.body-check', {
        title: '종목별 다치기 쉬운 부위', method: '종목별 다치기 쉬운 몸 부위', tool: 'body', minutes: 16,
        levels: { easy: '고른 부위 이름이 바로 보이고, 종목마다 한 곳씩 차근차근 고른다.', base: '농구·축구·줄넘기 종목마다 다치기 쉬운 부위를 고른다.', challenge: '고른 부위마다 알맞은 준비운동까지 함께 짝짓는다.' },
        activity: {
          title: '종목별 다치기 쉬운 부위', tool: 'body',
          teacher: '"농구에서 점프하고 내려설 때 가장 먼저 힘이 실리는 곳은 어디일까요?" 종이 몸에서 부위를 고를 때마다 그 동작을 손으로 흉내 내 보게 한다. "줄넘기는 가벼운 운동이라 다칠 곳이 없다"는 학생에게 "수백 번 뛰어 내려올 때 충격은 어디에 쌓일까요?"라고 되묻는다. 부위를 고른 뒤에는 그 부위를 위한 준비운동을 함께 해 본다.',
          task: '종목마다 종이 몸에서 다치기 쉬운 부위를 고르고, 그 부위를 위한 준비운동을 생각해요.',
          levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '농구에서 점프 뒤 잘못 내려설 때 접질리기 쉬운 곳 한 곳을 고르세요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'] }, target: { parts: ['발목'] } },
              null,
              { prompt: '농구에서 접질리기 쉬운 곳을 고르고, 그 부위의 준비운동도 고르세요.', toolOptions: { ask: { q: '이 부위에 알맞은 준비운동은?', choices: ['발목 돌리기', '목 돌리기', '손뼉 치기'] } }, target: { parts: ['발목'], pick: 0 } }),
            IT({ prompt: '축구에서 공을 다투다 비틀리기 쉬운 곳 두 곳을 고르세요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '허벅지', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] } },
              null,
              { prompt: '축구에서 비틀리기 쉬운 곳 두 곳을 고르고, 함께 풀 준비운동을 고르세요.', toolOptions: { ask: { q: '두 부위를 함께 푸는 준비운동은?', choices: ['어깨 돌리기', '무릎 굽혔다 펴고 발목 돌리기', '고개 숙이기'] } }, target: { parts: ['무릎', '발목'], pick: 1 } }),
            IT({ prompt: '줄넘기를 오래 하면 착지 충격이 쌓이는 곳 두 곳을 고르세요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] } },
              null,
              { prompt: '줄넘기에서 충격이 쌓이는 곳과, 줄을 돌리느라 쓰는 곳까지 세 곳을 고르세요.', toolOptions: { ask: { q: '줄을 돌리는 손목을 위한 준비운동은?', choices: ['손목 털고 돌리기', '허리 숙이기', '발끝 들기'] } }, target: { parts: ['손목', '무릎', '발목'], pick: 0 } },
              { conclude: '종목마다 힘이 실리는 부위가 달라서, 그 부위에 맞는 준비운동을 먼저 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '종목마다 다치기 쉬운 부위와 준비운동을 써요.', columns: ['종목', '부위', '준비운동'], cells: [['농구', '', ''], ['줄넘기', '', '']], answer: '발목·발목 돌리기, 무릎과 발목·무릎 굽혔다 펴기와 발목 돌리기' }] },
      }),
      M('activity.hike-map', {
        title: '산책로 지도 쉼터와 위험 지점', method: '등산·소풍 길 지도에서 쉼터와 위험 지점 정하기', tool: 'map', minutes: 16,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 읽힌다.', base: '갈림길·쉼터·약수터·다시 모일 곳 핀 4개를 꽂는다.', challenge: '마지막 핀은 날이 어두워질 때 전망대까지 가지 않고 돌아설 지점으로 정한다.' },
        activity: {
          title: '산책로 지도 쉼터와 위험 지점', tool: 'map',
          teacher: '"일행과 흩어지기 가장 쉬운 곳은 어디일까요?" 핀을 꽂기 전에 그곳을 고른 까닭을 한 사람씩 말하게 한다. "가벼운 산책로니까 그냥 따라가면 된다"는 학생에게 "갈림길에서 앞사람이 보이지 않으면 어느 쪽으로 갈까요?"라고 되묻는다. 다시 모일 곳은 모두가 아는 이름이 분명한 곳이어야 한다는 점을 짚는다.',
          task: '가상의 산책로 칸 지도에 갈림길·쉼터·물 마실 곳을 핀으로 표시하고, 일행과 다시 모일 곳을 정해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('일행과 흩어지기 쉬운 곳에 핀을 꽂으세요.', TRAIL, { place: '갈림길' }),
            PIN('더운 날 그늘에서 쉬어 갈 곳에 핀을 꽂으세요.', TRAIL, { place: '숲 쉼터' }),
            PIN('물병을 채울 수 있는 곳에 핀을 꽂으세요.', TRAIL, { place: '약수터' }),
            IT(PIN('흩어졌을 때 모두가 다시 모이기로 할 곳(누구나 아는 출발점)에 핀을 꽂으세요.', TRAIL, { place: '입구 안내판' }),
              null,
              { prompt: '해가 지기 시작했어요. 전망대 쪽으로 더 오르지 않고 돌아서야 할 지점에 핀을 꽂으세요.', target: { place: '갈림길' } },
              { conclude: '야외 활동은 일행과 함께, 정해진 길로 가고, 흩어질 때 모일 곳과 돌아설 때를 미리 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '일행과 흩어졌을 때 다시 모일 곳을 정하는 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.packing-story', {
        title: '소풍 준비 사례 빠진 것', method: '소풍 준비 사례로 빠진 것 찾기', tool: 'story', minutes: 16,
        levels: { easy: '장면 3개마다 생긴 문제를 짝짓는다(바로 맞는지 알려 줌).', base: '장면 5개를 분석해 생긴 문제와 미리 챙겼어야 할 것을 짝짓는다.', challenge: '준비물 목록을 함정 카드를 빼고 골라 담고, 까닭을 활동지에 정리한다.' },
        activity: {
          title: '소풍 준비 사례 빠진 것', tool: 'story',
          teacher: '"샌들과 물 한 병만 챙긴 세 친구는 어느 장면부터 힘들어졌을까요?" 장면을 한 장씩 읽고 문제와 준비물을 짝지은 뒤, 우리 반 소풍 준비물 목록을 함께 정한다. "등산은 가벼운 차림이면 충분하다"는 학생에게 "산 위와 아래의 바람·기온이 같을까요?"라고 되묻는다. 세 친구는 가상 인물이다.',
          task: '샌들과 물 한 병만 챙겨 떠난 가상 친구들의 이야기를 장면별로 읽고, 생긴 문제와 미리 챙겼어야 할 것을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('장면마다 생긴 문제를 이어 보세요.', PROB, []),
              MB('장면 세 개마다 생긴 문제를 이어 보세요.', PROB.slice(0, 3), [])),
            IT(MB('장면마다 미리 챙겼어야 할 것을 이어 보세요.', FIX, []),
              MB('장면 세 개마다 미리 챙겼어야 할 것을 이어 보세요.', FIX.slice(0, 3), [])),
            IT(PB('소풍·등산 준비물로 알맞은 것만 골라 담으세요.', '준비물', [
              { id: 'shoe', text: '발목을 감싸는 운동화', ok: true }, { id: 'water', text: '한 사람에 물 한 병 이상', ok: true }, { id: 'jacket', text: '얇은 겉옷', ok: true },
              { id: 'phone', text: '충전한 휴대전화', ok: true }, { id: 'sandal', text: '샌들' }, { id: 'game', text: '무거운 게임기' }]),
              null, null, { conclude: '야외 활동 준비물은 날씨·길·시간을 미리 생각하고 챙겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '준비물과 챙기는 까닭을 써요.', columns: ['준비물', '까닭'], cells: [['운동화', ''], ['겉옷', ''], ['충전한 휴대전화', '']], answer: '발목을 다치지 않게, 기온이 떨어질 때, 연락이 끊기지 않게' }] },
      }),

      // ---- 정리 ----
      M('wrap.pe-rules', {
        title: '체육·야외 활동 규칙 마인드맵', method: '체육·야외 활동 규칙 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(준비·정리)에 규칙 카드를 잇는다.', base: '가지 3개(준비·활동 중·정리)에 규칙을 잇는다.', challenge: '\'야외 활동\' 가지를 하나 더해 규칙을 잇는다.' },
        wrap: {
          teacher: '"\'다치지 않는 활동\' 가운데에 준비·활동 중·정리 가지를 달면, 오늘 배운 규칙은 어디에 붙을까요?" 다 이은 학생에게 가지마다 다음 체육 시간에 지킬 것 하나를 고르게 한다. "정리운동은 안 해도 된다"는 말에는 오늘 타이머로 맞춘 순서를 다시 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '다치지 않는 활동', slots: ['준비', '활동 중', '정리'], cards: [
              { id: 'a1', text: '준비운동 하기' }, { id: 'a2', text: '복장·신발 점검하기' }, { id: 'b1', text: '내 체력에 맞게 쉬기' }, { id: 'b2', text: '물 자주 마시기' }, { id: 'c1', text: '정리운동 하기' }, { id: 'c2', text: '쓴 기구 제자리에 두기' }] },
              prompt: '규칙 카드를 준비·활동 중·정리 가지에 이어요.', target: { sort: { 준비: ['a1', 'a2'], '활동 중': ['b1', 'b2'], 정리: ['c1', 'c2'] } }, difficulty: 0.2 },
            { prompt: '규칙 카드를 준비·정리 가지에 이어요.', toolOptions: { slots: ['준비', '정리'], cards: [{ id: 'a1', text: '준비운동 하기' }, { id: 'a2', text: '복장·신발 점검하기' }, { id: 'c1', text: '정리운동 하기' }, { id: 'c2', text: '쓴 기구 제자리에 두기' }] }, target: { sort: { 준비: ['a1', 'a2'], 정리: ['c1', 'c2'] } } },
            { prompt: '규칙 카드를 준비·활동 중·정리·야외 활동 가지에 이어요.', toolOptions: { slots: ['준비', '활동 중', '정리', '야외 활동'], cards: [
              { id: 'a1', text: '준비운동 하기' }, { id: 'a2', text: '복장·신발 점검하기' }, { id: 'b1', text: '내 체력에 맞게 쉬기' }, { id: 'b2', text: '물 자주 마시기' }, { id: 'c1', text: '정리운동 하기' }, { id: 'c2', text: '쓴 기구 제자리에 두기' }, { id: 'd1', text: '일행과 함께 다니기' }, { id: 'd2', text: '정해진 길로만 가기' }] },
              target: { sort: { 준비: ['a1', 'a2'], '활동 중': ['b1', 'b2'], 정리: ['c1', 'c2'], '야외 활동': ['d1', 'd2'] } } }),
            { type: 'choice', prompt: '경기 중 발목이 아프기 시작했어요. 가장 알맞은 행동은?', options: ['팀을 위해 참고 끝까지 뛴다', '멈추고 선생님께 알린다', '아무 말 없이 집에 간다'], answer: 1, difficulty: 0.15, explain: '아프면 멈추고 알려야 더 크게 다치지 않아요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '다치지 않는 활동',
          items: [
            { type: 'table', prompt: '단계마다 지킬 규칙을 써요.', columns: ['단계', '규칙'], cells: [['준비', ''], ['활동 중', ''], ['정리', '']], answer: '준비운동·복장 점검, 쉬기·물 마시기, 정리운동·기구 제자리' },
            { type: 'check', prompt: '다음 체육 시간에 지킬 것에 표시해요.', options: ['준비운동 하기', '장신구 빼기', '아프면 바로 알리기'] },
          ],
        },
      }),
      M('wrap.pledge-writing', {
        title: '활동 안전 다짐 글과 기준표', method: '활동 안전 다짐 글과 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 ___ 때 ___ 하겠다. 왜냐하면 ___")을 따라 쓴다.', base: '다짐을 세 문장으로 쓰고 기준 3개(구체적인가·까닭이 있나·지킬 수 있나)를 점검한다.', challenge: '친구와 바꿔 읽고 고쳐 쓴 뒤 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'조심하겠다\'와 \'줄넘기 전에 옆 사람과 두 팔 간격을 두겠다\' 가운데 내일 정말 지킬 수 있는 다짐은 무엇일까요?" 두 문장을 견주어 읽은 뒤 다짐을 쓰게 한다. "크게 다짐할수록 좋다"는 학생에게 지킬 수 있는 작은 행동이 더 낫다고 말해 준다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '다음 체육 시간이나 소풍에서 지킬 안전 다짐을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '활동 안전 다짐', placeholder: '예: 나는 줄넘기를 할 때…' },
              prompt: '안전 다짐을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['행동이 구체적이다', '그렇게 하는 까닭이 있다', '내가 실제로 지킬 수 있다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 따라 안전 다짐을 세 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '나는 ___ 때 ___ 하겠다. 왜냐하면 ___ 때문이다. 그래서 ___.' } },
            { prompt: '친구와 바꿔 읽고 고쳐 쓴 다짐을 기준표에 표시해요.', target: { selfCheck: ['행동이 구체적이다', '그렇게 하는 까닭이 있다', '내가 실제로 지킬 수 있다', '친구 의견을 듣고 고쳐 썼다'] } }),
            { type: 'choice', prompt: '가장 구체적인 다짐은?', options: ['체육 시간에 조심하겠다', '피구공은 어깨 아래로 던지겠다', '다치지 않겠다'], answer: 1, difficulty: 0.15, explain: '무엇을 어떻게 할지가 보이는 다짐이 지키기 쉬워요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 활동 안전 다짐',
          items: [
            { type: 'short', prompt: '다음 체육 시간이나 소풍에서 지킬 다짐을 세 문장으로 써요.' },
            { type: 'check', prompt: '내 다짐을 기준표로 점검해요.', options: ['행동이 구체적이다', '까닭이 있다', '지킬 수 있다'] },
          ],
          easy: { note: '"나는 ___ 때 ___ 하겠다" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 다짐을 써요.', text: '나는 ___ 때 ___ 하겠다.', answer: '(예) 줄넘기를 할, 옆 사람과 간격을 넓히고' }] },
        },
      }),
    );
  }

  // ==== 7학년 · 실종·유괴로 이어지는 유인 신호 알아차리기 (saf-life.m.lure-signals) ====
  {
    const M = MK('lure-signals', [7]);
    const SIG2 = ['위험 신호', '괜찮은 부탁'];
    const OFFERS = [
      { id: 'd1', text: '"차에 타면 금방이야"', to: '위험 신호' }, { id: 'o1', text: '"버스 정류장이 어디니?"', to: '괜찮은 부탁' },
      { id: 'd2', text: '"부모님이 보내셨어, 같이 가자"', to: '위험 신호' }, { id: 'o2', text: '"떨어뜨린 지갑 여기 있어요"', to: '괜찮은 부탁' },
      { id: 'd3', text: '"이건 우리끼리 비밀이야"', to: '위험 신호' }, { id: 'o3', text: '"신호 바뀌었어요, 건너요"', to: '괜찮은 부탁' },
      { id: 'd4', text: '"선물 줄게, 잠깐 따라와"', to: '위험 신호' }, { id: 'o4', text: '"이 근처 약국이 어디예요?"', to: '괜찮은 부탁' },
      { id: 'd5', text: '"강아지 찾는 것 좀 저 골목에서 도와줘"', to: '위험 신호' }, { id: 'd6', text: '"휴대폰 빌려줄래? 내 차에서 쓰자"', to: '위험 신호' },
    ];
    const MYTH = { text: '"유괴는 무섭게 생긴 사람이 억지로 끌고 가는 일일까?"', ask: '내 생각은?', motif: 'house', choices: [
      { id: 'yes', text: '그렇다 — 무섭게 생긴 사람만 조심하면 된다', result: '이어지는 장면: 웃는 얼굴의 어른이 다가온다.', end: '친절한 모습으로 다가오는 경우도 있어요.',
        next: { text: '웃는 얼굴의 어른이 "강아지를 잃어버렸는데 같이 찾아 줄래?"라며 골목 쪽을 가리킨다.', choices: [
          { id: 'follow', text: '친절한 사람이니 따라간다', result: '사람이 없는 골목으로 들어가게 된다.', impact: [{ who: '나', text: '도움을 청할 사람이 없다', tone: -1 }], why: '친절한 부탁도 유인일 수 있어요.' },
          { id: 'refuse', text: '"다른 어른께 부탁하세요"라고 하고 사람 많은 곳으로 간다', result: '편의점 앞으로 가 상황을 피한다.', impact: [{ who: '나', text: '안전하다', tone: 1 }] }] } },
      { id: 'no', text: '아니다 — 친절한 부탁이나 선물로도 다가온다', result: '이어지는 장면: 웃는 얼굴의 어른이 다가온다.', end: '친절한 모습도 유인일 수 있다는 것을 알았어요.',
        next: { text: '웃는 얼굴의 어른이 "강아지를 잃어버렸는데 같이 찾아 줄래?"라며 골목 쪽을 가리킨다.', choices: [
          { id: 'follow2', text: '도와주고 싶어 따라간다', result: '사람이 없는 골목으로 들어가게 된다.', impact: [{ who: '나', text: '도움을 청할 사람이 없다', tone: -1 }], why: '도움이 필요한 어른은 어른에게 부탁해요.' },
          { id: 'refuse2', text: '"다른 어른께 부탁하세요"라고 하고 사람 많은 곳으로 간다', result: '편의점 앞으로 가 상황을 피한다.', impact: [{ who: '나', text: '안전하다', tone: 1 }] }] } }] };
    const MYTH_R = [{ id: 'r1', text: '유인은 친절·부탁·선물의 모습으로도 다가온다' }, { id: 'r2', text: '무섭게 생긴 사람만 조심하면 된다', why: '겉모습으로는 알 수 없어요.' }, { id: 'r3', text: '중학생은 다 커서 괜찮다', why: '나이와 상관없이 유인은 다가올 수 있어요.' }];
    const BUS = { text: '학원을 마치고 버스를 기다리는데, 처음 보는 어른이 차를 세우고 "비 오는데 집까지 태워 줄게"라고 한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'ride', text: '비가 오니 차에 탄다', result: '어디로 가는지 내가 정할 수 없게 된다.', impact: [{ who: '나', text: '위험한 곳으로 갈 수 있다', tone: -1 }], why: '처음 보는 사람의 차에는 타지 않아요.', ending: '처음 보는 사람의 차에 타는 것은 가장 위험한 선택이에요.' },
      { id: 'stand', text: '대답하지 않고 그 자리에 서 있는다', result: '어른이 창문을 더 내리고 다시 말을 건다.', impact: [{ who: '나', text: '계속 붙잡힌다', tone: -1 }], why: '서 있기만 하면 상대가 더 다가올 수 있어요. 거절하고 자리를 떠요.', end: '서 있기만 해서 상대가 계속 말을 걸었어요.',
        next: { text: '어른이 "괜찮아, 금방이야"라며 차 문을 연다.', choices: [
          { id: 'getin', text: '미안해서 탄다', result: '어디로 가는지 알 수 없게 된다.', impact: [{ who: '나', text: '위험하다', tone: -1 }] },
          { id: 'shop', text: '바로 옆 가게로 뛰어 들어간다', result: '가게 안 어른들 곁으로 피한다.', impact: [{ who: '나', text: '도움을 받을 수 있다', tone: 1 }] }] } },
      { id: 'say', text: '"아니요, 괜찮아요"라고 거절한다', result: '어른이 "그러지 말고 타"라며 다시 권한다.', impact: [{ who: '나', text: '거절할 권리를 썼다', tone: 1 }], end: '분명히 거절했어요.',
        next: { text: '어른이 다시 "그러지 말고 타"라고 권한다.', ask: '어떤 말과 행동으로 거절할까?', choices: [
          { id: 'soft', text: '"음… 괜찮은데…" 하며 머뭇거린다', result: '어른이 차에서 내리려 한다.', impact: [{ who: '나', text: '위험이 가까워진다', tone: -1 }], why: '거절은 또렷하게 하고 바로 자리를 떠요.' },
          { id: 'loud', text: '"싫어요!" 또렷이 말하고 옆 가게로 간다', result: '가게 안으로 들어와 어른들 곁에 선다.', impact: [{ who: '나', text: '사람 많은 곳에 있다', tone: 1 }], end: '또렷이 거절하고 사람 많은 곳으로 갔어요.',
            next: { text: '가게 안에 있다. 그 차가 아직 밖에 서 있다.', choices: [
              { id: 'report', text: '가게 주인께 말하고 보호자와 112에 알린다', result: '주인이 함께 있어 주고 보호자가 온다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }, { who: '다른 학생', text: '같은 일을 막을 수 있다', tone: 1 }] },
              { id: 'leave', text: '차가 떠나면 아무 말 없이 혼자 간다', result: '아무도 이 일을 모른다.', impact: [{ who: '다른 학생', text: '같은 일을 겪을 수 있다', tone: -1 }], why: '피한 뒤에도 꼭 알려야 다른 사람도 지켜요.' }] } }] } }] };
    const BUS_R = [{ id: 'r1', text: '거절은 나를 지키는 권리다' }, { id: 'r2', text: '사람 많은 곳으로 피하고 어른에게 알린다' },
      { id: 'r3', text: '어른 말은 거절하면 예의가 없다', why: '나를 지키는 거절은 무례가 아니에요.' }, { id: 'r4', text: '아무 일 없었으니 말하지 않아도 된다', why: '알려야 다음 일을 막을 수 있어요.' }];
    const MOM = { text: '학원 앞에서 처음 보는 언니가 "나 너희 엄마 친구야. 엄마가 급하게 데려오래"라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'go', text: '엄마 이름을 아니까 따라간다', result: '어디로 가는지 모른 채 걷게 된다.', impact: [{ who: '나', text: '위험하다', tone: -1 }], why: '이름을 안다고 믿을 수 있는 것은 아니에요.', ending: '확인하지 않고 따라가면 위험해요.' },
      { id: 'check', text: '"엄마께 먼저 전화해 볼게요"라고 한다', result: '언니가 "시간 없어, 빨리"라고 재촉한다.', impact: [{ who: '나', text: '확인할 시간을 번다', tone: 1 }], end: '따라가기 전에 확인하려 했어요.',
        next: { text: '언니가 "시간 없어, 빨리 가자"라며 팔을 잡으려 한다.', choices: [
          { id: 'pull', text: '재촉하니 일단 따라간다', result: '확인하지 못한 채 학원에서 멀어진다.', impact: [{ who: '나', text: '위험하다', tone: -1 }], why: '서두르게 하는 것 자체가 위험 신호예요.' },
          { id: 'back', text: '"싫어요" 하고 학원 안으로 들어간다', result: '학원 선생님 곁으로 간다.', impact: [{ who: '나', text: '믿을 어른 곁에 있다', tone: 1 }], end: '학원 안으로 피했어요.',
            next: { text: '학원 선생님이 무슨 일인지 묻는다.', choices: [
              { id: 'tellall', text: '있었던 일을 말하고 보호자께 함께 연락한다', result: '엄마가 그런 부탁을 한 적이 없다고 한다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }] },
              { id: 'nothing', text: '"아무 일도 아니에요"라고 한다', result: '도움을 받을 기회를 놓친다.', impact: [{ who: '나', text: '혼자 남는다', tone: -1 }], why: '믿을 어른에게 말해야 도움을 받아요.' }] } }] } },
      { id: 'wait', text: '대답 없이 휴대전화만 본다', result: '언니가 계속 곁에 서 있다.', impact: [{ who: '나', text: '계속 붙잡힌다', tone: -1 }], why: '대답하지 않고 서 있기보다 확인하거나 믿을 어른 곁으로 가요.', ending: '그 자리에 서 있으면 상대가 떠나지 않을 수 있어요.' }] };
    const MOM_R = [{ id: 'r1', text: '보호자에게 직접 확인하기 전에는 따라가지 않는다' }, { id: 'r2', text: '서두르게 하는 것은 위험 신호다' },
      { id: 'r3', text: '아는 이름을 대면 믿어도 된다', why: '이름은 다른 곳에서도 알 수 있어요.' }, { id: 'r4', text: '여자 어른은 위험하지 않다', why: '겉모습으로는 알 수 없어요.' }];
    const DOG = { text: '공원에서 낯선 어른이 "강아지를 잃어버렸어. 저쪽 숲길에서 같이 찾아 줄래?"라고 한다.', ask: '어떻게 할까?', motif: 'tree', choices: [
      { id: 'help', text: '불쌍해서 같이 숲길로 간다', result: '사람이 드문 곳으로 들어가게 된다.', impact: [{ who: '나', text: '도움을 청할 사람이 없다', tone: -1 }], why: '도움이 필요한 어른은 다른 어른에게 부탁할 수 있어요.', ending: '사람 드문 곳으로 따라가면 위험해요.' },
      { id: 'adult', text: '"공원 관리소에 말해 보세요"라고 하고 사람 많은 쪽으로 간다', result: '어른이 "너밖에 없어"라며 따라온다.', impact: [{ who: '나', text: '거절했다', tone: 1 }], end: '거절하고 사람 많은 쪽으로 갔어요.',
        next: { text: '어른이 "너밖에 없어, 잠깐이면 돼"라며 따라온다.', choices: [
          { id: 'give', text: '미안해서 잠깐만 도와준다', result: '다시 숲길 쪽으로 끌려간다.', impact: [{ who: '나', text: '위험하다', tone: -1 }], why: '미안한 마음을 이용하는 것도 유인이에요.' },
          { id: 'crowd', text: '놀이터 보호자들 곁으로 가서 도움을 청한다', result: '어른들이 곁에 있어 준다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }], end: '여러 어른 곁으로 갔어요.',
            next: { text: '그 어른이 사라졌다. 친구가 "별일 아니었네"라고 한다.', choices: [
              { id: 'call', text: '보호자에게 알리고 함께 112에 알린다', result: '같은 일이 또 있지 않도록 살펴본다.', impact: [{ who: '다른 어린이', text: '같은 일을 피한다', tone: 1 }] },
              { id: 'skip', text: '별일 아니니 그냥 논다', result: '아무도 이 일을 모른다.', impact: [{ who: '다른 어린이', text: '같은 일을 겪을 수 있다', tone: -1 }], why: '피했더라도 꼭 알려요.' }] } }] } },
      { id: 'quiet', text: '못 들은 척 그 자리에 있는다', result: '어른이 다시 부탁하며 가까이 온다.', impact: [{ who: '나', text: '계속 붙잡힌다', tone: -1 }], why: '대답만 피하기보다 자리를 떠요.', ending: '그 자리에 있으면 상대가 더 다가올 수 있어요.' }] };
    const DOG_R = [{ id: 'r1', text: '도움이 필요한 어른은 어른에게 부탁한다' }, { id: 'r2', text: '사람 많은 곳으로 피하고 어른에게 알린다' },
      { id: 'r3', text: '착한 일이니 따라가도 된다', why: '착한 마음을 이용하는 유인도 있어요.' }, { id: 'r4', text: '피했으니 아무에게도 말하지 않는다', why: '알려야 다른 사람도 지킬 수 있어요.' }];
    const TELL = { reasons: [{ id: 'r5', text: '알리면 다른 학생도 같은 일을 피한다' }, { id: 'r6', text: '112와 보호자에게 장소·인상·시각을 전한다' }], ok: ['r5', 'r6'] };
    const ROUTE = { grid: [6, 4], title: '가상의 통학길', legend: false, places: [
      { name: '학교', icon: 'school', at: [0, 0] }, { name: '문구점', icon: 'market', at: [2, 0] }, { name: '지구대', icon: 'police', at: [4, 0] },
      { name: '공사장 옆 골목', icon: 'factory', at: [1, 2] }, { name: '빈 주차장', icon: 'dot', at: [3, 2] }, { name: '편의점', icon: 'market', at: [4, 2] },
      { name: '지하도', icon: 'station', at: [2, 3] }, { name: '우리 집', icon: 'apartment', at: [5, 3] },
    ] };
    const SCRIPT = [
      { id: 'b1', who: '민준', label: '(낯선 어른이 "같이 가자"고 한다) "___"' },
      { id: 'b2', who: '민준', label: '(자리를 피하며) "___"' },
      { id: 'b3', who: '민준', label: '(보호자에게 전화) "___"' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.myth-check', {
        title: '유괴에 대한 생각 점검', method: '유괴에 대한 생각 점검 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '갈림길 1번에서 내 생각을 고르고 이어지는 장면을 함께 읽는다.', base: '갈림길 2번까지 가 보고 생각이 바뀌는 근거 카드를 고른다.', challenge: '다른 유인의 모습(선물·급한 부탁 등)을 하나 떠올려 짝에게 말한다.' },
        intro: {
          teacher: '"유괴라고 하면 어떤 장면이 떠오르나요?" 몇 명의 대답을 들은 뒤 시연 단추로 \'친절한 부탁으로도 다가온다 → 거절하고 사람 많은 곳으로\' 길과 근거를 보인다. "중학생은 다 커서 괜찮다"는 말이 나오면 "부탁을 들어주고 싶은 마음은 나이가 들면 없어질까요?"라고 되묻는다. 무서운 이야기나 실제 사건을 자세히 들려주지 않고, 알아차리고 거절하는 법에 집중한다고 밝힌다.',
          student: '유괴에 대한 내 생각을 골라 보고, 이어지는 가상 장면을 보며 생각이 바뀌는지 살펴봐요.',
          demo: DEMO_DIL('유괴에 대한 생각', MYTH, [['no', 'refuse2']], MYTH_R),
          art: { draw: 'a paper-cut street corner where a smiling adult points toward a narrow alley while a teenager steps back toward a bright convenience store', banner: '친절한 부탁도 신호일 수 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '실제 사건·피해 사례를 자세히 묘사하지 않는다. 학생에게 비슷한 일을 겪었는지 묻지 않는다. 걱정을 말하는 학생은 수업 뒤 따로 이야기한다.',
      }),
      M('intro.route-clock', {
        title: '귀가 시각 알리기 시계', method: '귀가 시각 알리기 시계', tool: 'clock', minutes: 6,
        levels: { easy: '학원 끝나는 시각과 도착 시각을 정각(8시·9시)으로 나타낸다.', base: '몇 분 단위 시각(8시 30분·8시 50분)을 나타내고 \'어디·누구와·몇 시\' 알림 문장을 고른다.', challenge: '늦어질 때 다시 보낼 알림 문장까지 고른다.' },
        intro: {
          teacher: '"학원이 8시 30분에 끝나고 집까지 20분 걸린다면, 보호자께 몇 시에 도착한다고 알릴까요?" 시연 단추로 시계 바늘이 8시 30분과 8시 50분으로 움직이는 모습을 보인 뒤 \'어디·누구와·몇 시\'가 다 든 알림 문장을 함께 고른다. "알리는 건 어린애나 하는 일"이라는 말이 나오면 "어른들도 늦을 때 왜 연락할까요?"라고 되묻는다. 시각은 가상 예시이며 학생의 실제 일정을 묻지 않는다.',
          student: '학원이 끝나는 시각과 집에 도착할 시각을 시계로 나타내 보고, 보호자에게 보낼 \'어디·누구와·몇 시\' 알림 문장을 생각해요.',
          demo: { tool: 'clock', options: { title: '귀가 시각' }, sequence: [{ h: 8, m: 30 }, { h: 8, m: 50 }] },
          art: { draw: 'a paper-cut evening street with a teenager holding a phone near a bus stop, a big paper clock showing half past eight', banner: '어디·누구와·몇 시', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.signal-sort', {
        title: '제안 문장 위험 신호 가르기', method: '제안 문장에서 위험 신호 가르기', tool: 'mindmap', minutes: 16,
        levels: { easy: '제안 카드 6장을 위험 신호·괜찮은 부탁으로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 10장을 나누고, 위험 신호마다 무엇이 수상한지 짝짓는다.', challenge: '괜찮아 보이다 위험 신호로 바뀌는 대화의 경계를 나누고, 경계를 활동지에 설명한다.' },
        activity: {
          title: '제안 속 위험 신호 가르기', tool: 'mindmap',
          teacher: '"길을 묻는 것과 같이 가 달라는 것은 무엇이 다를까요?" 카드를 소리 내어 읽고 나눌 때마다 \'어디로 데려가려 하나·누구에게 말하지 말라 하나·무엇을 주겠다 하나\'를 짚게 한다. "아는 얼굴이면 따라가도 된다"는 학생에게 "보호자께 확인할 수 없는데 따라가도 될까요?"라고 되묻는다. 친절한 부탁에 손가락으로 길을 가리켜 주는 것은 괜찮지만, 함께 가는 것은 다르다는 점을 짚는다.',
          task: '제안 카드를 \'위험 신호\'와 \'괜찮은 부탁\'으로 나누고, 위험 신호마다 무엇이 수상한지 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('제안 문장을 위험 신호와 괜찮은 부탁으로 나누세요.', SIG2, OFFERS, { topic: '이런 말을 들으면?' }),
              SB('제안 문장 6장을 위험 신호와 괜찮은 부탁으로 나누세요.', SIG2, pickCards(OFFERS, ['d1', 'o1', 'd2', 'o2', 'd3', 'o3']), { topic: '이런 말을 들으면?' })),
            IT(MB('위험 신호마다 무엇이 수상한지 이어 보세요.', [['"차에 타면 금방이야"', '나를 차로 데려가려 한다'], ['"부모님이 보내셨어"', '확인할 수 없는 말로 믿게 한다'], ['"우리끼리 비밀이야"', '어른에게 말하지 못하게 한다'], ['"선물 줄게, 따라와"', '선물로 꾀어 데려가려 한다']], [], { topic: '무엇이 수상할까?' }),
              MB('위험 신호 두 개에 수상한 점을 이어 보세요.', [['"차에 타면 금방이야"', '나를 차로 데려가려 한다'], ['"우리끼리 비밀이야"', '어른에게 말하지 못하게 한다']], [], { topic: '무엇이 수상할까?' })),
            IT(SB('대화가 이어지며 바뀌는 문장을 나누세요.', SIG2, [
              { id: 'c1', text: '"길 좀 알려 줄래?"', to: '괜찮은 부탁' }, { id: 'c2', text: '"말로는 모르겠다, 같이 가 줄래?"', to: '위험 신호' }, { id: 'c3', text: '"차에 타면 금방이야"', to: '위험 신호' }, { id: 'c4', text: '"고마워, 저기 맞지?"', to: '괜찮은 부탁' }], { topic: '어디서 바뀔까?' }),
              null, null, { conclude: '부탁이 \'함께 가자·비밀로 하자·선물을 주겠다\'로 바뀌는 순간이 위험 신호예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '괜찮은 부탁이 위험 신호로 바뀌는 순간은 언제인지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '위험 신호에 ○ 해요.', options: ['"차에 타면 금방이야"', '"신호 바뀌었어요"'], answer: '"차에 타면 금방이야"' }] },
      }),
      M('activity.refuse-dilemma', {
        title: '버스 정류장 제안 갈림길', method: '버스 정류장 제안 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번까지 가 보고 거절·피하기 근거 카드를 고른다.', challenge: '갈림길 3번에서 112·보호자에게 알리는 길까지 가고, 알릴 때 전할 정보 근거까지 고른다.' },
        activity: {
          title: '버스 정류장 제안 갈림길', tool: 'dilemma',
          teacher: '"거절하면 상대가 기분 나빠할까 봐 망설여질 때, 그래도 거절해야 하는 까닭은 무엇일까요?" 학생마다 한 길을 끝까지 가 본 뒤 머뭇거린 길과 또렷이 거절한 길의 결과를 견주게 한다. "아무 일 없었으니 말 안 해도 된다"는 학생에게 "다음 날 그 정류장에 서 있을 다른 학생은 어떻게 될까요?"라고 되묻는다. 상황은 모두 가상이며, 학생의 경험을 묻지 않는다.',
          task: '낯선 사람의 제안을 받은 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '낯선 어른이 차로 태워 주겠다고 해요. 한 번 골라 결과를 보세요.', base: '낯선 어른이 차로 태워 주겠다고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '낯선 어른이 차로 태워 주겠다고 해요. 세 번 골라 알리기까지 가고 근거를 고르세요.' },
              '버스 정류장의 제안', BUS, [['say', 'loud', 'report']], BUS_R, ['r1', 'r2'], TELL),
            DIL({ easy: '엄마 친구라는 사람이 데리러 왔대요. 한 번 골라 결과를 보세요.', base: '엄마 친구라는 사람이 데리러 왔대요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '엄마 친구라는 사람이 데리러 왔대요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '엄마 친구라는 사람', MOM, [['check', 'back', 'tellall']], MOM_R, ['r1', 'r2'], TELL),
            DIL({ easy: '강아지를 같이 찾자고 해요. 한 번 골라 결과를 보세요.', base: '강아지를 같이 찾자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '강아지를 같이 찾자고 해요. 세 번 골라 알리기까지 가고 근거를 고르세요.' },
              '강아지를 찾아 달라는 부탁', DOG, [['adult', 'crowd', 'call']], DOG_R, ['r1', 'r2'], TELL, { conclude: '거절은 나를 지키는 권리예요. 거절하고, 사람 많은 곳으로 피하고, 보호자와 112에 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '낯선 사람의 제안을 거절할 때 쓸 말을 또렷한 한 문장으로 써요.' }] },
      }),
      M('activity.safe-place-map', {
        title: '통학길 도움받을 곳 핀', method: '통학길 지도에 도움받을 곳 핀', tool: 'map', minutes: 16,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 읽힌다(도움받을 곳 위주).', base: '도움받을 곳과 사람이 드문 곳에 핀을 꽂아 나눈다.', challenge: '마지막 문항에서 밤에 학원에서 집으로 갈 다른 길을 고른다.' },
        activity: {
          title: '통학길 도움받을 곳 핀', tool: 'map',
          teacher: '"이 길에서 갑자기 도움이 필요하면 어디로 뛰어 들어갈 수 있을까요?" 핀을 꽂을 때마다 그곳이 밤에도 열려 있는지, 어른이 있는지를 따지게 한다. "지름길이 빠르니까 지하도로 가면 된다"는 학생에게 "빠른 길과 사람이 많은 길 가운데 밤에는 무엇을 고를까요?"라고 되묻는다. 지도는 가상의 통학길이며, 학생의 실제 집 위치를 묻지 않는다.',
          task: '가상의 통학길 지도에 도움을 청할 수 있는 곳과 사람이 드문 곳을 핀으로 나눠 꽂고, 피해 갈 길을 정해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('경찰에게 바로 도움을 청할 수 있는 곳에 핀을 꽂으세요.', ROUTE, { place: '지구대' }),
            PIN('밤늦게도 불이 켜져 있고 어른이 있는 가게에 핀을 꽂으세요.', ROUTE, { place: '편의점' }),
            PIN('사람이 드물어 혼자 지나지 않을 곳에 핀을 꽂으세요.', ROUTE, { place: '빈 주차장' }),
            IT(PIN('낮에도 피해 갈 곳(소음이 커서 소리쳐도 잘 안 들리는 곳)에 핀을 꽂으세요.', ROUTE, { place: '공사장 옆 골목' }),
              null,
              { prompt: '밤에 학원에서 집으로 갈 때 고를 길을 지도에서 보고 고르세요.', toolOptions: { readOnly: true, ask: { q: '밤길로 알맞은 길은?', choices: ['지하도를 지나는 지름길', '문구점·지구대·편의점이 있는 큰길', '빈 주차장을 가로지르는 길'] } }, target: { pick: 1 } },
              { conclude: '통학길에 도움을 청할 곳을 미리 알아 두고, 밤에는 빠른 길보다 사람이 많은 길로 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '통학길에서 도움받을 곳과 피할 곳을 써요.', columns: ['도움받을 곳', '피할 곳'], cells: [['', ''], ['', '']], answer: '지구대·편의점·문구점, 빈 주차장·공사장 옆 골목·지하도' }] },
      }),
      M('activity.refuse-script', {
        title: '거절하고 알리는 역할극 대본', method: '거절하고 알리는 역할극 대본', tool: 'story', minutes: 16,
        levels: { easy: '말풍선 빈칸에 보기 카드를 골라 넣는다(바로 맞는지 알려 줌).', base: '대본 장면을 차례로 놓고 말풍선을 채운 뒤, 활동지에 내 말로 말풍선을 직접 써 짝과 읽는다.', challenge: '보호자에게 알릴 때 전할 정보(장소·인상·시각)까지 골라 넣는다.' },
        activity: {
          title: '거절하고 알리는 역할극 대본', tool: 'story',
          teacher: '"거절하는 말은 작게, 길게 하는 것이 좋을까요, 짧고 또렷하게 하는 것이 좋을까요?" 말풍선을 채운 뒤 짝과 한 줄씩 소리 내어 읽게 한다. "아무 일도 없었는데 알리면 호들갑"이라는 학생에게 "알려 주면 보호자는 무엇을 할 수 있을까요?"라고 되묻는다. 역할극에서 낯선 어른 역은 교사가 맡고, 학생끼리 끌거나 붙잡는 동작은 하지 않는다.',
          task: '가상 인물 민준이 수상한 부탁을 거절하고 어른에게 알리는 대본의 말풍선을 채우고 짝과 읽어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(FB('민준의 말풍선에 알맞은 말을 넣으세요.', [[SCRIPT[0].label, '"싫어요, 안 가요!"'], [SCRIPT[1].label, '"저 편의점으로 갈게요"'], [SCRIPT[2].label, '"엄마, 낯선 사람이 따라오래요"']], ['"네, 잠깐만요"', '"아무한테도 말 안 할게요"'], { title: '민준의 대본' }),
              FB('민준의 말풍선 두 개에 알맞은 말을 넣으세요.', [[SCRIPT[0].label, '"싫어요, 안 가요!"'], [SCRIPT[2].label, '"엄마, 낯선 사람이 따라오래요"']], ['"네, 잠깐만요"'], { title: '민준의 대본' })),
            IT(OB('대본의 네 장면을 차례대로 놓으세요.', [{ id: 'e1', text: '낯선 어른이 같이 가자고 한다' }, { id: 'e2', text: '또렷이 거절한다' }, { id: 'e3', text: '사람 많은 가게로 간다' }, { id: 'e4', text: '보호자에게 알린다' }], { title: '민준의 대본' }),
              OB('대본의 세 장면을 차례대로 놓으세요.', [{ id: 'e2', text: '또렷이 거절한다' }, { id: 'e3', text: '사람 많은 가게로 간다' }, { id: 'e4', text: '보호자에게 알린다' }], { title: '민준의 대본' })),
            IT(PB('보호자나 112에 알릴 때 전할 정보만 골라 담으세요.', '전할 정보', [
              { id: 'i1', text: '어디서 있었던 일인지', ok: true }, { id: 'i2', text: '그 사람의 옷차림과 인상', ok: true }, { id: 'i3', text: '몇 시쯤이었는지', ok: true },
              { id: 'i4', text: '무서웠던 마음은 숨긴다' }, { id: 'i5', text: '내가 잘못했는지부터 따진다' }], { title: '알릴 때' }),
              null,
              PB('보호자나 112에 알릴 때 전할 정보만 골라 담으세요(함정 포함).', '전할 정보', [
                { id: 'i1', text: '어디서 있었던 일인지', ok: true }, { id: 'i2', text: '그 사람의 옷차림과 인상', ok: true }, { id: 'i3', text: '몇 시쯤이었는지', ok: true }, { id: 'i6', text: '차가 있었다면 색과 모양', ok: true },
                { id: 'i4', text: '무서웠던 마음은 숨긴다' }, { id: 'i5', text: '내가 잘못했는지부터 따진다' }, { id: 'i7', text: '그 사람을 혼자 쫓아가 본다' }], { title: '알릴 때' }),
              { conclude: '짧고 또렷하게 거절하고, 사람 많은 곳으로 가서, 장소·인상·시각을 알려요. 알리는 것은 잘못이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '대본의 말풍선을 내 말로 채워 써요.', columns: ['장면', '내가 할 말'], cells: [['거절할 때', ''], ['피할 때', ''], ['알릴 때', '']], answer: '(예) 싫어요 안 가요, 저 가게로 갈게요, 낯선 사람이 같이 가자고 했어요' }] },
      }),

      // ---- 정리 ----
      M('wrap.three-steps', {
        title: '거절·피하기·알리기 차례', method: '거절·피하기·알리기 차례 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '행동 카드 3장(거절·피하기·알리기)을 차례로 놓는다.', base: '함정 카드 2장이 섞인 5장 가운데 바른 3장을 차례로 놓는다.', challenge: '단계마다 할 말이 붙은 카드로 차례를 놓고, 함정 카드를 걸러 낸다.' },
        wrap: {
          teacher: '"오늘 배운 세 단계를 몸이 먼저 기억하게 하려면 어떻게 할까요?" 차례를 놓은 뒤 반 전체가 \'거절! 피하기! 알리기!\'를 한 번 말해 본다. 함정 카드(비밀로 하기·따라가 보기)를 고른 학생에게는 "비밀로 하자는 말이 오늘 어느 카드에 나왔나요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timeline', options: OB('', [{ id: 's1', text: '거절하기' }, { id: 's2', text: '사람 많은 곳으로 가기' }, { id: 's3', text: '보호자·112에 알리기' }], { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '비밀로 하기' }, { id: 'x2', text: '따라가 보기' }]).toolOptions,
              prompt: '함정 카드를 빼고 유인 상황에서 할 행동을 차례대로 놓아요.', target: { order: ['s1', 's2', 's3'] }, difficulty: 0.2 },
            { prompt: '유인 상황에서 할 행동 세 장을 차례대로 놓아요.', toolOptions: { cards: [{ id: 's1', text: '거절하기' }, { id: 's2', text: '사람 많은 곳으로 가기' }, { id: 's3', text: '보호자·112에 알리기' }] } },
            { prompt: '할 말이 붙은 카드에서 함정을 빼고 차례대로 놓아요.', toolOptions: { cards: [{ id: 's1', text: '"싫어요!" 거절하기' }, { id: 's2', text: '"저 가게로 갈게요" 피하기' }, { id: 's3', text: '"이런 일이 있었어요" 알리기' }, { id: 'x1', text: '"우리끼리 비밀" 지키기' }, { id: 'x2', text: '"잠깐만" 따라가 보기' }] } }),
            { type: 'choice', prompt: '친구가 "그 사람이 아는 얼굴이라 따라가도 돼"라고 해요. 알맞은 대답은?', options: ['아는 얼굴이면 괜찮다', '보호자께 먼저 확인하기 전에는 따라가지 않는다', '선물을 주면 따라간다'], answer: 1, difficulty: 0.2, explain: '아는 얼굴이어도 보호자 확인 없이 따라가지 않아요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '거절·피하기·알리기',
          items: [
            { type: 'table', prompt: '단계마다 할 행동을 써요.', columns: ['단계', '할 행동'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '거절하기, 사람 많은 곳으로 가기, 보호자·112에 알리기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '거절은 나를 지키는 ___예요.', answer: '권리' },
          ],
        },
        notes: '불안해하는 학생이 있으면 "알면 지킬 수 있다"는 점을 강조하고 수업 뒤 따로 이야기한다.',
      }),
      M('wrap.outing-check', {
        title: '외출 전 스스로 점검', method: '외출 전 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '외출 전 점검 항목 3개를 표시한다.', base: '외출 전 점검 항목 5개를 표시한다.', challenge: '표시한 뒤 내 생활에 맞는 점검 항목 하나를 직접 더해 쓴다.' },
        wrap: {
          teacher: '"오늘 저녁 학원이나 친구 집에 갈 때, 나가기 전에 무엇을 확인할까요?" 점검 칸을 함께 읽고 하나씩 표시하게 한다. "매번 알리는 건 귀찮다"는 말에는 \'어디·누구와·몇 시\' 한 줄이면 된다고 짚는다. 학생의 실제 일정·장소는 발표시키지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '외출 전 점검', safety: ['어디 가는지 알렸다', '몇 시에 올지 알렸다', '누구와 가는지 알렸다', '휴대전화를 충전했다', '늦어지면 다시 연락하기로 했다'] },
              prompt: '외출 전에 확인할 것을 모두 표시해요.', target: { safety: true }, difficulty: 0.1 },
            { prompt: '외출 전에 확인할 것 세 가지를 모두 표시해요.', toolOptions: { safety: ['어디 가는지 알렸다', '몇 시에 올지 알렸다', '누구와 가는지 알렸다'] } }),
            { type: 'choice', prompt: '보호자에게 보낼 알림으로 가장 알맞은 것은?', options: ['나 나감', '도서관에 지우랑 가요. 6시까지 와요.', '이따 봐요'], answer: 1, difficulty: 0.15, explain: '어디·누구와·몇 시가 다 들어 있어야 해요.' },
            { type: 'short', prompt: '내 생활에 맞게 외출 전 점검표에 더할 항목 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '외출 전 점검',
          items: [
            { type: 'check', prompt: '외출 전에 내가 할 점검에 표시해요.', options: ['어디 가는지 알리기', '몇 시에 올지 알리기', '누구와 가는지 알리기', '휴대전화 충전'] },
            { type: 'short', prompt: '보호자에게 보낼 \'어디·누구와·몇 시\' 알림 문장을 하나 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 붐비는 공공장소의 사고 요인과 대처 (saf-life.m.crowd-safety) ====
  {
    const M = MK('crowd-safety', [8]);
    const F3 = ['사람', '환경', '장비'];
    const ESC = [
      { id: 'e1', text: '에스컬레이터에서 휴대전화만 보며 서 있음', to: '사람' }, { id: 'e2', text: '에스컬레이터 계단 끝이 젖어 미끄러움', to: '환경' },
      { id: 'e3', text: '에스컬레이터 비상 정지 단추 덮개가 깨짐', to: '장비' }, { id: 'e4', text: '앞사람을 앞지르려 옆으로 뛰어 내려감', to: '사람' },
      { id: 'e5', text: '출구 앞에 사람이 몰려 흐름이 막힘', to: '환경' }, { id: 'e6', text: '손잡이 고무가 찢어져 옷이 걸림', to: '장비' },
    ];
    const PLAT = [
      { id: 'p1', text: '승강장 노란 선 안쪽으로 밀고 들어감', to: '사람' }, { id: 'p2', text: '승강장 바닥 조명이 어두움', to: '환경' },
      { id: 'p3', text: '스크린도어가 고장 나 열려 있음', to: '장비' }, { id: 'p4', text: '놀이기구 줄에서 장난치며 밀기', to: '사람' },
      { id: 'p5', text: '놀이공원 퍼레이드 뒤 한 통로로 몰림', to: '환경' }, { id: 'p6', text: '놀이기구 안전바 잠금이 헐거움', to: '장비' },
    ];
    // 가상의 지역 축제 시간대별 방문자 수(수업용 가상 자료)
    const FEST = [['오후 1시', 300], ['오후 2시', 450], ['오후 3시', 600], ['오후 4시', 550], ['오후 5시', 700], ['저녁 6시', 1200], ['저녁 7시', 900]];
    const FOPT = (data, more) => Object.assign({ type: 'bar', mode: 'read', title: '가상 지역 축제 시간대별 방문자', unit: '명', xLabel: '시간', yLabel: '방문자 수', scale: 100, data }, more);
    const VENUE = { grid: [6, 4], title: '가상의 공연장 안내도', places: [
      { name: '내 자리', icon: 'dot', at: [2, 1] }, { name: '출구 가', icon: 'dot', at: [0, 1] }, { name: '출구 나', icon: 'dot', at: [5, 0] },
      { name: '출구 다', icon: 'dot', at: [3, 3] }, { name: '매점', icon: 'market', at: [5, 3] }, { name: '광장 시계탑', icon: 'park', at: [0, 3] }] };
    const IN = [{ id: 'exit', text: '들어가기 전 출구 확인하기' }, { id: 'meet', text: '친구와 모일 곳 정하기' }, { id: 'flow', text: '사람 흐름을 따라 걷기' }, { id: 'edge', text: '답답하면 가장자리로 빠지기' }, { id: 'early', text: '붐비기 전에 일찍 나오기' }];
    const TRAP = [{ id: 'push', text: '앞사람을 밀어 길 만들기' }, { id: 'photo', text: '사진 찍으려고 멈춰 서기' }];
    const C1 = { text: '좋아하는 가수 공연을 보러 가는 골목이 점점 붐빈다. 앞이 잘 안 보이고 몸이 서로 닿기 시작했다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'forward', text: '공연에 늦지 않게 계속 앞으로 간다', result: '사람 사이에 끼어 몸을 움직이기 어려워진다.', impact: [{ who: '나', text: '숨쉬기 답답하다', tone: -1 }], why: '앞으로 갈수록 더 붐벼요. 위험을 느끼면 일찍 빠져나와요.', end: '사람 사이에 끼었어요.',
        next: { text: '뒤에서 "밀어!" 하는 소리가 들린다.', choices: [
          { id: 'pushback', text: '나도 앞사람을 민다', result: '앞쪽 사람들이 휘청인다.', impact: [{ who: '앞사람', text: '넘어질 수 있다', tone: -1 }] },
          { id: 'shout', text: '"밀지 마세요!" 외치고 가장자리로 옮긴다', result: '주변 사람들도 멈칫하며 밀기를 멈춘다.', impact: [{ who: '주변 사람', text: '흐름이 느려진다', tone: 1 }] }] } },
      { id: 'stopphoto', text: '잠깐 멈춰 붐비는 모습을 사진으로 찍는다', result: '뒤에서 사람들이 부딪쳐 온다.', impact: [{ who: '뒷사람', text: '부딪친다', tone: -1 }], why: '붐비는 곳에서 갑자기 멈추면 뒷사람이 밀려요.', end: '뒷사람과 부딪쳤어요.',
        next: { text: '사진을 다 찍었는데 골목이 더 꽉 찼다.', choices: [
          { id: 'stay', text: '그 자리에서 기다린다', result: '점점 몸을 움직이기 어려워진다.', impact: [{ who: '나', text: '빠져나가기 어렵다', tone: -1 }] },
          { id: 'side2', text: '흐름을 따라 옆 길로 빠진다', result: '조금 늦게 넓은 길로 나온다.', impact: [{ who: '나', text: '안전해진다', tone: 1 }] }] } },
      { id: 'side', text: '흐름을 따라 옆 넓은 길로 빠진다', result: '넓은 길에서 숨을 돌린다.', impact: [{ who: '나', text: '몸이 편해진다', tone: 1 }], end: '일찍 빠져나와 안전했어요.',
        next: { text: '친구가 "다시 골목으로 들어가자, 공연 놓쳐!"라고 한다.', choices: [
          { id: 'back', text: '친구를 따라 다시 들어간다', result: '골목은 아까보다 더 붐빈다.', impact: [{ who: '친구', text: '같이 위험해진다', tone: -1 }], why: '위험을 느껴 나왔다면 다시 들어가지 않아요.' },
          { id: 'persuade', text: '"오늘은 넓은 데서 보자"고 친구를 설득한다', result: '친구가 머뭇거린다.', impact: [{ who: '친구', text: '생각해 본다', tone: 0 }], end: '친구를 설득해 넓은 곳에 남았어요.',
            next: { text: '친구가 "그래도 아깝잖아"라고 한다.', choices: [
              { id: 'plan', text: '"모일 곳 정하고 공연은 영상으로 보자"고 말한다', result: '둘이 함께 광장에 남는다.', impact: [{ who: '친구', text: '함께 안전하다', tone: 1 }] },
              { id: 'leave', text: '친구를 두고 혼자 집에 간다', result: '친구 혼자 골목에 들어간다.', impact: [{ who: '친구', text: '혼자 위험해진다', tone: -1 }], why: '친구가 혼자 위험해지지 않게 함께 있을 길을 찾아요.' }] } }] } }] };
    const CR = [{ id: 'r1', text: '위험을 느끼면 일찍 빠져나오는 것이 가장 안전하다' }, { id: 'r2', text: '흐름을 거스르거나 갑자기 멈추면 여럿이 밀린다' },
      { id: 'r3', text: '사람이 많을수록 서로 지켜 줘서 안전하다', why: '사람이 많을수록 한 사람의 밀기가 여럿에게 퍼져요.' }, { id: 'r4', text: '표를 샀으면 끝까지 앞으로 가야 한다', why: '공연보다 몸이 먼저예요.' }];
    const C2 = { text: '축제가 끝나자 모두 한 출구로 몰린다. 내 옆 출구 하나는 비교적 한산하다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'main', text: '친구들이 가는 큰 출구로 따라간다', result: '출구 앞이 꽉 막혀 오래 서 있다.', impact: [{ who: '나', text: '사람 사이에 끼인다', tone: -1 }], why: '모두 같은 출구로 가면 몰려요. 다른 출구를 미리 알아 둬요.', end: '출구 앞에서 오래 끼여 있었어요.',
        next: { text: '앞에서 누군가 넘어졌다는 소리가 들린다.', choices: [
          { id: 'look', text: '보려고 앞으로 비집고 간다', result: '앞쪽이 더 붐빈다.', impact: [{ who: '넘어진 사람', text: '더 위험해진다', tone: -1 }] },
          { id: 'call', text: '"앞에 사람이 넘어졌어요, 멈춰요!" 외친다', result: '뒤쪽 사람들이 멈춘다.', impact: [{ who: '넘어진 사람', text: '일어설 틈이 생긴다', tone: 1 }] }] } },
      { id: 'other', text: '한산한 옆 출구로 걸어 나간다', result: '천천히 걸어 밖으로 나온다.', impact: [{ who: '나', text: '편하게 나온다', tone: 1 }], end: '다른 출구로 안전하게 나왔어요.',
        next: { text: '친구들과 흩어졌다. 휴대전화 신호가 잘 안 잡힌다.', choices: [
          { id: 'meetpt', text: '미리 정한 모일 곳으로 간다', result: '친구들을 그곳에서 만난다.', impact: [{ who: '친구들', text: '서로 찾는다', tone: 1 }] },
          { id: 'search', text: '친구를 찾으러 다시 인파 속으로 들어간다', result: '사람들 사이에서 길을 잃는다.', impact: [{ who: '나', text: '다시 끼인다', tone: -1 }], why: '흩어지면 찾아 헤매지 말고 모일 곳에서 만나요.' }] } },
      { id: 'wait', text: '사람이 빠질 때까지 가장자리에서 기다린다', result: '조금 늦지만 여유 있게 나온다.', impact: [{ who: '나', text: '안전하다', tone: 1 }], ending: '기다렸다 나와서 안전했어요.' }] };
    const C2R = [{ id: 'r1', text: '출구와 모일 곳은 들어가기 전에 확인한다' }, { id: 'r2', text: '흩어지면 찾아다니지 말고 모일 곳으로 간다' },
      { id: 'r3', text: '친구들과 무조건 같은 길로 가야 한다', why: '같이 있는 것보다 몰리지 않는 길이 먼저예요.' }, { id: 'r4', text: '넘어진 사람은 가까이 가서 봐야 한다', why: '모여들면 더 붐벼요. 멈추라고 알리는 것이 돕는 길이에요.' }];
    const C3 = { text: '불꽃놀이를 보려는 사람들로 다리 위가 꽉 찼다. 친구 하나가 난간에 올라가 보자고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'climb', text: '같이 난간에 올라간다', result: '뒤에서 밀릴 때 몸을 지탱할 곳이 없다.', impact: [{ who: '나', text: '떨어질 수 있다', tone: -1 }], why: '붐비는 곳에서 높은 곳에 오르면 밀릴 때 떨어질 수 있어요.', end: '난간 위가 위험했어요.',
        next: { text: '뒤에서 사람들이 앞으로 밀려온다.', choices: [
          { id: 'hold', text: '난간을 붙잡고 버틴다', result: '팔이 아프고 위험하다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }] },
          { id: 'down', text: '바로 내려와 사람 적은 쪽으로 옮긴다', result: '다리 끝으로 걸어 나온다.', impact: [{ who: '나', text: '위험에서 벗어난다', tone: 1 }] }] } },
      { id: 'no', text: '"위험해, 다리 끝 넓은 곳으로 가자"고 한다', result: '친구가 따라온다.', impact: [{ who: '친구', text: '함께 안전하다', tone: 1 }], end: '넓은 곳에서 함께 봤어요.',
        next: { text: '넓은 곳에서도 사람이 늘어나고 있다.', choices: [
          { id: 'stayhere', text: '자리를 잡았으니 끝날 때까지 있는다', result: '나갈 때 한꺼번에 몰린다.', impact: [{ who: '나', text: '나가기 어렵다', tone: -1 }], why: '사람이 계속 늘면 미리 나갈 때를 정해요.' },
          { id: 'earlyout', text: '끝나기 조금 전에 먼저 빠져나온다', result: '붐비기 전에 집으로 향한다.', impact: [{ who: '나', text: '여유 있게 간다', tone: 1 }] }] } },
      { id: 'phone', text: '휴대전화로 영상만 찍으며 그 자리에 선다', result: '주변을 못 보다 사람과 부딪친다.', impact: [{ who: '옆 사람', text: '부딪친다', tone: -1 }], why: '붐비는 곳에서는 화면보다 주변을 봐요.', ending: '주변을 못 봐 위험했어요.' }] };
    const C3R = [{ id: 'r1', text: '붐비는 곳에서는 높은 곳에 오르지 않는다' }, { id: 'r2', text: '사람이 늘면 일찍 빠져나올 때를 정한다' },
      { id: 'r3', text: '좋은 자리를 잡으면 끝까지 지켜야 한다', why: '자리보다 빠져나올 길이 중요해요.' }, { id: 'r4', text: '다들 하니까 난간에 올라가도 된다', why: '여럿이 해도 위험은 줄지 않아요.' }];
    const PERSUADE = { reasons: [{ id: 'r5', text: '친구를 설득해 함께 안전한 곳에 남는다' }, { id: 'r6', text: '"멈춰요"라고 알리면 주변 사람도 지킨다' }], ok: ['r5', 'r6'] };

    ALL.push(
      M('intro.bike-rack-case', {
        title: '자전거 거치대 사고 요인 찾기', method: '자전거 거치대 사고 사례 요인 찾기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지마다 교사가 보기 카드 두 장을 들어 보이고 하나를 고르게 한다.', base: '사람·환경·장비 가지에 요인을 하나씩 단다.', challenge: '요인끼리 겹친 지점(예: 비 온 날 + 서두름)을 짚어 말한다.' },
        intro: {
          teacher: '"이 사고는 넘어진 학생이 조심하지 않아서 생긴 걸까요?" 비 온 아침 학교 앞 자전거 거치대에서 서둘러 자전거를 빼던 학생이 젖은 바닥과 휘어진 거치대에 걸려 넘어진 가상 이야기를 읽어 주고, 시연 단추로 요인 카드가 사람·환경·장비 가지에 붙는 모습을 보인다. "운이 나빴어요"라는 말이 나오면 "이 세 가지 가운데 하나만 없었다면 어땠을까요?"라고 되묻는다. 사고는 여러 요인이 겹쳐 일어난다는 것을 오늘의 질문으로 삼는다.',
          student: '가상 사고 이야기를 듣고 사람·환경·장비 가운데 어느 요인이 겹쳤는지 하나씩 찾아 짝에게 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '자전거 거치대 사고', slots: F3, cards: [{ id: 'h', text: '지각할까 봐 서두름' }, { id: 'w', text: '비에 젖은 바닥' }, { id: 'g', text: '휘어진 거치대' }], shuffle: false }, sequence: [{ sort: { 사람: ['h'], 환경: ['w'], 장비: ['g'] } }] },
          art: { draw: 'a paper-cut school bicycle rack on a rainy morning with a wet ground, a bent rack and a hurried student nearly falling', banner: '사고는 왜 일어났을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이다. 실제 사고 피해 경험을 묻지 않는다.',
      }),
      M('intro.venue-map', {
        title: '공연장 안내도에서 출구 찾기', method: '공연장 안내도에서 출구 찾기', tool: 'map', minutes: 6,
        levels: { easy: '내 자리에서 가장 가까운 출구 1곳만 찾는다.', base: '가까운 출구 2곳과 친구와 다시 만날 곳을 찾는다.', challenge: '한 출구가 막혔을 때 갈 다른 길까지 말한다.' },
        intro: {
          teacher: '"공연이 시작되기 전, 자리에 앉자마자 무엇을 먼저 봐야 할까요?" 가상 공연장 칸 지도를 띄우고 시연 단추로 내 자리에서 가까운 출구와 모일 곳에 핀이 꽂히는 모습을 보인다. "들어온 문으로 나가면 돼요"라는 말에는 "모두가 들어온 문으로만 몰리면 어떻게 될까요?"라고 되묻는다.',
          student: '가상 공연장 지도에서 내 자리와 가장 가까운 출구 두 곳, 친구와 다시 만날 곳을 찾아 손으로 짚어 봐요.',
          demo: { tool: 'map', options: VENUE, sequence: [{ place: '출구 가' }, { place: '출구 다' }, { place: '광장 시계탑' }] },
          art: { draw: 'a paper-cut concert hall floor plan seen from above with glowing exit signs at three doors and a small meeting point outside', banner: '출구는 어디에 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('activity.factor-sort', {
        title: '사고 사례 세 요인 나누기', method: '사고 사례를 세 요인으로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '문항마다 카드 3장(모두 6장)을 사람·환경·장비로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 12장을 세 요인으로 나누고, 사례마다 가장 먼저 고칠 요인을 고른다.', challenge: '우선 요인을 고른 근거를 활동지에 직접 쓴다(확인 전에는 맞는 칸 표시를 숨긴다).' },
        activity: {
          title: '사고 사례 세 요인 나누기', tool: 'mindmap',
          teacher: '"이 문장은 사람의 행동일까요, 장소의 상태일까요, 시설과 장비의 문제일까요?" 카드를 나눈 뒤 사례마다 가장 먼저 고칠 요인을 고르고 까닭을 말하게 한다. "사람만 조심하면 된다"는 학생에게 "고장 난 스크린도어는 조심만으로 막을 수 있을까요?"라고 되묻는다. 세 요인이 겹치는 곳일수록 사고가 크게 난다는 점을 짚는다.',
          task: '사고 사례 문장 카드를 사람·환경·장비 칸에 나누고, 사례마다 먼저 고칠 요인을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('에스컬레이터·지하철역 사례 카드를 세 요인으로 나누세요.', F3, ESC, { topic: '에스컬레이터·역' }),
              SB('에스컬레이터 사례 카드 3장을 세 요인으로 나누세요.', F3, pickCards(ESC, ['e1', 'e2', 'e3']), { topic: '에스컬레이터·역' })),
            IT(SB('승강장·놀이공원 사례 카드를 세 요인으로 나누세요.', F3, PLAT, { topic: '승강장·놀이공원' }),
              SB('승강장 사례 카드 3장을 세 요인으로 나누세요.', F3, pickCards(PLAT, ['p1', 'p2', 'p3']), { topic: '승강장·놀이공원' })),
            IT(MB('사례마다 가장 먼저 고칠 요인을 이어 보세요.', [['스크린도어가 고장 난 승강장', '장비: 바로 고치고 막아 두기'], ['퍼레이드 뒤 한 통로로 몰림', '환경: 통로를 나누어 열기'], ['줄에서 장난치며 미는 학생', '사람: 줄에서 밀지 않기']], ['운: 다음엔 운이 좋기를 바라기'], { topic: '먼저 고칠 요인' }),
              MB('사례 두 개에 먼저 고칠 요인을 이어 보세요.', [['스크린도어가 고장 난 승강장', '장비: 바로 고치고 막아 두기'], ['줄에서 장난치며 미는 학생', '사람: 줄에서 밀지 않기']], [], { topic: '먼저 고칠 요인' }),
              null, { conclude: '사고는 사람·환경·장비 요인이 겹쳐 일어나요. 가장 위험이 큰 요인부터 고쳐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사례 하나를 골라, 가장 먼저 고칠 요인과 그 근거를 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '\'비에 젖은 바닥\'은 어느 요인인가요?', options: ['사람', '환경', '장비'], answer: '환경' }] },
      }),
      M('activity.density-chart', {
        title: '축제 시간대별 인파 그래프', method: '가상의 축제 시간대별 인파 그래프', tool: 'chart', minutes: 16,
        levels: { easy: '막대 4개에서 가장 붐비는 때를 고른다(막대 끝에 값이 보인다).', base: '막대 7개를 읽고 가장 붐비는 때를 피하는 일정과 모일 곳을 정한다.', challenge: '공연이 끝난 직후 사람이 몰리는 때까지 생각해 나올 시간을 고른다.' },
        activity: {
          title: '축제 인파 그래프 읽기', tool: 'chart',
          teacher: '"가장 붐비는 때에 가장 재미있는 공연이 있다면 어떻게 할까요?" 가상 축제 그래프를 함께 읽고, 붐비는 때를 피하는 일정을 짝과 세우게 한다. "사람이 많으면 오히려 안전하다"는 학생에게 "사람이 두 배가 되면 출구도 두 배가 될까요?"라고 되묻는다. 자료는 수업을 위해 지어낸 가상 자료라는 점을 밝힌다.',
          task: '가상 축제의 시간대별 방문자 그래프를 읽고, 붐비는 때를 피하는 일정을 정해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '방문자가 가장 많은 시간을 고르세요.', toolOptions: FOPT(FEST, { question: '가장 붐비는 때는?', choices: FEST.map((d) => d[0]) }), target: { pick: 5 } },
              { prompt: '막대 4개 가운데 방문자가 가장 많은 시간을 고르세요.', toolOptions: { data: FEST.slice(0, 4), choices: FEST.slice(0, 4).map((d) => d[0]) }, target: { pick: 2 } }),
            IT({ prompt: '붐비는 때를 피해 축제장에 들어갈 시간으로 가장 알맞은 것을 고르세요.', toolOptions: FOPT(FEST, { question: '언제 들어가는 것이 좋을까요?', choices: ['오후 1시', '저녁 6시', '저녁 7시'] }), target: { pick: 0 } }),
            IT({ prompt: '저녁 6시는 오후 5시보다 방문자가 몇 명 많은지 읽어 쓰세요.', toolOptions: FOPT(FEST, { question: '몇 명 많은가요?' }), target: { value: 500 } },
              null,
              { prompt: '저녁 6시에 큰 공연이 끝나면 사람이 한꺼번에 나와요. 집에 갈 때로 가장 알맞은 것을 고르세요.', toolOptions: { question: '공연 직후 몰림을 피하려면?', choices: ['공연이 끝나자마자 바로 나간다', '끝나기 조금 전에 먼저 나오거나 한참 뒤에 나온다', '가장 붐빌 때 친구와 흩어져 나간다'] }, target: { pick: 1 } },
              { conclude: '붐비는 때를 자료로 미리 알면 들어가고 나올 때를 바꿔 몰림을 피할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 축제 그래프를 보고 우리 모둠 일정을 정해요.', columns: ['할 일', '시간'], cells: [['축제장 들어가기', ''], ['모일 곳에서 만나기', ''], ['집으로 나오기', '']], answer: '(예) 오후 1시, 오후 4시, 오후 5시 전' }] },
      }),
      M('activity.crowd-order', {
        title: '붐비는 곳 몸 지키는 차례', method: '붐비는 곳에서 몸 지키는 차례', tool: 'timeline', minutes: 16,
        levels: { easy: '행동 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 차례로 놓고 행동마다 까닭 카드를 단다.', challenge: '함정 카드(밀기·사진 찍으려 멈추기)가 섞인 판에서 함정을 걸러 내고 차례를 놓는다.' },
        activity: {
          title: '붐비는 곳에서 몸 지키는 차례', tool: 'timeline',
          teacher: '"축제장에 들어가기 전부터 나올 때까지 무엇을 먼저 해야 할까요?" 카드를 놓은 뒤 행동마다 까닭을 말하게 한다. "앞사람이 멈추면 밀어서라도 가야 한다"는 학생에게 "내가 민 힘은 맨 앞 사람에게 어떻게 전해질까요?"라고 되묻는다. 출구 확인과 모일 곳 정하기는 들어가기 전에 해야 한다는 점을 짚는다.',
          task: '붐비는 축제장에 들어가기 전부터 나올 때까지 할 행동 카드를 차례로 놓고 까닭을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('축제장에서 몸을 지키는 행동을 차례대로 놓으세요.', IN, { axis: ['들어가기 전', '나올 때'] }),
              OB('축제장 행동 카드 3장을 차례대로 놓으세요.', pickCards(IN, ['exit', 'flow', 'early']), { axis: ['들어가기 전', '나올 때'] }),
              OB('함정 카드 2장은 빼고 행동 카드를 차례대로 놓으세요.', IN, { axis: ['들어가기 전', '나올 때'] }, TRAP)),
            IT(MB('행동마다 알맞은 까닭을 이어 보세요.', [['출구 확인하기', '몰릴 때 빠져나갈 길을 안다'], ['모일 곳 정하기', '흩어져도 찾아 헤매지 않는다'], ['흐름 따라 걷기', '거슬러 가면 서로 부딪친다'], ['가장자리로 빠지기', '가운데보다 덜 밀린다']], ['사진을 더 잘 찍을 수 있다'], { axis: ['들어가기 전', '나올 때'] }),
              MB('행동 두 개에 알맞은 까닭을 이어 보세요.', [['출구 확인하기', '몰릴 때 빠져나갈 길을 안다'], ['모일 곳 정하기', '흩어져도 찾아 헤매지 않는다']], [], { axis: ['들어가기 전', '나올 때'] })),
            IT(OB('공연이 끝난 뒤 나올 때의 행동을 차례대로 놓으세요.', [{ id: 'wait', text: '자리에서 잠시 기다리기' }, { id: 'look', text: '가까운 출구 다시 보기' }, { id: 'walk', text: '사람이 줄면 걸어 나가기' }, { id: 'meetup', text: '모일 곳에서 친구 만나기' }], { axis: ['끝난 직후', '밖에서'] }),
              OB('나올 때 행동 카드 3장을 차례대로 놓으세요.', [{ id: 'wait', text: '자리에서 잠시 기다리기' }, { id: 'walk', text: '사람이 줄면 걸어 나가기' }, { id: 'meetup', text: '모일 곳에서 친구 만나기' }], { axis: ['끝난 직후', '밖에서'] }),
              null, { conclude: '붐비는 곳은 들어가기 전에 출구와 모일 곳을 정하고, 흐름을 따라 걷다 답답하면 일찍 빠져나와요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '축제장에 들어가기 전에 먼저 할 일은?', options: ['사진 찍을 자리 잡기', '출구와 모일 곳 확인하기', '가장 앞자리로 가기'], answer: '출구와 모일 곳 확인하기' }] },
      }),
      M('activity.crowd-dilemma', {
        title: '골목이 붐빌 때 갈림길', method: '골목이 붐빌 때 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 일찍 빠져나오는 근거를 고른다.', challenge: '갈림길 3번까지 가며 친구를 설득할 말을 고르고, 주변 사람을 지키는 근거까지 고른다.' },
        activity: {
          title: '골목이 붐빌 때 갈림길', tool: 'dilemma',
          teacher: '"공연을 놓치는 것과 사람 사이에 끼이는 것, 무엇이 더 큰 손해일까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "사람이 많으면 서로 지켜 준다"는 학생에게 "앞이 안 보일 때 뒤에서 미는 힘은 누가 멈출 수 있을까요?"라고 되묻는다. 일찍 빠져나오는 것이 겁쟁이가 아니라 판단이라는 점을 짚는다.',
          task: '붐비는 길에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '골목이 점점 붐벼요. 한 번 골라 결과를 보세요.', base: '골목이 점점 붐벼요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '골목이 점점 붐벼요. 세 번 골라 친구를 설득하는 길까지 가고, 근거를 고르세요.' },
              '붐비는 골목', C1, [['side', 'persuade', 'plan']], CR, ['r1', 'r2'], PERSUADE),
            DIL({ easy: '축제가 끝나 출구로 몰려요. 한 번 골라 결과를 보세요.', base: '축제가 끝나 출구로 몰려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '축제가 끝나 출구로 몰려요. 끝까지 가고, 주변 사람을 지키는 근거도 고르세요.' },
              '축제 끝 출구', C2, [['other', 'meetpt'], ['wait']], C2R, ['r1', 'r2'], PERSUADE),
            DIL({ easy: '다리 위가 꽉 찼어요. 한 번 골라 결과를 보세요.', base: '다리 위가 꽉 찼어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '다리 위가 꽉 찼어요. 끝까지 가고, 친구를 지키는 근거도 고르세요.' },
              '불꽃놀이 다리', C3, [['no', 'earlyout']], C3R, ['r1', 'r2'], PERSUADE, { conclude: '위험을 느끼면 일찍 빠져나오고, 밀지 말고 멈추라고 알리는 것이 나와 다른 사람을 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '붐비는 골목에서 "계속 가자"는 친구에게 할 말을 한 문장으로 써요.' }] },
      }),
      M('wrap.crowd-words', {
        title: '붐비는 곳 행동 문장 만들기', method: '붐비는 곳 행동 낱말로 문장 만들기', tool: 'wordcards', minutes: 7,
        levels: { easy: '문장 틀 2개에 낱말 카드를 넣는다.', base: '문장 3개를 낱말 카드로 완성한다.', challenge: '같은 낱말로 친구에게 보낼 안내 문자 3개를 완성한다.' },
        wrap: {
          teacher: '"오늘 배운 행동을 친구에게 한 줄로 알려 준다면 어떤 낱말이 꼭 들어가야 할까요?" 출구·모일 곳·흐름·가장자리 낱말로 문장을 완성하게 하고, 완성한 문장을 소리 내어 읽게 한다. "사람이 많으면 안전하다"는 생각이 남아 있는 학생에게 오늘 본 그래프의 가장 높은 막대를 다시 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '들어가기 전에 ___부터 확인해요.' }, { id: 'f2', label: '흩어지면 정해 둔 ___에서 만나요.' }, { id: 'f3', label: '답답하면 ___로 빠져요.' }], cards: [{ id: 'w1', text: '출구' }, { id: 'w2', text: '모일 곳' }, { id: 'w3', text: '가장자리' }, { id: 'w4', text: '맨 앞' }] },
              prompt: '낱말 카드로 붐비는 곳 행동 문장 세 개를 완성해요.', target: { fill: { f1: 'w1', f2: 'w2', f3: 'w3' } }, difficulty: 0.2 },
            { prompt: '낱말 카드로 붐비는 곳 행동 문장 두 개를 완성해요.', toolOptions: { slots: [{ id: 'f1', label: '들어가기 전에 ___부터 확인해요.' }, { id: 'f2', label: '흩어지면 정해 둔 ___에서 만나요.' }], cards: [{ id: 'w1', text: '출구' }, { id: 'w2', text: '모일 곳' }, { id: 'w4', text: '맨 앞' }] }, target: { fill: { f1: 'w1', f2: 'w2' } } },
            { prompt: '친구에게 보낼 안내 문자 세 개를 낱말 카드로 완성해요.', toolOptions: { slots: [{ id: 'f1', label: '[문자] 도착하면 ___ 위치부터 같이 보자!' }, { id: 'f2', label: '[문자] 혹시 흩어지면 ___에서 만나.' }, { id: 'f3', label: '[문자] ___을 거슬러 가지 말자.' }], cards: [{ id: 'w1', text: '출구' }, { id: 'w2', text: '모일 곳' }, { id: 'w3', text: '흐름' }, { id: 'w4', text: '맨 앞' }] }, target: { fill: { f1: 'w1', f2: 'w2', f3: 'w3' } } }),
            { type: 'choice', prompt: '붐비는 곳에서 앞사람이 갑자기 멈췄다. 가장 알맞은 행동은?', options: ['밀어서 길을 연다', '나도 멈추고 "멈춰요"라고 뒤에 알린다', '옆 사람 어깨를 잡고 넘어간다'], answer: 1, difficulty: 0.2, explain: '밀면 힘이 앞사람들에게 퍼져요. 멈추고 알려요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '붐비는 곳에서 나를 지키기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 낱말을 써요.', text: '붐비는 곳에 들어가기 전에 ___와 모일 곳을 확인해요.', answer: '출구' },
            { type: 'short', prompt: '\'흐름\'과 \'가장자리\'를 넣어 붐비는 곳 행동 문장을 하나 써요.' },
          ],
        },
      }),
      M('wrap.campaign-writing', {
        title: '축제 안전 문구 쓰고 점검', method: '축제 안전 캠페인 문구와 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '보기 문구("밀지 마세요")를 행동이 드러나게 고쳐 쓴다.', base: '포스터 문구 두 줄을 쓰고 기준 3개(짧은가·행동이 있나·겁주지 않나)를 점검한다.', challenge: '다른 모둠 문구를 기준표로 평가하는 점검 항목까지 표시한다.' },
        wrap: {
          teacher: '"\'압사 조심!\'과 \'붐비면 가장자리로, 답답하면 일찍 나와요\' 가운데 어느 문구가 행동을 바꿀까요?" 두 문구를 견주어 읽고 학교 축제 포스터에 넣을 안전 문구 두 줄을 쓰게 한다. 겁주는 말보다 할 행동이 들어간 말이 오래 남는다는 점을 짚는다. 이름·반 번호는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '학교 축제 포스터에 넣을 안전 문구를 두 줄(두 문장)로 쓰세요.', minChars: 20, maxChars: 120, minSentences: 2, maxSentences: 2, title: '축제 안전 문구' },
              prompt: '축제 안전 문구 두 줄을 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['한 줄이 짧다', '해야 할 행동이 들어 있다', '겁주는 말 대신 할 일을 썼다'] }, difficulty: 0.3 },
            { prompt: '보기 문구 "밀지 마세요"를 할 행동이 드러나게 두 줄로 고쳐 쓰고 기준표에 표시해요.', toolOptions: { starter: '밀지 마세요 → 앞사람이 멈추면 ___. 답답하면 ___.' } },
            { prompt: '내 문구를 쓴 뒤 짝 모둠 문구도 같은 기준으로 평가하고 기준표에 표시해요.', target: { selfCheck: ['한 줄이 짧다', '해야 할 행동이 들어 있다', '겁주는 말 대신 할 일을 썼다', '다른 모둠 문구를 기준으로 평가했다'] } }),
            { type: 'choice', prompt: '포스터 문구로 가장 알맞은 것은?', options: ['큰일 나기 싫으면 조심해!', '붐비면 가장자리로, 답답하면 일찍 나와요.', '축제는 즐겁게!'], answer: 1, difficulty: 0.2, explain: '짧고, 할 행동이 들어 있고, 겁주지 않는 문구가 좋아요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '축제 안전 캠페인',
          items: [
            { type: 'short', prompt: '학교 축제 포스터에 넣을 안전 문구 두 줄을 써요.' },
            { type: 'check', prompt: '내 문구를 기준표로 점검해요.', options: ['한 줄이 짧다', '해야 할 행동이 있다', '겁주지 않는다'] },
          ],
          easy: { note: '보기 문구를 고쳐 써도 돼요.', items: [{ type: 'blank', prompt: '보기 문구를 고쳐 써요.', text: '밀지 마세요 → 앞사람이 멈추면 ___.', answer: '(예) 나도 멈춰요' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 식중독 예방과 상황별 식품 보관 (saf-life.m.food-poisoning) ====
  {
    const M = MK('food-poisoning', [8]);
    const RULES = ['손 씻기', '익혀 먹기', '나눠 담기', '차게 보관'];
    const SCN = [
      { id: 'a', text: '화장실 다녀와 바로 간식 집기', to: '손 씻기' }, { id: 'b', text: '덜 익은 닭꼬치를 그냥 먹기', to: '익혀 먹기' },
      { id: 'c', text: '날고기 집던 집게로 익은 고기 집기', to: '나눠 담기' }, { id: 'd', text: '우유를 햇볕 아래 가방에 두기', to: '차게 보관' },
      { id: 'e', text: '흙 만진 손으로 과일 깎기', to: '손 씻기' }, { id: 'f', text: '김밥을 차 안에 반나절 두기', to: '차게 보관' },
    ];
    // 캠프 간식 가격은 수업용 가상 값이다
    const SNACK = [
      { id: 'water', text: '생수', price: 1000 }, { id: 'cracker', text: '크래커', price: 1500 }, { id: 'apple', text: '사과', price: 2000 },
      { id: 'nuts', text: '견과류 봉지', price: 2500 }, { id: 'gimbap', text: '김밥', price: 3000 }, { id: 'milk', text: '우유', price: 1200 },
      { id: 'cream', text: '크림빵', price: 1800 }, { id: 'banana', text: '바나나', price: 1500 }, { id: 'sand', text: '달걀 샌드위치', price: 2500 }, { id: 'jelly', text: '젤리', price: 1000 },
    ];
    const PERISH = ['gimbap', 'milk', 'cream', 'sand'];
    const BUD = (prompt, items, budget, target, ask) => ({ prompt, toolOptions: { mode: 'budget', items, budget, ask }, target: { budget: target } });
    const COOK = [{ id: 'hw', text: '손 씻기' }, { id: 'raw', text: '날고기 손질하기' }, { id: 'board', text: '도마·칼 씻기' }, { id: 'veg', text: '채소 손질하기' }, { id: 'cook', text: '속까지 충분히 익히기' }, { id: 'eat', text: '익힌 뒤 바로 먹기' }];
    const S1 = { text: '캠프 둘째 날 아침, 친구 서진이 배가 아프고 속이 메스껍다고 한다. 어젯밤 같이 먹은 닭볶음이 덜 익었던 것 같다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'endure', text: '"조금 참아 봐"라고 한다', result: '서진이 혼자 참으며 점심을 거른다.', impact: [{ who: '서진', text: '더 아파질 수 있다', tone: -1 }], why: '증상이 있으면 참지 말고 어른에게 바로 알려요.', end: '알리지 않아 서진이 더 힘들어졌어요.',
        next: { text: '점심때 서진이 더 아파 보인다.', choices: [
          { id: 'still', text: '계속 참으라고 한다', result: '서진이 쓰러질 듯 어지러워한다.', impact: [{ who: '서진', text: '위험해진다', tone: -1 }] },
          { id: 'tellnow', text: '지금이라도 인솔 선생님께 알린다', result: '늦었지만 선생님이 서진을 돌본다.', impact: [{ who: '서진', text: '돌봄을 받는다', tone: 1 }] }] } },
      { id: 'pill', text: '내가 가진 약을 나눠 준다', result: '서진이 약을 먹었지만 나아지지 않는다.', impact: [{ who: '서진', text: '맞지 않는 약일 수 있다', tone: -1 }], why: '증상에 맞는지 모르는 약은 나누지 않아요. 어른에게 알려요.', end: '약만 나눠 주고 알리지 않았어요.',
        next: { text: '서진이 약을 먹고도 계속 아프다.', choices: [
          { id: 'more', text: '약을 하나 더 준다', result: '서진이 더 불안해한다.', impact: [{ who: '서진', text: '더 위험할 수 있다', tone: -1 }] },
          { id: 'tell2', text: '인솔 선생님께 알린다', result: '선생님이 보건 담당 선생님께 연락한다.', impact: [{ who: '서진', text: '돌봄을 받는다', tone: 1 }] }] } },
      { id: 'teacher', text: '인솔 선생님께 바로 알린다', result: '선생님이 서진을 쉬게 하고 몸 상태를 살핀다.', impact: [{ who: '서진', text: '바로 돌봄을 받는다', tone: 1 }], end: '바로 알려 서진이 돌봄을 받았어요.',
        next: { text: '선생님이 같은 음식을 먹은 사람이 또 있는지 묻는다.', choices: [
          { id: 'hide', text: '혼날까 봐 나도 먹었다는 말을 하지 않는다', result: '선생님이 누가 먹었는지 다 알지 못한다.', impact: [{ who: '같이 먹은 친구들', text: '제때 살핌을 못 받는다', tone: -1 }], why: '같은 음식을 먹은 사람을 알려야 모두를 살필 수 있어요.' },
          { id: 'raise', text: '"저도 먹었고 다른 친구 둘도 먹었어요"라고 말한다', result: '선생님이 그 친구들의 몸 상태도 살핀다.', impact: [{ who: '같이 먹은 친구들', text: '함께 살핌을 받는다', tone: 1 }], end: '같이 먹은 친구들도 살필 수 있었어요.',
            next: { text: '선생님이 남은 닭볶음은 먹지 말라고 했는데, 친구들이 아깝다며 먹으려 한다.', choices: [
              { id: 'stopeat', text: '"먹지 말자"고 말린다', result: '아무도 남은 음식을 먹지 않는다.', impact: [{ who: '친구들', text: '아프지 않는다', tone: 1 }] },
              { id: 'eatleft', text: '같이 조금 먹는다', result: '저녁에 배 아픈 친구가 늘어난다.', impact: [{ who: '친구들', text: '아플 수 있다', tone: -1 }], why: '의심되는 음식은 아까워도 먹지 않아요.' }] } }] } }] };
    const S1R = [{ id: 'r1', text: '증상이 있으면 어른에게 바로 알려야 빨리 돌볼 수 있다' }, { id: 'r2', text: '증상에 맞는지 모르는 약은 나누지 않는다' },
      { id: 'r3', text: '배탈은 참으면 저절로 낫는다', why: '참는 동안 더 나빠질 수 있어요.' }, { id: 'r4', text: '혼나지 않게 숨기는 편이 낫다', why: '숨기면 나와 친구들 모두 살핌을 못 받아요.' }];
    const S2 = { text: '체험학습 날 도시락 반찬에서 쉰 냄새가 조금 난다. 친구가 "전자레인지에 데우면 괜찮아"라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'heat', text: '데워서 먹는다', result: '따뜻해졌지만 오후에 배가 살살 아프다.', impact: [{ who: '나', text: '배탈이 날 수 있다', tone: -1 }], why: '상한 음식은 데워도 안전해지지 않아요.', end: '데워 먹었다가 배가 아팠어요.',
        next: { text: '오후 활동 중 배가 아프다.', choices: [
          { id: 'hidepain', text: '활동을 빠지기 싫어 말하지 않는다', result: '점점 더 아파진다.', impact: [{ who: '나', text: '더 아파진다', tone: -1 }] },
          { id: 'tellpain', text: '인솔 선생님께 알린다', result: '선생님이 쉬게 해 준다.', impact: [{ who: '나', text: '돌봄을 받는다', tone: 1 }] }] } },
      { id: 'smell', text: '냄새를 맡아 보고 괜찮은 것만 골라 먹는다', result: '냄새가 없던 반찬도 같은 통에 있었다.', impact: [{ who: '나', text: '안전을 장담할 수 없다', tone: -1 }], why: '냄새나 겉모습만으로는 안전을 판단할 수 없어요.', ending: '냄새로 골라 먹었지만 안심할 수 없었어요.' },
      { id: 'throw', text: '그 반찬은 먹지 않고 버린다', result: '밥이 조금 모자란다.', impact: [{ who: '나', text: '배탈을 피한다', tone: 1 }], end: '의심되는 반찬을 먹지 않았어요.',
        next: { text: '점심이 부족해 배가 고프다.', choices: [
          { id: 'buy', text: '매점 크림빵을 사서 햇볕 아래 두었다가 오후에 먹는다', result: '크림빵이 더운 곳에서 오래 있었다.', impact: [{ who: '나', text: '또 상한 음식을 먹을 수 있다', tone: -1 }], why: '더운 날 들고 다닌 음식은 더 빨리 상해요.' },
          { id: 'share', text: '친구와 상하지 않은 반찬을 나눠 먹는다', result: '둘 다 든든하게 먹는다.', impact: [{ who: '친구', text: '함께 나눈다', tone: 1 }], end: '안전한 반찬을 나눠 먹었어요.',
            next: { text: '친구가 아까 그 반찬을 한 입 먹었다며 걱정한다.', choices: [
              { id: 'tellt', text: '선생님께 알리고 몸 상태를 지켜보자고 한다', result: '선생님이 친구를 살핀다.', impact: [{ who: '친구', text: '안심한다', tone: 1 }] },
              { id: 'ignore', text: '"괜찮을 거야" 하고 넘긴다', result: '친구가 혼자 걱정한다.', impact: [{ who: '친구', text: '살핌을 못 받는다', tone: -1 }], why: '증상이 생길 수 있으니 어른에게 알려 두어요.' }] } }] } }] };
    const S2R = [{ id: 'r1', text: '상한 음식은 데워도 안전해지지 않는다' }, { id: 'r2', text: '냄새나 겉모습만으로 안전을 판단할 수 없다' },
      { id: 'r3', text: '끓이거나 데우면 무엇이든 안전하다', why: '데워도 이미 상한 음식은 안전해지지 않아요.' }, { id: 'r4', text: '아까우니 조금만 먹는다', why: '조금만 먹어도 탈이 날 수 있어요.' }];
    const S3 = { text: '캠프 저녁 바비큐. 배고픈 친구들이 겉만 익은 고기를 먼저 먹자고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'eatnow', text: '겉만 익은 고기를 먹는다', result: '속이 붉은 고기를 먹었다.', impact: [{ who: '나', text: '배탈이 날 수 있다', tone: -1 }], why: '고기는 속까지 익혀 먹어요.', ending: '덜 익은 고기를 먹어 위험했어요.' },
      { id: 'sauce', text: '소스를 듬뿍 발라 익은 것처럼 먹는다', result: '맛은 좋지만 속은 덜 익었다.', impact: [{ who: '친구들', text: '탈이 날 수 있다', tone: -1 }], why: '소스는 덜 익은 것을 가려 줄 뿐이에요.', ending: '소스로 가렸지만 덜 익었어요.' },
      { id: 'cookmore', text: '속까지 익을 때까지 더 굽자고 한다', result: '조금 기다려 속까지 익힌다.', impact: [{ who: '친구들', text: '안전하게 먹는다', tone: 1 }], end: '속까지 익혀 먹었어요.',
        next: { text: '날고기를 집던 집게로 익은 고기를 접시에 옮기려 한다.', choices: [
          { id: 'same', text: '그 집게로 그대로 옮긴다', result: '익은 고기에 날고기 즙이 묻는다.', impact: [{ who: '친구들', text: '탈이 날 수 있다', tone: -1 }], why: '날음식 도구와 익힌 음식 도구를 나눠 써요.' },
          { id: 'clean', text: '익힌 고기용 집게를 따로 쓴다', result: '익은 고기를 깨끗이 옮긴다.', impact: [{ who: '친구들', text: '안전하게 먹는다', tone: 1 }], end: '도구를 나눠 써서 안전했어요.',
            next: { text: '다 먹고 고기가 남았다. 친구가 밤새 탁자 위에 두자고 한다.', choices: [
              { id: 'leave', text: '내일 아침에 먹으려고 그대로 둔다', result: '밤새 바깥에 놓인다.', impact: [{ who: '친구들', text: '상한 고기를 먹을 수 있다', tone: -1 }], why: '익힌 음식도 오래 두면 상해요.' },
              { id: 'cool', text: '바로 아이스박스에 넣거나 버린다', result: '남은 음식이 바깥에 오래 놓이지 않는다.', impact: [{ who: '친구들', text: '탈을 피한다', tone: 1 }] }] } }] } }] };
    const S3R = [{ id: 'r1', text: '고기는 속까지 익혀야 안전하다' }, { id: 'r2', text: '날음식 도구와 익힌 음식 도구를 나눈다' },
      { id: 'r3', text: '배고프면 조금 덜 익어도 괜찮다', why: '배고픔보다 안전이 먼저예요.' }, { id: 'r4', text: '소스를 바르면 균이 없어진다', why: '소스는 익힘을 대신하지 못해요.' }];
    const MORE = { reasons: [{ id: 'r5', text: '같은 음식을 먹은 다른 친구들도 함께 살펴야 한다' }, { id: 'r6', text: '의심되는 음식을 치워야 아픈 사람이 늘지 않는다' }], ok: ['r5', 'r6'] };
    const CAUSE = [{ id: 'h1', text: '먹기 전 비누로 손 씻기' }, { id: 'h2', text: '화장실 뒤 손 씻기' }, { id: 'c1', text: '고기는 속까지 익히기' }, { id: 'c2', text: '덜 익은 것은 다시 굽기' }, { id: 't1', text: '들고 다닐 음식은 차게' }, { id: 't2', text: '오래 둔 음식은 버리기' }];

    ALL.push(
      M('intro.lunchbox-case', {
        title: '도시락 사례에서 원인 짐작', method: '도시락 사례에서 원인 짐작하기', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장만 보고 배탈 원인이 될 장면 하나를 고른다.', base: '장면 4장에서 원인이 될 장면을 모두 고르고 원인을 말한다.', challenge: '고른 장면의 원인 두 가지 이상을 묶어(더운 곳 + 손) 설명한다.' },
        intro: {
          teacher: '"이 모둠은 왜 오후에 배가 아팠을까요?" 체험학습 날 김밥 도시락을 버스 짐칸에 두었다가 점심에 먹은 가상 모둠 이야기를 넘겨 보이고, 시연 단추로 원인이 될 장면이 바구니에 담기는 모습을 보인다. "김밥이 원래 상한 거였어요"라는 말에는 "아침에 쌀 때는 멀쩡했다면, 그 뒤 어디서 바뀌었을까요?"라고 되묻는다. 식중독은 여름에만이 아니라 보관과 손 씻기를 놓치면 언제든 생긴다는 점을 오늘의 질문으로 삼는다.',
          student: '가상 모둠의 도시락 이야기를 보고, 배탈 원인이 될 만한 장면을 골라 무엇이 문제였는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '원인이 될 장면', title: '체험학습 도시락', cards: [
            { id: 's1', text: '아침에 김밥을 싸서 가방에 넣는다', motif: 'sun' }, { id: 's2', text: '버스 짐칸이 햇볕에 뜨거워진다', motif: 'sun' },
            { id: 's3', text: '손을 씻지 않고 김밥을 집어 먹는다', motif: 'leaf' }, { id: 's4', text: '남은 김밥을 돌아오는 길에 또 먹는다', motif: 'cloud' }], shuffle: false }, sequence: [{ pick: ['s2', 's3', 's4'] }] },
          art: { draw: 'a paper-cut school bus luggage compartment under a hot sun with a lunch box of kimbap rolls inside and students looking worried', banner: '배탈은 어디서 시작됐을까?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 가상이다. 학생이 식중독을 겪은 일을 묻지 않는다.',
      }),
      M('intro.hand-timer', {
        title: '손 씻기 차례와 시간 맞추기', method: '손 씻기 시간 맞추기', tool: 'timer', minutes: 6,
        levels: { easy: '손 씻기 순서 카드 3장만 놓는다.', base: '카드 5장을 놓고 구간 타이머로 비누칠 시간을 맞춰 직접 해 본다.', challenge: '놓치기 쉬운 부위(손가락 사이·손톱 밑·엄지)를 덧붙여 말한다.' },
        intro: {
          teacher: '"물만 묻히고 바로 닦으면 손이 깨끗해졌을까요?" 손 씻기 순서 카드를 차례로 놓고, 시연 단추로 비누칠 구간 타이머가 맞춰지는 모습을 보인 뒤 반 전체가 손을 문지르는 동작을 함께 해 본다. "물로만 헹궈도 돼요"라는 말에는 "비누 거품 없이 손가락 사이까지 닦였을까요?"라고 되묻는다. 비누칠 시간은 학급이 정한 연습 시간으로 맞춘다.',
          student: '손 씻기 차례 카드를 놓고, 타이머가 도는 동안 손바닥·손등·손가락 사이·손톱 밑을 문지르는 동작을 따라 해요.',
          demo: { tool: 'timer', options: { title: '손 씻기 연습', cards: ['흐르는 물로 헹구기', '손 적시기', '깨끗한 수건으로 말리기', '비누 거품 내기', '손가락 사이·손톱 문지르기'], plan: { work: 10, rest: 5, rounds: 1 } },
            sequence: [{ order: ['손 적시기', '비누 거품 내기', '손가락 사이·손톱 문지르기', '흐르는 물로 헹구기', '깨끗한 수건으로 말리기'], plan: { work: 30, rest: 5, rounds: 1 } }] },
          art: { draw: 'paper-cut hands with soap bubbles under a running tap, a small paper timer beside the sink', banner: '거품 내고, 문지르고, 헹구고!', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '비누칠 30초는 학급 연습용으로 정한 값이다(근거 파일에 수치 없음 — 학교 보건 지침에 맞춰 바꾼다).',
      }),
      M('activity.rule-match', {
        title: '예방 수칙과 사례 짝짓기', method: '예방 수칙과 사례 장면 짝짓기', tool: 'wordcards', minutes: 16,
        levels: { easy: '사례 장면 4장을 수칙 칸에 넣고, 놓으면 바로 맞는지 알려 준다.', base: '사례 장면 6장을 네 수칙 칸에 넣고, 어긴 수칙이 둘인 장면을 고른다.', challenge: '어긴 수칙이 둘인 장면을 고른 뒤 활동지에 두 수칙을 들어 설명한다.' },
        activity: {
          title: '예방 수칙과 사례 짝짓기', tool: 'wordcards',
          teacher: '"이 장면에서 어긴 수칙은 무엇일까요? 하나뿐일까요?" 사례 카드를 수칙 칸에 넣을 때마다 그 장면을 어떻게 바꾸면 되는지 한 사람씩 말하게 한다. "겉보기에 멀쩡하면 괜찮다"는 학생에게 "햇볕 아래 반나절 있던 우유는 겉으로 달라 보일까요?"라고 되묻는다. 실제 장면에서는 수칙 두세 개를 함께 어기는 일이 많다는 점을 짚는다.',
          task: '식중독 예방 수칙 칸에 사례 장면을 넣고, 어긴 수칙이 둘인 장면을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('사례 장면을 어긴 수칙 칸에 넣으세요.', RULES, SCN), SB('사례 장면 4장을 어긴 수칙 칸에 넣으세요.', RULES, pickCards(SCN, ['a', 'b', 'c', 'd']))),
            IT(PB('어긴 수칙이 두 개인 장면만 골라 담으세요.', '수칙 둘을 어긴 장면', [
              { id: 'p1', text: '손 안 씻고 덜 익은 고기 먹기', ok: true }, { id: 'p2', text: '날고기 도마에 썬 과일을 실온에 둠', ok: true },
              { id: 'p3', text: '손 씻고 바로 익힌 밥 먹기' }, { id: 'p4', text: '햇볕 아래 둔 우유 마시기' }, { id: 'p5', text: '아이스박스에 넣은 샌드위치 먹기' }])),
            IT(FB('낱말 카드를 넣어 예방 수칙 문장을 완성하세요.', [['도마는 날음식용과 익힌 음식용을 ___.', '나눠 써요'], ['고기는 속까지 ___.', '익혀 먹어요'], ['들고 다닐 음식은 ___.', '차게 보관해요']], ['오래 둬요']),
              FB('낱말 카드를 넣어 예방 수칙 문장 두 개를 완성하세요.', [['고기는 속까지 ___.', '익혀 먹어요'], ['들고 다닐 음식은 ___.', '차게 보관해요']], ['오래 둬요']),
              null, { conclude: '손 씻기·익혀 먹기·나눠 담기·차게 보관하기 — 장면 하나에서 여러 수칙을 함께 지켜야 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '어긴 수칙이 둘인 장면 하나를 골라, 어긴 두 수칙과 고칠 방법을 써요.' }],
          easy: [{ type: 'choice', prompt: '\'덜 익은 닭꼬치\' 장면에서 어긴 수칙은?', options: ['익혀 먹기', '차게 보관'], answer: '익혀 먹기' }] },
      }),
      M('activity.camp-budget', {
        title: '캠프 간식 예산과 보관', method: '캠프 간식 장보기 예산과 보관', tool: 'economy', minutes: 16,
        levels: { easy: '물건 6개 가운데 예산 안에서 실온에 둬도 되는 간식을 고른다.', base: '물건 10개 가운데 예산을 맞추며 아이스박스 없이도 안전한 간식을 고른다.', challenge: '아이스박스가 없는 날과 있는 날, 보관 조건이 다른 두 날 계획을 견준다(활동지 표).' },
        activity: {
          title: '캠프 간식 예산과 보관', tool: 'economy',
          teacher: '"아이스박스가 없는 1박 2일 캠프라면 어떤 간식부터 골라야 할까요?" 학생이 고를 때마다 그 간식을 반나절 들고 다녀도 괜찮은지 말하게 한다. "냉장고에 넣었다 꺼낸 거니까 괜찮아요"라는 학생에게 "버스와 텐트 안에서 몇 시간을 보내면 어떻게 될까요?"라고 되묻는다. 값은 수업용 가상 값이라는 점을 밝힌다.',
          task: '정해진 예산 안에서 캠프 간식을 고르되, 보관 조건에 맞는 간식을 먼저 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(BUD('아이스박스가 없는 첫날이에요. 8,000원 안에서 생수를 꼭 넣고, 상하기 쉬운 간식은 빼고 고르세요.', SNACK, 8000, { must: ['water'], not: PERISH, min: 5000 }, '아이스박스 없는 첫날 간식'),
              BUD('아이스박스가 없는 첫날이에요. 5,000원 안에서 생수를 꼭 넣고, 상하기 쉬운 간식은 빼고 고르세요.', pickCards(SNACK, ['water', 'cracker', 'apple', 'gimbap', 'milk', 'banana']), 5000, { must: ['water'], not: ['gimbap', 'milk'], min: 3000 }, '아이스박스 없는 첫날 간식')),
            IT(BUD('둘째 날 낮 산책 간식이에요. 5,000원 안에서 생수를 넣어 실온에 둬도 되는 것으로 딱 3개 고르세요.', SNACK, 5000, { must: ['water'], not: PERISH, count: 3 }, '산책 간식 3개')),
            IT(BUD('이번엔 아이스박스가 있는 날이에요. 6,000원 안에서 우유를 꼭 넣어 고르세요(우유는 바로 아이스박스에).', SNACK, 6000, { must: ['milk'], min: 3000 }, '아이스박스 있는 날 간식'),
              null, null, { conclude: '같은 간식이라도 보관 조건에 따라 고를 수 있는 것이 달라져요. 상하기 쉬운 음식은 차게 둘 수 있을 때만 골라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '보관 조건이 다른 두 날에 고를 간식을 써요.', columns: ['날', '고른 간식'], cells: [['아이스박스 없는 날', ''], ['아이스박스 있는 날', '']], answer: '(예) 생수·크래커·사과 / 우유·샌드위치(바로 아이스박스에)' }] },
      }),
      M('activity.kitchen-order', {
        title: '캠프 조리 순서 세우기', method: '캠프 조리 순서 세우기', tool: 'kitchen', minutes: 16,
        levels: { easy: '조리 순서 카드 4장을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 바른 차례로 놓는다.', challenge: '도마가 하나뿐일 때 채소를 먼저 손질하도록 순서를 바꿔 놓는다.' },
        activity: {
          title: '캠프 조리 순서 세우기', tool: 'kitchen',
          teacher: '"날고기를 썬 도마에 바로 채소를 썰면 어떻게 될까요?" 카드를 놓은 뒤 순서를 바꾸면 무엇이 위험한지 한 사람씩 말하게 한다. "끓이면 다 괜찮다"는 학생에게 "볶기 전에 생으로 먹는 채소에 날고기 즙이 묻으면 어떻게 될까요?"라고 되묻는다. 도마가 하나뿐일 때는 채소를 먼저 손질한다는 점을 짚는다.',
          task: '캠프에서 고기 볶음을 만드는 순서 카드를 차례로 놓고, 날음식과 익힌 음식 도구를 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('고기 볶음을 만드는 순서 카드를 차례대로 놓으세요(도마가 둘).', COOK),
              OB('고기 볶음을 만드는 순서 카드 4장을 차례대로 놓으세요.', pickCards(COOK, ['hw', 'raw', 'cook', 'eat'])),
              OB('도마가 하나뿐이에요. 채소를 먼저 손질하도록 순서 카드를 놓으세요.', pickCards(COOK, ['hw', 'veg', 'raw', 'board', 'cook', 'eat']))),
            IT(SB('도구와 그릇을 날음식용과 익힌 음식용으로 나누세요.', ['날음식용', '익힌 음식용'], [
              { id: 'd1', text: '날고기 담은 접시', to: '날음식용' }, { id: 'd2', text: '구운 고기 담을 접시', to: '익힌 음식용' }, { id: 'd3', text: '생선 손질한 칼', to: '날음식용' },
              { id: 'd4', text: '샐러드 집는 집게', to: '익힌 음식용' }, { id: 'd5', text: '날달걀 깬 그릇', to: '날음식용' }, { id: 'd6', text: '밥 푸는 주걱', to: '익힌 음식용' }], { groups: false }),
              SB('도구 4개를 날음식용과 익힌 음식용으로 나누세요.', ['날음식용', '익힌 음식용'], [
                { id: 'd1', text: '날고기 담은 접시', to: '날음식용' }, { id: 'd2', text: '구운 고기 담을 접시', to: '익힌 음식용' }, { id: 'd3', text: '생선 손질한 칼', to: '날음식용' }, { id: 'd6', text: '밥 푸는 주걱', to: '익힌 음식용' }], { groups: false })),
            IT(PB('먹고 남은 고기 볶음에 할 일만 골라 담으세요.', '남은 음식에 할 일', [
              { id: 'k1', text: '바로 아이스박스에 넣기', ok: true }, { id: 'k2', text: '오래 놓였으면 버리기', ok: true },
              { id: 'k3', text: '내일 아침에 그냥 먹기' }, { id: 'k4', text: '냄새가 괜찮으면 먹기' }]),
              null, null, { conclude: '손 씻기부터 시작해 날음식 도구를 나누고, 속까지 익혀 바로 먹어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '도마가 하나뿐일 때 먼저 손질할 재료는?', options: ['날고기', '채소', '아무것이나'], answer: '채소' }] },
      }),
      M('activity.symptom-dilemma', {
        title: '배가 아픈 친구 갈림길', method: '배가 아픈 친구 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번까지 가며 같은 음식을 먹은 다른 친구들까지 생각한 근거를 고른다.' },
        activity: {
          title: '배가 아픈 친구 갈림길', tool: 'dilemma',
          teacher: '"친구가 배가 아프다고 할 때, 내 약을 나눠 주는 것은 돕는 일일까요?" 학생마다 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "끓이면 상한 음식도 안전해진다"는 학생에게 "이미 상한 음식은 데운다고 원래대로 돌아올까요?"라고 되묻는다. 같은 음식을 먹은 사람을 알리는 것이 모두를 지키는 일이라는 점을 짚는다.',
          task: '캠프·체험학습에서 생긴 식중독 의심 상황에서 길을 골라 결과를 따라가고, 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 배가 아프대요. 한 번 골라 결과를 보세요.', base: '친구가 배가 아프대요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 배가 아프대요. 세 번 골라 끝까지 가고, 같이 먹은 친구들을 생각한 근거도 고르세요.' },
              '캠프 둘째 날 아침', S1, [['teacher', 'raise', 'stopeat']], S1R, ['r1', 'r2'], MORE),
            DIL({ easy: '반찬에서 쉰 냄새가 나요. 한 번 골라 결과를 보세요.', base: '반찬에서 쉰 냄새가 나요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '반찬에서 쉰 냄새가 나요. 세 번 골라 끝까지 가고, 친구를 생각한 근거도 고르세요.' },
              '도시락 반찬', S2, [['throw', 'share', 'tellt']], S2R, ['r1', 'r2'], MORE),
            DIL({ easy: '바비큐 고기가 겉만 익었어요. 한 번 골라 결과를 보세요.', base: '바비큐 고기가 겉만 익었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '바비큐 고기가 겉만 익었어요. 세 번 골라 끝까지 가고, 친구들을 생각한 근거도 고르세요.' },
              '캠프 바비큐', S3, [['cookmore', 'clean', 'cool']], S3R, ['r1', 'r2'], MORE, { conclude: '증상이 있으면 바로 어른에게 알리고, 같은 음식을 먹은 사람과 남은 음식까지 함께 살펴요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '캠프에서 친구가 배가 아플 때 인솔 선생님께 전할 말을 한 문장으로 써요.' }] },
      }),
      M('wrap.cause-map', {
        title: '식중독 원인과 수칙 마인드맵', method: '식중독 원인과 수칙 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '원인 가지 2개에 수칙 카드 4장을 잇는다.', base: '원인 가지 3개에 수칙 카드를 두 장씩 잇는다.', challenge: '원인 가지(날음식과 섞임) 하나를 더해 잇고, 계절과 상관없이 생기는 까닭을 써 낸다.' },
        wrap: {
          teacher: '"\'식중독\' 가운데 가지에 어떤 원인을 달 수 있을까요?" 원인 가지마다 그 원인을 막는 수칙을 잇게 한 뒤, 오늘 갈림길에서 고른 행동이 어느 가지에 해당하는지 말하게 한다. "식중독은 여름에만 생긴다"는 말에는 "겨울 캠프에서 손을 안 씻고 덜 익은 고기를 먹으면 어떻게 될까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '식중독', slots: ['손에 묻은 균', '덜 익힌 음식', '더운 곳에 오래 둠'], cards: CAUSE },
              prompt: '원인 가지마다 막는 수칙을 두 장씩 이어요.', target: { sort: { '손에 묻은 균': ['h1', 'h2'], '덜 익힌 음식': ['c1', 'c2'], '더운 곳에 오래 둠': ['t1', 't2'] } }, difficulty: 0.2 },
            { prompt: '원인 가지 두 개에 막는 수칙을 이어요.', toolOptions: { slots: ['손에 묻은 균', '덜 익힌 음식'], cards: pickCards(CAUSE, ['h1', 'h2', 'c1', 'c2']) }, target: { sort: { '손에 묻은 균': ['h1', 'h2'], '덜 익힌 음식': ['c1', 'c2'] } } },
            { prompt: '원인 가지 네 개에 막는 수칙을 이어요.', toolOptions: { slots: ['손에 묻은 균', '덜 익힌 음식', '더운 곳에 오래 둠', '날음식과 섞임'], cards: [...CAUSE, { id: 'm1', text: '도마 나눠 쓰기' }, { id: 'm2', text: '날고기 집게 따로 쓰기' }] }, target: { sort: { '손에 묻은 균': ['h1', 'h2'], '덜 익힌 음식': ['c1', 'c2'], '더운 곳에 오래 둠': ['t1', 't2'], '날음식과 섞임': ['m1', 'm2'] } } }),
            { type: 'choice', prompt: '"냄새가 괜찮으면 먹어도 안전하다"는 말이 틀린 까닭은?', options: ['냄새는 사람마다 다르게 맡아서', '상한 음식도 냄새나 겉모습이 멀쩡할 수 있어서', '냄새가 나면 맛있는 음식이라서'], answer: 1, difficulty: 0.25, explain: '냄새나 겉모습만으로는 안전을 판단할 수 없어요.' },
            { type: 'short', prompt: '"식중독은 여름에만 생긴다"는 생각이 왜 틀렸는지 오늘 배운 원인을 들어 써요.' },
          ],
        },
        worksheet: {
          title: '식중독 원인과 수칙',
          items: [
            { type: 'table', prompt: '원인마다 막는 수칙을 써요.', columns: ['원인', '막는 수칙'], cells: [['손에 묻은 균', ''], ['덜 익힌 음식', ''], ['더운 곳에 오래 둠', '']], answer: '비누로 손 씻기, 속까지 익히기, 차게 보관·오래 둔 것 버리기' },
            { type: 'check', prompt: '다음 체험학습 때 지킬 약속에 표시해요.', options: ['먹기 전 손 씻기', '도시락은 그늘·차게 두기', '이상하면 바로 알리기'] },
          ],
        },
      }),
      M('wrap.camp-check', {
        title: '캠프 먹거리 점검표', method: '캠프 먹거리 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 4개 가운데 알맞은 것만 표시한다.', base: '항목 6개(함정 2개) 가운데 알맞은 것만 표시한다.', challenge: '알맞은 항목을 표시한 뒤 점검 항목 하나를 직접 만들어 쓴다.' },
        wrap: {
          teacher: '"캠프 가방을 싸기 전에 먹거리를 점검한다면 어떤 항목을 넣어야 할까요?" 점검표의 항목을 함께 읽고 알맞은 것만 표시하게 한다. "물티슈로 닦으면 손 씻은 거예요"라는 학생에게 "흙과 고기 즙이 묻은 손이 물티슈 한 장으로 깨끗해질까요?"라고 되묻는다. 마지막에 점검표에 없는 항목을 한 가지씩 더 만들어 보게 한다.',
          exitTicket: [
            IT(Object.assign({ type: 'tool', tool: 'kitchen', difficulty: 0.2 }, (() => { const c = CL('캠프 먹거리 점검표에서 알맞은 항목만 표시해요.', '캠프 먹거리 점검', [
              { id: 'ice', text: '아이스박스 준비하기', ok: true }, { id: 'soap', text: '손 씻을 물·비누 챙기기', ok: true }, { id: 'left', text: '오래 둔 남은 음식 버리기', ok: true },
              { id: 'board', text: '날고기용 도마 따로 챙기기', ok: true }, { id: 'wipe', text: '물티슈로만 닦고 먹기' }, { id: 'nextday', text: '남은 김밥 다음 날 먹기' }]); return { prompt: c.prompt, options: c.toolOptions, target: c.target }; })()),
              (() => { const c = CL('캠프 먹거리 점검표 4개 항목에서 알맞은 것만 표시해요.', '캠프 먹거리 점검', [
                { id: 'ice', text: '아이스박스 준비하기', ok: true }, { id: 'soap', text: '손 씻을 물·비누 챙기기', ok: true }, { id: 'left', text: '오래 둔 남은 음식 버리기', ok: true }, { id: 'nextday', text: '남은 김밥 다음 날 먹기' }]); return c; })()),
            { type: 'choice', prompt: '아이스박스가 없는 캠프 첫날 점심으로 가장 알맞은 것은?', options: ['아침에 산 크림빵을 오후에 먹기', '실온에 둬도 되는 간식과 그날 바로 만든 음식', '어제 남긴 고기 볶음'], answer: 1, difficulty: 0.2, explain: '차게 둘 수 없으면 상하기 쉬운 음식을 피해요.' },
            { type: 'short', prompt: '캠프 먹거리 점검표에 더하고 싶은 항목 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '캠프 먹거리 점검',
          items: [
            { type: 'check', prompt: '캠프 전에 챙길 것에 표시해요.', options: ['아이스박스', '손 씻을 물과 비누', '날고기용 도마', '물티슈만'] },
            { type: 'short', prompt: '우리 모둠 캠프 먹거리 약속을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 실험 사고 대처와 위험 예측 (saf-life.m.lab-accident) ====
  {
    const M = MK('lab-accident', [8]);
    // 카드 판 조각 → 출구 교구 질문
    const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);
    const SPL = [{ id: 'stop', text: '하던 일 멈추기' }, { id: 'tell', text: '선생님께 크게 알리기' }, { id: 'wash', text: '흐르는 물로 오래 씻기' }, { id: 'nurse', text: '보건실 가기' }, { id: 'record', text: '사고 기록 남기기' }];
    const GLS = [{ id: 'freeze', text: '멈추고 손대지 않기' }, { id: 'back', text: '주변 친구 물러서게 하기' }, { id: 'tell2', text: '선생님께 알리기' }, { id: 'clean', text: '선생님 안내대로 치우기' }, { id: 'rec2', text: '사고 기록 남기기' }];
    const STEPS = [['기구 설치', '비커가 흔들려 넘어짐'], ['불 켜기', '머리카락·소매에 불이 닿음'], ['가열', '물이 끓어 넘치며 튐'], ['관찰', '얼굴을 가까이 대 증기에 뜨거움'], ['불 끄기', '불을 끄지 않고 자리를 뜸'], ['정리', '식지 않은 기구를 맨손으로 잡음']];
    const FIX = [['비커가 흔들려 넘어짐', '평평한 곳에 받침과 함께 설치'], ['머리카락·소매에 불이 닿음', '긴 머리 묶고 소매 걷기'], ['물이 끓어 넘치며 튐', '물을 알맞게 붓고 보안경 쓰기'], ['얼굴을 가까이 대 증기에 뜨거움', '옆에서 거리를 두고 관찰'], ['불을 끄지 않고 자리를 뜸', '자리를 뜨기 전 불 끄기'], ['식지 않은 기구를 맨손으로 잡음', '식힌 뒤 집게로 옮기기']];
    const PARTS = ['눈', '귀', '피부', '손목', '팔꿈치', '무릎', '발목'];
    const HEAT = { text: '물 끓이기 실험 중 비커의 물이 갑자기 끓어 넘치기 시작한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'grab', text: '맨손으로 비커를 들어 옮긴다', result: '뜨거운 비커에 손을 델 뻔한다.', impact: [{ who: '나', text: '손을 데일 수 있다', tone: -1 }], why: '뜨거운 기구는 맨손으로 잡지 않아요. 불부터 꺼요.', ending: '맨손으로 잡아 위험했어요.' },
      { id: 'off', text: '불을 끄고 선생님께 알린다', result: '끓어 넘침이 멈춘다.', impact: [{ who: '모둠 친구들', text: '튄 물을 피한다', tone: 1 }], end: '불을 끄고 알려 안전했어요.',
        next: { text: '불은 껐지만 실험대 바닥에 뜨거운 물이 흘렀다.', choices: [
          { id: 'wipe', text: '바로 휴지로 손을 대 닦는다', result: '뜨거운 물에 손끝이 닿는다.', impact: [{ who: '나', text: '데일 수 있다', tone: -1 }], why: '식기 전에는 손대지 말고 선생님 안내를 기다려요.' },
          { id: 'warn', text: '"뜨거우니 가까이 오지 마"라고 알리고 기다린다', result: '친구들이 물러서고 선생님이 온다.', impact: [{ who: '모둠 친구들', text: '다치지 않는다', tone: 1 }] }] } },
      { id: 'blow', text: '입으로 불어 거품을 가라앉힌다', result: '뜨거운 김이 얼굴로 올라온다.', impact: [{ who: '나', text: '얼굴이 뜨겁다', tone: -1 }], why: '끓는 기구에 얼굴을 대지 않아요.', ending: '얼굴을 가까이 대 위험했어요.' }] };

    ALL.push(
      M('intro.spill-emotion', {
        title: '약품이 쏟아진 순간의 마음', method: '약품이 쏟아진 순간의 마음과 행동', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장 가운데 친구의 마음을 고른다.', base: '친구의 마음을 고르고, 숨기면 생길 일을 말한다.', challenge: '옆 친구가 그때 할 행동까지 말한다.' },
        intro: {
          teacher: '"약품이 옷에 쏟아진 민우는 왜 아무 말 없이 소매를 내렸을까요?" 실험 중 약품이 옷에 쏟아졌는데 혼날까 봐 숨기려는 가상 장면을 보이고, 시연 단추로 장면마다 마음 카드가 놓이는 모습을 보인다. "작은 사고는 혼자 처리하는 게 낫다"는 말이 나오면 "숨긴 사이에 약품은 옷 안에서 어떻게 될까요?"라고 되묻는다. 당황하는 마음은 자연스럽고, 그래서 미리 정한 차례가 필요하다는 것을 오늘의 질문으로 삼는다.',
          student: '가상 인물 민우의 마음을 짐작해 보고, 사고를 숨기면 어떤 일이 생길지 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '약품이 옷에 쏟아진 순간' }, { id: 's2', label: '혼날까 봐 숨기려 할 때' }], cards: ['놀람', '걱정', '신남'], shuffle: false }, sequence: [{ match: { s1: '놀람', s2: '걱정' } }] },
          art: { draw: 'a paper-cut science lab table with a spilled beaker, a surprised student pulling down a sleeve and a classmate turning toward the teacher', banner: '숨길까, 알릴까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가상 인물로만 이야기한다. 학생이 다친 일을 묻지 않는다.',
      }),
      M('intro.heat-dilemma', {
        title: '끓어 넘치는 비커 갈림길', method: '끓어 넘치는 비커 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 갈림길 1번만 함께 고르고 결과를 본다.', base: '갈림길 2번까지 가 보고 근거를 말한다.', challenge: '결과를 본 뒤 실험 전에 미리 했어야 할 일을 한 가지 말한다.' },
        intro: {
          teacher: '"비커가 끓어 넘치는 바로 그 순간, 손이 먼저 나가나요, 불 끄는 손잡이가 먼저 나가나요?" 시연 단추로 \'불을 끄고 알린다\' 길이 이어지는 모습을 보이고, 다른 길을 고르면 어떻게 될지 반 전체에 묻는다. "빨리 옮기면 돼요"라는 말에는 "뜨거운 비커를 맨손으로 잡으면 어떻게 될까요?"라고 되묻는다. 사고 순간에는 멈추고 알리는 것이 먼저라는 점을 짚는다.',
          student: '비커가 끓어 넘칠 때 나라면 무엇을 먼저 할지 고르고, 그 길의 결과를 짝과 이야기해요.',
          demo: DEMO_DIL('끓어 넘치는 비커', HEAT, [['off', 'warn']], [{ id: 'r1', text: '사고가 나면 멈추고 알린다' }, { id: 'r2', text: '뜨거운 기구는 맨손으로 잡지 않는다' }]),
          art: { draw: 'a paper-cut beaker boiling over on a lab burner with a student reaching for the burner knob and a teacher approaching', banner: '먼저 멈추고 알려요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('activity.accident-order', {
        title: '사고 순간부터 알리기 차례', method: '사고 순간부터 알리기까지 차례', tool: 'timeline', minutes: 16,
        levels: { easy: '행동 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 차례로 놓고 행동마다 까닭 카드를 단다.', challenge: '약품 튐과 깨진 유리 상황에서 할 일을 견주어 다른 점과 같은 점을 나눈다.' },
        activity: {
          title: '사고 순간부터 알리기 차례', tool: 'timeline',
          teacher: '"손등에 약품이 튀었을 때 맨 먼저 할 일은 무엇일까요?" 카드를 놓은 뒤 순서를 바꾸면 어떻게 되는지 묻는다. "약품은 천으로 닦아 내면 된다"는 학생에게 "천으로 문지르면 약품이 피부에 더 퍼지지 않을까요?"라고 되묻는다. 알리면서 바로 흐르는 물로 씻는다는 점, 그리고 기록이 같은 사고를 막는다는 점을 짚는다.',
          task: '실험 사고가 난 순간부터 할 행동 카드를 차례로 놓고, 행동마다 까닭을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('손등에 약품이 튀었어요. 할 행동을 차례대로 놓으세요.', SPL, { axis: ['사고 순간', '그 뒤'] }),
              OB('손등에 약품이 튀었어요. 행동 카드 3장을 차례대로 놓으세요.', pickCards(SPL, ['stop', 'wash', 'nurse']), { axis: ['사고 순간', '그 뒤'] })),
            IT(OB('비커가 깨졌어요. 할 행동을 차례대로 놓으세요.', GLS, { axis: ['사고 순간', '그 뒤'] }),
              OB('비커가 깨졌어요. 행동 카드 3장을 차례대로 놓으세요.', pickCards(GLS, ['freeze', 'tell2', 'clean']), { axis: ['사고 순간', '그 뒤'] })),
            IT(MB('사고 대처 행동마다 알맞은 까닭을 이어 보세요.', [['멈추기', '더 큰 사고로 번지는 것을 막는다'], ['알리기', '선생님이 바로 도울 수 있다'], ['흐르는 물로 씻기', '몸에 닿은 약품을 씻어 낸다'], ['기록하기', '같은 사고를 다시 막는다']], ['혼나지 않게 숨긴다'], { axis: ['사고 순간', '그 뒤'] }),
              MB('사고 대처 행동 두 개에 알맞은 까닭을 이어 보세요.', [['멈추기', '더 큰 사고로 번지는 것을 막는다'], ['알리기', '선생님이 바로 도울 수 있다']], [], { axis: ['사고 순간', '그 뒤'] }),
              SB('약품 튐과 깨진 유리 상황을 견주어, 할 일 카드를 알맞은 칸에 나누세요.', ['약품 튐에만', '깨진 유리에만', '둘 다'], [
                { id: 'v1', text: '흐르는 물로 오래 씻기', to: '약품 튐에만' }, { id: 'v2', text: '손으로 조각 줍지 않기', to: '깨진 유리에만' }, { id: 'v3', text: '멈추고 선생님께 알리기', to: '둘 다' },
                { id: 'v4', text: '주변 친구 물러서게 하기', to: '깨진 유리에만' }, { id: 'v5', text: '사고 기록 남기기', to: '둘 다' }]),
              { conclude: '사고가 나면 멈추고 알리고, 약품은 흐르는 물로 씻고 깨진 유리는 손대지 않아요. 기록은 다음 사고를 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '약품이 피부에 닿았을 때 알맞은 대처는?', options: ['천으로 문질러 닦는다', '알리고 흐르는 물로 씻는다', '그냥 두고 실험을 마친다'], answer: '알리고 흐르는 물로 씻는다' }] },
      }),
      M('activity.glass-body', {
        title: '사고별 다친 부위와 첫 대처', method: '사고 종류별 다친 부위와 첫 대처', tool: 'body', minutes: 16,
        levels: { easy: '고른 부위 이름이 바로 보이고, 사고마다 부위를 하나씩 고른다.', base: '사고 3가지마다 다치기 쉬운 부위를 누르고 첫 대처를 고른다.', challenge: '보호구(보안경·긴소매·장갑)가 있었다면 지켜졌을 부위를 고르는 문항으로 바뀐다.' },
        activity: {
          title: '사고별 다친 부위와 첫 대처', tool: 'body',
          teacher: '"약품이 튀면 몸 어디가 가장 위험할까요?" 사고마다 종이 몸에서 부위를 누르고 첫 대처를 고른 뒤, 그 부위를 지켜 줄 보호구를 함께 말한다. "깨진 유리는 빨리 주우면 된다"는 학생에게 "맨손으로 조각을 줍다가 어디를 다칠까요?"라고 되묻는다. 사고마다 첫 대처가 다르다는 점을 짚는다.',
          task: '실험 사고마다 종이 몸에서 다치기 쉬운 부위를 누르고, 첫 대처를 골라요.',
          levels: { easy: { names: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '약품이 얼굴 쪽으로 튀었어요. 가장 먼저 지켜야 할 부위를 누르고 첫 대처를 고르세요.', toolOptions: { mode: 'parts', parts: PARTS, ask: { q: '첫 대처는?', choices: ['천으로 문질러 닦기', '알리고 흐르는 물로 씻기', '그냥 두고 실험 계속하기'] } }, target: { parts: ['눈'], pick: 1 } }),
            IT({ prompt: '뜨거운 비커를 맨손으로 잡았어요. 다치기 쉬운 부위(손 쪽)를 누르고 첫 대처를 고르세요.', toolOptions: { mode: 'parts', parts: PARTS, ask: { q: '첫 대처는?', choices: ['얼른 손을 털고 참기', '알리고 흐르는 찬물에 식히기', '연고부터 두껍게 바르기'] } }, target: { parts: ['손목'], pick: 1 } },
              null,
              { prompt: '긴소매 실험복과 장갑이 있었다면 지켜졌을 부위를 모두 누르고, 그 보호구를 고르세요.', toolOptions: { ask: { q: '이 부위를 지키는 보호구는?', choices: ['보안경', '긴소매 실험복과 장갑', '실내화'] } }, target: { parts: ['손목', '팔꿈치'], pick: 1 } }),
            IT({ prompt: '비커가 깨져 실험대와 바닥에 조각이 흩어졌어요. 다치기 쉬운 부위 두 곳을 누르고 첫 대처를 고르세요.', toolOptions: { mode: 'parts', parts: PARTS, ask: { q: '첫 대처는?', choices: ['맨손으로 큰 조각부터 줍기', '멈추고 물러서서 선생님께 알리기', '발로 조각을 한쪽으로 밀기'] } }, target: { parts: ['손목', '발목'], pick: 1 } },
              null,
              { prompt: '보안경을 썼다면 지켜졌을 부위를 누르고, 보안경이 막는 사고를 고르세요.', toolOptions: { ask: { q: '보안경이 막는 사고는?', choices: ['깨진 조각을 밟는 사고', '약품이나 조각이 눈에 튀는 사고', '뜨거운 기구를 잡는 사고'] } }, target: { parts: ['눈'], pick: 1 } },
              { conclude: '사고마다 다치기 쉬운 곳과 첫 대처가 달라요. 보호구는 그 부위를 미리 지켜 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사고마다 첫 대처를 써요.', columns: ['사고', '첫 대처'], cells: [['약품 튐', ''], ['뜨거운 기구', ''], ['깨진 유리', '']], answer: '알리고 흐르는 물로 씻기, 알리고 흐르는 찬물에 식히기, 손대지 말고 물러서서 알리기' }] },
        notes: '종이 몸에 \'손\' 부위가 없어 손 쪽은 \'손목\'으로 고른다.',
      }),
      M('activity.risk-table', {
        title: '가열 실험 위험 예측표', method: '가열 실험 위험 예측표', tool: 'kitchen', minutes: 16,
        levels: { easy: '실험 단계 3개에 위험 카드를 잇고, 놓으면 바로 맞는지 알려 준다.', base: '단계 6개에 위험 카드를, 위험마다 대비책 카드를 짝지어 예측표를 완성한다.', challenge: '대비책을 짝지은 뒤 활동지 예측표의 대비책 칸을 내 말로 직접 쓴다.' },
        activity: {
          title: '가열 실험 위험 예측표', tool: 'kitchen',
          teacher: '"실험을 시작하기 전에 일어날 일을 미리 적어 둘 수 있을까요?" 물 끓이기 실험 단계마다 위험을 짝짓고, 위험마다 대비책을 이어 예측표를 완성하게 한다. "위험 예측은 선생님만 하는 일"이라는 학생에게 "실험대 앞에 서 있는 사람은 누구일까요?"라고 되묻는다. 위험은 불을 켤 때만이 아니라 끄고 정리할 때도 있다는 점을 짚는다.',
          task: '물 끓이기 실험 단계마다 생길 위험을 짝짓고, 위험마다 대비책을 이어 예측표를 만들어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('실험 단계마다 생길 수 있는 위험을 이어 보세요.', STEPS, []), MB('실험 단계 세 개에 생길 수 있는 위험을 이어 보세요.', STEPS.slice(0, 3), [])),
            IT(MB('위험마다 알맞은 대비책을 이어 보세요.', FIX, ['빨리 끝내고 나가기']), MB('위험 세 개에 알맞은 대비책을 이어 보세요.', FIX.slice(0, 3), [])),
            IT(PB('예측표의 \'불 끄기·정리\' 단계에 넣을 대비책만 골라 담으세요.', '불 끄기·정리 대비책', [
              { id: 'q1', text: '자리를 뜨기 전 불 끄기', ok: true }, { id: 'q2', text: '식힌 뒤 집게로 옮기기', ok: true },
              { id: 'q3', text: '뜨거울 때 바로 씻기' }, { id: 'q4', text: '정리는 다음 시간에 하기' }]),
              null, null, { conclude: '실험 단계마다 위험을 미리 적고 대비책을 정하면, 사고 순간에 당황하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가열 실험 위험 예측표를 완성해요.', columns: ['단계', '위험', '대비책'], cells: [['가열', '물이 끓어 넘치며 튐', ''], ['정리', '식지 않은 기구', '']], answer: '보안경 쓰고 물 알맞게, 식힌 뒤 집게로' }] },
      }),
      M('activity.report-story', {
        title: '사고 보고 대본 채우기', method: '사고 보고 대본 쓰기', tool: 'story', minutes: 16,
        levels: { easy: '대본 빈칸 2개에 보기 카드를 넣는다.', base: '대본 빈칸 4개(무슨 일·어디·누가·지금 상태)를 카드로 채워 짝과 읽는다.', challenge: '보고 문장 가운데 짧고 정확한 것을 고르고, 활동지에 내 말로 다듬어 쓴다.' },
        activity: {
          title: '사고 보고 대본 채우기', tool: 'story',
          teacher: '"\'선생님, 큰일 났어요!\'만 들으면 선생님은 무엇을 들고 어디로 가야 할까요?" 대본 빈칸을 채운 뒤 짝과 선생님·학생 역할을 바꿔 읽게 한다. "자세히 말하면 시간이 오래 걸린다"는 학생에게 "무슨 일·어디·누가·지금 상태, 이 네 가지는 몇 초면 말할 수 있을까요?"라고 되묻는다.',
          task: '실험 사고를 선생님께 알리는 대본의 빈칸을 채우고 짝과 읽어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('약품 사고를 알리는 대본의 빈칸을 채우세요.', [['선생님, ___ 일이 생겼어요.', '약품이 손등에 튄'], ['장소는 ___이에요.', '3모둠 실험대'], ['다친 사람은 ___예요.', '옆자리 친구 한 명'], ['지금은 ___ 중이에요.', '흐르는 물로 씻는']], ['별일 아닌'], { title: '사고 보고 대본' }),
              FB('약품 사고를 알리는 대본의 빈칸 두 개를 채우세요.', [['선생님, ___ 일이 생겼어요.', '약품이 손등에 튄'], ['장소는 ___이에요.', '3모둠 실험대']], [], { title: '사고 보고 대본' })),
            IT(FB('유리 사고를 알리는 대본의 빈칸을 채우세요.', [['선생님, ___ 일이 생겼어요.', '비커가 깨진'], ['장소는 ___이에요.', '창가 실험대'], ['다친 사람은 ___예요.', '없지만 조각이 흩어진 상태'], ['지금은 ___ 중이에요.', '모두 물러나 있는']], ['아마 누군가'], { title: '사고 보고 대본' }),
              FB('유리 사고를 알리는 대본의 빈칸 두 개를 채우세요.', [['선생님, ___ 일이 생겼어요.', '비커가 깨진'], ['지금은 ___ 중이에요.', '모두 물러나 있는']], [], { title: '사고 보고 대본' })),
            IT(PB('짧고 정확한 사고 보고만 골라 담으세요.', '짧고 정확한 보고', [
              { id: 'g1', text: '3모둠에서 비커가 깨져 한 명이 손을 베였어요', ok: true }, { id: 'g2', text: '2모둠 실험대에서 약품이 튀어 씻고 있어요', ok: true },
              { id: 'g3', text: '선생님! 큰일 났어요!' }, { id: 'g4', text: '누가 뭘 깨뜨렸는데 잘 모르겠어요' }, { id: 'g5', text: '실험 끝나고 말씀드릴게요' }], { title: '어떤 보고가 좋을까?' }),
              null, null, { conclude: '사고 보고는 무슨 일·어디·누가·지금 상태를 짧고 정확하게 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상의 실험 사고 하나를 정해 무슨 일·어디·누가·지금 상태가 들어간 보고를 한두 문장으로 써요.' }] },
      }),
      M('wrap.accident-words', {
        title: '사고 대처 낱말 정리', method: '사고 대처 낱말 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 4개를 뜻과 짝짓는다.', base: '낱말 6개를 뜻과 짝짓는다.', challenge: '짝지은 낱말로 대처 원칙 문장 두 개를 써 낸다.' },
        wrap: {
          teacher: '"오늘 배운 사고 대처를 낱말 하나로 줄인다면 무엇일까요?" 낱말 카드를 뜻과 짝지은 뒤 한 사람씩 낱말 하나를 골라 원칙 문장으로 말하게 한다. "작은 사고는 혼자 처리한다"는 생각이 남은 학생에게 오늘 고른 \'알림\' 카드의 뜻을 다시 읽게 한다.',
          exitTicket: [
            IT(X('wordcards', MB('낱말과 뜻을 이어요.', [['하던 일을 바로 그친다', '멈춤'], ['선생님께 바로 말한다', '알림'], ['약품이 닿은 곳을 씻는다', '흐르는 물'], ['같은 사고를 막으려 적는다', '기록'], ['다친 곳 주변에서 떨어진다', '물러서기'], ['뜨거운 기구를 옮길 때 쓴다', '집게']], ['숨김'])),
              MB('낱말 네 개와 뜻을 이어요.', [['하던 일을 바로 그친다', '멈춤'], ['선생님께 바로 말한다', '알림'], ['약품이 닿은 곳을 씻는다', '흐르는 물'], ['같은 사고를 막으려 적는다', '기록']], ['숨김'])),
            { type: 'choice', prompt: '실험 중 작은 사고가 났을 때 가장 알맞은 생각은?', options: ['혼날 수 있으니 혼자 처리한다', '작아도 바로 알려야 커지지 않는다', '실험이 끝난 뒤 말한다'], answer: 1, difficulty: 0.2, explain: '작은 사고도 바로 알려야 커지지 않아요.' },
            { type: 'short', prompt: '오늘 짝지은 낱말 두 개를 넣어 사고 대처 원칙 문장 두 개를 써요.' },
          ],
        },
        worksheet: {
          title: '실험 사고 대처 원칙',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 낱말을 써요.', text: '약품이 피부에 닿으면 알리고 ___로 씻어요.', answer: '흐르는 물' },
            { type: 'table', prompt: '낱말의 뜻을 써요.', columns: ['낱말', '뜻'], cells: [['멈춤', ''], ['알림', ''], ['기록', '']], answer: '하던 일을 그친다, 선생님께 바로 말한다, 같은 사고를 막으려 적는다' },
          ],
        },
      }),
      M('wrap.lab-reflection', {
        title: '실험 안전 성찰 글과 기준표', method: '실험 안전 성찰 글과 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 ___을 맡아 ___ 하겠다. 왜냐하면 ___")을 따라 쓴다.', base: '다음 실험에서 맡을 안전 역할을 세 문장으로 쓰고 기준 3개를 점검한다.', challenge: '모둠 규칙 제안 한 줄을 더해 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"다음 실험에서 우리 모둠이 다치지 않으려면 나는 무엇을 맡을 수 있을까요?" 오늘 만든 예측표를 떠올리며 내가 맡을 안전 역할을 세 문장으로 쓰게 한다. "조심하겠다"만 쓰는 학생에게 "무엇을, 언제, 어떻게 조심할지 쓰면 친구도 알 수 있을까요?"라고 되묻는다. 이름·반 번호는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '다음 실험에서 내가 맡을 안전 역할을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '실험 안전 성찰' },
              prompt: '다음 실험에서 맡을 안전 역할을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['구체적인 행동을 썼다', '그 까닭을 썼다', '실제로 할 수 있는 일이다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 따라 안전 역할을 세 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '나는 ___을 맡아 ___ 하겠다. 왜냐하면 ___ 때문이다. 사고가 나면 ___ 하겠다.' } },
            { prompt: '안전 역할 세 문장에 모둠 규칙 제안 한 줄을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: ['구체적인 행동을 썼다', '그 까닭을 썼다', '실제로 할 수 있는 일이다', '모둠 규칙을 한 줄 제안했다'] } }),
            { type: 'choice', prompt: '안전 역할 문장으로 가장 알맞은 것은?', options: ['실험할 때 조심하겠다.', '가열이 끝나면 불을 끄고 기구가 식을 때까지 손대지 않게 알리겠다.', '사고가 안 나길 바란다.'], answer: 1, difficulty: 0.2, explain: '무엇을, 언제, 어떻게 할지 드러나야 실천할 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '다음 실험의 내 안전 역할',
          items: [
            { type: 'short', prompt: '다음 실험에서 내가 맡을 안전 역할을 세 문장으로 써요.' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['구체적인 행동이 있다', '까닭이 있다', '실제로 할 수 있다'] },
          ],
          easy: { note: '"나는 ___을 맡아 ___ 하겠다" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '나는 ___을 맡아 ___ 하겠다.', answer: '(예) 불 끄기 확인, 자리를 뜨기 전 불을 끄는지 살피겠다' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 구기 경기·더위·야영 안전 (saf-life.m.ballgame-camp) ====
  {
    const M = MK('ballgame-camp', [8]);
    const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);
    const PREP3 = ['부상 대비', '더위 대비', '둘 다'];
    const PREP = [
      { id: 'i1', text: '경기 전 준비운동', to: '부상 대비' }, { id: 'h1', text: '그늘에서 쉬는 시간 늘리기', to: '더위 대비' },
      { id: 'b1', text: '몸이 이상하면 바로 멈추기', to: '둘 다' }, { id: 'i2', text: '경기 전 공·네트 점검', to: '부상 대비' },
      { id: 'h2', text: '모자 쓰고 나가기', to: '더위 대비' }, { id: 'b2', text: '아프면 선생님께 알리기', to: '둘 다' },
      { id: 'i3', text: '바닥 물기 닦기', to: '부상 대비' }, { id: 'h3', text: '물 자주 마시기', to: '더위 대비' },
      { id: 'b3', text: '자기 체력에 맞게 쉬기', to: '둘 다' }, { id: 'i4', text: '발에 맞는 운동화 신기', to: '부상 대비' },
    ];
    // 가상의 하루 기온(수업용 가상 자료)
    const TEMP = [['오전 9시', 24], ['오전 11시', 28], ['오후 1시', 32], ['오후 3시', 34], ['오후 5시', 29]];
    const CAMP = { grid: [6, 4], title: '가상의 야영장', regions: [
      { name: '계곡 옆', cells: [[0, 0], [1, 0], [0, 1]] }, { name: '큰 나무 아래', cells: [[2, 0], [3, 0]] }, { name: '관리동 쉼터', cells: [[4, 0], [5, 0]] },
      { name: '평평한 풀밭', cells: [[1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2]] }, { name: '취사장', cells: [[4, 1], [5, 1], [4, 2]] },
      { name: '화장실 앞', cells: [[5, 2], [4, 3], [5, 3]] }, { name: '비탈길', cells: [[0, 2], [0, 3], [1, 3], [2, 3], [3, 3]] }] };
    const T1 = { text: '야영 첫날 밤이 생각보다 춥다. 친구가 휴대용 난로를 텐트 안에서 켜자고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'heater', text: '텐트 안에서 난로를 켠다', result: '텐트 안이 답답해지고 천이 난로에 가까워진다.', impact: [{ who: '텐트 안 친구들', text: '불이 옮겨붙을 수 있다', tone: -1 }], why: '불은 정해진 곳에서만 써요. 닫힌 텐트 안은 위험해요.', end: '텐트 안에서 불을 써 위험했어요.',
        next: { text: '잠들 무렵 친구가 머리가 아프다고 한다.', choices: [
          { id: 'sleep', text: '그냥 자면 낫는다고 한다', result: '난로가 계속 켜진 채 밤이 깊어진다.', impact: [{ who: '친구', text: '더 위험해진다', tone: -1 }] },
          { id: 'out', text: '난로를 끄고 밖으로 나와 어른께 알린다', result: '어른이 와서 친구를 살핀다.', impact: [{ who: '친구', text: '돌봄을 받는다', tone: 1 }] }] } },
      { id: 'layer', text: '옷을 껴입고 침낭에 들어간다', result: '조금 나아졌지만 아직 춥다.', impact: [{ who: '나', text: '불 없이 몸을 데운다', tone: 1 }], end: '옷을 껴입어 안전하게 잤어요.',
        next: { text: '그래도 춥다. 친구가 차 안에서 시동을 켜고 자자고 한다.', choices: [
          { id: 'car', text: '차 안에서 시동을 켜고 잔다', result: '닫힌 차 안에서 밤새 시동이 켜져 있다.', impact: [{ who: '친구들', text: '위험할 수 있다', tone: -1 }], why: '닫힌 곳에서 시동이나 불을 켜 두고 자지 않아요.' },
          { id: 'adult', text: '인솔 어른께 춥다고 알리고 담요를 더 받는다', result: '어른이 담요와 핫팩을 나눠 준다.', impact: [{ who: '친구들', text: '따뜻하고 안전하다', tone: 1 }], end: '어른께 알려 도움을 받았어요.',
            next: { text: '어른이 "난로는 텐트 밖 정해진 곳에서만"이라고 했는데, 친구가 몰래 켜자고 한다.', choices: [
              { id: 'sneak', text: '몰래 켠다', result: '약속을 어기고 불을 텐트 가까이 둔다.', impact: [{ who: '모두', text: '불이 날 수 있다', tone: -1 }] },
              { id: 'say', text: '"정해진 곳에서만 쓰자, 추우면 또 말씀드리자"고 한다', result: '친구가 고개를 끄덕인다.', impact: [{ who: '친구', text: '함께 안전하다', tone: 1 }] }] } }] } },
      { id: 'carfirst', text: '처음부터 차에 가서 시동을 켜고 잔다', result: '닫힌 차 안에서 시동이 켜져 있다.', impact: [{ who: '나', text: '위험할 수 있다', tone: -1 }], why: '닫힌 곳에서 시동을 켜 두고 자지 않아요.', ending: '닫힌 차 안이라 위험했어요.' }] };
    const T1R = [{ id: 'r1', text: '야영장에서 불은 정해진 곳에서만 쓴다' }, { id: 'r2', text: '추우면 옷·침낭을 쓰고 어른에게 알린다' },
      { id: 'r3', text: '잠깐이면 텐트 안에서 불을 피워도 된다', why: '잠깐이라도 닫힌 텐트 안 불은 위험해요.' }, { id: 'r4', text: '어른을 깨우면 민폐다', why: '안전이 걸린 일은 알리는 것이 맞아요.' }];
    const T2 = { text: '배구 경기 중 친구 지후가 발목을 삐끗했다. 팀이 지고 있어 지후가 계속 뛰겠다고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'cheer', text: '"끝까지 해 보자!"며 계속 뛰게 한다', result: '지후가 절뚝이며 뛰다 다시 넘어진다.', impact: [{ who: '지후', text: '더 크게 다칠 수 있다', tone: -1 }], why: '아프면 참지 말고 바로 멈추고 알려요.', end: '참고 뛰다 더 다쳤어요.',
        next: { text: '지후가 바닥에 앉아 일어나지 못한다.', choices: [
          { id: 'pull', text: '억지로 일으켜 세운다', result: '지후가 더 아파한다.', impact: [{ who: '지후', text: '더 아프다', tone: -1 }] },
          { id: 'call', text: '경기를 멈추고 선생님을 부른다', result: '선생님이 지후를 살핀다.', impact: [{ who: '지후', text: '돌봄을 받는다', tone: 1 }] }] } },
      { id: 'stop', text: '경기를 멈추고 선생님께 알리자고 한다', result: '선생님이 와서 지후를 쉬게 한다.', impact: [{ who: '지후', text: '더 다치지 않는다', tone: 1 }], end: '바로 멈추고 알렸어요.',
        next: { text: '지후가 "나 때문에 질 것 같아, 미안해"라고 한다.', choices: [
          { id: 'blame', text: '"그러게, 아쉽다"며 고개를 돌린다', result: '지후가 다음에 아파도 말하지 않으려 한다.', impact: [{ who: '지후', text: '마음이 상한다', tone: -1 }], why: '탓하면 다음에 아파도 숨기게 돼요.' },
          { id: 'comfort', text: '"다치면 더 오래 못 뛰어. 쉬는 게 팀을 돕는 거야"라고 한다', result: '지후가 안심하고 쉰다.', impact: [{ who: '지후', text: '안심한다', tone: 1 }], end: '지후를 다독여 쉬게 했어요.',
            next: { text: '선생님이 교체 선수를 찾는다. 나는 아직 준비운동을 안 했다.', choices: [
              { id: 'goin', text: '바로 들어가 뛴다', result: '굳은 몸으로 뛰다 허리가 뻐근하다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], why: '경기에 들어가기 전 몸을 풀어요.' },
              { id: 'warm', text: '짧게 몸을 푼 뒤 들어간다', result: '몸이 풀린 채 경기를 이어 간다.', impact: [{ who: '나', text: '다치지 않는다', tone: 1 }] }] } }] } },
      { id: 'tape', text: '스스로 붕대를 감고 계속 뛰게 한다', result: '지후가 아픈 발로 계속 뛴다.', impact: [{ who: '지후', text: '더 다칠 수 있다', tone: -1 }], why: '부상은 선생님께 알려 살피게 해요.', ending: '알리지 않아 위험했어요.' }] };
    const T2R = [{ id: 'r1', text: '아프면 바로 멈추고 알려야 더 다치지 않는다' }, { id: 'r2', text: '쉬는 것도 팀을 돕는 일이다' },
      { id: 'r3', text: '이기려면 아파도 참아야 한다', why: '참고 뛰면 더 오래 못 뛰게 될 수 있어요.' }, { id: 'r4', text: '삐끗한 정도는 다치는 게 아니다', why: '작은 부상도 살펴야 커지지 않아요.' }];
    const T3 = { text: '캠프파이어가 끝났는데 불씨가 아직 남아 있다. 친구들이 피곤하다며 그냥 텐트로 가자고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'go', text: '그냥 텐트로 간다', result: '바람이 불자 불씨가 날린다.', impact: [{ who: '야영장 사람들', text: '불이 번질 수 있다', tone: -1 }], why: '불은 다 꺼진 것을 확인하고 떠나요.', ending: '불씨를 두고 가 위험했어요.' },
      { id: 'cover', text: '휴지와 나뭇잎으로 불씨를 덮는다', result: '덮은 것에 불이 옮겨붙는다.', impact: [{ who: '친구들', text: '놀라서 피한다', tone: -1 }], why: '불씨는 탈 것으로 덮지 않아요.', ending: '덮은 것에 불이 붙었어요.' },
      { id: 'tell', text: '선생님께 알리고 불씨 끄는 것을 돕는다', result: '선생님이 물로 불씨를 끄고 확인한다.', impact: [{ who: '야영장 사람들', text: '안전하다', tone: 1 }], end: '알리고 함께 불을 껐어요.',
        next: { text: '친구가 남은 장작을 텐트 옆으로 가져가 다시 피우자고 한다.', choices: [
          { id: 'fire2', text: '재미있겠다며 같이 피운다', result: '텐트 옆에서 불꽃이 튄다.', impact: [{ who: '텐트', text: '불이 옮겨붙을 수 있다', tone: -1 }], why: '불은 정해진 곳에서만 써요.' },
          { id: 'no2', text: '"불은 정해진 곳에서만"이라며 말린다', result: '친구가 장작을 제자리에 둔다.', impact: [{ who: '친구', text: '함께 안전하다', tone: 1 }], end: '정해진 곳 밖에서 불을 쓰지 않았어요.',
            next: { text: '친구가 "그럼 선생님 몰래 내일 아침에 하자"고 한다.', choices: [
              { id: 'later', text: '그러자고 한다', result: '몰래 불을 피울 계획이 남는다.', impact: [{ who: '모두', text: '위험이 남는다', tone: -1 }] },
              { id: 'suggest', text: '"아침에 선생님께 정해진 곳에서 해도 되는지 여쭤보자"고 한다', result: '친구가 좋다고 한다.', impact: [{ who: '친구', text: '안전하게 즐긴다', tone: 1 }] }] } }] } }] };
    const T3R = [{ id: 'r1', text: '불은 다 꺼진 것을 확인하고 떠난다' }, { id: 'r2', text: '불은 정해진 곳에서만 쓴다' },
      { id: 'r3', text: '작은 불씨는 저절로 꺼진다', why: '불씨는 바람에 날려 번질 수 있어요.' }, { id: 'r4', text: '피곤하면 정리는 내일 해도 된다', why: '불 정리는 미루지 않아요.' }];
    const ADULT = { reasons: [{ id: 'r5', text: '어른에게 안전한 방법을 먼저 제안한다' }, { id: 'r6', text: '친구가 몰래 위험한 일을 하지 않게 말린다' }], ok: ['r5', 'r6'] };
    const SIG = [{ id: 'stop', text: '경기를 멈추기' }, { id: 'shade', text: '그늘로 옮기기' }, { id: 'tell', text: '선생님께 알리기' }, { id: 'drink', text: '물 마시며 쉬기' }];

    ALL.push(
      M('intro.volleyball-story', {
        title: '더운 날 배구 경기 장면', method: '배구 경기 장면 사례', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장에서 위험 신호 하나를 고른다.', base: '장면 4장에서 위험 신호를 모두 고른다.', challenge: '고른 신호를 부상 신호와 더위 신호로 나누어 말한다.' },
        intro: {
          teacher: '"이 선수는 언제 경기를 멈췄어야 할까요?" 더운 날 배구 경기 중 손가락을 다치고 어지러움을 느끼는 가상 선수 장면을 넘겨 보이고, 시연 단추로 위험 신호 장면이 바구니에 담기는 모습을 보인다. "아파도 참고 끝까지 하는 게 멋있다"는 말에는 "참고 뛰면 다음 경기에는 뛸 수 있을까요?"라고 되묻는다. 몸이 보내는 신호를 알아차리는 것이 오늘의 질문이다.',
          student: '가상 배구 선수 장면을 보고 경기를 멈춰야 한다는 몸의 신호를 골라요. 부상 신호인지 더위 신호인지도 생각해 봐요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험 신호', title: '더운 날 배구 경기', cards: [
            { id: 'v1', text: '공을 받다 손가락이 붓고 아프다', motif: 'leaf' }, { id: 'v2', text: '팀이 한 점 앞서 있다', motif: 'star' },
            { id: 'v3', text: '햇볕 아래 머리가 어지럽다', motif: 'sun' }, { id: 'v4', text: '목이 바짝 마르고 기운이 없다', motif: 'cloud' }], shuffle: false }, sequence: [{ pick: ['v1', 'v3', 'v4'] }] },
          art: { draw: 'a paper-cut outdoor volleyball court under a strong sun with a player holding a swollen finger and wiping sweat', banner: '몸이 보내는 신호는?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '가상 장면이다. 학생이 다친 일을 묻지 않는다.',
      }),
      M('intro.heat-chart', {
        title: '가상 기온 그래프와 경기 시간', method: '가상의 기온과 활동 시간 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '꺾은선에서 가장 더운 때를 고른다.', base: '야외 경기를 피할 시간대를 정한다.', challenge: '대신 경기할 시간대를 제안한다.' },
        intro: {
          teacher: '"체육대회 결승을 하루 중 언제 하면 좋을까요?" 가상의 하루 기온 꺾은선을 띄우고 시연 단추로 가장 더운 때가 골라지는 모습을 보인다. "점심 먹고 바로 하면 돼요"라는 말에는 "그래프에서 점심 뒤 기온은 어떻게 바뀌나요?"라고 되묻는다. 자료는 수업용 가상 자료라는 점을 밝힌다.',
          student: '가상의 하루 기온 그래프를 보고 야외 경기를 피할 시간대와 경기하기 알맞은 시간대를 짝과 정해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '가상의 하루 기온', unit: '°C', xLabel: '시각', yLabel: '기온', from: 20, data: TEMP, question: '가장 더운 때는?', choices: TEMP.map((d) => d[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut thermometer and a line graph of temperature rising toward afternoon beside a sunny sports field', banner: '언제 경기하면 좋을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      M('activity.injury-sort', {
        title: '부상·더위 대비 나누기', method: '부상과 더위 대비 행동 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '카드 6장을 부상 대비·더위 대비 두 칸으로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 10장을 세 칸에 나누고 \'둘 다\' 행동이 두 쪽에 쓰이는 까닭을 고른다.', challenge: '까닭을 고른 뒤 활동지에 근거를 직접 쓴다.' },
        activity: {
          title: '부상·더위 대비 나누기', tool: 'mindmap',
          teacher: '"이 행동은 다치지 않으려고 하는 걸까요, 더위를 먹지 않으려고 하는 걸까요?" 카드를 나눈 뒤 \'둘 다\' 칸 카드마다 왜 두 쪽에 쓰이는지 말하게 한다. "목마를 때만 물을 마시면 된다"는 학생에게 "목마름을 느낄 때 몸은 이미 어떤 상태일까요?"라고 되묻는다. 몸이 이상하면 멈추는 것이 부상과 더위 모두를 막는다는 점을 짚는다.',
          task: '경기 장면 카드를 부상 대비·더위 대비·둘 다로 나누고, \'둘 다\'인 까닭을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('경기 대비 행동 카드를 세 칸에 나누세요.', PREP3, PREP, { topic: '경기 대비' }),
              SB('경기 대비 행동 카드 6장을 두 칸에 나누세요.', ['부상 대비', '더위 대비'], pickCards(PREP, ['i1', 'h1', 'i2', 'h2', 'i3', 'h3']), { topic: '경기 대비' })),
            IT(MB('\'둘 다\' 행동마다 두 쪽에 쓰이는 까닭을 이어 보세요.', [['몸이 이상하면 바로 멈추기', '삔 곳도 더위 증상도 참으면 나빠진다'], ['아프면 선생님께 알리기', '부상과 더위 모두 빨리 돌봐야 한다'], ['자기 체력에 맞게 쉬기', '지치면 다치기 쉽고 더위도 먹는다']], ['이기려면 끝까지 참는다'], { topic: '왜 둘 다일까?' }),
              MB('\'둘 다\' 행동 두 개의 까닭을 이어 보세요.', [['몸이 이상하면 바로 멈추기', '삔 곳도 더위 증상도 참으면 나빠진다'], ['아프면 선생님께 알리기', '부상과 더위 모두 빨리 돌봐야 한다']], [], { topic: '왜 둘 다일까?' })),
            IT(PB('더운 날 경기에서 알맞은 행동만 골라 담으세요.', '더운 날 알맞은 행동', [
              { id: 'w1', text: '목마르기 전에 물 마시기', ok: true }, { id: 'w2', text: '쉬는 시간마다 그늘로 가기', ok: true }, { id: 'w3', text: '더 더우면 경기 시간 줄이기', ok: true },
              { id: 'w4', text: '이기고 있으면 쉬지 않기' }, { id: 'w5', text: '목마를 때만 물 마시기' }], { topic: '더운 날' }),
              null, null, { conclude: '준비운동과 장비 점검은 부상을, 물·그늘·쉬기는 더위를 막아요. 몸이 이상하면 멈추는 것은 둘 다를 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'몸이 이상하면 바로 멈추기\'가 부상과 더위를 둘 다 막는 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '더위를 막는 행동에 ○ 해요.', options: ['물 자주 마시기', '공·네트 점검'], answer: '물 자주 마시기' }] },
      }),
      M('activity.break-timer', {
        title: '더운 날 경기 쉬는 시간 계획', method: '더운 날 경기 쉬는 시간 계획', tool: 'timer', minutes: 16,
        levels: { easy: '운동 시간과 쉬기 시간 값만 하나씩 맞춘다.', base: '운동·쉬기 구간과 횟수를 맞추고, 안전 점검 4개(물·그늘·응급 연락·알릴 사람)를 표시한다.', challenge: '기온이 더 오른 날에 맞게 쉬기를 늘린 계획으로 바꿔 맞춘다.' },
        activity: {
          title: '더운 날 경기 쉬는 시간 계획', tool: 'timer',
          teacher: '"더운 날 체육대회 경기를 쉬지 않고 이어 하면 어떻게 될까요?" 학급이 정한 계획대로 운동·쉬기 구간을 맞추고 안전 점검 칸을 함께 확인한다. "쉬는 시간은 시간 낭비"라는 학생에게 "쉬지 않고 뛴 팀과 쉬며 뛴 팀 가운데 마지막 경기에 힘이 남은 팀은 어디일까요?"라고 되묻는다. 시간 값은 학급 계획용이며 그날 기온과 학교 지침에 따라 바꾼다고 밝힌다.',
          task: '더운 날 체육대회 경기의 운동·쉬기 구간을 계획하고, 안전 점검 칸에 표시해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '한 경기 10분, 쉬기 5분을 3번 하도록 맞추고 안전 점검을 모두 표시하세요.', toolOptions: { timeUnit: 'min', title: '체육대회 경기 계획', plan: { work: 5, rest: 0, rounds: 1 }, safety: ['물을 준비했어요', '그늘 쉼터가 있어요', '응급 연락처를 알아요', '아픈 친구를 알릴 사람을 정했어요'] }, target: { plan: { work: 10, rest: 5, rounds: 3 }, safety: true } },
              { prompt: '한 경기 10분, 쉬기 5분이 되도록 운동과 쉬기 값을 맞추세요.', toolOptions: { safety: [] }, target: { plan: { work: 10, rest: 5 } } }),
            IT({ prompt: '경기를 3번 하고 전체 시간이 40분이 되도록 운동과 쉬기 시간을 정하세요.', toolOptions: { timeUnit: 'min', title: '전체 40분 계획', plan: { work: 5, rest: 0, rounds: 3 }, showTotal: true }, target: { plan: { rounds: 3 }, total: 40 } }),
            IT({ prompt: '경기 전·중·후 차례 카드를 놓으세요.', toolOptions: { title: '경기 하루 차례', cards: ['정리운동', '경기', '준비운동', '쉬며 물 마시기'] }, target: { order: ['준비운동', '경기', '쉬며 물 마시기', '정리운동'] } },
              null,
              { prompt: '기온이 더 올랐어요. 운동 8분, 쉬기 7분을 4번 하도록 바꿔 맞추세요.', toolOptions: { timeUnit: 'min', title: '더 더운 날 계획', plan: { work: 10, rest: 5, rounds: 3 }, cards: [] }, target: { plan: { work: 8, rest: 7, rounds: 4 } } },
              { conclude: '더운 날에는 쉬는 시간과 물 마시기를 늘리고, 기온이 오르면 계획을 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 더운 날 경기 계획을 써요.', columns: ['칸', '계획'], cells: [['한 경기', ''], ['쉬기', ''], ['쉬는 곳', '']], answer: '(예) 10분, 5분, 그늘 쉼터' }] },
      }),
      M('activity.camp-map', {
        title: '야영장 텐트·불 자리 정하기', method: '야영장 지도에서 텐트·불 자리 정하기', tool: 'map', minutes: 16,
        levels: { easy: '핀을 놓으면 그 칸의 자리 이름이 바로 보인다.', base: '텐트 자리와 불 쓸 자리에 핀을 꽂고 까닭을 고른다.', challenge: '비가 올 때 텐트를 옮길 자리까지 정한다.' },
        activity: {
          title: '야영장 텐트·불 자리 정하기', tool: 'map',
          teacher: '"물소리가 들리는 계곡 옆에 텐트를 치면 낭만적일까요, 위험할까요?" 핀을 꽂기 전에 그 자리에서 생길 수 있는 일을 한 가지씩 말하게 한다. "텐트 안에서 잠깐 불을 피워도 된다"는 학생에게 "불을 쓸 수 있도록 정해진 곳은 지도에서 어디일까요?"라고 되묻는다. 비가 오면 계곡 물이 불어날 수 있다는 점을 짚는다.',
          task: '가상의 야영장 지도에 텐트 자리와 불 쓸 자리를 핀으로 정하고 까닭을 골라요.',
          levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            PIN('텐트 칠 자리에 핀을 꽂고 까닭을 고르세요.', Object.assign({}, CAMP, { ask: { q: '그 자리를 고른 까닭은?', choices: ['물소리가 잘 들려서', '평평하고 물가·비탈에서 멀어서', '나무 그늘이 가장 짙어서'] } }), { region: '평평한 풀밭', pick: 1 }),
            PIN('불을 쓸 자리에 핀을 꽂고 까닭을 고르세요.', Object.assign({}, CAMP, { ask: { q: '그 자리를 고른 까닭은?', choices: ['불을 쓰도록 정해진 곳이라서', '텐트에서 가까워 편해서', '바람이 시원해서'] } }), { region: '취사장', pick: 0 }),
            PIN('비가 오면 물이 불어 텐트를 치면 안 되는 곳에 핀을 꽂으세요.', CAMP, { region: '계곡 옆' }, {
              levels: { challenge: { prompt: '밤에 비가 많이 와요. 텐트에서 옮겨 갈 곳에 핀을 꽂으세요.', target: { region: '관리동 쉼터' } } },
              conclude: '텐트는 평평하고 물가·비탈에서 먼 곳에, 불은 정해진 곳에서만 써요. 비가 오면 쉼터로 옮겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '야영장에서 불을 써도 되는 곳은?', options: ['텐트 안', '정해진 취사장', '큰 나무 아래'], answer: '정해진 취사장' }] },
      }),
      M('activity.camp-dilemma', {
        title: '추운 밤 텐트 갈림길', method: '추운 밤 텐트 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번까지 가며 어른에게 제안할 말을 고르고, 그 근거까지 고른다.' },
        activity: {
          title: '추운 밤 텐트 갈림길', tool: 'dilemma',
          teacher: '"추운 밤, 몸을 데우는 방법 가운데 불을 쓰지 않는 방법은 무엇이 있을까요?" 학생마다 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "텐트 안에서 잠깐 불을 피우는 건 괜찮다"는 학생에게 "닫힌 텐트 안에서 불이 천에 닿으면 어떻게 될까요?"라고 되묻는다. 추위·부상·불씨처럼 안전이 걸린 일은 어른에게 알리는 것이 맞다는 점을 짚는다.',
          task: '야영·경기 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '야영 밤이 추워요. 한 번 골라 결과를 보세요.', base: '야영 밤이 추워요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '야영 밤이 추워요. 세 번 골라 어른에게 제안하는 길까지 가고 근거를 고르세요.' },
              '추운 야영 밤', T1, [['layer', 'adult', 'say']], T1R, ['r1', 'r2'], ADULT),
            DIL({ easy: '친구가 발목을 삐끗했어요. 한 번 골라 결과를 보세요.', base: '친구가 발목을 삐끗했어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 발목을 삐끗했어요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '배구 경기 중', T2, [['stop', 'comfort', 'warm']], T2R, ['r1', 'r2'], ADULT),
            DIL({ easy: '캠프파이어 불씨가 남았어요. 한 번 골라 결과를 보세요.', base: '캠프파이어 불씨가 남았어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '캠프파이어 불씨가 남았어요. 세 번 골라 어른에게 묻는 길까지 가고 근거를 고르세요.' },
              '캠프파이어 뒤', T3, [['tell', 'no2', 'suggest']], T3R, ['r1', 'r2'], ADULT, { conclude: '야영장에서 불은 정해진 곳에서만, 몸이 이상하면 멈추고, 안전이 걸린 일은 어른에게 알리고 안전한 방법을 제안해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '추운 야영 밤에 인솔 어른께 할 제안을 한 문장으로 써요.' }] },
      }),
      M('wrap.signal-timeline', {
        title: '몸의 신호와 할 일 차례', method: '몸이 보내는 신호와 할 일 차례', tool: 'timeline', minutes: 7,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '행동 카드 4장을 차례로 놓는다.', challenge: '함정 카드(참고 계속 뛰기·혼자 숨기)를 걸러 내고 놓는다.' },
        wrap: {
          teacher: '"경기 중 어지럽거나 아픈 순간, 맨 먼저 할 일은 무엇일까요?" 행동 카드를 차례로 놓게 하고, 오늘 갈림길에서 지후가 한 선택을 떠올리게 한다. "팀에 미안해서 말을 못 하겠다"는 말에는 쉬는 것도 팀을 돕는 일이라고 말해 준다.',
          exitTicket: [
            IT(X('timeline', OB('경기 중 몸이 이상할 때 할 행동을 차례대로 놓아요.', SIG, { axis: ['이상을 느낀 순간', '그 뒤'] }), { difficulty: 0.2 }),
              OB('경기 중 몸이 이상할 때 할 행동 3장을 차례대로 놓아요.', pickCards(SIG, ['stop', 'shade', 'tell']), { axis: ['이상을 느낀 순간', '그 뒤'] }),
              OB('함정 카드는 빼고 몸이 이상할 때 할 행동을 차례대로 놓아요.', SIG, { axis: ['이상을 느낀 순간', '그 뒤'] }, [{ id: 'endure', text: '참고 계속 뛰기' }, { id: 'hide', text: '혼자 화장실에 숨기' }])),
            { type: 'choice', prompt: '더운 날 경기에서 물은 언제 마셔야 할까요?', options: ['목이 마를 때만', '목마르기 전에 쉬는 시간마다', '경기가 다 끝난 뒤에'], answer: 1, difficulty: 0.2, explain: '목마름을 느끼기 전에 자주 마셔요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '몸이 보내는 신호',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '경기 중 어지러우면 ___ 그늘로 옮기고 선생님께 알려요.', answer: '경기를 멈추고' },
            { type: 'check', prompt: '경기 중 멈춰야 할 몸의 신호에 표시해요.', options: ['어지러움', '붓고 아픈 곳', '심한 목마름과 기운 없음'] },
          ],
        },
      }),
      M('wrap.camp-check', {
        title: '야영 준비 점검표', method: '야영 준비 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 4개 가운데 알맞은 것만 표시한다.', base: '항목 6개(함정 2개) 가운데 알맞은 것만 표시한다.', challenge: '알맞은 항목을 표시한 뒤 점검 항목 하나를 직접 더해 쓴다.' },
        wrap: {
          teacher: '"야영 가방을 싸기 전에 무엇을 점검해야 할까요?" 점검표를 함께 읽고 알맞은 것만 표시하게 한다. "추우면 텐트에서 난로를 켜면 된다"는 학생에게 오늘 갈림길에서 본 결과를 다시 떠올리게 한다. 마지막에 점검표에 없는 항목을 하나씩 더 쓰게 한다.',
          exitTicket: [
            IT(X('kitchen', CL('야영 준비 점검표에서 알맞은 항목만 표시해요.', '야영 준비 점검', [
              { id: 'cook', text: '취사장 위치 확인하기', ok: true }, { id: 'bag', text: '따뜻한 침낭 챙기기', ok: true }, { id: 'phone', text: '비상 연락처 적어 두기', ok: true },
              { id: 'light', text: '손전등 챙기기', ok: true }, { id: 'heater', text: '텐트 안에서 쓸 난로 챙기기' }, { id: 'alone', text: '혼자 밤 산책 계획 세우기' }]), { difficulty: 0.2 }),
              CL('야영 준비 점검표 4개 항목에서 알맞은 것만 표시해요.', '야영 준비 점검', [
                { id: 'cook', text: '취사장 위치 확인하기', ok: true }, { id: 'bag', text: '따뜻한 침낭 챙기기', ok: true }, { id: 'phone', text: '비상 연락처 적어 두기', ok: true }, { id: 'heater', text: '텐트 안에서 쓸 난로 챙기기' }])),
            { type: 'choice', prompt: '야영장에 도착해 가장 먼저 확인하면 좋은 것은?', options: ['가장 경치 좋은 계곡 바위', '취사장·화장실 위치와 비상 연락 방법', '불을 피울 수 있는 텐트 옆 자리'], answer: 1, difficulty: 0.2, explain: '먼저 정해진 시설과 연락 방법을 확인해요.' },
            { type: 'short', prompt: '야영 준비 점검표에 더하고 싶은 항목 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '야영 준비 점검',
          items: [
            { type: 'check', prompt: '야영 전에 챙길 것에 표시해요.', options: ['침낭', '손전등', '비상 연락처', '텐트 안에서 쓸 난로'] },
            { type: 'short', prompt: '우리 모둠 야영 안전 약속을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 온라인에서 시작되는 만남 제안과 실종 예방 (saf-life.m.online-lure) ====
  {
    const M = MK('online-lure', [8]);
    const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);
    const EVE = [
      { id: 'hw', text: '숙제하기', to: '저녁에 먼저 쓸 시간' }, { id: 'fam', text: '가족과 저녁 먹기', to: '저녁에 먼저 쓸 시간' },
      { id: 'late', text: '밤 11시 넘어 채팅하기', to: '밤늦게는 줄일 시간' }, { id: 'call', text: '모르는 사람과 늦은 밤 통화', to: '밤늦게는 줄일 시간' },
      { id: 'run', text: '운동·산책하기', to: '저녁에 먼저 쓸 시간' }, { id: 'bed', text: '잠자리에서 메시지 확인', to: '밤늦게는 줄일 시간' },
      { id: 'wash', text: '씻고 잠잘 준비하기', to: '저녁에 먼저 쓸 시간' }, { id: 'dawn', text: '새벽까지 게임 대화', to: '밤늦게는 줄일 시간' },
    ];
    const EV2 = ['저녁에 먼저 쓸 시간', '밤늦게는 줄일 시간'];
    const PROFILE = { text: '게임 메신저에서 "같은 학교 3학년 선배"라는 프로필의 상대가 이번 주말에 만나자고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'meet', text: '선배라니까 바로 만나기로 한다', result: '상대가 만날 곳을 사람 없는 곳으로 정한다.', impact: [{ who: '나', text: '위험해질 수 있다', tone: -1 }], why: '온라인 정보는 꾸밀 수 있어요. 바로 만나지 않아요.', ending: '확인 없이 만나기로 해 위험했어요.' },
      { id: 'check', text: '학교에서 그 선배가 맞는지 확인해 보자고 한다', result: '상대가 대답을 미룬다.', impact: [{ who: '나', text: '시간을 번다', tone: 1 }], end: '바로 만나지 않고 확인했어요.',
        next: { text: '상대가 "학교에서는 아는 척하지 마, 비밀로 해"라고 한다.', choices: [
          { id: 'keepsecret', text: '비밀을 지키고 주말에 나간다', result: '아무도 내가 어디 가는지 모른다.', impact: [{ who: '나', text: '도움을 받기 어렵다', tone: -1 }], why: '비밀로 하자는 말은 유인의 흔한 신호예요.' },
          { id: 'tellparent', text: '수상해서 보호자에게 대화를 보여 준다', result: '보호자와 함께 대화를 저장하고 대처를 의논한다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }] }] } },
      { id: 'parent', text: '답하기 전에 보호자에게 먼저 말한다', result: '보호자와 함께 프로필을 살펴본다.', impact: [{ who: '나', text: '혼자 판단하지 않는다', tone: 1 }], ending: '먼저 알려 함께 판단했어요.' }] };
    const D1 = { text: '친구 유나가 온라인에서 만난 친구를 만나러 간다고 한 뒤, 약속 시간이 한참 지나도 연락이 안 된다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'wait', text: '조금 더 기다려 본다', result: '저녁이 되어도 연락이 없다.', impact: [{ who: '유나', text: '도움이 늦어진다', tone: -1 }], why: '실종이 의심되면 기다리지 말고 바로 알려요.', end: '기다리는 사이 시간이 흘렀어요.',
        next: { text: '밤이 되어도 유나와 연락이 닿지 않는다.', choices: [
          { id: 'more', text: '내일까지 기다려 본다', result: '도움을 청할 시간을 놓친다.', impact: [{ who: '유나', text: '위험이 커진다', tone: -1 }] },
          { id: 'tellnow', text: '지금 보호자와 112에 알린다', result: '늦었지만 찾기가 시작된다.', impact: [{ who: '유나', text: '찾기 시작한다', tone: 1 }] }] } },
      { id: 'secret', text: '유나가 비밀로 해 달라고 했으니 말하지 않는다', result: '유나가 어디 있는지 아무도 모른다.', impact: [{ who: '유나', text: '도움을 받지 못한다', tone: -1 }], why: '친구의 안전이 걸린 일은 비밀보다 먼저예요.', ending: '비밀을 지키느라 도울 수 없었어요.' },
      { id: 'report', text: '보호자에게 알리고 함께 112에 신고한다', result: '경찰이 유나를 찾기 시작한다.', impact: [{ who: '유나', text: '바로 찾기 시작한다', tone: 1 }], end: '바로 알려 찾기가 시작됐어요.',
        next: { text: '경찰이 유나에 대해 아는 것을 묻는다.', choices: [
          { id: 'vague', text: '"잘 몰라요"라고만 한다', result: '찾을 단서가 적다.', impact: [{ who: '유나', text: '찾기 어려워진다', tone: -1 }], why: '아는 것을 정확히 전하면 빨리 찾을 수 있어요.' },
          { id: 'info', text: '만나기로 한 곳·시각·대화 내용을 알려 준다', result: '경찰이 그 장소부터 찾아본다.', impact: [{ who: '유나', text: '빨리 찾을 수 있다', tone: 1 }], end: '아는 정보를 정확히 전했어요.',
            next: { text: '유나 보호자가 대화 기록을 보여 달라고 한다. 유나가 창피해할까 걱정된다.', choices: [
              { id: 'show', text: '안전이 먼저라며 기록을 보여 준다', result: '대화 기록이 찾는 데 쓰인다.', impact: [{ who: '유나', text: '보호받는다', tone: 1 }] },
              { id: 'delete', text: '유나를 위해 대화를 지운다', result: '중요한 단서가 사라진다.', impact: [{ who: '유나', text: '찾기 어려워진다', tone: -1 }], why: '대화는 지우지 말고 저장해 알려요.' }] } }] } }] };
    const D1R = [{ id: 'r1', text: '실종이 의심되면 기다리지 않고 바로 알린다' }, { id: 'r2', text: '친구의 안전이 걸린 일은 비밀보다 먼저다' },
      { id: 'r3', text: '친구가 비밀로 하자면 지켜야 의리다', why: '친구를 지키는 것이 진짜 의리예요.' }, { id: 'r4', text: '실종 신고는 하루가 지나야 할 수 있다', why: '기다리지 않고 바로 신고할 수 있어요.' }];
    const D2 = { text: '오래 대화한 온라인 친구가 "부모님께 말하면 다시는 안 놀아"라며 주말에 혼자 나오라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'go', text: '친구를 잃기 싫어 혼자 나간다', result: '아무도 내가 어디 있는지 모른다.', impact: [{ who: '나', text: '위험해질 수 있다', tone: -1 }], why: '오래 대화했어도 온라인 정보는 꾸밀 수 있어요.', ending: '혼자 나가 위험했어요.' },
      { id: 'ignore', text: '답하지 않고 아무에게도 말하지 않는다', result: '상대가 계속 메시지를 보낸다.', impact: [{ who: '나', text: '혼자 불안하다', tone: -1 }], why: '답하지 않는 것만으로는 부족해요. 저장하고 알려요.', ending: '혼자 견디느라 힘들었어요.' },
      { id: 'refuse', text: '거절하고 대화를 저장한다', result: '상대가 화를 낸다.', impact: [{ who: '나', text: '증거를 남긴다', tone: 1 }], end: '거절하고 대화를 저장했어요.',
        next: { text: '상대가 "약속 어기면 학교에 소문낸다"며 위협한다.', choices: [
          { id: 'alone', text: '혼자 해결하려고 사과하고 달랜다', result: '위협이 더 심해진다.', impact: [{ who: '나', text: '더 힘들어진다', tone: -1 }], why: '위협을 받으면 혼자 해결하지 말고 알려요.' },
          { id: 'tellp', text: '보호자에게 알리고 112에 신고한다', result: '보호자와 함께 신고한다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }], end: '알리고 신고했어요.',
            next: { text: '보호자가 경찰에 알릴 때 무엇을 챙길지 묻는다.', choices: [
              { id: 'save', text: '저장한 대화와 상대 아이디를 함께 챙긴다', result: '경찰이 기록을 보고 대처한다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }] },
              { id: 'nothing', text: '이미 다 지워서 없다고 한다', result: '증거가 없어 대처가 늦어진다.', impact: [{ who: '나', text: '도움이 늦어진다', tone: -1 }], why: '대화는 지우지 말고 저장해 두어요.' }] } }] } }] };
    const D2R = [{ id: 'r1', text: '선물·비밀·서두름은 유인의 흔한 방식이다' }, { id: 'r2', text: '위협을 받으면 혼자 해결하지 않고 알린다' },
      { id: 'r3', text: '오래 대화한 친구는 믿어도 된다', why: '오래 대화해도 정보는 꾸밀 수 있어요.' }, { id: 'r4', text: '만남은 내 일이니 말하지 않아도 된다', why: '안전이 걸린 일은 믿을 어른과 나눠요.' }];
    const D3 = { text: '단톡방에서 친구 둘이 온라인 친구를 만나러 가는 계획을 이야기하며, 나에게는 비밀로 하라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'keep', text: '비밀을 지키고 모른 척한다', result: '친구들이 아무에게도 알리지 않고 나간다.', impact: [{ who: '친구들', text: '위험해질 수 있다', tone: -1 }], why: '친구의 안전이 걸린 일은 비밀보다 먼저예요.', ending: '모른 척해 친구들을 지키지 못했어요.' },
      { id: 'join', text: '걱정되니 같이 따라간다', result: '셋 다 어른 모르게 낯선 사람을 만난다.', impact: [{ who: '나와 친구들', text: '함께 위험해진다', tone: -1 }], why: '따라가는 것보다 믿을 어른에게 알리는 것이 지키는 길이에요.', ending: '함께 위험한 곳에 갔어요.' },
      { id: 'ask', text: '만나기 전에 보호자에게 말하자고 한다', result: '친구들이 머뭇거린다.', impact: [{ who: '친구들', text: '다시 생각한다', tone: 1 }], end: '친구들에게 알리자고 했어요.',
        next: { text: '친구들이 "괜찮아, 낮에 사람 많은 데서 볼 거야"라고 한다.', choices: [
          { id: 'okay', text: '그럼 괜찮겠다고 한다', result: '친구들이 계획대로 나간다.', impact: [{ who: '친구들', text: '위험이 남는다', tone: -1 }], why: '장소가 사람 많은 곳이어도 상대를 모르면 위험해요.' },
          { id: 'tellt', text: '안전이 걸린 일이라 담임 선생님이나 보호자에게 알린다', result: '어른들이 친구들과 이야기를 나눈다.', impact: [{ who: '친구들', text: '보호받는다', tone: 1 }], end: '믿을 어른에게 알렸어요.',
            next: { text: '친구들이 "왜 일렀어"라며 서운해한다.', choices: [
              { id: 'never', text: '사과하고 다음엔 절대 안 알린다고 한다', result: '다음에 또 위험한 일이 생겨도 알리기 어려워진다.', impact: [{ who: '친구들', text: '다음에 보호받기 어렵다', tone: -1 }], why: '알린 것은 친구를 지킨 일이에요.' },
              { id: 'explain', text: '"너희가 다칠까 봐 걱정됐어"라고 말한다', result: '친구들이 조금씩 마음을 푼다.', impact: [{ who: '친구들', text: '마음을 안다', tone: 1 }] }] } }] } }] };
    const D3R = [{ id: 'r1', text: '친구의 안전이 걸린 일은 비밀보다 먼저다' }, { id: 'r2', text: '온라인 정보는 꾸밀 수 있어 낮에도 위험할 수 있다' },
      { id: 'r3', text: '알리면 고자질이라 하지 않는다', why: '위험을 알리는 것은 고자질이 아니라 지키는 일이에요.' }, { id: 'r4', text: '사람 많은 곳이면 무조건 안전하다', why: '장소보다 상대를 모르는 것이 위험이에요.' }];
    const INFO = { reasons: [{ id: 'r5', text: '만날 곳·시각·대화 기록을 정확히 전한다' }, { id: 'r6', text: '대화는 지우지 않고 저장해 알린다' }], ok: ['r5', 'r6'] };
    const RESP = [{ id: 'noreply', text: '답하지 않기' }, { id: 'save', text: '대화 저장하기' }, { id: 'block', text: '차단하기' }, { id: 'tell', text: '보호자에게 알리기' }];

    ALL.push(
      M('intro.chat-story', {
        title: '가상 채팅 대화 흐름 읽기', method: '가상 채팅 대화 흐름 읽기', tool: 'story', minutes: 6,
        levels: { easy: '채팅 화면 3장에서 분위기가 바뀌는 화면을 고른다.', base: '화면 4장에서 분위기가 바뀌는 지점을 고른다.', challenge: '화면마다 수상한 까닭을 한 줄씩 말한다.' },
        intro: {
          teacher: '"칭찬, 선물, 비밀, 만남 — 이 대화는 어디서부터 이상해졌을까요?" 게임에서 만난 가상 인물이 칭찬·선물·만남 제안 순서로 대화를 이끄는 채팅 화면 네 장을 넘겨 보이고, 시연 단추로 \'비밀\'을 요구하는 화면이 바구니에 담기는 모습을 보인다. "칭찬하고 선물 주는 사람은 좋은 사람"이라는 말에는 "왜 그 사람은 부모님께 말하지 말라고 할까요?"라고 되묻는다. 유인은 무섭게가 아니라 친절하게 다가올 수 있다는 것을 오늘의 질문으로 삼는다.',
          student: '가상 채팅 화면 네 장을 보고 대화 분위기가 바뀌는 지점을 골라, 무엇이 수상한지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '분위기가 바뀐 화면', title: '가상 채팅', cards: [
            { id: 'c1', text: '"너 게임 진짜 잘한다!"', motif: 'star' }, { id: 'c2', text: '"아이템 선물 보냈어"', motif: 'flower' },
            { id: 'c3', text: '"우리 둘만 비밀이야, 부모님께는 말하지 마"', motif: 'moon' }, { id: 'c4', text: '"주말에 직접 만나자"', motif: 'house' }], shuffle: false }, sequence: [{ pick: ['c3'] }] },
          art: { draw: 'a paper-cut smartphone screen with chat bubbles moving from compliments to a gift to a secret meeting request, a teenager looking thoughtful', banner: '대화가 어디서 바뀌었을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '가상 대화다. 학생에게 실제로 받은 메시지를 묻거나 보여 달라고 하지 않는다.',
      }),
      M('intro.profile-dilemma', {
        title: '같은 학교라는 프로필 갈림길', method: '같은 학교라는 프로필 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사와 함께 갈림길 1번만 고르고 결과를 본다.', base: '갈림길 2번까지 가 보고 근거를 말한다.', challenge: '프로필이 진짜인지 확인할 방법을 한 가지 말한다.' },
        intro: {
          teacher: '"\'같은 학교 선배\'라는 프로필은 누가 쓴 걸까요? 확인할 수 있을까요?" 시연 단추로 \'확인하자고 한다 → 보호자에게 보여 준다\' 길이 이어지는 모습을 보이고, 다른 길을 고르면 어떻게 될지 반 전체에 묻는다. "같은 학교면 믿어도 된다"는 말에는 "프로필 사진과 학교 이름은 누구나 적을 수 있지 않을까요?"라고 되묻는다.',
          student: '같은 학교라는 프로필의 상대가 만나자고 할 때 나라면 어떻게 할지 고르고, 그 길의 결과를 짝과 이야기해요.',
          demo: DEMO_DIL('같은 학교 선배?', PROFILE, [['check', 'tellparent']], [{ id: 'r1', text: '온라인 정보는 꾸밀 수 있다' }, { id: 'r2', text: '비밀로 하자는 말은 유인의 신호다' }]),
          art: { draw: 'a paper-cut messenger profile card with a school badge and a question mark, a teenager showing the phone to a parent', banner: '프로필은 진짜일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('activity.signal-words', {
        title: '유인 신호 낱말 찾기', method: '대화 문장에서 유인 신호 낱말 찾기', tool: 'wordcards', minutes: 16,
        levels: { easy: '대화 문장 4개(첫 문항)와 둘째 문항 2개에 신호 낱말 카드를 붙인다.', base: '대화 문장 8개에 신호 낱말 카드를 붙이고, 신호가 둘 이상인 문장을 고른다.', challenge: '신호가 둘 이상인 문장과 신호가 없는 문장을 나누어 견준다.' },
        activity: {
          title: '유인 신호 낱말 찾기', tool: 'wordcards',
          teacher: '"이 문장에서 \'비밀·선물·지금 당장·너만\' 가운데 어떤 신호가 보이나요?" 신호 낱말을 붙인 뒤 신호가 둘 이상 겹친 문장이 왜 더 위험한지 말하게 한다. "오래 대화한 온라인 친구는 믿어도 된다"는 학생에게 "오래 대화한 사람이 \'부모님께는 말하지 마\'라고 하면 어떤 신호일까요?"라고 되묻는다. 모든 칭찬이 유인은 아니지만 신호가 겹치면 멈추고 알린다는 점을 짚는다.',
          task: '가상 대화 문장에서 유인 신호 낱말 카드를 찾아 붙이고, 신호가 둘 이상인 문장을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('대화 문장마다 보이는 신호 낱말 카드를 붙이세요.', [['이건 우리 둘만 아는 거야, 아무한테도 말하지 마', '비밀'], ['아이템 보내 줄게, 대신 사진 하나만', '선물'], ['지금 당장 나와, 늦으면 안 돼', '지금 당장'], ['너만 나를 이해해 줘', '너만']], [])),
            IT(MB('다른 대화 문장에도 신호 낱말 카드를 붙이세요.', [['주소 알려 주면 선물 보내 줄게', '선물'], ['부모님한테는 말하지 말고 와', '비밀'], ['오늘 밤 안에 답 안 하면 끝이야', '지금 당장'], ['다른 애들은 너 몰라, 나만 알아', '너만']], []),
              MB('다른 대화 문장 두 개에 신호 낱말 카드를 붙이세요.', [['주소 알려 주면 선물 보내 줄게', '선물'], ['부모님한테는 말하지 말고 와', '비밀']], [])),
            IT(PB('신호가 둘 이상 겹친 문장만 골라 담으세요.', '신호가 겹친 문장', [
              { id: 'm1', text: '선물 줄게, 우리 둘만 비밀이야', ok: true }, { id: 'm2', text: '지금 당장 나와, 너만 오면 돼', ok: true },
              { id: 'm3', text: '숙제 다 했어?' }, { id: 'm4', text: '내일 학교에서 봐' }, { id: 'm5', text: '오늘 게임 재밌었어' }]),
              null,
              SB('신호가 둘 이상인 문장과 신호가 없는 문장을 나누세요.', ['신호 둘 이상', '신호 없음'], [
                { id: 'm1', text: '선물 줄게, 우리 둘만 비밀이야', to: '신호 둘 이상' }, { id: 'm2', text: '지금 당장 나와, 너만 오면 돼', to: '신호 둘 이상' },
                { id: 'm3', text: '숙제 다 했어?', to: '신호 없음' }, { id: 'm4', text: '내일 학교에서 봐', to: '신호 없음' }]),
              { conclude: '비밀·선물·서두름·\'너만\'이 겹치면 멈추고, 대화를 저장해 믿을 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '신호가 겹친 문장과 신호가 없는 문장을 하나씩 골라, 무엇이 다른지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '\'부모님께 말하지 마\'에 담긴 신호는?', options: ['비밀', '선물'], answer: '비밀' }] },
      }),
      M('activity.time-budget', {
        title: '저녁 시간 나누기', method: '온라인 대화에 쓰는 시간 예산', tool: 'economy', minutes: 16,
        levels: { easy: '저녁 활동 카드 4장을 \'먼저 쓸 시간\'·\'밤늦게는 줄일 시간\'으로 나눈다.', base: '카드 8장을 나누고, 늦은 밤 대화를 줄이는 까닭을 짝짓는다.', challenge: '평일 저녁과 주말 낮 계획을 견주어 활동을 나눈다.' },
        activity: {
          title: '저녁 시간 나누기', tool: 'economy',
          teacher: '"하루 저녁 시간이 정해져 있다면 무엇에 먼저 쓰고 무엇을 줄일까요?" 저녁 활동 카드를 나눈 뒤 늦은 밤 대화를 줄이는 까닭을 함께 말한다. "밤에 하는 대화는 내 자유"라는 학생에게 "모두 잠든 시간에 수상한 제안을 받으면 누구에게 바로 말할 수 있을까요?"라고 되묻는다. 온라인 대화를 막자는 것이 아니라 시간과 장소를 정하자는 것임을 짚는다.',
          task: '저녁 시간 카드를 먼저 쓸 시간과 밤늦게는 줄일 시간으로 나누고, 그 까닭을 짝지어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('저녁 활동 카드를 두 칸으로 나누세요.', EV2, EVE), SB('저녁 활동 카드 4장을 두 칸으로 나누세요.', EV2, pickCards(EVE, ['hw', 'fam', 'late', 'call']))),
            IT(MB('늦은 밤 활동마다 줄이는 까닭을 이어 보세요.', [['모르는 사람과 늦은 밤 통화', '수상한 일이 생겨도 바로 도움을 청하기 어렵다'], ['잠자리에서 메시지 확인', '잠이 줄어 다음 날 판단이 흐려진다'], ['새벽까지 게임 대화', '보호자가 모르는 사이 대화가 길어진다']], ['밤에는 기분이 좋아서'])),
            IT(PB('내 평일 저녁 계획에 넣을 것만 골라 담으세요.', '평일 저녁 계획', [
              { id: 'p1', text: '숙제 마치기', ok: true }, { id: 'p2', text: '가족과 이야기하기', ok: true }, { id: 'p3', text: '정한 시간까지만 채팅', ok: true },
              { id: 'p4', text: '새벽까지 대화하기' }, { id: 'p5', text: '모르는 사람과 영상 통화' }]),
              null,
              SB('평일 저녁과 주말 낮 계획을 견주어 활동을 나누세요(맞지 않는 카드는 남겨요).', ['평일 저녁', '주말 낮'], [
                { id: 'q1', text: '학원 숙제 마치기', to: '평일 저녁' }, { id: 'q2', text: '친구와 공원 운동', to: '주말 낮' }, { id: 'q3', text: '가족 나들이', to: '주말 낮' },
                { id: 'q4', text: '씻고 일찍 잘 준비', to: '평일 저녁' }, { id: 'q5', text: '새벽까지 낯선 사람과 채팅' }]),
              { conclude: '온라인 대화 시간을 정해 두면 늦은 밤 수상한 제안에 혼자 놓이지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 저녁 시간 계획을 써요.', columns: ['때', '할 일'], cells: [['저녁 먹은 뒤', ''], ['잠자기 전', '']], answer: '(예) 숙제·가족과 이야기, 휴대전화 내려놓고 잠잘 준비' }] },
        notes: '시장 놀이판의 예산 막대는 돈(원)만 보여 주므로, 시간 예산은 카드 나누기(먼저 쓸 시간·줄일 시간)로 꾸몄다.',
      }),
      M('activity.help-map', {
        title: '도움받을 곳과 할 일 잇기', method: '도움받을 곳과 할 일 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '도움처 2곳(보호자·112) 가지에 상황 카드를 잇는다.', base: '도움처 4곳(보호자·담임 선생님·1388·112) 가지에 알맞은 상황을 잇는다.', challenge: '상황 카드를 급할 때와 급하지 않을 때로 나눈 뒤 도움처를 고른다.' },
        activity: {
          title: '도움받을 곳과 할 일 잇기', tool: 'mindmap',
          teacher: '"수상한 제안을 받았을 때 누구에게 먼저 말할 수 있을까요?" 도움처 가지마다 알맞은 상황을 이은 뒤 지금 당장 위험한 상황은 112라는 점을 함께 말한다. "위협을 받으면 혼자 해결해야 한다"는 학생에게 "혼자 해결하려다 위협이 더 커지면 어떻게 될까요?"라고 되묻는다. 말하기 어려울 때 상담할 수 있는 곳(1388)도 있다는 점을 짚는다.',
          task: '\'수상한 제안을 받았을 때\' 가운데에 도움처 가지를 달고, 각 도움처에 알맞은 상황을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('도움처마다 알맞은 상황을 이어 보세요.', [['보호자', '만나자는 대화를 함께 보고 의논할 때'], ['담임 선생님', '같은 학교라는 사람이 진짜인지 알아볼 때'], ['1388', '누구에게도 말하기 어려워 상담이 필요할 때'], ['112', '지금 위협을 받거나 친구 연락이 끊겼을 때']], [], { topic: '수상한 제안을 받았을 때' }),
              MB('도움처 두 곳에 알맞은 상황을 이어 보세요.', [['보호자', '만나자는 대화를 함께 보고 의논할 때'], ['112', '지금 위협을 받거나 친구 연락이 끊겼을 때']], [], { topic: '수상한 제안을 받았을 때' })),
            IT(SB('상황 카드를 급할 때와 급하지 않을 때로 나누세요.', ['지금 급할 때', '급하지 않을 때'], [
              { id: 'u1', text: '모르는 차가 계속 따라온다', to: '지금 급할 때' }, { id: 'u2', text: '만나러 간 친구 연락이 끊겼다', to: '지금 급할 때' },
              { id: 'u3', text: '이상한 선물 제안을 받았다', to: '급하지 않을 때' }, { id: 'u4', text: '선배라며 친구 신청이 왔다', to: '급하지 않을 때' }], { topic: '얼마나 급할까?' })),
            IT(PB('바로 112에 알려야 할 상황만 골라 담으세요.', '바로 112', [
              { id: 'n1', text: '"지금 나오지 않으면 찾아간다"는 위협', ok: true }, { id: 'n2', text: '만남 장소에 간 친구가 사라짐', ok: true },
              { id: 'n3', text: '게임 친구가 칭찬을 보냄' }, { id: 'n4', text: '광고 메시지가 옴' }], { topic: '바로 112' }),
              null, null, { conclude: '지금 위험하면 112, 의논은 보호자·담임 선생님, 말하기 어려우면 1388 — 혼자 해결하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움처마다 언제 연락할지 써요.', columns: ['도움처', '이럴 때'], cells: [['보호자', ''], ['1388', ''], ['112', '']], answer: '대화를 함께 보고 의논할 때, 말하기 어려워 상담이 필요할 때, 지금 위협·연락 끊김' }] },
      }),
      M('activity.meeting-dilemma', {
        title: '연락이 끊긴 친구 갈림길', method: '만남 장소로 가는 길 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거를 고른다.', challenge: '갈림길 3번까지 가며 알릴 때 전할 정보를 고르고, 그 근거까지 고른다.' },
        activity: {
          title: '연락이 끊긴 친구 갈림길', tool: 'dilemma',
          teacher: '"친구가 비밀로 해 달라고 했는데 연락이 끊겼다면, 비밀과 안전 가운데 무엇이 먼저일까요?" 학생마다 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "실종 신고는 하루가 지나야 한다"는 학생에게 "기다리는 하루 동안 무엇이 달라질까요?"라고 되묻는다. 알릴 때는 만날 곳·시각·대화 기록을 정확히 전한다는 점을 짚는다.',
          task: '온라인 만남과 관련된 상황에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구와 연락이 끊겼어요. 한 번 골라 결과를 보세요.', base: '친구와 연락이 끊겼어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구와 연락이 끊겼어요. 세 번 골라 알릴 정보까지 정하고 근거를 고르세요.' },
              '연락이 끊긴 친구', D1, [['report', 'info', 'show']], D1R, ['r1', 'r2'], INFO),
            DIL({ easy: '온라인 친구가 혼자 나오래요. 한 번 골라 결과를 보세요.', base: '온라인 친구가 혼자 나오래요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '온라인 친구가 혼자 나오래요. 세 번 골라 신고 때 챙길 것까지 정하고 근거를 고르세요.' },
              '혼자 나오라는 제안', D2, [['refuse', 'tellp', 'save']], D2R, ['r1', 'r2'], INFO),
            DIL({ easy: '친구들이 비밀 만남을 계획해요. 한 번 골라 결과를 보세요.', base: '친구들이 비밀 만남을 계획해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구들이 비밀 만남을 계획해요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '단톡방 비밀 계획', D3, [['ask', 'tellt', 'explain']], D3R, ['r1', 'r2'], INFO, { conclude: '친구의 안전이 걸린 일은 비밀보다 먼저예요. 기다리지 말고 보호자·112에 알리고, 아는 정보를 정확히 전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구 연락이 끊겼을 때 112에 전할 정보(장소·시각·대화)를 넣어 한두 문장으로 써요.' }] },
      }),
      M('wrap.respond-order', {
        title: '거절·저장·알리기 차례', method: '거절·저장·알리기 차례', tool: 'timeline', minutes: 7,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '행동 카드 4장을 차례로 놓는다.', challenge: '함정 카드(대화 지우기)를 걸러 내고 놓는다.' },
        wrap: {
          teacher: '"수상한 만남 제안을 받은 뒤, 대화를 지우는 것과 저장하는 것 가운데 무엇이 나를 지킬까요?" 행동 카드를 차례로 놓게 하고 \'대화 지우기\'가 왜 함정인지 말하게 한다. "창피해서 지우고 싶다"는 마음은 자연스럽지만 저장해 두어야 어른이 도울 수 있다고 말해 준다.',
          exitTicket: [
            IT(X('timeline', OB('수상한 만남 제안을 받은 뒤 할 행동을 차례대로 놓아요.', RESP, { axis: ['제안을 받은 순간', '그 뒤'] }), { difficulty: 0.2 }),
              OB('수상한 만남 제안을 받은 뒤 할 행동 3장을 차례대로 놓아요.', pickCards(RESP, ['noreply', 'save', 'tell']), { axis: ['제안을 받은 순간', '그 뒤'] }),
              OB('함정 카드는 빼고 수상한 제안을 받은 뒤 할 행동을 차례대로 놓아요.', RESP, { axis: ['제안을 받은 순간', '그 뒤'] }, [{ id: 'erase', text: '대화 지우기' }])),
            { type: 'choice', prompt: '"오래 대화한 온라인 친구는 믿어도 된다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['오래 대화했으니 믿어도 된다', '오래 대화해도 정보는 꾸밀 수 있으니 만남은 어른과 의논한다', '사진을 보내 줬으면 믿어도 된다'], answer: 1, difficulty: 0.25, explain: '온라인 정보는 꾸밀 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '수상한 제안에 대처하기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '수상한 제안을 받으면 답하지 않고, 대화를 ___ 보호자에게 알려요.', answer: '저장해' },
            { type: 'check', prompt: '유인 신호에 표시해요.', options: ['비밀로 하자는 말', '선물을 주겠다는 말', '지금 당장 나오라는 말'] },
          ],
        },
      }),
      M('wrap.friend-letter', {
        title: '친구에게 보내는 조언 글', method: '친구에게 보내는 조언 글과 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("네 마음은 ___. 그래도 ___ 하자. ___에게 같이 말하자")을 따라 쓴다.', base: '조언 메시지를 세 문장으로 쓰고 기준 3개(존중·구체적 행동·도움처)를 점검한다.', challenge: '친구가 거절해도 이어 갈 말 한 문장을 더해 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"온라인 친구를 만나러 가겠다는 친구에게 \'너 바보야?\'라고 하면 친구는 어떻게 할까요?" 친구의 마음을 존중하면서 할 행동과 도움처를 담은 조언 메시지를 쓰게 한다. 도움처(보호자·담임 선생님·1388·112) 가운데 하나는 꼭 넣게 한다. 실제 친구 이름이나 연락처는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '온라인 친구를 만나러 가려는 가상 친구에게 보낼 조언 메시지를 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '친구에게 보내는 조언' },
              prompt: '가상 친구에게 보낼 조언 메시지를 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['친구 마음을 존중하는 말을 썼다', '구체적인 행동을 제안했다', '도움받을 곳을 넣었다'], mustInclude: [['보호자', '부모님', '선생님', '1388', '112']] }, difficulty: 0.3 },
            { prompt: '문장 틀을 따라 조언 메시지를 세 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '네 마음은 ___. 그래도 ___ 하자. ___에게 같이 말하자.' } },
            { prompt: '조언 메시지에 친구가 거절해도 이어 갈 말 한 문장을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: ['친구 마음을 존중하는 말을 썼다', '구체적인 행동을 제안했다', '도움받을 곳을 넣었다', '거절당해도 이어 갈 말을 썼다'], mustInclude: [['보호자', '부모님', '선생님', '1388', '112']] } }),
            { type: 'choice', prompt: '친구에게 보낼 조언으로 가장 알맞은 것은?', options: ['너 바보야? 가지 마!', '네가 그 친구를 좋아하는 건 알아. 그래도 만나기 전에 부모님께 같이 말하자.', '알아서 해.'], answer: 1, difficulty: 0.2, explain: '마음을 존중하면서 행동과 도움처를 함께 말해요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '친구에게 보내는 조언',
          items: [
            { type: 'short', prompt: '온라인 친구를 만나러 가려는 가상 친구에게 보낼 조언을 세 문장으로 써요.' },
            { type: 'check', prompt: '내 조언을 기준표로 점검해요.', options: ['친구 마음을 존중했다', '할 행동이 구체적이다', '도움처가 들어 있다'] },
          ],
          easy: { note: '"네 마음은 ___. 그래도 ___ 하자." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '네 마음은 ___. 그래도 만나기 전에 ___에게 같이 말하자.', answer: '(예) 알아, 부모님' }] },
        },
      }),
    );
  }

  // ==== 9학년 · 아차 사고 기록과 공공시설 피난 안내도 (saf-life.m.evacuation-culture) ====
  {
    const M = MK('evacuation-culture', [9]);
    const SIGN = MB('표지 설명마다 알맞은 뜻 카드를 이어 보세요.', [['초록 바탕에 문 쪽으로 달리는 사람', '비상구'], ['빨간 통 그림', '소화기'], ['초록 바탕 화살표', '대피 방향'], ['빨간 테두리 원에 사선', '출입 금지']], ['쉬는 곳']);
    const NEAR = [['급식실 입구', 9], ['계단', 7], ['복도 모퉁이', 6], ['화장실 앞', 4], ['운동장 문', 3], ['과학실 앞', 2]];
    const CH = { type: 'bar', mode: 'read', title: '장소별 아차 사고 기록(가상 학교, 한 학기)', unit: '건', xLabel: '장소', yLabel: '기록 수', data: NEAR };
    // 가상 영화관: 맨 위 스크린, 가운데 좌석, 양옆 통로, 아래 줄에 비상구·출입구
    const THEATER = { grid: [6, 4], title: '가상의 영화관 피난 안내도', places: [{ name: '내 자리', icon: 'dot', at: [4, 2] }], regions: [
      { name: '스크린', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] },
      { name: '왼쪽 통로', cells: [[0, 1], [0, 2]] }, { name: '좌석', cells: [[1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2]] }, { name: '오른쪽 통로', cells: [[5, 1], [5, 2]] },
      { name: '왼쪽 비상구', cells: [[0, 3]] }, { name: '뒤 출입구', cells: [[1, 3], [2, 3], [3, 3], [4, 3]] }, { name: '오른쪽 비상구', cells: [[5, 3]] },
    ] };
    const E1 = { text: '공연장에 들어가 자리에 앉았다. 공연 시작까지 10분이 남았다.', ask: '먼저 무엇을 할까?', motif: 'star', choices: [
      { id: 'phone', text: '바로 휴대전화를 본다', result: '주변을 살피지 않은 채 시간이 지난다.', impact: [{ who: '나', text: '나갈 길을 모른다', tone: -1 }], why: '들어가자마자 비상구를 확인해 두어야 급할 때 바로 움직일 수 있어요.', end: '비상구를 모른 채 공연이 시작됐어요.',
        next: { text: '공연 중 경보가 울린다. 어디로 나가야 할지 모르겠다.', choices: [
          { id: 'follow', text: '사람들을 따라 무작정 뛴다', result: '한 출구로 사람이 몰려 밀린다.', impact: [{ who: '앞사람', text: '밀려 넘어질 수 있다', tone: -1 }] },
          { id: 'staff', text: '안내 방송과 직원의 손짓을 따라 걷는다', result: '조금 늦지만 안전하게 나간다.', impact: [{ who: '나', text: '안전하게 나간다', tone: 1 }] }] } },
      { id: 'exit', text: '가장 가까운 비상구 두 곳을 확인한다', result: '앞쪽과 옆쪽 비상구를 찾아 둔다.', impact: [{ who: '나', text: '나갈 길을 안다', tone: 1 }], end: '비상구를 확인해 두었어요.',
        next: { text: '공연 중 경보가 울리고 대피 방송이 나온다.', choices: [
          { id: 'bag', text: '물건을 다 챙긴 뒤 나간다', result: '나가는 사이 통로가 붐빈다.', impact: [{ who: '뒷사람', text: '길이 막힌다', tone: -1 }], why: '대피 때는 물건보다 몸이 먼저예요.' },
          { id: 'calm', text: '확인해 둔 가까운 비상구로 걸어간다', result: '사람들 흐름을 따라 비상구 쪽으로 간다.', impact: [{ who: '나', text: '빨리 나간다', tone: 1 }], end: '확인해 둔 비상구로 걸어 나갔어요.',
            next: { text: '가까운 비상구 앞에 사람이 몰려 있다.', choices: [
              { id: 'other', text: '확인해 둔 다른 비상구로 방향을 바꾼다', result: '덜 붐비는 길로 나간다.', impact: [{ who: '앞사람', text: '덜 밀린다', tone: 1 }] },
              { id: 'push', text: '앞사람을 밀며 나간다', result: '문 앞에서 사람들이 휘청인다.', impact: [{ who: '앞사람', text: '넘어질 수 있다', tone: -1 }], why: '밀면 문 앞에서 여럿이 넘어져요. 두 번째 비상구가 있었어요.' }] } }] } },
      { id: 'meet', text: '친구와 밖에서 다시 만날 곳을 정한다', result: '"흩어지면 정문 앞 시계탑에서 만나자"고 정한다.', impact: [{ who: '친구', text: '서로 찾느라 머뭇거리지 않는다', tone: 1 }], ending: '모일 곳을 정해 두어 흩어져도 바로 나갈 수 있어요.' }] };
    const E2 = { text: '영화관에서 친구가 "자리 좁으니까 가방은 통로 계단에 두자"고 한다.', ask: '가방을 어디에 둘까?', motif: 'house', choices: [
      { id: 'leave', text: '통로 계단에 둔다', result: '어두운 통로에 가방이 놓인다.', impact: [{ who: '지나가는 사람', text: '걸려 넘어질 수 있다', tone: -1 }], why: '통로는 대피할 때 쓰는 길이에요. 비워 둬요.', ending: '어두운 통로에 걸림돌이 생겼어요.' },
      { id: 'under', text: '내 발 앞이나 무릎 위에 둔다', result: '통로가 비어 있다.', impact: [{ who: '지나가는 사람', text: '편하게 지나간다', tone: 1 }], end: '통로를 비워 두었어요.',
        next: { text: '상영 중 화장실에 가야 한다. 통로가 어둡다.', choices: [
          { id: 'run', text: '빨리 다녀오려고 뛰어간다', result: '계단에서 발을 헛디딜 뻔한다.', impact: [{ who: '나', text: '넘어질 뻔한다', tone: -1 }] },
          { id: 'light', text: '계단 불빛을 보며 천천히 걷는다', result: '무사히 통로를 지난다.', impact: [{ who: '나', text: '안전하다', tone: 1 }], end: '천천히 걸어 무사히 다녀왔어요.',
            next: { text: '돌아오는데 통로 끝에 누군가 앉아 있다.', choices: [
              { id: 'ask', text: '"지나갈게요" 하고 양해를 구한다', result: '그 사람이 다리를 비켜 준다.', impact: [{ who: '앉은 사람', text: '부딪치지 않는다', tone: 1 }] },
              { id: 'jump', text: '다리를 넘어 지나간다', result: '발이 걸려 둘 다 휘청인다.', impact: [{ who: '앉은 사람', text: '부딪친다', tone: -1 }], why: '말로 알리면 넘지 않아도 돼요.' }] } }] } },
      { id: 'seat', text: '빈 옆자리에 올려 둔다', result: '늦게 온 관객이 자리를 찾느라 머뭇거린다.', impact: [{ who: '늦게 온 관객', text: '자리를 못 찾는다', tone: -1 }], why: '남의 자리를 막지 않고 내 자리 안에 둬요.', ending: '다른 관객이 불편했어요.' }] };
    const E3 = { text: '쇼핑몰 공연장에서 경보가 울렸다. 친구가 "또 훈련이겠지" 한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'ignore', text: '훈련이겠거니 하고 계속 본다', result: '사람들이 빠져나간 뒤에야 움직인다.', impact: [{ who: '나', text: '대피가 늦어진다', tone: -1 }], why: '경보가 울리면 훈련인지 따지기 전에 나가요.', ending: '대피가 늦었어요.' },
      { id: 'go', text: '바로 일어나 대피 방향을 본다', result: '초록 대피 방향 표지가 보인다.', impact: [{ who: '나', text: '빨리 움직인다', tone: 1 }], end: '바로 대피를 시작했어요.',
        next: { text: '엘리베이터와 비상계단이 함께 보인다.', choices: [
          { id: 'elev', text: '엘리베이터를 탄다', result: '엘리베이터 앞에 사람이 몰려 기다린다.', impact: [{ who: '나', text: '갇힐 수도 있다', tone: -1 }], why: '대피할 때는 엘리베이터보다 비상계단을 써요.' },
          { id: 'stairs', text: '대피 방향 표지를 따라 비상계단으로 간다', result: '계단으로 밖에 나온다.', impact: [{ who: '나', text: '안전하게 나온다', tone: 1 }], end: '비상계단으로 나왔어요.',
            next: { text: '밖으로 나왔는데 가방을 두고 왔다.', choices: [
              { id: 'gather', text: '모일 곳에서 친구들이 다 나왔는지 본다', result: '빠진 사람이 없는지 알 수 있다.', impact: [{ who: '친구', text: '서로 확인한다', tone: 1 }] },
              { id: 'back', text: '가방을 가지러 다시 들어간다', result: '나오는 사람들과 부딪친다.', impact: [{ who: '나', text: '다시 위험해진다', tone: -1 }], why: '한번 나오면 다시 들어가지 않아요.' }] } }] } }] };
    const ER = [{ id: 'r1', text: '들어가자마자 비상구를 알아 두면 급할 때 망설이지 않는다' }, { id: 'r2', text: '대피 길과 통로를 비워 두면 모두가 빨리 나간다' },
      { id: 'r3', text: '경보는 대부분 훈련이라 서두를 필요 없다', why: '훈련인지 진짜인지 알 수 없으니 바로 움직여요.' }, { id: 'r4', text: '비상구는 불이 났을 때 찾으면 된다', why: '연기와 인파 속에서는 찾기 어려워요. 미리 봐 둬요.' }];
    const EMORE = { reasons: [{ id: 'r5', text: '내가 길을 막지 않으면 뒷사람도 함께 산다' }, { id: 'r6', text: '직원의 안내는 시설을 가장 잘 아는 사람의 정보다' }], ok: ['r5', 'r6'] };
    const CULTURE = [{ id: 'a1', text: '다칠 뻔한 곳을 바로 알리기', to: '학생' }, { id: 'a2', text: '기록지에 사실대로 쓰기', to: '학생' },
      { id: 'b1', text: '기록을 모아 원인 살피기', to: '선생님' }, { id: 'b2', text: '알린 학생을 칭찬하기', to: '선생님' },
      { id: 'c1', text: '미끄럼 방지 매트 깔기', to: '시설' }, { id: 'c2', text: '고친 결과를 게시판에 알리기', to: '시설' }];

    ALL.push(
      M('intro.near-miss-story', {
        title: '급식실 아차 사고 사례', method: '급식실 아차 사고 사례', tool: 'story', minutes: 6,
        levels: { easy: '장면 3개만 넘겨 보고 알렸다면 달라질 장면 하나를 고른다.', base: '장면 4개에서 알렸다면 달라질 장면을 고른다.', challenge: '누가 무엇을 알렸어야 했는지(본 학생·조리 담당·선생님) 나누어 말한다.' },
        intro: {
          teacher: '"아무도 다치지 않았다면 알릴 필요가 없을까요?" 급식실 바닥 물기에 여러 학생이 미끄러질 뻔했지만 아무도 알리지 않은 가상 네 장면을 넘겨 보이고, 시연 단추로 알렸다면 달라질 장면 두 개가 바구니에 담기는 모습을 보인다. "괜히 고자질 같아요"라는 말에는 "알린 사람 덕분에 다음 사람이 넘어지지 않는다면 그것은 고자질일까요?"라고 되묻는다. 다칠 뻔한 일은 큰 사고의 신호라는 점을 짚는다.',
          student: '네 장면 가운데 누군가 알렸다면 다음 장면이 달라졌을 장면을 골라요. 누가 누구에게 알릴 수 있었는지 짝과 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '알렸다면 달라질 장면', title: '급식실 바닥 물기', shuffle: false, cards: [
            { id: 'c1', text: '첫 학생이 물기에 미끄러질 뻔한다', motif: 'cloud' }, { id: 'c2', text: '본 친구들이 웃고 지나간다', motif: 'leaf' },
            { id: 'c3', text: '점심 끝에 또 한 명이 미끄러질 뻔한다', motif: 'cloud' }, { id: 'c4', text: '다음 날 한 학생이 넘어져 다친다', motif: 'house' }] }, sequence: [{ pick: ['c1', 'c2'] }] },
          art: { draw: 'a paper-cut school cafeteria with a wet floor, a student slipping slightly while classmates walk past, a small yellow caution sign cut from paper on the side', banner: '다칠 뻔한 일, 알렸다면?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 가상이다. 학생이 다친 일을 묻지 않는다. 기록·알리기 문화가 주제이며 누구를 탓하는 활동이 아니다.',
      }),
      M('intro.sign-wordcards', {
        title: '안전 표지와 뜻 짝짓기', method: '안전 표지와 뜻 짝짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '표지 3개(비상구·소화기·대피 방향)를 뜻과 짝짓는다.', base: '표지 4개와 함정 카드 하나를 짝짓는다.', challenge: '비슷한 두 표지(비상구·대피 방향)가 무엇이 다른지 한 문장으로 말한다.' },
        intro: {
          teacher: '"초록 바탕에 달리는 사람 그림은 무엇을 알려 줄까요?" 표지 그림을 말로 설명한 카드를 띄우고 시연 단추로 뜻 카드가 하나씩 짝지어지는 모습을 보인다. "표지는 다 비슷해서 몰라도 된다"는 말에는 "연기가 찬 복도에서 글을 읽을 시간이 있을까요?"라고 되묻는다. 초록은 대피, 빨강은 소방 설비·금지와 자주 이어진다는 점을 짚고, 실제 표지는 학교 복도에서 함께 찾아보자고 한다.',
          student: '표지 그림 설명과 뜻 카드를 짝지어 보아요. 우리 학교 복도에서 본 적 있는 표지를 하나 떠올려 말해요.',
          demo: { tool: 'wordcards', options: SIGN.toolOptions, sequence: [SIGN.target] },
          art: { draw: 'paper-cut safety signs on a school corridor wall: a green running-person exit sign, a red fire extinguisher, a green arrow, cut in layered paper', banner: '이 표지는 무슨 뜻일까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '표지 그림은 말로 설명했다(교구가 실제 표지 도안을 그리지 않는다). 가능하면 학교에 붙은 실제 표지 사진을 함께 보인다.',
      }),
      M('activity.near-miss-chart', {
        title: '아차 사고 기록 해석', method: '가상의 아차 사고 기록 자료 해석', tool: 'chart', minutes: 16,
        levels: { easy: '막대 4개에서 기록이 가장 많은 곳을 고른다(값이 보인다).', base: '막대 6개를 읽고 먼저 고칠 장소와 그 까닭을 자료로 고른다.', challenge: '마지막 문항에서 기록되지 않은 아차 사고가 있을 가능성을 짚는 보기를 고른다.' },
        activity: {
          title: '아차 사고 기록 해석', tool: 'chart',
          teacher: '"이 그래프만 보고 학교가 가장 먼저 고칠 곳을 정한다면 어디일까요?" 가상 학교의 장소별 아차 사고 기록을 함께 읽고, 고를 때마다 자료의 어느 막대가 근거인지 말하게 한다. "기록이 적은 과학실은 안전한 곳"이라는 학생에게 "알리지 않은 일은 이 그래프에 있을까요?"라고 되묻는다. 자료는 수업용 가상 기록이라는 점을 밝힌다.',
          task: '가상 학교의 아차 사고 기록 그래프를 읽고, 먼저 고칠 장소와 그 까닭을 자료로 설명해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '아차 사고 기록이 가장 많은 장소를 고르세요.', toolOptions: Object.assign({}, CH, { question: '기록이 가장 많은 곳은?', choices: NEAR.map((d) => d[0]) }), target: { pick: 0 } },
              { prompt: '막대 4개 가운데 기록이 가장 많은 장소를 고르세요.', toolOptions: { data: NEAR.slice(0, 4), choices: NEAR.slice(0, 4).map((d) => d[0]) } }),
            IT({ prompt: '\'급식실 입구\'는 \'과학실 앞\'보다 기록이 몇 건 많은지 읽어 쓰세요.', toolOptions: Object.assign({}, CH, { question: '몇 건 많은가요?' }), target: { value: 7 } }),
            IT({ prompt: '급식실 입구를 먼저 고쳐야 하는 까닭으로 자료에 맞는 것을 고르세요.', toolOptions: Object.assign({}, CH, { question: '자료로 댈 수 있는 까닭은?', choices: ['기록 건수가 가장 많다', '가장 넓은 곳이다', '사람들이 좋아하는 곳이다'] }), target: { pick: 0 } },
              null,
              { prompt: '이 기록 자료를 해석할 때 주의할 점을 고르세요.', toolOptions: { question: '해석할 때 주의할 점은?', choices: ['알리지 않은 아차 사고는 기록에 빠져 있을 수 있다', '적힌 수가 실제 아차 사고 수와 언제나 같다', '기록이 적은 곳은 살피지 않아도 된다'] }, target: { pick: 0 } },
              { conclude: '기록이 모이면 고칠 곳의 차례를 정할 수 있어요. 알리지 않은 일은 자료에 없다는 것도 함께 생각해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 근거로 학교가 가장 먼저 고칠 장소와 그 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.report-form', {
        title: '아차 사고 기록지 쓰기', method: '아차 사고 기록지 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '언제·어디·무슨 일 칸이 있는 틀을 채워 쓴다.', base: '기록지를 쓰고 \'사실과 의견을 나눴나·고칠 점이 구체적인가\' 기준표로 점검한다.', challenge: '마지막 기록을 학생회에 내는 건의문으로 바꾸어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '아차 사고 기록지 쓰기', tool: 'rubric-writing',
          teacher: '"\'바닥이 너무 위험했다\'는 사실일까요, 의견일까요?" 가상 장면을 기록지로 옮길 때 본 것(사실)과 내 생각(의견)을 나누어 쓰게 한다. "누가 잘못했는지 써야 한다"는 학생에게 기록지는 탓할 사람을 찾는 종이가 아니라 고칠 곳을 찾는 종이라고 말해 준다. 실제 학생 이름은 쓰지 않고 \'한 학생\'처럼 쓰게 한다.',
          task: '가상 장면 하나를 골라 아차 사고 기록지(언제·어디·무슨 일·고칠 점)를 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '가상 장면을 아차 사고 기록지로 쓰세요: 체육관 입구 매트가 말려 올라가 두 학생이 걸려 넘어질 뻔했다.', toolOptions: { topic: '체육관 입구 매트가 말려 올라가 두 학생이 걸려 넘어질 뻔한 일을 언제·어디·무슨 일로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 4, title: '아차 사고 기록지' }, target: { selfCheck: ['언제와 어디를 썼다', '무슨 일이 있었는지 본 대로 썼다', '사람 이름 대신 \'한 학생\'처럼 썼다'] } },
              { prompt: '틀을 따라 체육관 입구 매트 장면을 기록지로 쓰세요.', toolOptions: { starter: '언제: ___. 어디: ___. 무슨 일: ___.' } }),
            IT({ prompt: '같은 장면에서 고칠 점을 두 문장으로 쓰세요.', toolOptions: { topic: '체육관 입구 매트 장면에서 무엇을, 누가 고치면 좋을지 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '고칠 점' }, target: { selfCheck: ['고칠 점이 구체적이다', '누가 고치면 좋을지 썼다', '사실과 내 의견을 나누어 썼다'] } },
              { prompt: '틀을 따라 매트 장면의 고칠 점을 두 문장으로 쓰세요.', toolOptions: { starter: '___을 ___ 하면 좋겠다. ___이 맡으면 좋겠다.' } }),
            IT({ prompt: '다른 가상 장면을 기록지로 쓰세요: 과학실 앞 복도에 젖은 우산이 모여 바닥이 미끄러웠다.', toolOptions: { topic: '과학실 앞 복도에 젖은 우산이 모여 바닥이 미끄러웠던 일을 기록지(언제·어디·무슨 일·고칠 점)로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 5, title: '아차 사고 기록지' }, target: { selfCheck: ['언제와 어디를 썼다', '사실과 의견을 나누어 썼다', '고칠 점이 구체적이다'] } },
              { prompt: '틀을 따라 젖은 우산 장면을 기록지로 쓰세요.', toolOptions: { starter: '언제: ___. 어디: ___. 무슨 일: ___. 고칠 점: ___.' } },
              { prompt: '젖은 우산 장면을 학생회에 내는 건의문(3~5문장)으로 바꾸어 쓰세요.', toolOptions: { topic: '과학실 앞 젖은 우산 장면을 학생회에 내는 건의문으로 바꾸어 쓰세요.', title: '학생회 건의문' }, target: { selfCheck: ['언제와 어디를 썼다', '사실과 의견을 나누어 썼다', '고칠 점이 구체적이다', '건의하는 까닭과 바라는 점을 썼다'] } },
              { conclude: '기록지는 탓할 사람이 아니라 고칠 곳을 찾는 종이예요. 사실을 정확히 쓰면 고칠 길이 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '아차 사고 기록지 칸을 채워요(가상 장면).', columns: ['칸', '내용'], cells: [['언제', ''], ['어디', ''], ['무슨 일', ''], ['고칠 점', '']] }] },
      }),
      M('activity.theater-map', {
        title: '영화관 대피 길 정하기', method: '영화관 피난 안내도로 대피 길 정하기', tool: 'map', minutes: 16,
        levels: { easy: '비상구 한 곳만 찾고, 핀을 놓으면 그 칸 이름이 바로 보인다.', base: '가까운 비상구와 통로가 막혔을 때의 다른 길까지 핀으로 정한다.', challenge: '어린 동생과 함께일 때 고려할 점을 보기에서 함께 고른다.' },
        activity: {
          title: '영화관 대피 길 정하기', tool: 'map',
          teacher: '"내 자리에서 가장 가까운 비상구는 어디일까요? 그 길이 막히면요?" 피난 안내도의 \'내 자리\' 표시부터 찾게 한 뒤 핀을 꽂게 한다. "들어온 문으로 나가면 된다"는 학생에게 "모두가 들어온 문으로 몰리면 어떻게 될까요?"라고 되묻는다. 입장할 때 비상구 두 곳을 봐 두는 습관을 짚는다.',
          task: '가상 영화관 피난 안내도에서 내 자리부터 비상구까지 길을 정하고, 한쪽이 막혔을 때 다른 길을 핀으로 표시해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('내 자리에서 가장 가까운 비상구에 핀을 꽂으세요.', THEATER, { region: '오른쪽 비상구' }),
            PIN('오른쪽 통로와 뒤 출입구에 연기가 찼어요. 나갈 비상구에 핀을 꽂으세요.', THEATER, { region: '왼쪽 비상구' }),
            IT(PIN('왼쪽 비상구로 갈 때 지나야 할 통로에 핀을 꽂으세요.', THEATER, { region: '왼쪽 통로' }),
              null,
              { prompt: '왼쪽 통로에 핀을 꽂고, 어린 동생과 함께일 때 고려할 점을 고르세요.', toolOptions: { ask: { q: '동생과 함께라면?', choices: ['손을 잡고 내가 앞에서 길을 연다', '동생 먼저 혼자 뛰어가게 한다', '동생을 찾을 때까지 자리에서 기다린다'] } }, target: { region: '왼쪽 통로', pick: 0 } },
              { conclude: '피난 안내도에서 \'내 자리\'를 먼저 찾고, 비상구 두 곳과 거기까지 가는 통로를 정해 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '영화관에 들어가 앉은 뒤 가장 먼저 할 일은?', options: ['가까운 비상구 두 곳 보기', '휴대전화 밝기 줄이기', '간식 꺼내기'], answer: '가까운 비상구 두 곳 보기' }] },
      }),
      M('activity.entry-dilemma', {
        title: '공연장 입장 뒤 갈림길', method: '공연장 입장 뒤 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번(경보가 울린 결과 장면)까지 가고 근거를 고른다.', challenge: '갈림길 3번까지 가고 뒷사람·직원 입장의 근거까지 고른다.' },
        activity: {
          title: '공연장 입장 뒤 갈림길', tool: 'dilemma',
          teacher: '"자리에 앉은 뒤 처음 1분 동안 무엇을 하느냐가 경보가 울린 뒤를 바꿀까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "비상구는 불이 났을 때 찾으면 된다"는 학생에게 "어둡고 사람이 몰린 곳에서 표지를 찾을 수 있을까요?"라고 되묻는다. 엘리베이터 대신 비상계단, 나온 뒤 다시 들어가지 않기도 함께 짚는다.',
          task: '공연장·영화관 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '공연장 자리에 앉았어요. 한 번 골라 결과를 보세요.', base: '공연장 자리에 앉았어요. 두 번 골라 경보가 울린 뒤까지 가고 근거를 고르세요.', challenge: '공연장 자리에 앉았어요. 세 번 골라 끝까지 가고 뒷사람·직원 입장의 근거도 고르세요.' },
              '공연장 입장 뒤', E1, [['exit', 'calm', 'other'], ['meet']], ER, ['r1', 'r2'], EMORE),
            DIL({ easy: '친구가 가방을 통로에 두자고 해요. 한 번 골라 보세요.', base: '친구가 가방을 통로에 두자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 가방을 통로에 두자고 해요. 세 번 골라 끝까지 가고 뒷사람 입장의 근거도 고르세요.' },
              '영화관 통로', E2, [['under', 'light', 'ask']], ER, ['r2'], EMORE),
            DIL({ easy: '경보가 울렸어요. 한 번 골라 결과를 보세요.', base: '경보가 울렸어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '경보가 울렸어요. 세 번 골라 끝까지 가고 직원 입장의 근거도 고르세요.' },
              '경보가 울리면', E3, [['go', 'stairs', 'gather']], ER, ['r1', 'r2'], EMORE, { conclude: '입장하면 비상구를 먼저 보고, 경보가 울리면 바로 비상계단으로 나가 모일 곳에서 서로 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '경보가 울려 밖으로 나왔는데 가방을 두고 왔다면?', options: ['다시 들어가 가져온다', '모일 곳에서 일행을 확인하고 직원에게 말한다', '친구에게 가져다 달라고 한다'], answer: '모일 곳에서 일행을 확인하고 직원에게 말한다' }] },
      }),
      M('wrap.culture-map', {
        title: '안전 문화 마인드맵', method: '안전 문화 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '학생·선생님 가지 두 개에 할 일 카드를 잇는다.', base: '학생·선생님·시설 가지 세 개에 할 일을 잇는다.', challenge: '\'알리기를 막는 마음\' 가지를 더해 그 마음 카드까지 잇는다.' },
        wrap: {
          teacher: '"다칠 뻔한 일을 알리는 학교가 되려면 누가 무엇을 해야 할까요?" 가지를 다 이은 뒤 알리기를 망설이게 하는 마음이 무엇인지 한두 명에게 듣고, "고자질이 아니라 다음 사람을 지키는 일"이라는 말로 정리한다. "다치지 않았으면 알릴 필요 없다"는 말이 나오면 오늘 본 급식실 네 장면을 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '알리는 학교', slots: ['학생', '선생님', '시설'], cards: strip(CULTURE) }, prompt: '가지마다 할 일 카드를 이어요.', target: { sort: { 학생: ['a1', 'a2'], 선생님: ['b1', 'b2'], 시설: ['c1', 'c2'] } }, difficulty: 0.2 },
              { prompt: '학생·선생님 가지에 할 일 카드를 이어요.', toolOptions: { slots: ['학생', '선생님'], cards: strip(CULTURE.slice(0, 4)) }, target: { sort: { 학생: ['a1', 'a2'], 선생님: ['b1', 'b2'] } } },
              { prompt: '네 가지에 카드를 이어요. \'알리기를 막는 마음\' 가지에도 알맞은 카드를 달아요.', toolOptions: { slots: ['학생', '선생님', '시설', '알리기를 막는 마음'], cards: [...strip(CULTURE), { id: 'd1', text: '고자질 같다는 걱정' }, { id: 'd2', text: '안 다쳤으니 괜찮다는 생각' }] }, target: { sort: { 학생: ['a1', 'a2'], 선생님: ['b1', 'b2'], 시설: ['c1', 'c2'], '알리기를 막는 마음': ['d1', 'd2'] } } }),
            { type: 'choice', prompt: '"다치지 않았으면 알릴 필요가 없다"는 생각이 위험한 까닭은?', options: ['다음 사람이 같은 곳에서 다칠 수 있어서', '알리면 귀찮은 일이 생겨서', '기록지 종이가 아까워서'], answer: 0, difficulty: 0.2, explain: '아차 사고는 큰 사고 앞에 오는 신호예요.' },
            { type: 'short', prompt: '알리기를 망설이는 친구에게 해 줄 말을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '다칠 뻔한 일을 알리는 학교',
          items: [
            { type: 'table', prompt: '누가 무엇을 할지 써요.', columns: ['누가', '할 일'], cells: [['학생', ''], ['선생님', ''], ['시설 담당', '']], answer: '알리고 사실대로 기록, 원인 살피고 칭찬, 고치고 결과 알림' },
            { type: 'short', prompt: '우리 학교에서 알리고 싶은 다칠 뻔한 곳 한 곳과 고칠 점을 써요(사람 이름은 쓰지 않아요).' },
          ],
        },
      }),
      M('wrap.entry-check', {
        title: '공공시설 입장 습관 점검', method: '공공시설 입장 습관 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 항목 3개에 스스로 표시한다.', base: '점검 항목 5개에 스스로 표시한다.', challenge: '항목 5개에 더해 가족에게 권할 습관 하나를 정했는지 표시한다.' },
        wrap: {
          teacher: '"다음에 영화관이나 공연장에 들어가면 자리에 앉기 전 무엇을 먼저 볼까요?" 점검 칸을 함께 읽고 지금 내 습관에 맞게 솔직하게 표시하게 한다. "표시를 많이 해야 잘한 것"이 아니라 다음에 해 볼 것을 찾는 점검이라고 말해 준다. 가족과 외출할 때 한 가지를 권해 보자고 하며 마친다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '공공시설 입장 습관' }, prompt: '공공시설에 들어갈 때 내가 할 습관에 스스로 표시해요.', target: { selfCheck: ['비상구 두 곳을 본다', '일행과 모일 곳을 정한다', '통로에 짐을 두지 않는다', '피난 안내도에서 내 자리를 찾는다', '경보가 울리면 바로 움직인다'] }, difficulty: 0.1 },
              { prompt: '공공시설에 들어갈 때 할 습관 세 가지에 스스로 표시해요.', target: { selfCheck: ['비상구 두 곳을 본다', '일행과 모일 곳을 정한다', '통로에 짐을 두지 않는다'] } },
              { prompt: '습관 다섯 가지와 가족에게 권할 습관에 스스로 표시해요.', target: { selfCheck: ['비상구 두 곳을 본다', '일행과 모일 곳을 정한다', '통로에 짐을 두지 않는다', '피난 안내도에서 내 자리를 찾는다', '경보가 울리면 바로 움직인다', '가족에게 권할 습관 하나를 정했다'] } }),
            { type: 'choice', prompt: '피난 안내도에서 가장 먼저 찾을 것은?', options: ['현재 위치(내 자리)', '화장실', '매점'], answer: 0, difficulty: 0.15, explain: '내 위치를 알아야 비상구까지 길을 정할 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '공공시설 입장 습관',
          items: [
            { type: 'check', prompt: '다음 외출 때 해 볼 습관에 표시해요.', options: ['비상구 두 곳 보기', '모일 곳 정하기', '통로 비우기', '피난 안내도에서 내 위치 찾기'] },
            { type: 'short', prompt: '가족에게 권할 습관 하나와 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 식품 표시 읽고 보관·섭취 판단하기 (saf-life.m.food-labels) ====
  {
    const M = MK('food-labels', [9]);
    const LABEL4 = SB('포장 뒷면 표시마다 왜 필요한지 이어 보세요.', ['소비기한', '보관 방법', '원재료', '알레르기'], [
      { id: 'w1', text: '언제까지 먹을 수 있나', to: '소비기한' }, { id: 'w2', text: '냉장인지 실온인지', to: '보관 방법' },
      { id: 'w3', text: '무엇으로 만들었나', to: '원재료' }, { id: 'w4', text: '내 몸에 맞지 않는 성분', to: '알레르기' }], { topic: '포장 뒷면' });
    const L1 = { text: '학원 가기 전 편의점 도시락을 샀다. 가방에 넣어 두었다가 밤 10시에 먹으려 한다.', ask: '도시락을 어떻게 할까?', motif: 'house', choices: [
      { id: 'bag', text: '그냥 가방에 넣어 둔다', result: '밤에 꺼내 보니 도시락이 미지근하다.', impact: [{ who: '나', text: '배탈이 날 수 있다', tone: -1 }], why: '표시된 보관 방법을 지키지 않으면 기한이 남아도 안전하지 않아요.', ending: '보관 방법을 지키지 않았어요.' },
      { id: 'now', text: '학원 가기 전에 바로 먹는다', result: '산 지 얼마 안 된 도시락을 먹는다.', impact: [{ who: '나', text: '안전하게 먹는다', tone: 1 }], ending: '보관할 걱정 없이 바로 먹었어요.' },
      { id: 'check', text: '포장 뒷면의 보관 방법 표시를 읽는다', result: '\'냉장 보관\'이라고 적혀 있다.', impact: [{ who: '나', text: '판단할 근거가 생긴다', tone: 1 }], end: '보관 방법 표시를 읽었어요.',
        next: { text: '학원에는 학생이 쓸 수 있는 냉장고가 있다.', choices: [
          { id: 'fridge', text: '학원 냉장고에 넣어 두었다가 먹는다', result: '차갑게 둔 도시락을 먹는다.', impact: [{ who: '나', text: '안전하게 먹는다', tone: 1 }] },
          { id: 'keep', text: '꺼내기 귀찮아 가방에 그대로 둔다', result: '몇 시간 동안 실온에 둔다.', impact: [{ who: '나', text: '배탈이 날 수 있다', tone: -1 }], why: '냉장 표시 식품은 냉장고에 둬야 기한이 지켜져요.' }] } }] };
    const JUDGE3 = ['먹기', '바로 먹기', '먹지 않기'];
    const JC = [
      { id: 'j1', text: '기한 3일 남음·냉장 보관대로 둠', to: '먹기' }, { id: 'j2', text: '기한 오늘까지·냉장고에 있었음', to: '바로 먹기' },
      { id: 'j3', text: '기한 지남·냉장 보관', to: '먹지 않기' }, { id: 'j4', text: '실온 보관 과자·기한 넉넉·안 뜯음', to: '먹기' },
      { id: 'j5', text: '냉장 보관 우유·가방에 반나절', to: '먹지 않기' }, { id: 'j6', text: '개봉 후 냉장·뜯고 하루 실온', to: '먹지 않기' },
    ];
    const JHARD = [{ id: 'j7', text: '기한 넉넉·냉동 보관·녹은 채 하루', to: '먹지 않기' }, { id: 'j8', text: '기한 오늘까지·뜯었고 냉장고에 둠', to: '바로 먹기' }];

    ALL.push(
      M('intro.label-mindmap', {
        title: '포장 뒷면 표시 떠올리기', method: '포장에 있는 표시 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '소비기한·보관 방법 가지 두 개만 이야기한다.', base: '가지 네 개(소비기한·보관 방법·원재료·알레르기)에 왜 필요한지 잇는다.', challenge: '두 표시를 함께 봐야 하는 경우(소비기한+보관 방법 등)를 말한다.' },
        intro: {
          teacher: '"과자 봉지 뒷면에는 무엇이 적혀 있을까요?" 학생 대답을 들으며 시연 단추로 가운데 \'포장 뒷면\'에 가지 네 개가 달리고 \'왜 필요한지\' 카드가 이어지는 모습을 보인다. "유명한 상품은 표시를 안 봐도 된다"는 말에는 "같은 상품도 내가 어떻게 보관했는지는 회사가 알 수 있을까요?"라고 되묻는다. 오늘은 표시를 읽고 먹을지 판단하는 연습을 한다고 밝힌다.',
          student: '포장 뒷면에서 본 적 있는 표시를 떠올려요. 소비기한·보관 방법·원재료·알레르기 표시가 각각 왜 필요한지 짝과 한 가지씩 말해요.',
          demo: { tool: 'mindmap', options: LABEL4.toolOptions, sequence: [LABEL4.target] },
          art: { draw: 'a paper-cut snack package turned over to show its back label, with layered paper tags for date, storage and allergy information around it', banner: '포장 뒷면에 무엇이 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.lunch-dilemma', {
        title: '편의점 도시락 갈림길', method: '편의점 도시락 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번까지 가 본다.', challenge: '보관 방법 표시를 근거로 고른 길을 설명한다.' },
        intro: {
          teacher: '"밤에 먹을 도시락을 낮에 샀다면 어떻게 두어야 할까요?" 시연 단추로 \'표시를 읽는다 → 냉장고에 넣는다\' 길이 이어지는 모습을 보인 뒤, 다른 길을 고르면 어떻게 되는지 두세 명에게 묻는다. "기한이 남았으니 괜찮다"는 말에는 "소비기한은 어떤 조건을 지켰을 때의 기한일까요?"라고 되묻는다.',
          student: '편의점 도시락을 사서 밤에 먹으려는 상황이에요. 나라면 어떻게 할지 고르고, 그 까닭을 짝에게 말해요.',
          demo: DEMO_DIL('편의점 도시락', L1, [['check', 'fridge']]),
          art: { draw: 'a paper-cut convenience store lunch box on a desk next to a school bag at night, with a small paper refrigerator nearby', banner: '밤에 먹을 도시락, 어떻게 둘까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),
      M('activity.label-judge', {
        title: '포장 표시로 먹을지 판단', method: '가상 포장 표시로 먹을지 판단', tool: 'kitchen', minutes: 16,
        levels: { easy: '표시 카드 4장을 세 바구니에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '표시 카드 6장을 \'먹기·바로 먹기·먹지 않기\'로 나눈다.', challenge: '조건이 둘 겹친 카드 2장이 더해진 8장을 나눈다.' },
        activity: {
          title: '포장 표시로 먹을지 판단', tool: 'kitchen',
          teacher: '"기한이 남았는데 먹지 않는 것이 맞는 경우도 있을까요?" 카드마다 소비기한과 보관 상태를 함께 소리 내어 읽고 판단하게 한다. "냄새가 괜찮으면 먹어도 된다"는 학생에게 "냄새로 알 수 없는 변화도 있을까요?"라고 되묻는다. 판단의 근거는 늘 표시와 실제 보관 상태 두 가지라는 점을 짚는다. 카드의 상품 표시는 모두 가상이다.',
          task: '가상 포장 표시와 보관 상태를 읽고 \'먹기·바로 먹기·먹지 않기\'로 판단해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('표시와 보관 상태를 읽고 세 바구니에 나누세요.', JUDGE3, JC, { groups: false }),
              SB('표시 카드 4장을 세 바구니에 나누세요.', JUDGE3, pickCards(JC, ['j1', 'j2', 'j3', 'j5']), { groups: false }),
              SB('조건이 겹친 카드까지 8장을 세 바구니에 나누세요.', JUDGE3, [...JC, ...JHARD], { groups: false })),
            IT(PB('보관 방법 표시를 지키지 않은 카드만 골라 담으세요.', '보관 조건을 어김', [
              { id: 'q1', text: '냉장 우유를 책상 위에 반나절', ok: true }, { id: 'q2', text: '냉동 만두를 냉동실에', ok: false },
              { id: 'q3', text: '뜯은 소스를 실온에 하루', ok: true }, { id: 'q4', text: '실온 과자를 서랍에', ok: false },
              { id: 'q5', text: '냉장 김밥을 버스 짐칸에 오전 내내', ok: true }], { groups: false })),
            IT(MB('표시 문구와 알맞은 행동을 이어 보세요.', [['개봉 후 냉장 보관', '뜯은 뒤엔 냉장고에 둔다'], ['직사광선을 피해 보관', '햇빛 드는 창가에 두지 않는다'], ['알레르기 유발 성분: 땅콩', '땅콩 알레르기가 있으면 먹지 않는다']], ['맛이 좋으면 괜찮다'], { groups: false }), null, null,
              { conclude: '소비기한은 표시된 보관 방법을 지켰을 때의 기한이에요. 표시와 실제 보관 상태를 함께 보고 판단해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표시를 읽고 판단을 써요(먹기 / 바로 먹기 / 먹지 않기).', columns: ['표시와 상태', '판단'], cells: [['기한 오늘까지·냉장고에 있었음', ''], ['냉장 우유·가방에 반나절', ''], ['실온 과자·기한 넉넉·안 뜯음', '']], answer: '바로 먹기, 먹지 않기, 먹기' }] },
      }),
      M('activity.allergy-story', {
        title: '알레르기 친구와 간식 나누기', method: '알레르기 친구와 간식 나누기 사례', tool: 'story', minutes: 16,
        levels: { easy: '장면 3개에서 표시를 확인해야 할 장면을 고른다.', base: '장면 5개를 분석하고 친구에게 할 말을 말풍선에 넣는다.', challenge: '친구가 몸이 이상하다고 할 때 할 일의 차례까지 놓는다.' },
        activity: {
          title: '알레르기 친구와 간식 나누기', tool: 'story',
          teacher: '"친구에게 간식을 건네기 전에 무엇을 먼저 볼까요?" 가상 인물 서윤이 땅콩 알레르기가 있는 친구 지호와 간식을 나누는 장면을 넘겨 보며, 표시를 봐야 할 순간을 고르게 한다. "조금 들어간 것은 괜찮다"는 학생에게 "알레르기는 양이 적어도 몸이 크게 반응할 수 있다"고 짚는다. 친구가 이상하다고 하면 내가 판단하지 말고 바로 어른께 알린다는 점을 강조한다.',
          task: '알레르기가 있는 친구와 간식을 나누는 가상 장면을 읽고, 표시를 확인할 장면과 친구에게 할 말을 정해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(PB('성분 표시를 꼭 확인해야 할 장면을 모두 고르세요.', '표시를 볼 장면', [
              { id: 'a1', text: '서윤이 과자를 사러 간다', ok: true }, { id: 'a2', text: '지호가 가방을 내려놓는다' },
              { id: 'a3', text: '다른 친구가 쿠키를 나눠 준다', ok: true }, { id: 'a4', text: '모두 손을 씻는다' },
              { id: 'a5', text: '처음 보는 초콜릿을 건넨다', ok: true }], { title: '간식 나누기' }),
              PB('성분 표시를 확인해야 할 장면을 고르세요(3장).', '표시를 볼 장면', [
                { id: 'a1', text: '서윤이 과자를 사러 간다', ok: true }, { id: 'a2', text: '지호가 가방을 내려놓는다' },
                { id: 'a5', text: '처음 보는 초콜릿을 건넨다', ok: true }], { title: '간식 나누기' })),
            IT({ prompt: '서윤이 지호에게 할 말을 말풍선에 넣으세요.', toolOptions: { mode: 'fill', title: '간식 나누기', slots: [{ id: 'f1', who: '서윤', label: '"먹기 전에 ___ 같이 볼까?"' }, { id: 'f2', who: '서윤', label: '"땅콩이 들어 있으면 ___."' }], cards: [{ id: 'w1', text: '성분 표시를' }, { id: 'w2', text: '다른 간식을 고르자' }, { id: 'y1', text: '조금만 먹어 봐' }] }, target: { fill: { f1: 'w1', f2: 'w2' } } }),
            IT(OB('간식을 나누기 전 할 일을 차례대로 놓으세요.', [{ id: 'o1', text: '친구에게 알레르기를 묻는다' }, { id: 'o2', text: '성분 표시를 함께 읽는다' }, { id: 'o3', text: '맞는 간식만 나눈다' }], { title: '간식 나누기' }),
              null,
              OB('지호가 먹고 나서 입 안이 이상하다고 해요. 할 일을 차례대로 놓으세요.', [{ id: 'p1', text: '먹던 것을 멈추게 한다' }, { id: 'p2', text: '바로 선생님께 알린다' }, { id: 'p3', text: '먹은 간식 포장을 챙긴다' }], { title: '친구가 이상해요' }, [{ id: 'p4', text: '괜찮아질 때까지 기다린다' }]),
              { conclude: '알레르기는 양이 적어도 위험할 수 있어요. 나누기 전에 묻고, 표시를 읽고, 이상하면 바로 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '알레르기가 있는 친구에게 간식을 건네기 전에 할 말을 한 문장으로 써요.' }] },
      }),
      M('activity.leftover-order', {
        title: '남은 음식 보관 차례', method: '남은 음식 보관 차례', tool: 'timeline', minutes: 16,
        levels: { easy: '카드 3장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 차례대로 놓는다.', challenge: '함정 카드(실온에 밤새 두기)가 섞인 판에서 걸러 내며 놓는다.' },
        activity: {
          title: '남은 음식 보관 차례', tool: 'timeline',
          teacher: '"배달 음식이 남았을 때 그릇째 냉장고에 넣으면 될까요?" 차례 카드를 놓은 뒤 왜 덜어 담는지, 왜 날짜를 적는지 한 사람씩 까닭을 말하게 한다. "전자레인지에 데우면 오래된 음식도 괜찮다"는 학생에게 "데우는 것이 오래 둔 시간을 되돌릴 수 있을까요?"라고 되묻는다. 데운 음식은 다시 오래 두지 않는다는 점을 짚는다.',
          task: '남은 음식을 안전하게 보관하는 행동 카드를 차례대로 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(Object.assign(OB('배달 음식이 남았어요. 보관 차례대로 놓으세요.', [{ id: 'l1', text: '먹을 만큼 덜어 그릇에 담기' }, { id: 'l2', text: '한 김 식히기' }, { id: 'l3', text: '뚜껑 덮고 날짜 적기' }, { id: 'l4', text: '냉장고에 넣기' }, { id: 'l5', text: '먹을 만큼만 다시 데우기' }], { axis: ['먼저', '나중'] })),
              OB('배달 음식이 남았어요. 카드 3장을 차례대로 놓으세요.', [{ id: 'l1', text: '먹을 만큼 덜어 그릇에 담기' }, { id: 'l3', text: '뚜껑 덮고 날짜 적기' }, { id: 'l4', text: '냉장고에 넣기' }], { axis: ['먼저', '나중'] }),
              OB('함정 카드는 빼고 보관 차례대로 놓으세요.', [{ id: 'l1', text: '먹을 만큼 덜어 그릇에 담기' }, { id: 'l2', text: '한 김 식히기' }, { id: 'l3', text: '뚜껑 덮고 날짜 적기' }, { id: 'l4', text: '냉장고에 넣기' }, { id: 'l5', text: '먹을 만큼만 다시 데우기' }], { axis: ['먼저', '나중'] }, [{ id: 'lt', text: '실온에 밤새 두었다 넣기' }])),
            IT(OB('데운 음식이 남지 않게 하는 차례대로 놓으세요.', [{ id: 'h1', text: '먹을 양만 덜기' }, { id: 'h2', text: '덜어 낸 것만 데우기' }, { id: 'h3', text: '데운 것은 그 자리에서 먹기' }], { axis: ['먼저', '나중'] })),
            IT(OB('편의점 냉장 식품을 산 뒤 차례대로 놓으세요.', [{ id: 'c1', text: '보관 방법 표시 읽기' }, { id: 'c2', text: '집에 오자마자 냉장고에' }, { id: 'c3', text: '먹기 전 기한 다시 보기' }], { axis: ['산 뒤', '먹기 전'] }), null, null,
              { conclude: '남은 음식은 덜어 식히고, 날짜를 적어 냉장하고, 먹을 만큼만 데워요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '데운 음식이 남았을 때 알맞은 것은?', options: ['다시 실온에 오래 둔다', '처음부터 먹을 만큼만 데운다', '한 번 더 데우면 괜찮다'], answer: '처음부터 먹을 만큼만 데운다' }] },
      }),
      M('activity.snack-chart', {
        title: '간식 고르는 기준 그래프', method: '가상의 간식 구매 기준 조사 그래프', tool: 'chart', minutes: 16,
        levels: { easy: '원그래프에서 가장 큰 조각을 고른다.', base: '네 조각을 비교해 차이를 읽고, 표시를 보는 사람이 적은 까닭을 고른다.', challenge: '표시 보기를 늘릴 캠페인 문구를 고른다.' },
        activity: {
          title: '간식 고르는 기준 그래프', tool: 'chart',
          teacher: '"우리 반이 간식을 고를 때 가장 많이 보는 것은 무엇일까요?" 가상 학급 조사 원그래프를 읽고, \'표시\' 조각이 작은 까닭을 모둠별로 짐작해 보게 한다. "표시는 어른만 보는 것"이라는 학생에게 "알레르기가 있는 친구라면 무엇을 가장 먼저 봐야 할까요?"라고 되묻는다. 자료는 수업용 가상 조사라는 점을 밝힌다.',
          task: '가상 학급 조사 원그래프를 읽고, 표시를 보는 사람이 적은 까닭과 늘릴 방법을 생각해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '간식을 고를 때 가장 많이 보는 것을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '간식을 고를 때 보는 것(가상 학급 조사)', unit: '%', data: [['값', 40], ['맛', 35], ['양', 15], ['표시', 10]], question: '가장 큰 조각은?', choices: ['값', '맛', '양', '표시'] }, target: { pick: 0 } }),
            IT({ prompt: '\'맛\'은 \'표시\'보다 몇 %p 큰지 읽어 쓰세요.', toolOptions: { type: 'circle', mode: 'read', title: '간식을 고를 때 보는 것(가상 학급 조사)', unit: '%', data: [['값', 40], ['맛', 35], ['양', 15], ['표시', 10]], question: '몇 %p 큰가요?' }, target: { value: 25 } }),
            IT({ prompt: '표시를 보는 사람이 적은 까닭으로 알맞은 짐작을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '간식을 고를 때 보는 것(가상 학급 조사)', unit: '%', data: [['값', 40], ['맛', 35], ['양', 15], ['표시', 10]], question: '표시 조각이 작은 까닭은?', choices: ['뒷면 글씨가 작고 볼 습관이 없어서', '표시가 쓸모없어서', '모든 간식이 같아서'] }, target: { pick: 0 } },
              null,
              { prompt: '표시를 보는 사람을 늘릴 캠페인 문구로 가장 알맞은 것을 고르세요.', toolOptions: { question: '알맞은 캠페인 문구는?', choices: ['사기 전에 뒤집어 보기: 기한·보관·알레르기', '간식은 몸에 나빠요!', '비싼 간식이 좋은 간식'] }, target: { pick: 0 } },
              { conclude: '자료로 우리 습관을 보면 바꿀 점이 보여요. 간식을 고를 때 뒷면 표시도 기준에 넣어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '간식을 고를 때 내가 볼 기준 두 가지를 차례대로 써요.' }] },
      }),
      M('wrap.label-words', {
        title: '식품 표시 낱말 정리', method: '식품 표시 낱말 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 3개를 뜻 문장과 짝짓는다.', base: '낱말 4개와 함정 카드 하나를 뜻 문장과 짝짓는다.', challenge: '낱말 카드로 판단 문장의 빈칸을 채운다.' },
        wrap: {
          teacher: '"오늘 배운 표시 낱말을 내 말로 풀면 어떻게 될까요?" 짝짓기를 마친 뒤 \'소비기한\'과 \'보관 방법\'을 함께 넣은 판단 문장을 두세 명이 말하게 한다. "소비기한만 보면 된다"는 말에는 보관 방법이 지켜졌는지가 함께 있어야 한다고 다시 짚는다.',
          exitTicket: [
            IT(Object.assign({ type: 'tool', tool: 'wordcards', difficulty: 0.2 }, (() => { const b = MB('표시 낱말과 뜻 문장을 이어요.', [['표시된 대로 보관했을 때 먹어도 되는 기한', '소비기한'], ['냉장·냉동·실온 가운데 어디에 둘지', '보관 방법'], ['몸에 맞지 않을 수 있는 성분', '알레르기 표시'], ['뜯은 뒤 바뀌는 보관 조건', '개봉 후 주의']], ['유통 회사']); return { prompt: b.prompt, options: b.toolOptions, target: b.target }; })()),
              MB('표시 낱말 3개와 뜻 문장을 이어요.', [['표시된 대로 보관했을 때 먹어도 되는 기한', '소비기한'], ['냉장·냉동·실온 가운데 어디에 둘지', '보관 방법'], ['몸에 맞지 않을 수 있는 성분', '알레르기 표시']], []),
              ({ prompt: '낱말 카드로 판단 문장을 완성해요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '___이 남았어도' }, { id: 'f2', label: '___을 어겼으면 먹지 않는다.' }], cards: [{ id: 'w1', text: '소비기한' }, { id: 'w2', text: '보관 방법' }, { id: 'y1', text: '맛' }] }, target: { fill: { f1: 'w1', f2: 'w2' } } })),
            { type: 'choice', prompt: '냉장 표시 김밥이 소비기한은 남았지만 오전 내내 가방에 있었다. 판단은?', options: ['기한이 남았으니 먹는다', '보관 방법을 어겼으니 먹지 않는다', '냄새를 맡아 보고 정한다'], answer: 1, difficulty: 0.25, explain: '소비기한은 표시된 보관 방법을 지켰을 때의 기한이에요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '식품 표시 읽기',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 내 말로 써요.', columns: ['낱말', '뜻'], cells: [['소비기한', ''], ['보관 방법', ''], ['알레르기 표시', '']], answer: '보관대로 두었을 때 먹을 수 있는 기한, 어디에 둘지, 몸에 맞지 않을 수 있는 성분' },
            { type: 'blank', prompt: '빈칸에 알맞은 낱말을 써요.', text: '소비기한은 표시된 ___을 지켰을 때의 기한이다.', answer: '보관 방법' },
          ],
        },
      }),
      M('wrap.label-writing', {
        title: '가족에게 보내는 표시 안내문', method: '가족에게 알리는 표시 읽기 안내문', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 따라 안내문을 쓴다.', base: '세 문장으로 쓰고 \'정확·짧음·행동\' 기준으로 점검한다.', challenge: '동생이 읽을 쉬운 말로 다시 쓰고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"가족 단톡방에 보낼 \'식품 표시 읽는 법\' 세 문장을 쓴다면 무엇을 넣을까요?" 오늘 배운 소비기한·보관 방법·알레르기 가운데 꼭 넣을 것을 고르게 한 뒤 쓰게 한다. "길게 써야 정확하다"는 학생에게 짧고 할 행동이 분명한 문장이 더 잘 읽힌다고 말해 준다. 가족 이름이나 연락처는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '가족에게 보낼 \'식품 표시 읽는 법\' 안내문을 세 문장으로 쓰세요.', minChars: 40, maxChars: 200, minSentences: 3, maxSentences: 4, title: '표시 읽기 안내문' }, prompt: '가족에게 보낼 표시 읽기 안내문을 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['표시 내용을 정확하게 썼다', '문장이 짧다', '할 행동이 들어 있다'], mustInclude: [['소비기한', '보관']] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 표시 읽기 안내문을 쓰고 기준표에 표시해요.', toolOptions: { starter: '사기 전에 ___을 봐요. ___ 보관이면 ___에 둬요. ___가 있으면 성분을 먼저 봐요.' } },
              { prompt: '동생이 읽을 쉬운 말로 안내문을 다시 쓰고 기준표에 표시해요.', target: { selfCheck: ['표시 내용을 정확하게 썼다', '문장이 짧다', '할 행동이 들어 있다', '동생도 알 쉬운 말로 썼다'], mustInclude: [['소비기한', '보관', '언제까지']] } }),
            { type: 'choice', prompt: '안내문에 넣기 가장 알맞은 문장은?', options: ['표시를 잘 봅시다!', '냉장 표시가 있으면 사 오자마자 냉장고에 넣어요.', '식품은 위험해요.'], answer: 1, difficulty: 0.2, explain: '할 행동이 분명한 문장이 읽은 사람의 행동을 바꿔요.' },
          ],
        },
        worksheet: {
          title: '가족에게 보내는 안내문',
          items: [
            { type: 'short', prompt: '가족에게 보낼 \'식품 표시 읽는 법\' 안내문을 세 문장으로 써요.' },
            { type: 'check', prompt: '내 안내문을 기준표로 점검해요.', options: ['정확하다', '짧다', '할 행동이 있다'] },
          ],
          easy: { note: '"사기 전에 ___을 봐요" 틀로 시작해도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워요.', text: '사기 전에 ___을 봐요.', answer: '소비기한(보관 방법)' }] },
        },
      }),
    );
  }

  // ==== 9학년 · 경고 그림문자와 실습실 전기·기계 안전 (saf-life.m.pictogram-electric) ====
  {
    const M = MK('pictogram-electric', [9]);
    // 경고 그림문자는 교구가 실제 도안을 그리지 못해 모양을 말로 적는다(교사가 실제 제품 표시를 함께 보인다)
    const PIC = MB('그림문자 모양마다 알리는 위험을 이어 보세요.', [['불꽃 모양', '불이 붙기 쉬워요'], ['해골과 뼈 모양', '먹거나 마시면 매우 해로워요'], ['손과 금속이 녹는 모양', '살갗과 금속을 상하게 해요'], ['느낌표 모양', '피부·눈을 자극할 수 있어요']], []);
    const HAND = [
      { id: 'f1', text: '불 가까이 두지 않기', to: '불꽃' }, { id: 'f2', text: '뚜껑 닫아 서늘한 곳에', to: '불꽃' },
      { id: 't1', text: '맛보거나 마시지 않기', to: '해골' }, { id: 't2', text: '음료 병에 옮겨 담지 않기', to: '해골' },
      { id: 'c1', text: '장갑·보안경 쓰기', to: '부식' }, { id: 'c2', text: '살갗에 닿으면 흐르는 물로 씻기', to: '부식' },
      { id: 'e1', text: '환기하며 쓰기', to: '느낌표' }, { id: 'e2', text: '쓴 뒤 손 씻기', to: '느낌표' },
    ];
    const C1 = { text: '청소 당번 시간, 친구가 "두 세제를 섞으면 더 잘 닦여"라며 통 두 개를 든다. 한 통에는 부식 그림문자, 다른 통에는 느낌표 그림문자가 있다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'mix', text: '함께 섞어 쓴다', result: '섞자마자 코를 찌르는 냄새가 올라온다.', impact: [{ who: '청소하던 친구들', text: '기침하고 눈이 따갑다', tone: -1 }], why: '세제는 섞으면 해로운 기체가 생길 수 있어요. 표시대로 하나씩 써요.', end: '섞자마자 냄새가 올라왔어요.',
        next: { text: '냄새 때문에 친구 하나가 기침을 한다.', choices: [
          { id: 'stay', text: '창문을 닫고 계속 닦는다', result: '냄새가 교실에 갇힌다.', impact: [{ who: '친구들', text: '더 괴롭다', tone: -1 }] },
          { id: 'out', text: '모두 밖으로 나가고 선생님께 알린다', result: '선생님이 환기를 하고 보건실로 안내한다.', impact: [{ who: '친구들', text: '도움을 받는다', tone: 1 }] }] } },
      { id: 'refuse', text: '"표시 보니 섞으면 안 돼"라며 하나만 쓰자고 한다', result: '친구가 통을 내려놓는다.', impact: [{ who: '친구들', text: '해로운 냄새를 피한다', tone: 1 }], end: '하나만 쓰기로 했어요.',
        next: { text: '친구가 "그럼 이건 빈 생수병에 덜어 쓰자"고 한다.', choices: [
          { id: 'bottle', text: '생수병에 덜어 둔다', result: '나중에 누군가 물인 줄 알 수 있다.', impact: [{ who: '다른 학생', text: '잘못 마실 수 있다', tone: -1 }], why: '라벨 없는 병에 옮기면 무엇인지 모르게 돼요.' },
          { id: 'orig', text: '원래 통 그대로 표시대로 쓴다', result: '그림문자와 사용법이 그대로 남는다.', impact: [{ who: '다른 학생', text: '무엇인지 알 수 있다', tone: 1 }], end: '원래 통 그대로 썼어요.',
            next: { text: '다 쓴 뒤 통을 어디에 둘지 정해야 한다.', choices: [
              { id: 'shelf', text: '뚜껑을 닫아 청소함 높은 칸에 따로 둔다', result: '다음 당번도 표시를 보고 쓴다.', impact: [{ who: '다음 당번', text: '안전하게 쓴다', tone: 1 }] },
              { id: 'desk', text: '교실 사물함 위에 아무렇게나 둔다', result: '열린 통이 넘어질 수 있다.', impact: [{ who: '반 친구들', text: '쏟아질 수 있다', tone: -1 }], why: '세제는 뚜껑을 닫아 정한 곳에 따로 둬요.' }] } }] } },
      { id: 'sniff', text: '어떤 냄새인지 하나씩 코를 대고 맡아 본다', result: '냄새에 머리가 띵하다.', impact: [{ who: '나', text: '해로운 냄새를 마신다', tone: -1 }], why: '화학 제품은 코를 대고 맡지 않아요.', ending: '냄새를 직접 맡아 위험했어요.' }] };
    const C2 = { text: '실습실 선반에 라벨이 반쯤 떨어진 병이 있다. 친구가 "물 같은데 손 씻을 때 써 볼까?" 한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'use', text: '물인 것 같으니 써 본다', result: '손등이 따끔거린다.', impact: [{ who: '친구', text: '살갗이 상할 수 있다', tone: -1 }], why: '물처럼 보여도 위험할 수 있어요. 모르는 액체는 쓰지 않아요.', ending: '모르는 액체를 써서 위험했어요.' },
      { id: 'tell', text: '손대지 말고 선생님께 알리자고 한다', result: '선생님이 병을 따로 치운다.', impact: [{ who: '친구', text: '다치지 않는다', tone: 1 }], end: '선생님께 알렸어요.',
        next: { text: '선생님이 "남은 라벨에서 무엇을 볼 수 있을까?"라고 묻는다.', choices: [
          { id: 'pic', text: '남은 그림문자 모양을 찾는다', result: '불꽃 그림문자 한쪽이 보인다.', impact: [{ who: '모둠', text: '위험을 짐작한다', tone: 1 }], end: '그림문자로 위험을 짐작했어요.',
            next: { text: '불꽃 그림문자를 보고 어디에 둘지 정한다.', choices: [
              { id: 'cool', text: '불과 멀리, 뚜껑을 닫아 둔다', result: '불이 붙을 위험이 줄어든다.', impact: [{ who: '실습실', text: '안전해진다', tone: 1 }] },
              { id: 'heater', text: '따뜻하게 두려고 난로 옆에 둔다', result: '불이 붙을 수 있다.', impact: [{ who: '실습실', text: '불이 날 수 있다', tone: -1 }], why: '불꽃 그림문자는 불과 열에서 멀리 둬야 한다는 뜻이에요.' }] } },
          { id: 'smell', text: '뚜껑을 열어 냄새로 알아본다', result: '냄새를 직접 마신다.', impact: [{ who: '나', text: '해로울 수 있다', tone: -1 }], why: '냄새로 확인하지 않아요. 표시를 봐요.' }] } }] };
    const C3 = { text: '세제로 책상을 닦다 거품이 눈 가까이 튀었다. 짝이 "비비면 괜찮아" 한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'rub', text: '눈을 손으로 비빈다', result: '눈이 더 따갑다.', impact: [{ who: '나', text: '눈이 더 상할 수 있다', tone: -1 }], why: '비비면 더 퍼져요. 흐르는 물로 씻어요.', ending: '비벼서 더 아팠어요.' },
      { id: 'wash', text: '흐르는 물로 씻으며 선생님을 부른다', result: '선생님이 와서 계속 씻게 돕는다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }], end: '흐르는 물로 씻고 알렸어요.',
        next: { text: '선생님이 보건실에 함께 가자고 한다. 짝이 세제 통을 치우려 한다.', choices: [
          { id: 'take', text: '세제 통을 챙겨 보건 선생님께 보여 드린다', result: '보건 선생님이 표시를 보고 돌본다.', impact: [{ who: '나', text: '알맞은 돌봄을 받는다', tone: 1 }], end: '세제 표시를 보여 드렸어요.',
            next: { text: '돌아와서 모둠이 같은 일을 막을 규칙을 정한다.', choices: [
              { id: 'rule', text: '세제를 쓸 때 보안경·장갑을 함께 쓰자고 한다', result: '모둠 규칙이 생긴다.', impact: [{ who: '모둠', text: '다음에 안전하다', tone: 1 }] },
              { id: 'none', text: '운이 나빴을 뿐이라며 넘어간다', result: '같은 일이 또 생길 수 있다.', impact: [{ who: '모둠', text: '그대로 위험하다', tone: -1 }], why: '사고 뒤에는 막을 규칙을 정해요.' }] } },
          { id: 'throw', text: '세제 통을 버리고 간다', result: '어떤 세제였는지 알 수 없다.', impact: [{ who: '보건 선생님', text: '판단이 어렵다', tone: -1 }], why: '무엇이 튀었는지 알려야 알맞게 돌볼 수 있어요.' }] } }] };
    const CR = [{ id: 'r1', text: '그림문자는 위험의 종류와 다루는 법을 알려 준다' }, { id: 'r2', text: '섞거나 옮겨 담으면 무엇인지 모르게 되고 위험해진다' },
      { id: 'r3', text: '집에서 쓰는 세제는 위험하지 않다', why: '집에서 쓰는 세제에도 그림문자가 붙어 있을 수 있어요.' }, { id: 'r4', text: '더 잘 닦이는 것이 가장 중요하다', why: '잘 닦이는 것보다 다치지 않는 것이 먼저예요.' }];
    const CMORE = { reasons: [{ id: 'r5', text: '다음에 쓸 사람도 표시를 보고 안전하게 쓸 수 있다' }, { id: 'r6', text: '사고 뒤에는 막을 규칙을 정해야 같은 일이 없다' }], ok: ['r5', 'r6'] };
    const STRIP = [
      { id: 'k1', text: '먼지가 쌓여 있다', ok: true }, { id: 'k2', text: '탄 자국이 있다', ok: true }, { id: 'k3', text: '전열기 여러 개가 꽂혀 있다', ok: true },
      { id: 'k4', text: '선이 꺾이거나 눌려 있다', ok: true }, { id: 'k5', text: '물 가까이 놓여 있다', ok: true }, { id: 'k6', text: '쓰지 않는 플러그는 뽑혀 있다' }, { id: 'k7', text: '빈 구멍에 덮개가 닫혀 있다' },
    ];
    const MBODY = ['눈', '귀', '목', '어깨', '팔꿈치', '손목', '허리', '무릎'];

    ALL.push(
      M('intro.pictogram-cards', {
        title: '그림문자 보고 위험 짐작하기', method: '그림문자 보고 위험 짐작하기', tool: 'wordcards', minutes: 6,
        levels: { easy: '그림문자 2개(불꽃·해골)만 뜻과 짝짓는다.', base: '그림문자 4개를 뜻과 짝짓는다.', challenge: '한 제품에 그림문자가 둘 붙는 까닭을 말한다.' },
        intro: {
          teacher: '"이 세제 통 뒷면의 마름모 그림은 무엇을 알려 줄까요?" 실제 제품의 경고 그림문자를 보이거나 말로 설명하고, 시연 단추로 모양 카드와 뜻 카드가 짝지어지는 모습을 보인다. "집에서 쓰는 세제는 위험하지 않다"는 말에는 "우리 집 세제 통에도 이런 그림이 있을까요?"라고 되묻는다. 오늘은 그림문자를 읽고 다루는 법을 정하고, 실습실 멀티탭·기계 앞에서 위험을 판단한다고 밝힌다.',
          student: '그림문자 모양과 그 그림이 알리는 위험을 짝지어 보아요. 집이나 학교에서 이런 그림을 본 제품을 하나 떠올려 말해요.',
          demo: { tool: 'wordcards', options: PIC.toolOptions, sequence: [PIC.target] },
          art: { draw: 'paper-cut household cleaner bottles with red diamond-shaped warning labels on a shelf, a magnifying glass cut from paper looking at the label', banner: '이 그림은 무엇을 알릴까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '교구가 그림문자 도안을 그리지 못해 모양을 글로 적었다. 실제 제품 라벨이나 사진을 함께 보이면 좋다.',
      }),
      M('intro.strip-story', {
        title: '실습실 멀티탭 장면 사례', method: '실습실 멀티탭 장면 사례', tool: 'story', minutes: 6,
        levels: { easy: '장면 2개에서 위험을 찾는다.', base: '장면 4개에서 위험한 장면을 고른다.', challenge: '위험한 장면마다 고칠 행동을 말한다.' },
        intro: {
          teacher: '"이 실습실 장면에서 불이나 감전으로 이어질 수 있는 것은 무엇일까요?" 가상 실습실 네 장면을 넘겨 보이고 시연 단추로 위험한 장면 세 개가 바구니에 담기는 모습을 보인다. "멀티탭은 구멍만 있으면 다 꽂아도 된다"는 말에는 "전기 기구를 많이 꽂으면 선은 어떻게 될까요?"라고 되묻는다. 쓰지 않는 플러그를 뽑는 장면은 안전한 장면이라는 점을 함께 짚는다.',
          student: '실습실 장면 가운데 위험한 장면을 골라요. 그 장면을 어떻게 바꾸면 안전할지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험한 장면', title: '실습실 멀티탭', shuffle: false, cards: [
            { id: 'c1', text: '멀티탭 하나에 전열기 여러 개', motif: 'sun' }, { id: 'c2', text: '바닥 전선을 밟고 다닌다', motif: 'leaf' },
            { id: 'c3', text: '젖은 손으로 플러그를 뽑는다', motif: 'cloud' }, { id: 'c4', text: '다 쓴 기구 플러그를 뽑아 둔다', motif: 'star' }] }, sequence: [{ pick: ['c1', 'c2', 'c3'] }] },
          art: { draw: 'a paper-cut technology classroom with one power strip crowded with plugs and cords crossing the floor, students walking over the cords', banner: '실습실 멀티탭, 무엇이 위험할까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.handling-sort', {
        title: '그림문자별 취급 방법', method: '그림문자별 취급 방법 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '그림문자 2칸에 취급 카드 4장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '그림문자 4칸에 카드 8장을 나누고, 여러 칸에 두루 맞는 카드를 따로 고른다.', challenge: '상황 카드를 알맞은 행동과 잇고, 섞으면 안 되는 까닭을 활동지에 쓴다.' },
        activity: {
          title: '그림문자별 취급 방법', tool: 'mindmap',
          teacher: '"불꽃 그림문자가 붙은 스프레이는 어디에 두어야 할까요?" 카드를 놓을 때마다 그림문자의 뜻과 행동을 이어 말하게 한다. "장갑만 끼면 다 괜찮다"는 학생에게 "불꽃 그림문자 제품에 장갑이 불을 막아 줄까요?"라고 되묻는다. \'다른 세제와 섞지 않기\'처럼 어느 그림문자에나 맞는 수칙은 따로 모아 둔다는 점을 짚는다.',
          task: '취급 방법 카드를 그림문자 칸에 나누고, 여러 그림문자에 두루 맞는 수칙을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('취급 방법 카드를 그림문자 네 칸에 나누세요.', ['불꽃', '해골', '부식', '느낌표'], HAND, { topic: '그림문자별 취급' }),
              SB('취급 방법 카드 4장을 그림문자 두 칸에 나누세요.', ['불꽃', '해골'], HAND.slice(0, 4), { topic: '그림문자별 취급' })),
            IT(PB('어느 그림문자 제품에나 두루 맞는 수칙만 골라 담으세요.', '모든 제품에 맞음', [
              { id: 'g1', text: '다른 세제와 섞지 않기', ok: true }, { id: 'g2', text: '라벨 붙은 원래 통에 두기', ok: true },
              { id: 'g3', text: '불 가까이 두지 않기' }, { id: 'g4', text: '어린이 손 닿지 않는 곳에', ok: true }, { id: 'g5', text: '냄새를 직접 맡아 확인하기' }], { topic: '두루 맞는 수칙' })),
            IT(MB('상황과 알맞은 행동을 이어 보세요.', [['부식 표시 세제가 손에 묻음', '흐르는 물로 씻고 알린다'], ['불꽃 표시 스프레이 옆에 난로', '난로에서 멀리 옮긴다'], ['해골 표시 약품을 페트병에 덜자고 함', '원래 통 그대로 둔다']], ['그냥 두고 지켜본다'], { topic: '이럴 땐?' }), null, null,
              { conclude: '그림문자는 위험의 종류를 알려 줘요. 그 뜻에 맞게 두고, 다루고, 환기해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세제를 서로 섞으면 안 되는 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.cleaner-dilemma', {
        title: '청소 세제 섞기 갈림길', method: '청소 세제 섞기 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번까지 가고 그림문자를 근거로 고른다.', challenge: '갈림길 3번(결과 뒤 해야 할 행동)까지 가고 다음 사람 입장의 근거도 고른다.' },
        activity: {
          title: '청소 세제 섞기 갈림길', tool: 'dilemma',
          teacher: '"\'섞으면 더 잘 닦인다\'는 말을 믿어도 될까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "냄새를 맡아 보면 알 수 있다"는 학생에게 "냄새를 맡는 것 자체가 위험하다면 무엇으로 알아볼까요?"라고 되묻는다. 끝에서 그림문자가 근거가 되는지 따지게 한다.',
          task: '세제·모르는 액체 상황에서 길을 골라 결과를 따라가고, 그림문자를 근거로 내 선택을 설명해요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 세제를 섞자고 해요. 한 번 골라 결과를 보세요.', base: '친구가 세제를 섞자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 세제를 섞자고 해요. 세 번 골라 끝까지 가고 다음 당번 입장의 근거도 고르세요.' },
              '청소 세제 섞기', C1, [['refuse', 'orig', 'shelf']], CR, ['r1', 'r2'], CMORE),
            DIL({ easy: '라벨이 떨어진 병이 있어요. 한 번 골라 결과를 보세요.', base: '라벨이 떨어진 병이 있어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '라벨이 떨어진 병이 있어요. 세 번 골라 끝까지 가고 다음 사람 입장의 근거도 고르세요.' },
              '라벨 없는 병', C2, [['tell', 'pic', 'cool']], CR, ['r1', 'r2'], CMORE),
            DIL({ easy: '세제 거품이 눈 가까이 튀었어요. 한 번 골라 결과를 보세요.', base: '세제 거품이 눈 가까이 튀었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세제 거품이 튀었어요. 세 번 골라 결과 뒤 할 일까지 가고 근거도 고르세요.' },
              '세제가 튀었을 때', C3, [['wash', 'take', 'rule']], CR, ['r1'], CMORE, { conclude: '세제는 섞지 않고 원래 통 그대로 표시대로 써요. 튀면 흐르는 물로 씻고, 무엇이 튀었는지 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '라벨이 떨어진 병 속 액체가 무엇인지 알아보는 방법으로 알맞은 것은?', options: ['냄새를 맡아 본다', '손으로 만져 본다', '손대지 않고 선생님께 알린다'], answer: '손대지 않고 선생님께 알린다' }] },
      }),
      M('activity.strip-check', {
        title: '멀티탭·콘센트 점검표', method: '멀티탭·콘센트 점검표', tool: 'kitchen', minutes: 16,
        levels: { easy: '점검 항목 4개에서 위험한 상태만 표시한다.', base: '점검 항목 7개(안전한 상태 2개 섞임)에서 위험한 상태만 표시하고, 우리 집에서 확인할 항목을 고른다.', challenge: '위험한 상태마다 고칠 방법을 짝지어 적는다.' },
        activity: {
          title: '멀티탭·콘센트 점검표', tool: 'kitchen',
          teacher: '"우리 실습실 멀티탭이 이런 상태라면 무엇부터 고칠까요?" 점검 항목을 하나씩 소리 내어 읽고 위험한 상태만 표시하게 한다. "먼지는 지저분할 뿐"이라는 학생에게 "먼지와 습기가 플러그 사이에 쌓이면 어떻게 될까요?"라고 되묻는다. 탄 자국을 보면 직접 만지지 말고 어른께 알린다는 점을 짚는다.',
          task: '멀티탭 점검표에서 위험한 상태만 표시하고, 고칠 방법과 우리 집에서 확인할 항목을 정해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('멀티탭 점검표에서 위험한 상태만 표시하세요.', '멀티탭 점검', STRIP),
              CL('멀티탭 점검표 4개 항목에서 위험한 상태만 표시하세요.', '멀티탭 점검', pickCards(STRIP, ['k1', 'k3', 'k6', 'k5']))),
            IT(MB('위험한 상태와 고칠 방법을 이어 보세요.', [['먼지가 쌓여 있다', '플러그를 뽑고 마른 천으로 닦는다'], ['전열기 여러 개가 꽂혀 있다', '전열기는 따로 하나씩 쓴다'], ['탄 자국이 있다', '쓰지 말고 어른께 알린다']], ['테이프를 감아 쓴다'], { groups: false }),
              MB('위험한 상태 두 개와 고칠 방법을 이어 보세요.', [['먼지가 쌓여 있다', '플러그를 뽑고 마른 천으로 닦는다'], ['탄 자국이 있다', '쓰지 말고 어른께 알린다']], [], { groups: false })),
            IT({ prompt: '집에 가서 확인할 항목을 골라 스스로 표시하세요.', toolOptions: { mode: 'checklist', title: '우리 집에서 확인할 것', items: [{ id: 'h1', text: '멀티탭 먼지' }, { id: 'h2', text: '전열기 여러 개 꽂힘' }, { id: 'h3', text: '선 꺾임' }, { id: 'h4', text: '물 가까운 콘센트' }] }, target: { selfCheck: true } }, null, null,
              { conclude: '멀티탭은 먼지·탄 자국·전열기 여러 개·선 꺾임·물기를 살펴요. 이상하면 쓰지 말고 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '위험한 상태와 고칠 방법을 써요.', columns: ['위험한 상태', '고칠 방법'], cells: [['전열기 여러 개 꽂힘', ''], ['선이 꺾여 있음', '']], answer: '따로 하나씩 쓰기, 선을 펴고 눌리지 않게 두기' }] },
      }),
      M('activity.machine-body', {
        title: '기계 작업 차림과 부위', method: '기계 작업 차림과 다치는 부위', tool: 'body', minutes: 16,
        levels: { easy: '조심할 부위 2곳을 고르고, 고르면 이름이 바로 보인다.', base: '작업마다 조심할 부위와 알맞은 차림을 함께 고른다.', challenge: '장갑을 끼면 안 되는 작업을 구별하는 보기를 함께 고른다.' },
        activity: {
          title: '기계 작업 차림과 부위', tool: 'body',
          teacher: '"드릴이 돌아갈 때 긴 소매나 머리카락은 어떻게 될까요?" 종이 몸에서 조심할 부위를 누를 때마다 무엇이 그 부위를 위험하게 하는지(튀는 조각·말려듦) 말하게 한다. "장갑은 언제나 손을 지켜 준다"는 학생에게 "도는 날에 장갑이 걸리면 손은 어떻게 될까요?"라고 되묻는다. 기계는 덮개와 차림을 확인한 뒤 작동하고, 빨리 끝내려 서두르지 않는다는 점을 짚는다.',
          task: '드릴·실톱 작업에서 조심할 몸 부위를 고르고, 알맞은 차림을 정해요.',
          levels: { easy: { names: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '드릴 작업에서 튀는 조각과 말려듦을 조심할 부위 두 곳을 고르세요.', toolOptions: { mode: 'parts', parts: MBODY }, target: { parts: ['눈', '손목'] } }),
            IT({ prompt: '실톱 작업에서 조심할 부위를 고르고, 알맞은 차림을 고르세요.', toolOptions: { mode: 'parts', parts: MBODY, ask: { q: '알맞은 차림은?', choices: ['긴 머리 묶고 소매 걷기', '긴 소매 그대로 두기', '목걸이를 늘어뜨리기'] } }, target: { parts: ['눈', '손목'], pick: 0 } },
              { prompt: '실톱 작업에서 조심할 부위 두 곳을 고르세요.', toolOptions: { ask: null }, target: { parts: ['눈', '손목'] } }),
            IT({ prompt: '기계 작업 전 차림에서 고칠 곳(눈 보호)을 고르고, 작업 전 할 일을 고르세요.', toolOptions: { mode: 'parts', parts: MBODY, ask: { q: '작업 전에 할 일은?', choices: ['덮개와 차림을 확인한다', '빨리 끝내려 바로 켠다', '친구와 이야기하며 켠다'] } }, target: { parts: ['눈'], pick: 0 } },
              null,
              { prompt: '드릴 작업에서 지킬 부위를 고르고, 장갑을 끼면 안 되는 작업을 고르세요.', toolOptions: { ask: { q: '장갑을 끼면 안 되는 작업은?', choices: ['드릴처럼 날이 도는 기계 작업', '세제로 책상 닦기', '뜨거운 냄비 옮기기'] } }, target: { parts: ['눈'], pick: 0 } },
              { conclude: '기계 작업 전에는 보안경을 쓰고 긴 머리·소매·장신구를 정리해요. 도는 날에는 장갑이 말려들 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '기계 작업 전에 할 일에 모두 표시해요.', options: ['보안경 쓰기', '긴 머리 묶기', '소매 걷기', '덮개 확인하기'] }] },
      }),
      M('wrap.pictogram-map', {
        title: '실습실 안전 수칙 마인드맵', method: '그림문자·전기·기계 수칙 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(화학 제품·전기)에 수칙을 잇는다.', base: '가지 3개(화학 제품·전기·기계)에 수칙을 두 개씩 잇는다.', challenge: '집에서도 쓰이는 수칙을 따로 고른다.' },
        wrap: {
          teacher: '"오늘 배운 수칙 가운데 우리 집에서도 그대로 쓸 수 있는 것은 무엇일까요?" 가지를 이은 뒤 집에서도 쓰일 수칙을 두세 명에게 묻는다. "실습실에서만 조심하면 된다"는 말에는 집 세제 통과 멀티탭을 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '실습실 안전', slots: ['화학 제품', '전기', '기계'], cards: [
              { id: 'a1', text: '그림문자 읽고 다루기' }, { id: 'a2', text: '세제 섞지 않기' }, { id: 'b1', text: '멀티탭에 전열기 하나만' }, { id: 'b2', text: '젖은 손으로 플러그 만지지 않기' },
              { id: 'c1', text: '덮개 확인 뒤 작동' }, { id: 'c2', text: '긴 머리·소매 정리' }] }, prompt: '가지마다 수칙을 두 개씩 이어요.', target: { sort: { '화학 제품': ['a1', 'a2'], 전기: ['b1', 'b2'], 기계: ['c1', 'c2'] } }, difficulty: 0.2 },
              { prompt: '화학 제품·전기 가지에 수칙을 이어요.', toolOptions: { slots: ['화학 제품', '전기'], cards: [{ id: 'a1', text: '그림문자 읽고 다루기' }, { id: 'a2', text: '세제 섞지 않기' }, { id: 'b1', text: '멀티탭에 전열기 하나만' }, { id: 'b2', text: '젖은 손으로 플러그 만지지 않기' }] }, target: { sort: { '화학 제품': ['a1', 'a2'], 전기: ['b1', 'b2'] } } },
              { prompt: '집에서도 쓰이는 수칙만 골라 담아요.', toolOptions: { mode: 'pick', basket: '집에서도 쓰는 수칙', cards: [{ id: 'a2', text: '세제 섞지 않기' }, { id: 'b1', text: '멀티탭에 전열기 하나만' }, { id: 'b2', text: '젖은 손으로 플러그 만지지 않기' }, { id: 'c1', text: '실톱 덮개 확인 뒤 작동' }] }, target: { pick: ['a2', 'b1', 'b2'] } }),
            { type: 'choice', prompt: '불꽃 그림문자 스프레이를 둘 곳으로 알맞은 것은?', options: ['난로 옆 따뜻한 곳', '불과 먼 서늘한 곳', '햇빛 드는 창가'], answer: 1, difficulty: 0.2, explain: '불꽃 그림문자는 불이 붙기 쉽다는 뜻이에요.' },
            { type: 'short', prompt: '오늘 배운 수칙 가운데 우리 집에서 해 볼 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '실습실 안전 수칙',
          items: [
            { type: 'table', prompt: '가지마다 수칙을 한 가지씩 써요.', columns: ['가지', '수칙'], cells: [['화학 제품', ''], ['전기', ''], ['기계', '']], answer: '세제 섞지 않기, 전열기 하나만, 차림 정리' },
            { type: 'choice', prompt: '해골과 뼈 모양 그림문자가 알리는 위험은?', options: ['불이 붙기 쉽다', '먹거나 마시면 매우 해롭다', '미끄럽다'], answer: '먹거나 마시면 매우 해롭다' },
          ],
        },
      }),
      M('wrap.home-check', {
        title: '우리 집 세제·콘센트 점검', method: '우리 집 세제·콘센트 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 항목 3개에 스스로 표시한다.', base: '점검 항목 5개에 스스로 표시한다.', challenge: '가족과 정할 규칙 하나를 정했는지까지 표시한다.' },
        wrap: {
          teacher: '"집에 가서 세제 통과 멀티탭을 살펴본다면 무엇부터 볼까요?" 점검 칸을 함께 읽고 집에서 해 볼 항목에 표시하게 한다. 탄 자국 같은 이상을 보면 직접 고치지 말고 어른께 알린다고 다시 말해 준다. 가족과 정할 규칙 하나를 떠올려 보며 마친다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '우리 집 점검' }, prompt: '집에 가서 할 점검에 스스로 표시해요.', target: { selfCheck: ['세제는 따로, 원래 통 그대로', '세제 그림문자 읽어 보기', '멀티탭 먼지 살피기', '쓰지 않는 플러그 뽑기', '전열기는 하나씩 쓰기'] }, difficulty: 0.1 },
              { prompt: '집에 가서 할 점검 세 가지에 스스로 표시해요.', target: { selfCheck: ['세제는 따로, 원래 통 그대로', '멀티탭 먼지 살피기', '쓰지 않는 플러그 뽑기'] } },
              { prompt: '점검 다섯 가지와 가족 규칙 정하기에 스스로 표시해요.', target: { selfCheck: ['세제는 따로, 원래 통 그대로', '세제 그림문자 읽어 보기', '멀티탭 먼지 살피기', '쓰지 않는 플러그 뽑기', '전열기는 하나씩 쓰기', '가족과 정할 규칙을 하나 정했다'] } }),
            { type: 'choice', prompt: '멀티탭에서 탄 자국을 봤다면?', options: ['닦아서 계속 쓴다', '쓰지 말고 어른께 알린다', '테이프로 감는다'], answer: 1, difficulty: 0.15, explain: '탄 자국은 과열의 신호예요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '우리 집 세제·콘센트',
          items: [
            { type: 'check', prompt: '집에서 살펴본 것에 표시해요.', options: ['세제 따로 보관', '그림문자 읽기', '멀티탭 먼지', '쓰지 않는 플러그 뽑기'] },
            { type: 'short', prompt: '가족과 정할 규칙 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 체육대회·야외 활동 안전 계획 세우기 (saf-life.m.event-plan) ====
  {
    const M = MK('event-plan', [9]);
    const DAY = [{ id: 'd1', text: '학교 운동장에 모이기' }, { id: 'd2', text: '버스로 공원까지 이동' }, { id: 'd3', text: '모둠별 산책로 활동' }, { id: 'd4', text: '그늘에서 점심' }, { id: 'd5', text: '인원 확인 뒤 돌아오기' }];
    const WEEK = [['월', 27], ['화', 33], ['수(천둥 예보)', 25], ['목', 24], ['금', 30]];
    const RISK = [
      { id: 'a1', text: '바통 넘길 때 부딪힘', to: '이어달리기' }, { id: 'a2', text: '곡선 주로에서 넘어짐', to: '이어달리기' },
      { id: 'b1', text: '줄을 손에 감아 쓸림', to: '줄다리기' }, { id: 'b2', text: '갑자기 놓아 뒤로 넘어짐', to: '줄다리기' },
      { id: 'c1', text: '햇볕 아래 오래 응원', to: '응원' }, { id: 'c2', text: '응원 도구 휘두르다 맞음', to: '응원' },
    ];
    const SEAT = [{ id: 'e1', text: '계단식 관람석에서 일어나 뛰기', to: '관람석' }, { id: 'e2', text: '관람석 통로에 가방 두기', to: '관람석' }];
    const ROLES = [
      { id: 'r1', text: '경기 장비와 바닥 점검', to: '시작 전' }, { id: 'r2', text: '출발 전 인원 확인', to: '시작 전' },
      { id: 'r3', text: '쉬는 시간마다 물 나눠 주기', to: '경기 중' }, { id: 'r4', text: '다친 사람 생기면 응급 연락', to: '경기 중' },
      { id: 'r5', text: '끝난 뒤 인원 다시 확인', to: '끝난 뒤' }, { id: 'r6', text: '장비 정리와 바닥 정돈', to: '끝난 뒤' },
    ];
    const TIME3 = ['시작 전', '경기 중', '끝난 뒤'];
    const T1 = { text: '운동장 이어달리기 결승 중 멀리서 천둥소리가 들린다. 아직 비는 오지 않는다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'finish', text: '결승만 마무리하자고 한다', result: '경기를 이어 가는 사이 천둥이 가까워진다.', impact: [{ who: '선수와 응원단', text: '운동장에 계속 머문다', tone: -1 }], why: '천둥이 들리면 멀리서 들려도 바로 실내로 옮겨요.', ending: '경기를 이어 가 위험했어요.' },
      { id: 'tree', text: '큰 나무 아래로 모이자고 한다', result: '모두 운동장 가장자리 나무 아래에 몰린다.', impact: [{ who: '모두', text: '안전한 곳이 아니다', tone: -1 }], why: '나무 아래는 천둥·번개를 피할 곳이 아니에요. 건물 안으로 가요.', ending: '나무 아래로 갔어요.' },
      { id: 'inside', text: '경기를 멈추고 실내로 옮기자고 한다', result: '선생님이 경기를 멈춘다.', impact: [{ who: '모두', text: '안전한 곳으로 간다', tone: 1 }], end: '실내로 옮기기로 했어요.',
        next: { text: '모두가 한꺼번에 현관으로 몰리려 한다.', choices: [
          { id: 'rush', text: '먼저 들어가려고 뛴다', result: '현관 앞에서 서로 부딪친다.', impact: [{ who: '앞사람', text: '밀려 넘어질 수 있다', tone: -1 }], why: '실내로 옮길 때도 밀지 않고 정한 순서대로 가요.' },
          { id: 'order', text: '반별로 정한 순서대로 걸어서 들어간다', result: '현관이 붐비지 않는다.', impact: [{ who: '모두', text: '부딪치지 않는다', tone: 1 }], end: '순서대로 걸어 들어갔어요.',
            next: { text: '방송 담당인 내가 실내 이동을 알려야 한다.', choices: [
              { id: 'clear', text: '"천둥이 칩니다. 반별로 걸어서 강당으로 이동하세요."', result: '모두 무엇을 할지 알고 움직인다.', impact: [{ who: '모두', text: '안내를 알아듣는다', tone: 1 }] },
              { id: 'scary', text: '"위험해요! 빨리빨리 뛰세요!"', result: '놀란 학생들이 뛰다 부딪친다.', impact: [{ who: '모두', text: '당황한다', tone: -1 }], why: '방송은 겁주는 말보다 할 행동과 갈 곳을 차분히 알려요.' }] } }] } }] };
    const T2 = { text: '학급 소풍 산책로를 걷는데 하늘이 어두워지고 천둥이 울린다. 쉼터까지는 조금 걸어야 한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'photo', text: '하늘 사진을 찍으며 천천히 간다', result: '일행과 멀어지고 비가 쏟아진다.', impact: [{ who: '나', text: '일행을 놓친다', tone: -1 }], why: '날씨가 바뀌면 바로 계획한 피할 곳으로 가요.', ending: '일행과 멀어졌어요.' },
      { id: 'shelter', text: '계획에 적어 둔 실내 쉼터로 바로 간다', result: '인솔 선생님을 따라 쉼터로 간다.', impact: [{ who: '모둠', text: '함께 움직인다', tone: 1 }], end: '쉼터로 바로 갔어요.',
        next: { text: '쉼터에 도착했는데 모둠원 한 명이 보이지 않는다.', choices: [
          { id: 'search', text: '내가 혼자 찾으러 나간다', result: '나까지 일행과 떨어진다.', impact: [{ who: '나', text: '길을 잃을 수 있다', tone: -1 }], why: '혼자 찾지 말고 바로 선생님께 알려요.' },
          { id: 'tell', text: '바로 인솔 선생님께 알리고 인원을 다시 센다', result: '선생님이 연락해 모둠원 위치를 찾는다.', impact: [{ who: '모둠원', text: '빨리 찾는다', tone: 1 }], end: '바로 알렸어요.',
            next: { text: '천둥이 그친 뒤 다시 출발할지 정한다.', choices: [
              { id: 'wait', text: '선생님이 날씨를 확인하고 정할 때까지 쉼터에서 기다린다', result: '날씨를 보고 남은 일정을 줄인다.', impact: [{ who: '모두', text: '안전하게 돌아간다', tone: 1 }] },
              { id: 'go', text: '조용해졌으니 바로 산책로로 나간다', result: '다시 천둥이 울린다.', impact: [{ who: '모두', text: '다시 위험해진다', tone: -1 }], why: '천둥이 그쳐도 바로 나가지 않고 어른의 판단을 기다려요.' }] } }] } }] };
    const T3 = { text: '체육대회 날 아침 예보에 \'오후 천둥\'이 있다. 학급 회의에서 일정을 정한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'keep', text: '정한 일정이니 그대로 한다', result: '오후 경기 중 천둥이 울려 급하게 멈춘다.', impact: [{ who: '모두', text: '허둥지둥 옮긴다', tone: -1 }], why: '예보가 나쁘면 계획을 바꾸는 것이 안전 계획이에요.', ending: '예보를 무시해 허둥댔어요.' },
      { id: 'change', text: '야외 경기를 오전으로 당기자고 제안한다', result: '오전에 야외 경기를 마친다.', impact: [{ who: '모두', text: '천둥 전에 마친다', tone: 1 }], end: '일정을 바꿨어요.',
        next: { text: '오후에 할 응원전 장소를 정해야 한다.', choices: [
          { id: 'hall', text: '강당으로 옮기자고 한다', result: '날씨와 상관없이 응원전을 한다.', impact: [{ who: '모두', text: '실내에서 즐긴다', tone: 1 }], end: '강당으로 옮겼어요.',
            next: { text: '강당은 좁아 사람이 몰릴 것 같다.', choices: [
              { id: 'split', text: '반별로 시간을 나누고 통로를 비워 둔다', result: '강당이 붐비지 않는다.', impact: [{ who: '모두', text: '부딪치지 않는다', tone: 1 }] },
              { id: 'all', text: '모두 한 번에 들어가 꽉 채운다', result: '출입문 앞이 막힌다.', impact: [{ who: '모두', text: '급할 때 나가기 어렵다', tone: -1 }], why: '실내도 붐비면 위험해요. 시간을 나눠요.' }] } },
          { id: 'field', text: '천둥이 안 칠 수도 있으니 운동장에서 한다', result: '천둥이 울리자 응원전이 멈춘다.', impact: [{ who: '모두', text: '급히 옮긴다', tone: -1 }], why: '예보가 있으면 실내 대안을 먼저 정해요.' }] } }] };
    const TR = [{ id: 'r1', text: '천둥이 들리면 멀리서라도 바로 실내로 옮긴다' }, { id: 'r2', text: '날씨가 바뀌면 계획도 바꾸는 것이 안전 계획이다' },
      { id: 'r3', text: '정한 일정은 끝까지 지켜야 한다', why: '날씨 예보가 나쁘면 일정을 바꾸는 것이 맞아요.' }, { id: 'r4', text: '큰 나무 아래면 비와 천둥을 피할 수 있다', why: '나무 아래는 천둥·번개를 피할 곳이 아니에요.' }];
    const TMORE = { reasons: [{ id: 'r5', text: '방송은 할 행동과 갈 곳을 차분히 알린다' }, { id: 'r6', text: '이동할 때도 밀지 않고 정한 순서로 간다' }], ok: ['r5', 'r6'] };
    const PLANC = [
      { id: 'p1', text: '쉬는 시간마다 그늘에서 물 마시기', to: '구체적인 계획' }, { id: 'p2', text: '천둥이 치면 강당으로 반별 이동', to: '구체적인 계획' },
      { id: 'p3', text: '응급 연락은 보건 선생님께, 담당 두 명', to: '구체적인 계획' }, { id: 'p4', text: '조심해서 안전하게 하기', to: '막연한 계획' },
      { id: 'p5', text: '날씨가 나쁘면 알아서 하기', to: '막연한 계획' }, { id: 'p6', text: '다치지 않게 노력하기', to: '막연한 계획' },
    ];

    ALL.push(
      M('intro.plan-timeline', {
        title: '학급 소풍 하루 흐름', method: '학급 소풍 하루 흐름 그리기', tool: 'timeline', minutes: 6,
        levels: { easy: '일정 카드 3장(모이기·활동·돌아오기)만 차례로 놓는다.', base: '카드 5장을 차례로 놓고 위험이 커지는 때를 말한다.', challenge: '위험이 커지는 때마다 그 까닭을 말한다.' },
        intro: {
          teacher: '"소풍 날 하루 가운데 사고가 나기 쉬운 때는 언제일까요?" 시연 단추로 일정 카드가 차례대로 놓이는 모습을 보인 뒤, 이동·활동·돌아오기 가운데 위험이 커지는 때를 손을 들어 고르게 한다. "안전 계획은 선생님만 세우는 것"이라는 말에는 "모둠별 산책로 활동 때 선생님이 모든 모둠 곁에 있을 수 있을까요?"라고 되묻는다. 오늘은 행사 위험을 미리 찾아 계획서를 세운다고 밝힌다.',
          student: '학급 소풍 하루 일정을 떠올리며 위험이 커지는 때가 언제인지, 왜 그런지 짝과 말해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['아침', '오후'], slots: 5, cards: DAY }, sequence: [{ order: DAY.map((c) => c.id) }] },
          art: { draw: 'a paper-cut class picnic day timeline with a school bus, a park trail and a lunch spot under trees, small paper flags marking each stop', banner: '소풍 하루, 언제 조심할까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      M('intro.weather-chart', {
        title: '가상 주간 예보 읽기', method: '가상의 주간 예보 자료 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 시원한 날을 고른다.', base: '천둥 예보까지 보고 야외 행사에 알맞은 날과 까닭을 말한다.', challenge: '예비일까지 정한다.' },
        intro: {
          teacher: '"이번 주 야외 체육대회를 하루 고른다면 어느 날이 알맞을까요?" 가상 주간 예보 꺾은선을 띄우고 시연 단추로 \'목\'이 골라지는 모습을 보인다. "가장 시원한 날이 가장 좋은 날"이라는 학생에게 "수요일은 시원하지만 무엇이 적혀 있나요?"라고 되묻는다. 날씨 자료는 수업용 가상 예보라는 점을 밝힌다.',
          student: '가상 예보를 보고 야외 행사에 알맞은 날을 골라요. 기온과 천둥 예보를 함께 보고 그 까닭을 말해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '이번 주 최고 기온(가상 예보)', unit: '°C', xLabel: '요일', yLabel: '최고 기온', data: WEEK, from: 20, question: '야외 행사에 알맞은 날은?', choices: WEEK.map((d) => d[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut weekly weather board with sun, cloud and lightning icons above a line graph, students pointing at one day', banner: '행사는 어느 날이 좋을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      M('activity.risk-mindmap', {
        title: '종목별 위험 예측', method: '체육대회 종목별 위험 예측', tool: 'mindmap', minutes: 16,
        levels: { easy: '종목 2개(이어달리기·줄다리기) 가지에 위험 카드를 나누고, 놓으면 바로 맞는지 알려 준다.', base: '종목 3개 가지에 위험을 나누고 위험마다 대비책을 잇는다.', challenge: '관람석 가지를 더해 관람석 위험까지 나눈다.' },
        activity: {
          title: '종목별 위험 예측', tool: 'mindmap',
          teacher: '"줄다리기에서 다칠 수 있는 순간은 언제일까요?" 종목마다 위험 카드를 나눈 뒤 위험마다 대비책을 함께 고르게 한다. "응원은 경기가 아니라 위험이 없다"는 학생에게 "햇볕 아래 두 시간 서 있으면 어떻게 될까요?"라고 되묻는다. 위험 예측은 계획 단계에서 미리 하는 일이라는 점을 짚는다.',
          task: '체육대회 종목별로 위험 카드를 나누고, 위험마다 대비책을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('위험 카드를 종목 가지에 나누세요.', ['이어달리기', '줄다리기', '응원'], RISK, { topic: '체육대회' }),
              SB('위험 카드를 종목 두 가지에 나누세요.', ['이어달리기', '줄다리기'], RISK.slice(0, 4), { topic: '체육대회' }),
              SB('관람석 가지까지 네 가지에 위험 카드를 나누세요.', ['이어달리기', '줄다리기', '응원', '관람석'], [...RISK, ...SEAT], { topic: '체육대회' })),
            IT(MB('위험마다 알맞은 대비책을 이어 보세요.', [['바통 넘길 때 부딪힘', '넘기는 구간을 표시하고 연습한다'], ['줄을 손에 감아 쓸림', '줄을 감지 말고 장갑을 낀다'], ['햇볕 아래 오래 응원', '그늘 자리와 물을 마련한다']], ['참으면 된다'], { topic: '대비책' }),
              MB('위험 두 개와 대비책을 이어 보세요.', [['바통 넘길 때 부딪힘', '넘기는 구간을 표시하고 연습한다'], ['줄을 손에 감아 쓸림', '줄을 감지 말고 장갑을 낀다']], [], { topic: '대비책' })),
            IT(PB('계획 단계에서 미리 할 수 있는 대비만 골라 담으세요.', '미리 할 대비', [
              { id: 'q1', text: '경기장 바닥 돌 치우기', ok: true }, { id: 'q2', text: '다친 뒤에 대책 생각하기' },
              { id: 'q3', text: '쉬는 시간과 물 자리 정하기', ok: true }, { id: 'q4', text: '응급 연락 담당 정하기', ok: true }, { id: 'q5', text: '날씨는 당일에 보기' }], { topic: '미리 할 일' }), null, null,
              { conclude: '위험은 행사 날이 아니라 계획할 때 찾아요. 종목마다 위험과 대비책을 짝지어 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '종목 하나를 골라 위험과 대비책을 써요.', columns: ['종목', '위험', '대비책'], cells: [['', '', '']] }] },
      }),
      M('activity.role-board', {
        title: '안전 역할과 시간 계획', method: '안전 역할과 시간 계획', tool: 'kitchen', minutes: 16,
        levels: { easy: '역할 카드 3장을 시간 칸에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '역할 카드 6장(역할 4가지)을 시작 전·경기 중·끝난 뒤 칸에 맞춰 놓는다.', challenge: '담당 한 명이 빠졌을 때 지금 바로 다른 사람에게 맡길 일을 고른다.' },
        activity: {
          title: '안전 역할과 시간 계획', tool: 'kitchen',
          teacher: '"인원 확인은 언제 해야 할까요? 한 번이면 될까요?" 역할 카드를 시간 칸에 놓을 때마다 그때 그 일을 해야 하는 까닭을 말하게 한다. "역할을 정해도 누가 빠지면 소용없다"는 학생에게 "그럼 빠졌을 때 누가 대신할지도 계획에 넣을 수 있을까요?"라고 되묻는다.',
          task: '행사 안전 역할 카드를 시작 전·경기 중·끝난 뒤 시간 칸에 맞춰 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('체육대회 안전 역할 카드를 시간 칸에 놓으세요.', TIME3, ROLES, { groups: false }),
              SB('역할 카드 3장을 시간 칸에 놓으세요.', TIME3, pickCards(ROLES, ['r1', 'r3', 'r5']), { groups: false })),
            IT(SB('학급 소풍 안전 역할 카드를 시간 칸에 놓으세요.', ['출발 전', '활동 중', '돌아온 뒤'], [
              { id: 's1', text: '버스 타기 전 인원 세기', to: '출발 전' }, { id: 's2', text: '모일 곳과 비상 연락 알리기', to: '출발 전' },
              { id: 's3', text: '모둠별 정해진 길로 걷기', to: '활동 중' }, { id: 's4', text: '날씨가 바뀌면 쉼터로 안내', to: '활동 중' },
              { id: 's5', text: '내린 뒤 인원 다시 세기', to: '돌아온 뒤' }], { groups: false })),
            IT(MB('역할과 그 역할이 하는 일을 이어 보세요.', [['물 담당', '쉬는 시간마다 물을 나눈다'], ['응급 연락 담당', '다친 사람이 생기면 보건 선생님께 알린다'], ['인원 확인 담당', '시작과 끝에 인원을 센다']], ['경기 점수를 매긴다'], { groups: false }),
              null,
              PB('응급 연락 담당이 결석했어요. 지금 바로 다른 사람에게 맡겨야 할 일만 고르세요.', '바로 맡길 일', [
                { id: 'g1', text: '다친 사람 생기면 보건 선생님께 알리기', ok: true }, { id: 'g2', text: '비상 연락 방법 알고 있기', ok: true },
                { id: 'g3', text: '응원 도구 꾸미기' }, { id: 'g4', text: '사진 찍기' }], { groups: false }),
              { conclude: '안전 역할은 시간마다 정하고, 담당이 빠질 때 누가 대신할지도 계획에 넣어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 안전 역할을 정해요(이름 대신 역할만).', columns: ['역할', '언제', '할 일'], cells: [['물 담당', '', ''], ['인원 확인', '', '']] }] },
      }),
      M('activity.thunder-dilemma', {
        title: '천둥이 칠 때 갈림길', method: '천둥이 칠 때 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번까지 가고 근거를 고른다.', challenge: '갈림길 3번까지 가고 방송 문구를 고른 뒤 방송·이동 입장의 근거도 고른다.' },
        activity: {
          title: '천둥이 칠 때 갈림길', tool: 'dilemma',
          teacher: '"천둥이 멀리서 들리면 괜찮을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "결승만 끝내면 된다"는 학생에게 "몇 분 사이에 천둥이 가까워지면 그때 모두 어디로 갈까요?"라고 되묻는다. 나무 아래는 피할 곳이 아니며 건물 안으로 옮긴다는 점, 방송 문구는 할 행동과 갈 곳을 알린다는 점을 짚는다.',
          task: '천둥이 칠 때의 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '경기 중 천둥소리가 들려요. 한 번 골라 결과를 보세요.', base: '경기 중 천둥소리가 들려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '경기 중 천둥소리가 들려요. 세 번 골라 방송 문구까지 정하고 근거도 고르세요.' },
              '운동장의 천둥', T1, [['inside', 'order', 'clear']], TR, ['r1'], TMORE),
            DIL({ easy: '소풍 산책로에서 천둥이 울려요. 한 번 골라 결과를 보세요.', base: '소풍 산책로에서 천둥이 울려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '소풍 산책로에서 천둥이 울려요. 세 번 골라 끝까지 가고 근거도 고르세요.' },
              '산책로의 천둥', T2, [['shelter', 'tell', 'wait']], TR, ['r1', 'r2'], TMORE),
            DIL({ easy: '예보에 오후 천둥이 있어요. 한 번 골라 결과를 보세요.', base: '예보에 오후 천둥이 있어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '예보에 오후 천둥이 있어요. 세 번 골라 끝까지 가고 근거도 고르세요.' },
              '천둥 예보', T3, [['change', 'hall', 'split']], TR, ['r2'], TMORE, { conclude: '천둥이 들리면 멀리서라도 바로 실내로 옮기고, 예보가 나쁘면 계획을 미리 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '운동장에서 천둥이 칠 때 쓸 안내 방송 문구를 한 문장으로 써요(할 행동과 갈 곳).' }] },
      }),
      M('activity.plan-writing', {
        title: '행사 안전 계획서 쓰기', method: '행사 안전 계획서 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 채워 쓴다.', base: '위험·대비·날씨 대안 세 칸을 쓰고 기준표로 점검한다.', challenge: '마지막 칸에서 다른 모둠의 가상 계획서를 기준표로 평가하는 글을 쓴다.' },
        activity: {
          title: '행사 안전 계획서 쓰기', tool: 'rubric-writing',
          teacher: '"\'조심해서 안전하게\'라고 쓴 계획서로 행사 날 무엇을 할 수 있을까요?" 모둠이 맡은 행사(체육대회 한 종목이나 소풍)를 정하고 위험·대비·날씨 대안을 차례로 쓰게 한다. "날씨가 나쁘면 그때 정하면 된다"는 학생에게 "그때 모두가 한 자리에 모여 의논할 시간이 있을까요?"라고 되묻는다. 사람 이름 대신 역할 이름으로 쓰게 한다.',
          task: '모둠이 맡은 행사의 안전 계획서를 위험·대비·날씨 대안 세 칸으로 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '계획서 첫 칸: 맡은 행사에서 일어날 수 있는 위험을 두 문장으로 쓰세요.', toolOptions: { topic: '모둠이 맡은 행사(체육대회 한 종목 또는 소풍)에서 일어날 수 있는 위험을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '계획서 ① 위험' }, target: { selfCheck: ['어떤 행사인지 밝혔다', '위험이 일어날 때와 곳을 썼다', '위험을 두 가지 썼다'] } },
              { prompt: '틀을 따라 맡은 행사의 위험을 두 문장으로 쓰세요.', toolOptions: { starter: '우리 행사는 ___이다. ___ 때 ___ 위험이 있다.' } }),
            IT({ prompt: '계획서 둘째 칸: 위험마다 대비책과 맡을 역할을 쓰세요.', toolOptions: { topic: '앞에서 쓴 위험마다 대비책과 그 일을 맡을 역할을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 4, title: '계획서 ② 대비' }, target: { selfCheck: ['위험마다 대비책을 썼다', '맡을 역할을 썼다', '사람 이름 대신 역할로 썼다'] } },
              { prompt: '틀을 따라 대비책과 역할을 쓰세요.', toolOptions: { starter: '___ 위험은 ___으로 막는다. ___ 담당이 맡는다.' } }),
            IT({ prompt: '계획서 셋째 칸: 폭염이나 천둥 예보가 있을 때의 대안을 쓰세요.', toolOptions: { topic: '폭염이나 천둥 예보가 있을 때 행사를 어떻게 바꿀지 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 4, title: '계획서 ③ 날씨 대안' }, target: { selfCheck: ['어떤 날씨일 때인지 밝혔다', '바꿀 시간이나 장소를 썼다', '누가 알릴지 썼다'] } },
              { prompt: '틀을 따라 날씨 대안을 쓰세요.', toolOptions: { starter: '___ 예보가 있으면 ___으로 바꾼다. ___ 담당이 알린다.' } },
              { prompt: '다른 모둠의 가상 계획서("조심해서 하고, 비가 오면 알아서 한다")를 기준표로 평가하는 글을 쓰세요.', toolOptions: { topic: '다른 모둠 가상 계획서: "줄다리기를 조심해서 하고, 비가 오면 알아서 한다." 이 계획서를 기준표로 평가하고 고칠 점을 쓰세요.', title: '다른 모둠 계획서 평가' }, target: { selfCheck: ['구체적인지 따졌다', '날씨 대안이 있는지 따졌다', '고칠 점을 하나 이상 제안했다'] } },
              { conclude: '좋은 계획서는 위험·대비·날씨 대안이 구체적이고, 누가 언제 할지가 적혀 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모둠 안전 계획서를 정리해요.', columns: ['칸', '내용'], cells: [['위험', ''], ['대비와 역할', ''], ['날씨 대안', '']] }] },
      }),
      M('wrap.plan-cards', {
        title: '좋은 안전 계획 조건', method: '좋은 안전 계획 조건 고르기', tool: 'mindmap', minutes: 7,
        levels: { easy: '계획 문장 카드 4장을 \'구체적인 계획·막연한 계획\'으로 나눈다.', base: '카드 6장을 나눈다.', challenge: '나눈 뒤 막연한 카드 하나를 구체적으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"\'조심해서 안전하게 하기\'와 \'쉬는 시간마다 그늘에서 물 마시기\'는 무엇이 다를까요?" 카드를 나눈 뒤 구체적인 계획 카드에 공통으로 들어 있는 것(언제·어디서·누가·무엇을)을 모아 좋은 계획의 조건으로 정리한다. "막연해도 마음만 있으면 된다"는 말에는 행사 날 그 문장으로 무엇을 할 수 있는지 다시 묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '좋은 안전 계획', slots: ['구체적인 계획', '막연한 계획'], cards: strip(PLANC) }, prompt: '계획 문장 카드를 두 가지로 나누어요.', target: { sort: { '구체적인 계획': ['p1', 'p2', 'p3'], '막연한 계획': ['p4', 'p5', 'p6'] } }, difficulty: 0.2 },
              { prompt: '계획 문장 카드 4장을 두 가지로 나누어요.', toolOptions: { cards: strip(pickCards(PLANC, ['p1', 'p2', 'p4', 'p5'])) }, target: { sort: { '구체적인 계획': ['p1', 'p2'], '막연한 계획': ['p4', 'p5'] } } }),
            { type: 'choice', prompt: '좋은 안전 계획의 조건으로 가장 알맞은 것은?', options: ['길고 멋진 문장', '언제·어디서·누가·무엇을 할지가 드러남', '\'안전\'이라는 낱말이 많음'], answer: 1, difficulty: 0.2, explain: '구체적이어야 행사 날 그대로 할 수 있어요.' },
            { type: 'short', prompt: '\'날씨가 나쁘면 알아서 하기\'를 구체적인 계획으로 고쳐 써요.' },
          ],
        },
        worksheet: {
          title: '좋은 안전 계획의 조건',
          items: [
            { type: 'check', prompt: '좋은 안전 계획의 조건에 표시해요.', options: ['언제 할지', '어디서 할지', '누가 맡을지', '날씨 대안'] },
            { type: 'short', prompt: '막연한 계획 하나를 골라 구체적으로 고쳐 써요.' },
          ],
        },
      }),
      M('wrap.event-check', {
        title: '행사 당일 스스로 점검', method: '행사 당일 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 항목 3개에 스스로 표시한다.', base: '점검 항목 5개에 스스로 표시한다.', challenge: '내 역할에 맞는 항목을 정했는지까지 표시한다.' },
        wrap: {
          teacher: '"행사 날 아침, 집을 나서기 전에 무엇을 챙길까요?" 점검 칸을 함께 읽고 행사 날 할 항목에 표시하게 한다. "역할은 담당만 기억하면 된다"는 말에는 담당이 빠질 때를 떠올리게 하고, 내 역할을 한 줄로 말하며 마친다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '행사 당일 점검' }, prompt: '행사 당일 내가 할 점검에 스스로 표시해요.', target: { selfCheck: ['물병 챙기기', '모자 쓰기', '내 역할 알기', '비상 연락 방법 알기', '아침에 날씨 예보 보기'] }, difficulty: 0.1 },
              { prompt: '행사 당일 점검 세 가지에 스스로 표시해요.', target: { selfCheck: ['물병 챙기기', '모자 쓰기', '내 역할 알기'] } },
              { prompt: '점검 다섯 가지와 내 역할 항목에 스스로 표시해요.', target: { selfCheck: ['물병 챙기기', '모자 쓰기', '내 역할 알기', '비상 연락 방법 알기', '아침에 날씨 예보 보기', '내 역할에 맞는 준비물을 정했다'] } }),
            { type: 'choice', prompt: '체육대회 중 멀리서 천둥소리가 들리면?', options: ['경기를 끝까지 한다', '나무 아래로 간다', '안내에 따라 실내로 옮긴다'], answer: 2, difficulty: 0.15, explain: '천둥이 들리면 멀리서라도 실내로 옮겨요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '행사 당일 점검',
          items: [
            { type: 'check', prompt: '행사 날 챙길 것에 표시해요.', options: ['물병', '모자', '내 역할', '비상 연락 방법'] },
            { type: 'short', prompt: '행사 날 내 역할과 그때 할 일을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 실종·미아 상황에서 돕는 사람 되기 (saf-life.m.missing-response) ====
  {
    const M = MK('missing-response', [9]);
    const Y1 = { text: '동생 하람이 학원 끝나고 집에 오기로 한 시간이 한참 지났다. 전화도 받지 않고, 친구들도 어디 있는지 모른다고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'wait', text: '하루는 기다려 보기로 한다', result: '시간만 흐르고 아무도 하람을 찾기 시작하지 않는다.', impact: [{ who: '하람', text: '도움이 늦어진다', tone: -1 }], why: '실종이 의심되면 기다리지 않고 바로 보호자와 112에 알려요. 하루를 기다려야 신고할 수 있는 것이 아니에요.', ending: '기다리는 사이 시간이 흘렀어요.' },
      { id: 'alone', text: '혼자 동네를 뒤지러 나간다', result: '어디를 찾았는지 아무도 모르고, 나도 늦게까지 밖에 있게 된다.', impact: [{ who: '나', text: '나까지 위험할 수 있다', tone: -1 }], why: '혼자 찾는 것보다 보호자·112에 알리는 것이 더 빨라요.', ending: '혼자 찾아다녀 더 늦어졌어요.' },
      { id: 'report', text: '바로 보호자에게 알리고 함께 112에 신고한다', result: '보호자와 함께 112에 신고한다.', impact: [{ who: '하람', text: '바로 찾기 시작한다', tone: 1 }], end: '바로 알리고 신고했어요.',
        next: { text: '경찰이 하람에 대해 묻는다.', choices: [
          { id: 'info', text: '마지막으로 본 때·곳·옷차림·특징을 알린다', result: '경찰이 그 정보로 찾기 시작한다.', impact: [{ who: '하람', text: '빨리 찾을 수 있다', tone: 1 }], end: '필요한 정보를 알렸어요.',
            next: { text: '보호자가 "너는 집에 있어 줘"라고 한다.', choices: [
              { id: 'home', text: '집에서 전화를 받으며 하람이 돌아오는지 기다린다', result: '하람이 집에 오면 바로 알릴 수 있다.', impact: [{ who: '가족', text: '연락이 이어진다', tone: 1 }] },
              { id: 'out', text: '말을 듣지 않고 혼자 나간다', result: '가족이 나까지 걱정하게 된다.', impact: [{ who: '가족', text: '걱정이 커진다', tone: -1 }], why: '정한 역할을 지키면 가족이 찾는 일에 힘을 모을 수 있어요.' }] } },
          { id: 'vague', text: '"잘 모르겠어요"라고만 한다', result: '찾을 단서가 적다.', impact: [{ who: '하람', text: '찾는 데 오래 걸린다', tone: -1 }], why: '본 때·곳·옷차림을 떠올려 알려요.' }] } }] };
    const MR = [{ id: 'r1', text: '실종이 의심되면 기다리지 않고 바로 알린다' }, { id: 'r2', text: '보호자·112와 함께 찾는 것이 가장 빠르다' }, { id: 'r3', text: '하루가 지나야 신고할 수 있다', why: '실종 신고는 기다릴 필요가 없어요.' }];
    const HELP = [{ id: 'h1', text: '어린이 곁에 머물기' }, { id: 'h2', text: '이름과 보호자를 묻기' }, { id: 'h3', text: '가까운 직원이나 경찰에 연결' }, { id: 'h4', text: '안내 방송을 부탁하기' }, { id: 'h5', text: '보호자 올 때까지 함께 있기' }];
    const HTRAP = [{ id: 'ht', text: '내가 집까지 데려다주기' }];
    // 가상의 쇼핑몰 1층
    const MALL = { grid: [6, 4], title: '가상의 쇼핑몰 1층 안내도', places: [{ name: '어린이 발견 자리', icon: 'dot', at: [3, 1] }], regions: [
      { name: '정문 출입구', cells: [[0, 3], [1, 3]] }, { name: '옆문 출입구', cells: [[5, 0]] },
      { name: '안내 데스크', cells: [[2, 1]] }, { name: '보안실', cells: [[0, 0], [1, 0]] },
      { name: '옷 가게', cells: [[2, 0], [3, 0], [4, 0]] }, { name: '푸드코트', cells: [[4, 1], [5, 1], [4, 2], [5, 2]] },
      { name: '통로', cells: [[0, 1], [1, 1], [3, 1], [0, 2], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3]] }, { name: '주차장 입구', cells: [[4, 3], [5, 3]] },
    ] };
    const RESP = [['그 자리에서 직원·경찰에 연결', '마트에서 우는 어린이를 봤다'], ['기다리지 않고 바로 알리기', '친구와 연락이 끊겼다'], ['혼자 데려가지 않기', '길 잃은 아이가 집에 데려다 달라고 한다'], ['모일 곳 미리 정하기', '동생과 놀이공원에 간다'], ['본 것을 정확히 전하기', '112에 신고한다']];

    ALL.push(
      M('intro.lost-child-emotion', {
        title: '마트에서 우는 어린이', method: '마트에서 우는 어린이 장면', tool: 'emotion', minutes: 6,
        levels: { easy: '어린이의 마음 카드 2개 가운데 고른다.', base: '어린이의 마음과 내가 처음 할 행동을 고른다.', challenge: '하지 말아야 할 행동(집까지 데려가기 등)도 함께 고른다.' },
        intro: {
          teacher: '"대형 마트에서 혼자 울고 있는 어린이를 보면 어린이의 마음은 어떨까요? 나는 맨 먼저 무엇을 할까요?" 시연 단추로 마음 카드가 골라지는 모습을 보인 뒤 처음 할 행동을 두세 명에게 묻는다. "내가 집까지 데려다주면 된다"는 말에는 "보호자가 그 자리로 돌아와 찾는다면 어떻게 될까요?"라고 되묻는다. 오늘은 돕는 사람이 되는 차례와 원칙을 배운다고 밝힌다.',
          student: '혼자 울고 있는 어린이의 마음을 골라요. 내가 맨 먼저 할 행동과 하지 말아야 할 행동을 하나씩 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '어린이의 마음', shuffle: false, cards: [{ id: 'm1', text: '무서움' }, { id: 'm2', text: '걱정' }, { id: 'm3', text: '신남' }, { id: 'm4', text: '뿌듯함' }] }, sequence: [{ pick: ['m1', 'm2'] }] },
          art: { draw: 'a paper-cut supermarket aisle with a small child crying alone and a teenager kneeling nearby while a store staff member walks over', banner: '혼자 우는 어린이를 보면?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '장면은 가상이다. 학생에게 길을 잃었던 일을 묻지 않는다.',
      }),
      M('intro.myth-dilemma', {
        title: '실종 신고 시기 갈림길', method: '실종 신고 시기 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번까지 가고 근거를 고른다.', challenge: '신고할 때 전할 정보를 고르는 갈림길까지 간다.' },
        intro: {
          teacher: '"실종 신고는 하루가 지나야 할 수 있을까요?" 시연 단추로 \'바로 보호자에게 알리고 112에 신고 → 본 때·곳·옷차림 알리기\' 길이 이어지는 모습을 보인다. "혼자 찾는 게 가장 빠르다"는 말에는 "혼자 찾는 동안 나를 어디서 찾을지 가족은 알까요?"라고 되묻는다. 실종이 의심되면 기다리지 않고 바로 알린다는 점을 처음부터 분명히 짚는다.',
          student: '동생과 연락이 끊긴 가상 상황이에요. 나라면 어떻게 할지 고르고, 그 까닭을 짝에게 말해요.',
          demo: DEMO_DIL('연락이 끊긴 동생', Y1, [['report', 'info', 'home']], MR),
          art: { draw: 'a paper-cut evening living room where a teenager holds a phone next to a worried parent, a clock on the wall showing it is late', banner: '기다릴까, 바로 알릴까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),
      M('activity.help-order', {
        title: '길 잃은 어린이 돕는 차례', method: '길 잃은 어린이 돕는 차례', tool: 'timeline', minutes: 16,
        levels: { easy: '행동 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 차례로 놓고 함정 카드(집까지 데려가기)를 걸러 낸다.', challenge: '함정 카드가 위험한 까닭을 고르는 문항을 푼다.' },
        activity: {
          title: '길 잃은 어린이 돕는 차례', tool: 'timeline',
          teacher: '"길 잃은 어린이를 보면 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 왜 그 자리에서 직원이나 경찰에 연결하는지 까닭을 말하게 한다. "착한 마음으로 집까지 데려다주면 된다"는 학생에게 "보호자는 아이를 잃어버린 자리로 돌아와 찾는데, 아이가 거기 없으면 어떻게 될까요?"라고 되묻는다. 어린이를 혼자 데리고 멀리 가지 않는다는 점을 짚는다.',
          task: '길 잃은 어린이를 돕는 행동 카드를 차례대로 놓고, 하면 안 되는 카드를 걸러 내요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('마트에서 길 잃은 어린이를 봤어요. 함정 카드는 빼고 돕는 차례대로 놓으세요.', HELP, { axis: ['먼저', '나중'] }, HTRAP),
              OB('길 잃은 어린이를 돕는 카드 3장을 차례대로 놓으세요.', pickCards(HELP, ['h1', 'h3', 'h5']), { axis: ['먼저', '나중'] })),
            IT(OB('놀이공원에서 혼자 우는 어린이를 봤어요. 돕는 차례대로 놓으세요.', [{ id: 'p1', text: '눈높이를 맞춰 말 걸기' }, { id: 'p2', text: '가까운 직원 부르기' }, { id: 'p3', text: '직원과 함께 그 자리에서 기다리기' }], { axis: ['먼저', '나중'] }, [{ id: 'pt', text: '아이 손 잡고 부모 찾아 돌아다니기' }])),
            IT(PB('길 잃은 어린이를 도울 때 하면 안 되는 행동만 골라 담으세요.', '하면 안 되는 행동', [
              { id: 'q1', text: '내가 집까지 데려다주기', ok: true }, { id: 'q2', text: '직원에게 연결하기' },
              { id: 'q3', text: '아이 손 잡고 멀리 찾아다니기', ok: true }, { id: 'q4', text: '보호자 올 때까지 곁에 있기' }], { axis: ['먼저', '나중'] }),
              null,
              { prompt: '\'집까지 데려다주기\'가 위험한 까닭을 담으세요.', toolOptions: { mode: 'pick', basket: '위험한 까닭', cards: [{ id: 'w1', text: '보호자가 그 자리로 찾으러 온다' }, { id: 'w2', text: '아이와 내가 함께 길을 잃을 수 있다' }, { id: 'w3', text: '아이가 걷기 싫어한다' }] }, target: { pick: ['w1', 'w2'] } },
              { conclude: '길 잃은 어린이는 그 자리에서 직원이나 경찰에 연결하고, 보호자가 올 때까지 곁에 있어요. 혼자 데려가지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '길 잃은 어린이를 봤을 때 가장 먼저 할 일은?', options: ['집까지 데려다준다', '곁에 머물며 직원이나 경찰에 연결한다', '모르는 척 지나간다'], answer: '곁에 머물며 직원이나 경찰에 연결한다' }] },
      }),
      M('activity.mall-map', {
        title: '쇼핑몰 도움 지점 찾기', method: '쇼핑몰 지도에서 도움 지점 찾기', tool: 'map', minutes: 16,
        levels: { easy: '도움 지점 2곳(안내 데스크·보안실)에 핀을 꽂고, 핀을 놓으면 칸 이름이 바로 보인다.', base: '도움 지점 세 곳에 핀을 꽂고 어린이를 데려갈 가장 가까운 곳을 정한다.', challenge: '출입구를 먼저 살펴 달라고 하는 까닭을 보기에서 함께 고른다.' },
        activity: {
          title: '쇼핑몰 도움 지점 찾기', tool: 'map',
          teacher: '"어린이를 발견한 자리에서 가장 가까운 도움 지점은 어디일까요?" 가상 쇼핑몰 안내도에서 \'어린이 발견 자리\'부터 찾게 한 뒤 핀을 꽂게 한다. "주차장까지 데려가 보호자 차를 찾자"는 학생에게 "멀리 갈수록 보호자와 엇갈릴 가능성은 어떻게 될까요?"라고 되묻는다. 직원에게 알리면 안내 방송과 출입구 살피기를 함께 부탁할 수 있다는 점을 짚는다.',
          task: '가상 쇼핑몰 안내도에서 도움 지점에 핀을 꽂고, 어린이를 데려갈 가장 가까운 곳을 정해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('어린이 발견 자리에서 가장 가까운 도움 지점에 핀을 꽂으세요.', MALL, { region: '안내 데스크' }),
            PIN('안내 데스크 직원이 보안실에 연락하라고 해요. 보안실에 핀을 꽂으세요.', MALL, { region: '보안실' }),
            IT(PIN('보호자가 아이를 데리고 나갈 수 있는 정문 출입구에 핀을 꽂으세요.', MALL, { region: '정문 출입구' }),
              null,
              { prompt: '정문 출입구에 핀을 꽂고, 직원에게 출입구를 먼저 살펴 달라고 하는 까닭을 고르세요.', toolOptions: { ask: { q: '출입구를 먼저 살피는 까닭은?', choices: ['아이가 밖으로 나가기 전에 찾기 위해', '출입구가 가장 넓어서', '방송이 출입구에서만 들려서'] } }, target: { region: '정문 출입구', pick: 0 } },
              { conclude: '쇼핑몰에서는 가까운 안내 데스크·보안실 같은 도움 지점에 알리고, 어린이를 멀리 데려가지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쇼핑몰에서 길 잃은 어린이를 봤을 때 찾아갈 도움 지점 두 곳을 써요.' }] },
      }),
      M('activity.report-script', {
        title: '112 신고 대본 쓰기', method: '112 신고 대본 쓰기', tool: 'story', minutes: 16,
        levels: { easy: '말풍선 빈칸에 보기 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '언제·어디서·옷차림·특징 말풍선을 채우고, 활동지에 대본을 직접 쓴다.', challenge: '여러 문장 가운데 가장 짧고 정확한 신고 첫마디를 고른다.' },
        activity: {
          title: '112 신고 대본 쓰기', tool: 'story',
          teacher: '"112에 전화하면 무엇부터 말할까요?" 가족의 실종이 의심되는 가상 상황에서 신고 대본의 말풍선을 채우고 짝과 소리 내어 연습하게 한다. "자세히 오래 설명해야 잘 찾는다"는 학생에게 "가장 먼저 필요한 정보는 무엇일까요? 언제·어디서·옷차림부터 말해 볼까요?"라고 되묻는다. 연습에서는 실제 가족 이름 대신 가상 인물 \'하람\'을 쓰게 한다.',
          task: '가족의 실종이 의심되는 가상 상황에서 112에 알릴 내용(언제·어디서·옷차림·특징) 대본을 채우고 짝과 연습해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '신고 대본의 \'언제·어디서\' 말풍선을 채우세요.', toolOptions: { mode: 'fill', title: '112 신고 대본', slots: [{ id: 'f1', who: '나', label: '"동생을 마지막으로 본 때는 ___예요."' }, { id: 'f2', who: '나', label: '"본 곳은 ___이에요."' }], cards: [{ id: 'w1', text: '오늘 오후 학원 끝날 때' }, { id: 'w2', text: '학원 앞 버스 정류장' }, { id: 'y1', text: '잘 기억 안 나요' }] }, target: { fill: { f1: 'w1', f2: 'w2' } } }),
            IT({ prompt: '신고 대본의 \'옷차림·특징\' 말풍선을 채우세요.', toolOptions: { mode: 'fill', title: '112 신고 대본', slots: [{ id: 'f1', who: '나', label: '"입은 옷은 ___예요."' }, { id: 'f2', who: '나', label: '"눈에 띄는 특징은 ___예요."' }], cards: [{ id: 'w1', text: '노란 우비와 파란 가방' }, { id: 'w2', text: '왼손에 깁스를 했어요' }, { id: 'y1', text: '그냥 평범해요' }] }, target: { fill: { f1: 'w1', f2: 'w2' } } }),
            IT(PB('신고 첫마디로 알맞은 문장을 고르세요.', '신고 첫마디', [
              { id: 's1', text: '"동생이 연락이 안 돼서 실종이 의심돼요."', ok: true }, { id: 's2', text: '"그냥 좀 걱정돼서요."' },
              { id: 's3', text: '"하루 지나면 다시 걸게요."' }], { title: '112 신고 대본' }),
              null,
              PB('가장 짧고 정확한 신고 첫마디 하나만 고르세요.', '신고 첫마디', [
                { id: 's1', text: '"오후 4시에 학원 앞에서 본 동생이 연락이 안 돼요."', ok: true }, { id: 's2', text: '"동생이 있는데요, 원래 착한데요, 그게…"' },
                { id: 's3', text: '"걱정돼서요."' }, { id: 's4', text: '"하루 지나면 다시 걸게요."' }], { title: '112 신고 대본' }),
              { conclude: '실종이 의심되면 바로 112에 알리고, 언제·어디서·옷차림·특징을 짧고 정확하게 전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 인물 하람의 신고 대본을 써요.', columns: ['알릴 것', '내용'], cells: [['언제', ''], ['어디서', ''], ['옷차림', ''], ['특징', '']] }] },
      }),
      M('activity.sibling-plan', {
        title: '동생과 외출 예방 계획', method: '동생과 외출 예방 계획', tool: 'kitchen', minutes: 16,
        levels: { easy: '할 일 카드 3장을 시간 칸에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 출발 전·도착하면·이동할 때 칸에 놓는다.', challenge: '동생 나이(다섯 살·열한 살)에 맞게 할 일을 나눈다.' },
        activity: {
          title: '동생과 외출 예방 계획', tool: 'kitchen',
          teacher: '"동생과 놀이공원에 가는 날, 출발 전에 해 둘 일은 무엇일까요?" 카드를 칸에 놓을 때마다 그 일이 길을 잃었을 때 어떻게 도움이 되는지 말하게 한다. "사진은 기념으로만 찍는다"는 학생에게 "동생이 길을 잃으면 오늘 입은 옷을 정확히 말할 수 있을까요?"라고 되묻는다. 연락처 쪽지는 보호자가 써 주고 수업에서는 실제 번호를 쓰지 않는다.',
          task: '동생과 놀이공원에 가는 날 할 일 카드를 출발 전·도착하면·이동할 때 칸에 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('동생과 놀이공원에 가는 날 할 일을 칸에 놓으세요.', ['출발 전', '도착하면', '이동할 때'], [
              { id: 'k1', text: '오늘 옷차림 사진 찍기', to: '출발 전' }, { id: 'k2', text: '보호자 연락처 쪽지 챙기기', to: '출발 전' },
              { id: 'k3', text: '길 잃으면 모일 곳 정하기', to: '도착하면' }, { id: 'k4', text: '직원 옷 모양 알려 주기', to: '도착하면' },
              { id: 'k5', text: '사람 많은 곳에서 손잡기', to: '이동할 때' }], { groups: false }),
              SB('할 일 카드 3장을 칸에 놓으세요.', ['출발 전', '도착하면', '이동할 때'], [
                { id: 'k1', text: '오늘 옷차림 사진 찍기', to: '출발 전' }, { id: 'k3', text: '길 잃으면 모일 곳 정하기', to: '도착하면' }, { id: 'k5', text: '사람 많은 곳에서 손잡기', to: '이동할 때' }], { groups: false })),
            IT(CL('놀이공원에 가기 전 챙길 것만 표시하세요.', '출발 전 챙길 것', [
              { id: 'c1', text: '동생 옷차림 사진', ok: true }, { id: 'c2', text: '모일 곳 약속', ok: true }, { id: 'c3', text: '보호자 연락처 쪽지', ok: true },
              { id: 'c4', text: '동생 혼자 다닐 시간', ok: false }, { id: 'c5', text: '휴대전화 충전', ok: true }])),
            IT(SB('동생이 길을 잃었을 때 할 일을 나누세요.', ['동생이 할 일', '내가 할 일'], [
              { id: 'd1', text: '그 자리에 멈춰 기다리기', to: '동생이 할 일' }, { id: 'd2', text: '가까운 직원에게 말하기', to: '동생이 할 일' },
              { id: 'd3', text: '바로 보호자에게 알리기', to: '내가 할 일' }, { id: 'd4', text: '직원에게 옷차림 사진 보여 주기', to: '내가 할 일' }], { groups: false }),
              null,
              SB('동생 나이에 맞게 할 일을 나누세요.', ['다섯 살 동생', '열한 살 동생'], [
                { id: 'a1', text: '연락처 쪽지를 옷에 달아 주기', to: '다섯 살 동생' }, { id: 'a2', text: '손을 꼭 잡고 다니기', to: '다섯 살 동생' },
                { id: 'a3', text: '보호자 번호를 외우게 하기', to: '열한 살 동생' }, { id: 'a4', text: '모일 곳을 스스로 찾아가게 연습', to: '열한 살 동생' }], { groups: false }),
              { conclude: '출발 전 옷차림 사진과 모일 곳, 연락 방법을 정해 두면 길을 잃어도 빨리 찾을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '동생과 외출하는 날 계획을 써요.', columns: ['때', '할 일'], cells: [['출발 전', ''], ['도착하면', ''], ['이동할 때', '']], answer: '옷차림 사진·연락처 쪽지, 모일 곳 정하기, 손잡기' }] },
      }),
      M('wrap.response-cards', {
        title: '돕는 사람의 원칙 정리', method: '돕는 사람의 원칙 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '원칙 카드 3장을 장면과 짝짓는다.', base: '원칙 카드 5장을 장면과 짝짓는다.', challenge: '원칙 낱말로 원칙 문장의 빈칸을 채운다.' },
        wrap: {
          teacher: '"오늘 배운 원칙을 한 줄씩 말한다면?" 원칙 카드를 장면과 짝지은 뒤 \'기다리지 않기\'와 \'혼자 데려가지 않기\'를 반 전체가 한 번 더 말한다. "실종 신고는 하루가 지나야 한다"는 말이 나오면 오늘 따라가 본 갈림길을 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'wordcards', difficulty: 0.2, prompt: '장면마다 알맞은 원칙 카드를 이어요.', options: MB('', RESP.map((r) => [r[1], r[0]]), []).toolOptions, target: MB('', RESP.map((r) => [r[1], r[0]]), []).target },
              (() => { const b = MB('장면 세 개에 알맞은 원칙 카드를 이어요.', RESP.slice(0, 3).map((r) => [r[1], r[0]]), []); return b; })(),
              { prompt: '원칙 낱말 카드로 원칙 문장을 완성해요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '실종이 의심되면 ___ 바로 알린다.' }, { id: 'f2', label: '길 잃은 어린이는 ___ 연결한다.' }, { id: 'f3', label: '어린이를 ___.' }], cards: [{ id: 'w1', text: '기다리지 않고' }, { id: 'w2', text: '그 자리에서 직원·경찰에' }, { id: 'w3', text: '혼자 데려가지 않는다' }] }, target: { fill: { f1: 'w1', f2: 'w2', f3: 'w3' } } }),
            { type: 'choice', prompt: '친구가 "실종 신고는 하루가 지나야 할 수 있대"라고 한다. 알맞은 대답은?', options: ['맞아, 하루 기다리자', '아니야, 의심되면 바로 112에 알릴 수 있어', '혼자 찾아보자'], answer: 1, difficulty: 0.2, explain: '실종이 의심되면 기다리지 않고 바로 신고해요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '돕는 사람의 원칙',
          items: [
            { type: 'table', prompt: '원칙을 내 말로 써요.', columns: ['원칙', '내 말'], cells: [['기다리지 않기', ''], ['그 자리에서 연결', ''], ['혼자 데려가지 않기', '']] },
            { type: 'blank', prompt: '빈칸에 알맞은 번호를 써요.', text: '실종이 의심되면 바로 ___에 신고한다.', answer: '112' },
          ],
        },
      }),
      M('wrap.family-writing', {
        title: '가족 외출 약속 글', method: '가족 외출 약속 글과 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 따라 약속을 쓴다.', base: '약속 세 가지를 쓰고 \'구체적·모두 지킬 수 있음·연락 방법 포함\' 기준으로 점검한다.', challenge: '어린 동생도 알 쉬운 말로 바꾸어 쓰고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"가족과 외출할 때 정해 두면 좋은 약속 세 가지는 무엇일까요?" 오늘 세운 동생 외출 계획에서 고르게 한 뒤 약속 글을 쓰게 한다. "약속은 많을수록 좋다"는 학생에게 모두가 실제로 지킬 수 있는 약속이어야 한다고 말해 준다. 실제 전화번호·주소는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '가족과 외출할 때 정할 약속 세 가지를 쓰세요(실제 번호·주소는 쓰지 않아요).', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 5, title: '가족 외출 약속' }, prompt: '가족 외출 약속 세 가지를 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['약속이 구체적이다', '가족 모두 지킬 수 있다', '연락 방법이 들어 있다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 가족 외출 약속을 쓰고 기준표에 표시해요.', toolOptions: { starter: '하나, 출발 전에 ___. 둘, 길을 잃으면 ___에서 만난다. 셋, ___으로 연락한다.' } },
              { prompt: '어린 동생도 알 쉬운 말로 약속을 바꾸어 쓰고 기준표에 표시해요.', target: { selfCheck: ['약속이 구체적이다', '가족 모두 지킬 수 있다', '연락 방법이 들어 있다', '어린 동생도 알 쉬운 말로 썼다'] } }),
            { type: 'choice', prompt: '가족 외출 약속으로 가장 알맞은 것은?', options: ['조심해서 다니기', '길을 잃으면 정문 시계탑 앞에서 만나기', '알아서 찾아오기'], answer: 1, difficulty: 0.2, explain: '어디서 만날지가 정해져야 지킬 수 있어요.' },
          ],
        },
        worksheet: {
          title: '우리 가족 외출 약속',
          items: [
            { type: 'short', prompt: '가족과 정할 외출 약속 세 가지를 써요(실제 번호·주소는 쓰지 않아요).' },
            { type: 'check', prompt: '내 약속 글을 기준표로 점검해요.', options: ['구체적이다', '모두 지킬 수 있다', '연락 방법이 있다'] },
          ],
          easy: { note: '"하나, 출발 전에 ___" 틀로 시작해도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워요.', text: '길을 잃으면 ___에서 만난다.', answer: '(예) 정문 시계탑 앞' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
