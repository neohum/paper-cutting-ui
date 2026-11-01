/* 창체 안전교육 사이버 중독 예방 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-cyber 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 약물 및 사이버 중독 예방
 *       ('건전한 사이버 통제 능력 배양 및 사용습관 형성하기'), 별표 2 교육방법 2 '프로젝트 학습',
 *       교육부 학교 안전교육 7대 표준안 사이버(인터넷 게임·스마트폰) 소분류 — sources/changche/research-safety.md.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길 상황(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'이라고 적는다). 장면·인물은 직접 지은 것이다(가명 한두 글자).
 *   학생 자신의 사용 시간·게임 이름 같은 개인 습관은 교구 문항(채점·제출)으로 묻지 않는다 — 교구는 가상 친구(솔·윤·율·서아·하린)의 기록과 이야기로 하고,
 *   내 점검은 걷지 않는 활동지에 혼자 표시한다. 특정 게임·앱·회사 이름은 쓰지 않는다('영상 앱', '단체 대화방'처럼 일반 이름만).
 *   시간 값(420분·180분·20분 등)은 수업용으로 지은 값이다('가상 친구의 계획'·'우리 반 연습'으로 밝힌다).
 * 주제 4개(5학년 2 · 6학년 2), 계획 모듈 42개 전부. 추천 조합은 체계도 sequences(학년마다 5차시).
 *
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목만 있어, 아래 문장은 공식 안내처에서 확인해야 한다.
 *   - self-check 전체(intro.two-friends·activity.signal-sort·activity.case-check·activity.my-check): 점검 항목('못 하게 하면 화가 난다',
 *     '그만하려 해도 잘 안 된다', '할 일을 자꾸 미룬다' 등)은 수업용으로 지은 문장이며 공식 '스마트폰 과의존 척도' 문항이 아니다.
 *     '사용 시간보다 스스로 멈출 수 있는지가 중요하다'는 설명 — 과학기술정보통신부·한국지능정보사회진흥원(스마트쉼센터).
 *   - self-check.activity.cause-effect·usage-graph.intro.two-clocks: '밤늦은 사용은 잠을 줄이고 눈을 피곤하게 할 수 있다' — 질병관리청 국가건강정보포털.
 *   - design-notice 전체: '자동 재생·추천 영상·알림 배지(빨간 숫자)·끝없는 스크롤이 사용 시간을 늘린다'는 설명,
 *     '자동 재생 끄기·알림 묶어 받기(방해 금지)·시청 시간 알림' 같은 설정이 있다는 것 — 기기·앱마다 이름과 자리가 다르다.
 *     스마트쉼센터·방송통신위원회 안내로 확인하고, 교사가 학급 기기에서 실제 설정 이름을 보여 준다.
 *   - balance-campaign.intro.day-pie·activity.balance-budget: 하루 시간 조각·저녁 자유 시간 180분은 가상 값이다(권장 시간 기준이 아니다).
 *     어린이 화면 시간 권고치를 말할 때는 질병관리청·대한소아청소년과학회 안내로 확인한다(화면에 권고 수치를 쓰지 않았다).
 *   - 도움받을 곳(보호자·담임 선생님·상담 선생님)과 스마트쉼센터 같은 상담 창구 안내는 학교마다 다르다 — 교사가 우리 학교에 맞게 바꾼다.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('self-check', 5)('intro.two-friends', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-cyber.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-cyber', band: '초5-6', topic: `saf-cyber.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');

  // ---- 카드 판 문항 ----
  // 나누기: groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const inter = (g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = { topic, slots, cards: inter(groups) }; if (mode) base.mode = mode;
    const ez = take(easy); const fullCards = inter(full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 정리용 나누기 출구 질문(SORT 와 같은 단계)
  const SORTX = (tool, prompt, spec) => { const r = SORT(prompt, spec, 0.15); return { type: 'tool', tool, options: r.toolOptions, prompt, target: r.target, difficulty: 0.15, levels: r.levels }; };
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 카드(카드 칸에 남겨야 함)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode, word = '카드' } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => cards[i]); const ezIds = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(${word} ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ezIds } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 ${word} 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 짝 잇기(match): pairs = [[칸 글, 맞는 카드 글]…]. 쉬움 = 앞 easy쌍, 도전 = more 쌍 + 함정 카드 extra
  const MATCH = (prompt, { topic, pairs, easy = 2, more = [], extra = [] }, d, add) => {
    const rot = (list) => (list.length > 2 ? [...list.slice(1), list[0]] : list.slice().reverse());
    const board = (ps, ex) => ({ toolOptions: { mode: 'match', topic, slots: ps.map((p) => p[0]), cards: rot([...ps.map((p) => p[1]), ...ex]) }, target: { match: Object.fromEntries(ps.map((p) => [p[0], p[1]])) } });
    const base = board(pairs, []);
    const ez = board(pairs.slice(0, easy), []);
    const lv = { easy: { prompt: `${cut(prompt)}(짝 ${easy}개).`, toolOptions: ez.toolOptions, target: ez.target } };
    if (more.length || extra.length) { const ch = board([...pairs, ...more], extra); lv.challenge = { prompt: `${cut(prompt)}(짝 ${pairs.length + more.length}개${extra.length ? ', 남는 카드도 있어요' : ''}).`, toolOptions: ch.toolOptions, target: ch.target }; }
    return Object.assign({ prompt, toolOptions: base.toolOptions, target: base.target, difficulty: d, levels: lv }, add);
  };
  // 골라 담기(pick): good = 담을 카드, bad = 남길 카드. 쉬움 = good 앞 easy장 + bad 앞 easyBad장, 도전 = moreGood·moreBad 더함
  const PICK = (prompt, { basket, topic, good, bad, easy = 2, easyBad = 1, moreGood = [], moreBad = [], extraOpt = {} }, d, add) => {
    const mix = (g, b) => { const out = []; const n = Math.max(g.length, b.length); for (let i = 0; i < n; i++) { if (b[i]) out.push(b[i]); if (g[i]) out.push(g[i]); } return out; };
    const opt = (g, b) => Object.assign({ mode: 'pick', basket, cards: mix(g, b) }, topic ? { topic } : {}, extraOpt);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${easy + easyBad}장).`, toolOptions: opt(good.slice(0, easy), bad.slice(0, easyBad)), target: { pick: good.slice(0, easy) } } };
    if (moreGood.length || moreBad.length) { const g = [...good, ...moreGood]; const b = [...bad, ...moreBad]; lv.challenge = { prompt: `${cut(prompt)}(카드 ${g.length + b.length}장).`, toolOptions: opt(g, b), target: { pick: g } }; }
    return Object.assign({ prompt, toolOptions: opt(good, bad), target: { pick: good }, difficulty: d, levels: lv }, add);
  };
  const PICKX = (tool, prompt, spec) => { const r = PICK(prompt, spec, 0.15); return { type: 'tool', tool, options: r.toolOptions, prompt, target: r.target, difficulty: 0.15, levels: r.levels }; };

  // ---- 갈림길(dilemma) — 도입 시연용 나무 ----
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

  // ---- 기준표 글쓰기(rubric-writing) ----
  // n = [쉬움·기본·도전 기준 수], sent = [쉬움·기본·도전 최소 문장 수](없으면 문장 수를 재지 않음). 도전은 꼭 넣을 낱말(must)을 더한다.
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title, n = [2, 3, 3], sent }, d, more) => {
    const tg = (i, extra) => Object.assign({ selfCheck: crit.slice(0, n[i]), chars }, sent ? { sentences: [sent[i], 6] } : {}, extra || {});
    return Object.assign({
      prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: tg(1), difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: tg(0) },
        challenge: { prompt: `${cut(prompt)}. 다 쓰면 기준표로 한 번 더 고쳐요.`, target: tg(2, must ? { mustInclude: must } : {}) },
      },
    }, more);
  };
  const RUBX = (prompt, spec) => { const r = RUB(prompt, spec, 0.2); return { type: 'tool', tool: 'rubric-writing', options: r.toolOptions, prompt, target: r.target, difficulty: 0.2, levels: r.levels }; };

  // ---- 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부 ----
  const CHK = (prompt, title, good, traps, { easy = 3, base = 4 } = {}, d, more) => {
    const it = (list) => list.map((t) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
    const mixIn = (g) => { const out = g.slice(); traps.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out; };
    const ids = (g) => g.map((t) => `k${good.indexOf(t)}`);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy + traps.length}칸).`, toolOptions: { items: it(mixIn(good.slice(0, easy))) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base) lv.challenge = { prompt: `${cut(prompt)}(${good.length + traps.length}칸).`, toolOptions: { items: it(mixIn(good)) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: it(mixIn(good.slice(0, base))) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
  };
  const CHKX = (prompt, title, good, traps, n) => { const r = CHK(prompt, title, good, traps, n, 0.15); return { type: 'tool', tool: 'kitchen', options: r.toolOptions, prompt, target: r.target, difficulty: 0.15, levels: r.levels }; };
  // 스스로 점검표(kitchen checklist selfCheck) — 실제로 한 일만 표시(정답 없음). 쉬움 easy칸, 기본 base칸, 도전 전부
  const SELFK = (title, list, prompt, easy = 3, base = 5) => {
    const it = (l) => l.map((t, i) => ({ id: `c${i + 1}`, text: t }));
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(list.slice(0, easy)) }, target: { selfCheck: true } } };
    if (list.length > base) lv.challenge = { prompt: `${cut(prompt)}(${list.length}칸).`, toolOptions: { items: it(list) }, target: { selfCheck: true } };
    return { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items: it(list.slice(0, base)) }, prompt, target: { selfCheck: true }, difficulty: 0.1, levels: lv };
  };
  // ---- 정리: 자기 점검표(timer selfCheck) — 쉬움 2칸·기본 3칸·도전 4칸 ----
  const SELF = (title, list, prompt = '오늘 해낸 것에 스스로 표시해요.') => ({
    type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { prompt: `${cut(prompt)}(두 칸).`, target: { selfCheck: list.slice(0, 2) } }, challenge: { prompt: `${cut(prompt)}(네 칸).`, target: { selfCheck: list.slice(0, 4) } } },
  });
  // 정리: 마음 크기(emotion scale) — 정답 없음. 쉬움 3칸·기본 5칸
  const SCALEX = (prompt, situation, feeling, low, high) => ({
    type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: low, 5: high } }, prompt, target: { level: 'any' }, difficulty: 0.1,
    levels: { easy: { prompt: `${cut(prompt)}(세 칸).`, toolOptions: { steps: 3, scaleLabels: { 1: low, 3: high } }, target: { level: 'any' } } },
  });

  // ======== 5학년 · 자기 점검표로 사용 습관 돌아보기 (별표 2 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 표준안 사이버) ========
  {
    const X = mk('self-check', 5);
    const SIGNAL = {
      '조절하는 힘': ['정한 시간에 스스로 끈다', '할 일을 먼저 한다', '폰 없이도 즐겁게 논다', '끄라는 말에 바로 멈춘다'],
      '조절이 어려운 신호': ['못 하게 하면 화가 난다', '그만하려 해도 잘 안 된다', '잠자리에서도 본다', '할 일을 자꾸 미룬다'],
    };
    M.push(
      X('intro.two-friends', {
        title: '솔이와 윤이의 저녁', method: '두 가상 인물의 하루 견주기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 두 친구의 장면을 3개씩 읽어 주고 함께 누구의 저녁인지 짚는다.', base: '장면 4개씩(8장)을 스스로 읽고 누구의 저녁인지 견준다.', challenge: '견준 뒤 "사용 시간 말고 무엇을 봐야 할까?"에 한 문장으로 답한다.' },
        intro: {
          teacher: '"솔이와 윤이(가상 친구)는 둘 다 저녁에 폰을 1시간쯤 써요. 그럼 두 사람의 습관은 같을까요?" 시연 단추로 장면 카드가 솔이·윤이 칸에 나뉘는 모습을 보인다. "쓰는 시간이 같으니 똑같아요"라는 말이 나오면 "윤이는 끄라는 말에 화를 냈어요. 솔이와 무엇이 달랐을까요?"라고 되묻는다. 오늘은 사용 시간만이 아니라 \'스스로 멈출 수 있는가\'를 점검표로 돌아본다고 밝힌다.',
          student: '솔이와 윤이(가상 친구)의 저녁 장면을 읽고, 두 사람이 무엇이 다른지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'sort', title: '솔이와 윤이의 저녁(지어낸 이야기)', slots: [{ id: 'sol', label: '솔이의 저녁' }, { id: 'yun', label: '윤이의 저녁' }], cards: [{ id: 's1', text: '알람 듣고 스스로 끔' }, { id: 'y1', text: '끄라는 말에 화를 냄' }, { id: 's2', text: '끈 뒤 책가방 챙김' }, { id: 'y2', text: '"5분만" 하다 1시간' }, { id: 's3', text: '정한 만큼만 봄' }, { id: 'y3', text: '잠자리에서도 봄' }, { id: 's4', text: '가족과 이야기함' }, { id: 'y4', text: '숙제를 내일로 미룸' }], shuffle: false }, sequence: [{ sort: { sol: ['s1', 's2', 's3', 's4'], yun: ['y1', 'y2', 'y3', 'y4'] } }] },
          art: art('two paper children in side-by-side paper bedrooms in the evening, one calmly putting a phone on a shelf, the other frowning at a glowing phone', '시간은 같은데 무엇이 다를까?', 'moon', 'lavender'),
        },
        notes: '솔이·윤이는 지어낸 인물이다. 학생에게 자기 사용 시간을 말하게 하지 않는다.',
      }),
      X('intro.class-graph', {
        title: '폰을 가장 많이 쓰는 때', method: '가상 학급 조사 그림그래프 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '교사가 그림 수를 함께 세어 주고, 큰 그림 하나가 10명임을 짚는다.', base: '가장 많은 때와 가장 적은 때를 스스로 읽는다.', challenge: '잠자기 전이 많다면 생길 일을 한 문장으로 말한다.' },
        intro: {
          teacher: '"이 그림그래프는 어느 반 친구들에게 \'폰을 가장 많이 쓰는 때\'를 물어본 가상 자료예요. 가장 많은 때는 언제일까요?" 시연 단추로 \'잠자기 전\'이 골라지는 모습을 보인다. "잠자기 전에 보면 잠이 잘 와요"라는 말에는 "밝은 화면을 보다 보면 언제 끄게 될까요? 잠드는 시각은 어떻게 될까요?"라고 되물어 원인과 결과를 잇게 한다.',
          student: '그림그래프(가상 자료)에서 폰을 가장 많이 쓰는 때를 찾고, 그때 많이 쓰면 생길 일을 하나 떠올려 보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '폰을 가장 많이 쓰는 때(가상 조사)', unit: '명', xLabel: '때', yLabel: '학생 수', data: [['아침', 2], ['쉬는 시간', 4], ['저녁', 9], ['잠자기 전', 13]], icons: [{ value: 10, name: '10명' }, { value: 1, name: '1명' }], icon: 'person', question: '가장 많은 때는?', choices: ['아침', '쉬는 시간', '저녁', '잠자기 전'] }, sequence: [{ pick: 3 }] },
          art: art('a paper picture graph with rows of tiny paper people next to a sun, a school bell, a sunset and a moon', '언제 가장 많이 쓸까?(가상)', 'moon', 'sky'),
        },
        notes: '그래프는 수업용 가상 자료다. 우리 반을 실제로 조사해 이름과 함께 보이지 않는다.',
      }),
      X('activity.signal-sort', {
        title: '조절하는 힘·조절이 어려운 신호', method: '점검 질문을 신호별로 나누기', tool: 'story', minutes: 14,
        levels: { easy: '점검 카드 4장을 두 칸에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '점검 카드 8장을 두 칸에 나눈다.', challenge: '카드 10장(어느 칸도 아닌 함정 카드 포함)을 나누고, 헷갈리는 카드 하나를 모둠에서 토의해 정한다.' },
        activity: {
          title: '점검 카드를 신호별로 나누기', tool: 'story',
          teacher: '"\'정한 시간에 스스로 끈다\'는 어느 칸일까요? \'못 하게 하면 화가 난다\'는요?" 카드를 놓을 때마다 왜 그 칸인지 한 문장으로 말하게 한다. "오래 쓰면 다 나쁜 신호예요"라는 학생에게 "숙제 자료를 찾느라 오래 쓴 날은 어떨까요? 시간보다 내가 멈출 수 있는지를 봐요"라고 짚는다. "나는 언제든 끊을 수 있어요"라는 말에는 "그걸 확인하는 게 점검이에요"라고 답해 준다.',
          task: '점검 카드를 읽고 \'조절하는 힘\'과 \'조절이 어려운 신호\' 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('점검 카드를 두 칸에 나누어요.', { slots: ['조절하는 힘', '조절이 어려운 신호'], mode: 'sort', groups: SIGNAL, extra: { '조절하는 힘': ['쉬는 시간을 미리 정한다'] }, traps: ['폰 색깔이 마음에 든다'] }, 0.2),
            SORT('가상 친구들이 한 말을 두 칸에 나누어요.', { slots: ['조절하는 힘', '조절이 어려운 신호'], mode: 'sort', groups: { '조절하는 힘': ['"30분 됐으니 그만할래"', '"숙제 먼저 하고 볼게"'], '조절이 어려운 신호': ['"딱 하나만 더"를 반복', '"폰 없으면 너무 불안해"'] }, easy: 1, extra: { '조절이 어려운 신호': ['"몰래 이불 속에서 볼래"'] }, traps: ['"오늘 날씨 좋다"'] }, 0.25,
              { conclude: '사용 시간만이 아니라 스스로 멈출 수 있는지, 할 일을 먼저 하는지가 조절하는 힘이에요.' }),
            { prompt: '헷갈리는 카드 하나를 골라 모둠에서 어느 칸인지 토의해 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '조절이 어려운 신호는 무엇인가요?', options: ['정한 시간에 스스로 끈다', '못 하게 하면 화가 난다', '할 일을 먼저 한다'], answer: '못 하게 하면 화가 난다' }] },
      }),
      X('activity.case-check', {
        title: '율이 대신 점검표 체크', method: '가상 인물 대신 점검표 체크하고 판단', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검표 4칸(율이 모습 2칸) 가운데 율이 모습에만 표시한다.', base: '점검표 6칸(율이 모습 4칸)에 표시하고 먼저 도울 습관을 고른다.', challenge: '점검표 7칸에 표시하고, 먼저 도울 습관을 고른 뒤 율이에게 줄 조언을 한 문장으로 말한다.' },
        activity: {
          title: '율이의 일주일과 점검표', tool: 'kitchen',
          teacher: '"율이(가상 친구)의 일주일을 다시 읽어 볼까요?" 이야기를 소리 내어 읽고 문장마다 점검표의 어느 칸과 맞는지 손가락으로 짚게 한다. "점수가 높으면 율이는 나쁜 아이예요"라는 말에는 "점검표는 사람을 나누는 게 아니라 도울 곳을 찾는 거예요"라고 바로잡는다. 먼저 도울 습관을 고를 때는 그 습관이 다른 일(잠·지각·숙제)로 이어지는 원인인지 따져 보게 한다.',
          task: '율이(가상)는 밤 11시까지 침대에서 폰을 봐요. 끄라고 하면 화를 내고 숙제는 아침에 해요. 식사 때도 폰을 보고, 주말엔 친구들과 축구를 해요. 점검표에 율이 모습대로 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('율이 이야기를 읽고 율이에게 해당하는 칸만 표시해요.', '율이 점검표', ['잠자리에서도 폰을 본다', '끄라는 말에 화를 낸다', '숙제를 자꾸 미룬다', '식사 때도 폰을 본다', '"5분만" 하다 길어진다'], ['친구와 놀기를 피한다', '정한 시간에 스스로 끈다'], { easy: 2, base: 4 }, 0.2),
            { prompt: '율이가 아침마다 졸려 해요. 가장 먼저 도울 습관 하나를 골라 담아요.', toolOptions: { mode: 'pick', basket: '먼저 도울 습관', cards: ['식사 때도 폰을 본다', '잠자리에서도 폰을 본다', '주말엔 축구를 한다'] }, target: { pick: ['잠자리에서도 폰을 본다'] }, difficulty: 0.25, conclude: '점검표는 남과 견주는 점수가 아니라, 먼저 도울 습관을 찾는 도구예요.' },
            { prompt: '율이에게 줄 조언을 한 문장으로 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '율이에게 줄 조언을 한 문장으로 써요.' }] },
        notes: '율이는 지어낸 인물이다. 점검표 항목은 수업용으로 지은 문장이며 공식 척도 문항이 아니다.',
      }),
      X('activity.my-check', {
        title: '내 습관 혼자 점검하기', method: '내 사용 습관 스스로 점검', tool: 'timer', minutes: 14,
        levels: { easy: '점검 차례 카드 3장을 놓고, 활동지 점검 4줄에 혼자 표시한다. 기록판은 서아(가상)의 평일 기록을 옮겨 적는다.', base: '차례 카드 4장, 활동지 점검 6줄, 기록판 1칸(서아의 평일 기록)을 한다.', challenge: '기록판에 서아의 평일·주말 기록 2칸을 옮겨 적고 다른 점을 짝과 찾는다.' },
        activity: {
          title: '혼자 하는 점검과 기록 연습', tool: 'timer',
          teacher: '"이제 점검표를 나에게 써 볼 차례예요. 활동지는 걷지 않아요. 나만 보는 거예요." 교구에서는 점검하는 차례와 가상 친구 서아의 기록을 옮겨 적는 연습만 한다. "점수가 높게 나오면 창피해요"라는 학생에게 "점검은 남과 견주는 게 아니라 내가 알고 바꾸려고 하는 거예요"라고 말해 준다. 친구의 활동지를 들여다보지 않게 하고, 걱정되는 학생은 따로 이야기 나눌 수 있다고 알린다.',
          task: '점검하는 차례를 정하고, 서아(가상)의 기록을 기록판에 옮겨 적어요. 내 점검은 활동지에 혼자 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '스스로 점검하는 차례대로 카드를 놓아요.', toolOptions: { title: '스스로 점검 차례', cards: ['표시하기', '점검 질문 읽기', '바꿀 점 하나 고르기', '내 모습 떠올리기'] }, target: { order: ['점검 질문 읽기', '내 모습 떠올리기', '표시하기', '바꿀 점 하나 고르기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '스스로 점검하는 차례대로 카드를 놓아요(카드 3장).', toolOptions: { cards: ['표시하기', '점검 질문 읽기', '내 모습 떠올리기'] }, target: { order: ['점검 질문 읽기', '내 모습 떠올리기', '표시하기'] } } } },
            { prompt: '서아(가상)는 평일 하루 약 60분 써요. 기록판에 옮겨 적어요.', toolOptions: { title: '서아의 기록(가상)', unit: '분', fields: [{ label: '평일 하루', unit: '분', step: 10 }] }, target: { records: [60] }, difficulty: 0.15,
              levels: { challenge: { prompt: '서아(가상)는 평일 하루 약 60분, 주말 하루 약 120분 써요. 두 칸에 옮겨 적어요.', toolOptions: { fields: [{ label: '평일 하루', unit: '분', step: 10 }, { label: '주말 하루', unit: '분', step: 10 }] }, target: { records: [60, 120] } } } },
            { prompt: '활동지 점검 줄에 혼자 표시한 뒤, 한 일에 표시해요.', toolOptions: { title: '혼자 점검을 마쳤어요' }, target: { selfCheck: ['점검 줄을 끝까지 읽었다', '솔직하게 표시했다', '친구와 견주지 않았다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '활동지 점검 4줄에 혼자 표시한 뒤, 한 일에 표시해요.', target: { selfCheck: ['점검 줄을 끝까지 읽었다', '솔직하게 표시했다'] } } }, conclude: '점검은 나만 보는 것이에요. 알게 된 것으로 바꿀 점 하나를 고르면 돼요.' },
            { prompt: '서아의 평일과 주말 기록이 다른 까닭을 짝과 짐작해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '나에게 맞는 것에 혼자 표시해요(제출하지 않아요).', options: ['정한 시간에 스스로 끈다', '할 일을 먼저 한다', '그만하려 해도 잘 안 된다', '잠자리에서도 본다', '못 하게 하면 화가 난다', '폰 없이도 즐겁게 논다'] }] },
        notes: '학생 자신의 사용 시간·습관은 교구(채점·제출)에 넣지 않았다. 기록판은 가상 친구 서아의 기록을 옮겨 적는 연습이고, 내 점검 6줄은 활동지에 혼자 표시한다. 활동지는 걷지 않고 학생이 가져간다. 쉬움 학생에게는 활동지 앞 4줄만 하게 한다.',
      }),
      X('activity.cause-effect', {
        title: '조절이 어려워질 때 원인과 결과', method: '원인과 결과 모둠 마인드맵', tool: 'mindmap', minutes: 14,
        levels: { easy: '원인·결과 카드를 2장씩(4장) 나누고, 놓으면 바로 맞는지 알려 준다.', base: '원인·결과 카드를 3장씩(6장) 나눈다.', challenge: '카드 8장(함정 카드 포함)을 나누고, 원인에서 결과로 이어지는 사슬 카드를 차례로 놓는다.' },
        activity: {
          title: '원인과 결과 마인드맵', tool: 'mindmap',
          teacher: '"알림이 계속 울리면 어떤 일이 이어질까요?" 모둠이 카드를 놓을 때마다 "~때문에 ~해요"로 말하게 한다. "결과는 나만 피곤한 거예요"라는 말에는 "가족과 다툼이 생기면 누가 함께 속상할까요?"라고 되묻는다. 사슬 문항에서는 "이 카드 때문에 다음 카드가 생겼나요?"라고 고리마다 묻는다.',
          task: '가운데 \'조절이 어려워질 때\'에 원인 가지와 결과 가지를 모둠이 함께 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            SORT('카드를 원인 가지와 결과 가지에 나누어요.', { topic: '조절이 어려워질 때', slots: ['원인', '결과'], groups: { 원인: ['알림이 계속 울림', '심심한 시간이 많음', '친구 단체방이 시끌'], 결과: ['잠이 모자람', '숙제가 밀림', '눈이 피곤함'] }, extra: { 결과: ['가족과 다툼'] }, traps: ['키가 쑥 자람'] }, 0.2),
            ORDER('원인에서 결과로 이어지는 사슬을 차례대로 놓아요.', ['알림이 울림', '폰을 집어 듦', '밤늦게까지 봄', '잠이 모자람', '수업 때 졸림'], { mode: 'order', easy: [0, 2, 3], trap: '일찍 잠듦' }, 0.25,
              { conclude: '원인을 찾으면 사슬의 앞에서 끊을 수 있어요. 알림 끄기처럼 앞 고리를 바꿔요.' }),
            { prompt: '모둠에서 사슬의 어느 고리를 끊으면 좋을지 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인과 결과를 하나씩 써요.', columns: ['원인', '결과'], cells: [['', '']], answer: '(예) 알림이 계속 울림 → 숙제가 밀림' }] },
      }),
      X('wrap.heart', {
        title: '점검을 마친 내 마음', method: '점검을 마친 내 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 크기 3칸에서 고르고, 이야기할 사람 카드 2장 가운데 하나를 고른다.', base: '마음 크기 5칸에서 고르고, 이야기할 수 있는 사람 카드 2장을 담는다.', challenge: '사람 카드 5장 가운데 알맞은 3장을 담고, 고른 마음의 까닭을 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"점검을 마친 지금 마음은 어떤가요? 정답은 없어요." 마음 크기를 고르게 한 뒤, 걱정이 되면 누구와 이야기할 수 있는지 고르게 한다. "아무에게도 말 안 할래요"라는 학생에게 "보호자나 선생님은 도와주려고 있는 사람이에요. 혼내려는 게 아니에요"라고 말해 준다. 걱정이 큰 학생은 수업 뒤 따로 만난다.',
          exitTicket: [
            SCALEX('점검을 마친 지금 내 마음을 골라요.', '점검을 마친 지금 내 마음', '편안함', '걱정돼요', '마음이 편해요'),
            PICKX('emotion', '걱정이 될 때 이야기할 수 있는 사람을 골라 담아요.', { basket: '이야기할 사람', good: ['보호자', '담임 선생님'], bad: ['처음 본 온라인 친구'], easy: 1, easyBad: 1, moreGood: ['상담 선생님'], moreBad: ['아무에게도 말 안 함'] }),
            { type: 'short', prompt: '고른 마음의 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '점검을 마친 내 마음',
          items: [
            { type: 'check', prompt: '걱정이 될 때 이야기할 수 있는 사람에 표시해요.', options: ['보호자', '담임 선생님', '상담 선생님'] },
            { type: 'short', prompt: '오늘 점검에서 알게 된 나의 좋은 습관 하나를 써요.' },
          ],
          easy: { note: '점검은 나만 보는 거예요. 좋은 습관부터 찾아요.', items: [{ type: 'draw', prompt: '폰을 내려놓고 즐겁게 노는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.keep-change', {
        title: '지킬 습관·바꿀 습관', method: '지킬 습관·바꿀 습관 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀로 한 문장 이상 쓰고 기준 1개(구체적인가)를 점검한다.', base: '두 문장 이상 쓰고 기준 2개(구체적인가·내가 지킬 수 있는가)를 점검한다.', challenge: '바꿀 방법까지 세 문장 이상 쓰고 기준 3개를 점검한다(\'바꾸\'·\'고치\' 낱말 넣기).' },
        wrap: {
          teacher: '"잘 지키는 습관 하나, 바꿀 습관 하나를 써 볼까요?" 기준표를 함께 읽고 쓰게 한다. "폰을 덜 하겠다"처럼 막연하게 쓴 학생에게 "언제, 얼마나를 넣으면 지키기 쉬워요"라고 말해 준다. 쓴 글은 친구와 견주지 않는다.',
          exitTicket: [
            RUBX('잘 지키는 습관과 바꿀 습관을 써요.', { topic: '잘 지키는 습관 하나와 바꿀 습관 하나를 써요(이름은 쓰지 않아요).', starter: '나는 ___를 잘 지킨다. 나는 ___를 바꾸겠다.', crit: ['구체적으로 썼다', '내가 지킬 수 있는 일이다', '바꿀 방법을 썼다'], must: [['바꾸', '고치']], chars: [20, 160], title: '지킬 습관·바꿀 습관', n: [1, 2, 3], sent: [1, 2, 3] }),
            { type: 'choice', prompt: '점검표 결과는 어떻게 쓰나요?', options: ['친구와 견주어 순위를 정한다', '나를 돌아보고 바꿀 점을 찾는다', '높게 나오면 숨긴다'], answer: 1, difficulty: 0.15, explain: '점검표는 남과 견주는 점수가 아니라 나를 돌아보는 도구예요.' },
          ],
        },
        worksheet: {
          title: '지킬 습관·바꿀 습관',
          items: [
            { type: 'table', prompt: '내 습관을 하나씩 써요.', columns: ['잘 지키는 습관', '바꿀 습관'], cells: [['', '']] },
            { type: 'short', prompt: '바꿀 습관을 고칠 방법 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 사용 기록 그래프 읽고 실천 계획 세우기 (별표 2 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 표준안 스마트폰) ========
  {
    const X = mk('usage-graph', 5);
    // 가상 친구 하린이의 일주일 여가 화면 시간(분, 가상)
    const WEEK = [['월', 60], ['화', 40], ['수', 120], ['목', 50], ['금', 70], ['토', 150], ['일', 90]];
    const DAYS = WEEK.map((d) => d[0]);
    const WCHART = { type: 'bar', mode: 'read', title: '하린이의 여가 화면 시간(가상)', unit: '분', xLabel: '요일', yLabel: '쓴 시간', data: WEEK, scale: 10 };
    const B = { mon: '월 40분', tue: '화 40분', wed: '수 60분', wedx: '수 120분', thu: '목 40분', fri: '금 60분', sat: '토 90분', satx: '토 150분', sun: '일 90분', rain: '비 오는 토요일 대비: 보드게임', study: '숙제 자료 검색 30분' };
    // 갈림길: 실천 첫날 밤
    const FIRST = [
      { text: '실천 첫날 밤 9시, 단체 대화방 알림이 계속 울려요. 계획은 \'9시엔 폰 내려놓기\'예요.', motif: 'moon',
        good: ['mute', '알림을 끄고 내일 아침에 본다', '계획대로 9시에 폰을 내려놓았어요.', [['나', '계획을 지켜요', 1]]],
        bad: ['peek', '잠깐만 들어가 본다', '대화가 길어져 10시가 넘었어요.', '"잠깐"이 계획을 무너뜨리기 쉬워요.', [['나', '잠이 늦어져요', -1]]] },
      { text: '다음 날 친구가 "어제 왜 답 안 했어?"라고 물어요.', motif: 'sun',
        good: ['tell', '"9시 뒤엔 폰을 쉬어"라고 알려 준다', '친구가 "나도 해 볼까?"라고 해요.', [['친구', '내 계획을 알게 돼요', 1]]],
        bad: ['late', '미안해서 오늘은 밤늦게까지 답한다', '계획이 이틀 만에 흔들려요.', '친구에게 계획을 알리면 지키기 쉬워요.', [['나', '계획이 흔들려요', -1]]] },
    ];
    const FIRST_R = [{ id: 'ready', text: '대비책이 있으면 계획을 지키기 쉽다' }, { id: 'share', text: '계획을 알리면 도움을 받는다' }, { id: 'once', text: '한 번쯤은 괜찮다', why: '"한 번만"이 이어지기 쉬워요.' }];
    M.push(
      X('intro.two-clocks', {
        title: '"잠깐만"은 몇 분이었을까', method: '든 시각·내려놓은 시각으로 걸린 시간 구하기', tool: 'clock', minutes: 5,
        levels: { easy: '교사가 정각 시계 두 개(7시·8시)로 먼저 1시간을 함께 세어 본다.', base: '7시 10분과 8시 25분 시계를 읽고 걸린 시간(1시간 15분)을 구한다.', challenge: '계획한 20분보다 얼마나 넘었는지(55분)까지 구한다.' },
        intro: {
          teacher: '"가상 친구 하린이가 \'잠깐만 볼게\' 하고 폰을 든 시각과 내려놓은 시각이에요." 시연 단추로 시계가 7시 10분에서 8시 25분으로 돌아가는 모습을 보인다. "잠깐이니까 10분쯤이에요"라는 말에는 "긴바늘이 몇 바퀴 넘게 돌았나요? 시계로 세어 봐요"라고 되묻는다. 느낌과 실제 시간이 다를 수 있어 기록이 필요하다는 데로 잇는다.',
          student: '시계 두 개(7시 10분, 8시 25분)를 읽고 하린이가 폰을 쓴 시간을 구해 보아요. 하린이가 처음 생각한 \'잠깐\'은 20분이었어요.',
          demo: { tool: 'clock', options: { minuteStep: 5, showDigital: true }, sequence: [{ h: 7, m: 10 }, { h: 8, m: 25 }] },
          art: art('two big paper clocks side by side, one at ten past seven and one at twenty-five past eight, with a paper phone between them', '"잠깐만"은 얼마였을까?', 'moon', 'sky'),
        },
      }),
      X('intro.graph-face', {
        title: '그래프를 본 하린이의 마음', method: '자기 그래프를 본 친구 마음 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 마음 카드 2장(놀람·걱정)을 읽어 주고 함께 고른다.', base: '마음 카드 4장 가운데 하린이의 마음을 스스로 고른다.', challenge: '하린이에게 할 첫마디("같이 원인을 찾아보자" 등)를 고른다.' },
        intro: {
          teacher: '"하린이(가상 친구)가 자기 사용 기록 그래프를 처음 보고 깜짝 놀랐어요. 어떤 마음일까요?" 시연 단추로 놀람·걱정 카드가 담기는 모습을 보인다. "그래프가 높으니 하린이는 의지가 약해요"라는 말에는 "그 날에 무슨 일이 있었는지 먼저 알아볼까요?"라고 되묻는다. 오늘은 그래프에서 원인을 찾는다고 밝힌다.',
          student: '하린이(가상 친구)가 자기 그래프를 처음 보고 놀랐어요. 하린이의 마음을 고르고, 하린이에게 할 첫마디를 생각해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '하린이의 마음', cards: [{ id: 'surprise', text: '놀람' }, { id: 'excite', text: '신남' }, { id: 'worry', text: '걱정' }, { id: 'proud', text: '뿌듯함' }], shuffle: false }, sequence: [{ pick: ['surprise', 'worry'] }] },
          art: art('a paper child looking surprised at a tall paper bar graph on a tablet screen, with a small question mark above', '내 그래프가 이렇게 높아?', 'cloud', 'peach'),
        },
      }),
      X('intro.first-day', {
        title: '실천 첫날 밤 갈림길', method: '실천 첫날 갈림길', tool: 'dilemma', minutes: 5,
        levels: { easy: '갈림 한 번(알림이 울리는 밤)만 함께 보고 결과를 읽는다.', base: '갈림 두 번(다음 날 친구의 질문까지)을 지나 결과를 견준다.', challenge: '결과를 보고 내 계획에 넣을 대비책을 한 가지 말한다.' },
        intro: {
          teacher: '"계획을 세운 첫날 밤, 단체 대화방이 시끌시끌해요. 어떻게 할까요?" 시연 단추로 \'알림을 끄고 내일 본다\' → \'계획을 알린다\' 길과 근거가 골라지는 모습을 보인다. "한 번은 괜찮아요"라는 말에는 "그 \'한 번\'이 다음 날에도 올까요?"라고 되묻는다. 계획에는 어길 만한 순간에 대비하는 방법이 들어가야 한다는 점을 짚는다.',
          student: '실천 첫날 밤 알림이 계속 울리면 나는 어떻게 할지, 그리고 그 뒤에 어떤 일이 생길지 짝에게 말해 보아요.',
          demo: { tool: 'dilemma', options: { title: '실천 첫날 밤', scene: TREE(FIRST, 2, '알림을 끄고 계획을 알린 덕분에 첫날을 지켰어요.'), reasons: FIRST_R }, sequence: [{ path: ['mute', 'tell'], reasons: ['ready'] }] },
          art: art('a paper phone on a bedside table glowing with many chat bubbles at night, and a paper child reaching to switch notifications off', '첫날 밤, 어떻게 할까?', 'moon', 'lavender'),
        },
      }),
      X('activity.week-bar', {
        title: '하린이의 일주일 막대그래프', method: '가상 일주일 사용 막대그래프 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '막대 끝에 값이 보이는 그래프로 가장 많은 날·적은 날을 고른다.', base: '값 없이 눈금을 읽어 가장 많은 날·적은 날·그 차이를 답한다.', challenge: '값을 숨긴 채 읽고, 그래프만으로 알 수 없는 것도 고른다.' },
        activity: {
          title: '가상 일주일 막대그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 하린이(가상 친구)의 일주일 여가 화면 시간이에요. 가장 높은 막대는 무슨 요일인가요?" 막대 끝을 눈금에 맞춰 읽게 한다. "토요일에 하린이가 게으름을 피웠어요"라는 말에는 "그래프가 왜 높은지까지 알려 줄까요? 그날 무슨 일이 있었는지는 따로 알아봐야 해요"라고 되묻는다. 차이를 구할 때는 큰 수에서 작은 수를 빼게 한다.',
          task: '하린이(가상)의 일주일 막대그래프를 읽고 가장 많은 날·적은 날과 그 차이를 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '하린이가 가장 많이 쓴 요일은 언제인가요?(가상 자료)', toolOptions: Object.assign({}, WCHART, { question: '가장 많이 쓴 요일은?', choices: DAYS }), target: { pick: 5 }, difficulty: 0.15 },
            { prompt: '하린이가 가장 적게 쓴 요일은 언제인가요?(가상 자료)', toolOptions: Object.assign({}, WCHART, { question: '가장 적게 쓴 요일은?', choices: DAYS }), target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '가장 많은 날과 가장 적은 날은 몇 분 차이인지 써요(가상 자료).', toolOptions: Object.assign({}, WCHART, { question: '차이는 몇 분?' }), target: { value: 110 }, difficulty: 0.3 },
            { prompt: '이 그래프만으로는 알 수 없는 것을 골라요(가상 자료).', toolOptions: Object.assign({}, WCHART, { question: '그래프로 알 수 없는 것은?', choices: ['토요일에 가장 많이 썼다', '토요일에 왜 많이 썼는지', '화요일이 가장 적었다'], why: ['막대가 가장 높은 날이 토요일이에요.', '', '막대가 가장 낮은 날이 화요일이에요.'] }), target: { pick: 1 }, difficulty: 0.3,
              conclude: '그래프는 많이 쓴 날을 보여 주지만, 왜 많이 썼는지는 그날 일을 살펴봐야 알아요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상)에서 하린이가 가장 적게 쓴 요일은?', options: ['월', '화', '수', '토'], answer: '화' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 학생에게 자기 기록을 발표하게 하지 않는다.',
      }),
      X('activity.cause-link', {
        title: '높은 날과 그날 일 잇기', method: '높은 날과 그날 일 잇기', tool: 'wordcards', minutes: 14,
        levels: { easy: '높은 날 2개(토·수)에 그날 일 카드를 잇는다.', base: '높은 날 4개에 그날 일 카드를 잇는다.', challenge: '4쌍을 잇되 남는 카드를 가려 내고, 원인 카드마다 대비책을 한 줄씩 말한다.' },
        activity: {
          title: '높은 날의 원인 찾기', tool: 'wordcards',
          teacher: '"하린이 일기를 읽고 그래프가 높은 날에 무슨 일이 있었는지 이어 볼까요?" 짝 지을 때마다 "~해서 많이 썼어요"로 말하게 한다. "높은 날은 그냥 하린이 의지가 약한 날이에요"라는 말에는 "비가 와서 밖에 못 나간 날도 의지 탓일까요? 원인을 알면 대비할 수 있어요"라고 되묻는다. 대비책 문항에서는 원인마다 다른 방법이 필요하다는 점을 짚는다.',
          task: '하린이(가상)의 일기: 수요일엔 새 게임 업데이트, 금요일엔 시험이 끝났고, 토요일엔 비가 와 집에만 있었고, 일요일엔 친척 집에서 심심했어요. 높은 날과 그날 일을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('그래프가 높은 요일 옆에 그날 일 카드를 놓아요.', { pairs: [['토요일(150분)', '비 와서 밖에 못 나감'], ['수요일(120분)', '새 게임 업데이트'], ['일요일(90분)', '친척 집에서 심심함'], ['금요일(70분)', '시험이 끝남']], easy: 2, extra: ['일찍 잠자리에 듦'] }, 0.25),
            PICK('다음 비 오는 날을 위한 대비책만 골라 담아요.', { basket: '비 오는 날 대비책', good: ['보드게임 꺼내 두기', '읽을 책 빌려 두기'], bad: ['충전기를 옆에 두기'], moreGood: ['실내 운동 하나 정하기'], moreBad: ['하루 종일 영상 보기'] }, 0.2,
              { conclude: '그래프가 높은 날에는 원인이 있어요. 원인을 찾으면 그날을 위한 대비책을 세울 수 있어요.' }),
            { prompt: '원인 카드마다 다음에 할 대비책을 한 줄씩 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인에 맞는 대비책을 써요.', columns: ['그날 일(원인)', '대비책'], cells: [['비 와서 밖에 못 나감', ''], ['시험이 끝남', '']], answer: '(예) 보드게임 꺼내 두기, 친구와 운동장에서 놀기' }] },
      }),
      X('activity.week-budget', {
        title: '일주일 화면 시간 예산', method: '일주일 화면 시간 예산 다시 짜기', tool: 'economy', minutes: 14,
        levels: { easy: '평일 예산 240분 안에서 월~금 블록 5개를 고른다(함정 블록 1개).', base: '예산 420분 안에서 요일 블록 7개를 고르고, 비 오는 토요일 대비 블록을 꼭 넣는다.', challenge: '같은 예산에서 학습용 블록(숙제 자료 검색)은 빼고 여가 블록만 고른다.' },
        activity: {
          title: '여가 화면 시간 블록 고르기', tool: 'economy',
          teacher: '"하린이(가상 친구)가 이번 주 여가 화면 시간을 420분으로 정했어요. 요일마다 블록을 하나씩 고르면 넘지 않을까요?" 블록을 고를 때마다 칠판에 더해 가며 합을 적게 한다. "토요일은 쉬는 날이니 150분도 괜찮아요"라는 학생에게 "그럼 합이 몇 분이 되나요? 다른 요일을 줄여야 할까요?"라고 묻는다. 숙제 자료 검색처럼 공부에 쓰는 시간은 여가 예산과 따로 둔다는 점을 짚는다. 교구가 분 단위 예산 막대를 그리지 못해 블록 카드로 고른다.',
          task: '하린이(가상)의 이번 주 여가 화면 예산 420분 안에서 요일 블록을 골라요. 비 오는 토요일 대비 블록도 넣어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '요일마다 블록 하나씩, 420분을 넘지 않게 고르고 비 오는 토요일 대비 블록도 꼭 담아요.', toolOptions: { mode: 'pick', basket: '이번 주 계획(420분)', cards: [B.mon, B.wedx, B.tue, B.wed, B.thu, B.satx, B.fri, B.sat, B.sun, B.rain] }, target: { pick: [B.mon, B.tue, B.wed, B.thu, B.fri, B.sat, B.sun, B.rain] }, difficulty: 0.3,
              levels: {
                easy: { prompt: '평일 예산은 240분이에요. 월~금 블록을 하나씩, 240분을 넘지 않게 골라 담아요.', toolOptions: { basket: '평일 계획(240분)', cards: [B.mon, B.wedx, B.tue, B.wed, B.thu, B.fri] }, target: { pick: [B.mon, B.tue, B.wed, B.thu, B.fri] } },
                challenge: { prompt: '420분은 여가 화면 예산이에요. 학습용 블록은 빼고, 요일마다 하나씩 대비 블록까지 담아요.', toolOptions: { cards: [B.mon, B.wedx, B.study, B.tue, B.wed, B.thu, B.satx, B.fri, B.sat, B.sun, B.rain] } },
              } },
            SORT('화면 쓰는 일과 다른 활동을 칸에 나누어요.', { slots: ['여가 화면', '학습용 화면', '화면 없는 활동'], mode: 'sort', groups: { '여가 화면': ['영상 보기', '게임 하기'], '학습용 화면': ['숙제 자료 검색', '온라인 수업 듣기'], '화면 없는 활동': ['보드게임', '자전거 타기'] }, easy: 1, extra: { '여가 화면': ['만화 보기(태블릿)'], '화면 없는 활동': ['책 읽기'] } }, 0.2,
              { conclude: '예산은 합이 넘지 않게 짜고, 원인이 된 날에는 화면 없는 대비 블록을 넣어요.' }),
            { prompt: '비 오는 날 대비 블록을 넣은 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '월·화·목 40분, 수·금 60분이면 평일 합은 ___분이에요.', answer: '240' }] },
        notes: 'economy 교구는 돈(원)만 세어 분 단위 예산 막대를 그리지 못한다. 블록 카드 고르기(요일마다 하나, 합 420분)와 나누기로 했다. 칠판에 칸 막대를 그려 블록을 칠하며 더하면 좋다. 420분·240분은 가상 친구의 계획으로 지은 값이다.',
      }),
      X('activity.goal-sort', {
        title: '구체적인 목표·막연한 목표', method: '구체적인 목표·막연한 목표 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '목표 카드 4장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '목표 카드 8장을 두 가지에 나눈다.', challenge: '카드 10장을 나누고, 막연한 카드 하나를 언제·얼마나를 넣어 고쳐 말한다.' },
        activity: {
          title: '목표 카드 나누기', tool: 'mindmap',
          teacher: '"\'폰 덜 하기\'와 \'평일 저녁 9시엔 거실에 두기\' 가운데 지키기 쉬운 목표는 무엇일까요?" 카드를 놓을 때마다 "언제? 얼마나? 어디서?"가 들어 있는지 묻는다. "\'열심히 참기\'도 좋은 목표예요"라는 말에는 "얼마나 참으면 지킨 걸까요? 잴 수 없으면 지켰는지 알기 어려워요"라고 되묻는다.',
          task: '목표 카드를 \'구체적인 목표\'와 \'막연한 목표\' 가지에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('목표 카드를 두 가지에 나누어요.', { topic: '좋은 목표 찾기', slots: ['구체적인 목표', '막연한 목표'], groups: { '구체적인 목표': ['평일 저녁 9시엔 거실에 두기', '게임은 숙제 뒤 30분', '잠자기 30분 전 폰 끄기', '주말 영상은 하루 1시간'], '막연한 목표': ['폰 덜 하기', '열심히 참기', '적당히 하기', '이제부터 잘하기'] }, extra: { '구체적인 목표': ['식사 때는 폰을 방에'], '막연한 목표': ['마음 단단히 먹기'] } }, 0.2),
            PICK('\'폰 덜 하기\'를 구체적으로 고친 목표만 골라 담아요.', { basket: '고친 목표', topic: '폰 덜 하기 고치기', good: ['평일엔 하루 40분만', '저녁 8시 뒤엔 폰 끄기'], bad: ['이번엔 진짜 덜 하기'], moreGood: ['숙제 끝낸 뒤에만 켜기'], moreBad: ['마음먹고 참기'] }, 0.25,
              { conclude: '구체적인 목표에는 언제·얼마나·어디서가 들어 있어 지켰는지 잴 수 있어요.' }),
            { prompt: '막연한 카드 하나를 골라 언제·얼마나를 넣어 고쳐 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '막연한 목표 \'열심히 참기\'를 구체적인 목표로 고쳐 써요.' }] },
      }),
      X('activity.plan-write', {
        title: '실천 계획 쓰기', method: '일주일 실천 계획 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀로 목표·방법 두 문장 이상 쓰고 기준 1개(구체적인가)를 점검한다.', base: '목표·방법·도와줄 사람 세 문장 이상 쓰고 기준 2개(구체적인가·잴 수 있는가)를 점검한다.', challenge: '세 문장에 대비책(\'만약\'·\'어기면\'·\'다시\')을 넣고 기준 3개를 점검한다.' },
        activity: {
          title: '실천 계획 쓰고 고치기', tool: 'rubric-writing',
          teacher: '"목표·방법·도와줄 사람, 세 줄로 계획을 써 볼까요?" 기준표를 함께 소리 내어 읽은 뒤 쓰게 한다. "계획을 한 번 어기면 실패예요"라는 학생에게 "어긴 날 어떻게 다시 시작할지 적어 두면 실패가 아니라 고치는 거예요"라고 말해 준다. 내 계획 쓰기가 어려운 학생은 가상 친구 하린이의 계획으로 써도 된다고 알린다. 친구 이름·연락처는 쓰지 않게 한다.',
          task: '일주일 실천 계획을 목표·방법·도와줄 사람 순서로 쓰고, 기준표로 스스로 점검해요(하린이의 계획으로 써도 돼요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('일주일 실천 계획을 목표·방법·도와줄 사람 순서로 써요', { topic: '나(또는 가상 친구 하린이)의 일주일 실천 계획을 목표·방법·도와줄 사람 순서로 써요(이름은 쓰지 않아요).', starter: '목표: 평일 ___시부터 ___분만. 방법: ___. 도와줄 사람: ___.', crit: ['구체적이다(언제·얼마나)', '잴 수 있다(기록할 수 있다)', '어겼을 때 다시 할 방법이 있다'], must: [['만약', '어기면', '다시']], chars: [30, 220], title: '일주일 실천 계획', n: [1, 2, 3], sent: [2, 3, 3] }, 0.25),
            RUB('가상 친구의 계획 \'폰 덜 하기\'를 고쳐 써요', { topic: '가상 친구의 계획 "이번 주엔 폰 덜 하기"를 언제·얼마나가 들어가게 고쳐 써요.', starter: '평일 ___시부터 ___분만 ___.', crit: ['언제를 넣었다', '얼마나를 넣었다', '지킬 수 있는 양이다'], chars: [15, 140], title: '계획 고쳐 쓰기', n: [1, 2, 3] }, 0.2,
              { conclude: '좋은 계획은 구체적이고, 잴 수 있고, 어겼을 때 다시 할 방법이 있어요.' }),
            { prompt: '짝과 계획을 바꿔 읽고, 기준표에서 빠진 칸 하나를 알려 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '일주일 실천 계획을 써요.', columns: ['목표', '방법', '도와줄 사람'], cells: [['', '', '']] }] },
      }),
      X('activity.track', {
        title: '일주일 실천 기록판', method: '일주일 실천 기록판 만들기', tool: 'timer', minutes: 14,
        levels: { easy: '하린이(가상)의 기록 3칸(월~수)을 기록판에 옮겨 적고 점검 1줄을 표시한다.', base: '기록 7칸(월~일)을 옮겨 적고 점검 2줄을 표시한다.', challenge: '기록 7칸과 점검 3줄(그래프로 옮길 방법 정하기까지)을 하고 짝과 방법을 말한다.' },
        activity: {
          title: '기록판 만들고 옮겨 적기', tool: 'timer',
          teacher: '"계획은 기록해야 지켰는지 알 수 있어요. 하린이(가상 친구)의 일주일 기록을 기록판에 옮겨 적어 볼까요?" 칸마다 요일과 값을 소리 내어 읽게 한다. "기록은 귀찮으니 기억하면 돼요"라는 학생에게 "지난주 수요일에 몇 분 썼는지 기억나나요? 적어 두면 그래프로도 그릴 수 있어요"라고 묻는다. 내 기록판은 활동지에 만들어 집에서 이어 적고, 걷지 않는다고 알린다.',
          task: '하린이(가상)의 일주일 실천 기록을 기록판에 옮겨 적고, 집에서 이어 적을 준비를 해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '하린이(가상)의 기록 월~일 40·30·50·30·40·60·50분을 칸에 옮겨 적어요.', toolOptions: { title: '하린이의 실천 기록(가상)', unit: '분', fields: DAYS.map((d) => ({ label: d, unit: '분', step: 10 })) }, target: { records: [40, 30, 50, 30, 40, 60, 50] }, difficulty: 0.15,
              levels: { easy: { prompt: '하린이(가상)의 기록 월~수 40·30·50분을 칸에 옮겨 적어요.', toolOptions: { fields: DAYS.slice(0, 3).map((d) => ({ label: d, unit: '분', step: 10 })) }, target: { records: [40, 30, 50] } } } },
            { prompt: '집에서 기록판을 이어 적을 준비가 된 것에 표시해요.', toolOptions: { title: '이어 적을 준비' }, target: { selfCheck: ['기록할 때를 정했다', '기록판을 둘 곳을 정했다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '집에서 기록판을 이어 적을 준비가 된 것에 표시해요(한 칸).', target: { selfCheck: ['기록할 때를 정했다'] } }, challenge: { prompt: '집에서 기록판을 이어 적을 준비가 된 것에 표시해요(세 칸).', target: { selfCheck: ['기록할 때를 정했다', '기록판을 둘 곳을 정했다', '그래프로 옮길 방법을 정했다'] } } },
              conclude: '기록을 이어 적으면 일주일 뒤 그래프로 옮겨 계획을 점검할 수 있어요.' },
            { prompt: '하린이의 기록을 막대그래프로 옮긴다면 어떻게 그릴지 짝과 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 일주일 실천 기록판이에요. 집에서 이어 적어요(걷지 않아요).', columns: ['월', '화', '수', '목', '금', '토', '일'], cells: [['', '', '', '', '', '', '']] }] },
        notes: '교구 기록판은 가상 친구 하린이의 기록을 옮겨 적는 연습이다. 학생 자신의 기록은 활동지에만 적고 걷거나 발표하게 하지 않는다.',
      }),
      X('wrap.found-map', {
        title: '그래프가 알려 준 것', method: '그래프에서 알게 된 점 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지마다 카드 1장(3장)을 나눈다.', base: '가지마다 카드 2장(6장)을 나눈다.', challenge: '카드 7장(넣지 않을 카드 포함)을 나누어 가지마다 예 두 개를 채운다.' },
        wrap: {
          teacher: '"오늘 하린이의 그래프가 알려 준 것은 무엇일까요?" 가지마다 카드를 놓고 한 문장으로 말하게 한다. "많이 쓴 날은 의지가 약한 날이에요"라는 카드나 말이 나오면 "그날 무슨 일이 있었는지 찾았지요? 원인을 알면 바꿀 수 있어요"라고 짚는다.',
          exitTicket: [
            SORTX('mindmap', '그래프가 알려 준 것을 가지에 나누어요.', { topic: '그래프가 알려 준 것', slots: ['많이 쓴 날', '원인', '내가 바꿀 것'], groups: { '많이 쓴 날': ['토요일 150분', '수요일 120분'], 원인: ['비 와서 집에만 있음', '새 게임 업데이트'], '내가 바꿀 것': ['비 오는 날 놀이 정하기', '업데이트 날 시간 정하기'] }, easy: 1, traps: ['의지가 약한 날'] }),
            { type: 'choice', prompt: '그래프가 높은 날에 대해 알맞은 생각은?', options: ['그날은 의지가 약했다', '그날 있었던 일에서 원인을 찾는다', '그래프는 볼 필요가 없다'], answer: 1, difficulty: 0.15, explain: '높은 날에는 원인이 있어요. 원인을 알면 대비할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '그래프가 알려 준 것',
          items: [
            { type: 'table', prompt: '하린이(가상)의 그래프에서 알게 된 것을 써요.', columns: ['많이 쓴 날', '원인', '바꿀 것'], cells: [['', '', '']], answer: '(예) 토요일, 비 와서 집에만 있음, 비 오는 날 놀이 정하기' },
            { type: 'short', prompt: '그래프만으로 알 수 없는 것을 한 가지 써요.' },
          ],
        },
      }),
      X('wrap.goal-check', {
        title: '좋은 목표 조건 점검', method: '좋은 목표 조건 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '하린이의 목표에 든 조건 2칸(언제·얼마나)을 가려 표시한다(함정 1칸).', base: '조건 3칸(언제·얼마나·어디서)을 가려 표시하고 내 목표도 스스로 점검한다.', challenge: '내 목표 점검 4칸을 모두 보고 빠진 것을 채워 쓰며, 짝의 목표도 같은 점검표로 봐 준다.' },
        wrap: {
          teacher: '"하린이의 목표 \'평일 저녁 8시부터 30분만, 거실에서\'에는 무엇이 들어 있나요?" 점검표를 하나씩 소리 내어 읽고 표시하게 한다. 이어 내 목표를 같은 점검표로 스스로 보게 한다. "목표에 \'열심히\'가 있으면 충분해요"라는 말에는 "\'열심히\'는 얼마만큼일까요? 잴 수 있는 말로 바꿔요"라고 되묻는다. 도전 학생은 짝과 목표를 바꿔 봐 준다.',
          exitTicket: [
            CHKX('하린이의 목표 \'평일 저녁 8시부터 30분만, 거실에서\'에 든 조건만 표시해요.', '하린이 목표 점검', ['언제', '얼마나', '어디서'], ['얼마나 열심히'], { easy: 2, base: 3 }),
            SELFK('내 목표 점검', ['언제를 넣었다', '얼마나를 넣었다', '어디서를 넣었다', '기록할 방법이 있다'], '내 목표에 들어 있는 것에 스스로 표시해요.', 2, 3),
            { type: 'short', prompt: '빠진 조건을 채워 내 목표를 다시 써요.' },
          ],
        },
        worksheet: {
          title: '좋은 목표의 조건',
          items: [
            { type: 'check', prompt: '내 목표에 들어 있는 것에 표시해요.', options: ['언제', '얼마나', '어디서'] },
            { type: 'short', prompt: '빠진 것을 채워 내 목표를 다시 써요.' },
          ],
        },
      }),
      X('wrap.next-week', {
        title: '일주일 뒤 나의 모습', method: '일주일 뒤 나의 모습 이야기 고르기', tool: 'story', minutes: 6,
        levels: { easy: '두 결말을 듣고, 지킨 결말로 가는 첫 행동 카드 2장 가운데 1장을 고른다.', base: '첫 행동 카드 4장 가운데 알맞은 2장을 고르고 어긴 날 할 일을 고른다.', challenge: '카드 6장 가운데 3장을 고르고, 어긴 날 다시 시작하는 장면을 한 문장으로 지어 쓴다.' },
        wrap: {
          teacher: '"일주일 뒤 두 이야기가 있어요. 하나는 계획을 지켜 아침이 개운한 이야기, 하나는 \'내일부터\'를 되풀이하다 끝난 이야기예요." 두 결말을 소리 내어 읽어 준 뒤 지킨 결말로 가는 첫 행동을 고르게 한다. "하루 어기면 끝이에요"라는 말에는 "이야기 속 친구도 하루 어겼지만 다음 날 다시 시작했어요"라고 답해 준다.',
          exitTicket: [
            PICKX('story', '계획을 지킨 결말로 가는 첫 행동 카드만 골라 담아요.', { basket: '오늘 할 첫 행동', good: ['충전기를 거실에 두기', '기록판을 붙여 두기'], bad: ['내일부터 시작하기'], easy: 1, easyBad: 1, moreGood: ['가족에게 계획 알리기'], moreBad: ['어기면 바로 그만두기'], extraOpt: { title: '일주일 뒤 두 결말(지어낸 이야기)' } }),
            { type: 'choice', prompt: '계획을 하루 어겼어요. 어떻게 하면 좋을까요?', options: ['계획을 버린다', '다음 날 다시 시작한다', '몰래 더 쓴다'], answer: 1, difficulty: 0.15, explain: '한 번 어겨도 다시 시작하면 계획은 이어져요.' },
            { type: 'short', prompt: '어긴 다음 날 다시 시작하는 장면을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 뒤의 나',
          items: [
            { type: 'short', prompt: '내가 만들고 싶은 일주일 뒤 모습을 한 문장으로 써요.' },
            { type: 'short', prompt: '그 모습을 위해 오늘 할 첫 행동을 써요.' },
          ],
          easy: { note: '"오늘 밤 충전기를 거실에 둘래요"처럼 짧게 써도 좋아요.', items: [{ type: 'draw', prompt: '일주일 뒤 개운하게 일어난 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 알림·추천·자동 재생 설계 알아차리기 (별표 2 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 표준안 스마트폰) ========
  {
    const X = mk('design-notice', 6);
    // 가상의 한 학생이 하루에 받은 알림(개, 가상)
    const PING = [['아침', 3], ['학교에 있을 때', 12], ['방과 후', 8], ['숙제 시간', 15], ['저녁', 10], ['잠자기 전', 18]];
    const PCHART = { type: 'bar', mode: 'read', title: '시간대별 받은 알림 수(가상)', unit: '개', xLabel: '시간대', yLabel: '알림 수', data: PING, scale: 2 };
    const DEVICE = ['자동 재생', '추천 영상', '빨간 숫자 배지', '끝없는 스크롤'];
    const COUNT = [
      { text: '영상이 끝나자 \'다음 영상 5초 뒤 재생\'이 떠요. 숙제가 남았어요.', motif: 'star',
        good: ['stop', '멈춤을 누르고 화면을 끈다', '숙제를 시작했어요.', [['나', '숙제를 끝내요', 1]]],
        bad: ['wait', '그대로 둔다', '다음 영상이 시작되고 또 다음이 이어져요.', '5초 카운트다운은 멈출 틈을 줄여요. 내가 먼저 멈춰요.', [['나', '숙제가 밀려요', -1]]] },
      { text: '숙제를 마치고 다시 켰더니 추천 영상이 줄줄이 떠요.', motif: 'moon',
        good: ['set', '자동 재생을 끄고 하나만 본다', '하나를 보고 스스로 껐어요.', [['나', '정한 만큼만 봐요', 1]]],
        bad: ['more', '추천을 하나씩 눌러 본다', '또 한 시간이 지나요.', '추천 목록은 끝이 없어요. 정한 만큼만 봐요.', [['나', '잠이 늦어져요', -1]]] },
    ];
    const COUNT_R = [{ id: 'gap', text: '멈출 틈은 내가 만들어야 한다' }, { id: 'setting', text: '설정을 바꾸면 덜 휘둘린다' }, { id: 'mine', text: '추천은 내가 고른 것이다', why: '추천은 앱이 골라 보여 준 거예요.' }];
    M.push(
      X('intro.ping-face', {
        title: '빨간 숫자 9가 떴을 때', method: '알림이 울릴 때 마음 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 마음 카드 2장(궁금함·조급함)을 짚어 주고 함께 고른다.', base: '마음 카드 4장 가운데 그때 들 만한 마음을 스스로 고른다.', challenge: '왜 그런 마음이 드는지 한 문장으로 말한다.' },
        intro: {
          teacher: '"수업 준비를 하는데 폰 화면에 빨간 숫자 \'9\'가 떴어요. 어떤 마음이 들까요?" 시연 단추로 궁금함·조급함·불안함 카드가 담기는 모습을 보인다. "빨간 숫자는 그냥 숫자예요"라는 말에는 "그럼 왜 하필 빨간색일까요? 눈에 잘 띄게 만든 거예요"라고 되묻는다. 오늘은 사용 시간을 늘리도록 만든 장치를 알아차리는 법을 배운다고 밝힌다.',
          student: '화면에 빨간 숫자 \'9\'가 뜬 장면을 보고, 그때 들 만한 마음을 골라 짝에게 까닭과 함께 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '그때 드는 마음', cards: [{ id: 'curious', text: '궁금함' }, { id: 'calm', text: '편안함' }, { id: 'hurry', text: '조급함' }, { id: 'anx', text: '불안함' }], shuffle: false }, sequence: [{ pick: ['curious', 'hurry', 'anx'] }] },
          art: art('a paper desk with notebooks and a paper phone showing a bright red badge with the number nine, a paper child glancing at it', '빨간 숫자 9, 어떤 마음?', 'star', 'peach'),
        },
      }),
      X('intro.autoplay-story', {
        title: '영상 하나가 한 시간이 됐어요', method: '영상 하나가 한 시간이 된 이야기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3개를 읽어 주고 고비 장면을 함께 짚는다.', base: '장면 4개를 읽고 멈출 수 있었던 고비 장면 두 곳을 고른다.', challenge: '고른 장면에서 멈출 수 있었던 방법을 말한다.' },
        intro: {
          teacher: '"가상 친구 다온이는 영상 하나만 보려고 했어요. 그런데 한 시간이 지났어요. 어디서 멈출 수 있었을까요?" 장면을 차례로 읽은 뒤 시연 단추로 \'자동 재생\'과 \'추천 영상\' 장면이 담기는 모습을 보인다. "다온이가 의지가 약해서 그래요"라는 말에는 "다음 영상이 저절로 시작되게 만든 건 누구일까요? 다온이 탓만일까요?"라고 되묻는다.',
          student: '다온이(가상 친구)의 네 장면을 읽고, 멈출 수 있었던 고비 장면을 찾아 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '멈출 수 있었던 고비', title: '영상 하나만 볼게(지어낸 이야기)', cards: [{ id: 'one', text: '영상 하나만 보려 함' }, { id: 'auto', text: '끝나자 다음 영상 자동 재생' }, { id: 'rec', text: '옆에 뜬 추천 영상 누름' }, { id: 'hour', text: '정신 차리니 한 시간' }], shuffle: false }, sequence: [{ pick: ['auto', 'rec'] }] },
          art: art('a paper tablet with a chain of small video frames sliding one after another, and a paper clock spinning beside it', '하나만 보려 했는데…', 'moon', 'sky'),
        },
      }),
      X('intro.countdown', {
        title: '다음 영상 5초 뒤 재생', method: '다음 영상 5초 카운트다운 갈림길', tool: 'dilemma', minutes: 5,
        levels: { easy: '갈림 한 번(카운트다운 앞)만 함께 보고 결과를 읽는다.', base: '갈림 두 번(추천 목록까지)을 지나 결과를 견준다.', challenge: '근거를 고른 뒤 설정으로 막을 방법(자동 재생 끄기)을 말한다.' },
        intro: {
          teacher: '"\'다음 영상 5초 뒤 재생\'이 뜨면 어떻게 할까요? 5초는 생각할 시간이 될까요?" 시연 단추로 \'멈춤을 누른다\' → \'자동 재생을 끄고 하나만 본다\' 길과 근거가 골라지는 모습을 보인다. "자동 재생은 편하기만 해요"라는 말에는 "편해서 무엇이 줄어들었나요? 멈출 틈이 사라졌지요"라고 되묻는다.',
          student: '\'다음 영상 5초 뒤 재생\'이 떴을 때 그대로 둘지 멈출지 고르고, 그 뒤에 어떤 일이 이어질지 짝에게 말해 보아요.',
          demo: { tool: 'dilemma', options: { title: '다음 영상 5초 뒤 재생', scene: TREE(COUNT, 2, '먼저 멈추고 설정을 바꿔 내 시간을 지켰어요.'), reasons: COUNT_R }, sequence: [{ path: ['stop', 'set'], reasons: ['gap'] }] },
          art: art('a paper screen showing a big countdown circle with the number five and a paper hand reaching for a pause button', '5초 안에 멈출까?', 'sun', 'buttercup'),
        },
      }),
      X('activity.notice-graph', {
        title: '하루 알림 그래프 읽기', method: '가상 하루 알림 그래프 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '막대 끝에 값이 보이는 그래프로 알림이 가장 많은 때를 고른다.', base: '눈금을 읽어 가장 많은 때·숙제 시간 알림 수·생길 일을 답한다.', challenge: '값을 숨긴 채 읽고, 알림이 많은 때에 생길 일을 원인·결과로 고른다.' },
        activity: {
          title: '가상 알림 막대그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 가상의 한 학생이 하루에 받은 알림 수예요. 알림이 가장 많이 몰린 때는 언제인가요?" 막대 끝을 눈금에 맞춰 읽게 한다. "알림은 그냥 오는 거라 상관없어요"라는 학생에게 "숙제 시간에 15번 울리면 몇 번 흐름이 끊길까요?"라고 묻는다. 잠자기 전 알림이 많으면 잠드는 시각이 늦어진다는 원인과 결과를 잇는다.',
          task: '가상의 한 학생이 받은 시간대별 알림 그래프를 읽고, 공부 시간과 잠자기 전에 몰린 알림을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '알림이 가장 많이 온 때는 언제인가요?(가상 자료)', toolOptions: Object.assign({}, PCHART, { question: '가장 많은 때는?', choices: PING.map((d) => d[0]) }), target: { pick: 5 }, difficulty: 0.15 },
            { prompt: '숙제 시간에 온 알림은 몇 개인지 써요(가상 자료).', toolOptions: Object.assign({}, PCHART, { question: '숙제 시간 알림은 몇 개?' }), target: { value: 15 }, difficulty: 0.25 },
            { prompt: '잠자기 전에 알림이 많으면 생길 일을 골라요(가상 자료).', toolOptions: Object.assign({}, PCHART, { question: '생길 일은?', choices: ['잠드는 시각이 늦어진다', '알림이 저절로 줄어든다', '숙제가 빨리 끝난다'], why: ['', '알림은 끄기 전까지 계속 와요.', '숙제 시간 알림도 많아 흐름이 끊겨요.'] }), target: { pick: 0 }, difficulty: 0.3,
              conclude: '알림이 몰리는 때는 공부와 잠이 끊기기 쉬워요. 그 시간대 알림부터 줄여요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상)에서 알림이 두 번째로 많은 때는?', options: ['저녁', '숙제 시간', '아침'], answer: '숙제 시간' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 학생에게 자기 알림 수를 세어 발표하게 하지 않는다.',
      }),
      X('activity.notice-sort', {
        title: '꼭 필요한 알림·줄여도 되는 알림', method: '꼭 필요한 알림·줄여도 되는 알림 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '알림 카드 4장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '알림 카드 8장을 두 가지에 나누고 알림을 줄이는 방법을 고른다.', challenge: '카드 10장을 나누고, 줄여도 되는 알림마다 줄일 방법을 한 줄씩 말한다.' },
        activity: {
          title: '알림 카드 나누기', tool: 'mindmap',
          teacher: '"\'가족 전화\'와 \'게임 보상 받으세요\'는 똑같이 중요할까요?" 카드를 놓을 때마다 "이 알림이 없으면 곤란한 일이 생기나요?"라고 묻는다. "알림은 다 꺼야 해요"라는 학생에게 "가족 전화나 학교 알림장도 끄면 어떻게 될까요? 줄일 것만 골라요"라고 되묻는다.',
          task: '알림 카드를 \'꼭 필요한 알림\'과 \'줄여도 되는 알림\' 가지에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('알림 카드를 두 가지에 나누어요.', { topic: '내 폰의 알림', slots: ['꼭 필요한 알림', '줄여도 되는 알림'], groups: { '꼭 필요한 알림': ['가족 전화', '학교 알림장', '보호자 문자', '재난 안전 문자'], '줄여도 되는 알림': ['게임 보상 받으세요', '새 영상 올라옴', '친구 좋아요', '할인 쿠폰 도착'] }, extra: { '꼭 필요한 알림': ['방과 후 교실 안내'], '줄여도 되는 알림': ['추천 영상 알림'] } }, 0.2),
            PICK('줄여도 되는 알림을 줄이는 방법만 골라 담아요.', { basket: '알림 줄이는 방법', topic: '알림 줄이기', good: ['그 앱 알림 끄기', '알림 묶어 받기'], bad: ['울릴 때마다 바로 확인'], moreGood: ['공부 시간 방해 금지'], moreBad: ['알림 소리 크게'] }, 0.25,
              { conclude: '꼭 필요한 알림은 두고, 줄여도 되는 알림은 끄거나 묶어 받아요.' }),
            { prompt: '줄여도 되는 알림마다 어떻게 줄일지 모둠에서 한 줄씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알림을 나누어 써요.', columns: ['꼭 필요한 알림', '줄여도 되는 알림'], cells: [['', ''], ['', '']], answer: '(예) 가족 전화, 학교 알림장 / 게임 보상, 새 영상' }] },
      }),
      X('activity.design-match', {
        title: '설계 장치와 그 효과', method: '설계 장치와 효과 잇기', tool: 'wordcards', minutes: 14,
        levels: { easy: '장치 2개(자동 재생·빨간 숫자 배지)에 효과 카드를 잇는다.', base: '장치 4개에 효과 카드를 잇고, 내가 고른 영상·앱이 보여 준 영상을 나눈다.', challenge: '4쌍을 잇되 남는 카드를 가려 내고, 짝마다 본 적 있는 장면을 말한다(없으면 상상).' },
        activity: {
          title: '장치와 효과 짝 짓기', tool: 'wordcards',
          teacher: '"자동 재생은 우리에게 무엇을 빼앗을까요?" 짝을 지을 때마다 "이 장치 때문에 ~해져요"로 말하게 한다. "추천 영상은 내가 고른 거예요"라는 말에는 "내가 검색한 것과 앱이 골라 맨 위에 올려 둔 것은 같을까요?"라고 되묻는다. "오래 쓰는 건 다 내 탓이에요"라는 학생에게는 "오래 쓰게 만든 장치도 있어요. 알아차리면 덜 휘둘려요"라고 말해 준다.',
          task: '설계 장치 카드와 그 장치가 일으키는 효과 카드를 짝 지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('설계 장치 옆에 그 효과 카드를 놓아요.', { pairs: [['자동 재생', '멈출 틈이 없다'], ['빨간 숫자 배지', '확인하고 싶어진다'], ['추천 영상', '비슷한 것을 계속 본다'], ['끝없는 스크롤', '끝이 안 보인다']], easy: 2, extra: ['화면이 더 밝아진다'] }, 0.25),
            SORT('영상을 \'내가 고른 것\'과 \'앱이 골라 보여 준 것\'으로 나누어요.', { slots: ['내가 고른 것', '앱이 골라 보여 준 것'], mode: 'sort', groups: { '내가 고른 것': ['검색해서 찾은 영상', '선생님이 알려 준 영상'], '앱이 골라 보여 준 것': ['추천 목록 맨 위 영상', '저절로 시작된 다음 영상'] }, easy: 1, extra: { '앱이 골라 보여 준 것': ['"이 영상도 좋아요" 알림'] } }, 0.25,
              { conclude: '자동 재생·추천·배지·끝없는 스크롤은 더 오래 보게 만든 장치예요. 알아차리면 내가 고를 수 있어요.' }),
            { prompt: '짝마다 본 적 있는 장면을 하나씩 말해요(없으면 상상해서).', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장치와 그 효과를 이어 써요.', columns: ['장치', '효과'], cells: [['자동 재생', ''], ['빨간 숫자 배지', '']], answer: '멈출 틈이 없다, 확인하고 싶어진다' }] },
      }),
      X('activity.time-slip', {
        title: '계획한 시간과 실제 시간', method: '계획한 시간과 실제 시간 견주기', tool: 'clock', minutes: 14,
        levels: { easy: '정각·30분 시각(7시 30분·8시)으로 계획한 끝 시각과 끈 시각을 다룬다.', base: '몇 시 몇 분(7시 10분·7시 50분)으로 끝 시각을 만들고 읽은 뒤 넘은 시간(40분)을 구한다.', challenge: '자동 재생을 끄면 끝 시각이 어떻게 되는지(7시 40분) 맞추고 넘은 시간을 짝과 견준다.' },
        activity: {
          title: '시계로 견주는 계획과 실제', tool: 'clock',
          teacher: '"7시에 영상 하나(10분)만 보기로 했어요. 계획대로라면 몇 시에 끝나야 할까요?" 시계로 만들게 한 뒤, 자동 재생으로 계속 보다 끈 시각을 읽게 한다. "10분쯤 넘었어요"라는 느낌에는 "긴바늘이 어디까지 갔나요? 시계로 세어 봐요"라고 되묻는다. 설정을 바꾸면 끝 시각이 계획에 가까워진다는 점을 짚는다.',
          task: '계획한 끝 시각과 자동 재생 뒤 끈 시각을 시계로 만들고 읽어, 계획보다 몇 분 넘었는지 구해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '7시에 영상 하나(10분)만 보기로 했어요. 계획한 끝 시각을 시계로 만들어요.', toolOptions: { minuteStep: 5, start: { h: 7, m: 0 } }, target: { h: 7, m: 10 }, difficulty: 0.15,
              levels: { easy: { prompt: '7시에 시작해 30분만 보기로 했어요. 계획한 끝 시각을 시계로 만들어요.', target: { h: 7, m: 30 } } } },
            { prompt: '자동 재생으로 계속 보다가 끈 시각이에요. 몇 시 몇 분인지 골라요.', toolOptions: { readOnly: true, start: { h: 7, m: 50 }, choices: ['7시 50분', '10시 35분', '8시 50분'] }, target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { prompt: '자동 재생으로 계속 보다가 끈 시각이에요. 몇 시인지 골라요.', toolOptions: { start: { h: 8, m: 0 }, choices: ['8시', '12시 40분', '7시'] }, target: { pick: 0 } } } },
            { prompt: '자동 재생을 끄면 7시 10분에 멈추고 숙제를 30분 해요. 숙제가 끝나는 시각을 만들어요.', toolOptions: { minuteStep: 5, start: { h: 7, m: 10 } }, target: { h: 7, m: 40 }, difficulty: 0.3,
              levels: { easy: { prompt: '자동 재생을 끄면 7시 30분에 멈추고 숙제를 30분 해요. 숙제가 끝나는 시각을 만들어요.', toolOptions: { start: { h: 7, m: 30 } }, target: { h: 8, m: 0 } } },
              conclude: '설정으로 멈출 틈을 만들면 끝 시각이 계획에 가까워지고, 남은 시간을 할 일에 쓸 수 있어요.' },
            { prompt: '계획(7시 10분)보다 끈 시각(7시 50분)이 몇 분 넘었는지 짝과 구해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '7시 10분에 끝낼 계획이었는데 7시 50분에 껐어요. 계획보다 ___분 넘었어요.', answer: '40' }] },
      }),
      X('activity.counter-setting', {
        title: '장치에 맞서는 설정', method: '설계 장치와 맞서는 설정 짝 짓기', tool: 'kitchen', minutes: 14,
        levels: { easy: '장치 2개에 맞서는 설정 카드를 짝 짓는다.', base: '장치 4개에 맞서는 설정을 짝 짓고, 보호자와 켤 수 있는 설정 3칸을 표시한다.', challenge: '4쌍을 짓되 남는 카드를 가려 내고, 설정 4칸을 표시한 뒤 보호자와 함께 켤 설정 하나와 까닭을 말한다.' },
        activity: {
          title: '맞서는 설정 짝 짓기', tool: 'kitchen',
          teacher: '"자동 재생에 맞서려면 어떤 설정을 켜면 될까요?" 짝을 지을 때마다 그 설정이 무엇을 막는지 말하게 한다. "설정은 어려워서 못 해요"라는 학생에게 "혼자 하지 않아도 돼요. 보호자와 함께 켜면 돼요"라고 말해 준다. 설정 이름은 기기·앱마다 달라서, 교실 기기에서 실제 이름을 함께 찾아본다.',
          task: '설계 장치 칸 옆에 맞서는 설정 카드를 놓고, 보호자와 함께 켤 수 있는 설정을 표시해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('설계 장치 옆에 맞서는 설정 카드를 놓아요.', { pairs: [['자동 재생', '자동 재생 끄기'], ['빨간 숫자 배지', '알림 묶어 받기'], ['끝없는 스크롤', '시청 시간 알림 켜기'], ['추천 영상', '검색해서 보기']], easy: 2, extra: ['화면 밝기 최대로'] }, 0.25),
            CHK('보호자와 함께 켤 수 있는 맞서는 설정만 표시해요.', '함께 켤 설정', ['자동 재생 끄기', '알림 묶어 받기', '시청 시간 알림 켜기', '잠자기 전 방해 금지'], ['알림 소리 크게', '자동 재생 켜기'], { easy: 2, base: 3 }, 0.2,
              { conclude: '장치마다 맞서는 설정이 있어요. 보호자와 함께 켜면 덜 휘둘려요.' }),
            { prompt: '보호자와 함께 켤 설정 하나와 그 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보호자와 함께 켤 설정 하나와 그 까닭을 써요.' }] },
        notes: '설정 이름(자동 재생 끄기·알림 묶어 받기·방해 금지·시청 시간 알림)은 기기·앱마다 다르다. 교사가 학급 기기에서 실제 이름을 보여 준다.',
      }),
      X('activity.maker-letter', {
        title: '앱 만든 사람에게 제안', method: '앱 만든 사람에게 짧은 제안 쓰기', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀로 두 문장 이상 쓰고 기준 2개(문제·까닭)를 점검한다.', base: '세 문장 이상 쓰고 기준 3개(문제·까닭·바꿀 점)를 점검한다.', challenge: '세 문장에 어린이와 만든 사람 모두에게 좋은 점(\'모두\'·\'함께\')을 넣고 기준 4개를 점검한다.' },
        activity: {
          title: '바꿔 주세요 제안 쓰기', tool: 'rubric-writing',
          teacher: '"어린이가 쓰는 앱을 만든 사람에게 \'이 기능을 바꿔 주세요\'라고 쓴다면 무엇을 쓸까요?" 기준표를 함께 읽고 쓰게 한다. "이 앱 나빠요"처럼 쓴 학생에게 "무엇이 문제인지, 왜 그런지, 어떻게 바꾸면 좋을지를 넣으면 들어 줄 가능성이 커요"라고 말해 준다. 특정 앱·회사 이름이나 내 이름은 쓰지 않게 한다.',
          task: '어린이가 쓰는 앱을 만든 사람에게 \'이런 기능을 바꿔 주세요\' 제안을 쓰고 기준표로 점검해요(앱 이름·내 이름은 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('앱 만든 사람에게 바꿔 달라는 제안을 써요', { topic: '어린이가 쓰는 앱을 만든 사람에게 \'이런 기능을 바꿔 주세요\' 제안을 써요(앱 이름·내 이름은 쓰지 않아요).', starter: '___ 기능이 문제예요. 왜냐하면 ___. ___로 바꿔 주세요.', crit: ['문제를 썼다', '까닭을 썼다', '바꿀 점을 썼다', '모두에게 좋은 점을 썼다'], must: [['모두', '함께', '둘 다']], chars: [30, 220], title: '바꿔 주세요 제안', n: [2, 3, 4], sent: [2, 3, 3] }, 0.25),
            RUB('가상 제안 \'이 앱 나빠요. 고쳐요.\'를 고쳐 써요', { topic: '가상 친구가 쓴 제안 "이 앱 나빠요. 고쳐요."를 문제·까닭·바꿀 점이 들어가게 고쳐 써요.', starter: '___가 저절로 ___. 그래서 ___. ___를 바꿔 주세요.', crit: ['문제를 분명히 썼다', '까닭을 썼다', '바꿀 점을 썼다'], chars: [20, 160], title: '제안 고쳐 쓰기', n: [2, 3, 3] }, 0.2,
              { conclude: '좋은 제안은 문제·까닭·바꿀 점이 분명하고 모두에게 좋은 길을 말해요.' }),
            { prompt: '모둠에서 제안을 읽고 가장 설득력 있는 문장 하나를 골라 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 제안을 정리해요.', columns: ['문제', '까닭', '바꿀 점'], cells: [['', '', '']] }] },
      }),
      X('wrap.off-today', {
        title: '오늘 끌 알림 고르기', method: '오늘 끌 알림 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '줄여도 되는 알림 3칸 가운데 보호자와 끌 것에 스스로 표시한다.', base: '알림 5칸 가운데 끌 것에 표시하고 꼭 필요한 알림을 고른다.', challenge: '알림 5칸에 표시하고, 끈 뒤 달라질 점을 한 줄로 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 \'줄여도 되는 알림\' 가운데 집에 가서 보호자와 함께 끌 것은 무엇인가요? 정답은 없어요." 점검표에 스스로 표시하게 한다. "다 끌래요"라는 학생에게 "가족 전화나 학교 알림장은 남겨 둬요"라고 짚는다. 설정은 꼭 보호자와 함께 바꾸게 한다.',
          exitTicket: [
            SELFK('보호자와 함께 끌 알림', ['게임 보상 알림', '새 영상 올라옴 알림', '친구 좋아요 알림', '할인 쿠폰 알림', '추천 영상 알림'], '집에서 보호자와 함께 끌 알림에 스스로 표시해요.', 3, 5),
            { type: 'choice', prompt: '끄지 말고 남겨 둘 꼭 필요한 알림은?', options: ['가족 전화', '게임 보상 알림', '새 영상 올라옴'], answer: 0, difficulty: 0.15, explain: '가족 전화처럼 꼭 필요한 알림은 남겨 둬요.' },
            { type: 'short', prompt: '알림을 끈 뒤 달라질 점을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '오늘 끌 알림',
          items: [
            { type: 'check', prompt: '보호자와 함께 끌 알림에 표시해요.', options: ['게임 보상 알림', '새 영상 올라옴 알림', '친구 좋아요 알림'] },
            { type: 'short', prompt: '끈 뒤 달라질 점을 한 줄로 써요.' },
          ],
        },
      }),
      X('wrap.self-check', {
        title: '설계 알아차리기 자기 점검', method: '설계 알아차리기 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2줄(자동 재생 알아채기·추천은 내가 고른 것이 아님)을 표시한다.', base: '점검 칸 3줄(멈출 방법 알기까지)을 표시한다.', challenge: '점검 칸 4줄을 표시하고, 가장 자신 없는 줄과 연습 방법을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 내가 할 수 있게 된 것에 표시해 볼까요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 \'그대로 둔다\'를 고른 학생에게 "5초는 앱이 정한 시간이에요. 내가 먼저 멈춤을 눌러요"라고 말해 준다.',
          exitTicket: [
            SELF('설계 알아차리기 점검', ['자동 재생을 알아챘다', '추천은 내가 고른 게 아님을 안다', '멈출 방법을 안다', '맞서는 설정을 하나 안다']),
            { type: 'choice', prompt: '\'다음 영상 5초 뒤 재생\'이 떴어요. 멈추려면 어떻게 할까요?', options: ['그대로 둔다', '멈춤을 누르고 화면을 끈다', '소리만 줄인다'], answer: 1, difficulty: 0.15, explain: '카운트다운이 끝나기 전에 내가 먼저 멈춰요.' },
            { type: 'short', prompt: '가장 자신 없는 점검 줄과 연습할 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '설계를 알아차려요',
          items: [
            { type: 'check', prompt: '오늘 배운 대로 할 수 있는 것에 표시해요.', options: ['자동 재생 알아채기', '추천 영상 가려 보기', '멈춤 먼저 누르기'] },
            { type: 'short', prompt: '자동 재생을 끄면 좋은 점을 한 문장으로 써요.' },
          ],
          easy: { note: '\'다음 영상\'이 뜨면 먼저 멈춤을 눌러요.', items: [{ type: 'draw', prompt: '멈춤 단추를 누르는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.design-map', {
        title: '시간을 붙잡는 설계 지도', method: '알게 된 설계 장치 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '장치 가지 4개 가운데 두 가지에 맞서는 방법 카드를 1장씩 붙인다.', base: '장치 가지 4개에 맞서는 방법을 1장씩 붙인다.', challenge: '가지마다 방법 2장씩(8장)을 붙인다.' },
        wrap: {
          teacher: '"가운데 \'시간을 붙잡는 설계\'에 오늘 알게 된 장치 네 가지가 있어요. 가지마다 맞서는 방법을 붙여 볼까요?" 카드를 붙인 뒤 한 가지를 골라 집에서 해 볼 방법을 말하게 한다. "추천은 내가 고른 거예요"라는 말이 다시 나오면 "검색한 것과 앱이 골라 준 것을 견주었지요?"라고 짚는다.',
          exitTicket: [
            SORTX('mindmap', '장치 가지마다 맞서는 방법 카드를 붙여요.', { topic: '시간을 붙잡는 설계', slots: DEVICE, groups: { '자동 재생': ['자동 재생 끄기'], '추천 영상': ['검색해서 보기'], '빨간 숫자 배지': ['알림 묶어 받기'], '끝없는 스크롤': ['시청 시간 알림'] }, easy: [1, 1, 0, 0], extra: { '자동 재생': ['영상 하나 뒤 일어서기'], '추천 영상': ['추천 목록 닫기'], '빨간 숫자 배지': ['정한 때만 확인'], '끝없는 스크롤': ['타이머 맞추기'] } }),
            { type: 'choice', prompt: '"추천 영상은 내가 고른 것이다"는 맞는 말일까요?', options: ['맞다, 내가 눌렀으니까', '아니다, 앱이 골라 보여 준 것이다'], answer: 1, difficulty: 0.15, explain: '추천은 앱이 골라 앞에 보여 준 거예요. 누를지는 내가 정해요.' },
          ],
        },
        worksheet: {
          title: '시간을 붙잡는 설계',
          items: [
            { type: 'table', prompt: '장치와 맞서는 방법을 써요.', columns: ['장치', '맞서는 방법'], cells: [['자동 재생', ''], ['끝없는 스크롤', '']], answer: '(예) 자동 재생 끄기, 시청 시간 알림' },
            { type: 'short', prompt: '집에서 해 볼 방법 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 디지털 균형 실천 계획과 모둠 캠페인 (별표 2 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 교육방법 2 '프로젝트 학습') ========
  {
    const X = mk('balance-campaign', 6);
    // 가상의 6학년 한 명의 하루(%, 가상)
    const DAY = [['잠', 40], ['학교', 25], ['화면', 15], ['숙제', 8], ['운동', 6], ['가족', 6]];
    const STEPS = ['목표 정하기', '방법 고르기', '도와줄 사람 정하기', '기록하기', '일주일 뒤 점검하기'];
    M.push(
      X('intro.day-pie', {
        title: '가상 친구의 하루 원그래프', method: '가상 하루 시간 원그래프 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '조각마다 백분율이 보이는 원그래프에서 가장 큰 조각을 함께 찾는다.', base: '가장 큰 조각과 화면 조각의 백분율을 스스로 읽는다.', challenge: '화면 조각이 다른 조각(운동·가족)을 줄였는지 의견을 말한다.' },
        intro: {
          teacher: '"이 원그래프는 가상의 6학년 친구 한 명의 하루예요. 가장 큰 조각은 무엇일까요? 화면 조각은 몇 %일까요?" 시연 단추로 \'잠\'이 골라지는 모습을 보인다. "균형은 화면을 아예 안 보는 거예요"라는 말에는 "화면 조각이 0이면 숙제 자료 찾기는 어떻게 할까요? 다른 조각과 알맞게 나누는 게 균형이에요"라고 되묻는다.',
          student: '가상 친구의 하루 원그래프에서 가장 큰 조각과 화면 조각을 찾고, 화면 조각이 운동·가족 조각보다 큰지 견주어 보아요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '가상 친구의 하루(가상 자료)', unit: '%', data: DAY, question: '가장 큰 조각은?', choices: DAY.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: art('a big paper pie chart split into colorful paper slices with tiny icons for sleep, school, a screen, homework, a ball and a family', '나의 하루, 균형 잡혔나?', 'sun', 'mint'),
        },
        notes: '원그래프 수치는 수업용 가상 자료다. 권장 화면 시간처럼 말하지 않는다.',
      }),
      X('intro.slogan-pick', {
        title: '좋은 캠페인 문구 고르기', method: '좋은 캠페인 문구 고르기', tool: 'wordcards', minutes: 5,
        levels: { easy: '교사가 문구 카드 3장을 읽어 주고 겁주지 않는 문구를 함께 고른다.', base: '문구 카드 5장 가운데 행동을 알려 주는 문구를 스스로 고른다.', challenge: '고른 까닭을 기준(행동을 알려 준다·겁주지 않는다)으로 정리해 말한다.' },
        intro: {
          teacher: '"\'폰 하면 큰일 나!\'와 \'알림은 나중에, 친구는 지금\' 가운데 어떤 문구가 친구들 마음을 움직일까요?" 시연 단추로 행동을 알려 주는 문구가 담기는 모습을 보인다. "겁을 주면 효과가 커요"라는 말에는 "무서운 말을 들으면 무엇을 하면 되는지 알 수 있을까요?"라고 되묻는다. 오늘은 겁주지 않고 행동을 알려 주는 캠페인을 만든다고 밝힌다.',
          student: '문구 카드 가운데 친구들이 \'해 볼까?\' 하고 따라 할 만한 문구를 골라 짝에게 까닭과 함께 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '좋은 캠페인 문구', cards: ['폰 끄고 눈 맞추기', '폰 하면 큰일 나!', '알림은 나중에, 친구는 지금', '안 지키면 벌 받는다!', '저녁엔 폰도 쉬어요'], shuffle: false }, sequence: [{ pick: ['폰 끄고 눈 맞추기', '알림은 나중에, 친구는 지금', '저녁엔 폰도 쉬어요'] }] },
          art: art('paper children holding up colorful paper signs with friendly slogans in a school hallway', '어떤 문구가 좋을까?', 'flower', 'peach'),
        },
      }),
      X('activity.balance-budget', {
        title: '저녁 자유 시간 균형 예산', method: '저녁 자유 시간 균형 예산', tool: 'economy', minutes: 14,
        levels: { easy: '블록 5장 가운데 4장을 골라 180분을 채운다(운동 꼭).', base: '블록 6장 가운데 골라 180분을 남김없이 채우고 운동 블록을 꼭 넣는다.', challenge: '평일 180분에 더해 주말 300분 블록도 짜고, 두 날이 다른 까닭을 짝에게 말한다.' },
        activity: {
          title: '자유 시간 블록 고르기', tool: 'economy',
          teacher: '"가상 친구의 저녁 자유 시간은 180분이에요. 운동을 꼭 넣고 남김없이 채우려면 어떤 블록을 고를까요?" 블록을 고를 때마다 칠판에 더해 가며 합을 적게 한다. "화면 120분이면 운동을 빼도 돼요"라는 학생에게 "운동을 넣으면 남은 시간이 몇 분인가요? 그 안에 무엇을 넣을 수 있을까요?"라고 묻는다. 균형은 화면을 없애는 것이 아니라 다른 활동과 알맞게 나누는 것임을 짚는다. 교구가 분 단위 예산 막대를 그리지 못해 블록 카드로 고른다.',
          task: '가상 친구의 저녁 자유 시간 180분을 블록으로 남김없이 채워요. 운동 블록은 꼭 넣어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '저녁 자유 시간 180분을 남김없이 채워요. 운동 블록은 꼭 넣어요.', toolOptions: { mode: 'pick', basket: '평일 저녁(180분)', cards: ['화면 120분', '운동 40분', '독서 30분', '친구와 통화 70분', '가족 대화 50분', '화면 60분'] }, target: { pick: ['운동 40분', '독서 30분', '가족 대화 50분', '화면 60분'] }, difficulty: 0.3,
              levels: { easy: { prompt: '저녁 자유 시간 180분을 남김없이 채워요. 운동 블록은 꼭 넣어요(블록 5장).', toolOptions: { cards: ['화면 120분', '운동 40분', '독서 30분', '가족 대화 50분', '화면 60분'] } } } },
            { prompt: '주말 자유 시간 300분을 남김없이 채워요. 운동 블록은 꼭 넣어요.', toolOptions: { mode: 'pick', basket: '주말(300분)', cards: ['화면 160분', '운동 60분', '독서 40분', '친구와 놀기 70분', '가족 나들이 110분', '화면 90분'] }, target: { pick: ['운동 60분', '독서 40분', '가족 나들이 110분', '화면 90분'] }, difficulty: 0.35,
              conclude: '균형은 화면을 없애는 게 아니라, 운동·독서·가족 시간과 알맞게 나누는 거예요.' },
            { prompt: '평일과 주말 계획이 다른 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '운동 40분 + 독서 30분 + 가족 대화 50분 + 화면 60분 = ___분', answer: '180' }] },
        notes: 'economy 교구는 돈(원)만 세어 분 단위 예산 막대를 그리지 못한다. 합이 딱 맞는 블록 묶음이 하나뿐이 되게 블록 카드를 지었다(180분·300분은 가상 값). 칠판에 칸 막대를 그려 함께 칠하면 좋다.',
      }),
      X('activity.plan-steps', {
        title: '실천 계획 차례 놓기', method: '실천 계획 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '계획 단계 카드 3장을 차례대로 놓는다.', base: '단계 카드 5장을 차례대로 놓고, 단계마다 가상 친구의 내용 카드를 단다.', challenge: '\'계획 고치기\' 단계까지 6장을 놓고, 단계마다 내 내용을 한 줄씩 말한다.' },
        activity: {
          title: '계획 단계 차례와 내용', tool: 'timeline',
          teacher: '"계획은 무엇부터 정할까요? 기록은 언제 할까요?" 카드를 놓을 때마다 왜 그 자리인지 말하게 한다. "계획은 혼자만 알면 돼요"라는 학생에게 "도와줄 사람이 알면 어긴 날 어떻게 될까요?"라고 묻는다. 일주일 뒤 점검한 다음 계획을 고치는 것도 계획의 한 단계라는 점을 짚는다.',
          task: '실천 계획을 세우는 단계 카드를 차례대로 놓고, 단계마다 가상 친구의 내용을 달아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '실천 계획을 세우는 차례대로 단계 카드를 놓아요.', toolOptions: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: [STEPS[2], STEPS[0], STEPS[4], STEPS[3], STEPS[1]] }, target: { order: STEPS }, difficulty: 0.2,
              levels: {
                easy: { prompt: '실천 계획을 세우는 차례대로 단계 카드를 놓아요(카드 3장).', toolOptions: { slots: 3, cards: [STEPS[3], STEPS[0], STEPS[1]] }, target: { order: [STEPS[0], STEPS[1], STEPS[3]] } },
                challenge: { prompt: '점검 뒤 \'계획 고치기\'까지 여섯 단계를 차례대로 놓아요.', toolOptions: { slots: 6, cards: [STEPS[2], '계획 고치기', STEPS[0], STEPS[4], STEPS[3], STEPS[1]] }, target: { order: [...STEPS, '계획 고치기'] } },
              } },
            MATCH('단계마다 가상 친구 하람이의 내용 카드를 달아요.', { pairs: [['목표 정하기', '평일 8시 뒤 폰 끄기'], ['방법 고르기', '충전기를 거실에 두기'], ['도와줄 사람 정하기', '보호자께 알리기'], ['기록하기', '기록판에 매일 적기']], easy: 2, more: [['일주일 뒤 점검하기', '일요일에 그래프 그리기']] }, 0.25,
              { conclude: '계획은 목표 → 방법 → 도와줄 사람 → 기록 → 점검 차례로 세우고, 점검한 뒤 고쳐요.' }),
            { prompt: '단계마다 내 계획의 내용을 한 줄씩 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 실천 계획을 단계마다 한 줄씩 써요.', columns: ['단계', '내 내용'], cells: [['목표', ''], ['방법', ''], ['도와줄 사람', ''], ['점검하는 날', '']] }] },
      }),
      X('activity.campaign-write', {
        title: '캠페인 문구 쓰고 고치기', method: '캠페인 문구 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀로 문구 한 문장을 쓰고 기준 2개(행동을 알려 주나·겁주지 않나)를 점검한다.', base: '문구와 짧은 설명 두 문장(모두 세 문장)을 쓰고 기준 3개를 점검한다.', challenge: '기준 3개를 점검한 뒤 저학년용 문구를 하나 더 쓴다(\'함께\'·\'같이\' 넣기).' },
        activity: {
          title: '학급 캠페인 문구 쓰기', tool: 'rubric-writing',
          teacher: '"우리 반 디지털 균형 캠페인 문구를 써 볼까요? 기준표 세 줄을 먼저 함께 읽어요." 쓴 뒤 기준표로 스스로 점검하게 한다. "폰 하면 바보 돼!"처럼 겁주거나 깎아내리는 문구에는 "이 말을 들은 친구는 무엇을 하면 될까요? 할 행동을 넣어 봐요"라고 되묻는다. 친구 이름이나 사진은 넣지 않게 한다.',
          task: '학급 디지털 균형 캠페인 문구와 짧은 설명을 쓰고, 기준표로 고쳐요(친구 이름은 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('캠페인 문구와 짧은 설명 두 문장을 써요', { topic: '우리 반 디지털 균형 캠페인 문구 한 줄과 짧은 설명 두 문장을 써요(친구 이름은 쓰지 않아요).', starter: '문구: "___". 설명: ___. ___.', crit: ['할 행동을 알려 준다', '겁주거나 깎아내리지 않는다', '짧고 기억에 남는다'], chars: [20, 180], title: '캠페인 문구', n: [2, 3, 3], sent: [1, 3, 3] }, 0.25),
            RUB('저학년 동생들을 위한 문구를 하나 써요', { topic: '1·2학년 동생들이 알아듣기 쉬운 디지털 균형 문구를 한두 문장으로 써요.', starter: '"___ 하고 함께 ___ 해요."', crit: ['쉬운 낱말로 썼다', '할 행동을 알려 준다', '겁주지 않는다'], must: [['함께', '같이']], chars: [10, 120], title: '저학년용 문구', n: [2, 3, 3] }, 0.2,
              { conclude: '좋은 캠페인 문구는 겁주지 않고, 할 행동을 짧게 알려 줘요.' }),
            { prompt: '모둠에서 서로의 문구를 읽고 기준표 세 줄에 맞는 문구 하나를 골라요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 디지털 균형 캠페인 문구를 써요.' }] },
      }),
      X('activity.campaign-map', {
        title: '모둠 캠페인 계획 마인드맵', method: '모둠 캠페인 계획 마인드맵', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지마다 계획 카드 1장(3장)을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '누구에게·어디에·어떻게 가지에 카드 7장을 나누고, 겁주지 않는 방법을 고른다.', challenge: '카드 9장(넣지 않을 카드 포함)을 나누고, 가지마다 모둠 역할을 나눈다.' },
        activity: {
          title: '캠페인 계획 가지 채우기', tool: 'mindmap',
          teacher: '"우리 모둠 캠페인은 누구에게, 어디에, 어떻게 알릴까요?" 카드를 놓을 때마다 왜 그 가지인지 말하게 한다. "폰 오래 쓰는 친구 사진을 붙이면 효과가 커요"라는 말에는 "사진이 붙은 친구 마음은 어떨까요? 허락 없이 친구 모습을 쓰면 안 돼요"라고 바로잡는다. 영상을 찍지 않고도 할 수 있는 놀이·구호를 함께 떠올린다.',
          task: '가운데 \'우리 모둠 캠페인\'에 누구에게·어디에·어떻게 가지를 모둠이 함께 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('캠페인 계획 카드를 세 가지에 나누어요.', { topic: '우리 모둠 캠페인', slots: ['누구에게', '어디에', '어떻게'], groups: { 누구에게: ['우리 반 친구', '저학년 동생'], 어디에: ['복도 게시판', '급식실 앞'], 어떻게: ['포스터 붙이기', '구호 외치기', '화면 없는 놀이 알리기'] }, easy: 1, extra: { 누구에게: ['보호자'] }, traps: ['친구 사진 몰래 붙이기'] }, 0.2),
            PICK('겁주지 않고 행동을 알리는 캠페인 방법만 골라 담아요.', { basket: '좋은 캠페인 방법', good: ['하루 화면 쉬기 도전', '좋은 문구 포스터'], bad: ['무서운 그림 붙이기'], moreGood: ['쉬는 시간 놀이 알려 주기'], moreBad: ['폰 쓰는 친구 이름 적기'] }, 0.25,
              { conclude: '캠페인은 누구에게·어디에·어떻게를 정하고, 겁주지 않고 함께 할 행동을 알려요.' }),
            { prompt: '가지마다 모둠에서 누가 무엇을 맡을지 역할을 나누어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 캠페인 계획을 써요.', columns: ['누구에게', '어디에', '어떻게'], cells: [['', '', '']] }] },
      }),
      X('wrap.plan-heart', {
        title: '계획을 세운 지금 내 마음', method: '계획을 세운 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '자신감 크기 3칸에서 고른다.', base: '자신감 크기 5칸에서 고르고, 계획이 흔들릴 때 도움받을 방법을 고른다.', challenge: '자신 없는 부분과 도움받을 방법을 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"실천 계획을 세운 지금, 지킬 자신이 얼마나 있나요? 정답은 없어요." 자신감 크기를 고르게 한다. "자신 없으면 계획이 틀린 거예요"라는 말에는 "자신 없는 부분을 알면 도움을 청할 수 있어요. 그것도 계획의 일부예요"라고 답해 준다.',
          exitTicket: [
            SCALEX('실천 계획을 세운 지금 내 자신감 크기를 골라요.', '실천 계획을 세운 지금', '뿌듯함', '자신 없어요', '자신 있어요'),
            { type: 'choice', prompt: '계획이 흔들릴 때 도움받는 방법으로 알맞은 것은?', options: ['혼자 꾹 참는다', '보호자께 기록판을 보여 드린다', '계획을 버린다'], answer: 1, difficulty: 0.15, explain: '도와줄 사람에게 알리면 다시 시작하기 쉬워요.' },
            { type: 'short', prompt: '자신 없는 부분과 도움받을 방법을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '계획을 세운 내 마음',
          items: [
            { type: 'short', prompt: '내 실천 계획에서 가장 자신 있는 부분을 써요.' },
            { type: 'short', prompt: '자신 없는 부분과 도움받을 방법을 써요.' },
          ],
          easy: { note: '도와줄 사람 한 명을 먼저 떠올려요.', items: [{ type: 'draw', prompt: '계획을 지키는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.campaign-check', {
        title: '캠페인 준비 점검', method: '캠페인 준비 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '준비 점검 2칸(문구 완성·겁주는 말 없음)에 모둠이 마친 것을 표시한다.', base: '준비 점검 4칸에 마친 것을 표시하고 알맞은 문구를 고른다.', challenge: '점검 4칸을 표시하고, 남은 일과 마칠 날짜를 쓴다.' },
        wrap: {
          teacher: '"우리 모둠 캠페인 준비가 어디까지 됐나요? 마친 것만 표시해요." 모둠이 함께 점검표를 읽고 표시하게 한다. 출구 2번에서 겁주는 문구를 고른 모둠에게 "무엇을 하면 되는지 알려 주는 문구는 어느 것일까요?"라고 되묻는다. 남은 일은 날짜와 함께 정하게 한다.',
          exitTicket: [
            SELFK('캠페인 준비 점검', ['문구를 완성했다', '겁주는 말이 없다', '역할을 나눴다', '붙일 곳을 정했다'], '모둠이 마친 것에 스스로 표시해요.', 2, 4),
            { type: 'choice', prompt: '캠페인 문구로 가장 알맞은 것은?', options: ['폰 하면 큰일 나!', '저녁엔 폰도 쉬어요', '폰 쓰는 사람은 나빠요'], answer: 1, difficulty: 0.15, explain: '겁주거나 깎아내리지 않고 할 행동을 알려 주는 문구가 좋아요.' },
            { type: 'short', prompt: '남은 일과 마칠 날짜를 써요.' },
          ],
        },
        worksheet: {
          title: '캠페인 준비 점검',
          items: [
            { type: 'check', prompt: '모둠이 마친 것에 표시해요.', options: ['문구 완성', '역할 나눔', '붙일 곳 정함', '겁주는 말 없음'] },
            { type: 'table', prompt: '남은 일과 날짜를 써요.', columns: ['남은 일', '마칠 날짜'], cells: [['', '']] },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
