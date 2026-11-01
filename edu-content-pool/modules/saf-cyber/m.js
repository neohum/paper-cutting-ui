/* 창체 안전교육 사이버 중독 예방 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-cyber 중.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 중학교 약물 및 사이버 중독 예방
 *   ('인터넷 게임 사용 규칙 만들기 및 실천' / '스마트폰의 건전한 사용 방법') + 학교 안전교육 7대 표준안 사이버(인터넷 게임·스마트폰) 소분류.
 *   주제마다 source 는 체계도에 있다. 근거 파일(sources/changche/research-safety.md)에는 항목 제목만 있고 세부 사실·수치가 없다.
 * 중 기준: 사례 분석·딜레마 토의·자료 해석·짧은 글쓰기(기준표 자기 평가)·역할극 대본·캠페인. 자료·그래프 수치와 인물·장면은 모두 지어낸 가상 자료다(가명).
 *   학생 자신의 사용 시간·쓰는 게임·앱 이름은 묻지 않고 채점하지 않는다 — 가상 인물(서진·민재·하람 등)의 자료로만 판정하고,
 *   내 모습을 돌아보는 칸은 '혼자 보기' 활동지나 맞고 틀림이 없는 스스로 점검으로만 둔다.
 *   특정 게임·앱·회사 이름을 쓰지 않는다('A 앱', '가상 게임'). 뽑기(확률형 보상)·도박성 게임은 위험 신호로만 다루고 하는 법·얻는 법·확률 계산 요령을 알려 주지 않는다.
 *   도움 받을 곳: 담임·상담 선생님(상담실)·보건실·보호자·청소년 상담 1388(체계도 개념 '도움 경로(상담실·1388)'). 그 밖의 기관 이름·전화번호는 쓰지 않는다.
 * 주제 6개 × 8모듈 = 48모듈. 7학년 2주제(숏폼 설계·스마트폰 규칙), 8학년 2주제(확률형 보상·게임 규칙), 9학년 2주제(과의존 사례·또래 캠페인).
 *
 * 사람 확인: 근거 파일에 없는 일반 사실·수칙 문장(모듈 id — 확인할 곳)
 *   - shortform.*: 숏폼 설계 장치(짧은 길이·세로 넘기기·자동 반복·맞춤 추천·좋아요 수)와 그 효과(끝이 안 보임·멈출 틈 없음·다음이 더 재밌을 것 같음·남과 비교) /
 *     몰입하면 지난 시간을 짧게 느끼기 쉽다 / 자동 재생 끄기·알림 끄기·시간 알림 같은 대응 — 과학기술정보통신부·한국지능정보사회진흥원(스마트쉼센터)
 *   - phone-rule.*: 좋은 규칙의 조건(언제·어디서·무엇을, 잴 수 있음, 대비책) / 잠자기 전 거실 충전·공부할 때 폰을 가방에 같은 수칙 / 한 번 어겨도 다시 시작하면 된다 —
 *     한국지능정보사회진흥원(스마트쉼센터)·교육부
 *   - loot-reward.*: 확률형 보상은 매번 같은 확률로 뽑혀 '이번엔 나올 차례'가 없다(가상 게임에서 확률이 매번 같다고 둔 설명) / 시간 한정·연속 출석 보상이 노리는 마음 /
 *     결제 전 점검(확률 표시 읽기·보호자 상의·예산·하루 미루기) / 보호자 결제 수단으로 한 결제는 보호자와 함께 결제한 곳에 문의한다 /
 *     도박성 게임은 위험 신호라는 문장 — 문화체육관광부·게임물관리위원회·한국소비자원
 *   - game-rule.*: '한 판 더'의 고리(판 시작 → 결과 → 보상·랭크 변화 → 한 판 더) / 판 시작 전 남은 시간 확인·새 판 누르지 않기 같은 종료 순서 /
 *     게임 40분·쉬기 10분은 '우리 반 연습 계획' 값 — 한국콘텐츠진흥원(게임과몰입힐링센터)·한국지능정보사회진흥원
 *   - overdependence-case.*: 스마트폰 과의존 세 요인 '조절 실패·현저성·문제적 결과'와 그 뜻 / 사용 시간만으로 과의존을 정하지 않는다 /
 *     친구를 도울 때 비난하지 않고 함께할 활동을 내고 어른에게 알린다 — 과학기술정보통신부·한국지능정보사회진흥원(스마트폰 과의존 실태조사)·청소년 상담 1388
 *   - campaign.*: 겁주는 메시지보다 행동을 알려 주는 메시지가 낫다는 문장 / '폰 없는 저녁 30분'은 가상 캠페인 예 — 보건복지부·한국건강증진개발원 캠페인 자료, 한국지능정보사회진흥원 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `saf-cyber.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'saf-cyber', band: '중', topic: `saf-cyber.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } (문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [[칸 글(___ 포함), 카드 글]]
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => ({ id: `f${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
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
  // 쉬움 = 2단계(근거 없음), 기본 = 3단계 + 근거, 도전 = ch 로 고른다:
  //   ch.explore → 다른 길도 끝까지 가 보고 견주기 / ch.reasons·ch.ok → 더할 근거
  const DIL = (p, title, tree, good, R, ok, ch, extra) => {
    const c = ch || {};
    const ct = { path: paths(good, 3), reasons: [...ok, ...(c.ok || [])], some: true };
    if (c.explore) ct.explore = c.explore;
    return Object.assign({
      prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: R, compare: true }, target: { path: paths(good, 3), reasons: ok, some: true },
      levels: {
        easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), reasons: [] }, target: { path: paths(good, 2) } },
        challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...(c.reasons || [])] }, target: ct },
      },
    }, extra);
  };
  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  // ---- 가상 자료 그래프(chart read) ----
  const CH = (type, title, unit, data, extra) => Object.assign({ type, mode: 'read', title, unit, data }, extra);
  // ---- 기준표 글쓰기(rubric-writing) 문항: 기본·쉬움(틀 starter + 기준 줄임)·도전(기준 더함) ----
  const RW = (prompt, opt, crit, easy, challenge, more) => IT({ prompt, toolOptions: opt, target: { selfCheck: crit } },
    easy ? { prompt: easy.prompt, toolOptions: easy.toolOptions || {}, target: { selfCheck: easy.crit } } : null,
    challenge ? { prompt: challenge.prompt, toolOptions: challenge.toolOptions || {}, target: { selfCheck: challenge.crit } } : null, more);

  // ==== 7학년 · 숏폼 영상 설계 분석하기 (saf-cyber.m.shortform) ====
  {
    const M = MK('shortform', [7]);
    const NIGHT = [
      { id: 's1', text: '10시 50분, "5분만" 하고 연다', motif: 'moon' }, { id: 's2', text: '다음 영상이 저절로 뜬다', motif: 'star' },
      { id: 's3', text: '11시 알림을 그냥 넘긴다', motif: 'cloud' }, { id: 's4', text: '추천 영상을 계속 넘긴다', motif: 'leaf' },
      { id: 's5', text: '12시 5분, 눈이 따가워 끈다', motif: 'house' }];
    const FEEL = [['개운함', 15], ['그저 그럼', 30], ['시간이 아까움', 35], ['피곤함', 20]];
    const DEV = [['짧은 길이', '한 개쯤은 괜찮다는 느낌'], ['세로 넘기기', '끝이 안 보임'], ['자동 반복', '멈출 틈 없음'], ['맞춤 추천', '다음이 더 재밌을 것 같음'], ['좋아요 수', '남과 비교']];
    const FIX = [['한 개쯤은 괜찮다는 느낌', '볼 개수를 먼저 정한다'], ['멈출 틈 없음', '자동 재생을 끈다'], ['다음이 더 재밌을 것 같음', '추천 대신 찾아서 본다'], ['끝이 안 보임', '시간 알림을 맞춘다']];
    const NIGHT_D = { text: '밤 11시, 서진이가 과제를 막 끝냈다. 숏폼 앱에서 "새 영상이 올라왔어요" 알림이 온다.', ask: '서진이는 어떻게 할까?', motif: 'moon', choices: [
      { id: 'open', text: '"하나만 보고 자야지" 하고 연다', result: '첫 영상이 끝나자 다음 영상이 저절로 이어진다.', impact: [{ who: '서진', text: '잘 시각이 밀린다', tone: -1 }], why: '"하나만"은 멈출 틈이 없는 화면에서 지키기 어려워요.', end: '하나만 보려다 계속 이어 봤어요.',
        next: { text: '자정이 넘었다. 화면에는 "회원님을 위한 추천"이 끝없이 뜬다.', choices: [
          { id: 'more', text: '"이것만 더" 하며 계속 넘긴다', result: '새벽 1시가 넘어 잠든다.', impact: [{ who: '서진', text: '잠이 크게 줄어든다', tone: -1 }], why: '추천은 끝이 없어서 "이것만 더"가 되풀이돼요.', end: '새벽 1시가 넘어 잤어요.',
            next: { text: '다음 날 1교시 수업 중 서진이가 꾸벅꾸벅 존다.', choices: [
              { id: 'break', text: '쉬는 시간에 또 영상을 본다', result: '2교시 수행평가 준비를 못 한다.', impact: [{ who: '모둠', text: '서진이 몫을 대신한다', tone: -1 }], why: '잠이 부족할 때 또 보면 피곤이 이어져요.' },
              { id: 'reset', text: '오늘 밤부터 폰을 거실에서 충전하기로 한다', result: '그날 밤 일찍 잠든다.', impact: [{ who: '서진', text: '다음 날이 가볍다', tone: 1 }] }] } },
          { id: 'close', text: '눈이 따가워 그제야 끈다', result: '12시가 넘어 잠든다.', impact: [{ who: '서진', text: '잠이 조금 줄어든다', tone: -1 }], end: '늦었지만 스스로 껐어요.',
            next: { text: '다음 날 아침, 서진이가 어젯밤 본 시간을 돌아본다.', choices: [
              { id: 'same', text: '"오늘은 괜찮겠지" 하고 그대로 둔다', result: '그날 밤도 같은 일이 생긴다.', impact: [{ who: '서진', text: '같은 일이 되풀이된다', tone: -1 }], why: '멈출 장치를 미리 만들지 않으면 같은 일이 되풀이돼요.' },
              { id: 'alarm', text: '자동 재생을 끄고 시간 알림을 맞춘다', result: '그날 밤 알림이 울리자 멈춘다.', impact: [{ who: '서진', text: '멈출 틈이 생긴다', tone: 1 }] }] } }] } },
      { id: 'later', text: '알림을 끄고 폰을 거실에 둔다', result: '서진이는 내일 준비물을 챙기고 눕는다.', impact: [{ who: '서진', text: '제때 잔다', tone: 1 }], end: '폰을 두고 제때 잤어요.',
        next: { text: '누웠는데 단체방에 무슨 말이 올라왔을지 궁금하다.', choices: [
          { id: 'fetch', text: '폰을 가지러 거실로 간다', result: '단체방을 보다 영상까지 열게 된다.', impact: [{ who: '서진', text: '잘 시각이 밀린다', tone: -1 }], why: '궁금함은 아침에 풀어도 늦지 않아요. 가지러 가면 다시 열게 돼요.', end: '다시 폰을 가지러 갔어요.',
            next: { text: '영상 하나가 끝나자 다음 영상이 또 뜬다.', choices: [
              { id: 'keep', text: '그대로 계속 본다', result: '자정을 넘겨 잠든다.', impact: [{ who: '서진', text: '잠이 줄어든다', tone: -1 }], why: '한 번 열면 멈출 틈이 없어요.' },
              { id: 'back', text: '바로 끄고 다시 거실에 둔다', result: '조금 늦게 잠든다.', impact: [{ who: '서진', text: '다시 멈췄다', tone: 1 }] }] } },
          { id: 'sleep', text: '"내일 아침에 보자" 하고 잔다', result: '푹 자고 일어난다.', impact: [{ who: '서진', text: '몸이 개운하다', tone: 1 }], end: '아침에 보기로 하고 잤어요.',
            next: { text: '다음 날 2교시가 수행평가 발표다. 쉬는 시간이 10분 남았다.', choices: [
              { id: 'binge', text: '어젯밤 못 본 영상을 몰아 본다', result: '발표 준비를 못 하고 들어간다.', impact: [{ who: '모둠', text: '발표가 흔들린다', tone: -1 }], why: '어젯밤 참은 것을 할 일보다 앞에 두면 다시 시간에 쫓겨요.' },
              { id: 'focus', text: '발표 순서를 한 번 더 읽고 들어간다', result: '맑은 정신으로 발표를 마친다.', impact: [{ who: '모둠', text: '발표를 잘 마친다', tone: 1 }] }] } }] } },
      { id: 'timer', text: '10분 타이머를 맞추고 연다', result: '타이머가 울렸지만 다음 영상이 더 재밌어 보인다.', impact: [{ who: '서진', text: '멈출 신호를 받았다', tone: 1 }], end: '타이머가 울렸어요.',
        next: { text: '타이머 소리가 울린다. 화면에는 다음 영상이 벌써 재생되고 있다.', choices: [
          { id: 'snooze', text: '타이머를 끄고 계속 본다', result: '자정을 넘겨 잠든다.', impact: [{ who: '서진', text: '신호를 무시했다', tone: -1 }], why: '신호가 울렸을 때 바로 할 행동을 정해 두어야 멈출 수 있어요.', end: '신호를 넘겨 계속 봤어요.',
            next: { text: '다음 날 1교시, 서진이가 하품을 참는다.', choices: [
              { id: 'again', text: '오늘 밤엔 타이머 없이 본다', result: '그날 밤은 더 늦게 잔다.', impact: [{ who: '서진', text: '더 지친다', tone: -1 }], why: '실패한 장치를 버리기보다 고쳐 쓰는 편이 나아요.' },
              { id: 'fix', text: '타이머가 울리면 폰을 거실에 두기로 정한다', result: '그날 밤엔 알림과 함께 멈춘다.', impact: [{ who: '서진', text: '계획이 단단해진다', tone: 1 }] }] } },
          { id: 'shut', text: '앱을 닫고 폰을 엎어 둔다', result: '11시 10분에 잠자리에 든다.', impact: [{ who: '서진', text: '제때 잔다', tone: 1 }], end: '타이머 신호에 맞춰 멈췄어요.',
            next: { text: '다음 날, 친구 하나가 "어제 그 영상 봤어?"라고 묻는다.', choices: [
              { id: 'shame', text: '못 봤다는 게 창피해 오늘 밤 몰아 보기로 한다', result: '그날 밤 계획이 무너진다.', impact: [{ who: '서진', text: '다시 늦게 잔다', tone: -1 }], why: '남이 본 것을 다 따라 볼 필요는 없어요.' },
              { id: 'share', text: '"10분만 보고 잤어"라고 타이머 방법을 알려 준다', result: '친구도 타이머를 써 보겠다고 한다.', impact: [{ who: '친구', text: '멈추는 방법을 얻는다', tone: 1 }] }] } }] } }] };
    const NIGHT_R = [{ id: 'r1', text: '짧은 영상도 이어 보면 잠이 크게 줄어든다' }, { id: 'r2', text: '멈출 틈은 미리 만들어 두어야 생긴다' },
      { id: 'r3', text: '의지만 강하면 알림은 상관없다', why: '설계 장치는 의지가 강한 사람도 붙잡아요. 그래서 장치로 맞서요.' },
      { id: 'r4', text: '하룻밤 늦게 자는 것은 아무 영향이 없다', why: '다음 날 수업과 발표까지 이어진 결과를 다시 봐요.' }];
    const NIGHT_MORE = { reasons: [{ id: 'r5', text: '다음 날 할 일까지 생각하고 고른다' }, { id: 'r6', text: '남이 본 영상을 다 따라 볼 필요는 없다' }], ok: ['r5', 'r6'] };

    const DAY_D = { text: '토요일 오후 2시, 서진이가 과학 수행평가 자료를 찾으려고 영상 앱을 열었다. 검색 결과 옆에 재밌어 보이는 추천 숏폼이 뜬다.', ask: '서진이는 어떻게 할까?', motif: 'sun', choices: [
      { id: 'peek', text: '추천 숏폼을 "하나만" 눌러 본다', result: '세로로 넘길 때마다 새 영상이 이어진다.', impact: [{ who: '서진', text: '자료 찾기가 밀린다', tone: -1 }], why: '할 일 화면 옆의 추천은 할 일을 밀어내기 쉬워요.', end: '자료 대신 숏폼을 봤어요.',
        next: { text: '한 시간이 지났다. 자료는 아직 하나도 못 찾았다.', choices: [
          { id: 'night', text: '자료는 밤에 찾기로 하고 계속 본다', result: '밤늦게 급히 자료를 찾는다.', impact: [{ who: '서진', text: '잠이 줄어든다', tone: -1 }], why: '미룬 일은 밤 시간을 빼앗아요.', end: '자료 찾기를 밤으로 미뤘어요.',
            next: { text: '밤 11시, 자료를 찾는데 또 추천 영상이 뜬다.', choices: [
              { id: 'again2', text: '"잠깐만" 하고 또 본다', result: '자료를 다 못 찾고 잔다.', impact: [{ who: '모둠', text: '서진이 몫이 빈다', tone: -1 }], why: '같은 장치는 밤에도 똑같이 작동해요.' },
              { id: 'pc', text: '추천이 안 보이게 검색 결과만 열어 둔다', result: '늦었지만 자료를 다 찾는다.', impact: [{ who: '모둠', text: '자료를 받는다', tone: 1 }] }] } },
          { id: 'stop2', text: '앱을 닫고 다시 검색부터 한다', result: '30분 만에 자료를 찾는다.', impact: [{ who: '서진', text: '할 일을 되찾는다', tone: 1 }], end: '다시 자료를 찾았어요.',
            next: { text: '자료를 다 찾고 나니 아까 그 숏폼이 생각난다.', choices: [
              { id: 'binge2', text: '이제 실컷 보자며 저녁까지 본다', result: '저녁 약속 시간을 놓친다.', impact: [{ who: '가족', text: '기다린다', tone: -1 }], why: '보상으로 보더라도 끝낼 시각을 먼저 정해요.' },
              { id: 'limit2', text: '20분만 보기로 알림을 맞추고 본다', result: '알림에 맞춰 멈춘다.', impact: [{ who: '서진', text: '계획대로 쉰다', tone: 1 }] }] } }] } },
      { id: 'note', text: '알림·추천을 끄고 자료만 찾는다', result: '검색 결과만 보며 자료를 모은다.', impact: [{ who: '서진', text: '할 일에 집중한다', tone: 1 }], end: '추천을 끄고 자료에 집중했어요.',
        next: { text: '자료를 찾는 중에 친구가 단체방에 숏폼 링크를 올린다.', choices: [
          { id: 'click', text: '바로 링크를 눌러 본다', result: '링크 하나가 다른 영상으로 이어진다.', impact: [{ who: '서진', text: '다시 붙잡힌다', tone: -1 }], why: '친구가 보낸 링크도 같은 장치로 이어져요.', end: '링크를 눌러 다시 이어 봤어요.',
            next: { text: '영상이 끝나자 다음 영상이 바로 뜬다.', choices: [
              { id: 'go2', text: '그대로 넘긴다', result: '자료 찾기가 또 밀린다.', impact: [{ who: '서진', text: '할 일이 밀린다', tone: -1 }], why: '자동 반복은 멈출 틈을 없애요.' },
              { id: 'back2', text: '창을 닫고 자료로 돌아온다', result: '조금 늦게 자료를 마친다.', impact: [{ who: '서진', text: '다시 돌아왔다', tone: 1 }] }] } },
          { id: 'cut', text: '"자료 다 찾고 볼게"라고 답하고 미뤄 둔다', result: '자료 찾기를 이어 간다.', impact: [{ who: '서진', text: '흐름을 지킨다', tone: 1 }], end: '링크를 미뤄 두었어요.',
            next: { text: '자료를 다 찾았다. 아직 오후 3시다.', choices: [
              { id: 'done', text: '끝낼 시각을 정하고 친구 링크를 본다', result: '정한 시각에 맞춰 멈추고 산책을 나간다.', impact: [{ who: '서진', text: '할 일과 쉼을 다 챙긴다', tone: 1 }] },
              { id: 'all2', text: '끝 시각 없이 남은 오후 내내 본다', result: '저녁이 되어 눈이 뻑뻑하다.', impact: [{ who: '서진', text: '피곤해진다', tone: -1 }], why: '끝 시각이 없으면 멈출 신호도 없어요.' }] } }] } },
      { id: 'save', text: '숏폼을 \'나중에 보기\'에 담아 두고 자료부터 찾는다', result: '자료를 먼저 찾는다.', impact: [{ who: '서진', text: '할 일을 먼저 한다', tone: 1 }], end: '나중에 보기로 미뤄 두었어요.',
        next: { text: '자료를 찾고 나니 \'나중에 보기\'에 영상이 10개 쌓였다.', choices: [
          { id: 'later2', text: '10개 가운데 2개만 고르고 나머지는 지운다', result: '고른 2개만 본다.', impact: [{ who: '서진', text: '볼 양을 정했다', tone: 1 }], end: '볼 영상을 골라 정했어요.',
            next: { text: '두 개를 다 보자 비슷한 추천이 또 뜬다.', choices: [
              { id: 'done2', text: '정한 2개를 다 봤으니 앱을 닫는다', result: '남은 오후를 다른 일에 쓴다.', impact: [{ who: '서진', text: '스스로 멈췄다', tone: 1 }] },
              { id: 'more2', text: '추천도 몇 개 더 본다', result: '정한 양이 무너진다.', impact: [{ who: '서진', text: '계획이 흔들린다', tone: -1 }], why: '정한 양을 채운 순간이 멈출 신호예요.' }] } },
          { id: 'all3', text: '10개를 다 몰아 본다', result: '오후가 다 지나간다.', impact: [{ who: '서진', text: '쉬는 시간이 몰린다', tone: -1 }], why: '쌓아 둔 영상도 볼 양을 정해야 해요.', end: '쌓인 영상을 다 몰아 봤어요.',
            next: { text: '저녁을 먹고 나니 밀린 숙제가 떠오른다.', choices: [
              { id: 'late3', text: '밤늦게 숙제를 한다', result: '잠이 줄어든다.', impact: [{ who: '서진', text: '다음 날 피곤하다', tone: -1 }], why: '몰아 본 시간은 결국 밤 시간을 빼앗아요.' },
              { id: 'plan3', text: '다음 주부터는 볼 개수를 먼저 정하기로 한다', result: '숙제를 마치고 계획을 적는다.', impact: [{ who: '서진', text: '다음을 준비한다', tone: 1 }] }] } }] } }] };
    const DAY_R = [{ id: 'r1', text: '할 일 옆의 추천은 할 일을 밀어내기 쉽다' }, { id: 'r2', text: '볼 양과 끝 시각을 먼저 정하면 멈출 수 있다' },
      { id: 'r3', text: '주말에는 시간이 많으니 정하지 않아도 된다', why: '주말에도 끝 시각이 없으면 오후 전체가 지나가요.' },
      { id: 'r4', text: '친구가 보낸 링크는 바로 봐야 예의다', why: '"다 하고 볼게"라고 답하는 것도 예의 있는 말이에요.' }];
    const DAY_MORE = { reasons: [{ id: 'r5', text: '할 일과 쉼을 둘 다 챙기는 길이 낫다' }, { id: 'r6', text: '쌓아 둔 영상도 볼 개수를 정해야 한다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.five-minutes', {
        title: '"5분만"의 밤에서 고비 찾기', method: "'5분만' 사례에서 고비 찾기", tool: 'story', minutes: 6,
        levels: { easy: '장면 3장(첫 장면·고비 하나·끝 장면)만 보이고, 고비 장면에 교사가 "여기서 무엇이 나왔지?" 하고 단서를 짚는다.', base: '장면 5장을 넘겨 보며 멈출 수 있었던 고비 장면을 고르고 까닭을 한 줄 말한다.', challenge: '고비 장면마다 작동한 설계 장치 이름(자동 반복·맞춤 추천 등)을 붙여 말한다.' },
        intro: {
          teacher: '"서진이는 정말 5분만 볼 생각이었을까요?" 가상 학생 서진이의 밤 다섯 장면을 넘겨 보이고, 시연 단추로 \'11시 알림을 그냥 넘긴다\' 장면이 바구니에 담기는 모습을 보인다. "서진이가 의지가 약해서 그래요"라는 말이 나오면 "다음 영상이 저절로 뜨지 않았다면 서진이는 언제 멈췄을까요?"라고 되묻는다. 오늘은 사람을 탓하기보다 화면이 어떻게 설계되었는지 따져 본다고 밝힌다. 학생에게 어젯밤 몇 시간 봤는지는 묻지 않는다.',
          student: '서진이의 밤 다섯 장면을 보고, 서진이가 멈출 수 있었던 고비 장면을 골라요. 그 장면에서 화면의 무엇이 서진이를 붙잡았는지 짝에게 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '멈출 수 있던 고비', title: '서진이의 밤', cards: NIGHT, shuffle: false }, sequence: [{ pick: ['s3'] }] },
          art: { draw: 'a paper-cut bedroom at night where a teenager lies in bed scrolling a glowing vertical phone screen, a paper clock on the wall moving from ten to past midnight', banner: '"5분만"은 몇 분이었을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '서진이는 가상 인물이다. 학생의 실제 사용 시간·보는 앱을 발표시키지 않는다.',
      }),
      M('intro.feeling-band', {
        title: '숏폼 본 뒤 기분 띠그래프', method: '가상 설문 띠그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '띠 조각마다 백분율 값을 보이고 가장 큰 조각을 고른다.', base: '조각 값을 읽어 가장 큰 응답과 \'시간이 아까움\'과 \'개운함\'의 차이를 함께 읽는다(2문항, 교사 발문).', challenge: '가상 설문만으로 단정할 수 없는 점(누가 답했는지, 언제 물었는지) 하나를 말한다.' },
        intro: {
          teacher: '"숏폼을 다 보고 났을 때 가장 많은 친구가 느낀 기분은 무엇일까요?" 수업용으로 지어낸 가상 중학생 설문 띠그래프를 띄우고, 시연 단추로 가장 큰 조각을 고르는 모습을 보인다. 이어 "\'시간이 아까움\'은 \'개운함\'보다 몇 %p 많나요?"를 함께 읽는다. "재밌으니까 보는 거죠"라는 학생에게 "보는 동안의 기분과 다 보고 난 뒤의 기분은 같을까요?"라고 되묻는다. 이 자료는 가상이라 우리 학교 학생의 생각이라고 말할 수 없다는 점을 밝힌다.',
          student: '가상 설문 띠그래프에서 가장 큰 조각을 찾고, 보는 동안의 기분과 다 본 뒤의 기분이 왜 다를 수 있는지 생각해 말해요.',
          demo: { tool: 'chart', options: CH('band', '숏폼을 보고 난 뒤 기분(가상 설문)', '%', FEEL, { question: '가장 많이 고른 기분은?', choices: FEEL.map((d) => d[0]) }), sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut long band chart split into four colored paper strips, with small paper faces above each strip showing refreshed, neutral, regretful and tired moods', banner: '다 보고 난 뒤의 기분은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '띠그래프 값은 수업용 가상 자료다. 학급에서 실제 설문을 하지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.feature-effect', {
        title: '설계 장치와 효과 잇기', method: '설계 장치와 심리 효과 연결', tool: 'wordcards', minutes: 16,
        levels: { easy: '장치 3개와 효과를 잇고(놓으면 바로 맞는지 알려 줌), 효과와 대응 잇기도 두 쌍만 한다. 근거 쓰기는 하지 않는다.', base: '장치 5개를 효과와 잇고 효과 4개에 맞서는 대응을 이은 뒤, 활동지에 짝 하나의 근거를 한 줄 쓴다.', challenge: '함정 카드가 섞인 판에서 잇고, 마지막 문항에서 대응 문장의 빈칸까지 채운다.' },
        activity: {
          title: '설계 장치와 효과 잇기', tool: 'wordcards',
          teacher: '"\'짧은 길이\'는 왜 오래 보게 만들까요? 짧은데요." 카드를 이을 때마다 그 장치가 어떤 마음을 만드는지 한 문장으로 말하게 한다. "추천은 내가 좋아하는 걸 보여 줄 뿐"이라는 학생에게 "추천이 끝나는 화면을 본 적 있나요? 추천은 왜 끝이 없을까요?"라고 되묻는다. 장치마다 맞서는 설정·행동이 있다는 것을 짚고, 특정 앱 이름은 쓰지 않고 \'A 앱\'으로 말한다.',
          task: '숏폼 설계 장치 카드를 그 장치가 만드는 마음과 잇고, 그 마음에 맞서는 설정·행동까지 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('숏폼 설계 장치를 그 장치가 만드는 마음과 이어 보세요.', DEV, [], { topic: '장치가 만드는 마음' }),
              MB('숏폼 설계 장치 세 개를 그 장치가 만드는 마음과 이어 보세요.', DEV.slice(0, 3), [], { topic: '장치가 만드는 마음' }),
              MB('숏폼 설계 장치를 마음과 이어 보세요(함정 카드가 있어요).', DEV, ['내 의지가 약해서 생긴 마음'], { topic: '장치가 만드는 마음' })),
            IT(MB('장치가 만든 마음마다 맞서는 설정·행동을 이어 보세요.', FIX, [], { topic: '어떻게 맞설까?' }),
              MB('장치가 만든 마음 두 개에 맞서는 설정·행동을 이어 보세요.', FIX.slice(0, 2), [], { topic: '어떻게 맞설까?' }),
              MB('마음마다 맞서는 설정·행동을 이어 보세요(함정 카드가 있어요).', FIX, ['앱을 열 때마다 참는다'], { topic: '어떻게 맞설까?' })),
            IT(FB('빈칸에 알맞은 장치 카드를 넣어 근거 문장을 완성하세요.', [['영상이 ___이라 한 개쯤은 괜찮다고 느낀다.', '짧은 길이'], ['___ 때문에 영상이 끝나도 멈출 틈이 없다.', '자동 반복'], ['___이 다음 영상이 더 재밌을 것처럼 보이게 한다.', '맞춤 추천']], ['좋은 화질']),
              FB('빈칸에 알맞은 장치 카드를 넣어 근거 문장 두 개를 완성하세요.', [['영상이 ___이라 한 개쯤은 괜찮다고 느낀다.', '짧은 길이'], ['___ 때문에 영상이 끝나도 멈출 틈이 없다.', '자동 반복']], []),
              FB('빈칸에 장치·대응 카드를 넣어 근거와 대응 문장을 완성하세요.', [['영상이 ___이라 한 개쯤은 괜찮다고 느낀다.', '짧은 길이'], ['___ 때문에 영상이 끝나도 멈출 틈이 없다.', '자동 반복'], ['___이 다음 영상이 더 재밌을 것처럼 보이게 한다.', '맞춤 추천'], ['멈출 틈을 만들려면 ___를 끈다.', '자동 재생']], ['좋은 화질', '화면 밝기']),
              { conclude: '숏폼은 짧은 길이·자동 반복·맞춤 추천 같은 장치로 멈출 틈을 줄여요. 장치에는 설정과 행동으로 맞서요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이은 짝 하나를 골라 "___ 장치는 ___ 마음을 만든다. 왜냐하면 ___" 꼴로 근거를 한 줄 써요.' }],
          easy: [{ type: 'choice', prompt: '\'자동 반복\'이 만드는 마음에 ○ 해요.', options: ['멈출 틈 없음', '남과 비교'], answer: '멈출 틈 없음' }] },
      }),
      M('activity.time-gap', {
        title: '체감 시간과 실제 시간 견주기', method: '체감 시간과 실제 시간 견주기', tool: 'clock', minutes: 16,
        levels: { easy: '디지털 시각이 함께 보이고 긴바늘이 5분씩 움직인다. 시각 네 개를 맞춘 뒤 차이는 교사와 함께 센다.', base: '디지털 시각 없이 바늘만 보고 네 시각(시작·체감 끝·약속 끝·실제 끝)을 맞추고, 활동지에 체감과 실제의 차이를 구한다.', challenge: '작은 눈금 없이 맞추고, 마지막 문항에서 차이가 생긴 까닭을 설계 장치 두 개로 짝에게 설명한다.' },
        activity: {
          title: '체감 시간과 실제 시간 견주기', tool: 'clock',
          teacher: '"서진이는 \'15분쯤 본 것 같다\'고 했어요. 정말 몇 분이었을까요?" 시작 시각 10시 50분과 끝 시각 12시 5분을 시계에 맞춘 뒤, 서진이가 느낀 끝 시각(11시 5분)과 견주게 한다. "영상이 짧으니 시간이 얼마 안 들었을 거예요"라는 학생에게 "1분짜리 영상 75개를 이어 보면 몇 분일까요?"라고 되묻는다. 12를 지나면 짧은바늘이 다음 숫자로 넘어간다는 점도 함께 본다. 시각은 가상 인물의 것이며 학생의 실제 사용 시각을 묻지 않는다.',
          task: '서진이가 숏폼을 본 밤의 시각들을 시계에 맞추고, 서진이가 느낀 시간과 실제 시간을 견주어요.',
          levels: { easy: { showDigital: true }, base: {}, challenge: { showMinuteMarks: false, revealAfterCheck: true } },
          items: [
            { prompt: '서진이가 숏폼을 열었던 시각, 10시 50분에 시계를 맞추세요.', toolOptions: { minuteStep: 5 }, target: { h: 10, m: 50 }, difficulty: 0.2 },
            { prompt: '서진이는 "15분쯤 본 것 같다"고 했어요. 서진이가 느낀 끝 시각(시작 15분 뒤)에 시계를 맞추세요.', toolOptions: { minuteStep: 5 }, target: { h: 11, m: 5 }, difficulty: 0.25 },
            { prompt: '서진이가 처음 약속한 "5분만"이 끝났어야 할 시각에 시계를 맞추세요.', toolOptions: { minuteStep: 5 }, target: { h: 10, m: 55 }, difficulty: 0.25 },
            { prompt: '서진이가 실제로 앱을 끈 시각, 12시 5분에 시계를 맞추세요.', toolOptions: { minuteStep: 5 }, target: { h: 12, m: 5 }, difficulty: 0.3 },
            IT({ prompt: '느낀 시간(15분)과 실제 시간은 몇 분 차이인지 짝과 함께 시계로 세어 말해요.', free: true, toolOptions: { minuteStep: 5 } },
              null,
              { prompt: '느낀 시간과 실제 시간이 다른 까닭을 설계 장치 두 개를 넣어 짝에게 설명해요.' },
              { conclude: '서진이는 15분이라 느꼈지만 실제로는 1시간 15분을 봤어요. 멈출 틈이 없으면 시간 감각도 흔들려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '서진이의 시각을 정리하고 차이를 구해요.', columns: ['무엇', '시각·시간'], cells: [['시작', '10시 50분'], ['실제 끝', ''], ['실제로 본 시간', ''], ['느낀 시간과의 차이', '']], answer: '12시 5분, 1시간 15분(75분), 1시간(60분)' }],
          easy: [{ type: 'choice', prompt: '서진이가 실제로 본 시간에 ○ 해요.', options: ['15분', '1시간 15분'], answer: '1시간 15분' }] },
        notes: '10시 50분·12시 5분은 가상 인물의 시각이다. 체감 시간 차이는 사람마다 다르며, 이 사례의 숫자를 일반 사실로 말하지 않는다.',
      }),
      M('activity.scroll-path', {
        title: '밤 11시 알림 갈림길', method: '밤 11시 숏폼 갈림길 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번을 골라 결과를 보고, 근거 카드는 고르지 않는다.', base: '갈림길 세 번을 골라 다음 날 수업·발표 장면까지 가고, 내 선택의 근거 카드를 고른다.', challenge: '되돌아가 다른 길도 끝까지 가 보고(끝 장면 두 개 이상), 다음 날 할 일·친구 시선에 관한 근거까지 고른다.' },
        activity: {
          title: '밤 11시 알림 갈림길', tool: 'dilemma',
          teacher: '"알림이 온 그 순간, 서진이에게 몇 개의 길이 있었을까요?" 학생마다 한 길을 끝까지 가 본 뒤, 되돌아가 다른 길의 다음 날 장면과 견주게 한다. "하룻밤쯤은 괜찮아요"라는 학생에게 "다음 날 2교시 발표 장면에서 서진이 모둠은 어떻게 되었나요?"라고 되묻는다. 타이머 길처럼 장치를 썼다가 실패한 길도 \'고쳐 쓰면 되는 길\'로 다룬다.',
          task: '밤 11시 숏폼 알림이 온 장면에서 서진이의 길을 골라 다음 날까지 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '밤 11시 알림이 왔어요. 두 번 골라 결과를 보세요.', base: '밤 11시 알림이 왔어요. 세 번 골라 다음 날까지 가고 근거를 고르세요.', challenge: '밤 11시 알림이 왔어요. 끝 장면 두 개 이상을 가 보고 근거를 고르세요.' },
              '밤 11시 숏폼 알림', NIGHT_D, [['later', 'sleep', 'focus'], ['timer', 'shut', 'share']], NIGHT_R, ['r1', 'r2'], Object.assign({ explore: 2 }, NIGHT_MORE)),
            DIL({ easy: '주말에 자료를 찾다 추천 숏폼이 떴어요. 두 번 골라 결과를 보세요.', base: '주말에 자료를 찾다 추천 숏폼이 떴어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '주말에 자료를 찾다 추천 숏폼이 떴어요. 끝 장면 두 개 이상을 가 보고 근거를 고르세요.' },
              '주말 오후 자료 찾기', DAY_D, [['note', 'cut', 'done'], ['save', 'later2', 'done2']], DAY_R, ['r1', 'r2'], Object.assign({ explore: 2 }, DAY_MORE), { conclude: '멈추는 힘은 의지만이 아니라 미리 만든 틈(폰 두는 곳·타이머·자동 재생 끄기·나중에 보기)에서 나와요.' }),
            { prompt: '내가 고른 길과 다른 길의 다음 날 장면을 짝과 견주어 말해요.', free: true, toolOptions: { title: '밤 11시 숏폼 알림', scene: cut(NIGHT_D, 3), reasons: [], compare: true } },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '밤 11시 알림 장면에서 내가 고른 길과 그 근거를 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '멈출 틈을 만든 행동에 ○ 해요.', options: ['폰을 거실에 둔다', '"이것만 더" 하며 넘긴다'], answer: '폰을 거실에 둔다' }] },
      }),
      M('activity.analysis-note', {
        title: 'A 앱 설계 장치 분석 노트', method: '설계 장치 분석 노트 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문단마다 장치 하나만 다루고, 문장 틀을 따라 쓰고 기준 2개로 점검한다.', base: '장치 둘을 골라 \'장치 → 노리는 효과 → 나의 대응\' 세 문단을 쓰고 기준 3개로 점검한 뒤, 못 표시한 기준 하나를 골라 고쳐 쓴다.', challenge: '장치 셋을 다루고, 대응 문단에 장치의 편리한 점(반론)까지 넣어 기준 4개로 점검한다.' },
        activity: {
          title: 'A 앱 설계 장치 분석 노트', tool: 'rubric-writing',
          teacher: '"\'숏폼은 나쁘다\'와 \'자동 반복은 영상이 끝나도 바로 다음 것을 보여 줘서 멈출 틈을 없앤다\' 가운데 어느 쪽이 분석일까요?" 두 문장을 견주어 읽고 문단마다 기준표를 함께 본다. "장치를 다 끄면 앱을 못 쓴다"는 학생에게는 편리한 점도 쓰되 나에게 맞는 대응을 고르면 된다고 말해 준다. 실제 앱 이름 대신 \'A 앱\'으로 쓰게 하고, 자기 사용 시간은 쓰지 않아도 된다고 알린다.',
          task: '가상의 숏폼 서비스 \'A 앱\'의 설계 장치를 분석하는 노트를 \'장치 → 노리는 효과 → 나의 대응\' 세 문단으로 쓰고, 기준표로 고쳐요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: A 앱의 설계 장치 두 개가 화면에서 어떻게 보이는지 쓰세요.',
              { topic: '첫 문단 — A 앱(가상 숏폼 서비스)의 설계 장치 두 개를 골라 화면에서 어떻게 보이는지 2~3문장으로 쓰세요. 앱 이름은 쓰지 않아요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 4, title: '분석 노트 ① 장치', lines: 4 },
              ['장치 이름을 정확히 짚었다', '화면에서 어떻게 보이는지 썼다', '앱 이름 대신 A 앱이라고 썼다'],
              { prompt: '첫 문단: 문장 틀을 따라 A 앱의 장치 하나를 쓰세요.', toolOptions: { starter: 'A 앱에는 ___ 장치가 있다. 화면에서는 ___.', minSentences: 2 }, crit: ['장치 이름을 정확히 짚었다', '화면에서 어떻게 보이는지 썼다'] },
              { prompt: '첫 문단: A 앱의 설계 장치 세 개가 화면에서 어떻게 보이는지 쓰세요.', toolOptions: { maxSentences: 5 }, crit: ['장치 이름을 정확히 짚었다', '화면에서 어떻게 보이는지 썼다', '앱 이름 대신 A 앱이라고 썼다', '장치 세 개를 모두 다뤘다'] }),
            RW('둘째 문단: 그 장치들이 노리는 효과를 근거와 함께 쓰세요.',
              { topic: '둘째 문단 — 첫 문단의 장치가 이용자에게 어떤 마음을 만들어 더 오래 보게 하는지 근거를 들어 2~3문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 4, title: '분석 노트 ② 노리는 효과', lines: 4 },
              ['장치마다 노리는 마음을 썼다', '왜 그런지 근거를 들었다', '사람을 탓하지 않고 설계를 분석했다'],
              { prompt: '둘째 문단: 문장 틀을 따라 장치 하나가 노리는 효과를 쓰세요.', toolOptions: { starter: '이 장치는 ___ 마음을 만든다. 왜냐하면 ___.', minSentences: 2 }, crit: ['장치가 노리는 마음을 썼다', '왜 그런지 근거를 들었다'] },
              { prompt: '둘째 문단: 장치 세 개가 노리는 효과를 근거와 함께 쓰세요.', toolOptions: { maxSentences: 5 }, crit: ['장치마다 노리는 마음을 썼다', '왜 그런지 근거를 들었다', '사람을 탓하지 않고 설계를 분석했다', '장치끼리 함께 작동하는 점을 썼다'] }),
            RW('셋째 문단: 장치마다 나의 대응(설정·행동)을 구체적으로 쓰세요.',
              { topic: '셋째 문단 — 장치마다 맞설 나의 대응(설정 바꾸기·행동 정하기)을 언제·어떻게가 드러나게 2~3문장으로 쓰세요.', minChars: 40, maxChars: 260, minSentences: 2, maxSentences: 4, title: '분석 노트 ③ 나의 대응', lines: 4 },
              ['대응이 장치와 짝을 이룬다', '언제·어떻게 할지 구체적이다', '실제로 해 볼 수 있는 대응이다'],
              { prompt: '셋째 문단: 문장 틀을 따라 장치 하나에 맞설 대응을 쓰세요.', toolOptions: { starter: '___ 장치에 맞서 나는 ___ 때 ___ 하겠다.', minSentences: 1 }, crit: ['대응이 장치와 짝을 이룬다', '언제·어떻게 할지 구체적이다'] },
              { prompt: '셋째 문단: 대응과 함께 장치의 편리한 점(반론)도 한 문장 넣어 쓰세요.', toolOptions: { maxSentences: 5, starter: '물론 ___ 장치는 ___ 점이 편리하다. 그래도 나는 ___.' }, crit: ['대응이 장치와 짝을 이룬다', '언제·어떻게 할지 구체적이다', '실제로 해 볼 수 있는 대응이다', '장치의 편리한 점(반론)도 다뤘다'] }),
            RW('기준표에서 표시하지 못한 기준 하나를 골라 그 문단을 고쳐 쓰세요.',
              { topic: '고쳐 쓰기 — 세 문단 가운데 기준을 덜 채운 문단 하나를 골라 고쳐 쓰세요. 무엇을 고쳤는지 첫 문장에 밝혀요.', minChars: 40, maxChars: 260, minSentences: 2, maxSentences: 4, title: '분석 노트 고쳐 쓰기', lines: 4 },
              ['고친 기준을 첫 문장에 밝혔다', '고친 문단이 그 기준을 채운다', '고치기 전보다 구체적이다'],
              { prompt: '틀을 따라 문단 하나를 고쳐 쓰세요.', toolOptions: { starter: '나는 ___ 문단의 ___ 부분을 고쳤다. 고친 문장: ___' }, crit: ['고친 기준을 첫 문장에 밝혔다', '고친 문단이 그 기준을 채운다'] },
              null, { conclude: '좋은 분석은 장치를 정확히 짚고, 효과를 근거로 설명하고, 나에게 맞는 구체적인 대응으로 끝나요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '분석 노트의 뼈대를 칸에 먼저 적어요.', columns: ['장치', '노리는 효과', '나의 대응'], cells: [['', '', ''], ['', '', '']], answer: '(예) 자동 반복 — 멈출 틈 없음 — 자동 재생 끄기' }] },
        notes: '분석 대상은 \'A 앱\'(가상 숏폼 서비스)이다. 실제 서비스 이름·회사 이름을 쓰지 않게 하고, 학생의 사용 시간을 쓰라고 하지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.feature-map', {
        title: '숏폼 장치 정리 마인드맵', method: '숏폼 설계 장치 정리 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '장치 가지 2개에 효과·대응 카드 4장을 붙인다.', base: '장치 가지 4개에 효과·대응 잔가지 카드를 둘씩 붙인다.', challenge: '가지마다 대응을 둘씩(카드 세 장씩) 붙이고, 함정 카드 두 장은 남긴다.' },
        wrap: {
          teacher: '"오늘 찾은 장치들은 결국 무엇을 붙잡으려는 걸까요?" 가지를 다 붙이면 학생 몇 명에게 가장 맞서기 어려운 장치와 그 까닭을 말하게 한다. "결국 의지 문제"라는 말에는 오늘 시계로 잰 서진이의 75분과 장치 이름을 다시 짚는다. 정리는 학생 자신의 사용 시간이 아니라 장치와 대응으로 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '숏폼이 시간을 붙잡는 법', slots: ['짧은 길이', '자동 반복', '맞춤 추천', '세로 넘기기'], cards: [
              { id: 'a1', text: '한 개쯤은 괜찮다는 느낌' }, { id: 'a2', text: '볼 개수를 먼저 정하기' }, { id: 'b1', text: '멈출 틈이 없음' }, { id: 'b2', text: '자동 재생 끄기' },
              { id: 'c1', text: '다음이 더 재밌을 것 같음' }, { id: 'c2', text: '추천 대신 찾아서 보기' }, { id: 'd1', text: '끝이 안 보임' }, { id: 'd2', text: '시간 알림 맞추기' }] },
              prompt: '장치 가지마다 효과와 대응 카드를 하나씩 붙여요.', target: { sort: { '짧은 길이': ['a1', 'a2'], '자동 반복': ['b1', 'b2'], '맞춤 추천': ['c1', 'c2'], '세로 넘기기': ['d1', 'd2'] } }, difficulty: 0.25 },
            { prompt: '장치 가지 두 개에 효과와 대응 카드를 붙여요.', toolOptions: { slots: ['짧은 길이', '자동 반복'], cards: [{ id: 'a1', text: '한 개쯤은 괜찮다는 느낌' }, { id: 'a2', text: '볼 개수를 먼저 정하기' }, { id: 'b1', text: '멈출 틈이 없음' }, { id: 'b2', text: '자동 재생 끄기' }] }, target: { sort: { '짧은 길이': ['a1', 'a2'], '자동 반복': ['b1', 'b2'] } } },
            { prompt: '가지마다 효과 하나와 대응 둘을 붙이고 함정 카드는 남겨요.', toolOptions: { cards: [
              { id: 'a1', text: '한 개쯤은 괜찮다는 느낌' }, { id: 'a2', text: '볼 개수를 먼저 정하기' }, { id: 'a3', text: '정한 개수를 세며 보기' }, { id: 'b1', text: '멈출 틈이 없음' }, { id: 'b2', text: '자동 재생 끄기' }, { id: 'b3', text: '한 편 끝나면 화면 끄기' },
              { id: 'c1', text: '다음이 더 재밌을 것 같음' }, { id: 'c2', text: '추천 대신 찾아서 보기' }, { id: 'c3', text: '관심 없음 표시하기' }, { id: 'd1', text: '끝이 안 보임' }, { id: 'd2', text: '시간 알림 맞추기' }, { id: 'd3', text: '잠자리에 폰 두지 않기' },
              { id: 't1', text: '의지만 더 키우기' }, { id: 't2', text: '화면 밝기 올리기' }] },
              target: { sort: { '짧은 길이': ['a1', 'a2', 'a3'], '자동 반복': ['b1', 'b2', 'b3'], '맞춤 추천': ['c1', 'c2', 'c3'], '세로 넘기기': ['d1', 'd2', 'd3'] } } }),
            { type: 'choice', prompt: '"영상이 짧으니 많이 봐도 시간이 얼마 안 든다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['짧은 영상은 화질이 낮다', '짧은 영상도 자동으로 이어 보면 한 시간이 넘을 수 있다', '긴 영상이 더 재미있다'], answer: 1, difficulty: 0.2, explain: '서진이는 15분이라 느꼈지만 실제로는 1시간 15분을 봤어요.' },
            { type: 'short', prompt: '오늘 찾은 장치 가운데 가장 맞서기 어려운 장치와 그 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '숏폼이 시간을 붙잡는 법',
          items: [
            { type: 'table', prompt: '장치마다 노리는 효과와 대응을 써요.', columns: ['장치', '효과', '대응'], cells: [['짧은 길이', '', ''], ['자동 반복', '', ''], ['맞춤 추천', '', '']], answer: '한 개쯤 괜찮은 느낌·개수 정하기, 멈출 틈 없음·자동 재생 끄기, 다음이 더 재밌을 것 같음·찾아서 보기' },
            { type: 'short', prompt: '"멈추지 못하는 건 의지가 약해서일 뿐"이라는 말에 오늘 배운 장치 하나를 들어 반박해요.' },
          ],
          easy: { note: '장치 두 개만 써도 돼요.', items: [{ type: 'choice', prompt: '\'자동 반복\'에 맞서는 대응에 ○ 해요.', options: ['자동 재생 끄기', '화면 밝기 올리기'], answer: '자동 재생 끄기' }] },
        },
      }),
      M('wrap.stop-plan', {
        title: '숏폼 멈춤 계획 세 단계', method: '숏폼 멈춤 계획 세 단계', tool: 'timeline', minutes: 7,
        levels: { easy: '서진이의 멈춤 계획 카드 3장을 차례로 놓는다(함정 카드 없음).', base: '함정 카드가 섞인 판에서 세 단계를 차례로 놓고, 활동지에 내 멈춤 계획 세 단계를 직접 채운다(혼자 보기).', challenge: '계획이 깨질 상황의 대비책 카드까지 네 단계를 차례로 놓는다.' },
        wrap: {
          teacher: '"\'오늘부터 덜 봐야지\'와 \'시간 알림이 울리면 앱을 닫고 폰을 거실에 둔다\' 가운데 어느 쪽이 지켜질까요?" 서진이의 계획 카드를 차례로 놓은 뒤, 활동지에 내 계획을 써 보게 한다. "신호는 졸릴 때"라는 학생에게 "졸릴 때는 이미 늦은 시각 아닐까요? 미리 정한 신호가 왜 좋을까요?"라고 되묻는다. 활동지의 내 계획은 걷지 않고 혼자 본다고 알린다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timeline', options: OB('', [{ id: 'p1', text: '멈춤 신호: 시간 알림이 울린다' }, { id: 'p2', text: '멈출 행동: 앱을 닫고 폰을 거실에 둔다' }, { id: 'p3', text: '대신 할 활동: 내일 준비물 챙기고 눕기' }], { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '멈춤 신호: 졸릴 때까지 본다' }, { id: 'x2', text: '멈출 행동: 다음 영상만 더 본다' }]).toolOptions,
              prompt: '서진이의 멈춤 계획을 신호 → 행동 → 대신 할 활동 차례로 놓아요.', target: { order: ['p1', 'p2', 'p3'] }, difficulty: 0.2 },
            { prompt: '서진이의 멈춤 계획 카드 세 장을 차례로 놓아요.', toolOptions: { cards: [{ id: 'p3', text: '대신 할 활동: 내일 준비물 챙기고 눕기' }, { id: 'p1', text: '멈춤 신호: 시간 알림이 울린다' }, { id: 'p2', text: '멈출 행동: 앱을 닫고 폰을 거실에 둔다' }] } },
            { prompt: '대비책까지 넣어 서진이의 멈춤 계획 네 단계를 차례로 놓아요.', toolOptions: { slots: 4, cards: [{ id: 'p1', text: '멈춤 신호: 시간 알림이 울린다' }, { id: 'p2', text: '멈출 행동: 앱을 닫고 폰을 거실에 둔다' }, { id: 'p3', text: '대신 할 활동: 내일 준비물 챙기고 눕기' }, { id: 'p4', text: '대비책: 다시 열고 싶으면 물 한 잔 마시기' }, { id: 'x1', text: '멈춤 신호: 졸릴 때까지 본다' }] }, target: { order: ['p1', 'p2', 'p3', 'p4'] } }),
            { type: 'choice', prompt: '멈춤 신호로 가장 알맞은 것은?', options: ['졸려서 눈이 감길 때', '미리 맞춘 시간 알림이 울릴 때', '재미있는 영상이 끝날 때'], answer: 1, difficulty: 0.2, explain: '미리 정한 신호여야 늦기 전에 멈출 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 숏폼 멈춤 계획(혼자 보기)',
          items: [
            { type: 'table', prompt: '내 멈춤 계획 세 단계를 채워요(이 칸은 걷지 않아요).', columns: ['멈춤 신호', '멈출 행동', '대신 할 활동'], cells: [['', '', '']], answer: '(예) 시간 알림이 울리면 — 앱을 닫고 폰을 거실에 둔다 — 책 읽기' },
            { type: 'short', prompt: '계획이 깨질 만한 상황 하나와 그때의 대비책을 써요.' },
          ],
          easy: { note: '보기에서 골라 써도 돼요: 시간 알림·폰 거실에 두기·준비물 챙기기.', items: [{ type: 'blank', prompt: '틀을 채워 멈춤 계획을 써요.', text: '___이 울리면 ___ 하고, 대신 ___ 한다.', answer: '(예) 시간 알림, 폰을 거실에 두기, 책 읽기' }] },
        },
        notes: '활동지의 내 계획은 걷지 않는다(혼자 보기). 채점하는 것은 가상 인물 서진이의 계획 차례뿐이다.',
      }),
    );
  }

  // ==== 7학년 · 나의 스마트폰 사용 규칙 만들기와 실천 점검 (saf-cyber.m.phone-rule) ====
  {
    const M = MK('phone-rule', [7]);
    // 가상 학생 민재의 평일 시간대별 사용(분) — 수업용 가상 자료
    const SLOT = [['등교 전', 10], ['쉬는 시간', 15], ['방과 후', 40], ['저녁 식사 뒤', 50], ['잠들기 전', 70]];
    const RULES = [
      { id: 'g1', text: '밤 10시 이후엔 거실에서 충전한다', to: '실천 가능한 규칙' }, { id: 'v1', text: '적당히 쓴다', to: '막연한 규칙' },
      { id: 'g2', text: '공부할 땐 폰을 가방에 넣는다', to: '실천 가능한 규칙' }, { id: 'v2', text: '줄이도록 노력한다', to: '막연한 규칙' },
      { id: 'g3', text: '밥 먹을 땐 폰을 엎어 둔다', to: '실천 가능한 규칙' }, { id: 'v3', text: '너무 오래 하지 않는다', to: '막연한 규칙' },
      { id: 'g4', text: '숙제를 마친 뒤 30분 쓴다', to: '실천 가능한 규칙' }, { id: 'v4', text: '필요할 때만 쓴다', to: '막연한 규칙' }];
    const KINDS = ['실천 가능한 규칙', '막연한 규칙'];
    const DAYS = (from, n) => Array.from({ length: n }, (_, i) => ({ label: `${from + i}일`, unit: '개', step: 1 }));
    const WEEK1 = [3, 2, 3, 1, 0, 2, 3];
    const WEEK2 = [2, 3, 3, 2, 3, 3, 3];
    const BLOCK = [
      { id: 'b1', text: '학원 90분', to: '먼저 넣을 일' }, { id: 'b2', text: '과제 60분', to: '먼저 넣을 일' }, { id: 'b3', text: '운동 30분', to: '먼저 넣을 일' },
      { id: 'b4', text: '가족과 저녁 30분', to: '먼저 넣을 일' }, { id: 'b5', text: '여가 화면 30분', to: '남는 시간에' },
      { id: 'b6', text: '숏폼 몰아 보기 90분', to: '오늘은 빼 둘 일' }, { id: 'b7', text: '게임 연달아 2시간', to: '오늘은 빼 둘 일' }];
    const EXAM = [
      { id: 'e1', text: '학원 90분', to: '먼저 넣을 일' }, { id: 'e2', text: '시험공부 100분', to: '먼저 넣을 일' }, { id: 'e3', text: '운동 20분', to: '먼저 넣을 일' },
      { id: 'e4', text: '가족과 저녁 30분', to: '먼저 넣을 일' }, { id: 'e5', text: '여가 화면 30분', to: '오늘은 빼 둘 일' },
      { id: 'e6', text: '시험 끝난 날 여가 화면 60분', to: '남는 시간에' }, { id: 'e7', text: '단체방 늦게까지 대화', to: '오늘은 빼 둘 일' }];
    const SLOT3 = ['먼저 넣을 일', '남는 시간에', '오늘은 빼 둘 일'];

    ALL.push(
      // ---- 도입 ----
      M('intro.app-week', {
        title: '민재의 시간대별 사용 막대', method: '가상 학생 앱 사용 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 분 값을 보이고 가장 높은 막대를 고른다.', base: '눈금을 읽어 가장 높은 시간대·둘째 시간대·두 막대의 차이를 묻는 세 질문에 답한다(교사 발문).', challenge: '사용이 몰린 시간대의 원인 가설 두 개(예: 침대에 폰이 있다, 할 일이 끝나 심심하다)를 짝과 세운다.' },
        intro: {
          teacher: '"민재가 폰을 가장 많이 쓰는 때는 언제일까요? 그때 민재는 어디에 있을까요?" 가상 학생 민재의 평일 시간대별 사용 막대그래프(지어낸 자료)를 띄우고, 시연 단추로 가장 높은 막대를 고르는 모습을 보인다. 이어 "저녁 식사 뒤와 잠들기 전은 몇 분 차이인가요?"를 함께 읽는다. "많이 쓰는 시간을 다 없애면 된다"는 학생에게 "그 시간대에 왜 몰렸는지 모르면 규칙이 지켜질까요?"라고 되묻는다. 학생 자신의 사용 시간은 묻지 않는다.',
          student: '민재의 막대그래프에서 사용이 가장 많이 몰린 시간대를 찾고, 왜 그때 몰렸을지 까닭을 하나 생각해 말해요.',
          demo: { tool: 'chart', options: CH('bar', '민재의 평일 시간대별 사용(가상 자료)', '분', SLOT, { xLabel: '시간대', yLabel: '사용 시간', question: '사용이 가장 많은 시간대는?', choices: SLOT.map((d) => d[0]) }), sequence: [{ pick: 4 }] },
          art: { draw: 'a paper-cut bar chart made of paper strips standing on a desk, the tallest strip next to a paper bed and a small glowing phone, a clock showing late evening', banner: '언제 가장 많이 쓸까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '민재는 가상 인물이고 그래프 값은 지어낸 자료다. 학생에게 자기 사용 시간을 발표시키지 않는다.',
      }),
      M('intro.three-days', {
        title: '사흘 만에 무너진 규칙', method: '사흘 만에 무너진 규칙 사례', tool: 'story', minutes: 6,
        levels: { easy: '까닭 보기 3장(맞는 까닭 2장·함정 1장)만 두고 고른다.', base: '까닭 보기 5장 가운데 규칙이 무너진 까닭 2장을 고른다.', challenge: '고른 까닭을 고쳐 \'폰 하루 1시간\'을 조건과 행동이 분명한 규칙으로 다시 써서 짝에게 말한다.' },
        intro: {
          teacher: '"민재는 왜 사흘 만에 규칙을 포기했을까요? 민재가 게을러서일까요?" 가상 학생 민재가 \'폰 하루 1시간\'을 정했다가 사흘째 포기한 이야기를 들려주고, 시연 단추로 까닭 카드 두 장이 바구니에 담기는 모습을 보인다. "규칙은 엄격할수록 잘 지켜진다"는 학생에게 "1시간을 언제, 어떻게 잴지 정하지 않았다면 엄격한 규칙일까요, 막연한 규칙일까요?"라고 되묻는다. 오늘은 지켜지는 규칙의 모양을 찾는다고 밝힌다.',
          student: '민재가 \'폰 하루 1시간\' 규칙을 사흘 만에 포기한 까닭을 골라 보고, 어떻게 고치면 지킬 수 있었을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '규칙이 무너진 까닭', title: '민재의 사흘', cards: [
            { id: 'w1', text: '언제·어디서 쓸지 정하지 않았다', motif: 'cloud' }, { id: 'w2', text: '1시간을 잴 방법이 없었다', motif: 'moon' },
            { id: 'w3', text: '한 번 어기자 다 끝났다고 여겼다', motif: 'leaf' }, { id: 'w4', text: '민재가 원래 게을러서', motif: 'house' }, { id: 'w5', text: '폰이 너무 좋은 기계라서', motif: 'star' }], shuffle: false },
            sequence: [{ pick: ['w1', 'w2'] }] },
          art: { draw: 'a paper-cut wall calendar with three days, a paper note reading one hour a day crumpled on the third day, and a teenager scratching their head', banner: '규칙은 왜 사흘 만에 무너졌을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '민재는 가상 인물이다. 학생에게 자기 규칙을 지키지 못한 일을 발표시키지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.rule-quality', {
        title: '막연한 규칙 고치기', method: '좋은 규칙과 막연한 규칙 가르고 고치기', tool: 'mindmap', minutes: 16,
        levels: { easy: '규칙 카드 4장을 두 가지에 나누고(놓으면 바로 맞는지 알려 줌), 막연한 규칙 1개를 고친 규칙과 잇는다.', base: '규칙 카드 8장을 나누고, 막연한 규칙 2개를 조건-행동 문장과 이은 뒤 고친 규칙의 조건 빈칸을 채운다.', challenge: '마지막 문항에서 고친 규칙에 예외 조건(급한 연락·과제 자료 찾기) 빈칸까지 채운다.' },
        activity: {
          title: '막연한 규칙 고치기', tool: 'mindmap',
          teacher: '"\'적당히 쓴다\'를 지켰는지 오늘 밤 어떻게 알 수 있을까요?" 카드를 나눌 때마다 \'언제·어디서·무엇을\'이 들어 있는지 짚게 한다. "\'적당히\'도 규칙이 된다"는 학생에게 "민재와 내가 생각하는 \'적당히\'는 같을까요?"라고 되묻는다. 막연한 규칙을 고칠 때는 조건(언제·어디서)과 행동(무엇을 한다)을 한 문장에 넣는다는 점을 짚는다.',
          task: '규칙 카드를 \'실천 가능한 규칙\'과 \'막연한 규칙\'으로 나누고, 막연한 규칙을 조건과 행동이 분명한 문장으로 고쳐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('규칙 카드를 실천 가능한 규칙과 막연한 규칙으로 나누세요.', KINDS, RULES, { topic: '지켜지는 규칙일까?' }),
              SB('규칙 카드 4장을 실천 가능한 규칙과 막연한 규칙으로 나누세요.', KINDS, pickCards(RULES, ['g1', 'v1', 'g2', 'v2']), { topic: '지켜지는 규칙일까?' })),
            IT(MB('막연한 규칙마다 조건과 행동이 분명한 고친 규칙을 이어 보세요.', [['적당히 쓴다', '숙제를 마치면 30분 쓰고 끈다'], ['줄이도록 노력한다', '잠들기 30분 전엔 폰을 거실에 둔다']], ['오늘부터 진짜 줄인다'], { topic: '이렇게 고쳐요' }),
              MB('막연한 규칙 하나를 조건과 행동이 분명한 규칙과 이어 보세요.', [['적당히 쓴다', '숙제를 마치면 30분 쓰고 끈다']], [], { topic: '이렇게 고쳐요' }),
              MB('막연한 규칙마다 고친 규칙을 이어 보세요(함정 카드가 있어요).', [['적당히 쓴다', '숙제를 마치면 30분 쓰고 끈다'], ['줄이도록 노력한다', '잠들기 30분 전엔 폰을 거실에 둔다'], ['너무 오래 하지 않는다', '1시간이 되면 알림을 보고 끈다']], ['오늘부터 진짜 줄인다', '되도록 조금만 쓴다'], { topic: '이렇게 고쳐요' })),
            IT(FB('고친 규칙의 조건 빈칸에 알맞은 카드를 넣으세요.', [['___에는 폰을 가방에 넣는다.', '공부할 때'], ['___ 거실에서 충전한다.', '밤 10시 이후엔']], ['기분 내킬 때']),
              FB('고친 규칙의 조건 빈칸 하나에 알맞은 카드를 넣으세요.', [['___에는 폰을 가방에 넣는다.', '공부할 때']], ['기분 내킬 때']),
              FB('고친 규칙의 조건과 예외 조건 빈칸에 카드를 넣으세요.', [['___에는 폰을 가방에 넣는다.', '공부할 때'], ['___ 거실에서 충전한다.', '밤 10시 이후엔'], ['예외: ___는 보호자께 말하고 쓴다.', '급한 연락'], ['예외: ___ 때는 그 화면만 연다.', '과제 자료를 찾을']], ['기분 내킬 때', '심심할']),
              { conclude: '지켜지는 규칙에는 언제·어디서라는 조건과 무엇을 한다는 행동이 함께 들어 있어요. 꼭 필요한 예외도 미리 정해 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '막연한 규칙 \'필요할 때만 쓴다\'를 조건과 행동이 분명한 문장으로 고쳐 써요.' }],
          easy: [{ type: 'choice', prompt: '실천 가능한 규칙에 ○ 해요.', options: ['밥 먹을 땐 폰을 엎어 둔다', '적당히 쓴다'], answer: '밥 먹을 땐 폰을 엎어 둔다' }] },
      }),
      M('activity.day-budget', {
        title: '방과 후 240분 시간 예산 짜기', method: '하루 시간 예산에서 여가 화면 시간 정하기', tool: 'economy', minutes: 16,
        levels: { easy: '시간 블록 카드 4장을 \'먼저 넣을 일\'·\'남는 시간에\' 두 칸에 나눈다(놓으면 바로 맞는지 알려 줌).', base: '블록 7장을 세 칸(먼저·남는 시간에·오늘은 빼 둘 일)에 나누고 과제·운동은 먼저 칸에 넣은 뒤, 저녁 블록의 차례를 놓는다.', challenge: '시험 주간 블록 7장을 따로 나누고, 활동지에서 평일과 시험 주간의 여가 화면 시간을 견준다.' },
        activity: {
          title: '방과 후 240분 시간 예산 짜기', tool: 'economy',
          teacher: '"민재의 평일 방과 후 자유 시간은 240분이에요. 여가 화면 시간은 언제 정해야 할까요, 먼저일까요 나중일까요?" 학원·과제·운동·가족 블록을 먼저 넣고 남는 시간을 세게 한 뒤 여가 화면 블록을 고르게 한다(90+60+30+30=210분, 남는 30분). "화면 시간은 나중에 남으면 쓰는 것"이라는 말에는 남는 시간을 미리 정해 두어야 잠들기 전 몰아 쓰기를 막는다고 짚는다. 이 교구는 돈 대신 시간 카드를 칸에 나누는 판으로 쓰며, 분 합계는 교사와 함께 센다. 시간 값은 가상 학생의 것이다.',
          task: '민재의 방과 후 240분에 꼭 할 일 블록을 먼저 넣고, 남는 시간에 맞는 여가 화면 블록을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('민재의 평일 블록을 먼저 넣을 일·남는 시간에·오늘은 빼 둘 일로 나누세요(240분 안).', SLOT3, BLOCK, { title: '평일 방과 후 240분' }),
              SB('민재의 평일 블록 4장을 먼저 넣을 일과 남는 시간에로 나누세요.', ['먼저 넣을 일', '남는 시간에'], pickCards(BLOCK, ['b1', 'b2', 'b3', 'b5']), { title: '평일 방과 후 240분' })),
            IT(OB('민재의 저녁 블록을 알맞은 차례로 놓으세요.', [{ id: 'o1', text: '과제 60분' }, { id: 'o2', text: '운동 30분' }, { id: 'o3', text: '가족과 저녁 30분' }, { id: 'o4', text: '여가 화면 30분' }, { id: 'o5', text: '잠자리 준비' }], { title: '민재의 저녁 차례' }),
              OB('민재의 저녁 블록 세 장을 알맞은 차례로 놓으세요.', [{ id: 'o1', text: '과제 60분' }, { id: 'o4', text: '여가 화면 30분' }, { id: 'o5', text: '잠자리 준비' }], { title: '민재의 저녁 차례' })),
            IT(SB('시험 주간 블록을 세 칸에 나누세요(시험공부가 늘어난 240분).', SLOT3, EXAM, { title: '시험 주간 방과 후 240분' }),
              SB('시험 주간 블록 4장을 먼저 넣을 일과 남는 시간에로 나누세요.', ['먼저 넣을 일', '남는 시간에'], pickCards(EXAM, ['e1', 'e2', 'e4', 'e6']), { title: '시험 주간 방과 후 240분' }),
              null, { conclude: '꼭 할 일을 먼저 넣고 남는 시간 안에서 여가 화면을 정하면, 잠들기 전에 몰아 쓰지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '평일과 시험 주간의 시간 예산을 견주어 써요(분).', columns: ['무엇', '평일', '시험 주간'], cells: [['꼭 할 일 합계', '', ''], ['남는 시간', '', ''], ['여가 화면', '', '']], answer: '210·240, 30·0, 30·시험 끝난 날로 옮김' }],
          easy: [{ type: 'choice', prompt: '먼저 넣을 일에 ○ 해요.', options: ['과제 60분', '숏폼 몰아 보기 90분'], answer: '과제 60분' }] },
        notes: '경제 교구는 돈(원)만 세므로, 여기서는 돈 대신 시간 블록 카드를 칸에 나누는 판으로 쓴다(분 합계는 교구가 세지 않음 — 교사가 함께 센다). 240분과 블록 시간은 가상 학생의 값이다.',
      }),
      M('activity.rule-write', {
        title: '민재의 규칙 세 개', method: '나의 규칙 세 개 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '규칙 두 개만 \'~하면 ~한다\' 틀로 쓰고(셋째 칸은 둘 중 하나 다듬기), 기준 2개(조건이 분명한가·잴 수 있는가)로 점검한다.', base: '규칙 세 개와 어겼을 때 다시 시작하는 방법을 쓰고 기준 4개로 점검한다.', challenge: '셋째 규칙을 가족과 함께 지킬 규칙으로 쓰고, 기준 4개에 \'함께 지킬 사람이 드러난다\'를 더해 점검한다.' },
        activity: {
          title: '민재의 규칙 세 개', tool: 'rubric-writing',
          teacher: '"\'폰 하루 1시간\'을 \'~하면 ~한다\' 꼴로 바꾸면 어떻게 될까요?" 민재의 막대그래프(잠들기 전·저녁 식사 뒤)를 다시 띄우고, 그 시간대에 맞는 규칙을 쓰게 한다. "규칙을 한 번 어기면 끝"이라는 학생에게 "어긴 다음 날 다시 시작하는 방법이 규칙 안에 있다면 어떨까요?"라고 되묻는다. 판에는 가상 학생 민재의 규칙을 쓰고, 내 규칙은 활동지에 혼자 써 본다고 알린다(활동지는 걷지 않아도 된다).',
          task: '가상 학생 민재의 문제 시간대에 맞는 규칙을 \'~하면 ~한다\' 꼴로 쓰고, 어겼을 때 다시 시작하는 방법까지 쓴 뒤 기준표로 고쳐요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('규칙 ①: 민재의 \'잠들기 전\' 시간대에 맞는 규칙을 \'~하면 ~한다\' 꼴로 쓰세요.',
              { topic: '규칙 ① — 민재가 잠들기 전에 폰을 70분 쓰는 문제에 맞는 규칙을 \'~하면 ~한다\' 꼴로 1~2문장 쓰세요.', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '민재의 규칙 ①', lines: 3, starter: '___하면 ___한다.' },
              ['조건(언제·어디서)이 분명하다', '지켰는지 잴 수 있다', '민재의 생활에 맞다', '어려울 때의 대비책이 있다'],
              { prompt: '규칙 ①: 틀을 따라 민재의 잠들기 전 규칙을 쓰세요.', crit: ['조건(언제·어디서)이 분명하다', '지켰는지 잴 수 있다'] }),
            RW('규칙 ②: 민재의 \'저녁 식사 뒤\' 시간대에 맞는 규칙을 쓰세요.',
              { topic: '규칙 ② — 민재가 저녁 식사 뒤에 폰을 50분 쓰는 문제에 맞는 규칙을 \'~하면 ~한다\' 꼴로 1~2문장 쓰세요.', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '민재의 규칙 ②', lines: 3, starter: '___하면 ___한다.' },
              ['조건(언제·어디서)이 분명하다', '지켰는지 잴 수 있다', '민재의 생활에 맞다', '어려울 때의 대비책이 있다'],
              { prompt: '규칙 ②: 틀을 따라 민재의 저녁 식사 뒤 규칙을 쓰세요.', crit: ['조건(언제·어디서)이 분명하다', '지켰는지 잴 수 있다'] }),
            RW('규칙 ③: 민재의 공부 시간에 맞는 규칙을 쓰세요.',
              { topic: '규칙 ③ — 민재가 숙제를 할 때 알림 때문에 자꾸 폰을 보는 문제에 맞는 규칙을 \'~하면 ~한다\' 꼴로 1~2문장 쓰세요.', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '민재의 규칙 ③', lines: 3, starter: '___하면 ___한다.' },
              ['조건(언제·어디서)이 분명하다', '지켰는지 잴 수 있다', '민재의 생활에 맞다', '어려울 때의 대비책이 있다'],
              { prompt: '앞의 규칙 두 개 가운데 하나를 골라 조건을 더 분명하게 다듬어 쓰세요.', toolOptions: { topic: '다듬기 — 규칙 ①·② 가운데 하나를 골라 조건(언제·어디서)을 더 분명하게 다듬어 다시 쓰세요.' }, crit: ['조건(언제·어디서)이 분명하다', '지켰는지 잴 수 있다'] },
              { prompt: '규칙 ③: 민재가 가족과 함께 지킬 규칙을 쓰세요.', toolOptions: { topic: '규칙 ③ — 민재가 가족과 함께 지킬 규칙(예: 저녁 식탁)을 \'~하면 ~한다\' 꼴로 1~2문장 쓰세요.' }, crit: ['조건(언제·어디서)이 분명하다', '지켰는지 잴 수 있다', '민재의 생활에 맞다', '어려울 때의 대비책이 있다', '함께 지킬 사람이 드러난다'] }),
            RW('규칙을 어겼을 때 민재가 다시 시작하는 방법을 쓰세요.',
              { topic: '다시 시작하기 — 민재가 규칙을 하루 어겼을 때 다음 날 다시 시작하는 방법을 2~3문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 3, title: '다시 시작하는 방법', lines: 4 },
              ['어긴 까닭을 돌아보는 방법이 있다', '다음 날 할 행동이 구체적이다', '자신을 탓하는 말이 없다'],
              { prompt: '틀을 따라 민재가 다시 시작하는 방법을 쓰세요.', toolOptions: { starter: '규칙을 어긴 날에는 ___을 적어 본다. 다음 날에는 ___한다.' }, crit: ['어긴 까닭을 돌아보는 방법이 있다', '다음 날 할 행동이 구체적이다'] },
              null, { conclude: '좋은 규칙은 조건이 분명하고 잴 수 있으며 내 생활에 맞고, 어겼을 때 다시 시작하는 방법까지 담고 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 규칙을 \'~하면 ~한다\' 꼴로 써 봐요(혼자 보기, 걷지 않아요).', columns: ['조건(~하면)', '행동(~한다)'], cells: [['', ''], ['', ''], ['', '']], answer: '(예) 밤 10시가 되면 — 폰을 거실에서 충전한다' }] },
        notes: '판정되는 글은 가상 학생 민재의 규칙이다. 내 규칙은 활동지에 혼자 쓰게 하고 발표·제출을 요구하지 않는다(사용 시간은 쓰지 않아도 된다).',
      }),
      M('activity.track', {
        title: '두 주 실천 기록판 설계', method: '두 주 실천 기록판 설계', tool: 'timer', minutes: 16,
        levels: { easy: '민재의 첫 주 7칸 기록을 옮겨 적고, 둘째 주는 첫날 한 칸만 적는다. 점검 차례 카드 3장을 놓는다.', base: '민재의 두 주 14칸(지킨 규칙 수)을 옮겨 적고, 점검 차례 카드 4장을 놓은 뒤 중간 점검일을 짝과 정한다.', challenge: '점검 차례에 \'못 지킨 날 상황 적기\' 카드를 더해 다섯 단계로 놓는다.' },
        activity: {
          title: '두 주 실천 기록판 설계', tool: 'timer',
          teacher: '"민재가 지킨 규칙 수를 날마다 적으면 무엇이 보일까요?" 민재의 첫 주 기록을 함께 옮겨 적은 뒤 0개였던 5일째에 무슨 일이 있었을지 생각해 보게 한다. "한 번 0개면 실패한 기록판"이라는 학생에게 "6일째와 7일째 숫자를 보세요. 민재는 어떻게 했나요?"라고 되묻는다. 기록판 값은 가상 학생의 것이며, 학생 자신의 기록은 집에서 혼자 적어 보게 하고 걷지 않는다.',
          task: '가상 학생 민재의 두 주 실천 기록판에 날마다 지킨 규칙 수를 옮겨 적고, 점검하는 차례를 정해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '민재의 첫 주 기록(3·2·3·1·0·2·3개)을 1일부터 7일 칸에 옮겨 적으세요.', toolOptions: { title: '민재의 실천 기록판 1주', cards: [], fields: DAYS(1, 7), unit: '개' }, target: { records: WEEK1 }, difficulty: 0.2 },
            IT({ prompt: '민재의 둘째 주 기록(2·3·3·2·3·3·3개)을 8일부터 14일 칸에 옮겨 적으세요.', toolOptions: { title: '민재의 실천 기록판 2주', cards: [], fields: DAYS(8, 7), unit: '개' }, target: { records: WEEK2 }, difficulty: 0.25 },
              { prompt: '민재의 둘째 주 첫날(8일) 기록 2개를 칸에 적으세요.', toolOptions: { fields: DAYS(8, 1) }, target: { records: [2] } }),
            IT({ prompt: '기록판으로 점검하는 차례를 놓으세요.', toolOptions: { title: '점검하는 차례', cards: ['14일째 두 주 돌아보기', '날마다 잠들기 전 칸 채우기', '규칙 세 개를 기록판 위에 적기', '7일째 중간 점검하고 규칙 고치기'] }, target: { order: ['규칙 세 개를 기록판 위에 적기', '날마다 잠들기 전 칸 채우기', '7일째 중간 점검하고 규칙 고치기', '14일째 두 주 돌아보기'] } },
              { prompt: '기록판으로 점검하는 차례 세 단계를 놓으세요.', toolOptions: { cards: ['14일째 두 주 돌아보기', '날마다 잠들기 전 칸 채우기', '규칙 세 개를 기록판 위에 적기'] }, target: { order: ['규칙 세 개를 기록판 위에 적기', '날마다 잠들기 전 칸 채우기', '14일째 두 주 돌아보기'] } },
              { prompt: '못 지킨 날 상황 적기까지 넣어 점검 차례 다섯 단계를 놓으세요.', toolOptions: { cards: ['14일째 두 주 돌아보기', '못 지킨 날엔 그날 상황 적기', '날마다 잠들기 전 칸 채우기', '규칙 세 개를 기록판 위에 적기', '7일째 중간 점검하고 규칙 고치기'] }, target: { order: ['규칙 세 개를 기록판 위에 적기', '날마다 잠들기 전 칸 채우기', '못 지킨 날엔 그날 상황 적기', '7일째 중간 점검하고 규칙 고치기', '14일째 두 주 돌아보기'] } }),
            { prompt: '민재의 중간 점검일을 언제로 정할지, 그날 무엇을 볼지 짝과 정해요.', free: true, toolOptions: { title: '중간 점검일 정하기', cards: [], doneLabel: '짝과 중간 점검일을 정했어요' },
              conclude: '기록판은 잘 지켰는지 벌주는 표가 아니라, 어느 날 왜 흔들렸는지 찾아 규칙을 고치는 표예요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 주 기록판을 설계해 봐요(집에서 혼자 채워요).', columns: ['날', '지킨 규칙 수', '흔들린 상황'], cells: [['1일', '', ''], ['2일', '', ''], ['3일', '', ''], ['7일(중간 점검)', '', '']], answer: '(설계 활동 — 정답 없음)' }] },
        notes: '기록판 값(지킨 규칙 수)은 가상 학생 민재의 기록이다. 학생 자신의 기록은 걷거나 채점하지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.rule-blank', {
        title: '규칙 문장 빈칸 채우기', method: '규칙 문장 조건 빈칸 채우기', tool: 'wordcards', minutes: 7,
        levels: { easy: '\'언제\' 빈칸 1개만 채운다.', base: '\'언제·어디서·행동\' 빈칸 3개를 채워 규칙 문장 하나를 완성한다.', challenge: '빈칸 3개에 예외 문장 빈칸 1개를 더 채운다.' },
        wrap: {
          teacher: '"오늘 만든 규칙을 한 문장으로 말하면 어떻게 될까요?" 낱말 카드를 넣어 규칙 문장을 완성한 뒤 소리 내어 읽게 한다. "\'아무 때나\'를 넣어도 되나요?"라는 질문에는 "\'아무 때나\'를 넣으면 조건이 남을까요?"라고 되묻는다. 판의 문장은 민재의 규칙이고, 내 규칙은 활동지에 혼자 쓴다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'wordcards', options: FB('', [['언제: ___에는', '밤 10시 이후'], ['어디서: ___에서', '거실'], ['행동: 폰을 ___한다', '충전']], ['아무 때나', '침대 위', '계속 사용']).toolOptions,
              prompt: '민재의 규칙 문장 빈칸 세 개에 낱말 카드를 넣어요.', target: FB('', [['', ''], ['', ''], ['', '']]).target, difficulty: 0.2 },
            Object.assign(FB('민재의 규칙 문장 \'언제\' 빈칸에 낱말 카드를 넣어요.', [['언제: ___에는', '밤 10시 이후']], ['아무 때나'])),
            { prompt: '규칙 문장 빈칸 세 개와 예외 문장 빈칸을 채워요.', toolOptions: FB('', [['언제: ___에는', '밤 10시 이후'], ['어디서: ___에서', '거실'], ['행동: 폰을 ___한다', '충전'], ['예외: ___는 보호자께 말하고 쓴다', '급한 연락']], ['아무 때나', '침대 위', '계속 사용']).toolOptions,
              target: FB('', [['', ''], ['', ''], ['', ''], ['', '']]).target }),
            { type: 'choice', prompt: '"한 번 어기면 규칙은 끝난다"는 생각을 고친 말로 가장 알맞은 것은?', options: ['처음부터 규칙을 안 세우는 게 낫다', '어긴 까닭을 적고 다음 날 다시 시작한다', '더 엄격한 규칙으로 바꾼다'], answer: 1, difficulty: 0.2, explain: '어긴 날의 까닭을 찾으면 규칙을 고쳐 다시 시작할 수 있어요.' },
            { type: 'short', prompt: '오늘 배운 \'조건-행동\' 꼴로 규칙 문장 하나를 써요(내 규칙이어도, 민재의 규칙이어도 돼요).' },
          ],
        },
        worksheet: {
          title: '규칙 문장 완성하기',
          items: [
            { type: 'blank', prompt: '빈칸을 채워 규칙 문장을 완성해요.', text: '(  ___  )에는 (  ___  )에서 폰을 (  ___  )한다.', answer: '(예) 밤 10시 이후, 거실, 충전' },
            { type: 'short', prompt: '내 규칙 문장 하나를 써요(혼자 보기, 걷지 않아요).' },
          ],
          easy: { note: '빈칸 하나만 채워도 돼요.', items: [{ type: 'choice', prompt: '\'언제\' 빈칸에 알맞은 말에 ○ 해요.', options: ['밤 10시 이후', '아무 때나'], answer: '밤 10시 이후' }] },
        },
      }),
      M('wrap.backup-map', {
        title: '규칙이 흔들릴 때 대비책', method: '규칙이 흔들릴 때 대비책 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '흔들리는 상황 가지 2개에 대비책 카드를 하나씩 붙인다.', base: '가지 3개(단체방 시끌·시험 끝남·심심함)에 대비책을 하나씩 붙이고 함정 카드는 남긴다.', challenge: '가지마다 대비책을 둘씩 붙인다(함정 카드 두 장).' },
        wrap: {
          teacher: '"규칙이 가장 흔들리는 때는 언제일까요? 그때 무엇을 할지 미리 정해 두면 어떨까요?" 가지마다 \'만약 ~하면 ~하겠다\' 카드를 붙인 뒤, 가장 쓸모 있을 대비책을 한 사람씩 말하게 한다. "그때 가서 참으면 된다"는 말에는 "참는 것과 미리 정한 행동을 하는 것 가운데 무엇이 쉬울까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '규칙이 흔들릴 때', slots: ['단체방이 시끌할 때', '시험이 끝났을 때', '심심할 때'], cards: [
              { id: 'a1', text: '만약 밤에 단체방이 울리면 "내일 볼게" 하겠다' }, { id: 'b1', text: '만약 시험이 끝나면 볼 시간을 먼저 정하겠다' },
              { id: 'c1', text: '만약 심심하면 산책을 10분 하겠다' }, { id: 't1', text: '만약 흔들리면 그날은 규칙을 쉰다' }] },
              prompt: '흔들리는 상황마다 대비책 카드를 붙이고 함정 카드는 남겨요.', target: { sort: { '단체방이 시끌할 때': ['a1'], '시험이 끝났을 때': ['b1'], '심심할 때': ['c1'] } }, difficulty: 0.2 },
            { prompt: '흔들리는 상황 두 개에 대비책 카드를 붙여요.', toolOptions: { slots: ['단체방이 시끌할 때', '심심할 때'], cards: [{ id: 'a1', text: '만약 밤에 단체방이 울리면 "내일 볼게" 하겠다' }, { id: 'c1', text: '만약 심심하면 산책을 10분 하겠다' }] }, target: { sort: { '단체방이 시끌할 때': ['a1'], '심심할 때': ['c1'] } } },
            { prompt: '흔들리는 상황마다 대비책을 두 개씩 붙이고 함정 카드는 남겨요.', toolOptions: { cards: [
              { id: 'a1', text: '만약 밤에 단체방이 울리면 "내일 볼게" 하겠다' }, { id: 'a2', text: '만약 대화가 길어지면 알림을 꺼 두겠다' },
              { id: 'b1', text: '만약 시험이 끝나면 볼 시간을 먼저 정하겠다' }, { id: 'b2', text: '만약 시험이 끝나면 친구와 밖에서 놀겠다' },
              { id: 'c1', text: '만약 심심하면 산책을 10분 하겠다' }, { id: 'c2', text: '만약 심심하면 미뤄 둔 책을 펴겠다' },
              { id: 't1', text: '만약 흔들리면 그날은 규칙을 쉰다' }, { id: 't2', text: '만약 심심하면 폰을 아무 때나 본다' }] },
              target: { sort: { '단체방이 시끌할 때': ['a1', 'a2'], '시험이 끝났을 때': ['b1', 'b2'], '심심할 때': ['c1', 'c2'] } } }),
            { type: 'choice', prompt: '대비책을 \'만약 ~하면 ~하겠다\' 꼴로 미리 정해 두는 까닭으로 가장 알맞은 것은?', options: ['흔들리는 순간에 무엇을 할지 바로 떠올릴 수 있어서', '규칙을 어겨도 괜찮아서', '보호자에게 보여 주기 좋아서'], answer: 0, difficulty: 0.2, explain: '미리 정한 행동은 흔들리는 순간에 고민 없이 꺼내 쓸 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '규칙이 흔들릴 때',
          items: [
            { type: 'table', prompt: '흔들리는 상황마다 \'만약 ~하면 ~하겠다\' 대비책을 써요.', columns: ['상황', '대비책'], cells: [['단체방이 시끌할 때', ''], ['시험이 끝났을 때', ''], ['심심할 때', '']], answer: '(예) "내일 볼게" 하고 알림 끄기, 볼 시간 먼저 정하기, 산책하기' },
            { type: 'short', prompt: '내 규칙이 흔들릴 만한 상황 하나와 대비책을 써요(혼자 보기).' },
          ],
          easy: { note: '상황 두 개만 써도 돼요.', items: [{ type: 'choice', prompt: '심심할 때의 대비책에 ○ 해요.', options: ['산책을 10분 한다', '폰을 아무 때나 본다'], answer: '산책을 10분 한다' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 확률형 보상 설계 분석하기 (saf-cyber.m.loot-reward) ====
  // 뽑기는 위험 신호로만 다룬다 — 얻는 법·확률 계산 요령·특정 게임 이름은 쓰지 않는다. 값은 모두 가상 게임·가상 용돈이다.
  {
    const M = MK('loot-reward', [8]);
    const DRAW = [
      { id: 'd1', text: '원하는 캐릭터가 안 나온다', motif: 'cloud' }, { id: 'd2', text: '"다음엔 나올 것 같아" 또 누른다', motif: 'star' },
      { id: 'd3', text: '"쓴 게 아까워" 또 결제한다', motif: 'leaf' }, { id: 'd4', text: '"오늘만 확률 UP" 문구를 본다', motif: 'sun' },
      { id: 'd5', text: '한 달 용돈이 다 떨어진다', motif: 'moon' }];
    const WORDS = [['"오늘만!"', '놓치면 아깝다'], ['"확률 UP"', '이번엔 나올 것 같다'], ['"연속 출석 7일째 보상"', '끊으면 손해 같다'], ['"남은 시간 02:59"', '서둘러야 할 것 같다']];
    const PROB = [['일반', 80], ['희귀', 19], ['전설', 1]];
    const SPEND = [
      { id: 'bus', text: '교통비', price: 10000 }, { id: 'snack', text: '간식', price: 4000 }, { id: 'book', text: '읽고 싶은 책', price: 12000 },
      { id: 'gift', text: '친구 생일 선물', price: 8000 }, { id: 'gacha', text: '뽑기 10회 묶음', price: 25000 }, { id: 'save', text: '저금', price: 5000 }];
    const LAST = { text: '한정 이벤트 마지막 밤 11시, 지후가 하는 가상 게임에 "3시간 뒤 종료, 한정 캐릭터 확률 UP" 창이 뜬다. 폰에는 보호자 결제 수단이 연결되어 있다.', ask: '지후는 어떻게 할까?', motif: 'moon', choices: [
      { id: 'pay', text: '"한 번만" 하며 몰래 결제한다', result: '원하는 캐릭터가 안 나온다.', impact: [{ who: '보호자', text: '모르는 결제가 생긴다', tone: -1 }], why: '보호자 결제 수단은 보호자와 상의 없이 쓰지 않아요.', end: '몰래 결제했어요.',
        next: { text: '"이번엔 나올 것 같아" 하는 마음이 든다. 이벤트는 2시간 남았다.', choices: [
          { id: 'again', text: '한 번 더 결제한다', result: '또 안 나오고 결제가 늘어난다.', impact: [{ who: '지후', text: '쓴 돈이 불어난다', tone: -1 }], why: '앞에서 안 나왔다고 다음에 나올 차례가 되지는 않아요.', end: '결제가 계속 늘었어요.',
            next: { text: '한 주 뒤, 보호자 휴대전화로 결제 문자가 여러 통 온다.', choices: [
              { id: 'hide', text: '모른 척한다', result: '보호자가 결제 내역을 보고 크게 놀란다.', impact: [{ who: '가족', text: '믿음이 흔들린다', tone: -1 }], why: '숨기면 되돌릴 기회도 줄어요.' },
              { id: 'confess', text: '먼저 말하고 함께 방법을 찾는다', result: '보호자와 결제한 곳에 문의하기로 한다.', impact: [{ who: '가족', text: '함께 해결한다', tone: 1 }] }] } },
          { id: 'stopnow', text: '창을 닫고 바로 보호자에게 말한다', result: '보호자가 놀랐지만 함께 결제 내역을 본다.', impact: [{ who: '가족', text: '빨리 알게 된다', tone: 1 }], end: '멈추고 바로 알렸어요.',
            next: { text: '보호자가 "다음엔 어떻게 할래?"라고 묻는다.', choices: [
              { id: 'lock', text: '결제 전에 묻기와 결제 잠금을 함께 정한다', result: '가족 결제 약속이 생긴다.', impact: [{ who: '지후', text: '다시 흔들리지 않게 된다', tone: 1 }] },
              { id: 'sulk', text: '"다들 하는데"라며 화를 낸다', result: '대화가 끊긴다.', impact: [{ who: '가족', text: '서로 속상하다', tone: -1 }], why: '약속을 함께 정해야 다음에도 지킬 수 있어요.' }] } }] } },
      { id: 'ask', text: '보호자에게 먼저 결제해도 되는지 묻는다', result: '보호자가 "이번 달 용돈 안에서만"이라고 답한다.', impact: [{ who: '가족', text: '서로 알고 정한다', tone: 1 }], end: '먼저 물어봤어요.',
        next: { text: '보호자와 정한 금액을 다 썼는데 캐릭터가 안 나왔다. 이벤트는 1시간 남았다.', choices: [
          { id: 'more', text: '"조금만 더"라며 다시 조른다', result: '보호자와 다툼이 생긴다.', impact: [{ who: '가족', text: '약속이 흔들린다', tone: -1 }], why: '정한 금액에 닿은 순간이 멈출 신호예요.', end: '약속한 금액을 넘으려 했어요.',
            next: { text: '다음 날 지후가 어젯밤 일을 돌아본다.', choices: [
              { id: 'sorry', text: '보호자에게 사과하고 다음 달 금액을 다시 정한다', result: '가족 약속이 다시 선다.', impact: [{ who: '가족', text: '다시 믿는다', tone: 1 }] },
              { id: 'grudge', text: '다음 이벤트 때는 몰래 하기로 마음먹는다', result: '같은 일이 더 크게 되풀이될 수 있다.', impact: [{ who: '지후', text: '위험이 커진다', tone: -1 }], why: '몰래 하는 결제는 멈출 사람이 없어요.' }] } },
          { id: 'wait', text: '정한 금액에서 멈추고 창을 닫는다', result: '아쉽지만 잠자리에 든다.', impact: [{ who: '지후', text: '약속을 지킨다', tone: 1 }], end: '정한 금액에서 멈췄어요.',
            next: { text: '한 주 뒤, 친구가 그 캐릭터를 얻었다고 자랑한다.', choices: [
              { id: 'jealous', text: '다음 이벤트에는 용돈을 다 쓰기로 한다', result: '다음 달 교통비가 걱정된다.', impact: [{ who: '지후', text: '다음 달이 빠듯하다', tone: -1 }], why: '남의 결과가 내 예산을 정하지 않아요.' },
              { id: 'talk', text: '"난 정한 만큼만 했어"라고 말하고 넘긴다', result: '아쉬움이 금방 지나간다.', impact: [{ who: '지후', text: '예산을 지킨다', tone: 1 }] }] } }] } },
      { id: 'skip', text: '이벤트 창을 닫고 알림을 끈다', result: '잠깐 아쉽지만 잠자리에 든다.', impact: [{ who: '지후', text: '용돈을 지킨다', tone: 1 }], end: '이벤트를 넘겼어요.',
        next: { text: '다음 날 아침 "어제 끝난 이벤트, 오늘 단 하루 복각!" 알림이 온다.', choices: [
          { id: 'fomo', text: '이번엔 놓치지 않으려 바로 결제한다', result: '보호자와 상의 없이 결제가 생긴다.', impact: [{ who: '보호자', text: '모르는 결제가 생긴다', tone: -1 }], why: '\'단 하루\'는 서두르게 만드는 문구예요.', end: '서둘러 결제했어요.',
            next: { text: '그날 저녁 보호자가 결제 문자를 보고 묻는다.', choices: [
              { id: 'lie', text: '"잘못 눌렀어"라고 둘러댄다', result: '믿음이 흔들린다.', impact: [{ who: '가족', text: '믿음이 흔들린다', tone: -1 }], why: '사실대로 말해야 함께 되돌릴 방법을 찾아요.' },
              { id: 'truth', text: '사실대로 말하고 결제한 곳에 함께 문의한다', result: '보호자와 다음 약속을 정한다.', impact: [{ who: '가족', text: '함께 해결한다', tone: 1 }] }] } },
          { id: 'calm', text: '"또 이러네" 하고 알림을 다시 끈다', result: '아무 일 없이 하루를 보낸다.', impact: [{ who: '지후', text: '흔들리지 않는다', tone: 1 }], end: '문구에 흔들리지 않았어요.',
            next: { text: '친구가 "너도 이번에 뽑아?"라고 묻는다.', choices: [
              { id: 'share', text: '"그 문구 서두르게 하려는 거래"라고 말해 준다', result: '친구도 한 번 더 생각해 본다.', impact: [{ who: '친구', text: '멈출 틈을 얻는다', tone: 1 }] },
              { id: 'follow', text: '친구 따라 결제하기로 한다', result: '어제 지킨 용돈이 흔들린다.', impact: [{ who: '지후', text: '계획이 무너진다', tone: -1 }], why: '친구가 한다는 것은 결제 기준이 아니에요.' }] } }] } }] };
    const LAST_R = [{ id: 'r1', text: '보호자 결제 수단은 상의하고 쓴다' }, { id: 'r2', text: '\'오늘만·남은 시간\'은 서두르게 만드는 문구다' },
      { id: 'r3', text: '이번엔 안 나왔으니 다음엔 나올 차례다', why: '매번 확률이 같다면 앞의 결과가 다음 뽑기를 바꾸지 않아요.' },
      { id: 'r4', text: '적은 금액은 여러 번 써도 괜찮다', why: '적은 금액도 되풀이하면 한 달 용돈을 넘을 수 있어요.' }];
    const UNDO = { reasons: [{ id: 'r5', text: '되돌리려면 숨기지 말고 보호자와 상의한다' }, { id: 'r6', text: '보호자와 함께 결제한 곳에 환불을 문의한다' }], ok: ['r5', 'r6'] };
    const AFTER = { text: '한 주 뒤, 지후 보호자 휴대전화로 지후가 몰래 한 결제 문자 세 통이 왔다. 보호자는 아직 문자를 못 봤다.', ask: '지후는 어떻게 할까?', motif: 'house', choices: [
      { id: 'delete', text: '보호자 폰에서 문자를 몰래 지운다', result: '한 달 뒤 카드 내역에서 결제가 드러난다.', impact: [{ who: '가족', text: '믿음이 크게 흔들린다', tone: -1 }], why: '숨기면 되돌릴 수 있는 시간이 지나가요.', ending: '숨긴 결제는 결국 드러나고 되돌리기도 어려워져요.' },
      { id: 'tell', text: '보호자에게 먼저 사실대로 말한다', result: '보호자가 놀랐지만 함께 결제 내역을 본다.', impact: [{ who: '가족', text: '함께 해결한다', tone: 1 }], end: '먼저 말했어요.',
        next: { text: '보호자가 "이제 어떻게 하면 좋을까?"라고 묻는다.', choices: [
          { id: 'inquire', text: '보호자와 함께 결제한 곳에 환불을 문의한다', result: '문의 결과를 기다리며 내역을 정리한다.', impact: [{ who: '가족', text: '되돌릴 길을 찾는다', tone: 1 }], end: '함께 문의했어요.',
            next: { text: '문의를 마친 뒤, 다음 이벤트가 다음 주에 열린다는 알림이 온다.', choices: [
              { id: 'rule', text: '결제 잠금과 \'결제 전 하루 미루기\'를 가족과 정한다', result: '다음 이벤트 때 흔들리지 않을 장치가 생긴다.', impact: [{ who: '지후', text: '다시 같은 일을 막는다', tone: 1 }] },
              { id: 'alone', text: '"이번엔 혼자 조심할게"라고만 한다', result: '장치 없이 다음 이벤트를 맞는다.', impact: [{ who: '지후', text: '다시 흔들릴 수 있다', tone: -1 }], why: '마음먹기만으로는 같은 문구 앞에서 다시 흔들려요.' }] } },
          { id: 'blame', text: '"게임이 그렇게 만들었어"라며 넘긴다', result: '무엇을 할지 정하지 못한다.', impact: [{ who: '가족', text: '해결이 늦어진다', tone: -1 }], why: '설계 장치를 아는 것과 내가 할 일을 정하는 것은 함께 해야 해요.' }] } },
      { id: 'friend', text: '친구에게 돈을 빌려 몰래 메우려 한다', result: '친구에게 갚을 돈까지 생긴다.', impact: [{ who: '친구', text: '돈 문제에 끌려 들어온다', tone: -1 }], why: '돈을 빌려 숨기면 문제가 더 커져요.', ending: '빌린 돈으로 숨기면 문제가 둘로 늘어나요.' }] };
    const AFTER_R = [{ id: 'r1', text: '숨기지 말고 먼저 보호자에게 알린다' }, { id: 'r2', text: '보호자와 함께 결제한 곳에 문의한다' },
      { id: 'r3', text: '들키지만 않으면 괜찮다', why: '결제 내역은 남아요. 숨길수록 되돌리기 어려워요.' },
      { id: 'r4', text: '친구 돈으로 메우면 해결된다', why: '빌린 돈은 또 다른 갚을 일이 돼요.' }];
    const AFTER_MORE = { reasons: [{ id: 'r5', text: '다음에 흔들리지 않을 장치(잠금·하루 미루기)를 정한다' }], ok: ['r5'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.one-more-draw', {
        title: '"한 번만 더 뽑기" 다섯 장면', method: "'한 번만 더 뽑기' 사례 읽기", tool: 'story', minutes: 6,
        levels: { easy: '장면 3장(처음·흔들린 장면 하나·끝)만 보이고 흔들린 장면을 고른다.', base: '장면 5장을 넘겨 보며 판단이 흔들린 장면을 고른다.', challenge: '흔들린 장면마다 작동한 마음 이름(이번엔 나올 것 같다·쓴 게 아까움·놓치면 아깝다)을 붙여 말한다.' },
        intro: {
          teacher: '"지후는 처음부터 한 달 용돈을 다 쓸 생각이었을까요?" 가상 학생 지후가 가상 게임에서 원하는 캐릭터를 얻으려 \'한 번만 더\'를 되풀이하다 용돈을 다 쓴 다섯 장면을 넘겨 보이고, 시연 단추로 흔들린 장면 카드가 바구니에 담기는 모습을 보인다. "지후가 참을성이 없어서"라는 말이 나오면 "\'오늘만 확률 UP\' 문구가 없었어도 지후가 그 밤에 결제했을까요?"라고 되묻는다. 오늘은 뽑는 법이 아니라 사람을 붙잡는 설계를 분석한다고 밝히고, 학생이 하는 게임 이름은 묻지 않는다.',
          student: '지후의 다섯 장면을 보고 판단이 흔들린 장면을 골라요. 그 장면에서 지후를 흔든 마음이 무엇이었는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '판단이 흔들린 장면', title: '지후의 한 달', cards: DRAW, shuffle: false }, sequence: [{ pick: ['d2', 'd3'] }] },
          art: { draw: 'a paper-cut game screen with a glowing mystery capsule machine, a teenager holding an empty paper wallet and a calendar page torn to the end of the month', banner: '"한 번만 더"는 몇 번이었을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '지후와 게임은 가상이다. 뽑기 방법·확률 높이는 요령은 다루지 않는다. 학생에게 결제 경험이나 하는 게임을 묻지 않는다.',
      }),
      M('intro.screen-words', {
        title: '게임 화면 문구와 노리는 마음', method: '게임 화면 문구와 노리는 마음 잇기', tool: 'wordcards', minutes: 6,
        levels: { easy: '문구 2개를 마음과 잇는다.', base: '문구 4개를 마음과 잇는다.', challenge: '문구 하나를 이용자에게 정직한 말로 바꿔 써 짝에게 읽어 준다.' },
        intro: {
          teacher: '"\'남은 시간 02:59\'를 보면 어떤 마음이 들까요?" 가상 게임 화면 문구 카드를 띄우고, 시연 단추로 문구와 마음이 이어지는 모습을 보인다. "그냥 알려 주는 정보일 뿐"이라는 학생에게 "시간이 줄어드는 숫자를 크게 띄우는 까닭은 무엇일까요?"라고 되묻는다. 문구가 노리는 마음을 알아차리면 한 번 더 생각할 틈이 생긴다는 점을 짚는다.',
          student: '가상 게임 화면 문구 네 개가 이용자에게 어떤 마음을 만들려는지 짝과 이어 보고, 정직하게 바꿔 쓴다면 어떻게 쓸지 생각해요.',
          demo: { tool: 'wordcards', options: MB('', WORDS, [], { topic: '문구가 노리는 마음' }).toolOptions, sequence: [MB('', WORDS).target] },
          art: { draw: 'a paper-cut phone screen covered with bright paper banners reading today only and a countdown timer, a teenager tilting their head with a small thought bubble', banner: '이 문구는 어떤 마음을 노릴까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.prob-chart', {
        title: '가상 뽑기 확률 원그래프', method: '가상 뽑기 확률표 원그래프 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '조각 값(80%·19%·1%)이 보인 채로 읽고 고른다.', base: '조각 값을 읽어 세 질문에 답하고, \'100번 뽑으면 꼭 나온다\' 오개념을 바로잡는 보기를 고른다.', challenge: '값을 숨긴 그래프를 읽고(맞힌 뒤 보임), 마지막에 \'매번 1%\'의 뜻을 짝에게 자기 말로 설명한다.' },
        activity: {
          title: '가상 뽑기 확률 원그래프', tool: 'chart',
          teacher: '"전설 등급이 1%라면, 100번 뽑으면 꼭 한 번은 나올까요?" 가상 게임의 뽑기 확률 원그래프를 띄우고 조각을 하나씩 읽은 뒤 이 질문을 던진다. "1%니까 100번이면 나와요"라는 학생에게 "동전을 두 번 던지면 앞면이 꼭 한 번 나오나요?"라고 되묻는다. 이 가상 게임은 뽑을 때마다 확률이 똑같이 1%라는 조건을 먼저 밝히고, 확률을 높이는 요령이나 뽑는 방법은 다루지 않는다.',
          task: '가상 게임의 뽑기 확률 원그래프를 읽고, "100번 뽑으면 전설이 꼭 1번 나온다"는 말이 왜 틀렸는지 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true, showValues: false } },
          items: [
            { prompt: '가상 뽑기 원그래프에서 가장 자주 나오는 등급을 고르세요.', toolOptions: CH('circle', '가상 게임 뽑기 확률(가상 자료)', '%', PROB, { question: '가장 자주 나오는 등급은?', choices: PROB.map((d) => d[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '\'희귀\' 등급은 몇 %인지 그래프에서 읽어 쓰세요.', toolOptions: CH('circle', '가상 게임 뽑기 확률(가상 자료)', '%', PROB, { question: '희귀 등급은 몇 %인가요?' }), target: { value: 19 }, difficulty: 0.2 },
            { prompt: '뽑기 한 번에서 \'전설\'이 아닌 등급이 나올 확률은 모두 몇 %인지 쓰세요.', toolOptions: CH('circle', '가상 게임 뽑기 확률(가상 자료)', '%', PROB, { question: '전설이 아닌 등급은 모두 몇 %인가요?' }), target: { value: 99 }, difficulty: 0.25 },
            { prompt: '"100번 뽑으면 전설이 꼭 1번 나온다"는 말이 틀린 까닭을 고르세요.', toolOptions: CH('circle', '가상 게임 뽑기 확률(가상 자료)', '%', PROB, { question: '왜 틀린 말일까요?', choices: ['뽑을 때마다 1%로 같아서, 100번 해도 안 나올 수 있다', '100번 뽑으면 전설이 꼭 2번 나온다', '확률표 자체가 틀렸다'], why: ['', '매번 1%일 뿐, 몇 번 나온다고 정해지지 않아요.', '확률표가 맞아도 \'꼭 나온다\'는 말은 틀려요.'] }), target: { pick: 0 }, difficulty: 0.3 },
            IT({ prompt: '"이번에 안 나왔으니 다음엔 나올 차례다"는 생각을 고친 말을 고르세요.', toolOptions: CH('circle', '가상 게임 뽑기 확률(가상 자료)', '%', PROB, { question: '알맞게 고친 말은?', choices: ['앞에서 안 나와도 다음 뽑기도 1%다', '안 나올수록 다음엔 확률이 오른다', '열 번 안 나오면 꼭 나온다'] }), target: { pick: 0 }, difficulty: 0.3 },
              null, null, { conclude: '이 가상 게임에서 전설은 뽑을 때마다 1%예요. 앞의 결과는 다음 뽑기를 바꾸지 않고, 100번 뽑아도 꼭 나온다는 보장은 없어요.' }),
            IT({ prompt: '\'매번 1%\'가 무슨 뜻인지 짝에게 한 문장으로 설명해요.', free: true, toolOptions: CH('circle', '가상 게임 뽑기 확률(가상 자료)', '%', PROB, { question: '짝에게 설명해요' }) },
              null, { prompt: '\'매번 1%\'의 뜻과 "적은 금액은 여러 번 써도 괜찮다"가 위험한 까닭을 짝에게 자기 말로 설명해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"확률이 1%면 100번 뽑으면 반드시 나온다"는 친구에게 해 줄 말을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '맞는 말에 ○ 해요.', options: ['앞에서 안 나와도 다음 뽑기도 1%다', '100번 뽑으면 꼭 나온다'], answer: '앞에서 안 나와도 다음 뽑기도 1%다' }] },
        notes: '확률 값은 수업용 가상 게임의 것이며, 뽑을 때마다 확률이 같다는 조건으로 설명한다. 실제 게임 이름·확률·뽑는 요령은 다루지 않는다.',
      }),
      M('activity.spend-budget', {
        title: '한 달 용돈 40,000원 예산', method: '한 달 용돈 예산에서 뽑기 견주기', tool: 'economy', minutes: 16,
        levels: { easy: '물건 4개(교통비·간식·책·뽑기) 가운데 예산 안에서 고른다.', base: '물건 6개 가운데 교통비는 꼭 넣고 고르며, 뽑기를 넣은 안과 뺀 안을 차례로 짠다.', challenge: '합계가 맞힌 뒤에만 보이는 판에서 두 안을 짜고, 활동지에서 두 막대를 견주어 결정과 까닭을 쓴다.' },
        activity: {
          title: '한 달 용돈 40,000원 예산', tool: 'economy',
          teacher: '"\'뽑기 10회 묶음\'을 넣으면 예산 막대에서 무엇이 밀려날까요?" 가상 학생 지후의 한 달 용돈 40,000원(가상) 막대에 블록을 넣으며 막대가 어떻게 차는지 보게 한다. "뽑기 한 번은 얼마 안 하니 괜찮다"는 학생에게 "열 번 묶음이면 친구 생일 선물과 책을 합친 것보다 많은데도 괜찮을까요?"라고 되묻는다. 값은 수업용 가상 값이며, 학생 자신의 용돈은 묻지 않는다.',
          task: '지후의 한 달 용돈 40,000원(가상) 예산 막대에 쓸 곳을 넣어 보고, 뽑기가 다른 소비를 얼마나 밀어내는지 견주어요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '뽑기를 넣은 안을 짜요. 40,000원 안에서 교통비와 뽑기 10회 묶음을 꼭 넣고 고르세요.', toolOptions: { mode: 'budget', budget: 40000, items: SPEND, ask: '뽑기를 넣은 안' }, target: { budget: { must: ['bus', 'gacha'] } }, difficulty: 0.25 },
              { prompt: '40,000원 안에서 교통비와 뽑기를 꼭 넣고 고르세요.', toolOptions: { items: pickCards(SPEND, ['bus', 'snack', 'book', 'gacha']) } }),
            IT({ prompt: '뽑기를 뺀 안을 짜요. 40,000원 안에서 교통비는 꼭 넣고, 뽑기는 빼고 30,000원어치 넘게 고르세요.', toolOptions: { mode: 'budget', budget: 40000, items: SPEND, ask: '뽑기를 뺀 안' }, target: { budget: { must: ['bus'], not: ['gacha'], min: 30000 } }, difficulty: 0.3 },
              { prompt: '40,000원 안에서 교통비는 꼭 넣고, 뽑기는 빼고 20,000원어치 넘게 고르세요.', toolOptions: { items: pickCards(SPEND, ['bus', 'snack', 'book', 'gacha']) }, target: { budget: { must: ['bus'], not: ['gacha'], min: 20000 } } }),
            IT({ prompt: '보호자와 정한 이번 달 약속: 교통비·친구 생일 선물·저금은 꼭 넣고, 뽑기는 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 40000, items: SPEND, ask: '가족과 정한 약속' }, target: { budget: { must: ['bus', 'gift', 'save'], not: ['gacha'] } }, difficulty: 0.3 },
              { prompt: '보호자와 정한 약속: 교통비는 꼭 넣고, 뽑기는 빼고 고르세요.', toolOptions: { items: pickCards(SPEND, ['bus', 'snack', 'book', 'gacha']) }, target: { budget: { must: ['bus'], not: ['gacha'] } } },
              null, { conclude: '뽑기 10회 묶음 하나가 책과 선물, 저금 자리를 밀어내요. 결제 전에 예산 막대 전체를 먼저 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 안을 견주어 써요.', columns: ['안', '넣은 것', '빠진 것'], cells: [['뽑기를 넣은 안', '', ''], ['뽑기를 뺀 안', '', '']], answer: '(예) 교통비·뽑기·간식 / 책·선물·저금, 교통비·책·선물·간식 / 뽑기' }],
          easy: [{ type: 'choice', prompt: '뽑기 10회 묶음(25,000원)을 넣으면 함께 넣기 어려운 것에 ○ 해요.', options: ['읽고 싶은 책(12,000원)', '간식(4,000원)'], answer: '읽고 싶은 책(12,000원)' }] },
        notes: '용돈과 값은 모두 수업용 가상 값이다.',
      }),
      M('activity.last-day', {
        title: '한정 이벤트 마지막 밤 갈림길', method: '한정 이벤트 마지막 날 갈림길 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번을 골라 결과를 보고, 근거 카드는 고르지 않는다.', base: '갈림길 세 번을 골라 한 주 뒤 결제 문자·가족 대화 장면까지 가고 근거 카드를 고른다.', challenge: '되돌아가 다른 길도 끝까지 가 보고, 결과를 되돌릴 일(숨기지 않고 보호자와 상의·결제한 곳에 환불 문의) 근거까지 고른다.' },
        activity: {
          title: '한정 이벤트 마지막 밤 갈림길', tool: 'dilemma',
          teacher: '"보호자 결제 수단이 폰에 연결되어 있다는 것은 무엇을 뜻할까요?" 학생마다 한 길을 끝까지 가 본 뒤, 몰래 결제한 길과 먼저 물어본 길의 한 주 뒤 장면을 견주게 한다. "들키지만 않으면 된다"는 학생에게 "결제 문자는 누구 폰으로 갈까요? 숨길수록 되돌리기는 쉬워질까요, 어려워질까요?"라고 되묻는다. 둘째 장면은 이미 결제한 뒤 되돌리는 길을 찾는 장면이며, 결제 경험이 있는 학생을 짚어 말하게 하지 않는다.',
          task: '한정 이벤트 마지막 밤 장면에서 지후의 길을 골라 한 주 뒤까지 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '이벤트 마지막 밤이에요. 두 번 골라 결과를 보세요.', base: '이벤트 마지막 밤이에요. 세 번 골라 한 주 뒤까지 가고 근거를 고르세요.', challenge: '이벤트 마지막 밤이에요. 끝 장면 두 개 이상을 가 보고 되돌릴 일 근거까지 고르세요.' },
              '한정 이벤트 마지막 밤', LAST, [['ask', 'wait', 'talk'], ['skip', 'calm', 'share']], LAST_R, ['r1', 'r2'], Object.assign({ explore: 2 }, UNDO)),
            DIL({ easy: '몰래 한 결제 문자가 왔어요. 두 번 골라 결과를 보세요.', base: '몰래 한 결제 문자가 왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '몰래 한 결제 문자가 왔어요. 끝까지 가서 다음에 흔들리지 않을 장치 근거까지 고르세요.' },
              '한 주 뒤 결제 문자', AFTER, [['tell', 'inquire', 'rule']], AFTER_R, ['r1', 'r2'], AFTER_MORE,
              { conclude: '보호자 결제 수단은 상의하고 쓰고, 이미 결제했다면 숨기지 말고 보호자와 함께 결제한 곳에 문의해요.' }),
            { prompt: '마지막 밤 장면에서 내가 간 길과 다른 길의 한 주 뒤를 짝과 견주어 말해요.', free: true, toolOptions: { title: '한정 이벤트 마지막 밤', scene: cut(LAST, 3), reasons: [], compare: true } },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이미 몰래 결제했다면 가장 먼저 할 일과 그 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '보호자 결제 수단을 쓰기 전에 할 일에 ○ 해요.', options: ['보호자와 상의한다', '이벤트가 끝나기 전에 서두른다'], answer: '보호자와 상의한다' }] },
        notes: '결제·환불 절차의 세부(기간·조건)는 다루지 않고 \'보호자와 함께 결제한 곳에 문의\'까지만 말한다(사람 확인 목록).',
      }),
      M('activity.design-sort', {
        title: '보상 장치 작동 원리로 나누기', method: '보상 장치를 작동 원리로 분류하고 설명', tool: 'mindmap', minutes: 16,
        levels: { easy: '두 칸(변동 보상·놓치면 아까움)에 카드 4장을 나누고(놓으면 바로 맞는지 알려 줌), 원리 설명 짝짓기도 두 칸만 한다.', base: '네 칸에 카드 8장을 나누고 칸마다 작동 원리 근거 카드를 잇는다.', challenge: '마지막 문항에서 두 마음이 함께 작동하는 장치를 골라 담고, 왜 두 칸에 걸치는지 활동지에 설명한다.' },
        activity: {
          title: '보상 장치 작동 원리로 나누기', tool: 'mindmap',
          teacher: '"\'연속 출석 보상\'은 왜 하루도 빠지기 싫게 만들까요?" 카드를 칸에 놓을 때마다 그 장치가 어떤 마음을 이용하는지 근거를 말하게 한다. "보상을 주는 건 고마운 일"이라는 학생에게 "보상이 \'오늘 안 들어오면 사라진다\'로 바뀌면 그래도 선물일까요?"라고 되묻는다. 카드 한 장의 칸은 하나로 두고, 두 칸에 걸치는 장치는 마지막 문항에서 따로 다룬다.',
          task: '가상 게임의 보상 장치 카드를 작동 원리(변동 보상·놓치면 아까움·쓴 게 아까움·친구 압력) 칸에 나누고, 칸마다 근거를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('보상 장치 카드를 작동 원리 칸에 나누세요.', ['변동 보상', '놓치면 아까움', '쓴 게 아까움', '친구 압력'], [
              { id: 'c1', text: '뽑기', to: '변동 보상' }, { id: 'c2', text: '무엇이 들었는지 모르는 상자', to: '변동 보상' },
              { id: 'c3', text: '한정 판매 타이머', to: '놓치면 아까움' }, { id: 'c4', text: '오늘만 할인', to: '놓치면 아까움' },
              { id: 'c5', text: '여태 모은 아이템', to: '쓴 게 아까움' }, { id: 'c6', text: '연속 출석 보상', to: '쓴 게 아까움' },
              { id: 'c7', text: '친구 초대 보상', to: '친구 압력' }, { id: 'c8', text: '팀원이 다 산 꾸미기 아이템', to: '친구 압력' }], { topic: '보상 장치는 어떻게 붙잡나' }),
              SB('보상 장치 카드 4장을 두 칸에 나누세요.', ['변동 보상', '놓치면 아까움'], [
                { id: 'c1', text: '뽑기', to: '변동 보상' }, { id: 'c2', text: '무엇이 들었는지 모르는 상자', to: '변동 보상' },
                { id: 'c3', text: '한정 판매 타이머', to: '놓치면 아까움' }, { id: 'c4', text: '오늘만 할인', to: '놓치면 아까움' }], { topic: '보상 장치는 어떻게 붙잡나' })),
            IT(MB('작동 원리마다 알맞은 근거를 이어 보세요.', [['변동 보상', '언제 나올지 몰라 계속 누르게 한다'], ['놓치면 아까움', '시간이 끝나면 사라진다고 서두르게 한다'], ['쓴 게 아까움', '여태 쌓은 것을 버리기 싫게 한다'], ['친구 압력', '나만 빠지기 싫게 한다']], ['보상은 늘 이용자를 위한 선물이다'], { topic: '왜 붙잡힐까?' }),
              MB('작동 원리 두 개에 알맞은 근거를 이어 보세요.', [['변동 보상', '언제 나올지 몰라 계속 누르게 한다'], ['놓치면 아까움', '시간이 끝나면 사라진다고 서두르게 한다']], [], { topic: '왜 붙잡힐까?' })),
            IT(PB('두 마음이 함께 작동하는 장치만 골라 담으세요.', '두 마음이 겹치는 장치', [
              { id: 'm1', text: '오늘만 열리는 한정 뽑기', ok: true }, { id: 'm2', text: '친구와 함께 해야 받는 연속 출석 보상', ok: true },
              { id: 'm3', text: '한 번 사면 끝나는 게임 본편' }, { id: 'm4', text: '언제든 다시 볼 수 있는 설명서' }], { topic: '겹치는 장치' }),
              PB('두 마음이 함께 작동하는 장치 하나를 골라 담으세요.', '두 마음이 겹치는 장치', [
                { id: 'm1', text: '오늘만 열리는 한정 뽑기', ok: true }, { id: 'm4', text: '언제든 다시 볼 수 있는 설명서' }], { topic: '겹치는 장치' }),
              PB('두 마음이 함께 작동하는 장치만 골라 담으세요(함정 카드가 더 있어요).', '두 마음이 겹치는 장치', [
                { id: 'm1', text: '오늘만 열리는 한정 뽑기', ok: true }, { id: 'm2', text: '친구와 함께 해야 받는 연속 출석 보상', ok: true }, { id: 'm5', text: '모은 아이템이 곧 사라진다는 알림', ok: true },
                { id: 'm3', text: '한 번 사면 끝나는 게임 본편' }, { id: 'm4', text: '언제든 다시 볼 수 있는 설명서' }, { id: 'm6', text: '쉬는 시간을 알려 주는 알림' }], { topic: '겹치는 장치' }),
              { conclude: '확률형·시간 한정·연속 보상은 각각 다른 마음을 이용하고, 여러 장치가 겹치면 더 세게 붙잡아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'오늘만 열리는 한정 뽑기\'가 두 칸에 걸치는 까닭을 두 마음의 이름을 넣어 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '\'변동 보상\' 장치에 ○ 해요.', options: ['뽑기', '한정 판매 타이머'], answer: '뽑기' }] },
      }),

      // ---- 정리 ----
      M('wrap.pay-check', {
        title: '결제 전 점검표', method: '결제 전 점검표 만들기', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 3개 가운데 결제 전에 꼭 볼 항목을 표시한다.', base: '점검 항목 5개 가운데 꼭 볼 항목만 표시한다(함정 항목은 남긴다).', challenge: '표시한 뒤 나만의 점검 항목 하나를 직접 더해 쓴다.' },
        wrap: {
          teacher: '"결제 버튼을 누르기 전에 딱 네 가지만 확인한다면 무엇일까요?" 점검표를 함께 읽고, 결제 전 기준이 될 항목만 표시하게 한다. "남은 시간이 얼마 안 남았으면 빨리 사야 한다"는 학생에게 "그 항목은 기준일까요, 서두르게 하는 문구일까요?"라고 되묻는다. 학생 자신의 결제 경험은 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: CL('', '결제 전 점검', [
              { id: 'p1', text: '확률 표시를 읽었다', ok: true }, { id: 'p2', text: '보호자와 상의했다', ok: true }, { id: 'p3', text: '이번 달 예산 안이다', ok: true },
              { id: 'p4', text: '하루 지나도 사고 싶다', ok: true }, { id: 'p5', text: '남은 시간이 얼마 안 남았다' }]).toolOptions,
              prompt: '결제 전에 꼭 볼 항목만 표시해요.', target: { checklist: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.2 },
            { prompt: '결제 전에 꼭 볼 항목만 표시해요(세 항목).', toolOptions: CL('', '결제 전 점검', [{ id: 'p2', text: '보호자와 상의했다', ok: true }, { id: 'p3', text: '이번 달 예산 안이다', ok: true }, { id: 'p5', text: '남은 시간이 얼마 안 남았다' }]).toolOptions, target: { checklist: ['p2', 'p3'] } },
            { prompt: '결제 전에 꼭 볼 항목만 표시해요(함정 항목이 둘이에요).', toolOptions: CL('', '결제 전 점검', [
              { id: 'p1', text: '확률 표시를 읽었다', ok: true }, { id: 'p2', text: '보호자와 상의했다', ok: true }, { id: 'p3', text: '이번 달 예산 안이다', ok: true },
              { id: 'p4', text: '하루 지나도 사고 싶다', ok: true }, { id: 'p5', text: '남은 시간이 얼마 안 남았다' }, { id: 'p6', text: '친구들이 다 샀다' }]).toolOptions }),
            { type: 'choice', prompt: '"적은 금액은 여러 번 써도 괜찮다"는 생각을 점검표로 고친다면 어떤 항목이 가장 알맞을까요?', options: ['이번 달 예산 안이다', '남은 시간이 얼마 안 남았다', '친구들이 다 샀다'], answer: 0, difficulty: 0.2, explain: '적은 금액도 되풀이하면 예산을 넘어요. 예산 전체를 보고 정해요.' },
            { type: 'short', prompt: '결제 전 점검표에 더하고 싶은 나만의 항목 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '결제 전 점검표',
          items: [
            { type: 'check', prompt: '결제 전에 꼭 볼 항목에 표시해요.', options: ['확률 표시를 읽었다', '보호자와 상의했다', '이번 달 예산 안이다', '하루 지나도 사고 싶다', '남은 시간이 얼마 안 남았다'] },
            { type: 'short', prompt: '\'하루 지나도 사고 싶다\'를 점검표에 넣는 까닭을 한 문장으로 써요.' },
          ],
          easy: { note: '항목 세 개만 봐도 돼요.', items: [{ type: 'choice', prompt: '결제 전에 꼭 볼 항목에 ○ 해요.', options: ['보호자와 상의했다', '남은 시간이 얼마 안 남았다'], answer: '보호자와 상의했다' }] },
        },
      }),
      M('wrap.self-message', {
        title: '결제 앞의 나에게 메시지', method: '결제 앞의 나에게 메시지 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 따라 한 문장을 쓰고 기준 1개(장치를 짚었다)로 점검한다.', base: '두 문장을 쓰고 기준 2개(장치를 짚었다·할 행동을 알려 준다)로 점검한다.', challenge: '같은 메시지를 친구에게 보낼 말로 바꿔 쓰고 기준 3개로 점검한다.' },
        wrap: {
          teacher: '"결제 버튼 앞에 선 미래의 나에게 딱 두 문장을 보낼 수 있다면 무엇을 쓸까요?" \'그거 사지 마!\'와 \'남은 시간 문구는 서두르게 하는 장치야. 하루 자고 다시 생각하자\'를 견주어 읽은 뒤 쓰게 한다. "겁주는 말이 효과가 크다"는 학생에게 겁보다 장치 이름과 할 행동이 다음 순간에 떠오른다고 짚는다. 메시지에 실제 이름·게임 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '결제 버튼 앞에 선 미래의 나에게 보낼 메시지를 두 문장으로 쓰세요(게임 이름은 쓰지 않아요).', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 2, title: '결제 앞의 나에게', placeholder: '예: "오늘만"은 서두르게 하는 문구야…' },
              prompt: '결제 앞의 나에게 두 문장 메시지를 쓰고 기준표에 표시해요.', target: { selfCheck: ['붙잡는 장치를 짚었다', '할 행동을 알려 준다'] }, difficulty: 0.3 },
            { prompt: '틀을 따라 결제 앞의 나에게 한 문장 메시지를 쓰고 기준표에 표시해요.', toolOptions: { starter: '___는 ___하게 만드는 장치야.', minSentences: 1, maxSentences: 1, minChars: 10 }, target: { selfCheck: ['붙잡는 장치를 짚었다'] } },
            { prompt: '메시지를 친구에게 보낼 말로 바꿔 쓰고 기준표에 표시해요.', toolOptions: { topic: '결제 버튼 앞에 선 친구에게 보낼 메시지로 바꿔 두 문장으로 쓰세요(이름은 쓰지 않아요).' }, target: { selfCheck: ['붙잡는 장치를 짚었다', '할 행동을 알려 준다', '친구를 탓하지 않는 말투다'] } }),
            { type: 'choice', prompt: '결제 앞의 나에게 보낼 메시지로 가장 알맞은 것은?', options: ['절대 사지 마, 큰일 나!', '"남은 시간" 문구는 서두르게 하는 장치야. 하루 자고 보호자와 상의하자.', '다들 사니까 괜찮아.'], answer: 1, difficulty: 0.2, explain: '장치 이름과 할 행동이 함께 있어야 그 순간에 떠올라요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '결제 앞의 나에게',
          items: [
            { type: 'short', prompt: '결제 버튼 앞의 나에게 보낼 두 문장 메시지를 써요(장치 이름과 할 행동을 넣어요).' },
            { type: 'check', prompt: '내 메시지를 기준표로 점검해요.', options: ['붙잡는 장치를 짚었다', '할 행동을 알려 준다', '겁주거나 탓하지 않는다'] },
          ],
          easy: { note: '"___는 ___하게 만드는 장치야." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 메시지를 써요.', text: '"___"는 ___하게 만드는 장치야. ___ 하자.', answer: '(예) 오늘만, 서두르게, 하루 자고 다시 생각' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 인터넷 게임 사용 규칙 만들기와 실천 (saf-cyber.m.game-rule) ====
  {
    const M = MK('game-rule', [8]);
    const LOOP = [{ id: 'l1', text: '판 시작' }, { id: 'l2', text: '아깝게 짐(또는 이김)' }, { id: 'l3', text: '보상·랭크 변화' }, { id: 'l4', text: '"한 판 더"' }];
    const TRIG = [
      { id: 't1', text: '친구들이 한 판만 더 하자고 한다', to: '팀 게임' }, { id: 't2', text: '중간에 나가면 팀이 진다', to: '팀 게임' },
      { id: 't3', text: '한 번만 이기면 다음 등급이다', to: '랭크 승급 직전' }, { id: 't4', text: '아깝게 져서 점수가 떨어졌다', to: '랭크 승급 직전' },
      { id: 't5', text: '다음 날 학교에 안 가도 된다', to: '주말 밤' }, { id: 't6', text: '보호자가 먼저 잠들었다', to: '주말 밤' },
      { id: 't7', text: '새 지도와 새 캐릭터가 나왔다', to: '새 업데이트' }, { id: 't8', text: '업데이트 기념 보상이 기간 한정이다', to: '새 업데이트' }];
    const TEAM = { text: '저녁 9시, 태오가 보호자와 약속한 게임 종료 시각이다. 팀 게임이 막 끝났는데 팀원이 "한 판만 더! 지금 나가면 다음 판 사람이 모자라"라고 한다.', ask: '태오는 어떻게 할까?', motif: 'house', choices: [
      { id: 'stay', text: '"딱 한 판만" 하고 다시 들어간다', result: '한 판이 아깝게 져서 또 한 판으로 이어진다.', impact: [{ who: '보호자', text: '약속이 깨진다', tone: -1 }], why: '"한 판만"은 결과가 아쉬우면 다시 "한 판 더"가 돼요.', end: '한 판이 두 판이 되었어요.',
        next: { text: '10시가 넘었다. 보호자가 방문을 두드린다.', choices: [
          { id: 'excuse', text: '"팀 때문에 어쩔 수 없었어"라고 한다', result: '보호자가 다음 주 게임 시간을 줄이자고 한다.', impact: [{ who: '태오', text: '믿음이 줄어든다', tone: -1 }], why: '팀 핑계보다 약속을 지키지 못한 것을 먼저 인정해요.', end: '핑계를 댔어요.',
            next: { text: '다음 날 태오는 1교시 내내 졸고, 팀원은 "어제 잘했어, 오늘도 하자"고 한다.', choices: [
              { id: 'again', text: '오늘도 늦게까지 하기로 한다', result: '피곤이 쌓인다.', impact: [{ who: '태오', text: '몸이 지친다', tone: -1 }], why: '같은 고리가 되풀이되면 생활이 흔들려요.' },
              { id: 'fixit', text: '"오늘은 9시 전에 끝낼게"라고 미리 말한다', result: '팀원이 9시 전에 맞춰 판을 잡는다.', impact: [{ who: '팀원', text: '미리 알고 맞춘다', tone: 1 }] }] } },
          { id: 'own', text: '약속을 어겼다고 인정하고 사과한다', result: '보호자와 다음 약속을 다시 이야기한다.', impact: [{ who: '가족', text: '다시 믿는다', tone: 1 }], end: '인정하고 사과했어요.',
            next: { text: '보호자가 "팀 게임이면 어떻게 끝낼 수 있을까?"라고 묻는다.', choices: [
              { id: 'before', text: '"판 시작 전에 남은 시간을 확인할게"라고 정한다', result: '종료 순서가 하나 생긴다.', impact: [{ who: '태오', text: '다음엔 미리 끝낸다', tone: 1 }] },
              { id: 'shrug', text: '"그건 어쩔 수 없어"라고 한다', result: '같은 일이 또 생긴다.', impact: [{ who: '가족', text: '다시 다툰다', tone: -1 }], why: '팀 게임도 시작 전에 정하면 끝낼 수 있어요.' }] } }] } },
      { id: 'leave', text: '"약속 시간이라 여기까지 할게, 내일 같이 하자"라고 말하고 나간다', result: '팀원이 아쉬워하지만 다른 사람을 구한다.', impact: [{ who: '팀원', text: '아쉽지만 이해한다', tone: 1 }], end: '말하고 나갔어요.',
        next: { text: '단체방에 팀원이 "너 때문에 사람 구하느라 힘들었어"라고 올린다.', choices: [
          { id: 'angry', text: '"너희가 늦게 시작해서 그래"라고 맞받아친다', result: '단체방 분위기가 험해진다.', impact: [{ who: '팀원', text: '서운해한다', tone: -1 }], why: '탓하는 말은 다음 약속을 정하기 어렵게 해요.', end: '말다툼이 되었어요.',
            next: { text: '다음 날 팀원이 태오를 다음 판에 부르지 않는다.', choices: [
              { id: 'cold', text: '나도 말을 걸지 않는다', result: '사이가 서먹해진다.', impact: [{ who: '팀원', text: '멀어진다', tone: -1 }], why: '서운한 마음은 다음 약속으로 풀 수 있어요.' },
              { id: 'reach', text: '"어제 말이 심했어, 다음엔 8시에 시작하자"라고 한다', result: '팀원이 좋다고 답한다.', impact: [{ who: '팀원', text: '다시 함께한다', tone: 1 }] }] } },
          { id: 'plan', text: '"미안, 다음엔 시작 전에 끝 시각을 말할게"라고 답한다', result: '팀원이 "그럼 8시에 시작하자"고 한다.', impact: [{ who: '팀원', text: '미리 맞출 수 있다', tone: 1 }], end: '다음 약속을 정했어요.',
            next: { text: '다음 날 8시, 팀원이 "오늘은 몇 시까지야?"라고 묻는다.', choices: [
              { id: 'tell', text: '"9시까지, 8시 40분 넘으면 새 판은 안 들어갈게"라고 말한다', result: '모두 9시에 맞춰 끝낸다.', impact: [{ who: '팀', text: '판이 끊기지 않는다', tone: 1 }] },
              { id: 'vague', text: '"그때 봐서"라고 답한다', result: '또 9시에 판 한가운데에 있게 된다.', impact: [{ who: '팀', text: '또 끊긴다', tone: -1 }], why: '끝 시각을 숫자로 말해야 팀이 맞출 수 있어요.' }] } }] } },
      { id: 'silent', text: '아무 말 없이 게임을 끈다', result: '팀원들이 갑자기 사람이 빠져 당황한다.', impact: [{ who: '팀원', text: '갑자기 진다', tone: -1 }], why: '나가는 것은 맞지만, 한마디 알리면 팀도 준비할 수 있어요.', ending: '약속은 지켰지만 팀원은 영문을 몰랐어요. 다음엔 한마디 알려요.' }] };
    const TEAM_R = [{ id: 'r1', text: '약속한 시각은 팀 게임에서도 지킬 수 있다' }, { id: 'r2', text: '끝낼 때 한마디 알리면 팀도 준비한다' },
      { id: 'r3', text: '이기고 있을 때는 더 해도 된다', why: '이기고 있을 때가 "한 판 더"가 가장 강할 때예요.' },
      { id: 'r4', text: '팀 게임은 중간에 끊을 수 없으니 규칙이 소용없다', why: '판 시작 전에 끝 시각을 말하면 팀 게임도 끊을 수 있어요.' }];
    const TEAM_MORE = { reasons: [{ id: 'r5', text: '판 시작 전에 남은 시간을 확인하는 것이 예방이다' }], ok: ['r5'] };
    const PRE = { text: '8시 45분, 태오의 종료 시각은 9시다. 팀원이 새 판 초대를 보낸다. 한 판은 보통 20분쯤 걸린다.', ask: '태오는 어떻게 할까?', motif: 'star', choices: [
      { id: 'join', text: '"끝나면 9시 넘겠지만" 하고 들어간다', result: '판 중간에 9시가 된다.', impact: [{ who: '태오', text: '약속과 팀 사이에 끼인다', tone: -1 }], why: '남은 시간이 한 판보다 짧으면 새 판에 들어가지 않아요.', end: '판 중간에 9시가 되었어요.',
        next: { text: '9시, 판이 한창이다. 보호자가 "9시야"라고 부른다.', choices: [
          { id: 'ignore', text: '못 들은 척 계속한다', result: '9시 20분에 판이 끝나고 보호자가 화가 났다.', impact: [{ who: '가족', text: '약속이 깨진다', tone: -1 }], why: '못 들은 척은 약속과 믿음을 함께 깨요.', end: '못 들은 척했어요.',
            next: { text: '보호자가 "내일은 어떻게 할래?"라고 묻는다.', choices: [
              { id: 'promise', text: '"8시 40분 넘으면 새 판은 안 들어갈게"라고 정한다', result: '종료 순서가 생긴다.', impact: [{ who: '태오', text: '다음엔 미리 끝낸다', tone: 1 }] },
              { id: 'denial', text: '"오늘만 그런 거야"라고 한다', result: '내일도 같은 일이 생긴다.', impact: [{ who: '가족', text: '다시 다툰다', tone: -1 }], why: '정해 두지 않으면 같은 상황이 되풀이돼요.' }] } },
          { id: 'say', text: '"보호자와 약속이라 이번 판까지만"이라고 팀에 알리고 판이 끝나면 바로 나간다', result: '9시 20분에 나간다.', impact: [{ who: '팀원', text: '미리 알고 준비한다', tone: 1 }], end: '알리고 판이 끝나자 나갔어요.',
            next: { text: '보호자가 20분 늦은 까닭을 묻는다.', choices: [
              { id: 'honest', text: '"8시 45분에 새 판에 들어갔어, 다음엔 안 들어갈게"라고 말한다', result: '보호자가 다음 약속을 함께 정한다.', impact: [{ who: '가족', text: '다시 믿는다', tone: 1 }] },
              { id: 'blame2', text: '"팀이 안 놔줬어"라고 한다', result: '보호자가 다음 주 게임을 막자고 한다.', impact: [{ who: '태오', text: '믿음이 줄어든다', tone: -1 }], why: '내가 고른 것을 먼저 인정해요.' }] } }] } },
      { id: 'decline', text: '"15분 남아서 이번엔 빠질게, 내일 8시에 하자"라고 답한다', result: '팀원이 다른 사람을 초대한다.', impact: [{ who: '팀원', text: '미리 알고 맞춘다', tone: 1 }], end: '새 판에 들어가지 않았어요.',
        next: { text: '남은 15분, 태오가 무엇을 할지 고른다.', choices: [
          { id: 'watch', text: '팀원들 판을 구경하며 화면 앞에 있는다', result: '보다가 다시 들어가고 싶어진다.', impact: [{ who: '태오', text: '다시 흔들린다', tone: -1 }], why: '화면 앞에 남으면 다시 들어가고 싶어져요. 자리를 떠요.', end: '화면 앞에 남았어요.',
            next: { text: '팀원이 "자리 났어, 들어와!"라고 한다.', choices: [
              { id: 'in', text: '들어간다', result: '결국 9시를 넘긴다.', impact: [{ who: '가족', text: '약속이 깨진다', tone: -1 }], why: '흔들리기 쉬운 곳에서 벗어나야 해요.' },
              { id: 'out', text: '"오늘은 끝!" 하고 게임을 끈다', result: '9시 전에 마친다.', impact: [{ who: '태오', text: '약속을 지킨다', tone: 1 }] }] } },
          { id: 'stretch', text: '게임을 끄고 몸을 펴며 내일 준비를 한다', result: '9시 전에 마친다.', impact: [{ who: '태오', text: '약속을 지킨다', tone: 1 }], end: '게임을 끄고 몸을 폈어요.',
            next: { text: '다음 날 8시, 팀원이 어제처럼 시작하자고 한다.', choices: [
              { id: 'announce', text: '"9시 끝, 8시 40분 넘으면 새 판 안 들어가"라고 먼저 말한다', result: '팀이 8시 40분에 마지막 판을 잡는다.', impact: [{ who: '팀', text: '함께 맞춘다', tone: 1 }] },
              { id: 'nothing', text: '아무 말 없이 시작한다', result: '또 9시 무렵에 판 한가운데에 있게 된다.', impact: [{ who: '팀', text: '또 끊긴다', tone: -1 }], why: '끝 시각을 판 시작 전에 말해 두어야 해요.' }] } }] } }] };
    const PRE_R = [{ id: 'r1', text: '남은 시간이 한 판보다 짧으면 새 판에 들어가지 않는다' }, { id: 'r2', text: '끝 시각을 판 시작 전에 팀에 말해 둔다' },
      { id: 'r3', text: '초대를 거절하면 친구를 잃는다', why: '"내일 8시에 하자"처럼 다음 약속을 내면 관계도 지켜요.' },
      { id: 'r4', text: '시작만 하면 끝은 그때 정하면 된다', why: '판이 시작되면 끝내기가 훨씬 어려워요.' }];
    const PRE_MORE = { reasons: [{ id: 'r5', text: '게임을 끈 뒤 화면 앞을 떠나야 다시 흔들리지 않는다' }], ok: ['r5'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.loop', {
        title: '"한 판 더"의 고리 그리기', method: "'한 판 더'의 고리 그리기", tool: 'lifecycle', minutes: 6,
        levels: { easy: '카드 3장(판 시작·결과·한 판 더)으로 고리를 만든다.', base: '카드 4장으로 고리를 만들고, 교사와 함께 고리를 끊을 수 있는 자리를 짚는다.', challenge: '끊는 자리마다 쓸 수 있는 행동(남은 시간 확인·새 판 안 누르기)을 짝과 말한다.' },
        intro: {
          teacher: '"아깝게 졌을 때와 이겼을 때, 둘 다 \'한 판 더\'가 되는 까닭은 무엇일까요?" 고리 카드 네 장을 띄우고, 시연 단추로 \'판 시작 → 아깝게 짐(또는 이김) → 보상·랭크 변화 → 한 판 더\'가 고리로 놓이는 모습을 보인다. "이기고 있을 때는 더 해도 된다"는 학생에게 "이기면 고리가 멈추나요, 더 빨리 돌까요?"라고 되묻는다. 고리를 끊기 가장 쉬운 자리는 \'판 시작\' 앞이라는 점을 짚는다. 학생이 하는 게임 이름은 묻지 않는다.',
          student: '\'한 판 더\'가 되풀이되는 고리를 보고, 고리를 끊을 수 있는 자리가 어디인지, 그 자리에서 무엇을 할 수 있는지 생각해요.',
          demo: { tool: 'lifecycle', options: { mode: 'order', center: '한 판 더의 고리', slots: 4, cards: LOOP, spin: true }, sequence: [{ order: LOOP.map((c) => c.id) }] },
          art: { draw: 'a paper-cut circular arrow loop made of four paper cards around a game controller, with a small pair of paper scissors ready to cut the loop at one point', banner: '고리는 어디서 끊을 수 있을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
      }),
      M('intro.rank-story', {
        title: '랭크 게임 중 약속 시각', method: '랭크 게임 중 약속 시간 사례', tool: 'story', minutes: 6,
        levels: { easy: '태오의 입장 하나만 골라 잇는다.', base: '팀원·보호자·태오 세 입장을 각각 잇는다.', challenge: '세 입장을 모두 고려한 선택을 짝과 제안한다.' },
        intro: {
          teacher: '"약속 시각이 된 그 순간, 팀원·보호자·태오는 각각 무엇을 바랄까요?" 팀 랭크 게임 중 약속한 종료 시각이 된 가상 학생 태오의 장면을 들려주고, 시연 단추로 세 입장 카드가 사람마다 이어지는 모습을 보인다. "팀원 입장만 생각하면 계속해야 한다"는 학생에게 "보호자와 태오의 내일 1교시는 누가 생각해 줄까요?"라고 되묻는다. 세 입장을 다 놓고 나서 고르는 것이 오늘의 연습이라고 밝힌다.',
          student: '팀 랭크 게임 중 약속 시각이 된 태오의 장면을 읽고, 팀원·보호자·태오가 각각 바라는 것을 이어 보며 모두를 생각한 선택을 떠올려요.',
          demo: { tool: 'story', options: { mode: 'match', title: '저녁 9시, 랭크 게임 중', slots: [{ id: 'who1', label: '팀원', who: '팀원' }, { id: 'who2', label: '보호자', who: '보호자' }, { id: 'who3', label: '태오', who: '태오' }], cards: [
            { id: 'v1', text: '"판이 끝날 때까지 있어 줘"' }, { id: 'v2', text: '"약속한 9시는 지켜 줘"' }, { id: 'v3', text: '"팀도 약속도 지키고 싶어"' }] },
            sequence: [{ match: { who1: 'v1', who2: 'v2', who3: 'v3' } }] },
          art: { draw: 'a paper-cut split scene: a teenager with a headset in front of a screen, teammates as small paper avatars on one side and a parent pointing at a wall clock showing nine on the other', banner: '세 사람은 무엇을 바랄까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '태오는 가상 인물이다. 실제 게임 이름이나 학생의 게임 시간은 묻지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.trigger-map', {
        title: '오래 하게 되는 때 모둠 분석', method: '오래 하게 되는 상황 모둠 분석', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(팀 게임·랭크 승급 직전)에 상황 카드 4장을 붙이고(놓으면 바로 맞는지 알려 줌), 규칙 잇기도 두 가지만 한다.', base: '가지 4개에 상황 카드 8장을 붙이고, 가지마다 미리 정할 규칙 카드를 잇는다.', challenge: '마지막 문항에서 여러 가지에 겹치는 원인을 골라 담고 하나로 묶은 규칙을 활동지에 쓴다.' },
        activity: {
          title: '오래 하게 되는 때 모둠 분석', tool: 'mindmap',
          teacher: '"게임을 오래 하게 되는 것은 언제나 같은 때일까요, 특별한 때가 있을까요?" 모둠이 상황 카드를 가지에 붙이고, 가지마다 \'그때를 위해 미리 정할 규칙\'을 고르게 한다. "규칙은 혼자 마음속으로만 정하면 된다"는 학생에게 "팀 게임 가지의 규칙은 누가 알아야 지켜질까요?"라고 되묻는다. 모둠 토의에서 실제 게임 이름이나 각자의 게임 시간은 말하지 않게 한다.',
          task: '게임을 오래 하게 되는 상황 카드를 \'팀 게임·랭크 승급 직전·주말 밤·새 업데이트\' 가지에 붙이고, 가지마다 미리 정할 규칙을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('오래 하게 되는 상황 카드를 알맞은 가지에 붙이세요.', ['팀 게임', '랭크 승급 직전', '주말 밤', '새 업데이트'], TRIG, { topic: '게임을 오래 하게 되는 때' }),
              SB('상황 카드 4장을 두 가지에 붙이세요.', ['팀 게임', '랭크 승급 직전'], pickCards(TRIG, ['t1', 't2', 't3', 't4']), { topic: '게임을 오래 하게 되는 때' })),
            IT(MB('가지마다 미리 정할 규칙을 이어 보세요.', [['팀 게임', '시작 전에 끝 시각을 팀에 말한다'], ['랭크 승급 직전', '정한 판 수가 끝나면 승급 전이어도 멈춘다'], ['주말 밤', '주말에도 끝 시각을 평일과 같이 정한다'], ['새 업데이트', '새 내용은 다음 날 정한 시간에 해 본다']], ['그때그때 기분대로 정한다'], { topic: '미리 정할 규칙' }),
              MB('가지 두 개에 미리 정할 규칙을 이어 보세요.', [['팀 게임', '시작 전에 끝 시각을 팀에 말한다'], ['랭크 승급 직전', '정한 판 수가 끝나면 승급 전이어도 멈춘다']], [], { topic: '미리 정할 규칙' })),
            IT(PB('여러 가지에 겹치는 원인만 골라 담으세요.', '겹치는 원인', [
              { id: 'o1', text: '끝 시각을 미리 정하지 않았다', ok: true }, { id: 'o2', text: '"한 번만 더" 하면 끝날 것 같다', ok: true },
              { id: 'o3', text: '게임기 화면이 크다' }, { id: 'o4', text: '친구 이름이 길다' }], { topic: '겹치는 원인' }),
              PB('여러 가지에 겹치는 원인 하나를 골라 담으세요.', '겹치는 원인', [
                { id: 'o1', text: '끝 시각을 미리 정하지 않았다', ok: true }, { id: 'o3', text: '게임기 화면이 크다' }], { topic: '겹치는 원인' }),
              PB('여러 가지에 겹치는 원인만 골라 담으세요(함정 카드가 더 있어요).', '겹치는 원인', [
                { id: 'o1', text: '끝 시각을 미리 정하지 않았다', ok: true }, { id: 'o2', text: '"한 번만 더" 하면 끝날 것 같다', ok: true }, { id: 'o5', text: '지금 멈추면 손해 같다', ok: true },
                { id: 'o3', text: '게임기 화면이 크다' }, { id: 'o4', text: '친구 이름이 길다' }, { id: 'o6', text: '게임 소리가 작다' }], { topic: '겹치는 원인' }),
              { conclude: '오래 하게 되는 때는 저마다 달라 보여도, 끝 시각을 미리 정하지 않았다는 원인이 겹쳐요. 그 자리에 규칙을 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '겹치는 원인 하나를 골라, 네 가지 상황에 모두 쓸 수 있는 규칙 하나로 묶어 써요.' }],
          easy: [{ type: 'choice', prompt: '\'팀 게임\' 때 미리 정할 규칙에 ○ 해요.', options: ['시작 전에 끝 시각을 팀에 말한다', '그때그때 기분대로 정한다'], answer: '시작 전에 끝 시각을 팀에 말한다' }] },
      }),
      M('activity.play-rest', {
        title: '게임·휴식 구간과 종료 순서', method: '게임·휴식 구간 계획과 종료 순서', tool: 'timer', minutes: 16,
        levels: { easy: '첫 문항에서 게임 시간 값 하나(40분)만 맞추고, 전체 시간은 화면에 보인다.', base: '타이머 세 값(게임 40분·쉬기 10분·2번)을 맞추고, 종료 순서 카드 3장을 놓고, 주말 계획의 전체 시간을 맞춘다.', challenge: '전체 시간이 맞힌 뒤에만 보이는 판에서 주말 계획을 맞추고, 활동지에서 한 주 전체 시간을 계산해 주간 계획과 견준다.' },
        activity: {
          title: '게임·휴식 구간과 종료 순서', tool: 'timer',
          teacher: '"게임 40분, 쉬기 10분을 두 번 하면 모두 몇 분일까요? 쉬는 시간은 몇 번 들어갈까요?" 타이머를 분 단위로 맞추며 전체 시간을 함께 세게 한다(40×2+10=90분). "쉬는 시간은 시간 낭비"라는 학생에게 "쉬는 10분이 없으면 다음 판을 끊을 자리가 있을까요?"라고 되묻는다. 40분·10분은 우리 반 연습 계획 값이고 정해진 권장 시간이 아니라고 밝힌다.',
          task: '우리 반 연습 계획에 맞춰 게임·휴식 구간 타이머를 분 단위로 맞추고, 게임을 끝내는 순서를 정해요.',
          levels: { easy: { showTotal: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '연습 계획대로 게임 40분·쉬기 10분·2번으로 타이머를 맞추세요.', toolOptions: { title: '평일 연습 계획', timeUnit: 'min', plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { work: 40, rest: 10, rounds: 2 } }, difficulty: 0.2 },
              { prompt: '연습 계획대로 게임 시간을 40분으로 맞추세요.', target: { plan: { work: 40 } } }),
            { prompt: '게임을 끝내는 순서 카드를 바른 차례로 놓으세요.', toolOptions: { title: '게임 끝내는 순서', cards: ['몸 펴기', '판이 끝나면 새 판 안 누르기', '판 시작 전 남은 시간 확인'] }, target: { order: ['판 시작 전 남은 시간 확인', '판이 끝나면 새 판 안 누르기', '몸 펴기'] }, difficulty: 0.2 },
            { prompt: '주말 계획은 게임 30분·쉬기 10분·3번이에요. 타이머를 맞춰 전체 시간(110분)이 되게 하세요.', toolOptions: { title: '주말 연습 계획', timeUnit: 'min', plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { work: 30, rest: 10, rounds: 3 }, total: 110 }, difficulty: 0.3 },
            IT({ prompt: '게임을 시작하기 전에 확인할 것을 모두 표시하세요.', toolOptions: { title: '시작 전 점검', safety: ['끝낼 시각을 정했다', '팀원에게 끝 시각을 말했다', '알림을 맞췄다', '할 일을 먼저 마쳤다'] }, target: { safety: true }, difficulty: 0.15 },
              null, null, { conclude: '게임 구간 사이에 쉬는 구간을 넣고, 판 시작 전에 남은 시간을 확인하면 "한 판 더"의 고리를 끊을 자리가 생겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '연습 계획의 전체 시간을 계산해요.', columns: ['계획', '계산', '전체 시간'], cells: [['평일(40분·10분·2번)', '', ''], ['주말(30분·10분·3번)', '', '']], answer: '40×2+10×1=90분, 30×3+10×2=110분' }],
          easy: [{ type: 'choice', prompt: '게임을 끝내는 순서의 첫 단계에 ○ 해요.', options: ['판 시작 전 남은 시간 확인', '몸 펴기'], answer: '판 시작 전 남은 시간 확인' }] },
        notes: '게임 40분·쉬기 10분·2번, 주말 30분·10분·3번은 \'우리 반 연습 계획\' 값이다(권장 시간이 아님 — 사람 확인 목록).',
      }),
      M('activity.team-dilemma', {
        title: '"지금 나가면 다 진다" 갈림길', method: '팀원 압박 갈림길 결과 추적', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번을 골라 결과를 보고, 근거 카드는 고르지 않는다.', base: '갈림길 세 번을 골라 그날 밤·다음 날 장면까지 가고 근거 카드를 고른다.', challenge: '되돌아가 다른 길도 끝까지 가 보고, 판 시작 전에 할 수 있었던 예방 행동 근거까지 고른다.' },
        activity: {
          title: '"지금 나가면 다 진다" 갈림길', tool: 'dilemma',
          teacher: '"팀원이 \'지금 나가면 다 진다\'고 할 때, 남는 것만이 팀을 위하는 길일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 말없이 나간 길·말하고 나간 길·남은 길의 다음 날을 견주게 한다. "팀 게임은 중간에 끊을 수 없으니 규칙이 소용없다"는 학생에게 둘째 장면(8시 45분 새 판 초대)을 가리키며 "판이 시작되기 전이라면 어떨까요?"라고 되묻는다. 상황은 가상이고, 학생에게 실제로 겪은 다툼을 묻지 않는다.',
          task: '약속 시각에 팀원이 붙잡는 장면과 새 판 초대 장면에서 태오의 길을 골라 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '약속 시각에 팀원이 붙잡아요. 두 번 골라 결과를 보세요.', base: '약속 시각에 팀원이 붙잡아요. 세 번 골라 다음 날까지 가고 근거를 고르세요.', challenge: '약속 시각에 팀원이 붙잡아요. 끝 장면 두 개 이상을 가 보고 예방 근거까지 고르세요.' },
              '저녁 9시 약속 시각', TEAM, [['leave', 'plan', 'tell']], TEAM_R, ['r1', 'r2'], Object.assign({ explore: 2 }, TEAM_MORE)),
            DIL({ easy: '8시 45분에 새 판 초대가 왔어요. 두 번 골라 결과를 보세요.', base: '8시 45분에 새 판 초대가 왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '8시 45분 새 판 초대 장면에서 끝까지 가고 예방 근거까지 고르세요.' },
              '8시 45분 새 판 초대', PRE, [['decline', 'stretch', 'announce']], PRE_R, ['r1', 'r2'], PRE_MORE,
              { conclude: '팀 게임도 판 시작 전에 끝 시각을 말하고, 남은 시간이 한 판보다 짧으면 새 판에 들어가지 않으면 끊을 수 있어요.' }),
            { prompt: '두 장면에서 내가 간 길을 짝과 견주고, 판 시작 전에 할 수 있는 일을 하나 정해요.', free: true, toolOptions: { title: '저녁 9시 약속 시각', scene: cut(TEAM, 3), reasons: [], compare: true } },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '팀원이 붙잡을 때 판 시작 전에 할 수 있었던 예방 행동을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '약속 시각에 팀 게임을 끝낼 때 알맞은 행동에 ○ 해요.', options: ['한마디 알리고 나간다', '말없이 끈다'], answer: '한마디 알리고 나간다' }] },
      }),
      M('activity.exit-script', {
        title: '"이번 판까지만" 역할극 대본', method: '끊는 말 역할극 대본 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '대본 틀을 따라 4줄로 쓰고 기준 2개(분명한가·예의 있는가)로 점검한다.', base: '대본을 6줄 안팎으로 쓰고 기준 3개(분명한가·예의 있는가·다음 약속을 제안하나)로 점검한 뒤, 짝과 읽고 고칠 한 줄을 고쳐 쓴다.', challenge: '팀원이 비난할 때 이어 갈 대사까지 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '"이번 판까지만" 역할극 대본', tool: 'rubric-writing',
          teacher: '"\'나 간다\'와 \'약속 시간이라 이번 판까지만 할게, 내일 8시에 또 하자\' 가운데 팀원이 덜 서운한 말은 무엇일까요?" 두 말을 견주어 읽은 뒤 대본을 쓰게 하고, 짝과 한 줄씩 소리 내어 읽게 한다. "끊는 말은 팀을 배신하는 말"이라는 학생에게 "다음 약속을 함께 내는 말도 배신일까요?"라고 되묻는다. 대본 속 이름은 가명으로 쓰고 실제 게임 이름은 쓰지 않게 한다.',
          task: '팀원에게 "이번 판까지만 하고 나갈게"를 전하는 짧은 역할극 대본을 쓰고, 기준표로 고친 뒤 짝과 읽어 봐요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('약속 시각이 된 태오가 팀원에게 "이번 판까지만"을 전하는 대본을 쓰세요.',
              { topic: '약속 시각이 된 태오가 팀원에게 "이번 판까지만 하고 나갈게"를 전하는 대본을 6줄 안팎으로 쓰세요(인물은 가명, 게임 이름은 쓰지 않아요).', minChars: 50, maxChars: 300, minSentences: 4, maxSentences: 8, title: '"이번 판까지만" 대본', lines: 6 },
              ['끝낸다는 말이 분명하다', '예의 있는 말투다', '다음 약속을 제안한다'],
              { prompt: '틀을 따라 "이번 판까지만" 대본을 4줄로 쓰세요.', toolOptions: { starter: '태오: "___ 시간이라 이번 판까지만 할게." / 팀원: "왜?" / 태오: "___." / 태오: "___에 또 하자."', minSentences: 3, minChars: 30 }, crit: ['끝낸다는 말이 분명하다', '예의 있는 말투다'] },
              { prompt: '"이번 판까지만" 대본을 쓰세요(다음 약속까지).', crit: ['끝낸다는 말이 분명하다', '예의 있는 말투다', '다음 약속을 제안한다', '판이 끝나면 바로 나가는 말이 있다'] }),
            RW('팀원이 "한 판만 더 하자"고 다시 붙잡을 때 이어 갈 대본을 쓰세요.',
              { topic: '판이 끝났는데 팀원이 "진짜 한 판만 더!"라며 다시 붙잡는다. 이어 갈 대본을 4~6줄로 쓰세요(인물은 가명).', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 7, title: '다시 붙잡을 때', lines: 5 },
              ['다시 분명하게 끝낸다', '예의 있는 말투다', '다음 약속을 제안한다'],
              { prompt: '틀을 따라 다시 붙잡을 때 이어 갈 대본을 쓰세요.', toolOptions: { starter: '팀원: "한 판만 더!" / 태오: "오늘은 ___. 대신 ___."', minSentences: 2, minChars: 20 }, crit: ['다시 분명하게 끝낸다', '예의 있는 말투다'] },
              { prompt: '팀원이 "너 때문에 졌잖아"라고 비난할 때 이어 갈 대본을 쓰세요.', toolOptions: { topic: '팀원이 "너 때문에 졌잖아, 배신자"라고 비난한다. 맞서 싸우지 않고 끝내는 대본을 4~6줄로 쓰세요(인물은 가명).' }, crit: ['다시 분명하게 끝낸다', '예의 있는 말투다', '다음 약속을 제안한다', '비난에 맞받아치지 않는다'] }),
            RW('짝과 대본을 읽어 본 뒤, 가장 어색했던 한 줄을 고쳐 쓰세요.',
              { topic: '고쳐 쓰기 — 짝과 소리 내어 읽어 보고 가장 어색했던 줄을 골라 고쳐 쓰세요. 무엇이 어색했는지도 한 문장 밝혀요.', minChars: 20, maxChars: 200, minSentences: 2, maxSentences: 4, title: '대본 고쳐 쓰기', lines: 3 },
              ['어색했던 까닭을 밝혔다', '고친 줄이 더 자연스럽다', '고친 줄도 끝낸다는 뜻이 분명하다'],
              { prompt: '틀을 따라 대본 한 줄을 고쳐 쓰세요.', toolOptions: { starter: '___ 줄이 ___해서 어색했다. 고친 줄: "___"' }, crit: ['어색했던 까닭을 밝혔다', '고친 줄이 더 자연스럽다'] },
              null, { conclude: '좋은 끊는 말은 분명하고 예의 있으며 다음 약속을 함께 내요. 비난에 맞받아치지 않아야 다음에도 함께할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 가장 자신 있는 끊는 말 한 줄을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.group-rule', {
        title: '모둠 게임 규칙 점검표', method: '우리 모둠 게임 규칙 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '예시 규칙이 다루는 항목을 2개 가운데에서 표시한다.', base: '예시 규칙이 \'언제·얼마나·팀 게임 때·결제\' 가운데 무엇을 다루는지 4개 항목에서 표시하고 빠진 것을 채운다.', challenge: '다른 모둠의 예시 규칙도 점검해 빠진 항목을 짚는다.' },
        wrap: {
          teacher: '"우리 모둠 규칙은 \'언제·얼마나·팀 게임 때·결제\'를 다 다루고 있나요?" 먼저 예시 모둠(가상)의 규칙을 함께 읽고 다루는 항목만 표시한 뒤, 빠진 항목을 채우게 한다. "결제는 게임 시간이랑 상관없다"는 학생에게 지난 시간 \'한정 이벤트 마지막 밤\' 장면을 떠올리게 한다. 우리 모둠 규칙은 활동지에서 같은 점검표로 점검한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: CL('', '예시 모둠 규칙: "평일엔 숙제를 마친 뒤 40분, 팀 게임은 시작 전에 끝 시각을 말한다."', [
              { id: 'g1', text: '언제 하는지 다룬다', ok: true }, { id: 'g2', text: '얼마나 하는지 다룬다', ok: true }, { id: 'g3', text: '팀 게임 때를 다룬다', ok: true }, { id: 'g4', text: '결제를 다룬다' }]).toolOptions,
              prompt: '예시 모둠 규칙이 다루는 항목만 표시해요.', target: { checklist: ['g1', 'g2', 'g3'] }, difficulty: 0.2 },
            { prompt: '예시 모둠 규칙이 다루는 항목만 표시해요(두 항목 가운데).', toolOptions: CL('', '예시 모둠 규칙: "평일엔 숙제를 마친 뒤 40분, 팀 게임은 시작 전에 끝 시각을 말한다."', [{ id: 'g2', text: '얼마나 하는지 다룬다', ok: true }, { id: 'g4', text: '결제를 다룬다' }]).toolOptions, target: { checklist: ['g2'] } },
            { prompt: '다른 모둠의 예시 규칙이 다루는 항목만 표시해요.', toolOptions: CL('', '다른 모둠 규칙: "주말엔 오후에만 하고, 결제는 보호자와 상의한 뒤에만 한다."', [
              { id: 'g1', text: '언제 하는지 다룬다', ok: true }, { id: 'g2', text: '얼마나 하는지 다룬다' }, { id: 'g3', text: '팀 게임 때를 다룬다' }, { id: 'g4', text: '결제를 다룬다', ok: true }]).toolOptions, target: { checklist: ['g1', 'g4'] } }),
            { type: 'choice', prompt: '"규칙은 혼자 마음속으로만 정하면 된다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['팀 게임 규칙은 팀원이 알아야 지킬 수 있다', '규칙은 많을수록 좋다', '규칙은 어른이 정해야 한다'], answer: 0, difficulty: 0.2, explain: '함께 노는 사람이 알면 시작 전부터 맞출 수 있어요.' },
            { type: 'short', prompt: '예시 모둠 규칙에 빠진 \'결제\' 항목을 채우는 문장을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '우리 모둠 게임 규칙 점검',
          items: [
            { type: 'short', prompt: '우리 모둠 게임 규칙을 한두 문장으로 써요(게임 이름은 쓰지 않아요).' },
            { type: 'check', prompt: '우리 모둠 규칙이 다루는 항목에 표시해요.', options: ['언제 하는지', '얼마나 하는지', '팀 게임 때', '결제'] },
          ],
          easy: { note: '두 항목만 점검해도 돼요.', items: [{ type: 'check', prompt: '우리 모둠 규칙이 다루는 항목에 표시해요.', options: ['언제 하는지', '얼마나 하는지'] }] },
        },
      }),
      M('wrap.two-weeks', {
        title: '두 주 실천 점검 일정', method: '두 주 실천 점검 일정', tool: 'timeline', minutes: 7,
        levels: { easy: '일정 카드 3장(시작·7일차·14일차)을 날짜 눈금에 놓는다.', base: '일정 카드 4장(시작·3일차 점검·7일차 고치기·14일차 돌아보기)을 날짜 눈금에 놓고, 활동지에 실제 날짜를 적는다.', challenge: '함정 카드가 섞인 판에서 놓고, 점검 때 볼 기록 항목을 고른다.' },
        wrap: {
          teacher: '"규칙을 정한 날 바로 끝일까요? 언제 다시 들여다볼까요?" 일정 카드를 날짜 눈금에 놓은 뒤 3일차와 7일차에 무엇을 볼지 말하게 한다. "규칙은 한 번 정하면 그대로 지켜야 한다"는 학생에게 "7일차에 안 맞는 규칙을 고치는 것은 실패일까요, 실천일까요?"라고 되묻는다. 날짜는 활동지에 각자 적고 걷지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timeline', options: { mode: 'match', axis: ['시작', '두 주 뒤'], slots: [{ id: 'd1', label: '1일', at: 1 }, { id: 'd3', label: '3일', at: 3 }, { id: 'd7', label: '7일', at: 7 }, { id: 'd14', label: '14일', at: 14 }], cards: [
              { id: 'c1', text: '시작: 규칙을 붙여 둔다' }, { id: 'c2', text: '점검: 기록을 본다' }, { id: 'c3', text: '고치기: 안 맞는 규칙을 바꾼다' }, { id: 'c4', text: '돌아보기: 두 주를 정리한다' }] },
              prompt: '두 주 실천 일정 카드를 날짜 눈금에 놓아요.', target: { match: { d1: 'c1', d3: 'c2', d7: 'c3', d14: 'c4' } }, difficulty: 0.2 },
            { prompt: '일정 카드 세 장을 날짜 눈금에 놓아요.', toolOptions: { slots: [{ id: 'd1', label: '1일', at: 1 }, { id: 'd7', label: '7일', at: 7 }, { id: 'd14', label: '14일', at: 14 }], cards: [{ id: 'c1', text: '시작: 규칙을 붙여 둔다' }, { id: 'c3', text: '고치기: 안 맞는 규칙을 바꾼다' }, { id: 'c4', text: '돌아보기: 두 주를 정리한다' }] }, target: { match: { d1: 'c1', d7: 'c3', d14: 'c4' } } },
            { prompt: '함정 카드는 남기고 일정 카드를 날짜 눈금에 놓아요.', toolOptions: { cards: [
              { id: 'c1', text: '시작: 규칙을 붙여 둔다' }, { id: 'c2', text: '점검: 기록을 본다' }, { id: 'c3', text: '고치기: 안 맞는 규칙을 바꾼다' }, { id: 'c4', text: '돌아보기: 두 주를 정리한다' },
              { id: 'x1', text: '한 번 어기면 규칙을 버린다' }, { id: 'x2', text: '기록 없이 기억으로 돌아본다' }] } }),
            { type: 'choice', prompt: '3일차 점검 때 볼 기록 항목으로 가장 알맞은 것은?', options: ['정한 끝 시각을 지킨 날과 흔들린 상황', '그날 이긴 판의 수', '친구들의 게임 등급'], answer: 0, difficulty: 0.2, explain: '지킨 날과 흔들린 상황을 봐야 규칙을 고칠 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '두 주 실천 일정',
          items: [
            { type: 'table', prompt: '두 주 실천 일정에 날짜를 적어요(혼자 보기).', columns: ['일정', '날짜', '할 일'], cells: [['시작', '', ''], ['3일차 점검', '', ''], ['7일차 고치기', '', ''], ['14일차 돌아보기', '', '']], answer: '(각자 날짜 — 정답 없음)' },
            { type: 'short', prompt: '7일차에 규칙이 안 맞으면 어떻게 고칠지 한 문장으로 써요.' },
          ],
          easy: { note: '시작·7일차·14일차만 적어도 돼요.', items: [{ type: 'choice', prompt: '7일차에 할 일에 ○ 해요.', options: ['안 맞는 규칙을 고친다', '규칙을 버린다'], answer: '안 맞는 규칙을 고친다' }] },
        },
      }),
    );
  }

  // ==== 9학년 · 과의존 세 신호로 사례 분석하고 돕기 (saf-cyber.m.overdependence-case) ====
  // 사례 인물 하람·준서는 가상이다. 학생 자신의 사용 시간이나 신호는 판정하지 않는다(스스로 점검은 '혼자 보기' 활동지).
  {
    const M = MK('overdependence-case', [9]);
    const TERMS = [['조절 실패', '그만하려 해도 잘 안 됨'], ['현저성', '생활에서 가장 중요한 일이 됨'], ['문제적 결과', '건강·관계·학업에 문제가 생겨도 계속함']];
    const WEEKS = [['1주', 10], ['2주', 11], ['3주', 19], ['4주', 23]];
    const SIG = ['조절 실패', '현저성', '문제적 결과'];
    const CASE = [
      { id: 'h1', text: '알람을 맞춰도 끄고 계속한다', to: '조절 실패' }, { id: 'h2', text: '"10분만" 하고 시작해 2시간이 지난다', to: '조절 실패' },
      { id: 'h3', text: '줄이겠다고 세 번 마음먹었지만 못 했다', to: '조절 실패' }, { id: 'h4', text: '수업 중에도 게임 생각만 난다', to: '현저성' },
      { id: 'h5', text: '친구와 놀기보다 폰이 늘 먼저다', to: '현저성' }, { id: 'h6', text: '폰이 없으면 불안해 아무것도 못 한다', to: '현저성' },
      { id: 'h7', text: '잠이 줄어 아침에 자주 지각한다', to: '문제적 결과' }, { id: 'h8', text: '보호자와 다툼이 잦아도 계속한다', to: '문제적 결과' },
      { id: 'h9', text: '성적이 떨어졌는데도 줄이지 않는다', to: '문제적 결과' },
      { id: 'n1', text: '주말에 정한 시간만큼 친구와 게임한다' }, { id: 'n2', text: '숙제를 마치고 30분 영상을 본다' }];
    const FRIEND = { text: '점심시간, 같은 반 준서가 요즘 밥도 빨리 먹고 혼자 구석에서 폰 게임만 한다. 쉬는 시간에도 고개를 들지 않고, 지난주부터 1교시에 자주 존다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'ignore', text: '모른 척한다', result: '준서는 점점 더 혼자 있는다.', impact: [{ who: '준서', text: '혼자 남는다', tone: -1 }], why: '친구의 신호를 알아차렸다면 가볍게라도 말을 걸 수 있어요.', ending: '모른 척하자 준서는 더 혼자가 되었어요. 친구의 신호는 내가 상관할 수 있는 일이에요.' },
      { id: 'tease', text: '"게임 중독이냐?" 하고 놀린다', result: '준서가 얼굴을 붉히며 자리를 피한다.', impact: [{ who: '준서', text: '상처받고 숨는다', tone: -1 }], why: '놀리면 친구는 도움을 청하기 더 어려워져요.', end: '놀려서 준서가 피했어요.',
        next: { text: '그 뒤로 준서가 나를 피한다.', choices: [
          { id: 'more', text: '다른 친구들과 계속 놀린다', result: '준서가 교실에서 더 혼자가 된다.', impact: [{ who: '준서', text: '더 고립된다', tone: -1 }], why: '여럿이 놀리면 괴롭힘이 될 수 있어요.', end: '놀림이 커졌어요.',
            next: { text: '준서가 결석하는 날이 생긴다.', choices: [
              { id: 'still', text: '"원래 그런 애"라고 넘긴다', result: '아무도 준서를 돕지 않는다.', impact: [{ who: '준서', text: '도움을 못 받는다', tone: -1 }], why: '늦었더라도 사과하고 어른에게 알릴 수 있어요.' },
              { id: 'apologize', text: '사과하고 담임 선생님께 걱정을 말씀드린다', result: '선생님이 준서와 이야기를 나눈다.', impact: [{ who: '준서', text: '도움을 받기 시작한다', tone: 1 }] }] } },
          { id: 'sorry', text: '"아까 말 심했어, 미안"이라고 사과한다', result: '준서가 고개를 끄덕인다.', impact: [{ who: '준서', text: '조금 마음을 연다', tone: 1 }], end: '사과했어요.',
            next: { text: '준서가 "요즘 잠을 잘 못 자"라고 털어놓는다.', choices: [
              { id: 'joke', text: '"나도 그래, 괜찮아"라고 넘긴다', result: '대화가 거기서 끝난다.', impact: [{ who: '준서', text: '혼자 남는다', tone: -1 }], why: '털어놓은 말에는 귀 기울여 듣고 도움받을 곳을 함께 찾아요.' },
              { id: 'counsel', text: '"상담 선생님께 같이 가 볼래?"라고 묻는다', result: '준서가 망설이다 같이 가겠다고 한다.', impact: [{ who: '준서', text: '도움 경로를 찾는다', tone: 1 }] }] } }] } },
      { id: 'invite', text: '"같이 운동장 한 바퀴 돌래?"라고 함께할 활동을 낸다', result: '준서가 머뭇거리다 따라나선다.', impact: [{ who: '준서', text: '잠시 폰을 내려놓는다', tone: 1 }], end: '함께할 활동을 냈어요.',
        next: { text: '걷다가 준서가 "밤에 게임을 멈추기가 너무 힘들어"라고 말한다.', choices: [
          { id: 'lecture', text: '"너 그러다 큰일 나"라고 겁을 준다', result: '준서가 입을 닫는다.', impact: [{ who: '준서', text: '다시 숨는다', tone: -1 }], why: '겁을 주면 친구는 더 말하지 않게 돼요. 먼저 들어 줘요.', end: '겁을 주자 준서가 입을 닫았어요.',
            next: { text: '다음 날 준서가 다시 혼자 폰만 한다.', choices: [
              { id: 'give', text: '"말해 봤자 소용없네" 하고 포기한다', result: '준서는 도움 없이 지낸다.', impact: [{ who: '준서', text: '도움을 못 받는다', tone: -1 }], why: '한 번의 실수로 돕기를 멈추지 않아요.' },
              { id: 'retry', text: '"어제 말 미안해, 들어 줄게"라고 다시 다가간다', result: '준서가 조금 웃는다.', impact: [{ who: '준서', text: '다시 마음을 연다', tone: 1 }] }] } },
          { id: 'listen', text: '끝까지 들어 주고 "상담 선생님께 같이 가 볼까?"라고 묻는다', result: '준서가 "혼자는 싫은데 같이면"이라고 한다.', impact: [{ who: '준서', text: '도움받을 마음이 생긴다', tone: 1 }], end: '들어 주고 도움받을 곳을 함께 찾았어요.',
            next: { text: '상담실 앞에서 준서가 "역시 그냥 갈래"라며 돌아서려 한다.', choices: [
              { id: 'go', text: '"내가 먼저 노크할게, 같이 들어가자"라고 한다', result: '준서가 상담 선생님과 이야기를 시작한다.', impact: [{ who: '준서', text: '도움을 받는다', tone: 1 }] },
              { id: 'drop', text: '"그래, 네 마음대로 해"라고 돌아선다', result: '준서가 혼자 교실로 돌아간다.', impact: [{ who: '준서', text: '기회를 놓친다', tone: -1 }], why: '망설이는 친구에게는 한 걸음 같이 가 주는 것이 큰 힘이 돼요.' }] } }] } },
      { id: 'adult', text: '담임 선생님께 준서가 걱정된다고 말씀드린다', result: '선생님이 "알려 줘서 고마워"라며 살펴보겠다고 한다.', impact: [{ who: '준서', text: '어른의 관심을 받는다', tone: 1 }], end: '어른에게 알렸어요.',
        next: { text: '준서가 "네가 선생님께 말했어?"라고 묻는다.', choices: [
          { id: 'deny', text: '"아니, 난 몰라"라고 한다', result: '준서가 누구도 믿지 못하게 된다.', impact: [{ who: '준서', text: '믿음이 흔들린다', tone: -1 }], why: '걱정해서 알렸다는 것을 솔직하게 말해도 돼요.', end: '아니라고 했어요.',
            next: { text: '준서가 상담을 거절한다.', choices: [
              { id: 'leave2', text: '이제 상관하지 않는다', result: '준서가 다시 혼자가 된다.', impact: [{ who: '준서', text: '혼자 남는다', tone: -1 }], why: '거절해도 곁에 있어 주는 것은 할 수 있어요.' },
              { id: 'stay2', text: '"걱정돼서 그랬어, 같이 점심 먹자"라고 솔직히 말한다', result: '준서가 조금 누그러진다.', impact: [{ who: '준서', text: '곁에 친구가 있다', tone: 1 }] }] } },
          { id: 'honest', text: '"응, 네가 걱정돼서 그랬어"라고 솔직히 말한다', result: '준서가 잠시 말이 없다가 고개를 끄덕인다.', impact: [{ who: '준서', text: '걱정받는다는 것을 안다', tone: 1 }], end: '솔직히 말했어요.',
            next: { text: '준서가 "근데 뭘 어떻게 해야 할지 모르겠어"라고 한다.', choices: [
              { id: 'together', text: '"점심시간엔 나랑 걷자, 상담도 같이 가 줄게"라고 한다', result: '준서가 해 보겠다고 한다.', impact: [{ who: '준서', text: '함께할 사람이 생긴다', tone: 1 }] },
              { id: 'alone', text: '"그건 네가 알아서 해야지"라고 한다', result: '준서가 다시 막막해한다.', impact: [{ who: '준서', text: '막막해한다', tone: -1 }], why: '과의존은 혼자 이겨 내기 어려워요. 함께할 일을 내요.' }] } }] } }] };
    const FRIEND_R = [{ id: 'r1', text: '비난하지 않고 함께할 활동을 낸다' }, { id: 'r2', text: '걱정되면 믿을 어른에게 알린다' },
      { id: 'r3', text: '친구의 사용 습관은 내가 상관할 일이 아니다', why: '신호를 알아차린 친구가 가장 먼저 도울 수 있어요.' },
      { id: 'r4', text: '과의존은 혼자 이겨 내야 한다', why: '상담실·보호자·1388처럼 함께할 곳이 있어요.' }];
    const FRIEND_MORE = { reasons: [{ id: 'r5', text: '들어 주기·함께하기·어른에게 알리기를 차례로 할 수 있다' }], ok: ['r5'] };
    const ANGRY = { text: '내가 준서에게 "요즘 많이 피곤해 보여"라고 말하자, 준서가 "네가 뭔데 상관이야"라며 화를 낸다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'fight', text: '"너 진짜 중독이야"라고 맞받아친다', result: '말다툼이 커진다.', impact: [{ who: '준서', text: '더 마음을 닫는다', tone: -1 }], why: '화에 화로 맞서면 친구는 도움에서 더 멀어져요.', ending: '말다툼이 되어 준서가 더 마음을 닫았어요.' },
      { id: 'calm', text: '"걱정돼서 그랬어, 기분 나빴으면 미안"이라고 한다', result: '준서가 "아니, 나도 좀 예민했어"라고 한다.', impact: [{ who: '준서', text: '마음이 누그러진다', tone: 1 }], end: '걱정하는 마음을 전했어요.',
        next: { text: '준서가 "요즘 폰 없으면 불안해"라고 털어놓는다.', choices: [
          { id: 'fix', text: '"그냥 폰을 버려"라고 해결책부터 던진다', result: '준서가 "그게 쉬우면 안 했지"라며 웃음을 거둔다.', impact: [{ who: '준서', text: '이해받지 못한다', tone: -1 }], why: '먼저 들어 주고, 함께할 수 있는 작은 일부터 내요.', end: '해결책부터 던졌어요.',
            next: { text: '준서가 다시 폰을 꺼낸다.', choices: [
              { id: 'quit3', text: '"알아서 해"라고 돌아선다', result: '준서가 혼자 남는다.', impact: [{ who: '준서', text: '혼자 남는다', tone: -1 }], why: '한 번 어긋나도 다시 들어 줄 수 있어요.' },
              { id: 'redo', text: '"미안, 먼저 들을게. 언제 제일 힘들어?"라고 묻는다', result: '준서가 밤이 제일 힘들다고 말한다.', impact: [{ who: '준서', text: '말할 수 있게 된다', tone: 1 }] }] } },
          { id: 'hear', text: '"그랬구나, 언제 제일 그래?"라고 물으며 들어 준다', result: '준서가 밤에 잠들기 전이 제일 힘들다고 말한다.', impact: [{ who: '준서', text: '이해받는다', tone: 1 }], end: '끝까지 들어 줬어요.',
            next: { text: '준서가 "근데 어른한테는 말하기 싫어"라고 한다.', choices: [
              { id: 'secret', text: '"그래, 우리끼리 비밀로 하자"라고 약속한다', result: '준서의 밤은 그대로다.', impact: [{ who: '준서', text: '도움을 못 받는다', tone: -1 }], why: '걱정되는 일을 비밀로만 두면 도울 수 있는 어른이 없어요.' },
              { id: 'option', text: '"상담 선생님이나 1388도 있어, 같이 알아볼까?"라고 한다', result: '준서가 "1388은 전화로도 되나?"라며 관심을 보인다.', impact: [{ who: '준서', text: '도움 경로를 안다', tone: 1 }] }] } }] } },
      { id: 'walkaway', text: '"그래, 네 마음대로 해"라고 하고 다시는 말을 걸지 않는다', result: '준서가 혼자 남는다.', impact: [{ who: '준서', text: '혼자 남는다', tone: -1 }], why: '친구가 화를 내도 걱정하는 마음은 다시 전할 수 있어요.', ending: '다시는 말을 걸지 않아 준서가 혼자 남았어요.' }] };
    const ANGRY_R = [{ id: 'r1', text: '화를 내도 걱정하는 마음을 다시 전한다' }, { id: 'r2', text: '먼저 들어 주고 도움받을 곳을 함께 찾는다' },
      { id: 'r3', text: '친구가 비밀로 하자면 끝까지 지킨다', why: '걱정되는 일은 믿을 어른과 나눠야 도울 수 있어요.' },
      { id: 'r4', text: '바로 해결책을 말해 주는 것이 가장 좋다', why: '먼저 들어 주어야 친구가 해결책을 받아들여요.' }];
    const HELP = { grid: [6, 4], title: '가상의 우리 학교와 동네', places: [
      { name: '우리 반 교실', icon: 'school', at: [0, 0], legend: '우리 반 교실' }, { name: '상담실', icon: 'house', at: [1, 1], legend: '상담실' },
      { name: '보건실', icon: 'hospital', at: [0, 2], legend: '보건실' }, { name: '운동장', icon: 'park', at: [2, 3], legend: '운동장' },
      { name: '도서관', icon: 'library', at: [2, 0], legend: '도서관' }, { name: '버스 정류장', icon: 'bus', at: [3, 2], legend: '버스 정류장' },
      { name: '편의점', icon: 'market', at: [4, 0], legend: '편의점' }, { name: '청소년 상담 기관(1388)', icon: 'office', at: [5, 2], legend: '청소년 상담 기관' }] };

    ALL.push(
      // ---- 도입 ----
      M('intro.three-terms', {
        title: '과의존 세 신호 용어 잇기', method: '세 신호 용어와 뜻 잇기', tool: 'wordcards', minutes: 6,
        levels: { easy: '뜻 카드 옆에 예시 그림 단서(알람·하트·구름 그림)를 함께 보이고 잇는다.', base: '용어 3개와 뜻 3개를 잇는다.', challenge: '신호마다 가상 인물의 예를 하나씩 짝에게 말한다.' },
        intro: {
          teacher: '"폰을 오래 쓰면 곧 과의존일까요?" 세 신호 용어 카드를 띄우고 시연 단추로 용어와 뜻이 이어지는 모습을 보인다. "하루 몇 시간 넘으면 과의존"이라는 학생에게 "시간이 길어도 할 일을 다 하고 멈출 수 있다면 어떨까요? 시간보다 무엇을 봐야 할까요?"라고 되묻는다. 세 신호는 친구나 가상 인물의 상태를 이해하는 말이고, 서로를 진단하거나 놀리는 말로 쓰지 않는다고 미리 약속한다.',
          student: '\'조절 실패·현저성·문제적 결과\' 세 신호의 뜻을 이어 보고, 사용 시간과 무엇이 다른지 생각해요.',
          demo: { tool: 'wordcards', options: MB('', TERMS, [], { topic: '과의존 세 신호' }).toolOptions, sequence: [MB('', TERMS).target] },
          art: { draw: 'a paper-cut set of three signal lamps on a stand labeled with paper tags, a phone lying beside them and a teenager reading the tags thoughtfully', banner: '시간보다 신호를 봐요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '세 신호 용어는 사람 확인 목록에 있다. 학생끼리 서로를 \'과의존\'이라 부르지 않게 한다.',
      }),
      M('intro.month-line', {
        title: '하람이의 한 달 꺾은선 읽기', method: '가상 사례 한 달 사용 꺾은선 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '점마다 값을 보이고 변화가 가장 큰 주를 고른다.', base: '눈금을 읽어 가장 크게 늘어난 주·4주째 값·1주와 4주의 차이를 묻는 세 질문에 답한다(교사 발문).', challenge: '그래프만으로 하람이가 과의존이라 단정할 수 없는 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"하람이의 사용 시간이 가장 크게 늘어난 주는 언제일까요? 그 주에 무슨 일이 있었을까요?" 가상 사례 인물 하람이의 한 달 주별 사용 시간 꺾은선그래프(지어낸 자료)를 띄우고, 시연 단추로 3주를 고르는 모습을 보인다. "시간이 두 배가 넘었으니 과의존"이라는 학생에게 "시간은 늘었지만, 그만하려 할 때 멈추는지·생활에 문제가 생겼는지는 그래프에 있나요?"라고 되묻는다. 시간 그래프는 신호를 찾기 시작하는 단서일 뿐이라는 점을 짚는다.',
          student: '하람이의 한 달 꺾은선그래프에서 사용 시간이 가장 크게 늘어난 주를 찾고, 그래프만으로 알 수 없는 것이 무엇인지 생각해요.',
          demo: { tool: 'chart', options: CH('line', '하람이의 주별 사용 시간(가상 자료)', '시간', WEEKS, { xLabel: '주', yLabel: '사용 시간', question: '전 주보다 가장 크게 늘어난 주는?', choices: ['2주', '3주', '4주'] }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut line graph of four paper dots climbing a wall calendar, a sharp rise at the third week, a teenager holding a magnifying glass to the rise', banner: '그래프가 말해 주는 것과 못 하는 것', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '하람이와 그래프 값은 가상이다. 학생에게 자기 주별 사용 시간을 묻지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.signal-sort', {
        title: '하람이 사례 세 신호로 나누기', method: '사례 문장을 세 신호로 분류하고 근거 달기', tool: 'mindmap', minutes: 16,
        levels: { easy: '사례 문장 6장(신호마다 2장)을 세 칸에 나누고(놓으면 바로 맞는지 알려 줌), 근거 잇기도 두 칸만 한다.', base: '사례 문장 9장과 \'건강한 사용\' 문장 2장이 섞인 판에서 9장만 나누고, 칸마다 근거를 잇는다.', challenge: '마지막 문항에서 두 신호에 걸쳐 볼 수 있는 문장을 골라 담고, 판단 근거를 모둠에서 토의한다.' },
        activity: {
          title: '하람이 사례 세 신호로 나누기', tool: 'mindmap',
          teacher: '"\'성적이 떨어졌는데도 줄이지 않는다\'는 어느 신호일까요? 왜 그렇게 생각하나요?" 문장 카드를 칸에 놓을 때마다 근거를 한 사람씩 말하게 한다. "\'주말에 정한 시간만큼 게임한다\'도 과의존 아니에요?"라는 학생에게 "정한 만큼 하고 멈추고, 생활에 문제가 없다면 세 신호 가운데 어디에 들어갈까요?"라고 되묻는다. 건강한 사용 카드는 어느 칸에도 넣지 않고 남긴다.',
          task: '가상 인물 하람이의 사례 문장을 \'조절 실패·현저성·문제적 결과\' 칸에 나누고, 건강한 사용 문장은 남긴 뒤 칸마다 근거를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('하람이 사례 문장을 세 신호 칸에 나누고, 건강한 사용 문장은 남기세요.', SIG, CASE, { topic: '하람이의 세 신호' }),
              SB('하람이 사례 문장 6장을 세 신호 칸에 나누세요.', SIG, pickCards(CASE, ['h1', 'h2', 'h4', 'h5', 'h7', 'h8']), { topic: '하람이의 세 신호' })),
            IT(MB('세 신호마다 알맞은 판단 근거를 이어 보세요.', [['조절 실패', '스스로 정한 것을 지키지 못한다'], ['현저성', '다른 일보다 늘 먼저가 된다'], ['문제적 결과', '생활에 문제가 생겨도 멈추지 않는다']], ['사용 시간이 하루 몇 시간을 넘는다'], { topic: '판단 근거' }),
              MB('신호 두 개에 알맞은 판단 근거를 이어 보세요.', [['조절 실패', '스스로 정한 것을 지키지 못한다'], ['문제적 결과', '생활에 문제가 생겨도 멈추지 않는다']], [], { topic: '판단 근거' })),
            IT(PB('두 신호에 걸쳐 볼 수 있는 문장만 골라 담으세요.', '두 신호에 걸친 문장', [
              { id: 'b1', text: '잠을 줄여 가며 하다 지각이 잦은데 줄이지 못한다', ok: true }, { id: 'b2', text: '친구 약속을 잊을 만큼 폰만 생각하고, 다툼이 생겨도 계속한다', ok: true },
              { id: 'n1', text: '주말에 정한 시간만큼 친구와 게임한다' }, { id: 'n2', text: '숙제를 마치고 30분 영상을 본다' }], { topic: '걸친 문장' }),
              PB('두 신호에 걸쳐 볼 수 있는 문장 하나를 골라 담으세요.', '두 신호에 걸친 문장', [
                { id: 'b1', text: '잠을 줄여 가며 하다 지각이 잦은데 줄이지 못한다', ok: true }, { id: 'n1', text: '주말에 정한 시간만큼 친구와 게임한다' }], { topic: '걸친 문장' }),
              PB('두 신호에 걸친 문장만 골라 담고, 어느 두 신호인지 모둠과 토의하세요.', '두 신호에 걸친 문장', [
                { id: 'b1', text: '잠을 줄여 가며 하다 지각이 잦은데 줄이지 못한다', ok: true }, { id: 'b2', text: '친구 약속을 잊을 만큼 폰만 생각하고, 다툼이 생겨도 계속한다', ok: true },
                { id: 'b3', text: '그만두려 해도 안 되고, 시험공부보다 폰이 먼저다', ok: true },
                { id: 'n1', text: '주말에 정한 시간만큼 친구와 게임한다' }, { id: 'n2', text: '숙제를 마치고 30분 영상을 본다' }, { id: 'n3', text: '과제 자료를 찾느라 1시간 검색했다' }], { topic: '걸친 문장' }),
              { conclude: '과의존은 사용 시간이 아니라 조절 실패·현저성·문제적 결과라는 신호로 살펴요. 한 문장에 두 신호가 함께 보이기도 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 신호마다 하람이 사례 문장 하나와 근거를 써요.', columns: ['신호', '사례 문장', '근거'], cells: [['조절 실패', '', ''], ['현저성', '', ''], ['문제적 결과', '', '']], answer: '(예) 알람을 꺼도 계속한다 — 정한 것을 못 지킴 / 수업 중에도 생각만 난다 — 늘 먼저 / 지각이 잦아도 계속한다 — 문제가 생겨도 멈추지 않음' }],
          easy: [{ type: 'choice', prompt: '\'조절 실패\'에 해당하는 문장에 ○ 해요.', options: ['알람을 맞춰도 끄고 계속한다', '숙제를 마치고 30분 영상을 본다'], answer: '알람을 맞춰도 끄고 계속한다' }] },
      }),
      M('activity.friend-dilemma', {
        title: '친구에게 신호가 보일 때', method: '친구에게 신호가 보일 때 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번을 골라 결과를 보고, 근거 카드는 고르지 않는다.', base: '갈림길 세 번을 골라 관계와 친구 상태가 어떻게 이어지는지 끝까지 가고 근거 카드를 고른다.', challenge: '되돌아가 다른 길도 끝까지 가 보고, 들어 주기·함께하기·어른에게 알리기의 순서 근거까지 고른다.' },
        activity: {
          title: '친구에게 신호가 보일 때', tool: 'dilemma',
          teacher: '"친구의 사용 습관은 내가 상관할 일이 아닐까요?" 학생마다 한 길을 끝까지 가 본 뒤, 모른 척·놀리기·함께하기·어른에게 알리기 길의 결과를 견주게 한다. "선생님께 말하면 고자질"이라는 학생에게 "걱정돼서 알리는 것과 혼내 주려고 이르는 것은 무엇이 다를까요?"라고 되묻는다. 둘째 장면은 친구가 화를 낼 때의 장면이다. 장면 속 준서는 가상 인물이며, 반 친구 이름을 대며 이야기하지 않게 한다.',
          task: '같은 반 가상 친구 준서에게 과의존 신호가 보이는 장면에서 길을 골라 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '준서에게 신호가 보여요. 두 번 골라 결과를 보세요.', base: '준서에게 신호가 보여요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '준서에게 신호가 보여요. 끝 장면 두 개 이상을 가 보고 돕는 순서 근거까지 고르세요.' },
              '점심시간의 준서', FRIEND, [['invite', 'listen', 'go'], ['adult', 'honest', 'together']], FRIEND_R, ['r1', 'r2'], Object.assign({ explore: 2 }, FRIEND_MORE)),
            DIL({ easy: '준서가 "네가 뭔데"라며 화를 내요. 두 번 골라 결과를 보세요.', base: '준서가 "네가 뭔데"라며 화를 내요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '준서가 화를 내요. 끝까지 가 보고 도움 경로 근거까지 고르세요.' },
              '화를 내는 준서', ANGRY, [['calm', 'hear', 'option']], ANGRY_R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '1388은 학교 밖에서도 상담받을 수 있는 길이다' }], ok: ['r5'] },
              { conclude: '친구에게 신호가 보이면 놀리거나 모른 척하지 않고, 들어 주고 함께할 일을 내며, 걱정되면 믿을 어른에게 알려요.' }),
            { prompt: '두 장면에서 친구를 돕는 말 가운데 가장 좋았던 말을 짝과 고르고 까닭을 말해요.', free: true, toolOptions: { title: '점심시간의 준서', scene: cut(FRIEND, 3), reasons: [], compare: true } },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구에게 신호가 보일 때 처음 건넬 말 한 문장을 써요(비난하지 않는 말로).' }],
          easy: [{ type: 'choice', prompt: '친구를 돕는 말에 ○ 해요.', options: ['"같이 운동장 한 바퀴 돌래?"', '"너 게임 중독이냐?"'], answer: '"같이 운동장 한 바퀴 돌래?"' }] },
        notes: '준서는 가상 인물이다. 학생에게 주변 친구의 실명이나 실제 상태를 발표시키지 않는다. 걱정되는 친구 이야기를 하는 학생은 수업 뒤 따로 듣는다.',
      }),
      M('activity.advice-letter', {
        title: '하람이에게 조언 편지 쓰기', method: '사례 인물에게 조언 편지 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 따라 문단마다 한두 문장(모두 세 문장 안팎)을 쓰고 기준 2개로 점검한다.', base: '편지 한 편을 세 문단(신호 짚기·대안·도움 경로)으로 쓰고 기준 4개로 점검한다.', challenge: '하람이 보호자에게 보낼 문단까지 쓰고 기준을 더해 점검한다.' },
        activity: {
          title: '하람이에게 조언 편지 쓰기', tool: 'rubric-writing',
          teacher: '"\'너 폰 중독이야, 당장 끊어\'와 \'요즘 알람을 꺼도 계속하게 된다고 했지? 저녁 산책을 같이 해 보자\' 가운데 하람이는 어느 편지를 끝까지 읽을까요?" 두 문장을 견주어 읽은 뒤 문단마다 기준표를 함께 본다. "과의존은 혼자 이겨 내야 한다"는 학생에게 편지에 도움받을 곳(상담실·보호자·1388)을 하나 이상 넣게 한다. 편지에 실제 친구 이름을 쓰지 않게 한다.',
          task: '가상 인물 하람이에게 신호를 짚어 주고, 구체적인 대안과 도움받을 곳을 담은 조언 편지를 쓴 뒤 기준표로 고쳐요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 하람이에게 보이는 신호를 비난 없이 짚어 쓰세요.',
              { topic: '첫 문단 — 하람이에게 보이는 과의존 신호 하나 이상을 하람이의 행동을 들어 비난 없이 짚어 2~3문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 4, title: '조언 편지 ① 신호', lines: 4 },
              ['신호를 정확히 짚었다', '하람이의 행동을 예로 들었다', '비난하거나 겁주지 않았다'],
              { prompt: '첫 문단: 틀을 따라 하람이의 신호를 한 문장으로 쓰세요.', toolOptions: { starter: '하람아, 요즘 ___하는 모습이 걱정돼.', minSentences: 1, minChars: 15 }, crit: ['신호를 정확히 짚었다', '비난하거나 겁주지 않았다'] }),
            RW('둘째 문단: 하람이가 해 볼 수 있는 구체적인 대안을 쓰세요.',
              { topic: '둘째 문단 — 하람이가 오늘부터 해 볼 수 있는 대안을 언제·무엇을이 드러나게 2~3문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 4, title: '조언 편지 ② 대안', lines: 4 },
              ['대안이 구체적이다(언제·무엇을)', '하람이가 실제로 해 볼 수 있다', '함께할 수 있는 일을 냈다'],
              { prompt: '둘째 문단: 틀을 따라 대안을 한 문장으로 쓰세요.', toolOptions: { starter: '___ 때 ___ 해 보면 어때?', minSentences: 1, minChars: 15 }, crit: ['대안이 구체적이다(언제·무엇을)', '하람이가 실제로 해 볼 수 있다'] }),
            RW('셋째 문단: 하람이가 도움받을 수 있는 곳을 알려 주세요.',
              { topic: '셋째 문단 — 하람이가 도움받을 수 있는 곳(상담실·보건실·보호자·1388 등)과 언제 찾아가면 좋은지 2~3문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 4, title: '조언 편지 ③ 도움 경로', lines: 4 },
              ['도움 경로를 하나 이상 썼다', '언제 찾아가면 좋은지 썼다', '함께 가 줄 수 있다고 썼다'],
              { prompt: '셋째 문단: 틀을 따라 도움받을 곳을 한 문장으로 쓰세요.', toolOptions: { starter: '힘들면 ___에 같이 가 보자.', minSentences: 1, minChars: 10 }, crit: ['도움 경로를 하나 이상 썼다', '함께 가 줄 수 있다고 썼다'] },
              { prompt: '셋째 문단과 함께, 하람이 보호자에게 보낼 문단(걱정과 함께할 일)도 이어 쓰세요.', toolOptions: { topic: '셋째 문단 + 보호자 문단 — 도움받을 곳을 알려 준 뒤, 하람이 보호자에게 걱정되는 신호와 집에서 함께할 일을 이어 쓰세요(4~6문장).', maxSentences: 6, maxChars: 360, lines: 6 }, crit: ['도움 경로를 하나 이상 썼다', '언제 찾아가면 좋은지 썼다', '함께 가 줄 수 있다고 썼다', '보호자에게 비난 없이 신호를 전했다', '집에서 함께할 일을 냈다'] },
              { conclude: '좋은 조언 편지는 신호를 정확히 짚되 비난하지 않고, 구체적인 대안과 도움받을 곳을 함께 담아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 편지를 기준표로 점검해요.', options: ['신호를 정확히 짚었다', '비난하지 않았다', '대안이 구체적이다', '도움 경로가 있다'] }] },
      }),
      M('activity.help-map', {
        title: '학교 안팎 도움 경로 지도', method: '학교 안팎 도움 경로 지도', tool: 'map', minutes: 16,
        levels: { easy: '지도에 장소 이름이 보이고 핀을 꽂으면 그 칸 이름이 바로 읽힌다.', base: '장소 이름을 숨긴 지도에서 범례 기호를 보고 핀을 꽂는다(문항마다 핀 하나, 모두 네 곳).', challenge: '이름을 숨긴 지도에 헷갈리는 장소가 더해지고, 마지막 문항에서 친구를 데려갈 때 할 말을 고른다.' },
        activity: {
          title: '학교 안팎 도움 경로 지도', tool: 'map',
          teacher: '"하람이가 \'도움을 받고 싶다\'고 할 때, 학교 안에서는 어디로, 학교 밖에서는 어디로 갈 수 있을까요?" 핀을 꽂을 때마다 그곳에 언제 찾아가면 좋은지 한 줄로 말하게 한다. "상담실은 큰 문제가 있는 사람만 가는 곳"이라는 학생에게 "고민이 작을 때 가면 더 쉬울까요, 어려울까요?"라고 되묻는다. 1388은 학교 밖에서도 전화로 상담받을 수 있는 번호라는 점을 짚는다. 지도는 가상의 학교와 동네다.',
          task: '가상의 학교·동네 지도에 상담실·보건실·담임 교실·청소년 상담 기관(1388) 핀을 꽂고, 핀마다 언제 찾아가면 좋은지 정해요.',
          levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false, extra: ['진로실', '행정실'] } },
          items: [
            PIN('고민을 털어놓고 상담 선생님과 이야기하고 싶을 때 갈 곳에 핀을 꽂으세요.', HELP, { place: '상담실' }, { difficulty: 0.2 }),
            PIN('밤잠을 못 자 수업 중에 머리가 아프고 어지러울 때 갈 곳에 핀을 꽂으세요.', HELP, { place: '보건실' }, { difficulty: 0.2 }),
            PIN('친구가 걱정될 때 먼저 담임 선생님께 말씀드리러 갈 곳에 핀을 꽂으세요.', HELP, { place: '우리 반 교실' }, { difficulty: 0.25 }),
            PIN('주말이나 저녁에 학교 밖에서 상담받을 수 있는 곳(전화 1388)에 핀을 꽂으세요.', HELP, { place: '청소년 상담 기관(1388)' }, { difficulty: 0.25 }),
            IT(PIN('하람이와 함께 상담실에 갈 때 내가 먼저 할 말을 지도 옆 보기에서 고르세요.', Object.assign({}, HELP, { readOnly: true, ask: { q: '친구를 데려갈 때 할 말은?', choices: ['"내가 먼저 노크할게, 같이 들어가자"', '"너 혼자 들어가, 난 갈게"', '"선생님께 네가 중독이라고 말할게"'] } }), { pick: 0 }, { difficulty: 0.2 }),
              null, null, { conclude: '학교 안에서는 담임·상담실·보건실, 학교 밖에서는 보호자와 1388이 도움 경로예요. 친구를 데려갈 때는 한 걸음 같이 가 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 경로마다 언제 찾아가면 좋은지 써요.', columns: ['도움 경로', '언제 찾아갈까'], cells: [['상담실', ''], ['보건실', ''], ['담임 선생님', ''], ['1388', '']], answer: '(예) 고민을 털어놓고 싶을 때, 몸이 안 좋을 때, 친구가 걱정될 때, 학교 밖·저녁·주말에' }],
          easy: [{ type: 'choice', prompt: '학교 밖에서 전화로 상담받을 수 있는 번호에 ○ 해요.', options: ['1388', '119'], answer: '1388' }] },
        notes: '지도는 가상이다. 학생의 집 위치나 다니는 곳을 묻지 않는다. 지도 교구는 문항마다 핀 하나라 네 곳을 문항 넷으로 나눴다.',
      }),

      // ---- 정리 ----
      M('wrap.signal-map', {
        title: '과의존 세 신호 정리 마인드맵', method: '세 신호 정리 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '신호 가지 3개에 뜻 카드를 하나씩 붙인다.', base: '가지마다 뜻·예 카드 두 장씩 붙인다.', challenge: '가지마다 뜻·예·알아차리는 질문 카드 세 장씩 붙이고(함정 카드 두 장), 가장 알아차리기 어려운 신호와 까닭을 쓴다.' },
        wrap: {
          teacher: '"세 신호 가운데 가장 알아차리기 어려운 신호는 무엇일까요? 왜 그럴까요?" 가지에 카드를 다 붙이면 몇 명에게 까닭을 듣는다. "시간만 보면 알 수 있다"는 말에는 오늘 하람이 그래프와 사례 문장을 다시 짚는다. 정리는 하람이·준서 같은 가상 인물로 하고 학생 자신을 판정하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '과의존 세 신호', slots: SIG, cards: [
              { id: 'a1', text: '뜻: 그만하려 해도 잘 안 됨' }, { id: 'a2', text: '예: 알람을 꺼도 계속한다' },
              { id: 'b1', text: '뜻: 생활에서 가장 중요한 일이 됨' }, { id: 'b2', text: '예: 수업 중에도 생각만 난다' },
              { id: 'c1', text: '뜻: 문제가 생겨도 계속함' }, { id: 'c2', text: '예: 지각이 잦아도 줄이지 않는다' }] },
              prompt: '신호 가지마다 뜻과 예 카드를 붙여요.', target: { sort: { '조절 실패': ['a1', 'a2'], 현저성: ['b1', 'b2'], '문제적 결과': ['c1', 'c2'] } }, difficulty: 0.25 },
            { prompt: '신호 가지마다 뜻 카드를 하나씩 붙여요.', toolOptions: { cards: [{ id: 'a1', text: '뜻: 그만하려 해도 잘 안 됨' }, { id: 'b1', text: '뜻: 생활에서 가장 중요한 일이 됨' }, { id: 'c1', text: '뜻: 문제가 생겨도 계속함' }] }, target: { sort: { '조절 실패': ['a1'], 현저성: ['b1'], '문제적 결과': ['c1'] } } },
            { prompt: '가지마다 뜻·예·알아차리는 질문을 붙이고 함정 카드는 남겨요.', toolOptions: { cards: [
              { id: 'a1', text: '뜻: 그만하려 해도 잘 안 됨' }, { id: 'a2', text: '예: 알람을 꺼도 계속한다' }, { id: 'a3', text: '질문: 정한 만큼에서 멈추나?' },
              { id: 'b1', text: '뜻: 생활에서 가장 중요한 일이 됨' }, { id: 'b2', text: '예: 수업 중에도 생각만 난다' }, { id: 'b3', text: '질문: 다른 일보다 늘 먼저인가?' },
              { id: 'c1', text: '뜻: 문제가 생겨도 계속함' }, { id: 'c2', text: '예: 지각이 잦아도 줄이지 않는다' }, { id: 'c3', text: '질문: 잠·관계·공부가 흔들리나?' },
              { id: 't1', text: '질문: 하루 몇 시간 넘게 쓰나?' }, { id: 't2', text: '예: 숙제를 마치고 30분 본다' }] },
              target: { sort: { '조절 실패': ['a1', 'a2', 'a3'], 현저성: ['b1', 'b2', 'b3'], '문제적 결과': ['c1', 'c2', 'c3'] } } }),
            { type: 'choice', prompt: '"사용 시간이 길면 곧 과의존이다"는 말을 고친 것으로 가장 알맞은 것은?', options: ['시간과 상관없이 폰은 모두 해롭다', '시간보다 조절 실패·현저성·문제적 결과 신호를 살핀다', '하루 한 시간이 넘으면 과의존이다'], answer: 1, difficulty: 0.2, explain: '시간이 길어도 멈출 수 있고 생활에 문제가 없을 수 있어요. 세 신호를 함께 봐요.' },
            { type: 'short', prompt: '세 신호 가운데 가장 알아차리기 어려운 신호와 그 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '과의존 세 신호',
          items: [
            { type: 'table', prompt: '신호마다 뜻과 알아차리는 질문을 써요.', columns: ['신호', '뜻', '알아차리는 질문'], cells: [['조절 실패', '', ''], ['현저성', '', ''], ['문제적 결과', '', '']], answer: '그만하려 해도 안 됨·정한 만큼에서 멈추나, 가장 중요한 일이 됨·늘 먼저인가, 문제가 생겨도 계속함·잠·관계·공부가 흔들리나' },
            { type: 'short', prompt: '"과의존은 혼자 이겨 내야 한다"는 말에 오늘 배운 도움 경로를 들어 반박해요.' },
          ],
          easy: { note: '뜻만 써도 돼요.', items: [{ type: 'choice', prompt: '\'현저성\'의 뜻에 ○ 해요.', options: ['생활에서 가장 중요한 일이 됨', '그만하려 해도 잘 안 됨'], answer: '생활에서 가장 중요한 일이 됨' }] },
        },
      }),
      M('wrap.self-check', {
        title: '세 신호 스스로 점검(혼자 보기)', method: '나의 세 신호 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 과정 3줄(세 신호의 뜻 떠올리기)에 표시하고, 활동지 \'혼자 보기\' 칸에 내 모습을 적는다.', base: '점검 과정 6줄(세 신호 떠올리기·혼자 보기 칸 채우기·찾아갈 곳 정하기·친구를 도울 말 정하기)에 표시한다.', challenge: '6줄에 \'한 달 뒤 다시 점검할 날짜 정하기\'를 더해 표시하고, 날짜를 활동지에 적는다.' },
        wrap: {
          teacher: '"오늘 배운 세 신호로 나를 살펴본다면, 그 결과는 누구에게 보여 줘야 할까요?" 활동지 \'혼자 보기\' 칸은 걷지 않고 발표시키지 않는다고 먼저 약속한다. 판의 점검표는 내 상태가 아니라 \'점검을 해 보았는지\'만 표시하는 칸이다. "나는 신호가 하나 있으니 끝났다"는 학생에게는 신호를 알아차린 것 자체가 바꾸기의 시작이고, 걱정되면 찾아갈 곳(상담실·보호자·1388)이 있다고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '세 신호 스스로 점검 — 해 본 것에 표시' },
              prompt: '스스로 점검을 하며 해 본 것에 모두 표시해요(맞고 틀림이 없어요).', target: { selfCheck: ['조절 실패의 뜻을 떠올려 보았다', '현저성의 뜻을 떠올려 보았다', '문제적 결과의 뜻을 떠올려 보았다', '활동지 혼자 보기 칸을 채웠다', '걱정되면 찾아갈 곳 하나를 정했다', '친구를 도울 때 할 말을 정했다'] }, difficulty: 0.1 },
            { prompt: '세 신호의 뜻을 떠올려 본 것에 표시해요(맞고 틀림이 없어요).', target: { selfCheck: ['조절 실패의 뜻을 떠올려 보았다', '현저성의 뜻을 떠올려 보았다', '문제적 결과의 뜻을 떠올려 보았다'] } },
            { prompt: '스스로 점검을 하며 해 본 것에 모두 표시해요(한 달 뒤 날짜 포함).', target: { selfCheck: ['조절 실패의 뜻을 떠올려 보았다', '현저성의 뜻을 떠올려 보았다', '문제적 결과의 뜻을 떠올려 보았다', '활동지 혼자 보기 칸을 채웠다', '걱정되면 찾아갈 곳 하나를 정했다', '친구를 도울 때 할 말을 정했다', '한 달 뒤 다시 점검할 날짜를 정했다'] } }),
            { type: 'choice', prompt: '스스로 점검에서 걱정되는 신호가 보일 때 가장 알맞은 행동은?', options: ['아무에게도 말하지 않고 혼자 참는다', '상담실·보호자·1388 가운데 한 곳에 이야기한다', '친구들에게 내 점검 결과를 보여 준다'], answer: 1, difficulty: 0.15, explain: '과의존은 혼자 이겨 내기 어려워요. 믿을 어른과 나눠요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '세 신호 스스로 점검(혼자 보기 — 걷지 않아요)',
          items: [
            { type: 'check', prompt: '요즘 내 모습에 해당하는 칸에 혼자 표시해요(아무에게도 보여 주지 않아도 돼요).', options: ['그만하려 해도 잘 안 될 때가 있다', '다른 일보다 폰이 먼저일 때가 있다', '잠·관계·공부가 흔들려도 계속할 때가 있다'] },
            { type: 'short', prompt: '걱정되면 찾아갈 곳 하나와, 한 달 뒤 다시 점검할 날짜를 적어요.' },
          ],
          easy: { note: '표시만 해도 돼요.', items: [{ type: 'check', prompt: '요즘 내 모습에 해당하는 칸에 혼자 표시해요.', options: ['그만하려 해도 잘 안 될 때가 있다', '다른 일보다 폰이 먼저일 때가 있다'] }] },
        },
        notes: '계획은 \'지금 내 모습을 표시\'이지만, 학생 자신의 습관을 판정·제출하지 않도록 판(타이머 스스로 점검)에는 점검 과정만 표시하고, 내 모습은 걷지 않는 활동지 \'혼자 보기\' 칸에 둔다. 걱정을 말하는 학생은 수업 뒤 따로 듣고 상담실과 잇는다.',
      }),
    );
  }

  // ==== 9학년 · 또래 디지털 습관 캠페인 만들기 (saf-cyber.m.campaign) ====
  {
    const M = MK('campaign', [9]);
    const HABIT = [['잠들기 전 사용', 120], ['공부 중 알림', 85], ['단체방 늦은 시간', 70], ['게임 시간', 45]];
    const PLAN = [
      { id: 'p1', text: '1학년 학생들', to: '누구에게' }, { id: 'p2', text: '잠들기 전에 폰을 쓰는 친구들', to: '누구에게' },
      { id: 'p3', text: '잠들기 전 폰을 거실에 두기', to: '무엇을' }, { id: 'p4', text: '밤 10시 이후 단체방 알림 끄기', to: '무엇을' },
      { id: 'p5', text: '쉬는 시간 역할극 대본 공연', to: '어떻게' }, { id: 'p6', text: '7일 실천 챌린지 열기', to: '어떻게' },
      { id: 'p7', text: '챌린지 기록판의 칸 세기', to: '어떻게 확인' }, { id: 'p8', text: '캠페인 전후 짧은 설문 견주기', to: '어떻게 확인' }];
    const TRAP = [{ id: 'x1', text: '폰을 쓰면 뇌가 망가진다고 겁주기' }, { id: 'x2', text: '모든 습관을 한꺼번에 바꾸자고 하기' }];
    const BRANCH = ['누구에게', '무엇을', '어떻게', '어떻게 확인'];
    const SLOGAN = [
      { id: 'm1', text: '잠들기 전, 폰은 거실에서 쉬게 해요', to: '행동 제시형' }, { id: 'm2', text: '오늘 밤 10시, 단체방 알림 끄기', to: '행동 제시형' },
      { id: 'm3', text: '나도 멈추기 어려웠어, 같이 해 보자', to: '공감형' }, { id: 'm4', text: '피곤한 아침, 너만 그런 거 아니야', to: '공감형' },
      { id: 'm5', text: '폰 오래 하면 뇌가 망가진다!', to: '공포형' }, { id: 'm6', text: '이대로면 인생 끝난다', to: '공포형' },
      { id: 'm7', text: '아직도 폰만 보는 한심한 너', to: '비난형' }, { id: 'm8', text: '중독자들 때문에 반 분위기가 엉망', to: '비난형' }];
    const KIND4 = ['행동 제시형', '공감형', '공포형', '비난형'];
    const CHAT = [30, 30, 0, 30, 30, 15, 30];

    ALL.push(
      // ---- 도입 ----
      M('intro.school-survey', {
        title: '가상 전교 설문 막대 읽기', method: '가상 전교 설문 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 응답 수를 보이고 가장 높은 막대를 고른다.', base: '막대의 순위와 1·2위 차이를 함께 읽고(교사 발문) 캠페인 주제 후보를 고른다.', challenge: '설문 문항의 한계(한 사람이 하나만 골랐는지, 누가 답했는지) 하나를 짝과 짚는다.' },
        intro: {
          teacher: '"우리 캠페인은 무엇부터 바꿔 보자고 할까요? 감으로 정할까요, 자료로 정할까요?" 가상 전교 설문 \'바꾸고 싶은 디지털 습관\' 막대그래프(지어낸 자료)를 띄우고, 시연 단추로 가장 높은 막대를 고르는 모습을 보인다. 이어 "1위와 2위는 몇 명 차이인가요?"를 함께 읽는다. "1위만 하면 된다"는 학생에게 "2위인 \'공부 중 알림\'을 바꾸고 싶은 친구는 몇 명이나 될까요?"라고 되묻는다. 자료는 가상이고 학교에서 실제로 설문하지 않았다는 점을 밝힌다.',
          student: '가상 전교 설문 막대그래프에서 가장 많은 친구가 바꾸고 싶어 하는 습관을 찾고, 우리 캠페인 주제 후보를 하나 골라요.',
          demo: { tool: 'chart', options: CH('bar', '바꾸고 싶은 디지털 습관(가상 전교 설문)', '명', HABIT, { xLabel: '습관', yLabel: '응답 수', question: '가장 많이 고른 습관은?', choices: HABIT.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut school hallway bulletin board with a paper bar chart, students pinning small paper cards and a megaphone made of folded paper', banner: '우리 캠페인은 무엇부터?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '설문 값은 수업용 가상 자료다.',
      }),
      M('intro.two-campaigns', {
        title: '두 캠페인 사례 견주기', method: '두 캠페인 사례 비교', tool: 'story', minutes: 6,
        levels: { easy: '차이 보기 3장(맞는 차이 2장·함정 1장)에서 고른다.', base: '차이 보기 5장 가운데 효과를 가른 차이 2장을 고른다.', challenge: '우리 학교에 맞는 쪽과 그 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"겁주는 포스터를 붙인 캠페인과 \'폰 없는 저녁 30분\' 챌린지를 연 캠페인, 일주일 뒤 무엇이 달랐을까요?" 두 가상 학교의 캠페인 이야기를 들려주고, 시연 단추로 효과를 가른 차이 카드가 바구니에 담기는 모습을 보인다. "겁을 줄수록 효과가 크다"는 학생에게 "무서운 포스터를 본 다음 날 밤, 무엇을 해야 할지 알 수 있을까요?"라고 되묻는다.',
          student: '두 가상 캠페인 이야기를 읽고 효과를 가른 차이를 골라 보고, 우리 학교에는 어느 쪽이 맞을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '효과를 가른 차이', title: '두 학교의 캠페인', cards: [
            { id: 'e1', text: '할 행동 하나를 알려 주었다', motif: 'sun' }, { id: 'e2', text: '함께 해 볼 기간과 기록판이 있었다', motif: 'leaf' },
            { id: 'e3', text: '친구를 탓하지 않는 말을 썼다', motif: 'flower' }, { id: 'e4', text: '포스터 크기가 더 컸다', motif: 'cloud' }, { id: 'e5', text: '무서운 그림이 더 많았다', motif: 'moon' }], shuffle: false },
            sequence: [{ pick: ['e1', 'e2'] }] },
          art: { draw: 'a paper-cut split wall: on one side a scary dark paper poster students walk past, on the other side a bright paper challenge board where students add stickers', banner: '두 캠페인, 무엇이 달랐을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '두 캠페인은 가상 사례다.',
      }),

      // ---- 활동 ----
      M('activity.target-map', {
        title: '캠페인 대상·메시지·방법 설계', method: '캠페인 대상·메시지·방법 모둠 설계', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(누구에게·무엇을)에 계획 카드 4장을 붙이고(놓으면 바로 맞는지 알려 줌), 방법과 확인 방법 짝은 두 쌍만 잇는다.', base: '가지 4개에 계획 카드 8장을 붙이고, 행동 하나를 권하는 메시지를 골라 담고, 방법과 확인 방법을 잇는다.', challenge: '함정 카드가 섞인 판에서 붙이고, 가지마다 역할 담당자와 날짜는 활동지에 모둠이 적는다.' },
        activity: {
          title: '캠페인 대상·메시지·방법 설계', tool: 'mindmap',
          teacher: '"\'디지털 습관을 바르게!\'는 누구에게, 무엇을 하자는 캠페인일까요?" 모둠이 계획 카드를 가지에 붙이며 대상과 행동을 하나로 좁히게 한다. "캠페인은 포스터 한 장이면 된다"는 학생에게 "포스터를 본 친구가 정말 바뀌었는지는 어떻게 알 수 있을까요?"라고 되묻고 \'어떻게 확인\' 가지를 짚는다. 모둠 토의에서 특정 친구를 대상으로 지목하지 않게 한다.',
          task: '가운데 \'우리 캠페인\'에 \'누구에게·무엇을·어떻게·어떻게 확인\' 가지를 채우고, 행동 하나를 권하는 메시지를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('계획 카드를 캠페인 가지에 붙이세요.', BRANCH, PLAN, { topic: '우리 캠페인' }),
              SB('계획 카드 4장을 두 가지에 붙이세요.', ['누구에게', '무엇을'], pickCards(PLAN, ['p1', 'p2', 'p3', 'p4']), { topic: '우리 캠페인' }),
              SB('계획 카드를 캠페인 가지에 붙이고 함정 카드는 남기세요.', BRANCH, [...PLAN, ...TRAP], { topic: '우리 캠페인' })),
            IT(PB('\'무엇을\' 가지에 넣을, 행동 하나를 권하는 메시지만 골라 담으세요.', '행동 하나를 권하는 메시지', [
              { id: 'w1', text: '잠들기 전, 폰은 거실에 두자', ok: true }, { id: 'w2', text: '공부할 때 알림 끄고 30분', ok: true },
              { id: 'w3', text: '디지털 습관을 바르게!' }, { id: 'w4', text: '폰을 줄이고 공부도 하고 운동도 하자' }], { topic: '메시지 고르기' }),
              PB('행동 하나를 권하는 메시지 하나를 골라 담으세요.', '행동 하나를 권하는 메시지', [
                { id: 'w1', text: '잠들기 전, 폰은 거실에 두자', ok: true }, { id: 'w3', text: '디지털 습관을 바르게!' }], { topic: '메시지 고르기' })),
            IT(MB('캠페인 방법마다 알맞은 확인 방법을 이어 보세요.', [['7일 실천 챌린지', '기록판에 채운 칸 수 세기'], ['역할극 대본 공연', '공연 뒤 "따라 해 볼 수 있다" 손 들기'], ['복도 게시판', '게시 전후 짧은 설문 견주기']], ['포스터를 예쁘게 만들기'], { topic: '어떻게 확인할까?' }),
              MB('캠페인 방법 두 개에 확인 방법을 이어 보세요.', [['7일 실천 챌린지', '기록판에 채운 칸 수 세기'], ['복도 게시판', '게시 전후 짧은 설문 견주기']], [], { topic: '어떻게 확인할까?' }),
              null, { conclude: '좋은 캠페인은 대상을 좁히고, 행동 하나를 권하고, 그 행동이 일어났는지 확인할 방법까지 정해 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 캠페인 계획을 써요(담당자는 별명·역할 이름으로).', columns: ['가지', '내용', '담당·날짜'], cells: [['누구에게', '', ''], ['무엇을', '', ''], ['어떻게', '', ''], ['어떻게 확인', '', '']], answer: '(모둠 설계 — 정답 없음)' }],
          easy: [{ type: 'choice', prompt: '행동 하나를 권하는 메시지에 ○ 해요.', options: ['잠들기 전, 폰은 거실에 두자', '디지털 습관을 바르게!'], answer: '잠들기 전, 폰은 거실에 두자' }] },
      }),
      M('activity.role-script', {
        title: '밤 11시 단체방 역할극 대본', method: '단체방 역할극 대본 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '대본 틀을 따라 4줄로 쓰고 기준 2개(현실적인가·누구도 탓하지 않나)로 점검한다.', base: '대본을 6~8줄로 쓰고 기준 3개(현실적인가·누구도 탓하지 않나·따라 하기 쉬운가)로 점검한 뒤, 이어 쓰기와 고쳐 쓰기를 한다.', challenge: '말하지 못하고 있던 친구를 배려하는 대사까지 넣고 기준 4개로 점검한다.' },
        activity: {
          title: '밤 11시 단체방 역할극 대본', tool: 'rubric-writing',
          teacher: '"밤 11시, 단체방 대화가 한창일 때 \'나 먼저 잘게\'를 꺼내기 어려운 까닭은 무엇일까요?" 까닭(분위기를 깰까 봐, 혼자 빠질까 봐)을 들은 뒤, 그 마음을 풀어 주는 대본을 쓰게 한다. "그냥 말없이 나가면 된다"는 학생에게 "말없이 사라진 친구를 다른 친구들은 어떻게 생각할까요?"라고 되묻는다. 이 대본은 캠페인 공연에 쓰인다고 알리고, 인물은 가명으로 쓰게 한다.',
          task: '밤 11시 단체 대화방에서 "나 먼저 잘게, 내일 얘기하자"를 자연스럽게 말하는 역할극 대본을 쓰고, 기준표로 고쳐요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('밤 11시 단체방에서 "나 먼저 잘게, 내일 얘기하자"를 전하는 대본을 쓰세요.',
              { topic: '밤 11시 단체 대화방, 대화가 한창이다. 한 친구가 "나 먼저 잘게, 내일 얘기하자"를 자연스럽게 꺼내는 대본을 6~8줄로 쓰세요(인물은 가명).', minChars: 60, maxChars: 420, minSentences: 4, maxSentences: 10, title: '밤 11시 단체방 대본', lines: 8 },
              ['실제 단체방처럼 현실적이다', '누구도 탓하지 않는다', '다른 친구가 따라 하기 쉽다'],
              { prompt: '틀을 따라 단체방 대본을 4줄로 쓰세요.', toolOptions: { starter: '친구1: "___ ㅋㅋ" / 나: "나 먼저 잘게, ___" / 친구2: "벌써?" / 나: "___, 내일 얘기하자!"', minSentences: 3, minChars: 30 }, crit: ['실제 단체방처럼 현실적이다', '누구도 탓하지 않는다'] },
              { prompt: '단체방 대본에 말하지 못하고 있던 친구를 배려하는 대사까지 넣어 쓰세요.', crit: ['실제 단체방처럼 현실적이다', '누구도 탓하지 않는다', '다른 친구가 따라 하기 쉽다', '말하지 못한 친구를 배려하는 대사가 있다'] }),
            RW('친구가 "벌써? 재미없게"라고 할 때 이어 갈 대본을 쓰세요.',
              { topic: '내가 "먼저 잘게"라고 하자 친구가 "벌써? 재미없게"라고 한다. 분위기를 깨지 않고 나가는 대본을 3~5줄로 쓰세요(인물은 가명).', minChars: 30, maxChars: 240, minSentences: 3, maxSentences: 6, title: '"벌써?"라고 할 때', lines: 5 },
              ['다시 분명하게 나간다', '누구도 탓하지 않는다', '내일 이어 갈 말을 남긴다'],
              { prompt: '틀을 따라 "벌써?"라고 할 때 이어 갈 대본을 쓰세요.', toolOptions: { starter: '친구: "벌써? 재미없게" / 나: "___. 내일 ___ 얘기 꼭 해 줘!"', minSentences: 2, minChars: 20 }, crit: ['다시 분명하게 나간다', '누구도 탓하지 않는다'] }),
            RW('모둠과 대본을 소리 내어 읽고 가장 어색한 줄을 고쳐 쓰세요.',
              { topic: '고쳐 쓰기 — 모둠과 소리 내어 읽어 보고 가장 어색한 줄을 골라 고쳐 쓰세요. 무엇이 어색했는지도 한 문장 밝혀요.', minChars: 20, maxChars: 200, minSentences: 2, maxSentences: 4, title: '대본 고쳐 쓰기', lines: 3 },
              ['어색했던 까닭을 밝혔다', '고친 줄이 더 자연스럽다', '고친 줄도 누구를 탓하지 않는다'],
              { prompt: '틀을 따라 대본 한 줄을 고쳐 쓰세요.', toolOptions: { starter: '___ 줄이 ___해서 어색했다. 고친 줄: "___"' }, crit: ['어색했던 까닭을 밝혔다', '고친 줄이 더 자연스럽다'] },
              null, { conclude: '따라 하기 쉬운 대본은 현실적이고 누구도 탓하지 않으며, 먼저 나가는 친구와 남는 친구 모두를 배려해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 다른 친구도 따라 하기 쉬운 한 줄을 옮겨 써요.' }] },
      }),
      M('activity.challenge-plan', {
        title: '"폰 없는 저녁 30분" 챌린지 설계', method: '실천 챌린지 구간과 점검 칸 설계', tool: 'timer', minutes: 16,
        levels: { easy: '타이머를 \'30분·하루 1번\'으로 맞추고, 기록판은 3칸만 옮겨 적는다.', base: '타이머를 맞추고, 가상 참가자의 기록판 7칸을 옮겨 적고, 계획 점검 4칸을 표시한다.', challenge: '중간에 포기한 참가자를 위한 다시 시작 차례 카드까지 놓는다(마지막 문항이 다섯 단계).' },
        activity: {
          title: '"폰 없는 저녁 30분" 챌린지 설계', tool: 'timer',
          teacher: '"챌린지를 \'폰 줄이기\'로 열면 참가자는 무엇을 하면 될까요? \'폰 없는 저녁 30분, 하루 1번\'으로 열면요?" 타이머를 분 단위로 맞추고, 가상 참가자의 7일 기록을 옮겨 적으며 3일째 빈칸을 함께 본다. "하루 빠지면 챌린지 실패"라는 학생에게 "다시 시작 규칙이 있으면 4일째부터 다시 이어질까요?"라고 되묻는다. 기록판 값은 가상 참가자의 것이며, 실제 참가자의 기록은 이름 없이 칸 수만 센다고 정한다.',
          task: '\'폰 없는 저녁 30분 · 하루 1번\' 챌린지의 구간 타이머를 맞추고, 참가자 기록판과 점검 칸, 다시 시작 규칙을 설계해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '챌린지 구간 타이머를 \'폰 없는 30분 · 쉬기 0분 · 하루 1번\'으로 맞추세요.', toolOptions: { title: '폰 없는 저녁 30분', timeUnit: 'min', plan: { work: 10, rest: 5, rounds: 2 } }, target: { plan: { work: 30, rest: 0, rounds: 1 } }, difficulty: 0.2 },
            IT({ prompt: '가상 참가자의 7일 기록(30·30·0·30·30·15·30분)을 기록판에 옮겨 적으세요.', toolOptions: { title: '가상 참가자 기록판', cards: [], fields: Array.from({ length: 7 }, (_, i) => ({ label: `${i + 1}일`, unit: '분', step: 5 })), unit: '분' }, target: { records: CHAT }, difficulty: 0.25 },
              { prompt: '가상 참가자의 첫 3일 기록(30·30·0분)을 기록판에 옮겨 적으세요.', toolOptions: { fields: Array.from({ length: 3 }, (_, i) => ({ label: `${i + 1}일`, unit: '분', step: 5 })) }, target: { records: CHAT.slice(0, 3) } }),
            { prompt: '우리 챌린지 계획에 들어간 것을 모두 점검해 표시하세요.', toolOptions: { title: '챌린지 계획 점검', safety: ['참가 대상(학년)을 정했다', '시작일과 끝날을 정했다', '기록판 칸을 7개로 만들었다', '빠진 날 다시 시작하는 규칙을 정했다'] }, target: { safety: true }, difficulty: 0.15 },
            IT({ prompt: '하루 빠진 참가자가 다시 시작하는 차례를 놓으세요.', toolOptions: { title: '다시 시작 규칙', cards: ['다음 날 같은 시각에 30분', '빠진 칸에 까닭 한 줄 적기', '7일째에 칸 수 세기'] }, target: { order: ['빠진 칸에 까닭 한 줄 적기', '다음 날 같은 시각에 30분', '7일째에 칸 수 세기'] }, difficulty: 0.2 },
              null,
              { prompt: '중간에 포기한 참가자를 위한 다시 시작 차례 다섯 단계를 놓으세요.', toolOptions: { cards: ['다음 날 같은 시각에 30분', '빠진 칸에 까닭 한 줄 적기', '7일째에 칸 수 세기', '모둠이 "다시 하자" 응원 쪽지 보내기', '힘든 날은 15분으로 줄여 시작'] }, target: { order: ['빠진 칸에 까닭 한 줄 적기', '모둠이 "다시 하자" 응원 쪽지 보내기', '힘든 날은 15분으로 줄여 시작', '다음 날 같은 시각에 30분', '7일째에 칸 수 세기'] } },
              { conclude: '챌린지는 행동 하나·정한 시간·기록판·다시 시작 규칙이 있어야 이어져요. 빠진 날은 실패가 아니라 다시 시작할 자리예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 챌린지 기록판을 설계해요(참가자 이름은 쓰지 않아요).', columns: ['날', '해 본 시간(분)', '스스로 점검'], cells: [['1일', '', ''], ['2일', '', ''], ['3일', '', ''], ['7일', '', '']], answer: '(설계 활동 — 정답 없음)' }] },
        notes: '기록판 값은 가상 참가자의 것이다. 실제 캠페인에서는 참가자 이름 없이 채운 칸 수만 센다.',
      }),
      M('activity.message-sort', {
        title: '캠페인 문구 유형 분석', method: '캠페인 문구 유형 분석', tool: 'story', minutes: 16,
        levels: { easy: '두 칸(행동 제시형·공포형)에 문구 카드 4장을 나누고(놓으면 바로 맞는지 알려 줌), 고쳐 쓰기 짝 하나를 잇는다.', base: '네 칸에 문구 카드 8장을 나누고, 공포형·비난형 문구를 행동 제시형으로 고친 문구와 잇는다(고쳐 쓰기 1개는 활동지).', challenge: '고쳐 쓰기 짝을 둘 다 잇고, 마지막 문항에서 1학년 대상에 맞는 말투의 문구를 골라 담는다.' },
        activity: {
          title: '캠페인 문구 유형 분석', tool: 'story',
          teacher: '"\'폰 오래 하면 뇌가 망가진다!\'를 읽은 친구는 오늘 밤 무엇을 할까요?" 문구를 칸에 나눌 때마다 읽은 사람이 무엇을 하게 되는지 말하게 한다. "공포형이 가장 눈에 띄니 좋다"는 학생에게 "눈에 띄는 것과 행동을 바꾸는 것은 같을까요?"라고 되묻는다. 비난형 문구가 누군가를 \'중독자\'라 부르면 그 친구는 캠페인에서 멀어진다는 점을 짚는다. 문구는 모두 지어낸 예다.',
          task: '캠페인 문구 카드를 행동 제시형·공감형·공포형·비난형으로 나누고, 공포형·비난형 문구를 행동 제시형으로 고쳐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('캠페인 문구 카드를 네 유형 칸에 나누세요.', KIND4, SLOGAN, { title: '캠페인 문구 유형' }),
              SB('캠페인 문구 카드 4장을 두 유형 칸에 나누세요.', ['행동 제시형', '공포형'], pickCards(SLOGAN, ['m1', 'm2', 'm5', 'm6']), { title: '캠페인 문구 유형' })),
            IT(MB('공포형·비난형 문구를 행동 제시형으로 고친 문구와 이어 보세요.', [['폰 오래 하면 뇌가 망가진다!', '잠들기 30분 전, 폰은 거실로'], ['아직도 폰만 보는 한심한 너', '쉬는 시간 5분, 같이 창밖 보기']], ['폰 하면 진짜 큰일 난다'], { title: '이렇게 고쳐요' }),
              MB('공포형 문구 하나를 행동 제시형으로 고친 문구와 이어 보세요.', [['폰 오래 하면 뇌가 망가진다!', '잠들기 30분 전, 폰은 거실로']], [], { title: '이렇게 고쳐요' }),
              MB('공포형·비난형 문구를 고친 문구와 이어 보세요(함정 카드가 있어요).', [['폰 오래 하면 뇌가 망가진다!', '잠들기 30분 전, 폰은 거실로'], ['아직도 폰만 보는 한심한 너', '쉬는 시간 5분, 같이 창밖 보기'], ['이대로면 인생 끝난다', '오늘 저녁 30분만 폰 없이 해 보기']], ['폰 하면 진짜 큰일 난다', '중독자는 반성하자'], { title: '이렇게 고쳐요' })),
            IT(PB('1학년 대상 캠페인에 맞는 말투의 문구만 골라 담으세요.', '1학년에게 맞는 문구', [
              { id: 'y1', text: '우리 같이 잠들기 전 폰 쉬게 해 볼까?', ok: true }, { id: 'y2', text: '선배도 해 봤어, 저녁 30분 폰 없이!', ok: true },
              { id: 'y3', text: '디지털 리터러시 역량을 함양하자' }, { id: 'y4', text: '어린 너희가 폰을 알긴 하니?' }], { title: '대상에 맞는 말투' }),
              PB('1학년 대상 캠페인에 맞는 말투의 문구 하나를 골라 담으세요.', '1학년에게 맞는 문구', [
                { id: 'y1', text: '우리 같이 잠들기 전 폰 쉬게 해 볼까?', ok: true }, { id: 'y3', text: '디지털 리터러시 역량을 함양하자' }], { title: '대상에 맞는 말투' }),
              null, { conclude: '겁주거나 탓하는 문구보다 할 행동 하나를 대상에 맞는 말투로 권하는 문구가 행동을 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '공포형 문구 \'이대로면 인생 끝난다\'를 행동 제시형 문구로 고쳐 써요.' }],
          easy: [{ type: 'choice', prompt: '행동 제시형 문구에 ○ 해요.', options: ['오늘 밤 10시, 단체방 알림 끄기', '폰 오래 하면 뇌가 망가진다!'], answer: '오늘 밤 10시, 단체방 알림 끄기' }] },
      }),

      // ---- 정리 ----
      M('wrap.plan-check', {
        title: '캠페인 계획 점검표', method: '캠페인 계획 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '예시 계획을 점검 항목 2개에 대어 표시한다.', base: '예시 계획을 점검 항목 4개에 대어 갖춘 항목만 표시한다.', challenge: '다른 예시 계획도 점검하고, 빠진 항목을 채울 계획 한 줄을 쓴다.' },
        wrap: {
          teacher: '"이 예시 계획은 대상·행동·말투·확인 방법을 모두 갖추었나요?" 예시 모둠(가상)의 계획을 함께 읽고 갖춘 항목만 표시한 뒤, 우리 모둠 계획도 활동지에서 같은 점검표로 점검하게 한다. "구호는 세면 셀수록 좋다"는 학생에게 \'겁주거나 탓하지 않음\' 항목을 가리키며 오늘 문구 유형 분석을 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: CL('', '예시 계획: "1학년에게, 잠들기 전 폰을 거실에 두자고 7일 챌린지 기록판으로 권한다. 구호: 폰 하면 뇌가 망가진다!"', [
              { id: 'c1', text: '대상이 분명하다', ok: true }, { id: 'c2', text: '행동 하나를 권한다', ok: true }, { id: 'c3', text: '겁주거나 탓하지 않는다' }, { id: 'c4', text: '확인 방법이 있다', ok: true }]).toolOptions,
              prompt: '예시 계획이 갖춘 항목만 표시해요.', target: { checklist: ['c1', 'c2', 'c4'] }, difficulty: 0.25 },
            { prompt: '예시 계획이 갖춘 항목만 표시해요(두 항목 가운데).', toolOptions: CL('', '예시 계획: "1학년에게, 잠들기 전 폰을 거실에 두자고 7일 챌린지 기록판으로 권한다. 구호: 폰 하면 뇌가 망가진다!"', [{ id: 'c1', text: '대상이 분명하다', ok: true }, { id: 'c3', text: '겁주거나 탓하지 않는다' }]).toolOptions, target: { checklist: ['c1'] } },
            { prompt: '다른 예시 계획이 갖춘 항목만 표시해요.', toolOptions: CL('', '다른 예시 계획: "전교생에게, 디지털 습관을 바르게 하자고 복도에 포스터를 붙인다. 구호: 같이 해 보자!"', [
              { id: 'c1', text: '대상이 분명하다' }, { id: 'c2', text: '행동 하나를 권한다' }, { id: 'c3', text: '겁주거나 탓하지 않는다', ok: true }, { id: 'c4', text: '확인 방법이 있다' }]).toolOptions, target: { checklist: ['c3'] } }),
            { type: 'choice', prompt: '"또래의 말은 어른 말보다 힘이 없다"는 생각에 대한 반박으로 가장 알맞은 것은?', options: ['또래가 직접 해 보고 권하면 따라 해 볼 마음이 생기기 쉽다', '어른 말만 들으면 된다', '캠페인은 선생님이 해야 한다'], answer: 0, difficulty: 0.2, explain: '같은 처지의 친구가 "나도 해 봤어"라고 하면 따라 하기 쉬워져요.' },
            { type: 'short', prompt: '첫 예시 계획에서 빠진 항목을 채울 계획 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '우리 캠페인 계획 점검',
          items: [
            { type: 'check', prompt: '우리 모둠 계획이 갖춘 항목에 표시해요.', options: ['대상이 분명하다', '행동 하나를 권한다', '겁주거나 탓하지 않는다', '확인 방법이 있다'] },
            { type: 'short', prompt: '빠진 항목을 채울 계획 한 줄을 써요.' },
          ],
          easy: { note: '두 항목만 점검해도 돼요.', items: [{ type: 'check', prompt: '우리 모둠 계획이 갖춘 항목에 표시해요.', options: ['대상이 분명하다', '행동 하나를 권한다'] }] },
        },
      }),
      M('wrap.one-line', {
        title: '캠페인 한 줄 다짐 완성', method: '캠페인 한 줄 다짐 완성', tool: 'wordcards', minutes: 7,
        levels: { easy: '다짐 문장의 \'언제\' 빈칸 1개만 채운다.', base: '\'언제·무엇을·지킬 것\' 빈칸 3개를 채워 예시 다짐을 완성한다.', challenge: '빈칸 3개에 친구에게 권하는 문장 빈칸 1개를 더 채운다.' },
        wrap: {
          teacher: '"\'폰 없는 저녁 30분\' 캠페인에 참여한다면 어떤 한 줄을 남길까요?" 낱말 카드로 예시 다짐을 완성한 뒤, 활동지에 내 다짐을 직접 써 보게 한다. "다짐은 크게 할수록 좋다"는 학생에게 "\'폰을 끊겠다\'와 \'저녁 식사 뒤 30분 폰을 서랍에 넣겠다\' 가운데 내일 지킬 수 있는 것은?"이라고 되묻는다. 내 다짐은 발표를 원하는 학생만 나눈다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'wordcards', options: FB('', [['나는 ___에', '저녁 식사 뒤 30분'], ['___를 해서', '폰을 서랍에 넣기'], ['___를 지키겠다', '가족과 이야기할 시간']], ['아무 때나', '폰을 끊기', '모든 습관']).toolOptions,
              prompt: '예시 다짐 문장의 빈칸 세 개에 낱말 카드를 넣어요.', target: FB('', [['', ''], ['', ''], ['', '']]).target, difficulty: 0.2 },
            Object.assign(FB('예시 다짐 문장의 \'언제\' 빈칸에 낱말 카드를 넣어요.', [['나는 ___에', '저녁 식사 뒤 30분']], ['아무 때나'])),
            { prompt: '다짐 문장 빈칸 세 개와 친구에게 권하는 문장 빈칸을 채워요.', toolOptions: FB('', [['나는 ___에', '저녁 식사 뒤 30분'], ['___를 해서', '폰을 서랍에 넣기'], ['___를 지키겠다', '가족과 이야기할 시간'], ['너도 ___ 같이 해 볼래?', '폰 없는 저녁 30분']], ['아무 때나', '폰을 끊기', '모든 습관']).toolOptions,
              target: FB('', [['', ''], ['', ''], ['', ''], ['', '']]).target }),
            { type: 'choice', prompt: '내일 지킬 수 있는 다짐으로 가장 알맞은 것은?', options: ['나는 폰을 완전히 끊겠다', '나는 저녁 식사 뒤 30분 폰을 서랍에 넣겠다', '나는 디지털 습관을 바르게 하겠다'], answer: 1, difficulty: 0.15, explain: '언제·무엇을이 분명한 작은 다짐이 지켜져요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '캠페인 한 줄 다짐',
          items: [
            { type: 'blank', prompt: '빈칸을 채워 내 다짐을 써요.', text: '나는 (  ___  )에 (  ___  )를 해서 (  ___  )를 지키겠다.', answer: '(예) 저녁 식사 뒤 30분, 폰을 서랍에 넣기, 가족과 이야기할 시간' },
            { type: 'short', prompt: '내 다짐을 친구에게 권하는 문장으로 바꿔 써요.' },
          ],
          easy: { note: '빈칸 하나만 채워도 돼요.', items: [{ type: 'choice', prompt: '\'언제\' 빈칸에 알맞은 말에 ○ 해요.', options: ['저녁 식사 뒤 30분', '아무 때나'], answer: '저녁 식사 뒤 30분' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
