/* 창체 법정교육 인터넷·스마트폰 과의존 예방 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 digital 고.
 * 근거: 지능정보화 기본법 제54조(초·중·고 학기별 1회 이상) — research-mandatory §1,
 *   research-mandatory §2 인터넷·스마트폰 과의존/디지털 시민 고(정보윤리, 디지털 발자국·개인정보, 생성형 AI 윤리, 도박·게임 중독), §2 보건교육 고(중독: 도박·스마트폰).
 * 고 기준: 자료 분석·토론(찬반 근거)·제안서·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 이 영역의 원칙:
 *   · 학생 자신의 사용 시간·앱·게임·계정은 채점하지 않는다. 채점 문항은 가상 인물(가명 한두 글자)의 기록·사례로 묻고, 내 습관은 활동지·스스로 점검으로만 쓴다.
 *   · 특정 앱·게임·플랫폼·회사 이름을 쓰지 않는다('가상 영상 앱', '가상 게임').
 *   · 안전교육 사이버 중독 예방(modules/saf-cyber/h.js)과 겹치지 않게 했다 — 저쪽의 주의 경제·다크 패턴·수면 기록·게임이용장애 등재 토론·
 *     하교 후 300분/밤 180분 예산·시험 전날 밤 장면은 쓰지 않았다. 이쪽은 과의존 세 신호·환경 설계·24시간 우선순위·도박성 요소·디지털 발자국·생성형 AI 의존을 다룬다.
 *   · 찬반 토론(학교 내 수거·잊힐 권리·과제의 AI 허용)은 근거를 따지는 활동이다 — 어느 입장이든 맞고, 근거가 아닌 말(낙인·짐작)만 함정이다.
 *   · 수치(사용 비율·확률·설문·용돈·가격)는 모두 '가상'이다(화면 제목에 밝힘). 실제 통계는 근거 파일에 없다.
 *   · 전화번호를 쓰지 않는다 — 도움 경로는 학교 상담실·보건실·'[학교가 확인해 넣는 지역 상담 기관]'.
 *   · 법은 근거 파일에 있는 것(지능정보화 기본법 제54조)만 이름으로 쓴다. 도박 예방의 국가 법정 의무 여부는 근거 파일이 '확인 못함'이라 쓰지 않는다.
 * 주제 4개, 체계도 계획 모듈 32개 전부.
 *
 * 교구 한계로 계획을 바꾼 곳:
 *   economy 는 돈(원)만 센다 — 'wellbeing-design.activity.time-budget'(24시간 예산)은 시간 블록 카드 나누기·짝·차례로 했다(막대 대신 카드).
 *   wordcards 는 영어 낱말 교구라 'claim-check' 는 소리 없는 sort(공통 카드 판)로 썼다.
 *   block-coding 칸에는 글을 못 붙인다 — 한도 점검·검증 단계는 별 칸, 종료·제출은 깃발, '한 판만 더'·'틀린 답'은 바위로 나타내고 단계 글은 문항 글·활동지가 맡는다.
 *   map 은 문항마다 핀 하나 — 'help-map' 의 '세 곳'은 출구 핀 문항 둘과 고르기 하나로 나누고, '보호자와 갈 경로'는 활동지로 옮겼다.
 *   collage 는 글을 놓지 못한다 — 캠페인 문구는 활동지에 쓰고 판에는 문구 자리와 상징 조각만 배치한다.
 *   정리(출구) 질문은 단계별 판이 없다 — 정리 모듈의 쉬움·도전 차이는 교사 진행 방식으로 적었다.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   wellbeing-design 전체: 과의존을 '조절 실패·현저성·문제적 결과' 세 신호로 보는 틀(체계도 concepts) — 과학기술정보통신부·한국지능정보사회진흥원
 *     스마트쉼센터 '스마트폰 과의존 척도'와 과의존 실태조사 보고서로 확인. 환경 설계(기기 자리·알림 끄기)가 의지보다 낫다는 설명은 일반 지식(체계도 source '근거 약함').
 *   wellbeing-design.intro.claim-check: '학교는 학기마다 과의존 예방교육을 한다' — research-mandatory §1(지능정보화 기본법 제54조)에 있음. 캠프·기사 문장은 가상.
 *   wellbeing-design.activity.time-budget: '밤 잠 7시간 반'·블록 시간은 연습용 '우리 반 약속' 값이다 — 수면 권장 시간은 질병관리청 국가건강정보포털로 확인.
 *   game-gamble 전체: 확률형 아이템·라이브 후원을 '도박성 요소'로 보는 기준(돈을 걸고, 결과가 우연이고, 잃은 것을 되찾으려 하게 만듦), '손실 쫓기'의 뜻 —
 *     사행산업통합감독위원회·한국도박문제예방치유원 청소년 도박 예방 자료로 확인. 게임 확률 공개 의무의 세부(법 조문·시행 시기)는 쓰지 않았다 —
 *     게임물관리위원회·문화체육관광부 안내로 확인.
 *   game-gamble.activity.prob-chart: '확률 2%면 평균 50번'·'평균일 뿐 그 안에 반드시 나오지 않는다'는 수학적 설명이다(가상 확률표).
 *   game-gamble.wrap.help-map: 도박 문제 도움 기관은 '[학교가 확인해 넣는 지역 상담 기관]'으로 비웠다 — 한국도박문제예방치유원 지역센터 안내로 학교가 채운다.
 *   footprint 전체: 비공개 계정이어도 결제·위치·로그 기록과 친구의 캡처·공유로 정보가 남는다는 설명, 위치 태그·연동 앱 점검 항목 —
 *     개인정보보호위원회·한국인터넷진흥원 개인정보 보호 안내로 확인. '잊힐 권리'의 제도(청소년 게시물 삭제 지원 등)는 이름만 토론 주제로 쓰고 세부는 쓰지 않았다 —
 *     개인정보보호위원회 안내로 확인.
 *   footprint.activity.ethic-dilemma: 사적인 대화 캡처를 퍼 나르는 일이 상대의 권리를 해친다는 설명은 정보윤리 일반 지식 — 방송통신위원회·한국지능정보사회진흥원 디지털 윤리 자료로 확인.
 *   genai-habit 전체: 생성형 AI 답이 틀리거나 출처가 없는 내용을 만들 수 있다는 설명, 개인정보를 넣지 않는다는 원칙 — 교육부 생성형 AI 활용 안내·
 *     개인정보보호위원회 생성형 AI 개인정보 안내로 확인. 과제의 AI 사용 허용 범위는 학교·교과 규칙을 따른다(학교가 확인). */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'digital', band: '고', topic: `digital.h.${topic}`, grades }, o, { id: `digital.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(카드 판 sort — mindmap·economy·wordcards): groups = 칸마다 카드 글(글 = 카드 id). 쉬움 = 칸마다 앞 k장, 도전 = hard 덧붙임
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const it = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    it.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); it.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(it, more);
  };
  // 분류판(sortboard 글 카드 모드): 쉬움 = 바구니마다 앞 k장, 도전 = more(바구니마다 더할 카드)
  const SBQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const it = { prompt, toolOptions: { slots, cards: [...mix(groups), ...traps] }, target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    it.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); it.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { more: hard.flat() }, target: tgt(hg) }; }
    return Object.assign(it, more);
  };
  // 차례 문항(order): steps = 바른 차례(글 = id). 쉬움 = 앞 k장, traps = 자리에 놓지 않을 함정 카드
  const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
  const ORDERQ = (prompt, steps, { k = 3, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: steps.length, cards: lay(steps, traps) }, opt), target: { order: steps }, difficulty: d, levels: {} };
    if (k < steps.length) it.levels.easy = { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { slots: k, cards: lay(steps.slice(0, k), []) }, target: { order: steps.slice(0, k) } };
    else delete it.levels;
    return Object.assign(it, more);
  };
  // 짝 문항(match): pairs = [[칸 글, 카드 글]…]. 쉬움 = 앞 k쌍
  const MATCHQ = (prompt, pairs, { k = 3, extra = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([s, c]) => [s, c])) });
    const it = { prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p) => p[0]), cards: [...pairs.map((p) => p[1]).reverse(), ...extra] }, opt), target: t(pairs), difficulty: d };
    if (k < pairs.length) { const e = pairs.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `${k}쌍`), toolOptions: { slots: e.map((p) => p[0]), cards: e.map((p) => p[1]).reverse() }, target: t(e) } }; }
    return Object.assign(it, more);
  };
  // 고르기 문항(pick)
  const PICKQ = (prompt, good, bad, { d = 0.3, opt = {}, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'pick', cards: mix([good, bad]) }, opt), target: { pick: good }, difficulty: d }, more);
  // 갈림길(dilemma): 나무를 n 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  // 세 단계 갈림길: 쉬움 = 2단계로 자른 나무(p2 길), 기본 = 나무 전체(p3 길), 도전 = 나무 전체 + 다른 끝 장면 하나 더 가 보기
  const DIL3 = (prompt, scene, p2, p3, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const t = (p) => ({ path: p, reasons: good });
    return Object.assign({ prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: t(p3), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: t(p2) },
        challenge: { prompt: pfx(prompt, '다른 끝 장면도 하나 더 가 보기'), toolOptions: { revealAfterCheck: true }, target: Object.assign(t(p3), { explore: 2 }) } } }, more);
  };
  // 열린 토론 갈림길: 어느 길로 가도 되고, 근거 카드만 따진다(some = 근거다운 카드 하나 이상, 함정 없이)
  const OPENQ = (prompt, scene, reasons, good, { d = 0.35, opt = {}, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: { reasons: good, some: true }, difficulty: d }, more);
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 거북이 코딩판(block-coding build): board = 판 옵션, easy/challenge = { prompt?, board?, target? }
  const BCQ = (prompt, board, target, { easy = null, challenge = null, d = 0.35, more = {} } = {}) => {
    const it = { prompt, toolOptions: Object.assign({}, board), target: Object.assign({ reach: true }, target), difficulty: d, levels: {} };
    const lv = (x) => Object.assign({}, x.prompt ? { prompt: x.prompt } : {}, x.board ? { toolOptions: x.board } : {}, x.target ? { target: Object.assign({ reach: true }, x.target) } : {});
    if (easy) it.levels.easy = lv(easy);
    if (challenge) it.levels.challenge = lv(challenge);
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 거북이 코딩판(block-coding trace): 주어진 프로그램을 따라가 거북이가 멈출 칸 고르기
  const TRACEQ = (prompt, board, program, end, { d = 0.3, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'trace', program }, board), target: { end }, difficulty: d }, more);
  // 점검표(kitchen checklist): items = [[id, 글, 넣을지]…]
  const CHECKQ = (prompt, title, items, { k = 0, d = 0.3, more = {} } = {}) => {
    const mk = (xs) => ({ mode: 'checklist', title, items: xs.map(([id, text]) => ({ id, text })) });
    const it = { prompt, toolOptions: mk(items), target: { checklist: items.filter((x) => x[2]).map((x) => x[0]) }, difficulty: d };
    if (k) { const e = items.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `항목 ${k}개`), toolOptions: mk(e), target: { checklist: e.filter((x) => x[2]).map((x) => x[0]) } } }; }
    return Object.assign(it, more);
  };
  // 기준표 글쓰기: 쉬움 = 문장 틀(starter)·쉬운 문장 수, 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, easySent = null, easyPrompt = null, sample = null, plus = null, d = 0.4, more = {} } = {}) => {
    const t = (cs, s) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, s ? { sentences: s } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks, sent), difficulty: d, levels: {} };
    if (starter || easySent) it.levels.easy = Object.assign({}, easyPrompt ? { prompt: easyPrompt } : {}, starter ? { toolOptions: { starter } } : {}, easySent ? { target: t(checks, easySent) } : {});
    if (plus) it.levels.challenge = { prompt: pfx(prompt, '기준 하나 더'), target: t([...checks, plus], sent) };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 짝·모둠이 말로 하는 문항(교구 판에 '해 보았어요' 표시 하나)
  const DONEQ = (prompt, title, label, more = {}) => Object.assign({ prompt, free: true, toolOptions: { title, doneLabel: label } }, more);
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };
  const HELP = '[학교가 확인해 넣는 지역 상담 기관]';

  const MODS = [];

  // ======================================================================================================
  // 1. 나의 디지털 웰빙 설계 (10학년)
  // ======================================================================================================
  {
    const M = MOD('wellbeing-design', [10]);
    const SIG = ['조절 실패', '현저성', '문제적 결과'];
    const SIG_CARDS = [
      ['30분만 하려다 매번 두 시간을 넘긴다', '끄자고 마음먹어도 곧 다시 화면을 켠다', '줄이려고 세 번 계획했지만 번번이 못 지켰다'],
      ['폰이 없으면 불안해서 수업 내용이 안 들어온다', '밥을 먹으면서도 머릿속이 화면 생각으로 가득하다', '알림이 없으면 고장 났나 싶어 자꾸 확인한다'],
      ['밤늦게까지 쓰다 이번 달 지각이 잦아졌다', '성적이 떨어졌는데도 쓰는 시간이 그대로다', '가족과 사용 문제로 자주 다툰다'],
    ];
    // 환경 설계 갈림길(가상 인물 하린, 시험 4주 전)
    const ENV = { text: '10학년 하린은 시험 4주 전 공부 자리를 고른다. 폰은 숙제 자료 확인과 가족 연락에 필요하다.', who: '하린', motif: 'house', choices: [
      { id: 'room', text: '자취방 책상 — 혼자, 폰은 책상 위', result: '조용하지만 손 닿는 곳에 폰이 있다.', impact: [{ who: '하린', text: '집중을 끊는 것이 바로 옆에 있다', tone: 0 }],
        next: { text: '첫 주, 공부하는 동안 알림이 20분마다 울린다.', choices: [
          { id: 'charger', text: '폰을 방 밖 충전대에 두고 쉬는 시간에만 본다', result: '처음 이틀은 불안했지만 셋째 날부터 집중 구간이 길어진다.', impact: [{ who: '하린', text: '공부 흐름이 덜 끊긴다', tone: 1 }],
            next: { text: '둘째 주, 숙제 자료를 폰으로 찾아야 한다.', choices: [
              { id: 'batch', text: '자료는 정한 시간에 몰아 찾고 다시 충전대에 둔다', result: '자료도 찾고 자리 규칙도 지킨다.', impact: [{ who: '하린', text: '폰을 끊지 않고도 공부 시간을 되찾는다', tone: 1 }], ending: '한 달 뒤, 자리를 바꾼 규칙이 의지보다 오래 간다.' },
              { id: 'back', text: '자료 찾으러 든 김에 책상 위에 다시 둔다', result: '다음 날부터 다시 알림마다 손이 간다.', impact: [{ who: '하린', text: '처음 상태로 돌아간다', tone: -1 }], ending: '한 달 뒤, 예외 한 번에 자리 규칙이 무너진다.' }] } },
          { id: 'will', text: '폰을 엎어 두고 의지로 참는다', result: '진동이 울릴 때마다 손이 간다.', impact: [{ who: '하린', text: '참느라 지치고 공부도 끊긴다', tone: -1 }],
            next: { text: '둘째 주, 하루 계획의 절반을 못 지킨다.', choices: [
              { id: 'move', text: '이제라도 폰을 방 밖에 두기로 바꾼다', result: '셋째 주부터 계획을 지키는 날이 늘어난다.', impact: [{ who: '하린', text: '늦었지만 흐름을 되찾는다', tone: 1 }], ending: '한 달 뒤, 의지보다 자리가 셌다는 것을 안다.' },
              { id: 'quit', text: '폰을 아예 끊겠다고 선언한다', result: '가족 연락·숙제 자료가 막혀 사흘 만에 다시 켠다.', impact: [{ who: '하린', text: '되돌아온 뒤 쓰는 시간이 오히려 는다', tone: -1 }], ending: '한 달 뒤, 완전히 끊는 계획은 필요한 쓰임까지 막아 오래 못 간다.' }] } }] } },
      { id: 'reading', text: '독서실 — 폰은 들어갈 때 사물함에', result: '자리에서 폰이 멀어진다.', impact: [{ who: '하린', text: '손 닿는 곳에 폰이 없다', tone: 1 }],
        next: { text: '첫 주, 친구 단체방에서 시험 범위 소식이 오간다는 말을 듣는다.', choices: [
          { id: 'break', text: '쉬는 시간 10분에만 사물함에서 꺼내 본다', result: '소식은 놓치지 않고 공부 흐름도 이어진다.', impact: [{ who: '하린', text: '연락과 공부를 함께 지킨다', tone: 1 }],
            next: { text: '둘째 주, 쉬는 시간 10분이 30분으로 늘어나기 시작한다.', choices: [
              { id: 'timer', text: '쉬는 시간에 타이머를 맞추고 끝나면 다시 넣는다', result: '쉬는 시간이 다시 10분으로 돌아온다.', impact: [{ who: '하린', text: '규칙을 점검하고 고친다', tone: 1 }], ending: '한 달 뒤, 점검하고 고친 규칙이 지켜진다.' },
              { id: 'drift', text: '조금 늘어난 건 괜찮다며 그냥 둔다', result: '쉬는 시간이 날마다 조금씩 더 길어진다.', impact: [{ who: '하린', text: '계획이 흐지부지된다', tone: -1 }], ending: '한 달 뒤, 쉬는 시간이 공부 시간만큼 길어진다.' }] } },
          { id: 'desk', text: '불안해서 폰을 책상 위로 가져온다', result: '사물함에 둔 효과가 사라진다.', impact: [{ who: '하린', text: '다시 알림에 끌려간다', tone: -1 }],
            next: { text: '둘째 주, 단체방 알림 때문에 공부가 자주 끊긴다.', choices: [
              { id: 'mute', text: '단체방 알림을 끄고 시간을 정해 몰아 본다', result: '소식은 하루 두 번 몰아서 확인한다.', impact: [{ who: '하린', text: '공부 흐름을 되찾는다', tone: 1 }], ending: '한 달 뒤, 알림 설정 하나가 공부 시간을 늘린다.' },
              { id: 'reply', text: '알림을 그대로 두고 그때그때 답한다', result: '답하느라 공부가 계속 끊긴다.', impact: [{ who: '하린', text: '계획한 공부를 못 마친다', tone: -1 }], ending: '한 달 뒤, 공부 흐름이 계속 끊긴 채로 시험을 맞는다.' }] } }] } },
      { id: 'living', text: '가족 거실 식탁 — 폰은 가족 충전 바구니에', result: '가족과 함께 폰을 바구니에 둔다.', impact: [{ who: '가족', text: '함께 규칙을 지켜 본다', tone: 1 }],
        next: { text: '첫 주, 동생이 거실에서 영상을 크게 틀어 둔다.', choices: [
          { id: 'ask', text: '가족에게 공부 시간에는 소리를 줄여 달라고 부탁한다', result: '가족이 저녁 8~10시를 조용한 시간으로 정한다.', impact: [{ who: '가족', text: '모두의 저녁 시간이 정리된다', tone: 1 }],
            next: { text: '둘째 주, 가족 모두 바구니 규칙을 지키기 어려워한다.', choices: [
              { id: 'review', text: '가족이 함께 점검표를 붙이고 주말에 돌아본다', result: '지킨 날과 못 지킨 날을 보고 규칙을 고친다.', impact: [{ who: '가족', text: '규칙이 집 안 습관이 된다', tone: 1 }], ending: '한 달 뒤, 가족 모두의 저녁 화면 시간이 줄어든다.' },
              { id: 'alone', text: '나만 지키면 된다며 혼자 지킨다', result: '바구니가 점점 비어 간다.', impact: [{ who: '하린', text: '혼자 지키기가 점점 힘들다', tone: -1 }], ending: '한 달 뒤, 바구니 규칙이 흐지부지된다.' }] } },
          { id: 'music', text: '이어폰을 끼고 폰으로 음악을 고르며 공부한다', result: '음악을 고르느라 폰을 자꾸 만진다.', impact: [{ who: '하린', text: '바구니 규칙이 깨진다', tone: -1 }],
            next: { text: '둘째 주, 음악을 고르다 영상으로 넘어가는 일이 잦다.', choices: [
              { id: 'list', text: '목록 하나만 틀어 두고 폰은 바구니에 둔다', result: '음악은 이어지고 손은 폰에서 멀어진다.', impact: [{ who: '하린', text: '집중 시간이 늘어난다', tone: 1 }], ending: '한 달 뒤, 고를 일을 미리 줄인 것이 집중을 지킨다.' },
              { id: 'video', text: '영상도 쉬는 시간이라며 그냥 본다', result: '쉬는 시간과 공부 시간의 경계가 사라진다.', impact: [{ who: '하린', text: '공부 시간이 줄어든다', tone: -1 }], ending: '한 달 뒤, 공부 시간이 처음보다 줄어든다.' }] } }] } }] };
    const ENV_P2 = [['room', 'charger'], ['reading', 'break'], ['living', 'ask']];
    const ENV_P3 = [['room', 'charger', 'batch'], ['room', 'will', 'move'], ['reading', 'break', 'timer'], ['reading', 'desk', 'mute'], ['living', 'ask', 'review'], ['living', 'music', 'list']];
    const ENV_R = [
      { id: 'place', text: '의지보다 기기의 자리·알림 같은 환경이 행동을 바꾼다' },
      { id: 'keep', text: '필요한 쓰임은 남기고 시간과 자리를 정한다' },
      { id: 'check', text: '규칙은 점검하고 고쳐야 오래 간다' },
      { id: 'quit', text: '스마트폰을 완전히 끊어야만 건강해진다', why: '연락·자료처럼 필요한 쓰임까지 막으면 오래 못 가요. 줄이고 정하는 쪽이 지켜져요.' },
      { id: 'strong', text: '의지가 강한 사람은 환경을 바꿀 필요가 없다', why: '누구에게나 손 닿는 알림은 끌림이 돼요. 환경을 바꾸는 것도 의지를 쓰는 방법이에요.' }];
    const ENV_GOOD = ['place', 'keep', 'check'];
    // 공부할 방이 없을 때(열린 토론 갈림길)
    const SHARE = { text: '도윤의 집은 방 하나를 동생과 함께 쓴다. 거실에는 늘 TV가 켜져 있고, 폰을 둘 따로 자리가 없다.', who: '도윤', motif: 'house', choices: [
      { id: 'library', text: '하교 뒤 공공 도서관에서 두 시간 공부하고 들어간다', result: '이동 시간이 들지만 폰은 가방 깊이 넣어 둔다.', impact: [{ who: '도윤', text: '집 밖에서 환경을 만든다', tone: 1 }], ending: '바꿀 수 없는 집 대신 쓸 수 있는 다른 자리를 찾았다.' },
      { id: 'family', text: '가족과 저녁 한 시간만 TV·폰을 끄는 시간을 정한다', result: '가족 모두 조금씩 불편하지만 한 시간은 조용해진다.', impact: [{ who: '가족', text: '함께 쓰는 공간의 규칙이 생긴다', tone: 1 }], ending: '혼자 못 바꾸는 환경은 함께 바꿀 수 있다.' },
      { id: 'setting', text: '자리는 그대로 두고 알림 끄기·집중 모드 같은 설정을 바꾼다', result: '자리는 그대로지만 폰이 덜 울린다.', impact: [{ who: '도윤', text: '바꿀 수 있는 것부터 바꾼다', tone: 0 }], ending: '설정도 환경의 한 부분이다.' }] };
    const SHARE_R = [
      { id: 'what', text: '내가 바꿀 수 있는 환경부터 찾는다' },
      { id: 'together', text: '함께 쓰는 공간은 함께 규칙을 정한다' },
      { id: 'set', text: '자리를 못 바꾸면 설정을 바꿀 수 있다' },
      { id: 'blame', text: '환경이 나쁘면 어차피 소용없다', why: '바꿀 수 있는 것은 늘 남아 있어요 — 자리, 시간, 설정, 함께 정하는 규칙.' }];
    // 24시간 블록(가상 인물 도윤의 평일 — 블록 시간은 우리 반 연습 값)
    const DAY = ['수면', '학습', '관계', '여가·화면'];
    const DAY_CARDS = [
      ['밤 11시~아침 6시 반 잠', '점심 뒤 15분 엎드려 쉬기'],
      ['학교 수업 7시간', '저녁 자습 2시간'],
      ['가족과 저녁 식사 40분', '친구와 고민 통화 20분'],
      ['잠들기 전 영상 1시간', '등굣길 짧은 영상 20분']];
    const EXAM = [['잠들기 전 영상 1시간', '30분으로 줄이고 거실에서 본다'], ['등굣길 짧은 영상 20분', '단어장 보기로 바꾼다'], ['저녁 자습 2시간', '3시간으로 늘린다'], ['밤 11시~아침 6시 반 잠', '그대로 지킨다']];
    const BUDGET_STEPS = ['하루를 30분 단위로 기록한다', '잠·수업처럼 꼭 지킬 시간을 먼저 넣는다', '관계·운동 시간을 넣는다', '남은 시간에서 화면 여가를 정한다', '한 주 뒤 지켰는지 점검하고 고친다'];
    // 수거 토론(찬반 근거)
    const PRO = ['수업 중 알림이 집중을 끊지 않는다', '쉬는 시간에 얼굴 보고 이야기할 기회가 는다', '수업 중 몰래 촬영하는 일을 줄일 수 있다'];
    const CON = ['스스로 조절하는 연습 기회가 줄어든다', '수업 활동에 기기가 필요할 때가 있다', '등하굣길 가족 연락이 필요한 학생이 있다'];
    const NOT = ['요즘 학생들은 다 중독이라 걷어야 한다', '선생님이 편하려고 만든 규칙일 뿐이다'];
    // 가상 사용 비율(하루 4시간 = 240분, 가상 자료)
    const USE = [['영상', 40], ['메신저', 20], ['게임', 15], ['학습', 10], ['음악', 10], ['기타', 5]];
    const PIE = (more = {}) => Object.assign({ type: 'circle', mode: 'read', title: '서아의 하루 앱 범주별 사용 비율(가상 자료, 하루 240분)', unit: '%', data: USE }, more);
    // 친구에게 건네는 말(정리)
    const FRIEND = { text: '같은 반 준이 요즘 1교시마다 엎드려 자고, 단체방에는 새벽 3시에도 답이 온다. 쉬는 시간에 준이 "나 요즘 좀 이상한가?"라고 묻는다.', who: '준', motif: 'cloud', choices: [
      { id: 'blame', text: '"너 완전 중독이야, 폰 좀 그만해"라고 말한다', result: '준이 굳은 얼굴로 "됐어"라며 자리를 뜬다.', impact: [{ who: '준', text: '부끄러워 더 숨긴다', tone: -1 }], ending: '꼬리표를 붙이는 말은 도움을 청하려던 마음을 닫는다.' },
      { id: 'ignore', text: '"다들 그래, 신경 쓰지 마"라고 넘긴다', result: '준은 고개를 끄덕이지만 생활은 그대로다.', impact: [{ who: '준', text: '도움 받을 기회를 놓친다', tone: -1 }], ending: '가볍게 넘기면 스스로 물어본 용기가 사라진다.' },
      { id: 'care', text: '"요즘 많이 피곤해 보여서 걱정됐어. 같이 방법 찾아볼래?"라고 말한다', result: '준이 "밤에 자꾸 손이 가"라고 털어놓는다.', impact: [{ who: '준', text: '걱정을 들으니 마음이 열린다', tone: 1 }],
        next: { text: '준이 "그런데 상담실 가는 건 좀 그래"라며 망설인다.', choices: [
          { id: 'together', text: '상담실에 같이 가 주겠다고 하고, 지역 상담 기관도 있다고 알려 준다', result: '준이 이번 주에 상담 선생님을 만나 보기로 한다.', impact: [{ who: '준', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '걱정을 전하고, 도움받을 곳까지 함께 잇는다.' },
          { id: 'secret', text: '"그럼 우리끼리만 알고 있자"며 더는 말하지 않는다', result: '준의 밤은 그대로 이어진다.', impact: [{ who: '준', text: '혼자 감당한다', tone: -1 }], ending: '친구 혼자서는 다 도울 수 없다 — 어른과 기관을 잇는 것도 돕는 일이다.' }] } }] };
    const FRIEND_R = [{ id: 'worry', text: '탓하지 않고 걱정을 전한다' }, { id: 'link', text: '상담실·지역 상담 기관으로 함께 잇는다' }, { id: 'label', text: '중독이라고 분명히 말해 줘야 정신을 차린다', why: '꼬리표는 부끄러움을 키워 더 숨기게 해요. 행동과 걱정을 말해요.' }];

    MODS.push(
      M({
        id: 'intro.three-signal', type: 'intro', title: '과의존 세 신호로 사례 진단',
        method: '세 가지 신호로 사례 진단', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 사례 여섯(신호마다 둘)만 바구니에 넣어 보이며 신호 이름을 함께 붙인다.', base: '사례 아홉을 조절 실패·현저성·문제적 결과 바구니에 나누는 시연을 보고, 신호마다 근거가 된 말을 짚는다.', challenge: '두 신호에 걸쳐 보이는 사례(예: 성적이 떨어졌는데도 그대로)를 들어 어느 바구니가 더 알맞은지 토론한다.' },
        intro: {
          teacher: '"오래 쓰면 과의존일까요? 오늘은 시간보다 세 가지 신호를 봐요. 줄이려 해도 안 되는 것(조절 실패), 머릿속에서 가장 앞자리를 차지하는 것(현저성), 생활에 문제가 생겼는데도 이어지는 것(문제적 결과)." 시연 단추로 가상 사례 카드가 세 바구니에 들어가는 모습을 보여 준다. "하루 세 시간 넘으면 무조건 중독이죠?"라는 말이 나오면 "공부 자료를 세 시간 찾은 사람과, 30분만 하려다 매번 두 시간을 넘기는 사람 가운데 신호가 보이는 쪽은 어디일까요?"라고 되묻는다. 오늘 사례는 모두 가상 인물이고, 내 사용 시간을 발표하지 않는다고 먼저 밝힌다.',
          student: '가상 인물들의 사례를 조절 실패·현저성·문제적 결과 바구니에 나누어 보세요. 사용 시간이 아니라 어떤 신호가 보이는지가 기준이에요.',
          demo: { tool: 'sortboard', options: { slots: SIG, cards: mix(SIG_CARDS) }, sequence: [{ sort: Object.fromEntries(SIG.map((s, i) => [s, SIG_CARDS[i]])) }] },
          art: { draw: 'three paper baskets on a wooden paper shelf labelled with small paper tags, folded paper note cards flying toward them, a paper smartphone with a tangled paper string around it at the side, soft pastel layers', banner: '시간보다 신호를 본다', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 가상이다. 학생에게 자기 사용 시간이나 진단 결과를 말하게 하지 않는다. 세 신호의 틀은 머리 주석 \'사람 확인\'의 공식 척도로 확인한다.',
      }),
      M({
        id: 'intro.claim-check', type: 'intro', title: '디톡스 주장, 사실·의견 가르기',
        method: '"디지털 디톡스" 주장 사실·의견 가르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 문장 넷(사실·의견·확인 필요)을 함께 나누며 \'확인 필요\'의 뜻을 짚는다.', base: '문장 여섯을 사실·의견·확인 필요로 나누는 시연을 보고 가르는 기준을 말한다.', challenge: '\'확인 필요\' 문장 하나를 골라 무엇을 찾아보면 확인되는지(조사 대상·비교 집단·출처) 말한다.' },
        intro: {
          teacher: '"가상 광고 하나와 가상 기사 하나를 가져왔어요. \'디지털 디톡스 캠프 사흘이면 집중력이 두 배!\' 이 문장은 사실일까요, 의견일까요?" 시연 단추로 문장 카드가 사실·의견·확인 필요로 나뉘는 모습을 보여 준다. "숫자가 들어 있으면 사실이죠?"라는 말이 나오면 "누가, 몇 명을, 무엇과 비교해 잰 숫자인지 적혀 있나요? 적혀 있지 않으면 아직 확인이 필요한 주장이에요"라고 되묻는다. 끊어야만 건강해진다는 말은 사실이 아니라 의견이라는 점도 짚는다.',
          student: '디톡스 광고·기사 속 문장을 사실·의견·확인 필요로 나누어 보세요. 숫자가 있어도 누가 어떻게 잰 것인지 모르면 확인 필요예요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['사실', '의견', '확인 필요'], cards: ['학교는 학기마다 과의존 예방교육을 한다', '디톡스는 모든 사람에게 꼭 필요하다', '사흘이면 집중력이 두 배로 오른다', '캠프 일정표에 사흘 동안 기기를 맡긴다고 적혀 있다', '폰을 끊어야만 진짜 건강해진다', '참가자 모두 사용 시간이 절반으로 줄었다'] },
            sequence: [{ sort: { 사실: ['학교는 학기마다 과의존 예방교육을 한다', '캠프 일정표에 사흘 동안 기기를 맡긴다고 적혀 있다'], 의견: ['디톡스는 모든 사람에게 꼭 필요하다', '폰을 끊어야만 진짜 건강해진다'], '확인 필요': ['사흘이면 집중력이 두 배로 오른다', '참가자 모두 사용 시간이 절반으로 줄었다'] } }] },
          art: { draw: 'a paper newspaper page and a bright paper advertisement flyer pinned side by side, a paper magnifying glass hovering over a bold number, three small paper trays below, layered pastel paper', banner: '숫자가 있으면 사실일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '광고·기사·캠프는 가상이다. 특정 업체를 다루지 않는다. 교구 한계: wordcards 는 영어 낱말 교구라 소리 없는 sort(공통 카드 판)로만 쓴다.',
      }),

      M({
        id: 'activity.env-design', type: 'activity', title: '공부 자리를 고르는 갈림길',
        method: '환경 설계 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '하린의 갈림길을 2단계(공부 자리 → 첫 주 선택)로 줄여 따라가고 근거 카드를 고른다.', base: '하린의 갈림길을 3단계(공부 자리 → 첫 주 → 둘째 주)로 끝까지 가 한 달 뒤 결과를 보고, 다른 길과 견주고, 공부할 방이 없는 도윤의 열린 갈림길에서 근거를 고른다.', challenge: '첫 문항에서 다른 끝 장면 하나를 더 가 본 뒤 근거를 고르고, 두 길의 한 달 뒤 차이를 활동지에 쓴다.' },
        activity: {
          title: '하린의 한 달', tool: 'dilemma',
          teacher: '"하린은 시험 4주 전이에요. 자취방, 독서실, 가족 거실 가운데 어디서든 시작할 수 있어요. 어느 자리를 골랐느냐보다, 그 자리에서 폰을 어디에 두고 알림을 어떻게 했느냐가 한 달 뒤를 바꿔요." 선택마다 결과 글을 소리 내어 읽게 한다. \'폰을 아예 끊는다\'를 고른 학생에게 "가족 연락과 숙제 자료는 어떻게 했나요? 사흘 뒤 어떻게 됐죠?"라고 묻는다. "의지만 있으면 되잖아요"라는 말에는 "엎어 둔 폰이 진동할 때 하린은 어땠나요? 의지를 쓰는 가장 쉬운 방법이 자리를 바꾸는 것이에요"라고 답한다. 끊기가 아니라 자리·시간·설정을 정하는 것이 오늘의 요점이다.',
          task: '하린의 공부 자리 갈림길을 따라가 한 달 뒤 결과를 보고, 내 선택의 근거 카드를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('하린의 공부 자리를 골라 끝까지 따라가고, 한 달 뒤에도 지켜지는 길과 그 근거 카드를 고르세요(어느 자리에서 시작해도 돼요).', ENV, ENV_P2, ENV_P3, ENV_R, ENV_GOOD, { d: 0.4, opt: { title: '하린의 한 달' },
              more: { hints: ['폰을 끊었는지가 아니라, 폰이 어디에 있고 규칙을 점검했는지 보세요.'], conclude: '자리를 바꾸고, 필요한 쓰임은 남기고, 한 주마다 점검해 고친 길이 한 달 뒤에도 지켜져요.' } }),
            EXPLOREQ('하린의 갈림길에서 서로 다른 끝 장면 둘을 가 보고 한 달 뒤 결과를 견주세요.', ENV, ENV_R, ['두 길의 끝 장면을 모두 확인했다', '한 달 뒤 공부 시간이 달라진 까닭을 찾았다'], { d: 0.35,
              more: { conclude: '같은 자리에서 시작해도 둘째 주의 작은 선택(예외 한 번, 점검 한 번)이 한 달 뒤를 갈라요.' } }),
            OPENQ('도윤은 방을 동생과 함께 쓰고 거실에는 TV가 켜져 있어요. 도윤이 고를 길을 가 보고, 그 선택을 받쳐 줄 근거 카드를 고르세요.', SHARE, SHARE_R, ['what', 'together', 'set'], { d: 0.35, opt: { title: '방이 없는 도윤' },
              more: { conclude: '환경 설계는 좋은 방을 가진 사람만의 일이 아니에요. 자리·시간·설정·함께 정하는 규칙 가운데 바꿀 수 있는 것부터 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 공부 환경에서 바꿀 수 있는 것을 정리하세요(채점하지 않아요).', columns: ['바꿀 것', '지금', '바꾼 뒤'], cells: [['폰을 두는 자리', '', ''], ['알림 설정', '', ''], ['함께 정할 규칙', '', '']] }] },
        notes: '하린·도윤은 가상 인물이다. 내 공부 환경은 활동지에만 쓰고 발표하게 하지 않는다(집 환경이 드러나지 않게). 도윤 문항은 열린 갈림길이라 어느 길이든 근거다운 카드면 맞다.',
      }),
      M({
        id: 'activity.time-budget', type: 'activity', title: '도윤의 24시간 예산',
        method: '하루 시간 예산 설계', tool: 'economy', minutes: 18,
        levels: { easy: '첫 문항이 시간 블록 넷(분야마다 하나)으로 줄고, 둘째 문항이 시험 기간 바꾸기 둘로 준다.', base: '도윤의 평일 블록 여덟을 수면·학습·관계·여가·화면 칸에 나누고, 시험 기간에 블록을 어떻게 바꿀지 짝짓고, 예산 짜는 차례를 놓는다.', challenge: '헷갈리는 블록 둘이 더해지고, 활동지에 시험 기간 예산을 따로 만들어 평소와 견준다.' },
        activity: {
          title: '24시간 블록 예산', tool: 'economy',
          teacher: '"하루는 누구에게나 24시간, 돈처럼 더 빌릴 수 없는 예산이에요. 도윤의 평일 블록을 분야별로 나눠 보면 어디에 얼마를 쓰는지 보여요." 블록을 나눈 뒤 "잠·수업처럼 먼저 넣어야 할 블록은 무엇일까요?"라고 묻는다. 시험 기간 짝에서 \'잠을 줄인다\'를 고르려는 학생에게 "잠을 줄여 얻은 시간과 화면을 줄여 얻은 시간은 다음 날 똑같을까요?"라고 되묻는다. 화면 여가를 0으로 만드는 게 아니라 정해진 자리와 길이를 주는 것이 예산이라는 점을 짚는다. 블록 시간은 우리 반 연습 값이라고 밝힌다.',
          task: '도윤의 하루 블록을 분야별로 나누고, 시험 기간에 바꿀 블록을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('도윤의 평일 시간 블록을 수면·학습·관계·여가·화면 칸에 나누세요.', DAY, DAY_CARDS, { k: 1, hard: [[], ['학원 수업 2시간'], [], ['쉬는 시간마다 단체방 확인']], d: 0.25, opt: { trayLabel: '시간 블록' },
              more: { conclude: '나눠 보면 화면 여가가 하루 곳곳에 흩어져 있는 것이 보여요. 흩어진 시간은 모아서 정할 수 있어요.' } }),
            MATCHQ('시험 2주 전, 도윤이 블록을 어떻게 바꾸면 좋을지 짝지으세요(잠은 지켜요).', EXAM, { k: 2, extra: ['잠을 5시간으로 줄인다'], d: 0.3, opt: { trayLabel: '바꾸는 방법' },
              more: { hints: ['시험 기간에도 줄이지 않고 지켜야 할 블록이 무엇인지 먼저 정하세요.'], conclude: '시험 기간 예산은 잠을 빼서 만들지 않아요. 흩어진 화면 시간을 모으고 줄여 만들어요.' } }),
            ORDERQ('하루 시간 예산을 짜는 차례대로 놓으세요.', BUDGET_STEPS, { k: 3, traps: ['화면 시간부터 0으로 정한다'], d: 0.3, opt: { title: '예산 짜는 차례' },
              more: { conclude: '기록 → 꼭 지킬 시간 → 관계·운동 → 남은 시간의 여가 → 점검. 우선순위를 먼저 넣으면 화면 여가는 남은 자리에 맞춰 정해져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '평소와 시험 기간의 하루 예산을 견주어 보세요(내 기록은 채점하지 않아요).', columns: ['분야', '평소(시간)', '시험 기간(시간)', '바꾼 까닭'], cells: [['수면', '', '', ''], ['학습', '', '', ''], ['관계', '', '', ''], ['여가·화면', '', '', '']] }] },
        notes: '교구 한계: economy 는 돈(원)만 세어 시간 막대 대신 블록 카드 나누기·짝·차례로 했다. 블록 시간은 우리 반 연습 값이며 의학 기준이 아니다(머리 주석 \'사람 확인\'). 학생의 실제 하루는 활동지에만 쓴다.',
      }),
      M({
        id: 'activity.debate-ban', type: 'activity', title: '수업 중 스마트폰 수거 찬반',
        method: '찬반 토론: 학교 내 스마트폰 수거', tool: 'mindmap', minutes: 17,
        levels: { easy: '찬성·반대 가지에 근거 카드를 둘씩, 바로 피드백을 받으며 붙인다.', base: '찬성·반대 근거를 셋씩 붙이고(근거가 아닌 말은 남기고), 근거마다 반론을 잇고, 양쪽을 함께 살리는 대안을 고른다.', challenge: '헷갈리는 카드가 더해진 판을 나누고, 활동지에 두 입장을 모두 만족시키는 규칙 초안을 쓴다.' },
        activity: {
          title: '수거 토론 근거 그물', tool: 'mindmap',
          teacher: '"논제는 \'학교가 수업 중 스마트폰을 걷어야 한다\'예요. 오늘은 어느 쪽이 이기는지가 아니라 어느 근거가 단단한지를 따져요." 카드를 붙일 때마다 "이 근거는 누구에게 무엇이 좋아지거나 나빠진다는 말인가요?"라고 묻는다. \'요즘 학생들은 다 중독\' 카드를 찬성에 붙인 학생에게 "모두에게 꼬리표를 붙이는 말이 근거가 될까요? 오늘 배운 세 신호로 보면 어떤가요?"라고 묻는다. \'선생님이 편하려고\' 카드에는 "짐작이에요, 확인한 사실이에요?"라고 묻는다. 반론 잇기에서는 상대 근거를 인정하면서 답하는 말이 더 힘이 세다는 점을 보인다.',
          task: '수거 찬반 근거를 가지에 나누고, 근거마다 반론을 이어 보세요. 근거가 아닌 말은 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('수업 중 스마트폰 수거 찬성·반대 근거를 가지에 나누세요(근거가 아닌 말은 남겨요).', ['찬성 근거', '반대 근거'], [PRO, CON], { k: 2, traps: NOT, hard: [['시험 시간 부정행위 걱정을 덜 수 있다'], ['보관·분실 책임이 학교에 생긴다']], d: 0.3, opt: { topic: '수업 중 스마트폰 수거' },
              more: { hints: ['카드가 확인할 수 있는 결과를 말하는지, 사람에게 꼬리표를 붙이거나 짐작하는지 보세요.'] } }),
            MATCHQ('찬성 근거마다 그에 답하는 반대 측 반론을 짝지으세요.', [[PRO[0], '알림은 설정으로도 끌 수 있으니 스스로 조절을 배우게 하자'], [PRO[1], '폰이 있어도 대화하는 학생은 대화한다'], [PRO[2], '촬영 금지 규칙과 처리 절차로도 막을 수 있다']], { k: 2, extra: ['너희는 원래 말을 안 듣잖아'], d: 0.35, opt: { topic: '근거와 반론' },
              more: { conclude: '좋은 반론은 상대 근거가 가리키는 문제를 인정하고, 다른 해결 방법을 내놓아요.' } }),
            PICKQ('찬성과 반대의 걱정을 함께 살리는 대안만 고르세요.', ['수업 시간에만 교실 보관함에 두고 쉬는 시간에는 돌려받는다', '수업 활동에 필요할 때는 선생님 안내로 꺼낸다'], ['모든 학생의 폰을 한 학기 동안 걷는다', '규칙 없이 각자 알아서 쓴다'], { d: 0.35, opt: { topic: '양쪽을 살리는 대안', basket: '함께 살리는 대안' },
              more: { conclude: '찬반은 둘 중 하나만 고르는 일이 아니에요. 두 걱정(집중·조절 연습)을 함께 담은 조건이 학교 규칙이 될 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 규칙 초안을 써 보세요.', columns: ['언제', '어디에 두나', '예외(필요할 때)', '점검 방법'], cells: [['', '', '', '']] }] },
        notes: '찬반 어느 쪽도 정답이 아니다(근거다운 카드는 양쪽에 다 있다). 함정은 낙인·짐작뿐이다. 학교의 실제 휴대폰 규칙과 법령은 다루지 않으며, 규칙 초안을 학교에 낼 때는 교사가 함께 검토한다.',
      }),
      M({
        id: 'activity.usage-data', type: 'activity', title: '가상 사용 비율 원그래프 읽기',
        method: '가상 사용 통계 분석', tool: 'chart', minutes: 18,
        levels: { easy: '원그래프에 값이 보이는 채로 가장 큰 범주를 읽는다.', base: '상위 두 범주를 읽어 합을 구하고, 비율을 분으로 바꾸고, 표 빈칸을 채운다.', challenge: '값을 숨긴 그래프를 읽고, 활동지에 이 자료의 한계(하루치·스스로 적은 기록)와 보완할 자료를 쓴다.' },
        activity: {
          title: '서아의 하루 240분', tool: 'chart',
          teacher: '"가상 인물 서아가 하루 동안 쓴 240분을 앱 범주별로 나눈 원그래프예요. 실제 통계가 아니라 수업용 가상 자료예요." 먼저 가장 큰 조각을 읽고 "40%는 몇 분일까요?"라고 묻는다. "영상이 가장 크니까 영상만 없애면 되죠?"라는 말이 나오면 "영상 가운데 공부 영상도 섞여 있다면요? 범주만 보고는 무엇을 하며 썼는지 알 수 없어요"라고 되묻는다. 하루치 자료 하나로 습관을 단정하지 않고, 한 주 기록과 \'무엇을 하며\'를 함께 봐야 한다는 점을 짚는다.',
          task: '서아의 가상 사용 비율 원그래프를 읽고, 계획에서 줄일 범주를 근거와 함께 정해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '서아의 원그래프에서 가장 큰 범주를 고르세요.', toolOptions: PIE({ question: '가장 큰 범주는?', choices: USE.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '상위 두 범주를 합하면 하루 사용의 몇 %인지 수로 쓰세요.', toolOptions: PIE({ question: '상위 두 범주의 합(%)은?' }), target: { value: 60 }, difficulty: 0.25,
              hints: ['가장 큰 조각과 두 번째로 큰 조각의 백분율을 찾아 더하세요.'] },
            { prompt: '하루 240분 가운데 영상 범주는 몇 분인지 수로 쓰세요.', toolOptions: PIE({ question: '영상 범주는 몇 분?' }), target: { value: 96 }, difficulty: 0.35,
              hints: ['240분에 그 범주의 백분율을 곱해요. 10%는 24분이에요.'], conclude: '비율을 분으로 바꾸면 계획이 구체적이 돼요. 96분 가운데 몇 분을 어디로 옮길지 정할 수 있어요.' },
            { prompt: '그래프를 읽고 표의 빈칸(메신저·학습의 비율)을 채우세요.', toolOptions: PIE({ showTable: true, tableBlanks: [1, 3] }), target: { table: true }, difficulty: 0.25 },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 자료만으로 서아의 습관을 판단하기 어려운 까닭 하나와, 함께 보면 좋을 자료 하나를 쓰세요.' }] },
        notes: '자료는 가상이다(화면 제목에 밝힘). 학생의 실제 사용 비율을 발표하거나 채점하지 않는다.',
      }),

      M({
        id: 'wrap.plan-doc', type: 'wrap', title: '나의 디지털 웰빙 계획서',
        method: '디지털 웰빙 계획서', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 문장 틀(목표·환경·점검)을 칠판에 보이고 세 문장으로 쓰게 한다.', base: '목표·환경·설정·관계·점검 방법을 담은 다섯 문장을 쓰고 기준표(측정 가능·현실성·대안·점검일)로 점검한다.', challenge: '\'계획이 안 지켜진 날 어떻게 고칠지\' 수정 규칙 한 문장을 활동지에 더한다.' },
        wrap: {
          teacher: '"오늘 본 세 신호와 하린·도윤의 갈림길을 떠올리며 나의 계획서를 써요. 목표, 바꿀 환경, 바꿀 설정, 함께할 사람, 점검하는 날까지 다섯 문장이에요." \'폰을 줄인다\'처럼 쓴 학생에게 "다음 주에 지켰는지 어떻게 알 수 있을까요? 언제, 어디서, 얼마나를 넣어 볼까요?"라고 묻는다. \'폰을 끊는다\'고 쓴 학생에게는 하린의 \'사흘 뒤\'를 떠올리게 한다. 계획서는 채점하지 않고 기준표로 스스로 점검하며, 내 사용 시간을 쓰지 않아도 된다고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '나의 디지털 웰빙 계획을 다섯 문장으로 쓰세요: 목표, 바꿀 환경, 바꿀 설정, 함께할 사람, 점검하는 날.', minChars: 80, maxChars: 500, starter: '목표: ~. 환경: 폰을 ~에 둔다. 설정: ~. 함께: ~와 ~. 점검: ~요일에 ~로 확인한다.' }, prompt: '디지털 웰빙 계획서를 다섯 문장으로 쓰고 기준표로 점검하세요.', target: { selfCheck: ['지켰는지 확인할 수 있게 썼다', '내가 실제로 할 수 있는 계획이다', '끊기 대신 바꿀 자리·설정을 썼다', '점검하는 날을 정했다'], sentences: [4, 6] }, difficulty: 0.25 },
            { type: 'choice', prompt: '다음 가운데 점검하기 가장 좋은 계획 문장은?', options: ['폰을 덜 쓰도록 노력한다', '평일 밤 10시에는 폰을 거실 충전대에 두고, 일요일에 지킨 날을 센다', '오늘부터 폰을 완전히 끊는다'], answer: 1, difficulty: 0.15, explain: '언제·어디서·어떻게 확인할지가 들어 있어야 다음 주에 지켰는지 알 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 디지털 웰빙 계획서',
          items: [
            { type: 'table', prompt: '계획서 다섯 칸을 채우세요.', columns: ['목표', '환경', '설정', '함께할 사람', '점검하는 날'], cells: [['', '', '', '', '']] },
            { type: 'short', prompt: '계획이 지켜지지 않은 날, 다음 날 어떻게 고칠지 수정 규칙 한 문장을 쓰세요.' },
          ],
        },
        notes: '계획서는 채점하지 않는다(기준표 스스로 점검). 학생의 실제 사용 시간이나 앱 이름을 쓰게 하지 않는다.',
      }),
      M({
        id: 'wrap.friend-help', type: 'wrap', title: '흔들리는 친구에게 건네는 말',
        method: '과의존 친구에게 건네는 말', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 장면의 세 말(비난·무시·걱정 전하기)만 함께 고르고 결과를 읽는다.', base: '세 말 가운데 하나를 골라 결과를 보고, 걱정을 전한 뒤 상담실·지역 상담 기관 잇기까지 2단계를 따라간다.', challenge: '친구가 상담실을 망설일 때의 다음 말을 활동지에 한 줄 더 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 신호가 친구에게 보인다면 어떻게 말할까요? 가상 인물 준이 먼저 \'나 요즘 좀 이상한가?\'라고 물었어요." 세 말을 소리 내어 읽고 고르게 한다. \'너 완전 중독이야\'를 고른 학생에게 "준은 왜 자리를 떴을까요? 꼬리표 대신 무엇을 말해 볼까요?"라고 묻는다. 끝 장면에서 \'우리끼리만 알자\'를 고른 학생에게는 "친구 혼자서 다 도울 수 있을까요?"라고 묻고, 상담실과 지역 상담 기관(학교가 확인한 곳)으로 함께 잇는 것도 돕는 일이라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'dilemma', options: { scene: FRIEND, reasons: FRIEND_R, title: '준에게 건네는 말' }, prompt: '준에게 건넬 말을 골라 끝까지 따라가고, 내 선택의 근거 카드를 고르세요.', target: { path: [['care', 'together']], reasons: ['worry', 'link'] }, difficulty: 0.2 },
            { type: 'short', prompt: `준이 상담실도 싫다고 할 때, 다음에 건넬 말 한 줄을 쓰세요(도움받을 곳: 학교 상담실·${HELP}).` },
            MOOD,
          ],
        },
        worksheet: {
          title: '흔들리는 친구에게',
          items: [
            { type: 'table', prompt: '세 가지 말이 친구에게 남기는 것을 정리하세요.', columns: ['말', '친구의 마음', '다음에 일어날 일'], cells: [['비난', '', ''], ['무시', '', ''], ['걱정 전하기', '', '']] },
            { type: 'short', prompt: `우리 학교에서 도움받을 곳을 쓰세요(학교 상담실, ${HELP}).` },
          ],
        },
        notes: `준은 가상 인물이다. 학생에게 실제 친구 이야기를 하게 하지 않는다. 지역 상담 기관 이름과 번호는 학교가 확인해 '${HELP}' 자리에 넣는다.`,
      }),
    );
  }

  // ======================================================================================================
  // 2. 게임과 도박성 콘텐츠의 경계 (11학년)
  // ======================================================================================================
  {
    const M = MOD('game-gamble', [11]);
    const PLAY = ['레벨을 올리면 정해진 보상을 받는다', '친구와 협동해 임무를 깬다', '연습한 만큼 실력이 는다', '시즌마다 새 지도가 열린다'];
    const GAMBLE = ['돈을 내고 확률로 아이템을 뽑는다', '10회 연속 뽑기를 사면 할인해 준다', '방송에서 경기 결과에 돈을 걸고 내기한다', '잃은 재화를 한 번에 되찾는 이벤트가 뜬다'];
    // 라이브 방송 후원 4컷(가상 방송)
    const CUTS = [
      { id: 'c1', text: '1컷: 방송인이 처음 온 시청자 이름을 불러 반긴다', motif: 'star' },
      { id: 'c2', text: '2컷: 후원 순위표가 화면 한쪽에 계속 떠 있다', motif: 'flower' },
      { id: 'c3', text: '3컷: "10분 안에 1등 하면 소원 들어준다"며 시간을 센다', motif: 'cloud' },
      { id: 'c4', text: '4컷: 시청자가 이번 달 용돈을 넘겨 또 후원한다', motif: 'rain' }];
    // 한 달 용돈 예산(가상)
    const BUS = { id: 'bus', text: '교통비(꼭 필요)', price: 20000 };
    const BOOK = { id: 'book', text: '문제집', price: 15000 };
    const MOVIE = { id: 'movie', text: '친구와 영화', price: 12000 };
    const SAVE = { id: 'save', text: '운동화 저축', price: 10000 };
    const G = (n) => ({ id: `g${n}`, text: `뽑기 ${n}회째`, price: 3000 });
    const G10 = { id: 'g10', text: '10회 연속 뽑기 묶음', price: 30000 };
    // 손실 쫓기 갈림길(가상 인물 시우)
    const CHASE = { text: '11학년 시우는 가상 게임의 한정 캐릭터를 뽑으려고 이번 달 용돈 5만 원 가운데 1만 5천 원을 썼다. 계속 꽝이다. "조금만 더 하면 나올 것 같다."', who: '시우', motif: 'cloud', choices: [
      { id: 'stop', text: '오늘 정한 한도에 닿았으니 여기서 멈춘다', result: '아쉽지만 남은 3만 5천 원은 그대로다.', impact: [{ who: '시우', text: '교통비와 문제집 돈이 남는다', tone: 1 }],
        next: { text: '다음 날, 친구가 "어제 나도 꽝이었는데 오늘 나왔어"라고 말한다.', choices: [
          { id: 'keep', text: '친구 말은 우연이라고 보고 어제의 한도를 지킨다', result: '시우는 이번 달 뽑기를 더 하지 않는다.', impact: [{ who: '시우', text: '한도가 이번 달 내내 지켜진다', tone: 1 }],
            next: { text: '한 달 뒤, 이벤트가 끝나고 한정 캐릭터가 사라졌다.', choices: [
              { id: 'accept', text: '아쉽지만 지킨 돈으로 친구와 영화를 본다', result: '캐릭터는 없지만 돈과 시간이 남았다.', impact: [{ who: '시우', text: '스스로 멈춘 경험이 남는다', tone: 1 }], ending: '멈춘 길은 잃을 것이 정해진 길이다.' },
              { id: 'regret', text: '"그때 더 했어야 했다"며 다음 이벤트에 두 배를 쓴다', result: '다음 달 용돈이 한 주 만에 바닥난다.', impact: [{ who: '시우', text: '잃은 것을 되찾으려는 마음이 커진다', tone: -1 }], ending: '아쉬움을 다음 판에서 되찾으려 하면 손실 쫓기가 다시 시작된다.' }] } },
          { id: 'retry', text: '"오늘은 나올 차례"라며 다시 뽑는다', result: '또 꽝이다. 이번 달 쓴 돈이 2만 4천 원이 된다.', impact: [{ who: '시우', text: '어제 지킨 한도가 무너진다', tone: -1 }], ending: '앞의 꽝은 다음 뽑기의 확률을 바꾸지 않는다.' }] } },
      { id: 'more', text: '"여기서 멈추면 쓴 돈이 아깝다"며 5번 더 뽑는다', result: '여전히 꽝이다. 쓴 돈이 3만 원이 된다.', impact: [{ who: '시우', text: '교통비가 모자라기 시작한다', tone: -1 }],
        next: { text: '남은 돈은 2만 원. 교통비로 딱 맞는 돈이다. 이벤트는 사흘 남았다.', choices: [
          { id: 'borrow', text: '친구에게 돈을 빌려 마지막으로 뽑는다', result: '마침내 캐릭터가 나왔지만 빌린 돈 1만 원이 남는다.', impact: [{ who: '친구', text: '돈 문제로 사이가 어색해진다', tone: -1 }],
            next: { text: '다음 달, 새 한정 캐릭터 이벤트가 열린다.', choices: [
              { id: 'again', text: '지난번처럼 하면 나온다며 또 시작한다', result: '빌린 돈을 갚기도 전에 용돈이 줄어든다.', impact: [{ who: '시우', text: '빚이 이어진다', tone: -1 }], ending: '한 번 나온 기억이 다음 손실을 부른다.' },
              { id: 'tell', text: '보호자에게 털어놓고 결제 한도를 함께 정한다', result: '빌린 돈을 갚을 계획을 세우고 결제 잠금을 건다.', impact: [{ who: '시우', text: '혼자 끊기 어려운 고리를 함께 끊는다', tone: 1 }], ending: '늦게라도 멈추고 도움을 청하면 고리를 끊을 수 있다.' }] } },
          { id: 'halt', text: '교통비는 건드리지 않기로 하고 지금 멈춘다', result: '캐릭터는 없지만 교통비는 지켰다.', impact: [{ who: '시우', text: '더 큰 손실은 막는다', tone: 1 }],
            next: { text: '사흘 동안 이벤트 알림이 계속 온다.', choices: [
              { id: 'off', text: '게임 알림을 끄고 결제 비밀번호를 보호자와 바꾼다', result: '알림이 멈추고 사흘이 지나간다.', impact: [{ who: '시우', text: '다시 시작할 틈이 줄어든다', tone: 1 }], ending: '멈춘 뒤에는 다시 끌려가지 않게 환경을 바꾼다.' },
              { id: 'peek', text: '알림을 그대로 두고 "보기만" 한다', result: '마지막 날 교통비 1만 원으로 뽑기를 한다.', impact: [{ who: '시우', text: '교통비가 모자란다', tone: -1 }], ending: '보기만 하겠다는 결심은 알림 앞에서 약하다.' }] } }] } }] };
    const CHASE_P2 = [['stop', 'keep'], ['more', 'halt']];
    const CHASE_P3 = [['stop', 'keep', 'accept'], ['more', 'borrow', 'tell'], ['more', 'halt', 'off']];
    const CHASE_R = [
      { id: 'indep', text: '앞의 꽝은 다음 뽑기의 확률을 바꾸지 않는다' },
      { id: 'limit', text: '미리 정한 돈·시간 한도에서 멈춘다' },
      { id: 'help', text: '혼자 끊기 어려우면 보호자·상담실에 알린다' },
      { id: 'sunk', text: '여기서 멈추면 쓴 돈이 아깝다', why: '이미 쓴 돈은 더 뽑아도 돌아오지 않아요. 아깝다는 마음이 손실 쫓기를 부르는 함정이에요.' },
      { id: 'turn', text: '꽝이 많았으니 이제 나올 차례다', why: '뽑기마다 확률은 같아요. 꽝이 쌓였다고 다음에 나올 가능성이 커지지 않아요.' }];
    const CHASE_GOOD = ['indep', 'limit', 'help'];
    // 가상 확률 공개표
    const PROB = [['일반', 70], ['고급', 20], ['희귀', 8], ['전설', 2]];
    const PBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '가상 게임 뽑기 등급별 확률(가상 자료)', unit: '%', xLabel: '등급', yLabel: '확률', data: PROB, scale: 10, max: 80 }, more);
    // 멈춤 규칙 판(별 = 한도 점검, 깃발 = 종료, 바위 = '한 판만 더')
    const STOP_BASE = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[2, 3], [4, 3]], rocks: [[1, 2], [3, 1]] };
    const STOP_EASY = { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[2, 1]], rocks: [] };
    // 도움 받을 곳 지도(가상)
    const TOWN = { title: '가상 학교와 동네', grid: [6, 4], places: [
      { name: '상담실', icon: 'house', at: [1, 0], legend: '학교 상담실' },
      { name: '보건실', icon: 'hospital', at: [3, 0], legend: '학교 보건실' },
      { name: '지역 상담 기관', icon: 'office', at: [5, 2], legend: `지역 상담 기관 ${HELP}` },
      { name: 'PC방', icon: 'market', at: [0, 3] },
      { name: '편의점', icon: 'market', at: [3, 3] }] };

    MODS.push(
      M({
        id: 'intro.feature-sort', type: 'intro', title: '놀이 요소와 도박성 요소',
        method: '게임 요소 분류', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 카드 다섯(레벨업·협동·확률 뽑기·연속 뽑기 할인·내기 방송)만 바구니에 넣어 보인다.', base: '카드 여덟을 놀이 요소·도박성 요소로 나누는 시연을 보고, 가른 기준(돈을 거는가·결과가 우연인가·잃은 것을 되찾게 부추기는가)을 말한다.', challenge: '기준이 갈리는 카드(무료 뽑기·시즌 패스)를 들어 어느 바구니가 맞는지 토론한다.' },
        intro: {
          teacher: '"게임은 다 도박 같은 거 아니에요?" 하는 말로 시작한다. "게임 안에도 놀이 요소와 도박성 요소가 섞여 있어요. 오늘 기준은 셋이에요. 돈이나 돈이 되는 것을 거는가, 결과가 실력이 아니라 우연으로 정해지는가, 잃은 것을 되찾고 싶게 부추기는가." 시연 단추로 카드가 두 바구니에 들어가는 모습을 보여 준다. "확률 뽑기도 결국 게임 아이템이니까 놀이죠?"라는 말에는 "돈을 내고, 무엇이 나올지 우연에 맡기고, 안 나오면 더 하게 되는 구조인가요?"라고 되묻는다. 게임 이름은 말하지 않는다.',
          student: '게임 요소 카드를 놀이 요소와 도박성 요소로 나누어 보세요. 돈을 거는지, 결과가 우연인지, 잃은 것을 되찾게 부추기는지 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['놀이 요소', '도박성 요소'], cards: mix([PLAY, GAMBLE]) }, sequence: [{ sort: { '놀이 요소': PLAY, '도박성 요소': GAMBLE } }] },
          art: { draw: 'a paper game controller on one side and a paper slot-machine lever with tumbling paper coins on the other, two paper baskets on a shelf between them, a dotted paper line dividing the scene', banner: '놀이와 내기의 경계는 어디일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '특정 게임 이름을 쓰지 않는다. 학생에게 자기 결제 경험을 묻지 않는다. 도박성 요소의 기준은 머리 주석 \'사람 확인\'의 공식 예방 자료로 확인한다.',
      }),
      M({
        id: 'intro.stream-scene', type: 'intro', title: '라이브 방송 후원 네 컷',
        method: '라이브 방송 후원 장면', tool: 'story', minutes: 7,
        levels: { easy: '교사가 압박이 가장 커지는 한 컷(시간을 세는 3컷)을 짚어 준다.', base: '네 컷 가운데 압박이 커지는 두 컷(순위표·시간 세기)을 고르는 시연을 보고 그 까닭을 말한다.', challenge: '압박 장치마다 이름을 붙인다(순위 경쟁·시간 압박·호명 보상).' },
        intro: {
          teacher: '"가상 라이브 방송의 네 컷이에요. 시청자 \'별\'은 처음에 그냥 구경하러 들어왔어요." 컷을 차례로 읽는다. 시연 단추로 압박이 커지는 두 컷을 바구니에 넣어 보인다. "후원은 자기 돈으로 하는 건데 무슨 문제예요?"라는 말에는 "자기 돈인 건 맞아요. 그런데 순위표와 \'10분 안에\'가 없었다면 별은 용돈을 넘겨 후원했을까요?"라고 되묻는다. 후원 자체가 아니라, 판단할 틈을 빼앗는 장치를 알아보는 것이 오늘의 요점이다. 실제 방송인·채널 이름은 말하지 않는다.',
          student: '가상 방송의 네 컷을 보고, 시청자가 스스로 멈추기 어려워지는 압박이 커지는 컷을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', title: '가상 라이브 방송', basket: '압박이 커지는 컷', cards: CUTS }, sequence: [{ pick: ['c2', 'c3'] }] },
          art: { draw: 'a paper screen showing a cheerful paper streamer figure, a paper leaderboard ribbon on the side, a big paper countdown clock above, small paper hearts and coins floating up from a paper phone held by a viewer', banner: '압박은 어디서 커질까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '방송·인물(별)은 가상이다. 실제 방송인·플랫폼 이름을 쓰지 않는다. 학생의 후원 경험을 묻지 않는다.',
      }),

      M({
        id: 'activity.gacha-budget', type: 'activity', title: '한 달 용돈과 뽑기 예산',
        method: '뽑기 예산 시뮬레이션', tool: 'economy', minutes: 17,
        levels: { easy: '뽑기를 한 번씩(3회까지) 고르는 판에서 교통비·문제집을 지키며 남는 돈을 본다.', base: '10회 연속 뽑기 묶음이 든 판에서 그 묶음을 사면 무엇을 포기해야 하는지 고르고, 우리 반 약속(뽑기 한도 3천 원) 안의 예산을 짠다.', challenge: '같은 판을 풀고, 활동지에 \'이번엔 나오겠지\' 생각이 왜 함정인지 쓴다.' },
        activity: {
          title: '시우의 한 달 5만 원', tool: 'economy',
          teacher: '"시우의 이번 달 용돈은 5만 원(가상)이에요. 교통비 2만 원은 꼭 내야 해요. 뽑기는 한 번에 3천 원." 막대가 차오르는 것을 함께 본다. 10회 묶음을 넣은 학생에게 "그럼 문제집과 영화는 어떻게 됐나요? 30번 넣으면 원하는 캐릭터가 나온다고 정해져 있나요?"라고 묻는다. "할인이니까 묶음이 이득이죠?"라는 말에는 "필요 없는 것을 싸게 사는 것도 이득일까요? 할인은 더 많이 사게 하는 장치일 수 있어요"라고 답한다. 금액은 모두 수업용 가상 값이다.',
          task: '시우의 한 달 용돈 막대에서 뽑기를 넣었을 때 남는 돈과 포기하는 것을 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '교통비와 문제집을 먼저 넣고, 남은 돈 안에서 하고 싶은 것을 골라 5만 원을 넘지 않게 하세요.', toolOptions: { mode: 'budget', budget: 50000, ask: '시우의 이번 달 용돈(가상)', items: [BUS, BOOK, MOVIE, SAVE, G(1), G(2), G(3), G10] }, target: { budget: { max: 50000, must: ['bus', 'book'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '교통비와 문제집을 먼저 넣고, 뽑기를 몇 번까지 할 수 있는지 5만 원 안에서 골라 보세요(뽑기 한 번씩).', toolOptions: { items: [BUS, BOOK, MOVIE, G(1), G(2), G(3)] }, target: { budget: { max: 50000, must: ['bus', 'book'] } } } },
              conclude: '꼭 쓸 돈을 먼저 넣으면, 뽑기에 쓸 수 있는 돈이 처음부터 정해져요.' },
            { prompt: '시우가 10회 연속 뽑기 묶음을 꼭 사겠다고 해요. 교통비를 지키면서 5만 원 안에 맞추세요.', toolOptions: { mode: 'budget', budget: 50000, ask: '10회 묶음을 사면?', items: [BUS, BOOK, MOVIE, SAVE, G10] }, target: { budget: { max: 50000, must: ['bus', 'g10'] } }, difficulty: 0.3,
              hints: ['꼭 넣을 두 가지를 먼저 넣고 막대에 남은 자리를 보세요.'], conclude: '묶음 하나로 문제집·영화·저축이 모두 빠져요. 30번을 뽑아도 원하는 것이 나온다는 보장은 없어요.' },
            { prompt: '우리 반 약속은 \'뽑기는 한 달 3천 원까지\'예요. 교통비·문제집·친구와 영화를 지키고 약속 안에서 예산을 짜세요.', toolOptions: { mode: 'budget', budget: 50000, ask: '약속을 지키는 예산', items: [BUS, BOOK, MOVIE, SAVE, G(1), G(2), G10] }, target: { budget: { max: 50000, must: ['bus', 'book', 'movie'], not: ['g2', 'g10'] } }, difficulty: 0.35,
              conclude: '한도는 쓰기 전에 정해야 지켜져요. 쓰는 도중에 정하면 \'한 번만 더\'가 이겨요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"이번엔 나오겠지"라는 생각이 왜 함정인지, 확률과 한도를 넣어 두 문장으로 쓰세요.' }] },
        notes: '용돈·가격·확률은 모두 가상이다. 학생의 결제 경험·금액을 묻지 않는다. \'뽑기 한 달 3천 원\'은 수업용 우리 반 약속이며 권장 기준이 아니다.',
      }),
      M({
        id: 'activity.chase-dilemma', type: 'activity', title: '"조금만 더" 손실 쫓기 갈림길',
        method: '손실 쫓기 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '시우의 갈림길을 2단계(오늘 → 다음 날)로 줄여 따라가고 근거 카드를 고른다.', base: '시우의 갈림길을 3단계로 끝까지 가 한 달 뒤 돈·시간 결과를 보고, 멈춘 길과 더 한 길을 견주고, 근거가 아닌 생각(아깝다·나올 차례)을 가려낸다.', challenge: '첫 문항에서 다른 끝 장면 하나를 더 가 본 뒤 근거를 고르고, 두 길의 돈·관계 결과를 활동지 표에 견준다.' },
        activity: {
          title: '시우의 꽝 다섯 번', tool: 'dilemma',
          teacher: '"시우는 벌써 1만 5천 원을 썼어요. \'여기서 멈추면 아깝다\', \'이제 나올 차례\' — 이 두 생각이 시우를 어디로 데려가는지 따라가 봐요." 선택마다 결과 글을 소리 내어 읽게 한다. \'나올 차례\' 카드를 고른 학생에게 "동전을 다섯 번 던져 모두 앞면이 나왔다면, 여섯 번째에 뒷면이 나올 확률은 커질까요?"라고 묻는다. 친구에게 돈을 빌린 길에서는 "캐릭터는 나왔는데, 무엇이 남았나요?"라고 묻는다. 늦게 멈추는 길(보호자와 결제 한도 정하기)도 좋은 끝이라는 점, 멈춘 뒤에 알림·결제 설정을 바꾸는 것까지가 멈춤이라는 점을 짚는다.',
          task: '시우의 손실 쫓기 갈림길을 끝까지 따라가 돈·시간 결과를 보고, 멈추는 선택의 근거 카드를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('시우의 갈림길을 끝까지 따라가고, 돈과 관계를 지키는 길과 그 근거 카드를 고르세요.', CHASE, CHASE_P2, CHASE_P3, CHASE_R, CHASE_GOOD, { d: 0.4, opt: { title: '시우의 꽝 다섯 번' },
              more: { hints: ['결과를 바꾸는 것이 확률인지, 미리 정한 한도인지 생각해 보세요.'], conclude: '이미 쓴 돈은 되돌아오지 않고, 앞의 꽝은 다음 확률을 바꾸지 않아요. 미리 정한 한도에서 멈추고, 혼자 어려우면 함께 멈춰요.' } }),
            EXPLOREQ('시우의 갈림길에서 \'멈춘 길\'과 \'더 한 길\'의 끝 장면을 모두 가 보고 돈·관계 결과를 견주세요.', CHASE, CHASE_R, ['두 길의 끝 장면을 모두 확인했다', '남은 돈과 친구 관계를 견주었다'], { d: 0.35,
              more: { conclude: '더 한 길은 원하는 것이 나와도 빚·관계·다음 이벤트가 남아요. 멈춘 길은 잃을 것이 정해져 있어요.' } }),
            DIL3('같은 갈림길에서 \'여기서 멈추면 아깝다\'는 생각이 어느 선택에서 시작되는지 확인하며 끝까지 가고, 근거가 아닌 생각을 빼고 근거를 고르세요.', CHASE, CHASE_P2, CHASE_P3, CHASE_R, ['indep', 'limit'], { d: 0.45, opt: { title: '함정 생각 찾기', revealAfterCheck: true },
              more: { hints: ['카드 가운데 이미 쓴 돈이나 앞의 결과에 매달리는 생각을 먼저 찾아 빼세요.'] } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '멈춘 길과 더 한 길의 한 달 뒤를 견주세요.', columns: ['', '남은 돈', '쓴 시간', '친구·가족 관계'], cells: [['멈춘 길', '', '', ''], ['더 한 길', '', '', '']] }] },
        notes: '시우·게임·금액은 가상이다. 학생의 실제 뽑기 경험을 묻지 않는다. 도박 문제를 털어놓는 학생이 있으면 수업 뒤 따로 상담실로 잇는다.',
      }),
      M({
        id: 'activity.prob-chart', type: 'activity', title: '확률 공개표를 그래프로',
        method: '확률 표시 읽기', tool: 'chart', minutes: 17,
        levels: { easy: '가상 확률표를 보고 막대그래프를 그린다(일반 등급은 그려져 있음).', base: '막대를 그리고, 가장 드문 등급을 읽고, 전설 등급(2%)이 나오기까지 평균 몇 번인지와 그 돈을 어림한다.', challenge: '값을 숨긴 그래프를 읽고, 활동지에 \'확률을 알아도 멈추기 어려운 까닭\'(평균일 뿐·보상 간격)을 쓴다.' },
        activity: {
          title: '가상 뽑기 확률표', tool: 'chart',
          teacher: '"가상 게임이 뽑기 확률을 공개했어요. 일반 70%, 고급 20%, 희귀 8%, 전설 2%." 막대를 그리게 한 뒤 "전설 2%면 평균 몇 번 뽑아야 할까요?"라고 묻는다. 50이 나오면 "그럼 50번 안에는 반드시 나오나요?"라고 되묻는다 — 평균일 뿐이어서 100번을 넘겨도 안 나올 수 있다. "확률을 공개하니까 이제 공정하죠?"라는 말에는 "공개는 판단에 도움이 돼요. 그런데 2%를 알고도 \'나는 다를 거야\' 하게 되지 않나요?"라고 묻는다. 확률은 모두 가상 값이다.',
          task: '가상 확률표를 막대그래프로 그리고, 드문 등급이 나오기까지 드는 횟수와 돈을 어림해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 확률표를 보고 등급별 막대를 그리세요(일반 등급은 그려져 있어요).', toolOptions: { type: 'bar', mode: 'build', title: '가상 게임 뽑기 등급별 확률(가상 자료)', unit: '%', xLabel: '등급', yLabel: '확률', data: PROB, scale: 10, max: 80, step: 1, given: [0] }, target: { build: true }, difficulty: 0.2 },
            { prompt: '그래프에서 가장 드문 등급을 고르세요.', toolOptions: PBAR({ question: '가장 드문 등급은?', choices: PROB.map((x) => x[0]) }), target: { pick: 3 }, difficulty: 0.15 },
            { prompt: '전설 등급(2%)이 나오기까지 평균 몇 번 뽑아야 하는지 수로 쓰세요.', toolOptions: PBAR({ question: '전설이 나오기까지 평균 몇 번?' }), target: { value: 50 }, difficulty: 0.35,
              hints: ['100번 뽑으면 2%는 몇 번 나올지 먼저 생각해 보세요.'], conclude: '평균 50번이지만 50번 안에 반드시 나오는 것은 아니에요. 평균은 많은 사람을 모았을 때의 값이에요.' },
            { prompt: '한 번에 3천 원이라면, 평균 횟수만큼 뽑는 데 드는 돈은 몇 만 원인지 수로 쓰세요.', toolOptions: PBAR({ question: '평균 횟수만큼 뽑는 돈(만 원)은?' }), target: { value: 15 }, difficulty: 0.4,
              hints: ['평균 횟수에 한 번 값을 곱하고, 만 원 단위로 바꾸세요.'], conclude: '평균 15만 원 — 시우의 석 달 용돈이에요. 확률 표시는 이렇게 돈과 시간으로 바꿔 읽어야 판단에 쓰여요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '확률이 공개되어도 멈추기 어려운 까닭 하나와, 그래서 미리 정해야 할 것 하나를 쓰세요.' }] },
        notes: '확률·금액은 가상이다. 실제 게임의 확률표를 쓰지 않는다. 확률 공개 제도의 법 조문은 근거 파일에 없어 다루지 않는다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.stop-rule', type: 'activity', title: '멈춤 규칙을 블록으로',
        method: '멈춤 규칙 설계', tool: 'block-coding', minutes: 18,
        levels: { easy: '한도 하나(별 하나 = 돈 한도 점검) 판에서 거북이를 종료 깃발까지 보낸다.', base: '한도 둘(돈 한도·시간 한도 별) 판에서 별을 모두 들러 깃발에 닿게 하고, 친구의 규칙을 따라가 보고, 블록 다섯 안으로 줄인다.', challenge: '조건 블록(막히면 왼쪽)을 꼭 써서 \'한 판만 더\' 바위를 만나면 꺾어 종료로 가는 규칙을 만든다.' },
        activity: {
          title: '멈춤 규칙 설계', tool: 'block-coding',
          teacher: '"오늘 판에서 별은 한도 점검이에요. 첫 별은 돈 한도(이번 주 3천 원), 둘째 별은 시간 한도(30분). 깃발은 종료, 바위는 \'한 판만 더\'예요." 실행할 때마다 "거북이가 별을 지나쳤나요? 한도를 확인하지 않고 끝으로 가면 무엇이 빠졌죠?"라고 묻는다. "기분 좋을 땐 한도를 넘어도 되잖아요"라는 말에는 "기분에 따라 바뀌는 규칙은 \'한 판만 더\'에 늘 져요. 예외 없이 지키는 규칙은 미리, 블록처럼 정해 둬요"라고 답한다. 판은 규칙의 비유이고, 실제 내 멈춤 규칙은 활동지에 글로 쓴다.',
          task: '별(돈·시간 한도 점검)을 모두 들러 깃발(종료)에 닿는 멈춤 규칙을 만들고, 내 규칙을 활동지에 글로 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 둘(①돈 한도 점검 ②시간 한도 점검)을 모두 들르고 바위(한 판만 더)를 피해 깃발(종료)에 닿게 하세요.', STOP_BASE, { stars: true }, {
              easy: { prompt: '별 하나(돈 한도 점검)를 들러 깃발(종료)에 닿게 하세요(한도 하나).', board: STOP_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 꼭 써서 별 둘을 들르고 깃발에 닿게 하세요. 막히면 도는 블록은 \'한 판만 더가 떠오르면 종료 쪽으로 꺾는 규칙\'이에요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['별이 한 줄로 놓인 아래쪽부터 따라가고, 줄 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구의 멈춤 규칙이에요: 앞으로 1칸 → 왼쪽으로 돌기 → 앞으로 1칸. 돈 한도 점검(첫 별)에 가기 전에 꺾어요. 거북이가 멈출 칸을 고르세요.', { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[2, 3], [4, 3]], rocks: [[1, 1]] }, ['fwd', 'left', 'fwd'], { x: 1, y: 2 }, { d: 0.3,
              more: { conclude: '한도 점검을 건너뛴 규칙은 \'한 판만 더\' 바로 앞에서 멈춰요. 점검 단계가 빠지면 규칙이 아니라 바람이에요.' } }),
            BCQ('블록을 5개 안으로 써서 별 둘을 들르고 깃발에 닿게 하세요. 같은 걸음은 반복으로 묶어요.', STOP_BASE, { stars: true, maxBlocks: 5 }, { d: 0.4,
              more: { conclude: '짧고 분명한 규칙일수록 지키기 쉬워요. \'돈 한도 → 시간 한도 → 종료\'처럼 한 줄로 외울 수 있게 만들어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 내 멈춤 규칙 글로 옮겨 쓰세요(채점하지 않아요).', columns: ['단계', '내 규칙', '지키기 어려울 때'], cells: [['돈 한도', '', ''], ['시간 한도', '', ''], ['종료 뒤 할 일', '', ''], ['한 판만 더가 떠오르면', '', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록·칸에는 글을 붙일 수 없어 한도 점검을 별 칸으로, 종료를 깃발로, \'한 판만 더\'를 바위로 나타냈다. 한도 값(3천 원·30분)은 수업용 예시다.',
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '내가 그을 경계선',
        method: '성찰 글: 나의 경계선', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 문장 틀(나의 한도·그 까닭)을 보이고 두 문장으로 쓰게 한다.', base: '게임·후원에서 내가 그을 경계선과 이유를 네 문장으로 쓰고 기준표(구체적 한도·근거·도움 경로)로 점검한다.', challenge: '친구에게 권할 경계선 한 문장을 활동지에 더한다.' },
        wrap: {
          teacher: '"오늘 시우와 별의 장면을 떠올리며, 내가 그을 경계선을 써요. 얼마까지, 얼마 동안, 그리고 넘었을 때 누구에게 말할지." \'적당히 한다\'고 쓴 학생에게 "적당히는 \'한 판만 더\' 앞에서 어떻게 될까요? 숫자나 때를 넣어 볼까요?"라고 묻는다. 내 결제 금액을 쓰지 않아도 되고, 앞으로의 한도를 쓰면 된다고 말한다. 경계선을 넘었을 때 도움받을 곳(상담실·지역 상담 기관)을 한 문장에 넣게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '게임·후원에서 내가 그을 경계선과 그 까닭을 네 문장으로 쓰세요(얼마까지·얼마 동안·넘으면 누구에게).', minChars: 60, maxChars: 400, starter: '나는 ~까지만 쓴다. 왜냐하면 ~. 시간은 ~. 넘으면 ~에게 말한다.' }, prompt: '나의 경계선 성찰 글을 네 문장으로 쓰고 기준표로 점검하세요.', target: { selfCheck: ['한도를 숫자나 때로 구체적으로 썼다', '그 한도의 까닭을 썼다', '넘었을 때 도움받을 곳을 썼다'], sentences: [3, 5] }, difficulty: 0.25 },
            { type: 'choice', prompt: '도박성 요소 앞에서 경계선을 지키는 데 가장 도움이 되는 것은?', options: ['그날 기분을 보고 한도를 정한다', '쓰기 전에 돈·시간 한도를 정하고 넘으면 멈춘다', '꽝이 많이 나온 날은 조금 더 해 본다'], answer: 1, difficulty: 0.15, explain: '한도는 쓰기 전에 정해야 지켜져요. 쓰는 도중에는 \'아깝다\'와 \'나올 차례\'가 판단을 흔들어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 경계선',
          items: [
            { type: 'table', prompt: '나의 경계선을 정리하세요.', columns: ['돈 한도', '시간 한도', '넘으면 말할 사람'], cells: [['', '', '']] },
            { type: 'short', prompt: '친구에게 권할 경계선 한 문장을 쓰세요.' },
          ],
        },
        notes: '성찰 글은 채점하지 않는다. 학생의 실제 결제 금액을 쓰게 하지 않는다.',
      }),
      M({
        id: 'wrap.help-map', type: 'wrap', title: '도움 받을 곳 지도',
        method: '도움 받을 곳 지도', tool: 'map', minutes: 7,
        levels: { easy: '교사가 학교 안 한 곳(상담실)을 함께 찾아 핀을 놓는다.', base: '학교 안 상담실, 학교 밖 지역 상담 기관에 핀을 놓고, 몸이 힘들 때 갈 곳을 고른다.', challenge: '보호자와 함께 지역 상담 기관에 갈 경로를 활동지에 쓴다.' },
        wrap: {
          teacher: '"뽑기나 내기를 멈추기 어려울 때, 혼자 버티지 않아도 돼요. 학교 안, 그리고 학교 밖 어디로 갈 수 있을까요?" 지도에 핀을 놓게 한다. PC방이나 편의점에 핀을 놓는 학생에게 "그곳에 이 고민을 들어 줄 사람이 있을까요?"라고 묻는다. 지역 상담 기관의 이름과 연락처는 우리 학교가 확인한 것을 쓴다고 말하고, 상담은 비밀이 지켜진다는 점(위험할 때는 예외)을 함께 알린다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: TOWN, prompt: '학교 안에서 멈추기 어려운 고민을 먼저 이야기할 곳에 핀을 놓으세요.', target: { place: '상담실' }, difficulty: 0.15 },
            { type: 'tool', tool: 'map', options: TOWN, prompt: '학교 밖, 도박 문제 상담을 받을 수 있는 곳에 핀을 놓으세요.', target: { place: '지역 상담 기관' }, difficulty: 0.2 },
            { type: 'choice', prompt: '뽑기로 잠을 못 자 머리가 아프고 속이 메스꺼울 때 학교에서 먼저 갈 곳은?', options: ['보건실', 'PC방', '편의점'], answer: 0, difficulty: 0.15, explain: '몸이 힘들면 보건실에서 먼저 살피고, 마음의 고민은 상담실로 이어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움 받을 곳',
          items: [
            { type: 'table', prompt: '도움 받을 곳을 정리하세요.', columns: ['곳', '언제 가나', '연락 방법(학교가 확인)'], cells: [['학교 상담실', '', ''], ['보건실', '', ''], [HELP, '', '']] },
            { type: 'short', prompt: '보호자와 함께 지역 상담 기관에 간다면 어떻게 말을 꺼낼지 한 문장으로 쓰세요.' },
          ],
        },
        notes: `교구 한계: map 은 문항마다 핀 하나라 '세 곳'을 핀 둘과 고르기 하나로 나눴다. 지역 상담 기관 이름·연락처는 학교가 확인해 '${HELP}' 자리에 넣는다(머리 주석 '사람 확인').`,
      }),
    );
  }

  // ======================================================================================================
  // 3. 정보윤리와 디지털 발자국 (11학년)
  // ======================================================================================================
  {
    const M = MOD('footprint', [11]);
    // 가상 인물 민의 하루 동선(칸 지도)
    const ROUTE = { title: '가상 인물 민의 토요일 동선', grid: [6, 4], places: [
      { name: '집', icon: 'house', at: [0, 3], legend: '집(아침 알람·검색 기록)' },
      { name: '버스 정류장', icon: 'bus', at: [1, 1], legend: '교통카드 승차 기록' },
      { name: '편의점', icon: 'market', at: [3, 1], legend: '카드 결제 기록' },
      { name: '공원', icon: 'park', at: [2, 3] },
      { name: '카페', icon: 'market', at: [5, 0], legend: '위치 태그를 단 사진 게시' },
      { name: '도서관', icon: 'library', at: [4, 3] }] };
    const PAST = ['중3 때 친구를 놀리는 영상을 올린다', '고1 때 그 영상이 다른 계정에 퍼 날라진다', '고2 때 동아리 면접에서 그 영상 이야기가 나온다', '고3 때 원본을 지웠지만 캡처본이 남아 있다', '취업 준비 때 이름 검색에 캡처본이 걸린다'];
    // 사적인 대화 캡처 갈림길
    const CAP = { text: '반 단체방에 같은 반 온의 사적인 대화 캡처가 돌고 있다. 온이 다른 친구에게 털어놓은 고민이다. 나에게도 "이거 봤어?"라며 왔다.', who: '나', motif: 'house', choices: [
      { id: 'share', text: '"대박"이라며 다른 단체방에 전달한다', result: '캡처가 두 단체방을 넘어 퍼진다.', impact: [{ who: '온', text: '고민이 학교 전체에 알려진다', tone: -1 }],
        next: { text: '다음 날, 온이 학교에 오지 않았다는 이야기가 들린다.', choices: [
          { id: 'delete', text: '내가 보낸 메시지를 지우고 아무 말도 하지 않는다', result: '내 것은 지웠지만 받은 사람들의 휴대폰에는 남아 있다.', impact: [{ who: '온', text: '퍼진 것은 되돌아오지 않는다', tone: -1 }],
            next: { text: '한 주 뒤, 캡처가 다른 학교 학생에게서도 보인다.', choices: [
              { id: 'hide', text: '모른 척한다', result: '캡처는 계속 돈다.', impact: [{ who: '온', text: '혼자 감당한다', tone: -1 }], ending: '지운다고 퍼진 발자국이 사라지지 않는다.' },
              { id: 'apology', text: '온에게 사과하고 담임 선생님께 퍼진 경로를 알린다', result: '학교가 단체방에 삭제를 요청하고 온과 상담을 이어 간다.', impact: [{ who: '온', text: '늦었지만 퍼짐이 줄어든다', tone: 0 }], ending: '늦게라도 책임지고 알리면 퍼짐을 줄일 수 있다.' }] } },
          { id: 'tellnow', text: '전달한 것을 사과하고 담임 선생님께 알린다', result: '학교가 단체방에 삭제를 요청한다.', impact: [{ who: '온', text: '더 퍼지는 것은 막는다', tone: 0 }], ending: '한 번 퍼진 것은 다 지울 수 없지만, 더 퍼지는 것은 막을 수 있다.' }] } },
      { id: 'stop', text: '전달하지 않고 단체방에 "이건 온의 사적인 대화라 돌리면 안 돼"라고 쓴다', result: '몇 명이 캡처를 지우고, 몇 명은 "왜 진지해"라고 한다.', impact: [{ who: '온', text: '퍼짐이 줄어든다', tone: 1 }],
        next: { text: '보낸 친구가 "다들 봤는데 뭐 어때"라며 웃는다.', choices: [
          { id: 'adult', text: '온의 동의 없이 퍼진 것을 담임 선생님께 알린다', result: '학교가 단체방에 삭제를 요청하고 온을 살핀다.', impact: [{ who: '온', text: '혼자가 아니라고 느낀다', tone: 1 }],
            next: { text: '온이 "네가 말해 줬다며, 고마워"라고 한다.', choices: [
              { id: 'ask', text: '온에게 더 필요한 것이 있는지 묻는다', result: '온이 상담 선생님과 이야기해 보기로 한다.', impact: [{ who: '온', text: '도움을 받을 길이 열린다', tone: 1 }], ending: '퍼 나르지 않고, 멈추게 하고, 알리고, 곁에 있는다.' },
              { id: 'proud', text: '내가 막았다고 단체방에 자랑한다', result: '캡처 이야기가 다시 꺼내진다.', impact: [{ who: '온', text: '다시 화제가 된다', tone: -1 }], ending: '돕는 일도 온이 원하는 방식인지 먼저 생각한다.' }] } },
          { id: 'quiet', text: '더 말하면 나만 이상해질까 봐 그만둔다', result: '캡처는 단체방에 그대로 남는다.', impact: [{ who: '온', text: '남은 캡처가 다시 돌 수 있다', tone: 0 }], ending: '멈추자고 말한 것은 의미가 있지만, 남은 기록은 어른과 함께 정리해야 한다.' }] } },
      { id: 'ignore', text: '보기만 하고 아무것도 하지 않는다', result: '캡처는 계속 돈다.', impact: [{ who: '온', text: '퍼짐이 이어진다', tone: -1 }], ending: '보기만 해도 내 휴대폰에 남의 기록이 남는다. 멈추게 할 기회는 지나갔다.' }] };
    const CAP_P2 = [['stop', 'adult'], ['share', 'tellnow']];
    const CAP_P3 = [['stop', 'adult', 'ask'], ['share', 'tellnow'], ['share', 'delete', 'apology']];
    const CAP_R = [
      { id: 'consent', text: '사적인 대화는 그 사람의 동의 없이 퍼뜨리지 않는다' },
      { id: 'remain', text: '한 번 퍼진 디지털 기록은 다 지울 수 없다' },
      { id: 'tell', text: '퍼짐을 멈추려면 어른에게 경로를 알린다' },
      { id: 'all', text: '이미 다들 봤으니 하나 더 보내도 상관없다', why: '보내는 한 번마다 퍼지는 길이 하나 늘어요. 다들 봤다는 것이 퍼뜨려도 된다는 뜻은 아니에요.' },
      { id: 'joke', text: '재미로 한 일이니 책임이 없다', why: '재미였어도 온이 입은 피해는 같아요. 보낸 사람은 퍼짐의 한 고리예요.' }];
    // 가상 계정 점검(계정명 없음)
    const ACC_A = [['loc', '사진마다 위치 태그가 자동으로 붙는다', false], ['old', '중학교 때 게시물이 전체 공개로 남아 있다', false], ['app', '쓰지 않는 퀴즈 앱 세 개가 계정과 연동돼 있다', false], ['pw', '비밀번호를 다른 사이트와 다르게 쓴다', true], ['two', '로그인할 때 2단계 인증을 쓴다', true], ['tag', '남이 나를 태그하면 승인 뒤에 보인다', true]];
    const ACC_FIX = ['위치 태그 자동 붙이기를 끈다', '오래된 전체 공개 게시물을 정리한다', '쓰지 않는 연동 앱을 끊는다', '한 달 뒤 다시 점검할 날을 정한다'];
    // 잊힐 권리 토론
    const FOR = ['어릴 때의 실수로 평생 판단받지 않아야 한다', '청소년은 공개 범위의 결과를 잘 몰랐을 수 있다', '지우면 다시 시작할 기회가 생긴다'];
    const AGAINST = ['지우면 피해자가 증거를 잃을 수 있다', '공익을 위한 기록까지 사라질 수 있다', '스스로 올린 것에 책임지는 법도 배워야 한다'];
    const NOTR = ['요즘 애들은 생각 없이 올리니 다 막아야 한다', '어차피 아무도 신경 안 쓴다'];
    // 가상 설문: 자주 공개하는 정보(띠그래프)
    const LEAK = [['학교 이름', 30], ['얼굴 사진', 25], ['사는 동네', 20], ['생일', 15], ['연락처', 10]];
    const BAND = (more = {}) => Object.assign({ type: 'band', mode: 'read', title: '가상 설문: 프로필에 자주 공개하는 정보(가상 자료, 응답자 비율 %)', unit: '%', data: LEAK }, more);

    MODS.push(
      M({
        id: 'intro.trace-map', type: 'intro', title: '민의 토요일 발자국 지도',
        method: '하루의 발자국 지도', tool: 'map', minutes: 7,
        levels: { easy: '교사가 기록이 남는 세 곳(버스 정류장·편의점·카페)을 짚으며 남는 기록을 함께 고른다.', base: '기록이 남는 다섯 곳을 하나씩 열어 어떤 기록이 남는지 고르는 시연을 보고 말한다.', challenge: '다섯 곳의 기록을 모으면 알 수 있는 것(사는 곳·다니는 곳·생활 시간)을 말한다.' },
        intro: {
          teacher: '"가상 인물 민의 토요일이에요. 민은 계정을 비공개로 해 두어서 \'나는 남는 게 없다\'고 생각해요." 지도의 장소를 하나씩 짚는다. 시연 단추로 \'편의점\'에 핀을 꽂고 남는 기록을 고르는 모습을 보여 준다. "비공개면 아무도 모르잖아요"라는 말이 나오면 "교통카드, 카드 결제, 검색 기록은 계정 공개 범위와 상관없이 남아요. 그리고 친구가 찍어 올린 사진은 누구의 공개 범위를 따를까요?"라고 되묻는다. 하나하나는 작은 기록이지만 모으면 사는 곳과 생활 시간이 드러난다는 점을 짚는다.',
          student: '민의 토요일 지도에서 기록이 남는 곳을 열어 보고, 그곳에 어떤 기록이 남는지 골라 보세요. 비공개 계정이어도 남는 기록이 있어요.',
          demo: { tool: 'map', options: Object.assign({}, ROUTE, { ask: { q: '편의점에 남는 기록은?', choices: ['카드 결제 기록', '아무것도 남지 않는다', '비공개라 지워진다'] } }), sequence: [{ place: '편의점', pick: 0 }] },
          art: { draw: 'a paper town grid seen from above with a dotted paper footprint trail linking a house, a bus stop, a convenience store, a cafe and a library, tiny paper receipts and location pins rising from each stop', banner: '비공개여도 남는 것', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '민과 동선은 가상이다. 학생의 실제 동선·장소를 말하게 하지 않는다.',
      }),
      M({
        id: 'intro.timeline-past', type: 'intro', title: '5년 뒤 다시 드러난 게시물',
        method: '5년 전 게시물', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 사건 셋(올림 → 퍼 날라짐 → 면접)을 함께 놓는다.', base: '사건 다섯을 중3부터 취업 준비까지 차례로 놓는 시연을 보고, 지운 뒤에도 남은 까닭을 말한다.', challenge: '시점마다 막을 수 있었던 방법(올리기 전 3초·퍼 나르지 않기·원본과 캡처 함께 정리)을 붙여 말한다.' },
        intro: {
          teacher: '"가상 인물 결의 이야기예요. 중3 때 장난으로 올린 영상 하나가 5년 동안 어떻게 따라왔는지 차례로 놓아 봐요." 시연 단추로 사건 카드가 시간 띠에 놓이는 모습을 보여 준다. "원본을 지웠으면 끝난 거 아니에요?"라는 말에는 "고1 때 무슨 일이 있었죠? 다른 사람이 퍼 나르고 캡처한 것은 결이 지울 수 없어요"라고 되묻는다. 이 이야기에서 다친 사람은 결만이 아니라 영상 속 친구라는 점도 함께 짚는다.',
          student: '결의 게시물이 중3부터 취업 준비까지 어떻게 다시 드러났는지 차례로 놓아 보세요. 원본을 지운 뒤에도 무엇이 남았는지 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['중3', '취업 준비'], slots: 5, cards: lay(PAST, []) }, sequence: [{ order: PAST }] },
          art: { draw: 'a long paper timeline ribbon with five paper milestone flags, a small paper video card at the start multiplying into copies and paper screenshots along the ribbon, a paper job interview desk at the end', banner: '지운 뒤에도 남는 것', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '결은 가상 인물이다. 학생에게 자기 옛 게시물을 꺼내 보이게 하지 않는다.',
      }),

      M({
        id: 'activity.ethic-dilemma', type: 'activity', title: '사적인 대화 캡처를 받았을 때',
        method: '퍼 나르기 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '캡처 갈림길을 2단계(받았을 때 → 다음 반응)로 줄여 따라가고 근거 카드를 고른다.', base: '갈림길을 3단계로 끝까지 가 온에게 남는 결과를 보고, 퍼 나른 길과 멈춘 길을 견주고, 근거가 아닌 말(다들 봤다·재미였다)을 가려낸다.', challenge: '첫 문항에서 다른 끝 장면 하나를 더 가 본 뒤 근거를 고르고, 정보윤리 근거로 두 길을 활동지에 견준다.' },
        activity: {
          title: '돌고 있는 캡처', tool: 'dilemma',
          teacher: '"온이 친구에게 털어놓은 고민 캡처가 단체방에 돌고 있어요. 나에게도 왔어요. 지금 내 손가락 하나가 퍼짐의 다음 고리가 될 수도, 멈춤이 될 수도 있어요." 선택마다 결과 글을 읽게 한다. \'다들 봤으니 상관없다\' 카드를 고른 학생에게 "하나 더 보내면 퍼지는 길은 몇 개 늘까요?"라고 묻는다. 전달한 뒤 지우는 길에서는 "내 것을 지우면 받은 사람의 휴대폰에서도 지워지나요?"라고 묻는다. 퍼 나른 길에서도 늦게 사과하고 알리는 끝은 \'더 퍼지는 것을 막은\' 길이라는 점, 멈춘 길에서도 온이 원하는 도움인지 묻는 것이 마지막 단계라는 점을 짚는다.',
          task: '사적인 대화 캡처 갈림길을 끝까지 따라가 온에게 남는 결과를 보고, 정보윤리 근거 카드를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('캡처를 받은 나의 갈림길을 끝까지 따라가고, 온을 지키는 길과 그 근거 카드를 고르세요.', CAP, CAP_P2, CAP_P3, CAP_R, ['consent', 'remain', 'tell'], { d: 0.4, opt: { title: '돌고 있는 캡처' },
              more: { hints: ['결과 글에서 온에게 무엇이 남는지, 퍼짐이 늘었는지 줄었는지 보세요.'], conclude: '퍼 나르지 않고, 멈추자고 말하고, 어른에게 경로를 알리고, 온이 원하는 도움을 묻는 것 — 받은 사람에게도 할 일이 있어요.' } }),
            EXPLOREQ('\'전달한 길\'과 \'멈추자고 말한 길\'의 끝 장면을 모두 가 보고 온에게 남는 결과를 견주세요.', CAP, CAP_R, ['두 길의 끝 장면을 모두 확인했다', '지운 뒤에도 남는 기록을 찾았다'], { d: 0.35,
              more: { conclude: '보낸 것은 지워도 받은 사람에게 남아요. 디지털 발자국은 내 것만이 아니라 남의 것까지 남겨요.' } }),
            DIL3('같은 갈림길을 끝까지 가며, 근거가 아닌 말 두 장을 빼고 정보윤리 근거만 고르세요.', CAP, CAP_P2, CAP_P3, CAP_R, ['consent', 'remain'], { d: 0.45, opt: { title: '근거 가려내기', revealAfterCheck: true },
              more: { hints: ['퍼뜨린 사람의 사정을 말하는 카드와, 온의 권리를 말하는 카드를 나누어 보세요.'] } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 길을 정보윤리 근거로 견주세요.', columns: ['', '온에게 남는 것', '나에게 남는 것', '근거'], cells: [['전달한 길', '', '', ''], ['멈추자고 말한 길', '', '', '']] }] },
        notes: '온과 단체방은 가상이다. 학생에게 실제로 받은 캡처나 친구 이야기를 꺼내게 하지 않는다. 실제 사건이 떠오르는 학생은 수업 뒤 상담실로 잇는다.',
      }),
      M({
        id: 'activity.privacy-audit', type: 'activity', title: '가상 계정 점검표',
        method: '내 계정 점검 체크리스트', tool: 'kitchen', minutes: 18,
        levels: { easy: '가상 계정 가의 점검 항목 넷 가운데 잘 지킨 항목만 표시하고, 고칠 차례 카드 셋을 놓는다.', base: '가상 계정 가의 항목 여섯을 점검하고, 계정 나를 점검하고, 고칠 차례 넷을 놓는다.', challenge: '같은 문항을 풀고, 활동지에 가족에게 줄 계정 점검 안내 세 줄을 쓴다.' },
        activity: {
          title: '가상 계정 점검', tool: 'kitchen',
          teacher: '"가상 인물 민의 계정 두 개를 점검해 봐요. 계정 이름은 쓰지 않아요." 항목을 소리 내어 읽고 \'잘 지킨 것\'인지 묻는다. "비공개 계정이면 위치 태그는 상관없죠?"라는 말에는 "팔로워 가운데 모르는 사람은 없나요? 친구가 내 사진을 공유하면요?"라고 되묻는다. 연동 앱 항목에서는 "퀴즈 하나 하려고 허락한 앱이 지금도 내 친구 목록을 볼 수 있다면요?"라고 묻는다. 고칠 차례는 \'지금 노출되는 것부터\'라는 우리 반 기준이라고 밝힌다. 내 계정 점검은 활동지에서 스스로 하고, 발표하지 않는다.',
          task: '민의 가상 계정을 점검표로 확인하고, 고칠 차례를 정해요. 내 계정은 활동지에서 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('민의 계정 가: 사진마다 위치가 붙고, 중학교 때 게시물이 전체 공개로 남아 있고, 쓰지 않는 퀴즈 앱 셋이 연동돼 있어요. 비밀번호는 따로 쓰고 2단계 인증과 태그 승인은 켜 두었어요. 잘 지킨 항목만 표시하세요.', '계정 가 점검', ACC_A, { k: 4, d: 0.25,
              more: { levels: { easy: { prompt: '민의 계정 가: 사진마다 위치가 붙고, 옛 게시물이 전체 공개예요. 비밀번호는 따로 쓰고 2단계 인증을 켰어요. 잘 지킨 항목만 표시하세요(항목 넷).', toolOptions: { mode: 'checklist', title: '계정 가 점검', items: [{ id: 'loc', text: ACC_A[0][1] }, { id: 'old', text: ACC_A[1][1] }, { id: 'pw', text: ACC_A[3][1] }, { id: 'two', text: ACC_A[4][1] }] }, target: { checklist: ['pw', 'two'] } } } } }),
            CHECKQ('민의 계정 나: 위치 태그는 꺼 두었고 연동 앱도 정리했어요. 하지만 같은 비밀번호를 여러 곳에 쓰고, 2단계 인증이 꺼져 있고, 남의 태그가 바로 보여요. 잘 지킨 항목만 표시하세요.', '계정 나 점검', [['loc', '위치 태그 자동 붙이기가 꺼져 있다', true], ['app', '쓰지 않는 연동 앱이 없다', true], ['pw', '비밀번호를 다른 사이트와 다르게 쓴다', false], ['two', '로그인할 때 2단계 인증을 쓴다', false], ['tag', '남이 나를 태그하면 승인 뒤에 보인다', false], ['old', '오래된 게시물의 공개 범위를 정리했다', true]], { d: 0.3 }),
            ORDERQ('우리 반 기준(지금 노출되는 것 → 쌓인 것 → 연결된 것 → 다시 점검)으로 계정 가를 고칠 차례대로 놓으세요.', ACC_FIX, { k: 3, traps: ['계정을 지우고 새로 만든다'], d: 0.35, opt: { mode: 'order', title: '고칠 차례', autoMotif: false },
              more: { conclude: '지금 새는 것부터 막고, 쌓인 것을 정리하고, 연결을 끊고, 날짜를 정해 다시 봐요. 계정을 지워도 남이 가진 캡처·기록은 남아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 계정을 스스로 점검하세요(계정 이름은 쓰지 말고, 채점하지 않아요).', columns: ['항목', '지금(○·△·×)', '고칠 날'], cells: [['위치 태그', '', ''], ['오래된 게시물 공개 범위', '', ''], ['연동 앱', '', ''], ['비밀번호·2단계 인증', '', '']] }] },
        notes: '민의 계정은 가상이다. 학생에게 실제 계정명·화면을 보이게 하지 않는다. 점검 항목은 일반적인 개인정보 보호 항목이다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '잊힐 권리 찬반 근거',
        method: '토론: 잊힐 권리', tool: 'mindmap', minutes: 17,
        levels: { easy: '찬성·반대 가지에 근거 카드를 둘씩, 바로 피드백을 받으며 붙인다.', base: '찬성·반대 근거를 셋씩 붙이고(근거가 아닌 말은 남기고), 근거마다 반론을 잇고, 두 걱정을 함께 담은 제도 대안을 고른다.', challenge: '헷갈리는 카드가 더해진 판을 나누고, 활동지에 제도 대안 하나를 조건(누가·무엇을·어떤 경우 빼고)까지 써서 제안한다.' },
        activity: {
          title: '잊힐 권리 근거 그물', tool: 'mindmap',
          teacher: '"논제는 \'청소년 시절 게시물은 본인이 지울 수 있어야 한다\'예요. 결의 이야기를 떠올리면 찬성이 쉬워 보이지만, 지워지면 곤란한 사람도 있어요." 카드를 붙일 때마다 "이 근거로 보호받는 사람은 누구인가요?"라고 묻는다. \'지우면 피해자가 증거를 잃는다\' 카드 앞에서 "결의 영상 속 친구 입장에서는 어떨까요?"라고 묻는다. \'요즘 애들은 생각 없이 올린다\' 카드에는 "모두를 묶는 말이 근거가 될까요?"라고 묻는다. 어느 쪽이 이기는지가 아니라, 두 걱정을 함께 담는 조건을 찾는 것이 목표다. 실제 제도의 세부는 다루지 않는다.',
          task: '잊힐 권리 찬반 근거를 가지에 나누고, 근거마다 반론을 이어 보세요. 근거가 아닌 말은 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('잊힐 권리 찬성·반대 근거를 가지에 나누세요(근거가 아닌 말은 남겨요).', ['찬성 근거', '반대 근거'], [FOR, AGAINST], { k: 2, traps: NOTR, hard: [['학교·직장이 옛 게시물로 사람을 거르는 일을 줄인다'], ['지울 수 있다면 더 쉽게 올리게 될 수 있다']], d: 0.3, opt: { topic: '청소년 게시물 삭제' },
              more: { hints: ['카드가 누군가의 권리나 결과를 말하는지, 사람들을 한데 묶어 판단하는지 보세요.'] } }),
            MATCHQ('찬성 근거마다 그에 답하는 반대 측 반론을 짝지으세요.', [[FOR[0], '실수였어도 피해를 입은 사람의 기억은 남는다'], [FOR[1], '모를 수 있으니 올리기 전에 알려 주는 교육이 먼저다'], [FOR[2], '지우기보다 바로잡는 글을 덧붙이는 방법도 있다']], { k: 2, extra: ['어차피 아무도 안 본다'], d: 0.35, opt: { topic: '근거와 반론' },
              more: { conclude: '좋은 반론은 상대가 지키려는 사람을 인정하고, 다른 방법으로 지킬 길을 내놓아요.' } }),
            PICKQ('찬성과 반대의 걱정을 함께 담은 제도 대안만 고르세요.', ['본인이 올린 게시물은 지울 수 있되 남을 해친 기록은 피해자 동의를 거친다', '삭제를 도와주되 공익을 위한 기록은 빼는 기준을 둔다'], ['청소년의 모든 게시물을 자동으로 지운다', '한 번 올린 것은 어떤 경우에도 지울 수 없다'], { d: 0.35, opt: { topic: '두 걱정을 담는 대안', basket: '함께 담는 대안' },
              more: { conclude: '제도는 \'다 된다·다 안 된다\'보다 \'누가, 무엇을, 어떤 경우 빼고\'를 정할 때 두 걱정을 함께 담아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 제안할 제도 대안을 조건까지 쓰세요.', columns: ['누가', '무엇을 지울 수 있나', '빼는 경우', '까닭'], cells: [['', '', '', '']] }] },
        notes: '찬반 어느 쪽도 정답이 아니다(근거다운 카드는 양쪽에 다 있다). 함정은 낙인·무관심뿐이다. 실제 삭제 지원 제도의 이름·세부는 다루지 않는다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.leak-chart', type: 'activity', title: '자주 공개하는 정보 띠그래프',
        method: '가상 자료: 정보 종류별 노출', tool: 'chart', minutes: 18,
        levels: { easy: '띠그래프에 값이 보이는 채로 가장 많이 공개하는 정보 하나를 읽는다.', base: '상위 세 정보의 합을 읽고, 표 빈칸을 채우고, 함께 공개되면 위험이 커지는 짝을 고른다.', challenge: '값을 숨긴 그래프를 읽고, 활동지에 이 설문 방법의 한계(누구에게·어떻게 물었나)를 쓴다.' },
        activity: {
          title: '프로필 공개 정보 설문', tool: 'chart',
          teacher: '"가상 학교 학생들에게 \'프로필에 가장 자주 공개하는 정보 하나\'를 물은 가상 설문이에요." 가장 긴 띠부터 읽게 한다. "연락처가 가장 적으니까 괜찮은 거죠?"라는 말에는 "학교 이름, 얼굴 사진, 사는 동네가 함께 보이면 무엇을 알 수 있을까요? 하나씩은 작아도 모이면 커져요"라고 되묻는다. 설문은 응답자 수와 묻는 방법에 따라 결과가 달라진다는 점, 이 자료는 가상이라는 점을 밝힌다.',
          task: '가상 설문 띠그래프를 읽고, 공개 정보의 위험도를 매겨요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '띠그래프에서 가장 많이 공개하는 정보를 고르세요.', toolOptions: BAND({ question: '가장 많이 공개하는 정보는?', choices: LEAK.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '상위 세 정보의 비율을 합하면 몇 %인지 수로 쓰세요.', toolOptions: BAND({ question: '상위 세 정보의 합(%)은?' }), target: { value: 75 }, difficulty: 0.25,
              hints: ['가장 긴 띠부터 세 칸의 백분율을 찾아 더하세요.'] },
            { prompt: '그래프를 읽고 표의 빈칸(사는 동네·생일의 비율)을 채우세요.', toolOptions: BAND({ showTable: true, tableBlanks: [2, 3] }), target: { table: true }, difficulty: 0.25 },
            { prompt: '함께 공개되면 낯선 사람이 나를 찾아올 수 있을 만큼 위험이 커지는 짝을 고르세요.', toolOptions: BAND({ question: '위험이 가장 커지는 짝은?', choices: ['학교 이름 + 얼굴 사진', '좋아하는 음악 + 좋아하는 색', '생일 + 좋아하는 음식'], why: ['', '취향 정보만으로는 나를 찾기 어려워요.', '생일은 조심할 정보지만, 음식 취향과 합쳐도 나를 찾아오기는 어려워요.'] }), target: { pick: 0 }, difficulty: 0.3,
              conclude: '정보는 하나씩보다 모일 때 위험해요. 학교·얼굴·동네가 함께 보이면 나를 찾아올 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 설문 결과를 그대로 믿기 어려운 까닭 하나(누구에게·어떻게 물었나)와 보완할 방법을 쓰세요.' }] },
        notes: '설문과 수치는 가상이다(화면 제목에 밝힘). 학생의 실제 프로필 정보를 조사하지 않는다.',
      }),

      M({
        id: 'wrap.principle', type: 'wrap', title: '나의 디지털 발자국 원칙',
        method: '나의 디지털 발자국 원칙', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 문장 틀(올리기 전·공유하기 전)을 보이고 두 문장으로 쓰게 한다.', base: '게시·공유·검색에서 지킬 원칙 네 문장을 쓰고 기준표(구체성·타인 존중·진로 고려·실천 가능)로 점검한다.', challenge: '1년 뒤 원칙을 다시 볼 점검일을 활동지에 정해 쓴다.' },
        wrap: {
          teacher: '"민의 발자국 지도, 결의 5년, 온의 캡처를 떠올리며 나의 원칙 네 가지를 써요. 올리기 전에, 남의 것을 공유하기 전에, 검색하고 저장할 때, 그리고 몇 년 뒤의 나를 위해." \'조심한다\'고만 쓴 학생에게 "무엇을 확인하는 걸까요? 3초 동안 무엇을 물을지 써 볼까요?"라고 묻는다. 원칙에 남의 동의가 빠졌다면 온의 장면을 떠올리게 한다. 원칙은 채점하지 않고 기준표로 스스로 점검한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '게시·공유·검색에서 내가 지킬 디지털 발자국 원칙을 네 문장으로 쓰세요.', minChars: 60, maxChars: 400, starter: '올리기 전에 나는 ~. 남의 것을 공유하기 전에 ~. 검색·저장할 때 ~. 몇 년 뒤의 나를 위해 ~.' }, prompt: '나의 디지털 발자국 원칙을 네 문장으로 쓰고 기준표로 점검하세요.', target: { selfCheck: ['무엇을 확인할지 구체적으로 썼다', '남의 동의를 구한다는 원칙이 있다', '몇 년 뒤의 진로·평판을 생각했다', '내가 실제로 지킬 수 있다'], sentences: [3, 5] }, difficulty: 0.25 },
            { type: 'choice', prompt: '비공개 계정에 대한 설명으로 맞는 것은?', options: ['비공개면 아무 기록도 남지 않는다', '비공개여도 결제·위치 기록과 친구의 캡처·공유로 정보가 남을 수 있다', '비공개면 친구가 공유해도 내 공개 범위를 따른다'], answer: 1, difficulty: 0.15, explain: '공개 범위는 내 게시물을 누가 보는지만 정해요. 다른 곳의 기록과 남이 퍼 나른 사본은 남아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 디지털 발자국 원칙',
          items: [
            { type: 'table', prompt: '원칙 네 가지를 정리하세요.', columns: ['올리기 전', '공유하기 전', '검색·저장할 때', '몇 년 뒤의 나'], cells: [['', '', '', '']] },
            { type: 'short', prompt: '1년 뒤 이 원칙을 다시 볼 날을 정하고, 그때 무엇을 확인할지 쓰세요.' },
          ],
        },
        notes: '원칙 글은 채점하지 않는다. 학생의 실제 게시물·계정 이야기를 쓰게 하지 않는다.',
      }),
      M({
        id: 'wrap.campaign', type: 'wrap', title: '"올리기 전 3초" 캠페인 카드',
        method: '정보윤리 캠페인 카드', tool: 'collage', minutes: 7,
        levels: { easy: '교사가 문구 자리(긴 네모)를 먼저 놓아 보이고, 상징 조각 둘을 더해 카드를 꾸민다.', base: '문구 자리와 상징 조각 넷 이상으로 후배용 캠페인 카드를 배치하고 점검한다.', challenge: '대상을 중학생으로 정해 문구를 그 나이에 맞게 고쳐 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 후배에게 전하는 캠페인 카드를 한 장 꾸며요. 문구는 활동지에 먼저 쓰고, 판에는 문구 자리와 상징 조각을 배치해요." 볼 사람을 먼저 정하게 한다. \'올리면 인생 끝\'처럼 겁을 주는 문구가 보이면 "겁을 주면 숨기게 될까요, 멈추게 될까요? 3초 동안 무엇을 물을지 알려 주는 문구로 바꿔 볼까요?"라고 묻는다. 실제 사람 사진·이름은 넣지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'square', 'circle', 'triangle', 'star', 'heart', 'semi'] }, prompt: '캠페인 카드 판에 문구 자리(긴 네모 하나 이상)와 상징 조각을 배치하고 점검하세요.', target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['문구를 읽을 자리를 크게 두었다', '멈춤이나 확인을 나타내는 상징을 놓았다', '볼 사람을 정했다'], minPieces: 4 }, difficulty: 0.2 },
            { type: 'choice', prompt: '후배용 정보윤리 캠페인 문구로 가장 알맞은 것은?', options: ['한 번 올리면 인생 끝!', '올리기 전 3초: 이 사람이 동의했을까? 5년 뒤에도 괜찮을까?', '들키지 않게 비공개로 올리자'], answer: 1, difficulty: 0.15, explain: '겁을 주거나 숨기게 하는 문구보다, 멈추고 물을 질문을 알려 주는 문구가 행동을 바꿔요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '"올리기 전 3초" 캠페인',
          items: [
            { type: 'short', prompt: '캠페인 문구(한 줄)와 볼 사람을 쓰세요.' },
            { type: 'table', prompt: '대상에 맞게 문구를 고쳐 보세요.', columns: ['대상', '문구', '바꾼 까닭'], cells: [['고등학생', '', ''], ['중학생', '', '']] },
          ],
        },
        notes: '교구 한계: collage 는 글을 놓지 못해 문구는 활동지에 쓰고 판에는 문구 자리와 상징만 배치한다. 실제 사람 사진·이름은 넣지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 4. 생성형 AI와 생각하는 습관 (12학년)
  // ======================================================================================================
  {
    const M = MOD('genai-habit', [12]);
    // 같은 보고서, 두 가상 학생의 과정
    const STEPS2 = [
      { id: 'a1', text: 'AI에게 개요를 묻고 자기 생각과 견준다', motif: 'star' },
      { id: 'a2', text: 'AI 초안의 출처를 하나씩 찾아 확인한다', motif: 'flower' },
      { id: 'a3', text: '틀린 숫자 하나를 찾아 고친다', motif: 'tree' },
      { id: 'b1', text: '주제를 넣고 나온 글을 그대로 복사한다', motif: 'cloud' },
      { id: 'b2', text: '출처 칸에 AI가 만든 책 이름을 그대로 쓴다', motif: 'rain' },
      { id: 'b3', text: '발표 날 질문에 "글에 있는 대로예요"라고만 한다', motif: 'storm' }];
    // 가상 설문: AI를 어디에 쓰나
    const SURV = [['자료 요약', 35], ['맞춤법 고치기', 25], ['과제 글 통째로', 20], ['고민 상담', 12], ['기타', 8]];
    const SBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '가상 설문: 생성형 AI를 가장 많이 쓰는 곳(가상 자료, 응답자 %)', unit: '%', xLabel: '쓰는 곳', yLabel: '응답 비율', data: SURV, scale: 5, max: 40 }, more);
    // 맡길 일·스스로 할 일·사람에게 묻기
    const TOOL = ['긴 자료의 요점을 먼저 훑어보기', '맞춤법과 띄어쓰기 고치기', '영어 문장 뜻 확인하기'];
    const SELF = ['보고서의 내 주장 정하기', '자기소개서의 경험 문장 쓰기', '토론에서 내 반론 생각하기'];
    const PEOPLE = ['친구와의 다툼으로 힘든 마음', '진로 선택을 두고 가족과 나눌 고민', '몸이 아픈데 약을 먹어도 되는지'];
    // 마감 전날 갈림길(가상 인물 나래)
    const DUE = { text: '12학년 나래는 진로 탐구 보고서 마감 2시간 전이다. AI에게 주제를 넣자 그럴듯한 글이 나왔다. 학교 규칙은 \'AI를 썼다면 쓴 곳을 밝힌다\'이다.', who: '나래', motif: 'cloud', choices: [
      { id: 'copy', text: '나온 글을 그대로 낸다', result: '마감은 지켰다.', impact: [{ who: '나래', text: '보고서에 내 생각이 없다', tone: -1 }],
        next: { text: '다음 주 발표에서 선생님이 "이 통계의 출처는 어디예요?"라고 묻는다. 나래는 모른다.', choices: [
          { id: 'admit', text: 'AI 글을 그대로 냈다고 밝히고 다시 해 오겠다고 한다', result: '선생님이 다시 낼 기회를 준다. 출처를 찾아보니 통계가 틀려 있었다.', impact: [{ who: '나래', text: '늦었지만 확인하는 법을 배운다', tone: 0 }],
            next: { text: '다시 쓰는 데 사흘이 걸렸다. 다음 과제가 나왔다.', choices: [
              { id: 'plan', text: '이번엔 AI로 개요만 받고 출처를 확인하며 내가 쓴다', result: '시간은 걸렸지만 발표 질문에 답할 수 있다.', impact: [{ who: '나래', text: '내 말로 설명할 수 있다', tone: 1 }], ending: '한 번의 실수가 확인하는 습관의 시작이 된다.' },
              { id: 'again', text: '이번엔 들키지 않게 말투만 바꿔 낸다', result: '같은 질문 앞에서 또 막힌다.', impact: [{ who: '나래', text: '배운 것이 남지 않는다', tone: -1 }], ending: '말투를 바꿔도 생각을 맡긴 것은 그대로다.' }] } },
          { id: 'bluff', text: '"인터넷에서 봤어요"라고 둘러댄다', result: '선생님이 함께 찾아보자고 하자 그 통계는 어디에도 없었다.', impact: [{ who: '나래', text: '믿음을 잃는다', tone: -1 }], ending: 'AI가 만든 틀린 내용은 확인하지 않은 사람의 책임이 된다.' }] } },
      { id: 'draft', text: 'AI 글을 초안 삼아 출처를 확인하며 고쳐 쓴다', result: '2시간 안에 다 고치기는 빠듯하다.', impact: [{ who: '나래', text: '내 생각이 들어가기 시작한다', tone: 1 }],
        next: { text: '확인해 보니 초안의 통계 하나가 출처가 없다. 마감까지 30분 남았다.', choices: [
          { id: 'cutstat', text: '확인 못 한 통계는 빼고 \'AI 초안을 고쳐 썼다\'고 밝힌다', result: '조금 짧아졌지만 모든 문장을 설명할 수 있다.', impact: [{ who: '나래', text: '규칙과 내 생각을 함께 지킨다', tone: 1 }],
            next: { text: '발표 날, 선생님이 "왜 그 통계를 뺐어요?"라고 묻는다.', choices: [
              { id: 'explain', text: '출처를 확인하지 못해서 뺐다고 설명한다', result: '선생님이 확인하는 태도를 칭찬한다.', impact: [{ who: '나래', text: '스스로 판단한 근거를 말할 수 있다', tone: 1 }], ending: 'AI를 도구로 쓰고, 판단은 내가 한다.' },
              { id: 'shrug', text: '"그냥요"라고 답한다', result: '선생님이 고개를 갸웃한다.', impact: [{ who: '나래', text: '잘한 판단을 설명하지 못한다', tone: 0 }], ending: '좋은 선택도 근거를 말할 수 있어야 내 것이 된다.' }] } },
          { id: 'keepstat', text: '그럴듯하니 통계를 그대로 둔다', result: '발표에서 그 통계가 틀렸다는 지적을 받는다.', impact: [{ who: '나래', text: '확인하지 않은 한 줄이 전체를 흔든다', tone: -1 }], ending: '확인 못 한 내용은 빼는 것이 더 정확하다.' }] } },
      { id: 'extend', text: '선생님께 사정을 말하고 마감 연장을 부탁한다', result: '선생님이 하루를 더 준다.', impact: [{ who: '나래', text: '시간을 얻는다', tone: 1 }], ending: '급할 때는 생각을 맡기기보다 도움을 청할 수 있다.' }] };
    const DUE_P2 = [['draft', 'cutstat'], ['copy', 'admit'], ['extend']];
    const DUE_P3 = [['draft', 'cutstat', 'explain'], ['copy', 'admit', 'plan'], ['extend']];
    const DUE_R = [
      { id: 'verify', text: 'AI 답은 틀릴 수 있어 출처를 확인해야 한다' },
      { id: 'mine', text: '설명할 수 있는 문장만 내 이름으로 낸다' },
      { id: 'rule', text: 'AI를 쓴 곳을 밝히는 규칙을 지킨다' },
      { id: 'right', text: 'AI 답은 늘 정확하니 그대로 내도 된다', why: 'AI는 그럴듯하지만 틀린 내용이나 없는 출처를 만들 수 있어요. 확인은 쓰는 사람의 몫이에요.' },
      { id: 'catch', text: '들키지만 않으면 괜찮다', why: '들키는지가 아니라, 내가 배운 것이 남는지와 규칙을 지켰는지가 기준이에요.' }];
    // 검증 흐름 판(별 = 출처 확인·다른 자료 비교·내 말로 고치기, 깃발 = 제출, 바위 = 틀린 답 함정)
    const VF_BASE = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 3], [2, 3], [3, 3]], rocks: [[1, 2], [3, 1]] };
    const VF_EASY = { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 1], [2, 1]], rocks: [] };
    const VF_HARD = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 3], [2, 3], [3, 3]], rocks: [[1, 2], [3, 1], [2, 1], [4, 3]] };
    // 과제 AI 허용 토론
    const YES = ['쓴 곳을 밝히면 도구 쓰는 법을 배울 수 있다', '자료 요약에 쓰면 생각할 시간이 는다', '졸업 뒤 일터에서 쓸 도구를 미리 익힌다'];
    const NO = ['글쓰기로 생각을 기르는 연습이 줄어든다', '누가 썼는지 평가하기 어려워진다', '쓸 수 있는 학생과 없는 학생 사이 차이가 생긴다'];
    const NOTA = ['AI를 쓰는 학생은 다 게으르다', '어차피 다 몰래 쓰니 규칙은 소용없다'];

    MODS.push(
      M({
        id: 'intro.two-student', type: 'intro', title: '같은 보고서, 두 학생의 과정',
        method: '두 학생의 과제 과정', tool: 'story', minutes: 7,
        levels: { easy: '교사가 발표 날 결과(답한 학생·막힌 학생)만 견주어 보인다.', base: '두 가상 학생의 과정 카드 여섯을 \'스스로 고친 단비\'·\'그대로 낸 겸\' 칸에 나누는 시연을 보고 발표 날 결과와 잇는다.', challenge: '두 결과를 가른 습관에 이름을 붙인다(확인하기·내 말로 고치기).' },
        intro: {
          teacher: '"단비와 겸은 같은 주제의 보고서를 둘 다 AI로 시작했어요. 그런데 발표 날, 한 명은 질문에 답했고 한 명은 막혔어요." 시연 단추로 과정 카드가 두 칸에 나뉘는 모습을 보여 준다. "AI 썼으면 둘 다 똑같은 거 아니에요?"라는 말에는 "둘 다 AI를 썼어요. 무엇이 달랐죠? 출처를 찾은 사람과 AI가 만든 책 이름을 그대로 쓴 사람"이라고 짚는다. AI를 쓰느냐 마느냐가 아니라, 생각을 맡겼느냐 도구로 썼느냐가 오늘의 질문이다.',
          student: '같은 보고서를 AI로 시작한 두 가상 학생의 과정 카드를 나누어 보세요. 발표 날 결과를 가른 습관이 무엇인지 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'sort', title: '두 학생의 과정', slots: [{ id: 'self', label: '스스로 고친 단비' }, { id: 'copy', label: '그대로 낸 겸' }], cards: STEPS2 }, sequence: [{ sort: { self: ['a1', 'a2', 'a3'], copy: ['b1', 'b2', 'b3'] } }] },
          art: { draw: 'two paper desks side by side, on the left a paper student with a magnifying glass checking paper source cards, on the right a paper student pressing a big paper copy button, a paper presentation stage with a question mark in front of both', banner: '같은 도구, 다른 습관', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '단비·겸은 가상 인물이다. 학생에게 자기 AI 사용을 고백하게 하지 않는다. 과제의 AI 사용 규칙은 학교·교과 규칙을 따른다.',
      }),
      M({
        id: 'intro.use-survey', type: 'intro', title: 'AI를 어디에 쓰나, 가상 설문',
        method: '가상 설문 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 의존이 걱정되는 한 항목(과제 글 통째로)을 짚으며 읽는다.', base: '막대 다섯을 읽고 의존이 걱정되는 두 항목(과제 글 통째로·고민 상담)을 고르는 시연을 보고 까닭을 말한다.', challenge: '설문 문항 자체의 한계(\'가장 많이 쓰는 곳 하나\'만 물음)를 말한다.' },
        intro: {
          teacher: '"가상 학교 12학년에게 \'생성형 AI를 가장 많이 쓰는 곳 하나\'를 물은 가상 설문이에요." 시연 단추로 막대를 읽고 걱정되는 항목을 고르는 모습을 보여 준다. "요약이 제일 많으니 요약이 제일 위험하죠?"라는 말에는 "많이 쓰는 것과 생각을 맡기는 것은 같을까요? 요약은 생각할 시간을 벌어 줄 수도 있어요. 과제 글 통째로는요?"라고 되묻는다. 고민 상담 항목에서는 마음의 고민은 믿을 사람에게도 이어야 한다는 점을 짚는다. 수치는 가상이다.',
          student: '가상 설문 막대그래프를 읽고, 생각을 통째로 맡기는 의존이 걱정되는 항목을 골라 보세요. 많이 쓰는 것과 의존은 다를 수 있어요.',
          demo: { tool: 'chart', options: SBAR({ question: '생각을 통째로 맡길 걱정이 가장 큰 항목은?', choices: SURV.map((x) => x[0]), showValues: true }), sequence: [{ pick: 2 }] },
          art: { draw: 'a paper bar chart with five paper columns of different heights standing on a paper desk, a small paper robot head beside the chart, a paper student pointing at one column with a paper pencil', banner: '많이 쓰는 것과 맡기는 것', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '설문과 수치는 가상이다(화면 제목에 밝힘). 학생의 실제 AI 사용을 조사·발표하지 않는다.',
      }),

      M({
        id: 'activity.task-sort', type: 'activity', title: '맡길 일, 스스로 할 일, 사람에게 물을 일',
        method: '맡길 일·스스로 할 일', tool: 'sortboard', minutes: 17,
        levels: { easy: '바구니마다 카드 둘씩, 틀리면 까닭을 듣고 되돌아오며 나눈다.', base: '카드 아홉을 도구로 쓰기·스스로 하기·사람에게 묻기 바구니에 나누고, 기준이 되는 질문을 고른다.', challenge: '진로에 따라 바구니가 달라질 수 있는 카드 셋이 더해지고, 활동지에 내 진로에서 달라지는 카드를 토론해 쓴다.' },
        activity: {
          title: 'AI에게 맡길 일 나누기', tool: 'sortboard',
          teacher: '"카드마다 이렇게 물어 봐요. 이 일은 내가 배우거나 판단해야 하는 일인가? 틀리면 누가 책임지나? 사람의 마음이나 몸이 걸린 일인가?" 카드를 넣을 때마다 까닭을 묻는다. \'자기소개서의 경험 문장\'을 도구로 쓰기에 넣은 학생에게 "그 경험은 누구의 것이죠? AI가 내 경험을 알까요?"라고 묻는다. \'약을 먹어도 되는지\'를 AI에 넣으면 "틀렸을 때 내 몸이 책임져요. 누구에게 물어야 할까요?"라고 묻는다. AI에 개인정보를 넣지 않는다는 원칙도 함께 짚는다.',
          task: '할 일 카드를 도구로 쓰기·스스로 하기·사람에게 묻기 바구니에 나누고, 나눈 기준을 말해 보세요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBQ('할 일 카드를 도구로 쓰기·스스로 하기·사람에게 묻기 바구니에 나누세요.', ['도구로 쓰기', '스스로 하기', '사람에게 묻기'], [TOOL, SELF, PEOPLE], { k: 2, hard: [['발표 자료의 그림 아이디어 떠올리기'], ['대학 면접 예상 답변의 내 생각'], ['상담 선생님과 나눌 학업 고민']], d: 0.3,
              more: { hints: ['카드마다 \'내가 배우거나 판단할 일인가, 틀리면 누가 책임지나\'를 물어 보세요.'], conclude: '빠르게 처리해도 되는 일은 도구로, 내 생각과 경험은 스스로, 마음과 몸이 걸린 일은 사람에게.' } }),
            SBQ('AI에게 넣어도 되는 것과 넣지 않을 것을 나누세요.', ['넣어도 되는 것', '넣지 않을 것'], [['공개된 기사 문단', '내가 쓴 글의 맞춤법 확인 부탁', '수학 개념의 다른 설명 요청'], ['친구의 이름과 고민 내용', '내 주소와 연락처', '가족 사진']], { k: 2, d: 0.3,
              more: { conclude: 'AI에 넣은 내용은 어디에 남고 어떻게 쓰일지 내가 다 알 수 없어요. 나와 남의 개인정보는 넣지 않아요.' } }),
            SBQ('나눌 때 쓸 질문을 \'도구로 쓸 신호\'·\'스스로 할 신호\' 바구니에 나누세요.', ['도구로 쓸 신호', '스스로 할 신호'], [['결과를 내가 쉽게 확인할 수 있다', '반복되는 기계적인 일이다'], ['이 일로 내가 배워야 할 것이 있다', '내 경험·판단이 담겨야 한다']], { k: 1, traps: ['빨리 끝낼 수 있으면 다 맡긴다'], d: 0.35,
              more: { conclude: '기준이 있으면 새 일이 와도 나눌 수 있어요. \'빨리 끝나니까\'는 기준이 아니라 유혹이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 진로에서 바구니가 달라질 수 있는 일을 써 보세요.', columns: ['내 진로', '달라지는 일', '어느 바구니로', '까닭'], cells: [['', '', '', '']] }] },
        notes: '카드의 바구니는 오늘 기준(배울 일·책임·마음과 몸)에 따른 것이다. 진로에 따라 달라질 수 있어 도전 단계 활동지에서 토론한다. 학교·교과의 AI 사용 규칙이 우선한다.',
      }),
      M({
        id: 'activity.ai-dilemma', type: 'activity', title: '마감 2시간 전 갈림길',
        method: '마감 전날 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '나래의 갈림길을 2단계(낼 방법 → 다음 반응)로 줄여 따라가고 근거 카드를 고른다.', base: '나래의 갈림길을 3단계로 끝까지 가 평가·학습 결과를 보고, 그대로 낸 길과 고쳐 쓴 길을 견주고, 근거가 아닌 생각(늘 정확하다·안 들키면 된다)을 가려낸다.', challenge: '첫 문항에서 다른 끝 장면 하나를 더 가 본 뒤 근거를 고르고, 두 길의 결과를 활동지 표에 견준다.' },
        activity: {
          title: '나래의 마감 2시간', tool: 'dilemma',
          teacher: '"나래는 마감 2시간 전이에요. AI가 그럴듯한 글을 내놓았어요. 학교 규칙은 \'썼다면 쓴 곳을 밝힌다\'예요." 선택마다 결과 글을 읽게 한다. \'AI 답은 늘 정확하다\' 카드를 고른 학생에게 "발표 날 통계는 어떻게 됐나요?"라고 묻는다. 그대로 낸 길에서도 \'밝히고 다시 하겠다\'는 끝은 배움이 남는 길이라는 점, 마감 연장을 부탁하는 것도 좋은 선택이라는 점을 짚는다. "다들 그렇게 내는데요?"라는 말에는 "다들 내는지가 아니라, 발표 날 질문에 내가 답할 수 있는지가 기준이에요"라고 답한다.',
          task: '나래의 마감 갈림길을 끝까지 따라가 평가와 배움의 결과를 보고, 내 선택의 근거 카드를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('나래의 갈림길을 끝까지 따라가고, 평가와 배움을 함께 지키는 길과 그 근거 카드를 고르세요.', DUE, DUE_P2, DUE_P3, DUE_R, ['verify', 'mine', 'rule'], { d: 0.4, opt: { title: '나래의 마감 2시간' },
              more: { hints: ['발표 날 질문에 나래가 답할 수 있었는지를 기준으로 결과 글을 보세요.'], conclude: 'AI를 도구로 쓰고, 확인하고, 쓴 곳을 밝히고, 설명할 수 있는 것만 내요. 급하면 도움을 청할 수도 있어요.' } }),
            EXPLOREQ('\'그대로 낸 길\'과 \'고쳐 쓴 길\'의 끝 장면을 모두 가 보고 평가·배움 결과를 견주세요.', DUE, DUE_R, ['두 길의 끝 장면을 모두 확인했다', '발표 날 결과가 달라진 까닭을 찾았다'], { d: 0.35,
              more: { conclude: '그대로 낸 길은 시간을 아낀 것 같지만 다시 쓰는 데 사흘이 걸렸어요. 확인은 나중의 시간을 아껴요.' } }),
            DIL3('같은 갈림길을 끝까지 가며, 근거가 아닌 생각 두 장을 빼고 근거만 고르세요.', DUE, DUE_P2, DUE_P3, DUE_R, ['verify', 'mine'], { d: 0.45, opt: { title: '함정 생각 찾기', revealAfterCheck: true },
              more: { hints: ['AI를 믿어도 된다고 하거나 들키는지를 걱정하는 카드를 먼저 찾아 빼세요.'] } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 길을 견주세요.', columns: ['', '평가 결과', '배운 것', '걸린 시간'], cells: [['그대로 낸 길', '', '', ''], ['고쳐 쓴 길', '', '', '']] }] },
        notes: '나래와 학교 규칙은 가상이다. 실제 과제의 AI 사용 허용 범위는 학교·교과 규칙을 따른다. 학생의 AI 부정 사용을 묻지 않는다.',
      }),
      M({
        id: 'activity.verify-flow', type: 'activity', title: 'AI 답 검증 흐름을 블록으로',
        method: '검증 흐름 설계', tool: 'block-coding', minutes: 17,
        levels: { easy: '검증 두 단계(별 둘 = 출처 확인·다른 자료 비교) 판에서 거북이를 제출 깃발까지 보낸다.', base: '검증 세 단계(별 셋 = 출처 확인·다른 자료 비교·내 말로 고치기) 판에서 별을 모두 들러 제출에 닿게 하고, 친구 흐름을 따라가 보고, 블록 다섯 안으로 줄인다.', challenge: '틀린 답 함정 바위가 더해진 판에서 별 셋을 들르고 제출에 닿게 한다.' },
        activity: {
          title: '검증 흐름 설계', tool: 'block-coding',
          teacher: '"거북이는 지금 \'AI 답\' 칸에서 출발해요. 별 셋은 차례대로 ① 출처 확인 ② 다른 자료와 비교 ③ 내 말로 고치기, 깃발은 제출, 바위는 \'틀린 답\'이에요." 실행할 때마다 "거북이가 어느 별을 건너뛰었나요? 그 단계를 건너뛰면 무엇이 남을까요?"라고 묻는다. "출처만 확인하면 되죠?"라는 말에는 "출처가 있어도 그 자료가 맞는지는 다른 자료와 견줘 봐야 해요. 그리고 내 말로 고쳐야 설명할 수 있어요"라고 답한다. 판은 검증 순서의 비유이고, 실제 검증 단계는 활동지에 글로 쓴다.',
          task: '별(검증 단계)을 모두 들러 깃발(제출)에 닿는 검증 흐름을 만들고, 단계를 활동지에 글로 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 셋(①출처 확인 ②다른 자료 비교 ③내 말로 고치기)을 모두 들르고 바위(틀린 답)를 피해 깃발(제출)에 닿게 하세요.', VF_BASE, { stars: true }, {
              easy: { prompt: '별 둘(①출처 확인 ②다른 자료 비교)을 들러 깃발(제출)에 닿게 하세요(두 단계).', board: VF_EASY, target: { stars: true } },
              challenge: { prompt: '틀린 답 함정 바위가 둘 더 놓인 판에서 별 셋을 들르고 깃발(제출)에 닿게 하세요(함정 칸).', board: VF_HARD, target: { stars: true } },
              d: 0.35, more: { hints: ['별이 한 줄로 놓인 아래쪽부터 따라가고, 줄 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구의 검증 흐름이에요: 앞으로 1칸 → 왼쪽으로 돌기 → 앞으로 1칸. 출처만 확인하고 곧장 꺾어요. 거북이가 멈출 칸을 고르세요.', { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 3], [2, 3], [3, 3]], rocks: [[1, 1]] }, ['fwd', 'left', 'fwd'], { x: 1, y: 2 }, { d: 0.3,
              more: { conclude: '출처만 보고 다른 자료와 견주지 않으면 \'틀린 답\' 바로 앞에 서요. 단계를 건너뛴 검증은 검증이 아니에요.' } }),
            BCQ('블록을 5개 안으로 써서 별 셋을 들르고 깃발에 닿게 하세요. 같은 걸음은 반복으로 묶어요.', VF_BASE, { stars: true, maxBlocks: 5 }, { d: 0.4,
              more: { conclude: '검증 흐름은 짧고 늘 같은 차례일수록 습관이 돼요: 출처 → 비교 → 내 말로 → 제출.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 별을 실제 검증 단계 글로 옮겨 쓰세요.', columns: ['단계', '할 일', '건너뛰면 생기는 일'], cells: [['① 출처 확인', '', ''], ['② 다른 자료와 비교', '', ''], ['③ 내 말로 고치기', '', ''], ['제출', '쓴 곳 밝히기', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록·칸에는 글을 붙일 수 없어 검증 단계를 별 칸으로, 제출을 깃발로, 틀린 답을 바위로 나타냈다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '과제의 AI 허용 찬반',
        method: '찬반 토론: 과제에서 AI 허용', tool: 'mindmap', minutes: 18,
        levels: { easy: '찬성·반대 가지에 근거 카드를 둘씩, 바로 피드백을 받으며 붙인다.', base: '찬성·반대 근거를 셋씩 붙이고(근거가 아닌 말은 남기고), 근거마다 반론을 잇고, 조건부 대안을 고른다.', challenge: '헷갈리는 카드가 더해진 판을 나누고, 활동지에 우리 반 AI 사용 규칙 초안을 쓴다.' },
        activity: {
          title: 'AI 허용 근거 그물', tool: 'mindmap',
          teacher: '"논제는 \'학교 과제에 AI 사용을 허용해야 한다\'예요. 졸업 뒤 일터에서는 AI를 쓰게 될 테고, 학교는 생각하는 힘을 기르는 곳이기도 해요. 둘 다 맞는 말이에요." 카드를 붙일 때마다 "이 근거가 지키려는 것은 무엇인가요? 배움? 공정? 준비?"라고 묻는다. \'AI 쓰는 학생은 다 게으르다\' 카드에는 "단비도 AI를 썼어요. 게을렀나요?"라고 묻는다. \'어차피 다 몰래 쓴다\'에는 "그래서 규칙이 소용없을까요, 오히려 분명한 규칙이 필요할까요?"라고 묻는다. 조건부 대안이 두 걱정을 함께 담는지를 마지막에 본다.',
          task: '과제의 AI 허용 찬반 근거를 가지에 나누고, 근거마다 반론을 이어 보세요. 근거가 아닌 말은 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('과제의 AI 허용 찬성·반대 근거를 가지에 나누세요(근거가 아닌 말은 남겨요).', ['찬성 근거', '반대 근거'], [YES, NO], { k: 2, traps: NOTA, hard: [['맞춤법 같은 기계적 일은 이미 도구로 고친다'], ['AI 답의 틀린 내용을 학생이 걸러 내기 어렵다']], d: 0.3, opt: { topic: '과제의 AI 사용 허용' },
              more: { hints: ['카드가 배움·공정·준비 가운데 무엇을 지키려는지, 아니면 사람을 한데 묶어 판단하는지 보세요.'] } }),
            MATCHQ('찬성 근거마다 그에 답하는 반대 측 반론을 짝지으세요.', [[YES[0], '밝혀도 생각하는 연습이 빠지면 배움이 줄어든다'], [YES[1], '요약만 읽으면 원문의 중요한 맥락을 놓친다'], [YES[2], '도구를 익히기 전에 판단하는 힘이 먼저다']], { k: 2, extra: ['AI는 나쁜 것이다'], d: 0.35, opt: { topic: '근거와 반론' },
              more: { conclude: '좋은 반론은 상대가 지키려는 가치를 인정하고, 그 가치를 지킬 다른 길을 짚어요.' } }),
            PICKQ('찬성과 반대의 걱정을 함께 담은 조건부 대안만 고르세요.', ['쓴 곳과 고친 곳을 밝히고, 내 생각 단계는 손으로 쓴다', '과제마다 AI를 쓸 수 있는 단계를 선생님이 미리 정한다'], ['모든 과제에 AI를 마음껏 쓴다', '학교 안에서 AI를 한 번도 쓰지 못하게 한다'], { d: 0.35, opt: { topic: '조건부 대안', basket: '함께 담는 대안' },
              more: { conclude: '\'된다·안 된다\'보다 \'어느 단계에서, 어떻게 밝히고\'를 정할 때 배움과 준비를 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 AI 사용 규칙 초안을 써 보세요.', columns: ['쓸 수 있는 단계', '쓰면 안 되는 단계', '밝히는 방법', '어겼을 때'], cells: [['', '', '', '']] }] },
        notes: '찬반 어느 쪽도 정답이 아니다(근거다운 카드는 양쪽에 다 있다). 함정은 낙인·체념뿐이다. 규칙 초안은 학교·교과 규칙 안에서 교사가 함께 검토한다.',
      }),

      M({
        id: 'wrap.principle', type: 'wrap', title: '나의 AI 사용 원칙 다섯 줄',
        method: '나의 AI 사용 원칙', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 문장 틀(맡길 일·검증·개인정보)을 보이고 세 문장으로 쓰게 한다.', base: 'AI 사용 원칙 다섯 문장(맡길 일·검증·출처·시간·개인정보)을 쓰고 기준표로 점검한다.', challenge: '대학·직장 상황에 맞춰 원칙 하나를 고쳐 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 나눈 바구니와 나래의 2시간을 떠올리며 나의 AI 사용 원칙 다섯 줄을 써요. 무엇을 맡기고, 어떻게 확인하고, 출처를 어떻게 밝히고, 언제 쓰고, 무엇은 넣지 않을지." \'적당히 쓴다\'고 쓴 학생에게 "적당히를 다음 과제에서 어떻게 확인할 수 있을까요?"라고 묻는다. 개인정보 원칙이 빠졌다면 바구니 문항을 떠올리게 한다. 원칙은 채점하지 않고 기준표로 스스로 점검한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '나의 AI 사용 원칙을 다섯 문장으로 쓰세요: 맡길 일, 검증 방법, 출처 밝히기, 쓰는 시간, 넣지 않을 정보.', minChars: 80, maxChars: 500, starter: '나는 ~은 AI에 맡긴다. AI 답은 ~로 확인한다. 쓴 곳은 ~로 밝힌다. ~에만 쓴다. ~은 넣지 않는다.' }, prompt: 'AI 사용 원칙 다섯 문장을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['맡길 일과 스스로 할 일을 나눴다', '확인하는 방법을 썼다', '쓴 곳을 밝히는 방법을 썼다', '넣지 않을 개인정보를 썼다'], sentences: [4, 6] }, difficulty: 0.25 },
            { type: 'choice', prompt: '생성형 AI 답에 대한 설명으로 맞는 것은?', options: ['AI 답은 늘 정확하니 확인하지 않아도 된다', 'AI는 그럴듯하지만 틀린 내용이나 없는 출처를 만들 수 있어 확인해야 한다', 'AI가 출처를 적어 주면 그 출처는 꼭 있다'], answer: 1, difficulty: 0.15, explain: 'AI가 적은 출처도 실제로 있는지, 내용이 맞는지 직접 확인해야 해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 AI 사용 원칙',
          items: [
            { type: 'table', prompt: '원칙 다섯 가지를 정리하세요.', columns: ['맡길 일', '검증', '출처', '시간', '넣지 않을 정보'], cells: [['', '', '', '', '']] },
            { type: 'short', prompt: '대학이나 직장에서 이 원칙 가운데 바뀔 것 하나와 그 까닭을 쓰세요.' },
          ],
        },
        notes: '원칙 글은 채점하지 않는다. 학교·교과의 AI 사용 규칙이 우선한다.',
      }),
      M({
        id: 'wrap.time-check', type: 'wrap', title: 'AI를 몰아 쓰는 시간 정하기',
        method: 'AI 사용 시간 점검', tool: 'clock', minutes: 7,
        levels: { easy: '교사가 한 시간대(저녁 확인 시간)를 함께 시계로 맞춘다.', base: '가상 인물 나래의 계획에 따라 AI를 몰아 쓰는 두 시간대를 시계로 맞추고, 그 밖 시간의 쓰임을 고른다.', challenge: '시험 기간 규칙(AI는 채점·확인에만)을 활동지에 더한다.' },
        wrap: {
          teacher: '"아무 때나 AI를 열면 생각하기 전에 묻게 돼요. 나래는 AI를 하루 두 시간대에만 몰아 쓰기로 했어요. 저녁 7시 30분 자료 요약 시간, 밤 9시 확인 시간." 시계 바늘을 맞추게 한다. "막히면 바로 묻는 게 더 빠르잖아요"라는 말에는 "바로 물으면 빠르지만, 막힌 채로 10분 생각해 본 것이 내 실력이 돼요. 물을 질문을 모아 두었다가 정한 시간에 물어 보세요"라고 답한다. 시간대는 수업용 예시이고, 내 시간대는 활동지에 스스로 정한다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, prompt: '나래의 첫 시간대: 저녁 7시 30분에 자료 요약을 AI로 해요. 시계 바늘로 7시 30분을 나타내세요.', target: { h: 7, m: 30 }, difficulty: 0.15 },
            { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, prompt: '나래의 둘째 시간대: 밤 9시에 내가 쓴 글의 맞춤법을 AI로 확인해요. 시계 바늘로 9시를 나타내세요.', target: { h: 9, m: 0 }, difficulty: 0.15 },
            { type: 'choice', prompt: '정한 시간대 밖에서 문제가 막혔을 때 나래가 할 일로 알맞은 것은?', options: ['바로 AI를 열어 답을 받는다', '물을 질문을 적어 두고 먼저 스스로 10분 생각한다', '그날 공부를 그만둔다'], answer: 1, difficulty: 0.15, explain: '막힌 채로 생각해 본 시간이 내 실력이 돼요. 질문은 모아 두었다가 정한 시간에 물어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: 'AI 몰아 쓰는 시간',
          items: [
            { type: 'table', prompt: '내 AI 시간대를 정하세요(채점하지 않아요).', columns: ['시간대', '무엇에 쓰나', '그 밖 시간에 할 일'], cells: [['', '', ''], ['', '', '']] },
            { type: 'short', prompt: '시험 기간에 더할 규칙 한 문장을 쓰세요.' },
          ],
        },
        notes: '시간대(7시 30분·9시)는 가상 인물의 수업용 예시다. 학생의 실제 AI 사용 시간을 채점하지 않는다.',
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
