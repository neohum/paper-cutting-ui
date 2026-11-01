/* 창체 법정교육 영양·식생활 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 food 초5-6.
 * 근거: 학교급식법 제13조·식생활교육지원법 제26조(건강한 식생활·영양교육 연 2회 이상), 보건교육 초 '건강한 식생활',
 *       환경·지속가능발전 초 '분리배출·자원 절약' — sources/changche/research-mandatory.md §1·§2.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길 상황(dilemma)·기준표 글쓰기(rubric-writing).
 *   음식을 '좋은 음식/나쁜 음식'으로 낙인찍지 않는다 — '자주·많이·한쪽으로 치우침'과 '견주어 고르기'로 말한다. 체형·외모·몸무게를 평가하거나 다이어트를 권하지 않는다.
 *   학생 자신의 식습관·몸무게·건강 상태·가정 형편을 묻거나 채점하지 않는다 — 판단·채점은 모두 가상 인물(가명 한두 글자)·가상 포장·가상 기록으로 한다.
 *   영양 수치(당류 g·나트륨 mg·잔반 kg)와 값(원)은 모두 수업용으로 지은 가상 값이다(화면에 '가상'이라고 적는다). 권장량·하루 기준치는 쓰지 않는다.
 * 주제 3개(5학년 1 · 6학년 2), 계획 모듈 24개 전부. 추천 조합은 체계도 sequences(학년마다 2차시).
 *
 * 사람 확인: 근거 파일에는 법정 항목 제목만 있어, 아래 문장은 공식 안내처에서 확인해야 한다.
 *   - label-find.intro.front-back·intro.label-map·activity.label-steps: '가공식품 포장에는 영양 표시(내용량·열량·당류·나트륨 등)가 있다',
 *     '앞면 광고 문구보다 뒷면 영양 표시를 읽는다', '내용량(같은 양)을 맞춰 견준다'는 읽기 차례 — 식품의약품안전처(식품 영양표시 안내).
 *   - label-find.activity.cause-effect·wrap.plan-write: '단 음료·단 간식을 자주 먹으면 단맛에 길들여지고, 먹은 뒤 이를 닦지 않으면 이가 상하기 쉽다',
 *     '짠 음식을 자주 먹으면 짠맛에 길들여지고 목이 마르다', '국물을 다 마시면 나트륨을 더 먹게 된다' — 식품의약품안전처·질병관리청 국가건강정보포털.
 *   - week-record.intro.record-read·activity.fix-menu·activity.menu-budget: 식품군 칸은 교구 기본값 5가지(곡류 / 고기·생선·달걀·콩류 / 채소·과일류 /
 *     우유·유제품류 / 유지·당류)다. 교과서·식품구성자전거는 채소류와 과일류를 나누어 6가지로 보일 수 있다 — 교사가 쓰는 교과서와 맞춘다(보건복지부·한국영양학회).
 *   - week-record.activity.cause-talk: '채소가 적으면 변비가 생기기 쉽다', '아침을 거르면 오전에 힘이 없을 수 있다' — 질병관리청 국가건강정보포털.
 *   - week-record.activity.fix-menu: '싱겁게 먹는 방법(국물 덜 먹기·소스 따로·간 보고 먹기)' — 식품의약품안전처(나트륨 줄이기 안내).
 *   - safe-nowaste.intro.germ-story·activity.wash-steps: 손 씻기 여섯 단계(손바닥·손등·손가락 사이·엄지·손톱 밑·손목)와 씻는 시간 — 질병관리청.
 *     타이머 값(30초)은 '우리 반 연습값'으로만 적었다. 공식 권장 시간은 교사가 최신 지침으로 안내한다.
 *   - safe-nowaste.activity.fridge-sort: '오늘 안 먹을 고기는 냉동 칸', '남은 반찬은 뚜껑을 덮어 냉장 칸', '먼저 먹을 것을 앞에' 보관 원칙 —
 *     식품의약품안전처(식중독 예방 안내).
 *   - safe-nowaste.intro.leftover-graph·activity.waste-cycle: 음식물 쓰레기 처리 과정(모으기 → 옮기기 → 처리) 이름 — 환경부. 잔반 그래프는 가상 자료(실제 급식 자료 아님).
 */
