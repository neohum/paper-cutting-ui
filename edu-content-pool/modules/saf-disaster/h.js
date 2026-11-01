/* 창체 안전교육 재난안전 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-disaster 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 재난안전 다섯 항목
 *   (1. 화재의 원인 및 대피·대응요령, 신고, 전파요령 알기 / 2. 화상 대처 요령 알기 / 3. 각종 자연 재난과 안전한 행동 알기 /
 *    4. 폭발 및 붕괴, 테러 위협 유형별 대처 요령 알기 / 5. 각종 재난 유형별 대비 훈련 실시) · 별표 1 참고5(유형을 달리한 대비 훈련).
 * 고 기준: 실제 자료 분석·딜레마 결과 추적·제안서·성찰 글·도상 훈련·자립 연결. 단순 고르기 반복과 초등식 장면은 피한다.
 * 그래프 값은 모두 '예시 자료(실제 통계 아님)'라고 화면에 밝힌다. 가격은 수업용 예시, 훈련 시간 기록은 '우리 반 기록'이다.
 * 인물은 직접 지은 가명(지안·하람·하율 등), 사례는 실명 없는 재구성·가상이다. 피해 경험을 묻지 않는다. 전화번호는 체계도에 있는 112·119만.
 * 주제 12개 × 7~8모듈 = 90모듈(체계도 계획 전부, 분류판은 sortboard 글 카드 모드).
 *
 * 사람 확인: 근거 파일에는 고시 항목 제목뿐이라, 아래 일반 안전 수칙은 공식 안내처에서 확인해야 한다(모듈 id 는 saf-disaster.h. 뒤).
 *  [소방청·국민재난안전포털] fire-analysis.activity.dorm-choice — 배터리 연기는 끄기보다 깨우기·알리기·대피, 플러그를 뽑아도 다시 연기가 날 수 있음,
 *     대피 뒤 다시 들어가지 않음 / 기름 불에 물 금지, 불 끄고 뚜껑 덮기(PAN). fire-analysis.activity.relay-map — 화재 때 승강기 쓰지 않음, 가까운 계단이 막히면 다른 계단.
 *     fire-analysis.activity.drill-run — 코와 입 가리고 몸 낮추기, 신고는 안전한 곳에 나와서. fire-analysis.wrap.drill-review — 119 신고 때 위치·상황을 먼저.
 *     fire-analysis.activity.cause-report — 멀티탭에 열 내는 제품 겹쳐 꽂으면 과부하.
 *  [국민재난안전포털·행정안전부] urban-flood.* — 물 고인 지하차도 진입 금지, 차량 침수 때 차 안이 안전하지 않음·문이 열리면 나와 높은 쪽으로(underpass-choice),
 *     지하 공간은 물이 빨리 참·차 빼러 내려가지 않음, 하천변 접근 금지, 발목 물도 위험(맨홀·물살), 물에 잠긴 전기 설비 가까이 가지 않음(intro.risk-map).
 *  [질병관리청·대한적십자사 응급처치 지침] burn-protocol.* · burn-work.* — 흐르는 시원한 물로 식히기, 연고·치약·된장 등 바르지 않기, 물집 터뜨리지 않고 깨끗이 덮기,
 *     부어오르기 전 반지·시계 빼기, 화학 화상은 묻은 옷 벗기고 흐르는 물로 오래 씻기·약품 이름 알리기, 전기 화상은 전원 먼저 끊고 119,
 *     정도별 판단(붉음=식히고 지켜봄 / 물집=보건실·병원 / 하얗거나 검고 감각 둔함=119·응급실)과 '깊은 화상은 덜 아플 수 있음'(type-match·criteria-write),
 *     눈·목 가까운 부위는 더 조심(intro.body-find, wrap.summary-map).
 *  [행정안전부] alert-system.intro.kind-chart·wrap.summary-map — 재난문자 종류 이름(위급·긴급·안전안내)과 발송 기준. alert-system.activity.class-choice —
 *     흔들릴 때 책상 아래 몸 보호, 멈춘 뒤 계단으로 운동장 대피, 여진 대비 건물 밖 대기. alert-system.activity.shelter-map — 대피 장소는 국민재난안전포털·안전디딤돌 앱에서 확인.
 *  [국민재난안전포털·학교 실험실 안전 매뉴얼] quake-structure.* — 흔들릴 때 시약장에서 떨어져 실험대 아래로, 멈춘 뒤 선생님 지시로 불·가스 정리,
 *     깨진 약품을 직접 치우지 않고 피해 대피, 체육관은 천장 조명·농구대 아래를 피해 몸 낮추기, 강당은 무대 조명·현수막에서 떨어지기(factor-sort·wrap.place-map).
 *  [한국가스안전공사·국민재난안전포털] collapse-gas.activity.gas-choice — 가스 냄새 때 전등·환풍기 등 전기 스위치 건드리지 않기, 문·창 열고 밖으로, 밖에서 119·가스 회사 신고,
 *     누출 건물 앞 비우기·불씨 멀리. collapse-gas.activity.tabletop-map — 붕괴 징후 때 집결지는 건물에서 먼 곳(거리 기준은 공식 안내로), 신고는 건물 밖에서.
 *  [산림청·국민재난안전포털] wildfire.* — 불은 바람을 타고 오르막으로 빨리 번짐, 산 위로 피하지 않기, 탈 것이 적은 공터·논밭으로 대피,
 *     등산로 위치 표지 번호로 신고, 불씨는 물로 완전히 끄고 재는 수거함, 봄철 건조기에 산불이 많다는 말(intro.month-chart 교사 발문 — 실제 통계로 확인).
 *  [질병관리청] heat-health.* — 온열질환 신호(어지럼·메스꺼움·땀·두근거림), 정신이 흐려지면 119, 한파 때 귀·코 감각 둔해짐, 시원한 곳으로 옮기기,
 *     무더위·한파 쉼터는 지자체 안내.
 *  [소방청] independent-fire.* — 경보가 울리면 확인보다 대피, 나오면서 문 닫기, 엘리베이터 쓰지 않기, 연기 찬 복도에서 코와 입 가리고 벽 짚으며 낮게,
 *     감지기 삑 소리는 배터리 부족 신호일 수 있음(제품 설명서), 조리 중 자리 지키기·난로 옆 빨래 금지·멀티탭 이어 꽂기 금지.
 *  [경찰청·국민재난안전포털] terror-crowd.* — 수상한 물건은 만지지 않고 거리 두고 직원에게 알림, 안전한 곳에서 112 신고(112·119 가운데 어디로 먼저인지),
 *     안내에 따라 가까운 다른 비상구, 밀집 때 밀지 않고 외치기·팔로 가슴 앞 공간 지키기·옆으로 비켜서기, 대피 뒤 다시 다가가지 않기.
 *  [국민재난안전포털] family-plan.* — 비상용품 권장 품목(식수·손전등·구급함·라디오·비상식량), 통신 두절 때 만날 곳, 계획 정기 점검.
 *  [안전보건공단·고용노동부·근로복지공단] burn-work.* — 조리 일터 보호구(튀김 장갑·앞치마·토시·보안경), 일하다 다치면 보고·사고 기록, 산업재해 절차.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-disaster', band: '고', topic: `saf-disaster.h.${topic}`, grades }, o, { id: `saf-disaster.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 차례 문항(order): steps = 바른 차례(글 = id). 쉬움 = 앞 k장, traps = 자리에 놓지 않을 함정 카드(기본·도전)
  const ORDERQ = (prompt, steps, { k = 3, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: steps.length, cards: lay(steps, traps) }, opt), target: { order: steps }, difficulty: d, levels: {} };
    if (k < steps.length) it.levels.easy = { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { slots: k, cards: lay(steps.slice(0, k), []) }, target: { order: steps.slice(0, k) } };
    else delete it.levels;
    return Object.assign(it, more);
  };
  // 짝 문항(match): pairs = [[칸 글, 카드 글]…]. 쉬움 = 앞 k쌍, extra = 어느 칸에도 안 맞는 함정 카드
  const MATCHQ = (prompt, pairs, { k = 3, extra = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([s, c]) => [s, c])) });
    const it = { prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p) => p[0]), cards: [...pairs.map((p) => p[1]).reverse(), ...extra] }, opt), target: t(pairs), difficulty: d };
    if (k < pairs.length) { const e = pairs.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `${k}쌍`), toolOptions: { slots: e.map((p) => p[0]), cards: e.map((p) => p[1]).reverse() }, target: t(e) } }; }
    return Object.assign(it, more);
  };
  // 갈림길(dilemma): 나무를 n 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 2번(나무를 둘째 단계에서 자름), 기본 = 나무 전체(3번), 도전 = 나무 전체 + 끝에서 근거 카드 고르기
  const DILQ = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))) });
    const full = depth(scene);
    const it = { prompt, toolOptions: Object.assign({ scene }, opt), target: at(full), difficulty: d, levels: {} };
    if (full > 2) it.levels.easy = { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) };
    it.levels.challenge = { prompt: pfx(prompt, '끝에서 근거 고르기'), toolOptions: { reasons }, target: Object.assign(at(full), { reasons: good }) };
    return Object.assign(it, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기(근거 한 장 이상 + 점검)
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀(starter), 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, sample = null, plus = null, d = 0.4, more = {} } = {}) => {
    const t = (cs) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, sent ? { sentences: sent } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks), difficulty: d, levels: {} };
    if (starter) it.levels.easy = { toolOptions: { starter } };
    if (plus) it.levels.challenge = { prompt: pfx(prompt, '기준 하나 더'), target: t([...checks, plus]) };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 점검표(kitchen checklist): items = [[id, 글, 넣을지]…]. 쉬움 = 앞 k개
  const CHECKQ = (prompt, title, items, { k = 0, d = 0.3, more = {} } = {}) => {
    const mk = (xs) => ({ mode: 'checklist', title, items: xs.map(([id, text]) => ({ id, text })) });
    const it = { prompt, toolOptions: mk(items), target: { checklist: items.filter((x) => x[2]).map((x) => x[0]) }, difficulty: d };
    if (k) { const e = items.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `항목 ${k}개`), toolOptions: mk(e), target: { checklist: e.filter((x) => x[2]).map((x) => x[0]) } } }; }
    return Object.assign(it, more);
  };
  // 그래프 읽기(chart read)
  const READQ = (prompt, type, title, data, question, choices, pick, { d = 0.25, opt = {}, why = null, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ type, mode: 'read', title, data, question, choices }, why ? { why } : {}, opt), target: { pick }, difficulty: d }, more);
  // 예산 고르기(economy budget): items = [[id, 글, 값]…]
  const BUDGETQ = (prompt, budget, items, rule, { d = 0.3, more = {} } = {}) => Object.assign({ prompt, toolOptions: { mode: 'budget', budget, items: items.map(([id, text, price]) => ({ id, text, price })) }, target: { budget: rule }, difficulty: d }, more);
  // 해 보았어요(교구 판에 칸 없이 짝·모둠 활동을 마친 표시만)
  const DONEQ = (prompt, title, label, more = {}) => Object.assign({ prompt, free: true, toolOptions: { title, doneLabel: label } }, more);
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];

  // ======================================================================================================
  // 1. 배터리·전기·조리 화재 원인 분석과 신고·전파 (10학년)
  // ======================================================================================================
  {
    const M = MOD('fire-analysis', [10]);
    const CAUSE = [['전기 기기', 35], ['조리 중 부주의', 30], ['배터리 충전', 15], ['담배꽁초', 12], ['기타', 8]];
    const DORM = { text: '밤 11시 기숙사 방, 책상 밑에서 충전 중인 보조배터리에서 하얀 연기가 오르고 탄 냄새가 난다. 룸메이트 지안이는 자고 있다.', who: '나', motif: 'moon', choices: [
      { id: 'water', text: '컵에 물을 받아 배터리에 붓는다', result: '연기가 더 짙어지고 매캐한 냄새가 방에 찬다.', impact: [{ who: '나', text: '연기를 가까이서 마신다', tone: -1 }], why: '연기가 나는 배터리를 혼자 끄려 하면 대피할 시간을 잃어요.',
        next: { text: '눈이 따갑고 기침이 난다. 지안이는 아직 자고 있다.', choices: [
          { id: 'more', text: '창문을 열고 혼자 더 꺼 본다', result: '연기가 복도 쪽으로 퍼진다.', impact: [{ who: '지안', text: '연기 속에 남아 있다', tone: -1 }], ending: '혼자 끄려는 사이에 깨워야 할 사람이 위험에 남는다.' },
          { id: 'wake', text: '지안이를 깨워 함께 방을 나간다', result: '두 사람이 늦게나마 복도로 나온다.', impact: [{ who: '지안', text: '늦게 깨어 놀란다', tone: 0 }], ending: '처음부터 사람을 깨웠다면 시간을 더 벌 수 있었다.' }] } },
      { id: 'alert', text: '지안이를 깨우고 "불이야" 외치며 함께 방을 나간다', result: '두 사람이 복도로 나오며 방문을 닫는다.', impact: [{ who: '지안', text: '연기를 마시기 전에 나온다', tone: 1 }],
        next: { text: '복도에 나오니 다른 방 학생들은 아직 모르고 잠들어 있다.', choices: [
          { id: 'bell', text: '비상벨을 누르고 사감 선생님께 알린다', result: '경보가 울리고 층 전체가 계단으로 대피를 시작한다.', impact: [{ who: '같은 층 학생들', text: '일찍 알고 대피한다', tone: 1 }],
            next: { text: '1층 집결 장소에서 인원을 세는데 한 방에서 대답이 없다.', choices: [
              { id: 'tell', text: '사감 선생님과 도착한 소방대에 그 방 번호를 알린다', result: '구조대가 그 방으로 바로 올라간다.', impact: [{ who: '남은 학생', text: '빨리 구조된다', tone: 1 }], ending: '알리기·대피·인원 확인을 이어 가면 모두가 빨리 안전해진다.' },
              { id: 'back', text: '혼자 그 방으로 다시 올라간다', result: '계단에 연기가 차서 중간에 길을 잃는다.', impact: [{ who: '나', text: '구조받아야 할 사람이 된다', tone: -1 }], why: '대피한 뒤에는 다시 들어가지 않고 구조대에 알려요.', ending: '다시 들어가면 구조할 사람이 한 명 더 늘어난다.' }] } },
          { id: 'watch', text: '소란 피우기 싫어 방 앞에서 지켜본다', result: '연기가 문틈으로 새어 복도에 퍼진다.', impact: [{ who: '같은 층 학생들', text: '늦게 알게 된다', tone: -1 }], why: '불을 본 사람이 알려야 다른 사람이 대피할 수 있어요.', ending: '알리지 않은 몇 분이 층 전체의 대피 시간을 줄인다.' }] } },
      { id: 'unplug', text: '플러그만 뽑고 연기가 멎는지 지켜본다', result: '연기가 잠시 줄었다가 다시 피어오른다.', impact: [{ who: '지안', text: '여전히 자고 있다', tone: -1 }], why: '전원을 뽑아도 배터리는 다시 연기가 날 수 있어요.', ending: '배터리 연기는 전원을 끊어도 멈춘다는 보장이 없다.' }] };
    const DORM_R = [{ id: 'people', text: '물건보다 사람을 깨우고 대피하는 것이 먼저다' }, { id: 'spread', text: '경보와 알림이 있어야 층 전체가 빨리 대피한다' }, { id: 'small', text: '연기가 조금이면 혼자 처리해도 된다', why: '작은 연기도 몇 분 만에 커질 수 있어요.' }, { id: 'noise', text: '괜히 소란을 피우면 혼날 수 있다', why: '잘못 울린 경보보다 늦은 알림이 훨씬 위험해요.' }];
    const PAN = { text: '기숙사 공용 주방에서 친구가 만두를 굽다가 프라이팬 기름에 불이 붙었다.', who: '친구', choices: [
      { id: 'water', text: '물을 한 컵 부어 끈다', result: '불붙은 기름이 튀며 불길이 크게 솟는다.', impact: [{ who: '친구', text: '불길에 데일 뻔한다', tone: -1 }], why: '기름 불에 물을 부으면 불길이 튀어 올라요.', ending: '기름 불에 물은 불을 키운다.' },
      { id: 'lid', text: '불을 끄고 프라이팬 뚜껑을 덮는다', result: '불길이 뚜껑 아래에서 잦아든다.', impact: [{ who: '친구', text: '다치지 않는다', tone: 1 }],
        next: { text: '불은 꺼졌지만 주방에 연기와 냄새가 남았다.', choices: [
          { id: 'report', text: '사감 선생님께 알리고 창문을 열어 환기한다', result: '선생님이 가스와 후드를 점검한다.', impact: [{ who: '기숙사', text: '남은 위험을 확인한다', tone: 1 }], ending: '불을 끈 뒤에도 알리고 점검해야 끝난다.' },
          { id: 'hide', text: '혼날까 봐 아무에게도 말하지 않는다', result: '탄 기름이 묻은 후드가 그대로 남는다.', impact: [{ who: '다음 사용자', text: '모르는 위험을 쓴다', tone: -1 }], ending: '숨긴 작은 불은 다음 사람의 위험이 된다.' }] } },
      { id: 'carry', text: '프라이팬을 들고 싱크대로 옮긴다', result: '기름이 출렁여 바닥과 손에 튈 뻔한다.', impact: [{ who: '친구', text: '불붙은 기름을 들고 걷는다', tone: -1 }], why: '불붙은 프라이팬을 옮기면 기름이 쏟아질 수 있어요.', ending: '불붙은 것을 옮기는 순간 불이 번질 길이 생긴다.' }] };
    const PAN_R = [{ id: 'oil', text: '기름 불에 물을 부으면 불길이 튀어 오른다' }, { id: 'tell', text: '불을 끈 뒤에도 알리고 점검해야 한다' }, { id: 'fast', text: '무엇이든 빨리 끼얹는 것이 최선이다', why: '무엇을 끼얹느냐에 따라 불이 더 커질 수 있어요.' }];
    const BUILD = { title: '가상 학교 3층 평면', grid: [6, 4], places: [{ name: '우리 교실', icon: 'school', at: [2, 1] }, { name: '과학실', icon: 'dot', at: [4, 1] }, { name: '비상벨', icon: 'dot', at: [3, 2] }, { name: '소화기', icon: 'fire', at: [1, 2] }, { name: '중앙 계단', icon: 'dot', at: [3, 0] }, { name: '서쪽 계단', icon: 'dot', at: [0, 3] }, { name: '교무실', icon: 'office', at: [5, 3] }] };

    MODS.push(
      M({
        id: 'intro.cause-chart', type: 'intro', title: '화재 원인 원그래프',
        method: '예시 원인 원그래프 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '원그래프 조각 가운데 큰 셋(전기 기기·조리·배터리)만 함께 읽는다.', base: '조각 다섯을 모두 읽고 생활 속 원인 셋의 비중을 견준다.', challenge: '교사가 다른 연도의 예시 그래프를 하나 더 보여 주고 두 그래프에서 달라진 조각을 해석하게 한다.' },
        intro: {
          teacher: '"이 원그래프는 실제 통계가 아니라 수업을 위해 만든 예시 자료예요. 가장 큰 조각은 무엇인가요?" 시연 단추로 \'전기 기기\' 조각이 골라지는 모습을 보여 준다. "불은 담배꽁초 때문에 제일 많이 나죠"라는 말이 나오면 "우리가 매일 쓰는 충전기·멀티탭·가스레인지는 어느 조각에 들어갈까요?"라고 되묻는다. 원인 이름보다 그 원인이 우리 기숙사·집 어디에 있는지 떠올리게 하고, 오늘은 사례의 원인이 어떻게 이어져 불이 되는지 분석한다고 밝힌다. 실제 화재 통계는 소방청 국가화재정보시스템 자료로 함께 확인해 보자고 덧붙인다.',
          student: '예시 원그래프에서 가장 큰 조각을 찾고, 전기·조리·배터리 원인이 내 생활 어디에 있는지 떠올려 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '화재 원인(예시 자료, 실제 통계 아님)', unit: '%', data: CAUSE, question: '가장 큰 조각은?', choices: CAUSE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart standing on a desk, its slices shaped like a power strip, a frying pan and a power bank, a small paper flame peeking from behind', banner: '불은 어디서 시작될까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 수업용 예시다. 실제 화재 원인 통계는 소방청 국가화재정보시스템의 최신 자료로 교사가 따로 제시한다.',
      }),
      M({
        id: 'intro.case-line', type: 'intro', title: '충전 화재 사례 시간축',
        method: '충전 화재 사례 시간축', tool: 'timeline', minutes: 7,
        levels: { easy: '앞의 카드 3장(침대 위 충전·밤새 꽂아 둠·뜨거워짐)만 함께 놓는다.', base: '카드 5장을 시간 차례로 놓고 끊을 수 있던 지점 하나를 말한다.', challenge: '카드 5장을 놓은 뒤 끊을 수 있던 지점 두 곳을 골라 무엇을 했어야 하는지 말한다.' },
        intro: {
          teacher: '"가상 사례예요. 한 학생이 보조배터리를 침대 위에서 충전했고, 몇 시간 뒤 이불에 불이 옮았어요. 어디서 멈출 수 있었을까요?" 시연 단추로 카드가 시간 차례로 놓이는 모습을 보여 준다. "배터리가 불량이라 운이 나빴던 거예요"라는 말이 나오면 "불량이었다 해도, 이불 위가 아니라 책상 위였다면 다섯째 카드까지 갔을까요?"라고 되묻는다. 사고는 한 원인이 아니라 여러 고리가 이어져 커진다는 점을 짚는다.',
          student: '충전 화재 사례 카드를 시간 차례로 놓고, 어느 카드에서 멈출 수 있었는지 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: ['이불로 불이 옮음', '배터리가 뜨거워지고 부풂', '보조배터리를 침대 위에서 충전', '연기와 탄 냄새', '다 차도 밤새 꽂아 둠'] }, sequence: [{ order: ['보조배터리를 침대 위에서 충전', '다 차도 밤새 꽂아 둠', '배터리가 뜨거워지고 부풂', '연기와 탄 냄새', '이불로 불이 옮음'] }] },
          art: { draw: 'a paper timeline ribbon running across a dormitory bed, five paper cards pinned along it from a plugged-in power bank to a small flame on a blanket, a pair of paper scissors ready to cut the ribbon', banner: '어디서 끊을 수 있었을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '가상 사례다. 실제 사고·학교를 특정하지 않는다.',
      }),

      M({
        id: 'activity.dorm-choice', type: 'activity', title: '보조배터리 연기',
        method: '기숙사 보조배터리 연기 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(방에서·복도에서)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(집결 장소의 인원 확인까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 끝 장면에서 내 선택의 근거 카드를 골라 함정 근거를 걸러 낸다.' },
        activity: {
          title: '보조배터리 연기', tool: 'dilemma',
          teacher: '"밤 11시, 기숙사 방에서 충전 중인 보조배터리에서 연기가 나요. 여러분 손에 물컵이 있다면?" 선택마다 결과 장면을 소리 내어 읽게 한다. \'물을 붓는다\'를 고른 학생에게 "그 사이 자고 있는 지안이는 어디에 있나요?"라고 묻는다. "경보는 울려도 일단 내가 확인부터 한다"는 학생에게는 복도 장면에서 다른 방 학생들이 언제 알게 되는지 다시 보게 한다. 불을 본 사람의 일은 끄기보다 깨우기·알리기·나가기라는 점을 짚는다.',
          task: '기숙사 화재 갈림길을 따라가며 대응·전파·대피를 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('보조배터리 연기를 본 순간부터 사람을 깨우고 알리고 대피하는 길을 고르세요.', DORM, [['alert', 'bell', 'tell']], DORM_R, ['people', 'spread'], { d: 0.4 }),
            EXPLOREQ('고르지 않은 길(물 붓기·지켜보기)도 끝까지 가 보고 결과를 견주세요.', DORM, DORM_R, ['다른 길에서 누가 위험에 남는지 확인했다', '알림이 늦어진 길의 결과를 견주었다'], { d: 0.35 }),
            DILQ('공용 주방 프라이팬 기름에 불이 붙었을 때 안전한 길을 고르세요.', PAN, [['lid', 'report']], PAN_R, ['oil', 'tell'], { d: 0.35, more: { conclude: '배터리 연기는 깨우고 알리고 나가기, 기름 불은 물 대신 불 끄고 덮기 — 불의 종류마다 첫 행동이 달라요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"경보가 울려도 확인부터 한다"는 생각이 위험한 까닭을 갈림길 결과를 근거로 한 문장으로 쓰세요.' }] },
        notes: '가상 상황이다. 리튬 배터리 연기·기름 화재의 대응 수칙은 소방청·국민재난안전포털 안내로 교사가 확인해 덧붙인다.',
      }),
      M({
        id: 'activity.cause-report', type: 'activity', title: '원인 분석 보고서',
        method: '사례 원인 분석 보고서', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 원인·연결고리·예방을 쓴다.', base: '세 칸을 쓰고 칸마다 기준표 세 항목을 스스로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 예방 칸에 개인 습관이 아닌 제도적 예방(기숙사 규칙·점검)을 넣는다.' },
        activity: {
          title: '원인 분석 보고서', tool: 'rubric-writing',
          teacher: '"가상 사례예요. 원룸에서 멀티탭 하나에 전기난로·전기포트·휴대전화 충전기를 함께 꽂아 쓰다가 멀티탭이 녹으며 불이 났어요. 원인은 하나일까요?" 직접 원인(과부하)과 그것을 키운 고리(겹쳐 꽂기 습관·먼지·이불 가까이 둠)를 나눠 쓰게 한다. "멀티탭이 싸구려였다"로 끝내는 학생에게 "좋은 멀티탭이었다면 난로·포트를 함께 꽂아도 괜찮았을까요?"라고 묻는다. 보고서는 탓할 사람을 찾는 글이 아니라 다음 불을 막는 글이라는 점을 짚는다.',
          task: '가상 화재 사례의 원인·연결고리·예방을 칸마다 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('사례의 직접 원인을 2~3문장으로 쓰세요.', '가상 사례: 원룸에서 멀티탭 하나에 전기난로·전기포트·충전기를 함께 꽂아 쓰다 멀티탭이 녹으며 불이 났다. 직접 원인을 쓰세요.', ['사례에 나온 사실만 썼다', '불이 시작된 물건과 까닭을 함께 썼다', '사람 이름 대신 거주자처럼 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['멀티탭', '과부하']], starter: '불은 ~에서 시작되었다. 왜냐하면 ~', plus: '열을 내는 제품이 무엇인지 짚었다', d: 0.35 }),
            RWQ('작은 원인이 불로 이어진 연결고리를 2~3문장으로 쓰세요.', '겹쳐 꽂기·오래 켜 두기·주변 물건 같은 고리가 어떻게 이어져 불이 커졌는지 쓰세요.', ['원인 둘 이상을 이어서 썼다', '앞 일이 뒤 일을 어떻게 키웠는지 썼다', '짐작은 짐작이라고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['그래서', '때문에', '이어져']], starter: '처음에는 ~했고, 그래서 ~', plus: '고리 하나를 끊으면 어떻게 달라졌을지 썼다', d: 0.4 }),
            RWQ('같은 불을 막을 예방 방법을 2~3문장으로 쓰세요.', '같은 불이 다시 나지 않도록 거주자와 건물에서 할 수 있는 예방 방법을 쓰세요.', ['원인과 이어진 예방이다', '누가·언제 할지 구체적이다', '실제로 할 수 있는 방법이다'], { min: 40, max: 300, sent: [2, 3], must: [['나누어', '따로', '점검', '뽑']], starter: '앞으로는 열을 내는 제품을 ~', plus: '규칙·점검 같은 제도적 예방을 하나 넣었다', d: 0.4, more: { conclude: '원인 분석은 탓할 사람이 아니라 끊을 고리를 찾는 일이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례의 원인 고리를 정리하세요.', columns: ['고리', '내용', '끊는 방법'], cells: [['직접 원인', '', ''], ['키운 습관', '', ''], ['주변 조건', '', '']] }] },
        notes: '가상 사례다. 실제 사고 피해자를 다루지 않는다.',
      }),
      M({
        id: 'activity.relay-map', type: 'activity', title: '경보·전파 지도',
        method: '건물 지도 경보·전파·대피 경로', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 그 칸의 장소 이름이 바로 보인다.', base: '장소 이름을 보고 경보·대피·전파할 곳에 차례로 핀을 꽂는다.', challenge: '계단이 연기로 막힌 문항에서 다른 계단에 핀을 꽂고 그 까닭 보기까지 고른다.' },
        activity: {
          title: '경보·전파 지도', tool: 'map',
          teacher: '"가상 학교 3층 평면이에요. 과학실에서 연기가 나요. 우리 교실에서 무엇부터 할까요?" 문항마다 핀을 꽂기 전에 "지금 내가 맡은 일은 알리기인가요, 나가기인가요?"라고 묻는다. 소화기에 먼저 핀을 꽂는 학생에게 "불을 끄는 동안 3층 다른 반은 연기를 알까요?"라고 묻는다. 가까운 계단이 막히면 다른 계단으로 간다는 것, 승강기는 대피에 쓰지 않는다는 것을 마지막 문항에서 짚는다.',
          task: '가상 학교 평면에서 경보·대피·전파할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '과학실에서 연기가 나는 것을 봤어요. 층 전체에 알리기 위해 가장 먼저 누를 곳에 핀을 꽂으세요.', toolOptions: BUILD, target: { place: '비상벨' }, difficulty: 0.2 },
            { prompt: '경보가 울렸어요. 우리 교실에서 가장 가까운 대피 계단에 핀을 꽂으세요.', toolOptions: BUILD, target: { place: '중앙 계단' }, difficulty: 0.25 },
            { prompt: '대피하면서 층 상황을 선생님들께 전파하려면 어디로 알려야 할까요? 그곳에 핀을 꽂으세요.', toolOptions: BUILD, target: { place: '교무실' }, difficulty: 0.3 },
            { prompt: '중앙 계단에 연기가 가득 찼어요. 대신 갈 대피 계단에 핀을 꽂으세요.', toolOptions: BUILD, target: { place: '서쪽 계단' }, difficulty: 0.35,
              levels: { challenge: { prompt: '중앙 계단에 연기가 가득 찼어요. 대신 갈 대피 계단에 핀을 꽂고 그 까닭을 고르세요(까닭 고르기).', toolOptions: { ask: { q: '그 계단으로 가는 까닭은?', choices: ['연기가 없는 다른 길이라서', '승강기가 더 빨라서', '교실에서 기다리면 되어서'], why: ['', '불이 났을 때 승강기는 멈추거나 연기가 찰 수 있어요.', '연기가 오기 전에 다른 길로 나가야 해요.'] } }, target: { place: '서쪽 계단', pick: 0 } } },
              conclude: '알리기(비상벨) → 가까운 계단으로 대피 → 막히면 다른 계단 — 길은 늘 두 갈래로 알아 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교 우리 층의 대피 경로를 두 갈래로 쓰세요.', columns: ['', '가는 길', '막혔을 때'], cells: [['첫째 길', '', ''], ['둘째 길', '', '']] }] },
        notes: '지도는 가상 평면이다. 우리 학교 대피 경로도와 비상벨 위치는 교사가 실제 도면으로 함께 확인한다.',
      }),
      M({
        id: 'activity.drill-run', type: 'activity', title: '역할 나눈 대피 훈련',
        method: '역할 나눈 화재 대피 훈련', tool: 'timer', minutes: 16,
        levels: { easy: '대피 순서 카드 3장만 차례로 놓고 훈련한다.', base: '순서 카드 4장을 놓고 안전 점검을 확인한 뒤, 알리기·신고·인원 확인 역할 카드를 차례로 놓는다.', challenge: '역할을 서로 바꾸어 다시 놓고, 훈련에 걸린 시간을 재어 적는다.' },
        activity: {
          title: '역할 나눈 대피 훈련', tool: 'timer',
          teacher: '"오늘은 모둠마다 알리기·신고·인원 확인 역할을 나눠 실제로 걸어 봐요. 훈련은 뛰는 게 아니라 순서를 몸에 익히는 시간이에요." 순서 카드와 안전 점검을 먼저 끝낸 모둠만 출발하게 한다. "훈련은 형식이라 대충 걸어도 된다"는 학생에게 "실제 연기 속에서는 생각할 시간이 없어요. 지금 몸에 익힌 순서가 그때 나와요"라고 말한다. 신고는 연기가 없는 안전한 곳에 나와서 한다는 점을 역할 카드에서 짚는다.',
          task: '대피 순서와 역할 카드를 맞추고 안전 점검을 한 뒤 모둠과 훈련해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '화재 경보가 울렸을 때 대피 순서 카드를 놓고, 훈련 전 안전 점검을 모두 확인하세요.', toolOptions: { title: '화재 대피 순서', cards: ['운동장에서 인원 확인', '코와 입 가리고 몸 낮추기', '비상벨 누르고 "불이야" 알리기', '계단으로 걸어서 대피'], safety: ['훈련 길에 넘어질 물건이 없다', '뛰지 않고 걷기로 약속했다', '몸이 불편한 친구를 도울 사람을 정했다'] }, target: { order: ['비상벨 누르고 "불이야" 알리기', '코와 입 가리고 몸 낮추기', '계단으로 걸어서 대피', '운동장에서 인원 확인'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '화재 대피 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['계단으로 걸어서 대피', '비상벨 누르고 "불이야" 알리기', '코와 입 가리고 몸 낮추기'], safety: [] }, target: { order: ['비상벨 누르고 "불이야" 알리기', '코와 입 가리고 몸 낮추기', '계단으로 걸어서 대피'] } } } },
            { prompt: '모둠 역할이 일하는 차례로 역할 카드를 놓으세요.', toolOptions: { title: '모둠 역할', cards: ['확인 담당: 인원을 세어 선생님께 보고', '알리기 담당: 비상벨과 외치기', '신고 담당: 안전한 곳에 나와 119 신고'] }, target: { order: ['알리기 담당: 비상벨과 외치기', '신고 담당: 안전한 곳에 나와 119 신고', '확인 담당: 인원을 세어 선생님께 보고'] }, difficulty: 0.3,
              levels: { challenge: { prompt: '역할을 바꾸어 다시 훈련해요. 역할 카드를 차례로 놓고, 훈련에 걸린 시간을 재어 적으세요(시간 기록).', toolOptions: { fields: [{ label: '대피에 걸린 시간', unit: '초', step: 1 }], stopwatch: true }, target: { order: ['알리기 담당: 비상벨과 외치기', '신고 담당: 안전한 곳에 나와 119 신고', '확인 담당: 인원을 세어 선생님께 보고'], records: true } } } },
            DONEQ('정한 순서와 역할대로 교실에서 계단까지 걸어서 훈련하고 해 보았어요를 누르세요.', '우리 모둠 화재 대피 훈련', '모둠과 함께 훈련해 보았어요', { conclude: '알리기 → 낮은 자세로 계단 대피 → 안전한 곳에서 신고 → 인원 확인. 역할을 나누면 빠뜨리는 일이 줄어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '훈련에서 맡은 역할과 한 일을 쓰세요.', columns: ['역할', '맡은 사람(모둠 안 번호)', '한 일'], cells: [['알리기', '', ''], ['신고', '', ''], ['인원 확인', '', '']] }] },
        notes: '실제로 걷는 훈련은 학교 재난 대비 훈련 계획에 맞춰 교사 인솔 아래 한다. 비상벨은 실제로 누르지 않고 위치만 확인한다. 기록한 시간은 우리 반 기록일 뿐 기준 시간이 아니다.',
      }),

      M({
        id: 'wrap.budget', type: 'wrap', title: '학급 화재 안전용품 예산',
        method: '학급 예산으로 화재 안전용품 고르기', tool: 'economy', minutes: 10,
        levels: { easy: '교사가 물품 넷(소화기·감지기·향초·장식 조명)만 짚어 주며 함께 고른다.', base: '물품 여섯 가운데 예산 막대 안에서 고르고 고른 근거를 말한다.', challenge: '꼭 넣을 것 둘(소화기·감지기)을 먼저 정한 까닭을 말하고 남은 예산의 쓰임을 견준다.' },
        wrap: {
          teacher: '"학급 예산 5만 원으로 우리 반 화재 안전용품을 산다면 무엇부터 넣을까요? 가격은 수업용 예시예요." 고른 뒤 두세 명에게 고른 근거를 듣는다. 장식 조명이나 향초를 넣는 학생에게 "그 물건은 불을 막나요, 불의 원인이 되나요?"라고 묻는다. 출구 2번에서 \'기름 불은 물로 끈다\'를 고르는 학생에게 프라이팬 갈림길 장면을 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'economy', options: { mode: 'budget', budget: 50000, items: [{ id: 'ext', text: '분말 소화기', price: 25000 }, { id: 'alarm', text: '화재 감지기', price: 10000 }, { id: 'light', text: '비상용 손전등', price: 8000 }, { id: 'tap', text: '안전 인증 멀티탭', price: 6000 }, { id: 'candle', text: '향초 세트', price: 12000 }, { id: 'deco', text: '장식용 전구 줄', price: 15000 }] }, prompt: '예산 50,000원. 소화기와 화재 감지기는 꼭 넣고, 불의 원인이 될 물건은 빼고 고르세요.', target: { budget: { must: ['ext', 'alarm'], not: ['candle', 'deco'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['기름 불은 물로 끈다', '경보가 울리면 확인보다 대피가 먼저다', '충전기·멀티탭은 안전 인증 제품을 쓴다'], answer: 0, difficulty: 0.2, explain: '기름 불에 물을 부으면 불길이 튀어 올라요. 불을 끄고 뚜껑을 덮어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '화재 원인과 대응',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '불을 본 사람이 가장 먼저 할 일은 끄기보다 사람을 깨우고 ___ 일이다.', answer: '알리는(전파하는)' },
            { type: 'short', prompt: '예산 안에서 꼭 넣은 물건 둘과 그 근거를 쓰세요.' },
          ],
        },
        notes: '가격은 수업용 예시다. 실제 소화기 비치·점검은 학교 시설 담당과 확인한다.',
      }),
      M({
        id: 'wrap.drill-review', type: 'wrap', title: '훈련 평가 점검',
        method: '훈련 평가 점검표', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 앞의 세 항목(알리기·낮은 자세·계단)만 함께 읽고 표시하게 한다.', base: '다섯 항목을 스스로 표시한다.', challenge: '다섯 항목을 표시한 뒤 표시하지 못한 항목 하나로 개선점을 쓴다.' },
        wrap: {
          teacher: '"방금 훈련에서 우리 모둠이 실제로 한 것만 표시해 봐요. 다 못 했어도 괜찮아요. 표시 못 한 칸이 다음 훈련의 숙제예요." 표시한 뒤 개선점을 한 줄로 쓰게 한다. "다 했다"고 모두 표시한 모둠에게 "인원 확인에서 몇 명을 셌나요? 숫자로 말할 수 있나요?"라고 구체적으로 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '우리 모둠 훈련 평가', items: [{ id: 'alert', text: '알리기 담당이 크게 외쳤다' }, { id: 'low', text: '코와 입을 가리고 몸을 낮췄다' }, { id: 'stair', text: '승강기 대신 계단으로 걸었다' }, { id: 'report', text: '신고 담당이 할 말을 정했다' }, { id: 'count', text: '인원을 세어 보고했다' }] }, prompt: '훈련에서 우리 모둠이 실제로 한 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '119에 신고할 때 가장 먼저 말할 것은?', options: ['내 이름과 학년', '불이 난 곳의 주소·위치와 무슨 일인지', '불이 난 까닭'], answer: 1, difficulty: 0.15, explain: '어디서 무슨 일이 났는지를 먼저 말해야 출동할 수 있어요.' },
            { type: 'short', prompt: '다음 훈련에서 고칠 점 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '화재 대피 훈련 평가',
          items: [
            { type: 'check', prompt: '훈련에서 한 것에 표시하세요.', options: ['알리기', '낮은 자세', '계단 대피', '신고 준비', '인원 확인'] },
            { type: 'short', prompt: '잘된 점 하나와 고칠 점 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 2. 극한 호우와 도시 침수 위험 분석 (10학년)
  // ======================================================================================================
  {
    const M = MOD('urban-flood', [10]);
    const RAIN = [['13시', 5], ['14시', 8], ['15시', 12], ['16시', 45], ['17시', 60], ['18시', 20]];
    const CAR = { text: '비가 거세게 쏟아지는 저녁, 가족 차가 물이 고인 지하차도 앞에 멈췄다. 운전하는 삼촌이 "이 정도는 지나갈 수 있겠지?" 한다.', who: '삼촌', choices: [
      { id: 'go', text: '"빨리 지나가요" 하고 그대로 들어간다', result: '지하차도 가운데에서 물이 바퀴 위까지 차오르고 차가 멈춘다.', impact: [{ who: '가족', text: '물에 갇힌다', tone: -1 }], why: '물이 고인 지하차도는 몇 분 만에 물이 깊어질 수 있어요.',
        next: { text: '차 안으로 물이 스며들기 시작한다.', choices: [
          { id: 'stay', text: '차 안이 안전하니 구조를 기다린다', result: '물이 계속 차올라 문이 잘 열리지 않는다.', impact: [{ who: '가족', text: '빠져나오기 더 어려워진다', tone: -1 }], ending: '물이 차오르는 차 안은 안전한 곳이 아니다.' },
          { id: 'out', text: '문이 열릴 때 바로 나와 높은 쪽 출구로 걸어 나간다', result: '허리까지 찬 물살을 겨우 헤치고 나온다.', impact: [{ who: '가족', text: '빠져나오지만 크게 놀란다', tone: 0 }], ending: '들어가지 않았다면 겪지 않았을 위험이다.' }] } },
      { id: 'stop', text: '"들어가지 말아요, 물이 금방 불어나요"라고 말린다', result: '삼촌이 차를 멈추고 망설인다.', impact: [{ who: '가족', text: '진입 전에 멈춘다', tone: 1 }],
        next: { text: '삼촌이 "돌아가면 한참 더 걸리는데…"라고 한다.', choices: [
          { id: 'reason', text: '재난문자와 침수 소식을 보여 주며 돌아가자고 한다', result: '삼촌이 차를 돌려 다른 길을 찾는다.', impact: [{ who: '가족', text: '위험한 길을 피한다', tone: 1 }],
            next: { text: '돌아가는 길, 하천 옆 도로에 물이 넘치기 시작한다.', choices: [
              { id: 'high', text: '하천에서 먼 높은 길로 돌아가고 문자를 다시 확인한다', result: '시간은 걸리지만 물이 없는 길로 집에 닿는다.', impact: [{ who: '가족', text: '안전하게 도착한다', tone: 1 }], ending: '지하차도도 하천변도 피하고 높은 길을 고르면 늦어도 안전하다.' },
              { id: 'river', text: '가까우니 하천 옆 도로로 빨리 지나간다', result: '바퀴가 물에 잠기며 차가 미끄러진다.', impact: [{ who: '가족', text: '다시 위험해진다', tone: -1 }], why: '호우 때 하천변은 물이 갑자기 불어나요.', ending: '지하차도를 피하고도 하천변으로 가면 위험은 그대로다.' }] } },
          { id: 'quiet', text: '괜히 말했나 싶어 "그럼 가요"라고 한다', result: '차가 지하차도로 들어간다.', impact: [{ who: '가족', text: '다시 위험한 길에 든다', tone: -1 }], why: '걱정을 말했다면 근거를 들어 끝까지 말려요.', ending: '근거 없이 꺼낸 걱정은 쉽게 꺾인다.' }] } },
      { id: 'wait', text: '지하차도 입구 옆에 차를 세우고 물이 빠지길 기다린다', result: '물이 입구까지 넘쳐 차 바퀴가 잠긴다.', impact: [{ who: '가족', text: '낮은 곳에 머문다', tone: -1 }], why: '지하차도 입구는 낮은 곳이라 머물러도 위험해요.', ending: '낮은 곳에서 기다리는 것도 들어가는 것만큼 위험하다.' }] };
    const CAR_R = [{ id: 'fast', text: '고인 물은 몇 분 만에 깊어질 수 있다' }, { id: 'high', text: '침수 때는 낮은 곳을 피하고 높은 곳으로 간다' }, { id: 'ankle', text: '물이 바퀴 아래면 지나가도 된다', why: '보이는 물높이보다 물살과 불어나는 속도가 위험해요.' }, { id: 'car', text: '차 안에 있으면 물이 들어와도 안전하다', why: '물이 차오르면 문이 열리지 않을 수 있어요.' }];
    const PARK = { text: '아파트 방송이 나온다. "지하 주차장 침수가 우려됩니다." 엄마가 "차 빼러 내려가 볼까?" 한다.', who: '엄마', choices: [
      { id: 'down', text: '함께 지하 주차장으로 내려간다', result: '계단 아래로 물이 빠르게 흘러든다.', impact: [{ who: '가족', text: '물이 차는 지하에 들어간다', tone: -1 }], why: '지하는 물이 한꺼번에 흘러들어 빨리 차요.', ending: '지하는 물이 늦게 차는 곳이 아니라 가장 먼저 차는 곳이다.' },
      { id: 'stay', text: '"지하는 들어가지 말아요"라고 말리고 위층에 머문다', result: '엄마가 관리사무소에 상황을 묻는다.', impact: [{ who: '가족', text: '지하에 들어가지 않는다', tone: 1 }],
        next: { text: '관리사무소가 "주민은 지하에 들어가지 마세요"라고 안내한다.', choices: [
          { id: 'share', text: '이웃 단체방에 공식 안내 그대로 전한다', result: '이웃들도 지하로 내려가지 않는다.', impact: [{ who: '이웃', text: '같은 위험을 피한다', tone: 1 }], ending: '확인된 안내를 그대로 전하면 이웃도 지킨다.' },
          { id: 'rumor', text: '"벌써 1층까지 잠겼대"라고 들은 말을 보탠다', result: '이웃들이 놀라 계단으로 몰린다.', impact: [{ who: '이웃', text: '혼란이 커진다', tone: -1 }], ending: '확인 안 된 말은 대피를 돕지 않고 혼란을 키운다.' }] } }] };
    const PARK_R = [{ id: 'under', text: '지하는 물이 흘러들어 빨리 찬다' }, { id: 'official', text: '공식 안내를 확인하고 그대로 전한다' }, { id: 'car', text: '차를 지키는 것이 먼저다', why: '차는 다시 살 수 있지만 사람은 아니에요.' }];
    const CITY = { title: '가상 도시 칸 지도', mode: 'terrain', grid: [6, 4], heights: [[2, 1, 1, 1, 2, 3], [1, 1, 0, 0, 1, 2], [1, 0, 0, 0, 1, 2], [0, 0, 0, 0, 0, 1]], rivers: [[[0, 3], [1, 3], [2, 3], [3, 3], [4, 3]]], places: [{ name: '우리 집', icon: 'house', at: [1, 1] }, { name: '지하 주차장', icon: 'dot', at: [2, 2] }, { name: '지하차도', icon: 'bridge', at: [3, 1] }, { name: '하천 산책로', icon: 'park', at: [3, 3] }, { name: '언덕 위 학교', icon: 'school', at: [5, 0] }, { name: '주민센터', icon: 'office', at: [0, 0] }] };

    MODS.push(
      M({
        id: 'intro.rain-chart', type: 'intro', title: '시간별 강수 그래프',
        method: '예시 강수 꺾은선 해석', tool: 'chart', minutes: 7,
        levels: { easy: '꺾은선의 가장 높은 점(비가 가장 많이 온 때)만 함께 찾는다.', base: '선이 가장 가파르게 오른 구간을 찾고, 그때 지하 공간에 무슨 일이 생길지 추론한다.', challenge: '교사가 다른 지역의 예시 꺾은선을 하나 더 보여 주고 두 지역 가운데 더 위험한 곳을 근거로 고르게 한다.' },
        intro: {
          teacher: '"예시 자료예요. 실제 관측값이 아니라 극한 호우가 어떤 모양인지 보여 주려고 만든 선이에요. 언제 비가 갑자기 늘었나요?" 시연 단추로 가장 높은 점이 골라지는 모습을 보여 준 뒤 15시에서 16시로 가는 선의 기울기를 손으로 따라 보게 한다. "비가 많이 와도 지하는 물이 늦게 차잖아요"라는 말이 나오면 "한 시간에 갑자기 몇 배로 쏟아진 비는 어디로 흘러갈까요? 낮은 곳일까요, 높은 곳일까요?"라고 되묻는다. 오늘은 지하·지하차도·하천변이 왜 먼저 위험해지는지 분석한다고 밝힌다.',
          student: '예시 꺾은선에서 비가 가장 많이 온 때와 갑자기 늘어난 구간을 찾고, 그때 지하 공간에 생길 일을 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '시간별 강수량(예시 자료, 실제 관측 아님)', unit: 'mm', xLabel: '시각', yLabel: '강수량', data: RAIN, question: '비가 가장 많이 온 때는?', choices: RAIN.map((x) => x[0]) }, sequence: [{ pick: 4 }] },
          art: { draw: 'a paper city street under heavy paper rain, a line graph made of paper strips rising sharply above the rooftops, water flowing down stairs into an underground entrance', banner: '비가 갑자기 쏟아지면?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 예시다. 실제 호우 특보 기준과 관측 자료는 기상청 자료로 교사가 따로 보여 준다.',
      }),
      M({
        id: 'intro.risk-map', type: 'intro', title: '도시 침수 위험 연상',
        method: '도시 침수 위험 연상 지도', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 셋(지하·지하차도·하천변)에 위험 카드를 함께 단다.', base: '전기 가지까지 넷에 위험 카드를 단다.', challenge: '가지 넷에 카드를 단 뒤 가지마다 그런 위험이 생기는 원인을 말로 덧붙인다.' },
        intro: {
          teacher: '"\'도시 침수\' 하면 어디가 떠오르나요? 우리 동네에서 물이 먼저 찰 곳은 어디일까요?" 시연 단추로 카드가 네 가지에 붙는 모습을 보여 준다. "물이 발목 정도면 걸어가도 돼요"라는 말이 나오면 "흙탕물이라 맨홀이 열린 곳이 보이지 않는다면요? 물살이 세다면요?"라고 되묻는다. 전기 가지에서는 물에 잠긴 전기 설비 가까이 가지 않는다는 점을 짚는다.',
          student: '"도시 침수"에 지하·지하차도·하천변·전기 가지를 달고, 어떤 위험이 있는지 카드를 붙여 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '도시 침수', slots: ['지하', '지하차도', '하천변', '전기'], cards: ['계단으로 물이 한꺼번에 흘러듦', '차가 물속에서 멈춤', '물이 갑자기 불어남', '물에 잠긴 전선·변압기', '문이 수압에 안 열림', '산책로가 물에 잠김'] }, sequence: [{ sort: { 지하: ['계단으로 물이 한꺼번에 흘러듦', '문이 수압에 안 열림'], 지하차도: ['차가 물속에서 멈춤'], 하천변: ['물이 갑자기 불어남', '산책로가 물에 잠김'], 전기: ['물에 잠긴 전선·변압기'] } }] },
          art: { draw: 'a paper mind map with a flooded city block in the centre and four paper branches leading to an underground stair, an underpass, a riverside path and a utility pole', banner: '물은 어디부터 찰까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.underpass-choice', type: 'activity', title: '지하차도 앞 갈림길',
        method: '지하차도 앞 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(지하차도 앞·삼촌의 망설임)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(돌아가는 길의 하천 옆 도로까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 삼촌을 설득할 근거 카드를 골라 함정 근거를 걸러 낸다.' },
        activity: {
          title: '지하차도 앞 갈림길', tool: 'dilemma',
          teacher: '"가족 차가 물 고인 지하차도 앞에 섰어요. 운전하는 어른이 \'지나갈 수 있겠지?\' 하면 여러분은 뭐라고 말할까요?" 선택마다 결과를 소리 내어 읽게 한다. \'물이 바퀴 아래니 괜찮다\'고 말하는 학생에게 "고인 물은 우리가 보는 동안에도 불어날까요?"라고 묻는다. 어른을 말리는 일이 무례가 아니라 가족을 지키는 말이 될 수 있다는 점, 설득에는 근거(재난문자·침수 소식)가 힘이 된다는 점을 짚는다.',
          task: '지하차도 앞 갈림길을 따라가며 말리기·돌아가기를 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('물 고인 지하차도 앞에서 가족을 지키는 길을 끝까지 고르세요.', CAR, [['stop', 'reason', 'high']], CAR_R, ['fast', 'high'], { d: 0.4 }),
            EXPLOREQ('지하차도로 들어간 길도 끝까지 가 보고, 말린 길과 결과를 견주세요.', CAR, CAR_R, ['들어간 길의 끝 장면을 확인했다', '두 길에서 가족이 받은 영향을 견주었다'], { d: 0.35 }),
            DILQ('지하 주차장 침수 방송이 나왔을 때 알맞은 길을 고르세요.', PARK, [['stay', 'share']], PARK_R, ['under', 'official'], { d: 0.35, more: { conclude: '물 고인 지하차도·지하 공간·하천변은 들어가지 않고, 높은 곳으로 피하며 확인된 안내를 전해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '지하차도에 들어가려는 어른을 설득할 말을 근거 하나를 넣어 한두 문장으로 쓰세요.' }] },
        notes: '가상 상황이다. 차량 침수 때 탈출 요령과 지하 공간 행동 요령은 행정안전부 국민재난안전포털 안내로 교사가 확인해 덧붙인다.',
      }),
      M({
        id: 'activity.city-map', type: 'activity', title: '도시 침수 도상 훈련',
        method: '도상 훈련: 도시 칸 지도 위험·대피', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 칸 이름과 높이 읽기가 바로 보인다.', base: '높이 범례와 장소 이름을 보고 위험한 곳과 대피할 곳에 핀을 꽂는다.', challenge: '읽기 글자는 맞힌 뒤에만 보이고, 물이 더 불어난 조건 문항에서 까닭 보기까지 고른다.' },
        activity: {
          title: '도시 침수 도상 훈련', tool: 'map',
          teacher: '"가상 도시 칸 지도예요. 색이 진할수록 높은 땅이에요. 시간당 비가 갑자기 늘었다면, 이 지도에서 물이 먼저 모일 곳은 어디일까요?" 핀을 꽂기 전에 높이 범례를 함께 읽는다. 지하 주차장이나 하천 산책로 쪽으로 대피하는 학생에게 "물은 높은 곳에서 낮은 곳으로 흘러요. 그 칸의 높이는 몇인가요?"라고 묻는다. 도상 훈련은 지도 위에서 판단을 미리 해 보는 훈련이라는 점과, 실제 우리 동네 대피소는 교사가 따로 안내한다는 점을 짚는다.',
          task: '가상 도시 칸 지도에서 위험한 곳과 높은 대피 장소에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '극한 호우 문자가 왔어요. 지도에서 가장 높은 곳에 핀을 꽂으세요.', toolOptions: CITY, target: { highest: true }, difficulty: 0.2 },
            { prompt: '집에 오는 길에 지나면 안 되는, 차가 물속에 갇힐 수 있는 곳에 핀을 꽂으세요.', toolOptions: CITY, target: { place: '지하차도' }, difficulty: 0.25 },
            { prompt: '하천 물이 넘치기 시작했어요. 우리 집에서 걸어가 피할, 이름이 있는 높은 장소에 핀을 꽂으세요.', toolOptions: CITY, target: { place: '언덕 위 학교' }, difficulty: 0.3 },
            { prompt: '물이 높이 1 칸까지 찼어요. 지하 주차장에 둔 차를 빼러 가도 될까요? 알맞은 판단을 고르세요.', toolOptions: Object.assign({}, CITY, { readOnly: true, ask: { q: '지하 주차장에 내려가도 될까요?', choices: ['차를 빼러 바로 내려간다', '지하는 들어가지 않고 높은 곳에 머문다', '물이 발목이면 내려간다'], why: ['지하는 물이 한꺼번에 흘러들어 빨리 차요.', '', '발목 물도 계단 아래에서는 금방 깊어져요.'] } }), target: { pick: 1 }, difficulty: 0.35, conclude: '침수 때 지하·지하차도·하천변은 피하고, 지도에서 높은 곳을 미리 알아 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 동네에서 침수 때 피할 곳과 갈 곳을 쓰세요.', columns: ['', '장소', '까닭'], cells: [['피할 곳', '', ''], ['갈 높은 곳', '', '']] }] },
        notes: '지도는 가상 도시다. 우리 지역 침수 위험 지역과 대피소는 지자체 안내와 국민재난안전포털로 교사가 확인해 보여 준다.',
      }),
      M({
        id: 'activity.risk-essay', type: 'activity', title: '침수 위험 분석문',
        method: '침수 위험 분석문', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '장소마다 문장 틀을 보고 위험한 까닭을 쓴다.', base: '세 장소의 위험한 까닭을 쓰고 장소마다 기준표 세 항목을 점검한다.', challenge: '장소마다 기준이 하나 더 붙어, 위험을 줄일 대책까지 쓴다.' },
        activity: {
          title: '침수 위험 분석문', tool: 'rubric-writing',
          teacher: '"지하 공간, 지하차도, 하천변. 셋 다 위험하다는 건 알아요. 그런데 왜 위험한지 설명할 수 있나요?" 장소마다 물이 어디서 오고, 왜 빠져나오기 어려운지를 나눠 쓰게 한다. "그냥 물이 많아서 위험하다"고 쓴 학생에게 "물이 많아도 언덕은 왜 덜 위험할까요? 높이와 출구를 넣어 볼까요?"라고 묻는다. 분석문은 위험을 외우는 글이 아니라 처음 보는 장소에서도 판단하게 해 주는 글이라는 점을 짚는다.',
          task: '세 장소가 극한 호우 때 위험한 까닭을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('지하 공간이 위험한 까닭을 2~3문장으로 쓰세요.', '극한 호우 때 지하 주차장·지하 상가가 위험한 까닭을 쓰세요.', ['물이 어디서 흘러드는지 썼다', '빠져나오기 어려운 까닭을 썼다', '짐작은 짐작이라고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['낮', '계단', '흘러']], starter: '지하 공간은 땅보다 낮아서 ~', plus: '위험을 줄일 대책을 하나 썼다', d: 0.35 }),
            RWQ('지하차도가 위험한 까닭을 2~3문장으로 쓰세요.', '극한 호우 때 지하차도에 차나 사람이 들어가면 위험한 까닭을 쓰세요.', ['물이 모이는 까닭을 썼다', '차가 멈출 수 있음을 썼다', '진입하지 않기를 행동으로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['들어가', '진입']], starter: '지하차도는 길이 아래로 꺼져 있어서 ~', plus: '위험을 줄일 대책을 하나 썼다', d: 0.4 }),
            RWQ('하천변이 위험한 까닭을 2~3문장으로 쓰세요.', '극한 호우 때 하천 산책로·하천 옆 도로가 위험한 까닭을 쓰세요.', ['물이 갑자기 불어날 수 있음을 썼다', '위쪽에 내린 비도 영향을 줌을 썼다', '피하는 행동을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['불어', '넘치']], starter: '하천은 위쪽에 내린 비까지 모여서 ~', plus: '위험을 줄일 대책을 하나 썼다', d: 0.4, more: { conclude: '세 곳의 공통점은 물이 모이는 낮은 곳이고 빠져나오기 어렵다는 것 — 그래서 높은 곳으로 피해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 장소의 위험을 견주어 정리하세요.', columns: ['장소', '물이 오는 길', '빠져나오기 어려운 까닭'], cells: [['지하 공간', '', ''], ['지하차도', '', ''], ['하천변', '', '']] }] },
      }),
      M({
        id: 'activity.tabletop-order', type: 'activity', title: '침수 도상 훈련 순서',
        method: '도상 훈련 행동 순서', tool: 'timer', minutes: 16,
        levels: { easy: '행동 순서 카드 3장만 차례로 놓는다.', base: '카드 4장을 차례로 놓고 도상 훈련 전 점검을 확인한 뒤 지도 위에서 짚는다.', challenge: '모둠 역할(문자 확인·길 안내·연락) 카드까지 차례로 놓고 지도 위에서 짚는다.' },
        activity: {
          title: '침수 도상 훈련 순서', tool: 'timer',
          teacher: '"지하 상가에 있는데 극한 호우 문자가 왔어요. 무엇부터 할까요?" 순서 카드를 놓은 뒤 앞 활동의 칸 지도(또는 칠판에 그린 동네 지도)에서 손가락으로 길을 짚게 한다. \'가족에게 먼저 전화\'를 첫 카드로 둔 학생에게 "지하에서 통화하는 동안 계단으로 물이 흘러든다면요?"라고 묻는다. 연락은 안전한 높은 곳에 닿은 뒤에 한다는 점을 짚는다.',
          task: '침수 때 행동 순서 카드를 맞추고 지도 위에서 짚은 뒤 해 보았어요를 눌러요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '지하 상가에서 극한 호우 문자를 받았어요. 행동 순서 카드를 놓고 도상 훈련 전 점검을 확인하세요.', toolOptions: { title: '침수 때 행동 순서', cards: ['가족에게 연락하고 위험 신고', '높은 곳으로 이동', '재난문자 내용 확인', '지하 공간에서 바로 나오기'], safety: ['훈련용 지도를 펼쳤다', '우리 동네 높은 곳을 하나 찾았다'] }, target: { order: ['재난문자 내용 확인', '지하 공간에서 바로 나오기', '높은 곳으로 이동', '가족에게 연락하고 위험 신고'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '침수 때 행동 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['높은 곳으로 이동', '재난문자 내용 확인', '지하 공간에서 바로 나오기'], safety: [] }, target: { order: ['재난문자 내용 확인', '지하 공간에서 바로 나오기', '높은 곳으로 이동'] } } } },
            { prompt: '하천 산책로를 걷다 물이 불어나는 것을 봤어요. 행동 순서 카드를 놓으세요.', toolOptions: { title: '하천변에서', cards: ['안전한 곳에서 119에 알리기', '하천에서 먼 높은 길로 이동', '물가에서 바로 벗어나기'] }, target: { order: ['물가에서 바로 벗어나기', '하천에서 먼 높은 길로 이동', '안전한 곳에서 119에 알리기'] }, difficulty: 0.3,
              levels: { challenge: { prompt: '모둠이 도상 훈련에서 맡을 역할 카드를 일하는 차례로 놓으세요(역할).', toolOptions: { title: '도상 훈련 역할', cards: ['연락 담당: 도착 뒤 가족·학교에 알림', '문자 확인 담당: 내용을 소리 내어 읽음', '길 안내 담당: 지도에서 높은 길을 짚음'] }, target: { order: ['문자 확인 담당: 내용을 소리 내어 읽음', '길 안내 담당: 지도에서 높은 길을 짚음', '연락 담당: 도착 뒤 가족·학교에 알림'] } } } },
            DONEQ('모둠이 정한 순서대로 지도 위에서 지하 상가부터 높은 곳까지 길을 짚어 보고 해 보았어요를 누르세요.', '침수 도상 훈련', '지도 위에서 길을 짚어 보았어요', { conclude: '문자 확인 → 지하에서 나오기 → 높은 곳 → 도착 뒤 연락. 도상 훈련은 판단을 미리 해 두는 연습이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도상 훈련에서 우리 모둠이 처음에 다르게 놓았던 카드와, 고친 까닭을 쓰세요.' }] },
        notes: '침수 대피 도상 훈련이다. 실제 대피소와 경로는 지자체 안내로 확인한다.',
      }),

      M({
        id: 'wrap.campaign', type: 'wrap', title: '침수 캠페인 카드',
        method: '침수 캠페인 카드', tool: 'collage', minutes: 10,
        levels: { easy: '조각 3개 이상으로 "물 고인 지하차도 들어가지 않기" 카드를 꾸민다.', base: '교사가 조각 5개 이상을 권하고, 글귀를 활동지에 함께 쓴다.', challenge: '밝은 색과 어두운 색을 맞대어 멀리서도 보이게 꾸미도록 교사가 권한다.' },
        wrap: {
          teacher: '"\'물 고인 지하차도 들어가지 않기\'를 처음 보는 사람도 바로 알아보게 하려면 어떤 모양과 색이 좋을까요?" 조각을 붙인 뒤 두세 모둠의 카드를 보여 준다. 그림만 예쁘게 꾸민 모둠에게 "이 카드를 본 사람은 무엇을 해야 하는지 알까요?"라고 묻는다. 출구 2번에서 \'물이 발목이면 걸어도 된다\'를 고르는 학생에게 보이지 않는 맨홀과 물살을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'triangle', 'diamond', 'star'] }, prompt: '"물 고인 지하차도 들어가지 않기" 캠페인 카드를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['멈춤을 뜻하는 모양을 넣었다', '물을 나타내는 조각을 넣었다', '멀리서도 보이게 색을 골랐다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '극한 호우 때 맞는 행동을 고르세요.', options: ['물이 발목이면 지하차도를 걸어서 건넌다', '지하 주차장에 차를 빼러 바로 내려간다', '지하·하천변을 피해 높은 곳으로 간다'], answer: 2, difficulty: 0.15, explain: '물은 낮은 곳에 모이고 빠르게 불어나요. 높은 곳으로 피해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '침수 캠페인',
          items: [
            { type: 'short', prompt: '캠페인 카드에 넣을 한 줄 글귀를 쓰세요.' },
            { type: 'check', prompt: '극한 호우 때 하지 않을 일에 표시하세요.', options: ['지하차도 진입', '지하 주차장 내려가기', '하천 산책', '높은 곳으로 이동'] },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 화상 종류별 처치와 병원 판단 (10학년)
  // ======================================================================================================
  {
    const M = MOD('burn-protocol', [10]);
    const BCAUSE = [['뜨거운 물·국물', 30], ['조리 기름', 22], ['고데기·다리미', 15], ['불꽃·화기', 12], ['화학 약품', 8]];
    const OIL = { text: '조리 실습 시간, 튀김 기름이 튀어 모둠원 하람이의 손목 안쪽이 빨개졌다. 하람이가 "괜찮아, 별로 안 아파" 한다.', who: '하람', choices: [
      { id: 'cool', text: '실습을 멈추고 흐르는 시원한 물에 충분히 식히게 한다', result: '화끈거림이 조금 가라앉는다.', impact: [{ who: '하람', text: '열이 더 깊이 가지 않는다', tone: 1 }],
        next: { text: '식히고 보니 손목에 작은 물집이 올라왔다.', choices: [
          { id: 'cover', text: '물집은 그대로 두고 깨끗한 거즈로 덮은 뒤 선생님께 알린다', result: '선생님이 보건실로 함께 간다.', impact: [{ who: '하람', text: '감염 위험을 줄인다', tone: 1 }],
            next: { text: '보건실에서 보니 물집이 생각보다 넓고 계속 욱신거린다.', choices: [
              { id: 'clinic', text: '보건 선생님 판단에 따라 병원 진료를 받는다', result: '병원에서 상처를 소독하고 처치를 받는다.', impact: [{ who: '하람', text: '알맞은 치료를 받는다', tone: 1 }], ending: '식히기 → 덮기 → 알리기 → 병원 판단까지 이어져야 처치가 끝난다.' },
              { id: 'back', text: '실습이 밀려 있으니 반창고만 붙이고 돌아간다', result: '실습 내내 손목이 쓰라리고 물집이 터진다.', impact: [{ who: '하람', text: '상처가 덧난다', tone: -1 }], why: '넓거나 계속 아픈 화상은 전문가의 판단을 받아요.', ending: '바쁘다는 까닭으로 판단을 미루면 작은 화상이 덧난다.' }] } },
          { id: 'pop', text: '물집을 바늘로 터뜨려 물을 뺀다', result: '터진 자리가 빨갛게 짓무른다.', impact: [{ who: '하람', text: '세균이 들어갈 길이 열린다', tone: -1 }], why: '물집은 터뜨리지 않고 깨끗하게 덮어요.', ending: '물집을 터뜨리면 상처를 지키던 막이 사라진다.' }] } },
      { id: 'paste', text: '얼른 연고나 치약을 바른다', result: '화끈거림이 남은 채 상처가 끈적하게 덮인다.', impact: [{ who: '하람', text: '열이 빠지지 않는다', tone: -1 }], why: '바르기 전에 먼저 흐르는 물로 식혀요.', ending: '식히기 전에 무엇을 바르면 열이 갇힌다.' },
      { id: 'skip', text: '안 아프다니 실습을 계속한다', result: '몇 분 뒤 손목이 점점 더 쓰라리다.', impact: [{ who: '하람', text: '처치 시간을 놓친다', tone: -1 }], why: '아프지 않다고 가벼운 화상인 것은 아니에요.', ending: '덜 아프다고 덜 다친 것은 아니다.' }] };
    const OIL_R = [{ id: 'cool', text: '화상은 흐르는 물로 먼저 식혀 열을 뺀다' }, { id: 'blister', text: '물집은 터뜨리지 않고 깨끗하게 덮는다' }, { id: 'pain', text: '아프지 않으면 가벼운 화상이다', why: '깊은 화상은 오히려 덜 아플 수 있어요.' }, { id: 'paste', text: '치약·된장은 열을 빼 준다', why: '민간요법은 상처를 더럽히고 열을 가둬요.' }];
    const ACID = { text: '화학 실험 중 묽은 산 용액이 모둠원의 팔꿈치 안쪽에 튀었다. 따끔하다고 한다.', who: '모둠원', choices: [
      { id: 'rinse', text: '선생님께 알리고 약품 묻은 옷을 벗긴 뒤 흐르는 물로 오래 씻는다', result: '따끔함이 줄고 선생님이 상처를 살핀다.', impact: [{ who: '모둠원', text: '약품이 피부에 덜 남는다', tone: 1 }],
        next: { text: '선생님이 "어떤 약품이었니?" 하고 묻는다.', choices: [
          { id: 'name', text: '쓰던 약품 병을 가져와 이름을 알린다', result: '보건실·병원에 약품 정보를 함께 전한다.', impact: [{ who: '모둠원', text: '알맞은 처치를 받는다', tone: 1 }], ending: '약품 화상은 오래 씻고 무슨 약품인지 알려야 한다.' },
          { id: 'guess', text: '"아마 물 같은 거였어요" 하고 넘긴다', result: '어떤 처치가 맞는지 알기 어렵다.', impact: [{ who: '모둠원', text: '처치가 늦어진다', tone: -1 }], ending: '약품 이름을 모르면 처치도 짐작이 된다.' }] } },
      { id: 'wipe', text: '휴지로 문질러 닦고 실험을 이어 간다', result: '문지른 자리가 더 붉어진다.', impact: [{ who: '모둠원', text: '약품이 피부에 남는다', tone: -1 }], why: '약품은 문지르지 말고 흐르는 물로 오래 씻어 내요.', ending: '닦아 내는 것은 씻어 내는 것이 아니다.' }] };
    const ACID_R = [{ id: 'rinse', text: '약품 화상은 흐르는 물로 오래 씻어 낸다' }, { id: 'info', text: '무슨 약품인지 알려야 알맞게 처치한다' }, { id: 'wipe', text: '빨리 닦아 내면 충분하다', why: '닦으면 약품이 번지고 피부에 남아요.' }];

    MODS.push(
      M({
        id: 'intro.cause-chart', type: 'intro', title: '화상 원인 막대 읽기',
        method: '예시 화상 원인 막대 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '막대 셋(뜨거운 물·조리 기름·고데기)만 함께 읽는다.', base: '막대 다섯을 읽고 고등학생 생활과 가장 가까운 원인을 고른다.', challenge: '막대를 읽은 뒤 원인마다 화상 종류(열·화학)가 무엇인지 짚어 말한다.' },
        intro: {
          teacher: '"예시 자료예요. 실제 통계가 아니라 생활 속 화상 원인을 견주어 보려고 만든 막대예요. 여러분 하루에서 가장 자주 만나는 원인은 무엇일까요?" 시연 단추로 가장 긴 막대가 골라지는 모습을 보여 준다. "화상은 불에 데는 것만 말하잖아요"라는 말이 나오면 "컵라면 국물, 고데기, 실험실 약품은 불이 아닌데 어떨까요?"라고 되묻는다. 원인마다 처치가 달라진다는 점을 예고한다.',
          student: '예시 막대그래프에서 가장 큰 화상 원인을 찾고, 내 생활에서 자주 만나는 원인을 골라 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '화상 원인(예시 자료, 실제 통계 아님)', unit: '%', xLabel: '원인', yLabel: '비율', data: BCAUSE, question: '가장 큰 원인은?', choices: BCAUSE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'paper bar chart columns shaped like a steaming cup noodle, a frying pan, a hair straightener, a candle and a chemistry flask, a paper first aid kit at the side', banner: '화상은 어디서 올까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 수업용 예시다. 실제 화상 통계는 질병관리청 등 공식 자료로 교사가 따로 제시한다.',
      }),
      M({
        id: 'intro.body-find', type: 'intro', title: '화상 부위와 위험도',
        method: '화상 부위와 위험도', tool: 'body', minutes: 7,
        levels: { easy: '사례 하나(컵라면 국물)의 다친 부위만 함께 고른다.', base: '사례 둘(국물·고데기)의 부위를 고르고 더 주의할 부위를 말한다.', challenge: '사례 셋(국물·고데기·약품)의 부위를 고르고 부위마다 병원 판단이 달라지는 까닭을 말한다.' },
        intro: {
          teacher: '"가상 사례예요. 컵라면을 들고 가다 엎어 손목과 배에 국물이 쏟아졌어요. 몸 그림에서 다친 곳을 골라 볼까요?" 시연 단추로 손목·배가 골라지는 모습을 보여 준다. 이어 "고데기가 목에 닿았다면? 약품이 눈 가까이 튀었다면?"이라고 묻고, 눈·목처럼 숨쉬기·시력과 이어진 부위나 관절은 작아 보여도 더 조심해 판단한다는 점을 짚는다. 몸 그림에 손·얼굴 칸이 없으니 그 부위는 자기 손을 짚어 가리키게 한다.',
          student: '사례마다 다친 부위를 몸 그림에서 골라 보고, 특히 조심해야 할 부위가 어디인지 생각해 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '가슴', '배', '손목', '무릎'], names: true }, sequence: [{ parts: ['손목', '배'] }] },
          art: { draw: 'a paper body outline with small paper bandages on the wrist and belly, a tipped cup noodle and a hair straightener floating beside it, gentle warning stars around the neck and eyes', banner: '어디를 다쳤나요?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '몸 그림에는 손·얼굴 칸이 없어 손목·목·눈으로 대신하고, 손·얼굴은 학생이 자기 몸을 짚어 가리키게 한다. 부위별 병원 판단 기준은 교사가 공식 응급처치 지침으로 제시한다.',
      }),

      M({
        id: 'activity.oil-choice', type: 'activity', title: '조리 실습 기름 화상',
        method: '조리 실습 기름 화상 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(첫 처치·물집)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(보건실에서의 병원 판단까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 민간요법·통증 오해 카드를 걸러 낸다.' },
        activity: {
          title: '조리 실습 기름 화상', tool: 'dilemma',
          teacher: '"조리 실습 중 기름이 튀어 친구 손목이 빨개졌어요. 친구가 \'별로 안 아파\' 하면 그냥 넘어가도 될까요?" 선택마다 결과를 읽게 한다. 연고·치약을 고르는 학생에게 "열이 아직 피부 속에 있는데 위를 덮으면 열은 어디로 갈까요?"라고 묻는다. 물집 장면에서는 물집이 상처를 지키는 막이라는 점을, 마지막 장면에서는 넓거나 계속 아프면 보건 선생님·의료진이 판단한다는 점을 짚는다. 병원 판단 기준은 공식 지침을 칠판에 함께 적는다.',
          task: '기름 화상 갈림길을 따라가며 처치와 병원 판단을 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('기름에 데인 친구를 식히고 덮고 알리고 병원 판단까지 하는 길을 고르세요.', OIL, [['cool', 'cover', 'clinic']], OIL_R, ['cool', 'blister'], { d: 0.4 }),
            EXPLOREQ('치약 바르기·실습 계속하기 길도 끝까지 가 보고 결과를 견주세요.', OIL, OIL_R, ['식히지 않은 길의 결과를 확인했다', '물집을 터뜨린 길과 덮은 길을 견주었다'], { d: 0.35 }),
            DILQ('실험 중 약품이 튀었을 때 알맞은 길을 고르세요.', ACID, [['rinse', 'name']], ACID_R, ['rinse', 'info'], { d: 0.35, more: { conclude: '열 화상은 식히기, 약품 화상은 오래 씻어 내기 — 그다음 덮고 알리고 판단을 받아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"아프지 않으면 가벼운 화상이다"가 왜 틀린 생각인지 한 문장으로 쓰세요.' }] },
        notes: '가상 상황이다. 화상 처치 순서·병원 판단 기준은 질병관리청·대한적십자사 응급처치 지침으로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'activity.type-match', type: 'activity', title: '화상 종류와 처치',
        method: '화상 종류와 처치 짝', tool: 'kitchen', minutes: 16,
        levels: { easy: '화상 종류 두 칸에 처치 카드를 짝짓는다.', base: '종류 세 칸에 처치 카드를 짝짓고, 정도별 판단과 처치 순서도 맞춘다.', challenge: '카드를 섞어 놓고, 함정 카드(치약 바르기·물집 터뜨리기)를 남긴 까닭을 짝에게 설명한다.' },
        activity: {
          title: '화상 종류와 처치', tool: 'kitchen',
          teacher: '"열 화상, 화학 화상, 전기 화상. 첫 처치가 모두 같을까요?" 칸마다 카드를 놓은 뒤 전기 화상 칸을 함께 본다. 전기 화상에 \'물로 식히기\'를 먼저 놓는 학생에게 "전기가 아직 흐르고 있다면 다친 사람에게 손을 대도 될까요?"라고 묻는다. 정도별 판단 문항에서 \'하얗거나 감각이 둔하다\'를 가벼운 쪽에 놓는 학생에게 통증이 덜한 깊은 화상이 있다는 점을 짚는다. 정도별 기준은 공식 지침을 함께 보여 준다.',
          task: '화상 종류·정도에 맞는 처치 카드를 짝짓고 처치 순서를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('화상 종류마다 첫 처치 카드를 짝지으세요.', [['열 화상', '흐르는 시원한 물로 충분히 식힌다'], ['화학 화상', '묻은 옷을 벗기고 흐르는 물로 오래 씻는다'], ['전기 화상', '전원을 먼저 끊고 119에 알린다']], { k: 2, extra: ['치약이나 된장을 바른다'], d: 0.3, opt: { autoMotif: false } }),
            MATCHQ('화상 모습마다 알맞은 판단을 짝지으세요.', [['붉고 따끔하다', '식히고 지켜보며 보건실에 알린다'], ['물집이 생겼다', '식히고 덮은 뒤 보건실·병원 판단을 받는다'], ['하얗거나 검고 감각이 둔하다', '바로 119·응급실로 간다']], { k: 2, extra: ['물집을 터뜨려 말린다'], d: 0.35, opt: { autoMotif: false }, more: { hints: ['통증의 크기보다 피부 모습과 넓이를 보고 판단해요.'] } }),
            ORDERQ('열 화상 처치 카드를 차례로 놓으세요.', ['열원에서 벗어난다', '흐르는 시원한 물로 식힌다', '부어오르기 전에 반지·시계를 뺀다', '깨끗한 거즈로 덮는다', '보건실·병원 판단을 받는다'], { k: 3, traps: ['물집을 터뜨린다'], d: 0.35, opt: { autoMotif: false }, more: { conclude: '종류마다 첫 처치는 다르지만 뒤에는 덮고, 알리고, 판단을 받는 흐름이 같아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '화상 종류별 첫 처치를 정리하세요.', columns: ['종류', '첫 처치', '하지 말 것'], cells: [['열 화상', '', ''], ['화학 화상', '', ''], ['전기 화상', '', '']] }] },
        notes: '정도별 판단 카드는 일반적인 응급처치 안내를 줄인 것이다. 교사가 공식 응급처치 지침(질병관리청·대한적십자사)으로 확인해 제시한다.',
      }),
      M({
        id: 'activity.criteria-write', type: 'activity', title: '병원 판단 기준 설명',
        method: '병원 판단 기준 설명', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 칸마다 쓴다.', base: '칸마다 2~3문장을 쓰고 기준표 세 항목을 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 오해를 깨는 반례까지 쓴다.' },
        activity: {
          title: '병원 판단 기준 설명', tool: 'rubric-writing',
          teacher: '"후배가 \'화상, 병원 가야 해?\' 하고 묻는다면 어떻게 설명할까요? 칠판에 적은 공식 지침의 기준을 내 말로 바꿔 써 봐요." 기준을 그대로 베끼는 학생에게 "후배가 이 문장만 읽고 자기 상처를 판단할 수 있을까요?"라고 묻는다. "아프지 않으면 괜찮다"를 쓴 학생에게는 깊은 화상은 신경이 다쳐 덜 아플 수 있다는 반례를 떠올리게 한다. 판단이 어려우면 보건 선생님·119에 묻는 것도 기준의 일부라는 점을 짚는다.',
          task: '화상 때 병원에 가야 할 경우를 후배에게 설명하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('병원 진료가 필요한 경우를 2~3문장으로 설명하세요.', '칠판의 공식 지침을 보고, 화상 때 병원 진료가 필요한 경우를 후배에게 설명하세요.', ['넓이·깊이·부위 가운데 둘 이상을 썼다', '후배가 알아듣는 말로 썼다', '공식 지침과 어긋나지 않는다'], { min: 40, max: 300, sent: [2, 3], must: [['병원', '진료']], starter: '화상이 ~하거나 ~이면 병원에 가야 해.', plus: '판단이 어려울 때 물을 곳을 썼다', d: 0.4 }),
            RWQ('보건실에서 처치하고 지켜볼 경우를 2~3문장으로 설명하세요.', '병원까지 가지 않고 처치하며 지켜볼 수 있는 경우와, 그때 할 처치를 쓰세요.', ['어떤 모습일 때인지 썼다', '식히기·덮기 처치를 썼다', '나빠지면 다시 판단한다고 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['식히', '덮']], starter: '붉고 따끔하기만 하면 ~', plus: '나빠지는 신호를 하나 썼다', d: 0.4 }),
            RWQ('화상에 대한 오해 하나를 골라 바로잡는 글을 2~3문장으로 쓰세요.', '"아프지 않으면 가벼운 화상이다", "연고부터 바른다", "물집은 터뜨린다" 가운데 하나를 골라 바로잡으세요.', ['고른 오해를 밝혔다', '왜 틀렸는지 까닭을 썼다', '대신 할 행동을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['대신', '틀린', '오해']], starter: '"~"는 틀린 말이다. 왜냐하면 ~', plus: '오해가 틀렸음을 보여 주는 반례를 들었다', d: 0.4, more: { conclude: '병원 판단은 통증이 아니라 넓이·깊이·부위로 하고, 헷갈리면 전문가에게 물어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 설명 가운데 후배가 가장 헷갈릴 만한 문장을 골라 더 쉽게 고쳐 쓰세요.' }] },
        notes: '병원 판단 기준(넓이·깊이·부위)은 교사가 공식 응급처치 지침으로 칠판에 제시한 뒤 쓰게 한다. 수치 기준을 수업에서 새로 만들지 않는다.',
      }),

      M({
        id: 'wrap.summary-map', type: 'wrap', title: '화상 처치 정리 지도',
        method: '처치 정리 연상 지도', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 종류·처치 순서 두 가지를 함께 채우고 나머지는 학생이 단다.', base: '종류·처치 순서·병원 판단 세 가지에 카드를 단다.', challenge: '하지 말 것 가지까지 네 가지에 카드를 달고 출구 질문에 까닭을 쓴다.' },
        wrap: {
          teacher: '"\'화상 처치\'를 한 장에 정리해 봐요. 종류, 순서, 병원 판단, 그리고 하지 말 것." 카드를 단 뒤 한두 명에게 하지 말 것 가지를 읽게 한다. \'연고 바르기\'를 처치 순서에 넣는 학생에게 "식히기 전에 바르면 어떻게 된다고 했나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '화상 처치', slots: ['종류', '처치 순서', '병원 판단', '하지 말 것'], cards: ['열·화학·전기 화상', '흐르는 물로 식히기', '깨끗하게 덮기', '넓거나 깊은 화상', '숨쉬기·눈 가까운 부위', '물집 터뜨리기', '치약·된장 바르기'] }, prompt: '카드를 화상 처치 연상 지도 가지에 다세요.', target: { sort: { 종류: ['열·화학·전기 화상'], '처치 순서': ['흐르는 물로 식히기', '깨끗하게 덮기'], '병원 판단': ['넓거나 깊은 화상', '숨쉬기·눈 가까운 부위'], '하지 말 것': ['물집 터뜨리기', '치약·된장 바르기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '화상을 입었을 때 가장 먼저 할 일은?', options: ['연고를 바른다', '흐르는 시원한 물로 식힌다', '물집을 터뜨린다'], answer: 1, difficulty: 0.1, explain: '먼저 식혀 열을 빼야 화상이 깊어지지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '화상 처치 정리',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '물집은 ___ 않고 깨끗한 거즈로 덮는다.', answer: '터뜨리지' },
            { type: 'short', prompt: '하지 말 것 하나를 골라 왜 하면 안 되는지 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.self-check', type: 'wrap', title: '화상 처치 스스로 점검',
        method: '스스로 점검', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 앞의 두 항목만 함께 읽고 표시하게 한다.', base: '세 항목을 스스로 표시한다.', challenge: '네 항목을 모두 표시하고, 표시하기 어려운 항목을 짝에게 다시 설명한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 지금 말할 수 있는 것만 표시해 봐요." 표시한 뒤 짝끼리 \'병원 판단 기준\'을 서로 말해 보게 한다. 모든 항목을 표시한 학생에게 "약품 화상 첫 처치를 지금 말해 볼까요?"라고 하나를 골라 물어, 표시와 실제로 말할 수 있는 것이 같은지 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '화상 처치 스스로 점검' }, prompt: '지금 할 수 있는 것을 스스로 점검해 표시하세요.', target: { selfCheck: ['열 화상 첫 처치를 말할 수 있다', '약품 화상 첫 처치를 말할 수 있다', '물집을 다루는 법을 말할 수 있다', '병원 판단 기준을 말할 수 있다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '전기에 데인 사람을 도울 때 가장 먼저 할 일은?', options: ['바로 손을 잡아 끌어낸다', '전원을 끊었는지 확인하고 119에 알린다', '상처에 물을 붓는다'], answer: 1, difficulty: 0.15, explain: '전기가 흐르면 돕는 사람도 다칠 수 있어요. 전원부터 끊어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '화상 처치 점검',
          items: [
            { type: 'check', prompt: '말할 수 있는 것에 표시하세요.', options: ['열 화상 처치', '약품 화상 처치', '물집 다루기', '병원 판단 기준'] },
            { type: 'short', prompt: '집이나 일터에서 화상이 날 만한 곳 하나와 예방법을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 재난문자·경보 읽고 판단하기 (10학년)
  // ======================================================================================================
  {
    const M = MOD('alert-system', [10]);
    const KIND = [['안전안내문자', 6], ['긴급재난문자', 2], ['위급재난문자', 1]];
    const QUAKE = { text: '3교시 수업 중, 모든 휴대전화에서 동시에 긴급재난문자 경고음이 울린다. "지진 발생, 낙하물로부터 몸 보호" 곧 교실이 흔들리기 시작한다.', who: '우리 반', choices: [
      { id: 'cover', text: '책상 아래로 들어가 책상 다리를 잡고 머리를 보호한다', result: '책장 위 물건이 떨어지지만 책상이 막아 준다.', impact: [{ who: '우리 반', text: '떨어지는 물건을 피한다', tone: 1 }],
        next: { text: '흔들림이 멈췄다. 선생님이 "운동장으로 대피합니다"라고 말한다.', choices: [
          { id: 'stairs', text: '가방은 두고 머리를 보호하며 계단으로 운동장에 나간다', result: '반 전체가 줄지어 운동장 가운데에 모인다.', impact: [{ who: '우리 반', text: '건물에서 떨어진 곳에 모인다', tone: 1 }],
            next: { text: '운동장에서 새 문자가 온다. "여진 우려, 건물 밖 넓은 곳에서 대기" 친구가 "다른 학교 건물 무너졌대" 하는 글을 보여 준다.', choices: [
              { id: 'official', text: '공식 문자대로 건물에서 떨어져 기다리고 확인 안 된 글은 퍼뜨리지 않는다', result: '반이 차분히 선생님 안내를 기다린다.', impact: [{ who: '우리 반', text: '혼란 없이 대기한다', tone: 1 }], ending: '문자를 읽고, 행동하고, 확인된 정보만 전하면 모두가 침착해진다.' },
              { id: 'share', text: '놀라서 그 글을 단체방에 바로 퍼뜨린다', result: '부모님들의 전화가 몰려 학교 전화가 막힌다.', impact: [{ who: '가족들', text: '헛된 걱정에 빠진다', tone: -1 }], why: '확인되지 않은 소식은 퍼뜨리지 않고 공식 정보를 전해요.', ending: '확인 안 된 소식은 걱정과 혼란만 퍼뜨린다.' }] } },
          { id: 'bag', text: '가방과 휴대전화를 챙기러 사물함에 들렀다 나간다', result: '복도가 붐비고 반이 흩어진다.', impact: [{ who: '우리 반', text: '인원 확인이 늦어진다', tone: -1 }], why: '대피할 때는 물건보다 빨리 모이는 것이 먼저예요.', ending: '챙긴 가방만큼 대피가 늦어진다.' }] } },
      { id: 'run', text: '흔들리는 중에 바로 복도로 뛰어나간다', result: '복도 천장 판이 떨어지고 계단에서 넘어질 뻔한다.', impact: [{ who: '나', text: '떨어지는 물건에 노출된다', tone: -1 }], why: '흔들리는 동안에는 몸을 보호하고, 멈춘 뒤 대피해요.', ending: '흔들릴 때 뛰면 떨어지는 것과 넘어지는 것을 모두 만난다.' },
      { id: 'ignore', text: '"또 훈련 문자겠지" 하고 문자를 끄고 앉아 있는다', result: '창가 화분이 떨어지며 깨진다.', impact: [{ who: '나', text: '몸을 보호할 시간을 놓친다', tone: -1 }], why: '경보는 자주 와도 매번 내용을 확인해요.', ending: '익숙한 경보도 무시하면 대비할 몇 초를 잃는다.' }] };
    const QUAKE_R = [{ id: 'protect', text: '흔들릴 때는 몸을 보호하고 멈춘 뒤 대피한다' }, { id: 'verify', text: '공식 문자로 확인된 정보만 전한다' }, { id: 'often', text: '문자는 자주 오니 무시해도 된다', why: '자주 와도 이번 문자가 무엇을 말하는지는 늘 달라요.' }, { id: 'fast', text: '소식은 빨리 퍼뜨릴수록 좋다', why: '틀린 소식은 빨리 퍼질수록 해가 커요.' }];
    const MUTE = { text: '한 주 동안 재난문자가 여러 번 와서 친구가 "알림 꺼 버리자"고 한다.', who: '친구', choices: [
      { id: 'off', text: '함께 재난문자 알림을 꺼 버린다', result: '조용해졌다.', impact: [{ who: '두 사람', text: '중요한 경보를 못 받게 된다', tone: -1 }], why: '알림을 끄면 정말 위험할 때의 경보도 못 받아요.', ending: '시끄러움을 없애려다 경보까지 없앤다.' },
      { id: 'read', text: '알림은 두고 문자마다 내 지역·내 행동만 짚어 읽자고 한다', result: '친구가 문자 하나를 다시 읽어 본다.', impact: [{ who: '친구', text: '읽는 법을 익힌다', tone: 1 }],
        next: { text: '그날 밤 "○○동 하천변 대피" 문자가 온다. 친구 동네다.', choices: [
          { id: 'act', text: '친구에게 전화해 문자 내용을 그대로 알리고 대피 장소를 확인한다', result: '친구 가족이 대피 장소로 이동한다.', impact: [{ who: '친구 가족', text: '제때 대피한다', tone: 1 }], ending: '끄지 않고 읽은 문자가 친구 가족을 움직였다.' },
          { id: 'later', text: '내일 학교에서 말해 주기로 한다', result: '친구는 밤사이 문자를 보지 못한다.', impact: [{ who: '친구 가족', text: '대피가 늦어진다', tone: -1 }], ending: '대피 문자는 그 자리에서 전해야 쓸모가 있다.' }] } }] };
    const MUTE_R = [{ id: 'keep', text: '알림을 켜 두고 내 지역·내 행동을 짚어 읽는다' }, { id: 'now', text: '대피 문자는 받은 즉시 전한다' }, { id: 'noise', text: '문자가 많으면 꺼 두는 것이 낫다', why: '많아도 꺼 두면 꼭 필요한 문자를 놓쳐요.' }];
    const TOWN = { title: '가상 동네 칸 지도', grid: [6, 4], places: [{ name: '우리 집', icon: 'house', at: [0, 1] }, { name: '학원', icon: 'office', at: [2, 0] }, { name: '△△초등학교', icon: 'school', at: [4, 0] }, { name: '○○천 산책로', icon: 'park', at: [3, 3] }, { name: '지하철역', icon: 'station', at: [1, 3] }, { name: '◇◇중학교', icon: 'school', at: [5, 2] }], rivers: [[[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]]] };

    MODS.push(
      M({
        id: 'intro.alert-line', type: 'intro', title: '경보 흐름 시간축',
        method: '경보 흐름 시간축', tool: 'timeline', minutes: 7,
        levels: { easy: '앞의 문자 카드 3장만 시각 차례로 함께 놓는다.', base: '문자 카드 4장을 시각 차례로 놓고 상황이 어떻게 바뀌었는지 말한다.', challenge: '카드를 놓은 뒤 문자마다 내가 할 행동이 어떻게 바뀌는지 짚어 말한다.' },
        intro: {
          teacher: '"오후 동안 받은 예시 문자 네 통이에요. 이 문자들은 따로따로가 아니라 하나의 이야기예요. 시각 차례로 놓으면 무엇이 보일까요?" 시연 단추로 카드가 시각 차례로 놓이는 모습을 보여 준다. "문자가 자주 와서 이제 안 읽어요"라는 말이 나오면 "둘째 문자와 셋째 문자는 무엇이 달라졌나요? 셋째를 안 읽었다면 어떻게 될까요?"라고 되묻는다. 경보 종류와 기준은 공식 자료로 따로 보여 준다고 알린다.',
          student: '예시 문자 카드를 시각 차례로 놓고, 문자가 바뀔 때마다 상황과 내가 할 일이 어떻게 바뀌는지 읽어 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: ['17:40 호우경보 해제, 하천변 출입은 안내 뒤에', '14:02 호우경보 발령, 하천 접근 금지', '15:10 ○○동 주민 대피, 대피 장소 △△초', '14:30 ○○천 물 불어남, 대피 준비'] }, sequence: [{ order: ['14:02 호우경보 발령, 하천 접근 금지', '14:30 ○○천 물 불어남, 대피 준비', '15:10 ○○동 주민 대피, 대피 장소 △△초', '17:40 호우경보 해제, 하천변 출입은 안내 뒤에'] }] },
          art: { draw: 'a paper smartphone with four paper message bubbles stacked along a paper timeline ribbon, rain clouds above and a small school building marked as a shelter at the end', banner: '문자가 바뀌면 행동도 바뀐다', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '문자는 수업용 예시다. 실제 재난문자 형식과 경보 기준은 행정안전부·기상청 공식 자료로 교사가 제시한다.',
      }),
      M({
        id: 'intro.kind-chart', type: 'intro', title: '재난문자 종류 읽기',
        method: '경보 종류 표 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '종류 두 가지(안전안내·긴급)만 견준다.', base: '종류 셋의 개수를 견주고 무엇이 가장 드물게 오는지 찾는다.', challenge: '종류마다 어떤 상황에 오는지 공식 기준표를 보고 앞 시간축의 문자에 적용해 본다.' },
        intro: {
          teacher: '"한 주 동안 한 학생이 받은 재난문자를 종류별로 센 예시 그래프예요. 가장 드물게 온 종류는 무엇인가요?" 시연 단추로 막대가 골라지는 모습을 보여 준 뒤 표 보기로 개수를 함께 읽는다. "드물게 오는 문자일수록 더 무거운 상황일까요?"라고 묻고, 종류별 기준은 행정안전부 공식 기준표를 화면에 띄워 함께 채운다. "다 같은 문자 아니에요?"라는 말이 나오면 경고음과 표시 글이 다르다는 점을 실제 화면 예시로 보여 준다.',
          student: '예시 그래프에서 재난문자 종류별 개수를 견주고, 가장 드물게 오는 종류가 무엇인지 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '한 주 동안 받은 재난문자(예시 자료)', unit: '통', xLabel: '종류', yLabel: '받은 수', data: KIND, showTable: true, question: '가장 드물게 온 종류는?', choices: KIND.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'three paper smartphones side by side, each showing a different coloured alert banner, a small paper bar chart and a paper reference table pinned behind them', banner: '문자마다 무게가 달라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '개수는 수업용 예시다. 재난문자 종류(위급·긴급·안전안내)와 발송 기준은 행정안전부 공식 안내로 교사가 확인해 제시한다.',
      }),

      M({
        id: 'activity.class-choice', type: 'activity', title: '수업 중 긴급문자',
        method: '수업 중 긴급문자 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(흔들릴 때·멈춘 뒤)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(운동장에서 새 문자를 받는 장면까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "자주 오니 무시"·"빨리 퍼뜨리기" 카드를 걸러 낸다.' },
        activity: {
          title: '수업 중 긴급문자', tool: 'dilemma',
          teacher: '"수업 중에 모든 휴대전화가 동시에 울려요. 지진 긴급재난문자예요. 여러분은 무엇부터 할까요?" 선택마다 결과를 소리 내어 읽게 한다. \'또 훈련이겠지\'를 고른 학생에게 "그 몇 초 동안 머리 위에는 무엇이 있었나요?"라고 묻는다. 운동장 장면에서는 친구가 보여 준 글이 어디서 왔는지, 공식 문자와 무엇이 다른지 짚게 한다. 문자는 받는 것으로 끝이 아니라 읽고, 행동하고, 바르게 전해야 한다는 점을 정리한다.',
          task: '수업 중 긴급문자 갈림길을 따라가며 행동을 고르고, 이어지는 문자에 따라 다시 판단해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('수업 중 지진 긴급문자를 받고 몸 보호·대피·정보 확인까지 알맞은 길을 고르세요.', QUAKE, [['cover', 'stairs', 'official']], QUAKE_R, ['protect', 'verify'], { d: 0.4 }),
            EXPLOREQ('문자를 무시한 길과 소식을 퍼뜨린 길도 끝까지 가 보고 결과를 견주세요.', QUAKE, QUAKE_R, ['문자를 무시한 길의 결과를 확인했다', '확인 안 된 소식이 퍼진 결과를 견주었다'], { d: 0.35 }),
            DILQ('재난문자가 자주 와서 알림을 끄자는 친구에게 알맞은 길을 고르세요.', MUTE, [['read', 'act']], MUTE_R, ['keep', 'now'], { d: 0.35, more: { conclude: '경보는 자주 와도 끄지 않고, 내 지역·내 행동을 짚어 읽고, 필요한 사람에게 바로 정확히 전해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"경보는 자주 와서 무시해도 된다"에 답하는 문장을 갈림길 결과를 근거로 써 보세요.' }] },
        notes: '가상 상황이다. 지진 때 행동 요령은 행정안전부 국민재난안전포털 안내로 교사가 확인해 덧붙인다.',
      }),
      M({
        id: 'activity.interpret-write', type: 'activity', title: '문자 해석과 전달',
        method: '경보 해석과 행동 정리', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '문자 해석·내 행동·가족 전달 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 확인 안 된 정보를 거르는 문장까지 넣는다.' },
        activity: {
          title: '문자 해석과 전달', tool: 'rubric-writing',
          teacher: '"예시 문자예요. [긴급재난문자] 15:10 ○○천 범람 우려, ○○동 하천변 주민은 △△초등학교로 대피 바랍니다. 이 문자에서 무엇·어디·언제·어떻게를 찾을 수 있나요?" 해석 칸에서 문자에 없는 말을 덧붙이는 학생에게 "그 말은 문자 어디에 있나요?"라고 묻는다. 가족 전달 칸에서는 할머니가 한 번 듣고 움직일 수 있게 짧고 정확하게 쓰도록 한다. 전달할 때는 출처를 함께 말한다는 점을 짚는다.',
          task: '예시 재난문자를 해석하고 내 행동과 가족에게 전할 문장을 써서 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('예시 문자를 해석해 2~3문장으로 쓰세요.', '예시 문자: "[긴급재난문자] 15:10 ○○천 범람 우려, ○○동 하천변 주민은 △△초등학교로 대피 바랍니다." 무엇·어디·언제·어떻게를 찾아 쓰세요.', ['무슨 위험인지 썼다', '누가 어디로 가야 하는지 썼다', '문자에 없는 말을 보태지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['대피', '초등학교']], starter: '이 문자는 ~ 때문에 ~에게 ~하라는 뜻이다.', plus: '문자가 온 시각을 넣었다', d: 0.35 }),
            RWQ('내가 ○○동 하천변 근처에 있다면 할 행동을 2~3문장으로 쓰세요.', '내가 지금 ○○천 산책로 근처 학원에 있다고 생각하고, 할 행동을 차례대로 쓰세요.', ['하천변을 피하는 행동을 썼다', '대피 장소로 가는 행동을 썼다', '행동의 차례가 드러난다'], { min: 40, max: 300, sent: [2, 3], must: [['피하', '대피']], starter: '먼저 ~하고, 그다음 ~', plus: '길이 막혔을 때의 대안을 썼다', d: 0.4 }),
            RWQ('가족에게 보낼 전달 문장을 2~3문장으로 쓰세요.', '○○동에 사시는 할머니께 이 문자 내용을 전하는 메시지를 쓰세요.', ['출처(재난문자)를 밝혔다', '할 행동을 짧고 분명하게 썼다', '겁주는 말을 보태지 않았다'], { min: 30, max: 250, sent: [2, 3], must: [['재난문자', '문자']], starter: '할머니, 방금 재난문자가 왔어요. ~', plus: '확인 안 된 소문은 전하지 않는다는 문장을 넣었다', d: 0.4, more: { conclude: '문자를 읽을 때는 무엇·어디·언제·어떻게를, 전할 때는 출처와 행동을 정확히.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '예시 문자를 네 칸으로 나누어 정리하세요.', columns: ['무엇', '어디', '언제', '어떻게'], cells: [['', '', '', '']] }] },
        notes: '문자는 수업용 예시이고 지명은 ○○·△△로 가렸다. 실제 문자 형식은 행정안전부 안내로 확인한다.',
      }),
      M({
        id: 'activity.shelter-map', type: 'activity', title: '문자 속 대피 장소',
        method: '경보 속 대피 장소 찾기', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 그 칸의 장소 이름이 바로 보인다.', base: '문자에 나온 대피 장소와 피할 곳에 핀을 꽂는다.', challenge: '읽기 글자는 맞힌 뒤에만 보이고, 두 길을 견주는 문항에서 더 안전한 길을 까닭과 함께 고른다.' },
        activity: {
          title: '문자 속 대피 장소', tool: 'map',
          teacher: '"예시 문자에 나온 대피 장소 △△초등학교를 지도에서 찾아볼까요?" 핀을 꽂은 뒤 가는 길을 손가락으로 짚게 한다. 하천 산책로를 따라가는 길을 짚는 학생에게 "가장 짧은 길이 가장 안전한 길일까요? 문자가 피하라고 한 곳은 어디였나요?"라고 묻는다. 대피 장소는 문자마다 다를 수 있어 그때그때 문자에서 확인한다는 점을 짚는다.',
          task: '예시 문자를 읽고 가상 동네 지도에서 대피 장소와 피할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '예시 문자: "○○동 하천변 주민은 △△초등학교로 대피 바랍니다." 대피 장소에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '△△초등학교' }, difficulty: 0.2 },
            { prompt: '같은 문자에서 지금 가까이 가면 안 되는 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '○○천 산책로' }, difficulty: 0.25 },
            { prompt: '다음 문자: "△△초 대피소 가득 참, ◇◇중학교로 대피 바랍니다." 바뀐 대피 장소에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '◇◇중학교' }, difficulty: 0.3 },
            { prompt: '우리 집에서 대피 장소로 가는 두 길 가운데 더 안전한 길을 고르세요.', toolOptions: Object.assign({}, TOWN, { readOnly: true, ask: { q: '어느 길로 갈까요?', choices: ['하천 산책로를 따라가는 짧은 길', '학원 앞을 지나는 하천에서 먼 길'], why: ['문자가 피하라고 한 하천변을 지나요.', ''] } }), target: { pick: 1 }, difficulty: 0.35, conclude: '대피 장소는 문자에서 확인하고, 가는 길은 짧은 길보다 위험을 피하는 길로 정해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 집 가까운 대피 장소를 국민재난안전포털에서 찾아보겠다면 무엇으로 검색할지 쓰세요.' }] },
        notes: '지도와 문자는 가상이다. 실제 우리 동네 대피 장소는 국민재난안전포털·안전디딤돌 앱으로 함께 확인하게 한다.',
      }),

      M({
        id: 'wrap.setting-check', type: 'wrap', title: '내 알림 설정 점검',
        method: '내 알림 설정 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 앞의 두 항목만 함께 읽고 표시하게 한다.', base: '세 항목을 스스로 표시한다.', challenge: '네 항목을 모두 확인하고, 아직 하지 않은 것을 오늘 집에서 할 계획으로 쓴다.' },
        wrap: {
          teacher: '"지금 내 휴대전화의 재난문자 수신 설정이 켜져 있는지 확인해 볼까요? 설정 화면은 기종마다 달라요." 수업 규칙에 맞게 휴대전화를 잠깐 꺼내 확인하게 하고, 개인 화면을 다른 사람에게 보여 주지 않게 한다. "시끄러워서 꺼 놨어요"라는 학생에게 "꺼 둔 그날 밤 대피 문자가 온다면요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내 재난 알림 점검', items: [{ id: 'on', text: '재난문자 수신 설정이 켜져 있다' }, { id: 'shelter', text: '우리 집 가까운 대피 장소를 안다' }, { id: 'family', text: '가족과 연락할 방법을 정했다' }, { id: 'source', text: '공식 정보를 확인할 곳을 안다' }] }, prompt: '지금 내 상태를 스스로 점검해 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '확인되지 않은 재난 소식을 받았을 때 알맞은 행동은?', options: ['빨리 단체방에 퍼뜨린다', '공식 문자·기관 발표로 확인한 뒤 전한다', '무시하고 아무것도 하지 않는다'], answer: 1, difficulty: 0.15, explain: '확인된 정보만 전해야 혼란 없이 대피할 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '재난 알림 점검',
          items: [
            { type: 'check', prompt: '오늘 확인한 것에 표시하세요.', options: ['수신 설정', '대피 장소', '가족 연락 방법', '공식 정보 확인처'] },
            { type: 'short', prompt: '아직 하지 않은 것 하나와 언제 할지를 쓰세요.' },
          ],
        },
        notes: '휴대전화 확인은 학교 규칙에 맞게 짧게 한다. 설정 메뉴 이름은 기종마다 달라 교사가 확인해 안내한다.',
      }),
      M({
        id: 'wrap.summary-map', type: 'wrap', title: '경보 판단 정리',
        method: '경보 판단 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 종류·정보 두 가지를 함께 채운다.', base: '종류·정보·행동 세 가지에 카드를 단다.', challenge: '전달 가지까지 네 가지에 카드를 단다.' },
        wrap: {
          teacher: '"\'경보\'를 받았을 때 머릿속에서 일어나야 할 일을 네 가지로 정리해 봐요. 무슨 종류인가, 무슨 정보인가, 나는 무엇을 하나, 누구에게 어떻게 전하나." 카드를 단 뒤 \'바로 퍼뜨리기\'가 어느 가지에도 들어가지 않는 까닭을 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '경보', slots: ['종류', '정보', '행동', '전달'], cards: ['위급·긴급·안전안내', '무엇·어디·언제', '대피 장소 확인', '몸 보호·대피', '출처와 함께 알리기', '확인 안 된 글 퍼뜨리기'] }, prompt: '카드를 경보 판단 가지에 다세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { 종류: ['위급·긴급·안전안내'], 정보: ['무엇·어디·언제', '대피 장소 확인'], 행동: ['몸 보호·대피'], 전달: ['출처와 함께 알리기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '재난문자를 받았을 때 가장 먼저 할 일은?', options: ['내 지역과 할 행동을 짚어 읽는다', '알림을 끈다', '단체방에 먼저 올린다'], answer: 0, difficulty: 0.1, explain: '먼저 읽고 내 상황에 맞는 행동을 찾아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '경보 판단 정리',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '재난 소식은 ___으로 확인한 뒤 출처와 함께 전한다.', answer: '공식 정보(재난문자·기관 발표)' },
            { type: 'short', prompt: '경보가 자주 와서 무시하고 싶은 친구에게 할 말을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 실험실·체육관 등 장소별 지진 대피 (11학년)
  // ======================================================================================================
  {
    const M = MOD('quake-structure', [11]);
    const PLACES = { title: '가상 학교 실험실·체육관', grid: [6, 4], places: [{ name: '가열 실험대', icon: 'dot', at: [0, 0] }, { name: '시약장', icon: 'dot', at: [1, 1] }, { name: '가스 밸브', icon: 'dot', at: [0, 2] }, { name: '실험실 문', icon: 'dot', at: [2, 3] }, { name: '천장 조명', icon: 'dot', at: [4, 1] }, { name: '농구대', icon: 'dot', at: [5, 0] }, { name: '체육관 출입문', icon: 'dot', at: [5, 3] }] };
    const HAZ = [['실험실', 5], ['강당', 4], ['체육관', 3], ['교실', 2]];
    const LAB = { text: '화학 시간, 알코올램프로 비커를 데우는 중에 실험실이 크게 흔들리기 시작한다. 시약장 문이 덜컹거린다.', who: '우리 모둠', choices: [
      { id: 'tidy', text: '쏟아지지 않게 시약병부터 정리한다', result: '시약장에서 병이 떨어져 발밑에서 깨진다.', impact: [{ who: '우리 모둠', text: '약품과 유리 조각 가까이 있다', tone: -1 }], why: '흔들릴 때는 물건보다 몸 보호가 먼저예요.', ending: '실험 중이라도 흔들릴 때 정리는 몸을 위험에 둔다.' },
      { id: 'cover', text: '시약장에서 떨어져 실험대 아래로 들어가 머리를 보호한다', result: '머리 위로 작은 물건이 떨어지지만 실험대가 막아 준다.', impact: [{ who: '우리 모둠', text: '떨어지는 것을 피한다', tone: 1 }],
        next: { text: '흔들림이 멈췄다. 비커 아래 알코올램프 불이 아직 켜져 있다.', choices: [
          { id: 'off', text: '선생님 지시에 따라 불을 끄고 가스 밸브를 잠근 뒤 대피 줄에 선다', result: '불씨가 남지 않은 채 모둠이 줄을 선다.', impact: [{ who: '실험실', text: '두 번째 사고(불)를 막는다', tone: 1 }],
            next: { text: '복도로 나가는데 앞 실험실 문 앞에 깨진 약품 병이 있고 냄새가 난다.', choices: [
              { id: 'detour', text: '그 자리를 피해 다른 출구로 돌아 나가고 선생님께 알린다', result: '모둠이 냄새 나는 곳을 지나지 않고 운동장에 닿는다.', impact: [{ who: '우리 모둠', text: '약품 노출을 피한다', tone: 1 }], ending: '몸 보호 → 멈춘 뒤 불·가스 정리 → 위험물을 피해 대피, 장소마다 순서가 있다.' },
              { id: 'wipe', text: '다른 사람이 밟지 않게 휴지로 치우고 간다', result: '손에 약품이 묻고 눈이 따갑다.', impact: [{ who: '나', text: '약품에 노출된다', tone: -1 }], why: '깨진 약품은 직접 치우지 않고 피해 가며 알려요.', ending: '대피 중 치우기는 전문가의 몫까지 떠맡는 일이다.' }] } },
          { id: 'bag', text: '불은 그대로 두고 가방부터 챙겨 나간다', result: '켜진 불 옆에 쏟아진 약품이 남는다.', impact: [{ who: '실험실', text: '불이 날 수 있다', tone: -1 }], why: '흔들림이 멈추면 불과 가스부터 정리해요.', ending: '지진 뒤 불은 흔들림보다 큰 사고가 될 수 있다.' }] } },
      { id: 'run', text: '흔들리는 중에 바로 문으로 뛰어간다', result: '바닥에 쏟아진 물에 미끄러져 넘어진다.', impact: [{ who: '나', text: '넘어지고 다친다', tone: -1 }], why: '흔들리는 동안은 움직이지 말고 몸을 보호해요.', ending: '흔들릴 때 뛰면 넘어지고 떨어지는 것에 맞는다.' }] };
    const LAB_R = [{ id: 'body', text: '흔들릴 때는 물건보다 몸 보호가 먼저다' }, { id: 'fire', text: '멈춘 뒤 불·가스를 정리해야 두 번째 사고를 막는다' }, { id: 'tidy', text: '실험 중이면 정리부터 해야 한다', why: '흔들리는 동안 정리하면 떨어지는 병에 다쳐요.' }, { id: 'wide', text: '어디든 넓은 곳이면 안전하다', why: '넓어도 위에 매달린 것이 있으면 위험해요.' }];
    const GYM = { text: '체육 시간, 체육관에서 배구를 하는데 흔들림이 시작되고 천장 조명이 흔들린다.', who: '우리 반', choices: [
      { id: 'center', text: '넓은 가운데로 모여 서서 지켜본다', result: '천장 조명 바로 아래에 반이 모인다.', impact: [{ who: '우리 반', text: '떨어지는 조명 아래에 있다', tone: -1 }], why: '넓은 곳도 천장에 매달린 것 아래는 위험해요.', ending: '넓다고 안전한 것이 아니라 위가 비어 있어야 안전하다.' },
      { id: 'low', text: '조명·농구대 아래를 피해 몸을 낮추고 머리를 감싼다', result: '흔들리는 조명에서 떨어진 자리에서 기다린다.', impact: [{ who: '우리 반', text: '낙하물을 피한다', tone: 1 }],
        next: { text: '흔들림이 멈췄다. 선생님이 출입문 쪽을 가리킨다.', choices: [
          { id: 'exit', text: '줄을 지어 출입문으로 나가 운동장 가운데로 간다', result: '반 전체가 건물에서 떨어진 곳에 모인다.', impact: [{ who: '우리 반', text: '빠르게 모여 인원을 센다', tone: 1 }], ending: '멈춘 뒤에는 위험물을 피한 길로 넓은 바깥에 모인다.' },
          { id: 'ball', text: '공과 네트를 먼저 정리하고 나간다', result: '정리하는 동안 여진이 온다.', impact: [{ who: '우리 반', text: '대피가 늦어진다', tone: -1 }], ending: '정리는 안전해진 뒤에 한다.' }] } }] };
    const GYM_R = [{ id: 'above', text: '머리 위에 매달린 것이 없는 곳을 고른다' }, { id: 'after', text: '흔들림이 멈춘 뒤 대피한다' }, { id: 'wide', text: '넓은 곳이면 어디든 안전하다', why: '체육관은 넓지만 천장 조명·농구대가 있어요.' }];

    MODS.push(
      M({
        id: 'intro.hazard-map', type: 'intro', title: '실험실·체육관 위험물',
        method: '실험실·체육관 위험물 핀', tool: 'map', minutes: 7,
        levels: { easy: '실험실 한 곳에서 넘어질 것·떨어질 것을 함께 찾는다.', base: '실험실과 체육관 두 곳에서 위험물을 찾는다.', challenge: '두 곳의 위험물을 견주어 무엇이 다른지(약품·불 / 매달린 것) 말한다.' },
        intro: {
          teacher: '"가상 평면이에요. 왼쪽은 실험실, 오른쪽은 체육관이에요. 흔들릴 때 넘어지거나 떨어질 것은 무엇일까요?" 시연 단추로 시약장에 핀이 꽂히는 모습을 보여 준 뒤 학생들이 손가락으로 다른 위험물을 짚게 한다. "체육관은 넓어서 위험한 게 없어요"라는 말이 나오면 "고개를 들어 천장을 보면 무엇이 매달려 있나요?"라고 되묻는다. 장소마다 위험이 달라서 몸 보호 자리도 달라진다는 점을 예고한다.',
          student: '가상 실험실·체육관 평면에서 흔들릴 때 넘어지거나 떨어질 것을 찾아보세요.',
          demo: { tool: 'map', options: PLACES, sequence: [{ place: '시약장' }] },
          art: { draw: 'a split paper floor plan, a chemistry lab with a tall reagent cabinet and burners on the left and a gymnasium with hanging ceiling lights and a basketball hoop on the right, small paper warning pins hovering', banner: '장소마다 위험이 달라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '평면은 가상이다. 우리 학교 실험실·체육관의 실제 위험물은 교사가 사진이나 현장 확인으로 덧붙인다.',
      }),
      M({
        id: 'intro.hazard-chart', type: 'intro', title: '장소별 위험 요인 표',
        method: '예시 장소별 위험 표 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '두 장소(실험실·교실)만 견준다.', base: '세 곳 이상을 견주어 위험 요인이 가장 많은 곳을 근거로 고른다.', challenge: '요인 수가 많은 것과 실제로 더 위험한 것이 같은지 해석해 말한다.' },
        intro: {
          teacher: '"예시 자료예요. 장소마다 흔들릴 때 위험해지는 요인(넘어질 것·떨어질 것·불·약품)을 세어 본 막대예요. 어디가 가장 많나요?" 시연 단추로 실험실 막대가 골라지는 모습을 보여 준다. "강당은 넓으니까 요인이 적겠죠"라는 말이 나오면 "강당 천장과 무대 조명은 어떤가요?"라고 묻는다. 수가 많다고 늘 더 위험한 것은 아니고, 요인의 종류가 행동을 바꾼다는 점을 짚는다.',
          student: '예시 막대에서 위험 요인이 가장 많은 장소를 찾고, 그 장소가 왜 그런지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '장소별 위험 요인 수(예시 자료, 실제 통계 아님)', unit: '개', xLabel: '장소', yLabel: '요인 수', data: HAZ, showTable: true, question: '요인이 가장 많은 장소는?', choices: HAZ.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'four paper bar columns standing as tiny school rooms, a lab with flasks on top of the tallest, an auditorium with stage lights, a gym with a hoop and a classroom with desks', banner: '어디가 더 위험할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '요인 수는 수업용 예시다.',
      }),

      M({
        id: 'activity.lab-choice', type: 'activity', title: '실험 중 흔들림',
        method: '실험 중 흔들림 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(흔들릴 때·멈춘 뒤)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(대피 길의 깨진 약품까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "정리부터"·"넓으면 안전" 카드를 걸러 낸다.' },
        activity: {
          title: '실험 중 흔들림', tool: 'dilemma',
          teacher: '"가열 실험 중에 흔들림이 시작됐어요. 비커와 시약병이 눈앞에 있어요. 무엇부터 할까요?" 선택마다 결과를 소리 내어 읽게 한다. \'시약병 정리\'를 고른 학생에게 "흔들리는 동안 손이 시약장 앞에 있으면 무엇이 떨어지나요?"라고 묻는다. 멈춘 뒤 장면에서는 지진 뒤의 불이 더 큰 사고가 될 수 있다는 점, 불·가스 정리는 흔들림이 멈춘 뒤 선생님 지시에 따라 한다는 점을 짚는다.',
          task: '실험 중 흔들림 갈림길을 따라가며 몸 보호·불 정리·대피를 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('가열 실험 중 흔들릴 때부터 안전하게 대피하는 길을 고르세요.', LAB, [['cover', 'off', 'detour']], LAB_R, ['body', 'fire'], { d: 0.4 }),
            EXPLOREQ('시약병 정리·바로 뛰기 길도 끝까지 가 보고 결과를 견주세요.', LAB, LAB_R, ['정리부터 한 길의 결과를 확인했다', '흔들릴 때 뛴 길과 견주었다'], { d: 0.35 }),
            DILQ('체육관에서 흔들릴 때 알맞은 길을 고르세요.', GYM, [['low', 'exit']], GYM_R, ['above', 'after'], { d: 0.35, more: { conclude: '실험실은 약품·불에서 떨어지고, 체육관은 매달린 것 아래를 피해요. 장소가 바뀌면 몸 보호 자리도 바뀌어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"실험 중이면 정리부터 한다"가 왜 위험한지 갈림길 결과를 근거로 한 문장으로 쓰세요.' }] },
        notes: '가상 상황이다. 실험실 지진 대피와 가스·가열 기구 정리 순서는 학교 실험실 안전 매뉴얼과 국민재난안전포털 지진 행동요령으로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'activity.drill-run', type: 'activity', title: '체육관 지진 대피 훈련',
        method: '체육관 지진 대피 훈련', tool: 'timer', minutes: 16,
        levels: { easy: '대피 순서 카드 3장만 차례로 놓고 훈련한다.', base: '순서 카드 4장을 놓고 안전 점검을 확인한 뒤 실험실 순서도 놓는다.', challenge: '실험실 순서를 놓으면서 훈련에 걸린 시간을 재어 적는다.' },
        activity: {
          title: '체육관 지진 대피 훈련', tool: 'timer',
          teacher: '"체육관에서 흔들림이 시작되면 어디에 몸을 둘까요? 오늘은 실제로 자리를 찾아 몸을 낮춰 봐요." 순서 카드와 안전 점검을 끝낸 뒤 교사 신호에 맞춰 훈련한다. \'출구 이동\'을 첫 카드로 둔 학생에게 "흔들리는 동안 걷는 사람 위로 조명이 떨어진다면요?"라고 묻는다. "훈련은 형식일 뿐이다"라는 학생에게는 실제로 매달린 것 아래를 피할 자리를 찾은 사람이 몇 명인지 함께 세어 보게 한다.',
          task: '지진 대피 순서 카드를 맞추고 안전 점검을 한 뒤 체육관에서 훈련해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '체육관에서 흔들림이 시작됐을 때 대피 순서 카드를 놓고, 훈련 전 안전 점검을 모두 확인하세요.', toolOptions: { title: '체육관 지진 대피', cards: ['운동장에서 인원 확인', '흔들림이 멈출 때까지 기다리기', '매달린 것 아래를 피해 몸 보호', '출입문으로 줄지어 이동'], safety: ['바닥에 공·기구가 흩어져 있지 않다', '훈련 신호를 모두 들었다', '몸이 불편한 친구를 도울 사람을 정했다'] }, target: { order: ['매달린 것 아래를 피해 몸 보호', '흔들림이 멈출 때까지 기다리기', '출입문으로 줄지어 이동', '운동장에서 인원 확인'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '체육관 지진 대피 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['출입문으로 줄지어 이동', '매달린 것 아래를 피해 몸 보호', '흔들림이 멈출 때까지 기다리기'], safety: [] }, target: { order: ['매달린 것 아래를 피해 몸 보호', '흔들림이 멈출 때까지 기다리기', '출입문으로 줄지어 이동'] } } } },
            { prompt: '실험실에서 흔들림이 시작됐을 때 순서 카드를 놓으세요.', toolOptions: { title: '실험실 지진 대피', cards: ['선생님 지시로 불·가스 정리', '시약장에서 떨어져 실험대 아래로', '깨진 약품을 피해 대피', '흔들림이 멈출 때까지 기다리기'] }, target: { order: ['시약장에서 떨어져 실험대 아래로', '흔들림이 멈출 때까지 기다리기', '선생님 지시로 불·가스 정리', '깨진 약품을 피해 대피'] }, difficulty: 0.35,
              levels: { challenge: { prompt: '실험실 순서 카드를 놓고, 체육관 훈련에 걸린 시간을 재어 적으세요(시간 기록).', toolOptions: { fields: [{ label: '체육관 훈련에 걸린 시간', unit: '초', step: 1 }], stopwatch: true }, target: { order: ['시약장에서 떨어져 실험대 아래로', '흔들림이 멈출 때까지 기다리기', '선생님 지시로 불·가스 정리', '깨진 약품을 피해 대피'], records: true } } } },
            DONEQ('교사 신호에 맞춰 체육관에서 몸 보호 자리를 찾고 출입문까지 걸어 나가는 훈련을 하고 해 보았어요를 누르세요.', '체육관 지진 대피 훈련', '반과 함께 훈련해 보았어요', { conclude: '흔들릴 때 몸 보호 → 멈춤 기다리기 → 위험물을 피해 이동 → 인원 확인. 장소마다 몸 보호 자리를 미리 알아 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장소별 몸 보호 자리를 쓰세요.', columns: ['장소', '피할 것', '몸 보호 자리'], cells: [['체육관', '', ''], ['실험실', '', '']] }] },
        notes: '실제 훈련은 학교 재난 대비 훈련 계획에 맞춰 교사 인솔 아래 한다. 기록한 시간은 우리 반 기록일 뿐 기준 시간이 아니다.',
      }),
      M({
        id: 'activity.drill-report', type: 'activity', title: '지진 훈련 평가 보고서',
        method: '훈련 평가 보고서', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '잘된 점·병목·개선안 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 개선안을 학교에 내는 제안으로 바꾼다.' },
        activity: {
          title: '지진 훈련 평가 보고서', tool: 'rubric-writing',
          teacher: '"방금 한 훈련(또는 지난 훈련)을 평가해 봐요. 평가는 잘했다·못했다가 아니라 어디서 막혔는지 찾는 일이에요." 병목 칸에서 "느렸다"만 쓴 학생에게 "어디에서, 왜 느렸나요? 출입문인가요, 계단인가요?"라고 묻는다. 개선안에서 "더 빨리 하자"를 쓴 학생에게는 "무엇을 바꾸면 빨라질까요?"라고 되묻는다. 훈련 평가는 다음 실제 상황의 몇 초를 버는 글이라는 점을 짚는다.',
          task: '지진 대피 훈련의 잘된 점·병목·개선안을 보고서로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('훈련에서 잘된 점을 2~3문장으로 쓰세요.', '지진 대피 훈련에서 잘된 점을 실제로 본 장면으로 쓰세요.', ['본 장면을 구체적으로 썼다', '왜 잘된 것인지 까닭을 썼다', '친구 이름을 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['몸', '보호', '줄']], starter: '우리 반은 ~할 때 ~했다. 그래서 ~', plus: '다음 훈련에도 지킬 점으로 맺었다', d: 0.35 }),
            RWQ('훈련에서 막힌 곳(병목)을 2~3문장으로 쓰세요.', '대피가 느려지거나 헷갈린 곳이 어디였는지, 왜 그랬는지 쓰세요.', ['막힌 장소를 썼다', '막힌 까닭을 썼다', '사람을 탓하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['출입문', '계단', '복도', '줄']], starter: '~에서 사람이 몰려 ~', plus: '병목이 실제 상황에서 낳을 결과를 썼다', d: 0.4 }),
            RWQ('병목을 줄일 개선안을 2~3문장으로 쓰세요.', '찾은 병목을 줄이기 위해 다음 훈련에서 바꿀 것을 쓰세요.', ['병목과 이어진 개선안이다', '누가·무엇을 바꿀지 구체적이다', '훈련에서 실제로 해 볼 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['바꾸', '나누', '정하']], starter: '다음 훈련에서는 ~을 ~로 바꾼다.', plus: '학교에 낼 제안 한 줄로 바꾸어 썼다', d: 0.4, more: { conclude: '훈련 평가는 막힌 곳을 찾아 다음에 몇 초를 버는 일이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '훈련 평가를 정리하세요.', columns: ['잘된 점', '병목', '개선안'], cells: [['', '', '']] }] },
      }),

      M({
        id: 'wrap.place-map', type: 'wrap', title: '장소별 지진 행동',
        method: '장소별 행동 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 실험실·체육관 두 가지를 함께 채운다.', base: '실험실·체육관·강당 세 가지에 핵심 행동을 단다.', challenge: '교실까지 네 가지에 핵심 행동을 단다.' },
        wrap: {
          teacher: '"\'지진\'에 장소별 가지를 달아 봐요. 실험실·체육관·강당·교실에서 핵심 행동 하나씩." 카드를 단 뒤 \'넓은 곳 가운데 서기\'가 어디에도 들어가지 않는 까닭을 묻는다. 출구 2번에서 \'흔들릴 때 바로 뛰어나간다\'를 고르는 학생에게 실험실 갈림길의 넘어진 장면을 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '지진', slots: ['실험실', '체육관', '강당', '교실'], cards: ['시약장에서 떨어져 실험대 아래로', '천장 조명 아래 피하기', '무대 조명·현수막에서 떨어지기', '책상 아래로 들어가기', '넓은 곳 가운데 서기'] }, prompt: '장소별 핵심 행동 카드를 가지에 다세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { 실험실: ['시약장에서 떨어져 실험대 아래로'], 체육관: ['천장 조명 아래 피하기'], 강당: ['무대 조명·현수막에서 떨어지기'], 교실: ['책상 아래로 들어가기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '흔들림이 시작됐을 때 모든 장소에 공통인 행동은?', options: ['바로 출구로 뛴다', '떨어지는 것을 피해 몸을 보호하고 멈출 때까지 기다린다', '물건을 정리한다'], answer: 1, difficulty: 0.1, explain: '흔들리는 동안은 몸을 보호하고, 멈춘 뒤 대피해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '장소별 지진 행동',
          items: [
            { type: 'table', prompt: '장소별 핵심 행동을 쓰세요.', columns: ['장소', '핵심 행동'], cells: [['실험실', ''], ['체육관', ''], ['강당', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '넓은 곳이라도 머리 위에 ___ 것이 있으면 위험하다.', answer: '매달린(떨어질)' },
          ],
        },
      }),
      M({
        id: 'wrap.drill-check', type: 'wrap', title: '지진 훈련 점검표',
        method: '훈련 점검표', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 앞의 세 항목만 함께 읽고 표시하게 한다.', base: '네 항목을 스스로 표시한다.', challenge: '다섯 항목을 모두 확인하고 표시 못 한 항목을 다음 훈련 목표로 쓴다.' },
        wrap: {
          teacher: '"훈련에서 내가 실제로 한 것만 표시해 봐요. 표시 못 한 것이 다음 훈련 목표예요." 모두 표시한 학생에게 "몸 보호 자리에서 머리 위에 무엇이 있었는지 말해 볼까요?"라고 구체적으로 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '나의 지진 훈련 점검', items: [{ id: 'spot', text: '매달린 것 아래를 피해 자리를 찾았다' }, { id: 'head', text: '머리를 감싸 보호했다' }, { id: 'wait', text: '흔들림이 멈출 때까지 기다렸다' }, { id: 'walk', text: '뛰지 않고 줄지어 나갔다' }, { id: 'count', text: '모인 곳에서 인원 확인에 답했다' }] }, prompt: '훈련에서 내가 한 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '"훈련은 형식일 뿐이다"에 대한 가장 알맞은 답은?', options: ['맞다, 실제와는 다르다', '훈련에서 익힌 순서가 실제 상황에서 몸으로 나온다', '훈련은 선생님만 하면 된다'], answer: 1, difficulty: 0.15, explain: '실제 상황에서는 생각할 시간이 짧아 익힌 순서가 먼저 나와요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '지진 훈련 점검',
          items: [
            { type: 'check', prompt: '훈련에서 한 것에 표시하세요.', options: ['자리 찾기', '머리 보호', '멈춤 기다리기', '줄지어 나가기', '인원 확인'] },
            { type: 'short', prompt: '다음 훈련에서 내가 고칠 것 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 가스 폭발·붕괴 사례 원인과 대응 (11학년)
  // ======================================================================================================
  {
    const M = MOD('collapse-gas', [11]);
    const SIGN = [['1월', 2], ['2월', 3], ['3월', 5], ['4월', 9], ['5월', 14]];
    const GAS = { text: '주말에 아르바이트하는 상가 분식집, 문을 열고 들어서자 가스 냄새가 진하게 난다. 사장님은 아직 오지 않았다.', who: '나', choices: [
      { id: 'light', text: '어두워서 전등 스위치를 켜고 냄새 나는 곳을 찾는다', result: '스위치를 누르는 순간이 가장 위험한 순간이 될 수 있다.', impact: [{ who: '나', text: '불꽃이 튈 위험을 만든다', tone: -1 }], why: '가스 냄새가 날 때는 전기 스위치를 건드리지 않아요.', ending: '가스가 찬 곳의 작은 불꽃은 폭발이 될 수 있다.' },
      { id: 'out', text: '스위치는 건드리지 않고 문과 창을 열어 둔 채 밖으로 나온다', result: '가게 밖 바람 부는 곳으로 나온다.', impact: [{ who: '나', text: '가스에서 떨어진다', tone: 1 }],
        next: { text: '가게 밖에 나왔다. 옆 가게 사람들은 냄새를 아직 모른다.', choices: [
          { id: 'call', text: '밖에서 119와 가스 회사에 알리고 사장님께도 연락한다', result: '출동한 사람들이 밸브를 잠그고 누출 곳을 찾는다.', impact: [{ who: '상가', text: '전문가가 빨리 온다', tone: 1 }],
            next: { text: '기다리는 사이 손님 몇 명이 가게로 들어가려 한다.', choices: [
              { id: 'warn', text: '가스 냄새가 나서 신고했다고 알리고 건물 앞을 비우게 한다', result: '손님들과 옆 가게 사람들이 건물에서 떨어진다.', impact: [{ who: '이웃 가게', text: '함께 위험을 피한다', tone: 1 }], ending: '알리고, 나오고, 신고하고, 주변을 비우는 것까지가 대응이다.' },
              { id: 'serve', text: '손님을 놓치기 싫어 문 앞에서 주문을 받는다', result: '사람들이 누출 건물 앞에 모여 있다.', impact: [{ who: '손님들', text: '위험한 곳에 머문다', tone: -1 }], why: '누출이 확인될 때까지 건물 앞을 비워요.', ending: '장사보다 사람을 건물에서 떨어뜨리는 것이 먼저다.' }] } },
          { id: 'smoke', text: '놀란 마음을 진정하려고 가게 앞에서 담배 피우는 손님 옆에 선다', result: '가스 냄새 나는 문 앞에 불씨가 있다.', impact: [{ who: '주변 사람들', text: '불씨 가까이 있다', tone: -1 }], why: '누출된 곳 가까이에는 불씨가 없어야 해요.', ending: '밖에 나왔어도 불씨를 멀리해야 한다.' }] } },
      { id: 'fan', text: '환풍기를 켜서 가스를 빼낸다', result: '환풍기 전원을 넣는 소리가 난다.', impact: [{ who: '나', text: '전기 불꽃 위험을 만든다', tone: -1 }], why: '환풍기도 전기 제품이라 켜지 않아요.', ending: '빼내려는 장치가 불을 붙이는 장치가 될 수 있다.' }] };
    const GAS_R = [{ id: 'spark', text: '가스 냄새가 날 때 전기 스위치·불씨는 건드리지 않는다' }, { id: 'tell', text: '밖으로 나온 뒤 신고하고 주변에 알린다' }, { id: 'expert', text: '징후는 전문가만 알아본다', why: '가스 냄새는 누구나 맡을 수 있는 징후예요.' }, { id: 'luck', text: '사고는 운이 나빠서 생긴다', why: '대부분의 사고에는 미리 볼 수 있던 징후가 있어요.' }];
    const MALL = { title: '가상 상가 건물 1층', grid: [6, 4], places: [{ name: '우리 가게', icon: 'market', at: [1, 1] }, { name: '금 간 기둥', icon: 'dot', at: [3, 1] }, { name: '정문 출구', icon: 'dot', at: [3, 3] }, { name: '뒷문 출구', icon: 'dot', at: [0, 3] }, { name: '관리사무소', icon: 'office', at: [5, 1] }, { name: '길 건너 공원', icon: 'park', at: [5, 3] }] };

    MODS.push(
      M({
        id: 'intro.case-line', type: 'intro', title: '사례 징후 시간축',
        method: '사례 징후 시간축', tool: 'timeline', minutes: 7,
        levels: { easy: '앞의 카드 3장(금·문 안 닫힘·신고 미룸)만 함께 놓는다.', base: '카드 5장을 시간 차례로 놓고 멈출 수 있던 지점 하나를 말한다.', challenge: '카드 5장을 놓은 뒤 멈출 수 있던 지점을 두 곳 골라 누가 무엇을 했어야 하는지 말한다.' },
        intro: {
          teacher: '"실명 없이 재구성한 가상 사례예요. 한 건물이 무너지기까지 몇 달 동안 무슨 일이 있었을까요?" 시연 단추로 징후 카드가 시간 차례로 놓이는 모습을 보여 준다. "무너진 건 운이 나빴던 거예요"라는 말이 나오면 "이 카드들 가운데 아무도 몰랐던 일이 있나요?"라고 되묻는다. 징후는 여러 번 보였고, 알린 사람과 미룬 사람이 있었다는 점을 짚는다.',
          student: '재구성 사례의 징후 카드를 시간 차례로 놓고, 어느 지점에서 멈출 수 있었는지 찾아보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: ['천장에서 부스러기와 소리', '벽에 가는 금이 감', '건물 일부가 무너짐', '금이 넓어지고 문이 잘 안 닫힘', '관리실에 알렸으나 점검이 미뤄짐'] }, sequence: [{ order: ['벽에 가는 금이 감', '금이 넓어지고 문이 잘 안 닫힘', '관리실에 알렸으나 점검이 미뤄짐', '천장에서 부스러기와 소리', '건물 일부가 무너짐'] }] },
          art: { draw: 'a paper building with a crack slowly widening across five paper panels along a timeline ribbon, a small paper notice board with an unanswered report pinned to it', banner: '징후는 먼저 왔다', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 사고 이름·장소·피해자를 쓰지 않은 재구성 사례다.',
      }),
      M({
        id: 'intro.sign-chart', type: 'intro', title: '징후 신고 횟수 그래프',
        method: '예시 징후 보고 횟수 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '막대 셋(1~3월)만 함께 읽는다.', base: '막대 다섯을 읽고 신고가 가장 많은 달을 찾는다.', challenge: '늘어난 신고를 보고 관리자가 물어야 할 질문을 하나 만든다.' },
        intro: {
          teacher: '"예시 자료예요. 한 건물에 들어온 \'벽 금·문 틀어짐\' 신고 횟수를 달마다 센 막대예요. 무엇이 보이나요?" 시연 단추로 5월 막대가 골라지는 모습을 보여 준다. "신고가 많으면 사람들이 예민한 거죠"라는 말이 나오면 "같은 건물에서 달마다 늘어난다면, 사람이 예민해진 걸까요, 건물이 변한 걸까요?"라고 되묻는다. 늘어나는 징후는 관리자가 점검을 앞당기라는 신호라는 점을 짚는다.',
          student: '예시 막대에서 징후 신고가 어떻게 바뀌었는지 읽고, 그 변화가 무엇을 뜻하는지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '건물 징후 신고 횟수(예시 자료, 실제 통계 아님)', unit: '건', xLabel: '달', yLabel: '신고 수', data: SIGN, question: '신고가 가장 많은 달은?', choices: SIGN.map((x) => x[0]) }, sequence: [{ pick: 4 }] },
          art: { draw: 'paper bar columns growing taller month by month beside a paper building with a crack, a stack of paper report slips on the manager desk', banner: '늘어나는 신고의 뜻', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '신고 횟수는 수업용 예시다.',
      }),

      M({
        id: 'activity.cause-report', type: 'activity', title: '사고 원인 분석',
        method: '사례 원인 분석', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '직접 원인·관리 원인·예방 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 예방 칸을 제도(점검 의무·신고 처리) 제안으로 쓴다.' },
        activity: {
          title: '사고 원인 분석', tool: 'rubric-writing',
          teacher: '"재구성 사례의 원인을 두 겹으로 나눠 봐요. 무엇이 직접 무너뜨렸나(직접 원인), 왜 그때까지 막지 못했나(관리 원인)." 관리 원인 칸을 비우는 학생에게 "신고가 들어왔을 때 누가 무엇을 미뤘나요?"라고 묻는다. "관리 책임은 나와 상관없다"는 학생에게는 "이용하는 사람이 징후를 알리는 것도 관리의 한 고리일까요?"라고 되묻는다. 원인 분석은 탓할 사람을 찾기보다 고리를 끊을 자리를 찾는 일이라는 점을 짚는다.',
          task: '재구성 사례의 직접 원인·관리 원인·예방을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('사례의 직접 원인을 2~3문장으로 쓰세요.', '재구성 사례: 벽의 금이 넓어지고 천장에서 소리가 나다 건물 일부가 무너졌다. 무엇이 직접 원인이었을지 사례 속 사실로 쓰세요.', ['사례 속 사실을 근거로 썼다', '짐작은 짐작이라고 밝혔다', '실제 사고·사람 이름을 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['금', '구조', '기둥']], starter: '직접 원인은 ~이었을 것이다. 왜냐하면 ~', plus: '직접 원인이 언제부터 보였는지 썼다', d: 0.35 }),
            RWQ('사례의 관리 원인을 2~3문장으로 쓰세요.', '징후가 보였는데도 왜 사고를 막지 못했는지, 관리의 고리에서 찾아 쓰세요.', ['누가 무엇을 미뤘는지 썼다', '징후가 무시된 결과를 썼다', '이용자의 역할도 짚었다'], { min: 40, max: 300, sent: [2, 3], must: [['점검', '신고', '미뤄']], starter: '신고가 들어왔지만 ~', plus: '관리 원인을 끊을 자리를 하나 짚었다', d: 0.4 }),
            RWQ('같은 사고를 막을 예방 방법을 2~3문장으로 쓰세요.', '건물 관리자와 이용자가 각각 할 수 있는 예방 방법을 쓰세요.', ['관리자와 이용자를 나누어 썼다', '원인과 이어진 예방이다', '실제로 할 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['관리자', '이용자']], starter: '관리자는 ~하고, 이용자는 ~', plus: '점검·신고 처리 같은 제도 제안을 넣었다', d: 0.4, more: { conclude: '사고는 운이 아니라 이어진 고리에서 생겨요. 직접 원인과 관리 원인을 함께 봐야 끊을 자리가 보여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례의 원인을 두 겹으로 정리하세요.', columns: ['', '내용', '끊을 방법'], cells: [['직접 원인', '', ''], ['관리 원인', '', '']] }] },
        notes: '실제 사고를 실명으로 다루지 않는다. 피해자·유가족을 떠올리게 하는 표현을 쓰지 않는다.',
      }),
      M({
        id: 'activity.gas-choice', type: 'activity', title: '상가 가스 냄새',
        method: '상가 가스 냄새 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(가게 안·가게 밖)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(손님이 들어오려는 장면까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "운이 나빠서"·"전문가만 안다" 카드를 걸러 낸다.' },
        activity: {
          title: '상가 가스 냄새', tool: 'dilemma',
          teacher: '"아르바이트하는 가게 문을 열었는데 가스 냄새가 진해요. 어두워서 불부터 켜고 싶다면?" 선택마다 결과를 읽게 한다. \'전등 켜기\'·\'환풍기 켜기\'를 고른 학생에게 "스위치를 누를 때 작은 불꽃이 튈 수 있다면, 가스가 찬 방에서는 무슨 일이 생길까요?"라고 묻는다. 가게 밖 장면에서는 신고와 함께 주변 사람에게 알리기(전파)가 대응의 일부라는 점을, 마지막 장면에서는 장사보다 사람을 건물에서 떨어뜨리는 것이 먼저라는 점을 짚는다.',
          task: '상가 가스 냄새 갈림길을 따라가며 대피·신고·전파를 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('가스 냄새를 맡은 순간부터 나오고 신고하고 주변을 비우는 길을 고르세요.', GAS, [['out', 'call', 'warn']], GAS_R, ['spark', 'tell'], { d: 0.4 }),
            EXPLOREQ('전등·환풍기를 켠 길도 끝까지 가 보고 결과를 견주세요.', GAS, GAS_R, ['스위치를 건드린 길의 결과를 확인했다', '주변에 알린 길과 알리지 않은 길을 견주었다'], { d: 0.35 }),
            DILQ('누출 신고 뒤 건물 앞에 사람들이 모일 때를 다시 따라가 보세요.', GAS.choices[1].next, [['call', 'warn']], GAS_R, ['tell'], { d: 0.35, more: { conclude: '가스 냄새: 불꽃 만들지 않기 → 문 열고 나오기 → 밖에서 신고 → 주변 비우기.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가스 냄새가 날 때 전등 스위치를 켜면 안 되는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '가상 상황이다. 가스 누출 때 행동 요령과 신고처는 한국가스안전공사·국민재난안전포털 안내로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'activity.tabletop-map', type: 'activity', title: '붕괴 도상 훈련 경로',
        method: '붕괴 도상 훈련 경로', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 그 칸의 장소 이름이 바로 보인다.', base: '위험 구역·출구·집결지에 핀을 꽂는다.', challenge: '읽기 글자는 맞힌 뒤에만 보이고, 정문이 막힌 조건 문항에서 다른 출구를 까닭과 함께 고른다.' },
        activity: {
          title: '붕괴 도상 훈련 경로', tool: 'map',
          teacher: '"가상 상가 1층 평면이에요. 기둥에 금이 가고 천장에서 소리가 나요. 우리 가게에서 어디로 나갈까요?" 핀을 꽂기 전에 피할 곳부터 찾게 한다. 가장 가까운 정문으로 가며 금 간 기둥 옆을 지나는 길을 고르는 학생에게 "그 기둥 옆을 지나는 몇 초는 안전할까요?"라고 묻는다. 신고는 건물 밖 집결지처럼 안전한 곳에서 한다는 점과, 집결지는 건물 높이보다 멀리 떨어진 곳이 좋다는 일반 안내를 교사가 공식 자료로 확인해 짚는다.',
          task: '가상 상가 평면에서 피할 곳·출구·집결지에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '천장에서 소리가 나고 기둥에 금이 갔어요. 가장 먼저 피해야 할 곳에 핀을 꽂으세요.', toolOptions: MALL, target: { place: '금 간 기둥' }, difficulty: 0.2 },
            { prompt: '건물에서 나와 모일 곳, 신고할 안전한 곳에 핀을 꽂으세요.', toolOptions: MALL, target: { place: '길 건너 공원' }, difficulty: 0.25 },
            { prompt: '정문 출구 앞에 천장 판이 떨어져 막혔어요. 대신 나갈 출구에 핀을 꽂으세요.', toolOptions: MALL, target: { place: '뒷문 출구' }, difficulty: 0.3 },
            { prompt: '건물 밖에 나왔어요. 신고하기 가장 알맞은 때와 자리를 고르세요.', toolOptions: Object.assign({}, MALL, { readOnly: true, ask: { q: '언제·어디서 신고할까요?', choices: ['가게 안에서 짐을 챙기며 바로', '건물에서 떨어진 공원에 닿은 뒤', '관리사무소에 들러 직원과 함께'], why: ['건물 안에 머무는 시간이 길어져요.', '', '금 간 건물 안으로 다시 들어가게 돼요.'] } }), target: { pick: 1 }, difficulty: 0.35, conclude: '붕괴 징후: 위험 구역 피하기 → 막히지 않은 출구 → 건물에서 먼 집결지 → 그곳에서 신고.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 자주 가는 건물 하나의 대피 계획을 쓰세요.', columns: ['출구 1', '출구 2', '집결지'], cells: [['', '', '']] }] },
        notes: '평면은 가상이다. 붕괴 위험 때 집결지 거리 같은 기준은 국민재난안전포털 안내로 확인해 제시한다.',
      }),
      M({
        id: 'activity.tabletop-order', type: 'activity', title: '붕괴 도상 훈련 순서',
        method: '도상 훈련 역할과 순서', tool: 'timer', minutes: 16,
        levels: { easy: '행동 순서 카드 3장만 차례로 놓는다.', base: '카드 4장을 차례로 놓고 도상 훈련 전 점검을 확인한 뒤 역할 카드를 놓는다.', challenge: '인원 확인까지 다섯 장을 놓고, 역할 카드를 놓은 뒤 지도에서 짚는다.' },
        activity: {
          title: '붕괴 도상 훈련 순서', tool: 'timer',
          teacher: '"징후를 발견한 순간부터 모두가 안전해지기까지의 순서를 맞춰 봐요. 그다음 앞 활동의 상가 지도에서 손가락으로 짚어 봐요." \'신고\'를 첫 카드로 둔 학생에게 "건물 안에서 통화하는 동안 옆 사람은 위험을 알까요?"라고 묻는다. 역할 카드에서 확인 담당이 없는 모둠에게 "몇 명이 나왔는지 누가 알고 있나요?"라고 묻는다. 도상 훈련은 지도 위에서 판단을 미리 해 두는 훈련이라는 점을 짚는다.',
          task: '붕괴 징후 때 행동 순서와 역할 카드를 맞추고 지도에서 짚은 뒤 해 보았어요를 눌러요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '기둥 금과 천장 소리를 발견했을 때 행동 순서 카드를 놓고, 도상 훈련 전 점검을 확인하세요.', toolOptions: { title: '붕괴 징후 때 순서', cards: ['안전한 곳에서 119 신고', '징후 발견', '주변에 큰 소리로 알림', '위험 구역 피해 대피'], safety: ['상가 평면 지도를 펼쳤다', '출구 두 곳을 찾았다'] }, target: { order: ['징후 발견', '주변에 큰 소리로 알림', '위험 구역 피해 대피', '안전한 곳에서 119 신고'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '붕괴 징후 때 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['위험 구역 피해 대피', '징후 발견', '주변에 큰 소리로 알림'], safety: [] }, target: { order: ['징후 발견', '주변에 큰 소리로 알림', '위험 구역 피해 대피'] } },
                challenge: { prompt: '붕괴 징후 때 순서 카드 5장을 놓고 도상 훈련 전 점검을 확인하세요(인원 확인까지).', toolOptions: { cards: ['안전한 곳에서 119 신고', '집결지에서 인원 확인', '징후 발견', '주변에 큰 소리로 알림', '위험 구역 피해 대피'] }, target: { order: ['징후 발견', '주변에 큰 소리로 알림', '위험 구역 피해 대피', '안전한 곳에서 119 신고', '집결지에서 인원 확인'], safety: true } } } },
            { prompt: '도상 훈련에서 모둠 역할 카드를 일하는 차례로 놓으세요.', toolOptions: { title: '도상 훈련 역할', cards: ['확인 담당: 집결지에서 인원을 셈', '알림 담당: 주변에 크게 알림', '신고 담당: 공원에서 위치·상황을 신고'] }, target: { order: ['알림 담당: 주변에 크게 알림', '신고 담당: 공원에서 위치·상황을 신고', '확인 담당: 집결지에서 인원을 셈'] }, difficulty: 0.3 },
            DONEQ('모둠이 정한 순서·역할대로 상가 지도에서 우리 가게부터 공원까지 손가락으로 짚어 보고 해 보았어요를 누르세요.', '붕괴 대피 도상 훈련', '지도 위에서 길을 짚어 보았어요', { conclude: '발견 → 알림 → 대피 → 안전한 곳에서 신고 → 인원 확인. 역할을 나누면 빠뜨리는 고리가 줄어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '119에 붕괴 징후를 신고할 때 말할 내용을 순서대로 쓰세요(위치·무슨 일·사람).' }] },
        notes: '붕괴 대피 도상 훈련이다.',
      }),

      M({
        id: 'wrap.tabletop-check', type: 'wrap', title: '붕괴 도상 훈련 점검',
        method: '도상 훈련 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 앞의 세 항목만 함께 읽고 표시하게 한다.', base: '네 항목을 스스로 표시한다.', challenge: '다섯 항목을 모두 확인하고, 내가 맡은 역할에서 고칠 점을 쓴다.' },
        wrap: {
          teacher: '"도상 훈련에서 우리 모둠이 실제로 짚은 것만 표시해 봐요." 표시한 뒤 출구 2번을 함께 푼다. \'관리 책임은 나와 상관없다\'를 고르는 학생에게 "오늘 첫 카드는 누가 발견한 징후였나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '붕괴 도상 훈련 점검', items: [{ id: 'avoid', text: '위험 구역을 먼저 찾았다' }, { id: 'two', text: '출구 두 곳을 짚었다' }, { id: 'meet', text: '건물에서 먼 집결지를 정했다' }, { id: 'call', text: '신고할 때와 자리를 정했다' }, { id: 'role', text: '역할을 나누어 맡았다' }] }, prompt: '도상 훈련에서 한 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '건물에서 징후를 본 이용자가 할 일로 가장 알맞은 것은?', options: ['관리자 일이니 그냥 지나간다', '관리사무소·신고 기관에 알린다', '단체방에 사진만 올린다'], answer: 1, difficulty: 0.15, explain: '이용자가 알리는 것도 사고를 막는 관리의 한 고리예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '붕괴 도상 훈련 점검',
          items: [
            { type: 'check', prompt: '훈련에서 한 것에 표시하세요.', options: ['위험 구역 찾기', '출구 두 곳', '집결지', '신고 자리', '역할 나누기'] },
            { type: 'short', prompt: '내가 자주 가는 건물에서 본 징후가 있다면 어디에 알릴지 쓰세요(장소 이름은 쓰지 않아도 돼요).' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 7. 산불·화재 확산과 대피 판단 (11학년)
  // ======================================================================================================
  {
    const M = MOD('wildfire', [11]);
    const HILL = { title: '가상 산 지형(바람: 서쪽에서 동쪽으로)', mode: 'terrain', grid: [6, 4], heights: [[1, 1, 2, 3, 4, 4], [0, 1, 2, 3, 3, 4], [0, 1, 1, 2, 3, 3], [0, 0, 1, 1, 2, 2]], places: [{ name: '불난 곳', icon: 'dot', at: [1, 1] }, { name: '마을', icon: 'house', at: [0, 3] }, { name: '정상', icon: 'mountain', at: [5, 0] }, { name: '논밭', icon: 'field', at: [0, 0] }] };
    const MONTH = [['1월', 6], ['2월', 9], ['3월', 18], ['4월', 16], ['5월', 7], ['6월', 3]];
    const HIKE = { text: '친구들과 등산 중, 능선 아래쪽 숲에서 연기가 피어오른다. 바람이 아래에서 위로 불어 올라온다.', who: '우리 일행', choices: [
      { id: 'up', text: '불에서 멀어지려고 정상 쪽으로 서둘러 올라간다', result: '오르막을 따라 연기가 일행을 뒤쫓아 올라온다.', impact: [{ who: '우리 일행', text: '불이 번지는 쪽에 선다', tone: -1 }], why: '불은 바람을 타고 오르막으로 빨리 번져요.', ending: '산 위로 피하면 불이 번지는 길과 같은 쪽으로 가게 된다.' },
      { id: 'photo', text: '멀리 있으니 사진부터 찍어 올린다', result: '그사이 연기가 눈에 띄게 가까워진다.', impact: [{ who: '우리 일행', text: '대피할 시간을 잃는다', tone: -1 }], why: '불이 멀어 보여도 바람을 타면 금방 다가와요.', ending: '불이 멀다는 느낌은 바람 앞에서 쉽게 틀린다.' },
      { id: 'down', text: '바람과 불이 오는 쪽을 피해 옆 능선의 넓은 길로 내려간다', result: '연기와 멀어지는 쪽으로 걸음을 옮긴다.', impact: [{ who: '우리 일행', text: '불길에서 멀어진다', tone: 1 }],
        next: { text: '길을 내려가며 보니 연기가 더 커졌다. 아직 아무도 신고하지 않은 것 같다.', choices: [
          { id: 'call', text: '걸음을 멈추지 않고 119에 등산로 위치 표지 번호와 연기 방향을 알린다', result: '신고가 접수되고 출동이 시작된다.', impact: [{ who: '산 주변 마을', text: '일찍 대비한다', tone: 1 }],
            next: { text: '내려가는 길 앞쪽까지 연기가 짙게 깔린다.', choices: [
              { id: 'open', text: '나무가 없는 넓은 공터·논밭 쪽으로 피해 몸을 낮추고 안내를 기다린다', result: '탈 것이 적은 곳에서 연기를 피한다.', impact: [{ who: '우리 일행', text: '안전하게 구조를 기다린다', tone: 1 }], ending: '불이 오는 쪽을 피하고, 신고하고, 탈 것이 없는 곳으로 — 대피 방향이 생명을 지킨다.' },
              { id: 'shortcut', text: '숲 속 지름길로 뛰어 내려간다', result: '마른 낙엽 사이에서 길을 잃는다.', impact: [{ who: '우리 일행', text: '탈 것이 많은 곳에 갇힌다', tone: -1 }], why: '숲 속은 탈 것이 많아 불이 번지기 쉬워요.', ending: '빠른 길보다 탈 것이 없는 길이 안전하다.' }] } },
          { id: 'wait', text: '누군가 이미 했겠지 하고 신고하지 않는다', result: '신고가 늦어 불이 커진 뒤에야 출동한다.', impact: [{ who: '산 주변 마을', text: '대비가 늦어진다', tone: -1 }], why: '본 사람이 신고해야 출동이 빨라져요.', ending: '모두가 누군가 했겠지 하면 아무도 하지 않는다.' }] } }] };
    const HIKE_R = [{ id: 'slope', text: '불은 바람을 타고 오르막으로 빨리 번진다' }, { id: 'report', text: '본 사람이 위치를 정확히 신고해야 한다' }, { id: 'far', text: '불이 멀리 보이면 안전하다', why: '바람이 불면 불은 금방 다가와요.' }, { id: 'top', text: '산 위로 올라가면 불을 피할 수 있다', why: '오르막은 불이 번지는 길이에요.' }];
    const CAMP = { text: '캠핑장에서 저녁을 먹고 나니 화로에 숯불이 조금 남았다. 친구가 "어차피 꺼질 거야, 그냥 자자"고 한다.', who: '친구', choices: [
      { id: 'leave', text: '그대로 두고 텐트로 들어간다', result: '밤바람에 불티가 마른 풀 쪽으로 날린다.', impact: [{ who: '캠핑장', text: '불이 옮을 위험이 남는다', tone: -1 }], why: '작은 불씨도 바람에 날려 불이 될 수 있어요.', ending: '작은 불씨를 믿고 자면 바람이 불을 키운다.' },
      { id: 'out', text: '물을 붓고 저어 완전히 꺼졌는지 손을 대 보지 않고 살핀다', result: '김이 오르고 불씨가 사라진다.', impact: [{ who: '캠핑장', text: '불씨가 남지 않는다', tone: 1 }],
        next: { text: '친구가 "산 바로 옆이라 꺼진 재를 풀숲에 버리자"고 한다.', choices: [
          { id: 'bin', text: '식은 재를 정해진 수거함에 버린다', result: '주변 풀숲이 그대로 깨끗하다.', impact: [{ who: '산', text: '불씨가 들어가지 않는다', tone: 1 }], ending: '불씨는 끝까지 끄고 정해진 곳에 버려야 끝난다.' },
          { id: 'bush', text: '풀숲에 털어 버린다', result: '재 속 작은 불씨가 마른 잎에 닿는다.', impact: [{ who: '산', text: '불이 시작될 수 있다', tone: -1 }], ending: '꺼진 것 같은 재에도 불씨가 남을 수 있다.' }] } }] };
    const CAMP_R = [{ id: 'spark', text: '작은 불씨도 바람에 날리면 산불이 된다' }, { id: 'end', text: '불씨는 완전히 끄고 정해진 곳에 버린다' }, { id: 'small', text: '작은 불씨는 저절로 꺼진다', why: '마른 날 바람이 불면 작은 불씨도 번져요.' }];

    MODS.push(
      M({
        id: 'intro.terrain-map', type: 'intro', title: '지형과 바람으로 확산 찾기',
        method: '지형과 바람으로 확산 방향 찾기', tool: 'map', minutes: 7,
        levels: { easy: '불이 번질 칸 하나만 함께 찾는다.', base: '불이 번질 칸 둘(바람 쪽·오르막 쪽)을 말한다.', challenge: '번질 칸 둘을 말한 뒤 사람이 피할 칸(바람을 등진 아래쪽의 탈 것 적은 곳)을 고른다.' },
        intro: {
          teacher: '"가상 산 지형이에요. 진한 색일수록 높고, 바람은 서쪽에서 동쪽으로 불어요. 불이 어느 칸으로 먼저 번질까요?" 시연 단추로 불난 곳 동쪽 칸에 핀이 꽂히는 모습을 보여 준다. "불이 멀면 안전하잖아요"라는 말이 나오면 "바람이 불고 오르막이라면, 불과 내 사이 거리는 얼마나 빨리 줄어들까요?"라고 되묻는다. 바람 방향과 오르막이 확산을 빠르게 한다는 점을 공식 안내로 확인해 짚는다.',
          student: '가상 산 지형에서 바람 방향과 높이를 보고, 불이 먼저 번질 칸과 사람이 피할 칸을 생각해 보세요.',
          demo: { tool: 'map', options: HILL, sequence: [{ from: '불난 곳', dir: '동', steps: 1 }] },
          art: { draw: 'a layered paper mountain with contour layers, a small paper flame on the lower western slope and paper wind arrows blowing east and uphill, a tiny village at the foot of the hill', banner: '불은 어디로 번질까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '지형과 바람은 가상이다. 산불 확산과 대피 요령은 산림청·국민재난안전포털 안내로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'intro.month-chart', type: 'intro', title: '월별 산불 막대 읽기',
        method: '예시 월별 산불 막대', tool: 'chart', minutes: 7,
        levels: { easy: '막대 넷(1~4월)만 함께 읽는다.', base: '막대 여섯을 읽고 산불이 가장 많은 달을 찾는다.', challenge: '많은 시기를 찾은 뒤 그 까닭(마른 날씨·바람·사람의 활동)을 추론해 말한다.' },
        intro: {
          teacher: '"예시 자료예요. 실제 통계가 아니라 계절에 따라 산불 수가 어떻게 달라지는지 보려고 만든 막대예요. 가장 많은 달은?" 시연 단추로 3월 막대가 골라지는 모습을 보여 준다. "여름이 더우니까 산불도 여름에 많겠죠"라는 말이 나오면 "여름에는 비가 많고 풀이 젖어 있어요. 봄 날씨는 어떤가요?"라고 되묻는다. 실제 시기별 통계는 산림청 자료로 확인한다고 덧붙인다.',
          student: '예시 막대에서 산불이 많은 달을 찾고, 그 시기에 왜 많을지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '월별 산불 건수(예시 자료, 실제 통계 아님)', unit: '건', xLabel: '달', yLabel: '건수', data: MONTH, question: '산불이 가장 많은 달은?', choices: MONTH.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'paper bar columns shaped like trees, the tallest ones dry and brown in early spring, small paper wind swirls blowing across them', banner: '언제 산불이 많을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 예시다. 실제 산불 통계는 산림청 자료로 교사가 따로 제시한다.',
      }),

      M({
        id: 'activity.hike-choice', type: 'activity', title: '등산 중 연기',
        method: '등산 중 연기 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(연기를 본 순간·신고)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(연기가 길을 막는 장면까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "멀면 안전"·"산 위로" 카드를 걸러 낸다.' },
        activity: {
          title: '등산 중 연기', tool: 'dilemma',
          teacher: '"등산 중에 아래쪽 숲에서 연기가 올라와요. 바람은 아래에서 위로 불어요. 어느 쪽으로 갈까요?" 선택마다 결과를 소리 내어 읽게 한다. \'정상으로 올라간다\'를 고른 학생에게 "오늘 지형 지도에서 불은 오르막과 내리막 가운데 어디로 빨리 번졌나요?"라고 묻는다. 신고 장면에서는 산에서는 주소 대신 등산로 위치 표지 번호가 위치를 알리는 방법이라는 점을 짚는다.',
          task: '등산 중 연기 갈림길을 따라가며 대피 방향과 신고를 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('등산 중 연기를 본 순간부터 안전한 대피 방향과 신고를 고르세요.', HIKE, [['down', 'call', 'open']], HIKE_R, ['slope', 'report'], { d: 0.4 }),
            EXPLOREQ('정상으로 오른 길과 사진을 찍은 길도 끝까지 가 보고 결과를 견주세요.', HIKE, HIKE_R, ['정상 쪽 길의 결과를 확인했다', '신고가 늦어진 길과 견주었다'], { d: 0.35 }),
            DILQ('캠핑장에 남은 숯불을 두고 알맞은 길을 고르세요.', CAMP, [['out', 'bin']], CAMP_R, ['spark', 'end'], { d: 0.35, more: { conclude: '불씨는 끝까지 끄고, 연기를 보면 불이 오는 쪽을 피해 탈 것이 없는 곳으로 가며 위치를 신고해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"산 위로 피하면 된다"가 왜 위험한지 지형과 바람을 넣어 한 문장으로 쓰세요.' }] },
        notes: '가상 상황이다. 산불 대피 요령과 등산로 위치 표지 활용은 산림청 안내로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'activity.slogan-write', type: 'activity', title: '산불 예방 캠페인 문구',
        method: '예방 캠페인 문구', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 문구와 근거를 쓴다.', base: '문구·근거·대상별 문구 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 대상(등산객·캠핑객)에 맞는 낱말을 고른 까닭까지 밝힌다.' },
        activity: {
          title: '산불 예방 캠페인 문구', tool: 'rubric-writing',
          teacher: '"\'산불 조심\'은 모두 알지만 행동을 바꾸지는 못해요. 읽은 사람이 무엇을 할지 알게 하는 문구를 써 볼까요?" 문구가 \'산을 사랑합시다\'처럼 막연한 학생에게 "이 문구를 읽은 캠핑객은 오늘 밤 무엇을 다르게 할까요?"라고 묻는다. 근거 칸에서는 오늘 본 지형·바람·불씨 이야기를 근거로 쓰게 한다. 겁주는 문구보다 할 행동이 분명한 문구가 힘이 있다는 점을 짚는다.',
          task: '산불 예방 캠페인 문구와 근거를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('산불 예방 캠페인 문구를 한 문장으로 쓰세요.', '읽은 사람이 할 행동이 분명한 산불 예방 문구를 한 문장으로 쓰세요.', ['할 행동이 문구에 들어 있다', '짧아서 한눈에 읽힌다', '겁주는 말 대신 행동을 썼다'], { min: 8, max: 80, sent: [1, 1], starter: '~하지 말고 ~하세요', plus: '대상이 누구인지 드러난다', d: 0.3 }),
            RWQ('그 문구를 고른 근거를 2~3문장으로 쓰세요.', '오늘 배운 지형·바람·불씨 이야기를 근거로, 문구를 그렇게 쓴 까닭을 쓰세요.', ['오늘 배운 사실을 근거로 썼다', '문구와 근거가 이어진다', '짐작은 짐작이라고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['불씨', '바람', '오르막']], starter: '이 문구를 쓴 까닭은 ~ 때문이다.', plus: '근거를 확인할 공식 안내처를 밝혔다', d: 0.4 }),
            RWQ('등산객과 캠핑객에게 각각 맞는 문구를 하나씩 쓰세요.', '대상에 따라 하는 일이 다르면 문구도 달라져요. 등산객용·캠핑객용 문구를 한 문장씩 쓰세요.', ['두 대상의 문구를 모두 썼다', '대상마다 하는 일에 맞췄다', '둘 다 할 행동이 분명하다'], { min: 20, max: 200, sent: [2, 2], must: [['등산'], ['캠핑']], starter: '등산객: ~ / 캠핑객: ~', plus: '대상에 맞는 낱말을 고른 까닭을 덧붙였다', d: 0.4, more: { conclude: '좋은 캠페인 문구는 누가 무엇을 할지 분명하게 말해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반에서 가장 잘 쓴 문구 하나를 골라 그 까닭을 쓰세요(친구 이름은 쓰지 않아요).' }] },
      }),

      M({
        id: 'wrap.poster', type: 'wrap', title: '산불 캠페인 포스터',
        method: '캠페인 포스터', tool: 'collage', minutes: 10,
        levels: { easy: '조각 3개 이상으로 포스터를 꾸민다.', base: '교사가 조각 5개 이상을 권하고 문구를 활동지에 함께 쓴다.', challenge: '밝은 색과 어두운 색을 맞대어 멀리서도 보이게 꾸미도록 교사가 권한다.' },
        wrap: {
          teacher: '"앞에서 쓴 문구를 담을 포스터를 조각으로 꾸며 봐요. 등산로 입구에 붙인다면 몇 걸음 밖에서도 보일까요?" 두세 작품을 보여 주고 "이 포스터를 본 사람은 무엇을 할까요?"라고 묻는다. 출구 2번에서 \'불이 멀면 안전하다\'를 고르는 학생에게 바람이 불을 옮기던 지형 지도를 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'triangle', 'leaf', 'star'] }, prompt: '산불 예방 캠페인 포스터를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['산·숲을 나타내는 조각을 넣었다', '불씨나 불꽃을 나타냈다', '멀리서도 보이게 색을 골랐다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '산불에 대한 말 가운데 맞는 것을 고르세요.', options: ['불이 멀면 안전하다', '산 위로 피하면 된다', '작은 불씨도 바람에 날려 산불이 될 수 있다'], answer: 2, difficulty: 0.15, explain: '마른 날 바람이 불면 작은 불씨도 빠르게 번져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '산불 캠페인',
          items: [
            { type: 'short', prompt: '포스터에 넣을 문구를 쓰세요.' },
            { type: 'check', prompt: '산·야외 활동에서 하지 않을 일에 표시하세요.', options: ['허가 없이 불 피우기', '불씨 그대로 두기', '산 위로 대피하기', '위치 표지 번호 확인하기'] },
          ],
        },
      }),
      M({
        id: 'wrap.self-check', type: 'wrap', title: '산불 대피 스스로 점검',
        method: '스스로 점검', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 앞의 두 항목만 함께 읽고 표시하게 한다.', base: '세 항목을 스스로 표시한다.', challenge: '네 항목을 모두 표시하고, 표시하기 어려운 항목을 짝에게 다시 설명한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 지금 할 수 있는 것만 표시해 봐요." 표시한 뒤 짝끼리 \'대피 방향을 정하는 법\'을 서로 말해 보게 한다. 모든 항목을 표시한 학생에게 "바람이 아래에서 위로 불 때 어느 쪽으로 피할지 말해 볼까요?"라고 하나를 골라 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '산불 대피 스스로 점검' }, prompt: '지금 할 수 있는 것을 스스로 점검해 표시하세요.', target: { selfCheck: ['바람과 지형으로 불이 번질 쪽을 말할 수 있다', '대피 방향을 판단할 수 있다', '산에서 위치를 신고하는 법을 안다', '불씨를 끝까지 끄는 법을 안다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '산에서 119에 신고할 때 위치를 가장 정확히 알리는 방법은?', options: ['"산 중턱이에요"라고 말한다', '등산로 위치 표지 번호를 알린다', '사진을 찍어 올린다'], answer: 1, difficulty: 0.15, explain: '산에는 주소가 없어 위치 표지 번호로 알리면 빨리 찾아와요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '산불 대피 점검',
          items: [
            { type: 'check', prompt: '할 수 있는 것에 표시하세요.', options: ['번질 쪽 찾기', '대피 방향 판단', '위치 신고', '불씨 끄기'] },
            { type: 'short', prompt: '다음 산행·야외 활동 전에 확인할 것 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 폭염·한파와 취약계층 돕기 (11학년)
  // ======================================================================================================
  {
    const M = MOD('heat-health', [11]);
    const TEMP = [['29°C인 날', 3], ['31°C인 날', 5], ['33°C인 날', 9], ['35°C인 날', 16]];
    const ELDER = { text: '폭염경보가 내린 오후, 옆집에 혼자 사시는 어르신이 이틀째 보이지 않는다. 평소 아침마다 복도에서 인사하던 분이다.', who: '나', choices: [
      { id: 'skip', text: '바쁘실 거라 생각하고 지나친다', result: '저녁까지 옆집에서 아무 소리가 없다.', impact: [{ who: '어르신', text: '도움이 필요해도 아무도 모른다', tone: -1 }], why: '연락이 끊긴 것은 돌봄이 필요한 신호일 수 있어요.', ending: '돕는 일을 기관만의 몫으로 두면 가장 가까운 이웃이 빠진다.' },
      { id: 'knock', text: '부모님께 말하고 함께 문을 두드려 안부를 묻는다', result: '한참 뒤 어르신이 힘없는 목소리로 대답한다.', impact: [{ who: '어르신', text: '누군가 찾아왔다', tone: 1 }],
        next: { text: '문을 연 어르신의 얼굴이 붉고 땀이 많으며 어지럽다고 하신다. 방 안이 매우 덥다.', choices: [
          { id: 'cool', text: '시원한 곳으로 모시고 물을 드리며 상태를 지켜본다', result: '어르신이 조금 숨을 돌리신다.', impact: [{ who: '어르신', text: '더위에서 벗어난다', tone: 1 }],
            next: { text: '물을 드셨는데도 어르신이 말이 어눌하고 정신이 흐려지신다.', choices: [
              { id: 'call', text: '바로 119에 알리고 몸을 식히며 기다린다', result: '구급대가 와서 어르신을 병원으로 모신다.', impact: [{ who: '어르신', text: '제때 치료받는다', tone: 1 }], ending: '안부 확인 → 시원한 곳 → 신호가 심해지면 119, 이웃의 몇 분이 생명을 지킨다.' },
              { id: 'sleep', text: '주무시면 나아질 거라며 쉬게 두고 돌아온다', result: '밤새 어르신의 상태를 아무도 모른다.', impact: [{ who: '어르신', text: '위험한 신호가 방치된다', tone: -1 }], why: '정신이 흐려지는 것은 바로 119를 부를 신호예요.', ending: '심해지는 신호를 쉬면 낫는다고 넘기면 늦는다.' }] } },
          { id: 'fan', text: '창문을 닫은 채 선풍기만 켜 드리고 돌아온다', result: '더운 방 안 공기가 계속 돈다.', impact: [{ who: '어르신', text: '더위가 그대로다', tone: -1 }], why: '더운 방에서는 시원한 곳으로 옮기는 것이 먼저예요.', ending: '더운 공기를 돌리는 것만으로는 몸이 식지 않는다.' }] } },
      { id: 'alone', text: '혼자 열쇠공을 불러 문을 열려고 한다', result: '어른도 관리사무소도 모르는 채 일이 커진다.', impact: [{ who: '나', text: '혼자 감당하기 어려운 일을 떠맡는다', tone: -1 }], why: '안부가 걱정되면 어른·관리사무소·주민센터와 함께 확인해요.', ending: '돕는 마음도 어른·기관과 함께할 때 안전하다.' }] };
    const ELDER_R = [{ id: 'weak', text: '혼자 사는 어르신은 더위에 더 취약하다' }, { id: 'signal', text: '정신이 흐려지면 바로 119를 부른다' }, { id: 'same', text: '더위는 모두에게 똑같다', why: '나이·건강·일하는 곳에 따라 더위의 위험이 달라요.' }, { id: 'agency', text: '돕는 일은 기관만 한다', why: '가장 먼저 알아챌 수 있는 사람은 이웃이에요.' }];
    const WORK = { text: '한낮 폭염 속, 편의점 앞에서 배달 노동자가 땀을 비 오듯 흘리며 잠시 쪼그려 앉아 있다.', who: '나', choices: [
      { id: 'pass', text: '모르는 사람이니 그냥 지나간다', result: '그분이 비틀거리며 일어나 오토바이로 간다.', impact: [{ who: '배달 노동자', text: '쉬지 못한 채 다시 일한다', tone: -1 }], ending: '모르는 사람이라도 묻는 말 한마디가 쉬는 계기가 될 수 있다.' },
      { id: 'ask', text: '"괜찮으세요?" 하고 묻고 시원한 물과 그늘 자리를 알려 드린다', result: '그분이 그늘에서 물을 마시며 숨을 고른다.', impact: [{ who: '배달 노동자', text: '잠시 쉰다', tone: 1 }],
        next: { text: '그분이 "어지럽고 속이 메스꺼워요"라고 한다.', choices: [
          { id: 'help', text: '편의점 직원과 함께 시원한 곳으로 모시고 증상이 심해지면 119에 알린다', result: '직원이 에어컨 앞 자리를 내어 준다.', impact: [{ who: '배달 노동자', text: '증상을 살피며 쉰다', tone: 1 }], ending: '야외에서 일하는 사람에게 쉼과 시원한 곳을 잇는 것이 돌봄이다.' },
          { id: 'go', text: '물을 드렸으니 됐다며 자리를 뜬다', result: '그분이 혼자 남아 다시 일어나려 한다.', impact: [{ who: '배달 노동자', text: '증상을 혼자 견딘다', tone: -1 }], ending: '증상을 말한 뒤에는 혼자 두지 않는다.' }] } }] };
    const WORK_R = [{ id: 'outdoor', text: '야외에서 일하는 사람은 더위에 오래 노출된다' }, { id: 'rest', text: '증상이 있으면 쉬게 하고 혼자 두지 않는다' }, { id: 'stranger', text: '모르는 사람은 돕지 않는 것이 낫다', why: '어른과 함께 묻고 알리는 것은 안전한 도움이에요.' }];

    MODS.push(
      M({
        id: 'intro.temp-chart', type: 'intro', title: '기온과 환자 그래프',
        method: '예시 기온과 환자 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '꺾은선에서 환자가 가장 많은 날만 함께 찾는다.', base: '기온이 오를수록 환자 수가 어떻게 바뀌는지 두 값을 견주어 말한다.', challenge: '관계를 말한 뒤 이 그래프로 알 수 없는 것(누가 더 위험한지)을 질문으로 만든다.' },
        intro: {
          teacher: '"예시 자료예요. 기온이 다른 날마다 온열질환 환자가 몇 명이었는지 나타낸 꺾은선이에요. 기온이 2도 오를 때 환자 수는 어떻게 바뀌나요?" 시연 단추로 35도인 날이 골라지는 모습을 보여 준다. "더위는 모두에게 똑같잖아요"라는 말이 나오면 "이 그래프는 몇 명인지만 말해요. 그 가운데 누가 더 많았을지는 무엇을 더 알아야 할까요?"라고 되묻는다. 실제 온열질환 통계는 질병관리청 자료로 확인한다고 덧붙인다.',
          student: '예시 꺾은선에서 기온과 환자 수의 관계를 읽고, 누가 더 위험할지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '기온별 온열질환 환자(예시 자료, 실제 통계 아님)', unit: '명', xLabel: '최고 기온', yLabel: '환자 수', data: TEMP, question: '환자가 가장 많은 날은?', choices: TEMP.map((x) => x[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper thermometer rising beside a paper line graph climbing upward, an elderly paper figure under a parasol and a delivery rider in the shade of a shop awning', banner: '더위는 모두에게 같을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 수업용 예시다. 실제 온열질환 감시 통계는 질병관리청 자료로 교사가 따로 제시한다.',
      }),
      M({
        id: 'intro.body-risk', type: 'intro', title: '몸의 위험 신호',
        method: '몸의 위험 신호', tool: 'body', minutes: 7,
        levels: { easy: '폭염 신호가 오는 부위 두 곳(피부·배)만 함께 고른다.', base: '폭염 신호 부위 세 곳을 고른다.', challenge: '부위를 고른 뒤 신호 이름(땀·메스꺼움·두근거림, 한파 때 귀·코의 감각 둔해짐)을 말한다.' },
        intro: {
          teacher: '"폭염 속에서 몸은 어디에서 먼저 신호를 보낼까요?" 시연 단추로 피부·가슴·배가 골라지는 모습을 보여 준다. 이어 "한파 때는 어디가 먼저 차가워지고 감각이 둔해질까요?"라고 물어 귀·코를 짚게 한다. "어지러운 건 그냥 피곤해서예요"라는 말이 나오면 "더운 곳에서 어지럽고 메스껍다면 그건 무슨 신호일까요?"라고 되묻는다. 신호 목록은 질병관리청 안내로 확인해 보여 준다.',
          student: '폭염·한파 때 몸이 위험 신호를 보내는 부위를 몸 그림에서 골라 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['귀', '코', '피부', '가슴', '배', '무릎'], names: true }, sequence: [{ parts: ['피부', '가슴', '배'] }] },
          art: { draw: 'a paper body outline split down the middle, one half under a blazing paper sun with sweat drops, the other half under paper snowflakes with a scarf, small signal stars on the skin, chest and ears', banner: '몸이 보내는 신호', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '몸 그림에는 머리 칸이 없어 두통·어지럼은 학생이 자기 이마를 짚어 가리키게 한다. 온열·한랭 질환 신호는 질병관리청 안내로 확인한다.',
      }),

      M({
        id: 'activity.neighbor-choice', type: 'activity', title: '연락 없는 이웃 어르신',
        method: '혼자 사는 이웃 어르신 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(안부 확인·첫 돌봄)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(신호가 심해지는 장면까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "모두에게 같다"·"기관만 한다" 카드를 걸러 낸다.' },
        activity: {
          title: '연락 없는 이웃 어르신', tool: 'dilemma',
          teacher: '"폭염경보가 내린 날, 늘 인사하던 옆집 어르신이 이틀째 안 보여요. 여러분은 어떻게 할까요?" 선택마다 결과를 소리 내어 읽게 한다. \'바쁘실 것\'을 고른 학생에게 "혼자 사는 분이 더위에 쓰러지면 누가 가장 먼저 알 수 있을까요?"라고 묻는다. 혼자 문을 열려는 길에서는 돕는 마음도 어른·관리사무소·주민센터와 함께할 때 안전하다는 점을, 마지막 장면에서는 정신이 흐려지는 것은 바로 119를 부를 신호라는 점을 짚는다.',
          task: '연락 없는 이웃 어르신 갈림길을 따라가며 안부 확인과 돌봄을 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('폭염 날 연락 없는 어르신의 안부를 어른과 함께 확인하고 돌보는 길을 고르세요.', ELDER, [['knock', 'cool', 'call']], ELDER_R, ['weak', 'signal'], { d: 0.4 }),
            EXPLOREQ('지나친 길과 혼자 해결하려 한 길도 끝까지 가 보고 결과를 견주세요.', ELDER, ELDER_R, ['지나친 길의 결과를 확인했다', '어른과 함께한 길과 혼자 한 길을 견주었다'], { d: 0.35 }),
            DILQ('폭염 속 지쳐 보이는 배달 노동자를 본 상황에서 알맞은 길을 고르세요.', WORK, [['ask', 'help']], WORK_R, ['outdoor', 'rest'], { d: 0.35, more: { conclude: '더위는 모두에게 같지 않아요. 혼자 사는 어르신·야외 노동자에게는 이웃의 안부와 쉼 연결이 돌봄이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '폭염 날 우리 동네에서 안부를 살펴야 할 사람은 누구일지, 어떻게 살필지 한 문장으로 쓰세요(실명은 쓰지 않아요).' }] },
        notes: '가상 상황이다. 학생이 혼자 낯선 집에 들어가지 않도록, 안부 확인은 보호자·관리사무소·주민센터와 함께 한다고 강조한다.',
      }),
      M({
        id: 'activity.support-budget', type: 'activity', title: '취약계층 지원 물품',
        method: '예산 안에서 지원 물품 고르기', tool: 'economy', minutes: 16,
        levels: { easy: '숫자 합계를 보며 물품 넷 가운데 고른다.', base: '물품 여섯 가운데 꼭 넣을 것을 지켜 예산 안에서 고른다.', challenge: '숫자 합계는 맞힌 뒤에만 보이고, 예산이 줄었을 때 무엇을 남길지 근거를 들어 고른다.' },
        activity: {
          title: '취약계층 지원 물품', tool: 'economy',
          teacher: '"학생회 봉사 예산으로 혼자 사시는 어르신께 드릴 여름 지원 꾸러미를 만든다면? 가격은 수업용 예시예요." 고른 뒤 근거를 짝에게 말하게 한다. 장식품이나 받는 사람에게 쓸모없는 물건을 넣는 학생에게 "이 물건이 더위의 위험을 줄여 주나요?"라고 묻는다. 물품만큼 안부 연락이 중요하다는 점, 꾸러미는 쉼터 안내와 함께 전한다는 점을 짚는다.',
          task: '예산 막대를 넘지 않게, 꼭 필요한 지원 물품을 넣어 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            BUDGETQ('여름 꾸러미 예산 20,000원. 생수와 휴대용 선풍기는 꼭 넣고, 더위와 상관없는 물건은 빼고 고르세요.', 20000, [['water', '생수 묶음', 6000], ['fan', '휴대용 선풍기', 9000], ['cap', '챙 넓은 모자', 5000], ['deco', '장식용 액자', 7000]], { must: ['water', 'fan'], not: ['deco'] }, { d: 0.25 }),
            BUDGETQ('겨울 꾸러미 예산 30,000원. 담요와 핫팩은 꼭 넣고, 추위와 상관없는 물건은 빼고 고르세요.', 30000, [['blanket', '보온 담요', 12000], ['pack', '핫팩 묶음', 5000], ['socks', '두꺼운 양말', 4000], ['gloves', '장갑', 6000], ['sun', '선글라스', 8000], ['toy', '장난감', 9000]], { must: ['blanket', 'pack'], not: ['sun', 'toy'] }, { d: 0.3 }),
            BUDGETQ('여름 꾸러미 예산이 15,000원으로 줄었어요. 생수는 꼭 넣고, 상관없는 물건은 빼고 고르세요.', 15000, [['water', '생수 묶음', 6000], ['fan', '휴대용 선풍기', 9000], ['cap', '챙 넓은 모자', 5000], ['towel', '쿨링 수건', 4000], ['deco', '장식용 액자', 7000], ['candy', '사탕 묶음', 3000]], { must: ['water'], not: ['deco', 'candy'] }, { d: 0.35, more: { conclude: '예산이 줄면 꼭 필요한 것을 지키고 상관없는 것부터 빼요. 물품과 함께 안부 연락을 이어 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 끝까지 지킨 물건과 그 근거를 쓰세요.' }] },
        notes: '가격은 수업용 예시다. 실제 봉사 활동은 학교·지역 기관의 안내에 따라 한다.',
      }),
      M({
        id: 'activity.care-proposal', type: 'activity', title: '돌봄 제안서',
        method: '돌봄 제안서', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '대상·방법·까닭 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 언제·누가 할지 실행 계획까지 쓴다.' },
        activity: {
          title: '돌봄 제안서', tool: 'rubric-writing',
          teacher: '"우리 학교나 동네에서 폭염·한파 때 할 수 있는 돌봄을 학생회에 제안한다면?" 대상 칸에서 \'모든 사람\'이라고 쓴 학생에게 "더위가 누구에게 더 위험하다고 했나요?"라고 묻는다. 방법 칸에서 \'관심을 갖자\'처럼 막연하게 쓴 학생에게 "그 관심은 어떤 행동으로 보일까요? 안부 전화일까요, 쉼터 안내일까요?"라고 되묻는다. 돕는 일이 기관만의 몫이 아니라는 점, 학생이 할 일과 어른·기관과 함께할 일을 나눈다는 점을 짚는다.',
          task: '학교·지역에서 할 수 있는 폭염·한파 돌봄 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('돌봄 대상과 그 까닭을 2~3문장으로 쓰세요.', '폭염·한파 때 우리 동네에서 특히 돌봄이 필요한 사람은 누구이고 왜 그런지 쓰세요.', ['대상을 구체적으로 썼다', '더 위험한 까닭을 썼다', '실명·개인정보를 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['어르신', '노인', '노동자', '어린이']], starter: '돌봄이 필요한 사람은 ~이다. 왜냐하면 ~', plus: '대상을 한 집단 이상 견주었다', d: 0.35 }),
            RWQ('학생이 할 수 있는 돌봄 방법을 2~3문장으로 쓰세요.', '학생이 어른·기관과 함께 할 수 있는 돌봄 방법을 쓰세요.', ['행동으로 보이는 방법이다', '어른·기관과 함께하는 부분을 밝혔다', '학생이 안전하게 할 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['안부', '쉼터', '전화', '물']], starter: '우리는 ~와 함께 ~을 한다.', plus: '쉼터 안내처럼 기관과 잇는 방법을 넣었다', d: 0.4 }),
            RWQ('이 제안이 필요한 까닭을 2~3문장으로 쓰세요.', '오늘 본 자료와 갈림길 결과를 근거로 이 돌봄이 필요한 까닭을 쓰세요.', ['오늘 본 자료를 근거로 썼다', '돌봄의 결과를 썼다', '과장하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['때문', '근거']], starter: '이 제안이 필요한 까닭은 ~ 때문이다.', plus: '언제·누가 할지 실행 계획을 넣었다', d: 0.4, more: { conclude: '돌봄 제안은 대상·방법·까닭이 분명하고, 학생이 할 일과 기관과 함께할 일을 나눌 때 실행돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '돌봄 제안을 정리하세요.', columns: ['대상', '방법', '함께할 곳'], cells: [['', '', '']] }] },
        notes: '무더위·한파 쉼터 위치는 교사가 지자체 안내로 지역 정보를 제시한다.',
      }),

      M({
        id: 'wrap.summary-map', type: 'wrap', title: '폭염·한파 돌봄 정리',
        method: '취약계층 돌봄 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 대상·위험 두 가지를 함께 채운다.', base: '대상·위험·행동 세 가지에 카드를 단다.', challenge: '쉼터·기관 가지까지 네 가지에 카드를 단다.' },
        wrap: {
          teacher: '"\'폭염·한파 돌봄\'을 네 가지로 정리해 봐요. 누구를, 무엇이 위험해서, 어떻게, 어디와 함께." 카드를 단 뒤 \'모두에게 같은 더위\'가 어디에도 들어가지 않는 까닭을 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '폭염·한파 돌봄', slots: ['대상', '위험', '행동', '함께할 곳'], cards: ['혼자 사는 어르신', '야외 노동자', '어지럼·메스꺼움', '안부 전화', '시원한 곳·물 안내', '무더위·한파 쉼터', '모두에게 같은 더위'] }, prompt: '카드를 돌봄 정리 가지에 다세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { 대상: ['혼자 사는 어르신', '야외 노동자'], 위험: ['어지럼·메스꺼움'], 행동: ['안부 전화', '시원한 곳·물 안내'], '함께할 곳': ['무더위·한파 쉼터'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '더위로 정신이 흐려진 사람을 보았을 때 알맞은 행동은?', options: ['자고 나면 나아진다고 쉬게 둔다', '바로 119에 알리고 몸을 식힌다', '찬물을 억지로 마시게 한다'], answer: 1, difficulty: 0.15, explain: '정신이 흐려지는 것은 응급 신호예요. 119에 알리고 몸을 식혀요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '폭염·한파 돌봄',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '돕는 일은 기관만 하는 것이 아니라 ___도 안부를 살피며 함께한다.', answer: '이웃(나)' },
            { type: 'short', prompt: '이번 여름(겨울)에 내가 할 돌봄 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.action-check', type: 'wrap', title: '내 돌봄 실천 점검',
        method: '내 실천 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 앞의 두 항목만 함께 읽고 표시하게 한다.', base: '세 항목을 스스로 표시한다.', challenge: '네 항목을 모두 확인하고, 아직 하지 않은 것을 이번 주 계획으로 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 돌봄 가운데 이번 주에 해 볼 것에 표시해 봐요. 다 하지 않아도 괜찮아요." 표시한 뒤 한두 명에게 언제 할지를 묻는다. "할 게 없다"는 학생에게 "할머니·할아버지께 더운 날 안부 전화를 드린 적이 있나요? 이번 주에 한 번은 어떨까요?"라고 구체적인 한 가지를 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '나의 돌봄 실천', items: [{ id: 'call', text: '더운 날 조부모님께 안부 전화하기' }, { id: 'shelter', text: '우리 동네 쉼터 위치 알아보기' }, { id: 'water', text: '야외 활동 때 물과 그늘 챙기기' }, { id: 'tell', text: '이상한 신호를 보면 어른·119에 알리기' }] }, prompt: '이번 주에 해 볼 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '"더위는 모두에게 똑같다"에 대한 가장 알맞은 답은?', options: ['맞다, 기온은 같다', '나이·건강·일하는 곳에 따라 위험이 다르다', '젊은 사람만 위험하다'], answer: 1, difficulty: 0.15, explain: '같은 기온이라도 어르신·어린이·야외 노동자에게 더 위험해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 돌봄 실천',
          items: [
            { type: 'check', prompt: '해 볼 것에 표시하세요.', options: ['안부 전화', '쉼터 위치 알기', '물과 그늘', '신호 보면 알리기'] },
            { type: 'short', prompt: '그 가운데 하나를 언제 할지 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 9. 자립 생활(자취·기숙사) 화재 예방과 대피 (12학년)
  // ======================================================================================================
  {
    const M = MOD('independent-fire', [12]);
    const ROOM = { title: '가상 원룸 평면', grid: [6, 4], places: [{ name: '현관', icon: 'dot', at: [0, 3] }, { name: '창문', icon: 'dot', at: [5, 0] }, { name: '전기레인지', icon: 'dot', at: [1, 0] }, { name: '멀티탭', icon: 'dot', at: [3, 3] }, { name: '침대', icon: 'house', at: [4, 2] }, { name: '충전 자리', icon: 'dot', at: [5, 2] }] };
    const GEAR = [{ id: 'ext', text: '분말 소화기', price: 25000 }, { id: 'alarm', text: '화재 감지기', price: 10000 }, { id: 'tap', text: '안전 인증 멀티탭', price: 8000 }, { id: 'light', text: '비상 손전등', price: 8000 }, { id: 'candle', text: '향초 세트', price: 9000 }, { id: 'string', text: '줄 조명', price: 12000 }];
    const ALARM = { text: '기숙사 화재경보가 이번 주에만 세 번 오작동했다. 새벽 2시, 경보가 또 울린다. 룸메이트가 "또야? 그냥 자자" 한다.', who: '룸메이트', choices: [
      { id: 'sleep', text: '이번에도 오작동이겠지 하고 다시 잔다', result: '몇 분 뒤 복도에서 탄 냄새가 난다.', impact: [{ who: '두 사람', text: '대피가 늦어진다', tone: -1 }], why: '오작동이 잦아도 울릴 때마다 대피해요.', ending: '오작동에 익숙해진 귀가 진짜 불을 놓친다.' },
      { id: 'check', text: '복도 문을 열고 연기가 있는지 먼저 확인한다', result: '문을 여는 순간 복도 공기가 방으로 들어온다.', impact: [{ who: '두 사람', text: '확인하는 사이 시간이 간다', tone: -1 }], why: '확인보다 대피가 먼저예요.', ending: '확인부터 하면 그 몇 분이 대피 시간에서 빠진다.' },
      { id: 'go', text: '룸메이트를 깨워 휴대전화만 들고 바로 나간다', result: '두 사람이 방문을 닫고 계단으로 향한다.', impact: [{ who: '룸메이트', text: '함께 나온다', tone: 1 }],
        next: { text: '계단 앞에서 보니 위층 학생들이 엘리베이터를 기다리고 있다.', choices: [
          { id: 'stairs', text: '"엘리베이터 말고 계단으로!" 외치며 함께 계단으로 내려간다', result: '위층 학생들도 계단으로 따라 내려온다.', impact: [{ who: '위층 학생들', text: '안전한 길로 나온다', tone: 1 }],
            next: { text: '집결지에서 사감 선생님이 "이번에도 오작동이었어요"라고 한다. 친구들이 투덜댄다.', choices: [
              { id: 'again', text: '다음에도 나오겠다고 말하고, 오작동 원인 점검을 함께 요청한다', result: '사감 선생님이 감지기 점검 일정을 잡는다.', impact: [{ who: '기숙사', text: '오작동도 줄고 대피 습관도 지킨다', tone: 1 }], ending: '경보는 늘 따르고, 오작동은 무시가 아니라 고치는 것으로 답한다.' },
              { id: 'never', text: '"다음부턴 안 나온다"며 친구들과 웃는다', result: '다음 경보 때 절반이 방에 남는다.', impact: [{ who: '기숙사', text: '대피 습관이 무너진다', tone: -1 }], ending: '오작동 탓에 버린 습관은 진짜 불 앞에서 돌아오지 않는다.' }] } },
          { id: 'lift', text: '빨리 가려고 함께 엘리베이터를 기다린다', result: '엘리베이터가 멈춰 서고 연기 냄새가 난다.', impact: [{ who: '두 사람', text: '갇힐 위험에 놓인다', tone: -1 }], why: '불이 났을 때는 엘리베이터를 타지 않아요.', ending: '빠른 길처럼 보이는 엘리베이터가 가장 위험한 길이 된다.' }] } }] };
    const ALARM_R = [{ id: 'always', text: '경보가 울리면 확인보다 대피가 먼저다' }, { id: 'fix', text: '오작동은 무시하지 말고 점검을 요청해 고친다' }, { id: 'false', text: '경보는 대부분 오작동이다', why: '오작동이 잦아도 다음 경보가 진짜일 수 있어요.' }, { id: 'alone', text: '혼자 사니 대피 계획이 필요 없다', why: '혼자일수록 나를 깨우고 이끌 사람은 나 자신이에요.' }];
    const BEEP = { text: '원룸 천장의 화재 감지기가 몇 분마다 "삑" 하고 짧게 운다. 잠이 안 온다.', who: '나', choices: [
      { id: 'remove', text: '시끄러우니 감지기를 떼어 서랍에 넣는다', result: '조용해졌다.', impact: [{ who: '나', text: '불이 나도 알려 줄 것이 없다', tone: -1 }], why: '떼어 두면 불이 나도 아무도 알려 주지 않아요.', ending: '시끄러움을 없애려다 경보까지 없앤다.' },
      { id: 'battery', text: '설명서를 보고 배터리 부족 신호인지 확인해 갈아 끼운다', result: '삑 소리가 멈추고 시험 단추를 누르니 경보가 제대로 울린다.', impact: [{ who: '나', text: '감지기가 다시 지켜 준다', tone: 1 }],
        next: { text: '다음 날 집주인에게 알릴지 고민한다.', choices: [
          { id: 'tell', text: '집주인에게 교체 사실과 감지기 점검 날짜를 알린다', result: '집주인이 다른 방 감지기도 점검한다.', impact: [{ who: '이웃 방', text: '함께 안전해진다', tone: 1 }], ending: '내 방 점검이 건물 전체 점검으로 이어진다.' },
          { id: 'skip', text: '고쳤으니 아무에게도 말하지 않는다', result: '옆방 감지기도 배터리가 다 된 채 남는다.', impact: [{ who: '이웃 방', text: '모르는 위험이 남는다', tone: 0 }], ending: '알리지 않으면 같은 문제가 옆방에 그대로 남는다.' }] } }] };
    const BEEP_R = [{ id: 'keep', text: '감지기는 떼지 않고 고쳐서 쓴다' }, { id: 'share', text: '고친 사실을 알리면 건물 전체가 점검한다' }, { id: 'quiet', text: '잠을 위해 잠깐 떼어 두는 것은 괜찮다', why: '불은 잠든 사이에 나면 더 위험해요.' }];

    MODS.push(
      M({
        id: 'intro.room-map', type: 'intro', title: '원룸 출구와 위험',
        method: '원룸 칸 지도 출구와 위험', tool: 'map', minutes: 7,
        levels: { easy: '위험 지점 두 곳(전기레인지·멀티탭)을 함께 찾는다.', base: '출구·창·위험 물건 네 곳을 짚는다.', challenge: '네 곳을 짚은 뒤 불이 현관 쪽에서 났을 때와 침대 쪽에서 났을 때의 대피로 두 갈래를 말한다.' },
        intro: {
          teacher: '"졸업 뒤 처음 살게 될 가상 원룸이에요. 불이 난다면 어디서 시작될 가능성이 클까요? 나갈 길은 몇 개인가요?" 시연 단추로 멀티탭에 핀이 꽂히는 모습을 보여 준다. "혼자 사니까 대피 계획까지는 필요 없어요"라는 말이 나오면 "혼자 자다 경보가 울리면, 나를 깨워 이끌어 줄 사람은 누구일까요?"라고 되묻는다. 오늘은 내 방을 스스로 점검하고 대피 계획을 세운다고 밝힌다.',
          student: '가상 원룸 평면에서 불이 시작될 만한 곳과 나갈 수 있는 길을 찾아보세요.',
          demo: { tool: 'map', options: ROOM, sequence: [{ place: '멀티탭' }] },
          art: { draw: 'a top-down paper floor plan of a small studio apartment with a door, a window, an electric stove, a bed and a power strip, two paper arrows showing escape routes', banner: '내 첫 방의 출구는?', extra: [{ motif: 'house', x: 300, y: 222 }] },
        },
        notes: '평면은 가상이다. 학생의 실제 집 구조를 발표하게 하지 않는다.',
      }),
      M({
        id: 'intro.gear-budget', type: 'intro', title: '자취 안전용품 예산',
        method: '자취 안전용품 예산 고르기', tool: 'economy', minutes: 7,
        levels: { easy: '물품 넷(소화기·감지기·향초·줄 조명)만 짚으며 함께 고른다.', base: '물품 여섯 가운데 예산 안에서 고르고 고른 근거를 말한다.', challenge: '꼭 넣을 것 둘을 먼저 정한 까닭을 말하고 남은 예산의 쓰임을 견준다.' },
        intro: {
          teacher: '"자취 첫 달, 안전용품 예산이 6만 원이라면 무엇부터 살까요? 가격은 수업용 예시예요." 시연 단추로 소화기·감지기가 먼저 담기는 모습을 보여 준다. 줄 조명·향초를 고르는 학생에게 "방을 꾸미는 물건과 방을 지키는 물건은 같을까요?"라고 묻는다. 오늘은 내 방 화재 위험을 점검하고 경보가 울릴 때 바로 나가는 습관과 계획을 세운다고 밝힌다.',
          student: '자취 첫 달 안전용품 예산으로 무엇을 먼저 담을지 생각해 보세요.',
          demo: { tool: 'economy', options: { mode: 'budget', budget: 60000, items: GEAR }, sequence: [{ budget: { must: ['ext', 'alarm'], not: ['candle', 'string'] } }] },
          art: { draw: 'a paper shopping basket in front of a tiny paper studio apartment, a paper fire extinguisher and smoke alarm going in while a candle and string lights wait outside, a paper budget bar above', banner: '방을 지키는 물건부터', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '가격은 수업용 예시다. 특정 상품·판매처를 띄우지 않는다.',
      }),

      M({
        id: 'activity.room-check', type: 'activity', title: '자취방 화재 위험 점검',
        method: '자취방 화재 위험 점검', tool: 'kitchen', minutes: 16,
        levels: { easy: '점검 후보 4개 가운데 위험한 것을 표시한다.', base: '후보 8개(안전한 습관 함정 포함)에서 위험한 것만 가리고, 고칠 차례와 매일 밤 점검 항목을 정한다.', challenge: '카드를 섞어 놓고, 고칠 차례를 정한 까닭을 짝에게 설명한다.' },
        activity: {
          title: '자취방 화재 위험 점검', tool: 'kitchen',
          teacher: '"가상 자취생 하율이의 방 사진을 글로 옮긴 목록이에요. 위험한 습관만 골라 볼까요? 안전한 습관도 섞여 있어요." 목록을 고른 뒤 고칠 차례를 정하게 한다. \'멀티탭 문어발\'을 안전 쪽으로 보는 학생에게 "구멍이 남아 있다면 꽂아도 되는 걸까요, 전기가 감당할 양이 남아 있어야 하는 걸까요?"라고 묻는다. 고칠 차례는 불이 날 가능성이 크고 바로 고칠 수 있는 것부터라는 점을 짚는다.',
          task: '자취방 습관 가운데 화재 위험을 가려 표시하고 고칠 차례를 정해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHECKQ('하율이의 자취방 습관 가운데 화재 위험이 있는 것만 표시하세요.', '하율이 방 위험 점검', [
              ['chain', '멀티탭에 멀티탭을 이어 꽂는다', true], ['bed', '휴대전화를 이불 위에서 밤새 충전한다', true], ['unplug', '외출할 때 쓰지 않는 플러그를 뽑는다', false], ['stove', '전기레인지에 냄비를 올린 채 샤워한다', true],
              ['heater', '전기난로 옆에 빨래를 말린다', true], ['alarm', '화재 감지기 시험 단추를 달마다 누른다', false], ['dust', '멀티탭 먼지를 그대로 둔다', true], ['ext', '소화기를 현관 가까이 둔다', false],
            ], { k: 4, d: 0.3 }),
            ORDERQ('위험한 습관을 고칠 차례로 카드를 놓으세요(불이 날 가능성이 크고 바로 고칠 수 있는 것부터).', ['조리 중에는 자리를 뜨지 않기', '난로 주변 빨래 치우기', '멀티탭 이어 꽂기 풀기', '충전은 책상 위에서 하기'], { k: 3, d: 0.35, opt: { autoMotif: false } }),
            CHECKQ('매일 밤 잠들기 전 점검표에 넣을 항목만 표시하세요.', '자기 전 점검표', [
              ['off', '전기레인지·난로 전원이 꺼졌다', true], ['charge', '충전기가 이불 밖 단단한 곳에 있다', true], ['music', '좋아하는 음악을 틀었다', false], ['exit', '현관 앞에 짐이 막혀 있지 않다', true], ['snack', '야식을 정리했다', false], ['tap', '멀티탭에 열 나는 제품이 겹쳐 있지 않다', true],
            ], { d: 0.3, more: { conclude: '자취방 화재 예방은 겹쳐 꽂지 않기·조리 중 자리 지키기·충전 자리·매일 밤 점검이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 자취를 한다면 가장 먼저 고칠 습관 하나와 그 까닭을 쓰세요.' }] },
        notes: '하율이는 가상 인물이다. 학생의 실제 방 상태를 발표하게 하지 않는다.',
      }),
      M({
        id: 'activity.alarm-choice', type: 'activity', title: '반복되는 경보',
        method: '반복되는 경보 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(경보가 울릴 때·계단 앞)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(오작동이라는 말을 들은 뒤까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "대부분 오작동"·"혼자니 필요 없다" 카드를 걸러 낸다.' },
        activity: {
          title: '반복되는 경보', tool: 'dilemma',
          teacher: '"경보가 이번 주에만 세 번 오작동했어요. 새벽 2시에 또 울려요. 솔직히 나가고 싶나요?" 손을 들어 마음을 먼저 확인한 뒤 갈림길을 따라가게 한다. \'다시 잔다\'를 고른 학생에게 "세 번이 오작동이었다는 것이 네 번째도 오작동이라는 뜻일까요?"라고 묻는다. 마지막 장면에서는 오작동에 대한 바른 대답이 무시가 아니라 점검 요청이라는 점을 짚는다.',
          task: '반복되는 경보 갈림길을 따라가며 대피와 오작동 대응을 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('오작동이 잦은 기숙사에서 새벽 경보가 울릴 때 알맞은 길을 끝까지 고르세요.', ALARM, [['go', 'stairs', 'again']], ALARM_R, ['always', 'fix'], { d: 0.4 }),
            EXPLOREQ('다시 잔 길과 확인부터 한 길도 끝까지 가 보고 결과를 견주세요.', ALARM, ALARM_R, ['다시 잔 길의 결과를 확인했다', '엘리베이터 길과 계단 길을 견주었다'], { d: 0.35 }),
            DILQ('원룸 감지기가 계속 삑삑 울릴 때 알맞은 길을 고르세요.', BEEP, [['battery', 'tell']], BEEP_R, ['keep', 'share'], { d: 0.35, more: { conclude: '경보는 울릴 때마다 대피하고, 오작동·배터리 신호는 떼지 말고 고쳐서 알려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"경보는 대부분 오작동이다"라는 룸메이트에게 할 말을 갈림길 결과를 근거로 쓰세요.' }] },
        notes: '가상 상황이다. 화재 감지기 점검·교체 방법은 제품 설명서와 소방청 안내로 확인한다.',
      }),
      M({
        id: 'activity.plan-write', type: 'activity', title: '나의 대피 계획서',
        method: '나의 대피 계획서', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '대피 경로·집결 장소·연락 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 이웃에게 알리는 방법까지 넣는다.' },
        activity: {
          title: '나의 대피 계획서', tool: 'rubric-writing',
          teacher: '"자취방이나 기숙사에서 혼자 경보를 들었을 때를 위한 내 계획서를 써 봐요. 실제 주소는 쓰지 않아요." 경로 칸에 \'현관으로 나간다\'만 쓴 학생에게 "현관 쪽에서 불이 났다면 두 번째 길은?"이라고 묻는다. 연락 칸에서는 누구에게 무엇을 알릴지 정하게 한다. 계획은 남에게 보이려는 것이 아니라 새벽에 깨어나서도 떠올릴 수 있을 만큼 짧고 분명해야 한다는 점을 짚는다.',
          task: '자취·기숙사 생활의 대피 계획(경로·집결·연락)을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('대피 경로를 두 갈래로 2~3문장으로 쓰세요.', '가상 원룸 또는 기숙사에서 경보를 들었을 때 나갈 첫째 길과 막혔을 때의 둘째 길을 쓰세요.', ['두 갈래 길을 모두 썼다', '엘리베이터를 쓰지 않는다고 밝혔다', '실제 주소를 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['계단', '현관', '창']], starter: '첫째 길은 ~이고, 막히면 ~', plus: '문을 닫고 나간다는 행동을 넣었다', d: 0.35 }),
            RWQ('집결 장소를 2~3문장으로 쓰세요.', '건물에서 나온 뒤 모일 곳과 그곳을 고른 까닭을 쓰세요.', ['건물에서 떨어진 곳이다', '그곳을 고른 까닭을 썼다', '다시 들어가지 않는다고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['모이', '집결']], starter: '나와서는 ~에 모인다. 왜냐하면 ~', plus: '집결 장소에 닿은 뒤 할 일을 썼다', d: 0.4 }),
            RWQ('연락 계획을 2~3문장으로 쓰세요.', '대피한 뒤 누구에게 무엇을 어떻게 알릴지 쓰세요.', ['신고(119)를 넣었다', '알릴 사람을 정했다', '알릴 내용을 정했다'], { min: 40, max: 300, sent: [2, 3], must: [['119']], starter: '안전한 곳에서 119에 ~을 알리고, ~', plus: '같은 건물 이웃에게 알리는 방법을 넣었다', d: 0.4, more: { conclude: '대피 계획은 두 갈래 길·집결지·연락, 새벽에도 떠올릴 수 있게 짧고 분명하게.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 대피 계획을 한 장으로 정리하세요(실제 주소는 쓰지 않아요).', columns: ['첫째 길', '둘째 길', '집결지', '연락'], cells: [['', '', '', '']] }] },
      }),
      M({
        id: 'activity.drill-run', type: 'activity', title: '자취방 화재 대피 훈련',
        method: '화재 대피 훈련', tool: 'timer', minutes: 16,
        levels: { easy: '대피 순서 카드 3장만 차례로 놓고 훈련한다.', base: '순서 카드 4장을 놓고 안전 점검을 확인한 뒤 연기가 찬 복도에서의 순서도 놓는다.', challenge: '복도 순서를 놓으면서 교실 훈련에 걸린 시간을 재어 적는다.' },
        activity: {
          title: '자취방 화재 대피 훈련', tool: 'timer',
          teacher: '"교실을 원룸이라고 생각하고, 경보를 듣는 순간부터 집결지까지 걸어 봐요." 순서 카드와 안전 점검을 끝낸 뒤 교사 신호로 훈련한다. \'짐 챙기기\'를 넣으려는 학생에게 "경보가 울린 뒤 가방을 싸는 몇 분은 어디서 빼 온 시간일까요?"라고 묻는다. 나가면서 문을 닫으면 연기와 불이 번지는 것을 늦춘다는 점을 짚는다.',
          task: '자취방 화재 대피 순서 카드를 맞추고 안전 점검을 한 뒤 훈련해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '원룸에서 경보를 들었을 때 대피 순서 카드를 놓고, 훈련 전 안전 점검을 모두 확인하세요.', toolOptions: { title: '원룸 화재 대피', cards: ['집결지에 모이기', '나오면서 문 닫기', '경보 듣기', '바로 나가기'], safety: ['훈련 길에 걸릴 물건이 없다', '뛰지 않고 걷기로 약속했다'] }, target: { order: ['경보 듣기', '바로 나가기', '나오면서 문 닫기', '집결지에 모이기'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '원룸 화재 대피 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['나오면서 문 닫기', '경보 듣기', '바로 나가기'], safety: [] }, target: { order: ['경보 듣기', '바로 나가기', '나오면서 문 닫기'] } } } },
            { prompt: '방을 나왔는데 복도에 연기가 차 있어요. 순서 카드를 놓으세요.', toolOptions: { title: '연기 찬 복도에서', cards: ['계단으로 내려가기', '코와 입을 가리기', '벽을 짚으며 몸을 낮추기'] }, target: { order: ['코와 입을 가리기', '벽을 짚으며 몸을 낮추기', '계단으로 내려가기'] }, difficulty: 0.35,
              levels: { challenge: { prompt: '연기 찬 복도 순서 카드를 놓고, 교실 훈련에 걸린 시간을 재어 적으세요(시간 기록).', toolOptions: { fields: [{ label: '교실 훈련에 걸린 시간', unit: '초', step: 1 }], stopwatch: true }, target: { order: ['코와 입을 가리기', '벽을 짚으며 몸을 낮추기', '계단으로 내려가기'], records: true } } } },
            DONEQ('교사 신호에 맞춰 자리에서 일어나 교실 문을 닫고 나가 복도 끝 집결지까지 걷는 훈련을 하고 해 보았어요를 누르세요.', '자취방 화재 대피 훈련', '훈련해 보았어요', { conclude: '경보 → 바로 나가기 → 문 닫기 → 집결. 혼자 살수록 이 순서를 몸에 익혀 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '훈련하면서 내가 머뭇거린 순간 하나와 그 까닭을 쓰세요.' }] },
        notes: '실제로 걷는 훈련은 교사 인솔 아래 교실·복도에서 한다. 기록한 시간은 우리 반 기록일 뿐 기준 시간이 아니다.',
      }),

      M({
        id: 'wrap.plan-map', type: 'wrap', title: '내 방 안전 정리',
        method: '자립 안전 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 예방·대피 두 가지를 함께 채운다.', base: '예방·대피·연락 세 가지에 카드를 단다.', challenge: '세 가지에 카드를 단 뒤 점검 일정(매일·매달)을 활동지에 쓴다.' },
        wrap: {
          teacher: '"\'내 방 안전\'을 세 가지로 정리해 봐요. 불이 안 나게, 나면 나가게, 나간 뒤 알리게." 카드를 단 뒤 \'경보는 대개 오작동\' 카드가 어디에도 들어가지 않는 까닭을 묻는다. 활동지에는 매일 할 것과 매달 할 것을 나눠 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '내 방 안전', slots: ['예방', '대피', '연락'], cards: ['멀티탭 이어 꽂지 않기', '조리 중 자리 지키기', '경보 들으면 바로 나가기', '나오면서 문 닫기', '안전한 곳에서 119', '경보는 대개 오작동'] }, prompt: '카드를 내 방 안전 가지에 다세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { 예방: ['멀티탭 이어 꽂지 않기', '조리 중 자리 지키기'], 대피: ['경보 들으면 바로 나가기', '나오면서 문 닫기'], 연락: ['안전한 곳에서 119'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '혼자 사는 방에서 경보가 울렸을 때 가장 알맞은 행동은?', options: ['오작동인지 먼저 확인한다', '바로 나가며 문을 닫는다', '짐을 챙겨 나간다'], answer: 1, difficulty: 0.1, explain: '확인과 짐보다 대피가 먼저예요. 문을 닫으면 번지는 것을 늦춰요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 방 안전 정리',
          items: [
            { type: 'table', prompt: '점검 일정을 나눠 쓰세요.', columns: ['언제', '할 일'], cells: [['매일 밤', ''], ['매달', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '경보가 울리면 확인보다 ___가 먼저다.', answer: '대피' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 10. 테러 위협과 다중이용시설 대처·신고 (12학년)
  // ======================================================================================================
  {
    const M = MOD('terror-crowd', [12]);
    const CROWD = [['18시', 30], ['19시', 70], ['20시', 90], ['22시', 95], ['23시', 40]];
    const BAG = { text: '공연이 끝나 갈 무렵, 출구 쪽 기둥 옆에 주인 없는 큰 가방이 한참째 놓여 있다. 곧 관객이 한꺼번에 나갈 시간이다.', who: '나', choices: [
      { id: 'open', text: '누구 것인지 보려고 가방을 열어 본다', result: '주변 사람들이 몰려와 가방을 둘러싼다.', impact: [{ who: '주변 관객', text: '수상한 물건 가까이 모인다', tone: -1 }], why: '수상한 물건은 만지거나 열지 않아요.', ending: '확인하려는 손이 위험을 키울 수 있다.' },
      { id: 'post', text: '사진을 찍어 SNS에 "폭탄 같다"고 올린다', result: '글이 퍼지며 관객들이 놀라 출구로 몰린다.', impact: [{ who: '관객들', text: '혼란 속에 밀린다', tone: -1 }], why: '확인되지 않은 말은 밀집 사고를 부를 수 있어요.', ending: '빠른 글이 대피보다 공포를 먼저 퍼뜨린다.' },
      { id: 'tell', text: '만지지 않고 거리를 둔 채 가까운 직원에게 위치를 알린다', result: '직원이 무전으로 보안팀을 부르고 주변을 비운다.', impact: [{ who: '주변 관객', text: '물건에서 떨어진다', tone: 1 }],
        next: { text: '안내 방송이 나온다. "안전 점검을 위해 관객 여러분은 안내에 따라 퇴장해 주십시오." 사람들이 들어온 정문으로 몰린다.', choices: [
          { id: 'side', text: '안내에 따라 가까운 다른 비상구로 나간다', result: '붐비지 않는 출구로 차분히 나온다.', impact: [{ who: '나', text: '밀집을 피한다', tone: 1 }],
            next: { text: '밖으로 나왔다. 친구가 "무슨 일인지 다시 들어가 보자"고 한다.', choices: [
              { id: 'away', text: '건물에서 떨어진 광장에서 기다리고 필요하면 112에 본 것을 알린다', result: '현장 통제가 끝날 때까지 안전한 곳에서 기다린다.', impact: [{ who: '현장', text: '통제가 쉬워진다', tone: 1 }], ending: '거리 두기 → 알리기 → 안내 따라 다른 출구 → 멀리서 기다리기.' },
              { id: 'back', text: '궁금해서 입구 쪽으로 다시 간다', result: '통제선 앞에 구경하는 사람들이 몰린다.', impact: [{ who: '현장', text: '대응이 방해받는다', tone: -1 }], why: '대피한 뒤에는 다시 다가가지 않아요.', ending: '구경하러 돌아가면 대응하는 사람의 길을 막는다.' }] } },
          { id: 'main', text: '들어온 정문만 알아서 정문으로 몰려간다', result: '정문 앞에서 사람들이 서로 밀린다.', impact: [{ who: '나', text: '밀집 속에 갇힌다', tone: -1 }], why: '출구는 들어온 곳만이 아니에요. 안내를 따라 가까운 출구로 가요.', ending: '모두가 들어온 문으로 가면 그 문이 가장 위험해진다.' }] } }] };
    const BAG_R = [{ id: 'distance', text: '수상한 물건은 만지지 않고 거리를 두고 알린다' }, { id: 'exit', text: '출구는 여럿이니 안내에 따라 가까운 곳으로 간다' }, { id: 'flow', text: '사람 많을 때는 흐름을 따르면 된다', why: '흐름이 한 곳으로 몰리면 그 자체가 위험해요.' }, { id: 'staff', text: '위협은 직원만 처리하니 나는 할 일이 없다', why: '본 것을 알리는 것은 누구나 할 수 있는 일이에요.' }];
    const PUSH = { text: '경기장 퇴장 통로에서 뒤에서 사람들이 밀려오고 앞이 멈췄다. 가슴이 눌려 숨쉬기가 답답하다.', who: '나', choices: [
      { id: 'shove', text: '앞사람을 밀어 빠져나가려 한다', result: '앞쪽에서 누군가 비틀거린다.', impact: [{ who: '앞사람', text: '넘어질 위험에 놓인다', tone: -1 }], why: '밀면 앞쪽에서 넘어지는 사람이 생겨요.', ending: '밀어서 나가려는 힘이 앞사람을 넘어뜨린다.' },
      { id: 'space', text: '팔로 가슴 앞 공간을 지키며 "밀지 마세요" 외치고 옆 빈 곳으로 비켜 선다', result: '주변 사람들도 "밀지 마세요"를 따라 외친다.', impact: [{ who: '주변 사람들', text: '밀림이 조금 줄어든다', tone: 1 }],
        next: { text: '옆 벽 쪽으로 비켜 서자 안내 요원이 다른 통로를 연다.', choices: [
          { id: 'follow', text: '안내 요원 말에 따라 열린 통로로 천천히 나간다', result: '흐름이 나뉘어 숨쉬기가 편해진다.', impact: [{ who: '관객들', text: '흐름이 나뉜다', tone: 1 }], ending: '밀지 않고 외치고 비켜 서면 흐름을 나눌 틈이 생긴다.' },
          { id: 'stay', text: '자리를 지키려 다시 원래 줄로 끼어든다', result: '다시 밀림 속에 들어간다.', impact: [{ who: '나', text: '숨쉬기가 다시 어렵다', tone: -1 }], ending: '빠져나온 틈을 스스로 버린다.' }] } }] };
    const PUSH_R = [{ id: 'nopush', text: '밀지 않고 외쳐 주변에 알리면 밀림이 줄어든다' }, { id: 'side', text: '흐름에서 비켜 서야 나갈 틈이 생긴다' }, { id: 'force', text: '힘껏 밀어야 빨리 빠져나간다', why: '밀면 넘어지는 사람이 생기고 더 위험해져요.' }];
    const HALL = { title: '가상 공연장 평면', grid: [6, 4], places: [{ name: '무대', icon: 'dot', at: [2, 0] }, { name: '내 자리', icon: 'dot', at: [3, 2] }, { name: '주인 없는 가방', icon: 'dot', at: [1, 3] }, { name: '정문', icon: 'dot', at: [0, 3] }, { name: '동쪽 비상구', icon: 'dot', at: [5, 2] }, { name: '서쪽 비상구', icon: 'dot', at: [0, 1] }, { name: '건물 밖 광장', icon: 'park', at: [5, 0] }] };

    MODS.push(
      M({
        id: 'intro.crowd-chart', type: 'intro', title: '시설 혼잡도 막대',
        method: '예시 시설 혼잡도 표', tool: 'chart', minutes: 7,
        levels: { easy: '막대 셋(18·20·22시)만 함께 읽는다.', base: '막대 다섯을 읽고 가장 붐비는 시간대를 찾는다.', challenge: '가장 붐비는 시간대를 찾은 뒤 그때 필요한 대책(출구 나누기·안내)을 말한다.' },
        intro: {
          teacher: '"예시 자료예요. 한 공연장의 시간대별 혼잡도(꽉 찬 정도)를 나타낸 막대예요. 가장 붐비는 때는 언제일까요?" 시연 단추로 22시 막대가 골라지는 모습을 보여 준다. "공연 중이 제일 붐비죠"라는 말이 나오면 "공연이 끝나고 모두 한꺼번에 나갈 때는 어떨까요?"라고 되묻는다. 밀집은 사람 수만이 아니라 한꺼번에 같은 곳으로 움직일 때 위험해진다는 점을 짚고, 공식 행동요령은 최신 자료로 따로 보여 준다고 알린다.',
          student: '예시 막대에서 가장 붐비는 시간대를 찾고, 그때 어떤 위험이 생길지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '공연장 시간대별 혼잡도(예시 자료, 실제 통계 아님)', unit: '%', xLabel: '시각', yLabel: '혼잡도', data: CROWD, question: '가장 붐비는 때는?', choices: CROWD.map((x) => x[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper concert hall seen from above with tiny paper people crowding toward a single door, paper bar columns rising beside it, several glowing exit signs on the other walls', banner: '언제 가장 붐빌까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '혼잡도는 수업용 예시다.',
      }),
      M({
        id: 'intro.risk-map', type: 'intro', title: '다중이용시설 위험 연상',
        method: '다중이용시설 위험 연상', tool: 'mindmap', minutes: 7,
        levels: { easy: '밀집·위협 두 가지에 위험 카드를 함께 단다.', base: '밀집·위협·출구 세 가지에 카드를 단다.', challenge: '세 가지에 카드를 단 뒤 가지마다 내가 할 수 있는 대처를 말로 덧붙인다.' },
        intro: {
          teacher: '"\'공연장\' 하면 어떤 위험이 떠오르나요? 밀집, 위협, 출구로 나눠 봐요." 시연 단추로 카드가 붙는 모습을 보여 준다. "위협은 직원이 처리하니까 관객은 할 게 없어요"라는 말이 나오면 "주인 없는 가방을 가장 먼저 보는 사람은 직원일까요, 그 옆 관객일까요?"라고 되묻는다. 테러 위협 때 공식 행동요령은 최신 자료(국민재난안전포털·경찰청)로 교사가 따로 보여 준다.',
          student: '"공연장"에 밀집·위협·출구 가지를 달고, 어떤 위험이 있는지 카드를 붙여 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '공연장', slots: ['밀집', '위협', '출구'], cards: ['끝나고 한꺼번에 나감', '좁은 통로에서 밀림', '주인 없는 가방', '수상한 행동', '들어온 문만 기억함', '비상구를 막은 짐'] }, sequence: [{ sort: { 밀집: ['끝나고 한꺼번에 나감', '좁은 통로에서 밀림'], 위협: ['주인 없는 가방', '수상한 행동'], 출구: ['들어온 문만 기억함', '비상구를 막은 짐'] } }] },
          art: { draw: 'a paper mind map with a concert hall in the centre and three paper branches leading to a crowd of paper people, an unattended paper bag and a glowing exit sign', banner: '많은 사람이 모이는 곳', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '테러 위협 대처의 공식 행동요령은 교사가 최신 자료(국민재난안전포털·경찰청 안내)로 제시한다.',
      }),

      M({
        id: 'activity.venue-choice', type: 'activity', title: '공연장 수상한 물건',
        method: '공연장 수상한 물건 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(가방을 본 순간·안내 방송)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(밖으로 나온 뒤까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "흐름을 따르면 된다"·"직원만 처리" 카드를 걸러 낸다.' },
        activity: {
          title: '공연장 수상한 물건', tool: 'dilemma',
          teacher: '"공연이 끝나 갈 무렵 출구 옆에 주인 없는 가방이 한참째 있어요. 곧 모두가 나갈 시간이에요. 어떻게 할까요?" 선택마다 결과를 소리 내어 읽게 한다. \'가방 열기\'나 \'SNS에 올리기\'를 고른 학생에게 "그 행동 뒤에 주변 사람들은 어디로 움직였나요?"라고 묻는다. 안내 방송 장면에서는 출구가 들어온 곳만이 아니라는 점을, 마지막 장면에서는 대피 뒤 다시 다가가지 않는다는 점을 짚는다.',
          task: '공연장 갈림길을 따라가며 거리 두기·알리기·출구 판단을 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('주인 없는 가방과 혼잡이 겹친 공연장에서 알맞은 길을 끝까지 고르세요.', BAG, [['tell', 'side', 'away']], BAG_R, ['distance', 'exit'], { d: 0.4 }),
            EXPLOREQ('가방을 연 길과 SNS에 올린 길도 끝까지 가 보고 결과를 견주세요.', BAG, BAG_R, ['가방을 연 길의 결과를 확인했다', '정문으로 몰린 길과 다른 출구 길을 견주었다'], { d: 0.35 }),
            DILQ('경기장 퇴장 통로에서 밀림이 생겼을 때 알맞은 길을 고르세요.', PUSH, [['space', 'follow']], PUSH_R, ['nopush', 'side'], { d: 0.35, more: { conclude: '수상한 것은 만지지 말고 알리고, 출구는 안내에 따라 가까운 곳, 밀림 속에서는 밀지 말고 외치고 비켜 서요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"출구는 들어온 곳뿐이다"라는 생각이 왜 위험한지 갈림길 결과를 근거로 쓰세요.' }] },
        notes: '가상 상황이다. 실제 사건을 떠올리게 하는 장소·날짜를 쓰지 않는다. 밀집 상황 행동 요령과 테러 의심 물건 신고 방법은 국민재난안전포털·경찰청 안내로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '시설 안전 제안서',
        method: '시설 안전 제안서', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '문제·개선안·기대 효과 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 누가 실행할지(시설·주최·관객)까지 밝힌다.' },
        activity: {
          title: '시설 안전 제안서', tool: 'rubric-writing',
          teacher: '"학교 축제나 지역 공연장에 낼 안전 제안서를 써 봐요. 오늘 본 혼잡도와 갈림길이 근거예요." 문제 칸에 \'사람이 많다\'만 쓴 학생에게 "사람이 많은 것 자체가 문제인가요, 한 곳으로 몰리는 것이 문제인가요?"라고 묻는다. 개선안 칸에서 \'조심하자\'처럼 막연한 학생에게 "출구 안내판을 어디에 몇 개 둘지까지 쓸 수 있나요?"라고 되묻는다. 제안서는 누가 실행할지 적혀야 실행된다는 점을 짚는다.',
          task: '다중이용시설의 동선·안내를 고치는 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('지금 시설의 문제를 2~3문장으로 쓰세요.', '가상 공연장(또는 학교 축제장)의 동선·안내에서 위험한 점을 오늘 본 자료를 근거로 쓰세요.', ['자료를 근거로 썼다', '문제가 생기는 때와 장소를 썼다', '실제 시설 이름을 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['출구', '통로', '혼잡']], starter: '공연이 끝날 때 ~로 사람이 몰려 ~', plus: '문제가 낳을 결과를 썼다', d: 0.35 }),
            RWQ('개선안을 2~3문장으로 쓰세요.', '문제를 줄일 동선·안내 개선안을 구체적으로 쓰세요.', ['문제와 이어진 개선안이다', '어디에 무엇을 할지 구체적이다', '실제로 할 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['안내', '나누', '표시']], starter: '퇴장할 때는 ~을 나누고 ~에 안내판을 둔다.', plus: '누가 실행할지(시설·주최·관객)를 밝혔다', d: 0.4 }),
            RWQ('기대 효과를 2~3문장으로 쓰세요.', '개선안을 실행하면 무엇이 달라질지 쓰세요.', ['달라질 점을 썼다', '과장하지 않았다', '관객이 할 일도 짚었다'], { min: 40, max: 300, sent: [2, 3], must: [['줄어', '빨라', '나뉘']], starter: '이렇게 하면 ~이 줄어든다.', plus: '효과를 확인할 방법을 썼다', d: 0.4, more: { conclude: '좋은 안전 제안서는 근거 있는 문제·구체적 개선안·실행할 사람이 함께 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서를 한눈에 정리하세요.', columns: ['문제', '개선안', '실행할 사람'], cells: [['', '', '']] }] },
      }),
      M({
        id: 'activity.tabletop-map', type: 'activity', title: '공연장 출구 도상 훈련',
        method: '도상 훈련: 공연장 출구 경로', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 그 칸의 장소 이름이 바로 보인다.', base: '피할 곳·가까운 비상구·집결지에 핀을 꽂는다.', challenge: '읽기 글자는 맞힌 뒤에만 보이고, 비상구가 막힌 조건 문항에서 다른 출구를 고르고 신고 때를 판단한다.' },
        activity: {
          title: '공연장 출구 도상 훈련', tool: 'map',
          teacher: '"가상 공연장 평면이에요. 내 자리는 가운데예요. 정문 옆에 주인 없는 가방이 있고, 정문으로 사람이 몰려요. 어디로 나갈까요?" 핀을 꽂기 전에 피할 곳부터 찾게 한다. 정문에 핀을 꽂는 학생에게 "들어온 문이라 익숙하지만, 오늘 그 문 앞에는 무엇이 있나요?"라고 묻는다. 신고는 건물 밖 안전한 곳에서 한다는 점을 마지막 문항에서 짚는다. 112·119는 상황에 따라 교사가 공식 안내로 정리해 준다.',
          task: '가상 공연장 평면에서 피할 곳·출구·집결지에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '공연장에서 거리를 두고 피해야 할 곳에 핀을 꽂으세요.', toolOptions: HALL, target: { place: '주인 없는 가방' }, difficulty: 0.2 },
            { prompt: '내 자리에서 가방과 정문을 피해 가장 가까운 비상구에 핀을 꽂으세요.', toolOptions: HALL, target: { place: '동쪽 비상구' }, difficulty: 0.25 },
            { prompt: '동쪽 비상구 앞에 사람이 몰려 막혔다는 안내가 나왔어요. 대신 나갈 비상구에 핀을 꽂으세요.', toolOptions: HALL, target: { place: '서쪽 비상구' }, difficulty: 0.3 },
            { prompt: '건물에서 나와 기다릴 곳에 핀을 꽂고, 본 것을 알릴 때를 고르세요.', toolOptions: Object.assign({}, HALL, { ask: { q: '본 것을 신고할 때는?', choices: ['가방 옆에서 바로', '건물에서 떨어진 안전한 곳에 닿은 뒤', '집에 돌아가서'], why: ['수상한 물건 가까이 머무르게 돼요.', '', '너무 늦어 대응에 쓰이지 못해요.'] } }), target: { place: '건물 밖 광장', pick: 1 }, difficulty: 0.35, conclude: '거리 두기 → 안내에 따라 가까운 출구 → 막히면 다른 출구 → 건물 밖 안전한 곳에서 신고.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '공연장·경기장에 들어가자마자 확인할 것 두 가지를 쓰세요.' }] },
        notes: '평면은 가상이다. 테러 의심 상황의 신고 방법은 경찰청·국민재난안전포털 안내로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'activity.tabletop-order', type: 'activity', title: '공연장 도상 훈련 순서',
        method: '도상 훈련 행동 순서', tool: 'timer', minutes: 16,
        levels: { easy: '행동 순서 카드 3장만 차례로 놓는다.', base: '카드 4장을 차례로 놓고 도상 훈련 전 점검을 확인한 뒤 지도에서 짚는다.', challenge: '모둠 역할 카드까지 차례로 놓고 지도에서 짚는다.' },
        activity: {
          title: '공연장 도상 훈련 순서', tool: 'timer',
          teacher: '"수상한 물건을 본 순간부터 안전한 곳까지의 순서를 맞춰 봐요. 그다음 앞 활동의 공연장 지도에서 손가락으로 짚어 봐요." \'신고\'를 첫 카드로 둔 학생에게 "가방 바로 옆에서 통화하며 서 있는 것은 안전할까요?"라고 묻는다. 안내에 따르기는 시키는 대로가 아니라 현장 상황을 가장 잘 아는 사람의 길 안내를 따르는 것이라는 점을 짚는다.',
          task: '수상한 물건을 본 뒤 행동 순서 카드를 맞추고 지도에서 짚은 뒤 해 보았어요를 눌러요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '공연장에서 수상한 물건을 봤을 때 행동 순서 카드를 놓고, 도상 훈련 전 점검을 확인하세요.', toolOptions: { title: '수상한 물건을 봤을 때', cards: ['안전한 곳에서 112 신고', '물건에서 거리 두기', '안내에 따라 움직이기', '가까운 출구 판단'], safety: ['공연장 평면 지도를 펼쳤다', '비상구 두 곳을 찾았다'] }, target: { order: ['물건에서 거리 두기', '가까운 출구 판단', '안전한 곳에서 112 신고', '안내에 따라 움직이기'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '수상한 물건을 봤을 때 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['안전한 곳에서 112 신고', '물건에서 거리 두기', '가까운 출구 판단'], safety: [] }, target: { order: ['물건에서 거리 두기', '가까운 출구 판단', '안전한 곳에서 112 신고'] } } } },
            { prompt: '퇴장 통로에서 밀림이 생겼을 때 순서 카드를 놓으세요.', toolOptions: { title: '밀림이 생겼을 때', cards: ['안내 요원이 연 통로로 나가기', '"밀지 마세요" 외치기', '옆 빈 곳으로 비켜 서기'] }, target: { order: ['"밀지 마세요" 외치기', '옆 빈 곳으로 비켜 서기', '안내 요원이 연 통로로 나가기'] }, difficulty: 0.35,
              levels: { challenge: { prompt: '도상 훈련에서 모둠 역할 카드를 일하는 차례로 놓으세요(역할).', toolOptions: { title: '도상 훈련 역할', cards: ['확인 담당: 광장에서 인원을 셈', '알림 담당: 직원에게 위치를 알림', '길 안내 담당: 지도에서 다른 출구를 짚음'] }, target: { order: ['알림 담당: 직원에게 위치를 알림', '길 안내 담당: 지도에서 다른 출구를 짚음', '확인 담당: 광장에서 인원을 셈'] } } } },
            DONEQ('모둠이 정한 순서대로 공연장 지도에서 내 자리부터 광장까지 손가락으로 짚어 보고 해 보았어요를 누르세요.', '테러 대피 도상 훈련', '지도 위에서 길을 짚어 보았어요', { conclude: '거리 두기 → 출구 판단 → 안전한 곳에서 신고 → 안내 따르기. 들어가자마자 출구 두 곳을 확인해 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '112에 수상한 물건을 신고할 때 말할 내용을 순서대로 쓰세요(어디·무엇·지금 상황).' }] },
        notes: '테러 대피 도상 훈련이다. 112·119 가운데 어디에 먼저 알릴지는 상황에 따라 다르므로 교사가 공식 안내로 정리한다.',
      }),

      M({
        id: 'wrap.campaign', type: 'wrap', title: '출구 확인 캠페인',
        method: '캠페인 포스터', tool: 'collage', minutes: 10,
        levels: { easy: '조각 3개 이상으로 "출구 확인, 멀리, 신고" 포스터를 꾸민다.', base: '교사가 조각 5개 이상을 권하고 세 낱말 아래 할 행동을 활동지에 쓴다.', challenge: '밝은 색과 어두운 색을 맞대어 멀리서도 보이게 꾸미도록 교사가 권한다.' },
        wrap: {
          teacher: '"\'출구 확인, 멀리, 신고\' 세 낱말을 포스터에 담아 봐요. 공연장 입구에 붙인다면 줄 서 있는 사람이 몇 초 안에 읽을 수 있을까요?" 두세 작품을 보여 주고 "이 포스터를 본 사람은 들어가자마자 무엇을 할까요?"라고 묻는다. 출구 2번에서 \'흐름을 따르면 된다\'를 고르는 학생에게 정문으로 몰린 갈림길 장면을 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'triangle', 'diamond', 'star'] }, prompt: '"출구 확인, 멀리, 신고" 캠페인 포스터를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['출구를 나타내는 모양을 넣었다', '거리 두기를 나타냈다', '멀리서도 보이게 색을 골랐다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '다중이용시설에서 맞는 행동을 고르세요.', options: ['사람이 많으면 흐름을 따라간다', '들어가자마자 출구 두 곳을 확인한다', '수상한 물건은 열어 확인한다'], answer: 1, difficulty: 0.15, explain: '출구를 미리 알면 막혔을 때 바로 다른 길을 고를 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '출구 확인 캠페인',
          items: [
            { type: 'table', prompt: '세 낱말 아래 할 행동을 쓰세요.', columns: ['출구 확인', '멀리', '신고'], cells: [['', '', '']] },
            { type: 'short', prompt: '포스터에 덧붙일 한 줄 문구를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.tabletop-check', type: 'wrap', title: '공연장 도상 훈련 점검',
        method: '도상 훈련 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 앞의 세 항목만 함께 읽고 표시하게 한다.', base: '네 항목을 스스로 표시한다.', challenge: '다섯 항목을 모두 확인하고 내가 맡은 역할에서 고칠 점을 쓴다.' },
        wrap: {
          teacher: '"도상 훈련에서 우리 모둠이 실제로 짚은 것만 표시해 봐요." 표시한 뒤 출구 2번을 함께 푼다. "다 했다"고 모두 표시한 모둠에게 "두 번째 비상구는 어디였는지 지금 지도에서 짚어 볼까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '공연장 도상 훈련 점검', items: [{ id: 'far', text: '수상한 물건에서 거리를 두는 길을 짚었다' }, { id: 'two', text: '비상구 두 곳을 찾았다' }, { id: 'nopush', text: '밀림 때 할 행동을 말했다' }, { id: 'call', text: '안전한 곳에서 신고할 때를 정했다' }, { id: 'role', text: '역할을 나누어 맡았다' }] }, prompt: '도상 훈련에서 한 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '"위협은 직원만 처리한다"에 대한 가장 알맞은 답은?', options: ['맞다, 관객은 할 일이 없다', '관객은 본 것을 알리고 안내를 따르는 역할이 있다', '관객이 직접 물건을 치운다'], answer: 1, difficulty: 0.15, explain: '본 것을 알리는 것과 안내를 따르는 것은 관객이 할 수 있는 대응이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '공연장 도상 훈련 점검',
          items: [
            { type: 'check', prompt: '훈련에서 한 것에 표시하세요.', options: ['거리 두기', '비상구 두 곳', '밀림 대처', '신고 때', '역할 나누기'] },
            { type: 'short', prompt: '다음에 공연장·경기장에 갈 때 내가 할 일 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11. 재난 대비 가족·지역 계획과 비상용품 제안서 (12학년)
  // ======================================================================================================
  {
    const M = MOD('family-plan', [12]);
    const REGION = [['호우·침수', 40], ['폭염', 25], ['태풍', 20], ['대설', 10], ['지진', 5]];
    const AREA = { title: '가상 우리 지역 칸 지도', grid: [6, 4], rivers: [[[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]]], places: [{ name: '우리 집', icon: 'house', at: [1, 3] }, { name: '◇◇고 대피소', icon: 'school', at: [4, 3] }, { name: '주민센터 대피소', icon: 'office', at: [3, 0] }, { name: '지하차도', icon: 'bridge', at: [2, 3] }, { name: '하천 다리', icon: 'bridge', at: [3, 2] }, { name: '지하철역', icon: 'station', at: [0, 0] }] };

    MODS.push(
      M({
        id: 'intro.risk-map', type: 'intro', title: '우리 지역 위험 연상',
        method: '우리 지역 위험 연상', tool: 'mindmap', minutes: 7,
        levels: { easy: '자연·사회 재난 두 가지에 카드를 함께 단다.', base: '자연 재난을 계절로 나눠 세 가지에 카드를 단다.', challenge: '네 가지(여름 자연·겨울 자연·사회·우리 집 고유)에 카드를 단다.' },
        intro: {
          teacher: '"\'우리 지역\' 하면 어떤 재난이 떠오르나요? 자연 재난과 사회 재난으로 나눠 봐요." 시연 단추로 카드가 두 가지에 붙는 모습을 보여 준다. "우리 동네는 재난이 없어요"라는 말이 나오면 "여름마다 물이 차는 길이나, 겨울에 얼어붙는 언덕길이 있나요?"라고 되묻는다. 오늘은 가족과 지역의 위험을 분석해 연락·대피·비상용품 계획 제안서를 만든다고 밝힌다.',
          student: '"우리 지역"에 자연 재난·사회 재난 가지를 달고, 떠오르는 위험을 카드로 붙여 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '우리 지역', slots: ['자연 재난', '사회 재난'], cards: ['호우·침수', '폭염', '대설·한파', '화재', '가스 사고', '정전'] }, sequence: [{ sort: { '자연 재난': ['호우·침수', '폭염', '대설·한파'], '사회 재난': ['화재', '가스 사고', '정전'] } }] },
          art: { draw: 'a paper mind map with a small town in the centre, one branch leading to rain clouds, sun and snow, the other to a fire, a gas pipe and a dark power line', banner: '우리 지역의 위험은?', extra: [{ motif: 'house', x: 300, y: 222 }] },
        },
      }),
      M({
        id: 'intro.region-chart', type: 'intro', title: '지역 재난 유형 막대',
        method: '예시 지역 재난 유형 표', tool: 'chart', minutes: 7,
        levels: { easy: '막대 셋(호우·폭염·태풍)만 함께 읽는다.', base: '막대 다섯을 읽고 가상 우리 지역에서 가장 대비할 위험을 고른다.', challenge: '많은 것과 드물지만 큰 것(지진)을 견주어 계획에 무엇을 넣을지 해석한다.' },
        intro: {
          teacher: '"예시 자료예요. 가상의 우리 지역에서 지난 몇 해 동안 있었던 재난 특보를 유형별로 나눈 막대예요. 가장 많은 것은?" 시연 단추로 호우·침수 막대가 골라지는 모습을 보여 준다. "가장 많은 것만 대비하면 돼요"라는 말이 나오면 "가장 적은 지진은 한 번 오면 어떨까요?"라고 되묻는다. 실제 우리 지역 자료는 지자체·국민재난안전포털에서 찾아보게 한다.',
          student: '예시 막대에서 가상 우리 지역의 재난 유형을 견주고, 가장 대비해야 할 위험을 골라 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 지역 재난 특보 유형(예시 자료, 실제 통계 아님)', unit: '%', xLabel: '유형', yLabel: '비율', data: REGION, question: '가장 많은 유형은?', choices: REGION.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'paper bar columns standing on a paper town map, each topped with a small weather symbol, rain on the tallest and a tiny cracked ground symbol on the shortest', banner: '우리 지역에 맞는 계획', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 예시다.',
      }),

      M({
        id: 'activity.kit-budget', type: 'activity', title: '비상용품 예산 고르기',
        method: '비상용품 예산 고르기', tool: 'economy', minutes: 16,
        levels: { easy: '숫자 합계를 보며 물품 넷 가운데 고른다.', base: '물품 여섯 가운데 꼭 넣을 것을 지켜 예산 안에서 고른다.', challenge: '숫자 합계는 맞힌 뒤에만 보이고, 예산이 줄었을 때 무엇을 남길지 근거를 들어 고른다.' },
        activity: {
          title: '비상용품 예산 고르기', tool: 'economy',
          teacher: '"가족 비상용품 가방을 꾸린다면 무엇부터 넣을까요? 가격은 수업용 예시예요." 고른 뒤 근거를 짝에게 말하게 한다. 비싼 물건을 많이 넣는 학생에게 "가방을 들고 뛰어야 한다면 무거운 것을 다 들 수 있을까요? 많을수록 좋은 걸까요?"라고 묻는다. 비상용품은 가족 수·우리 지역 위험에 맞춰 고르고, 정기적으로 점검해 바꾼다는 점을 짚는다. 품목 목록은 국민재난안전포털 안내를 화면에 띄워 함께 견준다.',
          task: '예산 막대를 넘지 않게, 꼭 필요한 비상용품을 넣어 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            BUDGETQ('비상용품 예산 30,000원. 식수와 손전등은 꼭 넣고, 비상시 쓸모없는 물건은 빼고 고르세요.', 30000, [['water', '식수', 6000], ['light', '손전등과 건전지', 9000], ['radio', '휴대용 라디오', 12000], ['deco', '장식 쿠션', 8000]], { must: ['water', 'light'], not: ['deco'] }, { d: 0.25 }),
            BUDGETQ('예산 50,000원. 식수·손전등·구급함은 꼭 넣고, 쓸모없는 물건은 빼고 고르세요.', 50000, [['water', '식수', 6000], ['light', '손전등과 건전지', 9000], ['aid', '구급함', 12000], ['food', '비상식량', 10000], ['game', '게임기', 30000], ['perfume', '향수', 9000]], { must: ['water', 'light', 'aid'], not: ['game', 'perfume'] }, { d: 0.3 }),
            BUDGETQ('예산이 25,000원으로 줄었어요. 식수와 구급함은 꼭 넣고, 쓸모없는 물건은 빼고 고르세요.', 25000, [['water', '식수', 6000], ['aid', '구급함', 12000], ['light', '손전등과 건전지', 9000], ['radio', '휴대용 라디오', 12000], ['game', '게임기', 30000], ['candy', '과자 묶음', 4000]], { must: ['water', 'aid'], not: ['game'] }, { d: 0.35, more: { conclude: '비상용품은 많을수록 좋은 게 아니라, 들고 움직일 수 있고 우리 가족에게 꼭 필요한 것부터예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 끝까지 지킨 물건과 그 근거를 쓰세요.' }] },
        notes: '가격은 수업용 예시다. 비상용품 권장 품목은 국민재난안전포털 안내로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'activity.shelter-map', type: 'activity', title: '지역 대피소 경로',
        method: '지역 대피소 경로', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 그 칸의 장소 이름이 바로 보인다.', base: '대피소 두 곳과 피할 곳에 핀을 꽂아 경로 두 갈래를 정한다.', challenge: '읽기 글자는 맞힌 뒤에만 보이고, 하천이 넘친 조건 문항에서 갈 대피소를 까닭과 함께 고른다.' },
        activity: {
          title: '지역 대피소 경로', tool: 'map',
          teacher: '"가상 우리 지역 지도예요. 우리 집에서 갈 수 있는 대피소는 두 곳이에요. 왜 두 곳을 다 알아야 할까요?" 핀을 꽂은 뒤 손가락으로 두 갈래 길을 짚게 한다. 지하차도를 지나는 길을 고르는 학생에게 "호우 때 그 길은 열려 있을까요?"라고 묻는다. 대피소는 재난 종류에 따라 달라질 수 있어 공식 안내에서 확인해야 한다는 점을 짚는다.',
          task: '가상 지역 지도에서 대피소와 피할 곳에 핀을 꽂아 두 갈래 경로를 정해요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '우리 집에서 하천을 건너지 않고 갈 수 있는 대피소에 핀을 꽂으세요.', toolOptions: AREA, target: { place: '◇◇고 대피소' }, difficulty: 0.2 },
            { prompt: '◇◇고로 가는 길에 호우 때 지나면 안 되는 곳에 핀을 꽂으세요.', toolOptions: AREA, target: { place: '지하차도' }, difficulty: 0.25 },
            { prompt: '◇◇고 대피소가 가득 찼어요. 두 번째로 갈 대피소에 핀을 꽂으세요.', toolOptions: AREA, target: { place: '주민센터 대피소' }, difficulty: 0.3 },
            { prompt: '하천이 넘쳐 다리가 통제됐어요. 어느 대피소로 갈지 알맞은 판단을 고르세요.', toolOptions: Object.assign({}, AREA, { readOnly: true, ask: { q: '어디로 갈까요?', choices: ['다리를 건너 주민센터 대피소로', '하천을 건너지 않는 ◇◇고 대피소로', '집에서 지하철역으로'], why: ['통제된 다리를 건너야 해요.', '', '지하 공간은 침수 때 피해요.'] } }), target: { pick: 1 }, difficulty: 0.35, conclude: '대피소는 두 곳을 알아 두고, 재난 종류에 따라 위험한 길을 피해 고를 수 있어야 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 가족의 대피소 계획을 쓰세요(실제 주소는 쓰지 않아요).', columns: ['', '대피소', '피할 길'], cells: [['첫째', '', ''], ['둘째', '', '']] }] },
        notes: '지도는 가상이다. 실제 대피소는 국민재난안전포털·안전디딤돌 앱으로 함께 확인하게 한다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '가족·지역 계획 제안서',
        method: '가족·지역 계획 제안서', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '연락·대피·비상용품 세 칸을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 계획을 언제 다시 점검할지(점검 주기)까지 쓴다.' },
        activity: {
          title: '가족·지역 계획 제안서', tool: 'rubric-writing',
          teacher: '"오늘 만든 것을 가족에게 내는 제안서로 묶어 봐요. 실제 주소·전화번호는 쓰지 않고 \'집 가까운 대피소\'처럼 써요." 연락 칸에서 \'전화한다\'만 쓴 학생에게 "통신이 끊기면 어디서 만날까요?"라고 묻는다. "계획은 한 번 세우면 끝"이라는 학생에게 "가족이 이사하거나 동생이 학교를 옮기면 계획은 그대로일까요?"라고 되묻는다.',
          task: '가족과 지역의 연락·대피·비상용품 계획을 제안서로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가족 연락 계획을 2~3문장으로 쓰세요.', '재난 때 가족이 서로 연락하고, 통신이 안 되면 만날 곳을 쓰세요.', ['연락 방법을 썼다', '통신이 안 될 때 만날 곳을 썼다', '실제 전화번호·주소를 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['만날', '모일']], starter: '재난 때 우리 가족은 ~로 연락하고, 안 되면 ~', plus: '언제 계획을 다시 점검할지 썼다', d: 0.35 }),
            RWQ('대피 계획을 2~3문장으로 쓰세요.', '우리 지역 위험에 맞춰 갈 대피소와 피할 길을 쓰세요.', ['대피소 두 곳을 썼다', '피할 길을 썼다', '지역 위험과 이어진다'], { min: 40, max: 300, sent: [2, 3], must: [['대피소']], starter: '호우 때는 ~ 대피소로, ~ 길은 피한다.', plus: '재난 종류에 따라 다른 대피소를 썼다', d: 0.4 }),
            RWQ('비상용품 계획을 2~3문장으로 쓰세요.', '우리 가족에게 꼭 필요한 비상용품과 둘 곳을 쓰세요.', ['꼭 필요한 것부터 골랐다', '둘 곳을 정했다', '들고 움직일 수 있는 양이다'], { min: 40, max: 300, sent: [2, 3], must: [['식수', '물', '구급']], starter: '우리 가족 비상 가방에는 ~을 넣고 ~에 둔다.', plus: '유통기한·건전지를 점검할 주기를 썼다', d: 0.4, more: { conclude: '가족 계획은 연락·대피·용품을 함께, 한 번이 아니라 주기적으로 다시 봐요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서를 한 장으로 정리하세요.', columns: ['연락', '대피', '비상용품', '점검 주기'], cells: [['', '', '', '']] }] },
        notes: '학생의 실제 주소·가족 연락처를 쓰게 하지 않는다.',
      }),

      M({
        id: 'wrap.plan-check', type: 'wrap', title: '계획 점검표',
        method: '계획 점검표', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 앞의 세 항목만 함께 읽고 표시하게 한다.', base: '네 항목을 스스로 표시한다.', challenge: '다섯 항목을 모두 확인하고 빠진 항목을 제안서에 덧붙인다.' },
        wrap: {
          teacher: '"내 제안서에 실제로 들어간 것만 표시해 봐요. 빠진 칸이 보이면 그게 오늘 집에 가서 가족과 이야기할 거리예요." 모두 표시한 학생에게 "통신이 안 될 때 만날 곳은 어디로 정했나요?"라고 구체적으로 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '가족 계획 점검', items: [{ id: 'contact', text: '가족 연락 방법을 정했다' }, { id: 'meet', text: '통신이 안 될 때 만날 곳을 정했다' }, { id: 'shelter', text: '대피소 두 곳을 정했다' }, { id: 'kit', text: '꼭 필요한 비상용품을 골랐다' }, { id: 'review', text: '계획을 다시 볼 때를 정했다' }] }, prompt: '제안서에 담긴 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '"비상용품은 많을수록 좋다"에 대한 가장 알맞은 답은?', options: ['맞다, 많을수록 안전하다', '들고 움직일 수 있게 꼭 필요한 것부터 고른다', '비상용품은 필요 없다'], answer: 1, difficulty: 0.15, explain: '대피할 때 들 수 있어야 하고, 우리 가족에게 맞는 것이 중요해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '가족 계획 점검',
          items: [
            { type: 'check', prompt: '제안서에 담긴 것에 표시하세요.', options: ['연락 방법', '만날 곳', '대피소 두 곳', '비상용품', '점검 주기'] },
            { type: 'short', prompt: '오늘 집에서 가족과 먼저 이야기할 것 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 12. 일터·조리 현장 화상 예방과 처치 (12학년)
  // ======================================================================================================
  {
    const M = MOD('burn-work', [12]);
    const WCAUSE = [['튀는 기름', 35], ['뜨거운 물·국물', 25], ['오븐·그릴', 20], ['세척제', 10], ['뜨거운 김', 10]];
    const SHIFT = { text: '저녁 손님이 몰린 식당 주방, 튀김을 건지다 기름이 튀어 팔꿈치 안쪽이 따끔하다. 주문이 밀려 있다.', who: '나', choices: [
      { id: 'work', text: '바쁘니 참고 일을 계속한다', result: '한 시간 뒤 데인 자리가 붉게 부풀어 오른다.', impact: [{ who: '나', text: '처치 시간을 놓친다', tone: -1 }], why: '바빠도 처치는 나중으로 미루지 않아요.', ending: '바쁜 시간에 미룬 처치는 더 긴 쉬는 시간으로 돌아온다.' },
      { id: 'cool', text: '옆 사람에게 튀김을 맡기고 흐르는 시원한 물에 식힌다', result: '화끈거림이 가라앉는다.', impact: [{ who: '나', text: '화상이 깊어지지 않는다', tone: 1 }],
        next: { text: '식히고 나니 작은 물집이 생겼다. 사장님이 "괜찮으면 다시 들어와"라고 한다.', choices: [
          { id: 'report', text: '물집을 덮고, 다친 일을 사장님께 알려 사고 기록을 남겨 달라고 한다', result: '사장님이 구급함을 꺼내고 다친 시각과 경위를 적는다.', impact: [{ who: '나', text: '나중에 필요한 기록이 남는다', tone: 1 }],
            next: { text: '퇴근 무렵 물집이 넓어지고 욱신거린다.', choices: [
              { id: 'clinic', text: '병원 진료를 받고, 진료 사실을 사장님께 알린다', result: '병원에서 처치를 받고 며칠 조리를 쉬기로 한다.', impact: [{ who: '나', text: '알맞은 치료를 받는다', tone: 1 }], ending: '식히기 → 덮기 → 보고·기록 → 병원 판단, 일터에서도 순서는 같다.' },
              { id: 'hide', text: '잘릴까 봐 말하지 않고 다음 날도 출근한다', result: '뜨거운 주방에서 상처가 덧난다.', impact: [{ who: '나', text: '상처가 더 나빠진다', tone: -1 }], why: '일하다 다친 것은 알리고 치료받는 것이 내 권리예요.', ending: '숨긴 상처는 더 오래 일을 쉬게 만든다.' }] } },
          { id: 'tape', text: '물집을 터뜨리고 반창고를 붙인 뒤 다시 들어간다', result: '기름 증기 속에서 상처가 쓰라리다.', impact: [{ who: '나', text: '감염 위험이 커진다', tone: -1 }], why: '물집은 터뜨리지 않고 깨끗하게 덮어요.', ending: '빨리 돌아가려는 손이 상처를 키운다.' }] } }] };
    const SHIFT_R = [{ id: 'first', text: '바빠도 처치를 먼저 하고 보고한다' }, { id: 'record', text: '일하다 다친 것은 알리고 기록을 남긴다' }, { id: 'later', text: '바쁘면 처치는 나중에 해도 된다', why: '처치가 늦을수록 화상은 깊어져요.' }, { id: 'quiet', text: '말하면 불이익을 받으니 숨긴다', why: '다친 것을 알리고 치료받는 것은 일하는 사람의 권리예요.' }];
    const GEAR = { text: '첫 출근 날, 선배가 "튀김 장갑이랑 앞치마는 불편해서 다들 안 해"라며 맨손으로 튀김기를 다룬다.', who: '선배', choices: [
      { id: 'skip', text: '나도 보호구를 벗고 선배처럼 한다', result: '기름이 손등에 튄다.', impact: [{ who: '나', text: '맨살에 데인다', tone: -1 }], why: '보호구는 불편해도 화상을 막아 줘요.', ending: '모두가 안 한다고 위험이 줄지는 않는다.' },
      { id: 'wear', text: '보호구를 갖추고, 내 몸에 맞는 것이 없으면 사장님께 요청한다', result: '사장님이 맞는 크기의 장갑을 새로 주문한다.', impact: [{ who: '나', text: '안전하게 일한다', tone: 1 }],
        next: { text: '선배가 "유난이다"라며 웃는다.', choices: [
          { id: 'explain', text: '"다치면 우리 모두 바빠지잖아요"라고 웃으며 함께 쓰자고 한다', result: '선배도 앞치마를 두른다.', impact: [{ who: '선배', text: '함께 안전해진다', tone: 1 }], ending: '보호구는 혼자가 아니라 일터 전체의 습관일 때 힘이 있다.' },
          { id: 'take', text: '눈치가 보여 보호구를 벗는다', result: '다음 날 튀김 앞에서 망설인다.', impact: [{ who: '나', text: '다시 위험에 놓인다', tone: -1 }], ending: '눈치에 벗은 보호구는 다치고 나서야 생각난다.' }] } }] };
    const GEAR_R = [{ id: 'wear', text: '보호구는 불편해도 화상을 막는다' }, { id: 'ask', text: '맞는 보호구가 없으면 고용주에게 요청한다' }, { id: 'all', text: '다들 안 하니 안 해도 된다', why: '여럿이 한다고 안전해지지 않아요.' }];

    MODS.push(
      M({
        id: 'intro.case-chart', type: 'intro', title: '일터 화상 원인 막대',
        method: '예시 일터 화상 원인 막대', tool: 'chart', minutes: 7,
        levels: { easy: '막대 셋(기름·물·오븐)만 함께 읽는다.', base: '막대 다섯을 읽고 조리 현장의 위험을 고른다.', challenge: '원인마다 막을 수 있는 보호구·습관을 해석해 말한다.' },
        intro: {
          teacher: '"예시 자료예요. 실제 통계가 아니라 조리 일터의 화상 원인을 견주려고 만든 막대예요. 아르바이트를 한다면 무엇을 가장 조심해야 할까요?" 시연 단추로 튀는 기름 막대가 골라지는 모습을 보여 준다. "화상은 실수한 사람만 다쳐요"라는 말이 나오면 "세척제나 뜨거운 김은 실수하지 않아도 만날 수 있을까요?"라고 되묻는다. 일터의 예방은 내 습관과 고용주의 준비가 함께라는 점을 예고한다.',
          student: '예시 막대에서 조리 일터 화상의 큰 원인을 찾고, 아르바이트에서 조심할 것을 골라 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '조리 일터 화상 원인(예시 자료, 실제 통계 아님)', unit: '%', xLabel: '원인', yLabel: '비율', data: WCAUSE, question: '가장 큰 원인은?', choices: WCAUSE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'paper bar columns standing in a paper restaurant kitchen, a fryer splashing oil on the tallest, a steaming pot and an oven beside the others, a paper apron and gloves hanging on a hook', banner: '주방 화상은 어디서?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 수업용 예시다. 일터 화상 예방 자료는 안전보건공단 안내로 교사가 확인해 제시한다.',
      }),
      M({
        id: 'intro.body-find', type: 'intro', title: '현장 화상 부위',
        method: '현장 화상 부위', tool: 'body', minutes: 7,
        levels: { easy: '데기 쉬운 부위 두 곳(손목·팔꿈치)만 함께 고른다.', base: '부위 세 곳을 고른다.', challenge: '부위를 고른 뒤 부위마다 막아 줄 보호구(장갑·토시·앞치마·보안경)를 말한다.' },
        intro: {
          teacher: '"튀김기 앞에 선다면 몸 어디가 가장 먼저 데일까요?" 시연 단추로 손목·팔꿈치·가슴이 골라지는 모습을 보여 준다. 몸 그림에 손 칸이 없으니 손등은 자기 손을 짚어 가리키게 한다. "보호구는 불편해서 안 써도 돼요"라는 말이 나오면 "고른 부위마다 막아 줄 것이 무엇인지 하나씩 짝지어 볼까요?"라고 되묻는다.',
          student: '조리 현장에서 데기 쉬운 부위를 몸 그림에서 고르고, 그 부위를 막아 줄 보호구를 떠올려 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '가슴', '배', '팔꿈치', '손목', '허벅지'], names: true }, sequence: [{ parts: ['손목', '팔꿈치', '가슴'] }] },
          art: { draw: 'a paper cook figure in front of a fryer with small paper stars on the wrists, forearms and chest, a paper apron, long gloves and goggles floating nearby ready to be worn', banner: '어디를 지킬까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '몸 그림에는 손·얼굴 칸이 없어 손목·눈으로 대신하고, 손등은 학생이 자기 손을 짚게 한다.',
      }),

      M({
        id: 'activity.shift-choice', type: 'activity', title: '식당 기름 튐 갈림길',
        method: '식당 아르바이트 기름 튐 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 두 번(데인 순간·사장님의 말)까지 가서 끝 장면을 본다.', base: '갈림길 세 번(퇴근 무렵 병원 판단까지) 끝까지 따라간다.', challenge: '세 번째 갈림길까지 간 뒤 근거 카드를 골라 "처치는 나중"·"숨긴다" 카드를 걸러 낸다.' },
        activity: {
          title: '식당 기름 튐 갈림길', tool: 'dilemma',
          teacher: '"손님이 몰린 저녁, 기름이 튀어 팔이 따끔해요. 주문은 밀려 있어요. 여러분은 어떻게 할까요?" 선택마다 결과를 소리 내어 읽게 한다. \'참고 계속\'을 고른 학생에게 "한 시간 뒤 장면에서 바빠진 사람은 누구인가요?"라고 묻는다. 보고 장면에서는 일하다 다친 일을 알리고 기록을 남기는 것이 나를 지키는 일이라는 점, 숨기면 불이익이 아니라 더 큰 상처로 돌아온다는 점을 짚는다.',
          task: '식당 기름 튐 갈림길을 따라가며 처치·보고·병원 판단을 고르고 결과를 확인해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('바쁜 시간 기름에 데었을 때 처치·보고·병원 판단까지 하는 길을 고르세요.', SHIFT, [['cool', 'report', 'clinic']], SHIFT_R, ['first', 'record'], { d: 0.4 }),
            EXPLOREQ('참고 일한 길과 숨긴 길도 끝까지 가 보고 결과를 견주세요.', SHIFT, SHIFT_R, ['참고 일한 길의 결과를 확인했다', '알린 길과 숨긴 길을 견주었다'], { d: 0.35 }),
            DILQ('선배가 보호구 없이 일하자고 할 때 알맞은 길을 고르세요.', GEAR, [['wear', 'explain']], GEAR_R, ['wear', 'ask'], { d: 0.35, more: { conclude: '일터 화상은 보호구로 막고, 다치면 바빠도 먼저 처치하고 알려 기록을 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"바쁘면 처치는 나중에 한다"가 왜 틀렸는지 갈림길 결과를 근거로 한 문장으로 쓰세요.' }] },
        notes: '가상 상황이다. 일하다 다쳤을 때 보고·산업재해 절차는 고용노동부·근로복지공단 안내로 교사가 확인해 덧붙인다.',
      }),
      M({
        id: 'activity.care-order', type: 'activity', title: '일터 화상 처치 순서',
        method: '처치 순서 놓기', tool: 'kitchen', minutes: 16,
        levels: { easy: '처치 카드 3장을 차례로 놓는다.', base: '처치 카드 4장을 놓고, 세척제가 튄 때의 순서와 사고 보고에 넣을 내용도 정한다.', challenge: '함정 카드(물집 터뜨리기·계속 일하기)를 남기고 보고 내용까지 골라 짝에게 설명한다.' },
        activity: {
          title: '일터 화상 처치 순서', tool: 'kitchen',
          teacher: '"주방에서 데었을 때 처치 순서를 놓아 봐요. 반지·시계는 언제 빼야 할까요?" 순서 문항에서 \'덮기\'를 \'식히기\' 앞에 두는 학생에게 "열이 남아 있는 채로 덮으면 어떻게 될까요?"라고 묻는다. 세척제 문항에서는 약품이 튀면 오래 씻어 내고 제품 이름을 알린다는 점을, 보고 문항에서는 언제·어디서·어떻게 다쳤는지가 기록의 뼈대라는 점을 짚는다.',
          task: '일터 화상 처치 카드를 차례로 놓고 사고 보고에 넣을 내용을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('기름에 데었을 때 처치 카드를 차례로 놓으세요.', ['흐르는 시원한 물로 식히기', '붓기 전에 반지·시계 빼기', '깨끗한 거즈로 덮기', '보고하고 병원 판단 받기'], { k: 3, traps: ['물집 터뜨리기', '계속 일하기'], d: 0.3, opt: { autoMotif: false } }),
            ORDERQ('세척제가 팔에 튀었을 때 처치 카드를 차례로 놓으세요.', ['묻은 옷이나 장갑 벗기', '흐르는 물로 오래 씻기', '제품 이름을 알리고 보고하기'], { k: 3, traps: ['마른 수건으로 문지르기'], d: 0.35, opt: { autoMotif: false } }),
            CHECKQ('사고 보고에 넣을 내용만 표시하세요.', '일터 사고 보고', [
              ['when', '다친 시각', true], ['where', '다친 곳(작업 자리)', true], ['how', '어떻게 다쳤는지', true], ['care', '한 처치', true], ['blame', '누구 탓인지', false], ['menu', '그날 많이 팔린 메뉴', false],
            ], { d: 0.3, more: { conclude: '식히기 → 장신구 빼기 → 덮기 → 보고·병원 판단. 보고에는 언제·어디서·어떻게·무슨 처치를 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사고 보고 쪽지를 써 보세요(가상).', columns: ['언제', '어디서', '어떻게', '한 처치'], cells: [['', '', '', '']] }] },
        notes: '처치 순서는 일반 응급처치 안내를 줄인 것이다. 교사가 공식 응급처치 지침으로 확인해 제시한다.',
      }),
      M({
        id: 'activity.rule-proposal', type: 'activity', title: '일터 예방 수칙 제안',
        method: '일터 예방 수칙 제안', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '보호구·작업 습관·다쳤을 때 세 칸의 수칙을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 고용주가 할 일까지 나누어 쓴다.' },
        activity: {
          title: '일터 예방 수칙 제안', tool: 'rubric-writing',
          teacher: '"아르바이트할 가게 주방 벽에 붙일 화상 예방 수칙을 제안해 봐요." 수칙이 \'조심하기\'처럼 막연한 학생에게 "그 수칙을 지켰는지 사장님이 눈으로 확인할 수 있을까요?"라고 묻는다. "보호구는 불편해서 안 써도 된다"는 학생에게는 오늘 몸 그림에서 고른 부위를 다시 보게 한다. 일터 안전은 일하는 사람의 습관만이 아니라 고용주가 보호구·교육을 갖추는 일이라는 점을 짚는다.',
          task: '조리 일터 화상 예방 수칙을 제안하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('보호구 수칙을 2~3문장으로 쓰세요.', '조리 일터에서 쓸 보호구와 쓰는 때를 수칙으로 쓰세요.', ['보호구 이름을 썼다', '쓰는 때를 썼다', '지켰는지 확인할 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['장갑', '앞치마', '토시']], starter: '튀김기 앞에서는 ~을 착용한다.', plus: '고용주가 준비할 것을 썼다', d: 0.35 }),
            RWQ('작업 습관 수칙을 2~3문장으로 쓰세요.', '기름·뜨거운 물·세척제를 다룰 때 지킬 습관을 수칙으로 쓰세요.', ['구체적인 행동이다', '원인과 이어진다', '바쁠 때도 지킬 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['천천히', '물기', '손잡이', '뚜껑']], starter: '기름에 재료를 넣을 때는 ~', plus: '바쁜 시간에 지킬 방법을 썼다', d: 0.4 }),
            RWQ('다쳤을 때의 수칙을 2~3문장으로 쓰세요.', '일하다 데었을 때 지킬 처치와 보고 수칙을 쓰세요.', ['처치 순서를 썼다', '보고하고 기록한다고 썼다', '숨기지 않는다고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['식히', '보고']], starter: '데면 바로 ~하고, ~에게 알린다.', plus: '고용주가 할 일(구급함·기록·병원 안내)을 썼다', d: 0.4, more: { conclude: '일터 수칙은 눈으로 확인할 수 있는 행동으로, 일하는 사람과 고용주의 몫을 함께 적어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '수칙을 나누어 정리하세요.', columns: ['', '일하는 사람', '고용주'], cells: [['보호구', '', ''], ['다쳤을 때', '', '']] }] },
      }),

      M({
        id: 'wrap.summary-map', type: 'wrap', title: '일터 화상 정리 지도',
        method: '일터 화상 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 예방·처치 두 가지를 함께 채운다.', base: '예방·처치·보고 세 가지에 카드를 단다.', challenge: '권리 가지까지 네 가지에 카드를 단다.' },
        wrap: {
          teacher: '"\'일터 화상\'을 네 가지로 정리해 봐요. 막기, 다쳤을 때, 알리기, 그리고 내 권리." 카드를 단 뒤 \'참고 계속 일하기\'가 어디에도 들어가지 않는 까닭을 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '일터 화상', slots: ['예방', '처치', '보고', '권리'], cards: ['튀김 장갑·앞치마', '흐르는 물로 식히기', '사장님께 알리기', '사고 기록 남기기', '다치면 치료받을 권리', '참고 계속 일하기'] }, prompt: '카드를 일터 화상 가지에 다세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { 예방: ['튀김 장갑·앞치마'], 처치: ['흐르는 물로 식히기'], 보고: ['사장님께 알리기', '사고 기록 남기기'], 권리: ['다치면 치료받을 권리'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '일하다 데었을 때 가장 알맞은 것은?', options: ['손님이 많으면 참고 일한다', '먼저 식히고, 알리고, 기록을 남긴다', '잘릴까 봐 숨긴다'], answer: 1, difficulty: 0.1, explain: '처치는 미루지 않고, 다친 일은 알리고 기록을 남겨요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일터 화상 정리',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '일하다 다치면 숨기지 말고 ___에게 알려 기록을 남긴다.', answer: '고용주(사장님)' },
            { type: 'short', prompt: '아르바이트 첫날 확인할 안전 사항 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.self-check', type: 'wrap', title: '일터 화상 스스로 점검',
        method: '스스로 점검', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 앞의 두 항목만 함께 읽고 표시하게 한다.', base: '세 항목을 스스로 표시한다.', challenge: '네 항목을 모두 표시하고, 표시하기 어려운 항목을 짝에게 다시 설명한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 지금 할 수 있는 것만 표시해 봐요." 표시한 뒤 짝끼리 처치 순서를 서로 말해 보게 한다. 모든 항목을 표시한 학생에게 "세척제가 튀었을 때 첫 처치를 말해 볼까요?"라고 하나를 골라 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '일터 화상 스스로 점검' }, prompt: '지금 할 수 있는 것을 스스로 점검해 표시하세요.', target: { selfCheck: ['처치 순서를 말할 수 있다', '세척제가 튀었을 때 처치를 안다', '사고 보고에 넣을 내용을 안다', '보호구를 요청할 수 있다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '"보호구는 불편해서 안 써도 된다"에 대한 가장 알맞은 답은?', options: ['맞다, 일이 느려진다', '불편해도 화상을 막아 주니 쓰고, 맞지 않으면 요청한다', '선배가 안 쓰면 안 써도 된다'], answer: 1, difficulty: 0.15, explain: '보호구는 불편함보다 큰 위험을 막아요. 맞지 않으면 고용주에게 요청해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일터 화상 점검',
          items: [
            { type: 'check', prompt: '할 수 있는 것에 표시하세요.', options: ['처치 순서', '세척제 처치', '보고 내용', '보호구 요청'] },
            { type: 'short', prompt: '일하다 다쳤을 때 고용주에게 할 말을 한 문장으로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 분류판(sortboard 글 카드 모드) 모듈 — 주제 2·5·6·7·9·11
  // ======================================================================================================
  // 분류판 문항: groups = 바구니마다 카드 글. 쉬움 = 바구니마다 앞 k장, 도전 = more(바구니마다 더할 카드 + 함정)
  const SBQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const it = { prompt, toolOptions: { slots, cards: [...mix(groups), ...traps] }, target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    it.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); it.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { more: hard.flat() }, target: tgt(hg) }; }
    return Object.assign(it, more);
  };
  {
    const M = MOD('urban-flood', [10]);
    MODS.push(M({
      id: 'wrap.place-sort', type: 'wrap', title: '장소별 침수 행동 정리',
      method: '장소별 위험과 행동 정리', tool: 'sortboard', minutes: 10,
      levels: { easy: '교사가 바구니마다 첫 카드를 함께 넣어 보이고 나머지를 학생이 넣는다.', base: '행동 카드 6장을 지하·지하차도·하천변 바구니에 나눈다.', challenge: '나눈 뒤 세 장소에 공통인 원칙(낮은 곳을 피해 높은 곳으로)을 출구 질문에서 고른다.' },
      wrap: {
        teacher: '"오늘 본 세 장소에서 할 행동을 바구니에 나눠 담아 봐요." 카드를 나눈 뒤 \'물이 발목이면 건넌다\' 카드가 어느 바구니에도 들어가지 않는 까닭을 묻는다. 출구 2번에서는 세 바구니의 공통점을 찾게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['지하 공간', '지하차도', '하천변'], cards: ['계단으로 물이 들면 바로 위층으로', '지하 주차장에 차 빼러 가지 않기', '물 고이면 차로 들어가지 않기', '들어가려는 어른 말리기', '산책로에서 바로 벗어나기', '하천 옆 도로로 돌아가지 않기', '물이 발목이면 걸어서 건너기'] }, prompt: '행동 카드를 장소 바구니에 나누어 담으세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { '지하 공간': ['계단으로 물이 들면 바로 위층으로', '지하 주차장에 차 빼러 가지 않기'], 지하차도: ['물 고이면 차로 들어가지 않기', '들어가려는 어른 말리기'], 하천변: ['산책로에서 바로 벗어나기', '하천 옆 도로로 돌아가지 않기'] } }, difficulty: 0.25 },
          { type: 'choice', prompt: '세 장소에 공통인 원칙은?', options: ['물이 얕으면 지나간다', '물이 모이는 낮은 곳을 피해 높은 곳으로 간다', '차 안에서 기다린다'], answer: 1, difficulty: 0.15, explain: '지하·지하차도·하천변은 모두 물이 모이는 낮은 곳이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '장소별 침수 행동',
        items: [
          { type: 'table', prompt: '장소별 행동을 한 줄씩 쓰세요.', columns: ['장소', '할 행동'], cells: [['지하 공간', ''], ['지하차도', ''], ['하천변', '']] },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '극한 호우 때는 물이 모이는 ___ 곳을 피한다.', answer: '낮은' },
        ],
      },
    }));
  }
  {
    const M = MOD('quake-structure', [11]);
    MODS.push(M({
      id: 'activity.factor-sort', type: 'activity', title: '장소별 위험 요인 분석',
      method: '장소별 위험 요인 분석', tool: 'sortboard', minutes: 16,
      levels: { easy: '바구니마다 요인 카드 두 장씩(6장)을 나누고, 틀린 바구니에 넣으면 바로 되돌아온다.', base: '요인 카드 9장을 실험실·체육관·강당 바구니에 나누고 요인마다 대처를 붙인다.', challenge: '헷갈리는 카드와 함정 카드가 더해지고, 세 장소의 공통점을 찾는다.' },
      activity: {
        title: '장소별 위험 요인 분석', tool: 'sortboard',
        teacher: '"같은 지진이라도 장소마다 위험한 것이 달라요. 요인 카드를 장소 바구니에 나눠 봐요." 카드를 나눈 뒤 대처 문항으로 넘어간다. \'넓어서 안전\' 카드를 체육관 바구니에 넣는 학생에게 "그 카드는 위험 요인일까요, 오해일까요?"라고 묻는다. 세 장소의 공통점은 \'머리 위와 옆에서 떨어지거나 넘어지는 것\'이라는 점을 마지막 문항에서 짚는다.',
        task: '위험 요인 카드를 장소 바구니에 나누고, 요인마다 대처를 붙여요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SBQ('지진 때 위험 요인 카드를 장소 바구니에 나누세요.', ['실험실', '체육관', '강당'], [
            ['넘어지는 시약장', '가열 중인 불', '깨지는 유리 기구'],
            ['흔들리는 천장 조명', '농구대', '바닥에 흩어진 기구'],
            ['무대 조명', '매달린 현수막', '좁은 객석 통로'],
          ], { k: 2, hard: [['새어 나오는 가스'], ['큰 유리창'], ['한꺼번에 몰리는 출입문']], traps: ['넓은 곳이라 위험이 없음'], d: 0.3 }),
          SBQ('위험 요인마다 알맞은 대처 카드를 장소 바구니에 나누세요.', ['실험실 대처', '체육관 대처', '강당 대처'], [
            ['시약장에서 떨어져 실험대 아래로', '멈춘 뒤 불·가스 정리'],
            ['조명 아래를 피해 몸 낮추기', '가방으로 머리 보호'],
            ['무대에서 떨어져 의자 사이에 몸 낮추기', '멈춘 뒤 안내에 따라 나누어 나가기'],
          ], { k: 1, traps: ['흔들릴 때 정리부터 하기'], d: 0.35 }),
          { prompt: '세 장소에 공통인 지진 위험 요인 카드만 바구니에 담으세요.', toolOptions: { slots: ['공통 요인', '한 장소만의 요인'], cards: ['머리 위에서 떨어지는 것', '옆에서 넘어지는 것', '가열 중인 불', '매달린 현수막'] }, target: { sort: { '공통 요인': ['머리 위에서 떨어지는 것', '옆에서 넘어지는 것'], '한 장소만의 요인': ['가열 중인 불', '매달린 현수막'] } }, difficulty: 0.35, conclude: '장소마다 요인은 달라도 공통 원칙은 같아요 — 떨어지고 넘어지는 것을 피해 몸을 보호하고, 멈춘 뒤 대피해요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '장소별 위험 요인과 대처를 정리하세요.', columns: ['장소', '위험 요인', '대처'], cells: [['실험실', '', ''], ['체육관', '', ''], ['강당', '', '']] }] },
    }));
  }
  {
    const M = MOD('collapse-gas', [11]);
    MODS.push(M({
      id: 'wrap.cause-sort', type: 'wrap', title: '사고 원인 분류 정리',
      method: '원인 분류 정리', tool: 'sortboard', minutes: 10,
      levels: { easy: '교사가 바구니마다 첫 카드를 함께 넣어 보이고 나머지를 학생이 넣는다.', base: '원인 카드 6장을 직접 원인·관리 원인 바구니에 나눈다.', challenge: '나눈 뒤 이용자로서 내가 끊을 수 있는 고리를 출구 질문에 쓴다.' },
      wrap: {
        teacher: '"오늘 분석한 원인을 두 바구니에 나눠 봐요. 무엇이 직접 일으켰나, 왜 막지 못했나." 카드를 나눈 뒤 \'운이 나빴다\' 카드가 어느 바구니에도 들어가지 않는 까닭을 묻는다. 출구 3번에서 이용자인 내가 끊을 수 있는 고리를 쓰게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['직접 원인', '관리 원인'], cards: ['새어 나온 가스에 불꽃이 튐', '기둥이 무게를 못 견딤', '낡은 가스관을 그대로 씀', '징후 신고를 미룸', '점검 날짜를 건너뜀', '금 간 벽을 그냥 칠함', '운이 나빴음'] }, prompt: '원인 카드를 직접 원인·관리 원인 바구니에 나누세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { '직접 원인': ['새어 나온 가스에 불꽃이 튐', '기둥이 무게를 못 견딤'], '관리 원인': ['낡은 가스관을 그대로 씀', '징후 신고를 미룸', '점검 날짜를 건너뜀', '금 간 벽을 그냥 칠함'] } }, difficulty: 0.25 },
          { type: 'choice', prompt: '"사고는 운이 나빠서 생긴다"에 대한 가장 알맞은 답은?', options: ['맞다, 막을 수 없다', '징후와 관리의 고리가 이어져 생기므로 끊을 자리가 있다', '전문가만 막을 수 있다'], answer: 1, difficulty: 0.15, explain: '사고 전에는 대개 징후가 있고, 알리고 점검하면 고리를 끊을 수 있어요.' },
          { type: 'short', prompt: '건물 이용자로서 내가 끊을 수 있는 고리 하나를 쓰세요.' },
        ],
      },
      worksheet: {
        title: '사고 원인 두 겹',
        items: [
          { type: 'table', prompt: '원인을 두 겹으로 정리하세요.', columns: ['직접 원인', '관리 원인'], cells: [['', '']] },
          { type: 'short', prompt: '징후를 보았을 때 내가 알릴 곳을 쓰세요.' },
        ],
      },
    }));
  }
  {
    const M = MOD('wildfire', [11]);
    MODS.push(M({
      id: 'activity.cause-sort', type: 'activity', title: '산불 원인과 예방 행동',
      method: '산불 원인과 예방 행동', tool: 'sortboard', minutes: 16,
      levels: { easy: '바구니마다 카드 두 장씩을 나누고, 틀린 바구니에 넣으면 바로 되돌아온다.', base: '원인 카드를 사람의 부주의·자연 조건 바구니에 나누고, 원인마다 예방 행동을 나눈다.', challenge: '헷갈리는 카드와 함정 카드가 더해지고, 예방 행동의 공통 원칙을 찾는다.' },
      activity: {
        title: '산불 원인과 예방 행동', tool: 'sortboard',
        teacher: '"산불은 왜 날까요? 사람의 부주의와 자연 조건으로 나눠 봐요." 카드를 나눈 뒤 예방 문항에서 원인마다 막을 행동을 고르게 한다. \'작은 불씨는 괜찮다\'를 예방 바구니에 넣는 학생에게 "캠핑장 갈림길에서 그 불씨는 어디로 날아갔나요?"라고 묻는다. 자연 조건은 바꿀 수 없지만, 그런 날 사람이 불씨를 더 조심할 수는 있다는 점을 짚는다.',
        task: '산불 원인 카드와 예방 행동 카드를 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SBQ('산불 원인 카드를 바구니에 나누세요.', ['사람의 부주의', '자연 조건'], [
            ['논·밭두렁 태우기', '산에서 버린 담배꽁초', '캠핑장에 남긴 불씨'],
            ['건조한 날씨', '강한 바람', '쌓인 마른 낙엽'],
          ], { k: 2, hard: [['허가 없이 피운 모닥불'], ['비가 오래 안 옴']], traps: ['비 온 다음 날의 젖은 숲'], d: 0.3 }),
          SBQ('원인마다 막을 예방 행동 카드를 바구니에 나누세요.', ['불씨 관리', '야외 활동 수칙'], [
            ['불씨는 물로 완전히 끄기', '꽁초는 산에 버리지 않기'],
            ['허가된 곳에서만 불 피우기', '건조한 날 산불 소식 확인하기'],
          ], { k: 1, traps: ['작은 불씨는 그냥 두기'], d: 0.35 }),
          SBQ('원인 카드와 예방 행동 카드를 짝 바구니에 나누세요.', ['캠핑장 불씨', '담배꽁초'], [
            ['물을 붓고 저어 완전히 끄기', '식은 재는 수거함에'],
            ['산에서는 피우지 않기', '꽁초는 꺼서 가져오기'],
          ], { k: 1, d: 0.35, more: { conclude: '산불 원인은 대부분 사람의 불씨예요. 자연 조건이 나쁜 날일수록 불씨를 끝까지 끄고 가져와요.' } }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '원인과 예방을 짝지어 정리하세요.', columns: ['원인', '예방 행동'], cells: [['', ''], ['', '']] }] },
    }));
  }
  {
    const M = MOD('independent-fire', [12]);
    MODS.push(M({
      id: 'wrap.habit-sort', type: 'wrap', title: '생활 습관 나누기',
      method: '습관 나누기', tool: 'sortboard', minutes: 10,
      levels: { easy: '교사가 바구니마다 첫 카드를 함께 넣어 보이고 나머지를 학생이 넣는다.', base: '습관 카드 6장을 안전·위험 바구니에 나누고 바꿀 하나를 고른다.', challenge: '바꿀 습관을 고른 뒤 그것을 대신할 안전 습관을 활동지에 쓴다.' },
      wrap: {
        teacher: '"자취·기숙사 생활 습관을 안전과 위험으로 나눠 봐요." 카드를 나눈 뒤 출구 3번에서 내가 바꿀 습관 하나와 대체 습관을 쓰게 한다. \'충전기를 꽂은 채 외출\'을 안전 쪽에 넣는 학생에게 "집이 비어 있을 때 충전기가 뜨거워지면 누가 알아챌까요?"라고 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['안전한 습관', '위험한 습관'], cards: ['외출 전 플러그 뽑기', '감지기 시험 단추 누르기', '현관 앞 짐 치우기', '충전기를 꽂은 채 외출', '냄비 올리고 샤워하기', '난로 옆에 빨래 말리기'] }, prompt: '습관 카드를 안전·위험 바구니에 나누세요.', target: { sort: { '안전한 습관': ['외출 전 플러그 뽑기', '감지기 시험 단추 누르기', '현관 앞 짐 치우기'], '위험한 습관': ['충전기를 꽂은 채 외출', '냄비 올리고 샤워하기', '난로 옆에 빨래 말리기'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"멀티탭 문어발은 괜찮다"에 대한 가장 알맞은 답은?', options: ['구멍이 남아 있으면 괜찮다', '열을 내는 제품을 겹쳐 꽂으면 과부하로 불이 날 수 있다', '비싼 멀티탭이면 괜찮다'], answer: 1, difficulty: 0.15, explain: '구멍 수가 아니라 전기가 감당할 양이 기준이에요.' },
          { type: 'short', prompt: '내가 바꿀 습관 하나와 대신할 안전 습관을 쓰세요.' },
        ],
      },
      worksheet: {
        title: '생활 습관 나누기',
        items: [
          { type: 'table', prompt: '바꿀 습관과 대체 습관을 쓰세요.', columns: ['바꿀 습관', '대체 습관'], cells: [['', '']] },
          { type: 'check', prompt: '이번 주 해 볼 것에 표시하세요.', options: ['외출 전 플러그 뽑기', '감지기 시험', '현관 앞 정리', '충전 자리 바꾸기'] },
        ],
      },
    }));
  }
  {
    const M = MOD('family-plan', [12]);
    MODS.push(M({
      id: 'wrap.role-sort', type: 'wrap', title: '재난 대비 역할 나누기',
      method: '역할 나누기', tool: 'sortboard', minutes: 10,
      levels: { easy: '교사가 바구니마다 첫 카드를 함께 넣어 보이고 나머지를 학생이 넣는다.', base: '할 일 카드 6장을 가족·지역·나 바구니에 나눈다.', challenge: '나눈 뒤 우리 계획에서 빠진 일 하나를 출구 질문에 쓴다.' },
      wrap: {
        teacher: '"재난 대비는 누구의 일일까요? 할 일 카드를 가족·지역·나 바구니에 나눠 봐요." 나눈 뒤 \'나\' 바구니가 비어 있는 학생에게 "오늘 만든 제안서를 가족에게 보여 주는 일은 누구의 몫일까요?"라고 묻는다. 출구 3번에서 빠진 일을 쓰게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['가족', '지역', '나'], cards: ['비상 가방 함께 꾸리기', '만날 곳 정하기', '대피소 지정·안내', '재난문자 보내기', '제안서를 가족에게 보여 주기', '재난문자 알림 켜 두기'] }, prompt: '할 일 카드를 가족·지역·나 바구니에 나누세요.', target: { sort: { 가족: ['비상 가방 함께 꾸리기', '만날 곳 정하기'], 지역: ['대피소 지정·안내', '재난문자 보내기'], 나: ['제안서를 가족에게 보여 주기', '재난문자 알림 켜 두기'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"계획은 한 번 세우면 끝이다"에 대한 가장 알맞은 답은?', options: ['맞다, 다시 볼 필요 없다', '가족·지역 상황이 바뀌면 다시 점검한다', '지역이 대신 세워 준다'], answer: 1, difficulty: 0.15, explain: '이사·진학·새 위험이 생기면 계획도 바뀌어야 해요.' },
          { type: 'short', prompt: '우리 계획에서 빠진 일 하나를 쓰세요.' },
        ],
      },
      worksheet: {
        title: '재난 대비 역할',
        items: [
          { type: 'table', prompt: '역할을 나누어 쓰세요.', columns: ['가족', '지역', '나'], cells: [['', '', '']] },
          { type: 'short', prompt: '계획을 다시 점검할 때를 쓰세요.' },
        ],
      },
    }));
  }

  PaperLessons.registerModules(MODS);
})();
