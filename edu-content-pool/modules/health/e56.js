/* 창체 법정교육 보건 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 health 초5-6.
 * 근거: 학교보건법 제9조·제9조의2(보건교육 연 17차시 — 학교급별 1개 학년 이상, 체계도는 5학년에 배정), 제9조(흡연·음주·약물 오남용 예방은 보건교육 내용),
 *       보건교육 초 주제(개인위생·손씻기, 감염병 예방, 건강한 식생활, 응급처치 기초), 아동안전교육 '감염병·보건위생' — sources/changche/research-mandatory.md §1·§2.
 *       주제 세부(몸·마음·관계 건강, 예방접종·건강검사, 잠·신체 활동, 눈·이, 마음 건강, 건강 정보, 이용할 곳)는 근거 파일에 없는 체계도 재료(미검증)다.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길 상황(dilemma)·기준표 글쓰기(rubric-writing).
 *   몸·음식을 좋다/나쁘다로 낙인찍지 않는다. 체형·외모·몸무게를 평가하지 않고 다이어트를 권하지 않는다.
 *   학생 자신의 건강 상태·마음 상태·습관·가정 형편을 묻거나 채점하지 않는다 — 판단·채점은 가상 인물(가명 한두 글자)로 한다. 스스로 점검표는 '해 볼 일' 표시이고 정답이 없다.
 *   체계도가 '내 상태를 눈금에 표시'로 적은 도입(dimensions.intro.well-scale·mind-stress.intro.signal-scale·health-plan.intro.habit-scale)과
 *   '스스로 매긴 점수 그래프'(dimensions.activity.balance-chart)는 가상 인물의 눈금·점수로 바꾸었다.
 *   수면·운동 권장 수치, 접종 일정·검사 기준, 질병 수치는 쓰지 않는다. 그래프·기록·시각·타이머 값은 모두 가상 값이거나 '우리 반 연습값'이다(화면에 밝힌다).
 *   흡연·음주·약을 쓰는 방법은 묘사하지 않는다. 약 이름·성분·용량은 쓰지 않는다. 마음 건강은 대처와 도움 요청만 다룬다(자해·자살 내용 없음).
 *   겹치지 않게: 성교육(gender/e56.js)의 사춘기 몸 변화는 다루지 않는다. 안전교육 응급처치(saf-firstaid/e56.js — 심폐소생술·기도막힘·삠·데임)와
 *   약물(saf-drug/e56.js — 전자담배 향, 명절·생일 술자리, 카페인 음료, 약 겹쳐 먹기, 비밀 배송 광고)의 장면을 되풀이하지 않는다.
 * 주제 9개(5·6학년 공통), 계획 모듈 72개 전부. 추천 조합은 체계도 sequences(5학년 17차시).
 *
 * 사람 확인: 근거 파일에는 법정 항목 제목만 있어, 아래 건강 사실 문장은 공식 안내처에서 확인해야 한다(교사·보건 선생님이 최신 안내로 확인).
 *   - dimensions 전체: 건강을 몸·마음·관계(사회적) 건강으로 나누는 틀과 '서로 영향을 준다' — 보건 교과서·한국건강증진개발원.
 *   - infection.intro.spread-story·activity.route-web·activity.school-map·wrap.prevent-check·wrap.rule-write: 감염 경로(손·기침·비말·음식·물건)와
 *     예방 행동(손 씻기, 옷소매로 가리는 기침 예절, 물건 따로 쓰기, 아플 때 쉬기) — 질병관리청.
 *   - infection.intro.defense-body: '피부·코(코털·콧물)·눈물이 병균을 막는다' — 질병관리청 국가건강정보포털·보건 교과서.
 *   - infection.activity.wash-timer: 손 씻기 여섯 단계(손바닥·손등·손가락 사이·엄지·손톱 밑·손목) — 질병관리청. 씻는 시간은 화면에 쓰지 않았다(교사가 최신 지침으로 안내).
 *   - infection.activity.sick-dilemma: '열이 나면 등교하지 않고 학교·보호자에게 알리고 쉰다'는 대처 — 질병관리청·교육부 학교 감염병 예방 안내(학교마다 등교 기준 다름).
 *   - vaccine-checkup 전체: '예방접종은 아프기 전에 맞아 몸이 병균을 기억하게 한다', '건강검사(시력·청력·구강 등)로 일찍 알아차린다',
 *     '결과는 보호자와 함께 확인하고 필요하면 병원·치과에서 다시 확인한다', '문진표' 절차 — 질병관리청(예방접종도우미)·교육부 학생 건강검사 안내.
 *     기록 카드의 나이·검사 항목은 예시이고 실제 일정이 아니다(보건 선생님 안내).
 *   - sleep-activity.intro.active-body·activity.bedtime-branch·intro.tired-case: '달릴 때 심장이 빨리 뛰고 폐가 숨을 많이 쉰다', '자기 전 화면·늦은 잠은
 *     다음 날 피곤하게 할 수 있다' — 보건 교과서·국가건강정보포털. 잠·운동 시간 권장값은 쓰지 않았다.
 *   - eye-dental 전체: '가까운 화면을 오래 보면 눈이 피로하다, 쉬면서 먼 곳을 보면 도움이 된다', '밝기가 알맞은 자리', '충치는 음식 찌꺼기 → 세균 → 산 → 이가 상함',
 *     '이를 구역으로 나누어 닦는다(바깥쪽·안쪽·씹는 면)', '끈적한 단 간식을 오래 물고 있으면 이에 부담' — 보건복지부·대한치과의사협회·대한안과학회.
 *     칫솔질 타이머 값은 '우리 반 연습값'이다.
 *   - mind-stress 전체: 스트레스 몸 신호(어깨 뭉침·배 아픔·가슴 두근거림), 대처(숨 고르기·몸 풀기·좋은 기억·말하기), 도움 받을 곳(상담실·보건실·담임)
 *     — 교육부 학생정신건강 안내·보건 교과서. 학교마다 상담실 이름·자리가 다르다.
 *   - smoke-alcohol-drug.intro.harm-body: '흡연은 폐, 음주는 뇌(판단)·간에 영향' — 질병관리청 국가건강정보포털. activity.medicine-sort: '약은 설명서대로 정해진 만큼,
 *     남의 약을 먹지 않는다, 어른과 확인한다' — 식품의약품안전처(의약품안전나라). activity.ad-chart 표는 가상 자료.
 *   - health-info 전체: 정보 확인 순서(누가 말했나 → 근거 → 공식 기관·어른께 묻기), 눈금을 자른 그래프의 과장 — 한국언론진흥재단 미디어 리터러시 자료·질병관리청.
 *   - health-plan 전체: '가벼운 일은 보건실, 계속되는 열·통증은 병원, 약 쓰는 법은 약국, 예방접종·건강 상담은 보건소' 역할 구분, 밤·휴일에 문 닫는 곳 —
 *     보건복지부·지역 보건소. 동네 지도는 가상이다.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('infection')('intro.spread-story', {...}) → id·type·topic·grades 를 채운다(5·6학년 공통 주제)
  const mk = (topic, grades = [5, 6]) => (suffix, o) => Object.assign({
    id: `health.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'health', band: '초5-6', topic: `health.e56.${topic}`, grades,
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const EX = (tool, it) => ({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const mix = (list) => (list.length === 2 ? [list[1], list[0]] : [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null));
  const inter = (slots, g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };

  // ---- 카드 판 문항 ----
  // 나누기(mindmap·sortboard·kitchen sort): groups = { 칸: [카드…] }. 쉬움 = easySlots 칸만(칸마다 앞 easy장), 도전 = extra 카드 + 함정 카드
  const SORT = (prompt, { slots, groups, easySlots, easy = 2, extra = {}, traps = [], topic, mode }, d, more) => {
    const es = easySlots || slots;
    const ez = Object.fromEntries(es.map((s) => [s, groups[s].slice(0, easy)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const fullCards = inter(slots, full); traps.forEach((t, i) => fullCards.splice(Math.min(fullCards.length, 1 + i * 3), 0, t));
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const base = Object.assign(mode ? { mode } : {}, { slots, cards: inter(slots, groups) }, topic ? { topic } : {});
    const lv = { easy: { prompt: `${cut(prompt)}(칸 ${es.length}개·카드 ${count(ez)}장).`, toolOptions: { slots: es, cards: inter(es, ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 차례(story·timeline·kitchen order): steps = 바른 차례. easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 카드
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode, title, axis } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const ez = easy.map((i) => cards[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: easy.map((i) => steps[i]) } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, title ? { title } : {}, axis ? { axis } : {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 짝 잇기(match): pairs = [[칸 글, 맞는 카드 글]…]. 쉬움 = 앞 easy쌍, 도전 = more 쌍 + 함정 카드 extra
  const MATCH = (prompt, { topic, pairs, easy = 2, more = [], extra = [] }, d, add) => {
    const rot = (list) => (list.length > 2 ? [...list.slice(1), list[0]] : list.slice().reverse());
    const board = (ps, ex) => ({ toolOptions: Object.assign({ mode: 'match', slots: ps.map((p) => p[0]), cards: rot([...ps.map((p) => p[1]), ...ex]) }, topic ? { topic } : {}), target: { match: Object.fromEntries(ps.map((p) => [p[0], p[1]])) } });
    const base = board(pairs, []);
    const ez = board(pairs.slice(0, easy), []);
    const lv = { easy: { prompt: `${cut(prompt)}(짝 ${easy}개).`, toolOptions: ez.toolOptions, target: ez.target } };
    if (more.length || extra.length) { const ch = board([...pairs, ...more], extra); lv.challenge = { prompt: `${cut(prompt)}(짝 ${pairs.length + more.length}개${extra.length ? ', 남는 카드도 있어요' : ''}).`, toolOptions: ch.toolOptions, target: ch.target }; }
    return Object.assign({ prompt, toolOptions: base.toolOptions, target: base.target, difficulty: d, levels: lv }, add);
  };
  // 골라 담기(pick): good = 담을 카드, bad = 남길 카드. 쉬움 = good 앞 easy장 + bad 앞 easyBad장, 도전 = moreGood·moreBad 더함
  const PICK = (prompt, { basket, topic, good, bad, easy = 2, easyBad = 1, moreGood = [], moreBad = [] }, d, add) => {
    const mx = (g, b) => { const out = []; const n = Math.max(g.length, b.length); for (let i = 0; i < n; i++) { if (b[i]) out.push(b[i]); if (g[i]) out.push(g[i]); } return out; };
    const opt = (g, b) => Object.assign({ mode: 'pick', basket, cards: mx(g, b) }, topic ? { topic } : {});
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${easy + easyBad}장).`, toolOptions: opt(good.slice(0, easy), bad.slice(0, easyBad)), target: { pick: good.slice(0, easy) } } };
    if (moreGood.length || moreBad.length) { const g = [...good, ...moreGood]; const b = [...bad, ...moreBad]; lv.challenge = { prompt: `${cut(prompt)}(카드 ${g.length + b.length}장).`, toolOptions: opt(g, b), target: { pick: g } }; }
    return Object.assign({ prompt, toolOptions: opt(good, bad), target: { pick: good }, difficulty: d, levels: lv }, add);
  };

  // ---- 갈림길(dilemma) ----
  // steps[i] = { text, ask?, motif?, good: [id, 글, 결과, [[누구, 영향, tone]…]], bad: [id, 글, 결과, 틀렸을 때 한 문장, [[…]], 끝 글?] }
  const imp = (list) => (list || []).map(([who, text, tone]) => ({ who, text, tone }));
  const TREE = (steps, depth, ending) => {
    const build = (i) => {
      const s = steps[i];
      const good = { id: s.good[0], text: s.good[1], result: s.good[2], impact: imp(s.good[3]) };
      if (i === depth - 1) good.ending = ending; else good.next = build(i + 1);
      const bad = { id: s.bad[0], text: s.bad[1], result: s.bad[2], why: s.bad[3], impact: imp(s.bad[4]), ending: s.bad[5] || '다른 길을 골랐다면 어땠을지 되돌아가 견주어 봐요.' };
      return { text: s.text, ask: s.ask || '어떻게 할까요?', motif: s.motif || 'house', choices: i % 2 ? [good, bad] : [bad, good] };
    };
    return build(0);
  };
  const goodPath = (steps, n) => steps.slice(0, n).map((s) => s.good[0]);
  // 갈림길 활동 문항 셋: ① 알맞은 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude, aim = '건강을 지키는 선택' }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 ${aim}을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 ${aim}을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: [good[0]], some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 끝까지 가고, 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) ----
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 3개, 도전 = 기준 3개 + 고쳐 쓰기(꼭 넣을 낱말)
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title }, d, more) => ({
    prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: { selfCheck: crit.slice(0, 3), chars }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] } },
      challenge: { prompt: `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: { selfCheck: [...crit.slice(0, 3), '한 군데 이상 고쳐 썼다'], chars: [chars[0] + 10, chars[1]], mustInclude: must } },
    },
    ...more,
  });
  const RUBX = (prompt, spec) => { const r = RUB(prompt, spec, 0.2); return { type: 'tool', tool: 'rubric-writing', options: r.toolOptions, prompt, target: r.target, difficulty: 0.2, levels: r.levels }; };
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 2, base = 3 } = {}, d, more) => {
    const it = (list) => list.map((t) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
    const mixIn = (g) => { const out = g.slice(); traps.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out; };
    const ids = (g) => g.map((t) => `k${good.indexOf(t)}`);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(mixIn(good.slice(0, easy))) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸).`, toolOptions: { items: it(mixIn(good)) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: it(mixIn(good.slice(0, base))) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
  };
  const CHKX = (prompt, title, good, traps, n) => { const r = CHK(prompt, title, good, traps, n, 0.15); return { type: 'tool', tool: 'kitchen', options: r.toolOptions, prompt, target: r.target, difficulty: 0.15, levels: r.levels }; };
  // 스스로 점검표(kitchen checklist selfCheck) — '해 볼 일' 표시, 정답 없음. 쉬움 easy칸, 기본 base칸, 도전 전부
  const SELFK = (title, list, prompt, { easy = 2, base = 3 } = {}) => {
    const it = (l) => l.map((t, i) => ({ id: `c${i + 1}`, text: t }));
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(list.slice(0, easy)) }, target: { selfCheck: true } } };
    if (list.length > base) lv.challenge = { prompt: `${cut(prompt)}(${list.length}칸).`, toolOptions: { items: it(list) }, target: { selfCheck: true } };
    return { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items: it(list.slice(0, base)) }, prompt, target: { selfCheck: true }, difficulty: 0.1, levels: lv };
  };
  // 생각 그물 정리(mindmap sort) 출구 — SORT 와 같은 단계
  const WEBX = (prompt, spec) => EX('mindmap', SORT(prompt, spec, 0.15));
  // 칸 지도 핀 + 보기(map pin + ask): 쉬움 = 두 곳만·이름 읽기, 도전 = 이름 숨김
  const MAPQ = (base, place, prompt, q, choices, ans, why, d, more) => Object.assign({
    prompt, toolOptions: Object.assign({}, base, { ask: { q, choices, why } }), target: { place, pick: ans }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(곳 두 군데).`, toolOptions: Object.assign({}, base, { places: base.places.filter((p) => p.name === place || p.name === base.places.find((x) => x.name !== place).name), ask: { q, choices, why }, readout: true }), target: { place, pick: ans } },
      challenge: { prompt: `${cut(prompt)}(이름이 숨겨져 있어요).`, toolOptions: Object.assign({}, base, { names: false, ask: { q, choices, why } }), target: { place, pick: ans } },
    } }, more);
  // 타이머 차례 카드(timer order): 쉬움 = 앞 easy장
  const TORD = (prompt, title, steps, easy = 3, d = 0.2, more) => Object.assign({
    prompt, toolOptions: { title, cards: mix(steps) }, target: { order: steps }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(카드 ${easy}장).`, toolOptions: { cards: mix(steps.slice(0, easy)) }, target: { order: steps.slice(0, easy) } } },
  }, more);

  // ======== 몸·마음·관계 건강 (학교보건법 제9조·제9조의2 보건교육, 체계도 재료) ========
  {
    const X = mk('dimensions');
    const DAY = [
      { id: 'd1', text: '아침밥을 먹어요', motif: 'sun' }, { id: 'd2', text: '친구와 인사해요', motif: 'flower' },
      { id: 'd3', text: '쉬는 시간에 뛰어요', motif: 'tree' }, { id: 'd4', text: '좋아하는 그림 그리기', motif: 'star' },
      { id: 'd5', text: '가족과 저녁 이야기', motif: 'house' }, { id: 'd6', text: '정한 때에 잠자리', motif: 'moon' },
    ];
    const SCORE = [['몸', 3], ['마음', 4], ['관계', 2]];
    M.push(
      X('intro.day-story', {
        title: '하람이의 하루 장면 놓기', method: '내 하루 장면 차례로 놓기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 4장(아침밥 → 인사 → 쉬는 시간 → 잠자리)을 차례로 놓는 모습을 보인다.', base: '장면 6장을 차례로 놓고 건강과 이어진 장면을 찾는다.', challenge: '장면마다 몸·마음·관계 가운데 무엇과 이어지는지 말한다.' },
        intro: {
          teacher: '"가상 친구 하람이의 하루예요. 등교부터 잠들 때까지 장면을 차례대로 놓아 볼까요?" 시연 단추로 장면 여섯 장이 놓이는 모습을 보인다. "건강은 아프지 않은 몸만 뜻해요"라는 말에는 "친구와 인사하는 장면, 좋아하는 그림을 그리는 장면도 건강과 이어져 있을까요? 오늘은 몸·마음·관계 건강을 배워요"라고 되묻는다. 우리 반 친구의 하루는 묻지 않는다.',
          student: '하람이의 하루 장면 가운데 몸·마음·관계 건강과 이어진 장면을 하나씩 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 6, cards: mix(DAY), title: '하람이의 하루(가상)' }, sequence: [{ order: ['d1', 'd2', 'd3', 'd4'] }, { order: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6'] }] },
          art: art('a row of six small paper scenes of one child\'s day from sunrise breakfast to a moonlit bed, linked by a paper ribbon', '하루 속 건강 찾기', 'sun', 'peach'),
        },
        notes: '하람은 지어낸 인물이다.',
      }),
      X('intro.well-scale', {
        title: '하람이의 건강 눈금 읽기', method: '오늘 나의 건강 눈금', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 몸 눈금 하나만 보이며 하람이의 상황을 읽는다.', base: '몸·마음·관계 세 상황을 차례로 읽으며 눈금이 어디쯤일지 함께 정한다.', challenge: '가장 낮은 눈금의 까닭을 하람이의 상황에서 찾아 말한다.' },
        intro: {
          teacher: '"가상 친구 하람이는 어젯밤 늦게 자서 몸이 무겁대요. 몸 건강 눈금은 어디쯤일까요?" 시연 단추로 눈금이 2에 놓이는 모습을 보인다. 이어 "모둠 발표를 잘해 뿌듯해요(마음)", "짝과 아직 말을 안 해요(관계)"를 말로 읽고 눈금을 짐작하게 한다. "눈금이 낮으면 나쁜 사람이에요"라는 말에는 "눈금은 지금의 상태일 뿐이에요. 무엇을 하면 올라갈지 찾는 데 써요"라고 말해 준다. 학생 자신의 눈금은 묻지 않는다.',
          student: '하람이의 세 눈금 가운데 가장 낮은 것을 고르고 그 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '하람: 어젯밤 늦게 자서 몸이 무거워요', feeling: '걱정', steps: 5, scaleLabels: { 1: '아주 낮음', 5: '아주 좋음' } }, sequence: [{ level: 2 }] },
          art: art('three paper thermometers labelled body, mind and friends standing side by side, one of them low, with a sleepy paper child beside them', '하람이의 건강 눈금', 'cloud', 'sky'),
        },
        notes: '체계도는 \'오늘 나의 상태\'를 표시하게 적었으나, 학생 건강 상태를 묻지 않도록 가상 인물의 눈금으로 바꾸었다.',
      }),
      X('activity.three-sort', {
        title: '하루 행동 세 칸 나누기', method: '하루 행동 세 칸 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '바구니 2개(몸·마음)에 카드를 나눈다.', base: '바구니 3개(몸·마음·관계)에 카드를 나눈다.', challenge: '카드가 늘어나고, 셋째 문항에서 두 칸에 걸칠 수 있는 카드의 근거를 말한다.' },
        activity: {
          title: '몸·마음·관계 바구니', tool: 'sortboard',
          teacher: '"\'아침 먹기\'는 어느 건강과 가장 가까울까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "친구와 화해하는 건 건강과 상관없어요"라는 학생에게 "다툰 채로 있으면 마음과 몸은 어떨까요? 관계도 건강이에요"라고 말해 준다. 카드 한 장은 한 바구니에만 넣고, 다른 바구니와도 이어지는 카드는 셋째 문항에서 말로 근거를 대게 한다.',
          task: '하루 행동 카드를 몸·마음·관계 건강 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('하람이의 하루 행동 카드를 바구니에 나누어요.', { slots: ['몸 건강', '마음 건강', '관계 건강'], easySlots: ['몸 건강', '마음 건강'],
              groups: { '몸 건강': ['아침밥 먹기', '정한 때에 자기'], '마음 건강': ['좋아하는 일 하기', '속상함 말로 풀기'], '관계 건강': ['친구와 화해하기', '먼저 인사하기'] },
              extra: { '몸 건강': ['쉬는 시간에 걷기'], '관계 건강': ['도움 청하기'] }, traps: ['아무것도 안 하기'] }, 0.2),
            SORT('주말 행동 카드를 바구니에 나누어요.', { slots: ['몸 건강', '마음 건강', '관계 건강'], easySlots: ['몸 건강', '관계 건강'], easy: 1,
              groups: { '몸 건강': ['자전거 타기', '물 자주 마시기'], '마음 건강': ['일기 쓰기', '음악 듣고 쉬기'], '관계 건강': ['가족과 산책', '친구 생일 축하'] } }, 0.25, { conclude: '건강은 몸만이 아니에요. 마음을 돌보고 사람들과 잘 지내는 것도 건강이에요.' }),
            { prompt: '\'가족과 산책\'처럼 두 칸에 걸치는 카드 하나를 골라 근거를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '건강마다 하루 행동을 하나씩 써요.', columns: ['몸 건강', '마음 건강', '관계 건강'], cells: [['', '', '']] }] },
      }),
      X('activity.balance-chart', {
        title: '하람이의 세 가지 건강 그래프', method: '세 가지 건강 막대그래프', tool: 'chart', minutes: 14,
        levels: { easy: '막대 끝에 값이 보이고, 막대 3개를 완성한다.', base: '막대를 완성하고 가장 낮은 건강을 찾는다.', challenge: '두 날 그래프를 견주어 오른 까닭을 고른다.' },
        activity: {
          title: '가상 점수 막대그래프', tool: 'chart',
          teacher: '"하람이가 오늘 세 가지 건강에 스스로 매긴 점수예요(가상 자료). 막대로 나타내 볼까요?" 막대 끝을 눈금에 맞추게 한다. "관계 점수가 낮으니 하람이는 친구가 없어요"라는 학생에게 "점수는 오늘의 느낌일 뿐이에요. 무슨 일이 있었는지 알아보고 도울 방법을 찾아요"라고 말해 준다. 셋째 문항에서는 월요일과 금요일 그래프를 견주게 한다. 학생 자신의 점수는 묻지 않는다.',
          task: '가상 친구 하람이의 건강 점수로 막대그래프를 완성하고, 낮은 것과 바뀐 까닭을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '하람이가 매긴 세 가지 건강 점수로 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '하람이의 오늘 건강 점수(가상)', unit: '점', xLabel: '건강', yLabel: '점수', data: SCORE, max: 5, scale: 1 }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '하람이의 마음·관계 점수 막대를 완성해요(가상 자료).', toolOptions: { given: [0] } } } },
            { prompt: '하람이의 세 가지 건강 가운데 가장 낮은 것은?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '하람이의 오늘 건강 점수(가상)', unit: '점', data: SCORE, max: 5, scale: 1, choices: ['몸', '마음', '관계'], question: '가장 낮은 건강은?' }, target: { pick: 2 }, difficulty: 0.15 },
            { prompt: '월요일 2점이던 관계 점수가 금요일 4점이 된 까닭으로 알맞은 것을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '하람이의 관계 건강 점수(가상)', unit: '점', data: [['월요일', 2], ['금요일', 4]], max: 5, scale: 1, choices: ['짝과 먼저 화해했다', '혼자 숙제를 미뤘다', '늦게까지 게임했다'], question: '오른 까닭은?', why: ['', '숙제를 미룬 일은 관계 점수와 이어지기 어려워요.', '늦게 자면 몸이 먼저 지쳐요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '그래프로 낮은 건강을 찾으면, 무엇을 하면 오를지 계획할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '하람이 그래프(가상)에서 가장 높은 건강은?', options: ['몸', '마음', '관계'], answer: '마음' }] },
        notes: '체계도는 \'스스로 매긴 점수\'로 그래프를 그리게 적었으나, 학생 상태를 채점하지 않도록 가상 인물의 점수로 바꾸었다.',
      }),
      X('activity.linked-case', {
        title: '늦게 잔 날 생긴 다툼', method: '하나가 흔들리면 생기는 일', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(아침 짜증)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(사과하기)을 지나 근거를 고른다.', challenge: '갈림 3번(잠자리)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 늦게 잔 다음 날', tool: 'dilemma',
          teacher: '"하람이가 늦게 자서 아침부터 피곤해요. 몸이 피곤하면 마음과 관계는 어떻게 될까요?" 고를 때마다 결과 칸의 \'누구에게 어떤 영향\'을 읽게 한다. "몸이 피곤한 거랑 친구랑 다투는 건 상관없어요"라는 학생에게 "피곤할 때 작은 장난에도 짜증이 더 나지 않나요? 세 건강은 서로 이어져 있어요"라고 말해 준다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '늦게 잔 다음 날',
            steps: [
              { text: '늦게 자서 몸이 무거운 아침, 짝이 장난으로 필통을 툭 쳐요.', motif: 'cloud',
                good: ['say', '"오늘 피곤해서 그래, 그만해 줄래?"라고 말한다', '짝이 "미안, 몰랐어" 하고 멈춰요.', [['하람', '마음이 가라앉아요', 1], ['짝', '까닭을 알아요', 1]]],
                bad: ['yell', '짜증을 내며 크게 소리친다', '짝도 화가 나서 말을 안 해요.', '피곤한 몸이 마음과 관계까지 흔들었어요.', [['짝', '속상해요', -1], ['하람', '더 지쳐요', -1]]] },
              { text: '점심시간, 짝과 아직 서먹해요. 마음이 계속 불편해요.', motif: 'house',
                good: ['sorry', '"아침엔 내가 예민했어"라고 먼저 말을 건넨다', '함께 웃으며 급식을 먹어요.', [['짝', '마음이 풀려요', 1], ['하람', '편안해요', 1]]],
                bad: ['ignore', '모른 척하고 혼자 먹는다', '오후 내내 기분이 가라앉아요.', '불편한 관계는 마음과 몸을 함께 지치게 해요.', [['하람', '오후가 힘들어요', -1]]] },
              { text: '저녁이 되었어요. 내일은 어떤 하루를 보내고 싶나요?', motif: 'moon',
                good: ['sleep', '화면을 끄고 정한 때에 잠자리에 든다', '다음 날 아침이 가뿐해요.', [['하람', '몸이 가벼워요', 1]]],
                bad: ['game', '늦게까지 게임을 하다 잔다', '다음 날도 피곤한 아침이 반복돼요.', '잠이 모자라면 다음 날 몸·마음·관계가 다시 흔들려요.', [['하람', '또 피곤해요', -1]]] },
            ],
            ending: '몸을 쉬고, 마음을 말하고, 관계를 회복하니 세 건강이 함께 좋아졌어요.',
            reasons: [{ id: 'link', text: '몸·마음·관계 건강은 서로 영향을 준다' }, { id: 'talk', text: '마음을 말로 하면 관계가 회복된다' }, { id: 'body', text: '건강은 몸만 챙기면 된다', why: '마음과 관계도 건강이에요.' }, { id: 'alone', text: '불편해도 혼자 참으면 해결된다', why: '말하지 않으면 오해가 오래 남아요.' }],
            good: ['link', 'talk'], aim: '세 건강을 지키는 선택',
            talk: '모둠에서 "몸이 피곤할 때 마음과 관계를 지키는 방법"을 하나씩 말해요.',
            conclude: '하나가 흔들리면 다른 건강도 흔들려요. 쉬고, 말하고, 다가가면 함께 회복돼요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '몸이 피곤할 때 친구와 다투지 않으려면 어떻게 말할지 써요.' }] },
        notes: '하람과 짝의 이야기는 지어낸 것이다. 반에서 있었던 다툼을 예로 들지 않는다.',
      }),
      X('wrap.three-web', {
        title: '세 가지 건강 생각 그물', method: '세 가지 건강 생각 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(몸·마음)에 행동 카드를 잇는다.', base: '가지 3개(몸·마음·관계)에 행동 카드를 잇는다.', challenge: '카드가 늘고, 가지 사이를 잇는 행동(가족과 산책 등)을 말로 짚는다.' },
        wrap: {
          teacher: '"오늘 배운 세 가지 건강을 그물로 정리해 볼까요?" 가지마다 카드를 붙이고, 도전에서는 두 가지에 함께 이어지는 행동을 찾아 말로 잇게 한다. "마음은 몸과 상관없어요"라는 말이 나오면 "걱정이 많을 때 배가 아팠던 이야기를 들은 적 있나요?"라고 되묻는다.',
          exitTicket: [
            WEBX('"건강" 생각 그물의 가지에 행동 카드를 붙여요.', { topic: '건강', slots: ['몸', '마음', '관계'], easySlots: ['몸', '마음'], easy: 1,
              groups: { 몸: ['골고루 먹기', '푹 자기'], 마음: ['기분 말하기', '좋아하는 일'], 관계: ['고맙다고 말하기', '도움 주고받기'] }, extra: { 몸: ['손 씻기'], 마음: ['숨 고르기'] }, traps: ['참기만 하기'] }),
            { type: 'choice', prompt: '세 가지 건강에 대한 말로 알맞은 것은?', options: ['몸만 건강하면 된다', '셋은 서로 영향을 준다', '마음은 몸과 상관없다'], answer: 1, difficulty: 0.15, explain: '몸·마음·관계는 서로 영향을 주고받아요.' },
            { type: 'short', prompt: '두 가지 건강에 함께 도움이 되는 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '세 가지 건강',
          items: [
            { type: 'table', prompt: '건강마다 도움이 되는 행동을 써요.', columns: ['몸', '마음', '관계'], cells: [['', '', '']] },
            { type: 'short', prompt: '세 가지 건강이 서로 영향을 주는 예를 한 문장으로 써요.' },
          ],
        },
      }),
      X('wrap.self-check', {
        title: '세 가지 건강 해 볼 일 점검', method: '세 가지 건강 자기 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '해 볼 일 3칸 가운데 이번 주 해 볼 것에 표시한다.', base: '해 볼 일 6칸(몸·마음·관계 두 칸씩)에 표시한다.', challenge: '표시한 것 가운데 이번 주에 가장 먼저 바꿀 것 하나를 쓴다.' },
        wrap: {
          teacher: '"이번 주에 세 가지 건강을 위해 해 볼 일에 스스로 표시해 볼까요? 정답은 없고 친구와 견주지 않아요." 표시가 적은 학생에게도 "하나만 골라도 충분해요. 작게 시작해요"라고 말해 준다. 지금 내 건강이 어떤지는 쓰지 않고, \'해 볼 일\'만 고른다고 미리 밝힌다.',
          exitTicket: [
            SELFK('이번 주 해 볼 일', ['물 자주 마시기', '기분을 말로 하기', '먼저 인사하기', '정한 때에 자기', '좋아하는 일 하기', '고맙다고 말하기'], '이번 주에 해 볼 일에 스스로 표시해요(정답 없음).', { easy: 3, base: 6 }),
            { type: 'choice', prompt: '해 볼 일을 정할 때 알맞은 방법은?', options: ['한꺼번에 다 바꾼다', '작은 것 하나부터 한다', '친구 것을 따라 한다'], answer: 1, difficulty: 0.15, explain: '작게 시작해야 오래 지킬 수 있어요.' },
            { type: 'short', prompt: '이번 주에 가장 먼저 해 볼 일 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '이번 주 해 볼 일',
          items: [
            { type: 'check', prompt: '이번 주 해 볼 일에 표시해요.', options: ['물 자주 마시기', '기분을 말로 하기', '먼저 인사하기'] },
            { type: 'short', prompt: '해 볼 일을 언제 할지 써요.' },
          ],
        },
        notes: '학생의 현재 건강 상태를 점검하지 않고, 앞으로 해 볼 일만 스스로 표시한다(정답 없음·제출해도 채점하지 않음).',
      }),
    );
  }

  // ======== 감염 경로와 예방 행동 (학교보건법 제9조, 보건교육 초 감염병 예방, 아동안전교육 감염병 영역) ========
  {
    const X = mk('infection');
    const SPREAD = [
      { id: 's1', text: '가리지 않고 기침해요', motif: 'cloud' }, { id: 's2', text: '모둠 친구와 간식 나눠요', motif: 'fruit' },
      { id: 's3', text: '모둠 친구도 열이 나요', motif: 'rain' }, { id: 's4', text: '같은 반에 퍼져요', motif: 'house' },
      { id: 's5', text: '여러 명이 결석해요', motif: 'storm' },
    ];
    const WASH = ['손바닥 비비기', '손등 비비기', '손가락 사이', '엄지 돌려 닦기', '손톱 밑 닦기', '손목 닦기'];
    const SCHOOL = { grid: [6, 4], title: '우리 학교(가상)', legend: false, places: [
      { name: '교실 문손잡이', icon: 'school', at: [1, 1] }, { name: '급식실', icon: 'market', at: [4, 1] }, { name: '수돗가', icon: 'dot', at: [2, 3] },
      { name: '도서실 책상', icon: 'library', at: [5, 3] }, { name: '운동장 끝', icon: 'park', at: [0, 3] }, { name: '빈 창고', icon: 'house', at: [5, 0] }] };
    M.push(
      X('intro.spread-story', {
        title: '교실 감염병 퍼짐 사례', method: '교실 감염병 퍼짐 사례', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(기침 → 모둠 → 반)을 차례로 놓는다.', base: '장면 5장을 차례로 놓고 퍼진 원인을 찾는다.', challenge: '퍼짐을 끊을 수 있던 장면을 짚는다.' },
        intro: {
          teacher: '"가상 반의 이야기예요. 한 명의 기침이 어떻게 반 전체로 퍼졌을까요?" 시연 단추로 장면이 차례대로 놓이는 모습을 보인다. "한 사람이 조심하면 안 퍼져요"라는 말에는 "기침한 친구만 조심하면 될까요? 간식을 나눈 친구, 손을 씻지 않은 친구는요?"라고 되묻는다. 아픈 친구를 탓하지 않고 \'어디서 끊을 수 있었나\'를 찾는다고 밝힌다.',
          student: '가상 반 장면 가운데 퍼짐을 끊을 수 있던 장면 하나를 골라 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, cards: mix(SPREAD), title: '가상 반에 생긴 일' }, sequence: [{ order: ['s1', 's2', 's3', 's4', 's5'] }] },
          art: art('a paper classroom seen from above, a tiny paper cough cloud spreading from one desk to a group table and then the whole room', '어디서 끊을 수 있었을까?', 'cloud', 'lavender'),
        },
        notes: '아픈 학생을 탓하거나 반 실제 결석 사례를 들지 않는다.',
      }),
      X('intro.defense-body', {
        title: '몸이 병균을 막는 곳', method: '몸이 병균을 막는 곳', tool: 'body', minutes: 5,
        levels: { easy: '교사가 두 곳(피부·코)이 골라지는 모습을 보인다.', base: '세 곳(피부·코·눈)이 골라지는 모습을 보고 하는 일을 말한다.', challenge: '몸이 막지 못할 때 해야 할 일(손 씻기·쉬기)을 고른다.' },
        intro: {
          teacher: '"우리 몸에는 병균을 막는 문지기가 있어요. 어디일까요?" 시연 단추로 종이 몸의 피부·코·눈이 골라지는 모습을 보인다. 피부는 겉을 덮어 막고, 코는 콧물·코털로, 눈은 눈물로 씻어 낸다고 짚는다. "몸이 다 막아 주니 손 안 씻어도 돼요"라는 말에는 "문지기도 힘들 때가 있어요. 손으로 눈·코·입을 만지면 병균이 문을 지나가요"라고 말해 준다.',
          student: '병균을 막는 몸의 곳 하나를 골라 그곳이 어떻게 막는지 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '피부', '어깨', '무릎'], names: true }, sequence: [{ parts: ['피부', '코'] }, { parts: ['피부', '코', '눈'] }] },
          art: art('a paper body figure with small paper shields drawn on the skin, the nose and the eyes, and tiny paper germ dots bouncing off', '몸의 문지기', 'star', 'mint'),
        },
      }),
      X('activity.route-web', {
        title: '경로별 예방 행동 잇기', method: '경로별 예방 행동 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(손·기침)에 예방 행동 카드를 붙인다.', base: '가지 4개(손·기침·음식·물건)에 예방 행동 카드를 붙인다.', challenge: '셋째 문항에서 여러 경로를 한꺼번에 막는 행동을 골라 담는다.' },
        activity: {
          title: '"감염 경로" 생각 그물', tool: 'mindmap',
          teacher: '"병균은 어떤 길로 옮겨 갈까요? 손, 기침, 음식, 물건 길이 있어요." 카드를 붙일 때마다 \'이 행동은 어느 길을 막을까?\'를 묻는다. "마스크만 쓰면 다 막아요"라는 학생에게 "마스크는 기침 길을 막아요. 손 길은 무엇으로 막을까요?"라고 되묻는다. 셋째 문항은 \'아플 때 쉬기\'처럼 여러 길을 함께 막는 행동을 찾는다.',
          task: '가운데 \'감염 경로\'에서 길마다 막는 행동 카드를 붙이고, 여러 길을 막는 행동을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('경로 가지마다 막는 예방 행동 카드를 붙여요.', { topic: '감염 경로', slots: ['손', '기침', '음식', '물건'], easySlots: ['손', '기침'], easy: 1,
              groups: { 손: ['비누로 손 씻기', '눈·코 덜 만지기'], 기침: ['옷소매로 가리기', '마스크 쓰기'], 음식: ['익혀 먹기', '먹기 전 손 씻기'], 물건: ['컵 따로 쓰기', '수건 따로 쓰기'] } }, 0.25),
            MATCH('경로와 그 길로 퍼지는 장면을 이어요.', { topic: '감염 경로', pairs: [['손', '문손잡이 만진 손으로 눈 비빔'], ['기침', '가리지 않은 재채기'], ['음식', '오래 둔 음식 먹기'], ['물건', '한 컵으로 돌려 마시기']], easy: 2, extra: ['창문 열고 환기'] }, 0.2),
            PICK('여러 경로를 한꺼번에 막는 행동만 골라 담아요.', { basket: '여러 길을 막아요', good: ['아플 때 집에서 쉬기', '자주 손 씻기'], bad: ['기침 참고 등교', '친구 컵 빌리기'], easy: 1, easyBad: 1, moreGood: ['창문 열어 환기'], moreBad: ['손 대신 옷에 닦기'] }, 0.3, { conclude: '병균은 손·기침·음식·물건 길로 옮겨 가요. 길마다 막는 행동이 있고, 쉬기·손 씻기는 여러 길을 함께 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '경로마다 막는 행동을 하나씩 써요.', columns: ['손', '기침', '물건'], cells: [['', '', '']], answer: '(예) 손 씻기, 옷소매로 가리기, 컵 따로 쓰기' }] },
      }),
      X('activity.wash-timer', {
        title: '손 씻기 실습과 짝 점검', method: '손 씻기 실습과 짝 점검', tool: 'timer', minutes: 14,
        levels: { easy: '단계 카드 3장을 차례로 놓고 실습한다.', base: '단계 카드 6장을 모두 차례로 놓고 실습한 뒤 짝 점검 칸에 표시한다.', challenge: '짝이 빠뜨린 단계를 찾아 알려 주고 다시 해 본다.' },
        activity: {
          title: '단계 카드와 짝 점검표', tool: 'timer',
          teacher: '"교과서의 공식 손 씻기 단계를 카드로 놓아 볼까요?" 칠판에 공식 안내 그림을 붙이고 카드를 놓게 한다. 씻는 시간은 최신 공식 지침으로 교사가 말해 준다. 실습 뒤 짝이 해낸 단계에 표시하게 한다. "짝이 빠뜨린 걸 말하면 기분 나빠할 거예요"라는 학생에게 "\'엄지도 한 번 더 해 볼까?\'처럼 돕는 말로 알려 주면 둘 다 더 잘 씻게 돼요"라고 말해 준다.',
          task: '손 씻기 단계 카드를 차례대로 놓고 실습한 뒤, 짝이 해낸 단계에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            TORD('공식 손 씻기 단계 카드를 차례대로 놓아요.', '손 씻기 단계', WASH, 3, 0.25),
            { prompt: '실습한 뒤 짝이 해낸 단계에 표시해요(짝 점검).', toolOptions: { title: '짝 점검표' }, target: { selfCheck: ['손바닥과 손등을 씻었다', '손가락 사이를 씻었다', '엄지와 손톱 밑을 씻었다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '실습한 뒤 짝이 해낸 단계에 표시해요(짝 점검 두 칸).', target: { selfCheck: ['손바닥과 손등을 씻었다', '손가락 사이를 씻었다'] } }, challenge: { prompt: '실습한 뒤 짝이 해낸 단계에 표시해요(짝 점검 네 칸).', target: { selfCheck: ['손바닥과 손등을 씻었다', '손가락 사이를 씻었다', '엄지와 손톱 밑을 씻었다', '손목까지 씻었다'] } } } },
            { prompt: '짝이 빠뜨린 단계가 있으면 돕는 말로 알려 주고 다시 해 봐요.', free: true, toolOptions: { doneLabel: '짝과 다시 해 보았어요' }, conclude: '손 씻기는 단계마다 빠짐없이, 짝과 서로 도우며 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '오늘 실습에서 해낸 단계에 표시해요.', options: ['손바닥·손등', '손가락 사이', '엄지·손톱 밑', '손목'] }] },
        notes: '손 씻기 단계는 사람 확인 목록에 있다. 씻는 시간 수치는 화면에 쓰지 않았다(교사가 최신 지침으로 안내).',
      }),
      X('activity.school-map', {
        title: '학교에서 감염 위험이 큰 곳', method: '학교 감염 위험이 큰 곳', tool: 'map', minutes: 14,
        levels: { easy: '두 곳만 있는 지도에서 이름을 보며 핀을 꽂고 예방 행동을 고른다.', base: '여섯 곳 지도에서 위험이 큰 곳에 핀을 꽂고 곳마다 예방 행동을 고른다.', challenge: '이름이 숨겨진 지도에서 핀을 꽂고, 모둠에서 우선 관리할 곳을 정한다.' },
        activity: {
          title: '감염 위험 지도와 예방 행동', tool: 'map',
          teacher: '"손이 많이 닿거나 사람이 모이는 곳은 어디일까요?" 핀을 꽂을 때마다 \'왜 위험할까?\'를 묻고 예방 행동을 고르게 한다. "빈 창고가 제일 더러우니 위험해요"라는 학생에게 "사람이 거의 안 가는 곳과 하루에 수백 번 손이 닿는 곳, 어디서 병균이 더 잘 옮겨 갈까요?"라고 되묻는다. 지도는 가상 학교다.',
          task: '가상 학교 지도에서 감염 위험이 큰 곳에 핀을 꽂고, 그곳의 예방 행동을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MAPQ(SCHOOL, '교실 문손잡이', '하루에 손이 가장 많이 닿는 곳에 핀을 꽂아요.', '이곳에서 할 예방 행동은?', ['만진 뒤 손 씻기', '옷에 손 닦기', '손잡이 핥지 않기만'], 0, ['', '옷에 닦으면 병균이 옷에 옮아요.', '손 씻기가 먼저예요.'], 0.2),
            MAPQ(SCHOOL, '급식실', '여러 반이 모여 음식을 먹는 곳에 핀을 꽂아요.', '이곳에서 할 예방 행동은?', ['컵·수저 나눠 쓰기', '먹기 전 손 씻기', '기침을 손으로 가리기'], 1, ['수저는 나눠 쓰지 않아요.', '', '기침은 옷소매로 가려요.'], 0.25),
            MAPQ(SCHOOL, '도서실 책상', '여러 사람이 돌아가며 쓰는 책상이 있는 곳에 핀을 꽂아요.', '이곳에서 할 예방 행동은?', ['책 넘길 때 침 바르기', '쓴 뒤 손 씻기', '기침하며 책 읽기'], 1, ['침을 바르면 병균이 책에 남아요.', '', '기침은 옷소매로 가려요.'], 0.3),
            { prompt: '모둠에서 우리 반이 먼저 관리할 곳 하나를 정해 까닭을 말해요.', free: true, talk: true, conclude: '손이 많이 닿고 사람이 모이는 곳일수록 손 씻기와 기침 예절을 더 잘 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교에서 손이 많이 닿는 곳 하나와 예방 행동을 써요.' }] },
        notes: '지도는 지어낸 학교다. \'빈 창고\'는 헷갈리는 곳으로 넣었다.',
      }),
      X('activity.sick-dilemma', {
        title: '열이 나는데 학교에 갈까', method: '열이 나는데 학교에 갈까', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(보호자께 알리기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(학교에 알리기)을 지나 근거를 고른다.', challenge: '갈림 3번(나은 뒤 등교)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 아침에 열이 나요', tool: 'dilemma',
          teacher: '"가상 친구 서아는 아침에 열이 나요. 오늘 반 대표 발표가 있대요. 어떻게 할까요?" 고를 때마다 나와 친구에게 생기는 결과를 읽게 한다. "열이 나도 참고 가는 게 성실한 거예요"라는 학생에게 "아픈 몸으로 가면 나는 더 아프고, 친구에게 옮길 수 있어요. 쉬는 것도 다른 사람을 지키는 일이에요"라고 말해 준다. 등교 기준은 학교마다 다르니 보건 선생님 안내를 따른다고 밝힌다.',
          task: '갈림길마다 고르고, 나와 친구에게 생긴 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '아침에 열이 나요',
            steps: [
              { text: '아침에 일어나니 열이 나고 목이 아파요. 오늘은 반 대표 발표가 있어요.', motif: 'sun',
                good: ['tell', '보호자께 열이 난다고 알린다', '보호자가 열을 재 보고 쉬자고 해요.', [['서아', '몸을 돌봐요', 1]]],
                bad: ['hide', '말하지 않고 참고 학교에 간다', '수업 중에 더 아파져 보건실에 가요.', '아픈 몸을 숨기면 나도 더 아프고 친구에게 옮을 수 있어요.', [['서아', '더 아파요', -1], ['반 친구', '옮을 수 있어요', -1]]] },
              { text: '집에서 쉬기로 했어요. 발표는 어떻게 하죠?', motif: 'house',
                good: ['school', '보호자와 함께 담임 선생님께 알린다', '선생님이 발표를 다른 날로 미뤄 주셨어요.', [['서아', '마음이 놓여요', 1], ['모둠', '계획을 바꿔요', 0]]],
                bad: ['silent', '아무에게도 알리지 않는다', '모둠 친구들이 서아를 기다리다 당황해요.', '알리지 않으면 친구들이 걱정하고 계획이 흐트러져요.', [['모둠', '당황해요', -1]]] },
              { text: '이틀 쉬고 열이 내렸어요. 다시 학교에 갈 때예요.', motif: 'tree',
                good: ['manners', '기침이 남아 옷소매로 가리고 손을 자주 씻는다', '친구들과 건강하게 다시 지내요.', [['반 친구', '안전해요', 1]]],
                bad: ['share', '반가워서 친구와 컵을 돌려 마신다', '기침이 남은 채 컵을 나눴어요.', '나은 뒤에도 기침이 남으면 물건을 따로 써요.', [['친구', '옮을 수 있어요', -1]]] },
            ],
            ending: '알리고 쉬고, 다시 갈 때도 예절을 지켜 나와 친구를 함께 지켰어요.',
            reasons: [{ id: 'rest', text: '아플 때 쉬면 나와 친구를 함께 지킨다' }, { id: 'inform', text: '어른과 학교에 알리면 알맞게 도와준다' }, { id: 'endure', text: '열이 나도 참고 가야 성실하다', why: '아플 때 쉬는 것은 게으른 것이 아니에요.' }, { id: 'onlyme', text: '나만 조심하면 퍼지지 않는다', why: '감염병은 여러 사람이 함께 지켜야 막을 수 있어요.' }],
            good: ['rest', 'inform'],
            talk: '모둠에서 "아파서 쉬는 친구를 위해 우리가 할 수 있는 일"을 하나씩 말해요.',
            conclude: '열이 나면 알리고 쉬어요. 쉬는 것도 다른 사람을 지키는 예방 행동이에요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '아침에 열이 나면 누구에게 무엇을 알릴지 써요.' }] },
        notes: '서아는 지어낸 인물이다. 등교 중지 기준은 사람 확인 목록에 있다(학교·질병관리청 안내).',
      }),
      X('wrap.prevent-check', {
        title: '감염병 예방 해 볼 일 점검', method: '감염병 예방 자기 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '해 볼 일 3칸에 이번 주 지킬 것을 표시한다.', base: '해 볼 일 5칸에 표시한다.', challenge: '표시하지 못한 칸 하나를 골라 지킬 계획을 쓴다.' },
        wrap: {
          teacher: '"이번 주에 지켜 볼 예방 행동에 스스로 표시해 볼까요? 정답은 없어요." 첫 출구는 점검표에 넣을 행동만 고르는 문제다. "손을 자주 씻으면 귀찮아요"라는 학생에게 "언제 씻을지 정해 두면 덜 귀찮아요. 먹기 전, 화장실 뒤처럼요"라고 말해 준다. 둘째 출구는 학생 스스로 표시하는 것이라 친구와 견주지 않는다.',
          exitTicket: [
            CHKX('감염병 예방 점검표에 넣을 행동만 골라요.', '예방 점검표', ['먹기 전 손 씻기', '옷소매로 기침 가리기', '컵·수건 따로 쓰기', '아프면 알리고 쉬기'], ['친구 물병 빌리기', '열나도 참기']),
            SELFK('이번 주 지켜 볼 예방 행동', ['먹기 전 손 씻기', '옷소매로 기침 가리기', '컵·수건 따로 쓰기', '아프면 알리고 쉬기', '창문 열어 환기'], '이번 주에 지켜 볼 예방 행동에 스스로 표시해요(정답 없음).', { easy: 3, base: 5 }),
            { type: 'short', prompt: '표시하지 못한 행동 하나를 언제 어떻게 지킬지 써요.' },
          ],
        },
        worksheet: {
          title: '감염병 예방 점검',
          items: [
            { type: 'check', prompt: '이번 주 지켜 볼 예방 행동에 표시해요.', options: ['먹기 전 손 씻기', '옷소매로 기침 가리기', '컵·수건 따로 쓰기'] },
            { type: 'short', prompt: '가장 지키기 어려운 행동과 그 까닭을 써요.' },
          ],
        },
      }),
      X('wrap.rule-write', {
        title: '우리 반 예방 수칙 세 줄', method: '우리 반 예방 수칙 세 줄', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 보고 수칙 두 줄을 쓰고 기준 2개를 점검한다.', base: '수칙 세 줄을 쓰고 기준 3개(구체적·지킬 수 있음·까닭)를 점검한다.', challenge: '모둠 글을 서로 바꿔 보고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"우리 반이 함께 지킬 감염병 예방 수칙을 세 줄로 써 볼까요?" \'구체적\'은 언제·어떻게가 들어갔는지라고 짚는다. "청결하게 지낸다"처럼 쓰는 학생에게 "무엇을 언제 하면 청결한 걸까요? \'급식 전에 비누로 손을 씻는다\'처럼 써 봐요"라고 말해 준다. 도전에서는 모둠 글을 바꿔 읽고 고칠 곳 하나를 알려 준다.',
          exitTicket: [
            RUBX('우리 반 감염병 예방 수칙을 세 줄로 써요.', { topic: '우리 반이 함께 지킬 감염병 예방 수칙을 세 줄로 써요.', title: '우리 반 예방 수칙', starter: '1. ___ 전에 손을 씻는다. 2. 기침할 때는 ___. 3. 아프면 ___.', crit: ['언제·어떻게를 구체적으로 썼다', '우리 반이 지킬 수 있는 일이다', '왜 필요한지 까닭이 드러난다'], must: [['씻', '손']], chars: [30, 200] }),
            { type: 'choice', prompt: '가장 구체적인 예방 수칙은?', options: ['깨끗하게 지낸다', '급식 전에 비누로 손을 씻는다', '건강하게 산다'], answer: 1, difficulty: 0.15, explain: '언제·어떻게가 들어가야 지키기 쉬워요.' },
          ],
        },
        worksheet: {
          title: '우리 반 예방 수칙',
          items: [
            { type: 'short', prompt: '우리 반 예방 수칙 한 줄을 써요.' },
            { type: 'check', prompt: '내 수칙을 점검해요.', options: ['구체적이다', '지킬 수 있다', '까닭이 있다'] },
          ],
        },
      }),
    );
  }

  // ======== 예방접종과 건강검사 (학교보건법 제9조·제9조의2, 체계도 재료 — 접종 일정·검사 기준은 보건 선생님 안내) ========
  {
    const X = mk('vaccine-checkup');
    const IMMUNE = [
      { id: 'i1', text: '예방접종을 받아요', motif: 'star' }, { id: 'i2', text: '몸이 병균을 기억해요', motif: 'flower' },
      { id: 'i3', text: '진짜 병균이 들어와요', motif: 'cloud' }, { id: 'i4', text: '몸이 빨리 막아내요', motif: 'sun' },
    ];
    const RESULT = [['시력', 6], ['청력', 1], ['구강', 4]];
    M.push(
      X('intro.immune-story', {
        title: '면역이 생기는 차례', method: '면역이 생기는 차례', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(접종 → 기억 → 막아냄)을 차례로 놓는다.', base: '장면 4장(진짜 병균이 들어옴 포함)을 차례로 놓는다.', challenge: '차례를 보고 동생에게 설명하듯 말해 본다.' },
        intro: {
          teacher: '"예방접종은 언제 맞을까요? 아플 때일까요, 아프기 전일까요?" 시연 단추로 \'접종 → 몸이 기억 → 진짜 병균 → 빨리 막아냄\' 장면이 놓이는 모습을 보인다. "예방접종은 아플 때 맞는 약이에요"라는 말에는 "\'예방\'은 미리 막는다는 뜻이에요. 아프기 전에 몸이 병균을 알아보게 해 두는 거예요"라고 말해 준다. 접종 일정은 보건 선생님 안내를 따른다고 밝힌다.',
          student: '장면 차례를 보고 예방접종이 \'미리 막는\' 까닭을 짝에게 한 문장으로 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: mix(IMMUNE), title: '면역이 생기는 차례' }, sequence: [{ order: ['i1', 'i2', 'i3', 'i4'] }] },
          art: art('a paper body with a small paper shield glowing inside, and a paper germ bouncing away from it, a paper calendar in the corner', '미리 막는 예방접종', 'star', 'sky'),
        },
        notes: '접종 이름·일정·부작용은 다루지 않는다. 학생의 접종 여부를 묻지 않는다.',
      }),
      X('intro.check-parts', {
        title: '건강검사로 살피는 몸', method: '건강검사로 살피는 몸', tool: 'body', minutes: 5,
        levels: { easy: '교사가 두 곳(눈·귀)이 골라지는 모습을 보인다.', base: '세 곳(눈·귀·입안)이 골라지는 모습을 보고 검사 이름을 말한다.', challenge: '곳마다 검사 이름(시력·청력·구강)을 이어 말한다.' },
        intro: {
          teacher: '"학교 건강검사에서는 몸의 어디를 살필까요?" 시연 단추로 종이 몸의 눈·귀·혀(입안 — 이는 따로 칸이 없어 혀 칸으로 짚는다)가 골라지는 모습을 보인다. "아픈 데가 없으면 검사는 필요 없어요"라는 말에는 "눈이 조금씩 나빠지는 건 스스로 알아차리기 어려워요. 그래서 미리 살펴요"라고 말해 준다. 검사 항목은 학년·학교마다 다를 수 있다고 밝힌다.',
          student: '건강검사로 살피는 곳 하나를 골라 그 검사가 무엇을 알려 주는지 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '혀', '코', '어깨', '무릎'], names: true }, sequence: [{ parts: ['눈', '귀'] }, { parts: ['눈', '귀', '혀'] }] },
          art: art('a paper body figure with a paper eye chart, a paper headphone and a paper tooth mirror arranged around it', '건강검사로 살펴요', 'flower', 'mint'),
        },
        notes: '종이 몸에는 이 칸이 없어 입안은 혀 칸으로 짚는다. 학생 개인의 검사 결과를 묻지 않는다.',
      }),
      X('activity.record-line', {
        title: '예시 접종·검사 기록 시간 줄', method: '예시 접종·검사 기록 시간 줄', tool: 'timeline', minutes: 14,
        levels: { easy: '기록 카드 3장을 나이 차례로 놓는다.', base: '기록 카드 5장을 나이 차례로 놓고 빈칸을 찾는다.', challenge: '빈 기록을 확인할 사람을 골라 담는다.' },
        activity: {
          title: '예시 학생 기록 차례 놓기', tool: 'timeline',
          teacher: '"이 기록 카드는 가상 학생 다솔이의 예시예요. 실제 일정이 아니에요." 카드를 나이 차례로 놓게 한다. "기록이 빠지면 그냥 넘어가요"라는 학생에게 "빠진 기록이 정말 안 한 것인지, 적지 않은 것인지 누구에게 확인하면 될까요?"라고 묻는다. 실제 접종·검사 일정은 보건 선생님 안내를 따른다고 밝힌다.',
          task: '가상 학생의 예시 기록 카드를 나이 차례로 놓고, 빈 기록을 확인할 사람을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('다솔이의 예시 기록 카드를 나이 차례로 놓아요.', ['갓난아기 때 기록', '걸음마 무렵 기록', '유치원 때 기록', '초등 입학 때 기록', '5학년 건강검사'], { easy: [0, 2, 3], mode: 'order', axis: ['어릴 때', '지금'] }, 0.2),
            ORDER('건강검사 결과를 받은 뒤의 차례대로 카드를 놓아요.', ['결과 안내문 받기', '보호자와 함께 읽기', '다시 확인할 곳 정하기', '병원·치과 가기'], { easy: [0, 1, 2], trap: '안내문 버리기', mode: 'order', axis: ['먼저', '나중'] }, 0.25),
            PICK('빈 기록이 있을 때 확인할 사람 카드만 골라 담아요.', { basket: '확인할 사람', good: ['보호자', '보건 선생님'], bad: ['단체방 친구', '인터넷 댓글'], easy: 1, easyBad: 1, moreGood: ['다니는 병원'], moreBad: ['모르는 사람'], axis: ['먼저', '나중'] }, 0.3, { conclude: '기록이 빈 칸은 보호자·보건 선생님과 함께 확인해요. 일정은 공식 안내를 따라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '접종·검사 기록을 확인하고 싶을 때 누구에게 물을지 써요.' }] },
        notes: '기록 카드의 나이는 예시이며 실제 접종 일정이 아니다. 학생의 실제 기록·접종 여부는 묻지 않는다.',
      }),
      X('activity.result-chart', {
        title: '예시 검사 결과 그래프 읽기', method: '예시 검사 결과표 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '막대 끝에 값이 보이고 항목 2개를 견준다.', base: '항목 3개를 읽고 다시 확인 안내가 가장 많은 항목을 찾는다.', challenge: '다시 확인 안내를 받았을 때 가족에게 알릴 말을 고른다.' },
        activity: {
          title: '가상 반 검사 결과 그래프', tool: 'chart',
          teacher: '"이 그래프는 가상의 한 반에서 \'다시 확인해 보세요\' 안내를 받은 학생 수예요. 실제 기준이나 우리 반 자료가 아니에요." 막대를 견주게 한다. "결과 안내문은 몰라도 돼요"라는 학생에게 "안내문은 일찍 알아차리라는 신호예요. 그냥 두면 어떻게 될까요?"라고 되묻는다. 누가 안내를 받았는지는 묻지 않는다.',
          task: '가상 반의 검사 결과 그래프를 읽고, 다시 확인할 항목과 가족에게 알릴 말을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '다시 확인 안내를 가장 많이 받은 항목은?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '다시 확인 안내 받은 학생 수(가상 반)', unit: '명', xLabel: '검사', yLabel: '학생 수', data: RESULT, scale: 1, choices: ['시력', '청력', '구강'], question: '가장 많은 항목은?' }, target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '시력과 청력 가운데 안내를 더 많이 받은 항목은?(가상)', toolOptions: { data: [RESULT[0], RESULT[1]], choices: ['시력', '청력'] }, target: { pick: 0 } } } },
            { prompt: '구강 안내를 받은 학생은 몇 명인가요?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '다시 확인 안내 받은 학생 수(가상 반)', unit: '명', data: RESULT, scale: 1, choices: ['1명', '4명', '6명'], question: '구강은 몇 명?' }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '시력 다시 확인 안내를 받은 가상 친구가 가족에게 할 말을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '다시 확인 안내 받은 학생 수(가상 반)', unit: '명', data: RESULT, scale: 1, choices: ['안내문을 같이 보고 안과에 가 봐요', '창피하니 숨겨요', '괜찮으니 버려요'], question: '가족에게 할 말은?', why: ['', '안내는 창피한 일이 아니라 일찍 알아차린 거예요.', '그냥 두면 더 나빠질 수 있어요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '검사 결과는 몸을 일찍 알아차리는 신호예요. 보호자와 함께 읽고 필요하면 다시 확인해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '건강검사 결과 안내문을 받으면 할 일을 한 문장으로 써요.' }] },
        notes: '그래프 수치는 가상 자료다. 학생 개인의 검사 결과·시력 등을 묻거나 반에서 밝히지 않는다.',
      }),
      X('activity.fear-dilemma', {
        title: '주사가 무서운 동생 갈림길', method: '주사가 무서운 동생 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(동생 마음 알아주기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(접종의 까닭 말하기)을 지나 근거를 고른다.', challenge: '갈림 3번(접종 뒤)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 동생이 주사가 무섭대요', tool: 'dilemma',
          teacher: '"가상 친구 도담이의 동생이 내일 예방접종을 맞는데 무섭다고 울어요. 도담이는 무슨 말을 할까요?" 고를 때마다 동생의 마음이 어떻게 되는지 읽게 한다. "겁쟁이라고 놀리면 용기가 생겨요"라는 학생에게 "놀림을 받으면 무서움이 줄어들까요? 마음을 먼저 알아주면 어떨까요?"라고 되묻는다. 접종 뒤 몸 상태가 걱정되면 어른·보건소에 묻는다고 밝힌다.',
          task: '갈림길마다 동생에게 할 말을 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '동생이 주사가 무섭대요',
            steps: [
              { text: '내일 접종을 맞는 동생이 "주사 무서워!" 하고 울어요.', motif: 'rain',
                good: ['feel', '"무서울 수 있어, 나도 그랬어"라고 마음을 알아준다', '동생이 울음을 조금 그쳐요.', [['동생', '마음이 놓여요', 1]]],
                bad: ['tease', '"겁쟁이!"라고 놀린다', '동생이 더 크게 울어요.', '놀리면 무서움이 더 커져요.', [['동생', '더 무서워요', -1]]] },
              { text: '동생이 "왜 꼭 맞아야 해?"라고 물어요.', motif: 'star',
                good: ['why', '"몸이 병균을 미리 알아보게 해서 지켜 줘"라고 말한다', '동생이 고개를 끄덕여요.', [['동생', '까닭을 알아요', 1]]],
                bad: ['scare', '"안 맞으면 큰일 나"라고 겁을 준다', '동생이 접종을 더 무서워해요.', '겁을 주기보다 까닭을 차분히 말해요.', [['동생', '불안해요', -1]]] },
              { text: '접종을 맞고 왔어요. 동생이 맞은 자리가 조금 아프대요.', motif: 'house',
                good: ['adult', '보호자께 알리고 안내받은 대로 쉬게 돕는다', '보호자가 안내문을 보며 돌봐 줘요.', [['동생', '편히 쉬어요', 1]]],
                bad: ['rub', '혼자 판단해 세게 문질러 준다', '동생이 아프다고 싫어해요.', '접종 뒤 몸이 걱정되면 어른께 알려요.', [['동생', '불편해요', -1]]] },
            ],
            ending: '마음을 알아주고 까닭을 말해 주니 동생이 용기를 냈어요.',
            reasons: [{ id: 'empathy', text: '마음을 알아주면 무서움이 줄어든다' }, { id: 'prevent', text: '예방접종은 아프기 전에 몸을 지킨다' }, { id: 'tease', text: '놀리면 용기가 생긴다', why: '놀림은 무서움을 키워요.' }, { id: 'sick', text: '접종은 아플 때만 맞는다', why: '접종은 아프기 전에 미리 맞아요.' }],
            good: ['empathy', 'prevent'], aim: '동생을 돕는 선택',
            talk: '모둠에서 "무서워하는 친구에게 해 줄 말"을 하나씩 말해요.',
            conclude: '무서운 마음은 알아주고, 예방접종은 아프기 전에 몸을 지키는 일이라고 차분히 말해요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '주사가 무서운 동생에게 해 줄 말을 한 문장으로 써요.' }] },
        notes: '도담과 동생은 지어낸 인물이다. 접종 반응·부작용은 다루지 않고 어른께 알리는 것까지만 다룬다.',
      }),
      X('activity.check-order', {
        title: '건강검사 받는 차례', method: '건강검사 받는 차례', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 3장(안내 듣기 → 문진표 → 검사)을 차례로 놓는다.', base: '카드 4장(결과 상담까지)을 차례로 놓는다.', challenge: '틀린 카드를 빼고 놓은 뒤, 결과를 받은 뒤 할 일만 점검표에 표시한다.' },
        activity: {
          title: '검사 차례와 결과 뒤 할 일', tool: 'kitchen',
          teacher: '"건강검사 날, 무엇부터 할까요?" 카드를 놓을 때마다 왜 그 차례인지 말하게 한다. "문진표는 대충 써도 돼요"라는 학생에게 "문진표는 의사 선생님이 내 몸을 이해하는 첫 자료예요. 보호자와 함께 바르게 써요"라고 말해 준다. 둘째 문항에서 결과를 받은 뒤 할 일을 고른다.',
          task: '건강검사를 받는 차례대로 카드를 놓고, 결과를 받은 뒤 할 일을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('건강검사를 받는 차례대로 카드를 놓아요.', ['안내 듣기', '문진표 확인', '검사 받기', '결과 상담'], { easy: [0, 1, 2], trap: '검사 건너뛰기', mode: 'order' }, 0.2),
            CHK('결과를 받은 뒤 할 일만 표시해요.', '결과 뒤 할 일', ['보호자와 함께 읽기', '궁금하면 보건 선생님께 묻기', '필요하면 병원에 가기'], ['친구 결과와 견주기', '안내문 숨기기'], { easy: 2, base: 3 }, 0.25),
            { prompt: '모둠에서 결과를 받은 친구를 존중하는 말 하나를 정해 말해요.', free: true, talk: true, conclude: '검사는 차례대로 받고, 결과는 보호자와 함께 확인해요. 남의 결과는 묻지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '건강검사 받는 차례를 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '안내 듣기, 문진표 확인, 검사 받기, 결과 상담' }] },
        notes: '검사 절차는 학교마다 다를 수 있다(사람 확인). 친구의 결과를 묻거나 견주지 않게 한다.',
      }),
      X('wrap.why-web', {
        title: '미리 막기 생각 그물', method: '미리 막기 생각 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(접종·검사)에 까닭 카드를 붙인다.', base: '가지 3개(접종·검사·결과 확인)에 까닭 카드를 붙인다.', challenge: '카드가 늘고, 함께 지키는 건강(다른 사람까지)과 잇는 카드를 찾는다.' },
        wrap: {
          teacher: '"\'미리 막기\'에는 무엇이 있었나요?" 가지마다 까닭 카드를 붙이게 한다. 도전에서는 \'친구도 함께 지켜요\'처럼 다른 사람과 이어지는 까닭을 짚는다. "검사 결과는 몰라도 돼요"라는 카드가 나오면 "모르면 미리 막을 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            WEBX('"미리 막기" 생각 그물에 까닭 카드를 붙여요.', { topic: '미리 막기', slots: ['예방접종', '건강검사', '결과 확인'], easySlots: ['예방접종', '건강검사'], easy: 1,
              groups: { 예방접종: ['몸이 병균을 기억해요', '아프기 전에 맞아요'], 건강검사: ['일찍 알아차려요', '눈·귀·이를 살펴요'], '결과 확인': ['보호자와 함께 읽어요', '필요하면 다시 확인'] }, extra: { 예방접종: ['친구도 함께 지켜요'] }, traps: ['결과는 몰라도 돼요'] }),
            { type: 'choice', prompt: '예방접종을 맞는 때로 알맞은 것은?', options: ['아프기 전에', '아플 때만', '다 나은 뒤에만'], answer: 0, difficulty: 0.15, explain: '예방접종은 아프기 전에 미리 맞아요.' },
            { type: 'short', prompt: '건강검사가 필요한 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '미리 막기',
          items: [
            { type: 'short', prompt: '예방접종이 몸을 지키는 방법을 한 문장으로 써요.' },
            { type: 'check', prompt: '검사 결과를 받으면 할 일에 표시해요.', options: ['보호자와 읽기', '보건 선생님께 묻기', '필요하면 다시 확인'] },
          ],
        },
      }),
      X('wrap.ask-write', {
        title: '보건 선생님께 물을 질문', method: '보건 선생님께 물을 질문', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 보고 질문 하나를 쓰고 기준 2개를 점검한다.', base: '질문 두 개를 쓰고 기준 3개(구체적·물음표·궁금한 까닭)를 점검한다.', challenge: '짝 질문을 읽고 더 구체적으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"예방접종이나 건강검사에서 궁금한 것을 보건 선생님께 물어볼 질문으로 써 볼까요?" \'구체적인 질문\'은 무엇이 궁금한지 분명한 질문이라고 짚는다. "다 알려 주세요"처럼 쓰는 학생에게 "무엇을 알고 싶은지 하나만 정해 볼까요? \'시력검사는 어떻게 하나요?\'처럼요"라고 말해 준다. 내 검사 결과나 몸 상태는 쓰지 않는다고 밝힌다. 모은 질문은 보건 선생님께 전한다.',
          exitTicket: [
            RUBX('예방접종·건강검사에 대해 보건 선생님께 물을 질문 두 개를 써요.', { topic: '예방접종이나 건강검사에서 궁금한 것을 질문 두 개로 써요(내 검사 결과는 쓰지 않아요).', title: '보건 선생님께 물을 질문', starter: '___은 왜 ___하나요? ___은 어떻게 하나요?', crit: ['무엇이 궁금한지 구체적으로 썼다', '물음표로 끝나는 질문이다', '궁금한 까닭이 드러난다'], must: ['?'], chars: [15, 140] }),
            { type: 'choice', prompt: '가장 구체적인 질문은?', options: ['다 알려 주세요', '시력검사는 어떻게 하나요?', '검사 싫어요'], answer: 1, difficulty: 0.15, explain: '무엇이 궁금한지 분명해야 답을 들을 수 있어요.' },
          ],
        },
        worksheet: {
          title: '보건 선생님께 물어요',
          items: [
            { type: 'short', prompt: '보건 선생님께 물을 질문 하나를 써요.' },
            { type: 'check', prompt: '내 질문을 점검해요.', options: ['구체적이다', '물음표로 끝난다', '까닭이 있다'] },
          ],
        },
        notes: '학생 질문에 자신의 검사 결과·병력을 쓰지 않게 한다. 모은 질문은 이름 없이 보건 선생님께 전한다.',
      }),
    );
  }

  // 갈래(emotion branch) 문항: choices = [{ id, text, result, mood, why? }…], good = 알맞은 보기 id, easyIds = 쉬움에 남길 보기
  const BRANCH = (prompt, { situation, ask, motif, choices, good, easyIds }, d, more) => Object.assign({
    prompt, toolOptions: Object.assign({ mode: 'branch', situation, ask: ask || '어떻게 할까요?', choices }, motif ? { motif } : {}), target: { choice: good }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(보기 ${easyIds.length}개).`, toolOptions: { choices: choices.filter((c) => easyIds.includes(c.id)) }, target: { choice: good } } },
  }, more);
  // 시계(clock) 문항: 쉬움 = 정각만, 기본 = 10분 단위, 도전 = 5분 단위(target 분은 그 단계 minuteStep 의 배수)
  const CLK = (prompt, [h, m], [eh], [ch, cm], d, more) => Object.assign({
    prompt, toolOptions: { minuteStep: 10, showDigital: false }, target: { h, m }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt).replace(/\(.*\)$/, '')}(${eh}시, 정각).`, toolOptions: { hourOnly: true }, target: { h: eh, m: 0 } },
      challenge: { prompt: `${cut(prompt).replace(/\(.*\)$/, '')}(바꾼 계획 ${ch}시 ${cm}분).`, toolOptions: { minuteStep: 5 }, target: { h: ch, m: cm } },
    },
  }, more);

  // ======== 잠과 신체 활동 (학교보건법 제9조·제9조의2, 체계도 재료 — 수면·운동 권장 수치는 쓰지 않음) ========
  {
    const X = mk('sleep-activity');
    const TIRED = [
      { id: 't1', text: '밤늦게까지 영상 보기', motif: 'moon' }, { id: 't2', text: '늦게 잠들어요', motif: 'star' },
      { id: 't3', text: '아침에 못 일어나요', motif: 'sun' }, { id: 't4', text: '수업 중에 졸려요', motif: 'cloud' },
    ];
    const FRESH = [['월', 4], ['화', 4], ['수', 2], ['목', 4], ['금', 3], ['토', 5], ['일', 4]];
    M.push(
      X('intro.tired-case', {
        title: '늦게 잔 다음 날 사례', method: '늦게 잔 다음 날 사례', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(영상 → 늦게 잠 → 못 일어남)을 차례로 놓는다.', base: '장면 4장(수업 중 졸림까지)을 놓고 잠과 결과를 잇는다.', challenge: '결과를 바꿀 수 있던 장면을 짚는다.' },
        intro: {
          teacher: '"가상 친구 이준이가 밤늦게까지 영상을 봤어요. 다음 날은 어땠을까요?" 시연 단추로 장면 네 장이 차례대로 놓이는 모습을 보인다. "주말에 몰아 자면 괜찮아요"라는 말에는 "평일에 모자란 잠을 주말에 몰아 자면 월요일 아침은 어떨까요? 날마다 비슷한 때 자는 것이 몸에 편해요"라고 되묻는다. 우리 반 친구의 잠자는 시간은 묻지 않는다.',
          student: '이준이의 장면 가운데 하나를 바꿔 다음 날을 다르게 만든다면 어느 장면일지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: mix(TIRED), title: '이준이의 밤과 아침(가상)' }, sequence: [{ order: ['t1', 't2', 't3'] }, { order: ['t1', 't2', 't3', 't4'] }] },
          art: art('a paper child yawning at a paper school desk, with a small paper moon and a glowing paper tablet in a thought bubble', '잠이 다음 날을 바꿔요', 'moon', 'lavender'),
        },
        notes: '이준은 지어낸 인물이다. 수면 권장 시간 수치는 쓰지 않는다.',
      }),
      X('intro.active-body', {
        title: '움직일 때 일하는 기관', method: '움직일 때 일하는 기관', tool: 'body', minutes: 5,
        levels: { easy: '교사가 심장 한 곳을 고르는 모습을 보인다.', base: '심장·폐를 차례로 고르고, 근육은 겹 그림으로 짚는다.', challenge: '기관마다 달릴 때 하는 일을 말한다.' },
        intro: {
          teacher: '"쉬는 시간에 신나게 달리면 몸속에서 무엇이 바빠질까요?" 시연 단추로 종이 몸의 심장 → 폐가 골라지는 모습을 보인다. 심장은 더 빨리 뛰어 피를 보내고, 폐는 숨을 더 많이 쉰다고 짚는다. 근육은 기관 칸이 아니어서 교사가 겹 그림으로 보인다. "운동은 체육 시간에만 해요"라는 말에는 "쉬는 시간에 걷고 계단을 오르는 것도 몸을 움직이는 거예요"라고 말해 준다.',
          student: '달릴 때 바빠지는 기관 하나를 골라 그 기관이 하는 일을 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '폐', '심장', '위', '간'], names: true }, sequence: [{ sel: '심장' }, { sel: '폐' }] },
          art: art('a paper child running on a paper track with a glowing paper heart and paper lungs drawn inside the chest', '움직이면 바빠지는 곳', 'sun', 'peach'),
        },
        notes: '종이 몸의 기관 찾기에는 근육 칸이 없다. 근육은 교사가 layers(근육 겹) 그림이나 교과서 그림으로 보인다.',
      }),
      X('activity.bedtime-branch', {
        title: '잠자기 전 습관과 다음 날', method: '잠자기 전 습관과 다음 날', tool: 'emotion', minutes: 14,
        levels: { easy: '상황마다 보기 2개 가운데 고르고 다음 날 결과를 본다.', base: '상황마다 보기 3개 가운데 고른다.', challenge: '보기 3개 가운데 고른 뒤, 이준이에게 줄 잠자리 조언을 모둠에서 말한다.' },
        activity: {
          title: '잠들기 전 갈래 고르기', tool: 'emotion',
          teacher: '"잠자리에 누웠는데 알림이 와요. 이준이는 어떻게 하면 좋을까요?" 고를 때마다 \'다음 날 아침\' 결과를 소리 내어 읽게 한다. "영상 하나쯤은 괜찮아요"라는 학생에게 "하나가 둘이 되고 셋이 되면 어떻게 될까요?"라고 되묻는다. 넷째 문항은 이준이에게 조언하는 말하기다. 학생 자신의 잠자리 습관은 발표시키지 않는다.',
          task: '이준이의 잠들기 전 상황마다 알맞은 행동을 고르고 다음 날 결과를 읽어요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            BRANCH('잠자리에 누웠는데 휴대폰 알림이 와요. 알맞은 행동을 골라요.', { situation: '이준: 누웠는데 휴대폰 알림이 와요', motif: 'moon', good: 'off', easyIds: ['off', 'one'],
              choices: [{ id: 'one', text: '영상 하나만 더 본다', result: '한참 뒤에 잠들어 아침이 무거워요.', mood: '걱정' }, { id: 'off', text: '알림 끄고 휴대폰을 거실에 둔다', result: '금방 잠들어 아침이 개운해요.', mood: '편안함' }, { id: 'chat', text: '친구와 메시지를 계속한다', result: '자정이 넘어 잠들어요.', mood: '걱정' }] }, 0.2),
            BRANCH('숙제를 끝냈더니 잠잘 때가 지났어요. 알맞은 행동을 골라요.', { situation: '이준: 숙제를 마치니 잠잘 때가 지났어요', motif: 'star', good: 'sleep', easyIds: ['sleep', 'snack'],
              choices: [{ id: 'snack', text: '늦었으니 간식 먹고 논다', result: '더 늦게 잠들어 피곤해요.', mood: '걱정' }, { id: 'sleep', text: '씻고 바로 잠자리에 든다', result: '아침에 제때 일어나요.', mood: '편안함' }, { id: 'weekend', text: '주말에 몰아 자면 된다고 버틴다', result: '평일 내내 졸려요.', mood: '걱정' }] }, 0.25),
            BRANCH('주말 아침, 더 자고 싶어요. 알맞은 행동을 골라요.', { situation: '이준: 주말 아침, 점심까지 자고 싶어요', motif: 'sun', good: 'usual', easyIds: ['usual', 'noon'],
              choices: [{ id: 'noon', text: '점심때까지 몰아 잔다', result: '밤에 잠이 안 와 월요일이 힘들어요.', mood: '걱정' }, { id: 'usual', text: '평소와 비슷한 때 일어나 움직인다', result: '밤에 제때 졸려 월요일이 가뿐해요.', mood: '편안함' }, { id: 'screen', text: '누운 채로 영상을 본다', result: '몸이 더 나른해요.', mood: '걱정' }] }, 0.3, { conclude: '잠자기 전 화면을 멀리하고, 날마다 비슷한 때 자고 일어나면 다음 날이 가뿐해요.' }),
            { prompt: '모둠에서 이준이에게 줄 잠자리 조언 한마디를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '잠자기 전에 하면 다음 날이 가뿐해지는 행동 하나를 써요.' }] },
        notes: '체계도의 도전 \'내 습관과 비교\'는 학생 습관을 묻지 않도록 \'가상 인물에게 조언하기\'로 바꾸었다.',
      }),
      X('activity.week-chart', {
        title: '이준이의 일주일 개운함 그래프', method: '예시 일주일 기록 그래프', tool: 'chart', minutes: 14,
        levels: { easy: '막대 끝에 값이 보이고, 사흘(수·목·금) 막대만 완성한다.', base: '평일 닷새 막대를 완성하고, 이레 그래프에서 가장 낮은 날을 찾는다.', challenge: '메모와 함께 읽어 낮은 날의 까닭을 추론한다.' },
        activity: {
          title: '가상 일주일 기록 막대그래프', tool: 'chart',
          teacher: '"가상 친구 이준이가 날마다 아침에 개운한 정도를 1~5점으로 적었어요(실제 통계 아님)." 막대를 완성하게 한 뒤 가장 낮은 날을 찾게 한다. "수요일엔 그냥 운이 나빴어요"라는 학생에게 "전날 밤 메모를 보세요. 무엇과 함께 변했을까요?"라고 되묻는다. 학생 자신의 잠 기록은 받지 않는다.',
          task: '이준이의 가상 기록으로 막대그래프를 완성하고, 개운함과 함께 변한 일을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '이준이의 평일 닷새 아침 개운함 점수로 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '이준이의 아침 개운함(가상)', unit: '점', xLabel: '요일', yLabel: '개운함', data: FRESH.slice(0, 5), max: 5, scale: 1 }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '이준이의 수·목·금 개운함 막대를 완성해요(가상 자료).', toolOptions: { given: [0, 1] } } } },
            { prompt: '이준이가 가장 덜 개운했던 요일은?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '이준이의 아침 개운함(가상)', unit: '점', data: FRESH, max: 5, scale: 1, choices: ['월', '수', '토'], question: '가장 낮은 요일은?' }, target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '메모 "화요일 밤 늦게까지 영상"을 보고 수요일이 낮은 까닭을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '이준이의 아침 개운함(가상)', unit: '점', data: FRESH, max: 5, scale: 1, choices: ['전날 밤 늦게 잠들었다', '수요일에 비가 왔다', '급식이 맛있었다'], question: '낮은 까닭은?', why: ['', '날씨는 메모에 없어요.', '급식은 개운함과 이어지기 어려워요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '전날 밤 잠과 다음 날 아침 느낌은 함께 변해요. 기록하면 그 연결이 보여요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상)에서 가장 개운했던 요일은?', options: ['월', '수', '토'], answer: '토' }] },
        notes: '점수는 가상 자료이며 잠·운동 권장 시간과 상관없다. 그리기 문항은 휴대폰 누름 영역(44px) 때문에 막대를 평일 닷새로 줄였고, 읽기 문항은 이레 그래프다.',
      }),
      X('activity.move-plan', {
        title: '쉬는 시간 움직임 계획', method: '쉬는 시간 움직임 계획', tool: 'timer', minutes: 14,
        levels: { easy: '구간 타이머를 움직임·쉬기 2번으로 맞춘다.', base: '구간 타이머를 3번으로 맞추고 움직임 카드 차례를 정한다.', challenge: '모둠 계획을 맞춘 뒤 안전 점검까지 하고 해 본다.' },
        activity: {
          title: '움직임 구간 타이머', tool: 'timer',
          teacher: '"쉬는 시간에 교실에서 할 수 있는 움직임 계획을 짜 볼까요? 시간은 우리 반 약속값으로 정해요." 교사가 정한 값을 칠판에 적고 타이머를 맞추게 한다. "운동은 체육 시간에만 해요"라는 학생에게 "앉아 있던 몸을 잠깐 풀어 주면 다음 수업도 개운해요"라고 말해 준다. 실내에서 뛰지 않도록 셋째 문항의 안전 점검 칸부터 함께 읽는다.',
          task: '쉬는 시간 움직임 구간을 타이머로 짜고, 움직임 차례와 안전 점검을 해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '움직임 30초·쉬기 10초를 3번 하도록 맞춰요(우리 반 약속값).', toolOptions: { title: '쉬는 시간 움직임(우리 반 약속값)', plan: { work: 10, rest: 10, rounds: 1 }, labels: ['움직임', '쉬기'], workStep: 10 }, target: { plan: { work: 30, rest: 10, rounds: 3 } }, difficulty: 0.2,
              levels: { easy: { prompt: '움직임 30초·쉬기 10초를 2번 하도록 맞춰요(우리 반 약속값).', target: { plan: { work: 30, rest: 10, rounds: 2 } } } } },
            TORD('교실 움직임 카드를 몸풀기부터 차례대로 놓아요.', '움직임 차례', ['제자리 걷기', '팔 크게 돌리기', '몸 옆으로 늘이기', '숨 고르기'], 3, 0.2),
            { prompt: '해 보기 전에 안전 점검 칸을 모두 확인해요.', toolOptions: { title: '움직이기 전 안전 점검', safety: ['책상 사이를 넓게 서요', '교실에서 뛰지 않아요', '친구와 부딪히지 않게 해요'] }, target: { safety: true }, difficulty: 0.1, conclude: '쉬는 시간의 짧은 움직임도 몸을 깨워요. 안전 점검을 먼저 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '쉬는 시간 움직임 계획을 써요.', columns: ['움직임', '몇 번'], cells: [['', ''], ['', '']] }] },
        notes: '타이머 값은 우리 반 약속값이다. 운동 권장 시간 수치로 말하지 않는다.',
      }),
      X('activity.day-clock', {
        title: '이준이의 하루 시계 계획', method: '하루 시계에 잠·활동 표시', tool: 'clock', minutes: 14,
        levels: { easy: '정각만 맞추는 시계로 이준이의 계획 시각을 맞춘다.', base: '10분 단위로 일어나는 때·움직이는 때·잠드는 때를 맞춘다.', challenge: '바꾼 계획 시각을 5분 단위로 맞추고 처음 계획과 견준다.' },
        activity: {
          title: '가상 친구의 하루 시각 맞추기', tool: 'clock',
          teacher: '"가상 친구 이준이가 세운 하루 계획이에요. 시계에 맞춰 볼까요?" 시각은 이준이의 계획일 뿐 정답 수면 시간이 아니라고 밝힌다. 긴바늘부터 맞추게 한다. "밤늦게 자도 아침에 늦게 일어나면 똑같아요"라는 학생에게 "학교 가는 시각은 정해져 있죠. 그럼 무엇을 바꿔야 할까요?"라고 묻는다. 학생 가정의 실제 시각은 묻지 않는다.',
          task: '이준이의 하루 계획 시각을 시계에 맞추고, 바꾼 계획과 견주어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CLK('이준이가 일어나기로 한 시각(7시 10분)을 맞춰요.', [7, 10], [7], [6, 55], 0.15),
            CLK('이준이가 쉬는 시간에 움직이기로 한 시각(10시 40분)을 맞춰요.', [10, 40], [10], [10, 35], 0.2),
            CLK('이준이가 집에서 줄넘기하기로 한 시각(4시 30분)을 맞춰요.', [4, 30], [4], [4, 45], 0.2),
            CLK('이준이가 잠자리에 들기로 한 시각(9시 50분)을 맞춰요.', [9, 50], [9], [9, 35], 0.25, { conclude: '잠드는 때와 일어나는 때를 날마다 비슷하게 정하면 몸이 그 차례에 익숙해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이준이의 하루 계획에서 바꾸면 좋을 시각 하나와 까닭을 써요.' }] },
        notes: '시각은 가상 인물의 계획이며 권장 수면 시간이 아니다. saf-drug 의 잠자리 시각(카페인) 장면과 겹치지 않게 하루 전체 계획으로 꾸몄다.',
      }),
      X('wrap.habit-check', {
        title: '잠·움직임 해 볼 일 점검', method: '잠·활동 습관 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '해 볼 일 3칸에 이번 주 해 볼 것을 표시한다.', base: '해 볼 일 5칸에 표시한다.', challenge: '표시한 것 가운데 바꿀 것 하나를 골라 쓴다.' },
        wrap: {
          teacher: '"이번 주에 잠과 움직임을 위해 해 볼 일에 스스로 표시해 볼까요? 정답은 없고 친구와 견주지 않아요." 지금 몇 시에 자는지는 쓰지 않고 \'해 볼 일\'만 고르게 한다. "다 못 하겠어요"라는 학생에게 "하나만 골라도 좋아요. 작은 것부터요"라고 말해 준다.',
          exitTicket: [
            SELFK('이번 주 해 볼 일', ['자기 전 화면 끄기', '날마다 비슷한 때 자기', '쉬는 시간에 걷기', '계단으로 다니기', '주말에도 비슷한 때 일어나기'], '이번 주에 해 볼 일에 스스로 표시해요(정답 없음).', { easy: 3, base: 5 }),
            { type: 'choice', prompt: '"주말에 몰아 자면 된다"는 말에 알맞은 답은?', options: ['맞다, 몰아 자면 된다', '날마다 비슷하게 자는 것이 낫다', '잠은 안 자도 된다'], answer: 1, difficulty: 0.15, explain: '몰아 자면 오히려 평일 리듬이 흐트러져요.' },
            { type: 'short', prompt: '이번 주에 가장 먼저 바꿔 볼 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '잠과 움직임',
          items: [
            { type: 'check', prompt: '이번 주 해 볼 일에 표시해요.', options: ['자기 전 화면 끄기', '쉬는 시간에 걷기', '계단으로 다니기'] },
            { type: 'short', prompt: '움직임을 늘릴 방법 하나를 써요.' },
          ],
        },
      }),
      X('wrap.small-plan', {
        title: '일주일 작은 실천 계획', method: '일주일 작은 실천 계획', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 보고 한 문장을 쓰고 기준 2개를 점검한다.', base: '잠이나 움직임 실천 계획 두 문장을 쓰고 기준 3개(구체적·지킬 수 있음·확인 방법)를 점검한다.', challenge: '걸림돌과 그때의 대비를 더하고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"이번 주 잠이나 움직임 실천 계획을 두 문장으로 써 볼까요?" \'지킬 수 있음\'은 이번 주에 정말 할 수 있는지라고 짚는다. "매일 두 시간 운동하겠다"라고 쓰는 학생에게 "지킬 수 있을까요? \'쉬는 시간마다 복도를 한 바퀴 걷겠다\'처럼 작게 써요"라고 말해 준다. 도전에서는 \'비 오는 날엔…\'처럼 걸림돌 대비를 더한다.',
          exitTicket: [
            RUBX('잠이나 움직임 실천 계획을 두 문장으로 써요.', { topic: '이번 주 잠이나 움직임 실천 계획을 두 문장으로 써요(지금 몇 시에 자는지는 쓰지 않아요).', title: '일주일 실천 계획', starter: '나는 이번 주 ___ 때 ___ 하겠다. 지켰는지는 ___로 확인하겠다.', crit: ['언제 무엇을 할지 구체적으로 썼다', '이번 주에 지킬 수 있는 일이다', '지켰는지 확인할 방법을 썼다'], must: [['만약', '그럴 때', '못 하면']], chars: [20, 160] }),
            { type: 'choice', prompt: '지킬 수 있는 실천 계획은?', options: ['매일 두 시간 운동', '쉬는 시간마다 복도 한 바퀴 걷기', '잠을 아예 줄이기'], answer: 1, difficulty: 0.15, explain: '작고 구체적인 계획이 오래 지켜져요.' },
          ],
        },
        worksheet: {
          title: '일주일 실천 계획',
          items: [
            { type: 'short', prompt: '이번 주 실천 계획 한 문장을 써요.' },
            { type: 'short', prompt: '계획을 못 지킬 것 같은 때와 그때 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 눈·이 건강 (학교보건법 제9조·제9조의2, 보건교육 초 개인위생, 체계도 재료) ========
  {
    const X = mk('eye-dental');
    const DECAY = ['단 간식을 먹어요', '찌꺼기가 이에 남아요', '세균이 산을 만들어요', '이가 조금씩 상해요'];
    const ZONE = ['위 바깥쪽', '위 안쪽', '아래 바깥쪽', '아래 안쪽'];
    const ROOM = { grid: [6, 4], title: '우리 교실(가상)', legend: false, places: [
      { name: '창가 자리', icon: 'dot', at: [0, 1] }, { name: '구석 자리', icon: 'dot', at: [5, 3] }, { name: '가운데 자리', icon: 'school', at: [2, 2] },
      { name: '칠판', icon: 'library', at: [2, 0] }, { name: '사물함', icon: 'house', at: [5, 0] }, { name: '교실 문', icon: 'dot', at: [0, 3] }] };
    M.push(
      X('intro.eye-branch', {
        title: '눈을 지키는 선택', method: '눈을 지키는 선택', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 보기 2개(계속 보기·쉬며 먼 곳 보기)의 결과를 견준다.', base: '보기 3개의 결과를 보고 눈을 지키는 선택을 함께 고른다.', challenge: '그 선택이 눈에 좋은 까닭을 말한다.' },
        intro: {
          teacher: '"가상 친구 해온이가 태블릿으로 영상을 오래 봐서 눈이 뻑뻑하대요. 어떻게 하면 좋을까요?" 시연 단추로 \'화면을 쉬고 먼 곳을 본다\'를 고르고 결과를 읽는다. "눈 피로는 그냥 두면 풀려요"라는 말에는 "계속 보면 눈은 쉴 틈이 없어요. 잠깐 멈추고 먼 곳을 보면 눈 근육이 쉬어요"라고 말해 준다.',
          student: '해온이가 고를 수 있는 행동 가운데 눈을 쉬게 하는 것을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '해온: 영상을 오래 봐서 눈이 뻑뻑해요', ask: '어떻게 할까요?', motif: 'sun', choices: [{ id: 'more', text: '조금만 더 본다', result: '눈이 더 침침해져요.', mood: '걱정' }, { id: 'rest', text: '화면을 쉬고 창밖 먼 곳을 본다', result: '눈이 한결 편해져요.', mood: '편안함' }, { id: 'rub', text: '눈을 세게 비빈다', result: '눈이 빨개져요.', mood: '걱정' }] }, sequence: [{ choice: 'rest' }] },
          art: art('a paper child looking out of a paper window at far paper mountains, a paper tablet resting face-down on the desk', '눈도 쉬어야 해요', 'sun', 'sky'),
        },
      }),
      X('intro.eye-tooth-find', {
        title: '눈과 이를 몸에서 찾기', method: '눈과 이의 생김새', tool: 'body', minutes: 5,
        levels: { easy: '교사가 두 곳(눈·입안)을 고르는 모습을 보인다.', base: '눈·입안을 고른 뒤 교과서 그림으로 눈의 부분과 이의 종류 네 가지를 짚는다.', challenge: '부분마다 하는 일을 말한다.' },
        intro: {
          teacher: '"오늘은 눈과 이를 지켜요. 종이 몸에서 눈과 입안을 찾아볼까요?" 시연 단추로 눈과 혀(입안 — 이는 따로 칸이 없어 혀 칸으로 짚는다)가 골라지는 모습을 보인다. 이어 교과서 그림으로 앞니·송곳니·어금니와 눈의 부분을 짚는다. "이는 다 똑같이 생겼어요"라는 말에는 "앞니는 자르고, 어금니는 갈아요. 생김새가 달라서 닦는 방법도 조금씩 달라요"라고 말해 준다.',
          student: '이의 종류 가운데 하나를 골라 그 이가 하는 일을 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '혀', '목', '어깨'], names: true }, sequence: [{ parts: ['눈'] }, { parts: ['눈', '혀'] }] },
          art: art('a big paper eye and a row of paper teeth (front teeth, canine, molars) laid out on a paper tray like a specimen board', '눈과 이를 살펴요', 'star', 'mint'),
        },
        notes: '종이 몸에는 눈의 부분·이의 종류를 나누는 칸이 없다. 눈의 부분과 이의 종류는 교과서 그림이나 실물 모형으로 보인다.',
      }),
      X('activity.decay-order', {
        title: '충치가 생기는 차례', method: '충치가 생기는 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 차례로 놓는다.', base: '장면 4장을 차례로 놓는다.', challenge: '틀린 장면을 빼고 놓은 뒤, 장면마다 끊는 행동을 잇는다.' },
        activity: {
          title: '충치 장면 차례와 끊는 행동', tool: 'story',
          teacher: '"충치는 어떤 차례로 생길까요?" 장면을 놓을 때마다 \'그다음엔?\'을 묻는다. "충치는 단것만 원인이에요"라는 학생에게 "밥이나 빵 찌꺼기도 이에 남으면 세균이 좋아해요. 먹은 뒤 닦지 않는 것이 함께 원인이에요"라고 말해 준다. 둘째 문항에서는 장면마다 차례를 끊는 행동을 잇게 한다.',
          task: '충치가 생기는 장면을 차례대로 놓고, 장면마다 끊는 행동을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('충치가 생기는 장면을 차례대로 놓아요.', DECAY, { easy: [1, 2, 3], trap: '이가 저절로 튼튼해져요', motifs: ['fruit', 'cloud', 'storm', 'rain'] }, 0.2),
            MATCH('장면마다 차례를 끊는 행동 카드를 이어요.', { pairs: [['찌꺼기가 이에 남아요', '먹은 뒤 이 닦기'], ['단 간식을 먹어요', '정한 때에만 먹기'], ['세균이 산을 만들어요', '물로 입 헹구기']], easy: 2, more: [['이가 조금씩 상해요', '치과 검진 받기']], extra: ['사탕 오래 물기'] }, 0.25),
            { prompt: '모둠에서 "밥 먹고 이 닦기가 귀찮을 때" 끊는 방법 하나를 말해요.', free: true, talk: true, conclude: '충치는 찌꺼기 → 세균 → 산 → 이가 상함 차례로 생겨요. 먹고 닦으면 차례가 끊겨요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '충치가 생기는 차례를 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '먹음, 찌꺼기, 세균의 산, 이가 상함' }] },
      }),
      X('activity.brush-timer', {
        title: '구역 나눠 이 닦기 실습', method: '구역 나눠 이 닦기 실습', tool: 'timer', minutes: 14,
        levels: { easy: '구역 카드 2장(위 바깥쪽·위 안쪽)을 차례로 놓는다.', base: '구역 카드 4장을 차례로 놓고 구역 타이머(우리 반 연습값)를 맞춘다.', challenge: '빠뜨리기 쉬운 구역(안쪽·씹는 면)을 찾아 점검 칸에 표시한다.' },
        activity: {
          title: '구역 카드와 칫솔질 타이머', tool: 'timer',
          teacher: '"이를 네 구역으로 나누어 차례대로 닦아 볼까요?" 칫솔 없이 손 모양으로 먼저 따라 하게 한다. 타이머 값은 우리 반 연습값이고, 칫솔질 방법·시간은 보건 선생님 안내를 따른다고 밝힌다. "앞니만 하얗게 닦으면 돼요"라는 학생에게 "보이지 않는 안쪽과 어금니 씹는 면에 찌꺼기가 가장 많이 남아요"라고 말해 준다.',
          task: '이 구역 카드를 차례대로 놓고, 구역 타이머로 연습한 뒤 빠뜨린 곳을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            TORD('이를 닦는 구역 카드를 차례대로 놓아요.', '칫솔질 구역 차례', ZONE, 2, 0.2),
            { prompt: '구역마다 닦기 20초·옮기기 10초를 4번 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '칫솔질 연습(우리 반 연습값)', plan: { work: 10, rest: 10, rounds: 1 }, labels: ['닦기', '옮기기'], workStep: 10 }, target: { plan: { work: 20, rest: 10, rounds: 4 } }, difficulty: 0.2,
              levels: { easy: { prompt: '구역마다 닦기 20초·옮기기 10초를 2번 하도록 맞춰요(우리 반 연습값).', target: { plan: { work: 20, rest: 10, rounds: 2 } } } } },
            { prompt: '연습한 뒤 빠뜨리기 쉬운 곳을 닦았는지 스스로 표시해요.', toolOptions: { title: '빠뜨리기 쉬운 곳' }, target: { selfCheck: ['안쪽 면을 닦았다', '어금니 씹는 면을 닦았다', '혀도 살살 닦았다'] }, difficulty: 0.1, conclude: '이는 구역을 나누어 차례대로, 안쪽과 씹는 면까지 빠짐없이 닦아요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '이를 닦을 때 빠뜨리지 않을 곳에 표시해요.', options: ['안쪽 면', '어금니 씹는 면', '혀'] }] },
        notes: '칫솔질 방법·시간은 사람 확인 목록에 있다. 타이머 값은 우리 반 연습값이다.',
      }),
      X('activity.light-map', {
        title: '교실 자리 밝기 지도', method: '교실 자리 밝기 지도', tool: 'map', minutes: 14,
        levels: { easy: '두 곳만 있는 지도에서 이름을 보며 핀을 꽂고 할 일을 고른다.', base: '교실 지도에서 눈이 힘든 자리·편한 자리에 핀을 꽂고 할 일을 고른다.', challenge: '이름이 숨겨진 지도에서 찾고, 모둠에서 자리 바꾸기 제안을 말한다.' },
        activity: {
          title: '밝기 지도와 눈 지키기', tool: 'map',
          teacher: '"우리 교실(가상)에서 햇빛이 화면에 비쳐 눈부신 자리는 어디일까요?" 핀을 꽂을 때마다 \'그 자리에서 눈을 지키려면?\'을 묻는다. "어두운 자리는 눈을 감고 있으면 돼요"라는 학생에게 "어두우면 눈에 힘을 더 주게 돼요. 조명을 켜 달라고 말할 수 있어요"라고 말해 준다. 지도는 가상 교실이다.',
          task: '가상 교실 지도에서 눈이 힘든 자리와 편한 자리에 핀을 꽂고, 그 자리에서 할 일을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MAPQ(ROOM, '창가 자리', '햇빛이 화면에 비쳐 눈부신 자리에 핀을 꽂아요.', '이 자리에서 할 일은?', ['블라인드를 조금 내린다', '눈을 찡그리고 본다', '화면을 더 밝게 한다'], 0, ['', '찡그리면 눈이 더 피로해요.', '눈부심이 더 심해져요.'], 0.2),
            MAPQ(ROOM, '구석 자리', '조명이 닿지 않아 어두운 자리에 핀을 꽂아요.', '이 자리에서 할 일은?', ['책에 얼굴을 바짝 댄다', '조명을 켜 달라고 말한다', '그냥 참는다'], 1, ['너무 가까이 보면 눈이 지쳐요.', '', '참기보다 말해요.'], 0.25),
            MAPQ(ROOM, '가운데 자리', '빛이 고르게 들어 눈이 편한 자리에 핀을 꽂아요.', '이 자리에서도 할 일은?', ['쉬지 않고 계속 본다', '가끔 먼 곳을 보며 쉰다', '고개를 숙여 가까이 본다'], 1, ['편한 자리여도 눈은 쉬어야 해요.', '', '바른 자세로 알맞게 떨어져 봐요.'], 0.3),
            { prompt: '모둠에서 눈이 편하도록 교실을 바꿀 제안 하나를 정해 말해요.', free: true, talk: true, conclude: '눈부시거나 어두운 자리는 빛을 고치고, 편한 자리에서도 가끔 먼 곳을 보며 쉬어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '눈이 힘든 자리에서 할 수 있는 일 하나를 써요.' }] },
        notes: '지도는 가상 교실이다. 시력이 낮은 학생을 앞자리로 옮기는 일은 개인 정보이므로 수업 중에 말하지 않는다.',
      }),
      X('activity.snack-pick', {
        title: '이를 생각한 습관 고르기', method: '이를 생각한 간식 고르기', tool: 'kitchen', minutes: 14,
        levels: { easy: '보기 3개를 두 칸에 나눈다.', base: '보기 5개를 두 칸에 나눈다.', challenge: '보기가 늘고, 둘째 문항에서 간식 뒤 할 일을 고른 까닭을 말한다.' },
        activity: {
          title: '간식 습관 나누고 고르기', tool: 'kitchen',
          teacher: '"이를 생각한다는 것은 무엇을 안 먹는 걸까요, 어떻게 먹는 걸까요?" 카드를 놓을 때마다 까닭을 말하게 한다. "사탕은 나쁜 음식이니까 절대 안 돼요"라는 학생에게 "음식을 나쁘다고 정하기보다, 사탕을 오래 물고 있는 습관이 이에 부담이 된다는 거예요. 먹은 뒤 헹구고 닦으면 돼요"라고 말해 준다. 학생 자신의 간식 습관은 묻지 않는다.',
          task: '간식 습관 카드를 \'이를 생각한 습관\'과 \'이에 부담 되는 습관\'으로 나누고, 간식 뒤 할 일을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SORT('간식 습관 카드를 두 칸에 나누어요.', { slots: ['이를 생각한 습관', '이에 부담 되는 습관'], groups: { '이를 생각한 습관': ['먹고 물로 헹구기', '정한 때에만 먹기', '먹고 이 닦기'], '이에 부담 되는 습관': ['사탕 오래 물고 있기', '자기 전 단 간식'] }, easy: 2, extra: { '이에 부담 되는 습관': ['단 음료 조금씩 계속'] } }, 0.2),
            PICK('급식 뒤 이를 위해 할 일만 골라 담아요.', { basket: '급식 뒤 할 일', good: ['이 닦기', '물로 입 헹구기'], bad: ['끈적한 젤리 먹기'], easy: 1, easyBad: 1, moreGood: ['혀도 살살 닦기'], moreBad: ['칫솔 친구와 나눠 쓰기'] }, 0.25),
            { prompt: '모둠에서 고른 할 일의 까닭을 \'이에 무엇이 남지 않게\'로 말해요.', free: true, talk: true, conclude: '이를 지키는 것은 음식을 가리는 것보다 먹는 방법과 먹은 뒤 습관이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '간식을 먹은 뒤 이를 위해 할 일 하나를 써요.' }] },
        notes: '음식을 좋다·나쁘다로 나누지 않고 습관으로 나누었다.',
      }),
      X('wrap.care-web', {
        title: '눈·이 지키기 생각 그물', method: '눈·이 지키기 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(눈 쉬기·이 닦기)에 습관 카드를 붙인다.', base: '가지 4개(눈 쉬기·밝기와 자세·이 닦기·간식 습관)에 습관 카드를 붙인다.', challenge: '카드가 늘고, 눈과 이에 함께 좋은 습관을 찾아 말한다.' },
        wrap: {
          teacher: '"오늘 배운 눈과 이 지키기 습관을 그물로 정리해 볼까요?" 가지마다 카드를 붙이게 한다. 도전에서는 \'정해 둔 때에 쉬기\'처럼 둘에 함께 좋은 습관을 찾게 한다. "눈 피로는 저절로 풀려요" 카드가 나오면 "쉬어야 풀려요"라고 되짚는다.',
          exitTicket: [
            WEBX('"눈·이 지키기" 그물의 가지에 습관 카드를 붙여요.', { topic: '눈·이 지키기', slots: ['눈 쉬기', '밝기와 자세', '이 닦기', '간식 습관'], easySlots: ['눈 쉬기', '이 닦기'], easy: 1,
              groups: { '눈 쉬기': ['가끔 먼 곳 보기'], '밝기와 자세': ['알맞게 떨어져 보기'], '이 닦기': ['안쪽까지 닦기'], '간식 습관': ['먹고 물로 헹구기'] }, extra: { '눈 쉬기': ['화면 쉬는 때 정하기'], '이 닦기': ['자기 전 꼭 닦기'] }, traps: ['눈은 저절로 쉬어요'] }),
            { type: 'choice', prompt: '"충치는 단것만 원인이다"에 알맞은 답은?', options: ['맞다', '먹고 안 닦는 것도 원인이다', '이는 저절로 낫는다'], answer: 1, difficulty: 0.15, explain: '어떤 음식이든 찌꺼기가 남으면 충치가 생길 수 있어요.' },
          ],
        },
        worksheet: {
          title: '눈·이 지키기',
          items: [
            { type: 'table', prompt: '눈과 이를 지키는 습관을 하나씩 써요.', columns: ['눈', '이'], cells: [['', '']] },
            { type: 'short', prompt: '눈과 이에 함께 좋은 습관 하나를 써요.' },
          ],
        },
      }),
      X('wrap.pledge-write', {
        title: '눈·이 다짐 두 문장', method: '눈·이 다짐 두 문장', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 보고 한 문장을 쓰고 기준 2개를 점검한다.', base: '눈·이를 지키는 다짐 두 문장을 쓰고 기준 3개를 점검한다.', challenge: '짝 문장을 읽고 고칠 곳을 알려 준 뒤 내 글도 한 군데 고친다.' },
        wrap: {
          teacher: '"눈과 이를 지키는 다짐을 한 가지씩 두 문장으로 써 볼까요?" 기준표의 \'구체적\'은 언제·어떻게가 들어간 것이라고 짚는다. "눈과 이를 소중히 하겠다"처럼 쓰는 학생에게 "무엇을 하면 소중히 하는 걸까요? \'영상을 볼 때 정한 때마다 먼 곳을 보겠다\'처럼 써 봐요"라고 말해 준다. 내 시력이나 충치 여부는 쓰지 않는다.',
          exitTicket: [
            RUBX('눈과 이를 지키는 다짐을 두 문장으로 써요.', { topic: '눈과 이를 지키는 다짐을 한 가지씩 두 문장으로 써요(내 시력·충치는 쓰지 않아요).', title: '눈·이 다짐', starter: '나는 ___ 때 눈을 위해 ___하겠다. 이를 위해 ___하겠다.', crit: ['언제·어떻게를 구체적으로 썼다', '눈과 이를 하나씩 썼다', '이번 주에 지킬 수 있다'], must: [['눈'], ['이를', '이는', '이 닦']], chars: [20, 150] }),
            { type: 'choice', prompt: '가장 구체적인 다짐은?', options: ['눈을 소중히 하겠다', '저녁을 먹고 바로 이를 닦겠다', '건강하게 살겠다'], answer: 1, difficulty: 0.15, explain: '언제·무엇을이 들어가야 지키기 쉬워요.' },
          ],
        },
        worksheet: {
          title: '나의 눈·이 다짐',
          items: [
            { type: 'short', prompt: '눈을 지키는 다짐 한 문장을 써요.' },
            { type: 'short', prompt: '이를 지키는 다짐 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 마음 건강과 도움 요청 (학교보건법 제9조·제9조의2, 생명존중 초 감정 알아차리기·도움 요청 — 체계도 재료) ========
  {
    const X = mk('mind-stress');
    const CASE = ['수행평가 준비가 밀렸어요', '마음이 조마조마해요', '밤늦게 혼자 버텨요', '다음 날 더 지쳐요'];
    const HELP = { grid: [6, 4], title: '우리 학교(가상)', legend: false, places: [
      { name: '상담실', icon: 'house', at: [1, 0] }, { name: '보건실', icon: 'hospital', at: [4, 0] }, { name: '교무실', icon: 'office', at: [2, 2] },
      { name: '도서실', icon: 'library', at: [5, 2] }, { name: '운동장', icon: 'park', at: [0, 3] }, { name: '매점', icon: 'market', at: [4, 3] }] };
    M.push(
      X('intro.signal-scale', {
        title: '라온이의 마음 날씨 눈금', method: '요즘 내 마음 눈금', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 3칸 눈금으로 라온이의 마음을 읽어 준다.', base: '5칸 눈금에서 라온이의 마음이 어디쯤일지 함께 정한다.', challenge: '라온이의 마음에 알맞은 이름(걱정·답답함 등)을 붙인다.' },
        intro: {
          teacher: '"가상 친구 라온이는 내일 발표 생각에 마음이 흐리대요. 마음 날씨 눈금은 어디쯤일까요?" 시연 단추로 눈금이 3에 놓이는 모습을 보인다. "힘든 마음은 혼자 견뎌야 해요"라는 말에는 "마음에도 날씨가 있어요. 흐린 날이 있는 건 자연스러워요. 알아차리면 돌볼 수 있어요"라고 말해 준다. 학생 자신의 마음 눈금은 묻지 않고, 말하고 싶은 학생은 쉬는 시간에 따로 이야기할 수 있다고 알려 준다.',
          student: '라온이의 마음에 이름을 붙인다면 무엇일지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '라온: 내일 발표 생각에 마음이 흐려요', feeling: '걱정', steps: 5, scaleLabels: { 1: '맑음', 5: '천둥' } }, sequence: [{ level: 3 }] },
          art: art('a paper child under a small grey paper cloud, beside a five-step paper weather scale from sun to thunder', '마음에도 날씨가 있어요', 'cloud', 'lavender'),
        },
        notes: '체계도는 \'요즘 내 마음\'을 표시하게 적었으나, 학생 마음 상태를 묻지 않도록 가상 인물의 눈금으로 바꾸었다.',
      }),
      X('intro.stress-body', {
        title: '스트레스가 보내는 몸 신호', method: '스트레스가 보내는 몸 신호', tool: 'body', minutes: 5,
        levels: { easy: '교사가 두 곳(어깨·배)이 골라지는 모습을 보인다.', base: '네 곳(어깨·배·가슴·목)이 골라지는 모습을 보고 신호를 말한다.', challenge: '곳마다 어떤 느낌일지 말로 나타낸다.' },
        intro: {
          teacher: '"걱정이 많으면 몸도 신호를 보내요. 어디에서 느껴질까요?" 시연 단추로 종이 몸의 어깨 → 배 → 가슴 → 목이 골라지는 모습을 보인다. 어깨가 뭉치고, 배가 아프고, 가슴이 두근거리고, 목이 답답할 수 있다고 짚는다. "마음은 몸과 상관없어요"라는 말에는 "발표 전에 배가 살살 아팠다는 이야기를 들어 본 적 있나요? 몸 신호는 마음을 알아차리게 도와요"라고 말해 준다. 머리 칸은 없어 목 칸으로 짚는다.',
          student: '스트레스 몸 신호 하나를 골라 어떤 느낌일지 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['어깨', '배', '가슴', '목', '무릎', '발목'], names: true }, sequence: [{ parts: ['어깨', '배'] }, { parts: ['어깨', '배', '가슴', '목'] }] },
          art: art('a paper body figure with small paper lightning marks on the shoulders, the chest and the tummy, and a paper cloud above the head', '몸이 보내는 신호', 'storm', 'lavender'),
        },
        notes: '몸 신호가 계속되면 보건실·상담실에 알린다고 함께 말해 준다. 학생 자신의 증상은 묻지 않는다.',
      }),
      X('activity.case-story', {
        title: '라온이의 원인과 결과', method: '가상 인물의 원인과 결과', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 원인 → 마음 → 행동 차례로 놓는다.', base: '장면 4장(결과까지)을 차례로 놓는다.', challenge: '틀린 장면을 빼고 놓은 뒤, 결과를 바꿀 행동을 골라 담는다.' },
        activity: {
          title: '원인 → 마음 → 행동 → 결과', tool: 'story',
          teacher: '"라온이는 수행평가 준비가 밀려 마음이 조마조마해요. 그다음엔 어떻게 되었을까요?" 장면을 놓으며 원인·마음·행동·결과를 하나씩 이름 붙인다. "도움을 청하면 약한 거예요"라는 학생에게 "혼자 밤늦게 버틴 결과를 보세요. 도움을 청하는 것도 힘이에요"라고 말해 준다. 셋째 문항은 결과를 바꿀 행동을 고른다.',
          task: '가상 인물의 장면을 원인 → 마음 → 행동 → 결과 차례로 놓고, 결과를 바꿀 행동을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('라온이의 장면을 원인 → 마음 → 행동 → 결과 차례로 놓아요.', CASE, { easy: [0, 1, 2], trap: '아무 일도 없었어요', motifs: ['star', 'cloud', 'moon', 'rain'] }, 0.2),
            ORDER('친구와 서먹해진 다온이의 장면을 차례로 놓아요.', ['친구가 답장을 안 해요', '마음이 서운해요', '혼자 계속 곱씹어요', '잠이 안 와요'], { easy: [0, 1, 2], trap: '바로 다 잊었어요' }, 0.25),
            PICK('라온이의 결과를 바꿀 행동 카드만 골라 담아요.', { basket: '결과를 바꿀 행동', good: ['선생님께 준비 방법 묻기', '할 일을 작게 나누기'], bad: ['혼자 밤새 버티기'], easy: 1, easyBad: 1, moreGood: ['잠깐 숨 고르기'], moreBad: ['아무에게도 말 안 하기'] }, 0.3, { conclude: '힘든 마음의 원인을 알면 행동을 바꿀 수 있어요. 도움을 청하는 것도 좋은 행동이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '라온이에게 해 주고 싶은 도움의 말 한 문장을 써요.' }] },
        notes: '라온·다온은 지어낸 인물이다. 학생이 겪는 스트레스를 발표시키지 않는다.',
      }),
      X('activity.calm-timer', {
        title: '마음 가라앉히기 구간', method: '마음 가라앉히기 구간', tool: 'timer', minutes: 14,
        levels: { easy: '구간 카드 2장(숨 고르기·몸 풀기)을 차례로 놓고 해 본다.', base: '구간 카드 3장을 놓고 타이머를 3번으로 맞춰 해 본다.', challenge: '구간을 직접 짜서 타이머를 맞춘 뒤 해 본 것을 표시한다.' },
        activity: {
          title: '가라앉히기 구간 타이머', tool: 'timer',
          teacher: '"마음이 조마조마할 때 쓸 수 있는 방법을 함께 해 볼까요?" 숨 고르기는 코로 천천히 들이쉬고 입으로 길게 내쉬기, 몸 풀기는 어깨 으쓱 내리기라고 몸짓으로 보인다. "이런 건 효과 없어요"라는 학생에게 "한 번에 다 풀리진 않아도, 몸이 조금 느슨해지는 걸 느껴 보세요"라고 말해 준다. 시간은 우리 반 연습값이다. 해 본 것 표시는 정답이 없다.',
          task: '마음 가라앉히기 구간 카드를 차례대로 놓고, 타이머로 해 본 뒤 해 본 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            TORD('마음 가라앉히기 구간 카드를 차례대로 놓아요.', '가라앉히기 차례', ['숨 고르기', '어깨 으쓱 내리기', '좋은 기억 떠올리기'], 2, 0.2),
            { prompt: '하기 20초·쉬기 10초를 3번 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '가라앉히기(우리 반 연습값)', plan: { work: 10, rest: 10, rounds: 1 }, labels: ['하기', '쉬기'], workStep: 10 }, target: { plan: { work: 20, rest: 10, rounds: 3 } }, difficulty: 0.2,
              levels: { easy: { prompt: '하기 20초·쉬기 10초를 2번 하도록 맞춰요(우리 반 연습값).', target: { plan: { work: 20, rest: 10, rounds: 2 } } }, challenge: { prompt: '하기 30초·쉬기 10초를 3번으로 직접 짜 맞춰요(우리 반 연습값).', target: { plan: { work: 30, rest: 10, rounds: 3 } } } } },
            { prompt: '해 본 방법에 스스로 표시해요(정답 없음).', toolOptions: { title: '해 본 방법' }, target: { selfCheck: ['천천히 숨을 골랐다', '어깨를 풀었다', '좋은 기억을 떠올렸다'] }, difficulty: 0.1, conclude: '마음이 흔들릴 때 숨 고르기·몸 풀기·좋은 기억으로 먼저 가라앉히고, 계속 힘들면 어른께 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '마음이 조마조마할 때 먼저 해 볼 방법 하나를 써요.' }] },
      }),
      X('activity.help-dilemma', {
        title: '친구가 힘들어 보일 때', method: '친구가 힘들어 보일 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(말 걸기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(어른께 함께 가기)을 지나 근거를 고른다.', challenge: '갈림 3번(친구 이야기 지키기)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 친구가 계속 기운이 없어요', tool: 'dilemma',
          teacher: '"가상 친구 유나가 며칠째 기운이 없어 보여요. 어떻게 할까요?" 고를 때마다 유나에게 어떤 영향이 가는지 읽게 한다. "친구 일은 친구가 알아서 해야 해요"라는 학생에게 "혼자 끙끙 앓는 친구에게 \'괜찮아?\' 한마디가 큰 힘이 될 수 있어요"라고 말해 준다. 친구의 고민을 혼자 다 해결하려 하지 말고 믿을 만한 어른께 함께 가는 것이 돕는 방법이라고 짚는다.',
          task: '갈림길마다 친구를 돕는 선택을 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '친구가 계속 기운이 없어요',
            steps: [
              { text: '짝 유나가 며칠째 말이 없고 쉬는 시간에도 엎드려 있어요.', motif: 'cloud',
                good: ['ask', '쉬는 시간에 "요즘 괜찮아?"라고 조용히 묻는다', '유나가 "사실 요즘 힘들어"라고 말해요.', [['유나', '마음을 꺼내요', 1]]],
                bad: ['ignore', '모른 척하고 지나간다', '유나가 계속 혼자 엎드려 있어요.', '모른 척하면 친구는 혼자 남게 돼요.', [['유나', '외로워요', -1]]] },
              { text: '유나가 "잠도 잘 못 자고 걱정이 많아"라고 해요.', motif: 'moon',
                good: ['adult', '"상담 선생님께 같이 가 볼래?"라고 한다', '유나가 고개를 끄덕여요.', [['유나', '도움을 받아요', 1], ['나', '혼자 짊어지지 않아요', 1]]],
                bad: ['solo', '내가 다 해결해 주겠다고 한다', '나도 어떻게 할지 몰라 함께 지쳐요.', '친구 고민은 믿을 만한 어른과 함께 돕는 것이 좋아요.', [['나', '지쳐요', -1]]] },
              { text: '상담을 받고 온 날, 다른 친구가 "유나 무슨 일이래?"라고 물어요.', motif: 'house',
                good: ['keep', '"유나가 직접 말할 거야"라며 이야기를 지켜 준다', '유나가 나를 더 믿게 돼요.', [['유나', '마음이 놓여요', 1]]],
                bad: ['spread', '들은 이야기를 다 말해 준다', '유나가 속상해서 다시 입을 닫아요.', '친구의 고민을 퍼뜨리면 믿음이 깨져요.', [['유나', '상처받아요', -1]]] },
            ],
            ending: '말을 걸고, 어른께 함께 가고, 이야기를 지켜 주니 유나가 다시 웃었어요.',
            reasons: [{ id: 'ask', text: '먼저 묻는 한마디가 친구에게 힘이 된다' }, { id: 'adult', text: '믿을 만한 어른과 함께 도우면 더 안전하다' }, { id: 'weak', text: '도움을 청하는 것은 약한 것이다', why: '도움을 청하는 것도 용기예요.' }, { id: 'alone', text: '친구 고민은 나 혼자 해결해야 한다', why: '혼자 짊어지면 둘 다 지칠 수 있어요.' }],
            good: ['ask', 'adult'], aim: '친구를 돕는 선택',
            talk: '모둠에서 "힘들어 보이는 친구에게 건넬 첫마디"를 하나씩 말해요.',
            conclude: '힘들어 보이는 친구에게 먼저 묻고, 믿을 만한 어른께 함께 가고, 친구의 이야기를 지켜 줘요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '힘들어 보이는 친구에게 건넬 첫마디를 써요.' }] },
        notes: '유나는 지어낸 인물이다. 위급한 신호(자신을 해치겠다는 말 등)가 있을 때의 대응은 이 수업에서 다루지 않고, 교사는 학교 위기 대응 절차를 따른다.',
      }),
      X('activity.helper-map', {
        title: '도움 받을 곳 지도', method: '도움 받을 곳 지도', tool: 'map', minutes: 14,
        levels: { easy: '두 곳만 있는 지도에서 이름을 보며 핀을 꽂고 첫마디를 고른다.', base: '학교 지도에서 도움 받을 곳 세 군데에 핀을 꽂고 갈 때 첫마디를 고른다.', challenge: '이름이 숨겨진 지도에서 찾고, 첫마디를 직접 만들어 말한다.' },
        activity: {
          title: '도움 받을 곳과 첫마디', tool: 'map',
          teacher: '"마음이 힘들 때 학교 안에서 도움 받을 곳은 어디일까요?" 핀을 꽂을 때마다 그곳에서 할 첫마디를 고르게 한다. "가서 뭐라고 해야 할지 몰라서 못 가요"라는 학생에게 "\'이야기하고 싶은 게 있어요\' 한마디면 충분해요"라고 말해 준다. 지도는 가상 학교이고, 우리 학교 상담실 자리는 따로 알려 준다.',
          task: '가상 학교 지도에서 도움 받을 곳에 핀을 꽂고, 그곳에 갈 때 할 첫마디를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MAPQ(HELP, '상담실', '마음이 힘들어 이야기를 나누고 싶을 때 갈 곳에 핀을 꽂아요.', '갈 때 첫마디는?', ['이야기하고 싶은 게 있어요', '아무 일 없어요', '그냥 놀러 왔어요'], 0, ['', '힘든 마음을 숨기면 도움을 받기 어려워요.', '왜 왔는지 말하면 더 잘 도와줘요.'], 0.2),
            MAPQ(HELP, '보건실', '걱정 때문에 배가 계속 아플 때 갈 곳에 핀을 꽂아요.', '갈 때 첫마디는?', ['배가 계속 아파요', '약 아무거나 주세요', '집에 갈래요'], 0, ['', '어디가 어떻게 아픈지 먼저 말해요.', '먼저 아픈 곳을 알려요.'], 0.25),
            MAPQ(HELP, '교무실', '친구 일로 담임 선생님께 도움을 청할 때 갈 곳에 핀을 꽂아요.', '갈 때 첫마디는?', ['친구 일로 상의드릴 게 있어요', '친구가 나빠요', '별일 아니에요'], 0, ['', '탓하기보다 상의하고 싶다고 말해요.', '걱정되는 일은 별일이 아니라고 넘기지 않아요.'], 0.3),
            { prompt: '모둠에서 학교 밖에서 도움 받을 수 있는 어른 한 명을 정해 말해요.', free: true, talk: true, conclude: '힘들 때 도움 받을 곳은 여러 곳이에요. 첫마디 하나면 도움이 시작돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교에서 마음이 힘들 때 갈 곳과 첫마디를 써요.' }] },
        notes: '상담실·교무실 이름과 자리는 학교마다 다르다. 교사는 우리 학교 실제 위치로 바꿔 알려 준다.',
      }),
      X('wrap.coping-web', {
        title: '나만의 대처 방법 그물', method: '나만의 대처 방법 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(쉬기·말하기)에 방법 카드를 붙인다.', base: '가지 3개(쉬기·말하기·움직이기)에 방법 카드를 붙인다.', challenge: '가지 4개로 \'도움 요청\' 가지를 꼭 넣어 카드를 붙인다.' },
        wrap: {
          teacher: '"힘들 때 쓸 수 있는 방법을 그물로 모아 볼까요?" 가지마다 카드를 붙이게 한다. 도전에서는 \'도움 요청\' 가지를 꼭 넣는다고 밝힌다. "참기만 하면 돼요" 카드는 어느 가지에도 넣지 않는 카드라고 짚는다. 출구 셋째 문항은 쓰지 않고 마음속으로만 정해도 된다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '힘들 때', slots: ['쉬기', '말하기', '움직이기'], cards: ['숨 고르기', '믿는 어른께 말하기', '산책하기', '음악 듣기', '친구에게 털어놓기', '줄넘기하기'] }, prompt: '"힘들 때" 그물의 가지에 방법 카드를 붙여요.', target: { sort: { 쉬기: ['숨 고르기', '음악 듣기'], 말하기: ['믿는 어른께 말하기', '친구에게 털어놓기'], 움직이기: ['산책하기', '줄넘기하기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '"힘들 때" 그물의 가지에 방법 카드를 붙여요(가지 2개).', toolOptions: { slots: ['쉬기', '말하기'], cards: ['숨 고르기', '믿는 어른께 말하기', '음악 듣기', '친구에게 털어놓기'] }, target: { sort: { 쉬기: ['숨 고르기', '음악 듣기'], 말하기: ['믿는 어른께 말하기', '친구에게 털어놓기'] } } },
                challenge: { prompt: '"힘들 때" 그물에 도움 요청 가지까지 카드를 붙여요(넣지 않을 카드도 있어요).', toolOptions: { slots: ['쉬기', '말하기', '움직이기', '도움 요청'], cards: ['숨 고르기', '참기만 하기', '믿는 어른께 말하기', '산책하기', '상담실 찾아가기', '음악 듣기', '친구에게 털어놓기', '줄넘기하기', '보건 선생님께 알리기'] }, target: { sort: { 쉬기: ['숨 고르기', '음악 듣기'], 말하기: ['믿는 어른께 말하기', '친구에게 털어놓기'], 움직이기: ['산책하기', '줄넘기하기'], '도움 요청': ['상담실 찾아가기', '보건 선생님께 알리기'] } } },
              } },
            { type: 'choice', prompt: '"힘든 마음은 혼자 견뎌야 한다"에 알맞은 답은?', options: ['맞다', '도움을 청해도 된다', '모른 척해야 한다'], answer: 1, difficulty: 0.15, explain: '도움을 청하는 것도 마음을 돌보는 방법이에요.' },
            { type: 'short', prompt: '힘들 때 먼저 해 볼 방법 하나를 써요(쓰기 싫으면 마음속으로 정해요).' },
          ],
        },
        worksheet: {
          title: '나만의 대처 방법',
          items: [
            { type: 'table', prompt: '힘들 때 쓸 방법을 가지마다 써요.', columns: ['쉬기', '말하기', '도움 요청'], cells: [['', '', '']] },
            { type: 'short', prompt: '도움을 청할 수 있는 어른 한 명을 써요(이름 대신 \'담임 선생님\'처럼).' },
          ],
        },
      }),
      X('wrap.ready-check', {
        title: '도움 요청 준비 점검', method: '도움 요청 준비 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '준비 항목 2칸에 해 둘 것을 표시한다.', base: '준비 항목 4칸에 표시한다.', challenge: '연락 방법을 정해 활동지에 쓴다(전화번호는 쓰지 않는다).' },
        wrap: {
          teacher: '"힘들 때를 위해 미리 준비해 둘 것에 스스로 표시해 볼까요? 정답은 없어요." 첫 칸 \'믿을 어른 한 명 정하기\'에서 이름 대신 \'담임 선생님\'·\'보호자\'처럼 떠올리게 한다. "저는 믿을 어른이 없어요"라는 학생이 있으면 "학교에는 담임·보건·상담 선생님이 있어요. 오늘 함께 정해 볼까요?"라고 따로 말해 준다. 전화번호·이름은 쓰지 않는다.',
          exitTicket: [
            SELFK('도움 요청 준비', ['믿을 어른 한 명 정하기', '도움 받을 곳 알아 두기', '첫마디 정해 두기', '연락 방법 알아 두기'], '도움을 청하기 위해 준비할 것에 스스로 표시해요(정답 없음).', { easy: 2, base: 4 }),
            { type: 'choice', prompt: '도움을 청하는 첫마디로 알맞은 것은?', options: ['이야기하고 싶은 게 있어요', '아무것도 아니에요', '됐어요'], answer: 0, difficulty: 0.15, explain: '짧은 한마디로도 도움을 시작할 수 있어요.' },
            { type: 'short', prompt: '도움을 청할 때 쓸 연락 방법을 써요(전화번호는 쓰지 않아요).' },
          ],
        },
        worksheet: {
          title: '도움 요청 준비',
          items: [
            { type: 'check', prompt: '준비한 것에 표시해요.', options: ['믿을 어른 정하기', '도움 받을 곳 알기', '첫마디 정하기'] },
            { type: 'short', prompt: '도움을 청할 때 할 첫마디를 써요.' },
          ],
        },
        notes: '학생이 쓴 내용에서 걱정되는 신호가 보이면 교사는 학교 위기 대응 절차를 따른다. 전화번호·이름을 쓰지 않게 한다.',
      }),
    );
  }

  // ======== 흡연·음주·약물 오남용 예방 (학교보건법 제9조 — 보건교육의 내용) ========
  {
    const X = mk('smoke-alcohol-drug');
    const OFFER = [
      { id: 'o1', text: '공원 벤치에 형들이 있어요', motif: 'tree' }, { id: 'o2', text: '"너도 해 볼래?" 권해요', motif: 'cloud' },
      { id: 'o3', text: '준서가 머뭇거려요', motif: 'rain' }, { id: 'o4', text: '"싫어요" 하고 자리를 떠요', motif: 'sun' },
    ];
    const ADS = [['멋진 모델', 8], ['신나는 음악', 6], ['친구들과 함께', 7], ['경고 문구 크게', 1]];
    M.push(
      X('intro.offer-story', {
        title: '권유받는 장면 차례', method: '권유받는 장면 차례', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(벤치 → 권유 → 머뭇거림)을 차례로 놓는다.', base: '장면 4장(자리를 뜸까지)을 놓고 다음 장면을 예상한다.', challenge: '다른 결말 장면(어른께 알리기 등)을 말로 지어 본다.' },
        intro: {
          teacher: '"가상 친구 준서가 공원을 지나는데 모르는 형들이 담배를 꺼내며 \'너도 해 볼래?\'라고 해요. 다음 장면은 어떻게 될까요?" 시연 단추로 장면 네 장이 놓이는 모습을 보인다. "한 번은 괜찮아요"라는 말에는 "\'한 번만\'이라는 말이 권유하는 사람이 가장 많이 쓰는 말이에요. 처음 한 번이 다음을 부를 수 있어요"라고 말해 준다. 담배를 피우는 모습은 보이거나 흉내 내지 않는다.',
          student: '준서가 머뭇거리는 장면 다음에 어떤 장면이 오면 좋을지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: mix(OFFER), title: '공원에서 생긴 일(가상)' }, sequence: [{ order: ['o1', 'o2', 'o3'] }, { order: ['o1', 'o2', 'o3', 'o4'] }] },
          art: art('a paper park bench under a paper tree, a small paper child walking away with a determined face and a speech bubble saying no', '"싫어요" 하고 자리를 떠요', 'tree', 'mint'),
        },
        notes: '준서와 형들은 지어낸 인물이다. 담배 피우는 방법·모습은 묘사하지 않는다. saf-drug 의 전자담배 향·졸업식 장면과 겹치지 않게 공원 장면으로 꾸몄다.',
      }),
      X('intro.harm-body', {
        title: '영향을 받는 몸의 기관', method: '영향을 받는 몸의 기관', tool: 'body', minutes: 5,
        levels: { easy: '교사가 폐 한 기관과 하는 일을 잇는 모습을 보인다.', base: '폐·뇌·간 세 기관과 하는 일이 이어지는 모습을 본다.', challenge: '기관마다 흡연·음주가 하는 일을 어떻게 방해할지 말한다.' },
        intro: {
          teacher: '"흡연과 음주는 몸의 어디에 영향을 줄까요? 먼저 기관이 하는 일을 이어 봐요." 시연 단추로 폐는 숨쉬기, 뇌는 생각과 판단, 간은 해로운 것 거르기와 이어지는 모습을 보인다. 담배 연기는 폐로, 술은 뇌의 판단과 간에 영향을 준다고 짚는다. "어른도 하니까 몸에 괜찮은 거예요"라는 말에는 "어른 몸에도 해로워요. 자라는 몸은 더 큰 영향을 받을 수 있어요"라고 말해 준다.',
          student: '세 기관 가운데 하나를 골라 그 기관이 하는 일이 방해받으면 어떻게 될지 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'match', organs: ['폐', '뇌', '간'], jobs: { 폐: '숨을 쉬어요', 뇌: '생각하고 판단해요', 간: '해로운 것을 걸러요' } }, sequence: [{ match: { 폐: '숨을 쉬어요' } }, { match: { 폐: '숨을 쉬어요', 뇌: '생각하고 판단해요', 간: '해로운 것을 걸러요' } }] },
          art: art('a paper body figure with paper lungs, a paper brain and a paper liver each tied by a paper string to a small job card', '기관이 하는 일을 지켜요', 'leaf', 'sky'),
        },
        notes: 'saf-drug 의 기관 찾기(find) 장면과 겹치지 않게, 기관과 하는 일을 잇는(match) 판으로 꾸몄다.',
      }),
      X('activity.refuse-dilemma', {
        title: '"한 번만" 권유 갈림길', method: '"한 번만" 권유 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(분명히 거절)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(놀림에도 자리 옮기기)을 지나 근거를 고른다.', challenge: '갈림 3번(보호자께 알리기)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: "한 번만 해 봐"', tool: 'dilemma',
          teacher: '"놀이터에서 아는 형이 담배를 내밀며 \'한 번만 해 봐, 다들 해\'라고 해요. 어떻게 할까요?" 고를 때마다 결과와 영향을 읽게 한다. "거절하면 형이랑 사이가 나빠져요"라는 학생에게 "진짜 나를 아끼는 사람은 싫다는 말을 존중해요. 거절해도 친구를 잃지 않을 수 있어요"라고 말해 준다. 담배를 받는 모습은 흉내 내지 않는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '한 번만 해 봐',
            steps: [
              { text: '놀이터에서 아는 형이 담배를 내밀며 "한 번만 해 봐, 다들 해"라고 해요.', motif: 'tree',
                good: ['no', '"싫어, 안 해"라고 분명히 말한다', '형이 잠깐 멈칫해요.', [['나', '내 몸을 지켜요', 1]]],
                bad: ['once', '"한 번만이면…" 하고 받는다', '한 번이 다음 권유로 이어져요.', '\'한 번만\'이 다음을 부를 수 있어요.', [['나', '몸에 해로워요', -1]]] },
              { text: '형이 "겁쟁이네" 하고 놀려요.', motif: 'cloud',
                good: ['leave', '"내 몸이 소중해"라고 말하고 자리를 옮긴다', '다른 친구들이 있는 쪽으로 왔어요.', [['나', '마음이 단단해요', 1]]],
                bad: ['give', '놀림이 싫어 따라 한다', '기침이 나고 마음도 불편해요.', '놀림에 지면 내 몸이 다쳐요.', [['나', '후회해요', -1]]] },
              { text: '집에 왔어요. 오늘 일을 어떻게 할까요?', motif: 'house',
                good: ['tell', '보호자께 있었던 일을 말한다', '보호자가 "잘 거절했어"라고 안아 줘요.', [['나', '든든해요', 1], ['보호자', '함께 지켜요', 1]]],
                bad: ['hide', '혼날까 봐 숨긴다', '다음에 또 만날까 걱정돼요.', '말해야 어른이 함께 지켜 줄 수 있어요.', [['나', '혼자 걱정해요', -1]]] },
            ],
            ending: '분명히 거절하고, 자리를 옮기고, 어른께 알려 나를 지켰어요.',
            reasons: [{ id: 'clear', text: '분명히 거절하면 내 몸을 지킬 수 있다' }, { id: 'tell', text: '어른께 알리면 함께 지켜 준다' }, { id: 'once', text: '한 번은 괜찮다', why: '한 번이 다음 권유와 습관으로 이어질 수 있어요.' }, { id: 'lose', text: '거절하면 친구를 잃는다', why: '나를 아끼는 사람은 거절을 존중해요.' }],
            good: ['clear', 'tell'], aim: '나를 지키는 선택',
            talk: '모둠에서 "\'한 번만\'이라는 말에 쓸 거절 말"을 하나씩 말해요.',
            conclude: '"한 번만"에도 분명히 거절하고, 자리를 옮기고, 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '"한 번만 해 봐"라는 권유에 쓸 거절 말을 써요.' }] },
        notes: '형은 초등학생 수준의 가상 인물이다. 흡연 방법·모습은 묘사하지 않는다. saf-drug 의 \'향만 맡아 봐\'·\'우리끼리 비밀\' 장면과 겹치지 않게 했다.',
      }),
      X('activity.refuse-role', {
        title: '거절 말하기 역할극', method: '거절 말하기 역할극', tool: 'timer', minutes: 14,
        levels: { easy: '역할극 차례 카드 3장을 놓고, 거절 말 1개로 짝과 해 본다.', base: '차례 카드 4장을 놓고 거절 말 2개로 역할을 바꿔 해 본다.', challenge: '상황 카드를 바꿔(장소·권하는 사람) 다시 해 본다.' },
        activity: {
          title: '역할극 차례와 안전 약속', tool: 'timer',
          teacher: '"짝과 권하는 사람·거절하는 사람 역할을 맡아 해 볼까요? 먼저 차례와 약속을 정해요." 진짜 담배나 술병 같은 물건은 쓰지 않고 말로만 한다고 밝힌다. "장난으로 계속 권해도 돼요"라는 학생에게 "역할극에서도 \'그만\' 신호가 나오면 바로 멈춰요. 거절을 존중하는 연습이기도 해요"라고 말해 준다. 기본에서는 거절 말 두 개(\'싫어, 안 해\'·\'다른 거 하자\')를 써 본다.',
          task: '역할극 차례를 정하고 안전 약속을 확인한 뒤, 짝과 역할을 바꿔 거절 말을 해 봐요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            TORD('거절 역할극 차례 카드를 차례대로 놓아요.', '역할극 차례', ['상황 카드 읽기', '역할 나누기', '거절 말 하기', '역할 바꾸기'], 3, 0.2),
            { prompt: '역할극 전에 안전 약속 칸을 모두 확인해요.', toolOptions: { title: '역할극 안전 약속', safety: ['진짜 물건은 쓰지 않아요', '놀리는 말은 하지 않아요', '"그만" 신호에 바로 멈춰요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '짝과 역할을 바꿔 거절 말을 해 보고 표시해요.', free: true, toolOptions: { doneLabel: '짝과 역할을 바꿔 해 보았어요' }, conclude: '거절은 분명한 말로, 여러 번 연습할수록 실제로 쉽게 나와요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '역할극에서 써 본 거절 말 하나를 써요.' }] },
        notes: '역할극 소품은 쓰지 않는다. 흡연·음주 동작을 흉내 내지 않게 한다. saf-drug 의 거절 기술 네 단계와 겹치지 않게 역할극 진행 차례로 꾸몄다.',
      }),
      X('activity.medicine-sort', {
        title: '약 바르게 쓰기 나누기', method: '약 바르게 쓰기 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 바르게·잘못 바구니에 나눈다.', base: '카드 6장을 나눈다.', challenge: '카드가 늘고, 셋째 문항에서 잘못된 까닭을 말한다.' },
        activity: {
          title: '약 쓰기 바구니 나누기', tool: 'sortboard',
          teacher: '"약은 언제나 몸에 좋을까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "약은 많이 먹을수록 빨리 나아요"라는 학생에게 "정해진 만큼보다 많이 먹으면 몸에 오히려 해로울 수 있어요. 그래서 설명서와 어른을 확인해요"라고 말해 준다. 약 이름이나 양은 다루지 않는다.',
          task: '약 쓰기 카드를 \'바르게\'·\'잘못\' 바구니에 나누고, 잘못된 까닭을 말해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('약을 쓰는 행동 카드를 두 바구니에 나누어요.', { slots: ['바르게', '잘못'], groups: { 바르게: ['어른과 설명서 확인', '정해진 만큼만', '정해진 때에 먹기'], 잘못: ['남의 약 먹기', '많이 먹으면 빨리 나음', '사탕처럼 먹기'] }, easy: 2, extra: { 바르게: ['궁금하면 약사께 묻기'], 잘못: ['아무 때나 먹기'] } }, 0.2),
            SORT('약 보관 카드를 두 바구니에 나누어요.', { slots: ['바르게', '잘못'], groups: { 바르게: ['원래 상자에 보관', '어린이 손 안 닿게'], 잘못: ['사탕 통에 옮겨 담기', '설명서 버리기'] }, easy: 1, extra: { 잘못: ['아무 데나 두기'] } }, 0.25, { conclude: '약은 어른과 설명서를 확인해 정해진 만큼만 먹고, 남의 약은 먹지 않아요.' }),
            { prompt: '\'잘못\' 바구니의 카드 하나를 골라 왜 잘못인지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바르게면 ○, 잘못이면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['남의 약 먹기', ''], ['설명서 확인', ''], ['많이 먹기', '']], answer: '×, ○, ×' }] },
        notes: '약 이름·성분·양은 쓰지 않는다. saf-drug 의 \'약 겹쳐 먹기\' 장면과 겹치지 않게 했다.',
      }),
      X('activity.ad-chart', {
        title: '광고 속 유혹 장치 그래프', method: '광고 속 유혹 장치 표', tool: 'chart', minutes: 14,
        levels: { easy: '막대 끝에 값이 보이고 장치 2개를 견준다.', base: '장치 4개를 읽고 가장 많이 쓰인 장치와 가장 적은 것을 찾는다.', challenge: '장치를 \'사실대로\' 바꿔 말한 문장을 고른다.' },
        activity: {
          title: '가상 광고 열 편 장치 세기', tool: 'chart',
          teacher: '"이 그래프는 가상의 술 광고 열 편에서 쓰인 장치를 센 것이에요(실제 자료 아님). 가장 많이 쓰인 장치는 무엇일까요?" 막대를 견주게 한다. "모델이 멋지니 술을 마시면 멋져져요"라는 학생에게 "모델은 원래 멋진 사람이에요. 술이 멋지게 만든 걸까요?"라고 되묻는다. 경고 문구가 크게 나온 광고가 적다는 점을 짚는다.',
          task: '가상 광고 장치 그래프를 읽고, 많이 쓰인 장치와 숨긴 정보를 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 광고 열 편에서 가장 많이 쓰인 장치는?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '광고 열 편에 쓰인 장치(가상)', unit: '편', xLabel: '장치', yLabel: '광고 수', data: ADS, scale: 1, max: 10, choices: ADS.map((x) => x[0]), question: '가장 많은 장치는?' }, target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '멋진 모델과 신나는 음악 가운데 더 많이 쓰인 것은?(가상)', toolOptions: { data: [ADS[0], ADS[1]], choices: ['멋진 모델', '신나는 음악'] }, target: { pick: 0 } } } },
            { prompt: '가장 적게 쓰인 장치는 무엇인가요?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '광고 열 편에 쓰인 장치(가상)', unit: '편', data: ADS, scale: 1, max: 10, choices: ADS.map((x) => x[0]), question: '가장 적은 것은?' }, target: { pick: 3 }, difficulty: 0.2 },
            { prompt: '\'친구들과 함께\' 장치를 사실대로 바꿔 말한 것을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '광고 열 편에 쓰인 장치(가상)', unit: '편', data: ADS, scale: 1, max: 10, choices: ['술 없이도 친구와 즐겁다', '술이 있어야 친해진다', '광고는 다 사실이다'], question: '사실대로 말하면?', why: ['', '광고가 보여 주고 싶은 착각이에요.', '광고는 사고 싶게 만들려는 글이에요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '광고는 멋지고 즐거운 장면으로 유혹하고, 해로움은 작게 보여요. 장치를 알아차리면 휩쓸리지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '광고에서 작게 보이거나 숨긴 정보는 무엇일지 써요.' }] },
        notes: '그래프 수치는 가상 자료다. 실제 광고를 보이지 않는다.',
      }),
      X('wrap.refuse-write', {
        title: '나의 거절 문장', method: '나의 거절 문장', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 보고 거절 문장 하나를 쓰고 기준 2개를 점검한다.', base: '상황 하나를 골라 거절 문장 두 개를 쓰고 기준 3개(분명함·이유·관계 지키기)를 점검한다.', challenge: '짝 문장을 읽고 고칠 곳을 알려 준 뒤 내 글도 한 군데 고친다.' },
        wrap: {
          teacher: '"오늘 연습한 거절을 내 문장으로 써 볼까요? 상황 하나(공원·놀이터·친구 집)를 골라요." 기준표의 \'관계 지키기\'는 상대를 비난하지 않고 다른 것을 제안하는 것이라고 짚는다. "\'너 바보야?\'라고 쓰면 확실해요"라는 학생에게 "분명하게 거절하되 싸움이 되지 않게 \'싫어, 대신 축구 하자\'처럼 써 봐요"라고 말해 준다.',
          exitTicket: [
            RUBX('상황 하나를 골라 거절 문장 두 개를 써요.', { topic: '흡연이나 음주를 권유받는 상황 하나를 골라 거절 문장 두 개를 써요.', title: '나의 거절 문장', starter: '"싫어, 나는 안 해. 왜냐하면 ___. 대신 ___ 하자."', crit: ['분명하게 거절했다', '까닭을 말했다', '상대를 비난하지 않고 다른 것을 제안했다'], must: [['싫어', '안 해', '안 할래']], chars: [15, 150] }),
            { type: 'choice', prompt: '분명하면서 관계를 지키는 거절은?', options: ['음… 나중에', '싫어, 대신 축구 하자', '너 바보야?'], answer: 1, difficulty: 0.15, explain: '분명히 거절하고 다른 것을 제안하면 관계도 지켜요.' },
          ],
        },
        worksheet: {
          title: '나의 거절 문장',
          items: [
            { type: 'short', prompt: '권유받을 때 쓸 거절 문장 하나를 써요.' },
            { type: 'check', prompt: '내 문장을 점검해요.', options: ['분명하다', '까닭이 있다', '다른 것을 제안했다'] },
          ],
        },
      }),
      X('wrap.safe-web', {
        title: '나를 지키는 그물', method: '나를 지키는 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(거절하기·피하기)에 행동 카드를 붙인다.', base: '가지 3개(어른께 알리기 더함)에 행동 카드를 붙인다.', challenge: '카드가 늘고, 상황 카드를 알맞은 가지와 잇는다.' },
        wrap: {
          teacher: '"오늘 배운 나를 지키는 방법을 그물로 모아 볼까요?" 가지마다 카드를 붙이게 한다. "한 번은 괜찮아" 카드는 어느 가지에도 넣지 않는다고 짚는다. 도전에서는 \'권하는 사람이 계속 따라와요\' 같은 상황에 어떤 가지가 맞는지 말로 잇게 한다.',
          exitTicket: [
            WEBX('"나를 지키기" 그물의 가지에 행동 카드를 붙여요.', { topic: '나를 지키기', slots: ['거절하기', '피하기', '어른께 알리기'], easySlots: ['거절하기', '피하기'], easy: 1,
              groups: { 거절하기: ['"싫어, 안 해"', '다른 것 제안하기'], 피하기: ['자리 옮기기', '권하는 곳 안 가기'], '어른께 알리기': ['보호자께 말하기', '선생님께 알리기'] }, extra: { 피하기: ['친구와 함께 다니기'] }, traps: ['한 번은 괜찮아'] }),
            { type: 'choice', prompt: '권하는 사람이 계속 따라오면 어떻게 할까요?', options: ['따라 한다', '사람 많은 곳으로 가서 어른께 알린다', '혼자 참는다'], answer: 1, difficulty: 0.15, explain: '피하고 알려야 어른이 함께 지켜 줄 수 있어요.' },
            { type: 'short', prompt: '나를 지키는 방법 가운데 가장 먼저 쓸 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '나를 지키기',
          items: [
            { type: 'table', prompt: '가지마다 행동을 하나씩 써요.', columns: ['거절하기', '피하기', '어른께 알리기'], cells: [['', '', '']] },
            { type: 'short', prompt: '권유받았을 때 알릴 어른을 써요(이름 대신 \'보호자\'처럼).' },
          ],
        },
      }),
    );
  }

  // ======== 건강 광고·소문 가려내기 (학교보건법 제9조·제9조의2, 고 '건강 정보 판단'을 초등 수준으로) ========
  {
    const X = mk('health-info');
    const RUMOR = [
      { id: 'r1', text: '한 사람이 소문을 들어요', motif: 'flower' }, { id: 'r2', text: '단체 대화방에 올려요', motif: 'cloud' },
      { id: 'r3', text: '다른 방으로 퍼져요', motif: 'storm' }, { id: 'r4', text: '반 전체가 믿어요', motif: 'house' },
    ];
    const RISE = [['1주', 35], ['2주', 40], ['3주', 45]];
    M.push(
      X('intro.rumor-branch', {
        title: '"이것만 먹으면 감기 끝" 광고', method: '"이것만 먹으면 감기 끝" 광고', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 보기 2개(믿고 산다·확인한다)의 결과를 견준다.', base: '보기 3개(퍼뜨린다 더함)의 결과를 보고 함께 고른다.', challenge: '광고에서 의심 가는 낱말(이것만·끝·100%)을 찾는다.' },
        intro: {
          teacher: '"가상 광고에 \'이것만 먹으면 감기 끝!\'이라고 쓰여 있어요. 어떻게 할까요?" 시연 단추로 \'누가, 왜 말했는지 확인한다\'를 고르고 결과를 읽는다. "많이 퍼진 광고면 사실이에요"라는 말에는 "많이 보인다고 사실일까요? 광고는 팔려고 만든 글이에요"라고 되묻는다. 도전에서는 \'이것만\'·\'끝\'·\'100%\' 같은 낱말을 찾게 한다.',
          student: '가상 광고에서 의심 가는 낱말 하나를 찾아 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '가상 광고: "이것만 먹으면 감기 끝!"', ask: '어떻게 할까요?', motif: 'star', choices: [{ id: 'buy', text: '믿고 바로 사 달라고 한다', result: '먹어도 감기가 그대로예요.', mood: '속상함' }, { id: 'check', text: '누가, 왜 말했는지 확인한다', result: '근거가 없는 광고라는 걸 알았어요.', mood: '뿌듯함' }, { id: 'share', text: '친구들에게 바로 보낸다', result: '친구들도 헷갈려해요.', mood: '걱정' }] }, sequence: [{ choice: 'check' }] },
          art: art('a big shiny paper advertisement poster with a starburst saying cure-all, and a paper child holding a magnifying glass up to it', '광고를 따져 봐요', 'star', 'buttercup'),
        },
        notes: '광고 문구는 지어낸 것이다. 실제 제품을 보이지 않는다.',
      }),
      X('intro.spread-line', {
        title: '소문이 퍼지는 시간 줄', method: '소문이 퍼지는 시간 줄', tool: 'timeline', minutes: 5,
        levels: { easy: '교사가 카드 3장(한 사람 → 대화방 → 다른 방)을 시간 줄에 놓는다.', base: '카드 4장(반 전체가 믿음까지)을 놓는다.', challenge: '퍼짐을 멈출 수 있던 칸을 짚는다.' },
        intro: {
          teacher: '"건강 소문 하나가 어떻게 반 전체로 퍼질까요?" 시연 단추로 카드가 시간 줄에 차례대로 놓이는 모습을 보인다. "다들 믿으니까 사실이에요"라는 말에는 "처음 한 사람이 확인하지 않았다면, 백 명이 믿어도 확인되지 않은 소문이에요"라고 말해 준다. 도전에서는 어느 칸에서 멈출 수 있었는지 묻는다.',
          student: '시간 줄에서 소문을 멈출 수 있던 칸 하나를 골라 짝에게 말해 보아요.',
          demo: { tool: 'timeline', options: { mode: 'order', slots: 4, cards: mix(RUMOR), axis: ['먼저', '나중'] }, sequence: [{ order: ['r1', 'r2', 'r3'] }, { order: ['r1', 'r2', 'r3', 'r4'] }] },
          art: art('a paper timeline ribbon with four paper chat bubbles growing bigger from left to right, a paper stop hand above the second bubble', '어디서 멈출 수 있었을까?', 'cloud', 'sky'),
        },
      }),
      X('activity.source-sort', {
        title: '출처 있는·없는 정보 나누기', method: '출처 있는·없는 정보 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 출처 확인됨·출처 없음 바구니에 나눈다.', base: '카드 6장을 나눈다.', challenge: '카드가 늘고, 셋째 문항에서 출처 없는 정보를 확인하는 방법을 말한다.' },
        activity: {
          title: '출처 바구니 나누기', tool: 'sortboard',
          teacher: '"이 정보는 누가 말했는지 알 수 있나요?" 카드를 넣을 때마다 출처가 어디인지 짚게 한다. "유명한 사람이 말했으니 믿어도 돼요"라는 학생에게 "그 사람이 건강 전문가인지, 근거를 밝혔는지 알 수 있나요?"라고 되묻는다. 카드 글은 모두 지어낸 예시다.',
          task: '건강 정보 카드를 \'출처 확인됨\'·\'출처 없음\' 바구니에 나누고, 확인 방법을 말해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('건강 정보 카드를 두 바구니에 나누어요.', { slots: ['출처 확인됨', '출처 없음'], groups: { '출처 확인됨': ['보건 선생님 안내문', '질병관리청 누리집 안내', '보건 교과서 내용'], '출처 없음': ['친구의 친구가 그랬대', '누가 썼는지 모를 글', '출처 없는 영상 자막'] }, easy: 2, extra: { '출처 확인됨': ['병원에서 받은 안내'], '출처 없음': ['"다들 그렇대"'] } }, 0.2),
            SORT('광고 문구 카드를 두 바구니에 나누어요.', { slots: ['출처 확인됨', '출처 없음'], groups: { '출처 확인됨': ['식약처 인정 표시 확인', '연구 기관 이름과 날짜'], '출처 없음': ['"전문가 추천"만 있음', '"100% 효과" 큰 글씨'] }, easy: 1, extra: { '출처 없음': ['후기만 잔뜩'] } }, 0.25, { conclude: '누가 말했는지, 그 출처를 확인할 수 있는지부터 따져요.' }),
            { prompt: '\'출처 없음\' 카드 하나를 골라 어떻게 확인할지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '건강 정보를 믿기 전에 확인할 것 하나를 써요.' }] },
      }),
      X('activity.claim-chart', {
        title: '예시 그래프의 과장 찾기', method: '예시 그래프의 과장 찾기', tool: 'chart', minutes: 14,
        levels: { easy: '값이 보이는 광고 그래프 1개에서 실제로 늘어난 수를 읽는다.', base: '눈금을 자른 그래프와 0부터 그린 그래프 2개를 읽어 견준다.', challenge: '눈금을 0부터 그린 막대그래프로 바르게 다시 그린다.' },
        activity: {
          title: '눈금 자른 그래프 읽기', tool: 'chart',
          teacher: '"이 가상 광고 그래프는 \'젤리 먹고 효과 있다고 답한 사람\'이 엄청 늘어난 것처럼 보여요. 눈금은 몇부터 시작하나요?" 물결선과 시작 수를 짚게 한다. "그래프가 있으면 믿을 만해요"라는 학생에게 "그래프도 그리는 방법에 따라 크게 보이게 할 수 있어요. 눈금을 꼭 봐요"라고 말해 준다. 수는 가상 자료다.',
          task: '가상 광고 그래프의 눈금을 읽고 실제 차이를 찾은 뒤, 0부터 바르게 다시 그려요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '눈금이 34부터 시작하는 광고 그래프에서 1주부터 3주까지 실제로 몇 명 늘었나요?(가상)', toolOptions: { type: 'line', mode: 'read', title: '젤리 효과 있다고 답한 사람(가상 광고)', unit: '명', data: RISE, from: 34, max: 46, scale: 2, choices: ['10명', '100명', '열 배'], question: '실제로 몇 명 늘었나?' }, target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '눈금을 0부터 그린 같은 그래프에서 늘어난 정도는 어떻게 보이나요?(가상)', toolOptions: { type: 'line', mode: 'read', title: '젤리 효과 있다고 답한 사람(0부터, 가상)', unit: '명', data: RISE, max: 50, scale: 10, choices: ['조금 늘어난 것으로 보인다', '열 배로 보인다', '줄어든 것으로 보인다'], question: '어떻게 보이나?', why: ['', '0부터 그리면 차이가 실제 크기대로 보여요.', '선이 올라가고 있어요.'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '같은 자료를 눈금 0부터 막대그래프로 바르게 다시 그려요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '젤리 효과 있다고 답한 사람(0부터, 가상)', unit: '명', data: RISE, max: 50, scale: 5 }, target: { build: true }, difficulty: 0.3,
              levels: { easy: { prompt: '같은 자료의 2주·3주 막대를 눈금 0부터 다시 그려요(가상).', toolOptions: { given: [0] } } }, conclude: '그래프는 눈금이 어디서 시작하는지부터 봐요. 잘린 눈금은 작은 차이를 크게 보이게 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '광고 그래프를 볼 때 먼저 볼 곳은?', options: ['색깔', '눈금이 시작하는 수', '모델 사진'], answer: '눈금이 시작하는 수' }] },
        notes: '그래프 수치는 가상 광고 자료다.',
      }),
      X('activity.share-dilemma', {
        title: '받은 건강 소문을 퍼뜨릴까', method: '받은 소문을 퍼뜨릴까', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(보내기 전 확인)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(어른께 묻기)을 지나 근거를 고른다.', challenge: '갈림 3번(단체방에 바로잡기)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 단체방에 온 건강 소문', tool: 'dilemma',
          teacher: '"단체 대화방에 \'○○ 주스 마시면 독감 절대 안 걸림!\'이라는 글이 왔어요. 어떻게 할까요?" 고를 때마다 반 친구들에게 생기는 결과를 읽게 한다. "좋은 정보니까 빨리 알려야 해요"라는 학생에게 "사실이 아니라면, 친구가 예방접종이나 손 씻기를 덜 할 수도 있어요. 확인이 먼저예요"라고 말해 준다. 글 내용은 지어낸 것이다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '단체방에 온 건강 소문',
            steps: [
              { text: '단체 대화방에 "○○ 주스 마시면 독감 절대 안 걸림!" 글이 왔어요.', motif: 'cloud',
                good: ['check', '보내기 전에 누가 쓴 글인지 확인한다', '쓴 사람과 근거가 없는 글이에요.', [['나', '헷갈리지 않아요', 1]]],
                bad: ['forward', '좋은 정보 같아 다른 방에 바로 보낸다', '여러 방으로 퍼져요.', '확인하지 않고 보내면 잘못된 정보가 퍼져요.', [['다른 친구들', '헷갈려요', -1]]] },
              { text: '출처가 없어요. 그래도 정말인지 궁금해요.', motif: 'star',
                good: ['ask', '보건 선생님께 정말인지 물어본다', '"한 가지 음료로 독감을 막을 수는 없어요"라는 답을 들어요.', [['나', '바르게 알아요', 1]]],
                bad: ['guess', '"아마 맞겠지" 하고 믿는다', '손 씻기를 덜 하게 됐어요.', '추측으로 믿으면 예방 행동을 놓칠 수 있어요.', [['나', '덜 조심해요', -1]]] },
              { text: '단체방 친구들은 이미 그 글을 믿고 있어요.', motif: 'house',
                good: ['correct', '"출처가 없어서 보건 선생님께 여쭤봤어"라고 알린다', '친구들이 고맙다고 해요.', [['반 친구들', '바르게 알아요', 1]]],
                bad: ['mock', '"그걸 믿냐?"라고 놀린다', '친구들이 기분 나빠하고 글은 그대로예요.', '놀리기보다 확인한 내용을 차분히 알려요.', [['친구', '속상해요', -1]]] },
            ],
            ending: '확인하고, 묻고, 차분히 알려 소문이 더 퍼지지 않았어요.',
            reasons: [{ id: 'check', text: '보내기 전에 출처와 근거를 확인한다' }, { id: 'expert', text: '모르면 어른·공식 기관에 묻는다' }, { id: 'many', text: '많이 퍼진 정보는 사실이다', why: '많이 퍼져도 확인되지 않으면 소문이에요.' }, { id: 'fast', text: '좋아 보이면 빨리 알릴수록 좋다', why: '확인 없이 빨리 퍼지면 더 많은 사람이 헷갈려요.' }],
            good: ['check', 'expert'], aim: '바르게 가려내는 선택',
            talk: '모둠에서 "단체방에 소문이 오면 우리 반이 할 일"을 하나 정해 말해요.',
            conclude: '건강 소문은 보내기 전에 확인하고, 모르면 묻고, 확인한 내용을 차분히 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '단체방에 건강 소문이 오면 보내기 전에 할 일을 써요.' }] },
      }),
      X('activity.check-steps', {
        title: '정보 확인 순서', method: '정보 확인 순서', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 2장(누가 말했나 → 근거가 있나)을 차례로 놓는다.', base: '카드 3장(어른·공식 기관에 묻기까지)을 차례로 놓는다.', challenge: '틀린 카드를 빼고 놓은 뒤, 가상 광고 사례에 확인 순서를 적용한다.' },
        activity: {
          title: '확인 순서 놓고 사례에 쓰기', tool: 'kitchen',
          teacher: '"건강 정보를 보면 무엇부터 물을까요?" 카드를 놓을 때마다 그 질문이 왜 필요한지 말하게 한다. "좋아요가 많으면 확인 끝이에요"라는 학생에게 "좋아요는 사람들이 눌렀다는 뜻이지 사실이라는 뜻은 아니에요"라고 말해 준다. 둘째 문항에서는 가상 광고에 확인 순서를 써 본다.',
          task: '정보 확인 순서 카드를 차례대로 놓고, 가상 광고 사례에서 확인할 것을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('건강 정보를 확인하는 순서대로 카드를 놓아요.', ['누가 말했나', '근거가 있나', '어른·공식 기관에 묻기'], { easy: [0, 1], trap: '좋아요 수 세기', mode: 'order' }, 0.2),
            CHK('가상 광고 "의사 100명 추천! 키 크는 젤리"에서 확인할 것만 표시해요.', '광고 확인하기', ['의사가 정말 누구인지', '근거 자료가 있는지', '보건 선생님께 묻기'], ['젤리 맛이 좋은지', '포장이 예쁜지'], { easy: 2, base: 3 }, 0.25),
            { prompt: '모둠에서 확인 순서를 써 볼 다른 건강 광고 예를 하나 지어 말해요.', free: true, talk: true, conclude: '누가 말했나 → 근거가 있나 → 어른·공식 기관에 묻기 차례로 확인해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '정보 확인 순서를 써요.', columns: ['1', '2', '3'], cells: [['', '', '']], answer: '누가 말했나, 근거가 있나, 어른·공식 기관에 묻기' }] },
      }),
      X('wrap.judge-write', {
        title: '광고 하나 판단 글', method: '광고 하나 판단 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 보고 한 문장을 쓰고 기준 2개를 점검한다.', base: '광고 하나가 믿을 만한지 두 문장으로 쓰고 기준 3개(근거·출처·내 판단)를 점검한다.', challenge: '반대 의견 하나를 더하고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 본 가상 광고 가운데 하나를 골라 믿을 만한지 판단하는 글을 써 볼까요?" 기준표의 \'근거\'는 \'출처가 없다\'·\'눈금을 잘랐다\'처럼 판단한 까닭이라고 짚는다. "그냥 거짓말 같아요"라고 쓰는 학생에게 "무엇을 보고 그렇게 판단했나요? 그걸 적으면 근거가 돼요"라고 말해 준다. 도전에서는 \'그래도 믿는 사람은 ~라고 할 수 있다\'를 더한다.',
          exitTicket: [
            RUBX('가상 광고 하나를 골라 믿을 만한지 두 문장으로 써요.', { topic: '오늘 본 가상 광고 하나를 골라 믿을 만한지 근거와 함께 두 문장으로 써요.', title: '광고 판단 글', starter: '___ 광고는 믿기 어렵다. 왜냐하면 ___ 때문이다.', crit: ['판단한 근거를 썼다', '출처를 따져 보았다', '내 판단이 분명하다'], must: [['그래도', '반대로', '하지만']], chars: [20, 160] }),
            { type: 'choice', prompt: '광고를 판단하는 근거로 알맞은 것은?', options: ['모델이 예뻐서', '출처가 밝혀져 있지 않아서', '색깔이 화려해서'], answer: 1, difficulty: 0.15, explain: '출처·근거가 있는지가 판단의 근거예요.' },
          ],
        },
        worksheet: {
          title: '광고 판단하기',
          items: [
            { type: 'short', prompt: '광고 하나를 골라 믿을 만한지 한 문장으로 써요.' },
            { type: 'check', prompt: '내 글을 점검해요.', options: ['근거가 있다', '출처를 따졌다', '판단이 분명하다'] },
          ],
        },
      }),
      X('wrap.question-web', {
        title: '가려내는 질문 그물', method: '가려내는 질문 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(누가·근거)에 질문 카드를 붙인다.', base: '가지 3개(목적 더함)에 질문 카드를 붙인다.', challenge: '카드가 늘고, 사례 하나에 세 질문을 이어 말한다.' },
        wrap: {
          teacher: '"건강 정보를 가려낼 때 던질 질문을 그물로 모아 볼까요?" 가지마다 질문 카드를 붙이게 한다. \'목적\' 가지는 \'무엇을 팔려고 하나?\'처럼 그 글을 왜 썼는지 묻는 질문이라고 짚는다. "예쁜가?"처럼 판단과 상관없는 카드는 넣지 않는다.',
          exitTicket: [
            WEBX('"건강 정보" 그물의 가지에 질문 카드를 붙여요.', { topic: '건강 정보', slots: ['누가', '근거', '목적'], easySlots: ['누가', '근거'], easy: 1,
              groups: { 누가: ['누가 썼나?', '전문가인가?'], 근거: ['자료가 있나?', '눈금은 바른가?'], 목적: ['무엇을 팔려 하나?', '왜 퍼뜨리나?'] }, extra: { 근거: ['공식 기관과 같은가?'] }, traps: ['포장이 예쁜가?'] }),
            { type: 'choice', prompt: '"그래프가 있으면 믿을 만하다"에 알맞은 답은?', options: ['맞다', '눈금과 출처를 봐야 한다', '그래프는 다 거짓이다'], answer: 1, difficulty: 0.15, explain: '그래프도 눈금과 출처를 따져 봐요.' },
          ],
        },
        worksheet: {
          title: '가려내는 질문',
          items: [
            { type: 'table', prompt: '가지마다 던질 질문을 하나씩 써요.', columns: ['누가', '근거', '목적'], cells: [['', '', '']] },
            { type: 'short', prompt: '앞으로 건강 정보를 볼 때 꼭 던질 질문 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 아플 때 이용할 곳과 나의 건강 계획 (학교보건법 제9조·제9조의2, 응급처치 기초 — 체계도 재료) ========
  {
    const X = mk('health-plan');
    const SICK = [
      { id: 'k1', text: '무릎이 살짝 긁혔어요', motif: 'tree' }, { id: 'k2', text: '보건실에 가요', motif: 'house' },
      { id: 'k3', text: '저녁에 열이 계속 나요', motif: 'moon' }, { id: 'k4', text: '병원에 가요', motif: 'star' },
      { id: 'k5', text: '약국에서 먹는 법 들어요', motif: 'flower' },
    ];
    const TOWN = { grid: [6, 4], title: '우리 동네(가상)', legend: false, places: [
      { name: '집', icon: 'house', at: [0, 3] }, { name: '보건소', icon: 'office', at: [2, 0] }, { name: '동네 의원', icon: 'hospital', at: [4, 2] },
      { name: '약국', icon: 'market', at: [3, 3] }, { name: '큰 병원', icon: 'hospital', at: [5, 0] }, { name: '공원', icon: 'park', at: [1, 1] }] };
    const PLAN = { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 2], [2, 2], [3, 2]], rocks: [[2, 0], [3, 1]], blocks: ['fwd', 'left', 'right', 'rep'] };
    const BUGGY = ['rep:4', 'fwd', 'end', 'right', 'rep:2', 'fwd', 'end'];
    M.push(
      X('intro.sick-case', {
        title: '아플 때 어디로 갈까 사례', method: '아플 때 어디로 갈까 사례', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(긁힘 → 보건실 → 저녁 열)을 차례로 놓는다.', base: '장면 4장(병원까지)을 차례로 놓는다.', challenge: '장면 5장(약국까지)을 놓고, 다른 상황 장면을 말로 지어 본다.' },
        intro: {
          teacher: '"가상 친구 가온이의 이틀이에요. 아픈 정도에 따라 어디에 갔을까요?" 시연 단추로 장면이 차례대로 놓이는 모습을 보인다. "아프면 무조건 참아요"라는 말에는 "참기만 하면 더 커질 수 있어요. 아픈 정도에 따라 알맞은 곳에 알리면 빨리 나아요"라고 말해 준다. 응급처치 방법은 안전교육 시간에 배우고, 오늘은 \'어디에 알릴까\'를 배운다고 밝힌다.',
          student: '가온이가 간 곳 가운데 하나를 골라 왜 그곳에 갔는지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, cards: mix(SICK), title: '가온이의 이틀(가상)' }, sequence: [{ order: ['k1', 'k2', 'k3', 'k4'] }, { order: ['k1', 'k2', 'k3', 'k4', 'k5'] }] },
          art: art('a paper street with three small paper buildings marked with a school nurse cross, a hospital and a pharmacy, a paper child walking between them', '아플 때 어디로 갈까?', 'house', 'peach'),
        },
        notes: '가온은 지어낸 인물이다. 처치 방법은 saf-firstaid 에서 다루므로 여기서는 이용할 곳만 다룬다.',
      }),
      X('intro.habit-scale', {
        title: '가온이의 건강 습관 눈금', method: '나의 건강 습관 눈금', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 습관 두 가지(손 씻기·잠) 눈금을 읽어 준다.', base: '네 가지(손 씻기·잠·움직임·마음 돌보기) 상황을 읽고 눈금을 함께 짐작한다.', challenge: '가온이가 가장 바꾸고 싶은 습관을 골라 까닭을 말한다.' },
        intro: {
          teacher: '"가상 친구 가온이는 손 씻기를 자주 잊는대요. 손 씻기 습관 눈금은 어디쯤일까요?" 시연 단추로 눈금이 2에 놓이는 모습을 보인다. 이어 잠·움직임·마음 돌보기 상황을 말로 읽고 눈금을 짐작하게 한다. "눈금이 낮으면 건강 계획을 못 세워요"라는 말에는 "낮은 곳이 바로 계획을 세울 곳이에요"라고 말해 준다. 학생 자신의 눈금은 묻지 않는다.',
          student: '가온이의 습관 가운데 가장 먼저 바꾸면 좋을 것을 골라 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가온: 손 씻기를 자주 잊어요', feeling: '걱정', steps: 5, scaleLabels: { 1: '자주 잊음', 5: '늘 지킴' } }, sequence: [{ level: 2 }] },
          art: art('four small paper gauges labelled hands, sleep, moving and feelings on a paper notebook page, one gauge low with a paper pencil pointing at it', '계획은 낮은 곳부터', 'leaf', 'mint'),
        },
        notes: '체계도는 \'내 상태 표시\'로 적었으나, 학생 건강 습관을 묻지 않도록 가상 인물의 눈금으로 바꾸었다.',
      }),
      X('activity.place-map', {
        title: '동네 건강 기관 지도', method: '동네 건강 기관 지도', tool: 'map', minutes: 14,
        levels: { easy: '두 곳만 있는 지도에서 이름을 보며 핀을 꽂고 하는 일을 고른다.', base: '동네 지도에서 보건소·약국·병원에 핀을 꽂고 곳마다 하는 일을 고른다.', challenge: '이름이 숨겨진 지도에서 찾고, 밤에 동네 의원이 문 닫을 때 갈 곳을 고른다.' },
        activity: {
          title: '가상 동네의 건강 기관', tool: 'map',
          teacher: '"가상 동네 지도에서 예방접종 안내를 받을 수 있는 곳은 어디일까요?" 핀을 꽂을 때마다 그곳에서 하는 일을 고르게 한다. "약국에서 진찰도 해 줘요"라는 학생에게 "약국은 약을 받고 먹는 법을 묻는 곳이에요. 진찰은 병원에서 해요"라고 말해 준다. 셋째 문항은 밤에 동네 의원이 문을 닫았을 때다. 우리 동네 실제 기관 위치는 보호자와 알아보게 한다.',
          task: '가상 동네 지도에서 건강 기관에 핀을 꽂고, 그곳에서 하는 일을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MAPQ(TOWN, '보건소', '예방접종·건강 상담 안내를 받을 수 있는 곳에 핀을 꽂아요.', '이곳에서 하는 일은?', ['예방접종·건강 상담 안내', '물건 사기', '놀이하기'], 0, ['', '보건소는 건강을 돕는 공공 기관이에요.', '공원과 헷갈리지 않아요.'], 0.2),
            MAPQ(TOWN, '약국', '처방받은 약을 받고 먹는 법을 묻는 곳에 핀을 꽂아요.', '이곳에서 하는 일은?', ['진찰 받기', '약 받고 먹는 법 묻기', '예방접종 맞기'], 1, ['진찰은 병원에서 해요.', '', '접종은 병원·보건소에서 해요.'], 0.25),
            MAPQ(TOWN, '큰 병원', '밤에 열이 아주 많이 나는데 동네 의원이 문을 닫았어요. 보호자와 갈 곳에 핀을 꽂아요.', '이때 할 일은?', ['아침까지 혼자 참는다', '보호자와 큰 병원에 간다', '약국 문을 두드린다'], 1, ['심하면 참지 않고 어른과 함께 가요.', '', '진찰은 병원에서 해요.'], 0.3),
            { prompt: '모둠에서 우리 동네 건강 기관을 보호자와 알아볼 방법 하나를 말해요.', free: true, talk: true, conclude: '건강 기관마다 하는 일이 달라요. 아픈 정도와 시간에 따라 어른과 함께 알맞은 곳을 골라요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '곳마다 하는 일을 써요.', columns: ['곳', '하는 일'], cells: [['보건소', ''], ['약국', '']], answer: '예방접종·건강 상담 안내, 약 받고 먹는 법 묻기' }] },
        notes: '동네 지도는 가상이다. 기관의 역할과 밤에 문 여는 곳은 사람 확인 목록에 있다. saf-drug 의 \'약을 물어볼 곳\' 지도와 겹치지 않게 보건소·밤 상황을 넣었다.',
      }),
      X('activity.where-sort', {
        title: '증상별 갈 곳 나누기', method: '증상별 갈 곳 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 3장을 보건실·병원·약국 바구니에 하나씩 나눈다.', base: '카드 6장을 나눈다.', challenge: '카드가 늘고, 셋째 문항에서 헷갈리는 카드의 근거를 말한다.' },
        activity: {
          title: '갈 곳 바구니 나누기', tool: 'sortboard',
          teacher: '"이럴 때는 어디로 갈까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "보건실은 아무 때나 가면 안 돼요"라는 학생에게 "학교에서 몸이 불편하면 보건실에 알리는 것이 먼저예요. 보건 선생님이 병원에 가야 할지 함께 판단해 줘요"라고 말해 준다. 셋째 문항에서는 \'배가 아픔\'처럼 어디로 갈지 헷갈리는 카드를 함께 따진다.',
          task: '증상 카드를 보건실·병원·약국 바구니에 나누고, 헷갈리는 카드의 근거를 말해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('증상 카드를 갈 곳 바구니에 나누어요.', { slots: ['보건실', '병원', '약국'], easy: 1,
              groups: { 보건실: ['수업 중 살짝 긁힘', '쉬는 시간에 배가 살살'], 병원: ['열이 며칠째 남', '기침이 오래감'], 약국: ['약 쓰는 법이 궁금함', '처방받은 약 받기'] },
              extra: { 보건실: ['체육 시간 코피'], 병원: ['다친 곳이 계속 부음'] } }, 0.2),
            SORT('주말에 생긴 일 카드를 갈 곳 바구니에 나누어요.', { slots: ['병원', '약국'], easy: 1, groups: { 병원: ['열이 계속 오름', '귀가 계속 아픔'], 약국: ['먹던 약 먹는 때가 궁금함', '설명서 글이 어려움'] } }, 0.25, { conclude: '학교에서는 보건실에 먼저 알리고, 계속되면 병원, 약이 궁금하면 약국이에요.' }),
            { prompt: '\'쉬는 시간에 배가 살살\'처럼 헷갈리는 카드 하나를 골라 근거를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '증상에 알맞은 곳을 써요.', columns: ['증상', '갈 곳'], cells: [['열이 며칠째 남', ''], ['약 쓰는 법이 궁금함', '']], answer: '병원, 약국' }] },
        notes: '갈 곳 구분은 사람 확인 목록에 있다. 학생 자신의 증상·병원 이용은 묻지 않는다.',
      }),
      X('activity.plan-blocks', {
        title: '하루 건강 습관 블록 짜기', method: '하루 건강 습관 블록 짜기', tool: 'block-coding', minutes: 14,
        levels: { easy: '작은 판에서 블록 3개로 별 칸 2곳(손 씻기·물 마시기)을 지나 도착시킨다.', base: '큰 판에서 별 칸 3곳(손 씻기·물 마시기·움직이기)을 지나 집(잠자리)에 닿게 하고, 반복 블록을 꼭 쓴다.', challenge: '오른쪽으로 잘못 도는 프로그램을 한 블록만 고쳐 바로잡는다(둘째 문항).' },
        activity: {
          title: '거북이의 건강한 하루', tool: 'block-coding',
          teacher: '"거북이의 하루 길에 건강 습관 별이 있어요. 별 칸은 차례로 손 씻기, 물 마시기, 움직이기이고 도착 칸은 잠자리예요." 판에는 칸 이름이 없어 칠판에 적어 둔다. "같은 블록을 여러 번 붙이면 돼요"라는 학생에게 "앞으로를 네 번 붙이는 대신 \'반복 4번\'을 쓰면 더 짧아져요. 습관도 되풀이해야 몸에 붙어요"라고 말해 준다. 블록을 붙인 뒤 실행을 눌러 확인하게 한다.',
          task: '거북이가 별 칸(손 씻기·물 마시기·움직이기)을 지나 잠자리 칸에 닿도록 블록을 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '별 칸 세 곳을 지나 잠자리 칸에 닿도록 반복 블록을 써서 놓아요.', toolOptions: PLAN, target: { reach: true, stars: true, use: ['rep'] }, difficulty: 0.25,
              levels: { easy: { prompt: '별 칸 두 곳을 지나 도착 칸에 닿도록 블록을 3개 이내로 놓아요.', toolOptions: { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 1], [2, 1]], rocks: [[2, 0]], maxBlocks: 3 }, target: { reach: true, stars: true, maxBlocks: 3 } } } },
            { prompt: '오른쪽으로 잘못 도는 프로그램을 한 블록만 고쳐 잠자리 칸에 닿게 해요.', toolOptions: PLAN, state: { program: BUGGY }, target: { reach: true, stars: true, maxEdits: 1, from: BUGGY }, difficulty: 0.3,
              conclude: '건강 습관도 블록처럼 차례대로, 날마다 되풀이하면 몸에 붙어요.' },
            { prompt: '별 칸 세 곳의 뜻을 차례대로 짝에게 말하고, 내 하루에 넣을 별 하나를 더 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '하루 건강 습관을 차례대로 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '(예) 손 씻기, 물 마시기, 움직이기, 잠자리' }] },
        notes: '거북이 판에는 칸 이름이 없다. 별·도착 칸의 뜻은 칠판과 활동지에 적어 준다. 체계도의 \'조건 블록 넣기\'는 판 조건으로 뜻을 붙이기 어려워 도전 단계를 \'한 블록 고치기\'로 바꾸었다.',
      }),
      X('activity.plan-try', {
        title: '계획 한 구간 해 보기', method: '계획 한 구간 해 보기', tool: 'timer', minutes: 14,
        levels: { easy: '구간 타이머를 한 번(해 보기·쉬기)으로 맞춰 해 본다.', base: '구간 타이머를 두 번으로 맞춰 해 보고 스스로 점검한다.', challenge: '짝과 계획을 바꿔 해 본다(셋째 문항).' },
        activity: {
          title: '계획 구간 타이머와 점검', tool: 'timer',
          teacher: '"짠 계획 가운데 \'물 마시고 몸 풀기\' 구간을 지금 해 볼까요? 시간은 우리 반 연습값이에요." 타이머를 맞춘 뒤 다 함께 해 본다. "계획은 세우기만 하면 돼요"라는 학생에게 "해 봐야 내 계획이 정말 지킬 수 있는지 알 수 있어요"라고 말해 준다. 점검 칸은 정답이 없고, 해 본 것만 표시한다.',
          task: '건강 계획 한 구간을 타이머로 해 보고, 해 본 것을 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '해 보기 30초·쉬기 10초를 2번 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '계획 해 보기(우리 반 연습값)', plan: { work: 10, rest: 10, rounds: 1 }, labels: ['해 보기', '쉬기'], workStep: 10 }, target: { plan: { work: 30, rest: 10, rounds: 2 } }, difficulty: 0.2,
              levels: { easy: { prompt: '해 보기 30초·쉬기 10초를 1번 하도록 맞춰요(우리 반 연습값).', target: { plan: { work: 30, rest: 10, rounds: 1 } } } } },
            { prompt: '해 본 뒤 계획을 스스로 점검해 표시해요(정답 없음).', toolOptions: { title: '해 본 뒤 점검' }, target: { selfCheck: ['정한 대로 해 보았다', '어려운 점을 찾았다', '고칠 점을 정했다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '해 본 뒤 계획을 스스로 점검해 표시해요(두 칸).', target: { selfCheck: ['정한 대로 해 보았다', '어려운 점을 찾았다'] } } } },
            { prompt: '짝과 계획을 바꿔 한 구간 해 보고 표시해요.', free: true, toolOptions: { doneLabel: '짝과 계획을 바꿔 해 보았어요' }, conclude: '계획은 해 보고 점검할 때 지킬 수 있는 계획이 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '계획을 해 본 뒤 고칠 점 하나를 써요.' }] },
      }),
      X('wrap.plan-write', {
        title: '나의 건강 계획서', method: '나의 건강 계획서', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 보고 목표·실천 방법 두 항목을 쓰고 기준 2개를 점검한다.', base: '목표·실천 방법·점검 방법 세 항목을 쓰고 기준 3개를 점검한다.', challenge: '짝 계획을 읽고 고칠 곳을 알려 준 뒤 내 글도 한 군데 고친다.' },
        wrap: {
          teacher: '"오늘까지 배운 것으로 나의 건강 계획서를 써 볼까요? 목표, 실천 방법, 점검 방법을 넣어요." \'점검 방법\'은 지켰는지 어떻게 알지(달력에 표시 등)라고 짚는다. "건강해지기"처럼 쓰는 학생에게 "무엇을 하면 건강해질까요? \'급식 전 손 씻기\'처럼 행동으로 써 봐요"라고 말해 준다. 내 몸무게·병·지금 건강 상태는 쓰지 않는다.',
          exitTicket: [
            RUBX('목표·실천 방법·점검 방법을 넣어 나의 건강 계획서를 써요.', { topic: '나의 건강 계획을 목표·실천 방법·점검 방법을 넣어 써요(몸무게·병·지금 건강 상태는 쓰지 않아요).', title: '나의 건강 계획서', starter: '목표: ___. 실천 방법: ___ 때 ___. 점검 방법: ___.', crit: ['목표를 행동으로 썼다', '언제 어떻게 할지 썼다', '지켰는지 확인할 방법을 썼다'], must: [['점검', '확인', '표시']], chars: [30, 200] }),
            { type: 'choice', prompt: '점검 방법으로 알맞은 것은?', options: ['그냥 기억한다', '달력에 날마다 표시한다', '친구 계획을 본다'], answer: 1, difficulty: 0.15, explain: '눈에 보이게 표시하면 지켰는지 알 수 있어요.' },
          ],
        },
        worksheet: {
          title: '나의 건강 계획서',
          items: [
            { type: 'table', prompt: '나의 건강 계획을 써요.', columns: ['목표', '실천 방법', '점검 방법'], cells: [['', '', '']] },
            { type: 'check', prompt: '내 계획을 점검해요.', options: ['행동으로 썼다', '언제 할지 썼다', '점검 방법이 있다'] },
          ],
        },
        notes: '계획서에 몸무게·병력·지금 건강 상태를 쓰지 않게 한다. 글은 교사만 본다.',
      }),
      X('wrap.plan-list', {
        title: '일주일 점검표 만들기', method: '일주일 점검표 만들기', tool: 'kitchen', minutes: 8,
        levels: { easy: '점검표에 넣을 항목 2개를 고른다.', base: '점검표에 넣을 항목 3개를 고른다.', challenge: '항목 4개를 고르고 점검 날짜를 정해 활동지에 쓴다.' },
        wrap: {
          teacher: '"일주일 동안 쓸 건강 점검표를 만들어 볼까요? 지킬 수 있는 행동만 골라요." 첫 출구에서 \'한 번에 다 바꾸기\'처럼 지키기 어려운 항목은 넣지 않는다고 짚는다. "항목이 많을수록 좋아요"라는 학생에게 "적어도 날마다 지키는 점검표가 더 힘이 있어요"라고 말해 준다. 점검 날짜는 활동지에 쓴다.',
          exitTicket: [
            CHKX('일주일 건강 점검표에 넣을 항목만 골라요.', '일주일 건강 점검표', ['급식 전 손 씻기', '자기 전 화면 끄기', '쉬는 시간에 걷기', '기분을 말로 하기'], ['한 번에 다 바꾸기', '친구와 점수 겨루기']),
            { type: 'choice', prompt: '점검표를 오래 쓰는 방법으로 알맞은 것은?', options: ['항목을 아주 많이', '지킬 수 있는 항목만', '한 번만 표시'], answer: 1, difficulty: 0.15, explain: '지킬 수 있는 항목이어야 일주일 내내 쓸 수 있어요.' },
            { type: 'short', prompt: '점검표를 확인할 요일과 때를 정해 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 건강 점검표',
          items: [
            { type: 'table', prompt: '일주일 점검표를 만들어요.', columns: ['항목', '월', '화', '수', '목', '금'], cells: [['', '', '', '', '', ''], ['', '', '', '', '', '']] },
            { type: 'short', prompt: '점검표를 확인할 때를 써요.' },
          ],
        },
        notes: '점검표는 학생이 집에서 혼자 쓰는 것이다. 반에서 걷거나 견주지 않는다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
