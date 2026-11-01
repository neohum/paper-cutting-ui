/* 창체 법정교육 인터넷·스마트폰 과의존 예방 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 digital 중.
 * 근거: 지능정보화 기본법 제54조 — 초·중·고 학기별 1회 이상 과의존 예방교육(research-mandatory §1, 조문 원문 대조 안 됨),
 *   research-mandatory §2 '인터넷·스마트폰 과의존/디지털 시민' 중: 과의존 자가진단(점수 판정 대신 습관 점검으로 바꿈). 근거 파일에는 항목 제목만 있고 세부 사실·수치가 없다.
 * 중 기준: 사례 분석·딜레마 토의·자료 해석·짧은 글쓰기(기준표 자기 평가)·캠페인. 자료·그래프 수치와 인물·장면은 모두 지어낸 가상 자료다(가명 유나·시우·다온·로아·은재·하진).
 *   학생 자신의 사용 시간·쓰는 앱·게임 이름은 묻지 않고 채점하지 않는다 — 판정하는 문항은 가상 인물의 자료로만 내고,
 *   내 모습을 돌아보는 칸은 맞고 틀림이 없는 스스로 점검(selfCheck)이나 '혼자 보기' 활동지로만 둔다. 특정 앱·게임·회사 이름을 쓰지 않는다.
 *   안전교육 '사이버 중독 예방'(modules/saf-cyber/m.js)과 장면·문항을 되풀이하지 않는다 — 그쪽의 밤 11시 숏폼 알림·방과 후 240분 예산·팀 게임 한 판 더·
 *   세 신호(조절 실패·현저성·문제적 결과) 용어 잇기와 다른 인물·장면·카드를 쓴다.
 *   도움 받을 곳: 담임·상담 선생님(상담실)·보건실·보호자, 지역 상담 기관은 '[학교가 확인해 넣는 지역 상담 기관]' 자리 표시로만 둔다(체계도 개념에 전화번호 없음).
 * 주제 4개 34모듈. 7학년 습관 점검(9), 8학년 알림·추천 설계(9)·잠과 자료 읽기(8), 9학년 만약-그러면 계획(8).
 *
 * 사람 확인: 근거 파일에 없는 일반 사실·수칙 문장(모듈 id — 확인할 곳: 과학기술정보통신부·한국지능정보사회진흥원(스마트쉼센터, 스마트폰 과의존 실태조사)·교육부)
 *   - habit-check.*: 과의존을 보는 기준이 사용 시간이 아니라 '조절 어려움·생활의 중심이 됨·생활 영향'이라는 문장(체계도 개념의 낱말) /
 *     점검표는 판정이 아니라 바꿀 곳을 찾는 도구라는 문장 / 공부 앱이라도 조절이 어려우면 살펴볼 신호라는 문장 / 혼자 어려우면 상담실·보건실·보호자에게 알린다
 *   - attention-design.*: 알림 배지·자동 재생·무한 스크롤·연속 출석 보상·추천 목록이 사용 시간을 늘리도록 설계되었다는 설명(체계도 근거 '일반 지식, 근거 약함') /
 *     추천 목록은 오래 본 것과 비슷한 것을 더 보여 준다는 설명 / 알림 끄기·자동 재생 끄기·홈 화면 정리·시간 알림 같은 맞설 설정 —
 *     설정 메뉴 이름은 기기마다 달라 일반 말로만 썼다
 *   - sleep-study.*: 잠들기 전 사용이 수면 시간·다음 날 집중에 영향을 줄 수 있다는 문장(체계도 근거 '일반 지식, 근거 약함') / 잠자리 정리 차례(알림 끄기·충전기 거실·내일 준비·불 끄기) /
 *     '잠 8시간'·'잠들기 30분 전 화면 끄기'는 가상 인물의 연습 계획 값(화면에 '연습용'으로 밝힘) — 질병관리청·국민건강보험공단 수면 안내로 확인
 *   - use-plan.*: '만약 ~하면 ~한다' 계획이 막연한 다짐보다 지키기 쉽다는 문장(체계도 근거 '일반 지식, 근거 약함') / 계획이 어긋나면 고쳐 다시 한다 / 주말 시간 배분은 가상 인물의 연습 값 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `digital.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'digital', band: '중', topic: `digital.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } (문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 글 카드 분류판(sortboard): mode 없이 slots·cards 만
  const BB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c.to === s).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 단계별 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 깊이에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // 쉬움 = 2단계(근거 없음), 기본 = 3단계 + 근거, 도전 = 다른 길도 끝까지 가 보고(explore 2) 더할 근거까지
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: R, compare: true }, target: { path: paths(good, 3), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), reasons: [] }, target: { path: paths(good, 2) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true, explore: 2 } },
    },
  }, extra);
  // ---- 가상 자료 그래프(chart read) ----
  const CH = (type, title, unit, data, extra) => Object.assign({ type, mode: 'read', title, unit, data }, extra);
  // ---- 기준표 글쓰기(rubric-writing) 문항: 기본·쉬움(틀 starter + 기준 줄임)·도전(기준 더함) ----
  const RW = (prompt, opt, crit, easy, challenge, more) => IT({ prompt, toolOptions: opt, target: Object.assign({ selfCheck: crit }, (more && more.target) || {}) },
    easy ? { prompt: easy.prompt, toolOptions: easy.toolOptions || {}, target: Object.assign({ selfCheck: easy.crit }, (more && more.target) || {}, easy.target || {}) } : null,
    challenge ? { prompt: challenge.prompt, toolOptions: challenge.toolOptions || {}, target: Object.assign({ selfCheck: challenge.crit }, (more && more.target) || {}, challenge.target || {}) } : null,
    more && more.extra);
  // 정리 출구용 기준표 글쓰기: 기본 판은 options(출구 교구 문항 모양), 단계 판은 toolOptions
  const RWX = (prompt, opt, crit, easy, challenge, diff) => IT({ type: 'tool', tool: 'rubric-writing', options: opt, prompt, target: { selfCheck: crit }, difficulty: diff || 0.3 },
    easy ? { prompt: easy.prompt, toolOptions: easy.toolOptions || {}, target: { selfCheck: easy.crit } } : null,
    challenge ? { prompt: challenge.prompt, toolOptions: challenge.toolOptions || {}, target: { selfCheck: challenge.crit } } : null);

  // ==== 7학년 · 내 스마트폰 습관 점검 (digital.m.habit-check) ====
  // 가상 인물 유나·시우·다온·은재. 학생 자신의 습관은 스스로 점검(selfCheck)으로만 두고 판정하지 않는다.
  {
    const M = MK('habit-check', [7]);
    const SIG = ['조절 어려움', '생활의 중심', '생활 영향'];
    // 가상 인물 은재의 한 달 메모에서 뽑은 사례 문장
    const CASE = [
      { id: 'c1', text: '타이머가 울려도 "하나만 더" 하며 넘긴다', to: '조절 어려움' },
      { id: 'm1', text: '눈 뜨자마자 다른 일보다 화면부터 켠다', to: '생활의 중심' },
      { id: 'e1', text: '제출 못 한 숙제가 한 달에 네 번 생겼다', to: '생활 영향' },
      { id: 'c2', text: '끄겠다고 말한 시각을 매일 30분씩 넘긴다', to: '조절 어려움' },
      { id: 'm2', text: '화면을 못 보면 다른 일이 손에 안 잡힌다', to: '생활의 중심' },
      { id: 'e2', text: '눈이 아프고 목이 뻐근해도 계속 본다', to: '생활 영향' },
      { id: 'c3', text: '폰을 가방에 넣어도 몇 분 만에 다시 꺼낸다', to: '조절 어려움' },
      { id: 'e3', text: '친구와의 약속에 늦는 일이 잦아졌다', to: '생활 영향' },
      { id: 'n1', text: '주말에 정한 한 시간 동안 영화를 본다' },
      { id: 'n2', text: '처음 가는 길을 지도로 찾아본다' },
    ];
    const FIX = [
      { id: 'f1', text: '끌 시각이 되면 폰을 다른 방에 둔다', to: '조절 어려움' },
      { id: 'f2', text: '아침엔 세수와 아침밥 뒤에 켠다', to: '생활의 중심' },
      { id: 'f3', text: '숙제를 먼저 끝내고 켠다', to: '생활 영향' },
      { id: 'f4', text: '"하나만 더"가 떠오르면 물 한 잔 마시고 끈다', to: '조절 어려움' },
      { id: 'f5', text: '하루 한 번은 화면 없이 좋아하는 일을 한다', to: '생활의 중심' },
      { id: 'f6', text: '눈이 아프면 그 자리에서 멈추고 쉰다', to: '생활 영향' },
      { id: 'x1', text: '더 큰 화면으로 바꾼다' },
    ];
    // 가상 학생 로아의 일주일(시간). 이중 막대는 교구가 못 그려 사용·수면 그래프를 따로 읽는다.
    const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
    const USE = [['월', 2], ['화', 2], ['수', 2], ['목', 3], ['금', 4], ['토', 5], ['일', 6]];
    const SLEEP = [['월', 8], ['화', 8], ['수', 8], ['목', 8], ['금', 7], ['토', 8], ['일', 5]];
    const LOG = { unit: '시간', xLabel: '요일', yLabel: '시간', max: 10, scale: 1 };
    // 시험 전날 "5분만" 갈림길 — 가상 인물 시우
    const EXAM = { text: '수학 시험 전날 저녁 8시. 시우가 공부를 시작하려다 "5분만 보고 하자"며 폰을 든다.', ask: '시우는 어떻게 할까?', motif: 'moon', choices: [
      { id: 'timer', text: '5분 타이머를 맞추고 폰을 연다', result: '타이머가 돌아가는 동안 영상 하나를 본다.', impact: [{ who: '시우', text: '멈출 신호가 생긴다', tone: 1 }], end: '타이머를 맞추고 열었어요.',
        next: { text: '타이머가 울리는데 화면에 "다음 영상" 이 벌써 시작되었다.', choices: [
          { id: 'stop', text: '타이머 소리에 맞춰 폰을 엎어 두고 책을 편다', result: '8시 10분에 공부를 시작한다.', impact: [{ who: '시우', text: '계획대로 공부한다', tone: 1 }], end: '타이머에 맞춰 멈췄어요.',
            next: { text: '9시쯤 단체방 알림이 연달아 울린다.', choices: [
              { id: 'mute', text: '"시험 끝나고 볼게" 하고 알림을 꺼 둔다', result: '10시에 정리를 마치고 제때 잔다.', impact: [{ who: '시우', text: '다음 날 시험을 맑은 머리로 본다', tone: 1 }] },
              { id: 'chat', text: '잠깐 답장하다 대화를 이어 간다', result: '11시가 넘어서야 다시 책을 편다.', impact: [{ who: '시우', text: '정리를 다 못 한다', tone: -1 }], why: '공부를 시작한 뒤에도 끼어드는 알림에 미리 대비해 두어요.' }] } },
          { id: 'one', text: '"이것만 보고" 하며 타이머를 다시 맞춘다', result: '타이머를 세 번 더 미룬다.', impact: [{ who: '시우', text: '9시가 다 되어서야 공부를 시작한다', tone: -1 }], why: '멈출 신호가 울렸을 때 미루면 신호가 힘을 잃어요.', end: '타이머를 계속 미뤘어요.',
            next: { text: '9시. 공부할 분량의 절반이 남았다.', choices: [
              { id: 'late', text: '새벽까지 몰아서 공부한다', result: '잠이 4시간뿐이다.', impact: [{ who: '시우', text: '시험 시간에 졸린다', tone: -1 }], why: '늦게 시작한 만큼 잠을 줄이면 다음 날 생활에 영향이 커요.' },
              { id: 'cut', text: '중요한 단원만 정리하고 제때 잔다', result: '덜 보았지만 머리는 맑다.', impact: [{ who: '시우', text: '아쉽지만 잠은 지킨다', tone: 1 }] }] } }] } },
      { id: 'away', text: '"시험 끝나고 보자" 하고 폰을 거실에 둔다', result: '조금 아쉽지만 바로 책을 편다.', impact: [{ who: '시우', text: '시작이 빨라진다', tone: 1 }], end: '폰을 거실에 두고 바로 시작했어요.',
        next: { text: '한 시간 뒤, 문제가 안 풀려 답답하다. 거실의 폰이 떠오른다.', choices: [
          { id: 'break', text: '물 마시고 몸을 펴는 5분 쉬기를 한다', result: '다시 문제를 본다.', impact: [{ who: '시우', text: '화면 없이 쉰다', tone: 1 }], end: '화면 없이 쉬었어요.',
            next: { text: '정리를 마친 10시, "이제 보상으로 한 시간!" 이 떠오른다.', choices: [
              { id: 'sleep', text: '시험 끝난 오후로 미루고 잔다', result: '푹 자고 시험을 본다.', impact: [{ who: '시우', text: '시험을 맑은 머리로 본다', tone: 1 }] },
              { id: 'reward', text: '침대에서 한 시간만 보기로 한다', result: '한 시간이 두 시간이 된다.', impact: [{ who: '시우', text: '잠이 줄어든다', tone: -1 }], why: '잠들기 직전의 보상 시간은 멈추기 가장 어려운 때예요.' }] } },
          { id: 'grab', text: '"잠깐만" 하고 폰을 가져온다', result: '모르는 문제 풀이를 찾다 다른 영상으로 넘어간다.', impact: [{ who: '시우', text: '30분이 흐른다', tone: -1 }], why: '답답할 때는 화면이 아닌 쉬는 방법을 미리 정해 두어요.' }] } },
      { id: 'open', text: '그냥 폰을 들고 침대에 눕는다', result: '"5분"이 한 시간이 된다.', impact: [{ who: '시우', text: '공부 시작이 늦어진다', tone: -1 }], why: '"5분만"은 멈출 신호가 없으면 지켜지기 어려워요.', ending: '눕자마자 한 시간이 흘렀어요. 멈출 신호를 먼저 정했어야 해요.' }] };
    const EXAM_R = [{ id: 'r1', text: '멈출 신호(타이머·폰 두는 곳)를 먼저 정해야 "5분"이 지켜진다' }, { id: 'r2', text: '잠을 지켜야 다음 날 생활에 영향이 적다' },
      { id: 'r3', text: '의지가 강하면 아무 준비 없이도 멈출 수 있다', why: '의지만 믿으면 다음 영상·알림 앞에서 쉽게 무너져요.' }, { id: 'r4', text: '시험 전날에는 잠을 줄여도 괜찮다', why: '잠이 줄면 다음 날 시험 시간에 집중이 흐려져요.' }];
    // 아침 등교 전 "5분만" — 가상 인물 다온
    const MORN = { text: '평일 아침 7시 30분, 다온이는 8시에 집을 나서야 한다. 옷을 입다가 "5분만" 하며 폰을 든다.', ask: '다온이는 어떻게 할까?', motif: 'sun', choices: [
      { id: 'later', text: '"버스 타서 볼게" 하고 준비부터 마친다', result: '7시 50분에 준비를 마친다.', impact: [{ who: '다온', text: '여유 있게 나선다', tone: 1 }], end: '준비부터 마쳤어요.',
        next: { text: '버스에서 폰을 켜니 볼 것이 쌓여 있다. 내릴 정류장까지 15분이다.', choices: [
          { id: 'alarm', text: '내릴 정류장 앞에서 울리게 알림을 맞추고 본다', result: '알림에 맞춰 내린다.', impact: [{ who: '다온', text: '제때 내린다', tone: 1 }], end: '알림에 맞춰 내렸어요.',
            next: { text: '교문 앞에서 친구가 "어제 그 영상 봤어?" 하고 묻는다.', choices: [
              { id: 'talk', text: '폰을 넣고 친구와 이야기하며 들어간다', result: '1교시 전에 자리에 앉는다.', impact: [{ who: '다온', text: '수업 준비가 된다', tone: 1 }] },
              { id: 'show', text: '복도에 서서 같이 영상을 끝까지 본다', result: '종이 울린 뒤 교실에 들어간다.', impact: [{ who: '다온', text: '지각 표시를 받는다', tone: -1 }], why: '학교에 닿은 뒤에도 화면이 먼저가 되면 생활에 영향이 생겨요.' }] } },
          { id: 'miss', text: '알림 없이 넘기며 본다', result: '내릴 정류장을 지나친다.', impact: [{ who: '다온', text: '되돌아가느라 늦는다', tone: -1 }], why: '끝이 없는 화면은 멈출 곳을 미리 정해 두어야 해요.' }] } },
      { id: 'quick', text: '옷을 입으며 한 손으로 영상을 본다', result: '준비가 느려지고 준비물 하나를 빠뜨린다.', impact: [{ who: '다온', text: '체육복을 두고 간다', tone: -1 }], why: '두 가지를 함께 하면 둘 다 흐트러지기 쉬워요.', end: '준비물을 빠뜨렸어요.',
        next: { text: '8시 5분, 이미 늦었다. 다음 버스는 10분 뒤다.', choices: [
          { id: 'run', text: '폰을 보며 뛰어간다', result: '횡단보도에서 넘어질 뻔한다.', impact: [{ who: '다온', text: '다칠 뻔한다', tone: -1 }], why: '걸으며 화면을 보면 주변을 놓쳐요.' },
          { id: 'call', text: '폰을 넣고 보호자에게 늦는다고 알린 뒤 다음 버스를 탄다', result: '늦었지만 안전하게 간다.', impact: [{ who: '다온', text: '다음엔 준비부터 하기로 한다', tone: 1 }] }] } },
      { id: 'bed', text: '다시 침대에 앉아 영상을 넘긴다', result: '8시 10분에 놀라 일어난다.', impact: [{ who: '다온', text: '지각한다', tone: -1 }], why: '아침의 "5분만"은 하루 시작을 통째로 미뤄요.', ending: '지각했어요. 화면은 준비를 마친 뒤로 미루면 돼요.' }] };
    const MORN_R = [{ id: 'r1', text: '할 일을 먼저 마치고 볼 때를 정하면 생활에 영향이 적다' }, { id: 'r2', text: '멈출 곳을 알림으로 미리 정해 두면 지킬 수 있다' },
      { id: 'r3', text: '아침엔 짧게 보니 아무 상관이 없다', why: '짧은 화면도 준비 시간을 밀어내면 지각·준비물에 영향을 줘요.' }, { id: 'r4', text: '늦으면 뛰어가면 된다', why: '서두르며 화면을 보면 다칠 수 있어요.' }];
    const MORE = { reasons: [{ id: 'r5', text: '다른 길과 견주면 갈림이 생긴 첫 장면이 보인다' }], ok: ['r5'] };
    // 판정 없는 습관 점검표 — 가상 인물 유나의 일주일 메모를 읽고 해당 칸만 표시(채점), 내 것은 스스로 점검(채점 없음)
    const HAB = [
      { id: 'h1', text: '정한 시각을 넘겨 쓴다', ok: true }, { id: 'h2', text: '할 일을 미루고 먼저 켠다', ok: true },
      { id: 'h3', text: '밥 먹을 때도 화면을 본다' }, { id: 'h4', text: '잠들기 직전까지 본다', ok: true },
      { id: 'h5', text: '못 보면 불안하고 짜증 난다' }, { id: 'h6', text: '그만하려다 다시 켠다', ok: true },
      { id: 'h7', text: '눈이 아파도 계속 본다' }, { id: 'h8', text: '좋아하던 활동이 줄었다' }];
    const HAB_SELF = HAB.map((h) => ({ id: h.id, text: h.text }));

    ALL.push(
      // ---- 도입 ----
      M('intro.case-read', {
        title: '같은 시간, 다른 하루 세 사람', method: '가상 인물 세 명 사례 비교', tool: 'story', minutes: 6,
        levels: { easy: '유나·시우 두 사람의 장면 카드 4장만 보고 걱정되는 장면을 고른다(교사가 "생활에 무슨 일이 생겼나"를 단서로 말한다).', base: '세 사람의 장면 카드 6장을 넘겨 보고 걱정되는 장면을 고른 뒤 까닭을 한 줄 말한다.', challenge: '고른 장면을 보고 "시간보다 중요한 기준"을 짝과 한 문장으로 정리해 말한다.' },
        intro: {
          teacher: '"유나·시우·다온은 하루에 쓰는 시간이 모두 두 시간쯤이에요. 그런데 세 사람 가운데 누구의 하루가 가장 걱정될까요?" 가상 인물 세 사람의 장면 카드를 넘겨 보이고, 시연 단추로 걱정되는 장면이 바구니에 담기는 모습을 보인다. "시간이 같으니 다 똑같다"는 말이 나오면 "유나는 숙제를 끝내고 봤고 다온이는 잠을 줄여 봤어요. 하루에 남는 흔적도 같을까요?"라고 되묻는다. 오늘은 시간이 아니라 조절·생활의 중심·생활 영향을 기준으로 본다고 밝힌다. 학생에게 자기 사용 시간을 묻지 않는다.',
          student: '사용 시간이 같은 가상 인물 세 사람의 하루 장면을 보고, 걱정되는 장면을 골라요. 왜 걱정되는지 시간 말고 다른 까닭을 찾아 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '걱정되는 장면', title: '사용 시간은 같아요(가상 인물)', cards: [
            { id: 'y1', text: '유나: 숙제를 끝내고 영상을 본다', motif: 'sun' }, { id: 's1', text: '시우: 수업 중 책상 밑으로 몰래 본다', motif: 'cloud' },
            { id: 'd1', text: '다온: 새벽 2시까지 보고 5시간 잔다', motif: 'moon' }, { id: 'y2', text: '유나: 저녁 먹자 하면 바로 끈다', motif: 'house' },
            { id: 's2', text: '시우: 쉬는 시간마다 폰 생각뿐이다', motif: 'cloud' }, { id: 'd2', text: '다온: 1교시마다 졸다 깬다', motif: 'moon' }], shuffle: false },
            sequence: [{ pick: ['s1', 'd1', 's2', 'd2'] }] },
          art: { draw: 'a paper-cut row of three teenagers each holding a phone under the same clock showing two hours, one doing homework first, one hiding the phone under a desk, one awake under a moon', banner: '시간은 같은데 하루는 달라요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '세 인물과 장면은 가상이다. "누가 중독이냐"로 흐르지 않게 장면(행동)만 고르게 한다.',
      }),
      M('intro.myth-check', {
        title: '과의존 흔한 오해 맞다·아니다', method: '흔한 오해 OX', tool: 'wordcards', minutes: 6,
        levels: { easy: '문장 카드 3장을 맞다·아니다로 나누는 시연을 보고 교사와 함께 이유를 말한다.', base: '문장 카드 5장을 맞다·아니다로 나누는 시연을 보고 카드마다 이유를 짝과 말한다.', challenge: '\'아니다\' 카드 하나를 골라 그런 오해가 생긴 까닭을 활동지에 쓴다.' },
        intro: {
          teacher: '"하루 몇 시간 넘으면 중독이다 — 맞을까요, 아닐까요?" 문장 카드 다섯 장을 띄우고 시연 단추로 맞다·아니다 칸에 나뉘는 모습을 보인다. "공부 앱은 오래 써도 괜찮다"에 고개를 끄덕이는 학생에게 "공부 앱을 켜 놓고 끄고 싶을 때 못 끈다면, 앱 이름이 중요할까요 조절이 중요할까요?"라고 되묻는다. 카드마다 이유 한 가지를 말로 붙이고, 점검표 점수가 사람을 정하는 말이 아니라는 점을 짚는다.',
          student: '과의존에 대한 문장 다섯 개가 맞는지 아닌지 생각해 보고, 카드마다 그렇게 생각한 이유를 짝에게 한 가지씩 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['맞다', '아니다'], cards: [
            { id: 'w1', text: '하루 몇 시간 넘으면 무조건 중독이다' }, { id: 'w2', text: '공부 앱이면 오래 써도 다 괜찮다' },
            { id: 'w3', text: '그만하려 해도 잘 안 되면 살펴볼 신호다' }, { id: 'w4', text: '잠·공부·관계에 지장이 생기면 살펴볼 신호다' },
            { id: 'w5', text: '점검표 점수가 높으면 문제 학생이다' }] },
            sequence: [{ sort: { 맞다: ['w3', 'w4'], 아니다: ['w1', 'w2', 'w5'] } }] },
          art: { draw: 'a paper-cut pair of baskets labeled O and X on a classroom table with paper sentence strips about phones floating above them', banner: '맞다? 아니다?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '이 낱말 카드 판은 영어 발음을 내지 않는 나누기(sort) 판이다.',
      }),

      // ---- 활동 ----
      M('activity.signal-analyze', {
        title: '은재의 한 달 메모 신호별로 나누기', method: '신호별 사례 분석', tool: 'sortboard', minutes: 15,
        levels: { easy: '사례 카드 5장을 세 바구니에 나누고, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(바구니마다 든 장 수가 보인다).', base: '사례 카드 8장과 신호가 아닌 카드 2장이 섞인 판에서 8장만 나누고, 이어서 바꿀 행동 카드를 신호 바구니에 덧붙인다.', challenge: '바꿀 행동 카드에 함정 카드가 더 섞이고, 마지막 문항에서 두 칸에 걸치는 사례를 모둠이 정한 칸에 놓고 토의한다.' },
        activity: {
          title: '은재의 한 달 메모 신호별로 나누기', tool: 'sortboard',
          teacher: '"\'타이머가 울려도 넘긴다\'는 시간이 길다는 뜻일까요, 멈추기 어렵다는 뜻일까요?" 가상 인물 은재의 한 달 메모 카드를 세 바구니에 나누며 카드마다 어떤 신호인지 근거를 말하게 한다. "주말 영화 한 시간도 신호"라는 학생에게 "미리 정한 시간에 보고 끝냈다면 어느 바구니에 들어갈 수 있을까요?"라고 되묻는다. 이어서 신호마다 바꿀 행동을 붙이며, 신호를 아는 것이 판정이 아니라 바꿀 곳을 찾는 일이라는 점을 짚는다.',
          task: '가상 인물 은재의 메모 카드를 \'조절 어려움·생활의 중심·생활 영향\' 바구니에 나누고, 신호마다 바꿀 행동 카드를 덧붙여요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('은재의 메모 카드를 세 신호 바구니에 나누세요(신호가 아닌 카드는 남겨요).', SIG, CASE),
              BB('은재의 메모 카드 5장을 세 신호 바구니에 나누세요.', SIG, pickCards(CASE, ['c1', 'm1', 'e1', 'c2', 'm2']))),
            IT(BB('신호마다 바꿀 행동 카드를 알맞은 바구니에 덧붙이세요.', SIG, FIX),
              BB('바꿀 행동 카드 3장을 알맞은 바구니에 덧붙이세요.', SIG, pickCards(FIX, ['f1', 'f2', 'f3'])),
              { prompt: '바꿀 행동 카드를 알맞은 바구니에 덧붙이세요(함정 카드가 더 있어요).', toolOptions: { more: [{ id: 'x2', text: '알림 소리를 더 크게 한다' }] } }),
            { prompt: '\'밤늦게까지 보다 아침에 못 일어나 지각한다\'는 두 칸에 걸쳐 보여요. 모둠이 정한 바구니에 놓고 까닭을 말해요.', free: true,
              toolOptions: { slots: SIG, cards: [{ id: 'b1', text: '밤늦게까지 보다 아침에 못 일어나 지각한다' }, { id: 'b2', text: '보고 싶어 학원 가는 길을 일부러 늦춘다' }] },
              conclude: '신호는 시간 길이가 아니라 \'멈출 수 있나·무엇이 먼저인가·생활에 무슨 일이 생겼나\'로 봐요. 신호를 찾으면 바꿀 곳도 보여요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 신호마다 은재의 사례 하나와 바꿀 행동 하나를 써요.', columns: ['신호', '은재의 사례', '바꿀 행동'], cells: [['조절 어려움', '', ''], ['생활의 중심', '', ''], ['생활 영향', '', '']], answer: '(예) 타이머를 넘김—폰을 다른 방에, 화면부터 켬—아침 준비 뒤 켜기, 숙제 못 냄—숙제 먼저' }],
          easy: [{ type: 'choice', prompt: '\'조절 어려움\'에 해당하는 사례에 ○ 해요.', options: ['타이머가 울려도 넘긴다', '주말에 정한 한 시간 영화를 본다'], answer: '타이머가 울려도 넘긴다' }] },
        notes: '분류판은 카드 한 장에 정답 바구니 하나라서, 두 칸에 걸치는 사례는 마지막 문항(맞고 틀림이 없는 토의 문항)으로 따로 둔다.',
      }),
      M('activity.week-log', {
        title: '로아의 일주일 그래프 읽기', method: '가상 일주일 기록 해석', tool: 'chart', minutes: 15,
        levels: { easy: '막대 끝에 값이 보이고, 사용이 가장 긴 요일과 잠이 가장 짧은 요일이 같은 한 요일임을 찾는다.', base: '값 없이 눈금을 읽어 한 요일을 찾고, 수면 차이를 수로 쓰고, 영향이 시작된 다른 요일까지 고른다.', challenge: '마지막 문항에서 그래프만으로 알 수 없는 것을 고르고 활동지에 까닭을 쓴다.' },
        activity: {
          title: '로아의 일주일 그래프 읽기', tool: 'chart',
          teacher: '"로아는 어느 요일에 화면을 가장 오래 썼고, 그날 잠은 어땠을까요?" 가상 학생 로아의 사용 시간 그래프와 수면 시간 그래프를 차례로 띄우고, 두 그래프에서 같은 요일을 짚으며 읽게 한다. "주말엔 오래 써도 괜찮다"는 학생에게 "일요일 밤 잠이 줄면 그 영향은 어느 날 나타날까요?"라고 되묻는다. 이 자료는 수업용으로 지어낸 가상 자료이고, 두 그래프를 함께 보아도 원인까지 단정할 수는 없다는 점을 처음과 끝에 밝힌다.',
          task: '가상 학생 로아의 요일별 사용 시간과 수면 시간 그래프를 읽고, 생활 영향이 드러나는 요일을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '로아의 사용 시간 그래프에서 가장 오래 쓴 요일을 고르세요.', toolOptions: CH('bar', '로아의 요일별 사용 시간(가상 자료)', '시간', USE, Object.assign({ question: '사용 시간이 가장 긴 요일은?', choices: DAYS }, LOG)), target: { pick: 6 }, difficulty: 0.15 }),
            IT({ prompt: '로아의 수면 시간 그래프에서 잠이 가장 짧은 요일을 고르세요.', toolOptions: CH('bar', '로아의 요일별 수면 시간(가상 자료)', '시간', SLEEP, Object.assign({ question: '수면 시간이 가장 짧은 요일은?', choices: DAYS }, LOG)), target: { pick: 6 }, difficulty: 0.2 }),
            IT({ prompt: '일요일 수면 시간은 월요일보다 몇 시간 적은지 그래프에서 읽어 쓰세요.', toolOptions: CH('bar', '로아의 요일별 수면 시간(가상 자료)', '시간', SLEEP, Object.assign({ question: '몇 시간 적은가요?' }, LOG)), target: { value: 3 }, difficulty: 0.25 }),
            IT({ prompt: '사용 시간이 늘기 시작하고 수면이 처음 줄어든 요일을 고르세요.', toolOptions: CH('bar', '로아의 요일별 수면 시간(가상 자료)', '시간', SLEEP, Object.assign({ question: '수면이 처음 줄어든 요일은?', choices: DAYS }, LOG)), target: { pick: 4 }, difficulty: 0.3 },
              null,
              { prompt: '두 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: { question: '이 가상 자료로 알 수 없는 것은?', choices: ['일요일 사용 시간', '로아가 일요일에 왜 늦게 잤는지', '수면이 가장 짧은 요일'] }, target: { pick: 1 } },
              { conclude: '사용이 가장 긴 날과 잠이 가장 짧은 날이 겹치면 생활 영향의 단서예요. 하지만 그래프는 \'왜\'까지 말해 주지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '로아의 그래프에서 생활 영향이 드러난 요일과, 그래프만으로 알 수 없는 것을 한 문장씩 써요.' }],
          easy: [{ type: 'choice', prompt: '로아가 가장 오래 쓰고 가장 적게 잔 요일에 ○ 해요.', options: ['월요일', '일요일'], answer: '일요일' }] },
        notes: '계획은 이중 막대그래프지만 교구가 한 그래프에 두 자료를 그리지 못해 사용 시간 그래프와 수면 시간 그래프를 차례로 읽는다. 값은 모두 가상이다.',
      }),
      M('activity.habit-dilemma', {
        title: '"5분만" 갈림길 따라가기', method: '"5분만" 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 골라 다음 날 결과를 본다(근거 고르기 없음).', base: '갈림길 3번을 끝까지 가고, 끝 장면에서 근거 카드를 고른다.', challenge: '다른 길도 하나 더 끝까지 가 보고(끝 장면 둘 이상) 견준 뒤, 늘어난 근거 카드에서 고른다.' },
        activity: {
          title: '"5분만" 갈림길 따라가기', tool: 'dilemma',
          teacher: '"\'5분만\'이라고 말할 때, 5분 뒤에 무엇이 나를 멈춰 줄까요?" 가상 인물 시우·다온의 갈림길을 한 길씩 끝까지 가 보게 하고, 되돌아가 다른 길의 다음 날과 견주게 한다. "의지가 강하면 5분에 끊는다"는 학생에게 "타이머가 울릴 때 다음 영상이 벌써 시작돼 있다면 의지만으로 충분할까요?"라고 되묻는다. 실패한 길도 \'어디서 바꿀 수 있었나\'를 찾는 길로 다룬다.',
          task: '"5분만" 하는 장면에서 가상 인물의 길을 골라 다음 날까지 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '시험 전날 저녁, 시우가 "5분만" 해요. 두 번 골라 결과를 보세요.', base: '시험 전날 저녁, 시우가 "5분만" 해요. 세 번 골라 다음 날까지 가고 근거를 고르세요.', challenge: '시험 전날 저녁, 시우의 길을 둘 이상 끝까지 가 보고 견준 뒤 근거를 고르세요.' },
              '시험 전날 "5분만"', EXAM, [['timer', 'stop', 'mute'], ['away', 'break', 'sleep'], ['timer', 'one', 'cut']], EXAM_R, ['r1', 'r2'], MORE),
            DIL({ easy: '등교 준비 중 다온이가 "5분만" 해요. 두 번 골라 결과를 보세요.', base: '등교 준비 중 다온이가 "5분만" 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '등교 준비 중 다온이의 길을 둘 이상 끝까지 가 보고 견준 뒤 근거를 고르세요.' },
              '아침 "5분만"', MORN, [['later', 'alarm', 'talk'], ['quick', 'call']], MORN_R, ['r1', 'r2'], MORE),
            { prompt: '시우와 다온이의 길 가운데 갈림이 처음 생긴 장면을 짝과 견주어 말해요.', free: true, toolOptions: { title: '시험 전날 "5분만"', scene: cut(EXAM, 3), reasons: [], compare: true },
              conclude: '"5분만"을 지키는 힘은 의지보다 미리 정한 멈출 신호와 폰 두는 곳에서 나와요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '시우나 다온이의 길에서 결과가 갈린 첫 장면과, 그때 도움이 된 준비를 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '"5분만"을 지키는 데 도움이 되는 것에 ○ 해요.', options: ['타이머를 맞추고 폰 둘 곳을 정하기', '침대에 누워서 보기'], answer: '타이머를 맞추고 폰 둘 곳을 정하기' }] },
      }),
      M('activity.self-list', {
        title: '판정 없는 습관 점검표', method: '내 습관 점검표(판정 없음)', tool: 'kitchen', minutes: 15,
        levels: { easy: '점검 칸 6개로, 가상 인물 유나의 메모에 맞는 칸을 표시하고 내 칸을 스스로 점검한다.', base: '점검 칸 8개로 유나의 칸을 표시하고, 내 칸은 점수 없이 \'자주\' 그런 칸만 스스로 표시한 뒤 가장 바꾸고 싶은 칸을 고른다.', challenge: '마지막 문항에서 바꾸고 싶은 칸이 생기는 상황(언제·어디서)을 활동지에 적는다.' },
        activity: {
          title: '판정 없는 습관 점검표', tool: 'kitchen',
          teacher: '"이 점검표는 몇 개에 표시했는지 세는 표가 아니에요. 바꿀 곳 하나를 찾는 표예요." 먼저 가상 인물 유나의 일주일 메모를 읽고 해당하는 칸을 표시하게 한 뒤, 같은 칸으로 내 습관을 스스로 점검하게 한다. "표시가 많으면 큰일 난 거예요?"라는 물음에는 "표시 수가 아니라, 그중 무엇을 먼저 바꿀지가 오늘의 답이에요"라고 답한다. 학생의 점검 결과는 걷거나 발표시키지 않고, 친구 점검표를 들여다보지 않게 한다.',
          task: '가상 인물 유나의 메모에 맞는 점검 칸을 표시하고, 같은 점검표로 내 습관을 점수 없이 돌아본 뒤 가장 바꾸고 싶은 칸 하나를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('유나의 메모: "10시에 끄기로 했는데 11시까지 봄. 숙제 전에 먼저 켬. 자기 직전까지 봄. 끄고 누웠다가 다시 켬." 메모에 맞는 칸만 표시하세요.', '유나의 습관 점검', HAB),
              CL('유나의 메모: "10시에 끄기로 했는데 11시까지 봄. 숙제 전에 먼저 켬. 자기 직전까지 봄." 메모에 맞는 칸만 표시하세요(칸 6개).', '유나의 습관 점검', HAB.slice(0, 6).map((h) => (h.id === 'h6' ? { id: h.id, text: h.text } : h)))),
            IT({ prompt: '같은 점검표로 내 습관을 돌아봐요. 점수는 없어요. \'자주\' 그런 칸만 혼자 표시하세요.', toolOptions: { mode: 'checklist', title: '나의 습관 돌아보기(점수 없음)', items: HAB_SELF }, target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '같은 점검표(칸 6개)로 내 습관을 돌아봐요. 점수는 없어요. \'자주\' 그런 칸만 혼자 표시하세요.', toolOptions: { items: HAB_SELF.slice(0, 6) } }),
            IT({ prompt: '표시한 칸 가운데 가장 바꾸고 싶은 칸 하나에만 별을 달듯 표시하세요(정답은 없어요).', toolOptions: { mode: 'checklist', title: '가장 바꾸고 싶은 칸 하나', items: HAB_SELF }, target: { selfCheck: true }, difficulty: 0.1,
              conclude: '점검표는 나를 판정하는 표가 아니에요. 바꿀 곳 하나를 찾으면 그것이 오늘의 결과예요.' },
              { prompt: '칸 6개 가운데 가장 바꾸고 싶은 칸 하나에만 표시하세요(정답은 없어요).', toolOptions: { items: HAB_SELF.slice(0, 6) } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '(혼자 보기) 가장 바꾸고 싶은 칸과, 그 칸이 생기는 상황(언제·어디서)을 한 문장으로 써요. 이 칸은 걷지 않아요.' }],
          easy: [{ type: 'blank', prompt: '(혼자 보기) 틀을 채워요.', text: '내가 가장 바꾸고 싶은 칸은 ___이다.', answer: '(예) 잠들기 직전까지 본다' }] },
        notes: '점검표 교구는 표시/안 표시 두 가지만 있어 계획의 \'자주·가끔·드물게\' 세 단계 대신 \'자주 그런 칸만 표시\'로 바꿨다. 학생 자신의 점검은 맞고 틀림이 없는 스스로 점검이고, 채점되는 문항은 가상 인물 유나의 메모뿐이다.',
      }),

      // ---- 정리 ----
      M('wrap.reflect-write', {
        title: '알아차린 습관과 바꿀 한 가지', method: '점검 후 짧은 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 ___ 때 ___하는 습관을 알아차렸다. 앞으로 ___하겠다.")을 채워 두 문장을 쓴다.', base: '세 문장을 쓰고 기준 3개(구체적 상황·바꿀 행동·이유)를 스스로 점검한다.', challenge: '방해 요인과 대비책 문장을 더해 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'폰을 줄이겠다\'와 \'숙제 전에 켜는 습관을, 숙제를 끝낸 뒤 켜는 것으로 바꾸겠다\' 가운데 어느 쪽이 내일 지켜질까요?" 두 문장을 견주어 읽은 뒤 짧은 글을 쓰게 한다. "바꿀 게 없다"는 학생에게는 가상 인물 은재·유나 가운데 한 사람에게 권할 한 가지로 써도 된다고 알려 준다. 글은 걷어 평가하지 않고, 사용 시간 숫자나 앱 이름은 쓰지 않게 한다.',
          exitTicket: [
            RWX('알아차린 습관과 바꿀 한 가지를 세 문장으로 쓰고 기준표에 스스로 표시해요.',
              { topic: '오늘 알아차린 나의 습관과 바꿀 한 가지를 세 문장으로 쓰세요(앱 이름·시간 숫자는 쓰지 않아요).', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 4, title: '습관 점검 뒤 한 단락' },
              ['어떤 상황에서 생기는 습관인지 썼다', '바꿀 행동을 구체적으로 썼다', '바꾸려는 이유를 썼다'],
              { prompt: '문장 틀을 채워 두 문장을 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '나는 ___ 때 ___하는 습관을 알아차렸다. 앞으로 ___하겠다.' }, crit: ['어떤 상황에서 생기는 습관인지 썼다', '바꿀 행동을 구체적으로 썼다'] },
              { prompt: '세 문장에 방해 요인과 대비책 문장을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5, maxChars: 320 }, crit: ['어떤 상황에서 생기는 습관인지 썼다', '바꿀 행동을 구체적으로 썼다', '바꾸려는 이유를 썼다', '방해 요인과 대비책을 썼다'] },
              0.3),
            { type: 'choice', prompt: '습관 점검표에 대한 말로 가장 알맞은 것은?', options: ['표시가 많으면 중독이라고 판정한다', '바꿀 곳 하나를 찾는 데 쓴다', '친구 점검표와 점수를 비교한다'], answer: 1, difficulty: 0.15, explain: '점검은 판정이 아니라 바꿀 지점을 찾는 일이에요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '알아차린 습관과 바꿀 한 가지',
          items: [
            { type: 'short', prompt: '(혼자 보기) 알아차린 습관 하나와 바꿀 행동 하나를 써요.' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['상황이 드러난다', '바꿀 행동이 구체적이다', '이유가 들어 있다'] },
          ],
          easy: { note: '"나는 ___ 때 ___하는 습관을 알아차렸다." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워요.', text: '나는 ___ 때 ___하는 습관을 알아차렸다. 앞으로 ___하겠다.', answer: '(예) 숙제할, 먼저 폰을 켜는, 숙제를 끝내고 켜겠다' }] },
        },
      }),
      M('wrap.help-path', {
        title: '혼자 어려울 때 갈 곳', method: '혼자 어려울 때 도움 경로', tool: 'map', minutes: 7,
        levels: { easy: '가상 학교 지도에서 상담실 한 곳에 핀을 놓는다(곳 이름이 보인다).', base: '상담실과 보건실 두 곳에 차례로 핀을 놓고, 지역 상담 기관 자리 표시를 확인한다.', challenge: '친구를 데려갈 때 건넬 말을 고르고, 활동지에 내 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '"멈추려고 해도 혼자서는 잘 안 될 때, 학교 안에서 누구에게 갈 수 있을까요?" 가상 학교 지도에서 상담실·보건실 자리를 함께 찾고, 지역 상담 기관 칸은 학교가 확인해 넣는 자리라고 알려 준다. "이런 일로 상담실 가면 이상하게 본다"는 학생에게 "눈이 아프고 잠이 줄었다면 보건실, 멈추기 어렵다면 상담실 — 도움을 청하는 것도 조절하는 방법이에요"라고 답한다. 학생에게 상담 받은 적이 있는지는 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: { title: '가상의 우리 학교와 동네', grid: [6, 4], names: true, places: [
              { name: '상담실', icon: 'house', at: [1, 0], legend: '학교 상담실(상담 선생님)' }, { name: '보건실', icon: 'hospital', at: [3, 0], legend: '학교 보건실(보건 선생님)' },
              { name: '도서관', icon: 'library', at: [5, 0] }, { name: '우리 반 교실', icon: 'school', at: [0, 2] },
              { name: '지역 상담 기관', icon: 'office', at: [4, 3], legend: '[학교가 확인해 넣는 지역 상담 기관]' }, { name: '운동장', icon: 'park', at: [2, 3] }] },
              prompt: '멈추기가 혼자 어려울 때 학교 안에서 먼저 이야기할 곳에 핀을 놓으세요.', target: { place: '상담실' }, difficulty: 0.15 }),
            IT({ type: 'tool', tool: 'map', options: { title: '가상의 우리 학교와 동네', grid: [6, 4], names: true, places: [
              { name: '상담실', icon: 'house', at: [1, 0], legend: '학교 상담실(상담 선생님)' }, { name: '보건실', icon: 'hospital', at: [3, 0], legend: '학교 보건실(보건 선생님)' },
              { name: '도서관', icon: 'library', at: [5, 0] }, { name: '우리 반 교실', icon: 'school', at: [0, 2] },
              { name: '지역 상담 기관', icon: 'office', at: [4, 3], legend: '[학교가 확인해 넣는 지역 상담 기관]' }, { name: '운동장', icon: 'park', at: [2, 3] }] },
              prompt: '눈이 아프고 잠이 부족해 몸이 힘들 때 학교 안에서 갈 곳에 핀을 놓으세요.', target: { place: '보건실' }, difficulty: 0.2 }),
            IT({ type: 'choice', prompt: '멈추기 어려워하는 친구와 상담실에 같이 갈 때 건넬 말로 가장 알맞은 것은?', options: ['"너 중독이라 가야 돼"', '"혼자 힘들면 같이 가 볼래? 나도 옆에 있을게"', '"선생님께 다 일러 줄 거야"'], answer: 1, difficulty: 0.2, explain: '탓하거나 겁주지 않고 함께 가겠다고 말하면 친구가 도움을 받기 쉬워요.' }),
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '혼자 어려울 때 갈 곳',
          items: [
            { type: 'table', prompt: '도움을 청할 곳을 써요.', columns: ['언제', '어디로', '메모'], cells: [['멈추기가 혼자 어려울 때', '상담실', ''], ['몸이 힘들 때(눈·잠)', '', ''], ['학교 밖에서', '[학교가 확인해 넣는 지역 상담 기관]', '']], answer: '보건실' },
            { type: 'short', prompt: '친구와 상담실에 같이 갈 때 건넬 말을 내 말로 한 문장 써요.' },
          ],
          easy: { note: '낱말 상자: 상담실 · 보건실', items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '멈추기가 혼자 어려우면 학교 ___에 이야기한다.', answer: '상담실' }] },
        },
        notes: '지역 상담 기관 이름·번호는 학교가 확인해 활동지 자리 표시에 넣는다(체계도 개념에 번호가 없다).',
      }),
    );
  }

  // ==== 8학년 · 알림과 추천이 시간을 끄는 방식 (digital.m.attention-design) ====
  // 가상 인물 하진·로아. 화면 장치는 일반 이름(알림 배지·자동 재생·무한 스크롤·연속 출석 보상·추천 목록)으로만 부른다.
  {
    const M = MK('attention-design', [8]);
    const GRIP = ['멈출 틈을 없앰', '다시 오게 함'];
    const DEV = [
      { id: 'd1', text: '영상이 끝나면 다음 영상이 저절로 시작된다', to: '멈출 틈을 없앰' },
      { id: 'd2', text: '아래로 넘겨도 끝이 나오지 않는다', to: '멈출 틈을 없앰' },
      { id: 'd3', text: '이레 연속 들어오면 보상을 준다', to: '다시 오게 함' },
      { id: 'd4', text: '앱 그림 위에 빨간 숫자가 붙는다', to: '다시 오게 함' },
      { id: 'd5', text: '"다음 화 5초 뒤 시작" 숫자가 줄어든다', to: '멈출 틈을 없앰' },
      { id: 'd6', text: '"친구가 새 글을 올렸어요" 알림이 온다', to: '다시 오게 함' },
      { id: 't1', text: '글자 크기를 바꾸는 단추가 있다' },
    ];
    const MORE_DEV = [{ id: 'd7', text: '"놓친 소식 12개" 띠가 맨 위에 뜬다', to: '다시 오게 함' }, { id: 'd8', text: '보던 영상 옆에 비슷한 영상이 줄줄이 붙는다', to: '멈출 틈을 없앰' }];
    const FIXS = ['자동 재생', '무한 스크롤', '배지·알림'];
    const FIX = [
      { id: 'a1', text: '자동 재생을 끈다', to: '자동 재생' }, { id: 'a2', text: '한 편 끝나면 화면을 닫는다', to: '자동 재생' },
      { id: 'b1', text: '볼 개수를 정하고 시작한다', to: '무한 스크롤' }, { id: 'b2', text: '시간 알림을 맞추고 넘긴다', to: '무한 스크롤' },
      { id: 'c1', text: '숫자 배지 표시를 끈다', to: '배지·알림' }, { id: 'c2', text: '꼭 필요한 알림만 남긴다', to: '배지·알림' },
      { id: 'x1', text: '화면 밝기를 최대로 올린다' },
    ];
    // 가상 실험 — 배지를 켜 둔 날과 끈 날, 로아가 앱을 연 횟수
    const BADGE = [['배지 켠 날', 24], ['배지 끈 날', 11]];
    // 자동 재생 끄기 고민 — 가상 인물 로아
    const AUTO = { text: '로아는 요리 영상을 즐겨 본다. 자동 재생을 끄자니 "다음 편 누르기 귀찮겠다"는 생각이 든다. 요즘 저녁마다 한 시간 넘게 보게 된다.', ask: '로아는 어떻게 할까?', motif: 'house', choices: [
      { id: 'off', text: '귀찮아도 자동 재생을 끄고 일주일 써 본다', result: '한 편 끝날 때마다 화면이 멈춘다.', impact: [{ who: '로아', text: '멈출 틈이 생긴다', tone: 1 }], end: '자동 재생을 껐어요.',
        next: { text: '사흘째, 다음 편을 누르는 게 번거롭다. "다시 켤까?" 싶다.', choices: [
          { id: 'keep', text: '번거로움을 멈춤 신호로 보고 그대로 둔다', result: '한 편 끝날 때 "더 볼까?"를 스스로 고른다.', impact: [{ who: '로아', text: '저녁 시간이 남는다', tone: 1 }], end: '그대로 두었어요.',
            next: { text: '일주일 뒤, 저녁마다 보는 시간이 30분쯤으로 줄었다. 친구가 "그거 불편하지 않아?" 하고 묻는다.', choices: [
              { id: 'share', text: '"불편한 게 오히려 멈추게 해 줘"라며 설정을 알려 준다', result: '친구도 해 보겠다고 한다.', impact: [{ who: '친구', text: '맞설 설정을 안다', tone: 1 }] },
              { id: 'back', text: '"맞아, 불편해" 하고 다시 켠다', result: '다음 주에 다시 한 시간을 넘긴다.', impact: [{ who: '로아', text: '원래대로 돌아간다', tone: -1 }], why: '줄어든 결과가 보였다면 그 설정을 지키는 것이 이득이에요.' }] } },
          { id: 'on', text: '다시 자동 재생을 켠다', result: '저녁마다 또 한 시간을 넘긴다.', impact: [{ who: '로아', text: '저녁 할 일이 밀린다', tone: -1 }], why: '불편함이 바로 멈출 틈이에요. 사흘 만에 되돌리면 효과를 볼 수 없어요.' }] } },
      { id: 'keepon', text: '자동 재생은 두고 "조심하자"고만 다짐한다', result: '다짐한 첫날만 일찍 끈다.', impact: [{ who: '로아', text: '이틀째부터 원래대로', tone: -1 }], why: '설계 장치는 다짐보다 강해요. 장치에는 설정으로 맞서요.', end: '다짐만 했어요.',
        next: { text: '주말에 정신 차려 보니 오후 내내 요리 영상을 봤다.', choices: [
          { id: 'try', text: '이번엔 자동 재생을 끄고 일주일 해 보기로 한다', result: '다음 주부터 멈출 틈이 생긴다.', impact: [{ who: '로아', text: '다시 시작한다', tone: 1 }] },
          { id: 'give', text: '"나는 원래 못 멈춰" 하고 포기한다', result: '아무것도 바뀌지 않는다.', impact: [{ who: '로아', text: '같은 일이 되풀이된다', tone: -1 }], why: '못 멈춘 것은 내 탓만이 아니라 장치 탓도 있어요. 설정을 바꿔 다시 해 봐요.' }] } },
      { id: 'delete', text: '화가 나서 앱을 아예 지운다', result: '이틀 뒤 레시피를 찾으려 다시 깐다.', impact: [{ who: '로아', text: '처음으로 돌아간다', tone: 0 }], why: '꼭 필요한 쓰임까지 막으면 오래 못 가요. 시간을 끄는 장치만 골라 꺼요.', ending: '다시 깔고 처음으로 돌아갔어요. 장치만 골라 끄는 길도 있었어요.' }] };
    const AUTO_R = [{ id: 'r1', text: '설계 장치에는 다짐보다 설정으로 맞서는 것이 낫다' }, { id: 'r2', text: '조금 불편한 것이 멈출 틈이 된다' },
      { id: 'r3', text: '편리한 기능은 무조건 켜 두는 것이 이득이다', why: '편리함이 멈출 틈을 없애면 시간을 잃어요.' }, { id: 'r4', text: '사흘 써 보고 불편하면 바로 되돌린다', why: '효과는 일주일쯤 써 봐야 보여요.' }];
    // 알림 정리 고민 — 가상 인물 하진
    const NOTI = { text: '하진이 폰에는 하루 알림이 백 개 넘게 온다. 공부하다 알림이 울릴 때마다 폰을 집는다. 단체방 알림을 끄면 중요한 걸 놓칠까 걱정된다.', ask: '하진이는 어떻게 할까?', motif: 'star', choices: [
      { id: 'sort', text: '알림을 하나씩 보며 꼭 필요한 것만 남긴다', result: '가족·학급 공지 알림만 남는다.', impact: [{ who: '하진', text: '울리는 횟수가 줄어든다', tone: 1 }], end: '필요한 알림만 남겼어요.',
        next: { text: '이틀 뒤, 친구 단체방에서 약속 시각이 바뀐 것을 늦게 봤다.', choices: [
          { id: 'check', text: '단체방은 저녁 8시에 한 번 몰아 확인하기로 정한다', result: '약속을 놓치지 않고, 공부 중엔 조용하다.', impact: [{ who: '하진', text: '놓치지 않으면서 집중한다', tone: 1 }], end: '확인 시각을 정했어요.',
            next: { text: '친구가 "왜 답이 늦어?" 하고 서운해한다.', choices: [
              { id: 'tell', text: '"공부할 땐 알림을 꺼 두고 8시에 봐"라고 알린다', result: '친구가 급한 일은 전화하겠다고 한다.', impact: [{ who: '친구', text: '하진이의 방식을 안다', tone: 1 }] },
              { id: 'allon', text: '미안해서 모든 알림을 다시 켠다', result: '공부 중에 다시 자꾸 폰을 집는다.', impact: [{ who: '하진', text: '집중이 끊긴다', tone: -1 }], why: '내 방식을 알리면 알림을 다 켜지 않아도 관계를 지킬 수 있어요.' }] } },
          { id: 'restore', text: '놓칠까 봐 모든 알림을 다시 켠다', result: '울릴 때마다 폰을 집는 하루로 돌아간다.', impact: [{ who: '하진', text: '집중이 다시 끊긴다', tone: -1 }], why: '한 번 놓쳤다면 다 켜기보다 확인 시각을 정하는 방법이 있어요.' }] } },
      { id: 'all', text: '그대로 두고 울릴 때마다 확인한다', result: '공부 한 시간에 폰을 열두 번 집는다.', impact: [{ who: '하진', text: '숙제가 두 배로 오래 걸린다', tone: -1 }], why: '알림은 다시 오게 하는 장치예요. 필요한 것만 남겨요.', end: '그대로 두었어요.',
        next: { text: '숙제가 밤 11시에야 끝났다.', choices: [
          { id: 'fix', text: '내일은 공부할 때 방해 금지 모드를 켜기로 한다', result: '다음 날 숙제가 9시에 끝난다.', impact: [{ who: '하진', text: '잠을 지킨다', tone: 1 }] },
          { id: 'same', text: '"원래 그런 거지" 하고 넘긴다', result: '다음 날도 똑같다.', impact: [{ who: '하진', text: '잠이 줄어든다', tone: -1 }], why: '결과가 보였으면 설정 하나로 다음 날을 바꿀 수 있어요.' }] } },
      { id: 'phoneoff', text: '공부할 때마다 폰 전원을 끈다', result: '집중은 되지만 가족 연락도 못 받는다.', impact: [{ who: '가족', text: '연락이 닿지 않아 걱정한다', tone: -1 }], why: '전원을 끄기보다 꼭 필요한 알림만 남기는 길이 오래 가요.', ending: '가족이 걱정했어요. 필요한 알림만 남기는 길도 있었어요.' }] };
    const NOTI_R = [{ id: 'r1', text: '알림은 다시 오게 하는 장치라 꼭 필요한 것만 남긴다' }, { id: 'r2', text: '확인 시각을 정하면 놓치지 않고 집중할 수 있다' },
      { id: 'r3', text: '알림을 끄면 친구 관계가 끝난다', why: '내 방식을 알리면 관계는 지킬 수 있어요.' }, { id: 'r4', text: '모든 알림은 다 중요하다', why: '중요한 알림은 몇 개뿐이에요. 나머지는 나를 다시 부르는 장치예요.' }];
    const MORE = { reasons: [{ id: 'r5', text: '다른 길과 견주면 설정 하나가 일주일 뒤를 바꾼다' }], ok: ['r5'] };
    // 맞설 설정 점검표
    const SET = [
      { id: 's1', text: '꼭 필요하지 않은 알림 끄기', ok: true }, { id: 's2', text: '자동 재생 끄기', ok: true },
      { id: 's3', text: '홈 화면 첫 칸에서 영상 앱 옮기기', ok: true }, { id: 's4', text: '숫자 배지 표시 끄기', ok: true },
      { id: 's5', text: '모든 앱 알림 소리 키우기' }, { id: 's6', text: '보던 영상 이어 보기 켜기' }];
    const ORDER = [{ id: 'o1', text: '시간을 가장 많이 끄는 장치 찾기' }, { id: 'o2', text: '그 장치에 맞설 설정 고르기' }, { id: 'o3', text: '일주일 동안 해 보기' }, { id: 'o4', text: '돌아보고 설정 고치기' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.scroll-story', {
        title: '버스에서 사라진 40분', method: '"끝이 없는 화면" 장면 분석', tool: 'story', minutes: 6,
        levels: { easy: '네 컷 가운데 멈출 틈이 사라진 컷 하나를 함께 고른다(교사가 "누가 다음 영상을 눌렀나"를 단서로 말한다).', base: '멈출 틈이 사라진 컷 두 개를 고르고 까닭을 말한다.', challenge: '고른 컷마다 화면 장치 이름(자동 재생·무한 스크롤)을 붙여 말한다.' },
        intro: {
          teacher: '"하진이는 영상 하나만 볼 생각이었어요. 그런데 왜 내릴 정류장을 지나쳤을까요?" 가상 인물 하진이의 버스 네 컷을 넘겨 보이고, 시연 단추로 멈출 틈이 사라진 컷이 바구니에 담기는 모습을 보인다. "하진이가 정신을 못 차려서"라는 말에는 "다음 영상을 누른 건 하진이일까요, 화면일까요?"라고 되묻는다. 오늘은 사람을 탓하기보다 화면이 어떻게 설계되었는지 따져 본다고 밝힌다.',
          student: '가상 인물 하진이의 버스 네 컷을 보고, 멈출 틈이 사라진 컷을 골라요. 그 컷에서 하진이를 붙잡은 것이 무엇인지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '멈출 틈이 사라진 컷', title: '하진이의 버스 40분(가상 장면)', cards: [
            { id: 'c1', text: '버스에 앉아 짧은 영상 하나를 연다', motif: 'sun' }, { id: 'c2', text: '끝나자 다음 영상이 저절로 시작된다', motif: 'star' },
            { id: 'c3', text: '아래로 넘겨도 끝이 나오지 않는다', motif: 'cloud' }, { id: 'c4', text: '고개를 드니 정류장을 지나 40분이 흘렀다', motif: 'moon' }], shuffle: false },
            sequence: [{ pick: ['c2', 'c3'] }] },
          art: { draw: 'a paper-cut city bus interior with a teenager bent over a phone whose screen spills an endless paper strip of video frames down to the floor, a missed bus stop sign passing by the window', banner: '누가 다음 영상을 눌렀을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '하진이와 장면은 가상이다. 특정 앱 이름을 쓰지 않는다.',
      }),
      M('intro.badge-count', {
        title: '빨간 숫자 배지 가상 실험', method: '빨간 숫자 배지 실험', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 값이 보이고, 두 막대 가운데 앱을 더 많이 연 날을 고른다.', base: '값 없이 눈금을 읽어 두 날의 차이(13번)를 계산해 말한다(교사 발문).', challenge: '하루씩만 잰 이 자료로 단정할 수 없는 점을 짝과 말한다.' },
        intro: {
          teacher: '"앱 그림 위에 빨간 숫자가 붙어 있으면 손이 더 갈까요?" 가상 인물 로아가 배지를 켠 날과 끈 날 앱을 연 횟수를 잰 막대그래프(지어낸 자료)를 띄우고, 시연 단추로 더 많이 연 날을 고르는 모습을 보인다. "숫자는 그냥 알려 주는 것뿐"이라는 학생에게 "알려 주기만 한다면 왜 굳이 빨간색일까요?"라고 되묻는다. 하루씩 잰 가상 자료라서 이것만으로 단정할 수 없다는 점도 함께 짚는다.',
          student: '가상 인물 로아가 배지를 켠 날과 끈 날 앱을 연 횟수를 견주어 보고, 차이가 왜 생겼을지 생각해요.',
          demo: { tool: 'chart', options: CH('bar', '로아가 앱을 연 횟수(가상 실험)', '번', BADGE, { xLabel: '날', yLabel: '연 횟수', max: 30, scale: 5, question: '앱을 더 많이 연 날은?', choices: ['배지 켠 날', '배지 끈 날'] }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut phone home screen with app tiles, one tile wearing a bright red paper badge with a number, a hand reaching toward it while another tile without a badge sits quietly', banner: '빨간 숫자가 손을 부를까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '배지 실험 값은 가상이다(사람 확인 목록).',
      }),

      // ---- 활동 ----
      M('activity.design-sort', {
        title: '설계 장치와 효과 나누기', method: '설계 장치와 효과 짝 짓기', tool: 'sortboard', minutes: 15,
        levels: { easy: '장치 카드 3장을 두 바구니에 나누고(틀리면 까닭을 말하고 되돌아옴), 맞설 설정도 장치 셋에 하나씩 붙인다.', base: '장치 카드 6장과 함정 카드 1장이 섞인 판에서 나누고, 맞설 설정 카드 6장을 장치 바구니에 붙인다.', challenge: '새 장치 카드 2장이 더해진 판에서 나누고, 마지막 문항에서 새 장치에 맞설 설정을 찾는다.' },
        activity: {
          title: '설계 장치와 효과 나누기', tool: 'sortboard',
          teacher: '"\'다음 화 5초 뒤 시작\'은 나를 다시 오게 할까요, 멈출 틈을 없앨까요?" 장치 카드를 바구니에 넣을 때마다 그 장치가 노리는 것을 한 문장으로 말하게 한다. "추천 목록은 내가 좋아하는 것만 공정하게 보여 준다"는 학생에게 "오래 본 것과 비슷한 것을 더 보여 준다면, 그건 내가 고른 걸까요 화면이 고른 걸까요?"라고 되묻는다. 이어서 장치마다 맞설 설정을 붙이며, 장치를 알면 설정으로 맞설 수 있다는 점을 짚는다.',
          task: '화면 설계 장치 카드를 \'멈출 틈을 없앰·다시 오게 함\' 바구니에 나누고, 장치마다 맞설 설정 카드를 붙여요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('화면 장치 카드를 두 바구니에 나누세요(장치가 아닌 카드는 남겨요).', GRIP, DEV),
              BB('화면 장치 카드 3장을 두 바구니에 나누세요.', GRIP, pickCards(DEV, ['d1', 'd3', 'd4'])),
              { prompt: '새 장치 카드까지 더해 두 바구니에 나누세요(장치가 아닌 카드는 남겨요).', toolOptions: { more: MORE_DEV.map((c) => ({ id: c.id, text: c.text })) }, target: { sort: { '멈출 틈을 없앰': ['d1', 'd2', 'd5', 'd8'], '다시 오게 함': ['d3', 'd4', 'd6', 'd7'] } } }),
            IT(BB('장치마다 맞설 설정 카드를 알맞은 바구니에 붙이세요.', FIXS, FIX),
              BB('장치 셋에 맞설 설정 카드를 하나씩 붙이세요.', FIXS, pickCards(FIX, ['a1', 'b1', 'c1']))),
            IT(BB('새 장치 두 개에 맞설 설정을 알맞은 바구니에 넣으세요.', ['"놓친 소식" 띠', '줄줄이 비슷한 영상'], [
              { id: 'n1', text: '정한 시각에만 소식을 몰아 본다', to: '"놓친 소식" 띠' }, { id: 'n2', text: '보고 싶은 것을 검색해서 찾아본다', to: '줄줄이 비슷한 영상' },
              { id: 'n3', text: '소식 알림을 꺼 둔다', to: '"놓친 소식" 띠' }, { id: 'n4', text: '관심 없는 영상에 "관심 없음"을 누른다', to: '줄줄이 비슷한 영상' },
              { id: 'n5', text: '띠가 뜨면 바로 누른다' }]),
              BB('새 장치 두 개에 맞설 설정 카드를 하나씩 넣으세요.', ['"놓친 소식" 띠', '줄줄이 비슷한 영상'], [
                { id: 'n1', text: '정한 시각에만 소식을 몰아 본다', to: '"놓친 소식" 띠' }, { id: 'n2', text: '보고 싶은 것을 검색해서 찾아본다', to: '줄줄이 비슷한 영상' }]),
              null, { conclude: '장치는 \'멈출 틈을 없애거나\' \'다시 오게\' 해요. 장치 이름을 알면 맞설 설정도 고를 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장치마다 노리는 것과 맞설 설정을 써요.', columns: ['장치', '노리는 것', '맞설 설정'], cells: [['자동 재생', '', ''], ['빨간 숫자 배지', '', ''], ['연속 출석 보상', '', '']], answer: '멈출 틈을 없앰·자동 재생 끄기, 다시 오게 함·배지 표시 끄기, 다시 오게 함·보상에 끌려 들어가지 않기로 정하기' }],
          easy: [{ type: 'choice', prompt: '\'멈출 틈을 없애는\' 장치에 ○ 해요.', options: ['다음 영상 자동 재생', '글자 크기 단추'], answer: '다음 영상 자동 재생' }] },
      }),
      M('activity.recommend-loop', {
        title: '추천 흐름 길과 멈춤 길 짜기', method: '추천 알고리즘 흐름 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '작은 판에서 "본 영상 → 비슷한 영상 → 더 오래 봄" 별 셋을 지나는 길 하나만 짠다.', base: '추천 고리 길을 짠 뒤, 별을 피해 "멈춤" 깃발에 닿는 다른 길도 짜고, 짜 놓은 길을 따라가 멈출 칸을 고른다.', challenge: '멈춤 길을 반복 블록을 써서 블록 8개 이하로 짠다.' },
        activity: {
          title: '추천 흐름 길과 멈춤 길 짜기', tool: 'block-coding',
          teacher: '"추천 목록은 어떤 차례로 나를 더 오래 머물게 할까요?" 첫 판에서 별 세 칸을 \'본 영상 → 비슷한 영상 → 더 오래 봄\'이라고 읽어 주고 그 길을 블록으로 짜게 한다. "추천은 내 취향만 알아서 보여 주는 고마운 기능"이라는 학생에게 "더 오래 본 것을 또 보여 준다면, 이 길의 끝은 어디일까요?"라고 되묻는다. 둘째 판에서 별(추천)을 피해 \'멈춤\' 깃발로 가는 길을 짜며, 추천 고리 밖으로 나가는 길도 짤 수 있다는 점을 짚는다.',
          task: '거북이가 추천 고리(본 영상 → 비슷한 영상 → 더 오래 봄)를 지나는 길과, 고리를 피해 \'멈춤\' 칸에 닿는 길을 블록으로 짜요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '별 셋(①본 영상 ②비슷한 영상 ③더 오래 봄)을 차례로 지나 깃발(④다음 추천)에 닿게 하세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 2], [2, 2], [3, 2]], rocks: [[1, 1]] }, target: { reach: true, stars: true }, difficulty: 0.25 },
              { prompt: '별 셋(①본 영상 ②비슷한 영상 ③더 오래 봄)을 지나 깃발(④다음 추천)에 닿게 하세요(작은 판).', toolOptions: { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 1], [2, 1], [3, 1]], rocks: [] }, target: { reach: true, stars: true } }),
            IT({ prompt: '이번엔 바위(자동 재생·무한 스크롤)를 피해 깃발(멈춤)에 닿는 길을 짜세요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 3], [2, 2], [2, 1]], stars: [] }, target: { reach: true }, difficulty: 0.35 },
              null,
              { prompt: '바위(자동 재생·무한 스크롤)를 피해 깃발(멈춤)에 닿는 길을 블록 8개 이하로 짜세요(반복 블록을 써 봐요).', target: { reach: true, maxBlocks: 8 } }),
            IT({ prompt: '친구가 짠 순서예요: 왼쪽으로 돌기 → 앞으로 2칸 → 오른쪽으로 돌기 → 앞으로 1칸. 거북이가 멈출 칸을 고르세요.', toolOptions: { mode: 'trace', program: ['left', 'fwd', 'fwd', 'right', 'fwd'], cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 3], [2, 2], [2, 1]] }, target: { end: { x: 1, y: 1 } }, difficulty: 0.3,
              conclude: '추천 고리는 \'본 것 → 비슷한 것 → 더 오래\'로 이어져요. 고리 밖으로 나가는 길(멈춤)은 내가 미리 짜 두어야 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 실제 화면 흐름으로 옮겨 써요.', columns: ['칸', '화면에서 일어나는 일', '내가 끊을 방법'], cells: [['본 영상', '', ''], ['비슷한 영상', '', ''], ['더 오래 봄', '', '']], answer: '(예) 한 편 보기—볼 개수 정하기, 옆에 비슷한 영상—검색해서 찾기, 시간이 늘어남—시간 알림' }],
          easy: [{ type: 'choice', prompt: '추천 고리를 끊는 방법에 ○ 해요.', options: ['보고 싶은 것을 검색해서 찾아보기', '옆에 뜬 영상을 계속 누르기'], answer: '보고 싶은 것을 검색해서 찾아보기' }] },
        notes: '블록 판의 별·바위·깃발에는 글자가 없어 교사가 칸 이름(본 영상·비슷한 영상·더 오래 봄·멈춤)을 읽어 준다.',
      }),
      M('activity.setting-dilemma', {
        title: '설정 바꾸기 갈림길', method: '설정 바꾸기 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 골라 결과를 본다(근거 고르기 없음).', base: '갈림길 3번을 끝까지 가 일주일 뒤 장면을 보고 근거 카드를 고른다.', challenge: '다른 길도 끝까지 가 보고(끝 장면 둘 이상) 견준 뒤, 늘어난 근거 카드에서 고른다.' },
        activity: {
          title: '설정 바꾸기 갈림길', tool: 'dilemma',
          teacher: '"자동 재생을 끄면 불편해요. 그 불편함은 손해일까요, 멈출 틈일까요?" 가상 인물 로아·하진이의 고민 상황에서 설정 선택을 이어 가며 일주일 뒤 장면까지 따라가게 한다. "앱을 아예 지우면 되잖아요"라는 학생에게 "레시피나 학급 공지처럼 꼭 필요한 쓰임은 어떻게 될까요?"라고 되묻는다. 끝 장면에서 근거를 고를 때 다짐과 설정 가운데 무엇이 일주일을 바꿨는지 견주게 한다.',
          task: '설정을 바꿀지 고민하는 가상 인물의 길을 골라 일주일 뒤까지 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '로아가 자동 재생을 끌지 고민해요. 두 번 골라 결과를 보세요.', base: '로아가 자동 재생을 끌지 고민해요. 세 번 골라 일주일 뒤까지 가고 근거를 고르세요.', challenge: '로아의 길을 둘 이상 끝까지 가 보고 견준 뒤 근거를 고르세요.' },
              '자동 재생을 끌까?', AUTO, [['off', 'keep', 'share'], ['keepon', 'try']], AUTO_R, ['r1', 'r2'], MORE),
            DIL({ easy: '하진이가 알림을 정리할지 고민해요. 두 번 골라 결과를 보세요.', base: '하진이가 알림을 정리할지 고민해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '하진이의 길을 둘 이상 끝까지 가 보고 견준 뒤 근거를 고르세요.' },
              '알림을 정리할까?', NOTI, [['sort', 'check', 'tell'], ['all', 'fix']], NOTI_R, ['r1', 'r2'], MORE),
            { prompt: '로아와 하진이의 길에서 \'다짐만 한 길\'과 \'설정을 바꾼 길\'의 일주일 뒤를 짝과 견주어 말해요.', free: true, toolOptions: { title: '자동 재생을 끌까?', scene: cut(AUTO, 3), reasons: [], compare: true },
              conclude: '설계 장치에는 다짐보다 설정으로 맞서요. 조금 불편한 것이 멈출 틈이 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '로아나 하진이의 길에서 일주일 뒤를 바꾼 선택 하나와 그 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '장치에 맞서는 방법으로 더 오래 가는 것에 ○ 해요.', options: ['자동 재생 끄기 같은 설정 바꾸기', '"조심하자"는 다짐만 하기'], answer: '자동 재생 끄기 같은 설정 바꾸기' }] },
      }),
      M('activity.my-setting', {
        title: '해 볼 맞설 설정 고르기', method: '나의 맞설 설정 목록', tool: 'kitchen', minutes: 15,
        levels: { easy: '맞설 설정 4개와 함정 2개가 섞인 점검표에서 맞설 설정만 고르고, 내가 해 볼 설정은 두 개쯤 스스로 고른다.', base: '맞설 설정을 고른 뒤 설정 바꾸기 네 단계를 차례로 놓고, 내가 해 볼 설정을 네 개까지 스스로 고른다.', challenge: '마지막 점검표에 \'가족과 함께 바꿀 설정\' 칸이 더해져 함께 고른다.' },
        activity: {
          title: '해 볼 맞설 설정 고르기', tool: 'kitchen',
          teacher: '"오늘 배운 장치 가운데 나를 가장 많이 붙잡는 것은 무엇이고, 거기에 맞설 설정은 무엇일까요?" 점검표에서 맞설 설정만 고르게 한 뒤, 바꾸는 차례(찾기 → 고르기 → 일주일 해 보기 → 고치기)를 놓게 한다. "한꺼번에 다 끄면 되죠"라는 학생에게 "다 끄고 사흘 만에 다 켜는 것과, 하나 끄고 일주일 지키는 것 가운데 어느 쪽이 남을까요?"라고 되묻는다. 내가 해 볼 설정 목록은 걷지 않는다.',
          task: '점검표에서 화면 장치에 맞서는 설정만 고르고, 설정 바꾸기 차례를 정한 뒤, 내가 해 볼 설정을 스스로 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('화면 장치에 맞서는 설정만 표시하세요(함정이 섞여 있어요).', '맞설 설정 고르기', SET)),
            IT(OB('설정 바꾸기 네 단계를 차례로 놓으세요.', ORDER, { autoMotif: false }),
              OB('설정 바꾸기 세 단계를 차례로 놓으세요.', ORDER.slice(0, 3), { autoMotif: false })),
            IT({ prompt: '내가 해 볼 설정을 두세 개 골라 표시하세요(정답은 없어요).', toolOptions: { mode: 'checklist', title: '내가 해 볼 설정', items: SET.slice(0, 4).map((s) => ({ id: s.id, text: s.text })).concat([{ id: 's7', text: '잠자기 전 방해 금지 시간 정하기' }]) }, target: { selfCheck: true }, difficulty: 0.1 },
              null,
              { prompt: '내가 해 볼 설정과 가족과 함께 바꿀 설정을 골라 표시하세요(정답은 없어요).', toolOptions: { items: SET.slice(0, 4).map((s) => ({ id: s.id, text: s.text })).concat([{ id: 's7', text: '잠자기 전 방해 금지 시간 정하기' }, { id: 's8', text: '가족: 저녁 식탁엔 폰 두지 않기' }, { id: 's9', text: '가족: 거실 충전 자리 함께 정하기' }]) } },
              { conclude: '한꺼번에 다 끄기보다 하나를 골라 일주일 지키고, 돌아본 뒤 고쳐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '(혼자 보기) 내가 해 볼 설정과 차례를 써요.', columns: ['차례', '설정', '언제부터'], cells: [['1', '', ''], ['2', '', '']], answer: '(예) 1 숫자 배지 끄기 — 오늘, 2 자동 재생 끄기 — 내일' }],
          easy: [{ type: 'choice', prompt: '화면 장치에 맞서는 설정에 ○ 해요.', options: ['숫자 배지 표시 끄기', '모든 알림 소리 키우기'], answer: '숫자 배지 표시 끄기' }] },
        notes: '설정 메뉴 이름은 기기마다 달라 일반 말로만 적었다. 내가 해 볼 설정은 맞고 틀림이 없는 스스로 점검이다.',
      }),

      // ---- 정리 ----
      M('wrap.explain-write', {
        title: '친구에게 장치 하나 설명하기', method: '친구에게 설명하는 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("___은 ___해서 시간을 끈다. ___로 맞설 수 있다.")을 채워 두 문장을 쓴다.', base: '장치 하나를 세 문장으로 설명하고 기준 3개(장치 이름·작동 방식·대처)를 점검한다.', challenge: '동생이 알아듣게 쉬운 말로 다시 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'알림이 나빠\'라고만 하면 친구가 알아들을까요? 무엇이 어떻게 붙잡는지 말해 주면 어떨까요?" 오늘 다룬 장치 하나를 골라 친구에게 설명하는 세 문장을 쓰게 한다. "장치를 만든 사람이 나쁘다"로만 쓰는 학생에게는 탓하는 말 대신 작동 방식과 맞설 방법을 쓰게 한다. 특정 앱 이름은 쓰지 않는다.',
          exitTicket: [
            RWX('장치 하나가 시간을 끄는 방식과 맞설 방법을 세 문장으로 쓰고 기준표에 표시해요.',
              { topic: '화면 장치 하나(알림 배지·자동 재생·무한 스크롤·연속 출석 보상·추천 목록 가운데)가 시간을 끄는 방식과 맞설 방법을 친구에게 설명하는 세 문장으로 쓰세요.', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 4, title: '친구에게 설명하기' },
              ['장치 이름을 썼다', '그 장치가 시간을 끄는 방식을 썼다', '맞설 설정이나 행동을 썼다'],
              { prompt: '문장 틀을 채워 두 문장을 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '___은 ___해서 시간을 끈다. ___로 맞설 수 있다.' }, crit: ['장치 이름을 썼다', '맞설 설정이나 행동을 썼다'] },
              { prompt: '동생이 알아듣게 쉬운 말로 다시 쓰고 기준표에 표시해요.', crit: ['장치 이름을 썼다', '그 장치가 시간을 끄는 방식을 썼다', '맞설 설정이나 행동을 썼다', '어려운 말 없이 쉬운 말로 썼다'] }),
            { type: 'choice', prompt: '"추천 목록은 내가 좋아하는 것만 공정하게 보여 준다"는 말에 대한 답으로 가장 알맞은 것은?', options: ['맞다, 내 취향만 보여 준다', '오래 본 것과 비슷한 것을 더 보여 줘 더 머물게 할 수 있다', '추천은 무작위로 정해진다'], answer: 1, difficulty: 0.2, explain: '추천 목록은 내가 더 오래 머물 만한 것을 골라 보여 줄 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '화면 장치 설명하기',
          items: [
            { type: 'short', prompt: '장치 하나를 골라 시간을 끄는 방식과 맞설 방법을 써요.' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['장치 이름', '작동 방식', '맞설 방법'] },
          ],
          easy: { note: '"___은 ___해서 시간을 끈다." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워요.', text: '___은 ___해서 시간을 끈다. ___로 맞설 수 있다.', answer: '(예) 자동 재생, 다음 영상을 저절로 틀어, 자동 재생 끄기' }] },
        },
      }),
      M('wrap.campaign-line', {
        title: '"화면이 나를 붙잡을 때" 포스터', method: '한 줄 캠페인 문구', tool: 'collage', minutes: 7,
        levels: { easy: '조각 몇 가지(동그라미·네모·별)로 배지·끄기 표시를 꾸미고 문구는 활동지에 쓴다.', base: '문구 자리를 남긴 포스터를 조각 넷 이상으로 꾸미고 세 항목을 점검한다.', challenge: '반 친구 의견을 듣고 고친 점까지 점검한다(점검 항목이 하나 더해짐).' },
        wrap: {
          teacher: '"\'폰 그만 봐!\'와 \'다음 영상이 저절로 뜨면, 끄기를 눌러 봐\' 가운데 어느 문구가 행동을 바꿀까요?" 활동지에 한 줄 문구를 먼저 쓰고, 조각으로 배지와 끄기 표시를 꾸민 작은 포스터를 만들게 한다. 겁주는 문구를 쓰는 학생에게 "보는 사람이 바로 해 볼 수 있는 행동이 들어 있나요?"라고 묻는다. 실제 앱 그림이나 이름은 넣지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, prompt: '"화면이 나를 붙잡을 때" 포스터를 조각으로 꾸미고 점검하세요(문구는 활동지에 써요).', target: { selfCheck: ['장치(배지·자동 재생 등)를 나타냈다', '끄기·멈춤을 나타냈다', '문구 자리를 남겼다'], minPieces: 4 }, difficulty: 0.2 },
              { prompt: '배지와 끄기 표시를 조각으로 꾸미고 점검하세요(조각 몇 가지만).', toolOptions: { shapes: ['circle', 'square', 'star'] }, target: { selfCheck: ['장치(배지·자동 재생 등)를 나타냈다', '끄기·멈춤을 나타냈다'], minPieces: 2 } },
              { prompt: '친구 의견을 듣고 포스터를 고친 뒤 점검하세요.', target: { selfCheck: ['장치(배지·자동 재생 등)를 나타냈다', '끄기·멈춤을 나타냈다', '문구 자리를 남겼다', '친구 의견으로 고친 곳이 있다'], minPieces: 4 } }),
            { type: 'choice', prompt: '캠페인 문구로 가장 알맞은 것은?', options: ['"폰 보면 큰일 나!"', '"다음 영상이 저절로 뜨면, 끄기를 눌러 봐"', '"폰은 나빠"'], answer: 1, difficulty: 0.15, explain: '겁주는 말보다 바로 해 볼 행동을 알려 주는 문구가 행동을 바꿔요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '화면이 나를 붙잡을 때',
          items: [
            { type: 'short', prompt: '포스터에 넣을 한 줄 캠페인 문구를 써요(바로 해 볼 행동이 들어가게).' },
            { type: 'short', prompt: '친구에게 들은 의견과 고친 점을 한 줄 써요.' },
          ],
          easy: { note: '"___이 뜨면, ___를 눌러 봐" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 문구를 써요.', text: '___이 뜨면, ___를 눌러 봐.', answer: '(예) 빨간 숫자, 배지 끄기' }] },
        },
        notes: '조각 교구는 글자를 넣지 못해 문구는 활동지에 쓴다.',
      }),
    );
  }

  // ==== 8학년 · 잠과 공부에 남는 흔적 — 자료 읽기 (digital.m.sleep-study) ====
  // 가상 인물 은재·유나·다온. 그래프는 모두 가상 자료(실제 통계 아님)라고 화면에 밝힌다. '잠 8시간'·'30분 전 화면 끄기'는 가상 인물의 연습 계획 값.
  {
    const M = MK('sleep-study', [8]);
    const NIGHT = [{ id: 'n1', text: '밤 10시, "한 편만" 하고 드라마를 튼다', motif: 'moon' }, { id: 'n2', text: '끝나자 다음 편이 저절로 이어진다', motif: 'star' },
      { id: 'n3', text: '새벽 2시, 마지막 편이 끝난다', motif: 'cloud' }, { id: 'n4', text: '다음 날 3교시, 수업 중에 꾸벅 존다', motif: 'sun' }];
    // 가상 학급 자료: 잠들기 전 사용 시간 무리별 평균 수면 시간(시간)
    const LINE = [['0분', 8], ['30분', 8], ['60분', 7], ['90분', 7], ['120분', 6]];
    const LOPT = { xLabel: '잠들기 전 사용 시간', yLabel: '수면 시간', from: 5, max: 9, scale: 1 };
    const LT = '잠들기 전 사용 시간과 수면 시간(가상 자료 — 실제 통계 아님)';
    // 시험 전날 밤 11시 게임 초대 — 가상 인물 은재
    const INV = { text: '내일 1교시 영어 시험. 밤 11시, 은재가 막 정리를 끝냈는데 친구가 "딱 한 판만 같이 하자!" 하고 부른다.', ask: '은재는 어떻게 할까?', motif: 'moon', choices: [
      { id: 'no', text: '"시험 끝나고 하자" 하고 거절한다', result: '친구가 "그래, 내일 하자"고 한다.', impact: [{ who: '은재', text: '잘 시간을 지킨다', tone: 1 }], end: '거절했어요.',
        next: { text: '누웠는데 친구들이 게임하는 단체방 알림이 계속 울린다.', choices: [
          { id: 'away', text: '알림을 끄고 폰을 거실 충전기에 둔다', result: '조용한 방에서 곧 잠든다.', impact: [{ who: '은재', text: '7시간 넘게 잔다', tone: 1 }], end: '폰을 거실에 두고 잤어요.',
            next: { text: '다음 날 아침, 친구가 "어제 너 없어서 졌잖아" 하고 투덜댄다.', choices: [
              { id: 'plan', text: '"오늘 시험 끝나고 같이 하자"며 시각을 정한다', result: '친구가 웃으며 좋다고 한다.', impact: [{ who: '친구', text: '서운함이 풀린다', tone: 1 }] },
              { id: 'sorry', text: '미안해서 "오늘 밤엔 새벽까지 같이 하자"고 한다', result: '오늘 밤 잠이 줄어들 약속을 한다.', impact: [{ who: '은재', text: '다음 날이 또 걱정된다', tone: -1 }], why: '서운함은 다른 시각을 정해 풀 수 있어요. 잠을 대신 내주지 않아요.' }] } },
          { id: 'peek', text: '"뭐 하나만 보자" 하고 단체방을 연다', result: '대화에 끼어 1시까지 답장한다.', impact: [{ who: '은재', text: '잠이 줄어든다', tone: -1 }], why: '잠자리에 폰이 있으면 거절한 뒤에도 끌려 들어가기 쉬워요.' }] } },
      { id: 'one', text: '"딱 한 판만" 하기로 한다', result: '한 판이 끝나자 친구가 "한 판만 더"를 외친다.', impact: [{ who: '은재', text: '12시가 넘는다', tone: -1 }], why: '밤늦은 "한 판만"은 멈출 신호가 없으면 길어지기 쉬워요.', end: '한 판을 시작했어요.',
        next: { text: '12시 반. 친구가 또 "진짜 마지막 한 판"이라고 한다.', choices: [
          { id: 'stop', text: '"나 내일 시험이라 여기까지" 하고 나간다', result: '12시 40분에 눕는다.', impact: [{ who: '은재', text: '늦었지만 더 줄지는 않는다', tone: 1 }], end: '늦게라도 멈췄어요.',
            next: { text: '눕자 아까 판의 장면이 떠오르고 잠이 안 온다.', choices: [
              { id: 'dark', text: '폰을 거실에 두고 불을 끈 채 숨을 고른다', result: '1시쯤 잠든다.', impact: [{ who: '은재', text: '6시간쯤 잔다', tone: 0 }] },
              { id: 'video', text: '잠이 올 때까지 영상을 본다', result: '2시가 넘어 잠든다.', impact: [{ who: '은재', text: '시험 시간에 졸린다', tone: -1 }], why: '잠이 안 올 때 화면을 보면 잠드는 시각이 더 늦어질 수 있어요.' }] } },
          { id: 'more', text: '계속 같이 한다', result: '새벽 2시에 끝난다.', impact: [{ who: '은재', text: '시험 문제를 읽다 존다', tone: -1 }], why: '잠을 줄인 결과는 다음 날 시험 시간에 나타나요.' }] } },
      { id: 'lie', text: '"10분만" 하고 침대에 누워 친구 방송을 본다', result: '보다 보니 1시가 된다.', impact: [{ who: '은재', text: '시험 날 아침 늦잠을 잔다', tone: -1 }], why: '누워서 조금 보는 것도 잠드는 시각을 늦출 수 있어요.', ending: '누워서 보다 늦게 잤어요. "누워서 조금"도 잠에 영향을 줄 수 있어요.' }] };
    const INV_R = [{ id: 'r1', text: '잠자리에서 폰을 멀리 두면 거절한 뒤에도 잠을 지킨다' }, { id: 'r2', text: '친구와의 약속은 다른 시각으로 바꿔 정할 수 있다' },
      { id: 'r3', text: '누워서 조금 보는 것은 잠에 아무 영향이 없다', why: '누워서 보는 화면도 잠드는 시각을 늦출 수 있어요.' }, { id: 'r4', text: '친구가 부르면 시험 전날이라도 꼭 가야 한다', why: '거절하고 다른 시각을 정해도 관계는 지킬 수 있어요.' }];
    // 발표 전날 영상 링크 — 가상 인물 유나
    const LINK = { text: '내일 1교시에 유나의 모둠 발표가 있다. 밤 10시 30분, 침대에 누웠는데 친구가 "이거 완전 웃겨" 하며 영상 링크를 보낸다.', ask: '유나는 어떻게 할까?', motif: 'star', choices: [
      { id: 'save', text: '"내일 볼게" 하고 링크를 저장만 한다', result: '폰을 엎어 두고 눈을 감는다.', impact: [{ who: '유나', text: '제때 잠든다', tone: 1 }], end: '저장만 했어요.',
        next: { text: '5분 뒤, 친구가 "빨리 봐 봐!" 하고 또 보낸다.', choices: [
          { id: 'mute', text: '방해 금지를 켜고 폰을 책상 위에 둔다', result: '더는 울리지 않는다.', impact: [{ who: '유나', text: '푹 잔다', tone: 1 }], end: '방해 금지를 켰어요.',
            next: { text: '다음 날 아침, 발표 자료를 한 번 더 볼 시간이 생겼다.', choices: [
              { id: 'review', text: '자료를 훑고 발표 순서를 확인한다', result: '발표를 막힘없이 마친다.', impact: [{ who: '모둠', text: '발표가 잘 끝난다', tone: 1 }] },
              { id: 'watch', text: '어제 링크부터 연다', result: '등굣길까지 영상을 넘긴다.', impact: [{ who: '유나', text: '자료를 다시 못 본다', tone: -1 }], why: '아침에 남은 시간도 할 일부터 쓰면 하루가 덜 흔들려요.' }] } },
          { id: 'open', text: '"하나만" 하고 링크를 연다', result: '관련 영상이 줄줄이 이어진다.', impact: [{ who: '유나', text: '12시가 넘는다', tone: -1 }], why: '잠자리에서 연 영상은 추천으로 이어지기 쉬워요.' }] } },
      { id: 'watchnow', text: '바로 열어서 본다', result: '웃다가 잠이 깨고 다른 영상으로 넘어간다.', impact: [{ who: '유나', text: '잠이 달아난다', tone: -1 }], why: '밝은 화면과 재미있는 영상은 잠드는 시각을 늦출 수 있어요.', end: '바로 열었어요.',
        next: { text: '12시. 내일 발표가 떠오른다.', choices: [
          { id: 'close', text: '폰을 거실에 두고 바로 눕는다', result: '조금 늦었지만 잠든다.', impact: [{ who: '유나', text: '6시간쯤 잔다', tone: 0 }] },
          { id: 'keep', text: '"어차피 늦었으니" 하고 계속 본다', result: '2시에 잠든다.', impact: [{ who: '유나', text: '발표 중에 말이 막힌다', tone: -1 }], why: '늦었다고 포기하면 잠이 더 줄어요. 지금 멈추는 것도 이득이에요.' }] } },
      { id: 'reply', text: '영상은 안 보고 친구와 수다를 시작한다', result: '수다가 1시까지 이어진다.', impact: [{ who: '유나', text: '발표 날 아침 눈이 무겁다', tone: -1 }], why: '영상을 안 봐도 잠자리에서 화면을 쓰면 잠은 줄어들어요.', ending: '수다로 잠이 줄었어요. 잠자리에서는 폰을 멀리 두는 길도 있었어요.' }] };
    const LINK_R = [{ id: 'r1', text: '잠자리에서 연 화면은 다음 화면으로 이어지기 쉽다' }, { id: 'r2', text: '늦었더라도 지금 멈추면 잠을 조금이라도 지킨다' },
      { id: 'r3', text: '영상만 안 보면 잠자리에서 폰을 써도 괜찮다', why: '대화도 화면이에요. 잠드는 시각을 늦출 수 있어요.' }, { id: 'r4', text: '이미 늦었으면 끝까지 보는 게 낫다', why: '지금 멈추면 남은 잠을 지킬 수 있어요.' }];
    const MORE = { reasons: [{ id: 'r5', text: '다른 길과 견주면 다음 날 결과가 갈린 장면이 보인다' }], ok: ['r5'] };
    const ROUT = [{ id: 'a', text: '알림 끄기' }, { id: 'b', text: '충전기를 거실에 두고 폰 놓기' }, { id: 'c', text: '내일 준비물 챙기기' }, { id: 'd', text: '불 끄고 눕기' }];
    const ROUT_TRAP = [{ id: 't', text: '누워서 마지막 영상 보기' }];
    const ROUT_OK = [
      { id: 'k1', text: '잠들기 30분 전 알림 끄기', ok: true }, { id: 'k2', text: '충전기를 거실에 두기', ok: true }, { id: 'k3', text: '내일 준비물 챙기기', ok: true },
      { id: 'k4', text: '불 끄고 눕기', ok: true }, { id: 'k5', text: '잠이 올 때까지 영상 보기' }, { id: 'k6', text: '알림 소리를 크게 켜 두기' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.night-scene', {
        title: '"한 편만"에서 꾸벅까지', method: '자정의 화면 장면', tool: 'story', minutes: 6,
        levels: { easy: '컷 3장(시작·새벽·다음 날)을 차례로 놓는 시연을 함께 따라 말한다.', base: '컷 4장을 차례로 놓는 시연을 보고 컷마다 무슨 일이 있었는지 말한다.', challenge: '어느 컷에서 바꿀 수 있었는지 고르고 그 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"은재는 \'한 편만\' 볼 생각이었어요. 다음 날 3교시에 왜 졸았을까요?" 가상 인물 은재의 네 컷을 차례로 놓는 시연을 보이고, 컷마다 시각을 소리 내어 읽는다. "주말에 몰아 자면 된다"는 학생에게 "3교시 수업은 주말까지 기다려 줄까요?"라고 되묻는다. 오늘은 잠들기 전 화면과 잠·집중의 관계를 가상 자료로 읽어 보고, 자료로 말할 수 있는 것과 없는 것을 가린다고 밝힌다.',
          student: '가상 인물 은재의 밤과 다음 날 네 컷을 차례로 떠올려 보고, 어느 컷에서 바꿀 수 있었을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '은재의 밤과 다음 날(가상 장면)', cards: NIGHT }, sequence: [{ order: ['n1', 'n2', 'n3', 'n4'] }] },
          art: { draw: 'a paper-cut bedroom at night lit by a glowing phone, a paper clock on the wall moving from ten to two, and next to it a classroom scene with the same teenager dozing over a desk in daylight', banner: '"한 편만"은 어디까지 갔을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '은재와 장면은 가상이다. 학생에게 어젯밤 몇 시에 잤는지 묻지 않는다.',
      }),
      M('intro.guess-first', {
        title: '그래프 보기 전에 예상하기', method: '그래프 보기 전 예상하기', tool: 'wordcards', minutes: 6,
        levels: { easy: '예상 카드 하나를 고르는 시연을 보고 손을 들어 예상만 나눈다.', base: '예상 카드와 까닭 카드를 하나씩 잇는 시연을 보고 내 예상과 까닭을 짝과 말한다.', challenge: '내 예상이 틀릴 수 있는 까닭을 활동지에 한 줄 쓴다.' },
        intro: {
          teacher: '"잠들기 전 화면을 보는 시간이 늘면, 잠자는 시간은 어떻게 될까요?" 그래프를 보이기 전에 예상 카드와 까닭 카드를 띄우고, 시연 단추로 예상 하나와 까닭 하나가 이어지는 모습을 보인다. "아무 영향 없다"고 예상한 학생도 그대로 두고 "그래프를 본 뒤 다시 확인해 봐요"라고 말한다. 예상은 맞히기가 아니라 자료를 볼 때 무엇을 확인할지 정하는 일이라는 점을 짚는다.',
          student: '그래프를 보기 전에, 잠들기 전 사용이 늘면 수면 시간이 어떻게 될지 예상하고 그렇게 생각한 까닭을 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'p', label: '내 예상' }, { id: 'q', label: '그렇게 본 까닭' }], cards: [
            { id: 'down', text: '수면 시간이 줄어든다' }, { id: 'up', text: '수면 시간이 늘어난다' }, { id: 'same', text: '아무 상관이 없다' },
            { id: 'late', text: '보다 보면 잠드는 시각이 늦어지니까' }, { id: 'tired', text: '화면을 보면 피곤해서 빨리 잠드니까' }] },
            sequence: [{ match: { p: 'down', q: 'late' } }] },
          art: { draw: 'a paper-cut blank graph paper pinned on a board with a question mark where the line should be, students holding paper prediction cards in front of it', banner: '그래프는 어떻게 그려질까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '예상에는 맞고 틀림이 없다. 이 낱말 카드 판은 영어 발음을 내지 않는 짝 짓기 판이다.',
      }),

      // ---- 활동 ----
      M('activity.line-read', {
        title: '가상 자료 꺾은선 해석하기', method: '가상 자료 꺾은선 해석', tool: 'chart', minutes: 15,
        levels: { easy: '점에 값이 보이고, 두 점(0분·120분)을 견주는 문항부터 푼다.', base: '값 없이 눈금을 읽어 두 점의 차이·경향 문장·처음 줄어든 구간을 고른다.', challenge: '마지막 문항에서 이 자료로 원인이라 단정할 수 없는 까닭을 고르고 활동지에 쓴다.' },
        activity: {
          title: '가상 자료 꺾은선 해석하기', tool: 'chart',
          teacher: '"이 꺾은선은 오른쪽으로 갈수록 어떻게 변하나요? 그 변화를 한 문장으로 말해 볼까요?" 가상 학급 자료(실제 통계 아님)의 꺾은선을 띄우고, 가로축이 시간 차례가 아니라 \'잠들기 전 사용 시간\' 무리라는 점을 먼저 짚는다. "그러니까 화면 때문에 잠이 줄어든 거네요"라는 학생에게 "120분 무리에는 학원이나 숙제로 늦게 자는 사람이 섞여 있을 수도 있지 않을까요?"라고 되묻는다. 경향과 원인을 나눠 말하는 연습을 한다.',
          task: '가상 자료 꺾은선그래프에서 잠들기 전 사용 시간과 수면 시간의 경향을 읽고, 자료로 말할 수 있는 것과 없는 것을 가려요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '0분 무리와 120분 무리의 수면 시간은 몇 시간 차이 나는지 읽어 쓰세요.', toolOptions: CH('line', LT, '시간', LINE, Object.assign({ question: '몇 시간 차이 나나요?' }, LOPT)), target: { value: 2 }, difficulty: 0.2 }),
            IT({ prompt: '그래프의 변화를 가장 잘 나타낸 문장을 고르세요.', toolOptions: CH('line', LT, '시간', LINE, Object.assign({ question: '경향을 나타낸 문장은?', choices: ['잠들기 전 사용이 늘수록 수면 시간이 줄어드는 경향이다', '잠들기 전 사용이 늘수록 수면 시간이 늘어나는 경향이다', '두 값은 함께 변하지 않는다'] }, LOPT)), target: { pick: 0 }, difficulty: 0.25 }),
            IT({ prompt: '수면 시간이 처음 줄어든 구간을 고르세요.', toolOptions: CH('line', LT, '시간', LINE, Object.assign({ question: '처음 줄어든 구간은?', choices: ['0분 → 30분', '30분 → 60분', '60분 → 90분'] }, LOPT)), target: { pick: 1 }, difficulty: 0.3 }),
            IT({ prompt: '이 자료만으로 "화면이 잠을 줄인 원인"이라고 단정할 수 없는 까닭을 고르세요.', toolOptions: CH('line', LT, '시간', LINE, Object.assign({ question: '단정할 수 없는 까닭은?', choices: ['늦게 자는 다른 까닭(학원·숙제)이 섞였을 수 있고, 가상 자료이다', '점이 다섯 개뿐이라서', '꺾은선그래프라서'] }, LOPT)), target: { pick: 0 }, difficulty: 0.35,
              conclude: '그래프는 \'함께 변하는 경향\'을 보여 줘요. 원인이라고 말하려면 다른 까닭을 가려낸 자료가 더 필요해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프가 보여 주는 경향을 한 문장, 원인이라 단정할 수 없는 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '그래프의 경향에 ○ 해요.', options: ['사용이 늘수록 수면이 줄어드는 경향', '사용이 늘수록 수면이 늘어나는 경향'], answer: '사용이 늘수록 수면이 줄어드는 경향' }] },
        notes: '꺾은선 값은 지어낸 가상 자료이고 화면 제목에 밝혀 둔다(실제 통계를 인용하지 않는다).',
      }),
      M('activity.bed-dilemma', {
        title: '잠자리 갈림길 따라가기', method: '잠자리 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 골라 결과를 본다(근거 고르기 없음).', base: '갈림길 3번을 끝까지 가 다음 날 장면을 보고 근거 카드를 고른다.', challenge: '다른 길도 끝까지 가 보고(끝 장면 둘 이상) 다음 날 결과를 견준 뒤, 늘어난 근거 카드에서 고른다.' },
        activity: {
          title: '잠자리 갈림길 따라가기', tool: 'dilemma',
          teacher: '"친구가 밤 11시에 \'한 판만\' 하자고 해요. 거절하면 친구 사이가 나빠질까요?" 가상 인물 은재·유나의 갈림길을 끝까지 따라가 다음 날 시험·발표 장면을 보게 한다. "누워서 조금 보는 건 괜찮다"는 학생에게 "유나가 누워서 연 영상 하나는 몇 시까지 이어졌나요?"라고 되묻는다. 거절한 뒤 다른 시각을 정하는 길이 관계와 잠을 함께 지킨다는 점을 끝에서 견주게 한다.',
          task: '잠자리 상황에서 가상 인물의 길을 골라 다음 날까지 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '시험 전날 밤 11시, 친구가 은재를 불러요. 두 번 골라 결과를 보세요.', base: '시험 전날 밤 11시, 친구가 은재를 불러요. 세 번 골라 다음 날까지 가고 근거를 고르세요.', challenge: '은재의 길을 둘 이상 끝까지 가 보고 다음 날을 견준 뒤 근거를 고르세요.' },
              '시험 전날 밤 11시', INV, [['no', 'away', 'plan'], ['one', 'stop', 'dark']], INV_R, ['r1', 'r2'], MORE),
            DIL({ easy: '발표 전날 밤, 유나에게 영상 링크가 와요. 두 번 골라 결과를 보세요.', base: '발표 전날 밤, 유나에게 영상 링크가 와요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '유나의 길을 둘 이상 끝까지 가 보고 다음 날을 견준 뒤 근거를 고르세요.' },
              '발표 전날 밤 10시 30분', LINK, [['save', 'mute', 'review'], ['watchnow', 'close']], LINK_R, ['r1', 'r2'], MORE),
            { prompt: '은재와 유나의 길에서 다음 날 결과가 갈린 장면을 짝과 견주어 말해요.', free: true, toolOptions: { title: '시험 전날 밤 11시', scene: cut(INV, 3), reasons: [], compare: true },
              conclude: '잠자리에서 폰을 멀리 두고, 친구와의 약속은 다른 시각으로 정하면 잠과 관계를 함께 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '은재나 유나가 잠을 지킨 길에서 가장 도움이 된 선택과 그 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '시험 전날 밤 친구가 게임을 하자고 할 때 알맞은 말에 ○ 해요.', options: ['"시험 끝나고 같이 하자"', '"딱 한 판만 하고 잘게"'], answer: '"시험 끝나고 같이 하자"' }] },
      }),
      M('activity.bed-routine', {
        title: '잠자리 정리 차례 놓기', method: '잠자리 정리 차례', tool: 'timeline', minutes: 15,
        levels: { easy: '잠자리 정리 카드 3장을 차례로 놓는다(놓으면 바로 맞는지 알려 줌).', base: '카드 4장과 함정 카드 1장이 섞인 판에서 4장을 차례로 놓고, 유나의 계획 글을 읽어 차례로 놓은 뒤 방해마다 대신할 행동을 잇는다.', challenge: '첫 문항에 방해가 생길 때 대신할 단계 카드가 더해져 5장을 차례로 놓는다.' },
        activity: {
          title: '잠자리 정리 차례 놓기', tool: 'timeline',
          teacher: '"불을 끄고 누운 다음에 알림을 끄면 어떤 일이 생길까요?" 카드를 놓을 때마다 왜 그 차례인지 말하게 한다. 알림을 먼저 끄고 폰을 거실에 두는 까닭(손에 쥐면 다시 켜게 된다)을 짚고, "폰을 손에 쥔 채 눕는 단계가 끼면 어떻게 될까요?"라고 물어 함정 카드를 가린다. 셋째 문항에서는 방해가 생겼을 때 대신할 행동을 미리 정해 두면 차례가 무너지지 않는다는 점을 짚는다.',
          task: '잠자리 정리 카드(알림 끄기·충전기 거실·내일 준비·불 끄기)를 차례로 놓고, 방해가 생길 때 대신할 행동을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '잠자리 정리 카드를 먼저 할 것부터 차례로 놓으세요(함정 카드는 남겨요).', toolOptions: { mode: 'order', slots: 4, axis: ['먼저', '나중'], cards: [...ROUT, ...ROUT_TRAP] }, target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.25 },
              { prompt: '잠자리 정리 카드 3장을 먼저 할 것부터 차례로 놓으세요.', toolOptions: { slots: 3, cards: [ROUT[0], ROUT[2], ROUT[3]] }, target: { order: ['a', 'c', 'd'] } },
              { prompt: '방해가 생길 때 대신할 단계까지 넣어 5장을 차례로 놓으세요(함정 카드는 남겨요).', toolOptions: { slots: 5, cards: [...ROUT, { id: 'e', text: '잠이 안 오면 화면 대신 종이책 읽기' }, ...ROUT_TRAP] }, target: { order: ['a', 'b', 'c', 'd', 'e'] } }),
            IT(OB('유나의 계획 글: "9시 반에 내일 가방을 싸고, 10시에 알림을 끈 뒤, 폰을 거실 충전기에 두고, 10시 반에 불을 끈다." 글대로 차례로 놓으세요.',
              [{ id: 'p1', text: '내일 가방 싸기' }, { id: 'p2', text: '알림 끄기' }, { id: 'p3', text: '폰을 거실 충전기에 두기' }, { id: 'p4', text: '불 끄기' }], { axis: ['9시 반', '10시 반'] })),
            IT(MB('방해가 생길 때 대신할 행동을 이어 보세요.', [['단체방이 계속 울린다', '"내일 볼게" 하고 방해 금지 켜기'], ['잠이 안 와 폰이 생각난다', '불 끈 채 숨 고르기'], ['충전기가 방에만 있다', '거실에 충전 자리 하나 만들기']], ['일어나서 영상 한 편 보기'], { mode: 'match' }),
              MB('방해 두 가지에 대신할 행동을 이어 보세요.', [['단체방이 계속 울린다', '"내일 볼게" 하고 방해 금지 켜기'], ['잠이 안 와 폰이 생각난다', '불 끈 채 숨 고르기']], [], { mode: 'match' }),
              null, { conclude: '잠자리 정리는 \'폰을 먼저 멀리 → 내일 준비 → 불 끄기\' 차례예요. 방해가 생길 때 대신할 행동을 정해 두면 차례가 무너지지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '(혼자 보기) 내 생활에 맞게 잠자리 정리 차례를 써요.', columns: ['차례', '할 일', '대략의 시각'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']], answer: '(예) 알림 끄기 — 충전기 거실 — 내일 준비 — 불 끄기' }],
          easy: [{ type: 'choice', prompt: '불을 끄기 전에 먼저 할 일에 ○ 해요.', options: ['폰을 거실 충전기에 두기', '누워서 마지막 영상 보기'], answer: '폰을 거실 충전기에 두기' }] },
        notes: '계획의 \'내 생활에 맞게\'는 채점하지 않고 활동지(혼자 보기)로 옮겼다. 교구에서는 차례가 정해진 가상 인물의 판만 채점한다.',
      }),
      M('activity.sleep-clock', {
        title: '거꾸로 세는 수면 계획 시각', method: '내 수면 계획 시각', tool: 'clock', minutes: 15,
        levels: { easy: '디지털 시각이 함께 보이고 긴바늘이 30분씩 움직인다. 정각·30분 시각만 맞춘다.', base: '디지털 시각 없이 긴바늘이 10분씩 움직이고, 기상 시각에서 거꾸로 세어 잠드는 시각과 화면 끄는 시각을 맞춘다.', challenge: '작은 눈금 없이 맞추고, 셋째·넷째 문항이 주말 계획(늦은 기상)으로 바뀐다.' },
        activity: {
          title: '거꾸로 세는 수면 계획 시각', tool: 'clock',
          teacher: '"아침 7시에 일어나야 하고 8시간 자기로 했다면, 몇 시에 잠들어야 할까요?" 가상 인물 은재의 연습 계획(잠 8시간, 잠들기 30분 전 화면 끄기)을 칠판에 적고, 기상 시각에서 거꾸로 세는 방법을 손가락으로 함께 센다. "잠드는 시각에 폰을 끄면 된다"는 학생에게 "폰을 끄자마자 잠이 올까요? 30분 먼저 끄는 까닭은 무엇일까요?"라고 되묻는다. 8시간과 30분은 연습용 값이라고 밝히고, 학생 자신의 기상 시각은 활동지 혼자 보기 칸에만 쓴다.',
          task: '가상 인물 은재의 기상 시각에서 거꾸로 세어, 잠드는 시각과 화면 끄는 시각을 시계로 맞춰요(잠 8시간·30분 전 화면 끄기는 연습용 값).',
          levels: { easy: { showDigital: true, minuteStep: 30 }, base: { minuteStep: 10 }, challenge: { minuteStep: 10, showMinuteMarks: false } },
          items: [
            IT({ prompt: '은재는 아침 7시에 일어나요. 8시간 자려면 몇 시에 잠들어야 할까요? 시계를 맞추세요.', target: { h: 11, m: 0 }, difficulty: 0.2 }),
            IT({ prompt: '잠들기 30분 전에 화면을 끄기로 했어요. 화면 끄는 시각에 시계를 맞추세요.', target: { h: 10, m: 30 }, difficulty: 0.25 }),
            IT({ prompt: '시험 날 은재는 6시 40분에 일어나요. 8시간 자려면 잠드는 시각은? 시계를 맞추세요.', target: { h: 10, m: 40 }, difficulty: 0.3 },
              { prompt: '시험 날 은재는 6시 30분에 일어나요. 8시간 자려면 잠드는 시각은? 시계를 맞추세요.', target: { h: 10, m: 30 } },
              { prompt: '주말에 은재는 8시 20분에 일어나요. 8시간 자려면 금요일 밤 잠드는 시각은? 시계를 맞추세요.', target: { h: 12, m: 20 } }),
            IT({ prompt: '그날 화면은 잠들기 30분 전에 꺼요. 화면 끄는 시각에 시계를 맞추세요.', target: { h: 10, m: 10 }, difficulty: 0.3 },
              { prompt: '그날 화면은 잠들기 30분 전에 꺼요(잠드는 시각 10시 30분). 화면 끄는 시각에 시계를 맞추세요.', target: { h: 10, m: 0 } },
              { prompt: '주말에도 화면은 잠들기 30분 전에 꺼요(잠드는 시각 12시 20분). 화면 끄는 시각에 시계를 맞추세요.', target: { h: 11, m: 50 } },
              { conclude: '기상 시각에서 거꾸로 세면 잠드는 시각이 나오고, 거기서 30분 앞이 화면 끄는 시각이에요. 주말에도 평일과 차이를 크게 벌리지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '(혼자 보기) 내 수면 계획 시각을 거꾸로 세어 써요.', columns: ['', '평일', '주말'], cells: [['일어나는 시각', '', ''], ['잠드는 시각', '', ''], ['화면 끄는 시각', '', '']], answer: '(예) 7시 — 11시 — 10시 30분' }],
          easy: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '7시에 일어나 8시간 자려면 ___시에 잠든다.', answer: '11' }] },
        notes: '시계 교구는 한 문항에 시계 하나라서, 계획의 \'시계 두 개\'는 잠드는 시각·화면 끄는 시각 두 문항으로 나눴다. 잠 8시간·30분 전은 가상 인물의 연습 계획 값이다(사람 확인 목록).',
      }),

      // ---- 정리 ----
      M('wrap.data-write', {
        title: '보여 주는 것과 보여 주지 않는 것', method: '자료 해석 글쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("이 그래프는 ___을 보여 준다. 하지만 ___은 알 수 없다.")을 채워 두 문장을 쓴다.', base: '세 문장을 쓰고 기준 3개(경향·한계·가상 자료 표시)를 스스로 점검한다.', challenge: '더 알아보려면 필요한 자료 문장을 더해 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'화면이 잠을 줄인다\'와 \'잠들기 전 사용이 많은 무리일수록 수면이 짧은 경향이다\' 가운데 이 그래프로 말할 수 있는 것은 무엇일까요?" 두 문장을 견주어 읽은 뒤 자료 해석 글을 쓰게 한다. 원인으로 단정하는 학생에게 "이 자료에서 \'왜\'를 확인할 수 있는 칸이 있었나요?"라고 묻는다. 가상 자료라는 표시를 글에 꼭 넣게 한다.',
          exitTicket: [
            RWX('그래프가 보여 주는 것과 보여 주지 않는 것을 세 문장으로 쓰고 기준표에 표시해요.',
              { topic: '오늘 읽은 가상 자료 꺾은선그래프가 보여 주는 것과 보여 주지 않는 것을 세 문장으로 쓰세요.', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 4, title: '자료 해석 글' },
              ['그래프가 보여 주는 경향을 썼다', '그래프로 알 수 없는 한계를 썼다', '가상 자료라는 점을 밝혔다'],
              { prompt: '문장 틀을 채워 두 문장을 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '이 그래프는 ___을 보여 준다. 하지만 ___은 알 수 없다.' }, crit: ['그래프가 보여 주는 경향을 썼다', '그래프로 알 수 없는 한계를 썼다'] },
              { prompt: '더 알아보려면 필요한 자료 문장을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5, maxChars: 320 }, crit: ['그래프가 보여 주는 경향을 썼다', '그래프로 알 수 없는 한계를 썼다', '가상 자료라는 점을 밝혔다', '더 알아보려면 필요한 자료를 썼다'] }),
            { type: 'choice', prompt: '"누워서 조금 보는 것은 잠에 아무 영향이 없다"는 말에 대한 답으로 가장 알맞은 것은?', options: ['맞다, 조금은 상관없다', '누워서 보는 화면도 잠드는 시각을 늦출 수 있다', '누워서 보면 오히려 잠이 잘 온다'], answer: 1, difficulty: 0.2, explain: '누워서 연 화면이 다음 화면으로 이어지면 잠드는 시각이 늦어질 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '자료가 말해 주는 것',
          items: [
            { type: 'short', prompt: '가상 자료 그래프가 보여 주는 경향을 한 문장으로 써요.' },
            { type: 'short', prompt: '이 그래프로 알 수 없는 것과, 더 알아보려면 필요한 자료를 써요.' },
          ],
          easy: { note: '"이 그래프는 ___을 보여 준다." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워요.', text: '이 그래프는 ___을 보여 준다. 하지만 ___은 알 수 없다.', answer: '(예) 사용이 늘수록 수면이 줄어드는 경향, 화면이 원인인지' }] },
        },
      }),
      M('wrap.routine-check', {
        title: '일주일 잠자리 점검표 준비', method: '일주일 잠자리 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '잠자리 정리 칸 3개와 함정 칸이 섞인 점검표에서 정리 칸만 고른다.', base: '정리 칸 4개와 함정 칸 2개가 섞인 점검표에서 정리 칸 넷을 고르고, 활동지에 일주일 표시 칸을 만든다.', challenge: '\'보호자 확인\' 칸이 더해져 다섯 칸을 고른다.' },
        wrap: {
          teacher: '"오늘 정한 잠자리 정리 차례를 일주일 동안 표시하려면 어떤 칸이 필요할까요?" 점검표에서 정리 칸만 고르게 한 뒤, 활동지에 요일 칸을 그려 일주일 표시판을 준비하게 한다. "매일 다 못 지키면 실패"라는 학생에게 "표시가 빈 날은 무엇이 방해했는지 알려 주는 칸이에요"라고 답한다. 표시판은 집에서 혼자 쓰고 걷지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '일주일 잠자리 점검표 칸', items: ROUT_OK.map((c) => ({ id: c.id, text: c.text })) }, prompt: '잠자리 점검표에 넣을 칸만 표시하세요(함정 칸이 섞여 있어요).', target: { checklist: ROUT_OK.filter((c) => c.ok).map((c) => c.id) }, difficulty: 0.15 },
              { prompt: '잠자리 점검표에 넣을 칸 셋만 표시하세요.', toolOptions: { items: [ROUT_OK[0], ROUT_OK[1], ROUT_OK[3], ROUT_OK[4]].map((c) => ({ id: c.id, text: c.text })) }, target: { checklist: ['k1', 'k2', 'k4'] } },
              { prompt: '보호자 확인 칸까지 넣어 잠자리 점검표 칸을 표시하세요.', toolOptions: { items: ROUT_OK.map((c) => ({ id: c.id, text: c.text })).concat([{ id: 'k7', text: '보호자와 함께 지켰는지 확인하기' }]) }, target: { checklist: ['k1', 'k2', 'k3', 'k4', 'k7'] } }),
            { type: 'choice', prompt: '일주일 점검표에서 표시가 빈 날에 할 일로 가장 알맞은 것은?', options: ['실패했으니 점검을 그만둔다', '그날 무엇이 방해했는지 적고 대신할 행동을 정한다', '빈 칸에 몰래 표시해 둔다'], answer: 1, difficulty: 0.2, explain: '빈 칸은 방해 요인을 알려 주는 단서예요. 고쳐서 다시 해요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '일주일 잠자리 점검표',
          items: [
            { type: 'table', prompt: '(혼자 보기) 일주일 동안 지킨 날에 ○ 해요.', columns: ['칸', '월', '화', '수', '목', '금', '토', '일'], cells: [['알림 끄기', '', '', '', '', '', '', ''], ['충전기 거실', '', '', '', '', '', '', ''], ['내일 준비', '', '', '', '', '', '', ''], ['불 끄기', '', '', '', '', '', '', '']] },
            { type: 'short', prompt: '표시가 빈 날에 방해한 것과 대신할 행동을 미리 한 가지 써 두어요.' },
          ],
          easy: { note: '세 칸(알림 끄기·충전기 거실·불 끄기)만 표시해도 돼요.', items: [{ type: 'check', prompt: '잠자리 점검표에 넣을 칸에 표시해요.', options: ['알림 끄기', '충전기 거실', '불 끄기', '잠이 올 때까지 영상 보기'] }] },
        },
      }),
    );
  }

  // ==== 9학년 · 만약-그러면 사용 계획 (digital.m.use-plan) ====
  // 가상 인물 시우·다온·로아·은재. 학생 자신의 계획 글은 기준표 스스로 점검으로만 둔다. 주말 시간 값은 가상 인물의 연습 값.
  {
    const M = MK('use-plan', [9]);
    const TOWN = { title: '시우의 하루 동선(가상)', grid: [6, 4], names: true, places: [
      { name: '집', icon: 'house', at: [0, 3], legend: '집(숙제할 때·잠들기 전)' }, { name: '학교', icon: 'school', at: [1, 0], legend: '학교(쉬는 시간)' },
      { name: '학원', icon: 'office', at: [5, 0], legend: '학원(쉬는 시간)' }, { name: '버스 정류장', icon: 'bus', at: [3, 2], legend: '학원 버스(40분)' },
      { name: '공원', icon: 'park', at: [4, 3] }, { name: '도서관', icon: 'library', at: [2, 3] }] };
    // 주말 시간 예산 — 경제 교구는 돈(원)만 세므로 '가상 시간 쿠폰'(1시간 = 1,000원)으로 바꿔 센다
    const WK = [
      { id: 'run', text: '운동 2시간', price: 2000 }, { id: 'meet', text: '친구 만나기 3시간', price: 3000 }, { id: 'rest', text: '쉬기·낮잠 1시간', price: 1000 },
      { id: 'scr', text: '화면 시간 2시간', price: 2000 }, { id: 'fam', text: '가족 나들이 3시간', price: 3000 }, { id: 'book', text: '책 읽기 1시간', price: 1000 },
      { id: 'binge', text: '화면 몰아 보기 6시간', price: 6000 }];
    const SAT = [['토 오전', '가족과 장보기'], ['토 오후', '친구들과 축구']];
    const SUN = [['일 오전', '공원 산책'], ['일 오후', '도서관에서 숙제']];
    const PLANFB = [
      { id: 'g1', text: '"학원 버스에서는" 하고 상황을 정했다', to: '잘된 점' }, { id: 'g2', text: '바로 할 행동(단어장 펴기)을 정했다', to: '잘된 점' },
      { id: 'm1', text: '"심심하면"은 언제인지 더 정하면 좋겠다', to: '더 구체화할 점' }, { id: 'm2', text: '"조금만 본다"를 몇 분인지 정하면 좋겠다', to: '더 구체화할 점' },
      { id: 'c1', text: '버스 계획은 꼭 지킬 수 있을 거야', to: '응원' }, { id: 'c2', text: '어긋나도 다음 날 다시 하면 돼', to: '응원' },
      { id: 'x1', text: '이런 계획은 어차피 못 지켜' }];
    const TRACK = [['월', 1], ['화', 2], ['수', 1], ['목', 2], ['금', 1], ['토', 3], ['일', 2]];

    ALL.push(
      // ---- 도입 ----
      M('intro.trigger-map', {
        title: '시우의 유혹 상황 지도', method: '유혹 상황 지도', tool: 'map', minutes: 6,
        levels: { easy: '시우의 동선에서 유혹이 가장 큰 곳 한 곳(학원 버스)에 핀이 꽂히는 시연을 보고 까닭을 함께 말한다.', base: '유혹이 큰 곳 세 곳에 차례로 핀이 꽂히는 시연을 보고 곳마다 까닭을 고른다.', challenge: '곳마다 유혹이 큰 시간대(예: 학원 버스 40분)도 짝과 말한다.' },
        intro: {
          teacher: '"시우가 \'덜 써야지\' 다짐이 가장 잘 무너지는 곳은 어디일까요?" 가상 인물 시우의 하루 동선 칸 지도를 띄우고 시연 단추로 학원 버스·집·학원에 핀이 꽂히는 모습을 보인다. "어디서나 똑같이 참으면 된다"는 학생에게 "버스 40분과 수업 시간은 유혹이 같을까요? 할 일이 없는 곳에서 더 커지지 않을까요?"라고 되묻는다. 오늘은 유혹 상황마다 \'만약 ~하면 ~한다\' 계획을 세운다고 밝힌다.',
          student: '가상 인물 시우의 하루 동선 지도에서 폰을 집고 싶은 마음이 가장 큰 곳을 찾고, 그곳에서 유혹이 커지는 까닭을 생각해요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '버스 정류장' }, { place: '집' }, { place: '학원' }] },
          art: { draw: 'a paper-cut town map with a house, a school, an academy building and a bus stop joined by a dotted path, small paper pins with glowing phone icons standing at the bus stop and the house', banner: '유혹은 어디서 커질까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '시우의 동선은 가상이다. 학생 자신의 동선이나 사는 곳은 묻지 않는다.',
      }),
      M('intro.plan-compare', {
        title: '두 계획, 일주일 뒤', method: '두 계획 비교', tool: 'story', minutes: 6,
        levels: { easy: '두 인물의 일주일 결과 카드만 이어지는 시연을 본다.', base: '결과 카드가 이어진 뒤 왜 결과가 달랐는지 까닭을 짝과 말한다.', challenge: '더 나은 계획의 조건(상황·바로 할 행동)을 한 문장으로 정리해 말한다.' },
        intro: {
          teacher: '"다온이는 \'덜 써야지\', 로아는 \'학원 버스에서는 단어장을 편다\'고 계획했어요. 일주일 뒤 누가 더 지켰을까요?" 두 가상 인물의 계획 칸에 일주일 결과 카드가 이어지는 시연을 보인다. "다온이가 의지가 약해서"라는 말에는 "다온이는 언제, 어디서, 무엇을 할지 정했나요?"라고 되묻는다. 의지만 강하면 계획이 필요 없다는 오해를 짚고, 상황과 행동을 정한 계획이 왜 지키기 쉬운지 이끈다.',
          student: '가상 인물 다온이와 로아의 계획을 견주어 보고, 일주일 뒤 결과가 왜 달랐는지 계획의 모양에서 까닭을 찾아요.',
          demo: { tool: 'story', options: { mode: 'match', title: '두 계획의 일주일(가상 인물)', slots: [{ id: 'a', label: '다온: "덜 써야지"' }, { id: 'b', label: '로아: "학원 버스에서는 단어장을 편다"' }], cards: [
            { id: 'r1', text: '일주일 가운데 하루 지킴' }, { id: 'r5', text: '일주일 가운데 닷새 지킴' }, { id: 'r0', text: '아무도 지키지 못함' }] },
            sequence: [{ match: { a: 'r1', b: 'r5' } }] },
          art: { draw: 'a paper-cut split scene, on one side a teenager with a vague thought bubble and a week calendar with one check, on the other a teenager on a bus opening a vocabulary booklet with a calendar full of checks', banner: '어느 계획이 지켜졌을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '두 인물과 일주일 결과는 가상이다.',
      }),

      // ---- 활동 ----
      M('activity.ifthen-code', {
        title: '만약-그러면 블록 길 짜기', method: '만약-그러면 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '유혹 바위 하나를 피해 할 일 깃발에 닿는 길을 짠다(블록 고르개에 조건 블록이 있다).', base: '유혹 바위 둘을 피해 깃발에 닿는 길을 짜고, 조건 블록으로 짠 길을 따라가 멈출 칸을 고른다.', challenge: '첫 판은 조건 블록을 꼭 써서 블록 7개 이하로, 둘째 판은 별(대안 활동) 둘까지 모아 블록 8개 이하로 짠다.' },
        activity: {
          title: '만약-그러면 블록 길 짜기', tool: 'block-coding',
          teacher: '"\'막히면 오른쪽, 아니면 앞으로\' 블록은 우리 계획의 어떤 문장과 닮았을까요?" 바위를 \'알림\'·\'심심함\' 같은 유혹 상황으로, 깃발을 \'할 일\'로 읽어 주고, 조건 블록이 \'만약 유혹을 만나면 돌아선다\'는 계획이라고 짚는다. "그냥 앞으로만 가면 되잖아요"라는 학생에게 "바위를 만났을 때 할 행동을 안 정해 두면 거북이는 어떻게 될까요?"라고 되묻는다. 조건마다 다른 행동을 정해 두는 것이 만약-그러면 계획이라는 점을 끝에서 정리한다.',
          task: '거북이가 유혹 바위(알림·심심함)를 만나면 돌아서 할 일 깃발로 가도록 블록 길을 짜요. 조건 블록이 \'만약 ~하면 ~한다\' 계획이에요.',
          levels: { easy: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, base: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] } },
          items: [
            IT({ prompt: '바위(알림)를 만나면 돌아서 깃발(숙제)에 닿게 길을 짜세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 2 }, rocks: [[3, 1]], stars: [] }, target: { reach: true }, difficulty: 0.25 },
              null,
              { prompt: '조건 블록(막히면 오른쪽·왼쪽)을 꼭 써서 블록 7개 이하로 깃발(숙제)에 닿게 하세요.', target: { reach: true, use: ['if'], maxBlocks: 7 } }),
            IT({ prompt: '바위 둘(알림·심심함)을 피해 깃발(잠자리 준비)에 닿게 길을 짜세요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 3 }, rocks: [[2, 1], [4, 2]], stars: [[1, 3], [3, 3]] }, target: { reach: true }, difficulty: 0.35 },
              null,
              { prompt: '별 둘(대안 활동: 단어장·스트레칭)을 모두 들러 깃발에 닿게 블록 8개 이하로 짜세요.', target: { reach: true, stars: true, maxBlocks: 8 } }),
            IT({ prompt: '친구가 짠 순서예요: 앞으로 1칸 → 막히면 오른쪽 → 막히면 오른쪽 → 막히면 오른쪽. 바위(알림)를 만난 거북이가 멈출 칸을 고르세요.', toolOptions: { mode: 'trace', program: ['fwd', 'if:right', 'if:right', 'if:right'], cols: 4, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 2 }, rocks: [[2, 0]] }, target: { end: { x: 1, y: 2 } }, difficulty: 0.3,
              conclude: '조건 블록처럼 \'만약 유혹을 만나면 이렇게 한다\'를 미리 정해 두면, 막혔을 때 멈춰 서지 않고 할 일 쪽으로 돌아설 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 조건을 실제 만약-그러면 계획으로 옮겨 써요.', columns: ['만약(바위)', '그러면(도는 방향·행동)'], cells: [['알림이 울리면', ''], ['심심하면', '']], answer: '(예) 방해 금지를 켜고 숙제를 이어 한다, 단어장을 편다' }],
          easy: [{ type: 'choice', prompt: '\'만약 ~하면 ~한다\' 계획에 ○ 해요.', options: ['만약 알림이 울리면 방해 금지를 켠다', '앞으로 폰을 덜 쓰겠다'], answer: '만약 알림이 울리면 방해 금지를 켠다' }] },
        notes: '블록 판의 바위·깃발·별에는 글자가 없어 교사가 칸 이름(알림·심심함·할 일·대안 활동)을 읽어 준다.',
      }),
      M('activity.plan-write', {
        title: '나의 만약-그러면 계획 세 개', method: '나의 만약-그러면 계획 3개', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀("만약 ___하면 ___한다.")이 주어지고, 계획마다 기준 2개(구체적 상황·바로 할 행동)를 점검한다.', base: '유혹 상황 세 개에 계획을 한 문장씩 쓰고 기준 3개(구체적 상황·바로 할 수 있는 행동·대체 활동)를 점검한다.', challenge: '셋째 계획에 실패했을 때 다시 할 방법 문장을 더해 기준 4개를 점검한다.' },
        activity: {
          title: '나의 만약-그러면 계획 세 개', tool: 'rubric-writing',
          teacher: '"\'폰을 덜 쓴다\'를 \'만약 학원 버스에 타면 단어장을 편다\'로 바꾸면 무엇이 달라지나요?" 상황과 행동이 들어간 계획 문장을 함께 고쳐 본 뒤 세 상황에 내 계획을 쓰게 한다. "의지만 있으면 된다"는 학생에게 "의지는 유혹 앞에서 쓰는 것이고, 계획은 유혹 전에 미리 정하는 거예요. 둘 중 무엇이 버스 40분을 덜 힘들게 할까요?"라고 묻는다. 계획 글은 걷어 평가하지 않고, 앱 이름이나 사용 시간 숫자는 쓰지 않게 한다.',
          task: '유혹 상황 세 개(학원 버스·숙제 중 알림·잠자리)에 \'만약 ~하면 ~한다\' 계획을 쓰고 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('계획 ①: 학원 버스를 타는 상황에 \'만약 ~하면 ~한다\' 계획을 1~2문장으로 쓰세요.',
              { topic: '계획 ① — 학원 버스(또는 이동 시간)에 폰을 집고 싶을 때', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '만약-그러면 계획 ①', lines: 3 },
              ['언제·어디서인지 상황을 구체적으로 썼다', '그 자리에서 바로 할 수 있는 행동을 썼다', '화면 대신 할 대체 활동을 썼다'],
              { prompt: '틀을 채워 계획 ①을 쓰세요.', toolOptions: { starter: '만약 ___하면 ___한다.' }, crit: ['언제·어디서인지 상황을 구체적으로 썼다', '그 자리에서 바로 할 수 있는 행동을 썼다'] },
              null, { target: { mustInclude: ['만약'] } }),
            RW('계획 ②: 숙제하는 중에 알림이 울리는 상황에 계획을 1~2문장으로 쓰세요.',
              { topic: '계획 ② — 숙제하는 중에 알림이 울릴 때', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '만약-그러면 계획 ②', lines: 3 },
              ['언제·어디서인지 상황을 구체적으로 썼다', '그 자리에서 바로 할 수 있는 행동을 썼다', '화면 대신 할 대체 활동을 썼다'],
              { prompt: '틀을 채워 계획 ②를 쓰세요.', toolOptions: { starter: '만약 ___하면 ___한다.' }, crit: ['언제·어디서인지 상황을 구체적으로 썼다', '그 자리에서 바로 할 수 있는 행동을 썼다'] },
              null, { target: { mustInclude: ['만약'] } }),
            RW('계획 ③: 잠자리에 누워 폰이 생각나는 상황에 계획을 1~2문장으로 쓰세요.',
              { topic: '계획 ③ — 잠자리에 누웠는데 폰이 생각날 때', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '만약-그러면 계획 ③', lines: 3 },
              ['언제·어디서인지 상황을 구체적으로 썼다', '그 자리에서 바로 할 수 있는 행동을 썼다', '화면 대신 할 대체 활동을 썼다'],
              { prompt: '틀을 채워 계획 ③을 쓰세요.', toolOptions: { starter: '만약 ___하면 ___한다.' }, crit: ['언제·어디서인지 상황을 구체적으로 썼다', '그 자리에서 바로 할 수 있는 행동을 썼다'] },
              { prompt: '계획 ③과, 지키지 못했을 때 다시 할 방법을 2~3문장으로 쓰세요.', toolOptions: { maxSentences: 3, maxChars: 220 }, crit: ['언제·어디서인지 상황을 구체적으로 썼다', '그 자리에서 바로 할 수 있는 행동을 썼다', '화면 대신 할 대체 활동을 썼다', '지키지 못했을 때 다시 할 방법을 썼다'] },
              { target: { mustInclude: ['만약'] }, extra: { conclude: '좋은 계획은 \'언제·어디서\'와 \'바로 할 행동\'이 들어 있어요. 어긋나면 고쳐서 다시 하면 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '(혼자 보기) 세 계획을 옮겨 적고 지킨 날에 ○ 해요.', columns: ['만약(상황)', '그러면(행동)', '지킨 날'], cells: [['', '', ''], ['', '', ''], ['', '', '']], answer: '(예) 학원 버스에 타면 — 단어장을 편다' }],
          easy: [{ type: 'blank', prompt: '틀을 채워요.', text: '만약 ___하면 ___한다.', answer: '(예) 숙제 중 알림이 울리면, 방해 금지를 켠다' }] },
        notes: '계획의 \'계획 둘(쉬움)\'은 문항 수를 단계마다 같게 두어야 해서, 쉬움은 문장 틀과 줄인 기준표로 바꿨다. 글은 스스로 점검이고 걷지 않는다.',
      }),
      M('activity.weekend-budget', {
        title: '가상 시간 쿠폰으로 주말 예산 짜기', method: '주말 시간 예산 짜기', tool: 'economy', minutes: 15,
        levels: { easy: '활동 셋(운동·친구 만나기·화면 시간) 가운데 운동을 꼭 넣고 예산 막대 안에서 고른다.', base: '활동 일곱 가운데 운동·친구 만나기를 꼭 넣고 몰아 보기는 빼서 10시간(쿠폰 10,000원) 안에 고르고, 시험 주말(6시간) 예산도 짠다.', challenge: '화면 시간을 빼고 그 자리에 넣은 활동을 활동지에 설명한다(교구 문항은 기본과 같다).' },
        activity: {
          title: '가상 시간 쿠폰으로 주말 예산 짜기', tool: 'economy',
          teacher: '"가상 인물 은재의 주말 자유 시간은 10시간이에요. 1시간을 쿠폰 1,000원으로 바꾸면 10,000원 예산이 돼요." 예산 막대가 차오르는 것을 보며 활동을 고르게 하고, 화면 몰아 보기 6시간이 막대의 반 넘게 차지하는 장면을 함께 본다. "남는 시간에 화면 보면 되죠"라는 학생에게 "몰아 보기를 먼저 넣으면 친구 만나기와 운동이 들어갈 자리가 남을까요?"라고 되묻는다. 경제 교구는 돈만 세므로 시간을 가상 쿠폰으로 바꿔 쓴다고 처음에 밝힌다.',
          task: '가상 인물 은재의 주말 자유 시간 10시간을 가상 시간 쿠폰(1시간 = 1,000원)으로 바꾸어, 예산 막대 안에서 운동·만남·쉬기·화면 시간을 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '쿠폰 10,000원(10시간). 운동과 친구 만나기는 꼭 넣고, 화면 몰아 보기는 빼고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 10000, items: WK, ask: '은재의 주말에 넣을 활동은?' }, target: { budget: { must: ['run', 'meet'], not: ['binge'] } }, difficulty: 0.25 },
              { prompt: '쿠폰 10,000원(10시간). 세 활동 가운데 운동은 꼭 넣고 예산 안에서 고르세요.', toolOptions: { items: pickCards(WK, ['run', 'meet', 'scr']) }, target: { budget: { must: ['run'] } } }),
            IT({ prompt: '시험이 있는 주말이라 자유 시간이 6시간(쿠폰 6,000원)이에요. 쉬기는 꼭 넣고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 6000, items: WK.filter((w) => w.id !== 'binge'), ask: '시험 주말에 넣을 활동은?' }, target: { budget: { must: ['rest'] } }, difficulty: 0.3 },
              { prompt: '자유 시간이 6시간(쿠폰 6,000원)이에요. 세 활동 가운데 쉬기는 꼭 넣고 예산 안에서 고르세요.', toolOptions: { items: pickCards(WK, ['rest', 'run', 'scr']) }, target: { budget: { must: ['rest'] } } }),
            IT({ prompt: '쿠폰 10,000원 안에서 화면 시간 없이 네 가지 활동을 고르세요.', toolOptions: { mode: 'budget', budget: 10000, items: WK, ask: '화면 없는 주말에 넣을 활동은?' }, target: { budget: { not: ['scr', 'binge'], count: 4 } }, difficulty: 0.35,
              conclude: '시간도 예산처럼 꼭 넣을 것부터 정하면, 화면 시간이 다른 활동의 자리를 다 차지하지 않아요.' },
              { prompt: '쿠폰 10,000원 안에서 화면 시간 없이 두 가지 활동을 고르세요.', toolOptions: { items: pickCards(WK, ['run', 'meet', 'scr']) }, target: { budget: { not: ['scr'], count: 2 } } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '화면 시간을 줄인 자리에 무엇을 넣었는지, 그 까닭과 함께 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '주말 예산에서 먼저 넣을 것에 ○ 해요.', options: ['운동·친구 만나기처럼 꼭 하고 싶은 활동', '화면 몰아 보기 6시간'], answer: '운동·친구 만나기처럼 꼭 하고 싶은 활동' }] },
        notes: '경제 교구는 돈(원)만 세므로 시간을 \'가상 시간 쿠폰(1시간 = 1,000원)\'으로 바꿔 예산 막대를 쓴다. 10시간·6시간과 활동 시간은 가상 인물의 연습 값이다.',
      }),
      M('activity.weekend-board', {
        title: '화면 밖 주말 일과판', method: '화면 밖 주말 일과판', tool: 'kitchen', minutes: 15,
        levels: { easy: '토요일 반나절 두 칸(오전·오후)에 활동 카드를 놓는다(놓으면 바로 맞는지 알려 줌).', base: '토·일 이틀 네 칸에 계획 글대로 활동 카드를 놓고, 날씨에 따라 맑은 날·비 오는 날 활동을 나눈다.', challenge: '비 오는 날 문항에 함정 카드가 더해지고, 활동지에 비 오는 날 대안 칸을 만든다.' },
        activity: {
          title: '화면 밖 주말 일과판', tool: 'kitchen',
          teacher: '"화면을 줄이자고 하면 \'그럼 뭐 해요?\'가 먼저 나와요. 미리 칸을 채워 두면 어떨까요?" 가상 인물 은재의 주말 계획 글을 읽고 시간대 칸에 활동 카드를 놓게 한 뒤, 비가 오면 바깥 활동을 무엇으로 바꿀지 나누게 한다. "비 오면 그냥 폰 보죠"라는 학생에게 "실내에서 함께할 수 있는 활동 카드가 몇 장 있나요?"라고 되묻는다. 여가와 관계 활동을 미리 정해 두는 것이 화면 밖 주말의 첫걸음이라는 점을 짚는다.',
          task: '가상 인물 은재의 주말 계획 글대로 시간대 칸에 활동 카드를 놓고, 비 오는 날 바꿀 활동도 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(MB('은재의 계획 글: "토요일 오전엔 가족과 장보기, 오후엔 친구들과 축구." 글대로 칸에 카드를 놓으세요.', SAT, ['하루 종일 영상 보기'], { autoMotif: false })),
            IT(MB('은재의 계획 글: "일요일 오전엔 공원 산책, 오후엔 도서관에서 숙제." 글대로 칸에 카드를 놓으세요.', SUN, ['늦잠 자며 영상 넘기기'], { autoMotif: false }),
              MB('은재의 계획 글: "일요일 오전엔 공원 산책." 글대로 칸에 카드를 놓으세요.', SUN.slice(0, 1), [], { autoMotif: false })),
            IT(SB('비가 오면 바꿀 수 있게, 활동 카드를 맑은 날·비 오는 날로 나누세요.', ['맑은 날', '비 오는 날'], [
              { id: 'o1', text: '공원에서 자전거 타기', to: '맑은 날' }, { id: 'o2', text: '운동장에서 축구', to: '맑은 날' },
              { id: 'i1', text: '가족과 보드게임', to: '비 오는 날' }, { id: 'i2', text: '도서관에서 책 고르기', to: '비 오는 날' }, { id: 'i3', text: '집에서 함께 요리하기', to: '비 오는 날' }], { autoMotif: false }),
              SB('활동 카드 넉 장을 맑은 날·비 오는 날로 나누세요.', ['맑은 날', '비 오는 날'], [
                { id: 'o1', text: '공원에서 자전거 타기', to: '맑은 날' }, { id: 'o2', text: '운동장에서 축구', to: '맑은 날' },
                { id: 'i1', text: '가족과 보드게임', to: '비 오는 날' }, { id: 'i2', text: '도서관에서 책 고르기', to: '비 오는 날' }], { autoMotif: false }),
              SB('활동 카드를 맑은 날·비 오는 날로 나누세요(어느 쪽도 아닌 카드는 남겨요).', ['맑은 날', '비 오는 날'], [
                { id: 'o1', text: '공원에서 자전거 타기', to: '맑은 날' }, { id: 'o2', text: '운동장에서 축구', to: '맑은 날' },
                { id: 'i1', text: '가족과 보드게임', to: '비 오는 날' }, { id: 'i2', text: '도서관에서 책 고르기', to: '비 오는 날' }, { id: 'i3', text: '집에서 함께 요리하기', to: '비 오는 날' },
                { id: 't1', text: '방에서 혼자 영상 몰아 보기' }], { autoMotif: false }),
              { conclude: '화면 밖 주말은 \'무엇을 할지\'를 칸에 미리 채워 두는 데서 시작해요. 비 오는 날 대안까지 정하면 흔들리지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '(혼자 보기) 화면 밖 주말 일과판을 채워요.', columns: ['', '오전', '오후', '비 오면'], cells: [['토요일', '', '', ''], ['일요일', '', '', '']], answer: '(예) 토 — 장보기·축구·보드게임, 일 — 산책·도서관·요리' }],
          easy: [{ type: 'choice', prompt: '비 오는 날 할 수 있는 화면 밖 활동에 ○ 해요.', options: ['가족과 보드게임', '운동장에서 축구'], answer: '가족과 보드게임' }] },
      }),

      // ---- 정리 ----
      M('wrap.peer-feedback', {
        title: '짝 계획에 붙이는 세 가지 의견', method: '짝 계획 피드백', tool: 'mindmap', minutes: 7,
        levels: { easy: '가상 인물 시우의 계획에 \'잘된 점\' 가지 하나만 의견 카드를 붙인다.', base: '세 가지(잘된 점·더 구체화할 점·응원)에 의견 카드를 나눠 붙이고, 함정 카드(깎아내리는 말)는 남긴다.', challenge: '활동지에서 짝의 실제 계획에 세 가지 의견을 써 주고, 받은 의견으로 내 계획을 고쳐 쓴다.' },
        wrap: {
          teacher: '"시우의 계획은 \'학원 버스에서는 단어장을 편다, 심심하면 조금만 본다\'예요. 어떤 의견이 시우를 도울까요?" 의견 카드를 세 가지에 나누며 \'더 구체화할 점\'은 탓이 아니라 고칠 곳을 알려 주는 말이라는 점을 짚는다. "그냥 \'못 지킬 거야\'라고 솔직히 말하면 되죠"라는 학생에게 "그 말을 들은 시우는 무엇을 고치면 될까요?"라고 되묻는다. 이어서 짝의 계획에 같은 세 가지 의견을 활동지로 써 주게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '시우의 만약-그러면 계획', slots: ['잘된 점', '더 구체화할 점', '응원'], cards: strip(PLANFB) }, prompt: '시우의 계획에 붙일 의견 카드를 세 가지로 나누세요(깎아내리는 말은 남겨요).', target: { sort: { '잘된 점': ['g1', 'g2'], '더 구체화할 점': ['m1', 'm2'], 응원: ['c1', 'c2'] } }, difficulty: 0.2 },
              { prompt: '시우의 계획에서 잘된 점 카드를 가지에 붙이세요.', toolOptions: { slots: ['잘된 점'], cards: strip(pickCards(PLANFB, ['g1', 'g2', 'x1'])) }, target: { sort: { '잘된 점': ['g1', 'g2'] } } }),
            { type: 'choice', prompt: '"의지만 강하면 계획은 필요 없다"는 말에 대한 답으로 가장 알맞은 것은?', options: ['맞다, 의지가 전부다', '유혹 앞에서 할 행동을 미리 정해 두면 의지를 덜 쓰고도 지킬 수 있다', '계획을 세우면 오히려 더 못 지킨다'], answer: 1, difficulty: 0.2, explain: '만약-그러면 계획은 유혹 전에 할 행동을 정해 두는 방법이에요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '짝 계획 피드백',
          items: [
            { type: 'table', prompt: '짝의 계획 하나에 세 가지 의견을 써 줘요.', columns: ['잘된 점', '더 구체화할 점', '응원'], cells: [['', '', '']] },
            { type: 'short', prompt: '받은 의견으로 내 계획 하나를 고쳐 다시 써요.' },
          ],
          easy: { note: '잘된 점 한 가지만 써 줘도 돼요.', items: [{ type: 'short', prompt: '짝의 계획에서 잘된 점 한 가지를 써 줘요.' }] },
        },
        notes: '교구에서는 가상 인물 시우의 계획으로 의견 나누기를 하고, 짝의 실제 계획은 활동지에서 말과 글로 주고받는다.',
      }),
      M('wrap.track-chart', {
        title: '실천 기록 막대그래프 준비', method: '실천 기록 그래프 준비', tool: 'chart', minutes: 7,
        levels: { easy: '가상 인물 시우의 사흘(월~수) 실천 기록 표를 보고 막대 셋을 그린다.', base: '시우의 평일 닷새 실천 기록 표를 보고 막대 다섯을 그리고, 활동지에 이레 기록 틀과 내 목표선을 정한다.', challenge: '목표를 못 채운 날에 고칠 방법을 고르고 활동지에 내 말로 적는다.' },
        wrap: {
          teacher: '"계획을 세웠으면 지켰는지 어떻게 알 수 있을까요?" 가상 인물 시우의 지난주 실천 기록 표로 막대그래프를 그리게 한 뒤, 활동지에 다음 주 내 기록 틀(요일·횟수)과 목표선을 그리게 한다. "매일 목표를 못 넘으면 실패"라는 학생에게 "목표선 아래 막대는 무엇을 고칠지 알려 주는 단서예요"라고 답한다. 내 기록 틀은 집에서 혼자 쓰고 걷지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '시우의 지난주 평일 계획 실천 횟수(가상 자료)', unit: '번', xLabel: '요일', yLabel: '실천 횟수', data: TRACK.slice(0, 5), max: 4, scale: 1 }, prompt: '시우의 지난주 평일(월~금) 실천 기록 표를 보고 막대그래프를 완성하세요.', target: { build: true }, difficulty: 0.2 },
              { prompt: '시우의 사흘 실천 기록 표를 보고 막대그래프를 완성하세요.', toolOptions: { data: TRACK.slice(0, 3) } }),
            { type: 'choice', prompt: '목표선(하루 2번)을 못 채운 날에 할 일로 가장 알맞은 것은?', options: ['계획을 버린다', '그날 무엇이 방해했는지 보고 계획의 상황이나 행동을 고친다', '기록을 지운다'], answer: 1, difficulty: 0.2, explain: '목표에 못 미친 날은 계획을 고칠 곳을 알려 줘요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '다음 주 실천 기록',
          items: [
            { type: 'table', prompt: '(혼자 보기) 다음 주 실천 횟수를 적을 틀이에요. 목표선(하루 몇 번)을 먼저 정해 적어요.', columns: ['요일', '월', '화', '수', '목', '금', '토', '일'], cells: [['실천 횟수', '', '', '', '', '', '', ''], ['목표', '', '', '', '', '', '', '']] },
            { type: 'short', prompt: '목표를 못 채운 날 계획을 어떻게 고칠지 한 문장으로 미리 써 두어요.' },
          ],
          easy: { note: '사흘(월~수)만 적어도 돼요.', items: [{ type: 'table', prompt: '(혼자 보기) 사흘 실천 횟수를 적어요.', columns: ['요일', '월', '화', '수'], cells: [['실천 횟수', '', '', '']] }] },
        },
        notes: '그래프 교구에는 목표선이 없어 목표선은 활동지 틀에서 정한다. 교구에서는 가상 인물 시우의 기록으로 그래프를 그린다. 막대 일곱 개는 휴대폰에서 누름 영역이 44px보다 좁아져 교구 그래프는 평일 닷새로 줄이고, 이레 기록 틀은 활동지에 둔다.',
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
