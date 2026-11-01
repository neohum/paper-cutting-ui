/* 창체 안전교육 응급처치 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-firstaid 중.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 중학교 응급처치 네 항목
 *   (1 응급처치의 상황·의미·중요성·신고·조치 방법 / 2 심폐소생술 및 자동제세동기의 사용법 / 3 상처의 종류와 응급처치 / 4 일상생활 속 응급처치)
 *   + 학교 안전교육 7대 표준안 응급처치(중·고 염좌·골절·AED). 주제마다 source 는 체계도에 있다.
 * 주제 3개 × 8모듈 = 24모듈. 7학년 principles(원칙·신고), 8학년 cpr-practice(심폐소생술·AED 실습), 9학년 bleeding-fracture(지혈·염좌·골절).
 * 부상·피 묘사를 하지 않는다(장면은 '넘어져 일어나지 못한다', '상처에서 피가 난다' 정도의 말로만). 인물·장면·그래프 수치는 모두 지어낸 가상 자료다(가명).
 * 피해 경험은 묻지 않는다. 전화번호는 119(체계도 개념)만 쓴다. 실습은 연습용 마네킹·짝의 팔(부목 연습)로만 한다.
 * 심폐소생술·AED(cpr-practice)는 all_market 시각 자료 visual-series/src/cpr-aed(story.md·CHECK.md)와 문구·순서·수치를 맞췄다:
 *   순서 = 주변 안전 → 어깨 두드리며 반응 확인 → 사람을 콕 집어 119 신고·AED 요청 → 호흡 확인 → 가슴 압박 → AED(전원 → 패드 두 장 → 분석 중 떨어지기
 *   → 충격이 필요하다고 할 때만 버튼 → 바로 압박 다시) → 구급대가 올 때까지 교대하며 이어 가기. 숫자는 '깊이 약 5cm·분당 100~120회'만 쓴다.
 *   교대 주기·AED 재분석 간격은 숫자를 쓰지 않고 '공식 지침 수치'로 둔다. 타이머 활동의 20초·4명은 '우리 반 연습 약속'이다(공식 교대 주기 아님).
 *
 * 사람 확인: 근거 파일(research-*.md)에는 고시 항목 제목만 있어, 아래 수칙은 공식 안내처에서 확인해야 한다.
 *   [질병관리청·대한심폐소생협회 「2025년 한국 심폐소생술 가이드라인」 — cpr-aed CHECK.md 의 '사람 확인 필요' 1~7과 같음]
 *   - cpr-practice.*: 깊이 약 5cm·분당 100~120회(원문 PDF 대조 못 함), 누른 뒤 가슴이 다 올라오게, 가슴 정중앙에 두 손 깍지,
 *     인공호흡을 배우지 않았으면 가슴 압박만, '숨을 쉬지 않거나 헐떡이듯 이상하게 쉬면 바로 압박', 패드 자리(오른쪽 빗장뼈 아래·왼쪽 젖꼭지 아래 옆구리),
 *     분석 중 떨어지는 까닭, 충격 불필요 안내면 바로 압박, 교대는 옆에서 준비했다가 "하나, 둘, 셋, 교대"로 빨리, 119 상담요원이 전화로 안내해 줌, 학생 역할 범위.
 *   [소방청·대한적십자사·질병관리청 응급처치 안내]
 *   - principles.*: 현장이 위험하면 다가가지 않고 먼저 알리기, 119 신고 내용(위치·상황·환자 상태·안내 따르기·먼저 끊지 않기), 위치를 모르면 주변 건물·표지 말하기,
 *     응급처치는 치료가 아니라 구급대가 올 때까지 돕는 일, 약을 함부로 먹이지 않기, 장갑·손 씻기로 감염 예방, 보호자·보건 선생님께 알리기, 다친 사람에게 말 걸어 안심시키기.
 *   - bleeding-fracture.*: 지혈(장갑·비닐 → 깨끗한 천으로 직접 누르기 → 천이 젖어도 떼지 않고 덧대기 → 멈추지 않으면 119), 휴지로 계속 닦지 않기,
 *     골절 의심 신호(움직이지 못함·모양이 평소와 다름·심한 아픔·부기)와 맞춰 보지 않기·움직이지 않게 고정, 부목은 다친 곳 위아래 관절까지, 너무 세게 묶지 않기·손가락 끝 색 확인,
 *     염좌는 쉬게 하고 천에 싼 얼음으로 차갑게·높이 올리기, 주무르기·열 찜질은 오해(다친 직후), 머리·목·허리를 다친 것 같으면 움직이지 않고 119.
 *   [가상 수치 — 실제 통계 아님] principles.intro.sample-data(목격자 행동 응답 수), cpr-practice.wrap.class-chart(실습 단계별 '어려웠다' 응답 수). */
