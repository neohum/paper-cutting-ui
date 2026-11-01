/* 창체 계기교육 기념일 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 days 초5-6.
 * 근거: sources/changche/research-days.md(총괄표·학습 주제 제안·논쟁적인 날 처리 지침), 기존 g5·g6-cc-days 차시의 사실, 추가 지침 framework/BRIEF_EVENTS.md.
 * 날짜: 「국경일에 관한 법률」(3·1절·광복절·개천절·한글날·제헌절), 「각종 기념일 등에 관한 규정」(과학의 날·5·18·현충일·6·25·6·10·학생독립운동기념일).
 *   지구의 날(4.22)은 법정기념일이 아니다 — 환경·지속가능발전 범교과 연계로만 다룬다.
 * 초5-6 기준: 자료 읽기·사실과 해석 가리기·원인과 결과·자기 점검·작은 실천 계획·모둠 토의. 학생 글에는 법 조문 번호(제N조)를 쓰지 않는다
 *   (헌법·교육기본법은 '맨 앞 조문'·'교육 이념 조문'으로 부른다). 그래프·투표 수치는 모두 '가상'이라고 화면에 적는다. 가상 인물은 가명 한두 글자.
 * 정치적 중립: 정당·현재 정치인·현 정부 정책을 다루지 않는다. 사건의 평가는 교과서 서술 범위(해석이 갈리면 정답을 정하지 않는 말하기 문항).
 *   다른 나라·민족을 미워하게 하는 표현을 쓰지 않는다. 희생은 폭력 묘사 없이 추모·의미 중심. 학생의 가족사·개인 견해는 묻지도 채점하지도 않는다.
 * 주제 10개 × (5학년 도입 1·활동 2·정리 1 + 6학년 도입 1·활동 2·정리 1) = 계획 모듈 80개 전부. 추천 조합은 체계도 sequences(학년마다 10차시).
 *
 * 사람 확인: (모두 research-days.md 본문에 없고 기존 g5·g6 차시에서 가져온 사실 — 발행 전 공식 자료와 대조한다)
 *  - march1(전 모듈): 독립 선언서 첫 문장 풀이(조선의 독립국·조선인의 자주민 선언)·공약 삼장의 '질서 존중' — 국가보훈부·독립기념관.
 *    대한민국 임시 헌장 제1조 '민주공화제'(1919.4) — 국사편찬위원회. 현행 헌법 전문 '3·1운동으로 건립된 대한민국임시정부의 법통' — 국가법령정보센터.
 *    3·1운동이 중국 5·4 운동 등 아시아 민족 운동에 영향(evidence6) — 국사편찬위원회·교과서 서술.
 *  - science: 봉수(낮 연기·밤 횃불), 과학의 날 4.21 — 과학기술정보통신부. 통신 수단 차례(봉수→유선 전화→휴대 전화→영상 통화)는 큰 차례만.
 *  - earth: 지구의 날 4.22·1970년 시작 — 환경부. 탄소 중립의 뜻(배출을 줄이고 남은 만큼 흡수해 실제 배출 0) — 환경부·2050 탄소중립녹색성장위원회.
 *  - may18: 1995 5·18 특별법 제정, 1997 국가 기념일 지정, 2011 기록물 유네스코 세계기록유산 등재 — 국가보훈부·5·18기념재단·5·18민주화운동기록관.
 *    4·19혁명(1960)·6월 민주항쟁(1987)의 요구(부정 선거 반대 / 대통령 직선제), 5·18 정신 표현(민주·인권·나눔과 연대·평화) — 각 기념재단.
 *    헌법 전문 '불의에 항거한 4·19민주이념' — 국가법령정보센터.
 *  - june: 1950.6.25 전쟁 시작, 1950.9.15 인천 상륙 작전, 1950.10 중국군 참전, 1951.1.4 1·4 후퇴, 1953.7.27 정전 협정(판문점),
 *    군사 분계선 남북 각 2km 비무장 지대 — 국가보훈부·국방부 군사편찬연구소. 정전·휴전·종전 낱말 풀이 — 국립국어원 표준국어대사전.
 *    국가보훈 세 갈래(독립·호국·민주), 국립서울현충원·국립대전현충원·부산 유엔기념공원·광주 국립5·18민주묘지, 현충일 오전 10시 묵념 — 국가보훈부.
 *  - june10: 1987년 1월 박종철 사건, 6.10 국민 대회, 6.29 직선제 수용 발표, 10월 헌법 개정, 12월 대통령 직접 선거 — 민주화운동기념사업회.
 *    헌법 제1조 1·2항 문구 — 국가법령정보센터.
 *  - liberation: 1919 임시 정부 수립(상하이), 1920 봉오동(홍범도)·청산리(김좌진) 전투, 1932 이봉창(도쿄)·윤봉길(상하이 훙커우 공원) 의거,
 *    김구의 한인 애국단, 1940 한국광복군 창설, 충칭 임시정부 청사 — 국가보훈부·독립기념관. 1945.9 38도선 분단, 1948.5.10 총선거,
 *    1948.7.17 헌법 공포, 1948.8.15 정부 수립 — 국사편찬위원회. 다섯 국경일과 기념하는 일 — 행정안전부.
 *  - foundation: 8조법 세 조항 내용과 해석(생명 중시·사유 재산·신분 차이), 단군·왕검 이름 풀이 — 국사편찬위원회·교과서.
 *    교육기본법 교육 이념 조문 문구(홍익인간·인격 도야·자주적 생활능력·민주시민·인류공영) — 국가법령정보센터.
 *  - hangul: 훈민정음 서문 풀이(중국과 달라 서로 통하지 않음·불쌍히 여겨·스물여덟 자·쉽게 익혀 편히), 1446 반포,
 *    모음은 하늘·땅·사람을 본떠 합침, 자음 기본 글자 다섯에 획을 더함(가획) — 국립국어원·국립한글박물관.
 *    다듬은 말(스크린도어→안전문, 키오스크→무인 안내기, 굿즈→기획 상품) — 국립국어원 '다듬은 말'.
 *  - student: 1929 광주에서 시작해 전국으로 퍼짐, 1926 6·10 만세 운동(순종 장례일), 학생들의 요구(식민지 교육 반대·민족 차별 반대·
 *    학생 자치권·언론·집회의 자유)의 정확한 목록 — 국가보훈부·광주학생독립운동기념회관·전북교육청 2015 자료.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('march1', 5)('intro.first5', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `days.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'days', band: '초5-6', topic: `days.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const inter = (slots, g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };

  // ---- 도입: 가상 반 투표 그림그래프(chart picture read) ----
  const VOTE = (title, data, question, pick, icon = 'person') => ({
    tool: 'chart',
    options: { type: 'picture', mode: 'read', title, unit: '명', xLabel: '고른 것', yLabel: '친구 수', data, icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon, question, choices: data.map((x) => x[0]) },
    sequence: [{ pick }],
  });
  // ---- 도입: 낱말 카드 고르기(wordcards pick) ----
  const WPICK = (basket, cards, steps) => ({ tool: 'wordcards', options: { mode: 'pick', basket, cards, shuffle: false }, sequence: steps.map((pick) => ({ pick })) });

  // ---- 분류판(sortboard 글 카드) ----
  // groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장(instant·showCount), 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SB = (prompt, { slots, groups, easy = 2, extra = {}, traps = [] }, d, more) => {
    const take = (n) => Object.fromEntries(slots.map((s) => [s, groups[s].slice(0, n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const ez = take(easy);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(slots, ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) {
      const cards = inter(slots, full); cards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) cards.push(traps[1]);
      lv.challenge = { prompt: `${cut(prompt)}(카드 ${cards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards }, target: { sort: full } };
    }
    return Object.assign({ prompt, toolOptions: { slots, cards: inter(slots, groups) }, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // ---- 차례(timeline·story order) ----
  // steps = [[id, 글, 큰 글자?]…](바른 차례). easy = 쉬움에 남길 번호, base = 기본에 남길 번호(없으면 전부), trap = 도전에서 끼우는 틀린 카드
  const ORDER = (prompt, steps, { easy = [0, 1, 2], base, trap, axis, tool = 'timeline', motifs = [], title, hideBig } = {}, d, more) => {
    const card = ([id, text, big], i) => Object.assign({ id, text }, big && !hideBig ? { big } : {}, motifs[i] ? { motif: motifs[i] } : {});
    const all = steps.map(card);
    const pickIdx = (idx) => idx.map((i) => all[i]);
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ax = axis ? { axis } : {};
    const ttl = title ? { title } : {};
    const baseIdx = base || steps.map((_, i) => i);
    const opt = (idx, extra = []) => Object.assign({ slots: idx.length, cards: [...mix(pickIdx(idx)), ...extra] }, tool === 'story' ? { mode: 'order' } : {}, ax, ttl);
    const ids = (idx) => idx.map((i) => steps[i][0]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${easy.length}장).`, toolOptions: opt(easy), target: { order: ids(easy) } } };
    const allIdx = steps.map((_, i) => i);
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(맞지 않는 카드 하나는 빼요).`, toolOptions: opt(allIdx, [{ id: trap[0], text: trap[1] }]), target: { order: ids(allIdx) } };
    else if (baseIdx.length < steps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${steps.length}장).`, toolOptions: opt(allIdx), target: { order: ids(allIdx) } };
    return Object.assign({ prompt, toolOptions: opt(baseIdx), target: { order: ids(baseIdx) }, difficulty: d, levels: lv }, more);
  };
  // ---- 짝 잇기(emotion match · mindmap match · timeline match) ----
  // pairs = [[칸 글, 맞는 카드]…]. 쉬움 = 앞 easy짝, 기본 = 앞 base짝, 도전 = 모든 짝(+함정 카드)
  const MATCH = (prompt, pairs, traps = [], { easy = 2, base = 3, extraOpt = {}, unit = '짝' } = {}, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `p${i + 1}`, label }));
    const opt = (n, tr) => { const cs = pairs.slice(0, n).map(([, c]) => c).reverse(); tr.forEach((t, i) => cs.splice(Math.min(cs.length, 1 + i * 2), 0, t)); return Object.assign({ mode: 'match', slots: sl.slice(0, n), cards: cs }, extraOpt); };
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, c], i) => [`p${i + 1}`, c])) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}${unit}).`, toolOptions: opt(easy, traps.slice(0, 1)), target: tg(easy) } };
    if (pairs.length > base || traps.length > 1) lv.challenge = { prompt: `${cut(prompt)}(${pairs.length}${unit}${traps.length ? ', 남는 카드도 있어요' : ''}).`, toolOptions: opt(pairs.length, traps), target: tg(pairs.length) };
    return Object.assign({ prompt, toolOptions: opt(base, traps.slice(0, 1)), target: tg(base), difficulty: d, levels: lv }, more);
  };
  // 활동 문항 → 출구 질문(교구)
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty }, it.levels ? { levels: it.levels } : {});

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
      { prompt: `‘${title}’ 갈림길마다 알맞은 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 알맞은 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: [good[0]], some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) ----
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 3개, 도전 = 기준 3개 + 고쳐 쓰기 + 꼭 넣을 낱말(challengePrompt 로 도전 글을 바꿀 수 있음)
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title, challengePrompt }, d, more) => ({
    prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: { selfCheck: crit.slice(0, 3), chars }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] } },
      challenge: { prompt: challengePrompt || `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: { selfCheck: [...crit.slice(0, 3), '한 군데 이상 고쳐 썼다'], chars: [chars[0] + 10, chars[1] + 60], mustInclude: must } },
    },
    ...more,
  });
  const RUBX = (prompt, spec) => { const r = RUB(prompt, spec, 0.2); return { type: 'tool', tool: 'rubric-writing', options: r.toolOptions, prompt, target: r.target, difficulty: 0.2, levels: r.levels }; };
  // ---- 정리: 자기 점검표(timer selfCheck) — 쉬움 2칸·기본 3칸·도전 4칸 ----
  const SELF = (title, list, prompt = '오늘 해낸 것에 스스로 표시해요.') => ({
    type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { prompt: `${cut(prompt)}(두 칸).`, target: { selfCheck: list.slice(0, 2) } }, challenge: { prompt: `${cut(prompt)}(네 칸).`, target: { selfCheck: list.slice(0, 4) } } },
  });
  // ---- 정리: 기록판(timer records) — fields = [이름, 단위]…, 쉬움 = 앞 칸 하나 ----
  const REC = (title, fields, prompt, challengeField) => {
    const f = (list) => list.map(([label, unit]) => ({ label, unit }));
    const lv = { easy: { prompt: `${cut(prompt)}(한 칸).`, toolOptions: { fields: f(fields.slice(0, 1)) } } };
    if (challengeField) lv.challenge = { prompt: `${cut(prompt)}(${fields.length + 1}칸).`, toolOptions: { fields: f([...fields, challengeField]) } };
    return { type: 'tool', tool: 'timer', options: { title, fields: f(fields) }, prompt, target: { records: true }, difficulty: 0.1, levels: lv };
  };

  // ======== 3·1절 — 선언서와 3·1 정신 (5학년: 선언서·공약 풀어 쓰기와 헌법 전문까지 / 6학년: 의의의 주장과 근거, 실천) ========
  {
    const X = mk('march1', 5);
    M.push(
      X('intro.first5', {
        title: '선언서 첫 문장, 궁금한 낱말', method: '선언서 첫 문장 듣고 낱말 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(독립국·자주민)만 짚어 그림을 함께 세고 더 많은 쪽을 고른다.', base: '네 줄의 그림을 스스로 세어 가장 많이 고른 낱말을 찾는다.', challenge: '가장 많이 고른 낱말의 뜻을 앞뒤 말로 짐작해 짝에게 말한다.' },
        intro: {
          teacher: '"1919년 3월 1일에 읽은 선언서의 첫 문장을 오늘 말로 읽어 줄게요. \'우리는 우리 조선이 독립국이며 조선 사람이 자주민임을 선언한다.\'" 천천히 두 번 읽고 시연 단추로 가상의 한 반이 \'뜻이 궁금한 낱말\'을 고른 그림그래프를 보인다. 큰 사람 그림 하나는 5명이라고 짚고 함께 센다. "옛글이라 어려우니 몰라도 돼요"라는 말이 나오면 "한 낱말씩 풀면 오늘 말과 같아요. 오늘은 그 낱말을 풀어 봅니다"라고 말한다.',
          student: '그림그래프에서 가장 많이 고른 낱말을 찾고, 그 낱말의 뜻을 짐작해 짝에게 말해 보아요.',
          demo: VOTE('뜻이 궁금한 낱말(가상의 반 투표)', [['독립국', 7], ['자주민', 9], ['선언', 5], ['조선', 2]], '가장 많이 고른 낱말은?', 1),
          art: art('a paper scroll of an old declaration unrolled on a desk, paper children around it pointing at words, a small paper picture graph beside', '선언서 첫 문장을 풀어요', 'star', 'buttercup'),
        },
        notes: '투표 자료는 가상의 반이다. 선언서 첫 문장은 풀어 쓴 말로 읽어 준다(원문은 국가보훈부·독립기념관 자료로 보인다).',
      }),
      X('activity.ease5', {
        title: '선언서·공약 구절 풀어 쓰기', method: '선언서·공약 구절 풀어 쓰기', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀(\'이 구절은 우리나라가 ___는 뜻이다\')에 빈칸만 채우고 기준 2개를 점검한다.', base: '구절 하나를 내 말로 한 문장 풀어 쓰고 기준 3개를 점검한다.', challenge: '선언서와 공약 두 구절을 함께 넣어 두 문장으로 쓰고, 한 군데 고쳐 쓴다.' },
        activity: {
          title: '선언서·공약 풀어 쓰기', tool: 'rubric-writing',
          teacher: '"\'독립국\'은 무슨 뜻일까요? \'스스로 서는 나라\'처럼 오늘 말로 바꾸면 어때요?" 구절을 소리 내어 읽고 낱말 하나씩 바꾸게 한다. 공약의 \'모든 행동은 질서를 존중하여\'를 읽고 "만세 운동을 어떻게 하자는 약속일까요?"라고 묻는다. 3·1운동을 거친 싸움으로 떠올리는 학생에게는 공약이 질서와 평화를 약속했다는 점을 구절로 다시 짚는다.',
          task: '선언서와 공약의 구절을 오늘 말로 풀어 쓰고, 기준표로 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('선언서 구절 "조선이 독립국임을 선언"을 오늘 말로 풀어 한 문장으로 써요.', { topic: '선언서 구절 풀어 쓰기', title: '선언서 풀어 쓰기', starter: '이 구절은 우리나라가 ___는 뜻이다.', crit: ['구절의 뜻을 오늘 말로 썼다', '한 문장으로 썼다', '어려운 낱말을 쉬운 말로 바꾸었다'], must: [['독립', '스스로']], chars: [15, 120] }, 0.25),
            RUB('공약 구절 "모든 행동은 질서를 존중"을 오늘 말로 풀어 한 문장으로 써요.', { topic: '공약 구절 풀어 쓰기', title: '공약 풀어 쓰기', starter: '이 구절은 만세를 부를 때 ___자는 뜻이다.', crit: ['구절의 뜻을 오늘 말로 썼다', '한 문장으로 썼다', '왜 그렇게 약속했는지 짐작해 넣었다'], must: [['질서', '평화']], chars: [15, 120],
              challengePrompt: '선언서의 "독립국"과 공약의 "질서"를 함께 넣어 두 문장으로 풀어 쓰고, 한 군데 고쳐 써요.' }, 0.3),
            { prompt: '짝과 풀어 쓴 문장을 바꿔 읽고, 뜻이 잘 드러난 낱말 하나를 서로 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '공약은 모든 행동에서 ___를 존중하자고 약속했다.', answer: '질서' }] },
        notes: '쓴 글은 채점하지 않고 기준표 자기 점검과 짝 읽기로 확인한다. 이름·연락처는 쓰지 않게 안내한다.',
      }),
      X('activity.chain5', {
        title: '선언서에서 헌법 전문까지', method: '3·1운동→임시 정부 헌장→헌법 전문 잇기', tool: 'timeline', minutes: 13,
        levels: { easy: '자료 카드 2장(독립 선언서·오늘 헌법 전문)을 시간 띠에 놓는다.', base: '자료 카드 3장(선언서·임시 헌장·헌법 전문)을 차례로 놓고, 자료마다 핵심 문장을 잇는다.', challenge: '3장에 맞지 않는 카드(훈민정음 서문)를 섞어 가려 내고, 세 자료의 공통점을 짝에게 설명한다.' },
        activity: {
          title: '선언서·임시 헌장·헌법 전문 잇기', tool: 'timeline',
          teacher: '"1919년 3월의 선언서, 같은 해 4월의 임시 헌장, 오늘의 헌법은 어떤 차례일까요?" 카드를 놓은 뒤 헌법 전문이 \'3·1운동으로 건립된 대한민국임시정부의 법통\'을 잇는다고 쓰고 있음을 읽어 준다. "3·1운동은 실패해서 남긴 것이 없어요"라는 말이 나오면 "그렇다면 오늘 헌법은 왜 3·1운동을 맨 앞에 적었을까요?"라고 되묻는다.',
          task: '세 자료를 만든 차례로 놓고, 자료마다 담긴 핵심 문장을 이어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('세 자료를 만든 차례대로 시간 띠에 놓아요.', [['decl', '독립 선언서', '1919.3'], ['charter', '대한민국 임시 헌장', '1919.4'], ['law', '오늘 헌법 전문', '오늘']], { easy: [0, 2], trap: ['hun', '훈민정음 서문'], axis: ['옛날', '오늘날'] }, 0.25),
            MATCH('자료와 그 자료에 담긴 핵심 문장을 이어요.', [['독립 선언서', '조선이 독립국임을 선언'], ['임시 헌장', '대한민국은 민주공화제'], ['헌법 전문', '3·1운동으로 세운 임시 정부를 이음']], ['왕이 나라를 다스림'], { easy: 2, base: 3, extraOpt: { axis: ['옛날', '오늘날'] } }, 0.3),
            { prompt: '세 자료가 어떻게 이어지는지 공통 낱말 하나를 넣어 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '대한민국 임시 헌장이 정한 나라의 모습은 무엇인가요?', options: ['민주공화제', '왕이 다스리는 나라'], answer: '민주공화제' }] },
        notes: '헌법 전문 구절은 국가법령정보센터 원문을 화면에 띄워 함께 읽는다. 학생 글에는 조문 번호를 쓰지 않는다.',
      }),
      X('wrap.check5', {
        title: '3·1절 배움 자기 점검표', method: '자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(구절 풀기·공약의 뜻)를 표시한다.', base: '점검 칸 3개(차례 잇기까지)를 표시한다.', challenge: '점검 칸 4개를 표시하고 짝과 바꾸어 서로의 점검이 맞는지 한 가지씩 물어본다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 내가 친구에게 설명할 수 있는 것은 무엇인가요?" 점검 칸을 스스로 읽고 표시하게 한 뒤, 도전 학생은 짝 점검을 한다. 출구 2번에서 \'남긴 것이 없다\'를 고른 학생에게는 "오늘 헌법 전문의 첫 구절을 다시 볼까요?"라고 말해 준다.',
          exitTicket: [
            SELF('3·1절 배움 점검', ['선언서 구절을 오늘 말로 풀 수 있다', '공약이 질서와 평화를 약속한 것을 안다', '선언서→임시 헌장→헌법 전문 차례를 안다', '3·1운동이 남긴 것을 하나 말할 수 있다']),
            { type: 'choice', prompt: '"3·1운동은 남긴 것이 없다"는 말에 알맞은 생각은?', options: ['임시 정부와 오늘 헌법 전문으로 이어졌다', '실패했으니 남긴 것이 없다', '잘 모르니 생각하지 않는다'], answer: 0, difficulty: 0.2, explain: '헌법 전문은 3·1운동으로 세운 임시 정부를 잇는다고 적고 있어요.' },
            { type: 'short', prompt: '3·1절에 가족이나 친구에게 알려 주고 싶은 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '선언서에서 헌법까지',
          items: [
            { type: 'table', prompt: '세 자료의 때와 핵심 내용을 정리해요.', columns: ['자료', '때', '핵심 내용'], cells: [['독립 선언서', '', ''], ['대한민국 임시 헌장', '', ''], ['오늘 헌법 전문', '', '']], answer: '1919.3·조선의 독립과 자주 선언 / 1919.4·민주공화제 / 오늘·3·1운동으로 세운 임시 정부를 이음' },
            { type: 'short', prompt: '공약에서 "질서를 존중"하자고 한 까닭을 짐작해 써요.' },
          ],
          easy: { note: '선언서는 "우리나라는 독립한 나라"라고 알린 글이에요.', items: [{ type: 'choice', prompt: '선언서가 알린 것에 ○ 해요.', options: ['우리나라는 독립한 나라', '우리나라는 왕이 다스리는 나라'], answer: '우리나라는 독립한 나라' }] },
        },
      }),
    );
    const Y = mk('march1', 6);
    M.push(
      Y('intro.claim6', {
        title: '3·1운동의 의의, 어떤 주장?', method: '3·1운동 의의 주장 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 주장 카드 두 장을 읽어 주고 확인할 수 있는 쪽을 함께 고른다.', base: '주장 카드 세 장을 고르고 확인하기 어려운 카드 하나를 가려 낸다.', challenge: '고른 주장마다 어떤 자료로 확인할 수 있을지 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"3·1운동을 두고 \'우리 민족 운동의 큰 전환점\'이라고 해요. 이런 주장은 무엇으로 확인할 수 있을까요?" 시연 단추로 근거를 찾을 수 있는 주장 카드가 바구니에 담기는 모습을 보인다. \'날씨가 좋아서 성공했다\' 같은 카드가 나오면 "이 말은 어떤 자료로 확인할까요? 의의는 무엇이 바뀌었는지로 말해요"라고 되묻는다. 오늘은 주장과 근거를 잇는다고 밝힌다.',
          student: '주장 카드 가운데 자료로 확인할 수 있을 것 같은 카드를 골라, 그렇게 생각한 까닭을 짝에게 말해 보아요.',
          demo: WPICK('근거를 찾을 수 있는 주장', ['민족 운동의 전환점이다', '날씨가 좋아 성공했다', '온 겨레가 함께했다', '나라 밖에도 영향을 주었다'], [['민족 운동의 전환점이다'], ['민족 운동의 전환점이다', '온 겨레가 함께했다', '나라 밖에도 영향을 주었다']]),
          art: art('paper claim cards pinned on a board with paper strings leading to small paper document icons as evidence', '주장에는 근거가 따라요', 'star', 'sky'),
        },
      }),
      Y('activity.evidence6', {
        title: '3·1운동 주장과 근거 잇기', method: '주장과 근거 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '주장 2개에 알맞은 근거 카드를 잇는다(남는 카드 1장).', base: '주장 3개에 근거를 잇고, 근거를 확인할 수 있는 근거와 느낌으로 나눈다.', challenge: '주장 4개에 근거를 잇고(남는 카드 2장), 약한 근거를 가려 까닭을 말한다.' },
        activity: {
          title: '주장과 근거 잇기', tool: 'emotion',
          teacher: '"이 근거는 사실인가요? 그리고 정말 이 주장을 받쳐 주나요?" 근거마다 두 가지를 따지게 한다. \'내가 감동받았다\'를 근거로 잇는 학생에게는 "다른 사람도 자료로 확인할 수 있나요?"라고 묻는다. 나라 밖 영향에 대해서는 교과서가 중국 5·4 운동 등 아시아 민족 운동에 영향을 주었다고 서술한다는 점을 알려 준다.',
          task: '3·1운동의 의의에 대한 주장마다 알맞은 근거를 잇고, 약한 근거를 가려내요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('3·1운동의 의의 주장과 알맞은 근거를 이어요.', [['민족 운동의 전환점', '대한민국 임시 정부 수립'], ['온 겨레가 함께함', '신분·지역 넘어 참여'], ['나라 밖에도 영향', '아시아 민족 운동에 영향'], ['민주공화제의 바탕', '임시 헌장의 민주공화제']], ['내가 감동받음', '봄에 일어남'], { easy: 2, base: 3 }, 0.35),
            { prompt: '근거 카드를 확인할 수 있는 근거와 느낌일 뿐인 말로 나누어요.', toolOptions: { mode: 'sort', slots: ['확인할 수 있는 근거', '느낌일 뿐인 말'], cards: ['임시 정부 수립', '내가 감동받음', '전국으로 퍼진 만세', '많은 사람이 좋아함'] }, target: { sort: { '확인할 수 있는 근거': ['임시 정부 수립', '전국으로 퍼진 만세'], '느낌일 뿐인 말': ['내가 감동받음', '많은 사람이 좋아함'] } }, difficulty: 0.3 },
            { prompt: '"3·1운동은 남긴 것이 없다"에 반박할 근거 카드를 골라 담아요.', toolOptions: { mode: 'pick', basket: '반박할 근거', cards: ['임시 정부가 세워짐', '독립운동이 더 활발해짐', '그날 비가 왔음', '참가자 수를 모름'] }, target: { pick: ['임시 정부가 세워짐', '독립운동이 더 활발해짐'] }, difficulty: 0.3, conclude: '좋은 근거는 다른 사람도 자료로 확인할 수 있는 사실이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '주장과 근거를 정리해요.', columns: ['주장', '근거'], cells: [['민족 운동의 전환점이다', ''], ['나라 밖에도 영향을 주었다', '']], answer: '대한민국 임시 정부 수립으로 이어짐 / 중국 5·4 운동 등 아시아 민족 운동에 영향' }] },
        notes: '3·1운동의 의의는 교과서 서술 범위에서 다룬다. 의의의 크기를 두고 해석이 갈리는 말은 정답을 정하지 않고 근거로 따지게 한다.',
      }),
      Y('activity.practice6', {
        title: '3·1 정신으로 고르는 길', method: '3·1 정신 실천 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(친구를 빼자는 말)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(압박하는 말까지)을 지나 근거 2장을 고른다.', challenge: '갈림 3번(학급 회의까지)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 친구를 빼자고 해요', tool: 'dilemma',
          teacher: '"3·1운동의 \'자주\'는 남의 뜻에 휩쓸리지 않고 스스로 옳은 판단을 하는 것, \'평화\'는 폭력 없이 뜻을 모으는 것이었어요. 이 상황에서는 어떤 모습일까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "다들 그러니까 따라야 해요"라는 말이 나오면 "자주는 누구의 판단을 따르는 것일까요?"라고 되묻고, 화가 나서 밀치는 길을 고른 학생에게는 평화로운 방법이 뜻을 더 넓게 모은다는 점을 짚는다. 장면은 지어낸 이야기이고 자기 경험을 말하지 않아도 된다고 먼저 알린다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '모둠 활동 시간',
            steps: [
              { text: '모둠 활동 시간, 몇몇 친구가 민(가명)을 일부러 빼자고 해요.', motif: 'house',
                good: ['together', '"민도 함께하자"고 차분히 말한다', '모둠이 잠깐 조용해지고 민이 자리에 앉아요.', [['민', '혼자 남지 않아요', 1], ['모둠', '다시 생각해 봐요', 1]]],
                bad: ['follow', '아무 말 없이 따른다', '민이 혼자 교실 뒤에 서 있어요.', '남의 뜻에 휩쓸리면 스스로 옳은 판단을 놓쳐요.', [['민', '혼자 남아요', -1]]] },
              { text: '"너도 같이 안 하면 너도 뺄 거야"라는 말이 들려요.', motif: 'cloud',
                good: ['gather', '내 생각을 지키고 다른 친구들과 뜻을 모은다', '여러 친구가 함께하자는 쪽에 서요.', [['나', '내 판단을 지켜요', 1], ['민', '편이 생겨요', 1]]],
                bad: ['shove', '화가 나서 소리치며 밀친다', '다툼이 커지고 선생님이 활동을 멈춰요.', '폭력으로는 뜻을 넓게 모으기 어려워요.', [['모둠', '모두 다칠 뻔해요', -1]]] },
              { text: '다음 날 학급 회의 시간이 있어요.', motif: 'star',
                good: ['agenda', '모두 함께하는 모둠 규칙을 안건으로 낸다', '반 친구들이 함께 규칙을 정해요.', [['우리 반', '함께하는 규칙이 생겨요', 1]]],
                bad: ['skip', '지난 일이니 그냥 넘어간다', '다음 활동에서도 같은 일이 생길 수 있어요.', '함께 정한 규칙이 있어야 같은 일을 막아요.', [['우리 반', '같은 일이 되풀이돼요', -1]]] },
            ],
            ending: '스스로 판단하고 평화롭게 뜻을 모아 모두가 함께하는 모둠이 되었어요.',
            reasons: [{ id: 'jaju', text: '남의 말에 휩쓸리지 않고 스스로 판단한다' }, { id: 'peace', text: '폭력 없이 평화롭게 뜻을 모은다' }, { id: 'rule', text: '함께 정한 규칙이 같은 일을 막는다' }, { id: 'strong', text: '힘센 쪽을 따르면 편하다', why: '편함보다 옳은 판단이 먼저예요.' }, { id: 'angry', text: '크게 화를 내야 바뀐다', why: '화를 내면 다툼이 커질 수 있어요.' }],
            good: ['jaju', 'peace', 'rule'],
            talk: '모둠에서 "3·1 정신의 자주와 평화가 우리 반에서는 어떤 모습일까?"를 이야기해요.',
            conclude: '스스로 옳은 판단을 하고 평화롭게 뜻을 모으는 것이 3·1 정신을 잇는 길이에요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '3·1 정신의 ___는 남의 뜻에 휩쓸리지 않고 스스로 판단하는 것이다.', answer: '자주' }] },
        notes: '따돌림 장면은 지어낸 이야기다. 학생에게 실제로 겪은 일을 묻지 않는다. 걱정되는 반응이 보이면 수업 뒤 따로 이야기한다.',
      }),
      Y('wrap.plan6', {
        title: '3·1 정신 실천 계획 한 줄', method: '실천 계획 한 줄', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'이번 주에 나는 ___\')에 빈칸을 채우고 기준 2개를 점검한다.', base: '실천 계획을 한 문장으로 쓰고 기준 3개를 점검한다.', challenge: '실천 계획에 까닭(자주 또는 평화)을 넣어 쓰고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 고른 길 가운데 이번 주에 실제로 해 볼 수 있는 것은 무엇일까요?" 언제·어디서·무엇을 할지가 드러나게 쓰게 한다. "착하게 살기"처럼 큰 말만 쓰는 학생에게는 "이번 주 어느 시간에 무엇을 할까요?"라고 되묻는다. 출구 2번에서 \'내가 감동받았다\'를 고른 학생에게는 다른 사람도 확인할 수 있는 근거인지 묻는다.',
          exitTicket: [
            RUBX('이번 주에 실천할 3·1 정신 계획을 한 문장으로 써요.', { topic: '이번 주 3·1 정신 실천 계획', title: '실천 계획 한 줄', starter: '이번 주에 나는 ___.', crit: ['언제·어디서 할지 썼다', '무엇을 할지 구체적으로 썼다', '자주나 평화와 이어지게 썼다'], must: [['자주', '평화', '함께']], chars: [15, 120] }),
            { type: 'choice', prompt: '"3·1운동은 의미 있다"를 받쳐 주는 좋은 근거는?', options: ['대한민국 임시 정부가 세워졌다', '내가 감동받았다', '많은 사람이 좋아한다'], answer: 0, difficulty: 0.2, explain: '좋은 근거는 다른 사람도 자료로 확인할 수 있는 사실이에요.' },
          ],
        },
        worksheet: {
          title: '3·1 정신 이어 가기',
          items: [
            { type: 'short', prompt: '"3·1운동은 의미 있다"를 근거 하나와 함께 한 문장으로 써요.' },
            { type: 'check', prompt: '이번 주에 해 볼 실천에 표시해요.', options: ['함께하자고 먼저 말하기', '학급 회의에 안건 내기', '다툼을 말로 풀기'] },
          ],
          easy: { note: '자주는 스스로 판단하기, 평화는 폭력 없이 뜻 모으기예요.', items: [{ type: 'draw', prompt: '이번 주에 해 볼 실천 하나를 그림으로 그려요.' }] },
        },
      }),
    );
  }

  // ======== 과학의 날 — 기술 발전과 책임 (5학년: 통신 수단의 발전과 바른 사용 / 6학년: 새 기술의 두 면과 개인 정보) ========
  {
    const X = mk('science', 5);
    const USE = [['문자 메시지', 10], ['전화', 7], ['영상 통화', 5], ['편지', 2]];
    const BAR = { type: 'bar', title: '어제 쓴 통신 수단(가상의 우리 반 24명)', unit: '명', xLabel: '통신 수단', yLabel: '친구 수', data: USE, max: 12, scale: 2 };
    M.push(
      X('intro.old5', {
        title: '봉수는 무엇에 썼을까', method: '옛 통신 그림 보고 짐작 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(급한 소식·밤길)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 스스로 세어 가장 많이 고른 쓰임을 찾는다.', challenge: '가장 많이 고른 쓰임이 맞는지 그림 속 연기·횃불을 근거로 까닭을 말한다.' },
        intro: {
          teacher: '"조선 시대 산꼭대기에서 피워 올린 이 불과 연기는 무엇에 썼을까요?" 봉수 그림을 보이고 가상의 한 반이 고른 결과를 시연 단추로 보인다. 그림을 함께 센 뒤 낮에는 연기, 밤에는 횃불을 올려 먼 곳에 급한 소식을 알렸다고 알린다. "옛날 통신은 느려서 쓸모없었어요"라는 말이 나오면 "말을 타고 가는 것보다 빨랐을까요?"라고 되묻는다. 과학의 날(4월 21일)에 통신이 어떻게 바뀌었는지 살펴본다고 밝힌다.',
          student: '그림그래프에서 가장 많이 고른 쓰임을 찾고, 봉수가 소식을 빨리 전할 수 있었던 까닭을 짐작해 보아요.',
          demo: VOTE('봉수는 무엇에 썼을까?(가상의 반 투표)', [['먼 곳에 급한 소식 알리기', 12], ['밤길 밝히기', 6], ['음식 익히기', 3]], '가장 많이 고른 것은?', 0),
          art: art('a paper beacon tower on a mountain top sending up smoke by day and a torch by night, paper messengers below', '봉수로 소식을 알려요', 'mountain', 'mint'),
        },
        notes: '투표 자료는 가상의 반이다.',
      }),
      X('activity.line5', {
        title: '통신 수단 발전 시간 띠', method: '통신 수단 발전 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(봉수·유선 전화·휴대 전화)을 옛날부터 놓는다.', base: '카드 4장(영상 통화까지)을 놓고, 통신 수단을 전기를 쓰는 것과 아닌 것으로 나눈다.', challenge: '카드 4장에 맞지 않는 카드(첨성대)를 섞어 가려 내고, 바뀐 점을 짝에게 설명한다.' },
        activity: {
          title: '통신 수단 시간 띠', tool: 'timeline',
          teacher: '"유선 전화와 휴대 전화 사이에 무엇이 바뀌었을까요?" 거리·빠르기·들고 다님 가운데 하나를 골라 말하게 한다. 봉수를 오늘날 쪽에 두는 학생에게는 연기와 횃불을 쓴 방법이라는 점을 짚는다. 첨성대를 통신 수단으로 넣는 학생에게는 "첨성대로 소식을 전했을까요, 하늘을 살폈을까요?"라고 묻는다.',
          task: '통신 수단을 옛날부터 차례대로 놓고, 전기를 쓰는지에 따라 나누어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('소식을 전한 방법을 옛날부터 차례대로 놓아요.', [['bong', '봉수(연기·횃불)'], ['tel', '유선 전화'], ['mobile', '휴대 전화'], ['video', '영상 통화']], { easy: [0, 1, 2], trap: ['star', '첨성대'], axis: ['옛날', '오늘날'], motifs: ['mountain', 'house', 'star', 'sun'] }, 0.25),
            { prompt: '통신 수단을 전기 없이 쓴 것과 전기로 쓴 것으로 나누어요.', toolOptions: { mode: 'sort', slots: ['전기 없이', '전기로'], cards: ['봉수', '유선 전화', '파발(말로 전함)', '인터넷 메일'], axis: ['옛날', '오늘날'] }, target: { sort: { '전기 없이': ['봉수', '파발(말로 전함)'], '전기로': ['유선 전화', '인터넷 메일'] } }, difficulty: 0.3 },
            { prompt: '유선 전화에서 휴대 전화로 바뀌며 달라진 점 하나를 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '통신 수단의 변화를 채워요.', text: '봉수 → 유선 전화 → ___ → 영상 통화', answer: '휴대 전화' }] },
        notes: '계획은 카드 5장이었으나 큰 차례가 분명한 통신 수단 4장만 쓴다(봉수와 파발처럼 같은 때의 수단은 차례를 정하기 어렵다).',
      }),
      X('activity.use5', {
        title: '우리 반 통신 수단 그래프', method: '통신 수단 사용 시간 그래프', tool: 'chart', minutes: 13,
        levels: { easy: '두 수단(영상 통화·편지)은 미리 그려져 있고 두 수단만 막대를 그린다. 읽기는 가장 적은 수단 고르기.', base: '네 수단의 막대를 모두 그리고 가장 많은 수단을 읽는다.', challenge: '네 막대를 그리고 두 수단의 차이(몇 명)를 읽어 수로 쓴다.' },
        activity: {
          title: '통신 수단 막대그래프 읽기', tool: 'chart',
          teacher: '"가상의 우리 반 24명이 어제 쓴 통신 수단을 표로 모았어요. 막대그래프로 바꾸면 무엇이 더 잘 보일까요?" 눈금 한 칸이 2명이라는 것을 먼저 짚는다. 칸을 하나씩 세다 헷갈리는 학생에게는 눈금 수를 손가락으로 짚게 한다. "편지는 이제 아무도 안 써요"라는 말이 나오면 "그래프에서 몇 명이 썼나요?"라고 되묻는다. 반 실제 조사는 이름 없이 손들기로만 한다.',
          task: '가상의 우리 반 자료로 막대그래프를 완성하고, 그래프를 읽어 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '표를 보고 어제 쓴 통신 수단 막대그래프를 완성해요.', toolOptions: Object.assign({}, BAR, { mode: 'build' }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 문자 메시지·전화 두 막대만 그려 그래프를 완성해요.', toolOptions: { given: [2, 3] } } } },
            { prompt: '그래프에서 가장 많은 친구가 쓴 통신 수단을 골라요.', toolOptions: Object.assign({}, BAR, { mode: 'read', question: '가장 많은 친구가 쓴 것은?', choices: USE.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '그래프에서 가장 적은 친구가 쓴 통신 수단을 골라요.', toolOptions: { question: '가장 적은 친구가 쓴 것은?' }, target: { pick: 3 } } } },
            { prompt: '문자 메시지를 쓴 친구는 편지를 쓴 친구보다 몇 명 더 많은지 써요.', toolOptions: Object.assign({}, BAR, { mode: 'read', question: '문자 메시지와 편지의 차이는 몇 명?' }), target: { value: 8 }, difficulty: 0.3, conclude: '새 통신 수단을 많이 쓰는 만큼 바르게 쓰는 약속도 중요해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 보고 알게 된 점 하나를 써요.' }] },
        notes: '그래프 자료는 가상이다. 반 실제 조사를 할 때는 이름을 적지 않고 손들기 수만 센다.',
      }),
      X('wrap.rule5', {
        title: '통신 수단 바르게 쓰기', method: '바르게 쓰는 방법 고르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '행동 카드 4장을 바른/바르지 않은 바구니에 나눈다(틀리면 바로 알려 줌).', base: '행동 카드 6장을 나눈다.', challenge: '카드 6장을 나누고, 바르지 않은 행동 하나를 고친 말로 바꾸어 쓴다.' },
        wrap: {
          teacher: '"통신이 빨라지면 좋은 소식도, 상처 주는 말도 빨리 퍼져요. 무엇을 조심해야 할까요?" 카드를 나눈 뒤 바르지 않은 카드 하나를 골라 어떻게 바꿀지 말하게 한다. "장난이니 괜찮아요"라는 말이 나오면 "받는 사람도 장난으로 느낄까요?"라고 되묻는다.',
          exitTicket: [
            EX('sortboard', SB('통신 수단을 쓰는 행동을 두 바구니에 나누어요.', { slots: ['바른 사용', '바르지 않은 사용'], groups: { '바른 사용': ['보내기 전에 다시 읽기', '밤늦게 전화하지 않기', '사진은 허락받고 보내기'], '바르지 않은 사용': ['장난 문자를 여럿에게 보내기', '수업 중 몰래 영상 통화', '남의 사진 마음대로 퍼뜨리기'] } }, 0.15)),
            { type: 'choice', prompt: '친구에게 단체 사진을 보내기 전에 할 일은?', options: ['사진 속 친구에게 허락받기', '빨리 보내고 나중에 묻기', '아무 말 없이 보내기'], answer: 0, difficulty: 0.15, explain: '사진 속 사람의 허락을 먼저 받아요.' },
            { type: 'short', prompt: '바르지 않은 행동 하나를 골라 바른 행동으로 바꾸어 써요.' },
          ],
        },
        worksheet: {
          title: '통신 수단, 바르게 써요',
          items: [
            { type: 'choice', prompt: '봉수가 소식을 전한 방법에 ○ 해요.', options: ['연기와 횃불', '전파'], answer: '연기와 횃불' },
            { type: 'short', prompt: '과학의 날(4월 21일)에 내가 지킬 통신 수단 약속을 써요.' },
          ],
        },
      }),
    );
    const Y = mk('science', 6);
    M.push(
      Y('intro.ai6', {
        title: '얼굴로 여는 문, 궁금한 점', method: '새 기술 그림 보고 질문', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 두 장을 읽어 주고 기술에 꼭 물어야 할 쪽을 함께 고른다.', base: '질문 카드 세 장을 고르고 기술과 상관없는 질문을 가려 낸다.', challenge: '고른 질문에 이어 내 질문 하나를 더 만들어 짝에게 말한다.' },
        intro: {
          teacher: '"얼굴만 보여 주면 문이 열리는 기술이 있어요. 이 기술을 쓰기 전에 무엇을 물어봐야 할까요?" 시연 단추로 질문 카드가 바구니에 담기는 모습을 보인다. "편리하니까 물어볼 것 없어요"라는 말이 나오면 "내 얼굴 정보는 어디에 남을까요?"라고 되묻는다. 과학의 날(4월 21일)에는 기술의 좋은 점과 걱정되는 점을 함께 따진다고 밝힌다.',
          student: '얼굴 인식 문 그림을 보고, 이 기술을 쓰기 전에 꼭 물어볼 질문 카드를 골라 보아요.',
          demo: WPICK('꼭 물어볼 질문', ['얼굴 정보는 어디에 남을까?', '문 색깔은 무엇일까?', '누가 그 정보를 볼 수 있을까?', '얼굴이 바뀌면 열릴까?'], [['얼굴 정보는 어디에 남을까?'], ['얼굴 정보는 어디에 남을까?', '누가 그 정보를 볼 수 있을까?', '얼굴이 바뀌면 열릴까?']]),
          art: art('a paper door with a small camera scanning a paper child face, paper question mark cards floating around', '이 기술, 무엇을 물어볼까?', 'cloud', 'sky'),
        },
      }),
      Y('activity.pm6', {
        title: '새 기술의 두 얼굴 나누기', method: '좋은 점·걱정되는 점 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 좋은 점·걱정되는 점 바구니에 나눈다(틀리면 바로 알려 줌).', base: '카드 6장을 나눈다.', challenge: '카드 8장(넣지 않을 카드 포함)을 나누고, 걱정을 줄이는 방법을 함께 고른다.' },
        activity: {
          title: '좋은 점·걱정되는 점 나누기', tool: 'sortboard',
          teacher: '"걱정되는 점이 있으면 그 기술을 아예 쓰지 말아야 할까요?" 한쪽 바구니만 채우는 학생에게 반대쪽 카드를 먼저 읽게 한다. 걱정을 줄이는 방법(쓰는 규칙·동의·보안)을 함께 찾는 것이 중요하다고 짚는다. "새 기술은 좋은 점만 있어요"라는 말이 나오면 같은 기술이 가짜 영상 만들기에도 쓰일 수 있다는 카드를 보인다.',
          task: '새 기술 카드를 좋은 점과 걱정되는 점으로 나누고, 걱정을 줄이는 방법을 골라요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('인공 지능 기술의 좋은 점과 걱정되는 점을 나누어요.', { slots: ['좋은 점', '걱정되는 점'], groups: { '좋은 점': ['질병 진단을 도움', '번역으로 소통을 도움', '위험한 일을 대신함'], '걱정되는 점': ['가짜 영상을 만들 수 있음', '틀린 답을 그럴듯하게 함', '얼굴 정보가 샐 수 있음'] }, extra: { '좋은 점': ['자료를 빨리 찾아 줌'], '걱정되는 점': ['남의 글을 베끼기 쉬움'] } }, 0.3),
            SB('자율 주행차의 좋은 점과 걱정되는 점을 나누어요.', { slots: ['좋은 점', '걱정되는 점'], groups: { '좋은 점': ['운전이 어려운 사람의 이동', '졸음운전 줄이기', '길 막힘 줄이기'], '걱정되는 점': ['사고 책임이 누구인지', '해킹 위험', '날씨에 따라 잘못 볼 수 있음'] }, traps: ['차 색깔이 멋짐'] }, 0.35),
            SB('걱정을 줄이는 방법과 도움이 안 되는 방법을 나누어요.', { slots: ['걱정을 줄이는 방법', '도움이 안 되는 방법'], groups: { '걱정을 줄이는 방법': ['쓰는 규칙 만들기', '정보를 쓸 때 동의 받기', '쓴 사실 밝히기'], '도움이 안 되는 방법': ['무조건 금지하기', '모르는 척하기', '편하니까 다 허용하기'] } }, 0.3, { conclude: '같은 기술도 쓰는 규칙과 동의가 있으면 걱정을 줄일 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기술 하나를 골라 좋은 점·걱정되는 점·줄이는 방법을 써요.', columns: ['기술', '좋은 점', '걱정되는 점', '줄이는 방법'], cells: [['', '', '', '']], answer: '예) 얼굴 인식 / 열쇠 없이 편리 / 얼굴 정보 유출 / 동의·보안 규칙' }] },
      }),
      Y('activity.privacy6', {
        title: '친구 사진, 앱에 올릴까', method: '개인 정보 지키기 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(친구 사진을 올리자는 말)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(앱이 연락처를 달라고 함)을 지나 근거 2장을 고른다.', challenge: '갈림 3번(퍼진 영상까지)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 친구 사진과 앱', tool: 'dilemma',
          teacher: '"친구 얼굴 사진을 재미있는 영상으로 바꿔 주는 앱이 있대요. 올리기 전에 누구에게 먼저 물어야 할까요?" 고를 때마다 결과 칸을 읽게 한다. "재미로 한 거니 괜찮아요"라는 말이 나오면 "한 번 퍼진 영상은 지울 수 있을까요?"라고 되묻는다. 개인 정보는 꼭 필요한 만큼만, 쓰임을 확인하고 준다는 점을 짚는다. 장면은 지어낸 이야기다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '사진 바꾸기 앱',
            steps: [
              { text: '하루(가명)가 "윤의 얼굴 사진으로 웃긴 영상을 만들자"고 해요.', motif: 'star',
                good: ['ask', '윤에게 먼저 물어보고 싫다면 안 한다', '윤이 싫다고 해서 다른 놀이를 찾아요.', [['윤', '마음과 얼굴 정보를 지켜요', 1]]],
                bad: ['upload', '재미있으니 몰래 올린다', '윤이 영상을 보고 속상해해요.', '다른 사람의 사진은 동의를 먼저 받아요.', [['윤', '속상해요', -1]]] },
              { text: '앱이 가입하려면 위치와 연락처 전체를 달라고 해요.', motif: 'house',
                good: ['check', '꼭 필요한지 보고 보호자와 상의한다', '필요 없는 정보는 주지 않아요.', [['나', '정보를 지켜요', 1]]],
                bad: ['allow', '빨리 하려고 모두 허용한다', '내 연락처 목록이 어디에 쓰일지 몰라요.', '개인 정보는 꼭 필요한 만큼만 줘요.', [['친구들', '연락처가 넘어가요', -1]]] },
              { text: '다른 반에서 누군가 만든 친구 얼굴 영상이 단체 대화방에 돌아요.', motif: 'cloud',
                good: ['stop', '퍼뜨리지 않고 선생님께 알린다', '영상이 더 퍼지지 않게 막아요.', [['영상 속 친구', '더 다치지 않아요', 1]]],
                bad: ['share', '재미있어서 다른 대화방에 옮긴다', '영상이 더 많은 곳으로 퍼져요.', '퍼진 정보는 되돌리기 어려워요.', [['영상 속 친구', '더 많이 퍼져요', -1]]] },
            ],
            ending: '동의를 묻고 필요한 정보만 주며, 퍼진 영상을 멈추게 했어요.',
            reasons: [{ id: 'consent', text: '다른 사람의 사진은 동의가 먼저다' }, { id: 'need', text: '개인 정보는 꼭 필요한 만큼만 준다' }, { id: 'spread', text: '퍼진 정보는 되돌리기 어렵다' }, { id: 'fun', text: '재미있으면 괜찮다', why: '재미보다 그 사람의 마음과 권리가 먼저예요.' }, { id: 'all', text: '다들 하니까 괜찮다', why: '여럿이 해도 남의 정보를 해칠 수 있어요.' }],
            good: ['consent', 'need', 'spread'],
            talk: '모둠에서 "기술을 쓸 때 친구의 정보를 지키는 약속"을 하나 정해 이야기해요.',
            conclude: '사진은 동의를 먼저 받고, 개인 정보는 필요한 만큼만 줘요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '다른 사람의 사진은 올리기 전에 ___를 받는다.', answer: '동의' }] },
      }),
      Y('wrap.code6', {
        title: '나의 기술 사용 약속 세 줄', method: '나의 기술 사용 약속 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'나는 기술을 쓸 때 ___\')로 약속 한 줄을 쓰고 기준 2개를 점검한다.', base: '약속 세 줄을 쓰고 기준 3개(구체적·지킬 수 있음·남을 지킴)를 점검한다.', challenge: '약속마다 까닭을 붙이고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"\'기술을 바르게 쓰자\'보다 \'사진은 허락받고 올린다\'가 더 지키기 쉬운 까닭은 무엇일까요?" 약속을 쓰기 전 구체적인 약속과 막연한 약속을 견주게 한다. 출구 2번에서 \'모두 허용\'을 고른 학생에게는 앱이 그 정보를 어디에 쓸지 아는지 묻는다.',
          exitTicket: [
            RUBX('기술을 쓸 때 지킬 나의 약속을 세 줄로 써요.', { topic: '나의 기술 사용 약속', title: '기술 사용 약속', starter: '나는 기술을 쓸 때 ___.', crit: ['구체적인 행동으로 썼다', '내가 지킬 수 있는 약속이다', '다른 사람의 정보나 권리를 지키는 약속이 있다'], must: [['동의', '허락', '출처']], chars: [30, 200] }),
            { type: 'choice', prompt: '개인 정보를 지키는 알맞은 습관은?', options: ['필요한 만큼만 주고 쓰임을 확인한다', '편하니까 모두 허용한다', '친구 정보도 대신 적어 준다'], answer: 0, difficulty: 0.2, explain: '개인 정보는 꼭 필요한 만큼만, 쓰임을 확인하고 줘요.' },
          ],
        },
        worksheet: {
          title: '나의 기술 사용 약속',
          items: [
            { type: 'choice', prompt: '저작물을 바르게 쓴 예에 ○ 해요.', options: ['이용 조건을 보고 출처 적기', '내 것처럼 가져다 쓰기'], answer: '이용 조건을 보고 출처 적기' },
            { type: 'short', prompt: '과학의 날에 미래 과학 기술에 바라는 점을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 지구의 날(비법정) — 정보 가려 읽기와 탄소 중립 (5학년: 사실·의견과 소비 / 6학년: 탄소 중립과 학교 실천) ========
  {
    const X = mk('earth', 5);
    const SHOP = [
      { id: 'bottle', text: '다회용 물병', price: 3000 }, { id: 'pet', text: '작은 생수 10병 묶음', price: 4000 },
      { id: 'bag', text: '천 장바구니', price: 2000 }, { id: 'vinyl', text: '비닐봉지 20장', price: 1000 },
      { id: 'note', text: '재생 종이 공책', price: 1500 }, { id: 'wrap', text: '겹겹이 포장한 과자 선물', price: 3500 },
    ];
    M.push(
      X('intro.ad5', {
        title: '"지구를 살립니다" 믿을까', method: '환경 광고 문구 보고 믿을지 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(믿는다·확인해 본다)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 스스로 세어 가장 많이 고른 생각을 찾는다.', challenge: '\'확인해 본다\'를 고른다면 무엇을 확인할지 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"\'이 제품은 지구를 살립니다\'라는 광고 문구를 보면 믿나요?" 가상의 한 반이 고른 결과를 시연 단추로 보이고 함께 센다. 확인할 수 있는 숫자·기록은 사실, 판단이나 느낌은 의견이라고 알린다. "광고에 나오면 다 사실이에요"라는 말이 나오면 "무엇으로 확인할 수 있을까요?"라고 되묻는다. 지구의 날(4월 22일)은 법으로 정한 기념일은 아니지만 세계가 함께 지키는 환경의 날이라고 덧붙인다.',
          student: '그림그래프에서 가장 많이 고른 생각을 찾고, 광고 문구를 볼 때 무엇을 확인하면 좋을지 짝에게 말해 보아요.',
          demo: VOTE('"지구를 살립니다" 광고, 믿을까?(가상의 반 투표)', [['그대로 믿는다', 9], ['확인해 본다', 11], ['안 믿는다', 4]], '가장 많이 고른 것은?', 1),
          art: art('a paper billboard with a green leaf slogan and paper children holding a magnifying glass up to it', '광고 문구, 확인해 볼까?', 'leaf', 'mint'),
        },
        notes: '투표 자료는 가상의 반이다. 지구의 날은 법정기념일이 아니다(research-days.md §1).',
      }),
      X('activity.fo5', {
        title: '환경 정보 사실·의견', method: '사실·의견 가려 읽기', tool: 'sortboard', minutes: 14,
        levels: { easy: '문장 카드 4장을 사실·의견 바구니에 나눈다(틀리면 바로 알려 줌).', base: '문장 카드 6장을 나눈다.', challenge: '문장 카드 8장을 나누고 광고 문구를 사실로 고쳐 쓸 방법을 말한다.' },
        activity: {
          title: '사실·의견 가리기', tool: 'sortboard',
          teacher: '"이 문장은 자료로 확인할 수 있나요?" 문장마다 확인할 방법(측정·기록·날짜)을 먼저 말하게 한다. 광고 문구를 사실 바구니에 넣는 학생에게는 "얼마나 줄었는지 숫자가 있나요?"라고 되묻는다. 의견이 나쁜 것은 아니고 사실과 구별해 읽는 것이 중요하다고 짚는다.',
          task: '환경 정보를 사실과 의견으로 가려 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('환경 정보 문장을 사실과 의견으로 나누어요.', { slots: ['사실', '의견'], groups: { '사실': ['지구의 날은 4월 22일', '지구의 날은 1970년에 시작', '비닐은 쉽게 썩지 않는다'], '의견': ['이 제품이 최고로 친환경', '환경 공부는 지루하다', '장바구니가 제일 멋지다'] }, extra: { '사실': ['페트병 라벨은 몸통과 재질이 다르다'], '의견': ['이 광고가 가장 착하다'] } }, 0.3),
            SB('"친환경" 광고를 볼 때 확인할 것과 확인할 필요 없는 것을 나누어요.', { slots: ['확인할 것', '확인할 필요 없음'], groups: { '확인할 것': ['무엇이 얼마나 줄었는지 숫자', '인증 표시와 출처', '누가 조사했는지'], '확인할 필요 없음': ['포장 색깔', '광고 모델의 인기', '노래가 신나는지'] } }, 0.3, { conclude: '광고 문구는 숫자·인증·출처로 확인해 사실인지 가려요.' }),
            { prompt: '짝과 광고 문구 하나를 골라 사실로 확인하려면 무엇이 필요한지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '문장을 읽고 사실·의견과 까닭을 써요.', columns: ['문장', '사실/의견', '까닭'], cells: [['지구의 날은 4월 22일이다', '', ''], ['이 제품이 최고로 친환경이다', '', '']], answer: '사실·날짜로 확인할 수 있음 / 의견·판단이며 근거가 없음' }] },
      }),
      X('activity.buy5', {
        title: '지구를 생각한 장보기', method: '지구를 생각한 소비', tool: 'economy', minutes: 13,
        levels: { easy: '물건 3개 가운데 다시 쓸 수 있는 것을 예산 안에서 고른다.', base: '물건 6개 가운데 다시 쓰고 포장이 적은 것을 예산 안에서 고른다.', challenge: '예산이 줄어든 조건에서 다시 고르고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '예산 안에서 지구를 생각해 고르기', tool: 'economy',
          teacher: '"학급 소풍 준비에 쓸 돈이 정해져 있어요(가상). 같은 돈이면 무엇을 고를까요?" 물건마다 \'한 번 쓰고 버리나, 다시 쓰나\', \'포장이 얼마나 많나\'를 먼저 말하게 한다. 무조건 안 사는 것이 답이라는 의견이 나오면 "꼭 필요한 것을 오래 쓰는 것도 좋은 방법이에요"라고 인정한다.',
          task: '예산 안에서 다시 쓸 수 있고 포장이 적은 물건을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '소풍 물 준비 예산 4,000원(가상). 다시 쓸 수 있는 것을 골라요.', toolOptions: { mode: 'budget', budget: 4000, items: SHOP.slice(0, 2), ask: '소풍 물 준비(가상 예산)' }, target: { budget: { must: ['bottle'], not: ['pet'] } }, difficulty: 0.15 },
            { prompt: '소풍 준비 예산 7,000원(가상). 다시 쓰고 포장이 적은 물건만 골라요.', toolOptions: { mode: 'budget', budget: 7000, items: SHOP, ask: '소풍 준비(가상 예산)' }, target: { budget: { must: ['bottle', 'bag', 'note'], not: ['pet', 'vinyl', 'wrap'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '소풍 준비 예산 5,000원(가상). 다시 쓸 수 있는 물건만 골라요.', toolOptions: { budget: 5000, items: [SHOP[0], SHOP[2], SHOP[3]] }, target: { budget: { must: ['bottle', 'bag'], not: ['vinyl'] } } },
                challenge: { prompt: '예산이 5,000원(가상)으로 줄었어요. 꼭 필요한 다회용 물병은 넣고 다시 골라요.', toolOptions: { budget: 5000 }, target: { budget: { must: ['bottle'], not: ['pet', 'vinyl', 'wrap'], count: 2 } } } } },
            { prompt: '내가 고른 물건과 그 까닭(다시 쓰기·포장)을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '지구를 생각한 소비에 ○ 해요.', options: ['천 장바구니 챙기기', '비닐봉지 여러 장 받기'], answer: '천 장바구니 챙기기' }] },
        notes: '물건 값은 모두 가상이다. 가정 형편을 묻지 않는다.',
      }),
      X('wrap.why5', {
        title: '고른 까닭 한 문장', method: '고른 까닭 한 문장', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'나는 ___를 골랐다. 왜냐하면 ___\')에 빈칸을 채우고 기준 2개를 점검한다.', base: '고른 물건과 까닭을 한 문장으로 쓰고 기준 3개를 점검한다.', challenge: '까닭을 두 문장(다시 쓰기·포장)으로 쓰고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 고른 물건 가운데 하나를 골라 그 까닭을 친구가 알아듣게 써 볼까요?" \'좋아서\'처럼 느낌만 쓰는 학생에게는 "지구에 어떤 점이 덜 부담될까요?"라고 되묻는다. 출구 2번에서 광고 문구를 사실로 고른 학생에게는 확인할 근거가 있는지 다시 묻는다.',
          exitTicket: [
            RUBX('오늘 고른 물건 하나와 그것을 고른 까닭을 써요.', { topic: '지구를 생각해 고른 까닭', title: '고른 까닭', starter: '나는 ___를 골랐다. 왜냐하면 ___ 때문이다.', crit: ['고른 물건을 썼다', '지구와 이어지는 까닭을 썼다', '왜냐하면·때문에로 까닭을 이었다'], must: [['다시', '포장', '오래']], chars: [20, 140] }),
            { type: 'choice', prompt: '다음 가운데 사실인 문장은?', options: ['지구의 날은 4월 22일이다', '이 광고가 가장 착하다', '장바구니가 제일 멋지다'], answer: 0, difficulty: 0.2, explain: '날짜는 기록으로 확인할 수 있는 사실이에요.' },
          ],
        },
        worksheet: {
          title: '읽고 고르는 지구의 날',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '지구의 날은 ___년에 시작되었다.', answer: '1970' },
            { type: 'short', prompt: '이번 주에 해 볼 지구를 생각한 소비 한 가지를 써요.' },
          ],
        },
      }),
    );
    const Y = mk('earth', 6);
    M.push(
      Y('intro.co2', {
        title: '나무 심기는 줄이기? 흡수?', method: '배출·흡수 그림 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(배출 줄이기·흡수 늘리기)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 생각을 찾는다.', challenge: '나무 심기가 어느 쪽인지 \'온실가스가 어디로 가나\'로 까닭을 말한다.' },
        intro: {
          teacher: '"\'탄소 중립\'은 탄소를 전혀 내보내지 않는다는 뜻일까요?" 대답을 들은 뒤 가상의 한 반이 \'나무 심기는 어느 쪽 일일까\'를 고른 결과를 시연 단추로 보인다. 내보내는 온실가스는 최대한 줄이고, 남은 만큼은 숲 등으로 흡수해 실제 배출을 0으로 만드는 것이라고 알린다. "나무를 심으면 배출이 줄어요"라는 말이 나오면 "나무는 내보내는 것을 줄일까요, 빨아들일까요?"라고 되묻는다.',
          student: '그림그래프에서 가장 많이 고른 생각을 찾고, 나무 심기가 어느 쪽 일인지 까닭과 함께 짝에게 말해 보아요.',
          demo: VOTE('나무 심기는 어느 쪽 일일까?(가상의 반 투표)', [['배출 줄이기', 8], ['흡수 늘리기', 13], ['둘 다 아님', 2]], '가장 많이 고른 것은?', 1),
          art: art('a paper balance scale with smoke clouds on one side and paper trees on the other, paper children watching it level out', '줄이고, 흡수하고', 'tree', 'mint'),
        },
        notes: '투표 자료는 가상의 반이다.',
      }),
      Y('activity.net6', {
        title: '탄소 줄이기·흡수 나누기', method: '줄이기·늘리기 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '실천 카드 4장을 배출 줄이기·흡수 늘리기 바구니에 나눈다(틀리면 바로 알려 줌).', base: '실천 카드 6장을 나눈다.', challenge: '카드 8장(탄소 중립과 상관없는 카드 포함)을 나누고 고른 까닭을 말한다.' },
        activity: {
          title: '배출 줄이기·흡수 늘리기', tool: 'sortboard',
          teacher: '"이 실천을 하면 온실가스는 어디로 갈까요? 덜 나올까요, 빨려 들어갈까요?" 카드마다 말하게 한다. 재활용을 흡수 바구니에 넣는 학생에게는 새로 만드는 데 드는 에너지를 줄이는 일이라고 짚는다. 탄소 중립을 \'탄소를 전혀 안 씀\'으로 이해하는 학생에게는 저울 그림으로 다시 보여 준다.',
          task: '탄소 중립 실천 카드를 배출 줄이기와 흡수 늘리기로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('학교 실천 카드를 배출 줄이기와 흡수 늘리기로 나누어요.', { slots: ['배출 줄이기', '흡수 늘리기'], groups: { '배출 줄이기': ['빈 교실 전등 끄기', '급식 남기지 않기', '이면지 쓰기'], '흡수 늘리기': ['학교 숲 가꾸기', '옥상 정원 만들기', '화단에 나무 심기'] }, extra: { '배출 줄이기': ['걸어서 등교하기'] }, traps: ['교실 꾸미기 대회'] }, 0.3),
            SB('집과 마을 실천 카드를 배출 줄이기와 흡수 늘리기로 나누어요.', { slots: ['배출 줄이기', '흡수 늘리기'], groups: { '배출 줄이기': ['대중교통 이용하기', '안 쓰는 플러그 뽑기', '재활용 분리배출'], '흡수 늘리기': ['동네 공원 나무 가꾸기', '베란다 화분 키우기', '마을 숲 지키기'] } }, 0.3),
            SB('탄소 중립의 뜻에 맞는 설명과 맞지 않는 설명을 나누어요.', { slots: ['맞는 설명', '맞지 않는 설명'], groups: { '맞는 설명': ['배출을 최대한 줄인다', '남은 배출은 흡수로 맞춘다', '실제 배출을 0으로 만든다'], '맞지 않는 설명': ['탄소를 전혀 안 쓴다', '배출을 그대로 둔다', '나무만 심으면 끝이다'] } }, 0.35, { conclude: '탄소 중립은 배출을 줄이고 흡수를 늘려 실제 배출을 0으로 만드는 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '흡수를 늘리는 일에 ○ 해요.', options: ['학교 숲 가꾸기', '빈 교실 전등 끄기'], answer: '학교 숲 가꾸기' }] },
      }),
      Y('activity.plan6', {
        title: '학교 실천 계획 차례', method: '학교 실천 계획 차례 세우기', tool: 'story', minutes: 13,
        levels: { easy: '계획 장면 3장(조사·실천·점검)을 차례로 놓는다.', base: '계획 장면 4장(목표 정하기까지)을 차례로 놓는다.', challenge: '4장에 맞지 않는 장면을 가려 내고, 장면마다 맡을 역할 카드를 붙인다.' },
        activity: {
          title: '탄소 중립 실천 계획 세우기', tool: 'story',
          teacher: '"계획은 실천하면 끝일까요?" 점검까지가 계획의 한 바퀴라고 짚는다. 목표를 조사보다 앞에 두는 학생에게는 "지금 얼마나 쓰는지 모르면 얼마나 줄일지 정할 수 있을까요?"라고 묻는다. 역할을 붙일 때는 한 사람에게 일이 몰리지 않게 나누게 한다.',
          task: '우리 반 탄소 중립 실천 계획의 장면을 차례대로 놓고, 역할을 붙여요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('교실 전기 줄이기 계획 장면을 차례대로 놓아요.', [['survey', '켜 둔 전등 조사하기'], ['goal', '줄일 목표 정하기'], ['do', '끄기 당번 정해 실천'], ['check', '한 주 뒤 결과 점검']], { tool: 'story', easy: [0, 2, 3], base: [0, 1, 2, 3], trap: ['skip', '조사 없이 포스터만 붙이기'], motifs: ['star', 'leaf', 'sun', 'flower'], title: '교실 전기 줄이기' }, 0.3),
            ORDER('급식 남김 줄이기 계획 장면을 차례대로 놓아요.', [['weigh', '남긴 양 재기'], ['goal2', '줄일 목표 정하기'], ['promise', '먹을 만큼 받기 약속'], ['again', '다시 재어 견주기']], { tool: 'story', easy: [0, 2, 3], base: [0, 1, 2, 3], motifs: ['star', 'leaf', 'sun', 'flower'], title: '급식 남김 줄이기' }, 0.3,
              { levels: { challenge: { prompt: '급식 남김 줄이기 장면마다 맡을 역할을 붙여요.', toolOptions: { mode: 'match', slots: [{ id: 'r1', label: '남긴 양 재기' }, { id: 'r2', label: '먹을 만큼 받기 약속' }, { id: 'r3', label: '다시 재어 견주기' }], cards: ['기록 모둠', '안내 모둠', '점검 모둠'], title: '역할 붙이기' }, target: { match: { r1: '기록 모둠', r2: '안내 모둠', r3: '점검 모둠' } } } } }),
            { prompt: '우리 반이 맡을 실천 하나와 점검 방법을 모둠에서 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 실천 계획표를 채워요.', columns: ['조사한 낭비', '목표', '실천', '점검 방법'], cells: [['', '', '', '']], answer: '예) 빈 교실 전등 / 덜 켜기 / 끄기 당번 / 주마다 확인' }] },
      }),
      Y('wrap.campaign6', {
        title: '학교 한 곳 소등 확인 캠페인', method: '학교 실천 캠페인 진행', tool: 'timer', minutes: 7,
        levels: { easy: '교사와 함께 학교 한 곳을 확인하고 기록판 한 칸(확인한 곳)을 적는다.', base: '두 곳을 확인하고 기록판 두 칸(확인한 곳·끈 전등)을 적는다.', challenge: '기록판 세 칸(켜 둔 전기 기기까지)을 적고 결과를 반에 발표한다.' },
        wrap: {
          teacher: '"지금부터 5분 동안 모둠마다 정한 곳(빈 특별실·복도 등)에 가서 켜 둔 전등이 있는지 확인해요. 끄기 전에 그 교실 선생님께 먼저 여쭤요." 교사가 모둠을 이끌고 다녀온 뒤 기록판에 적게 한다. 다른 반 교실에 함부로 들어가지 않고, 수업 중인 교실은 지나친다는 약속을 먼저 정한다. 출구 2번에서 \'탄소를 전혀 안 씀\'을 고른 학생에게는 저울 그림을 다시 떠올리게 한다.',
          exitTicket: [
            REC('소등 확인 기록', [['확인한 곳', '곳'], ['끈 전등', '개']], '모둠이 확인한 결과를 기록판에 적어요.', ['켜 둔 전기 기기', '개']),
            { type: 'choice', prompt: '탄소 중립의 뜻으로 알맞은 것은?', options: ['배출을 줄이고 남은 만큼 흡수해 0으로', '탄소를 쓰는 모든 것을 금지', '나무만 많이 심으면 됨'], answer: 0, difficulty: 0.25, explain: '배출을 줄이고 흡수를 늘려 실제 배출을 0으로 만드는 거예요.' },
            { type: 'short', prompt: '오늘 캠페인에서 알게 된 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 학교 탄소 중립',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '탄소 중립은 실제 배출을 ___으로 만드는 것이다.', answer: '0' },
            { type: 'short', prompt: '계획에 "점검" 단계가 필요한 까닭을 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 이동할 때 안전과 다른 반 수업을 먼저 살핀다. 날씨·일정이 맞지 않으면 우리 교실 안 기기 확인으로 바꾼다.',
      }),
    );
  }

  // ======== 5·18민주화운동 기념일 — 기록과 민주화의 흐름 (5학년: 그때 기록과 나중 설명, 기억해 온 차례 / 6학년: 민주화의 흐름과 정신) ========
  {
    const X = mk('may18', 5);
    M.push(
      X('intro.two5', {
        title: '일기와 설명판, 무엇이 다를까', method: '두 자료 보고 다른 점 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(만든 때·글씨 모양)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 다른 점을 찾는다.', challenge: '\'만든 때\'가 왜 중요한지 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"1980년에 시민이 쓴 일기와 오늘 기념관의 설명판은 무엇이 가장 다를까요?" 가상의 한 반이 고른 결과를 시연 단추로 보이고 함께 센다. 그때 만든 기록은 그 순간을 보여 주는 자료이고, 나중의 설명은 여러 기록을 모아 정리한 자료라고 알린다. "오래된 자료일수록 무조건 맞아요"라는 말이 나오면 "그때 기록도 한 사람의 눈으로 본 것이에요. 여러 자료를 함께 읽어요"라고 말한다.',
          student: '그림그래프에서 가장 많이 고른 다른 점을 찾고, 자료를 만든 때를 아는 것이 왜 중요한지 짝에게 말해 보아요.',
          demo: VOTE('두 자료의 가장 큰 차이(가상의 반 투표)', [['만든 때', 12], ['글씨 모양', 4], ['종이 크기', 3]], '가장 많이 고른 것은?', 0),
          art: art('a paper diary and a modern paper museum panel side by side on a table, paper children comparing them with a magnifying glass', '언제 만든 자료일까?', 'flower', 'peach'),
        },
        notes: '투표 자료는 가상의 반이다. 자료는 국가보훈부·5·18기념재단·5·18민주화운동기록관 공식 자료만 쓴다.',
      }),
      X('activity.kind5', {
        title: '그때 기록·나중 설명', method: '그때 기록·나중 설명 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '자료 카드 4장을 그때의 기록·나중의 설명 바구니에 나눈다(틀리면 바로 알려 줌).', base: '자료 카드 6장을 나눈다.', challenge: '자료 카드 8장을 나누고, 그때의 기록도 여러 자료와 함께 읽어야 하는 까닭을 말한다.' },
        activity: {
          title: '기록과 설명 나누기', tool: 'sortboard',
          teacher: '"이 자료는 언제, 누가 만들었을까요?" 카드마다 만든 때와 만든 사람을 먼저 말하게 한다. 교과서 설명을 그때의 기록으로 넣는 학생에게는 "이 교과서는 언제 만들었나요?"라고 되묻는다. "나중에 쓴 글도 그때 기록과 같아요"라는 말이 나오면 나중의 설명은 여러 기록을 모아 정리한 것이라 만든 때가 다르다는 점을 짚는다.',
          task: '5·18 자료를 만든 때에 따라 그때의 기록과 나중의 설명으로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('5·18 자료를 그때의 기록과 나중의 설명으로 나누어요.', { slots: ['그때의 기록', '나중의 설명'], groups: { '그때의 기록': ['1980년 5월 신문', '시민이 그때 찍은 사진', '시민이 그때 쓴 일기'], '나중의 설명': ['오늘 교과서 설명', '기념관 안내 영상', '오늘 박물관 해설'] }, extra: { '그때의 기록': ['기자가 그때 쓴 취재 수첩'], '나중의 설명': ['2020년에 만든 다큐멘터리'] } }, 0.3),
            SB('역사 자료를 읽는 바른 방법과 바르지 않은 방법을 나누어요.', { slots: ['바른 방법', '바르지 않은 방법'], groups: { '바른 방법': ['만든 때와 사람 확인', '여러 자료 함께 보기', '공식 기관 자료 찾기'], '바르지 않은 방법': ['한 자료만 믿기', '출처 없는 글 믿기', '제목만 보고 판단'] } }, 0.25, { conclude: '자료는 만든 때와 사람을 확인하고 여러 자료를 함께 읽어요.' }),
            { prompt: '그때의 기록도 여러 자료와 함께 읽어야 하는 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그때 만든 기록에 ○ 해요.', options: ['1980년 5월 신문', '오늘 교과서 설명'], answer: '1980년 5월 신문' }] },
      }),
      X('activity.remember5', {
        title: '5·18을 기억해 온 차례', method: '기억하고 바로 세운 차례', tool: 'timeline', minutes: 13,
        levels: { easy: '연도가 적힌 카드 3장(1980·1997·2011)을 차례로 놓는다.', base: '카드 4장(1995 특별법까지)을 놓고 연도와 그해의 일을 잇는다.', challenge: '연도 글자 없이 카드 4장과 맞지 않는 카드(정전 협정)를 섞어 가려 내고, 차례를 짝에게 설명한다.' },
        activity: {
          title: '기억하고 바로 세운 차례', tool: 'timeline',
          teacher: '"일이 일어나자마자 국가 기념일이 되었을까요?" 오랜 시간 진실을 밝히고 기억하려는 노력이 이어졌다는 점을 차분히 짚는다. 연도가 비슷해 헷갈리면 큰 글자의 수를 견주게 한다. 사건의 자세한 장면은 다루지 않고 기억과 기념의 차례에 집중한다.',
          task: '5·18을 기억하고 바로 세워 온 일을 차례대로 놓고, 연도와 이어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('5·18을 기억하고 바로 세워 온 일을 차례대로 놓아요.', [['y80', '광주 시민의 민주화운동', '1980'], ['y95', '5·18 특별법 제정', '1995'], ['y97', '국가 기념일 지정', '1997'], ['y11', '기록물 세계기록유산 등재', '2011']], { easy: [0, 2, 3], axis: ['옛날', '오늘날'], trap: ['truce', '정전 협정'] }, 0.3,
              { levels: { challenge: { toolOptions: { cards: [{ id: 'y97', text: '국가 기념일 지정' }, { id: 'y80', text: '광주 시민의 민주화운동' }, { id: 'truce', text: '정전 협정' }, { id: 'y11', text: '기록물 세계기록유산 등재' }, { id: 'y95', text: '5·18 특별법 제정' }] } } } }),
            MATCH('연도와 그해의 일을 이어요.', [['1997년', '국가 기념일 지정'], ['2011년', '세계기록유산 등재'], ['1995년', '5·18 특별법 제정']], ['정전 협정'], { easy: 2, base: 3, extraOpt: { axis: ['옛날', '오늘날'] } }, 0.3),
            { prompt: '5·18을 기억해 온 차례를 "처음에… 그 뒤에…"로 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '5·18을 기억해 온 차례를 정리해요.', columns: ['연도', '일'], cells: [['1980', ''], ['1995', ''], ['1997', ''], ['2011', '']], answer: '광주에서 5·18민주화운동 / 5·18 특별법 제정 / 국가 기념일 지정 / 기록물 유네스코 세계기록유산 등재' }] },
      }),
      X('wrap.respect5', {
        title: '모둠 기억 활동 정하기', method: '모둠 기억 활동 정하기', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 고른 기억 활동 하나(묵념)를 함께 하고 점검 칸 2개를 표시한다.', base: '모둠이 기억 활동 하나를 골라 해 보고 점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고, 모둠이 고른 활동과 그 까닭을 반에 발표한다.' },
        wrap: {
          teacher: '"5·18을 기억하는 방법에는 무엇이 있을까요? 묵념, 기억의 글 한 줄 쓰기, 기록관 누리집의 기록 함께 보기 가운데 모둠이 하나를 골라 해 봐요." 교사가 시간을 알리고 차례로 진행한다. 장난스럽게 하려는 모습이 보이면 "기억하는 시간에는 어떤 마음과 자세가 알맞을까요?"라고 묻는다. 학생에게 가족의 이야기나 개인 견해를 말하게 하지 않는다.',
          exitTicket: [
            SELF('기억 활동 점검', ['모둠이 기억 활동 하나를 정했다', '바른 자세로 함께 해 보았다', '그 활동을 고른 까닭을 말할 수 있다', '자료를 만든 때를 확인하는 법을 안다']),
            { type: 'choice', prompt: '5·18민주화운동 기념일이 국가 기념일이 된 해는?', options: ['1997년', '1980년', '2011년'], answer: 0, difficulty: 0.25, explain: '5·18은 1997년 국가 기념일로 지정되었어요.' },
            { type: 'short', prompt: '역사 자료를 읽을 때 꼭 확인할 것 한 가지를 써요.' },
          ],
        },
        worksheet: {
          title: '자료로 읽는 5·18',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '역사 자료를 읽을 때는 만든 ___와 만든 사람을 확인한다.', answer: '때' },
            { type: 'short', prompt: '우리 모둠이 고른 기억 활동과 그 까닭을 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 희생 장면을 묘사하는 사진·영상은 쓰지 않는다. 현재 정당·정치인 이야기는 하지 않는다.',
      }),
    );
    const Y = mk('may18', 6);
    M.push(
      Y('intro.ask6', {
        title: '민주화 운동 이름 고르기', method: '민주화 사건 이름 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 사건 이름 두 장을 읽어 주고 민주화 운동을 함께 고른다.', base: '사건 이름 세 장을 고르고 다른 갈래의 사건을 가려 낸다.', challenge: '고른 사건마다 일어난 해를 짐작해 짝에게 말한다.' },
        intro: {
          teacher: '"5·18민주화운동은 혼자 떨어진 일일까요?" 시연 단추로 민주화 운동 이름 카드가 바구니에 담기는 모습을 보인다. 1960년 4·19혁명, 1980년 5·18민주화운동, 1987년 6월 민주항쟁이 시민이 민주주의를 지키고 넓혀 온 흐름이라고 알린다. 청산리 전투를 고르는 학생에게는 "이 일은 나라를 되찾으려 한 일일까요, 민주주의를 세우려 한 일일까요?"라고 되묻는다.',
          student: '사건 이름 카드 가운데 민주주의를 지키고 넓히려 한 사건을 골라 보아요.',
          demo: WPICK('민주화 운동', ['4·19혁명', '청산리 전투', '5·18민주화운동', '6월 민주항쟁'], [['4·19혁명'], ['4·19혁명', '5·18민주화운동', '6월 민주항쟁']]),
          art: art('three paper banners hanging along a paper ribbon timeline with paper citizens holding hands beneath', '민주주의를 지켜 온 길', 'star', 'sky'),
        },
      }),
      Y('activity.flow6', {
        title: '세 민주화 운동 흐름', method: '세 사건 흐름 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '연도가 적힌 사건 카드 3장을 차례로 놓는다.', base: '사건 3장을 놓고 시민들이 요구한 것과 잇는다.', challenge: '연도 글자 없이 3장을 놓고, 세 운동의 공통점을 짝에게 설명한다.' },
        activity: {
          title: '민주화의 흐름', tool: 'timeline',
          teacher: '"세 운동에서 시민들이 요구한 것은 무엇이었나요?" 연도와 요구를 함께 말하게 한다. 4·19혁명을 1980년대에 두는 학생에게는 1960과 1980을 견주게 한다. 현행 헌법 전문이 \'불의에 항거한 4·19민주이념\'을 잇는다고 쓰고 있다는 점을 소개한다. 인물에 대한 평가는 하지 않고 교과서 서술의 사실만 다룬다.',
          task: '세 민주화 운동을 차례대로 놓고, 시민들의 요구와 이어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('세 민주화 운동을 일어난 차례대로 놓아요.', [['y60', '4·19혁명', '1960'], ['y80', '5·18민주화운동', '1980'], ['y87', '6월 민주항쟁', '1987']], { easy: [0, 1, 2], axis: ['옛날', '오늘날'] }, 0.25,
              { levels: { challenge: { prompt: '연도 글자 없이 세 민주화 운동을 차례대로 놓아요.', toolOptions: { cards: [{ id: 'y80', text: '5·18민주화운동' }, { id: 'y87', text: '6월 민주항쟁' }, { id: 'y60', text: '4·19혁명' }] } } } }),
            MATCH('민주화 운동과 시민들이 요구한 것을 이어요.', [['4·19혁명', '부정 선거 반대'], ['5·18민주화운동', '비상계엄 반대·민주주의'], ['6월 민주항쟁', '대통령 직선제']], ['나라 되찾기'], { easy: 2, base: 3, extraOpt: { axis: ['옛날', '오늘날'] } }, 0.35),
            { prompt: '세 운동의 공통점을 한 문장으로 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '민주화 운동을 정리해요.', columns: ['운동', '연도', '시민들의 요구'], cells: [['4·19혁명', '', ''], ['5·18민주화운동', '', ''], ['6월 민주항쟁', '', '']], answer: '1960·부정 선거 반대 / 1980·비상계엄 반대·민주주의 / 1987·대통령 직선제' }] },
        notes: '세 운동의 평가는 교과서·각 기념재단 서술 범위로만 다룬다. 오늘날 정치 논쟁과 잇지 않는다.',
      }),
      Y('activity.spirit6', {
        title: '민주화 정신과 오늘 실천', method: '정신과 오늘 실천 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '정신 카드 2개에 오늘의 실천을 잇는다(남는 카드 1장).', base: '정신 카드 3개에 실천을 잇고, 민주적인 행동을 고른다.', challenge: '정신 카드 4개에 실천을 잇고(남는 카드 2장), 고른 까닭을 말한다.' },
        activity: {
          title: '정신과 오늘의 실천 잇기', tool: 'emotion',
          teacher: '"\'나눔과 연대\'는 오늘 교실에서 어떤 모습일까요?" 정신과 실천을 이은 뒤 까닭을 말하게 한다. 정신을 거창한 일로만 여기는 학생에게는 작은 생활 실천으로 바꾸어 보게 한다. \'힘센 사람이 결정\'을 민주주의에 잇는 학생에게는 "모두가 말할 기회가 있나요?"라고 묻는다.',
          task: '민주화 운동이 남긴 정신과 오늘 교실의 실천을 이어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('민주화 정신과 오늘 교실의 실천을 이어요.', [['민주주의', '학급 회의에서 모두 발언'], ['인권', '차별 없는 교실 만들기'], ['나눔과 연대', '어려운 친구 함께 돕기'], ['평화', '다툼을 말로 풀기']], ['힘센 사람이 결정', '소문으로 편 가르기'], { easy: 2, base: 3 }, 0.35),
            { prompt: '시민의 행동을 민주적인 것과 아닌 것으로 나누어요.', toolOptions: { mode: 'sort', slots: ['민주적', '민주적이지 않음'], cards: ['평화적 집회', '다른 의견 억누르기', '선거 참여', '가짜 뉴스 퍼뜨리기'] }, target: { sort: { '민주적': ['평화적 집회', '선거 참여'], '민주적이지 않음': ['다른 의견 억누르기', '가짜 뉴스 퍼뜨리기'] } }, difficulty: 0.3 },
            { prompt: '민주화 운동에 대한 사실만 골라 담아요.', toolOptions: { mode: 'pick', basket: '사실 확인', cards: ['헌법 전문에 4·19 이념이 있다', '세 운동은 같은 해에 일어났다', '5·18은 국가 기념일이다', '6월 민주항쟁은 1960년이다'] }, target: { pick: ['헌법 전문에 4·19 이념이 있다', '5·18은 국가 기념일이다'] }, difficulty: 0.35, conclude: '민주화 운동의 정신은 교실의 작은 실천으로 이어 갈 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '민주적인 행동에 ○ 해요.', options: ['선거 참여', '가짜 뉴스 퍼뜨리기'], answer: '선거 참여' }] },
        notes: '5·18 정신을 가리키는 낱말은 5·18기념재단 자료의 표현을 확인해 쓴다(사람 확인).',
      }),
      Y('wrap.essay6', {
        title: '민주주의 실천 짧은 글', method: '민주주의 실천 짧은 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'나는 오늘 ___\')로 실천 한 문장을 쓰고 기준 2개를 점검한다.', base: '오늘 할 수 있는 실천을 세 문장으로 쓰고 기준 3개를 점검한다.', challenge: '실천의 근거(정신 낱말 하나)를 넣어 쓰고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"세 운동을 거쳐 온 민주주의를 오늘 우리 교실에서 잇는다면, 내가 할 수 있는 일은 무엇일까요?" 세 문장(무엇을·언제·왜)으로 쓰게 한다. 개인의 정치적 견해를 쓰게 하지 않고 교실 생활의 실천으로 쓰게 안내한다. 출구 2번에서 6월 민주항쟁을 5·18 앞에 둔 학생에게는 연도를 다시 견주게 한다.',
          exitTicket: [
            RUBX('오늘 교실에서 할 수 있는 민주주의 실천을 세 문장으로 써요.', { topic: '교실에서 하는 민주주의 실천', title: '민주주의 실천', starter: '나는 오늘 ___.', crit: ['실천할 일을 구체적으로 썼다', '언제 할지 썼다', '왜 하는지 까닭을 썼다'], must: [['민주', '인권', '평화', '연대']], chars: [30, 200] }),
            { type: 'choice', prompt: '세 민주화 운동을 일어난 차례대로 놓은 것은?', options: ['4·19혁명 → 5·18 → 6월 민주항쟁', '5·18 → 4·19혁명 → 6월 민주항쟁', '6월 민주항쟁 → 5·18 → 4·19혁명'], answer: 0, difficulty: 0.25, explain: '1960년 4·19혁명, 1980년 5·18, 1987년 6월 민주항쟁 차례예요.' },
          ],
        },
        worksheet: {
          title: '민주주의를 이어 가는 우리',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '5·18민주화운동은 ___년 광주에서 일어났다.', answer: '1980' },
            { type: 'short', prompt: '세 민주화 운동의 공통점을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 현충일·6·25전쟁 — 정전과 국가보훈 (5학년: 전쟁의 흐름과 정전·비무장 지대 / 6학년: 보훈의 세 갈래와 추모 장소) ========
  {
    const X = mk('june', 5);
    // 우리나라 칸 지도(6×9). 위치 관계만 살린 그림 — 북쪽 땅·비무장 지대(가운데 한 줄)·남쪽 땅으로 나눈다
    const NORTH = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2], [1, 3], [2, 3], [3, 3]];
    const DMZ = [[1, 4], [2, 4], [3, 4]];
    const SOUTH = [[1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
    const SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
    const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도(위치만 줄여 그림)', regions: [{ name: '북쪽 땅', cells: NORTH, color: 'mint' }, { name: '비무장 지대', cells: DMZ, color: 'buttercup' }, { name: '남쪽 땅', cells: SOUTH, color: 'mint' }], regionNames: false, sea: SEA, places, legend: false }, more || {});
    const P = { seoul: { name: '서울', icon: 'capital', at: [2, 5] }, pan: { name: '판문점', icon: 'dot', at: [2, 4] }, py: { name: '평양', icon: 'city', at: [1, 3] }, busan: { name: '부산', icon: 'port', at: [3, 7] }, incheon: { name: '인천', icon: 'port', at: [1, 5] } };
    M.push(
      X('intro.date5', {
        title: '6·25전쟁, 가장 먼저 일어난 일', method: '사건 날짜 어림 차례 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(전쟁 시작·정전 협정)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 사건을 찾는다.', challenge: '가장 먼저인 사건을 고른 까닭을 날짜로 짝에게 말한다.' },
        intro: {
          teacher: '"6·25전쟁은 끝났을까요, 멈췄을까요?" 대답을 듣고 가상의 한 반이 \'가장 먼저 일어난 일\'을 고른 결과를 시연 단추로 보인다. 1950년 6월 25일 전쟁이 시작되었고, 1953년 7월 27일 정전 협정으로 싸움을 멈추었으며, 그때 그은 군사 분계선이 지금도 남북을 나누고 있다고 알린다. 현충일(6월 6일)에 이 전쟁에서 희생된 분들도 함께 기린다고 덧붙인다.',
          student: '그림그래프에서 가장 많이 고른 사건을 찾고, 그 사건이 정말 가장 먼저인지 날짜로 짐작해 보아요.',
          demo: VOTE('가장 먼저 일어난 일은?(가상의 반 투표)', [['6·25전쟁 시작', 12], ['인천 상륙 작전', 6], ['정전 협정', 4]], '가장 많이 고른 것은?', 0),
          art: art('a paper calendar page of June beside a paper map of the Korean peninsula with a dotted line across the middle', '전쟁을 멈춘 날', 'flower', 'cream'),
        },
        notes: '투표 자료는 가상의 반이다. 북한 주민 전체를 미워하게 하는 표현은 쓰지 않는다.',
      }),
      X('activity.line5', {
        title: '6·25전쟁 주요 사건 차례', method: '주요 사건 날짜 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '날짜가 적힌 사건 카드 3장(시작·인천 상륙 작전·정전 협정)을 놓는다.', base: '사건 카드 5장(중국군 참전·1·4 후퇴까지)을 놓는다.', challenge: '5장에 맞지 않는 카드(광복)를 섞어 가려 내고, 1·4 후퇴가 일어난 까닭을 짝에게 설명한다.' },
        activity: {
          title: '6·25전쟁 날짜 차례', tool: 'timeline',
          teacher: '"1·4 후퇴는 인천 상륙 작전 앞일까요, 뒤일까요?" 중국군이 들어오면서 다시 서울을 내준 일이라고 짚는다. 날짜가 많아 헷갈리면 해(1950·1951·1953)부터 먼저 나누게 한다. 광복을 전쟁 중의 일로 넣는 학생에게는 광복이 1945년이라는 것을 떠올리게 한다.',
          task: '6·25전쟁의 주요 사건을 날짜 차례대로 놓고, 날짜와 사건을 이어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('6·25전쟁의 주요 사건을 날짜 차례대로 놓아요.', [['start', '6·25전쟁 시작', '1950.6'], ['land', '인천 상륙 작전', '1950.9'], ['china', '중국군 참전', '1950.10'], ['retreat', '1·4 후퇴', '1951.1'], ['stop', '정전 협정', '1953.7']], { easy: [0, 1, 4], trap: ['lib', '광복'], axis: ['먼저', '나중'] }, 0.3),
            MATCH('날짜와 그날의 일을 이어요.', [['1950년 9월 15일', '인천 상륙 작전'], ['1951년 1월 4일', '1·4 후퇴'], ['1953년 7월 27일', '정전 협정']], ['광복'], { easy: 2, base: 3, extraOpt: { axis: ['먼저', '나중'] } }, 0.35),
            { prompt: '1·4 후퇴가 일어난 까닭을 앞의 사건과 이어 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '6·25전쟁의 주요 사건을 정리해요.', columns: ['날짜', '사건'], cells: [['1950. 6. 25.', ''], ['1950. 9. 15.', ''], ['1951. 1. 4.', ''], ['1953. 7. 27.', '']], answer: '전쟁 시작 / 인천 상륙 작전 / 1·4 후퇴 / 정전 협정' }] },
      }),
      X('activity.dmz5', {
        title: '판문점과 비무장 지대 지도', method: '판문점·군사 분계선 지도', tool: 'map', minutes: 13,
        levels: { easy: '장소 이름이 보이는 지도에서 판문점·비무장 지대 칸에 핀을 꽂는다(칸 읽기 글자가 보임).', base: '장소 이름이 보이는 지도에서 핀을 꽂고, 서울과 판문점의 방향을 고른다.', challenge: '장소 이름을 숨긴 지도에서 핀을 꽂고, 비무장 지대의 뜻을 고른다.' },
        activity: {
          title: '판문점·비무장 지대 찾기', tool: 'map',
          teacher: '"판문점은 서울에서 어느 쪽에 있을까요?" 지도는 위치 관계만 줄여 그린 칸 지도라고 먼저 알린다. 군사 분계선을 가운데 두고 남북 각각 2km씩 군대를 두지 않기로 한 곳이 비무장 지대라고 설명한다. 군사 분계선을 광복 뒤의 38도선과 같다고 여기는 학생에게는 정전 때 새로 그은 선이라고 짚는다.',
          task: '칸 지도에서 정전 협정과 관련된 곳을 찾아 핀을 꽂고 물음에 답해요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '정전 협정을 맺은 판문점에 핀을 꽂아요.', toolOptions: KOR([P.seoul, P.pan, P.py, P.busan]), target: { place: '판문점' }, difficulty: 0.2,
              levels: { challenge: { prompt: '서울과 평양 사이, 정전 협정을 맺은 곳에 핀을 꽂아요.', toolOptions: { names: false } } } },
            { prompt: '군사 분계선 남북으로 펼쳐진 비무장 지대 칸에 핀을 꽂아요.', toolOptions: KOR([P.seoul, P.py, P.incheon], { regionNames: true }), target: { region: '비무장 지대' }, difficulty: 0.25,
              levels: { challenge: { prompt: '서울과 평양 사이에서 군대를 두지 않기로 한 띠 칸에 핀을 꽂아요.', toolOptions: { regionNames: false, names: false } } } },
            { prompt: '지도에서 서울과 판문점의 자리를 견주어 답을 골라요.', toolOptions: KOR([P.seoul, P.pan, P.py], { readOnly: true, ask: { q: '판문점은 서울의 어느 쪽에 있나요?', choices: ['북쪽', '남쪽'] } }), target: { pick: 0 }, difficulty: 0.2,
              levels: { challenge: { prompt: '지도를 보며 비무장 지대의 뜻을 골라요.', toolOptions: { ask: { q: '비무장 지대는 어떤 곳인가요?', choices: ['군사 분계선 남북에 군대를 두지 않기로 한 곳', '전쟁 전부터 있던 나라의 경계'] } }, target: { pick: 0 } } },
              conclude: '정전 협정으로 그은 군사 분계선 남북 2km씩을 비무장 지대로 정했어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '군사 분계선 남북 각 ___km를 비무장 지대로 정했다.', answer: '2' }] },
        notes: '계획의 \'1곳·2곳\'은 문항마다 핀 하나라서 \'이름 보이기·이름 숨기기\'로 단계를 나누었다.',
      }),
      X('wrap.word5', {
        title: '정전·휴전·종전 뜻 잇기', method: '정전·휴전·종전 뜻 잇기', tool: 'emotion', minutes: 7,
        levels: { easy: '낱말 2개(정전·종전)를 뜻과 잇는다.', base: '낱말 3개(휴전까지)를 뜻과 잇는다.', challenge: '낱말 3개를 잇고, 정전 상태를 보여 주는 예를 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"정전과 종전은 한 글자 차이인데 뜻은 어떻게 다를까요?" 낱말을 이은 뒤 6·25전쟁이 지금 어느 상태인지 묻는다. "정전은 전쟁이 완전히 끝났다는 뜻이에요"라는 말이 나오면 "싸움을 멈춘 것과 완전히 끝낸 것은 같을까요?"라고 되묻는다. 남북을 나누는 군사 분계선이 지금도 있다는 점을 짚는다.',
          exitTicket: [
            EX('emotion', MATCH('낱말과 알맞은 뜻을 이어요.', [['정전', '싸움을 멈추기로 함'], ['종전', '전쟁이 완전히 끝남'], ['휴전', '싸움을 잠시 쉼']], ['전쟁을 새로 시작함'], { easy: 2, base: 2 }, 0.2)),
            { type: 'choice', prompt: '6·25전쟁은 지금 어떤 상태인가요?', options: ['정전 협정으로 싸움을 멈춘 상태', '종전으로 완전히 끝난 상태', '지금도 싸우고 있는 상태'], answer: 0, difficulty: 0.25, explain: '1953년 7월 27일 정전 협정으로 싸움을 멈추었어요.' },
            { type: 'short', prompt: '정전 상태를 보여 주는 예를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '정전 협정과 분단',
          items: [
            { type: 'choice', prompt: '정전 협정을 맺은 곳에 ○ 해요.', options: ['판문점', '부산'], answer: '판문점' },
            { type: 'short', prompt: '현충일에 6·25전쟁에서 희생된 분들을 기리는 까닭을 써요.' },
          ],
        },
        notes: '정전·휴전·종전 풀이는 국립국어원 표준국어대사전 뜻풀이로 확인한다(사람 확인).',
      }),
    );
    const Y = mk('june', 6);
    const DJ = { name: '대전', icon: 'city', at: [2, 6] }; const GJ = { name: '광주', icon: 'city', at: [1, 7] }; const DG = { name: '대구', icon: 'city', at: [3, 6] };
    M.push(
      Y('intro.three6', {
        title: '독립·호국·민주, 무슨 뜻?', method: '보훈 세 갈래 짐작', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 독립·호국 두 칸만 보이고 뜻 카드를 함께 넣는다.', base: '세 칸(독립·호국·민주)에 뜻 카드를 넣는다.', challenge: '뜻 카드를 넣은 뒤 칸마다 떠오르는 기념일 하나와 까닭을 말한다.' },
        intro: {
          teacher: '"현충일에 기억하는 분들은 6·25전쟁에서 희생한 분들뿐일까요?" 대답을 듣고 나라를 위해 희생하고 공헌한 분들을 기억하고 예우하는 일을 국가보훈이라 하고, 크게 독립·호국·민주 세 갈래로 나눈다고 알린다. 시연 단추로 뜻 카드가 세 칸에 들어가는 모습을 보인다. "보훈은 군인만의 일이에요"라는 말이 나오면 "독립운동가와 민주화에 공헌한 분들은 어느 칸일까요?"라고 되묻는다.',
          student: '독립·호국·민주 세 낱말을 보고, 각 낱말에 어울리는 뜻 카드를 짐작해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['독립', '호국', '민주'], cards: ['나라를 지킴', '민주주의를 세움', '나라를 되찾음'], shuffle: false }, sequence: [{ sort: { '독립': ['나라를 되찾음'], '호국': [], '민주': [] } }, { sort: { '독립': ['나라를 되찾음'], '호국': ['나라를 지킴'], '민주': ['민주주의를 세움'] } }] },
          art: art('three paper flower wreaths in a row, each with a small paper ribbon, in front of a quiet paper memorial wall', '기억하고 예우해요', 'flower', 'cream'),
        },
      }),
      Y('activity.sort6', {
        title: '보훈 세 갈래로 나누기', method: '기념일·사건 세 갈래 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 3장(칸마다 1장)을 독립·호국·민주 바구니에 나눈다(틀리면 바로 알려 줌).', base: '카드 6장(칸마다 2장)을 나눈다.', challenge: '카드 9장(칸마다 3장)을 나눈다.' },
        activity: {
          title: '보훈의 세 갈래', tool: 'sortboard',
          teacher: '"이 사건은 나라를 되찾으려 한 일, 나라를 지킨 일, 민주주의를 세운 일 가운데 무엇일까요?" 올해 배운 기념일을 모두 떠올려 나누게 한다. 학생독립운동을 민주 칸에 넣는 학생에게는 "그때 무엇을 되찾으려 했나요?"라고 묻고, 4·19혁명을 독립 칸에 넣는 학생에게는 1960년이 광복 뒤라는 점을 짚는다.',
          task: '기념일과 사건 카드를 국가보훈의 세 갈래로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('사건 카드를 보훈의 세 갈래로 나누어요.', { slots: ['독립', '호국', '민주'], groups: { '독립': ['3·1운동', '광주 학생 독립운동'], '호국': ['6·25전쟁 참전', '인천 상륙 작전'], '민주': ['4·19혁명', '6월 민주항쟁'] }, easy: 1, extra: { '독립': ['청산리 전투'], '호국': ['나라를 지킨 참전 유공자'], '민주': ['5·18민주화운동'] } }, 0.35),
            SB('기리는 분을 보훈의 세 갈래로 나누어요.', { slots: ['독립', '호국', '민주'], groups: { '독립': ['순국선열', '애국지사'], '호국': ['전몰 군경', '참전 유공자'], '민주': ['4·19혁명 공헌자', '5·18민주화운동 공헌자'] }, easy: 1 }, 0.35),
            { prompt: '세 갈래 가운데 하나를 골라, 그 갈래의 기념일 하나와 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '보훈의 세 갈래와 관련 사건·기념일을 써요.', columns: ['갈래', '관련 사건·기념일'], cells: [['독립', ''], ['호국', ''], ['민주', '']], answer: '3·1운동·광복절·학생독립운동 / 6·25전쟁·현충일 / 4·19혁명·5·18·6월 민주항쟁' }] },
        notes: '보훈 대상의 이름(순국선열·애국지사·전몰 군경·참전 유공자 등)은 국가보훈부 분류로 확인한다(사람 확인).',
      }),
      Y('activity.place6', {
        title: '국립묘지·유엔기념공원 자리', method: '국립묘지·유엔기념공원 자리', tool: 'map', minutes: 13,
        levels: { easy: '장소 이름이 보이는 지도에서 대전·부산에 핀을 꽂는다(칸 읽기 글자가 보임).', base: '이름이 보이는 지도에서 핀을 꽂고, 광주의 국립묘지가 어느 갈래인지 고른다.', challenge: '이름을 숨긴 지도에서 핀을 꽂고, 서울에서 부산의 방위를 고른다.' },
        activity: {
          title: '추모 장소 지도', tool: 'map',
          teacher: '"국립묘지는 서울에만 있을까요?" 국립서울현충원과 국립대전현충원이 있고, 부산에는 6·25전쟁에서 희생된 유엔군 장병이 잠든 유엔기념공원이 있으며, 광주에는 국립5·18민주묘지가 있다고 알린다. 지도는 위치 관계만 살린 칸 지도라고 덧붙인다. 방위가 헷갈리는 학생에게는 지도 위쪽이 북쪽이라는 것을 짚는다.',
          task: '칸 지도에서 추모 장소가 있는 곳에 핀을 꽂고 물음에 답해요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '국립대전현충원이 있는 대전에 핀을 꽂아요.', toolOptions: KOR([P.seoul, DJ, GJ, P.busan]), target: { place: '대전' }, difficulty: 0.2,
              levels: { challenge: { prompt: '서울과 부산 사이, 국립대전현충원이 있는 도시에 핀을 꽂아요.', toolOptions: { names: false } } } },
            { prompt: '유엔군 장병이 잠든 유엔기념공원이 있는 부산에 핀을 꽂아요.', toolOptions: KOR([P.seoul, DJ, DG, P.busan]), target: { place: '부산' }, difficulty: 0.2,
              levels: { challenge: { prompt: '남동쪽 바닷가, 유엔기념공원이 있는 도시에 핀을 꽂아요.', toolOptions: { names: false } } } },
            { prompt: '지도에서 광주를 찾고, 그곳 국립묘지가 기리는 갈래를 골라요.', toolOptions: KOR([P.seoul, DJ, GJ, P.busan], { readOnly: true, ask: { q: '광주의 국립5·18민주묘지는 어느 갈래와 이어지나요?', choices: ['민주', '호국'] } }), target: { pick: 0 }, difficulty: 0.3,
              levels: { challenge: { prompt: '지도에서 서울과 부산을 견주어 방위를 골라요.', toolOptions: { ask: { q: '부산은 서울의 어느 쪽에 있나요?', choices: ['남동쪽', '북서쪽'] } }, target: { pick: 0 } } },
              conclude: '국립묘지는 서울·대전 현충원과 광주 5·18민주묘지처럼 여러 곳에서 각 갈래의 분들을 기려요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '유엔군 장병이 잠든 유엔기념공원이 있는 곳에 ○ 해요.', options: ['부산', '대전'], answer: '부산' }] },
        notes: '계획의 \'1곳·2곳\'은 문항마다 핀 하나라서 \'이름 보이기·이름 숨기기\'로 단계를 나누었다.',
      }),
      Y('wrap.visit6', {
        title: '추모 예절 점검과 묵념', method: '추모 예절 점검과 묵념', tool: 'timer', minutes: 7,
        levels: { easy: '추모 예절 점검 칸 2개를 표시한다.', base: '점검 칸 3개를 표시하고 교사 진행에 따라 함께 묵념한다.', challenge: '점검 칸 4개를 표시하고 묵념한 뒤 소감을 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"현충일 오전 10시에 사이렌이 울리면 어떻게 할까요?" 추모 예절을 하나씩 짚은 뒤 모두 일어나 교사 진행으로 우리 반 약속 시간(1분) 동안 묵념한다. 웃거나 장난하는 모습이 보이면 묵념 전에 "누구를 기억하는 시간인가요?"라고 다시 묻는다. 소감은 쓰고 싶은 학생만 발표하게 한다.',
          exitTicket: [
            SELF('추모 예절 점검', ['사이렌이 울리면 하던 일을 멈춘다', '바른 자세로 서서 묵념한다', '묵념하는 동안 떠들지 않는다', '현충일에 기억하는 분들을 말할 수 있다']),
            { type: 'choice', prompt: '국가보훈의 뜻으로 알맞은 것은?', options: ['나라 위해 희생·공헌한 분을 기억하고 예우함', '국경일에 쉬는 것', '군인만 기억하는 것'], answer: 0, difficulty: 0.25, explain: '보훈은 나라를 위해 희생하고 공헌한 분들을 기억하고 예우하는 일이에요.' },
            { type: 'short', prompt: '묵념을 한 뒤 든 생각을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '기억하고 예우해요',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '현충일에는 오전 ___시에 사이렌이 울리면 묵념한다.', answer: '10' },
            { type: 'short', prompt: '보훈의 뜻을 이어 오늘 내가 할 수 있는 일을 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 묵념 1분은 우리 반 약속 시간이다.',
      }),
    );
  }

  // ======== 6·10민주항쟁 기념일 — 국민 주권과 참여 (5학년: 1987년의 흐름과 헌법 맨 앞 조문 / 6학년: 시민의 참여와 온라인 책임) ========
  {
    const X = mk('june10', 5);
    M.push(
      X('intro.q5', {
        title: '"나라의 주인은 누구?" 투표', method: '"주인은 누구?" 질문 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(국민·대통령)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 답을 찾는다.', challenge: '가장 많이 고른 답이 맞는지 헌법 맨 앞 조문을 떠올려 까닭을 말한다.' },
        intro: {
          teacher: '"우리나라의 주인은 누구일까요?" 가상의 한 반이 고른 결과를 시연 단추로 보이고 함께 센다. 헌법 맨 앞 조문 2항에 \'대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다\'고 적혀 있다고 알린다. \'대통령\'을 고른 학생에게는 "대통령은 누가 뽑나요? 국민이 뽑은 대표예요"라고 짚는다. 1987년 6월 시민들이 이 뜻을 지키려 모였던 일을 오늘 살펴본다고 밝힌다.',
          student: '그림그래프에서 가장 많이 고른 답을 찾고, 나라의 주인이 누구인지 내 생각을 짝에게 말해 보아요.',
          demo: VOTE('나라의 주인은 누구?(가상의 반 투표)', [['국민', 14], ['대통령', 6], ['국회 의원', 3]], '가장 많이 고른 것은?', 0),
          art: art('a paper constitution book open to its first page with paper citizens of all ages standing around it in a square', '나라의 주인은 누구?', 'star', 'sky'),
        },
        notes: '투표 자료는 가상의 반이다. 특정 대통령·정당 이야기는 하지 않는다.',
      }),
      X('activity.flow5', {
        title: '1987년 6월 민주항쟁 흐름', method: '6월 민주항쟁 흐름 정리', tool: 'timeline', minutes: 14,
        levels: { easy: '때가 적힌 카드 3장(국민 대회·헌법 개정·직접 선거)을 차례로 놓는다.', base: '카드 4장(1월 사건까지)을 놓고, 개헌 전과 뒤의 모습을 나눈다.', challenge: '카드 5장(직선제 수용 발표까지)을 놓고, 원인과 결과를 이어 짝에게 설명한다.' },
        activity: {
          title: '1987년의 흐름', tool: 'timeline',
          teacher: '"1월의 일이 6월의 항쟁과 어떻게 이어질까요?" 대학생 박종철이 경찰 조사 중 숨진 일이 알려지며 시민들의 분노가 커졌다는 점을 차분히 전한다(자세한 장면은 다루지 않는다). 대통령 선거를 헌법 개정보다 앞에 두는 학생에게는 "선거 방법을 먼저 바꿔야 직접 뽑을 수 있겠죠?"라고 짚는다. 인물 평가나 오늘날 정치 이야기는 하지 않는다.',
          task: '1987년의 일을 차례대로 놓고, 헌법이 바뀌기 전과 뒤의 모습을 나누어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('1987년의 일을 일어난 차례대로 놓아요.', [['jan', '박종철 사건', '1월'], ['jun10', '6·10 국민 대회', '6월'], ['jun29', '직선제 수용 발표', '6월 말'], ['oct', '헌법 개정', '10월'], ['dec', '대통령 직접 선거', '12월']], { easy: [1, 3, 4], base: [0, 1, 3, 4], axis: ['먼저', '나중'] }, 0.3),
            { prompt: '1987년 헌법이 바뀌기 전과 뒤의 모습으로 나누어요.', toolOptions: { mode: 'sort', slots: ['개헌 전', '개헌 뒤'], cards: ['선거인단이 대통령 선출', '국민이 대통령 직접 선출', '대통령 임기 5년 한 번'], axis: ['먼저', '나중'] }, target: { sort: { '개헌 전': ['선거인단이 대통령 선출'], '개헌 뒤': ['국민이 대통령 직접 선출', '대통령 임기 5년 한 번'] } }, difficulty: 0.35 },
            { prompt: '시민들의 요구에서 헌법 개정까지를 "그래서"로 이어 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '1987년의 흐름을 정리해요.', columns: ['때', '일'], cells: [['1월', ''], ['6월 10일', ''], ['10월', ''], ['12월', '']], answer: '박종철 사건 / 전국 국민 대회 / 헌법 개정 / 대통령 직접 선거' }] },
        notes: '6월 민주항쟁의 평가는 교과서 서술 범위로 다룬다. 6·29 발표는 발표한 사람 대신 내용(직선제 수용)으로만 다룬다.',
      }),
      X('activity.art1', {
        title: '헌법 맨 앞 조문 낱말 풀기', method: '헌법 제1조 낱말 풀기', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(민주공화국·주권)에 뜻 카드를 잇는다(남는 카드 1장).', base: '가지 3개(국민까지)에 뜻 카드를 잇고, 조문에 있는 낱말을 고른다.', challenge: '가지 4개(권력까지)에 뜻 카드를 잇는다(남는 카드 2장).' },
        activity: {
          title: '헌법 맨 앞 조문 풀기', tool: 'mindmap',
          teacher: '"\'대한민국은 민주공화국이다\'에서 민주공화국은 어떤 나라일까요?" 조문을 함께 소리 내어 읽고 낱말을 하나씩 짚는다. \'주권\'을 \'대통령의 힘\'으로 잇는 학생에게는 "조문은 주권이 누구에게 있다고 했나요?"라고 되묻는다. 뜻을 이은 뒤 학급 회의·반 대표 선거처럼 우리가 뜻을 나타내는 모습과 잇게 한다.',
          task: '헌법 맨 앞 조문의 낱말 가지에 알맞은 뜻 카드를 이어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('헌법 맨 앞 조문의 낱말과 알맞은 뜻을 이어요.', [['민주공화국', '국민이 주인이고 대표를 뽑는 나라'], ['주권', '나라의 일을 마지막으로 정하는 힘'], ['국민', '나라를 이루는 사람들'], ['권력', '나라를 다스리는 힘']], ['왕이 물려받는 자리', '군대가 다스리는 나라'], { easy: 2, base: 3, unit: '가지', extraOpt: { topic: '헌법 맨 앞 조문' } }, 0.35),
            { prompt: '헌법 맨 앞 조문에 나오는 낱말만 골라 담아요.', toolOptions: { mode: 'pick', topic: '헌법 맨 앞 조문', basket: '조문에 나오는 낱말', cards: ['민주공화국', '왕국', '주권', '국민', '군대'] }, target: { pick: ['민주공화국', '주권', '국민'] }, difficulty: 0.25 },
            { prompt: '"모든 권력은 국민으로부터 나온다"를 우리 반 생활의 예로 바꾸어 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '헌법 맨 앞 조문을 채워요.', text: '대한민국의 주권은 ___에게 있고, 모든 권력은 국민으로부터 나온다.', answer: '국민' }] },
        notes: '학생 화면에는 조문 번호 대신 \'헌법 맨 앞 조문\'이라고 쓴다(초5-6 학년군 기준). 조문 원문은 국가법령정보센터에서 띄워 보인다.',
      }),
      X('wrap.say5', {
        title: '국민 주권 한 문장', method: '국민 주권 한 문장', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'국민 주권은 ___라는 뜻이다\')에 빈칸을 채우고 기준 2개를 점검한다.', base: '국민 주권의 뜻을 한 문장으로 쓰고 기준 3개를 점검한다.', challenge: '국민이 주권을 나타내는 예를 넣어 쓰고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"국민 주권을 처음 듣는 동생에게 한 문장으로 알려 준다면 어떻게 말할까요?" 어려운 말 대신 쉬운 말로 쓰게 한다. \'대통령이 정한다\'처럼 쓰는 학생에게는 조문을 다시 읽게 한다. 출구 2번에서 직접 선거를 헌법 개정 앞에 둔 학생에게는 바뀐 헌법에 따라 선거를 치렀다는 점을 짚는다.',
          exitTicket: [
            RUBX('국민 주권의 뜻을 동생에게 알려 주듯 한 문장으로 써요.', { topic: '국민 주권의 뜻', title: '국민 주권 한 문장', starter: '국민 주권은 ___라는 뜻이다.', crit: ['국민과 주권 두 낱말을 넣었다', '쉬운 말로 썼다', '한 문장으로 썼다'], must: ['국민', ['주권', '주인']], chars: [15, 120] }),
            { type: 'choice', prompt: '1987년에 일어난 일의 차례로 알맞은 것은?', options: ['국민 대회 → 헌법 개정 → 직접 선거', '직접 선거 → 국민 대회 → 헌법 개정', '헌법 개정 → 직접 선거 → 국민 대회'], answer: 0, difficulty: 0.25, explain: '6월 국민 대회, 10월 헌법 개정, 12월 직접 선거 차례예요.' },
          ],
        },
        worksheet: {
          title: '주권은 국민에게',
          items: [
            { type: 'choice', prompt: '1987년 헌법이 바뀐 뒤의 모습에 ○ 해요.', options: ['국민이 대통령 직접 선출', '선거인단이 대통령 선출'], answer: '국민이 대통령 직접 선출' },
            { type: 'short', prompt: '6월 민주항쟁이 오늘 우리 생활에 남긴 것을 써요.' },
          ],
        },
      }),
    );
    const Y = mk('june10', 6);
    M.push(
      Y('intro.ways6', {
        title: '시민이 참여하는 방법 고르기', method: '참여 방법 그림 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 카드 두 장을 읽어 주고 민주적인 참여를 함께 고른다.', base: '카드 세 장을 고르고 참여가 아닌 카드를 가려 낸다.', challenge: '참여 카드 네 장을 모두 고르고 초등학생도 할 수 있는 것을 짚는다.' },
        intro: {
          teacher: '"1987년 6월 시민들은 목소리를 모아 제도를 바꾸었어요. 오늘날 시민은 어떤 방법으로 뜻을 나타낼까요?" 시연 단추로 참여 방법 카드가 바구니에 담기는 모습을 보인다. "나라 일은 어른만 참여해요"라는 말이 나오면 "학생 자치회 안건이나 자원봉사는 누가 할 수 있을까요?"라고 되묻는다.',
          student: '참여 방법 카드 가운데 민주 시민이 뜻을 나타내는 방법을 골라 보아요.',
          demo: WPICK('시민의 참여 방법', ['선거에서 투표하기', '거짓 소문 퍼뜨리기', '청원 내기', '자원봉사 하기', '학생 자치회 안건 내기'], [['선거에서 투표하기', '청원 내기'], ['선거에서 투표하기', '청원 내기', '자원봉사 하기', '학생 자치회 안건 내기']]),
          art: art('paper citizens dropping ballots, writing a petition and helping in a park, all connected by paper strings to a town hall', '시민은 어떻게 참여할까?', 'house', 'buttercup'),
        },
      }),
      Y('activity.sort6', {
        title: '참여 방법 세 갈래', method: '참여 방법 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 3장(칸마다 1장)을 직접 함께하기·만나서 의견 내기·온라인 참여 바구니에 나눈다(틀리면 바로 알려 줌).', base: '카드 6장을 나눈다.', challenge: '카드 9장(넣지 않을 카드 포함)을 나누고, 초등학생이 지금 할 수 있는 참여를 골라 까닭을 말한다.' },
        activity: {
          title: '참여 방법 나누기', tool: 'sortboard',
          teacher: '"이 방법은 다른 사람의 권리를 지키면서 뜻을 나타낼까요?" 카드마다 누가, 어디에서 할 수 있는지 말하게 한다. 온라인 서명을 \'만나서 의견 내기\'에 넣는 학생에게는 어디에서 하는지를 기준으로 다시 보게 한다. 폭력·거짓 소문 카드는 어느 바구니에도 넣지 않는다는 점을 짚는다.',
          task: '시민의 참여 방법 카드를 세 갈래 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('시민의 참여 방법을 세 갈래로 나누어요.', { slots: ['직접 함께하기', '만나서 의견 내기', '온라인 참여'], groups: { '직접 함께하기': ['선거에서 투표하기', '자원봉사 하기'], '만나서 의견 내기': ['공청회에서 의견 말하기', '학교에 건의서 내기'], '온라인 참여': ['온라인 서명 참여', '누리집 토론방에 의견 쓰기'] }, easy: 1, extra: { '직접 함께하기': ['마을 청소에 함께하기'] }, traps: ['폭력으로 위협하기', '가짜 뉴스로 여론 몰기'] }, 0.3),
            SB('초등학생이 지금 할 수 있는 참여와 어른이 되어 할 참여로 나누어요.', { slots: ['지금 할 수 있음', '어른이 되어서'], groups: { '지금 할 수 있음': ['학생 자치회 안건 내기', '지역 봉사 활동', '학교 토론방 의견 쓰기'], '어른이 되어서': ['대통령 선거 투표', '국회 의원 선거 출마', '지방 선거 투표'] } }, 0.3, { conclude: '학생도 자치회·봉사·의견 내기로 지금 참여할 수 있어요.' }),
            { prompt: '내가 이번 달에 해 볼 수 있는 참여 하나와 그 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '참여 방법과 쓰임을 써요.', columns: ['참여 방법', '쓰임'], cells: [['선거', ''], ['청원', ''], ['자원봉사', '']], answer: '대표를 뽑음 / 바라는 것을 요청함 / 공동체를 직접 도움' }] },
        notes: '진행 중인 실제 청원이나 정당 활동은 예로 쓰지 않는다.',
      }),
      Y('activity.online6', {
        title: '토론방 댓글, 어떻게 쓸까', method: '온라인 참여 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(반대 의견 글)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(출처 없는 소식)을 지나 근거 2장을 고른다.', challenge: '갈림 3번(온라인 서명 링크)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 온라인에서 참여하기', tool: 'dilemma',
          teacher: '"온라인에서는 얼굴이 보이지 않아도 책임이 있을까요?" 고를 때마다 결과 칸을 읽게 한다. 비웃는 댓글을 \'표현의 자유\'라고 하는 학생에게는 "의견에 반대하는 것과 사람을 공격하는 것은 같을까요?"라고 묻는다. 확인하지 않은 소식을 퍼뜨리면 가짜 뉴스를 돕게 된다는 점을 짚는다. 장면은 지어낸 이야기다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '학교 토론방',
            steps: [
              { text: '학교 토론방(가상)에 "쉬는 시간 늘리기"에 반대하는 글이 올라왔어요. 나는 찬성이에요.', motif: 'house',
                good: ['reason', '근거를 들어 정중히 내 의견을 쓴다', '서로 근거를 견주며 토론이 이어져요.', [['토론방', '생각이 넓어져요', 1]]],
                bad: ['mock', '글쓴이를 비웃는 댓글을 단다', '토론이 싸움이 되고 다들 떠나요.', '의견에 반대해도 사람을 공격하지 않아요.', [['글쓴이', '상처받아요', -1]]] },
              { text: '단체 대화방에 "내일 학교가 문 닫는대"라는 글이 출처 없이 돌아요.', motif: 'cloud',
                good: ['verify', '학교 공지로 먼저 확인한다', '사실이 아님을 알고 퍼뜨리지 않아요.', [['친구들', '헷갈리지 않아요', 1]]],
                bad: ['forward', '모두에게 바로 전달한다', '거짓 소식이 순식간에 퍼져요.', '확인 없이 퍼뜨리면 가짜 뉴스를 돕게 돼요.', [['친구들', '잘못 알아요', -1]]] },
              { text: '"학교 앞 횡단보도를 늘려 주세요" 온라인 서명 링크를 받았어요.', motif: 'star',
                good: ['read', '내용과 올린 곳을 확인하고 참여한다', '믿을 수 있는 요청에 내 뜻을 보태요.', [['우리 동네', '안전해질 수 있어요', 1]]],
                bad: ['blind', '읽지 않고 링크부터 누른다', '가짜 누리집이면 내 정보가 샐 수 있어요.', '참여 전에 내용과 출처를 확인해요.', [['나', '정보가 샐 수 있어요', -1]]] },
            ],
            ending: '정중하게 의견을 내고, 확인한 뒤 참여해 온라인에서도 책임 있는 시민이 되었어요.',
            reasons: [{ id: 'respect', text: '의견에 반대해도 사람은 존중한다' }, { id: 'check', text: '확인한 뒤에 퍼뜨린다' }, { id: 'source', text: '참여 전에 내용과 출처를 본다' }, { id: 'hidden', text: '얼굴이 안 보이니 괜찮다', why: '온라인에서도 내 말에는 책임이 있어요.' }, { id: 'fast', text: '빨리 퍼뜨리는 것이 참여다', why: '확인하지 않으면 거짓을 돕게 돼요.' }],
            good: ['respect', 'check', 'source'],
            talk: '모둠에서 "온라인 토론에서 지킬 약속"을 하나 정해 이야기해요.',
            conclude: '온라인 참여도 근거·확인·존중이 있어야 민주적인 참여가 돼요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '책임 있는 온라인 참여에 ○ 해요.', options: ['출처를 확인한 뒤 공유하기', '확인 없이 바로 전달하기'], answer: '출처를 확인한 뒤 공유하기' }] },
      }),
      Y('wrap.proposal6', {
        title: '학교에 의견 내기 연습', method: '학교에 의견 내기 연습', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 건의 한 문장을 정해 발표하고 점검 칸 2개를 표시한다.', base: '건의를 세 문장(문제·까닭·바라는 것)으로 발표하고 점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 다른 모둠의 질문에 답한다.' },
        wrap: {
          teacher: '"우리 학교에 바라는 것 하나를 정중한 말로 건의해 볼까요?" 모둠마다 2분 동안 건의를 정하고 교사가 차례를 정해 발표하게 한다. "그냥 바꿔 주세요"처럼 말하는 모둠에는 "왜 바꾸어야 하는지 까닭을 넣어 볼까요?"라고 묻는다. 특정 선생님이나 친구를 탓하는 건의는 문제와 바라는 것으로 바꾸어 말하게 한다.',
          exitTicket: [
            SELF('의견 내기 점검', ['건의할 문제를 하나 정했다', '까닭을 들어 말했다', '정중한 말로 발표했다', '다른 모둠의 질문에 답했다']),
            { type: 'choice', prompt: '민주 시민의 참여로 알맞은 것은?', options: ['학생 자치회에 안건 내기', '다른 의견 억누르기', '확인 없이 소문 전달하기'], answer: 0, difficulty: 0.2, explain: '평화롭고 책임 있는 방법이 민주적인 참여예요.' },
            { type: 'short', prompt: '우리 모둠이 낸 건의를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '민주 시민의 참여',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '6·10민주항쟁 기념일은 ___월 10일이다.', answer: '6' },
            { type: 'short', prompt: '의견이 다른 사람과 토론할 때 지킬 약속을 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 건의는 실제로 학생 자치회에 넘길 수 있게 모아 둔다.',
      }),
    );
  }

  // ======== 광복절 — 독립운동의 흐름과 정부 수립 (5학년: 무장 독립운동과 의거 / 6학년: 광복에서 정부 수립까지, 다섯 국경일) ========
  {
    const X = mk('liberation', 5);
    // 동아시아 칸 지도(6×4) — 위치 관계만 살린 그림
    const ASIA_SEA = [[4, 0], [4, 1], [4, 2], [4, 3], [3, 2], [3, 3], [5, 0]];
    const ASIA = (places, more) => Object.assign({ grid: [6, 4], title: '동아시아 칸 지도(위치만 줄여 그림)', regions: [{ name: '중국', cells: [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2], [0, 3], [1, 3], [2, 3]], color: 'peach' }, { name: '한반도', cells: [[3, 0], [3, 1]], color: 'mint' }, { name: '일본', cells: [[5, 1], [5, 2], [5, 3]], color: 'sky' }], regionNames: true, sea: ASIA_SEA, places, legend: false }, more || {});
    const C = { seoul: { name: '서울', icon: 'capital', at: [3, 1] }, sh: { name: '상하이', icon: 'port', at: [2, 2] }, cq: { name: '충칭', icon: 'city', at: [0, 2] }, tk: { name: '도쿄', icon: 'city', at: [5, 2] }, bj: { name: '베이징', icon: 'city', at: [1, 0] } };
    M.push(
      X('intro.who5', {
        title: '한인 애국단은 무엇을 했을까', method: '단체 이름 보고 짐작 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(의거·농사법)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 활동을 찾는다.', challenge: '단체 이름의 \'애국\'을 근거로 가장 많이 고른 활동이 맞는지 까닭을 말한다.' },
        intro: {
          teacher: '"광복은 저절로 찾아왔을까요?" 대답을 들은 뒤 가상의 한 반이 \'한인 애국단이 한 일\'을 짐작해 고른 결과를 시연 단추로 보인다. 1920년 봉오동·청산리 전투, 1930년대의 의거, 1940년 한국광복군 창설처럼 나라 밖에서도 꾸준히 독립 전쟁을 이어 갔다고 알린다. "독립운동은 만세만 불렀어요"라는 말이 나오면 "나라 밖에서 군대를 만든 사람들도 있었어요"라고 짚는다.',
          student: '그림그래프에서 가장 많이 고른 활동을 찾고, 단체 이름에서 그 단체가 한 일을 짐작해 보아요.',
          demo: VOTE('한인 애국단이 한 일은?(가상의 반 투표)', [['의거로 독립 의지를 알림', 11], ['농사법을 가르침', 3], ['학교 운동회를 엶', 2]], '가장 많이 고른 것은?', 0),
          art: art('paper silhouettes of independence fighters walking through a forest valley under a paper sunrise', '광복을 향한 길', 'sun', 'buttercup'),
        },
        notes: '투표 자료는 가상의 반이다. 다른 나라 국민 전체를 미워하게 하는 표현은 쓰지 않는다.',
      }),
      X('activity.line5', {
        title: '무장 독립운동 연표', method: '무장 독립운동 연표', tool: 'timeline', minutes: 14,
        levels: { easy: '연도가 적힌 카드 3장(임시 정부·한국광복군·광복)을 놓는다.', base: '카드 5장(전투·의거까지)을 놓는다.', challenge: '5장에 맞지 않는 카드(훈민정음 반포)를 섞어 가려 내고, 흐름을 짝에게 설명한다.' },
        activity: {
          title: '독립운동 연표', tool: 'timeline',
          teacher: '"임시 정부가 세워진 뒤 독립운동은 어떻게 이어졌을까요?" 연도의 수를 견주며 놓게 한다. 한국광복군을 1920년대에 두는 학생에게는 임시 정부가 군대를 만든 것은 광복에 가까운 때라는 점을 짚는다. 광복을 독립운동만의 결과로 보거나 바깥 힘만의 결과로 보는 말이 나오면 교과서 서술대로 꾸준한 독립운동과 국제 정세가 함께 작용했다고 정리한다.',
          task: '독립운동의 주요 사건을 연표에 차례대로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('독립운동의 흐름을 연표에 차례대로 놓아요.', [['gov', '임시 정부 수립', '1919'], ['battle', '봉오동·청산리 전투', '1920'], ['yun', '윤봉길 의거', '1932'], ['army', '한국광복군 창설', '1940'], ['lib', '광복', '1945']], { easy: [0, 3, 4], trap: ['hun', '훈민정음 반포'], axis: ['옛날', '오늘날'] }, 0.3),
            { prompt: '사건을 1920년대와 1930년대 이후로 나누어요.', toolOptions: { mode: 'sort', slots: ['1920년대', '1930년대 이후'], cards: ['봉오동 전투', '윤봉길 의거', '청산리 전투', '한국광복군 창설'], axis: ['옛날', '오늘날'] }, target: { sort: { '1920년대': ['봉오동 전투', '청산리 전투'], '1930년대 이후': ['윤봉길 의거', '한국광복군 창설'] } }, difficulty: 0.3 },
            { prompt: '임시 정부 수립부터 광복까지의 흐름을 연도를 넣어 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '임시 정부는 ___년에 한국광복군을 만들었다.', answer: '1940' }] },
      }),
      X('activity.match5', {
        title: '독립운동가와 활동 잇기', method: '인물·활동·단체 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '인물 2명에 활동 카드를 잇는다(남는 카드 1장).', base: '인물 3명에 활동을 잇고, 의거 장소를 잇는다.', challenge: '인물 4명에 활동을 잇는다(남는 카드 2장).' },
        activity: {
          title: '인물·활동·단체 잇기', tool: 'emotion',
          teacher: '"한인 애국단을 만든 사람은 누구였을까요?" 김구가 한인 애국단을 만들고 이봉창·윤봉길의 의거를 이끌었다고 알린다. 홍범도와 김좌진의 전투를 바꾸어 잇는 학생에게는 전투 이름과 이끈 사람을 한 쌍씩 소리 내어 말하게 한다. 인물의 마음이나 말은 지어내지 않고 공식 자료의 사실만 다룬다.',
          task: '독립운동가와 활동·단체·장소를 이어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('독립운동가와 활동을 이어요.', [['홍범도', '봉오동 전투'], ['김좌진', '청산리 전투'], ['김구', '한인 애국단 조직'], ['윤봉길', '훙커우 공원 의거']], ['첨성대 쌓기', '측우기 만들기'], { easy: 2, base: 3, unit: '명' }, 0.35),
            { prompt: '한인 애국단원과 의거 장소를 이어요. 맞지 않는 카드는 남겨요.', toolOptions: { mode: 'match', slots: [{ id: 'lee', label: '이봉창' }, { id: 'yun', label: '윤봉길' }], cards: ['상하이 훙커우 공원', '도쿄', '평양'] }, target: { match: { lee: '도쿄', yun: '상하이 훙커우 공원' } }, difficulty: 0.4 },
            { prompt: '한국광복군과 관련된 것만 골라 담아요.', toolOptions: { mode: 'pick', basket: '한국광복군', cards: ['1940년 창설', '조선 왕실의 군대', '임시 정부의 군대', '1920년 청산리 전투'] }, target: { pick: ['1940년 창설', '임시 정부의 군대'] }, difficulty: 0.35, conclude: '나라 안팎에서 많은 사람이 전투·의거·군대로 독립을 이어 갔어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '한인 애국단을 만든 사람에 ○ 해요.', options: ['김구', '김좌진'], answer: '김구' }] },
      }),
      X('wrap.map5', {
        title: '나라 밖 독립운동 지역 지도', method: '활동 지역 지도', tool: 'map', minutes: 7,
        levels: { easy: '도시 이름이 보이는 지도(서울·상하이·도쿄)에서 핀을 꽂는다(칸 읽기 글자가 보임).', base: '도시 다섯 곳 이름이 보이는 지도에서 핀을 꽂는다.', challenge: '도시 이름을 숨긴 지도에서 위치 단서로 핀을 꽂는다.' },
        wrap: {
          teacher: '"독립운동은 우리 땅 안에서만 했을까요?" 지도에서 서울을 먼저 찾게 한 뒤 상하이·도쿄·충칭을 짚는다. 상하이에 임시 정부가 처음 세워졌고 윤봉길 의거가 있었으며, 이봉창 의거는 도쿄, 뒤에 임시 정부 청사가 충칭에도 있었다고 알린다. 지도는 위치만 줄여 그린 칸 지도라고 덧붙인다. 출구 3번에서 광복을 독립운동만의 결과로 고른 학생에게는 교과서 서술을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: ASIA([C.seoul, C.sh, C.tk, C.cq, C.bj]), prompt: '임시 정부가 처음 세워지고 윤봉길 의거가 있었던 도시에 핀을 꽂아요.', target: { place: '상하이' }, difficulty: 0.2,
              levels: { easy: { toolOptions: { places: [C.seoul, C.sh, C.tk], readout: true } }, challenge: { prompt: '서울의 남서쪽 바닷가, 임시 정부가 처음 세워진 도시에 핀을 꽂아요.', toolOptions: { names: false } } } },
            { type: 'tool', tool: 'map', options: ASIA([C.seoul, C.sh, C.tk, C.cq, C.bj]), prompt: '이봉창 의거가 있었던 도시에 핀을 꽂아요.', target: { place: '도쿄' }, difficulty: 0.2,
              levels: { easy: { toolOptions: { places: [C.seoul, C.sh, C.tk], readout: true } }, challenge: { prompt: '바다 건너 동쪽 섬나라, 이봉창 의거가 있었던 도시에 핀을 꽂아요.', toolOptions: { names: false } } } },
            { type: 'choice', prompt: '교과서가 설명하는 광복의 까닭으로 알맞은 것은?', options: ['꾸준한 독립운동과 국제 정세가 함께 작용했다', '바깥 나라가 그냥 돌려주었다', '하루 만에 저절로 찾아왔다'], answer: 0, difficulty: 0.25, explain: '독립운동의 꾸준한 노력과 국제 정세가 함께 작용했어요.' },
          ],
        },
        worksheet: {
          title: '광복을 향한 길',
          items: [
            { type: 'table', prompt: '독립운동 연표를 완성해요.', columns: ['연도', '사건', '관련 인물·단체'], cells: [['1919', '', ''], ['1920', '', ''], ['1932', '', ''], ['1940', '', '']], answer: '임시 정부 수립·대한민국 임시 정부 / 봉오동·청산리 전투·홍범도·김좌진 / 훙커우 공원 의거·윤봉길(한인 애국단) / 한국광복군 창설·임시 정부' },
            { type: 'short', prompt: '광복절에 기억하고 싶은 독립운동과 그 까닭을 써요.' },
          ],
        },
        notes: '계획의 \'1곳·2곳·3곳\'은 문항마다 핀 하나라서, 출구 두 문항(상하이·도쿄)과 \'보이는 도시 수·이름 숨기기\'로 단계를 나누었다. 충칭은 교사 설명과 지도 위 이름으로만 다룬다.',
      }),
    );
    const Y = mk('liberation', 6);
    M.push(
      Y('intro.gap6', {
        title: '광복과 정부 수립 사이', method: '광복과 정부 수립 사이 짐작', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 카드 두 장(같은 날·3년)을 읽어 주고 함께 고른다.', base: '카드 세 장 가운데 알맞은 기간을 고른다.', challenge: '고른 기간 사이에 무슨 일이 있었을지 짐작해 짝에게 말한다.' },
        intro: {
          teacher: '"광복절인 8월 15일에 함께 기념하는 일이 두 가지라는 것을 아나요?" 1945년 8월 15일 광복과 1948년 8월 15일 대한민국 정부 수립이라고 알리고, 두 날 사이가 얼마인지 시연 단추로 고르는 모습을 보인다. "광복한 날 바로 정부가 세워졌어요"라는 말이 나오면 "두 해의 수를 견주어 볼까요?"라고 되묻는다. 그 사이에 분단, 5·10 총선거, 헌법 공포가 있었다고 덧붙인다.',
          student: '광복(1945)과 정부 수립(1948) 사이가 얼마나 되는지 카드에서 골라 보아요.',
          demo: WPICK('광복과 정부 수립 사이', ['같은 날', '3년', '10년', '하루'], [['3년']]),
          art: art('two paper calendar pages for August 15 in 1945 and 1948 joined by a paper bridge with small steps', '광복에서 정부 수립까지', 'sun', 'buttercup'),
        },
      }),
      Y('activity.line6', {
        title: '광복에서 정부 수립까지', method: '광복→정부 수립 연표', tool: 'timeline', minutes: 14,
        levels: { easy: '때가 적힌 카드 3장(광복·총선거·정부 수립)을 놓는다.', base: '카드 4장(헌법 공포까지)을 놓고 날짜와 일을 잇는다.', challenge: '카드 5장(38도선 분단까지)을 놓고, 헌법과 정부의 차례를 짝에게 설명한다.' },
        activity: {
          title: '광복→정부 수립 연표', tool: 'timeline',
          teacher: '"헌법을 만든 날과 정부를 세운 날 가운데 무엇이 먼저일까요?" 5·10 총선거로 뽑힌 국회가 헌법을 만들고(7월 17일 공포), 그 헌법에 따라 8월 15일 정부를 세웠다고 짚는다. 분단을 정부 수립 뒤에 두는 학생에게는 광복 직후 38도선이 그어졌다는 점을 알려 준다. 분단의 책임을 두고 해석을 다투지 않고 교과서 서술의 차례만 다룬다.',
          task: '광복부터 정부 수립까지의 일을 차례대로 놓고, 날짜와 일을 이어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('광복부터 정부 수립까지 일어난 차례대로 놓아요.', [['lib', '광복', '1945.8'], ['line', '38도선 분단', '1945.9'], ['vote', '5·10 총선거', '1948.5'], ['law', '헌법 공포', '1948.7'], ['gov', '대한민국 정부 수립', '1948.8']], { easy: [0, 2, 4], base: [0, 2, 3, 4], axis: ['먼저', '나중'] }, 0.35),
            MATCH('1948년의 날짜와 그날의 일을 이어요.', [['1948년 5월 10일', '5·10 총선거'], ['1948년 7월 17일', '헌법 공포'], ['1948년 8월 15일', '대한민국 정부 수립']], ['6·25전쟁 시작'], { easy: 2, base: 3, extraOpt: { axis: ['먼저', '나중'] } }, 0.35),
            { prompt: '광복절에 광복과 정부 수립을 함께 기념하는 까닭을 연표로 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '대한민국 정부는 ___년 8월 15일에 수립되었다.', answer: '1948' }] },
      }),
      Y('activity.five6', {
        title: '다섯 국경일과 뜻 잇기', method: '다섯 국경일과 뜻 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '국경일 3개(3·1절·광복절·한글날)에 뜻 카드를 잇는다.', base: '국경일 5개 모두에 뜻 카드를 잇고, 국경일이 아닌 날을 고른다.', challenge: '국경일 5개를 날짜 카드와도 잇는다.' },
        activity: {
          title: '국경일과 뜻 잇기', tool: 'emotion',
          teacher: '"제헌절은 무엇을 기념할까요?" 오늘 연표의 7월 17일과 이어 준다. 현충일을 국경일로 고르는 학생에게는 현충일은 추모하는 기념일이라고 짚는다. 국경일은 「국경일에 관한 법률」이 정한 다섯 날이고 나머지는 기념일이라고 구별한다.',
          task: '다섯 국경일과 기념하는 일을 잇고, 국경일이 아닌 날을 가려요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            (() => {
              const it = MATCH('국경일과 기념하는 일을 이어요.', [['3·1절', '3·1운동'], ['광복절', '광복과 정부 수립'], ['한글날', '훈민정음 반포'], ['제헌절', '헌법 공포'], ['개천절', '고조선 건국']], [], { easy: 3, base: 5, unit: '개' }, 0.4);
              const days = [['3·1절', '3월 1일'], ['광복절', '8월 15일'], ['한글날', '10월 9일'], ['제헌절', '7월 17일'], ['개천절', '10월 3일']];
              it.levels.challenge = { prompt: '다섯 국경일과 날짜를 이어요.', toolOptions: { slots: days.map(([l], i) => ({ id: `p${i + 1}`, label: l })), cards: days.map(([, d]) => d).reverse() }, target: { match: Object.fromEntries(days.map(([, d], i) => [`p${i + 1}`, d])) } };
              return it;
            })(),
            { prompt: '국경일이 아닌 날만 골라 담아요.', toolOptions: { mode: 'pick', basket: '국경일이 아닌 날', cards: ['현충일', '제헌절', '5·18민주화운동 기념일', '한글날'] }, target: { pick: ['현충일', '5·18민주화운동 기념일'] }, difficulty: 0.35 },
            { prompt: '태극기를 다는 법에 따라 날을 나누어요.', toolOptions: { mode: 'sort', slots: ['깃봉에 붙여 닮', '조기로 닮'], cards: ['광복절', '현충일', '개천절'] }, target: { sort: { '깃봉에 붙여 닮': ['광복절', '개천절'], '조기로 닮': ['현충일'] } }, difficulty: 0.3, conclude: '국경일은 다섯 날이고, 현충일 같은 추모일에는 조기를 달아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다섯 국경일을 정리해요.', columns: ['국경일', '날짜', '기념하는 일'], cells: [['3·1절', '', ''], ['제헌절', '', ''], ['광복절', '', ''], ['개천절', '', ''], ['한글날', '', '']], answer: '3.1·3·1운동 / 7.17·헌법 공포 / 8.15·광복과 정부 수립 / 10.3·고조선 건국 / 10.9·훈민정음 반포' }] },
      }),
      Y('wrap.quiz6', {
        title: '모둠 국경일 퀴즈', method: '국경일 퀴즈 진행', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 낸 3문제를 모둠이 풀고 맞힌 수 한 칸을 적는다.', base: '5문제를 풀고 맞힌 수와 전체 문제 수 두 칸을 적는다.', challenge: '모둠이 문제 하나를 만들어 내고, 만든 문제 수까지 세 칸을 적는다.' },
        wrap: {
          teacher: '"지금부터 국경일 퀴즈를 해요. 모둠마다 의논해 답을 하나로 정하고 손을 들어요." 교사가 다섯 국경일의 날짜·기념하는 일·태극기 다는 법을 묻는 문제를 차례로 내고, 모둠은 맞힌 수를 기록판에 적는다. 도전 모둠은 문제를 하나 만들어 낸다. 점수보다 까닭을 말하는 것을 칭찬하고, 틀린 모둠을 놀리지 않게 약속한다.',
          exitTicket: [
            REC('국경일 퀴즈 기록', [['우리 모둠 맞힌 문제', '개'], ['전체 문제', '개']], '우리 모둠 퀴즈 결과를 기록판에 적어요.', ['우리 모둠이 만든 문제', '개']),
            { type: 'choice', prompt: '제헌절은 무엇을 기념하는 국경일인가요?', options: ['헌법 공포', '고조선 건국', '훈민정음 반포'], answer: 0, difficulty: 0.25, explain: '제헌절(7월 17일)은 1948년 헌법 공포를 기념해요.' },
            { type: 'short', prompt: '광복과 정부 수립 사이에 일어난 일 하나를 골라 그 뜻을 써요.' },
          ],
        },
        worksheet: {
          title: '광복에서 정부 수립까지',
          items: [
            { type: 'choice', prompt: '국경일이 아닌 날에 ○ 해요.', options: ['현충일', '제헌절'], answer: '현충일' },
            { type: 'short', prompt: '광복절에 "광복"과 "정부 수립"을 함께 기념하는 까닭을 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 문제는 오늘 연표와 국경일 표에서만 낸다.',
      }),
    );
  }

  // ======== 개천절 — 8조법과 홍익인간 (5학년: 단군 이야기와 8조법으로 읽는 고조선 / 6학년: 홍익인간과 교육 이념, 실천) ========
  {
    const X = mk('foundation', 5);
    M.push(
      X('intro.law5', {
        title: '8조법 조항, 무엇을 지켰을까', method: '8조법 조항 보고 짐작 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(재산·바다 무역)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 생각을 찾는다.', challenge: '\'곡식으로 갚는다\'를 근거로 가장 많이 고른 생각이 맞는지 까닭을 말한다.' },
        intro: {
          teacher: '"8조법은 여덟 조항 가운데 세 조항만 전해져요. \'남을 다치게 한 자는 곡식으로 갚는다\'에서 무엇을 알 수 있을까요?" 가상의 한 반이 고른 결과를 시연 단추로 보이고 함께 센다. 법 조항에는 그 사회가 중요하게 여긴 것이 담겨 있다고 알린다. "고조선에는 규칙이 없었어요"라는 말이 나오면 "그렇다면 8조법은 무엇일까요?"라고 되묻는다. 개천절(10월 3일)은 고조선 건국을 기념하는 국경일이라고 덧붙인다.',
          student: '그림그래프에서 가장 많이 고른 생각을 찾고, \'곡식으로 갚는다\'에서 알 수 있는 것을 짝에게 말해 보아요.',
          demo: VOTE('"곡식으로 갚는다"에서 알 수 있는 것(가상의 반 투표)', [['농사로 얻은 재산이 있었다', 10], ['바다 무역이 활발했다', 3], ['모두 평등했다', 5]], '가장 많이 고른 것은?', 0),
          art: art('a paper scroll with three short laws beside paper rice fields and a paper altar on a mountain', '조항에 담긴 사회', 'mountain', 'mint'),
        },
        notes: '투표 자료는 가상의 반이다.',
      }),
      X('activity.society5', {
        title: '8조법 조항과 사회 모습 잇기', method: '조항과 사회 모습 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '조항 2개에 사회 모습 카드를 잇는다(남는 카드 1장).', base: '조항 3개에 사회 모습을 잇고, 이야기 내용과 해석을 나눈다.', challenge: '조항 3개를 남는 카드 2장과 함께 잇고, 고른 근거를 짝에게 말한다.' },
        activity: {
          title: '조항과 사회 모습 잇기', tool: 'emotion',
          teacher: '"훔친 사람을 노비로 삼았다는 것은 무엇을 보여 줄까요?" 조항마다 \'그래서 고조선은 …을 중요하게 여겼다\', \'…가 있었다\'로 말하게 한다. 8조법을 오늘의 법처럼 옳다·그르다로만 평가하는 학생에게는 그때 사회의 모습을 알려 주는 자료로 읽자고 안내한다. 이야기 내용과 해석을 섞는 학생에게는 "이야기에 그 말이 그대로 나오나요?"라고 묻는다.',
          task: '8조법 조항과 그것으로 알 수 있는 고조선 사회의 모습을 이어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('8조법 조항과 알 수 있는 사회 모습을 이어요.', [['사람을 죽인 자는 죽음으로 갚음', '생명을 중히 여김'], ['다치게 하면 곡식으로 갚음', '농사로 얻은 재산이 있음'], ['훔치면 노비로 삼음', '신분의 차이가 있음']], ['바다 무역이 활발함', '모두가 평등함'], { easy: 2, base: 3, unit: '조항' }, 0.35),
            { prompt: '단군 이야기의 문장을 이야기 내용과 해석으로 나누어요.', toolOptions: { mode: 'sort', slots: ['이야기 내용', '해석'], cards: ['곰이 쑥과 마늘을 먹었다', '농경 사회였을 것이다', '환웅이 신하와 내려왔다', '여러 무리가 합쳐졌을 것이다'] }, target: { sort: { '이야기 내용': ['곰이 쑥과 마늘을 먹었다', '환웅이 신하와 내려왔다'], '해석': ['농경 사회였을 것이다', '여러 무리가 합쳐졌을 것이다'] } }, difficulty: 0.35 },
            { prompt: '조항 하나를 골라 "그래서 고조선은 …을 중요하게 여겼다"로 근거와 함께 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '8조법은 여덟 조항 가운데 ___ 조항만 전해진다.', answer: '세' }] },
      }),
      X('activity.mind5', {
        title: '고조선 사회 생각그물', method: '고조선 사회 생각그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(법·생활)에 카드 4장을 붙인다(틀리면 바로 알려 줌).', base: '가지 3개(믿음까지)에 카드 6장을 붙이고, 이름과 뜻을 잇는다.', challenge: '가지 3개에 카드 9장(가지마다 근거 카드 하나 더)을 붙인다.' },
        activity: {
          title: '고조선 생각그물', tool: 'mindmap',
          teacher: '"가운데 \'고조선\'에서 법·생활·믿음 세 가지가 뻗어요. 이 카드는 어느 가지일까요?" 카드마다 어떤 자료(8조법·단군 이야기)에서 알 수 있는지 함께 말하게 한다. \'단군\'과 \'왕검\'의 뜻은 제사를 맡은 사람과 다스리는 사람이라는 풀이가 있다고 소개하고, 해석이라는 것을 밝힌다. 단군 이야기는 『삼국유사』 등에 실려 전해 온다고 덧붙인다.',
          task: '고조선 사회의 모습 카드를 법·생활·믿음 가지에 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '고조선 사회의 모습 카드를 법·생활·믿음 가지에 붙여요.', toolOptions: { topic: '고조선', slots: ['법', '생활', '믿음'], cards: ['8조법 세 조항이 전해짐', '농사를 지어 곡식을 모음', '하늘의 자손이라 여김', '훔치면 노비로 삼음', '신분의 차이가 있었음', '곰을 섬긴 무리와 손잡음'] }, target: { sort: { '법': ['8조법 세 조항이 전해짐', '훔치면 노비로 삼음'], '생활': ['농사를 지어 곡식을 모음', '신분의 차이가 있었음'], '믿음': ['하늘의 자손이라 여김', '곰을 섬긴 무리와 손잡음'] } }, difficulty: 0.35,
              levels: {
                easy: { prompt: '고조선 사회의 모습 카드를 법·생활 가지에 붙여요(카드 4장).', toolOptions: { slots: ['법', '생활'], cards: ['8조법 세 조항이 전해짐', '농사를 지어 곡식을 모음', '훔치면 노비로 삼음', '신분의 차이가 있었음'] }, target: { sort: { '법': ['8조법 세 조항이 전해짐', '훔치면 노비로 삼음'], '생활': ['농사를 지어 곡식을 모음', '신분의 차이가 있었음'] } } },
                challenge: { prompt: '고조선 사회의 모습 카드를 세 가지에 붙여요(카드 9장).', toolOptions: { cards: ['8조법 세 조항이 전해짐', '농사를 지어 곡식을 모음', '하늘의 자손이라 여김', '훔치면 노비로 삼음', '신분의 차이가 있었음', '곰을 섬긴 무리와 손잡음', '다치게 하면 곡식으로 갚음', '바람·비·구름 신하가 따라옴', '죽인 자는 죽음으로 갚음'] }, target: { sort: { '법': ['8조법 세 조항이 전해짐', '훔치면 노비로 삼음', '죽인 자는 죽음으로 갚음'], '생활': ['농사를 지어 곡식을 모음', '신분의 차이가 있었음', '다치게 하면 곡식으로 갚음'], '믿음': ['하늘의 자손이라 여김', '곰을 섬긴 무리와 손잡음', '바람·비·구름 신하가 따라옴'] } } },
              } },
            { prompt: '이름과 그 뜻 풀이를 이어요. 맞지 않는 카드는 남겨요.', toolOptions: { mode: 'match', topic: '단군왕검', slots: [{ id: 'dan', label: '단군' }, { id: 'wang', label: '왕검' }], cards: ['나라를 다스리는 사람', '제사를 맡은 사람', '농사짓는 사람'] }, target: { match: { dan: '제사를 맡은 사람', wang: '나라를 다스리는 사람' } }, difficulty: 0.4 },
            { prompt: '생각그물의 가지 하나를 골라, 어떤 자료에서 알 수 있는지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '해석에 해당하는 문장에 ○ 해요.', options: ['곰이 쑥과 마늘을 먹었다', '농경 사회였을 것이다'], answer: '농경 사회였을 것이다' }] },
        notes: '\'다치게 하면 곡식으로 갚음\'은 법 조항이면서 생활 모습의 근거다. 카드 한 장의 가지는 하나라서 도전 판에서는 \'생활\' 가지의 근거 카드로 둔다 — 법 가지에 넣은 학생에게는 그렇게 볼 수도 있다고 인정하고 까닭을 묻는다.',
      }),
      X('wrap.explain5', {
        title: '고조선 사회 설명 글', method: '고조선 사회 설명 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'8조법을 보면 고조선은 ___\')에 빈칸을 채우고 기준 2개를 점검한다.', base: '근거 두 개로 세 문장을 쓰고 기준 3개를 점검한다.', challenge: '자료 이름(8조법·단군 이야기)을 출처로 밝혀 쓰고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"고조선이 어떤 사회였는지 근거 두 개를 들어 설명해 볼까요?" 근거마다 어느 자료에서 왔는지 밝히게 한다. "고조선은 무서운 나라였어요"처럼 느낌만 쓰는 학생에게는 "조항이 무엇을 지키려 했는지로 써 볼까요?"라고 되묻는다.',
          exitTicket: [
            RUBX('근거 두 개를 들어 고조선 사회를 세 문장으로 설명해요.', { topic: '고조선 사회 설명', title: '고조선 설명 글', starter: '8조법을 보면 고조선은 ___.', crit: ['근거를 두 개 썼다', '근거마다 알 수 있는 사회 모습을 이었다', '느낌이 아니라 자료로 썼다'], must: [['8조법', '단군']], chars: [30, 200] }),
            { type: 'choice', prompt: '"훔치면 노비로 삼는다"에서 알 수 있는 것은?', options: ['신분의 차이가 있었다', '모두가 평등했다', '규칙이 없었다'], answer: 0, difficulty: 0.25, explain: '노비가 있었다는 것은 신분의 차이가 있었다는 뜻이에요.' },
          ],
        },
        worksheet: {
          title: '자료로 읽는 고조선',
          items: [
            { type: 'table', prompt: '8조법 조항과 알 수 있는 것을 정리해요.', columns: ['조항', '알 수 있는 것'], cells: [['사람을 죽인 자는 죽음으로 갚는다', ''], ['남을 다치게 한 자는 곡식으로 갚는다', ''], ['남의 물건을 훔친 자는 노비로 삼는다', '']], answer: '생명을 중히 여김 / 농사를 지어 재산이 있었음 / 신분의 차이가 있었음' },
            { type: 'short', prompt: '건국 이야기를 역사 자료로 읽을 때 조심할 점을 써요.' },
          ],
        },
      }),
    );
    const Y = mk('foundation', 6);
    M.push(
      Y('intro.hong6', {
        title: '홍익인간, 무슨 뜻일까', method: '홍익인간 뜻 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 뜻 카드 두 장을 읽어 주고 함께 고른다.', base: '뜻 카드 세 장 가운데 알맞은 뜻을 고른다.', challenge: '고른 뜻을 내 말로 바꾸어 짝에게 말한다.' },
        intro: {
          teacher: '"단군 이야기 속 \'홍익인간\'이 오늘 우리 법에도 나온다면 어느 법일까요?" 대답을 들은 뒤 교육기본법의 교육 이념 조문이 \'교육은 홍익인간의 이념 아래\'로 시작한다고 알린다. 시연 단추로 \'널리 사람을 이롭게 한다\' 카드가 담기는 모습을 보인다. \'나만 이롭게\'를 고르는 학생에게는 \'널리\'의 뜻을 다시 짚는다.',
          student: '뜻 카드 가운데 "홍익인간"의 뜻에 맞는 카드를 골라 보아요.',
          demo: WPICK('홍익인간의 뜻', ['나만 이롭게 한다', '널리 사람을 이롭게 한다', '힘센 사람을 따른다'], [['널리 사람을 이롭게 한다']]),
          art: art('paper hands of many sizes reaching toward a glowing paper sun above a mountain', '널리 사람을 이롭게', 'sun', 'buttercup'),
        },
      }),
      Y('activity.link6', {
        title: '교육 이념 조문과 홍익인간', method: '교육기본법 조문과 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(인격 도야·민주시민)에 뜻 카드를 잇는다(남는 카드 1장).', base: '가지 3개에 뜻 카드를 잇고, 조문에 있는 낱말을 고른다.', challenge: '가지 4개(인류공영까지)에 뜻 카드를 잇는다.' },
        activity: {
          title: '교육 이념 조문 잇기', tool: 'mindmap',
          teacher: '"교육이 길러야 할 사람은 어떤 사람이라고 쓰여 있나요?" 조문의 낱말을 하나씩 짚으며 가지에 뜻을 잇는다. \'인류공영\'은 온 인류가 함께 번영한다는 뜻이라고 풀어 주고, 홍익인간의 \'널리\'와 이어지는 낱말을 찾게 한다. \'나만 앞서 성공함\'을 고르는 학생에게는 조문의 \'인류\'가 누구를 가리키는지 묻는다.',
          task: '가운데 "홍익인간"에서 뻗은 조문 낱말 가지에 알맞은 뜻을 이어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('교육 이념 조문의 낱말과 알맞은 뜻을 이어요.', [['인격 도야', '바른 사람됨을 갈고닦음'], ['민주시민', '민주 사회를 함께 이끄는 시민'], ['자주적 생활능력', '스스로 살아가는 힘'], ['인류공영', '온 인류가 함께 번영함']], ['나만 앞서 성공함', '남보다 먼저 부자 됨'], { easy: 2, base: 3, unit: '가지', extraOpt: { topic: '홍익인간' } }, 0.35),
            { prompt: '교육 이념 조문에 나오는 낱말만 골라 담아요.', toolOptions: { mode: 'pick', topic: '홍익인간', basket: '조문에 나오는 낱말', cards: ['홍익인간', '나만의 성공', '민주시민', '일등 국민', '인류공영'] }, target: { pick: ['홍익인간', '민주시민', '인류공영'] }, difficulty: 0.3 },
            { prompt: '자료와 그 자료에 담긴 내용을 이어요. 맞지 않는 카드는 남겨요.', toolOptions: { mode: 'match', topic: '홍익인간', slots: [{ id: 'myth', label: '단군 이야기' }, { id: 'law', label: '교육기본법' }], cards: ['교육 이념으로 홍익인간을 밝힘', '8조법 세 조항', '널리 사람을 이롭게 하려 함'] }, target: { match: { myth: '널리 사람을 이롭게 하려 함', law: '교육 이념으로 홍익인간을 밝힘' } }, difficulty: 0.35, conclude: '"널리 사람을 이롭게"라는 뜻이 오늘 교육의 목표인 민주시민과 인류공영으로 이어져요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '교육기본법의 교육 이념 조문(일부)을 채워요.', text: '교육은 ___의 이념 아래 … 민주시민으로서 필요한 자질을 갖추게 함으로써 … 인류공영의 이상을 실현하는 데에 이바지하게 함을 목적으로 한다.', answer: '홍익인간' }] },
        notes: '학생 화면에는 조문 번호 대신 \'교육 이념 조문\'이라고 쓴다. 조문 원문은 국가법령정보센터에서 띄워 보인다.',
      }),
      Y('activity.case6', {
        title: '홍익 실천 학교·지역·세계', method: '학교·지역·세계 실천 사례 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '사례 카드 3장(칸마다 1장)을 학교·지역·세계 바구니에 나눈다(틀리면 바로 알려 줌).', base: '사례 카드 6장을 나눈다.', challenge: '카드 8장(홍익인간의 뜻에 맞지 않는 카드 포함)을 나누고, 고른 까닭을 말한다.' },
        activity: {
          title: '실천 사례 나누기', tool: 'sortboard',
          teacher: '"이 사례는 누구를 이롭게 할까요? 그 범위는 학교, 지역, 세계 가운데 어디일까요?" 사례마다 이롭게 되는 사람을 먼저 말하게 한다. 나만 이로운 일을 넣으려는 학생에게는 \'널리\'의 뜻을 다시 짚는다. 실천을 큰일로만 여기는 학생에게는 학교 안의 작은 일부터 고르게 한다.',
          task: '홍익인간 실천 사례를 이롭게 하는 범위에 따라 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('홍익인간 실천 사례를 이롭게 하는 범위에 따라 나누어요.', { slots: ['학교', '지역', '세계'], groups: { '학교': ['후배에게 책 읽어 주기', '급식 봉사 당번'], '지역': ['동네 하천 청소', '어르신께 휴대 전화 쓰는 법 알려 드리기'], '세계': ['해외 아동 돕기 모금', '한글 배우는 외국 친구 돕기'] }, easy: 1, extra: { '학교': ['쉬는 시간 놀이 도우미'] }, traps: ['나만 이기기'] }, 0.35),
            SB('홍익인간의 뜻에 맞는 일과 맞지 않는 일을 나누어요.', { slots: ['뜻에 맞는 일', '뜻에 맞지 않는 일'], groups: { '뜻에 맞는 일': ['재능 나눔 봉사', '모두를 위한 발명', '도움 필요한 친구 돕기'], '뜻에 맞지 않는 일': ['정보 혼자 차지하기', '친구 숙제 대신해 주기', '나만 쓰는 비밀 요약'] } }, 0.3, { conclude: '홍익인간은 학교·지역·세계 어디서든 널리 사람을 이롭게 하는 실천으로 이어져요.' }),
            { prompt: '우리 반이 함께할 수 있는 홍익 실천 하나와 그 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '홍익인간 실천 사례를 범위별로 하나씩 써요.', columns: ['학교', '지역', '세계'], cells: [['', '', '']], answer: '예) 후배 돕기 / 하천 청소 / 해외 아동 돕기' }] },
      }),
      Y('wrap.do6', {
        title: '이번 주 홍익 실천 정하기', method: '이번 주 홍익 실천 정하기', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 실천 하나를 정하고 점검 칸 2개를 표시한다.', base: '실천과 이롭게 할 사람·때를 정하고 점검 칸 3개를 표시한다.', challenge: '모둠 안에서 역할을 나누고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"우리 모둠이 이번 주에 \'널리 이롭게\' 할 일 하나를 정해 볼까요?" 모둠마다 3분 동안 정하고 교사가 돌아다니며 실천 점검 칸을 함께 만든다. 너무 큰 계획에는 "이번 주 안에 할 수 있나요?"라고 묻는다. 출구 2번에서 \'도로교통법\'을 고른 학생에게는 오늘 읽은 조문을 다시 떠올리게 한다.',
          exitTicket: [
            SELF('홍익 실천 점검', ['모둠 실천 하나를 정했다', '누구를 이롭게 하는지 말할 수 있다', '언제 할지 정했다', '모둠 안 역할을 나누었다']),
            { type: 'choice', prompt: '홍익인간을 교육 이념으로 밝힌 법은?', options: ['교육기본법', '도로교통법', '식품위생법'], answer: 0, difficulty: 0.2, explain: '교육기본법의 교육 이념 조문은 홍익인간의 이념 아래 교육을 한다고 밝혀요.' },
            { type: 'short', prompt: '우리 모둠의 이번 주 홍익 실천을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '널리 이롭게',
          items: [
            { type: 'choice', prompt: '홍익인간과 관련 있는 국경일에 ○ 해요.', options: ['개천절', '한글날'], answer: '개천절' },
            { type: 'short', prompt: '단군 이야기 속 말이 오늘 법에 남은 까닭을 생각해 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 실천 점검 칸은 다음 주 아침 시간에 함께 확인한다.',
      }),
    );
  }

  // ======== 한글날 — 훈민정음 서문과 가획 원리 (5학년: 서문의 세 뜻과 모음 합치기 / 6학년: 가획 원리와 쉬운 공공 언어) ========
  {
    const X = mk('hangul', 5);
    M.push(
      X('intro.preface5', {
        title: '서문 구절, 마음에 남은 낱말', method: '서문 첫 구절 듣고 낱말 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(불쌍히 여겨·쉽게 익혀)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 낱말을 찾는다.', challenge: '가장 많이 고른 낱말에 담긴 세종의 뜻을 짐작해 짝에게 말한다.' },
        intro: {
          teacher: '"세종대왕이 한글을 만든 까닭이 직접 쓰여 있는 글이 있어요." 훈민정음 서문을 오늘 말로 풀어 천천히 읽어 준다(나라의 말이 중국과 달라 문자와 서로 통하지 않아… 이를 불쌍히 여겨 새로 스물여덟 자를 만드니… 쉽게 익혀 날마다 편히 쓰게 하고자 한다). 가상의 한 반이 \'마음에 남은 낱말\'을 고른 결과를 시연 단추로 보이고 함께 센다. 한글날(10월 9일)은 훈민정음 반포를 기념하는 국경일이라고 덧붙인다.',
          student: '그림그래프에서 가장 많이 고른 낱말을 찾고, 그 낱말에 담긴 세종의 마음을 짐작해 보아요.',
          demo: VOTE('서문에서 마음에 남은 낱말(가상의 반 투표)', [['불쌍히 여겨', 10], ['서로 통하지 않아', 6], ['쉽게 익혀', 8]], '가장 많이 고른 것은?', 0),
          art: art('an open paper book of Hunminjeongeum with a king reading to common people in a village', '서문에 담긴 뜻', 'leaf', 'buttercup'),
        },
        notes: '투표 자료는 가상의 반이다.',
      }),
      X('activity.three5', {
        title: '서문과 자주·애민·실용', method: '서문 문장과 자주·애민·실용 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '서문 구절 2개에 뜻 카드를 잇는다(남는 카드 1장).', base: '서문 구절 3개에 뜻을 잇고, 서문 내용과 오늘의 평가를 나눈다.', challenge: '구절 3개를 남는 카드 2장과 함께 잇고, 고른 근거를 짝에게 말한다.' },
        activity: {
          title: '서문과 세 가지 뜻', tool: 'emotion',
          teacher: '"이 구절에는 어떤 마음이 담겼을까요?" 자주(우리 것을 스스로), 애민(백성을 사랑), 실용(생활에 쓸모)으로 풀어 준다. 한 구절에 여러 뜻이 겹친다는 의견이 나오면 까닭을 들어 보고 가장 잘 드러나는 뜻을 고르게 한다. \'세계가 인정하는 글자\'를 서문 내용으로 넣는 학생에게는 "서문에 그 말이 그대로 있나요?"라고 묻는다.',
          task: '훈민정음 서문의 구절과 그 속에 담긴 뜻을 이어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('서문 구절과 담긴 뜻을 이어요.', [['나라 말이 중국과 달라', '자주 정신'], ['백성을 불쌍히 여겨', '애민 정신'], ['쉽게 익혀 편히 쓰게', '실용 정신']], ['경쟁 정신', '자랑 정신'], { easy: 2, base: 3, unit: '구절' }, 0.35),
            { prompt: '문장을 서문에 있는 내용과 오늘의 평가로 나누어요.', toolOptions: { mode: 'sort', slots: ['서문 내용', '오늘의 평가'], cards: ['새로 글자를 만듦', '세계가 인정하는 글자', '백성이 쉽게 익히게 함', '가장 과학적인 문자'] }, target: { sort: { '서문 내용': ['새로 글자를 만듦', '백성이 쉽게 익히게 함'], '오늘의 평가': ['세계가 인정하는 글자', '가장 과학적인 문자'] } }, difficulty: 0.35 },
            { prompt: '훈민정음에 대한 사실만 골라 담아요.', toolOptions: { mode: 'pick', basket: '훈민정음', cards: ['처음 28자를 만듦', '고려 때 만듦', '1446년 반포', '처음부터 24자'] }, target: { pick: ['처음 28자를 만듦', '1446년 반포'] }, difficulty: 0.3, conclude: '서문에는 자주·애민·실용의 뜻이 담겨 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '서문 구절과 담긴 뜻을 써요.', columns: ['서문 구절(풀이)', '담긴 뜻'], cells: [['나라의 말이 중국과 달라', ''], ['백성을 불쌍히 여겨', ''], ['쉽게 익혀 편히 쓰게', '']], answer: '자주 정신 / 애민 정신 / 실용 정신' }] },
      }),
      X('activity.letter5', {
        title: '합친 모음으로 글자 만들기', method: '모음 합쳐 글자 만들기', tool: 'hangul', minutes: 13,
        levels: { easy: '모음 조각을 들면 알맞은 자리(오른쪽·아래)가 깜박이고, 자리를 골라 글자를 만든다.', base: '모음을 놓을 자리를 스스로 골라 글자를 만든다.', challenge: '받침 조각까지 더해 받침 있는 글자를 만든다.' },
        activity: {
          title: '합친 모음으로 글자 만들기', tool: 'hangul',
          teacher: '"모음 ㅏ는 ㅣ(사람)에 점(하늘)을 오른쪽에 더해 만들었어요. ㅗ는 ㅡ(땅) 위에 점을 더했지요." 칠판에 ·, ㅡ, ㅣ를 쓰고 합쳐지는 모습을 보인 뒤 조각을 놓게 한다. ㅗ를 자음 오른쪽에 놓는 학생에게는 "ㅗ는 세로로 길까요, 가로로 길까요?"라고 묻는다. 교구에는 점(·) 조각이 없으니 칠판 그림으로 합치는 원리를 보여 준다.',
          task: '하늘·땅·사람을 합쳐 만든 모음으로 글자를 만들어요.', levels: { easy: { slotGuide: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: 'ㅣ에 점을 더한 모음 ㅏ로 "나"를 만들어요.', toolOptions: { consonants: ['ㄴ', 'ㅁ'], vowels: ['ㅏ', 'ㅓ'], slotHints: true }, target: { syllable: '나' }, difficulty: 0.2,
              levels: { challenge: { prompt: 'ㅏ와 받침을 더해 "날"을 만들어요.', toolOptions: { batchim: ['ㄹ', 'ㄴ', 'ㅁ'] }, target: { syllable: '날' } } } },
            { prompt: 'ㅡ 위에 점을 더한 모음 ㅗ로 "소"를 만들어요.', toolOptions: { consonants: ['ㅅ', 'ㄱ'], vowels: ['ㅗ', 'ㅜ'], slotHints: true }, target: { syllable: '소' }, difficulty: 0.25,
              levels: { challenge: { prompt: 'ㅗ와 받침을 더해 "손"을 만들어요.', toolOptions: { batchim: ['ㄴ', 'ㅇ', 'ㄹ'] }, target: { syllable: '손' } } } },
            { prompt: 'ㅡ 아래에 점을 더한 모음 ㅜ로 "무"를 만들어요.', toolOptions: { consonants: ['ㅁ', 'ㄴ'], vowels: ['ㅜ', 'ㅗ'], slotHints: true }, target: { syllable: '무' }, difficulty: 0.25,
              levels: { challenge: { prompt: 'ㅜ와 받침을 더해 "물"을 만들어요.', toolOptions: { batchim: ['ㄹ', 'ㄴ', 'ㅇ'] }, target: { syllable: '물' } } },
              conclude: '기본 모음 셋을 합쳐 여러 모음을 만들어서 적은 글자로 많은 소리를 적을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '훈민정음은 처음 ___자를 만들었고 1446년에 반포했다.', answer: '28' }] },
        notes: '계획의 쉬움 \'모음 자동\'은 판단을 없애므로 쓰지 않고, 알맞은 자리가 깜박이는 안내(slotGuide)로 바꾸었다. 교구에 아래아(·) 조각이 없어 합치는 원리는 칠판으로 보인다.',
      }),
      X('wrap.write5', {
        title: '세종대왕께 편지 쓰기', method: '세종대왕께 편지', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'세종대왕님, 한글 덕분에 ___\')에 빈칸을 채우고 기준 2개를 점검한다.', base: '서문의 뜻 하나를 넣어 세 문장 편지를 쓰고 기준 3개를 점검한다.', challenge: '서문의 뜻 두 가지를 넣어 쓰고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 읽은 서문의 뜻 가운데 하나를 넣어 세종대왕께 편지를 써 볼까요?" 편지는 내가 쓰는 글이고, 세종대왕이 하지 않은 말을 지어 넣지 않는다고 안내한다. 고맙다는 말만 쓰는 학생에게는 "한글이 어떤 점에서 쉬운지 서문의 말로 넣어 볼까요?"라고 되묻는다.',
          exitTicket: [
            RUBX('서문의 뜻을 넣어 세종대왕께 세 문장 편지를 써요.', { topic: '세종대왕께 쓰는 편지', title: '세종대왕께 편지', starter: '세종대왕님, 한글 덕분에 ___.', crit: ['서문의 뜻(자주·애민·실용) 하나를 넣었다', '편지 꼴(부르는 말·끝인사)로 썼다', '내 생활 예를 하나 넣었다'], must: [['자주', '애민', '실용', '쉽게', '백성']], chars: [30, 200] }),
            { type: 'choice', prompt: '훈민정음을 처음 만들 때 글자 수는?', options: ['28자', '24자', '40자'], answer: 0, difficulty: 0.25, explain: '처음에는 28자를 만들었고 오늘날에는 24자를 써요.' },
          ],
        },
        worksheet: {
          title: '서문에 담긴 뜻',
          items: [
            { type: 'choice', prompt: '서문 내용에 ○ 해요.', options: ['새로 글자를 만듦', '가장 과학적인 문자'], answer: '새로 글자를 만듦' },
            { type: 'short', prompt: '"훈민정음"이라는 이름의 뜻(백성을 가르치는 바른 소리)과 서문을 이어 써요.' },
          ],
        },
      }),
    );
    const Y = mk('hangul', 6);
    M.push(
      Y('intro.stroke6', {
        title: 'ㄴ에 획을 더하면?', method: 'ㄱ→ㅋ 획 더하기 보기', tool: 'hangul', minutes: 6,
        levels: { easy: '교사가 ㄱ→ㅋ 한 쌍을 보이고 함께 글자를 만든다.', base: 'ㄴ→ㄷ→ㅌ 차례로 획이 더해지는 것을 보고 글자를 말한다.', challenge: 'ㅁ→ㅂ→ㅍ도 같은 원리인지 짐작해 짝에게 말한다.' },
        intro: {
          teacher: '"ㄴ에 한 획을 더하면 무엇이 될까요? 또 한 획을 더하면요?" 시연 단추로 나→다→타가 차례로 만들어지는 모습을 보인다. 기본 글자에 획을 더할 때마다 소리가 세진다는 원리(가획)로 자음을 만들었다고 알린다. 3학년 때 배운 기본 글자 다섯(ㄱ·ㄴ·ㅁ·ㅅ·ㅇ)을 떠올리게 한다. "글자는 하나하나 따로 만들었어요"라는 말이 나오면 "ㄷ과 ㅌ은 ㄴ과 어디가 닮았나요?"라고 되묻는다.',
          student: '나·다·타가 만들어지는 것을 보고, 글자마다 더해진 획을 손가락으로 따라 그려 보아요.',
          demo: { tool: 'hangul', options: { consonants: ['ㄴ', 'ㄷ', 'ㅌ'], vowels: ['ㅏ'], slotHints: true }, sequence: [{ syllable: '나' }, { syllable: '다' }, { syllable: '타' }] },
          art: art('paper letter shapes ㄴ ㄷ ㅌ standing in a row, each with one more paper stroke folded on', '획을 더하면 소리가 세져요', 'star', 'sky'),
        },
      }),
      Y('activity.family6', {
        title: '가획 원리로 자음 묶기', method: '가획 원리로 자음 묶기', tool: 'sortboard', minutes: 14,
        levels: { easy: '바구니 2칸(ㄱ 무리·ㄴ 무리)에 자음 카드 3장을 넣는다(틀리면 바로 알려 줌).', base: '바구니 3칸(ㄴ·ㅁ·ㅅ 무리)에 자음 카드 6장을 넣는다.', challenge: '바구니 4칸(ㄱ·ㄴ·ㅁ·ㅅ 무리)에 카드 7장을 넣고 원리가 다른 ㄹ은 남긴다.' },
        activity: {
          title: '자음 무리 묶기', tool: 'sortboard',
          teacher: '"ㅈ은 어느 기본 글자에서 왔을까요?" 기본 글자를 먼저 쓰고 획을 하나씩 더해 보게 한다. ㅊ을 ㅈ과 다른 무리로 나누는 학생에게는 ㅅ → ㅈ → ㅊ으로 이어진다는 점을 쓰면서 확인하게 한다. ㄹ처럼 원리가 다른 글자는 오늘 묶지 않는다고 알려 준다.',
          task: '획을 더해 만든 자음을 기본 글자 무리 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            { prompt: '자음 카드를 기본 글자 무리로 나누어요.', toolOptions: { slots: ['ㄴ 무리', 'ㅁ 무리', 'ㅅ 무리'], cards: ['ㄷ', 'ㅂ', 'ㅈ', 'ㅌ', 'ㅍ', 'ㅊ'] }, target: { sort: { 'ㄴ 무리': ['ㄷ', 'ㅌ'], 'ㅁ 무리': ['ㅂ', 'ㅍ'], 'ㅅ 무리': ['ㅈ', 'ㅊ'] } }, difficulty: 0.35,
              levels: {
                easy: { prompt: '자음 카드를 ㄱ 무리와 ㄴ 무리로 나누어요(카드 3장).', toolOptions: { slots: ['ㄱ 무리', 'ㄴ 무리'], cards: ['ㅋ', 'ㄷ', 'ㅌ'] }, target: { sort: { 'ㄱ 무리': ['ㅋ'], 'ㄴ 무리': ['ㄷ', 'ㅌ'] } } },
                challenge: { prompt: '자음 카드를 네 무리로 나누어요(원리가 다른 카드 하나는 남겨요).', toolOptions: { slots: ['ㄱ 무리', 'ㄴ 무리', 'ㅁ 무리', 'ㅅ 무리'], cards: ['ㅋ', 'ㄷ', 'ㄹ', 'ㅂ', 'ㅈ', 'ㅌ', 'ㅍ', 'ㅊ'] }, target: { sort: { 'ㄱ 무리': ['ㅋ'], 'ㄴ 무리': ['ㄷ', 'ㅌ'], 'ㅁ 무리': ['ㅂ', 'ㅍ'], 'ㅅ 무리': ['ㅈ', 'ㅊ'] } } },
              } },
            SB('자음 카드를 기본 글자와 획을 더한 글자로 나누어요.', { slots: ['기본 글자', '획을 더한 글자'], groups: { '기본 글자': ['ㄱ', 'ㄴ', 'ㅁ'], '획을 더한 글자': ['ㅋ', 'ㄷ', 'ㅂ'] }, extra: { '기본 글자': ['ㅅ', 'ㅇ'], '획을 더한 글자': ['ㅈ', 'ㅎ'] } }, 0.3, { conclude: '기본 글자 다섯에 획을 더해 나머지 자음을 만들어, 적은 원리로 많은 글자를 익힐 수 있어요.' }),
            { prompt: 'ㅁ → ㅂ → ㅍ을 손가락으로 쓰며 획이 어떻게 더해지는지 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기본 글자에 획을 더한 차례를 써요.', columns: ['기본 글자', '한 획 더함', '또 한 획 더함'], cells: [['ㄴ', '', ''], ['ㅁ', '', ''], ['ㅅ', '', '']], answer: 'ㄷ, ㅌ / ㅂ, ㅍ / ㅈ, ㅊ' }] },
        notes: '계획의 도전 \'5칸\'은 분류판 바구니가 4칸까지라 4칸(ㄱ·ㄴ·ㅁ·ㅅ 무리)으로 했다. ㅇ→ㅎ은 둘째 문항(기본 글자·획을 더한 글자)에서 다룬다.',
      }),
      Y('activity.public6', {
        title: '어려운 공공 언어 바꾸기', method: '어려운 공공 언어 바꾸기', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(스크린도어·키오스크)에 다듬은 말 카드를 잇는다(남는 카드 1장).', base: '가지 3개(굿즈까지)에 다듬은 말을 잇고, 안내 문구를 쉬운 말·어려운 말로 나눈다.', challenge: '가지 3개를 남는 카드 2장과 함께 잇고, 학교에서 본 어려운 말 하나를 내가 다듬어 말한다.' },
        activity: {
          title: '공공 언어 쉬운 말로', tool: 'mindmap',
          teacher: '"할머니나 어린 동생도 이 안내판을 바로 알아볼 수 있을까요?" 국립국어원이 어려운 외래어·한자어를 쉬운 말로 다듬어 알리고 있다고 소개한다. 다듬은 말이 어색하다는 의견에는 누구나 알아듣는 것이 공공 언어의 목적이라고 말한다. "어려운 말을 써야 멋있어요"라는 말이 나오면 "안전 안내를 못 알아들으면 어떻게 될까요?"라고 되묻는다.',
          task: '어려운 공공 언어 가지에 쉬운 우리말 카드를 이어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('어려운 말과 다듬은 쉬운 말을 이어요.', [['스크린도어', '안전문'], ['키오스크', '무인 안내기'], ['굿즈', '기획 상품']], ['누리집', '매표소'], { easy: 2, base: 3, unit: '가지', extraOpt: { topic: '쉬운 말로 바꾸기' } }, 0.35),
            { prompt: '안내 문구를 쉬운 말과 어려운 말로 나누어요.', toolOptions: { topic: '안내 문구', slots: ['쉬운 말', '어려운 말'], cards: ['손을 씻으세요', '핸드 워싱 하세요', '줄을 서 주세요', '라인 웨이팅 바랍니다'] }, target: { sort: { '쉬운 말': ['손을 씻으세요', '줄을 서 주세요'], '어려운 말': ['핸드 워싱 하세요', '라인 웨이팅 바랍니다'] } }, difficulty: 0.3 },
            { prompt: '공공 언어를 쉽게 써야 하는 까닭을 골라 담아요.', toolOptions: { mode: 'pick', topic: '쉬운 공공 언어', basket: '쉽게 쓰는 까닭', cards: ['누구나 알아들어야 해서', '멋있어 보이려고', '안전 정보를 놓치지 않게', '글자 수를 늘리려고'] }, target: { pick: ['누구나 알아들어야 해서', '안전 정보를 놓치지 않게'] }, difficulty: 0.3, conclude: '공공 언어는 누구나 알아듣게 쉬운 우리말로 써요.' },
            { prompt: '학교에서 본 어려운 말 하나를 내가 쉬운 말로 다듬어 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"키오스크"를 다듬은 말에 ○ 해요.', options: ['무인 안내기', '안전문'], answer: '무인 안내기' }] },
        notes: '다듬은 말은 국립국어원 \'다듬은 말\' 자료를 따른다(사람 확인). 안내 문구 카드의 어려운 말은 수업용으로 지은 예다.',
      }),
      Y('wrap.notice6', {
        title: '학교 안내문 쉬운 말로 고치기', method: '학교 안내문 쉬운 말 고치기', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 안내문 한 문장을 쉬운 말로 고치고 점검 칸 2개를 표시한다.', base: '세 문장을 고치고 점검 칸 3개를 표시한다.', challenge: '안내문 전체를 고쳐 게시하고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"우리 학교 안내문 가운데 어려운 말이 있는 것을 하나 골랐어요. 모둠이 쉬운 말로 고쳐 볼까요?" 교사가 미리 고른 실제 학교 안내문(개인 정보가 없는 것)을 모둠에 나누어 주고 4분 동안 고치게 한 뒤 게시판에 붙인다. 뜻이 바뀌게 고친 모둠에는 "원래 안내문이 알리려던 것이 그대로 있나요?"라고 묻는다.',
          exitTicket: [
            SELF('안내문 고치기 점검', ['어려운 낱말에 밑줄을 그었다', '쉬운 우리말로 바꾸었다', '뜻이 그대로인지 다시 읽었다', '고친 안내문을 게시했다']),
            { type: 'choice', prompt: '"스크린도어"를 다듬은 우리말은?', options: ['안전문', '기획 상품', '무인 안내기'], answer: 0, difficulty: 0.25, explain: '스크린도어는 안전문, 굿즈는 기획 상품으로 다듬었어요.' },
            { type: 'short', prompt: '우리 모둠이 고친 문장 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '쉬운 말로 바꿔요',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '기본 글자에 ___을 더하면 소리가 세진다.', answer: '획' },
            { type: 'short', prompt: '한글의 원리가 배우기 쉬운 까닭을 오늘 배운 것으로 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 안내문은 개인 정보가 없는 것으로 미리 고른다.',
      }),
    );
  }

  // ======== 학생독립운동기념일 — 학생 운동의 흐름과 자치 (5학년: 요구 분류와 세 운동의 흐름 / 6학년: 두 운동 견주기와 학생 자치) ========
  {
    const X = mk('student', 5);
    M.push(
      X('intro.demand5', {
        title: '학생들의 요구, 공통 낱말은', method: '요구 카드 보고 공통점 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 줄(차별에 맞섬·놀이 시간)만 짚어 함께 세고 더 많은 쪽을 고른다.', base: '세 줄을 세어 가장 많이 고른 공통점을 찾는다.', challenge: '요구 카드에서 공통 낱말을 직접 찾아 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"1929년 11월 3일, 광주의 학생들이 차별에 맞서 거리로 나섰어요. 학생들이 내건 요구에는 어떤 공통점이 있을까요?" 요구 카드(식민지 교육 반대, 민족 차별 반대 등)를 읽어 준 뒤 가상의 한 반이 고른 결과를 시연 단추로 보이고 함께 센다. 이 운동이 전국 학교로 퍼졌고, 오늘 학생독립운동기념일로 기린다고 알린다. "학생 운동은 한 번뿐이었어요"라는 말이 나오면 1926년 6·10 만세 운동도 있었다고 짚는다.',
          student: '그림그래프에서 가장 많이 고른 공통점을 찾고, 요구 카드에서 그 낱말을 찾아보아요.',
          demo: VOTE('학생들 요구의 공통점(가상의 반 투표)', [['차별에 맞섬', 12], ['놀이 시간', 2], ['급식 메뉴', 3]], '가장 많이 고른 것은?', 0),
          art: art('paper students marching under autumn leaves holding plain paper banners, a paper school building behind', '학생들이 나선 날', 'leaf', 'peach'),
        },
        notes: '투표 자료는 가상의 반이다. 학생의 피해 경험을 털어놓게 하지 않는다.',
      }),
      X('activity.classify5', {
        title: '학생들의 요구 나누기', method: '요구 분류하기', tool: 'sortboard', minutes: 14,
        levels: { easy: '요구 카드 3장(칸마다 1장)을 교육·차별·자유 바구니에 나눈다(틀리면 바로 알려 줌).', base: '요구 카드 6장을 나눈다.', challenge: '카드 7장(그때 요구가 아닌 카드 포함)을 나누고, 고른 까닭을 말한다.' },
        activity: {
          title: '요구 나누기', tool: 'sortboard',
          teacher: '"이 요구는 무엇을 바꾸자는 것일까요?" 요구를 교육·차별·자유로 나누게 한다. 한 요구가 여러 칸에 걸친다는 의견이 나오면 가장 가까운 칸을 고르고 까닭을 말하게 한다. 오늘날의 요구(급식 메뉴 등)를 그때 요구로 넣는 학생에게는 1929년 학생들이 무엇에 맞섰는지 다시 묻는다.',
          task: '학생독립운동 때 학생들의 요구를 갈래에 따라 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('학생들의 요구를 갈래에 따라 나누어요.', { slots: ['교육', '차별', '자유'], groups: { '교육': ['식민지 교육 반대', '학교 안 학생 자치권'], '차별': ['조선 학생 차별 반대', '민족 차별 없애기'], '자유': ['언론의 자유', '집회의 자유'] }, easy: 1, traps: ['급식 메뉴 늘리기'] }, 0.4),
            SB('학생독립운동에 대한 문장을 사실과 아닌 것으로 나누어요.', { slots: ['사실', '사실이 아님'], groups: { '사실': ['광주에서 시작됨', '전국 학교로 퍼짐', '1929년에 일어남'], '사실이 아님': ['1987년에 일어남', '서울 한 학교에서만 일어남', '어른들만 참여함'] } }, 0.3, { conclude: '1929년 광주에서 시작된 학생독립운동은 차별에 맞서 전국으로 퍼졌어요.' }),
            { prompt: '요구 하나를 골라 왜 그 바구니에 넣었는지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '학생독립운동이 시작된 곳에 ○ 해요.', options: ['광주', '서울'], answer: '광주' }] },
        notes: '요구 목록은 광주학생독립운동기념회관·국가보훈부 자료로 확인한다(사람 확인).',
      }),
      X('activity.flow5', {
        title: '세 운동 차례 견주기', method: '세 운동 차례 견주기', tool: 'timeline', minutes: 13,
        levels: { easy: '연도가 적힌 운동 카드 3장을 차례로 놓는다.', base: '연도 글자 없이 3장을 놓고, 이름이 비슷한 두 운동의 때를 잇는다.', challenge: '3장에 이름이 비슷한 카드(6·10민주항쟁)를 섞어 가려 내고, 세 운동의 공통점을 설명한다.' },
        activity: {
          title: '세 운동의 차례', tool: 'timeline',
          teacher: '"세 운동 가운데 가장 먼저 일어난 것은 무엇일까요?" 1919·1926·1929 세 해를 견주게 한다. 6·10 만세 운동과 6·10민주항쟁을 헷갈리는 학생에게는 연도와 요구(독립 / 대통령 직선제)로 나누어 말하게 한다. 6·10 만세 운동은 1926년 순종의 장례일에 학생들이 중심이 되어 만세를 부른 일이라고 알린다.',
          task: '학생들이 함께한 세 운동을 차례대로 놓고 견주어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '일제 강점기의 세 운동을 일어난 차례대로 놓아요.', toolOptions: { slots: 3, cards: [{ id: 'y29', text: '광주 학생 독립운동' }, { id: 'y19', text: '3·1운동' }, { id: 'y26', text: '6·10 만세 운동' }], axis: ['옛날', '오늘날'] }, target: { order: ['y19', 'y26', 'y29'] }, difficulty: 0.3,
              levels: {
                easy: { prompt: '연도를 보고 세 운동을 일어난 차례대로 놓아요.', toolOptions: { cards: [{ id: 'y29', text: '광주 학생 독립운동', big: '1929' }, { id: 'y19', text: '3·1운동', big: '1919' }, { id: 'y26', text: '6·10 만세 운동', big: '1926' }] } },
                challenge: { prompt: '세 운동을 차례대로 놓아요(맞지 않는 카드 하나는 빼요).', toolOptions: { cards: [{ id: 'y29', text: '광주 학생 독립운동' }, { id: 'y87', text: '6·10민주항쟁' }, { id: 'y19', text: '3·1운동' }, { id: 'y26', text: '6·10 만세 운동' }] } },
              } },
            MATCH('이름이 비슷한 두 운동과 일어난 때를 이어요.', [['1926년', '6·10 만세 운동'], ['1987년', '6·10민주항쟁']], ['3·1운동'], { easy: 2, base: 2, extraOpt: { axis: ['옛날', '오늘날'] } }, 0.35),
            { prompt: '세 운동에서 학생들이 함께 지킨 뜻을 공통점으로 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '학생독립운동기념일은 ___월 3일이다.', answer: '11' }] },
      }),
      X('wrap.sum5', {
        title: '세 운동 흐름 설명 글', method: '흐름 설명 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(\'먼저 ___, 그다음 ___\')에 빈칸을 채우고 기준 2개를 점검한다.', base: '세 운동의 흐름을 세 문장으로 쓰고 기준 3개를 점검한다.', challenge: '연도와 요구를 근거로 넣어 쓰고 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"세 운동을 \'먼저, 그다음, 마지막으로\'로 이어 설명해 볼까요?" 연도를 넣어 쓰게 한다. 6·10민주항쟁을 섞어 쓰는 학생에게는 오늘 표의 연도를 다시 보게 한다. 출구 2번에서 \'같은 운동\'을 고른 학생에게는 두 운동의 요구를 견주게 한다.',
          exitTicket: [
            RUBX('3·1운동·6·10 만세 운동·학생독립운동의 흐름을 세 문장으로 써요.', { topic: '학생 운동의 흐름', title: '흐름 설명 글', starter: '먼저 ___, 그다음 ___, 마지막으로 ___.', crit: ['세 운동을 차례대로 썼다', '연도를 넣었다', '이어 주는 말(먼저·그다음)을 썼다'], must: [['1919', '1926', '1929']], chars: [30, 200] }),
            { type: 'choice', prompt: '1926년 6·10 만세 운동과 1987년 6·10민주항쟁의 관계는?', options: ['이름은 비슷하지만 다른 때의 다른 운동', '같은 해에 일어난 같은 운동', '같은 사람들이 이끈 운동'], answer: 0, difficulty: 0.3, explain: '6·10 만세 운동(1926)은 독립을, 6·10민주항쟁(1987)은 민주주의를 요구했어요.' },
          ],
        },
        worksheet: {
          title: '학생 운동의 흐름',
          items: [
            { type: 'table', prompt: '세 운동을 견주어 정리해요.', columns: ['운동', '연도', '중심이 된 사람'], cells: [['3·1운동', '', ''], ['6·10 만세 운동', '', ''], ['광주 학생 독립운동', '', '']], answer: '1919·온 겨레 / 1926·학생 / 1929·학생' },
            { type: 'short', prompt: '6·10 만세 운동과 6·10민주항쟁의 차이를 써요.' },
          ],
        },
      }),
    );
    const Y = mk('student', 6);
    M.push(
      Y('intro.same6', {
        title: '두 운동의 공통점 짐작', method: '공통점·차이점 짐작', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 카드 두 장을 읽어 주고 공통점을 함께 고른다.', base: '카드 세 장을 고르고 공통점이 아닌 카드를 가려 낸다.', challenge: '고른 공통점마다 자료로 확인할 방법을 짝에게 말한다.' },
        intro: {
          teacher: '"3·1운동과 학생독립운동은 무엇이 닮고 무엇이 다를까요?" 시연 단추로 공통점 카드가 바구니에 담기는 모습을 보인다. \'같은 해에 일어남\'을 고르는 학생에게는 두 해(1919·1929)를 견주게 한다. 두 운동을 견주어 보고 그 정신을 오늘 학생 자치로 잇는 방법을 생각한다고 밝힌다.',
          student: '두 운동 카드를 보고 공통점이라고 생각하는 카드를 골라 보아요.',
          demo: WPICK('두 운동의 공통점', ['독립을 외침', '같은 해에 일어남', '전국으로 퍼짐', '같은 곳에서 시작'], [['독립을 외침'], ['독립을 외침', '전국으로 퍼짐']]),
          art: art('two paper banners side by side, one dated 1919 and one 1929, with paper students and citizens beneath them', '닮은 점, 다른 점', 'star', 'peach'),
        },
      }),
      Y('activity.venn6', {
        title: '두 운동 공통점·차이점', method: '공통점·차이점 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 3장(칸마다 1장)을 3·1운동만·둘 다·학생독립운동만 바구니에 나눈다(틀리면 바로 알려 줌).', base: '카드 6장을 나눈다.', challenge: '카드 8장(어느 쪽도 아닌 카드 포함)을 나누고 고른 까닭을 말한다.' },
        activity: {
          title: '공통점·차이점 나누기', tool: 'sortboard',
          teacher: '"이 특징은 한 운동에만 있을까요, 둘 다 있을까요?" 연도·시작한 곳·중심이 된 사람·요구를 기준으로 견주게 한다. 학생독립운동에도 시민이 함께했는지 묻는 학생에게는 학생이 중심이 되어 전국으로 퍼졌다고 정리한다. 두 운동의 크기를 견주어 어느 쪽이 더 중요한지 정하지는 않는다.',
          task: '두 운동의 특징 카드를 공통점과 차이점 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('두 운동의 특징을 알맞은 바구니에 나누어요.', { slots: ['3·1운동만', '둘 다', '학생독립운동만'], groups: { '3·1운동만': ['1919년', '독립 선언서 발표'], '둘 다': ['독립을 외침', '전국으로 퍼짐'], '학생독립운동만': ['1929년', '학생 차별에 맞섬'] }, easy: 1, extra: { '학생독립운동만': ['광주에서 시작'] }, traps: ['대통령 직선제 요구'] }, 0.45),
            SB('두 운동이 오늘 우리에게 남긴 뜻과 아닌 것을 나누어요.', { slots: ['남긴 뜻', '남긴 뜻이 아님'], groups: { '남긴 뜻': ['옳지 않은 일에 함께 맞섬', '평화롭게 뜻을 모음', '차별 없는 학교'], '남긴 뜻이 아님': ['힘센 쪽을 따름', '혼자만 잘되기', '다른 의견 무시하기'] } }, 0.3, { conclude: '두 운동은 옳지 않은 일에 함께 맞서고 평화롭게 뜻을 모은 정신을 남겼어요.' }),
            { prompt: '두 운동의 차이점 하나를 골라 그 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 운동을 견주어 정리해요.', columns: ['기준', '3·1운동', '학생독립운동'], cells: [['연도', '', ''], ['시작한 곳', '', ''], ['중심', '', '']], answer: '1919 / 1929 · 서울 / 광주 · 온 겨레 / 학생' }] },
      }),
      Y('activity.solve6', {
        title: '학교 문제, 자치로 풀기', method: '학교 문제 자치로 풀기 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(불평할지 안건을 낼지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(의견 모으기)을 지나 근거 2장을 고른다.', challenge: '갈림 3번(정한 뒤 실천)까지 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 좁은 놀이 공간', tool: 'dilemma',
          teacher: '"학교에 바라는 것이 있으면 무엇부터 할까요?" 고를 때마다 결과 칸을 읽게 한다. 혼자 불평하는 길을 고른 학생에게는 "다른 친구들도 같은 생각인지 어떻게 알 수 있을까요?"라고 묻는다. 학생 자치는 요구만 하는 것이 아니라 의견을 모으고 정한 뒤 함께 지키는 것까지라는 점을 짚는다. 장면은 지어낸 이야기다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '쉬는 시간 놀이 공간',
            steps: [
              { text: '쉬는 시간마다 복도가 붐벼 놀 곳이 좁아요. 친구들이 불만이 많아요.', motif: 'cloud',
                good: ['agenda', '학급 회의 안건으로 낸다', '반 친구들이 함께 문제를 살펴요.', [['우리 반', '함께 고민해요', 1]]],
                bad: ['grumble', '친구들끼리 불평만 한다', '불만은 커지는데 아무것도 바뀌지 않아요.', '불평만으로는 학교에 뜻이 전해지지 않아요.', [['우리 반', '그대로예요', -1]]] },
              { text: '안건을 내려는데 다른 반 생각은 잘 몰라요.', motif: 'house',
                good: ['survey', '전교 설문으로 의견을 모은다', '많은 학생이 같은 불편을 느낀다는 것을 알았어요.', [['전교생', '뜻이 모여요', 1]]],
                bad: ['guess', '내 생각만으로 건의서를 쓴다', '학교가 "다른 학생도 그런가요?"라고 되물어요.', '여러 의견을 모아야 근거가 생겨요.', [['건의', '힘이 약해요', -1]]] },
              { text: '학교와 정해 빈 교실을 쉬는 시간에 열기로 했어요.', motif: 'star',
                good: ['keep', '함께 정한 사용 약속을 지키고 점검한다', '빈 교실이 깨끗하게 이어서 쓰여요.', [['학교', '믿고 맡겨요', 1]]],
                bad: ['mess', '열어 주었으니 마음대로 쓴다', '교실이 어질러져 다시 닫힐 수 있어요.', '자치는 정한 것을 함께 지키는 것까지예요.', [['다음 학년', '쓸 수 없게 돼요', -1]]] },
            ],
            ending: '안건을 내고 의견을 모아 정한 뒤 함께 지켜, 학생 자치로 학교를 바꾸었어요.',
            reasons: [{ id: 'meet', text: '불만은 회의 안건으로 내야 바뀐다' }, { id: 'voice', text: '여러 의견을 모아야 근거가 생긴다' }, { id: 'keep', text: '정한 것을 함께 지켜야 이어진다' }, { id: 'alone', text: '혼자 정해도 충분하다', why: '함께 정해야 모두가 지켜요.' }, { id: 'loud', text: '크게 불평하면 바뀐다', why: '근거 있는 건의가 학교를 움직여요.' }],
            good: ['meet', 'voice', 'keep'],
            talk: '모둠에서 "학생독립운동의 정신을 학생 자치로 잇는 방법"을 이야기해요.',
            conclude: '문제를 안건으로 내고, 의견을 모으고, 정한 것을 함께 지키는 것이 학생 자치예요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '건의할 때 알맞은 근거에 ○ 해요.', options: ['전교 설문 결과', '내 기분'], answer: '전교 설문 결과' }] },
      }),
      Y('wrap.meeting6', {
        title: '학급 회의로 안건 다루기', method: '학급회의로 안건 다루기', tool: 'timer', minutes: 7,
        levels: { easy: '학급 회의 차례 카드 3장(안건 내기·토의·결과 기록)을 놓는다.', base: '차례 카드 4장(표결까지)을 놓고 교사 진행으로 안건 하나를 토의·표결한다.', challenge: '차례 카드 5장(실천 계획까지)을 놓고 결과를 실천 계획으로 남긴다.' },
        wrap: {
          teacher: '"오늘 갈림길에서 정한 안건 하나를 학급 회의 차례대로 다루어 볼까요?" 차례 카드를 먼저 놓은 뒤, 교사 진행으로 안건 제안 → 토의 → 표결 → 결과 기록을 짧게 해 본다. 표결 전에 반대 의견도 한 번 듣게 한다. 결과에 따르지 않으려는 말이 나오면 "함께 정한 것을 지키는 것도 자치예요"라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '학급 회의 차례', cards: ['표결하기', '안건 내기', '결과 기록하기', '토의하기'] }, prompt: '학급 회의 차례 카드를 차례대로 놓아요.', target: { order: ['안건 내기', '토의하기', '표결하기', '결과 기록하기'] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '학급 회의 차례 카드 셋을 차례대로 놓아요.', toolOptions: { cards: ['결과 기록하기', '안건 내기', '토의하기'] }, target: { order: ['안건 내기', '토의하기', '결과 기록하기'] } },
                challenge: { prompt: '학급 회의 차례 카드 다섯을 차례대로 놓아요.', toolOptions: { cards: ['표결하기', '실천 계획 세우기', '안건 내기', '결과 기록하기', '토의하기'] }, target: { order: ['안건 내기', '토의하기', '표결하기', '결과 기록하기', '실천 계획 세우기'] } },
              } },
            { type: 'choice', prompt: '3·1운동과 학생독립운동의 공통점은?', options: ['독립을 외치며 전국으로 퍼짐', '같은 해 같은 곳에서 시작', '대통령 직선제를 요구'], answer: 0, difficulty: 0.25, explain: '두 운동 모두 독립을 외치며 전국으로 퍼졌어요. 시작한 해와 곳은 달라요.' },
            { type: 'short', prompt: '오늘 회의에서 정한 것과 내가 맡을 일을 써요.' },
          ],
        },
        worksheet: {
          title: '학생 자치로 학교를 바꿔요',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '학생독립운동기념일은 11월 ___일이다.', answer: '3' },
            { type: 'short', prompt: '우리 학교에 건의하고 싶은 것과 근거를 써요.' },
          ],
        },
        notes: '교사가 진행하는 활동이다. 표결 결과로 소수 의견을 놀리지 않게 미리 약속한다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
