/* 창체 법정교육 생명존중·자살예방 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 life 중.
 * 근거: 「자살예방 및 생명존중문화 조성을 위한 법률」 제17조·시행령 제10조의2(연 6시간 이상) — research-mandatory §1,
 *   중학교 내용 갈래(스트레스·우울 대처 / 위험 신호와 게이트키퍼 / 또래 지지) — research-mandatory §2. 주제마다 source 는 체계도에 있다.
 * 주제 9개 × 8모듈 = 72모듈. 7학년(스트레스 과학·감정 조절·또래 지지), 8학년(우울 오해와 사실·위험 신호와 생명지킴이·SNS 속 신호),
 *   9학년(어른에게 연결하기·회복탄력성·진학 스트레스).
 * 지킨 틀(BRIEF_LIFE.md): 방법·수단·장소·도구를 쓰지 않는다(암시·은유·장면 묘사 포함). 사례는 "힘들어 보였다" 수준의 말·행동·감정 변화만.
 *   자살을 해결·선택지·용기·낭만으로 그리지 않고, 원인을 하나로 단정하지 않는다. 채점 문항은 모두 가상 인물(가명 두 글자)이고,
 *   학생 자신의 위기·자해·자살 생각은 묻지 않는다. 자기 점검은 걷지 않는 활동지 '혼자 보기' 칸으로만.
 *   위험 신호는 "알아차리고 → 묻고 → 듣고 → 어른·전문가와 잇기"(보고·듣고·말하기) 틀이고, 생명과 관련된 비밀은 지키지 않는다.
 *   우울·위험 신호는 진단처럼 쓰지 않는다("우울증이다" 판정 없음, 판단은 전문가 몫). SNS 위험 정보는 내용을 옮기지 않고 '보면 어른께 알리고 신고' 틀로만.
 *   도움처: 체계도 중 concepts 에 전화번호가 없어 번호는 쓰지 않고 '[학교가 확인해 넣는 지역 상담 번호]' 자리만 둔다.
 *   학교 안 연결은 계획 글(brief)에 나온 담임·상담 선생님·보건 선생님·보호자·상담실·보건실·교무실·진로 상담실까지만.
 *   자료·그래프 수치는 모두 지어낸 가상 자료이고 화면에 '가상'이라고 밝힌다. 같은 학년군 폭력예방(saf-violence.m.life-signal·care-plan)의 장면은 되풀이하지 않았다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 없는 일반 사실·수칙 문장. 확인처를 함께 적는다.
 *   - stress-science 전반: 스트레스 반응(몸·생각·행동), 문제 중심·감정 중심 대처와 피하는 대처의 구분, "밤샘·끼니 거르기가 다음 날 집중을 떨어뜨린다"
 *     — 교육부 학생정신건강 자료(학생 마음건강 교육 자료), 보건복지부 국가정신건강정보포털
 *   - stress-science.activity.breath: 4초 들이쉬기·4초 멈추기·6초 내쉬기, 1분 호흡·1분 긴장-이완은 계획 글(brief) 값을 '우리 반 연습 약속'으로 쓴 것 — 교육부 학생정신건강 자료
 *   - stress-science.wrap.help·depression-facts 전반: "잠·흥미 변화가 몇 주씩 이어지고 생활이 힘들어지면 전문가와 이야기할 때"(계획 글의 '2주'는 숫자를 빼고 '몇 주씩'으로 씀),
 *     우울감과 우울증의 차이("우울감은 누구나 느낄 수 있고, 진단은 전문가가 한다"), "도움을 받으면 나아질 수 있다" — 보건복지부 국가정신건강정보포털·중앙자살예방센터
 *   - emotion-regulation 전반: 감정 조절 전략(잠깐 멈추기·자리 뜨기·나 전달법·말로 표현하기)과 억압의 차이, 감정별 몸 신호(가슴 두근거림·어깨 굳음·배 울렁임·목 멤)
 *     — 교육부 학생정신건강 자료(사회정서교육). 교구에 '손' 칸이 없어 '주먹에 힘'은 손목 칸으로 짚는다.
 *   - peer-support 전반: 공감적 경청(되말하기·감정 읽어 주기·열린 질문), "또래 지지에는 한계가 있고 걱정되면 어른에게 잇는다" — 한국생명존중희망재단 생명지킴이 교육, 교육부 또래상담 자료
 *   - warning-signs 전반: 위험 신호 갈래(말·행동·상황)와 예(“다 소용없어”, 아끼는 물건 나눠 주기, 갑작스러운 연락 끊김, 큰 상실·따돌림),
 *     "직접 물어도 괜찮다(물어본다고 부추기지 않는다)", 생명지킴이 보고·듣고·말하기 3단계, "생명과 관련된 비밀은 지키지 않는다"
 *     — 한국생명존중희망재단·중앙자살예방센터 '보고 듣고 말하기' 생명지킴이 교육
 *   - online-signals 전반: 온라인 걱정 글을 보면 퍼뜨리지 않고 어른에게 알리고 플랫폼 신고 기능을 쓴다, 캡처 공유가 해로운 까닭
 *     — 보건복지부·한국생명존중희망재단 자살보도 권고기준(안전한 소통 원칙), 방송통신심의위원회 신고 안내(앱 메뉴 이름은 앱마다 다름)
 *   - gatekeeper-connect 전반: 어른에게 알릴 때 말할 것(관찰한 사실·시점·내가 한 일·요청), "연결한 뒤에도 곁에 머문다", 돕는 사람의 자기 돌봄 — 한국생명존중희망재단 생명지킴이 교육
 *   - resilience 전반: 회복탄력성·보호 요인(관계·강점·건강 습관·의미·도움 자원)과 위험 요인, "회복탄력성은 키울 수 있다" — 교육부 학생정신건강 자료, 보건복지부 국가정신건강정보포털
 *   - transition-stress 전반: 중3 하반기 진학 일정의 차례(진로 상담 → 원서 작성 → 원서 제출 → 결과 발표 → 졸업)는 학교·지역마다 시기가 달라 차례만 씀 — 시도교육청 고입 전형 안내
 *   - 영역 전체: 위급할 때의 긴급 신고 번호(112·119)와 자살예방 상담전화는 체계도 concepts 에 없어 넣지 않았다 — 학교가 확인해 '[학교가 확인해 넣는 지역 상담 번호]' 자리에 넣을지 정한다(보건복지부·중앙자살예방센터).
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `life.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'life', band: '중', topic: `life.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 분류판(sortboard 글 카드 모드): mode 없이 slots·cards 만
  const BOARD = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c.to === s).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글, who?, motif?]] — 칸 하나에 카드 한 장. who 를 주면 말풍선 인물(story fill)
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => Object.assign({ id: `f${i + 1}`, label: p[0] }, p[2] ? { who: p[2] } : {}, p[3] ? { motif: p[3] } : {})), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 출구 질문 교구 문항: 조각 → { type: 'tool', tool, prompt, options, target }
  const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);
  // 그래프 읽기
  const RD = (prompt, opt, target) => ({ prompt, toolOptions: Object.assign({ mode: 'read' }, opt), target });
  // 칸 지도
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(첫 선택만)·기본(세 번 선택 + 근거 한 장 이상)·도전(세 번 선택 + 맞는 근거 두 장 모두) ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // good = 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, R = 근거 카드(맞는 것 두 장 + 함정), ok = 맞는 근거 id 두 개
  const DIL = (p, title, tree, good, R, ok, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: R, compare: true, revealAfterCheck: true }, target: { path: paths(good, 3), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [], revealAfterCheck: false }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { maxReasons: 2 }, target: { path: paths(good, 3), reasons: ok } },
    },
  }, extra);

  // 모든 모듈 교사 메모에 붙는 안전 문장(BRIEF_LIFE.md)
  const SAFE_NOTE = '가상 인물·가상 장면이다. 학생 자신의 힘든 마음·위기를 묻거나 발표하게 하지 않는다. 방법·수단·장소를 말하거나 묘사하지 않는다. 위기 신호를 보이는 학생은 학교 위기관리 절차(상담교사·관리자 연계)를 따른다.';
  const NUM = '[학교가 확인해 넣는 지역 상담 번호]';

  // ==== 7학년 · 스트레스 반응의 과학과 대처 (life.m.stress-science) ====
  {
    const M = MK('stress-science', [7]);
    const WORRY = [['학업', 34], ['진로', 22], ['친구 관계', 18], ['외모', 14], ['가족', 12]];
    const WAYS3 = ['문제 중심 대처', '감정 중심 대처', '피하는 대처'];
    const WAYS = [
      { id: 'p1', text: '해야 할 일을 계획표로 나누기', to: '문제 중심 대처' }, { id: 'p2', text: '모르는 문제를 선생님께 묻기', to: '문제 중심 대처' },
      { id: 'p3', text: '친구와 함께 공부 시간 정하기', to: '문제 중심 대처' },
      { id: 'e1', text: '천천히 숨 쉬며 몸 풀기', to: '감정 중심 대처' }, { id: 'e2', text: '20분 걷거나 뛰기', to: '감정 중심 대처' },
      { id: 'e3', text: '믿는 사람에게 마음 털어놓기', to: '감정 중심 대처' },
      { id: 'a1', text: '밤새 게임으로 잊기', to: '피하는 대처' }, { id: 'a2', text: '배부를 때까지 계속 먹기', to: '피하는 대처' },
      { id: 'a3', text: '책상만 보면 휴대폰 켜기', to: '피하는 대처' },
    ];
    const D1 = { text: '서준은 중간고사가 닷새 남았는데 아직 시작을 못 했다. 마음이 급해 가슴이 답답하다.', ask: '서준은 어떻게 할까?', motif: 'house', choices: [
      { id: 'night', text: '시험 전날 밤을 새워 한꺼번에 한다', result: '나흘 동안은 마음이 더 무겁고, 전날 밤에 몰아서 공부한다.', impact: [{ who: '서준', text: '잠이 모자라 몸이 지친다', tone: -1 }], why: '밤을 새우면 다음 날 집중이 떨어져요.', end: '전날 밤을 새웠어요.',
        next: { text: '시험 날 아침, 서준은 졸리고 머리가 멍하다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'coffee', text: '쉬는 시간마다 또 벼락치기를 한다', result: '머리가 더 복잡해지고 아는 문제도 헷갈린다.', impact: [{ who: '서준', text: '실수가 늘어난다', tone: -1 }], why: '지친 상태에서 더 몰아붙이면 실수가 늘어요.' },
          { id: 'breathe', text: '자리에서 천천히 숨 쉬고 아는 문제부터 푼다', result: '조금 차분해져 아는 문제는 맞힌다.', impact: [{ who: '서준', text: '마음이 조금 가라앉는다', tone: 1 }], why: '숨 고르기는 도움이 됐지만, 처음부터 계획을 세웠다면 더 나았어요.' }] } },
      { id: 'plan', text: '과목별로 나눠 계획표를 짜고 잠 시간은 지킨다', result: '하루 할 몫이 정해져 마음이 조금 가벼워진다.', impact: [{ who: '서준', text: '할 일이 눈에 보인다', tone: 1 }], end: '계획표를 짜고 잠을 지켰어요.',
        next: { text: '사흘째, 수학 한 단원이 도무지 이해가 안 돼 계획이 밀린다.', ask: '어떻게 할까?', choices: [
          { id: 'ask', text: '다음 날 수학 선생님께 모르는 곳을 묻는다', result: '설명을 듣고 막힌 곳이 풀린다.', impact: [{ who: '서준', text: '막힌 곳이 풀린다', tone: 1 }], end: '모르는 것을 물어 풀었어요.',
            next: { text: '시험 전날 밤, 친구가 "같이 밤새 정리하자"고 메시지를 보낸다.', ask: '어떻게 답할까?', choices: [
              { id: 'sleep', text: '"정리는 내일 아침에 보고 오늘은 잘게"', result: '푹 자고 맑은 머리로 시험을 본다.', impact: [{ who: '서준', text: '계획대로 마무리한다', tone: 1 }] },
              { id: 'stay', text: '"좋아, 밤새 하자"', result: '사흘 동안 지킨 잠 계획이 마지막 날 무너진다.', impact: [{ who: '서준', text: '시험 날 지친다', tone: -1 }], why: '시험 전날일수록 잠이 기억을 정리해 줘요.' }] } },
          { id: 'skip', text: '그 단원은 버리고 휴대폰을 본다', result: '불안이 더 커지고 다른 과목도 손에 안 잡힌다.', impact: [{ who: '서준', text: '마음이 더 무겁다', tone: -1 }], why: '막힌 곳은 피하기보다 도움을 구하면 풀려요.' }] } },
      { id: 'group', text: '친구와 함께 공부하며 모르는 것을 서로 묻는다', result: '서로 설명하며 정리가 된다.', impact: [{ who: '서준', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '함께 공부해서 마음도 가벼웠어요.' }] };
    const R1 = [{ id: 'r1', text: '할 일을 나누면 막막함이 줄어든다' }, { id: 'r2', text: '잠을 지켜야 시험 날 머리가 맑다' },
      { id: 'r3', text: '스트레스는 피할수록 사라진다', why: '피하면 잠깐은 편해도 걱정은 그대로 남아요.' }, { id: 'r4', text: '스트레스를 느끼는 건 약해서다', why: '스트레스는 누구나 느끼는 몸과 마음의 반응이에요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.graph', {
        title: '가상 설문으로 본 청소년의 걱정', method: '청소년 스트레스 원인 자료 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대그래프에서 1위 걱정만 찾는다.', base: '1·2위를 찾고 비율을 견주어 말하며, 내가 짐작한 순위와 다른 점을 말한다.', challenge: '이 그래프로 알 수 없는 것(가상 자료·한 사람이 여러 걱정을 가질 수 있음)을 짝과 말한다.' },
        intro: {
          teacher: '"중학생이 가장 많이 꼽는 걱정은 무엇일까요? 먼저 짐작해 보세요." 손을 들어 짐작을 받은 뒤 가상 설문 막대그래프를 띄우고, 시연 단추로 1위 막대가 골라지는 모습을 보인다. "스트레스를 느끼는 건 약해서다"라는 말이 나오면 "이 그래프의 걱정을 가진 친구들이 모두 약한 걸까요, 아니면 누구나 느끼는 걸까요?"라고 되묻는다. 이 자료는 수업용으로 지어낸 가상 설문이며 실제 통계가 아니라는 점을 처음에 밝힌다.',
          student: '가상 설문 그래프에서 중학생이 가장 많이 꼽은 걱정 1·2위를 찾고, 내가 짐작한 것과 무엇이 다른지 짝에게 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '중학생이 꼽은 가장 큰 걱정(가상 설문)', unit: '%', xLabel: '걱정', yLabel: '응답 비율', data: WORRY, question: '가장 많이 꼽은 걱정은?', choices: WORRY.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart made of stacked paper strips with small icons of a book, a signpost, two friends, a mirror and a house under each bar', banner: '우리는 무엇을 걱정할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 학생 자신의 걱정을 발표하게 하지 않고 "짐작"만 나눈다. ' + SAFE_NOTE,
      }),
      M('intro.case', {
        title: '시험 전날 서준의 하루', method: '시험 전날 인물의 하루', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장(미루기·밤샘·실수)을 차례로 놓는다.', base: '장면 4장을 차례로 놓고 고리를 끊을 수 있던 장면을 고른다.', challenge: '끊을 수 있던 장면 두 곳을 고르고 각각 다른 대안을 말한다.' },
        intro: {
          teacher: '"서준의 하루는 어디서부터 꼬였을까요?" 가상 인물 서준의 네 장면을 섞어 보인 뒤 시연 단추로 차례대로 놓이는 모습을 보인다. "서준은 원래 게을러서 그래"라는 말이 나오면 "미룬 까닭이 불안이었다면, 불안을 다르게 다룰 방법은 없었을까요?"라고 되묻는다. 오늘은 스트레스가 몸·생각·행동에 어떻게 이어지는지 보고, 그 고리를 끊는 대처를 견준다고 밝힌다.',
          student: '가상 인물 서준의 장면 카드를 차례대로 놓아요. 어느 장면에서 다르게 했다면 고리를 끊을 수 있었을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '서준의 시험 전날', cards: [
            { id: 'c1', text: '불안해서 공부를 미룬다', motif: 'cloud' }, { id: 'c2', text: '전날 밤을 새워 몰아서 한다', motif: 'star' },
            { id: 'c3', text: '시험 날 졸려 실수한다', motif: 'leaf' }, { id: 'c4', text: '점수를 보고 더 불안해진다', motif: 'house' }] }, sequence: [{ order: ['c1', 'c2', 'c3', 'c4'] }] },
          art: { draw: 'a paper-cut four-panel strip of a middle school student at a desk late at night under a lamp, then yawning at an exam desk in the morning', banner: '어디서부터 꼬였을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.strategy', {
        title: '대처 전략 세 갈래로 나누기', method: '대처 전략 분류와 근거', tool: 'mindmap', minutes: 15,
        levels: { easy: '카드 6장을 가지 2개(문제 중심·감정 중심)에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 9장을 가지 3개(문제 중심·감정 중심·피하는 대처)에 나누고, 전략마다 효과 근거를 잇는다.', challenge: '셋째 문항에서 한 상황에 두 전략을 섞어 쓰는 짝을 고른다(함정 카드가 섞인다).' },
        activity: {
          title: '대처 전략 세 갈래로 나누기', tool: 'mindmap',
          teacher: '"계획표 짜기와 숨 고르기, 둘 다 좋은 대처인데 무엇이 다를까요?" 카드를 나눈 뒤 문제 중심은 원인을, 감정 중심은 마음을 다룬다는 점을 함께 말한다. "게임으로 잊는 것도 감정 중심 아니에요?"라는 학생에게 "잠깐 잊은 뒤 내일 걱정이 줄었을까요, 그대로일까요?"라고 되묻는다. 피하는 대처는 잠깐 편하지만 문제를 남긴다는 점과, 한 가지가 아니라 두 대처를 섞어 쓸 수 있다는 점을 짚는다.',
          task: '스트레스 대처 카드를 문제 중심·감정 중심·피하는 대처 가지에 나누고, 전략마다 효과 근거를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('대처 카드를 세 가지에 나누세요.', WAYS3, WAYS, { topic: '스트레스 대처' }),
              SB('대처 카드 6장을 두 가지에 나누세요.', WAYS3.slice(0, 2), WAYS.filter((c) => c.to !== '피하는 대처'), { topic: '스트레스 대처' })),
            IT(MB('대처마다 효과 근거를 이어 보세요.', [['계획표로 나누기', '해야 할 일이 작아져 막막함이 준다'], ['천천히 숨 쉬기', '빨라진 숨과 심장이 가라앉는다'], ['마음 털어놓기', '혼자가 아니라고 느껴 마음이 가벼워진다']], ['스트레스가 아예 사라진다'], { topic: '왜 효과가 있을까?' }),
              MB('대처 두 개의 효과 근거를 이어 보세요.', [['계획표로 나누기', '해야 할 일이 작아져 막막함이 준다'], ['천천히 숨 쉬기', '빨라진 숨과 심장이 가라앉는다']], [], { topic: '왜 효과가 있을까?' })),
            IT(PB('피하는 대처를 골랐을 때 생기는 일만 골라 담으세요.', '피하는 대처의 결과', [
              { id: 'q1', text: '잠깐은 편하지만 걱정은 그대로다', ok: true }, { id: 'q2', text: '잠이 줄어 다음 날 더 지친다', ok: true },
              { id: 'q3', text: '할 일이 쌓여 불안이 커진다', ok: true }, { id: 'q4', text: '문제가 저절로 풀린다' }, { id: 'q5', text: '마음이 오래 편안해진다' }]),
              null,
              PB('시험 걱정 상황에 섞어 쓰기 좋은 대처 짝만 골라 담으세요(함정이 섞였어요).', '섞어 쓰는 짝', [
                { id: 'm1', text: '숨 고르기 + 오늘 할 몫 정하기', ok: true }, { id: 'm2', text: '20분 걷기 + 모르는 것 묻기', ok: true },
                { id: 'm3', text: '밤샘 게임 + 다음 날 벼락치기' }, { id: 'm4', text: '털어놓기 + 함께 계획 세우기', ok: true }, { id: 'm5', text: '끼니 거르기 + 밤새 공부' }]),
              { conclude: '문제 중심 대처는 원인을, 감정 중심 대처는 마음을 다뤄요. 피하는 대처는 잠깐 편하지만 걱정을 남기니, 건강한 두 대처를 섞어 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '시험 걱정이 클 때 섞어 쓸 문제 중심 대처 하나와 감정 중심 대처 하나를 써요.' }],
          easy: [{ type: 'choice', prompt: '문제 중심 대처에 ○ 해요.', options: ['해야 할 일을 계획표로 나누기', '밤새 게임으로 잊기'], answer: '해야 할 일을 계획표로 나누기' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.dilemma', {
        title: '중간고사 닷새 전 갈림길', method: '시험 기간 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고, 영향 표시는 맞힌 뒤에 보이며 근거 카드를 한 장 이상 고른다.', challenge: '세 번 골라 끝까지 간 뒤 맞는 근거 두 장을 모두 골라 결과를 견준다.' },
        activity: {
          title: '중간고사 닷새 전 갈림길', tool: 'dilemma',
          teacher: '"밤을 새우면 공부 시간이 늘어나니 더 좋은 것 아닐까요?" 학생마다 한 길을 끝까지 가 본 뒤, 되돌아가 밤샘 길과 계획표 길의 결과를 견주게 한다. "벼락치기가 나한테는 맞아요"라는 학생에게 "시험 날 아침 서준의 머리는 어땠나요? 잠은 공부한 것을 정리하는 시간이기도 해요"라고 말해 준다. 막힌 곳에서 도움을 구한 장면을 함께 짚는다.',
          task: '가상 인물 서준의 시험 기간 갈림길에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '서준의 시험이 닷새 남았어요. 첫 갈림길에서 골라 결과를 보세요.', base: '서준의 시험이 닷새 남았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 맞는 근거 두 장을 모두 고르세요.' },
              '중간고사 닷새 전', D1, [['plan', 'ask', 'sleep'], ['group']], R1, ['r1', 'r2']),
            IT({ prompt: '시험 전날 밤 친구가 같이 밤새자고 해요. 갈림길을 따라가세요.', toolOptions: { title: '시험 전날 밤 메시지', scene: { text: '시험 전날 밤 10시, 친구가 "불안해, 같이 밤새 공부하자"고 한다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'yes', text: '"좋아, 끝까지 같이 하자"', result: '둘 다 새벽까지 깨어 있다가 시험 날 지친다.', impact: [{ who: '친구와 나', text: '시험 날 머리가 멍하다', tone: -1 }], why: '불안을 밤샘으로 달래면 다음 날이 더 힘들어요.' },
              { id: 'calm', text: '"나도 불안해. 30분만 같이 정리하고 자자"', result: '정리를 마치고 둘 다 잠자리에 든다.', impact: [{ who: '친구와 나', text: '불안을 나누고 잠을 지킨다', tone: 1 }], ending: '불안을 나누고 잠을 지켰어요.' }] }, reasons: [{ id: 'q1', text: '불안을 나누되 잠을 지키는 길이 있다' }, { id: 'q2', text: '친구가 불안하면 무조건 같이 밤새야 한다', why: '함께 쉬는 것도 친구를 돕는 일이에요.' }], compare: true },
              target: { path: [['calm']], reasons: ['q1'] } }),
            IT({ prompt: '시험이 끝난 뒤 점수가 생각보다 낮았어요. 서준의 다음 선택을 따라가세요.', toolOptions: { title: '시험이 끝난 뒤', scene: { text: '시험 결과가 생각보다 낮자 서준은 "난 뭘 해도 안 돼"라고 말한다.', ask: '서준에게 도움이 될 생각은?', motif: 'house', choices: [
              { id: 'all', text: '"한 번 시험으로 내가 다 정해지는 건 아니야"', result: '서준이 틀린 문제를 다시 본다.', impact: [{ who: '서준', text: '다음 계획을 세운다', tone: 1 }], ending: '결과를 다음 계획으로 이었어요.' },
              { id: 'none', text: '"맞아, 넌 원래 안 돼"', result: '서준이 더 움츠러든다.', impact: [{ who: '서준', text: '자신을 더 깎아내린다', tone: -1 }], why: '한 번의 결과로 사람 전체를 판단하지 않아요.' }] }, reasons: [{ id: 'p1', text: '결과는 다음 계획의 자료가 된다' }, { id: 'p2', text: '점수가 그 사람의 가치를 정한다', why: '점수는 그때의 결과일 뿐 사람의 가치가 아니에요.' }], compare: true },
              target: { path: [['all']], reasons: ['p1'] }, conclude: '할 일을 나누고, 잠을 지키고, 막히면 도움을 구해요. 결과가 아쉬워도 한 번으로 나를 판단하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '시험이 닷새 남았는데 시작을 못 했을 때 가장 알맞은 첫 행동은?', options: ['전날 밤을 새운다', '과목별로 나눠 계획표를 짜고 잠은 지킨다', '그 과목은 포기한다'], answer: '과목별로 나눠 계획표를 짜고 잠은 지킨다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.breath', {
        title: '호흡과 긴장-이완 실습', method: '호흡·근육 이완 실습', tool: 'timer', minutes: 15,
        levels: { easy: '호흡 차례(들이쉬기·멈추기·내쉬기)만 놓고 1분 호흡을 해 본다.', base: '호흡 1분과 어깨·주먹 긴장-이완 1분을 타이머로 맞춰 해 보고, 전후 긴장도를 기록판에 적는다.', challenge: '나에게 맞는 호흡 시간을 다시 맞춰 한 번 더 하고 전후 긴장도를 견준다.' },
        activity: {
          title: '호흡과 긴장-이완 실습', tool: 'timer',
          teacher: '"긴장하면 숨이 어떻게 바뀌나요? 빨라지고 얕아지죠. 그럼 숨을 거꾸로 바꾸면 몸은 어떻게 될까요?" 우리 반 연습 약속(4초 들이쉬기·4초 멈추기·6초 내쉬기)을 함께 세며 1분 해 본다. "숨쉬기로 스트레스가 없어지진 않잖아요"라는 학생에게 "맞아요, 문제는 그대로예요. 하지만 몸이 가라앉으면 다음 행동을 고를 여유가 생겨요"라고 말해 준다. 어지럽거나 불편하면 언제든 멈추고 평소 숨으로 돌아가게 한다. 긴장도 기록은 걷지 않는다.',
          task: '우리 반 연습 약속대로 호흡과 어깨·주먹 긴장-이완을 해 보고, 하기 전과 뒤의 긴장도(1~10)를 기록해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '호흡 연습의 차례대로 카드를 놓으세요.', toolOptions: { title: '우리 반 호흡 약속', cards: ['6초 동안 천천히 내쉬기', '4초 동안 들이쉬기', '4초 동안 숨 멈추기'] }, target: { order: ['4초 동안 들이쉬기', '4초 동안 숨 멈추기', '6초 동안 천천히 내쉬기'] } }),
            IT({ prompt: '호흡 60초, 쉬기 10초, 긴장-이완 60초가 되도록 2번으로 타이머를 맞추세요.', toolOptions: { title: '호흡과 긴장-이완', labels: ['연습', '쉬기'], plan: { work: 30, rest: 20, rounds: 1 } }, target: { plan: { work: 60, rest: 10, rounds: 2 } } },
              { prompt: '호흡 60초를 한 번 하도록 타이머를 맞추세요.', target: { plan: { work: 60, rounds: 1 } } },
              { prompt: '나에게 맞게 연습 시간을 90초로 늘려 2번 하도록 맞추세요(쉬기 10초).', target: { plan: { work: 90, rest: 10, rounds: 2 } } }),
            IT({ prompt: '연습 전과 뒤의 내 긴장도(1~10)를 적으세요. 이 기록은 걷지 않아요.', toolOptions: { title: '긴장도 기록(혼자 보기)', fields: [{ label: '하기 전', unit: '점', max: 10 }, { label: '한 뒤', unit: '점', max: 10 }] }, target: { records: true } }),
            IT({ prompt: '해 본 뒤 스스로 점검 칸에 표시하세요.', toolOptions: { title: '해 본 뒤 점검' }, target: { selfCheck: ['숨을 내쉬는 시간을 들이쉬는 시간보다 길게 했다', '어깨·주먹에 힘을 줬다 풀었다', '불편하면 멈춰도 된다는 것을 안다'] } },
              null, null, { conclude: '숨을 길게 내쉬고 힘을 줬다 풀면 몸의 긴장이 가라앉아요. 문제를 풀 여유가 생기면 그다음 대처를 골라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '혼자 보기 칸: 연습 전과 뒤의 긴장도를 적어 봐요(걷지 않아요).', columns: ['때', '긴장도(1~10)'], cells: [['하기 전', ''], ['한 뒤', '']], answer: '(혼자 보기 — 정답 없음)' }] },
        notes: '초·횟수는 계획 글(brief)의 값을 \'우리 반 연습 약속\'으로 쓴 것이다. 긴장도 기록은 걷거나 발표하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.plan', {
        title: '시험 주간 균형 일과판', method: '시험 주간 균형 계획', tool: 'kitchen', minutes: 15,
        levels: { easy: '저녁 일과 카드 3장을 차례로 놓는다.', base: '저녁 일과 카드 5장을 차례로 놓고, 블록을 공부·잠·운동·쉬기로 나누고, 균형 점검표를 표시한다.', challenge: '넷째 문항에서 돌발 일정(가족 행사)이 생긴 저녁을 다시 차례로 놓는다(함정 카드가 섞인다).' },
        activity: {
          title: '시험 주간 균형 일과판', tool: 'kitchen',
          teacher: '"시험 주간에 가장 먼저 줄이고 싶은 시간은 무엇인가요?" 대부분 잠이라고 답하면 "잠을 줄이면 공부한 것은 어떻게 될까요?"라고 되묻는다. 일과 블록을 놓을 때 공부만 채우지 말고 잠·움직임·쉬기 블록이 빠지지 않았는지 함께 본다. 계획이 틀어지는 날이 있어도 다시 짜면 된다는 점을 짚는다.',
          task: '시험 주간 저녁 일과 카드를 차례로 놓고, 공부·잠·운동·쉬기 블록이 고루 들어갔는지 점검해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('시험 주간 저녁 일과를 차례대로 놓으세요.', [{ id: 't1', text: '저녁 먹기' }, { id: 't2', text: '1시간 30분 공부' }, { id: 't3', text: '10분 스트레칭' }, { id: 't4', text: '1시간 복습' }, { id: 't5', text: '휴대폰 내려놓고 잠자기' }]),
              OB('저녁 일과 3장을 차례대로 놓으세요.', [{ id: 't1', text: '저녁 먹기' }, { id: 't2', text: '1시간 30분 공부' }, { id: 't5', text: '휴대폰 내려놓고 잠자기' }])),
            IT(SB('일과 블록을 공부·잠·운동·쉬기로 나누세요.', ['공부', '잠', '운동', '쉬기'], [
              { id: 'b1', text: '수학 문제 풀기', to: '공부' }, { id: 'b2', text: '영어 단어 외우기', to: '공부' }, { id: 'b3', text: '정해진 시간에 잠자리', to: '잠' },
              { id: 'b4', text: '줄넘기 10분', to: '운동' }, { id: 'b5', text: '동네 한 바퀴 걷기', to: '운동' }, { id: 'b6', text: '좋아하는 노래 듣기', to: '쉬기' }, { id: 'b7', text: '가족과 이야기하기', to: '쉬기' }], { groups: false })),
            IT(CL('내 시험 주간 계획이 균형 잡혔는지 알맞은 항목만 표시하세요.', '균형 점검표', [
              { id: 'c1', text: '잠 시간을 줄이지 않았다', ok: true }, { id: 'c2', text: '하루 한 번 몸을 움직인다', ok: true }, { id: 'c3', text: '공부 사이에 쉬기를 넣었다', ok: true },
              { id: 'c4', text: '시험 전날은 밤을 새운다' }, { id: 'c5', text: '공부하느라 끼니를 거른다' }])),
            IT(OB('돌발 일정(가족 행사 2시간)이 생긴 저녁을 다시 차례로 놓으세요.', [{ id: 'd1', text: '가족 행사 다녀오기' }, { id: 'd2', text: '1시간 핵심만 복습' }, { id: 'd3', text: '휴대폰 내려놓고 잠자기' }], {}, [{ id: 'dx', text: '못 한 공부 새벽까지 하기' }]),
              null, null, { conclude: '시험 주간에도 잠·움직임·쉬기를 지켜야 공부가 남아요. 계획이 틀어지면 잠을 줄이지 말고 할 몫을 줄여 다시 짜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 시험 주간 하루 계획을 블록으로 써요.', columns: ['블록', '언제·얼마나'], cells: [['공부', ''], ['운동', ''], ['쉬기', ''], ['잠', '']], answer: '(예) 저녁 7~9시, 줄넘기 10분, 노래 듣기, 정해진 시간에 잠자리' }] },
        notes: '계획 글의 \'3일·7일 일과판\'은 교구가 요일 칸을 만들지 못해 저녁 일과 차례·블록 나누기·균형 점검으로 바꿨다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.write', {
        title: '나의 스트레스 대처 선언문', method: '나의 대처 선언문', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 스트레스를 받을 때 ___ 한다")로 한 문장을 쓴다.', base: '세 문장을 쓰고 기준 3개(구체적·건강한 전략·도움 경로)를 스스로 점검한다.', challenge: '전략이 통하지 않을 때의 대안까지 넣어 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'스트레스 안 받기\'와 \'시험 걱정이 크면 할 일을 셋으로 나누고 20분 걷는다\', 어느 선언이 내일 지킬 수 있을까요?" 두 문장을 견준 뒤 선언문을 쓰게 한다. "나는 그냥 참아요"라는 학생에게 "참는 것 말고, 참은 다음에 할 수 있는 일 하나를 더해 볼까요?"라고 말해 준다. 도움 경로(믿는 어른·상담 선생님)를 한 문장 넣게 하고, 선언문은 걷지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '"나는 스트레스를 받을 때 ___ 한다"로 시작하는 나의 대처 선언문을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '나의 대처 선언문', starter: '나는 스트레스를 받을 때 ___ 한다.' },
              prompt: '나의 대처 선언문을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['구체적인 행동으로 썼다', '건강한 대처를 골랐다', '도움을 청할 사람을 넣었다'] }, difficulty: 0.25 },
            { prompt: '문장 틀을 채워 선언문을 한 문장 쓰고 기준표에 표시해요.', toolOptions: { minChars: 12, minSentences: 1 }, target: { selfCheck: ['구체적인 행동으로 썼다', '건강한 대처를 골랐다'] } },
            { prompt: '대처가 통하지 않을 때의 대안까지 넣어 선언문을 쓰고 기준표에 표시해요.', target: { selfCheck: ['구체적인 행동으로 썼다', '건강한 대처를 골랐다', '도움을 청할 사람을 넣었다', '통하지 않을 때의 대안을 넣었다'] } }),
            { type: 'choice', prompt: '대처 선언문에 넣기 가장 알맞은 문장은?', options: ['나는 스트레스를 받지 않겠다.', '나는 걱정이 크면 할 일을 셋으로 나누고, 그래도 힘들면 담임 선생님께 말한다.', '나는 밤새 게임으로 잊는다.'], answer: 1, difficulty: 0.2, explain: '구체적인 행동과 도움 경로가 함께 있어야 실천할 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 스트레스 대처 선언문',
          items: [
            { type: 'short', prompt: '"나는 스트레스를 받을 때 ___ 한다"로 선언문을 세 문장 써요(걷지 않아요).' },
            { type: 'check', prompt: '내 선언문을 기준표로 점검해요.', options: ['구체적인 행동이다', '건강한 대처다', '도움을 청할 사람이 들어 있다'] },
          ],
          easy: { note: '"나는 스트레스를 받을 때 ___ 한다" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '나는 스트레스를 받을 때 ___ 한다.', answer: '(예) 할 일을 나누고 20분 걷기를' }] },
        },
        notes: '선언문은 걷거나 발표하지 않는다. ' + SAFE_NOTE,
      }),
      M('wrap.help', {
        title: '도움을 청할 때를 알아보기', method: '도움이 필요한 기준', tool: 'emotion', minutes: 7,
        levels: { easy: '첫 장면 하나에서 도움을 청할 때인지 고르고 결과 장면을 본다.', base: '장면 두 개에서 도움 요청 시점을 고르고 상담 연결 결과를 본다.', challenge: '셋째 질문에서 상담을 신청하는 방법까지 고른다.' },
        wrap: {
          teacher: '"스트레스는 누구나 느끼는데, 그럼 언제 어른의 도움을 청해야 할까요?" 두 장면을 함께 읽고 고른 뒤 결과 글을 소리 내어 읽는다. "상담은 큰 문제 있는 사람만 가는 곳"이라는 말이 나오면 "잠·흥미 변화가 몇 주씩 이어진다면 혼자 버티기보다 이야기할 때예요. 상담은 일찍 갈수록 가볍게 풀려요"라고 말해 준다. 판단은 학생이 아니라 어른·전문가가 함께 한다는 점을 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '서준', situation: '가상 인물 서준이 몇 주째 밤에 잠을 설치고, 좋아하던 축구에도 흥미가 없다고 한다.', ask: '서준에게 알맞은 행동은?', motif: 'cloud', choices: [
              { id: 'wait', text: '좀 더 혼자 참아 본다', result: '몇 주가 더 지나도 잠과 흥미가 돌아오지 않는다.', why: '몇 주씩 이어지면 혼자 버틸 때가 아니에요.' },
              { id: 'talk', text: '담임·상담 선생님께 이야기한다', result: '상담 선생님과 함께 잠과 마음을 살피기 시작한다.' },
              { id: 'game', text: '게임으로 잊는다', result: '잠은 더 줄고 마음은 그대로다.', why: '피하는 대처는 걱정을 남겨요.' }] },
              prompt: '서준의 장면을 읽고 알맞은 행동을 골라요.', target: { choice: 'talk' }, difficulty: 0.15 }),
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '친구', situation: '친구가 "요즘 아무것도 하기 싫고 학교 오기도 힘들어"라고 말한다. 이런 말이 몇 주째다.', ask: '친구에게 할 말은?', motif: 'cloud', choices: [
              { id: 'lazy', text: '"게을러서 그래, 정신 차려"', result: '친구가 더는 말하지 않는다.', why: '의지 탓을 하면 도움을 청하기 어려워져요.' },
              { id: 'together', text: '"말해 줘서 고마워. 상담 선생님께 같이 가 볼래?"', result: '친구가 망설이다 함께 상담실에 간다.' }] },
              prompt: '친구의 말을 읽고 알맞은 말을 골라요.', target: { choice: 'together' }, difficulty: 0.2 },
            { type: 'choice', prompt: '학교에서 상담을 신청하는 방법으로 알맞은 것은?', options: ['담임 선생님께 말하거나 상담실에 직접 찾아간다', '큰일이 생길 때까지 기다린다', '인터넷 글로 혼자 진단해 본다'], answer: 0, difficulty: 0.2, explain: '담임 선생님이나 상담실이 바로 이어 줘요. 판단은 어른·전문가와 함께해요.' },
          ],
        },
        worksheet: {
          title: '도움을 청할 때',
          items: [
            { type: 'check', prompt: '어른의 도움을 청할 때라고 생각되는 것에 표시해요.', options: ['잠·흥미 변화가 몇 주씩 이어질 때', '혼자 해 본 대처가 통하지 않을 때', '친구가 걱정될 때'] },
            { type: 'short', prompt: '학교에서 상담을 신청하는 방법을 한 문장으로 써요.' },
          ],
        },
        notes: '계획 글의 \'2주 넘게\'는 수치 근거가 없어 \'몇 주째\'로 썼다(사람 확인). 진단처럼 말하지 않는다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 7학년 · 감정 조절 전략 비교 (life.m.emotion-regulation) ====
  {
    const M = MK('emotion-regulation', [7]);
    const SHORT = [['소리 지르기', 6], ['꾹 참고 삼키기', 3], ['잠깐 자리 뜨기', 5], ['친구에게 말하기', 5], ['산책하기', 4]];
    const LONG = [['소리 지르기', 1], ['꾹 참고 삼키기', 2], ['잠깐 자리 뜨기', 6], ['친구에게 말하기', 7], ['산책하기', 6]];
    const CH = { type: 'bar', unit: '점', xLabel: '전략', yLabel: '나아진 정도(0~10)', max: 10, scale: 1 };
    const PARTS = ['눈', '귀', '목', '어깨', '가슴', '배', '손목', '무릎'];
    const D1 = { text: '지안은 모둠 발표 자료를 잃어버렸다는 오해를 받았다. 사실은 다른 친구가 파일을 지웠다. 모둠 친구들이 지안을 쳐다본다.', ask: '지안은 어떻게 할까?', motif: 'storm', choices: [
      { id: 'shout', text: '바로 "내가 안 했다고!" 소리치며 따진다', result: '교실이 조용해지고 다툼이 커진다.', impact: [{ who: '모둠', text: '서로 날이 선다', tone: -1 }], why: '화가 가장 클 때 따지면 말이 거칠어져 오해가 더 커져요.', end: '소리치며 따졌어요.',
        next: { text: '친구 하나가 "왜 소리를 질러?" 하고 맞받아친다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'more', text: '더 크게 맞받아친다', result: '선생님이 와서 말리고, 진짜 사정은 아무도 듣지 못한다.', impact: [{ who: '지안', text: '억울함이 그대로 남는다', tone: -1 }], why: '목소리가 커질수록 사정은 묻혀요.' },
          { id: 'pause', text: '"잠깐 쉬었다 다시 말할게" 하고 숨을 고른다', result: '조금 뒤 차분하게 사정을 말할 기회가 생긴다.', impact: [{ who: '모둠', text: '이야기를 들을 준비가 된다', tone: 1 }], why: '멈춘 것은 잘했어요. 처음부터 멈췄다면 다툼이 없었어요.' }] } },
      { id: 'leave', text: '"잠깐만" 하고 자리를 떠 물을 마시고 숨을 고른다', result: '열이 조금 식고 생각이 정리된다.', impact: [{ who: '지안', text: '마음이 가라앉는다', tone: 1 }], end: '잠깐 자리를 떠 마음을 가라앉혔어요.',
        next: { text: '돌아오니 모둠이 아직 지안을 의심하는 눈치다.', ask: '어떻게 말할까?', choices: [
          { id: 'imsg', text: '"나는 오해받아 속상해. 파일 기록을 같이 확인하면 좋겠어"', result: '모둠이 기록을 확인하고 오해가 풀린다.', impact: [{ who: '모둠', text: '사실을 알게 된다', tone: 1 }], end: '나 전달법으로 말해 오해가 풀렸어요.',
            next: { text: '파일을 지운 친구가 미안해하며 고개를 숙인다.', ask: '지안은 어떻게 할까?', choices: [
              { id: 'accept', text: '"알려 줘서 고마워. 같이 다시 만들자"', result: '모둠이 함께 자료를 다시 만든다.', impact: [{ who: '파일을 지운 친구', text: '사과를 받아 준다고 느낀다', tone: 1 }] },
              { id: 'blame', text: '"너 때문에 내가 욕먹었잖아" 하고 몰아붙인다', result: '이번엔 그 친구가 움츠러든다.', impact: [{ who: '파일을 지운 친구', text: '상처를 받는다', tone: -1 }], why: '사실이 밝혀졌으면 탓하기보다 함께 해결해요.' }] } },
          { id: 'silent', text: '아무 말 없이 꾹 참는다', result: '오해는 그대로 남고 지안은 집에 가서도 속이 끓는다.', impact: [{ who: '지안', text: '억울함이 쌓인다', tone: -1 }], why: '감정을 꾹 참는 것은 조절이 아니라 쌓아 두는 거예요.' }] } },
      { id: 'write', text: '쉬는 시간에 할 말을 공책에 정리한 뒤 말한다', result: '사실과 내 마음을 차분하게 말할 수 있다.', impact: [{ who: '모둠', text: '사정을 듣게 된다', tone: 1 }], ending: '글로 정리한 뒤 차분하게 말했어요.' }] };
    const R1 = [{ id: 'r1', text: '화가 클 때 잠깐 멈추면 할 말을 고를 수 있다' }, { id: 'r2', text: '감정은 참지 말고 나를 주어로 말한다' },
      { id: 'r3', text: '감정은 꾹 참는 것이 조절이다', why: '참기만 하면 감정이 쌓여요. 표현 방법을 고르는 것이 조절이에요.' }, { id: 'r4', text: '억울하면 큰 소리로 따져야 이긴다', why: '소리가 커지면 사정은 오히려 묻혀요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.scale', {
        title: '나만 빠진 약속, 감정의 크기', method: '감정 강도 자가 측정', tool: 'emotion', minutes: 6,
        levels: { easy: '서운함 한 가지 감정의 크기만 눈금에서 고른다.', base: '서운함과 화남 두 감정의 크기를 고르고 반 친구들의 고른 값이 퍼진 모양을 본다.', challenge: '같은 상황인데 고른 크기가 서로 다른 까닭을 짝과 토의한다.' },
        intro: {
          teacher: '"친구들이 단톡방에서 나만 빼고 주말 약속을 잡은 걸 알았다면, 서운함은 1부터 5 가운데 얼마쯤일까요?" 시연 단추로 눈금이 골라지는 모습을 보인 뒤 학생들은 손가락으로 크기를 표시하게 하고, 교사가 칠판에 고른 수만 센다(누가 몇을 골랐는지는 적지 않는다). "이 정도로 서운하면 속 좁은 거예요"라는 말이 나오면 "같은 일에도 감정의 크기가 다른 건 자연스러운 일이에요. 크기를 아는 것이 조절의 첫걸음이에요"라고 말해 준다.',
          student: '가상 상황(나만 빼고 잡힌 약속)을 읽고 서운함과 화남이 얼마나 클지 눈금에서 골라 손가락으로 표시해요. 친구들의 크기가 왜 다른지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '친구들이 단톡방에서 나만 빼고 주말 약속을 잡은 걸 알았다.', feeling: '서운함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper-cut phone screen showing a group chat with paper speech bubbles, and a student looking at it with a small storm cloud above', banner: '내 감정은 얼마나 클까?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '고른 크기는 이름 없이 수만 센다. 실제로 겪은 일을 말하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.video-case', {
        title: '화를 터뜨린 지안의 네 장면', method: '폭발한 인물 사례', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장에서 멈출 수 있던 장면을 고른다.', base: '장면 4장에서 멈출 수 있던 장면을 고르고 까닭을 말한다.', challenge: '멈출 수 있던 장면에 지안이 할 한마디를 넣어 말한다.' },
        intro: {
          teacher: '"지안이 후회하지 않으려면 어느 장면에서 멈춰야 했을까요?" 가상 인물 지안이 체육 시간에 공을 놓쳐 놀림을 듣고, 얼굴이 달아오르고, 공을 세게 차고, 혼자 후회하는 네 장면을 보인다. 시연 단추로 \'얼굴이 달아오른다\' 장면이 골라지는 모습을 보인다. "화나는 걸 어떻게 멈춰요, 그냥 터지는 거죠"라는 말에는 "터지기 전에 몸이 먼저 신호를 보내요. 그 신호를 알아차리면 멈출 틈이 생겨요"라고 말해 준다.',
          student: '가상 인물 지안의 네 장면에서 멈출 수 있었던 장면을 골라요. 그 장면에서 지안이 무엇을 했으면 좋았을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '멈출 수 있던 장면', title: '지안의 체육 시간', cards: [
            { id: 'c1', text: '공을 놓쳐 놀림을 듣는다', motif: 'star' }, { id: 'c2', text: '얼굴이 달아오르고 주먹에 힘이 들어간다', motif: 'storm' },
            { id: 'c3', text: '공을 벽에 세게 찬다', motif: 'cloud' }, { id: 'c4', text: '혼자 앉아 후회한다', motif: 'rain' }], shuffle: false }, sequence: [{ pick: ['c2'] }] },
          art: { draw: 'a paper-cut gym scene with a dropped ball, a student with flushed cheeks clenching fists, and a small paper thermometer rising beside them', banner: '어디서 멈출 수 있었을까?', extra: [{ motif: 'storm', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.compare', {
        title: '전략별 효과 그래프 견주기', method: '전략 효과 비교표', tool: 'chart', minutes: 15,
        levels: { easy: '막대 위에 값이 보이는 그래프에서 가장 높은 막대를 읽는다.', base: '\'바로 뒤\'와 \'하루 뒤\' 두 그래프를 읽고 같은 전략의 값을 견주어 단기·장기 효과를 비교한다.', challenge: '넷째 문항에서 이 그래프의 한계(가상 자료·스스로 매긴 점수)를 고른다.' },
        activity: {
          title: '전략별 효과 그래프 견주기', tool: 'chart',
          teacher: '"소리를 지르면 속이 시원하잖아요, 그럼 좋은 전략일까요?" \'바로 뒤\' 그래프에서 소리 지르기가 높은 것을 함께 읽고, \'하루 뒤\' 그래프로 넘어가 같은 막대를 다시 읽게 한다. "참는 게 제일 어른스러운 거 아니에요?"라는 학생에게 "참고 삼키기 막대는 바로 뒤와 하루 뒤에 어땠나요?"라고 되묻는다. 이 그래프는 수업용 가상 학급 자료이며 사람마다 맞는 전략이 다를 수 있다고 밝힌다.',
          task: '가상 학급이 매긴 전략별 \'마음이 나아진 정도\' 그래프 두 개(바로 뒤·하루 뒤)를 읽고, 단기 효과와 장기 효과를 견주어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('\'바로 뒤\' 그래프에서 마음이 가장 나아졌다고 한 전략을 고르세요.', Object.assign({ title: '감정이 클 때 쓴 전략 — 바로 뒤(가상 학급)', data: SHORT, question: '바로 뒤 가장 높은 전략은?', choices: SHORT.map((d) => d[0]) }, CH), { pick: 0 })),
            IT(RD('\'하루 뒤\' 그래프에서 마음이 가장 나아졌다고 한 전략을 고르세요.', Object.assign({ title: '감정이 클 때 쓴 전략 — 하루 뒤(가상 학급)', data: LONG, question: '하루 뒤 가장 높은 전략은?', choices: LONG.map((d) => d[0]) }, CH), { pick: 3 })),
            IT(RD('\'소리 지르기\'는 바로 뒤보다 하루 뒤에 몇 점 낮아졌는지 읽어 쓰세요(바로 뒤 6점).', Object.assign({ title: '감정이 클 때 쓴 전략 — 하루 뒤(가상 학급)', data: LONG, question: '6점에서 몇 점 낮아졌나요?' }, CH), { value: 5 })),
            IT(RD('두 그래프를 견주어 알맞은 해석을 고르세요.', Object.assign({ title: '감정이 클 때 쓴 전략 — 하루 뒤(가상 학급)', data: LONG, question: '두 그래프를 견준 해석으로 알맞은 것은?', choices: ['바로 시원한 전략이 하루 뒤에도 가장 좋다', '말하기·자리 뜨기는 하루 뒤에 더 높다', '모든 전략의 효과가 같다'] }, CH), { pick: 1 }),
              null,
              { prompt: '이 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: { question: '이 가상 자료로 알 수 없는 것은?', choices: ['하루 뒤 가장 높은 전략', '모든 사람에게 꼭 맞는 전략', '소리 지르기의 하루 뒤 점수'] }, target: { pick: 1 } },
              { conclude: '바로 시원한 전략과 하루 뒤에도 도움이 되는 전략은 다를 수 있어요. 꾹 참기도, 터뜨리기도 아닌 표현 방법을 골라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 그래프에서 전략 두 개의 점수를 옮겨 써요.', columns: ['전략', '바로 뒤', '하루 뒤'], cells: [['소리 지르기', '', ''], ['친구에게 말하기', '', '']], answer: '6·1, 5·7' }] },
        notes: '그래프는 가상 자료다. ' + SAFE_NOTE,
      }),
      M('activity.script', {
        title: '"나 전달법" 대본 쓰기', method: '"나 전달법" 역할극 대본', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '"나는 ___할 때 ___해서 ___하면 좋겠어" 틀의 빈칸을 채워 쓴다.', base: '갈등 장면 두 개에 나 전달법 대본을 쓰고 기준 3개(상황·내 감정·바람)를 스스로 점검한다.', challenge: '셋째 문항에서 상대의 반응과 내 대답까지 넣어 대본을 늘린다.' },
        activity: {
          title: '"나 전달법" 대본 쓰기', tool: 'rubric-writing',
          teacher: '"\'너 왜 맨날 늦어?\'와 \'나는 네가 늦을 때 걱정돼서, 늦으면 미리 알려 주면 좋겠어\', 듣는 사람 마음이 어떻게 다를까요?" 두 문장을 소리 내어 견준 뒤 대본을 쓰게 한다. "그렇게 말하면 오글거려요"라는 학생에게 "말투는 내 말로 바꿔도 돼요. \'너는\' 대신 \'나는\'으로 시작하는 것만 지켜 봐요"라고 말해 준다. 다 쓴 대본은 짝과 한 번씩 소리 내어 읽게 한다.',
          task: '갈등 장면에 "나는 ___할 때 ___해서 ___하면 좋겠어" 꼴의 대본을 쓰고, 기준표로 점검한 뒤 짝과 읽어요.',
          levels: { easy: { starter: '나는 ___할 때 ___해서 ___하면 좋겠어.' }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '빌려준 물건을 친구가 몇 주째 돌려주지 않아요. 나 전달법 대본을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '빌려준 물건을 몇 주째 돌려받지 못한 상황에서 친구에게 할 말을 나 전달법으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 1, maxSentences: 3, title: '나 전달법 대본 1' }, target: { selfCheck: ['어떤 상황인지 썼다', '내 감정을 \'나는\'으로 말했다', '바라는 것을 부탁하는 말로 썼다'], mustInclude: [['나는', '내가']] } }),
            IT({ prompt: '모둠 과제를 나 혼자 하게 됐어요. 나 전달법 대본을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '모둠 과제를 혼자 떠맡게 된 상황에서 모둠 친구들에게 할 말을 나 전달법으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 1, maxSentences: 3, title: '나 전달법 대본 2' }, target: { selfCheck: ['어떤 상황인지 썼다', '내 감정을 \'나는\'으로 말했다', '바라는 것을 부탁하는 말로 썼다'], mustInclude: [['나는', '내가']] } }),
            IT({ prompt: '대본 2에 친구의 반응("나도 바빴어")과 내 대답을 더해 4줄로 늘리고 기준표에 표시하세요.', toolOptions: { topic: '친구가 "나도 바빴어"라고 답했을 때 이어 갈 대본을 4줄로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 5, title: '대본 이어 쓰기' }, target: { selfCheck: ['친구의 반응을 넣었다', '친구 사정을 인정하는 말을 넣었다', '내 바람을 다시 차분하게 말했다'] } },
              { prompt: '친구의 반응("나도 바빴어")에 이어 갈 내 대답 한 줄을 쓰고 기준표에 표시하세요.', toolOptions: { minChars: 12, minSentences: 1, starter: '그랬구나, 나는 ___.' }, target: { selfCheck: ['친구 사정을 인정하는 말을 넣었다', '내 바람을 다시 차분하게 말했다'] } },
              null, { conclude: '\'너는\'으로 시작하면 비난처럼 들리고, \'나는\'으로 시작하면 내 마음이 전해져요. 상황·감정·바람을 차례로 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"너 왜 그래?"를 나 전달법으로 바꿔 한 문장으로 써요.' }],
          easy: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '나는 ___할 때 ___해서 ___하면 좋겠어.', answer: '(예) 약속에 늦을 때, 걱정돼서, 미리 알려 주면' }] },
        notes: '대본은 가상 장면에 대해 쓰고, 실제 친구 이름을 쓰지 않게 한다. ' + SAFE_NOTE,
      }),
      M('activity.dilemma', {
        title: '억울한 오해 앞의 갈림길', method: '분노의 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고 근거 카드를 한 장 이상 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 맞는 근거 두 장을 모두 고른다.' },
        activity: {
          title: '억울한 오해 앞의 갈림길', tool: 'dilemma',
          teacher: '"억울할 때 바로 따지는 것과 잠깐 멈추는 것, 어느 쪽이 진실을 밝히는 데 빠를까요?" 학생마다 한 길을 끝까지 가 본 뒤, 소리친 길과 자리를 뜬 길을 견주게 한다. "참는 길이 제일 착한 거죠?"라는 학생에게 "꾹 참은 지안은 집에 가서 어땠나요? 참기와 조절은 달라요"라고 되묻는다. 감정을 없애는 것이 아니라 표현할 때와 방법을 고르는 것이 조절이라는 점을 짚는다.',
          task: '오해를 받은 가상 인물 지안의 갈림길에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '지안이 억울한 오해를 받았어요. 첫 갈림길에서 골라 결과를 보세요.', base: '지안이 억울한 오해를 받았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 맞는 근거 두 장을 모두 고르세요.' },
              '억울한 오해', D1, [['leave', 'imsg', 'accept'], ['write']], R1, ['r1', 'r2']),
            IT({ prompt: '하굣길에 화가 아직 안 풀렸어요. 지안의 다음 선택을 따라가세요.', toolOptions: { title: '하굣길', scene: { text: '오해는 풀렸지만 지안은 하굣길에도 아직 속이 끓는다.', ask: '남은 화를 어떻게 할까?', motif: 'storm', choices: [
              { id: 'post', text: 'SNS에 그 친구 욕을 올린다', result: '글이 퍼져 새 다툼이 생긴다.', impact: [{ who: '반 친구들', text: '다툼에 휘말린다', tone: -1 }], why: '남은 화를 글로 퍼뜨리면 새 상처가 생겨요.' },
              { id: 'walk', text: '좋아하는 노래를 들으며 한 정거장 걸어간다', result: '집에 닿을 즈음 마음이 가라앉는다.', impact: [{ who: '지안', text: '마음이 편해진다', tone: 1 }], ending: '몸을 움직여 남은 화를 풀었어요.' }] }, reasons: [{ id: 'q1', text: '남은 감정은 남을 다치게 하지 않는 방법으로 푼다' }, { id: 'q2', text: '화는 어디든 풀어야 하니 SNS도 괜찮다', why: 'SNS에 올린 말은 지울 수 없고 다른 사람을 다치게 해요.' }], compare: true },
              target: { path: [['walk']], reasons: ['q1'] } }),
            IT({ prompt: '집에 오니 동생이 내 물건을 망가뜨렸어요. 지안의 선택을 따라가세요.', toolOptions: { title: '집에서', scene: { text: '집에 오니 동생이 지안의 이어폰을 망가뜨려 놓았다. 오늘 쌓인 화가 다시 올라온다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'yell', text: '오늘 쌓인 화까지 동생에게 쏟아 낸다', result: '동생이 울고 집안 분위기가 나빠진다.', impact: [{ who: '동생', text: '지나치게 혼난다', tone: -1 }], why: '다른 일에서 쌓인 화를 엉뚱한 사람에게 쏟지 않아요.' },
              { id: 'say', text: '"나 오늘 힘든 일이 있어서 예민해. 이어폰 얘기는 이따 하자"', result: '동생이 미안해하고, 저녁에 차분히 이야기한다.', impact: [{ who: '동생', text: '사정을 알게 된다', tone: 1 }], ending: '내 상태를 먼저 말하고 나중에 이야기했어요.' }] }, reasons: [{ id: 'p1', text: '내 상태를 말하면 엉뚱한 화풀이를 막는다' }, { id: 'p2', text: '화가 나면 가까운 사람에게 풀어도 된다', why: '가까운 사람일수록 화풀이에 더 상처받아요.' }], compare: true },
              target: { path: [['say']], reasons: ['p1'] }, conclude: '화가 클 때는 잠깐 멈추고, 나를 주어로 말하고, 남은 감정은 남을 다치게 하지 않는 방법으로 풀어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '억울한 오해를 받아 화가 날 때 가장 먼저 할 일은?', options: ['큰 소리로 따진다', '잠깐 멈추고 숨을 고른 뒤 말한다', '아무 말 없이 꾹 참는다'], answer: '잠깐 멈추고 숨을 고른 뒤 말한다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.body', {
        title: '감정이 보내는 몸 신호 지도', method: '감정의 몸 지도', tool: 'body', minutes: 15,
        levels: { easy: '고를 곳 8곳에서 분노 신호가 나타나는 곳을 고르고, 고른 곳 이름이 바로 보인다.', base: '분노·불안·슬픔 세 감정의 신호 부위를 고르고(이름 표시 없음), 부위마다 맞는 진정 동작을 보기에서 고른다.', challenge: '활동지에서 분노 신호가 처음 → 점점 커지는 순서를 적는다(교구는 순서를 놓지 못해 활동지로 옮김).' },
        activity: {
          title: '감정이 보내는 몸 신호 지도', tool: 'body',
          teacher: '"화가 날 때 몸에서 가장 먼저 달라지는 곳은 어디인가요?" 종이 몸에서 부위를 고를 때마다 그 신호를 알아차리면 무엇을 할 수 있을지 한 사람씩 말하게 한다. 교구에 손 칸이 없어 \'주먹에 힘\'은 손목 칸으로 고르게 하고, 학생이 자기 손을 쥐었다 펴 보게 한다. "몸 신호는 사람마다 다르잖아요"라는 학생에게 "맞아요. 그래서 오늘은 가상 인물의 신호를 보고, 내 신호는 활동지 혼자 보기 칸에 적어요"라고 말해 준다.',
          task: '가상 인물 지안의 감정별 몸 신호를 종이 몸에서 고르고, 부위마다 알맞은 진정 동작을 골라요.',
          levels: { easy: { names: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '지안은 화가 나면 "가슴이 두근거리고 어깨가 굳고 주먹에 힘이 들어간다"고 해요. 신호가 나타나는 곳을 모두 고르세요(주먹은 손목 칸).', toolOptions: { mode: 'parts', parts: PARTS }, target: { parts: ['가슴', '어깨', '손목'] } }),
            IT({ prompt: '지안은 불안하면 "배가 울렁거리고 숨이 가빠진다"고 해요. 신호가 나타나는 곳을 고르고 알맞은 진정 동작을 고르세요.', toolOptions: { mode: 'parts', parts: PARTS, ask: { q: '불안 신호에 알맞은 진정 동작은?', choices: ['천천히 길게 숨 내쉬기', '더 빨리 숨 쉬기', '아무것도 안 먹기'], why: ['', '숨이 빨라지면 불안이 더 커져요.', '끼니를 거르면 몸이 더 지쳐요.'] } }, target: { parts: ['배', '가슴'], pick: 0 } }),
            IT({ prompt: '지안은 슬프면 "눈물이 고이고 목이 멘다"고 해요. 신호가 나타나는 곳을 고르고 알맞은 행동을 고르세요.', toolOptions: { mode: 'parts', parts: PARTS, ask: { q: '슬픔 신호에 알맞은 행동은?', choices: ['울면 약해 보이니 참는다', '믿는 사람에게 마음을 이야기한다', '혼자 방에만 있는다'], why: ['우는 것은 약한 것이 아니에요.', '', '혼자 오래 있으면 마음이 더 무거워질 수 있어요.'] } }, target: { parts: ['눈', '목'], pick: 1 } }),
            IT({ prompt: '화가 나 어깨가 굳을 때 알맞은 진정 동작을 고르세요(어깨를 고르고 답해요).', toolOptions: { mode: 'parts', parts: PARTS, ask: { q: '어깨가 굳을 때 알맞은 동작은?', choices: ['어깨를 귀까지 올렸다 툭 내리기', '주먹으로 책상 치기', '어깨에 더 힘주기'], why: ['', '책상을 치면 손을 다치고 화도 커져요.', '힘을 더 주면 긴장이 커져요.'] } }, target: { parts: ['어깨'], pick: 0 } },
              null, null, { conclude: '감정은 몸에 먼저 신호를 보내요. 신호를 알아차리면 숨 내쉬기·힘 풀기·말하기로 감정이 터지기 전에 다룰 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '혼자 보기 칸: 화가 날 때 지안의 몸 신호가 처음 → 점점 커지는 순서를 화살표로 써요.' }],
          easy: [{ type: 'choice', prompt: '불안해서 숨이 가빠질 때 알맞은 동작에 ○ 해요.', options: ['천천히 길게 숨 내쉬기', '더 빨리 숨 쉬기'], answer: '천천히 길게 숨 내쉬기' }] },
        notes: '교구에 손 칸이 없어 \'주먹\'은 손목 칸으로 바꿨다. 계획 도전 단계의 \'신호 순서 놓기\'는 교구가 하지 못해 활동지로 옮겼다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.toolkit', {
        title: '나의 감정 조절 키트 고르기', method: '나의 감정 조절 키트', tool: 'kitchen', minutes: 7,
        levels: { easy: '키트 점검표에서 건강한 전략만 고른다(교사가 항목을 하나씩 읽어 준다).', base: '건강한 전략을 고르고, 활동지에 분노·불안·슬픔별로 내가 쓸 전략을 2개씩 적는다.', challenge: '키트를 쓸 수 없는 상황(수업 중·시험 중)의 대안을 셋째 질문에서 고른다.' },
        wrap: {
          teacher: '"오늘 본 전략 가운데 내 감정 조절 키트에 넣을 것은 무엇인가요?" 점검표를 고른 뒤 활동지에 감정별로 두 개씩 적게 한다. "소리 지르기도 효과 있었잖아요"라는 학생에게 "바로 뒤만 보면 그랬죠. 하루 뒤 그래프를 떠올려 볼까요?"라고 되묻는다. 키트에는 늘 \'도움을 청할 사람\' 칸을 함께 넣게 한다.',
          exitTicket: [
            X('kitchen', CL('내 감정 조절 키트에 넣을 건강한 전략만 표시해요.', '나의 감정 조절 키트', [
              { id: 'k1', text: '잠깐 자리 뜨고 숨 고르기', ok: true }, { id: 'k2', text: '나 전달법으로 말하기', ok: true }, { id: 'k3', text: '걷거나 몸 움직이기', ok: true },
              { id: 'k4', text: '믿는 사람에게 털어놓기', ok: true }, { id: 'k5', text: '물건 세게 던지기' }, { id: 'k6', text: '꾹 참고 아무에게도 말 안 하기' }, { id: 'k7', text: 'SNS에 욕 올리기' }]), { difficulty: 0.15 }),
            { type: 'choice', prompt: '"감정은 꾹 참는 것이 조절이다"라는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 참을수록 강해진다', '참기만 하면 감정이 쌓이니 표현할 때와 방법을 고른다', '감정은 아예 없애야 한다'], answer: 1, difficulty: 0.2, explain: '조절은 감정을 없애는 것이 아니라 다루는 방법을 고르는 거예요.' },
            { type: 'choice', prompt: '수업 중에 화가 올라와 자리를 뜰 수 없을 때 쓸 대안은?', options: ['조용히 숨을 길게 내쉬고 주먹을 쥐었다 편다', '바로 일어나 교실을 나간다', '옆 친구에게 짜증을 낸다'], answer: 0, difficulty: 0.25, explain: '자리에서도 할 수 있는 숨 고르기·힘 풀기가 있어요.' },
          ],
        },
        worksheet: {
          title: '나의 감정 조절 키트',
          items: [
            { type: 'table', prompt: '감정별로 내가 쓸 전략을 2개씩 써요.', columns: ['감정', '전략 1', '전략 2'], cells: [['분노', '', ''], ['불안', '', ''], ['슬픔', '', '']], answer: '(예) 자리 뜨기·나 전달법, 숨 내쉬기·할 일 나누기, 털어놓기·노래 듣기' },
            { type: 'short', prompt: '키트로도 힘들 때 이야기할 사람을 한 명 써요(이름 대신 \'담임 선생님\'처럼 써요).' },
          ],
        },
        notes: '계획의 \'감정별 2개씩 고르기\'는 점검표가 칸을 나누지 못해 건강한 전략 고르기 + 활동지 감정별 표로 나눴다. ' + SAFE_NOTE,
      }),
      M('wrap.help', {
        title: '조절이 어려울 때 갈 곳', method: '조절이 어려울 때의 연결', tool: 'map', minutes: 7,
        levels: { easy: '이름이 보이는 학교 지도에서 상담실 한 곳에 핀을 꽂는다.', base: '이름을 숨긴 지도에서 상담실·보건실 두 곳을 찾고 이용 방법을 고른다.', challenge: '방과 후에 이야기할 곳을 셋째 질문에서 고르고, 지역 상담 번호 자리를 확인한다.' },
        wrap: {
          teacher: '"감정 조절이 오래 어렵거나 마음이 계속 무거우면, 학교 안 어디로 갈 수 있을까요?" 학교 칸 지도에서 상담실과 보건실을 짚고, 이용하는 방법(쉬는 시간에 찾아가기·담임 선생님께 연결 부탁하기)을 함께 읽는다. "상담실 가면 애들이 이상하게 봐요"라는 말에는 "상담실은 마음을 돌보는 곳이고, 누가 다녀갔는지 함부로 알리지 않아요"라고 말해 준다. 활동지의 지역 상담 번호 칸은 학교가 확인한 번호로 채운다.',
          exitTicket: [
            IT(X('map', PIN('마음이 계속 무거울 때 이야기하러 갈 곳에 핀을 꽂고 이용 방법을 고르세요.', { grid: [6, 4], title: '가상의 우리 중학교', names: false, places: [
              { name: '상담실', icon: 'school', at: [1, 1] }, { name: '보건실', icon: 'hospital', at: [4, 1] }, { name: '교무실', icon: 'office', at: [2, 0] },
              { name: '도서관', icon: 'library', at: [5, 3] }, { name: '운동장', icon: 'park', at: [0, 3] }], ask: { q: '상담실을 이용하는 방법은?', choices: ['쉬는 시간에 찾아가거나 담임 선생님께 연결을 부탁한다', '큰일이 생겨야만 갈 수 있다', '친구들 허락을 받아야 한다'] } }, { place: '상담실', pick: 0 }), { difficulty: 0.15 }),
              { prompt: '이름이 보이는 지도에서 마음이 무거울 때 갈 곳에 핀을 꽂고 이용 방법을 고르세요.', toolOptions: { names: true, readout: true } }),
            X('map', PIN('화가 나 몸이 떨리고 머리가 아플 때 쉬러 갈 곳에 핀을 꽂으세요.', { grid: [6, 4], title: '가상의 우리 중학교', names: false, places: [
              { name: '상담실', icon: 'school', at: [1, 1] }, { name: '보건실', icon: 'hospital', at: [4, 1] }, { name: '교무실', icon: 'office', at: [2, 0] },
              { name: '도서관', icon: 'library', at: [5, 3] }, { name: '운동장', icon: 'park', at: [0, 3] }] }, { place: '보건실' }), { difficulty: 0.2 }),
            { type: 'choice', prompt: '방과 후에 마음이 계속 무거우면 할 수 있는 일로 알맞은 것은?', options: ['보호자에게 말하고, 학교가 알려 준 지역 상담 번호로 연락한다', '다음 날까지 혼자 참는다', '모르는 사람의 온라인 글에 묻는다'], answer: 0, difficulty: 0.2, explain: '학교 밖에서도 보호자와 지역 상담처가 있어요.' },
          ],
        },
        worksheet: {
          title: '조절이 어려울 때 갈 곳',
          items: [
            { type: 'table', prompt: '학교 안 도움 받을 곳과 이용 방법을 써요.', columns: ['곳', '이용 방법'], cells: [['상담실', ''], ['보건실', '']], answer: '쉬는 시간에 찾아가기·담임 선생님께 연결 부탁, 몸이 힘들 때 쉬러 가기' },
            { type: 'blank', prompt: '학교가 알려 준 지역 상담 번호를 옮겨 써요.', text: `지역 상담 번호: ___ (${NUM})`, answer: NUM },
          ],
        },
        notes: `지도는 가상 학교다. 우리 학교 상담실·보건실 위치와 ${NUM}는 교사가 확인해 알려 준다. ` + SAFE_NOTE,
      }),
    );
  }

  // ==== 7학년 · 또래 지지, 들어 주는 친구 (life.m.peer-support) ====
  {
    const M = MK('peer-support', [7]);
    const POLL = [['친구', 45], ['부모', 25], ['혼자 해결', 20], ['선생님', 10]];
    const PHR2 = ['지지하는 말', '상처 주는 말'];
    const PHR = [
      { id: 's1', text: '"너 진짜 힘들었겠다"', to: '지지하는 말' }, { id: 's2', text: '"내가 옆에 있을게"', to: '지지하는 말' },
      { id: 's3', text: '"말해 줘서 고마워"', to: '지지하는 말' }, { id: 's4', text: '"천천히 얘기해도 돼"', to: '지지하는 말' },
      { id: 'h1', text: '"그 정도로 왜 그래"', to: '상처 주는 말' }, { id: 'h2', text: '"다들 그래, 별거 아냐"', to: '상처 주는 말' },
      { id: 'h3', text: '"그건 네가 잘못했네"', to: '상처 주는 말' }, { id: 'h4', text: '"나는 더 힘들었어"', to: '상처 주는 말' },
    ];
    const D1 = { text: '민서는 요즘 매일 밤 11시가 넘으면 "나 너무 힘들어"라고 메시지를 보낸다. 나는 늦게까지 답하느라 잠이 모자라기 시작했다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'alone', text: '친구니까 혼자 계속 밤마다 들어 준다', result: '나는 지쳐 가고, 민서의 힘든 마음은 그대로다.', impact: [{ who: '나', text: '잠이 모자라 지친다', tone: -1 }, { who: '민서', text: '어른의 도움이 닿지 않는다', tone: -1 }], why: '친구의 고민이 내 힘을 넘으면 혼자 떠안지 말고 어른에게 이어요.', end: '혼자 계속 들어 주다 지쳤어요.',
        next: { text: '몇 주 뒤, 민서가 "너밖에 없어"라고 한다. 나도 너무 지쳤다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'cut', text: '답장을 그만하고 연락을 피한다', result: '민서는 갑자기 혼자가 된다.', impact: [{ who: '민서', text: '버려졌다고 느낀다', tone: -1 }], why: '피하기보다 함께 어른에게 가는 길이 있어요.' },
          { id: 'teacher', text: '"너를 돕고 싶어서 상담 선생님께 같이 가고 싶어"', result: '민서가 망설이다 함께 가기로 한다.', impact: [{ who: '민서', text: '도움 받을 곳이 생긴다', tone: 1 }], why: '늦었지만 어른에게 이은 것은 잘했어요.' }] } },
      { id: 'together', text: '"네 얘기 계속 듣고 싶어. 상담 선생님께 같이 가 보자"고 한다', result: '민서가 "선생님이 뭘 알아"라며 망설인다.', impact: [{ who: '민서', text: '도움 받을 길을 알게 된다', tone: 1 }], end: '함께 상담 선생님께 가자고 했어요.',
        next: { text: '민서가 "그럼 너도 나 귀찮은 거구나"라고 한다.', ask: '어떻게 답할까?', choices: [
          { id: 'honest', text: '"아니야, 네가 소중해서 더 든든한 사람과 같이 돕고 싶은 거야"', result: '민서가 조금 마음을 연다.', impact: [{ who: '민서', text: '아끼는 마음을 느낀다', tone: 1 }], end: '솔직한 마음을 말했어요.',
            next: { text: '상담실 앞에서 민서가 "혼자는 못 들어가겠어"라고 한다.', ask: '어떻게 할까?', choices: [
              { id: 'with', text: '"내가 같이 들어갈게"라며 함께 들어간다', result: '민서가 상담 선생님과 이야기를 시작한다.', impact: [{ who: '민서', text: '혼자가 아니다', tone: 1 }] },
              { id: 'later', text: '"그럼 다음에 가자"라며 돌아선다', result: '상담은 또 미뤄진다.', impact: [{ who: '민서', text: '도움이 미뤄진다', tone: -1 }], why: '망설일 때 곁에 있어 주면 한 걸음을 뗄 수 있어요.' }] } },
          { id: 'giveup', text: '"그래, 그냥 내가 들을게"라고 물러선다', result: '밤 메시지가 계속되고 나는 다시 지친다.', impact: [{ who: '나', text: '다시 혼자 떠안는다', tone: -1 }], why: '친구가 서운해해도 어른과 함께 돕는 길을 놓지 않아요.' }] } },
      { id: 'ignore', text: '메시지를 읽고도 답하지 않는다', result: '민서는 아무도 자기 말을 듣지 않는다고 느낀다.', impact: [{ who: '민서', text: '외로움이 커진다', tone: -1 }], why: '연락을 피하면 친구가 더 외로워져요.', ending: '답하지 않아 민서가 혼자가 됐어요.' }] };
    const R1 = [{ id: 'r1', text: '내가 지치면 친구도 오래 도울 수 없다' }, { id: 'r2', text: '어른과 함께 도우면 친구가 더 든든한 도움을 받는다' },
      { id: 'r3', text: '좋은 친구라면 혼자서 다 해결해 줘야 한다', why: '또래가 할 수 있는 일에는 한계가 있어요. 어른과 함께 도와요.' }, { id: 'r4', text: '힘든 얘기는 듣지 않는 게 서로 편하다', why: '들어 주는 것은 소중해요. 다만 혼자 떠안지 않아요.' }];
    const CHECK = ['친구 말을 되말해 주었다', '친구 감정을 읽어 주었다', '열린 질문을 하나 했다', '판단하는 말을 하지 않았다'];

    ALL.push(
      // ---- 도입 ----
      M('intro.bad-listen', {
        title: '휴대폰만 보는 대답', method: '안 들어 주는 대화 관찰', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장에서 문제 장면을 고른다.', base: '장면 4장에서 문제 장면을 모두 고른다.', challenge: '들어 주는 대화로 바뀐 장면들을 차례로 놓아 본다(말로 진행).' },
        intro: {
          teacher: '"민서가 고민을 꺼냈을 때, 듣는 친구의 어떤 모습이 민서의 입을 닫게 했을까요?" 가상 네 장면을 보이고 시연 단추로 문제 장면이 바구니에 담기는 모습을 보인다. "대답은 했잖아요"라는 말이 나오면 "\'응응\'만 하며 휴대폰을 볼 때, 민서는 들어 준다고 느꼈을까요?"라고 되묻는다. 오늘은 들어 주는 친구가 되는 기술과, 친구가 할 수 있는 일의 한계를 함께 배운다고 밝힌다.',
          student: '가상 인물 민서가 고민을 꺼낸 네 장면에서 듣는 친구의 문제 장면을 골라요. 어떻게 바꾸면 좋을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '문제 장면', title: '민서의 고민', cards: [
            { id: 'c1', text: '민서가 "요즘 좀 힘들어"라고 말을 꺼낸다', motif: 'cloud' }, { id: 'c2', text: '친구가 휴대폰을 보며 "응응" 한다', motif: 'star' },
            { id: 'c3', text: '친구가 "나도 힘들어"라며 자기 얘기를 한다', motif: 'leaf' }, { id: 'c4', text: '민서가 "아냐, 됐어" 하고 입을 닫는다', motif: 'rain' }], shuffle: false }, sequence: [{ pick: ['c2', 'c3'] }] },
          art: { draw: 'a paper-cut school bench where one student speaks while the other stares at a phone, a small paper speech bubble fading away', banner: '들어 주고 있을까?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.poll', {
        title: '고민을 누구에게 말할까', method: '"고민을 누구에게?" 자료', tool: 'chart', minutes: 6,
        levels: { easy: '원그래프에서 가장 큰 조각을 읽는다.', base: '친구 조각이 큰 까닭과 그 뜻(친구가 첫 번째 들어 주는 사람)을 말한다.', challenge: '친구가 할 수 있는 일과 할 수 없는 일을 짝과 나눠 말한다.' },
        intro: {
          teacher: '"고민이 생기면 가장 먼저 누구에게 말할까요?" 가상 설문 원그래프를 띄우고 시연 단추로 가장 큰 조각이 골라지는 모습을 보인다. "친구가 제일 많으니 친구가 다 해결해 주면 되겠네요"라는 말에는 "친구가 먼저 듣는다는 건, 친구가 어른과 잇는 다리도 될 수 있다는 뜻 아닐까요?"라고 되묻는다. 이 자료는 수업용 가상 설문이라는 점을 밝힌다.',
          student: '가상 설문 원그래프에서 고민을 가장 먼저 말하는 사람을 찾아요. 친구가 큰 까닭과 친구가 할 수 있는 일·없는 일을 생각해요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '고민을 가장 먼저 말하는 사람(가상 설문)', unit: '%', data: POLL, question: '가장 큰 조각은?', choices: POLL.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut pie chart made of colored paper slices, with tiny figures of friends, parents, a teacher and a lone student around it', banner: '고민을 누구에게?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 학생이 실제로 누구에게 말하는지 묻지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.skills', {
        title: '2분 말하고 듣기 연습', method: '경청 기술 연습', tool: 'timer', minutes: 15,
        levels: { easy: '되말하기 한 가지만 연습하고, 점검표에서 되말하기만 표시한다.', base: '되말하기·감정 읽어 주기·열린 질문 세 기술을 2분씩 역할을 바꿔 연습하고 점검표로 서로 평가한다.', challenge: '점검표에 \'판단하는 말을 하지 않았다\'까지 넣어 서로 점검한다.' },
        activity: {
          title: '2분 말하고 듣기 연습', tool: 'timer',
          teacher: '"들어 주는 데도 기술이 있을까요?" 짝과 2분씩 가벼운 주제(요즘 빠진 취미·주말에 하고 싶은 일)로 말하고 들으며 되말하기·감정 읽어 주기·열린 질문을 해 보게 한다. 주제는 고민이 아니라 가벼운 것으로 정한다. "듣기만 하면 심심해요"라는 학생에게 "말하는 사람이 \'이 친구는 내 말을 듣고 있구나\' 느끼게 하는 게 오늘의 목표예요"라고 말해 준다. 끝나면 점검표로 서로 평가한다.',
          task: '짝과 2분씩 역할을 바꿔 말하고 들으며 되말하기·감정 읽어 주기·열린 질문을 해 보고, 점검표로 서로 평가해요(가벼운 주제로).',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '말하기 2분, 바꾸기 30초로 두 번 하도록 타이머를 맞추세요.', toolOptions: { title: '말하고 듣기', labels: ['말하기', '바꾸기'], plan: { work: 60, rest: 10, rounds: 1 } }, target: { plan: { work: 120, rest: 30, rounds: 2 } } }),
            IT({ prompt: '들어 주는 사람이 하는 일을 차례대로 놓으세요.', toolOptions: { title: '들어 주는 차례', cards: ['열린 질문 하나 하기', '눈을 맞추고 끝까지 듣기', '들은 말 되말하기', '감정 읽어 주기'] }, target: { order: ['눈을 맞추고 끝까지 듣기', '들은 말 되말하기', '감정 읽어 주기', '열린 질문 하나 하기'] } }),
            IT({ prompt: '연습한 뒤 짝의 듣기를 점검표로 평가하세요.', toolOptions: { title: '짝의 듣기 점검' }, target: { selfCheck: CHECK.slice(0, 3) } },
              { prompt: '연습한 뒤 짝이 되말하기를 했는지 표시하세요.', target: { selfCheck: CHECK.slice(0, 1) } },
              { prompt: '연습한 뒤 짝의 듣기를 판단하는 말까지 점검하세요.', target: { selfCheck: CHECK } },
              { conclude: '끝까지 듣고, 되말하고, 감정을 읽어 주고, 열린 질문을 해요. 판단하지 않고 들어 주는 것만으로도 큰 힘이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 "요즘 학원이 너무 많아 지쳐"라고 할 때 감정을 읽어 주는 말을 한 문장으로 써요.' }] },
        notes: '연습 주제는 고민이 아니라 가벼운 주제로 한다. 점검 결과는 걷지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.phrases', {
        title: '지지하는 말과 상처 주는 말', method: '지지하는 말 vs 상처 주는 말', tool: 'sortboard', minutes: 15,
        levels: { easy: '말 카드 4장을 두 바구니에 넣고, 틀리게 넣으면 까닭을 듣고 카드가 돌아온다.', base: '말 카드 8장을 두 바구니에 나누고, 판단하는 말과 아닌 말도 나눈다.', challenge: '카드가 더 섞인 판에서 나누고, 상처 주는 말을 고친 말과 잇는 바구니에 넣는다.' },
        activity: {
          title: '지지하는 말과 상처 주는 말', tool: 'sortboard',
          teacher: '"\'다들 그래\'는 위로하려고 한 말인데 왜 상처가 될까요?" 카드를 나눈 뒤 상처 주는 말 바구니의 카드를 함께 읽는다. "\'힘내\'는 좋은 말 아니에요?"라는 학생에게 "좋은 마음이지만, 힘이 없는 친구에게는 \'힘을 내야 한다\'는 숙제처럼 들릴 수 있어요. 먼저 마음을 읽어 주는 말을 해요"라고 말해 준다.',
          task: '친구에게 건넬 말 카드를 지지하는 말과 상처 주는 말 바구니에 나누고, 상처 주는 말을 고쳐요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BOARD('말 카드를 두 바구니에 나누세요.', PHR2, PHR),
              BOARD('말 카드 4장을 두 바구니에 나누세요.', PHR2, pickCards(PHR, ['s1', 's2', 'h1', 'h2'])),
              Object.assign(BOARD('말 카드를 두 바구니에 나누세요(더 섞였어요).', PHR2, PHR), { toolOptions: Object.assign({}, BOARD('', PHR2, PHR).toolOptions, { more: [{ id: 'm1', text: '"네 마음 이해하려고 해"' }, { id: 'm2', text: '"그런 생각 하지 마"' }] }), target: { sort: { '지지하는 말': ['s1', 's2', 's3', 's4', 'm1'], '상처 주는 말': ['h1', 'h2', 'h3', 'h4', 'm2'] } } })),
            IT(BOARD('말 카드를 판단하지 않는 말과 판단하는 말로 나누세요.', ['판단하지 않는 말', '판단하는 말'], [
              { id: 'j1', text: '"그런 일이 있었구나"', to: '판단하지 않는 말' }, { id: 'j2', text: '"그때 어떤 마음이었어?"', to: '판단하지 않는 말' },
              { id: 'j3', text: '"그러게 내가 뭐랬어"', to: '판단하는 말' }, { id: 'j4', text: '"네가 너무 예민한 거야"', to: '판단하는 말' }, { id: 'j5', text: '"더 얘기해 줄래?"', to: '판단하지 않는 말' }])),
            IT(BOARD('상처 주는 말과 고친 말을 맞는 바구니에 넣으세요(바구니 이름이 상처 주는 말이에요).', ['"그 정도로 왜 그래"', '"다들 그래"', '"나는 더 힘들었어"'], [
              { id: 'f1', text: '"그 일이 너한테 정말 컸구나"', to: '"그 정도로 왜 그래"' }, { id: 'f2', text: '"네 마음은 너만의 거야, 얘기해 줘"', to: '"다들 그래"' },
              { id: 'f3', text: '"지금은 네 얘기를 듣고 싶어"', to: '"나는 더 힘들었어"' }, { id: 'f4', text: '"힘내!"' }]),
              null, null, { conclude: '지지하는 말은 친구의 마음을 읽어 주고 판단하지 않아요. 상처 주는 말은 마음을 작게 만들거나 내 얘기로 바꿔 버려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"다들 그래, 별거 아냐"를 지지하는 말로 고쳐 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.dilemma', {
        title: '밤마다 오는 메시지 갈림길', method: '친구 고민이 내 힘을 넘을 때', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고 근거 카드를 한 장 이상 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 나를 지키는 것과 친구 돕기의 균형 근거 두 장을 모두 고른다.' },
        activity: {
          title: '밤마다 오는 메시지 갈림길', tool: 'dilemma',
          teacher: '"친구를 끝까지 혼자 들어 주는 것이 가장 좋은 친구일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 혼자 떠안은 길과 함께 상담 선생님께 간 길을 견주게 한다. "선생님께 말하면 배신 같아요"라는 학생에게 "민서가 더 든든한 도움을 받도록 함께 가는 것이 배신일까요, 더 큰 우정일까요?"라고 되묻는다. 돕는 나도 지치지 않아야 오래 곁에 있을 수 있다는 점을 짚는다.',
          task: '밤마다 힘들다고 연락하는 가상 친구 민서의 갈림길에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '민서가 매일 밤 힘들다고 연락해요. 첫 갈림길에서 골라 결과를 보세요.', base: '민서가 매일 밤 힘들다고 연락해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 나와 친구를 함께 지키는 근거 두 장을 모두 고르세요.' },
              '밤마다 오는 메시지', D1, [['together', 'honest', 'with'], ['alone', 'teacher']], R1, ['r1', 'r2']),
            IT({ prompt: '상담을 다녀온 뒤 민서가 다시 밤에 연락해요. 다음 선택을 따라가세요.', toolOptions: { title: '상담 다녀온 뒤', scene: { text: '상담을 시작한 민서가 밤에 또 "오늘도 힘들었어"라고 메시지를 보낸다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'kind', text: '"오늘도 고생했어. 내일 학교에서 얘기하자, 잘 자"', result: '민서가 "응, 내일 봐"라고 답한다.', impact: [{ who: '나와 민서', text: '둘 다 잠을 지킨다', tone: 1 }], ending: '따뜻하게 답하고 시간을 정했어요.' },
              { id: 'block', text: '상담했으니 이제 내 일이 아니라며 차단한다', result: '민서가 크게 서운해한다.', impact: [{ who: '민서', text: '혼자라고 느낀다', tone: -1 }], why: '어른과 이은 뒤에도 친구로 곁에 있어요.' }] }, reasons: [{ id: 'q1', text: '어른과 이은 뒤에도 친구로 곁에 있을 수 있다' }, { id: 'q2', text: '상담을 시작하면 친구는 할 일이 없다', why: '친구의 따뜻한 안부는 계속 힘이 돼요.' }], compare: true },
              target: { path: [['kind']], reasons: ['q1'] } }),
            IT({ prompt: '민서 얘기를 들은 다른 친구가 소문을 내려 해요. 다음 선택을 따라가세요.', toolOptions: { title: '소문 앞에서', scene: { text: '반 친구 하나가 "민서 요즘 상담실 다닌다며? 무슨 일이래?"라고 묻는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'tell', text: '내가 아는 민서의 고민을 이야기해 준다', result: '소문이 퍼져 민서가 상처받는다.', impact: [{ who: '민서', text: '믿음이 깨진다', tone: -1 }], why: '친구의 고민은 소문으로 나누지 않아요. 어른에게 잇는 것과는 달라요.' },
              { id: 'guard', text: '"그건 민서 일이야. 궁금하면 민서한테 안부를 물어봐"', result: '친구가 더 캐묻지 않는다.', impact: [{ who: '민서', text: '사생활이 지켜진다', tone: 1 }], ending: '민서의 이야기를 지켰어요.' }] }, reasons: [{ id: 'p1', text: '고민은 소문이 아니라 도울 어른에게만 잇는다' }, { id: 'p2', text: '궁금해하면 알려 주는 게 친절이다', why: '친구의 고민을 퍼뜨리면 다시 말하기 어려워져요.' }], compare: true },
              target: { path: [['guard']], reasons: ['p1'] }, conclude: '친구의 고민이 내 힘을 넘으면 어른과 함께 도와요. 어른에게 잇는 것은 소문내기와 다르고, 이은 뒤에도 곁에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 매일 밤 힘들다고 해 나도 지쳐 갈 때 가장 알맞은 행동은?', options: ['혼자 계속 들어 준다', '연락을 끊는다', '함께 상담 선생님께 가자고 한다'], answer: '함께 상담 선생님께 가자고 한다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.role', {
        title: '또래 상담 6줄 대본', method: '또래 상담 역할극 대본', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '대본 3줄(공감 한 줄·질문 한 줄·어른 연결 한 줄)을 쓴다.', base: '대본 6줄을 쓰고 기준 3개(공감·판단 없음·어른 연결 제안)를 점검한다.', challenge: '셋째 문항에서 상대가 "선생님은 싫어"라고 거절할 때의 대답까지 넣는다.' },
        activity: {
          title: '또래 상담 6줄 대본', tool: 'rubric-writing',
          teacher: '"들어 주는 친구의 대본에는 무엇이 꼭 들어가야 할까요?" 가상 고민(친한 친구 무리에서 멀어진 것 같아 외롭다는 친구)을 읽고 대본을 쓰게 한다. "해결책을 알려 줘야 좋은 상담 아니에요?"라는 학생에게 "해결책보다 \'그랬구나\'가 먼저예요. 그리고 친구 힘으로 어려우면 어른과 잇는 말을 넣어요"라고 말해 준다. 대본에 실제 친구 이름은 쓰지 않는다.',
          task: '가상 고민 사례(친구 무리에서 멀어져 외롭다는 친구)에 들어 주는 친구의 대화 대본을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '친구가 "요즘 무리에서 나만 겉도는 것 같아"라고 해요. 들어 주는 친구의 대본 6줄을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"요즘 무리에서 나만 겉도는 것 같아"라는 가상 친구에게 들어 주는 친구의 대화 대본을 6줄로 쓰세요.', minChars: 60, maxChars: 300, minSentences: 5, maxSentences: 7, title: '또래 상담 대본' }, target: { selfCheck: ['공감하는 말을 넣었다', '판단하거나 훈계하는 말이 없다', '어른과 함께 이야기해 보자는 제안을 넣었다'] } },
              { prompt: '같은 친구에게 할 대본 3줄(공감·질문·어른 연결)을 쓰고 기준표에 표시하세요.', toolOptions: { minChars: 30, minSentences: 3, maxSentences: 4, starter: '그랬구나, ___. 언제부터 ___? 담임 선생님께 ___.' } }),
            IT({ prompt: '대본에서 판단하는 말을 찾아 지우고, 바꾼 줄을 써서 기준표에 표시하세요.', toolOptions: { topic: '"네가 먼저 다가가야지"처럼 판단하는 말을 공감하는 말로 바꿔 두 줄로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '판단하는 말 바꾸기' }, target: { selfCheck: ['판단하는 말을 찾았다', '친구 마음을 읽어 주는 말로 바꿨다'] } }),
            IT({ prompt: '친구가 "선생님한테는 말하기 싫어"라고 해요. 이어 갈 대답 두 줄을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"선생님한테는 말하기 싫어"라는 친구에게 이어 갈 대답을 두 줄로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '거절할 때의 대답' }, target: { selfCheck: ['친구의 걱정을 인정했다', '함께 가겠다고 제안했다'] } },
              null, null, { conclude: '또래 상담 대본에는 공감, 판단하지 않는 질문, 그리고 어른과 함께 이야기해 보자는 제안이 들어가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 어른과 함께 이야기해 보자고 제안한 줄을 옮겨 써요.' }],
          easy: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '그랬구나, ___. 담임 선생님께 같이 ___?', answer: '(예) 많이 외로웠겠다, 얘기해 볼래' }] },
        notes: '가상 고민이다. 실제 친구 이름을 쓰지 않게 하고 대본은 걷지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.campaign', {
        title: '"들어 줄게" 캠페인 포스터', method: '"들어 줄게" 캠페인 문구', tool: 'collage', minutes: 7,
        levels: { easy: '보기 문구 하나를 고르고 조각 3개 이상으로 포스터 바탕을 꾸민다.', base: '문구를 직접 쓰고(활동지) 조각 5개 이상으로 꾸며 점검 항목 3개를 표시한다.', challenge: '경청 실천 방법 3가지를 활동지에 더 쓰고 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"우리 반 게시판에 \'들어 줄게\' 포스터를 붙인다면 어떤 문구가 친구들 발걸음을 멈추게 할까요?" 문구는 활동지에 쓰고 조각으로 포스터 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 무섭게 겁주는 말 대신 따뜻한 말과 실천 방법을 넣게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14, shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '"들어 줄게" 포스터 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '따뜻한 느낌의 색을 골랐다', '문구를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.15 },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '보기 문구 하나를 골랐다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고, 실천 방법 3가지까지 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '따뜻한 느낌의 색을 골랐다', '문구를 활동지에 썼다', '실천 방법 3가지를 썼다'], minPieces: 5 } }),
            { type: 'choice', prompt: '"들어 줄게" 캠페인 문구로 가장 알맞은 것은?', options: ['"휴대폰 내려놓고 끝까지 들을게, 그리고 같이 어른께 갈게"', '"힘든 얘기는 하지 마"', '"고민 없는 반이 최고"'], answer: 0, difficulty: 0.15, explain: '구체적인 들어 주기 행동과 어른 연결이 함께 있어요.' },
          ],
        },
        worksheet: {
          title: '"들어 줄게" 캠페인',
          items: [
            { type: 'short', prompt: '"들어 줄게" 포스터에 넣을 문구를 한 줄로 써요.' },
            { type: 'check', prompt: '포스터에 넣을 경청 실천 방법에 표시해요.', options: ['휴대폰 내려놓기', '되말해 주기', '판단하지 않기', '필요하면 함께 어른께 가기'] },
          ],
          easy: { note: '보기 문구를 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 문구 하나를 골라요.', options: ['휴대폰 내려놓고 끝까지 들을게', '네 얘기 판단하지 않을게', '필요하면 같이 어른께 갈게'], answer: '휴대폰 내려놓고 끝까지 들을게' }] },
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 문구는 활동지에 쓰게 했다. ' + SAFE_NOTE,
      }),
      M('wrap.limit', {
        title: '또래가 할 일, 어른이 할 일', method: '또래가 할 일·어른이 할 일', tool: 'mindmap', minutes: 7,
        levels: { easy: '카드 4장을 두 가지(내가 할 일·어른이 할 일)에 나눈다.', base: '카드 6장을 두 가지에 나누고 까닭을 말한다.', challenge: '셋째 질문에서 어른에게 꼭 알릴 기준을 고른다.' },
        wrap: {
          teacher: '"힘든 친구 곁에서 나는 무엇까지 할 수 있고, 무엇부터 어른이 해야 할까요?" 가지를 나눈 뒤 어른이 할 일 가지를 함께 읽는다. "좋은 친구라면 혼자서 다 해결해 줘야 한다"는 말에는 "친구는 들어 주는 다리, 어른과 전문가는 그 다리 건너편의 도움이에요"라고 말해 준다. 친구의 안전이 걱정되면 비밀보다 어른에게 알리는 것이 먼저라는 기준을 짚는다.',
          exitTicket: [
            IT(X('mindmap', SB('"힘든 친구" 곁에서 할 일 카드를 두 가지에 나눠요.', ['내가 할 일', '어른이 할 일'], [
              { id: 'w1', text: '판단 없이 들어 주기', to: '내가 할 일' }, { id: 'w2', text: '함께 상담실에 가 주기', to: '내가 할 일' }, { id: 'w3', text: '다음 날 안부 묻기', to: '내가 할 일' },
              { id: 'w4', text: '전문 상담 이어 주기', to: '어른이 할 일' }, { id: 'w5', text: '위험한지 살피고 보호하기', to: '어른이 할 일' }, { id: 'w6', text: '보호자와 연락하기', to: '어른이 할 일' }], { topic: '힘든 친구' }), { difficulty: 0.15 }),
              SB('할 일 카드 4장을 두 가지에 나눠요.', ['내가 할 일', '어른이 할 일'], [
                { id: 'w1', text: '판단 없이 들어 주기', to: '내가 할 일' }, { id: 'w2', text: '함께 상담실에 가 주기', to: '내가 할 일' },
                { id: 'w4', text: '전문 상담 이어 주기', to: '어른이 할 일' }, { id: 'w5', text: '위험한지 살피고 보호하기', to: '어른이 할 일' }], { topic: '힘든 친구' })),
            { type: 'choice', prompt: '"좋은 친구라면 혼자서 다 해결해 줘야 한다"는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 어른에게 말하면 배신이다', '친구는 들어 주고, 어려운 일은 어른과 함께 돕는다', '힘든 친구는 피하는 게 낫다'], answer: 1, difficulty: 0.15, explain: '또래가 할 수 있는 일에는 한계가 있어요. 어른과 함께 도와요.' },
            { type: 'choice', prompt: '어른에게 꼭 알려야 하는 때로 알맞은 것은?', options: ['친구가 어제 숙제를 안 했다고 할 때', '친구의 안전이 걱정되는 말이나 행동이 보일 때', '친구가 좋아하는 사람이 생겼다고 할 때'], answer: 1, difficulty: 0.2, explain: '안전이 걱정되면 비밀보다 어른에게 알리는 것이 먼저예요.' },
          ],
        },
        worksheet: {
          title: '또래가 할 일·어른이 할 일',
          items: [
            { type: 'table', prompt: '힘든 친구 곁에서 할 일을 나눠 써요.', columns: ['내가 할 일', '어른이 할 일'], cells: [['', ''], ['', '']], answer: '들어 주기·함께 가 주기, 전문 상담 잇기·보호하기' },
            { type: 'short', prompt: '친구 일을 어른에게 꼭 알려야 할 때를 한 문장으로 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 8학년 · 우울에 대한 오해와 사실 (life.m.depression-facts) ====
  // 진단처럼 쓰지 않는다: '우울감 신호'로만 말하고, 판단은 어른·전문가와 함께 한다는 틀.
  {
    const M = MK('depression-facts', [8]);
    const MOOD = [['1주', 7], ['2주', 6], ['3주', 4], ['4주', 3], ['5주', 3], ['6주', 3]];
    const SIG4 = ['생각', '감정', '몸', '행동'];
    const SIGN = [
      { id: 't1', text: '자기를 탓하는 생각이 잦다', to: '생각' }, { id: 't2', text: '집중이 잘 안 된다', to: '생각' },
      { id: 'f1', text: '이유 없이 슬프거나 짜증이 난다', to: '감정' }, { id: 'f2', text: '좋아하던 일이 재미없다', to: '감정' },
      { id: 'b1', text: '잠이 너무 많거나 너무 적다', to: '몸' }, { id: 'b2', text: '늘 피곤하고 기운이 없다', to: '몸' },
      { id: 'a1', text: '친구를 피하고 혼자 있으려 한다', to: '행동' }, { id: 'a2', text: '해야 할 일을 자꾸 미룬다', to: '행동' },
    ];
    const D1 = { text: '은호는 몇 주째 기운이 없어 보인다. 상담 선생님께 가 보자고 하자 "상담은 창피해. 애들이 이상하게 볼 거야"라고 한다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'leave', text: '"그럼 그냥 두자"라며 더 말하지 않는다', result: '은호는 혼자 버티고 기운 없는 모습이 이어진다.', impact: [{ who: '은호', text: '도움이 미뤄진다', tone: -1 }], why: '창피해하는 마음을 덜어 주면 도움에 다가갈 수 있어요.', end: '그냥 두었어요.',
        next: { text: '한 달 뒤 은호가 수업 중 자주 엎드려 있고 점심도 거른다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'still', text: '은호가 싫다고 했으니 계속 모른 척한다', result: '은호 곁에 아무도 다가가지 않는다.', impact: [{ who: '은호', text: '더 외로워진다', tone: -1 }], why: '변화가 이어지면 어른에게 알려야 해요.' },
          { id: 'teacher', text: '담임 선생님께 걱정되는 모습을 알린다', result: '선생님이 은호와 따로 이야기를 나눈다.', impact: [{ who: '은호', text: '어른의 관심을 받는다', tone: 1 }], why: '알린 것은 잘했어요. 처음부터 함께 갔다면 더 빨랐어요.' }] } },
      { id: 'with', text: '"창피한 일 아니야. 내가 같이 가 줄게"라고 한다', result: '은호가 "정말 같이 가 줄 거야?"라며 조금 마음을 연다.', impact: [{ who: '은호', text: '혼자가 아니라고 느낀다', tone: 1 }], end: '함께 가 주겠다고 했어요.',
        next: { text: '은호가 "근데 상담 받아도 소용없을 것 같아"라고 한다.', ask: '어떻게 답할까?', choices: [
          { id: 'hope', text: '"도움을 받으면 나아질 수 있대. 한 번 이야기만 해 보자"', result: '은호가 쉬는 시간에 함께 가 보기로 한다.', impact: [{ who: '은호', text: '나아질 수 있다는 희망을 듣는다', tone: 1 }], end: '희망을 전하고 함께 가기로 했어요.',
            next: { text: '상담실 앞에서 은호가 "애들이 보면 어떡해"라며 멈춘다.', ask: '어떻게 할까?', choices: [
              { id: 'time', text: '"수업 끝나고 사람 적을 때 같이 오자"며 시간을 정한다', result: '방과 후 은호가 상담 선생님과 이야기를 시작한다.', impact: [{ who: '은호', text: '부담을 덜고 도움을 받는다', tone: 1 }] },
              { id: 'push', text: '"빨리 들어가" 하고 등을 떠민다', result: '은호가 놀라 그냥 돌아간다.', impact: [{ who: '은호', text: '다시 움츠러든다', tone: -1 }], why: '걱정을 들어 주고 부담이 덜한 방법을 함께 찾아요.' }] } },
          { id: 'agree', text: '"그럴 수도 있겠다"라며 포기한다', result: '은호의 생각이 그대로 굳는다.', impact: [{ who: '은호', text: '도움을 멀리한다', tone: -1 }], why: '"도움을 받아도 소용없다"는 흔한 오해예요.' }] } },
      { id: 'tell', text: '은호에게 말하고 담임 선생님께 걱정을 알린다', result: '선생님이 은호에게 조용히 상담을 권한다.', impact: [{ who: '은호', text: '어른과 이어진다', tone: 1 }], ending: '은호에게 말하고 어른에게 알렸어요.' }] };
    const R1 = [{ id: 'r1', text: '상담은 창피한 일이 아니라 마음을 돌보는 일이다' }, { id: 'r2', text: '도움을 받으면 나아질 수 있다' },
      { id: 'r3', text: '우울은 의지가 약해서 생긴다', why: '우울은 의지 문제가 아니에요. 누구에게나 올 수 있어요.' }, { id: 'r4', text: '본인이 싫다고 하면 아무것도 하지 않는다', why: '싫다는 마음을 들어 주되, 걱정되면 어른에게 알려요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.ox', {
        title: '우울에 대한 말, 사실일까 오해일까', method: '우울 오해 OX 퀴즈', tool: 'emotion', minutes: 6,
        levels: { easy: '말 카드 3장을 사실·오해로 나눈다.', base: '말 카드 6장을 사실·오해로 나누고 설명을 듣는다.', challenge: '오해 카드 하나를 골라 바른 말로 고쳐 말한다.' },
        intro: {
          teacher: '"\'우울은 의지가 약해서 생긴다\', 사실일까요 오해일까요?" 카드마다 손으로 O·X를 표시하게 한 뒤 시연 단추로 카드가 나뉘는 모습을 보이고 하나씩 설명한다. "기분 탓 아니에요?"라는 말이 나오면 "누구나 우울감을 느낄 수 있어요. 다만 오래 이어지고 생활이 힘들어지면 전문가와 이야기할 때예요. 그건 의지 문제가 아니에요"라고 말해 준다. 오늘 배우는 신호는 진단이 아니며, 판단은 어른·전문가와 함께 한다고 밝힌다.',
          student: '우울에 대한 말 카드를 사실과 오해로 나눠요. 오해라고 생각한 카드는 어떻게 고치면 바른 말이 될지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['사실', '오해'], cards: [
            { id: 'o1', text: '우울은 의지가 약해서 생긴다' }, { id: 'o2', text: '힘들다고 말하면 더 나빠진다' }, { id: 'o3', text: '도움을 받아도 소용없다' },
            { id: 't1', text: '우울감은 누구나 느낄 수 있다' }, { id: 't2', text: '도움을 받으면 나아질 수 있다' }, { id: 't3', text: '오래 이어지면 전문가와 이야기한다' }], weather: false }, sequence: [{ sort: { 사실: ['t1', 't2', 't3'], 오해: ['o1', 'o2', 'o3'] } }] },
          art: { draw: 'a paper-cut pair of paper signs, one with a circle and one with a cross, with small cards pinned under each on a corkboard', banner: '사실일까, 오해일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '우울 신호는 진단이 아니다. 학생 자신의 기분 상태를 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.mood-line', {
        title: '은호의 6주 기분 그래프', method: '기분 변화 그래프 해석', tool: 'chart', minutes: 6,
        levels: { easy: '은호의 그래프에서 기분이 낮아지기 시작한 때를 읽는다.', base: '교사가 말해 주는 지수의 기분(시험 다음 날 하루 낮았다가 돌아옴)과 은호의 그래프를 견준다.', challenge: '어느 쪽이 어른의 도움을 청할 때인지 기준(오래 이어짐·생활이 힘듦)을 말한다.' },
        intro: {
          teacher: '"은호의 기분 그래프는 어떻게 움직이고 있나요?" 가상 인물 은호의 6주 기분 꺾은선을 띄우고 시연 단추로 \'3주\'가 골라지는 모습을 보인다. 이어 "지수는 시험 다음 날 하루 기분이 낮았다가 다음 날 돌아왔어요. 둘은 같은 걸까요?"라고 묻는다. "기분이 낮으면 다 우울증이에요?"라는 말에는 "하루 이틀 낮은 기분은 누구에게나 있어요. 오래 이어지고 생활이 힘들어질 때 어른과 이야기해요. 진단은 전문가가 해요"라고 짚는다. 그래프는 가상 자료다.',
          student: '가상 인물 은호의 6주 기분 그래프를 읽고, 하루 낮았다가 돌아온 지수의 기분과 무엇이 다른지 생각해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '은호의 주별 기분 점수(가상, 10점 만점)', unit: '점', xLabel: '주', yLabel: '기분 점수', max: 10, scale: 1, data: MOOD, question: '기분이 낮아지기 시작한 주는?', choices: MOOD.map((d) => d[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut line graph made of a string pinned across paper weeks, dipping down and staying low, with a small cloud above the low part', banner: '잠깐일까, 오래일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 학생 자신의 기분을 그래프로 그리게 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.signs', {
        title: '우울감 신호를 네 갈래로', method: '우울감 신호 분석', tool: 'mindmap', minutes: 15,
        levels: { easy: '카드 4장을 가지 2개(감정·몸)에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 8장을 가지 4개(생각·감정·몸·행동)에 나누고, 신호를 어떻게 다룰지 고른다.', challenge: '셋째 문항에서 신호가 겹쳐 오래될 때의 의미를 고르고(함정이 섞인다), 신호마다 친구가 해 줄 수 있는 일을 잇는다.' },
        activity: {
          title: '우울감 신호를 네 갈래로', tool: 'mindmap',
          teacher: '"우울감은 마음에만 나타날까요?" 카드를 나눈 뒤 몸 가지(잠·피곤함)를 함께 읽고, 마음의 변화가 몸과 행동으로도 나타난다는 점을 짚는다. "이 중에 두 개 있으면 우울증인 거예요?"라는 학생에게 "이 카드들은 진단표가 아니에요. 여러 신호가 오래 이어지면 혼자 판단하지 말고 어른·전문가와 이야기하라는 뜻이에요"라고 말해 준다. 가상 인물의 신호로만 이야기하고 자기 점검은 하지 않는다.',
          task: '우울감 신호 카드를 생각·감정·몸·행동 가지에 나누고, 신호가 겹쳐 오래될 때 어떻게 할지 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('우울감 신호 카드를 네 가지에 나누세요.', SIG4, SIGN, { topic: '우울감의 신호' }),
              SB('신호 카드 4장을 두 가지에 나누세요.', ['감정', '몸'], pickCards(SIGN, ['f1', 'f2', 'b1', 'b2']), { topic: '우울감의 신호' })),
            IT(PB('신호가 여러 개 겹쳐 몇 주씩 이어질 때 알맞은 생각만 골라 담으세요.', '겹쳐 오래될 때', [
              { id: 'q1', text: '어른·전문가와 이야기해 볼 때다', ok: true }, { id: 'q2', text: '판단은 전문가가 함께 한다', ok: true },
              { id: 'q3', text: '도움을 받으면 나아질 수 있다', ok: true }, { id: 'q4', text: '신호 하나만 보여도 우울증이다' }, { id: 'q5', text: '인터넷 글로 혼자 진단할 수 있다' }])),
            IT(MB('가상 친구의 신호마다 내가 해 줄 수 있는 일을 이어 보세요.', [['혼자 있으려 한다', '"점심 같이 먹자" 하고 말 걸기'], ['늘 피곤하고 기운이 없다', '"보건실 같이 갈래?" 하고 묻기'], ['자기를 탓하는 말을 한다', '"네 탓 아니야" 하고 들어 준 뒤 어른에게 알리기']], ['"정신 차려" 하고 다그치기'], { topic: '내가 해 줄 수 있는 일' }),
              MB('신호 두 개에 내가 해 줄 수 있는 일을 이어 보세요.', [['혼자 있으려 한다', '"점심 같이 먹자" 하고 말 걸기'], ['늘 피곤하고 기운이 없다', '"보건실 같이 갈래?" 하고 묻기']], [], { topic: '내가 해 줄 수 있는 일' }),
              null, { conclude: '우울감은 생각·감정·몸·행동으로 나타나요. 신호는 진단표가 아니에요. 여러 신호가 오래 이어지면 혼자 판단하지 말고 어른·전문가와 이야기해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우울감 신호가 몸과 행동으로도 나타나는 예를 하나씩 써요.' }],
          easy: [{ type: 'choice', prompt: '우울감이 몸에 나타나는 신호에 ○ 해요.', options: ['늘 피곤하고 기운이 없다', '키가 자란다'], answer: '늘 피곤하고 기운이 없다' }] },
        notes: '신호 카드는 진단 기준이 아니다(사람 확인). 학생 자신을 점검하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.case', {
        title: '점점 움츠러든 은호의 다섯 장면', method: '가상 인물 사례 분석', tool: 'story', minutes: 15,
        levels: { easy: '장면 4장을 차례로 놓는다.', base: '장면 5장을 차례로 놓고, 행동이 달라진 장면을 고른다.', challenge: '셋째 문항에서 장면마다 누가 도울 수 있었는지 짝짓는다(함정 카드가 섞인다).' },
        activity: {
          title: '점점 움츠러든 은호의 다섯 장면', tool: 'story',
          teacher: '"은호가 처음부터 엎드려 있던 건 아니에요. 어디서부터 달라졌을까요?" 장면을 놓은 뒤 행동이 달라진 장면마다 누가 알아차릴 수 있었는지 말하게 한다. "친구 사이 일은 시간이 지나면 풀려요"라는 학생에게 "그럴 때도 있어요. 하지만 변화가 이어지면 일찍 손을 내밀수록 가볍게 풀려요"라고 말해 준다. 은호의 마음이 한 가지 까닭 때문이라고 단정하지 않게 한다.',
          task: '친구 관계가 틀어진 뒤 점점 움츠러든 가상 인물 은호의 장면을 차례로 놓고, 도움이 닿을 수 있었던 장면과 도울 사람을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('은호의 장면을 일어난 차례대로 놓으세요.', [
              { id: 'c1', text: '단짝과 다툰 뒤 표정이 어둡다', motif: 'cloud' }, { id: 'c2', text: '점심을 혼자 먹는다', motif: 'leaf' },
              { id: 'c3', text: '동아리에 나오지 않는다', motif: 'star' }, { id: 'c4', text: '수업 중 자주 엎드려 있다', motif: 'rain' }, { id: 'c5', text: '"나는 왜 이럴까" 혼잣말을 한다', motif: 'cloud' }], { title: '은호의 한 학기' }),
              OB('은호의 장면 4장을 차례대로 놓으세요.', [
                { id: 'c1', text: '단짝과 다툰 뒤 표정이 어둡다', motif: 'cloud' }, { id: 'c2', text: '점심을 혼자 먹는다', motif: 'leaf' },
                { id: 'c3', text: '동아리에 나오지 않는다', motif: 'star' }, { id: 'c4', text: '수업 중 자주 엎드려 있다', motif: 'rain' }], { title: '은호의 한 학기' })),
            IT(PB('은호의 행동이 달라진 장면만 골라 담으세요.', '행동이 달라진 장면', [
              { id: 'c1', text: '단짝과 다툰 뒤 표정이 어둡다' }, { id: 'c2', text: '점심을 혼자 먹는다', ok: true },
              { id: 'c3', text: '동아리에 나오지 않는다', ok: true }, { id: 'c4', text: '수업 중 자주 엎드려 있다', ok: true }, { id: 'c5', text: '"나는 왜 이럴까" 혼잣말을 한다' }], { title: '은호의 한 학기' })),
            IT(MB('장면마다 은호를 도울 수 있었던 사람을 이어 보세요.', [['점심을 혼자 먹는다', '같은 반 친구'], ['동아리에 나오지 않는다', '동아리 선생님'], ['수업 중 자주 엎드려 있다', '담임 선생님']], ['아무도 도울 수 없다'], { title: '누가 도울 수 있었을까?' }),
              MB('장면 두 개에 은호를 도울 수 있었던 사람을 이어 보세요.', [['점심을 혼자 먹는다', '같은 반 친구'], ['수업 중 자주 엎드려 있다', '담임 선생님']], [], { title: '누가 도울 수 있었을까?' }),
              null, { conclude: '마음의 변화는 조금씩 행동으로 드러나요. 일찍 알아차리고 손을 내밀수록, 그리고 어른과 함께할수록 도움이 쉽게 닿아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '은호의 장면 가운데 내가 같은 반 친구라면 말을 걸었을 장면과 건넬 말을 써요.' }] },
        notes: '은호의 마음이 다툼 한 가지 때문이라고 단정하지 않는다(원인 단정 금지). ' + SAFE_NOTE,
      }),
      M('activity.stigma', {
        title: '낙인을 만드는 말 고쳐 쓰기', method: '낙인을 만드는 말 고치기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '낙인 말 하나를 존중하는 말로 한 문장 고쳐 쓴다.', base: '낙인 말 세 개를 각각 존중하는 말로 고쳐 쓰고 기준 3개를 점검한다.', challenge: '셋째 문항에서 그 말이 왜 도움 요청을 막는지까지 두 문장으로 쓴다.' },
        activity: {
          title: '낙인을 만드는 말 고쳐 쓰기', tool: 'rubric-writing',
          teacher: '"\'걔 정신병 있대\'라는 말이 반에 돌면, 힘든 친구는 상담실에 갈 수 있을까요?" 낙인 말이 도움 요청을 막는 고리를 함께 짚은 뒤 고쳐 쓰게 한다. "장난으로 한 말인데요"라는 학생에게 "장난으로 한 말도 듣는 친구에게는 \'말하면 나도 저렇게 불린다\'는 경고가 돼요"라고 말해 준다. 고친 말에는 낮추는 낱말 대신 사람과 마음을 존중하는 말을 쓰게 한다.',
          task: '반에서 들릴 수 있는 낙인 말을 존중하는 말로 고쳐 쓰고, 기준표로 점검해요.',
          levels: { easy: { starter: '그 말 대신 "___"라고 하면 좋겠다.' }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '"걔 정신병 있대"를 존중하는 말로 고쳐 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"걔 정신병 있대"라는 말을 존중하는 말로 고쳐 쓰세요.', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '낙인 말 고치기 1' }, target: { selfCheck: ['사람을 낮추는 낱말을 뺐다', '그 친구의 마음을 존중하는 말로 썼다', '소문을 퍼뜨리지 않는 말이다'] } }),
            IT({ prompt: '"상담실 가는 애들은 좀 이상해"를 존중하는 말로 고쳐 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"상담실 가는 애들은 좀 이상해"라는 말을 존중하는 말로 고쳐 쓰세요.', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '낙인 말 고치기 2' }, target: { selfCheck: ['상담을 이상한 일로 그리지 않았다', '도움을 청하는 것을 응원하는 말로 썼다'] } }),
            IT({ prompt: '"우울한 건 핑계야"를 존중하는 말로 고쳐 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"우울한 건 핑계야"라는 말을 존중하는 말로 고쳐 쓰세요.', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '낙인 말 고치기 3' }, target: { selfCheck: ['의지 탓을 하지 않았다', '힘든 마음을 인정하는 말로 썼다'] } },
              null,
              { prompt: '"우울한 건 핑계야"를 고쳐 쓰고, 그 말이 왜 도움 요청을 막는지 이어서 써서 기준표에 표시하세요.', toolOptions: { minChars: 40, minSentences: 2, maxSentences: 3 }, target: { selfCheck: ['의지 탓을 하지 않았다', '힘든 마음을 인정하는 말로 썼다', '그 말이 도움 요청을 막는 까닭을 썼다'], mustInclude: [['도움', '상담', '말하기']] } },
              { conclude: '낙인 말은 힘든 친구가 도움을 청하지 못하게 막아요. 사람을 낮추는 말 대신 마음을 존중하고 도움을 응원하는 말을 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '낙인 말이 힘든 친구의 도움 요청을 막는 까닭을 한 문장으로 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.dilemma', {
        title: '"상담은 창피해" 갈림길', method: '도움을 미루는 친구', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고 근거 카드를 한 장 이상 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 맞는 근거 두 장을 모두 고른다.' },
        activity: {
          title: '"상담은 창피해" 갈림길', tool: 'dilemma',
          teacher: '"친구가 싫다는데 계속 권하면 오지랖일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 그냥 둔 길과 함께 간 길을 견주게 한다. "도움 받아도 소용없다고 하면 할 말이 없어요"라는 학생에게 "그 말 자체가 흔한 오해예요. \'나아질 수 있대, 이야기만 해 보자\'처럼 희망을 전할 수 있어요"라고 말해 준다. 걱정이 크면 친구가 싫다고 해도 어른에게 알리는 것이 먼저라는 점을 짚는다.',
          task: '"상담은 창피해"라는 가상 친구 은호의 갈림길에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '은호가 상담은 창피하다고 해요. 첫 갈림길에서 골라 결과를 보세요.', base: '은호가 상담은 창피하다고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 맞는 근거 두 장을 모두 고르세요.' },
              '"상담은 창피해"', D1, [['with', 'hope', 'time'], ['tell']], R1, ['r1', 'r2']),
            IT({ prompt: '은호가 상담을 다녀온 뒤 반에서 수군거림이 생겼어요. 다음 선택을 따라가세요.', toolOptions: { title: '상담 다녀온 뒤', scene: { text: '반 친구가 "은호 상담실 다닌대, 무슨 문제 있나 봐"라며 웃는다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'laugh', text: '같이 웃고 넘어간다', result: '수군거림이 퍼지고 은호가 상담을 그만두려 한다.', impact: [{ who: '은호', text: '도움을 멈추려 한다', tone: -1 }], why: '함께 웃으면 낙인이 커져요.' },
              { id: 'stop', text: '"상담은 마음 돌보는 거야. 그런 말 하지 말자"', result: '친구가 머쓱해하며 말을 멈춘다.', impact: [{ who: '은호', text: '편하게 상담을 이어 간다', tone: 1 }], ending: '낙인 말을 멈추게 했어요.' }] }, reasons: [{ id: 'q1', text: '낙인 말을 멈추면 친구가 도움을 이어 갈 수 있다' }, { id: 'q2', text: '농담이니 웃어 넘겨도 된다', why: '농담도 도움 요청을 막는 낙인이 돼요.' }], compare: true },
              target: { path: [['stop']], reasons: ['q1'] } }),
            IT({ prompt: '은호가 "나 이제 좀 나아진 것 같아"라고 해요. 다음 선택을 따라가세요.', toolOptions: { title: '조금 나아진 은호', scene: { text: '몇 주 뒤 은호가 "상담 받고 좀 나아진 것 같아"라고 말한다.', ask: '어떻게 답할까?', motif: 'flower', choices: [
              { id: 'glad', text: '"다행이다. 앞으로도 힘들면 언제든 말해"', result: '은호가 웃으며 고개를 끄덕인다.', impact: [{ who: '은호', text: '든든한 친구가 있다고 느낀다', tone: 1 }], ending: '나아진 것을 함께 기뻐했어요.' },
              { id: 'done', text: '"이제 다 나았으니 상담 그만둬도 되겠네"', result: '은호가 상담을 바로 그만둘지 헷갈려 한다.', impact: [{ who: '은호', text: '도움을 서둘러 멈춘다', tone: -1 }], why: '언제까지 상담할지는 상담 선생님과 함께 정해요.' }] }, reasons: [{ id: 'p1', text: '나아진 뒤에도 곁에 있겠다는 말이 힘이 된다' }, { id: 'p2', text: '조금 나아지면 도움은 바로 끊어도 된다', why: '언제까지 도움을 받을지는 전문가와 함께 정해요.' }], compare: true },
              target: { path: [['glad']], reasons: ['p1'] }, conclude: '도움을 받으면 나아질 수 있어요. 상담은 창피한 일이 아니고, 친구는 함께 가 주고 낙인 말을 멈추게 할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "상담은 창피해"라고 할 때 가장 알맞은 말은?', options: ['"그럼 그냥 참아"', '"창피한 일 아니야. 내가 같이 가 줄게"', '"너 정말 문제 있구나"'], answer: '"창피한 일 아니야. 내가 같이 가 줄게"' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.poster', {
        title: '"말해도 괜찮아" 포스터', method: '"말해도 괜찮아" 포스터', tool: 'collage', minutes: 7,
        levels: { easy: '보기 문구 하나를 고르고 조각 3개 이상으로 포스터 바탕을 꾸민다.', base: '낙인 대신 도움 요청을 권하는 문구를 직접 쓰고(활동지) 조각 5개 이상으로 꾸며 점검한다.', challenge: '학교 도움 자원(상담실·담임 선생님) 정보를 활동지 문구에 넣고 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"상담실 문 앞에 붙일 포스터라면, 어떤 말이 힘든 친구의 발걸음을 돕고 어떤 말이 막을까요?" 문구는 활동지에 쓰고 조각으로 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 겁주는 말이나 \'우울증 체크\' 같은 진단 말은 넣지 않고, 희망과 도움 경로를 담게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14, shapes: ['circle', 'square', 'rect', 'heart', 'star', 'semi'] }, prompt: '"말해도 괜찮아" 포스터 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '밝고 편안한 색을 골랐다', '문구를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.15 },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '보기 문구 하나를 골랐다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고, 학교 도움 자원 정보까지 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '밝고 편안한 색을 골랐다', '문구를 활동지에 썼다', '학교 도움 자원 정보를 넣었다'], minPieces: 5 } }),
            { type: 'choice', prompt: '"말해도 괜찮아" 포스터 문구로 가장 알맞은 것은?', options: ['"힘들다고 말하는 건 용기야. 상담실 문은 늘 열려 있어"', '"우울하면 큰일 나요!"', '"참는 사람이 강한 사람"'], answer: 0, difficulty: 0.15, explain: '겁주기 대신 희망과 도움 경로를 담아요.' },
          ],
        },
        worksheet: {
          title: '"말해도 괜찮아" 포스터',
          items: [
            { type: 'short', prompt: '포스터에 넣을 "말해도 괜찮아" 문구를 한 줄로 써요.' },
            { type: 'check', prompt: '내 문구를 점검해요.', options: ['겁주는 말이 없다', '도움을 청해도 된다는 말이 있다', '학교 도움 자원이 들어 있다'] },
          ],
          easy: { note: '보기 문구를 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 문구 하나를 골라요.', options: ['힘들다고 말하는 건 용기야', '상담실 문은 늘 열려 있어', '너의 이야기를 들을 준비가 되어 있어'], answer: '힘들다고 말하는 건 용기야' }] },
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 문구는 활동지에 쓰게 했다. ' + SAFE_NOTE,
      }),
      M('wrap.path', {
        title: '나의 도움 경로 점검표', method: '나의 도움 경로 정리', tool: 'kitchen', minutes: 7,
        levels: { easy: '도움 경로 점검표에서 믿는 어른·담임 선생님 두 칸을 표시한다(교사가 읽어 준다).', base: '점검표 네 칸(믿는 어른·담임·상담 선생님·지역 상담 번호)을 고르고 함정을 거른다.', challenge: '셋째 질문에서 상담 선생님께 처음 할 말을 고른다.' },
        wrap: {
          teacher: '"마음이 오래 무거울 때, 나는 어떤 길로 도움에 닿을 수 있을까요?" 점검표에서 도움 경로를 고른 뒤 활동지에 칸마다 누구인지(이름 대신 \'담임 선생님\'처럼) 적게 한다. "인터넷에 물어보면 되잖아요"라는 학생에게 "인터넷 글은 나를 모르는 사람이 써요. 나를 직접 만나 살필 수 있는 어른이 먼저예요"라고 말해 준다. 지역 상담 번호 칸은 학교가 확인한 번호로 채운다.',
          exitTicket: [
            IT(X('kitchen', CL('나의 도움 경로에 넣을 곳만 표시해요.', '나의 도움 경로', [
              { id: 'k1', text: '믿는 어른(보호자 등)', ok: true }, { id: 'k2', text: '담임 선생님', ok: true }, { id: 'k3', text: '상담 선생님', ok: true },
              { id: 'k4', text: '학교가 알려 준 지역 상담 번호', ok: true }, { id: 'k5', text: '익명 게시판의 모르는 사람' }, { id: 'k6', text: '아무에게도 말하지 않기' }]), { difficulty: 0.15 }),
              CL('도움 경로 두 곳만 표시해요.', '나의 도움 경로', [
                { id: 'k1', text: '믿는 어른(보호자 등)', ok: true }, { id: 'k2', text: '담임 선생님', ok: true }, { id: 'k6', text: '아무에게도 말하지 않기' }])),
            { type: 'choice', prompt: '"도움을 받아도 소용없다"는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 혼자 견뎌야 한다', '흔한 오해다, 도움을 받으면 나아질 수 있다', '어른은 이해하지 못한다'], answer: 1, difficulty: 0.15, explain: '도움을 받으면 나아질 수 있어요. 일찍 이야기할수록 좋아요.' },
            { type: 'choice', prompt: '상담 선생님께 처음 할 말로 알맞은 것은?', options: ['"요즘 마음이 계속 무거워서 이야기하고 싶어요"', '"아무것도 아니에요"', '"제 친구들은 다 이상해요"'], answer: 0, difficulty: 0.2, explain: '지금 느끼는 그대로 짧게 말하면 돼요.' },
          ],
        },
        worksheet: {
          title: '나의 도움 경로',
          items: [
            { type: 'table', prompt: '혼자 보기 칸: 나의 도움 경로를 차례로 써요(이름 대신 관계로, 걷지 않아요).', columns: ['차례', '누구·어디'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: `(예) 믿는 어른, 담임 선생님, 상담 선생님, ${NUM}` },
            { type: 'blank', prompt: '학교가 알려 준 지역 상담 번호를 옮겨 써요.', text: `지역 상담 번호: ___ (${NUM})`, answer: NUM },
          ],
        },
        notes: `${NUM}는 교사가 확인해 알려 준다. 활동지는 걷지 않는다. ` + SAFE_NOTE,
      }),
    );
  }

  // ==== 8학년 · 위험 신호와 생명지킴이 (life.m.warning-signs) ====
  // 보고·듣고·말하기 틀. 신호 카드에 방법·수단·장소를 넣지 않는다. 생명과 관련된 비밀은 지키지 않는다.
  {
    const M = MK('warning-signs', [8]);
    const KIND3 = ['말 신호', '행동 신호', '상황 신호'];
    const KIND = [
      { id: 'w1', text: '"다 소용없어"라는 말을 자주 한다', to: '말 신호' }, { id: 'w2', text: '"사라지고 싶다"고 말한다', to: '말 신호' },
      { id: 'w3', text: '작별 인사 같은 말을 남긴다', to: '말 신호' },
      { id: 'b1', text: '소중히 여기던 물건을 그냥 준다', to: '행동 신호' }, { id: 'b2', text: '갑자기 연락을 끊고 혼자 지낸다', to: '행동 신호' },
      { id: 'b3', text: '좋아하던 일을 모두 그만둔다', to: '행동 신호' },
      { id: 's1', text: '가족이나 반려동물을 잃었다', to: '상황 신호' }, { id: 's2', text: '따돌림이 오래 이어지고 있다', to: '상황 신호' },
      { id: 's3', text: '큰 실패나 이별이 있었다', to: '상황 신호' },
    ];
    const STEPS = ['보기: 신호 알아차리기', '듣기: 판단 없이 듣기', '말하기: 어른에게 함께 가기'];
    const D1 = { text: '동아리가 끝난 뒤 도경이 "요즘은 아무것도 의미가 없어. 사라지고 싶어. 이건 너만 알고 있어"라고 말한다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'keep', text: '"알겠어, 비밀이야" 하고 그날은 넘어간다', result: '도경의 말을 아는 어른이 아무도 없다.', impact: [{ who: '도경', text: '도움이 닿지 않는다', tone: -1 }], why: '생명과 관련된 비밀은 지키지 않아요. 생명이 비밀보다 먼저예요.', end: '비밀로 하고 넘어갔어요.',
        next: { text: '다음 날 도경이 학교에 오지 않았다. 마음이 계속 무겁다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'wait', text: '약속했으니 하루 더 기다려 본다', result: '걱정만 커지고 도경 곁에는 여전히 어른이 없다.', impact: [{ who: '도경', text: '혼자 견딘다', tone: -1 }], why: '걱정되면 기다리지 말고 바로 어른에게 알려요.' },
          { id: 'now', text: '바로 담임 선생님께 어제 들은 말을 알린다', result: '선생님이 곧바로 도경과 보호자에게 연락한다.', impact: [{ who: '도경', text: '보호를 받는다', tone: 1 }], why: '알린 것은 잘했어요. 들은 날 바로 알렸다면 더 좋았어요.' }] } },
      { id: 'honest', text: '"말해 줘서 고마워. 그런데 이건 혼자 알고 있을 수 없어. 같이 선생님께 가자"', result: '도경이 "그럼 다시는 너한테 말 안 해"라며 화를 낸다.', impact: [{ who: '도경', text: '어른과 이어질 길이 열린다', tone: 1 }], end: '솔직하게 말하고 함께 가자고 했어요.',
        next: { text: '도경이 화를 내며 가방을 챙긴다.', ask: '어떻게 할까?', choices: [
          { id: 'stay', text: '"네가 소중해서 그래. 지금 같이 담임 선생님께 가자"며 곁에 있는다', result: '도경이 한참 망설이다 함께 교무실로 간다.', impact: [{ who: '도경', text: '혼자가 아니라고 느낀다', tone: 1 }], end: '곁에 있으며 함께 갔어요.',
            next: { text: '담임 선생님이 "상담 선생님과도 이야기하자"고 하자 도경이 나를 본다.', ask: '나는 어떻게 할까?', choices: [
              { id: 'remain', text: '"끝날 때까지 밖에서 기다릴게"라고 한다', result: '도경이 고개를 끄덕이고 상담실로 들어간다.', impact: [{ who: '도경', text: '든든함을 느낀다', tone: 1 }] },
              { id: 'go', text: '이제 내 일은 끝났다며 집에 간다', result: '도경은 낯선 자리에서 혼자라고 느낀다.', impact: [{ who: '도경', text: '외로움을 느낀다', tone: -1 }], why: '어른에게 이은 뒤에도 곁에 머물러요.' }] } },
          { id: 'drop', text: '"알았어, 없던 일로 하자"며 물러선다', result: '도경의 말은 다시 비밀이 된다.', impact: [{ who: '도경', text: '도움이 멀어진다', tone: -1 }], why: '친구가 화를 내도 생명과 관련된 일은 어른에게 이어요.' }] } },
      { id: 'secret', text: '도경 몰래 바로 상담 선생님께 들은 말을 알린다', result: '상담 선생님이 곧 도경을 만나 살핀다.', impact: [{ who: '도경', text: '보호를 받는다', tone: 1 }], ending: '바로 어른에게 알렸어요. 나중에 도경에게 알린 까닭을 솔직하게 말하면 더 좋아요.' }] };
    const R1 = [{ id: 'r1', text: '생명은 비밀보다 먼저다' }, { id: 'r2', text: '솔직하게 말하고 함께 가면 관계도 지킬 수 있다' },
      { id: 'r3', text: '친구가 화내면 알리지 않는 게 낫다', why: '친구의 화는 지나가지만 안전은 되돌릴 수 없어요.' }, { id: 'r4', text: '"사라지고 싶다"는 말은 관심 끌기일 뿐이다', why: '그런 말은 도움이 필요하다는 신호예요. 꼭 어른에게 이어요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.myth', {
        title: '생명지킴이에 대한 오해 바로잡기', method: '생명지킴이 오해 바로잡기', tool: 'emotion', minutes: 6,
        levels: { easy: '말 카드 3장을 바른 말·오해로 나눈다.', base: '말 카드 5장을 나누고 설명을 듣는다.', challenge: '오해가 왜 위험한지(도움이 늦어짐) 고른 까닭을 말한다.' },
        intro: {
          teacher: '"친구에게 \'혹시 죽고 싶다는 생각까지 드니?\'라고 물으면 그 생각을 부추길까요?" 카드마다 손으로 O·X를 표시하게 한 뒤 시연 단추로 카드가 나뉘는 모습을 보인다. 걱정될 때 직접 묻는 것은 부추기는 것이 아니라 \'나는 네 이야기를 들을 준비가 됐어\'라는 뜻이 된다고 말해 준다. "농담처럼 말했으면 괜찮잖아요"라는 말에는 "농담처럼 한 말도 살펴야 해요. 확실하지 않으면 혼자 판단하지 말고 어른과 함께 살펴요"라고 짚는다. 생명지킴이는 친구를 혼자 구하는 사람이 아니라 어른·전문가와 잇는 사람이라고 밝힌다.',
          student: '생명지킴이에 대한 말 카드를 바른 말과 오해로 나눠요. 오해를 믿으면 친구에게 어떤 일이 생길지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['바른 말', '오해'], cards: [
            { id: 'm1', text: '걱정되는 걸 물어보면 오히려 부추긴다' }, { id: 'm2', text: '"죽고 싶다"는 말은 관심 끌기일 뿐이다' }, { id: 'm3', text: '친구가 혼자 해결해 줘야 한다' },
            { id: 't1', text: '걱정되면 직접 물어도 괜찮다' }, { id: 't2', text: '농담처럼 한 말도 살펴야 한다' }], weather: false }, sequence: [{ sort: { '바른 말': ['t1', 't2'], 오해: ['m1', 'm2', 'm3'] } }] },
          art: { draw: 'a paper-cut lighthouse made of folded paper casting a soft beam over a small paper boat, with two paper signs O and X on the shore', banner: '생명지킴이, 무엇이 맞을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '"직접 물어도 괜찮다"는 생명지킴이 교육의 원칙이다(사람 확인). 학생 자신의 생각을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.case', {
        title: '평소 밝던 태이의 달라진 모습', method: '달라진 친구 이야기', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장을 차례로 놓는다.', base: '장면 4장을 차례로 놓고 걱정되는 장면을 짚는다.', challenge: '걱정되는 장면의 신호가 말 신호인지 행동 신호인지 나눠 말한다.' },
        intro: {
          teacher: '"늘 웃던 태이가 이렇게 달라졌다면, 어느 장면에서 걱정이 되나요?" 가상 인물 태이의 장면을 섞어 보인 뒤 시연 단추로 차례대로 놓이는 모습을 보인다. "사춘기라 그런 거 아니에요?"라는 말에는 "그럴 수도 있어요. 그래도 \'다 소용없어\' 같은 말과 소중한 물건을 주는 행동이 함께 보이면, 살피고 물어볼 신호예요"라고 말해 준다. 오늘은 신호를 알아차리고(보기), 판단 없이 듣고(듣기), 어른에게 함께 가는(말하기) 생명지킴이 3단계를 익힌다고 밝힌다.',
          student: '가상 인물 태이의 장면을 차례대로 놓아요. 어느 장면에서 걱정이 되는지, 그 신호가 말인지 행동인지 생각해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '태이의 한 달', cards: [
            { id: 'c1', text: '쉬는 시간마다 웃으며 농담한다', motif: 'flower' }, { id: 'c2', text: '요즘 "다 소용없어"라고 말한다', motif: 'cloud' },
            { id: 'c3', text: '아끼던 게임기를 친구에게 그냥 준다', motif: 'star' }, { id: 'c4', text: '나는 걱정이 되어 말을 걸기로 한다', motif: 'leaf' }] }, sequence: [{ order: ['c1', 'c2', 'c3', 'c4'] }] },
          art: { draw: 'a paper-cut sequence of a cheerful student in a classroom fading into the same student sitting quietly, handing a small gift box to a friend', banner: '무엇이 달라졌을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 말과 행동의 변화만 보이고 방법·장소를 묘사하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.sort', {
        title: '말·행동·상황 신호 나누기', method: '위험 신호 분류', tool: 'sortboard', minutes: 15,
        levels: { easy: '신호 카드 5장을 세 바구니에 넣고, 틀리게 넣으면 까닭을 듣고 카드가 돌아온다.', base: '신호 카드 9장을 세 바구니에 나누고, 알아차린 뒤 할 일을 나눈다.', challenge: '셋째 문항에서 여러 신호가 겹친 사례와 한 가지 신호만 보이는 사례를 나눈다.' },
        activity: {
          title: '말·행동·상황 신호 나누기', tool: 'sortboard',
          teacher: '"\'가족을 잃었다\'는 말도 행동도 아닌데, 왜 신호 카드에 있을까요?" 카드를 나눈 뒤 상황 신호는 친구가 큰 일을 지나고 있을 때 더 살펴보라는 뜻이라고 짚는다. "신호가 보이면 내가 뭘 할 수 있어요?"라는 학생에게 "신호를 알아차리는 것만으로도 생명지킴이의 첫 단계예요. 그다음은 묻고, 듣고, 어른에게 함께 가는 거예요"라고 말해 준다. 신호 하나로 판단하지 않고, 걱정되면 어른과 함께 살핀다.',
          task: '가상 친구에게 보일 수 있는 위험 신호 카드를 말·행동·상황 신호 바구니에 나누고, 알아차린 뒤 할 일을 골라요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BOARD('위험 신호 카드를 세 바구니에 나누세요.', KIND3, KIND),
              BOARD('신호 카드 5장을 세 바구니에 나누세요.', KIND3, pickCards(KIND, ['w1', 'w2', 'b1', 'b2', 's1']))),
            IT(BOARD('신호를 알아차린 뒤 할 일과 하지 않을 일로 나누세요.', ['할 일', '하지 않을 일'], [
              { id: 'd1', text: '"요즘 괜찮아?" 하고 다가가 묻기', to: '할 일' }, { id: 'd2', text: '판단 없이 끝까지 듣기', to: '할 일' },
              { id: 'd3', text: '믿는 어른에게 함께 가기', to: '할 일' }, { id: 'd4', text: '다른 친구들에게 소문내기', to: '하지 않을 일' },
              { id: 'd5', text: '비밀로 하고 혼자 지켜보기', to: '하지 않을 일' }, { id: 'd6', text: '"설마 그러겠어" 하고 넘기기', to: '하지 않을 일' }])),
            IT(BOARD('가상 친구 사례를 신호가 겹친 사례와 한 가지만 보이는 사례로 나누세요.', ['여러 신호가 겹친 사례', '한 가지 신호만 보이는 사례'], [
              { id: 'e1', text: '반려견을 잃은 뒤 "다 소용없어"라며 연락을 끊었다', to: '여러 신호가 겹친 사례' },
              { id: 'e2', text: '따돌림이 이어지는 중에 아끼던 물건을 나눠 줬다', to: '여러 신호가 겹친 사례' },
              { id: 'e3', text: '시험을 망친 날 하루 말수가 적었다', to: '한 가지 신호만 보이는 사례' },
              { id: 'e4', text: '좋아하던 동아리를 그만뒀다', to: '한 가지 신호만 보이는 사례' }]),
              null, null, { conclude: '위험 신호는 말·행동·상황으로 나타나요. 신호가 겹치면 서둘러, 하나라도 걱정되면 묻고 듣고 믿는 어른에게 함께 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '상황 신호(큰 상실·따돌림)가 왜 신호 카드에 들어가는지 한 문장으로 써요.' }] },
        notes: '신호 카드에 방법·수단·장소를 넣지 않았다. 학생에게 신호를 본 경험을 묻지 않는다. 걱정되는 친구가 떠오른다고 말하는 학생은 수업 뒤 바로 상담 선생님에게 잇는다. ' + SAFE_NOTE,
      }),
      M('activity.three-steps', {
        title: '보고·듣고·말하기 3분 연습', method: '보고·듣고·말하기 연습', tool: 'timer', minutes: 15,
        levels: { easy: '세 단계 카드를 차례로 놓고 \'보기\' 단계만 연습해 점검한다.', base: '짝과 3분씩 역할을 바꿔 세 단계를 연습하고 점검표로 서로 확인한다.', challenge: '친구가 "괜찮아, 아무것도 아냐"라고 거절할 때 이어 갈 말까지 연습하고 점검한다.' },
        activity: {
          title: '보고·듣고·말하기 3분 연습', tool: 'timer',
          teacher: '"보기·듣기·말하기, 이 세 단계를 실제로 말해 보면 어디가 가장 어려울까요?" 짝과 가상 대본 카드(가상 인물 태이 역)를 들고 3분씩 연습하게 한다. 연습 대본은 가상 장면이며 자기 이야기를 하지 않는다고 미리 말한다. "직접 묻는 게 너무 무서워요"라는 학생에게 "\'요즘 많이 힘들어 보여서 걱정돼\'처럼 본 것부터 말하면 묻기가 쉬워져요"라고 말해 준다. 말하기 단계는 늘 \'어른에게 함께 가자\'로 끝나게 한다.',
          task: '짝과 가상 대본으로 보고(신호 말하기) → 듣고(판단 없이) → 말하기("선생님께 같이 가자")를 3분씩 연습하고, 점검표로 서로 확인해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '생명지킴이 3단계 카드를 차례대로 놓으세요.', toolOptions: { title: '생명지킴이 3단계', cards: [STEPS[2], STEPS[0], STEPS[1]] }, target: { order: STEPS } }),
            IT({ prompt: '연습 3분, 바꾸기 30초로 두 번 하도록 타이머를 맞추세요.', toolOptions: { title: '역할 바꿔 연습', labels: ['연습', '바꾸기'], plan: { work: 60, rest: 20, rounds: 1 } }, target: { plan: { work: 180, rest: 30, rounds: 2 } } }),
            IT({ prompt: '연습한 뒤 짝의 세 단계를 점검표로 확인하세요.', toolOptions: { title: '짝의 3단계 점검' }, target: { selfCheck: ['본 것(신호)을 말로 꺼냈다', '판단하거나 훈계하지 않고 들었다', '"선생님께 같이 가자"고 말했다'] } },
              { prompt: '연습한 뒤 짝이 본 것(신호)을 말로 꺼냈는지 표시하세요.', target: { selfCheck: ['본 것(신호)을 말로 꺼냈다'] } },
              { prompt: '연습한 뒤 짝이 거절에 이어 간 말까지 점검하세요.', target: { selfCheck: ['본 것(신호)을 말로 꺼냈다', '판단하거나 훈계하지 않고 들었다', '"선생님께 같이 가자"고 말했다', '거절해도 "네가 걱정돼서"라며 다시 권했다'] } },
              { conclude: '보고(신호를 알아차려 말로 꺼내고), 듣고(판단 없이), 말해요(어른에게 함께 가자). 거절해도 걱정하는 마음을 전하며 다시 권해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'보기\' 단계에서 친구에게 본 것을 꺼내는 첫마디를 한 문장으로 써요.' }] },
        notes: '연습은 가상 대본으로만 한다. 학생 자신의 경험으로 역할을 하지 않게 한다. ' + SAFE_NOTE,
      }),
      M('activity.dilemma', {
        title: '"너만 알고 있어" 갈림길', method: '"아무한테도 말하지 마"', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고, 끝에서 "생명은 비밀보다 먼저" 근거를 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 친구와의 관계를 지키며 알리는 근거까지 두 장 모두 고른다.' },
        activity: {
          title: '"너만 알고 있어" 갈림길', tool: 'dilemma',
          teacher: '"친구가 \'너만 알고 있어\'라고 하면, 지키는 것이 의리일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 비밀을 지킨 길과 솔직하게 말하고 함께 간 길을 견주게 한다. "몰래 알리면 친구를 배신하는 거잖아요"라는 학생에게 "몰래라도 알리면 친구는 보호를 받아요. 다만 나중에 \'네가 소중해서\'라고 솔직하게 말하면 관계도 지킬 수 있어요"라고 말해 준다. 생명과 관련된 비밀은 지키지 않는다는 원칙을 분명히 한다. 장면에 방법은 나오지 않는다.',
          task: '가상 친구 도경이 비밀을 부탁하는 갈림길에서 길을 골라 결과를 따라가고, 끝에서 "생명은 비밀보다 먼저" 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '도경이 "너만 알고 있어"라고 해요. 첫 갈림길에서 골라 결과를 보세요.', base: '도경이 "너만 알고 있어"라고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 관계를 지키며 알리는 근거까지 두 장 모두 고르세요.' },
              '"너만 알고 있어"', D1, [['honest', 'stay', 'remain'], ['secret']], R1, ['r1', 'r2']),
            IT({ prompt: '선생님께 알리러 가는 길에 다른 친구가 무슨 일이냐고 물어요. 다음 선택을 따라가세요.', toolOptions: { title: '교무실 가는 길', scene: { text: '교무실로 가는데 반 친구가 "도경 무슨 일 있어? 같이 가 줄까?"라고 묻는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'all', text: '도경에게 들은 말을 그대로 다 이야기한다', result: '도경의 이야기가 반에 퍼진다.', impact: [{ who: '도경', text: '믿음이 깨진다', tone: -1 }], why: '어른에게 잇는 것과 친구들에게 퍼뜨리는 것은 달라요.' },
              { id: 'brief', text: '"선생님께 여쭤볼 일이 있어. 나중에 얘기할게"', result: '친구가 고개를 끄덕이고 돌아간다.', impact: [{ who: '도경', text: '이야기가 지켜진다', tone: 1 }], ending: '어른에게만 알리고 소문은 막았어요.' }] }, reasons: [{ id: 'q1', text: '알릴 사람은 도울 수 있는 어른이다' }, { id: 'q2', text: '걱정되면 반 친구들에게 다 알려야 한다', why: '소문은 친구를 더 힘들게 해요. 어른에게만 이어요.' }], compare: true },
              target: { path: [['brief']], reasons: ['q1'] } }),
            IT({ prompt: '어른에게 알린 다음 날, 도경이 나를 피해요. 다음 선택을 따라가세요.', toolOptions: { title: '다음 날', scene: { text: '다음 날 도경이 나와 눈을 마주치지 않고 피한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
              { id: 'regret', text: '"괜히 말했나 봐" 하며 나도 도경을 피한다', result: '둘 사이가 멀어지고 도경은 더 혼자가 된다.', impact: [{ who: '도경', text: '외로움이 커진다', tone: -1 }], why: '알린 것은 잘한 일이에요. 후회하지 말고 곁에 있어요.' },
              { id: 'greet', text: '"어제 놀랐지? 네가 소중해서 그랬어. 점심 같이 먹자"', result: '도경이 잠시 망설이다 고개를 끄덕인다.', impact: [{ who: '도경', text: '곁에 친구가 있다고 느낀다', tone: 1 }], ending: '알린 까닭을 말하고 곁에 머물렀어요.' }] }, reasons: [{ id: 'p1', text: '알린 것은 친구를 지킨 일이라 후회하지 않아도 된다' }, { id: 'p2', text: '친구가 피하면 알린 것이 잘못이다', why: '친구의 서운함은 지나가요. 알린 것은 친구를 지킨 일이에요.' }], compare: true },
              target: { path: [['greet']], reasons: ['p1'] }, conclude: '생명은 비밀보다 먼저예요. 솔직하게 말하고 함께 어른에게 가고, 소문은 내지 않으며, 알린 뒤에도 곁에 머물러요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "사라지고 싶어, 너만 알고 있어"라고 할 때 가장 알맞은 행동은?', options: ['약속을 지킨다', '고맙다고 말하고, 혼자 알 수 없다며 함께 어른에게 간다', '반 친구들에게 물어본다'], answer: '고맙다고 말하고, 혼자 알 수 없다며 함께 어른에게 간다' }] },
        notes: '같은 학년군 폭력예방 모듈(saf-violence.m.life-signal)의 메시지 장면과 겹치지 않게 대면 장면·다른 인물로 썼다. 방법을 묘사하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.script', {
        title: '걱정되는 친구에게 말 걸기 대본', method: '말 걸기 대본 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '대본 2줄(관찰한 사실·어른 연결)을 쓰고 기준 2개를 점검한다.', base: '대본 4줄을 쓰고 기준 4개(관찰한 사실·공감·직접 묻기·어른 연결)를 점검한다.', challenge: '셋째 문항에서 친구가 "아니야, 괜찮아"라고 부인할 때의 대답까지 쓴다.' },
        activity: {
          title: '걱정되는 친구에게 말 걸기 대본', tool: 'rubric-writing',
          teacher: '"\'너 요즘 이상해\'와 \'요즘 점심을 혼자 먹고 \'다 소용없다\'고 해서 걱정돼\', 무엇이 다를까요?" 판단 대신 본 것(사실)으로 시작하는 말을 견준 뒤 대본을 쓰게 한다. "직접 묻는 줄은 어떻게 써요?"라는 학생에게 "\'혹시 힘든 마음이 아주 큰 거야?\'처럼 걱정되는 걸 솔직하게 물어도 돼요. 물어본다고 부추기지 않아요"라고 말해 준다. 대본은 가상 인물 태이에게 쓰는 것이고 걷지 않는다.',
          task: '걱정되는 가상 친구 태이에게 건넬 대본을 쓰고, 기준(관찰한 사실·공감·직접 묻기·어른 연결)으로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '태이에게 건넬 4줄 대본을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '요즘 "다 소용없다"며 혼자 지내는 가상 친구 태이에게 건넬 말을 4줄로 쓰세요.', minChars: 50, maxChars: 260, minSentences: 4, maxSentences: 5, title: '말 걸기 대본' }, target: { selfCheck: ['본 것(사실)으로 말을 꺼냈다', '마음을 알아주는 말을 넣었다', '걱정되는 것을 직접 물었다', '어른에게 함께 가자는 말을 넣었다'] } },
              { prompt: '태이에게 건넬 2줄 대본(본 것 + 함께 가자)을 쓰고 기준표에 표시하세요.', toolOptions: { minChars: 20, minSentences: 2, maxSentences: 3, starter: '요즘 네가 ___해서 걱정돼. 담임 선생님께 같이 ___.' }, target: { selfCheck: ['본 것(사실)으로 말을 꺼냈다', '어른에게 함께 가자는 말을 넣었다'] } }),
            IT({ prompt: '"너 요즘 이상해"를 본 것(사실)으로 시작하는 말로 바꿔 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"너 요즘 이상해"를 판단 없이 본 것으로 시작하는 말로 바꿔 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '판단 대신 사실로' }, target: { selfCheck: ['판단하는 낱말을 뺐다', '본 행동을 그대로 말했다'] } }),
            IT({ prompt: '태이가 "아니야, 괜찮아"라고 해요. 이어 갈 대답 두 줄을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '태이가 "아니야, 괜찮아"라고 부인할 때 이어 갈 대답을 두 줄로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '부인할 때의 대답' }, target: { selfCheck: ['다그치지 않았다', '걱정하는 마음을 다시 전했다', '언제든 함께 어른에게 갈 수 있다고 말했다'] } },
              null, null, { conclude: '본 것으로 꺼내고, 마음을 알아주고, 걱정되는 것을 솔직히 묻고, 함께 어른에게 가요. 부인해도 걱정하는 마음을 다시 전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 걱정되는 것을 직접 물은 줄을 옮겨 써요.' }],
          easy: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '요즘 네가 ___해서 걱정돼. 담임 선생님께 같이 ___.', answer: '(예) 혼자 지내는 것 같아, 가 볼래' }] },
        notes: '대본은 가상 인물에게 쓴다. 걷거나 발표하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.chain', {
        title: '생명지킴이 연결 고리', method: '생명지킴이 연결 고리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 3개(친구·담임 선생님·보호자)에 연결 방법 카드를 잇는다.', base: '가지 5개(상담 선생님·지역 상담 번호 더함)에 연결 방법 카드를 잇는다.', challenge: '셋째 질문에서 밤·주말에 연결하는 방법을 고른다.' },
        wrap: {
          teacher: '"가운데 \'나\'에서 몇 갈래 길로 도움에 닿을 수 있을까요?" 가지마다 연결 방법을 이은 뒤 학교가 쉬는 밤·주말에는 어느 가지가 열려 있는지 함께 본다. "어른이 안 받아 주면요?"라는 학생에게 "한 사람이 바로 안 되면 다음 가지로 가요. 고리가 여러 개인 까닭이에요"라고 말해 준다. 지역 상담 번호는 학교가 확인한 번호로 활동지에 채운다.',
          exitTicket: [
            IT(X('mindmap', SB('"나"에서 각 가지로 닿는 연결 방법을 이어요.', ['친구', '담임 선생님', '상담 선생님', '보호자', '지역 상담 번호'], [
              { id: 'c1', text: '"같이 가자"고 손 내밀기', to: '친구' }, { id: 'c2', text: '아침 조회 뒤 교무실 찾아가기', to: '담임 선생님' },
              { id: 'c3', text: '쉬는 시간 상담실 문 두드리기', to: '상담 선생님' }, { id: 'c4', text: '집에 가서 바로 이야기하기', to: '보호자' },
              { id: 'c5', text: '학교가 알려 준 번호로 전화하기', to: '지역 상담 번호' }, { id: 'c6', text: '혼자 끙끙 앓기' }], { topic: '나' }), { difficulty: 0.15 }),
              SB('"나"에서 가지 세 곳으로 닿는 방법을 이어요.', ['친구', '담임 선생님', '보호자'], [
                { id: 'c1', text: '"같이 가자"고 손 내밀기', to: '친구' }, { id: 'c2', text: '아침 조회 뒤 교무실 찾아가기', to: '담임 선생님' },
                { id: 'c4', text: '집에 가서 바로 이야기하기', to: '보호자' }], { topic: '나' })),
            { type: 'choice', prompt: '"물어보면 오히려 부추긴다"는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 모른 척해야 한다', '걱정될 때 직접 묻는 것은 도움의 시작이다', '전문가만 물어볼 수 있다'], answer: 1, difficulty: 0.15, explain: '직접 물어도 괜찮아요. "네 이야기를 들을 준비가 됐어"라는 뜻이 돼요.' },
            { type: 'choice', prompt: '학교가 쉬는 주말 밤에 친구가 걱정될 때 알맞은 연결은?', options: ['월요일까지 기다린다', '보호자에게 바로 알리고 학교가 알려 준 지역 상담 번호로 함께 연락한다', '단톡방에 올려 친구들에게 묻는다'], answer: 1, difficulty: 0.2, explain: '밤·주말에도 보호자와 지역 상담처 가지는 열려 있어요.' },
          ],
        },
        worksheet: {
          title: '생명지킴이 연결 고리',
          items: [
            { type: 'table', prompt: '가지마다 연결 방법을 써요.', columns: ['가지', '연결 방법'], cells: [['담임 선생님', ''], ['상담 선생님', ''], ['보호자', '']], answer: '교무실 찾아가기, 상담실 찾아가기, 집에서 바로 이야기하기' },
            { type: 'blank', prompt: '학교가 알려 준 지역 상담 번호를 옮겨 써요.', text: `지역 상담 번호: ___ (${NUM})`, answer: NUM },
          ],
        },
        notes: `${NUM}는 교사가 확인해 알려 준다. ` + SAFE_NOTE,
      }),
      M('wrap.self-care', {
        title: '돕는 사람도 돌봄이 필요해', method: '돕는 사람도 돌봄이 필요해', tool: 'kitchen', minutes: 7,
        levels: { easy: '나를 돌보는 점검표에서 잠·이야기 나누기 두 항목을 표시한다(교사가 읽어 준다).', base: '점검표 네 항목을 고르고 함정을 거른다.', challenge: '셋째 질문에서 내 마음이 무거울 때 갈 곳을 고른다.' },
        wrap: {
          teacher: '"친구를 도운 뒤 내 마음이 무거워지는 건 이상한 걸까요?" 돕는 사람도 지치고 걱정될 수 있다는 것을 먼저 말한 뒤 점검표를 고르게 한다. "친구가 힘든데 내가 쉬면 미안해요"라는 학생에게 "내가 지치지 않아야 오래 곁에 있을 수 있어요. 친구의 안전은 어른에게 맡기고, 나는 나를 돌봐요"라고 말해 준다. 오늘 수업으로 마음이 무거운 학생은 언제든 상담 선생님을 찾아오라고 말해 둔다.',
          exitTicket: [
            IT(X('kitchen', CL('친구를 도운 뒤 나를 돌보는 일만 표시해요.', '돕는 나를 돌보기', [
              { id: 'k1', text: '잠을 충분히 잔다', ok: true }, { id: 'k2', text: '믿는 어른에게 내 마음도 이야기한다', ok: true },
              { id: 'k3', text: '친구의 안전은 어른에게 맡긴다', ok: true }, { id: 'k4', text: '좋아하는 활동으로 쉰다', ok: true },
              { id: 'k5', text: '친구 걱정에 밤새 휴대폰을 붙잡는다' }, { id: 'k6', text: '내가 다 해결해야 한다고 생각한다' }]), { difficulty: 0.15 }),
              CL('나를 돌보는 일 두 가지만 표시해요.', '돕는 나를 돌보기', [
                { id: 'k1', text: '잠을 충분히 잔다', ok: true }, { id: 'k2', text: '믿는 어른에게 내 마음도 이야기한다', ok: true }, { id: 'k5', text: '친구 걱정에 밤새 휴대폰을 붙잡는다' }])),
            { type: 'choice', prompt: '친구를 도운 뒤 내 마음이 계속 무거울 때 갈 곳으로 알맞은 것은?', options: ['상담 선생님', '아무 데도 가지 않는다', '친구의 비밀을 들어 줄 다른 친구'], answer: 0, difficulty: 0.15, explain: '돕는 사람도 이야기할 곳이 필요해요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '돕는 나를 돌보기',
          items: [
            { type: 'check', prompt: '혼자 보기 칸: 다음 주에 나를 돌볼 방법에 표시해요(걷지 않아요).', options: ['잠 지키기', '믿는 어른과 이야기하기', '좋아하는 활동 하기'] },
            { type: 'short', prompt: '돕는 사람도 돌봄이 필요한 까닭을 한 문장으로 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 8학년 · SNS 속 친구의 신호 (life.m.online-signals) ====
  // SNS 위험 정보는 내용을 옮기지 않는다. 늘 '보면 퍼뜨리지 않고 어른께 알리고 신고' 틀.
  {
    const M = MK('online-signals', [8]);
    const SEEN = [['못 본 척 넘김', 30], ['어른에게 알림', 25], ['캡처해 공유', 20], ['직접 안부 메시지', 15], ['장난 댓글', 10]];
    const DO2 = ['해도 될 일', '하면 안 될 일'];
    const DOS = [
      { id: 'g1', text: '보호자·선생님께 알리기', to: '해도 될 일' }, { id: 'g2', text: '앱의 신고 기능 쓰기', to: '해도 될 일' },
      { id: 'g3', text: '친구에게 직접 안부 묻기', to: '해도 될 일' },
      { id: 'n1', text: '캡처해서 단톡방에 퍼뜨리기', to: '하면 안 될 일' }, { id: 'n2', text: '조롱하는 댓글 달기', to: '하면 안 될 일' },
      { id: 'n3', text: '못 본 척 그냥 넘기기', to: '하면 안 될 일' },
    ];
    const FLOW = [{ id: 'f1', text: '친구에게 안부 묻기' }, { id: 'f2', text: '보호자·선생님께 알리기' }, { id: 'f3', text: '앱에서 신고하기' }, { id: 'f4', text: '급하면 지역 상담 번호로 연락' }];
    const D1 = { text: '밤 11시, 채원에게서 "다들 나 없어도 아무렇지 않겠지"라는 메시지가 왔다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'later', text: '늦었으니 내일 학교에서 이야기한다', result: '밤새 채원의 메시지에 아무도 답하지 않는다.', impact: [{ who: '채원', text: '혼자 밤을 보낸다', tone: -1 }], why: '걱정되는 메시지는 미루지 말고 바로 살피고 어른에게 알려요.', end: '내일로 미뤘어요.',
        next: { text: '아침에 채원의 메시지 창이 조용하다. 아직 걱정이 된다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'class', text: '학교에 가서 채원이 오는지만 지켜본다', result: '채원이 오지 않았고 아무도 사정을 모른다.', impact: [{ who: '채원', text: '도움이 늦어진다', tone: -1 }], why: '걱정되면 지켜보지 말고 어른에게 알려요.' },
          { id: 'tellam', text: '등교하자마자 담임 선생님께 메시지를 보여 드린다', result: '선생님이 바로 채원의 보호자에게 연락한다.', impact: [{ who: '채원', text: '어른이 살핀다', tone: 1 }], why: '알린 것은 잘했어요. 밤에 바로 보호자께 알렸다면 더 빨랐어요.' }] } },
      { id: 'reply', text: '"무슨 일 있어? 나는 네가 걱정돼"라고 바로 답장한다', result: '답이 오지 않는다.', impact: [{ who: '채원', text: '걱정해 주는 사람이 있다는 걸 안다', tone: 1 }], end: '바로 안부 답장을 보냈어요.',
        next: { text: '10분이 지나도 채원에게서 답이 없다.', ask: '어떻게 할까?', choices: [
          { id: 'parent', text: '내 보호자에게 바로 메시지를 보여 주고 도움을 청한다', result: '보호자가 채원의 보호자에게 연락해 채원을 살피게 한다.', impact: [{ who: '채원', text: '곁에 어른이 온다', tone: 1 }], end: '내 보호자에게 바로 알렸어요.',
            next: { text: '다음 날 채원이 "어젯밤 우리 엄마가 왔어"라고 말한다.', ask: '어떻게 할까?', choices: [
              { id: 'care', text: '"걱정돼서 그랬어. 오늘 쉬는 시간에 같이 있을래?"', result: '채원이 조용히 고개를 끄덕인다.', impact: [{ who: '채원', text: '곁에 친구가 있다고 느낀다', tone: 1 }] },
              { id: 'share', text: '반 단톡방에 "어젯밤 채원 큰일 날 뻔했대"라고 쓴다', result: '소문이 퍼져 채원이 학교에 오기 힘들어한다.', impact: [{ who: '채원', text: '더 큰 상처를 받는다', tone: -1 }], why: '친구 일을 단톡방에 퍼뜨리지 않아요.' }] } },
          { id: 'sleep', text: '답이 없으니 자는 거겠지 하고 잔다', result: '채원이 정말 괜찮은지 아무도 모른다.', impact: [{ who: '채원', text: '혼자 남는다', tone: -1 }], why: '답이 없으면 더 서둘러 어른에게 알려요.' }] } },
      { id: 'adult', text: '바로 내 보호자에게 메시지를 보여 주고 함께 연락한다', result: '보호자가 채원의 보호자에게 곧바로 연락한다.', impact: [{ who: '채원', text: '어른이 살핀다', tone: 1 }], ending: '바로 어른에게 알려 함께 대응했어요.' }] };
    const R1 = [{ id: 'r1', text: '온라인 글도 진심일 수 있어 바로 살핀다' }, { id: 'r2', text: '밤이라도 보호자에게 알려 어른과 함께 대응한다' },
      { id: 'r3', text: '온라인 글은 진심이 아니니 넘겨도 된다', why: '온라인에 쓴 말도 도움이 필요하다는 신호일 수 있어요.' }, { id: 'r4', text: '늦은 밤에는 어른을 깨우지 않는 게 예의다', why: '친구의 안전이 걸린 일은 밤이라도 알려요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.feed', {
        title: '채원의 일주일 피드', method: '가상 피드 살펴보기', tool: 'story', minutes: 6,
        levels: { easy: '게시물 3장을 시간 순으로 놓는다.', base: '게시물 4장을 시간 순으로 놓고 변화를 말한다.', challenge: '게시물마다 걱정되는 정도를 짝과 말해 본다.' },
        intro: {
          teacher: '"채원의 게시물을 월요일부터 차례로 놓으면 무엇이 보이나요?" 가상 인물 채원의 게시물 네 장을 섞어 보인 뒤 시연 단추로 시간 순으로 놓이는 모습을 보인다. "SNS에는 원래 다들 우울한 척 써요"라는 말에는 "그럴 수도 있어요. 그래도 말이 점점 어두워지면 진심일 수 있으니 살펴봐요"라고 말해 준다. 오늘은 SNS에서 걱정되는 신호를 보았을 때 퍼뜨리지 않고 어른에게 알리는 법을 익힌다고 밝힌다. 게시물은 지어낸 가상 글이다.',
          student: '가상 친구 채원의 일주일 게시물을 시간 순으로 놓고, 말이 어떻게 달라지는지 찾아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '채원의 일주일', cards: [
            { id: 'c1', text: '월: "주말 재밌었다 ㅎㅎ"', motif: 'flower' }, { id: 'c2', text: '수: "요즘 다 귀찮다"', motif: 'cloud' },
            { id: 'c3', text: '금: "아무도 내 맘 몰라"', motif: 'rain' }, { id: 'c4', text: '일: "다들 안녕, 잘 지내"', motif: 'storm' }] }, sequence: [{ order: ['c1', 'c2', 'c3', 'c4'] }] },
          art: { draw: 'a paper-cut phone screen with four paper post cards stacked in a timeline, the colors fading from bright to gray, a small paper hand reaching toward the phone', banner: '무엇이 달라졌을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '게시물은 지어낸 가상 글이며 방법·수단을 담지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.poll', {
        title: '걱정되는 글을 봤을 때의 선택', method: '온라인에서 걱정되는 글을 봤을 때', tool: 'chart', minutes: 6,
        levels: { easy: '막대그래프에서 가장 많은 선택을 읽는다.', base: '선택들 가운데 바람직한 선택을 고른다.', challenge: '캡처 공유가 왜 위험한지 짝과 말한다.' },
        intro: {
          teacher: '"가상 학급에서 친구의 걱정되는 글을 봤을 때 가장 많이 한 일은 무엇일까요?" 막대그래프를 함께 읽고 시연 단추로 바람직한 선택이 골라지는 모습을 보인다. "캡처해서 다른 친구한테 물어보는 건 걱정돼서 하는 거잖아요"라는 말에는 "걱정하는 마음은 좋아요. 하지만 캡처가 퍼지면 친구는 더 상처받아요. 걱정되면 캡처를 돌리지 말고 어른에게 직접 보여 줘요"라고 말해 준다. 이 자료는 가상 설문이다.',
          student: '가상 학급 설문 그래프를 읽고, 친구의 걱정되는 글을 봤을 때 가장 바람직한 선택을 골라요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '친구의 걱정되는 글을 봤을 때 한 일(가상 학급 설문)', unit: '%', xLabel: '한 일', yLabel: '응답 비율', data: SEEN, question: '가장 바람직한 선택은?', choices: SEEN.map((d) => d[0]) }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut bar chart beside a paper phone, one bar marked with a small paper heart and an adult figure', banner: '봤을 때, 무엇을 할까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 학생이 실제로 본 글을 묻지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.dilemma', {
        title: '밤 11시 메시지 갈림길', method: '밤 11시 메시지', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고 근거 카드를 한 장 이상 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 맞는 근거 두 장을 모두 고른다.' },
        activity: {
          title: '밤 11시 메시지 갈림길', tool: 'dilemma',
          teacher: '"밤 11시에 걱정되는 메시지가 오면, 어른을 깨워도 될까요?" 학생마다 한 길을 끝까지 가 본 뒤, 내일로 미룬 길과 바로 보호자에게 알린 길을 견주게 한다. "그냥 감성 글일 수도 있잖아요"라는 학생에게 "그럴 수도 있어요. 하지만 확인은 어른이 함께 해요. 아니면 다행이고, 맞으면 친구를 지켜요"라고 말해 준다. 메시지 내용을 다른 친구에게 퍼뜨리지 않는다는 점도 짚는다.',
          task: '밤 11시에 가상 친구 채원에게서 걱정되는 메시지가 온 갈림길에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '밤 11시에 채원의 메시지가 왔어요. 첫 갈림길에서 골라 결과를 보세요.', base: '밤 11시에 채원의 메시지가 왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 맞는 근거 두 장을 모두 고르세요.' },
              '밤 11시 메시지', D1, [['reply', 'parent', 'care'], ['adult']], R1, ['r1', 'r2']),
            IT({ prompt: '다른 친구가 채원의 게시물을 캡처해 보냈어요. 다음 선택을 따라가세요.', toolOptions: { title: '캡처를 받았을 때', scene: { text: '반 친구가 채원의 어두운 게시물 캡처를 보내며 "이거 봤어? 대박"이라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'fwd', text: '다른 친구에게도 전달해 같이 걱정한다', result: '캡처가 여러 단톡방으로 퍼진다.', impact: [{ who: '채원', text: '사생활이 퍼져 상처받는다', tone: -1 }], why: '걱정되더라도 캡처는 퍼뜨리지 않아요.' },
              { id: 'stop', text: '"퍼뜨리지 말자" 답하고, 담임 선생님께 직접 알린다', result: '선생님이 조용히 채원을 살핀다.', impact: [{ who: '채원', text: '소문 없이 도움을 받는다', tone: 1 }], ending: '퍼뜨리지 않고 어른에게 알렸어요.' }] }, reasons: [{ id: 'q1', text: '걱정되는 글은 퍼뜨리지 말고 어른에게 직접 알린다' }, { id: 'q2', text: '많이 알릴수록 친구를 빨리 돕는다', why: '친구들에게 퍼지는 것은 도움이 아니라 상처가 돼요.' }], compare: true },
              target: { path: [['stop']], reasons: ['q1'] } }),
            IT({ prompt: '모르는 사람이 올린 위험해 보이는 게시물을 봤어요. 다음 선택을 따라가세요.', toolOptions: { title: '모르는 사람의 게시물', scene: { text: '추천 피드에 생명을 위협하는 내용으로 보이는 모르는 사람의 게시물이 떴다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'look', text: '무슨 내용인지 끝까지 보고 친구에게도 보여 준다', result: '보고 나서 마음이 불편하고, 게시물은 그대로 퍼진다.', impact: [{ who: '나와 친구', text: '마음이 힘들어진다', tone: -1 }], why: '위험한 게시물은 자세히 보거나 옮기지 않아요.' },
              { id: 'report', text: '더 보지 않고 신고 기능을 누른 뒤 보호자에게 알린다', result: '게시물이 검토되고, 보호자와 마음을 나눈다.', impact: [{ who: '게시물을 올린 사람', text: '도움이 닿을 기회가 생긴다', tone: 1 }], ending: '보지 않고 신고하고 어른에게 알렸어요.' }] }, reasons: [{ id: 'p1', text: '위험한 게시물은 보지 않고 신고하고 어른에게 알린다' }, { id: 'p2', text: '무슨 내용인지 알아야 도울 수 있다', why: '내용을 자세히 보는 것은 도움이 아니라 나를 힘들게 해요. 신고와 알리기로 충분해요.' }], compare: true },
              target: { path: [['report']], reasons: ['p1'] }, conclude: '온라인 글도 진심일 수 있어요. 바로 안부를 묻고, 밤이라도 어른에게 알리고, 캡처는 퍼뜨리지 않고, 위험한 게시물은 보지 않고 신고해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '밤늦게 친구에게서 걱정되는 메시지가 왔을 때 가장 알맞은 행동은?', options: ['내일 이야기한다', '안부를 묻고, 보호자에게 바로 알려 함께 대응한다', '단톡방에 올려 친구들과 상의한다'], answer: '안부를 묻고, 보호자에게 바로 알려 함께 대응한다' }] },
        notes: '위험 게시물의 내용은 장면에 옮기지 않았다("생명을 위협하는 내용으로 보이는"까지만). ' + SAFE_NOTE,
      }),
      M('activity.dos', {
        title: '온라인 대응, 해도 될 일·안 될 일', method: '온라인 대응 해도 될 일·안 될 일', tool: 'sortboard', minutes: 15,
        levels: { easy: '대응 카드 4장을 두 바구니에 넣고, 틀리게 넣으면 까닭을 듣고 카드가 돌아온다.', base: '대응 카드 6장을 나누고, 위험한 게시물을 보았을 때 할 일도 나눈다.', challenge: '셋째 문항에서 하면 안 될 일마다 해로운 까닭 카드를 맞는 바구니에 넣는다.' },
        activity: {
          title: '온라인 대응, 해도 될 일·안 될 일', tool: 'sortboard',
          teacher: '"\'못 본 척 넘기기\'는 아무것도 안 한 건데, 왜 하면 안 될 일일까요?" 카드를 나눈 뒤 하면 안 될 일 바구니를 함께 읽는다. "신고하면 그 친구가 벌받는 거 아니에요?"라는 학생에게 "신고는 벌주기가 아니라 위험한 글이 퍼지지 않게 하고 도움이 닿게 하는 일이에요"라고 말해 준다. 앱마다 신고 메뉴 이름이 다르니 우리 반이 쓰는 앱의 신고 메뉴를 함께 찾아본다.',
          task: 'SNS에서 걱정되는 글을 봤을 때의 대응 카드를 해도 될 일과 하면 안 될 일 바구니에 나누고, 그 까닭을 이어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BOARD('온라인 대응 카드를 두 바구니에 나누세요.', DO2, DOS),
              BOARD('대응 카드 4장을 두 바구니에 나누세요.', DO2, pickCards(DOS, ['g1', 'g2', 'n1', 'n2']))),
            IT(BOARD('생명을 위협하는 게시물을 보았을 때 할 일과 하지 않을 일로 나누세요.', ['할 일', '하지 않을 일'], [
              { id: 'p1', text: '더 보지 않고 화면을 닫기', to: '할 일' }, { id: 'p2', text: '앱에서 신고하기', to: '할 일' },
              { id: 'p3', text: '보고 힘들면 어른과 이야기하기', to: '할 일' }, { id: 'p4', text: '내용을 친구에게 옮겨 보내기', to: '하지 않을 일' },
              { id: 'p5', text: '비슷한 글을 더 찾아보기', to: '하지 않을 일' }])),
            IT(BOARD('하면 안 될 일마다 해로운 까닭 카드를 넣으세요(바구니 이름이 하면 안 될 일이에요).', ['캡처해 퍼뜨리기', '조롱 댓글 달기', '못 본 척하기'], [
              { id: 'y1', text: '친구의 힘든 마음이 소문이 되어 퍼진다', to: '캡처해 퍼뜨리기' }, { id: 'y2', text: '도움을 청하려던 친구가 입을 닫는다', to: '조롱 댓글 달기' },
              { id: 'y3', text: '도움이 필요한 순간이 지나간다', to: '못 본 척하기' }, { id: 'y4', text: '신고 기능이 늦게 작동한다' }]),
              null, null, { conclude: '걱정되는 글은 퍼뜨리지 않고, 조롱하지 않고, 넘기지 않아요. 안부를 묻고, 어른에게 알리고, 위험한 글은 보지 않고 신고해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반이 쓰는 앱에서 신고 기능이 있는 곳(메뉴 이름)을 찾아 써요.' }] },
        notes: '앱마다 신고 메뉴 이름이 달라 활동지에서 함께 찾는다(사람 확인). ' + SAFE_NOTE,
      }),
      M('activity.reply', {
        title: '걱정되는 친구에게 안부 메시지', method: '안부 메시지 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '안부 메시지 1줄(직접 안부)을 쓰고 기준 2개를 점검한다.', base: '안부 메시지 3줄을 쓰고 기준 4개(판단 없음·직접 안부·만나서 이야기·어른 연결)를 점검한다.', challenge: '셋째 문항에서 답이 없을 때 다음 행동까지 쓴다.' },
        activity: {
          title: '걱정되는 친구에게 안부 메시지', tool: 'rubric-writing',
          teacher: '"\'너 왜 그런 글 올려?\'와 \'요즘 글 보니 걱정돼. 내일 같이 점심 먹을래?\', 받는 친구는 어느 쪽에 답하고 싶을까요?" 두 메시지를 견준 뒤 3줄 메시지를 쓰게 한다. "메시지로만 하면 되잖아요"라는 학생에게 "메시지는 시작이에요. 만나서 이야기하고, 걱정되면 어른에게 알리는 것까지가 안부예요"라고 말해 준다. 메시지는 가상 친구에게 쓰고 걷지 않는다.',
          task: '어두운 글을 올린 가상 친구 채원에게 보낼 안부 메시지를 쓰고, 기준(판단 없음·직접 안부·만나서 이야기·어른 연결)으로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '채원에게 보낼 3줄 안부 메시지를 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"아무도 내 맘 몰라"라는 글을 올린 가상 친구 채원에게 보낼 안부 메시지를 3줄로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 4, title: '안부 메시지' }, target: { selfCheck: ['판단하는 말이 없다', '걱정된다고 직접 안부를 물었다', '만나서 이야기하자고 했다', '어른과 함께할 수 있다고 말했다'] } },
              { prompt: '채원에게 보낼 안부 메시지 1줄을 쓰고 기준표에 표시하세요.', toolOptions: { minChars: 10, minSentences: 1, starter: '네 글 보고 ___. 괜찮아?' }, target: { selfCheck: ['판단하는 말이 없다', '걱정된다고 직접 안부를 물었다'] } }),
            IT({ prompt: '"너 왜 그런 글 올려? 관심받고 싶어?"를 판단 없는 메시지로 고쳐 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"너 왜 그런 글 올려? 관심받고 싶어?"를 판단 없는 안부 메시지로 고쳐 쓰세요.', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '판단 없는 메시지로' }, target: { selfCheck: ['관심받으려 한다고 몰아가지 않았다', '걱정하는 마음을 전했다'] } }),
            IT({ prompt: '안부 메시지에 한 시간째 답이 없어요. 내가 할 다음 행동을 두 문장으로 쓰고 기준표에 표시하세요.', toolOptions: { topic: '안부 메시지에 답이 없을 때 내가 할 다음 행동을 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '답이 없을 때' }, target: { selfCheck: ['기다리지 않고 어른에게 알린다고 썼다', '메시지를 퍼뜨리지 않는다고 썼다'], mustInclude: [['보호자', '선생님', '어른']] } },
              null, null, { conclude: '안부 메시지는 판단 없이, 걱정된다고 직접 묻고, 만나서 이야기하자고 해요. 답이 없으면 기다리지 말고 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 안부 메시지에서 만나서 이야기하자고 한 줄을 옮겨 써요.' }] },
        notes: '메시지는 가상 친구에게 쓴다. 걷거나 발표하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.flow', {
        title: '신고·알림 차례 세우기', method: '신고·알림 절차 차례', tool: 'kitchen', minutes: 15,
        levels: { easy: '대응 차례 카드 3장(안부·어른 알리기·신고)을 놓는다.', base: '대응 차례 카드 4장을 놓고, 어른에게 알릴 때 전할 것을 점검표에서 고른다.', challenge: '셋째 문항에서 안부 묻기를 건너뛰고 바로 어른에게 알려야 할 상황을 고른다.' },
        activity: {
          title: '신고·알림 차례 세우기', tool: 'kitchen',
          teacher: '"걱정되는 글을 봤을 때, 안부 묻기와 어른에게 알리기 가운데 무엇이 먼저일까요?" 차례 카드를 놓은 뒤 늘 이 차례대로만 하는 것은 아니라는 점을 짚는다. "신고까지 하는 건 너무 커요"라는 학생에게 "신고는 위험한 글이 퍼지지 않게 막는 일이에요. 친구를 벌주는 게 아니에요"라고 말해 준다. 급할 때 쓸 지역 상담 번호는 학교가 확인해 알려 준다.',
          task: 'SNS에서 걱정되는 신호를 보았을 때의 대응 차례를 놓고, 어른에게 알릴 때 전할 것을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('걱정되는 글을 보았을 때의 대응 차례를 놓으세요.', FLOW, {}, [{ id: 'fx', text: '캡처해 단톡방에 공유' }]),
              OB('대응 차례 카드 3장을 놓으세요.', FLOW.slice(0, 3))),
            IT(CL('어른에게 알릴 때 전할 것만 표시하세요.', '어른에게 전할 것', [
              { id: 'c1', text: '언제 본 글인지', ok: true }, { id: 'c2', text: '어느 앱의 누구 글인지', ok: true },
              { id: 'c3', text: '내가 이미 한 일(안부·신고)', ok: true }, { id: 'c4', text: '글을 반 친구들에게 돌린 결과' }, { id: 'c5', text: '글 내용을 따라 검색한 것' }])),
            IT(PB('안부 묻기를 건너뛰고 바로 어른에게 알려야 할 상황만 골라 담으세요.', '바로 어른에게', [
              { id: 'u1', text: '작별 인사 같은 글을 올렸을 때', ok: true }, { id: 'u2', text: '안부에 답이 없고 연락이 끊겼을 때', ok: true },
              { id: 'u3', text: '"오늘 좀 피곤"이라는 글을 올렸을 때' }, { id: 'u4', text: '생명을 위협하는 글로 보일 때', ok: true }]),
              null, null, { conclude: '안부를 묻고, 어른에게 알리고, 신고하고, 급하면 지역 상담 번호로 연락해요. 위험이 커 보이면 차례를 건너뛰고 바로 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '걱정되는 글을 보았을 때의 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: `안부 묻기, 보호자·선생님께 알리기, 앱에서 신고하기, 급하면 ${NUM}` } ] },
        notes: `${NUM}는 교사가 확인해 알려 준다. ` + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.campaign', {
        title: '"퍼뜨리지 말고 알리기" 카드뉴스', method: '"퍼뜨리지 말고 알리기" 캠페인', tool: 'collage', minutes: 7,
        levels: { easy: '보기 문구 하나를 고르고 조각 3개 이상으로 카드뉴스 바탕을 꾸민다.', base: '문구를 직접 쓰고(활동지) 조각 5개 이상으로 꾸며 점검한다.', challenge: '대응 3단계(안부·알리기·신고)를 활동지 문구에 넣고 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"친구들이 SNS에서 걱정되는 글을 봤을 때 떠올릴 한 장짜리 카드뉴스를 만든다면 무엇을 넣을까요?" 문구는 활동지에 쓰고 조각으로 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 위험한 글의 내용이나 그림은 넣지 않고, 할 행동과 도움 경로만 담게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14, shapes: ['circle', 'square', 'rect', 'heart', 'star', 'diamond'] }, prompt: '"퍼뜨리지 말고 알리기" 카드뉴스 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '위험한 글 내용을 넣지 않았다', '문구를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.15 },
              { prompt: '조각 3개 이상으로 카드뉴스 바탕을 꾸미고 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '보기 문구 하나를 골랐다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고, 대응 3단계까지 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '위험한 글 내용을 넣지 않았다', '문구를 활동지에 썼다', '대응 3단계를 넣었다'], minPieces: 5 } }),
            { type: 'choice', prompt: '"퍼뜨리지 말고 알리기" 카드뉴스 문구로 가장 알맞은 것은?', options: ['"걱정되는 글을 보면 캡처 말고 어른께 보여 주세요"', '"이런 글 올리는 사람 조심!"', '"위험한 게시물 모음"'], answer: 0, difficulty: 0.15, explain: '퍼뜨리지 않고 어른에게 알리는 행동을 담아요.' },
          ],
        },
        worksheet: {
          title: '"퍼뜨리지 말고 알리기" 카드뉴스',
          items: [
            { type: 'short', prompt: '카드뉴스에 넣을 문구를 한 줄로 써요.' },
            { type: 'check', prompt: '카드뉴스에 넣을 대응을 표시해요.', options: ['안부 묻기', '어른에게 알리기', '앱에서 신고하기'] },
          ],
          easy: { note: '보기 문구를 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 문구 하나를 골라요.', options: ['캡처 말고 어른께 보여 주세요', '보면 묻고, 알리고, 신고해요', '퍼뜨리면 상처, 알리면 도움'], answer: '캡처 말고 어른께 보여 주세요' }] },
        },
        notes: '교구는 글자를 넣지 못해 카드뉴스 바탕만 꾸미고 문구는 활동지에 쓰게 했다. 위험한 글의 내용·그림을 넣지 않는다. ' + SAFE_NOTE,
      }),
      M('wrap.reflect', {
        title: '나의 온라인 약속 고르기', method: '나의 온라인 약속', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 하나에서 할 행동을 고르고 결과를 본다.', base: '장면 두 개에서 할 행동을 고르고 어른과 함께 대응하는 결과를 본다.', challenge: '셋째 질문에서 나의 온라인 약속 문장을 고른다.' },
        wrap: {
          teacher: '"오늘 배운 것을 한 문장 약속으로 만든다면?" 두 장면을 함께 읽고 고른 뒤 결과 글을 소리 내어 읽는다. "온라인 글은 진심이 아니니 넘겨도 된다"는 말이 나오면 "진심인지는 어른과 함께 확인해요. 넘기는 것보다 알리는 것이 안전해요"라고 말해 준다. 오늘 수업으로 마음이 불편해진 학생은 언제든 상담 선생님을 찾아오라고 말해 둔다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '나', situation: '친구의 게시물에 "이제 다 끝났으면 좋겠다"라는 글이 올라왔다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
              { id: 'pass', text: '진심 아닐 거라며 넘긴다', result: '친구 곁에 아무도 다가가지 않는다.', why: '온라인 글도 진심일 수 있어요.' },
              { id: 'adult', text: '안부를 묻고 보호자·선생님께 알린다', result: '어른과 함께 친구를 살피게 된다.' },
              { id: 'cap', text: '캡처해서 친구들에게 묻는다', result: '글이 퍼져 친구가 상처받는다.', why: '캡처는 퍼뜨리지 않아요.' }] },
              prompt: '친구의 게시물을 보았을 때 할 행동을 골라요.', target: { choice: 'adult' }, difficulty: 0.15 }),
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '나', situation: '단톡방에 모르는 사람의 위험해 보이는 게시물 링크가 올라왔다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'open', text: '궁금해서 눌러 본다', result: '보고 나서 마음이 불편해진다.', why: '위험해 보이는 링크는 열지 않아요.' },
              { id: 'report', text: '열지 않고 신고하고 선생님께 알린다', result: '어른과 함께 대응하고 링크가 지워진다.' }] },
              prompt: '위험해 보이는 링크를 보았을 때 할 행동을 골라요.', target: { choice: 'report' }, difficulty: 0.2 },
            { type: 'choice', prompt: '나의 온라인 약속으로 가장 알맞은 문장은?', options: ['"나는 걱정되는 글을 보면 퍼뜨리지 않고 어른께 알린다"', '"나는 SNS를 아예 하지 않는다"', '"나는 위험한 글을 모아 둔다"'], answer: 0, difficulty: 0.15, explain: '내일부터 지킬 수 있는 구체적인 행동이에요.' },
          ],
        },
        worksheet: {
          title: '나의 온라인 약속',
          items: [
            { type: 'short', prompt: '나의 온라인 약속을 한 문장으로 써요.' },
            { type: 'check', prompt: '걱정되는 글을 볼 때 할 일에 표시해요.', options: ['안부 묻기', '어른에게 알리기', '퍼뜨리지 않기', '신고하기'] },
          ],
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 9학년 · 생명지킴이, 어른에게 연결하기 (life.m.gatekeeper-connect) ====
  {
    const M = MK('gatekeeper-connect', [9]);
    const SCHOOL = { grid: [6, 4], title: '가상의 우리 중학교', places: [
      { name: '우리 반 교실(담임)', icon: 'school', at: [0, 0] }, { name: '상담실', icon: 'office', at: [3, 1] }, { name: '보건실', icon: 'hospital', at: [5, 0] },
      { name: '교무실', icon: 'post', at: [1, 2] }, { name: '도서관', icon: 'library', at: [4, 3] }, { name: '운동장', icon: 'park', at: [0, 3] }] };
    const WALK = ['친구에게 걱정을 말하기', '함께 상담실까지 걷기', '선생님께 친구를 소개하기', '끝날 때까지 기다리기'];
    const D1 = { text: '태린의 걱정되는 말을 담임 선생님께 알렸다. 다음 날 태린이 "네가 선생님한테 말했지? 믿었는데"라며 화를 낸다.', ask: '나는 어떻게 할까?', motif: 'storm', choices: [
      { id: 'withdraw', text: '"미안해, 선생님께 없던 일로 해 달라고 할게"', result: '태린은 잠깐 누그러지지만, 선생님은 그래도 살펴야 한다고 한다.', impact: [{ who: '태린', text: '도움이 끊길 뻔한다', tone: -1 }], why: '알린 것은 잘한 일이에요. 거두지 말고 까닭을 말해요.', end: '알린 것을 거두려 했어요.',
        next: { text: '선생님이 "태린을 살피는 건 계속할게. 너는 곁에 있어 주렴"이라고 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'avoid', text: '태린이 또 화낼까 봐 피해 다닌다', result: '태린은 친구마저 떠났다고 느낀다.', impact: [{ who: '태린', text: '외로움이 커진다', tone: -1 }], why: '연결한 뒤에도 곁에 머물러요.' },
          { id: 'back', text: '"아까는 미안. 사실 네가 걱정돼서 말한 거야"라고 다시 말한다', result: '태린이 조용히 이야기를 듣는다.', impact: [{ who: '태린', text: '아끼는 마음을 안다', tone: 1 }], why: '다시 까닭을 말한 것은 잘했어요. 처음부터 거두지 않았다면 더 좋았어요.' }] } },
      { id: 'explain', text: '"응, 내가 말했어. 네가 너무 소중해서 그랬어. 계속 곁에 있을게"', result: '태린이 "그래도 서운해"라며 고개를 돌린다.', impact: [{ who: '태린', text: '알린 까닭을 듣는다', tone: 1 }], end: '까닭을 말하고 곁에 있겠다고 했어요.',
        next: { text: '태린이 며칠째 짧게만 대답한다.', ask: '어떻게 할까?', choices: [
          { id: 'patient', text: '"서운한 거 이해해" 하고, 매일 짧게 안부를 묻는다', result: '태린의 대답이 조금씩 길어진다.', impact: [{ who: '태린', text: '꾸준한 관심을 느낀다', tone: 1 }], end: '서운함을 인정하고 꾸준히 안부를 물었어요.',
            next: { text: '일주일 뒤 태린이 "상담 선생님이랑 얘기해 보니 좀 낫더라"고 먼저 말을 건다.', ask: '어떻게 답할까?', choices: [
              { id: 'welcome', text: '"말해 줘서 고마워. 힘들면 또 같이 가자"', result: '태린이 웃으며 점심을 같이 먹자고 한다.', impact: [{ who: '태린', text: '관계가 다시 이어진다', tone: 1 }] },
              { id: 'grudge', text: '"그러니까 내 말이 맞았지?"라고 한다', result: '태린이 다시 입을 다문다.', impact: [{ who: '태린', text: '마음이 다시 닫힌다', tone: -1 }], why: '옳고 그름을 따지기보다 곁에 있는 마음을 전해요.' }] } },
          { id: 'give', text: '"나도 몰라, 네가 알아서 해"라며 손을 뗀다', result: '태린 곁에 친구가 사라진다.', impact: [{ who: '태린', text: '혼자라고 느낀다', tone: -1 }], why: '서운해해도 지속적인 관심이 힘이 돼요.' }] } },
      { id: 'cut', text: '태린과 연락을 끊는다', result: '태린은 믿었던 친구까지 잃었다고 느낀다.', impact: [{ who: '태린', text: '외로움이 커진다', tone: -1 }], why: '연결한 뒤 떠나면 친구는 더 힘들어져요.', ending: '연락을 끊어 태린이 더 혼자가 됐어요.' }] };
    const R1 = [{ id: 'r1', text: '알린 것은 친구를 지킨 일이라 거두지 않는다' }, { id: 'r2', text: '어른에게 알린 뒤에도 곁에 머물며 안부를 묻는다' },
      { id: 'r3', text: '어른에게 알리면 내 역할은 끝이다', why: '연결한 뒤에도 친구 곁에 머무는 것이 생명지킴이의 몫이에요.' }, { id: 'r4', text: '친구가 화내면 알린 것을 사과해야 한다', why: '서운함은 인정하되, 알린 것은 잘한 일이에요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.review', {
        title: '보고·듣고, 그다음은?', method: '보고·듣고·말하기 되짚기', tool: 'emotion', minutes: 6,
        levels: { easy: '보기·듣기 두 단계가 끝난 장면에서 다음 단계를 고른다.', base: '세 단계 가운데 빠진 단계를 찾고 결과 장면을 본다.', challenge: '각 단계에서 흔한 실수(훈계·혼자 해결)를 고쳐 말한다.' },
        intro: {
          teacher: '"지난해 배운 생명지킴이 3단계, 보기·듣기·말하기 가운데 이 장면에 빠진 단계는 무엇일까요?" 장면을 읽고 시연 단추로 \'선생님께 같이 가자\'가 골라지는 모습과 결과 글을 보인다. "끝까지 들어 줬으면 된 거 아니에요?"라는 말이 나오면 "들어 준 것은 큰일이에요. 하지만 생명과 관련된 걱정이라면 어른·전문가와 이어야 친구가 안전해요"라고 짚는다. 오늘은 어른에게 잇는 대화와, 이은 뒤에도 곁에 머무는 법을 연습한다고 밝힌다.',
          student: '친구의 신호를 알아차리고 이야기를 끝까지 들은 가상 장면을 읽고, 빠진 다음 단계를 골라요.',
          demo: { tool: 'emotion', options: { mode: 'branch', who: '나', situation: '나는 태린의 달라진 모습을 알아차렸고(보기), 판단 없이 이야기를 끝까지 들었다(듣기).', ask: '그다음 할 일은?', motif: 'cloud', choices: [
            { id: 'done', text: '들어 줬으니 이제 끝', result: '태린의 걱정을 아는 어른이 없다.' },
            { id: 'connect', text: '"선생님께 같이 가자"고 말한다', result: '태린이 어른과 이어진다.' },
            { id: 'solve', text: '내가 해결책을 정해 준다', result: '태린은 혼자 그 해결책을 떠안는다.' }] }, sequence: [{ choice: 'connect' }] },
          art: { draw: 'a paper-cut chain of three paper rings labeled with eye, ear and mouth icons, the third ring linking to an adult figure', banner: '빠진 고리는 무엇일까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.story', {
        title: '연결한 뒤 태린 곁에서', method: '연결한 뒤의 이야기', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장을 차례로 놓는다.', base: '장면 4장을 차례로 놓는다.', challenge: '연결 뒤에 하지 말아야 할 행동(소문내기·피하기)을 말해 본다.' },
        intro: {
          teacher: '"친구를 상담 선생님께 데려갔어요. 그다음 날, 나는 무엇을 할 수 있을까요?" 가상 장면 카드를 섞어 보인 뒤 시연 단추로 차례대로 놓이는 모습을 보인다. "어른한테 알리면 내 역할은 끝이에요"라는 말에는 "상담 선생님은 전문가로, 나는 친구로 곁에 있어요. 둘 다 필요해요"라고 말해 준다. 연결 뒤에 소문을 내거나 피하는 것은 하지 않는다는 점을 짚는다.',
          student: '친구를 상담 선생님께 이은 뒤의 가상 장면을 차례대로 놓아요. 연결 뒤에도 친구로서 할 수 있는 일을 생각해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '연결한 뒤의 며칠', cards: [
            { id: 'c1', text: '태린과 함께 상담실에 간다', motif: 'house' }, { id: 'c2', text: '상담이 끝날 때까지 밖에서 기다린다', motif: 'leaf' },
            { id: 'c3', text: '다음 날 점심을 같이 먹는다', motif: 'flower' }, { id: 'c4', text: '며칠 뒤 "요즘 어때?" 안부를 묻는다', motif: 'star' }] }, sequence: [{ order: ['c1', 'c2', 'c3', 'c4'] }] },
          art: { draw: 'a paper-cut school corridor where one student waits on a bench outside a counseling room door, then two students share lunch at a table', banner: '연결한 뒤에도 곁에', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.roleplay', {
        title: '"친구가 걱정돼요" 알리는 대본', method: '어른에게 알리는 대화 대본', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '대본 3줄(관찰한 사실·시점·요청)을 쓰고 기준 3개를 점검한다.', base: '대본 5줄을 쓰고 기준 4개(관찰한 사실·시점·내가 한 일·요청)를 점검한다.', challenge: '셋째 문항에서 선생님의 질문("언제부터 그랬니?")에 답하는 줄까지 쓴다.' },
        activity: {
          title: '"친구가 걱정돼요" 알리는 대본', tool: 'rubric-writing',
          teacher: '"선생님께 \'걔 좀 이상해요\'라고 하면, 선생님은 무엇을 알 수 있을까요?" 막연한 말과 본 것·들은 것·시점을 담은 말을 견준 뒤 대본을 쓰게 한다. "고자질 같아서 말하기 싫어요"라는 학생에게 "고자질은 혼나게 하려는 것이고, 알리는 건 친구를 지키려는 거예요"라고 말해 준다. 대본은 가상 친구 태린에 대해 쓰고, 실제 친구 이름은 쓰지 않는다.',
          task: '가상 친구 태린이 걱정되는 상황을 담임 선생님께 전하는 대본을 쓰고, 기준(관찰한 사실·시점·내가 한 일·요청)으로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '태린이 걱정되는 상황을 선생님께 전하는 5줄 대본을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '요즘 "다 의미 없다"며 동아리도 그만둔 가상 친구 태린이 걱정되는 상황을 담임 선생님께 전하는 대본을 5줄로 쓰세요.', minChars: 60, maxChars: 300, minSentences: 5, maxSentences: 6, title: '어른에게 알리는 대본' }, target: { selfCheck: ['본 것·들은 것을 그대로 썼다', '언제부터인지 썼다', '내가 이미 한 일을 썼다', '선생님께 바라는 것을 썼다'] } },
              { prompt: '태린이 걱정되는 상황을 선생님께 전하는 3줄 대본을 쓰고 기준표에 표시하세요.', toolOptions: { minChars: 30, minSentences: 3, maxSentences: 4, starter: '선생님, 태린이 요즘 ___. ___부터 그랬어요. ___ 도와주세요.' }, target: { selfCheck: ['본 것·들은 것을 그대로 썼다', '언제부터인지 썼다', '선생님께 바라는 것을 썼다'] } }),
            IT({ prompt: '"걔 좀 이상해요"를 본 것과 시점이 담긴 말로 고쳐 쓰고 기준표에 표시하세요.', toolOptions: { topic: '"걔 좀 이상해요"를 본 것과 시점이 담긴 말로 고쳐 쓰세요.', minChars: 20, maxChars: 140, minSentences: 1, maxSentences: 2, title: '막연한 말 고치기' }, target: { selfCheck: ['판단하는 낱말을 뺐다', '본 행동과 시점을 넣었다'] } }),
            IT({ prompt: '선생님이 "언제부터 그랬니? 너는 뭘 했니?"라고 물어요. 답하는 두 줄을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '선생님의 질문("언제부터 그랬니? 너는 뭘 했니?")에 답하는 두 줄을 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '선생님 질문에 답하기' }, target: { selfCheck: ['시점을 답했다', '내가 한 일(묻기·듣기)을 답했다'] } },
              null, null, { conclude: '어른에게 알릴 때는 본 것·들은 것, 언제부터인지, 내가 한 일, 바라는 것을 말해요. 알리는 것은 고자질이 아니라 친구를 지키는 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '알리는 것과 고자질이 다른 점을 한 문장으로 써요.' }] },
        notes: '대본은 가상 친구에 대해 쓴다. 실제 친구 이름을 쓰지 않고 걷지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.dilemma', {
        title: '알린 걸 안 친구가 화를 낼 때', method: '친구가 화를 낸다면', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고 근거 카드를 한 장 이상 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 맞는 근거 두 장을 모두 고른다.' },
        activity: {
          title: '알린 걸 안 친구가 화를 낼 때', tool: 'dilemma',
          teacher: '"친구가 \'믿었는데\'라며 화를 내면, 알린 것을 후회해야 할까요?" 학생마다 한 길을 끝까지 가 본 뒤, 사과하며 거둔 길과 까닭을 말하고 곁에 있은 길을 견주게 한다. "친구를 잃으면 어떡해요"라는 학생에게 "친구의 서운함은 시간이 지나며 풀릴 수 있어요. 곁에 있겠다는 말과 꾸준한 안부가 관계를 지켜요"라고 말해 준다. 어른에게 알리면 끝이 아니라 동행의 시작이라는 점을 짚는다.',
          task: '어른에게 알린 사실을 안 가상 친구 태린이 화를 내는 갈림길에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '태린이 알린 것을 알고 화를 내요. 첫 갈림길에서 골라 결과를 보세요.', base: '태린이 알린 것을 알고 화를 내요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 맞는 근거 두 장을 모두 고르세요.' },
              '친구가 화를 낸다면', D1, [['explain', 'patient', 'welcome']], R1, ['r1', 'r2']),
            IT({ prompt: '다른 친구가 "너 때문에 태린이 상담실 다닌대"라고 해요. 다음 선택을 따라가세요.', toolOptions: { title: '탓하는 말 앞에서', scene: { text: '반 친구가 "너 때문에 태린이 상담실 불려 다닌대"라고 말한다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'deny', text: '"난 아무 말도 안 했어"라고 둘러댄다', result: '나중에 거짓말이 드러나 태린도 나도 더 곤란해진다.', impact: [{ who: '태린', text: '믿음이 흔들린다', tone: -1 }], why: '알린 것을 숨길 필요는 없어요. 다만 자세한 사정은 말하지 않아요.' },
              { id: 'calm', text: '"태린 일은 태린과 선생님이 알아서 할 일이야"라고 짧게 답한다', result: '친구가 더 캐묻지 않는다.', impact: [{ who: '태린', text: '이야기가 지켜진다', tone: 1 }], ending: '자세한 사정은 지키며 짧게 답했어요.' }] }, reasons: [{ id: 'q1', text: '친구의 사정은 다른 친구들에게 말하지 않는다' }, { id: 'q2', text: '궁금해하면 자세히 설명해 주는 게 낫다', why: '자세한 사정이 퍼지면 친구가 상처받아요.' }], compare: true },
              target: { path: [['calm']], reasons: ['q1'] } }),
            IT({ prompt: '태린을 돕다가 나도 많이 지쳤어요. 다음 선택을 따라가세요.', toolOptions: { title: '돕는 나도 지칠 때', scene: { text: '태린을 챙기느라 몇 주째 잠이 줄고 나도 마음이 무겁다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
              { id: 'endure', text: '친구를 위해 끝까지 혼자 견딘다', result: '나도 점점 지쳐 태린 곁에 있기 힘들어진다.', impact: [{ who: '나', text: '지쳐 간다', tone: -1 }], why: '돕는 사람도 돌봄이 필요해요.' },
              { id: 'share', text: '상담 선생님께 내 마음도 이야기한다', result: '선생님이 내가 할 몫과 어른이 할 몫을 함께 나눠 준다.', impact: [{ who: '나', text: '마음이 가벼워진다', tone: 1 }], ending: '돕는 나도 어른에게 도움을 청했어요.' }] }, reasons: [{ id: 'p1', text: '돕는 나도 어른과 이야기하면 오래 곁에 있을 수 있다' }, { id: 'p2', text: '내가 지친 건 참아야 한다', why: '내가 지치지 않아야 친구 곁에 오래 있을 수 있어요.' }], compare: true },
              target: { path: [['share']], reasons: ['p1'] }, conclude: '알린 것은 거두지 않아요. 까닭을 솔직히 말하고, 사정은 지켜 주고, 꾸준히 곁에 머물러요. 돕는 나도 어른에게 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '어른에게 알린 걸 안 친구가 화를 낼 때 가장 알맞은 말은?', options: ['"미안, 없던 일로 할게"', '"네가 소중해서 그랬어. 계속 곁에 있을게"', '"그럼 이제 연락하지 마"'], answer: '"네가 소중해서 그랬어. 계속 곁에 있을게"' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.resource', {
        title: '학교 안 연결 경로 지도', method: '학교 안 연결 경로 지도', tool: 'map', minutes: 15,
        levels: { easy: '이름이 보이는 지도에서 두 곳(상담실·교무실)을 찾는다.', base: '이름을 숨긴 지도에서 시간대별(쉬는 시간·수업 중·방과 후) 연결할 곳 네 곳을 찾고 알맞은 방법을 고른다.', challenge: '넷째 문항에서 방학 중 연결 경로를 고른다.' },
        activity: {
          title: '학교 안 연결 경로 지도', tool: 'map',
          teacher: '"친구가 걱정될 때, 수업 중이라면 누구에게 가장 빨리 알릴 수 있을까요?" 시간대마다 지도에서 연결할 곳을 짚고, 그곳에서 무엇을 말할지 함께 말한다. "상담 선생님이 안 계시면 끝이에요?"라는 학생에게 "그럴 땐 교무실의 다른 선생님, 담임 선생님, 보호자 순서로 다음 고리로 가요"라고 말해 준다. 지도는 가상 학교이고, 우리 학교 상담실 위치와 운영 시간은 따로 알려 준다.',
          task: '가상 학교 칸 지도에서 시간대(쉬는 시간·수업 중·방과 후)마다 걱정되는 친구를 연결할 곳을 찾고, 알맞은 방법을 골라요.',
          levels: { easy: { names: true, readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            PIN('쉬는 시간에 친구가 걱정될 때 함께 찾아갈 곳에 핀을 꽂고 알맞은 방법을 고르세요.', Object.assign({}, SCHOOL, { ask: { q: '이곳에서 할 일은?', choices: ['친구와 함께 들어가 걱정을 말한다', '친구 몰래 문 앞에 쪽지만 둔다', '다른 친구들에게 먼저 알린다'] } }), { place: '상담실', pick: 0 }),
            PIN('수업 중에 걱정되는 일이 생겼을 때 먼저 알릴 곳에 핀을 꽂고 방법을 고르세요.', Object.assign({}, SCHOOL, { ask: { q: '수업 중이라면?', choices: ['수업하시는 선생님께 바로 조용히 말한다', '수업이 끝날 때까지 기다린다', '휴대폰으로 친구들에게 알린다'] } }), { place: '우리 반 교실(담임)', pick: 0 }),
            PIN('방과 후 상담실이 닫혔을 때 찾아갈 곳에 핀을 꽂으세요.', SCHOOL, { place: '교무실' }),
            IT(PIN('친구가 몸이 아프다며 엎드려 울 때 함께 갈 곳에 핀을 꽂으세요.', SCHOOL, { place: '보건실' }),
              null,
              { prompt: '방학 중 친구가 걱정될 때의 연결 경로를 고르세요(지도는 보기만 해요).', toolOptions: { readOnly: true, ask: { q: '방학 중 연결 경로로 알맞은 것은?', choices: ['보호자에게 알리고, 학교가 알려 준 지역 상담 번호로 함께 연락한다', '개학할 때까지 기다린다', 'SNS에 도움을 구하는 글을 올린다'] } }, target: { pick: 0 } },
              { conclude: '쉬는 시간엔 상담실, 수업 중엔 수업하시는 선생님, 방과 후엔 교무실, 방학엔 보호자와 지역 상담처로 이어요. 한 고리가 닫혀도 다음 고리가 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시간대별로 연결할 곳을 써요.', columns: ['때', '연결할 곳'], cells: [['쉬는 시간', ''], ['수업 중', ''], ['방과 후', ''], ['방학 중', '']], answer: `상담실, 수업하시는 선생님, 교무실, 보호자·${NUM}` }] },
        notes: `지도는 가상 학교다. 우리 학교 상담실 위치·운영 시간과 ${NUM}는 교사가 확인해 알려 준다. ` + SAFE_NOTE,
      }),
      M('activity.practice', {
        title: '3분 동행 연기와 관찰', method: '3분 동행 연습', tool: 'timer', minutes: 15,
        levels: { easy: '연결 장면을 한 번 연기하고 관찰자가 점검표 두 항목을 표시한다.', base: '모둠에서 역할을 바꿔 세 번 연기하고 관찰자가 점검표로 피드백한다.', challenge: '어려운 반응 카드(친구가 "혼자 갈게" 하고 돌아섬)를 뽑아 연기하고 점검한다.' },
        activity: {
          title: '3분 동행 연기와 관찰', tool: 'timer',
          teacher: '"\'선생님께 같이 가자\'고 말한 뒤, 실제로 함께 걸어가는 3분 동안 무슨 말을 할까요?" 모둠에서 친구 역·나 역·관찰자 역을 나눠 가상 대본으로 3분씩 연기하게 한다. 친구 역은 가상 인물 태린을 연기하며 자기 이야기를 하지 않는다고 미리 말한다. "말없이 걸으면 어색해요"라는 학생에게 "말이 없어도 곁에 있는 것만으로 충분해요. \'내가 같이 있을게\' 한마디면 돼요"라고 말해 준다. 끝나면 관찰자가 점검표로 피드백한다.',
          task: '모둠에서 역할을 나눠 걱정되는 가상 친구를 상담 선생님께 연결하는 장면을 3분씩 연기하고, 관찰자가 점검표로 피드백해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '연기 3분, 역할 바꾸기 30초로 세 번 하도록 타이머를 맞추세요.', toolOptions: { title: '동행 연기', labels: ['연기', '바꾸기'], plan: { work: 60, rest: 20, rounds: 1 } }, target: { plan: { work: 180, rest: 30, rounds: 3 } } },
              { prompt: '연기 3분을 한 번 하도록 타이머를 맞추세요.', target: { plan: { work: 180, rounds: 1 } } }),
            IT({ prompt: '연결 장면의 차례대로 카드를 놓으세요.', toolOptions: { title: '동행의 차례', cards: [WALK[2], WALK[0], WALK[3], WALK[1]] }, target: { order: WALK } }),
            IT({ prompt: '관찰자는 연기를 보고 점검표에 표시하세요.', toolOptions: { title: '관찰자 점검표' }, target: { selfCheck: ['걱정을 판단 없이 말했다', '함께 가자고 제안했다', '상담실까지 곁에 있었다'] } },
              { prompt: '관찰자는 연기를 보고 점검표 두 항목에 표시하세요.', target: { selfCheck: ['걱정을 판단 없이 말했다', '함께 가자고 제안했다'] } },
              { prompt: '어려운 반응 카드("혼자 갈게" 하고 돌아섬) 연기를 보고 점검표에 표시하세요.', target: { selfCheck: ['걱정을 판단 없이 말했다', '함께 가자고 제안했다', '상담실까지 곁에 있었다', '돌아서도 "같이 가고 싶어"라며 다시 권했다'] } },
              { conclude: '연결은 말 한마디로 끝나지 않아요. 걱정을 판단 없이 말하고, 함께 걷고, 끝날 때까지 곁에 있는 것이 동행이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '상담실까지 함께 걸어가며 친구에게 건넬 한마디를 써요.' }] },
        notes: '연기는 가상 대본으로만 한다. 학생 자신의 경험으로 역할을 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.pledge', {
        title: '우리 반 생명지킴이 서약', method: '생명지킴이 서약 글', tool: 'collage', minutes: 7,
        levels: { easy: '보기 서약 문구 하나를 고르고 조각 3개 이상으로 서약 포스터 바탕을 꾸민다.', base: '내가 할 행동 문구 세 개를 활동지에 쓰고 조각 5개 이상으로 꾸며 점검한다.', challenge: '모둠이 문구를 다듬어 하나로 모은 뒤 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"\'친구를 지키겠습니다\'와 \'걱정되는 친구가 있으면 혼자 두지 않고 어른에게 함께 가겠습니다\', 어느 서약이 행동이 될까요?" 서약 문구는 활동지에 쓰고 조각으로 학급 서약 포스터 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 서약은 강요하지 않고 쓰고 싶은 학생만 게시판에 붙인다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14, shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '생명지킴이 서약 포스터 바탕을 조각으로 꾸미고 점검해요(서약 문구는 활동지에 써요).', target: { selfCheck: ['서약 문구를 놓을 자리를 비워 두었다', '따뜻한 색을 골랐다', '서약 문구를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.15 },
              { prompt: '조각 3개 이상으로 서약 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['서약 문구를 놓을 자리를 비워 두었다', '보기 서약 하나를 골랐다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고, 모둠이 다듬은 서약까지 점검해요.', target: { selfCheck: ['서약 문구를 놓을 자리를 비워 두었다', '따뜻한 색을 골랐다', '서약 문구를 활동지에 썼다', '모둠이 문구를 함께 다듬었다'], minPieces: 5 } }),
            { type: 'choice', prompt: '생명지킴이 서약 문구로 가장 알맞은 것은?', options: ['"걱정되는 친구를 혼자 두지 않고 어른에게 함께 가겠습니다"', '"나는 친구의 모든 문제를 해결하겠습니다"', '"친구의 비밀은 무엇이든 지키겠습니다"'], answer: 0, difficulty: 0.15, explain: '혼자 해결하거나 생명과 관련된 비밀을 지키는 것이 아니라 어른에게 잇는 거예요.' },
          ],
        },
        worksheet: {
          title: '우리 반 생명지킴이 서약',
          items: [
            { type: 'short', prompt: '생명지킴이로서 내가 할 행동을 서약 문구로 써요(이름은 쓰지 않아요).' },
            { type: 'check', prompt: '내 서약 문구를 점검해요.', options: ['구체적인 행동이다', '어른에게 잇는 내용이 있다', '혼자 해결하겠다는 말이 없다'] },
          ],
          easy: { note: '보기 서약을 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 서약 하나를 골라요.', options: ['걱정되는 친구를 혼자 두지 않겠습니다', '생명과 관련된 비밀은 어른에게 잇겠습니다', '연결한 뒤에도 곁에 있겠습니다'], answer: '걱정되는 친구를 혼자 두지 않겠습니다' }] },
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 서약 문구는 활동지에 쓰게 했다. 서약은 강요하지 않는다. ' + SAFE_NOTE,
      }),
      M('wrap.care', {
        title: '친구를 도운 나를 돌보기', method: '돕는 나를 돌보기', tool: 'kitchen', minutes: 7,
        levels: { easy: '돌봄 점검표에서 두 항목(감정 알아차리기·쉬기)을 표시한다(교사가 읽어 준다).', base: '돌봄 점검표 네 항목을 고르고 함정을 거른다.', challenge: '셋째 질문에서 내가 지칠 때의 신호를 고른다.' },
        wrap: {
          teacher: '"친구 곁에 머무는 동안 내 마음은 어떻게 돌볼까요?" 점검표를 고르게 한 뒤, 내가 지쳐 간다는 신호(잠이 줄고 짜증이 늘어남)를 알아차리면 상담 선생님께 내 이야기도 하자고 말해 준다. "친구가 힘든데 내 얘기를 하면 이기적이에요"라는 학생에게 "돕는 사람이 쉬어야 오래 도울 수 있어요. 그건 이기적인 게 아니라 필요한 일이에요"라고 짚는다.',
          exitTicket: [
            IT(X('kitchen', CL('친구 곁에 머무는 동안 나를 돌보는 일만 표시해요.', '도운 뒤 나를 돌보기', [
              { id: 'k1', text: '내 감정을 알아차리고 이름 붙이기', ok: true }, { id: 'k2', text: '잠·식사를 평소대로 지키기', ok: true },
              { id: 'k3', text: '어른과 내 마음 이야기하기', ok: true }, { id: 'k4', text: '좋아하는 일로 쉬는 시간 갖기', ok: true },
              { id: 'k5', text: '친구 일을 혼자 계속 곱씹기' }, { id: 'k6', text: '힘든 티를 내지 않으려 참기' }]), { difficulty: 0.15 }),
              CL('나를 돌보는 일 두 가지만 표시해요.', '도운 뒤 나를 돌보기', [
                { id: 'k1', text: '내 감정을 알아차리고 이름 붙이기', ok: true }, { id: 'k4', text: '좋아하는 일로 쉬는 시간 갖기', ok: true }, { id: 'k5', text: '친구 일을 혼자 계속 곱씹기' }])),
            { type: 'choice', prompt: '"어른에게 알리면 내 역할은 끝이다"라는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 그다음은 몰라도 된다', '어른은 전문가로, 나는 친구로 곁에 머문다', '알린 뒤에는 친구를 피해야 한다'], answer: 1, difficulty: 0.15, explain: '연결한 뒤에도 친구로서 곁에 있는 것이 동행이에요.' },
            { type: 'choice', prompt: '친구를 도우며 내가 지쳐 간다는 신호로 알맞은 것은?', options: ['친구 걱정에 잠이 줄고 짜증이 는다', '친구와 점심을 같이 먹는다', '숙제를 제때 한다'], answer: 0, difficulty: 0.2, explain: '이런 신호가 보이면 상담 선생님께 내 마음도 이야기해요.' },
          ],
        },
        worksheet: {
          title: '돕는 나를 돌보기',
          items: [
            { type: 'check', prompt: '혼자 보기 칸: 내가 지칠 때 해 볼 돌봄에 표시해요(걷지 않아요).', options: ['감정에 이름 붙이기', '잠·식사 지키기', '어른과 이야기하기', '좋아하는 일로 쉬기'] },
            { type: 'short', prompt: '연결한 뒤에도 친구 곁에 머무는 방법 하나를 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 9학년 · 회복탄력성과 보호 요인 (life.m.resilience) ====
  {
    const M = MK('resilience', [9]);
    const BAL = [['위험 요인', 7], ['보호 요인', 4]];
    const WEB5 = ['관계', '강점', '건강 습관', '의미', '도움 자원'];
    const PROT = [
      { id: 'r1', text: '힘들 때 연락할 친구', to: '관계' }, { id: 'r2', text: '나를 믿어 주는 가족', to: '관계' },
      { id: 's1', text: '포기하지 않고 연습하는 끈기', to: '강점' }, { id: 's2', text: '잘 웃고 먼저 인사하는 성격', to: '강점' },
      { id: 'h1', text: '정해진 시간에 잠자기', to: '건강 습관' }, { id: 'h2', text: '일주일에 세 번 운동', to: '건강 습관' },
      { id: 'm1', text: '봉사 동아리에서 느끼는 보람', to: '의미' }, { id: 'm2', text: '이루고 싶은 꿈', to: '의미' },
      { id: 'a1', text: '상담 선생님', to: '도움 자원' }, { id: 'a2', text: '지역 청소년 시설 프로그램', to: '도움 자원' },
    ];
    const D1 = { text: '하람은 진학 상담에서 "지금 성적으로는 원하는 학교가 어려울 수 있다"는 말을 들었다. 집에 오는 길 내내 머리가 하얗다.', ask: '하람은 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'quit', text: '"난 안 돼" 하고 진로 생각을 모두 접는다', result: '며칠 동안 아무것도 하기 싫어진다.', impact: [{ who: '하람', text: '마음이 더 무거워진다', tone: -1 }], why: '한 번의 말로 모든 길이 닫히지는 않아요.', end: '모두 포기했어요.',
        next: { text: '일주일 뒤 친구가 "요즘 왜 그래?"라고 묻는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'hide', text: '"아무것도 아니야"라며 혼자 삭인다', result: '하람의 걱정을 아는 사람이 없다.', impact: [{ who: '하람', text: '혼자 견딘다', tone: -1 }], why: '털어놓으면 보호 요인(관계)이 힘을 써요.' },
          { id: 'open', text: '친구에게 상담에서 들은 말을 털어놓는다', result: '친구가 "같이 다른 길도 알아보자"고 한다.', impact: [{ who: '하람', text: '다시 움직일 힘이 생긴다', tone: 1 }], why: '털어놓은 것은 잘했어요. 처음부터 길을 찾았다면 더 빨랐어요.' }] } },
      { id: 'info', text: '집에서 원하는 학교와 비슷한 다른 학교 정보를 찾아본다', result: '생각보다 여러 길이 있다는 것을 안다.', impact: [{ who: '하람', text: '선택지가 넓어진다', tone: 1 }], end: '다른 길의 정보를 찾았어요.',
        next: { text: '정보가 너무 많아 무엇이 맞는지 헷갈린다.', ask: '어떻게 할까?', choices: [
          { id: 'teacher', text: '진로 선생님께 찾은 정보를 들고 가서 함께 살핀다', result: '선생님과 내 강점에 맞는 길 두세 개로 좁힌다.', impact: [{ who: '하람', text: '할 일이 분명해진다', tone: 1 }], end: '선생님과 함께 정보를 살폈어요.',
            next: { text: '남은 시간에 성적도 조금 올려 보고 싶다.', ask: '어떻게 할까?', choices: [
              { id: 'plan', text: '한 과목씩 작은 목표를 세우고 잠은 지킨다', result: '조금씩 나아지며 자신감이 붙는다.', impact: [{ who: '하람', text: '할 수 있다는 느낌이 생긴다', tone: 1 }] },
              { id: 'cram', text: '잠을 줄여 모든 과목을 한꺼번에 한다', result: '몇 주 만에 지쳐 버린다.', impact: [{ who: '하람', text: '몸과 마음이 지친다', tone: -1 }], why: '건강 습관도 보호 요인이에요. 작은 목표로 나눠요.' }] } },
          { id: 'random', text: '인터넷 댓글만 보고 아무 학교나 정한다', result: '나중에 나와 맞지 않는다는 것을 안다.', impact: [{ who: '하람', text: '다시 헷갈린다', tone: -1 }], why: '믿을 만한 어른과 함께 정보를 살펴요.' }] } },
      { id: 'consult', text: '다음 날 담임 선생님과 다시 상의한다', result: '선생님이 다른 길과 준비 방법을 함께 찾아 준다.', impact: [{ who: '하람', text: '도움 자원과 이어진다', tone: 1 }], ending: '선생님과 상의해 다른 길을 찾았어요.' }] };
    const R1 = [{ id: 'q1', text: '한 번의 실패로 모든 길이 닫히지는 않는다' }, { id: 'q2', text: '믿을 만한 어른과 함께 찾으면 길이 넓어진다' },
      { id: 'q3', text: '회복탄력성은 타고나는 것이다', why: '회복탄력성은 관계·습관·도움으로 키울 수 있어요.' }, { id: 'q4', text: '실패하면 혼자 이겨 내야 강해진다', why: '도움을 청하는 것도 회복의 힘이에요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.balance', {
        title: '위험 요인과 보호 요인 저울', method: '위험 요인·보호 요인 저울', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대 가운데 더 큰 막대를 읽는다.', base: '두 막대를 견주고 늘릴 수 있는 쪽을 고른다.', challenge: '보호 요인 하나를 더하면 막대가 어떻게 바뀔지 말한다(교사가 칠판에 다시 그린다).' },
        intro: {
          teacher: '"가상 인물 준서의 저울에서 위험 요인 막대와 보호 요인 막대 가운데, 우리가 늘릴 수 있는 쪽은 어디일까요?" 막대를 읽고 시연 단추로 \'보호 요인\'이 골라지는 모습을 보인다. "위험 요인을 없애야죠"라는 말에는 "부상이나 대회 취소처럼 내가 바꿀 수 없는 위험도 있어요. 그럴 때 보호 요인을 늘리면 저울이 다시 균형을 잡아요"라고 말해 준다. "회복탄력성은 타고나는 거 아니에요?"라는 말에는 오늘 그것을 함께 따져 보자고 한다. 막대 값은 가상이다.',
          student: '가상 인물 준서의 위험 요인과 보호 요인 막대를 견주고, 우리가 늘릴 수 있는 쪽을 골라요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '준서의 위험 요인과 보호 요인(가상, 점수)', unit: '점', xLabel: '요인', yLabel: '크기', max: 10, scale: 1, data: BAL, question: '우리가 늘릴 수 있는 쪽은?', choices: BAL.map((d) => d[0]) }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut balance scale with heavy gray paper stones on one side and colorful paper hearts, books and hands being added to the other side', banner: '저울을 다시 맞추려면?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '막대 값은 가상이다. 학생 자신의 위험 요인을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.story', {
        title: '부상 뒤 새 목표를 찾은 준서', method: '다시 일어선 인물', tool: 'story', minutes: 6,
        levels: { easy: '장면 4장을 차례로 놓는다.', base: '장면 5장을 차례로 놓는다.', challenge: '준서를 다시 일어서게 한 보호 요인을 장면에서 골라 말한다.' },
        intro: {
          teacher: '"준서는 대회를 못 나가게 됐어요. 그 뒤로 무엇이 준서를 다시 일어서게 했을까요?" 가상 인물 준서의 장면 카드를 섞어 보인 뒤 시연 단추로 차례대로 놓이는 모습을 보인다. "준서가 원래 강한 사람이라서 그래요"라는 말에는 "장면을 다시 보면, 준서 혼자 일어선 걸까요, 누군가와 함께였을까요?"라고 되묻는다. 다시 일어서는 데는 시간이 걸리고, 속상해하는 것도 자연스러운 과정이라는 점을 짚는다.',
          student: '가상 인물 준서의 장면을 차례대로 놓아요. 준서를 다시 일어서게 한 것이 무엇인지 찾아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '준서의 한 해', cards: [
            { id: 'c1', text: '연습 중 다쳐 대회에 못 나간다', motif: 'rain' }, { id: 'c2', text: '한동안 속상해 말이 없다', motif: 'cloud' },
            { id: 'c3', text: '코치·가족에게 마음을 털어놓는다', motif: 'house' }, { id: 'c4', text: '재활하며 후배 연습을 돕는다', motif: 'leaf' },
            { id: 'c5', text: '선수 지도자라는 새 목표를 세운다', motif: 'star' }] }, sequence: [{ order: ['c1', 'c2', 'c3', 'c4', 'c5'] }] },
          art: { draw: 'a paper-cut athlete with a bandaged knee sitting on a bench, then standing beside younger players with a whistle, a paper sun rising behind', banner: '무엇이 다시 일어서게 했을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.web', {
        title: '보호 요인 그물 짜기', method: '보호 요인 그물', tool: 'mindmap', minutes: 15,
        levels: { easy: '카드 6장을 가지 3개(관계·강점·도움 자원)에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 10장을 가지 5개(관계·강점·건강 습관·의미·도움 자원)에 나누고, 보호 요인과 위험 요인을 가른다.', challenge: '셋째 문항에서 약한 가지마다 키울 행동을 잇는다(함정 카드가 섞인다).' },
        activity: {
          title: '보호 요인 그물 짜기', tool: 'mindmap',
          teacher: '"보호 요인은 사람만 있을까요?" 카드를 다섯 가지에 나눈 뒤 습관·의미처럼 눈에 덜 띄는 보호 요인도 함께 읽는다. "저는 강점이 없어요"라는 학생에게 "\'먼저 인사하기\'도 강점이에요. 강점은 대단한 재능이 아니라 나를 버티게 하는 작은 힘이에요"라고 말해 준다. 내게 있는 것은 활동지 혼자 보기 칸에만 표시하게 하고 걷지 않는다.',
          task: '보호 요인 카드를 관계·강점·건강 습관·의미·도움 자원 가지에 나누고, 약한 가지를 키울 행동을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('보호 요인 카드를 다섯 가지에 나누세요.', WEB5, PROT, { topic: '나를 지키는 그물' }),
              SB('보호 요인 카드 6장을 세 가지에 나누세요.', ['관계', '강점', '도움 자원'], PROT.filter((c) => ['관계', '강점', '도움 자원'].includes(c.to)), { topic: '나를 지키는 그물' })),
            IT(SB('카드를 보호 요인과 위험 요인으로 가르세요.', ['보호 요인', '위험 요인'], [
              { id: 'p1', text: '고민을 들어 주는 친구', to: '보호 요인' }, { id: 'p2', text: '꾸준한 운동 습관', to: '보호 요인' }, { id: 'p3', text: '도움을 청하는 용기', to: '보호 요인' },
              { id: 'n1', text: '잠이 늘 모자람', to: '위험 요인' }, { id: 'n2', text: '오래 이어지는 따돌림', to: '위험 요인' }, { id: 'n3', text: '고민을 말할 사람이 없음', to: '위험 요인' }], { topic: '저울의 양쪽' })),
            IT(MB('약한 가지마다 이번 주에 키울 행동을 이어 보세요.', [['관계', '친구에게 먼저 안부 묻기'], ['건강 습관', '잠자는 시간 정하기'], ['도움 자원', '상담실 위치와 시간 알아 두기']], ['다 혼자 해결하기'], { topic: '그물 키우기' }),
              MB('약한 가지 두 개에 키울 행동을 이어 보세요.', [['관계', '친구에게 먼저 안부 묻기'], ['건강 습관', '잠자는 시간 정하기']], [], { topic: '그물 키우기' }),
              null, { conclude: '보호 요인은 관계·강점·건강 습관·의미·도움 자원으로 이루어진 그물이에요. 그물은 타고나는 것이 아니라 작은 행동으로 키울 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '혼자 보기 칸: 나에게 있는 보호 요인 가지에 표시해요(걷지 않아요).', options: ['관계', '강점', '건강 습관', '의미', '도움 자원'] }] },
        notes: '나에게 있는 보호 요인은 혼자 보기 칸에만 표시하고 걷지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.dilemma', {
        title: '"원하는 학교가 어렵대" 갈림길', method: '실패 뒤의 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고 근거 카드를 한 장 이상 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 맞는 근거 두 장을 모두 고른다.' },
        activity: {
          title: '"원하는 학교가 어렵대" 갈림길', tool: 'dilemma',
          teacher: '"\'어려울 수 있다\'는 말은 \'안 된다\'는 말과 같을까요?" 학생마다 한 길을 끝까지 가 본 뒤, 모두 포기한 길과 정보를 찾고 어른과 상의한 길을 견주게 한다. "실패하면 혼자 이겨 내야 강해지는 거잖아요"라는 학생에게 "다시 일어선 준서는 혼자였나요? 도움을 청하는 것도 회복의 힘이에요"라고 말해 준다. 실망하고 속상한 마음은 자연스럽다는 점을 먼저 인정한다.',
          task: '진학 상담에서 원하는 학교가 어렵다는 말을 들은 가상 인물 하람의 갈림길에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '하람이 원하는 학교가 어렵다는 말을 들었어요. 첫 갈림길에서 골라 결과를 보세요.', base: '하람이 원하는 학교가 어렵다는 말을 들었어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 맞는 근거 두 장을 모두 고르세요.' },
              '실패 뒤의 갈림길', D1, [['info', 'teacher', 'plan'], ['consult']], R1, ['q1', 'q2']),
            IT({ prompt: '모둠 대회에서 우리 모둠이 꼴찌를 했어요. 다음 선택을 따라가세요.', toolOptions: { title: '꼴찌를 한 뒤', scene: { text: '학교 과학 탐구 대회에서 하람의 모둠이 꼴찌를 했다. 모둠원 하나가 "다 너 때문이야"라고 한다.', ask: '하람은 어떻게 할까?', motif: 'storm', choices: [
              { id: 'blame', text: '"너야말로!" 하며 서로 탓한다', result: '모둠이 깨지고 다음 활동도 함께하기 어려워진다.', impact: [{ who: '모둠', text: '관계가 상한다', tone: -1 }], why: '탓하기는 관계라는 보호 요인을 무너뜨려요.' },
              { id: 'review', text: '"속상하다. 다음엔 뭘 바꿀지 같이 적어 보자"', result: '모둠이 아쉬운 점과 잘한 점을 함께 적는다.', impact: [{ who: '모둠', text: '다음을 준비한다', tone: 1 }], ending: '실패를 다음 계획으로 바꿨어요.' }] }, reasons: [{ id: 'p1', text: '실패를 돌아보면 다음에 쓸 힘이 생긴다' }, { id: 'p2', text: '실패하면 누구 탓인지부터 가려야 한다', why: '탓하기보다 함께 돌아보는 것이 회복을 도와요.' }], compare: true },
              target: { path: [['review']], reasons: ['p1'] } }),
            IT({ prompt: '친구가 실패 뒤 "난 원래 이런 사람이야"라고 해요. 다음 선택을 따라가세요.', toolOptions: { title: '친구의 실패', scene: { text: '오디션에 떨어진 친구가 "난 원래 이런 사람이야, 뭘 해도 안 돼"라고 한다.', ask: '나는 어떻게 답할까?', motif: 'cloud', choices: [
              { id: 'cheer', text: '"속상하겠다. 그동안 연습한 건 그대로 네 힘이야"', result: '친구가 "그건 그렇지"라며 조금 웃는다.', impact: [{ who: '친구', text: '자기 강점을 떠올린다', tone: 1 }], ending: '친구의 강점을 일깨웠어요.' },
              { id: 'agree', text: '"그러게, 너는 이쪽 아닌가 봐"', result: '친구가 더 움츠러든다.', impact: [{ who: '친구', text: '자신을 더 깎아내린다', tone: -1 }], why: '한 번의 결과로 사람 전체를 판단하지 않아요.' }] }, reasons: [{ id: 'm1', text: '나는 친구의 보호 요인(관계)이 될 수 있다' }, { id: 'm2', text: '솔직하게 한계를 말해 주는 게 친구다', why: '실패 직후에는 판단보다 공감과 강점을 전해요.' }], compare: true },
              target: { path: [['cheer']], reasons: ['m1'] }, conclude: '실패는 끝이 아니에요. 속상함을 인정하고, 정보를 찾고, 믿을 어른과 상의하면 길이 넓어져요. 나도 친구의 보호 요인이 될 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '원하는 학교가 어렵다는 말을 들었을 때 가장 알맞은 첫 행동은?', options: ['진로 생각을 모두 접는다', '정보를 찾고 담임·진로 선생님과 상의한다', '인터넷 댓글로 정한다'], answer: '정보를 찾고 담임·진로 선생님과 상의한다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.write', {
        title: '나를 지탱해 주는 세 가지', method: '내 보호 요인 성찰 글', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '나를 지탱해 주는 것을 세 문장으로 쓰고 기준 2개를 점검한다.', base: '다섯 문장으로 쓰고 기준 3개(구체적 사례·사람·행동 계획)를 점검한다.', challenge: '셋째 문항에서 내가 친구의 보호 요인이 되는 방법까지 쓴다.' },
        activity: {
          title: '나를 지탱해 주는 세 가지', tool: 'rubric-writing',
          teacher: '"요즘 나를 웃게 하거나 버티게 해 주는 것은 무엇인가요? 사람이어도, 습관이어도, 꿈이어도 좋아요." 힘들었던 일을 떠올리지 않고 지금 나에게 있는 좋은 것만 쓰게 한다. "쓸 게 없어요"라는 학생에게 "좋아하는 노래, 매일 보는 반려동물, 늘 인사해 주는 경비 아저씨도 보호 요인이에요"라고 말해 준다. 글은 걷거나 발표하지 않는다.',
          task: '지금 나를 지탱해 주는 것 세 가지를 쓰고, 기준(구체적 사례·사람·행동 계획)으로 점검해요(걷지 않아요).',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '나를 지탱해 주는 것 세 가지를 다섯 문장으로 쓰고 기준표에 표시하세요(걷지 않아요).', toolOptions: { topic: '지금 나를 지탱해 주는 것(사람·습관·꿈 등) 세 가지를 다섯 문장으로 쓰세요.', minChars: 60, maxChars: 300, minSentences: 5, maxSentences: 6, title: '나를 지탱해 주는 것' }, target: { selfCheck: ['구체적인 예를 들었다', '사람(관계)을 하나 넣었다', '그것을 지킬 행동을 썼다'] } },
              { prompt: '나를 지탱해 주는 것 세 가지를 세 문장으로 쓰고 기준표에 표시하세요(걷지 않아요).', toolOptions: { minChars: 30, minSentences: 3, maxSentences: 4, starter: '나를 지탱해 주는 것은 ___이다.' }, target: { selfCheck: ['구체적인 예를 들었다', '사람(관계)을 하나 넣었다'] } }),
            IT({ prompt: '세 가지 가운데 하나를 이번 주에 더 키울 행동을 두 문장으로 쓰고 기준표에 표시하세요.', toolOptions: { topic: '나를 지탱해 주는 것 하나를 이번 주에 더 키울 행동을 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '이번 주에 키울 행동' }, target: { selfCheck: ['언제 할지 썼다', '할 수 있는 작은 행동이다'] } }),
            IT({ prompt: '내가 친구의 보호 요인이 되는 방법을 두 문장으로 쓰고 기준표에 표시하세요.', toolOptions: { topic: '내가 친구의 보호 요인(관계)이 되는 방법을 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '친구의 보호 요인 되기' }, target: { selfCheck: ['구체적인 행동이다', '친구를 판단하지 않는 방법이다'] } },
              null, null, { conclude: '나를 지탱해 주는 것은 생각보다 가까이 있어요. 그것을 지킬 작은 행동을 정하고, 나도 친구의 보호 요인이 되어 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '혼자 보기 칸: 나를 지탱해 주는 것 하나와 이번 주에 그것을 지킬 행동을 써요(걷지 않아요).' }] },
        notes: '힘들었던 일을 떠올리게 하지 않고 지금 있는 좋은 것만 쓰게 한다. 글은 걷거나 발표하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.habit', {
        title: '건강 습관 하루 차례와 점검', method: '건강 습관 일주일 계획', tool: 'kitchen', minutes: 15,
        levels: { easy: '습관 카드를 잠·운동·식사·쉬기 칸에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '습관 카드를 나누고 하루 습관 차례를 놓은 뒤, 일주일 실천 점검표를 표시한다.', challenge: '넷째 문항에서 시험 주간의 하루 습관 차례를 다시 놓는다(함정 카드가 섞인다).' },
        activity: {
          title: '건강 습관 하루 차례와 점검', tool: 'kitchen',
          teacher: '"잠·운동·식사·쉬기, 이 네 가지가 왜 보호 요인일까요?" 몸이 지치면 마음도 쉽게 무너진다는 점을 짚은 뒤 습관 카드를 나누게 한다. "운동할 시간이 없어요"라는 학생에게 "하루 10분 걷기도 운동이에요. 작게 시작해 일주일 지키는 것이 목표예요"라고 말해 준다. 일주일 실천 표는 활동지에 쓰고 걷지 않는다.',
          task: '건강 습관 카드를 잠·운동·식사·쉬기로 나누고, 하루 습관 차례를 세운 뒤 일주일 실천 점검표를 표시해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('건강 습관 카드를 네 칸에 나누세요(맞지 않는 카드는 남겨요).', ['잠', '운동', '식사', '쉬기'], [
              { id: 'h1', text: '같은 시간에 잠자리에 들기', to: '잠' }, { id: 'h2', text: '저녁 20분 걷기', to: '운동' }, { id: 'h3', text: '아침밥 챙겨 먹기', to: '식사' },
              { id: 'h4', text: '좋아하는 노래 들으며 쉬기', to: '쉬기' }, { id: 'h5', text: '새벽까지 영상 보기' }, { id: 'h6', text: '끼니 거르고 군것질하기' }], { groups: false })),
            IT(OB('평일 하루의 건강 습관 차례를 놓으세요.', [{ id: 'd1', text: '아침밥 먹기' }, { id: 'd2', text: '점심 뒤 운동장 한 바퀴' }, { id: 'd3', text: '저녁 20분 걷기' }, { id: 'd4', text: '잠 1시간 전 휴대폰 내려놓기' }, { id: 'd5', text: '같은 시간에 잠자기' }])),
            IT(CL('일주일 건강 습관 계획에 넣을 것만 표시하세요.', '일주일 습관 점검', [
              { id: 'c1', text: '일주일에 세 번 이상 몸 움직이기', ok: true }, { id: 'c2', text: '매일 같은 시간에 자기', ok: true },
              { id: 'c3', text: '하루 한 번 쉬는 시간 갖기', ok: true }, { id: 'c4', text: '주말에 몰아서 자기' }, { id: 'c5', text: '힘들 땐 밥 거르기' }])),
            IT(OB('시험 주간 하루의 건강 습관 차례를 다시 놓으세요.', [{ id: 'e1', text: '아침밥 먹기' }, { id: 'e2', text: '공부 사이 10분 스트레칭' }, { id: 'e3', text: '잠 1시간 전 휴대폰 내려놓기' }, { id: 'e4', text: '평소 시간에 잠자기' }], {}, [{ id: 'ex', text: '새벽까지 벼락치기' }]),
              null, null, { conclude: '잠·운동·식사·쉬기는 몸과 마음을 함께 지키는 보호 요인이에요. 시험 주간에도 작게라도 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '혼자 보기 칸: 일주일 동안 지킬 건강 습관 하나와 실천한 날을 표시해요(걷지 않아요).', columns: ['습관', '월', '화', '수', '목', '금'], cells: [['', '', '', '', '', '']], answer: '(혼자 보기 — 정답 없음)' }] },
        notes: '계획 글의 \'일주일 일과판에 블록 배치\'는 교구가 요일 칸을 만들지 못해 습관 나누기·하루 차례·일주일 점검표·활동지 실천 표로 바꿨다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.note', {
        title: '힘들 때의 나에게 쪽지', method: '미래의 나에게 쪽지', tool: 'story', minutes: 7,
        levels: { easy: '쪽지 빈칸 하나("나는 ___")에 카드를 넣는다.', base: '쪽지 빈칸 두 개(나의 힘·연락할 사람)에 카드를 넣는다.', challenge: '쪽지 빈칸 세 개(연락 방법까지)에 카드를 넣는다(함정 카드가 섞인다).' },
        wrap: {
          teacher: '"언젠가 힘든 날의 내가 이 쪽지를 펼친다면, 무엇을 읽고 싶을까요?" 쪽지 빈칸에 카드를 넣은 뒤 활동지에는 내 말로 다시 쓰게 한다. "그런 날은 안 올 거예요"라는 학생에게 "그러면 좋겠어요. 쪽지는 우산처럼, 쓸 일이 없어도 챙겨 두는 거예요"라고 말해 준다. 쪽지는 걷지 않고 각자 간직한다.',
          exitTicket: [
            IT(X('story', FB('힘들 때의 나에게 보내는 쪽지 빈칸에 카드를 넣어요.', [['힘들 때 기억해: 나는 ___', '다시 일어선 적이 있어'], ['그럴 땐 ___에게 연락해', '믿는 어른'], ['연락 방법: ___', '쉬는 시간에 상담실 찾아가기']], ['혼자 참기'], { title: '미래의 나에게' }), { difficulty: 0.15 }),
              FB('쪽지 빈칸 하나에 카드를 넣어요.', [['힘들 때 기억해: 나는 ___', '다시 일어선 적이 있어']], [], { title: '미래의 나에게' }),
              FB('쪽지 빈칸 세 개에 카드를 넣어요(함정이 섞였어요).', [['힘들 때 기억해: 나는 ___', '다시 일어선 적이 있어'], ['그럴 땐 ___에게 연락해', '믿는 어른'], ['연락 방법: ___', '쉬는 시간에 상담실 찾아가기']], ['혼자 참기', '아무에게도 말 안 하기'], { title: '미래의 나에게' })),
            { type: 'choice', prompt: '"회복탄력성은 타고나는 것이다"라는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 바꿀 수 없다', '관계·습관·도움 자원으로 키울 수 있다', '운이 좋아야 생긴다'], answer: 1, difficulty: 0.15, explain: '보호 요인을 늘리면 회복탄력성도 자라요.' },
            { type: 'short', prompt: '쪽지에 넣을 \'믿는 어른\'을 이름 대신 관계로 써요(예: 담임 선생님).' },
          ],
        },
        worksheet: {
          title: '미래의 나에게',
          items: [
            { type: 'blank', prompt: '혼자 보기 칸: 쪽지를 내 말로 채워요(걷지 않아요).', text: '힘들 때 기억해: 나는 ___. 그럴 땐 ___에게 연락해.', answer: '(예) 다시 일어선 적이 있어, 담임 선생님' },
            { type: 'short', prompt: '쪽지에 적은 사람에게 연락하는 방법을 구체적으로 써요.' },
          ],
        },
        notes: '쪽지는 걷거나 발표하지 않고 각자 간직한다. ' + SAFE_NOTE,
      }),
      M('wrap.help', {
        title: '학교 밖 상담 자원 찾기', method: '보호 요인으로도 부족할 때', tool: 'map', minutes: 7,
        levels: { easy: '이름이 보이는 동네 지도에서 지역 상담 기관 한 곳에 핀을 꽂는다.', base: '이름을 숨긴 지도에서 지역 상담 기관·청소년 시설 두 곳을 찾고 연락 방법을 고른다.', challenge: '셋째 질문에서 찾아가는 길을 확인하는 방법을 고른다.' },
        wrap: {
          teacher: '"보호 요인으로도 버티기 힘든 날, 학교 밖에서는 어디에 기댈 수 있을까요?" 가상 동네 지도에서 지역 상담 기관과 청소년 시설을 짚고 활동지의 지역 상담 번호 칸을 학교가 확인한 번호로 채운다. "학교 밖 상담은 어른들만 가는 곳 아니에요?"라는 말에는 "청소년을 위한 상담 기관과 시설도 있어요. 우리 동네의 곳은 선생님이 확인해 알려 줄게요"라고 말해 준다.',
          exitTicket: [
            IT(X('map', PIN('학교 밖에서 마음 상담을 받을 수 있는 곳에 핀을 꽂고 연락 방법을 고르세요.', { grid: [6, 4], title: '가상의 우리 동네', names: false, places: [
              { name: '지역 상담 기관', icon: 'office', at: [3, 1] }, { name: '청소년 시설', icon: 'museum', at: [5, 2] }, { name: '우리 학교', icon: 'school', at: [0, 0] },
              { name: '도서관', icon: 'library', at: [1, 3] }, { name: '공원', icon: 'park', at: [4, 3] }, { name: '아파트', icon: 'apartment', at: [2, 0] }], ask: { q: '이곳에 연락하는 방법은?', choices: ['학교가 알려 준 지역 상담 번호로 전화한다', '아무 번호나 검색해 건다', '연락할 방법이 없다'] } }, { place: '지역 상담 기관', pick: 0 }), { difficulty: 0.15 }),
              { prompt: '이름이 보이는 지도에서 학교 밖 상담 기관에 핀을 꽂고 연락 방법을 고르세요.', toolOptions: { names: true, readout: true } }),
            X('map', PIN('방과 후 프로그램과 쉴 곳이 있는 청소년 시설에 핀을 꽂으세요.', { grid: [6, 4], title: '가상의 우리 동네', names: false, places: [
              { name: '지역 상담 기관', icon: 'office', at: [3, 1] }, { name: '청소년 시설', icon: 'museum', at: [5, 2] }, { name: '우리 학교', icon: 'school', at: [0, 0] },
              { name: '도서관', icon: 'library', at: [1, 3] }, { name: '공원', icon: 'park', at: [4, 3] }, { name: '아파트', icon: 'apartment', at: [2, 0] }] }, { place: '청소년 시설' }), { difficulty: 0.2 }),
            { type: 'choice', prompt: '처음 가는 상담 기관을 찾아가는 길을 확인하는 방법으로 알맞은 것은?', options: ['보호자나 선생님과 함께 위치와 운영 시간을 확인한다', '혼자 아무 때나 찾아간다', '친구들에게 소문을 내 같이 간다'], answer: 0, difficulty: 0.2, explain: '믿는 어른과 함께 확인하면 처음 가는 곳도 덜 낯설어요.' },
          ],
        },
        worksheet: {
          title: '학교 밖 상담 자원',
          items: [
            { type: 'blank', prompt: '학교가 알려 준 지역 상담 번호를 옮겨 써요.', text: `지역 상담 번호: ___ (${NUM})`, answer: NUM },
            { type: 'short', prompt: '학교 밖 상담 기관을 처음 찾아갈 때 함께 갈 어른을 관계로 써요(예: 보호자).' },
          ],
        },
        notes: `지도는 가상 동네다. 우리 지역 상담 기관·청소년 시설 위치와 ${NUM}는 교사가 확인해 알려 준다. ` + SAFE_NOTE,
      }),
    );
  }

  // ==== 9학년 · 진학 스트레스와 도움 계획 (life.m.transition-stress) ====
  {
    const M = MK('transition-stress', [9]);
    const G9 = [['성적', 30], ['학교 선택', 28], ['친구와 헤어짐', 22], ['보호자 기대', 20]];
    const TIME2 = ['지킬 시간', '줄일 시간'];
    const TIMES = [
      { id: 'k1', text: '정해진 시간에 잠자기', to: '지킬 시간' }, { id: 'k2', text: '세 끼 밥 먹기', to: '지킬 시간' },
      { id: 'k3', text: '진로 정보 찾기 30분', to: '지킬 시간' }, { id: 'k4', text: '저녁 산책 20분', to: '지킬 시간' },
      { id: 'c1', text: '새벽까지 영상 보기', to: '줄일 시간' }, { id: 'c2', text: '할 일 없이 SNS 넘기기', to: '줄일 시간' },
    ];
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네', places: [
      { name: '진로 상담실', icon: 'school', at: [0, 0] }, { name: '도서관', icon: 'library', at: [3, 0] }, { name: '청소년 시설', icon: 'museum', at: [5, 2] },
      { name: '아파트', icon: 'apartment', at: [1, 3] }, { name: '공원', icon: 'park', at: [4, 3] }, { name: '시장', icon: 'market', at: [2, 2] }] };
    const D1 = { text: '나연은 예술 고등학교에 가고 싶은데, 보호자는 "일반고에 가서 공부에 집중했으면 좋겠다"고 한다. 원서를 쓸 때가 다가온다.', ask: '나연은 어떻게 할까?', motif: 'house', choices: [
      { id: 'silent', text: '말해 봤자 소용없다며 아무 말도 안 한다', result: '마음이 무거운 채로 시간이 흐른다.', impact: [{ who: '나연', text: '혼자 끙끙 앓는다', tone: -1 }], why: '진학 결정은 혼자 감당하지 않아요. 대화를 준비해 봐요.', end: '말하지 않고 혼자 앓았어요.',
        next: { text: '원서 마감 일주일 전, 나연은 잠을 설치기 시작한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'force', text: '보호자 몰래 원하는 학교 원서를 쓴다', result: '나중에 알게 된 보호자와 크게 다툰다.', impact: [{ who: '나연과 보호자', text: '믿음이 흔들린다', tone: -1 }], why: '몰래 하기보다 어른의 도움을 받아 대화해요.' },
          { id: 'help', text: '담임 선생님께 고민을 말하고 함께 대화할 방법을 묻는다', result: '선생님이 보호자 상담 시간을 잡아 준다.', impact: [{ who: '나연', text: '도움을 받는다', tone: 1 }], why: '도움을 청한 것은 잘했어요. 더 일찍 했다면 여유가 있었어요.' }] } },
      { id: 'fight', text: '"내 인생이야!"라며 감정적으로 다툰다', result: '보호자도 언성이 높아지고 대화가 끊긴다.', impact: [{ who: '나연과 보호자', text: '서로 상처받는다', tone: -1 }], why: '감정이 클 때는 잠깐 멈추고 준비해서 말해요.', ending: '다툼으로 대화가 끊겼어요.' },
      { id: 'prepare', text: '학교 정보와 내 생각을 정리해 대화를 청한다', result: '보호자가 "그래, 들어 보자"며 자리에 앉는다.', impact: [{ who: '보호자', text: '나연의 생각을 들을 준비가 된다', tone: 1 }], end: '준비해서 대화를 청했어요.',
        next: { text: '보호자가 "예술은 불안정하잖아"라고 걱정한다.', ask: '나연은 어떻게 답할까?', choices: [
          { id: 'listen', text: '"그 걱정도 알아요. 제가 알아본 졸업 뒤 진로도 보여 드릴게요"', result: '보호자가 자료를 함께 들여다본다.', impact: [{ who: '보호자', text: '걱정을 존중받는다고 느낀다', tone: 1 }], end: '걱정을 인정하고 자료로 답했어요.',
            next: { text: '보호자가 "진로 선생님 의견도 들어 보자"고 한다.', ask: '어떻게 할까?', choices: [
              { id: 'together', text: '보호자와 함께 진로 상담을 신청한다', result: '셋이 함께 장단점을 살피고 계획을 세운다.', impact: [{ who: '나연', text: '함께 결정한다', tone: 1 }] },
              { id: 'refuse', text: '"선생님도 반대할 거예요"라며 거절한다', result: '대화가 다시 막힌다.', impact: [{ who: '나연', text: '도움을 놓친다', tone: -1 }], why: '믿을 만한 어른의 의견은 결정을 돕는 정보예요.' }] } },
          { id: 'angry', text: '"또 그 소리!"라며 자리를 박차고 나간다', result: '준비한 대화가 다툼으로 끝난다.', impact: [{ who: '나연과 보호자', text: '대화가 끊긴다', tone: -1 }], why: '상대의 걱정도 들어야 대화가 이어져요.' }] } }] };
    const R1 = [{ id: 'r1', text: '진학 결정은 혼자 감당하지 않고 함께 정한다' }, { id: 'r2', text: '상대의 걱정을 들으면 대화가 이어진다' },
      { id: 'r3', text: '내 인생이니 혼자 정하고 통보하면 된다', why: '내 희망이 중요하지만, 함께 정보를 살피면 더 나은 결정을 해요.' }, { id: 'r4', text: '보호자 뜻을 무조건 따라야 한다', why: '내 희망도 말할 수 있어요. 준비해서 대화해요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.graph', {
        title: '중3이 꼽은 진학 걱정', method: '전환기 걱정 자료', tool: 'chart', minutes: 6,
        levels: { easy: '막대그래프에서 가장 큰 걱정을 읽는다.', base: '걱정 막대들의 차이를 해석해 말한다.', challenge: '그래프에 없는 걱정을 덧붙여 말해 본다.' },
        intro: {
          teacher: '"중3 2학기, 진학을 앞두고 가장 많이 하는 걱정은 무엇일까요?" 가상 설문 막대그래프를 띄우고 시연 단추로 가장 큰 막대가 골라지는 모습을 보인다. "이런 걱정은 나만 하는 줄 알았어요"라는 말이 나오면 "그래프를 보면 여러분 대부분이 비슷한 걱정을 해요. 걱정은 약해서가 아니라 중요한 결정을 앞두고 있다는 뜻이에요"라고 말해 준다. 이 자료는 수업용 가상 설문이다.',
          student: '가상 중3 설문 그래프에서 진학을 앞둔 걱정을 읽고, 그래프가 말해 주는 것을 짝과 이야기해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '진학을 앞둔 중3의 가장 큰 걱정(가상 설문)', unit: '%', xLabel: '걱정', yLabel: '응답 비율', data: G9, question: '가장 많이 꼽은 걱정은?', choices: G9.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut road sign with several paper arrows pointing to different school buildings, a student standing at the crossroads holding a paper map', banner: '진학 앞의 걱정', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 학생 자신의 진학 걱정을 발표하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.timeline', {
        title: '중3 하반기 일정 띠', method: '중3 하반기 일정 띠', tool: 'timeline', minutes: 6,
        levels: { easy: '일정 카드 4장을 시간 띠에 차례로 놓는다.', base: '일정 카드 5장을 놓고 스트레스가 몰리는 때를 짚는다.', challenge: '스트레스가 몰리는 때에 쓸 대처를 말로 붙인다.' },
        intro: {
          teacher: '"진로 상담부터 졸업식까지, 중3 하반기에는 어떤 일정이 이어질까요?" 일정 카드를 섞어 보인 뒤 시연 단추로 시간 띠에 차례대로 놓이는 모습을 보인다. 정확한 날짜는 학교·지역마다 달라 차례만 본다고 밝힌다. "원서 낼 때만 힘들면 되잖아요"라는 말에는 "원서 쓰기 전 결정하는 때와 결과를 기다리는 때에도 걱정이 몰려요. 미리 알면 미리 준비할 수 있어요"라고 말해 준다.',
          student: '중3 하반기 일정 카드를 시간 띠에 차례대로 놓고, 걱정이 몰리는 때가 언제인지 생각해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: [
            { id: 't1', text: '진로 상담' }, { id: 't2', text: '원서 쓰기' }, { id: 't3', text: '원서 내기' }, { id: 't4', text: '결과 발표' }, { id: 't5', text: '졸업식' }] }, sequence: [{ order: ['t1', 't2', 't3', 't4', 't5'] }] },
          art: { draw: 'a paper-cut timeline ribbon stretching across the page with small paper flags for counseling, application, results and a graduation cap at the end', banner: '언제 걱정이 몰릴까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '진학 일정의 시기는 학교·지역마다 달라 차례만 다룬다(사람 확인). ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.dilemma', {
        title: '보호자 기대와 내 희망 사이', method: '부모 기대와 내 희망', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 갈림길에서 한 번 고르고 결과와 영향을 바로 본다.', base: '세 번 골라 끝까지 가고 근거 카드를 한 장 이상 고른다(영향 표시는 맞힌 뒤에).', challenge: '세 번 골라 끝까지 간 뒤 맞는 근거 두 장을 모두 고른다.' },
        activity: {
          title: '보호자 기대와 내 희망 사이', tool: 'dilemma',
          teacher: '"내 희망과 보호자의 기대가 다를 때, 무조건 따르거나 무조건 맞서는 것 말고 다른 길이 있을까요?" 학생마다 한 길을 끝까지 가 본 뒤, 침묵한 길·다툰 길·준비해서 대화한 길을 견주게 한다. "우리 집은 말이 안 통해요"라는 학생에게 "그럴 때는 담임 선생님이나 진로 선생님이 대화를 이어 주는 다리가 될 수 있어요"라고 말해 준다. 가정마다 사정이 달라 정답 가정은 없다는 점을 밝히고, 학생의 집안 이야기를 묻지 않는다.',
          task: '희망 학교가 보호자의 기대와 다른 가상 인물 나연의 갈림길에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '나연의 희망 학교가 보호자 기대와 달라요. 첫 갈림길에서 골라 결과를 보세요.', base: '나연의 희망 학교가 보호자 기대와 달라요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 맞는 근거 두 장을 모두 고르세요.' },
              '보호자 기대와 내 희망', D1, [['prepare', 'listen', 'together']], R1, ['r1', 'r2']),
            IT({ prompt: '친구들이 모두 같은 학교에 가자고 해요. 다음 선택을 따라가세요.', toolOptions: { title: '친구들과 같은 학교?', scene: { text: '친한 친구들이 "우리 다 같이 ○○고 가자"고 한다. 나연은 그 학교에 원하는 과정이 없다.', ask: '나연은 어떻게 할까?', motif: 'house', choices: [
              { id: 'follow', text: '헤어지기 싫어 친구들을 따라간다', result: '원하는 공부를 할 수 없어 아쉬움이 남는다.', impact: [{ who: '나연', text: '희망을 접는다', tone: -1 }], why: '친구와 헤어지는 걱정은 자연스럽지만, 진학은 내 희망을 함께 따져요.' },
              { id: 'own', text: '"아쉽지만 나는 원하는 과정이 있는 곳에 갈래. 주말에 꼭 보자"', result: '친구들이 아쉬워하지만 응원한다.', impact: [{ who: '나연', text: '희망을 지키고 관계도 이어 간다', tone: 1 }], ending: '내 희망을 말하고 관계도 지켰어요.' }] }, reasons: [{ id: 'q1', text: '학교가 달라도 관계는 이어 갈 수 있다' }, { id: 'q2', text: '친구와 헤어지면 우정이 끝난다', why: '학교가 달라도 만나고 연락하며 우정을 이어 갈 수 있어요.' }], compare: true },
              target: { path: [['own']], reasons: ['q1'] } }),
            IT({ prompt: '결과 발표를 기다리는 동안 불안이 커져요. 다음 선택을 따라가세요.', toolOptions: { title: '결과를 기다리며', scene: { text: '원서를 낸 뒤 결과 발표까지 몇 주가 남았다. 나연은 자꾸 최악의 결과만 떠오른다.', ask: '나연은 어떻게 할까?', motif: 'cloud', choices: [
              { id: 'refresh', text: '하루 종일 합격 후기 글만 찾아본다', result: '비교할수록 불안이 더 커진다.', impact: [{ who: '나연', text: '불안이 커진다', tone: -1 }], why: '바꿀 수 없는 결과를 계속 들여다보면 불안이 커져요.' },
              { id: 'routine', text: '평소 습관을 지키고, 불안이 크면 담임 선생님께 말한다', result: '불안은 남아도 하루를 버틸 힘이 생긴다.', impact: [{ who: '나연', text: '마음이 조금 가라앉는다', tone: 1 }], ending: '습관을 지키며 도움을 청했어요.' }] }, reasons: [{ id: 'p1', text: '기다리는 동안은 바꿀 수 있는 일(습관·도움 요청)에 집중한다' }, { id: 'p2', text: '불안할수록 정보를 더 찾아야 한다', why: '정보보다 쉬기와 이야기하기가 도움이 될 때가 있어요.' }], compare: true },
              target: { path: [['routine']], reasons: ['p1'] }, conclude: '진학 결정은 혼자 감당하지 않아요. 준비해서 대화하고, 상대의 걱정을 듣고, 믿을 어른과 함께 정해요. 기다리는 동안은 바꿀 수 있는 일에 집중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '내 희망 학교가 보호자 기대와 다를 때 가장 알맞은 첫 행동은?', options: ['아무 말도 하지 않는다', '정보와 내 생각을 정리해 대화를 청한다', '몰래 원서를 쓴다'], answer: '정보와 내 생각을 정리해 대화를 청한다' }] },
        notes: '가정마다 사정이 다르다. 학생의 집안 이야기·보호자와의 갈등을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.letter', {
        title: '보호자와 대화 준비 글', method: '대화 준비 글', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '대화 준비 글을 세 문장으로 쓰고 기준 2개를 점검한다.', base: '다섯 문장으로 쓰고 기준 4개(사실·감정·희망·들을 준비)를 점검한다.', challenge: '셋째 문항에서 예상되는 반응과 내 대답을 덧붙인다.' },
        activity: {
          title: '보호자와 대화 준비 글', tool: 'rubric-writing',
          teacher: '"중요한 대화일수록 미리 써 보면 무엇이 좋을까요?" 사실(알아본 정보)·감정·희망·들을 준비, 네 가지를 차례로 넣어 쓰게 한다. "어차피 말해도 안 들어줄 거예요"라는 학생에게 "대화의 목표는 이기는 게 아니라 서로의 생각을 아는 거예요. \'들을 준비\' 문장이 그 문을 열어요"라고 말해 준다. 글은 가상 인물 나연의 입장이어도 되고 내 입장이어도 되지만, 걷거나 발표하지 않는다.',
          task: '진학을 두고 보호자와 대화할 때 전할 생각을 쓰고, 기준(사실·감정·희망·들을 준비)으로 점검해요(걷지 않아요).',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '보호자와 대화할 때 전할 생각을 다섯 문장으로 쓰고 기준표에 표시하세요(걷지 않아요).', toolOptions: { topic: '진학을 두고 보호자와 대화할 때 전할 내 생각을 다섯 문장으로 쓰세요(가상 인물 나연의 입장으로 써도 돼요).', minChars: 60, maxChars: 300, minSentences: 5, maxSentences: 6, title: '대화 준비 글' }, target: { selfCheck: ['알아본 사실을 넣었다', '내 감정을 말했다', '내 희망을 말했다', '보호자 생각도 듣겠다는 말을 넣었다'] } },
              { prompt: '대화 준비 글을 세 문장으로 쓰고 기준표에 표시하세요(걷지 않아요).', toolOptions: { minChars: 30, minSentences: 3, maxSentences: 4, starter: '제가 알아본 건 ___. 저는 ___ 마음이에요. 그래서 ___.' }, target: { selfCheck: ['알아본 사실을 넣었다', '내 희망을 말했다'] } }),
            IT({ prompt: '대화를 시작하는 첫 문장을 쓰고 기준표에 표시하세요.', toolOptions: { topic: '보호자에게 진학 이야기를 꺼내는 첫 문장을 쓰세요.', minChars: 12, maxChars: 100, minSentences: 1, maxSentences: 2, title: '대화 첫 문장' }, target: { selfCheck: ['대화할 시간을 부탁했다', '차분한 말투다'] } }),
            IT({ prompt: '보호자가 "그 길은 불안정해"라고 하면 어떻게 답할지 두 문장으로 쓰고 기준표에 표시하세요.', toolOptions: { topic: '보호자가 "그 길은 불안정해"라고 걱정할 때의 대답을 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '예상 반응에 답하기' }, target: { selfCheck: ['보호자의 걱정을 인정했다', '알아본 정보로 답했다'] } },
              null, null, { conclude: '중요한 대화는 사실·감정·희망·들을 준비를 담아 미리 써 보면 차분하게 할 수 있어요. 상대의 걱정을 인정하면 대화가 이어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '혼자 보기 칸: 대화할 때 꼭 전하고 싶은 내 희망 한 문장을 써요(걷지 않아요).' }] },
        notes: '글은 걷거나 발표하지 않는다. 가정 사정을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.budget', {
        title: '하루 시간 나누기', method: '시간 예산 짜기', tool: 'economy', minutes: 15,
        levels: { easy: '시간 카드 4장을 지킬 시간·줄일 시간으로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '시간 카드 6장을 나누고, 평일 저녁 시간을 차례로 놓는다.', challenge: '셋째 문항에서 시험 주간으로 다시 나눈다(늘릴·그대로·줄일 시간).' },
        activity: {
          title: '하루 시간 나누기', tool: 'economy',
          teacher: '"하루는 누구에게나 똑같이 24시간이에요. 진학 준비로 바쁠 때 어떤 시간부터 줄이고 싶나요?" 대부분 잠이라고 답하면 "잠을 줄이면 불안과 집중은 어떻게 될까요?"라고 되묻는다. 카드를 나눌 때 잠·식사·쉬기는 지킬 시간에 두고, 줄일 시간을 찾게 한다. 교구는 돈으로만 세기 때문에 시간은 카드 나누기와 차례로 다룬다.',
          task: '하루 시간 카드를 지킬 시간과 줄일 시간으로 나누고, 평일 저녁 시간을 차례로 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('하루 시간 카드를 두 칸으로 나누세요.', TIME2, TIMES),
              SB('시간 카드 4장을 두 칸으로 나누세요.', TIME2, pickCards(TIMES, ['k1', 'k2', 'c1', 'c2']))),
            IT(OB('평일 저녁 시간을 차례대로 놓으세요.', [{ id: 'e1', text: '저녁 먹기' }, { id: 'e2', text: '숙제·복습' }, { id: 'e3', text: '진로 정보 찾기' }, { id: 'e4', text: '씻고 쉬기' }, { id: 'e5', text: '정해진 시간에 잠자기' }])),
            IT(SB('시험 주간의 하루 시간을 세 칸으로 다시 나누세요.', ['늘릴 시간', '그대로 둘 시간', '줄일 시간'], [
              { id: 'x1', text: '복습 시간', to: '늘릴 시간' }, { id: 'x2', text: '정해진 시간에 잠자기', to: '그대로 둘 시간' }, { id: 'x3', text: '세 끼 밥 먹기', to: '그대로 둘 시간' },
              { id: 'x4', text: '할 일 없이 SNS 넘기기', to: '줄일 시간' }, { id: 'x5', text: '새벽까지 영상 보기', to: '줄일 시간' }]),
              null, null, { conclude: '바쁠수록 잠·식사·쉬기는 지키고, 줄일 시간은 그 밖에서 찾아요. 시간을 나눠 두면 불안도 덜해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '혼자 보기 칸: 내 하루에서 지킬 시간과 줄일 시간을 하나씩 써요(걷지 않아요).', columns: ['지킬 시간', '줄일 시간'], cells: [['', '']], answer: '(예) 정해진 시간에 잠자기, 새벽까지 영상 보기' }] },
        notes: '계획 글의 \'24시간 예산 막대\'는 교구(economy)가 돈만 세서 시간 카드 나누기와 차례로 바꿨다. ' + SAFE_NOTE,
      }),
      M('activity.people', {
        title: '진로 정보와 사람 자원 지도', method: '정보·사람 자원 지도', tool: 'map', minutes: 15,
        levels: { easy: '이름이 보이는 동네 지도에서 두 곳(진로 상담실·도서관)을 찾는다.', base: '이름을 숨긴 지도에서 네 곳을 찾고 곳마다 얻을 정보를 고른다.', challenge: '넷째 문항에서 고민이 커졌을 때 정보 말고 마음을 돌볼 곳을 고른다.' },
        activity: {
          title: '진로 정보와 사람 자원 지도', tool: 'map',
          teacher: '"진학 정보를 인터넷 말고 어디서 얻을 수 있을까요?" 지도에서 곳을 찾을 때마다 그곳에서 얻을 수 있는 정보와 만날 수 있는 사람을 함께 말한다. "선생님들은 바쁘셔서 물어보기 미안해요"라는 학생에게 "진로 상담은 선생님이 하시는 중요한 일이에요. 질문을 미리 적어 가면 짧게도 충분히 물을 수 있어요"라고 말해 준다. 지도는 가상 동네이고 우리 지역 청소년 시설은 따로 알려 준다.',
          task: '가상 동네 칸 지도에서 진로 상담실·도서관·청소년 시설을 찾아 핀을 꽂고, 곳마다 얻을 수 있는 정보를 골라요.',
          levels: { easy: { names: true, readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            PIN('진학 학교의 전형과 과정을 물어볼 곳에 핀을 꽂고 얻을 정보를 고르세요.', Object.assign({}, TOWN, { ask: { q: '이곳에서 얻을 수 있는 것은?', choices: ['학교별 과정과 준비 방법', '시험 문제 정답', '친구들의 성적'] } }), { place: '진로 상담실', pick: 0 }),
            PIN('여러 학교 안내 자료와 진로 책을 찾아볼 곳에 핀을 꽂으세요.', TOWN, { place: '도서관' }),
            PIN('방과 후 진로 체험 프로그램이 있는 곳에 핀을 꽂고 얻을 것을 고르세요.', Object.assign({}, TOWN, { ask: { q: '이곳에서 얻을 수 있는 것은?', choices: ['진로 체험과 또래 활동', '학교 원서 대신 내 주기', '성적 올려 주기'] } }), { place: '청소년 시설', pick: 0 }),
            IT(PIN('정보를 다 모았는데 마음이 계속 무거워요. 학교 안에서 먼저 찾아갈 곳에 핀을 꽂으세요.', TOWN, { place: '진로 상담실' }),
              null,
              { prompt: '정보를 모아도 불안이 계속 커질 때 알맞은 행동을 고르세요(지도는 보기만 해요).', toolOptions: { readOnly: true, ask: { q: '불안이 계속 커질 때는?', choices: ['정보를 더 모은다', '담임·상담 선생님께 마음을 이야기한다', '아무에게도 말하지 않는다'] } }, target: { pick: 1 } },
              { conclude: '진학 정보는 진로 상담실·도서관·청소년 시설에서 얻고, 마음이 무거우면 정보가 아니라 사람에게 기대요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '곳마다 얻을 수 있는 정보를 써요.', columns: ['곳', '얻을 정보'], cells: [['진로 상담실', ''], ['도서관', ''], ['청소년 시설', '']], answer: '학교별 과정·준비 방법, 학교 안내 자료·진로 책, 진로 체험 프로그램' }] },
        notes: '지도는 가상 동네다. 우리 지역 청소년 시설은 교사가 확인해 알려 준다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.plan', {
        title: '나의 진학 도움 계획표', method: '나의 도움 계획표', tool: 'kitchen', minutes: 7,
        levels: { easy: '도움 계획 카드 4장을 정보·마음 돌봄 칸에 나눈다.', base: '도움 계획 카드 6장을 정보·마음 돌봄·연락 세 칸에 나눈다.', challenge: '셋째 질문에서 계획이 틀어질 때의 대안을 고른다.' },
        wrap: {
          teacher: '"진학 준비에는 정보만 있으면 될까요?" 정보(누구에게 물을지)·마음 돌봄(무엇을 할지)·연락(언제 이야기할지) 세 칸을 채운 뒤 활동지에 내 계획을 적게 한다. "계획대로 안 되면요?"라는 학생에게 "계획은 바뀌어도 돼요. 틀어지면 담임 선생님과 다시 짜면 돼요"라고 말해 준다. 계획표는 걷지 않는다.',
          exitTicket: [
            IT(X('kitchen', SB('진학 도움 계획 카드를 세 칸에 나눠요.', ['정보', '마음 돌봄', '연락'], [
              { id: 'p1', text: '진로 선생님께 학교 정보 묻기', to: '정보' }, { id: 'p2', text: '선배에게 학교생활 듣기', to: '정보' },
              { id: 'p3', text: '하루 20분 걷기', to: '마음 돌봄' }, { id: 'p4', text: '좋아하는 음악 듣기', to: '마음 돌봄' },
              { id: 'p5', text: '주말마다 보호자와 이야기하기', to: '연락' }, { id: 'p6', text: '걱정이 크면 상담 선생님 찾기', to: '연락' }], { groups: false }), { difficulty: 0.15 }),
              SB('도움 계획 카드 4장을 두 칸에 나눠요.', ['정보', '마음 돌봄'], [
                { id: 'p1', text: '진로 선생님께 학교 정보 묻기', to: '정보' }, { id: 'p2', text: '선배에게 학교생활 듣기', to: '정보' },
                { id: 'p3', text: '하루 20분 걷기', to: '마음 돌봄' }, { id: 'p4', text: '좋아하는 음악 듣기', to: '마음 돌봄' }], { groups: false })),
            { type: 'choice', prompt: '"진학 결정은 혼자 감당해야 한다"는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 내 일이니 혼자 정한다', '보호자·선생님과 함께 정보를 살피고 정한다', '친구들 뜻에 맞춘다'], answer: 1, difficulty: 0.15, explain: '진학 결정은 함께 살피면 더 나은 선택을 할 수 있어요.' },
            { type: 'choice', prompt: '도움 계획이 틀어졌을 때 알맞은 대안은?', options: ['계획을 버리고 포기한다', '담임 선생님과 계획을 다시 짠다', '잠을 줄여 따라잡는다'], answer: 1, difficulty: 0.2, explain: '계획은 바뀌어도 돼요. 믿을 어른과 다시 짜요.' },
          ],
        },
        worksheet: {
          title: '나의 진학 도움 계획표',
          items: [
            { type: 'table', prompt: '혼자 보기 칸: 나의 진학 도움 계획을 써요(걷지 않아요).', columns: ['칸', '내 계획'], cells: [['정보(누구에게)', ''], ['마음 돌봄(무엇을)', ''], ['연락(언제)', '']], answer: '(예) 진로 선생님, 하루 20분 걷기, 주말마다 보호자와' },
            { type: 'short', prompt: '계획이 틀어지면 누구와 다시 짤지 써요(이름 대신 관계로).' },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.cheer', {
        title: '서로 응원 카드 벽', method: '서로 응원 메시지', tool: 'collage', minutes: 7,
        levels: { easy: '응원 카드 한 장의 바탕을 조각 3개 이상으로 꾸민다.', base: '응원 메시지 세 개를 활동지에 쓰고 조각 5개 이상으로 카드 바탕을 꾸며 점검한다.', challenge: '응원 메시지에 도움 자원 정보(담임·상담 선생님)를 함께 넣고 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"진학을 앞둔 우리 반 친구들에게 한 줄씩 응원을 보낸다면 무엇이라고 쓸까요?" 메시지는 활동지에 쓰고 조각으로 응원 카드 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). "합격해!"보다 결과와 상관없이 힘이 되는 말("어디서든 너는 잘 해낼 거야")을 쓰게 한다. 특정 친구 이름은 쓰지 않고 반 전체에게 보낸다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14, shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '응원 카드 바탕을 조각으로 꾸미고 점검해요(메시지는 활동지에 써요).', target: { selfCheck: ['메시지를 놓을 자리를 비워 두었다', '밝은 색을 골랐다', '메시지를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.15 },
              { prompt: '조각 3개 이상으로 응원 카드 바탕을 꾸미고 점검해요.', target: { selfCheck: ['메시지를 놓을 자리를 비워 두었다', '응원 메시지 하나를 정했다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고, 도움 자원 정보까지 점검해요.', target: { selfCheck: ['메시지를 놓을 자리를 비워 두었다', '밝은 색을 골랐다', '메시지를 활동지에 썼다', '도움 자원 정보를 넣었다'], minPieces: 5 } }),
            { type: 'choice', prompt: '진학을 앞둔 친구들에게 보낼 응원 메시지로 가장 알맞은 것은?', options: ['"결과가 어떻든 너는 소중해. 힘들면 같이 선생님께 가자"', '"꼭 1등 해야 해!"', '"떨어지면 끝이야, 힘내"'], answer: 0, difficulty: 0.15, explain: '결과와 상관없이 힘이 되는 말과 도움 경로를 담아요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '서로 응원 카드',
          items: [
            { type: 'short', prompt: '반 친구들에게 보낼 응원 메시지를 한 줄로 써요(이름은 쓰지 않아요).' },
            { type: 'check', prompt: '내 메시지를 점검해요.', options: ['결과와 상관없이 힘이 되는 말이다', '겁주는 말이 없다', '도움을 청할 곳이 들어 있다'] },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 메시지는 활동지에 쓰게 했다. ' + SAFE_NOTE,
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
