/* 창체 안전교육 직업안전 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-job 중.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 중학교 직업안전 세 항목
 *   (1 직업 안전 문화의 필요성 / 2 산업 재해의 의미·유형과 사례별 발생 현황 / 3 안전장비의 올바른 사용방법)
 *   + 학교 안전교육 7대 표준안 직업안전(직업안전의식·예방관리: 산업재해·정리정돈·보호구). youth-work 는 research-mandatory 노동인권교육(시도 조례)에 기대며 근거가 약하다.
 * 주제 6개 = 45모듈. 7학년 safety-culture·safety-signs, 8학년 accident-types·ppe-use, 9학년 youth-work·housekeeping.
 * 사례·인물·일터·그래프 수치는 모두 지어낸 가상 자료다(가명, 화면 제목에 '가상'·'실제 통계 아님'을 밝힘). 피해 경험은 묻지 않는다.
 * 청소년 아르바이트·현장실습 맥락에서 근로 관련 수치(나이·시간·임금)와 법 조항은 근거에 없어 쓰지 않는다 — 행동(교육 받기·보호구·보고·거절·도움 요청)만 다룬다.
 * 전화번호는 쓰지 않는다(다쳤을 때 119 는 응급처치 영역 몫). 산업 재해 '현황'은 실제 수치를 쓰지 않고 교사가 최신 공식 자료로 넣는다.
 * 교구 한계로 바꾼 것: body 에 머리·손·발 칸이 없어 안전모·장갑·안전화는 말로 짚고 발목으로 대신한다(ppe-use.intro.gear-parts),
 *   표지 그림은 교구가 그리지 못해 카드에 말(색·모양)로 적고 교사가 실물 표지를 보인다(safety-signs.*), 지도는 문항마다 핀 하나다.
 *
 * 사람 확인: 근거 파일(research-*.md)에는 고시 항목 제목만 있어, 아래 수칙·분류는 공식 안내처에서 확인해야 한다.
 *   [고용노동부·안전보건공단(KOSHA)]
 *   - safety-signs.*: 안전보건표지 네 종류와 색·모양(금지 = 빨간 원과 사선, 경고 = 노란 바탕 검은 삼각 테두리, 지시 = 파란 원, 안내 = 초록 바탕 네모),
 *     카드에 든 표지 예시(출입 금지·물체 이동 금지·고압전기 경고·보안경 착용·비상구·응급구호 표지)의 이름과 쓰임.
 *   - accident-types.*: 산업 재해의 뜻, 유형 이름(떨어짐·끼임·넘어짐·부딪힘·물체에 맞음)과 유형별 예방 대책(난간·안전대, 기계 덮개·멈춘 뒤 청소, 바닥 정리·미끄럼 방지, 통로 구분),
 *     '아차사고' 낱말과 보고 내용(무엇이·어디서·어떻게·제안).
 *   - ppe-use.*: 작업별 보호구(용접 = 보안면·용접 장갑, 연마 = 보안경·방진 마스크, 소음 = 귀마개), 착용 차례(점검 → 크기 맞춤 → 끈 조이기 → 서로 확인),
 *     점검 항목(금·찢어짐·끈 풀림·크기), 회전 기계 곁에서 헐렁한 장갑·옷을 피하기.
 *   - youth-work.*·safety-culture.*: 일을 시작할 때 안전 교육·보호구·비상 연락처·다쳤을 때 보고 경로를 확인하기, 교육 없이 위험한 기계를 맡지 않고 거절·도움 요청하기,
 *     튀김기·뜨거운 기름 화상, 젖은 바닥 미끄럼, 무거운 짐 들기(무릎 굽혀 들기·나눠 들기), 배달 이동 위험. 사업주 몫(교육·보호구 제공)의 표현은 법 조항 없이 '일터가 할 일'로만 썼다.
 *   - housekeeping.*: 통로 비우기, 바닥 전선 정리, 날카로운 공구 제자리 보관(칼날 덮개·잠금 보관함), 쏟은 것 바로 닦기, 소화기·비상구 앞 비우기.
 *   [가상 수치 — 실제 통계 아님] safety-culture.intro.two-teams(두 일터 보고·사고 수), accident-types.intro.data-read(유형별 건수),
 *     youth-work.intro.example-chart(일터 위험 종류 비율). */
