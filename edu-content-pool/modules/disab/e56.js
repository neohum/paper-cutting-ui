/* 창체 장애인식개선 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 disab 초5-6.
 * 근거: 장애인복지법·시행령(법정 매년 1회 1시간 이상, 범교과 기준 연 2시간 — research-mandatory §1),
 *       research-mandatory §2 장애인식개선 초(장애 이해와 배려, 차별 말·행동 점검) — sources/changche/research-mandatory.md.
 *       보편적 설계는 §2 고 항목을 초등 수준 사례로 당겨 썼다(체계도 source).
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길·기준표 글쓰기.
 *   법 조문 번호·형량은 학생 글에 쓰지 않는다. 그래프 수치는 모두 가상(화면 제목에 '가상'). 인물은 지어낸 가명 한 글자(서·진·율·담·해·은·로·별).
 * 이 영역의 처신(모든 모듈):
 *   - 장애를 불쌍함·특별함·감동의 볼거리로 그리지 않는다. 장애가 있는 인물도 강점·좋아하는 것·원하는 방법을 가진 같은 반 친구로 쓴다.
 *   - 사람 먼저 쓰는 말: '장애인', '장애가 있는 친구', '휠체어를 쓰는 친구', '청각장애가 있는 친구'. '장애우·장애자·정상인' 같은 말은
 *     바로잡는 함정 카드·교사 발문에만 둔다. 장애를 빗댄 욕·비하어는 화면에 쓰지 않고 '○○'로 가리거나 '장애 이름을 붙여 놀리는 말'로 적는다.
 *   - 도움은 '먼저 묻고, 원하는 방법으로'. 돕는 쪽·받는 쪽이 정해진 관계가 아니라 서로 돕는 관계로 쓴다.
 *   - 학생 자신이나 가족의 장애 여부·겪은 일을 묻지 않는다. 자기 점검은 '말 습관'처럼 행동만 본다(실명 쓰지 않기).
 * 주제 3개(5학년 2 · 6학년 1) — 계획 모듈 24개 전부. 추천 조합은 체계도 sequences(학년마다 2차시).
 *
 * 계획과 다르게 한 곳(교구 한계 — levels 글은 실제 설정대로 적었다):
 *  - 도입 모듈은 시연 한 판이라 '막대 3개/4개', '말풍선 4개/6개', '무늬 3개/5개' 같은 단계 차이를 교사 진행(짚는 막대·읽어 주는 카드 수)으로 적었다.
 *  - word-check.wrap.plan: 시계는 한 판에 한 시각이라 '시간 둘'을 출구 질문 두 개(쉬는 시간·게임 시간)로 나눴다. 문항 수는 단계마다 같아
 *    쉬움 = 정각 시계, 기본 = 10분 눈금, 도전 = 5분 눈금이고, '점검할 날'은 모든 단계의 고르기 문항으로 둔다.
 *  - 콜라주(collage)는 글자·그림을 붙이지 못한다. 소통판의 '물·화장실·도와줘·잠깐', 입구의 '경사로·손잡이·큰 글자 표지·점자 안내'는
 *    모양으로 정해(경사로 = 세모, 손잡이 = 긴 네모, 표지 = 네모, 점자 안내 = 작은 동그라미) 판정하고, 뜻은 활동지에 쓴다.
 *  - braille-dot: 규칙 판은 점자 칸을 그리지 못해 '여섯 점 칸 하나'를 한 줄 여섯 조각(검은 점 = 찍힌 점, 흰 점 = 빈 자리)으로 펼쳐 보인다.
 *    무늬는 실제 점자 글자가 아니라 '점의 자리가 바뀌면 뜻이 바뀐다'를 보이는 연습 무늬다(교사가 실제 점자 카드를 함께 보인다).
 *  - sign-follow: 화면 인물이 수어를 보여 주지 못한다. 교사가 국립국어원 한국수어사전 영상이나 직접 동작으로 보이고, 타이머는 따라 하기 15초·쉬기 구간을 맞추게 한다.
 *  - sign-song: 건반은 수어 동작을 판정하지 못해 가락만 치고, 동작은 교사 진행으로 붙인다.
 *  - match-way: 분류판은 바구니를 단계마다 바꾸지 않는다. 쉬움 = 카드 4장(넣을 때 바로 알려 줌), 기본 = 상황 3개 카드 6장, 도전 = 상황마다 방법 두 가지
 *    + 넣지 않을 함정 카드다.
 *  - way-check: 감정 교구 눈금(3칸)은 단계별 판이 없어 항목 수 차이를 교사 진행으로 적었다(출구 질문은 늘 세 개).
 *  - ud-spot: '누구에게 편할까'는 낱말 카드 짝 짓기(시설 칸 ← 편한 사람 카드)로 한다. 한 시설이 여러 사람에게 편하다는 점은 카드 글에 여러 사람을 함께 적어 보인다.
 *  - 카드 한 장의 정답 칸은 하나라 '두 상황에 다 맞는 방법'은 모둠 말하기(talk) 문항으로 옮겼다.
 *
 * 사람 확인: 근거 파일에는 법정 시수와 '장애 이해와 배려, 차별 말·행동 점검' 항목 제목만 있다. 아래 문장은 일반 장애인식개선 교육 내용으로 썼으니
 *  공식 안내처(보건복지부·한국장애인개발원 장애인식개선교육 자료, 국가인권위원회 장애 차별 표현 안내, 국립국어원 한국수어사전, 국립특수교육원 자료)에서 확인한다.
 *  - word-check.*: '장애인'이 바른 말이고 '장애자'는 낮추는 옛말, '장애우'는 권하지 않는 말, '정상인'의 바른 짝말은 '비장애인' / 장애를 빗댄 비유('벙어리장갑' → '손모아장갑')가
 *    차별 표현이 된다 — 국가인권위원회·한국장애인개발원.
 *  - ways-talk.*: 수어는 손·표정·몸으로 하는 하나의 언어 / 점자는 여섯 점의 자리로 글자를 나타냄 / 그림 소통판·자막의 쓰임 / 청각장애가 있는 사람과 말할 때
 *    얼굴을 마주 보고 입 모양을 보이며 천천히 말하기, 원하는 방법 먼저 묻기 / '고마워요·괜찮아요·같이 해요' 수어 동작 — 국립국어원 한국수어사전·한국장애인개발원.
 *  - design-all.*: 보편적 설계(유니버설 디자인)의 뜻과 예(턱 없는 출입구·경사로·자동문·손잡이 문·낮은 세면대·큰 글자 표지·점자 안내) / 모두가 편해지는 효과 —
 *    한국장애인개발원 유니버설 디자인 자료·국립특수교육원 통합교육 자료.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('word-check', 5)('intro.word-chart', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `disab.e56.${topic}.${suffix.replace(/^act\./, 'activity.')}`, schema: 'edu-module.v1', type: ({ intro: 'intro', act: 'activity', wrap: 'wrap' })[suffix.split('.')[0]],
    domain: 'disab', band: '초5-6', topic: `disab.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const inter = (slots, g) => { const out = []; const n = Math.max(0, ...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };

  // ---- 카드 판 문항 ----
  // 생각그물 나누기(mindmap sort): groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const take = (n) => Object.fromEntries(slots.map((s) => [s, groups[s].slice(0, n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = Object.assign(topic ? { topic } : {}, { slots, cards: inter(slots, groups) }); if (mode) base.mode = mode;
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
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 장면(카드 칸에 남겨야 함)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, mode } = {}, d, more) => {
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: ez.length === 2 ? [ez[1], ez[0]] : mix(ez) }, target: { order: ez } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(steps), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, { slots: steps.length, cards: mix(steps) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 짝 짓기(match): pairs = [[칸 이름, 맞는 카드]…]. 쉬움 = 앞 easy칸, 기본 = 앞 base칸, 도전 = 모든 칸. traps = 남는 카드
  const MAT = (prompt, pairs, traps = [], { easy = 2, base = 3, mode = 'match', topic } = {}, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `m${i + 1}`, label }));
    const cardsOf = (n) => { const c = pairs.slice(0, n).map(([, x]) => x).reverse(); c.splice(1, 0, ...traps); return c; };
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, x], i) => [`m${i + 1}`, x])) });
    const lv = { easy: { prompt: `${cut(prompt)}(칸 ${easy}개).`, toolOptions: { slots: sl.slice(0, easy), cards: cardsOf(easy) }, target: tg(easy) } };
    if (pairs.length > base) lv.challenge = { prompt: `${cut(prompt)}(칸 ${pairs.length}개).`, toolOptions: { slots: sl, cards: cardsOf(pairs.length) }, target: tg(pairs.length) };
    return Object.assign({ prompt, toolOptions: Object.assign({ mode }, topic ? { topic } : {}, { slots: sl.slice(0, base), cards: cardsOf(base) }), target: tg(base), difficulty: d, levels: lv }, more);
  };
  // 고르기(pick): good = 담을 카드, traps = 남길 카드. 쉬움 = good 앞 easy장 + 함정 easyTraps장, 도전 = extraTraps 더함
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], mode = 'pick', topic } = {}, d, more) => {
    const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };
    const o = Object.assign({ mode, basket }, topic ? { topic } : {}, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
  };

  // ---- 갈림길(dilemma) ----
  // steps[i] = { text, ask?, motif?, good: [id, 글, 결과, [[누구, 영향, tone]…]], alt?: (good 꼴 — 또 하나의 알맞은 길),
  //              bad: [id, 글, 결과, 틀렸을 때 한 문장, [[…]], 끝 글?], mid?: (bad 꼴 — 마음은 좋지만 덜 나은 길) }
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
  // 갈림길 문항 셋: ① 알맞은 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기) + extra
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude, extra = [] }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 알맞은 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: goodPaths(steps, 2), reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 알맞은 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: goodPaths(steps, 1), reasons: [good[0]], some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: goodPaths(steps, 3), reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
      ...extra,
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) ----
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 3개, 도전 = 기준 3개 + chCrit(꼭 넣을 낱말 must). sents = [쉬움, 기본, 도전] 최소 문장 수
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title, sents, chCrit = '한 군데 이상 고쳐 썼다', chPrompt }, d, more) => {
    const sn = (k) => (sents ? { sentences: [sents[k], 6] } : {});
    const ch = { prompt: chPrompt || `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: Object.assign({ selfCheck: [...crit.slice(0, 3), chCrit], chars: [chars[0] + 10, chars[1]] }, must ? { mustInclude: must } : {}, sn(2)) };
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
  // 막대그래프 읽기 시연(chart read). data = [[이름, 값]…]
  const CHART = (title, data, question, pick, { unit = '명', xLabel, yLabel } = {}) => ({
    tool: 'chart', options: Object.assign({ type: 'bar', mode: 'read', title, unit, data, question, choices: data.map((x) => x[0]) }, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}), sequence: [{ pick }],
  });
  // 정리: 콜라주 캠페인 판 — 쉬움 조각 2개·점검 2칸, 기본 조각 4개·점검 3칸, 도전 점검 4칸
  const COLX = (prompt, crit, { shapes = ['rect', 'square', 'triangle', 'circle', 'star', 'heart', 'semi', 'diamond'], colors = ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하양'] } = {}) => ({
    type: 'tool', tool: 'collage', options: { shapes, colors, maxPieces: 16 }, prompt, target: { selfCheck: crit.slice(0, 3), minPieces: 4 }, difficulty: 0.1,
    levels: {
      easy: { prompt: `${cut(prompt)}(조각 2개 이상).`, target: { selfCheck: crit.slice(0, 2), minPieces: 2 } },
      challenge: { prompt: `${cut(prompt)}(점검 네 칸).`, target: { selfCheck: crit.slice(0, 4), minPieces: 4 } },
    },
  });
  // 정리: 눈금 3칸 스스로 점검(emotion scale) — 어느 칸이든 맞음
  const SCALE3 = (prompt, situation) => ({
    type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직', 2: '조금', 3: '잘함' } }, prompt, target: { level: 'any' }, difficulty: 0.1,
  });
  // 칸 지도 장소
  const PL = (name, icon, at) => ({ name, icon, at });
  const MASK = '○○'; // 장애를 빗댄 말은 화면에 쓰지 않고 가린다

  // ======== 5학년 · 장애를 낮추는 말 점검하기 (research-mandatory §2 장애인식개선 초: 차별 말·행동 점검) ========
  {
    const X = mk('word-check', 5);
    M.push(
      X('intro.word-chart', {
        title: '우리 반 말 습관 그래프', method: '우리 반 말 습관 설문 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 3개(놀이·게임·온라인)만 짚어 가며 가장 긴 막대를 함께 찾는다.', base: '막대 4개(수업 시간 포함)를 스스로 읽고 가장 많이 들린 곳과 가장 적게 들린 곳을 말한다.', challenge: '막대 4개를 읽고, 온라인·게임에서 더 많이 들리는 까닭(빠른 말·얼굴이 안 보임)을 짝과 말한다.' },
        intro: {
          teacher: `"이 그래프는 지어낸 어느 반이 '장애를 빗댄 말을 들어 본 곳'을 손을 들어 센 가상 자료예요. 어디서 가장 많이 들렸을까요?" 시연 단추로 온라인 막대를 고르는 모습을 보인다. "그건 다들 쓰는 말이라 괜찮아요"라는 말이 나오면 "많이 쓰인다고 상처가 작아질까요? 그 말을 듣는 사람이 우리 반에 있을 수도 있어요"라고 되묻는다. 실제 말은 칠판에 쓰지 않고 '${MASK}'로 가린다고 먼저 약속한다. 학생에게 자기나 가족의 장애를 묻지 않는다.`,
          student: '그래프에서 장애를 빗댄 말이 가장 많이 들린 곳을 찾고, 왜 그곳에서 많이 들릴지 짝에게 한 문장으로 말해 보아요.',
          demo: CHART('장애를 빗댄 말을 들은 곳(가상)', [['놀이', 6], ['게임', 9], ['온라인', 12], ['수업', 2]], '가장 많이 들린 곳은?', 2, { xLabel: '곳', yLabel: '들은 학생 수' }),
          art: art('a paper bar chart with four bars beside paper speech bubbles covered by small paper patches, a classroom in soft pastel paper', '어디서 많이 들릴까?', 'cloud', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생에게 그런 말을 쓴 적·들은 적을 발표시키지 않고, 그래프 속 가상 반의 이야기로 다룬다.',
      }),
      X('intro.hidden-word', {
        title: '숨은 차별 말 찾기', method: '숨은 차별 말 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 말풍선 4장(차별 말 2장·괜찮은 말 2장)만 읽어 주고 함께 고른다.', base: '말풍선 6장을 스스로 읽고 장애를 빗댄 말 3장을 고른다.', challenge: '6장을 고른 뒤, 고른 말이 왜 차별이 되는지 한 줄 까닭(장애를 실수·못함에 빗댐)을 짝과 말한다.' },
        intro: {
          teacher: `"친구들 대화 말풍선 여섯 개 가운데 장애를 빗댄 말이 섞여 있어요. 어느 말일까요?" 시연 단추로 차별 말 카드가 바구니에 담기는 모습을 보인다. 실제 비하어는 '${MASK}'로 가렸다고 알려 준다. "장애인 들으라고 한 말이 아니니 괜찮아요"라는 말에는 "실수한 친구를 장애에 빗대면, 장애를 '못하는 것'으로 낮추는 뜻이 함께 퍼져요"라고 짚는다. '정상인 팀'이라는 말도 장애가 없는 쪽만 '정상'이라고 나누는 말이라 '비장애인'이 바른 짝말임을 알려 준다.`,
          student: '말풍선 여섯 개 가운데 장애를 빗댄 말이 섞인 카드를 골라 바구니에 담아 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '바꿔야 할 말', cards: [`"너 ${MASK}냐? 그것도 못 해?"`, '"괜찮아, 다시 해 보자"', `"${MASK}처럼 걷지 마"`, '"실수했네, 같이 하자"', '"정상인 팀 대 너희 팀"', '"천천히 해도 돼"'] }, sequence: [{ pick: [`"너 ${MASK}냐? 그것도 못 해?"`] }, { pick: [`"너 ${MASK}냐? 그것도 못 해?"`, `"${MASK}처럼 걷지 마"`, '"정상인 팀 대 너희 팀"'] }] },
          art: art('six pastel paper speech bubbles floating over a playground, three of them gently covered by small paper patches', '숨은 차별 말은?', 'star', 'peach'),
        },
        notes: `실제 장애 비하어·욕설은 화면·칠판에 쓰지 않는다('${MASK}'로 가림). 학생이 실제 말을 소리 내어 말하게 하지 않는다.`,
      }),
      X('act.cause-effect', {
        title: '말 한마디의 원인과 결과', method: '말 한마디의 원인과 결과', tool: 'story', minutes: 13,
        levels: { easy: '원인→결과 카드 2장(말 한마디 → 듣는 친구 마음)을 차례로 놓는다.', base: '카드 3장(말 → 듣는 친구 → 반 분위기)을 원인→결과 차례로 놓고, 둘째 문항에서 바꾼 말의 결과도 잇는다.', challenge: '카드 4장 차례에 끼어든 틀린 카드 하나를 빼고, 바꾼 말을 넣었을 때의 결과로 다시 잇는다.' },
        activity: {
          title: '말 한마디의 원인과 결과', tool: 'story',
          teacher: `"게임에서 진 서에게 누가 '너 ${MASK}이야?'라고 했어요. 그 말 다음에 무슨 일이 이어질까요?" 카드를 놓을 때마다 "~해서 → ~이 됐다"로 이어 말하게 한다. "서는 장애가 없으니 상처 안 받아요"라는 말에는 "옆에서 들은 친구 가운데 장애가 있는 친구·가족이 있는 친구는 어떨까요? 그리고 서도 '못한다'는 뜻으로 놀림 받았어요"라고 되묻는다. 둘째 문항에서 말을 바꾸면 결과도 바뀐다는 점을 짚는다.`,
          task: '말 한마디에서 시작해 듣는 친구의 마음, 반 분위기까지 원인→결과 차례로 카드를 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('빗댄 말 한마디가 반에 어떤 결과를 낳는지 차례로 놓아요.', [`"너 ${MASK}이야?" 한마디`, '서가 움츠러들어 말이 없음', '옆 친구도 따라 웃음', '반 분위기가 차가워짐'], { easy: [0, 1], trap: '모두 더 즐거워짐' }, 0.2),
            ORDER('말을 바꾸었을 때 이어지는 결과를 차례로 놓아요.', ['"괜찮아, 다시 해 보자" 한마디', '서가 다시 도전함', '옆 친구도 응원함', '반 분위기가 따뜻해짐'], { easy: [0, 1], trap: '서가 게임을 그만둠' }, 0.25,
              { conclude: '말 한마디가 듣는 친구, 옆 친구, 반 분위기까지 바꿔요. 장애를 빗대지 않는 말로 바꾸면 결과도 달라져요.' }),
            { prompt: '두 이야기의 결과가 어디서부터 갈렸는지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '장애를 빗댄 말이 반 분위기에 주는 결과 하나를 써요.' }] },
        notes: '인물 서는 지어낸 가명이다. 실제 비하어는 가려 쓰고, 학생에게 들은 경험을 묻지 않는다.',
      }),
      X('act.self-check', {
        title: '내 말 습관 자기 점검표', method: '내 말 습관 자기 점검표', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀을 보고 한 문장 이상 쓰고 점검 항목 2개를 표시한다.', base: '두 문장 이상 쓰고 점검 항목 3개를 표시한다.', challenge: '세 문장 이상 쓰고, 말을 바꾸면 달라질 점(\'달라\'·\'바뀌\'를 넣음)까지 써서 점검 항목 4개를 표시한다.' },
        activity: {
          title: '내 말 습관 점검', tool: 'rubric-writing',
          teacher: '"오늘은 남이 아니라 내 말 습관을 살펴요. 점검은 친구에게 보여 주지 않아도 돼요." 기준표를 함께 읽는다. "저는 그런 말 한 번도 안 써요"라는 학생에게 "좋아요. 그럼 친구가 쓸 때 내가 바꿔 줄 말을 써 볼까요?"라고 길을 열어 준다. 글에는 친구 실명을 쓰지 않고, 자기나 가족의 장애 여부도 쓰지 않는다고 미리 말한다. "다들 쓰는 말"이라는 변명에는 "많이 쓰일수록 더 많이 퍼진다"는 점을 짚는다.',
          task: '내 말 습관을 점검하고, 앞으로 바꿀 말 한 가지를 문장으로 써요(친구 이름은 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('내 말 습관에서 바꿀 말 하나와 대신 쓸 말을 써요', { topic: '실수한 친구에게 하던 말 가운데 바꿀 말과 대신 쓸 말을 써요(친구 이름·장애 여부는 쓰지 않아요).', starter: '나는 ___ 대신 ___라고 말하겠다.', crit: ['빗대는 말을 쓰지 않았다', '바른 이름으로 불렀다', '대신 쓸 말을 정했다'], must: [['달라', '바뀌']], chars: [20, 180], title: '내 말 습관 점검', sents: [1, 2, 3], chCrit: '바꾸면 달라질 점을 썼다', chPrompt: '바꿀 말과 대신 쓸 말을 쓰고, 바꾸면 달라질 점도 써요.' }, 0.2),
            RUB('바른 이름으로 부르는 문장을 써요', { topic: "'장애자·장애우·정상인' 대신 바른 말(장애인·비장애인)을 넣어 문장을 써요.", starter: '우리 반은 ___이라는 바른 말을 쓴다.', crit: ['장애인이라는 바른 말을 썼다', '비장애인이라는 짝말을 썼다', '낮추는 말을 쓰지 않았다'], must: ['비장애인'], chars: [15, 160], title: '바른 이름 쓰기', sents: [1, 2, 2], chCrit: '왜 바른 말인지 까닭을 썼다', chPrompt: '바른 말을 넣은 문장과 그 말이 바른 까닭을 써요.' }, 0.25,
              { conclude: "'장애인'이 바른 말이고, 장애가 없는 사람은 '정상인'이 아니라 '비장애인'이에요." }),
            { prompt: '짝에게 내가 바꿀 말 하나를 소리 내어 말해요(이름은 빼요).', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '장애가 없는 사람을 부르는 바른 말은?', options: ['정상인', '일반인', '비장애인'], answer: '비장애인' }] },
        notes: "학생이 쓴 글은 교사만 본다. 실명·장애 여부를 쓰지 않게 하고, 점검 결과로 학생을 평가하지 않는다. '장애우'는 당사자를 친구로만 묶어 권하지 않는 말이라 바른 말로 바로잡는다.",
      }),
      X('act.rewrite-group', {
        title: '모둠 토의: 대신 쓸 말 사전', method: '모둠 토의: 대신 쓸 말 사전', tool: 'mindmap', minutes: 13,
        levels: { easy: '가운데 "대신 쓸 말" 가지에 말 카드 3장을 담는다(빗대는 말 1장은 남긴다).', base: '말 카드 5장을 담고, 둘째 문항에서 게임·수업 상황 가지로 카드 4장을 나눈다.', challenge: '헷갈리는 카드가 섞인 판에서 5장을 담고, 둘째 문항에서 상황 가지로 카드 6장을 나눈다.' },
        activity: {
          title: '대신 쓸 말 사전', tool: 'mindmap',
          teacher: `"게임에서 졌을 때, 수업 중 친구가 틀렸을 때 '${MASK}' 대신 무슨 말을 할 수 있을까요?" 모둠마다 말 카드를 하나씩 소리 내어 읽고 가지에 붙이게 한다. "그냥 아무 말도 안 하면 되잖아요"라는 말에는 "말을 지우기만 하면 빈자리가 남아요. 대신 쓸 말이 있으면 바꾸기 쉬워요"라고 답한다. '벙어리장갑'처럼 굳은 비유도 '손모아장갑'처럼 바꿀 수 있다는 예를 든다.`,
          task: '"대신 쓸 말" 생각그물에 빗대는 말을 바꾼 표현을 모아 우리 모둠 말 사전을 만들어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            PICK('빗대는 말 대신 쓸 말만 골라 "대신 쓸 말" 가지에 담아요.', '대신 쓸 말', ['"실수했네, 괜찮아"', '"다시 해 보자"', '"같이 방법 찾자"', '"천천히 해도 돼"', '"좋은 시도였어"'], [`"${MASK} 같아"`, '"정상인처럼 해 봐"'], { easy: 3, easyTraps: 1, extraTraps: ['"벙어리장갑 줘"'], topic: '대신 쓸 말' }, 0.2),
            SORT('대신 쓸 말을 쓰기 좋은 상황 가지에 나누어요.', { topic: '대신 쓸 말', slots: ['게임할 때', '수업할 때'], groups: { '게임할 때': ['"다음 판엔 같이 하자"', '"좋은 시도였어"'], '수업할 때': ['"틀려도 괜찮아"', '"같이 다시 풀어 보자"'] }, easy: 1, extra: { '게임할 때': ['"한 골 차였어, 아깝다"'], '수업할 때': ['"천천히 말해도 돼"'] } }, 0.25,
              { conclude: '빗대는 말 대신 쓸 말을 정해 두면 상황마다 바로 바꿔 말할 수 있어요.' }),
            { prompt: '모둠이 새로 만든 대신 쓸 말 하나를 반에 소개해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '바꾼 말을 써요.', text: '벙어리장갑 → ___장갑', answer: '손모아' }] },
        notes: `가린 말('${MASK}')은 실제 말로 채워 읽지 않는다. 카드 한 장의 정답 가지는 하나라, 두 상황에 다 쓰이는 말은 셋째 말하기 문항에서 다룬다.`,
      }),
      X('act.online-dilemma', {
        title: '단체 대화방에서 본 차별 말', method: '단체 대화방에서 본 차별 말', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(모른 척·웃음 표시·바꾸자 말하기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("장애인 들으라고 한 말 아냐")을 지나 근거를 고른다.', challenge: '갈림 3번(다음 날 같은 말이 또 올라옴)까지 끝까지 가고, 근거 세 장을 모두 고른 뒤 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 대화방의 차별 말', tool: 'dilemma',
          teacher: `"반 단체 대화방에 누가 진의 실수를 '${MASK} 같다'고 빗대어 올렸어요. 나는 어떻게 할까요?" 고를 때마다 결과와 영향을 소리 내어 읽게 한다. "장애인을 놀린 게 아니니 괜찮아요"라는 말에는 "장애를 '못하는 것'에 빗대면, 그 대화방을 읽는 모든 사람에게 장애를 낮추는 뜻이 함께 퍼져요"라고 되묻는다. 말을 바꾸자고 한 친구는 잘한 것이고, 혼자 어렵다면 어른께 알리는 것도 좋은 길이라고 짚는다. 올린 친구를 '나쁜 아이'로 부르지 않고 그 말을 바꾸게 한다.`,
          task: '대화방에서 본 차별 말 앞에서 갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '대화방에 올라온 빗댄 말',
            steps: [
              { text: `반 단체 대화방에 누가 진의 실수를 '${MASK} 같다'고 빗대어 올렸어요. 웃음 표시가 하나 달렸어요.`, motif: 'house',
                good: ['change', '"그 말은 바꾸자"라고 쓴다', '대화방이 잠깐 조용해져요.', [['진', '편이 있다고 느껴요', 1], ['대화방 친구들', '말을 돌아봐요', 1]]],
                bad: ['emoji', '나도 웃음 표시를 단다', '웃음 표시가 늘고 비슷한 말이 더 올라와요.', '웃음 표시도 그 말을 키우는 행동이에요.', [['진', '더 움츠러들어요', -1]]],
                mid: ['ignore', '못 본 척 넘어간다', '말이 그대로 남아 다른 친구들도 읽어요.', '모른 척하면 그 말이 괜찮다는 신호가 될 수 있어요.', [['진', '혼자라고 느껴요', -1]]] },
              { text: '올린 친구가 "장애인 들으라고 한 말 아냐, 왜 그래?"라고 답해요.', motif: 'cloud',
                good: ['explain', '"빗댄 말도 장애를 낮추는 뜻이 돼"라고 쓴다', '올린 친구가 "그렇게는 생각 못 했네" 해요.', [['올린 친구', '말을 바꿀 기회를 얻어요', 1]]],
                bad: ['agree', '"하긴, 그렇지" 하고 넘어간다', '다음 날 비슷한 말이 또 올라와요.', '겨냥한 사람이 없어도 빗댄 말은 차별이 돼요. 까닭을 말해 줘요.', [['진', '다시 걱정돼요', -1]]] },
              { text: '다음 날 다른 친구가 같은 말을 또 올렸어요.', motif: 'sun',
                good: ['adult', '선생님께 알리고 반 대화 약속을 정하자고 한다', '반이 함께 대화방 말 약속을 정해요.', [['반 친구들', '같은 약속을 지켜요', 1], ['진', '마음이 놓여요', 1]]],
                bad: ['leave', '조용히 대화방을 나간다', '나는 안 보지만 말은 계속 남아요.', '나가는 것만으로는 말이 바뀌지 않아요. 어른과 함께 약속을 정해요.', [['진', '편이 줄어요', -1]]] },
            ],
            ending: '말을 바꾸자고 하고 반 약속을 정한 덕분에 대화방에서 빗댄 말이 줄었어요.',
            reasons: [
              { id: 'lower', text: '빗댄 말은 장애를 낮추는 뜻이 퍼진다' },
              { id: 'spread', text: '대화방 말은 빠르게 퍼지고 남는다' },
              { id: 'change', text: '말은 바꿀 수 있고 바꾸자는 말도 용기다' },
              { id: 'all', text: '다들 쓰는 말이면 괜찮다', why: '많이 쓰인다고 상처가 작아지지는 않아요.' },
              { id: 'notarget', text: '장애인을 겨냥한 게 아니니 상관없다', why: '겨냥한 사람이 없어도 장애를 낮추는 뜻은 그대로 퍼져요.' },
            ],
            good: ['lower', 'spread', 'change'],
            talk: '모둠에서 대화방에 쓸 "말 바꾸자" 문장을 하나 정해 말해요.',
            conclude: '장애를 빗댄 말은 겨냥한 사람이 없어도 차별이 돼요. 바꾸자고 말하고, 혼자 어려우면 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '대화방에서 빗댄 말을 보았을 때 쓸 한 문장을 써요.' }] },
        notes: '실제 앱 이름은 쓰지 않는다. 인물 진은 지어낸 가명이다. 웃음 표시를 단 행동도 \'그 행동\'으로 바로잡고 학생을 탓하지 않는다.',
      }),
      X('wrap.plan', {
        title: '일주일 말 바꾸기 실천 계획', method: '일주일 말 바꾸기 실천 계획', tool: 'clock', minutes: 6,
        levels: { easy: '정각만 움직이는 시계로 두 시각(쉬는 시간 11시·게임 시간 3시)을 맞추고 점검할 날을 고른다.', base: '10분 눈금 시계로 두 시각(10시 40분·3시 30분)을 맞추고 점검할 날을 고른다.', challenge: '5분 눈금 시계로 두 시각(10시 45분·3시 35분)을 맞추고, 점검할 날과 실천 약속을 함께 고른다.' },
        wrap: {
          teacher: '"지어낸 우리 반 시간표(가상)에서 바꾼 말을 꼭 써 볼 때를 두 번 정해 볼까요? 쉬는 시간과 게임하는 체육 시간이에요." 시계를 맞춘 뒤 "왜 이 두 때를 골랐을까요? 앞에서 본 그래프에서 어디서 말이 많이 나왔나요?"라고 묻는다. "일주일 내내 다 지킬 수 있을까요?"라는 걱정에는 "다 지키는 것보다 점검하는 날을 정해 다시 보는 게 중요해요"라고 말해 준다. 실천 약속은 자기만 알아도 된다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 10, showDigital: false }, prompt: '바꾼 말을 꼭 써 볼 쉬는 시간(10시 40분)을 시계에 맞춰요.', target: { h: 10, m: 40 }, difficulty: 0.15,
              levels: { easy: { prompt: '바꾼 말을 꼭 써 볼 쉬는 시간(11시)을 시계에 맞춰요.', toolOptions: { hourOnly: true }, target: { h: 11, m: 0 } }, challenge: { prompt: '바꾼 말을 꼭 써 볼 쉬는 시간(10시 45분)을 시계에 맞춰요.', toolOptions: { minuteStep: 5 }, target: { h: 10, m: 45 } } } },
            { type: 'tool', tool: 'clock', options: { minuteStep: 10, showDigital: false }, prompt: '바꾼 말을 꼭 써 볼 게임 시간(3시 30분)을 시계에 맞춰요.', target: { h: 3, m: 30 }, difficulty: 0.15,
              levels: { easy: { prompt: '바꾼 말을 꼭 써 볼 게임 시간(3시)을 시계에 맞춰요.', toolOptions: { hourOnly: true }, target: { h: 3, m: 0 } }, challenge: { prompt: '바꾼 말을 꼭 써 볼 게임 시간(3시 35분)을 시계에 맞춰요.', toolOptions: { minuteStep: 5 }, target: { h: 3, m: 35 } } } },
            { type: 'choice', prompt: '일주일 실천을 점검하기에 알맞은 때는?', options: ['점검하지 않는다', '금요일 끝날 때 스스로 돌아본다', '한 달 뒤에 한 번'], answer: 1, difficulty: 0.15, explain: '일주일 실천은 한 주가 끝날 때 바로 돌아보면 고칠 점이 잘 보여요.' },
          ],
        },
        worksheet: {
          title: '일주일 말 바꾸기',
          items: [
            { type: 'table', prompt: '바꾼 말을 써 볼 때와 쓸 말을 적어요.', columns: ['때', '대신 쓸 말'], cells: [['쉬는 시간', ''], ['게임 시간', ''], ['대화방', '']] },
            { type: 'check', prompt: '실천 약속에 표시해요.', options: ['빗대는 말을 쓰지 않기', '바른 말로 부르기', '친구 말도 바꾸자고 하기'] },
          ],
          easy: { note: '"실수했네, 괜찮아"로 바꿔 말해요.', items: [{ type: 'short', prompt: '쉬는 시간에 쓸 대신 쓸 말을 써요.' }] },
        },
        notes: '시각은 지어낸 가상 시간표다. 시계는 한 판에 한 시각이라 두 때를 출구 질문 둘로 나눴다.',
      }),
      X('wrap.pledge-poster', {
        title: '바른 말 캠페인 띠', method: '바른 말 캠페인 띠', tool: 'collage', minutes: 6,
        levels: { easy: '조각 2개 이상으로 띠를 꾸미고 점검 2칸을 표시한다.', base: '조각 4개 이상으로 띠를 꾸미고 점검 3칸(구호 자리 포함)을 표시한다.', challenge: '조각 4개 이상, 점검 4칸(반 친구 응원 칸 포함)을 표시한다.' },
        wrap: {
          teacher: '"교실 문에 붙일 \'빗대지 말고 바르게\' 띠를 만들어요." 콜라주는 글자를 붙이지 못하니 조각으로 띠를 꾸미고 구호는 활동지에 쓴 뒤 오려 붙이게 한다. "불쌍한 사람을 돕자"처럼 쓰려는 모둠에게 "장애인은 불쌍한 사람이 아니라 같은 반, 같은 동네 사람이에요. \'함께\'·\'바른 말\'로 써 볼까요?"라고 바로잡는다. 띠에 반 친구 응원 칸을 더하는 모둠은 긴 네모 조각으로 칸을 만든다.',
          exitTicket: [
            COLX('"빗대지 말고 바르게" 캠페인 띠를 꾸며요.', ['띠를 긴 네모 조각으로 만들었다', '구호 자리를 비워 두었다', '보는 사람이 기분 좋은 색을 골랐다', '반 친구 응원 칸을 더했다']),
            { type: 'choice', prompt: '캠페인 띠에 쓰기 알맞은 구호는?', options: ['"불쌍한 친구를 도와요"', '"빗대지 말고 바르게 불러요"', '"정상인이 도와줘요"'], answer: 1, difficulty: 0.15, explain: '장애인을 불쌍한 사람으로 그리지 않고, 바른 말을 쓰자는 구호가 알맞아요.' },
          ],
        },
        worksheet: {
          title: '바른 말 캠페인',
          items: [
            { type: 'short', prompt: '캠페인 띠에 쓸 구호를 써요.' },
            { type: 'choice', prompt: '바른 말은?', options: ['장애자', '장애인', '정상인'], answer: '장애인' },
          ],
          easy: { note: '"빗대지 말고 바르게"를 따라 써요.', items: [{ type: 'draw', prompt: '캠페인 띠를 그려요.' }] },
        },
        notes: '콜라주는 글자를 붙이지 못한다. 구호는 활동지에 써서 오려 붙인다.',
      }),
    );
  }

  // ======== 5학년 · 다양한 의사소통 방법 (research-mandatory §2 장애인식개선 초: 장애 이해와 배려 — 수어·점자는 일반 개념 수준) ========
  {
    const X = mk('ways-talk', 5);
    const DOT = 'circle:ink'; const EMP = 'circle:cream';
    M.push(
      X('intro.ways-mind', {
        title: '말 말고 소통하는 방법', method: '말 말고 소통하는 방법 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 3개(손짓·글·그림)를 먼저 붙여 보이고 학생은 뜻을 말한다.', base: '가지 5개(수어·점자·그림 소통판·자막·표정)를 함께 떠올려 붙인다.', challenge: '가지를 붙인 뒤 각 방법이 편한 상황(시끄러운 곳·눈으로 보기 어려울 때)을 하나씩 덧붙여 말한다.' },
        intro: {
          teacher: '"우리는 말 말고도 어떻게 생각을 나눌까요?" 가운데 \'소통\'에서 가지가 하나씩 붙는 시연을 보인다. "말로 하지 않으면 제대로 된 소통이 아니에요"라는 말이 나오면 "수어는 손과 표정으로 하는 하나의 언어예요. 글이나 점자로도 생각을 다 나눌 수 있지요"라고 바로잡는다. 오늘은 상대가 편한 방법으로 소통하는 법을 배운다고 밝힌다.',
          student: '말 말고도 생각을 나누는 방법을 떠올려, 가운데 "소통"에서 가지를 이어 보아요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', topic: '소통하는 방법', basket: '소통하는 방법', cards: ['수어', '점자', '그림 소통판', '자막', '표정·몸짓', '글로 쓰기'] }, sequence: [{ pick: ['수어', '글로 쓰기'] }, { pick: ['수어', '점자', '그림 소통판', '자막', '표정·몸짓', '글로 쓰기'] }] },
          art: art('a paper mind map with a center circle and branches showing paper hands, a dotted card, a picture board and a subtitle strip', '말 말고도 통해요', 'star', 'mint'),
        },
      }),
      X('intro.braille-dot', {
        title: '점자 점 무늬 규칙 보기', method: '점자 점 무늬 규칙 보기', tool: 'pattern', minutes: 6,
        levels: { easy: '교사가 무늬 3개(점이 하나씩 늘어나는 줄)를 손으로 짚어 읽어 주고 다음 무늬를 함께 고른다.', base: '무늬 줄을 스스로 보고 다음 줄에 찍힐 점 자리를 말한다.', challenge: '두 무늬를 견주어 다른 점 자리를 짚고, 점 하나만 달라도 뜻이 달라진다는 점을 말한다.' },
        intro: {
          teacher: '"점자는 여섯 점 칸에서 어느 자리에 점이 찍혔는지로 글자를 나타내요. 이 줄은 한 칸의 여섯 자리를 한 줄로 펼친 연습 무늬예요." 검은 점은 찍힌 자리, 흰 점은 빈 자리라고 알려 주고, 시연 단추로 다음 줄이 채워지는 모습을 보인다. 이 무늬는 실제 글자가 아니라 규칙 연습이라고 밝히고, 준비한 실제 점자 카드(엘리베이터 버튼 등 사진)를 함께 보인다. "점자는 눈이 안 보이는 사람만 쓰는 신기한 것"이라는 말에는 "손으로 읽는 글자예요. 우리가 눈으로 읽는 것과 같은 글이지요"라고 답한다.',
          student: '여섯 점 줄에서 검은 점이 어떻게 늘어나는지 규칙을 찾아, 다음 줄에 찍힐 점을 말해 보아요.',
          demo: { tool: 'pattern', options: { mode: 'fill', perRow: 6, seq: [DOT, EMP, EMP, EMP, EMP, EMP, DOT, DOT, EMP, EMP, EMP, EMP, DOT, DOT, DOT, EMP, EMP, EMP, null, null, null, null, EMP, EMP], palette: [DOT, EMP] }, sequence: [{ fill: [DOT, DOT, DOT, DOT] }] },
          art: art('a paper card with raised dots arranged in small six-dot cells, a paper hand gently touching the dots', '손으로 읽는 글자', 'star', 'lavender'),
        },
        notes: '연습 무늬는 실제 점자 글자가 아니다. 실제 점자는 교사가 사진·카드로 보인다.',
      }),
      X('act.sign-follow', {
        title: '수어 낱말 동작 익히기', method: '수어 낱말 동작 익히기', tool: 'timer', minutes: 13,
        levels: { easy: '따라 하기 15초 한 번(낱말 1개 "고마워요")으로 타이머를 맞추고 연습 차례 카드 3장을 놓는다.', base: '따라 하기 15초·쉬기 5초를 세 번(낱말 3개)으로 맞추고 연습 차례 카드 4장을 놓는다.', challenge: '세 번 연습을 맞춘 뒤 점검 칸에 짝과 세 낱말로 짧은 대화를 했는지까지 표시한다.' },
        activity: {
          title: '수어 낱말 따라 하기', tool: 'timer',
          teacher: '"\'고마워요·괜찮아요·같이 해요\'를 수어로 해 볼까요?" 교사가 한국수어사전 영상이나 직접 동작으로 낱말마다 보이고, 타이머 15초 동안 반 전체가 따라 한다. "수어는 손만 움직이면 돼요"라는 말에는 "수어는 표정도 뜻을 나르는 언어예요. \'괜찮아요\'는 얼굴도 편하게 해 볼까요?"라고 짚는다. 수어를 장난처럼 흉내 내지 않고 하나의 언어로 존중해 배운다고 말한다.',
          task: '수어 낱말 세 개를 15초씩 따라 하도록 타이머를 맞추고, 연습 차례를 정해 짝과 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '따라 하기 15초, 쉬기 5초를 세 번 하도록 타이머를 맞춰요.', toolOptions: { title: '수어 따라 하기', labels: ['따라하기', '쉬기'], plan: { work: 10, rest: 10, rounds: 1 }, showTotal: true }, target: { plan: { work: 15, rest: 5, rounds: 3 } }, difficulty: 0.15,
              levels: { easy: { prompt: '"고마워요"를 15초 따라 하도록 한 번만 맞춰요.', target: { plan: { work: 15, rounds: 1 } }, toolOptions: { plan: { work: 10, rest: 10, rounds: 2 } } } } },
            { prompt: '수어 연습 차례대로 카드를 놓아요.', toolOptions: { title: '수어 연습 차례', cards: ['짝과 마주 보고 하기', '선생님 동작 보기', '뜻을 말하며 하기', '천천히 따라 하기'] }, target: { order: ['선생님 동작 보기', '천천히 따라 하기', '뜻을 말하며 하기', '짝과 마주 보고 하기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '수어 연습 차례대로 카드 세 장을 놓아요.', toolOptions: { cards: ['뜻을 말하며 하기', '선생님 동작 보기', '천천히 따라 하기'] }, target: { order: ['선생님 동작 보기', '천천히 따라 하기', '뜻을 말하며 하기'] } } },
              conclude: '수어는 손과 표정으로 뜻을 나누는 하나의 언어예요. 천천히 보고 따라 하면 누구나 배울 수 있어요.' },
            { prompt: '수어 연습에서 해낸 것에 스스로 표시해요.', toolOptions: { title: '수어 연습 점검' }, target: { selfCheck: ['손 모양을 따라 했다', '표정도 함께 했다', '뜻을 알고 했다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '수어 연습에서 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['손 모양을 따라 했다', '뜻을 알고 했다'] } }, challenge: { prompt: '수어 연습에서 해낸 것에 스스로 표시해요(네 칸).', target: { selfCheck: ['손 모양을 따라 했다', '표정도 함께 했다', '뜻을 알고 했다', '짝과 세 낱말로 대화했다'] } } } },
            { prompt: '짝과 "같이 해요" "고마워요"를 수어로 주고받아요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '수어에 대해 바른 말은?', options: ['손짓 놀이다', '손·표정으로 하는 하나의 언어다', '말보다 부족하다'], answer: '손·표정으로 하는 하나의 언어다' }] },
        notes: '화면은 수어 동작을 보여 주지 못한다. 교사가 국립국어원 한국수어사전 영상이나 직접 동작으로 보인다. 타이머는 연습 시간을 맞추는 판이다.',
      }),
      X('act.board-make', {
        title: '그림 소통판 만들기', method: '그림 소통판 만들기', tool: 'collage', minutes: 14,
        levels: { easy: '네모 칸 4개(물·화장실·도와줘·잠깐)를 붙이고 점검 2칸을 표시한다.', base: '네모 칸 6개를 붙이고 칸마다 뜻을 정해 점검 3칸을 표시한다.', challenge: '네모 칸 8개(모둠 활동용 차례·생각 중 칸 더함)를 붙이고 점검 4칸을 표시한다.' },
        activity: {
          title: '그림 소통판 만들기', tool: 'collage',
          teacher: '"말로 하기 어려운 순간에 손가락으로 짚기만 하면 뜻이 통하는 판을 만들어요." 네모 조각 하나가 한 칸이고, 칸마다 무슨 뜻인지(물·화장실·도와줘·잠깐) 정해 활동지에 그림을 그리게 한다. "이건 말 못 하는 사람만 쓰는 거예요"라는 말에는 "처음 온 친구, 목이 아픈 날, 시끄러운 곳에서도 누구나 쓸 수 있어요"라고 답한다. 색을 칸마다 다르게 하면 찾기 쉽다는 점을 짚는다.',
          task: '네모 칸을 붙여 누구나 짚기만 하면 뜻이 통하는 그림 소통판을 만들고, 칸마다 뜻을 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '네모 칸 6개로 그림 소통판을 만들어요.', toolOptions: { shapes: ['square', 'rect', 'circle', 'star', 'heart'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하양'], maxPieces: 16 }, target: { has: [{ shape: 'square', min: 6 }], selfCheck: ['칸마다 뜻을 정했다', '칸 색을 다르게 했다', '누구나 짚기 쉽게 크게 했다'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '네모 칸 4개로 그림 소통판을 만들어요.', target: { has: [{ shape: 'square', min: 4 }], selfCheck: ['칸마다 뜻을 정했다', '칸 색을 다르게 했다'] } },
                challenge: { prompt: '네모 칸 8개로 모둠용 칸까지 넣은 소통판을 만들어요.', target: { has: [{ shape: 'square', min: 8 }], selfCheck: ['칸마다 뜻을 정했다', '칸 색을 다르게 했다', '누구나 짚기 쉽게 크게 했다', '차례·생각 중 칸을 더했다'] } },
              } },
            { prompt: '소통판 칸을 크게(l) 붙여 멀리서도 짚기 쉽게 해요.', toolOptions: { shapes: ['square', 'circle'], colors: ['노랑', '초록', '파랑', '분홍'], sizes: ['s', 'm', 'l'], maxPieces: 10 }, target: { has: [{ shape: 'square', size: 'l', min: 3 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '소통판 칸을 크게(l) 2개 붙여요.', target: { has: [{ shape: 'square', size: 'l', min: 2 }] } } },
              conclude: '그림 소통판은 말로 하기 어려운 사람뿐 아니라 누구나 쓸 수 있는 소통 방법이에요.' },
            { prompt: '짝에게 소통판을 짚어 "물 마시고 싶어"를 전해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '소통판 칸 하나(물·화장실·도와줘·잠깐 가운데)에 들어갈 그림을 그려요.' }] },
        notes: '콜라주는 그림·글자를 붙이지 못한다. 네모 조각 하나를 한 칸으로 정하고, 칸의 그림은 활동지에 그려 오려 붙인다.',
      }),
      X('act.caption-case', {
        title: '자막이 있을 때와 없을 때', method: '자막이 있을 때와 없을 때', tool: 'chart', minutes: 13,
        levels: { easy: '막대 2개(소리만·소리와 자막)에 값이 보이는 그래프를 읽는다.', base: '막대 4개(조용한 교실·시끄러운 교실 × 자막 없음·있음)를 읽고 차이를 수로 쓴다.', challenge: '막대 4개를 값 없이 읽고, 자막이 모두에게 도움이 되는 까닭을 고른다.' },
        activity: {
          title: '자막 그래프 읽기', tool: 'chart',
          teacher: '"지어낸 학교에서 같은 영상을 볼 때 자막이 있으면 이해했다는 학생이 얼마나 달라졌는지 센 가상 자료예요." 막대를 읽은 뒤 "자막은 누구에게 도움이 될까요?"라고 묻는다. "자막은 청각장애가 있는 사람만 필요해요"라는 말에는 "시끄러운 교실 막대를 보세요. 자막이 있으면 소리가 잘 안 들릴 때 누구나 도움을 받아요"라고 되묻는다. 수치는 가상이라고 꼭 밝힌다.',
          task: '자막이 있을 때와 없을 때 영상 내용을 이해한 학생 수(가상) 그래프를 읽고, 자막이 누구에게 도움이 되는지 말해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '영상 내용을 이해한 학생이 가장 많은 경우를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '영상 내용을 이해한 학생 수(가상)', unit: '명', xLabel: '보는 방법', yLabel: '학생 수', data: [['조용·소리만', 15], ['조용·소리+자막', 22], ['시끄러움·소리만', 6], ['시끄러움·소리+자막', 20]], question: '가장 많이 이해한 경우는?', choices: ['조용·소리만', '조용·소리+자막', '시끄러움·소리만', '시끄러움·소리+자막'] }, target: { pick: 1 }, difficulty: 0.15,
              levels: { easy: { prompt: '자막이 있을 때와 없을 때 가운데 더 많이 이해한 쪽을 골라요.', toolOptions: { data: [['소리만', 15], ['소리+자막', 22]], choices: ['소리만', '소리+자막'] }, target: { pick: 1 } } } },
            { prompt: '시끄러운 교실에서 자막이 있을 때 몇 명 더 이해했는지 수로 써요.', toolOptions: { type: 'bar', mode: 'read', title: '영상 내용을 이해한 학생 수(가상)', unit: '명', xLabel: '보는 방법', yLabel: '학생 수', data: [['조용·소리만', 15], ['조용·소리+자막', 22], ['시끄러움·소리만', 6], ['시끄러움·소리+자막', 20]], question: '시끄러운 교실에서 자막이 있을 때 몇 명 더 이해했나요?' }, target: { value: 14 }, difficulty: 0.25,
              levels: { easy: { prompt: '자막이 있을 때 몇 명 더 이해했는지 수로 써요.', toolOptions: { data: [['소리만', 15], ['소리+자막', 22]], question: '자막이 있을 때 몇 명 더 이해했나요?' }, target: { value: 7 } } } },
            { prompt: '그래프를 보고 자막이 도움이 되는 사람을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '영상 내용을 이해한 학생 수(가상)', unit: '명', xLabel: '보는 방법', yLabel: '학생 수', data: [['조용·소리만', 15], ['조용·소리+자막', 22], ['시끄러움·소리만', 6], ['시끄러움·소리+자막', 20]], question: '자막은 누구에게 도움이 될까요?', choices: ['청각장애가 있는 사람만', '소리가 잘 안 들릴 때 누구나', '아무에게도 도움이 안 된다'] }, target: { pick: 1 }, difficulty: 0.2,
              conclude: '자막은 청각장애가 있는 사람에게 꼭 필요하고, 시끄러운 곳에 있는 누구에게나 도움이 돼요.' },
            { prompt: '우리 반에서 자막이 있으면 좋을 때를 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '자막이 모두에게 도움이 되는 까닭을 한 문장으로 써요.' }] },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('act.match-way', {
        title: '상황과 소통 방법 짝 짓기', method: '상황과 소통 방법 짝 짓기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 상황 바구니에 넣고, 틀리면 바로 까닭을 듣고 되돌아오며 장 수가 보인다.', base: '상황 3개(시끄러운 운동장·청각장애가 있는 친구와 모둠·처음 만난 외국 친구)에 카드 6장을 넣는다.', challenge: '한 상황에 방법을 두 가지씩 넣고, 넣지 않을 함정 카드는 남긴다(카드 9장).' },
        activity: {
          title: '상황에 알맞은 소통 방법', tool: 'sortboard',
          teacher: '"상황마다 가장 잘 통하는 방법은 달라요. 이 카드는 어느 상황에 가장 잘 맞을까요?" 카드를 넣기 전에 반 전체가 그 방법을 몸으로 짧게 해 본다. "청각장애가 있는 친구에게는 큰 소리로 말하면 돼요"라는 말에는 "소리를 키우기보다 얼굴을 마주 보고 입 모양을 보이거나, 친구가 편한 방법을 먼저 물어요"라고 바로잡는다. 친구마다 편한 방법이 다르니 늘 먼저 묻는다는 점을 짚는다.',
          task: '상황 바구니에 그 상황에서 가장 잘 통하는 소통 방법 카드를 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('소통 방법 카드를 가장 잘 맞는 상황 바구니에 넣어요.', { slots: ['시끄러운 운동장', '청각장애 친구와 모둠', '처음 만난 외국 친구'], groups: { '시끄러운 운동장': ['손 신호를 정해 쓰기'], '청각장애 친구와 모둠': ['편한 방법 먼저 묻기'], '처음 만난 외국 친구': ['쉬운 낱말과 그림 쓰기'] }, easy: 3,
              extra: { '시끄러운 운동장': ['가까이 가서 손짓하기'], '청각장애 친구와 모둠': ['모둠 말을 글로 띄우기'], '처음 만난 외국 친구': ['친구 말 인사 배우기'] }, traps: ['큰 소리로 소리치기', '말이 안 통하니 빼기'] }, 0.2),
            SB('도와줄 때의 말을 알맞은 바구니에 나누어요.', { slots: ['먼저 묻는 말', '혼자 정하는 말'], groups: { '먼저 묻는 말': ['"어떤 방법이 편해?"', '"글로 쓸까, 말로 할까?"'], '혼자 정하는 말': ['"내가 다 해 줄게"', '"넌 그냥 앉아 있어"'] }, easy: 2 }, 0.2,
              { conclude: '상황마다 잘 통하는 방법이 다르고, 사람마다 편한 방법도 달라요. 먼저 물어보고 그 방법으로 소통해요.' }),
            { prompt: '두 상황에 다 쓸 수 있는 방법 하나를 모둠에서 찾아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구에게 편한 소통 방법을 물을 때 쓸 말을 써요.' }] },
        notes: '카드 한 장의 정답 바구니는 하나라, 여러 상황에 두루 맞는 방법(글로 쓰기 등)은 셋째 말하기 문항에서 다룬다. 같은 반 청각장애 학생이 있으면 그 학생을 예로 들지 않는다.',
      }),
      X('wrap.way-check', {
        title: '나의 소통 점검 눈금', method: '나의 소통 점검표', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 첫 두 항목(편한 방법 묻기·천천히 말하기)만 읽어 주고 눈금을 표시하게 한다.', base: '세 항목 눈금(1~3)을 스스로 표시한다.', challenge: '세 항목을 표시한 뒤, 가장 낮게 표시한 항목에서 더 해 볼 방법 하나를 활동지에 쓰고 까닭을 말한다.' },
        wrap: {
          teacher: '"오늘 배운 소통 방법을 나는 얼마나 할 수 있을까요? 눈금 세 칸 가운데 지금 내 모습에 표시해요." 점검은 잘하고 못함을 가리는 것이 아니라 다음에 해 볼 것을 찾는 것이라고 말해 준다. "저는 다 3이에요"라는 학생에게 "그럼 친구에게 알려 줄 방법을 하나 골라 볼까요?"라고 묻는다. 학생에게 자기·가족의 장애를 말하게 하지 않는다.',
          exitTicket: [
            SCALE3('"편한 방법을 먼저 물었다"에 지금 내 모습을 표시해요.', '상대가 편한 방법을 먼저 물어요'),
            SCALE3('"천천히 또박또박 말했다"에 지금 내 모습을 표시해요.', '얼굴을 보며 천천히 또박또박 말해요'),
            SCALE3('"말 말고 다른 방법도 썼다"에 지금 내 모습을 표시해요.', '글·그림·몸짓으로도 소통해요'),
            { type: 'choice', prompt: '상대가 편한 소통 방법을 모를 때 먼저 할 일은?', options: ['내 방법대로 한다', '어떤 방법이 편한지 묻는다', '소통을 포기한다'], answer: 1, difficulty: 0.1, explain: '사람마다 편한 방법이 달라요. 먼저 물어보고 그 방법으로 소통해요.' },
          ],
        },
        worksheet: {
          title: '나의 소통 점검',
          items: [
            { type: 'check', prompt: '오늘 할 수 있게 된 것에 표시해요.', options: ['편한 방법 묻기', '천천히 말하기', '수어 인사', '그림 소통판'] },
            { type: 'short', prompt: '다음에 더 해 볼 소통 방법과 까닭을 써요.' },
          ],
          easy: { note: '"어떤 방법이 편해?" 하고 먼저 물어요.', items: [{ type: 'draw', prompt: '친구와 그림이나 손짓으로 소통하는 모습을 그려요.' }] },
        },
      }),
      X('wrap.sign-song', {
        title: '수어 노래 한 소절', method: '수어 노래 한 소절', tool: 'keyboard', minutes: 6,
        levels: { easy: '"함께 가요" 끝 세 음만 듣고 따라 치고, 건반에 계이름이 보인다.', base: '"함께 가요" 한 줄 가락(여섯 음)을 듣고 따라 친 뒤, 끝에 반 전체가 "같이 해요" 수어 동작을 붙인다.', challenge: '가락을 친 뒤 "도"로 끝나는 네 음을 지어 붙이고, 모둠이 새 동작 하나를 더한다.' },
        wrap: {
          teacher: '"\'함께 가요, 같이 해요\' 노래를 먼저 불러 줄게요." 가락 듣기로 한 번 들려준 뒤 따라 치게 한다. 다 치면 반 전체가 일어나 마지막에 아까 배운 "같이 해요" 수어 동작을 붙인다. 동작을 우스꽝스럽게 흉내 내는 학생에게 "수어는 누군가의 언어예요. 또박또박, 표정과 함께 해 봐요"라고 말해 준다. 소리는 건반을 누를 때만 난다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['미', '미', '솔', '솔', '레', '도'] }, prompt: '"함께 가요, 같이 해요" 가락을 듣고 따라 쳐요.', target: { notes: ['미', '미', '솔', '솔', '레', '도'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '"같이 해요" 끝 세 음을 듣고 따라 쳐요.', toolOptions: { melody: ['솔', '레', '도'], showWhileListening: true }, target: { notes: ['솔', '레', '도'] } },
                challenge: { prompt: '"도"로 끝나는 네 음을 지어 노래 끝에 붙여요.', toolOptions: { melody: [] }, target: { compose: { length: 4, endOn: '도' } } },
              } },
            { type: 'choice', prompt: '수어 노래를 배울 때 알맞은 태도는?', options: ['재미있게 흉내 낸다', '하나의 언어로 존중하며 배운다', '손만 대충 움직인다'], answer: 1, difficulty: 0.1, explain: '수어는 누군가의 언어예요. 표정과 함께 또박또박 존중하며 배워요.' },
          ],
        },
        worksheet: {
          title: '함께 가요',
          items: [
            { type: 'blank', prompt: '노랫말을 따라 써요.', text: '함께 가요, ___ 해요', answer: '같이' },
            { type: 'short', prompt: '오늘 배운 수어 낱말 하나와 뜻을 써요.' },
          ],
          easy: { note: '"같이 해요" 동작을 따라 해요.', items: [{ type: 'draw', prompt: '친구와 "같이 해요"를 하는 모습을 그려요.' }] },
        },
        notes: '가락은 수업용으로 지은 짧은 노래다. 건반은 수어 동작을 판정하지 못해 동작은 교사가 이끈다.',
      }),
    );
  }

  // ======== 6학년 · 모두를 위한 설계와 모두 참여하는 모둠 (research-mandatory §2 장애인식개선 초 + 고 항목 보편적 설계를 초등 수준으로) ========
  {
    const X = mk('design-all', 6);
    const SCHOOL = [PL('계단만 있는 입구', 'school', [1, 1]), PL('높은 세면대 화장실', 'house', [4, 1]), PL('도서관', 'library', [2, 0]), PL('급식실', 'market', [4, 3]), PL('운동장', 'park', [1, 3]), PL('작은 글씨 안내판', 'office', [5, 0])];
    M.push(
      X('intro.ud-spot', {
        title: '생활 속 모두의 설계 찾기', method: '생활 속 모두의 설계 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 그림 3장(손잡이 문·턱 없는 출입구·큰 글자 표지)만 보이고 "누구에게 편할까"를 함께 짝 짓는다.', base: '그림 5장(낮은 세면대·자동문 더함)에 편한 사람 카드를 짝 짓는다.', challenge: '짝 지은 뒤 그 가운데 나에게도 편한 순간(짐을 들었을 때 등)을 하나 골라 말한다.' },
        intro: {
          teacher: '"이 시설들은 누구에게 편할까요?" 시연 단추로 시설 칸마다 편한 사람 카드가 붙는 모습을 보인다. 카드마다 여러 사람이 적혀 있다는 데 눈을 돌리게 한다. "이건 장애인을 위한 시설이에요"라는 말에는 "휠체어를 쓰는 사람뿐 아니라 유모차·캐리어를 끄는 사람, 다리를 다친 친구도 편하지요. 이렇게 처음부터 누구나 편하게 만든 것을 보편적 설계라고 해요"라고 짚는다.',
          student: '시설 그림마다 누구에게 편할지 카드를 짝 지어 보고, 나에게도 편한 순간이 있는지 떠올려 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'u1', label: '턱 없는 출입구' }, { id: 'u2', label: '손잡이 문' }, { id: 'u3', label: '큰 글자 표지' }, { id: 'u4', label: '낮은 세면대' }, { id: 'u5', label: '자동문' }], cards: ['휠체어·유모차·캐리어', '손 힘이 약한 사람·어린이', '처음 온 사람·글씨가 작게 보이는 사람', '키가 작은 어린이·휠체어 쓰는 사람', '짐을 든 사람 누구나'] }, sequence: [{ match: { u1: '휠체어·유모차·캐리어' } }, { match: { u1: '휠체어·유모차·캐리어', u2: '손 힘이 약한 사람·어린이', u3: '처음 온 사람·글씨가 작게 보이는 사람', u4: '키가 작은 어린이·휠체어 쓰는 사람', u5: '짐을 든 사람 누구나' } }] },
          art: art('a paper school entrance with a gentle ramp, an automatic door, a lever handle and a big-letter sign, people with a stroller, a wheelchair and a suitcase passing', '누구에게 편할까?', 'sun', 'buttercup'),
        },
      }),
      X('intro.group-chart', {
        title: '모둠 활동 참여 그래프 읽기', method: '모둠 활동 참여 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 3개만 짚어 가장 긴 막대와 가장 짧은 막대를 견준다.', base: '막대 4개를 읽고 한 사람에게 쏠린 모습과 까닭을 말한다.', challenge: '막대를 읽고 발언을 고르게 바꾸려면 무엇이 필요한지(차례·역할·원하는 방법) 말한다.' },
        intro: {
          teacher: '"지어낸 모둠이 한 시간 동안 말한 횟수를 센 가상 자료예요. 무엇이 보이나요?" 시연 단추로 가장 높은 막대를 고른다. "말을 안 한 친구는 할 말이 없어서예요"라는 말에는 "말할 틈이 없었을 수도, 말보다 글이 편했을 수도 있어요. 어떻게 하면 모두가 참여할까요?"라고 되묻는다. 오늘은 모두 참여하는 모둠을 설계해 본다고 밝힌다.',
          student: '모둠원 네 명의 말한 횟수 그래프에서 쏠린 곳을 찾고, 왜 그렇게 됐을지 짝에게 말해 보아요.',
          demo: CHART('모둠원이 말한 횟수(가상)', [['서', 14], ['진', 3], ['율', 1], ['담', 4]], '가장 많이 말한 사람은?', 0, { unit: '번', xLabel: '모둠원', yLabel: '말한 횟수' }),
          art: art('four paper children around a table, one big speech bubble and three tiny ones, a paper bar chart beside them', '모두 참여했을까?', 'cloud', 'sky'),
        },
        notes: '그래프 수치와 인물은 수업용 가상 자료다. 실제 반 모둠의 발언 수를 세어 공개하지 않는다.',
      }),
      X('act.ud-redesign', {
        title: '우리 학교 입구 다시 설계하기', method: '우리 학교 입구 다시 설계하기', tool: 'collage', minutes: 13,
        levels: { easy: '계단 입구 그림에 경사로(세모)·손잡이(긴 네모) 조각 2개를 붙인다.', base: '경사로·손잡이·큰 글자 표지(네모)·점자 안내(작은 동그라미) 조각 4가지를 붙인다.', challenge: '조각 4가지를 붙이고, 조각마다 바꾼 까닭을 점검 칸에 표시한 뒤 활동지에 쓴다.' },
        activity: {
          title: '입구 다시 설계', tool: 'collage',
          teacher: '"계단만 있는 입구에 누가 들어오기 어려울까요? 누구나 들어오는 입구로 바꿔 봐요." 세모 = 경사로, 긴 네모 = 손잡이, 네모 = 큰 글자 표지, 작은 동그라미 = 점자 안내로 약속하고 칠판에 적는다. "경사로는 장애인만 쓰니까 하나면 돼요"라는 말에는 "수레 끄는 사람, 다리를 다친 친구, 유모차도 써요. 누구나 쓰는 곳이라 길과 잇기 좋은 자리에 둬야 해요"라고 되묻는다.',
          task: '계단만 있는 학교 입구에 경사로·손잡이·큰 글자 표지·점자 안내 조각을 붙여 누구나 들어오는 입구로 바꿔요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '입구에 경사로(세모)·손잡이(긴 네모)·표지(네모)·점자 안내(작은 동그라미)를 붙여요.', toolOptions: { shapes: ['triangle', 'rect', 'square', 'circle', 'semi'], colors: ['노랑', '초록', '파랑', '갈색', '하양', '검정'], maxPieces: 16 }, target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'rect', min: 1 }, { shape: 'square', min: 1 }, { shape: 'circle', size: 's', min: 1 }] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '입구에 경사로(세모)와 손잡이(긴 네모)를 붙여요.', target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'rect', min: 1 }] } },
                challenge: { prompt: '네 가지 조각을 붙이고 바꾼 까닭에 표시해요.', target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'rect', min: 1 }, { shape: 'square', min: 1 }, { shape: 'circle', size: 's', min: 1 }], selfCheck: ['경사로로 바퀴가 다닐 수 있다', '손잡이로 몸을 기댈 수 있다', '큰 글자로 누구나 읽는다', '점자로 손으로도 읽는다'] } },
              } },
            { prompt: '큰 글자 표지(네모)를 크게(l) 붙여 멀리서도 보이게 해요.', toolOptions: { shapes: ['square', 'rect', 'circle'], colors: ['노랑', '파랑', '검정', '하양'], sizes: ['s', 'm', 'l'], maxPieces: 8 }, target: { has: [{ shape: 'square', size: 'l', min: 1 }], contrast: 'light-dark' }, difficulty: 0.2,
              levels: { easy: { prompt: '큰 글자 표지(네모)를 크게(l) 붙여요.', target: { has: [{ shape: 'square', size: 'l', min: 1 }] } } },
              conclude: '처음부터 누구나 쓰기 편하게 만든 입구는 장애인뿐 아니라 모두에게 편해요. 이것이 보편적 설계예요.' },
            { prompt: '우리 학교에서 다시 설계하고 싶은 곳 하나를 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 붙인 조각 하나와 그것이 편하게 해 주는 사람을 써요.' }] },
        notes: '콜라주는 글자·그림을 붙이지 못한다. 조각의 뜻(세모 = 경사로 등)을 칠판에 적어 두고, 바꾼 까닭은 활동지에 쓴다. 둘째 문항의 밝은 바탕·어두운 글씨 대비는 표지를 잘 보이게 하는 연습이다.',
      }),
      X('act.ud-cause', {
        title: '설계 하나로 달라지는 것', method: '설계 하나로 달라지는 것', tool: 'story', minutes: 14,
        levels: { easy: '원인→결과 카드 2장(자동문을 달았다 → 휠체어·유모차·짐 든 사람이 쉽게 드나든다)을 놓는다.', base: '카드 3장(… → 모두 편해졌다)을 놓고, 둘째 문항에서 경사로 이야기도 잇는다.', challenge: '틀린 카드가 끼어든 판에서 바른 차례를 놓고, 셋째 문항에서 시설과 편해진 사람을 칸 4개에 짝 짓는다.' },
        activity: {
          title: '설계와 결과 잇기', tool: 'story',
          teacher: '"자동문 하나를 달았더니 무엇이 달라졌을까요?" 카드를 놓을 때마다 "~를 했더니 → ~이 됐다"로 이어 말하게 한다. "장애인을 위해 특별히 만든 거예요"라는 말에는 "결과 카드를 보세요. 편해진 사람이 몇 명인가요?"라고 묻는다. 도움을 받기만 하는 사람이 따로 있는 게 아니라, 좋은 설계는 모두를 돕는다는 점을 짚는다.',
          task: '시설 하나를 바꾼 원인에서 모두가 편해진 결과까지 카드를 차례로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('자동문을 단 뒤 이어진 일을 차례로 놓아요.', ['도서관에 자동문을 달았다', '휠체어·유모차·짐 든 사람이 쉽게 드나든다', '모두 편해져 도서관을 더 자주 찾는다'], { easy: [0, 1], trap: '문 앞에 사람이 줄어든다' }, 0.2),
            ORDER('경사로를 만든 뒤 이어진 일을 차례로 놓아요.', ['학교 정문에 경사로를 만들었다', '휠체어 쓰는 친구가 혼자 들어온다', '급식 수레·자전거도 쉽게 다닌다', '모두 편한 정문이 된다'], { easy: [0, 1], trap: '계단이 더 높아진다' }, 0.25,
              { conclude: '설계 하나가 바뀌면 처음 생각한 사람뿐 아니라 많은 사람이 편해져요.' }),
            MAT('시설과 편해진 사람을 짝 지어요.', [['큰 글자 표지', '처음 온 사람'], ['낮은 세면대', '키가 작은 어린이'], ['턱 없는 출입구', '캐리어 끄는 여행객'], ['자막 있는 영상', '시끄러운 곳의 사람']], ['아무도 안 씀'], { easy: 2, base: 3, mode: 'match' }, 0.2),
            { prompt: '다른 시설 하나로 "바꿨더니 → 모두 편해졌다" 이야기를 모둠에서 만들어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '처음부터 누구나 쓰기 편하게 만드는 것을 ___ 설계라고 해요.', answer: '보편적' }] },
      }),
      X('act.role-plan', {
        title: '모두 참여하는 역할표 만들기', method: '모두 참여하는 역할표 만들기', tool: 'kitchen', minutes: 13,
        levels: { easy: '할 일 칸 3개(자료 찾기·그림·글)에 모둠원 카드를 짝 짓는다.', base: '할 일 칸 4개(발표 더함)에 강점과 원하는 방법을 보고 모둠원 카드를 짝 짓고, 모두 참여 규칙을 점검한다.', challenge: '할 일 칸 4개를 짝 지은 뒤, 셋째 문항에서 역할을 바꿔 가며 하는 회의 차례(카드 5장)를 놓는다.' },
        activity: {
          title: '모두 참여 역할표', tool: 'kitchen',
          teacher: '"지어낸 모둠 네 명이 포스터를 만들어요. 누구에게 어떤 일을 맡기면 모두 참여할까요?" 카드의 강점과 원하는 방법을 소리 내어 읽게 한다. "말보다 글이 편한 율은 발표를 빼 주면 돼요"라는 말에는 "빼 주는 것이 아니라 율이 잘하는 글 쓰기를 맡고, 발표 때는 율이 쓴 글을 화면에 띄울 수 있어요"라고 답한다. 역할은 먼저 묻고 정하며, 다음에는 바꿔 가며 해 볼 수 있다고 짚는다.',
          task: '모둠원의 강점과 원하는 방법을 보고 할 일을 나누어, 모두 참여하는 역할표를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MAT('할 일 칸에 강점이 맞는 모둠원 카드를 짝 지어요.', [['자료 찾기', '진: 책 찾기를 잘함'], ['그림 그리기', '서: 그림을 좋아함'], ['글 쓰기', '율: 말보다 글이 편함'], ['발표하기', '담: 말하기를 좋아함']], [], { easy: 3, base: 4, mode: 'match' }, 0.2),
            { prompt: '모두 참여하는 모둠 규칙에만 표시해요.', toolOptions: { mode: 'checklist', title: '모두 참여 규칙', items: [{ id: 'turn', text: '돌아가며 말하기' }, { id: 'all', text: '잘하는 사람이 다 하기' }, { id: 'ask', text: '원하는 방법 묻기' }, { id: 'out', text: '느린 친구는 빼기' }, { id: 'swap', text: '다음엔 역할 바꾸기' }] }, target: { checklist: ['turn', 'ask', 'swap'] }, difficulty: 0.2,
              levels: { easy: { prompt: '모두 참여하는 모둠 규칙에만 표시해요(3칸).', toolOptions: { items: [{ id: 'turn', text: '돌아가며 말하기' }, { id: 'all', text: '잘하는 사람이 다 하기' }, { id: 'ask', text: '원하는 방법 묻기' }] }, target: { checklist: ['turn', 'ask'] } } },
              conclude: '모두 참여하는 모둠은 역할을 먼저 묻고, 강점에 맞게 나누고, 돌아가며 해요. 도움은 서로 주고받는 거예요.' },
            ORDER('역할을 바꿔 가며 하는 모둠 회의 차례를 놓아요.', ['할 일 적기', '원하는 역할 묻기', '강점 보고 나누기', '중간에 서로 돕기', '다음엔 역할 바꾸기'], { easy: [0, 1, 2], mode: 'order' }, 0.25),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 역할표를 써요(이름 대신 \'1번\'처럼).', columns: ['할 일', '맡은 사람', '원하는 방법'], cells: [['자료 찾기', '', ''], ['그림', '', ''], ['글', '', ''], ['발표', '', '']] }] },
        notes: '인물(서·진·율·담)은 지어낸 가명이다. 실제 모둠원의 장애 여부를 묻거나 적게 하지 않는다. 체크리스트·짝 짓기는 kitchen 의 checklist·match 판이다.',
      }),
      X('act.group-dilemma', {
        title: '모둠 발표 준비 갈림길', method: '모둠 발표 준비 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(빼고 준비·원하는 역할 묻기·우리가 알아서 바꾸기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(담의 대답 뒤 발표 방법 정하기)을 지나 근거를 고른다.', challenge: '갈림 3번(다른 모둠의 질문)까지 끝까지 가고, 근거 세 장을 모두 고른 뒤 친구 의견을 듣는 길과 다른 길을 견준다.' },
        activity: {
          title: '갈림길: 모둠 발표 준비', tool: 'dilemma',
          teacher: '"청각장애가 있는 담은 말로 하는 발표가 부담스럽다고 해요. 모둠은 어떻게 할까요?" 고를 때마다 담과 모둠에게 미친 영향을 읽게 한다. "담을 위해 발표에서 빼 주는 게 배려예요"라는 말에는 "담은 참여하고 싶은지, 어떤 방법이 편한지 물어봤나요? 빼는 것은 참여할 기회를 없애요"라고 되묻는다. 좋은 생각이라도 먼저 묻고 정하는 것이 존중이라는 점을 짚는다.',
          task: '발표가 부담스러운 친구가 있는 모둠에서 갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '모두 함께하는 발표',
            steps: [
              { text: '모둠 발표가 다음 주예요. 청각장애가 있는 담이 "말로 발표하는 게 부담돼"라고 했어요.', motif: 'house',
                good: ['ask', '담에게 하고 싶은 역할과 편한 방법을 묻는다', '담이 "그림 설명은 하고 싶어"라고 말해요.', [['담', '내 의견이 들어가요', 1], ['모둠', '담의 강점을 알게 돼요', 1]]],
                bad: ['leave', '담을 빼고 셋이서 준비한다', '담은 발표 날 자리에 앉아만 있어요.', '빼 주는 것은 배려가 아니라 참여할 기회를 없애는 거예요.', [['담', '모둠에서 밀려난 느낌이에요', -1]]],
                mid: ['decide', '우리끼리 그림 발표로 바꾸기로 정한다', '방법은 좋았지만 담이 원하는 역할과 달랐어요.', '좋은 생각이에요. 정하기 전에 담에게 먼저 물어요.', [['담', '내 뜻은 묻지 않았네요', 0]]] },
              { text: '담이 "그림 설명은 하고 싶어. 말은 글 자막으로 띄우면 좋겠어"라고 해요.', motif: 'cloud',
                good: ['caption', '그림과 자막으로 발표 방법을 함께 바꾼다', '모둠이 화면에 자막을 넣고 담이 그림을 짚으며 설명해요.', [['담', '자신 있게 참여해요', 1], ['듣는 친구들', '내용이 더 잘 보여요', 1]]],
                bad: ['refuse', '"시간 없어, 원래대로 하자"라고 한다', '담은 다시 발표에서 빠지게 돼요.', '방법을 바꾸면 담도 함께할 수 있어요. 원래대로만 고집하지 않아요.', [['담', '실망해요', -1]]] },
              { text: '발표 날 다른 모둠 친구가 "왜 자막까지 넣었어?"라고 물어요.', motif: 'sun',
                good: ['explain', '"모두가 내용을 잘 알아보게 하려고"라고 답한다', '다른 모둠도 다음 발표에 자막을 넣어 보기로 해요.', [['반 친구들', '모두 편한 발표를 배워요', 1]]],
                bad: ['hide', '쑥스러워 자막을 끄고 발표한다', '담이 준비한 설명이 잘 전해지지 않아요.', '자막은 담뿐 아니라 모두에게 도움이 돼요. 그대로 써요.', [['담', '준비한 것이 묻혀요', -1]]] },
            ],
            ending: '먼저 묻고 방법을 함께 바꾼 덕분에 모둠 모두가 발표에 참여했어요.',
            reasons: [
              { id: 'join', text: '누구나 모둠 활동에 함께할 권리가 있다' },
              { id: 'askfirst', text: '돕기 전에 원하는 방법을 먼저 묻는다' },
              { id: 'all', text: '자막·그림 발표는 모두에게 도움이 된다' },
              { id: 'pity', text: '불쌍하니까 빼 주는 것이 배려다', why: '장애가 있는 친구는 불쌍한 사람이 아니라 함께 참여하는 모둠원이에요.' },
              { id: 'fast', text: '빨리 끝내는 것이 가장 중요하다', why: '빠르기보다 모두가 참여하는 것이 모둠 활동의 목적이에요.' },
            ],
            good: ['join', 'askfirst', 'all'],
            talk: '모둠에서 "모두 참여하는 발표" 규칙 하나를 정해 말해요.',
            conclude: '돕는다는 것은 빼 주는 것이 아니라 먼저 묻고, 모두 참여하도록 방법을 함께 바꾸는 거예요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '발표가 부담스러운 친구에게 먼저 물어볼 말을 써요.' }] },
        notes: '인물 담은 지어낸 가명이다. 같은 반 학생의 장애를 예로 들지 않는다. 담을 돕는 대상으로만 그리지 않고 그림 설명을 잘하는 모둠원으로 쓴다.',
      }),
      X('wrap.ud-check', {
        title: '모두 참여 자기 점검표', method: '모두 참여 자기 점검표', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '두 문장 이상 쓰고 기준 3개를 점검한다.', challenge: '세 문장 이상 쓰고, 모둠 규칙 제안(\'규칙\'을 넣음)까지 써서 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"오늘 모둠 활동에서 나는 모두가 참여하도록 무엇을 했나요? 다음에는 무엇을 바꿀까요?" 기준표를 함께 읽는다. "저는 제 일만 했어요"라는 학생에게 "그것도 중요해요. 다음엔 친구에게 원하는 방법을 한 번 물어보면 어떨까요?"라고 길을 열어 준다. 친구 이름은 쓰지 않는다.',
          exitTicket: [
            RUBX('다음 모둠 활동에서 모두 참여하도록 바꿀 점을 써요', { topic: '다음 모둠 활동에서 모두가 참여하도록 내가 바꿀 점을 써요(친구 이름은 쓰지 않아요).', starter: '다음 모둠 활동에서 나는 ___. 그러면 ___.', crit: ['모두 의견을 냈는지 살폈다', '원하는 방법을 물었다', '바꿀 점을 구체적으로 썼다'], must: ['규칙'], chars: [20, 200], title: '모두 참여 점검', sents: [1, 2, 3], chCrit: '모둠 규칙 제안을 썼다', chPrompt: '바꿀 점을 쓰고, 모둠에 제안할 규칙도 써요.' }),
            { type: 'choice', prompt: '보편적 설계에 대해 바른 말은?', options: ['장애인에게만 필요하다', '처음부터 누구나 편하게 만든다', '돈이 많이 들어 쓸모없다'], answer: 1, difficulty: 0.15, explain: '보편적 설계는 처음부터 누구나 쓰기 편하게 만드는 것이라 모두에게 도움이 돼요.' },
          ],
        },
        worksheet: {
          title: '모두 참여 점검',
          items: [
            { type: 'check', prompt: '오늘 모둠 활동에서 한 일에 표시해요.', options: ['모두 의견을 냈다', '원하는 방법을 물었다', '역할을 나누었다', '서로 도왔다'] },
            { type: 'short', prompt: '우리 모둠에 제안할 규칙 하나를 써요.' },
          ],
          easy: { note: '"어떤 역할이 하고 싶어?" 하고 물어요.', items: [{ type: 'draw', prompt: '모두 참여하는 모둠 모습을 그려요.' }] },
        },
      }),
      X('wrap.ud-map', {
        title: '학교에 필요한 설계 지도', method: '학교에 필요한 설계 지도', tool: 'map', minutes: 6,
        levels: { easy: '장소 이름이 보이는 지도(4곳)에서 보편적 설계가 필요한 곳 한 곳에 핀을 놓는다.', base: '6곳 지도에서 두 곳(계단만 있는 입구·높은 세면대 화장실)에 차례로 핀을 놓고 바꿀 내용을 고른다.', challenge: '두 곳에 핀을 놓은 뒤 어느 곳을 먼저 바꿀지 우선순위와 까닭을 고른다.' },
        wrap: {
          teacher: '"지어낸 우리 학교 지도예요. 누구나 편하려면 어디를 먼저 바꿔야 할까요?" 장소 이름을 함께 읽고 핀을 놓게 한다. "장애가 있는 학생이 없으면 안 바꿔도 돼요"라는 말에는 "다리를 다친 날, 무거운 짐을 든 날, 학교에 오는 할머니도 있어요. 처음부터 모두 편하게 만드는 거예요"라고 답한다. 우선순위는 정답보다 까닭을 말하는 것이 중요하다고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '가상 우리 학교 지도', places: SCHOOL, legend: false }, prompt: '휠체어·수레가 들어오기 어려운 곳에 핀을 놓아요.', target: { place: '계단만 있는 입구' }, difficulty: 0.15,
              levels: { easy: { prompt: '휠체어·수레가 들어오기 어려운 곳에 핀을 놓아요(4곳).', toolOptions: { places: SCHOOL.filter((p) => ['계단만 있는 입구', '도서관', '운동장', '급식실'].includes(p.name)), readout: true } } } },
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '가상 우리 학교 지도', places: SCHOOL, legend: false }, prompt: '키 작은 어린이·휠체어 쓰는 사람이 손 씻기 어려운 곳에 핀을 놓아요.', target: { place: '높은 세면대 화장실' }, difficulty: 0.15,
              levels: { easy: { prompt: '손 씻기 어려운 곳에 핀을 놓아요(4곳).', toolOptions: { places: SCHOOL.filter((p) => ['높은 세면대 화장실', '도서관', '운동장', '급식실'].includes(p.name)), readout: true } } } },
            { type: 'choice', prompt: '계단만 있는 입구를 바꿀 알맞은 내용은?', options: ['계단을 더 높인다', '경사로와 손잡이를 만든다', '입구를 닫는다'], answer: 1, difficulty: 0.15, explain: '경사로와 손잡이가 있으면 휠체어·유모차·수레를 쓰는 누구나 들어올 수 있어요.' },
          ],
        },
        worksheet: {
          title: '모두를 위한 학교',
          items: [
            { type: 'table', prompt: '바꾸고 싶은 곳과 바꿀 내용을 써요.', columns: ['곳', '바꿀 내용', '편해지는 사람'], cells: [['', '', ''], ['', '', '']] },
            { type: 'short', prompt: '두 곳 가운데 먼저 바꿀 곳과 까닭을 써요.' },
          ],
          easy: { note: '경사로·손잡이·큰 글자·낮은 세면대를 떠올려요.', items: [{ type: 'draw', prompt: '누구나 편한 학교 입구를 그려요.' }] },
        },
        notes: '지도는 지어낸 가상 학교다. 실제 학교 시설을 조사하는 활동으로 이어 갈 때도 특정 학생의 불편을 예로 들지 않는다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
