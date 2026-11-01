/* 창체 안전교육 약물 중독 예방 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-drug 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 약물 및 사이버 중독 예방
 *       ('약물 오남용의 위험성 및 올바른 약물 복용법 알기' · '중독성물질을 알고 안전한 활용 방법'),
 *       교육부 학교 안전교육 7대 표준안 약물 중분류(흡연·음주·고카페인 소분류) — sources/changche/research-safety.md.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길 상황(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'이라고 적는다). 장면·인물은 직접 지은 것이다(가명 한두 글자).
 *   약 이름·성분 이름·용량·카페인 양은 쓰지 않는다(성분은 '해열 성분 ㉮'처럼 기호로). 흡연·음주·약을 쓰는 방법은 묘사하지 않는다.
 *   용돈 값·잠자리 시각·연습 시간(1분)은 수업용으로 지은 값이다('가상 친구의 계획'·'우리 반 연습'으로 밝힌다).
 * 주제 6개(5학년 3 · 6학년 3), 계획 모듈 46개 전부. 추천 조합은 체계도 sequences(학년마다 5차시).
 *
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목만 있어, 아래 건강 사실 문장은 공식 안내처에서 확인해야 한다.
 *   - e-cigarette.intro.myth·activity.chain·activity.offer·wrap.self·wrap.pledge: '니코틴은 중독(의존)을 일으킨다', '전자담배에서 나오는 것은
 *     수증기만이 아니다', '향이 좋다고 덜 해로운 것이 아니다', '담배 연기는 옆 사람도 마시게 된다' — 질병관리청·보건복지부(국가금연지원센터·금연길라잡이).
 *   - e-cigarette.intro.body: '니코틴은 뇌(중독)·심장(빨리 뜀)에, 담배 연기는 폐에 영향을 준다' — 질병관리청 국가건강정보포털.
 *   - e-cigarette.activity.money: '전자담배'를 가상 인물의 지출 항목으로 둔 것(청소년 판매 금지 여부를 화면에 쓰지 않았다) — 보건복지부·여성가족부.
 *   - alcohol-refuse.intro.organ·activity.cause·activity.party: '술은 뇌에 영향을 주어 판단을 흐리고 균형을 잃게 한다', '술은 간에서 처리된다',
 *     '자라는 몸(뇌)은 술에 더 큰 영향을 받는다', '반응이 느려져 다칠 수 있다' — 질병관리청 국가건강정보포털·한국건강증진개발원.
 *   - caffeine-habit 전체·ad-analysis.activity.influencer: '카페인은 잠들기 어렵게 할 수 있다', '자주 마시면 습관(의존)이 될 수 있다',
 *     '고카페인 음료에는 표시와 어린이 주의 문구가 붙는다' — 식품의약품안전처.
 *   - ad-analysis.activity.devices·activity.rewrite: 광고의 '작은 글씨 주의 문구'·'고카페인 표시'가 실제 포장·광고에 있는지 — 식품의약품안전처·한국소비자원.
 *   - overlap-online.intro.case·intro.body·activity.compare: '감기약에 해열 성분이 들어 있을 수 있어 해열제를 또 먹으면 같은 성분을 겹쳐 먹게 된다',
 *     '약은 주로 간에서 처리되고 콩팥으로 나간다', '같은 성분을 겹쳐 먹으면 몸에 부담이 된다' — 식품의약품안전처(의약품안전나라)·대한약사회.
 *   - overlap-online.activity.online·activity.signals: '처방 없이·비밀 배송으로 파는 인터넷 약 광고는 위험 신호다', '후기가 많다고 안전하지 않다'
 *     — 식품의약품안전처(불법 의약품 온라인 판매 안내).
 *   - peer-plan.intro.map·activity.route: 도움받을 곳(보건실·상담실·담임 선생님·보호자)의 이름은 학교마다 다르다 — 교사가 우리 학교에 맞게 바꾼다.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('g5-exit-crowd', 5)('intro.exit-sign', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-drug.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-drug', band: '초5-6', topic: `saf-drug.e56.${topic}`, grades: [grade],
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
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 장면(카드 칸에 남겨야 함)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => cards[i]); const ezIds = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(장면 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ezIds } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 장면 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
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
  // 갈림길 활동 문항 셋: ① 안전한 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    const r0 = [good[0]];
    return [
      { prompt: `‘${title}’ 갈림길마다 안전한 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 안전한 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: r0, some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 안전한 끝까지 가고, 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
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

  // 정리용 기준표 글쓰기 출구 질문(RUB 와 같은 단계)
  const RUBX = (prompt, spec) => { const r = RUB(prompt, spec, 0.2); return { type: 'tool', tool: 'rubric-writing', options: r.toolOptions, prompt, target: r.target, difficulty: 0.2, levels: r.levels }; };
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 4 } = {}, d, more) => {
    const it = (list) => list.map((t, i) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
    const mixIn = (g) => { const out = g.slice(); traps.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out; };
    const ids = (g) => g.map((t) => `k${good.indexOf(t)}`);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(mixIn(good.slice(0, easy))) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸).`, toolOptions: { items: it(mixIn(good)) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: it(mixIn(good.slice(0, base))) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
  };
  // ---- 정리: 자기 점검표(timer selfCheck) — 쉬움 2칸·기본 3칸·도전 4칸 ----
  const SELF = (title, list, prompt = '오늘 해낸 것에 스스로 표시해요.') => ({
    type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { prompt: `${cut(prompt)}(두 칸).`, target: { selfCheck: list.slice(0, 2) } }, challenge: { prompt: `${cut(prompt)}(네 칸).`, target: { selfCheck: list.slice(0, 4) } } },
  });
  // 정리: 시간 띠 나누기(timeline sort) — groups = { 구간: [카드…] }, 쉬움 3장·기본 5장·도전 6장(또는 함정 카드)
  const TLX = (prompt, slots, groups, easyPick, basePick) => {
    const all = slots.flatMap((s) => groups[s].map((c) => [s, c]));
    const sel = (ids) => { const g = Object.fromEntries(slots.map((s) => [s, []])); all.filter(([, c]) => ids.includes(c)).forEach(([s, c]) => g[s].push(c)); return g; };
    const order = (ids) => all.map(([, c]) => c).filter((c) => ids.includes(c)).reverse();
    const allIds = all.map(([, c]) => c);
    return {
      type: 'tool', tool: 'timeline', options: { mode: 'sort', slots, cards: order(basePick), axis: ['전', '후'] }, prompt, target: { sort: sel(basePick) }, difficulty: 0.15,
      levels: {
        easy: { prompt: `${cut(prompt)}(카드 ${easyPick.length}장).`, toolOptions: { cards: order(easyPick) }, target: { sort: sel(easyPick) } },
        challenge: { prompt: `${cut(prompt)}(카드 ${allIds.length}장).`, toolOptions: { cards: order(allIds) }, target: { sort: sel(allIds) } },
      },
    };
  };
  // 정리: 말풍선 빈칸 채우기(story fill) — blanks = [[말풍선 글('___' 자리), 넣을 카드]…3], 빈칸 1·2·3개
  const FILLX = (prompt, who, blanks, cards, title) => {
    const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who, label }));
    const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
    return {
      type: 'tool', tool: 'story', options: { mode: 'fill', title, slots: sl.slice(0, 2), cards }, prompt, target: tg(2), difficulty: 0.15,
      levels: { easy: { prompt: `${cut(prompt)}(빈칸 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(빈칸 셋).`, toolOptions: { slots: sl }, target: tg(3) } },
    };
  };
  // 정리: 장면에 마음 카드 짝 짓기(emotion match) — 장면 1·2·3개
  const FEEL = (prompt, scenes, cards) => {
    const sl = scenes.map(([label], i) => ({ id: `s${i + 1}`, label }));
    const tg = (n) => ({ match: Object.fromEntries(scenes.slice(0, n).map(([, ok], i) => [`s${i + 1}`, ok])) });
    return {
      type: 'tool', tool: 'emotion', options: { cards, slots: sl.slice(0, 2) }, prompt, target: tg(2), difficulty: 0.15,
      levels: { easy: { prompt: `${cut(prompt)}(장면 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(장면 셋).`, toolOptions: { slots: sl }, target: tg(3) } },
    };
  };

  // ---- 이 파일에서 더 쓰는 판 ----
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
  const PICK = (prompt, { basket, topic, good, bad, easy = 2, easyBad = 1, moreGood = [], moreBad = [] }, d, add) => {
    const mix = (g, b) => { const out = []; const n = Math.max(g.length, b.length); for (let i = 0; i < n; i++) { if (b[i]) out.push(b[i]); if (g[i]) out.push(g[i]); } return out; };
    const opt = (g, b) => Object.assign({ mode: 'pick', basket, cards: mix(g, b) }, topic ? { topic } : {});
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${easy + easyBad}장).`, toolOptions: opt(good.slice(0, easy), bad.slice(0, easyBad)), target: { pick: good.slice(0, easy) } } };
    if (moreGood.length || moreBad.length) { const g = [...good, ...moreGood]; const b = [...bad, ...moreBad]; lv.challenge = { prompt: `${cut(prompt)}(카드 ${g.length + b.length}장).`, toolOptions: opt(g, b), target: { pick: g } }; }
    return Object.assign({ prompt, toolOptions: opt(good, bad), target: { pick: good }, difficulty: d, levels: lv }, add);
  };
  // 정리용 골라 담기 출구 질문
  const PICKX = (tool, prompt, spec) => { const r = PICK(prompt, spec, 0.15); return { type: 'tool', tool, options: r.toolOptions, prompt, target: r.target, difficulty: 0.15, levels: r.levels }; };
  // 정리용 점검표(kitchen checklist) 출구 질문 — 고를 질문 good, 함정 traps (CHK 와 같은 단계)
  const CHKX = (prompt, title, good, traps, n) => { const r = CHK(prompt, title, good, traps, n, 0.15); return { type: 'tool', tool: 'kitchen', options: r.toolOptions, prompt, target: r.target, difficulty: 0.15, levels: r.levels }; };
  // 정리: 스스로 점검표(kitchen checklist selfCheck) — 쉬움 easy칸, 기본 전부
  const SELFK = (title, list, prompt, easy = 3) => {
    const it = (l) => l.map((t, i) => ({ id: `c${i + 1}`, text: t }));
    return { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items: it(list) }, prompt, target: { selfCheck: true }, difficulty: 0.1,
      levels: { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(list.slice(0, easy)) }, target: { selfCheck: true } } } };
  };
  // 정리: 마음 크기(emotion scale) — 정답 없음
  const SCALEX = (prompt, situation, feeling, top = '아주 많이') => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: top } }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  // 활동: 말풍선 빈칸(story fill) — blanks = [[말풍선 글('___' 자리), 넣을 카드]…], 쉬움 빈칸 easy개, 도전 전부 + 함정 카드
  const FILL = (prompt, { who, title, blanks, traps = [], easy = 1, base = 2 }, d, add) => {
    const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who, label }));
    const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
    const cards = (n, tr) => [...tr, ...blanks.slice(0, n).map(([, c]) => c).reverse()];
    const lv = { easy: { prompt: `${cut(prompt)}(빈칸 ${easy}개).`, toolOptions: { slots: sl.slice(0, easy), cards: cards(easy, traps.slice(0, 1)) }, target: tg(easy) } };
    if (blanks.length > base) lv.challenge = { prompt: `${cut(prompt)}(빈칸 ${blanks.length}개).`, toolOptions: { slots: sl, cards: cards(blanks.length, traps) }, target: tg(blanks.length) };
    return Object.assign({ prompt, toolOptions: { mode: 'fill', title, slots: sl.slice(0, base), cards: cards(base, traps.slice(0, 1)) }, target: tg(base), difficulty: d, levels: lv }, add);
  };
  // 몸 판(body find) 기관 목록
  const ORG = ['뇌', '폐', '심장', '위', '간', '콩팥'];

  // ======== 5학년 · 담배·전자담배, 잘못된 믿음 가려내기 (별표 2 초등 약물 '중독성물질을 알고 안전한 활용 방법' + 표준안 흡연) ========
  {
    const X = mk('e-cigarette', 5);
    M.push(
      X('intro.myth', {
        title: '사실일까, 잘못된 믿음일까', method: '사실/잘못된 믿음 빠르게 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 카드 3장을 소리 내어 읽어 주고 함께 사실·잘못된 믿음 칸에 나눈다.', base: '카드 5장을 스스로 사실·잘못된 믿음 칸에 나눈다.', challenge: '카드 5장을 나눈 뒤 잘못된 믿음 하나를 골라 왜 틀렸는지 근거를 한 문장으로 말한다.' },
        intro: {
          teacher: '"전자담배는 수증기라서 괜찮다는 말, 들어 본 적 있나요?" 시연 단추로 \'니코틴은 중독을 일으킨다\'·\'연기는 옆 사람도 마신다\'는 사실 칸으로, \'전자담배는 수증기일 뿐\'·\'향이 좋으면 덜 해롭다\'·\'한 번은 중독 안 된다\'는 잘못된 믿음 칸으로 가는 모습을 보인다. "향이 달콤하면 몸에도 순하겠죠?"라는 말이 나오면 "향은 냄새일 뿐이에요. 안에 든 니코틴이 달라질까요?"라고 되묻는다. 오늘은 들은 말을 사실과 가려내고, 호기심이 중독으로 이어지는 과정을 따라가 본다고 밝힌다.',
          student: '담배나 전자담배에 대해 들어 본 말을 하나 떠올리고, 그 말이 사실일지 짝과 짐작해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '담배·전자담배 이야기', slots: ['사실', '잘못된 믿음'], cards: ['전자담배는 수증기일 뿐', '니코틴은 중독을 일으킨다', '향이 좋으면 덜 해롭다', '연기는 옆 사람도 마신다', '한 번은 중독 안 된다'] }, sequence: [{ sort: { 사실: ['니코틴은 중독을 일으킨다', '연기는 옆 사람도 마신다'], '잘못된 믿음': ['전자담배는 수증기일 뿐', '향이 좋으면 덜 해롭다', '한 번은 중독 안 된다'] } }] },
          art: art('two paper baskets labeled fact and myth, with paper speech-bubble cards floating between them and a magnifying glass', '사실일까, 잘못된 믿음일까?', 'cloud', 'sky'),
        },
        notes: '실제 담배·전자담배 그림이나 기기를 교실에 보이지 않는다. 카드 문장의 건강 사실은 파일 머리 \'사람 확인\' 목록을 본다.',
      }),
      X('intro.body', {
        title: '니코틴이 영향을 주는 곳', method: '영향 받는 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 뇌 한 곳을 짚어 주고 함께 찾는다.', base: '뇌·심장·폐 세 곳을 스스로 찾아 누른다.', challenge: '세 곳을 찾은 뒤 기관마다 생길 수 있는 변화를 한 가지씩 말한다.' },
        intro: {
          teacher: '"담배 속 니코틴은 몸 어디에 영향을 줄까요?" 시연 단추로 종이 몸의 뇌 → 심장 → 폐가 차례로 골라지는 모습을 보인다. 뇌는 니코틴을 또 찾게 만들고, 심장은 빨리 뛰게 되고, 폐는 연기를 들이마신다고 짚는다. "피우는 사람만 영향을 받아요"라는 말에는 "옆에 있는 사람도 그 연기를 마신다면요?"라고 되묻는다.',
          student: '종이 몸에서 뇌·심장·폐를 찾아보고, 이 기관들이 평소에 하는 일을 하나씩 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ORG, names: true }, sequence: [{ sel: '뇌' }, { sel: '심장' }, { sel: '폐' }] },
          art: art('a paper body figure with small paper stars on the brain, the heart and the lungs, and a faint grey cloud drifting nearby', '어디에 영향을 줄까?', 'star', 'rose'),
        },
      }),
      X('activity.chain', {
        title: '호기심에서 중독까지', method: '원인과 결과 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(호기심에 한 번 → 없으면 불편함 → 끊기 어려움)을 차례로 놓는다.', base: '카드 4장을 차례로 놓고, 멈추기 쉬운 때와 어려운 때를 나눈다.', challenge: '틀린 카드를 빼고 4장을 놓은 뒤, 멈추기 쉬운 때마다 할 수 있는 행동을 모둠에서 말한다.' },
        activity: {
          title: '호기심이 중독으로 이어지는 차례', tool: 'timeline',
          teacher: '"처음부터 끊기 어려운 사람이 있을까요? 어디서부터 어려워졌을까요?" 카드를 놓을 때마다 앞 카드가 원인, 뒤 카드가 결과라는 말로 이어 읽게 한다. "한 번은 괜찮고, 싫으면 그때 끊으면 돼요"라는 학생에게 "없으면 불편해지는 칸에 오면 끊기가 쉬울까요? 가장 쉬운 때는 언제일까요?"라고 묻고, 처음 권유받은 순간이 멈추기 가장 쉬운 때라는 점을 짚는다.',
          task: '호기심에서 끊기 어려워지기까지 카드를 차례로 놓고, 언제 멈추기 쉬운지 나누어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('호기심에서 끊기 어려워지기까지 차례대로 놓아요.', ['호기심에 한 번', '친구와 또 한 번', '없으면 불편함', '끊기 어려움'], { mode: 'order', easy: [0, 2, 3], trap: '저절로 싫어짐' }, 0.2),
            SORT('언제 멈추기 쉬운지 카드를 나누어요.', { slots: ['멈추기 쉬운 때', '멈추기 어려운 때'], mode: 'sort', groups: { '멈추기 쉬운 때': ['처음 권유받은 순간', '호기심이 들 때'], '멈추기 어려운 때': ['매일 찾게 될 때', '없으면 짜증 날 때'] }, easy: 1, extra: { '멈추기 쉬운 때': ['친구가 또 권할 때'], '멈추기 어려운 때': ['혼자서도 찾을 때'] } }, 0.25),
            { prompt: '모둠에서 멈추기 쉬운 때에 할 수 있는 행동을 하나씩 말해요.', free: true, talk: true, conclude: '처음 권유받은 순간이 멈추기 가장 쉬운 때예요. 그때 분명히 거절해요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '니코틴은 ___을 일으켜 끊기 어렵게 만들어요.', answer: '중독' }] },
      }),
      X('activity.offer', {
        title: '"향만 맡아 봐" 갈림길', method: '갈림길 결과 추적', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(향을 맡을지 거절할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(놀림을 들을 때 자리 피하기)을 지나 근거를 고른다.', challenge: '갈림 3번(어른께 알리기)까지 지나 근거를 모두 고르고, 다른 길을 끝까지 가 본 결과와 견주어 말한다.' },
        activity: {
          title: '갈림길: 향만 맡아 보래요', tool: 'dilemma',
          teacher: '"향만 맡는 건 피우는 게 아니니까 괜찮을까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "형이 놀리면 한 번은 해 줘야 해요"라는 학생에게 "한 번 해 주면 다음 권유는 거절하기 쉬워질까요, 어려워질까요?"라고 묻는다. 거절한 뒤 자리를 떠나고, 또 권할 것 같으면 믿을 어른께 알리는 것이 나를 지키는 차례라는 점을 짚는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '향만 맡아 보래요',
            steps: [
              { text: '놀이터에서 아는 형이 "향만 맡아 봐" 하며 전자담배를 내밀어요.', motif: 'cloud',
                good: ['no', '"안 할래"라고 분명히 말한다', '형이 잠깐 머쓱해해요.', [['나', '몸을 지켜요', 1]]],
                bad: ['try', '향만 맡아 본다', '달콤한 향에 호기심이 더 커져요.', '향만 맡는 것도 시작이 될 수 있어요.', [['나', '또 해 보고 싶어져요', -1]]] },
              { text: '형이 "겁쟁이네, 다들 해"라고 놀려요.', motif: 'star',
                good: ['leave', '친구들에게 가자며 자리를 떠난다', '놀림을 더 듣지 않고 친구들과 놀아요.', [['나', '마음이 편해져요', 1]]],
                bad: ['prove', '겁쟁이가 아니라며 한 번 해 본다', '형이 다음에도 또 권해요.', '놀림 때문에 하면 다음 권유도 거절하기 어려워요.', [['나', '권유가 계속돼요', -1]]] },
              { text: '다음 날에도 형이 또 권할 것 같아 걱정돼요.', motif: 'house',
                good: ['tell', '보호자나 선생님께 이야기한다', '어른이 함께 방법을 찾아 줘요.', [['나', '혼자 고민하지 않아요', 1]]],
                bad: ['hide', '혼자 고민하며 숨긴다', '걱정이 커지고 또 권유를 받아요.', '혼자 견디기보다 믿을 어른께 알려요.', [['나', '걱정이 커져요', -1]]] },
            ],
            ending: '분명히 거절하고, 자리를 피하고, 어른께 알려서 내 몸과 마음을 지켰어요.',
            reasons: [{ id: 'nic', text: '니코틴은 중독을 일으킨다' }, { id: 'leave', text: '자리를 피하면 권유가 멈춘다' }, { id: 'smell', text: '향만 맡는 건 괜찮다', why: '향을 맡는 것도 호기심의 시작이 될 수 있어요.' }, { id: 'all', text: '다들 하니까 해도 된다', why: '여럿이 한다고 몸에 덜 해롭지 않아요.' }],
            good: ['nic', 'leave'],
            talk: '모둠에서 "놀림을 들어도 거절을 지키려면 어떻게 할까?"를 이야기해요.',
            conclude: '권유를 받으면 분명히 거절하고 자리를 피하고, 또 권하면 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '형이 "향만 맡아 봐"라고 해요. 알맞은 행동은?', options: ['향만 맡아 본다', '"안 할래"라고 말하고 자리를 떠난다', '다음에 하겠다고 한다'], answer: '"안 할래"라고 말하고 자리를 떠난다' }] },
      }),
      X('activity.money', {
        title: '도윤이의 용돈 다시 짜기', method: '용돈 예산 다시 짜기', tool: 'economy', minutes: 14,
        levels: { easy: '물건 3개 가운데 건강을 해치는 지출 1개를 빼고 고른다.', base: '물건 5개 가운데 건강을 해치는 지출 2개를 빼고 예산 안에서 고른다.', challenge: '물건 7개 가운데 해치는 지출을 빼고, 꼭 사야 할 공책을 지키며 고른다.' },
        activity: {
          title: '건강을 해치는 지출 빼기', tool: 'economy',
          teacher: '"가상 친구 도윤이의 한 달 용돈 계획이에요. 이 가운데 몸을 해치는 데 쓰는 돈은 무엇일까요?" 예산 막대가 어떻게 줄고 늘어나는지 보게 한다. "용돈은 내 돈이니까 무엇을 사든 괜찮아요"라는 학생에게 "내 돈으로 내 몸을 해치는 물건을 산다면, 그 돈은 나에게 도움이 됐을까요?"라고 묻는다. 뺀 돈으로 무엇을 할 수 있는지 모둠에서 말하게 한다.',
          task: '예산 막대를 넘지 않게, 건강을 해치는 지출은 빼고 쓸 곳을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '1만 5천 원 안에서 8천 원어치 넘게, 건강을 해치는 지출은 빼고 골라요.', toolOptions: { mode: 'budget', budget: 15000, items: [{ id: 'ecig', text: '전자담배(형이 부탁)', price: 9000 }, { id: 'book', text: '읽고 싶은 책', price: 8000 }, { id: 'energy', text: '에너지 음료 묶음', price: 4000 }, { id: 'shuttle', text: '배드민턴 공', price: 3000 }, { id: 'fruit', text: '과일 간식', price: 2000 }], ask: '도윤이의 한 달 용돈' }, target: { budget: { min: 8000, not: ['ecig', 'energy'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '1만 5천 원 안에서 8천 원어치 넘게, 건강을 해치는 지출은 빼고 골라요.', toolOptions: { items: [{ id: 'ecig', text: '전자담배(형이 부탁)', price: 9000 }, { id: 'book', text: '읽고 싶은 책', price: 8000 }, { id: 'shuttle', text: '배드민턴 공', price: 3000 }] }, target: { budget: { min: 8000, not: ['ecig'] } } },
                challenge: { prompt: '1만 5천 원 안에서 1만 원어치 넘게, 해치는 지출은 빼고 공책은 꼭 넣어요.', toolOptions: { items: [{ id: 'ecig', text: '전자담배(형이 부탁)', price: 9000 }, { id: 'book', text: '읽고 싶은 책', price: 8000 }, { id: 'energy', text: '에너지 음료 묶음', price: 4000 }, { id: 'note', text: '학교 공책', price: 2000 }, { id: 'shuttle', text: '배드민턴 공', price: 3000 }, { id: 'gift', text: '동생 생일 선물', price: 4000 }, { id: 'fruit', text: '과일 간식', price: 2000 }] }, target: { budget: { min: 10000, not: ['ecig', 'energy'], must: ['note'] } } },
              } },
            { prompt: '아낀 9천 원으로 6천 원어치 넘게, 몸에 도움 되는 것을 골라요.', toolOptions: { mode: 'budget', budget: 9000, items: [{ id: 'rope', text: '줄넘기', price: 4000 }, { id: 'pencil', text: '색연필', price: 5000 }, { id: 'can', text: '에너지 음료 두 캔', price: 4000 }, { id: 'game', text: '보드게임 빌리기', price: 3000 }], ask: '아낀 돈 쓰기' }, target: { budget: { min: 6000, not: ['can'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '아낀 9천 원으로 4천 원어치 넘게, 몸에 도움 되는 것을 골라요.', toolOptions: { items: [{ id: 'rope', text: '줄넘기', price: 4000 }, { id: 'can', text: '에너지 음료 두 캔', price: 4000 }, { id: 'game', text: '보드게임 빌리기', price: 3000 }] }, target: { budget: { min: 4000, not: ['can'] } } } },
              conclude: '건강을 해치는 데 쓰던 돈을 빼면 나에게 도움 되는 곳에 쓸 수 있어요.' },
            { prompt: '모둠에서 뺀 지출과 그 돈으로 하고 싶은 일을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '건강을 해치는 지출을 빼고 아낀 돈으로 하고 싶은 일 하나를 써요.' }] },
        notes: '도윤이는 지은 인물이고 물건 값은 수업용으로 지은 값이다(실제 값이 아니다). 학생 자신의 용돈 액수는 묻지 않는다.',
      }),
      X('activity.group', {
        title: '효과 있는 거절 말 고르기', method: '모둠 거절 말 고르기', tool: 'wordcards', minutes: 13,
        levels: { easy: '거절 말 카드 5장 가운데 효과 있는 말 3장을 고른다.', base: '카드 8장 가운데 효과 있는 말 3장을 고르고, 권유 말마다 맞는 대답을 잇는다.', challenge: '카드 8장을 고르고 짝을 이은 뒤, 우리 모둠 거절 말을 새로 만들어 말한다.' },
        activity: {
          title: '모둠이 고르는 거절 말', tool: 'wordcards',
          teacher: '"어떤 거절 말이 권유를 멈추게 할까요?" 모둠이 카드를 하나씩 소리 내어 읽고 고르게 한다. "나중에 해 볼게"를 고르는 학생에게 "그 말을 들은 형은 다음에 또 권할까요, 멈출까요?"라고 묻는다. "너 바보야?"처럼 상대를 깎아내리는 말은 다툼을 키워 오히려 자리를 피하기 어렵게 한다는 점을 짚는다.',
          task: '거절 말 카드를 읽고 효과 있는 말을 골라 담은 뒤, 권유 말에 맞는 대답을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            PICK('권유를 멈추게 하는 거절 말만 골라 담아요.', { basket: '효과 있는 거절 말', good: ['싫어, 나는 안 해', '내 몸이 소중해서 안 해', '대신 공 차러 가자'], bad: ['나중에 해 볼게', '음… 글쎄', '너 바보야?', '한 번만 해 볼까', '말없이 웃기'], easy: 3, easyBad: 2 }, 0.2),
            MATCH('권유하는 말마다 알맞은 대답을 이어요.', { topic: '이렇게 대답해요', pairs: [['"한 번만 해 봐"', '한 번도 안 할 거야'], ['"겁쟁이네"', '놀려도 내 생각은 같아'], ['"우리끼리 비밀이야"', '걱정돼서 어른께 말할래']], easy: 2, extra: ['그럼 조금만 할게'] }, 0.25, { conclude: '짧고 분명한 말, 까닭을 담은 말, 다른 놀이를 권하는 말이 효과 있어요.' }),
            { prompt: '우리 모둠 거절 말을 새로 만들어 함께 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '권유를 받을 때 쓰고 싶은 거절 말 하나를 써요.' }] },
      }),
      X('wrap.self', {
        title: '오늘 배운 것 스스로 점검', method: '자기 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 3개(믿음 가려내기·거절 말·자리 피하기)에 표시한다.', base: '점검 칸 5개에 표시한다.', challenge: '5개에 표시한 뒤 덜 자신 있는 칸을 골라 채울 방법을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 자신 있게 할 수 있는 것은 무엇인가요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 "향이 좋은 전자담배는 괜찮아"를 고른 학생에게 "향은 냄새일 뿐, 안에 든 니코틴은 그대로예요"라고 말해 준다. 덜 자신 있는 칸은 다음 시간에 짝과 다시 연습하자고 한다.',
          exitTicket: [
            SELFK('담배·전자담배 점검', ['잘못된 믿음을 가려낸다', '거절 말 하나를 안다', '권유받으면 자리를 피한다', '도움 청할 어른을 안다', '처음이 멈추기 쉬운 때임을 안다'], '오늘 해낸 것에 스스로 표시해요.'),
            { type: 'choice', prompt: '친구가 "전자담배는 수증기라 괜찮아"라고 해요. 알맞은 대답은?', options: ['맞아, 수증기라 괜찮아', '수증기만 나오는 게 아니야', '향이 좋으면 괜찮아'], answer: 1, difficulty: 0.2, explain: '전자담배에서 나오는 것은 수증기만이 아니고 니코틴도 들어 있어요.' },
            { type: 'short', prompt: '덜 자신 있는 칸 하나를 골라, 그것을 채우려고 할 일을 써요.' },
          ],
        },
        worksheet: {
          title: '잘못된 믿음을 가려내요',
          items: [
            { type: 'table', prompt: '사실이면 ○, 잘못된 믿음이면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['니코틴은 중독을 일으킨다', ''], ['전자담배는 수증기일 뿐이다', ''], ['한 번은 중독되지 않는다', '']], answer: '○, ×, ×' },
            { type: 'short', prompt: '권유를 받으면 어떻게 할지 한 문장으로 써요.' },
          ],
          easy: { note: '"안 할래"라고 말하고 자리를 피해요.', items: [{ type: 'draw', prompt: '권유를 거절하고 친구들에게 가는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.pledge', {
        title: '"내가 권유받는다면" 다짐', method: '다짐 글과 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 써서 쓰고 기준 2개(분명한 거절·까닭)로 점검한다.', base: '두 문장으로 쓰고 기준 3개(분명한 거절·까닭·대안)로 점검한다.', challenge: '기준 3개를 모두 넣어 쓰고 한 군데를 고쳐 쓴다.' },
        wrap: {
          teacher: '"권유를 받는 순간 바로 떠오를 다짐을 두 문장으로 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "그냥 안 한다고 하면 돼요"라고만 쓴 학생에게 "왜 안 하는지, 그 대신 무엇을 할지도 넣으면 다음에 더 쉽게 말할 수 있어요"라고 말해 준다. 실제 이름이나 연락처는 쓰지 않게 한다.',
          exitTicket: [
            RUBX('"내가 권유받는다면" 다짐을 두 문장으로 써요.', { topic: '담배나 전자담배를 권유받는다면 나는 어떻게 할지 두 문장으로 써요.', starter: '나는 권유받으면 "___"라고 말하겠다. 왜냐하면 ___ 때문이다.', crit: ['분명하게 거절하는 말을 썼다', '거절하는 까닭을 썼다', '대신할 행동을 썼다'], must: [['대신', '말고', '하자']], chars: [30, 160], title: '나의 다짐' }),
            { type: 'choice', prompt: '다짐 글에 넣으면 좋은 대신할 행동은?', options: ['나중에 해 보기', '친구들과 공 차러 가기', '향만 맡아 보기'], answer: 1, difficulty: 0.15, explain: '권유를 멈추고 다른 즐거운 일을 하는 것이 대신할 행동이에요.' },
          ],
        },
        worksheet: {
          title: '나의 다짐',
          items: [
            { type: 'short', prompt: '"내가 권유받는다면" 다짐을 두 문장으로 써요.' },
            { type: 'check', prompt: '내 다짐에 들어간 것에 표시해요.', options: ['분명한 거절', '거절하는 까닭', '대신할 행동'] },
          ],
          easy: { note: '"싫어, 나는 안 해. 대신 ___ 하자."로 써도 좋아요.', items: [{ type: 'short', prompt: '"싫어, 나는 안 해. 대신 ___ 하자."의 빈칸을 채워 써요.' }] },
        },
      }),
    );
  }

  // ======== 5학년 · 술 권유를 거절해요 (별표 2 초등 약물 '중독성물질을 알고 안전한 활용 방법' + 표준안 음주) ========
  {
    const X = mk('alcohol-refuse', 5);
    M.push(
      X('intro.scene', {
        title: '명절 모임에서 멈출 장면', method: '가족 모임 장면 차례', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 3장을 읽어 주며 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 어디서 멈추면 좋을지 고른다.', challenge: '4장을 놓은 뒤 멈출 장면에서 할 말을 한 문장으로 붙여 말한다.' },
        intro: {
          teacher: '"명절에 친척 어른이 \'한 잔쯤 괜찮아\' 하며 잔을 건네면 어떻게 할까요?" 시연 단추로 \'가족이 모여요\' → \'"한 잔쯤 괜찮아"\' → \'잔이 내 앞에 놓여요\' → \'"저는 주스 마실게요"\' 장면이 차례로 놓이는 모습을 보인다. "어른이 주시면 받는 게 예의예요"라는 말이 나오면 "자라는 몸을 지키는 것도 어른이 바라는 일이에요. 예의 바르게 거절하는 말이 있을까요?"라고 되묻는다. 오늘은 술이 몸에 주는 영향과 거절하는 차례를 배운다고 밝힌다.',
          student: '어른이 권하는 것을 예의 바르게 거절해 본 적이 있다면, 그때 한 말을 떠올려 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: [{ id: 'cup', text: '잔이 내 앞에 놓여요', motif: 'star' }, { id: 'meet', text: '명절에 가족이 모여요', motif: 'house' }, { id: 'no', text: '"저는 주스 마실게요"', motif: 'flower' }, { id: 'say', text: '"한 잔쯤 괜찮아"', motif: 'cloud' }], shuffle: false }, sequence: [{ order: ['meet', 'say', 'cup', 'no'] }] },
          art: art('a paper family gathered around a low holiday table, a paper child politely raising a hand beside a glass of juice', '한 잔쯤 괜찮아?', 'house', 'peach'),
        },
        notes: '가족의 음주 습관을 묻지 않는다. 장면은 지은 것이며, 어른을 탓하지 않고 내 몸을 지키는 말에 초점을 둔다.',
      }),
      X('intro.organ', {
        title: '술이 닿는 뇌와 간', method: '기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 뇌 한 곳을 짚어 주고 함께 찾는다.', base: '뇌와 간 두 곳을 스스로 찾아 누른다.', challenge: '두 곳을 찾은 뒤 자라는 몸에 술이 더 해로운 까닭을 말한다.' },
        intro: {
          teacher: '"술을 마시면 몸 어디가 영향을 받을까요?" 시연 단추로 종이 몸의 뇌와 간이 차례로 골라지는 모습을 보인다. 뇌는 판단과 몸의 균형을 맡고, 간은 몸에 들어온 술을 처리한다고 짚는다. "어른은 마시니까 어린이도 조금은 괜찮아요"라는 말에는 "뇌가 아직 자라는 중이라면 같은 양이라도 영향이 클까요, 작을까요?"라고 되묻는다.',
          student: '종이 몸에서 뇌와 간을 찾아보고, 두 기관이 하는 일을 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ORG, names: true }, sequence: [{ sel: '뇌' }, { sel: '간' }] },
          art: art('a paper body figure with a glowing paper brain and a paper liver marked by small stars, a juice glass beside it', '술은 어디에 닿을까?', 'star', 'lilac'),
        },
      }),
      X('activity.cause', {
        title: '술을 마시면 이어지는 일', method: '원인과 결과 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '원인 카드 2개에 결과 카드를 잇는다.', base: '원인 4개에 결과를 잇고, 원인·결과 카드를 나눈다.', challenge: '결과가 또 다른 결과로 이어지는 짝 하나를 더해 잇고, 넣지 않을 카드를 가려낸다.' },
        activity: {
          title: '원인과 결과를 이어요', tool: 'mindmap',
          teacher: '"술을 마시면 기분만 좋아질까요? 그다음에는 어떤 일이 이어질까요?" 짝을 이을 때마다 \'~하면 ~할 수 있다\' 문장으로 읽게 한다. "술은 기분을 좋게만 해요"라는 학생에게 "판단이 흐려진 채 찻길을 건너면 어떻게 될까요?"라고 묻는다. 결과가 또 다른 결과의 원인이 된다는 점을 줄을 따라가며 짚는다.',
          task: '술을 마셨을 때의 원인 카드와 결과 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('술을 마셨을 때 원인과 이어지는 결과를 이어요.', { topic: '술을 마시면', pairs: [['판단이 흐려지면', '위험한 행동을 하기 쉬움'], ['균형을 잃으면', '넘어져 다칠 수 있음'], ['반응이 느려지면', '차를 피하기 어려움'], ['자라는 뇌가 영향받으면', '배우는 힘이 흔들림']], easy: 2, more: [['넘어져 다치면', '병원에 가야 함']], extra: ['키가 쑥 자람'] }, 0.25),
            SORT('카드를 원인과 결과로 나누어요.', { topic: '술과 몸', slots: ['원인', '결과'], groups: { 원인: ['"한 잔쯤" 권유를 받음', '술을 마심'], 결과: ['판단이 흐려짐', '균형을 잃음'] }, easy: 1, extra: { 결과: ['다칠 수 있음'] }, traps: ['힘이 세짐'] }, 0.2, { conclude: '술은 판단과 균형을 흐려 다칠 수 있게 하고, 자라는 몸에는 더 해로워요.' }),
            { prompt: '모둠에서 결과가 또 다른 결과로 이어지는 예를 하나 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '술을 마시면 판단이 흐려져요. 그 결과로 알맞은 것은?', options: ['위험한 행동을 하기 쉽다', '공부가 더 잘된다', '키가 빨리 큰다'], answer: '위험한 행동을 하기 쉽다' }] },
      }),
      X('activity.skills', {
        title: '거절 기술 네 단계 연습', method: '거절 기술 순서와 짝 연습', tool: 'timer', minutes: 13,
        levels: { easy: '거절 기술 3단계(분명히 말하기 → 까닭 말하기 → 자리 피하기)를 차례로 놓는다.', base: '4단계를 차례로 놓고, 짝과 1분씩 번갈아 두 번 연습하도록 타이머를 맞춘다.', challenge: '4단계를 놓고, 상대가 다시 권할 때까지 이어 하도록 1분씩 네 번 연습한다.' },
        activity: {
          title: '거절 기술 차례와 짝 연습', tool: 'timer',
          teacher: '"거절은 한마디로 끝날 때도 있지만, 상대가 다시 권하면 다음 단계가 필요해요." 차례를 놓은 뒤 짝과 권하는 사람·거절하는 사람을 바꿔 가며 1분씩 연습하게 한다. "자리를 먼저 피하면 되니 말은 안 해도 돼요"라는 학생에게 "말없이 가면 상대는 내 생각을 알까요? 분명히 말하고 나서 자리를 피해요"라고 말해 준다. 연습이 끝나면 해낸 단계에 스스로 표시하게 한다.',
          task: '거절 기술을 차례대로 놓고, 짝과 번갈아 연습한 뒤 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '거절 기술을 쓰는 차례대로 카드를 놓아요.', toolOptions: { title: '거절 기술 차례', cards: ['자리 피하기', '다른 것 제안하기', '분명히 말하기', '까닭 말하기'] }, target: { order: ['분명히 말하기', '까닭 말하기', '다른 것 제안하기', '자리 피하기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '거절 기술을 쓰는 차례대로 카드를 놓아요(카드 3장).', toolOptions: { cards: ['자리 피하기', '분명히 말하기', '까닭 말하기'] }, target: { order: ['분명히 말하기', '까닭 말하기', '자리 피하기'] } } } },
            { prompt: '짝과 1분씩 번갈아 두 번 연습하도록 타이머를 맞춰요(우리 반 연습).', toolOptions: { title: '짝 연습 타이머', plan: { work: 30, rest: 10, rounds: 1 }, workStep: 10 }, target: { plan: { work: 60, rounds: 2 } }, difficulty: 0.2,
              levels: { challenge: { prompt: '다시 권할 때까지 이어 하도록 1분씩 네 번 연습하게 맞춰요.', target: { plan: { work: 60, rounds: 4 } } } } },
            { prompt: '연습을 마치고 해낸 단계에 스스로 표시해요.', toolOptions: { title: '오늘 연습 점검' }, target: { selfCheck: ['분명히 말했다', '까닭을 말했다', '다른 것을 제안했다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '연습을 마치고 해낸 단계에 스스로 표시해요(두 칸).', target: { selfCheck: ['분명히 말했다', '까닭을 말했다'] } }, challenge: { prompt: '연습을 마치고 해낸 단계에 스스로 표시해요(네 칸).', target: { selfCheck: ['분명히 말했다', '까닭을 말했다', '다른 것을 제안했다', '자리를 피했다'] } } },
              conclude: '분명히 말하고, 까닭을 말하고, 다른 것을 제안하고, 그래도 권하면 자리를 피해요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '거절 기술의 첫 단계를 써요.', text: '거절할 때는 먼저 ___ 말해요.', answer: '분명히' }] },
        notes: '1분 연습 시간은 우리 반 연습용으로 정한 값이다. 권하는 역은 술 대신 \'주스 잔\'을 건네는 몸짓으로만 한다.',
      }),
      X('activity.party', {
        title: '생일 파티의 맥주 갈림길', method: '갈림길 결과 추적', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(한 모금 마실지 거절할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(분위기를 깨지 말라는 말)을 지나 근거를 고른다.', challenge: '갈림 3번(보호자께 알리기)까지 지나 끝에서 근거 카드 2장을 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 생일 파티의 맥주', tool: 'dilemma',
          teacher: '"한 모금만 마시면 아무 일도 없을까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "분위기를 깨면 친구가 서운해해요"라는 학생에게 "다른 놀이를 하자고 하면 분위기를 깨는 걸까요, 바꾸는 걸까요?"라고 묻는다. 계속 권할 때 보호자께 알리는 것은 친구를 혼내려는 것이 아니라 모두를 지키는 일이라는 점을 짚는다.',
          task: '파티 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '생일 파티의 맥주',
            steps: [
              { text: '친구 생일 파티에 중학생 형이 몰래 맥주를 가져와 "한 모금만" 해요.', motif: 'star',
                good: ['no', '"나는 안 마셔"라고 말한다', '형이 다른 친구에게 가요.', [['나', '몸을 지켜요', 1]]],
                bad: ['sip', '한 모금만 마셔 본다', '머리가 띵하고 속이 불편해요.', '자라는 몸은 적은 양에도 영향을 받을 수 있어요.', [['나', '몸이 불편해요', -1]]] },
              { text: '친구들이 "분위기 깨지 마"라고 해요.', motif: 'flower',
                good: ['game', '"우리 게임하자"라고 다른 놀이를 권한다', '몇몇 친구가 게임을 하러 와요.', [['친구들', '함께 즐겁게 놀아요', 1]]],
                bad: ['hold', '분위기 때문에 잔을 받아 든다', '형이 "마셔야지" 하고 또 재촉해요.', '잔을 받으면 다음 권유를 거절하기 더 어려워요.', [['나', '더 재촉받아요', -1]]] },
              { text: '형이 계속 권해요. 파티를 연 친구의 보호자는 거실에 계세요.', motif: 'house',
                good: ['adult', '보호자께 가서 알린다', '보호자가 맥주를 치우고 파티가 이어져요.', [['모두', '안전하게 놀아요', 1]]],
                bad: ['secret', '비밀로 하고 넘어간다', '몇몇 친구가 마시고 어지러워해요.', '혼자 막기 어려우면 어른께 알려요.', [['친구들', '다칠 수 있어요', -1]]] },
            ],
            ending: '거절하고, 다른 놀이를 권하고, 어른께 알려서 모두가 안전하게 파티를 즐겼어요.',
            reasons: [{ id: 'body', text: '자라는 몸은 술에 더 약하다' }, { id: 'adult', text: '어른께 알리면 모두를 지킨다' }, { id: 'one', text: '한 모금은 괜찮다', why: '적은 양에도 몸이 영향을 받을 수 있어요.' }, { id: 'mood', text: '분위기를 위해 따라야 한다', why: '다른 놀이로 분위기를 바꿀 수 있어요.' }],
            good: ['body', 'adult'],
            talk: '모둠에서 "분위기를 깨지 않고 거절하는 방법"을 하나씩 말해요.',
            conclude: '술을 권하면 분명히 거절하고, 계속 권하면 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '파티에서 형이 계속 술을 권해요. 알맞은 행동은?', options: ['한 모금만 마신다', '보호자께 알린다', '비밀로 한다'], answer: '보호자께 알린다' }] },
      }),
      X('activity.lines', {
        title: '좋은 거절 말·피할 말', method: '좋은 거절 말/피할 말 나누기', tool: 'story', minutes: 13,
        levels: { easy: '말 카드 4장을 좋은 거절 말·피할 말로 나눈다.', base: '카드 6장을 나누고, 피할 말 하나를 좋은 말로 고친다.', challenge: '카드 8장(넣지 않을 카드 포함)을 나누고, 피할 말 세 개를 좋은 말로 고친다.' },
        activity: {
          title: '거절 말 나누고 고치기', tool: 'story',
          teacher: '"\'나중에 마실게\'는 거절일까요?" 카드를 나눌 때마다 그 말을 들은 사람이 다음에 어떻게 할지 짐작해 말하게 한다. "화를 내면서 거절해야 다시 안 권해요"라는 학생에게 "화를 내면 다툼이 되어 자리를 피하기 어려워질 수 있어요. 차분하고 분명한 말이 더 힘이 있어요"라고 말해 준다. 모둠에서 고친 말을 소리 내어 읽게 한다.',
          task: '말 카드를 좋은 거절 말과 피할 말로 나누고, 피할 말을 좋은 말로 고쳐요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('말 카드를 좋은 거절 말과 피할 말로 나누어요.', { slots: ['좋은 거절 말', '피할 말'], mode: 'sort', groups: { '좋은 거절 말': ['싫어, 나는 안 마셔', '나는 주스 마실게', '그만 권해 줘'], '피할 말': ['나중에 마실게', '음… 생각해 볼게', '바보같이 그걸 왜 해'] }, easy: 2, extra: { '좋은 거절 말': ['우리 게임하자'], '피할 말': ['조금만 줘 봐'] }, traps: ['오늘 날씨 좋다'] }, 0.2),
            FILL('피할 말을 좋은 거절 말로 고쳐 넣어요.', { who: '나', title: '말 고치기', blanks: [['"나중에 마실게" 대신 "___"', '싫어, 나는 안 마셔'], ['"생각해 볼게" 대신 "___"', '그만 권해 줘'], ['"조금만 줘 봐" 대신 "___"', '나는 주스 마실게']], traps: ['한 잔만 마실게', '나중에 생각할게'] }, 0.25, { conclude: '좋은 거절 말은 짧고 분명하며 상대를 깎아내리지 않아요.' }),
            { prompt: '모둠에서 고친 말을 한 사람씩 차분하게 소리 내어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '좋은 거절 말이면 ○, 피할 말이면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['나중에 마실게', ''], ['싫어, 나는 안 마셔', ''], ['바보같이 그걸 왜 해', '']], answer: '×, ○, ×' }] },
      }),
      X('wrap.feel', {
        title: '거절한 뒤 내 자신감', method: '거절 뒤 마음 크기', tool: 'emotion', minutes: 7,
        levels: { easy: '거절에 성공한 장면에서 자신감 크기만 고른다.', base: '크기를 고르고 거절할 때 어려운 점 하나를 짝에게 말한다.', challenge: '어려운 점을 말하고 그것을 이길 방법까지 쓴다.' },
        wrap: {
          teacher: '"권유를 분명히 거절하고 자리를 옮겼어요. 지금 내 자신감은 얼마나 될까요?" 크기에는 정답이 없다고 먼저 말해 준다. 출구 2번에서 "다음에 마시겠다고 한다"를 고른 학생에게 "그 말은 다음 권유를 부를 수 있어요. 지금 분명히 말하는 것이 더 쉬워요"라고 말해 준다. 어려운 점은 짝과 나누되 다른 사람의 실제 이야기는 하지 않게 한다.',
          exitTicket: [
            SCALEX('거절에 성공한 지금, 내 자신감 크기를 골라요.', '권유를 분명히 거절하고 자리를 옮겼어요', '뿌듯함', '아주 크게'),
            { type: 'choice', prompt: '어른이 "한 잔쯤 괜찮아" 하며 술을 건네요. 알맞은 말은?', options: ['다음에 마실게요', '저는 주스 마실게요', '조금만 주세요'], answer: 1, difficulty: 0.15, explain: '예의 바르면서도 분명한 말로 거절해요.' },
            { type: 'short', prompt: '거절할 때 어려운 점 하나와 그것을 이길 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '거절한 뒤 내 마음',
          items: [
            { type: 'check', prompt: '거절에 성공한 장면을 떠올리고 내 자신감 크기에 표시해요.', options: ['조금', '보통', '아주 크게'] },
            { type: 'short', prompt: '거절할 때 어려운 점을 이길 방법 하나를 써요.' },
          ],
          easy: { note: '"싫어, 나는 안 마셔"라고 말해 봐요.', items: [{ type: 'draw', prompt: '거절하고 웃는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.plan', {
        title: '"권유받으면 나는" 실천 계획', method: '실천 계획과 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 써서 쓰고 기준 2개(상황·할 말)로 점검한다.', base: '세 문장으로 쓰고 기준 3개(상황·할 말·도움 요청)로 점검한다.', challenge: '기준 3개를 모두 넣어 쓰고 한 군데를 고쳐 쓴다.' },
        wrap: {
          teacher: '"언제, 무슨 말을, 누구에게 도움을 청할지 세 문장으로 계획해 볼까요?" 기준표를 함께 읽고 쓰게 한다. "어른한테 말하면 혼나요"라고 걱정하는 학생에게 "알리는 것은 잘못이 아니라 나와 친구를 지키는 일이에요. 누구에게 말하면 편할지 정해 둬요"라고 말해 준다. 실제 이름 대신 \'보호자\'·\'담임 선생님\'처럼 쓰게 한다.',
          exitTicket: [
            RUBX('"권유받으면 나는" 실천 계획을 세 문장으로 써요.', { topic: '술을 권유받을 상황, 할 말, 도움을 청할 사람을 넣어 세 문장으로 써요.', starter: '___ 때 술을 권유받으면 나는 "___"라고 말하겠다. 그래도 권하면 ___께 알리겠다.', crit: ['권유받을 상황을 썼다', '할 말을 썼다', '도움을 청할 사람을 썼다'], must: [['알리', '말씀드리', '도움']], chars: [40, 180], title: '나의 실천 계획' }),
            { type: 'choice', prompt: '실천 계획의 \'도움 요청\'으로 알맞은 것은?', options: ['보호자께 알리기', '혼자 참기', '형에게 비밀 지키기'], answer: 0, difficulty: 0.15, explain: '혼자 막기 어려울 때는 믿을 어른께 알려요.' },
          ],
        },
        worksheet: {
          title: '나의 실천 계획',
          items: [
            { type: 'table', prompt: '실천 계획을 칸에 나누어 써요.', columns: ['상황', '할 말', '도움 청할 사람'], cells: [['', '', '']] },
            { type: 'check', prompt: '내 계획에 들어간 것에 표시해요.', options: ['권유받을 상황', '할 말', '도움 청할 사람'] },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 나의 카페인 음료 습관 점검 (별표 2 초등 약물 '중독성물질을 알고 안전한 활용 방법' + 표준안 고카페인) ========
  {
    const X = mk('caffeine-habit', 5);
    const WEEK = [['월', 1], ['화', 0], ['수', 2], ['목', 0], ['금', 3], ['토', 1], ['일', 0]];
    M.push(
      X('intro.diary', {
        title: '하늘이의 일주일 음료 기록', method: '가상 기록 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 3개(월·화·수)를 짚어 주며 마신 날과 안 마신 날을 함께 읽는다.', base: '7일 막대를 읽고 가장 많이 마신 날을 찾는다.', challenge: '7일 막대에서 늘어난 날을 찾고 그 까닭을 짐작해 말한다.' },
        intro: {
          teacher: '"이 그래프는 수업을 위해 꾸민 가상 친구 하늘이의 일주일 카페인 음료 기록이에요. 가장 많이 마신 날은 언제일까요?" 시연 단추로 금요일 막대가 골라지는 모습을 보인다. "막대가 0인 날이 있으니 괜찮은 습관이에요"라는 말이 나오면 "주말 전으로 갈수록 막대가 어떻게 달라졌나요? 무엇 때문일까요?"라고 되묻는다. 오늘은 내 음료 습관을 점검하고 잠을 지키는 작은 계획을 세운다고 밝힌다.',
          student: '하늘이가 금요일에 카페인 음료를 많이 마신 까닭을 짐작해 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '하늘이의 카페인 음료(가상)', unit: '번', xLabel: '요일', yLabel: '마신 횟수', data: WEEK, question: '가장 많이 마신 날은?', choices: ['월', '수', '금', '토'] }, sequence: [{ pick: 2 }] },
          art: art('a paper calendar strip of seven days with small paper cans stacked on some days, a sleepy paper moon at the end', '일주일 음료 기록', 'sun', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생에게 실제 마신 양을 반 전체 앞에서 묻지 않는다.',
      }),
      X('intro.why', {
        title: '카페인 음료를 찾는 마음', method: '찾게 되는 까닭 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 까닭 카드 2장을 읽어 주고 함께 고른다.', base: '까닭 카드 3장을 스스로 고르고, 까닭이 아닌 카드는 남긴다.', challenge: '까닭 3장을 고른 뒤 까닭마다 대신할 방법을 짝지어 말한다.' },
        intro: {
          teacher: '"사람들은 왜 에너지 음료나 커피 음료를 찾을까요?" 시연 단추로 \'졸려서\'·\'친구 따라\'·\'광고를 보고\' 카드가 바구니에 담기는 모습을 보인다. "키가 크려고 마셔요" 같은 말이 나오면 "카페인이 키를 크게 할까요? 오히려 잠을 방해하면 어떨까요?"라고 되묻는다. 까닭을 알면 대신할 방법도 찾을 수 있다고 짚는다.',
          student: '친구들이 카페인 음료를 찾는 까닭을 하나 떠올리고, 그 대신 할 수 있는 일을 짝과 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '찾게 되는 까닭', cards: [{ id: 'sleepy', text: '졸려서' }, { id: 'tall', text: '키가 크려고' }, { id: 'friend', text: '친구 따라' }, { id: 'ad', text: '광고를 보고' }, { id: 'veg', text: '채소를 먹으려고' }], shuffle: false }, sequence: [{ pick: ['sleepy', 'friend', 'ad'] }] },
          art: art('paper children around a paper vending machine, thought bubbles showing a yawning face, a friend and a bright poster', '왜 찾게 될까?', 'cloud', 'lilac'),
        },
      }),
      X('activity.log', {
        title: '음료 습관 점검표', method: '자기 점검표', tool: 'kitchen', minutes: 9,
        levels: { easy: '가상 친구 하늘이의 이야기에서 의존 신호 2개를 점검표 4칸 가운데 표시한다.', base: '점검표 6칸 가운데 의존 신호 4개를 표시하고, 내 습관도 스스로 표시한다.', challenge: '내 점검표를 표시한 뒤 가장 고치고 싶은 습관 하나를 고른다.' },
        activity: {
          title: '음료 습관 점검표', tool: 'kitchen',
          teacher: '"하늘이 이야기에서 \'습관이 되어 가는 신호\'는 무엇일까요?" 칸을 하나씩 소리 내어 읽고 표시하게 한다. "목마를 때 물 마시기도 표시해요"라는 학생에게 "그건 몸에 필요한 행동이에요. 카페인 음료를 자꾸 찾게 되는 신호와 무엇이 다를까요?"라고 묻는다. 내 점검표는 정답이 없고 친구와 견주지 않는다고 미리 말해 준다.',
          task: '가상 친구의 음료 습관에서 의존 신호를 표시하고, 내 습관도 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('하늘이 이야기에서 의존 신호에 해당하는 칸만 표시해요.', '하늘이의 음료 습관', ['밤늦게 에너지 음료를 마심', '졸릴 때마다 음료를 찾음', '안 마시면 짜증이 남', '점점 더 자주 마심'], ['목마를 때 물을 마심', '일찍 잠자리에 듦'], { easy: 2, base: 4 }, 0.2),
            { prompt: '내 음료 습관에 해당하는 칸을 스스로 표시해요(정답 없음).', free: true, toolOptions: { mode: 'checklist', title: '나의 음료 습관', items: [{ id: 'm1', text: '저녁에 카페인 음료를 마신다' }, { id: 'm2', text: '졸릴 때마다 음료를 찾는다' }, { id: 'm3', text: '친구가 마시면 따라 마신다' }, { id: 'm4', text: '광고를 보면 마시고 싶다' }, { id: 'm5', text: '목마르면 물을 먼저 마신다' }, { id: 'm6', text: '정한 시각에 잠자리에 든다' }] } },
            { prompt: '가장 고치고 싶은 습관 하나를 골라 담아요(정답 없음).', free: true, toolOptions: { mode: 'pick', basket: '고치고 싶은 습관', cards: ['저녁에 마시기', '졸릴 때마다 찾기', '친구 따라 마시기', '광고 보고 마시기'] }, conclude: '카페인 음료를 자꾸 찾게 되면 습관이 될 수 있어요. 내 신호를 알면 바꿀 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '습관이 되어 가는 신호에 표시해요.', options: ['졸릴 때마다 찾는다', '안 마시면 짜증이 난다', '목마를 때 물을 마신다'] }] },
        notes: '학생 자신의 점검표는 채점하지 않는 free 문항이다. 결과를 반 전체에 발표시키지 않는다.',
      }),
      X('activity.swap', {
        title: '대신할 행동 나누기', method: '대신할 행동 나누기', tool: 'mindmap', minutes: 9,
        levels: { easy: '행동 카드 4장을 도움 되는 행동·의존 키우는 행동으로 나눈다.', base: '카드 6장을 나눈다.', challenge: '카드 8장(넣지 않을 카드 포함)을 나눈 뒤 내가 해 볼 행동 2개를 고른다.' },
        activity: {
          title: '졸릴 때 대신할 행동', tool: 'mindmap',
          teacher: '"졸릴 때 에너지 음료를 더 마시면 내일은 덜 졸릴까요?" 카드를 놓을 때마다 그 행동이 잠과 몸에 어떤 결과를 주는지 말하게 한다. "커피 음료로 버티면 공부를 더 할 수 있어요"라는 학생에게 "그날 밤 잠을 못 자면 다음 날은 어떻게 될까요?"라고 묻는다. 고른 행동은 정답이 아니라 나의 선택이라고 짚는다.',
          task: '졸릴 때 할 행동 카드를 도움 되는 행동과 의존 키우는 행동으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('졸릴 때 할 행동 카드를 두 가지로 나누어요.', { topic: '졸릴 때 나는', slots: ['도움 되는 행동', '의존 키우는 행동'], groups: { '도움 되는 행동': ['물 마시기', '일찍 자기', '스트레칭하기'], '의존 키우는 행동': ['에너지 음료 더 마시기', '밤늦게 게임하기', '커피 음료로 버티기'] }, extra: { '도움 되는 행동': ['바깥 공기 쐬기'], '의존 키우는 행동': ['졸 때마다 음료 찾기'] }, traps: ['신발 끈 묶기'] }, 0.2),
            { prompt: '내가 해 볼 도움 되는 행동 2개를 골라 담아요(정답 없음).', free: true, toolOptions: { mode: 'pick', basket: '내가 해 볼 행동', cards: ['물 마시기', '일찍 자기', '스트레칭하기', '바깥 공기 쐬기', '잠깐 눈 감고 쉬기'] }, conclude: '졸릴 때는 카페인 음료 대신 물·쉼·잠으로 몸을 돌봐요.' },
            { prompt: '모둠에서 고른 행동을 언제 해 볼지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 되는 행동이면 ○, 의존 키우는 행동이면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['물 마시기', ''], ['에너지 음료 더 마시기', ''], ['일찍 자기', '']], answer: '○, ×, ○' }] },
      }),
      X('activity.sleep', {
        title: '잠자리 시각 계획하기', method: '잠자리 시각 계획', tool: 'clock', minutes: 10,
        levels: { easy: '정각(9시·6시)으로 가상 친구의 잠자리 시각과 카페인 음료를 그만 마실 시각을 맞춘다.', base: '분까지(9시 30분·6시 30분) 시계를 맞춘다.', challenge: '분까지 맞춘 뒤 내가 카페인 음료를 피하기 시작할 저녁 시각을 정하고 까닭을 말한다.' },
        activity: {
          title: '잠을 지키는 시각 정하기', tool: 'clock',
          teacher: '"하늘이는 잠자리 시각을 먼저 정하고, 그보다 이른 저녁부터 카페인 음료를 마시지 않기로 했어요. 왜 그렇게 정했을까요?" 짧은바늘과 긴바늘을 함께 보며 맞추게 한다. "자기 바로 전에만 안 마시면 돼요"라는 학생에게 "카페인은 마신 뒤에도 한동안 잠을 방해할 수 있어요. 그래서 저녁부터 피해요"라고 말해 준다. 시각은 가상 친구의 계획이며 집마다 다를 수 있다고 짚는다.',
          task: '가상 친구의 계획대로 시계를 맞추고, 내 계획 시각도 정해요.', levels: { easy: { hourOnly: true }, base: {}, challenge: { showMinuteMarks: false } },
          items: [
            { prompt: '하늘이는 9시 30분에 잠자리에 들기로 했어요. 시계를 맞춰요.', toolOptions: { minuteStep: 5 }, target: { h: 9, m: 30 }, difficulty: 0.2,
              levels: { easy: { prompt: '하늘이는 9시에 잠자리에 들기로 했어요. 시계를 맞춰요.', target: { h: 9, m: 0 } } } },
            { prompt: '하늘이는 저녁 6시 30분부터 카페인 음료를 안 마셔요. 시계를 맞춰요.', toolOptions: { minuteStep: 5 }, target: { h: 6, m: 30 }, difficulty: 0.25,
              levels: { easy: { prompt: '하늘이는 저녁 6시부터 카페인 음료를 안 마셔요. 시계를 맞춰요.', target: { h: 6, m: 0 } } } },
            { prompt: '내가 카페인 음료를 피하기 시작할 저녁 시각을 맞추고 까닭을 짝에게 말해요.', free: true, toolOptions: { minuteStep: 5 }, conclude: '잠자리 시각을 먼저 정하고, 저녁부터는 카페인 음료를 피해 잠을 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '카페인 음료는 ___을 방해할 수 있어 저녁에는 피해요.', answer: '잠' }] },
        notes: '9시 30분·6시 30분은 가상 친구의 계획으로 지은 시각이다(권장 시각이 아니다).',
      }),
      X('wrap.plan', {
        title: '일주일 실천 계획 쓰기', method: '일주일 실천 계획 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 써서 쓰고 기준 2개(구체적인 행동·때)로 점검한다.', base: '세 문장으로 쓰고 기준 3개(행동·때·확인 방법)로 점검한다.', challenge: '확인 방법까지 넣고 한 군데를 고쳐 쓴다.' },
        wrap: {
          teacher: '"\'카페인 음료를 줄인다\'보다 더 구체적으로 쓰면 어떻게 될까요?" 기준표를 함께 읽고 쓰게 한다. "안 마실 거예요"라고만 쓴 학생에게 "언제, 무엇을 대신 하고, 지켰는지 어떻게 알 수 있을까요?"라고 묻는다. 확인 방법은 달력에 표시하기처럼 스스로 할 수 있는 것으로 쓰게 한다.',
          exitTicket: [
            RUBX('일주일 실천 계획을 세 문장으로 써요.', { topic: '이번 주 카페인 음료 습관을 바꿀 계획을 행동·때·확인 방법을 넣어 세 문장으로 써요.', starter: '나는 이번 주 ___에 카페인 음료 대신 ___ 하겠다. 지켰는지는 ___로 확인하겠다.', crit: ['구체적인 행동을 썼다', '언제 할지 썼다', '확인할 방법을 썼다'], must: [['확인', '표시', '기록']], chars: [40, 180], title: '일주일 실천 계획' }),
            { type: 'choice', prompt: '실천 계획의 확인 방법으로 알맞은 것은?', options: ['달력에 지킨 날 표시하기', '생각날 때만 떠올리기', '친구에게 대신 지켜 달라기'], answer: 0, difficulty: 0.15, explain: '지킨 날을 표시하면 스스로 확인할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '일주일 실천 계획',
          items: [
            { type: 'table', prompt: '실천 계획을 칸에 나누어 써요.', columns: ['행동', '언제', '확인 방법'], cells: [['', '', '']] },
            { type: 'table', prompt: '지킨 날에 ○를 해요.', columns: ['월', '화', '수', '목', '금', '토', '일'], cells: [['', '', '', '', '', '', '']] },
          ],
          easy: { note: '"저녁에는 카페인 음료 대신 물을 마셔요."처럼 써요.', items: [{ type: 'draw', prompt: '저녁에 물을 마시는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.share', {
        title: '다짐 카드 나누기', method: '다짐 카드 나누기', tool: 'wordcards', minutes: 6,
        levels: { easy: '다짐 카드 1장을 고르고 모둠에게 읽어 준다.', base: '도움 되는 다짐 카드 2장을 골라 읽어 준다.', challenge: '다짐 카드를 읽고 친구 다짐에 응원 한마디를 해 준다.' },
        wrap: {
          teacher: '"오늘 세운 계획을 한 장의 다짐 카드로 고른다면 무엇일까요?" 고른 카드를 모둠에게 소리 내어 읽게 한다. \'졸리면 에너지 음료 마시기\'를 고르는 학생에게 "그 다짐은 잠을 지켜 줄까요? 오늘 배운 대신할 행동을 떠올려 봐요"라고 말해 준다. 친구 다짐에는 고칠 점이 아니라 응원 한마디를 건네게 한다.',
          exitTicket: [
            PICKX('wordcards', '잠과 몸을 지키는 다짐 카드만 골라 담아요.', { basket: '나의 다짐', good: ['저녁엔 물 마시기', '정한 시각에 자기'], bad: ['졸리면 에너지 음료', '친구 따라 마시기'], easy: 1, easyBad: 1 }),
            { type: 'choice', prompt: '친구가 "이번 주엔 저녁에 물 마실래"라고 다짐해요. 알맞은 응원은?', options: ['그거 어렵지 않아?', '좋은 다짐이야, 응원할게', '나는 그냥 마실래'], answer: 1, difficulty: 0.1, explain: '친구의 다짐에는 응원하는 말을 건네요.' },
            { type: 'short', prompt: '친구 다짐에 건넬 응원 한마디를 써요.' },
          ],
        },
        worksheet: {
          title: '나의 다짐 카드',
          items: [
            { type: 'short', prompt: '나의 다짐 카드에 쓸 다짐 한 줄을 써요.' },
            { type: 'short', prompt: '친구 다짐에 해 준 응원 한마디를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 광고 속 술·담배·음료 메시지 분석 (별표 2 초등 약물 '중독성물질을 알고 안전한 활용 방법' + 표준안 흡연·음주·고카페인) ========
  {
    const X = mk('ad-analysis', 6);
    const POLL = [['에너지 음료', 8], ['탄산음료', 6], ['과일 주스', 4], ['물', 2]];
    M.push(
      X('intro.firstlook', {
        title: '가상 광고 첫 느낌', method: '가상 광고 첫 느낌 낱말', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 가상 광고 1장(즐거운 파티)을 말로 보여 주고 첫 느낌 낱말을 함께 고른다.', base: '가상 광고 3장을 듣고 첫 느낌 낱말 카드를 고른다.', challenge: '느낌 낱말을 고른 뒤 그 느낌을 만든 장치(음악·모델·문구)를 짐작해 말한다.' },
        intro: {
          teacher: '교사가 지은 가상 광고 세 장면을 말로 들려준다: "신나는 음악 속 즐거운 파티", "땀 흘리는 멋진 운동선수", "\'에너지 충전!\' 큰 글씨". "광고를 보면 어떤 느낌이 드나요?" 시연 단추로 \'신나 보여요\'·\'멋져 보여요\'·\'힘이 날 것 같아요\' 카드가 담기는 모습을 보인다. "광고에 나오면 믿을 수 있어요"라는 말이 나오면 "광고는 누가 만들까요? 그 사람은 무엇을 바랄까요?"라고 되묻는다. 오늘은 그 느낌을 만든 장치와 숨긴 정보를 찾는다고 밝힌다.',
          student: '최근에 본 음료 광고 하나를 떠올리고, 그때 든 첫 느낌을 낱말 하나로 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '광고를 본 첫 느낌', cards: ['신나 보여요', '몸에 해로워 보여요', '멋져 보여요', '잠이 안 올 것 같아요', '힘이 날 것 같아요'], shuffle: false }, sequence: [{ pick: ['신나 보여요', '멋져 보여요', '힘이 날 것 같아요'] }] },
          art: art('three paper billboards side by side: a bright party, a sporty paper athlete, and huge bold letters, with a paper child looking up', '광고를 보면 어떤 느낌?', 'star', 'peach'),
        },
        notes: '실제 상표·제품 광고는 보이지 않는다. 가상 광고 세 장면은 교사가 말로 들려주거나 칠판에 간단히 그린다.',
      }),
      X('intro.poll', {
        title: '광고 보고 마시고 싶었던 음료', method: '가상 조사 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 2개(에너지 음료·물)를 짚어 주며 함께 견준다.', base: '막대 4개를 읽고 가장 높은 막대를 찾은 뒤 궁금한 질문을 만든다.', challenge: '막대를 읽고 가상 자료로는 말할 수 없는 것을 찾아 말한다.' },
        intro: {
          teacher: '"이 그래프는 수업을 위해 꾸민 가상의 우리 반 조사예요. 광고를 보고 마셔 보고 싶었던 음료로 가장 많이 고른 것은 무엇일까요?" 시연 단추로 에너지 음료 막대가 골라지는 모습을 보인다. "많이 고른 음료가 가장 좋은 음료예요"라는 말이 나오면 "\'마셔 보고 싶었다\'와 \'몸에 좋다\'는 같은 말일까요?"라고 되묻는다. 그래프를 보고 떠오른 질문을 하나씩 말하게 한다.',
          student: '가상 그래프를 보고 "왜 에너지 음료가 가장 많을까?"처럼 궁금한 질문을 하나 만들어 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '광고 보고 마셔 보고 싶었던 음료(가상)', unit: '명', xLabel: '음료', yLabel: '학생 수', data: POLL, question: '가장 많이 고른 음료는?', choices: POLL.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper bar chart with four paper columns shaped like drink bottles, the tallest one wrapped in a flashy label', '광고와 우리 마음(가상)', 'leaf', 'mint'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 반 조사로 바꿀 때는 이름을 받지 않는다.',
      }),
      X('activity.devices', {
        title: '광고 장치와 숨긴 정보', method: '광고 장치 분류', tool: 'mindmap', minutes: 14,
        levels: { easy: '광고 조각 4개를 끌어들이는 장치·숨긴 정보로 나눈다.', base: '광고 조각 8개를 나누고, 장치마다 노리는 마음을 잇는다.', challenge: '넣지 않을 조각까지 섞인 10개를 나누고, 장치마다 노리는 마음을 모두 잇는다.' },
        activity: {
          title: '광고 조각 나누기', tool: 'mindmap',
          teacher: '"광고에서 크게 보여 주는 것과 작게 숨긴 것은 무엇일까요?" 조각을 놓을 때마다 \'왜 크게(작게) 만들었을까?\'를 묻는다. "작은 글씨는 중요하지 않아서 작아요"라는 학생에게 "작은 글씨에는 \'어린이 주의\' 같은 말이 있었어요. 파는 사람은 왜 그 말을 작게 썼을까요?"라고 되묻는다. 장치마다 노리는 마음을 이을 때는 내 마음과 견주어 보게 한다.',
          task: '가상 광고 조각을 끌어들이는 장치와 숨긴 정보로 나누고, 장치가 노리는 마음을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('가상 광고 조각을 두 가지로 나누어요.', { topic: '가상 음료 광고', slots: ['끌어들이는 장치', '숨긴 정보'], groups: { '끌어들이는 장치': ['인기 모델', '신나는 음악', '"에너지 충전" 문구', '반짝이는 색'], '숨긴 정보': ['작은 글씨 주의 문구', '고카페인 표시', '잠을 방해할 수 있음', '자주 찾게 될 수 있음'] }, easy: 2, extra: { '끌어들이는 장치': ['"모두가 마셔요" 문구'] }, traps: ['광고 회사 주소'] }, 0.25),
            MATCH('광고 장치마다 노리는 마음을 이어요.', { topic: '무엇을 노릴까?', pairs: [['인기 모델', '저 사람처럼 되고 싶은 마음'], ['신나는 음악', '즐거워지고 싶은 마음'], ['"에너지 충전" 문구', '피곤을 빨리 없애고 싶은 마음']], easy: 2, more: [['"모두가 마셔요" 문구', '나만 빠지기 싫은 마음']], extra: ['물이 마시고 싶은 마음'] }, 0.3, { conclude: '광고는 마음을 끄는 장치를 크게 보이고, 몸에 대한 정보는 작게 숨기기도 해요.' }),
            { prompt: '모둠에서 내 마음을 가장 크게 끈 장치와 그 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '광고 조각이 장치면 \'장\', 숨긴 정보면 \'숨\'을 써요.', columns: ['광고 조각', '장 / 숨'], cells: [['인기 모델', ''], ['작은 글씨 주의 문구', ''], ['신나는 음악', '']], answer: '장, 숨, 장' }] },
      }),
      X('activity.rewrite', {
        title: '광고 문구 사실대로 다시 쓰기', method: '사실대로 다시 쓰기', tool: 'rubric-writing', minutes: 13,
        levels: { easy: '빈칸이 있는 문장 틀로 다시 쓰고 기준 2개(사실·숨김 없음)로 점검한다.', base: '한두 문장으로 다시 쓰고 기준 3개(사실·숨김 없음·짧음)로 점검한다.', challenge: '꼭 넣을 낱말을 넣어 다시 쓰고 한 군데 고친 뒤, 다른 모둠 글을 기준표로 평가해 말한다.' },
        activity: {
          title: '과장 문구 다시 쓰기', tool: 'rubric-writing',
          teacher: '"\'한 캔이면 밤새 쌩쌩!\'을 숨긴 것 없이 쓰면 어떻게 될까요?" 기준표를 함께 읽고, 과장된 말과 숨긴 정보를 먼저 찾은 뒤 쓰게 한다. "\'이 음료는 나빠요\'라고만 쓰면 돼요"라는 학생에게 "무엇이 왜 문제인지 사실로 쓰면 읽는 사람이 스스로 판단할 수 있어요"라고 말해 준다. 도전 단계는 다른 모둠 글을 기준표 세 칸으로 평가해 한 문장씩 말하게 한다.',
          task: '과장된 가상 광고 문구를 숨긴 정보까지 넣어 사실대로 다시 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('"한 캔이면 밤새 쌩쌩!"을 사실대로 다시 써요.', { topic: '가상 광고 "한 캔이면 밤새 쌩쌩!"을 숨긴 정보까지 넣어 사실대로 한두 문장으로 다시 써요.', starter: '이 음료에는 ___이 많아 ___을 방해할 수 있어요.', crit: ['사실만 썼다', '숨긴 정보를 넣었다', '짧고 분명하게 썼다'], must: [['잠', '카페인']], chars: [20, 120], title: '다시 쓰는 광고 문구' }, 0.3),
            RUB('"친구와 함께라면 더 즐거운 한 잔"을 사실대로 다시 써요.', { topic: '가상 술 광고 "친구와 함께라면 더 즐거운 한 잔"을 숨긴 정보까지 넣어 사실대로 한두 문장으로 다시 써요.', starter: '술은 ___을 흐리게 하고, 자라는 몸에는 ___.', crit: ['과장 없이 사실만 썼다', '몸에 주는 영향을 넣었다', '한두 문장으로 짧게 썼다'], must: [['판단', '몸']], chars: [20, 120], title: '다시 쓰는 술 광고' }, 0.3, { conclude: '사실대로 쓴 문구는 숨긴 정보를 보여 주어 스스로 판단하게 해요.' }),
            { prompt: '다른 모둠 글을 기준표 세 칸으로 평가해 한 문장씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"한 캔이면 밤새 쌩쌩!"을 사실대로 다시 써요.' }] },
      }),
      X('activity.influencer', {
        title: '"공부 필수템" 영상 갈림길', method: '모둠 갈림길 토의', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(바로 살지 살펴볼지)에서 모둠이 고르고 근거 한 장을 고른다.', base: '갈림 2번(\'다들 마신대\'라는 말)을 지나 근거를 고른다.', challenge: '갈림 3번(단톡방에 올라온 영상)까지 지나 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 공부 필수템이래요', tool: 'dilemma',
          teacher: '"영상 속 사람이 \'공부 필수템\'이라고 하면 그 말은 누구에게 이득일까요?" 모둠이 함께 고르고 결과 칸을 소리 내어 읽게 한다. "유명한 사람이 쓰면 안전해요"라는 학생에게 "그 사람이 광고비를 받았다면요? 영상 속 \'광고\' 표시를 찾아볼까요?"라고 묻는다. "다들 마신대"라는 말은 정말인지 확인해 볼 수 있다고 짚는다.',
          task: '모둠이 갈림길마다 함께 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '공부 필수템이래요',
            steps: [
              { text: '인기 영상 속 사람이 에너지 음료를 "공부 필수템"이라며 보여 줘요.', motif: 'star',
                good: ['check', '광고 표시와 주의 문구를 살펴본다', '화면 구석에 \'광고\'와 고카페인 표시가 보여요.', [['모둠', '숨긴 정보를 알아요', 1]]],
                bad: ['buy', '바로 사서 마셔 본다', '그날 밤 잠이 잘 오지 않아요.', '광고 말만 믿기 전에 숨긴 정보를 살펴요.', [['나', '잠을 설쳐요', -1]]] },
              { text: '모둠 친구가 "시험 기간엔 다들 마신대"라고 해요.', motif: 'cloud',
                good: ['ask', '"다들"이 정말인지 묻고 물을 권한다', '친구가 "그러고 보니 아닌 것 같아" 해요.', [['친구', '다시 생각해요', 1]]],
                bad: ['follow', '모둠이 다 같이 사 마시기로 한다', '모두 늦게까지 잠들지 못해요.', '\'다들 한다\'는 말은 확인해 볼 수 있어요.', [['모둠', '다음 날 피곤해요', -1]]] },
              { text: '다음 날 다른 친구가 그 영상을 단톡방에 올렸어요.', motif: 'house',
                good: ['share', '알게 된 숨긴 정보를 함께 알려 준다', '친구들이 주의 문구를 찾아봐요.', [['반 친구들', '판단할 정보를 얻어요', 1]]],
                bad: ['like', '좋아요만 누르고 넘긴다', '영상이 더 많은 친구에게 퍼져요.', '알게 된 정보를 나누면 친구도 판단할 수 있어요.', [['반 친구들', '광고 말만 들어요', -1]]] },
            ],
            ending: '숨긴 정보를 살피고, 확인하고, 함께 나누어 모두가 스스로 판단할 수 있었어요.',
            reasons: [{ id: 'profit', text: '광고는 파는 사람의 이득을 노린다' }, { id: 'sleep', text: '고카페인 음료는 잠을 방해한다' }, { id: 'famous', text: '유명한 사람이 쓰면 안전하다', why: '유명한 것과 안전한 것은 다른 일이에요.' }, { id: 'every', text: '다들 마시면 괜찮다', why: '여럿이 마신다고 몸에 덜 해롭지 않아요.' }],
            good: ['profit', 'sleep'],
            talk: '모둠에서 "광고 영상을 볼 때 먼저 찾아볼 것"을 하나씩 말해요.',
            conclude: '광고 영상은 누구의 이득인지 묻고, 숨긴 정보를 찾아본 뒤 판단해요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '영상 속 사람이 음료를 "필수템"이라 해요. 먼저 할 일은?', options: ['바로 사 본다', '광고 표시와 주의 문구를 찾는다', '좋아요를 누른다'], answer: '광고 표시와 주의 문구를 찾는다' }] },
      }),
      X('activity.campaign', {
        title: '숨긴 정보 알리는 공익 광고', method: '공익 광고 스토리보드', tool: 'story', minutes: 13,
        levels: { easy: '공익 광고 장면 3장을 차례로 놓는다.', base: '장면 4장을 차례로 놓고 장면마다 알맞은 문구를 잇는다.', challenge: '틀린 장면을 빼고 4장을 놓고, 마지막 장면 문구는 모둠이 직접 지어 말한다.' },
        activity: {
          title: '공익 광고 장면 짜기', tool: 'story',
          teacher: '"광고가 숨긴 정보를 알려 주는 광고를 만든다면 어떤 차례가 좋을까요?" 장면을 놓을 때마다 보는 사람이 무엇을 알게 되는지 말하게 한다. "무섭게 겁을 주면 효과가 커요"라는 학생에게 "겁만 주면 무엇을 해야 할지 알까요? 마지막에 할 수 있는 행동을 보여 줘요"라고 말해 준다. 장면마다 문구를 고른 뒤 모둠이 소리 내어 읽게 한다.',
          task: '숨긴 정보를 알려 주는 공익 광고 장면을 차례로 놓고, 장면마다 문구를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('공익 광고 장면을 차례대로 놓아요.', ['반짝이는 광고 장면', '작은 글씨 크게 보기', '몸에 생기는 일 알리기', '할 수 있는 행동 보이기'], { mode: 'order', easy: [0, 1, 3], trap: '모델 사인 받기', motifs: ['star', 'leaf', 'cloud', 'sun'] }, 0.2),
            MATCH('공익 광고 장면마다 알맞은 문구를 이어요.', { topic: '장면과 문구', pairs: [['반짝이는 광고 장면', '"정말 쌩쌩해질까?"'], ['작은 글씨 크게 보기', '"고카페인, 어린이 주의"'], ['할 수 있는 행동 보이기', '"졸릴 땐 물 한 잔, 푹 자기"']], easy: 2, more: [['몸에 생기는 일 알리기', '"잠들기 어려울 수 있어요"']], extra: ['"지금 바로 사세요!"'] }, 0.25, { conclude: '공익 광고는 숨긴 정보를 보여 주고, 마지막에 할 수 있는 행동을 알려요.' }),
            { prompt: '모둠이 마지막 장면 문구를 직접 지어 함께 읽어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 공익 광고의 마지막 장면 문구를 써요.' }] },
      }),
      X('wrap.questions', {
        title: '광고 볼 때 던질 질문', method: '광고 볼 때 질문 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '질문 점검표에서 앞으로 쓸 질문 3개를 표시한다.', base: '질문 5개를 표시하고 쓸모없는 질문은 남긴다.', challenge: '5개를 표시한 뒤 나만의 질문 하나를 더 만들어 쓴다.' },
        wrap: {
          teacher: '"다음에 광고를 볼 때 스스로에게 무엇을 물어볼까요?" 점검표를 하나씩 읽고 표시하게 한다. \'모델 옷이 예쁜가?\'를 고르는 학생에게 "그 질문은 광고가 숨긴 정보를 찾게 해 줄까요?"라고 묻는다. 출구 2번에서 "광고에 나오니 믿을 만하다"를 고른 학생에게는 광고를 만든 사람이 누구인지 다시 떠올리게 한다.',
          exitTicket: [
            CHKX('광고를 볼 때 앞으로 쓸 질문만 표시해요.', '광고 볼 때 질문', ['무엇을 숨겼나?', '누가 이득을 보나?', '몸에 어떤 영향이 있나?', '사실과 과장은 무엇인가?', '주의 문구가 있나?'], ['모델 옷이 예쁜가?'], { easy: 3, base: 5 }),
            { type: 'choice', prompt: '유명한 사람이 음료를 광고해요. 알맞은 생각은?', options: ['광고에 나오니 믿을 만하다', '누가 이득을 보는지 생각해 본다', '유명하니 안전하다'], answer: 1, difficulty: 0.15, explain: '광고는 파는 사람의 이득을 위해 만들어요.' },
            { type: 'short', prompt: '광고를 볼 때 던질 나만의 질문 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '광고를 볼 때 묻는 질문',
          items: [
            { type: 'check', prompt: '광고를 볼 때 쓸 질문에 표시해요.', options: ['무엇을 숨겼나?', '누가 이득을 보나?', '몸에 어떤 영향이 있나?'] },
            { type: 'short', prompt: '집에서 본 광고 하나에 위 질문을 던져 알게 된 것을 써요.' },
          ],
          easy: { note: '"무엇을 숨겼나?"를 꼭 물어요.', items: [{ type: 'draw', prompt: '광고의 작은 글씨를 돋보기로 보는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.vote', {
        title: '광고 다시 보기 전과 후', method: '광고 다시 보기 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '숨긴 정보를 안 지금, 그 광고를 보고 마셔 보고 싶은 마음 크기만 고른다.', base: '처음 볼 때와 지금의 마음 크기를 각각 골라 견준다.', challenge: '두 크기를 견준 뒤 마음이 달라진 까닭을 쓴다.' },
        wrap: {
          teacher: '"처음 광고를 봤을 때와 숨긴 정보를 안 지금, 마셔 보고 싶은 마음은 어떻게 달라졌나요?" 두 크기에는 정답이 없고, 달라지지 않았어도 괜찮다고 먼저 말해 준다. 달라진 까닭을 쓸 때 오늘 찾은 장치나 숨긴 정보를 넣게 한다. "광고는 다 거짓말이에요"라는 말에는 "거짓이라기보다 일부를 크게, 일부를 작게 보여 줘요"라고 짚는다.',
          exitTicket: [
            SCALEX('처음 광고를 봤을 때 마셔 보고 싶은 마음 크기를 골라요.', '처음 본 \'에너지 충전!\' 광고', '신남'),
            SCALEX('숨긴 정보를 안 지금, 마셔 보고 싶은 마음 크기를 골라요.', '작은 글씨까지 읽은 \'에너지 충전!\' 광고', '걱정'),
            { type: 'short', prompt: '두 마음 크기가 달라진(또는 같은) 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '광고를 다시 보면',
          items: [
            { type: 'table', prompt: '마셔 보고 싶은 마음 크기를 1~5로 써요.', columns: ['처음 볼 때', '숨긴 정보를 안 뒤'], cells: [['', '']] },
            { type: 'short', prompt: '마음이 달라진 까닭을 오늘 찾은 장치나 숨긴 정보로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 약 겹쳐 먹기와 인터넷 약 광고 (별표 2 초등 약물 '약물 오남용의 위험성 및 올바른 약물 복용법 알기') ========
  {
    const X = mk('overlap-online', 6);
    // 가상 약 상자: 성분은 이름 대신 기호로만 쓴다(실제 약·성분 이름을 쓰지 않는다)
    const DRUGMAP = { grid: [6, 4], title: '우리 동네(가상)', legend: false, places: [
      { name: '학교 보건실', icon: 'school', at: [1, 1] }, { name: '약국', icon: 'hospital', at: [4, 1] }, { name: '병원', icon: 'hospital', at: [4, 3] },
      { name: '집', icon: 'house', at: [0, 3] }, { name: '편의점', icon: 'market', at: [2, 3] }, { name: '놀이터', icon: 'park', at: [5, 0] }] };
    const NEAR = (keep) => Object.assign({}, DRUGMAP, { places: DRUGMAP.places.filter((p) => keep.includes(p.name)) });
    const ASKQ = (place, prompt, q, choices, ans, why, d, more) => Object.assign({
      prompt, toolOptions: Object.assign({}, DRUGMAP, { ask: { q, choices, why } }), target: { place, pick: ans }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(곳 두 군데).`, toolOptions: Object.assign(NEAR([place, '놀이터']), { ask: null, readout: true }), target: { place } },
        challenge: { prompt: `${cut(prompt)}(헷갈리는 곳도 있어요).`, toolOptions: Object.assign({}, DRUGMAP, { names: false, ask: { q, choices, why } }), target: { place, pick: ans } },
      } }, more);
    M.push(
      X('intro.case', {
        title: '감기약 먹고 해열제를 또?', method: '사례 장면 차례', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 3장을 읽어 주며 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 위험한 장면을 고른다.', challenge: '4장을 놓고 위험이 생긴 원인을 한 문장으로 말한다.' },
        intro: {
          teacher: '"가상 친구 서아가 감기약을 먹었는데, 저녁에 열이 나서 해열제를 또 꺼냈어요. 괜찮을까요?" 시연 단추로 \'감기약을 먹어요\' → \'해열제를 또 꺼내요\' → \'두 상자 성분을 견줘요\' → \'약사께 물어요\'가 차례로 놓이는 모습을 보인다. "이름이 다른 약이니 함께 먹어도 돼요"라는 말이 나오면 "이름은 달라도 안에 든 성분이 같다면요?"라고 되묻는다. 오늘은 약 상자의 성분을 견주고, 인터넷 약 광고의 위험 신호를 가려 어른·약사에게 묻는 법을 배운다고 밝힌다.',
          student: '집에서 약을 먹기 전에 보호자가 무엇을 살펴보는지 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: [{ id: 'more', text: '해열제를 또 꺼내요', motif: 'sun' }, { id: 'cold', text: '감기약을 먹어요', motif: 'house' }, { id: 'ask', text: '약사께 물어요', motif: 'flower' }, { id: 'look', text: '두 상자 성분을 견줘요', motif: 'leaf' }], shuffle: false }, sequence: [{ order: ['cold', 'more', 'look', 'ask'] }] },
          art: art('two paper medicine boxes side by side with matching paper ingredient labels highlighted, a paper child holding a magnifying glass', '이름이 달라도 성분은?', 'leaf', 'sky'),
        },
        notes: '실제 약 이름·성분 이름·먹는 양은 쓰지 않는다. 약은 반드시 보호자와 함께, 설명서와 약사·의사의 안내대로 먹는다고 짚는다.',
      }),
      X('intro.body', {
        title: '약이 처리되는 간', method: '약이 처리되는 곳 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 간 한 곳을 짚어 주고 함께 찾는다.', base: '간과 콩팥 두 곳을 스스로 찾아 누른다.', challenge: '두 곳을 찾은 뒤 겹쳐 먹으면 왜 몸에 들어오는 양이 많아지는지 말한다.' },
        intro: {
          teacher: '"먹은 약은 몸 어디에서 처리될까요?" 시연 단추로 종이 몸의 간과 콩팥이 차례로 골라지는 모습을 보인다. 간은 몸에 들어온 약을 처리하고 콩팥은 몸 밖으로 내보내는 일을 돕는다고 짚는다. "약은 많이 먹을수록 빨리 나아요"라는 말이 나오면 "같은 성분이 두 번 들어오면 간이 처리할 양은 어떻게 될까요? 너무 많으면 몸에 부담이 돼요"라고 되묻는다.',
          student: '종이 몸에서 간과 콩팥을 찾아보고, 약을 정해진 대로 먹어야 하는 까닭을 짝과 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ORG, names: true }, sequence: [{ sel: '간' }, { sel: '콩팥' }] },
          art: art('a paper body figure with the paper liver and kidneys gently glowing, two small paper pills waiting outside', '약은 어디서 처리될까?', 'star', 'mint'),
        },
      }),
      X('activity.compare', {
        title: '약 상자 성분 견주기', method: '성분 칸 견주어 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가상 약 상자 두 개에서 성분 2개를 겹치는 것·안 겹치는 것으로 나눈다.', base: '성분 4개를 나누고, 성분을 견주며 생긴 문제마다 할 일을 잇는다.', challenge: '가상 약 상자 세 개를 견주어 성분 5개를 나눈다.' },
        activity: {
          title: '가상 약 상자 견주기', tool: 'mindmap',
          teacher: '"가 상자(감기약)와 나 상자(해열제)에 같은 성분이 있을까요?" 상자의 성분 칸을 손가락으로 하나씩 짚으며 견주게 한다. "상자 이름이 다르니 겹칠 리 없어요"라는 학생에게 "가 상자에도 해열 성분 ㉮가 있어요. 두 상자를 다 먹으면 ㉮는 몇 번 들어갈까요?"라고 묻는다. 겹치는 성분을 찾으면 스스로 정하지 않고 보호자·약사께 묻는다는 점을 짚는다.',
          task: '가상 약 상자의 성분을 견주어 겹치는 성분을 찾고, 그때 할 일을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '가 상자(㉮㉯㉰)와 나 상자(㉮㉱)에서 겹치는 성분을 나누어요.', toolOptions: { topic: '가: ㉮㉯㉰ / 나: ㉮㉱', slots: ['겹치는 성분', '한 상자에만'], cards: ['㉯ 기침 성분', '㉮ 해열 성분', '㉱ 진통 성분', '㉰ 콧물 성분'] }, target: { sort: { '겹치는 성분': ['㉮ 해열 성분'], '한 상자에만': ['㉯ 기침 성분', '㉰ 콧물 성분', '㉱ 진통 성분'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '가 상자(㉮㉯)와 나 상자(㉮)에서 겹치는 성분을 나누어요.', toolOptions: { topic: '가: ㉮㉯ / 나: ㉮', cards: ['㉯ 기침 성분', '㉮ 해열 성분'] }, target: { sort: { '겹치는 성분': ['㉮ 해열 성분'], '한 상자에만': ['㉯ 기침 성분'] } } },
                challenge: { prompt: '가(㉮㉯㉰)·나(㉮㉱)·다(㉯㉲) 세 상자에서 겹치는 성분을 나누어요.', toolOptions: { topic: '가: ㉮㉯㉰ / 나: ㉮㉱ / 다: ㉯㉲', cards: ['㉯ 기침 성분', '㉮ 해열 성분', '㉲ 가래 성분', '㉱ 진통 성분', '㉰ 콧물 성분'] }, target: { sort: { '겹치는 성분': ['㉮ 해열 성분', '㉯ 기침 성분'], '한 상자에만': ['㉰ 콧물 성분', '㉱ 진통 성분', '㉲ 가래 성분'] } } },
              } },
            MATCH('약 상자를 견주다 생긴 문제마다 할 일을 이어요.', { topic: '이럴 땐 이렇게', pairs: [['같은 성분을 찾았다', '먹기 전에 약사께 묻기'], ['성분 이름이 어렵다', '보호자께 읽어 달라기'], ['먹은 시각이 헷갈린다', '먹은 시각 적어 두기']], easy: 2, extra: ['둘 다 그냥 먹기'] }, 0.25, { conclude: '이름이 다른 약도 성분이 겹칠 수 있어요. 성분을 견주고, 겹치면 보호자·약사께 물어요.' }),
            { prompt: '모둠에서 약을 먹기 전에 확인할 것 하나를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '두 약 상자에 같은 성분이 있어요. 알맞은 행동은?', options: ['둘 다 먹는다', '먹기 전에 약사께 묻는다', '더 센 것을 고른다'], answer: '먹기 전에 약사께 묻는다' }] },
        notes: '약 상자와 성분(㉮~㉲)은 수업용으로 지은 것이다. 실제 약 상자를 교실에 가져와 열지 않는다.',
      }),
      X('activity.online', {
        title: '"비밀 배송" 약 광고 갈림길', method: '갈림길 결과 추적', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(광고를 누를지 닫을지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(후기가 많다는 친구 말)을 지나 근거를 고른다.', challenge: '갈림 3번(어른·약사에게 묻기)까지 지나 근거 카드 2장을 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 비밀 배송 약 광고', tool: 'dilemma',
          teacher: '"\'비밀 배송\'이라는 말은 왜 들어 있을까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "후기가 천 개면 믿을 수 있어요"라는 학생에게 "그 후기는 누가 썼는지 알 수 있을까요? 약이 나에게 맞는지는 누가 알려 줄까요?"라고 묻는다. 몸이나 몸무게가 신경 쓰일 때는 혼자 인터넷을 찾기보다 보호자·보건 선생님·약사와 이야기하는 것이 나를 지키는 길이라고 짚는다.',
          task: '인터넷 약 광고 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '비밀 배송 약 광고',
            steps: [
              { text: 'SNS에 "살 빠지는 약 싸게, 비밀 배송" 광고가 떠요.', motif: 'cloud',
                good: ['close', '누르지 않고 화면을 닫는다', '광고가 사라지고 하던 일을 이어 해요.', [['나', '위험한 광고를 피해요', 1]]],
                bad: ['click', '궁금해서 눌러 본다', '비슷한 광고가 계속 따라와요.', '위험 신호가 있는 광고는 누르지 않아요.', [['나', '광고에 더 끌려요', -1]]] },
              { text: '친구가 "후기가 천 개래, 같이 알아볼래?"라고 해요.', motif: 'star',
                good: ['doubt', '후기가 많아도 안전한 건 아니라고 말한다', '친구가 "그럼 누구한테 물어보지?" 해요.', [['친구', '다시 생각해요', 1]]],
                bad: ['secret', '보호자 몰래 알아보기로 한다', '친구와 둘이서만 고민이 커져요.', '처방 없이 몰래 파는 약은 몸에 맞는지 알 수 없어요.', [['나와 친구', '위험해질 수 있어요', -1]]] },
              { text: '그래도 몸무게가 자꾸 신경 쓰여요.', motif: 'house',
                good: ['ask', '보호자·보건 선생님·약사와 이야기한다', '어른과 함께 건강하게 지낼 방법을 찾아요.', [['나', '마음이 가벼워져요', 1]]],
                bad: ['alone', '혼자 인터넷만 찾아본다', '광고와 후기만 더 보게 돼요.', '혼자 고민하기보다 믿을 어른과 이야기해요.', [['나', '걱정이 커져요', -1]]] },
            ],
            ending: '광고를 닫고, 후기를 의심하고, 어른·약사에게 물어서 내 몸을 지켰어요.',
            reasons: [{ id: 'rx', text: '처방 없이 파는 약은 위험하다' }, { id: 'ask', text: '약은 약사·의사에게 묻는다' }, { id: 'review', text: '후기가 많으면 안전하다', why: '후기는 누가 썼는지 알 수 없고, 내 몸에 맞는지도 알려 주지 않아요.' }, { id: 'hide', text: '비밀 배송이면 걱정 없다', why: '몰래 파는 것이 바로 위험 신호예요.' }],
            good: ['rx', 'ask'],
            talk: '모둠에서 "인터넷 약 광고를 보면 누구에게 물어볼까?"를 이야기해요.',
            conclude: '처방 없이·몰래 파는 약 광고는 누르지 말고, 어른·약사에게 물어요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '"비밀 배송, 처방 없이" 약 광고를 봤어요. 알맞은 행동은?', options: ['눌러서 값을 알아본다', '화면을 닫고 어른께 이야기한다', '친구에게 보낸다'], answer: '화면을 닫고 어른께 이야기한다' }] },
        notes: '몸무게·외모에 대한 학생 개인의 고민을 반 전체에 묻지 않는다. 걱정을 말하는 학생은 보건 선생님·상담 선생님과 따로 잇는다.',
      }),
      X('activity.signals', {
        title: '위험 신호·안전 신호 문구', method: '위험 신호 문구 나누기', tool: 'story', minutes: 14,
        levels: { easy: '문구 카드 4장을 위험 신호·안전 신호로 나눈다.', base: '문구 8장을 나누고, 친구에게 할 대답의 빈칸을 채운다.', challenge: '헷갈리는 문구까지 10장을 나누고, 그 문구가 왜 헷갈리는지 까닭을 말한다.' },
        activity: {
          title: '약 광고 문구 나누기', tool: 'story',
          teacher: '"\'효과 100%\'라는 말은 믿음을 줄까요, 의심을 줄까요?" 카드를 놓을 때마다 그 문구를 쓴 사람이 무엇을 바라는지 말하게 한다. \'부작용 전혀 없음\'을 안전 신호에 두는 학생에게 "모든 약에는 조심할 점이 있어요. \'전혀 없다\'고 말하는 광고는 무엇을 숨겼을까요?"라고 묻는다. 안전 신호는 약사·의사·설명서·보호자와 이어져 있다는 점을 짚는다.',
          task: '인터넷 약 광고 문구를 위험 신호와 안전 신호로 나누고, 친구에게 할 대답을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('약 광고 문구를 위험 신호와 안전 신호로 나누어요.', { slots: ['위험 신호', '안전 신호'], mode: 'sort', groups: { '위험 신호': ['처방 없이 드려요', '비밀 배송', '효과 100%', '후기만 믿으세요'], '안전 신호': ['약사와 상담하세요', '설명서를 읽으세요', '의사 처방대로', '보호자와 함께'] }, easy: 2, extra: { '위험 신호': ['부작용 전혀 없음'], '안전 신호': ['약국에서 묻고 사기'] } }, 0.25),
            FILL('친구에게 할 대답의 빈칸을 채워요.', { who: '나', title: '친구에게 하는 말', blanks: [['"처방 없이 판대" → "그건 ___"', '위험 신호야'], ['"후기가 엄청 많아" → "그래도 ___"', '약사께 묻자'], ['"부작용이 없대" → "그런 말은 ___"', '의심해 봐야 해']], traps: ['좋은 기회야', '얼른 사자'] }, 0.25, { conclude: '처방 없이·비밀·100%·후기만은 위험 신호, 약사·의사·설명서·보호자는 안전 신호예요.' }),
            { prompt: '모둠에서 가장 헷갈린 문구 하나와 그 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '위험 신호면 \'위\', 안전 신호면 \'안\'을 써요.', columns: ['문구', '위 / 안'], cells: [['비밀 배송', ''], ['약사와 상담하세요', ''], ['효과 100%', '']], answer: '위, 안, 위' }] },
      }),
      X('activity.ask', {
        title: '약을 물어볼 곳 지도', method: '물어볼 곳 지도와 질문', tool: 'map', minutes: 13,
        levels: { easy: '두 곳만 있는 지도에서 이름을 보며 물어볼 곳에 핀을 꽂는다.', base: '여섯 곳 지도에서 물어볼 곳 세 군데에 핀을 꽂고 곳마다 물어볼 질문을 고른다.', challenge: '이름이 숨겨진 지도에서 헷갈리는 곳(편의점)을 가려 핀을 꽂고 질문을 고른 뒤, 질문을 직접 만들어 말한다.' },
        activity: {
          title: '물어볼 곳과 질문 찾기', tool: 'map',
          teacher: '"약이 궁금할 때 어디에 물어볼까요?" 곳마다 핀을 꽂고, 그곳에서 물어볼 질문을 고르게 한다. "편의점에도 약이 있으니 거기서 물어보면 돼요"라는 학생에게 "약에 대해 잘 알려 줄 수 있는 사람은 누구일까요? 약사·의사·보건 선생님이에요"라고 말해 준다. 도전 단계는 우리 동네 실제 약국·병원 위치를 보호자와 함께 알아보자고 한다.',
          task: '동네 지도에서 약을 물어볼 곳에 핀을 꽂고, 그곳에서 물어볼 질문을 골라요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            ASKQ('약국', '감기약과 해열제를 같이 먹어도 되는지 물을 곳에 핀을 꽂아요.', '약국에서 무엇을 물을까요?', ['두 약 성분이 겹치나요?', '가장 싼 약이 뭐예요?', '맛있는 약이 있나요?'], 0, ['', '값보다 내 몸에 맞는지가 먼저예요.', '맛보다 성분과 먹는 법을 물어요.'], 0.2),
            ASKQ('학교 보건실', '학교에서 머리가 아플 때 먼저 물어볼 곳에 핀을 꽂아요.', '보건실에서 무엇을 말할까요?', ['어디가 언제부터 아픈지', '친구 약을 받아도 되는지', '집에 일찍 가도 되는지'], 0, ['', '다른 사람의 약은 먹지 않아요.', '먼저 아픈 곳을 알려요.'], 0.25),
            ASKQ('병원', '열이 내리지 않고 계속 아플 때 가 볼 곳에 핀을 꽂아요.', '병원에서 무엇을 말할까요?', ['먹은 약과 먹은 시각', '좋아하는 음식', '인터넷 후기'], 0, ['', '먹은 약을 알려야 알맞은 도움을 받아요.', '후기보다 내가 먹은 약을 알려요.'], 0.3),
            { prompt: '모둠에서 약사께 물어볼 질문을 하나 직접 만들어 말해요.', free: true, talk: true, conclude: '약이 궁금하면 혼자 정하지 말고 약국·보건실·병원에서 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '약국에서 약사께 물어볼 질문 하나를 써요.' }] },
        notes: '지도는 수업용으로 지은 동네다. \'편의점\'은 약을 물어볼 곳이 아닌 헷갈리는 곳으로 넣었다.',
      }),
      X('wrap.tell', {
        title: '가족에게 말을 꺼낼 때', method: '가족에게 알릴 때 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '가족이 약을 겹쳐 먹으려는 장면에 내 마음 카드를 잇는다.', base: '장면 두 개에 마음을 잇고, 할 말을 고른다.', challenge: '장면 세 개에 마음을 잇고, 할 말을 들은 가족의 반응까지 생각해 쓴다.' },
        wrap: {
          teacher: '"할머니가 감기약을 드신 뒤 두통약을 또 꺼내시면, 말을 꺼낼 때 어떤 마음일까요?" 마음 카드를 잇고 할 말을 고르게 한다. "어른한테 말하는 건 버릇없어요"라는 학생에게 "걱정해서 묻는 말은 버릇없는 게 아니에요. \'같은 성분이 있는지 약사께 여쭤볼까요?\'처럼 말할 수 있어요"라고 말해 준다. 가족의 실제 약 이야기는 하지 않게 한다.',
          exitTicket: [
            FEEL('장면과 말을 꺼낼 때의 마음을 이어요.', [['할머니가 약을 또 꺼내셔요', '걱정'], ['"같이 약사께 여쭤봐요" 했어요', '용기'], ['할머니가 "고맙다" 하셨어요', '뿌듯함']], ['걱정', '용기', '뿌듯함', '신남']),
            { type: 'choice', prompt: '가족이 약을 겹쳐 먹으려 해요. 알맞은 말은?', options: ['괜찮겠지, 그냥 둔다', '같은 성분인지 약사께 여쭤볼까요?', '더 많이 드세요'], answer: 1, difficulty: 0.15, explain: '걱정되는 마음을 예의 바르게 말하고 약사께 함께 물어요.' },
            { type: 'short', prompt: '내 말을 들은 가족이 어떻게 할지 생각해 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '가족에게 말해요',
          items: [
            { type: 'short', prompt: '가족이 약을 겹쳐 먹으려 할 때 할 말을 한 문장으로 써요.' },
            { type: 'check', prompt: '말을 꺼낼 때 도움이 되는 것에 표시해요.', options: ['걱정하는 마음을 말한다', '약사께 함께 묻자고 한다', '설명서를 같이 본다'] },
          ],
          easy: { note: '"같은 성분인지 약사께 여쭤볼까요?"라고 말해요.', items: [{ type: 'draw', prompt: '가족과 함께 약 상자를 살펴보는 모습을 그려요.' }] },
        },
      }),
      X('wrap.note', {
        title: '가족 안전 쪽지 쓰기', method: '가족 안전 쪽지와 기준표', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 써서 쓰고 기준 2개(무엇을·왜)로 점검한다.', base: '세 문장으로 쓰고 기준 3개(무엇을·왜·어떻게)로 점검한다.', challenge: '기준 3개를 모두 넣어 쓰고 한 군데를 고쳐 쓴다.' },
        wrap: {
          teacher: '"가족에게 \'약 겹쳐 먹지 않기\' 쪽지를 쓴다면 무엇을, 왜, 어떻게를 넣어 볼까요?" 기준표를 함께 읽고 쓰게 한다. "약 먹지 마세요"라고 쓴 학생에게 "약은 필요할 때 바르게 먹는 거예요. \'겹치지 않게\', \'약사께 묻고\'처럼 어떻게 할지 써요"라고 말해 준다. 가족의 이름·병명은 쓰지 않게 한다.',
          exitTicket: [
            RUBX('가족에게 보내는 "약 겹쳐 먹지 않기" 쪽지를 세 문장으로 써요.', { topic: '가족에게 약을 겹쳐 먹지 않도록 무엇을, 왜, 어떻게 할지 세 문장으로 쪽지를 써요.', starter: '약을 먹기 전에 ___을 견주어 주세요. 왜냐하면 ___. 헷갈리면 ___께 물어봐요.', crit: ['무엇을 할지 썼다', '왜 해야 하는지 썼다', '어떻게 할지 썼다'], must: [['약사', '성분']], chars: [40, 180], title: '가족 안전 쪽지' }),
            { type: 'choice', prompt: '쪽지의 \'왜\'에 알맞은 문장은?', options: ['이름이 다른 약도 성분이 같을 수 있어서', '약은 많이 먹을수록 좋아서', '약 상자가 예뻐서'], answer: 0, difficulty: 0.15, explain: '성분이 겹치면 같은 성분을 두 번 먹게 돼요.' },
          ],
        },
        worksheet: {
          title: '가족 안전 쪽지',
          items: [
            { type: 'short', prompt: '가족에게 보낼 "약 겹쳐 먹지 않기" 쪽지를 써요.' },
            { type: 'check', prompt: '내 쪽지에 들어간 것에 표시해요.', options: ['무엇을', '왜', '어떻게'] },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 또래 권유, 우리 반 실천 계획 (별표 2 초등 약물 '중독성물질을 알고 안전한 활용 방법' + 표준안 흡연·음주) ========
  {
    const X = mk('peer-plan', 6);
    const GROUP = [['분명히 말하기', 3], ['다른 놀이 제안', 2], ['자리 피하기', 4], ['어른께 알리기', 1]];
    M.push(
      X('intro.scene', {
        title: '졸업식 뒤 망설이는 마음', method: '장면 속 마음 크기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 \'걱정\'과 \'궁금함\' 두 마음 가운데 주인공의 마음을 함께 고른다.', base: '주인공의 망설이는 마음 크기를 1~5로 고른다.', challenge: '마음 크기를 고른 뒤 주인공이 망설이는 까닭을 말한다.' },
        intro: {
          teacher: '"졸업식이 끝나고 아는 중학생 선배가 \'이제 중학생 되니까\' 하며 담배를 권해요. 주인공 마음은 얼마나 흔들릴까요?" 시연 단추로 망설임(걱정) 크기가 4로 골라지는 모습을 보인다. 크기에는 정답이 없고, 흔들리는 마음이 드는 것은 자연스럽다고 먼저 말해 준다. "중학생이 되면 해도 돼요"라는 말이 나오면 "중학생이 되면 몸이 다 자란 걸까요?"라고 되묻는다. 오늘은 권유가 생기는 원인을 찾고 우리 반 약속을 정한다고 밝힌다.',
          student: '주인공이 망설이는 까닭을 하나 짐작해 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '졸업식 뒤 선배가 담배를 권해요', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
          art: art('paper children in graduation caps outside a paper school gate, an older paper student holding out a small grey box, one child hesitating', '졸업식 뒤, 흔들리는 마음', 'cloud', 'lilac'),
        },
        notes: '학생에게 실제로 권유받은 일을 묻지 않는다. 장면은 지은 것이다.',
      }),
      X('intro.map', {
        title: '권유받기 쉬운 곳·도움받을 곳', method: '권유 위험 곳·도움 곳 핀', tool: 'map', minutes: 6,
        levels: { easy: '교사가 권유받기 쉬운 곳 1곳과 도움받을 곳 1곳을 짚어 주고 함께 핀을 꽂는다.', base: '권유받기 쉬운 곳 2곳과 도움받을 곳 2곳을 차례로 짚는다.', challenge: '네 곳을 짚은 뒤 권유받기 쉬운 곳을 피해 다닐 길을 말한다.' },
        intro: {
          teacher: '"학교 둘레에서 또래나 선배의 권유를 받기 쉬운 곳은 어디일까요? 도움을 받을 수 있는 곳은요?" 시연 단추로 핀이 \'학교 뒤 골목\' → \'공원 구석\'(권유받기 쉬운 곳) → \'상담실\' → \'집\'(도움받을 곳)으로 옮겨 가는 모습을 보인다. "도움받을 곳은 경찰서뿐이에요"라는 말이 나오면 "학교 안에도 이야기를 들어 줄 선생님이 계시지 않나요?"라고 되묻는다.',
          student: '우리 학교 둘레에서 도움을 받을 수 있는 곳 한 군데를 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'map', options: { grid: [6, 4], title: '학교 둘레(가상)', legend: false, places: [{ name: '학교 뒤 골목', icon: 'dot', at: [0, 0] }, { name: '공원 구석', icon: 'park', at: [5, 3] }, { name: '상담실', icon: 'school', at: [2, 1] }, { name: '집', icon: 'house', at: [4, 2] }] }, sequence: [{ pin: [0, 0] }, { pin: [5, 3] }, { pin: [2, 1] }, { pin: [4, 2] }] },
          art: art('a paper map of streets around a school with two grey paper pins on shadowy corners and two bright paper pins on a counseling room and a house', '어디를 피하고, 어디에 도움을?', 'house', 'sky'),
        },
        notes: '지도는 가상이다. 우리 학교 둘레의 실제 장소를 지목해 특정 가게·사람을 탓하지 않는다.',
      }),
      X('activity.reasons', {
        title: '또래 권유가 생기는 까닭', method: '원인 그물', tool: 'mindmap', minutes: 9,
        levels: { easy: '까닭 카드 3장을 골라 그물 가운데에 붙인다.', base: '까닭 카드 5장을 고르고 까닭이 아닌 카드는 남긴 뒤, 원인마다 대처를 잇는다.', challenge: '까닭 7장 가운데 알맞은 것을 고르고, 원인 네 개마다 대처를 모두 잇는다.' },
        activity: {
          title: '권유가 생기는 까닭 그물', tool: 'mindmap',
          teacher: '"친구는 왜 권할까요? 나는 왜 거절하기 어려울까요?" 까닭 카드를 붙일 때마다 그 마음이 누구의 마음인지(권하는 사람·받는 사람) 말하게 한다. "나쁜 친구라서 권해요"라는 학생에게 "어울리고 싶거나 멋져 보이고 싶은 마음일 수도 있어요. 까닭을 알면 대처도 찾을 수 있어요"라고 말해 준다. 원인마다 대처를 이으며 \'~해서 권한다면 ~하자\' 문장으로 읽게 한다.',
          task: '또래 권유가 생기는 까닭 카드를 골라 붙이고, 원인마다 대처를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            PICK('또래 권유가 생기는 까닭 카드만 골라 붙여요.', { basket: '권유가 생기는 까닭', topic: '왜 권하고, 왜 흔들릴까?', good: ['어울리고 싶어서', '멋있어 보이려고', '거절이 어려워서', '호기심 때문에', '혼자 남을까 걱정돼서'], bad: ['키가 크려고', '공부가 잘돼서'], easy: 3, easyBad: 1, moreGood: ['따라 하고 싶어서'], moreBad: ['비가 와서'] }, 0.2),
            MATCH('원인마다 알맞은 대처를 이어요.', { topic: '원인과 대처', pairs: [['어울리고 싶어서', '다른 놀이로 함께 어울리기'], ['멋있어 보이려고', '내가 잘하는 것 보여 주기'], ['거절이 어려워서', '거절 말 미리 연습하기']], easy: 2, more: [['혼자 남을까 걱정돼서', '거절하는 친구와 함께 다니기']], extra: ['한 번만 받아 주기'] }, 0.25, { conclude: '권유가 생기는 까닭을 알면, 그 마음을 채울 다른 방법으로 대처할 수 있어요.' }),
            { prompt: '모둠에서 그물에 빠진 까닭 하나를 더 찾아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '권유가 생기는 까닭과 대처를 하나씩 써요.', columns: ['까닭', '대처'], cells: [['', '']] }] },
      }),
      X('activity.route', {
        title: '"우리끼리 비밀" 갈림길', method: '갈림길 결과 추적', tool: 'dilemma', minutes: 9,
        levels: { easy: '갈림 1번(만져 볼지 걱정을 말할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(절교하겠다는 말)을 지나 근거를 고른다.', challenge: '갈림 3번(어른께 알리기)까지 지나 근거를 모두 고르고, 다른 길 하나를 더 끝까지 가 본다.' },
        activity: {
          title: '갈림길: 우리끼리 비밀이래요', tool: 'dilemma',
          teacher: '"단짝이 \'너 말하면 절교야\'라고 하면, 비밀을 지키는 것이 우정일까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "어른께 말하면 고자질이에요"라는 학생에게 "친구를 혼나게 하려는 말과 친구가 걱정돼서 하는 말은 무엇이 다를까요?"라고 묻는다. 몸이 위험한 비밀은 혼자 지키지 않고 믿을 어른과 나눈다는 점을 짚는다.',
          task: '단짝의 비밀 상황에서 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '우리끼리 비밀이래요',
            steps: [
              { text: '단짝이 "우리끼리 비밀이야"라며 가방 속 전자담배를 보여 줘요.', motif: 'house',
                good: ['say', '"나는 안 할래, 너도 걱정돼"라고 말한다', '단짝이 잠깐 말이 없어요.', [['단짝', '내 걱정을 들어요', 1]]],
                bad: ['touch', '신기해서 만져 본다', '단짝이 "다음엔 같이 해 보자" 해요.', '만져 보는 것도 호기심을 키울 수 있어요.', [['나', '권유가 이어져요', -1]]] },
              { text: '단짝이 "너 말하면 절교야"라고 해요.', motif: 'cloud',
                good: ['care', '친구가 걱정돼서 그렇다고 다시 말한다', '단짝이 "나도 사실 그만두고 싶어" 해요.', [['단짝', '속마음을 꺼내요', 1]]],
                bad: ['promise', '비밀을 꼭 지키겠다고 약속한다', '나 혼자 걱정을 끌어안게 돼요.', '몸이 위험한 비밀은 혼자 지키지 않아요.', [['나', '마음이 무거워요', -1]]] },
              { text: '단짝이 그만두고 싶은데 혼자서는 어렵대요.', motif: 'star',
                good: ['adult', '함께 담임 선생님께 이야기하러 간다', '선생님이 단짝을 도울 방법을 함께 찾아요.', [['단짝', '도움을 받아요', 1]]],
                bad: ['ignore', '모르는 척 넘어간다', '단짝은 계속 혼자 힘들어해요.', '혼자 어려운 일은 어른의 도움이 필요해요.', [['단짝', '도움을 못 받아요', -1]]] },
            ],
            ending: '걱정을 말하고, 혼자 지키지 않고, 함께 어른께 가서 단짝도 도움을 받게 되었어요.',
            reasons: [{ id: 'care', text: '걱정해서 알리는 건 고자질이 아니다' }, { id: 'help', text: '어른은 친구를 도울 방법을 안다' }, { id: 'keep', text: '비밀은 무조건 지켜야 한다', why: '몸이 위험한 비밀은 믿을 어른과 나눠요.' }, { id: 'lose', text: '말하면 친구를 꼭 잃는다', why: '걱정하는 마음을 말하면 오히려 친구가 속마음을 꺼낼 수 있어요.' }],
            good: ['care', 'help'],
            talk: '모둠에서 "친구를 걱정할 때 할 수 있는 말"을 하나씩 말해요.',
            conclude: '몸이 위험한 비밀은 혼자 지키지 않고, 친구와 함께 믿을 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '단짝이 전자담배를 보여 주며 비밀로 하래요. 알맞은 생각은?', options: ['비밀이니 꼭 지킨다', '걱정을 말하고 어른께 함께 알린다', '나도 한 번 해 본다'], answer: '걱정을 말하고 어른께 함께 알린다' }] },
      }),
      X('activity.groupdata', {
        title: '모둠 거절 방법 그래프', method: '모둠 조사 막대그래프', tool: 'chart', minutes: 10,
        levels: { easy: '가상 모둠 자료 표에서 막대 2개를 완성한다.', base: '막대 4개를 완성하고 가장 많은·적은 방법을 읽는다.', challenge: '그래프로 말할 수 있는 것을 고른 뒤, 다른 모둠과 차이가 생긴 까닭을 토의한다.' },
        activity: {
          title: '거절 방법 막대그래프', tool: 'chart',
          teacher: '"이 표는 수업을 위해 꾸민 가상 모둠의 자료예요. 모둠원 열 명이 가장 먼저 쓰겠다고 고른 거절 방법이에요." 표의 수를 막대로 옮긴 뒤 높은 막대와 낮은 막대를 견주게 한다. "가장 많은 방법만 좋은 방법이에요"라는 학생에게 "적게 고른 \'어른께 알리기\'는 언제 꼭 필요할까요?"라고 묻는다. 우리 모둠이 실제로 조사할 때는 이름 없이 손을 들어 세게 한다.',
          task: '가상 모둠의 거절 방법 표를 막대그래프로 완성하고, 그래프를 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 모둠의 표를 보고 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '먼저 쓸 거절 방법(가상 모둠)', unit: '명', xLabel: '방법', yLabel: '학생 수', data: GROUP, given: [0] }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '가상 모둠의 표를 보고 막대 두 개를 완성해요(가상 자료).', toolOptions: { data: GROUP.slice(0, 2), given: [] } } } },
            { prompt: '가장 적게 고른 거절 방법은 무엇인가요?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '먼저 쓸 거절 방법(가상 모둠)', unit: '명', data: GROUP, choices: GROUP.map((x) => x[0]), question: '가장 적은 방법은?' }, target: { pick: 3 }, difficulty: 0.15 },
            { prompt: '이 그래프로 말할 수 있는 것을 골라요(가상 자료).', toolOptions: { type: 'bar', mode: 'read', title: '먼저 쓸 거절 방법(가상 모둠)', unit: '명', data: GROUP, choices: ['이 모둠은 자리 피하기를 가장 많이 골랐다', '모든 6학년이 자리 피하기만 쓴다', '어른께 알리기는 쓸모없다'], question: '말할 수 있는 것은?', why: ['', '가상 모둠 열 명의 자료로 모든 6학년을 말할 수 없어요.', '적게 골랐다고 쓸모없는 것은 아니에요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '모둠 자료는 그 모둠의 생각을 보여 줘요. 적게 나온 방법도 꼭 필요한 때가 있어요.' },
            { prompt: '모둠에서 다른 모둠과 차이가 생긴 까닭을 토의해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가상 모둠 그래프에서 가장 많이 고른 방법은?', options: ['분명히 말하기', '자리 피하기', '어른께 알리기'], answer: '자리 피하기' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 모둠 조사는 이름을 적지 않고 손을 들어 센다.',
      }),
      X('wrap.pledge', {
        title: '우리 반 약속문 한 줄', method: '우리 반 약속문과 기준표', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '보기 약속문을 고쳐 쓰고 기준 2개(구체적·지킬 수 있음)로 점검한다.', base: '약속문 한 줄을 쓰고 기준 3개(구체적·지킬 수 있음·모두 해당)로 점검한다.', challenge: '기준 3개를 모두 넣어 쓰고 한 군데를 고쳐 쓴다.' },
        wrap: {
          teacher: '"모둠 의견을 모아 우리 반 약속문 한 줄을 만든다면요?" 기준표를 함께 읽고 쓴 뒤 모둠별로 읽게 한다. "담배는 절대 안 돼!"라고만 쓴 학생에게 "권유를 받으면 무엇을 할지 행동으로 쓰면 모두가 따라 하기 쉬워요"라고 말해 준다. 한 사람에게만 해당하는 약속이 아닌지 반 전체에 물어 점검한다.',
          exitTicket: [
            RUBX('우리 반 약속문 한 줄을 써요.', { topic: '또래 권유를 받을 때 우리 반 모두가 지킬 약속을 한 줄로 써요.', starter: '우리 반은 권유를 받으면 ___ 하고, 친구가 받으면 ___.', crit: ['구체적인 행동을 썼다', '모두 지킬 수 있다', '반 모두에게 해당한다'], must: [['우리', '모두']], chars: [15, 100], title: '우리 반 약속문' }),
            { type: 'choice', prompt: '가장 구체적인 약속문은?', options: ['나쁜 건 하지 말자', '권유받으면 "싫어" 하고 자리를 옮기자', '모두 착하게 지내자'], answer: 1, difficulty: 0.15, explain: '무엇을 할지 행동이 보여야 지키기 쉬워요.' },
          ],
        },
        worksheet: {
          title: '우리 반 약속',
          items: [
            { type: 'short', prompt: '우리 반 약속문 한 줄을 써요.' },
            { type: 'check', prompt: '약속문을 기준표로 점검해요.', options: ['구체적인 행동', '모두 지킬 수 있음', '반 모두에게 해당'] },
          ],
          easy: { note: '보기: "우리 반은 권유를 받으면 \'싫어\'라고 말하고 자리를 옮겨요."', items: [{ type: 'short', prompt: '보기 약속문에서 한 낱말을 바꿔 우리 반 약속문을 써요.' }] },
        },
      }),
      X('wrap.card', {
        title: '중학교에 가져갈 거절 말', method: '응원 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '거절 말 카드 1장을 골라 짝에게 건넨다.', base: '거절 말 카드를 고르고 고른 까닭을 짝에게 말한다.', challenge: '고른 카드를 내 말로 새로 고쳐 써서 건넨다.' },
        wrap: {
          teacher: '"중학교에 가서 권유를 받는다면 꺼낼 거절 말 카드를 하나 골라 볼까요?" 고른 카드를 짝에게 건네며 읽어 주게 한다. \'다음에 생각해 볼게\'를 고르는 학생에게 "그 말은 다음 권유를 기다리게 할 수 있어요. 지금 분명히 말하는 카드를 골라 봐요"라고 말해 준다. 짝에게 받은 카드에는 "응원해"라고 답하게 한다.',
          exitTicket: [
            PICKX('wordcards', '중학교에서 쓸 분명한 거절 말 카드를 골라 담아요.', { basket: '중학교에 가져갈 말', good: ['나는 안 해, 내 몸이 소중해', '싫어, 다른 거 하자'], bad: ['다음에 생각해 볼게', '선배니까 해야겠지'], easy: 1, easyBad: 1 }),
            { type: 'choice', prompt: '선배가 "중학생이면 다 해"라며 권해요. 알맞은 말은?', options: ['그럼 한 번만요', '저는 안 해요, 그만 권해 주세요', '나중에 할게요'], answer: 1, difficulty: 0.15, explain: '선배에게도 예의 바르면서 분명하게 거절해요.' },
            { type: 'short', prompt: '고른 거절 말을 내 말로 새로 고쳐 써요.' },
          ],
        },
        worksheet: {
          title: '중학교에 가져갈 말',
          items: [
            { type: 'short', prompt: '중학교에서 쓸 나의 거절 말을 써요.' },
            { type: 'short', prompt: '짝에게 건넬 응원 한마디를 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