(function () {
  const ALL = [];
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `saf-job.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'saf-job', band: '중', topic: `saf-job.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각 ----
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 분류판(sortboard) 글 카드 모드 — mode 없이 slots·cards
  const SBB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  const KO = { autoMotif: false, groups: false };

  // ---- 갈림길(dilemma) ----
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // 쉬움 1단 · 기본 2단 · 도전 2단 + 근거
  const DIL12 = (p, title, tree, good, R, ok, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: [], compare: true }, target: { path: paths(good, 2) },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 2), reasons: R }, target: { path: paths(good, 2), reasons: ok, some: true } },
    },
  }, extra);
  // 쉬움 2단 · 기본 3단 · 도전 3단 + 근거
  const DIL23 = (p, title, tree, good, R, ok, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: [], compare: true }, target: { path: paths(good, 3) },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), reasons: [] }, target: { path: paths(good, 2) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: R }, target: { path: paths(good, 3), reasons: ok, some: true } },
    },
  }, extra);
  const DEMO_DIL = (title, tree, good, R) => ({ tool: 'dilemma', options: { title, scene: cut(tree, 2), reasons: R || [] }, sequence: [{ path: paths(good, 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  const RW = (prompt, opt, checks, easy, ch, more) => IT({ prompt, toolOptions: opt, target: { selfCheck: checks } },
    easy ? { prompt: easy.prompt, toolOptions: Object.assign({ starter: easy.starter }, easy.toolOptions || {}), target: { selfCheck: easy.checks || checks } } : null,
    ch ? { prompt: ch.prompt, toolOptions: ch.toolOptions || {}, target: { selfCheck: [...checks, ...ch.add] } } : null, more);
  const SCALE = (situation, feeling, prompt, labels) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: labels || { 1: '전혀 아니다', 5: '아주 그렇다' } }, prompt, target: { level: 'any' }, difficulty: 0.1 });

  // ==== 7학년 · 직업 안전 문화는 왜 필요한가 (saf-job.m.safety-culture) ====
  {
    const M = MK('safety-culture', [7]);
    const TEAMS = [['가 일터 아차사고 보고', 24], ['가 일터 사고', 2], ['나 일터 아차사고 보고', 3], ['나 일터 사고', 8]];
    const FIRST = { text: '방학 체험 일터 첫날, 선배 지운이 "보호 안경은 귀찮으니 쓰지 말고 빨리 끝내자"고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'skip', text: '선배 말대로 안경 없이 작업한다', result: '작은 부스러기가 눈 가까이 튄다.', impact: [{ who: '나', text: '다칠 뻔한다', tone: -1 }], why: '절차를 건너뛰면 위험이 그대로 남아요.', end: '안경 없이 해서 다칠 뻔했어요.' },
      { id: 'wear', text: '"저는 처음이라 안경을 쓸게요"라고 말하고 쓴다', result: '조금 늦지만 안전하게 작업한다.', impact: [{ who: '나', text: '눈을 지킨다', tone: 1 }], end: '안경을 쓰고 안전하게 했어요.',
        next: { text: '쉬는 시간에 지운이 "다들 안 쓰는데 너만 유난이야"라고 한다.', ask: '다음에는?', choices: [
          { id: 'tell', text: '담당자에게 다 같이 쓰자고 건의한다', result: '다음 날부터 모두 안경을 쓴다.', impact: [{ who: '동료들', text: '함께 안전해진다', tone: 1 }] },
          { id: 'take', text: '눈치가 보여 다음부터 벗는다', result: '위험한 습관이 굳는다.', impact: [{ who: '나', text: '다시 위험해진다', tone: -1 }], why: '안전 문화는 한 사람의 말에서 시작해요.' }] } },
      { id: 'quiet', text: '아무 말 없이 혼자만 몰래 쓴다', result: '나는 안전하지만 다른 사람은 그대로다.', impact: [{ who: '동료들', text: '여전히 위험하다', tone: 0 }], why: '말하지 않으면 함께 지키는 문화가 생기지 않아요.', ending: '나만 안전했어요.' }] };
    const FIRST_R = [{ id: 'r1', text: '규칙은 일을 늦추려는 것이 아니라 사람을 지킨다' }, { id: 'r2', text: '선배가 하자는 대로 해야 한다', why: '경험이 많아도 절차를 건너뛰면 위험해요.' }];
    const CASE = [{ id: 'c1', text: '바닥에 기름이 묻었지만 아무도 말하지 않는다' }, { id: 'c2', text: '한 직원이 미끄러질 뻔했지만 보고하지 않는다' },
      { id: 'c3', text: '바쁘다며 청소 규칙을 건너뛴다' }, { id: 'c4', text: '새 직원은 그 자리를 모른 채 일한다' }, { id: 'c5', text: '새 직원이 넘어져 일을 쉬게 된다' }];
    const NEAR = ['무엇이 일어날 뻔했는지', '어디서', '어떻게(무엇 때문에)', '고칠 방법 제안'];
    const RULES = [
      { id: 'k1', text: '위험을 보면 바로 말하기', ok: true }, { id: 'k2', text: '아차사고도 선생님께 알리기', ok: true }, { id: 'k3', text: '실습 전 보호구 서로 확인하기', ok: true },
      { id: 'k4', text: '모르면 하기 전에 묻기', ok: true }, { id: 'k5', text: '쓴 도구는 제자리에 두기', ok: true },
      { id: 't1', text: '빨리 끝나면 정리는 다음에 하기' }, { id: 't2', text: '작은 실수는 숨기기' }];

    ALL.push(
      M('intro.two-teams', {
        title: '두 일터 보고·사고 예시 그래프', method: '두 일터 사례 비교', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 값이 보이는 판으로 두 일터를 견준다.', base: '값을 숨긴 막대를 눈금으로 읽어 견준다.', challenge: '이 자료로 말할 수 없는 것(보고가 사고를 줄였다고 단정)을 짚어 말한다.' },
        intro: {
          teacher: '"아차사고 보고가 많은 일터와 적은 일터 가운데 사고가 적은 곳은 어디일까요?" 수업용으로 지어낸 예시 자료(실제 통계 아님)를 띄우고 시연 단추로 보고가 가장 많은 막대가 골라지는 모습을 보인다. "보고가 많으면 위험한 일터"라는 말에는 "위험을 숨기는 일터와 말하는 일터 가운데 어디가 먼저 고칠 수 있을까요?"라고 되묻는다. 두 일터 자료만으로 원인을 단정할 수는 없다는 점도 짚는다.',
          student: '예시 자료 그래프에서 두 일터의 아차사고 보고 수와 사고 수를 견주고, 보고가 많은 일터에서 무엇이 달랐을지 한 가지 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '두 일터의 보고와 사고(예시 자료, 실제 통계 아님)', unit: '건', xLabel: '일터', yLabel: '건수', data: TEAMS, question: '아차사고 보고가 가장 많은 막대는?', choices: TEAMS.map((d) => d[0]), showValues: true }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart comparing two small workshops, one with many reporting notes pinned on a board and one with an empty board', banner: '말하는 일터, 숨기는 일터', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
      }),
      M('intro.first-day', {
        title: '첫 출근 갈림길', method: '첫 출근 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림길 한 번만 함께 고르고 결과를 읽는다.', base: '시연으로 두 번째 갈림길까지 가 보고 다른 길과 견준다.', challenge: '끝 장면에서 근거 카드를 골라 그 까닭을 말한다.' },
        intro: {
          teacher: '"선배가 절차를 건너뛰자고 할 때, 처음 온 사람이 말을 꺼내기 어려운 까닭은 무엇일까요?" 첫 출근 장면을 띄우고 시연 단추로 보호 안경을 쓰고 건의하는 길을 보인다. "선배가 괜찮다면 괜찮은 것"이라는 말에는 "선배가 다치지 않은 것과 그 일이 안전한 것은 같은 말일까요?"라고 되묻는다. 안전 문화는 각자 조심하는 것에 더해 함께 말하고 지키는 일이라고 밝힌다.',
          student: '첫 출근 장면에서 나라면 어떤 길을 고를지 골라 보고, 그 선택이 나와 동료에게 어떤 결과를 주는지 짝에게 말해요.',
          demo: DEMO_DIL('체험 일터 첫날', FIRST, [['wear', 'tell']], FIRST_R),
          art: { draw: 'a paper-cut small workshop with a new teen worker putting on safety glasses while an older coworker waves it off', banner: '첫날, 나는 어떻게?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '지운은 가상 인물이다. 장면은 방학 체험 일터로 두었고 근로 조건은 다루지 않는다.',
      }),
      M('activity.culture-web', {
        title: '안전 문화 요소와 근거 잇기', method: '안전 문화 요소와 근거 잇기', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 2개(규칙·보고)에 근거 카드를 잇고 사례 카드 4장을 나눈다.', base: '가지 4개(규칙·보고·교육·서로 챙기기)에 근거를 잇고 사례 카드 8장을 나눈다.', challenge: '근거 잇기 판에 반례 카드가 섞이고, 마지막 문항에서 안전 문화가 없는 반례 장면을 골라 담는다.' },
        activity: {
          title: '안전 문화 요소와 근거 잇기', tool: 'mindmap',
          teacher: '"규칙이 벽에 붙어 있기만 하면 안전 문화가 있는 걸까요?" 가지마다 근거를 이을 때 그 요소가 빠지면 무슨 일이 생길지 말하게 한다. "안전은 각자 알아서 하면 된다"는 학생에게 "내가 본 위험을 옆 사람이 모른다면 그 사람은 어떻게 알까요?"라고 되묻는다. 근거 카드에 \'근거\'라는 말을 붙여 읽게 한다.',
          task: '안전 문화 가지(규칙·보고·교육·서로 챙기기)마다 근거를 잇고, 사례 카드를 요소별로 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('안전 문화 가지마다 알맞은 근거를 이어 보세요.', [['규칙', '모두가 같은 안전한 방법으로 일한다'], ['보고', '다치기 전에 위험을 고칠 수 있다'], ['교육', '처음 온 사람도 위험을 안다'], ['서로 챙기기', '내가 못 본 위험을 동료가 알려 준다']], [], { topic: '안전 문화', hints: ['요소마다 그것이 사고를 줄이는 근거를 떠올려요.'] }),
              MB('안전 문화 가지 두 개에 근거를 이어 보세요.', [['규칙', '모두가 같은 안전한 방법으로 일한다'], ['보고', '다치기 전에 위험을 고칠 수 있다']], [], { topic: '안전 문화' }),
              MB('안전 문화 가지마다 근거를 이어 보세요(반례 카드는 남겨요).', [['규칙', '모두가 같은 안전한 방법으로 일한다'], ['보고', '다치기 전에 위험을 고칠 수 있다'], ['교육', '처음 온 사람도 위험을 안다'], ['서로 챙기기', '내가 못 본 위험을 동료가 알려 준다']], ['규칙은 일을 느리게만 한다', '작은 실수는 숨기는 게 낫다'], { topic: '안전 문화' })),
            IT(SB('일터 사례 카드를 안전 문화 요소별로 나누세요.', ['규칙', '보고', '교육', '서로 챙기기'], [
              { id: 'a1', text: '기계를 멈춘 뒤에만 청소한다', to: '규칙' }, { id: 'a2', text: '작업 전 점검표를 꼭 쓴다', to: '규칙' },
              { id: 'b1', text: '미끄러질 뻔한 일을 바로 알린다', to: '보고' }, { id: 'b2', text: '보고하면 고마워하고 고친다', to: '보고' },
              { id: 'c1', text: '새 사람에게 위험한 곳을 보여 준다', to: '교육' }, { id: 'c2', text: '새 기계는 배운 뒤에 쓴다', to: '교육' },
              { id: 'd1', text: '동료의 풀린 끈을 알려 준다', to: '서로 챙기기' }, { id: 'd2', text: '무거운 짐은 함께 든다', to: '서로 챙기기' }], { topic: '안전 문화' }),
              SB('사례 카드 4장을 안전 문화 요소별로 나누세요.', ['규칙', '보고'], [
                { id: 'a1', text: '기계를 멈춘 뒤에만 청소한다', to: '규칙' }, { id: 'a2', text: '작업 전 점검표를 꼭 쓴다', to: '규칙' },
                { id: 'b1', text: '미끄러질 뻔한 일을 바로 알린다', to: '보고' }, { id: 'b2', text: '보고하면 고마워하고 고친다', to: '보고' }], { topic: '안전 문화' })),
            IT(PB('안전 문화가 살아 있는 장면만 골라 담으세요.', '안전 문화가 있는 장면', [
              { id: 'e1', text: '막내가 위험을 말하자 함께 고친다', ok: true }, { id: 'e2', text: '보고한 사람을 탓한다' }, { id: 'e3', text: '바빠도 점검표를 쓴다', ok: true }, { id: 'e4', text: '아는 사람끼리만 위험을 안다' }], { topic: '안전 문화' }),
              null,
              PB('규칙은 있지만 안전 문화가 없는 반례 장면만 골라 담으세요.', '안전 문화가 없는 반례', [
                { id: 'f1', text: '안전 수칙 포스터는 있지만 아무도 안 지킨다', ok: true }, { id: 'f2', text: '보고하면 귀찮은 일이 생겨 다들 숨긴다', ok: true },
                { id: 'f3', text: '막내가 위험을 말하자 함께 고친다' }, { id: 'f4', text: '교육 없이 새 사람에게 기계를 맡긴다', ok: true }], { topic: '안전 문화' }),
              { conclude: '안전 문화는 규칙·보고·교육·서로 챙기기가 함께 돌아갈 때 생겨요. 포스터만으로는 생기지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '안전 문화 요소 하나를 골라 그것이 사고를 줄이는 근거를 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '안전 문화가 있는 일터에 ○ 해요.', options: ['위험을 말하면 함께 고친다', '위험을 보아도 모른 척한다'], answer: '위험을 말하면 함께 고친다' }] },
      }),
      M('activity.case-analysis', {
        title: '가상 사고 사례 원인 차례', method: '사례 원인 차례 분석', tool: 'story', minutes: 15,
        levels: { easy: '장면 4장을 원인 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 5장을 원인 차례로 놓고 문화 요인이 들어간 장면을 골라 담는다.', challenge: '바꿀 장면마다 다른 행동 카드를 짝 짓는다(함정 카드 포함).' },
        activity: {
          title: '가상 사고 사례 원인 차례', tool: 'story',
          teacher: '"새 직원이 넘어진 것은 그 사람이 조심하지 않아서일까요?" 장면을 놓을 때마다 앞 장면이 뒤 장면을 불렀는지 한 문장으로 말하게 한다. "같은 일이 또 일어나지 않으려면 넘어진 사람만 조심하면 된다"는 학생에게 "기름을 본 사람들이 말했다면 이야기는 어디서 멈췄을까요?"라고 되묻는다. 사례는 가상이고 한 사람을 탓하는 시간이 아니라고 말해 준다.',
          task: '가상 음식점 사고 사례의 장면을 원인 차례로 놓고, 안전 문화가 빠진 장면과 바꿀 행동을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('가상 사고 사례 장면 5장을 원인 차례로 놓으세요.', CASE, { title: '가상 음식점 사례' }),
              OB('가상 사고 사례 장면 4장을 원인 차례로 놓으세요.', pickCards(CASE, ['c1', 'c3', 'c4', 'c5']), { title: '가상 음식점 사례' })),
            IT(PB('안전 문화(보고·규칙·교육)가 빠져 일이 커진 장면을 골라 담으세요.', '문화가 빠진 장면', [
              { id: 'c1', text: '바닥에 기름이 묻었지만 아무도 말하지 않는다', ok: true }, { id: 'c2', text: '한 직원이 미끄러질 뻔했지만 보고하지 않는다', ok: true },
              { id: 'c3', text: '바쁘다며 청소 규칙을 건너뛴다', ok: true }, { id: 'c5', text: '새 직원이 넘어져 일을 쉬게 된다' }], { title: '가상 음식점 사례' }),
              PB('아무도 말하지 않아 일이 커진 장면을 골라 담으세요.', '문화가 빠진 장면', [
                { id: 'c1', text: '바닥에 기름이 묻었지만 아무도 말하지 않는다', ok: true }, { id: 'c5', text: '새 직원이 넘어져 일을 쉬게 된다' }], { title: '가상 음식점 사례' })),
            IT(MB('바꿀 장면마다 대신 할 행동을 이어 보세요.', [['기름을 본 순간', '바로 닦고 동료에게 알린다'], ['미끄러질 뻔한 뒤', '아차사고로 보고한다'], ['새 직원이 올 때', '위험한 자리를 먼저 알려 준다']], [], { title: '대신 이렇게' }),
              MB('바꿀 장면 두 개에 대신 할 행동을 이어 보세요.', [['기름을 본 순간', '바로 닦고 동료에게 알린다'], ['미끄러질 뻔한 뒤', '아차사고로 보고한다']], [], { title: '대신 이렇게' }),
              MB('바꿀 장면마다 대신 할 행동을 이어 보세요(어울리지 않는 카드는 남겨요).', [['기름을 본 순간', '바로 닦고 동료에게 알린다'], ['미끄러질 뻔한 뒤', '아차사고로 보고한다'], ['새 직원이 올 때', '위험한 자리를 먼저 알려 준다']], ['넘어진 사람에게 조심하라고 한다', '바쁠 때는 그냥 넘어간다'], { title: '대신 이렇게' }),
              { conclude: '사고는 한 사람의 실수보다 말하지 않고 건너뛴 여러 장면이 쌓여 생겨요. 그 장면마다 문화가 고리를 끊을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사례에서 바꿀 장면 하나를 골라 대신 할 행동을 한 문장으로 써요.' }] },
        notes: '사례는 가상이다. 가족·지인의 사고 경험을 발표시키지 않는다.',
      }),
      M('activity.campaign', {
        title: '학교 실습실 안전 문화 문구', method: '안전 문화 캠페인 문구 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문구 틀("___ 보면 ___ 말해요!")로 캠페인 문구 하나를 쓴다.', base: '캠페인 문구와 설명 두 문장을 쓰고 기준 3개를 점검한다.', challenge: '마지막 문항에서 읽을 사람(1학년·선생님)을 정해 문구를 맞춰 고쳐 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '학교 실습실 안전 문화 문구', tool: 'rubric-writing',
          teacher: '"\'안전 제일!\'과 \'위험을 보면 바로 말해요, 고치면 모두가 지켜져요\' 가운데 무엇을 해야 할지 알려 주는 문구는 무엇일까요?" 두 문구를 견주어 읽은 뒤 우리 학교 실습실에 붙일 문구를 쓰게 한다. "무서운 말이 잘 지켜진다"는 학생에게 겁주는 말보다 할 행동이 오래 남는다고 말해 준다. 실제 학생 이름은 쓰지 않게 한다.',
          task: '학교 실습실(과학실·기술실)에 붙일 안전 문화 캠페인 문구와 설명을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('"위험을 보면 말하기"를 담은 캠페인 문구와 설명을 쓰세요.',
              { topic: '실습실에서 위험을 보면 말하자는 캠페인 문구 한 줄과 설명 두 문장을 쓰세요.', minChars: 25, maxChars: 200, minSentences: 2, maxSentences: 4, title: '보고 캠페인' },
              ['할 행동이 문구에 들어 있다', '왜 해야 하는지 설명했다', '함께 지키자는 말이 있다'],
              { prompt: '틀을 따라 "위험을 보면 말하기" 문구를 쓰세요.', starter: '___ 보면 ___ 말해요!', toolOptions: { minSentences: 1, minChars: 8 }, checks: ['할 행동이 문구에 들어 있다', '함께 지키자는 말이 있다'] }),
            RW('"서로 챙기기"를 담은 캠페인 문구와 설명을 쓰세요.',
              { topic: '실습 때 서로의 보호구와 자리를 챙기자는 캠페인 문구 한 줄과 설명 두 문장을 쓰세요.', minChars: 25, maxChars: 200, minSentences: 2, maxSentences: 4, title: '서로 챙기기 캠페인' },
              ['할 행동이 문구에 들어 있다', '왜 해야 하는지 설명했다', '함께 지키자는 말이 있다'],
              { prompt: '틀을 따라 "서로 챙기기" 문구를 쓰세요.', starter: '내 옆 친구의 ___, 내가 ___!', toolOptions: { minSentences: 1, minChars: 8 }, checks: ['할 행동이 문구에 들어 있다', '함께 지키자는 말이 있다'] }),
            RW('"모르면 묻기"를 담은 캠페인 문구와 설명을 쓰세요.',
              { topic: '처음 쓰는 도구는 배운 뒤 쓰자는 캠페인 문구 한 줄과 설명 두 문장을 쓰세요.', minChars: 25, maxChars: 200, minSentences: 2, maxSentences: 4, title: '모르면 묻기 캠페인' },
              ['할 행동이 문구에 들어 있다', '왜 해야 하는지 설명했다', '함께 지키자는 말이 있다'],
              { prompt: '틀을 따라 "모르면 묻기" 문구를 쓰세요.', starter: '처음 쓰는 ___, 묻고 나서 ___!', toolOptions: { minSentences: 1, minChars: 8 }, checks: ['할 행동이 문구에 들어 있다', '함께 지키자는 말이 있다'] },
              { prompt: '읽을 사람(1학년이나 선생님)을 정해 문구와 설명을 그 사람에게 맞게 고쳐 쓰고 점검하세요.', toolOptions: { maxSentences: 5 }, add: ['읽을 사람에게 맞는 말로 썼다'] },
              { conclude: '좋은 안전 문화 문구는 할 행동과 까닭, 함께 지키자는 마음을 담아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 실습실에 붙일 캠페인 문구 한 줄을 써요.' }] },
      }),
      M('activity.near-miss', {
        title: '아차사고 보고 역할극', method: '아차사고 보고 연습', tool: 'timer', minutes: 15,
        levels: { easy: '보고 카드 3장(무엇이·어디서·어떻게)을 차례로 놓는다.', base: '보고 카드 4장(제안 포함)을 놓고 짝과 역할극을 한 뒤 스스로 점검한다.', challenge: '마지막 문항에서 다른 상황(실습실 바닥 전선)으로 보고 차례를 다시 놓는다.' },
        activity: {
          title: '아차사고 보고 역할극', tool: 'timer',
          teacher: '"다치지 않았는데 보고할 필요가 있을까요?" 아차사고는 다치기 전에 고칠 기회라는 점을 짚고, 카드 차례대로 짝에게 보고하는 역할극을 하게 한다. "작은 실수는 보고하면 혼난다"는 학생에게 "보고하지 않으면 그 자리를 다음에 지나갈 사람은 누구일까요?"라고 되묻는다. 보고는 누구를 탓하는 말이 아니라 무엇을 고칠지 말하는 것이라고 정리한다.',
          task: '아차사고 보고 카드를 말할 차례로 놓고, 짝과 보고 역할극을 한 뒤 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '아차사고를 보고할 때 말할 차례로 카드를 놓으세요.', toolOptions: { title: '아차사고 보고 차례', cards: [NEAR[2], NEAR[0], NEAR[3], NEAR[1]] }, target: { order: NEAR } },
              { prompt: '아차사고를 보고할 때 먼저 말할 세 가지를 차례로 놓으세요.', toolOptions: { cards: [NEAR[2], NEAR[0], NEAR[1]] }, target: { order: NEAR.slice(0, 3) } }),
            { prompt: '짝과 보고하는 사람·듣는 담당자를 나눠, "기술실 문턱에 걸려 넘어질 뻔했다" 상황으로 보고 역할극을 하고 표시하세요.', free: true, toolOptions: { doneLabel: '짝과 보고 역할극을 해 보았어요' } },
            IT({ prompt: '내 보고 역할극을 스스로 점검해 표시하세요.', toolOptions: { title: '보고 점검' }, target: { selfCheck: ['무엇이 일어날 뻔했는지 말했다', '어디서인지 말했다', '고칠 방법을 제안했다'] } },
              null,
              { prompt: '실습실 바닥에 전선이 늘어져 있던 상황으로 보고 차례를 다시 놓으세요.', toolOptions: { title: '다른 상황 보고', cards: ['전선을 정리하자고 제안하기', '실습실 작업대 사이에서', '친구가 발이 걸려 넘어질 뻔했다', '늘어진 전선 때문에'] }, target: { order: ['친구가 발이 걸려 넘어질 뻔했다', '실습실 작업대 사이에서', '늘어진 전선 때문에', '전선을 정리하자고 제안하기'] } },
              { conclude: '아차사고 보고는 무엇이·어디서·어떻게·제안 차례로, 다치기 전에 고치자는 말이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 아차사고 하나를 골라 보고 내용을 써요.', columns: ['차례', '내용'], cells: [['무엇이', ''], ['어디서', ''], ['제안', '']] }] },
      }),
      M('wrap.pledge-scale', {
        title: '"위험을 보면 말하겠다" 눈금', method: '안전 문화 참여 의지 눈금', tool: 'emotion', minutes: 9,
        levels: { easy: '눈금 3칸에서 의지를 고른다.', base: '눈금 5칸에서 의지를 고르고 까닭을 쓴다.', challenge: '눈금 5칸을 고른 뒤 말하기를 막는 요인을 묻는 질문에 답하고, 교사가 그 요인을 줄일 방법을 하나 더 말하게 한다.' },
        wrap: {
          teacher: '"위험을 보면 말하겠다는 마음은 지금 얼마나 되나요?" 눈금에는 맞고 틀린 답이 없다고 먼저 말한다. "말해도 안 바뀐다"는 학생에게 "오늘 본 두 일터 가운데 말하는 일터는 어땠나요?"라고 되묻는다. 말하기를 막는 것(눈치·귀찮음)을 함께 꼽고, 그것을 줄이는 것이 안전 문화라고 정리한다.',
          exitTicket: [
            IT(SCALE('나는 일터나 실습실에서 위험을 보면 말하겠다', '걱정', '"위험을 보면 말하겠다"는 마음의 크기를 골라요.'),
              { prompt: '세 칸 눈금에서 내 마음을 골라요.', toolOptions: { steps: 3, scaleLabels: { 1: '아직 어렵다', 3: '꼭 말하겠다' } } }),
            { type: 'choice', prompt: '위험을 보고도 말하지 않게 만드는 것으로 가장 알맞은 것은?', options: ['말하면 탓을 받을까 하는 걱정', '위험을 고치는 방법', '안전 교육'], answer: 0, difficulty: 0.2, explain: '말한 사람을 탓하지 않아야 모두 말할 수 있어요.' },
            { type: 'short', prompt: '내가 위험을 보면 누구에게 어떻게 말할지 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '위험을 보면 말하기',
          items: [
            { type: 'table', prompt: '내 마음의 크기와 까닭을 적어요.', columns: ['크기(1~5)', '까닭'], cells: [['', '']] },
            { type: 'short', prompt: '말하기를 막는 것 하나와 그것을 줄일 방법을 써요.' },
          ],
        },
      }),
      M('wrap.class-rules', {
        title: '우리 반 실습 안전 약속', method: '우리 반 안전 문화 약속', tool: 'kitchen', minutes: 9,
        levels: { easy: '약속 항목 3개 가운데 맞는 것을 고른다(함정 없음).', base: '항목 7개(함정 2개 포함)에서 약속 5개를 고른다.', challenge: '5개를 고른 뒤 약속을 지켰는지 확인할 방법을 활동지에 쓴다.' },
        wrap: {
          teacher: '"우리 반 실습 약속에 꼭 넣을 것은 무엇일까요?" 항목을 한 줄씩 읽고 맞는 것만 고르게 한다. "작은 실수는 숨기는 게 친구를 위한 것"이라는 말에는 "숨긴 실수가 다음에 누구를 다치게 할까요?"라고 되묻는다. 고른 약속은 실습실 앞에 함께 붙이자고 정한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '우리 반 실습 약속', items: strip(RULES) }, prompt: '우리 반 실습 약속에 넣을 항목만 골라 표시해요.', target: { checklist: RULES.filter((c) => c.ok).map((c) => c.id) }, difficulty: 0.2 },
              { prompt: '우리 반 실습 약속 세 가지를 표시해요.', toolOptions: { items: strip(RULES.slice(0, 3)) }, target: { checklist: ['k1', 'k2', 'k3'] } }),
            { type: 'choice', prompt: '친구가 실습 중 실수로 도구를 떨어뜨려 다칠 뻔했을 때 알맞은 말은?', options: ['"아무한테도 말하지 마"', '"선생님께 알려서 자리를 고치자"', '"다음엔 조심해"만 말한다'], answer: 1, difficulty: 0.2, explain: '아차사고를 알리면 그 자리를 고칠 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '우리 반 실습 약속',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['위험을 보면 바로 말하기', '실습 전 보호구 서로 확인', '모르면 하기 전에 묻기', '쓴 도구 제자리'] },
            { type: 'short', prompt: '약속을 지켰는지 확인할 방법 한 가지를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 안전보건표지 읽고 행동하기 (saf-job.m.safety-signs) ====
  {
    const M = MK('safety-signs', [7]);
    const KINDS = ['금지', '경고', '지시', '안내'];
    const SIGNS = [
      { id: 'n1', text: '빨간 원에 사선: 출입 금지', to: '금지' }, { id: 'n2', text: '빨간 원에 사선: 물체 이동 금지', to: '금지' },
      { id: 'w1', text: '노란 삼각형: 고압 전기 경고', to: '경고' }, { id: 'w2', text: '노란 삼각형: 떨어지는 물체 경고', to: '경고' },
      { id: 'm1', text: '파란 원: 보안경 착용', to: '지시' }, { id: 'm2', text: '파란 원: 귀마개 착용', to: '지시' },
      { id: 'g1', text: '초록 네모: 비상구', to: '안내' }, { id: 'g2', text: '초록 네모: 응급 구호 장비', to: '안내' }];
    const SHOP = { grid: [6, 4], title: '가상의 학교 기술실', regions: [
      { name: '출입문', cells: [[0, 0], [0, 1]] }, { name: '목공 기계 곁', cells: [[1, 0], [2, 0], [1, 1], [2, 1]] },
      { name: '전기 분전함', cells: [[3, 0], [4, 0]] }, { name: '비상구', cells: [[5, 0], [5, 1]] },
      { name: '재료 선반 아래', cells: [[3, 1], [4, 1], [3, 2], [4, 2]] }, { name: '작업대', cells: [[0, 2], [1, 2], [2, 2], [0, 3], [1, 3], [2, 3]] },
      { name: '구급함 자리', cells: [[5, 2], [5, 3]] }, { name: '통로', cells: [[3, 3], [4, 3]] }] };
    const D1 = { text: '기술실 문에 \'출입 금지\' 표지가 붙어 있다. 안쪽으로 가로지르면 교실까지 훨씬 빠르다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'cut', text: '잠깐이니 가로질러 간다', result: '켜 둔 기계 곁을 지나다 선생님께 놀라 멈춘다.', impact: [{ who: '나', text: '위험한 곳을 지난다', tone: -1 }], why: '금지 표지는 그 안에 위험이 있다는 뜻이에요.', end: '금지된 곳을 가로질렀어요.',
        next: { text: '선생님이 "왜 들어왔니?"라고 묻는다.', choices: [
          { id: 'excuse', text: '"표지를 못 봤어요"라고 둘러댄다', result: '다음에도 같은 일이 생길 수 있다.', impact: [{ who: '나', text: '같은 위험이 되풀이된다', tone: -1 }], why: '표지를 봤다면 그대로 말해야 고칠 수 있어요.' },
          { id: 'admit', text: '빨리 가려고 들어왔다고 말하고 돌아 나간다', result: '선생님이 기계가 켜져 있던 까닭을 알려 준다.', impact: [{ who: '나', text: '위험을 배운다', tone: 1 }] }] } },
      { id: 'around', text: '표지를 지키고 복도로 돌아간다', result: '조금 늦지만 안전하게 도착한다.', impact: [{ who: '나', text: '다치지 않는다', tone: 1 }], end: '표지를 지켜 돌아갔어요.',
        next: { text: '친구가 "넌 겁쟁이야, 같이 가자"며 들어가려 한다.', choices: [
          { id: 'stop', text: '"금지 표지야, 같이 돌아가자"고 말린다', result: '친구도 복도로 돌아온다.', impact: [{ who: '친구', text: '위험을 피한다', tone: 1 }] },
          { id: 'let', text: '친구 혼자 들어가게 둔다', result: '친구가 기계 곁을 지난다.', impact: [{ who: '친구', text: '위험한 곳을 지난다', tone: -1 }], why: '함께 지키자고 말하는 것도 표지를 지키는 일이에요.' }] } },
      { id: 'peek', text: '문을 열고 안을 들여다본 뒤 정한다', result: '문 앞에서 머뭇거리는 사이 통로가 막힌다.', impact: [{ who: '지나가는 사람', text: '길이 막힌다', tone: -1 }], why: '금지 표지는 들여다보고 정하라는 뜻이 아니에요.', ending: '문 앞을 막고 머뭇거렸어요.' }] };
    const D2 = { text: '실습실 연마기 곁에 \'보안경 착용\' 표지가 있다. 보안경은 반대쪽 선반에 있고, 작업은 1분이면 끝날 것 같다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'no', text: '금방 끝나니 그냥 작업한다', result: '작은 가루가 얼굴 쪽으로 튄다.', impact: [{ who: '나', text: '눈을 다칠 뻔한다', tone: -1 }], why: '지시 표지는 짧은 작업에도 그대로 지켜요.', end: '보안경 없이 했어요.',
        next: { text: '눈이 따끔하다.', choices: [
          { id: 'rub', text: '손으로 눈을 비빈다', result: '더 따끔해진다.', impact: [{ who: '나', text: '눈이 더 아프다', tone: -1 }], why: '비비지 말고 선생님께 알려요.' },
          { id: 'tell', text: '바로 작업을 멈추고 선생님께 알린다', result: '선생님이 살펴보고 보안경을 챙겨 준다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }] }] } },
      { id: 'get', text: '선반에서 보안경을 가져와 쓰고 작업한다', result: '가루가 튀어도 눈은 안전하다.', impact: [{ who: '나', text: '눈을 지킨다', tone: 1 }], end: '보안경을 쓰고 작업했어요.',
        next: { text: '옆 친구는 보안경 없이 작업을 시작하려 한다.', choices: [
          { id: 'share', text: '표지를 가리키며 보안경을 건네준다', result: '친구도 보안경을 쓴다.', impact: [{ who: '친구', text: '눈을 지킨다', tone: 1 }] },
          { id: 'ignore', text: '친구 일이니 모른 척한다', result: '친구가 보안경 없이 작업한다.', impact: [{ who: '친구', text: '다칠 수 있다', tone: -1 }], why: '서로 챙기는 것이 안전 문화예요.' }] } }] };
    const D3 = { text: '창고 문에 \'떨어지는 물체 경고\' 표지가 있다. 선생님 심부름으로 창고 안 상자를 가져와야 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'pull', text: '높은 선반의 상자를 아래에서 잡아당긴다', result: '위에 얹힌 물건이 흔들린다.', impact: [{ who: '나', text: '물건에 맞을 뻔한다', tone: -1 }], why: '경고 표지는 그 위험에 맞게 조심하라는 뜻이에요.', end: '상자를 잡아당겨 위험했어요.',
        next: { text: '위쪽 물건이 떨어질 듯 흔들린다.', choices: [
          { id: 'catch', text: '떨어지는 물건을 손으로 받으려 한다', result: '물건이 손목에 부딪친다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], why: '떨어지는 것은 받지 말고 피해요.' },
          { id: 'step', text: '뒤로 물러나 선생님을 부른다', result: '선생님이 받침대로 안전하게 꺼낸다.', impact: [{ who: '나', text: '다치지 않는다', tone: 1 }] }] } },
      { id: 'ask', text: '선생님께 높은 곳 상자라고 말씀드린다', result: '선생님이 함께 와서 받침대를 쓴다.', impact: [{ who: '나', text: '안전하게 꺼낸다', tone: 1 }], end: '높은 곳은 선생님과 함께 꺼냈어요.',
        next: { text: '상자를 꺼낸 뒤 선반 위가 어수선하다.', choices: [
          { id: 'tidy', text: '무거운 것을 아래로 옮기자고 말씀드린다', result: '선반이 정리되어 다음 사람도 안전하다.', impact: [{ who: '다음 사람', text: '위험이 줄어든다', tone: 1 }] },
          { id: 'leave', text: '심부름은 끝났으니 그냥 나온다', result: '어수선한 선반이 그대로 남는다.', impact: [{ who: '다음 사람', text: '같은 위험을 만난다', tone: -1 }], why: '본 위험을 알리면 다음 사람을 지킬 수 있어요.' }] } }] };
    const R_SIGN = [{ id: 'r1', text: '표지는 그곳에 있는 위험과 할 행동을 알려 준다' }, { id: 'r2', text: '함께 지키자고 말해야 모두가 안전하다' },
      { id: 'r3', text: '짧은 시간이면 표지를 안 지켜도 된다', why: '위험은 시간이 짧다고 작아지지 않아요.' }];
    const CHECK = [{ id: 'h1', text: '빨간 원과 사선은 금지라는 것을 안다' }, { id: 'h2', text: '노란 삼각형은 경고라는 것을 안다' }, { id: 'h3', text: '파란 원은 꼭 해야 할 지시라는 것을 안다' }, { id: 'h4', text: '초록 네모는 안내라는 것을 안다' }];

    ALL.push(
      M('intro.shape-rule', {
        title: '표지 조각 줄의 규칙', method: '표지 모양 규칙 찾기', tool: 'pattern', minutes: 6,
        levels: { easy: '교사가 같은 모양·색이 이어진다는 규칙을 먼저 말해 준다.', base: '시연으로 규칙에 맞지 않는 조각을 찾는다.', challenge: '표지 네 종류의 모양·색 규칙을 내 말로 만들어 말한다.' },
        intro: {
          teacher: '"경고 표지들을 한 줄로 늘어놓았는데 하나가 섞였어요. 어느 조각이 다른 무리일까요?" 노란 세모가 이어진 줄에서 다른 조각을 찾는 시연을 보인다. "글만 읽으면 되지 모양은 왜 봐요?"라는 말에는 "멀리서 글자가 안 보일 때 무엇으로 알아볼까요?"라고 되묻는다. 표지는 모양과 색으로 종류를 먼저 알려 준다고 밝히고, 실물 표지 사진을 함께 보인다.',
          student: '표지 조각 줄에서 모양·색 규칙을 찾고, 규칙에 맞지 않는 조각이 무엇인지 짝에게 말해요. 표지를 멀리서 알아보는 방법도 떠올려요.',
          demo: { tool: 'pattern', options: { mode: 'odd', seq: ['triangle:buttercup', 'triangle:buttercup', 'triangle:buttercup', 'circle:sky', 'triangle:buttercup', 'triangle:buttercup'], question: '경고 무리에 섞인 다른 조각은?' }, sequence: [{ odd: 3 }] },
          art: { draw: 'a paper-cut row of safety sign shapes on a workshop wall, yellow triangles in a line with one blue circle mixed in', banner: '다른 조각은 어디?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '교구가 표지 그림을 그리지 못해 모양·색 조각으로 대신한다. 실물 안전보건표지 사진을 함께 보인다.',
      }),
      M('intro.scene-pick', {
        title: '작업장 장면에서 표지 행동', method: '작업장 장면에서 표지 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 보기 2개(지킨다·무시한다)로 줄여 읽는다.', base: '시연으로 보기 3개 가운데 표지에 맞는 행동을 고르고 결과를 본다.', challenge: '고른 행동의 근거(표지가 알려 주는 위험)를 말한다.' },
        intro: {
          teacher: '"\'귀마개 착용\' 표지가 붙은 곳에서 나는 어떻게 할까요?" 장면을 띄우고 시연 단추로 귀마개를 쓰고 들어가는 보기를 보인다. "잠깐 지나가기만 하면 괜찮다"는 말에는 "표지는 머무는 시간을 따질까요, 그곳의 위험을 알려 줄까요?"라고 되묻는다. 표지마다 할 행동이 정해져 있다는 것을 오늘 정리한다고 밝힌다.',
          student: '작업장 장면을 보고 표지에 맞는 행동을 골라요. 다른 보기를 골랐다면 어떤 결과가 날지 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '시끄러운 기계실 입구에 파란 원 \'귀마개 착용\' 표지가 있다. 선생님이 안에서 부른다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
            { id: 'plug', text: '입구의 귀마개를 쓰고 들어간다', result: '큰 소리 속에서도 귀를 지킨다.' }, { id: 'quick', text: '잠깐이니 그냥 들어간다', result: '귀가 멍멍하다.' }, { id: 'shout', text: '밖에서 크게 소리쳐 부른다', result: '기계 소리에 묻혀 들리지 않는다.' }] }, sequence: [{ choice: 'plug' }] },
          art: { draw: 'a paper-cut machine room door with a blue round sign and a box of ear plugs beside it, a student reaching for them', banner: '표지대로 하면?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.sign-sort', {
        title: '표지 네 종류 바구니', method: '표지 네 종류 나누기', tool: 'sortboard', minutes: 15,
        levels: { easy: '바구니 2개(금지·안내)에 표지 카드 4장을 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '바구니 4개에 표지 카드 8장을 나누고, 행동 카드도 표지 종류별로 나눈다.', challenge: '처음 보는 표지 설명 카드가 더 섞인 판에서 모양·색 규칙으로 종류를 추론해 나눈다.' },
        activity: {
          title: '표지 네 종류 바구니', tool: 'sortboard',
          teacher: '"경고와 금지는 같은 말일까요?" 카드를 넣을 때마다 모양과 색 가운데 무엇을 보고 골랐는지 말하게 한다. "빨간색이면 다 위험 경고"라는 학생에게 "빨간 원과 노란 세모는 각각 무엇을 하라고 할까요?"라고 되묻는다. 금지는 하지 말 것, 경고는 조심할 것, 지시는 꼭 할 것, 안내는 찾아갈 곳이라고 정리하고 실물 표지를 보인다.',
          task: '표지 설명 카드를 금지·경고·지시·안내 바구니에 나누고, 모양·색 근거를 말해요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SBB('표지 카드를 네 종류 바구니에 나누세요.', KINDS, SIGNS),
              SBB('표지 카드 4장을 금지·안내 바구니에 나누세요.', ['금지', '안내'], pickCards(SIGNS, ['n1', 'n2', 'g1', 'g2'])),
              { prompt: '처음 보는 표지 설명 카드까지 모양·색 규칙으로 종류를 추론해 나누세요.', toolOptions: { more: [{ id: 'z1', text: '빨간 원에 사선: 휴대전화 사용 금지' }, { id: 'z2', text: '파란 원: 안전모 착용' }] }, target: { sort: { 금지: ['n1', 'n2', 'z1'], 경고: ['w1', 'w2'], 지시: ['m1', 'm2', 'z2'], 안내: ['g1', 'g2'] } } }),
            IT(SBB('표지를 본 뒤 할 행동 카드를 표지 종류 바구니에 나누세요.', KINDS, [
              { id: 'a1', text: '그 행동을 하지 않는다', to: '금지' }, { id: 'a2', text: '둘레를 살피며 조심해 지난다', to: '경고' },
              { id: 'a3', text: '표지대로 보호구를 쓴다', to: '지시' }, { id: 'a4', text: '필요할 때 그곳을 찾아간다', to: '안내' }]),
              SBB('표지를 본 뒤 할 행동 카드를 금지·안내 바구니에 나누세요.', ['금지', '안내'], [
                { id: 'a1', text: '그 행동을 하지 않는다', to: '금지' }, { id: 'a4', text: '필요할 때 그곳을 찾아간다', to: '안내' }])),
            IT(SBB('실습실에서 본 표지 카드를 종류 바구니에 나누세요.', KINDS, [
              { id: 'b1', text: '빨간 원에 사선: 화기 엄금', to: '금지' }, { id: 'b2', text: '노란 삼각형: 뜨거운 표면 경고', to: '경고' },
              { id: 'b3', text: '파란 원: 장갑 착용', to: '지시' }, { id: 'b4', text: '초록 네모: 세안 장치', to: '안내' }]),
              SBB('실습실에서 본 표지 카드를 금지·안내 바구니에 나누세요.', ['금지', '안내'], [
                { id: 'b1', text: '빨간 원에 사선: 화기 엄금', to: '금지' }, { id: 'b4', text: '초록 네모: 세안 장치', to: '안내' }]),
              null, { conclude: '표지는 모양과 색으로 종류를 먼저 알려 줘요. 금지는 하지 않고, 경고는 조심하고, 지시는 꼭 하고, 안내는 찾아가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표지 종류마다 모양·색과 할 행동을 써요.', columns: ['종류', '모양·색', '할 행동'], cells: [['금지', '', ''], ['경고', '', ''], ['지시', '', ''], ['안내', '', '']], answer: '빨간 원·사선/하지 않기, 노란 삼각형/조심하기, 파란 원/꼭 하기, 초록 네모/찾아가기' }] },
        notes: '카드의 색·모양 설명은 실물 표지 사진과 함께 보인다(교구는 표지 그림을 그리지 않는다).',
      }),
      M('activity.site-map', {
        title: '기술실 지도에 표지 자리', method: '작업장 지도에 표지 배치', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 그 칸 이름이 바로 읽힌다.', base: '표지 네 개마다 둘 자리에 핀을 꽂는다.', challenge: '마지막 문항에서 핀을 꽂고 그 자리에 둔 근거를 고른다.' },
        activity: {
          title: '기술실 지도에 표지 자리', tool: 'map',
          teacher: '"\'고압 전기 경고\' 표지는 기술실 어디에 붙어야 할까요?" 칸 지도에서 위험이 있는 자리와 표지를 짝지어 핀을 꽂게 한다. "표지는 문에 다 모아 붙이면 된다"는 학생에게 "기계 곁에 서 있는 사람은 문의 표지를 볼 수 있을까요?"라고 되묻는다. 표지는 위험이 있는 바로 그 자리에서 보여야 한다는 점을 짚는다.',
          task: '가상의 학교 기술실 칸 지도에서 표지마다 둘 자리에 핀을 꽂고, 그 자리인 까닭을 말해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('\'고압 전기 경고\' 표지를 둘 자리에 핀을 꽂으세요.', SHOP, { region: '전기 분전함' }),
            PIN('\'보안경 착용\' 지시 표지를 둘 자리에 핀을 꽂으세요.', SHOP, { region: '목공 기계 곁' }),
            PIN('\'비상구\' 안내 표지를 둘 자리에 핀을 꽂으세요.', SHOP, { region: '비상구' }),
            IT(PIN('\'떨어지는 물체 경고\' 표지를 둘 자리에 핀을 꽂으세요.', SHOP, { region: '재료 선반 아래' }),
              null,
              { prompt: '\'떨어지는 물체 경고\' 표지 자리에 핀을 꽂고, 그 자리에 둔 근거를 고르세요.', toolOptions: { ask: { q: '그 자리에 두는 까닭은?', choices: ['위험이 있는 바로 그곳에서 보여야 해서', '빈 벽이 거기뿐이라서', '문에서 가장 멀어서'] } }, target: { region: '재료 선반 아래', pick: 0 } },
              { conclude: '표지는 위험이 있는 바로 그 자리에서, 그 위험 앞에 선 사람이 볼 수 있게 붙여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 실습실에서 표지가 더 필요한 자리 한 곳과 붙일 표지를 써요.' }] },
        notes: '칸 지도는 가상 기술실이다. 실제 학교 실습실 표지 자리를 활동지로 확인하게 한다.',
      }),
      M('activity.sign-act', {
        title: '표지를 무시한 지름길', method: '표지 보고 행동 정하기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다(세 상황).', base: '갈림길 2번까지 끝까지 간다.', challenge: '갈림길 2번까지 간 뒤 근거 카드를 고른다(함정 근거 포함).' },
        activity: {
          title: '표지를 무시한 지름길', tool: 'dilemma',
          teacher: '"표지를 한 번 무시해도 아무 일 없었다면, 그 표지는 필요 없는 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "짧은 시간이면 괜찮다"는 학생에게 "위험이 시간을 보고 생길까요?"라고 되묻는다. 끝 장면에서 친구에게 함께 지키자고 말하는 선택이 어떤 결과를 내는지도 짚는다.',
          task: '표지가 붙은 세 상황에서 길을 골라 결과를 따라가고, 표지를 지킨 길과 무시한 길을 견줘요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL12({ easy: '\'출입 금지\' 표지 앞이에요. 한 번 골라 결과를 보세요.', base: '\'출입 금지\' 표지 앞이에요. 두 번 골라 끝까지 가 보세요.', challenge: '\'출입 금지\' 표지 앞이에요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '기술실 지름길', D1, [['around', 'stop']], R_SIGN, ['r1', 'r2']),
            DIL12({ easy: '\'보안경 착용\' 표지가 있어요. 한 번 골라 결과를 보세요.', base: '\'보안경 착용\' 표지가 있어요. 두 번 골라 끝까지 가 보세요.', challenge: '\'보안경 착용\' 표지가 있어요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '연마기 곁 1분', D2, [['get', 'share']], R_SIGN, ['r1', 'r2']),
            DIL12({ easy: '\'떨어지는 물체 경고\' 표지가 있어요. 한 번 골라 결과를 보세요.', base: '\'떨어지는 물체 경고\' 표지가 있어요. 두 번 골라 끝까지 가 보세요.', challenge: '\'떨어지는 물체 경고\' 표지가 있어요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '창고 심부름', D3, [['ask', 'tidy']], R_SIGN, ['r1', 'r2'], { conclude: '표지는 그곳의 위험과 할 행동을 알려 줘요. 짧은 시간에도 지키고, 함께 지키자고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '\'보안경 착용\' 표지 곁에서 1분짜리 작업을 할 때 알맞은 행동은?', options: ['짧으니 그냥 한다', '보안경을 가져와 쓰고 한다', '눈을 가늘게 뜨고 한다'], answer: '보안경을 가져와 쓰고 한다' }] },
      }),
      M('wrap.sign-design', {
        title: '우리 실습실 표지 만들기', method: '교실 실습 표지 만들기', tool: 'collage', minutes: 9,
        levels: { easy: '모양 조각 2개 이상으로 표지 하나를 만들고 기준 2개를 점검한다.', base: '모양 조각 3개 이상으로 만들고 기준 3개를 점검한다.', challenge: '만든 표지의 모양·색 규칙을 설명하는 기준 하나를 더 점검하고 활동지에 규칙을 쓴다.' },
        wrap: {
          teacher: '"우리 과학실에 꼭 필요한 표지 하나를 만든다면 어느 종류일까요?" 종류를 먼저 정하고 그 종류의 모양·색 규칙에 맞게 조각을 붙이게 한다. "예쁘면 된다"는 학생에게 "멀리서 봐도 금지인지 안내인지 알 수 있나요?"라고 되묻는다. 만든 표지는 실제 표지를 대신하지 않고, 실습실 약속을 떠올리는 데 쓴다고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { shapes: ['circle', 'triangle', 'square', 'rect', 'semi', 'diamond'], colors: ['빨강', '노랑', '파랑', '초록', '검정', '하양'], maxPieces: 12 }, prompt: '실습실 표지 하나를 종류 규칙에 맞게 조각으로 만들고 점검해요.', target: { selfCheck: ['표지 종류(금지·경고·지시·안내)를 먼저 정했다', '그 종류의 모양을 썼다', '그 종류의 색을 썼다'], minPieces: 3 }, difficulty: 0.15 },
              { prompt: '조각 두 개 이상으로 표지를 만들고 점검해요.', target: { selfCheck: ['표지 종류를 먼저 정했다', '그 종류의 모양과 색을 썼다'], minPieces: 2 } },
              { prompt: '표지를 만들고, 모양·색 규칙까지 점검해요.', target: { selfCheck: ['표지 종류(금지·경고·지시·안내)를 먼저 정했다', '그 종류의 모양을 썼다', '그 종류의 색을 썼다', '왜 그 모양·색인지 설명할 수 있다'], minPieces: 3 } }),
            { type: 'choice', prompt: '"실습실에서 음식 먹지 않기"를 알리는 표지는 어느 종류일까요?', options: ['금지', '안내', '지시'], answer: 0, difficulty: 0.2, explain: '하지 말아야 할 행동은 금지 표지예요.' },
            { type: 'short', prompt: '내가 만든 표지의 종류와 붙일 자리를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 실습실 표지',
          items: [
            { type: 'short', prompt: '만든 표지의 종류와 모양·색 규칙을 써요.' },
            { type: 'short', prompt: '그 표지를 실습실 어디에 붙일지와 까닭을 써요.' },
          ],
        },
      }),
      M('wrap.sign-check', {
        title: '표지 읽기 스스로 점검', method: '표지 읽기 점검', tool: 'kitchen', minutes: 9,
        levels: { easy: '점검 항목 3개에 내가 아는 것을 표시한다.', base: '점검 항목 4개에 표시한다.', challenge: '항목 4개에 표시한 뒤 헷갈린 표지를 활동지에 메모한다.' },
        wrap: {
          teacher: '"오늘 배운 네 종류 가운데 아직 헷갈리는 것은 무엇인가요?" 점검 항목을 한 줄씩 읽고 정말 아는 것만 표시하게 한다. "다 안다"고 하는 학생에게 "노란 삼각형과 빨간 원 가운데 \'하지 마\'는 무엇일까요?"라고 되묻는다. 표시하지 못한 항목은 활동지 표를 다시 보게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '표지 읽기 점검', items: CHECK }, prompt: '오늘 배운 표지 읽기를 스스로 점검해 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '표지 읽기 세 가지를 스스로 점검해 표시해요.', toolOptions: { items: CHECK.slice(0, 3) } }),
            { type: 'choice', prompt: '노란 삼각형 표지를 보았을 때 알맞은 행동은?', options: ['그 행동을 절대 하지 않는다', '둘레를 살피며 조심한다', '그곳을 찾아간다'], answer: 1, difficulty: 0.2, explain: '경고 표지는 그곳의 위험을 조심하라는 뜻이에요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '표지 읽기 점검',
          items: [
            { type: 'check', prompt: '내가 아는 표지 종류에 표시해요.', options: ['금지', '경고', '지시', '안내'] },
            { type: 'short', prompt: '아직 헷갈리는 표지와 헷갈리는 까닭을 메모해요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 산업 재해의 유형과 사례 분석 (saf-job.m.accident-types) ====
  {
    const M = MK('accident-types', [8]);
    const TYPES = ['떨어짐', '끼임', '넘어짐', '부딪힘'];
    const DATA = [['넘어짐', 9], ['떨어짐', 7], ['끼임', 5], ['부딪힘', 4], ['물체에 맞음', 3]];
    const CHAIN = [{ id: 'c1', text: '납품이 급해 기계 덮개를 떼고 일한다' }, { id: 'c2', text: '기계를 멈추지 않고 걸린 조각을 뺀다' },
      { id: 'c3', text: '장갑 끝이 돌아가는 부분에 닿는다' }, { id: 'c4', text: '손목이 기계에 끌려 들어갈 뻔한다' }, { id: 'c5', text: '모든 작업이 멈추고 원인을 조사한다' }];
    const SITE = { text: '가상 공장, 오늘 안에 물건을 보내야 한다. 반장이 "안전 점검은 건너뛰고 바로 기계를 돌리자"고 한다.', ask: '현장 직원 수아는 어떻게 할까?', motif: 'house', choices: [
      { id: 'skip', text: '시키는 대로 점검 없이 기계를 돌린다', result: '느슨한 덮개가 덜컹거린다.', impact: [{ who: '수아', text: '끼일 위험이 생긴다', tone: -1 }], why: '급할수록 점검을 건너뛰면 사고 위험이 커져요.', end: '점검 없이 돌려 위험했어요.',
        next: { text: '기계 소리가 이상하다.', choices: [
          { id: 'go', text: '납품 때문에 계속 돌린다', result: '덮개가 빠져 작업대에 떨어진다.', impact: [{ who: '동료들', text: '맞을 뻔한다', tone: -1 }] },
          { id: 'halt', text: '바로 멈추고 반장에게 알린다', result: '고장 난 곳을 찾아 고친다.', impact: [{ who: '동료들', text: '다치지 않는다', tone: 1 }] }] } },
      { id: 'check', text: '"5분이면 되니 점검하고 돌릴게요"라고 말한다', result: '반장이 마지못해 기다린다.', impact: [{ who: '수아', text: '안전하게 시작한다', tone: 1 }], end: '점검하고 시작했어요.',
        next: { text: '점검해 보니 덮개 나사 하나가 풀려 있다.', choices: [
          { id: 'tape', text: '테이프로 대충 붙이고 돌린다', result: '테이프가 떨어져 덮개가 흔들린다.', impact: [{ who: '수아', text: '다시 위험해진다', tone: -1 }], why: '고칠 것은 제대로 고친 뒤 써요.' },
          { id: 'fix', text: '기계를 멈춘 채 나사를 조이고 보고한다', result: '조금 늦지만 안전하게 돌아간다.', impact: [{ who: '동료들', text: '함께 안전하다', tone: 1 }], end: '고친 뒤 보고했어요.',
            next: { text: '반장이 "늦었으니 쉬는 시간 없이 하자"고 한다.', choices: [
              { id: 'rest', text: '정해진 쉬는 시간은 지키자고 말한다', result: '모두 잠깐 쉬고 집중해 일한다.', impact: [{ who: '동료들', text: '지치지 않는다', tone: 1 }] },
              { id: 'push', text: '쉬지 않고 계속한다', result: '모두 지쳐 실수가 잦아진다.', impact: [{ who: '동료들', text: '실수할 위험이 커진다', tone: -1 }], why: '지치면 실수가 늘어 사고로 이어져요.' }] } }] } }] };
    const SITE_R = [{ id: 'r1', text: '급할수록 점검을 지켜야 사고를 막는다' }, { id: 'r2', text: '이상을 알리면 모두를 지킬 수 있다' }, { id: 'r3', text: '납품이 늦으면 안전은 다음 일이다', why: '사고가 나면 일 전체가 멈춰요.' }];
    const STORE = { text: '가상 물류 창고, 짐을 높이 쌓아야 빨리 끝난다. 사다리 대신 상자를 밟고 올라가자는 말이 나온다.', ask: '현장 직원 태오는 어떻게 할까?', motif: 'house', choices: [
      { id: 'box', text: '상자를 밟고 올라간다', result: '상자가 찌그러지며 휘청인다.', impact: [{ who: '태오', text: '떨어질 뻔한다', tone: -1 }], why: '높은 곳은 알맞은 사다리·발판을 써요.', end: '상자를 밟아 위험했어요.',
        next: { text: '다시 올라가려 한다.', choices: [
          { id: 'again', text: '조심해서 다시 상자를 밟는다', result: '또 휘청인다.', impact: [{ who: '태오', text: '떨어질 수 있다', tone: -1 }] },
          { id: 'ladder', text: '사다리를 가져와 동료가 잡아 준다', result: '안전하게 올린다.', impact: [{ who: '태오', text: '떨어지지 않는다', tone: 1 }] }] } },
      { id: 'ladder', text: '사다리를 가져오고 동료에게 잡아 달라고 한다', result: '안전하게 짐을 올린다.', impact: [{ who: '태오', text: '떨어지지 않는다', tone: 1 }], end: '사다리로 안전하게 올렸어요.',
        next: { text: '짐을 다 올리니 통로에 빈 상자가 흩어져 있다.', choices: [
          { id: 'clear', text: '바로 빈 상자를 치워 통로를 비운다', result: '지나는 사람이 걸리지 않는다.', impact: [{ who: '동료들', text: '넘어지지 않는다', tone: 1 }], end: '통로를 비웠어요.',
            next: { text: '반장이 "다음부턴 상자 밟고 빨리 하자"고 한다.', choices: [
              { id: 'say', text: '오늘 휘청인 일을 아차사고로 알리고 사다리를 쓰자고 한다', result: '창고에 사다리 자리가 정해진다.', impact: [{ who: '동료들', text: '같은 위험을 피한다', tone: 1 }] },
              { id: 'nod', text: '고개만 끄덕인다', result: '다음에도 상자를 밟게 된다.', impact: [{ who: '동료들', text: '위험이 되풀이된다', tone: -1 }], why: '본 위험을 말해야 고쳐져요.' }] } },
          { id: 'later', text: '일 끝나고 치우기로 한다', result: '지나던 동료가 상자에 걸린다.', impact: [{ who: '동료들', text: '넘어질 뻔한다', tone: -1 }], why: '통로는 바로 비워요.' }] } }] };
    const STORE_R = [{ id: 'r1', text: '알맞은 도구를 써야 떨어짐을 막는다' }, { id: 'r2', text: '아차사고를 알리면 같은 위험을 막는다' }, { id: 'r3', text: '익숙한 사람은 상자를 밟아도 된다', why: '익숙해도 상자는 사람 무게를 버티게 만든 것이 아니에요.' }];
    const SELF = [{ id: 's1', text: '산업 재해의 뜻을 말할 수 있다' }, { id: 's2', text: '유형 네 가지를 사례로 나눌 수 있다' }, { id: 's3', text: '유형마다 예방 대책을 하나씩 말할 수 있다' }, { id: 's4', text: '사례의 원인을 차례로 설명할 수 있다' }];

    ALL.push(
      M('intro.case-sort', {
        title: '가상 사례 유형 바구니', method: '사례 카드 유형 분류', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 떨어짐·끼임 두 바구니만 함께 나눈다.', base: '시연으로 사례 카드를 네 유형 바구니에 나눈다.', challenge: '두 유형에 걸칠 듯한 애매한 사례를 어느 쪽으로 볼지 근거를 말한다.' },
        intro: {
          teacher: '"산업 재해는 공장에서만 생길까요?" 음식점·창고·사무실 사례까지 섞인 카드를 네 유형 바구니에 나누는 시연을 보인다. "같은 유형이면 원인도 같다"는 말에는 "젖은 바닥에서 넘어진 것과 전선에 걸려 넘어진 것은 고칠 곳이 같을까요?"라고 되묻는다. 산업 재해는 일하다 다치거나 병을 얻는 일이라고 밝히고, 사례는 모두 가상이라고 말한다.',
          student: '가상 사례 카드를 떨어짐·끼임·넘어짐·부딪힘 바구니에 나눠 보고, 공장이 아닌 일터의 사례가 있는지 찾아 말해요.',
          demo: { tool: 'sortboard', options: { slots: TYPES, cards: [
            { id: 'q1', text: '창고 사다리에서 발을 헛디딘다' }, { id: 'q2', text: '돌아가는 기계에 소매가 걸린다' },
            { id: 'q3', text: '음식점 젖은 바닥에서 미끄러진다' }, { id: 'q4', text: '움직이는 수레와 몸이 부딪친다' }] }, sequence: [{ sort: { 떨어짐: ['q1'], 끼임: ['q2'], 넘어짐: ['q3'], 부딪힘: ['q4'] } }] },
          art: { draw: 'a paper-cut shelf with four paper baskets for accident types, small cards showing a ladder, a rotating machine, a wet floor and a moving cart', banner: '어느 유형일까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
      }),
      M('intro.data-read', {
        title: '유형별 예시 그래프 읽기', method: '예시 자료 유형별 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 값이 보이는 판으로 가장 많은 유형을 읽는다.', base: '값을 숨긴 막대를 눈금으로 읽는다.', challenge: '이 자료의 출처·대상을 확인하는 질문을 하나 만들어 말한다.' },
        intro: {
          teacher: '"이 그래프는 수업용 예시 자료예요. 실제 현황은 선생님이 최신 공식 자료로 따로 보여 줄게요. 가장 많은 유형은 무엇일까요?" 시연 단추로 가장 긴 막대가 골라지는 모습을 보인다. "많은 유형만 막으면 된다"는 말에는 "건수가 적어도 한 번에 크게 다치는 유형은 없을까요?"라고 되묻는다. 그래프를 볼 때 누구를, 언제, 어디서 센 자료인지 먼저 묻게 한다.',
          student: '예시 자료 그래프에서 가장 많은 유형을 찾고, 이 자료를 믿으려면 무엇을 확인해야 할지(누가·언제·어디서 셌는지) 질문 하나를 만들어요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 일터의 유형별 사고(예시 자료, 실제 통계 아님)', unit: '건', xLabel: '유형', yLabel: '건수', data: DATA, question: '가장 많은 유형은?', choices: DATA.map((d) => d[0]), showValues: true }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart with five bars on a board, a magnifying glass over the source line at the bottom', banner: '이 자료는 누가 셌을까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '실제 산업 재해 현황은 교사가 고용노동부·안전보건공단의 최신 공식 자료로 넣는다. 이 그래프 값은 예시다.',
      }),
      M('activity.why-chain', {
        title: '사례 원인 고리 놓기', method: '사례 원인 고리 분석', tool: 'story', minutes: 15,
        levels: { easy: '장면 3장을 원인 고리 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 5장을 원인 고리 차례로 놓고 유형을 고른다.', challenge: '고리를 끊을 수 있었던 장면을 골라 담는 문항이 더해진다(함정 장면 포함).' },
        activity: {
          title: '사례 원인 고리 놓기', tool: 'story',
          teacher: '"손목이 끌려 들어갈 뻔한 것은 장갑 때문일까요, 그 앞의 무엇 때문일까요?" 장면을 놓을 때마다 \'왜?\'를 한 번 더 묻게 한다. "다친 사람이 조심하지 않아서"라고 끝내는 학생에게 "덮개가 있었다면 장갑이 거기까지 닿았을까요?"라고 되묻는다. 원인은 사람·기계·관리가 얽힌 고리라는 점을 짚는다.',
          task: '가상 공장 사례 장면을 원인 고리 차례로 놓고, 사고 유형과 끊을 고리를 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('가상 공장 사례 장면 5장을 원인 고리 차례로 놓으세요.', CHAIN, { title: '가상 공장 사례' }),
              OB('가상 공장 사례 장면 3장을 원인 고리 차례로 놓으세요.', pickCards(CHAIN, ['c1', 'c3', 'c4']), { title: '가상 공장 사례' })),
            IT(PB('이 사례의 사고 유형 카드를 골라 담으세요.', '사고 유형', [{ id: 't1', text: '끼임', ok: true }, { id: 't2', text: '떨어짐' }, { id: 't3', text: '넘어짐' }], { title: '가상 공장 사례' })),
            IT(PB('원인 고리 가운데 사람·관리가 바꿀 수 있었던 장면을 골라 담으세요.', '바꿀 수 있던 장면', [
              { id: 'c1', text: '납품이 급해 기계 덮개를 떼고 일한다', ok: true }, { id: 'c2', text: '기계를 멈추지 않고 걸린 조각을 뺀다', ok: true }, { id: 'c5', text: '모든 작업이 멈추고 원인을 조사한다' }], { title: '가상 공장 사례' }),
              PB('원인 고리 가운데 바꿀 수 있었던 장면 하나를 골라 담으세요.', '바꿀 수 있던 장면', [
                { id: 'c1', text: '납품이 급해 기계 덮개를 떼고 일한다', ok: true }, { id: 'c5', text: '모든 작업이 멈추고 원인을 조사한다' }], { title: '가상 공장 사례' }),
              PB('고리를 가장 먼저 끊을 수 있었던 장면만 골라 담으세요(함정 장면은 남겨요).', '먼저 끊을 고리', [
                { id: 'c1', text: '납품이 급해 기계 덮개를 떼고 일한다', ok: true }, { id: 'c3', text: '장갑 끝이 돌아가는 부분에 닿는다' },
                { id: 'c4', text: '손목이 기계에 끌려 들어갈 뻔한다' }, { id: 'x1', text: '다친 사람이 운이 나빴다' }], { title: '가상 공장 사례' }),
              { conclude: '사고는 여러 원인이 고리처럼 이어져 생겨요. 앞쪽 고리(덮개·멈춤)를 끊으면 뒤의 사고까지 막을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사례에서 가장 먼저 끊을 고리와 끊는 방법을 한 문장으로 써요.' }] },
      }),
      M('activity.measure-web', {
        title: '유형별 예방 대책 잇기', method: '유형별 예방 대책 잇기', tool: 'mindmap', minutes: 15,
        levels: { easy: '유형 가지 2개(떨어짐·끼임)에 대책 카드를 잇는다.', base: '유형 가지 4개에 대책을 잇고, 대책 카드를 유형별로 나눈다.', challenge: '마지막 문항에서 비용이 적고 효과가 큰 대책을 근거로 골라 담는다.' },
        activity: {
          title: '유형별 예방 대책 잇기', tool: 'mindmap',
          teacher: '"넘어짐을 막는 대책과 끼임을 막는 대책은 같을까요?" 가지마다 대책을 이을 때 그 대책이 원인 고리의 어디를 끊는지 말하게 한다. "조심하자는 말이 가장 좋은 대책"이라는 학생에게 "조심하자는 말과 기계 덮개 가운데 깜빡 잊어도 지켜 주는 것은 무엇일까요?"라고 되묻는다. 사람의 주의보다 시설·절차로 막는 대책이 오래간다는 점을 짚는다.',
          task: '사고 유형 가지마다 알맞은 예방 대책을 잇고, 대책 카드를 유형별로 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('유형 가지마다 알맞은 예방 대책을 이어 보세요.', [['떨어짐', '난간을 달고 안전대를 맨다'], ['끼임', '기계를 멈춘 뒤 손을 넣는다'], ['넘어짐', '바닥의 물·기름을 바로 닦는다'], ['부딪힘', '사람 길과 수레 길을 나눈다']], ['모두 조심하자고 말만 한다'], { topic: '예방 대책', hints: ['유형마다 원인을 끊는 대책을 떠올려요.'] }),
              MB('유형 가지 두 개에 알맞은 예방 대책을 이어 보세요.', [['떨어짐', '난간을 달고 안전대를 맨다'], ['끼임', '기계를 멈춘 뒤 손을 넣는다']], [], { topic: '예방 대책' })),
            IT(SB('대책 카드를 유형 가지에 나누세요.', TYPES, [
              { id: 'a1', text: '사다리를 잡아 줄 사람을 둔다', to: '떨어짐' }, { id: 'a2', text: '높은 곳 가장자리에 난간 달기', to: '떨어짐' },
              { id: 'b1', text: '기계 덮개를 떼지 않는다', to: '끼임' }, { id: 'b2', text: '회전 기계 곁 헐렁한 옷 피하기', to: '끼임' },
              { id: 'c1', text: '통로에 짐을 두지 않는다', to: '넘어짐' }, { id: 'c2', text: '미끄럼 방지 신발 신기', to: '넘어짐' },
              { id: 'd1', text: '모퉁이에 거울을 단다', to: '부딪힘' }, { id: 'd2', text: '수레는 정해진 길로만 민다', to: '부딪힘' }], { topic: '예방 대책' }),
              SB('대책 카드 4장을 유형 가지에 나누세요.', ['떨어짐', '끼임'], [
                { id: 'a1', text: '사다리를 잡아 줄 사람을 둔다', to: '떨어짐' }, { id: 'a2', text: '높은 곳 가장자리에 난간 달기', to: '떨어짐' },
                { id: 'b1', text: '기계 덮개를 떼지 않는다', to: '끼임' }, { id: 'b2', text: '회전 기계 곁 헐렁한 옷 피하기', to: '끼임' }], { topic: '예방 대책' })),
            IT(PB('깜빡 잊어도 사람을 지켜 주는 대책(시설·절차)만 골라 담으세요.', '시설·절차 대책', [
              { id: 'e1', text: '기계 덮개 달기', ok: true }, { id: 'e2', text: '"조심해!"라고 외치기' }, { id: 'e3', text: '사람 길과 수레 길 나누기', ok: true }, { id: 'e4', text: '운이 좋기를 바라기' }], { topic: '예방 대책' }),
              null,
              PB('적은 비용으로 효과가 큰 대책만 근거를 따져 골라 담으세요.', '적은 비용·큰 효과', [
                { id: 'f1', text: '바닥의 물을 바로 닦는 규칙', ok: true }, { id: 'f2', text: '통로에 짐 두지 않기', ok: true },
                { id: 'f3', text: '공장 전체를 새로 짓기' }, { id: 'f4', text: '모퉁이에 거울 하나 달기', ok: true }], { topic: '예방 대책' }),
              { conclude: '유형마다 원인이 달라 대책도 달라요. 사람의 주의보다 시설·절차로 막는 대책이 오래가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '유형마다 예방 대책을 한 가지씩 써요.', columns: ['유형', '대책'], cells: [['떨어짐', ''], ['끼임', ''], ['넘어짐', ''], ['부딪힘', '']], answer: '난간·안전대 / 멈춘 뒤 손 넣기·덮개 / 바닥 정리·닦기 / 길 나누기·거울' }] },
      }),
      M('activity.site-dilemma', {
        title: '납기에 쫓기는 현장 갈림길', method: '작업 현장 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 가 보고 결과를 본다(두 현장).', base: '갈림길 3번까지 끝까지 간다.', challenge: '갈림길 3번까지 간 뒤 근거 카드를 고른다(함정 근거 포함).' },
        activity: {
          title: '납기에 쫓기는 현장 갈림길', tool: 'dilemma',
          teacher: '"오늘 안에 보내야 하는데 안전 점검을 하면 늦어요. 수아라면 어떻게 할까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "어른이 시키면 어쩔 수 없다"는 학생에게 "사고가 나면 납품은 늦지 않을까요?"라고 되묻는다. 급할 때 건너뛴 절차가 사고 원인 고리의 첫 고리가 되는 경우가 많다는 점을 짚는다.',
          task: '가상 공장·창고에서 납기에 쫓기는 상황의 길을 골라 결과를 따라가고, 안전 절차를 지킨 길과 견줘요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL23({ easy: '점검을 건너뛰자는 말이 나왔어요. 두 번 골라 결과를 보세요.', base: '점검을 건너뛰자는 말이 나왔어요. 세 번 골라 끝까지 가 보세요.', challenge: '점검을 건너뛰자는 말이 나왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '가상 공장 오늘 납품', SITE, [['check', 'fix', 'rest']], SITE_R, ['r1', 'r2']),
            DIL23({ easy: '상자를 밟고 올라가자고 해요. 두 번 골라 결과를 보세요.', base: '상자를 밟고 올라가자고 해요. 세 번 골라 끝까지 가 보세요.', challenge: '상자를 밟고 올라가자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '가상 물류 창고', STORE, [['ladder', 'clear', 'say']], STORE_R, ['r1', 'r2']),
            { prompt: '짝과 두 현장에서 "건너뛴 절차"가 무엇이었고 그것이 어떤 유형의 사고로 이어질 수 있는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '납기가 급할 때 안전 점검에 대한 알맞은 생각은?', options: ['급하면 건너뛴다', '급할수록 점검을 지킨다', '점검은 다음 날 한다'], answer: '급할수록 점검을 지킨다' }] },
        notes: '수아·태오는 가상 인물이다. 근로 조건(시간·임금)은 다루지 않는다.',
      }),
      M('activity.case-report', {
        title: '사례 분석 보고 쓰기', method: '사례 분석 보고 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '항목 2개(원인·대책)로 보고를 쓴다(문장 틀).', base: '항목 3개(원인·결과·대책)로 보고를 쓰고 점검한다.', challenge: '마지막 문항에서 대책에 대한 반론과 답까지 더해 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '사례 분석 보고 쓰기', tool: 'rubric-writing',
          teacher: '"보고서에 \'조심하지 않아서 다쳤다\'고만 쓰면 무엇을 고칠 수 있을까요?" 원인을 고리로, 대책을 시설·절차로 쓰게 한다. "대책은 하나면 충분하다"는 학생에게 "그 대책에 \'돈이 많이 든다\'는 반론이 나오면 어떻게 답할까요?"라고 되묻는다. 보고는 사람을 탓하는 글이 아니라 고칠 것을 찾는 글이라고 정리한다.',
          task: '오늘 본 가상 사례 하나를 골라 원인·결과·대책을 보고 글로 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('가상 공장 끼임 사례의 분석 보고를 쓰세요.',
              { topic: '덮개를 떼고 기계를 돌리다 손목이 끌려 들어갈 뻔한 가상 사례의 원인·결과·대책을 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '끼임 사례 보고' },
              ['원인을 차례(고리)로 썼다', '결과를 썼다', '시설·절차 대책을 썼다'],
              { prompt: '틀을 따라 원인과 대책 두 가지를 쓰세요.', starter: '원인은 ___ 때문이다. 대책은 ___이다.', toolOptions: { minSentences: 2, minChars: 25 }, checks: ['원인을 썼다', '시설·절차 대책을 썼다'] }),
            RW('가상 창고 떨어짐 사례의 분석 보고를 쓰세요.',
              { topic: '상자를 밟고 높은 곳에 짐을 올리다 휘청인 가상 사례의 원인·결과·대책을 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '떨어짐 사례 보고' },
              ['원인을 차례(고리)로 썼다', '결과를 썼다', '시설·절차 대책을 썼다'],
              { prompt: '틀을 따라 원인과 대책 두 가지를 쓰세요.', starter: '원인은 ___ 때문이다. 대책은 ___이다.', toolOptions: { minSentences: 2, minChars: 25 }, checks: ['원인을 썼다', '시설·절차 대책을 썼다'] }),
            RW('가상 음식점 넘어짐 사례의 분석 보고를 쓰세요.',
              { topic: '젖은 바닥을 닦지 않아 직원이 미끄러진 가상 사례의 원인·결과·대책을 쓰세요.', minChars: 50, maxChars: 300, minSentences: 3, maxSentences: 6, title: '넘어짐 사례 보고' },
              ['원인을 차례(고리)로 썼다', '결과를 썼다', '시설·절차 대책을 썼다'],
              { prompt: '틀을 따라 원인과 대책 두 가지를 쓰세요.', starter: '원인은 ___ 때문이다. 대책은 ___이다.', toolOptions: { minSentences: 2, minChars: 25 }, checks: ['원인을 썼다', '시설·절차 대책을 썼다'] },
              { prompt: '보고에 대책에 대한 반론 하나와 그 답을 더해 쓰고 점검하세요.', toolOptions: { maxSentences: 8, maxChars: 400 }, add: ['대책에 대한 반론과 답을 썼다'] },
              { conclude: '좋은 사례 보고는 사람을 탓하지 않고, 원인 고리와 고칠 대책을 또렷이 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고른 사례의 분석을 정리해요.', columns: ['원인', '결과', '대책'], cells: [['', '', '']] }] },
      }),
      M('wrap.type-map', {
        title: '모둠 유형별 대책 발표 기록', method: '유형 정리 생각 그물', tool: 'timer', minutes: 9,
        levels: { easy: '모둠이 대책 2개를 발표하는 것을 목표로 기록판에 수를 적는다.', base: '모둠이 대책 4개(유형마다 하나)를 목표로 발표하고 수를 적는다.', challenge: '발표 뒤 다른 모둠의 질문을 받고 받은 질문 수까지 목표로 적는다(교사 진행).' },
        wrap: {
          teacher: '"모둠마다 유형 하나씩 맡아 대책을 한 문장으로 발표해 볼까요?" 칠판에 네 유형 그물을 그리고 발표한 대책을 가지에 적는다. 발표가 끝나면 모둠이 발표한 대책 수와 받은 질문 수를 기록판에 적게 한다. "다른 모둠과 같은 대책이면 말하지 않는다"는 학생에게 같은 대책이라도 다른 유형에 쓰이는지 따져 보자고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모둠 발표 기록', fields: [{ label: '발표한 대책 수', unit: '개', step: 1 }, { label: '받은 질문 수', unit: '개', step: 1 }] }, prompt: '모둠이 발표한 대책 수와 받은 질문 수를 기록판에 적어요.', target: { records: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '"넘어짐" 사고를 막는 대책으로 가장 알맞은 것은?', options: ['기계 덮개 달기', '바닥의 물·기름 바로 닦기', '난간 달기'], answer: 1, difficulty: 0.2, explain: '넘어짐은 바닥 상태를 고쳐 막아요.' },
            { type: 'short', prompt: '오늘 들은 대책 가운데 우리 학교에도 쓸 수 있는 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '유형별 대책 그물',
          items: [
            { type: 'table', prompt: '발표에서 들은 대책을 유형마다 적어요.', columns: ['유형', '대책'], cells: [['떨어짐', ''], ['끼임', ''], ['넘어짐', ''], ['부딪힘', '']] },
            { type: 'short', prompt: '가장 기억에 남는 대책과 그 까닭을 써요.' },
          ],
        },
      }),
      M('wrap.self-check', {
        title: '산업 재해 이해 스스로 점검', method: '배운 유형 점검', tool: 'kitchen', minutes: 9,
        levels: { easy: '점검 항목 3개에 스스로 표시한다.', base: '점검 항목 4개에 스스로 표시한다.', challenge: '항목 4개에 표시한 뒤 더 알고 싶은 것을 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 친구에게 설명할 수 있는 것만 표시해 볼까요?" 점검 항목을 한 줄씩 읽어 준다. "다 안다"는 학생에게 "끼임과 부딪힘의 차이를 한 문장으로 말해 볼까요?"라고 되묻는다. 표시하지 못한 항목은 활동지 표를 다시 보게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '산업 재해 이해 점검', items: SELF }, prompt: '오늘 배운 산업 재해 내용을 스스로 점검해 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '산업 재해 내용 세 가지를 스스로 점검해 표시해요.', toolOptions: { items: SELF.slice(0, 3) } }),
            { type: 'choice', prompt: '산업 재해에 대한 바른 말은?', options: ['공장에서만 생긴다', '음식점·창고 같은 일터에서도 생긴다', '조심하면 절대 생기지 않는다'], answer: 1, difficulty: 0.15, explain: '일하는 곳 어디서나 생길 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '산업 재해 점검',
          items: [
            { type: 'check', prompt: '설명할 수 있는 것에 표시해요.', options: ['산업 재해의 뜻', '유형 네 가지', '유형별 대책', '원인 고리'] },
            { type: 'short', prompt: '산업 재해에 대해 더 알고 싶은 것을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 보호구 바른 착용과 점검 (saf-job.m.ppe-use) ====
  {
    const M = MK('ppe-use', [8]);
    const DON = ['보호구에 금·찢어짐이 없는지 본다', '내 몸에 맞는 크기를 고른다', '끈을 알맞게 조인다', '짝과 서로 착용을 확인한다'];
    const SKIP1 = { text: '기술 시간, 나무 한 조각만 사포 기계로 갈면 된다. 보안경을 가지러 가기 귀찮다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'no', text: '한 조각이니 그냥 간다', result: '가루가 얼굴로 튀어 눈을 감는다.', impact: [{ who: '나', text: '눈을 다칠 뻔한다', tone: -1 }], why: '짧은 작업에도 위험은 같아요.', end: '보안경 없이 해서 위험했어요.',
        next: { text: '눈이 따끔하다.', choices: [
          { id: 'rub', text: '손으로 비빈다', result: '더 따끔하다.', impact: [{ who: '나', text: '더 아프다', tone: -1 }], why: '비비지 말고 선생님께 알려요.' },
          { id: 'tell', text: '멈추고 선생님께 알린다', result: '선생님이 살펴 주신다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }] }] } },
      { id: 'wear', text: '보안경을 가져와 쓰고 간다', result: '가루가 튀어도 눈은 안전하다.', impact: [{ who: '나', text: '눈을 지킨다', tone: 1 }], end: '보안경을 쓰고 했어요.',
        next: { text: '친구가 "나도 한 조각만 할 건데"라며 맨눈으로 하려 한다.', choices: [
          { id: 'lend', text: '보안경을 건네며 쓰자고 한다', result: '친구도 쓴다.', impact: [{ who: '친구', text: '눈을 지킨다', tone: 1 }] },
          { id: 'skip', text: '친구 일이라 둔다', result: '친구 얼굴로 가루가 튄다.', impact: [{ who: '친구', text: '다칠 뻔한다', tone: -1 }], why: '서로 챙기면 함께 안전해요.' }] } }] };
    const SKIP2 = { text: '목공실 전동 드릴 소리가 크다. 5분이면 끝나니 귀마개 없이 하자는 말이 나온다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'noplug', text: '귀마개 없이 한다', result: '끝나고 귀가 멍멍하다.', impact: [{ who: '나', text: '귀가 힘들다', tone: -1 }], why: '큰 소리는 짧아도 귀에 쌓여요.', end: '귀마개 없이 해서 귀가 멍멍했어요.',
        next: { text: '다음 시간에도 같은 작업이 있다.', choices: [
          { id: 'same', text: '이번에도 그냥 한다', result: '귀가 또 멍멍하다.', impact: [{ who: '나', text: '귀가 더 힘들다', tone: -1 }] },
          { id: 'plug', text: '이번엔 귀마개를 챙겨 쓴다', result: '소리가 줄어 편하다.', impact: [{ who: '나', text: '귀를 지킨다', tone: 1 }] }] } },
      { id: 'plug', text: '귀마개를 바르게 끼우고 한다', result: '소리가 줄어 작업에 집중한다.', impact: [{ who: '나', text: '귀를 지킨다', tone: 1 }], end: '귀마개를 끼고 했어요.',
        next: { text: '귀마개를 끼니 친구 말이 잘 안 들린다.', choices: [
          { id: 'pull', text: '말할 때마다 귀마개를 뺀다', result: '드릴 소리가 다시 귀에 들어온다.', impact: [{ who: '나', text: '귀가 힘들다', tone: -1 }], why: '작업 중에는 빼지 말고 멈춘 뒤 말해요.' },
          { id: 'sign', text: '드릴을 멈춘 뒤 이야기하기로 짝과 약속한다', result: '소리 없이 이야기하고 다시 작업한다.', impact: [{ who: '짝', text: '함께 귀를 지킨다', tone: 1 }] }] } }] };
    const SKIP_R = [{ id: 'r1', text: '짧은 작업에도 위험은 줄지 않는다' }, { id: 'r2', text: '서로 챙기면 함께 안전하다' }, { id: 'r3', text: '귀찮으면 한 번쯤 안 써도 된다', why: '한 번에 다칠 수 있어요.' }];

    ALL.push(
      M('intro.gear-parts', {
        title: '보호구가 지키는 몸의 곳', method: '보호구가 지키는 몸의 곳', tool: 'body', minutes: 6,
        levels: { easy: '교사가 눈·귀 두 곳을 짚어 보인다.', base: '시연으로 눈·귀·발목·피부 네 곳을 고른다.', challenge: '네 곳을 고른 뒤 곳마다 막는 위험 이름(튀는 가루·큰 소리·떨어지는 물건·뜨거운 것)을 말한다.' },
        intro: {
          teacher: '"보안경·귀마개·안전화는 각각 몸의 어디를 지킬까요?" 종이 몸에서 눈·귀·발목·피부가 골라지는 시연을 보인다. 몸 그림에 머리·손·발 칸이 없으니 안전모·장갑·안전화는 학생이 자기 몸을 짚으며 말하게 한다. "보호구는 아무거나 쓰면 된다"는 말에는 "귀마개로 눈을 지킬 수 있을까요?"라고 되묻는다.',
          student: '종이 몸에서 보호구가 지키는 곳을 고르고, 안전모·장갑·안전화가 지키는 곳은 내 몸을 짚어 짝에게 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '피부', '목', '손목', '무릎', '발목'], names: true }, sequence: [{ parts: ['눈', '귀', '발목', '피부'] }] },
          art: { draw: 'a paper-cut workbench with safety glasses, ear muffs, gloves and safety shoes laid out next to a paper body outline', banner: '어디를 지킬까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '몸 그림에 머리·손·발 칸이 없어 안전화는 발목 칸으로 대신하고, 안전모·장갑은 말로 짚는다.',
      }),
      M('intro.wrong-gear', {
        title: '잘못 쓴 보호구 장면', method: '잘못 쓴 보호구 장면', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2장 가운데 문제 장면을 함께 고른다.', base: '시연으로 장면 3장 가운데 잘못 쓴 장면을 고른다.', challenge: '문제 장면을 고친 장면을 말로 바꿔 말한다.' },
        intro: {
          teacher: '"보호구를 썼는데도 다칠 수 있을까요?" 장면 카드를 넘겨 보이고 시연 단추로 헐렁하게 쓴 장면이 담기는 모습을 보인다. "헐렁하게 써도 효과는 같다"는 말에는 "헐렁한 보안경 틈으로 가루가 들어오면 어떻게 될까요?"라고 되묻는다. 보호구는 바르게 써야 효과가 있다는 점을 오늘 연습한다고 밝힌다.',
          student: '장면 카드를 보고 보호구를 잘못 쓴 장면을 골라요. 그 장면을 어떻게 고치면 될지 짝에게 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '잘못 쓴 장면', title: '기술실 세 장면', shuffle: false, cards: [
            { id: 'w1', text: '보안경을 이마에 올려 둔 채 작업한다', motif: 'star' }, { id: 'w2', text: '귀마개를 끝까지 끼고 드릴을 쓴다', motif: 'cloud' }, { id: 'w3', text: '끈을 조이고 짝과 서로 확인한다', motif: 'sun' }] }, sequence: [{ pick: ['w1'] }] },
          art: { draw: 'a paper-cut workshop with three panels: a student with safety glasses pushed up on the forehead, one wearing ear plugs properly, two students checking straps', banner: '어디가 잘못됐을까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.don-order', {
        title: '보호구 착용 차례 실습', method: '보호구 착용 차례 실습', tool: 'timer', minutes: 15,
        levels: { easy: '착용 차례 카드 3장을 놓는다.', base: '착용 차례 카드 4장을 놓고 실습 뒤 스스로 점검한다.', challenge: '마지막 문항의 스스로 점검에 항목(벗은 뒤 제자리 보관)이 하나 더해진다.' },
        activity: {
          title: '보호구 착용 차례 실습', tool: 'timer',
          teacher: '"보호구를 쓰기 전에 먼저 볼 것은 무엇일까요?" 차례 카드를 놓은 뒤 학교 실습실 보안경·장갑으로 실제 착용을 해 보게 한다. "새 것처럼 보이면 점검 안 해도 된다"는 학생에게 "끈 안쪽에 금이 간 보안경은 겉으로 보일까요?"라고 되묻는다. 짝과 서로 확인하는 마지막 차례가 왜 필요한지 짚는다.',
          task: '보호구 착용 차례 카드를 놓고 실습 전 점검을 한 뒤, 실제로 착용해 보고 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '보호구 착용 차례 카드를 놓고, 실습 전 점검을 모두 표시하세요.', toolOptions: { title: '보호구 착용 차례', cards: [DON[2], DON[0], DON[3], DON[1]], safety: ['금·찢어짐이 없다', '끈이 풀리거나 끊어지지 않았다', '내 크기에 맞다'] }, target: { safety: true, order: DON } },
              { prompt: '보호구 착용 차례 세 장을 놓고, 실습 전 점검을 표시하세요.', toolOptions: { cards: [DON[2], DON[0], DON[1]] }, target: { safety: true, order: DON.slice(0, 3) } }),
            { prompt: '선생님이 나눠 준 보안경·장갑을 차례대로 착용하고 짝과 서로 확인한 뒤 표시하세요.', free: true, toolOptions: { doneLabel: '보호구를 착용하고 서로 확인했어요' } },
            IT({ prompt: '내 착용을 스스로 점검해 표시하세요.', toolOptions: { title: '착용 점검' }, target: { selfCheck: ['쓰기 전에 손상을 보았다', '크기가 맞아 헐렁하지 않다', '짝과 서로 확인했다'] } },
              null,
              { prompt: '내 착용과 보관까지 스스로 점검해 표시하세요.', target: { selfCheck: ['쓰기 전에 손상을 보았다', '크기가 맞아 헐렁하지 않다', '짝과 서로 확인했다', '벗은 뒤 제자리에 보관했다'] } },
              { conclude: '보호구는 점검→크기→끈→서로 확인 차례로 바르게 써야 지켜 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보호구를 쓰기 전에 점검할 것 두 가지를 써요.' }] },
        notes: '실습은 학교 실습실 보호구로만 한다. 손상된 보호구는 쓰지 않고 교사에게 낸다.',
      }),
      M('activity.task-match', {
        title: '작업과 보호구 맞추기', method: '작업과 보호구 맞추기', tool: 'kitchen', minutes: 15,
        levels: { easy: '작업 칸 2개(연마·소음)에 보호구 카드를 나누고, 틀리면 바로 알려 준다.', base: '작업 칸 3개(용접·연마·소음)에 보호구 카드를 나눈다.', challenge: '보호구마다 막는 위험을 근거로 잇는 문항에 함정 카드가 섞인다.' },
        activity: {
          title: '작업과 보호구 맞추기', tool: 'kitchen',
          teacher: '"용접할 때와 나무를 갈 때 같은 보호구를 쓸까요?" 카드를 나눌 때마다 그 작업의 위험이 무엇인지 먼저 말하게 한다. "보안경 하나면 다 된다"는 학생에게 "용접 불빛과 뜨거운 불티도 보안경 하나로 막을 수 있을까요?"라고 되묻는다. 작업의 위험에 맞는 보호구를 고른다는 점을 짚는다.',
          task: '작업 카드(용접·연마·소음 작업)에 맞는 보호구를 나누고, 보호구가 막는 위험과 손상된 보호구를 가려내요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('보호구 카드를 작업 칸에 나누세요.', ['용접', '연마', '소음 작업'], [
              { id: 'g1', text: '용접 보안면', to: '용접' }, { id: 'g2', text: '불티를 막는 용접 장갑', to: '용접' },
              { id: 'g3', text: '보안경', to: '연마' }, { id: 'g4', text: '가루를 막는 방진 마스크', to: '연마' },
              { id: 'g5', text: '귀마개', to: '소음 작업' }, { id: 'g6', text: '귀덮개', to: '소음 작업' }], KO),
              SB('보호구 카드 4장을 작업 칸에 나누세요.', ['연마', '소음 작업'], [
                { id: 'g3', text: '보안경', to: '연마' }, { id: 'g4', text: '가루를 막는 방진 마스크', to: '연마' },
                { id: 'g5', text: '귀마개', to: '소음 작업' }, { id: 'g6', text: '귀덮개', to: '소음 작업' }], KO)),
            IT(MB('보호구마다 막는 위험을 이어 보세요.', [['보안경', '튀는 가루·조각'], ['귀마개', '큰 소리'], ['방진 마스크', '날리는 가루']], [], KO),
              MB('보호구 두 개가 막는 위험을 이어 보세요.', [['보안경', '튀는 가루·조각'], ['귀마개', '큰 소리']], [], KO),
              MB('보호구마다 막는 위험을 이어 보세요(어울리지 않는 카드는 남겨요).', [['보안경', '튀는 가루·조각'], ['귀마개', '큰 소리'], ['방진 마스크', '날리는 가루']], ['멋있어 보이기', '빨리 끝내기'], KO)),
            IT(PB('쓰면 안 되는 보호구만 골라 담으세요.', '쓰면 안 되는 보호구', [
              { id: 'p1', text: '렌즈에 금이 간 보안경', ok: true }, { id: 'p2', text: '끈이 끊어진 마스크', ok: true }, { id: 'p3', text: '내 크기에 맞는 장갑' }, { id: 'p4', text: '손가락에 구멍 난 장갑', ok: true }], KO),
              null, null, { conclude: '보호구는 작업의 위험에 맞게 고르고, 손상된 것은 쓰지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '작업마다 쓸 보호구를 써요.', columns: ['작업', '보호구'], cells: [['용접', ''], ['연마', ''], ['소음 작업', '']], answer: '보안면·용접 장갑 / 보안경·방진 마스크 / 귀마개·귀덮개' }] },
      }),
      M('activity.skip-dilemma', {
        title: '잠깐인데 안 써도 될까', method: '잠깐인데 안 써도 될까', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다(두 상황).', base: '갈림길 2번까지 끝까지 간다.', challenge: '갈림길 2번까지 간 뒤 근거 카드를 고른다(함정 근거 포함).' },
        activity: {
          title: '잠깐인데 안 써도 될까', tool: 'dilemma',
          teacher: '"한 조각, 5분이면 보호구를 안 써도 될까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "지금까지 안 써도 괜찮았다"는 학생에게 "괜찮았던 것은 위험이 없어서였을까요, 운이 좋아서였을까요?"라고 되묻는다. 친구에게 건네는 선택도 보호구 사용의 일부라는 점을 짚는다.',
          task: '짧은 작업이라 보호구를 생략하고 싶은 두 상황에서 길을 골라 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL12({ easy: '나무 한 조각만 갈면 돼요. 한 번 골라 결과를 보세요.', base: '나무 한 조각만 갈면 돼요. 두 번 골라 끝까지 가 보세요.', challenge: '나무 한 조각만 갈면 돼요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '사포 기계 한 조각', SKIP1, [['wear', 'lend']], SKIP_R, ['r1', 'r2']),
            DIL12({ easy: '드릴 작업이 5분이면 끝나요. 한 번 골라 결과를 보세요.', base: '드릴 작업이 5분이면 끝나요. 두 번 골라 끝까지 가 보세요.', challenge: '드릴 작업이 5분이면 끝나요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '목공실 드릴 5분', SKIP2, [['plug', 'sign']], SKIP_R, ['r1', 'r2']),
            { prompt: '짝과 "잠깐이니까"라는 말이 왜 위험한지, 두 상황의 결과로 근거를 들어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"잠깐인데 안 써도 돼"라고 말하는 친구에게 해 줄 말을 한 문장으로 써요.' }] },
      }),
      M('wrap.check-list', {
        title: '작업 전 점검 생각 그물', method: '작업 전 점검표 완성', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 2개(보호구·기계)에 점검 카드 4장을 넣는다.', base: '가지 3개(보호구·기계·작업 공간)에 점검 카드 6장을 넣는다.', challenge: '함정 카드 2장이 섞인 판에서 넣고, 점검이 필요한 까닭을 짧게 쓴다.' },
        wrap: {
          teacher: '"작업을 시작하기 전에 무엇을 점검하면 오늘 배운 사고를 막을 수 있을까요?" 가지를 다 채우면 우리 실습실 점검표에 넣을 항목을 하나씩 고르게 한다. "점검은 선생님이 하시는 것"이라는 말에는 "내가 쓸 보안경의 금은 누가 가장 먼저 볼 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '작업 전 점검', slots: ['보호구', '기계', '작업 공간'], cards: [
              { id: 'a1', text: '보안경 렌즈에 금이 없는지' }, { id: 'a2', text: '장갑 크기가 맞는지' }, { id: 'b1', text: '기계 덮개가 붙어 있는지' }, { id: 'b2', text: '멈춤 단추가 되는지' },
              { id: 'c1', text: '통로에 짐이 없는지' }, { id: 'c2', text: '바닥에 물·기름이 없는지' }] }, prompt: '작업 전 점검 가지에 점검 카드를 넣어요.', target: { sort: { 보호구: ['a1', 'a2'], 기계: ['b1', 'b2'], '작업 공간': ['c1', 'c2'] } }, difficulty: 0.2 },
              { prompt: '점검 가지 두 개에 점검 카드를 넣어요.', toolOptions: { slots: ['보호구', '기계'], cards: [{ id: 'a1', text: '보안경 렌즈에 금이 없는지' }, { id: 'a2', text: '장갑 크기가 맞는지' }, { id: 'b1', text: '기계 덮개가 붙어 있는지' }, { id: 'b2', text: '멈춤 단추가 되는지' }] }, target: { sort: { 보호구: ['a1', 'a2'], 기계: ['b1', 'b2'] } } },
              { toolOptions: { cards: [
                { id: 'a1', text: '보안경 렌즈에 금이 없는지' }, { id: 'a2', text: '장갑 크기가 맞는지' }, { id: 'b1', text: '기계 덮개가 붙어 있는지' }, { id: 'b2', text: '멈춤 단추가 되는지' },
                { id: 'c1', text: '통로에 짐이 없는지' }, { id: 'c2', text: '바닥에 물·기름이 없는지' }, { id: 't1', text: '빨리 끝낼 수 있는지' }, { id: 't2', text: '보호구가 멋있는지' }] } }),
            { type: 'choice', prompt: '회전하는 기계 곁에서 피해야 할 것은?', options: ['몸에 맞는 작업복', '헐렁한 장갑과 소매', '보안경'], answer: 1, difficulty: 0.2, explain: '헐렁한 것은 돌아가는 부분에 걸려 끼일 수 있어요.' },
            { type: 'short', prompt: '작업 전 점검이 필요한 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '작업 전 점검표',
          items: [
            { type: 'table', prompt: '가지마다 점검할 것을 한 가지씩 써요.', columns: ['가지', '점검할 것'], cells: [['보호구', ''], ['기계', ''], ['작업 공간', '']], answer: '금·크기 / 덮개·멈춤 단추 / 통로·바닥' },
            { type: 'short', prompt: '우리 실습실 점검표에 꼭 넣을 항목 하나를 써요.' },
          ],
        },
      }),
      M('wrap.reflect', {
        title: '보호구 실습 성찰 한 문단', method: '실습 성찰 한 문단', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '두 문장(소감·고칠 점)을 문장 틀로 쓴다.', base: '네 문장으로 쓰고 기준 3개를 점검한다.', challenge: '네 문장에 다음 실습 목표 한 문장을 더하고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"오늘 보호구를 쓰면서 불편했던 점과 그래도 써야 하는 까닭을 한 문단으로 써 볼까요?" 불편함을 솔직하게 쓰되 그것을 줄일 방법까지 쓰게 한다. "불편하니 안 쓰고 싶다"는 학생에게 "불편함을 줄이는 방법(크기 맞추기·끈 조절)은 무엇이 있었나요?"라고 되묻는다. 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 보호구 착용 실습의 소감과 고칠 점을 네 문장으로 쓰세요.', minChars: 50, maxChars: 280, minSentences: 4, maxSentences: 5, title: '보호구 실습 성찰' },
              prompt: '보호구 실습 성찰을 네 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['실습에서 한 일을 썼다', '불편했던 점과 줄일 방법을 썼다', '보호구를 써야 하는 까닭을 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, maxSentences: 3, minChars: 20, starter: '오늘 나는 ___. 다음에는 ___.' }, target: { selfCheck: ['실습에서 한 일을 썼다', '다음에 고칠 점을 썼다'] } },
              { prompt: '네 문장에 다음 실습 목표를 한 문장 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 6 }, target: { selfCheck: ['실습에서 한 일을 썼다', '불편했던 점과 줄일 방법을 썼다', '보호구를 써야 하는 까닭을 썼다', '다음 실습 목표를 썼다'] } }),
            { type: 'choice', prompt: '보호구가 헐렁해 불편할 때 알맞은 행동은?', options: ['벗고 작업한다', '크기를 바꾸거나 끈을 조절한다', '참고 헐렁하게 쓴다'], answer: 1, difficulty: 0.15, explain: '맞게 써야 지켜 주고 덜 불편해요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '보호구 실습 성찰',
          items: [
            { type: 'short', prompt: '오늘 실습의 소감과 고칠 점을 써요.' },
            { type: 'check', prompt: '내 성찰 글을 기준표로 점검해요.', options: ['한 일을 썼다', '불편함과 줄일 방법을 썼다', '써야 하는 까닭을 썼다'] },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 청소년 아르바이트 일터의 위험과 안전 문화 (saf-job.m.youth-work) ====
  {
    const M = MK('youth-work', [9]);
    const RISK = [['미끄러짐·넘어짐', 30], ['뜨거운 것에 데임', 25], ['무거운 짐', 20], ['배달 이동 중 사고', 15], ['베임', 10]];
    const SHOPMAP = { grid: [6, 4], title: '가상의 분식집 칸 지도', regions: [
      { name: '튀김기 곁', cells: [[0, 0], [1, 0]] }, { name: '설거지대 앞 바닥', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] },
      { name: '창고 높은 선반', cells: [[4, 0], [5, 0]] }, { name: '도마 자리', cells: [[0, 1], [1, 1]] },
      { name: '창고 바닥 상자', cells: [[4, 1], [5, 1]] }, { name: '계산대', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] },
      { name: '손님 자리', cells: [[2, 2], [3, 2], [4, 2], [2, 3], [3, 3], [4, 3]] }, { name: '출입문', cells: [[5, 2], [5, 3]] }] };
    const REFUSE = { text: '가상 분식집, 일한 지 이틀째인 하윤에게 점장이 "튀김기 기름 좀 갈아 줘"라고 한다. 하윤은 아직 그 일을 배운 적이 없다.', ask: '하윤은 어떻게 할까?', motif: 'house', choices: [
      { id: 'try', text: '혼자 해 보겠다며 뜨거운 기름 통을 든다', result: '통이 무거워 기름이 출렁인다.', impact: [{ who: '하윤', text: '데일 뻔한다', tone: -1 }], why: '배우지 않은 위험한 일은 먼저 배우고 해요.', end: '혼자 해 보다 위험했어요.',
        next: { text: '기름이 바닥에 조금 튀었다.', choices: [
          { id: 'hide', text: '혼날까 봐 말하지 않고 닦는다', result: '닦다 젖은 바닥에서 미끄러질 뻔한다.', impact: [{ who: '하윤', text: '또 다칠 뻔한다', tone: -1 }], why: '숨기지 말고 바로 알려요.' },
          { id: 'tell', text: '바로 멈추고 점장에게 알린다', result: '점장이 바닥을 정리하고 방법을 알려 준다.', impact: [{ who: '하윤', text: '도움을 받는다', tone: 1 }] }] } },
      { id: 'ask', text: '"아직 배운 적이 없어요, 먼저 알려 주세요"라고 말한다', result: '점장이 잠시 멈칫한다.', impact: [{ who: '하윤', text: '위험한 일을 혼자 하지 않는다', tone: 1 }], end: '배운 적 없다고 말했어요.',
        next: { text: '점장이 "바쁘니 보면서 대충 해"라고 한다.', ask: '다음에는?', choices: [
          { id: 'go', text: '눈치가 보여 대충 따라 한다', result: '기름 통을 기울이다 손이 떨린다.', impact: [{ who: '하윤', text: '데일 수 있다', tone: -1 }], why: '대충 배운 위험한 일은 혼자 하지 않아요.' },
          { id: 'together', text: '식은 뒤 함께 하며 배우고 싶다고 말한다', result: '점장이 기름을 식힌 뒤 함께 한다.', impact: [{ who: '하윤', text: '안전하게 배운다', tone: 1 }], end: '식힌 뒤 함께 배우기로 했어요.',
            next: { text: '일을 마치고 나니, 튀김기 곁 장갑이 구멍 나 있다.', ask: '어떻게 할까?', choices: [
              { id: 'report', text: '점장에게 새 장갑이 필요하다고 알린다', result: '다음 날 새 장갑이 놓인다.', impact: [{ who: '동료들', text: '함께 안전해진다', tone: 1 }] },
              { id: 'keep', text: '아직 쓸 만하다며 그냥 둔다', result: '다음 사람이 구멍 난 장갑을 쓴다.', impact: [{ who: '동료들', text: '데일 수 있다', tone: -1 }], why: '손상된 보호구는 알려서 바꿔요.' }] } }] } },
      { id: 'quit', text: '아무 말 없이 그냥 집에 간다', result: '아무도 무슨 일인지 모른다.', impact: [{ who: '하윤', text: '도움을 받을 기회를 놓친다', tone: -1 }], why: '위험하다고 느끼면 말로 알리고 도움을 청해요.', ending: '말없이 가서 아무것도 바뀌지 않았어요.' }] };
    const REFUSE_R = [{ id: 'r1', text: '배우지 않은 위험한 일은 먼저 배우고 해야 한다' }, { id: 'r2', text: '위험을 말하면 나와 동료를 함께 지킨다' },
      { id: 'r3', text: '어른이 시키면 위험해도 해야 한다', why: '위험한 지시는 거절하고 안전한 방법을 청할 수 있어요.' }, { id: 'r4', text: '짧게 일하니 위험이 적다', why: '일한 기간이 짧을수록 위험을 잘 몰라요.' }];
    const FIRST = [
      { id: 'k1', text: '이 일터의 위험한 곳을 안내받았다', ok: true }, { id: 'k2', text: '내가 할 일의 안전한 방법을 배웠다', ok: true },
      { id: 'k3', text: '쓸 보호구가 어디 있는지 안다', ok: true }, { id: 'k4', text: '다쳤을 때 누구에게 알릴지 안다', ok: true },
      { id: 'k5', text: '불이 나면 나갈 길을 안다', ok: true }, { id: 't1', text: '처음엔 물어보지 말고 눈치껏 한다' }, { id: 't2', text: '다쳐도 바쁘면 말하지 않는다' }];
    const CASE = [{ id: 'c1', text: '첫날 위험한 곳 안내 없이 바로 일을 시작한다' }, { id: 'c2', text: '바쁜 점심, 젖은 바닥을 닦지 못한다' },
      { id: 'c3', text: '무거운 국통을 혼자 들고 걷는다' }, { id: 'c4', text: '젖은 바닥에서 미끄러질 뻔한다' }];

    ALL.push(
      M('intro.job-scene', {
        title: '아르바이트 장면에서 위험 찾기', method: '아르바이트 장면에서 위험 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 보기 2개(위험한 행동·안전한 행동)로 줄여 읽는다.', base: '시연으로 보기 3개 가운데 위험한 행동을 고르고 결과를 본다.', challenge: '고른 행동이 왜 위험한지 근거를 말한다.' },
        intro: {
          teacher: '"이 편의점 장면에서 가장 위험한 행동은 무엇일까요?" 장면을 띄우고 시연 단추로 위험한 행동이 골라지며 결과가 보이는 모습을 보인다. "아르바이트는 짧으니 위험이 적다"는 말에는 "처음 온 사람은 그 일터의 위험한 곳을 알까요?"라고 되묻는다. 오늘은 청소년이 일할 수 있는 일터의 위험을 찾고 안전하게 일하는 행동을 정한다고 밝힌다. 일한 경험을 발표시키지 않는다.',
          student: '가상 편의점 장면에서 위험한 행동을 골라 보고, 그 행동 대신 무엇을 하면 안전할지 짝에게 한 줄로 말해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '가상 편의점, 음료 상자 다섯 개를 한 번에 쌓아 들고 젖은 창고 바닥을 걸어가려 한다.', ask: '가장 위험한 행동은?', motif: 'house', choices: [
            { id: 'stack', text: '앞이 안 보이게 쌓아 들고 걷는다', result: '젖은 바닥에서 미끄러질 뻔한다.' }, { id: 'split', text: '두 번에 나눠 든다', result: '앞을 보며 안전하게 옮긴다.' }, { id: 'cart', text: '수레에 실어 옮긴다', result: '허리에 무리가 덜하다.' }] }, sequence: [{ choice: 'stack' }] },
          art: { draw: 'a paper-cut convenience store storage room with a teen worker carrying stacked boxes over a wet floor, a hand cart standing nearby', banner: '어떤 행동이 위험할까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
      }),
      M('intro.example-chart', {
        title: '일터 위험 종류 예시 원그래프', method: '예시 자료로 보는 일터 위험', tool: 'chart', minutes: 6,
        levels: { easy: '조각마다 비율이 보이는 판으로 가장 큰 조각을 읽는다.', base: '조각 크기를 견주어 가장 큰 위험 종류를 고른다.', challenge: '이 예시 자료의 한계(가상·누구를 셌는지 모름)를 짚어 말한다.' },
        intro: {
          teacher: '"이 원그래프는 수업용으로 지어낸 예시 자료예요. 가상 청소년 일터에서 가장 큰 위험 조각은 무엇일까요?" 시연 단추로 가장 큰 조각이 골라지는 모습을 보인다. "작은 조각은 신경 안 써도 된다"는 말에는 "조각이 작아도 한 번에 크게 다칠 수 있는 위험은 없을까요?"라고 되묻는다. 실제 자료가 아니라는 점을 화면 제목으로 먼저 짚는다.',
          student: '예시 원그래프에서 가장 큰 위험 종류를 찾고, 이 자료만으로 알 수 없는 것이 무엇인지 한 가지 말해요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '가상 청소년 일터의 위험 종류(예시 자료, 실제 통계 아님)', unit: '%', data: RISK, question: '가장 큰 위험 종류는?', choices: RISK.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut pie chart pinned on a staff room board in a small restaurant, slices with tiny icons of a wet floor, a hot pot and heavy boxes', banner: '가장 큰 조각은?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.hazard-map', {
        title: '분식집 지도 위험 칸', method: '가게 지도에서 위험 칸 찾기', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 그 칸 이름이 바로 읽힌다.', base: '위험 네 가지(화상·미끄럼·떨어지는 짐·무거운 짐)마다 칸에 핀을 꽂는다.', challenge: '마지막 문항에서 핀을 꽂고 그 위험의 대책을 고른다.' },
        activity: {
          title: '분식집 지도 위험 칸', tool: 'map',
          teacher: '"이 분식집에서 데일 수 있는 곳은 어디일까요?" 칸 지도에서 위험 종류마다 그 자리를 찾아 핀을 꽂게 한다. "손님 자리는 안전하다"는 학생에게 "뜨거운 국을 들고 손님 자리로 걸어갈 때 바닥이 젖어 있다면 어떨까요?"라고 되묻는다. 위험한 곳을 첫날 알고 시작하는 것이 안전의 시작이라고 짚는다.',
          task: '가상의 분식집 칸 지도에서 화상·미끄럼·떨어지는 짐·무거운 짐 위험이 있는 칸을 찾아 핀을 꽂아요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('뜨거운 기름에 데일 수 있는 곳에 핀을 꽂으세요.', SHOPMAP, { region: '튀김기 곁' }),
            PIN('물이 자주 튀어 미끄러지기 쉬운 곳에 핀을 꽂으세요.', SHOPMAP, { region: '설거지대 앞 바닥' }),
            PIN('물건이 떨어질 수 있는 곳에 핀을 꽂으세요.', SHOPMAP, { region: '창고 높은 선반' }),
            IT(PIN('무거운 짐을 들다 허리를 다칠 수 있는 곳에 핀을 꽂으세요.', SHOPMAP, { region: '창고 바닥 상자' }),
              null,
              { prompt: '무거운 짐 위험이 있는 곳에 핀을 꽂고, 알맞은 대책을 고르세요.', toolOptions: { ask: { q: '무거운 상자를 옮길 때 알맞은 방법은?', choices: ['무릎을 굽혀 들고 나눠 들거나 수레를 쓴다', '허리만 숙여 한 번에 든다', '바쁘면 끌고 간다'] } }, target: { region: '창고 바닥 상자', pick: 0 } },
              { conclude: '일을 시작할 때 그 일터의 위험한 곳(튀김기·젖은 바닥·높은 선반·무거운 짐)을 먼저 알아 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '위험한 곳마다 대책을 써요.', columns: ['곳', '대책'], cells: [['튀김기 곁', ''], ['설거지대 앞 바닥', ''], ['창고 바닥 상자', '']], answer: '장갑·식힌 뒤 다루기 / 바로 닦기·미끄럼 방지 신발 / 무릎 굽혀 들기·나눠 들기·수레' }] },
        notes: '칸 지도는 가상 분식집이다. 학생의 실제 일터를 묻지 않는다.',
      }),
      M('activity.refuse-dilemma', {
        title: '위험한 지시 갈림길', method: '위험한 지시 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 2번까지 가 보고 결과를 본다.', base: '갈림길 3번까지 끝까지 간다.', challenge: '갈림길 3번까지 간 뒤 근거 카드를 고른다(함정 근거 포함).' },
        activity: {
          title: '위험한 지시 갈림길', tool: 'dilemma',
          teacher: '"배운 적 없는 위험한 일을 시키면, 거절하면 안 되는 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "어른이 시키면 위험해도 해야 한다"는 학생에게 "다치면 그 일은 누가 대신할 수 있을까요?"라고 되묻는다. 거절은 무례가 아니라 \'배우고 하겠다\'는 안전한 말이라는 점과, 말없이 떠나기보다 말로 알리는 쪽이 결과를 바꾼다는 점을 짚는다.',
          task: '교육 없이 위험한 일을 맡기는 상황에서 길을 골라 결과를 끝까지 따라가고, 거절하고 배우는 길과 견줘요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL23({ easy: '배운 적 없는 튀김기 일을 맡기려 해요. 두 번 골라 결과를 보세요.', base: '배운 적 없는 튀김기 일을 맡기려 해요. 세 번 골라 끝까지 가 보세요.', challenge: '배운 적 없는 튀김기 일을 맡기려 해요. 세 번 골라 끝까지 가고 근거를 고르세요.' },
              '가상 분식집 이틀째', REFUSE, [['ask', 'together', 'report']], REFUSE_R, ['r1', 'r2']),
            { prompt: '짝과 "아직 배운 적이 없어요, 먼저 알려 주세요"를 서로 말해 보고, 어떤 말투가 덜 어려운지 이야기해요.', free: true, talk: true },
            { prompt: '갈림길에서 고른 길과 다른 길의 결과를 견주어, 결과를 가른 선택 하나를 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '배우지 않은 위험한 일을 맡았을 때 할 말을 한 문장으로 써요.' }] },
        notes: '하윤은 가상 인물이다. 근로 관련 수치·법 조항은 다루지 않는다(근거 없음). 실제 일터에서 어려움이 있으면 담임·상담 선생님께 알리도록 안내한다.',
      }),
      M('activity.first-day-check', {
        title: '첫날 확인 목록', method: '첫날 확인 목록', tool: 'kitchen', minutes: 15,
        levels: { easy: '확인 항목 3개 가운데 맞는 것을 고른다(함정 없음).', base: '항목 7개(함정 2개 포함)에서 확인할 것 5개를 고른다.', challenge: '확인할 것마다 물어볼 말을 짝 짓는 문항에 함정 카드가 섞인다.' },
        activity: {
          title: '첫날 확인 목록', tool: 'kitchen',
          teacher: '"일하는 첫날, 무엇을 묻고 시작해야 할까요?" 확인 목록을 고른 뒤 그것을 어떻게 물어볼지 말로 연습하게 한다. "처음엔 물어보면 눈치 없어 보인다"는 학생에게 "모르는 채 위험한 곳에서 일하는 것과 한 번 묻는 것 가운데 무엇이 더 어려울까요?"라고 되묻는다. 안전 교육을 받는 것은 일하는 사람이 챙길 일이고, 알려 주는 것은 일터가 할 일이라고 정리한다.',
          task: '일을 시작하는 첫날 확인할 것(안전 교육·보호구·비상 연락)을 고르고, 그것을 물어볼 말을 정해요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(CL('일을 시작하는 첫날 확인할 것만 골라 표시하세요.', '첫날 확인 목록', FIRST),
              CL('첫날 확인할 것 세 가지를 표시하세요.', '첫날 확인 목록', FIRST.slice(0, 3))),
            IT(CL('배달 일을 처음 맡을 때 확인할 것만 골라 표시하세요.', '배달 첫날 확인', [
              { id: 'd1', text: '이동 수단의 안전한 사용법을 배웠다', ok: true }, { id: 'd2', text: '보호 장비(안전모 등)가 있다', ok: true },
              { id: 'd3', text: '날씨가 나쁠 때 어떻게 할지 안다', ok: true }, { id: 'd4', text: '늦으면 신호를 무시해도 된다' }, { id: 'd5', text: '사고가 나면 알릴 사람을 안다', ok: true }]),
              CL('배달 첫날 확인할 것 세 가지를 표시하세요.', '배달 첫날 확인', [
                { id: 'd1', text: '이동 수단의 안전한 사용법을 배웠다', ok: true }, { id: 'd2', text: '보호 장비(안전모 등)가 있다', ok: true }, { id: 'd5', text: '사고가 나면 알릴 사람을 안다', ok: true }])),
            IT(Object.assign(MB('확인할 것마다 물어볼 말을 이어 보세요.', [['위험한 곳', '"여기서 조심할 곳이 어디예요?"'], ['보호구', '"장갑은 어디 있어요?"'], ['다쳤을 때', '"다치면 누구에게 말하면 돼요?"']], [], KO)),
              null,
              MB('확인할 것마다 물어볼 말을 이어 보세요(어울리지 않는 카드는 남겨요).', [['위험한 곳', '"여기서 조심할 곳이 어디예요?"'], ['보호구', '"장갑은 어디 있어요?"'], ['다쳤을 때', '"다치면 누구에게 말하면 돼요?"']], ['"눈치껏 할게요"', '"다쳐도 괜찮아요"'], KO),
              { conclude: '일을 시작할 때 위험한 곳·안전한 방법·보호구·다쳤을 때 알릴 사람을 묻고 시작해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '첫날 꼭 물어볼 것에 표시해요.', options: ['위험한 곳', '안전한 방법', '보호구 자리', '다쳤을 때 알릴 사람'] }] },
      }),
      M('activity.case-story', {
        title: '가상 아르바이트 사례 원인 차례', method: '사례 원인 차례', tool: 'story', minutes: 15,
        levels: { easy: '장면 3장을 원인 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 원인 차례로 놓고 바꿀 수 있던 장면을 고른다.', challenge: '바꿀 장면마다 다른 행동 카드를 짝 짓는 문항에 함정 카드가 섞인다.' },
        activity: {
          title: '가상 아르바이트 사례 원인 차례', tool: 'story',
          teacher: '"미끄러질 뻔한 일은 마지막 장면에서 갑자기 생긴 걸까요?" 장면을 놓을 때마다 앞 장면이 뒤 장면을 어떻게 불렀는지 말하게 한다. "일하는 사람이 조심만 하면 된다"는 학생에게 "첫날 위험한 곳을 안내받았다면 이야기는 어디서 달라졌을까요?"라고 되묻는다. 나·동료·일터가 각각 바꿀 수 있던 장면을 나눠 보게 한다.',
          task: '가상 음식점 아르바이트 사례의 장면을 원인 차례로 놓고, 바꿀 수 있던 장면과 다른 행동을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('가상 사례 장면 4장을 원인 차례로 놓으세요.', CASE, { title: '가상 음식점 점심' }),
              OB('가상 사례 장면 3장을 원인 차례로 놓으세요.', pickCards(CASE, ['c1', 'c2', 'c4']), { title: '가상 음식점 점심' })),
            IT(PB('누군가 다르게 했다면 뒤 장면이 바뀌었을 장면을 골라 담으세요.', '바꿀 수 있던 장면', [
              { id: 'c1', text: '첫날 위험한 곳 안내 없이 바로 일을 시작한다', ok: true }, { id: 'c2', text: '바쁜 점심, 젖은 바닥을 닦지 못한다', ok: true },
              { id: 'c3', text: '무거운 국통을 혼자 들고 걷는다', ok: true }, { id: 'c4', text: '젖은 바닥에서 미끄러질 뻔한다' }], { title: '가상 음식점 점심' }),
              PB('바꿀 수 있던 장면 두 개를 골라 담으세요.', '바꿀 수 있던 장면', [
                { id: 'c1', text: '첫날 위험한 곳 안내 없이 바로 일을 시작한다', ok: true }, { id: 'c3', text: '무거운 국통을 혼자 들고 걷는다', ok: true }, { id: 'c4', text: '젖은 바닥에서 미끄러질 뻔한다' }], { title: '가상 음식점 점심' })),
            IT(MB('바꿀 장면마다 다른 행동을 이어 보세요.', [['안내 없는 첫날', '위험한 곳을 묻고 시작한다'], ['닦지 못한 바닥', '동료에게 알려 바로 닦는다'], ['혼자 든 국통', '나눠 들거나 함께 든다']], [], { title: '대신 이렇게' }),
              MB('바꿀 장면 두 개에 다른 행동을 이어 보세요.', [['안내 없는 첫날', '위험한 곳을 묻고 시작한다'], ['혼자 든 국통', '나눠 들거나 함께 든다']], [], { title: '대신 이렇게' }),
              MB('바꿀 장면마다 다른 행동을 이어 보세요(어울리지 않는 카드는 남겨요).', [['안내 없는 첫날', '위험한 곳을 묻고 시작한다'], ['닦지 못한 바닥', '동료에게 알려 바로 닦는다'], ['혼자 든 국통', '나눠 들거나 함께 든다']], ['더 빨리 걷는다', '참고 말하지 않는다'], { title: '대신 이렇게' }),
              { conclude: '일터의 사고도 여러 장면이 이어져 생겨요. 묻기·알리기·함께 하기가 고리를 끊어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사례에서 바꿀 장면 하나와 대신 할 행동을 한 문장으로 써요.' }] },
        notes: '사례는 가상이다. 학생이나 가족의 일터 경험을 발표시키지 않는다.',
      }),
      M('wrap.guide-write', {
        title: '친구에게 주는 일터 안전 안내 글', method: '친구에게 주는 안전 안내 글', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀을 따라 세 문장으로 쓴다.', base: '다섯 문장으로 쓰고 기준 3개(묻기·위험한 곳·알리기)를 점검한다.', challenge: '다섯 문장에 상황 예시 한 문장을 더해 쓰고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"아르바이트를 처음 시작하는 친구에게 꼭 해 주고 싶은 말은 무엇인가요?" 오늘 찾은 위험한 곳·첫날 확인 목록·거절하는 말을 떠올려 안내 글을 쓰게 한다. "조심해!"만 쓰는 학생에게 "무엇을 어떻게 조심하라는 건지 친구가 알 수 있을까요?"라고 되묻는다. 실제 친구 이름이나 일터 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '아르바이트를 처음 시작하는 친구에게 줄 안전 안내 글을 다섯 문장으로 쓰세요.', minChars: 60, maxChars: 320, minSentences: 5, maxSentences: 6, title: '일터 안전 안내' },
              prompt: '친구에게 주는 일터 안전 안내 글을 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['첫날 물어볼 것을 썼다', '위험한 곳과 대책을 썼다', '위험하면 말하고 알리라고 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 세 문장으로 안내 글을 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 3, maxSentences: 4, minChars: 30, starter: '첫날에는 ___을 물어봐. ___은 조심해. 위험하면 ___에게 말해.' } },
              { prompt: '다섯 문장에 상황 예시 한 문장을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 7 }, target: { selfCheck: ['첫날 물어볼 것을 썼다', '위험한 곳과 대책을 썼다', '위험하면 말하고 알리라고 썼다', '구체적인 상황 예시를 들었다'] } }),
            { type: 'choice', prompt: '안내 글에 넣기 가장 알맞은 문장은?', options: ['조심해!', '첫날 위험한 곳과 다쳤을 때 알릴 사람을 꼭 물어봐.', '시키는 건 다 해.'], answer: 1, difficulty: 0.2, explain: '할 행동이 구체적이어야 친구가 따라 할 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '친구에게 주는 안전 안내',
          items: [
            { type: 'short', prompt: '친구에게 줄 안내 글의 첫 문장을 써요.' },
            { type: 'check', prompt: '내 안내 글을 기준표로 점검해요.', options: ['물어볼 것', '위험한 곳과 대책', '말하고 알리기'] },
          ],
          easy: { note: '"첫날에는 ___을 물어봐." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '첫날에는 ___을 물어봐. 위험하면 ___에게 말해.', answer: '(예) 위험한 곳, 점장님' }] },
        },
      }),
      M('wrap.culture-web', {
        title: '나·동료·일터가 할 일 그물', method: '청소년 일터 안전 문화 정리', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 2개(나·동료)에 할 일 카드 4장을 넣는다.', base: '가지 3개(나·동료·일터)에 할 일 카드 6장을 넣는다.', challenge: '함정 카드 2장이 섞인 판에서 넣고, 고른 근거를 짧게 쓴다.' },
        wrap: {
          teacher: '"일터의 안전은 일하는 나만의 몫일까요?" 가지를 다 채우면 \'일터\' 가지의 할 일이 왜 일터의 몫인지 말하게 한다. "사장님이 다 해 줘야 한다"는 말에는 "위험을 본 나와 동료가 말하지 않으면 일터가 알 수 있을까요?"라고 되묻는다. 안전 문화는 셋이 함께 하는 일이라고 정리한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '함께 지키는 일터', slots: ['나', '동료', '일터'], cards: [
              { id: 'a1', text: '모르면 묻고 시작하기' }, { id: 'a2', text: '위험하면 거절하고 알리기' }, { id: 'b1', text: '새 사람에게 위험한 곳 알려 주기' }, { id: 'b2', text: '무거운 짐 함께 들기' },
              { id: 'c1', text: '안전 교육 해 주기' }, { id: 'c2', text: '알맞은 보호구 갖춰 두기' }] }, prompt: '나·동료·일터 가지에 할 일 카드를 넣어요.', target: { sort: { 나: ['a1', 'a2'], 동료: ['b1', 'b2'], 일터: ['c1', 'c2'] } }, difficulty: 0.2 },
              { prompt: '나·동료 가지에 할 일 카드를 넣어요.', toolOptions: { slots: ['나', '동료'], cards: [{ id: 'a1', text: '모르면 묻고 시작하기' }, { id: 'a2', text: '위험하면 거절하고 알리기' }, { id: 'b1', text: '새 사람에게 위험한 곳 알려 주기' }, { id: 'b2', text: '무거운 짐 함께 들기' }] }, target: { sort: { 나: ['a1', 'a2'], 동료: ['b1', 'b2'] } } },
              { toolOptions: { cards: [
                { id: 'a1', text: '모르면 묻고 시작하기' }, { id: 'a2', text: '위험하면 거절하고 알리기' }, { id: 'b1', text: '새 사람에게 위험한 곳 알려 주기' }, { id: 'b2', text: '무거운 짐 함께 들기' },
                { id: 'c1', text: '안전 교육 해 주기' }, { id: 'c2', text: '알맞은 보호구 갖춰 두기' }, { id: 't1', text: '다쳐도 말하지 않기' }, { id: 't2', text: '새 사람은 알아서 배우게 두기' }] } }),
            { type: 'choice', prompt: '"아르바이트는 짧으니 위험이 적다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['짧으면 정말 위험이 없다', '처음 온 사람일수록 위험한 곳을 몰라 더 조심해야 한다', '오래 일한 사람만 다친다'], answer: 1, difficulty: 0.2, explain: '일터에 익숙하지 않을수록 위험을 잘 몰라요.' },
            { type: 'short', prompt: '\'일터\' 가지의 할 일 하나를 골라 왜 일터의 몫인지 써요.' },
          ],
        },
        worksheet: {
          title: '함께 지키는 일터',
          items: [
            { type: 'table', prompt: '가지마다 할 일을 한 가지씩 써요.', columns: ['누구', '할 일'], cells: [['나', ''], ['동료', ''], ['일터', '']], answer: '묻기·거절하고 알리기 / 알려 주기·함께 들기 / 안전 교육·보호구 갖추기' },
            { type: 'short', prompt: '내가 오늘부터 지킬 한 가지를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 정리정돈과 위험 찾기 (saf-job.m.housekeeping) ====
  {
    const M = MK('housekeeping', [9]);
    const LAB = { grid: [6, 4], title: '가상의 학교 기술실(정리 전)', regions: [
      { name: '출입 통로', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] }, { name: '작업대 1', cells: [[1, 0], [2, 0], [1, 1], [2, 1]] },
      { name: '작업대 사이 바닥', cells: [[3, 0], [3, 1], [3, 2]] }, { name: '공구 걸이 벽', cells: [[4, 0], [5, 0]] },
      { name: '작업대 2', cells: [[4, 1], [5, 1], [4, 2], [5, 2]] }, { name: '재료 쌓인 구석', cells: [[1, 2], [2, 2], [1, 3], [2, 3]] },
      { name: '소화기 앞', cells: [[3, 3]] }, { name: '비상구 앞', cells: [[4, 3], [5, 3]] }] };
    const FIX = ['통로에 놓인 가방·상자를 치운다', '바닥에 늘어진 전선을 정리한다', '날카로운 공구를 제자리에 둔다', '쏟은 것을 바로 닦는다', '소화기·비상구 앞을 비운다'];

    ALL.push(
      M('intro.before-after', {
        title: '정리 전후 실습실 장면', method: '정리 전후 장면 비교', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2장(정리 전·후)을 견주어 읽어 준다.', base: '시연으로 장면 4장을 정리 전·후 칸에 나눈다.', challenge: '나눈 뒤 정리 후 장면에서 위험이 줄어든 까닭을 말한다.' },
        intro: {
          teacher: '"같은 실습실인데 두 장면에서 달라진 것은 무엇일까요?" 장면 카드를 정리 전·후 칸에 나누는 시연을 보인다. "정리는 보기 좋으려고 하는 것"이라는 말에는 "바닥의 전선이 정리되면 무엇이 줄어들까요?"라고 되묻는다. 정리정돈은 넘어짐·베임·대피 지연을 막는 안전 활동이라고 밝힌다.',
          student: '실습실 장면 카드를 정리 전·후로 나눠 보고, 정리 후 장면에서 줄어든 위험이 무엇인지 짝에게 한 가지 말해요.',
          demo: { tool: 'story', options: { mode: 'sort', slots: ['정리 전', '정리 후'], title: '같은 기술실 두 장면', cards: [
            { id: 'b1', text: '통로에 가방과 상자가 놓여 있다', motif: 'cloud' }, { id: 'b2', text: '작업대에 칼이 날을 드러낸 채 있다', motif: 'leaf' },
            { id: 'a1', text: '통로가 비어 한 줄로 지나간다', motif: 'sun' }, { id: 'a2', text: '공구가 걸이 벽 제자리에 있다', motif: 'star' }] }, sequence: [{ sort: { '정리 전': ['b1', 'b2'], '정리 후': ['a1', 'a2'] } }] },
          art: { draw: 'a paper-cut split scene of the same school workshop, left side cluttered with bags, cables and tools, right side tidy with tools on a wall board', banner: '무엇이 달라졌을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
      }),
      M('intro.space-scale', {
        title: '우리 실습실 정리 점수 눈금', method: '우리 실습실 정리 점수', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 눈금 3칸(어수선·보통·잘 정리)으로 묻는다.', base: '시연 눈금 5칸에서 정리 점수를 고르고 근거를 말한다.', challenge: '점수를 고른 뒤 고칠 곳 한 곳을 말한다.' },
        intro: {
          teacher: '"지난 실습이 끝난 뒤 우리 실습실 정리 상태는 몇 점이었을까요?" 눈금을 띄우고 시연으로 한 칸을 고르는 모습을 보인 뒤 학생들에게 손가락으로 점수를 들게 한다. "조금 어질러져도 위험은 없다"는 말에는 "비상구 앞에 의자 하나가 있으면 불이 났을 때 어떨까요?"라고 되묻는다. 누구를 탓하려는 점수가 아니라 고칠 곳을 찾는 점수라고 말한다.',
          student: '우리 실습실의 정리 상태를 1~5점으로 매겨 보고, 그 점수를 준 근거와 고칠 곳 한 곳을 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '지난 실습이 끝난 뒤 우리 실습실의 정리 상태', feeling: '걱정', steps: 5, scaleLabels: { 1: '아주 어수선', 5: '아주 잘 정리' } }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper-cut school workshop with a large paper scale from one to five on the wall and students raising fingers', banner: '우리 실습실은 몇 점?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.find-map', {
        title: '실습실 지도에서 위험 찾기', method: '실습실 지도에서 위험 찾기', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 그 칸 이름이 바로 읽힌다.', base: '위험 네 가지(통로 막힘·바닥 전선·날카로운 공구·비상구 앞 물건)마다 칸에 핀을 꽂는다.', challenge: '마지막 문항에서 가장 먼저 고칠 곳(우선순위)에 핀을 꽂고 그 까닭을 고른다.' },
        activity: {
          title: '실습실 지도에서 위험 찾기', tool: 'map',
          teacher: '"이 실습실에서 걸려 넘어질 수 있는 곳은 어디일까요?" 칸 지도에서 위험 종류마다 그 자리를 찾아 핀을 꽂게 한다. "다 한꺼번에 치우면 된다"는 학생에게 "불이 나면 가장 먼저 비어 있어야 할 곳은 어디일까요?"라고 되묻는다. 위험을 찾은 뒤에는 무엇부터 고칠지 차례를 정해야 한다는 점을 짚는다.',
          task: '가상의 기술실(정리 전) 칸 지도에서 통로 막힘·바닥 전선·날카로운 공구 위험 칸을 찾고, 가장 먼저 고칠 곳을 정해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('가방·상자가 놓여 지나가기 어려운 곳에 핀을 꽂으세요.', LAB, { region: '출입 통로' }),
            PIN('전선이 바닥에 늘어져 걸리기 쉬운 곳에 핀을 꽂으세요.', LAB, { region: '작업대 사이 바닥' }),
            PIN('날을 드러낸 공구가 흩어져 있는 곳에 핀을 꽂으세요.', LAB, { region: '작업대 1' }),
            IT(PIN('의자와 재료가 쌓여 막힌 비상 시설 앞에 핀을 꽂으세요.', LAB, { region: '비상구 앞' }),
              null,
              { prompt: '가장 먼저 비워야 할 곳에 핀을 꽂고, 그 까닭을 고르세요.', toolOptions: { ask: { q: '그곳을 가장 먼저 비우는 까닭은?', choices: ['불이 나면 모두가 그곳으로 나가야 해서', '가장 눈에 띄는 곳이라서', '치우기 가장 쉬워서'] } }, target: { region: '비상구 앞', pick: 0 } },
              { conclude: '정리정돈은 위험을 찾고, 대피와 이동에 꼭 필요한 곳부터 차례로 고치는 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '찾은 위험과 고칠 차례를 써요.', columns: ['차례', '곳', '고칠 방법'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']], answer: '비상구 앞 비우기 / 통로 치우기 / 전선·공구 정리' }] },
        notes: '칸 지도는 가상 기술실이다. 다음 문항(정리 실천)에서 실제 실습실을 정리한다.',
      }),
      M('activity.fix-check', {
        title: '정리정돈 점검과 실천', method: '정리정돈 점검과 실천', tool: 'timer', minutes: 15,
        levels: { easy: '정리 점검 항목 3개를 표시하며 정리한다.', base: '정리 점검 항목 5개를 표시하며 정리하고 스스로 점검한다.', challenge: '정리 전후 모습을 말로 견주는 점검 항목이 하나 더해진다(사진은 교사가 학생 얼굴 없이 공간만 찍는다).' },
        activity: {
          title: '정리정돈 점검과 실천', tool: 'timer',
          teacher: '"오늘 우리 실습실에서 정말로 고친 것만 표시해 볼까요?" 모둠마다 맡은 구역을 정해 실제로 정리하게 하고, 끝나면 점검 항목을 한 줄씩 읽어 준다. "정리는 청소 당번의 일"이라는 학생에게 "내가 쓴 공구가 제자리에 없으면 다음 시간 친구는 어떻게 될까요?"라고 되묻는다. 날카로운 공구와 전기 기구는 교사와 함께 다루게 한다.',
          task: '맡은 구역의 정리 점검 항목을 표시하며 실제로 실습실을 정리하고, 한 일을 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '맡은 구역을 정리하며 점검 항목을 모두 표시하세요.', toolOptions: { title: '정리 점검', safety: FIX }, target: { safety: true } },
              { prompt: '맡은 구역을 정리하며 점검 항목 세 개를 표시하세요.', toolOptions: { safety: FIX.slice(0, 3) }, target: { safety: true } }),
            { prompt: '모둠이 맡은 구역을 실제로 정리한 뒤 표시하세요(공구·전기 기구는 선생님과 함께).', free: true, toolOptions: { doneLabel: '맡은 구역을 정리했어요' } },
            IT({ prompt: '오늘 정리에서 내가 한 일을 스스로 점검해 표시하세요.', toolOptions: { title: '정리 돌아보기' }, target: { selfCheck: ['내가 쓴 도구를 제자리에 두었다', '통로·비상구 앞을 비웠다', '고치지 못한 곳을 선생님께 알렸다'] } },
              null,
              { prompt: '정리 전후 모습까지 견주어 스스로 점검해 표시하세요.', target: { selfCheck: ['내가 쓴 도구를 제자리에 두었다', '통로·비상구 앞을 비웠다', '고치지 못한 곳을 선생님께 알렸다', '정리 전후 달라진 점을 말할 수 있다'] } },
              { conclude: '정리정돈은 쓴 사람이 바로 제자리에 두고, 통로와 비상구를 늘 비워 두는 습관이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 정리하고 나서 실습실에서 달라진 점 한 가지를 써요.' }] },
        notes: '정리 전후 사진을 찍을 때는 학생 얼굴이 나오지 않게 공간만 찍는다.',
      }),
      M('activity.tool-sort', {
        title: '공구 제자리 나누기', method: '공구 제자리 나누기', tool: 'kitchen', minutes: 15,
        levels: { easy: '보관 칸 2개(공구함·벽걸이)에 공구 카드를 나누고, 틀리면 바로 알려 준다.', base: '보관 칸 3개(잠금 보관함 포함)에 공구 카드를 나눈다.', challenge: '보관 근거를 잇는 문항에 함정 카드가 섞인다.' },
        activity: {
          title: '공구 제자리 나누기', tool: 'kitchen',
          teacher: '"칼과 드라이버를 같은 서랍에 넣어도 될까요?" 카드를 나눌 때마다 그 공구를 그 자리에 두는 까닭을 말하게 한다. "아무 데나 두어도 나중에 찾으면 된다"는 학생에게 "서랍에 손을 넣었는데 칼날이 위를 향하고 있다면 어떨까요?"라고 되묻는다. 제자리는 찾기 쉬우려고만이 아니라 다치지 않으려고 정한다는 점을 짚는다.',
          task: '공구 카드를 보관 칸(공구함·벽걸이·잠금 보관함)에 나누고, 그 자리에 두는 근거를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('공구 카드를 보관 칸에 나누세요.', ['공구함', '벽걸이', '잠금 보관함'], [
              { id: 't1', text: '드라이버', to: '공구함' }, { id: 't2', text: '줄자', to: '공구함' },
              { id: 't3', text: '톱', to: '벽걸이' }, { id: 't4', text: '망치', to: '벽걸이' },
              { id: 't5', text: '날 덮개를 씌운 커터칼', to: '잠금 보관함' }, { id: 't6', text: '전동 드릴', to: '잠금 보관함' }], KO),
              SB('공구 카드 4장을 보관 칸에 나누세요.', ['공구함', '벽걸이'], [
                { id: 't1', text: '드라이버', to: '공구함' }, { id: 't2', text: '줄자', to: '공구함' },
                { id: 't3', text: '톱', to: '벽걸이' }, { id: 't4', text: '망치', to: '벽걸이' }], KO)),
            IT(MB('보관 방법마다 그렇게 하는 근거를 이어 보세요.', [['칼날에 덮개 씌우기', '꺼낼 때 손을 베지 않는다'], ['무거운 것은 아래 칸', '떨어져 발을 다치지 않는다'], ['전동 공구는 잠금 보관', '배우지 않은 사람이 쓰지 않는다']], [], KO),
              MB('보관 방법 두 가지의 근거를 이어 보세요.', [['칼날에 덮개 씌우기', '꺼낼 때 손을 베지 않는다'], ['무거운 것은 아래 칸', '떨어져 발을 다치지 않는다']], [], KO),
              MB('보관 방법마다 근거를 이어 보세요(어울리지 않는 카드는 남겨요).', [['칼날에 덮개 씌우기', '꺼낼 때 손을 베지 않는다'], ['무거운 것은 아래 칸', '떨어져 발을 다치지 않는다'], ['전동 공구는 잠금 보관', '배우지 않은 사람이 쓰지 않는다']], ['보기에 예쁘다', '정리 당번이 편하다'], KO)),
            IT(PB('제자리를 지키지 않은 장면만 골라 담으세요.', '고칠 장면', [
              { id: 'p1', text: '톱이 작업대 끝에 걸쳐 있다', ok: true }, { id: 'p2', text: '드라이버가 공구함에 있다' }, { id: 'p3', text: '커터칼이 날을 편 채 서랍에 있다', ok: true }, { id: 'p4', text: '망치가 벽걸이에 걸려 있다' }], KO),
              null, null, { conclude: '공구의 제자리는 찾기 쉽고, 꺼낼 때 다치지 않고, 배운 사람만 쓰게 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '공구마다 제자리와 근거를 써요.', columns: ['공구', '제자리', '근거'], cells: [['커터칼', '', ''], ['망치', '', '']], answer: '덮개 씌워 잠금 보관함/베이지 않게, 벽걸이·아래 칸/떨어지지 않게' }] },
      }),
      M('wrap.rule-write', {
        title: '실습실 정리정돈 규칙 쓰기', method: '정리정돈 규칙 쓰기', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '규칙 2개를 문장 틀로 쓴다.', base: '규칙 3개를 쓰고 기준 3개를 점검한다.', challenge: '규칙 3개에 지키게 할 방법 한 문장을 더해 쓰고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"오늘 찾은 위험을 다시 만들지 않으려면 어떤 규칙이 필요할까요?" 규칙마다 할 행동과 까닭이 들어가게 쓰게 한다. "\'깨끗이 하자\'면 충분하다"는 학생에게 "무엇을 어디에 두라는 건지 1학년이 알 수 있을까요?"라고 되묻는다. 쓴 규칙 가운데 좋은 것을 골라 실습실 규칙판에 붙이자고 정한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '우리 실습실 정리정돈 규칙 세 가지를 한 문장씩 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 4, title: '정리정돈 규칙' },
              prompt: '실습실 정리정돈 규칙 세 가지를 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['규칙마다 할 행동이 구체적이다', '규칙 하나 이상에 까닭을 썼다', '통로나 비상구를 지키는 규칙이 있다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 규칙 두 가지를 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, maxSentences: 3, minChars: 20, starter: '쓴 ___은 ___에 둔다. ___ 앞은 늘 비운다.' }, target: { selfCheck: ['규칙마다 할 행동이 구체적이다', '통로나 비상구를 지키는 규칙이 있다'] } },
              { prompt: '규칙 세 가지에 지키게 할 방법 한 문장을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: ['규칙마다 할 행동이 구체적이다', '규칙 하나 이상에 까닭을 썼다', '통로나 비상구를 지키는 규칙이 있다', '지키게 할 방법을 썼다'] } }),
            { type: 'choice', prompt: '규칙판에 넣기 가장 알맞은 규칙은?', options: ['깨끗이 쓰자!', '쓴 공구는 바로 걸이 벽 제자리에 건다.', '정리는 당번이 한다.'], answer: 1, difficulty: 0.2, explain: '할 행동과 자리가 또렷한 규칙이 지켜져요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '실습실 정리정돈 규칙',
          items: [
            { type: 'short', prompt: '우리 실습실 정리정돈 규칙 세 가지를 써요.' },
            { type: 'check', prompt: '내 규칙을 기준표로 점검해요.', options: ['할 행동이 구체적', '까닭이 있음', '통로·비상구 규칙 있음'] },
          ],
        },
      }),
      M('wrap.habit-web', {
        title: '학교·집·일터 정리 습관 그물', method: '정리 습관 정리', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 2개(학교·집)에 습관 카드 4장을 넣는다.', base: '가지 3개(학교·집·일터)에 습관 카드 6장을 넣는다.', challenge: '함정 카드 2장이 섞인 판에서 넣고, 내가 이어 갈 습관의 근거를 짧게 쓴다.' },
        wrap: {
          teacher: '"오늘 실습실에서 한 정리를 집과 앞으로의 일터에서도 이어 갈 수 있을까요?" 가지를 다 채우면 내가 이번 주에 해 볼 습관 하나를 고르게 한다. "정리는 학교에서만 하면 된다"는 말에는 "집 계단에 둔 가방에 걸려 넘어지는 것도 같은 위험일까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '정리 습관', slots: ['학교', '집', '일터'], cards: [
              { id: 'a1', text: '실습 뒤 공구 제자리 두기' }, { id: 'a2', text: '교실 통로에 가방 두지 않기' }, { id: 'b1', text: '현관·계단에 물건 쌓지 않기' }, { id: 'b2', text: '멀티탭 전선 정리하기' },
              { id: 'c1', text: '쏟은 것은 바로 닦고 알리기' }, { id: 'c2', text: '비상구 앞에 짐 두지 않기' }] }, prompt: '학교·집·일터 가지에 정리 습관 카드를 넣어요.', target: { sort: { 학교: ['a1', 'a2'], 집: ['b1', 'b2'], 일터: ['c1', 'c2'] } }, difficulty: 0.2 },
              { prompt: '학교·집 가지에 정리 습관 카드를 넣어요.', toolOptions: { slots: ['학교', '집'], cards: [{ id: 'a1', text: '실습 뒤 공구 제자리 두기' }, { id: 'a2', text: '교실 통로에 가방 두지 않기' }, { id: 'b1', text: '현관·계단에 물건 쌓지 않기' }, { id: 'b2', text: '멀티탭 전선 정리하기' }] }, target: { sort: { 학교: ['a1', 'a2'], 집: ['b1', 'b2'] } } },
              { toolOptions: { cards: [
                { id: 'a1', text: '실습 뒤 공구 제자리 두기' }, { id: 'a2', text: '교실 통로에 가방 두지 않기' }, { id: 'b1', text: '현관·계단에 물건 쌓지 않기' }, { id: 'b2', text: '멀티탭 전선 정리하기' },
                { id: 'c1', text: '쏟은 것은 바로 닦고 알리기' }, { id: 'c2', text: '비상구 앞에 짐 두지 않기' }, { id: 't1', text: '정리는 시간 날 때 몰아서 하기' }, { id: 't2', text: '보기 싫은 것만 숨겨 두기' }] } }),
            { type: 'choice', prompt: '"정리는 보기 좋으려고 한다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['정리하면 칭찬받는다', '정리하면 걸려 넘어지거나 베이는 위험이 줄어든다', '정리는 당번의 일이다'], answer: 1, difficulty: 0.2, explain: '정리정돈은 사고를 줄이는 안전 활동이에요.' },
            { type: 'short', prompt: '이번 주에 이어 갈 정리 습관 하나와 그 근거를 써요.' },
          ],
        },
        worksheet: {
          title: '정리 습관',
          items: [
            { type: 'table', prompt: '곳마다 지킬 정리 습관을 한 가지씩 써요.', columns: ['곳', '습관'], cells: [['학교', ''], ['집', ''], ['일터', '']], answer: '공구 제자리·통로 비우기 / 현관·계단 비우기·전선 정리 / 바로 닦기·비상구 비우기' },
            { type: 'short', prompt: '이번 주에 해 볼 습관 하나를 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
