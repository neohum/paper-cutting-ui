/* 창체 법정교육 장애인식개선 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 disab 고.
 * 근거: 장애인복지법 제25조·시행령 제16조(법정 매년 1회 1시간 이상, 범교과 기준 연 2시간) — research-mandatory §1,
 *   research-mandatory §2 장애인식개선 고(장애인차별금지, 보편적 설계, 장애인 이동·일자리).
 * 고 기준: 법·제도와 자료 분석·토론(찬반 근거)·제안서·캠페인 설계·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 이 영역의 원칙:
 *   · 장애를 불쌍함·특별함·감동의 볼거리로 그리지 않는다. 장애는 사람의 손상과 환경의 장벽이 만나 생긴다는 관점으로 쓴다.
 *   · 사람 먼저 쓰는 말(‘휠체어를 쓰는 사람’ ‘청각장애가 있는 지원자’). ‘장애우·정상인·장애를 앓다·벙어리·귀머거리’ 같은 말은 쓰지 않고,
 *     나온다면 바로잡는 함정 카드(why 로 고친 말을 알려 줌)로만 쓴다.
 *   · 학생 자신이나 가족의 장애 여부를 묻지 않는다. 장면은 가상 인물(가명 한두 글자)과 가상 시설로 쓴다.
 *   · 찬반 토론(승강기 비용·편의 제공 부담)은 근거를 따지는 활동이다 — 어느 입장이든 쓸 수 있게 하고, 근거가 아닌 말(동정·고정관념)만 함정으로 둔다.
 *   · 법은 근거 파일에 있는 것(장애인복지법 제25조·시행령 제16조, ‘장애인차별금지’)만 이름으로 쓰고 다른 조문 번호·벌칙은 쓰지 않는다.
 *   · 수치 자료(고용·저상버스 비율·읽기 쉬움 점수·비용)는 모두 '가상'이다(화면 제목에 밝힘). 실제 통계는 근거 파일에 없다.
 *   · 전화번호·기관 번호를 쓰지 않는다.
 * 주제 4개, 체계도 계획 모듈 32개 전부.
 *
 * 교구 한계로 계획을 바꾼 곳:
 *   map 은 문항마다 핀 하나 — '장벽 2곳/4곳'은 핀 문항의 수가 아니라 지도에 놓인 장벽 수(쉬움 = 장벽 이름 보이기 + 장벽 둘 지도)로 나눈다(intro 는 시연).
 *   economy 는 돈(원)만 센다 — 편의 제공·여행 예산은 '가상 예산 ○만 원'으로 쓰고 금액은 수업용 예시다.
 *   wordcards 는 영어 낱말 교구라 창체에서는 pick·match(소리 없음)만 쓴다. '고쳐 쓰기'·'그림 기호 곁들이기'는 활동지·말하기로 옮겼다.
 *   story·emotion 정리(성찰)는 내 생각을 자유롭게 쓰는 칸이 없어 생각 카드 고르기(여러 카드 허용)로 하고, 한 줄 글은 출구 short·활동지로 쓴다.
 *   collage 는 글을 놓지 못한다 — 캠페인 문구·포스터 글은 활동지에 쓰고 교구는 배치(크기·대비·자리)만 짓는다.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   social-model 전체: '손상(몸의 상태)과 장벽(환경)이 만나 장애가 생긴다'는 사회적 관점 설명 — 체계도 source 가 '근거 약함'으로 적음.
 *     보건복지부·한국장애인개발원 장애인식개선교육 표준 강의안, 국가인권위원회 장애인 인권 자료로 확인.
 *   social-model.activity.ud-principle·info-access 전체: 보편적 설계를 '누구나·쉽게·안전하게·정보 알기 쉽게' 네 생각으로 줄인 것(원래 원칙은 더 많음)과
 *     학교 시설 예(경사로·자동문·계단 끝 색 띠·자막) — 한국장애인개발원 유니버설디자인 안내, 국토교통부·보건복지부 편의시설 안내로 확인.
 *   social-model.activity.kiosk-test·mobility-self.intro.day-trace: 무인 단말기 접근성 점검 항목(손이 닿는 높이·글자 키우기·음성 안내·실물 단추·넉넉한 시간) —
 *     과학기술정보통신부·한국지능정보사회진흥원 무인정보단말기 접근성 지침으로 확인.
 *   anti-discrim 전체: 장애인차별금지법의 직접차별·간접차별·정당한 편의 제공 거부의 뜻, 채용·면접에서 수어 통역·화면 낭독 프로그램·근무 시간 조정이
 *     정당한 편의의 예라는 설명, '업무와 관계없는 장애 배제 문구'의 판단 — 국가법령정보센터 「장애인차별금지 및 권리구제 등에 관한 법률」, 국가인권위원회 장애차별 안내,
 *     한국장애인고용공단 안내로 확인(조문 번호는 쓰지 않음).
 *   anti-discrim.activity.workplace-plan: 보조공학 기기·통역 지원 같은 편의 비용을 공공 지원으로 덜 수 있다는 교사 발문 — 한국장애인고용공단 지원 제도 안내로 확인.
 *   info-access 전체: 대체 텍스트·자막·쉬운 글·글자와 배경의 대비·색에만 기대지 않기 원칙 — 한국지능정보사회진흥원 웹 접근성 안내(한국형 웹 콘텐츠 접근성 지침),
 *     한국장애인개발원 '이해하기 쉬운 자료' 안내로 확인.
 *   mobility-self 전체: 이동권·저상버스·승강기를 권리로 보는 설명, '우리 없이 우리에 대해 결정하지 말라'(장애인 권리 운동의 표어, 유엔 장애인권리협약 논의에서 널리 쓰임) —
 *     국가인권위원회·보건복지부 장애인 권리 자료, 국토교통부 교통약자 이동편의 안내로 확인.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'disab', band: '고', topic: `disab.h.${topic}`, grades }, o, { id: `disab.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(카드 판 sort — mindmap·story·emotion): groups = 칸마다 카드 글(글 = 카드 id). 쉬움 = 칸마다 앞 k장(easySlots 면 앞 칸 몇 개만), 도전 = hard 덧붙임
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], easySlots = 0, d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (ss, gs) => ({ sort: Object.fromEntries(ss.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(slots, groups), difficulty: d, levels: {} };
    const es = easySlots ? slots.slice(0, easySlots) : slots;
    const eg = groups.slice(0, es.length).map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, easySlots ? `가지 ${easySlots}개, 카드 ${eg.flat().length}장` : `카드 ${eg.flat().length}장`), toolOptions: Object.assign({ cards: mix(eg) }, easySlots ? { slots: es } : {}), target: tgt(es, eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(slots, hg) }; }
    return Object.assign(base, more);
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
  const ORDERQ = (prompt, steps, { k = 3, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
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
  // 낱말 짝(wordcards match): pairs = [[낱말, 뜻]…] — match 는 소리를 내지 않는다
  const WORDQ = (prompt, pairs, { k = 3, d = 0.3, opt = {}, more = {} } = {}) => {
    const w = (ps) => ps.map(([en, ko]) => ({ en, ko }));
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([en]) => [en, en])) });
    const it = { prompt, toolOptions: Object.assign({ words: w(pairs) }, opt), target: t(pairs), difficulty: d };
    if (k < pairs.length) it.levels = { easy: { prompt: pfx(prompt, `낱말 ${k}개`), toolOptions: { words: w(pairs.slice(0, k)) }, target: t(pairs.slice(0, k)) } };
    return Object.assign(it, more);
  };
  // 갈림길(dilemma): 나무를 depth 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 1번, 기본 = 2번, 도전 = 나무 전체(3번). 근거 카드는 모든 단계에서 고른다
  const DILQ = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const full = depth(scene);
    const it = { prompt, toolOptions: Object.assign({ scene: cut(scene, 2), reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } };
    if (full > 2) it.levels.challenge = { prompt: pfx(prompt, `갈림길 ${full}개`), toolOptions: { scene }, target: at(full) };
    return Object.assign(it, more);
  };
  // 열린 토론 갈림길: 어느 길로 가도 되고, 근거 카드만 따진다(some = 근거다운 카드 하나 이상, 함정 없이)
  const OPENQ = (prompt, scene, reasons, good, { d = 0.35, opt = {}, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: { reasons: good, some: true }, difficulty: d }, more);
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀(starter)·쉬운 문장 수, 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, easySent = null, easyPrompt = null, sample = null, plus = null, d = 0.4, more = {} } = {}) => {
    const t = (cs, s) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, s ? { sentences: s } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks, sent), difficulty: d, levels: {} };
    if (starter || easySent) it.levels.easy = Object.assign({}, easyPrompt ? { prompt: easyPrompt } : {}, starter ? { toolOptions: { starter } } : {}, easySent ? { target: t(checks, easySent) } : {});
    if (plus) it.levels.challenge = { prompt: pfx(prompt, '기준 하나 더'), target: t([...checks, plus], sent) };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 점검표(kitchen checklist): items = [[id, 글, 넣을지]…]
  const CHECKQ = (prompt, title, items, { k = 0, d = 0.3, more = {} } = {}) => {
    const mk = (xs) => ({ mode: 'checklist', title, items: xs.map(([id, text]) => ({ id, text })) });
    const it = { prompt, toolOptions: mk(items), target: { checklist: items.filter((x) => x[2]).map((x) => x[0]) }, difficulty: d };
    if (k) { const e = items.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `항목 ${k}개`), toolOptions: mk(e), target: { checklist: e.filter((x) => x[2]).map((x) => x[0]) } } }; }
    return Object.assign(it, more);
  };
  // 짝·모둠이 말로 하는 문항(교구 판에 '해 보았어요' 표시 하나)
  const DONEQ = (prompt, title, label, more = {}) => Object.assign({ prompt, free: true, toolOptions: { title, doneLabel: label } }, more);
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];

  // ======================================================================================================
  // 1. 장애를 만드는 환경의 장벽 (10학년)
  // ======================================================================================================
  {
    const M = MOD('social-model', [10]);
    const PERSON = ['그 사람이 걷지 못해서 못 들어간다', '본인이 더 애써서 계단을 오르면 된다', '휠체어를 쓰는 사람의 몸이 문제다'];
    const ENV = ['입구에 경사로가 없어서 못 들어간다', '하나뿐인 승강기가 고장 난 채로 있다', '다른 출입구를 알리는 안내판이 없다'];
    // 도시 칸 지도(가상): 일상 장벽
    const CITY = { title: '가상 도시의 일상 장벽', grid: [6, 4], places: [
      { name: '계단만 있는 식당 입구', icon: 'market', at: [1, 0] },
      { name: '터치 화면뿐인 무인 단말기', icon: 'office', at: [4, 0] },
      { name: '안내 방송만 있는 역', icon: 'station', at: [2, 2] },
      { name: '턱이 높은 버스 정류장', icon: 'bus', at: [5, 2] },
      { name: '점자 블록이 끊긴 공원 길', icon: 'park', at: [0, 3] },
      { name: '우리 학교', icon: 'school', at: [3, 3] }] };
    // 승강기 설치 토론 갈림길(열린 토론 — 어느 길이든 근거로 따진다)
    const LIFT = { text: '가상 학교 학생회에 "3층 건물에 승강기를 놓자"는 안건이 올라왔다. 지금 휠체어를 쓰는 학생은 없다. 한 위원은 "쓸 사람이 적은데 예산을 써야 하나"라고 묻는다.', who: '학생회 위원 윤', motif: 'house', choices: [
      { id: 'wait', text: '필요한 학생이 입학하면 그때 놓자고 한다', result: '안건이 다음 해로 미뤄진다.', impact: [{ who: '다리를 다친 학생', text: '깁스를 한 두 달 동안 3층 수업에 늦는다', tone: -1 }],
        next: { text: '다음 해, 휠체어를 쓰는 신입생이 입학 상담을 왔다. 공사에는 한 학기가 걸린다.', choices: [
          { id: 'move', text: '그 학생 반만 1층 교실로 옮긴다', result: '그 반은 3층 과학실·도서실 수업 때마다 따로 움직인다.', impact: [{ who: '신입생', text: '친구들과 다른 교실·다른 시간표를 쓴다', tone: -1 }], ending: '기다렸다 고치는 길은 그 사이의 불편을 한 사람에게 몰아준다.' },
          { id: 'rush', text: '서둘러 공사를 시작한다', result: '공사 소음 속에서 한 학기를 보낸다.', impact: [{ who: '신입생', text: '첫 학기를 불편하게 다닌다', tone: 0 }], ending: '미리 했다면 줄었을 불편이 한 학기 남는다.' }] } },
      { id: 'plan', text: '이용할 사람을 조사하고 단계별 설치 계획을 내자고 한다', result: '조사해 보니 다친 학생·무거운 짐을 나르는 급식실·방문하는 보호자도 쓸 사람이었다.', impact: [{ who: '학교 공동체', text: '쓸 사람이 생각보다 많다는 것을 안다', tone: 1 }],
        next: { text: '예산이 한 번에 모자라 교육청 지원 신청과 학교 예산을 나누어 쓰자는 안이 나왔다.', choices: [
          { id: 'split', text: '지원 신청과 학교 예산을 나누어 2년 계획으로 한다', result: '2년째에 승강기가 놓인다.', impact: [{ who: '학교 공동체', text: '누구나 3층에 갈 수 있다', tone: 1 }], ending: '쓸 사람을 넓게 보고 나누어 준비하면 비용 부담도 나뉜다.' },
          { id: 'drop', text: '한 번에 못 하면 안건을 접는다', result: '조사 결과만 남는다.', impact: [{ who: '쓸 사람들', text: '불편이 그대로 남는다', tone: -1 }], ending: '비용이 크다는 것과 못 한다는 것은 다른 말이다.' }] } },
      { id: 'ramp', text: '승강기 대신 1층 출입구 경사로부터 놓자고 한다', result: '적은 예산으로 1층 출입은 쉬워졌다.', impact: [{ who: '휠체어를 쓰는 방문객', text: '1층까지는 들어온다', tone: 0 }], ending: '작은 개선이 먼저 될 수 있지만 3층의 장벽은 남는다.' }] };
    const LIFT_R = [
      { id: 'many', text: '승강기는 다친 사람·짐을 나르는 사람도 쓴다' },
      { id: 'right', text: '학교 시설은 누구나 쓸 수 있어야 한다' },
      { id: 'budget', text: '예산은 한정되어 있어 우선순위를 따져야 한다' },
      { id: 'step', text: '비용은 지원 신청과 단계 계획으로 나눌 수 있다' },
      { id: 'pity', text: '장애인은 불쌍하니까 무조건 해 줘야 한다', why: '동정이 아니라 누구나 시설을 쓸 권리와 쓸 사람의 필요가 근거예요.' },
      { id: 'few', text: '장애 학생은 원래 특수학교에 가면 된다', why: '장애 학생도 일반 학교에서 함께 배울 수 있어요. 학교를 고르는 것은 당사자와 가족의 몫이에요.' }];
    const LIFT_GOOD = ['many', 'right', 'budget', 'step'];
    // 승강기를 놓은 뒤 쓰는 규칙(보편적 설계 갈림길)
    const RULE = { text: '승강기가 놓였다. 첫 주에 "장애 학생만 타게 하자"는 의견이 나왔다.', who: '학생회 위원 윤', motif: 'star', choices: [
      { id: 'only', text: '장애 학생 전용으로 정한다', result: '깁스를 한 학생과 급식실 직원은 계단으로 짐을 나른다.', impact: [{ who: '다친 학생', text: '계단에서 넘어질 뻔한다', tone: -1 }], ending: '전용으로 묶으면 필요한 다른 사람이 빠진다.' },
      { id: 'need', text: '필요한 사람은 누구나 타고, 붐비면 필요가 큰 사람에게 먼저 양보한다', result: '다친 학생·짐 나르는 직원·휠체어를 쓰는 방문객이 함께 쓴다.', impact: [{ who: '학교 공동체', text: '모두가 덜 불편하다', tone: 1 }],
        next: { text: '쉬는 시간마다 걷기 싫은 학생들이 몰려 승강기가 붐빈다.', choices: [
          { id: 'sign', text: '양보 안내문을 함께 만들어 붙인다', result: '붐빌 때 필요가 큰 사람이 먼저 타는 습관이 생긴다.', impact: [{ who: '휠체어를 쓰는 방문객', text: '기다리지 않고 탄다', tone: 1 }], ending: '모두가 쓰는 시설에는 함께 지킬 약속이 따른다.' },
          { id: 'ban', text: '다시 전용으로 바꾼다', result: '다른 필요한 사람이 또 빠진다.', impact: [{ who: '다친 학생', text: '다시 계단을 쓴다', tone: -1 }], ending: '문제는 시설이 아니라 쓰는 약속에 있었다.' }] } }] };
    const RULE_R = [{ id: 'all', text: '모두가 쓸 수 있게 만든 시설이 더 많은 사람을 돕는다' }, { id: 'yield', text: '붐빌 때는 필요가 큰 사람에게 먼저 양보한다' }, { id: 'special', text: '장애인을 위한 것은 따로 떼어 두어야 한다', why: '따로 떼면 필요한 다른 사람이 빠지고, 장애가 있는 사람만 눈에 띄게 돼요.' }];
    // 보편적 설계 네 생각과 학교 시설 예
    const UD = ['누구나 쓰기', '쉽게 쓰기', '안전하게 쓰기', '정보 알기 쉽게'];
    const UD_CARDS = [
      ['계단 옆에 경사로를 함께 둔 정문', '높이가 다른 두 칸짜리 급식 배식대'],
      ['누르기만 하면 열리는 자동문', '손목으로도 돌리는 막대형 수도꼭지'],
      ['계단 끝마다 붙인 눈에 띄는 색 띠', '물기에 미끄러지지 않는 복도 바닥'],
      ['방송과 함께 화면에 띄우는 자막', '그림과 글자를 함께 쓴 교실 표지판']];
    // 무인 단말기 점검(가상)
    const KIOSK = (fails) => [['high', '앉은 자리에서도 화면에 손이 닿는다', !fails.includes('high')], ['font', '글자를 크게 키울 수 있다', !fails.includes('font')], ['voice', '음성 안내를 이어폰으로 들을 수 있다', !fails.includes('voice')], ['key', '터치 말고 실물 단추로도 고를 수 있다', !fails.includes('key')], ['time', '주문 시간이 넉넉하고 늘릴 수 있다', !fails.includes('time')]];

    MODS.push(
      M({
        id: 'intro.two-view', type: 'intro', title: '같은 계단, 두 가지 설명',
        method: '두 관점 견주기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 설명 문장 넷(개인 탓 둘·환경 탓 둘)만 바구니에 넣어 보이며 견준다.', base: '설명 문장 여섯을 개인 탓·환경 탓 바구니에 나누는 시연을 보고, 어느 쪽 설명이 해결책을 낳는지 고른다.', challenge: '같은 장면(안내 방송만 있는 역)을 두 관점 문장으로 각각 써서 말한다(활동지 첫 칸).' },
        intro: {
          teacher: '"휠체어를 쓰는 사람이 식당 계단 앞에서 들어가지 못하고 있어요. 왜 못 들어갈까요?" 두세 명의 대답을 칠판 왼쪽(사람에 대한 말)과 오른쪽(건물에 대한 말)에 나누어 적는다. 시연 단추로 설명 카드가 개인 탓·환경 탓 바구니에 들어가는 모습을 보여 준다. "걷지 못하니까 못 들어가는 거잖아요"라는 말이 나오면 "같은 사람이 경사로가 있는 식당에는 들어갔다면, 무엇이 달라진 걸까요?"라고 되묻는다. 몸의 상태(손상)는 그대로인데 입구가 바뀌면 할 수 있는 일이 달라진다는 것, 그래서 환경 쪽 설명이 \'무엇을 고치면 되는지\'를 알려 준다는 점을 짚는다.',
          student: '계단 앞에서 들어가지 못하는 장면을 두고 나온 설명 문장을 개인 탓·환경 탓으로 나누어 보세요. 어느 쪽 설명이 \'고칠 방법\'을 알려 주는지 생각해 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['개인 탓 설명', '환경 탓 설명'], cards: [PERSON[0], ENV[0], PERSON[1], ENV[1], PERSON[2], ENV[2]] }, sequence: [{ sort: { '개인 탓 설명': PERSON, '환경 탓 설명': ENV } }] },
          art: { draw: 'a paper restaurant entrance with three tall paper steps, a paper wheelchair user waiting at the bottom, a second identical doorway beside it with a gentle paper ramp and the same person rolling in, two paper baskets on a shelf in front', banner: '사람이 문제일까, 계단이 문제일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '\'개인 탓\' 문장은 고쳐야 할 생각을 보이려는 카드다. 학생에게 자신이나 가족의 장애 여부를 묻지 않는다. 장면의 인물은 가상이다.',
      }),
      M({
        id: 'intro.barrier-photo', type: 'intro', title: '도시 지도 위의 일상 장벽',
        method: '일상 장벽 사진 자료 읽기', tool: 'map', minutes: 7,
        levels: { easy: '교사가 장벽 두 곳(계단 입구·안내 방송만 있는 역)만 짚으며 막히는 사람을 함께 고른다.', base: '지도의 장벽 네 곳을 하나씩 열어 영향을 받는 사람을 고르는 시연을 보고 말한다.', challenge: '장애가 없는 사람도 겪는 장벽(유모차·무거운 짐·다친 다리·외국어 사용자)을 지도에서 찾아 말한다.' },
        intro: {
          teacher: '"우리 동네 사진을 지도 칸으로 옮겼어요. 표시된 다섯 곳은 누군가에게 \'벽\'이 되는 자리예요." 시연 단추로 \'안내 방송만 있는 역\'에 핀을 꽂고, 가장 먼저 막히는 사람을 고르는 모습을 보여 준다. "장벽은 장애인에게만 있는 거잖아요"라는 말이 나오면 "유모차를 미는 사람, 다리를 다친 친구, 한국어 방송을 알아듣기 어려운 여행객에게는 어떨까요?"라고 되묻는다. 장벽은 한 사람의 몸이 아니라 장소에 있고, 그래서 장소를 바꾸면 여러 사람이 함께 편해진다는 점을 짚는다.',
          student: '가상 도시 지도에서 장벽이 있는 곳을 하나씩 열어 보고, 그 장벽에 가장 먼저 막히는 사람이 누구인지 골라 보세요.',
          demo: { tool: 'map', options: Object.assign({}, CITY, { ask: { q: '안내 방송만 있는 역에서 가장 먼저 막히는 사람은?', choices: ['청각장애가 있는 사람', '시각장애가 있는 사람', '휠체어를 쓰는 사람'] } }), sequence: [{ place: '안내 방송만 있는 역', pick: 0 }] },
          art: { draw: 'a paper city grid seen from above with tiny paper buildings, a restaurant with steep steps, a train station with a speaker horn icon, a bus stop on a high curb, a park path where yellow tactile tiles stop abruptly, small paper flags on each spot', banner: '장벽은 어디에 있을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '지도와 장소는 가상이다. 실제 동네 사진을 쓸 때는 사람 얼굴이 나오지 않게 하고, 특정 가게를 비난하는 자료로 쓰지 않는다.',
      }),

      M({
        id: 'activity.cost-debate', type: 'activity', title: '승강기 설치, 비용인가 권리인가',
        method: '장벽 제거 비용 찬반 토론', tool: 'dilemma', minutes: 17,
        levels: { easy: '근거 카드 셋(근거다운 카드 둘·근거가 아닌 카드 하나) 가운데 내 근거를 고른다.', base: '근거 카드 여섯(근거다운 카드 넷·함정 둘)에서 내 입장의 근거를 고르고, 두 길을 끝까지 가 견주며, 승강기를 쓰는 규칙 갈림길까지 따라간다.', challenge: '규칙 갈림길을 끝까지(세 단계) 따라가고, 반대 측의 가장 강한 근거와 그에 대한 내 답을 활동지에 쓴다.' },
        activity: {
          title: '승강기 토론 갈림길', tool: 'dilemma',
          teacher: '"\'지금 쓸 학생이 없는데 승강기를 놓아야 하나?\' 오늘은 찬성·반대 어느 쪽에 서도 좋아요. 대신 근거가 근거다운지를 따져요." 선택마다 결과 글을 소리 내어 읽게 한다. "장애인은 불쌍하니까 무조건 해 줘야 한다"를 고른 학생에게 "동정이 근거라면, 불쌍해 보이지 않으면 안 해도 될까요? 무엇이 더 단단한 근거일까요?"라고 묻는다. "돈이 많이 드니까 안 된다"는 학생에게는 "쓸 사람을 조사해 보니 누가 더 있었지요? 비용을 나누는 방법은 없을까요?"라고 묻는다. 예산을 따지는 것은 정당한 근거이고, 다만 \'늘 너무 비싸다\'는 단정과 \'쓸 사람이 적다\'는 짐작을 자료로 확인하자는 것이 오늘의 요점이다.',
          task: '승강기 설치 갈림길을 따라가 결과를 보고, 내 입장의 근거 카드를 골라요. 근거가 아닌 말(동정·고정관념)은 고르지 않아요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            OPENQ('승강기 안건 갈림길에서 내가 고를 길을 끝까지 가 보고, 내 입장을 받쳐 줄 근거 카드를 고르세요(어느 입장이든 좋아요).', LIFT, LIFT_R, LIFT_GOOD, { d: 0.35, opt: { title: '승강기 안건' },
              more: { levels: { easy: { prompt: '승강기 안건 갈림길을 끝까지 가 보고, 내 입장의 근거 카드를 고르세요(근거 카드 셋).', toolOptions: { reasons: [LIFT_R[0], LIFT_R[2], LIFT_R[4]] }, target: { reasons: ['many', 'budget'], some: true } } }, hints: ['카드가 사실이나 원칙을 말하는지, 아니면 동정·짐작을 말하는지 보세요.'] } }),
            EXPLOREQ('\'입학하면 그때 놓자\' 길과 \'조사하고 단계 계획\' 길을 끝까지 가 보고 결과를 견주세요.', LIFT, LIFT_R, ['두 길의 끝 장면을 모두 확인했다', '불편을 겪는 사람과 기간을 견주었다'], { d: 0.35, more: { conclude: '기다렸다 고치면 그 사이의 불편이 한 사람에게 몰려요. 미리 조사하면 쓸 사람이 넓게 보이고 비용도 나눌 수 있어요.' } }),
            DILQ('승강기가 놓인 뒤 \'장애 학생 전용\' 의견이 나왔어요. 모두에게 알맞은 길을 고르고 근거를 고르세요.', RULE, [['need', 'sign']], RULE_R, ['all', 'yield'], { d: 0.4, opt: { title: '승강기 쓰는 규칙' }, more: { conclude: '모두가 쓰게 만든 시설이 더 많은 사람을 돕고, 붐빌 때는 필요가 큰 사람에게 먼저 — 이것이 보편적 설계의 생각이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 입장과 반대 입장의 가장 강한 근거를 정리하세요.', columns: ['', '가장 강한 근거', '그 근거에 대한 답'], cells: [['내 입장', '', ''], ['반대 입장', '', '']] }] },
        notes: '찬반 어느 쪽도 정답으로 정하지 않는다(첫 문항은 근거다운 카드 하나 이상이면 맞음). 함정은 동정·분리 같은 근거가 아닌 말뿐이다. 학교·예산·지원 신청은 가상 상황이며 실제 지원 제도의 세부는 다루지 않는다.',
      }),
      M({
        id: 'activity.ud-principle', type: 'activity', title: '보편적 설계로 학교 다시 보기',
        method: '보편적 설계 원리로 다시 보기', tool: 'mindmap', minutes: 18,
        levels: { easy: '가지 둘(누구나 쓰기·쉽게 쓰기)에 학교 시설 카드를 한 장씩 바로 피드백을 받으며 붙인다.', base: '가지 넷(누구나·쉽게·안전하게·정보 알기 쉽게)에 시설 카드를 나누고, 장벽마다 고칠 방안을 짝짓고, 원리가 부딪히는 사례를 고른다.', challenge: '헷갈리는 카드(장애 학생 전용 뒷문 등)가 더해진 판을 나누고, 원리끼리 부딪히는 사례의 해결 방안을 활동지에 쓴다.' },
        activity: {
          title: '보편적 설계 생각 그물', tool: 'mindmap',
          teacher: '"보편적 설계는 \'장애인을 위한 특별한 시설\'이 아니라 \'처음부터 누구나 쓸 수 있게 만드는 설계\'예요. 오늘은 네 가지 생각(누구나·쉽게·안전하게·정보 알기 쉽게)으로 우리 학교를 다시 봐요." 카드를 붙일 때마다 "이 시설은 장애가 있는 사람 말고 누가 또 편할까요?"라고 묻는다. \'장애 학생 전용 출입구를 건물 뒤에\' 카드를 \'누구나 쓰기\'에 붙인 학생에게 "따로 뒤로 돌아가게 하면 누구나 쓰는 건가요, 떼어 놓는 건가요?"라고 되묻는다. 점자 블록과 휠체어처럼 한 사람에게 좋은 설계가 다른 사람에게는 불편할 수 있어서 당사자들의 의견을 함께 듣는다는 점까지 짚는다.',
          task: '학교 시설 카드를 보편적 설계의 네 생각 가지에 나누고, 장벽을 고칠 방안을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('학교 시설 카드를 보편적 설계의 생각 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).', UD, UD_CARDS, { k: 1, easySlots: 2, traps: ['장애 학생 전용 출입구를 건물 뒤에 둔다'], hard: [[], [], [], ['색으로만 구분한 비상구 안내도']], d: 0.3, opt: { topic: '보편적 설계로 본 우리 학교' },
              more: { conclude: '한 사람을 위해 만든 것 같아도, 경사로·자동문·자막은 유모차·짐·소음 속에 있는 모두를 도와요.' } }),
            MATCHQ('학교 안 장벽마다 보편적 설계로 고칠 방안을 짝지으세요.', [['정문에 계단만 있다', '계단 옆에 완만한 경사로를 함께 둔다'], ['안내를 방송으로만 한다', '방송과 함께 교실 화면에 자막을 띄운다'], ['문이 무겁고 당겨야 열린다', '누름 단추 자동문으로 바꾼다'], ['비상구 안내가 색으로만 구분된다', '색과 함께 글자·모양으로 구분한다']], { k: 2, extra: ['장애 학생은 다른 학생이 대신 도와준다'], d: 0.35, opt: { topic: '장벽과 고칠 방안' },
              more: { hints: ['장벽을 \'사람이 바꿀 것\'이 아니라 \'장소가 바뀔 것\'으로 고친 카드를 찾아보세요.'] } }),
            PICKQ('한 사람에게 좋은 설계가 다른 사람에게는 불편할 수 있는 사례(원리끼리 부딪히는 사례)만 고르세요.', ['점자 블록이 휠체어 바퀴에는 덜컹거린다', '낮춘 세면대가 키 큰 사람에게는 허리를 굽히게 한다'], ['자동문은 누구에게나 편하다', '자막은 소리를 끈 사람에게도 도움이 된다'], { d: 0.4, opt: { topic: '원리가 부딪힐 때', basket: '부딪히는 사례' },
              more: { conclude: '부딪힘이 있을 때는 높이 조절·폭 나누기처럼 함께 쓰는 방법을 찾고, 그 방법을 당사자들과 함께 정해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '원리끼리 부딪히는 사례 하나를 골라, 두 사람 모두에게 맞는 해결 방안을 한 문장으로 쓰세요.' }] },
        notes: '보편적 설계의 원래 원칙은 더 많다 — 이 수업은 네 생각으로 줄여 쓴다. 시설 예는 일반적인 것이며 학교의 실제 시설은 교사가 함께 확인한다.',
      }),
      M({
        id: 'activity.kiosk-test', type: 'activity', title: '매점 무인 단말기 점검',
        method: '무인 단말기 접근성 점검', tool: 'kitchen', minutes: 17,
        levels: { easy: '점검 항목 셋(높이·글자·음성)으로 가상 단말기를 점검하고, 개선 우선순위 카드를 놓는다.', base: '점검 항목 다섯(높이·글자·음성·실물 단추·넉넉한 시간)으로 가상 단말기 두 대를 점검하고 우선순위 카드를 놓는다.', challenge: '같은 문항을 풀고, 우선순위를 비용과 효과로 설명하는 까닭을 활동지에 쓴다.' },
        activity: {
          title: '무인 단말기 점검표', tool: 'kitchen',
          teacher: '"학교 매점에 무인 단말기가 들어왔어요(가상). 누구나 혼자 주문할 수 있을지 점검표로 확인해 봐요." 단말기 설명을 소리 내어 읽고 항목마다 \'통과\'인지 묻는다. "직원에게 부탁하면 되잖아요"라는 말이 나오면 "직원이 없는 시간이라면요? 그리고 다른 사람은 혼자 주문하는데 왜 이 사람만 부탁해야 할까요?"라고 되묻는다. 우선순위 문항에서는 \'싸고 빠른 것부터\'가 늘 정답은 아니라는 점도 함께 말한다 — 오늘은 우리 반 기준(설정 → 부품 → 설치 차례)으로 놓아 보고, 기준이 다르면 다르게 놓일 수 있다고 밝힌다.',
          task: '가상 매점 단말기를 접근성 점검표로 확인하고, 고칠 차례를 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('가상 단말기 가: 화면이 서서 보는 높이에 있고, 글자가 작고, 소리가 나지 않고, 터치로만 고르며, 30초 안에 고르지 않으면 처음으로 돌아가요. 통과한 항목만 표시하세요.', '단말기 가 점검', KIOSK(['high', 'font', 'voice', 'key', 'time']).map(([id, t]) => [id, t, false]).concat([['pay', '카드와 현금 모두로 낼 수 있다', true]]), { k: 3, d: 0.25,
              more: { levels: { easy: { prompt: '가상 단말기 가: 화면이 서서 보는 높이에 있고, 글자가 작고, 소리가 나지 않아요. 통과한 항목만 표시하세요(항목 넷).', toolOptions: { mode: 'checklist', title: '단말기 가 점검', items: [{ id: 'high', text: '앉은 자리에서도 화면에 손이 닿는다' }, { id: 'font', text: '글자를 크게 키울 수 있다' }, { id: 'voice', text: '음성 안내를 이어폰으로 들을 수 있다' }, { id: 'pay', text: '카드와 현금 모두로 낼 수 있다' }] }, target: { checklist: ['pay'] } } } } }),
            CHECKQ('가상 단말기 나: 화면 높이를 낮출 수 있고, 이어폰 음성 안내와 실물 단추가 있지만, 글자 크기는 못 바꾸고 30초 안에 골라야 해요. 통과한 항목만 표시하세요.', '단말기 나 점검', KIOSK(['font', 'time']), { k: 3, d: 0.3 }),
            ORDERQ('우리 반 기준(설정만 바꾸기 → 부품 더하기 → 기기 옮겨 달기)으로 단말기 가를 고칠 차례대로 놓으세요.', ['글자 크게 보기·시간 늘리기 설정 켜기', '이어폰 단자와 실물 단추 달기', '앉아서 닿는 높이로 옮겨 달기'], { k: 3, traps: ['직원이 대신 눌러 주게 한다'], d: 0.35, opt: { title: '고칠 차례' },
              more: { conclude: '돈이 적게 드는 것부터 할 수 있어요. 하지만 높이처럼 비싼 것도 누군가에게는 \'아예 못 쓰는\' 장벽이라 계획에서 빠지면 안 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단말기 가를 고칠 계획을 비용과 효과로 정리하세요.', columns: ['고칠 점', '비용(크다·작다)', '도움을 받는 사람'], cells: [['글자·시간 설정', '', ''], ['음성·실물 단추', '', ''], ['높이', '', '']] }] },
        notes: '단말기와 \'30초\'는 수업용 가상 설정이다. 점검 항목은 일반적인 접근성 항목이며, 실제 단말기 지침은 교사가 공식 안내로 확인한다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.redesign-proposal', type: 'activity', title: '학교 장벽 개선 제안서',
        method: '장벽 개선 제안서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '제안서를 네 문장(현황·영향·개선안·의견 수렴)으로 문장 틀을 보고 쓴다.', base: '제안서를 여섯~여덟 문장으로 쓰고 현황·영향받는 사람·개선안·당사자 의견 수렴 기준표로 점검한다.', challenge: '예산과 일정을 넣어 기준 하나를 더 점검한다.' },
        activity: {
          title: '장벽 개선 제안서', tool: 'rubric-writing',
          teacher: '"오늘 찾은 장벽 가운데 하나를 골라 학생회에 낼 제안서를 써요. 제안서에는 네 가지가 꼭 들어가요: 지금 어떤지, 누가 영향을 받는지, 어떻게 고칠지, 그리고 쓰는 사람의 의견을 어떻게 들을지." 기준표를 함께 읽는다. \'장애인이 불쌍하니 고쳐 주세요\'처럼 쓴 학생에게 "이 제안서를 읽은 사람이 무엇을 고쳐야 하는지 알 수 있을까요? 장소의 문제로 바꿔 써 볼까요?"라고 묻는다. 의견 수렴 칸이 비면 "고칠 방법을 정할 때, 실제로 그 시설을 쓰는 사람에게 묻는 단계가 있나요?"라고 묻는다. 학생 자신이나 친구의 장애를 예로 쓰지 않게 하고, 장소 중심으로 쓰게 한다.',
          task: '학교 안 장벽 하나를 골라 개선 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('학교 안 장벽 하나를 골라 개선 제안서를 여섯~여덟 문장으로 쓰세요.', '학생회에 내는 장벽 개선 제안서: 현황, 영향받는 사람, 개선안, 당사자 의견을 듣는 방법을 쓰세요.', ['장소의 현황을 구체적으로 썼다', '영향을 받는 사람을 넓게 썼다', '고칠 방법을 썼다', '쓰는 사람의 의견을 듣는 방법을 썼다'], { min: 150, max: 700, sent: [6, 8], must: [['의견', '묻', '설문', '듣']],
              easySent: [4, 5], easyPrompt: '학교 안 장벽 하나를 골라 개선 제안서를 네 문장으로 쓰세요(문장 틀).', starter: '현황: ~. 영향: ~이 불편하다. 개선안: ~. 의견 수렴: ~에게 ~로 묻는다.',
              plus: '예산(크다·작다)과 일정(언제까지)을 넣었다', d: 0.4,
              sample: '본관 정문에는 계단만 있고 경사로가 없다. 그래서 휠체어를 쓰는 방문객, 다리를 다친 학생, 무거운 짐을 옮기는 직원이 옆 건물로 돌아간다. 계단 옆에 완만한 경사로와 손잡이를 함께 두기를 제안한다. 경사로의 위치와 기울기는 휠체어를 쓰는 사람과 장애인 단체에 묻고 정한다. 학생과 교직원에게도 설문으로 불편한 점을 듣는다. 공사 전까지는 옆 건물 출입구를 안내하는 표지판을 먼저 붙인다.',
              more: { conclude: '좋은 제안서는 사람이 아니라 장소를 고치고, 쓰는 사람에게 묻는 단계를 빠뜨리지 않아요.' } }),
            RWQ('제안서의 \'당사자 의견을 듣는 방법\' 부분만 두 문장으로 더 자세히 쓰세요.', '누구에게, 어떤 방법으로, 언제 의견을 들을지 두 문장으로 쓰세요.', ['누구에게 물을지 썼다', '어떤 방법으로 물을지 썼다', '들은 의견을 어떻게 반영할지 썼다'], { min: 40, max: 250, sent: [2, 3], d: 0.35 }),
            DONEQ('짝과 제안서를 바꿔 읽고, 학생회 위원이라면 가장 먼저 물어볼 질문 하나를 서로 말해 주세요.', '짝과 바꿔 읽기', '짝과 바꿔 읽고 질문해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서 개요를 먼저 채우세요.', columns: ['현황', '영향받는 사람', '개선안', '의견 수렴 방법'], cells: [['', '', '', '']] }] },
        notes: '제안서는 장소 중심으로 쓴다. 학생 자신·가족·친구의 장애를 사례로 쓰게 하지 않는다. 실제로 학생회에 낼 때는 교사가 함께 검토한다.',
      }),

      M({
        id: 'wrap.view-reflect', type: 'wrap', title: '내 관점이 움직인 자리',
        method: '관점 바뀜 성찰 글', tool: 'story', minutes: 7,
        levels: { easy: '교사가 \'바뀐 생각\'·\'앞으로 할 일\' 두 칸을 먼저 함께 채우고, \'수업 전 생각\'은 말로 나눈다.', base: '수업 전 생각 → 바뀐 생각 → 앞으로 할 일 세 칸에 내 생각 카드를 놓고 한 줄을 쓴다.', challenge: '짝의 카드와 견주어 다른 점 한 줄을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 수업 처음의 계단 장면을 다시 떠올려 봐요. 지금은 어떻게 설명하겠어요?" 세 칸에 내 생각에 가까운 카드를 놓게 한다. \'장애인은 불쌍하니 도와줘야 한다\' 카드를 놓으려는 학생에게 "도움이 나쁜 건 아니에요. 그런데 오늘 우리가 찾은 것은 동정일까요, 고칠 수 있는 장벽일까요?"라고 묻는다. 수업 전 생각은 정답이 아니라 출발점이니 솔직하게 고르라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '내 관점이 움직인 자리', slots: [{ id: 'before', label: '수업 전 나는 ___' }, { id: 'after', label: '지금 나는 ___' }, { id: 'todo', label: '앞으로 나는 ___' }], cards: [
              { id: 'b1', text: '장애를 그 사람 몸의 문제로만 봤다' }, { id: 'b2', text: '장벽을 없애려면 늘 큰돈이 든다고 생각했다' }, { id: 'b3', text: '이 문제를 깊이 생각해 본 적이 없었다' },
              { id: 'a1', text: '같은 사람도 환경에 따라 할 수 있는 일이 달라진다고 본다' }, { id: 'a2', text: '작은 변화로 없앨 수 있는 장벽도 많다고 본다' },
              { id: 't1', text: '학교 안 장벽을 찾아 학생회에 알리겠다' }, { id: 't2', text: '시설을 정할 때 쓰는 사람에게 먼저 묻겠다' },
              { id: 'pity', text: '장애인은 불쌍하니 무조건 도와줘야 한다고 본다', why: '동정보다 장벽을 고치는 것이 더 많은 사람을 도와요.' }] }, prompt: '세 칸에 내 생각에 가장 가까운 카드를 하나씩 놓으세요.', target: { fill: { before: ['b1', 'b2', 'b3'], after: ['a1', 'a2'], todo: ['t1', 't2'] } }, difficulty: 0.15 },
            { type: 'short', prompt: '\'앞으로 할 일\'을 내 말로 한 줄 더 구체적으로 쓰세요(언제·어디서).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 관점이 움직인 자리',
          items: [
            { type: 'table', prompt: '세 칸에 내 생각을 한 줄씩 쓰세요.', columns: ['수업 전 생각', '바뀐 생각', '앞으로 할 일'], cells: [['', '', '']] },
            { type: 'short', prompt: '짝의 생각과 견주어 다른 점 하나를 쓰세요.' },
          ],
        },
        notes: '성찰은 점수를 매기지 않는다. 학생의 장애 경험을 묻지 않고 \'관점\'만 다룬다.',
      }),
      M({
        id: 'wrap.campaign-slogan', type: 'wrap', title: '장벽 없애기 캠페인 한 장',
        method: '장벽 없애기 캠페인 문구', tool: 'collage', minutes: 7,
        levels: { easy: '교사가 문구 자리(긴 네모)를 먼저 놓아 보이고, 상징 조각 둘을 더해 포스터를 꾸민다.', base: '문구 자리와 상징 조각 넷 이상으로 포스터를 배치하고, 볼 사람을 정해 점검한다.', challenge: 'SNS용(정사각 한 장)과 게시판용(세로 한 장) 문구를 활동지에 나누어 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 장벽을 없애자는 캠페인 포스터를 한 장 꾸며요. 문구는 활동지에 먼저 쓰고, 판에는 문구 자리와 상징 조각을 배치해요." 볼 사람(학생·선생님·방문객)을 먼저 정하게 한다. \'장애를 이겨 낸 감동\'처럼 쓴 문구가 보이면 "이 포스터는 한 사람의 감동 이야기일까요, 우리가 고칠 장소 이야기일까요?"라고 묻고, \'계단 옆에 길 하나 더\'처럼 장소와 행동이 보이는 문구로 바꾸게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'square', 'circle', 'triangle', 'star', 'heart', 'semi'] }, prompt: '포스터 판에 문구 자리(긴 네모 하나 이상)와 상징 조각을 배치하고 점검하세요.', target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['문구를 읽을 자리를 크게 두었다', '장소나 행동을 나타내는 상징을 놓았다', '볼 사람을 정했다'], minPieces: 4 }, difficulty: 0.2 },
            { type: 'choice', prompt: '장벽 없애기 캠페인 문구로 가장 알맞은 것은?', options: ['장애를 이겨 낸 감동의 주인공을 응원해요', '계단 옆에 길 하나 더, 모두가 들어오는 학교', '불쌍한 친구들을 도와줍시다'], answer: 1, difficulty: 0.15, explain: '감동이나 동정이 아니라, 고칠 장소와 모두에게 좋은 변화를 보여 주는 문구가 장벽을 줄여요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '장벽 없애기 캠페인',
          items: [
            { type: 'short', prompt: '포스터 문구(한 줄)와 볼 사람을 쓰세요.' },
            { type: 'table', prompt: 'SNS용과 게시판용 문구를 나누어 쓰세요.', columns: ['어디에', '문구', '덧붙일 정보'], cells: [['SNS', '', ''], ['게시판', '', '']] },
          ],
        },
        notes: '교구 한계: collage 는 글을 놓지 못해 문구는 활동지에 쓰고 판에는 문구 자리와 상징만 배치한다. 실제 사람 사진·이름은 넣지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 2. 장애인차별금지와 정당한 편의 — 일터와 채용 (11학년)
  // ======================================================================================================
  {
    const M = MOD('anti-discrim', [11]);
    // 가상 채용 공고 문구
    const AD_BAD = ['사무 보조: 신체 건강한 분만 지원하세요', '장애가 있는 분은 지원할 수 없습니다', '면접은 전화 통화로만 봅니다(다른 방법 없음)'];
    const AD_OK = ['문서 작성 프로그램을 쓸 수 있는 분', '면접에 필요한 편의(수어 통역 등)를 미리 알려 주세요', '주 5일, 하루 6시간 근무'];
    // 편의 항목(특혜일까 권리일까)
    const ACC = ['화면 낭독 프로그램을 깔아 준다', '치료 일정에 맞춰 근무 시간을 조정한다', '높이를 조절하는 책상을 놓아 준다', '면접 때 수어 통역을 둔다', '글 읽기가 느린 지원자에게 필기 시간을 늘려 준다'];
    // 면접 사례(가상)
    const INTERVIEW = { text: '가상 회사 면접. 청각장애가 있는 지원자 \'온\'이 미리 수어 통역을 요청했지만, 회사는 "통역은 준비하지 않습니다. 평소처럼 오세요"라고 답했다. 이 일을 어떻게 판정할까?', who: '인사 담당자', motif: 'house', choices: [
      { id: 'direct', text: '직접차별 — 장애를 이유로 대놓고 다르게 대했다', result: '회사는 온을 뽑지 않겠다고 말한 적은 없다.', why: '회사가 장애를 이유로 거절한 것은 아니에요. 면접에 똑같이 참여할 수단을 주지 않은 것이 쟁점이에요.', impact: [{ who: '온', text: '판정의 쟁점이 흐려진다', tone: 0 }], ending: '대놓고 거절한 말이 없으면 직접차별로 보기 어렵다.' },
      { id: 'indirect', text: '간접차별 — 모두에게 같은 규칙이 장애인에게만 불리했다', result: '\'평소처럼\'이라는 같은 규칙이 온에게만 불리한 것은 맞다.', why: '같은 규칙의 문제이기도 하지만, 온은 필요한 편의를 먼저 요청했어요. 요청한 편의를 주지 않은 것이 더 가까운 판정이에요.', impact: [{ who: '온', text: '절반쯤 맞는 판정이다', tone: 0 }], ending: '간접차별도 쟁점이 되지만, 요청한 편의를 거절한 점이 더 뚜렷하다.' },
      { id: 'accom', text: '정당한 편의 제공 거부 — 요청한 편의를 주지 않았다', result: '온은 질문을 알아듣기 어려워 면접에서 제 실력을 보이지 못한다.', impact: [{ who: '온', text: '같은 출발선에 서지 못한다', tone: -1 }],
        next: { text: '항의를 받은 회사가 "통역 대신 종이에 써서 묻겠다"고 한다. 온은 빠른 질문·답에는 필담이 어렵다고 말한다.', choices: [
          { id: 'ask', text: '온과 함께 맞는 방법(수어 통역·문자 통역)을 정한다', result: '문자 통역을 두고 면접을 다시 본다.', impact: [{ who: '온', text: '자기 실력으로 평가받는다', tone: 1 }], ending: '편의는 쓰는 사람과 함께 정할 때 제 구실을 한다.' },
          { id: 'force', text: '회사가 정한 필담만 쓰게 한다', result: '면접 시간이 다른 지원자보다 짧아진다.', impact: [{ who: '온', text: '여전히 불리하다', tone: -1 }], ending: '편의를 줬다고 해도 쓰는 사람에게 맞지 않으면 같은 출발선이 아니다.' }] } },
      { id: 'none', text: '차별이 아니다 — 모두에게 똑같이 대했다', result: '다른 지원자는 질문을 듣고, 온은 듣지 못한다.', why: '똑같은 대우가 늘 공정한 것은 아니에요. 같은 조건에서 겨루게 하려면 필요한 편의가 있어요.', impact: [{ who: '온', text: '면접에서 불리하다', tone: -1 }], ending: '똑같이 대한 것이 같은 기회를 준 것은 아니다.' }] };
    const INTERVIEW_R = [
      { id: 'equal', text: '편의는 같은 조건에서 실력을 겨루게 하는 수단이다' },
      { id: 'ask', text: '어떤 편의가 맞는지는 쓰는 사람과 함께 정한다' },
      { id: 'favor', text: '다른 지원자에게 없는 것을 주면 특혜다', why: '다른 지원자는 이미 질문을 들을 수 있어요. 편의는 그 출발선을 맞추는 것이에요.' },
      { id: 'pity', text: '장애가 있으니 불쌍해서 봐줘야 한다', why: '봐주는 것이 아니라 같은 조건을 만드는 것이에요. 평가 기준은 그대로예요.' }];
    // 운전면허 조건(간접차별 사례)
    const LICENSE = { text: '가상 회사가 사무실 안에서만 일하는 회계 사무직 공고에 "운전면허 필수"를 넣었다. 이 업무에는 운전할 일이 없다. 운전면허를 따기 어려운 장애가 있는 지원자들이 지원하지 못한다.', who: '채용 담당자', motif: 'star', choices: [
      { id: 'indirect', text: '간접차별 — 업무와 관계없는 조건이 장애인에게 불리하다', result: '조건을 빼자 여러 지원자가 새로 지원한다.', impact: [{ who: '장애가 있는 지원자', text: '지원할 길이 열린다', tone: 1 }],
        next: { text: '담당자가 "혹시 나중에 운전할 일이 생길 수도 있어서"라고 말한다.', choices: [
          { id: 'job', text: '실제 업무에 운전이 있는지 확인하고 없으면 조건을 뺀다', result: '공고가 \'회계 프로그램을 쓸 수 있는 분\'으로 바뀐다.', impact: [{ who: '회사', text: '업무에 맞는 사람을 넓게 찾는다', tone: 1 }], ending: '조건은 실제 업무에 필요한 것만 둔다.' },
          { id: 'keep', text: '혹시 모르니 조건을 그대로 둔다', result: '지원자 폭이 다시 좁아진다.', impact: [{ who: '장애가 있는 지원자', text: '다시 지원하지 못한다', tone: -1 }], ending: '\'혹시\'를 위한 조건이 누군가의 기회를 막는다.' }] } },
      { id: 'none', text: '차별이 아니다 — 누구에게나 같은 조건이다', result: '조건이 그대로 남는다.', why: '모두에게 같아 보이는 조건도 업무와 관계없이 특정 사람을 막으면 간접차별이 될 수 있어요.', impact: [{ who: '장애가 있는 지원자', text: '지원하지 못한다', tone: -1 }], ending: '같은 조건이 같은 기회는 아니다.' },
      { id: 'direct', text: '직접차별 — 장애인은 오지 말라고 했다', result: '공고에 장애라는 말은 없다.', why: '장애를 대놓고 말하지 않았어요. 겉으로 같은 조건이 불리하게 작용하는 경우예요.', impact: [{ who: '판정', text: '쟁점이 어긋난다', tone: 0 }], ending: '대놓고 말하지 않아도 차별은 일어날 수 있다.' }] };
    const LICENSE_R = [{ id: 'jobonly', text: '채용 조건은 실제 업무에 필요한 것만 둔다' }, { id: 'hidden', text: '노골적인 말이 없어도 차별이 일어날 수 있다' }, { id: 'same', text: '모두에게 같은 조건이면 차별이 아니다', why: '같아 보이는 조건이 업무와 관계없이 특정 사람만 막으면 간접차별이 될 수 있어요.' }];
    // 가상 회사 고용 자료
    const COMP = [['회사 가', 1], ['회사 나', 4], ['회사 다', 2], ['회사 라', 5]];
    const EMP = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '직원 100명당 장애가 있는 직원 수(가상 자료)', unit: '명', xLabel: '가상 회사', yLabel: '직원 수', data: COMP }, more);
    // 편의 예산(가상, 수업용 금액)
    const ACCBUD = [{ id: 'reader', text: '화면 낭독 프로그램', price: 600000 }, { id: 'sign', text: '회의 수어 통역(한 달)', price: 900000 }, { id: 'ramp', text: '사무실 입구 경사로', price: 1200000 }, { id: 'caption', text: '회의 문자 자막 서비스(한 달)', price: 200000 }, { id: 'sofa', text: '사장실 새 소파', price: 800000 }];

    MODS.push(
      M({
        id: 'intro.job-ad', type: 'intro', title: '채용 공고 속 배제 문구',
        method: '채용 공고 문구 읽기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 문구 넷(배제 둘·괜찮은 문구 둘)만 함께 읽고 배제 문구를 바구니에 넣어 보인다.', base: '문구 여섯을 읽고, 업무와 관계없이 장애를 배제하는 문구를 골라내는 시연을 보며 판단 근거를 말한다.', challenge: '골라낸 문구를 차별 없이 고쳐 쓴 문장을 활동지에 쓰고 말한다.' },
        intro: {
          teacher: '"가상 회사의 사무 보조 채용 공고예요. 문구 여섯 가운데 업무와 관계없이 장애가 있는 사람을 막는 문구는 어느 것일까요?" 시연 단추로 배제 문구가 바구니에 담기는 모습을 보여 준다. "\'신체 건강한 분\'은 그냥 흔한 말이잖아요"라는 말이 나오면 "사무 보조 일을 하는 데 그 조건이 정말 필요할까요? 이 말 때문에 지원을 포기할 사람은 누구일까요?"라고 되묻는다. \'면접은 전화로만\'처럼 장애라는 말이 없어도 누군가를 막는 문구가 있다는 것, 차별은 노골적인 말로만 일어나지 않는다는 것이 오늘의 첫 질문이라고 밝힌다.',
          student: '가상 채용 공고 문구를 읽고, 하는 일과 관계없이 장애가 있는 사람의 지원을 막는 문구를 골라 보세요. 장애라는 말이 없는 문구도 잘 살펴보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '배제하는 문구', cards: mix([AD_BAD, AD_OK]) }, sequence: [{ pick: AD_BAD }] },
          art: { draw: 'a paper job notice board with six paper strips pinned to it, three strips slightly torn and tilted as if being pulled off, a paper office desk and a paper magnifying glass in front', banner: '이 문구는 누구를 막을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '공고와 회사는 가상이다. 문구가 실제로 차별인지의 법적 판단은 상황에 따라 다르므로 \'업무와 관계없이 막는가\'를 기준으로 생각하게 한다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'intro.favor-or-right', type: 'intro', title: '정당한 편의는 특혜일까',
        method: '정당한 편의는 특혜일까', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 편의 셋(화면 낭독 프로그램·근무 시간 조정·높이 조절 책상)을 읽고 학생들이 손을 들어 바구니를 고른다.', base: '편의 다섯을 특혜·권리·모르겠다 바구니에 놓아 보는 방법을 시연으로 보고, 내 첫 판단을 활동지에 적는다.', challenge: '첫 판단마다 근거를 한 줄씩 적어 두고 수업 끝에 다시 본다.' },
        intro: {
          teacher: '"일터에서 이런 편의를 주는 것, 특혜일까요 권리일까요? 지금은 정답을 맞히는 게 아니라 내 첫 판단을 적어 두는 시간이에요." 시연 단추로 카드를 \'모르겠다\' 바구니에 넣는 모습만 보여 주고, 학생 각자는 활동지에 바구니를 적게 한다. "다른 사람은 안 받는데 받으면 특혜죠"라는 말이 나오면 바로 판단하지 말고 "좋은 질문이에요. 수업 끝에 다시 물을게요"라고 남겨 둔다. 오늘 판단의 기준이 될 장애인차별금지법은 장애를 이유로 한 차별을 막고 정당한 편의를 제공하도록 한 법이라고 소개한다.',
          student: '일터의 편의 다섯 가지를 보고 특혜·권리·모르겠다 가운데 어디에 놓을지 내 첫 판단을 활동지에 적어 두세요. 수업 끝에 다시 볼 거예요.',
          demo: { tool: 'sortboard', options: { slots: ['특혜', '권리', '모르겠다'], cards: ACC }, sequence: [{ sort: { 특혜: [], 권리: [], 모르겠다: ACC } }] },
          art: { draw: 'three paper baskets on a shelf, above them five paper cards showing a screen reader headset, a clock, a height adjustable desk, two hands signing and an hourglass, a paper question mark floating over the middle basket', banner: '특혜일까, 권리일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '이 판단은 정답 맞히기가 아니라 수업 전 첫 생각이다(정리 모듈 recheck 에서 다시 본다). 학생 자신이 편의를 받는지 묻지 않는다.',
      }),

      M({
        id: 'activity.case-classify', type: 'activity', title: '채용 장면 차별 판정',
        method: '차별 사례 판정', tool: 'dilemma', minutes: 17,
        levels: { easy: '면접 사례의 첫 갈림길(판정)만 고르고 근거를 고른다. 운전면허 사례도 판정까지만 고른다.', base: '면접 사례를 판정 뒤 회사의 다음 대응까지 따라가고, 운전면허 사례도 끝까지 판정해 근거를 고른다.', challenge: '판정이 갈리는 면접 사례의 길(직접·간접·편의 거부)을 끝까지 가 보고 쟁점을 활동지에 정리한다.' },
        activity: {
          title: '채용 사례 판정', tool: 'dilemma',
          teacher: '"오늘 판정 기준은 셋이에요. 직접차별은 장애를 이유로 대놓고 다르게 대하는 것, 간접차별은 모두에게 같아 보이는 조건이 업무와 관계없이 장애인에게 불리한 것, 정당한 편의 제공 거부는 같은 조건에서 일하고 겨루는 데 필요한 편의를 주지 않는 것이에요." 칠판에 세 줄로 적고 사례마다 결과 글을 소리 내어 읽게 한다. "모두에게 똑같이 했으니 차별이 아니다"를 고른 학생에게 "온은 질문을 들을 수 없었어요. 똑같은 대우가 같은 기회였을까요?"라고 묻는다. 판정이 서로 갈리면 틀렸다고 하기보다 "어느 사실 때문에 그렇게 봤나요?"라고 묻게 한다. 실제 판정은 사실관계에 따라 달라지므로 오늘은 기준을 쓰는 연습이라는 점을 밝힌다.',
          task: '가상 채용 사례를 판정 기준(직접차별·간접차별·정당한 편의 제공 거부)으로 따라가 판정하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('면접 사례(수어 통역 요청 거절)를 판정하고 회사의 다음 대응까지 따라간 뒤, 근거를 고르세요.', INTERVIEW, [['accom', 'ask']], INTERVIEW_R, ['equal', 'ask'], { d: 0.4, opt: { title: '면접 사례 판정' } }),
            DILQ('운전면허 조건 사례를 판정하고 담당자의 말에 대응한 뒤, 근거를 고르세요.', LICENSE, [['indirect', 'job']], LICENSE_R, ['jobonly', 'hidden'], { d: 0.4, opt: { title: '공고 조건 판정' } }),
            EXPLOREQ('면접 사례에서 \'간접차별\' 길과 \'정당한 편의 제공 거부\' 길을 끝까지 가 보고, 판정이 갈리는 쟁점을 견주세요.', INTERVIEW, INTERVIEW_R, ['두 판정의 끝 장면을 모두 확인했다', '판정을 가른 사실(요청이 있었는가)을 짚었다'], { d: 0.4, more: { conclude: '같은 사실도 어느 기준으로 보느냐에 따라 판정이 갈려요. 그래서 판정에는 \'어떤 사실 때문에\'가 꼭 따라와야 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 사례를 판정 기준으로 정리하세요.', columns: ['사례', '판정', '그렇게 본 사실', '바른 대응'], cells: [['면접 수어 통역', '', '', ''], ['운전면허 조건', '', '', '']] }] },
        notes: '사례는 가상이다. 직접·간접차별·정당한 편의 제공 거부의 뜻은 수업용으로 줄인 설명이며 실제 판정은 사실관계에 따라 달라진다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.employ-data', type: 'activity', title: '가상 회사 고용 자료 읽기',
        method: '고용 자료 해석', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 값이 보이고, 첫 문항은 회사 둘의 막대만 견준다.', base: '값 표시 없이 회사 넷의 막대를 읽고 차이를 계산하며, 차이를 설명할 가설을 고른다.', challenge: '값 표시 없이 풀고, 가설을 검증할 추가 자료를 고른 까닭을 활동지에 쓴다.' },
        activity: {
          title: '고용 자료와 가설', tool: 'chart',
          teacher: '"이 그래프는 가상 회사 네 곳의 자료예요. 실제 통계가 아니라 가설을 세우는 연습용이에요. 회사 나와 라는 채용 공고에 편의 안내를 넣었고 보조공학 기기를 갖추고 있어요." 칠판에 이 정보를 적고 막대를 읽게 한다. 가설 문항에서 "장애가 있는 사람은 일하기 싫어해서 그렇다"를 고르려는 학생에게 "그래프에 사람의 마음이 나와 있나요? 회사마다 다른 것은 무엇이었지요?"라고 되묻는다. 막대 차이는 \'무엇이 다른지\'를 묻게 할 뿐, 원인을 증명하지는 못한다는 점을 마지막에 짚는다.',
          task: '가상 회사의 고용 자료를 읽고, 차이를 설명할 가설과 그 가설을 확인할 자료를 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '직원 100명당 장애가 있는 직원 수가 가장 많은 가상 회사를 고르세요.', toolOptions: EMP({ question: '가장 많은 회사는?', choices: COMP.map((x) => x[0]) }), target: { pick: 3 }, difficulty: 0.2,
              levels: { easy: { prompt: '회사 가와 나 가운데 직원 100명당 장애가 있는 직원 수가 더 많은 곳을 고르세요(막대 둘).', toolOptions: { data: COMP.slice(0, 2), choices: ['회사 가', '회사 나'] }, target: { pick: 1 } } } },
            { prompt: '가장 많은 회사(라)와 가장 적은 회사(가)의 차이는 몇 명인가요?', toolOptions: EMP({ question: '라와 가의 차이는?' }), target: { value: 4 }, difficulty: 0.3 },
            { prompt: '회사 나·라는 공고에 편의 안내를 넣고 보조공학 기기를 갖췄어요. 이 차이를 설명할 가설로 알맞은 것을 고르세요.', toolOptions: EMP({ question: '알맞은 가설은?', choices: ['편의를 안내한 회사에 장애가 있는 지원자가 더 많이 지원했을 수 있다', '장애가 있는 사람은 일하기를 싫어한다', '회사 가는 장애가 있는 사람을 뽑지 않기로 정했다'], why: ['', '그래프는 사람의 마음을 보여 주지 않아요. 고정관념을 가설로 삼지 않아요.', '그래프만으로 회사의 결정을 알 수는 없어요. 단정하지 말고 확인할 자료를 찾아요.'] }), target: { pick: 0 }, difficulty: 0.35 },
            { prompt: '\'편의 안내가 지원을 늘렸다\'는 가설을 확인하려면 어떤 자료가 더 필요할까요?', toolOptions: EMP({ question: '더 필요한 자료는?', choices: ['회사마다 장애가 있는 지원자 수', '회사마다 직원들의 평균 키', '회사 건물의 층수'], why: ['', '키는 가설과 관계없어요.', '층수만으로는 지원자 수를 알 수 없어요.'] }), target: { pick: 0 }, difficulty: 0.4,
              conclude: '그래프는 차이를 보여 주고, 가설은 그 차이의 까닭을 짐작하며, 추가 자료가 그 짐작을 확인해요. 고정관념은 가설이 될 수 없어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '차이를 설명할 가설 두 가지와, 각 가설을 확인할 자료를 쓰세요.' }] },
        notes: '자료는 모두 가상이다(실제 장애인 고용 통계는 근거 파일에 없다). 실제 통계를 보여 줄 때는 교사가 공식 통계 출처를 확인하고 밝힌다.',
      }),
      M({
        id: 'activity.workplace-plan', type: 'activity', title: '가상 회사 편의 예산 짜기',
        method: '편의 제공 예산 짜기', tool: 'economy', minutes: 17,
        levels: { easy: '항목 둘(화면 낭독 프로그램·수어 통역) 가운데 예산 안에서 꼭 필요한 것을 고른다.', base: '항목 다섯(편의 넷·관계없는 항목 하나)을 예산 300만 원 안에서 고르고, 당사자의 뜻을 반영해 다시 고른다.', challenge: '예산이 200만 원으로 줄었을 때 무엇을 먼저 지킬지 고르고, 그 까닭을 활동지에 쓴다.' },
        activity: {
          title: '편의 예산 짜기', tool: 'economy',
          teacher: '"가상 회사에 새 직원 세 명이 들어와요. 시각장애가 있는 직원, 청각장애가 있는 직원, 휠체어를 쓰는 직원이에요. 예산 300만 원으로 일할 환경을 준비해 봐요(금액은 수업용 예시)." 항목을 고를 때마다 "이 항목으로 누가 무엇을 할 수 있게 되나요?"라고 묻는다. "편의는 회사에 손해다"라는 말이 나오면 "편의가 없으면 이 직원들이 실력을 낼 수 있을까요? 뽑아 놓고 일을 못 하게 하는 것이 더 큰 손해는 아닐까요?"라고 되묻는다. 당사자에게 묻는 문항에서는 같은 청각장애가 있어도 원하는 방법(수어 통역·문자 자막)이 사람마다 다르다는 점을 짚는다.',
          task: '가상 회사 예산 안에서 근무 편의를 고르고, 예산이 바뀌거나 당사자의 뜻을 들었을 때 다시 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '예산 300만 원. 시각장애가 있는 직원의 \'화면 낭독 프로그램\'과 휠체어를 쓰는 직원의 \'입구 경사로\'는 꼭 넣고, 일과 관계없는 항목은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 3000000, items: ACCBUD }, target: { budget: { must: ['reader', 'ramp'], not: ['sofa'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '예산 300만 원. 두 항목 가운데 시각장애가 있는 직원에게 꼭 필요한 \'화면 낭독 프로그램\'을 넣어 고르세요(항목 둘).', toolOptions: { items: ACCBUD.slice(0, 2) }, target: { budget: { must: ['reader'] } } } } },
            { prompt: '청각장애가 있는 직원에게 물었더니 회의 자막보다 수어 통역을 원했어요. 예산 300만 원에서 그 뜻대로 수어 통역을 넣고, 화면 낭독 프로그램·경사로도 지켜 고르세요.', toolOptions: { mode: 'budget', budget: 3000000, items: ACCBUD }, target: { budget: { must: ['sign', 'reader', 'ramp'], not: ['sofa'] } }, difficulty: 0.3 },
            { prompt: '예산이 200만 원으로 줄었어요. 세 직원 모두 일할 수 있게 화면 낭독 프로그램·경사로와 값이 덜 드는 회의 자막을 넣어 고르세요.', toolOptions: { mode: 'budget', budget: 2000000, items: ACCBUD }, target: { budget: { must: ['reader', 'ramp', 'caption'] } }, difficulty: 0.35,
              conclude: '예산이 줄어도 \'아무도 일하지 못하게 되는 것\'은 막아야 해요. 그리고 대신 고른 방법이 당사자에게 맞는지 다시 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 가장 먼저 지킨 편의와, 그 까닭을 두 문장으로 쓰세요.' }] },
        notes: '교구 한계: economy 는 돈(원)만 센다 — 예산과 금액은 수업용 예시다. 편의 비용을 덜어 주는 공공 지원 제도가 있다는 점은 교사가 한국장애인고용공단 안내로 확인해 덧붙인다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '편의 제공은 기업 부담인가',
        method: '찬반 토론: 편의 제공은 기업 부담인가', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '내 입장의 주장과 근거 하나를 두세 문장으로 문장 틀을 보고 쓴다.', base: '주장·근거 둘·반론 대응을 담은 토론문을 쓰고 기준표로 점검한다.', challenge: '반대 입장 토론문도 써서 기준 하나를 더 점검한다(활동지 둘째 칸).' },
        activity: {
          title: '편의 제공 찬반 토론문', tool: 'rubric-writing',
          teacher: '"\'근무 편의 제공은 기업에 지나친 부담이다.\' 찬성과 반대 어느 쪽을 써도 좋아요. 대신 자료와 원칙으로 근거를 대고, 상대가 할 반론에 답해야 해요." 기준표를 함께 읽는다. 찬성 쪽 글에 "장애인은 일을 못 하니까"처럼 사람을 낮추는 말이 보이면 "비용이 부담이라는 주장과 사람에 대한 고정관념은 다른 것이에요. 비용 자료로 다시 써 볼까요?"라고 바로잡는다. 반대 쪽 글에 "무조건 해야 한다"만 있으면 "기업이 \'비용이 크다\'고 하면 어떻게 답할까요?"라고 묻는다. 오늘은 어느 입장이 이기는지가 아니라 근거와 존중의 언어로 겨루는 연습이라는 점을 밝힌다.',
          task: '한쪽 입장을 골라 주장·근거·반론 대응이 담긴 토론문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('\'편의 제공은 기업에 지나친 부담이다\'에 대한 내 입장의 토론문을 쓰세요(주장·근거 둘·반론 대응).', '근무 편의 제공은 기업에 지나친 부담인가? 찬성·반대 가운데 한쪽 입장에서 주장, 근거 둘, 반론에 대한 답을 쓰세요.', ['첫 문장에 내 입장을 밝혔다', '근거를 둘 썼다', '상대 반론을 하나 들고 답했다', '사람을 낮추는 말 없이 썼다'], { min: 120, max: 600, sent: [4, 7], must: [['왜냐하면', '때문'], ['반면', '하지만', '물론', '그러나']],
              easySent: [2, 3], easyPrompt: '내 입장의 주장과 근거 하나를 두세 문장으로 쓰세요(문장 틀).', starter: '나는 편의 제공이 기업에 지나친 부담이라는 주장에 (찬성·반대)한다. 왜냐하면 ~ 때문이다. 하지만 ~.',
              plus: '반대 입장의 가장 강한 근거를 인정하는 문장이 있다', d: 0.45,
              sample: '나는 편의 제공이 기업에 지나친 부담이라는 주장에 반대한다. 왜냐하면 화면 낭독 프로그램이나 문자 자막처럼 비용이 크지 않은 편의가 많기 때문이다. 또 편의가 있어야 뽑은 직원이 제 실력을 낼 수 있어 회사에도 이익이다. 물론 경사로 공사처럼 비용이 큰 편의는 작은 회사에 부담일 수 있다. 하지만 그럴수록 공공 지원과 단계 계획으로 비용을 나누는 방법을 찾아야 한다.',
              more: { conclude: '좋은 토론문은 상대의 가장 강한 근거를 피하지 않고 답하며, 사람을 낮추지 않고 주장을 겨뤄요.' } }),
            RWQ('상대 입장에서 나올 반론 하나를 들고, 그 반론에 대한 내 답을 두 문장으로 쓰세요.', '상대가 할 반론 하나와 그에 대한 나의 답을 두 문장으로 쓰세요.', ['상대 반론을 정확히 옮겼다', '반론에 답하는 근거를 썼다', '상대를 깎아내리지 않았다'], { min: 40, max: 250, sent: [2, 3], d: 0.35 }),
            DONEQ('짝과 서로 반대 입장이 되어 토론문을 읽고, 가장 설득력 있던 근거 하나를 서로 말해 주세요.', '짝과 반대 입장으로 읽기', '짝과 읽고 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 입장의 근거를 정리하세요(도전: 반대 입장 토론문을 둘째 줄에 쓰세요).', columns: ['입장', '근거 1', '근거 2', '반론에 대한 답'], cells: [['찬성', '', '', ''], ['반대', '', '', '']] }] },
        notes: '찬반 어느 쪽도 정답으로 정하지 않는다. 고정관념·비하 표현만 바로잡는다. 공공 지원 제도의 세부는 다루지 않는다(머리 주석 \'사람 확인\').',
      }),

      M({
        id: 'wrap.recheck', type: 'wrap', title: '처음 판단 다시 보기',
        method: '처음 판단 다시 보기', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 편의 하나(화면 낭독 프로그램)만 골라 처음 판단과 지금 판단을 함께 견준다.', base: '편의 셋의 처음 판단을 다시 보고, 확신 눈금과 생각이 바뀐(또는 그대로인) 까닭을 고른다.', challenge: '바뀐 까닭을 내 말로 한 줄 쓴다.' },
        wrap: {
          teacher: '"수업 처음에 적은 \'특혜·권리·모르겠다\' 판단을 꺼내 봐요. 오늘 사례와 토론을 거친 지금은 어떤가요?" 확신 눈금은 익명이고 정답이 없다고 먼저 말한다. 생각이 그대로인 학생에게도 "그대로라면 그 까닭도 근거예요"라고 말한다. 까닭에서 \'불쌍해서\'를 고른 학생에게 "편의는 봐주는 것일까요, 같은 출발선을 만드는 것일까요?"라고 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '‘일터의 정당한 편의는 특혜가 아니라 권리다’라는 문장', feeling: '생각', steps: 5, scaleLabels: { 1: '전혀 아니다', 5: '매우 그렇다' } }, prompt: '지금 내 생각을 1~5점으로 고르세요(익명).', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '처음 판단과 지금 판단을 견주었을 때', feeling: '생각', ask: '생각이 바뀌었거나 그대로인 가장 큰 까닭은?', choices: [
              { id: 'equal', text: '편의는 같은 출발선을 만드는 수단이라는 것을 알아서' },
              { id: 'law', text: '장애인차별금지법이 편의 제공을 정했다는 것을 알아서' },
              { id: 'same', text: '처음부터 권리라고 생각했고 그 근거가 더 단단해져서' },
              { id: 'pity', text: '장애가 있는 사람이 불쌍하다고 느껴서', why: '동정이 아니라 같은 조건에서 일할 권리가 근거예요.' }] }, prompt: '판단이 바뀌었거나 그대로인 까닭에 가장 가까운 것을 고르세요.', target: { choice: ['equal', 'law', 'same'] }, difficulty: 0.15 },
            MOOD,
          ],
        },
        worksheet: {
          title: '처음 판단 다시 보기',
          items: [
            { type: 'table', prompt: '편의마다 처음 판단과 지금 판단을 쓰세요.', columns: ['편의', '처음', '지금', '까닭'], cells: [['화면 낭독 프로그램', '', '', ''], ['근무 시간 조정', '', '', ''], ['높이 조절 책상', '', '', '']] },
            { type: 'short', prompt: '생각이 바뀐(또는 그대로인) 까닭을 한 줄로 쓰세요.' },
          ],
        },
        notes: '확신 눈금은 정답이 없다(level any). 학생이 편의를 받는지·가족의 장애 여부를 묻지 않는다.',
      }),
      M({
        id: 'wrap.career-link', type: 'wrap', title: '내 희망 직업의 일터 그물',
        method: '내 진로와 이어 보기', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(필요한 편의·내가 할 일)에 카드 한 장씩을 함께 놓는다.', base: '두 가지에 카드를 나누고, 내 희망 직업의 일터에서 할 행동을 한 줄 쓴다.', challenge: '동료로서 할 행동을 \'언제·무엇을\'이 드러나게 구체적으로 쓴다.' },
        wrap: {
          teacher: '"여러분이 일할 일터에도 장애가 있는 동료가 있을 거예요. 그 일터에 필요한 편의와, 동료로서 내가 할 일을 나눠 봐요." 카드를 나눈 뒤 \'묻지 않고 알아서 대신 다 해 준다\' 카드가 왜 남는지 묻는다. "도와주는 건 좋은 거잖아요"라는 말에 "도움이 필요한지, 어떤 방식이 좋은지 먼저 물어보면 무엇이 달라질까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '내 희망 직업의 일터', slots: ['일터에 필요한 편의', '동료로서 내가 할 일'], cards: ['화면 낭독 프로그램이 되는 업무 프로그램', '회의 자막이나 수어 통역', '회의 자료를 미리 파일로 나눈다', '도울지 먼저 묻고 원하는 방식으로 돕는다', '휠체어가 지나는 넓은 통로', '동료의 장애를 농담거리로 삼지 않는다', '묻지 않고 알아서 대신 다 해 준다'] }, prompt: '일터에 필요한 편의와 동료로서 내가 할 일을 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { '일터에 필요한 편의': ['화면 낭독 프로그램이 되는 업무 프로그램', '회의 자막이나 수어 통역', '휠체어가 지나는 넓은 통로'], '동료로서 내가 할 일': ['회의 자료를 미리 파일로 나눈다', '도울지 먼저 묻고 원하는 방식으로 돕는다', '동료의 장애를 농담거리로 삼지 않는다'] } }, difficulty: 0.2 },
            { type: 'short', prompt: '내 희망 직업 하나와, 그 일터에서 동료로서 할 행동 하나를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 희망 직업의 일터',
          items: [
            { type: 'short', prompt: '내 희망 직업의 일터에서 필요할 편의 두 가지를 쓰세요.' },
            { type: 'short', prompt: '동료로서 할 행동 하나를 \'언제·무엇을\'이 드러나게 쓰세요.' },
          ],
        },
        notes: '희망 직업은 학생이 정하지만 자신의 장애 여부와 잇지 않는다. \'묻지 않고 대신 다 해 준다\'는 동료의 결정권을 빼앗는 함정 카드다.',
      }),
    );
  }

  // ======================================================================================================
  // 3. 누구나 읽을 수 있는 정보 — 정보 접근성 (11학년)
  // ======================================================================================================
  {
    const M = MOD('info-access', [11]);
    // 화면 낭독기가 읽는 두 공지(가상)
    const READ = [
      { id: 'r1', text: '"이미지, 공지 최종 점 피엔지"라고만 읽는다' },
      { id: 'r2', text: '"체육대회 안내, 금요일 오전 운동장"이라고 읽는다' },
      { id: 'r3', text: '날짜와 장소를 알 수 없다' },
      { id: 'r4', text: '보는 사람과 같은 정보를 듣는다' },
      { id: 'r5', text: '준비물이 그림으로만 있어 빠진다' },
      { id: 'r6', text: '준비물 \'운동화·물병\'까지 듣는다' }];
    // 어려운 말 → 쉬운 말
    const EASY = [['하교 시 유의 사항', '집에 갈 때 조심할 점'], ['제출 기한 엄수', '정한 날까지 꼭 내기'], ['우천 시 순연', '비가 오면 다음 날로 미룸']];
    // 게시물 점검 항목
    const POST = (pass) => [['alt', '그림에 내용을 알려 주는 대체 텍스트가 있다', pass.includes('alt')], ['contrast', '글자와 배경의 밝기 차이가 뚜렷하다', pass.includes('contrast')], ['caption', '영상·소리에 자막이 있다', pass.includes('caption')], ['easy', '짧고 쉬운 문장으로 썼다', pass.includes('easy')], ['color', '색만이 아니라 글자·모양으로도 구분한다', pass.includes('color')]];
    // 색 조합 읽기 쉬움(가상 설문 점수, 10점 만점)
    const PAIRS = [['흰 바탕·검은 글자', 9], ['노란 바탕·검은 글자', 8], ['흰 바탕·연회색 글자', 3], ['빨간 바탕·초록 글자', 2]];
    const PAIRBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '색 조합별 읽기 쉬움 점수(가상 설문)', unit: '점', xLabel: '색 조합', yLabel: '평균 점수', data: PAIRS, max: 10 }, more);
    // 반 체크리스트(꼭·되도록·나중 — 우리 반 기준)
    const NOW = ['그림을 올릴 때 대체 텍스트 달기', '우리 반 영상에 자막 켜기', '색만으로 구분하지 않기'];
    const MONTH = ['게시판 글자 크기·대비 점검', '긴 공지에 쉬운 글 요약 붙이기'];
    const LATER = ['점자 안내판을 학교에 요청하기', '수어 영상 안내를 학교와 준비하기'];

    MODS.push(
      M({
        id: 'intro.screen-reader', type: 'intro', title: '화면 낭독기가 읽는 공지',
        method: '화면 낭독기가 읽는 게시물', tool: 'story', minutes: 7,
        levels: { easy: '교사가 두 장면(그림만 있는 공지·대체 텍스트가 있는 공지)을 소리 내어 읽어 주고 차이를 함께 고른다.', base: '세 장면(읽는 소리·알게 된 정보·빠진 정보)으로 두 공지를 견주는 시연을 보고 차이를 말한다.', challenge: '그림만 있는 공지에서 빠진 정보(날짜·장소·준비물)를 짚어 말한다.' },
        intro: {
          teacher: '"화면 낭독기는 화면의 글을 소리로 읽어 주는 프로그램이에요. 시각장애가 있는 사람만이 아니라 눈이 피곤한 사람, 운전 중인 사람도 써요. 그런데 그림 파일로만 된 공지를 만나면 무엇이라고 읽을까요?" 시연 단추로 두 공지의 낭독 결과가 칸에 놓이는 모습을 보여 준다. "그림을 보면 다 아는데요"라는 말이 나오면 "그림을 볼 수 없다면, 이 공지에서 무엇을 알 수 있을까요?"라고 되묻는다. 같은 공지라도 대체 텍스트 한 줄이 있느냐에 따라 정보를 받느냐 못 받느냐가 갈린다는 점을 짚는다.',
          student: '그림만 있는 공지와 대체 텍스트가 있는 공지를 화면 낭독기가 어떻게 읽는지 견주어 보세요. 무엇이 빠지고 무엇이 전해지나요?',
          demo: { tool: 'story', options: { mode: 'sort', title: '화면 낭독기가 읽는 두 공지', slots: [{ id: 'img', label: '그림만 있는 공지' }, { id: 'alt', label: '대체 텍스트가 있는 공지' }], cards: READ }, sequence: [{ sort: { img: ['r1', 'r3', 'r5'], alt: ['r2', 'r4', 'r6'] } }] },
          art: { draw: 'two paper notice boards side by side, the left one a single paper picture with no words and a paper speaker emitting a short flat sound wave, the right one the same picture with a small paper caption strip under it and a speaker emitting a long rich sound wave', banner: '낭독기는 무엇을 읽을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '공지는 가상이다. 화면 낭독기를 직접 들려줄 수 있으면 교사 기기의 접근성 기능으로 짧게 시연한다. 학생에게 시각장애 여부를 묻지 않는다.',
      }),
      M({
        id: 'intro.easy-read', type: 'intro', title: '가정통신문을 쉬운 글로',
        method: '어려운 문장 쉬운 글로', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 어려운 말 둘(하교 시 유의 사항·제출 기한 엄수)만 쉬운 말과 짝지어 보인다.', base: '가정통신문 속 어려운 말 셋을 쉬운 말과 짝짓는 시연을 보고, 쉬운 글이 누구에게 도움이 되는지 말한다.', challenge: '쉬운 말 옆에 곁들일 그림 기호(시계·우산 등)를 떠올려 활동지에 그린다.' },
        intro: {
          teacher: '"가정통신문의 \'우천 시 순연\', 한 번에 알아듣는 사람 손 들어 볼까요?" 시연 단추로 어려운 말이 쉬운 말과 짝지어지는 모습을 보여 준다. "쉬운 글은 어린아이용 아닌가요?"라는 말이 나오면 "발달장애가 있는 사람, 한국어를 배우는 중인 사람, 바쁜 보호자, 그리고 우리 모두에게 어떨까요?"라고 되묻는다. 쉬운 글은 내용을 줄이는 게 아니라 같은 내용을 누구나 알아듣게 쓰는 것이라는 점을 짚는다.',
          student: '가정통신문에 나온 어려운 말을 누구나 알아들을 쉬운 말과 짝지어 보세요. 쉬운 글이 누구에게 도움이 될지도 생각해 보세요.',
          demo: { tool: 'wordcards', options: { words: EASY.map(([en, ko]) => ({ en, ko })) }, sequence: [{ match: Object.fromEntries(EASY.map(([en]) => [en, en])) }] },
          art: { draw: 'a paper school newsletter with dense tiny paper text lines on the left, the same newsletter on the right with three short bold lines and simple paper icons of a clock, an umbrella and a backpack', banner: '같은 내용, 쉬운 말로', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '쉬운 글은 내용을 빼는 것이 아니다. 특정 집단을 \'이해력이 낮은 사람\'으로 말하지 않고 \'누구나\'에 초점을 둔다.',
      }),

      M({
        id: 'activity.post-audit', type: 'activity', title: '학급 게시물 접근성 점검',
        method: '학급 게시물 점검 차례', tool: 'kitchen', minutes: 17,
        levels: { easy: '가상 게시물 셋을 점검 항목 셋(대체 텍스트·대비·자막)으로 점검한다.', base: '가상 게시물 셋을 점검 항목 다섯(대체 텍스트·대비·자막·쉬운 글·색에만 기대지 않기)으로 점검한다.', challenge: '같은 점검을 하고, 고칠 우선순위와 그 까닭을 활동지에 쓴다.' },
        activity: {
          title: '게시물 점검표', tool: 'kitchen',
          teacher: '"우리 반 온라인 게시판에 올라온 게시물 세 개예요(가상). 오늘 점검표로 누구나 읽을 수 있는지 확인해 봐요." 게시물 설명을 소리 내어 읽고 항목마다 \'통과\'인지 묻는다. "글자만 크면 된다"는 학생에게 "글자가 커도 연회색 글자에 흰 바탕이라면 어떨까요?"라고 되묻는다. 점검은 게시한 친구를 탓하는 것이 아니라 다음 게시물을 고치는 일이라는 점을 짚는다. 접근성은 전문가만 하는 일이 아니라 이렇게 게시할 때 누구나 하는 일이라는 것도 말한다.',
          task: '가상 학급 게시물 세 개를 접근성 점검표로 확인해요. 통과한 항목만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('게시물 가(체육대회 그림 포스터): 그림에 설명이 없고, 흰 바탕에 연회색 글자이며, 영상은 없어 자막 칸은 해당 없음으로 봐요. 짧은 문장이고 색과 글자를 함께 써요. 통과한 항목만 표시하세요.', '게시물 가 점검', POST(['caption', 'easy', 'color']), { k: 3, d: 0.25 }),
            CHECKQ('게시물 나(동아리 홍보 영상): 자막이 없고, 영상 설명 글은 검은 글자에 흰 바탕이며, 설명 그림에 대체 텍스트가 있어요. 문장이 길고, 신청 칸을 빨강·초록 색으로만 나눴어요. 통과한 항목만 표시하세요.', '게시물 나 점검', POST(['alt', 'contrast']), { k: 3, d: 0.3 }),
            CHECKQ('게시물 다(현장 체험 안내 글): 사진에 대체 텍스트가 있고, 대비가 뚜렷하며, 영상이 없어 자막 칸은 해당 없음으로 봐요. 어려운 한자어가 많고, 준비물을 빨간 글씨로만 강조했어요. 통과한 항목만 표시하세요.', '게시물 다 점검', POST(['alt', 'contrast', 'caption']), { k: 3, d: 0.35,
              more: { conclude: '대체 텍스트·대비·자막·쉬운 글·색에만 기대지 않기 — 다섯 줄 점검이면 게시물 하나로 더 많은 사람에게 닿아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 게시물에서 고칠 점과 우선순위를 쓰세요.', columns: ['게시물', '고칠 점', '우선순위(1~3)', '까닭'], cells: [['가', '', '', ''], ['나', '', '', ''], ['다', '', '', '']] }] },
        notes: '게시물은 가상이다. 실제 학급 게시물을 점검할 때는 올린 학생 이름을 가리고, 탓하지 않고 고칠 점만 나눈다. 점검 항목은 웹 접근성 지침을 줄인 것이다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.alt-write', type: 'activity', title: '행사 사진 대체 텍스트 쓰기',
        method: '대체 텍스트 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '사진 설명 두 개의 대체 텍스트를 문장 틀(무엇이·어디서·무엇을 하는지)을 보고 쓰고, 그래프 문항은 틀의 빈칸을 채운다.', base: '행사 사진 두 장과 그래프 한 장의 대체 텍스트를 쓰고 핵심 정보·간결함·꾸밈 없음 기준으로 점검한다.', challenge: '그래프 대체 텍스트에 가장 큰 값과 흐름까지 넣어 기준 하나를 더 점검한다.' },
        activity: {
          title: '대체 텍스트 쓰기', tool: 'rubric-writing',
          teacher: '"대체 텍스트는 사진을 볼 수 없는 사람에게 사진이 전하려는 정보를 글로 건네는 것이에요. 길게 묘사하는 게 아니라 이 게시물에서 사진이 왜 있는지를 써요." 기준표를 함께 읽는다. "아름다운 가을 하늘 아래 행복한 학생들"처럼 꾸밈이 많은 글에는 "이 사진에서 꼭 알아야 할 정보는 무엇일까요? 느낌보다 사실을 먼저 써 볼까요?"라고 묻는다. \'사진입니다\'로 시작하는 글에는 화면 낭독기가 이미 이미지라고 알려 주니 빼도 된다고 말한다. 사진 속 학생의 이름이나 생김새로 놀릴 수 있는 표현은 쓰지 않게 한다.',
          task: '행사 사진 두 장과 그래프 한 장의 대체 텍스트를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('사진 1(가상): 운동장에서 파란 조끼를 입은 학생이 다음 주자에게 바통을 넘기고, 뒤에서 친구들이 응원해요. 대체 텍스트를 한두 문장으로 쓰세요.', '체육대회 이어달리기 사진의 대체 텍스트를 한두 문장으로 쓰세요.', ['무엇을 하는 장면인지 썼다', '한두 문장으로 짧게 썼다', '꾸밈말·느낌보다 사실을 썼다'], { min: 20, max: 150, sent: [1, 2], must: [['바통', '이어달리기']], starter: '(누가) (어디서) (무엇을) 하고 있다.', d: 0.3,
              sample: '체육대회 이어달리기에서 파란 조끼를 입은 학생이 다음 주자에게 바통을 넘기고 있다.' }),
            RWQ('사진 2(가상): 도서관에서 작가가 학생들 앞에서 책을 들고 이야기하고, 뒤 화면에 \'북 콘서트\'라는 글자가 있어요. 대체 텍스트를 한두 문장으로 쓰세요.', '도서관 북 콘서트 사진의 대체 텍스트를 한두 문장으로 쓰세요.', ['무엇을 하는 장면인지 썼다', '화면 속 글자 정보를 넣었다', '꾸밈말·느낌보다 사실을 썼다'], { min: 20, max: 150, sent: [1, 2], must: [['북 콘서트', '작가']], starter: '(어디서) (누가) (무엇을) 하고 있다. 화면에는 ~라고 쓰여 있다.', d: 0.35 }),
            RWQ('그래프 이미지(가상): 막대그래프 \'요일별 도서관 이용 학생 수\'에서 수요일이 가장 높고 금요일이 가장 낮아요. 대체 텍스트를 두 문장으로 쓰세요.', '요일별 도서관 이용 학생 수 막대그래프(가상)의 대체 텍스트를 두 문장으로 쓰세요.', ['그래프의 제목(무엇을 나타내는지)을 썼다', '눈에 띄는 결과를 썼다', '두 문장 안으로 썼다'], { min: 30, max: 200, sent: [2, 2], must: [['수요일']], starter: '~을 나타낸 막대그래프다. ~이 가장 많고 ~이 가장 적다.', plus: '가장 큰 값과 가장 작은 값을 함께 견주었다', d: 0.4,
              sample: '요일별 도서관 이용 학생 수를 나타낸 막대그래프(가상 자료)다. 수요일이 가장 많고 금요일이 가장 적다.', more: { conclude: '좋은 대체 텍스트는 짧고, 사실을 말하고, 이 자리에서 사진이 왜 있는지를 전해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 게시물 사진 하나를 떠올려(사람 이름 없이) 대체 텍스트를 한 문장으로 쓰세요.' }] },
        notes: '계획의 \'쉬움 사진 1장\'은 문항 수를 단계마다 같게 두어야 해서, 쉬움은 문장 틀로 바꾸었다. 사진은 말로 설명한 가상 사진이다. 실제 학생 사진을 쓸 때는 얼굴·이름이 드러나지 않게 한다.',
      }),
      M({
        id: 'activity.contrast-chart', type: 'activity', title: '색 조합과 읽기 쉬움 자료',
        method: '색 대비 자료 비교', tool: 'chart', minutes: 17,
        levels: { easy: '막대 끝에 값이 보이고, 첫 문항은 색 조합 둘만 견준다.', base: '값 표시 없이 색 조합 넷의 막대를 읽고, 표 빈칸을 채우고, 우리 반 기준(6점 이상)을 넘는 조합 수를 센다.', challenge: '값 표시 없이 풀고, 색만으로 구분한 그래프를 고치는 방법을 고른 까닭을 활동지에 쓴다.' },
        activity: {
          title: '색 대비 자료 읽기', tool: 'chart',
          teacher: '"우리 반 친구들에게 색 조합 네 가지가 얼마나 읽기 쉬운지 물었다고 해 봐요(가상 설문, 10점 만점)." 막대를 읽게 한 뒤 우리 반 기준을 함께 정한다. "빨강과 초록은 눈에 확 띄니까 좋은 조합 아닌가요?"라는 말이 나오면 "두 색의 밝기가 비슷하면 어떻게 보일까요? 색을 구별하기 어려운 사람에게는요?"라고 되묻는다. 오늘의 \'6점 이상\'은 수업용 우리 반 기준이고, 실제 기준은 웹 접근성 지침에서 확인할 수 있다고 밝힌다.',
          task: '색 조합별 읽기 쉬움(가상 설문) 막대를 읽고, 우리 반 게시물 색 기준을 정해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 설문에서 읽기 쉬움 점수가 가장 높은 색 조합을 고르세요.', toolOptions: PAIRBAR({ question: '가장 읽기 쉬운 조합은?', choices: PAIRS.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '두 색 조합 가운데 읽기 쉬움 점수가 더 높은 것을 고르세요(조합 둘).', toolOptions: { data: PAIRS.slice(1, 3), choices: ['노란 바탕·검은 글자', '흰 바탕·연회색 글자'] }, target: { pick: 0 } } } },
            { prompt: '막대를 읽고 표의 빈칸(빨간 바탕·초록 글자의 점수)을 채우세요.', toolOptions: PAIRBAR({ showTable: true, tableBlanks: [3] }), target: { table: true }, difficulty: 0.25 },
            { prompt: '우리 반 기준: 6점 이상인 색 조합만 게시물에 써요. 기준을 넘는 조합은 몇 개인가요?', toolOptions: PAIRBAR({ question: '6점 이상인 조합 수는?' }), target: { value: 2 }, difficulty: 0.3 },
            { prompt: '\'찬성은 초록, 반대는 빨강\'처럼 색으로만 나눈 막대그래프를 고치는 방법으로 가장 알맞은 것을 고르세요.', toolOptions: PAIRBAR({ question: '가장 알맞은 고치기는?', choices: ['막대에 \'찬성\'·\'반대\' 이름표와 무늬를 함께 넣는다', '두 색을 더 진하게 칠한다', '범례를 더 작게 줄인다'], why: ['', '더 진해도 색을 구별하기 어려운 사람에게는 여전히 같아 보일 수 있어요.', '범례가 작아지면 더 읽기 어려워요.'] }), target: { pick: 0 }, difficulty: 0.35,
              conclude: '밝기 차이가 큰 조합을 쓰고, 색과 함께 글자·무늬로도 나누면 더 많은 사람이 같은 정보를 읽어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 게시물 색 기준을 한 문장으로 정하고, 그 까닭을 쓰세요.' }] },
        notes: '점수는 모두 가상 설문이다. 실제 명도 대비 기준(지침의 대비율)은 교사가 웹 접근성 지침으로 확인해 덧붙인다(머리 주석 \'사람 확인\').',
      }),
      M({
        id: 'activity.poster-remake', type: 'activity', title: '누구나 읽는 포스터로 다시 만들기',
        method: '접근성 있는 포스터 다시 만들기', tool: 'collage', minutes: 18,
        levels: { easy: '모양 고르개를 줄인 판에서 큰 제목 자리와 대비가 뚜렷한 색 조각 두 원칙만 점검하며 꾸민다.', base: '큰 제목 자리·밝고 어두운 색 대비·그림 기호·짧은 글 자리 네 원칙으로 포스터 세 판을 다시 배치한다.', challenge: '셋째 판에 점자 안내 자리까지 두고 점검 하나를 더 한다.' },
        activity: {
          title: '포스터 다시 배치', tool: 'collage',
          teacher: '"학급 행사 포스터(가상)가 흰 바탕에 연회색 작은 글씨로 빼곡해요. 오늘 배운 원칙으로 다시 배치해 봐요: 글자는 크게, 밝기 대비는 뚜렷하게, 그림 기호를 곁들이고, 문장은 짧게." 문구는 활동지에 먼저 쓰게 하고 판에는 자리를 배치하게 한다. 꾸밈 조각만 잔뜩 붙이는 학생에게 "이 포스터에서 가장 먼저 읽혀야 할 정보는 무엇일까요? 그 자리가 가장 큰가요?"라고 묻는다. 예쁜 포스터와 읽히는 포스터가 같을 수 있다는 점을 보여 준다.',
          task: '학급 행사 포스터를 접근성 원칙(큰 글자·대비·그림 기호·짧은 문장)에 맞게 조각으로 다시 배치하고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '1판: 행사 제목 자리를 크게(큰 긴 네모 하나 이상) 두고, 날짜·장소 자리를 그 아래 두세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'star', 'heart'] }, target: { has: [{ shape: 'rect', size: 'l', min: 1 }], selfCheck: ['제목 자리가 가장 크다', '날짜·장소 자리를 따로 두었다'], minPieces: 3 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } } } },
            { prompt: '2판: 밝은 색(노랑·하양)과 어두운 색(검정·보라) 조각을 맞닿게 놓아 글자 자리의 대비를 뚜렷하게 하세요.', toolOptions: { shapes: ['rect', 'square', 'circle'] }, target: { contrast: 'light-dark', selfCheck: ['글자 자리와 바탕의 밝기 차이가 크다'], minPieces: 2 }, difficulty: 0.3 },
            { prompt: '3판: 시간·장소·준비물을 나타낼 그림 기호 조각 셋과 짧은 글 자리를 함께 놓으세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle', 'star', 'heart', 'semi'] }, target: { selfCheck: ['그림 기호 자리를 셋 두었다', '기호마다 짧은 글 자리를 붙였다', '꾸밈 조각보다 정보 자리가 눈에 띈다'], minPieces: 4 }, difficulty: 0.3,
              levels: { challenge: { prompt: '3판: 그림 기호 셋과 짧은 글 자리, 그리고 점자 안내 자리(작은 동그라미 줄)까지 놓으세요(점자 자리).', target: { has: [{ shape: 'circle', size: 's', min: 3 }], selfCheck: ['그림 기호 자리를 셋 두었다', '기호마다 짧은 글 자리를 붙였다', '꾸밈 조각보다 정보 자리가 눈에 띈다', '점자 안내 자리를 손이 닿는 아래쪽에 두었다'], minPieces: 4 } } },
              conclude: '크게·뚜렷하게·기호와 함께·짧게 — 네 원칙이면 같은 포스터가 더 많은 사람에게 읽혀요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터에 들어갈 글을 짧게 다시 쓰세요.', columns: ['자리', '원래 글', '짧게 고친 글'], cells: [['제목', '', ''], ['날짜·장소', '', ''], ['준비물', '', '']] }] },
        notes: '교구 한계: collage 는 글을 놓지 못해 글은 활동지에 쓰고 판에는 자리·대비·기호만 배치한다. 점자 안내는 학교에 요청할 자리를 정하는 것까지다(학생이 점자를 만들지 않는다).',
      }),

      M({
        id: 'wrap.checklist-save', type: 'wrap', title: '우리 반 접근성 체크리스트',
        method: '우리 반 접근성 체크리스트 확정', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 \'꼭\' 바구니 카드 하나를 먼저 놓아 보이고, 항목 셋을 함께 정리한다.', base: '오늘 쓴 점검 항목을 꼭(게시할 때마다)·되도록(한 달 점검)·나중(학교와 준비) 바구니에 정리한다.', challenge: '항목마다 점검 담당과 주기를 활동지에 정한다.' },
        wrap: {
          teacher: '"오늘 점검한 항목으로 우리 반 체크리스트를 확정해요. 기준은 \'누가, 얼마나 자주 할 수 있나\'예요: 게시할 때마다 우리가 바로 할 것, 한 달에 한 번 점검할 것, 학교와 함께 준비할 것." 카드를 정리한 뒤 \'점자 안내판\'이 왜 \'나중\'인지 묻는다. "나중이면 안 해도 되는 거죠?"라는 말에 "나중은 \'우리 반이 혼자 못 하니 학교에 요청할 일\'이에요. 요청하는 일은 오늘 정할 수 있어요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['꼭(게시할 때마다)', '되도록(한 달 점검)', '나중(학교와 준비)'], cards: mix([NOW, MONTH, LATER]) }, prompt: '오늘 쓴 접근성 점검 항목을 우리 반 기준 바구니에 정리하세요.', target: { sort: { '꼭(게시할 때마다)': NOW, '되도록(한 달 점검)': MONTH, '나중(학교와 준비)': LATER } }, difficulty: 0.2 },
            { type: 'choice', prompt: '정보 접근성에 대한 말로 알맞은 것은?', options: ['전문가만 할 수 있는 어려운 일이다', '게시할 때 대체 텍스트·자막·쉬운 글처럼 누구나 할 수 있는 일이 많다', '장애가 있는 사람이 있을 때만 하면 된다'], answer: 1, difficulty: 0.15, explain: '게시물을 올리는 사람이 바로 할 수 있는 일이 많아요. 그리고 누가 볼지 미리 알 수 없으니 늘 해 두어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 반 접근성 체크리스트',
          items: [
            { type: 'table', prompt: '항목마다 담당과 주기를 정하세요.', columns: ['항목', '담당', '주기'], cells: [['대체 텍스트', '', '게시할 때마다'], ['자막', '', ''], ['글자 크기·대비', '', ''], ['학교에 요청할 일', '', '']] },
            { type: 'short', prompt: '체크리스트를 어디에 붙이거나 올려 둘지 쓰세요.' },
          ],
        },
        notes: '\'꼭·되도록·나중\'은 학급이 직접 할 수 있는지와 주기로 나눈 우리 반 기준이다. 중요도의 순서가 아니다.',
      }),
      M({
        id: 'wrap.access-reflect', type: 'wrap', title: '정보에서 빠지는 사람 없게',
        method: '접근성 한 줄 성찰', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 장면을 읽어 주고 할 일 하나를 함께 고른다.', base: '장면에서 할 일을 고르고, 앞으로 할 일 카드 둘을 고른다.', challenge: '고른 할 일을 언제 할지 한 줄로 쓴다.' },
        wrap: {
          teacher: '"공지가 그림 파일로만 올라와 화면 낭독기를 쓰는 친구가 내용을 몰랐다는 것을 알았다면, 여러분은 무엇을 할까요?" 장면을 읽고 고르게 한다. \'그 친구에게만 따로 알려 준다\'를 고른 학생에게 "다음 공지도, 그다음 공지도 따로 알려 줄 수 있을까요? 공지 자체를 바꾸면 어떨까요?"라고 묻는다. 정보에서 빠지는 사람이 있다는 것을 알게 된 지금의 마음도 함께 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '학급 공지가 그림 파일로만 올라와 화면 낭독기를 쓰는 친구가 내용을 몰랐다는 것을 알았다.', feeling: '걱정', who: '나', choices: [
              { id: 'say', text: '공지를 올린 사람에게 대체 텍스트를 달자고 말한다', result: '다음 공지부터 그림 아래 글이 붙는다.', mood: '뿌듯함' },
              { id: 'rewrite', text: '공지 내용을 글로 다시 써서 댓글로 올린다', result: '모두가 글로 공지를 읽는다.', mood: '편안함' },
              { id: 'only', text: '그 친구에게만 따로 알려 준다', result: '이번에는 알지만 다음 공지도 또 빠진다.', mood: '걱정', why: '한 번은 도움이 되지만 공지 자체가 그대로라 다음에도 빠져요.' },
              { id: 'skip', text: '내 일이 아니니 넘어간다', result: '친구는 행사 날짜를 놓친다.', mood: '속상함', why: '게시물을 고치는 일은 누구나 할 수 있어요.' }] }, prompt: '이 장면에서 할 일로 알맞은 것을 고르세요.', target: { choice: ['say', 'rewrite'] }, difficulty: 0.15 },
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '앞으로 내가 할 일', cards: ['사진을 올릴 때 대체 텍스트를 단다', '보기 좋게 색으로만 구분한다', '영상을 올릴 때 자막을 켠다', '어려운 말을 그대로 둔다'] }, prompt: '앞으로 내가 할 일 둘을 고르세요.', target: { pick: ['사진을 올릴 때 대체 텍스트를 단다', '영상을 올릴 때 자막을 켠다'] }, difficulty: 0.15 },
            MOOD,
          ],
        },
        worksheet: {
          title: '정보에서 빠지는 사람 없게',
          items: [
            { type: 'short', prompt: '정보에서 소외되는 사람이 있다는 것을 알았을 때의 내 생각을 한 줄로 쓰세요.' },
            { type: 'short', prompt: '고른 할 일을 언제·어디서 할지 한 줄로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 이동권과 당사자의 자기결정 (12학년)
  // ======================================================================================================
  {
    const M = MOD('mobility-self', [12]);
    // 가상 인물 '하'(휠체어를 쓰는 대학생)의 하루 경로 지도
    const ROUTE = { title: '하의 하루 이동 경로(가상 지도)', grid: [6, 4], roads: [[[0, 3], [1, 3], [2, 3], [2, 2], [2, 1], [3, 1], [4, 1], [5, 1], [5, 0]]], places: [
      { name: '하의 집', icon: 'apartment', at: [0, 3] },
      { name: '계단식 버스만 오는 정류장', icon: 'bus', at: [1, 3] },
      { name: '승강기가 고장 난 지하철역', icon: 'station', at: [2, 2] },
      { name: '대학교', icon: 'school', at: [3, 1] },
      { name: '입구에 턱이 있는 아르바이트 카페', icon: 'market', at: [5, 1] },
      { name: '저상버스가 서는 큰길 정류장', icon: 'bus', at: [0, 1] }] };
    // '우리 없이 우리에 대해 결정하지 말라' 낱말
    const PHRASE = [['우리', '그 결정으로 삶이 달라지는 당사자'], ['없이', '당사자를 빼고 자리를 꾸리는 것'], ['우리에 대해', '당사자의 생활·권리에 관한 일'], ['결정', '규칙·시설·계획을 정하는 일'], ['하지 말라', '당사자가 함께 정하게 하라는 요구']];
    // 지역별 저상버스 비율(가상)
    const BUS = [['가 지역', 70], ['나 지역', 45], ['다 지역', 30], ['라 지역', 60], ['마 지역', 20]];
    const BUSBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '지역별 시내버스 가운데 저상버스 비율(가상 자료)', unit: '%', xLabel: '지역', yLabel: '저상버스 비율', data: BUS, max: 100 }, more);
    // 졸업여행 장소 정하기 갈림길
    const TRIP = { text: '졸업여행 장소를 정하는 학급 회의. 반장이 "편한 곳으로 우리가 정하자"며 계단이 많은 산속 숙소를 고르려 한다. 휠체어를 쓰는 \'현\'에게는 아직 아무도 묻지 않았다.', who: '학급 회의', motif: 'house', choices: [
      { id: 'asis', text: '그대로 산속 숙소로 정한다', result: '현은 숙소 2층 방과 산책로에 갈 수 없다.', impact: [{ who: '현', text: '여행 내내 따로 움직인다', tone: -1 }], ending: '묻지 않고 정한 \'편한 곳\'은 누군가에게는 갈 수 없는 곳이다.' },
      { id: 'ask', text: '현에게 먼저 의견을 묻는다', result: '현은 "나 때문에 다 바꾸진 않아도 돼. 다만 계단만 있는 숙소는 어려워"라고 말한다.', impact: [{ who: '현', text: '자기 이야기를 직접 한다', tone: 1 }],
        next: { text: '몇몇이 "그럼 현을 위해 우리가 알아서 바닷가로 정해 주자"고 한다.', choices: [
          { id: 'together', text: '현을 포함해 반 전체가 쓸 \'모두 갈 수 있는 기준\'을 함께 만든다', result: '승강기·넓은 화장실·평평한 길을 기준으로 후보 두 곳이 남는다.', impact: [{ who: '반 전체', text: '같은 기준으로 고른다', tone: 1 }],
            next: { text: '기준에 맞는 후보 두 곳(바닷가 마을·호숫가 마을)이 남았다.', choices: [
              { id: 'vote', text: '현도 한 표를 갖고 반 전체가 투표한다', result: '호숫가 마을로 정해지고 현도 일정을 함께 짠다.', impact: [{ who: '현', text: '참여한 사람으로서 여행을 준비한다', tone: 1 }], ending: '기준은 함께, 결정도 함께 — 그래야 모두의 여행이 된다.' },
              { id: 'hyunpick', text: '배려한다며 현에게 혼자 고르라고 한다', result: '현은 반 전체의 선택을 혼자 떠안아 부담스러워한다.', impact: [{ who: '현', text: '혼자 책임을 진다', tone: 0 }], ending: '대신 정하는 것도, 혼자 떠넘기는 것도 함께 정하는 것은 아니다.' }] } },
          { id: 'forhim', text: '현을 위해 우리가 알아서 바닷가로 정한다', result: '바닷가 숙소에도 계단이 있다는 것을 나중에 안다.', impact: [{ who: '현', text: '또 묻지 않은 결정에 맞춘다', tone: -1 }], ending: '\'위해서\' 대신 정해도 당사자에게 묻지 않으면 빗나간다.' }] } },
      { id: 'rule', text: '장소보다 먼저 \'모두 갈 수 있는 기준\'을 만들자고 한다', result: '기준을 정하려는데 휠체어 접근성을 어떻게 확인할지 아무도 모른다.', impact: [{ who: '반 전체', text: '기준을 세울 출발점이 생긴다', tone: 1 }],
        next: { text: '접근성을 확인할 방법을 정해야 한다.', choices: [
          { id: 'askhyun', text: '현과 담임 선생님께 확인할 것을 묻고 함께 기준을 세운다', result: '승강기·넓은 화장실·평평한 길·가까운 주차가 기준이 된다.', impact: [{ who: '현', text: '기준을 함께 만든다', tone: 1 }],
            next: { text: '기준에 맞는 후보 두 곳이 남았다.', choices: [
              { id: 'vote', text: '현도 한 표를 갖고 반 전체가 투표한다', result: '호숫가 마을로 정해진다.', impact: [{ who: '반 전체', text: '모두 함께 간다', tone: 1 }], ending: '당사자와 함께 만든 기준이 반 전체의 기준이 된다.' },
              { id: 'leader', text: '반장이 정한다', result: '정해졌지만 몇몇은 의견을 못 냈다.', impact: [{ who: '반 전체', text: '참여가 줄어든다', tone: 0 }], ending: '기준을 함께 만들었다면 결정도 함께하는 것이 이어진다.' }] } },
          { id: 'guess', text: '우리가 짐작해서 \'괜찮아 보이는\' 곳으로 기준을 정한다', result: '현장에 가 보니 화장실 문이 좁다.', impact: [{ who: '현', text: '화장실을 쓰지 못한다', tone: -1 }], ending: '짐작한 기준은 쓰는 사람의 실제 필요를 놓친다.' }] } }] };
    const TRIP_R = [{ id: 'voice', text: '결정으로 삶이 달라지는 사람이 결정에 참여해야 한다' }, { id: 'criteria', text: '모두 갈 수 있는 기준은 반 전체를 위한 기준이다' }, { id: 'kind', text: '알아서 대신 정해 주는 것이 배려다', why: '묻지 않고 대신 정하면 당사자의 선택을 빼앗아요. 배려는 묻는 데서 시작해요.' }, { id: 'burden', text: '한 사람 때문에 모두가 양보할 수는 없다', why: '모두 갈 수 있는 기준은 다친 친구·짐이 많은 친구에게도 도움이 돼요. 한 사람을 위한 양보가 아니에요.' }];
    // 모둠 역할 정하기(짧은 갈림길)
    const ROLE = { text: '모둠 발표 역할을 나눈다. 손 떨림이 있는 \'솔\'에게 아무도 묻지 않은 채 "솔은 판서 빼 주자"는 말이 나온다.', who: '모둠', motif: 'star', choices: [
      { id: 'drop', text: '솔에게 묻지 않고 판서를 빼 준다', result: '솔은 하고 싶던 판서 디자인에서 빠진다.', impact: [{ who: '솔', text: '하고 싶은 일을 말할 기회를 잃는다', tone: -1 }], ending: '빼 주는 것이 늘 배려는 아니다.' },
      { id: 'askrole', text: '솔에게 하고 싶은 역할과 필요한 방법을 묻는다', result: '솔은 "판서 대신 태블릿으로 그려서 띄우고 싶어"라고 한다.', impact: [{ who: '솔', text: '자기에게 맞는 방법으로 참여한다', tone: 1 }], ending: '물어보면 빼는 것 말고 맞는 방법이 보인다.' }] };
    const ROLE_R = [{ id: 'ask', text: '역할은 당사자에게 묻고 맞는 방법을 함께 찾는다' }, { id: 'spare', text: '어려워 보이면 빼 주는 것이 배려다', why: '어려워 보이는 것과 하고 싶지 않은 것은 달라요. 먼저 물어요.' }];
    // 졸업여행 예산(가상, 1인당 수업용 금액)
    const TRIPBUD = [{ id: 'liftbus', text: '휠체어 승강 장치가 있는 전세버스', price: 90000 }, { id: 'stepbus', text: '계단으로만 타는 전세버스', price: 60000 }, { id: 'hotela', text: '승강기·넓은 화장실이 있는 숙소', price: 120000 }, { id: 'hotelb', text: '계단만 있는 산속 숙소', price: 80000 }, { id: 'walk', text: '평평한 호숫가 산책로 체험', price: 40000 }, { id: 'peak', text: '계단만 있는 산꼭대기 전망대', price: 50000 }, { id: 'meal', text: '함께 먹는 저녁 식사', price: 30000 }];

    MODS.push(
      M({
        id: 'intro.day-trace', type: 'intro', title: '하의 하루 이동 경로',
        method: '하루 이동 경로 따라가기', tool: 'map', minutes: 7,
        levels: { easy: '교사가 막히는 지점 둘(계단식 버스 정류장·고장 난 승강기 역)만 짚으며 경로를 따라간다.', base: '집 → 학교 → 아르바이트 경로의 막히는 지점 넷을 시연으로 찾고, 돌아가는 길(저상버스 정류장)을 말한다.', challenge: '돌아가는 길이 칸 몇 개만큼 더 먼지 세어 시간 차이를 어림해 말한다.' },
        intro: {
          teacher: '"가상 인물 하는 휠체어를 쓰는 대학생이에요. 오늘 하의 하루를 지도에서 따라가 봐요: 집에서 대학교, 그리고 아르바이트 카페까지." 시연 단추로 \'승강기가 고장 난 지하철역\'에 핀을 꽂고, 그 지점에서 무엇이 막히는지 고르는 모습을 보여 준다. "택시 타면 되잖아요"라는 말이 나오면 "매일 택시를 타야 한다면 비용과 시간은 누가 감당할까요? 다른 사람은 버스로 가는데요"라고 되묻는다. 이동이 막히면 학교·일·친구 만나기까지 함께 막힌다는 것, 그래서 이동권은 교통만의 문제가 아니라는 점을 짚는다.',
          student: '가상 인물 하의 하루 경로를 지도에서 따라가며 막히는 지점을 찾아보세요. 그 지점이 막히면 하의 하루에서 무엇이 함께 막히는지 생각해 보세요.',
          demo: { tool: 'map', options: Object.assign({}, ROUTE, { ask: { q: '승강기가 고장 난 역에서 막히면 하의 하루에 생기는 일은?', choices: ['수업에 늦고 아르바이트 시간도 밀린다', '아무 일도 없다', '하가 더 일찍 일어나면 해결된다'] } }), sequence: [{ place: '승강기가 고장 난 지하철역', pick: 0 }] },
          art: { draw: 'a paper city grid with a dotted paper path from an apartment to a university to a small cafe, a paper wheelchair user at the start, small red paper barriers at a bus stop with steps and at a subway station with an out of order elevator sign, a detour arrow curving to a low floor bus stop', banner: '어디서 막힐까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '하와 지도는 가상이다. 실제 지역·역 이름을 쓰지 않는다. 우회 시간은 칸 수로 어림하는 연습이다.',
      }),
      M({
        id: 'intro.nothing-about', type: 'intro', title: '"우리 없이 우리에 대해"',
        method: '"우리 없이 우리에 대해 결정하지 말라" 문장 읽기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 낱말 셋(우리·결정·하지 말라)만 뜻과 짝지어 보인다.', base: '문장의 낱말 다섯을 뜻과 짝짓는 시연을 보고, 학교 생활 사례(축제 기획·시설 공사)에 문장을 붙여 말한다.', challenge: '이 문장을 지키지 않은 반대 사례 하나를 찾아 말한다.' },
        intro: {
          teacher: '"\'우리 없이 우리에 대해 결정하지 말라.\' 장애인 권리 운동에서 널리 쓰여 온 말이에요. 낱말을 하나씩 나눠 뜻을 짝지어 봐요." 시연 단추로 낱말과 뜻이 짝지어지는 모습을 보여 준다. "전문가가 더 잘 아니까 전문가가 정하는 게 낫지 않나요?"라는 말이 나오면 "전문가의 지식은 꼭 필요해요. 그런데 매일 그 버스를 타는 사람의 경험은 누가 가장 잘 알까요?"라고 되묻는다. 학교에서 학생 없이 학생 규칙을 정하면 어떨지 떠올리게 하고, 오늘 주제가 \'대신 결정\'과 \'함께 결정\'의 차이라는 점을 밝힌다.',
          student: '"우리 없이 우리에 대해 결정하지 말라"를 낱말로 나누어 뜻과 짝지어 보세요. 우리 학교에서 이 문장이 필요한 장면도 떠올려 보세요.',
          demo: { tool: 'wordcards', options: { words: PHRASE.map(([en, ko]) => ({ en, ko })) }, sequence: [{ match: Object.fromEntries(PHRASE.map(([en]) => [en, en])) }] },
          art: { draw: 'a round paper meeting table seen from above with paper chairs, one empty chair being pulled back to the table by a paper hand, a paper banner strip across the top with the words cut into five separate paper pieces', banner: '그 자리에 당사자가 있나요?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '이 문장은 장애인 권리 운동의 표어로 널리 쓰인다(출처·역사는 머리 주석 \'사람 확인\'). 전문가의 역할을 깎아내리지 않고 \'당사자 참여\'를 더하는 쪽으로 말한다.',
      }),

      M({
        id: 'activity.bus-data', type: 'activity', title: '저상버스 비율 자료 분석',
        method: '저상버스 도입 자료 분석', tool: 'chart', minutes: 17,
        levels: { easy: '막대 끝에 값이 보이고, 첫 문항은 지역 셋만 견준다.', base: '값 표시 없이 지역 다섯의 막대를 읽고 격차를 계산하며, 격차의 영향과 정책 방향을 고른다.', challenge: '값 표시 없이 풀고, 고른 정책 방향에 당사자 참여를 어떻게 넣을지 활동지에 쓴다.' },
        activity: {
          title: '저상버스 지역 격차', tool: 'chart',
          teacher: '"가상 지역 다섯 곳의 시내버스 가운데 저상버스가 차지하는 비율이에요(가상 자료). 저상버스는 바닥이 낮고 경사판이 있어 휠체어·유모차·어르신이 타기 쉬운 버스예요." 막대를 읽게 한 뒤 격차를 계산하게 한다. "비율이 낮은 지역 사람들은 다른 데로 이사 가면 된다"는 말이 나오면 "사는 곳에 따라 학교·병원에 갈 수 있는지가 달라진다면, 그건 공정할까요?"라고 되묻는다. 정책 방향 문항에서는 \'평균만 맞추기\'와 \'가장 낮은 곳부터, 쓰는 사람에게 묻기\'가 어떻게 다른지 견주게 한다.',
          task: '지역별 저상버스 비율(가상) 막대를 읽고, 지역 격차와 그 영향, 줄일 방향을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '저상버스 비율이 가장 낮은 가상 지역을 고르세요.', toolOptions: BUSBAR({ question: '가장 낮은 지역은?', choices: BUS.map((x) => x[0]) }), target: { pick: 4 }, difficulty: 0.15,
              levels: { easy: { prompt: '가·나·다 지역 가운데 저상버스 비율이 가장 낮은 곳을 고르세요(지역 셋).', toolOptions: { data: BUS.slice(0, 3), choices: ['가 지역', '나 지역', '다 지역'] }, target: { pick: 2 } } } },
            { prompt: '비율이 가장 높은 지역과 가장 낮은 지역의 차이는 몇 %p인가요?', toolOptions: BUSBAR({ question: '가장 높은 곳과 낮은 곳의 차이는?' }), target: { value: 50 }, difficulty: 0.3 },
            { prompt: '저상버스 비율이 낮은 지역에서 생길 영향으로 알맞은 것을 고르세요.', toolOptions: BUSBAR({ question: '알맞은 영향은?', choices: ['휠체어를 쓰는 사람이 탈 수 있는 버스를 오래 기다린다', '그 지역 사람들은 버스를 좋아하지 않는다', '아무 영향이 없다'], why: ['', '그래프는 사람들의 마음을 보여 주지 않아요.', '탈 수 있는 버스가 적으면 기다림과 우회가 늘어요.'] }), target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '격차를 줄이는 정책 방향으로 가장 알맞은 것을 고르세요.', toolOptions: BUSBAR({ question: '가장 알맞은 방향은?', choices: ['비율이 낮은 지역부터 늘리고, 쓰는 사람에게 노선·정류장 의견을 묻는다', '전체 평균만 맞추면 지역 차이는 두어도 된다', '비율이 높은 지역에 더 늘린다'], why: ['', '평균이 올라도 가장 낮은 지역 사람들의 불편은 그대로일 수 있어요.', '격차가 더 벌어져요.'] }), target: { pick: 0 }, difficulty: 0.4,
              conclude: '자료는 격차를 보여 주고, 정책은 가장 막힌 곳부터 풀어요. 그리고 노선과 정류장은 매일 타는 사람에게 물어야 맞게 정할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '격차를 줄일 정책 방향과, 거기에 당사자 의견을 넣는 방법을 두 문장으로 쓰세요.' }] },
        notes: '자료는 모두 가상이다(실제 저상버스 도입률 통계는 근거 파일에 없다). 실제 자료를 쓸 때는 교사가 국토교통부 등 공식 통계를 확인해 출처를 밝힌다.',
      }),
      M({
        id: 'activity.decide-dilemma', type: 'activity', title: '대신 결정할까, 함께 결정할까',
        method: '대신 결정할까 함께 결정할까', tool: 'dilemma', minutes: 18,
        levels: { easy: '졸업여행 회의의 첫 갈림길만 고르고 근거를 고른다. 모둠 역할 장면도 같은 방식으로 고른다.', base: '졸업여행 회의를 갈림길 둘까지 따라가 근거를 고르고, 두 길을 끝까지 견주며, 모둠 역할 장면을 고른다.', challenge: '졸업여행 회의를 갈림길 셋까지 끝까지 따라가고, 세 결과를 견주어 \'함께 결정\'의 원칙을 활동지에 정리한다.' },
        activity: {
          title: '졸업여행 회의 갈림길', tool: 'dilemma',
          teacher: '"졸업여행 장소를 정하는 학급 회의예요. 현에게 묻지 않고 \'편한 곳\'으로 정하려는 순간, 여러분은 어떤 길로 갈까요?" 선택마다 결과 글을 소리 내어 읽게 한다. \'현을 위해 우리가 알아서 정해 주자\'를 고른 학생에게 "좋은 마음이에요. 그런데 현에게 묻지 않았는데, 우리가 고른 바닷가가 현에게 맞는지 어떻게 알까요?"라고 묻는다. \'현에게 혼자 고르라고 한다\'에는 "반 전체의 여행을 한 사람에게 떠넘기는 것도 함께 정하는 걸까요?"라고 묻는다. 대신 정하기도, 떠넘기기도 아닌 \'함께 정하기\'가 무엇인지 끝에 정리한다.',
          task: '졸업여행 회의와 모둠 역할 장면을 갈림길마다 따라가며 대신 결정과 함께 결정의 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('졸업여행 회의 갈림길을 따라가 모두의 여행이 되는 길을 고르고, 근거를 고르세요.', TRIP, [['ask', 'together', 'vote'], ['rule', 'askhyun', 'vote']], TRIP_R, ['voice', 'criteria'], { d: 0.4, opt: { title: '졸업여행 회의' } }),
            EXPLOREQ('\'우리가 알아서 정해 준다\' 길과 \'기준을 함께 만든다\' 길을 끝까지 가 보고 결과를 견주세요.', TRIP, TRIP_R, ['두 길의 끝 장면을 모두 확인했다', '현에게 남은 영향을 견주었다'], { d: 0.35 }),
            DILQ('모둠 발표 역할을 나누는 장면이에요. 알맞은 길을 고르고 근거를 고르세요.', ROLE, [['askrole']], ROLE_R, ['ask'], { d: 0.3, opt: { title: '모둠 역할 정하기' }, more: { conclude: '대신 정하면 빗나가고, 떠넘기면 무겁고, 물어서 함께 정하면 맞는 방법이 보여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 길의 결과를 견주어 \'함께 결정\'의 원칙을 정리하세요.', columns: ['길', '현에게 생긴 일', '여기서 얻은 원칙'], cells: [['묻지 않고 정함', '', ''], ['대신 정해 줌', '', ''], ['함께 기준·투표', '', '']] }] },
        notes: '현과 솔은 가상 인물이다. 학생 자신이나 반 친구의 장애를 사례로 쓰지 않는다.',
      }),
      M({
        id: 'activity.trip-plan', type: 'activity', title: '모두가 가는 여행 예산',
        method: '모두가 가는 여행 계획 예산', tool: 'economy', minutes: 17,
        levels: { easy: '항목 둘(승강 장치 버스·계단 버스) 가운데 모두 탈 수 있는 버스를 예산 안에서 고른다.', base: '항목 일곱(버스 둘·숙소 둘·체험 둘·식사)을 1인 예산 30만 원 안에서 모두 갈 수 있게 고르고, 체험까지 고른다.', challenge: '예산이 25만 원으로 줄었을 때 조정안을 고르고, 무엇을 지켰는지 활동지에 쓴다.' },
        activity: {
          title: '여행 예산 짜기', tool: 'economy',
          teacher: '"졸업여행 1인 예산은 30만 원이에요(수업용 예시 금액). 기준은 하나 — 반 모두가 함께 갈 수 있어야 해요." 항목마다 "이걸 고르면 누가 못 가게 되나요?"라고 묻는다. "승강 장치 버스는 비싸니 계단 버스로 하고 현만 따로 오면 된다"는 말이 나오면 "현만 따로 오는 여행은 같은 여행일까요? 짐이 많은 친구, 다리를 다친 친구에게는 어떨까요?"라고 되묻는다. 비용과 접근성을 함께 따지는 것이 오늘의 요점이고, 접근 가능한 선택이 늘 가장 비싼 것은 아니라는 점(산책로 체험)도 짚는다.',
          task: '졸업여행 예산 안에서 모두 갈 수 있는 교통·숙소·체험을 골라요. 예산이 줄면 다시 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '1인 예산 30만 원. 모두 탈 수 있는 \'승강 장치 버스\'와 \'승강기·넓은 화장실 숙소\'를 넣고, 계단만 있는 숙소는 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 300000, items: TRIPBUD }, target: { budget: { must: ['liftbus', 'hotela'], not: ['hotelb'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '1인 예산 30만 원. 두 버스 가운데 모두 탈 수 있는 버스를 고르세요(항목 둘).', toolOptions: { items: TRIPBUD.slice(0, 2) }, target: { budget: { must: ['liftbus'], not: ['stepbus'] } } } } },
            { prompt: '1인 예산 30만 원. 버스·숙소에 더해 모두 함께하는 체험과 저녁 식사까지 넣어 고르세요. 계단만 있는 곳은 빼요.', toolOptions: { mode: 'budget', budget: 300000, items: TRIPBUD }, target: { budget: { must: ['liftbus', 'hotela', 'walk', 'meal'], not: ['hotelb', 'peak'] } }, difficulty: 0.3 },
            { prompt: '예산이 1인 25만 원으로 줄었어요. 모두 갈 수 있는 버스·숙소·체험은 지키고 예산 안에서 다시 고르세요.', toolOptions: { mode: 'budget', budget: 250000, items: TRIPBUD }, target: { budget: { must: ['liftbus', 'hotela', 'walk'], not: ['hotelb', 'peak'] } }, difficulty: 0.35,
              conclude: '예산이 줄어도 \'누군가 못 가게 되는 선택\'부터 줄이지 않아요. 무엇을 지키고 무엇을 덜지 정하는 것이 모두의 계획이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 우리 반이 지킨 것과 덜어 낸 것을 두 문장으로 쓰세요.' }] },
        notes: '교구 한계: economy 는 돈(원)만 센다 — 금액은 수업용 예시다. 실제 여행 계획에서는 교사가 업체에 접근성(승강기·화장실 문 폭 등)을 직접 확인하고, 당사자 학생·보호자와 함께 정한다.',
      }),
      M({
        id: 'activity.policy-proposal', type: 'activity', title: '지역 이동권 제안서',
        method: '지역 이동권 제안서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '제안서를 네 문장(문제·자료 근거·당사자 참여·실행 계획)으로 문장 틀을 보고 쓴다.', base: '제안서를 여섯~여덟 문장으로 쓰고 문제·자료 근거·당사자 참여 방법·실행 계획 기준표로 점검한다.', challenge: '예상되는 반대 의견(비용 등)에 대한 답을 넣어 기준 하나를 더 점검한다.' },
        activity: {
          title: '이동권 제안서', tool: 'rubric-writing',
          teacher: '"가상 지역 의회에 보내는 제안서를 써요. 오늘 본 저상버스 자료나 하의 경로에서 문제 하나를 골라요." 기준표를 함께 읽는다. 자료 칸이 빈 글에는 "\'불편하다\'를 숫자나 사례로 보이면 읽는 사람이 무엇을 알게 될까요?"라고 묻는다. 당사자 참여 칸이 \'장애인을 위해 만들어 주세요\'로만 되어 있으면 "계획을 세우는 자리에 누가 함께 앉아야 할까요?"라고 묻는다. 자료는 가상이라고 밝히게 하고, 특정 정당·정치인 이름은 쓰지 않게 한다.',
          task: '가상 지역 의회에 보내는 이동권 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 지역 의회에 보내는 이동권 제안서를 여섯~여덟 문장으로 쓰세요.', '지역 이동권 제안서: 문제, 자료 근거(가상 자료라고 밝히기), 당사자 참여 방법, 실행 계획을 쓰세요.', ['문제를 구체적으로 썼다', '자료를 근거로 들었다', '당사자가 참여하는 방법을 썼다', '언제·무엇을 할지 실행 계획을 썼다'], { min: 150, max: 700, sent: [6, 8], must: [['자료', '%', '비율'], ['참여', '의견', '함께']],
              easySent: [4, 5], easyPrompt: '가상 지역 의회에 보내는 이동권 제안서를 네 문장으로 쓰세요(문장 틀).', starter: '문제: ~. 근거: 가상 자료에 따르면 ~. 참여: ~에게 ~로 묻는다. 계획: ~까지 ~한다.',
              plus: '예상되는 반대 의견과 그에 대한 답을 넣었다', d: 0.45,
              sample: '우리 지역은 시내버스 가운데 저상버스 비율이 낮아 휠체어를 쓰는 사람이 버스를 오래 기다린다. 가상 자료에 따르면 우리 지역 비율은 20%로, 가장 높은 지역보다 50%p 낮다. 그래서 학교·병원에 제때 가기 어렵다. 비율이 낮은 노선부터 저상버스를 늘리기를 제안한다. 노선과 정류장을 정할 때는 휠체어를 쓰는 주민과 장애인 단체가 참여하는 의견 모임을 연다. 내년 상반기까지 의견을 모으고 하반기부터 차례로 바꾼다. 비용이 든다는 의견에는 가장 막힌 노선부터 나누어 바꾸자고 답한다.',
              more: { conclude: '좋은 제안서는 자료로 문제를 보이고, 당사자가 계획하는 자리에 함께 있게 해요.' } }),
            RWQ('제안서의 \'당사자 참여 방법\' 부분을 두 문장으로 더 자세히 쓰세요.', '누가, 어떤 자리에서, 언제 계획에 참여할지 두 문장으로 쓰세요.', ['참여할 사람을 썼다', '참여하는 자리(모임·설문 등)를 썼다', '참여 결과를 반영하는 방법을 썼다'], { min: 40, max: 250, sent: [2, 3], d: 0.35 }),
            DONEQ('짝의 제안서를 의회 의원 역할로 읽고, 가장 먼저 물어볼 질문 하나를 말해 주세요.', '짝과 의원 역할로 읽기', '짝과 읽고 질문해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서 개요를 먼저 채우세요.', columns: ['문제', '자료 근거', '당사자 참여', '실행 계획'], cells: [['', '', '', '']] }] },
        notes: '지역 의회와 자료는 가상이다. 특정 정당·정치인·실제 정책 논쟁을 다루지 않는다. 실제로 보낼 때는 교사가 함께 검토한다.',
      }),

      M({
        id: 'wrap.self-reflect', type: 'wrap', title: '대신 결정과 함께 결정 사이',
        method: '자기결정 존중 성찰 글', tool: 'story', minutes: 7,
        levels: { easy: '교사가 \'가상 장면\'·\'존중하려면\' 두 칸을 함께 채우고, 다짐은 말로 나눈다.', base: '가상 장면 → 존중하려면 → 다짐 세 칸에 생각 카드를 놓고 한 줄을 쓴다.', challenge: '짝의 카드와 견주어 다른 점 한 줄을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 마지막은 내 이야기가 아니라 가상 장면으로 생각해요. 누군가를 위한다며 묻지 않고 정해 버린 장면을 하나 고르고, 존중하려면 어떻게 했어야 하는지, 앞으로의 다짐을 이어 봐요." 카드를 놓은 뒤 \'도움이 필요해 보이면 묻지 않고 바로 해 준다\' 카드가 왜 남는지 묻는다. "물어보면 오히려 부담스럽지 않을까요?"라는 말에는 "짧게 \'도와줄까?\'라고 묻고, 괜찮다고 하면 그 뜻을 따르는 것 — 그게 상대의 결정을 존중하는 거예요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '대신 결정과 함께 결정 사이', slots: [{ id: 'scene', label: '가상 장면: ___' }, { id: 'respect', label: '존중하려면 ___' }, { id: 'pledge', label: '나는 앞으로 ___' }], cards: [
              { id: 's1', text: '친구가 원하는지 묻지 않고 짐을 대신 들었다' }, { id: 's2', text: '모둠 역할을 친구 대신 정해 주었다' },
              { id: 'r1', text: '먼저 무엇이 필요한지 묻는다' }, { id: 'r2', text: '친구가 고른 방법대로 돕는다' },
              { id: 'p1', text: '결정 전에 영향받는 사람에게 묻겠다' }, { id: 'p2', text: '회의에 당사자 자리를 먼저 만들겠다' },
              { id: 'trap', text: '도움이 필요해 보이면 묻지 않고 바로 해 준다', why: '묻지 않고 해 주면 상대의 선택을 대신하게 돼요. 짧게라도 먼저 물어요.' }] }, prompt: '세 칸에 내 생각에 가장 가까운 카드를 하나씩 놓으세요.', target: { fill: { scene: ['s1', 's2'], respect: ['r1', 'r2'], pledge: ['p1', 'p2'] } }, difficulty: 0.15 },
            { type: 'short', prompt: '\'나는 앞으로\' 칸의 다짐을 내 말로 한 줄 더 구체적으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '대신 결정과 함께 결정 사이',
          items: [
            { type: 'table', prompt: '세 칸에 내 생각을 한 줄씩 쓰세요(장면은 가상으로).', columns: ['가상 장면', '존중하려면', '나의 다짐'], cells: [['', '', '']] },
            { type: 'short', prompt: '짝의 생각과 견주어 다른 점 하나를 쓰세요.' },
          ],
        },
        notes: '계획의 \'내가 대신 결정한 경험\'은 가상 장면 카드로 바꾸었다 — 학생의 실제 경험이나 친구의 장애를 꺼내지 않는다.',
      }),
      M({
        id: 'wrap.action-time', type: 'wrap', title: '이번 주 실천 시간표',
        method: '실천 시간표', tool: 'clock', minutes: 7,
        levels: { easy: '교사가 실천 하나(편의시설 점검)와 시각을 함께 정해 시계로 나타낸다.', base: '우리 반 약속 시각을 시계로 나타내고, 실천 둘(점검·제안서 다듬기)을 활동지 시간표에 적는다.', challenge: '실천한 뒤 점검할 시각도 정해 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 이번 주 행동으로 옮겨 봐요. 우리 반 약속은 \'수요일 점심시간 12시 30분, 학교 편의시설 한 곳 같이 둘러보기\'로 해 봐요." 시계 바늘로 12시 30분을 나타내게 한다. 실천 목록에서 \'불편한 시설을 사진 찍어 SNS에 올려 망신 주기\'를 고르려는 학생에게 "고칠 곳을 알리는 것과 누군가를 망신 주는 것은 어떻게 다를까요? 학교 담당자에게 알리는 길은 무엇일까요?"라고 묻는다. 12시 30분은 연습용 우리 반 약속이라는 점을 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, prompt: '우리 반 약속: 수요일 점심시간 12시 30분에 학교 편의시설 한 곳을 둘러봐요. 시계 바늘로 12시 30분을 나타내세요.', target: { h: 12, m: 30 }, difficulty: 0.15 },
            { type: 'choice', prompt: '이번 주 실천으로 가장 알맞은 것은?', options: ['불편한 시설을 사진 찍어 SNS에 올려 망신을 준다', '고칠 시설을 학교 담당 선생님이나 학생회에 알리고, 제안서를 다듬는다', '나와 상관없으니 하지 않는다'], answer: 1, difficulty: 0.15, explain: '고칠 곳은 고칠 수 있는 사람에게 알려요. 망신 주기는 고치는 길이 아니에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '이번 주 실천 시간표',
          items: [
            { type: 'table', prompt: '이번 주 실천과 시각을 쓰세요.', columns: ['실천', '요일·시각', '함께할 사람'], cells: [['편의시설 둘러보기', '수요일 12시 30분', ''], ['제안서 다듬기', '', ''], ['캠페인 공유', '', '']] },
            { type: 'short', prompt: '실천한 뒤 점검할 시각과 점검할 것을 쓰세요.' },
          ],
        },
        notes: '12시 30분은 연습용 \'우리 반 약속\'이다. 시설 사진을 찍을 때는 사람이 나오지 않게 하고, 알림은 학교 담당자·학생회로 한다.',
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
