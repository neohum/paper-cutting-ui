/* 창체 법정교육 영양·식생활 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 food 고.
 * 근거: 학교급식법 제13조, 식생활교육지원법 제26조 — 건강한 식생활·영양교육 연 2회 이상(research-mandatory §1), 환경·지속가능발전 고 주제(§2).
 * 쓰는 원칙: 음식·몸을 좋다/나쁘다로 낙인찍지 않는다(체형·외모 평가, 다이어트·보충제 권하기 없음). 학생 자신의 식습관·몸무게·건강·가정 형편을 묻거나 채점하지 않는다(가상 인물).
 *   가격·열량·나트륨 등 수치는 모두 수업용 가상 값(화면 제목에 밝힘). 영양 권장량·기준치는 근거 파일에 없어 쓰지 않는다.
 * 주제 4개, 계획 모듈 32개 전부.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처. 주제 블록마다 첫머리 주석에도 있다)
 *   사람 확인(self-cook):
 *     - [self-cook 전체] 가격·식비·남는 돈은 모두 수업용 가상 값(실제 물가 아님) — 실제 가격은 한국소비자원 참가격·지역 물가 안내로 교사가 바꿔 넣을 수 있다
 *     - [self-cook.activity.week-shop · wrap.peer-review · wrap.plan-doc] '곡류·단백질 식품·채소·과일·우유' 같은 식품군 나누기 — 농림축산식품부·보건복지부·식품의약품안전처 「식생활 지침」·식품구성자전거 안내
 *     - [self-cook.activity.fridge-check · activity.menu-plan] 잎채소·두부처럼 쉽게 상하는 재료를 먼저 쓰고, 소분해 냉장·냉동하며, 남은 밥은 식혀 냉동한다는 보관 일반 수칙 — 식품의약품안전처 식품 보관·식중독 예방 안내
 *     - [self-cook.activity.cvs-dilemma] 편의점 간편식 조합에서 채소·과일이 빠지기 쉽고 영양 표시(뒷면)로 견줄 수 있다는 설명 — 식품의약품안전처 영양성분 표시 안내
 *   계획대로 못 한 것:
 *     - activity.week-shop: economy 예산 판은 고른 물건만 센다 — '사흘/이레'는 예산과 고를 물건 수(쉬움 사흘치 예산·물건 6개, 기본 이레치 예산·물건 10개)로, '식품군 지키기'는 꼭 넣을 물건(must)으로 했다.
 *     - activity.menu-plan: 시간 줄은 칸에 카드 한 장 — '재료 겹침'은 남은 재료를 이어 쓰는 차례(order)·장 본 뒤 쓰는 때 나누기(sort)·같은 재료로 두 요리 고르기(pick)로 했다.
 *     - 도입 levels 는 시연이 하나라 교사 진행 방식(결정 하나/둘을 함께 찾기)으로 적었다. 정리 출구 질문은 단계별 판이 없어 문장 수 차이는 교사 진행과 쉬운 활동지로 둔다.
 *
 *
 *   사람 확인(sustainable):
 *     - [sustainable 전체] 잔반 그래프·지도 거리·산지·철은 모두 수업용 가상 자료(실제 통계·실제 지역 아님) — 실제 자료는 환경부(음식물류 폐기물 통계)·학교 급식실 자료로 교사가 바꿔 넣을 수 있다
 *     - [sustainable.intro.waste-chain] 생산·유통·판매·가정·급식 단계마다 음식이 버려지는 까닭(모양 기준 선별·운송 중 상함·유통기한 임박·과다 구매·배식량 차이) 일반 설명 — 환경부·농림축산식품부 음식물 쓰레기 줄이기 안내
 *     - [sustainable.activity.season-map] 이동 거리가 짧은 지역 먹거리·제철 먹거리가 운송·보관에 드는 자원을 줄일 수 있다는 설명, 지도 속 재료의 '나는 철'(배추 가을·겨울, 딸기 봄 등) — 농림축산식품부 제철 농산물·로컬푸드 안내
 *     - [sustainable.activity.fridge-dilemma · activity.leftover-cook] 유통기한·소비기한 표시의 뜻과 보관·재가열 일반 수칙, 음식을 나눌 때의 위생 — 식품의약품안전처 소비기한 표시제·식중독 예방 안내
 *     - [sustainable.activity.policy-debate] 자율 배식 운영 방식(학생이 양을 정함)과 영양 기준 사이의 쟁점 — 교육부·학교급식 운영 안내(학교 영양 선생님 확인)
 *   계획대로 못 한 것:
 *     - activity.season-map: 지도는 문항마다 핀 하나 — '두 곳/네 곳'은 지도에 놓인 장소 수(쉬움 4곳·이름 읽기 글자, 기본·도전 8곳)로, '계절에 따라 바꾸기'는 도전에서 철이 다른 문항으로 했다.
 *     - activity.leftover-cook: 실제 조리는 하지 않고 조리 순서 카드만 놓는다(칼·불 쓰는 실습 없음).
 *     - 도입 levels 는 시연이 하나라 교사 진행 방식으로 적었다. 정리 출구 질문은 단계별 판이 없어 문장 수 차이는 교사 진행과 쉬운 활동지로 둔다.
 *
 *
 *   사람 확인(ad-analysis):
 *     - [ad-analysis 전체] 식품 표시(영양성분·원재료·1회 제공량·주의 문구)를 읽는 법, '고카페인 함유' 표시와 어린이·임산부 등 주의 문구가 붙는다는 것 → 식품의약품안전처(식품표시 안내)
 *     - [intro.claim-sort · activity.ad-vs-label] '무설탕'처럼 표시 기준이 있는 문구가 다른 당류·감미료가 없다는 뜻은 아니라는 설명 → 식품의약품안전처(영양표시·강조표시 기준)
 *     - [activity.debate · wrap.critique] 어린이·청소년 대상 고열량·저영양 식품 광고를 제한하는 제도가 있다는 언급(시간대·기준 세부는 쓰지 않음) → 식품의약품안전처(어린이 식생활안전관리 특별법 안내)·방송통신심의위원회
 *     - [activity.exam-dilemma] 카페인이 잠들기와 잠의 질에 영향을 줄 수 있다 → 식품의약품안전처·질병관리청 국가건강정보포털
 *   계획대로 못 한 것:
 *     - intro 의 levels(컷 둘/넷, 문구 넷/여섯)는 시연이 하나뿐이라 교사 진행 방식으로 적었다.
 *     - activity.ad-vs-label: chart 는 막대 한 줄만 그려 '광고 주장 대 표시 수치'를 한 그래프에 두 줄로 놓지 못한다 — 광고 문구는 문항 글에, 표시 수치(가상)는 막대로 둔다. 문항 수는 단계마다 같아 쉬움 = 값 표시, 도전 = 정직한 문구 고쳐 쓰기를 활동지로 옮겼다.
 *     - activity.ad-design·wrap.critique: '대상 소비자에 맞춰 고치기'·'반론'은 도전 단계 기준 하나 더(selfCheck)로 했다.
 *
 *
 *   사람 확인(meal-plan):
 *     - [meal-plan 전체] 끼니를 거르지 않고 규칙적으로 먹기, 다섯 식품군을 고루 담기, 늦은 밤 많이 먹으면 잠들기에 영향을 줄 수 있다는 일반 설명 → 식품의약품안전처·보건복지부(한국인 식생활 지침)·질병관리청 국가건강정보포털
 *     - [intro.menu-chart] 배달·외식 메뉴의 열량·나트륨 정보를 확인할 수 있는 곳(가게·앱의 영양 정보 표시)이 있다는 언급 → 식품의약품안전처(외식 영양성분 표시 안내)
 *     - [activity.week-plan] 다섯 식품군 이름(곡류·고기·생선·달걀·콩류·채소·과일류·우유·유제품류·유지·당류)은 교구 기본 칸을 따랐다 → 보건복지부·한국영양학회 식품구성자전거
 *     - [activity.week-plan] 남은 음식은 식혀 냉장 보관하고 다음 끼니에 데워 먹는다 → 식품의약품안전처(식품 보관 안내)
 *   계획대로 못 한 것:
 *     - intro 의 levels(사건 넷/여섯, 메뉴 둘/넷)는 시연이 하나뿐이라 교사 진행 방식으로 적었다. menu-chart 는 열량 막대 하나만 시연하고 나트륨은 칠판·말로 견준다.
 *     - activity.week-plan: 문항 수가 단계마다 같아 '사흘/이레'는 짝 문항의 쌍 수(3쌍/7쌍)로, '간식·물'은 모든 단계의 마지막 문항으로 두고 도전은 카드 섞기·활동지 칸으로 했다.
 *     - activity.meal-budget: 예산 판은 '배분 비율'이 아니라 '예산 안에서 항목 고르기'다 — 한 달 식비 항목(가상 금액)을 고르는 것으로 배분을 나타냈다. '항목 셋/넷'은 고르는 항목 수(count)로 했다.
 *     - activity.meal-clock: 시계는 한 시각만 나타내므로 일과마다 끼니 시각을 한 문항씩 두고, 모든 단계에서 맞도록 목표 시각을 30분 단위로 잡았다.
 *     - wrap.reflect: 학생 자신의 3년 식생활을 채점하지 않도록 가상 인물 예준의 성찰 카드를 가지에 나누게 하고, 내 것은 걷지 않는 활동지에만 쓴다.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'food', band: '고', topic: `food.h.${topic}`, grades }, o, { id: `food.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(카드 판 sort — mindmap·story·timeline·kitchen·economy·emotion): groups = 칸마다 카드 글 목록(글 = 카드 id). 쉬움 = 칸마다 앞 k장, 도전 = hard(칸마다 더할 카드). traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 분류판(sortboard 글 카드 모드 — 선반 위 종이 바구니): SORTQ 와 같은 꼴, mode 없음. 쉬움 = 칸마다 앞 k장 + 바로 피드백·장 수, 도전 = hard 카드 더하기
  const BOARDQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg), instant: true, showCount: true }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 차례 문항(order): steps = 바른 차례(글 = id). 쉬움 = 앞 k장, traps = 자리에 놓지 않을 함정 카드(기본·도전)
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
  // 갈림길(dilemma): 나무를 n 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  // 세 번 갈리는 나무: 쉬움 = 갈림길 2번, 기본 = 나무 전체(3번), 도전 = 나무 전체 + 서로 다른 끝 길 2개 이상 가 보기. 근거 카드는 모든 단계에서 고른다
  const DIL3 = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const it = { prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: at(3), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
        challenge: { prompt: pfx(prompt, '다른 끝 길도 하나 더'), target: Object.assign(at(3), { explore: 2 }) } } };
    return Object.assign(it, more);
  };
  // 갈림길 1·2·3번(계획이 '선택 1번/2번/3번'일 때): 쉬움 = 1번, 기본 = 2번, 도전 = 3번(나무 전체)
  const DIL123 = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    return Object.assign({ prompt, toolOptions: Object.assign({ scene: cut(scene, 2), reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) },
        challenge: { prompt: pfx(prompt, '갈림길 셋'), toolOptions: { scene }, target: at(3) } } }, more);
  };
  // 갈림길 두 번짜리 짧은 장면: 쉬움 = 갈림길 1번, 기본·도전 = 2번
  const DIL2 = (prompt, scene, paths, reasons, good, { d = 0.35, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    return Object.assign({ prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } }, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
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
  // 점검표(kitchen checklist): items = [[id, 글, 넣을지]…]
  const CHECKQ = (prompt, title, items, { k = 0, d = 0.3, more = {} } = {}) => {
    const mk = (xs) => ({ mode: 'checklist', title, items: xs.map(([id, text]) => ({ id, text })) });
    const it = { prompt, toolOptions: mk(items), target: { checklist: items.filter((x) => x[2]).map((x) => x[0]) }, difficulty: d };
    if (k) { const e = items.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `항목 ${k}개`), toolOptions: mk(e), target: { checklist: e.filter((x) => x[2]).map((x) => x[0]) } } }; }
    return Object.assign(it, more);
  };
  // 마음 크기(emotion scale) 출구 질문 — 내 생각을 돌아보는 것이라 어느 크기든 맞음
  const SCALE = (prompt, situation, feeling, labels, ask) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: labels, ask }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  // 문항 꼴(prompt·toolOptions·target)을 출구 질문 꼴로 — 출구에는 단계별 판이 없어 levels 를 버린다
  const EXIT = (tool, it) => { const { toolOptions, levels, ...rest } = it; return Object.assign({ type: 'tool', tool, options: toolOptions }, rest); };
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];
  /* 사람 확인(self-cook):
   *   - [self-cook 전체] 가격·식비·남는 돈은 모두 수업용 가상 값(실제 물가 아님) — 실제 가격은 한국소비자원 참가격·지역 물가 안내로 교사가 바꿔 넣을 수 있다
   *   - [self-cook.activity.week-shop · wrap.peer-review · wrap.plan-doc] '곡류·단백질 식품·채소·과일·우유' 같은 식품군 나누기 — 농림축산식품부·보건복지부·식품의약품안전처 「식생활 지침」·식품구성자전거 안내
   *   - [self-cook.activity.fridge-check · activity.menu-plan] 잎채소·두부처럼 쉽게 상하는 재료를 먼저 쓰고, 소분해 냉장·냉동하며, 남은 밥은 식혀 냉동한다는 보관 일반 수칙 — 식품의약품안전처 식품 보관·식중독 예방 안내
   *   - [self-cook.activity.cvs-dilemma] 편의점 간편식 조합에서 채소·과일이 빠지기 쉽고 영양 표시(뒷면)로 견줄 수 있다는 설명 — 식품의약품안전처 영양성분 표시 안내
   * 계획대로 못 한 것:
   *   - activity.week-shop: economy 예산 판은 고른 물건만 센다 — '사흘/이레'는 예산과 고를 물건 수(쉬움 사흘치 예산·물건 6개, 기본 이레치 예산·물건 10개)로, '식품군 지키기'는 꼭 넣을 물건(must)으로 했다.
   *   - activity.menu-plan: 시간 줄은 칸에 카드 한 장 — '재료 겹침'은 남은 재료를 이어 쓰는 차례(order)·장 본 뒤 쓰는 때 나누기(sort)·같은 재료로 두 요리 고르기(pick)로 했다.
   *   - 도입 levels 는 시연이 하나라 교사 진행 방식(결정 하나/둘을 함께 찾기)으로 적었다. 정리 출구 질문은 단계별 판이 없어 문장 수 차이는 교사 진행과 쉬운 활동지로 둔다.
   */
  // ======================================================================================================
  // 1. 자립 식생활 — 예산 장보기 (10학년)
  // ======================================================================================================
  {
    const M = MOD('self-cook', [10]);
    // 한 주 장보기 물건(가상 가격, 원)
    const SHOP = [
      { id: 'rice', text: '쌀 2kg', price: 6000 }, { id: 'egg', text: '달걀 10개', price: 3500 }, { id: 'tofu', text: '두부 2모', price: 2500 },
      { id: 'cabbage', text: '양배추 한 통', price: 3000 }, { id: 'carrot', text: '당근·양파 한 봉', price: 2500 }, { id: 'banana', text: '바나나 한 송이', price: 2500 },
      { id: 'milk', text: '우유 1L', price: 2800 }, { id: 'chicken', text: '배달 치킨 한 마리', price: 20000 }, { id: 'snack', text: '과자 묶음', price: 5000 },
      { id: 'kimchi', text: '김치 1kg', price: 5000 }, { id: 'frozen', text: '냉동 채소 한 봉', price: 3500 }, { id: 'drink', text: '탄산음료 묶음', price: 4500 },
    ];
    const SHOP_EASY = SHOP.filter((x) => ['rice', 'egg', 'cabbage', 'banana', 'chicken', 'snack'].includes(x.id));
    const SHOP_BASE = SHOP.filter((x) => !['frozen', 'drink'].includes(x.id));
    // 늦은 귀가 편의점 갈림길
    const CVS = { text: '자취 석 달째 수아. 아르바이트가 늦게 끝나 밤 10시에 집 앞 편의점에 들렀다. 지갑에는 이번 주 남은 식비가 있다.', who: '수아', motif: 'moon', choices: [
      { id: 'cup', text: '컵라면 두 개와 탄산음료를 산다', result: '배는 부르지만 채소·과일은 하나도 없다.', impact: [{ who: '수아', text: '오늘 식비는 적게 들었다', tone: 0 }, { who: '수아의 한 주', text: '식품군이 한쪽으로 쏠린다', tone: -1 }],
        next: { text: '사흘째 같은 조합이다. 아침에 몸이 무겁고 입안이 텁텁하다.', choices: [
          { id: 'same', text: '귀찮으니 이번 주도 같은 조합으로 버틴다', result: '주말에 몰아서 배달을 시켜 식비가 크게 줄어든다.', impact: [{ who: '수아', text: '한 주 식비가 모자라진다', tone: -1 }],
            next: { text: '주말 배달비까지 쓰고 나니 다음 주 식비가 빠듯하다.', choices: [
              { id: 'borrow', text: '친구에게 돈을 빌려 배달을 또 시킨다', result: '빚이 생기고 식사 패턴은 그대로다.', impact: [{ who: '수아', text: '돈 걱정이 커진다', tone: -1 }], ending: '편한 선택이 겹치면 돈과 끼니가 함께 흔들린다.' },
              { id: 'reset', text: '남은 돈으로 쌀·달걀·냉동 채소를 산다', result: '며칠은 단조롭지만 끼니가 이어진다.', impact: [{ who: '수아', text: '다시 계획을 세울 틈이 생긴다', tone: 1 }], ending: '늦게라도 장보기로 돌아오면 다음 주가 달라진다.' }] } },
          { id: 'add', text: '컵라면에 삶은 달걀·바나나를 더한다', result: '돈은 조금 더 들지만 한 끼가 든든해진다.', impact: [{ who: '수아', text: '식품군이 늘어난다', tone: 1 }],
            next: { text: '편의점 조합에 익숙해졌다. 주말에는 시간이 조금 난다.', choices: [
              { id: 'prep', text: '주말에 밥을 지어 소분해 얼려 둔다', result: '평일 밤에는 데우기만 하면 된다.', impact: [{ who: '수아', text: '늦은 날에도 집밥이 된다', tone: 1 }], ending: '바쁜 날을 미리 준비하면 편의점은 대안 하나가 된다.' },
              { id: 'rest', text: '주말에는 쉬고 평일처럼 편의점에 간다', result: '이번 주와 비슷한 한 주가 되풀이된다.', impact: [{ who: '수아', text: '식비는 지키지만 메뉴가 단조롭다', tone: 0 }], ending: '한 가지 습관만 바꿔도 좋지만 준비가 더해지면 더 쉬워진다.' }] } }] } },
      { id: 'meal', text: '도시락 하나에 샐러드 컵을 더한다', result: '오늘 식비는 조금 더 들지만 채소가 들어간다.', impact: [{ who: '수아', text: '한 끼에 여러 식품군이 담긴다', tone: 1 }],
        next: { text: '계산대 옆에 \'2+1\' 과자 행사가 보인다.', choices: [
          { id: 'skip', text: '오늘 산 것만 계산한다', result: '이번 주 식비가 계획대로 남는다.', impact: [{ who: '수아', text: '주말 장보기 돈이 지켜진다', tone: 1 }],
            next: { text: '주말, 남은 식비로 장을 볼 수 있다.', choices: [
              { id: 'list', text: '냉장고를 보고 목록을 써서 장을 본다', result: '필요한 재료만 사서 남는 돈이 생긴다.', impact: [{ who: '수아', text: '다음 주가 여유로워진다', tone: 1 }], ending: '행사보다 목록, 늦은 날의 대안까지 정하면 자립 식생활이 굴러간다.' },
              { id: 'random', text: '목록 없이 마트를 돌며 담는다', result: '집에 있던 재료를 또 사 버린다.', impact: [{ who: '수아', text: '버리는 재료가 생긴다', tone: -1 }], ending: '목록 없는 장보기는 겹쳐 사기로 이어진다.' }] } },
          { id: 'deal', text: '싸니까 과자 세 봉지를 더 산다', result: '과자는 남지만 이번 주 식비가 줄어든다.', impact: [{ who: '수아', text: '주말 장보기 돈이 모자라다', tone: -1 }], ending: '행사는 필요한 물건일 때만 이득이다.' }] } }] };
    const CVS_R = [{ id: 'group', text: '한 끼에 여러 식품군이 들어가야 오래 버틴다' }, { id: 'plan', text: '늦은 날의 대안을 미리 정해 두면 돈과 끼니를 함께 지킨다' }, { id: 'cheap', text: '오늘 가장 싼 것이 한 주에도 가장 싸다', why: '오늘 싼 조합이 쌓이면 주말 배달처럼 더 큰 지출로 이어질 수 있어요.' }, { id: 'all', text: '자취생은 다들 편의점으로 버틴다', why: '여럿이 그렇게 한다고 내 한 주 계획이 되지는 않아요.' }];

    MODS.push(
      M({
        id: 'intro.first-month', type: 'intro', title: '자취 첫 달, 월말에 생긴 일',
        method: '자취 첫 달 사례', tool: 'story', minutes: 7,
        levels: { easy: '교사가 첫 장면(첫 주 배달)을 함께 짚고, 갈림이 된 결정 하나를 찾는다.', base: '장면 다섯 장을 넘기며 갈림이 된 결정 둘을 찾는다.', challenge: '고른 결정을 다르게 했다면 월말이 어떻게 바뀌었을지 한 문장으로 말한다.' },
        intro: {
          teacher: '"졸업하고 혼자 산 첫 달, 가상 인물 수아의 식비 이야기예요. 월말에 끼니를 거른 건 한 번의 실수 때문일까요?" 장면을 넘기며 두세 명에게 갈림이 된 결정을 고르게 하고, 시연 단추로 \'첫 주 매일 배달\'과 \'목록 없이 장보기\'가 바구니에 담기는 모습을 보여 준다. "혼자 살면 배달·간편식이 제일 싸고 편하잖아요"라는 말이 나오면 "한 번은 편하지만, 네 번째 주 장면에서 지갑은 어떻게 됐나요?"라고 되묻는다. 오늘은 같은 돈으로 한 주를 끝까지 버티는 계획을 짠다고 밝힌다.',
          student: '가상 인물 수아의 자취 첫 달 장면을 넘겨 보며, 월말에 끼니를 거르게 만든 결정을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '갈림이 된 결정', title: '수아의 첫 달(가상)', shuffle: false, cards: [
            { id: 'w1', text: '첫 주, 매일 저녁 배달을 시킴', motif: 'house' }, { id: 'w2', text: '둘째 주, 목록 없이 장을 봐 재료를 버림', motif: 'cloud' },
            { id: 'w3', text: '셋째 주, 쌀과 달걀을 사서 밥을 지음', motif: 'sun' }, { id: 'w4', text: '넷째 주, 식비가 바닥나 끼니를 거름', motif: 'moon' }] }, sequence: [{ pick: ['w1', 'w2'] }] },
          art: { draw: 'a small paper studio apartment with a calendar of four weeks, delivery bags piling up in week one, wilted vegetables in week two, an empty wallet at month end, soft warm paper light', banner: '첫 달 식비는 어디로 갔을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '학생 자신이나 가정의 식비·형편을 묻지 않는다. 수아는 가상 인물이고 금액은 다루지 않는다(활동에서 가상 가격만 쓴다).',
      }),
      M({
        id: 'intro.cost-chart', type: 'intro', title: '가상 한 달 식비 원그래프',
        method: '가상 식비 원그래프', tool: 'chart', minutes: 7,
        levels: { easy: '가장 큰 조각 하나(배달)를 함께 찾고 줄일 범주로 고른다.', base: '줄일 범주 둘을 고르고 그 까닭을 짝에게 말한다.', challenge: '이 원그래프로 알 수 없는 것(끼니 수·영양·지역 물가)을 하나 말한다.' },
        intro: {
          teacher: '"가상 인물의 한 달 식비를 나눈 가상 원그래프예요. 실제 물가가 아니라 비율만 보는 자료예요. 가장 큰 조각은 무엇인가요?" 시연 단추로 \'배달\' 조각이 골라지는 모습을 보인다. "간식은 작으니 신경 안 써도 돼요"라는 말이 나오면 "배달과 간식을 합치면 장보기보다 커지나요?"라고 되묻는다. 비율만으로는 몇 끼를 먹었는지, 영양이 어땠는지 알 수 없다는 점도 짚는다.',
          student: '가상 원그래프에서 한 달 식비의 가장 큰 조각을 찾고, 줄인다면 어느 범주부터 줄일지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '가상 인물의 한 달 식비(가상 자료, %)', unit: '%', data: [['배달', 45], ['외식', 20], ['장보기', 25], ['간식', 10]], question: '가장 큰 조각은?', choices: ['배달', '외식', '장보기', '간식'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart cut into four slices labelled delivery, eating out, groceries and snacks, the delivery slice lifted out and glowing, a paper wallet and a shopping list beside it', banner: '식비는 어디에 가장 많이 쓰일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 수업용 가상 비율이다. 학생 가정의 식비를 그리게 하거나 발표시키지 않는다.',
      }),

      M({
        id: 'activity.week-shop', type: 'activity', title: '한 주 예산으로 장보기',
        method: '한 주 예산 장보기', tool: 'economy', minutes: 17,
        levels: { easy: '사흘치 가상 예산 1만 5천 원으로 물건 6개 가운데 고르고, 쌀·달걀·양배추를 꼭 넣는다.', base: '이레치 가상 예산 3만 원으로 물건 10개 가운데 고르고, 곡류·단백질·채소·과일을 하나씩 넣는다.', challenge: '물건 12개, 예산이 2만 5천 원으로 줄어도 같은 식품군을 지키고 배달·과자는 빼서 고른다.' },
        activity: {
          title: '예산 막대 안의 장바구니', tool: 'economy',
          teacher: '"가상 가격표예요. 실제 물가가 아니라 연습용 값이에요. 이 돈으로 한 주 끼니가 이어지려면 무엇부터 담아야 할까요?" 예산 막대가 차는 것을 보며 고르게 한다. 배달 치킨부터 담은 학생에게 "한 번에 막대가 얼마나 찼나요? 남은 돈으로 나머지 엿새를 버틸 수 있을까요?"라고 묻는다. 어느 음식이 나쁜 것이 아니라 한 주 예산 안에서 끼니가 이어지는지가 기준이라는 점을 짚는다.',
          task: '가상 예산 막대를 넘지 않게 물건을 고르고, 남는 돈을 확인해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '수아의 한 주 장보기예요. 가상 예산 3만 원 안에서 쌀·달걀·양배추는 꼭 넣어 고르세요.', toolOptions: { mode: 'budget', budget: 30000, items: SHOP_BASE }, target: { budget: { must: ['rice', 'egg', 'cabbage'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '수아의 사흘 장보기예요. 가상 예산 1만 5천 원 안에서 쌀·달걀·양배추는 꼭 넣어 고르세요(물건 6개).', toolOptions: { budget: 15000, items: SHOP_EASY } }, challenge: { prompt: '수아의 한 주 장보기예요. 가상 예산 3만 원 안에서 쌀·달걀·양배추는 꼭 넣어 고르세요(물건 12개).', toolOptions: { items: SHOP } } } },
            { prompt: '곡류·단백질·채소·과일이 하나씩은 들어가게 쌀·두부·당근양파·바나나를 꼭 넣고 가상 예산 3만 원 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 30000, items: SHOP_BASE }, target: { budget: { must: ['rice', 'tofu', 'carrot', 'banana'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '곡류·단백질·채소·과일이 하나씩 들어가게 쌀·달걀·양배추·바나나를 꼭 넣고 가상 예산 1만 5천 원 안에서 고르세요(물건 6개).', toolOptions: { budget: 15000, items: SHOP_EASY }, target: { budget: { must: ['rice', 'egg', 'cabbage', 'banana'] } } },
                challenge: { prompt: '예산이 2만 5천 원으로 줄었어요. 쌀·두부·당근양파·바나나는 지키고, 배달 치킨·과자는 빼고 고르세요(물건 12개).', toolOptions: { budget: 25000, items: SHOP }, target: { budget: { must: ['rice', 'tofu', 'carrot', 'banana'], not: ['chicken', 'snack'] } } } } },
            { prompt: '같은 3만 원으로 배달 치킨을 꼭 넣으면 남은 돈으로 무엇을 살 수 있는지 보세요. 치킨과 쌀을 넣고 예산 안에서 하나 더 고르세요.', toolOptions: { mode: 'budget', budget: 30000, items: SHOP_BASE }, target: { budget: { must: ['chicken', 'rice'], count: 3 } }, difficulty: 0.35,
              levels: { easy: { prompt: '배달 치킨을 꼭 넣으면 1만 5천 원 예산은 어떻게 될까요? 치킨이 들어가지 않게 쌀과 달걀을 넣어 고르세요(물건 6개).', toolOptions: { budget: 15000, items: SHOP_EASY }, target: { budget: { must: ['rice', 'egg'], not: ['chicken'] } } } },
              conclude: '배달 한 번이 예산의 큰 몫을 가져가면 나머지 끼니에 쓸 돈이 줄어요. 배달을 빼야 한다는 뜻이 아니라, 넣을 때 다른 끼니를 함께 계산한다는 뜻이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 고른 장바구니를 식품군별로 정리하고 남는 돈(가상)을 쓰세요.', columns: ['식품군', '고른 물건', '쓸 끼니'], cells: [['곡류', '', ''], ['단백질', '', ''], ['채소·과일', '', ''], ['남는 돈', '', '']] }] },
        notes: '가격은 모두 가상이다. 학생 가정의 식비·용돈을 묻지 않는다. 교구 한계: 예산 판은 고른 물건만 세므로 \'사흘/이레\'는 예산 크기와 물건 수로 나타냈다.',
      }),
      M({
        id: 'activity.fridge-check', type: 'activity', title: '냉장고 확인에서 보관까지',
        method: '냉장고 확인부터 보관까지', tool: 'kitchen', minutes: 18,
        levels: { easy: '카드 세 장(냉장고 확인·목록·장보기)만 차례로 놓는다.', base: '다섯 단계(냉장고 확인·목록·장보기·소분·보관)를 차례로 놓고, 재료마다 보관 자리를 짝짓는다.', challenge: '\'남은 재료 먼저 쓰기\' 단계가 든 여섯 단계를 놓고, 함정 카드를 걸러 낸다.' },
        activity: {
          title: '장보기 전후 다섯 단계', tool: 'kitchen',
          teacher: '"장보기는 마트에서 시작할까요, 냉장고 앞에서 시작할까요?" 단계 카드를 놓기 전에 묻는다. \'장보기\'를 맨 앞에 놓는 학생에게 "집에 달걀이 남아 있는데 또 사 오면 어떻게 될까요?"라고 되묻는다. 소분·보관을 빼먹는 모둠에는 "한 번에 산 고기·밥을 한 주 동안 어떻게 나눠 쓸까요?"라고 묻는다. 버리는 재료를 줄이는 것도 식비를 아끼는 방법이라는 점을 짚는다.',
          task: '장보기 전후의 단계를 차례로 놓고, 재료마다 보관할 자리를 정해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            Object.assign(ORDERQ('수아의 주말 장보기를 단계 차례로 놓으세요.', ['냉장고 확인', '장보기 목록 쓰기', '목록대로 장보기', '한 끼씩 나누기(소분)', '냉장·냉동 보관'], { k: 3, d: 0.2 }),
              { levels: { easy: { prompt: '수아의 주말 장보기를 단계 차례로 놓으세요(카드 3장).', toolOptions: { slots: 3, cards: ['목록대로 장보기', '냉장고 확인', '장보기 목록 쓰기'] }, target: { order: ['냉장고 확인', '장보기 목록 쓰기', '목록대로 장보기'] } },
                challenge: { prompt: '남은 재료 먼저 쓰기를 넣어 여섯 단계로 놓고, 맞지 않는 카드는 빼세요(카드 7장).', toolOptions: { slots: 6, cards: ['냉장·냉동 보관', '행사 상품부터 담기', '목록대로 장보기', '남은 재료로 쓸 요리 정하기', '냉장고 확인', '한 끼씩 나누기(소분)', '장보기 목록 쓰기'] }, target: { order: ['냉장고 확인', '남은 재료로 쓸 요리 정하기', '장보기 목록 쓰기', '목록대로 장보기', '한 끼씩 나누기(소분)', '냉장·냉동 보관'] } } } }),
            MATCHQ('장 본 재료마다 보관할 자리를 짝지으세요.', [['냉동실', '한 번에 지은 밥을 한 끼씩 나눈 것'], ['냉장실', '두부와 달걀'], ['서늘한 상온', '쌀 봉지'], ['채소 칸', '양배추 반 통']], { k: 2, extra: ['데워 먹고 남은 국(실온에 하루)'], d: 0.3, more: { hints: ['오래 둘수록 상하기 쉬운 재료부터 차가운 자리를 생각해요.'] } }),
            SORTQ('냉장고 확인에서 나온 재료를 이번 주에 먼저 쓸 것과 나중에 써도 될 것으로 나누세요.', ['먼저 쓸 것', '나중에 써도 될 것'], [
              ['시들기 시작한 상추', '이틀 전에 연 두부', '남은 반 개 양파'],
              ['냉동해 둔 밥', '뜯지 않은 쌀', '김치'],
            ], { k: 2, d: 0.3, opt: { trayLabel: '냉장고 속 재료' }, more: { conclude: '쉽게 상하는 재료를 먼저 쓰고, 오래 두는 재료는 나중으로 돌리면 버리는 재료와 식비가 함께 줄어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '장보기 전에 냉장고를 확인하면 무엇이 달라지는지 수아의 사례로 한 문장 쓰세요.' }] },
        notes: '보관 자리·순서는 일반 수칙이다(사람 확인 목록). 실제 조리·보관 실습은 하지 않는다.',
      }),
      M({
        id: 'activity.cvs-dilemma', type: 'activity', title: '늦은 밤 편의점 한 끼',
        method: '편의점 한 끼 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번(오늘 조합·다음 선택)까지 가 보고 근거를 고른다.', base: '갈림길 세 번(주말까지)을 끝까지 따라가 식품군·비용 결과를 본다.', challenge: '세 번을 끝까지 가고, 되돌아가 다른 끝 길 하나를 더 가 본 뒤 근거를 고른다.' },
        activity: {
          title: '편의점 조합 갈림길', tool: 'dilemma',
          teacher: '"아르바이트가 늦게 끝난 밤 10시, 편의점 앞이에요. 오늘 한 끼는 한 끼로 끝날까요?" 선택마다 \'수아의 한 주\'에 무슨 일이 생기는지 소리 내어 읽게 한다. 컵라면 길을 고른 학생을 나무라지 않고 "여기에 무엇 하나를 더하면 같은 편의점에서도 달라질까요?"라고 묻는다. 편의점은 피할 곳이 아니라 대안 가운데 하나이고, 늦은 날을 미리 준비하는 것이 핵심이라는 점을 짚는다.',
          task: '수아가 되어 편의점 한 끼를 고르고, 그 선택이 한 주 식비와 끼니에 어떻게 이어지는지 따라가요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('수아의 늦은 밤 편의점 한 끼를 골라 끝까지 따라가고, 고른 근거를 고르세요.', CVS, [['cup', 'add', 'prep'], ['meal', 'skip', 'list']], CVS_R, ['group', 'plan'], { d: 0.35 }),
            EXPLOREQ('같은 장면에서 서로 다른 끝 길 두 개를 가 보고, 견준 뒤 점검하세요.', CVS, CVS_R, ['두 길의 식품군 차이를 견주었다', '두 길의 주말 식비 차이를 견주었다', '내가 바꿀 수 있는 습관 하나를 골랐다'], { d: 0.3 }),
            { prompt: '편의점에서 컵라면을 고른 날, 같은 가게에서 식품군을 늘릴 수 있는 것을 고르세요.', toolOptions: { scene: { text: '밤 10시 편의점, 컵라면을 하나 골랐다. 하나를 더 담을 수 있다.', who: '수아', motif: 'moon', choices: [
              { id: 'egg', text: '삶은 달걀과 바나나', result: '단백질과 과일이 더해진다.', impact: [{ who: '수아', text: '한 끼가 든든해진다', tone: 1 }], ending: '같은 편의점에서도 하나를 더하면 끼니가 달라진다.' },
              { id: 'soda', text: '탄산음료 큰 병', result: '음료만 늘고 식품군은 그대로다.', impact: [{ who: '수아', text: '식비만 더 든다', tone: -1 }], why: '음료를 더해도 빠진 식품군은 채워지지 않아요.', ending: '더하는 것도 무엇을 더하는지가 중요하다.' },
              { id: 'chips', text: '과자 한 봉지', result: '배는 부르지만 채소·과일은 없다.', impact: [{ who: '수아', text: '간식만 늘어난다', tone: 0 }], why: '과자는 간식이고 빠진 채소·과일을 채우지 못해요.', ending: '간식과 끼니를 나눠 생각한다.' }] }, reasons: CVS_R }, target: { path: ['egg'], reasons: ['group'] }, difficulty: 0.25,
              conclude: '편의점 한 끼도 빠진 식품군 하나를 더하면 달라져요. 늦는 날의 \'기본 조합\'을 미리 정해 두면 고민이 줄어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '늦게 귀가하는 날을 위한 \'편의점 기본 조합\'(가상)을 식품군이 드러나게 한 줄로 쓰세요.' }] },
        notes: '수아는 가상 인물이다. 편의점·간편식을 나쁜 음식으로 몰지 않고, 빠진 식품군을 채우는 대안으로 다룬다. 특정 상품명은 쓰지 않는다.',
      }),
      M({
        id: 'activity.menu-plan', type: 'activity', title: '재료를 이어 쓰는 일주일 식단',
        method: '일주일 식단표 설계', tool: 'timeline', minutes: 18,
        levels: { easy: '남은 재료를 이어 쓰는 사흘 식단 카드 3장을 차례로 놓는다.', base: '이레 식단 카드 7장을 차례로 놓고, 재료를 쓰는 때(장 본 직후·주중·주말)를 나눈다.', challenge: '같은 재료로 만든 두 요리 짝을 고르고, 함정 카드가 더해진 판에서 때를 나눈다.' },
        activity: {
          title: '남은 재료가 다음 끼니로', tool: 'timeline',
          teacher: '"양배추 한 통을 사면 한 끼에 다 먹을 수 있을까요? 남은 반 통이 다음 끼니로 이어지게 식단을 짜 봐요." 카드 글의 \'남은 ○○\'를 단서로 차례를 찾게 한다. 메뉴를 날마다 전혀 다른 재료로 짜는 모둠에 "재료를 일곱 가지 다 따로 사면 장바구니와 버리는 재료는 어떻게 될까요?"라고 묻는다. 같은 재료를 다른 요리로 바꾸면 질리지 않고 버리는 양도 줄어든다는 점을 짚는다.',
          task: '남은 재료를 이어 쓰도록 식단 카드를 차례로 놓고, 재료를 쓰는 때를 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('수아의 일주일 식단 카드를 남은 재료가 다음 끼니로 이어지는 차례로 놓으세요.', ['월: 밥을 넉넉히 지어 카레(양파 반 개 남음)', '화: 남은 양파로 달걀볶음과 밥', '수: 남은 밥으로 양배추 볶음밥', '목: 남은 양배추로 된장국', '금: 두부 부침(두부 반 모 남음)', '토: 남은 두부로 김치찌개', '일: 냉동 채소로 볶음 국수'], { k: 3, d: 0.3, opt: { axis: ['월', '일'] } }),
            SORTQ('재료를 산 뒤 언제 쓰면 좋을지 나누세요.', ['장 본 직후', '주중', '주말'], [
              ['상추 샐러드', '두부 부침'],
              ['양배추 된장국', '당근 볶음'],
              ['김치볶음밥', '냉동 채소 볶음'],
            ], { k: 1, hard: [['콩나물 무침'], ['달걀말이'], ['냉동 밥 죽']], traps: ['매일 새 재료로 다른 요리'], d: 0.3, opt: { axis: ['장 본 날', '주말'] } }),
            PICKQ('같은 재료로 두 요리를 만든 짝만 고르세요.', ['양배추: 볶음밥과 된장국', '두부: 부침과 김치찌개'], ['상추: 샐러드와 상추 튀김 사기', '라면: 컵라면과 배달 짜장'], { d: 0.3, opt: { basket: '재료 하나, 요리 둘' }, more: { conclude: '재료 하나를 두세 끼로 바꿔 쓰면 장바구니가 가벼워지고 버리는 재료가 줄어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '재료 하나로 만들 수 있는 요리 두 가지씩 쓰세요(가상 장바구니).', columns: ['재료', '요리 1', '요리 2'], cells: [['양배추', '', ''], ['달걀', '', ''], ['두부', '', '']] }] },
        notes: '교구 한계: 시간 줄 칸에는 카드 한 장만 놓여 \'재료 겹침\'은 \'남은 ○○\'로 이어지는 차례와 쓰는 때 나누기로 다룬다.',
      }),

      M({
        id: 'wrap.plan-doc', type: 'wrap', title: '나의 자립 식생활 계획서',
        method: '자립 식생활 계획서', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '쉬운 활동지의 문장 틀로 세 문장(예산·장보기·보관)을 쓴다.', base: '다섯 문장(예산·장보기·보관·조리·늦은 날 대안)을 쓰고 기준표 네 항목을 점검한다.', challenge: '활동지에 한 달에 한 번 계획을 점검하는 규칙을 덧붙인다.' },
        wrap: {
          teacher: '"졸업 뒤 혼자 사는 첫해라고 가정해 봐요. 오늘 정한 원칙을 다섯 문장으로 남겨요." 쓰기 전에 기준표 네 항목을 함께 읽는다. 금액을 쓸 때는 오늘 쓴 가상 값이나 \'한 주 식비 ○○원\'처럼 비워 두어도 된다고 말한다. "배달은 절대 안 시킨다"처럼 지키기 어려운 문장을 쓴 학생에게 "한 달 내내 지킬 수 있을까요? 시킬 때의 규칙으로 바꾸면 어떨까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '졸업 뒤 혼자 사는 첫해, 나의 식생활 원칙을 다섯 문장으로 쓰세요(금액은 가상).', minChars: 80, maxChars: 500, starter: '나는 한 주 식비를 정해 두고 ~', sample: '나는 한 주 식비를 가상으로 3만 원으로 정한다. 장보기 전에 냉장고를 확인하고 목록을 쓴다. 산 재료는 한 끼씩 나눠 냉동한다. 곡류·단백질·채소가 한 끼에 들어가게 요리한다. 늦게 끝나는 날에는 편의점에서 달걀과 과일을 더한 기본 조합을 고른다.' }, prompt: '자립 식생활 원칙을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['예산을 정하는 방법을 썼다(금액은 가상)', '장보기와 보관 원칙을 썼다', '식품군을 생각한 조리 원칙을 썼다', '늦거나 바쁜 날의 대안을 썼다'], sentences: [3, 6] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 수업과 가장 맞는 자립 식생활 원칙을 고르세요.', options: ['혼자 살면 배달이 가장 싸고 편하다', '냉장고를 확인하고 목록대로 장을 본 뒤 나눠 보관한다', '행사 상품은 쌀 때 많이 사 둔다'], answer: 1, difficulty: 0.15, explain: '확인 → 목록 → 장보기 → 소분·보관 흐름이 식비와 버리는 재료를 함께 줄여요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 자립 식생활 계획서',
          items: [
            { type: 'short', prompt: '예산·장보기·보관·조리·늦은 날 대안을 담아 나의 원칙 다섯 문장을 쓰세요(금액은 가상).' },
            { type: 'short', prompt: '한 달에 한 번 계획을 점검할 규칙 하나를 쓰세요(예: 버린 재료 세어 보기).' },
          ],
          easy: { note: '"나는 한 주 식비를 ~로 정한다. 장보기 전에 ~. 산 재료는 ~."', items: [{ type: 'short', prompt: '예산·장보기·보관 원칙을 한 문장씩 세 문장으로 쓰세요.' }] },
        },
        notes: '학생 가정의 실제 식비·형편을 쓰게 하지 않는다. 금액은 가상 값만 쓴다.',
      }),
      M({
        id: 'wrap.peer-review', type: 'wrap', title: '모둠 식단 계획 서로 보기',
        method: '모둠 계획 상호 평가', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 \'비용\'·\'영양\' 두 가지 의견을 먼저 읽어 주고 함께 단다.', base: '의견 카드 여덟 장을 현실성·영양·비용·버림 네 가지에 단다.', challenge: '받은 의견 하나를 골라 활동지에 고친 계획을 쓴다.' },
        wrap: {
          teacher: '"옆 모둠의 가상 식단 계획을 네 가지 눈으로 봐요. 현실성, 영양, 비용, 버리는 재료." 의견 카드를 가지에 단 뒤 출구 질문으로 넘어간다. "별로예요" 같은 말은 의견이 아니라는 점을 짚고 "무엇이, 왜, 어떻게 바꾸면"을 담은 말로 바꾸게 한다. 받은 의견은 정답이 아니라 계획을 고칠 재료라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '가상 모둠 식단 의견', slots: ['현실성', '영양', '비용', '버림'], cards: ['평일 밤 조리 시간이 너무 길다', '아침을 거르는 날이 많다', '채소가 이틀만 들어간다', '배달이 세 번이라 예산을 넘는다', '행사 상품을 많이 사 둔다', '상추를 사서 주말까지 둔다', '양파를 반 개씩 남긴다', '주말에 장을 두 번 본다'] }, prompt: '의견 카드를 알맞은 눈 가지에 다세요.', target: { sort: { 현실성: ['평일 밤 조리 시간이 너무 길다', '주말에 장을 두 번 본다'], 영양: ['아침을 거르는 날이 많다', '채소가 이틀만 들어간다'], 비용: ['배달이 세 번이라 예산을 넘는다', '행사 상품을 많이 사 둔다'], 버림: ['상추를 사서 주말까지 둔다', '양파를 반 개씩 남긴다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '계획을 고치는 데 가장 도움이 되는 의견을 고르세요.', options: ['그냥 별로예요', '상추는 장 본 직후 쓰고 주말엔 냉동 채소로 바꾸면 버림이 줄 것 같아요', '우리 모둠 계획이 더 좋아요'], answer: 1, difficulty: 0.15, explain: '무엇을, 왜, 어떻게 바꿀지 담긴 의견이 계획을 고치게 해 줘요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '모둠 계획 서로 보기',
          items: [
            { type: 'table', prompt: '받은 의견을 네 가지로 정리하세요.', columns: ['눈', '받은 의견', '고칠지(○·△·×)'], cells: [['현실성', '', ''], ['영양', '', ''], ['비용', '', ''], ['버림', '', '']] },
            { type: 'short', prompt: '받은 의견 하나로 우리 계획을 어떻게 고칠지 한 문장 쓰세요.' },
          ],
        },
        notes: '의견은 계획(가상 식단)에 대한 것이지 사람이나 그 가정의 식습관에 대한 평가가 아니라는 점을 먼저 약속한다.',
      }),
    );
  }

  /* 사람 확인(sustainable):
   *   - [sustainable 전체] 잔반 그래프·지도 거리·산지·철은 모두 수업용 가상 자료(실제 통계·실제 지역 아님) — 실제 자료는 환경부(음식물류 폐기물 통계)·학교 급식실 자료로 교사가 바꿔 넣을 수 있다
   *   - [sustainable.intro.waste-chain] 생산·유통·판매·가정·급식 단계마다 음식이 버려지는 까닭(모양 기준 선별·운송 중 상함·유통기한 임박·과다 구매·배식량 차이) 일반 설명 — 환경부·농림축산식품부 음식물 쓰레기 줄이기 안내
   *   - [sustainable.activity.season-map] 이동 거리가 짧은 지역 먹거리·제철 먹거리가 운송·보관에 드는 자원을 줄일 수 있다는 설명, 지도 속 재료의 '나는 철'(배추 가을·겨울, 딸기 봄 등) — 농림축산식품부 제철 농산물·로컬푸드 안내
   *   - [sustainable.activity.fridge-dilemma · activity.leftover-cook] 유통기한·소비기한 표시의 뜻과 보관·재가열 일반 수칙, 음식을 나눌 때의 위생 — 식품의약품안전처 소비기한 표시제·식중독 예방 안내
   *   - [sustainable.activity.policy-debate] 자율 배식 운영 방식(학생이 양을 정함)과 영양 기준 사이의 쟁점 — 교육부·학교급식 운영 안내(학교 영양 선생님 확인)
   * 계획대로 못 한 것:
   *   - activity.season-map: 지도는 문항마다 핀 하나 — '두 곳/네 곳'은 지도에 놓인 장소 수(쉬움 4곳·이름 읽기 글자, 기본·도전 8곳)로, '계절에 따라 바꾸기'는 도전에서 철이 다른 문항으로 했다.
   *   - activity.leftover-cook: 실제 조리는 하지 않고 조리 순서 카드만 놓는다(칼·불 쓰는 실습 없음).
   *   - 도입 levels 는 시연이 하나라 교사 진행 방식으로 적었다. 정리 출구 질문은 단계별 판이 없어 문장 수 차이는 교사 진행과 쉬운 활동지로 둔다.
   */
  // ======================================================================================================
  // 2. 지속가능한 식생활과 음식물 쓰레기 (11학년)
  // ======================================================================================================
  {
    const M = MOD('sustainable', [11]);
    // 가상 학교 월별 잔반(가상 자료, 상대 크기)
    const WASTE = [['3월', 6], ['4월', 5], ['5월', 5], ['6월', 7], ['7월', 9], ['9월', 6], ['10월', 4]];
    const WLINE = (more = {}) => Object.assign({ type: 'line', mode: 'read', title: '가상 학교의 월별 잔반(가상 자료, 상대 크기)', xLabel: '달', yLabel: '잔반 상대 크기', data: WASTE }, more);
    // 가상 지역 지도 — 학교 급식실과 산지
    const FARM = [
      { name: '우리 학교 급식실', icon: 'school', at: [2, 2] }, { name: '솔내 배추밭(가을·겨울)', icon: 'field', at: [1, 2] },
      { name: '먼산 배추 산지(가을·겨울)', icon: 'field', at: [5, 0] }, { name: '물골 딸기 농장(봄)', icon: 'orchard', at: [3, 3] },
      { name: '바닷가 항구(고등어·가을)', icon: 'port', at: [0, 0] }, { name: '먼 항구(고등어·가을)', icon: 'port', at: [5, 3] },
      { name: '들말 감자밭(여름)', icon: 'field', at: [3, 1] }, { name: '읍내 시장', icon: 'market', at: [1, 3] },
    ];
    const FARM_EASY = FARM.filter((p) => ['우리 학교 급식실', '솔내 배추밭(가을·겨울)', '먼산 배추 산지(가을·겨울)', '들말 감자밭(여름)'].includes(p.name));
    const MAP = (more = {}) => Object.assign({ mode: 'pin', title: '가상 지역의 먹거리 산지(가상 지도)', grid: [6, 4], places: FARM }, more);
    // 냉장고 속 남은 재료 갈림길
    const FRIDGE = { text: '금요일 밤 건우네 냉장고. 소비기한이 내일까지인 두부 한 모와 시들기 시작한 시금치, 어제 남은 밥이 있다. 내일은 하루 종일 밖에 있다.', who: '건우', motif: 'house', choices: [
      { id: 'toss', text: '어차피 못 먹으니 지금 다 버린다', result: '냉장고는 비지만 음식물 쓰레기 봉투가 무거워진다.', impact: [{ who: '건우네', text: '산 재료 값이 그대로 사라진다', tone: -1 }],
        next: { text: '다음 주 장보기에서 또 두부와 시금치를 같은 양으로 산다.', choices: [
          { id: 'again', text: '지난주처럼 넉넉히 산다', result: '주말이 되자 또 남는다.', impact: [{ who: '건우네', text: '버리는 일이 되풀이된다', tone: -1 }], ending: '버린 까닭을 살피지 않으면 같은 쓰레기가 다시 생긴다.' },
          { id: 'less', text: '먹은 만큼만 사도록 양을 줄인다', result: '다음 주에는 남는 재료가 줄어든다.', impact: [{ who: '건우네', text: '식비와 쓰레기가 함께 준다', tone: 1 }], ending: '버린 경험도 장보기 양을 고치는 자료가 된다.' }] } },
      { id: 'cook', text: '오늘 밤 남은 재료로 한 끼를 만든다', result: '두부 시금치 볶음밥이 만들어지고 한 그릇이 남는다.', impact: [{ who: '건우', text: '재료를 다 쓴다', tone: 1 }],
        next: { text: '만든 음식이 한 그릇 남았다. 내일은 집에 없다.', choices: [
          { id: 'store', text: '식혀서 한 그릇씩 나눠 냉동한다', result: '다음 주 바쁜 날 저녁이 하나 생긴다.', impact: [{ who: '건우', text: '다음 끼니가 준비된다', tone: 1 }],
            next: { text: '월요일, 냉동한 볶음밥을 꺼낼 날이다. 동생은 오늘 친구 집에서 먹는다.', choices: [
              { id: 'eat', text: '한 그릇을 데워 먹고 남은 것은 다시 얼리지 않는다', result: '남김없이 먹고 다음 끼니 계획을 세운다.', impact: [{ who: '건우', text: '버리는 것 없이 한 주를 시작한다', tone: 1 }], ending: '만들기 → 나눠 보관 → 계획대로 먹기까지 이어져야 쓰레기가 줄어든다.' },
              { id: 'forget', text: '그냥 두고 배달을 시킨다', result: '냉동실에 볶음밥이 계속 쌓인다.', impact: [{ who: '건우', text: '결국 버릴 음식이 생긴다', tone: -1 }], ending: '보관한 음식도 먹을 계획이 없으면 늦게 버리는 쓰레기가 된다.' }] } },
          { id: 'leave', text: '식탁 위에 그대로 두고 나간다', result: '밤새 상온에 둔 음식은 먹기 어려워진다.', impact: [{ who: '건우', text: '만든 음식까지 버리게 된다', tone: -1 }], ending: '만든 뒤의 보관까지가 남은 재료 쓰기다.' }] } },
      { id: 'share', text: '이웃 친구네에 두부를 나누자고 연락한다', result: '친구가 오늘 저녁에 쓰겠다며 받아 간다.', impact: [{ who: '친구네', text: '재료를 바로 쓴다', tone: 1 }], ending: '내가 못 쓰는 재료는 바로 쓸 사람에게 가면 버려지지 않는다.' }] };
    const FRIDGE_R = [{ id: 'use', text: '버리기 전에 쓰거나 나눌 길이 있는지 먼저 본다' }, { id: 'store', text: '만든 음식은 나눠 보관하고 먹을 날을 정한다' }, { id: 'small', text: '한 집의 쓰레기는 작아서 줄여도 차이가 없다', why: '집마다의 작은 양이 모여 큰 양이 되고, 내 식비도 함께 줄어요.' }, { id: 'date', text: '기한이 가까우면 무조건 버리는 것이 안전하다', why: '표시된 기한과 보관 상태를 함께 보고, 기한 안이면 쓸 길을 먼저 찾아요.' }];
    // 자율 배식 찬반
    const DEBATE_TOPIC = '급식 자율 배식 확대';

    MODS.push(
      M({
        id: 'intro.waste-chain', type: 'intro', title: '밭에서 식판까지, 버려지는 지점',
        method: '식품이 버려지는 지점', tool: 'lifecycle', minutes: 7,
        levels: { easy: '교사가 생산·판매·급식 세 단계 카드를 먼저 짝지어 보이고 나머지를 함께 본다.', base: '다섯 단계마다 버려지는 까닭 카드를 짝짓는다.', challenge: '다섯 단계 가운데 우리가 가장 줄이기 쉬운 단계를 하나 골라 까닭을 말한다.' },
        intro: {
          teacher: '"음식물 쓰레기는 식판에서만 생길까요? 밭에서 식판까지 오는 길을 따라가 봐요." 시연 단추로 단계마다 까닭 카드가 붙는 모습을 보여 준다. "쓰레기는 급식실 문제니까 우리랑 상관없어요"라는 말이 나오면 "판매·가정 단계에서는 누가 고르고 사나요?"라고 되묻는다. 단계마다 까닭이 다르니 줄이는 방법도 단계마다 다르다는 점을 짚고, 오늘은 우리가 손댈 수 있는 단계를 찾는다고 밝힌다.',
          student: '밭에서 식판까지 음식이 오는 다섯 단계에서, 각 단계에 음식이 버려지는 까닭을 짝지어 보세요.',
          demo: { tool: 'lifecycle', options: { mode: 'match', center: '음식이 오는 길', cycle: false, spin: false, slots: [{ id: 'farm', label: '생산' }, { id: 'move', label: '유통' }, { id: 'shop', label: '판매' }, { id: 'home', label: '가정' }, { id: 'school', label: '급식' }],
            cards: [{ id: 'shape', text: '모양이 고르지 않아 골라냄' }, { id: 'ship', text: '옮기는 동안 눌리고 상함' }, { id: 'date', text: '기한이 가까워 팔지 못함' }, { id: 'buy', text: '많이 사서 냉장고에서 상함' }, { id: 'plate', text: '받은 양을 다 먹지 못함' }] },
            sequence: [{ match: { farm: 'shape', move: 'ship', shop: 'date', home: 'buy', school: 'plate' } }] },
          art: { draw: 'a paper path winding from a vegetable field through a delivery truck, a market stall, a home fridge and a school lunch tray, small paper scraps falling at each stop into a compost bin', banner: '음식은 어디서 버려질까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '단계별 까닭은 일반 설명이다(사람 확인 목록). 학생 가정의 음식 버리는 습관을 묻지 않는다.',
      }),
      M({
        id: 'intro.waste-chart', type: 'intro', title: '가상 학교 잔반 그래프 읽기',
        method: '가상 잔반 자료 해석', tool: 'chart', minutes: 7,
        levels: { easy: '3월과 7월 두 달을 함께 견주어 어느 달이 많은지 읽는다.', base: '꺾은선 전체를 보고 \'여름으로 갈수록…\' 같은 경향 문장을 말한다.', challenge: '7월이 많은 까닭을 알려면 더 필요한 자료(그달 메뉴·더위·행사)를 말한다.' },
        intro: {
          teacher: '"가상 학교의 달마다 잔반 그래프예요. 실제 통계가 아니라 상대 크기만 나타냈어요. 잔반이 가장 많은 달은 언제인가요?" 시연 단추로 7월이 골라지는 모습을 보인다. "7월은 학생들이 편식해서"처럼 한 가지로 단정하는 말이 나오면 "그달 메뉴나 날씨는 그래프에 나와 있나요?"라고 되묻는다. 그래프는 \'언제\'를 보여 주고 \'왜\'는 다른 자료로 확인해야 한다는 점을 짚는다.',
          student: '가상 학교의 월별 잔반 꺾은선그래프에서 잔반이 가장 많은 달을 찾고, 그 까닭을 추측해 보세요.',
          demo: { tool: 'chart', options: WLINE({ question: '잔반이 가장 많은 달은?', choices: WASTE.map((x) => x[0]) }), sequence: [{ pick: 4 }] },
          art: { draw: 'a paper line graph of school lunch leftovers across the months rising to a peak in July, a paper sun above the peak and a lunch tray with leftover rice below', banner: '잔반은 언제 늘어날까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 가상 자료다. 우리 학교 실제 잔반 자료는 영양 선생님께 받아 견주어 볼 수 있다.',
      }),

      M({
        id: 'activity.policy-debate', type: 'activity', title: '자율 배식 확대 찬반 근거',
        method: '찬반 토론: 잔반 줄이기 정책', tool: 'mindmap', minutes: 17,
        levels: { easy: '근거 카드를 찬성·반대 칸에 둘씩(4장) 단다.', base: '근거 카드를 찬성·반대·근거 약함에 셋씩 달고, 근거마다 반론을 짝짓는다.', challenge: '조건부 대안 카드가 더해진 판에서 실행 방법까지 고른다.' },
        activity: {
          title: '자율 배식 찬반 가지', tool: 'mindmap',
          teacher: '"\'잔반을 줄이려면 급식 자율 배식을 늘려야 한다.\' 찬성과 반대 모두 그럴듯한 근거가 있어요. 오늘은 내 편보다 근거의 힘을 따져요." 카드를 달 때마다 "이 근거는 자료로 확인할 수 있나요?"라고 묻는다. "어차피 학생들이 안 먹는다"를 반대 근거로 다는 학생에게 "모든 학생이라는 근거가 있을까요?"라고 되묻는다. 찬반 끝에 \'조건을 붙인 대안\'이 나올 수 있다는 점을 짚는다.',
          task: '자율 배식 확대 찬반 근거를 가지에 달고, 반론과 조건부 대안을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성·반대·근거 약함 가지에 다세요.', ['찬성', '반대', '근거 약함'], [
              ['먹을 만큼 받으면 남기는 양이 줄 수 있다', '먹는 양을 스스로 정하는 연습이 된다', '배식 뒤 버리는 양을 눈으로 볼 수 있다'],
              ['좋아하는 반찬만 담아 영양이 기울 수 있다', '배식 줄이 길어져 점심시간이 빠듯하다', '뒤에 온 학생 몫이 모자랄 수 있다'],
              ['우리 반은 다 남긴다', '자율이 무조건 좋다', '잔반은 원래 어쩔 수 없다'],
            ], { k: 2, hard: [['남긴 양을 재어 보이면 스스로 고친다'], ['배식량 조절 교육 없이는 효과가 작다']], d: 0.3, opt: { topic: DEBATE_TOPIC } }),
            MATCHQ('근거마다 맞서는 반론을 짝지으세요.', [['먹을 만큼 받으면 남기는 양이 줄 수 있다', '먹을 만큼을 잘못 어림하면 오히려 더 담는다'], ['좋아하는 반찬만 담아 영양이 기울 수 있다', '모든 반찬을 조금씩 담는 규칙을 함께 두면 된다'], ['배식 줄이 길어져 점심시간이 빠듯하다', '배식대를 늘리거나 반별 시간을 나누면 된다']], { k: 2, extra: ['잔반은 원래 어쩔 수 없다'], d: 0.35, opt: { topic: '근거와 반론' } }),
            PICKQ('찬반을 아우르는 조건부 대안의 실행 방법만 고르세요.', ['반찬마다 \'조금·보통\' 두 양을 고르게 한다', '한 달 동안 시범 운영하고 잔반 양을 잰다'], ['자율 배식을 바로 모든 학년에 한다', '남긴 학생 이름을 게시판에 붙인다'], { d: 0.4, opt: { basket: '조건부 대안' }, more: { conclude: '정책은 찬반 한쪽을 고르는 데서 끝나지 않고, 조건을 붙여 시험해 보고 자료로 다시 판단할 수 있어요. 남긴 사람을 드러내는 방법은 쓰지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠의 조건부 대안을 \'○○한다면 자율 배식을 늘린다\' 꼴로 쓰고, 확인할 자료 하나를 적으세요.' }] },
        notes: '남긴 학생을 공개하거나 나무라는 방식은 대안으로 받지 않는다. 자율 배식 운영 방식은 학교 영양 선생님께 확인한다(사람 확인 목록).',
      }),
      M({
        id: 'activity.season-map', type: 'activity', title: '가까운 제철 먹거리 지도',
        method: '제철·지역 먹거리 지도', tool: 'map', minutes: 18,
        levels: { easy: '산지 세 곳만 있는 가상 지도에서 핀을 꽂으면 그 칸 이름이 바로 보인다.', base: '산지 일곱 곳이 있는 가상 지도에서 같은 재료 가운데 급식실과 가까운 곳에 핀을 꽂는다.', challenge: '같은 지도에서 계절이 바뀐 식단(봄·여름)에 맞는 가까운 산지까지 고른다.' },
        activity: {
          title: '급식실에서 가까운 산지', tool: 'map',
          teacher: '"가상 지역 지도예요. 같은 배추라도 가까운 밭과 먼 산지가 있어요. 어디서 오는 게 옮기는 데 드는 자원이 적을까요?" 칸을 세어 거리를 견주게 한다. "먼 데서 오면 더 좋은 거 아니에요?"라는 말이 나오면 "좋고 나쁨이 아니라, 옮기고 보관하는 데 드는 것을 견주는 거예요"라고 답한다. 괄호 속 철도 함께 읽어, 철이 아닌 재료는 오래 보관하거나 멀리서 와야 한다는 점을 짚는다.',
          task: '가상 지도에서 급식실과 가까운 제철 산지를 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가을 급식에 배추김치를 넣어요. 배추가 나는 곳 가운데 급식실과 가장 가까운 곳에 핀을 꽂으세요.', toolOptions: MAP(), target: { place: '솔내 배추밭(가을·겨울)' }, difficulty: 0.2,
              levels: { easy: { prompt: '가을 급식에 배추김치를 넣어요. 배추가 나는 두 곳 가운데 급식실과 가까운 곳에 핀을 꽂으세요(산지 세 곳).', toolOptions: { places: FARM_EASY } } } },
            { prompt: '가을 급식에 고등어구이를 넣어요. 고등어가 들어오는 두 항구 가운데 급식실과 가까운 곳에 핀을 꽂으세요.', toolOptions: MAP(), target: { place: '바닷가 항구(고등어·가을)' }, difficulty: 0.25,
              levels: { easy: { prompt: '여름 급식에 감자조림을 넣어요. 지도에서 감자가 나는 곳에 핀을 꽂으세요(산지 세 곳).', toolOptions: { places: FARM_EASY }, target: { place: '들말 감자밭(여름)' } } } },
            { prompt: '봄 급식 후식으로 딸기를 넣어요. 지도에서 봄에 딸기가 나는 곳에 핀을 꽂으세요.', toolOptions: MAP(), target: { place: '물골 딸기 농장(봄)' }, difficulty: 0.3,
              levels: { easy: { prompt: '두 배추 산지의 거리를 견주어요. 급식실에서 더 먼 배추 산지에 핀을 꽂으세요(산지 세 곳).', toolOptions: { places: FARM_EASY }, target: { place: '먼산 배추 산지(가을·겨울)' } },
                challenge: { prompt: '봄 급식 후식으로 딸기를 넣어요. 딸기 농장에 핀을 꽂고, 철이 아닌 겨울에 딸기를 쓰려면 생기는 일을 고르세요(계절 바꾸기).', toolOptions: { ask: { q: '철이 아닐 때 이 재료를 쓰면?', choices: ['더 멀리서 오거나 오래 보관하는 데 자원이 든다', '아무 차이가 없다', '지도에서 더 가까워진다'], why: ['', '철이 아니면 가까운 밭에서 나지 않아요.', '산지 자리는 계절에 따라 옮겨 가지 않아요.'] } }, target: { place: '물골 딸기 농장(봄)', pick: 0 } } } },
            { prompt: '여름 급식 식단을 짜요. 여름에 나는 재료 가운데 급식실과 가장 가까운 곳에 핀을 꽂으세요.', toolOptions: MAP(), target: { place: '들말 감자밭(여름)' }, difficulty: 0.35,
              levels: { easy: { prompt: '거리를 셀 출발점을 찾아요. 우리 학교 급식실 자리에 핀을 꽂으세요(산지 세 곳).', toolOptions: { places: FARM_EASY }, target: { place: '우리 학교 급식실' } } },
              conclude: '가까운 곳에서 철에 나는 재료를 고르면 옮기고 오래 보관하는 데 드는 자원을 줄일 수 있어요. 모든 재료를 그렇게 할 수는 없으니 할 수 있는 것부터 바꿔요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 지도를 보고 계절별 가까운 재료로 급식 한 끼를 짜 보세요.', columns: ['계절', '가까운 재료', '고른 까닭'], cells: [['봄', '', ''], ['여름', '', ''], ['가을', '', '']] }] },
        notes: '지도·산지·철은 수업용 가상이다. 실제 우리 지역 먹거리는 교사가 지역 로컬푸드 안내로 바꿔 넣을 수 있다. 먼 곳·수입 먹거리를 나쁜 것으로 말하지 않는다.',
      }),
      M({
        id: 'activity.fridge-dilemma', type: 'activity', title: '기한이 다가온 재료 갈림길',
        method: '냉장고 속 남은 재료 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번(버리기·요리하기·나누기 → 다음 선택)까지 가 보고 근거를 고른다.', base: '갈림길 세 번(월요일까지)을 끝까지 따라가 쓰레기·식비 결과를 본다.', challenge: '끝까지 간 뒤 되돌아가 다른 끝 길 하나를 더 가 보고 근거를 고른다.' },
        activity: {
          title: '건우네 금요일 밤 냉장고', tool: 'dilemma',
          teacher: '"소비기한이 내일까지인 두부, 시들기 시작한 시금치, 남은 밥. 건우는 내일 하루 종일 집에 없어요. 어떻게 할까요?" 선택마다 결과의 \'누구에게\'를 소리 내어 읽게 한다. "기한이 가까우면 무조건 버리는 게 안전하다"는 학생에게 "기한이 내일까지라면 오늘은 어떤 상태일까요? 버리기 전에 할 수 있는 일은?"이라고 묻는다. 만든 음식도 보관·먹을 계획까지 이어져야 쓰레기가 준다는 점을 짚는다.',
          task: '건우가 되어 남은 재료를 어떻게 할지 고르고, 그 결과를 월요일까지 따라가요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('건우의 금요일 밤 선택을 끝까지 따라가고, 고른 근거를 고르세요.', FRIDGE, [['cook', 'store', 'eat']], FRIDGE_R, ['use', 'store'], { d: 0.35 }),
            DIL2('같은 냉장고에서 \'나누기\'와 \'버리기\' 길을 견주어 보세요. 버리지 않는 길로 가서 근거를 고르세요.', cut(FRIDGE, 2), [['share'], ['cook', 'store']], FRIDGE_R, ['use'], { d: 0.3 }),
            EXPLOREQ('서로 다른 끝 길 두 개를 가 보고, 견준 뒤 점검하세요.', FRIDGE, FRIDGE_R, ['두 길의 음식물 쓰레기 차이를 견주었다', '두 길의 식비 차이를 견주었다', '내가 할 수 있는 방법 하나를 골랐다'], { d: 0.3, more: { conclude: '버리기 전에 쓰기·나누기를 먼저 보고, 만든 음식은 나눠 보관해 먹을 날을 정해요. 한 집의 작은 실천이 모여 큰 양을 줄여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '기한이 다가온 재료를 버리기 전에 할 수 있는 일 두 가지를 순서대로 쓰세요.' }] },
        notes: '건우는 가상 인물이다. 소비기한 표시의 뜻과 보관·재가열 수칙은 일반 설명이다(사람 확인 목록). 기한이 지난 음식을 먹으라고 권하지 않는다.',
      }),
      M({
        id: 'activity.leftover-cook', type: 'activity', title: '남은 밥·채소로 한 끼 계획',
        method: '남은 재료 조리 계획', tool: 'kitchen', minutes: 18,
        levels: { easy: '조리 단계 카드 세 장(재료 확인·손질·볶기)을 차례로 놓는다.', base: '다섯 단계(재료 확인·손 씻기·손질·볶기·담기)를 놓고, 남은 재료를 식품군에 나눈다.', challenge: '\'남은 것 식혀 나눠 보관\'까지 여섯 단계를 놓고, 조리 전 점검표에서 함정 항목을 거른다.' },
        activity: {
          title: '남은 재료 볶음밥 순서', tool: 'kitchen',
          teacher: '"냉장고에 남은 밥 한 공기, 양파 반 개, 시금치 한 줌, 달걀 두 개. 이걸로 한 끼를 만든다면 어떤 순서일까요? 오늘은 직접 불을 쓰지 않고 순서만 계획해요." 카드를 놓을 때 \'손 씻기\'를 빠뜨린 모둠에 "재료를 만지기 전에 무엇이 먼저일까요?"라고 묻는다. 담고 끝내는 모둠에는 "남은 한 그릇은 어디로 가나요?"라고 묻는다. 남은 재료 요리도 식품군을 맞추면 한 끼가 된다는 점을 짚는다.',
          task: '남은 재료로 한 끼를 만드는 순서를 놓고, 재료를 식품군에 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            Object.assign(ORDERQ('남은 밥과 채소로 볶음밥을 만드는 순서대로 카드를 놓으세요.', ['남은 재료와 기한 확인', '손 씻기', '채소 씻어 썰기', '달걀과 밥 넣고 볶기', '그릇에 담기'], { k: 3, d: 0.2 }),
              { levels: { easy: { prompt: '남은 밥과 채소로 볶음밥을 만드는 순서대로 카드를 놓으세요(카드 3장).', toolOptions: { slots: 3, cards: ['달걀과 밥 넣고 볶기', '남은 재료와 기한 확인', '채소 씻어 썰기'] }, target: { order: ['남은 재료와 기한 확인', '채소 씻어 썰기', '달걀과 밥 넣고 볶기'] } },
                challenge: { prompt: '보관 단계까지 넣어 여섯 단계로 놓으세요(카드 6장).', toolOptions: { slots: 6, cards: ['남은 것 식혀 나눠 보관', '그릇에 담기', '달걀과 밥 넣고 볶기', '채소 씻어 썰기', '손 씻기', '남은 재료와 기한 확인'] }, target: { order: ['남은 재료와 기한 확인', '손 씻기', '채소 씻어 썰기', '달걀과 밥 넣고 볶기', '그릇에 담기', '남은 것 식혀 나눠 보관'] } } } }),
            SORTQ('남은 재료를 식품군 칸에 나누세요.', ['곡류', '고기', '채소'], [['남은 밥', '식빵 두 장'], ['달걀', '두부 반 모'], ['시금치', '양파 반 개']], { k: 1, d: 0.25, opt: { trayLabel: '남은 재료' } }),
            CHECKQ('남은 재료로 조리하기 전 점검표에 넣을 항목만 표시하세요.', '남은 재료 조리 전 점검', [
              ['date', '재료의 기한과 냄새·색을 확인했다', true], ['hand', '손을 씻었다', true], ['board', '채소용과 날달걀 만진 손을 나눠 씻는다', true],
              ['all', '남은 재료는 상태와 상관없이 다 넣는다', false], ['cool', '남을 양을 생각해 보관 그릇을 준비했다', true], ['day', '상온에 하루 둔 반찬도 넣는다', false],
            ], { k: 4, d: 0.3, more: { conclude: '남은 재료 요리는 상태 확인과 위생이 먼저고, 남은 것을 나눠 보관하는 데서 끝나요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 냉장고(남은 밥·양파·시금치·달걀)로 만들 수 있는 다른 요리 하나와 그 순서를 세 단계로 쓰세요.' }] },
        notes: '실제 조리 실습은 하지 않는다(불·칼을 쓰지 않음). 실습으로 넓힐 때는 실과 조리 안전 수칙을 따른다. 보관·재가열 수칙은 사람 확인 목록.',
      }),

      M({
        id: 'wrap.proposal', type: 'wrap', title: '잔반 줄이기 실천 제안서',
        method: '실천 제안서', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '쉬운 활동지의 문장 틀로 세 문장(문제·방법·점검)을 쓴다.', base: '다섯 문장(문제·근거·방법·점검·기대 효과)을 쓰고 기준표 네 항목을 점검한다.', challenge: '활동지에 예상되는 반대 의견과 그에 대한 대응을 덧붙인다.' },
        wrap: {
          teacher: '"오늘 찾은 버려지는 지점 가운데 하나를 골라 학교나 가정에 낼 제안서를 써요. 누구에게 내는지 먼저 정해요." 쓰기 전에 기준표를 함께 읽는다. "잔반을 줄이자"처럼 방법이 없는 글에 "누가, 언제, 무엇을 하나요? 줄었는지는 어떻게 알까요?"라고 묻는다. 근거에는 오늘 본 가상 자료를 쓰되 \'가상\'이라고 밝히게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '학교 또는 가정에 낼 잔반 줄이기 제안을 다섯 문장으로 쓰세요(받는 사람을 먼저 쓰기).', minChars: 80, maxChars: 500, starter: '○○에게 제안합니다. 지금 문제는 ~', sample: '학생회에 제안합니다. 가상 자료에서 여름철 잔반이 가장 많았습니다. 반찬마다 \'조금·보통\' 두 양을 고르게 하면 받은 만큼 먹을 수 있습니다. 한 달 동안 시범으로 해 보고 잔반 양을 재어 견주겠습니다. 잔반이 줄면 버리는 비용도 함께 줄 것입니다.' }, prompt: '잔반 줄이기 제안을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['문제를 밝혔다', '근거(가상 자료라면 가상이라고)를 썼다', '누가 무엇을 할지 방법을 썼다', '줄었는지 점검할 방법을 썼다'], sentences: [3, 6] }, difficulty: 0.3 },
            { type: 'choice', prompt: '\'음식물 쓰레기는 개인이 줄여도 차이가 없다\'는 말에 대한 반박으로 알맞은 것은?', options: ['맞다, 정책만 바뀌면 된다', '집과 학교의 작은 양이 모여 큰 양이 되고, 실천이 정책의 근거 자료도 된다', '쓰레기는 어차피 생기니 신경 쓰지 않는다'], answer: 1, difficulty: 0.2, explain: '개인의 실천과 정책은 서로 이어져요. 줄인 경험과 자료가 더 나은 제도를 만드는 근거가 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '잔반 줄이기 실천 제안서',
          items: [
            { type: 'short', prompt: '받는 사람을 정하고 문제·근거·방법·점검·기대 효과를 담아 제안 다섯 문장을 쓰세요.' },
            { type: 'short', prompt: '예상되는 반대 의견 하나와 그에 대한 우리의 대응을 쓰세요.' },
          ],
          easy: { note: '"○○에게 제안합니다. 지금 문제는 ~. 그래서 ~을 하자. 한 달 뒤 ~로 확인한다."', items: [{ type: 'short', prompt: '문제·방법·점검을 한 문장씩 세 문장으로 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.campaign', type: 'wrap', title: '잔반 줄이기 캠페인 포스터',
        method: '캠페인 포스터 설계', tool: 'collage', minutes: 7,
        levels: { easy: '제안서의 핵심 문구 하나를 정하고 조각 몇 개로 꾸민다.', base: '문구와 그것을 보여 주는 그림 조각을 함께 배치하고 점검한다.', challenge: '후배 또는 가족 가운데 대상을 정해 문구와 그림을 고친 까닭을 활동지에 쓴다.' },
        wrap: {
          teacher: '"제안서의 핵심을 한 장 포스터로 줄여요. 지나가며 3초 안에 읽혀야 해요." 문구를 활동지에 먼저 쓰고 조각으로 꾸미게 한다. 남긴 학생을 나무라는 문구(\'남기면 부끄러움\')를 쓰려는 학생에게 "보는 사람이 무엇을 하면 되는지가 보이게 바꿔 볼까요?"라고 묻는다. 포스터는 사람을 탓하지 않고 할 일을 보여 준다는 원칙을 정한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'leaf', 'star', 'heart'], sizes: ['s', 'm', 'l'] }, prompt: '잔반 줄이기 캠페인 포스터를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['핵심 문구를 쓸 자리를 크게 남겼다', '할 일(예: 먹을 만큼 받기)을 그림으로 보였다', '사람을 탓하는 표현을 넣지 않았다'], minPieces: 3 }, difficulty: 0.2 },
            { type: 'choice', prompt: '캠페인 문구로 가장 알맞은 것을 고르세요.', options: ['남기는 사람은 부끄러운 줄 알아라', '먹을 만큼 받고, 받은 만큼 맛있게', '잔반은 어쩔 수 없다'], answer: 1, difficulty: 0.15, explain: '좋은 캠페인 문구는 탓하지 않고 할 일을 짧게 보여 줘요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '잔반 줄이기 캠페인',
          items: [
            { type: 'short', prompt: '포스터의 핵심 문구 한 줄과 그 문구를 고른 까닭을 쓰세요.' },
            { type: 'short', prompt: '대상(후배 또는 가족)을 정하고, 그 대상에 맞게 바꾼 문구를 쓰세요.' },
          ],
        },
        notes: '포스터는 학급 안에서 나눈다. 실제 게시 전에 교사가 문구를 함께 본다. 특정 학생·반의 잔반을 드러내지 않는다.',
      }),
    );
  }

  /* 사람 확인(ad-analysis):
   *   - [ad-analysis 전체] 식품 표시(영양성분·원재료·1회 제공량·주의 문구)를 읽는 법, '고카페인 함유' 표시와 어린이·임산부 등 주의 문구가 붙는다는 것 → 식품의약품안전처(식품표시 안내)
   *   - [intro.claim-sort · activity.ad-vs-label] '무설탕'처럼 표시 기준이 있는 문구가 다른 당류·감미료가 없다는 뜻은 아니라는 설명 → 식품의약품안전처(영양표시·강조표시 기준)
   *   - [activity.debate · wrap.critique] 어린이·청소년 대상 고열량·저영양 식품 광고를 제한하는 제도가 있다는 언급(시간대·기준 세부는 쓰지 않음) → 식품의약품안전처(어린이 식생활안전관리 특별법 안내)·방송통신심의위원회
   *   - [activity.exam-dilemma] 카페인이 잠들기와 잠의 질에 영향을 줄 수 있다 → 식품의약품안전처·질병관리청 국가건강정보포털
   * 계획대로 못 한 것:
   *   - intro 의 levels(컷 둘/넷, 문구 넷/여섯)는 시연이 하나뿐이라 교사 진행 방식으로 적었다.
   *   - activity.ad-vs-label: chart 는 막대 한 줄만 그려 '광고 주장 대 표시 수치'를 한 그래프에 두 줄로 놓지 못한다 — 광고 문구는 문항 글에, 표시 수치(가상)는 막대로 둔다. 문항 수는 단계마다 같아 쉬움 = 값 표시, 도전 = 정직한 문구 고쳐 쓰기를 활동지로 옮겼다.
   *   - activity.ad-design·wrap.critique: '대상 소비자에 맞춰 고치기'·'반론'은 도전 단계 기준 하나 더(selfCheck)로 했다.
   */
  // ======================================================================================================
  // 3. 식품 광고 분석 (11학년)
  // ======================================================================================================
  {
    const M = MOD('ad-analysis', [11]);
    // 시험 기간 학원 가기 전 편의점 — 광고 문구에 끌려 고르는 순간 → 표시 읽기 → 결과
    const SHOP = { text: '시험 기간 오후, 나연이는 학원 가기 전 편의점에 들렀다. 냉장고 문에 \'집중력 200% 충전! 수험생 필수\'라는 가상 음료 광고가 붙어 있다.', who: '나연', motif: 'shop', choices: [
      { id: 'grab', text: '광고 문구만 보고 바로 집어 든다', result: '계산대에서 캔 옆면의 작은 \'고카페인 함유\' 표시가 눈에 띈다.', impact: [{ who: '나연', text: '무엇을 샀는지 모른 채 고른다', tone: -1 }],
        next: { text: '계산 직전, 캔 옆면의 표시를 다시 볼지 망설인다.', choices: [
          { id: 'read2', text: '계산 전에 표시를 읽고 다른 음료와 견준다', result: '광고와 달리 \'집중력\' 근거는 어디에도 없고 카페인 표시만 있다.', impact: [{ who: '나연', text: '광고와 표시의 차이를 알아챈다', tone: 1 }],
            next: { text: '학원은 밤 10시에 끝나고, 오늘은 일찍 자기로 했다.', choices: [
              { id: 'swap', text: '물과 우유를 고르고 음료는 내려놓는다', result: '밤에 제때 잠들고 다음 날 시험을 차분히 본다.', impact: [{ who: '나연', text: '계획한 잠을 지킨다', tone: 1 }], ending: '광고보다 표시를 먼저 읽으면 내 계획에 맞게 고를 수 있다.' },
              { id: 'keep', text: '샀으니 밤에 학원 끝나고 마신다', result: '밤늦게까지 잠이 오지 않아 뒤척인다.', impact: [{ who: '나연', text: '다음 날 머리가 무겁다', tone: -1 }], ending: '표시를 읽고도 마시는 때를 따지지 않으면 계획이 흔들린다.' }] } },
          { id: 'pay', text: '그냥 계산하고 학원에서 마신다', result: '수업 중 가슴이 두근거리고 손이 차갑다.', impact: [{ who: '나연', text: '몸이 불편해 수업에 집중하지 못한다', tone: -1 }], ending: '\'집중력\'이라는 광고 문구가 실제 집중을 약속하지는 않는다.' }] } },
      { id: 'read', text: '광고 대신 캔 뒷면의 표시부터 읽는다', result: '\'고카페인 함유\'와 주의 문구가 적혀 있다. 집중력에 대한 근거는 표시에 없다.', impact: [{ who: '나연', text: '광고와 사실을 나누어 본다', tone: 1 }],
        next: { text: '옆 칸에 \'자연의 에너지\'라는 문구의 다른 가상 음료가 있다.', choices: [
          { id: 'compare', text: '두 음료의 표시를 나란히 견준다', result: '\'자연\' 문구 음료에도 당류가 많고 카페인 표시가 있다.', impact: [{ who: '나연', text: '문구가 달라도 표시를 견주는 습관이 생긴다', tone: 1 }],
            next: { text: '학원 친구가 "광고에 수험생 필수라던데 하나 사 줘"라고 한다.', choices: [
              { id: 'share', text: '표시에서 본 것을 말해 주고 물을 함께 산다', result: '친구도 다음부터 뒷면을 보겠다고 한다.', impact: [{ who: '친구', text: '광고를 따져 보는 법을 알게 된다', tone: 1 }], ending: '표시를 읽는 습관은 옆 사람의 선택에도 닿는다.' },
              { id: 'buy', text: '말없이 광고 음료를 사 준다', result: '친구는 밤늦게 음료를 마신다.', impact: [{ who: '친구', text: '정보 없이 고른다', tone: 0 }], ending: '알게 된 사실을 나누지 않으면 광고가 대신 말하게 된다.' }] } },
          { id: 'nature', text: '\'자연\'이라니 건강할 것 같아 그것을 산다', result: '표시를 보지 않고 산 음료에도 카페인이 들어 있었다.', impact: [{ who: '나연', text: '다른 문구에 다시 끌린다', tone: -1 }], ending: '\'자연\'·\'에너지\' 같은 감성 문구는 성분을 알려 주지 않는다.' }] } },
      { id: 'skip', text: '광고를 의심해 아무 음료도 사지 않는다', result: '학원에서 목이 말라 쉬는 시간에 물을 찾는다.', impact: [{ who: '나연', text: '광고에는 안 끌렸지만 필요한 것도 못 챙긴다', tone: 0 }], ending: '광고를 피하는 것보다 표시를 읽고 필요한 것을 고르는 것이 낫다.' }] };
    const SHOP_R = [{ id: 'label', text: '광고 문구보다 표시 정보가 성분을 알려 준다' }, { id: 'plan', text: '마시는 때를 내 잠 계획에 맞춰 정한다' }, { id: 'ad', text: '수험생 필수라고 광고하니 믿어도 된다', why: '광고는 팔려는 목적으로 쓴 글이라 근거를 따로 확인해야 해요.' }, { id: 'nat', text: '\'자연\'이 붙은 음료는 몸에 부담이 없다', why: '감성 문구는 성분이 아니에요 — 표시를 견주어야 알 수 있어요.' }];
    // 가상 광고 문구 — 사실 확인 가능 / 감성 / 과장 의심
    const FACT = ['무설탕', '단백질 12g 함유(1회 제공량)', '국내산 쌀 사용'];
    const FEEL = ['자연의 맛', '엄마 손맛 그대로', '행복 한 입'];
    const HYPE = ['먹기만 해도 성적 쑥쑥', '하루 한 병이면 피로 끝', '집중력 200% 충전'];
    // 가상 제품 표시 수치(상대 크기)
    const SUGAR = [['A 음료 \'당 걱정 끝\'', 7], ['B 음료', 5], ['C 음료', 3], ['D 생수맛 음료', 1]];
    const SODIUM = [['가 컵라면 \'가볍게 한 끼\'', 8], ['나 김밥', 5], ['다 샐러드', 2], ['라 주먹밥', 4]];

    MODS.push(
      M({
        id: 'intro.ad-story', type: 'intro', title: '에너지 음료 광고 네 컷',
        method: '에너지 음료 광고 장면', tool: 'story', minutes: 7,
        levels: { easy: '첫 두 컷(공부하는 학생·제품 등장)만 함께 읽고 노리는 마음을 말한다.', base: '네 컷을 다 넘기며 컷마다 노리는 마음 카드를 짝짓는다.', challenge: '네 컷을 짝지은 뒤 광고에 빠진 정보(성분·주의 문구) 하나를 활동지 여백에 쓴다.' },
        intro: {
          teacher: '"광고는 15초 안에 우리 마음을 움직이도록 계산된 장면이에요. 이 가상 광고는 누구의 어떤 마음을 노리고 있을까요?" 네 컷을 넘기며 두세 명에게 컷마다 떠오르는 마음을 묻고, 시연 단추로 컷과 마음 카드가 짝지어지는 모습을 보인다. "광고에 나오면 효과가 있는 거 아니에요?"라는 말이 나오면 "네 컷 어디에 성분이나 근거가 나왔나요?"라고 되묻는다. 광고가 보여 준 것과 보여 주지 않은 것을 나누는 것이 오늘의 시작이라고 밝힌다.',
          student: '시험 기간 학생을 겨냥한 가상 에너지 음료 광고 네 컷을 보고, 컷마다 광고가 노리는 마음을 짝지어 보세요. 광고에 나오지 않은 정보도 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'match', title: '가상 광고 \'풀충전\'', slots: [{ id: 'k1', label: '1컷 밤늦게 졸린 수험생', motif: 'moon' }, { id: 'k2', label: '2컷 캔을 따는 순간 번쩍', motif: 'star' }, { id: 'k3', label: '3컷 1등 성적표를 든 모습', motif: 'sun' }, { id: 'k4', label: '4컷 수험생 필수!', motif: 'house' }], cards: [{ id: 'm1', text: '시험이 불안한 마음' }, { id: 'm2', text: '빨리 해결하고 싶은 마음' }, { id: 'm3', text: '좋은 결과를 바라는 마음' }, { id: 'm4', text: '남들 다 하니 나도 해야 하는 마음' }] }, sequence: [{ match: { k1: 'm1', k2: 'm2', k3: 'm3', k4: 'm4' } }] },
          art: { draw: 'a four-panel paper comic strip of a fictional energy drink ad: a sleepy student at night, a can opening with paper sparks, a student holding a top report card, a big banner, with a magnifying glass over the empty space where ingredients should be', banner: '광고는 무엇을 노릴까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '광고·제품은 모두 가상이다. 실제 상품명·회사명·광고 모델을 쓰지 않는다. 학생에게 자기가 마시는 음료를 밝히게 하지 않는다.',
      }),
      M({
        id: 'intro.claim-sort', type: 'intro', title: '광고 문구 세 바구니',
        method: '문구 분류', tool: 'sortboard', minutes: 7,
        levels: { easy: '문구 네 장(바구니마다 한두 장)만 함께 넣어 본다.', base: '문구 여섯 장을 사실 확인 가능·감성·과장 의심으로 나누고 하나의 근거를 말한다.', challenge: '사실 확인 가능 문구마다 어디서 확인할지(표시·원산지 표시) 짝에게 말한다.' },
        intro: {
          teacher: '"\'무설탕\', \'자연의 맛\', \'먹기만 해도 성적 쑥쑥\' — 이 셋은 같은 종류의 말일까요?" 시연 단추로 문구가 세 바구니에 나뉘는 모습을 보여 준다. "자연의 맛이면 건강한 거잖아요"라는 말이 나오면 "\'자연의 맛\'이 맞는지 틀린지 무엇으로 확인할 수 있나요?"라고 되묻는다. 확인할 수 있는 문구, 기분만 주는 문구, 효과를 부풀린 문구를 나누는 눈이 오늘 수업의 도구라는 점을 짚는다.',
          student: '가상 광고 문구를 사실 확인 가능·감성·과장 의심 바구니에 나누어 보세요. 사실 확인 가능 문구는 어디서 확인할 수 있을지도 생각해 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['사실 확인 가능', '감성', '과장 의심'], cards: [FACT[0], FEEL[0], HYPE[0], FACT[1], FEEL[1], HYPE[1]] }, sequence: [{ sort: { '사실 확인 가능': [FACT[0], FACT[1]], 감성: [FEEL[0], FEEL[1]], '과장 의심': [HYPE[0], HYPE[1]] } }] },
          art: { draw: 'three paper baskets on a shelf labeled with a check mark, a heart and a question mark, paper ad slogan strips floating above them', banner: '확인할 수 있는 말일까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '\'무설탕\'은 확인할 수 있는 문구지만, 다른 당류·감미료가 없다는 뜻은 아니라는 점은 표시 기준을 확인한 뒤 짚는다(사람 확인 목록).',
      }),

      M({
        id: 'activity.ad-vs-label', type: 'activity', title: '광고 문구와 표시 수치 견주기',
        method: '광고와 표시 견주기', tool: 'chart', minutes: 17,
        levels: { easy: '막대 끝에 가상 표시 값이 보여 광고한 제품의 막대부터 읽는다.', base: '값 표시 없이 두 제품군(음료 당류·간편식 나트륨)의 막대를 읽고 광고 문구와 어긋나는 점을 고른다.', challenge: '값 표시 없이 풀고, 활동지에서 광고 문구를 표시 수치에 맞는 정직한 문구로 고쳐 쓴다.' },
        activity: {
          title: '광고 문구 대 표시 수치', tool: 'chart',
          teacher: '"광고는 \'당 걱정 끝\'이라는데, 표시의 당류 칸은 무엇이라고 말할까요? 그래프 값은 실제 제품이 아니라 수업용 가상 표시예요." 막대를 읽을 때마다 광고 문구를 소리 내어 다시 읽게 한다. "광고에 숫자가 없으니 거짓말은 아니잖아요"라는 학생에게 "거짓말은 아니어도, 듣는 사람이 무엇을 믿게 만들었나요?"라고 묻는다. 광고는 보여 주고 싶은 것만 고르고, 표시는 모든 제품이 같은 칸에 적는다는 차이를 짚는다.',
          task: '가상 광고 문구와 가상 표시 막대그래프를 견주어 어긋나는 점을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 광고에서 \'당 걱정 끝\'이라고 한 A 음료는 네 음료 가운데 당류 막대가 몇 번째로 큰가요?', toolOptions: { type: 'bar', mode: 'read', title: '음료 100mL당 당류(가상 표시, 상대 크기)', yLabel: '상대 크기', xLabel: '음료', data: SUGAR, question: 'A 음료의 당류 막대는?', choices: ['가장 크다', '두 번째', '세 번째', '가장 작다'], why: ['', 'A 막대보다 큰 막대가 있는지 다시 보세요.', 'A 막대보다 큰 막대가 있는지 다시 보세요.', 'A 막대보다 큰 막대가 있는지 다시 보세요.'] }, target: { pick: 0 }, difficulty: 0.2, conclude: '\'당 걱정 끝\'이라는 문구와 달리 표시에서는 당류가 가장 많았어요. 문구가 아니라 표시 칸을 견주어요.' },
            { prompt: 'A 음료와 D 음료의 당류 상대 크기 차이는 얼마인가요?', toolOptions: { type: 'bar', mode: 'read', title: '음료 100mL당 당류(가상 표시, 상대 크기)', yLabel: '상대 크기', xLabel: '음료', data: SUGAR, question: 'A − D 는?' }, target: { value: 6 }, difficulty: 0.3 },
            { prompt: '가상 광고에서 \'가볍게 한 끼\'라고 한 가 컵라면의 나트륨 막대와 견주어 알맞은 말을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '한 개당 나트륨(가상 표시, 상대 크기)', yLabel: '상대 크기', xLabel: '간편식', data: SODIUM, question: '표시로 본 가 컵라면은?', choices: ['네 간편식 가운데 나트륨이 가장 많다', '나트륨이 가장 적다', '김밥과 같다'], why: ['', '가 막대가 가장 작은지 다시 보세요.', '두 막대 길이를 견주어 보세요.'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '이 가상 표시 그래프만으로는 판단할 수 없는 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '한 개당 나트륨(가상 표시, 상대 크기)', yLabel: '상대 크기', xLabel: '간편식', data: SODIUM, question: '그래프로 알 수 없는 것은?', choices: ['어느 간편식의 나트륨이 상대적으로 많은지', '한 끼로 다른 영양소가 충분한지', '광고 문구와 표시가 어긋나는지'], why: ['막대 길이로 견줄 수 있어요.', '', '광고 문구와 막대를 견주면 알 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '나트륨 한 칸만으로 좋은 음식·나쁜 음식을 가르지 않아요. 표시의 여러 칸과 하루 식사 전체를 함께 봐요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: 'A 음료의 \'당 걱정 끝\' 문구를 가상 표시 수치에 맞는 정직한 문구로 고쳐 쓰세요.' }] },
        notes: '그래프 값은 수업용 가상 상대 크기다. 특정 음식을 나쁜 음식으로 낙인찍지 않고, 광고 문구와 표시가 어긋나는지에 초점을 둔다.',
      }),
      M({
        id: 'activity.exam-dilemma', type: 'activity', title: '광고 문구 앞 편의점 갈림길',
        method: '시험 기간 에너지 음료 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 두 번(편의점·계산대)까지 가 보고 근거 카드를 고른다.', base: '갈림길 세 번(밤 계획·친구 부탁)까지 결과를 따라가고 근거 카드를 고른다.', challenge: '세 번 끝까지 간 뒤 되돌아가 다른 끝 길을 하나 더 가 보고 견준다.' },
        activity: {
          title: '광고 문구 앞의 선택', tool: 'dilemma',
          teacher: '"냉장고 문의 \'집중력 200%\' 광고 앞에서 나연이는 어떻게 고를까요? 이번 갈림길의 축은 \'광고를 믿을까, 표시를 읽을까\'예요." 고를 때마다 결과 칸의 영향을 소리 내어 읽게 한다. "광고를 의심해서 아무것도 안 사면 제일 안전하잖아요"라는 학생에게 \'아무것도 사지 않는다\' 길의 결과를 보이며 "필요한 물도 못 챙겼네요. 피하기와 따져 보고 고르기는 어떻게 다를까요?"라고 묻는다. 활동 2에서는 친구에게까지 이어지는 결과를 보고, 표시를 읽는 습관이 옆 사람에게도 닿는다는 점을 짚는다.',
          task: '나연이가 되어 광고 앞에서 고르고, 결과를 끝까지 따라가 근거를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('나연이가 광고와 표시를 따져 고르는 길로 끝까지 가 보고, 그 선택의 근거를 고르세요.', SHOP, [['read', 'compare', 'share'], ['grab', 'read2', 'swap']], SHOP_R, ['label', 'plan'], { d: 0.35, opt: { title: '편의점 냉장고 앞' } }),
            EXPLOREQ('같은 장면에서 서로 다른 끝 길을 두 개 이상 가 보고, 견주어 본 것을 점검하세요.', SHOP, SHOP_R, ['광고만 보고 고른 길의 결과를 보았다', '표시를 읽은 길의 결과를 보았다', '두 길에서 영향을 받은 사람을 견주었다'], { d: 0.35 }),
            DIL2('다음 날 단체방 장면에서 광고 대신 표시로 이야기하는 길을 고르고 근거를 고르세요.', { text: '다음 날, 친구가 단체방에 같은 음료 광고 사진을 올리며 "이거 마시면 집중 200%래, 다 같이 사자"라고 한다.', who: '나연', motif: 'house', choices: [
              { id: 'photo', text: '뒷면 표시 사진을 올리며 "고카페인 함유라고 적혀 있어"라고 말한다', result: '친구들이 표시 사진을 확대해 본다.', impact: [{ who: '친구들', text: '광고 말고 성분을 보게 된다', tone: 1 }],
                next: { text: '한 친구가 "그래도 시험 기간엔 필요하지 않아?"라고 묻는다.', choices: [
                  { id: 'time', text: '"마신다면 마지막 시각을 정해 두자"고 제안한다', result: '친구들이 각자 잠드는 시각을 말해 본다.', impact: [{ who: '친구들', text: '스스로 정할 기준이 생긴다', tone: 1 }], ending: '표시를 읽고 내 계획에 맞춰 정하면 광고에 끌려가지 않는다.' },
                  { id: 'blame', text: '"그런 걸 마시는 사람은 이해가 안 돼"라고 말한다', result: '친구가 머쓱해져 대화를 멈춘다.', impact: [{ who: '친구', text: '무시당한 기분이 든다', tone: -1 }], ending: '마시는 사람을 탓하면 표시 이야기도 닿지 않는다.' }] } },
              { id: 'like', text: '좋아요만 누르고 넘어간다', result: '다른 친구들도 따라 사겠다고 답한다.', impact: [{ who: '친구들', text: '광고 문구만 보고 고른다', tone: -1 }],
                next: { text: '저녁에 친구 셋이 그 음료를 들고 독서실에 왔다.', choices: [
                  { id: 'late', text: '그제야 뒷면 표시를 함께 읽어 보자고 한다', result: '한 친구가 오늘은 한 캔만 마시기로 한다.', impact: [{ who: '친구들', text: '늦게나마 표시를 본다', tone: 0 }], ending: '표시는 사기 전에 읽을수록 쓸모가 크다.' },
                  { id: 'none', text: '그대로 둔다', result: '친구들이 밤늦게 한 캔씩 더 마신다.', impact: [{ who: '친구들', text: '잠들기 어려운 밤이 된다', tone: -1 }], ending: '광고 문구만 남은 대화는 다음 선택도 광고에 맡긴다.' }] } }] }, [['photo', 'time']], SHOP_R, ['label', 'plan'], { d: 0.35, opt: { title: '다음 날 단체방' }, more: { conclude: '광고는 마음을, 표시는 성분을 말해요. 친구와 이야기할 때도 표시를 근거로, 사람은 탓하지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '광고 문구 앞에서 고를 때 내가 먼저 확인할 표시 칸 두 가지와 그 까닭을 쓰세요.' }] },
        notes: '나연은 가상 인물이다. 학생이 실제로 마시는 음료나 양을 묻지 않는다. 카페인이 잠에 주는 영향은 일반 설명까지만 쓴다(사람 확인 목록).',
      }),
      M({
        id: 'activity.ad-design', type: 'activity', title: '정직한 광고 다시 만들기',
        method: '정직한 광고 다시 만들기', tool: 'collage', minutes: 17,
        levels: { easy: '문구 하나를 넣을 자리와 제품 조각만으로 광고 한 장을 꾸미고 점검한다.', base: '문구와 그림(표시 정보를 나타낸 조각)을 함께 넣어 광고 두 장을 꾸미고 점검한다.', challenge: '대상 소비자(후배·보호자 등)를 정해 그에 맞게 고치고 기준 하나를 더 점검한다.' },
        activity: {
          title: '표시에 근거한 광고 판', tool: 'collage',
          teacher: '"이번에는 우리가 광고를 만드는 사람이에요. 단, 표시 정보로 확인할 수 있는 말만 쓸 수 있어요." 앞 활동의 가상 음료 A 를 다시 광고하게 하고, 문구는 활동지에 먼저 쓴다. "정직하게 쓰면 아무도 안 사요"라는 학생에게 "\'당류 표시 확인하세요, 물처럼 가볍지는 않아요\' 같은 말은 어떤 소비자에게 믿음을 줄까요?"라고 묻는다. 실제 상품명·사람 얼굴은 넣지 않는다는 원칙을 먼저 정한다.',
          task: '가상 음료 A 를 표시 정보에 근거한 정직한 광고로 다시 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '광고 1장: 제품(가상 음료 A)과 정직한 문구 자리를 조각으로 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'star'] }, target: { selfCheck: ['제품을 나타내는 조각이 있다', '문구를 넣을 자리를 남겼다', '실제 상품명·사람 얼굴을 넣지 않았다'], minPieces: 3 }, difficulty: 0.2 },
            { prompt: '광고 2장: 표시 정보(당류·카페인)를 크기가 다른 조각으로 나타내 눈에 띄게 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'diamond'] }, target: { has: [{ size: 's', min: 1 }, { size: 'l', min: 1 }], selfCheck: ['표시 정보를 광고 안에 보이게 넣었다', '부풀린 효과(성적·피로 끝)를 약속하지 않았다'], minPieces: 4 }, difficulty: 0.3,
              levels: { challenge: { prompt: '광고 2장을 정한 대상 소비자에게 맞게 꾸미고 점검하세요(대상 맞춤).', target: { has: [{ size: 's', min: 1 }, { size: 'l', min: 1 }], selfCheck: ['표시 정보를 광고 안에 보이게 넣었다', '부풀린 효과(성적·피로 끝)를 약속하지 않았다', '정한 대상이 알아야 할 주의 정보를 넣었다'], minPieces: 4 } } } },
            { prompt: '두 장을 짝과 바꾸어 보고, 짝의 광고가 지킨 기준을 스스로 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'heart'], readOnly: false }, target: { selfCheck: ['짝의 광고에서 확인할 수 있는 문구를 찾았다', '짝의 광고에서 감성 문구를 찾았다', '고칠 점 하나를 말해 주었다'], minPieces: 1 }, difficulty: 0.25, conclude: '정직한 광고는 소비자가 스스로 판단할 정보를 함께 건네요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 광고의 문구를 쓰고 근거가 된 표시 칸을 적으세요.', columns: ['장', '문구', '근거 표시 칸'], cells: [['1', '', ''], ['2', '', '']] }] },
        notes: '광고는 수업 안에서만 나눈다. 수치는 가상 표시 값이다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '청소년 대상 광고 규제 찬반',
        method: '찬반 토론: 청소년 대상 광고 규제', tool: 'mindmap', minutes: 18,
        levels: { easy: '찬성·반대 가지에 근거 카드를 두 장씩 단다(바로 피드백).', base: '근거 카드 세 장씩을 찬성·반대·근거 약함 가지에 나누고, 쪽마다 가장 강한 근거와 반론을 짝짓는다.', challenge: '헷갈리는 카드가 더해진 판을 나누고, 활동지에 제도 대안 하나를 제안한다.' },
        activity: {
          title: '광고 규제 찬반 가지', tool: 'mindmap',
          teacher: '"\'청소년이 많이 보는 시간대에는 고열량 식품 광고를 제한해야 한다.\' 오늘은 내 편보다 근거의 힘을 따져요." 카드를 놓을 때마다 "이 근거는 누가 확인할 수 있나요?"라고 묻는다. "광고 때문에 사 먹는 사람은 없다"를 찬성이나 반대 칸에 놓는 학생에게 "그렇다면 회사는 왜 광고비를 쓸까요? 이 말은 확인된 근거일까요?"라고 되묻는다. 찬성·반대 모두에 강한 근거가 있으며, 규제 외에 표시 교육 같은 대안도 있다는 점을 짚는다.',
          task: '근거 카드를 찬성·반대·근거 약함 가지에 나누고 반론과 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성·반대·근거 약함 가지에 나누세요.', ['찬성', '반대', '근거 약함'], [
              ['청소년은 광고의 설득 장치에 많이 노출된다', '광고는 사고 싶은 마음을 만들도록 설계된다', '표시를 읽지 않고 광고만 보고 고르기 쉽다'],
              ['광고만 막아도 다른 경로로 접할 수 있다', '스스로 판단하는 힘을 기르는 교육이 먼저다', '판매자의 표현 자유와 영업에도 영향이 있다'],
              ['광고 때문에 사 먹는 사람은 없다', '맛없는 음식은 다 광고하지 말자', '내 친구는 광고를 안 본다'],
            ], { k: 2, hard: [['광고 모델이 또래라 따라 하고 싶어진다'], ['시간대만 바꾸면 온라인 광고로 옮겨 간다']], d: 0.3, opt: { topic: '청소년 대상 광고 규제' } }),
            MATCHQ('반대 쪽 근거마다 찬성 쪽이 낼 수 있는 반론을 짝지으세요.', [['광고만 막아도 다른 경로로 접할 수 있다', '그래서 온라인 광고까지 함께 다루자'], ['스스로 판단하는 교육이 먼저다', '교육과 규제를 함께 하면 효과가 크다'], ['판매자의 영업에도 영향이 있다', '시간대·대상을 좁혀 영향을 줄이자']], { k: 2, extra: ['어차피 다들 사 먹는다'], d: 0.35, opt: { topic: '근거와 반론' } }),
            PICKQ('찬반 어느 쪽이든 쓸 수 있는 제도 대안만 고르세요.', ['표시 읽기 교육을 늘린다', '광고에 표시 정보를 더 크게 넣게 한다'], ['광고를 본 학생을 벌준다', '모든 간식 판매를 금지한다'], { d: 0.35, opt: { basket: '제도 대안' }, more: { conclude: '규제냐 아니냐 둘 중 하나가 아니라, 교육·표시 강화 같은 대안을 함께 놓고 따질 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 쪽의 가장 강한 근거와, 반대쪽 근거에 대한 내 반론을 한 줄씩 쓰세요.' }] },
        notes: '광고 규제 제도의 세부(시간대·대상 식품 기준)는 수업 전 공식 안내에서 확인하고, 학생에게 수치를 외우게 하지 않는다(사람 확인 목록).',
      }),

      M({
        id: 'wrap.critique', type: 'wrap', title: '광고 비평 네 문장',
        method: '광고 비평 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("이 광고는 ~를 노린다. 표시에는 ~")을 보고 두 문장 이상 쓴다.', base: '네 문장(설득 장치·표시와의 차이·내 판단)을 쓰고 기준표 세 항목을 점검한다.', challenge: '광고를 옹호하는 쪽의 반론과 그에 대한 내 답을 넣고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"오늘 본 가상 광고 하나를 골라 비평가처럼 써 봐요. 좋다·싫다가 아니라, 무엇을 노렸고 표시와 무엇이 달랐는지예요." 쓰기 전에 기준표를 함께 읽는다. "그 음료 별로예요"처럼 취향만 쓴 학생에게 "어느 문구가, 표시의 어느 칸과 어긋났는지 적으면 다른 사람도 확인할 수 있을까요?"라고 묻는다. 음식이나 그 음식을 먹는 사람을 탓하는 글이 아니라 광고의 장치를 따지는 글이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 본 가상 광고 하나를 골라 설득 장치·표시와의 차이·내 판단을 네 문장으로 쓰세요.', minChars: 60, maxChars: 400, starter: '이 광고는 ~하는 마음을 노린다. 그런데 표시에는 ~', sample: '\'풀충전\' 광고는 시험이 불안한 마음을 노린다. 캔을 따는 순간 성적이 오르는 장면으로 효과를 부풀린다. 그런데 표시에는 집중력 근거가 없고 고카페인 함유만 적혀 있다. 나는 광고 문구보다 표시를 먼저 읽고 마시는 때를 정하겠다.' }, prompt: '광고 비평을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['광고의 설득 장치를 하나 이상 짚었다', '표시 정보와 어긋나는 점을 썼다', '내 판단을 근거와 함께 썼다'], mustInclude: [['표시', '성분']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['광고 문구는 팔려는 목적으로 고른 말이다', '\'건강\'이 들어간 광고 문구는 검증된 사실이다', '표시는 제품마다 같은 칸으로 성분을 알려 준다'], answer: 1, difficulty: 0.2, explain: '\'건강\'·\'자연\' 같은 문구는 검증을 뜻하지 않아요. 표시와 근거를 따로 확인해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '광고 비평',
          items: [
            { type: 'short', prompt: '고른 가상 광고의 설득 장치와 표시와의 차이를 쓰세요.' },
            { type: 'short', prompt: '이 광고를 옹호하는 쪽의 반론 하나와 그에 대한 내 답을 쓰세요.' },
          ],
          easy: { note: '"이 광고는 ~하는 마음을 노린다. 그런데 표시에는 ~가 적혀 있다."', items: [{ type: 'short', prompt: '광고가 노린 마음과 표시에서 본 것을 한 줄씩 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.check-list', type: 'wrap', title: '광고를 볼 때 점검표',
        method: '광고 판단 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 후보 가운데 표시·근거·빠진 정보 세 항목부터 함께 고른다.', base: '네 항목(표시·대상·근거·빠진 정보)만 골라 점검표를 완성한다.', challenge: '완성한 점검표를 친구에게 보낼 한 줄 형식으로 다듬어 활동지에 쓴다.' },
        wrap: {
          teacher: '"다음에 광고를 볼 때 머릿속에서 꺼낼 점검표를 만들어요. 넷이면 충분해요." 출구 1번에서 \'광고 모델이 좋아하는 사람인가\'처럼 그럴듯한 함정을 고르는 학생에게 "그 항목으로 성분을 알 수 있나요?"라고 묻는다. 점검표는 길수록 좋은 게 아니라 매번 꺼내 쓸 수 있어야 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '광고 판단 점검표', items: [{ id: 'label', text: '표시(성분·주의 문구)를 확인했다' }, { id: 'target', text: '광고가 누구를 겨냥하는지 따졌다' }, { id: 'proof', text: '효과에 확인할 근거가 있는지 보았다' }, { id: 'miss', text: '광고가 빠뜨린 정보를 찾았다' }, { id: 'model', text: '광고 모델이 좋아하는 사람인지 보았다' }, { id: 'many', text: '광고를 몇 번 봤는지 셌다' }] }, prompt: '광고를 볼 때 확인할 항목만 표시하세요.', target: { checklist: ['label', 'target', 'proof', 'miss'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'자연의 맛\' 문구를 본 뒤 가장 먼저 할 일을 고르세요.', options: ['문구를 믿고 건강한 음식이라고 정한다', '표시의 원재료·성분 칸을 확인한다', '광고가 예쁘면 산다'], answer: 1, difficulty: 0.15, explain: '감성 문구는 성분을 알려 주지 않아요. 표시 칸으로 확인해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '광고 판단 점검표',
          items: [
            { type: 'check', prompt: '광고를 볼 때 확인할 항목에 표시하세요.', options: ['표시(성분·주의 문구)', '겨냥하는 대상', '효과의 근거', '빠진 정보'] },
            { type: 'short', prompt: '이 점검표를 친구에게 보낼 한 줄 메시지로 다듬어 쓰세요.' },
          ],
        },
      }),
    );
  }

  /* 사람 확인(meal-plan):
   *   - [meal-plan 전체] 끼니를 거르지 않고 규칙적으로 먹기, 다섯 식품군을 고루 담기, 늦은 밤 많이 먹으면 잠들기에 영향을 줄 수 있다는 일반 설명 → 식품의약품안전처·보건복지부(한국인 식생활 지침)·질병관리청 국가건강정보포털
   *   - [intro.menu-chart] 배달·외식 메뉴의 열량·나트륨 정보를 확인할 수 있는 곳(가게·앱의 영양 정보 표시)이 있다는 언급 → 식품의약품안전처(외식 영양성분 표시 안내)
   *   - [activity.week-plan] 다섯 식품군 이름(곡류·고기·생선·달걀·콩류·채소·과일류·우유·유제품류·유지·당류)은 교구 기본 칸을 따랐다 → 보건복지부·한국영양학회 식품구성자전거
   *   - [activity.week-plan] 남은 음식은 식혀 냉장 보관하고 다음 끼니에 데워 먹는다 → 식품의약품안전처(식품 보관 안내)
   * 계획대로 못 한 것:
   *   - intro 의 levels(사건 넷/여섯, 메뉴 둘/넷)는 시연이 하나뿐이라 교사 진행 방식으로 적었다. menu-chart 는 열량 막대 하나만 시연하고 나트륨은 칠판·말로 견준다.
   *   - activity.week-plan: 문항 수가 단계마다 같아 '사흘/이레'는 짝 문항의 쌍 수(3쌍/7쌍)로, '간식·물'은 모든 단계의 마지막 문항으로 두고 도전은 카드 섞기·활동지 칸으로 했다.
   *   - activity.meal-budget: 예산 판은 '배분 비율'이 아니라 '예산 안에서 항목 고르기'다 — 한 달 식비 항목(가상 금액)을 고르는 것으로 배분을 나타냈다. '항목 셋/넷'은 고르는 항목 수(count)로 했다.
   *   - activity.meal-clock: 시계는 한 시각만 나타내므로 일과마다 끼니 시각을 한 문항씩 두고, 모든 단계에서 맞도록 목표 시각을 30분 단위로 잡았다.
   *   - wrap.reflect: 학생 자신의 3년 식생활을 채점하지 않도록 가상 인물 예준의 성찰 카드를 가지에 나누게 하고, 내 것은 걷지 않는 활동지에만 쓴다.
   */
  // ======================================================================================================
  // 4. 나의 식사 계획 — 시험 기간·배달·외식 (12학년)
  // ======================================================================================================
  {
    const M = MOD('meal-plan', [12]);
    const DAY = ['아침 7시: 늦게 일어나 아침을 거르고 뛰어 나간다', '낮 12시 30분: 급식을 10분 만에 반만 먹는다', '오후 4시 30분: 출출해서 단 음료와 과자를 산다', '저녁 6시: 학원 가는 길에 삼각김밥 하나로 저녁을 대신한다', '밤 10시: 학원이 끝나니 배가 몹시 고프다', '밤 11시 30분: 야식을 많이 먹고 늦게 잠든다'];
    // 밤 11시 야식 배달 — 함께 어울리면서 양·시각·다음 날을 따지는 축
    const LATE = { text: '시험 기간, 밤 11시 독서실 휴게실. 친구들이 "배고픈데 큰 세트 하나 시켜서 나눠 먹자"고 한다. 예준이는 내일 1교시에 시험이 있다.', who: '예준', motif: 'moon', choices: [
      { id: 'order', text: '좋다고 하고 함께 큰 세트를 시킨다', result: '밤 11시 40분, 음식이 와서 다 같이 먹는다. 양이 많아 꽤 남는다.', impact: [{ who: '친구들', text: '함께 쉬는 시간을 즐긴다', tone: 1 }, { who: '예준', text: '배가 너무 불러 잠이 늦어질 것 같다', tone: 0 }],
        next: { text: '남은 음식을 두고 친구가 "아까우니까 다 먹고 가자"고 한다.', choices: [
          { id: 'save', text: '남은 것은 나눠 담아 냉장 보관하자고 한다', result: '각자 조금씩 싸 들고 집에 간다.', impact: [{ who: '예준', text: '더 먹지 않고 12시 전에 눕는다', tone: 1 }],
            next: { text: '다음 날 아침, 예준이는 시험 전에 무엇을 먹을지 고른다.', choices: [
              { id: 'eat', text: '우유와 바나나로 간단히 아침을 먹는다', result: '1교시 시험 중에도 배고프지 않고 차분하다.', impact: [{ who: '예준', text: '아침 끼니를 지킨다', tone: 1 }], ending: '전날 밤 양을 조절하니 아침도 챙길 수 있었다.' },
              { id: 'leftover', text: '어젯밤 남은 음식을 데우지 않고 급히 먹는다', result: '속이 더부룩해 시험 내내 불편하다.', impact: [{ who: '예준', text: '몸이 불편하다', tone: -1 }], ending: '남은 음식은 보관만큼 데워 먹는 방법도 중요하다.' }] } },
          { id: 'finish', text: '아까워서 남은 것을 다 먹는다', result: '새벽 1시가 넘어서야 잠든다.', impact: [{ who: '예준', text: '다음 날 아침 속이 더부룩하고 졸리다', tone: -1 }], ending: '버리기 아까운 마음을 내 몸이 대신 갚게 된다.' }] } },
      { id: 'light', text: '같이 앉되 조금만 먹겠다고 말한다', result: '친구 하나가 "에이, 하나만 더 먹어"라며 그릇을 밀어 준다.', impact: [{ who: '예준', text: '어울리면서 내 기준을 말한다', tone: 1 }],
        next: { text: '친구들이 계속 더 먹으라고 권한다.', choices: [
          { id: 'explain', text: '내일 1교시 시험이라 이만 먹겠다고 웃으며 말한다', result: '친구들이 "그래, 내일 잘 봐"라며 넘어간다.', impact: [{ who: '친구들', text: '예준이의 사정을 이해한다', tone: 1 }],
            next: { text: '집에 와 보니 12시 10분, 아직 조금 출출하다.', choices: [
              { id: 'water', text: '물 한 잔을 마시고 자고, 아침을 챙겨 먹는다', result: '푹 자고 일어나 아침을 먹고 시험을 본다.', impact: [{ who: '예준', text: '잠과 아침 끼니를 함께 지킨다', tone: 1 }], ending: '함께 어울리는 것과 내 계획을 지키는 것은 같이 할 수 있다.' },
              { id: 'ramen', text: '라면을 하나 더 끓여 먹고 잔다', result: '늦게 잠들어 아침에 일어나기 힘들다.', impact: [{ who: '예준', text: '아침을 또 거른다', tone: -1 }], ending: '밤늦게 다시 먹으면 다음 날 첫 끼가 밀린다.' }] } },
          { id: 'cave', text: '분위기를 깰까 봐 권하는 대로 다 먹는다', result: '배가 불러 늦게까지 잠이 오지 않는다.', impact: [{ who: '예준', text: '다음 날 컨디션이 흔들린다', tone: -1 }], ending: '권유에 끌려 먹으면 양을 정한 사람이 내가 아니게 된다.' }] } },
      { id: 'pass', text: '아무 말 없이 먼저 집에 간다', result: '친구들이 "왜 그냥 갔어?"라고 메시지를 보낸다.', impact: [{ who: '친구들', text: '조금 서운해한다', tone: -1 }, { who: '예준', text: '일찍 잔다', tone: 1 }], ending: '내 기준을 지키더라도 이유를 말하면 관계도 함께 지킬 수 있다.' }] };
    const LATE_R = [{ id: 'next', text: '다음 날 일정(시험·아침)을 생각해 양과 시각을 정한다' }, { id: 'say', text: '함께 어울리면서도 내 기준을 말할 수 있다' }, { id: 'once', text: '바쁠 때는 한 끼쯤 대충 먹어도 아무 상관없다', why: '한 끼가 밀리면 잠과 다음 끼니까지 이어서 흔들려요.' }, { id: 'all', text: '친구들이 다 먹으니 나도 같이 다 먹어야 한다', why: '함께 있는 것과 같은 양을 먹는 것은 달라요.' }];
    const KCAL = [['가 비빔밥', 6], ['나 김치찌개 정식', 7], ['다 햄버거 세트', 9], ['라 짜장면', 8]];
    // 한 달 식비(가상 금액, 실제 물가 아님)
    const MONEY = [{ id: 'shop4', text: '장보기 한 달 4번', price: 120000, motif: 'basket' }, { id: 'fruit', text: '과일·우유 장보기 더하기', price: 30000, motif: 'basket' }, { id: 'deliv8', text: '배달 한 달 8번', price: 160000, motif: 'shop' }, { id: 'deliv2', text: '배달 한 달 2번', price: 40000, motif: 'shop' }, { id: 'out2', text: '친구와 외식 한 달 2번', price: 30000, motif: 'shop' }, { id: 'cvs', text: '편의점 간식 매일', price: 60000, motif: 'coin' }, { id: 'cvs2', text: '편의점 간식 주 2번', price: 16000, motif: 'coin' }];
    const MONEY2 = [...MONEY, { id: 'box', text: '도시락 재료 더하기(점심 몫)', price: 50000, motif: 'basket' }, { id: 'lunch', text: '점심 매일 사 먹기', price: 160000, motif: 'shop' }];

    MODS.push(
      M({
        id: 'intro.day-timeline', type: 'intro', title: '수험생 예준의 하루 식사',
        method: '고3의 하루 식사 흐름', tool: 'timeline', minutes: 7,
        levels: { easy: '사건 네 장(아침·급식·학원 가는 길·밤)만 함께 놓아 본다.', base: '사건 여섯 장을 시간 차례로 놓고, 끼니가 밀리기 시작한 지점을 말한다.', challenge: '여섯 장을 놓은 뒤 문제가 되는 지점마다 대안 한 가지를 활동지 여백에 붙인다.' },
        intro: {
          teacher: '"가상 수험생 예준이의 어느 하루예요. 하나하나는 흔한 장면인데, 이어 놓으면 무엇이 보일까요?" 시연 단추로 사건이 시간 차례로 놓이는 모습을 보이고, 두세 명에게 \'어디서부터 꼬였는지\' 묻는다. "밤에 많이 먹은 게 문제죠"라는 대답이 나오면 "밤에 몹시 배고팠던 까닭은 낮의 어느 장면에서 시작됐을까요?"라고 되묻는다. 특정 음식이 아니라 끼니의 흐름이 문제를 만든다는 점을 짚고, 학생 자신의 하루는 발표시키지 않는다.',
          student: '가상 수험생 예준이의 하루 식사 장면을 시간 차례로 놓고, 끼니의 흐름이 꼬이기 시작한 지점을 찾아보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['아침', '밤'], slots: 6, cards: [DAY[3], DAY[0], DAY[5], DAY[1], DAY[4], DAY[2]] }, sequence: [{ order: DAY }] },
          art: { draw: 'a paper timeline from sunrise to night with small cut-paper scenes: an empty breakfast plate, a school lunch tray, a convenience store snack, a rice ball on the way to an academy, a late-night bowl under the moon', banner: '끼니는 이어져 있어요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '예준은 가상 인물이다. 학생에게 자기 하루 식사나 끼니 거름을 묻거나 발표시키지 않는다. 특정 음식을 나쁜 음식으로 부르지 않는다.',
      }),
      M({
        id: 'intro.menu-chart', type: 'intro', title: '배달 메뉴 정보 그래프',
        method: '배달 메뉴 정보 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '두 메뉴(가·다)의 막대만 함께 견준다.', base: '네 메뉴의 막대를 읽고, 오늘 다른 끼니와 어울려 고를 메뉴를 말한다.', challenge: '1인분 양이 메뉴마다 다르다는 점을 짚고 같은 양 기준으로 다시 견주면 어떻게 될지 말한다.' },
        intro: {
          teacher: '"배달 앱의 가상 메뉴 정보예요. 막대는 1인분 열량의 상대 크기이고, 실제 가게 수치가 아니에요." 시연 단추로 가장 큰 막대를 고르는 모습을 보인 뒤 "그럼 다 햄버거 세트는 먹으면 안 되는 음식일까요?"라고 묻는다. "열량 높은 건 나쁜 음식이죠"라는 말이 나오면 "점심을 거른 날과 급식을 든든히 먹은 날에 같은 답일까요? 1인분 양도 메뉴마다 같을까요?"라고 되묻는다. 정보는 음식을 가르는 잣대가 아니라 하루 식사를 맞추는 도구라는 점을 짚는다.',
          student: '가상 배달 메뉴 정보 그래프를 읽고, 오늘 하루 다른 끼니와 어울리게 고를 메뉴를 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '1인분 열량(가상 메뉴 정보, 상대 크기)', yLabel: '상대 크기', xLabel: '메뉴', data: KCAL, question: '1인분 열량 막대가 가장 큰 메뉴는?', choices: KCAL.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper smartphone showing a delivery menu with four dishes as paper bar blocks of different heights, a small magnifying glass over a nutrition info tab', banner: '메뉴 정보도 읽어요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '수치는 가상 상대 크기다. 메뉴를 좋은 음식·나쁜 음식으로 나누지 않고 하루 식사 안에서 조합을 따진다.',
      }),

      M({
        id: 'activity.delivery-dilemma', type: 'activity', title: '밤 11시 야식 배달 갈림길',
        method: '친구들과 배달 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 두 번까지 가 보고 근거 카드를 고른다.', base: '갈림길 세 번(다음 날 아침)까지 결과를 따라가고 근거 카드를 고른다.', challenge: '세 번 끝까지 간 뒤 되돌아가 다른 끝 길을 하나 더 가 보고 견준다.' },
        activity: {
          title: '야식 배달 앞의 선택', tool: 'dilemma',
          teacher: '"밤 11시, 친구들이 큰 세트를 시키자고 해요. 예준이는 내일 1교시가 시험이에요. 먹느냐 안 먹느냐만 있는 게 아니라, 얼마나·언제까지·내일 아침은 어떻게까지 이어져요." 고를 때마다 영향 칸의 \'누구에게\'를 소리 내어 읽게 한다. "한 끼쯤 대충 먹어도 상관없잖아요"라는 학생에게 \'남은 것을 다 먹는다\' 길의 다음 날 아침을 보이며 "이 한 끼가 다음 끼니에 어떻게 이어졌나요?"라고 묻는다. 아무 말 없이 먼저 가는 길도 보여 주고, 기준을 지키면서 관계도 지키는 말하기를 짚는다.',
          task: '예준이가 되어 야식 배달 앞에서 고르고, 다음 날까지 결과를 따라가 근거를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL3('예준이가 친구들과 어울리면서 다음 날도 챙기는 길로 끝까지 가 보고, 그 근거를 고르세요.', LATE, [['light', 'explain', 'water'], ['order', 'save', 'eat']], LATE_R, ['next', 'say'], { d: 0.35, opt: { title: '밤 11시 독서실 휴게실' } }),
            EXPLOREQ('같은 장면에서 서로 다른 끝 길을 두 개 이상 가 보고, 견주어 본 것을 점검하세요.', LATE, LATE_R, ['양을 정하지 않은 길의 다음 날을 보았다', '내 기준을 말한 길의 다음 날을 보았다', '친구들에게 간 영향도 견주었다'], { d: 0.35 }),
            DIL2('시험이 끝난 금요일 밤 장면에서 즐기면서도 다음 날을 챙기는 길을 고르고 근거를 고르세요.', { text: '시험이 끝난 금요일 밤 10시, 친구들이 "오늘은 마음껏 시키자"며 메뉴 셋을 고르자고 한다. 예준이는 내일 아침 동아리 봉사가 있다.', who: '예준', motif: 'moon', choices: [
              { id: 'share', text: '메뉴 둘을 나눠 먹고 남으면 싸 가자고 제안한다', result: '친구들이 좋다며 하나를 덜 시킨다.', impact: [{ who: '친구들', text: '함께 즐기고 남는 음식도 줄어든다', tone: 1 }],
                next: { text: '먹다 보니 밤 11시 반이 됐다. 한 친구가 하나를 더 시키자고 한다.', choices: [
                  { id: 'stop', text: '"나는 이만 먹고 물 마실게, 내일 봉사가 있어"라고 말한다', result: '친구들이 웃으며 남은 것을 나눠 싼다.', impact: [{ who: '예준', text: '다음 날 아침이 가볍다', tone: 1 }], ending: '즐기는 자리에서도 다음 날 일정을 말하면 내 기준을 지킬 수 있다.' },
                  { id: 'more', text: '분위기를 깨기 싫어 하나 더 시킨다', result: '자정이 넘어 배가 너무 불러 잠들기 어렵다.', impact: [{ who: '예준', text: '봉사하는 아침에 몸이 무겁다', tone: -1 }], ending: '분위기에 맞춘 한 번이 다음 날 아침까지 이어진다.' }] } },
              { id: 'three', text: '친구들 말대로 메뉴 셋을 모두 시킨다', result: '음식이 너무 많아 반 가까이 남는다.', impact: [{ who: '친구들', text: '남은 음식이 버려질 처지다', tone: -1 }],
                next: { text: '남은 음식 앞에서 친구들이 "버리자"고 한다.', choices: [
                  { id: 'pack', text: '나눠 싸 가서 내일 점심으로 먹자고 한다', result: '남은 음식을 나눠 냉장고에 넣는다.', impact: [{ who: '친구들', text: '버리는 음식이 줄어든다', tone: 0 }], ending: '많이 시켰어도 남은 것을 다음 끼니로 이으면 덜 버린다.' },
                  { id: 'trash', text: '그대로 버린다', result: '음식물 쓰레기 봉투가 가득 찬다.', impact: [{ who: '모두', text: '돈과 음식을 함께 버린다', tone: -1 }], ending: '양을 정하지 않은 주문은 버리는 음식으로 끝나기 쉽다.' }] } }] }, [['share', 'stop']], LATE_R, ['next', 'say'], { d: 0.35, opt: { title: '시험 끝난 금요일 밤' }, more: { conclude: '고마움은 나누고, 양과 시각은 내 기준으로 — 함께 즐기면서도 다음 날을 챙길 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '늦은 밤 함께 먹자는 권유를 받았을 때 쓸 수 있는 내 말을 한 문장으로 쓰세요.' }] },
        notes: '예준은 가상 인물이다. 학생의 실제 야식 습관을 묻지 않는다. 배달 음식 자체를 나쁘게 말하지 않고 양·시각·다음 끼니를 따진다.',
      }),
      M({
        id: 'activity.week-plan', type: 'activity', title: '시험 기간 한 주 저녁 식단',
        method: '시험 기간 한 주 식단', tool: 'kitchen', minutes: 18,
        levels: { easy: '도시락 재료 다섯 장을 식품군 칸에 나누고, 요일·메뉴 짝은 사흘(3쌍)만 맞춘다(바로 피드백).', base: '재료 일곱 장을 나누고 이레(7쌍) 저녁 메뉴를 일정에 맞게 짝짓는다.', challenge: '카드가 섞여 나오고, 활동지에 하루 간식·물 마시기 칸까지 채운다.' },
        activity: {
          title: '식품군으로 맞추는 한 주', tool: 'kitchen',
          teacher: '"시험 기간에는 끼니가 가장 먼저 무너져요. 가상 학생 예준이의 한 주 저녁을 일정에 맞춰 짜 봐요." 먼저 도시락 한 끼를 식품군 칸에 나누게 한다. 채소·과일류 칸이 비어 있는 학생에게 "이 도시락에서 빠진 칸은 어디서 채울 수 있을까요?"라고 묻는다. "바쁜 날은 아무거나 먹어도 돼요"라는 말이 나오면 "학원이 늦게 끝나는 날일수록 미리 정해 둔 메뉴가 왜 필요할까요?"라고 되묻는다. 특정 음식을 빼라는 것이 아니라 칸을 고루 채우는 것이 목표라는 점을 짚는다.',
          task: '예준이의 시험 기간 저녁을 식품군 칸과 요일 일정에 맞춰 짜요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '예준이가 시험 기간에 싸 갈 저녁 도시락 재료를 식품군 칸에 나누세요.', toolOptions: { cards: ['밥', '달걀', '두부', '시금치', '귤', '우유', '참기름'] }, target: { sort: { 곡류: ['밥'], 고기: ['달걀', '두부'], 채소: ['시금치', '귤'], 우유: ['우유'], 유지: ['참기름'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '예준이가 싸 갈 저녁 도시락 재료를 식품군 칸에 나누세요(카드 5장).', toolOptions: { cards: ['밥', '달걀', '시금치', '우유', '참기름'] }, target: { sort: { 곡류: ['밥'], 고기: ['달걀'], 채소: ['시금치'], 우유: ['우유'], 유지: ['참기름'] } } } } },
            MATCHQ('예준이의 한 주 일정마다 알맞은 저녁 메뉴를 짝지으세요.', [['월: 학원 뒤 밤 9시 귀가', '전날 싸 둔 도시락'], ['화: 6시 저녁 시간 넉넉', '집에서 밥·국·나물'], ['수: 자습실 저녁 30분', '급식실 석식'], ['목: 시험 전날', '익숙한 메뉴로 평소 양'], ['금: 시험 끝난 날', '친구와 외식 한 번'], ['토: 장보는 날', '장 본 채소로 볶음밥'], ['일: 다음 주 준비', '남은 재료로 반찬 만들기']], { k: 3, extra: ['편의점 단 음료로 한 끼 대신'], d: 0.3, opt: { groups: false, autoMotif: false } }),
            PICKQ('도시락과 저녁으로 비기 쉬운 칸을 채울 간식·마실 것만 고르세요.', ['우유', '바나나', '물'], ['에너지 음료', '단 음료 두 병', '과자만 한 봉지'], { d: 0.3, opt: { basket: '빈 칸을 채울 간식', groups: false }, more: { conclude: '간식도 한 끼처럼 비어 있는 칸을 채우는 데 쓰면 하루가 고르게 맞춰져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '예준이의 시험 기간 하루에 넣을 간식과 물 마시기 계획을 쓰세요.', columns: ['때', '간식', '마실 것'], cells: [['오후 쉬는 시간', '', ''], ['학원 가기 전', '', ''], ['자기 전', '', '']] }] },
        notes: '식품군 칸 이름은 교구 기본 칸이다. 학생 자신의 식단을 걷거나 채점하지 않는다. 다이어트·특정 식품 빼기를 권하지 않는다.',
      }),
      M({
        id: 'activity.meal-budget', type: 'activity', title: '한 달 식비 예산 배분',
        method: '외식·배달 예산 배분', tool: 'economy', minutes: 17,
        levels: { easy: '가상 예산 20만 원 안에서 장보기를 넣고 항목 셋을 고른다.', base: '같은 예산에서 장보기·과일우유를 넣고 항목 넷을 고른다.', challenge: '진학·취업 뒤처럼 급식이 없는 한 달 예산(가상 30만 원)으로 바꿔 점심 몫까지 넣어 고른다.' },
        activity: {
          title: '가상 식비로 한 달 짜기', tool: 'economy',
          teacher: '"졸업 뒤 한 달 식비를 스스로 쓴다고 해 봐요. 금액은 수업용 가상 값이에요." 예산 막대가 차오르는 것을 보며 고르게 한다. "배달이 제일 편하니까 배달만 넣으면 돼요"라는 학생에게 \'배달 한 달 8번\' 하나로 막대가 얼마나 차는지 보이며 "나머지 끼니는 무엇으로 채울까요?"라고 묻는다. 외식·배달을 빼자는 것이 아니라 끼니 수와 돈을 함께 맞추는 것이 계획이라는 점을 짚는다. 학생 가정의 실제 식비나 용돈은 묻지 않는다.',
          task: '가상 한 달 식비 예산 안에서 장보기·외식·배달·간식 항목을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 예산 20만 원. 장보기 한 달 4번은 꼭 넣고, 예산 안에서 항목 셋을 고르세요.', toolOptions: { mode: 'budget', budget: 200000, items: MONEY }, target: { budget: { must: ['shop4'], count: 3 } }, difficulty: 0.25 },
            { prompt: '같은 예산 20만 원. 장보기 4번과 과일·우유를 꼭 넣고, 배달은 2번짜리로만 해서 항목 넷을 고르세요.', toolOptions: { mode: 'budget', budget: 200000, items: MONEY }, target: { budget: { must: ['shop4', 'fruit'], not: ['deliv8'], count: 4 } }, difficulty: 0.35,
              levels: { easy: { prompt: '같은 예산 20만 원. 장보기 4번과 과일·우유를 꼭 넣고, 배달 8번은 빼서 항목 셋을 고르세요.', target: { budget: { must: ['shop4', 'fruit'], not: ['deliv8'], count: 3 } } } } },
            { prompt: '진학·취업 뒤 급식이 없는 한 달(가상 30만 원). 장보기 4번과 점심 몫을 꼭 넣되 점심 매일 사 먹기는 빼고 항목 넷을 고르세요.', toolOptions: { mode: 'budget', budget: 300000, items: MONEY2 }, target: { budget: { must: ['shop4', 'box'], not: ['lunch'], count: 4 } }, difficulty: 0.4, conclude: '급식이 사라지면 점심 몫이 새로 생겨요. 끼니 수를 먼저 세고, 그다음 외식·배달을 넣을 자리를 찾아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 가상 한 달 식비 조합과, 그렇게 고른 근거를 한 문장으로 쓰세요.' }] },
        notes: '금액은 모두 수업용 가상 값이며 실제 물가가 아니다. 학생 가정의 형편·용돈·식비를 묻지 않는다.',
      }),
      M({
        id: 'activity.meal-clock', type: 'activity', title: '세 끼 시각 설계',
        method: '규칙적 식사 시각 설계', tool: 'clock', minutes: 18,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다.', base: '10분 단위로 나타내고 평소·시험 기간 두 일과의 차이를 짝에게 말한다.', challenge: '5분 단위·작은 눈금 없이 나타내고, 야간 근무 일과에도 같은 방법을 적용한다.' },
        activity: {
          title: '일과에 맞춘 끼니 시각', tool: 'clock',
          teacher: '"규칙적으로 먹는다는 건 매일 같은 시각이 아니라, 내 일과 안에 끼니 자리를 미리 정해 두는 거예요." 가상 인물 예준이의 일과 조건을 읽고 시계로 나타내게 한다. "시험 기간엔 시간이 없으니 저녁을 건너뛰어도 돼요"라는 학생에게 "학원이 6시에 시작하면 저녁 자리는 언제로 옮길 수 있을까요?"라고 묻는다. 마지막 문항에서 일하는 시간이 바뀌어도 \'일과에서 거꾸로 세어 끼니 자리를 정하는 방법\'은 같다는 점을 짚는다.',
          task: '예준이의 일과 조건을 읽고 끼니 시각을 시계에 나타내요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 10 }, challenge: { minuteStep: 5, showMinuteMarks: false } },
          items: [
            { prompt: '평소 예준이는 아침 7시 30분에 집을 나서고, 나서기 30분 전에 아침을 먹어요. 아침 시각을 나타내세요.', toolOptions: {}, target: { h: 7, m: 0 }, difficulty: 0.15 },
            { prompt: '평소 저녁은 학교가 끝나고 집에 온 뒤 6시 30분이에요. 저녁 시각을 나타내세요.', toolOptions: {}, target: { h: 6, m: 30 }, difficulty: 0.15 },
            { prompt: '시험 기간에는 학원이 6시에 시작해요. 학원 가기 30분 전에 저녁을 먹는다면 저녁 시각을 나타내세요.', toolOptions: {}, target: { h: 5, m: 30 }, difficulty: 0.3 },
            { prompt: '졸업 뒤 밤 10시에 시작하는 가상 야간 근무 일과예요. 근무 시작 1시간 30분 전에 든든한 끼니를 먹는다면 그 시각을 나타내세요.', toolOptions: {}, target: { h: 8, m: 30 }, difficulty: 0.4, conclude: '일과가 바뀌어도 시작 시각에서 거꾸로 세어 끼니 자리를 먼저 정하면 끼니가 밀리지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '예준이의 평소와 시험 기간 끼니 시각을 견주어 쓰세요.', columns: ['끼니', '평소', '시험 기간'], cells: [['아침', '', ''], ['저녁', '', ''], ['간식', '', '']] }] },
        notes: '끼니 시각은 가상 인물의 일과 조건에서 계산한 연습 값이며 의학 기준이 아니다.',
      }),

      M({
        id: 'wrap.plan-doc', type: 'wrap', title: '나의 상황별 식사 원칙',
        method: '나의 식사 계획서', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("평소에는 ~. 시험 기간에는 ~. 외식할 때는 ~")을 보고 세 문장을 쓴다.', base: '평소·시험·외식 상황별 원칙 다섯 문장을 쓰고 기준표 네 항목을 점검한다.', challenge: '1년 뒤 계획을 다시 점검할 규칙을 넣고 기준 하나를 더 점검한다.' },
        wrap: {
          teacher: '"졸업을 앞두고 나만의 식사 원칙을 남겨 봐요. 지금 무엇을 먹는지가 아니라, 앞으로 상황마다 어떻게 할지예요." 쓰기 전에 기준표를 함께 읽는다. "건강하게 먹겠다"처럼 막연한 문장에는 "언제, 무엇을, 어떻게인지 적으면 지켰는지 내가 확인할 수 있을까요?"라고 묻는다. 남과 견주거나 몸을 평가하는 글이 아니라 내 일과에 맞춘 원칙이라는 점을 짚는다. 쓴 글은 걷어 채점하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '평소·시험 기간·외식(배달) 상황별 나의 식사 원칙을 다섯 문장으로 쓰세요.', minChars: 70, maxChars: 450, starter: '평소에는 ~. 시험 기간에는 ~. 외식할 때는 ~', sample: '평소에는 아침을 거르지 않도록 전날 우유와 과일을 챙겨 둔다. 시험 기간에는 학원 가기 30분 전에 저녁 자리를 먼저 정한다. 배달을 시킬 때는 메뉴 정보를 보고 하루 다른 끼니와 맞춘다. 남은 음식은 나눠 담아 다음 끼니에 데워 먹는다. 바쁜 날을 대비해 간단한 도시락 메뉴 두 가지를 정해 둔다.' }, prompt: '식사 원칙을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['상황마다 구체적인 행동을 썼다', '그 원칙의 영양 근거(식품군·끼니)를 썼다', '지키기 어려울 때의 대안을 썼다', '지켰는지 점검할 방법을 썼다'], mustInclude: [['시험', '평소', '외식', '배달']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 배운 것과 가장 가까운 식사 계획을 고르세요.', options: ['바쁠 때는 끼니를 건너뛰고 밤에 몰아 먹는다', '일과에서 끼니 자리를 먼저 정하고 식품군을 고루 맞춘다', '열량이 높은 메뉴는 무조건 먹지 않는다'], answer: 1, difficulty: 0.15, explain: '특정 음식을 빼기보다, 끼니 자리와 식품군을 먼저 맞추는 계획이 지키기 쉬워요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 식사 계획서',
          items: [
            { type: 'short', prompt: '평소·시험 기간·외식(배달) 상황별 나의 식사 원칙을 쓰세요.' },
            { type: 'short', prompt: '1년 뒤 이 계획을 다시 점검할 때 확인할 것 두 가지를 쓰세요.' },
          ],
          easy: { note: '"평소에는 ~. 시험 기간에는 ~. 외식할 때는 ~."', items: [{ type: 'short', prompt: '세 상황마다 원칙을 한 문장씩 쓰세요.' }] },
        },
        notes: '쓴 글은 학생이 보관하고 걷지 않는다. 학생의 실제 식습관·몸 상태를 묻지 않는다.',
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '고교 식생활 돌아보기',
        method: '고교 식생활 성찰', tool: 'mindmap', minutes: 7,
        levels: { easy: '가상 졸업생 예준의 카드를 \'지킨 것\'·\'바꿀 것\' 두 가지에 단다.', base: '세 가지(지킨 것·바꿀 것·자립 뒤 계획)에 카드를 단다.', challenge: '후배에게 줄 조언 한 줄을 출구 질문에 붙인다.' },
        wrap: {
          teacher: '"졸업을 앞둔 가상 학생 예준이가 3년 식생활을 돌아본 카드예요. 지킨 것, 바꿀 것, 자립 뒤 계획으로 나눠 봐요." 마인드맵을 함께 채운 뒤 출구 질문으로 넘어간다. "바꿀 것이 많으면 실패한 거예요?"라는 말에는 "바꿀 것을 아는 것이 계획의 시작이에요"라고 답한다. 내 3년은 걷지 않는 활동지에만 적게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '예준의 고교 식생활', slots: ['지킨 것', '바꿀 것', '자립 뒤 계획'], cards: ['급식을 끝까지 먹었다', '물병을 챙겼다', '아침을 자주 걸렀다', '밤늦게 몰아 먹었다', '장보기 목록을 쓴다', '도시락 메뉴 두 가지를 정해 둔다'] }, prompt: '예준이의 카드를 마인드맵 가지에 다세요.', target: { sort: { '지킨 것': ['급식을 끝까지 먹었다', '물병을 챙겼다'], '바꿀 것': ['아침을 자주 걸렀다', '밤늦게 몰아 먹었다'], '자립 뒤 계획': ['장보기 목록을 쓴다', '도시락 메뉴 두 가지를 정해 둔다'] } }, difficulty: 0.2 },
            { type: 'short', prompt: '고등학교에 막 들어온 후배에게 줄 식생활 조언을 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '고교 식생활 돌아보기',
          items: [
            { type: 'table', prompt: '(혼자 보기 — 걷지 않아요) 나의 고교 식생활을 돌아보세요.', columns: ['지킨 것', '바꿀 것', '자립 뒤 계획'], cells: [['', '', '']] },
            { type: 'short', prompt: '후배에게 줄 식생활 조언 한 가지를 쓰세요.' },
          ],
        },
        notes: '예준은 가상 인물이다. 활동지 첫 칸은 학생 혼자 보는 칸이라 걷거나 발표시키지 않는다.',
      }),
    );
  }


  PaperLessons.registerModules(MODS);
})();