(function () {
  const ALL = [];
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `saf-firstaid.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'saf-firstaid', band: '중', topic: `saf-firstaid.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각 ----
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));

  // ---- 갈림길(dilemma) ----
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // 쉬움 2단(근거 없음) · 기본 3단(근거 없음) · 도전 3단 + 근거 카드
  const DIL23 = (p, title, tree, good, R, ok, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: [], compare: true }, target: { path: paths(good, 3) },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), reasons: [] }, target: { path: paths(good, 2) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: R }, target: { path: paths(good, 3), reasons: ok, some: true } },
    },
  }, extra);
  const DEMO_DIL = (title, tree, good, R) => ({ tool: 'dilemma', options: { title, scene: cut(tree, 2), reasons: R || [] }, sequence: [{ path: paths(good, 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });
  // ---- 기준표 글쓰기 ----
  const RW = (prompt, opt, checks, easy, ch, more) => IT({ prompt, toolOptions: opt, target: { selfCheck: checks } },
    easy ? { prompt: easy.prompt, toolOptions: Object.assign({ starter: easy.starter }, easy.toolOptions || {}), target: { selfCheck: easy.checks || checks } } : null,
    ch ? { prompt: ch.prompt, toolOptions: ch.toolOptions || {}, target: { selfCheck: [...checks, ...ch.add] } } : null, more);

  // ==== 7학년 · 응급처치 원칙과 신고·상황 판단 (saf-firstaid.m.principles) ====
  {
    const M = MK('principles', [7]);
    const STAIR = { text: '쉬는 시간, 계단 아래에서 친구 서진이 넘어져 일어나지 못하고 발목을 붙잡고 있다. 계단 위에서 다른 학생들이 뛰어 내려온다.', ask: '나는 먼저 어떻게 할까?', motif: 'house', choices: [
      { id: 'lift', text: '서진이 팔을 잡아 바로 일으켜 세운다', result: '서진이 더 아파하며 다시 주저앉는다.', impact: [{ who: '서진', text: '다친 곳이 더 아플 수 있다', tone: -1 }], why: '다친 곳을 모를 때 억지로 움직이면 더 다칠 수 있어요.', end: '억지로 일으켜 더 아파했어요.' },
      { id: 'safe', text: '뛰어오는 친구들을 멈추게 하고 서진이 곁에 앉는다', result: '계단 쪽이 조용해지고 서진이 조금 안심한다.', impact: [{ who: '서진', text: '부딪힐 위험이 사라진다', tone: 1 }], end: '주변을 먼저 안전하게 했어요.',
        next: { text: '서진이 "괜찮은 것 같아"라고 하지만 발을 딛지 못한다.', ask: '다음에는?', choices: [
          { id: 'tell', text: '옆 친구에게 "보건 선생님 모셔 와 줘"라고 콕 집어 부탁한다', result: '보건 선생님이 곧 오신다.', impact: [{ who: '서진', text: '알맞은 도움을 받는다', tone: 1 }] },
          { id: 'wait', text: '괜찮다고 했으니 수업에 들어간다', result: '서진이 혼자 남는다.', impact: [{ who: '서진', text: '도움을 받지 못한다', tone: -1 }], why: '"괜찮다"는 말보다 실제로 움직일 수 있는지를 봐요.' }] } },
      { id: 'pass', text: '누군가 도와주겠지 하고 지나간다', result: '여럿이 지나가지만 아무도 멈추지 않는다.', impact: [{ who: '서진', text: '혼자 기다린다', tone: -1 }], why: '모두 "누군가 하겠지" 하면 아무도 돕지 않게 돼요.', ending: '아무도 돕지 않았어요.' }] };
    const STAIR_R = [{ id: 'r1', text: '현장이 안전해야 돕는 사람도 다치지 않는다' }, { id: 'r2', text: '빨리 일으키는 것이 가장 좋은 도움이다', why: '다친 곳을 모를 때는 움직이지 않게 하고 도움을 불러요.' }];
    const WIT = [['도움을 요청했다', 9], ['지켜보기만 했다', 14], ['그냥 지나갔다', 7]];
    const STEP5 = [
      { id: 'p1', text: '주변이 안전한지 살핀다' }, { id: 'p2', text: '말을 걸어 반응을 확인한다' }, { id: 'p3', text: '119·선생님께 도움을 요청한다' },
      { id: 'p4', text: '할 수 있는 처치를 하며 곁에 있는다' }, { id: 'p5', text: '구급대·보건 선생님께 상황을 전한다' }];
    const CALL = [{ id: 'q1', text: '어디인지(위치) 말하기' }, { id: 'q2', text: '무슨 일인지(상황) 말하기' }, { id: 'q3', text: '다친 사람 상태 말하기' }, { id: 'q4', text: '안내를 따르며 먼저 끊지 않기' }];
    const PLAN = [
      { id: 'k1', text: '다가가기 전에 주변 위험 살피기', ok: true }, { id: 'k2', text: '119에 위치부터 또렷이 말하기', ok: true },
      { id: 'k3', text: '장갑이나 비닐로 손 가리기', ok: true }, { id: 'k4', text: '보호자·보건 선생님께 알리기', ok: true },
      { id: 'k5', text: '상담요원 안내를 끝까지 듣기', ok: true }, { id: 'k6', text: '다친 사람에게 말 걸어 안심시키기', ok: true },
      { id: 't1', text: '아파하면 집에 있는 약 먹이기' }, { id: 't2', text: '사진부터 찍어 단톡방에 올리기' }];

    ALL.push(
      M('intro.first-choice', {
        title: '계단 사고 첫 장면 갈림길', method: '사고 첫 장면 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림길 한 번만 함께 고르고 결과를 읽어 준다.', base: '시연으로 두 번째 갈림길까지 가 보고 다른 길의 결과와 견준다.', challenge: '끝 장면에서 원칙 카드(현장 안전) 가운데 근거를 골라 말한다.' },
        intro: {
          teacher: '"친구가 넘어졌을 때 가장 먼저 할 일은 일으켜 세우는 일일까요?" 계단 장면을 띄우고 시연 단추로 \'주변을 먼저 안전하게\' 길이 골라지는 모습을 보인다. "빨리 일으켜야 착한 친구"라는 말이 나오면 "계단 위에서 친구들이 계속 뛰어 내려오면 도우러 간 나는 어떻게 될까요?"라고 되묻는다. 오늘은 응급처치가 치료가 아니라 도움이 올 때까지 안전하게 돕는 일이라는 것을 원칙으로 정리한다고 밝힌다.',
          student: '계단 장면에서 먼저 할 일을 골라 보고, 고른 길이 서진이와 나에게 어떤 결과를 주는지 짝에게 한 줄로 말해요.',
          demo: DEMO_DIL('계단 아래 첫 장면', STAIR, [['safe', 'tell']], STAIR_R),
          art: { draw: 'a paper-cut school staircase with a student sitting at the bottom holding an ankle, a classmate kneeling beside and raising a hand to stop others running down', banner: '먼저 무엇을 할까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '서진은 가상 인물이다. 학생에게 다친 일을 묻지 않는다.',
      }),
      M('intro.sample-data', {
        title: '목격자 행동 예시 그래프', method: '예시 자료로 보는 목격자 행동', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 값이 보이는 판으로 가장 많은 행동을 읽는다.', base: '값을 숨긴 막대를 눈금으로 읽는다.', challenge: '그래프에서 생각할 점(지켜보기만 한 까닭) 한 가지를 골라 말한다.' },
        intro: {
          teacher: '"이 막대그래프는 수업용으로 지어낸 가상 학급 설문이에요. 사고를 본 사람이 가장 많이 한 행동은 무엇일까요?" 시연 단추로 가장 긴 막대가 골라지는 모습을 보인다. "지켜보던 사람은 나쁜 사람"이라는 말에는 "무엇을 해야 할지 몰랐다면, 무엇을 알면 움직일 수 있었을까요?"라고 되묻는다. 실제 통계가 아니라는 점을 화면 제목으로 먼저 짚는다.',
          student: '가상 설문 그래프에서 가장 많은 행동을 찾고, 지켜보기만 한 사람이 도움을 요청하려면 무엇을 알아야 할지 한 가지 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '사고를 본 사람의 행동(가상 설문, 실제 통계 아님)', unit: '명', xLabel: '행동', yLabel: '응답 수', data: WIT, question: '가장 많은 행동은?', choices: WIT.map((d) => d[0]), showValues: true }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut bar chart on a classroom board with three bars, students looking at it and one student raising a hand', banner: '가장 많은 행동은?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.case-steps', {
        title: '사례 행동 차례와 빠진 단계', method: '사례 장면의 행동 차례 분석', tool: 'story', minutes: 15,
        levels: { easy: '카드 4장(반응 확인 카드 없음)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 차례로 놓고, 가상 사례에서 빠진 단계를 골라 담는다.', challenge: '빠진 단계를 고른 뒤, 잘못된 순서마다 생길 결과 카드를 짝 짓는다(함정 카드 포함).' },
        activity: {
          title: '사례 행동 차례와 빠진 단계', tool: 'story',
          teacher: '"다친 사람을 보면 처치부터 할까요, 신고부터 할까요?" 카드를 놓을 때마다 앞 단계를 건너뛰면 무엇이 위험해지는지 한 사람씩 말하게 한다. "처치를 잘하면 신고는 안 해도 된다"는 학생에게 "응급처치는 치료를 끝내는 일일까요, 도움이 올 때까지 잇는 일일까요?"라고 되묻는다. 마지막 카드(상황 전하기)가 왜 필요한지도 짚는다.',
          task: '가상 사례의 행동 카드를 위험 확인→신고→처치→인계 차례로 놓고, 사례에서 빠진 단계를 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('운동장에서 친구가 넘어져 못 일어나요. 행동 카드 5장을 차례로 놓으세요.', STEP5, { title: '운동장 사례' }),
              OB('운동장에서 친구가 넘어져 못 일어나요. 행동 카드 4장을 차례로 놓으세요.', pickCards(STEP5, ['p1', 'p3', 'p4', 'p5']), { title: '운동장 사례' })),
            IT(PB('가상 사례: 민우는 넘어진 친구를 보자 곧바로 다가가 처치하고, 선생님께 알렸다. 민우가 건너뛴 단계를 골라 담으세요.', '건너뛴 단계', [
              { id: 'p1', text: '주변이 안전한지 살핀다', ok: true }, { id: 'p3', text: '119·선생님께 도움을 요청한다' }, { id: 'p4', text: '할 수 있는 처치를 하며 곁에 있는다' }]),
              null,
              MB('잘못된 순서마다 생길 수 있는 결과를 이어 보세요(어울리지 않는 카드는 남겨요).', [['주변 확인 없이 다가가기', '돕는 사람도 다칠 수 있다'], ['신고 없이 처치만 하기', '구급대가 늦게 출발한다'], ['상황을 전하지 않기', '구급대가 다시 처음부터 살핀다']], ['아무 일도 생기지 않는다'], { title: '순서가 틀리면' })),
            IT(OB('과학실에서 친구가 어지럽다며 주저앉았어요. 행동 카드를 차례로 놓으세요.', [
              { id: 'g1', text: '실험 기구·불을 치워 주변을 안전하게' }, { id: 'g2', text: '"괜찮아?" 하고 말을 건다' }, { id: 'g3', text: '선생님께 바로 알린다' }, { id: 'g4', text: '편히 앉혀 곁에 있는다' }], { title: '과학실 사례' }, [{ id: 'g5', text: '물과 약을 찾아 먹인다' }]),
              OB('과학실에서 친구가 어지럽다며 주저앉았어요. 카드 3장을 차례로 놓으세요.', [
                { id: 'g1', text: '실험 기구·불을 치워 주변을 안전하게' }, { id: 'g3', text: '선생님께 바로 알린다' }, { id: 'g4', text: '편히 앉혀 곁에 있는다' }], { title: '과학실 사례' }),
              null, { conclude: '응급처치는 위험 확인→신고→처치→인계 차례로 도움이 올 때까지 잇는 일이에요. 약을 함부로 먹이지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '다친 사람을 보았을 때 가장 먼저 할 일은?', options: ['처치부터 한다', '주변이 안전한지 살핀다', '사진을 찍는다'], answer: '주변이 안전한지 살핀다' }] },
        notes: '사례 인물(민우)은 가상이다. 실제로 다쳤던 일을 발표시키지 않는다.',
      }),
      M('activity.call-roleplay', {
        title: '119 신고 역할극과 기록', method: '119 신고 말하기 역할극', tool: 'timer', minutes: 15,
        levels: { easy: '신고 카드 3장(위치·상황·상태)을 차례로 놓는다.', base: '신고 카드 4장(안내 따르기 포함)을 놓고 짝과 역할극을 한 뒤 걸린 시간을 적고 스스로 점검한다.', challenge: '마지막 문항에서 위치 설명이 어려운 장소(공원 산책로)로 바꿔 역할극을 하고 점검 항목 하나를 더 표시한다.' },
        activity: {
          title: '119 신고 역할극과 기록', tool: 'timer',
          teacher: '"\'빨리 와 주세요!\'만 말하고 끊으면 구급대는 어디로 가야 할까요?" 짝이 신고자와 상담요원을 맡아 카드 차례대로 말하게 한다. "위치를 몰라도 전화하면 찾아온다"는 학생에게 "큰 건물 안이라면 몇 층 어디인지까지 알 수 있을까요?"라고 되묻는다. 상담요원이 끊으라고 할 때까지 끊지 않는다는 점을 짚고, 역할극에는 실제 주소 대신 가상 장소를 쓰게 한다.',
          task: '119 신고 카드를 말할 차례로 놓고, 짝과 신고 역할극을 한 뒤 걸린 시간을 적고 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '119 신고에서 말할 내용을 차례대로 놓으세요.', toolOptions: { title: '119 신고 차례', cards: [CALL[2].text, CALL[0].text, CALL[3].text, CALL[1].text] }, target: { order: CALL.map((c) => c.text) } },
              { prompt: '119 신고에서 먼저 말할 세 가지를 차례대로 놓으세요.', toolOptions: { cards: [CALL[2].text, CALL[0].text, CALL[1].text] }, target: { order: CALL.slice(0, 3).map((c) => c.text) } }),
            { prompt: '짝과 신고자·상담요원을 나눠 맡아, 가상 장소(○○중학교 체육관)로 신고 역할극을 하고 표시하세요.', free: true, toolOptions: { doneLabel: '짝과 신고 역할극을 해 보았어요' } },
            { prompt: '역할극에서 신고를 마칠 때까지 걸린 시간을 역할을 바꿔 두 번 재어 적으세요(빠르기보다 또렷함이 먼저예요).', toolOptions: { title: '신고 역할극 기록', fields: [{ label: '1번째 역할극', unit: '초', step: 1 }, { label: '2번째 역할극', unit: '초', step: 1 }], stopwatch: true }, target: { records: true } },
            IT({ prompt: '내 신고 역할극을 스스로 점검해 표시하세요.', toolOptions: { title: '신고 점검' }, target: { selfCheck: ['위치를 건물·층까지 말했다', '다친 사람 상태를 말했다', '상담요원이 끊을 때까지 기다렸다'] } },
              null,
              { prompt: '공원 산책로처럼 주소를 모르는 곳으로 바꿔 역할극을 하고 점검하세요.', target: { selfCheck: ['위치를 건물·층까지 말했다', '다친 사람 상태를 말했다', '상담요원이 끊을 때까지 기다렸다', '주소 대신 주변 건물·표지판을 말했다'] } },
              { conclude: '신고는 위치→상황→상태 차례로 또렷이 말하고, 상담요원 안내를 따르며 먼저 끊지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 장소로 119 신고 내용을 써요.', columns: ['차례', '내가 할 말'], cells: [['위치', ''], ['상황', ''], ['상태', '']], answer: '건물·층·주변 표지 / 무슨 일이 났는지 / 반응·움직일 수 있는지' }] },
        notes: '역할극에는 실제 집 주소·전화번호를 쓰지 않는다. 실제 119에 장난 전화를 걸지 않도록 미리 말한다.',
      }),
      M('activity.rule-web', {
        title: '응급처치 원칙과 근거 잇기', method: '원칙과 근거 잇기', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 2개(현장 안전·신고)에 근거 카드를 잇고 행동 카드 4장을 나눈다.', base: '가지 4개(현장 안전·신고·감염 예방·보호자 연락)에 근거 카드를 잇고 행동 카드 8장을 나눈다.', challenge: '마지막 문항에서 두 원칙이 부딪히는 상황 카드를 골라 담는다.' },
        activity: {
          title: '응급처치 원칙과 근거 잇기', tool: 'mindmap',
          teacher: '"장갑을 끼는 것은 나를 지키는 일일까요, 다친 사람을 지키는 일일까요?" 가지마다 근거를 이을 때 그 원칙이 누구를 지키는지 말하게 한다. "현장이 위험해도 먼저 다가가야 용감하다"는 학생에게 "도우러 간 사람이 다치면 도움이 필요한 사람은 몇 명이 될까요?"라고 되묻는다. 원칙마다 근거 카드에 \'근거\'라는 말을 붙여 읽게 한다.',
          task: '응급처치 원칙 가지마다 알맞은 근거를 잇고, 행동 카드를 원칙별로 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('원칙 가지마다 알맞은 근거 카드를 이어 보세요.', [['현장 안전', '돕는 사람이 다치면 도울 수 없다'], ['신고', '전문 도움이 빨리 출발한다'], ['감염 예방', '피나 침이 손에 닿지 않게 한다'], ['보호자 연락', '병력·복용약을 아는 사람이 온다']], ['응급처치로 치료를 끝낼 수 있다'], { topic: '응급처치 원칙', hints: ['원칙마다 그 원칙을 지키는 까닭(근거)을 떠올려요.'] }),
              MB('원칙 가지 두 개에 알맞은 근거 카드를 이어 보세요.', [['현장 안전', '돕는 사람이 다치면 도울 수 없다'], ['신고', '전문 도움이 빨리 출발한다']], [], { topic: '응급처치 원칙' })),
            IT(SB('행동 카드를 원칙 가지에 나누세요.', ['현장 안전', '신고', '감염 예방', '보호자 연락'], [
              { id: 'a1', text: '찻길이면 차가 오는지 먼저 본다', to: '현장 안전' }, { id: 'a2', text: '깨진 유리를 치우고 다가간다', to: '현장 안전' },
              { id: 'b1', text: '건물 이름과 층을 말한다', to: '신고' }, { id: 'b2', text: '상담요원 안내대로 한다', to: '신고' },
              { id: 'c1', text: '처치 전 장갑이나 비닐을 낀다', to: '감염 예방' }, { id: 'c2', text: '처치 뒤 손을 비누로 씻는다', to: '감염 예방' },
              { id: 'd1', text: '담임·보건 선생님께 알린다', to: '보호자 연락' }, { id: 'd2', text: '보호자께 연락해 달라고 부탁한다', to: '보호자 연락' }], { topic: '응급처치 원칙' }),
              SB('행동 카드 4장을 원칙 가지에 나누세요.', ['현장 안전', '신고'], [
                { id: 'a1', text: '찻길이면 차가 오는지 먼저 본다', to: '현장 안전' }, { id: 'a2', text: '깨진 유리를 치우고 다가간다', to: '현장 안전' },
                { id: 'b1', text: '건물 이름과 층을 말한다', to: '신고' }, { id: 'b2', text: '상담요원 안내대로 한다', to: '신고' }], { topic: '응급처치 원칙' })),
            IT(PB('응급처치로 내가 할 수 있는 일만 골라 담으세요.', '내가 할 수 있는 일', [
              { id: 'e1', text: '도움을 부르고 곁에 있기', ok: true }, { id: 'e2', text: '배운 대로 상처를 천으로 누르기', ok: true },
              { id: 'e3', text: '아파하면 집에 있는 약 먹이기' }, { id: 'e4', text: '뼈가 어긋나 보이면 맞춰 보기' }, { id: 'e5', text: '말을 걸어 안심시키기', ok: true }], { topic: '응급처치 원칙' }),
              null,
              PB('두 원칙이 부딪혀 먼저 무엇을 할지 따져야 하는 상황 카드를 골라 담으세요.', '원칙이 부딪히는 상황', [
                { id: 'f1', text: '찻길에 쓰러진 사람, 차가 계속 지나감', ok: true }, { id: 'f2', text: '상처를 누를 장갑이 없음', ok: true },
                { id: 'f3', text: '교실에서 친구가 넘어져 무릎이 아픔' }, { id: 'f4', text: '혼자인데 신고와 처치를 같이 해야 함', ok: true }], { topic: '응급처치 원칙' }),
              { conclude: '응급처치는 현장 안전·신고·감염 예방·보호자 연락을 함께 지키는 일이고, 치료를 끝내는 일이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '응급처치 원칙 하나를 골라, 그 원칙을 지키는 근거를 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '응급처치의 뜻에 맞는 말에 ○ 해요.', options: ['도움이 올 때까지 돕는 일', '치료를 끝내는 일'], answer: '도움이 올 때까지 돕는 일' }] },
      }),
      M('activity.call-script', {
        title: '119 신고 대본 쓰기', method: '신고 대본 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀("여기는 ___입니다. ___이 다쳤습니다. 지금 ___") 빈칸을 채워 대본을 쓴다.', base: '주어진 상황의 신고 대본을 다섯 문장 안팎으로 쓰고 기준 3개(위치 구체성·상태 설명·끊지 않기)를 점검한다.', challenge: '마지막 문항에서 주소를 모르는 장소(등산로 입구)로 바꿔 대본을 고쳐 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '119 신고 대본 쓰기', tool: 'rubric-writing',
          teacher: '"\'학교인데요, 친구가 다쳤어요\'와 \'○○중학교 본관 2층 음악실 앞이고, 친구가 넘어져 일어나지 못해요\' 가운데 구급대가 바로 찾아올 수 있는 말은 무엇일까요?" 두 문장을 견주어 읽은 뒤 대본을 쓰게 한다. "대본은 짧을수록 좋다"는 학생에게 짧아도 위치와 상태는 빠지면 안 된다고 말해 준다. 대본에는 실제 이름·주소·전화번호를 쓰지 않게 한다.',
          task: '가상 상황의 119 신고 대본을 쓰고, 위치·상태·끊지 않기 기준으로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('가상 상황의 119 신고 대본을 쓰세요: ○○중학교 체육관에서 친구가 넘어져 일어나지 못한다.',
              { topic: '○○중학교 체육관에서 친구가 넘어져 일어나지 못해요. 119 신고 대본을 쓰세요.', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 6, title: '119 신고 대본' },
              ['위치를 건물·층까지 썼다', '다친 사람의 상태를 썼다', '안내를 따르고 끊지 않겠다고 썼다'],
              { prompt: '틀을 따라 체육관 상황의 신고 대본을 쓰세요.', starter: '여기는 ___입니다. ___이 다쳤습니다. 지금 ___. 안내해 주시는 대로 하겠습니다.', toolOptions: { minSentences: 3 } }),
            RW('가상 상황의 119 신고 대본을 쓰세요: 학교 앞 문구점 안에서 어른 한 분이 갑자기 주저앉아 말을 잘 못 한다.',
              { topic: '학교 앞 문구점 안에서 어른이 갑자기 주저앉아 말을 잘 못 해요. 119 신고 대본을 쓰세요.', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 6, title: '119 신고 대본' },
              ['위치를 가게 이름·주변 건물로 썼다', '다친 사람의 상태를 썼다', '안내를 따르고 끊지 않겠다고 썼다'],
              { prompt: '틀을 따라 문구점 상황의 신고 대본을 쓰세요.', starter: '여기는 ___ 앞 ___입니다. 어른 한 분이 ___. 안내해 주시는 대로 하겠습니다.', toolOptions: { minSentences: 3 } }),
            RW('신고하는 동안 곁의 친구에게 할 부탁을 두 문장으로 쓰세요(누구에게 무엇을).',
              { topic: '신고하는 동안 곁에 있는 친구 두 명에게 각각 할 부탁을 두 문장으로 쓰세요.', minChars: 20, maxChars: 160, minSentences: 2, maxSentences: 3, title: '친구에게 부탁하기' },
              ['부탁할 사람을 콕 집어 썼다', '할 일을 하나씩 나눠 썼다', '짧고 또렷하게 썼다'],
              { prompt: '틀을 따라 친구에게 할 부탁을 쓰세요.', starter: '___야, ___ 해 줘. ___야, ___ 해 줘.' },
              { prompt: '등산로 입구처럼 주소를 모르는 곳으로 바꿔 신고 대본과 부탁을 함께 쓰고 점검하세요.', toolOptions: { topic: '등산로 입구에서 친구가 넘어져 일어나지 못해요. 주소를 모를 때의 신고 대본과 곁의 친구에게 할 부탁을 쓰세요.', minSentences: 3, maxSentences: 6, maxChars: 300 }, add: ['주소 대신 표지판·눈에 띄는 것을 썼다'] },
              { conclude: '좋은 신고 대본에는 찾아올 수 있는 위치, 다친 사람 상태, 안내 따르기가 들어가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 신고 대본에 들어간 것에 표시해요.', options: ['건물·층까지 위치', '다친 사람 상태', '안내 따르기'] }] },
      }),
      M('wrap.confidence', {
        title: '도울 수 있다는 자신감 눈금', method: '행동할 자신감 눈금과 이유', tool: 'emotion', minutes: 9,
        levels: { easy: '눈금 3칸에서 자신감을 고른다.', base: '눈금 5칸에서 자신감을 고르고, 그 까닭을 한 줄 쓴다.', challenge: '눈금 5칸을 고른 뒤 자신감을 높일 방법을 묻는 질문에 답하고, 교사가 방법 하나를 더 말하게 한다.' },
        wrap: {
          teacher: '"지금 응급 상황을 만나면 \'내가 도울 수 있다\'는 마음은 얼마나 되나요?" 눈금을 고르게 한 뒤 맞고 틀린 답이 없다고 먼저 말한다. "나는 아무것도 못 해"라는 학생에게 "오늘 배운 것 가운데 \'도움 부르기\'는 할 수 있나요?"라고 되묻는다. 신고·곁에 있기만으로도 도울 수 있다는 점을 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '응급 상황을 만나면 나는 도울 수 있다', feeling: '걱정', steps: 5, scaleLabels: { 1: '전혀 아니다', 5: '아주 그렇다' } }, prompt: '"응급 상황에서 내가 도울 수 있다"는 마음의 크기를 골라요.', target: { level: 'any' }, difficulty: 0.1 },
              { prompt: '세 칸 눈금에서 내 자신감을 골라요.', toolOptions: { steps: 3, scaleLabels: { 1: '아직 어렵다', 3: '할 수 있다' } } }),
            { type: 'choice', prompt: '응급 상황에서 처치를 잘 몰라도 할 수 있는 도움은?', options: ['아무것도 하지 않는다', '119·선생님께 알리고 곁에 있는다', '배우지 않은 처치를 해 본다'], answer: 1, difficulty: 0.15, explain: '도움을 부르고 곁에 있는 것도 응급처치의 시작이에요.' },
            { type: 'short', prompt: '내 자신감을 한 칸 더 높이려면 무엇을 연습하면 좋을지 써요.' },
          ],
        },
        worksheet: {
          title: '나는 도울 수 있을까',
          items: [
            { type: 'table', prompt: '내 자신감의 크기와 까닭을 적어요.', columns: ['크기(1~5)', '까닭'], cells: [['', '']] },
            { type: 'check', prompt: '지금 내가 할 수 있는 것에 표시해요.', options: ['주변 위험 살피기', '119에 위치 말하기', '친구에게 콕 집어 부탁하기', '곁에서 말 걸기'] },
          ],
        },
      }),
      M('wrap.plan-check', {
        title: '나만의 응급 대응 점검표', method: '응급 대응 점검표 만들기', tool: 'kitchen', minutes: 9,
        levels: { easy: '항목 4개 가운데 맞는 것을 고른다(함정 없음).', base: '항목 8개(함정 2개 포함)에서 맞는 6개를 고른다.', challenge: '6개를 고른 뒤 가방에 넣을 카드 한 장으로 줄여 쓴다(활동지).' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 내 가방 속 점검표에 꼭 넣을 것은 무엇일까요?" 항목을 한 줄씩 읽고 맞는 것만 고르게 한다. "약을 먹이면 빨리 낫는다"는 말에는 "그 사람이 어떤 약을 먹으면 안 되는지 우리가 알 수 있을까요?"라고 되묻는다. 점검표에는 이름·전화번호 같은 개인정보를 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '나의 응급 대응 점검표', items: strip(PLAN) }, prompt: '응급 대응 점검표에 넣을 항목만 골라 표시해요.', target: { checklist: PLAN.filter((c) => c.ok).map((c) => c.id) }, difficulty: 0.2 },
              { prompt: '점검표에 넣을 항목 네 개를 표시해요.', toolOptions: { items: strip(PLAN.slice(0, 4)) }, target: { checklist: ['k1', 'k2', 'k3', 'k4'] } }),
            { type: 'choice', prompt: '현장이 위험할 때(찻길 위) 알맞은 행동은?', options: ['바로 뛰어들어 돕는다', '안전한 곳에서 119에 알리고 차를 살핀다', '그냥 지나간다'], answer: 1, difficulty: 0.2, explain: '돕는 사람의 안전이 먼저예요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '가방 속 응급 대응 카드',
          items: [
            { type: 'table', prompt: '단계마다 할 일을 한 가지씩 써요.', columns: ['단계', '할 일'], cells: [['현장 안전', ''], ['신고', ''], ['처치', ''], ['인계', '']], answer: '주변 위험 살피기 / 위치·상황·상태 말하기 / 장갑 끼고 배운 처치·곁에 있기 / 구급대·보건 선생님께 상황 전하기' },
            { type: 'short', prompt: '가방에 넣을 카드 한 장에 쓸 한 줄 다짐을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 심폐소생술·AED 실습과 자기 점검 (saf-firstaid.m.cpr-practice) ====
  {
    const M = MK('cpr-practice', [8]);
    const AED = [{ id: 'd1', text: '전원 켜기' }, { id: 'd2', text: '패드 두 장을 그림대로 붙이기' }, { id: 'd3', text: '분석하는 동안 모두 떨어지기' }, { id: 'd4', text: '충격이 필요하다고 하면 버튼 누르기' }, { id: 'd5', text: '바로 가슴 압박 다시 하기' }];
    const SWAP = ['옆에서 준비 자세로 기다리기', '"하나, 둘, 셋, 교대" 외치기', '멈춤 없이 바로 이어 누르기'];
    const CPR_SAFE = ['마네킹을 평평한 바닥에 두었다', '손을 씻거나 소독했다', '둘레에 걸려 넘어질 물건이 없다'];
    const MALL = { text: '쇼핑몰 통로에서 어른 한 분이 갑자기 쓰러졌다. 둘레 사람들은 멈춰 서서 지켜보기만 한다. 바닥은 평평하고 오가는 차는 없다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'film', text: '휴대전화로 영상을 찍는다', result: '영상만 늘고 아무도 다가가지 않는다.', impact: [{ who: '쓰러진 사람', text: '도움이 늦어진다', tone: -1 }], why: '찍는 동안 생존 사슬의 첫 고리가 끊겨요.', ending: '아무도 다가가지 않았어요.' },
      { id: 'check', text: '주변을 살핀 뒤 어깨를 두드리며 "괜찮으세요?" 묻는다', result: '대답도 움직임도 없다.', impact: [{ who: '쓰러진 사람', text: '반응 없음을 빨리 알게 된다', tone: 1 }], end: '반응이 없다는 것을 알았어요.',
        next: { text: '둘레 사람들은 여전히 서로 쳐다보기만 한다.', ask: '도움을 어떻게 부를까?', choices: [
          { id: 'shout', text: '"누가 119 좀 불러 주세요!"라고 외친다', result: '모두 누군가 하겠지 하고 머뭇거린다.', impact: [{ who: '쓰러진 사람', text: '신고가 늦어진다', tone: -1 }], why: '여럿에게 외치면 서로 미뤄요. 한 사람을 콕 집어 부탁해요.', end: '아무도 신고하지 않았어요.' },
          { id: 'point', text: '"빨간 옷 입은 분 119에, 파란 가방 분은 AED를 가져와 주세요"라고 콕 집는다', result: '두 사람이 곧바로 움직인다.', impact: [{ who: '쓰러진 사람', text: '신고와 AED가 함께 출발한다', tone: 1 }], end: '신고와 AED를 콕 집어 부탁했어요.',
            next: { text: '호흡을 보니 숨을 쉬지 않거나 헐떡이듯 이상하게 쉰다. 119 상담요원이 전화로 안내를 시작한다.', ask: '이제 무엇을 할까?', choices: [
              { id: 'press', text: '가슴 정중앙에 두 손을 겹쳐 바로 가슴 압박을 시작한다', result: '구급대가 올 때까지 피가 계속 돈다.', impact: [{ who: '쓰러진 사람', text: '생존 사슬이 이어진다', tone: 1 }] },
              { id: 'wait', text: '구급대가 올 때까지 곁에서 기다린다', result: '그동안 피가 돌지 않는다.', impact: [{ who: '쓰러진 사람', text: '귀한 시간이 흐른다', tone: -1 }], why: '119가 오는 동안 옆 사람이 압박해야 사슬이 끊기지 않아요.' }] } }] } },
      { id: 'leave', text: '어른이 하겠지 하고 자리를 뜬다', result: '모두 같은 생각을 하며 머뭇거린다.', impact: [{ who: '쓰러진 사람', text: '아무도 다가가지 않는다', tone: -1 }], why: '학생도 신고·AED 가져오기·압박을 할 수 있어요.', ending: '자리를 떠 아무도 돕지 않았어요.' }] };
    const MALL_R = [{ id: 'r1', text: '콕 집어 부탁해야 신고와 AED가 빨리 온다' }, { id: 'r2', text: '구급대가 오는 동안 압박해야 피가 돈다' },
      { id: 'r3', text: '심폐소생술은 어른만 할 수 있다', why: '가슴압박소생술은 배우지 않은 사람도 하도록 권해요. 학생도 함께할 수 있어요.' }, { id: 'r4', text: 'AED는 위험하니 쓰지 않는다', why: 'AED가 스스로 분석해 필요할 때만 충격 버튼을 켜요.' }];
    const AEDS = { text: '압박을 이어 가는 사이 부탁받은 친구가 AED를 들고 왔다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'stop', text: '압박을 멈추고 모두 AED 상자를 들여다본다', result: '압박이 멈춘 채 시간이 흐른다.', impact: [{ who: '쓰러진 사람', text: '그동안 피가 돌지 않는다', tone: -1 }], why: '한 사람은 계속 누르고 다른 사람이 AED를 켜요.', ending: '압박이 멈췄어요.' },
      { id: 'keep', text: '한 사람은 계속 누르고 다른 사람이 전원을 켠다', result: '음성 안내가 나온다.', impact: [{ who: '쓰러진 사람', text: '압박이 끊기지 않는다', tone: 1 }], end: '압박을 이어 가며 AED를 켰어요.',
        next: { text: '패드 두 장을 붙이자 "분석 중입니다. 환자에게서 떨어지세요"라는 안내가 나온다.', ask: '이제는?', choices: [
          { id: 'touch', text: '멈추면 안 되니 분석 중에도 계속 누른다', result: 'AED가 리듬을 다시 읽으려 한다.', impact: [{ who: '쓰러진 사람', text: '분석이 늦어진다', tone: -1 }], why: '누르거나 만지면 리듬을 바르게 읽지 못해요.' },
          { id: 'clear', text: '"모두 물러나세요!" 외치고 손을 뗀다', result: 'AED가 분석을 마친다.', impact: [{ who: '쓰러진 사람', text: '알맞은 판단을 받는다', tone: 1 }], end: '분석하는 동안 모두 떨어졌어요.',
            next: { text: '"충격이 필요합니다"라는 안내와 함께 충격 버튼이 깜빡인다.', ask: '어떻게 할까?', choices: [
              { id: 'resume', text: '모두 떨어진 것을 보고 버튼을 누른 뒤 바로 압박을 다시 한다', result: '구급대가 올 때까지 사슬이 이어진다.', impact: [{ who: '쓰러진 사람', text: '피가 다시 돈다', tone: 1 }] },
              { id: 'watch', text: '버튼을 누른 뒤 구급대가 올 때까지 지켜본다', result: '압박이 멈춘 채 기다린다.', impact: [{ who: '쓰러진 사람', text: '피가 돌지 않는다', tone: -1 }], why: '충격 뒤에는 바로 압박을 다시 해요.' }] } }] } },
      { id: 'fear', text: '전기가 무서워 AED를 옆에 둔다', result: 'AED가 쓰이지 않는다.', impact: [{ who: '쓰러진 사람', text: '도움 하나를 놓친다', tone: -1 }], why: 'AED는 스스로 분석해 필요할 때만 충격 버튼을 켜요.', ending: 'AED를 쓰지 않았어요.' }] };
    const AEDS_R = [{ id: 'r1', text: '분석 중에는 아무도 몸에 닿지 않아야 한다' }, { id: 'r2', text: '충격 뒤에는 바로 압박을 다시 한다' }, { id: 'r3', text: '충격 뒤에는 쉬면서 지켜본다', why: '멈춘 동안 피가 돌지 않아요.' }];
    const HARD = [['반응 확인', 4], ['119 신고 부탁', 6], ['가슴 압박 깊이', 12], ['교대', 10], ['AED 패드', 8]];

    ALL.push(
      M('intro.broken-chain', {
        title: '사례에서 끊긴 생존 사슬', method: '사례에서 끊긴 사슬 찾기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 카드 4장을 읽어 주며 끊긴 고리 한 장을 함께 고른다.', base: '카드 5장을 넘겨 보며 끊긴 고리를 고른다.', challenge: '끊긴 고리를 고른 뒤 그 고리를 잇는 행동을 한 줄로 말한다.' },
        intro: {
          teacher: '"이 사례에서 사슬이 끊어진 곳은 어디일까요?" 가상 사례 카드 다섯 장을 넘겨 보이고 시연 단추로 \'모두 누군가 신고했겠지 하고 기다린다\' 카드가 담기는 모습을 보인다. "구급대가 오면 다 해결된다"는 말에는 "구급대가 오는 동안 쓰러진 사람의 몸에서는 무슨 일이 일어날까요?"라고 되묻는다. 생존 사슬은 주변 안전·반응 확인→신고·AED 요청→호흡 확인→가슴 압박→AED→구급대로 이어진다고 밝힌다.',
          student: '가상 사례 카드에서 생존 사슬이 끊긴 장면을 고르고, 그 장면에서 누가 무엇을 했으면 이어졌을지 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '사슬이 끊긴 곳', title: '역 대합실 가상 사례', shuffle: false, cards: [
            { id: 'c1', text: '주변을 살피고 쓰러진 사람에게 다가간다', motif: 'star' }, { id: 'c2', text: '어깨를 두드려도 반응이 없다', motif: 'cloud' },
            { id: 'c3', text: '모두 누군가 신고했겠지 하고 기다린다', motif: 'leaf' }, { id: 'c4', text: '한참 뒤에야 119에 신고한다', motif: 'house' }, { id: 'c5', text: '구급대가 도착한다', motif: 'sun' }] }, sequence: [{ pick: ['c3'] }] },
          art: { draw: 'a paper-cut station waiting hall with a person lying on the floor and a ring of bystanders hesitating, a paper chain with one broken link above them', banner: '사슬은 어디서 끊겼을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이다. 부상·피 묘사 없이 장면을 말로만 보인다.',
      }),
      M('intro.heart-organ', {
        title: '심장이 멈추면 생기는 일', method: '심장이 멈추면 몸에 생기는 일', tool: 'body', minutes: 6,
        levels: { easy: '교사가 심장·뇌 두 기관을 짚어 보인다.', base: '시연으로 심장·폐·뇌를 차례로 찾고 하는 일을 읽는다.', challenge: '세 기관을 찾은 뒤 가슴 압박이 하는 일을 한 줄로 말한다.' },
        intro: {
          teacher: '"심장이 멈추면 가장 먼저 곤란해지는 곳은 어디일까요?" 종이 몸에서 심장·폐·뇌를 차례로 찾는 시연을 보인다. "심장이 멈추면 끝이라 할 수 있는 게 없다"는 말에는 "손으로 심장을 대신 눌러 피를 돌게 할 수 있다면 어떨까요?"라고 되묻는다. 가슴 압박은 멈춘 심장 대신 피를 뇌로 보내는 일이라고 짚는다.',
          student: '종이 몸에서 심장·폐·뇌를 찾아보고, 심장이 멈추면 뇌에 무슨 일이 생길지, 가슴 압박은 무엇을 대신하는지 짝에게 말해요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '폐', '심장', '간', '위'], jobs: { 심장: '피를 온몸으로 보내요', 폐: '숨으로 산소를 받아들여요', 뇌: '산소가 든 피를 받아야 일해요' }, names: true }, sequence: [{ sel: '심장' }, { sel: '폐' }, { sel: '뇌' }] },
          art: { draw: 'a paper-cut human body outline with the heart, lungs and brain highlighted and soft arrows showing blood flowing from the heart to the brain', banner: '심장이 멈추면?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.interval', {
        title: '압박·교대 구간 타이머 연습', method: '구간 타이머로 압박·교대 연습', tool: 'timer', minutes: 15,
        levels: { easy: '타이머가 우리 반 연습 약속(20초·쉬기 0초)에 거의 맞춰져 있어 되풀이 횟수만 4번으로 맞춘다.', base: '교대 차례 카드와 안전 점검을 한 뒤, 타이머 구간(20초·0초·4번)을 처음부터 직접 맞춘다.', challenge: '교대 신호 카드 차례와 함께 모둠 전체 연습 시간 80초에 맞게 구간을 스스로 짠다(쉬기 0초).' },
        activity: {
          title: '압박·교대 구간 타이머 연습', tool: 'timer',
          teacher: '"교대할 때 1초라도 멈추면 그동안 피는 어떻게 될까요?" 교대 차례를 정한 뒤 우리 반 연습 약속으로 타이머를 맞추고 마네킹으로 돌아가며 누르게 한다. "갈비뼈가 다칠까 봐 살살 눌러야 한다"는 학생에게 공식 지침은 성인 가슴을 깊이 약 5cm, 분당 100~120회로 누르고 누른 뒤 가슴이 다 올라오게 한다고 알려 준다. "20초는 우리 반 연습 약속이고, 실제 교대 주기는 공식 지침 수치를 따라요"라고 분명히 말해 준다.',
          task: '안전 점검과 교대 차례를 정하고, 우리 반 연습 약속으로 구간 타이머를 맞춰 마네킹으로 압박·교대를 연습해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '실습 전 안전 점검을 모두 표시하고, 교대 차례 카드를 놓으세요.', toolOptions: { title: '교대 준비', cards: [SWAP[1], SWAP[2], SWAP[0]], safety: CPR_SAFE }, target: { safety: true, order: SWAP } },
            IT({ prompt: '우리 반 연습 약속(공식 교대 주기 아님): 한 사람이 20초 누르고 쉬지 않고 바로 교대, 4명. 타이머를 맞추세요.', toolOptions: { title: '압박·교대 연습 타이머', plan: { work: 30, rest: 10, rounds: 3 } }, target: { plan: { work: 20, rest: 0, rounds: 4 } } },
              { prompt: '타이머가 20초·쉬기 0초로 맞춰져 있어요. 4명이 돌아가도록 되풀이 횟수만 맞추세요.', toolOptions: { plan: { work: 20, rest: 0, rounds: 3 } }, target: { plan: { work: 20, rest: 0, rounds: 4 } } },
              { prompt: '모둠 전체 연습을 80초로, 쉬기 없이 바로 교대하도록 구간을 짜고 교대 신호 카드도 놓으세요.', toolOptions: { cards: [SWAP[2], SWAP[0], SWAP[1]], plan: { work: 30, rest: 10, rounds: 3 }, showTotal: true }, target: { total: 80, plan: { rest: 0 }, order: SWAP } }),
            { prompt: '맞춘 타이머로 마네킹 압박과 교대를 모둠이 돌아가며 해 보고 표시하세요.', free: true, toolOptions: { doneLabel: '마네킹으로 압박·교대를 해 보았어요' } },
            { prompt: '짝이 교대할 때 손이 떨어진 시간을 초시계로 재어 두 번 적으세요(짧을수록 좋아요).', toolOptions: { title: '교대 멈춤 기록', fields: [{ label: '1번째 교대', unit: '초', step: 1 }, { label: '2번째 교대', unit: '초', step: 1 }], stopwatch: true }, target: { records: true } },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '성인 가슴 압박은 깊이 약 ___cm, 분당 100~120회로 하고, 누른 뒤에는 가슴이 다 올라오게 해요.', answer: '5' }] },
        notes: '연습은 마네킹으로만 한다. 사람(짝)의 가슴을 누르지 않는다. 20초·4명·80초는 연습용 약속이고 실제 교대 주기는 최신 공식 지침으로 안내한다(사람 확인).',
      }),
      M('activity.aed-steps', {
        title: 'AED 사용 순서 놓기', method: 'AED 사용 순서 놓기', tool: 'kitchen', minutes: 15,
        levels: { easy: '카드 4장(전원·패드·분석·충격)을 차례로 놓는다.', base: '카드 5장(바로 압박 다시 포함)을 차례로 놓고 충격이 필요 없을 때의 차례도 놓는다.', challenge: '단계마다 외칠 말을 짝 짓는 문항이 더해진다(함정 카드 포함).' },
        activity: {
          title: 'AED 사용 순서 놓기', tool: 'kitchen',
          teacher: '"AED가 사람을 다치게 할까 봐 무섭다면, 누가 충격을 줄지 정할까요?" 카드를 놓은 뒤 AED가 스스로 심장 리듬을 분석해 필요할 때만 충격 버튼을 켠다는 점을 짚는다. "분석 중에도 압박을 계속해야 한다"는 학생에게 "누가 몸을 누르고 있으면 기계가 리듬을 바르게 읽을 수 있을까요?"라고 되묻는다. 충격 뒤에는 바로 압박을 다시 한다는 점을 강조한다.',
          task: 'AED 사용 카드를 차례로 놓고, 충격이 필요 없을 때와 단계마다 외칠 말까지 정리해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('AED 사용 카드 5장을 차례대로 놓으세요.', AED, { title: 'AED 사용 순서', autoMotif: false, groups: false }),
              OB('AED 사용 카드 4장을 차례대로 놓으세요.', AED.slice(0, 4), { title: 'AED 사용 순서', autoMotif: false, groups: false })),
            IT(OB('AED가 "충격이 필요하지 않습니다"라고 할 때의 차례를 놓으세요(쓰지 않을 카드는 남겨요).', [AED[0], AED[1], AED[2], AED[4]], { title: '충격이 필요 없을 때', autoMotif: false, groups: false }, [AED[3]]),
              OB('AED가 "충격이 필요하지 않습니다"라고 할 때의 차례를 놓으세요.', [AED[0], AED[1], AED[2], AED[4]], { title: '충격이 필요 없을 때', autoMotif: false, groups: false })),
            IT(MB('단계마다 그렇게 하는 까닭을 이어 보세요.', [['분석하는 동안 떨어지기', '누르거나 만지면 리듬을 바르게 못 읽는다'], ['충격 버튼', 'AED가 필요하다고 할 때만 누른다'], ['바로 압박 다시', '멈춘 동안 피가 돌지 않는다']], [], { autoMotif: false, groups: false }),
              null,
              MB('단계마다 외칠 말을 이어 보세요(어울리지 않는 카드는 남겨요).', [['분석하는 동안 떨어지기', '"모두 물러나세요!"'], ['충격 버튼', '"충격합니다, 떨어지세요!"'], ['바로 압박 다시', '"압박 다시 시작!"']], ['"잠깐 쉬었다 할게요"'], { autoMotif: false, groups: false })),
            IT(PB('AED에 대한 바른 말만 골라 담으세요.', 'AED 바른 말', [
              { id: 'm1', text: 'AED가 스스로 리듬을 분석한다', ok: true }, { id: 'm2', text: '음성 안내를 따라 하면 된다', ok: true },
              { id: 'm3', text: '충격은 내가 판단해 아무 때나 누른다' }, { id: 'm4', text: 'AED가 오면 압박은 그만둔다' }, { id: 'm5', text: '충격 뒤에는 바로 압박을 다시 한다', ok: true }], { autoMotif: false, groups: false }),
              null, null, { conclude: 'AED는 전원→패드 두 장→분석 중 떨어지기→필요할 때만 충격→바로 압박 다시 차례로, 음성 안내를 따라 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: 'AED가 심장 리듬을 분석하는 동안 할 일은?', options: ['가슴 압박을 계속한다', '모두 몸에서 떨어진다', '충격 버튼을 누른다'], answer: '모두 몸에서 떨어진다' }] },
        notes: '패드 자리와 음성 안내 문구는 학교에 있는 AED 기종의 그림·안내를 함께 보인다(사람 확인).',
      }),
      M('activity.crowd-dilemma', {
        title: '쇼핑몰 구경꾼 갈림길', method: '망설이는 구경꾼 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번(반응 확인·도움 부르기)까지 가 보고 결과를 본다(쓰러진 장면·AED 도착 두 상황).', base: '갈림길 3번(호흡 확인 뒤 압박)까지 끝까지 간다.', challenge: '갈림길 3번까지 간 뒤 결과를 가른 선택의 근거 카드를 고른다(함정 근거 포함).' },
        activity: {
          title: '쇼핑몰 구경꾼 갈림길', tool: 'dilemma',
          teacher: '"\'누가 119 좀 불러 주세요!\'라고 외치면 몇 명이 전화할까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "학생은 어른을 도울 수 없다"는 말에는 "콕 집어 부탁하기, AED 가져오기는 누가 할 수 있을까요?"라고 되묻는다. 119 상담요원이 전화로 압박 방법을 안내해 준다는 점도 짚는다.',
          task: '쇼핑몰에서 사람이 쓰러진 상황에서 길을 골라 결과를 따라가고, 역할 지정과 AED 찾기가 결과를 어떻게 바꾸는지 견줘요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL23({ easy: '쇼핑몰에서 사람이 쓰러졌어요. 두 번 골라 결과를 보세요.', base: '쇼핑몰에서 사람이 쓰러졌어요. 세 번 골라 끝까지 가 보세요.', challenge: '쇼핑몰에서 사람이 쓰러졌어요. 세 번 골라 끝까지 가고, 결과를 가른 근거를 고르세요.' },
              '쇼핑몰 통로', MALL, [['check', 'point', 'press']], MALL_R, ['r1', 'r2']),
            DIL23({ easy: 'AED가 도착했어요. 두 번 골라 결과를 보세요.', base: 'AED가 도착했어요. 세 번 골라 끝까지 가 보세요.', challenge: 'AED가 도착했어요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              'AED 도착', AEDS, [['keep', 'clear', 'resume']], AEDS_R, ['r1', 'r2']),
            { prompt: '짝과 "누가 119 좀!"과 "빨간 옷 입은 분, 119에!"가 왜 다른 결과를 낳는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쓰러진 사람을 본 구경꾼이 여럿일 때 도움을 부르는 말을 한 문장으로 써요.' }] },
        notes: '갈림길 장면은 가상이다. 실제로 본 응급 상황을 발표시키지 않는다.',
      }),
      M('activity.self-review', {
        title: '실습 자기 평가 글', method: '실습 자기 평가 글', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '기준 2개(순서·안전 확인)로 실습 소감을 쓰고 점검한다.', base: '기준 3개(순서·교대·안전 확인)로 점검한다.', challenge: '기준 3개에 다음 실습 목표 한 문장을 더 써서 점검한다.' },
        activity: {
          title: '실습 자기 평가 글', tool: 'rubric-writing',
          teacher: '"오늘 내가 실제로 잘한 것과 아직 어려운 것은 무엇이었나요?" 기준표를 한 줄씩 읽고 내가 한 것만 표시하게 한다. "다 잘했다"고만 쓰는 학생에게 "교대할 때 손이 떨어진 시간은 몇 초였나요?"라고 되묻는다. 친구를 평가하는 글이 아니라 내 실습을 돌아보는 글이라고 말해 주고 이름은 쓰지 않게 한다.',
          task: '오늘 심폐소생술·AED 실습을 돌아보며 잘한 점과 고칠 점을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('가슴 압박 실습에서 잘한 점과 고칠 점을 세 문장으로 쓰세요.',
              { topic: '오늘 마네킹 가슴 압박 실습에서 잘한 점과 고칠 점을 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 5, title: '가슴 압박 돌아보기', starter: '나는 ___을 잘했다. 그런데 ___은 어려웠다.' },
              ['압박 전 단계(안전·반응·신고)를 차례로 했는지 썼다', '교대할 때 멈춤이 짧았는지 썼다', '실습 전 안전 점검을 했는지 썼다'],
              { prompt: '기준 두 개로 가슴 압박 실습을 돌아보는 글을 쓰세요.', starter: '나는 ___을 잘했다. 그런데 ___은 어려웠다.', checks: ['압박 전 단계(안전·반응·신고)를 차례로 했는지 썼다', '실습 전 안전 점검을 했는지 썼다'] },
              { prompt: '기준 세 개에 다음 실습 목표 한 문장을 더해 쓰세요.', add: ['다음 실습 목표를 한 문장으로 썼다'] }),
            RW('AED 연습에서 잘한 점과 고칠 점을 세 문장으로 쓰세요.',
              { topic: '오늘 연습용 AED 실습에서 잘한 점과 고칠 점을 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 5, title: 'AED 돌아보기' },
              ['AED 순서(전원·패드·분석·충격·압박)를 지켰는지 썼다', '분석·충격 때 떨어졌는지 썼다', '충격 뒤 바로 압박했는지 썼다'],
              { prompt: '기준 두 개로 AED 실습을 돌아보는 글을 쓰세요.', starter: 'AED를 쓸 때 나는 ___. 다음에는 ___.', checks: ['AED 순서(전원·패드·분석·충격·압박)를 지켰는지 썼다', '분석·충격 때 떨어졌는지 썼다'] },
              { prompt: '기준 세 개에 다음 AED 연습 목표 한 문장을 더해 쓰세요.', add: ['다음 실습 목표를 한 문장으로 썼다'] }),
            RW('모둠 역할(이끄는 사람·119·AED·교대 압박) 실습을 돌아보는 글을 쓰세요.',
              { topic: '모둠이 역할을 나눠 한 실습에서 내 역할과 모둠이 잘한 점·고칠 점을 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 5, title: '모둠 역할 돌아보기' },
              ['내가 맡은 역할을 썼다', '역할을 나눠 좋았던 점을 썼다', '모둠이 고칠 점을 썼다'],
              { prompt: '기준 두 개로 모둠 역할 실습을 돌아보는 글을 쓰세요.', starter: '나는 ___ 역할을 맡았다. 역할을 나누니 ___.', checks: ['내가 맡은 역할을 썼다', '역할을 나눠 좋았던 점을 썼다'] },
              { prompt: '기준 세 개에 다음 모둠 실습 목표 한 문장을 더해 쓰세요.', add: ['다음 실습 목표를 한 문장으로 썼다'] },
              { conclude: '실습을 기준에 비추어 돌아보면 다음 연습에서 고칠 한 가지가 또렷해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '오늘 실습에서 내가 한 것에 표시해요.', options: ['주변 안전·반응 확인', '콕 집어 신고 부탁', '교대 신호 외치기', 'AED 분석 중 떨어지기'] }] },
      }),
      M('wrap.chain-review', {
        title: '생존 사슬 정리 생각 그물', method: '생존 사슬 정리', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 3개(알아차리기·신고, 가슴 압박, AED)에 행동 카드 6장을 잇는다.', base: '가지 4개(구급대 인계 포함)에 행동 카드 8장을 잇는다.', challenge: '함정 카드 2장이 섞인 판에서 잇고, 우리 학교에서 약한 고리를 짧은 글로 쓴다.' },
        wrap: {
          teacher: '"오늘 실습한 행동은 생존 사슬의 어느 고리일까요?" 가지를 다 이으면 우리 학교에서 가장 약한 고리가 어디인지 손을 들어 말하게 한다. "AED가 어디 있는지 몰라도 된다"는 말에는 "AED를 가져와 달라고 부탁받으면 어디로 뛰어갈 건가요?"라고 되묻는다. 학교 AED 자리를 함께 확인하자고 정리한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '생존 사슬', slots: ['알아차리기·신고', '가슴 압박', 'AED', '구급대 인계'], cards: [
              { id: 'a1', text: '어깨 두드리며 반응 확인' }, { id: 'a2', text: '콕 집어 119 신고 부탁' }, { id: 'b1', text: '가슴 정중앙에 두 손 깍지' }, { id: 'b2', text: '"하나, 둘, 셋, 교대"' },
              { id: 'c1', text: '패드 두 장 그림대로 붙이기' }, { id: 'c2', text: '분석 중 모두 떨어지기' }, { id: 'd1', text: '구급대가 올 때까지 압박 이어 가기' }, { id: 'd2', text: '도착한 구급대에 상황 전하기' }] },
              prompt: '생존 사슬 가지마다 오늘 실습한 행동 카드를 이어요.', target: { sort: { '알아차리기·신고': ['a1', 'a2'], '가슴 압박': ['b1', 'b2'], AED: ['c1', 'c2'], '구급대 인계': ['d1', 'd2'] } }, difficulty: 0.2 },
              { prompt: '생존 사슬 가지 세 개에 행동 카드를 이어요.', toolOptions: { slots: ['알아차리기·신고', '가슴 압박', 'AED'], cards: [{ id: 'a1', text: '어깨 두드리며 반응 확인' }, { id: 'a2', text: '콕 집어 119 신고 부탁' }, { id: 'b1', text: '가슴 정중앙에 두 손 깍지' }, { id: 'b2', text: '"하나, 둘, 셋, 교대"' }, { id: 'c1', text: '패드 두 장 그림대로 붙이기' }, { id: 'c2', text: '분석 중 모두 떨어지기' }] }, target: { sort: { '알아차리기·신고': ['a1', 'a2'], '가슴 압박': ['b1', 'b2'], AED: ['c1', 'c2'] } } },
              { toolOptions: { cards: [
                { id: 'a1', text: '어깨 두드리며 반응 확인' }, { id: 'a2', text: '콕 집어 119 신고 부탁' }, { id: 'b1', text: '가슴 정중앙에 두 손 깍지' }, { id: 'b2', text: '"하나, 둘, 셋, 교대"' },
                { id: 'c1', text: '패드 두 장 그림대로 붙이기' }, { id: 'c2', text: '분석 중 모두 떨어지기' }, { id: 'd1', text: '구급대가 올 때까지 압박 이어 가기' }, { id: 'd2', text: '도착한 구급대에 상황 전하기' },
                { id: 't1', text: '갈비뼈 걱정에 살살 누르기' }, { id: 't2', text: '분석 중에도 계속 누르기' }] } }),
            { type: 'choice', prompt: '쓰러진 사람을 보았을 때 가슴 압박보다 먼저 할 일은?', options: ['바로 세게 누른다', '주변 안전을 보고 반응을 확인한 뒤 도움을 부탁한다', 'AED가 올 때까지 기다린다'], answer: 1, difficulty: 0.2, explain: '주변 안전→반응 확인→신고·AED 요청→호흡 확인 다음에 압박해요.' },
            { type: 'short', prompt: '우리 학교에서 생존 사슬의 약한 고리는 어디이고, 어떻게 이을 수 있을지 써요.' },
          ],
        },
        worksheet: {
          title: '생존 사슬',
          items: [
            { type: 'table', prompt: '고리마다 내가 할 행동을 써요.', columns: ['고리', '행동'], cells: [['알아차리기·신고', ''], ['가슴 압박', ''], ['AED', ''], ['구급대 인계', '']], answer: '반응 확인·콕 집어 신고 / 깊이 약 5cm·분당 100~120회 / 안내 따르기·분석 중 떨어지기 / 상황 전하기' },
            { type: 'short', prompt: '우리 학교 AED가 있는 곳을 확인해 써요.' },
          ],
        },
      }),
      M('wrap.class-chart', {
        title: '실습 점검 결과 그래프', method: '우리 반 자기 점검 결과 읽기', tool: 'chart', minutes: 9,
        levels: { easy: '눈금 한 칸이 1명인 판에서 값이 보이게 막대를 채운다.', base: '눈금 한 칸이 2명인 판에서 막대를 채운다.', challenge: '눈금 한 칸이 2명인 판에서 막대를 채우고, 다음 출구 질문에서 고른 연습 계획의 근거를 교사에게 말한다.' },
        wrap: {
          teacher: '"우리 반이 가장 어려워한 단계는 어디일까요?" 표의 값(가상 예시, 실제 반 결과로 바꿔 써도 된다)으로 막대를 채우게 한 뒤 가장 긴 막대를 함께 읽는다. "어려운 단계는 건너뛰면 된다"는 말에는 "사슬에서 한 고리를 빼면 어떻게 될까요?"라고 되묻는다. 그래프로 다음 연습에서 집중할 단계를 고르게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '실습 단계별 "어려웠다" 응답(가상 예시)', unit: '명', xLabel: '단계', yLabel: '응답 수', data: HARD, showTable: true, max: 14, scale: 2 }, prompt: '표를 보고 단계별 "어려웠다" 응답 막대를 완성해요.', target: { build: true }, difficulty: 0.2 },
              { prompt: '눈금 한 칸이 1명인 판에서 표를 보고 막대를 완성해요.', toolOptions: { scale: 1, showValues: true } }),
            { type: 'choice', prompt: '이 그래프로 볼 때 다음 연습에서 가장 먼저 집중할 단계는?', options: ['반응 확인', '가슴 압박 깊이', '119 신고 부탁'], answer: 1, difficulty: 0.2, explain: '"어려웠다" 응답이 가장 많은 단계부터 연습해요.' },
            { type: 'short', prompt: '내가 다음 실습에서 집중할 단계와 그 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 실습 결과',
          items: [
            { type: 'table', prompt: '단계별 "어려웠다" 응답 수를 그래프에서 읽어 써요(가상 예시).', columns: ['단계', '응답 수'], cells: [['가슴 압박 깊이', ''], ['교대', '']], answer: '12명, 10명' },
            { type: 'short', prompt: '다음 연습 계획을 한 문장으로 써요.' },
          ],
        },
        notes: '그래프 값은 가상 예시다. 반 실습 뒤 실제 손들기 결과로 data 를 바꿔 쓸 수 있다(학생 이름은 모으지 않는다).',
      }),
    );
  }

  // ==== 9학년 · 지혈·염좌·골절 처치 (saf-firstaid.m.bleeding-fracture) ====
  {
    const M = MK('bleeding-fracture', [9]);
    const BLEED = [{ id: 'b1', text: '장갑이나 비닐로 손 가리기' }, { id: 'b2', text: '깨끗한 천으로 상처를 직접 누르기' }, { id: 'b3', text: '천이 젖어도 떼지 않고 덧대어 누르기' }, { id: 'b4', text: '멈추지 않으면 119·보건실에 알리기' }];
    const BTRAP = [{ id: 'x1', text: '휴지로 계속 닦아 내기' }, { id: 'x2', text: '천을 자주 떼어 상처 확인하기' }];
    const SPLINT = ['다친 팔을 움직이지 않게 받친다', '위아래 관절까지 닿게 부목을 댄다', '천으로 묶되 너무 세지 않게 한다', '삼각건으로 팔을 걸어 준다', '손가락 끝 색과 느낌을 확인한다'];
    const LEG = ['다친 다리를 그대로 둔다', '위아래 관절까지 닿게 양옆에 부목을 댄다', '여러 곳을 나눠 묶는다', '발끝 색과 느낌을 확인한다'];
    const PE = { text: '체육 시간 피구 중 친구 하율이 넘어진 뒤 팔을 감싸 쥐고 움직이지 못한다. 팔 모양이 평소와 달라 보인다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'pull', text: '팔을 잡아당겨 맞춰 본다', result: '하율이 크게 아파한다.', impact: [{ who: '하율', text: '더 다칠 수 있다', tone: -1 }], why: '골절이 의심되면 맞춰 보지 않고 움직이지 않게 해요.', end: '억지로 맞추려다 더 아파했어요.' },
      { id: 'still', text: '움직이지 말라고 하고 선생님을 부른다', result: '선생님이 오시고 경기가 멈춘다.', impact: [{ who: '하율', text: '더 움직이지 않는다', tone: 1 }], end: '움직이지 않게 하고 선생님을 불렀어요.',
        next: { text: '선생님이 보건실에 연락하는 동안 친구들이 "주물러 주면 낫는다"고 한다.', ask: '다음에는?', choices: [
          { id: 'rub', text: '팔을 주물러 준다', result: '하율이 더 아파하고 부어오른다.', impact: [{ who: '하율', text: '아픔이 커진다', tone: -1 }], why: '다친 직후에는 주무르지 않아요.' },
          { id: 'fix', text: '다친 팔을 받쳐 움직이지 않게 고정을 돕는다', result: '하율의 팔이 흔들리지 않는다.', impact: [{ who: '하율', text: '조금 편해진다', tone: 1 }], end: '팔을 고정해 흔들리지 않게 했어요.',
            next: { text: '보건 선생님이 고정을 마쳤다. 하율이 어지럽다고 하고 얼굴빛이 하얗다.', ask: '이제는?', choices: [
              { id: 'call', text: '선생님께 그대로 알려 119 판단을 돕는다', result: '선생님이 119에 신고하고 하율을 눕힌다.', impact: [{ who: '하율', text: '알맞은 도움을 받는다', tone: 1 }] },
              { id: 'walk', text: '걸어서 보건실까지 가자고 한다', result: '하율이 걷다 주저앉는다.', impact: [{ who: '하율', text: '넘어질 수 있다', tone: -1 }], why: '어지러워하면 걷게 하지 말고 선생님께 알려요.' }] } }] } },
      { id: 'game', text: '경기를 계속하고 나중에 보건실에 가라고 한다', result: '하율이 경기장에 혼자 앉아 있다.', impact: [{ who: '하율', text: '공에 또 맞을 수 있다', tone: -1 }], why: '다친 사람이 있으면 경기를 멈추고 알려요.', ending: '경기가 이어져 위험했어요.' }] };
    const PE_R = [{ id: 'r1', text: '골절이 의심되면 움직이지 않게 고정한다' }, { id: 'r2', text: '어지럽고 얼굴빛이 하야면 119 판단이 필요하다' },
      { id: 'r3', text: '주무르면 뼈가 빨리 붙는다', why: '다친 직후 주무르면 더 아프고 부을 수 있어요.' }, { id: 'r4', text: '어긋난 뼈는 바로 맞춰야 한다', why: '맞춰 보는 것은 의료진이 해요.' }];
    const ANK = { text: '점심시간 운동장에서 친구 도하가 발목을 접질려 주저앉았다. 발목이 붓기 시작했지만 조금은 움직일 수 있다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'run', text: '"괜찮아, 뛰다 보면 풀려"라며 계속 뛰게 둔다', result: '도하가 절뚝이다 다시 주저앉는다.', impact: [{ who: '도하', text: '더 붓고 아프다', tone: -1 }], why: '다친 곳은 쓰지 말고 쉬게 해요.', ending: '계속 뛰어 더 아파했어요.' },
      { id: 'rest', text: '그늘에 앉혀 쉬게 하고 선생님께 알린다', result: '도하가 앉아 숨을 고른다.', impact: [{ who: '도하', text: '더 다치지 않는다', tone: 1 }], end: '쉬게 하고 알렸어요.',
        next: { text: '옆 친구가 "따뜻한 물에 담그면 빨리 낫는대"라고 한다.', ask: '다음에는?', choices: [
          { id: 'hot', text: '따뜻한 물수건을 찾아 감싼다', result: '발목이 더 부어오른다.', impact: [{ who: '도하', text: '부기가 커진다', tone: -1 }], why: '다친 직후에는 차갑게 해요.' },
          { id: 'ice', text: '천에 싼 얼음을 대고 발을 높이 올린다', result: '부기가 덜 퍼진다.', impact: [{ who: '도하', text: '조금 편해진다', tone: 1 }], end: '차갑게 하고 높이 올렸어요.',
            next: { text: '보건 선생님이 운동장으로 오셨다.', ask: '어떻게 할까?', choices: [
              { id: 'tell', text: '다친 상황과 지금까지 한 처치를 그대로 전한다', result: '선생님이 바로 다음 처치를 정한다.', impact: [{ who: '도하', text: '알맞은 도움을 받는다', tone: 1 }] },
              { id: 'leave', text: '선생님이 오셨으니 말없이 교실로 간다', result: '선생님이 처음부터 다시 묻는다.', impact: [{ who: '도하', text: '도움이 늦어진다', tone: -1 }], why: '한 처치를 전하는 것까지가 응급처치예요.' }] } }] } }] };
    const ANK_R = [{ id: 'r1', text: '다친 직후에는 쉬게 하고 차갑게 한다' }, { id: 'r2', text: '한 처치를 전해야 다음 도움이 이어진다' }, { id: 'r3', text: '따뜻하게 하면 빨리 낫는다', why: '다친 직후 따뜻하게 하면 더 부을 수 있어요.' }];
    const CASE = [{ id: 'c1', text: '경기를 멈추고 주변 공을 치운다' }, { id: 'c2', text: '"움직이지 마" 하고 말을 건다' }, { id: 'c3', text: '체육 선생님께 바로 알린다' }, { id: 'c4', text: '다친 발목을 받쳐 움직이지 않게 한다' }, { id: 'c5', text: '보건 선생님께 상황을 전한다' }];

    ALL.push(
      M('intro.injury-parts', {
        title: '운동 중 다치기 쉬운 곳', method: '운동 중 부상 부위 고르기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 발목·무릎 두 곳을 짚어 보인다.', base: '시연으로 발목·무릎·손목·어깨 네 곳을 고른다.', challenge: '네 곳을 고른 뒤 부위마다 생길 수 있는 부상 이름(염좌·골절 의심)을 말한다.' },
        intro: {
          teacher: '"축구나 농구를 하다 다치기 쉬운 곳은 어디일까요?" 종이 몸에서 발목·무릎·손목·어깨가 골라지는 시연을 보인다. "삐었으면 그냥 뛰면 낫는다"는 말에는 "다친 곳을 계속 쓰면 어떻게 될까요?"라고 되묻는다. 오늘은 다쳤을 때 더 다치지 않게 돕는 처치를 연습한다고 밝힌다. 다친 일을 발표시키지 않는다.',
          student: '종이 몸에서 운동하다 다치기 쉬운 곳을 골라 보고, 그곳을 다치지 않으려면 운동 전에 무엇을 할지 한 가지 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'], names: true }, sequence: [{ parts: ['발목', '무릎', '손목', '어깨'] }] },
          art: { draw: 'a paper-cut gym with a basketball hoop and a soccer goal, a paper body outline with ankle, knee, wrist and shoulder softly highlighted', banner: '다치기 쉬운 곳은?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '몸 그림에 손·발 칸이 없어 손목·발목으로 짚는다.',
      }),
      M('intro.injury-sort', {
        title: '부상 장면 세 바구니', method: '부상 장면 분류', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 출혈·염좌 두 바구니만 함께 나눈다.', base: '시연으로 장면 카드를 출혈·염좌·골절 의심 세 바구니에 나눈다.', challenge: '헷갈리는 장면(부었지만 움직일 수 있음)의 판단 근거를 말한다.' },
        intro: {
          teacher: '"이 장면은 어느 바구니일까요? 무엇을 보고 그렇게 생각했나요?" 장면 카드를 세 바구니에 나누는 시연을 보인다. "부었으면 모두 골절"이라는 말에는 "부었지만 움직일 수 있는 것과, 모양이 평소와 다르고 움직이지 못하는 것은 같을까요?"라고 되묻는다. 바구니는 판단을 돕는 이름이고, 진단은 의료진이 한다고 짚는다.',
          student: '부상 장면 카드를 출혈·염좌·골절 의심 바구니에 나눠 보고, 고른 까닭(보이는 신호)을 짝에게 한 낱말로 말해요.',
          demo: { tool: 'sortboard', options: { slots: ['출혈', '염좌', '골절 의심'], cards: [
            { id: 's1', text: '넘어져 무릎 상처에서 피가 난다' }, { id: 's2', text: '발목을 접질려 붓고 디디면 아프다' },
            { id: 's3', text: '팔 모양이 평소와 다르고 못 움직인다' }, { id: 's4', text: '종이에 손가락을 베였다' }] }, sequence: [{ sort: { 출혈: ['s1', 's4'], 염좌: ['s2'], '골절 의심': ['s3'] } }] },
          art: { draw: 'a paper-cut shelf with three paper baskets labeled with simple symbols, small scene cards of a scraped knee, a twisted ankle and an arm sling waiting to be sorted', banner: '어느 바구니일까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '장면은 말로만 보이고 부상 그림은 그리지 않는다.',
      }),
      M('activity.bleed-order', {
        title: '지혈 순서 놓기', method: '지혈 순서 놓기', tool: 'kitchen', minutes: 15,
        levels: { easy: '카드 3장(손 가리기·직접 누르기·덧대기)을 차례로 놓는다.', base: '카드 4장(119·보건실 알리기 포함)을 차례로 놓는다.', challenge: '하지 말 일 카드 2장이 섞인 판에서 4장만 차례로 놓는다.' },
        activity: {
          title: '지혈 순서 놓기', tool: 'kitchen',
          teacher: '"상처를 누르던 천이 젖으면 떼고 새 천으로 바꿀까요?" 카드를 놓은 뒤 천을 떼면 다시 처음부터 눌러야 한다는 점을 짚는다. "휴지로 계속 닦아 내면 깨끗해진다"는 학생에게 "닦는 동안 누르는 손은 어디에 있나요?"라고 되묻는다. 장갑을 끼는 까닭이 나와 다친 사람을 함께 지키는 감염 예방이라는 것도 말해 준다.',
          task: '지혈 카드를 차례대로 놓고, 할 일과 하지 말 일을 나누고, 준비물마다 까닭을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('지혈 카드 4장을 차례대로 놓으세요.', BLEED, { title: '지혈 순서', autoMotif: false, groups: false }),
              OB('지혈 카드 3장을 차례대로 놓으세요.', BLEED.slice(0, 3), { title: '지혈 순서', autoMotif: false, groups: false }),
              OB('지혈 카드 4장만 차례대로 놓으세요(하지 말 일 카드는 남겨요).', BLEED, { title: '지혈 순서', autoMotif: false, groups: false }, BTRAP)),
            IT(SB('카드를 할 일과 하지 말 일로 나누세요.', ['할 일', '하지 말 일'], [
              { id: 'h1', text: '깨끗한 천으로 꾹 누른다', to: '할 일' }, { id: 'h2', text: '처치 뒤 손을 비누로 씻는다', to: '할 일' }, { id: 'h3', text: '보건 선생님께 알린다', to: '할 일' },
              { id: 'n1', text: '휴지로 계속 닦아 낸다', to: '하지 말 일' }, { id: 'n2', text: '맨손으로 상처를 만진다', to: '하지 말 일' }, { id: 'n3', text: '젖은 천을 떼고 새로 누른다', to: '하지 말 일' }], { autoMotif: false, groups: false }),
              SB('카드 4장을 할 일과 하지 말 일로 나누세요.', ['할 일', '하지 말 일'], [
                { id: 'h1', text: '깨끗한 천으로 꾹 누른다', to: '할 일' }, { id: 'h3', text: '보건 선생님께 알린다', to: '할 일' },
                { id: 'n1', text: '휴지로 계속 닦아 낸다', to: '하지 말 일' }, { id: 'n2', text: '맨손으로 상처를 만진다', to: '하지 말 일' }], { autoMotif: false, groups: false })),
            IT(MB('준비물·행동마다 그렇게 하는 까닭을 이어 보세요.', [['장갑이나 비닐', '나와 다친 사람의 감염을 막는다'], ['깨끗한 천', '상처가 더러워지지 않게 한다'], ['덧대어 누르기', '눌러 둔 곳을 다시 건드리지 않는다']], ['보기에 깔끔하다'], { autoMotif: false, groups: false }),
              null, null, { conclude: '지혈은 손을 가리고, 깨끗한 천으로 직접 누르고, 젖어도 떼지 않고 덧대며, 멈추지 않으면 119·보건실에 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '누르던 천이 젖으면 떼지 않고 위에 새 천을 ___ 눌러요.', answer: '덧대어' }] },
        notes: '연습은 짝의 팔에 깨끗한 천을 대는 시늉으로만 한다. 상처·피 그림은 보이지 않는다.',
      }),
      M('activity.pe-dilemma', {
        title: '체육 시간 골절 의심 갈림길', method: '체육 시간 골절 의심 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번(움직이지 않게·고정)까지 가 보고 결과를 본다(팔·발목 두 상황).', base: '갈림길 3번(어지러움에 대한 판단)까지 끝까지 간다.', challenge: '갈림길 3번까지 간 뒤 결과를 가른 근거 카드를 고른다(함정 근거 포함).' },
        activity: {
          title: '체육 시간 골절 의심 갈림길', tool: 'dilemma',
          teacher: '"팔 모양이 평소와 달라 보이면 우리가 맞춰 볼까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "주무르면 피가 돌아 낫는다"는 학생에게 "다친 직후 주무르면 아픔과 부기는 어떻게 될까요?"라고 되묻는다. 골절이 의심되면 움직이지 않게 하고, 어지러움·얼굴빛 같은 신호는 그대로 어른께 알린다는 점을 짚는다.',
          task: '체육 시간 친구가 넘어져 팔을 움직이지 못하는 상황에서 길을 골라 결과를 따라가고, 고정과 신고 판단을 견줘요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL23({ easy: '친구가 넘어져 팔을 움직이지 못해요. 두 번 골라 결과를 보세요.', base: '친구가 넘어져 팔을 움직이지 못해요. 세 번 골라 끝까지 가 보세요.', challenge: '친구가 넘어져 팔을 움직이지 못해요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '체육관 피구 시간', PE, [['still', 'fix', 'call']], PE_R, ['r1', 'r2']),
            DIL23({ easy: '친구가 발목을 접질렸어요. 두 번 골라 결과를 보세요.', base: '친구가 발목을 접질렸어요. 세 번 골라 끝까지 가 보세요.', challenge: '친구가 발목을 접질렸어요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '운동장 발목', ANK, [['rest', 'ice', 'tell']], ANK_R, ['r1', 'r2']),
            { prompt: '짝과 "맞춰 보기"와 "움직이지 않게 고정하기"가 왜 다른 결과를 낳는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '골절이 의심될 때 알맞은 처치는?', options: ['맞춰 본다', '움직이지 않게 고정하고 알린다', '주무른다'], answer: '움직이지 않게 고정하고 알린다' }] },
        notes: '하율은 가상 인물이다. 부상 그림 없이 말로만 장면을 보인다.',
      }),
      M('activity.splint-lab', {
        title: '부목·삼각건 짝 실습', method: '부목·삼각건 짝 실습', tool: 'timer', minutes: 15,
        levels: { easy: '안전 점검 뒤 팔 고정 차례 카드 3장을 놓고 시범을 따라 한다.', base: '팔 고정 차례 카드 5장을 놓고 짝과 번갈아 실습한 뒤 스스로 점검한다.', challenge: '마지막 문항이 다리 고정 계획 차례 놓기로 바뀐다.' },
        activity: {
          title: '부목·삼각건 짝 실습', tool: 'timer',
          teacher: '"부목은 다친 곳에만 짧게 대면 될까요, 위아래 관절까지 닿게 대야 할까요?" 차례 카드를 놓은 뒤 신문지 부목과 삼각건으로 짝의 팔을 고정하게 한다. "꽉 묶을수록 잘 고정된다"는 학생에게 "너무 세게 묶으면 손가락 끝 색은 어떻게 될까요?"라고 되묻는다. 실습 중 짝이 불편하다고 하면 바로 멈추게 한다.',
          task: '실습 전 안전 점검을 하고 팔 고정 차례를 정한 뒤, 신문지 부목과 삼각건으로 짝과 번갈아 실습하고 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '실습 전 안전 점검을 모두 표시하고, 팔 고정 차례 카드를 놓으세요.', toolOptions: { title: '팔 고정 차례', cards: [SPLINT[2], SPLINT[0], SPLINT[4], SPLINT[1], SPLINT[3]], safety: ['짝에게 실습해도 되는지 물었다', '부목 끝이 날카롭지 않다', '불편하면 바로 멈추기로 했다'] }, target: { safety: true, order: SPLINT } },
              { prompt: '안전 점검을 표시하고, 팔 고정 차례 세 장을 놓으세요.', toolOptions: { cards: [SPLINT[2], SPLINT[0], SPLINT[1]] }, target: { safety: true, order: SPLINT.slice(0, 3) } }),
            { prompt: '시범을 본 뒤 짝과 번갈아 신문지 부목과 삼각건으로 팔을 고정해 보고 표시하세요.', free: true, toolOptions: { doneLabel: '짝과 번갈아 고정해 보았어요' } },
            IT({ prompt: '내 고정 실습을 스스로 점검해 표시하세요.', toolOptions: { title: '고정 실습 점검' }, target: { selfCheck: ['부목이 위아래 관절까지 닿았다', '너무 세게 묶지 않았다', '손가락 끝 색을 확인했다'] } },
              { prompt: '내 고정 실습 두 가지를 스스로 점검해 표시하세요.', target: { selfCheck: ['부목이 위아래 관절까지 닿았다', '너무 세게 묶지 않았다'] } },
              { prompt: '다리를 다쳤을 때 고정 계획 카드를 차례로 놓으세요.', toolOptions: { title: '다리 고정 계획', cards: [LEG[2], LEG[0], LEG[3], LEG[1]] }, target: { order: LEG } },
              { conclude: '고정은 다친 곳을 움직이지 않게 하는 일이에요. 위아래 관절까지 대고, 너무 세지 않게 묶고, 끝의 색을 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '부목을 묶은 뒤 손가락 끝 색을 확인하는 까닭을 한 문장으로 써요.' }] },
        notes: '실습은 다치지 않은 짝의 팔로만, 신문지 부목·삼각건으로 한다. 다리 고정은 계획만 세우고 실제로 하지 않는다.',
      }),
      M('activity.myth-web', {
        title: '염좌·골절 처치 오해와 근거', method: '염좌 처치 오해와 근거', tool: 'mindmap', minutes: 15,
        levels: { easy: '오해 가지 2개(주무르기·열 찜질)에 바른 처치 근거 카드를 잇는다.', base: '오해 가지 4개에 근거 카드를 잇고, 처치 카드를 오해·바른 처치로 나눈다.', challenge: '마지막 문항에서 처치 정보를 확인할 믿을 만한 곳을 골라 담는다(함정 포함).' },
        activity: {
          title: '염좌·골절 처치 오해와 근거', tool: 'mindmap',
          teacher: '"삔 발목에는 따뜻한 찜질이 좋을까요, 차갑게 하는 것이 좋을까요?" 오해 가지마다 근거 카드를 이을 때 그 근거가 무엇을 막는지 말하게 한다. "할머니가 늘 주물러 주셨다"는 학생에게 "다친 직후와 며칠 지난 뒤는 같은 때일까요?"라고 되묻는다. 처치 정보는 누리집 글보다 공식 안내처에서 확인한다는 점을 짚는다.',
          task: '염좌·골절 처치 오해 가지마다 바른 처치의 근거를 잇고, 처치 카드를 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('오해 가지마다 바른 처치의 근거를 이어 보세요.', [['삔 곳은 주무른다', '다친 직후엔 쉬게 해야 덜 붓는다'], ['열 찜질을 한다', '천에 싼 얼음으로 차갑게 한다'], ['어긋난 뼈를 맞춰 본다', '움직이지 않게 고정하고 맡긴다'], ['다친 다리를 내려 둔다', '심장보다 높이 올리면 덜 붓는다']], ['참고 계속 뛰면 낫는다'], { topic: '오해와 바른 처치', hints: ['오해마다 바른 처치의 근거를 떠올려요.'] }),
              MB('오해 가지 두 개에 바른 처치의 근거를 이어 보세요.', [['삔 곳은 주무른다', '다친 직후엔 쉬게 해야 덜 붓는다'], ['열 찜질을 한다', '천에 싼 얼음으로 차갑게 한다']], [], { topic: '오해와 바른 처치' })),
            IT(SB('처치 카드를 오해와 바른 처치로 나누세요.', ['오해', '바른 처치'], [
              { id: 'o1', text: '얼음을 맨살에 바로 댄다', to: '오해' }, { id: 'o2', text: '아파도 참고 경기를 계속한다', to: '오해' }, { id: 'o3', text: '부은 곳을 세게 주무른다', to: '오해' },
              { id: 'v1', text: '다친 곳을 쉬게 한다', to: '바른 처치' }, { id: 'v2', text: '얼음은 천에 싸서 댄다', to: '바른 처치' }, { id: 'v3', text: '다친 곳을 높이 올려 둔다', to: '바른 처치' }], { topic: '오해와 바른 처치' }),
              SB('처치 카드 4장을 오해와 바른 처치로 나누세요.', ['오해', '바른 처치'], [
                { id: 'o1', text: '얼음을 맨살에 바로 댄다', to: '오해' }, { id: 'o3', text: '부은 곳을 세게 주무른다', to: '오해' },
                { id: 'v1', text: '다친 곳을 쉬게 한다', to: '바른 처치' }, { id: 'v2', text: '얼음은 천에 싸서 댄다', to: '바른 처치' }], { topic: '오해와 바른 처치' })),
            IT(PB('다친 뒤 바로 할 수 있는 바른 처치만 골라 담으세요.', '바로 할 처치', [
              { id: 'p1', text: '움직이지 않게 받친다', ok: true }, { id: 'p2', text: '보건 선생님께 알린다', ok: true }, { id: 'p3', text: '따뜻한 물에 담근다' }, { id: 'p4', text: '천에 싼 얼음을 댄다', ok: true }], { topic: '오해와 바른 처치' }),
              null,
              PB('처치 정보를 확인할 믿을 만한 곳만 골라 담으세요.', '믿을 만한 곳', [
                { id: 'q1', text: '보건 선생님', ok: true }, { id: 'q2', text: '소방청·질병관리청 안내', ok: true }, { id: 'q3', text: '조회 수 많은 짧은 영상' }, { id: 'q4', text: '대한적십자사 교육 자료', ok: true }, { id: 'q5', text: '친구가 들은 이야기' }], { topic: '오해와 바른 처치' }),
              { conclude: '다친 직후에는 쉬게 하고, 천에 싼 얼음으로 차갑게, 높이 올려 두고, 뼈는 맞춰 보지 않고 고정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오해와 바른 처치를 써요.', columns: ['오해', '바른 처치'], cells: [['주무르기', ''], ['열 찜질', '']], answer: '쉬게 하기 / 천에 싼 얼음으로 차갑게 하기' }] },
      }),
      M('wrap.club-guide', {
        title: '운동부 부상 처치 안내 글', method: '운동부 안전 안내 글 쓰기', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀을 따라 네 문장 안팎으로 쓴다.', base: '여섯 문장 안팎으로 쓰고 기준 3개(정확·순서·신고 기준)를 점검한다.', challenge: '여섯 문장에 그림으로 보일 장면 설명 한 문장을 더해 쓰고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"운동부 친구가 경기 중 발목을 접질리면, 이 안내 글만 보고 바르게 처치할 수 있을까요?" 안내 글에는 할 일과 차례, 언제 어른·119를 부를지가 들어가야 한다고 짚는다. "겁을 주면 조심한다"는 학생에게 겁주는 말보다 할 일이 오래 남는다고 말해 준다. 실제 운동부 친구의 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '운동부 친구들에게 줄 염좌·골절 의심 처치 안내 글을 여섯 문장 안팎으로 쓰세요.', minChars: 60, maxChars: 360, minSentences: 5, maxSentences: 7, title: '운동부 처치 안내' },
              prompt: '운동부 처치 안내 글을 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['처치 내용이 오늘 배운 것과 맞다', '할 일을 차례대로 썼다', '어른·119를 부를 때를 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 네 문장 안팎의 안내 글을 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 3, maxSentences: 5, minChars: 40, starter: '다치면 먼저 ___. 그다음 ___. ___는 하지 않아요. ___이면 선생님과 119에 알려요.' } },
              { prompt: '여섯 문장에 그림으로 보일 장면 설명을 한 문장 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 8 }, target: { selfCheck: ['처치 내용이 오늘 배운 것과 맞다', '할 일을 차례대로 썼다', '어른·119를 부를 때를 썼다', '그림으로 보일 장면을 설명했다'] } }),
            { type: 'choice', prompt: '안내 글에 넣기 가장 알맞은 문장은?', options: ['다치면 큰일 나요!', '접질리면 쉬게 하고 천에 싼 얼음으로 차갑게 해요.', '아파도 참고 뛰면 강해져요.'], answer: 1, difficulty: 0.2, explain: '할 일이 구체적으로 들어간 문장이 행동을 바꿔요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '운동부 처치 안내',
          items: [
            { type: 'short', prompt: '운동부 처치 안내 글에 넣을 첫 문장을 써요.' },
            { type: 'check', prompt: '내 안내 글을 기준표로 점검해요.', options: ['배운 처치와 맞다', '차례대로 썼다', '어른·119를 부를 때가 있다'] },
          ],
          easy: { note: '"다치면 먼저 ___. 그다음 ___." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '다치면 먼저 ___. 그다음 ___.', answer: '(예) 움직이지 않게 쉬게 하고, 천에 싼 얼음으로 차갑게 해요' }] },
        },
      }),
      M('wrap.case-rebuild', {
        title: '부상 사례 처치 차례 다시 놓기', method: '사례 재구성 차례 놓기', tool: 'story', minutes: 9,
        levels: { easy: '장면 3장을 처치가 잘된 차례로 놓는다.', base: '장면 5장을 처치가 잘된 차례로 놓는다.', challenge: '함정 장면 2장이 섞인 판에서 5장을 놓고, 처음 사례와 결과를 견주는 질문에 답한다.' },
        wrap: {
          teacher: '"처음 사례에서는 친구들이 바로 일으켜 세웠지요. 처치가 잘된 차례로 다시 놓으면 무엇이 달라질까요?" 장면을 다 놓으면 처음 사례와 결과를 견주어 말하게 한다. "빨리 보건실로 데려가는 게 최고"라는 말에는 "걷지 못하는 친구를 억지로 걷게 하면 어떻게 될까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'story', options: { mode: 'order', slots: 5, title: '농구 시간 발목 사례 다시 놓기', cards: CASE }, prompt: '농구 시간 발목을 다친 사례를 처치가 잘된 차례로 다시 놓아요.', target: { order: CASE.map((c) => c.id) }, difficulty: 0.25 },
              { prompt: '장면 3장을 처치가 잘된 차례로 놓아요.', toolOptions: { slots: 3, cards: pickCards(CASE, ['c1', 'c3', 'c4']) }, target: { order: ['c1', 'c3', 'c4'] } },
              { prompt: '함정 장면은 남기고, 장면 5장을 처치가 잘된 차례로 놓아요.', toolOptions: { cards: [...CASE, { id: 't1', text: '친구 둘이 팔을 잡고 일으켜 걷게 한다' }, { id: 't2', text: '부은 발목을 세게 주무른다' }] } }),
            { type: 'choice', prompt: '처음 사례(바로 일으켜 걷게 함)와 견주어 다시 놓은 차례의 가장 큰 차이는?', options: ['보건실에 더 빨리 간다', '다친 곳을 움직이지 않게 해 더 다치지 않는다', '경기를 계속할 수 있다'], answer: 1, difficulty: 0.25, explain: '처치는 더 다치지 않게 하는 데서 시작해요.' },
            { type: 'short', prompt: '다음에 친구가 다치면 내가 맨 먼저 할 일을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '처치 차례 다시 놓기',
          items: [
            { type: 'table', prompt: '처치가 잘된 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '경기 멈추고 주변 정리 / 말 걸기 / 선생님께 알리기' },
            { type: 'short', prompt: '처음 사례와 결과가 어떻게 달라졌는지 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