(function () {
  const M = [];
  // 모듈 머리: mk('label-find', 5)('intro.front-back', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `food.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'food', band: '초5-6', topic: `food.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const EX = (tool, it) => ({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
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
  const MATCH = (prompt, { topic, pairs, easy = 2, more = [], extra = [], center }, d, add) => {
    const rot = (list) => (list.length > 2 ? [...list.slice(1), list[0]] : list.slice().reverse());
    const board = (ps, ex) => ({ toolOptions: Object.assign({ mode: 'match', slots: ps.map((p) => p[0]), cards: rot([...ps.map((p) => p[1]), ...ex]) }, topic ? { topic } : {}, center ? { center } : {}), target: { match: Object.fromEntries(ps.map((p) => [p[0], p[1]])) } });
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
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 몸을 챙기는 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 몸을 챙기는 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: [good[0]], some: true } },
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
  // 스스로 점검표(kitchen checklist selfCheck) — 정답 없음. 쉬움 easy칸, 기본 base칸, 도전 전부
  const SELFK = (title, list, prompt, { easy = 2, base = 3 } = {}) => {
    const it = (l) => l.map((t, i) => ({ id: `c${i + 1}`, text: t }));
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(list.slice(0, easy)) }, target: { selfCheck: true } } };
    if (list.length > base) lv.challenge = { prompt: `${cut(prompt)}(${list.length}칸).`, toolOptions: { items: it(list) }, target: { selfCheck: true } };
    return { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items: it(list.slice(0, base)) }, prompt, target: { selfCheck: true }, difficulty: 0.1, levels: lv };
  };
  // 정리: 콜라주 캠페인 판 — 쉬움 조각 3개·점검 2칸, 기본 조각 5개·점검 3칸, 도전 점검 4칸
  const COLX = (prompt, crit) => ({
    type: 'tool', tool: 'collage', options: { shapes: ['rect', 'circle', 'semi', 'square', 'heart', 'star', 'leaf', 'triangle'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하양'], maxPieces: 16 },
    prompt, target: { selfCheck: crit.slice(0, 3), minPieces: 5 }, difficulty: 0.1,
    levels: {
      easy: { prompt: `${cut(prompt)}(조각 3개 이상).`, target: { selfCheck: crit.slice(0, 2), minPieces: 3 } },
      challenge: { prompt: `${cut(prompt)}(점검 네 칸).`, target: { selfCheck: crit.slice(0, 4), minPieces: 5 } },
    },
  });

  // ======== 5학년 · 영양 표시에서 당류·나트륨 찾기 (학교급식법 제13조·식생활교육지원법 제26조, 보건교육 초 건강한 식생활) ========
  {
    const X = mk('label-find', 5);
    // 가상 포장 뒷면 칸 지도(4×4): 줄마다 이름 칸
    const LABEL = [
      { name: '제품 이름', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] },
      { name: '내용량', cells: [[0, 1], [1, 1]] }, { name: '열량', cells: [[2, 1], [3, 1]] },
      { name: '나트륨', cells: [[0, 2], [1, 2]] }, { name: '당류', cells: [[2, 2], [3, 2]] },
      { name: '원재료', cells: [[0, 3], [1, 3], [2, 3], [3, 3]] },
    ];
    const SODA = [['음료 가', 20], ['음료 나', 8]];
    const SALT = [['과자 가', 300], ['과자 나', 180]];
    const FRONT = [
      { id: 'f1', text: '앞면 "과일 듬뿍!"', motif: 'fruit' }, { id: 'f2', text: '뒷면을 돌려 봐요', motif: 'star' },
      { id: 'f3', text: '당류 칸을 찾아요', motif: 'flower' }, { id: 'f4', text: '다른 음료와 견줘요', motif: 'tree' },
    ];
    M.push(
      X('intro.front-back', {
        title: '앞면 광고와 뒷면 표시', method: '앞면 광고와 뒷면 표시', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2장(앞면 광고·뒷면 표시)만 차례대로 짚어 준다.', base: '장면 3장(앞면 → 뒷면 → 당류 칸)을 함께 차례대로 놓는다.', challenge: '장면 4장(견주기까지)을 놓고, 앞면 문구가 왜 그렇게 쓰였는지 말한다.' },
        intro: {
          teacher: '"이 가상 음료 앞면에는 \'과일 듬뿍!\'이라고 크게 쓰여 있어요. 이것만 보고 무엇이 들었는지 알 수 있을까요?" 시연 단추로 앞면 → 뒷면 → 당류 칸 장면이 차례대로 놓이는 모습을 보인다. "앞면에 건강이라고 쓰여 있으면 안심이에요"라는 말에는 "앞면은 사고 싶게 만드는 광고 자리예요. 무엇이 얼마나 들었는지는 뒷면 영양 표시에 있어요"라고 되묻는다. 음료를 좋다·나쁘다로 가르지 않고 \'견주어 고르기\'를 배운다고 밝힌다.',
          student: '가상 음료 앞면과 뒷면 가운데 무엇이 들었는지 알려 주는 곳은 어디인지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 3, cards: [FRONT[2], FRONT[0], FRONT[1]], title: '가상 음료 살펴보기' }, sequence: [{ order: ['f1', 'f2', 'f3'] }] },
          art: art('a paper juice box seen from the front with big fruit drawings, and a paper hand turning it to show a small nutrition label table on the back', '앞면보다 뒷면을 봐요', 'fruit', 'peach'),
        },
        notes: '음료 이름·수치는 지은 것이다. 실제 상표를 보이지 않는다.',
      }),
      X('intro.label-map', {
        title: '표시 상자에서 줄 찾기', method: '표시 상자 지도', tool: 'map', minutes: 6,
        levels: { easy: '교사가 당류 줄 한 곳에 핀이 놓이는 모습을 보인다.', base: '당류·나트륨·열량 세 줄에 핀이 차례로 옮겨 가는 모습을 보인다.', challenge: '세 줄을 본 뒤 내용량 줄도 찾아 왜 먼저 봐야 하는지 말한다.' },
        intro: {
          teacher: '"가상 과자 봉지 뒷면의 영양 표시 상자예요. 당류는 어느 줄에 있을까요?" 시연 단추로 핀이 당류 → 나트륨 → 열량 → 내용량 줄로 옮겨 가는 모습을 보인다. "글씨가 작으니 안 읽어도 돼요"라는 말에는 "작은 상자에 중요한 수가 다 모여 있어요. 줄 이름을 먼저 찾으면 금방 읽을 수 있어요"라고 말해 준다.',
          student: '표시 상자에서 당류와 나트륨 줄을 손가락으로 짚어 보고, 짝과 줄 이름을 말해 보아요.',
          demo: { tool: 'map', options: { grid: [4, 4], regions: LABEL, title: '가상 과자 뒷면 영양 표시' }, sequence: [{ region: '당류' }, { region: '나트륨' }, { region: '열량' }, { region: '내용량' }] },
          art: art('a paper snack bag lying flat with a neat paper nutrition table on its back, and small paper pins stuck on two rows', '표시 상자를 읽어요', 'star', 'sky'),
        },
        notes: '실제 포장 표시 순서는 제품마다 조금씩 다르다. 빈 포장을 가져와 줄 이름만 견주어 보게 하면 좋다.',
      }),
      X('activity.compare-two', {
        title: '두 간식 당류 막대그래프', method: '두 간식 견주기', tool: 'chart', minutes: 13,
        levels: { easy: '막대 끝에 값이 보이고, 당류 막대 두 개를 완성해 견준다.', base: '당류 막대를 완성하고 나트륨 그래프도 읽어 더 적은 쪽을 고른다.', challenge: '내용량이 다른 두 과자를 견줄 때 같은 양으로 맞춰야 하는 까닭을 고른다.' },
        activity: {
          title: '가상 포장 두 개 견주기', tool: 'chart',
          teacher: '"두 음료 뒷면의 당류 줄을 읽어 막대로 옮겨 볼까요? 수는 수업용으로 지은 가상 값이에요." 막대 끝을 눈금에 맞추게 한다. "음료 가가 더 맛있으니 그걸 골라요"라는 학생에게 "맛도 중요하죠. 오늘은 표시를 견주어 보는 연습이에요. 어느 쪽이 당류가 적을까요?"라고 묻는다. 셋째 문항에서 "한 봉지끼리 견주면 돼요"라는 말에는 "한 봉지 양이 다르면 견주기가 공정할까요?"라고 되묻는다.',
          task: '가상 포장 두 개의 당류·나트륨을 그래프로 견주고, 더 적은 쪽과 견주는 방법을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '두 음료 뒷면의 당류를 보고 막대그래프를 완성해요(가상 값).', toolOptions: { type: 'bar', mode: 'build', title: '음료 한 병의 당류(가상)', unit: 'g', xLabel: '음료', yLabel: '당류', data: SODA, scale: 4 }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '음료 나의 당류 막대를 완성해요(가상 값).', toolOptions: { given: [0] } } } },
            { prompt: '두 과자 가운데 나트륨이 더 적은 쪽을 골라요(가상 값).', toolOptions: { type: 'bar', mode: 'read', title: '과자 한 봉지의 나트륨(가상)', unit: 'mg', xLabel: '과자', yLabel: '나트륨', data: SALT, scale: 50, choices: ['과자 가', '과자 나'], question: '나트륨이 더 적은 쪽은?' }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '한 봉지 양이 다른 두 과자를 견줄 때 알맞은 방법을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '과자 한 봉지의 나트륨(가상)', unit: 'mg', data: SALT, scale: 50, choices: ['같은 양으로 맞춰 견준다', '봉지가 큰 쪽을 고른다', '앞면 글씨로 견준다'], question: '어떻게 견줄까?', why: ['', '봉지 크기는 표시 값과 달라요.', '앞면은 광고 자리예요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '뒷면 표시에서 당류·나트륨을 찾고, 같은 양으로 맞춰 견주어 골라요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '두 간식을 견줄 때 먼저 볼 곳은 어디인가요?', options: ['앞면 광고 문구', '뒷면 영양 표시', '포장 색깔'], answer: '뒷면 영양 표시' }] },
        notes: '그래프 수치는 수업용 가상 값이다. 실제 제품 수치처럼 말하지 않는다.',
      }),
      X('activity.shop-label', {
        title: '표시 보고 소풍 간식 장보기', method: '표시 보고 장보기', tool: 'economy', minutes: 14,
        levels: { easy: '예산 안에서 간식 두 개를 고르고, 음료는 당류가 적은 쪽을 고른다.', base: '예산 안에서 간식 세 개를 고르고 음료는 당류가, 과자는 나트륨이 적은 쪽을 고른다.', challenge: '예산이 줄어도 세 개를 고르고 표시 조건을 지키는 조합을 찾는다.' },
        activity: {
          title: '예산 안에서 표시 보고 고르기', tool: 'economy',
          teacher: '"가상 친구 서진이의 소풍 간식 예산이에요. 값과 함께 괄호 속 표시도 읽어 볼까요?" 고를 때마다 값과 표시를 소리 내어 읽게 한다. "가장 비싼 게 가장 좋아요"라는 학생에게 "값과 표시는 다른 정보예요. 둘 다 견주어 봐요"라고 말해 준다. 간식 값과 표시 수치는 모두 지은 것이다.',
          task: '예산 막대를 넘지 않게, 괄호 속 표시를 견주어 소풍 간식을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '5천 원 안에서 세 개를 고르되, 음료는 당류가 더 적은 쪽으로 골라요.', toolOptions: { mode: 'budget', budget: 5000, items: [{ id: 'wtea', text: '보리차(당류 0g)', price: 1000 }, { id: 'ade', text: '에이드(당류 24g)', price: 1500 }, { id: 'rice', text: '쌀과자(나트륨 90mg)', price: 1500 }, { id: 'apple', text: '사과 한 개', price: 1500 }, { id: 'choco', text: '초코바', price: 2000 }], ask: '소풍 간식 고르기(가상 값)' }, target: { budget: { count: 3, not: ['ade'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '5천 원 안에서 두 개를 고르되, 음료는 당류가 더 적은 쪽으로 골라요.', target: { budget: { count: 2, not: ['ade'] } } },
                challenge: { prompt: '4천 원 안에서 세 개를 고르되, 음료는 당류가 더 적은 쪽으로 골라요.', toolOptions: { budget: 4000 }, target: { budget: { count: 3, not: ['ade'] } } },
              } },
            { prompt: '4천 원 안에서 세 개를 고르되, 과자는 나트륨이 더 적은 쪽으로 골라요.', toolOptions: { mode: 'budget', budget: 4000, items: [{ id: 'chipA', text: '감자칩 가(나트륨 300mg)', price: 1200 }, { id: 'chipB', text: '감자칩 나(나트륨 120mg)', price: 1200 }, { id: 'water', text: '생수', price: 800 }, { id: 'banana', text: '바나나', price: 1000 }, { id: 'milk', text: '흰 우유', price: 1000 }], ask: '소풍 간식 고르기(가상 값)' }, target: { budget: { count: 3, not: ['chipA'] } }, difficulty: 0.3,
              levels: {
                easy: { prompt: '4천 원 안에서 두 개를 고르되, 과자는 나트륨이 더 적은 쪽으로 골라요.', target: { budget: { count: 2, not: ['chipA'] } } },
                challenge: { prompt: '3천 원 안에서 세 개를 고르되, 과자는 나트륨이 더 적은 쪽으로 골라요.', toolOptions: { budget: 3000 }, target: { budget: { count: 3, not: ['chipA'] } } },
              },
              conclude: '값만 보지 않고 뒷면 표시를 함께 견주면, 예산 안에서도 몸을 생각한 간식을 고를 수 있어요.' },
            { prompt: '모둠에서 고른 간식 세 개와 그 까닭을 표시를 들어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 소풍 간식 가운데 하나를 고르고, 고른 까닭을 표시를 들어 써요.' }] },
        notes: '간식 값·표시 수치는 수업용으로 지은 값이다. 학생의 실제 용돈이나 집 형편을 묻지 않는다.',
      }),
      X('activity.cause-effect', {
        title: '자주 먹으면 생기는 일', method: '자주 먹으면 생기는 일', tool: 'sortboard', minutes: 13,
        levels: { easy: '원인 바구니 2개에 결과 카드를 한 장씩 넣는다(두 쌍).', base: '원인 바구니 4개에 결과 카드를 넣는다(네 쌍).', challenge: '결과를 막는 행동 카드까지 알맞은 원인 바구니에 덧붙인다.' },
        activity: {
          title: '원인 바구니에 결과 넣기', tool: 'sortboard',
          teacher: '"단 음료를 한 번 마시는 것과 자주 마시는 것은 무엇이 다를까요?" 카드를 넣을 때마다 \'~을 자주 하면 ~할 수 있다\' 문장으로 읽게 한다. "과자는 나쁜 음식이에요"라는 학생에게 "음식에 착하고 나쁜 것은 없어요. 얼마나 자주, 얼마나 많이 먹는지가 몸에 영향을 줘요"라고 말해 준다. 도전에서는 결과를 막는 행동이 어느 원인과 이어지는지 까닭을 말하게 한다.',
          task: '원인 바구니마다 이어지는 결과 카드를 넣고, 막는 행동 카드도 찾아 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('원인 바구니에 이어지는 결과 카드를 넣어요.', { slots: ['단 음료를 자주 마심', '짠 과자를 자주 먹음', '국물까지 다 마심', '자기 전 단 간식'], easySlots: ['단 음료를 자주 마심', '짠 과자를 자주 먹음'], easy: 1,
              groups: { '단 음료를 자주 마심': ['단맛에 길들여져요'], '짠 과자를 자주 먹음': ['짠맛에 길들여져요'], '국물까지 다 마심': ['나트륨을 더 먹게 돼요'], '자기 전 단 간식': ['이가 상하기 쉬워요'] },
              extra: { '단 음료를 자주 마심': ['목마르면 물 마시기'], '짠 과자를 자주 먹음': ['조금 덜어 먹기'], '국물까지 다 마심': ['건더기 위주로 먹기'], '자기 전 단 간식': ['먹은 뒤 이 닦기'] } }, 0.25),
            SORT('카드를 원인과 결과 바구니로 나누어요.', { slots: ['원인', '결과'], groups: { 원인: ['단 음료를 자주 마심', '라면 국물을 다 마심'], 결과: ['단맛에 길들여져요', '목이 자주 말라요'] }, easy: 1, extra: { 결과: ['나트륨을 더 먹게 돼요'] }, traps: ['키가 쑥 자라요'] }, 0.2, { conclude: '한 번이 아니라 자주·많이 먹는 습관이 몸에 영향을 줘요. 막는 행동은 작게라도 바로 할 수 있어요.' }),
            { prompt: '모둠에서 막는 행동 가운데 이번 주에 해 볼 것 하나를 골라 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인과 막는 행동을 이어 써요.', columns: ['원인', '막는 행동'], cells: [['단 음료를 자주 마심', ''], ['국물까지 다 마심', '']], answer: '목마르면 물 마시기, 건더기 위주로 먹기' }] },
        notes: '결과 카드는 건강 정보이므로 사람 확인 목록에 있다. 특정 음식을 먹는 학생을 예로 들지 않는다.',
      }),
      X('activity.label-steps', {
        title: '영양 표시 읽는 차례', method: '표시 읽는 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(당류 찾기 → 나트륨 찾기 → 견주기)을 차례로 놓는다.', base: '카드 4장(내용량 확인부터)을 차례로 놓는다.', challenge: '틀린 카드(앞면만 보기)를 빼고 놓은 뒤, 빠진 단계를 고른다.' },
        activity: {
          title: '표시 읽는 차례 놓기', tool: 'timeline',
          teacher: '"표시 상자를 읽을 때 무엇부터 볼까요?" 카드를 놓을 때마다 왜 그 자리인지 말하게 한다. "당류부터 보면 돼요"라는 학생에게 "한 봉지가 몇 g인지 모르면 당류 수를 견줄 수 있을까요?"라고 되묻는다. 셋째 문항은 빠진 단계를 찾아 넣는 연습이다.',
          task: '영양 표시를 읽는 차례대로 카드를 시간 줄에 놓고, 빠진 단계를 찾아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('음료 표시를 읽는 차례대로 카드를 놓아요.', ['내용량 확인', '당류 찾기', '나트륨 찾기', '다른 것과 견주기'], { easy: [1, 2, 3], trap: '앞면 광고만 보기', mode: 'order', axis: ['먼저', '나중'] }, 0.2),
            ORDER('라면 두 개를 견줄 때 차례대로 카드를 놓아요.', ['한 봉지 양 보기', '나트륨 줄 찾기', '같은 양으로 맞추기', '더 적은 쪽 고르기'], { easy: [1, 2, 3], trap: '포장 색 보기', mode: 'order', axis: ['먼저', '나중'] }, 0.25),
            { prompt: '"당류 찾기 → 나트륨 찾기 → 견주기"에서 빠진 첫 단계를 골라요.', toolOptions: { mode: 'pick', basket: '빠진 단계', cards: ['앞면 문구 읽기', '내용량 확인', '가격 보기'], axis: ['먼저', '나중'] }, target: { pick: ['내용량 확인'] }, difficulty: 0.3, conclude: '영양 표시는 내용량 → 당류 → 나트륨 → 견주기 차례로 읽어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '영양 표시를 읽을 때는 먼저 ___을 확인해요.', answer: '내용량' }] },
      }),
      X('wrap.self-check', {
        title: '간식 고르기 점검표', method: '간식 고르기 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검표에 넣을 칸 2개를 고르고, 이번 주 지킬 칸 2개에 표시한다.', base: '점검표 칸 3개(뒷면 보기·당류 찾기·물과 함께)를 고르고 표시한다.', challenge: '가족 장보기에서 쓸 칸까지 4개를 고르고 표시한다.' },
        wrap: {
          teacher: '"간식을 고를 때 쓸 나만의 점검표를 만들어 볼까요?" 첫 출구에서 점검표에 넣을 칸만 고르게 하고, 둘째 출구에서 이번 주에 지킬 칸에 스스로 표시하게 한다. "포장이 예쁜지 보기"를 넣는 학생에게 "포장 그림이 무엇이 들었는지 알려 줄까요?"라고 되묻는다. 둘째 출구는 정답이 없고, 친구와 견주지 않는다.',
          exitTicket: [
            CHKX('간식 고르기 점검표에 넣을 칸만 골라요.', '간식 고르기 점검표', ['뒷면 표시 보기', '당류 줄 찾기', '목마르면 물과 함께', '가족 장보기 때도 견주기'], ['포장이 예쁜지 보기', '광고 모델 보기']),
            SELFK('이번 주 지킬 칸', ['뒷면 표시 보기', '당류 줄 찾기', '목마르면 물과 함께', '가족 장보기 때도 견주기'], '이번 주에 지켜 볼 칸에 스스로 표시해요(정답 없음).'),
            { type: 'choice', prompt: '앞면에 "건강 간식"이라고 쓰여 있어요. 어떻게 할까요?', options: ['바로 믿고 고른다', '뒷면 표시를 확인한다', '포장 색을 본다'], answer: 1, difficulty: 0.15, explain: '앞면 문구는 광고예요. 뒷면 표시를 확인해요.' },
          ],
        },
        worksheet: {
          title: '간식 고르기 점검표',
          items: [
            { type: 'check', prompt: '간식을 고를 때 할 일에 표시해요.', options: ['뒷면 표시 보기', '당류 줄 찾기', '같은 양으로 견주기'] },
            { type: 'short', prompt: '이번 주에 간식을 고를 때 해 볼 일 하나를 써요.' },
          ],
          easy: { note: '간식을 살 때는 포장을 돌려 뒷면을 봐요.', items: [{ type: 'draw', prompt: '포장 뒷면을 보는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.plan-write', {
        title: '나의 간식 실천 계획', method: '나의 간식 실천 계획', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장을 쓰고 기준 2개를 점검한다.', base: '"간식을 살 때 나는 ___" 두 문장을 쓰고 기준 3개를 점검한다.', challenge: '친구에게 권할 문장까지 쓰고 한 군데 고쳐 쓴 뒤 \'표시\' 낱말이 들어갔는지 본다.' },
        wrap: {
          teacher: '"간식을 살 때 나는 무엇을 할지 두 문장으로 써 볼까요? 지킬 수 있을 만큼 작게 써요." 기준표의 \'구체적\'은 언제·무엇을이 들어갔는지, \'지킬 수 있음\'은 이번 주에 할 수 있는지라고 짚는다. "과자를 절대 안 먹겠다"라고 쓰는 학생에게 "지킬 수 있을까요? 먹을 때 표시를 견주어 고르는 것처럼 할 수 있는 계획이 더 오래가요"라고 말해 준다. 내 몸무게나 먹는 양은 쓰지 않는다고 미리 말한다.',
          exitTicket: [
            RUBX('"간식을 살 때 나는 ___" 실천 계획을 두 문장으로 써요.', { topic: '간식을 살 때 내가 할 일을 두 문장으로 써요(몸무게·먹는 양은 쓰지 않아요).', title: '나의 간식 실천 계획', starter: '간식을 살 때 나는 ___. 그리고 ___.', crit: ['언제·무엇을 할지 구체적으로 썼다', '이번 주에 지킬 수 있는 일이다', '표시를 읽는 일이 들어 있다'], must: ['표시'], chars: [20, 140] }),
            { type: 'choice', prompt: '지킬 수 있는 간식 계획은 어느 것인가요?', options: ['과자를 평생 안 먹는다', '살 때 당류 표시를 견준다', '아무거나 빨리 산다'], answer: 1, difficulty: 0.15, explain: '작고 구체적인 계획이 오래 지켜져요.' },
          ],
        },
        worksheet: {
          title: '나의 간식 실천 계획',
          items: [
            { type: 'short', prompt: '간식을 살 때 내가 할 일을 한 문장으로 써요.' },
            { type: 'check', prompt: '내 계획을 점검해요.', options: ['구체적이다', '지킬 수 있다', '표시 읽기가 들어 있다'] },
          ],
        },
        notes: '학생 글에 몸무게·먹는 양·집 형편을 쓰지 않게 한다. 글은 교사만 확인한다.',
      }),
    );
  }

  // ======== 6학년 · 일주일 식사 기록으로 식습관 고치기 (학교급식법 제13조·식생활교육지원법 제26조, 보건교육 초 건강한 식생활) ========
  {
    const X = mk('week-record', 6);
    const COUNT = [['곡류', 12], ['고기·콩류', 9], ['채소·과일', 3], ['우유', 6], ['유지·당류', 10]];
    M.push(
      X('intro.record-read', {
        title: '가상 친구의 식사 기록', method: '가상 친구의 식사 기록', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 하루 기록(음식 4개)을 식품군 칸에 나누는 모습을 보인다.', base: '사흘 기록 카드를 칸에 나누고 늘 비는 칸을 찾는다.', challenge: '비는 칸을 찾은 뒤 왜 자주 빠졌을지 추측해 말한다.' },
        intro: {
          teacher: '"가상 친구 다온이의 사흘 식사 기록이에요. 음식을 식품군 칸에 나누면 무엇이 보일까요?" 시연 단추로 밥·라면·빵은 곡류, 달걀·햄은 고기 칸, 우유는 우유 칸으로 가는 모습을 보인다. "채소·과일 칸이 비었네요. 왜 그랬을까요?" "한 번 골고루 먹으면 일주일 내내 괜찮아요"라는 말에는 "몸은 날마다 여러 가지가 필요해요. 기록을 보면 자주 빠지는 칸이 보여요"라고 말해 준다. 다온이는 지어낸 인물이고, 우리 반 친구의 식사는 묻지 않는다.',
          student: '가상 친구 다온이의 기록에서 자주 빈 식품군 칸을 찾아 짝에게 말해 보아요.',
          demo: { tool: 'kitchen', options: { cards: ['밥', '라면', '빵', '달걀', '우유', '햄'] }, sequence: [{ sort: { 곡류: ['밥', '라면', '빵'], 고기: ['달걀', '햄'], 우유: ['우유'] } }] },
          art: art('a paper notebook open on a desk showing three paper days of meals, with a paper food tray beside it whose vegetable section is empty', '어느 칸이 비었을까?', 'carrot', 'mint'),
        },
        notes: '식사 기록은 지어낸 것이다. 학생 자신의 식사 기록은 집에서 원하면 혼자 해 보게 하고, 반에서 발표시키거나 견주지 않는다.',
      }),
      X('intro.habit-graph', {
        title: '식품군 횟수 막대그래프', method: '식품군 횟수 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 셋(곡류·채소·과일·우유)을 짚으며 견준다.', base: '막대 다섯을 읽고 가장 적은 식품군을 찾는다.', challenge: '그래프로는 알 수 없는 점(양·맛·까닭)을 말한다.' },
        intro: {
          teacher: '"가상 친구 다온이의 일주일 기록을 식품군별 횟수로 세어 막대그래프로 나타냈어요. 가장 낮은 막대는 무엇일까요?" 시연 단추로 \'채소·과일\'을 고르는 모습을 보인다. "막대가 높으면 무조건 좋아요"라는 말에는 "막대는 몇 번 먹었는지만 알려 줘요. 어느 칸이 비어 가는지 보는 데 써요"라고 말해 준다. 수는 가상 자료라고 밝힌다.',
          student: '그래프에서 가장 낮은 막대를 찾고, 이 그래프로 알 수 없는 것을 하나 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '다온이의 일주일 식품군 횟수(가상)', unit: '번', xLabel: '식품군', yLabel: '횟수', data: COUNT, scale: 2, question: '가장 적은 식품군은?', choices: COUNT.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: art('a paper bar chart with five paper bars of different heights, the vegetable bar much shorter, and a paper magnifying glass over it', '가장 낮은 막대는?', 'leaf', 'mint'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.cause-talk', {
        title: '채소가 적은 원인과 결과', method: '모둠: 원인과 결과', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 둘(원인·결과)에 카드를 나눈다.', base: '가지 넷(아침이 바쁨·맛이 낯섦·몸에 생길 일·하루에 생길 일)에 카드를 나눈다.', challenge: '원인 가지마다 해결 카드를 짝지어 잇는다.' },
        activity: {
          title: '"채소가 적음" 생각 그물', tool: 'mindmap',
          teacher: '"다온이는 왜 채소를 적게 먹었을까요? 그러면 어떤 일이 생길까요?" 모둠이 카드를 하나씩 읽고 가지에 붙이게 한다. "채소를 싫어하는 건 나쁜 거예요"라는 학생에게 "싫어하는 마음은 누구나 있어요. 까닭을 알면 바꿀 방법도 찾을 수 있어요"라고 말해 준다. 셋째 문항에서는 원인마다 해결책을 잇고 "누가, 언제 할 수 있을까?"를 묻는다.',
          task: '가운데 \'채소가 적음\'에서 원인·결과 가지에 카드를 붙이고, 원인마다 해결책을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('원인과 결과 가지에 카드를 붙여요.', { topic: '채소가 적음', slots: ['원인', '결과'], groups: { 원인: ['아침이 바빠요', '맛이 낯설어요', '간식으로 배불러요'], 결과: ['변비가 생기기 쉬워요', '힘이 없을 수 있어요'] }, easy: 2, extra: { 원인: ['채소가 눈에 안 띄어요'] }, traps: ['키가 금방 커요'] }, 0.2),
            SORT('가지 네 개에 카드를 나누어 붙여요.', { topic: '채소가 적음', slots: ['아침이 바쁨', '맛이 낯섦', '몸에 생길 일', '하루에 생길 일'], easySlots: ['아침이 바쁨', '몸에 생길 일'], easy: 1,
              groups: { '아침이 바쁨': ['늦게 일어나요', '빵만 들고 나가요'], '맛이 낯섦': ['처음 보는 나물', '쓴맛이 싫어요'], '몸에 생길 일': ['변비가 생기기 쉬워요'], '하루에 생길 일': ['오전에 힘이 없어요'] } }, 0.25),
            MATCH('원인 가지마다 해결 카드를 이어요.', { topic: '채소가 적음', pairs: [['아침이 바쁨', '전날 과일 챙겨 두기'], ['맛이 낯섦', '좋아하는 반찬과 섞기'], ['간식으로 배부름', '간식 양을 덜어 두기']], easy: 2, extra: ['채소를 억지로 먹기'] }, 0.3, { conclude: '까닭을 알면 바꿀 방법이 보여요. 원인마다 작은 해결책을 붙여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인과 해결책을 이어 써요.', columns: ['원인', '해결책'], cells: [['아침이 바쁨', ''], ['맛이 낯섦', '']], answer: '전날 과일 챙겨 두기, 좋아하는 반찬과 섞기' }] },
        notes: '\'변비\'·\'힘이 없음\'은 건강 정보이므로 사람 확인 목록에 있다. 학생 자신의 배변·식사 습관은 묻지 않는다.',
      }),
      X('activity.fix-menu', {
        title: '고친 하루 식단 짜기', method: '고친 하루 식단 짜기', tool: 'kitchen', minutes: 14,
        levels: { easy: '끼마다 빠진 식품군 이름이 문항에 보이고, 담을 음식 카드가 적다(한 끼씩 고치기).', base: '세 끼를 하나씩 고쳐 빠진 식품군을 채울 음식만 담는다.', challenge: '카드가 많아지고, 넷째 문항에서 싱겁게 먹는 방법 카드를 더 고른다.' },
        activity: {
          title: '다온이의 하루 세 끼 고쳐 담기', tool: 'kitchen',
          teacher: '"다온이의 아침은 빵과 잼뿐이에요. 어떤 식품군을 더하면 좋을까요?" 끼마다 빠진 칸을 먼저 말하고 담게 한다. "과자로 배를 채우면 돼요"라는 학생에게 "과자도 먹을 수 있어요. 지금은 빠진 칸을 채우는 연습이에요. 어느 칸이 비었나요?"라고 묻는다. 넷째 문항에서 국물·소스를 덜 쓰는 방법을 고르며 \'싱겁게 먹기\'를 짚는다.',
          task: '가상 친구 다온이의 세 끼에서 빠진 식품군을 채울 음식만 골라 담아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            PICK('다온이의 아침(빵·잼)에 빠진 칸을 채울 음식만 담아요.', { basket: '고친 아침', good: ['우유', '달걀', '사과'], bad: ['초코과자', '탄산음료'], easy: 2, easyBad: 1, moreGood: ['토마토'], moreBad: ['사탕'] }, 0.2),
            PICK('다온이의 점심(라면·김치)에 빠진 칸을 채울 음식만 담아요.', { basket: '고친 점심', good: ['두부', '시금치', '밥'], bad: ['감자칩', '라면 한 개 더'], easy: 2, easyBad: 1, moreGood: ['치즈'], moreBad: ['젤리'] }, 0.25),
            PICK('다온이의 저녁(밥·햄)에 빠진 칸을 채울 음식만 담아요.', { basket: '고친 저녁', good: ['생선', '나물', '귤'], bad: ['햄 한 접시 더', '콜라'], easy: 2, easyBad: 1, moreGood: ['요구르트'], moreBad: ['과자'] }, 0.25),
            PICK('고친 식단을 싱겁게 먹는 방법 카드만 담아요.', { basket: '싱겁게 먹기', good: ['국물은 조금만', '소스는 따로 찍기'], bad: ['간장 더 붓기'], easy: 1, easyBad: 1, moreGood: ['간 보고 먹기'], moreBad: ['소금 더 뿌리기'] }, 0.3, { conclude: '끼마다 빈 식품군 칸을 채우고, 국물·소스는 덜어 싱겁게 먹어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다온이의 끼니에 더할 음식을 하나씩 써요.', columns: ['아침', '점심', '저녁'], cells: [['', '', '']] }] },
        notes: '식단은 지어낸 인물의 것이다. 학생의 실제 식단이나 집 형편을 묻지 않는다. 담지 않는 카드는 \'지금 빈 칸을 채우지 못하는 음식\'일 뿐이라고 말해 준다.',
      }),
      X('activity.meal-choice', {
        title: '학원 끝난 저녁 메뉴 갈림길', method: '저녁 메뉴 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(어른께 묻기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(편의점에서 고르기)을 지나 근거를 고른다.', challenge: '갈림 3번(자기 전)까지 지나 근거를 모두 고르고 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 학원 끝, 배가 고파요', tool: 'dilemma',
          teacher: '"학원이 끝났는데 배가 많이 고파요. 가상 친구 이안이는 어떻게 하면 좋을까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "컵라면은 나쁜 음식이니까 안 돼요"라는 학생에게 "컵라면도 먹을 수 있어요. 무엇을 더하고 무엇을 덜면 몸을 챙길 수 있을까요?"라고 되묻는다. 집 형편이나 보호자 일을 탓하는 말은 하지 않는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '학원 끝, 배가 고파요',
            steps: [
              { text: '저녁 8시, 학원이 끝났어요. 배가 많이 고프고 보호자는 아직 일하는 중이에요.', motif: 'moon',
                good: ['ask', '보호자께 연락해 저녁을 어떻게 할지 묻는다', '"편의점에서 먹고 와도 돼, 무엇을 골랐는지 알려 줘"라고 해요.', [['이안', '마음이 놓여요', 1], ['보호자', '어디 있는지 알아요', 1]]],
                bad: ['skip', '말없이 과자 두 봉지로 저녁을 때운다', '금방 다시 배가 고파요.', '한쪽으로 치우친 끼니는 금방 배고프게 해요.', [['이안', '밤에 또 배고파요', -1]]] },
              { text: '편의점에 왔어요. 컵라면을 먹기로 했는데 무엇을 함께 고를까요?', motif: 'house',
                good: ['add', '삶은 달걀과 흰 우유를 더하고 국물은 조금 남긴다', '배도 든든하고 빠진 칸도 채웠어요.', [['이안', '든든해요', 1]]],
                bad: ['soda', '단 음료 두 개를 더해 국물까지 다 마신다', '목이 마르고 속이 더부룩해요.', '단 음료와 국물을 많이 먹으면 당류·나트륨을 많이 먹게 돼요.', [['이안', '목이 말라요', -1]]] },
              { text: '집에 와서 숙제를 마쳤어요. 잠자기 전이에요.', motif: 'moon',
                good: ['brush', '물을 마시고 이를 닦고 잔다', '아침에 개운하게 일어났어요.', [['이안', '푹 잤어요', 1]]],
                bad: ['snack', '자기 전에 단 간식을 또 먹는다', '이를 안 닦은 채 잠들었어요.', '자기 전 단 간식은 이를 상하게 하기 쉬워요.', [['이안', '이가 걱정돼요', -1]]] },
            ],
            ending: '어른과 의논하고, 빠진 칸을 채우고, 자기 전엔 이를 닦아 몸을 챙겼어요.',
            reasons: [{ id: 'fill', text: '빠진 식품군을 더하면 끼니가 든든하다' }, { id: 'tell', text: '어른과 의논하면 알맞게 고를 수 있다' }, { id: 'bad', text: '컵라면은 나쁜 음식이라 굶는다', why: '음식에 착하고 나쁜 것은 없어요. 굶기보다 더하고 덜어요.' }, { id: 'any', text: '배만 부르면 무엇이든 같다', why: '무엇을 먹었는지에 따라 몸이 다르게 느껴요.' }],
            good: ['fill', 'tell'],
            talk: '모둠에서 "편의점에서 끼니를 고를 때 더할 것과 덜 것"을 하나씩 말해요.',
            conclude: '어떤 음식이든 빠진 칸을 더하고, 국물·단 음료는 덜어 먹으면 몸을 챙길 수 있어요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '편의점에서 끼니를 고를 때 더하면 좋을 음식 하나를 써요.' }] },
        notes: '이안은 지어낸 인물이다. 혼자 저녁을 먹는 학생이 있을 수 있으니 \'혼자 먹는 것\'을 문제로 말하지 않는다.',
      }),
      X('activity.menu-budget', {
        title: '일주일 반찬 재료 장보기', method: '일주일 반찬 예산', tool: 'economy', minutes: 14,
        levels: { easy: '사흘 반찬 재료를 작은 예산 안에서 식품군마다 하나씩 고른다.', base: '이레 반찬 재료를 예산 안에서 다섯 식품군이 고르게 들어가게 고른다.', challenge: '남는 예산으로 과일을 하나 더 넣는다.' },
        activity: {
          title: '가상 가족의 반찬 재료 고르기', tool: 'economy',
          teacher: '"가상 가족의 이번 주 반찬 재료 예산이에요. 오늘 장보기는 반찬 재료를 사는 거예요." 고를 때마다 어느 식품군인지 말하게 한다. "고기만 많이 사면 돼요"라는 학생에게 "고기 칸은 채워졌네요. 채소 칸은요?"라고 묻는다. 값은 모두 지은 것이고, 학생 집의 장보기 비용은 묻지 않는다.',
          task: '예산 막대를 넘지 않게, 식품군이 고르게 들어가도록 반찬 재료를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '1만 원 안에서 다섯 식품군 재료를 하나씩 골라요(과자·음료는 반찬 재료가 아니에요).', toolOptions: { mode: 'budget', budget: 10000, items: [{ id: 'rice', text: '쌀(곡류)', price: 3000 }, { id: 'tofu', text: '두부(콩류)', price: 1500 }, { id: 'spin', text: '시금치(채소)', price: 1500 }, { id: 'milk', text: '우유', price: 2000 }, { id: 'oil', text: '들기름(유지)', price: 2000 }, { id: 'chip', text: '과자', price: 2000 }, { id: 'soda', text: '음료수', price: 1500 }], ask: '이레 반찬 재료(가상 값)' }, target: { budget: { must: ['rice', 'tofu', 'spin', 'milk', 'oil'], not: ['chip', 'soda'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '6천 원 안에서 곡류·콩류·채소 재료를 하나씩 골라요.', toolOptions: { budget: 6000, items: [{ id: 'rice', text: '쌀(곡류)', price: 3000 }, { id: 'tofu', text: '두부(콩류)', price: 1500 }, { id: 'spin', text: '시금치(채소)', price: 1500 }, { id: 'chip', text: '과자', price: 2000 }] }, target: { budget: { must: ['rice', 'tofu', 'spin'], not: ['chip'] } } },
                challenge: { prompt: '1만 2천 원 안에서 다섯 식품군을 하나씩 고르고, 남는 돈으로 과일도 더해요.', toolOptions: { budget: 12000, items: [{ id: 'rice', text: '쌀(곡류)', price: 3000 }, { id: 'tofu', text: '두부(콩류)', price: 1500 }, { id: 'spin', text: '시금치(채소)', price: 1500 }, { id: 'milk', text: '우유', price: 2000 }, { id: 'oil', text: '들기름(유지)', price: 2000 }, { id: 'apple', text: '사과(과일)', price: 2000 }, { id: 'chip', text: '과자', price: 2000 }] }, target: { budget: { must: ['rice', 'tofu', 'spin', 'milk', 'oil', 'apple'], not: ['chip'] } } },
              } },
            { prompt: '8천 원 안에서 채소 칸이 빈 장바구니(쌀·달걀)에 채소와 우유를 하나씩 더해요.', toolOptions: { mode: 'budget', budget: 8000, items: [{ id: 'rice2', text: '쌀(곡류)', price: 3000 }, { id: 'egg', text: '달걀', price: 2000 }, { id: 'carrot', text: '당근(채소)', price: 1000 }, { id: 'yog', text: '요구르트(우유)', price: 1500 }, { id: 'ham', text: '햄', price: 2500 }], ask: '빈 칸 채우기(가상 값)' }, target: { budget: { must: ['rice2', 'egg', 'carrot', 'yog'], not: ['ham'] } }, difficulty: 0.3, conclude: '같은 예산이라도 식품군을 고르게 담으면 일주일 반찬이 한쪽으로 치우치지 않아요.' },
            { prompt: '모둠에서 고른 재료로 만들 반찬 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고른 재료가 어느 식품군인지 써요.', columns: ['재료', '식품군'], cells: [['시금치', ''], ['두부', '']], answer: '채소·과일류, 고기·생선·달걀·콩류' }] },
        notes: '재료 값은 수업용으로 지은 값이다. 학생 집의 장보기·형편을 묻지 않는다.',
      }),
      X('wrap.self-list', {
        title: '고칠 식습관 한 가지 쓰기', method: '나의 식습관 점검표', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장을 쓰고 기준 2개를 점검한다.', base: '고칠 한 가지와 방법을 두 문장으로 쓰고 기준 3개(구체적·지킬 수 있음·까닭)를 점검한다.', challenge: '가족과 함께할 방법을 더하고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 다온이의 식단을 고쳐 봤어요. 이번에는 내가 해 볼 작은 고침 하나를 써 볼까요?" 몸무게·먹는 양·집 사정은 쓰지 않고 \'하고 싶은 행동\' 하나만 쓰게 한다. "살 빼려고 밥을 안 먹겠다"라고 쓰는 학생에게 "끼니를 거르는 것은 몸을 챙기는 방법이 아니에요. 빠진 칸을 더하는 계획으로 바꿔 볼까요?"라고 말해 준다. 글은 교사만 본다.',
          exitTicket: [
            RUBX('내가 고칠 식습관 한 가지와 방법을 두 문장으로 써요.', { topic: '고칠 식습관 한 가지와 방법을 두 문장으로 써요(몸무게·먹는 양은 쓰지 않아요).', title: '나의 식습관 고치기', starter: '나는 ___을 고치겠다. ___ 때 ___ 하겠다. 왜냐하면 ___.', crit: ['무엇을 언제 할지 구체적으로 썼다', '이번 주에 지킬 수 있는 일이다', '고치는 까닭을 썼다'], must: [['왜냐하면', '때문에']], chars: [20, 150] }),
            { type: 'choice', prompt: '몸을 챙기는 식습관 고침은 어느 것인가요?', options: ['저녁을 거른다', '아침에 과일 하나를 더한다', '한 가지만 먹는다'], answer: 1, difficulty: 0.15, explain: '거르기보다 빠진 칸을 더하는 것이 몸을 챙겨요.' },
          ],
        },
        worksheet: {
          title: '나의 식습관 고치기',
          items: [
            { type: 'short', prompt: '이번 주에 해 볼 식습관 고침 하나를 써요.' },
            { type: 'check', prompt: '내 계획을 점검해요.', options: ['구체적이다', '지킬 수 있다', '까닭이 있다'] },
          ],
        },
        notes: '다이어트·끼니 거르기를 계획으로 쓰지 않게 한다. 학생의 식습관을 채점하지 않고 기준표는 스스로 점검한다.',
      }),
      X('wrap.share', {
        title: '짝에게 고친 식단 소개', method: '짝에게 고친 식단 소개', tool: 'wordcards', minutes: 6,
        levels: { easy: '빈칸 하나(고친 점)를 카드로 채운다.', base: '빈칸 둘(고친 점·좋아진 점)을 채운다.', challenge: '빈칸 셋(칭찬 한마디까지)을 채워 짝에게 소개한다.' },
        wrap: {
          teacher: '"다온이의 고친 식단을 짝에게 소개해 볼까요? 카드로 문장을 채운 뒤 소리 내어 읽어요." 셋째 빈칸은 짝 식단에 칭찬 한마디를 하는 자리라고 알린다. "짝 식단은 별로예요"처럼 말하는 학생에게 "고친 노력을 찾아 말해 주면 짝도 계속 해 보고 싶어져요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '내가 고친 점은 아침에 ___을 더한 것이다.' }, { id: 'f2', label: '좋아진 점은 빈 ___ 칸이 채워진 것이다.' }], cards: ['우유', '식품군', '탄산음료', '간식'] }, prompt: '고친 식단 소개 문장의 빈칸을 카드로 채워요.', target: { fill: { f1: '우유', f2: '식품군' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '고친 식단 소개 문장의 빈칸을 카드로 채워요(빈칸 하나).', toolOptions: { slots: [{ id: 'f1', label: '내가 고친 점은 아침에 ___을 더한 것이다.' }], cards: ['우유', '탄산음료'] }, target: { fill: { f1: '우유' } } },
                challenge: { prompt: '고친 식단 소개 문장의 빈칸을 카드로 채워요(빈칸 셋).', toolOptions: { slots: [{ id: 'f1', label: '내가 고친 점은 아침에 ___을 더한 것이다.' }, { id: 'f2', label: '좋아진 점은 빈 ___ 칸이 채워진 것이다.' }, { id: 'f3', label: '짝에게: 국물을 덜어 먹은 게 ___.' }], cards: ['우유', '식품군', '멋져', '탄산음료', '별로야'] }, target: { fill: { f1: '우유', f2: '식품군', f3: '멋져' } } },
              } },
            { type: 'short', prompt: '짝의 고친 식단에서 칭찬할 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '고친 식단 소개',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '내가 고친 점은 ___, 좋아진 점은 ___.', answer: '(예) 우유를 더함, 빈 식품군이 채워짐' },
            { type: 'short', prompt: '짝에게 해 줄 칭찬 한마디를 써요.' },
          ],
        },
        notes: '소개는 가상 친구 다온이의 고친 식단으로 한다. 학생 자신의 식단을 발표시키지 않는다. wordcards 는 fill(공통 카드 판)만 써서 영어 소리가 나지 않는다.',
      }),
    );
  }

  // ======== 6학년 · 남기지 않고 안전하게 먹기 (학교급식법 제13조·식생활교육지원법 제26조, 보건교육 초 건강한 식생활, 환경 초 자원 절약) ========
  {
    const X = mk('safe-nowaste', 6);
    const LEFT = [['월', 12], ['화', 8], ['수', 20], ['목', 10], ['금', 6]];
    const WASH = ['손바닥 비비기', '손등 비비기', '손가락 사이', '엄지 돌려 닦기', '손톱 밑 닦기', '손목 닦기'];
    const GERM = [
      { id: 'g1', text: '놀이터에서 놀아요', motif: 'tree' }, { id: 'g2', text: '손을 안 씻고 간식', motif: 'fruit' },
      { id: 'g3', text: '배가 아파요', motif: 'rain' }, { id: 'g4', text: '보건실에 가요', motif: 'house' },
    ];
    M.push(
      X('intro.leftover-graph', {
        title: '요일별 잔반 그래프 읽기', method: '급식 잔반 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 가장 많은 날 막대 하나를 짚는다.', base: '많은 날과 적은 날을 견주어 읽는다.', challenge: '많이 남은 날의 메뉴를 추측하고 잔반을 줄일 방법을 말한다.' },
        intro: {
          teacher: '"이 그래프는 어느 학교 급식 잔반을 꾸민 가상 자료예요(실제 급식 자료가 아니에요). 가장 많이 남은 날은 언제일까요?" 시연 단추로 \'수\'를 고르는 모습을 보인다. "남은 음식은 버리면 그만이에요"라는 말에는 "버린 음식도 기르고 옮기고 요리하는 데 힘이 들었어요. 버리면 처리하는 데 또 힘이 들어요"라고 말해 준다. 잔반을 많이 남긴 친구를 탓하지 않고 \'왜 남았을까\'를 추측한다고 밝힌다.',
          student: '가상 그래프에서 잔반이 많은 날과 적은 날을 찾고, 많은 날 메뉴는 무엇이었을지 짝과 추측해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '요일별 급식 잔반(가상 자료)', unit: 'kg', xLabel: '요일', yLabel: '잔반', data: LEFT, scale: 2, question: '가장 많이 남은 날은?', choices: LEFT.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: art('a paper bar chart of five weekdays above a paper school lunch tray, one tall bar in the middle with a small paper question mark', '왜 수요일에 많이 남았을까?', 'cloud', 'sky'),
        },
        notes: '그래프는 실제 급식 자료가 아닌 가상 자료다. 우리 학교 잔반 자료를 쓸 때는 영양 선생님께 받은 공개 자료만 쓴다.',
      }),
      X('intro.germ-story', {
        title: '손 안 씻고 먹은 날', method: '손 안 씻고 먹은 날', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2장(놀기 → 배 아픔)을 짚으며 무엇이 빠졌는지 묻는다.', base: '장면 3장을 차례로 놓고 바꿀 장면을 고른다.', challenge: '장면 4장(보건실까지)을 놓고 보건실에서 할 말을 고른다.' },
        intro: {
          teacher: '"가상 친구 솔이는 놀이터에서 놀고 손을 안 씻은 채 간식을 먹었어요. 그다음엔 어떻게 되었을까요?" 시연 단추로 장면이 차례대로 놓이는 모습을 보인다. "어느 장면을 바꾸면 배가 안 아팠을까요?" "손에 아무것도 안 묻었으니 괜찮아요"라는 말에는 "병균은 눈에 보이지 않아요. 겉보기에 깨끗해도 씻어야 해요"라고 말해 준다. 도전에서는 보건실에서 "언제부터, 무엇을 먹고 어디가 아픈지" 말하는 연습을 한다.',
          student: '솔이의 장면 가운데 하나를 바꾼다면 어느 장면을 어떻게 바꿀지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 3, cards: [GERM[2], GERM[0], GERM[1]], title: '솔이의 하루(가상)' }, sequence: [{ order: ['g1', 'g2', 'g3'] }] },
          art: art('a paper child on a paper playground slide, then holding a snack with tiny paper germ dots on the hands, then holding the tummy', '어느 장면을 바꿀까?', 'rain', 'lavender'),
        },
        notes: '배앓이를 겪은 학생을 예로 들지 않는다. 솔이는 지어낸 인물이다.',
      }),
      X('activity.wash-steps', {
        title: '손 씻기 여섯 단계 연습', method: '손 씻기 여섯 단계', tool: 'timer', minutes: 13,
        levels: { easy: '단계 카드 3장(손바닥·손등·손가락 사이)을 차례로 놓는다.', base: '단계 카드 6장을 차례로 놓고, 연습 타이머(우리 반 연습값)를 맞춰 따라 한다.', challenge: '6장을 놓은 뒤 빠뜨리기 쉬운 단계를 짝과 찾아 점검 칸에 표시한다.' },
        activity: {
          title: '단계 카드와 손 씻기 연습 타이머', tool: 'timer',
          teacher: '"손 씻기 단계 카드를 차례대로 놓아 볼까요? 다 놓으면 세면대에서 따라 해 봐요." 카드마다 손 모양을 몸짓으로 보이게 한다. "물만 묻히면 다 씻은 거예요"라는 학생에게 "손가락 사이와 손톱 밑은 물만 묻혀서 닦일까요?"라고 되묻는다. 타이머 값은 우리 반 연습값이고, 공식 권장 시간은 최신 안내로 알려 준다. 셋째 문항에서 엄지·손톱 밑처럼 자주 빠뜨리는 곳을 짝과 찾는다.',
          task: '손 씻기 단계 카드를 차례대로 놓고, 연습 타이머에 맞춰 따라 한 뒤 빠뜨린 곳을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '손 씻기 단계 카드를 차례대로 놓아요.', toolOptions: { title: '손 씻기 차례', cards: mix(WASH) }, target: { order: WASH }, difficulty: 0.25,
              levels: { easy: { prompt: '손 씻기 첫 세 단계 카드를 차례대로 놓아요.', toolOptions: { cards: mix(WASH.slice(0, 3)) }, target: { order: WASH.slice(0, 3) } } } },
            { prompt: '연습 타이머를 씻기 30초·쉬기 10초·2번으로 맞춰요(우리 반 연습값).', toolOptions: { title: '손 씻기 연습(우리 반 연습값)', plan: { work: 10, rest: 10, rounds: 1 }, labels: ['씻기', '쉬기'], workStep: 10 }, target: { plan: { work: 30, rest: 10, rounds: 2 } }, difficulty: 0.2 },
            { prompt: '짝과 씻어 보고, 빠뜨리기 쉬운 단계를 찾아 스스로 표시해요.', toolOptions: { title: '빠뜨리기 쉬운 곳 점검' }, target: { selfCheck: ['엄지를 돌려 닦았다', '손톱 밑을 닦았다', '손목까지 닦았다'] }, difficulty: 0.1, conclude: '먹기 전·조리 전에는 손바닥부터 손목까지 차례대로 꼼꼼히 씻어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '손 씻기 단계를 차례대로 써요.', columns: ['1', '2', '3', '4', '5', '6'], cells: [['', '', '', '', '', '']], answer: '손바닥, 손등, 손가락 사이, 엄지, 손톱 밑, 손목' }] },
        notes: '손 씻기 단계와 시간은 사람 확인 목록에 있다(질병관리청 최신 안내로 확인). 타이머 30초는 우리 반 연습값이다.',
      }),
      X('activity.fridge-sort', {
        title: '냉장고 정리하기', method: '냉장고 정리', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 3장(우유·채소·남은 반찬)을 알맞은 칸에 넣는다.', base: '카드 5장(고기·과일 더함)을 알맞은 칸에 넣고, 먼저 먹을 것을 앞에 둔다.', challenge: '먹을 날짜가 붙은 카드로 먼저 먹을 차례를 정한다.' },
        activity: {
          title: '냉장고 칸 나누기와 먼저 먹을 차례', tool: 'kitchen',
          teacher: '"장 봐 온 음식을 냉장고 어디에 넣을까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "남은 반찬은 뚜껑 없이 넣어도 돼요"라는 학생에게 "뚜껑이 없으면 다른 음식과 섞이고 마를 수 있어요"라고 말해 준다. "겉보기에 멀쩡하면 오래 둔 것도 괜찮아요"라는 말에는 "상한 음식은 겉으로 티가 안 날 때도 있어요. 오래된 것부터 먼저 먹고, 의심되면 어른께 물어요"라고 되묻는다.',
          task: '음식 카드를 알맞은 냉장고 칸에 넣고, 먼저 먹을 것부터 차례를 정해요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SORT('음식 카드를 알맞은 냉장고 칸에 넣어요.', { slots: [{ id: 'cold', label: '냉장 칸' }, { id: 'freeze', label: '냉동 칸' }, { id: 'veg', label: '채소 칸' }].map((s) => s.label),
              groups: { '냉장 칸': ['우유', '뚜껑 덮은 남은 반찬'], '냉동 칸': ['오늘 안 먹을 고기'], '채소 칸': ['시금치', '사과'] }, easySlots: ['냉장 칸', '채소 칸'], easy: 1,
              extra: { '냉동 칸': ['얼려 둘 생선'] }, traps: ['뚜껑 없이 둔 국'] }, 0.2),
            ORDER('먹을 날짜를 보고 먼저 먹을 것부터 차례대로 놓아요.', ['오늘까지 먹을 반찬', '내일까지 우유', '사흘 뒤까지 두부', '일주일 뒤까지 달걀'], { easy: [0, 1, 2], trap: '날짜 지난 요구르트', mode: 'order' }, 0.25),
            { prompt: '모둠에서 오래 둔 음식이 의심될 때 할 일을 말해요.', free: true, talk: true, conclude: '음식은 알맞은 칸에 뚜껑 덮어 두고, 먼저 먹을 것을 앞에 두고, 의심되면 어른께 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '음식을 넣을 칸을 써요.', columns: ['음식', '넣을 칸'], cells: [['우유', ''], ['오늘 안 먹을 고기', '']], answer: '냉장 칸, 냉동 칸' }] },
        notes: '보관 원칙은 사람 확인 목록에 있다. 냉장고 칸 이름은 집마다 다르다고 말해 준다.',
      }),
      X('activity.waste-cycle', {
        title: '음식이 버려지기까지', method: '음식이 버려지면', tool: 'lifecycle', minutes: 13,
        levels: { easy: '단계 카드 4장(기르기 → 요리 → 남김 → 버림)을 차례로 놓는다.', base: '단계 카드 5장(처리까지)을 차례로 놓는다.', challenge: '단계마다 줄이는 행동 카드를 짝지어 잇는다.' },
        activity: {
          title: '버려지는 음식의 여정', tool: 'lifecycle',
          teacher: '"급식 한 그릇은 어디서부터 왔을까요? 남기면 어디로 갈까요?" 카드를 놓으며 단계마다 누가 힘을 쓰는지 말하게 한다. "남은 음식은 버리면 사라져요"라는 학생에게 "버린 음식은 모으고 옮기고 처리하는 데 또 힘과 돈이 들어요"라고 말해 준다. 둘째 문항에서는 \'어느 단계에서 줄일 수 있을까\'를 짚는다.',
          task: '음식이 버려지기까지의 단계를 차례로 놓고, 단계마다 줄이는 행동을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('음식이 버려지기까지의 단계를 차례대로 놓아요.', ['재료 기르기', '요리하기', '먹고 남김', '버림', '모아서 처리'], { easy: [0, 1, 2, 3], trap: '그냥 사라짐', title: '음식의 여정' }, 0.2, { toolOptions: { center: '음식의 여정', cycle: false, slots: 5, cards: mix(['재료 기르기', '요리하기', '먹고 남김', '버림', '모아서 처리']) } }),
            MATCH('단계마다 줄이는 행동 카드를 이어요.', { center: '음식의 여정', pairs: [['요리하기', '먹을 만큼 만들기'], ['먹고 남김', '먹을 만큼 담기'], ['버림', '남은 음식 다시 쓰기']], easy: 2, more: [['재료 기르기', '못생긴 채소도 쓰기']], extra: ['일단 많이 담기'] }, 0.25),
            { prompt: '모둠에서 우리 반이 가장 쉽게 줄일 단계 하나를 정해 말해요.', free: true, talk: true, conclude: '음식이 버려지면 여러 사람의 힘이 함께 버려져요. 담는 단계에서부터 줄여요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '음식물 쓰레기를 줄이려고 내가 할 수 있는 일 하나를 써요.' }] },
        notes: '처리 과정 이름은 사람 확인 목록에 있다.',
      }),
      X('activity.portion', {
        title: '먹을 만큼 담기 계획', method: '먹을 만큼 담기 계획', tool: 'economy', minutes: 14,
        levels: { easy: '배고픔 칸 2개(조금·많이)에 담을 양 카드를 잇는다.', base: '칸 4개(조금·보통·많이·처음 보는 반찬)에 담을 양 카드를 잇는다.', challenge: '더 먹고 싶을 때 규칙 카드를 \'처음 담기\'·\'더 먹고 싶을 때\'로 나눈다.' },
        activity: {
          title: '배고픔에 맞춰 담을 양 정하기', tool: 'economy',
          teacher: '"오늘 배가 조금 고플 때와 많이 고플 때, 담는 양이 같아야 할까요?" 카드를 이을 때마다 까닭을 말하게 한다. 교구는 돈만 세는 판이라, 양을 \'예산\'처럼 정하는 생각을 짝 잇기로 바꾸었다고 알린다. "많이 담고 남기면 돼요"라는 학생에게 "처음엔 조금 담고, 더 먹고 싶으면 다시 받으면 어떨까요?"라고 묻는다. 학생이 얼마나 먹는지 견주거나 평가하지 않는다.',
          task: '배고픔 정도에 맞는 담을 양 카드를 잇고, 더 먹고 싶을 때의 규칙을 나누어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            MATCH('배고픔 정도에 맞는 담을 양 카드를 이어요.', { pairs: [['조금 배고픔', '밥 반 그릇부터'], ['많이 배고픔', '밥 한 그릇 담기'], ['보통', '밥 조금 덜 담기'], ['처음 보는 반찬', '한 젓가락 맛보기']], easy: 2, extra: ['일단 가득 담기'] }, 0.2),
            SORT('규칙 카드를 처음 담을 때와 더 먹고 싶을 때로 나누어요.', { mode: 'sort', slots: ['처음 담을 때', '더 먹고 싶을 때'], groups: { '처음 담을 때': ['먹을 만큼만 담기', '처음 보는 반찬은 조금'], '더 먹고 싶을 때': ['다 먹고 다시 받기', '차례를 지켜 받기'] }, easy: 1, extra: { '더 먹고 싶을 때': ['남길 것 같으면 조금만'] }, traps: ['친구 것 덜어 오기'] }, 0.25),
            { prompt: '모둠에서 우리 반 \'먹을 만큼 담기\' 규칙 하나를 정해 말해요.', free: true, talk: true, conclude: '처음엔 먹을 만큼 담고, 더 먹고 싶으면 다 먹은 뒤 다시 받아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '급식을 먹을 만큼 담는 나의 규칙 하나를 써요.' }] },
        notes: 'economy 교구는 돈(원)만 세어 \'양을 예산처럼\'을 짝 잇기·나누기 판으로 바꾸었다. 먹는 양은 사람마다 다르므로 남과 견주지 않는다.',
      }),
      X('wrap.campaign', {
        title: '잔반 줄이기 포스터', method: '잔반 줄이기 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '조각 3개 이상으로 꾸미고 점검 칸 2개를 표시한다.', base: '조각 5개 이상으로 식판을 만들고 문구를 정해 점검 칸 3개를 표시한다.', challenge: '동생 반에 붙일 쉬운 문구로 고쳐 쓰고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"\'먹을 만큼, 남김없이\'를 알리는 반 포스터를 만들어 볼까요?" 긴 네모로 식판, 동그라미로 밥그릇, 하트로 고마운 마음을 만드는 방법을 칠판에 보인다. "남기면 혼난다고 쓰면 돼요"라는 말에는 "혼내는 말보다 \'먹을 만큼 담아요\'처럼 할 일을 알려 주는 말이 더 힘이 있어요"라고 말해 준다. 문구는 활동지에 쓴다.',
          exitTicket: [
            COLX('잔반 줄이기 포스터를 조각으로 만들고 점검해요.', ['식판이나 그릇 모양을 만들었다', '먹을 만큼 담는 뜻을 담았다', '문구를 정해 활동지에 썼다', '동생도 알아볼 쉬운 말로 고쳤다']),
            { type: 'choice', prompt: '잔반 줄이기 포스터에 알맞은 문구는?', options: ['남기면 혼나요', '먹을 만큼 담아요', '많이 담아요'], answer: 1, difficulty: 0.15, explain: '할 일을 알려 주는 말이 더 잘 지켜져요.' },
          ],
        },
        worksheet: {
          title: '먹을 만큼, 남김없이',
          items: [
            { type: 'draw', prompt: '잔반 줄이기 포스터를 그려요.' },
            { type: 'short', prompt: '포스터 문구를 한 줄로 써요.' },
          ],
        },
      }),
      X('wrap.thanks-write', {
        title: '조리 선생님께 감사 편지', method: '감사 편지 한 줄', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장을 쓰고 기준 2개를 점검한다.', base: '감사 편지 두 문장을 쓰고 기준 3개(구체적 고마움·약속 하나·바른 말)를 점검한다.', challenge: '내가 지킬 약속을 덧붙이고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"급식 한 끼를 위해 조리 선생님은 무엇을 하실까요?" 두세 가지를 듣고 편지를 쓰게 한다. \'구체적 고마움\'은 \'맛있어요\' 대신 무엇이 왜 고마운지 쓰는 것이라고 짚는다. "그냥 감사합니다라고 쓰면 돼요"라는 학생에게 "어떤 날 어떤 음식이 고마웠는지 쓰면 읽는 분이 더 기쁘실 거예요"라고 말해 준다. 이름은 쓰지 않는다.',
          exitTicket: [
            RUBX('조리 선생님께 감사 편지를 두 문장으로 써요.', { topic: '조리 선생님께 고마운 점과 내가 지킬 약속을 두 문장으로 써요(내 이름은 쓰지 않아요).', title: '감사 편지', starter: '조리 선생님, ___해 주셔서 고맙습니다. 저는 ___하겠습니다.', crit: ['무엇이 고마운지 구체적으로 썼다', '내가 지킬 약속을 하나 썼다', '읽는 분을 생각한 바른 말로 썼다'], must: ['약속'], chars: [20, 140] }),
            { type: 'choice', prompt: '급식에 고마움을 나타내는 행동은?', options: ['먹을 만큼 담아 남김없이 먹기', '맛없다고 크게 말하기', '많이 담고 버리기'], answer: 0, difficulty: 0.15, explain: '남김없이 먹는 것도 고마움을 나타내는 방법이에요.' },
          ],
        },
        worksheet: {
          title: '고맙습니다',
          items: [
            { type: 'short', prompt: '조리 선생님께 고마운 점 하나를 써요.' },
            { type: 'short', prompt: '내가 급식 시간에 지킬 약속 하나를 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
