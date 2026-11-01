/* 창체 법정교육 인터넷·스마트폰 과의존 예방 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 digital 초5-6.
 * 근거: 지능정보화 기본법 제54조(초·중·고 학기별 1회 이상 과의존 예방교육), research-mandatory §2 인터넷·스마트폰 과의존/디지털 시민 초
 *       (사용 시간 조절·개인정보 지키기·예절) — sources/changche/research-mandatory.md. 법 이름·조항은 이 주석에만 쓰고 학생 글에는 쓰지 않는다.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing).
 *   그래프 수치는 모두 가상(화면에 '가상'). 장면·인물은 지어낸 것이다(가명: 준호·서연·다온·이솔·한결·나리).
 * 이 영역의 처신(모든 모듈):
 *   - 학생 자신의 사용 시간·게임·앱 이름은 교구 문항(채점·제출)으로 묻지 않는다. 교구는 가상 인물의 기록·이야기로 하고, 내 점검·내 끝 시각은 걷지 않는 활동지에 쓴다.
 *   - 특정 앱·게임·회사 이름을 쓰지 않는다('단체 대화방(단체방)'·'영상'·'게임'처럼 일반 이름만).
 *   - 개인정보 수업은 가상 학교 이름(햇살초)만 쓰고, 연락처·주소 모양의 값은 화면에 쓰지 않는다('주소판'·'이름표'처럼 말로만).
 *   - 도움 받을 곳은 체계도 concepts·계획 글에 있는 것만: 보호자·담임 선생님·상담 선생님(상담실). 전화번호는 쓰지 않는다.
 * 주제 3개(5학년 1 · 6학년 2) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 24개 전부. 추천 조합은 체계도 sequences(학년마다 2차시).
 * 같은 학년군 안전교육 사이버 중독 예방(modules/saf-cyber/e56.js)과 장면·문항을 되풀이하지 않게 바꾼 곳:
 *   - saf-cyber 는 하린이의 '요일별 사용 시간(분)' 막대를 쓴다 → week-graph 는 준호가 '심심해서 꺼낸 횟수(번)'로 세고 그날의 까닭을 고른다.
 *   - saf-cyber 의 '율이 대신 점검표 체크'(해당 칸 표시)와 겹치지 않게 self-check 는 가상 기록의 날 수로 '자주·가끔·안 함'을 가르는 나누기로 했다.
 *   - saf-cyber 의 '비 오는 토요일 대비 블록'과 겹치지 않게 urge-choice 갈림길은 '학원이 쉬는 비 오는 일요일 오후'로 쓰고 결과를 2시간 뒤 장면으로 잇는다.
 *   - saf-cyber 의 빨간 숫자 9 알림(설계 장치)과 달리 chat-pressure 는 단체방 답장 압박·쉬는 시간 존중(관계)에 맞췄다.
 *
 * 계획과 다르게 한 곳(교구 한계 — levels 글은 실제 설정대로 적었다):
 *  - self-check: kitchen 은 '자주·가끔·안 함' 세 칸 표시를 못 한다. 가상 인물 다온의 일주일 기록(날 수)을 보고 습관 카드를 자주·가끔·안 함 칸에 나누고,
 *    바꿀 칸 하나를 고른다. 내 습관은 활동지에 혼자 표시한다(걷지 않음, 점수 없음).
 *  - swap-timer: 몸으로 한 활동과 기분은 판정하지 않는다. 타이머 계획(분)·준비 차례·스스로 점검으로 잰다.
 *  - end-time: 학생 자신의 끝 시각은 채점하지 않는다. 가상 인물 준호의 가족 약속 시각을 맞추고, 내 시각은 활동지에 쓰고 보호자 확인 칸을 둔다.
 *  - blur-collage: 콜라주 판은 사진을 그리지 못한다. 판에 미리 놓인 조각을 사진 속 물건으로 정한다(하얀 긴 네모 = 이름표, 파란 긴 네모 = 학교 표지,
 *    노란 긴 네모 = 주소판, 분홍 하트 = 친구 얼굴, 초록 나뭇잎 = 나무). 정보가 되는 조각 위에 검정 네모 스티커를 같은 자리에 붙여 가린다(보고 따라 만들기 판정).
 *    얼굴은 가리지 않고 '찍힌 친구에게 물어본다'는 말하기 문항으로 다룬다.
 *  - cause-effect: 카드 한 장의 정답 칸은 하나라, 원인 칸(바구니)에 그 결과 카드를 넣는 꼴로 짝을 짓는다. 막는 행동은 따로 나누기 문항으로 했다.
 *  - safe-steps: '빠진 단계 찾기'는 차례 놓기와 따로, 가상 친구의 차례에서 빠진 카드를 고르는 문항으로 했다.
 *  - tell-adult·help-who: 지도는 문항마다 핀 하나라 '두 곳'은 출구 질문 둘(상담실·교실)로 나눴다. help-who 의 첫마디 카드는 고르기 문항으로 했다.
 *  - rule-vote: 학급마다 표가 달라, 수업용 가상 모둠 표로 그림그래프를 그린다. 우리 모둠의 실제 표는 활동지 표에 적는다.
 *  - rule-poster: 콜라주는 글자를 붙이지 못한다. 약속 글은 활동지에 쓰고, 판에는 시계(동그라미)·달(반원) 조각으로 꾸민 뒤 점검 칸에 표시한다.
 *  - 정리 출구 질문의 단계 차이 가운데 교구 설정으로 못 하는 것('가족에게 알릴 문장'·'동생 반 문구' 등)은 교사 진행으로 적었다.
 *
 * 사람 확인: 근거 파일에는 의무 교육 항목 제목(사용 시간 조절·개인정보 지키기·예절)만 있다. 아래 문장은 일반 과의존 예방·디지털 시민 내용으로 썼으니
 *  공식 안내처(과학기술정보통신부·한국지능정보사회진흥원 스마트쉼센터, 개인정보보호위원회·한국인터넷진흥원 개인정보 교육 자료, 방송통신위원회 디지털 윤리 자료)에서 확인한다.
 *  - urge-check.intro.cause-story·activity.urge-choice: '심심함·불안할 때 바로 꺼내는 습관이 할 일을 미루게 한다'는 원인·결과 설명 — 스마트쉼센터.
 *  - urge-check.activity.self-check: 습관 카드(심심하면 꺼내기·밥 먹으며 화면 보기·누워서 화면 보기 등)는 수업용으로 지은 문장이며 공식 과의존 척도 문항이 아니다 — 스마트쉼센터.
 *  - urge-check.activity.swap-timer·group-talk·wrap.plan-write: '대신 할 활동을 정해 두면 습관을 바꾸기 쉽다', 불안할 때 숨 고르기 — 스마트쉼센터 예방 자료.
 *  - urge-check.wrap.end-time: 가족과 사용 끝 시각을 정해 두는 실천 — 스마트쉼센터(시각 값 8시 40분·9시 10분은 가상 인물의 약속으로 지은 값).
 *  - share-think 전체: 개인정보가 되는 단서(학교 이름·반·만나는 곳과 시각·주소·이름표·교복 표지), '한번 올리면 다른 사람이 저장·전달해 지워도 남을 수 있다',
 *    올리기 전 정보 확인 → 찍힌 사람에게 묻기 → 공개 범위 정하기 — 개인정보보호위원회·한국인터넷진흥원.
 *  - share-think.intro.spread-graph: 5명씩 전달되는 퍼짐(5·25·125명)은 수업용 계산 예시다(실제 퍼짐 속도 자료가 아니다).
 *  - chat-pressure 전체: 단체방 답장 압박·놓칠까 불안한 마음, '조용한 시간' 같은 대화방 약속, 늦은 답장에 서로 하는 말 — 방송통신위원회 디지털 윤리 자료·스마트쉼센터.
 *    근거 파일도 '답장 압박은 일반 지식, 근거 약함'이라고 적었다. 그래프·투표 수치는 가상이다.
 *  - share-think.wrap.tell-adult·chat-pressure.wrap.help-who: 원치 않게 퍼졌거나 계속 불안할 때 보호자·담임·상담 선생님께 말하기 — 학교마다 상담 창구가 다르니 교사가 우리 학교에 맞게 바꾼다.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('urge-check', 5)('intro.cause-story', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `digital.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'digital', band: '초5-6', topic: `digital.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const inter = (slots, g) => { const out = []; const n = Math.max(0, ...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };

  // ---- 카드 판 문항(mindmap·kitchen·timeline sort) ----
  // groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode, opt = {} }, d, more) => {
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = Object.assign(topic ? { topic } : {}, opt, { slots, cards: inter(slots, groups) }); if (mode) base.mode = mode;
    const ez = take(easy); const fullCards = inter(slots, full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(slots, ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 분류판 글 카드 모드(sortboard): 쉬움 = 앞 easy장(limit), 도전 = more(더할 카드 + 함정 카드)
  const SB = (prompt, { slots, groups, easy = 4, extra = {}, traps = [] }, d, more) => {
    const cards = inter(slots, groups);
    const add = inter(slots, extra); add.splice(1, 0, ...traps);
    const pick = (list) => Object.fromEntries(slots.map((s) => [s, [...(groups[s] || []), ...(extra[s] || [])].filter((c) => list.includes(c))]));
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${easy}장).`, toolOptions: { limit: easy }, target: { sort: pick(cards.slice(0, easy)) } } };
    if (add.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${cards.length + add.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { more: add }, target: { sort: pick([...cards, ...add]) } };
    return Object.assign({ prompt, toolOptions: { slots, cards }, target: { sort: pick(cards) }, difficulty: d, levels: lv }, more);
  };
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 카드(카드 칸에 남겨야 함)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, mode, opt = {} } = {}, d, more) => {
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ez } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(steps), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, opt, { slots: steps.length, cards: mix(steps) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 짝 짓기(match): pairs = [[칸 이름, 맞는 카드]…]. 쉬움 = 앞 easy칸, 기본 = 앞 base칸, 도전 = 모든 칸. traps = 남는 카드
  const MAT = (prompt, pairs, traps = [], { easy = 2, base = 3, mode = 'match', opt = {} } = {}, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `m${i + 1}`, label }));
    const cardsOf = (n) => { const c = pairs.slice(0, n).map(([, x]) => x).reverse(); c.splice(1, 0, ...traps); return c; };
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, x], i) => [`m${i + 1}`, x])) });
    const lv = { easy: { prompt: `${cut(prompt)}(칸 ${easy}개).`, toolOptions: { slots: sl.slice(0, easy), cards: cardsOf(easy) }, target: tg(easy) } };
    if (pairs.length > base) lv.challenge = { prompt: `${cut(prompt)}(칸 ${pairs.length}개).`, toolOptions: { slots: sl, cards: cardsOf(pairs.length) }, target: tg(pairs.length) };
    return Object.assign({ prompt, toolOptions: Object.assign({ mode }, opt, { slots: sl.slice(0, base), cards: cardsOf(base) }), target: tg(base), difficulty: d, levels: lv }, more);
  };
  // 고르기(pick): good = 담을 카드, traps = 남길 카드. 쉬움 = good 앞 easy장 + 함정 easyTraps장, 도전 = extraTraps 더함
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], mode = 'pick', opt = {} } = {}, d, more) => {
    const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };
    const o = Object.assign({ mode, basket }, opt, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
  };

  // ---- 갈림길(dilemma) ----
  // steps[i] = { text, ask?, motif?, good: [id, 글, 결과, [[누구, 영향, tone]…]], alt?: (good 과 같은 꼴), bad: [id, 글, 결과, 틀렸을 때 한 문장, [[…]], 끝 글?], mid?: (bad 꼴) }
  const imp = (list) => (list || []).map(([who, text, tone]) => ({ who, text, tone }));
  const TREE = (steps, depth, ending) => {
    const build = (i) => {
      const s = steps[i];
      const ok = (g) => { const o = { id: g[0], text: g[1], result: g[2], impact: imp(g[3]) }; if (i === depth - 1) o.ending = ending; else o.next = build(i + 1); return o; };
      const no = (b) => ({ id: b[0], text: b[1], result: b[2], why: b[3], impact: imp(b[4]), ending: b[5] || '다른 길을 골랐다면 어땠을지 되돌아가 견주어 봐요.' });
      const list = [no(s.bad), ok(s.good), s.mid ? no(s.mid) : null, s.alt ? ok(s.alt) : null].filter(Boolean);
      const r = i % list.length;
      return { text: s.text, ask: s.ask || '어떻게 할까요?', motif: s.motif || 'house', choices: [...list.slice(r), ...list.slice(0, r)] };
    };
    return build(0);
  };
  const goodPaths = (steps, n) => steps.slice(0, n).reduce((acc, s) => acc.flatMap((p) => [s.good[0], ...(s.alt ? [s.alt[0]] : [])].map((id) => [...p, id])), [[]]);
  // 갈림길 활동 문항 셋: ① 알맞은 길 + 근거 ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기).
  // depth = [쉬움, 기본, 도전] 갈림 수. 도전은 근거를 모두 고르고 revealAfterCheck(활동 levels 에서 켬)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude, depth = [1, 2, 3], extra = [] }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    const [e, b, c] = depth;
    const say = (n) => (n === 1 ? '갈림길 한 번' : n === 2 ? '갈림길 두 번' : '갈림길 세 번');
    return [
      { prompt: `‘${title}’ ${say(b)}에서 알맞은 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(b), target: { path: goodPaths(steps, b), reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ ${say(e)}에서 알맞은 선택을 고르고 근거를 골라요.`, toolOptions: opt(e), target: { path: goodPaths(steps, e), reasons: [good[0]], some: true } },
          challenge: { prompt: `‘${title}’ ${say(c)}을 지나 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(c), target: { path: goodPaths(steps, c), reasons: good, some: false } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(b), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(e) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(c), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(b) },
      ...extra,
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) ----
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 3개, 도전 = 기준 3개 + chCrit(꼭 넣을 낱말 must). sents = [쉬움, 기본, 도전] 최소 문장 수
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title, sents, chCrit = '한 군데 이상 고쳐 썼다', chPrompt }, d, more) => {
    const sn = (k) => (sents ? { sentences: [sents[k], 6] } : {});
    const ch = { prompt: chPrompt || `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: Object.assign({ selfCheck: [...crit.slice(0, 3), chCrit], chars: [chars[0] + 10, chars[1]], mustInclude: must }, sn(2)) };
    return Object.assign({
      prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: Object.assign({ selfCheck: crit.slice(0, 3), chars }, sn(1)), difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: Object.assign({ selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] }, sn(0)) },
        challenge: ch,
      },
    }, more);
  };
  // 정리용 출구 질문 꼴로 바꾸기(활동 문항 모양 → { type: 'tool', tool, options, … })
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty || 0.15 }, it.levels ? { levels: it.levels } : {});
  const RUBX = (prompt, spec) => EX('rubric-writing', RUB(prompt, spec, 0.2));
  // 막대·꺾은선그래프 읽기 시연(chart read). data = [[이름, 값]…]
  const CHART = (type, title, data, question, pick, { unit = '명', xLabel, yLabel } = {}) => ({
    tool: 'chart', options: Object.assign({ type, mode: 'read', title, unit, data, question, choices: data.map((x) => x[0]) }, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}), sequence: [{ pick }],
  });
  // 정리: 콜라주 판 — 쉬움 조각 3개·점검 2칸, 기본 조각 5개·점검 3칸, 도전 점검 4칸
  const COLX = (prompt, crit, { shapes = ['circle', 'semi', 'square', 'rect', 'triangle', 'star', 'heart', 'diamond'], colors = ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하양', '검정'] } = {}) => ({
    type: 'tool', tool: 'collage', options: { shapes, colors, maxPieces: 16 }, prompt, target: { selfCheck: crit.slice(0, 3), minPieces: 5 }, difficulty: 0.1,
    levels: {
      easy: { prompt: `${cut(prompt)}(조각 3개 이상).`, target: { selfCheck: crit.slice(0, 2), minPieces: 3 } },
      challenge: { prompt: `${cut(prompt)}(점검 네 칸).`, target: { selfCheck: crit.slice(0, 4), minPieces: 5 } },
    },
  });
  // 칸 지도(map pin) — places 가운데 target 장소에 핀
  const PL = (name, icon, at) => ({ name, icon, at });
  const MAPX = (prompt, title, places, target, { easyKeep, challenge } = {}) => {
    const lv = { easy: { prompt: `${cut(prompt)}(장소 ${easyKeep.length}곳).`, toolOptions: { places: places.filter((p) => easyKeep.includes(p.name)), readout: true } } };
    if (challenge) lv.challenge = challenge;
    return { type: 'tool', tool: 'map', options: { grid: [6, 4], title, places, legend: false }, prompt, target: { place: target }, difficulty: 0.15, levels: lv };
  };

  // ======== 5학년 · 심심할 때 바로 꺼내지 않기 (research-mandatory §2 초: 사용 시간 조절) ========
  {
    const X = mk('urge-check', 5);
    // 준호(가상)의 하루: 원인 장면 → 결과 카드
    const JUNHO = [
      ['아침, 심심해서 폰을 켬', '지각할 뻔함'],
      ['쉬는 시간, 영상만 봄', '친구와 못 놂'],
      ['방과 후, 숙제 전에 게임', '숙제를 미룸'],
      ['저녁, 누워서 계속 봄', '숙제를 못 함'],
    ];
    // 다온(가상)의 일주일 기록: 습관 카드 → 날 수
    const DAON = { 자주: ['심심하면 바로 꺼냄', '밥 먹으며 화면 봄', '숙제 중 알림 확인'], 가끔: ['누워서 화면 봄', '길 걸으며 화면 봄'], '안 함': ['잠든 뒤 알림 확인', '수업 중에 꺼냄'] };
    // 갈림길: 학원이 쉬는 비 오는 일요일 오후
    const RAIN = [
      { text: '학원이 쉬는 비 오는 일요일 오후 2시. 할 일이 없어 심심해요. 폰이 책상 위에 있어요.', motif: 'cloud',
        good: ['list', '먼저 할 일 목록을 본다', '숙제 하나와 방 정리가 남은 걸 알게 돼요.', [['나', '할 일을 알아요', 1]]],
        bad: ['grab', '바로 폰을 켜 영상을 튼다', '한 편이 끝나자 다음 영상이 이어져요.', '심심할 때 바로 꺼내면 멈출 틈이 없어요.', [['나', '시간이 빨리 가요', -1]], '2시간 뒤, 숙제는 그대로고 눈이 뻑뻑해요.'] },
      { text: '숙제를 마쳤어요. 아직도 비가 와요. 동생이 "같이 놀자"고 해요.', motif: 'house',
        good: ['play', '동생과 보드게임을 한다', '둘이 웃으며 두 판을 해요.', [['동생', '함께 놀아 신나요', 1], ['나', '심심함이 풀려요', 1]]],
        bad: ['alone', '"나중에" 하고 혼자 폰을 본다', '동생이 혼자 거실에 앉아 있어요.', '심심함은 함께 노는 것으로도 풀 수 있어요.', [['동생', '서운해요', -1]]] },
      { text: '저녁 먹기 전 30분이 남았어요. 폰을 30분만 쓰기로 했어요.', motif: 'sun',
        good: ['timer', '타이머를 맞추고 울리면 끈다', '30분 뒤 스스로 끄고 저녁을 먹어요.', [['나', '스스로 멈춰 뿌듯해요', 1], ['가족', '저녁을 함께 먹어요', 1]]],
        bad: ['more', '"조금만 더" 하며 계속 본다', '저녁 먹으라는 소리를 세 번 들어요.', '"마음만 먹으면 멈춘다"는 생각과 달리 정한 장치가 있어야 멈추기 쉬워요.', [['가족', '기다려요', -1]]] },
    ];
    const RAIN_R = [
      { id: 'gap', text: '꺼내기 전에 멈추면 할 일을 먼저 볼 수 있다' },
      { id: 'other', text: '심심함은 다른 놀이로도 풀린다' },
      { id: 'tool', text: '타이머 같은 장치가 멈추기를 돕는다' },
      { id: 'anytime', text: '마음만 먹으면 언제든 멈출 수 있다', why: '멈추려는 마음만으로는 어려울 때가 많아요. 장치와 계획이 도와요.' },
      { id: 'bored', text: '심심하면 폰이 가장 빠른 답이다', why: '빠르지만 할 일과 함께 노는 시간을 줄일 수 있어요.' },
    ];
    M.push(
      X('intro.cause-story', {
        title: '준호의 하루 — 원인과 결과', method: '준호의 하루 — 원인과 결과', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 3개(아침·쉬는 시간·저녁)만 읽어 주고 결과 카드를 함께 짝 짓는다.', base: '장면 4개의 원인과 결과를 짝 짓고, 저녁에 숙제를 못 한 까닭을 말한다.', challenge: '장면 4개를 짝 지은 뒤, 숙제를 못 한 원인을 하나 더(피곤함·미루기) 찾아 말한다.' },
        intro: {
          teacher: '"준호(지어낸 친구)는 심심할 때마다 폰을 꺼냈어요. 저녁에 숙제를 못 한 건 저녁 일 때문일까요?" 시연 단추로 장면마다 결과 카드가 붙는 모습을 보인다. "저녁에 누워서 본 것만 문제예요"라는 말이 나오면 "방과 후에 숙제 전에 게임을 했을 때 이미 무슨 일이 생겼나요?"라고 되물어, 작은 꺼냄이 하루 동안 쌓인다는 점을 잇는다. 오늘은 꺼내기 전에 알아차리는 법을 배운다고 밝힌다.',
          student: '준호의 하루 네 장면을 보고, 장면마다 생긴 결과를 짝 지어 보아요. 숙제를 못 한 진짜 원인이 어디서 시작됐는지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'match', title: '준호의 하루(지어낸 이야기)', slots: JUNHO.map(([c], i) => ({ id: `j${i + 1}`, label: c })), cards: JUNHO.map(([, r]) => r).reverse(), shuffle: false },
            sequence: [{ match: { j1: '지각할 뻔함' } }, { match: { j1: '지각할 뻔함', j2: '친구와 못 놂', j3: '숙제를 미룸', j4: '숙제를 못 함' } }] },
          art: art('four small paper scenes of one boy through a day, each with a paper phone, ending with an unfinished paper notebook at night', '숙제를 못 한 진짜 까닭은?', 'moon', 'sky'),
        },
        notes: '준호는 지어낸 인물이다. 학생에게 자기 하루를 발표하게 하지 않는다.',
      }),
      X('intro.week-graph', {
        title: '심심해서 꺼낸 횟수 그래프', method: '가상 사용 기록 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 가장 긴 막대(일요일) 하나만 짚어 읽게 한다.', base: '가장 긴 요일과 가장 짧은 요일을 읽고 그날의 까닭을 말한다.', challenge: '평일과 주말 막대를 견주어 차이가 생긴 까닭을 말한다.' },
        intro: {
          teacher: '"이 그래프는 지어낸 친구 준호가 \'심심해서\' 폰을 꺼낸 횟수를 요일마다 센 가상 자료예요. 가장 많은 날은 언제일까요?" 시연 단추로 일요일을 고르는 모습을 보인다. "주말엔 많이 써도 괜찮아요"라는 말에는 "일요일에 많은 까닭이 무엇일까요? 할 일이 없을 때 꺼냈다면 대신 할 것을 미리 정해 두면 어떨까요?"라고 되묻는다. 수치는 가상이라고 꼭 밝힌다.',
          student: '그래프에서 준호가 가장 많이 꺼낸 날과 가장 적게 꺼낸 날을 찾고, 그날 무슨 일이 있었을지 짝에게 말해 보아요.',
          demo: CHART('bar', '준호가 심심해서 꺼낸 횟수(가상)', [['월', 4], ['화', 2], ['수', 5], ['목', 3], ['금', 4], ['토', 8], ['일', 11]], '가장 많은 요일은?', 6, { unit: '번', xLabel: '요일', yLabel: '꺼낸 횟수' }),
          art: art('a paper bar chart of seven days with the last two bars much taller, a paper rain cloud above the Sunday bar', '가장 많이 꺼낸 날은?', 'cloud', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생 자신의 횟수를 세어 발표하게 하지 않는다.',
      }),
      X('activity.self-check', {
        title: '나의 사용 습관 점검표', method: '나의 사용 습관 점검표', tool: 'kitchen', minutes: 13,
        levels: { easy: '다온(가상)의 습관 카드 4장을 자주·가끔·안 함 칸에 나누고, 넣을 때 맞는지 바로 알려 준다.', base: '습관 카드 6장을 나누고, 둘째 문항에서 바꿀 칸 하나를 고른다.', challenge: '습관 카드 7장을 나누고, 바꿀 칸을 고른 뒤 대신 할 방법을 짝에게 말한다(내 점검은 활동지에 혼자 표시).' },
        activity: {
          title: '다온이의 기록으로 점검표 연습', tool: 'kitchen',
          teacher: '"다온(지어낸 친구)이 일주일 동안 기록했어요. 5일 넘게 한 것은 \'자주\', 1~4일은 \'가끔\', 0일은 \'안 함\'이에요." 카드마다 기록표의 날 수를 소리 내어 읽게 한다. "\'자주\' 칸이 많으면 나쁜 사람이에요"라는 말에는 "점검표는 점수가 아니라 바꿀 곳 하나를 찾는 도구예요"라고 바로잡는다. 마지막에 내 습관은 활동지에 혼자 표시하고 걷지 않는다고 알려 준다.',
          task: '다온(가상)의 일주일 기록: 심심하면 꺼냄 6일, 밥 먹으며 7일, 숙제 중 알림 5일, 누워서 3일, 걸으며 2일, 잠든 뒤·수업 중 0일. 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            SORT('다온이의 습관 카드를 날 수에 맞는 칸에 나누어요.', { slots: ['자주', '가끔', '안 함'], groups: { 자주: DAON.자주.slice(0, 2), 가끔: DAON.가끔.slice(0, 1), '안 함': DAON['안 함'].slice(0, 1) }, easy: [2, 1, 1], extra: {}, mode: 'sort', opt: { groups: false, autoMotif: false } }, 0.2,
              { toolOptions: { mode: 'sort', groups: false, autoMotif: false, slots: ['자주', '가끔', '안 함'], cards: inter(['자주', '가끔', '안 함'], { 자주: DAON.자주, 가끔: DAON.가끔, '안 함': DAON['안 함'].slice(0, 1) }) },
                target: { sort: { 자주: DAON.자주, 가끔: DAON.가끔, '안 함': DAON['안 함'].slice(0, 1) } },
                levels: {
                  easy: { prompt: '다온이의 습관 카드를 날 수에 맞는 칸에 나누어요(카드 4장).', toolOptions: { cards: inter(['자주', '가끔', '안 함'], { 자주: DAON.자주.slice(0, 2), 가끔: DAON.가끔.slice(0, 1), '안 함': DAON['안 함'].slice(0, 1) }) }, target: { sort: { 자주: DAON.자주.slice(0, 2), 가끔: DAON.가끔.slice(0, 1), '안 함': DAON['안 함'].slice(0, 1) } } },
                  challenge: { prompt: '다온이의 습관 카드를 날 수에 맞는 칸에 나누어요(카드 7장).', toolOptions: { cards: inter(['자주', '가끔', '안 함'], DAON) }, target: { sort: DAON } },
                } }),
            { prompt: '다온이가 숙제를 자주 늦게 끝내요. 먼저 바꿀 칸 하나를 골라 담아요.', toolOptions: { mode: 'pick', basket: '먼저 바꿀 습관', autoMotif: false, cards: ['밥 먹으며 화면 봄', '숙제 중 알림 확인', '길 걸으며 화면 봄'] }, target: { pick: ['숙제 중 알림 확인'] }, difficulty: 0.25,
              conclude: '점검표는 남과 견주는 점수가 아니라, 결과(숙제가 늦음)의 원인이 된 습관 하나를 찾는 도구예요.' },
            { prompt: '다온이가 바꿀 습관 대신 할 방법을 짝에게 한 가지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 습관에 혼자 ○를 해요(걷지 않아요).', columns: ['습관', '자주', '가끔', '안 함'], cells: [['심심하면 바로 꺼낸다', '', '', ''], ['밥 먹으며 화면을 본다', '', '', ''], ['누워서 화면을 본다', '', '', ''], ['숙제 중 알림을 본다', '', '', '']] }] },
        notes: 'kitchen 은 세 칸 표시를 못 해 가상 인물의 기록으로 카드 나누기를 하고, 내 점검은 걷지 않는 활동지 표에 한다. 습관 문장은 수업용으로 지은 것이며 공식 척도 문항이 아니다.',
      }),
      X('activity.urge-choice', {
        title: '심심할 때 갈림길', method: '심심할 때 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(꺼낼지 목록을 볼지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(동생이 놀자고 함)을 지나 근거를 고른다.', challenge: '갈림 3번(30분만 쓰기)까지 지나 근거를 모두 고르고, 바로 꺼낸 길의 2시간 뒤 결과와 견준다.' },
        activity: {
          title: '갈림길: 비 오는 일요일 오후', tool: 'dilemma',
          teacher: '"비 오는 일요일 오후, 할 일이 없을 때 손이 먼저 어디로 가나요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. 바로 꺼낸 길의 끝 장면(2시간 뒤 숙제 그대로)을 꼭 함께 본다. "나는 마음만 먹으면 언제든 멈출 수 있어요"라는 말에는 "다음 영상이 저절로 이어질 때도 쉽게 멈췄나요? 그래서 타이머 같은 장치를 미리 정해요"라고 되묻는다.',
          task: '갈림길마다 고르고 결과를 읽은 뒤, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '비 오는 일요일 오후',
            steps: RAIN,
            ending: '먼저 멈추고 다른 길을 고른 덕분에 할 일도 놀이도 저녁도 지켰어요.',
            reasons: RAIN_R,
            good: ['gap', 'other', 'tool'],
            talk: '모둠에서 "바로 꺼낸 길"과 "멈춘 길"의 2시간 뒤 모습을 견주어 이야기해요.',
            conclude: '심심할 때 꺼내기 전에 한 번 멈추고, 할 일과 다른 놀이를 먼저 떠올려요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '심심할 때 폰을 꺼내기 전에 한 번 ___ 할 일을 먼저 봐요.', answer: '멈추고' }] },
        notes: 'saf-cyber 의 \'비 오는 토요일 대비 블록\'과 겹치지 않게 학원이 쉬는 일요일 오후 갈림길로 썼다. 게임·앱 이름은 쓰지 않는다.',
      }),
      X('activity.swap-timer', {
        title: '바꿔 하기 10분 도전', method: '바꿔 하기 10분 도전', tool: 'timer', minutes: 13,
        levels: { easy: '대신 할 활동 5분 타이머를 맞추고, 준비 카드 3장의 차례를 정한다.', base: '활동 10분 타이머를 맞추고 준비 카드 4장의 차례를 정한 뒤 끝나고 점검 칸 3개에 표시한다.', challenge: '활동 두 개(10분씩, 사이 쉬기 5분)를 잇는 타이머를 맞추고 점검 칸 4개에 표시한다.' },
        activity: {
          title: '폰 대신 10분 타이머', tool: 'timer',
          teacher: '"오늘 저녁 심심할 때 폰 대신 할 것을 하나 골라 볼까요? 줄넘기, 그림 그리기, 책상 정리 가운데 무엇이 좋을까요?" 타이머 칸의 \'활동\'은 대신 할 활동 시간이라고 짚는다. "10분은 너무 짧아서 소용없어요"라는 말에는 "10분 동안 손이 폰을 찾지 않았다면 그게 바로 습관을 바꾸는 첫걸음이에요"라고 말해 준다. 끝난 뒤 기분은 스스로 점검 칸에 표시하게 한다.',
          task: '폰 대신 할 활동 시간을 타이머로 맞추고, 시작 전 준비 차례를 정한 뒤 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '폰 대신 줄넘기를 10분 하도록 타이머를 맞춰요.', toolOptions: { title: '바꿔 하기 타이머', timeUnit: 'min', labels: ['활동', '쉬기'], plan: { work: 3, rest: 0, rounds: 1 } }, target: { plan: { work: 10, rounds: 1 } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '폰 대신 그림 그리기를 5분 하도록 타이머를 맞춰요.', target: { plan: { work: 5, rounds: 1 } } },
                challenge: { prompt: '줄넘기 10분, 쉬기 5분, 그리기 10분이 되게 활동을 두 번으로 맞춰요.', target: { plan: { work: 10, rest: 5, rounds: 2 } } },
              } },
            ORDER('바꿔 하기를 시작하기 전 준비 카드를 차례대로 놓아요.', ['폰을 다른 방에 두기', '대신 할 활동 고르기', '타이머 맞추기', '시작 누르기'], { easy: [0, 2, 3], opt: { title: '시작 전 준비 차례' } }, 0.2,
              { toolOptions: { title: '시작 전 준비 차례', cards: ['타이머 맞추기', '폰을 다른 방에 두기', '시작 누르기', '대신 할 활동 고르기'] }, target: { order: ['폰을 다른 방에 두기', '대신 할 활동 고르기', '타이머 맞추기', '시작 누르기'] },
                levels: { easy: { prompt: '바꿔 하기를 시작하기 전 준비 카드를 차례대로 놓아요(카드 3장).', toolOptions: { cards: ['시작 누르기', '폰을 다른 방에 두기', '타이머 맞추기'] }, target: { order: ['폰을 다른 방에 두기', '타이머 맞추기', '시작 누르기'] } } } }),
            { prompt: '바꿔 하기를 끝낸 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '끝난 뒤 점검' }, target: { selfCheck: ['끝까지 해 보았다', '그동안 폰을 찾지 않았다', '끝난 뒤 기분을 떠올렸다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '바꿔 하기를 끝낸 뒤 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['끝까지 해 보았다', '끝난 뒤 기분을 떠올렸다'] } }, challenge: { prompt: '바꿔 하기를 끝낸 뒤 해낸 것에 스스로 표시해요(네 칸).', target: { selfCheck: ['끝까지 해 보았다', '그동안 폰을 찾지 않았다', '끝난 뒤 기분을 떠올렸다', '다음에 또 할 활동을 정했다'] } } },
              conclude: '심심할 때 할 활동을 정하고 시간을 맞춰 두면, 폰을 찾는 손을 다른 곳으로 옮길 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오늘 저녁 바꿔 하기 계획을 써요.', columns: ['대신 할 활동', '몇 분', '끝난 뒤 기분'], cells: [['', '', '']] }] },
        notes: '몸으로 한 활동과 기분은 판정하지 않는다. 교실에서는 5분짜리를 함께 해 보고(그리기·정리), 줄넘기는 집 숙제로 둔다.',
      }),
      X('activity.group-talk', {
        title: '모둠: 다른 방법 모으기', method: '모둠: 다른 방법 모으기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 둘(집에서 심심할 때·시험 앞두고 불안할 때)에 카드 4장을 나눈다.', base: '가지 셋(차 안에서 지루할 때 더함)에 카드 6장을 나눈다.', challenge: '가지 셋에 카드 8장(넣지 않을 카드 섞임)을 나누고, 둘째 문항에서 가장 해 보기 쉬운 방법을 고른다.' },
        activity: {
          title: '폰 말고 할 방법 생각그물', tool: 'mindmap',
          teacher: '"심심할 때, 불안할 때, 지루할 때 마음이 다르니 어울리는 방법도 다를 거예요." 모둠이 카드를 놓을 때마다 "왜 그 마음에 어울려요?"라고 묻는다. "불안할 때도 영상을 보면 잊혀요"라는 말에는 "영상이 끝나면 불안이 사라졌나요? 숨을 고르거나 어른께 마음을 말하면 어떨까요?"라고 되묻는다. 모둠이 낸 새 방법은 칠판에 덧붙인다.',
          task: '가운데 \'폰 말고 할 방법\'에서 마음별 가지에 어울리는 방법 카드를 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '마음별 가지에 어울리는 방법 카드를 나누어요.', toolOptions: { topic: '폰 말고 할 방법', slots: ['집에서 심심할 때', '시험 앞두고 불안할 때', '차 안에서 지루할 때'], cards: ['블록 만들기', '숨 다섯 번 고르기', '창밖 간판 글자 찾기', '방 정리하기', '보호자에게 마음 말하기', '가족과 끝말잇기'] },
              target: { sort: { '집에서 심심할 때': ['블록 만들기', '방 정리하기'], '시험 앞두고 불안할 때': ['숨 다섯 번 고르기', '보호자에게 마음 말하기'], '차 안에서 지루할 때': ['창밖 간판 글자 찾기', '가족과 끝말잇기'] } }, difficulty: 0.2,
              hints: ['그 마음이 생긴 자리(집·시험 앞·차 안)에서 할 수 있는 방법인지 견주어요.'],
              levels: {
                easy: { prompt: '마음별 가지 둘에 어울리는 방법 카드를 나누어요(카드 4장).', toolOptions: { slots: ['집에서 심심할 때', '시험 앞두고 불안할 때'], cards: ['블록 만들기', '숨 다섯 번 고르기', '방 정리하기', '보호자에게 마음 말하기'] }, target: { sort: { '집에서 심심할 때': ['블록 만들기', '방 정리하기'], '시험 앞두고 불안할 때': ['숨 다섯 번 고르기', '보호자에게 마음 말하기'] } } },
                challenge: { prompt: '마음별 가지에 방법 카드를 나누어요(카드 8장, 넣지 않을 카드도 있어요).', toolOptions: { cards: ['블록 만들기', '영상 계속 틀기', '숨 다섯 번 고르기', '창밖 간판 글자 찾기', '방 정리하기', '보호자에게 마음 말하기', '가족과 끝말잇기', '밤새 단체방 보기'] } },
              } },
            { prompt: '모은 방법 가운데 오늘 저녁 가장 해 보기 쉬운 것을 골라 담아요.', toolOptions: { mode: 'pick', basket: '오늘 해 볼 방법', cards: ['블록 만들기', '밤새 단체방 보기', '숨 다섯 번 고르기', '영상 계속 틀기'] }, target: { pick: ['블록 만들기', '숨 다섯 번 고르기'], some: true }, difficulty: 0.15,
              conclude: '마음마다 어울리는 방법이 달라요. 폰 말고 할 방법을 미리 모아 두면 꺼내기 전에 고를 수 있어요.' },
            { prompt: '모둠에서 카드에 없는 새 방법을 하나 만들어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '마음마다 폰 말고 할 방법을 하나씩 써요.', columns: ['심심할 때', '불안할 때', '지루할 때'], cells: [['', '', '']] }] },
        notes: '카드 한 장의 정답 가지는 하나라 마음이 생긴 자리(집·시험 앞·차 안)를 가지 이름에 넣어 구별했다. 여러 가지에 어울리는 방법은 셋째 말하기 문항에서 다룬다.',
      }),
      X('wrap.plan-write', {
        title: '나의 작은 실천 계획', method: '나의 작은 실천 계획', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장 이상 쓰고 기준 2개(구체적·지킬 수 있음)를 점검한다.', base: '두 문장 이상 쓰고 기준 3개(구체적·지킬 수 있음·언제)를 점검한다.', challenge: '세 문장 이상 쓰고, 못 지켰을 때 다시 할 방법(\'다시\'를 넣음)을 더해 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"오늘 배운 \'멈추고 다른 방법 고르기\'를 내 계획으로 써 볼까요?" 문장 틀을 칠판에 적어 둔다. "폰을 덜 하겠다"처럼 쓰는 학생에게 "언제, 무엇 대신, 무엇을 할지 들어 있나요? 내일 아침에 읽고 바로 할 수 있게 써 봐요"라고 묻는다. 이름·연락처는 쓰지 않는다고 알려 준다.',
          exitTicket: [
            RUBX('심심할 때의 실천 계획을 써요', { topic: '"심심할 때 나는 ___ 대신 ___을 한다"처럼 실천 계획을 써요(이름은 쓰지 않아요).', starter: '심심할 때 나는 폰 대신 ___을 한다. 언제: ___.', crit: ['구체적으로 썼다(무엇 대신 무엇)', '내가 지킬 수 있는 일이다', '언제 할지 썼다'], must: [['다시', '또']], chars: [20, 180], title: '나의 작은 실천 계획', sents: [1, 2, 3], chCrit: '못 지켰을 때 다시 할 방법을 썼다', chPrompt: '실천 계획을 쓰고, 못 지켰을 때 다시 할 방법도 한 문장 더해요.' }),
            { type: 'choice', prompt: '"나는 마음만 먹으면 언제든 멈출 수 있다"에 알맞은 생각은?', options: ['늘 맞으니 계획이 필요 없다', '멈추기 어려울 때가 있어 계획과 장치가 돕는다', '멈추지 않아도 괜찮다'], answer: 1, difficulty: 0.2, explain: '멈추려는 마음만으로는 어려울 때가 많아요. 대신 할 것과 타이머를 정해 두면 도움이 돼요.' },
          ],
        },
        worksheet: {
          title: '꺼내기 전에 멈춰요',
          items: [
            { type: 'blank', prompt: '내 실천 계획을 빈칸에 써요.', text: '심심할 때 나는 ___ 대신 ___을 한다.', answer: '(스스로 씀)' },
            { type: 'check', prompt: '내 계획을 점검해요.', options: ['무엇 대신 무엇을 할지 썼다', '내가 지킬 수 있다', '언제 할지 썼다'] },
          ],
          easy: { note: '꺼내기 전에 한 번 멈춰요.', items: [{ type: 'draw', prompt: '폰 대신 하고 싶은 일을 하는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.end-time', {
        title: '오늘 저녁 사용 끝 시각', method: '오늘 저녁 사용 끝 시각', tool: 'clock', minutes: 6,
        levels: { easy: '준호(가상)의 약속 끝 시각을 30분 단위(8시 30분)로 맞춘다.', base: '준호의 약속 끝 시각을 10분 단위(8시 40분)로 맞춘다.', challenge: '평일 끝 시각(8시 40분)에 이어 둘째 출구 질문에서 주말 끝 시각(9시 10분)도 맞춘다.' },
        wrap: {
          teacher: '"준호(지어낸 친구)는 가족과 저녁 사용 끝 시각을 8시 40분으로 정했어요. 시계로 만들어 볼까요?" 긴바늘이 8에 오는지 함께 확인한다. "끝 시각은 그때그때 정하면 돼요"라는 말에는 "그때가 되면 \'조금만 더\'가 나오지 않을까요? 미리 정해 보호자와 확인해 두면 지키기 쉬워요"라고 말해 준다. 내 끝 시각은 활동지에 쓰고 집에서 보호자 확인을 받게 한다(교구로 걷지 않음).',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 10, start: { h: 7, m: 0 } }, prompt: '준호의 평일 저녁 사용 끝 시각 8시 40분을 시계로 만들어요.', target: { h: 8, m: 40 }, difficulty: 0.15,
              levels: { easy: { prompt: '준호의 평일 저녁 사용 끝 시각 8시 30분을 시계로 만들어요.', toolOptions: { minuteStep: 30 }, target: { h: 8, m: 30 } } } },
            { type: 'tool', tool: 'clock', options: { minuteStep: 10, start: { h: 8, m: 0 } }, prompt: '준호의 주말 끝 시각은 평일보다 30분 늦어요. 시계로 만들어요.', target: { h: 9, m: 10 }, difficulty: 0.25,
              levels: { easy: { prompt: '준호의 주말 끝 시각은 9시예요. 시계로 만들어요.', toolOptions: { minuteStep: 30 }, target: { h: 9, m: 0 } } } },
            { type: 'short', prompt: '내 저녁 사용 끝 시각을 정하는 데 필요한 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '끝 시각을 미리 정해요',
          items: [
            { type: 'table', prompt: '내 저녁 사용 끝 시각을 쓰고 보호자 확인을 받아요.', columns: ['', '끝 시각', '보호자 확인'], cells: [['평일', '', ''], ['주말', '', '']] },
            { type: 'short', prompt: '끝 시각이 되면 무엇을 하고 폰을 내려놓을지 써요.' },
          ],
          easy: { note: '끝 시각은 미리 정하고 보호자와 확인해요.', items: [{ type: 'draw', prompt: '내 끝 시각을 시계에 그려요.' }] },
        },
        notes: '학생 자신의 끝 시각은 교구로 채점·제출하지 않는다. 8시 40분·9시 10분은 가상 인물의 약속으로 지은 값이다.',
      }),
    );
  }

  // ======== 6학년 · 올리기 전에 생각하기 — 개인정보 (research-mandatory §2 초: 개인정보 지키기) ========
  {
    const X = mk('share-think', 6);
    const SPREAD = [['1단계', 5], ['2단계', 25], ['3단계', 125]];
    // 갈림길: 친구의 웃긴 사진을 반 단체방에 올리고 싶어요
    const PHOTO = [
      { text: '체험학습에서 찍은 이솔의 웃긴 표정 사진이 있어요. 반 단체방에 올리고 싶어요.', motif: 'star',
        good: ['ask', '이솔에게 먼저 물어본다', '이솔이 "그건 싫어, 다른 사진은 괜찮아" 해요.', [['이솔', '내 사진을 내가 정해요', 1]]],
        bad: ['post', '묻지 않고 그냥 올린다', '누군가 저장해 다른 방에도 보내요.', '찍힌 사람에게 묻지 않고 올리면 그 친구가 상처받을 수 있어요.', [['이솔', '창피하고 속상해요', -1]], '지웠지만 이미 저장한 사람이 있어요.'] },
      { text: '이솔이 웃긴 사진은 싫고, 단체 사진은 괜찮대요. 친구들은 웃긴 사진을 보자고 해요.', motif: 'house',
        good: ['other', '이솔이 괜찮다고 한 사진만 올린다', '친구들도 "좋다" 하며 단체 사진을 봐요.', [['이솔', '믿고 웃어요', 1]]],
        bad: ['anyway', '"웃기잖아" 하며 첫 사진을 올린다', '이솔이 단체방을 나가 버려요.', '싫다고 한 사진을 올리면 허락을 어긴 거예요.', [['이솔', '믿음이 깨져요', -1]]] },
      { text: '단체 사진 뒤 표지판에 우리 학교 이름이 크게 보여요. 어디에 올릴까요?', motif: 'tree',
        good: ['crop', '표지판을 가리고 우리 반 방에만 올린다', '반 친구들만 보고 학교 이름도 안 보여요.', [['우리 반', '추억을 나눠요', 1]]],
        bad: ['open', '누구나 보는 곳에 그대로 올린다', '모르는 사람도 우리 학교를 알게 돼요.', '공개 범위가 넓으면 모르는 사람도 볼 수 있어요.', [['우리 반', '낯선 사람이 알아요', -1]]] },
    ];
    const PHOTO_R = [
      { id: 'consent', text: '찍힌 사람의 허락이 먼저다' },
      { id: 'stay', text: '한번 올리면 지워도 남을 수 있다' },
      { id: 'info', text: '사진 속 정보와 공개 범위도 살핀다' },
      { id: 'erase', text: '나중에 지우면 없던 일이 된다', why: '다른 사람이 저장하거나 보냈다면 지워도 남아요.' },
      { id: 'fun', text: '웃기면 모두 즐거우니 괜찮다', why: '찍힌 사람이 싫으면 즐거운 일이 아니에요.' },
    ];
    // 콜라주: 미리 놓인 조각 = 사진 속 물건, 검정 네모 = 가리는 스티커(같은 자리)
    const PC = (shape, color, size, x, y) => ({ shape, color, size, x, y, r: 0 });
    const COVER = (p) => PC('square', '검정', 'm', p.x, p.y);
    const PIC1 = { name: PC('rect', '주황', 's', 160, 260), sign: PC('rect', '파랑', 'm', 420, 100), addr: PC('rect', '노랑', 's', 440, 300), face: PC('heart', '분홍', 'l', 180, 140), tree: PC('leaf', '초록', 'l', 300, 140), deco: PC('star', '노랑', 's', 300, 300) };
    const PIC2 = { door: PC('rect', '갈색', 'l', 280, 200), addr: PC('rect', '노랑', 's', 400, 100), label: PC('square', '하양', 's', 160, 300), pot: PC('circle', '초록', 'm', 460, 300) };
    const SCHOOL = [PL('교실', 'school', [1, 1]), PL('보건실', 'hospital', [4, 0]), PL('상담실', 'office', [4, 2]), PL('도서관', 'library', [2, 0]), PL('운동장', 'park', [1, 3])];
    M.push(
      X('intro.spread-graph', {
        title: '사진은 얼마나 퍼질까', method: '사진은 얼마나 퍼질까', tool: 'chart', minutes: 6,
        levels: { easy: '교사와 함께 2단계(5명 → 25명)까지 점을 찍어 본다.', base: '3단계(125명)까지 꺾은선을 완성하고 단계마다 몇 배가 되는지 말한다.', challenge: '그래프를 보고, 처음 올린 사람이 지운 뒤에도 사본이 남을 곳(받은 사람의 기기·다른 방)을 말한다.' },
        intro: {
          teacher: '"한 사람이 사진을 다섯 명에게 보내고, 받은 다섯 명이 또 다섯 명씩 보내면 몇 명이 볼까요?" 수업용 계산 예시(가상)라고 밝히고 시연 단추로 5 → 25 → 125명 점이 이어지는 모습을 보인다. "내가 지우면 다 없어져요"라는 말에는 "125명 가운데 저장한 사람이 있다면요? 내 휴대폰에서 지워도 그 사람 것은 남아요"라고 되묻는다. 오늘은 올리기 전에 생각할 것을 배운다고 밝힌다.',
          student: '5명씩 전달되면 3단계 뒤 몇 명이 보는지 그래프에서 읽어 보아요. 처음 사람이 지워도 사진이 남을 곳을 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'build', title: '사진을 본 사람 수(가상 계산)', unit: '명', xLabel: '전달 단계', yLabel: '본 사람', data: SPREAD, given: [0], max: 125, scale: 25, step: 5 }, sequence: [{ values: [5, 25, null] }, { values: [5, 25, 125] }] },
          art: art('one paper phone sending a paper photo to five phones, each sending to five more, spreading like a paper tree', '한 장이 몇 명에게?', 'tree', 'mint'),
        },
        notes: '5·25·125명은 수업용 계산 예시다. 실제 퍼짐 속도 자료로 말하지 않는다.',
      }),
      X('intro.clue-find', {
        title: '글 속 단서 찾기', method: '글 속 단서 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 단서 둘(학교 이름·반)을 짚어 주고 함께 담는다.', base: '단서 넷(학교 이름·반·시각·장소) 가운데 셋 이상을 스스로 담는다.', challenge: '단서를 다 담은 뒤, 단서를 뺀 안전한 글("내일 만나서 놀자!")로 고쳐 말한다.' },
        intro: {
          teacher: '"가상 게시글 \'햇살초 6학년 2반, 내일 4시 별빛 놀이터에서 만나!\'를 읽어 볼까요? 모르는 사람이 이 글을 보면 무엇을 알게 될까요?" 시연 단추로 학교 이름·반·시각·장소 카드가 담기는 모습을 보인다. "이름을 안 썼으니 개인정보가 아니에요"라는 말에는 "학교와 반, 만나는 곳과 시각을 합치면 누가 어디 있는지 알 수 있지 않을까요?"라고 되묻는다.',
          student: '가상 게시글을 낱말 카드로 나누었어요. 모르는 사람이 나를 찾을 단서가 되는 카드를 골라 짝에게 까닭과 함께 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '개인정보 단서', cards: ['햇살초', '6학년 2반', '신난다', '내일 4시', '별빛 놀이터', '만나!'], shuffle: false }, sequence: [{ pick: ['햇살초', '6학년 2반'] }, { pick: ['햇살초', '6학년 2반', '내일 4시', '별빛 놀이터'] }] },
          art: art('a big paper speech card with a short message, four words highlighted with paper magnifying glasses', '이 글에 숨은 단서는?', 'star', 'peach'),
        },
        notes: '햇살초·별빛 놀이터는 지어낸 이름이다. 우리 학교 이름으로 바꾸어 예를 들지 않는다.',
      }),
      X('activity.post-choice', {
        title: '올릴까 말까 갈림길', method: '올릴까 말까 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 2번(묻기 → 괜찮다는 사진 고르기)을 지나 근거 한 장을 고른다.', base: '갈림 3번(공개 범위 정하기)까지 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 다른 끝 장면 세 곳에서 이솔의 마음이 어땠을지 견준다.' },
        activity: {
          title: '갈림길: 친구 사진 올리기', tool: 'dilemma',
          teacher: '"이솔의 웃긴 사진, 반 친구들이 좋아할 것 같아요. 올리기 전에 무엇을 해야 할까요?" 고를 때마다 결과와 이솔에게 미친 영향을 소리 내어 읽게 한다. "나중에 지우면 되잖아요"라는 말에는 "올린 사이 누가 저장했다면 지운 뒤에도 남아요. 그래서 올리기 전에 묻는 거예요"라고 되묻는다. 묻고 허락받은 사진도 사진 속 정보와 공개 범위를 다시 본다는 점을 짚는다.',
          task: '갈림길마다 고르고 결과를 읽은 뒤, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '친구 사진 올리기',
            steps: PHOTO, depth: [2, 3, 3],
            ending: '먼저 묻고 정보와 공개 범위를 살핀 덕분에 모두 편하게 추억을 나눠요.',
            reasons: PHOTO_R,
            good: ['consent', 'stay', 'info'],
            talk: '모둠에서 "묻지 않고 올린 길"의 끝에서 이솔이 어떤 마음일지 이야기해요.',
            conclude: '올리기 전에 찍힌 사람에게 묻고, 사진 속 정보와 공개 범위를 살펴요. 한번 올리면 지워도 남을 수 있어요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구 사진을 올리기 전에 가장 먼저 할 일은?', options: ['친구에게 묻기', '필터 고르기', '좋아요 수 예상하기'], answer: '친구에게 묻기' }] },
      }),
      X('activity.blur-collage', {
        title: '정보 가리기 작업', method: '정보 가리기 작업', tool: 'collage', minutes: 14,
        levels: { easy: '가상 사진 판에서 두 곳(이름표·학교 표지)에 검정 네모를 덮는다.', base: '세 곳(이름표·학교 표지·주소판)을 덮고, 정보가 아닌 조각(나무·별 스티커)은 그대로 둔다.', challenge: '세 곳을 덮고 꾸밈 별 스티커는 남긴 뒤, 셋째 문항에서 얼굴은 왜 가리기보다 물어봐야 하는지 말한다.' },
        activity: {
          title: '사진 속 정보 가리기', tool: 'collage',
          teacher: '"판에 놓인 조각은 가상 사진 속 물건이에요. 주황 긴 네모는 이름표, 파란 긴 네모는 학교 표지, 노란 긴 네모는 주소판이에요." 칠판에 색 뜻을 적어 둔다. 검정 네모를 골라 정보 조각과 같은 자리에 붙이게 한다. "얼굴만 가리면 돼요"라는 말에는 "얼굴을 가려도 이름표와 학교 표지가 보이면 누군지 알 수 있어요"라고 되묻는다. 얼굴은 가리기보다 찍힌 친구에게 먼저 묻는다는 점을 짚는다.',
          task: '가상 사진 판에서 이름표(주황)·학교 표지(파랑)·주소판(노랑) 조각 위에 검정 네모를 같은 자리에 붙여 가려요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '운동장 사진(가상)에서 이름표·학교 표지·주소판을 검정 네모로 가려요.', state: { pieces: [PIC1.face, PIC1.tree, PIC1.name, PIC1.sign, PIC1.addr] },
              target: { match: [PIC1.face, PIC1.tree, PIC1.name, PIC1.sign, PIC1.addr, COVER(PIC1.name), COVER(PIC1.sign), COVER(PIC1.addr)] }, difficulty: 0.25,
              levels: {
                easy: { prompt: '운동장 사진(가상)에서 이름표와 학교 표지를 검정 네모로 가려요.', state: { pieces: [PIC1.face, PIC1.tree, PIC1.name, PIC1.sign] }, target: { match: [PIC1.face, PIC1.tree, PIC1.name, PIC1.sign, COVER(PIC1.name), COVER(PIC1.sign)] } },
                challenge: { prompt: '정보 조각 세 곳만 가려요. 노란 별은 꾸밈 스티커라 그대로 둬요.', state: { pieces: [PIC1.face, PIC1.tree, PIC1.name, PIC1.sign, PIC1.addr, PIC1.deco] }, target: { match: [PIC1.face, PIC1.tree, PIC1.name, PIC1.sign, PIC1.addr, PIC1.deco, COVER(PIC1.name), COVER(PIC1.sign), COVER(PIC1.addr)] } },
              } },
            { prompt: '현관 사진(가상)에서 주소판(노랑)과 택배 이름표(하양)를 가려요.', state: { pieces: [PIC2.door, PIC2.pot, PIC2.addr, PIC2.label] },
              target: { match: [PIC2.door, PIC2.pot, PIC2.addr, PIC2.label, COVER(PIC2.addr), COVER(PIC2.label)] }, difficulty: 0.25,
              conclude: '사진을 올리기 전에 이름표·학교 표지·주소판처럼 나를 찾을 수 있는 정보를 가려요.' },
            { prompt: '사진 속 친구 얼굴은 왜 가리기보다 먼저 물어봐야 하는지 짝과 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '사진을 올리기 전에 가릴 정보에 표시해요.', options: ['이름표', '학교 표지', '주소판', '하늘'] }] },
        notes: '콜라주 판은 사진을 그리지 못해 미리 놓인 조각을 사진 속 물건으로 정했다(색 뜻은 칠판에). 검정 네모를 정보 조각과 같은 자리에 붙여야 맞는다(보고 따라 만들기 판정).',
      }),
      X('activity.cause-effect', {
        title: '원인과 결과 잇기', method: '원인과 결과 잇기', tool: 'sortboard', minutes: 13,
        levels: { easy: '원인 바구니 둘(주소·동의 없이)에 결과 카드 2장을 넣는다.', base: '원인 바구니 넷에 결과 카드 4장을 넣고, 둘째 문항에서 막는 행동 4장을 나눈다.', challenge: '결과 카드에 넣지 않을 카드가 섞이고, 둘째 문항에서 막는 행동 카드 5장(넣지 않을 카드 섞임)을 나눈다.' },
        activity: {
          title: '올린 것의 원인과 결과', tool: 'sortboard',
          teacher: '"이 바구니에 적힌 것이 원인이에요. 그 원인으로 어떤 결과가 생길까요?" 카드를 넣을 때마다 "~을 올려서 → ~이 생겼다"로 이어 말하게 한다. "학교 이름은 다들 아니까 괜찮아요"라는 말에는 "우리 반 친구는 알지만, 모르는 사람이 학교와 반까지 알면 어떨까요?"라고 되묻는다. 막는 행동은 결과가 생기기 전에 하는 일이라는 점을 짚는다.',
          task: '원인 바구니에 그 원인으로 생길 결과 카드를 넣고, 결과를 막는 행동도 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            { prompt: '원인 바구니에 그 원인으로 생길 결과 카드를 넣어요.', toolOptions: { slots: ['주소를 올렸다', '동의 없이 올렸다', '학교·반을 적었다', '비밀번호를 알려 줬다'], cards: ['찍힌 친구가 속상함', '낯선 사람이 집을 앎', '내 계정에 남이 들어옴', '모르는 사람이 나를 찾음'] },
              target: { sort: { '주소를 올렸다': ['낯선 사람이 집을 앎'], '동의 없이 올렸다': ['찍힌 친구가 속상함'], '학교·반을 적었다': ['모르는 사람이 나를 찾음'], '비밀번호를 알려 줬다': ['내 계정에 남이 들어옴'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '원인 바구니 둘에 결과 카드를 넣어요(카드 2장).', toolOptions: { slots: ['주소를 올렸다', '동의 없이 올렸다'], cards: ['찍힌 친구가 속상함', '낯선 사람이 집을 앎'] }, target: { sort: { '주소를 올렸다': ['낯선 사람이 집을 앎'], '동의 없이 올렸다': ['찍힌 친구가 속상함'] } } },
                challenge: { prompt: '원인 바구니에 결과 카드를 넣어요(카드 5장, 넣지 않을 카드도 있어요).', toolOptions: { more: ['지우면 아무 일 없음'] } },
              } },
            SB('결과를 막는 행동을 알맞은 때 바구니에 나누어요.', { slots: ['글을 올리기 전', '친구 사진 올리기 전'], groups: { '글을 올리기 전': ['동네·학교 이름 빼기', '만나는 곳은 따로 말하기'], '친구 사진 올리기 전': ['찍힌 친구에게 묻기', '싫다면 올리지 않기'] }, easy: 2, traps: ['올리고 나중에 지우기'] }, 0.25,
              { conclude: '주소·학교·사진은 올리는 순간 결과가 시작돼요. 올리기 전에 빼고, 묻고, 멈춰요.' }),
            { prompt: '모둠에서 결과가 가장 오래 남을 원인 하나를 골라 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인에 맞는 결과를 써요.', columns: ['원인', '생길 수 있는 결과'], cells: [['주소를 올렸다', ''], ['동의 없이 사진을 올렸다', '']] }] },
        notes: '카드 한 장의 정답 칸은 하나라 원인을 바구니 이름으로 두고 결과 카드를 넣어 짝을 짓는다.',
      }),
      X('activity.safe-steps', {
        title: '올리기 전 3단계 차례', method: '올리기 전 3단계 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(정보 확인 → 묻기 → 공개 범위)의 차례를 놓는다.', base: '카드 4장(올린 뒤 살피기 더함)의 차례를 놓고, 둘째 문항에서 한결(가상)의 차례에 빠진 단계를 찾는다.', challenge: '카드 4장과 틀린 카드 하나(일단 올리고 보기)를 가려 차례를 놓고, 셋째 문항에서 내 단계를 하나 더 만든다.' },
        activity: {
          title: '올리기 전 차례 놓기', tool: 'timeline',
          teacher: '"올리기 전에 할 일을 먼저부터 나중까지 놓아 볼까요?" 카드를 놓을 때마다 왜 그 자리인지 말하게 한다. "공개 범위만 정하면 돼요"라는 말에는 "정보를 먼저 보지 않으면 무엇을 가릴지 어떻게 알까요? 찍힌 친구가 싫다고 하면요?"라고 되묻는다. 둘째 문항에서는 빠진 단계 때문에 생길 일을 함께 말한다.',
          task: '올리기 전에 할 일 카드를 먼저부터 나중까지 차례대로 놓고, 빠진 단계를 찾아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('올리기 전에 할 일 카드를 차례대로 놓아요.', ['담긴 정보 확인하기', '찍힌 사람에게 묻기', '공개 범위 정하기', '올린 뒤 반응 살피기'], { mode: 'order', trap: '일단 올리고 보기', opt: { axis: ['먼저', '나중'] } }, 0.2),
            { prompt: '한결(가상)은 정보 확인 → 공개 범위 → 올리기로 했어요. 빠진 단계를 골라요.', toolOptions: { mode: 'pick', basket: '빠진 단계', cards: ['공개 범위 정하기', '찍힌 사람에게 묻기', '담긴 정보 확인하기'] }, target: { pick: ['찍힌 사람에게 묻기'] }, difficulty: 0.2,
              conclude: '정보 확인 → 찍힌 사람에게 묻기 → 공개 범위 정하기. 하나라도 빠지면 다른 사람이 다칠 수 있어요.' },
            { prompt: '모둠에서 올리기 전 내 단계를 하나 더 만들어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '올리기 전 단계를 차례대로 써요.', columns: ['1', '2', '3'], cells: [['', '', '']], answer: '정보 확인, 찍힌 사람에게 묻기, 공개 범위 정하기' }] },
      }),
      X('wrap.rule-write', {
        title: '나의 공유 약속 쓰기', method: '나의 공유 약속 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장 이상 쓰고 기준 2개(구체적·친구 마음)를 점검한다.', base: '두 문장 이상 쓰고 기준 3개(구체적·친구 마음·지킬 수 있음)를 점검한다.', challenge: '세 문장 이상 쓰고 한 군데 고쳐 쓴 뒤 기준 4개를 점검한다. 가족에게 알릴 문장은 활동지에 더한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 것을 내가 지킬 공유 약속으로 써 볼까요?" 문장 틀을 칠판에 적어 둔다. "개인정보를 조심하겠다"처럼 쓰는 학생에게 "무엇을 빼고, 누구에게 묻고, 어디에 올릴지가 들어 있나요?"라고 묻는다. 이름·연락처·학교 이름은 쓰지 않는다고 알려 준다. 도전 학생은 활동지에 가족에게 알릴 한 문장을 더 쓰게 한다.',
          exitTicket: [
            RUBX('올리기 전에 지킬 공유 약속을 써요', { topic: '사진이나 글을 올리기 전에 지킬 약속을 써요(이름·연락처·학교 이름은 쓰지 않아요).', starter: '나는 올리기 전에 ___을 확인하고, ___에게 먼저 묻겠다.', crit: ['구체적으로 썼다(무엇을 할지)', '찍힌 친구 마음을 생각했다', '내가 지킬 수 있는 약속이다'], must: [['묻', '허락']], chars: [20, 180], title: '나의 공유 약속', sents: [1, 2, 3] }),
            { type: 'choice', prompt: '"지우면 처음부터 없던 것이 된다"에 알맞은 생각은?', options: ['맞다, 지우면 끝이다', '저장한 사람이 있으면 지워도 남는다', '아무도 안 봤으면 괜찮다'], answer: 1, difficulty: 0.2, explain: '받은 사람이 저장하거나 다른 곳에 보냈다면 지워도 남아요.' },
          ],
        },
        worksheet: {
          title: '올리기 전에 생각해요',
          items: [
            { type: 'blank', prompt: '내 공유 약속을 써요.', text: '나는 올리기 전에 ___.', answer: '(스스로 씀)' },
            { type: 'short', prompt: '가족에게 알려 주고 싶은 공유 약속 한 문장을 써요.' },
          ],
          easy: { note: '올리기 전에 찍힌 친구에게 먼저 물어요.', items: [{ type: 'draw', prompt: '친구에게 "올려도 돼?" 묻는 장면을 그려요.' }] },
        },
      }),
      X('wrap.tell-adult', {
        title: '퍼졌을 때 도움 받기', method: '퍼졌을 때 도움 받기', tool: 'map', minutes: 6,
        levels: { easy: '학교 도움 지도(장소 2곳, 핀을 놓으면 이름이 보임)에서 상담실에 핀을 꽂는다.', base: '장소 5곳 지도에서 상담실에 핀을 꽂고, 둘째 질문에서 담임 선생님이 있는 교실에 핀을 꽂는다.', challenge: '두 곳에 핀을 꽂은 뒤 셋째 질문에서 집에서 말할 어른을 고른다.' },
        wrap: {
          teacher: '"내 사진이나 글이 원치 않게 퍼졌다면 혼자 지우려 애쓰기보다 누구에게 말할까요?" 지도에서 상담실과 교실을 함께 짚는다. "혼날까 봐 말 못 하겠어요"라는 말에는 "말한 사람은 잘한 거예요. 빨리 말할수록 어른이 더 많이 도울 수 있어요"라고 말해 준다. 학교마다 상담실 자리가 다르니 우리 학교에 맞게 바꾸어 말한다.',
          exitTicket: [
            MAPX('사진이 원치 않게 퍼졌어요. 상담 선생님께 말할 곳에 핀을 꽂아요.', '우리 학교 도움 지도(가상)', SCHOOL, '상담실', { easyKeep: ['상담실', '운동장'] }),
            MAPX('담임 선생님께 먼저 알리려 해요. 담임 선생님이 있는 곳에 핀을 꽂아요.', '우리 학교 도움 지도(가상)', SCHOOL, '교실', { easyKeep: ['교실', '도서관'] }),
            { type: 'choice', prompt: '집에서 퍼진 사진 이야기를 먼저 말할 사람은?', options: ['보호자', '단체방의 모르는 사람', '아무에게도 안 말함'], answer: 0, difficulty: 0.1, explain: '집에서는 보호자에게 말해 함께 방법을 찾아요.' },
          ],
        },
        worksheet: {
          title: '퍼졌을 때 말해요',
          items: [
            { type: 'table', prompt: '도움을 청할 곳과 사람을 써요.', columns: ['학교에서', '집에서'], cells: [['', '']] },
            { type: 'short', prompt: '도움을 청할 때 할 첫마디를 써요.' },
          ],
          easy: { note: '혼자 지우려 하지 말고 어른께 말해요.', items: [{ type: 'draw', prompt: '선생님께 말하러 가는 내 모습을 그려요.' }] },
        },
        notes: '지도는 가상 학교다. 우리 학교의 상담실 위치로 바꾸어 안내한다.',
      }),
    );
  }

  // ======== 6학년 · 바로 답해야 할 것 같은 마음 (research-mandatory §2 초: 예절 — 답장 압박은 일반 지식, 근거 약함) ========
  {
    const X = mk('chat-pressure', 6);
    // 갈림길: 가족 저녁 시간에 "너만 왜 답 안 해?"
    const DINNER = [
      { text: '가족과 저녁을 먹는 중이에요. 단체방에 "너만 왜 답 안 해?"라는 말이 왔어요.', motif: 'house',
        good: ['later', '저녁을 다 먹고 나서 답한다', '가족과 이야기를 끝까지 나눠요.', [['가족', '함께 저녁을 먹어요', 1], ['나', '마음이 차분해요', 1]]],
        bad: ['rush', '밥 먹다 말고 길게 답한다', '가족 이야기를 놓치고 밥이 식어요.', '바로 답하지 않아도 친구를 무시하는 게 아니에요.', [['가족', '서운해요', -1]]],
        mid: ['leave', '말없이 단체방을 나가 버린다', '친구들이 "왜 나갔지?" 하며 걱정해요.', '불편한 마음은 이해해요. 말없이 나가면 오해가 커져요.', [['친구들', '오해해요', -1]]] },
      { text: '저녁 뒤 단체방을 보니 한 친구가 "무시하냐?"라고 했어요.', motif: 'moon',
        good: ['explain', '"저녁 먹느라 늦었어" 하고 쉬는 시간 약속을 제안한다', '친구가 "아, 그랬구나. 좋아" 해요.', [['친구', '오해가 풀려요', 1], ['단체방', '약속이 생겨요', 1]]],
        bad: ['angry', '"왜 재촉해?" 하고 화를 낸다', '단체방 분위기가 차가워져요.', '화내기보다 사정을 알리면 오해가 풀려요.', [['친구', '속상해요', -1]]] },
    ];
    const DINNER_R = [
      { id: 'rest', text: '누구에게나 쉬는 시간이 있다' },
      { id: 'notignore', text: '늦은 답장은 무시가 아니다' },
      { id: 'tell', text: '사정을 알리면 오해가 풀린다' },
      { id: 'ignore', text: '답장을 늦게 하면 친구를 무시하는 것이다', why: '바쁘거나 쉬는 중일 수 있어요. 늦은 답장은 무시가 아니에요.' },
      { id: 'always', text: '단체방은 늘 바로 봐야 한다', why: '늘 바로 보려면 가족·잠·공부 시간을 잃어요.' },
    ];
    // 역할놀이 말풍선(story fill): [누가, 말풍선('___' 자리), 넣을 카드]
    const TALK = [
      ['나리', '늦게 봐서 미안, ___.', '저녁 먹었어'],
      ['다온', '괜찮아, ___.', '쉬는 시간이었구나'],
      ['나리', '다음엔 ___ 미리 말할게.', '저녁 시간이라고'],
      ['다온', '좋아, 우리 ___ 정하자.', '조용한 시간'],
      ['한결', '나는 ___ 조금 서운했어.', '답이 없어서'],
      ['나리', '말해 줘서 고마워. ___.', '다음엔 알려 줄게'],
    ];
    const FILL = (prompt, list, traps, d, more) => {
      const sl = list.map(([who, label], i) => ({ id: `b${i + 1}`, who, label }));
      const cards = (n) => { const c = list.slice(0, n).map(([, , x]) => x).reverse(); c.splice(1, 0, ...traps); return c; };
      const tg = (n) => ({ fill: Object.fromEntries(list.slice(0, n).map(([, , x], i) => [`b${i + 1}`, x])) });
      return Object.assign({ prompt, toolOptions: { mode: 'fill', title: '늦은 답장 역할놀이(지어낸 이야기)', slots: sl.slice(0, 4), cards: cards(4) }, target: tg(4), difficulty: d,
        levels: {
          easy: { prompt: `${cut(prompt)}(말풍선 둘).`, toolOptions: { slots: sl.slice(0, 2), cards: cards(2) }, target: tg(2) },
          challenge: { prompt: `${cut(prompt)}(서운한 친구 말풍선까지 여섯).`, toolOptions: { slots: sl, cards: cards(6) }, target: tg(6) },
        } }, more);
    };
    const VOTE = [['밤 10시 뒤엔 조용히', 12], ['답 재촉하지 않기', 9], ['급한 일은 직접 말하기', 4], ['나갈 땐 인사하기', 6]];
    const PIC = (data, extra = {}) => Object.assign({ type: 'picture', title: '모둠 대화 약속 투표(가상)', unit: '표', xLabel: '약속', yLabel: '표 수', data, icons: [{ value: 5, name: '5표' }, { value: 1, name: '1표' }], icon: 'heart' }, extra);
    M.push(
      X('intro.feel-scale', {
        title: '알림이 50개 쌓였을 때 마음', method: '알림이 50개 쌓였을 때 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 서연의 마음 하나(걱정)를 짚어 주고 크기를 함께 고른다.', base: '서연의 마음 둘(걱정·조급함)을 말하고 걱정의 크기 눈금을 고른다.', challenge: '크기를 고른 뒤 그 마음이 생긴 까닭(놓칠까 봐·답해야 할 것 같아서)을 말한다.' },
        intro: {
          teacher: '"가상 인물 서연이 학원 끝나고 폰을 켜니 단체방 알림이 50개 쌓여 있어요. 서연은 얼마나 걱정될까요?" 시연 단추로 눈금이 2에서 4로 올라가는 모습을 보인다. "50개면 다 읽고 바로 답해야 해요"라는 말이 나오면 "꼭 지금 다 읽어야 할까요? 서연이 걱정하는 진짜 까닭은 무엇일까요?"라고 되묻는다. 오늘은 놓칠까 불안한 마음과 서로의 쉬는 시간을 다룬다고 밝힌다.',
          student: '알림 50개를 본 서연의 마음 크기를 1~5에서 골라 보아요. 서연이 그렇게 느낀 까닭을 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '학원 끝나고 보니 단체방 알림이 50개 쌓였어요', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 2 }, { level: 4 }] },
          art: art('a paper girl with a school bag looking at a paper phone covered with a tall stack of small paper message bubbles', '알림 50개, 어떤 마음?', 'cloud', 'lavender'),
        },
        notes: '서연은 지어낸 인물이다. 학생에게 자기 단체방 알림 수를 말하게 하지 않는다.',
      }),
      X('intro.chat-graph', {
        title: '시간대별 메시지 그래프', method: '시간대별 메시지 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 가장 높은 막대(밤 9시) 하나만 짚어 읽게 한다.', base: '밤 시간(9시·11시) 막대를 더해 밤에 온 메시지 수(33개)를 말한다.', challenge: '그래프를 근거로 단체방 \'조용한 시간\'을 언제로 정하면 좋을지 말한다.' },
        intro: {
          teacher: '"이 막대그래프는 지어낸 6학년 단체방에 시간대별로 온 메시지 수를 센 가상 자료예요. 가장 많은 때는 언제일까요?" 시연 단추로 밤 9시를 고르는 모습을 보인다. "밤에 많으니 밤에 꼭 봐야 해요"라는 말에는 "그 시간은 씻고 잘 준비하는 때예요. 모두가 밤에 보내니 모두가 못 쉬는 건 아닐까요?"라고 되묻는다. 수치는 가상이라고 꼭 밝힌다.',
          student: '그래프에서 메시지가 가장 많은 때를 찾고, 그때 친구들은 무엇을 하고 있어야 할지 짝에게 말해 보아요.',
          demo: CHART('bar', '단체방 시간대별 메시지 수(가상)', [['오후 4시', 6], ['저녁 7시', 10], ['밤 9시', 18], ['밤 11시', 15]], '가장 많은 때는?', 2, { unit: '개', xLabel: '시간대', yLabel: '메시지 수' }),
          art: art('a paper bar chart where the night bars are tallest, a paper moon and stars above them, small paper chat bubbles', '메시지는 언제 많을까?', 'moon', 'lavender'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.reply-choice', {
        title: '답장 갈림길', method: '답장 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(저녁 중 답할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("무시하냐?"라는 말)을 지나 근거를 고른다.', challenge: '갈림 2번을 지나 근거를 모두 고르고, 서로 다른 끝 장면 세 곳을 가 보며 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 저녁 시간의 단체방', tool: 'dilemma',
          teacher: '"가족과 저녁을 먹는데 \'너만 왜 답 안 해?\'라는 말이 왔어요. 지금 꼭 답해야 할까요?" 고를 때마다 가족과 친구에게 미친 영향을 소리 내어 읽게 한다. "답장을 늦게 하면 친구를 무시하는 거예요"라는 말에는 "저녁 먹느라 못 본 건 무시일까요? 사정을 알리면 어떻게 될까요?"라고 되묻는다. 말없이 나가는 길은 마음은 이해하지만 오해가 커진다는 점을 짚는다.',
          task: '갈림길마다 고르고 결과를 읽은 뒤, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '저녁 시간의 단체방',
            steps: DINNER, depth: [1, 2, 2],
            ending: '저녁을 지키고 사정을 알린 덕분에 오해 없이 쉬는 시간 약속이 생겼어요.',
            reasons: DINNER_R,
            good: ['rest', 'notignore', 'tell'],
            talk: '모둠에서 "답이 늦은 친구에게 해 줄 말"을 하나씩 말해요.',
            conclude: '바로 답하지 않아도 무시가 아니에요. 쉬는 시간을 지키고, 늦으면 사정을 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '답장이 늦은 것은 친구를 ___ 것이 아니에요.', answer: '무시하는' }] },
        notes: '갈림 2번까지인 나무라 도전은 근거를 모두 고르고 끝 장면 세 곳을 견주는 것으로 했다.',
      }),
      X('activity.quiet-clock', {
        title: '대화방 조용한 시간 정하기', method: '대화방 조용한 시간 정하기', tool: 'clock', minutes: 14,
        levels: { easy: '조용한 시간 시작(밤 9시)과 끝(아침 7시)을 정각으로 맞춘다.', base: '시작(9시 30분)과 끝(7시 30분)을 10분 단위로 맞추고, 셋째 문항에서 다른 모둠 시각을 읽는다.', challenge: '시험 기간 시작 시각(8시 50분)도 맞추고, 그 시각으로 정한 이유를 모둠이 말한다.' },
        activity: {
          title: '조용한 시간 시계로 정하기', tool: 'clock',
          teacher: '"우리 모둠 단체방에 \'조용한 시간\'을 정한다면 언제 시작해서 언제 끝날까요?" 모둠이 정한 까닭(씻기·잠·가족 시간)을 먼저 말한 뒤 시계로 만들게 한다. "조용한 시간엔 급한 일도 못 알려요"라는 말에는 "정말 급한 일은 직접 말하거나 보호자를 통해 알리면 돼요"라고 말해 준다. 가족마다 잠자는 시각이 다르니 교구는 수업용 약속 시각으로 연습한다고 밝힌다.',
          task: '수업용 약속(밤 9시 30분 ~ 아침 7시 30분)을 시계로 만들고, 다른 모둠의 시각을 읽은 뒤 우리 모둠 이유를 말해요.', levels: { easy: { hourOnly: true }, base: {}, challenge: {} },
          items: [
            { prompt: '단체방 조용한 시간이 시작하는 밤 9시 30분을 시계로 만들어요.', toolOptions: { minuteStep: 10, start: { h: 8, m: 0 } }, target: { h: 9, m: 30 }, difficulty: 0.15,
              levels: {
                easy: { prompt: '단체방 조용한 시간이 시작하는 밤 9시를 시계로 만들어요.', target: { h: 9, m: 0 } },
                challenge: { prompt: '시험 기간엔 조용한 시간을 40분 당겨요. 시작 시각을 만들어요.', target: { h: 8, m: 50 } },
              } },
            { prompt: '조용한 시간이 끝나는 아침 7시 30분을 시계로 만들어요.', toolOptions: { minuteStep: 10, start: { h: 6, m: 0 } }, target: { h: 7, m: 30 }, difficulty: 0.15,
              levels: { easy: { prompt: '조용한 시간이 끝나는 아침 7시를 시계로 만들어요.', target: { h: 7, m: 0 } } } },
            { prompt: '다른 모둠의 조용한 시간 시작 시각이에요. 몇 시 몇 분인지 골라요.', toolOptions: { readOnly: true, start: { h: 10, m: 10 }, choices: ['10시 10분', '2시 50분', '11시 10분'] }, target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { prompt: '다른 모둠의 조용한 시간 시작 시각이에요. 몇 시인지 골라요.', toolOptions: { hourOnly: true, start: { h: 10, m: 0 }, choices: ['10시', '12시 50분', '11시'] }, target: { pick: 0 } } },
              conclude: '조용한 시간을 정해 두면 서로의 잠·가족 시간을 지키고, 답이 없어도 오해하지 않아요.' },
            { prompt: '우리 모둠이 그 시각을 고른 이유를 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 단체방 조용한 시간을 써요.', columns: ['시작', '끝', '이유'], cells: [['', '', '']] }] },
        notes: '시각 값은 수업용 약속이다. 모둠마다 정한 시각은 활동지에 쓴다.',
      }),
      X('activity.role-script', {
        title: '역할놀이: 늦은 답장', method: '역할놀이: 늦은 답장', tool: 'story', minutes: 13,
        levels: { easy: '말풍선 둘(나리·다온)에 알맞은 말 카드를 넣는다.', base: '말풍선 넷에 말 카드를 넣고(헷갈리는 카드 섞임) 짝과 역할놀이한다.', challenge: '서운한 친구(한결) 말풍선까지 여섯을 채우고, 서운한 마음을 받아 주는 말로 역할놀이한다.' },
        activity: {
          title: '늦은 답장 말풍선 채우기', tool: 'story',
          teacher: '"나리는 저녁 먹느라 답이 늦었어요. 다온은 어떻게 대답하면 좋을까요?" 말풍선을 채운 뒤 짝과 소리 내어 읽게 한다. "\'왜 재촉해?\'라고 해야 다음에 안 그래요"라는 말에는 "그 말을 들은 친구 마음은 어떨까요? 사정을 알리고 약속을 정하면 어떨까요?"라고 되묻는다. 도전에서는 서운하다는 친구의 말을 탓하지 않고 받아 주게 한다.',
          task: '늦은 답장 이야기의 말풍선 빈칸에 알맞은 말 카드를 넣고, 짝과 역할을 나눠 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            FILL('늦은 답장 이야기의 말풍선에 알맞은 말 카드를 넣어요.', TALK, ['왜 재촉해?'], 0.2),
            { prompt: '다온이 답이 늦은 나리에게 할 말로 알맞은 카드를 골라 담아요.', toolOptions: { mode: 'pick', basket: '다온이 할 말', cards: ['쉬는 시간이었구나', '무시한 거 맞지?', '나중에 이야기하자', '너만 늘 늦어'] }, target: { pick: ['쉬는 시간이었구나', '나중에 이야기하자'], some: true }, difficulty: 0.15,
              conclude: '늦게 답하면 사정을 알리고, 늦은 답을 받으면 쉬는 시간이었다고 받아 줘요.' },
            { prompt: '짝과 나리·다온 역할을 바꾸어 말풍선을 소리 내어 읽어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '답이 늦은 친구에게 해 줄 말을 한 문장으로 써요.' }] },
      }),
      X('activity.rule-vote', {
        title: '모둠 대화 약속 투표', method: '모둠 대화 약속 투표', tool: 'chart', minutes: 14,
        levels: { easy: '약속 셋의 표를 그림그래프로 그리고(첫 줄은 그려 줌) 1등을 읽는다.', base: '약속 넷의 표를 그림그래프로 그리고 1·2등을 읽는다.', challenge: '그래프를 그리고 1·2등을 읽은 뒤, 표가 가장 적은 약속을 고칠 방법을 모둠이 말한다.' },
        activity: {
          title: '대화 약속 그림그래프', tool: 'chart',
          teacher: '"가상 모둠이 대화 약속 네 가지에 붙임 표를 붙였어요. 하트 큰 것은 5표, 작은 것은 1표예요." 큰 그림부터 그리게 한다. "표가 적은 약속은 나쁜 약속이에요"라는 말에는 "왜 표가 적었을까요? 말이 어렵거나 지키기 힘들어서일 수 있어요. 고치면 좋아질까요?"라고 되묻는다. 우리 모둠의 실제 표는 활동지 표에 적는다.',
          task: '가상 모둠의 대화 약속 투표 결과로 그림그래프를 그리고, 1등과 2등 약속을 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 대화 약속 투표 그림그래프를 완성해요(가상 자료).', toolOptions: PIC(VOTE, { mode: 'build', given: [0] }), target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '약속 셋의 투표 그림그래프를 완성해요(가상 자료).', toolOptions: { data: VOTE.slice(0, 3) } } } },
            { prompt: '표를 가장 많이 받은 1등 약속은 무엇인가요?(가상 자료)', toolOptions: PIC(VOTE, { mode: 'read', question: '1등 약속은?', choices: VOTE.map(([n]) => n) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '세 약속 가운데 1등 약속은 무엇인가요?(가상 자료)', toolOptions: { data: VOTE.slice(0, 3), choices: VOTE.slice(0, 3).map(([n]) => n) } } } },
            { prompt: '두 번째로 표를 많이 받은 2등 약속은 무엇인가요?(가상 자료)', toolOptions: PIC(VOTE, { mode: 'read', question: '2등 약속은?', choices: VOTE.map(([n]) => n) }), target: { pick: 1 }, difficulty: 0.2,
              levels: { easy: { prompt: '세 약속 가운데 2등 약속은 무엇인가요?(가상 자료)', toolOptions: { data: VOTE.slice(0, 3), choices: VOTE.slice(0, 3).map(([n]) => n) } } },
              conclude: '표가 많은 약속은 모둠이 함께 지키기로 한 약속이에요. 표가 적은 약속은 말을 고쳐 다시 물어봐요.' },
            { prompt: '표가 가장 적은 약속을 고칠 방법을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 대화 약속 투표 결과를 써요.', columns: ['약속', '표 수'], cells: [['', ''], ['', ''], ['', '']] }] },
        notes: '투표 수치는 수업용 가상 자료다. 우리 모둠의 실제 표는 활동지에 적고, 칠판에 그림그래프를 함께 그려도 좋다.',
      }),
      X('wrap.rule-poster', {
        title: '우리 반 대화 약속 포스터', method: '우리 반 대화 약속 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '조각 3개 이상(시계 동그라미)으로 꾸미고 점검 2칸에 표시한다.', base: '조각 5개 이상(시계·달)으로 꾸미고 약속 하나를 활동지에 쓴 뒤 점검 3칸에 표시한다.', challenge: '조각 5개 이상으로 꾸미고 약속 둘과 동생 반에 알릴 문구까지 활동지에 쓴 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"1·2등 약속을 우리 반 단체방 포스터로 만들어 볼까요? 동그라미는 시계, 반원은 달로 꾸며요." 약속 글은 판에 붙일 수 없어 활동지에 쓰게 한다. "포스터는 예쁘기만 하면 돼요"라는 말에는 "보는 친구가 무엇을 하면 되는지 알 수 있나요? 약속 글이 잘 보이게 써요"라고 되묻는다. 출구 2번에서 \'답 안 하면 무시\'를 고른 학생에게 늦은 답장은 무시가 아니라고 다시 짚는다.',
          exitTicket: [
            COLX('대화 약속 포스터를 시계·달 조각으로 꾸미고 점검해요.', ['시계(동그라미) 조각을 붙였다', '달(반원) 조각을 붙였다', '약속 글을 활동지에 썼다', '동생 반에 알릴 문구를 썼다']),
            { type: 'choice', prompt: '우리 반 대화 약속으로 알맞지 않은 것은?', options: ['밤 10시 뒤엔 조용히', '답 안 하면 무시한 것으로 보기', '급한 일은 직접 말하기'], answer: 1, difficulty: 0.15, explain: '늦은 답장은 무시가 아니에요. 쉬는 시간을 서로 지켜 줘요.' },
          ],
        },
        worksheet: {
          title: '우리 반 대화 약속',
          items: [
            { type: 'short', prompt: '포스터에 넣을 우리 반 대화 약속 둘을 써요.' },
            { type: 'short', prompt: '동생 반에도 알릴 쉬운 문구 하나를 써요.' },
          ],
          easy: { note: '늦은 답장은 무시가 아니에요.', items: [{ type: 'draw', prompt: '조용한 시간을 나타내는 시계와 달을 그려요.' }] },
        },
        notes: '콜라주는 글자를 붙이지 못해 약속 글은 활동지에 쓰고, 판에는 시계(동그라미)·달(반원) 조각으로 꾸민다.',
      }),
      X('wrap.help-who', {
        title: '마음이 계속 불편하면', method: '마음이 계속 불편하면', tool: 'sortboard', minutes: 6,
        levels: { easy: '말할 사람 카드 2장(보호자·담임 선생님)을 집·학교 바구니에 넣는다.', base: '말할 사람 카드 3장(상담 선생님 더함)을 넣는다.', challenge: '넣지 않을 카드(모르는 사람·혼자 참기)를 가려 넣고, 둘째 질문에서 첫마디 카드를 고른다.' },
        wrap: {
          teacher: '"단체방 때문에 며칠째 불안하거나 속상하면 누구에게 말할까요?" 바구니에 넣을 때마다 그 사람이 어떻게 도울 수 있는지 말하게 한다. "이런 건 혼자 참아야 해요"라는 말에는 "혼자 참으면 마음이 더 무거워져요. 말하는 건 약한 게 아니라 나를 지키는 방법이에요"라고 말해 준다. 학교마다 상담 선생님을 만나는 곳이 다르니 우리 학교에 맞게 알려 준다.',
          exitTicket: [
            EX('sortboard', SB('단체방 때문에 마음이 계속 불편할 때 말할 사람을 바구니에 넣어요.', { slots: ['집에서 말할 사람', '학교에서 말할 사람'], groups: { '집에서 말할 사람': ['보호자'], '학교에서 말할 사람': ['담임 선생님', '상담 선생님'] }, easy: 2, traps: ['단체방의 모르는 사람', '혼자 참기'] }, 0.1)),
            { type: 'choice', prompt: '상담 선생님께 할 첫마디로 알맞은 것은?', options: ['"요즘 단체방 때문에 잠이 잘 안 와요"', '"아무 일도 없어요"', '"그 친구 혼내 주세요"'], answer: 0, difficulty: 0.15, explain: '무엇 때문에 어떤 마음인지 말하면 도움을 받기 쉬워요.' },
          ],
        },
        worksheet: {
          title: '말하면 가벼워져요',
          items: [
            { type: 'table', prompt: '마음이 계속 불편할 때 말할 사람을 써요.', columns: ['집에서', '학교에서'], cells: [['', '']] },
            { type: 'short', prompt: '도움을 청할 때 할 첫마디를 써요.' },
          ],
          easy: { note: '혼자 참지 말고 어른께 말해요.', items: [{ type: 'draw', prompt: '어른께 마음을 말하는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
