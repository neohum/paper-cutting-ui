/* 창체 안전교육 응급처치 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-firstaid 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 응급처치 네 항목
 *   (응급처치의 상황·의미·중요성·신고·조치 방법 / 심폐소생술 및 자동제세동기의 사용법 / 상처의 종류와 응급처치 / 일상생활 속 응급처치) + 7대 표준안 응급처치 분류.
 * 심폐소생술·AED 문구·차례·수치는 all_market 시뮬레이션 templates/lesson-materials/visual-series/src/cpr-aed/story.md·CHECK.md 와 같다:
 *   현장 안전 → 반응 확인 → 사람을 콕 집어 119·AED 부탁 → 호흡 확인 → 가슴 압박(가슴 정중앙, 깊이 약 5cm, 분당 100~120회, 누른 뒤 다 올라오게)
 *   → AED(전원 → 패드 두 장 → 분석 중 떨어지기 → 충격 필요 안내 때만 버튼 → 바로 압박 다시) → 구급대가 올 때까지 교대하며 이어 가기.
 *   화면에 쓰는 숫자는 '약 5cm'와 '분당 100~120회'뿐이다. 교대 주기·AED 재분석 간격은 숫자 없이 '공식 지침'으로만 쓴다.
 * 부상·피 묘사를 하지 않는다(그림은 연습용 마네킹·종이 몸). 수치 자료는 모두 '예시 자료(실제 통계 아님)'이고 지도는 가상이다. 인물은 가명이다.
 *
 * 사람 확인: (근거 파일에 세부 수칙이 없어 일반 응급처치 교육 자료의 내용으로 쓴 문장 — 공식 안내처 확인 필요)
 *   [질병관리청·대한심폐소생협회 「2025년 한국 심폐소생술 가이드라인」 원문]
 *   - team-cpr 전체: 위 cpr-aed CHECK.md '사람 확인 필요' 1~7(깊이·빠르기 원문, 교대 주기, 재분석 간격, 패드 자리 문구, 분석 중 떨어지는 까닭,
 *     '헐떡이듯 이상하게 쉬면 심정지로 본다', 학생의 역할)이 그대로 걸린다.
 *   - team-cpr.activity.team-timer: 'AED 패드를 붙이는 동안 압박하는 사람은 그대로 이어 누른다', '교대할 사람은 옆에서 준비했다가 구령에 맞춰 바로 이어 누른다'.
 *   - team-cpr.activity.role-map: 두 사람뿐일 때 '한 사람은 바로 압박, 다른 사람은 스피커폰으로 119 신고 뒤 AED를 가져오고 교대'라는 배치.
 *   - team-cpr.activity.aed-pads: '가슴이 젖어 있으면 패드를 붙이기 전에 물기를 닦는다', '충격이 필요 없다는 안내면 버튼 없이 바로 압박을 다시 한다'.
 *   - team-cpr.intro.bystander-data: '목격자가 바로 압박하고 AED를 쓰면 결과가 나아진다'는 방향(그래프 값은 예시 자료 — 실제 통계는 질병관리청 급성심장정지조사로 교사가 바꿔 넣는다).
 *   - team-cpr.wrap.hesitate: '119 상담요원이 전화로 압박 방법을 안내한다'(CHECK.md 의 구급상황요원 지도 제안). 선의의 응급처치 면책 같은 법 조항은 쓰지 않았다.
 *   [질병관리청·소방청 응급처치 안내, 대한적십자사 응급처치 교재]
 *   - situational.*(기도폐쇄): 신호(목을 움켜쥠·말과 기침을 못 함·숨소리가 이상함), '기침할 수 있으면 기침을 계속하게 한다', '기침도 말도 못 하면 119와 등 두드리기·배 밀어내기',
 *     '의식을 잃으면 눕히고 119에 알린 뒤 가슴 압박', '물을 먹여 넘기게 하지 않는다'. 등 두드리기·배 밀어내기의 횟수와 손 모양은 쓰지 않았다(교사가 공식 지침으로 시연).
 *   - situational.*(화상): '흐르는 시원한 물로 충분히 식힌다'(시간 수치 없음), '물집을 터뜨리지 않는다', '얼음을 바로 대지 않는다', '된장·치약을 바르지 않는다',
 *     '붓기 전에 반지·시계를 뺀다', '깨끗한 천으로 덮는다', '넓은 화상·얼굴·약품·전기 화상은 119'.
 *   - situational.*(더위로 생긴 이상): 신호(어지러움·두통·근육 경련·몸이 뜨거움·말이 어눌함·의식이 흐림), '그늘·시원한 곳으로 옮기고 옷을 느슨하게 하고 몸을 식힌다',
 *     '의식이 있고 삼킬 수 있을 때만 물을 준다', '말이 어눌하거나 의식이 흐리면 바로 119'.
 *   - situational.intro.sign-parts: 종이 몸에 얼굴·입술 칸이 없어 신호 자리를 목·가슴·피부·허벅지로 바꿨다(근육 경련 = 허벅지).
 *   - situational.wrap.kit-check: 응급 키트 목록(일회용 장갑·거즈·붕대·삼각건·냉찜질 팩·비상 연락 카드). 개인 상비약은 보호자·보건 선생님 확인 뒤.
 *   - community-aed.activity.complex-case: '반응·호흡이 없는 사람을 먼저 살핀다', '소리 내어 우는 사람은 숨을 쉬고 있다'(여러 명이 다친 상황의 우선순위 원칙).
 *   - community-aed.*: AED 위치는 가상 지도다. 실제 위치는 응급의료포털(중앙응급의료센터) AED 찾기와 학교 안전 계획으로 확인한다. 24시간 열린 곳인지도 현장 확인.
 * 전화번호는 119 만 쓴다. */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-firstaid', band: '고', topic: `saf-firstaid.h.${topic}`, grades }, o, { id: `saf-firstaid.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(sort): groups = 칸마다 카드 글(글 = 카드 id). 쉬움 = 칸마다 앞 k장(es 를 주면 앞 es칸만), 도전 = hard 덧붙임. traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, es = 0, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (ss, gs) => ({ sort: Object.fromEntries(ss.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(slots, groups), difficulty: d, levels: {} };
    const es2 = es || slots.length; const eg = groups.slice(0, es2).map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, es ? `가지 ${es2}개` : `카드 ${eg.flat().length}장`), toolOptions: Object.assign({ cards: mix(eg) }, es ? { slots: slots.slice(0, es2) } : {}), target: tgt(slots.slice(0, es2), eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(slots, hg) }; }
    return Object.assign(base, more);
  };
  // 차례 문항(order): steps = 바른 차례. 쉬움 = 앞 k장, 도전 = plus(끼워 넣을 [자리, 카드]) 로 한 장 더
  const ORDERQ = (prompt, steps, { k = 3, traps = [], plus = null, d = 0.3, opt = {}, more = {} } = {}) => {
    const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: steps.length, cards: lay(steps, traps) }, opt), target: { order: steps }, difficulty: d, levels: {} };
    if (k < steps.length) it.levels.easy = { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { slots: k, cards: lay(steps.slice(0, k), []) }, target: { order: steps.slice(0, k) } };
    if (plus) { const s2 = [...steps]; s2.splice(plus[0], 0, plus[1]); it.levels.challenge = { prompt: pfx(prompt, `카드 ${s2.length}장`), toolOptions: { slots: s2.length, cards: lay(s2, traps) }, target: { order: s2 } }; }
    if (!Object.keys(it.levels).length) delete it.levels;
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
  // 갈림길(dilemma): 나무를 n단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 e번, 기본 = b번, 도전 = 나무 전체 + (chal 이 있으면) 근거 카드 더하기
  const DILQ = (prompt, scene, paths, reasons, good, { e = 1, b = 2, chal = null, d = 0.4, opt = {}, more = {} } = {}) => {
    const full = depth(scene);
    const at = (n, g) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: g || good });
    const it = { prompt, toolOptions: Object.assign({ scene: cut(scene, b), reasons }, opt), target: at(b), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, `갈림길 ${e}개`), toolOptions: { scene: cut(scene, e) }, target: at(e) } } };
    if (full > b || chal) it.levels.challenge = { prompt: pfx(prompt, chal ? `갈림길 ${full}개, 근거 하나 더` : `갈림길 ${full}개`), toolOptions: Object.assign({ scene }, chal ? { reasons: [...reasons, ...chal.reasons] } : {}), target: at(full, chal ? [...good, ...chal.good] : good) };
    return Object.assign(it, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀 + (easy 를 주면) 기준 줄이기, 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, sample = null, plus = null, easy = null, d = 0.4, more = {} } = {}) => {
    const t = (cs) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, sent ? { sentences: sent } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks), difficulty: d, levels: {} };
    if (starter || easy) it.levels.easy = Object.assign({}, starter ? { toolOptions: { starter } } : {}, easy ? { prompt: pfx(prompt, `기준 ${easy.length}개`), target: t(easy) } : {});
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
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];

  // ======================================================================================================
  // 1. 팀 심폐소생술과 AED (10학년)
  // ======================================================================================================
  {
    const M = MOD('team-cpr', [10]);
    const BYST = [['바로 압박하고 AED도 씀', 9], ['바로 압박만 함', 6], ['구급대를 기다리기만 함', 2]];
    const HES = { text: '학원 앞 길에서 어른 한 사람이 갑자기 쓰러졌다. 여러 사람이 둘러서서 지켜보기만 한다.', who: '도윤', motif: 'house', choices: [
      { id: 'watch', text: '누군가 하겠지 하고 지켜본다', result: '모두가 서로 바라보는 사이 시간이 흐른다.', impact: [{ who: '쓰러진 사람', text: '아무 도움도 받지 못한다', tone: -1 }], ending: '모두가 남이 하리라 여기면 아무도 하지 않는다.' },
      { id: 'video', text: '휴대전화로 영상을 찍는다', result: '영상은 남지만 쓰러진 사람 곁에는 아무도 없다.', impact: [{ who: '쓰러진 사람', text: '도움이 늦어진다', tone: -1 }], ending: '찍는 손이 아니라 돕는 손이 필요한 순간이었다.' },
      { id: 'go', text: '주변이 안전한지 보고 다가가 어깨를 두드리며 부른다', result: '대답이 없고, 숨을 헐떡이듯 이상하게 쉰다.', impact: [{ who: '쓰러진 사람', text: '도움이 시작된다', tone: 1 }],
        next: { text: '"잘못 누르면 어쩌지?" 손이 멈칫한다. 옆에 대학생과 직장인이 서 있다.', choices: [
          { id: 'ask', text: '사람을 콕 집어 119와 AED를 부탁하고 가슴 압박을 시작한다', result: '119 상담요원이 스피커폰으로 압박을 안내한다.', impact: [{ who: '쓰러진 사람', text: '피가 다시 돌기 시작한다', tone: 1 }],
            next: { text: 'AED가 도착했다. 처음 보는 기계라 겁이 난다.', choices: [
              { id: 'open', text: '전원을 켜고 음성 안내를 따른다', result: '안내대로 패드를 붙이고 분석 중에는 모두 떨어진다.', impact: [{ who: '쓰러진 사람', text: '생존 사슬이 이어진다', tone: 1 }], ending: '안내를 따르기만 해도 AED는 스스로 분석해 필요할 때만 충격을 알린다.' },
              { id: 'shut', text: '구급대가 올 때까지 AED를 열지 않는다', result: '압박은 이어지지만 AED는 상자 안에 그대로 있다.', impact: [{ who: '쓰러진 사람', text: '쓸 수 있던 도움을 놓친다', tone: -1 }], ending: 'AED는 일반인이 안내를 따라 쓰도록 만든 기계다.' }] } },
          { id: 'wait', text: '119에 전화만 하고 구급대를 기다린다', result: '구급대가 오는 동안 아무도 압박하지 않는다.', impact: [{ who: '쓰러진 사람', text: '그동안 피가 돌지 않는다', tone: -1 }], ending: '기다리는 동안에도 옆 사람의 압박이 사슬을 잇는다.' }] } }] };
    const HES_R = [{ id: 'law', text: '배우지 않은 사람도 가슴 압박을 하도록 공식 지침이 권한다' }, { id: 'guide', text: '119 상담요원이 전화로 방법을 안내해 준다' }, { id: 'blood', text: '기다리는 동안에는 피가 돌지 않는다' }, { id: 'other', text: '사람이 많으니 누군가 할 것이다', why: '여럿이 있을수록 서로 미루기 쉬워요. 콕 집어 부탁해야 해요.' }, { id: 'pro', text: '응급 대응은 전문가만 해야 한다', why: '구급대가 오기 전 몇 분은 옆에 있는 사람만 도울 수 있어요.' }];
    const SCHOOL = { grid: [6, 4], title: '가상 학교 칸 지도', places: [{ name: '체육관', icon: 'dot', at: [0, 3] }, { name: '급식실 AED', icon: 'hospital', at: [1, 1], legend: 'AED' }, { name: '본관 1층 AED', icon: 'hospital', at: [3, 2], legend: 'AED' }, { name: '운동장', icon: 'park', at: [2, 3] }, { name: '교무실', icon: 'office', at: [4, 1] }, { name: '정문', icon: 'house', at: [5, 3] }] };

    MODS.push(
      M({
        id: 'intro.bystander-data', type: 'intro', title: '목격자 행동과 결과 자료',
        method: '목격자 행동별 결과 예시 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 막대 끝 값을 보이고 가장 큰 막대부터 함께 읽는다.', base: '값 없이 막대 길이만으로 세 행동을 견준다.', challenge: '이 예시 그래프로 알 수 없는 것(나이·쓰러진 곳·구급대 도착 시간 등) 한 가지를 고른다.' },
        intro: {
          teacher: '"이 그래프는 실제 통계가 아니라 수업용 예시 자료예요. 쓰러진 사람 옆에 있던 사람들이 무엇을 했는지에 따라 막대가 어떻게 달라질까요?" 시연 단추로 가장 큰 막대를 고르는 모습을 보여 준다. "구급대가 오면 다 해결되잖아요"라는 말이 나오면 "구급대가 오기 전 그 몇 분 동안 몸 안에서는 무슨 일이 일어날까요?"라고 되묻는다. 오늘은 혼자가 아니라 여럿이 역할을 나눠 그 몇 분을 잇는 법을 짠다고 밝힌다.',
          student: '예시 자료(실제 통계 아님) 그래프를 보고, 쓰러진 사람 옆 사람들의 행동에 따라 막대가 어떻게 다른지 읽어 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '목격자 행동별 이어진 사례(예시 자료, 실제 통계 아님)', yLabel: '상대 크기', xLabel: '목격자 행동', data: BYST, question: '가장 큰 막대는?', choices: BYST.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'three paper bar columns of different heights beside a paper training manikin, a small paper AED box with a heart symbol and a ringing paper phone', banner: '옆 사람의 몇 분', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 예시 자료다. 실제 수치가 필요하면 질병관리청 급성심장정지조사 최신 자료로 교사가 바꿔 넣는다.',
      }),
      M({
        id: 'intro.station-story', type: 'intro', title: '역 대합실에서 쓰러진 사람',
        method: '역 대합실 장면 차례와 역할 예측', tool: 'story', minutes: 7,
        levels: { easy: '장면 카드 3장(쓰러짐·안전 확인·반응 확인)만 함께 놓는다.', base: '장면 4장을 차례로 놓고 다음에 누가 무엇을 할지 예측한다.', challenge: '장면 4장을 놓은 뒤 "○○ 입은 분, 119에 신고해 주세요"처럼 역할을 맡기는 말을 짝과 지어 말한다.' },
        intro: {
          teacher: '"가상의 역 대합실이에요. 한 사람이 쓰러졌고 둘레에 사람이 열 명쯤 있어요. 누가 무엇부터 할까요?" 장면 카드를 섞어 보인 뒤 시연 단추로 바른 차례를 놓는다. "다들 보고 있으니 누가 신고했겠지"라는 말이 나오면 "열 명이 모두 그렇게 생각하면 신고는 몇 번 될까요?"라고 되묻는다. 주변 안전 확인이 압박보다 먼저라는 것, 부탁은 사람을 콕 집어 한다는 것을 짚는다.',
          student: '역 대합실 장면 카드를 일이 일어나는 차례로 놓고, 다음 장면에서 누가 무엇을 맡을지 예측해 보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '역 대합실(가상)', cards: [{ id: 'resp', text: '어깨를 두드리며 "괜찮으세요?" 부른다', motif: 'star' }, { id: 'fall', text: '대합실 의자 앞에서 한 사람이 쓰러진다', motif: 'house' }, { id: 'ask', text: '"회색 옷 입은 분, 119에 신고해 주세요"', motif: 'sun' }, { id: 'safe', text: '바닥과 둘레가 안전한지 둘러본다', motif: 'cloud' }], shuffle: false }, sequence: [{ order: ['fall', 'safe', 'resp', 'ask'] }] },
          art: { draw: 'a paper train station waiting hall with benches, a paper figure lying on the floor and a circle of paper bystanders, one bystander pointing at another', banner: '누가 무엇을 맡을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.team-timer', type: 'activity', title: '팀 교대 차례 계획하고 연습하기',
        method: '팀 압박·교대 차례 계획과 마네킹 실습', tool: 'timer', minutes: 16,
        levels: { easy: '차례 카드가 3장씩이고, 실습 전 안전 점검을 함께 한다.', base: '차례 카드 4~5장을 직접 놓고, 마네킹 연습 뒤 우리 팀 기록을 적는다.', challenge: 'AED 도착 문항에서 카드 한 장이 더해져 교대 계획을 AED에 맞춰 바꾼다.' },
        activity: {
          title: '팀 교대 차례 계획하고 연습하기', tool: 'timer',
          teacher: '"가슴 압박은 깊이 약 5cm, 분당 100~120회로 세게·빠르게 해야 해서 한 사람이 오래 하면 금세 약해져요. 그래서 팀으로 교대해요." 교대 주기는 공식 지침의 수치를 칠판에 적어 안내하고, 화면의 카드로는 교대하는 차례를 맞춘다. "교대할 때 잠깐 쉬어도 괜찮다"는 학생에게 "압박이 멈춘 동안 피는 돌까요?"라고 묻는다. 연습은 반드시 마네킹으로만 하고, 친구 몸을 누르지 않는다.',
          task: '팀의 시작 차례와 교대 차례를 카드로 정하고, 마네킹으로 연습한 뒤 기록해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '마네킹 실습을 시작하기 전에 안전 점검을 모두 확인하세요.', toolOptions: { title: '실습 전 안전 점검', safety: ['마네킹으로만 연습한다', '친구 몸을 누르지 않는다', '무릎 아래에 매트를 깐다', '손목·팔이 아프면 멈추고 알린다'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '세 사람 팀이 쓰러진 사람을 발견했어요. 압박을 시작하기까지의 차례로 카드를 놓으세요.', toolOptions: { title: '팀 시작 차례', cards: ['가슴 압박 시작', '숨을 이상하게 쉬는지 보기', '주변이 안전한지 보기', '사람을 콕 집어 119·AED 부탁', '어깨 두드리며 반응 보기'] }, target: { order: ['주변이 안전한지 보기', '어깨 두드리며 반응 보기', '사람을 콕 집어 119·AED 부탁', '숨을 이상하게 쉬는지 보기', '가슴 압박 시작'] }, difficulty: 0.3,
              levels: { easy: { prompt: '압박을 시작하기까지의 차례로 카드를 놓으세요(카드 3장).', toolOptions: { cards: ['사람을 콕 집어 119·AED 부탁', '주변이 안전한지 보기', '어깨 두드리며 반응 보기'] }, target: { order: ['주변이 안전한지 보기', '어깨 두드리며 반응 보기', '사람을 콕 집어 119·AED 부탁'] } } } },
            { prompt: '압박하던 사람이 지치기 전에 교대해요. 멈춤이 가장 짧아지는 교대 차례로 카드를 놓으세요.', toolOptions: { title: '교대 차례', cards: ['바로 이어서 가슴 압박', '앞 사람은 옆으로 비켜 숨 고르기', '다음 사람이 옆에 무릎 꿇고 준비', '"하나, 둘, 셋, 교대" 외치기'] }, target: { order: ['다음 사람이 옆에 무릎 꿇고 준비', '"하나, 둘, 셋, 교대" 외치기', '바로 이어서 가슴 압박', '앞 사람은 옆으로 비켜 숨 고르기'] }, difficulty: 0.35,
              levels: { easy: { prompt: '멈춤이 짧아지는 교대 차례로 카드를 놓으세요(카드 3장).', toolOptions: { cards: ['바로 이어서 가슴 압박', '다음 사람이 옆에 무릎 꿇고 준비', '"하나, 둘, 셋, 교대" 외치기'] }, target: { order: ['다음 사람이 옆에 무릎 꿇고 준비', '"하나, 둘, 셋, 교대" 외치기', '바로 이어서 가슴 압박'] } } },
              conclude: '교대할 사람이 미리 옆에서 준비하면 압박이 멈추는 순간이 짧아져요. 교대 주기는 공식 지침을 따라요.' },
            { prompt: '압박하는 중에 AED가 도착했어요. 압박을 멈추지 않는 차례로 카드를 놓으세요.', toolOptions: { title: 'AED가 왔을 때', cards: ['분석 안내가 나오면 모두 떨어지기', '압박하는 사람은 그대로 이어 누르기', 'AED 맡은 사람이 전원 켜고 패드 붙이기', '충격 뒤 다음 사람이 바로 압박'] }, target: { order: ['압박하는 사람은 그대로 이어 누르기', 'AED 맡은 사람이 전원 켜고 패드 붙이기', '분석 안내가 나오면 모두 떨어지기', '충격 뒤 다음 사람이 바로 압박'] }, difficulty: 0.4,
              levels: { easy: { prompt: 'AED가 도착했을 때의 차례로 카드를 놓으세요(카드 3장).', toolOptions: { cards: ['분석 안내가 나오면 모두 떨어지기', '압박하는 사람은 그대로 이어 누르기', 'AED 맡은 사람이 전원 켜고 패드 붙이기'] }, target: { order: ['압박하는 사람은 그대로 이어 누르기', 'AED 맡은 사람이 전원 켜고 패드 붙이기', '분석 안내가 나오면 모두 떨어지기'] } },
                challenge: { prompt: 'AED가 도착했어요. 교대할 사람을 미리 정하는 카드까지 넣어 차례로 놓으세요(카드 5장).', toolOptions: { cards: ['분석 안내가 나오면 모두 떨어지기', '압박하는 사람은 그대로 이어 누르기', '충격 뒤 다음 사람이 바로 압박', 'AED 맡은 사람이 전원 켜고 패드 붙이기', '분석 뒤 압박할 다음 사람 정하기'] }, target: { order: ['압박하는 사람은 그대로 이어 누르기', 'AED 맡은 사람이 전원 켜고 패드 붙이기', '분석 뒤 압박할 다음 사람 정하기', '분석 안내가 나오면 모두 떨어지기', '충격 뒤 다음 사람이 바로 압박'] } } } },
            { prompt: '마네킹 연습을 마쳤어요. 우리 팀이 교대한 횟수와 압박이 멈춘 것을 본 횟수를 적으세요.', toolOptions: { title: '우리 팀 연습 기록', fields: [{ label: '교대한 횟수', unit: '번' }, { label: '압박이 멈춘 것을 본 횟수', unit: '번' }] }, target: { records: true }, difficulty: 0.2 },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 팀의 역할과 교대 차례를 정리하세요.', columns: ['차례', '맡은 사람', '하는 일'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] }] },
        notes: '체계도 계획의 \'압박·교대 구간 타이머\'는 교대 주기를 숫자로 넣어야 해서 쓰지 않았다. 교대 주기는 공식 지침 수치로만 안내하므로, 화면에서는 교대 차례(카드)·안전 점검·연습 기록으로 판정한다. 연습은 성인 마네킹으로만 한다.',
      }),
      M({
        id: 'activity.role-map', type: 'activity', title: '현장 역할 나누기 그물',
        method: '신고·AED·압박·교대·군중 정리 역할 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 3개(신고·AED·압박)에 행동 카드를 단다.', base: '가지 5개(신고·AED·압박·교대·군중 정리)에 행동 카드를 단다.', challenge: '가지 5개를 마친 뒤 사람이 둘뿐인 문항에서 함정 카드가 더해진 채 일을 다시 나눈다.' },
        activity: {
          title: '현장 역할 나누기 그물', tool: 'mindmap',
          teacher: '"쓰러진 사람 옆에 다섯 명이 있다면 다섯 가지 일을 동시에 할 수 있어요. 누가 무엇을 맡을까요?" 카드를 다는 동안 "그 일을 맡은 사람에게 어떻게 부탁할 건가요?"라고 묻는다. "누가 좀 신고해 주세요"라고 외치는 것이 충분하다는 학생에게 "그 말을 들은 사람은 자기가 하라는 말로 들을까요?"라고 되묻는다. 구급대가 오면 무슨 일이 있었는지 짧게 설명하는 것도 역할이라는 점을 짚는다.',
          task: '현장의 역할 가지마다 맞는 행동 카드를 달고, 사람이 적을 때 다시 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('행동 카드를 맞는 역할 가지에 다세요.', ['신고', 'AED', '압박', '교대', '군중 정리'], [
              ['스피커폰으로 119 상담요원 안내를 듣는다', '주소와 상황을 또렷하게 말한다'],
              ['가까운 AED를 가지러 뛰어간다', '전원을 켜고 음성 안내를 따른다'],
              ['가슴 정중앙을 약 5cm 깊이로 누른다', '분당 100~120회로 세게·빠르게 누른다'],
              ['옆에 무릎 꿇고 다음 차례를 준비한다', '구령에 맞춰 바로 이어 누른다'],
              ['둘레 사람들에게 길을 터 달라고 한다', '구급대가 들어올 길을 안내한다'],
            ], { k: 2, es: 3, d: 0.3, opt: { topic: '현장 역할' } }),
            PICKQ('일을 맡길 때 상대가 바로 움직이게 하는 말만 고르세요.', ['"회색 옷 입은 분, 119에 신고해 주세요"', '"안경 쓴 학생, 역 매표소 옆 AED를 가져다주세요"'], ['"누가 좀 신고해 주세요"', '"아무나 AED 좀요"'], { d: 0.25, opt: { basket: '바로 움직이게 하는 말' }, more: { conclude: '사람을 콕 집고, 할 일을 한 가지로 말해야 듣는 사람이 자기 일로 알아들어요.' } }),
            SORTQ('사람이 나와 친구 둘뿐이에요. 일을 두 사람에게 나누세요.', ['나(먼저 발견)', '친구'], [
              ['바로 가슴 압박을 시작한다', '친구가 돌아오면 교대한다'],
              ['스피커폰으로 119에 신고한다', '가까운 AED를 가져온다'],
            ], { k: 1, traps: ['둘 다 119에 따로 전화한다', '압박을 멈추고 함께 AED를 찾는다'], d: 0.4, opt: { topic: '두 사람뿐일 때' } }),
            MATCHQ('구급대가 도착했어요. 설명할 내용과 까닭을 짝지으세요.', [['쓰러진 때', '언제부터 압박이 필요했는지 알린다'], ['한 일', '압박·AED 충격을 했는지 알린다'], ['지금 상태', '이어 받을 일을 바로 정하게 한다']], { k: 2, extra: ['쓰러진 사람의 이름을 지어 말한다'], d: 0.35, opt: { topic: '구급대에 넘길 말' }, more: { conclude: '구급대가 오면 내 역할이 끝나는 것이 아니라, 지금까지 한 일을 넘겨주는 일이 남아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 다섯 명이 현장에 있다면 누구에게 어떤 말로 일을 맡길지 한 줄씩 쓰세요(이름 대신 옷차림으로).' }] },
      }),
      M({
        id: 'activity.aed-pads', type: 'activity', title: 'AED 쓰는 차례 맞추기',
        method: 'AED 사용 차례와 패드 자리', tool: 'kitchen', minutes: 16,
        levels: { easy: 'AED 차례 카드 4장(전원·패드·떨어지기·충격)을 놓는다.', base: '카드 5장(바로 압박 다시까지)을 놓고 패드 자리와 충격이 필요 없을 때의 차례를 맞춘다.', challenge: '첫 문항에 \'젖은 가슴 물기 닦기\' 변수 카드가 더해진 6장을 놓는다.' },
        activity: {
          title: 'AED 쓰는 차례 맞추기', tool: 'kitchen',
          teacher: '"AED는 상자를 열면 말을 해요. 그 말을 따르기만 하면 돼요." 학교 AED 실물이나 사진을 보여 주며 전원 단추와 패드 그림을 가리킨다. "AED가 사람을 다치게 할 수 있다"는 학생에게 "충격이 필요한지는 누가 판단하나요? 사람인가요, 기계인가요?"라고 묻는다. 분석하는 동안 손을 떼는 까닭(누르거나 만지면 리듬을 바르게 읽지 못하고, 충격 때 닿아 있으면 나도 충격을 받을 수 있다)을 짚는다.',
          task: 'AED를 쓰는 차례와 패드 자리를 카드로 맞춰요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('AED가 도착했어요. 쓰는 차례로 카드를 놓으세요.', ['전원을 켠다', '패드 두 장을 그림대로 붙인다', '분석하는 동안 모두 몸에서 떨어진다', '충격이 필요하다는 안내 때 버튼을 누른다', '충격 뒤 바로 가슴 압박을 다시 한다'], { k: 4, plus: [1, '가슴이 젖어 있으면 물기를 닦는다'], d: 0.3, opt: { autoMotif: false } }),
            MATCHQ('패드 두 장을 붙일 자리를 짝지으세요.', [['첫째 패드', '오른쪽 빗장뼈 아래'], ['둘째 패드', '왼쪽 젖꼭지 아래 옆구리']], { k: 2, extra: ['가슴 한가운데 한 장에 겹쳐서'], d: 0.3, opt: { autoMotif: false }, more: { hints: ['패드에 그려진 그림을 보면 두 장이 심장을 사이에 두고 떨어져 있어요.'] } }),
            ORDERQ('AED가 "충격이 필요하지 않습니다"라고 안내했어요. 이어서 할 차례로 카드를 놓으세요.', ['충격 버튼을 누르지 않는다', '바로 가슴 압박을 다시 한다', '패드는 붙인 채 안내를 계속 따른다'], { k: 3, d: 0.35, opt: { autoMotif: false } }),
            PICKQ('분석하는 동안 손을 떼는 까닭만 고르세요.', ['누르면 기계가 리듬을 바르게 읽지 못한다', '충격 때 닿아 있으면 나도 충격을 받을 수 있다'], ['손이 아파서 쉬는 시간이다', '구급대가 올 때까지 기다리는 것이다'], { d: 0.3, opt: { mode: 'pick', basket: '떨어지는 까닭', autoMotif: false }, more: { conclude: '분석과 충격 때만 떨어지고, 그 밖의 시간에는 압박을 멈추지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 AED가 있는 곳과, 상자를 열었을 때 가장 먼저 할 일을 쓰세요.' }] },
        notes: '패드 자리 문구와 음성 안내는 학교 AED 기종의 실제 안내와 같은지 교사가 확인한다. 연습용 AED·마네킹이 있으면 실물로 해 본다.',
      }),
      M({
        id: 'activity.debrief', type: 'activity', title: '실습 뒤 팀 돌아보기 글',
        method: '팀 디브리핑 글쓰기와 기준표 점검', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 쓰고, 기준 2개만 점검한다.', base: '역할 수행·교대·의사소통 기준 3개로 점검한다.', challenge: '기준 3개에 \'다음 연습에서 바꿀 점 하나\'가 더해진다.' },
        activity: {
          title: '실습 뒤 팀 돌아보기 글', tool: 'rubric-writing',
          teacher: '"디브리핑은 누가 못했는지 따지는 시간이 아니라, 다음에 사슬이 더 단단해지게 하는 시간이에요." 쓰기 전에 마네킹 연습에서 본 장면을 팀별로 30초씩 말하게 한다. "○○이가 느려서"처럼 사람을 탓하는 문장을 쓴 학생에게 "그 문장을 읽은 우리 팀은 다음에 무엇을 바꿀 수 있을까요?"라고 묻는다. 사실·잘된 점·바꿀 점의 차례로 쓰게 한다.',
          task: '마네킹 연습을 돌아보는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('우리 팀의 역할 나누기가 어땠는지 2~3문장으로 쓰세요.', '오늘 마네킹 연습에서 신고·AED·압박·교대 역할이 어떻게 이어졌는지 쓰세요.', ['맡은 역할과 한 일을 사실대로 썼다', '사람 이름 대신 역할 이름으로 썼다', '잘된 점을 하나 이상 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['역할', '맡']], starter: '우리 팀은 ~이 신고를 맡고 ~', easy: ['맡은 역할과 한 일을 사실대로 썼다', '사람 이름 대신 역할 이름으로 썼다'], plus: '다음 연습에서 바꿀 점 하나를 썼다', d: 0.35 }),
            RWQ('교대가 어땠는지 2~3문장으로 쓰세요.', '압박을 교대할 때 멈춤이 생겼는지, 생겼다면 왜였는지 쓰세요.', ['교대 때 일어난 일을 썼다', '멈춤이 생긴 까닭을 짚었다', '구령·준비 자리처럼 고칠 방법을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['교대']], starter: '교대할 때 ~', easy: ['교대 때 일어난 일을 썼다', '멈춤이 생긴 까닭을 짚었다'], plus: '다음 연습에서 바꿀 점 하나를 썼다', d: 0.4 }),
            RWQ('팀의 말 주고받기가 어땠는지 2~3문장으로 쓰세요.', '부탁하는 말, 구령, 구급대에 넘기는 말이 또렷했는지 쓰세요.', ['실제로 한 말을 하나 이상 옮겼다', '알아듣기 어려웠던 순간을 짚었다', '더 나은 말로 고쳐 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['말', '구령', '부탁']], starter: '우리 팀이 한 말 가운데 ~', easy: ['실제로 한 말을 하나 이상 옮겼다', '더 나은 말로 고쳐 썼다'], plus: '다음 연습에서 바꿀 점 하나를 썼다', d: 0.4, more: { conclude: '돌아보기 글은 다음 연습에서 사슬을 더 단단하게 만드는 글이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '팀 돌아보기를 정리하세요.', columns: ['기준', '잘된 점', '바꿀 점'], cells: [['역할 수행', '', ''], ['교대', '', ''], ['말 주고받기', '', '']] }] },
        notes: '실제 사람을 구한 경험이나 가족의 사례를 꺼내게 하지 않는다. 오늘 마네킹 연습만 돌아본다.',
      }),

      M({
        id: 'wrap.hesitate', type: 'wrap', title: '도울까 망설일 때',
        method: '돕기를 망설이는 갈림길과 근거', tool: 'dilemma', minutes: 10,
        levels: { easy: '교사가 첫 갈림길(지켜보기·영상·다가가기)의 결과만 함께 읽는다.', base: '두 번째 갈림길(부탁하고 압박·기다리기)까지 가서 근거 카드를 고른다.', challenge: '교사가 AED 장면(세 번째 갈림길)을 화면에 이어 보이고, \'전문가만 해야 한다\'는 근거를 반박하는 말을 짝과 나눈다.' },
        wrap: {
          teacher: '"알고 있어도 막상 앞에 서면 손이 멈출 수 있어요. 무엇이 손을 멈추게 할까요?" 갈림길을 고르고 근거 카드를 고른 뒤 출구 질문으로 넘어간다. \'사람이 많으니 누군가 할 것이다\'를 고른 학생에게 "오늘 역 대합실 장면에서 열 명이 모두 그렇게 생각했다면 어땠을까요?"라고 묻는다. 망설임은 자연스러운 마음이고, 119 상담요원이 전화로 함께해 준다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'dilemma', options: { scene: cut(HES, 2), reasons: HES_R, title: '학원 앞 길' }, prompt: '도윤이가 되어 갈림길을 고르고, 행동을 지지하는 근거 카드를 고르세요.', target: { path: [['go', 'ask']], reasons: ['law', 'guide', 'blood'], some: true }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['교대할 때 잠시 멈춰도 괜찮다', '구급대가 오면 한 일을 짧게 설명한다', '심폐소생술은 혼자 해도 충분하다'], answer: 1, difficulty: 0.2, explain: '멈추면 그동안 피가 돌지 않아요. 여럿이 교대하며 잇고, 구급대가 오면 지금까지 한 일을 넘겨줘요.' },
            { type: 'short', prompt: '내가 현장에 있다면 처음 할 말 한 문장을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '망설임을 넘는 한마디',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '가슴 압박은 가슴 정중앙을 약 ___ cm 깊이로 분당 100~120회 누른다.', answer: '5' },
            { type: 'short', prompt: '\'응급 대응은 전문가만 해야 한다\'는 말에 한두 문장으로 답하세요.' },
          ],
          easy: { note: '"구급대가 오기 전 몇 분은 ~"', items: [{ type: 'short', prompt: '구급대가 오기 전 몇 분 동안 내가 할 수 있는 일을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.aed-route', type: 'wrap', title: '체육관에서 가장 가까운 AED',
        method: '학교 지도 AED 위치와 경로 칸 세기', tool: 'map', minutes: 10,
        levels: { easy: '교사가 지도의 AED 기호 두 곳을 먼저 짚어 주고 학생은 핀만 꽂는다.', base: '가장 가까운 AED에 핀을 꽂고 체육관에서 그곳까지 칸을 세어 거리를 넣는다.', challenge: '두 AED까지의 칸 수를 모두 세어 견주고, 활동지에 우리 학교 실제 경로를 쓴다.' },
        wrap: {
          teacher: '"체육 시간에 체육관에서 누가 쓰러지면 AED는 어디서 가져올까요? 지금 바로 말할 수 있나요?" 가상 학교 지도를 보고 핀을 꽂은 뒤 칸을 세게 한다. "보건실에 다 있겠지"라는 학생에게 "우리 학교 AED가 정확히 어디에 몇 대 있는지 확인해 본 적 있나요?"라고 묻는다. 오늘 집에 가는 길에 우리 학교 실제 AED 자리를 한 번 보고 가자고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: SCHOOL, prompt: '체육관에서 가장 가까운 AED에 핀을 꽂으세요.', target: { place: '급식실 AED' }, difficulty: 0.2 },
            { type: 'tool', tool: 'map', options: Object.assign({}, SCHOOL, { mode: 'scale', scale: { cell: 20, unit: 'm' } }), prompt: '체육관에서 급식실 AED까지 길을 따라 칸을 세어 거리를 넣으세요.', target: { from: '체육관', to: '급식실 AED' }, difficulty: 0.3 },
            { type: 'choice', prompt: 'AED 위치에 대한 말 가운데 알맞은 것을 고르세요.', options: ['필요할 때 찾으면 된다', '평소에 미리 확인해 둔다', '보건실에만 있다'], answer: 1, difficulty: 0.15, explain: '쓰러진 뒤에 찾기 시작하면 늦어요. 자주 가는 곳의 AED는 미리 봐 둬요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 학교 AED 길',
          items: [
            { type: 'short', prompt: '우리 학교 실제 AED 위치를 확인해 쓰세요.' },
            { type: 'short', prompt: '체육관(또는 운동장)에서 그곳까지 가는 길을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '지도는 가상 학교다. 우리 학교 AED 위치는 학교 안전 계획·보건실로 교사가 확인해 함께 알려 준다.',
      }),
    );
  }

  // ======================================================================================================
  // 2. 상황별 응급처치: 기도폐쇄·화상·열 관련 질환 (11학년)
  // ======================================================================================================
  {
    const M = MOD('situational', [11]);
    const HEAT = { text: '7월 오후, 운동장에서 체육대회 계주 연습 중이다. 다온이가 "좀 어지러워" 하며 주저앉는다.', who: '나', motif: 'sun', choices: [
      { id: 'push', text: '"한 바퀴만 더 하자"며 일으켜 세운다', result: '다온이가 몇 걸음 뛰다 비틀거린다.', impact: [{ who: '다온', text: '몸에 열이 더 쌓인다', tone: -1 }], ending: '더위 신호를 무시하고 더 움직이면 몸이 더 위험해진다.' },
      { id: 'alone', text: '혼자 쉬게 두고 연습으로 돌아간다', result: '다온이 혼자 햇볕 아래 앉아 있다.', impact: [{ who: '다온', text: '상태가 바뀌어도 아무도 모른다', tone: -1 }], ending: '더위로 생긴 이상은 혼자 두면 나빠지는 것을 아무도 알아채지 못한다.' },
      { id: 'shade', text: '그늘로 함께 옮기고 선생님께 알린다', result: '선생님이 달려오고 다온이는 그늘에 앉는다.', impact: [{ who: '다온', text: '햇볕을 피한다', tone: 1 }],
        next: { text: '다온이는 "괜찮아"라고 하지만 땀을 많이 흘리고 몸이 뜨겁다.', choices: [
          { id: 'cool', text: '옷을 느슨하게 하고 몸을 식히며, 삼킬 수 있으니 물을 조금씩 마시게 한다', result: '다온이 숨이 조금 고르게 된다.', impact: [{ who: '다온', text: '몸의 열이 내려가기 시작한다', tone: 1 }],
            next: { text: '그런데 다온이 대답이 느려지고 말이 어눌해진다.', choices: [
              { id: 'call', text: '119에 신고하고 계속 몸을 식힌다', result: '119 상담요원의 안내를 들으며 곁을 지킨다.', impact: [{ who: '다온', text: '빨리 전문 처치를 받는다', tone: 1 }], ending: '말이 어눌하거나 의식이 흐려지면 쉬기가 아니라 119다.' },
              { id: 'wait', text: '쉬면 낫겠지 하고 지켜보기만 한다', result: '다온이가 점점 대답을 하지 않는다.', impact: [{ who: '다온', text: '위험한 신호가 커진다', tone: -1 }], ending: '쉬기만 하면 낫는다는 생각이 신고를 늦춘다.' }] } },
          { id: 'force', text: '빨리 나으라고 물을 한꺼번에 많이 마시게 한다', result: '다온이가 사레가 들려 기침을 한다.', impact: [{ who: '다온', text: '더 힘들어진다', tone: -1 }], ending: '물은 의식이 있고 삼킬 수 있을 때 조금씩 준다.' }] } }] };
    const HEAT_R = [{ id: 'cool', text: '더위로 생긴 이상은 몸을 식히는 것이 먼저다' }, { id: 'sign', text: '말이 어눌하거나 의식이 흐려지면 바로 119다' }, { id: 'rest', text: '그늘에서 쉬기만 하면 다 낫는다', why: '쉬어도 몸의 열이 쌓여 있으면 나빠질 수 있어요. 식히면서 신호를 지켜봐요.' }, { id: 'tough', text: '참고 뛰면 몸이 더위에 적응한다', why: '어지러움은 몸이 보내는 멈춤 신호예요.' }];
    const HEAT_X = [{ id: 'watch', text: '괜찮다는 말보다 몸의 신호를 믿고 곁을 지킨다' }, { id: 'fan', text: '부채질만 하면 119는 필요 없다', why: '의식이 흐려지는 것은 부채질로 해결할 신호가 아니에요.' }];
    const HEAT_EASY = [{ id: 'shade2', text: '햇볕을 피해 그늘로 옮긴다' }, { id: 'tough2', text: '참고 뛰면 몸이 적응한다', why: '어지러움은 몸이 보내는 멈춤 신호예요.' }];
    const JOB = { text: '주말 야외 행사장 아르바이트 중, 함께 일하는 형이 다리 근육이 뭉친다며 쭈그려 앉는다. 얼굴이 붉고 땀이 많다.', who: '나', motif: 'sun', choices: [
      { id: 'tell', text: '현장 담당자에게 알리고 시원한 곳으로 함께 간다', result: '담당자가 휴게 천막과 물을 마련해 준다.', impact: [{ who: '형', text: '쉬면서 몸을 식힌다', tone: 1 }],
        next: { text: '천막에서 쉬던 형이 "토할 것 같고 머리가 아파"라고 한다.', choices: [
          { id: 'call2', text: '담당자와 함께 119에 알리고 몸을 계속 식힌다', result: '구급대가 와서 형을 살핀다.', impact: [{ who: '형', text: '제때 도움을 받는다', tone: 1 }], ending: '신호가 늘어나면 쉬던 자리에서도 신고로 넘어간다.' },
          { id: 'back', text: '조금 쉬었으니 다시 일하자고 한다', result: '형이 다시 햇볕 아래로 나간다.', impact: [{ who: '형', text: '몸에 열이 다시 쌓인다', tone: -1 }], ending: '일보다 몸의 신호가 먼저다.' }] } },
      { id: 'keep', text: '바쁜 시간이라 일을 마저 하자고 한다', result: '형이 땀을 흘리며 일을 계속한다.', impact: [{ who: '형', text: '근육 경련이 심해진다', tone: -1 }], ending: '근육 경련도 더위가 보내는 신호다.' }] };
    const JOB_R = [{ id: 'first', text: '일보다 몸의 신호가 먼저다' }, { id: 'report', text: '일터에서는 담당자에게 알려 함께 대처한다' }, { id: 'busy', text: '바쁠 때는 참는 것이 책임감이다', why: '아픈 채로 일하면 더 큰 사고로 이어질 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.urgent-sort', type: 'intro', title: '바로 신고할까, 지켜볼까',
        method: '상황 카드 신고·관찰 분류', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 상황 카드 4장만 보이고 함께 나눈다.', base: '카드 6장을 \'바로 119 신고\'와 \'처치하고 지켜보기\'로 나눈다.', challenge: '6장을 나눈 뒤 헷갈린 카드 하나를 골라 나눈 근거를 말한다.' },
        intro: {
          teacher: '"모든 응급 상황이 119인 것은 아니에요. 그렇다고 지켜보기만 해서도 안 되는 상황이 있어요. 기준이 무엇일까요?" 카드를 하나씩 읽어 주고 손을 들어 바구니를 고르게 한 뒤 시연 단추로 나눈다. "기침을 세게 하면 위험하다"는 말이 나오면 "기침을 할 수 있다는 것은 숨길이 아직 열려 있다는 뜻일까요?"라고 되묻는다. 숨·의식·넓은 범위가 신고 기준의 열쇠라는 점을 짚는다.',
          student: '응급 상황 카드를 \'바로 119 신고\'와 \'처치하고 지켜보기\' 바구니로 나누고, 무엇이 기준이었는지 말해 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['바로 119 신고', '처치하고 지켜보기'], cards: [{ id: 'choke', text: '목을 움켜쥐고 말도 기침도 못 한다' }, { id: 'cough', text: '사레가 들려 세게 기침하며 말은 한다' }, { id: 'heat', text: '더위 속에서 말이 어눌하고 몸이 뜨겁다' }, { id: 'red', text: '뜨거운 컵에 손등이 살짝 빨갛게 데었다' }, { id: 'wide', text: '끓는 물이 쏟아져 넓은 곳을 데었다' }, { id: 'dizzy', text: '그늘에서 쉬며 물을 마신 뒤 어지러움이 나아졌다' }] }, sequence: [{ sort: { '바로 119 신고': ['choke', 'heat', 'wide'], '처치하고 지켜보기': ['cough', 'red', 'dizzy'] } }] },
          art: { draw: 'two paper baskets on a shelf, one tagged with a paper phone symbol and one with a paper eye symbol, small paper cards floating between them', banner: '신고 기준은 무엇일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '\'처치하고 지켜보기\'로 나눈 상황도 나빠지면 바로 119로 바뀐다고 마지막에 말해 준다.',
      }),
      M({
        id: 'intro.sign-parts', type: 'intro', title: '몸이 보내는 위험 신호',
        method: '기도폐쇄·더위 신호가 보이는 몸 자리', tool: 'body', minutes: 7,
        levels: { easy: '교사가 목·피부 두 곳만 짚으며 신호를 말한다.', base: '목·가슴·피부·허벅지 네 곳을 고른다.', challenge: '네 곳을 고른 뒤 자리마다 어떤 신호인지(목을 움켜쥠·숨쉬기 힘듦·뜨겁고 땀이 많음·근육 경련) 설명한다.' },
        intro: {
          teacher: '"목에 무엇이 걸린 사람, 더위로 몸이 힘든 사람은 말보다 몸으로 먼저 신호를 보내요. 어디를 보면 알 수 있을까요?" 시연 단추로 종이 몸의 목·가슴·피부·허벅지가 골라지는 모습을 보여 주고 자리마다 신호를 말한다. "본인이 괜찮다고 하면 괜찮은 것"이라는 말이 나오면 "목에 걸린 사람은 \'괜찮다\'는 말을 할 수 있을까요?"라고 되묻는다. 얼굴·입술 색은 종이 몸에 칸이 없으니 내 몸을 짚어 보게 한다.',
          student: '종이 몸에서 기도폐쇄와 더위로 생긴 이상의 신호가 보이는 곳을 고르고, 어떤 신호인지 말해 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '가슴', '피부', '허벅지', '배', '무릎'], names: true }, sequence: [{ parts: ['목', '가슴', '피부', '허벅지'] }] },
          art: { draw: 'a paper human figure with small paper signal flags on the neck, chest, skin of the arm and thigh, a paper sun in the corner and a paper cup of water', banner: '말보다 몸이 먼저', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '종이 몸에 얼굴·입술 칸이 없어 신호 자리를 목·가슴·피부·허벅지로 바꿨다. 얼굴·입술 색 변화는 교사가 말로 덧붙인다.',
      }),

      M({
        id: 'activity.heat-dilemma', type: 'activity', title: '더위 속 친구 갈림길',
        method: '야외 활동 중 어지러운 친구 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 2개(그늘로 옮기기·식히기)까지 가서 근거를 고른다.', base: '갈림길 3개(말이 어눌해짐)까지 가서 결과를 추적하고 근거를 고른다.', challenge: '갈림길 3개를 지나 근거 카드가 더해진 판에서 근거를 하나 더 고른다.' },
        activity: {
          title: '더위 속 친구 갈림길', tool: 'dilemma',
          teacher: '"친구가 \'괜찮아\'라고 해요. 정말 괜찮은 걸까요, 아니면 괜찮다고 말하는 걸까요?" 갈림길마다 다온이의 몸에 무슨 일이 일어나는지 소리 내어 읽게 한다. \'쉬면 낫겠지\'를 고른 학생에게 "대답이 느려지고 말이 어눌해지는 것은 쉬어서 나아지는 신호일까요?"라고 묻는다. 식히기는 처치이고, 의식이 흐려지면 그때부터는 신고가 처치보다 먼저라는 점을 짚는다.',
          task: '더위 속 친구의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('다온이를 지키는 길을 끝까지 고르고 근거를 고르세요.', HEAT, [['shade', 'cool', 'call']], HEAT_R, ['cool', 'sign'], { e: 2, b: 3, chal: { reasons: HEAT_X, good: ['watch'] }, d: 0.4 }),
            EXPLOREQ('고르지 않은 다른 길도 끝까지 가 보고 결과를 견주세요.', HEAT, HEAT_R, ['다른 길에서 다온이에게 생긴 일을 확인했다', '신고가 늦어진 까닭을 짚었다'], { d: 0.35 }),
            DILQ('야외 행사장 아르바이트 중 동료를 지키는 길을 고르고 근거를 고르세요.', JOB, [['tell', 'call2']], JOB_R, ['first', 'report'], { e: 1, b: 2, d: 0.35, more: { conclude: '일터에서도 더위 신호는 일보다 먼저예요. 담당자에게 알리고 함께 대처해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'그늘에서 쉬기만 하면 된다\'는 말이 왜 위험할 수 있는지 오늘 갈림길의 장면을 근거로 쓰세요.' }] },
      }),
      M({
        id: 'activity.choke-drill', type: 'activity', title: '목에 걸렸을 때 연습',
        method: '기도폐쇄 대처 차례 몸짓 연습', tool: 'timer', minutes: 16,
        levels: { easy: '차례 카드가 2장씩이고, 연습 전 안전 점검을 한다.', base: '차례 카드 3장씩을 놓고 짝과 몸짓으로만 연습한다.', challenge: '카드 3장씩을 놓은 뒤, 의식을 잃었을 때 이어 갈 차례까지 놓고 스스로 점검한다.' },
        activity: {
          title: '목에 걸렸을 때 연습', tool: 'timer',
          teacher: '"급식 시간에 친구가 갑자기 목을 움켜쥐고 아무 말도 못 해요. 물을 줄까요?" 오늘 연습은 마네킹이나 몸짓으로만 하고, 친구 배를 실제로 세게 밀지 않는다고 먼저 약속한다. 등 두드리기·배 밀어내기의 손 자리와 횟수는 교사가 공식 지침대로 시연한다. "물을 마시면 내려간다"는 학생에게 "숨길이 막혔는데 물이 들어가면 어디로 갈까요?"라고 묻는다. 기침을 할 수 있으면 기침이 가장 좋은 처치라는 점을 짚는다.',
          task: '기도폐쇄 대처 차례를 카드로 놓고, 몸짓으로만 짝과 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '연습을 시작하기 전에 안전 점검을 모두 확인하세요.', toolOptions: { title: '연습 전 안전 점검', safety: ['마네킹이나 몸짓으로만 연습한다', '친구 배를 실제로 세게 밀지 않는다', '짝과 멈춤 신호를 정한다'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '친구가 사레가 들려 세게 기침하며 말도 해요. 할 일을 차례로 놓으세요.', toolOptions: { title: '기침을 할 수 있을 때', cards: ['기침이 약해지면 119·배 밀어내기로 바꾼다', '"목에 걸렸어?" 하고 묻는다', '기침을 계속하게 하고 곁에서 지켜본다'] }, target: { order: ['"목에 걸렸어?" 하고 묻는다', '기침을 계속하게 하고 곁에서 지켜본다', '기침이 약해지면 119·배 밀어내기로 바꾼다'] }, difficulty: 0.3,
              levels: { easy: { prompt: '기침하며 말을 할 수 있을 때 할 일을 차례로 놓으세요(카드 2장).', toolOptions: { cards: ['기침을 계속하게 하고 곁에서 지켜본다', '"목에 걸렸어?" 하고 묻는다'] }, target: { order: ['"목에 걸렸어?" 하고 묻는다', '기침을 계속하게 하고 곁에서 지켜본다'] } } } },
            { prompt: '친구가 목을 움켜쥐고 말도 기침도 못 해요. 할 일을 차례로 놓으세요.', toolOptions: { title: '말도 기침도 못 할 때', cards: ['공식 지침대로 등 두드리기·배 밀어내기', '"목에 걸렸어?" 하고 묻는다', '사람을 콕 집어 119 신고를 부탁한다'] }, target: { order: ['"목에 걸렸어?" 하고 묻는다', '사람을 콕 집어 119 신고를 부탁한다', '공식 지침대로 등 두드리기·배 밀어내기'] }, difficulty: 0.35,
              levels: { easy: { prompt: '말도 기침도 못 할 때 할 일을 차례로 놓으세요(카드 2장).', toolOptions: { cards: ['공식 지침대로 등 두드리기·배 밀어내기', '사람을 콕 집어 119 신고를 부탁한다'] }, target: { order: ['사람을 콕 집어 119 신고를 부탁한다', '공식 지침대로 등 두드리기·배 밀어내기'] } } } },
            { prompt: '배 밀어내기를 하는 중에 친구가 의식을 잃었어요. 이어 갈 일을 차례로 놓으세요.', toolOptions: { title: '의식을 잃었을 때', cards: ['가슴 압박을 시작한다', '조심히 바닥에 눕힌다', '119에 상황이 바뀌었다고 알린다'] }, target: { order: ['조심히 바닥에 눕힌다', '119에 상황이 바뀌었다고 알린다', '가슴 압박을 시작한다'] }, difficulty: 0.4,
              levels: { easy: { prompt: '친구가 의식을 잃었을 때 이어 갈 일을 차례로 놓으세요(카드 2장).', toolOptions: { cards: ['가슴 압박을 시작한다', '조심히 바닥에 눕힌다'] }, target: { order: ['조심히 바닥에 눕힌다', '가슴 압박을 시작한다'] } },
                challenge: { prompt: '친구가 의식을 잃었어요. 이어 갈 일을 차례로 놓고 스스로 점검도 하세요.', target: { order: ['조심히 바닥에 눕힌다', '119에 상황이 바뀌었다고 알린다', '가슴 압박을 시작한다'], selfCheck: ['물을 먹여 넘기게 하지 않는다는 것을 말할 수 있다', '기침할 수 있을 때와 없을 때를 구별할 수 있다'] } } },
              conclude: '기침할 수 있으면 기침, 못 하면 119와 등 두드리기·배 밀어내기, 의식을 잃으면 눕히고 가슴 압박 — 상태에 따라 할 일이 바뀌어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '목에 걸린 사람에게 물을 주면 안 되는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '배 밀어내기는 실제로 세게 하면 다칠 수 있어 마네킹이나 몸짓으로만 한다. 손 자리·횟수는 공식 지침으로 교사가 시연한다. 어린이·영아는 방법이 다르다.',
      }),
      M({
        id: 'activity.case-web', type: 'activity', title: '상황별 처치 그물',
        method: '상황별 처치와 하지 말 일 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(기도폐쇄·화상)에 처치 카드를 단다.', base: '가지 3개(기도폐쇄·화상·더위로 생긴 이상)에 처치와 하지 말 일 카드를 단다.', challenge: '가지 3개에 헷갈리는 카드가 더해지고, 처치마다 근거 카드를 잇는다.' },
        activity: {
          title: '상황별 처치 그물', tool: 'mindmap',
          teacher: '"화상에 된장, 물집은 터뜨리기, 목에 걸리면 물 — 이런 말 들어 본 적 있나요? 오늘은 하지 말 일도 함께 정리해요." 카드를 달 때마다 "그렇게 하면 몸에서 무슨 일이 일어날까요?"라고 묻는다. "물집을 터뜨리면 빨리 낫는다"는 학생에게 "물집 껍질이 없어지면 그 자리는 무엇으로 덮여 있게 될까요?"라고 되묻는다. 하지 말 일에도 까닭이 있다는 점을 짚는다.',
          task: '상황 가지마다 처치 카드와 하지 말 일 카드를 달고 근거를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('처치 카드를 맞는 상황 가지에 다세요.', ['기도폐쇄', '화상', '더위로 생긴 이상'], [
              ['기침할 수 있으면 기침을 계속하게 한다', '말도 기침도 못 하면 119를 부탁한다'],
              ['흐르는 시원한 물로 충분히 식힌다', '붓기 전에 반지·시계를 뺀다'],
              ['그늘·시원한 곳으로 옮긴다', '옷을 느슨하게 하고 몸을 식힌다'],
            ], { k: 2, es: 2, hard: [[], ['깨끗한 천으로 덮는다'], ['삼킬 수 있으면 물을 조금씩 준다']], d: 0.3, opt: { topic: '상황별 처치' } }),
            SORTQ('하지 말 일 카드를 맞는 상황 가지에 다세요.', ['기도폐쇄', '화상', '더위로 생긴 이상'], [
              ['물을 먹여 넘기게 한다', '기침을 잘하는데 억지로 배를 민다'],
              ['물집을 터뜨린다', '된장·치약을 바른다'],
              ['혼자 쉬게 두고 떠난다', '의식이 흐린데 물을 먹인다'],
            ], { k: 1, es: 2, hard: [[], ['얼음을 바로 댄다'], []], d: 0.35, opt: { topic: '하지 말 일' } }),
            MATCHQ('처치와 그 근거를 짝지으세요.', [['화상을 흐르는 물로 식히기', '열이 피부 속으로 더 번지는 것을 줄인다'], ['물집을 그대로 두기', '터지면 세균이 들어가기 쉽다'], ['더위 이상은 몸부터 식히기', '몸 안에 쌓인 열이 문제를 일으킨다'], ['기침하면 기침을 계속하게 하기', '기침은 숨길을 여는 몸의 힘이다']], { k: 2, extra: ['빨리 끝내야 수업에 늦지 않는다'], d: 0.4, opt: { topic: '처치의 근거' }, more: { conclude: '처치마다 까닭이 있어요. 까닭을 알면 처음 보는 상황에서도 하지 말 일을 가릴 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황별로 정리하세요.', columns: ['상황', '할 일', '하지 말 일', '119 기준'], cells: [['기도폐쇄', '', '', ''], ['화상', '', '', ''], ['더위로 생긴 이상', '', '', '']] }] },
      }),
      M({
        id: 'activity.manual', type: 'activity', title: '우리 동아리 응급 매뉴얼',
        method: '장소에 붙일 응급 매뉴얼 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓰고, 기준 3개만 점검한다.', base: '칸마다 기준 4~5개로 점검한다.', challenge: '칸마다 \'처음 읽는 사람도 바로 따라 할 수 있는 말로 썼다\' 기준이 더해진다.' },
        activity: {
          title: '우리 동아리 응급 매뉴얼', tool: 'rubric-writing',
          teacher: '"동아리방이나 아르바이트 장소 벽에 붙일 응급 매뉴얼 한 장을 만들어요. 위급할 때 사람들은 긴 글을 읽을까요?" 짧은 문장, 동사로 시작하기, 신고 기준을 맨 위에 두기를 먼저 보여 준다. "증상이 나타나면 적절히 대처한다"처럼 쓴 학생에게 "\'적절히\'를 읽은 사람은 무엇을 할까요?"라고 묻는다. 매뉴얼은 처음 보는 사람이 따라 할 수 있어야 한다는 점을 짚는다.',
          task: '장소에 붙일 응급 매뉴얼 칸을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('매뉴얼 맨 위에 둘 \'바로 119에 신고할 때\'를 2~3문장으로 쓰세요.', '우리 동아리방(또는 아르바이트 장소)에서 바로 119에 신고해야 하는 경우를 쓰세요.', ['숨·의식에 대한 기준을 넣었다', '짧은 문장으로 썼다', '사람을 콕 집어 부탁하라고 썼다', '주소를 말할 자리를 정해 두었다'], { min: 40, max: 300, sent: [2, 3], must: [['119']], starter: '숨을 ~하거나 ~하면 바로 119에 신고한다.', easy: ['숨·의식에 대한 기준을 넣었다', '짧은 문장으로 썼다', '사람을 콕 집어 부탁하라고 썼다'], plus: '처음 읽는 사람도 바로 따라 할 수 있는 말로 썼다', d: 0.35 }),
            RWQ('화상과 기도폐쇄 때 첫 처치를 2~4문장으로 쓰세요.', '화상을 입었을 때와 목에 무엇이 걸렸을 때의 첫 처치를 쓰세요.', ['화상은 흐르는 물로 식히기를 썼다', '기침할 수 있을 때와 없을 때를 나눴다', '동사로 시작하는 짧은 문장이다', '할 일을 차례대로 썼다'], { min: 50, max: 350, sent: [2, 4], must: [['식히', '물'], ['기침']], starter: '화상: 흐르는 시원한 물로 ~. 목에 걸림: ~', easy: ['화상은 흐르는 물로 식히기를 썼다', '기침할 수 있을 때와 없을 때를 나눴다', '할 일을 차례대로 썼다'], plus: '처음 읽는 사람도 바로 따라 할 수 있는 말로 썼다', d: 0.4 }),
            RWQ('\'하지 말 일\' 칸을 2~3문장으로 쓰세요.', '응급 상황에서 흔히 하지만 하면 안 되는 일을 쓰세요.', ['하지 말 일을 두 가지 이상 썼다', '각각의 까닭을 짧게 붙였다', '겁주는 말 대신 사실로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['않', '말']], starter: '물집을 ~지 않는다. 왜냐하면 ~', plus: '처음 읽는 사람도 바로 따라 할 수 있는 말로 썼다', d: 0.4, more: { conclude: '좋은 매뉴얼은 위급할 때 처음 보는 사람도 바로 따라 할 수 있는 한 장이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 매뉴얼을 붙일 장소와, 그 장소에서 가장 일어날 만한 응급 상황 하나를 쓰세요.' }] },
        notes: '학생이 만든 매뉴얼을 실제로 붙이기 전에 보건 선생님이 내용을 확인한다. 학교 주소·연락처는 교사가 확인한 것만 적게 한다.',
      }),

      M({
        id: 'wrap.kit-check', type: 'wrap', title: '캠프 응급 키트 챙기기',
        method: '응급 키트 목록 고르기', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 넣을 것 4개를 먼저 읽어 주고 함정 2개만 학생이 가린다.', base: '항목 6개에서 넣을 것만 고른다.', challenge: '고른 뒤 \'빼도 되는 것\'과 그 까닭을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"2박 3일 캠프에 응급 키트를 하나 챙겨요. 무엇을 넣고 무엇을 뺄까요?" 목록을 고른 뒤 출구 질문으로 넘어간다. 바늘을 넣은 학생에게 "물집에 쓰려고요? 오늘 물집은 어떻게 하기로 했나요?"라고 묻는다. 비상 연락 카드에는 개인 번호를 수업 중에 적지 않고 집에서 보호자와 채운다고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '캠프 응급 키트', items: [{ id: 'glove', text: '일회용 장갑' }, { id: 'needle', text: '물집 터뜨릴 바늘' }, { id: 'gauze', text: '거즈·붕대' }, { id: 'paste', text: '화상에 바를 된장·치약' }, { id: 'cold', text: '냉찜질 팩' }, { id: 'card', text: '비상 연락 카드(보호자·학교)' }] }, prompt: '캠프 응급 키트에 넣을 것만 표시하세요.', target: { checklist: ['glove', 'gauze', 'cold', 'card'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '화상을 입은 친구에게 가장 먼저 할 일을 고르세요.', options: ['물집을 터뜨린다', '흐르는 시원한 물로 식힌다', '얼음을 바로 댄다'], answer: 1, difficulty: 0.15, explain: '흐르는 시원한 물로 충분히 식혀요. 물집은 그대로 두고, 얼음은 바로 대지 않아요.' },
            { type: 'short', prompt: '키트에서 뺀 것 하나와 뺀 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '응급 키트 점검',
          items: [
            { type: 'check', prompt: '우리 집이나 동아리 응급 키트에 있는지 확인할 것에 표시하세요.', options: ['일회용 장갑', '거즈·붕대', '삼각건', '냉찜질 팩', '비상 연락 카드'] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '화상 물집은 ___ 그대로 둔다.', answer: '터뜨리지 않고' },
          ],
        },
        notes: '개인 상비약은 보호자·보건 선생님이 확인한 것만 넣는다. 비상 연락 카드는 수업 중에 실제 번호를 적지 않는다.',
      }),
      M({
        id: 'wrap.case-order', type: 'wrap', title: '화상 사례 처치 차례',
        method: '사례 카드 바른 처치 차례로 다시 놓기', tool: 'story', minutes: 10,
        levels: { easy: '교사가 첫 장면을 놓아 주고 나머지 장면을 차례로 놓는다.', base: '장면 4장을 바른 처치 차례로 놓는다.', challenge: '장면 4장을 놓은 뒤, 물집을 터뜨렸다면 어떤 결말이 되었을지 짝과 견준다.' },
        wrap: {
          teacher: '"동아리방에서 컵라면 물이 손등에 쏟아졌어요. 오늘 배운 차례로 다시 놓아 볼까요?" 장면을 놓은 뒤 출구 질문으로 넘어간다. 식히기보다 연고 바르기를 먼저 놓은 학생에게 "피부에 열이 남아 있을 때 연고로 덮으면 열은 어디로 갈까요?"라고 묻는다. 넓게 데었거나 얼굴·약품·전기 화상이면 119라는 점을 덧붙인다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: 4, title: '동아리방 화상(가상)', cards: [{ id: 'cover', text: '깨끗한 천으로 덮고 보건실로 간다', motif: 'house' }, { id: 'ring', text: '붓기 전에 반지·시계를 뺀다', motif: 'star' }, { id: 'away', text: '뜨거운 물에서 물러나게 한다', motif: 'cloud' }, { id: 'cool', text: '흐르는 시원한 물로 충분히 식힌다', motif: 'sun' }], shuffle: false }, prompt: '화상 장면을 바른 처치 차례로 놓으세요.', target: { order: ['away', 'cool', 'ring', 'cover'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '바로 119에 신고해야 하는 화상을 고르세요.', options: ['손등이 살짝 빨개졌다', '끓는 물에 넓은 곳을 데었다', '뜨거운 컵을 잡아 잠깐 따끔했다'], answer: 1, difficulty: 0.2, explain: '넓은 곳을 데었거나 얼굴·약품·전기 화상이면 바로 119에 알려요.' },
            { type: 'short', prompt: '오늘 바뀐 내 생각 하나(예: 화상에 된장)를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '상황별 처치 차례',
          items: [
            { type: 'table', prompt: '세 상황의 처치 차례를 쓰세요.', columns: ['상황', '1', '2', '3'], cells: [['화상', '', '', ''], ['기도폐쇄', '', '', ''], ['더위로 생긴 이상', '', '', '']] },
            { type: 'short', prompt: '세 상황에 공통으로 \'바로 119\'가 되는 신호를 쓰세요.' },
          ],
          easy: { note: '숨·의식·넓은 범위를 떠올려 보세요.', items: [{ type: 'short', prompt: '화상 처치 차례를 세 단계로 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 응급 상황 판단 시나리오와 우리 지역 AED 지도 (12학년)
  // ======================================================================================================
  {
    const M = MOD('community-aed', [12]);
    const TOWN = { grid: [6, 4], title: '가상 동네 칸 지도', places: [
      { name: '학교', icon: 'school', at: [1, 1] }, { name: '역', icon: 'station', at: [4, 1] }, { name: '체육관', icon: 'dot', at: [4, 3] }, { name: '공원 산책로', icon: 'park', at: [0, 3] },
      { name: '주민센터', icon: 'office', at: [2, 3] }, { name: '학교 AED', icon: 'hospital', at: [1, 0], legend: 'AED' }, { name: '역 대합실 AED', icon: 'hospital', at: [4, 0], legend: 'AED' }, { name: '주민센터 AED', icon: 'hospital', at: [2, 2], legend: 'AED' }] };
    const SC = Object.assign({}, TOWN, { mode: 'scale', scale: { cell: 100, unit: 'm' } });
    const CROWD = { text: '학교 축제 날 체육관 계단에서 사람들이 밀려 넘어졌다. 한 사람은 쓰러져 반응이 없고, 한 사람은 발목을 잡고 앉아 있고, 한 사람은 놀라 크게 울고 있다.', who: '나', motif: 'house', choices: [
      { id: 'loud', text: '가장 크게 우는 사람에게 먼저 간다', result: '우는 사람을 달래는 동안 쓰러진 사람 곁에는 아무도 없다.', impact: [{ who: '반응 없는 사람', text: '살펴 줄 사람이 없다', tone: -1 }], ending: '소리 내어 우는 사람은 숨을 쉬고 있다. 조용한 사람을 먼저 살핀다.' },
      { id: 'ankle', text: '발목을 잡은 사람을 먼저 부축한다', result: '부축하는 동안 쓰러진 사람의 상태를 모른다.', impact: [{ who: '반응 없는 사람', text: '도움이 늦어진다', tone: -1 }], ending: '눈에 보이는 아픔보다 숨과 의식이 먼저다.' },
      { id: 'check', text: '반응 없는 사람부터 반응과 호흡을 살핀다', result: '숨을 헐떡이듯 이상하게 쉰다.', impact: [{ who: '반응 없는 사람', text: '가장 급한 도움이 시작된다', tone: 1 }],
        next: { text: '둘레에 친구 둘이 서 있다. 나 혼자 모든 일을 할 수는 없다.', choices: [
          { id: 'assign', text: '한 명에게 119, 한 명에게 AED를 콕 집어 부탁하고 압박을 시작한다', result: '세 가지 일이 동시에 시작된다.', impact: [{ who: '반응 없는 사람', text: '생존 사슬이 이어진다', tone: 1 }],
            next: { text: '발목을 잡은 사람이 "나도 좀 봐 줘" 하고 부른다.', choices: [
              { id: 'helper', text: '걸을 수 있는 우는 사람에게 그 곁을 지켜 달라고 부탁하고 압박은 멈추지 않는다', result: '발목을 잡은 사람 곁에도 사람이 생긴다.', impact: [{ who: '모두', text: '각자 곁에 사람이 있다', tone: 1 }], ending: '할 수 있는 사람에게 일을 나누면 모두를 놓치지 않는다.' },
              { id: 'stop', text: '압박을 멈추고 발목을 잡은 사람에게 간다', result: '압박이 멈춘다.', impact: [{ who: '반응 없는 사람', text: '피가 돌지 않는다', tone: -1 }], ending: '가장 급한 일을 멈추면 그동안 사슬이 끊긴다.' }] } },
          { id: 'solo', text: '혼자 119에 전화하고 구급대를 기다린다', result: 'AED도 압박도 시작되지 않는다.', impact: [{ who: '반응 없는 사람', text: '기다리는 동안 피가 돌지 않는다', tone: -1 }], ending: '둘레 사람에게 일을 나누지 않으면 한 사람이 할 수 있는 만큼만 된다.' }] } }] };
    const CROWD_R = [{ id: 'first', text: '반응과 호흡이 없는 사람이 가장 급하다' }, { id: 'split', text: '일을 사람마다 나누면 동시에 할 수 있다' }, { id: 'loudest', text: '가장 크게 우는 사람이 가장 많이 다쳤다', why: '소리를 낼 수 있다는 건 숨을 쉬고 있다는 뜻이에요. 조용한 사람을 먼저 살펴요.' }, { id: 'near', text: '가까이 있는 사람부터 돕는다', why: '거리보다 숨과 의식이 먼저예요.' }];
    const CROWD_X = [{ id: 'keep', text: '가장 급한 일(압박)은 멈추지 않는다' }, { id: 'all', text: '모두에게 똑같이 조금씩 시간을 나눈다', why: '모두에게 조금씩 나누면 가장 급한 사람의 압박이 멈춰요.' }];
    const CAMP = { text: '캠프 저녁 식사 중, 한 친구가 목을 움켜쥐고 말을 못 한다. 옆 친구는 뜨거운 국에 손등이 빨개졌다며 아파한다.', who: '나', motif: 'moon', choices: [
      { id: 'throat', text: '목을 움켜쥔 친구에게 먼저 가 "목에 걸렸어?" 하고 묻는다', result: '고개를 끄덕이지만 기침도 하지 못한다.', impact: [{ who: '목에 걸린 친구', text: '가장 급한 도움이 시작된다', tone: 1 }],
        next: { text: '손등이 빨개진 친구가 "나는 어떡해?" 하고 묻는다.', choices: [
          { id: 'tellwater', text: '"흐르는 물에 식혀" 하고 알려 주고, 다른 친구에게 119와 선생님을 부탁한다', result: '두 친구 모두 할 일이 생긴다.', impact: [{ who: '두 친구', text: '각자 알맞은 도움을 받는다', tone: 1 }], ending: '스스로 할 수 있는 처치는 말로 알려 주고, 가장 급한 일에 손을 쓴다.' },
          { id: 'leave', text: '목에 걸린 친구를 두고 손등 친구를 수돗가로 데려간다', result: '목에 걸린 친구 곁에 아무도 없다.', impact: [{ who: '목에 걸린 친구', text: '숨길이 막힌 채 혼자 남는다', tone: -1 }], ending: '숨이 막힌 사람을 혼자 두지 않는다.' }] } },
      { id: 'burn', text: '아파하는 손등 친구를 먼저 수돗가로 데려간다', result: '목을 움켜쥔 친구는 그대로 앉아 있다.', impact: [{ who: '목에 걸린 친구', text: '숨길이 막힌 채 기다린다', tone: -1 }], ending: '아프다고 말할 수 있는 사람은 숨을 쉬고 있다.' }] };
    const CAMP_R = [{ id: 'breath', text: '숨이 막힌 사람이 가장 급하다' }, { id: 'tell', text: '스스로 할 수 있는 처치는 말로 알려 준다' }, { id: 'pain', text: '더 아프다고 말하는 사람이 먼저다', why: '말을 할 수 있다는 것은 숨길이 열려 있다는 뜻이에요.' }];
    const AED_N = [['학교', 3], ['역', 2], ['체육관', 2], ['주민센터', 1], ['공원', 0]];
    const BAR = (data, extra) => Object.assign({ type: 'bar', mode: 'build', title: '장소별 AED 수(예시 자료)', yLabel: 'AED 수', xLabel: '장소', unit: '대', max: 4, data }, extra || {});

    MODS.push(
      M({
        id: 'intro.aed-pins', type: 'intro', title: '우리 동네 AED는 어디에',
        method: '가상 동네 지도 AED 위치 찍기', tool: 'map', minutes: 7,
        levels: { easy: '교사가 학교와 학교 AED 두 곳만 함께 찍는다.', base: '학교·역·체육관과 역 대합실 AED까지 네 곳을 찍는다.', challenge: '네 곳을 찍은 뒤 AED가 하나도 없는 넓은 곳(공원 둘레)을 찾아 말한다.' },
        intro: {
          teacher: '"우리 동네에서 사람이 쓰러지면 가장 가까운 AED는 어디일까요? 지금 바로 말할 수 있는 사람?" 대부분 대답하지 못하는 것을 확인하고, 가상 동네 지도에서 시연 단추로 장소와 AED를 찍는다. "필요할 때 찾으면 된다"는 말이 나오면 "가슴 압박을 하면서 지도를 찾아볼 수 있을까요?"라고 되묻는다. 오늘은 AED까지의 거리를 재고 부족한 곳을 찾아 제안까지 간다고 밝힌다.',
          student: '가상 동네 칸 지도에서 학교·역·체육관과 AED 자리를 찾아 핀을 꽂아 보세요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '학교' }, { place: '학교 AED' }, { place: '역' }, { place: '역 대합실 AED' }] },
          art: { draw: 'a paper neighborhood map with a school, a train station, a gym and a park, small paper heart-shaped AED tags pinned on a few buildings and one empty green park area', banner: 'AED는 어디에 있을까?', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
        notes: '지도는 가상이다. 실제 동네의 AED는 응급의료포털 AED 찾기로 교사가 확인해 보여 준다.',
      }),
      M({
        id: 'intro.ready-scale', type: 'intro', title: '나의 응급 대응 준비도',
        method: '응급 대응 준비도 눈금 표시', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 눈금을 세 칸(아직·조금·잘)으로 읽어 주고 손으로 표시하게 한다.', base: '다섯 칸 눈금에 내 준비도를 표시하고 그렇게 표시한 이유를 말한다.', challenge: '표시한 뒤 준비도를 한 칸 올릴 계획 하나를 짝에게 말한다.' },
        intro: {
          teacher: '"고등학교 동안 심폐소생술을 배웠어요. 지금 눈앞에서 누가 쓰러지면 나는 얼마나 준비되어 있을까요?" 정답이 없는 눈금이라고 먼저 말하고 시연 단추로 가운데 칸을 짚는다. "한 번 배웠으니 기억난다"는 말이 나오면 "마지막으로 마네킹을 눌러 본 게 언제인가요?"라고 되묻는다. 준비도는 한 번 배워서가 아니라 되풀이해서 오른다는 점을 짚는다.',
          student: '눈앞에서 누가 쓰러진다면 내가 얼마나 준비되어 있는지 눈금에 표시하고, 그 이유를 떠올려 보세요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '등굣길 지하철역에서 누군가 쓰러졌다. 나는 지금 바로 움직일 수 있을까?', feeling: '걱정', steps: 5, scaleLabels: { 1: '아직 못 하겠다', 5: '바로 할 수 있다' }, ask: '나의 응급 대응 준비도는?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper ladder of five steps leaning on a paper station wall, a paper student standing on the middle step, a paper AED box at the top', banner: '나는 몇 칸에 서 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '준비도는 발표시키지 않는다. 표시한 칸은 학생 스스로 보는 것이다.',
      }),

      M({
        id: 'activity.route-dist', type: 'activity', title: 'AED 거리 재기',
        method: '축척으로 AED까지 거리 재고 경로 비교', tool: 'map', minutes: 16,
        levels: { easy: '길 위 칸에 1·2·3… 번호가 보이고, 거리 읽기 글자가 함께 보인다.', base: '칸 번호 없이 두 경로의 거리를 재고 먼저 갈 AED를 고른다.', challenge: '3번 문항이 \'밤늦게 주민센터·학교 문이 닫힌\' 상황으로 바뀌어 열려 있는 AED를 고른다.' },
        activity: {
          title: 'AED 거리 재기', tool: 'map',
          teacher: '"공원 산책로에서 어르신이 쓰러졌어요. 한 사람은 압박을 시작했고, 나는 AED를 가지러 가요. 어디로 뛰어야 할까요?" 칸을 세어 거리를 넣게 하고, 두 경로를 견주게 한다. "지도에서 가까우면 무조건 거기로"라는 학생에게 "그 건물 문이 지금 열려 있을까요?"라고 묻는다. 가까움과 열려 있음을 함께 따져야 한다는 점을 마지막 문항에서 짚는다.',
          task: '가상 동네 지도에서 쓰러진 곳부터 AED까지 거리를 재고 먼저 갈 곳을 골라요.', levels: { easy: { showCells: true, readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '공원 산책로에서 주민센터 AED까지 길을 따라 칸을 세어 거리를 넣으세요.', toolOptions: SC, target: { from: '공원 산책로', to: '주민센터 AED' }, difficulty: 0.25 },
            { prompt: '공원 산책로에서 학교 AED까지 길을 따라 칸을 세어 거리를 넣으세요.', toolOptions: SC, target: { from: '공원 산책로', to: '학교 AED' }, difficulty: 0.3 },
            { prompt: '낮 시간이에요. 두 거리를 견주어 먼저 가지러 갈 AED에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '주민센터 AED' }, difficulty: 0.3,
              levels: { challenge: { prompt: '밤늦게 주민센터와 학교 문이 닫혔어요. 지금 가져올 수 있는 AED에 핀을 꽂고 까닭을 고르세요.', toolOptions: { ask: { q: '그 AED를 고른 까닭은?', choices: ['문이 열려 있어 바로 꺼낼 수 있어서', '지도에서 가장 가까워서', '건물이 가장 커서'], why: ['', '가까워도 문이 닫혀 있으면 꺼낼 수 없어요.', '건물 크기는 AED를 꺼낼 수 있는지와 상관없어요.'] } }, target: { place: '역 대합실 AED', pick: 0 } } } },
            { prompt: '밤에 열려 있는 역 대합실 AED까지 공원 산책로에서 거리를 재어 넣으세요.', toolOptions: SC, target: { from: '공원 산책로', to: '역 대합실 AED' }, difficulty: 0.35, conclude: '가장 가까운 AED가 늘 쓸 수 있는 AED는 아니에요. 가까움과 열려 있는 시간을 함께 알아 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 가상 동네에 AED를 하나 더 둔다면 어디에 두겠는지, 오늘 잰 거리를 근거로 쓰세요.' }] },
        notes: '거리는 가상 지도의 칸 수로 잰 연습 값이다. 실제 AED 접근 기준 시간·거리 수치는 쓰지 않는다.',
      }),
      M({
        id: 'activity.complex-case', type: 'activity', title: '여러 사람이 다쳤을 때',
        method: '여러 명 응급 상황 우선순위 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 2개(누구부터·일 나누기)까지 가서 근거를 고른다.', base: '갈림길 3개까지 가서 결과를 추적하고 근거를 고른다.', challenge: '갈림길 3개를 지나 반대 근거 카드가 더해진 판에서 근거를 하나 더 고른다.' },
        activity: {
          title: '여러 사람이 다쳤을 때', tool: 'dilemma',
          teacher: '"세 사람이 동시에 도움을 바랄 때, 누구에게 먼저 가야 할까요? 가장 크게 우는 사람? 가장 가까운 사람?" 갈림길마다 "그 사람은 지금 숨을 쉬고 있나요?"라고 묻는다. \'가장 크게 우는 사람\'을 고른 학생에게 "크게 울 수 있다는 것은 숨에 대해 무엇을 알려 주나요?"라고 되묻는다. 가장 급한 일은 멈추지 않고, 나머지 일은 할 수 있는 사람에게 나눈다는 점을 짚는다.',
          task: '여러 사람이 도움을 바라는 상황의 갈림길을 따라가며 판단의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('축제 날 체육관 계단에서 모두를 지키는 길을 고르고 근거를 고르세요.', CROWD, [['check', 'assign', 'helper']], CROWD_R, ['first', 'split'], { e: 2, b: 3, chal: { reasons: CROWD_X, good: ['keep'] }, d: 0.45 }),
            EXPLOREQ('고르지 않은 다른 길도 끝까지 가 보고 결과를 견주세요.', CROWD, CROWD_R, ['다른 길에서 누가 도움을 놓쳤는지 확인했다', '판단 기준(숨·의식)을 말할 수 있다'], { d: 0.35 }),
            DILQ('캠프 저녁 식사 중 두 친구를 함께 지키는 길을 고르고 근거를 고르세요.', CAMP, [['throat', 'tellwater']], CAMP_R, ['breath', 'tell'], { e: 1, b: 2, d: 0.4, more: { conclude: '숨과 의식이 먼저, 스스로 할 수 있는 처치는 말로 — 우선순위는 손을 쓸 곳을 정하는 기준이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '여러 사람이 다쳤을 때 누구를 먼저 살필지 정하는 나의 기준을 한 문장으로 쓰세요.' }] },
        notes: '실제 대형 사고·참사 사례를 다루지 않는다. 가상의 장면만 쓰고, 부상 모습을 자세히 묘사하지 않는다.',
      }),
      M({
        id: 'activity.survey-chart', type: 'activity', title: 'AED 조사 그래프',
        method: '장소별 AED 수 막대그래프 만들고 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '장소 3곳의 막대만 만든다.', base: '장소 5곳의 막대를 만들고 가장 적은 곳과 합계를 읽는다.', challenge: '마지막 문항에서 막대만으로 \'부족하다\'고 판단할 때 함께 봐야 할 것을 고른다.' },
        activity: {
          title: 'AED 조사 그래프', tool: 'chart',
          teacher: '"오늘 그래프는 예시 자료예요. 모둠이 실제로 조사했다면 그 값으로 바꿔 넣어도 돼요." 표를 보고 막대를 올리게 한 뒤 가장 적은 곳을 읽게 한다. "AED가 많은 곳이 안전한 곳"이라는 학생에게 "하루에 천 명이 지나는 역의 두 대와, 열 명이 모이는 곳의 두 대는 같을까요?"라고 묻는다. 수만 보지 말고 사람이 얼마나 모이는지, 언제 열려 있는지도 함께 봐야 한다는 점을 짚는다.',
          task: '장소별 AED 수(예시 자료)로 막대그래프를 만들고 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 장소별 AED 수 막대그래프를 완성하세요.', toolOptions: BAR(AED_N, { showTable: true }), target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '표를 보고 장소별 AED 수 막대그래프를 완성하세요(장소 3곳).', toolOptions: BAR(AED_N.slice(0, 3), { showTable: true }), target: { build: true } } } },
            { prompt: '예시 자료에서 AED가 가장 적은 곳을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '장소별 AED 수(예시 자료)', yLabel: 'AED 수', xLabel: '장소', unit: '대', max: 4, data: AED_N, question: '가장 적은 곳은?', choices: AED_N.map((x) => x[0]) }, target: { pick: 4 }, difficulty: 0.2 },
            { prompt: '예시 자료의 AED는 모두 몇 대인가요?', toolOptions: { type: 'bar', mode: 'read', title: '장소별 AED 수(예시 자료)', yLabel: 'AED 수', xLabel: '장소', unit: '대', max: 4, data: AED_N, question: '모두 몇 대?' }, target: { value: 8 }, difficulty: 0.3 },
            { prompt: '막대그래프만으로 \'AED가 부족한 곳\'을 정할 때 함께 봐야 할 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '장소별 AED 수(예시 자료)', yLabel: 'AED 수', xLabel: '장소', unit: '대', max: 4, data: AED_N, question: '함께 봐야 할 것은?', choices: ['그곳에 사람이 얼마나 모이는지', 'AED 상자의 색깔', '장소 이름의 글자 수'], why: ['', '상자 색은 부족한지와 상관없어요.', '이름 길이는 부족한지와 상관없어요.'] }, target: { pick: 0 }, difficulty: 0.4, conclude: '수가 같아도 사람이 많이 모이는 곳, 늦게까지 여는 곳이 더 필요할 수 있어요. 그래프는 판단의 시작이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠이 조사할(또는 조사한) 장소를 정리하세요.', columns: ['장소', 'AED 수', '사람이 모이는 정도', '여는 시간'], cells: [['', '', '', ''], ['', '', '', ''], ['', '', '', '']] }] },
        notes: '그래프 값은 예시 자료다. 실제 조사는 응급의료포털 AED 찾기와 현장 확인으로 하고, 건물 안에 들어갈 때는 관리자 허락을 받는다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: 'AED 가까이 두기 제안서',
        method: 'AED 접근성 개선 제안서 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓰고 기준 3개로 점검한다.', base: '칸마다 기준 4개(문제·근거·실행 가능성·대상)로 점검한다.', challenge: '마지막 칸에 \'예상 반론과 대응\' 기준이 더해진다.' },
        activity: {
          title: 'AED 가까이 두기 제안서', tool: 'rubric-writing',
          teacher: '"오늘 잰 거리와 그래프로, 주민센터나 학교에 낼 제안서를 써요. 불평과 제안은 무엇이 다를까요?" 문제·근거·개선안·실행 가능성의 차례를 먼저 보여 준다. "AED를 많이 사 주세요"라고만 쓴 학생에게 "어디에, 왜 거기에, 누가 관리하나요?"라고 묻는다. 반대하는 사람이 할 말을 미리 생각해 두면 제안이 단단해진다는 점을 짚는다.',
          task: 'AED 접근성을 높이는 제안서를 칸마다 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('문제와 근거를 2~3문장으로 쓰세요.', '가상 동네(또는 우리 동네)에서 AED에 닿기 어려운 곳과 그 근거를 쓰세요.', ['어디가 문제인지 장소를 밝혔다', '오늘 잰 거리나 그래프를 근거로 들었다', '누가 영향을 받는지 썼다', '불평이 아니라 사실로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['m', '거리', '그래프', '대']], starter: '~에서 가장 가까운 AED까지 ~m이다. 그래서 ~', easy: ['어디가 문제인지 장소를 밝혔다', '오늘 잰 거리나 그래프를 근거로 들었다', '누가 영향을 받는지 썼다'], d: 0.35 }),
            RWQ('개선안과 실행 방법을 2~3문장으로 쓰세요.', '무엇을 어디에 어떻게 바꾸자고 제안하는지 쓰세요.', ['바꿀 것을 구체적으로 썼다', '누가 맡을지 썼다', '실제로 할 수 있는 방법이다', '여는 시간·안내 표지까지 생각했다'], { min: 40, max: 300, sent: [2, 3], starter: '~에 AED 안내 표지를 ~', easy: ['바꿀 것을 구체적으로 썼다', '누가 맡을지 썼다', '실제로 할 수 있는 방법이다'], d: 0.4 }),
            RWQ('제안서를 받을 곳과 마무리를 2~3문장으로 쓰세요.', '제안서를 누구에게 낼지, 그분이 왜 들어 주어야 하는지 쓰세요.', ['받을 곳(학교·주민센터 등)을 밝혔다', '받는 사람에게 좋은 점을 썼다', '정중한 말로 끝맺었다'], { min: 40, max: 300, sent: [2, 3], starter: '이 제안을 ~께 드립니다. ~', plus: '예상 반론 하나와 그 대응을 썼다', d: 0.4, more: { conclude: '좋은 제안서는 문제·근거·개선안·실행 방법이 한 줄로 이어지는 글이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 제안에 반대하는 사람이 할 말 하나와 내 대답을 쓰세요.' }] },
        notes: '제안서를 실제로 낼 때는 교사와 함께 받을 기관·절차를 확인한다. 학생 개인 연락처는 쓰지 않는다.',
      }),

      M({
        id: 'wrap.role-web', type: 'wrap', title: '시민으로서 내가 할 일',
        method: '배움·준비·행동·전파 가지에 할 일 넣기', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 배움·행동 두 가지만 함께 채운다.', base: '배움·준비·행동·전파 네 가지에 카드를 단다.', challenge: '네 가지를 채운 뒤 1년 안에 할 일 하나를 날짜와 함께 활동지에 쓴다.' },
        wrap: {
          teacher: '"응급 대응은 전문가만의 일일까요? 오늘 배운 것으로 시민인 내가 할 수 있는 일을 네 가지로 정리해 봐요." 카드를 단 뒤 출구 질문으로 넘어간다. \'전파\' 가지를 비워 둔 학생에게 "가족 중 AED 위치를 아는 사람이 몇 명일까요?"라고 묻는다. 한 번 배운 것은 잊히니 되풀이 계획이 필요하다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '시민의 응급 대응', slots: ['배움', '준비', '행동', '전파'], cards: ['마네킹 실습을 다시 해 본다', '자주 가는 곳의 AED 위치를 봐 둔다', '쓰러진 사람을 보면 콕 집어 부탁한다', '가족에게 AED 위치를 알려 준다', '공식 지침 바뀐 점을 찾아 읽는다', '구급대가 오면 한 일을 넘겨준다'] }, prompt: '내가 할 일 카드를 네 가지 가지에 다세요.', target: { sort: { 배움: ['마네킹 실습을 다시 해 본다', '공식 지침 바뀐 점을 찾아 읽는다'], 준비: ['자주 가는 곳의 AED 위치를 봐 둔다'], 행동: ['쓰러진 사람을 보면 콕 집어 부탁한다', '구급대가 오면 한 일을 넘겨준다'], 전파: ['가족에게 AED 위치를 알려 준다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['AED 위치는 평소에 미리 봐 둔다', '한 번 배우면 계속 기억난다', '여러 명이 다치면 숨과 의식을 먼저 본다'], answer: 1, difficulty: 0.15, explain: '한 번 배운 것은 시간이 지나면 흐려져요. 되풀이해서 연습해야 몸이 기억해요.' },
            { type: 'short', prompt: '이번 달 안에 할 일 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 1년 응급 대응 계획',
          items: [
            { type: 'table', prompt: '네 가지마다 내가 할 일을 쓰세요.', columns: ['가지', '내가 할 일', '언제'], cells: [['배움', '', ''], ['준비', '', ''], ['행동', '', ''], ['전파', '', '']] },
            { type: 'short', prompt: '\'응급 대응은 전문가만의 일\'이라는 말에 오늘 배운 것으로 답하세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.ready-check', type: 'wrap', title: '응급 대응 준비 점검',
        method: '응급 대응 준비 항목 스스로 점검', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 점검 항목 3개를 골라 함께 읽고 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '5개를 표시한 뒤 다음 점검 날짜를 출구 질문에 정한다.' },
        wrap: {
          teacher: '"오늘 처음에 표시한 내 준비도, 지금은 몇 칸일까요? 준비는 마음이 아니라 할 일의 목록이에요." 점검 항목을 스스로 표시하게 한 뒤 출구 질문으로 넘어간다. "다 아는 거라 점검할 필요 없다"는 학생에게 "우리 학교 AED가 정확히 어디인지 지금 말할 수 있나요?"라고 묻는다. 다음 점검 날짜를 정해 두면 준비가 다시 오른다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 응급 대응 준비 점검' }, prompt: '오늘부터 할 준비 항목을 스스로 표시하세요.', target: { selfCheck: ['휴대전화에 보호자·학교 연락처를 저장해 둔다', '학교와 집 근처 AED 위치를 확인한다', '심폐소생술 차례를 소리 내어 말해 본다', '가족에게 오늘 배운 것을 한 가지 알려 준다', '마네킹 실습을 다시 할 기회를 찾는다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '준비도를 오래 지키는 방법으로 가장 알맞은 것을 고르세요.', options: ['한 번 크게 배우고 끝낸다', '날짜를 정해 되풀이해 점검한다', '필요할 때 그때 찾아본다'], answer: 1, difficulty: 0.15, explain: '되풀이해서 점검하고 연습해야 준비도가 유지돼요.' },
            { type: 'short', prompt: '다음 점검 날짜와 그날 할 일 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 응급 대응 준비',
          items: [
            { type: 'check', prompt: '이번 주에 할 것에 표시하세요.', options: ['AED 위치 확인하기', '연락처 저장하기', '심폐소생술 차례 말해 보기', '가족에게 알려 주기'] },
            { type: 'short', prompt: '오늘 처음과 지금, 내 준비도가 어떻게 달라졌는지 한 문장으로 쓰세요.' },
          ],
        },
        notes: '연락처를 수업 중에 화면이나 활동지에 적지 않는다. 저장은 각자 휴대전화에서 한다.',
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
