/* 창체 학교폭력 예방 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 bully 초5-6.
 * 근거: 학교폭력예방법 제15조·시행령 제17조(학기별 1회 이상, 지침 연 11시간·사이버폭력 예방 3차시 이상),
 *       research-mandatory §2 학교폭력 예방 초(폭력의 종류 알기·놀림·따돌림 구별·방관자에서 조력자로·도움 요청) — sources/changche/research-mandatory.md.
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'). 장면·인물은 지어낸 것이다(가명 한 글자: 서·진·율·담·해·은·로·새·별·린·온·류).
 * 이 영역의 처신(모든 모듈):
 *   - 학생에게 피해 경험을 묻지 않는다. 장면은 가상 인물로 짧게, 무섭거나 자세하지 않게 쓴다. 실제 비하어·욕설은 화면에 쓰지 않는다.
 *   - 잘못은 늘 괴롭힌 사람에게 있고, 말한 사람·도움을 청한 사람·알린 사람은 잘한 것이라는 틀을 문항·피드백·교사 발문에서 지킨다.
 *   - 낙인 없이 행동을 바로잡는다: '나쁜 아이'가 아니라 '그 행동'을 멈추고 바로잡는 말로 쓴다(바로잡는 친구를 탓하는 선택은 틀린 길).
 *   - 단톡방·셔틀 같은 사이버폭력은 실제 앱·서비스 이름 없이 '단톡방·메시지·게시판·쿠폰'으로만 쓴다.
 *   - 도움 받을 곳은 체계도 concepts·계획 글에 있는 것만 쓴다: 믿을 어른(보호자·담임·상담 선생님), 학교 안 도움 장소(상담실·보건실·교무실·Wee클래스).
 *     이 영역의 체계도 concepts 에는 전화번호가 없어(계획 글은 '[학교가 확인해 넣는 학교폭력 신고·상담 번호]' 자리) 번호 숫자를 쓰지 않고
 *     '학교가 알려 준 신고·상담 번호'라고만 쓴다. 활동지에 빈칸을 두고 교사가 학교에서 확인한 번호를 적어 준다.
 * 주제 12개(5학년 6 · 6학년 6) × 도입 2 · 활동 3 · 정리 2 = 계획 모듈 84개 전부. 추천 조합은 체계도 sequences(학년마다 11차시).
 * 같은 학년군 안전교육 폭력예방(modules/saf-violence/e56.js)과 장면·문항을 되풀이하지 않게 바꾼 곳:
 *   - three-signs 갈림길의 '가방 숨기기'는 saf-violence 의 '날아다니는 가방'과 겹쳐 '필통 숨기기'로 바꿨다.
 *   - why-cyber-hurts 갈림길의 '합성 놀림 사진'은 saf-violence 의 '놀리는 사진·합성 사진'과 겹쳐 '목소리를 흉내 낸 놀림 영상'으로 바꿨다.
 *   - four-roles 의 역할 나누기 카드·원그래프 자료는 saf-violence upstander 와 다른 장면(발표 실수 흉내·쉬는 시간)·다른 수치로 썼다.
 *
 * 계획과 다르게 한 곳(교구 한계 — levels 글은 실제 설정대로 적었다):
 *  - 갈림길(dilemma)의 세 보기 가운데 '덜 나은 길'(가만히 있기·몰래 돕기 등)은 틀린 길로 두되 why 를 '마음은 좋지만 …' 꼴로 써서 낙인 없이 고치게 했다.
 *    두 보기 모두 알맞은 곳(refuse-dilemma ③ 자리 피하고 나중에 말하기, shuttle-dilemma ② 거절하고 화면 남기기, mediator-dilemma ③ 조정자 바꾸기)은 둘 다 정답 길로 받는다.
 *  - boundary-circles: emotion 은 동그라미를 그리지 못해 장면 칸(가족·친한 친구·반 친구·모르는 사람)에 마음 카드를 짝 짓고, 동그라미는 교사가 칠판에 그린다.
 *  - 카드 한 장의 정답 칸은 하나라 '두 역할·두 특징에 걸치는 카드', '판정이 갈린 카드', '상황에 따라 달라지는 카드'는 모둠 말하기(talk) 문항으로 옮겼다.
 *  - five-ways: 장면(급식실·복도·단톡방·운동장) 바구니에 그 장면에 맞는 방어자 행동 카드를 넣는다. 도전의 '안전하지 않은 행동'은 넣지 않을 함정 카드다.
 *  - 콜라주(collage)는 글자를 붙이지 못해 '구호·표어 넣기'는 정해서 활동지에 쓰고 점검 칸에 표시하게 했다. 선물 상자·엑스·방패·저울·가면·다리 같은 모양은
 *    네모·세모·마름모·반원 조각을 겹쳐 만든다(교사 메모).
 *  - 기준표 글쓰기의 '한 문장/두 문장/세 문장'은 문장 수 범위(target.sentences)로 단계마다 실제로 잰다. 정리 출구 질문의 그 밖의 단계 차이는 교사 진행으로 적었다.
 *  - night-clock: 가족마다 시각이 달라 지어낸 은의 가족 약속(밤 9시 30분, 도전 9시 40분)을 맞춘다. 끝 시각·예외 상황은 고르기 문항과 말하기로 한다.
 *  - circle-practice: 말하는 물건 한 바퀴는 '한 사람 30초 + 쉼 5초 × 모둠 4명(쉬움 2명)'을 우리 반 연습값으로 맞춘다.
 *
 * 사람 확인: 근거 파일에는 고시·지침 항목 제목만 있다. 아래 문장은 일반 학교폭력 예방교육 내용으로 썼으니 공식 안내처
 *  (교육부 학교폭력 예방교육 자료·어울림 프로그램, 푸른나무재단 예방 자료, 방송통신위원회 사이버폭력 예방 자료, 한국교육개발원 또래 조정 자료)에서 문구를 확인한다.
 *  - three-signs.*: 괴롭힘을 가르는 세 신호(되풀이·힘의 차이·일부러)와 힘의 차이의 예(수·나이·인기) / 괴롭힘의 결과(잠을 못 잠·학교 가기 싫음·집중이 어려움) — 교육부·푸른나무재단.
 *  - friend-boundary.*: 몸 평가·짓궂은 농담·원치 않는 접촉이 친구 사이 경계를 넘는 폭력이 될 수 있음 / 거절 세 단계(눈 보며 '싫어' → 손으로 멈춤 → 자리 떠나 어른께) — 교육부 성교육 표준안·학교폭력 예방 자료.
 *  - chatroom-exclusion.*: 저격 글·방폭·강퇴·한 명 빼고 새 방이 사이버 따돌림이 됨 / 동조·구경·방어 / 화면 남기고 알리기 — 방송통신위원회·교육부 사이버폭력 예방 자료.
 *  - gifticon-shuttle.*: 쿠폰·데이터·게임 아이템을 억지로 내게 하는 것이 사이버 강요·빼앗기가 됨 / 기록 남기기(날짜 보이게·지우지 않기·어른께 보여 드리기) — 교육부·경찰청 학교폭력 예방 자료.
 *  - defender-path.*: 방어자 행동(곁에 있기·말 돌리기·함께 자리 뜨기·어른께 알리기·나중에 위로하기)과 '맞서 싸우기보다 안전하게 돕기' — 교육부 어울림·푸른나무재단 방관자 교육.
 *  - circle-after-report.*: 회복 서클 차례(약속 정하기 → 말하는 물건 → 무슨 일·마음 → 필요한 것 → 약속) / 알린 뒤 학교가 이야기를 듣고 피해 학생을 보호하고 관계 회복을 돕는다는
 *    큰 흐름(절차의 세부는 쓰지 않음) / 알린 사람의 비밀은 지켜진다 — 교육부 학교폭력 사안 처리 안내·회복적 생활교육 자료.
 *  - four-roles.*: 주변인 역할(동조·강화·방관·방어)의 이름과 뜻 — 교육부 어울림·푸른나무재단.
 *  - hate-words.*: 출신·장애·성별·외모를 깎아내리는 말이 언어폭력이자 차별이 됨 / 농담으로 포장된 차별 — 국가인권위원회 혐오표현 예방 자료·교육부.
 *  - why-cyber-hurts.*: 사이버폭력의 특징(빠른 퍼짐·지워지지 않음·24시간·익명) / 좋아요·공유도 상처를 키우는 행동 — 방송통신위원회 사이버폭력 예방 자료.
 *  - anon-post.*: 신고 차례(화면 남기기 → 게시물·계정 신고 → 차단 → 어른께 알리기) / 익명이어도 쓴 사람을 찾을 수 있고 책임이 따름 — 방송통신위원회·경찰청.
 *  - peer-mediation.*: 또래 조정 다섯 단계(규칙 안내 → 차례로 이야기 → 바람 찾기 → 해결안 → 약속)와 '조정자는 편들지 않는다' — 교육부 또래 조정 프로그램 자료.
 *  - support-next.*: 2차 피해(소문·탓하기) / 들어 주기 차례 / 안전이 걸린 비밀은 어른께 알린다 / 중학교 도움 장소(상담실·보건실·교무실·Wee클래스) — 교육부 Wee 프로젝트 안내.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('g5-three-signs', 5)('intro.case-cards', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `bully.e56.${topic}.${suffix.replace(/^act\./, 'activity.')}`, schema: 'edu-module.v1', type: ({ intro: 'intro', act: 'activity', wrap: 'wrap' })[suffix.split('.')[0]],
    domain: 'bully', band: '초5-6', topic: `bully.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const inter = (slots, g) => { const out = []; const n = Math.max(0, ...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };

  // ---- 카드 판 문항(mindmap·wordcards·timeline sort) ----
  // groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
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
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => cards[i]); const ezIds = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ezIds } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
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
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], mode = 'pick', title, topic } = {}, d, more) => {
    const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };
    const o = Object.assign({ mode, basket }, title ? { title } : {}, topic ? { topic } : {}, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
  };

  // ---- 갈림길(dilemma) ----
  // steps[i] = { text, ask?, motif?, good: [id, 글, 결과, [[누구, 영향, tone]…]], alt?: (good 과 같은 꼴 — 또 하나의 알맞은 길),
  //              bad: [id, 글, 결과, 틀렸을 때 한 문장, [[…]], 끝 글?], mid?: (bad 와 같은 꼴 — 마음은 좋지만 덜 나은 길) }
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
  // 갈림길 활동 문항 셋: ① 알맞은 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기) + extra
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
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title, sents, chCrit = '한 군데 이상 고쳐 썼다', chTopic, chPrompt }, d, more) => {
    const sn = (k) => (sents ? { sentences: [sents[k], 6] } : {});
    const ch = { prompt: chPrompt || `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: Object.assign({ selfCheck: [...crit.slice(0, 3), chCrit], chars: [chars[0] + 10, chars[1]], mustInclude: must }, sn(2)) };
    if (chTopic) ch.toolOptions = { topic: chTopic };
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
  // 정리: 자기 점검표(timer selfCheck) — 쉬움 easy칸·기본 base칸·도전 list 전부(base 보다 많을 때)
  const SELF = (title, list, prompt = '오늘 다짐한 것에 스스로 표시해요.', { easy = 2, base = 3 } = {}) => {
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, target: { selfCheck: list.slice(0, easy) } } };
    if (list.length > base) lv.challenge = { prompt: `${cut(prompt)}(${list.length}칸).`, target: { selfCheck: list } };
    return { type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list.slice(0, base) }, difficulty: 0.1, levels: lv };
  };
  // 막대·원·띠·꺾은선그래프 읽기(chart read). data = [[이름, 값]…]
  const CHART = (type, title, data, question, pick, { unit = '명', xLabel, yLabel } = {}) => ({
    tool: 'chart', options: Object.assign({ type, mode: 'read', title, unit, data, question, choices: data.map((x) => x[0]) }, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}), sequence: [{ pick }],
  });
  // 정리: 콜라주 캠페인 판 — 쉬움 조각 3개·점검 2칸, 기본 조각 5개·점검 3칸, 도전 점검 4칸(+ 대비 등)
  const COLX = (prompt, crit, { shapes = ['square', 'rect', 'triangle', 'diamond', 'semi', 'circle', 'star', 'heart'], colors = ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하양'], add = {} } = {}) => ({
    type: 'tool', tool: 'collage', options: { shapes, colors, maxPieces: 16 }, prompt, target: { selfCheck: crit.slice(0, 3), minPieces: 5 }, difficulty: 0.1,
    levels: {
      easy: { prompt: `${cut(prompt)}(조각 3개 이상).`, target: { selfCheck: crit.slice(0, 2), minPieces: 3 } },
      challenge: { prompt: `${cut(prompt)}(점검 네 칸).`, target: Object.assign({ selfCheck: crit.slice(0, 4), minPieces: 5 }, add) },
    },
  });
  // 칸 지도(map pin) — places 가운데 target 장소에 핀
  const PL = (name, icon, at) => ({ name, icon, at });
  const MAPX = (prompt, title, places, target, { easyKeep, base, challenge } = {}) => {
    const lv = { easy: { prompt: `${cut(prompt)}(장소 ${easyKeep.length}곳).`, toolOptions: { places: places.filter((p) => easyKeep.includes(p.name)), readout: true } } };
    if (challenge) lv.challenge = challenge;
    return { type: 'tool', tool: 'map', options: { grid: [6, 4], title, places: base ? places.filter((p) => base.includes(p.name)) : places, legend: false }, prompt, target: { place: target }, difficulty: 0.15, levels: lv };
  };
  const HELPNO = '학교가 알려 준 신고·상담 번호';

  // ======== 5학년 · 괴롭힘의 세 신호: 되풀이·힘의 차이·일부러 (research-mandatory §2 초: 폭력의 종류 알기·놀림 구별) ========
  {
    const X = mk('g5-three-signs', 5);
    const SIGN_R = [
      { id: 'repeat', text: '같은 친구에게 되풀이했다' },
      { id: 'power', text: '여럿이 한 명에게 했다(힘의 차이)' },
      { id: 'purpose', text: '싫어하는 걸 알고도 일부러 했다' },
      { id: 'fun', text: '우리가 재미있으면 장난이다', why: '상대가 즐겁지 않으면 장난이 아니에요.' },
      { id: 'once', text: '한 번씩은 별일 아니다', why: '한 번씩이 쌓여 되풀이가 돼요.' },
    ];
    M.push(
      X('intro.case-cards', {
        title: '세 사례의 차이 짐작하기', method: '세 사례의 차이 짐작하기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 사례 2개(한 번 말다툼·2주째 놀림)만 읽어 주고 주인공 마음을 함께 고른다.', base: '사례 3개의 주인공 마음을 고르고 무엇이 다른지 짝과 말한다.', challenge: '사례마다 세 신호(되풀이·힘의 차이·일부러)가 몇 개 보이는지 손가락으로 나타내고 까닭을 말한다.' },
        intro: {
          teacher: '"세 친구의 이야기를 들어 볼까요? 셋 다 \'괴롭힘\'일까요?" 사례를 읽고 시연 단추로 주인공 마음 카드가 장면에 붙는 모습을 보인다. "둘이 서로 장난치는 것도 괴롭힘이에요"라는 말이 나오면 "둘 다 웃고 있고, 그만하자면 멈춘다면 어떨까요? 여럿이 한 명을 2주째 놀리는 것과 무엇이 다를까요?"라고 되묻는다. 오늘은 장난·다툼과 괴롭힘을 가르는 세 신호를 배운다고 밝힌다.',
          student: '세 사례의 주인공 마음을 고르고, 셋 가운데 무엇이 가장 다른지 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '서와 진이 한 번 말다툼했어요' }, { id: 's2', label: '여럿이 율을 2주째 놀려요' }, { id: 's3', label: '담과 해가 서로 장난을 주고받아요' }], cards: ['속상함', '무서움', '신남', '뿌듯함'], shuffle: false }, sequence: [{ match: { s1: '속상함' } }, { match: { s1: '속상함', s2: '무서움', s3: '신남' } }] },
          art: art('three small paper scenes side by side: two children arguing once, a group surrounding one child, two children laughing together', '셋은 무엇이 다를까?', 'cloud', 'sky'),
        },
        notes: '사례 인물은 지어낸 것이다. 학생에게 비슷한 일을 겪었는지 묻지 않는다.',
      }),
      X('intro.signs-chart', {
        title: '괴롭힘은 얼마나 이어질까', method: '"괴롭힘은 얼마나 이어질까" 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 1주와 3주 막대 두 개만 짚어 견주게 한다.', base: '세 주의 막대를 읽고 되풀이되며 커진다는 점을 말한다.', challenge: '어느 주에 멈췄으면 좋았을지 막대 값을 근거로 말한다.' },
        intro: {
          teacher: '"이 막대그래프는 지어낸 친구 율이 받은 놀림 횟수를 주마다 센 가상 자료예요. 가장 높은 막대는 몇 주일까요?" 시연 단추로 3주를 고르는 모습을 보인다. "1주에 한 번이면 괜찮잖아요"라는 말에는 "1주에 한 번이 2주에 세 번, 3주에 다섯 번이 됐어요. 처음 한 번에서 멈추면 어땠을까요?"라고 되묻는다. 숫자는 가상이라고 꼭 밝힌다.',
          student: '그래프에서 놀림이 주마다 어떻게 바뀌는지 한 문장으로 짝에게 말해 보아요.',
          demo: CHART('bar', '율이 받은 놀림 횟수(가상)', [['1주', 1], ['2주', 3], ['3주', 5]], '가장 많은 주는?', 2, { unit: '번', xLabel: '주', yLabel: '횟수' }),
          art: art('a paper bar chart with three bars growing taller, and a small paper hand raised as a stop sign beside the first bar', '되풀이되면 커져요', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('act.sign-sort', {
        title: '세 신호 체크로 사례 판정', method: '세 신호 체크로 사례 판정', tool: 'sortboard', minutes: 14,
        levels: { easy: '사례 카드 4장을 나누고, 넣을 때 바로 맞는지 알려 주며 바구니마다 장 수가 보인다.', base: '사례 카드 6장을 다툼·장난/괴롭힘으로 나누고, 둘째 문항에서 사례마다 가장 뚜렷한 신호를 고른다.', challenge: '사례 카드 8장을 나누고, 판정이 갈린 카드는 셋째 문항에서 모둠 토의로 정한다.' },
        activity: {
          title: '세 신호로 사례 판정', tool: 'sortboard',
          teacher: '"이 사례에 되풀이·힘의 차이·일부러가 있나요? 손가락 셋으로 세어 볼까요?" 카드를 넣기 전에 세 신호를 소리 내어 세게 한다. "서로 별명 부르면 괴롭힘이에요"라는 학생에게 "둘 다 웃고 그만하자면 멈추나요? 신호가 몇 개 보이나요?"라고 묻는다. 반대로 "한 번 툭 친 거라 장난이에요"라는 학생에게는 "싫다는 걸 알고 또 했다면 어떤 신호가 보일까요?"라고 되묻는다.',
          task: '사례 카드에 세 신호가 있는지 세어 보고, 다툼·장난과 괴롭힘 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('사례 카드를 다툼·장난과 괴롭힘 바구니에 나누어요.', { slots: ['다툼·장난', '괴롭힘'], groups: { '다툼·장난': ['한 번 다툰 뒤 서로 사과함', '둘이 번갈아 간지럼 장난', '공 차례로 한 번 말다툼'], 괴롭힘: ['여럿이 한 명 별명을 매일 부름', '6학년이 5학년 간식을 매일 뺏음', '싫다는데 일부러 또 툭 침'] }, extra: { '다툼·장난': ['서로 웃으며 별명 주고받기'], 괴롭힘: ['인기 많은 무리가 한 명만 빼기'] } }, 0.2),
            SB('사례마다 가장 뚜렷한 신호 바구니에 넣어요.', { slots: ['되풀이', '힘의 차이', '일부러'], groups: { 되풀이: ['일주일째 같은 별명 부르기', '날마다 자리 발로 차기'], '힘의 차이': ['셋이서 한 명 둘러싸기', '형이 동생 몫 빼앗기'], 일부러: ['울 때까지 일부러 놀리기', '싫다는 걸 알고 또 하기'] }, easy: 3 }, 0.25,
              { conclude: '되풀이·힘의 차이·일부러가 보이면 장난이 아니라 괴롭힘이에요. 한 번이라도 멈춰요.' }),
            { prompt: '모둠에서 판정이 갈린 카드 하나를 골라 세 신호로 다시 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '괴롭힘을 가르는 세 신호가 아닌 것은?', options: ['되풀이', '힘의 차이', '일부러', '장소'], answer: '장소' }] },
        notes: '카드 한 장의 정답 바구니는 하나라, 판정이 갈리는 카드는 모둠 말하기로 다룬다.',
      }),
      X('act.cause-effect', {
        title: '괴롭힘의 원인과 결과 그물', method: '괴롭힘의 원인과 결과 생각그물', tool: 'mindmap', minutes: 14,
        levels: { easy: '원인·결과 가지에 카드를 하나씩(2장) 잇는다.', base: '원인·결과 가지에 카드를 두 장씩(4장) 잇는다.', challenge: '가지 셋(원인·결과·끊는 행동)에 카드 6장을 잇고, 결과를 끊을 행동을 말한다.' },
        activity: {
          title: '원인과 결과 생각그물', tool: 'mindmap',
          teacher: '"놀림이 2주나 이어진 까닭은 무엇일까요? 그 뒤에 율에게는 무슨 일이 생겼을까요?" 카드를 붙일 때마다 "~때문에 → ~이 생겼다"로 이어 말하게 한다. "율이 약해서 놀림 받은 거예요"라는 말에는 "놀림이 이어진 원인 카드에 율의 잘못이 있나요? 구경꾼 웃음과 힘의 차이를 보세요"라고 되묻는다. 결과는 몸·마음·학교생활에 모두 남는다는 점을 짚는다.',
          task: '가운데 사례에 원인 가지와 결과 가지를 이어 생각그물을 완성해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '‘2주 동안 이어진 놀림’의 원인과 결과 카드를 가지에 이어요.', toolOptions: { topic: '2주 동안 이어진 놀림', slots: ['원인', '결과'], cards: ['구경꾼이 따라 웃음', '밤에 잠을 못 잠', '여럿 대 한 명', '학교 가기 싫음'] }, target: { sort: { 원인: ['구경꾼이 따라 웃음', '여럿 대 한 명'], 결과: ['밤에 잠을 못 잠', '학교 가기 싫음'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '‘2주 동안 이어진 놀림’의 원인과 결과 카드를 가지에 이어요(카드 2장).', toolOptions: { cards: ['밤에 잠을 못 잠', '구경꾼이 따라 웃음'] }, target: { sort: { 원인: ['구경꾼이 따라 웃음'], 결과: ['밤에 잠을 못 잠'] } } },
                challenge: { prompt: '원인·결과·끊는 행동 가지에 카드를 이어요(카드 6장).', toolOptions: { slots: ['원인', '결과', '끊는 행동'], cards: ['구경꾼이 따라 웃음', '밤에 잠을 못 잠', '"그만하자" 말하기', '여럿 대 한 명', '학교 가기 싫음', '어른께 알리기'] }, target: { sort: { 원인: ['구경꾼이 따라 웃음', '여럿 대 한 명'], 결과: ['밤에 잠을 못 잠', '학교 가기 싫음'], '끊는 행동': ['"그만하자" 말하기', '어른께 알리기'] } } },
              } },
            SORT('‘일주일째 이어진 흉내 내기’의 원인과 결과를 이어요.', { topic: '일주일째 이어진 흉내 내기', slots: ['원인', '결과'], groups: { 원인: ['인기 많은 친구가 시작함', '다들 웃어 줌'], 결과: ['말수가 줄어듦', '발표를 피함'] }, easy: 1, extra: { 원인: ['아무도 멈추지 않음'], 결과: ['공부 집중이 어려움'] } }, 0.25,
              { conclude: '구경꾼 웃음과 힘의 차이가 괴롭힘을 이어지게 해요. 결과는 몸·마음·학교생활에 남아요.' }),
            { prompt: '모둠에서 결과를 끊을 수 있는 행동 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '괴롭힘이 이어지면 생길 수 있는 결과 하나를 써요.' }] },
      }),
      X('act.signs-dilemma', {
        title: '"우린 그냥 장난친 건데요"', method: '갈림길: "우린 그냥 장난친 건데요"', tool: 'dilemma', minutes: 26,
        levels: { easy: '갈림 1번(계속할지 멈출지)에서 고르고 세 신호 근거 한 장을 고른다.', base: '갈림 2번("장난인데?"라는 말)을 지나 근거를 고른다.', challenge: '갈림 3번(숨김을 받던 친구의 한 주 뒤 장면)까지 지나 세 신호 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 장난친 건데요', tool: 'dilemma',
          teacher: '"나는 필통을 숨기는 무리 가운데 한 명이에요. 오늘도 숨기자고 하면 어떻게 할까요?" 고를 때마다 결과 칸과 은에게 미친 영향을 소리 내어 읽게 한다. "우리는 장난이었으니 괴롭힘이 아니에요"라는 말에는 "은도 웃고 있었나요? 날마다, 여럿이, 싫어하는 걸 알고도 했다면 세 신호가 몇 개일까요?"라고 되묻는다. 멈추고 바로잡은 친구는 잘한 것이고, 멈추는 데 늦은 때란 없다는 점을 짚는다.',
          task: '갈림길마다 고르고, 끝에서 이 일이 괴롭힘인 근거(세 신호)를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '쉬는 시간마다 사라지는 필통',
            steps: [
              { text: '쉬는 시간마다 무리가 은의 필통을 숨겨요. 나도 그 무리에 있어요. 오늘도 숨기자고 해요.', motif: 'house',
                good: ['stopall', '그만하고 무리에게도 멈추자고 한다', '무리가 머뭇거리다 필통을 돌려줘요.', [['은', '필통을 찾아 안심해요', 1], ['무리', '멈출 기회를 얻어요', 1]]],
                bad: ['keep', '오늘도 같이 숨긴다', '은이 쉬는 시간 내내 필통을 찾아요.', '날마다 여럿이 한 친구에게 하면 장난이 아니라 괴롭힘이에요.', [['은', '쉬는 시간이 무서워져요', -1]]],
                mid: ['alone', '나만 빠지고 필통을 돌려준다', '필통은 돌아왔지만 다음 날 무리가 또 숨겨요.', '돌려준 마음은 좋아요. 무리에게도 멈추자고 해야 되풀이가 끝나요.', [['은', '내일이 또 걱정돼요', -1]]] },
              { text: '무리의 한 명이 "우린 그냥 장난친 건데? 왜 진지해?"라고 해요.', motif: 'cloud',
                good: ['name', '"날마다 은만 골랐잖아. 그건 괴롭힘이야" 한다', '무리가 조용해지고 한 명이 "그러네" 해요.', [['무리', '행동을 돌아봐요', 1]]],
                bad: ['laugh', '"그렇긴 하지" 하고 웃어넘긴다', '다음 날 또 숨기자는 말이 나와요.', '웃어넘기면 되풀이가 이어져요. 세 신호를 말해 줘요.', [['은', '다시 걱정돼요', -1]]] },
              { text: '한 주 뒤, 은이 필통을 꺼내 그림을 그려요. 무리의 한 명이 "우리 사과할까?" 해요.', motif: 'sun',
                good: ['sorry', '함께 은에게 사과하고 다시는 안 한다고 말한다', '은이 고개를 끄덕이고 쉬는 시간을 편하게 보내요.', [['은', '마음이 놓여요', 1], ['무리', '바로잡아요', 1]]],
                bad: ['skip', '"지난 일이니 됐어" 하고 말하지 않는다', '은은 무리가 또 그럴까 봐 아직 불안해요.', '멈춘 뒤에는 사과로 바로잡아요. 늦어도 괜찮아요.', [['은', '불안이 남아요', -1]]] },
            ],
            ending: '멈추고 바로잡은 덕분에 은이 쉬는 시간을 편하게 보내요.',
            reasons: SIGN_R,
            good: ['repeat', 'power', 'purpose'],
            talk: '모둠에서 "장난과 괴롭힘을 가르는 질문"을 하나씩 만들어 말해요.',
            conclude: '되풀이·힘의 차이·일부러가 보이면 장난이라고 말해도 괴롭힘이에요. 멈추고 바로잡아요.',
            extra: [{ prompt: '짝에게 "그만하자"를 무리에게 말하는 한 문장을 소리 내어 말해요.', free: true, talk: true }],
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '같은 친구에게 ___ 하면 장난도 괴롭힘이 될 수 있어요.', answer: '되풀이' }, { type: 'short', prompt: '무리에게 "그만하자"고 말할 한 문장을 써요.' }] },
        notes: 'saf-violence 의 \'날아다니는 가방\' 장면과 겹치지 않게 필통 숨기기로 바꿨다. 학생을 무리 역할에 두지만 \'나쁜 아이\'로 부르지 않고 행동만 짚는다.',
      }),
      X('wrap.self-check', {
        title: '나의 장난 자기 점검표', method: '나의 장난 자기 점검표', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개(상대도 즐거운지·멈춰 달라면 멈추기)를 표시한다.', base: '점검 칸 4개를 모두 표시한다.', challenge: '점검 칸 4개를 표시하고, 바꿀 점의 실천 계획을 짧은 글로 구체적으로(언제·무엇을) 쓴다.' },
        wrap: {
          teacher: '"장난을 치기 전에 나에게 물어볼 네 가지를 점검표로 만들었어요." 점검 칸을 함께 읽고 스스로 지킬 것에 표시하게 한다. 출구 2번에서 "웃으면 계속해도 돼요"를 고른 학생에게 "웃는 얼굴 뒤에 싫은 마음이 있을 수 있어요. \'그만해\'라는 말은 바로 멈추는 신호예요"라고 말해 준다. 점검은 다른 친구에게 보이지 않아도 된다고 알려 준다.',
          exitTicket: [
            SELF('나의 장난 점검', ['상대도 즐거운지 살핀다', '멈춰 달라면 바로 멈춘다', '힘의 차이가 없는지 본다', '같은 친구에게 되풀이하지 않는다'], '장난칠 때 지킬 점검에 스스로 표시해요.', { easy: 2, base: 4 }),
            { type: 'choice', prompt: '친구가 웃으며 "그만해"라고 했어요. 어떻게 할까요?', options: ['웃었으니 한 번 더 한다', '바로 멈춘다', '다른 친구에게 넘긴다'], answer: 1, difficulty: 0.15, explain: '"그만해"는 웃으며 말해도 멈춰 달라는 뜻이에요.' },
            { type: 'short', prompt: '내 장난에서 바꿀 점 하나와 실천 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '장난 전에 물어봐요',
          items: [
            { type: 'check', prompt: '장난치기 전에 나에게 물어볼 질문에 표시해요.', options: ['상대도 즐거운가?', '멈춰 달라면 멈췄나?', '여럿이 한 명에게 하나?', '같은 친구에게 되풀이하나?'] },
            { type: 'short', prompt: '괴롭힘을 가르는 세 신호를 써요.' },
          ],
          easy: { note: '"그만해" 하면 바로 멈춰요.', items: [{ type: 'draw', prompt: '친구가 "그만해" 할 때 멈추는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.signs-rubric', {
        title: '세 신호로 사례 설명하기', method: '세 신호로 사례 설명하기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장 이상 쓰고 기준 2개(신호 이름·근거)를 점검한다.', base: '두 문장 이상 쓰고 기준 3개(신호 이름·근거 문장·결과)를 점검한다.', challenge: '세 문장 이상 쓰고, 장난인 사례와 견주는 문장(\'장난\'·\'다툼\'을 넣음)을 더해 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"오늘 본 사례 하나를 골라 왜 괴롭힘인지 친구에게 설명하듯 써 볼까요?" 문장 틀을 칠판에 적어 둔다. "나빠서 괴롭힘이에요"처럼 쓰는 학생에게 "무엇이 되풀이됐고, 누가 더 힘이 셌나요? 사례에서 찾은 말로 써 봐요"라고 묻는다. 결과(잠·마음·학교생활)까지 쓰면 설명이 단단해진다는 점을 짚는다.',
          exitTicket: [
            RUBX('사례 하나가 괴롭힘인 까닭을 세 신호로 써요', { topic: '오늘 본 사례 하나를 골라 괴롭힘인 까닭을 써요(친구 이름은 쓰지 않아요). 예: 여럿이 한 명을 2주째 놀린 사례.', starter: '이 사례는 ___ 신호가 있어서 괴롭힘이다. 왜냐하면 ___.', crit: ['신호 이름을 썼다', '사례에서 근거를 찾아 썼다', '괴롭힘의 결과를 썼다'], must: [['장난', '다툼']], chars: [20, 200], title: '세 신호로 설명하기', sents: [1, 2, 3], chCrit: '장난인 사례와 견주는 문장을 넣었다', chPrompt: '사례가 괴롭힘인 까닭을 쓰고, 장난인 사례와 견주는 문장도 더해요.' }),
            { type: 'choice', prompt: '"둘 다 서로 하면 괴롭힘이 아니다"에 알맞은 생각은?', options: ['늘 맞다', '힘의 차이·일부러가 있으면 괴롭힘일 수 있다', '서로 하면 다 장난이다'], answer: 1, difficulty: 0.2, explain: '서로 주고받아도 한쪽이 더 세고 일부러 되풀이하면 괴롭힘일 수 있어요.' },
          ],
        },
        worksheet: {
          title: '세 신호로 가려요',
          items: [
            { type: 'table', prompt: '사례에 신호가 있으면 ○, 없으면 ×를 써요.', columns: ['사례', '되풀이', '힘의 차이', '일부러'], cells: [['여럿이 한 명을 2주째 놀림', '', '', ''], ['한 번 말다툼하고 사과함', '', '', '']], answer: '○○○, ×××' },
            { type: 'short', prompt: '"한 번이면 괜찮다"는 친구에게 해 줄 말을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 친구 사이 경계: 몸 평가·짓궂은 농담 멈추기 (research-mandatory §2 초: 폭력의 종류 알기, 양성평등·성교육 초: 몸의 경계·'싫어요') ========
  {
    const X = mk('g5-friend-boundary', 5);
    const SCHOOL = [PL('교실', 'school', [1, 1]), PL('보건실', 'hospital', [4, 0]), PL('상담실', 'office', [4, 2]), PL('운동장', 'park', [1, 3]), PL('도서관', 'library', [2, 0]), PL('교무실', 'office', [5, 3])];
    M.push(
      X('intro.boundary-circles', {
        title: '경계 동그라미로 거리 느끼기', method: '경계 동그라미로 거리 느끼기', tool: 'emotion', minutes: 6,
        levels: { easy: '칠판에 두 겹(가족·모르는 사람) 동그라미를 그리고 장면 2개의 마음만 함께 고른다.', base: '세 겹(가족·친한 친구·모르는 사람) 장면 3개의 마음을 고른다.', challenge: '네 겹(반 친구 더함) 장면 4개의 마음을 고르고, 같은 행동도 사람에 따라 다르다는 까닭을 말한다.' },
        intro: {
          teacher: '칠판에 \'나\'를 가운데 두고 가족·친한 친구·반 친구·모르는 사람 동그라미를 그린다. "같은 어깨동무라도 누가 하느냐에 따라 마음이 같을까요?" 시연 단추로 장면마다 마음 카드가 붙는 모습을 보인다. "친한 사이면 몸에 닿아도 다 괜찮아요"라는 말에는 "친한 친구도 갑자기 머리를 쓰다듬으면 놀랄 수 있어요. 경계는 사람마다, 그날마다 달라요"라고 되묻는다.',
          student: '장면마다 그때 들 마음을 고르고, 같은 행동이 사람에 따라 다르게 느껴지는 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '가족이 어깨를 감싸 줘요' }, { id: 's2', label: '친한 친구가 갑자기 머리를 쓰다듬어요' }, { id: 's3', label: '반 친구가 묻고 나서 어깨동무해요' }, { id: 's4', label: '모르는 사람이 어깨동무해요' }], cards: ['편안함', '놀람', '기쁨', '무서움'], shuffle: false }, sequence: [{ match: { s1: '편안함', s4: '무서움' } }, { match: { s1: '편안함', s2: '놀람', s3: '기쁨', s4: '무서움' } }] },
          art: art('a paper child standing in the middle of four nested paper circles, small figures of family, friends and strangers placed on the rings', '나의 경계 동그라미', 'flower', 'peach'),
        },
        notes: 'emotion 교구는 동그라미를 그리지 못해 장면 칸으로 보이고, 동그라미는 교사가 칠판에 그린다.',
      }),
      X('intro.comfort-chart', {
        title: '"이런 말 들으면 불편해요"', method: '"이런 말 들으면 불편해요" 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 \'불편해요\'와 \'괜찮아요\' 두 부분만 짚어 견주게 한다.', base: '세 부분을 읽고 가장 큰 부분과 그 뜻을 말한다.', challenge: '\'괜찮아요\'라는 친구가 있어도 몸 평가 말을 멈춰야 하는 까닭을 말한다.' },
        intro: {
          teacher: '"이 띠그래프는 어느 5학년이 \'키·몸무게 같은 몸 평가 말을 들으면?\'에 답했다고 꾸민 가상 설문이에요. 가장 넓은 부분은 무엇일까요?" 시연 단추로 \'불편해요\'를 고르는 모습을 보인다. "괜찮다는 친구도 있으니 해도 돼요"라는 말에는 "그 말을 듣는 친구가 어느 부분에 있는지 우리는 알 수 있을까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '띠그래프에서 가장 넓은 부분을 찾고, 그것이 무슨 뜻인지 짝에게 한 문장으로 말해 보아요.',
          demo: CHART('band', '몸 평가 말을 들으면(가상 설문)', [['불편해요', 70], ['잘 모르겠어요', 20], ['괜찮아요', 10]], '가장 넓은 부분은?', 0, { unit: '%' }),
          art: art('a long paper band chart split into three colored paper parts, with a speech bubble crossed out above it', '많은 친구가 불편해요', 'cloud', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('act.boundary-sort', {
        title: '괜찮아요/경계 넘었어요', method: '괜찮아요/경계 넘었어요 장면 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '장면 카드 4장을 나누고, 넣을 때 바로 맞는지 알려 주며 장 수가 보인다.', base: '장면 카드 6장을 나누고, 둘째 문항에서 말 카드 6장을 존중하는 말·경계 넘는 말로 나눈다.', challenge: '장면 카드 8장을 나누고, 상황에 따라 달라지는 카드를 셋째 문항에서 짝과 토의한다.' },
        activity: {
          title: '경계 장면 나누기', tool: 'sortboard',
          teacher: '"하이파이브와 옷 들추기 장난은 무엇이 다를까요?" 카드를 넣을 때마다 "상대가 원했나? 먼저 물었나?"를 묻게 한다. "몸매 농담은 칭찬일 때도 있어요"라는 학생에게 "몸을 두고 평가하는 말은 듣는 친구가 고를 수 없어요. 친구가 잘한 일을 말해 주면 어떨까요?"라고 되묻는다. 경계를 넘은 것은 넘은 사람의 잘못이고, 싫다고 말한 친구는 잘한 것이라고 짚는다.',
          task: '장면 카드를 괜찮아요·경계 넘었어요 바구니에 나누고 까닭을 말해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('친구 사이 장면을 괜찮아요와 경계 넘었어요로 나누어요.', { slots: ['괜찮아요', '경계 넘었어요'], groups: { 괜찮아요: ['반가워서 하이파이브', '체육 시간 짝 손잡기', '"해도 돼?" 묻고 어깨동무'], '경계 넘었어요': ['키·몸무게 놀리기', '옷 들추는 장난', '싫다는데 계속 간지럼'] }, extra: { 괜찮아요: ['"안아도 돼?" 묻고 안기'], '경계 넘었어요': ['몸매를 두고 농담하기'] } }, 0.2),
            SB('친구에게 하는 말을 존중하는 말과 경계 넘는 말로 나누어요.', { slots: ['존중하는 말', '경계 넘는 말'], groups: { '존중하는 말': ['"오늘 발표 멋졌어"', '"같이 놀래?"', '"싫으면 말해 줘"'], '경계 넘는 말': ['"너 살쪘다"', '"다리 짧다 ㅋㅋ"', '"그 몸으로 뛰겠어?"'] } }, 0.25,
              { conclude: '몸을 평가하는 말과 원하지 않는 접촉은 친한 사이에도 경계를 넘어요. 먼저 묻고, 싫다면 멈춰요.' }),
            { prompt: '짝과 상황에 따라 달라지는 장면(예: 어깨동무) 하나를 골라 토의해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '괜찮으면 ○, 경계를 넘었으면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['키·몸무게 놀리기', ''], ['묻고 나서 하이파이브', ''], ['옷 들추는 장난', '']], answer: '×, ○, ×' }] },
      }),
      X('act.refuse-dilemma', {
        title: '단짝이 몸 평가 농담을 할 때', method: '갈림길: 단짝이 몸 평가 농담을 할 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(같이 웃을지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("농담인데 왜 진지해?")을 지나 근거를 고른다.', challenge: '갈림 3번(농담 대상 친구 쪽 장면)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 단짝의 농담', tool: 'dilemma',
          teacher: '"단짝 류가 별의 몸을 두고 농담하며 같이 웃자고 해요. 어떻게 할까요?" 고를 때마다 별에게 미친 영향을 읽게 한다. "단짝이니까 같이 웃어 줘야 해요"라는 학생에게 "웃음은 농담을 더 크게 만들어요. 단짝을 지키는 것과 농담을 멈추는 것은 함께 할 수 있어요"라고 말해 준다. 그 자리에서 말하기 어렵다면 자리를 피하고 나중에 말하는 것도 알맞은 길이라고 짚는다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '단짝 류의 농담',
            steps: [
              { text: '단짝 류가 지나가는 별의 몸을 두고 농담하며 "같이 웃자" 해요.', motif: 'house',
                good: ['say', '"그런 말 하지 마" 한다', '류가 멈칫하고 농담을 멈춰요.', [['별', '더 듣지 않아요', 1]]],
                alt: ['later', '자리를 피하고 나중에 류에게 따로 말한다', '류가 "몰랐어" 하며 듣고 있어요.', [['별', '농담이 멈춰요', 1]]],
                bad: ['laugh', '같이 웃는다', '별이 고개를 숙이고 지나가요.', '같이 웃으면 몸 평가 농담이 더 커져요.', [['별', '창피하고 속상해요', -1]]] },
              { text: '류가 "농담인데 왜 그렇게 진지해?"라고 해요.', motif: 'cloud',
                good: ['again', '"농담도 듣는 친구에겐 상처야" 하고 다시 말한다', '류가 "알았어, 안 할게" 해요.', [['류', '행동을 바꿔요', 1]]],
                bad: ['give', '"미안, 그냥 웃자" 한다', '류가 다음에 또 같은 농담을 해요.', '한 번 더 또렷하게 말해야 멈춰요.', [['별', '또 듣게 돼요', -1]]] },
              { text: '농담 대상이었던 별이 쉬는 시간에 혼자 앉아 있어요.', motif: 'flower',
                good: ['near', '별 곁에 가서 "같이 놀자" 한다', '별이 조금 웃으며 함께 일어나요.', [['별', '혼자가 아니에요', 1]]],
                bad: ['shrug', '"그냥 웃어넘겨" 한다', '별은 더 말할 사람이 없다고 느껴요.', '농담의 대상에게 참으라고 하지 않아요.', [['별', '더 외로워요', -1]]] },
            ],
            ending: '멈추자고 말하고 곁에 있어 준 덕분에 별이 편해졌어요.',
            reasons: [{ id: 'hurt', text: '몸 평가 농담은 듣는 친구에게 상처가 된다' }, { id: 'stop', text: '친한 사이여도 멈추자고 말할 수 있다' }, { id: 'near', text: '농담 대상 친구 곁에 있어 준다' }, { id: 'joke', text: '농담이니까 웃어넘겨야 한다', why: '농담이라도 상대가 싫으면 멈춰야 해요.' }],
            good: ['hurt', 'stop', 'near'],
            talk: '모둠에서 "단짝에게 농담을 멈추자고 말하는 방법"을 하나씩 말해요.',
            conclude: '단짝이어도 몸 평가 농담에는 웃지 않고, 멈추자고 말하거나 나중에 따로 말해요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '단짝이 몸 평가 농담을 할 때 할 말을 한 문장으로 써요.' }] },
      }),
      X('act.say-no-steps', {
        title: '거절 세 단계 몸으로 연습', method: '거절 세 단계 몸으로 연습', tool: 'timer', minutes: 26,
        levels: { easy: '거절 차례 카드 2장(\'싫어\' 말하기·자리 떠나 알리기)을 놓고, 점검 칸 2개를 표시한다.', base: '거절 세 단계 카드 3장을 놓고, 짝 연습 타이머를 맞춘 뒤 점검 칸 3개를 표시한다.', challenge: '세 단계를 놓고 연습한 뒤 목소리·자세까지 점검 칸 4개를 표시한다.' },
        activity: {
          title: '거절 세 단계 연습', tool: 'timer',
          teacher: '"원하지 않는 장난이 이어질 때 쓸 거절 세 단계를 몸으로 익혀 볼까요?" 반 전체가 눈 보며 "싫어" → 손바닥 내밀어 멈춤 → 자리 떠나기를 함께 따라 하게 한다. "작게 말하면 덜 미안해요"라는 학생에게 "작게 말하면 장난으로 들릴 수 있어요. 또렷하게 말하는 것은 무례가 아니에요"라고 말해 준다. 연습 장면은 지어낸 것으로만 하고, 몸에 닿는 동작은 하지 않는다.',
          task: '거절 세 단계 차례를 놓고, 짝과 가상 장면으로 연습한 뒤 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '거절 세 단계를 차례대로 카드를 놓아요.', toolOptions: { title: '거절 세 단계', cards: ['손바닥으로 멈춤 보이기', '자리 떠나 어른께 알리기', '눈 보며 "싫어" 말하기'] }, target: { order: ['눈 보며 "싫어" 말하기', '손바닥으로 멈춤 보이기', '자리 떠나 어른께 알리기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '거절 두 단계를 차례대로 카드를 놓아요.', toolOptions: { cards: ['자리 떠나 어른께 알리기', '눈 보며 "싫어" 말하기'] }, target: { order: ['눈 보며 "싫어" 말하기', '자리 떠나 어른께 알리기'] } } } },
            { prompt: '짝과 번갈아 30초씩, 쉬기 10초, 4번 연습하도록 타이머를 맞춰요(우리 반 약속).', toolOptions: { title: '짝 연습 타이머', plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 4 } }, difficulty: 0.2 },
            { prompt: '짝 연습을 한 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '거절 연습 점검' }, target: { selfCheck: ['또렷한 목소리로 "싫어" 했다', '손바닥으로 멈춤을 보였다', '자리 떠나 어른께 가는 데까지 했다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '짝 연습을 한 뒤 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['또렷한 목소리로 "싫어" 했다', '자리 떠나 어른께 가는 데까지 했다'] } }, challenge: { prompt: '짝 연습을 한 뒤 목소리·자세까지 스스로 표시해요(네 칸).', target: { selfCheck: ['또렷한 목소리로 "싫어" 했다', '손바닥으로 멈춤을 보였다', '자리 떠나 어른께 가는 데까지 했다', '허리를 펴고 눈을 보았다'] } } } },
            { prompt: '짝과 가상 장면("싫다는데 계속 간지럼")으로 세 단계를 해 보고 서로 칭찬해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '눈 보며 "싫어" → 손으로 ___ → 자리 떠나 어른께 알리기', answer: '멈춤' }, { type: 'check', prompt: '거절할 때 지킬 것에 표시해요.', options: ['또렷한 목소리', '눈 보기', '손바닥으로 멈춤', '어른께 알리기'] }] },
        notes: '연습 장면은 지어낸 것만 쓰고, 몸에 닿는 동작은 하지 않는다. 30초·10초는 우리 반 연습값이다.',
      }),
      X('wrap.boundary-plan', {
        title: '나의 경계 지키기 다짐 쓰기', method: '나의 경계 지키기 다짐 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '두 문장 이상 쓰고 기준 3개(구체적·존중하는 말·할 말)를 점검한다.', challenge: '상황 예(\'~때\'·\'~하면\')를 넣어 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"내가 지킬 친구의 경계와, 누가 내 경계를 넘으면 할 말을 다짐으로 써 볼까요?" 문장 틀을 칠판에 적어 둔다. "남의 몸에 손대지 않기"처럼 넓게 쓰는 학생에게 "언제, 무엇을 안 할지 더 구체적으로 써 볼까요? 예를 들면 \'묻기 전에는 어깨동무하지 않기\'처럼요"라고 묻는다. 내 경계를 말하는 것은 이기적인 일이 아니라는 점을 짚는다.',
          exitTicket: [
            RUBX('내가 지킬 친구의 경계와 내 경계를 넘으면 할 말을 써요', { topic: '‘내가 지킬 친구의 경계’와 ‘내 경계를 넘으면 할 말’을 써요(이름은 쓰지 않아요).', starter: '나는 묻기 전에 ___ 하지 않겠다. 누가 내 경계를 넘으면 "___" 하고 말하겠다.', crit: ['구체적인 행동을 썼다', '존중하는 말로 썼다', '내 경계를 넘을 때 할 말을 썼다'], must: [['때', '하면']], chars: [20, 200], title: '나의 경계 다짐', sents: [1, 2, 3], chCrit: '상황 예를 넣었다', chPrompt: '상황 예를 넣어 경계 다짐을 세 문장으로 써요.' }),
            { type: 'choice', prompt: '친구가 "싫어"라고 했는데 계속하면 누구의 잘못인가요?', options: ['싫다고 한 친구', '계속한 사람', '둘 다 아니다'], answer: 1, difficulty: 0.15, explain: '싫다는데 계속한 사람의 잘못이에요. 싫다고 말한 친구는 잘한 거예요.' },
          ],
        },
        worksheet: {
          title: '먼저 묻고, 싫다면 멈춰요',
          items: [
            { type: 'short', prompt: '내가 지킬 친구의 경계 하나를 써요.' },
            { type: 'short', prompt: '내 경계를 넘을 때 할 말을 따옴표 안에 써요.' },
          ],
          easy: { note: '"싫어"는 또렷하게 말해도 돼요.', items: [{ type: 'draw', prompt: '"싫어"라고 말하며 손바닥을 내민 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.boundary-help', {
        title: '불편할 때 알릴 곳 지도', method: '불편할 때 알릴 곳 지도', tool: 'map', minutes: 6,
        levels: { easy: '장소 2곳(보건실·상담실)만 있는 지도에 핀을 꽂고, 핀을 놓으면 이름이 보인다.', base: '장소 6곳 가운데 상담 선생님을 만나는 곳에 핀을 꽂는다.', challenge: '같은 지도에서 방과 후 교무실 선생님을 찾는 곳에 핀을 꽂고, 방과 후에 알릴 사람을 고른다.' },
        wrap: {
          teacher: '"몸에 닿는 장난이나 몸 평가 말이 불편할 때, 학교 안에서 누구에게 갈 수 있을까요?" 지도에서 교실·보건실·상담실을 손가락으로 따라가게 한다. "이런 일로 상담실에 가면 이상해요"라는 말에는 "불편한 마음을 말하러 가는 곳이 상담실이에요. 말한 사람은 잘한 거예요"라고 말해 준다. 활동지 빈칸에는 ' + HELPNO + '를 교사가 칠판에 적어 주고 옮겨 쓰게 한다.',
          exitTicket: [
            MAPX('몸 평가 말이 불편할 때 상담 선생님을 만나는 곳에 핀을 꽂아요.', '우리 학교 도움 지도(가상)', SCHOOL, '상담실', { easyKeep: ['보건실', '상담실'], challenge: { prompt: '방과 후 교실이 비었을 때 선생님을 찾을 곳에 핀을 꽂아요.', target: { place: '교무실' } } }),
            { type: 'choice', prompt: '방과 후에 불편한 일이 생기면 먼저 알릴 사람은?', options: ['보호자', '아무에게도 말하지 않기', '모르는 어른'], answer: 0, difficulty: 0.15, explain: '방과 후에는 보호자께 먼저 알리고, 다음 날 선생님께도 말해요.' },
          ],
        },
        worksheet: {
          title: '불편할 때 알릴 곳',
          items: [
            { type: 'table', prompt: '우리 학교 도움 곳을 써요(번호는 선생님이 알려 줘요).', columns: ['도움 곳', '만날 사람'], cells: [['상담실', ''], ['보건실', ''], [HELPNO, '']] },
            { type: 'short', prompt: '불편한 장난이 있을 때 알릴 믿는 어른 한 명을 써요(이름 대신 \'담임 선생님\'처럼).' },
          ],
        },
        notes: `지도는 가상 학교다. 우리 학교 실제 자리와 견주어 보게 하고, ${HELPNO}는 학교에서 확인한 것을 칠판에 적어 준다(체계도 concepts 에 번호가 없어 모듈에 숫자를 넣지 않았다).`,
      }),
    );
  }

  // ======== 5학년 · 단톡방 저격·방폭·강퇴 (research-mandatory §2 초: 방관자에서 조력자로, 사이버폭력 예방) ========
  {
    const X = mk('g5-chatroom-exclusion', 5);
    M.push(
      X('intro.chat-replay', {
        title: '단톡방 대화 재생과 마음', method: '단톡방 대화 재생 보고 마음 짐작', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 기록 3줄을 읽어 주고, 남겨진 로의 마음 하나를 함께 고른다.', base: '칠판의 기록 5줄을 한 줄씩 읽고 장면 세 칸의 마음을 고른다.', challenge: '나간 친구 가운데 한 명이 다르게 했다면 어땠을지 고르고 짝에게 말한다.' },
        intro: {
          teacher: '칠판에 가상 모둠 단톡방 기록을 한 줄씩 적어 간다: "로: 내일 발표 연습 언제 해?" → "(새가 나갔습니다)" → "(온이 나갔습니다)" → "로: 얘들아?" → "(대화방에 로 혼자 남았습니다)". "한 사람이 들어오자 모두 나가는 것을 \'방폭\'이라고 해요. 로는 어떤 마음일까요?" 시연 단추로 마음 카드가 붙는 모습을 보인다. "나가는 건 내 자유예요"라는 말에는 "혼자 나가는 것과 한 명만 두고 다 같이 나가는 것은 무엇이 다를까요?"라고 되묻는다.',
          student: '기록을 한 줄씩 읽고, 혼자 남은 로와 나간 친구의 마음을 짐작해 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '로가 발표 연습을 물을 때' }, { id: 's2', label: '모두 나가고 로 혼자 남았을 때' }, { id: 's3', label: '나간 온이 남은 로를 떠올릴 때' }], cards: ['기쁨', '속상함', '미안함', '신남'], shuffle: false }, sequence: [{ match: { s2: '속상함' } }, { match: { s1: '기쁨', s2: '속상함', s3: '미안함' } }] },
          art: art('a paper phone screen with a chat list where small paper figures walk out of the frame one by one, leaving one figure alone', '혼자 남은 대화방', 'cloud', 'sky'),
        },
        notes: '실제 앱 이름이나 반 단톡방 화면을 쓰지 않는다. 기록은 지어낸 것이다.',
      }),
      X('intro.chat-data', {
        title: '단톡방 놀림 유형 그래프', method: '단톡방 놀림 유형 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 2개(저격 글·몰래 캡처)만 짚어 더 많은 쪽을 고른다.', base: '막대 4개를 읽고 가장 많은 유형과 까닭을 모둠에서 말한다.', challenge: '가장 많은 유형과 가장 적은 유형의 차이를 수로 말한다(14 − 6 = 8명).' },
        intro: {
          teacher: '"이 막대그래프는 어느 5학년이 \'단톡방에서 본 놀림\'에 답했다고 꾸민 가상 설문이에요. 가장 높은 막대는 무엇일까요?" 시연 단추로 \'저격 글\'을 고르는 모습을 보인다. "이름을 안 쓰면 저격이 아니에요"라는 말에는 "이름이 없어도 모두가 누군지 안다면, 그 친구에게는 어떨까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '그래프에서 가장 많은 유형을 찾고, 왜 많을지 까닭을 모둠에서 한 가지 말해 보아요.',
          demo: CHART('bar', '단톡방에서 본 놀림(가상 설문)', [['저격 글', 14], ['한 명 빼고 새 방', 11], ['비웃는 이모티콘', 9], ['몰래 캡처', 6]], '가장 많은 유형은?', 0, { xLabel: '유형', yLabel: '학생 수' }),
          art: art('a paper bar chart with four bars, each topped with a tiny paper chat bubble icon', '단톡방 놀림은 어떤 모양일까?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('act.chat-flow', {
        title: '저격 글이 커지는 차례', method: '저격 글이 커지는 원인과 결과 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '장면 카드 3장을 차례대로 놓고, 둘째 문항에서 결과 2칸을 잇는다.', base: '장면 카드 4장을 차례대로 놓고 결과 3칸을 잇는다.', challenge: '틀린 카드를 빼고 4장을 놓은 뒤, 셋째 문항에서 단계마다 멈추는 행동 4칸을 잇는다.' },
        activity: {
          title: '저격 글이 커지는 차례', tool: 'timeline',
          teacher: '"저격 글 하나가 어떻게 반 분위기까지 바꿀까요?" 카드를 놓을 때마다 "그래서 무슨 일이 생겼나요?"를 묻게 한다. "ㅋㅋ 하나는 아무 일도 아니에요"라는 학생에게 "ㅋㅋ가 쌓이면 글쓴이는 다들 같은 편이라고 느껴요. 다음 단계로 가게 만드는 것이 무엇일까요?"라고 묻는다. 어느 단계에서든 멈출 수 있다는 점을 짚는다.',
          task: '저격 글이 커지는 장면을 차례로 놓고, 단계마다 결과와 멈추는 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('저격 글이 커지는 장면을 차례대로 놓아요.', ['한 명이 저격 글을 씀', '좋아요·ㅋㅋ가 달림', '캡처가 다른 방으로', '반 분위기가 바뀜'], { easy: [0, 1, 3], trap: '글이 저절로 사라짐' }, 0.2),
            MAT('단계마다 생기는 결과 카드를 이어요.', [['좋아요·ㅋㅋ가 달림', '글이 더 힘을 얻음'], ['캡처가 다른 방으로', '모르는 사람도 봄'], ['반 분위기가 바뀜', '대상 친구가 혼자 됨']], ['아무도 못 봄'], { easy: 2, base: 3 }, 0.25),
            MAT('단계마다 멈추는 행동 카드를 이어요.', [['한 명이 저격 글을 씀', '올리기 전 다시 읽기'], ['좋아요·ㅋㅋ가 달림', '반응하지 않기'], ['캡처가 다른 방으로', '퍼 나르지 않기'], ['반 분위기가 바뀜', '어른께 알리기']], [], { easy: 2, base: 3 }, 0.25,
              { conclude: '저격 글은 반응·캡처로 커져요. 반응하지 않고, 퍼 나르지 않고, 어른께 알려 멈춰요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '저격 글을 보았을 때 내가 멈출 수 있는 단계와 행동을 써요.' }] },
      }),
      X('act.chat-group-dilemma', {
        title: '"걔 빼고 새 방 파자"', method: '갈림길: "걔 빼고 새 방 파자"', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(새 방에 들어갈지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(나를 놀리는 말)을 지나 근거를 고른다.', challenge: '갈림 3번(빠진 새의 다음 날)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 한 명 빼고 새 방', tool: 'dilemma',
          teacher: '"친구들이 새를 빼고 새 방을 만들자고 해요. 들어가기만 하고 아무 말 안 하면 괜찮을까요?" 고를 때마다 새에게 미친 영향을 읽게 한다. "말 안 하면 나는 상관없어요"라는 학생에게 "새 방에 있는 사람 수가 많을수록 새는 어떻게 느낄까요?"라고 묻는다. 따돌림을 알린 사람은 고자질이 아니라 친구를 지킨 것이라고 짚는다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '한 명 빼고 새 방',
            steps: [
              { text: '모둠 친구들이 "새 빼고 새 방 파자"며 나를 초대해요.', motif: 'house',
                good: ['say', '"빼는 건 따돌림이야" 쓰고 어른께 알린다', '새 방을 만들자던 말이 멈춰요.', [['새', '혼자 남지 않아요', 1]]],
                bad: ['join', '새 방에 들어간다', '새만 모르는 방이 생겨요.', '한 명만 빼는 방은 사이버 따돌림이에요.', [['새', '혼자 남아요', -1]]],
                mid: ['quiet', '들어가되 아무 말 안 한다', '방 인원이 늘어나 새를 빼는 일이 굳어져요.', '조용히 있으려는 마음은 알지만, 들어가면 따돌림에 힘을 보태요.', [['새', '더 외로워져요', -1]]] },
              { text: '친구들이 "왜 진지해? 너도 빼 버린다?" 하며 나를 놀려요.', motif: 'cloud',
                good: ['save', '화면을 남기고 보호자께 보여 드린다', '보호자가 선생님과 함께 돕기로 해요.', [['나', '혼자 버티지 않아요', 1]]],
                bad: ['flame', '똑같이 욕으로 받아친다', '방이 더 시끄러워지고 다툼이 커져요.', '맞받아치면 더 커져요. 화면을 남기고 알려요.', [['나와 친구들', '더 다쳐요', -1]]] },
              { text: '다음 날, 빠졌던 새가 교실에서 혼자 앉아 있어요.', motif: 'sun',
                good: ['sit', '"같이 하자" 하고 새 곁에 앉는다', '새가 고개를 들고 웃어요.', [['새', '혼자가 아니에요', 1]]],
                bad: ['ignore', '어제 일은 모른 척한다', '새는 반 모두가 등을 돌렸다고 느껴요.', '빠진 친구 곁에 있어 주는 것도 방어자 행동이에요.', [['새', '더 외로워요', -1]]] },
            ],
            ending: '빼지 말자고 말하고 곁에 있어 준 덕분에 새가 혼자가 아니에요.',
            reasons: [{ id: 'exclude', text: '한 명만 빼는 방은 따돌림이다' }, { id: 'tell', text: '화면을 남겨 어른께 알리면 도움을 받는다' }, { id: 'near', text: '빠진 친구 곁에 있어 준다' }, { id: 'free', text: '방에 들어가고 나가는 건 내 자유다', why: '한 명을 빼려고 다 같이 움직이면 따돌림이에요.' }],
            good: ['exclude', 'tell', 'near'],
            talk: '모둠에서 "새 방에 초대받았을 때 쓸 한 문장"을 하나씩 말해요.',
            conclude: '한 명만 빼는 방에는 들어가지 않고, 화면을 남겨 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '"걔 빼고 새 방 파자"는 말에 알맞은 행동은?', options: ['조용히 들어간다', '"빼는 건 따돌림이야" 하고 알린다', '방을 하나 더 판다'], answer: '"빼는 건 따돌림이야" 하고 알린다' }] },
      }),
      X('act.chat-respond', {
        title: '동조/방어 말 나누기', method: '동조/방어 말 나누기', tool: 'sortboard', minutes: 26,
        levels: { easy: '답글 카드 4장을 나누고, 넣을 때 바로 맞는지 알려 주며 장 수가 보인다.', base: '답글 카드 6장을 동조·구경·방어로 나누고, 둘째 문항에서 방어 말을 안전한 말과 또 다른 공격으로 가른다.', challenge: '답글 카드 9장을 나누고, 셋째 문항에서 구경 카드를 방어 말로 바꿔 짝에게 말한다.' },
        activity: {
          title: '단톡방 답글 나누기', tool: 'sortboard',
          teacher: '"\'...\'만 다는 것은 어느 상자일까요? 아무 말 안 한 것과 같을까요?" 카드를 넣을 때마다 저격 글을 쓴 사람에게 어떤 신호가 가는지 말하게 한다. "똑같이 욕해 주는 게 방어예요"라는 학생에게 "그러면 싸움이 커지고 나도 다칠 수 있어요. 멈추게 하는 말과 공격하는 말은 달라요"라고 말해 준다. 방어 말은 대상 친구가 아니라 행동을 멈추게 한다는 점을 짚는다.',
          task: '단톡방 답글 카드를 동조·구경·방어 바구니에 나누고, 안전한 방어 말을 골라요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('단톡방 답글 카드를 동조·구경·방어 바구니에 나누어요.', { slots: ['동조', '구경', '방어'], groups: { 동조: ['"ㅋㅋ 인정"', '"걔 원래 그래"'], 구경: ['읽고 아무 말 안 함', '"..."'], 방어: ['"그만하자"', '"이거 선생님께 말할게"'] }, extra: { 동조: ['웃는 이모티콘 달기'], 구경: ['알림만 끄고 둠'], 방어: ['"걔도 우리 반이야"'] } }, 0.2),
            SB('방어하려는 답글을 안전한 방어 말과 또 다른 공격으로 나누어요.', { slots: ['안전한 방어 말', '또 다른 공격'], groups: { '안전한 방어 말': ['"그만하자, 선 넘었어"', '"글 내려 줘"', '"선생님께 알릴게"'], '또 다른 공격': ['"너도 똑같이 놀려 줄까?"', '"너 진짜 최악이다"', '"네 비밀 다 퍼뜨린다"'] } }, 0.25,
              { conclude: '구경도 글쓴이에게 힘을 줘요. 공격하지 않고 멈추게 하는 말로 방어해요.' }),
            { prompt: '구경 카드 하나를 방어 말로 바꿔 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '답글이 어느 역할인지 써요(동조·구경·방어).', columns: ['답글', '역할'], cells: [['"ㅋㅋ 인정"', ''], ['읽고 아무 말 안 함', ''], ['"그만하자"', '']], answer: '동조, 구경, 방어' }, { type: 'short', prompt: '구경하는 답글 하나를 방어하는 말로 바꿔 써요.' }] },
      }),
      X('wrap.chat-plan', {
        title: '단톡방 실천 계획 쓰기', method: '단톡방 실천 계획 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 할 일 한 가지를 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '할 일 두 가지를 두 문장 이상 쓰고 기준 3개를 점검한다.', challenge: '친구에게 권할 문장(\'같이\'·\'함께\'·\'하자\')까지 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"내일부터 단톡방에서 할 일 두 가지를 정해 볼까요?" 문장 틀을 칠판에 적는다. "착하게 지내기"처럼 쓰는 학생에게 "저격 글을 보면 무엇을 누르지 않고, 무엇을 할지 써 봐요"라고 묻는다. 나와 친구가 모두 안전한 계획인지 다시 읽게 한다.',
          exitTicket: [
            RUBX('단톡방에서 내가 할 일 두 가지를 써요', { topic: '단톡방에서 내가 할 일 두 가지를 써요(실제 방 이름·친구 이름은 쓰지 않아요).', starter: '단톡방에서 나는 ___ 하겠다. 그리고 ___ 하겠다.', crit: ['무엇을 할지 구체적으로 썼다', '나와 친구 모두에게 안전하다', '내가 지킬 수 있다'], must: [['같이', '함께', '하자']], chars: [20, 200], title: '단톡방 실천 계획', sents: [1, 2, 3], chCrit: '친구에게 권할 문장을 넣었다', chPrompt: '단톡방 실천 두 가지와 친구에게 권할 문장을 써요.' }),
            { type: 'choice', prompt: '저격 글에 친구들이 ㅋㅋ를 달고 있어요. 알맞은 행동은?', options: ['나도 ㅋㅋ를 단다', '반응하지 않고 화면을 남겨 알린다', '그 방에서 몰래 나간다'], answer: 1, difficulty: 0.2, explain: '반응하지 않으면 글이 커지지 않고, 화면을 남기면 어른이 도울 수 있어요.' },
          ],
        },
        worksheet: {
          title: '단톡방에서 나는',
          items: [
            { type: 'check', prompt: '단톡방에서 지킬 것에 표시해요.', options: ['저격 글에 반응하지 않기', '한 명 빼는 방에 안 들어가기', '화면 남기고 어른께 알리기'] },
            { type: 'short', prompt: '친구에게 권할 단톡방 약속을 한 문장으로 써요.' },
          ],
        },
      }),
      X('wrap.chat-check', {
        title: '단톡방 습관 자기 점검', method: '단톡방 습관 자기 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개를 표시한다.', base: '점검 칸 3개(반응 안 하기·빼는 방 안 들어가기·화면 남기고 알리기)를 표시한다.', challenge: '점검 칸 3개를 표시하고, 지키기 어려운 항목의 까닭과 방법을 고르기·짧은 글로 쓴다.' },
        wrap: {
          teacher: '"이번 주 단톡방에서 지킬 습관에 스스로 표시해 볼까요?" 점검 칸을 함께 읽는다. "친구가 다 들어가면 나만 안 들어가기 어려워요"라는 말에는 "어려운 게 당연해요. 그럴 때 혼자 버티지 말고 어른께 먼저 말해도 돼요"라고 말해 준다. 표시는 남에게 보이지 않아도 된다고 알려 준다.',
          exitTicket: [
            SELF('단톡방 습관 점검', ['저격 글에 반응하지 않는다', '한 명 빼는 방에 들어가지 않는다', '화면을 남기고 어른께 알린다'], '이번 주 단톡방에서 지킬 것에 스스로 표시해요.', { easy: 2, base: 3 }),
            { type: 'choice', prompt: '"모두 들어가서 나만 빠지기 어려워요"일 때 도움이 되는 방법은?', options: ['그냥 같이 들어간다', '어른께 먼저 말하고 도움을 받는다', '아무도 모르게 혼자 참는다'], answer: 1, difficulty: 0.2, explain: '어려울 때는 혼자 버티지 말고 어른께 먼저 말해요.' },
            { type: 'short', prompt: '지키기 가장 어려운 항목과 그 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '단톡방 습관 점검',
          items: [
            { type: 'table', prompt: '지킬 수 있으면 ○, 어려우면 △를 써요.', columns: ['습관', '○ / △'], cells: [['저격 글에 반응하지 않기', ''], ['빼는 방에 안 들어가기', ''], ['화면 남기고 알리기', '']] },
            { type: 'short', prompt: '△를 한 항목을 지킬 방법 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 기프티콘·데이터 셔틀은 강요 (research-mandatory §2 초: 폭력의 종류 알기, 사이버폭력 예방) ========
  {
    const X = mk('g5-gifticon-shuttle', 5);
    const COUPON = [{ id: 'd1', text: '월 아이스크림 쿠폰', price: 1500 }, { id: 'd2', text: '화 음료 쿠폰', price: 2000 }, { id: 'd3', text: '수 과자 쿠폰', price: 1500 }, { id: 'd4', text: '목 게임 아이템', price: 3000 }, { id: 'd5', text: '금 빵 쿠폰', price: 2000 }];
    M.push(
      X('intro.shuttle-msg', {
        title: '"핫스팟 좀 켜 봐" 메시지', method: '"핫스팟 좀 켜 봐" 메시지 읽기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 메시지 2개(첫 부탁·"안 켜면 알지?")만 읽어 주고 마음을 함께 고른다.', base: '메시지 3개를 차례로 읽고 받는 친구의 마음 변화를 고른다.', challenge: '어느 메시지부터 강요인지 고르고, 그 근거(되풀이·겁주는 말)를 말한다.' },
        intro: {
          teacher: '칠판에 지어낸 메시지 셋을 차례로 적는다: "데이터 좀 켜 줘" → "또 켜 줘, 빨리" → "안 켜면 알지?". "메시지를 받는 진은 처음과 마지막에 마음이 어떻게 달라졌을까요?" 시연 단추로 마음 카드가 붙는 모습을 보인다. "켜 준 건 진이 고른 거니까 강요가 아니에요"라는 말에는 "\'안 켜면 알지?\' 뒤에 진이 거절할 수 있었을까요?"라고 되묻는다. 오늘은 셔틀이 왜 강요인지 배운다고 밝힌다.',
          student: '메시지가 바뀔 때마다 받는 친구의 마음이 어떻게 달라지는지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"데이터 좀 켜 줘"' }, { id: 's2', label: '"또 켜 줘, 빨리"' }, { id: 's3', label: '"안 켜면 알지?"' }], cards: ['놀람', '걱정', '무서움', '신남'], shuffle: false }, sequence: [{ match: { s1: '놀람', s3: '무서움' } }, { match: { s1: '놀람', s2: '걱정', s3: '무서움' } }] },
          art: art('a paper phone with three message bubbles stacked, each bubble darker than the one before, and a worried paper child holding the phone', '부탁이 강요로 바뀔 때', 'cloud', 'sky'),
        },
        notes: '메시지는 지어낸 것이다. 실제 메신저 이름을 쓰지 않는다. 학생에게 비슷한 메시지를 받았는지 묻지 않는다.',
      }),
      X('intro.shuttle-budget', {
        title: '용돈에서 사라지는 돈', method: '내 용돈에서 사라지는 돈 계산', tool: 'economy', minutes: 6,
        levels: { easy: '시연에서 쿠폰 두 번(월·화)을 빼 남는 돈을 함께 셈한다.', base: '쿠폰 네 번(월~목)을 빼 남는 돈을 셈하고 작은 금액이 쌓인다는 것을 말한다.', challenge: '한 주에 빠진 돈으로 한 달(네 주)이면 얼마가 되는지 어림한다.' },
        intro: {
          teacher: '"지어낸 친구 율의 일주일 용돈은 1만 원이에요(가상). 친구가 억지로 보내라고 한 쿠폰을 하나씩 빼 볼까요?" 시연 단추로 막대가 차오르는 모습을 보이고, 월·화 쿠폰을 빼면 6500원, 목요일까지 빼면 2000원이 남는다는 것을 함께 셈한다. "1500원은 작은 돈이라 괜찮아요"라는 말에는 "작은 돈도 날마다 쌓이면 일주일에 얼마일까요? 그리고 율은 내고 싶어서 냈을까요?"라고 되묻는다.',
          student: '가상 용돈 1만 원에서 억지로 보낸 쿠폰 값을 빼면 얼마가 남을지 어림해 짝에게 말해 보아요.',
          demo: { tool: 'economy', options: { mode: 'budget', budget: 10000, items: COUPON, ask: '억지로 보낸 쿠폰 값(가상)' }, sequence: [{ budget: { must: ['d1', 'd2'], count: 2 } }, { budget: { must: ['d1', 'd2', 'd3', 'd4'], count: 4 } }] },
          art: art('a paper wallet with paper coins slipping out one by one into small paper gift boxes, and a paper bar shrinking', '작은 돈도 쌓여요', 'star', 'buttercup'),
        },
        notes: '용돈 1만 원과 쿠폰 값은 수업용 가상 값이다. 학생의 실제 용돈을 묻거나 적게 하지 않는다.',
      }),
      X('act.shuttle-sort', {
        title: '부탁/강요 나누기', method: '부탁/강요 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '메시지 카드 4장을 나누고, 넣을 때 바로 맞는지 알려 주며 장 수가 보인다.', base: '메시지 카드 6장을 부탁·강요로 나누고, 둘째 문항에서 이어진 메시지가 언제 강요로 바뀌는지 가른다.', challenge: '메시지 카드 8장을 나누고, 처음엔 부탁이었다가 강요로 바뀌는 카드를 찾아 둘째 문항에서 가른다.' },
        activity: {
          title: '부탁과 강요 가르기', tool: 'sortboard',
          teacher: '"부탁과 강요는 무엇이 다를까요? 거절해도 괜찮은지 보면 알 수 있어요." 카드를 넣을 때마다 "이 말에 \'싫어\'라고 하면 어떻게 될까?"를 묻게 한다. "내가 주겠다고 했으니 강요가 아니에요"라는 학생에게 "거절하면 빼겠다는 말을 들은 뒤라면, 정말 고른 걸까요?"라고 되묻는다. 강요를 한 사람이 잘못이고 낸 친구의 잘못이 아니라는 점을 짚는다.',
          task: '메시지 카드를 부탁과 강요 바구니에 나누고, 강요로 바뀌는 순간을 찾아요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('메시지 카드를 부탁과 강요 바구니에 나누어요.', { slots: ['부탁', '강요'], groups: { 부탁: ['"한 번 빌려줄래?"', '"생일이라 같이 선물하자"', '"싫으면 안 해도 돼"'], 강요: ['"안 주면 단톡방에서 뺀다"', '"매일 쿠폰 보내"', '"너 돈 많잖아, 사 와"'] }, extra: { 부탁: ['"고마워, 다음엔 내가 살게"'], 강요: ['"어제처럼 또 보내, 당연하지?"'] } }, 0.2),
            SB('이어진 메시지를 아직 부탁과 강요로 바뀜으로 나누어요.', { slots: ['아직 부탁', '강요로 바뀜'], groups: { '아직 부탁': ['"한 번만 켜 줄래?"', '"괜찮으면 같이 하자"'], '강요로 바뀜': ['"오늘도 켜, 당연하잖아"', '"안 켜면 뺀다"'] }, easy: 2, extra: { '강요로 바뀜': ['"말하면 가만 안 둬"'] } }, 0.25,
              { conclude: '거절하면 손해를 주겠다는 말, 되풀이되는 요구는 강요예요. 강요한 사람의 잘못이에요.' }),
            { prompt: '짝과 "작은 금액은 괜찮다"는 생각이 왜 틀렸는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '강요인 메시지는 무엇인가요?', options: ['"싫으면 안 해도 돼"', '"안 주면 단톡방에서 뺀다"', '"같이 선물하자"'], answer: '"안 주면 단톡방에서 뺀다"' }] },
      }),
      X('act.shuttle-dilemma', {
        title: '선배가 게임 아이템을 요구', method: '갈림길: 선배가 게임 아이템을 요구할 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(보낼지 거절할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(겁주는 말)을 지나 근거를 고른다.', challenge: '갈림 3번(알린 뒤 학교가 돕는 장면)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 선배의 요구', tool: 'dilemma',
          teacher: '"학원 선배가 게임 아이템을 사서 보내라고 해요. 한 번만 보내면 끝날까요?" 고를 때마다 결과와 영향을 읽게 한다. "말하면 더 혼날까 봐 무서워요"라는 학생에게 "그 마음이 드는 게 당연해요. 그래서 혼자가 아니라 어른과 함께 해결해요. 알린 사람은 잘한 거예요"라고 말해 준다. 거절하고 화면을 남기는 것도, 바로 어른께 알리는 것도 알맞은 길이라고 짚는다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '선배의 아이템 요구',
            steps: [
              { text: '학원 선배가 메시지로 "게임 아이템 사서 보내"라고 해요.', motif: 'star',
                good: ['tell', '거절하고 보호자·선생님께 알린다', '보호자가 선배의 메시지를 함께 봐요.', [['나', '혼자 버티지 않아요', 1]]],
                alt: ['record', '거절하고 화면을 남긴다', '메시지 화면이 날짜와 함께 남았어요.', [['나', '나중에 보여 드릴 수 있어요', 1]]],
                bad: ['send', '보낸다', '다음 날 "또 보내"라는 메시지가 와요.', '한 번 보내면 요구가 되풀이되기 쉬워요.', [['나', '용돈이 줄고 걱정이 커져요', -1]]] },
              { text: '선배가 "말하면 가만 안 둬"라고 보내요.', motif: 'storm',
                good: ['show', '보호자께 그 화면도 보여 드린다', '보호자가 담임 선생님께 연락해요.', [['나', '어른이 함께 지켜 줘요', 1]]],
                bad: ['hide', '무서워서 몰래 보낸다', '요구가 더 커지고 아무도 몰라요.', '겁주는 말은 꼭 어른께 알려야 해요.', [['나', '더 무서워져요', -1]]] },
              { text: '담임 선생님이 "말해 줘서 고마워. 학교가 지켜 줄게"라고 해요.', motif: 'sun',
                good: ['plan', '선생님과 함께 다음 일을 정한다', '선생님이 나를 지킬 방법을 함께 정해요.', [['나', '마음이 놓여요', 1]]],
                bad: ['regret', '"괜히 말했나 봐요" 하고 숨는다', '도움을 받을 기회를 놓칠 뻔해요.', '알린 것은 잘한 일이에요. 잘못은 요구한 사람에게 있어요.', [['나', '혼자 걱정해요', -1]]] },
            ],
            ending: '거절하고 알린 덕분에 어른들이 함께 지켜 주었어요.',
            reasons: [{ id: 'force', text: '억지로 사서 보내게 하는 것은 강요다' }, { id: 'tell', text: '겁주는 말일수록 어른께 알린다' }, { id: 'right', text: '알린 사람은 잘한 것이다' }, { id: 'small', text: '아이템 하나쯤은 괜찮다', why: '작은 것도 억지로 내게 하면 강요예요.' }],
            good: ['force', 'tell', 'right'],
            talk: '모둠에서 "강요 메시지를 받았을 때 처음 할 일"을 하나씩 말해요.',
            conclude: '강요는 거절하고, 화면을 남기고, 어른께 알려요. 알린 사람은 잘한 거예요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '"말하면 가만 안 둬"라는 메시지를 받으면 먼저 할 일을 써요.' }] },
      }),
      X('act.shuttle-record', {
        title: '기록 남기기 차례 연습', method: '기록 남기기 차례 연습', tool: 'timer', minutes: 26,
        levels: { easy: '기록 차례 카드 2장(화면 남기기·어른께 보여 드리기)을 놓고, 점검 칸 2개를 표시한다.', base: '기록 차례 카드 3장을 놓고 점검 칸 3개를 표시한다.', challenge: '카드 3장을 놓고, 셋째 문항에서 보여 드릴 때 할 말 카드 3장까지 차례대로 놓는다.' },
        activity: {
          title: '기록 남기기 연습', tool: 'timer',
          teacher: '"강요 메시지를 받으면 지우고 싶을 수 있어요. 그런데 지우면 어떻게 될까요?" 칠판에 가상 메시지 화면을 그려 날짜·시간·보낸 사람이 보이는 자리를 짚게 한다. "증거가 있으면 일이 커져요"라는 학생에게 "기록은 일을 크게 만드는 게 아니라 어른이 나를 지키는 데 쓰여요"라고 말해 준다. 실제 휴대폰은 꺼내지 않고 종이 화면으로만 따라 한다.',
          task: '기록 남기기 차례를 놓고, 종이 화면으로 따라 한 뒤 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '강요 메시지를 받았을 때 기록 차례대로 카드를 놓아요.', toolOptions: { title: '기록 차례', cards: ['지우지 않고 두기', '어른께 보여 드리기', '날짜 보이게 화면 남기기'] }, target: { order: ['날짜 보이게 화면 남기기', '지우지 않고 두기', '어른께 보여 드리기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '기록 두 단계를 차례대로 카드를 놓아요.', toolOptions: { cards: ['어른께 보여 드리기', '날짜 보이게 화면 남기기'] }, target: { order: ['날짜 보이게 화면 남기기', '어른께 보여 드리기'] } } } },
            { prompt: '종이 화면으로 따라 한 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '기록 점검' }, target: { selfCheck: ['날짜·시간이 보이게 남겼다', '보낸 사람이 보이게 남겼다', '지우지 않고 두었다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '종이 화면으로 따라 한 뒤 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['날짜·시간이 보이게 남겼다', '지우지 않고 두었다'] } } } },
            { prompt: '어른께 기록을 보여 드릴 때 할 말을 차례대로 놓아요.', toolOptions: { title: '보여 드릴 때 할 말', cards: ['"어떻게 하면 좋을까요?"', '"이 메시지 좀 봐 주세요"', '"며칠째 이렇게 와요"'] }, target: { order: ['"이 메시지 좀 봐 주세요"', '"며칠째 이렇게 와요"', '"어떻게 하면 좋을까요?"'] }, difficulty: 0.2,
              conclude: '지우지 말고 날짜가 보이게 남겨, 어른께 보여 드리며 도움을 청해요.' },
            { prompt: '짝과 번갈아 어른 역할을 맡아 기록을 보여 드리는 연습을 해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '강요 메시지는 ___ 말고 날짜가 보이게 남겨요.', answer: '지우지' }, { type: 'short', prompt: '기록을 보여 드릴 믿는 어른 한 명을 써요(이름 대신 \'보호자\'처럼).' }] },
        notes: '실제 휴대폰을 꺼내 화면을 찍지 않는다. 칠판·종이에 그린 가상 화면으로 따라 한다.',
      }),
      X('wrap.shuttle-words', {
        title: '거절 말 카드 고르기', method: '거절 말 카드 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '카드 판에서 거절 말 2장을 고른다.', base: '거절 말 3장을 고른다.', challenge: '헷갈리는 카드까지 섞인 판에서 거절 말 3장을 고르고, 내 말로 한 문장을 더 쓴다.' },
        wrap: {
          teacher: '"셔틀을 요구받으면 쓸 거절 말을 골라 볼까요?" 고른 말을 반 전체가 또렷하게 한 번 따라 말한다. "알았어, 이번만"을 고른 학생에게 "이번만이 다음 번이 되기 쉬워요. 거절은 또렷하게 해도 괜찮아요"라고 말해 준다. 마지막 칸에는 내 말투로 거절 문장을 하나 더 만들게 한다.',
          exitTicket: [
            EX('wordcards', PICK('셔틀을 요구받을 때 쓸 거절 말만 골라요.', '거절할 때 쓸 말', ['"싫어, 안 보낼 거야"', '"이건 강요야"', '"어른께 말할게"'], ['"알았어, 이번만"', '"미안, 내가 살게"'], { easy: 2, easyTraps: 1, extraTraps: ['"나중에 보내 줄게"'] }, 0.15)),
            { type: 'short', prompt: '내 말로 거절하는 문장을 하나 더 써요.' },
            { type: 'choice', prompt: '"작은 금액이니 괜찮다"에 알맞은 생각은?', options: ['맞다, 작으면 괜찮다', '억지로 내게 하면 금액과 상관없이 강요다', '한 번이면 괜찮다'], answer: 1, difficulty: 0.15, explain: '억지로 내게 하면 금액이 작아도 강요예요.' },
          ],
        },
        worksheet: {
          title: '셔틀은 거절해요',
          items: [
            { type: 'short', prompt: '셔틀을 요구받을 때 쓸 거절 말을 써요.' },
            { type: 'check', prompt: '강요를 받았을 때 할 일에 표시해요.', options: ['거절하기', '화면 남기기', '어른께 알리기'] },
          ],
        },
      }),
      X('wrap.shuttle-poster', {
        title: '"셔틀은 강요" 캠페인 그림판', method: '"셔틀은 강요" 캠페인 그림판', tool: 'collage', minutes: 6,
        levels: { easy: '조각 3개 이상으로 꾸미고 점검 칸 2개를 표시한다.', base: '조각 5개 이상으로 선물 상자·엑스·방패를 만들고 점검 칸 3개를 표시한다.', challenge: '조각 5개 이상으로 꾸미고, 짧은 구호를 정해 활동지에 쓴 뒤 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"선물 상자에 엑스를 그리고, 방패로 친구를 지키는 그림판을 만들어 볼까요?" 네모(상자)·긴 네모 두 개를 엇갈려(엑스)·반원과 세모(방패)로 만드는 방법을 칠판에 보인다. "무섭게 꾸며야 효과가 있어요"라는 말에는 "보는 친구가 \'거절해도 돼, 알려도 돼\'를 느끼게 하는 그림이 더 힘이 있어요"라고 말해 준다. 구호는 활동지에 쓴다.',
          exitTicket: [
            COLX('"셔틀은 강요" 캠페인 그림판을 조각으로 만들고 점검해요.', ['선물 상자 모양을 만들었다', '엑스(×) 표시를 넣었다', '방패로 지킨다는 뜻을 담았다', '짧은 구호를 정해 활동지에 썼다']),
            { type: 'short', prompt: '그림판에 붙일 짧은 구호를 써요.' },
          ],
        },
        worksheet: {
          title: '셔틀은 강요',
          items: [
            { type: 'draw', prompt: '"셔틀은 강요" 캠페인 그림을 그려요.' },
            { type: 'short', prompt: '캠페인 구호를 한 줄로 써요.' },
          ],
        },
        notes: '콜라주는 글자를 붙이지 못한다. 상자·엑스·방패는 네모·긴 네모·반원·세모 조각을 겹쳐 만들고, 구호는 활동지에 쓴다.',
      }),
    );
  }

  // ======== 5학년 · 무리 규칙 앞에서 방어자가 되는 길 (research-mandatory §2 초: 방관자에서 조력자로·도움 요청) ========
  {
    const X = mk('g5-defender-path', 5);
    const TOWN = [PL('교실', 'school', [1, 1]), PL('상담실', 'office', [2, 0]), PL('우리 집', 'house', [4, 3]), PL('도서관', 'library', [0, 3]), PL('공원', 'park', [5, 1]), PL('학원', 'office', [3, 2])];
    M.push(
      X('intro.pressure-feel', {
        title: '무리 규칙을 들은 친구 마음', method: '무리 규칙을 들은 친구 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 이야기를 읽고 마음 카드 2장(걱정·미안함)을 함께 고른다.', base: '마음 카드 3장(걱정·미안함·무서움)을 스스로 고른다.', challenge: '쪽지를 보낸 친구가 무엇을 원하는지 짐작해 말한다.' },
        intro: {
          teacher: '"지어낸 친구 진이 \'오늘부터 담이랑 말하지 마\'라는 쪽지를 받았어요. 진은 어떤 마음일까요?" 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "진은 그냥 따르면 편해요"라는 말에는 "따르면 진의 마음은 편할까요? 담은 어떨까요?"라고 되묻는다. 무리 규칙 앞에서 흔들리는 마음은 누구에게나 생기며, 그래도 할 수 있는 길이 있다고 밝힌다.',
          student: '쪽지를 받은 진이 느낄 마음을 고르고, 왜 그 마음일지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '진의 마음', cards: ['걱정', '신남', '미안함', '뿌듯함', '무서움'], shuffle: false }, sequence: [{ pick: ['걱정', '미안함'] }, { pick: ['걱정', '미안함', '무서움'] }] },
          art: art('a paper child holding a small folded paper note, with a group of paper children whispering in the background and one child standing apart', '이 쪽지를 받았다면', 'cloud', 'sky'),
        },
        notes: '이야기 인물은 지어낸 것이다. 학급의 실제 무리를 짐작하거나 이름을 말하게 하지 않는다.',
      }),
      X('intro.defender-data', {
        title: '"방어자가 한 명 있으면"', method: '"방어자가 한 명 있으면" 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 \'0명\'과 \'3명\' 막대 두 개만 짚어 견주게 한다.', base: '막대 세 개를 읽고 방어자가 늘수록 괴롭힘이 짧아진다는 점을 말한다.', challenge: '그래프에서 알 수 있는 것을 한 문장으로 쓴다.' },
        intro: {
          teacher: '"이 막대그래프는 지어낸 이야기 속 세 반의 가상 자료예요. 방어자가 0명·1명·3명일 때 괴롭힘이 며칠 이어졌을까요?" 시연 단추로 가장 짧은 막대를 고르는 모습을 보인다. "한 사람으로는 안 바뀌어요"라는 말에는 "0명과 1명 막대를 보세요. 한 명이 있을 때 무엇이 달라졌나요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '그래프를 보고 방어자가 한 명 있을 때 무엇이 달라지는지 짝에게 말해 보아요.',
          demo: CHART('bar', '방어자 수와 괴롭힘이 이어진 날(가상)', [['방어자 0명', 10], ['방어자 1명', 4], ['방어자 3명', 1]], '가장 짧게 끝난 때는?', 2, { unit: '일', xLabel: '방어자 수', yLabel: '이어진 날' }),
          art: art('a paper bar chart with three bars getting shorter, small paper children holding hands growing in number under each bar', '한 명이 바꿀 수 있어요', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 지어낸 이야기 속 가상 자료다.',
      }),
      X('act.five-ways', {
        title: '방어자 행동 다섯 가지', method: '방어자 행동 다섯 가지 고르기', tool: 'sortboard', minutes: 14,
        levels: { easy: '장면 바구니 2개(급식실·복도)에 행동 카드 4장을 넣고, 넣을 때 바로 맞는지 알려 준다.', base: '장면 바구니 3개(급식실·복도·단톡방)에 행동 카드 6장을 넣는다.', challenge: '장면 바구니 4개(운동장 더함)에 행동 카드 8장을 넣고, 안전하지 않은 행동 카드 2장은 넣지 않고 남긴다.' },
        activity: {
          title: '장면마다 방어자 행동', tool: 'sortboard',
          teacher: '"방어자 행동에는 곁에 있기·말 돌리기·함께 자리 뜨기·어른께 알리기·나중에 위로하기가 있어요. 장면마다 무엇이 알맞을까요?" 카드를 넣을 때마다 "나도 안전한가?"를 함께 묻게 한다. "방어자는 크게 맞서 싸워야 해요"라는 학생에게 "싸우면 나도 다칠 수 있어요. 곁에 서 있는 것만으로도 방어자예요"라고 말해 준다. 방어자는 용감한 아이만이 아니라 누구나 할 수 있다는 점을 짚는다.',
          task: '장면 바구니마다 알맞은 방어자 행동 카드를 넣고, 안전하지 않은 행동은 남겨요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            { prompt: '장면마다 알맞은 방어자 행동 카드를 바구니에 넣어요.', toolOptions: { slots: ['급식실', '복도', '단톡방'], cards: ['혼자 먹는 친구 곁에 앉기', '"같이 가자" 함께 자리 뜨기', '"숙제 얘기하자" 말 돌리기', '빈자리 내주며 "여기 앉아"', '놀림 뒤 "괜찮아?" 위로하기', '화면 남겨 어른께 알리기'] },
              target: { sort: { 급식실: ['혼자 먹는 친구 곁에 앉기', '빈자리 내주며 "여기 앉아"'], 복도: ['"같이 가자" 함께 자리 뜨기', '놀림 뒤 "괜찮아?" 위로하기'], 단톡방: ['"숙제 얘기하자" 말 돌리기', '화면 남겨 어른께 알리기'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '급식실·복도 장면에 알맞은 방어자 행동을 넣어요(카드 4장).', toolOptions: { slots: ['급식실', '복도'], cards: ['혼자 먹는 친구 곁에 앉기', '"같이 가자" 함께 자리 뜨기', '빈자리 내주며 "여기 앉아"', '놀림 뒤 "괜찮아?" 위로하기'] }, target: { sort: { 급식실: ['혼자 먹는 친구 곁에 앉기', '빈자리 내주며 "여기 앉아"'], 복도: ['"같이 가자" 함께 자리 뜨기', '놀림 뒤 "괜찮아?" 위로하기'] } } },
                challenge: { prompt: '네 장면에 방어자 행동을 넣고, 안전하지 않은 행동은 남겨요.', toolOptions: { slots: ['급식실', '복도', '단톡방', '운동장'], cards: ['혼자 먹는 친구 곁에 앉기', '"같이 가자" 함께 자리 뜨기', '혼자 가서 크게 싸우기', '"숙제 얘기하자" 말 돌리기', '빈자리 내주며 "여기 앉아"', '놀림 뒤 "괜찮아?" 위로하기', '화면 남겨 어른께 알리기', '"같이 하자" 놀이에 부르기', '똑같이 욕으로 되갚기', '선생님께 바로 알리기'] },
                  target: { sort: { 급식실: ['혼자 먹는 친구 곁에 앉기', '빈자리 내주며 "여기 앉아"'], 복도: ['"같이 가자" 함께 자리 뜨기', '놀림 뒤 "괜찮아?" 위로하기'], 단톡방: ['"숙제 얘기하자" 말 돌리기', '화면 남겨 어른께 알리기'], 운동장: ['"같이 하자" 놀이에 부르기', '선생님께 바로 알리기'] } } },
              } },
            SB('방어자 행동을 지금 바로 할 일과 나중에 할 일로 나누어요.', { slots: ['지금 바로', '나중에'], groups: { '지금 바로': ['함께 자리 뜨기', '곁에 서 있기', '말 돌리기'], 나중에: ['따로 "괜찮아?" 위로하기', '어른께 자세히 알리기', '다음 날 같이 놀자 하기'] } }, 0.25,
              { conclude: '방어자는 맞서 싸우지 않아요. 곁에 있기·말 돌리기·자리 뜨기·알리기·위로하기로 안전하게 도와요.' }),
            { prompt: '모둠에서 내가 가장 해 볼 만한 방어자 행동 하나를 고르고 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '안전한 방어자 행동에 표시해요.', options: ['곁에 있기', '말 돌리기', '함께 자리 뜨기', '어른께 알리기', '나중에 위로하기'] }] },
      }),
      X('act.group-dilemma', {
        title: '무리가 따돌림 규칙을 정함', method: '갈림길: 무리가 따돌림 규칙을 정할 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(규칙을 따를지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("그럼 너도 빠져")을 지나 근거를 고른다.', challenge: '갈림 3번(한 주 뒤 무리 안 친구의 변화)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 무리 규칙', tool: 'dilemma',
          teacher: '"무리가 \'오늘부터 해랑 놀지 마\'라고 정했어요. 따르는 척하며 몰래 말 거는 건 어떨까요?" 고를 때마다 해와 나에게 미친 영향을 읽게 한다. "무리에서 빠지면 나도 따돌림 받아요"라는 학생에게 "그 걱정이 드는 게 당연해요. 그래서 혼자가 아니라 다른 친구·선생님과 함께해요"라고 말해 준다. 무리에서 바뀐 친구를 탓하지 않고 반긴다는 점도 짚는다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '해랑 놀지 마',
            steps: [
              { text: '쉬는 시간, 무리가 "오늘부터 해랑 놀지 마"라고 규칙을 정했어요.', motif: 'house',
                good: ['no', '"나는 안 할래" 하고 해와 함께 논다', '해가 놀란 얼굴로 웃어요.', [['해', '혼자가 아니에요', 1]]],
                bad: ['follow', '규칙을 따른다', '해가 쉬는 시간 내내 혼자 있어요.', '무리 규칙이라도 한 친구를 빼는 것은 따돌림이에요.', [['해', '혼자 남아요', -1]]],
                mid: ['secret', '따르는 척하며 몰래 말 건다', '해는 반가워하지만 무리 규칙은 그대로예요.', '몰래 돕는 마음은 좋아요. 그래도 규칙이 그대로면 따돌림이 이어져요.', [['해', '여전히 혼자인 시간이 많아요', -1]]] },
              { text: '무리가 "그럼 너도 빠져"라고 해요.', motif: 'cloud',
                good: ['together', '다른 친구와 함께 해 곁에 있고 선생님께 알린다', '선생님이 무리와 이야기 시간을 잡아요.', [['나와 해', '함께라 덜 무서워요', 1]]],
                bad: ['back', '무서워서 다시 무리에 들어간다', '해는 또 혼자가 돼요.', '무서울 땐 혼자 버티지 말고 어른께 알려요.', [['해', '다시 혼자예요', -1]]] },
              { text: '한 주 뒤, 무리에 있던 율이 "나도 사실 싫었어"라고 해요.', motif: 'sun',
                good: ['welcome', '"같이 하자" 하고 율과 해를 함께 부른다', '셋이 함께 놀고 무리 규칙이 사라져요.', [['율', '바로잡을 기회를 얻어요', 1], ['해', '친구가 늘어요', 1]]],
                bad: ['blame', '"이제 와서?" 하고 율을 탓한다', '율이 다시 무리로 돌아가요.', '바로잡으려는 친구를 탓하지 않아요. 바뀐 행동을 반겨요.', [['율', '마음을 닫아요', -1]]] },
            ],
            ending: '"나는 안 할래" 한마디와 함께한 친구들 덕분에 무리 규칙이 사라졌어요.',
            reasons: [{ id: 'exclude', text: '한 친구를 빼는 규칙은 따돌림이다' }, { id: 'together', text: '혼자가 아니라 친구·어른과 함께하면 덜 무섭다' }, { id: 'welcome', text: '바로잡는 친구를 반긴다' }, { id: 'rule', text: '무리 규칙은 지켜야 한다', why: '누군가를 빼는 규칙은 따르지 않아도 돼요.' }],
            good: ['exclude', 'together', 'welcome'],
            talk: '모둠에서 "무리 규칙을 거절하는 한 문장"을 하나씩 말해요.',
            conclude: '따돌림 규칙은 따르지 않고, 친구·어른과 함께 그 친구 곁에 있어요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '"걔랑 놀지 마"라는 규칙을 들으면 할 말을 써요.' }] },
      }),
      X('act.defender-plan', {
        title: '방어자 작은 실천 계획', method: '방어자 작은 실천 계획', tool: 'rubric-writing', minutes: 26,
        levels: { easy: '빈칸 문장 틀(언제·어디서·무엇을)을 채워 쓰고 기준 2개를 점검한다.', base: '두 문장 이상 쓰고 기준 3개(구체적·안전·할 수 있음)를 점검한다.', challenge: '함께할 친구와 어른(\'선생님\'·\'보호자\'·\'어른\')까지 넣어 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '방어자 실천 계획', tool: 'rubric-writing',
          teacher: '"이번 주에 해 볼 방어자 행동 하나를 언제·어디서·무엇을 넣어 계획해 볼까요?" 칠판에 예를 적는다: "점심시간에 급식실에서 혼자 먹는 친구 옆에 앉겠다." "괴롭힘을 다 막겠다"처럼 크게 쓰는 학생에게 "이번 주에 정말 할 수 있는 작은 행동은 무엇일까요?"라고 묻는다. 나도 안전한 계획인지 다시 읽게 하고, 친구 이름은 쓰지 않게 한다.',
          task: '이번 주 방어자 행동 한 가지를 언제·어디서·무엇을 넣어 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('이번 주 방어자 행동 하나를 언제·어디서·무엇을 넣어 써요', { topic: '이번 주에 실천할 방어자 행동 하나를 언제·어디서·무엇을 넣어 써요(친구 이름은 쓰지 않아요).', starter: '___ 때(언제), ___ 에서(어디서), ___ 하겠다(무엇을).', crit: ['언제·어디서·무엇을 다 넣었다', '나와 친구 모두 안전하다', '이번 주에 할 수 있다'], must: [['선생님', '보호자', '어른']], chars: [20, 220], title: '방어자 실천 계획', sents: [1, 2, 3], chCrit: '함께할 친구와 어른을 넣었다', chPrompt: '방어자 실천 계획에 함께할 친구와 어른까지 넣어 써요.' }, 0.25),
            RUB('계획을 지키기 어려울 때 나에게 해 줄 말을 써요', { topic: '방어자 계획을 지키기 어려울 때 나에게 해 줄 응원의 말을 한두 문장으로 써요.', starter: '어려워도 괜찮아. ___ 하면 돼.', crit: ['나를 탓하지 않았다', '다시 해 볼 방법을 썼다', '힘이 나는 말이다'], must: [['괜찮', '할 수 있']], chars: [10, 140], title: '나에게 하는 응원' }, 0.2,
              { conclude: '방어자 계획은 작고 구체적이고 안전해야 지킬 수 있어요.' }),
            { prompt: '짝과 계획을 바꿔 읽고, 나와 친구 모두 안전한 계획인지 서로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '이번 주 방어자 실천 계획을 써요.', columns: ['언제', '어디서', '무엇을'], cells: [['', '', '']] }, { type: 'check', prompt: '내 계획을 점검해요.', options: ['구체적이다', '안전하다', '이번 주에 할 수 있다'] }] },
      }),
      X('wrap.defender-map', {
        title: '방어자 도움 지도', method: '방어자 도움 지도', tool: 'map', minutes: 6,
        levels: { easy: '장소 2곳(교실·상담실)만 있는 지도에서 담임 선생님이 있는 곳에 핀을 꽂고, 이름이 보인다.', base: '학교·동네 장소 6곳 가운데 담임 선생님이 있는 곳에 핀을 꽂는다.', challenge: '학원 가는 길에 따돌림 쪽지를 받은 상황에서 먼저 알릴 보호자가 있는 곳에 핀을 꽂는다.' },
        wrap: {
          teacher: '"방어자도 혼자 다 할 필요가 없어요. 도움을 받을 어른은 어디에 있을까요?" 지도에서 교실·상담실·우리 집을 짚게 한다. "선생님께 말하면 고자질이에요"라는 말에는 "친구를 지키려고 알리는 것은 고자질이 아니라 도움 요청이에요"라고 말해 준다. 활동지 빈칸에는 ' + HELPNO + '를 교사가 적어 주고 옮겨 쓰게 한다.',
          exitTicket: [
            MAPX('쉬는 시간에 따돌림을 보았어요. 담임 선생님이 있는 곳에 핀을 꽂아요.', '학교·동네 도움 지도(가상)', TOWN, '교실', { easyKeep: ['교실', '상담실'], challenge: { prompt: '학원 가는 길에 따돌림 쪽지를 받았어요. 먼저 알릴 보호자가 있는 곳에 핀을 꽂아요.', target: { place: '우리 집' } } }),
            { type: 'choice', prompt: '방어자가 혼자 해결하기 어려울 때 알맞은 것은?', options: ['혼자 끝까지 맞선다', '믿는 어른께 알린다', '모른 척한다'], answer: 1, difficulty: 0.15, explain: '방어자도 어른께 알려 함께 해결해요.' },
          ],
        },
        worksheet: {
          title: '방어자 도움 지도',
          items: [
            { type: 'table', prompt: '도움을 받을 곳을 써요(번호는 선생님이 알려 줘요).', columns: ['도움 곳', '만날 사람'], cells: [['교실', ''], ['상담실', ''], [HELPNO, '']] },
            { type: 'short', prompt: '학교 밖에서 도움이 필요할 때 먼저 알릴 사람을 써요(이름 대신 \'보호자\'처럼).' },
          ],
        },
        notes: `지도는 가상 학교·동네다. ${HELPNO}는 학교에서 확인한 것을 칠판에 적어 준다.`,
      }),
      X('wrap.defender-check', {
        title: '방어자 다짐 스스로 점검', method: '방어자 다짐 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '다짐 점검 칸 2개를 표시한다.', base: '다짐 점검 칸 3개(구경만 하지 않기·안전하게 돕기·어른께 알리기)를 표시한다.', challenge: '점검 칸 3개를 표시하고, 지난주의 나와 견주어 달라진 점을 한 문장으로 말한다.' },
        wrap: {
          teacher: '"오늘 정한 방어자 다짐에 스스로 표시해 볼까요?" 점검 칸을 함께 읽는다. "저는 용감하지 않아서 못 해요"라는 말에는 "방어자는 용감한 아이만 하는 게 아니에요. 곁에 서 있는 것도, 나중에 알리는 것도 방어자예요"라고 말해 준다. 도전 학생에게는 지난주의 나와 견주는 한 문장을 발표하게 한다(원하는 학생만).',
          exitTicket: [
            SELF('방어자 다짐 점검', ['구경만 하지 않는다', '나도 안전하게 돕는다', '어른께 알린다'], '방어자 다짐에 스스로 표시해요.', { easy: 2, base: 3 }),
            { type: 'choice', prompt: '"방어자는 용감한 아이만 한다"에 알맞은 생각은?', options: ['맞다', '곁에 있기·알리기처럼 누구나 할 수 있다', '방어자는 싸워야 한다'], answer: 1, difficulty: 0.15, explain: '곁에 있기·말 돌리기·알리기는 누구나 할 수 있어요.' },
            { type: 'short', prompt: '이번 주에 해 볼 방어자 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '나는 방어자',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 방어자 행동에 표시해요.', options: ['곁에 있기', '말 돌리기', '어른께 알리기', '나중에 위로하기'] },
            { type: 'short', prompt: '지난주와 견주어 달라지고 싶은 점을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 회복 서클과 신고 뒤에 일어나는 일 (research-mandatory §2 초: 도움 요청) ========
  {
    const X = mk('g5-circle-after-report', 5);
    M.push(
      X('intro.circle-picture', {
        title: '둥글게 앉은 그림과 느낌', method: '둥글게 앉은 그림 보고 느낌 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 그림 두 장(둥글게·줄 맞춰)을 보이고 마음을 함께 고른다.', base: '그림 두 장의 마음을 고르고, 어느 자리가 이야기하기 편한지 까닭을 말한다.', challenge: '서클에서 지켜야 할 것(말하는 물건·끝까지 듣기)을 짐작해 말한다.' },
        intro: {
          teacher: '"책상을 치우고 둥글게 앉은 교실과 줄 맞춰 앞만 보고 앉은 교실, 어디가 이야기하기 편할까요?" 시연 단추로 마음 카드가 붙는 모습을 보인다. "둥글게 앉으면 다 보여서 부끄러워요"라는 말에는 "그래서 서클에는 말하는 물건과 \'끝까지 듣기\' 약속이 있어요. 말하고 싶지 않으면 건너뛸 수도 있어요"라고 말해 준다. 오늘은 회복 서클과, 어른께 알린 뒤 일어나는 일을 배운다고 밝힌다.',
          student: '두 그림 가운데 이야기하기 편한 자리를 고르고, 그 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '책상을 치우고 둥글게 앉은 교실' }, { id: 's2', label: '줄 맞춰 앞만 보고 앉은 교실' }], cards: ['편안함', '걱정', '화남'], shuffle: false }, sequence: [{ match: { s1: '편안함' } }, { match: { s1: '편안함', s2: '걱정' } }] },
          art: art('paper children sitting in a circle on paper chairs with a small paper talking stone in the middle, next to a second picture of desks in straight rows', '둥글게 앉아 이야기해요', 'flower', 'mint'),
        },
      }),
      X('intro.worry-poll', {
        title: '"알리기가 망설여지는 까닭"', method: '"알리기가 망설여지는 까닭" 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 2개(보복 걱정·고자질 같음)만 짚어 더 큰 쪽을 고른다.', base: '막대 3개를 읽고 가장 큰 까닭을 말한다.', challenge: '걱정 하나마다 그 걱정에 대한 답을 짝과 하나씩 찾는다.' },
        intro: {
          teacher: '"이 막대그래프는 어느 5학년이 \'괴롭힘을 어른께 알리기가 망설여지는 까닭\'에 답했다고 꾸민 가상 설문이에요. 가장 큰 까닭은 무엇일까요?" 시연 단추로 \'보복이 걱정됨\'을 고르는 모습을 보인다. "알리면 일이 더 커지기만 해요"라는 말에는 "학교는 알린 사람이 누구인지 지켜 주고, 먼저 피해 친구를 보호해요. 오늘 그 흐름을 볼 거예요"라고 말해 준다. 숫자는 가상이라고 밝힌다.',
          student: '그래프에서 가장 큰 걱정을 찾고, 그 걱정에 해 줄 말을 짝과 하나 찾아보아요.',
          demo: CHART('bar', '알리기가 망설여지는 까닭(가상 설문)', [['보복이 걱정됨', 12], ['고자질 같음', 9], ['어른이 못 도울 듯', 6]], '가장 큰 까닭은?', 0, { xLabel: '까닭', yLabel: '학생 수' }),
          art: art('a paper bar chart with three bars, a small paper child hesitating before a paper door marked with a heart', '알리기가 망설여질 때', 'cloud', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생에게 알리기를 망설였던 일을 묻지 않는다.',
      }),
      X('act.circle-order', {
        title: '회복 서클 차례 놓기', method: '회복 서클 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '서클 차례 카드 3장(약속 정하기·말하는 물건·함께 약속)을 놓고, 둘째 문항에서 진행자 말 2칸을 잇는다.', base: '서클 차례 카드 5장을 놓고 진행자 말 3칸을 잇는다.', challenge: '틀린 카드(잘못한 사람 정하기)를 빼고 5장을 놓은 뒤, 단계마다 진행자 말 4칸을 잇는다.' },
        activity: {
          title: '회복 서클 차례', tool: 'timeline',
          teacher: '"회복 서클은 누가 잘못했는지 판결하는 자리가 아니라, 무슨 일이 있었고 무엇이 필요한지 함께 이야기하는 자리예요." 카드를 놓을 때마다 그 단계에서 할 일을 말하게 한다. "서클에서 잘못한 사람을 혼내요"라는 학생에게 "혼내기보다 무엇을 바로잡을지 함께 정해요. 잘못한 친구도 바뀔 수 있어요"라고 말해 준다.',
          task: '회복 서클 차례 카드를 놓고, 단계마다 진행자가 할 말을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('회복 서클 차례대로 카드를 놓아요.', ['약속 정하기', '말하는 물건 돌리기', '무슨 일·마음 나누기', '필요한 것 말하기', '함께 약속하기'], { easy: [0, 1, 4], trap: '잘못한 사람 정하기' }, 0.2),
            MAT('서클 단계마다 진행자가 할 말을 이어요.', [['약속 정하기', '"말하는 물건 든 사람만 말해요"'], ['무슨 일·마음 나누기', '"그때 마음이 어땠나요?"'], ['필요한 것 말하기', '"무엇이 있으면 나아질까요?"'], ['함께 약속하기', '"우리가 지킬 것은 뭘까요?"']], [], { easy: 2, base: 3 }, 0.25,
              { conclude: '서클은 약속 → 말하는 물건 → 마음 나누기 → 필요한 것 → 약속 차례로, 탓하지 않고 이야기해요.' }),
            { prompt: '모둠에서 서클에서 꼭 지킬 약속 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '회복 서클에서 말하는 물건을 돌리는 까닭을 써요.' }] },
      }),
      X('act.circle-practice', {
        title: '모의 서클 차례 타이머', method: '모의 서클 차례 타이머', tool: 'timer', minutes: 14,
        levels: { easy: '한 사람 30초·쉼 5초를 두 사람(반 바퀴)만 하도록 타이머를 맞추고 약속 점검 2칸을 표시한다.', base: '모둠 4명이 한 바퀴 돌도록 타이머를 맞추고 약속 점검 3칸을 표시한다.', challenge: '한 바퀴 타이머를 맞추고, 진행자 역할을 맡아 점검 4칸을 표시한다.' },
        activity: {
          title: '모의 서클 연습', tool: 'timer',
          teacher: '"지어낸 이야기 \'모둠 과제에서 한 명만 빼고 한 일\'로 모의 서클을 해 볼까요? 말하는 물건을 든 사람만 30초 동안 말해요." 타이머를 함께 맞춘 뒤 모둠마다 한 바퀴 돌게 한다. "30초 동안 할 말이 없어요"라는 학생에게 "\'건너뛸게요\'라고 해도 돼요. 듣는 것도 서클에 참여하는 거예요"라고 말해 준다. 서클에서 들은 이야기는 밖에서 퍼뜨리지 않되, 누군가 위험하면 어른께 알린다는 점을 짚는다.',
          task: '모의 서클 타이머를 맞추고, 한 바퀴 돈 뒤 약속을 지켰는지 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '한 사람 30초 말하고 5초 쉬기를 모둠 4명이 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '서클 타이머', labels: ['말하기', '쉬기'], plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 30, rest: 5, rounds: 4 } }, difficulty: 0.2,
              levels: { easy: { prompt: '한 사람 30초 말하고 5초 쉬기를 두 사람만 하도록 맞춰요.', target: { plan: { work: 30, rest: 5, rounds: 2 } } } } },
            { prompt: '모의 서클을 한 바퀴 돈 뒤 지킨 약속에 스스로 표시해요.', toolOptions: { title: '서클 약속 점검' }, target: { selfCheck: ['말하는 물건 든 사람만 말했다', '끝까지 들었다', '누구도 탓하지 않았다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '모의 서클 뒤 지킨 약속에 스스로 표시해요(두 칸).', target: { selfCheck: ['말하는 물건 든 사람만 말했다', '끝까지 들었다'] } }, challenge: { prompt: '진행자를 맡아 모의 서클을 한 뒤 스스로 표시해요(네 칸).', target: { selfCheck: ['말하는 물건 든 사람만 말했다', '끝까지 들었다', '누구도 탓하지 않았다', '진행자로 차례를 이끌었다'] } } },
              conclude: '서클에서는 차례를 지키고, 끝까지 듣고, 탓하지 않아요.' },
            { prompt: '모둠에서 "모둠 과제에서 한 명만 빼고 한 일"로 한 바퀴 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '서클 약속을 지켰는지 표시해요.', options: ['차례 지키기', '끝까지 듣기', '탓하지 않기'] }] },
        notes: '모의 서클은 지어낸 이야기로만 한다. 학급에서 실제로 있었던 일을 서클 소재로 쓰지 않는다. 30초·5초는 우리 반 연습값이다.',
      }),
      X('act.after-report', {
        title: '알린 뒤에 일어나는 일 이야기', method: '알린 뒤에 일어나는 일 이야기', tool: 'story', minutes: 26,
        levels: { easy: '이야기 장면 2장(이야기를 들어요·피해 친구 보호)을 차례대로 놓는다.', base: '이야기 장면 3장(관계 회복 더함)을 차례대로 놓고, 장면마다 주인공 마음을 고른다.', challenge: '잘못한 친구가 바로잡는 장면까지 4장을 놓고, 학교가 하지 않는 일을 가려 낸다.' },
        activity: {
          title: '알린 뒤 이야기', tool: 'story',
          teacher: '"지어낸 친구 온이 ' + HELPNO + '와 담임 선생님께 알렸어요. 그다음에는 무슨 일이 일어날까요?" 장면을 놓을 때마다 온의 마음을 말하게 한다. "알리면 모두 혼나고 끝나요"라는 학생에게 "학교는 먼저 이야기를 듣고, 피해 친구를 지키고, 잘못한 친구가 바로잡도록 도와요"라고 말해 준다. 알린 사람이 누구인지는 지켜진다는 점을 짚는다.',
          task: '알린 뒤 일어나는 장면을 차례대로 놓고, 장면마다 온의 마음을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '온이 알린 뒤 일어나는 장면을 차례대로 놓아요.', toolOptions: { title: '온이 알린 뒤(지어낸 이야기)', slots: 3, cards: [{ id: 'help', text: '관계 회복을 도와요', motif: 'flower' }, { id: 'listen', text: '선생님이 이야기를 들어요', motif: 'house' }, { id: 'safe', text: '피해 친구를 먼저 지켜요', motif: 'star' }] }, target: { order: ['listen', 'safe', 'help'] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '온이 알린 뒤 일어나는 장면을 차례대로 놓아요(장면 2장).', toolOptions: { slots: 2, cards: [{ id: 'safe', text: '피해 친구를 먼저 지켜요', motif: 'star' }, { id: 'listen', text: '선생님이 이야기를 들어요', motif: 'house' }] }, target: { order: ['listen', 'safe'] } },
                challenge: { prompt: '잘못한 친구가 바로잡는 장면까지 차례대로 놓아요(장면 4장).', toolOptions: { slots: 4, cards: [{ id: 'help', text: '관계 회복을 도와요', motif: 'flower' }, { id: 'fix', text: '잘못한 친구가 사과하고 바로잡아요', motif: 'sun' }, { id: 'listen', text: '선생님이 이야기를 들어요', motif: 'house' }, { id: 'safe', text: '피해 친구를 먼저 지켜요', motif: 'star' }] }, target: { order: ['listen', 'safe', 'help', 'fix'] } },
              } },
            MAT('장면마다 온의 마음 카드를 이어요.', [['선생님이 이야기를 들어요', '안심'], ['피해 친구를 먼저 지켜요', '고마움'], ['관계 회복을 도와요', '기대'], ['잘못한 친구가 바로잡아요', '편안함']], ['후회'], { easy: 2, base: 3 }, 0.2),
            PICK('알린 뒤 학교가 하는 일만 골라 담아요.', '학교가 하는 일', ['이야기를 끝까지 들어요', '피해 친구를 지켜요', '관계 회복을 도와요'], ['알린 사람을 공개해요', '모두 혼내고 끝내요'], { easy: 2, easyTraps: 1, extraTraps: ['그냥 없던 일로 해요'] }, 0.2,
              { conclude: '알리면 학교는 이야기를 듣고, 피해 친구를 지키고, 관계 회복을 도와요. 알린 사람은 잘한 거예요.' }),
            { prompt: '짝과 "알리면 일이 커지기만 한다"는 걱정에 해 줄 말을 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '어른께 알린 뒤 학교가 먼저 하는 일은?', options: ['알린 사람을 공개한다', '이야기를 듣고 피해 친구를 지킨다', '아무것도 하지 않는다'], answer: '이야기를 듣고 피해 친구를 지킨다' }, { type: 'short', prompt: '"알리면 일이 커지기만 한다"는 친구에게 해 줄 말을 써요.' }] },
        notes: `알린 뒤 학교의 흐름은 큰 줄기(듣기·보호·회복)만 다루고 절차의 세부는 다루지 않는다. ${HELPNO}는 학교에서 확인한 것을 칠판에 적어 준다.`,
      }),
      X('wrap.circle-promise', {
        title: '우리 반 서클 약속 쓰기', method: '우리 반 서클 약속 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 약속 1개를 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '약속 2개를 두 문장 이상 쓰고 기준 3개를 점검한다.', challenge: '약속을 어겼을 때 회복 방법(\'다시\'·\'사과\'·\'바로잡\')까지 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"우리 반 서클에서 지킬 약속 두 가지를 정해 볼까요?" 문장 틀을 칠판에 적는다. "떠들지 않기"처럼 쓰는 학생에게 "모두가 지킬 수 있게, 무엇을 할지로 바꿔 볼까요? 예를 들면 \'말하는 물건을 든 친구 말을 끝까지 듣기\'처럼요"라고 묻는다. 어겼을 때 벌이 아니라 바로잡는 방법을 쓰게 한다.',
          exitTicket: [
            RUBX('우리 반 서클에서 지킬 약속 두 가지를 써요', { topic: '우리 반 서클에서 지킬 약속 두 가지를 써요(친구 이름은 쓰지 않아요).', starter: '서클에서 우리는 ___ 하기로 약속한다.', crit: ['모두 지킬 수 있다', '존중하는 말로 썼다', '무엇을 할지 구체적으로 썼다'], must: [['다시', '사과', '바로잡']], chars: [20, 200], title: '우리 반 서클 약속', sents: [1, 2, 3], chCrit: '어겼을 때 회복 방법을 넣었다', chPrompt: '서클 약속 두 가지와 어겼을 때 회복 방법을 써요.' }),
            { type: 'choice', prompt: '회복 서클의 목적으로 알맞은 것은?', options: ['잘못한 사람에게 벌 주기', '무슨 일이 있었고 무엇이 필요한지 함께 이야기하기', '누가 이겼는지 정하기'], answer: 1, difficulty: 0.15, explain: '서클은 탓하기보다 함께 바로잡을 길을 찾는 자리예요.' },
          ],
        },
        worksheet: {
          title: '우리 반 서클 약속',
          items: [
            { type: 'short', prompt: '우리 반 서클 약속 하나를 써요.' },
            { type: 'short', prompt: '약속을 어겼을 때 바로잡는 방법을 써요.' },
          ],
        },
      }),
      X('wrap.change-words', {
        title: '변화를 응원하는 말 고르기', method: '변화를 응원하는 말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '말 카드 2장을 낙인 말·응원 말로 나눈다.', base: '말 카드 4장을 나눈다.', challenge: '헷갈리는 카드까지 7장을 나누고, 낙인 말 하나를 응원 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '"잘못을 바로잡으려는 친구에게 \'너는 원래 그래\'라고 하면 어떻게 될까요?" 카드를 나눈 뒤 응원 말을 반 전체가 한 번 함께 읽는다. "잘못한 친구는 계속 나쁜 아이예요"라는 말에는 "잘못한 것은 그 행동이에요. 행동은 바꿀 수 있고, 응원하는 말이 바꾸는 힘이 돼요"라고 말해 준다.',
          exitTicket: [
            EX('wordcards', SORT('말 카드를 낙인 말과 응원 말로 나누어요.', { slots: ['낙인 말', '응원 말'], groups: { '낙인 말': ['"너는 원래 그래"', '"또 너지?"'], '응원 말': ['"바로잡아 줘서 고마워"', '"다시 해 보자"'] }, easy: 1, extra: { '낙인 말': ['"넌 안 바뀌어"'], '응원 말': ['"달라진 거 보여"'] }, traps: ['"오늘 급식 맛있다"'], mode: 'sort' }, 0.15)),
            { type: 'short', prompt: '낙인 말 하나를 응원 말로 바꿔 써요.' },
            { type: 'choice', prompt: '사과하고 바로잡은 친구에게 알맞은 말은?', options: ['"넌 원래 그래"', '"바로잡아 줘서 고마워"', '"두고 볼 거야"'], answer: 1, difficulty: 0.15, explain: '바꾼 행동을 알아주면 다시 그러지 않도록 힘이 돼요.' },
          ],
        },
        worksheet: {
          title: '행동은 바뀔 수 있어요',
          items: [
            { type: 'table', prompt: '응원 말이면 ○, 낙인 말이면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['"너는 원래 그래"', ''], ['"다시 해 보자"', ''], ['"또 너지?"', '']], answer: '×, ○, ×' },
            { type: 'short', prompt: '바로잡으려는 친구에게 해 줄 응원 말을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 따라 웃는 사람도 역할이 있다 (research-mandatory §2 초: 방관자에서 조력자로) ========
  {
    const X = mk('g6-four-roles', 6);
    M.push(
      X('intro.role-scene', {
        title: '한 장면 속 다섯 사람', method: '한 장면 속 다섯 사람', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 세 사람(놀리는 사람·웃는 사람·말리는 사람)의 생각 말풍선만 함께 고른다.', base: '다섯 사람마다 생각 말풍선을 고른다.', challenge: '놀림을 받는 친구가 다섯 사람을 저마다 어떻게 볼지 짐작해 말한다.' },
        intro: {
          teacher: '"쉬는 시간 교실 뒤편에서 한 친구를 흉내 내며 놀리는 장면이에요. 이 장면에는 몇 사람이 있을까요?" 칠판에 다섯 사람을 그리고 시연 단추로 사람마다 생각 말풍선이 붙는 모습을 보인다. "놀린 사람만 문제예요"라는 말에는 "웃는 사람과 지켜보는 사람이 없었다면 흉내가 계속됐을까요?"라고 되묻는다. 오늘은 장면 속 역할이 결과를 바꾼다는 것을 배운다고 밝힌다.',
          student: '장면 속 다섯 사람의 생각을 고르고, 놀림 받는 친구가 누구를 가장 반가워할지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '흉내 내며 놀리는 사람' }, { id: 's2', label: '따라 흉내 내는 사람' }, { id: 's3', label: '옆에서 웃는 사람' }, { id: 's4', label: '멀리서 지켜보는 사람' }, { id: 's5', label: '"그만해" 말리는 사람' }], cards: ['"재미있잖아"', '"나도 끼어야지"', '"웃기다 ㅋㅋ"', '"괜히 끼면 손해"', '"이건 아니야"'], shuffle: false }, sequence: [{ match: { s1: '"재미있잖아"', s3: '"웃기다 ㅋㅋ"', s5: '"이건 아니야"' } }, { match: { s1: '"재미있잖아"', s2: '"나도 끼어야지"', s3: '"웃기다 ㅋㅋ"', s4: '"괜히 끼면 손해"', s5: '"이건 아니야"' } }] },
          art: art('a paper classroom corner with five paper children around one child: one mimicking, one copying, one laughing, one watching from afar, one raising a hand to stop', '장면 속 다섯 사람', 'cloud', 'sky'),
        },
        notes: '장면은 지어낸 것이다. 학급 친구를 역할에 빗대어 부르지 않는다.',
      }),
      X('intro.role-data', {
        title: '역할별 사람 수 원그래프', method: '역할별 사람 수 원그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 \'방관\'과 \'방어\' 두 부분만 짚어 견주게 한다.', base: '네 부분을 읽고 가장 큰 부분이 바뀌면 어떻게 될지 말한다.', challenge: '방관 12명 가운데 4명이 방어로 바뀌면 결과가 어떻게 달라질지 추론한다.' },
        intro: {
          teacher: '"이 원그래프는 지어낸 이야기 속 학급 25명이 놀림 장면에서 어떤 역할이었는지 나타낸 가상 자료예요. 가장 큰 부분은 무엇일까요?" 시연 단추로 \'방관\'을 고르는 모습을 보인다. "방관은 아무 편도 아니니까 괜찮아요"라는 말에는 "가장 큰 부분이 가만히 있으면, 놀리는 사람은 무엇이라고 느낄까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '원그래프에서 가장 큰 부분을 찾고, 그 부분이 방어로 바뀌면 무엇이 달라질지 짝에게 말해 보아요.',
          demo: CHART('circle', '지어낸 학급 25명의 역할(가상)', [['방관', 12], ['방어', 5], ['강화', 5], ['동조', 3]], '가장 큰 부분은?', 0, { unit: '명' }),
          art: art('a paper pie chart with four slices next to a row of twenty-five tiny paper figures in four colors', '가장 큰 부분이 바뀌면?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 지어낸 이야기 속 가상 자료다.',
      }),
      X('act.role-sort', {
        title: '행동을 역할로 나누기', method: '행동을 역할로 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '행동 카드 6장을 네 역할 바구니에 나누고, 넣을 때 바로 맞는지 알려 준다.', base: '행동 카드 8장을 네 역할로 나누고, 둘째 문항에서 놀림을 키우는 행동과 멈추는 행동을 가른다.', challenge: '행동 카드 10장을 나누고, 두 역할에 걸치는 카드를 셋째 문항에서 모둠 토의로 정한다.' },
        activity: {
          title: '행동을 역할로', tool: 'sortboard',
          teacher: '"\'ㅋㅋ\' 댓글을 단 것은 어느 역할일까요? 함께 놀리지는 않았는데요." 카드를 넣을 때마다 그 행동이 놀리는 사람에게 어떤 신호를 주는지 말하게 한다. "웃기만 했으면 상관없어요"라는 학생에게 "웃음은 \'더 해도 돼\'라는 신호가 될 수 있어요. 그래서 따라 웃는 사람을 강화자라고 해요"라고 말해 준다. 역할은 고정된 사람이 아니라 지금 하는 행동이라 언제든 바꿀 수 있다는 점을 짚는다.',
          task: '행동 카드를 동조·강화·방관·방어 바구니에 나누고, 하나는 근거를 말해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('행동 카드를 네 역할 바구니에 나누어요.', { slots: ['동조', '강화', '방관', '방어'], groups: { 동조: ['같이 발 걸기', '함께 흉내 내기'], 강화: ['"ㅋㅋ" 댓글 달기', '옆에서 손뼉 치기'], 방관: ['조용히 자리 피하기', '못 본 척 책 보기'], 방어: ['"그만하라"고 말하기', '선생님께 알리기'] }, easy: 6, extra: { 강화: ['"더 해" 부추기기'], 방어: ['놀림 받는 친구 곁에 서기'] } }, 0.2),
            SB('행동을 놀림을 키우는 행동과 멈추는 행동으로 나누어요.', { slots: ['놀림을 키움', '놀림을 멈춤'], groups: { '놀림을 키움': ['웃음소리 크게 내기', '영상 찍어 돌려 보기', '모른 척 계속 구경'], '놀림을 멈춤': ['"재미없어" 말하기', '박수로 분위기 바꾸기', '친구와 함께 자리 뜨기'] } }, 0.25,
              { conclude: '따라 웃기·구경도 놀림을 키워요. 역할은 지금 하는 행동이라 언제든 방어로 바꿀 수 있어요.' }),
            { prompt: '모둠에서 두 역할에 걸치는 카드 하나를 골라 어느 역할에 더 가까운지 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '행동에 알맞은 역할을 써요(동조·강화·방관·방어).', columns: ['행동', '역할'], cells: [['"ㅋㅋ" 댓글 달기', ''], ['못 본 척 책 보기', ''], ['선생님께 알리기', '']], answer: '강화, 방관, 방어' }] },
      }),
      X('act.role-dilemma', {
        title: '웃음이 터진 교실', method: '갈림길: 웃음이 터진 교실', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(웃을지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("왜 분위기 깨?")을 지나 근거를 고른다.', challenge: '갈림 3번(다른 친구들이 따라 바뀌는 장면)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 웃음 터진 교실', tool: 'dilemma',
          teacher: '"서가 린의 발표 실수를 흉내 내자 반이 웃어요. 웃지 않고 가만히 있으면 괜찮을까요?" 고를 때마다 역할이 어떻게 바뀌는지 말하게 한다. "한 명이 말해도 안 바뀌어요"라는 학생에게 "한 명이 박수를 치자 두세 명이 따라 했어요. 방어자 한 명이 다음 사람을 만들어요"라고 말해 준다. 흉내 낸 서를 망신 주지 않고 행동만 멈추게 한다는 점을 짚는다.',
          task: '갈림길마다 고르고, 역할이 바뀌는 결과를 따라간 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '웃음이 터진 교실',
            steps: [
              { text: '린이 발표하다 말을 더듬자 서가 흉내를 내고 반이 웃어요.', motif: 'star',
                good: ['stop', '"그만하자" 하고 린에게 박수를 친다', '웃음이 줄고 린이 다시 발표를 이어 가요.', [['린', '힘을 얻어요', 1]]],
                bad: ['laugh', '나도 따라 웃는다', '흉내가 한 번 더 이어져요.', '따라 웃으면 강화자가 되어 흉내를 키워요.', [['린', '발표를 멈춰요', -1]]],
                mid: ['still', '웃지 않고 가만히 있는다', '나는 안 웃었지만 흉내는 이어져요.', '웃지 않은 것은 좋아요. 한마디나 박수가 있으면 멈출 수 있어요.', [['린', '혼자 버텨요', -1]]] },
              { text: '서가 "왜 분위기 깨? 장난인데" 해요.', motif: 'cloud',
                good: ['again', '"발표는 누구나 떨려" 하고 다시 박수 친다', '서가 머쓱해하며 자리에 앉아요.', [['서', '흉내를 멈춰요', 1]]],
                bad: ['back', '"미안, 계속해" 한다', '서가 흉내를 다시 시작해요.', '한 번 더 또렷하게 멈추자고 해요.', [['린', '다시 웃음거리가 돼요', -1]]] },
              { text: '두세 명이 따라 박수를 쳐요. 다음 시간은 서의 발표 차례예요.', motif: 'sun',
                good: ['listen', '서의 발표도 귀 기울여 듣고 박수 친다', '반 전체가 발표 때 서로 박수를 쳐요.', [['반 전체', '발표가 편해져요', 1]]],
                bad: ['payback', '"이번엔 서가 실수하나 보자" 한다', '반에 또 흉내 낼 사람을 찾는 분위기가 생겨요.', '되갚기는 놀림을 이어 가요. 모두의 발표를 존중해요.', [['서', '불안해져요', -1]]] },
            ],
            ending: '"그만하자"와 박수 한 번이 반 분위기를 바꿨어요.',
            reasons: [{ id: 'amplify', text: '따라 웃으면 놀림이 커진다' }, { id: 'one', text: '방어자 한 명이 다른 친구를 바꾼다' }, { id: 'respect', text: '누구의 발표든 존중한다' }, { id: 'only', text: '흉내 낸 사람만 책임이 있다', why: '웃은 사람도 놀림을 키우는 역할을 해요.' }],
            good: ['amplify', 'one', 'respect'],
            talk: '모둠에서 "웃음이 터졌을 때 분위기를 바꾸는 행동"을 하나씩 말해요.',
            conclude: '따라 웃지 않고, "그만하자"와 박수로 방어자가 되면 다른 친구도 따라 바뀌어요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '친구의 발표 실수를 흉내 낼 때 방어자가 할 행동을 써요.' }] },
      }),
      X('act.role-cause', {
        title: '역할이 결과를 바꾸는 그물', method: '역할이 결과를 바꾸는 생각그물', tool: 'mindmap', minutes: 26,
        levels: { easy: '원인 가지 2개에 결과 카드를 하나씩 잇는다.', base: '원인 가지 3개에 결과 카드를 잇고, 둘째 문항에서 근거 장면을 나눈다.', challenge: '원인 가지 4개에 결과를 잇고, 결과마다 근거 장면을 셋째 문항에서 말한다.' },
        activity: {
          title: '역할과 결과 그물', tool: 'mindmap',
          teacher: '"강화자가 웃으면 무슨 일이 생길까요? 방어자가 말하면요?" 가지마다 "~하면 → ~된다"로 이어 말하게 한다. "방관자는 아무 일도 안 했으니 결과도 없어요"라는 학생에게 "방관자가 많으면 놀리는 사람은 무엇을 배울까요?"라고 되묻는다. 결과마다 오늘 본 장면에서 근거를 찾아 붙이게 한다.',
          task: '역할의 행동(원인) 가지에 결과 카드를 잇고, 근거 장면을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MAT('역할의 행동 가지마다 알맞은 결과 카드를 이어요.', [['강화자가 따라 웃으면', '놀림이 늘어나요'], ['방어자가 "그만" 하면', '다른 친구도 따라 말려요'], ['방관자가 많으면', '괜찮다고 여겨요'], ['동조자가 함께 하면', '한 명이 둘러싸여요']], ['아무 변화 없어요'], { easy: 2, base: 3, topic: '놀림 장면의 역할' }, 0.25),
            SORT('근거 장면 카드를 강화자의 결과와 방어자의 결과로 나누어요.', { topic: '근거 장면', slots: ['강화자의 결과', '방어자의 결과'], groups: { '강화자의 결과': ['웃음소리에 흉내가 커짐', 'ㅋㅋ 댓글에 글이 퍼짐'], '방어자의 결과': ['"그만" 한마디에 조용해짐', '박수에 발표가 이어짐'] }, easy: 1, extra: { '강화자의 결과': ['손뼉에 장난이 길어짐'], '방어자의 결과': ['곁에 서자 놀림이 멈춤'] } }, 0.25,
              { conclude: '같은 장면도 주변 사람의 역할에 따라 결과가 달라져요. 방어자가 늘면 놀림이 멈춰요.' }),
            { prompt: '모둠에서 결과 하나를 골라, 오늘 본 장면에서 근거를 찾아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"강화자가 웃으면 → ___"처럼 원인과 결과를 한 문장으로 써요.' }, { type: 'choice', prompt: '방어자가 "그만"이라고 말하면 생길 수 있는 결과는?', options: ['놀림이 더 커진다', '다른 친구도 따라 말린다', '아무 일도 없다'], answer: '다른 친구도 따라 말린다' }] },
      }),
      X('wrap.role-self', {
        title: '나의 역할 자기 점검', method: '나의 역할 자기 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개를 표시한다.', base: '점검 칸 3개(가상 장면의 내 역할 떠올리기·다음 역할 정하기·그 행동 정하기)를 표시한다.', challenge: '점검 칸 3개를 표시하고, 다음 역할을 위한 행동 하나를 짧은 글로 구체적으로 쓴다.' },
        wrap: {
          teacher: '"오늘 본 가상 장면에서 나라면 어떤 역할에 가까웠을지 떠올려 볼까요? 발표하지 않아도 돼요." 점검 칸을 함께 읽는다. "저는 방관자라서 나빠요"라는 말에는 "역할은 사람이 아니라 행동이에요. 다음에 할 행동을 정하면 역할이 바뀌어요"라고 말해 준다. 실제 있었던 일을 말하게 하지 않는다.',
          exitTicket: [
            SELF('나의 역할 점검', ['가상 장면에서 내 역할을 떠올렸다', '다음에 할 역할을 정했다', '그 역할의 행동 하나를 정했다'], '오늘 정한 것에 스스로 표시해요.', { easy: 2, base: 3 }),
            { type: 'choice', prompt: '놀림 장면에서 옆에서 웃기만 한 사람은?', options: ['아무 상관없다', '놀림을 키우는 강화자가 될 수 있다', '방어자다'], answer: 1, difficulty: 0.15, explain: '따라 웃으면 놀리는 사람에게 힘을 주어 강화자가 돼요.' },
            { type: 'short', prompt: '다음에 방어자가 되려고 할 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '역할은 바꿀 수 있어요',
          items: [
            { type: 'check', prompt: '내가 해 볼 방어자 행동에 표시해요.', options: ['따라 웃지 않기', '"그만하자" 말하기', '박수로 분위기 바꾸기', '어른께 알리기'] },
            { type: 'short', prompt: '역할이 결과를 바꾼다는 것을 한 문장으로 써요.' },
          ],
        },
      }),
      X('wrap.role-rubric', {
        title: '방어자의 한마디 쓰기', method: '방어자의 한마디 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 상황 1개에 맞는 한마디를 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '상황 2개에 맞는 한마디를 두 문장 이상 쓰고 기준 3개를 점검한다.', challenge: '말과 함께 할 행동(\'곁에\'·\'함께\'·\'박수\'·\'선생님\')까지 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"흉내 내기와 \'ㅋㅋ\' 댓글, 두 상황에서 방어자는 어떤 한마디를 할 수 있을까요?" 문장 틀을 칠판에 적는다. "너 진짜 나쁘다!"처럼 쓰는 학생에게 "사람을 공격하면 싸움이 커져요. 행동을 멈추게 하는 말로 바꿔 볼까요?"라고 묻는다. 나와 친구 모두 안전한 말인지 다시 읽게 한다.',
          exitTicket: [
            RUBX('흉내 내기·ㅋㅋ 댓글 상황에서 방어자가 할 한마디를 써요', { topic: '상황 ① 친구 발표 실수를 흉내 냄 ② 놀림 글에 ㅋㅋ가 달림. 방어자가 할 한마디를 써요(이름은 쓰지 않아요).', starter: '흉내 낼 때 나는 "___" 하고 말하겠다.', crit: ['나와 친구 모두 안전한 말이다', '누구도 깎아내리지 않았다', '분위기를 바꾸는 말이다'], must: [['곁에', '함께', '박수', '선생님']], chars: [20, 200], title: '방어자의 한마디', sents: [1, 2, 3], chCrit: '말과 함께 할 행동을 넣었다', chPrompt: '두 상황의 한마디와 함께 할 행동까지 써요.' }),
            { type: 'choice', prompt: '방어자의 한마디로 알맞은 것은?', options: ['"너도 똑같이 당해 봐"', '"그만하자, 재미없어"', '"쟤가 원래 이상해"'], answer: 1, difficulty: 0.15, explain: '공격하지 않고 행동을 멈추게 하는 말이 방어자의 말이에요.' },
          ],
        },
        worksheet: {
          title: '방어자의 한마디',
          items: [
            { type: 'short', prompt: '흉내 내기 상황에서 할 한마디를 써요.' },
            { type: 'short', prompt: 'ㅋㅋ 댓글 상황에서 할 한마디를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 차별하는 말과 혐오 표현 멈추기 (research-mandatory §2 초: 폭력의 종류 알기 — 언어폭력) ========
  {
    const X = mk('g6-hate-words', 6);
    M.push(
      X('intro.word-weight', {
        title: '같은 말을 다른 사람이 들을 때', method: '같은 말을 다른 사람이 들을 때', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 친구(별·린)의 마음만 함께 고른다.', base: '세 친구의 마음을 고른다.', challenge: '말한 사람의 의도(장난)와 듣는 사람의 마음 차이를 말한다.' },
        intro: {
          teacher: '"친구들이 장애나 출신을 빗대어 \'~같다\'고 웃으며 말해요. 그 말을 지어낸 세 친구가 들었어요." 실제 비하어는 칠판에 쓰지 않고 \'장애를 빗댄 말\'·\'출신을 빗댄 말\'이라고만 적는다. 시연 단추로 마음 카드가 붙는 모습을 보인다. "그 친구 들으라고 한 말이 아니에요"라는 말에는 "듣는 사람이 고른 게 아닌데, 별에게는 어떻게 들릴까요?"라고 되묻는다.',
          student: '같은 말을 들은 세 친구의 마음을 고르고, 말한 사람과 듣는 사람의 마음이 어떻게 다른지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '장애가 있는 동생이 있는 별' }, { id: 's2', label: '다른 나라에서 온 가족이 있는 린' }, { id: 's3', label: '옆에서 함께 들은 온' }], cards: ['속상함', '화남', '걱정', '신남'], shuffle: false }, sequence: [{ match: { s1: '속상함', s2: '화남' } }, { match: { s1: '속상함', s2: '화남', s3: '걱정' } }] },
          art: art('one paper speech bubble floating above three paper children who each react differently, one looking down, one frowning, one worried', '같은 말, 다른 무게', 'cloud', 'sky'),
        },
        notes: '실제 비하어·혐오 표현은 화면과 칠판에 쓰지 않는다. 인물은 지어낸 것이고, 학급 친구의 가족 배경을 예로 들지 않는다.',
      }),
      X('intro.word-survey', {
        title: '"교실에서 자주 듣는 말" 그래프', method: '"교실에서 자주 듣는 말" 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 2개(외모·출신)만 짚어 더 많은 쪽을 고른다.', base: '막대 3개를 읽고 가장 많은 말의 종류를 말한다.', challenge: '그래프로 알 수 있는 것과 알 수 없는 것(누가 했는지·얼마나 아팠는지)을 나눠 말한다.' },
        intro: {
          teacher: '"이 막대그래프는 어느 6학년이 \'교실에서 들은 깎아내리는 말의 종류\'에 답했다고 꾸민 가상 설문이에요. 가장 많은 것은 무엇일까요?" 시연 단추로 \'외모 비하\'를 고르는 모습을 보인다. "다들 쓰는 말이라 괜찮아요"라는 말에는 "많이 들린다는 것과 괜찮다는 것은 같은 뜻일까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '그래프에서 가장 많은 말의 종류를 찾고, 그래프로 알 수 없는 것도 하나 짝에게 말해 보아요.',
          demo: CHART('bar', '교실에서 들은 깎아내리는 말(가상 설문)', [['외모 비하', 15], ['성별 비하', 9], ['출신 비하', 6]], '가장 많은 것은?', 0, { xLabel: '종류', yLabel: '학생 수' }),
          art: art('a paper bar chart with three bars, each bar topped with a small crumpled paper speech bubble', '어떤 말이 많이 들릴까?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('act.word-sort', {
        title: '차별하는 말 찾기', method: '차별하는 말 찾기', tool: 'sortboard', minutes: 14,
        levels: { easy: '말 카드 4장을 나누고, 넣을 때 바로 맞는지 알려 주며 장 수가 보인다.', base: '말 카드 6장을 깎아내리는 말·존중하는 말로 나누고, 둘째 문항에서 어떤 무리를 깎아내리는지 표시한다.', challenge: '말 카드 8장을 나누고, 농담처럼 보이는 카드의 문제를 셋째 문항에서 말한다.' },
        activity: {
          title: '차별하는 말 찾기', tool: 'sortboard',
          teacher: '"\'여자가 무슨 축구야\'는 농담일까요, 깎아내리는 말일까요?" 카드를 넣을 때마다 "이 말은 누구를, 어떤 무리 전체를 낮추나요?"를 묻게 한다. "웃자고 한 말인데요"라는 학생에게 "웃자고 한 말도 한 무리 전체를 낮추면 차별이에요. 듣는 사람은 웃을 수 없어요"라고 말해 준다. 카드의 말은 수업용으로 순하게 바꾼 것이며, 실제 비하어는 쓰지 않는다고 밝힌다.',
          task: '말 카드를 깎아내리는 말과 존중하는 말로 나누고, 어떤 무리를 깎아내리는지 표시해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('말 카드를 깎아내리는 말과 존중하는 말로 나누어요.', { slots: ['깎아내리는 말', '존중하는 말'], groups: { '깎아내리는 말': ['"여자가 무슨 축구야"', '"너희 나라로 가"', '"뚱뚱해서 못 뛰지"'], '존중하는 말': ['"같이 축구하자"', '"너희 나라 말 알려 줘"', '"오늘 달리기 멋졌어"'] }, extra: { '깎아내리는 말': ['"남자가 왜 울어"'], '존중하는 말': ['"천천히 같이 가자"'] } }, 0.2),
            SB('깎아내리는 말이 어떤 무리를 낮추는지 바구니에 넣어요.', { slots: ['성별', '출신', '장애', '외모'], groups: { 성별: ['"남자가 무슨 인형이야"'], 출신: ['"피부색이 왜 그래"'], 장애: ['장애를 빗댄 "~같다"'], 외모: ['"키 작아서 안 돼"'] }, easy: 2, extra: { 성별: ['"여자는 조용해야지"'], 외모: ['"얼굴 보고 뽑자"'] } }, 0.25,
              { conclude: '한 사람이 아니라 성별·출신·장애·외모 같은 무리 전체를 낮추는 말은 차별이자 언어폭력이에요.' }),
            { prompt: '모둠에서 농담처럼 보이는 카드 하나를 골라 무엇이 문제인지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '무리 전체를 깎아내리는 말은?', options: ['"같이 축구하자"', '"여자가 무슨 축구야"', '"오늘 달리기 멋졌어"'], answer: '"여자가 무슨 축구야"' }] },
        notes: '카드의 말은 수업용으로 순하게 바꾼 예다. 학생이 아는 실제 비하어를 말하거나 적게 하지 않는다.',
      }),
      X('act.word-dilemma', {
        title: '유행어로 차별하는 말을 쓸 때', method: '갈림길: 친구가 유행어로 차별하는 말을 쓸 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(따라 쓸지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("다들 쓰는 말이야")을 지나 근거를 고른다.', challenge: '갈림 3번(친구가 말을 바꾼 다음 날)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 유행하는 말', tool: 'dilemma',
          teacher: '"친구 온이 요즘 유행하는 줄임말을 써요. 그런데 그 말은 장애를 낮추는 말에서 왔어요. 어떻게 할까요?" 고를 때마다 그 말을 듣는 사람에게 미친 영향을 읽게 한다. "다들 쓰니까 괜찮아요"라는 학생에게 "많이 쓰일수록 상처받는 사람도 많아져요"라고 말해 준다. 말을 바꾼 온을 놀리지 않고 반긴다는 점을 짚는다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '유행하는 줄임말',
            steps: [
              { text: '온이 장애를 낮추는 말에서 온 유행 줄임말을 웃으며 써요.', motif: 'cloud',
                good: ['say', '"그 말은 누군가를 깎아내려" 한다', '온이 "그래?" 하며 멈칫해요.', [['그 말을 듣는 사람', '덜 상처받아요', 1]]],
                bad: ['copy', '나도 따라 쓴다', '그 말이 반에 더 퍼져요.', '따라 쓰면 차별하는 말이 더 퍼져요.', [['장애가 있는 사람', '더 상처받아요', -1]]],
                mid: ['ignore', '못 들은 척한다', '온은 다음에도 그 말을 써요.', '못 들은 척하고 싶은 마음은 알지만, 한마디가 있어야 멈춰요.', [['그 말을 듣는 사람', '계속 듣게 돼요', -1]]] },
              { text: '온이 "다들 쓰는 말이잖아"라고 해요.', motif: 'wind',
                good: ['offer', '"그래도 듣는 사람이 아파" 하고 다른 말을 알려 준다', '온이 "그럼 다르게 말해 볼게" 해요.', [['온', '말을 바꿔요', 1]]],
                bad: ['agree', '"그렇긴 하지" 하고 넘어간다', '그 말이 계속 쓰여요.', '많이 쓰는 말이라도 차별이면 바꿔요.', [['그 말을 듣는 사람', '계속 상처받아요', -1]]] },
              { text: '다음 날, 온이 그 말 대신 다른 말을 써요.', motif: 'sun',
                good: ['thanks', '"바꿔 줘서 고마워" 한다', '온이 웃고, 다른 친구들도 말을 바꿔요.', [['온', '바꾼 행동을 이어 가요', 1]]],
                bad: ['tease', '"어제는 왜 그랬어?" 하고 놀린다', '온이 머쓱해 다시 말을 줄여요.', '말을 바꾼 친구를 탓하지 않고 반겨요.', [['온', '마음이 닫혀요', -1]]] },
            ],
            ending: '한마디와 응원 덕분에 반에서 차별하는 말이 줄었어요.',
            reasons: [{ id: 'group', text: '무리를 낮추는 말은 많이 쓰여도 차별이다' }, { id: 'one', text: '한마디로 말을 바꿀 수 있다' }, { id: 'welcome', text: '말을 바꾼 친구를 반긴다' }, { id: 'all', text: '다들 쓰니까 괜찮다', why: '많이 쓰일수록 상처받는 사람도 많아져요.' }],
            good: ['group', 'one', 'welcome'],
            talk: '모둠에서 "유행어가 차별일 때 쓸 한마디"를 하나씩 말해요.',
            conclude: '유행어라도 무리를 낮추는 말은 따라 쓰지 않고, 바꾸자고 말해요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '"다들 쓰는 말이잖아"라는 친구에게 해 줄 말을 써요.' }] },
        notes: '유행 줄임말의 실제 낱말은 쓰지 않는다. 학생이 아는 예를 말하게 하지 않는다.',
      }),
      X('act.word-rewrite', {
        title: '바꾸는 말 쓰기', method: '바꾸는 말 쓰기', tool: 'rubric-writing', minutes: 26,
        levels: { easy: '문장 틀을 보고 차별하는 말 1개를 바꿔 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '차별하는 말 2개를 바꿔 두 문장 이상 쓰고 기준 3개를 점검한다.', challenge: '차별하는 말 3개를 바꾸고 바꾼 까닭(\'왜냐하면\'·\'때문에\')까지 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '존중하는 말로 바꾸기', tool: 'rubric-writing',
          teacher: '"\'여자가 무슨 축구야\'를 하고 싶은 뜻은 살리면서 존중하는 말로 바꿔 볼까요?" 칠판에 예를 적는다: "같이 축구하자, 패스 연습할래?" "그냥 말 안 하면 돼요"라는 학생에게 "말을 안 하는 것도 방법이지만, 하고 싶던 말을 존중하는 말로 바꿀 수 있어요"라고 말해 준다. 바꾼 말이 다른 무리를 낮추지 않는지 다시 읽게 한다.',
          task: '차별하는 말을 존중하는 표현으로 바꿔 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('차별하는 말을 존중하는 표현으로 바꿔 써요', { topic: '"여자가 무슨 축구야", "너희 나라로 가"를 존중하는 말로 바꿔 써요.', starter: '"여자가 무슨 축구야" 대신 "___" 하고 말하겠다.', crit: ['어떤 무리도 깎아내리지 않았다', '하고 싶은 뜻이 전해진다', '듣는 사람을 존중한다'], must: [['왜냐하면', '때문에']], chars: [20, 240], title: '바꾸는 말', sents: [1, 2, 3], chCrit: '바꾼 까닭을 썼다', chTopic: '"여자가 무슨 축구야", "너희 나라로 가", "뚱뚱해서 못 뛰지"를 존중하는 말로 바꾸고 까닭을 써요.', chPrompt: '차별하는 말 세 개를 바꿔 쓰고 바꾼 까닭도 써요.' }, 0.25),
            RUB('"농담이었어"라는 친구에게 할 말을 써요', { topic: '차별하는 말을 하고 "농담이었어"라는 친구에게 할 말을 한두 문장으로 써요.', starter: '농담이었어도 ___. 다음엔 ___ 하고 말해 줘.', crit: ['친구를 공격하지 않았다', '왜 문제인지 썼다', '바꿀 말을 알려 주었다'], must: [['대신', '다음엔', '바꿔']], chars: [15, 160], title: '농담이었어?' }, 0.2,
              { conclude: '하고 싶은 뜻은 살리고, 무리를 낮추는 말은 존중하는 말로 바꿔요.' }),
            { prompt: '짝과 바꾼 말을 서로 읽어 주고, 다른 무리를 낮추지 않는지 확인해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '차별하는 말을 존중하는 말로 바꿔 써요.', columns: ['차별하는 말', '바꾼 말'], cells: [['"여자가 무슨 축구야"', ''], ['"너희 나라로 가"', '']] }, { type: 'short', prompt: '"농담이었어"라는 친구에게 할 말을 써요.' }] },
      }),
      X('wrap.word-campaign', {
        title: '"말의 무게" 캠페인 포스터', method: '"말의 무게" 캠페인 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '조각 3개 이상으로 꾸미고 점검 칸 2개를 표시한다.', base: '조각 5개 이상으로 저울·말풍선·하트를 만들고 점검 칸 3개를 표시한다.', challenge: '보색 조각이 맞닿게 대비를 주어 꾸미고, 표어 두 개를 정해 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"말에도 무게가 있다면, 차별하는 말과 존중하는 말은 저울에서 어떻게 보일까요?" 세모(저울 받침)·긴 네모(저울대)·반원(말풍선)으로 만드는 방법을 칠판에 보인다. "무서운 그림이어야 사람들이 조심해요"라는 말에는 "존중하는 말을 쓰고 싶게 만드는 포스터가 더 오래 남아요"라고 말해 준다. 표어는 활동지에 쓴다.',
          exitTicket: [
            COLX('"말의 무게" 캠페인 포스터를 조각으로 꾸미고 점검해요.', ['저울 모양을 만들었다', '말풍선 모양을 넣었다', '하트로 존중의 뜻을 담았다', '표어 두 개를 정해 활동지에 썼다'], { add: { contrast: 'complement' } }),
            { type: 'short', prompt: '포스터에 넣을 표어를 써요.' },
          ],
        },
        worksheet: {
          title: '말의 무게',
          items: [
            { type: 'draw', prompt: '"말의 무게" 포스터 그림을 그려요.' },
            { type: 'short', prompt: '캠페인 표어 두 개를 써요.' },
          ],
        },
        notes: '콜라주는 글자를 붙이지 못한다. 표어는 활동지에 쓴다. 도전의 대비는 보색 조각(예: 빨강·초록)이 맞닿게 붙이면 된다.',
      }),
      X('wrap.word-self', {
        title: '내 말 습관 자기 점검', method: '내 말 습관 자기 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개를 표시한다.', base: '점검 칸 3개(무리를 빗댄 말 쓰지 않기·들으면 멈추자고 하기·바꿀 말 정하기)를 표시한다.', challenge: '점검 칸 3개를 표시하고, 한 주 실천 계획을 짧은 글로 구체적으로 쓴다.' },
        wrap: {
          teacher: '"이번 주 내 말 습관에서 지킬 것에 스스로 표시해 볼까요?" 점검 칸을 함께 읽는다. "저도 모르게 쓸 때가 있어요"라는 말에는 "알아차린 것부터가 시작이에요. 썼다면 바로 \'아, 다른 말로 할게\' 하고 바꾸면 돼요"라고 말해 준다. 쓴 말을 발표하게 하지 않는다.',
          exitTicket: [
            SELF('내 말 습관 점검', ['무리를 빗댄 말을 쓰지 않는다', '들으면 멈추자고 말한다', '바꿀 말 하나를 정했다'], '이번 주 말 습관에서 지킬 것에 스스로 표시해요.', { easy: 2, base: 3 }),
            { type: 'choice', prompt: '"그 친구 들으라고 한 말이 아니다"에 알맞은 생각은?', options: ['그러면 괜찮다', '그 무리의 누군가가 들으면 상처가 된다', '혼잣말은 다 괜찮다'], answer: 1, difficulty: 0.15, explain: '무리를 낮추는 말은 그 무리의 누구에게든 상처가 돼요.' },
            { type: 'short', prompt: '한 주 동안 바꿔 쓸 말 하나와 실천 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '내 말 습관',
          items: [
            { type: 'check', prompt: '이번 주에 지킬 것에 표시해요.', options: ['무리를 빗댄 말 쓰지 않기', '들으면 멈추자고 하기', '존중하는 말로 바꾸기'] },
            { type: 'short', prompt: '내가 자주 쓰는 말 가운데 바꾸고 싶은 말을 존중하는 말로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 사이버폭력이 더 아픈 까닭: 퍼짐·남음·익명 (지침 사이버폭력 예방 3차시 이상) ========
  {
    const X = mk('g6-why-cyber-hurts', 6);
    M.push(
      X('intro.spread-sim', {
        title: '공유 수 꺾은선그래프', method: '공유 수 꺾은선그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 시점(1시간·하루)만 짚어 견주게 한다.', base: '세 시점의 공유 수를 읽고 퍼짐 속도를 말한다.', challenge: '1시간 시점에 멈췄다면 몇 명에서 끝났을지 어림한다.' },
        intro: {
          teacher: '"이 꺾은선그래프는 지어낸 놀림 게시물이 얼마나 공유됐는지 나타낸 가상 자료예요. 1시간에 3번이던 공유가 하루 만에 몇 번이 됐을까요?" 시연 단추로 \'하루\'를 고르는 모습을 보인다. "지우면 끝나요"라는 말에는 "200번 공유된 뒤에 처음 글을 지우면, 공유된 것도 사라질까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '그래프에서 공유 수가 가장 빠르게 늘어난 때를 찾고, 그 까닭을 짝에게 말해 보아요.',
          demo: CHART('line', '놀림 게시물 공유 수(가상)', [['1시간', 3], ['3시간', 40], ['하루', 200]], '공유가 가장 많은 때는?', 2, { unit: '번', xLabel: '지난 시간', yLabel: '공유 수' }),
          art: art('a paper line chart rising steeply with tiny paper envelopes multiplying along the line', '얼마나 빨리 퍼질까?', 'wind', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('intro.four-faces', {
        title: '네 가지 특징 장면과 마음', method: '네 가지 특징 장면 보고 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개(밤 11시 메시지·남은 사진)의 마음을 함께 고른다.', base: '장면 3개의 마음을 고른다.', challenge: '장면마다 어떤 특징(24시간·지워지지 않음·익명)인지 이름을 이어 말한다.' },
        intro: {
          teacher: '"교실에서의 놀림은 학교 문을 나서면 멈추기도 해요. 그런데 온라인에서는 어떨까요?" 세 장면을 읽고 시연 단추로 받는 친구의 마음 카드가 붙는 모습을 보인다. "밤에는 휴대폰을 안 보면 돼요"라는 말에는 "알림이 계속 오고, 다음 날 아침 다 읽혀 있다면 그 친구는 쉴 수 있을까요?"라고 되묻는다. 오늘은 사이버폭력이 더 아픈 네 가지 까닭을 배운다고 밝힌다.',
          student: '세 장면에서 받는 친구의 마음을 고르고, 교실의 놀림과 무엇이 다른지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '밤 11시에도 오는 놀림 메시지' }, { id: 's2', label: '지웠는데 다른 방에 남은 사진' }, { id: 's3', label: '누가 썼는지 모르는 놀림 글' }], cards: ['무서움', '걱정', '속상함', '신남'], shuffle: false }, sequence: [{ match: { s1: '무서움', s2: '걱정' } }, { match: { s1: '무서움', s2: '걱정', s3: '속상함' } }] },
          art: art('a paper moon over a paper bedroom where a phone glows with message bubbles, a copied paper photo drifting away and a masked paper figure', '밤에도, 지워도, 몰라도', 'moon', 'lilac'),
        },
      }),
      X('act.feature-match', {
        title: '사례를 네 특징으로 나누기', method: '사례를 네 특징으로 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '사례 카드 4장을 네 특징 바구니에 넣고, 넣을 때 바로 맞는지 알려 준다.', base: '사례 카드 6장을 네 특징으로 나누고, 둘째 문항에서 결과를 키우는 행동과 줄이는 행동을 가른다.', challenge: '사례 카드 8장을 나누고, 두 특징에 걸치는 사례를 셋째 문항에서 토의한다.' },
        activity: {
          title: '네 특징으로 사례 나누기', tool: 'sortboard',
          teacher: '"\'지운 사진이 캡처로 남음\'은 네 특징 가운데 무엇일까요?" 카드를 넣을 때마다 그 특징 때문에 결과가 어떻게 커지는지 말하게 한다. "좋아요만 누른 건 괜찮아요"라는 학생에게 "좋아요 하나가 그 글을 더 많은 사람에게 보이게 해요. 누르는 것도 행동이에요"라고 말해 준다.',
          task: '사례 카드를 빠른 퍼짐·지워지지 않음·24시간·익명 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('사례 카드를 사이버폭력의 네 특징 바구니에 나누어요.', { slots: ['빠른 퍼짐', '지워지지 않음', '24시간', '익명'], groups: { '빠른 퍼짐': ['한 시간 만에 반 전체가 봄', '공유가 공유를 부름'], '지워지지 않음': ['지운 사진이 캡처로 남음', '지난달 글이 다시 돎'], '24시간': ['새벽에도 알림이 옴'], 익명: ['가짜 계정의 놀림 글'] }, extra: { '24시간': ['집에서도 쉴 수 없음'], 익명: ['누가 썼는지 몰라 불안'] } }, 0.2),
            SB('행동을 결과를 키우는 행동과 줄이는 행동으로 나누어요.', { slots: ['결과를 키움', '결과를 줄임'], groups: { '결과를 키움': ['좋아요 누르기', '캡처해 퍼 나르기', '다른 방에 공유하기'], '결과를 줄임': ['공유하지 않기', '게시물 신고하기', '어른께 알리기'] } }, 0.25,
              { conclude: '사이버폭력은 퍼지고, 남고, 밤에도 이어지고, 익명이라 더 아파요. 좋아요·공유도 결과를 키우는 행동이에요.' }),
            { prompt: '모둠에서 두 특징에 걸치는 사례 하나를 골라 결과까지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례에 알맞은 특징을 써요.', columns: ['사례', '특징'], cells: [['새벽에도 알림이 옴', ''], ['지운 사진이 캡처로 남음', ''], ['가짜 계정의 놀림 글', '']], answer: '24시간, 지워지지 않음, 익명' }] },
      }),
      X('act.like-dilemma', {
        title: '놀림 게시물에 좋아요가 쌓일 때', method: '갈림길: 놀림 게시물에 좋아요가 쌓일 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(좋아요를 누를지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(하루 뒤 더 퍼짐)을 지나 근거를 고른다.', challenge: '갈림 3번(영상 속 친구 쪽 장면)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 쌓이는 좋아요', tool: 'dilemma',
          teacher: '"반 친구 류의 목소리를 흉내 낸 놀림 영상에 좋아요가 쌓여요. 그냥 넘기면 괜찮을까요?" 고를 때마다 하루 뒤 결과를 읽게 한다. "나는 안 만들었으니 상관없어요"라는 학생에게 "좋아요와 공유가 영상을 더 멀리 보내요. 그리고 신고·알리기는 만들지 않은 사람도 할 수 있어요"라고 말해 준다. 영상 속 류를 탓하는 말은 2차 상처라는 점을 짚는다.',
          task: '갈림길마다 고르고, 하루 뒤까지 결과를 따라간 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '쌓이는 좋아요',
            steps: [
              { text: '반 친구 류의 목소리를 흉내 낸 놀림 영상에 좋아요가 쌓여요.', motif: 'star',
                good: ['report', '신고하고 어른께 알리며 류에게 연락한다', '선생님이 영상을 내리도록 돕기로 해요.', [['류', '혼자가 아니에요', 1]]],
                bad: ['like', '좋아요를 누른다', '영상이 더 많은 사람에게 보여요.', '좋아요는 놀림 영상을 더 퍼뜨려요.', [['류', '더 많은 사람이 봐요', -1]]],
                mid: ['skip', '그냥 넘긴다', '나는 안 눌렀지만 영상은 계속 퍼져요.', '안 누른 것은 좋아요. 신고하고 알려야 퍼짐이 멈춰요.', [['류', '퍼짐이 이어져요', -1]]] },
              { text: '하루 뒤, 영상이 다른 학교 친구들에게까지 퍼졌어요.', motif: 'wind',
                good: ['ask', '보호자·선생님과 함께 내려 달라고 요청한다', '어른들이 신고와 삭제 요청을 함께 해요.', [['류', '퍼짐이 멈춰 가요', 1]]],
                bad: ['late', '"이미 늦었어" 하고 둔다', '영상이 계속 남아 돌아다녀요.', '퍼진 뒤에도 신고와 요청으로 줄일 수 있어요.', [['류', '계속 불안해요', -1]]] },
              { text: '류가 "다들 봤겠지" 하며 학교에 오기 싫대요.', motif: 'rain',
                good: ['stand', '"네 잘못 아니야, 같이 가자" 하고 곁에 있는다', '류가 조금 안심하고 함께 등교해요.', [['류', '힘을 얻어요', 1]]],
                bad: ['blame', '"그러게 왜 그랬어" 한다', '류는 더 숨고 싶어져요.', '탓하는 말은 2차 상처예요. 잘못은 영상을 만든 사람에게 있어요.', [['류', '더 아파요', -1]]] },
            ],
            ending: '신고하고, 알리고, 곁에 있어 준 덕분에 류가 다시 학교에 와요.',
            reasons: [{ id: 'like', text: '좋아요·공유도 놀림을 퍼뜨린다' }, { id: 'report', text: '신고와 어른의 도움으로 퍼짐을 줄인다' }, { id: 'notfault', text: '영상 속 친구 탓이 아니다' }, { id: 'gone', text: '지우면 다 끝난다', why: '이미 퍼진 것은 남을 수 있어 신고와 도움이 필요해요.' }],
            good: ['like', 'report', 'notfault'],
            talk: '모둠에서 "놀림 게시물을 보았을 때 1분 안에 할 일"을 차례로 말해요.',
            conclude: '놀림 게시물에는 좋아요·공유 대신 신고하고, 어른께 알리고, 그 친구 곁에 있어요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '놀림 영상에 좋아요가 쌓일 때 알맞은 행동은?', options: ['나도 좋아요를 누른다', '신고하고 어른께 알린다', '다른 방에 공유한다'], answer: '신고하고 어른께 알린다' }] },
        notes: 'saf-violence 의 \'놀리는 사진·합성 사진\' 장면과 겹치지 않게 목소리를 흉내 낸 놀림 영상으로 바꿨다.',
      }),
      X('act.cause-chain', {
        title: '원인과 결과 사슬 잇기', method: '원인과 결과 사슬 잇기', tool: 'timeline', minutes: 26,
        levels: { easy: '사슬 카드 3장을 차례대로 놓고, 둘째 문항에서 끊는 행동 2칸을 잇는다.', base: '사슬 카드 4장을 차례대로 놓고 끊는 행동 3칸을 잇는다.', challenge: '틀린 카드를 빼고 4장을 놓은 뒤 끊는 행동 4칸을 잇고, 내가 끊을 단계를 골라 계획을 말한다.' },
        activity: {
          title: '원인과 결과 사슬', tool: 'timeline',
          teacher: '"익명이라 쉽게 쓴 글이 어떻게 밤까지 이어질까요?" 카드를 놓을 때마다 "그래서 다음에는?"을 묻게 한다. "한 번 퍼지면 끊을 수 없어요"라는 학생에게 "단계마다 끊는 행동이 있어요. 어느 고리를 내가 끊을 수 있을까요?"라고 묻는다. 끊는 행동은 혼자가 아니라 어른과 함께 할 수 있다는 점을 짚는다.',
          task: '원인과 결과 사슬 카드를 차례로 놓고, 단계마다 끊는 행동 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('사이버폭력의 원인과 결과 사슬을 차례대로 놓아요.', ['익명이라 쉽게 씀', '빠르게 퍼짐', '지워도 남음', '밤에도 이어짐'], { easy: [0, 1, 3], trap: '저절로 잊힘' }, 0.2),
            MAT('사슬의 단계마다 끊는 행동 카드를 이어요.', [['익명이라 쉽게 씀', '올리기 전 다시 읽기'], ['빠르게 퍼짐', '공유하지 않기'], ['지워도 남음', '신고해 내려 달라 하기'], ['밤에도 이어짐', '알림 끄고 어른께 알리기']], ['똑같이 놀려 주기'], { easy: 2, base: 3 }, 0.25,
              { conclude: '익명 → 퍼짐 → 남음 → 밤까지, 사슬마다 끊는 행동이 있어요. 내가 끊을 고리를 정해요.' }),
            { prompt: '사슬 가운데 내가 끊을 수 있는 단계 하나를 골라 계획을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사슬 가운데 내가 끊을 단계와 그 행동을 써요.' }, { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '놀림 글은 ___ 하지 않으면 더 퍼지지 않아요.', answer: '공유' }] },
      }),
      X('wrap.post-check', {
        title: '올리기·누르기 전 점검 다짐', method: '올리기·누르기 전 점검 다짐 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 질문 1개를 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '질문 3개를 세 문장 이상 쓰고 기준 3개를 점검한다.', challenge: '질문 3개와 친구에게 권하는 문장(\'같이\'·\'함께\'·\'우리\')까지 써서 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"올리기 전, 좋아요를 누르기 전에 나에게 물어볼 질문 세 가지를 만들어 볼까요?" 칠판에 예를 적는다: "이 글이 반 전체에 퍼져도 괜찮을까?" "조심하기"처럼 쓰는 학생에게 "오늘 배운 퍼짐·남음·24시간·익명 가운데 하나와 이어 질문을 만들어 볼까요?"라고 묻는다.',
          exitTicket: [
            RUBX('올리기·좋아요 누르기 전 나에게 할 질문 세 가지를 써요', { topic: '올리기 전·좋아요 누르기 전 나에게 할 질문 세 가지를 써요.', starter: '올리기 전에 나는 "___?" 하고 묻겠다.', crit: ['질문이 구체적이다', '퍼짐·남음·24시간·익명과 이어진다', '내가 지킬 수 있다'], must: [['같이', '함께', '우리']], chars: [20, 220], title: '누르기 전 점검 다짐', sents: [1, 3, 3], chCrit: '친구에게 권하는 문장을 넣었다', chPrompt: '나에게 할 질문 세 가지와 친구에게 권하는 문장을 써요.' }),
            { type: 'choice', prompt: '"좋아요만 누른 건 괜찮다"에 알맞은 생각은?', options: ['맞다', '좋아요도 글을 더 퍼뜨리는 행동이다', '좋아요는 아무도 모른다'], answer: 1, difficulty: 0.15, explain: '좋아요는 글을 더 많은 사람에게 보이게 해요.' },
          ],
        },
        worksheet: {
          title: '누르기 전에 멈춰요',
          items: [
            { type: 'short', prompt: '올리기 전에 나에게 할 질문 하나를 써요.' },
            { type: 'check', prompt: '사이버폭력의 네 특징에 표시해요.', options: ['빠른 퍼짐', '지워지지 않음', '24시간', '익명'] },
          ],
        },
      }),
      X('wrap.night-clock', {
        title: '밤 메시지 멈춤 시각 정하기', method: '밤 메시지 멈춤 시각 정하기', tool: 'clock', minutes: 6,
        levels: { easy: '정각만 움직이는 시계로 은의 가족이 정한 9시를 맞춘다.', base: '10분 눈금 시계로 9시 30분을 맞춘다.', challenge: '5분 눈금 시계로 9시 40분을 맞추고, 끝 시각과 예외 상황(급한 일)을 고르기·말하기로 정한다.' },
        wrap: {
          teacher: '"지어낸 친구 은의 가족은 밤 9시 30분부터 메시지를 쉬기로 약속했어요. 시계를 맞춰 볼까요?" 시계를 맞춘 뒤 "왜 이런 약속이 24시간 이어지는 괴롭힘을 막는 데 도움이 될까요?"라고 묻는다. "메시지를 안 보면 친구들이 저를 뺄 거예요"라는 말에는 "쉬는 시각을 친구들과 함께 정하면 서로 지킬 수 있어요. 급한 일은 보호자께 먼저 알려요"라고 말해 준다. 학생 가정의 실제 시각은 묻지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 10, showDigital: false }, prompt: '은의 가족이 정한 메시지 쉬는 시각(9시 30분)을 맞춰요.', target: { h: 9, m: 30 }, difficulty: 0.15,
              levels: { easy: { prompt: '은의 가족이 정한 메시지 쉬는 시각(9시)을 맞춰요.', toolOptions: { hourOnly: true }, target: { h: 9, m: 0 } }, challenge: { prompt: '은의 가족이 바꾼 메시지 쉬는 시각(9시 40분)을 맞춰요.', toolOptions: { minuteStep: 5 }, target: { h: 9, m: 40 } } } },
            { type: 'choice', prompt: '메시지 쉬는 시간에 급한 일이 생기면?', options: ['몰래 계속 메시지한다', '보호자께 먼저 알린다', '아무것도 하지 않는다'], answer: 1, difficulty: 0.15, explain: '쉬는 시간에도 급한 일은 보호자께 먼저 알려요.' },
            { type: 'short', prompt: '메시지 쉬는 시각이 24시간 괴롭힘을 막는 데 왜 도움이 되는지 써요.' },
          ],
        },
        worksheet: {
          title: '메시지도 쉬어요',
          items: [
            { type: 'short', prompt: '메시지 쉬는 시간을 지키면 좋은 점을 써요.' },
            { type: 'check', prompt: '쉬는 시간에 할 일에 표시해요.', options: ['알림 끄기', '휴대폰은 거실에', '급한 일은 보호자께'] },
          ],
        },
        notes: '시각은 지어낸 은의 가족 약속이다. 학생 가정의 실제 약속을 말하게 하지 않는다.',
      }),
    );
  }

  // ======== 6학년 · 익명 계정 저격 글과 단톡방 한마디 (research-mandatory §2 초: 방관자에서 조력자로, 사이버폭력 예방) ========
  {
    const X = mk('g6-anon-post', 6);
    M.push(
      X('intro.anon-read', {
        title: '익명 저격 글과 마음 짐작', method: '익명 저격 글 읽고 마음 짐작', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 글과 댓글 2개를 읽어 주고 대상 친구의 마음을 함께 고른다.', base: '칠판의 댓글 4개를 읽고 장면 세 칸의 마음을 고른다.', challenge: '익명이라서 댓글이 어떻게 달라졌는지 말한다.' },
        intro: {
          teacher: '칠판에 지어낸 익명 게시글을 적는다: "우리 반 누구는 잘난 척 쩔어". 아래에 댓글을 하나씩 더한다: "ㅋㅋ 누군지 알 듯" → "맞는 말" → "이건 아닌 듯" → "그만하자". "이름이 없는데 대상이 된 친구는 어떤 마음일까요?" 시연 단추로 마음 카드가 붙는 모습을 보인다. "익명이라 아무도 모르니 괜찮아요"라는 말에는 "반 친구들이 \'누군지 알 듯\'이라고 했어요. 대상 친구도 알 수 있지 않을까요?"라고 되묻는다.',
          student: '익명 글과 댓글을 읽고 대상이 된 친구와 댓글 단 친구의 마음을 짐작해 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '글의 대상이 된 친구' }, { id: 's2', label: '"ㅋㅋ 누군지 알 듯" 단 친구' }, { id: 's3', label: '"이건 아닌 듯" 단 친구' }], cards: ['속상함', '신남', '걱정', '편안함'], shuffle: false }, sequence: [{ match: { s1: '속상함', s3: '걱정' } }, { match: { s1: '속상함', s2: '신남', s3: '걱정' } }] },
          art: art('a paper notice board with a faceless paper note pinned in the middle and small paper comment slips around it', '이름은 없어도 사람은 있어요', 'cloud', 'sky'),
        },
        notes: '게시글과 댓글은 지어낸 것이다. 실제 게시판·앱 이름을 쓰지 않는다.',
      }),
      X('intro.anon-chart', {
        title: '익명·실명 댓글 비교 그래프', method: '익명 글과 실명 글 댓글 비교 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 1주의 두 막대(익명·실명)만 짚어 견주게 한다.', base: '네 막대(1주·2주 익명·실명)를 읽고 차이를 말한다.', challenge: '차이가 생긴 까닭을 짐작해 말한다.' },
        intro: {
          teacher: '"이 막대그래프는 지어낸 두 게시판의 놀림 댓글 수를 주마다 센 가상 자료예요. 가장 높은 막대는 무엇일까요?" 시연 단추로 \'익명 2주\'를 고르는 모습을 보인다. "익명이면 들킬 일이 없으니 많은 거예요"라는 말에는 "익명이어도 글쓴이를 찾을 수 있고, 쓴 사람에게 책임이 있어요. 그런데도 왜 많을까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '익명과 실명 게시판의 놀림 댓글 수를 견주고, 차이가 생긴 까닭을 짝에게 말해 보아요.',
          demo: CHART('bar', '게시판별 놀림 댓글 수(가상)', [['익명 1주', 24], ['실명 1주', 6], ['익명 2주', 30], ['실명 2주', 5]], '가장 많은 것은?', 2, { unit: '개', xLabel: '게시판·주', yLabel: '놀림 댓글' }),
          art: art('a paper bar chart where tall bars wear tiny paper masks and short bars show tiny paper faces', '익명이면 달라질까?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('act.one-word-sort', {
        title: '분위기를 바꾸는 한마디', method: '분위기를 바꾸는 한마디 고르기', tool: 'sortboard', minutes: 14,
        levels: { easy: '댓글 카드 4장을 나누고, 넣을 때 바로 맞는지 알려 주며 장 수가 보인다.', base: '댓글 카드 6장을 바꾸는 말·키우는 말로 나누고, 둘째 문항에서 댓글로 할 일과 댓글 밖에서 할 일을 가른다.', challenge: '헷갈리는 카드까지 8장을 나누고, 셋째 문항에서 키우는 말을 바꾸는 말로 고쳐 말한다.' },
        activity: {
          title: '분위기 바꾸는 한마디', tool: 'sortboard',
          teacher: '"\'맞는 말 아님?\'은 분위기를 키울까요, 바꿀까요?" 카드를 넣을 때마다 다음 댓글이 어떻게 이어질지 말하게 한다. "한 사람 말로는 안 바뀌어요"라는 학생에게 "첫 \'그만하자\'가 나오면 다음 사람이 따라 쓰기 쉬워져요"라고 말해 준다. 바꾸는 말은 글쓴이를 공격하지 않고 행동을 멈추게 한다는 점을 짚는다.',
          task: '단톡방 댓글 카드를 분위기를 바꾸는 말과 키우는 말로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('댓글 카드를 분위기를 바꾸는 말과 키우는 말로 나누어요.', { slots: ['분위기를 바꾸는 말', '분위기를 키우는 말'], groups: { '분위기를 바꾸는 말': ['"이건 아닌 듯"', '"그만하자, 걔도 우리 반이야"', '"글 내리는 게 좋겠어"'], '분위기를 키우는 말': ['"ㅋㅋㅋ 누군지 알 듯"', '"맞는 말 아님?"', '"더 써 봐"'] }, extra: { '분위기를 바꾸는 말': ['"나는 신고했어, 그만 보자"'], '분위기를 키우는 말': ['"걔가 먼저 잘난 척했잖아"'] } }, 0.2),
            SB('방어자가 할 일을 댓글로 할 일과 댓글 밖에서 할 일로 나누어요.', { slots: ['댓글로 할 일', '댓글 밖에서 할 일'], groups: { '댓글로 할 일': ['"이건 아닌 듯" 쓰기', '"모두 그만 보자" 쓰기'], '댓글 밖에서 할 일': ['게시물 신고하기', '대상 친구에게 응원 연락', '어른께 알리기'] } }, 0.25,
              { conclude: '분위기를 바꾸는 첫 한마디가 다음 사람을 움직여요. 댓글 밖에서는 신고·응원·알리기를 해요.' }),
            { prompt: '키우는 말 하나를 바꾸는 말로 고쳐 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '분위기를 바꾸는 한마디는?', options: ['"맞는 말 아님?"', '"그만하자, 걔도 우리 반이야"', '"더 써 봐"'], answer: '"그만하자, 걔도 우리 반이야"' }] },
      }),
      X('act.anon-dilemma', {
        title: '익명 계정을 만든 사람을 알 때', method: '갈림길: 익명 계정을 만든 사람을 알게 되었을 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(모른 척할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("말하면 끝이야")을 지나 근거를 고른다.', challenge: '갈림 3번(계정을 만든 친구가 책임지는 장면)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 익명 계정의 주인', tool: 'dilemma',
          teacher: '"익명 저격 계정을 같은 반 로가 만든 것을 알게 됐어요. 로에게 지우라고만 하면 끝날까요?" 고를 때마다 대상 친구와 로에게 미친 영향을 읽게 한다. "친구를 신고하면 배신이에요"라는 학생에게 "알리는 것은 대상 친구를 지키고, 로가 더 큰 잘못을 하기 전에 멈추게 돕는 일이에요"라고 말해 준다. 책임지고 바로잡으려는 로를 \'원래 그런 애\'로 보지 않는다는 점을 짚는다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '익명 계정의 주인',
            steps: [
              { text: '반 친구들을 저격하는 익명 계정을 같은 반 로가 만든 것을 알게 됐어요.', motif: 'moon',
                good: ['report', '신고하고 어른께 알린다', '선생님이 대상 친구들을 먼저 살피기로 해요.', [['대상 친구들', '보호를 받아요', 1]]],
                bad: ['ignore', '모른 척한다', '계정에 새 저격 글이 또 올라와요.', '모른 척하면 저격 글이 이어져요.', [['대상 친구들', '계속 상처받아요', -1]]],
                mid: ['delete', '로에게 지우라고만 한다', '로가 계정을 지웠지만 캡처가 이미 퍼져 있어요.', '지우라고 말한 것은 좋아요. 퍼진 것을 멈추려면 어른의 도움이 필요해요.', [['대상 친구들', '캡처가 남아요', -1]]] },
              { text: '로가 "말하면 너랑 끝이야"라는 메시지를 보내요.', motif: 'storm',
                good: ['honest', '그래도 선생님께 알리고 로에게도 솔직히 말한다', '선생님이 로와 따로 이야기하기로 해요.', [['로', '바로잡을 기회를 얻어요', 1]]],
                bad: ['undo', '겁나서 없던 일로 한다', '로는 다른 계정을 또 만들어요.', '겁주는 말일수록 어른께 알려야 해요.', [['대상 친구들', '다시 상처받아요', -1]]] },
              { text: '선생님과 이야기한 로가 대상 친구들에게 사과하고 싶대요.', motif: 'sun',
                good: ['support', '로가 사과하고 바로잡도록 곁에서 돕는다', '로가 사과하고 캡처를 지우는 일을 함께해요.', [['로', '책임지고 바뀌어요', 1], ['대상 친구들', '마음이 풀려 가요', 1]]],
                bad: ['label', '"넌 원래 그런 애야" 하고 피한다', '로가 다시 마음을 닫아요.', '잘못을 바로잡으려는 친구에게 낙인을 찍지 않아요.', [['로', '바뀔 힘을 잃어요', -1]]] },
            ],
            ending: '알리고, 바로잡도록 도운 덕분에 저격 계정이 사라지고 사과가 이어졌어요.',
            reasons: [{ id: 'protect', text: '알리는 것은 대상 친구를 지키는 일이다' }, { id: 'resp', text: '익명이어도 쓴 사람에게 책임이 있다' }, { id: 'change', text: '바로잡으려는 친구를 돕는다' }, { id: 'betray', text: '친구를 알리면 배신이다', why: '알리는 것은 친구가 더 큰 잘못을 하기 전에 멈추게 돕는 일이에요.' }],
            good: ['protect', 'resp', 'change'],
            talk: '모둠에서 "친구의 잘못을 알릴 때 할 말"을 하나씩 말해요.',
            conclude: '익명 저격 계정은 신고하고 어른께 알려요. 바로잡으려는 친구는 낙인 없이 도와요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '"말하면 너랑 끝이야"라는 메시지를 받으면 할 일을 써요.' }] },
      }),
      X('act.report-steps', {
        title: '신고 차례 연습', method: '신고 차례 연습', tool: 'timer', minutes: 26,
        levels: { easy: '신고 차례 카드 3장(화면 남기기·신고·어른께 알리기)을 놓고 점검 칸 2개를 표시한다.', base: '신고 차례 카드 4장(차단 더함)을 놓고 점검 칸 3개를 표시한다.', challenge: '카드 4장을 놓고 점검 칸 3개를 표시한 뒤, 넷째 문항에서 대상 친구에게 보낼 응원 메시지를 짝과 정한다.' },
        activity: {
          title: '신고 차례 연습', tool: 'timer',
          teacher: '"저격 글을 보면 무엇부터 할까요? 차단부터 하면 어떻게 될까요?" 칠판에 종이 화면을 그려 신고 단추 자리를 함께 짚는다. "차단하면 끝이에요"라는 학생에게 "차단하기 전에 화면을 남겨야 어른이 도울 수 있어요. 차단 뒤에도 기록은 지우지 않아요"라고 말해 준다. 실제 휴대폰은 꺼내지 않고 종이 화면으로만 따라 한다.',
          task: '신고 차례 카드를 놓고, 종이 화면으로 따라 한 뒤 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '저격 글을 보았을 때 신고 차례대로 카드를 놓아요.', toolOptions: { title: '신고 차례', cards: ['차단하기', '게시물·계정 신고', '어른께 알리기', '화면 남기기'] }, target: { order: ['화면 남기기', '게시물·계정 신고', '차단하기', '어른께 알리기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '저격 글을 보았을 때 신고 차례대로 카드를 놓아요(카드 3장).', toolOptions: { cards: ['어른께 알리기', '화면 남기기', '게시물·계정 신고'] }, target: { order: ['화면 남기기', '게시물·계정 신고', '어른께 알리기'] } } } },
            { prompt: '종이 화면으로 따라 한 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '신고 연습 점검' }, target: { selfCheck: ['날짜·시간이 보이게 화면을 남겼다', '신고 단추 자리를 찾았다', '차단 뒤에도 기록은 두었다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '종이 화면으로 따라 한 뒤 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['날짜·시간이 보이게 화면을 남겼다', '신고 단추 자리를 찾았다'] } } } },
            { prompt: '어른께 알릴 때 할 말을 차례대로 놓아요.', toolOptions: { title: '알릴 때 할 말', cards: ['"어떻게 하면 될까요?"', '"이 글 좀 봐 주세요"', '"신고는 해 두었어요"'] }, target: { order: ['"이 글 좀 봐 주세요"', '"신고는 해 두었어요"', '"어떻게 하면 될까요?"'] }, difficulty: 0.2,
              conclude: '화면 남기기 → 신고 → 차단 → 어른께 알리기 차례로 해요. 기록은 지우지 않아요.' },
            { prompt: '짝과 대상 친구에게 보낼 응원 메시지 한 문장을 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '화면 남기기 → 게시물·계정 ___ → 차단하기 → 어른께 알리기', answer: '신고' }, { type: 'short', prompt: '대상 친구에게 보낼 응원 메시지를 한 문장으로 써요.' }] },
        notes: '실제 앱의 신고 화면을 띄우지 않는다. 종이 화면으로만 따라 한다.',
      }),
      X('wrap.one-word-rubric', {
        title: '나의 한마디 쓰기', method: '나의 한마디 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한마디를 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '한마디를 두 문장 이상 쓰고 기준 3개를 점검한다.', challenge: '상황 두 개(익명 저격 글·단톡방 놀림)에 맞춰 세 문장 이상 쓰고(\'그만\'·\'멈추\'를 넣음) 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"단톡방 분위기를 바꾸는 나만의 한마디를 만들어 볼까요?" 오늘 고른 바꾸는 말을 칠판에 다시 적는다. "너 같은 애는 나가"처럼 쓰는 학생에게 "그 말은 또 다른 공격이 될 수 있어요. 글쓴이가 아니라 행동을 멈추게 하는 말로 바꿔 볼까요?"라고 묻는다. 내 말투로 쓰면 실제로 쓰기 쉬워진다고 알려 준다.',
          exitTicket: [
            RUBX('단톡방 분위기를 바꾸는 나만의 한마디를 써요', { topic: '단톡방 분위기를 바꾸는 나만의 한마디를 써요(이름은 쓰지 않아요).', starter: '이런 글이 올라오면 나는 "___" 하고 쓰겠다.', crit: ['누구도 공격하지 않았다', '놀림을 멈추게 하는 말이다', '내 말투로 썼다'], must: [['그만', '멈추']], chars: [15, 200], title: '나의 한마디', sents: [1, 2, 3], chCrit: '상황 두 개에 맞춰 썼다', chTopic: '익명 저격 글과 단톡방 놀림, 두 상황에 맞춰 분위기를 바꾸는 한마디를 써요.', chPrompt: '두 상황에 맞춰 분위기를 바꾸는 한마디를 써요.' }),
            { type: 'choice', prompt: '"익명이라 아무도 모른다"에 알맞은 생각은?', options: ['맞다, 책임이 없다', '익명이어도 쓴 사람을 찾을 수 있고 책임이 있다', '익명 글은 상처가 안 된다'], answer: 1, difficulty: 0.15, explain: '익명이어도 쓴 사람에게 책임이 있고, 상처도 똑같아요.' },
          ],
        },
        worksheet: {
          title: '나의 한마디',
          items: [
            { type: 'short', prompt: '분위기를 바꾸는 나의 한마디를 써요.' },
            { type: 'check', prompt: '신고 차례를 알고 있는지 표시해요.', options: ['화면 남기기', '게시물·계정 신고', '차단하기', '어른께 알리기'] },
          ],
        },
      }),
      X('wrap.anon-poster', {
        title: '"익명 뒤에도 사람이 있어요"', method: '"익명 뒤에도 사람이 있어요" 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '조각 3개 이상으로 꾸미고 점검 칸 2개를 표시한다.', base: '조각 5개 이상으로 가면·말풍선·하트를 만들고 점검 칸 3개를 표시한다.', challenge: '조각 5개 이상으로 꾸미고 표어를 정해 활동지에 쓴 뒤 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"가면 뒤에도 마음이 있는 사람이 있다는 것을 포스터로 나타내 볼까요?" 동그라미·반원(가면)·하트 조각으로 만드는 방법을 칠판에 보인다. "가면은 무섭게 꾸며야 해요"라는 말에는 "가면 뒤의 사람, 글을 읽는 사람의 마음이 보이게 꾸며 볼까요?"라고 말해 준다. 표어는 활동지에 쓴다.',
          exitTicket: [
            COLX('"익명 뒤에도 사람이 있어요" 포스터를 조각으로 꾸미고 점검해요.', ['가면 모양을 만들었다', '말풍선을 넣었다', '하트로 사람의 마음을 나타냈다', '표어를 정해 활동지에 썼다']),
            { type: 'short', prompt: '포스터에 넣을 표어를 써요.' },
          ],
        },
        worksheet: {
          title: '익명 뒤에도 사람이 있어요',
          items: [
            { type: 'draw', prompt: '"익명 뒤에도 사람이 있어요" 포스터 그림을 그려요.' },
            { type: 'short', prompt: '캠페인 표어를 한 줄로 써요.' },
          ],
        },
        notes: '콜라주는 글자를 붙이지 못한다. 가면은 동그라미·반원 조각을 겹쳐 만들고, 표어는 활동지에 쓴다.',
      }),
    );
  }

  // ======== 6학년 · 또래 조정으로 갈등 풀기 (research-mandatory §2 초: 놀림·따돌림 구별 / 중 갈등 해결로 잇기) ========
  {
    const X = mk('g6-peer-mediation', 6);
    M.push(
      X('intro.conflict-temp', {
        title: '갈등이 커지는 신호 고르기', method: '갈등이 커지는 신호 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 단계(역할 다툼 시작·"너랑 안 해")의 감정 온도만 함께 보인다.', base: '세 단계마다 감정 온도가 오르는 모습을 보고, 단계의 신호(목소리가 커짐·돌아섬)를 말한다.', challenge: '어느 단계에 조정이 필요했는지 신호를 근거로 말한다.' },
        intro: {
          teacher: '칠판에 지어낸 모둠 과제 다툼을 세 단계로 적는다: ① 둘 다 발표를 하겠다고 함 → ② 목소리가 커지고 "네가 맨날 해" → ③ "너랑 안 해" 하고 돌아섬. "단계마다 두 친구의 감정 온도는 얼마나 될까요?" 시연 단추로 온도계가 2 → 3 → 5로 오르는 모습을 보인다. "갈등은 무조건 나빠요"라는 말에는 "생각이 다른 건 자연스러워요. 온도가 오를 때 멈추고 이야기하면 폭력이 되지 않아요"라고 말해 준다.',
          student: '단계마다 감정 온도가 어떻게 오르는지 보고, 어느 신호에서 멈추면 좋을지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '모둠 과제 역할 다툼이 "너랑 안 해"까지 왔어요', feeling: '화남', steps: 5, scaleLabels: { 1: '차분', 5: '폭발 직전' } }, sequence: [{ level: 2 }, { level: 3 }, { level: 5 }] },
          art: art('two paper children beside a tall paper thermometer whose red line rises in three steps, a paper project poster between them', '감정 온도가 오를 때', 'sun', 'peach'),
        },
        notes: '다툼 장면은 지어낸 것이다. 학급에서 있었던 다툼을 예로 들지 않는다.',
      }),
      X('intro.mediation-poll', {
        title: '"갈등이 생기면 어떻게 하나요"', method: '"갈등이 생기면 어떻게 하나요" 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 \'참는다\'와 \'대화한다\' 두 부분만 짚어 견주게 한다.', base: '네 부분을 읽고 가장 큰 부분과 바람직한 방법을 견준다.', challenge: '대화가 늘어나려면 무엇이 필요한지 말한다.' },
        intro: {
          teacher: '"이 띠그래프는 어느 6학년이 \'친구와 갈등이 생기면 어떻게 하나요?\'에 답했다고 꾸민 가상 설문이에요. 가장 넓은 부분은 무엇일까요?" 시연 단추로 \'참는다\'를 고르는 모습을 보인다. "참는 게 제일 좋아요"라는 말에는 "참기만 하면 마음속 온도는 어떻게 될까요? 대화를 돕는 방법이 또래 조정이에요"라고 말해 준다. 숫자는 가상이라고 밝힌다.',
          student: '띠그래프에서 가장 넓은 부분과 \'대화한다\'를 견주고, 대화가 늘려면 무엇이 필요할지 짝에게 말해 보아요.',
          demo: CHART('band', '갈등이 생기면 나는(가상 설문)', [['참는다', 35], ['싸운다', 25], ['어른께 말한다', 20], ['대화한다', 20]], '가장 넓은 부분은?', 0, { unit: '%' }),
          art: art('a long paper band chart split into four colored parts, with two small paper chairs facing each other above the "talk" part', '갈등이 생기면 어떻게 할까?', 'flower', 'mint'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('act.mediation-order', {
        title: '또래 조정 다섯 단계 차례', method: '또래 조정 다섯 단계 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '조정 단계 카드 3장(규칙 안내·이야기 듣기·약속)을 놓고, 둘째 문항에서 조정자 말 2칸을 잇는다.', base: '조정 단계 카드 5장을 놓고 조정자 말 3칸을 잇는다.', challenge: '틀린 카드(누가 맞는지 정하기)를 빼고 5장을 놓은 뒤 조정자 말 4칸을 잇고, 편드는 말을 조정자 말로 바꿔 말한다.' },
        activity: {
          title: '또래 조정 차례', tool: 'timeline',
          teacher: '"또래 조정자는 판사가 아니에요. 누가 맞는지 정하지 않고, 두 사람이 스스로 해결안을 찾도록 돕는 사람이에요." 카드를 놓을 때마다 그 단계에서 조정자가 할 말을 말하게 한다. "조정자가 잘못한 쪽을 알려 줘야죠"라는 학생에게 "조정자가 편을 들면 다른 한쪽은 이야기할까요?"라고 되묻는다.',
          task: '또래 조정 다섯 단계를 차례로 놓고, 단계마다 조정자가 할 말을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('또래 조정 다섯 단계를 차례대로 놓아요.', ['규칙 안내하기', '차례로 이야기 듣기', '바람 찾기', '해결안 내기', '함께 약속하기'], { easy: [0, 1, 4], trap: '누가 맞는지 정하기' }, 0.2),
            MAT('조정 단계마다 조정자가 할 말을 이어요.', [['규칙 안내하기', '"한 사람씩, 끊지 않고 말해요"'], ['차례로 이야기 듣기', '"네 말은 ~라는 거지?"'], ['바람 찾기', '"둘 다 원하는 건 뭘까?"'], ['해결안 내기', '"어떤 방법이면 둘 다 괜찮아?"']], ['"네가 잘못했네"'], { easy: 2, base: 3 }, 0.25,
              { conclude: '조정자는 편들지 않고, 요약하고 되물으며 두 사람이 해결안을 찾게 도와요.' }),
            { prompt: '편드는 말 하나("네가 잘못했네")를 조정자 말로 바꿔 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '또래 조정자가 하지 않는 일은?', options: ['규칙 안내하기', '누가 맞는지 정하기', '해결안 함께 찾기'], answer: '누가 맞는지 정하기' }] },
      }),
      X('act.mediator-dilemma', {
        title: '조정자인데 한쪽이 내 친구', method: '갈림길: 조정자인데 한쪽이 내 친구일 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(단짝 편을 들지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("너 내 편 아니야?")을 지나 근거를 고른다.', challenge: '갈림 3번(합의 한 주 뒤 점검 날)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 단짝과 조정', tool: 'dilemma',
          teacher: '"내가 조정자인데 다투는 한쪽이 단짝 진이에요. 어떻게 할까요?" 고를 때마다 상대편 친구가 어떻게 느낄지 읽게 한다. "단짝 편을 들어야 의리예요"라는 학생에게 "조정자가 편을 들면 상대 친구는 다시 이야기하러 올까요?"라고 되묻는다. 둘 다 요약하고 되묻는 것, 다른 조정자와 바꾸는 것 모두 알맞은 길이라고 짚는다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '단짝과 조정',
            steps: [
              { text: '모둠 발표 순서 다툼을 조정하는데, 한쪽이 단짝 진이에요.', motif: 'house',
                good: ['both', '둘 다 요약하고 되묻는다', '두 사람이 끝까지 이야기를 해요.', [['상대 친구', '공정하다고 느껴요', 1]]],
                alt: ['swap', '다른 조정자와 바꾼다', '새 조정자와 두 사람이 이야기를 시작해요.', [['상대 친구', '안심하고 말해요', 1]]],
                bad: ['side', '단짝 편을 든다', '상대 친구가 "말해 봤자야" 하며 일어나요.', '조정자가 편을 들면 다른 쪽은 말하지 않게 돼요.', [['상대 친구', '믿음을 잃어요', -1]]] },
              { text: '진이 "너 내 편 아니야?" 하며 서운해해요.', motif: 'cloud',
                good: ['explain', '"조정자는 둘 다 돕는 사람이야" 하고 차례를 지킨다', '진이 고개를 끄덕이고 다시 이야기해요.', [['진', '조정자의 일을 알아요', 1]]],
                bad: ['give', '"알았어, 네 말이 맞아" 한다', '조정이 깨지고 다툼이 다시 커져요.', '서운해해도 조정자의 차례를 지켜요.', [['두 사람', '다툼이 이어져요', -1]]] },
              { text: '한 주 뒤 점검 날, 한쪽이 약속을 한 번 못 지켰대요.', motif: 'sun',
                good: ['again', '둘을 다시 불러 무엇이 어려웠는지 묻는다', '두 사람이 약속을 조금 고쳐 다시 정해요.', [['두 사람', '약속을 지킬 길을 찾아요', 1]]],
                bad: ['blame', '"약속 깼으니 네 잘못" 한다', '그 친구가 조정을 다시 하지 않겠대요.', '조정자는 탓하지 않고 다시 이야기하게 도와요.', [['그 친구', '마음을 닫아요', -1]]] },
            ],
            ending: '편들지 않고 다시 묻는 조정 덕분에 두 사람이 약속을 지켜 가요.',
            reasons: [{ id: 'fair', text: '조정자는 편들지 않는다' }, { id: 'swap', text: '편들 것 같으면 조정자를 바꿀 수 있다' }, { id: 'again', text: '약속이 어긋나면 탓하지 않고 다시 묻는다' }, { id: 'loyal', text: '단짝 편을 드는 것이 의리다', why: '조정자가 편을 들면 다툼이 풀리지 않아요.' }],
            good: ['fair', 'swap', 'again'],
            talk: '모둠에서 "조정자가 편들고 싶어질 때 할 말"을 하나씩 말해요.',
            conclude: '조정자는 편들지 않아요. 어렵다면 다른 조정자와 바꾸고, 어긋나면 다시 물어요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '조정자가 단짝 편을 들면 생길 일을 써요.' }] },
      }),
      X('act.mock-mediation', {
        title: '모둠 모의 조정 연습', method: '모둠 모의 조정 연습', tool: 'timer', minutes: 26,
        levels: { easy: '단계마다 2분씩 세 단계만 하도록 타이머를 맞추고 관찰 점검 칸 3개를 표시한다.', base: '단계마다 2분씩 다섯 단계 전체를 하도록 맞추고 관찰 점검 칸 3개를 표시한다.', challenge: '다섯 단계를 하고, 조정자가 해결안을 두 개 이상 끌어냈는지까지 점검 칸 4개를 표시한다.' },
        activity: {
          title: '모의 조정 연습', tool: 'timer',
          teacher: '"사례 카드 \'체육 시간 공 차례 다툼\'으로 모의 조정을 해 볼까요? 조정자 1명, 두 당사자, 관찰자 1명을 정해요." 단계마다 2분 타이머를 맞추고 관찰자가 점검표에 표시하게 한다. "해결안은 조정자가 정해 주면 빨라요"라는 학생에게 "두 사람이 스스로 낸 해결안이어야 지키기 쉬워요. 조정자는 \'또 어떤 방법이 있을까?\'라고 물어요"라고 말해 준다.',
          task: '모의 조정 타이머를 맞추고 역할을 나눠 진행한 뒤, 관찰자가 점검표에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '단계마다 2분씩, 쉬는 시간 없이 다섯 단계를 하도록 타이머를 맞춰요(분).', toolOptions: { title: '모의 조정 타이머', timeUnit: 'min', labels: ['조정', '쉬기'], plan: { work: 1, rest: 1, rounds: 2 } }, target: { plan: { work: 2, rest: 0, rounds: 5 } }, difficulty: 0.2,
              levels: { easy: { prompt: '단계마다 2분씩, 쉬는 시간 없이 세 단계를 하도록 맞춰요(분).', target: { plan: { work: 2, rest: 0, rounds: 3 } } } } },
            { prompt: '관찰자가 모의 조정을 보고 점검표에 표시해요.', toolOptions: { title: '관찰자 점검표' }, target: { selfCheck: ['조정자가 규칙을 먼저 알렸다', '두 사람이 끊기지 않고 말했다', '조정자가 편들지 않았다'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '관찰자가 모의 조정을 보고 점검표에 표시해요(네 칸).', target: { selfCheck: ['조정자가 규칙을 먼저 알렸다', '두 사람이 끊기지 않고 말했다', '조정자가 편들지 않았다', '해결안이 두 개 이상 나왔다'] } } },
              conclude: '조정은 규칙 안내부터 약속까지 차례를 지키고, 해결안은 두 사람이 스스로 내요.' },
            { prompt: '모둠에서 역할(조정자·당사자 둘·관찰자)을 나눠 "공 차례 다툼"을 조정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모의 조정에서 내가 맡은 역할과 잘한 점을 써요.', columns: ['역할', '잘한 점'], cells: [['', '']] }, { type: 'check', prompt: '관찰한 것에 표시해요.', options: ['규칙 안내', '끊지 않고 듣기', '편들지 않기', '해결안 두 개 이상'] }] },
        notes: '사례는 지어낸 것이다. 학급의 실제 다툼으로 모의 조정을 하지 않는다. 2분은 우리 반 연습값이다.',
      }),
      X('wrap.agreement-write', {
        title: '합의문 쓰기', method: '합의문 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 합의문을 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '합의문을 두 문장 이상 쓰고 기준 3개(둘 다 받아들임·지킬 수 있음·점검 때)를 점검한다.', challenge: '점검 날짜와 방법(\'점검\'·\'다시 이야기\')까지 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"모의 조정에서 나온 해결안을 합의문으로 써 볼까요?" 문장 틀을 칠판에 적는다. "사이좋게 지낸다"처럼 쓰는 학생에게 "공 차례를 어떻게 하기로 했나요? 무엇을, 언제부터 할지 써 볼까요?"라고 묻는다. 합의문은 한쪽만 좋은 약속이 아니라 둘 다 받아들일 수 있어야 한다는 점을 짚는다.',
          exitTicket: [
            RUBX('모의 조정 결과를 합의문으로 써요', { topic: '‘체육 시간 공 차례 다툼’ 모의 조정 결과를 합의문으로 써요(이름 대신 ‘가’·‘나’로).', starter: '가와 나는 ___ 하기로 했다. ___ 에 다시 점검한다.', crit: ['둘 다 받아들일 수 있다', '지킬 수 있다', '언제 점검할지 썼다'], must: [['점검', '다시 이야기']], chars: [20, 220], title: '합의문', sents: [1, 2, 3], chCrit: '점검 날짜와 방법을 썼다', chPrompt: '합의문에 점검 날짜와 방법까지 넣어 써요.' }),
            { type: 'choice', prompt: '좋은 합의문의 조건은?', options: ['한쪽만 좋은 약속', '둘 다 받아들이고 지킬 수 있는 약속', '조정자가 정해 준 약속'], answer: 1, difficulty: 0.15, explain: '둘 다 받아들이고 지킬 수 있어야 합의가 이어져요.' },
          ],
        },
        worksheet: {
          title: '우리의 합의문',
          items: [
            { type: 'short', prompt: '모의 조정에서 나온 해결안 하나를 써요.' },
            { type: 'short', prompt: '그 해결안을 언제 다시 점검할지 써요.' },
          ],
        },
      }),
      X('wrap.mediator-words', {
        title: '조정자의 말 카드', method: '조정자의 말 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '말 카드 2장을 조정자 말·편드는 말로 나눈다.', base: '말 카드 4장을 나눈다.', challenge: '카드 6장을 나누고, 편드는 말 하나를 조정자 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '"조정자의 말과 편드는 말을 나눠 볼까요?" 카드를 나눈 뒤 조정자 말을 반 전체가 한 번 함께 읽는다. "\'그냥 네가 참아\'는 싸움을 빨리 끝내 주니까 좋은 말이에요"라는 학생에게 "한 사람만 참으면 갈등이 정말 풀렸을까요?"라고 되묻는다.',
          exitTicket: [
            EX('wordcards', SORT('말 카드를 조정자 말과 편드는 말로 나누어요.', { slots: ['조정자 말', '편드는 말'], groups: { '조정자 말': ['"네 말은 ~라는 거지?"', '"둘 다 원하는 건 뭘까?"'], '편드는 말': ['"네가 잘못했네"', '"내 친구 말이 맞아"'] }, easy: 1, extra: { '조정자 말': ['"한 사람씩 말해 볼까?"'], '편드는 말': ['"그냥 네가 참아"'] }, mode: 'sort' }, 0.15)),
            { type: 'short', prompt: '편드는 말 하나를 조정자 말로 바꿔 써요.' },
            { type: 'choice', prompt: '"조정자가 누가 맞는지 정한다"에 알맞은 생각은?', options: ['맞다', '조정자는 편들지 않고 두 사람이 해결안을 찾게 돕는다', '조정자는 벌을 준다'], answer: 1, difficulty: 0.15, explain: '조정자는 판사가 아니라 대화를 돕는 사람이에요.' },
          ],
        },
        worksheet: {
          title: '조정자의 말',
          items: [
            { type: 'table', prompt: '조정자 말이면 ○, 편드는 말이면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['"둘 다 원하는 건 뭘까?"', ''], ['"네가 잘못했네"', ''], ['"한 사람씩 말해 볼까?"', '']], answer: '○, ×, ○' },
            { type: 'short', prompt: '조정자가 되었을 때 꼭 쓰고 싶은 말을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 피해 친구 곁에서 돕고 중학교로 이어 갈 도움 경로 (research-mandatory §2 초: 도움 요청 / 중으로 잇기) ========
  {
    const X = mk('g6-support-next', 6);
    const MID = [PL('상담실', 'office', [1, 0]), PL('보건실', 'hospital', [4, 0]), PL('교무실', 'office', [2, 3]), PL('Wee클래스', 'office', [5, 2]), PL('우리 반 교실', 'school', [0, 2]), PL('운동장', 'park', [3, 1])];
    M.push(
      X('intro.second-harm', {
        title: '도움 말과 상처 주는 말', method: '도움 말과 상처 주는 말 비교', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 반응 2개("네가 그러니까"·"말해 줘서 고마워")의 마음만 함께 고른다.', base: '반응 4개를 읽고 털어놓은 친구의 마음을 고른다.', challenge: '상처 주는 반응이 왜 2차 피해인지 말한다.' },
        intro: {
          teacher: '"지어낸 친구 은이 힘든 일을 친구들에게 털어놓았어요. 친구들의 반응을 들은 은은 어떤 마음일까요?" 시연 단추로 반응마다 마음 카드가 붙는 모습을 보인다. "은에게도 잘못이 있었겠죠"라는 말에는 "괴롭힘의 잘못은 괴롭힌 사람에게 있어요. 털어놓은 친구를 탓하는 말은 상처를 한 번 더 주는 2차 피해예요"라고 말해 준다.',
          student: '친구들의 반응을 들은 은의 마음을 고르고, 은에게 힘이 되는 말이 무엇인지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"네가 그러니까 그렇지"' }, { id: 's2', label: '"말해 줘서 고마워"' }, { id: 's3', label: '"다른 애들한테도 말해야지 ㅋㅋ"' }, { id: 's4', label: '"같이 선생님께 가자"' }], cards: ['속상함', '고마움', '무서움', '편안함'], shuffle: false }, sequence: [{ match: { s1: '속상함', s2: '고마움' } }, { match: { s1: '속상함', s2: '고마움', s3: '무서움', s4: '편안함' } }] },
          art: art('a paper child speaking softly to a small circle of paper friends, some speech bubbles warm and rounded, some sharp and crossed out', '털어놓은 친구에게 어떤 말을?', 'flower', 'peach'),
        },
        notes: '인물은 지어낸 것이다. 학생에게 털어놓은 일이나 들은 일을 묻지 않는다.',
      }),
      X('intro.route-map', {
        title: '중학교 도움 지도 미리 보기', method: '중학교 도움 지도 미리 보기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 장소 2곳(상담실·보건실)을 짚어 핀을 옮겨 보인다.', base: '장소 4곳(상담실·보건실·교무실·Wee클래스)에 핀이 옮겨 가는 모습을 보고 하는 일을 말한다.', challenge: '상황 카드(마음이 힘들 때·다쳤을 때·괴롭힘을 보았을 때)마다 갈 곳을 고른다.' },
        intro: {
          teacher: '"중학교에 가면 도움을 받을 곳은 어디에 있을까요? 가상 중학교 지도로 미리 둘러봐요." 시연 단추로 핀이 상담실 → 보건실 → 교무실 → Wee클래스로 옮겨 가는 모습을 보이고 곳마다 하는 일을 말한다. "중학교에서는 혼자 해결해야 해요"라는 말에는 "중학교에도 상담 선생님과 Wee클래스가 있어요. 도움을 청하는 것은 어느 학교에서나 잘한 일이에요"라고 말해 준다. ' + HELPNO + '는 학교가 알려 주는 자리를 확인하게 한다.',
          student: '가상 중학교 지도에서 도움 받을 곳을 찾고, 곳마다 어떤 도움을 받을 수 있을지 짝에게 말해 보아요.',
          demo: { tool: 'map', options: { grid: [6, 4], title: '가상 ○○중학교 도움 지도', places: MID, legend: false }, sequence: [{ pin: [1, 0] }, { pin: [4, 0] }, { pin: [2, 3] }, { pin: [5, 2] }] },
          art: art('a paper map of a middle school seen from above with small paper pins on the counseling room, nurse office and teachers room', '중학교에도 도움은 있어요', 'house', 'sky'),
        },
        notes: `지도는 가상 중학교다. 진학할 학교의 실제 자리는 그 학교 안내를 따른다. ${HELPNO}는 학교에서 확인한 것을 칠판에 적어 준다.`,
      }),
      X('act.listen-steps', {
        title: '들어 주기 차례', method: '들어 주기 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '들어 주기 카드 3장을 차례대로 놓고, 둘째 문항에서 빠지면 안 되는 단계 1장을 고른다.', base: '들어 주기 카드 4장을 놓고 빠지면 안 되는 단계 2장을 고른다.', challenge: '틀린 카드를 빼고 4장을 놓은 뒤, 셋째 문항에서 "비밀로 해 줘" 했을 때 할 말을 헷갈리는 카드 사이에서 고른다.' },
        activity: {
          title: '들어 주기 차례', tool: 'timeline',
          teacher: '"친구가 힘든 일을 털어놓으면 무엇부터 할까요?" 카드를 놓을 때마다 그 단계에서 할 말을 말하게 한다. "바로 해결책을 말해 줘야 해요"라는 학생에게 "끝까지 듣기 전에 해결책을 말하면 친구는 다 말하지 못할 수 있어요"라고 말해 준다. "비밀로 해 줘"라고 해도 친구의 안전이 걸린 일은 믿는 어른과 함께 해결한다는 점을 짚는다.',
          task: '들어 주기 카드를 차례로 놓고, 빠지면 안 되는 단계와 비밀을 부탁받았을 때 할 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('친구가 털어놓을 때 들어 주기 차례대로 놓아요.', ['끝까지 듣기', '마음 말해 주기', '탓하지 않기', '함께 어른께 가자 하기'], { easy: [0, 1, 3], trap: '"네 잘못도 있어" 하기' }, 0.2),
            PICK('들어 주기에서 빠지면 안 되는 단계만 골라요.', '빠지면 안 되는 단계', ['함께 어른께 가자 하기', '탓하지 않기'], ['소문내지 말라고 겁주기', '바로 해결책만 말하기'], { easy: 1, easyTraps: 1 }, 0.2),
            PICK('"아무한테도 말하지 마" 했을 때 할 말을 골라요.', '그때 할 말', ['"너를 지키려고 어른께 같이 가자"', '"네 잘못 아니야"'], ['"알았어, 절대 안 말할게"', '"다른 애들한테만 살짝 말할게"'], { easy: 1, easyTraps: 1, extraTraps: ['"그건 네가 알아서 해"'] }, 0.25,
              { conclude: '끝까지 듣고, 마음을 알아주고, 탓하지 않고, 안전이 걸린 일은 함께 어른께 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '끝까지 듣기 → 마음 말해 주기 → ___ 않기 → 함께 어른께 가기', answer: '탓하지' }] },
      }),
      X('act.secret-dilemma', {
        title: '"아무한테도 말하지 마"', method: '갈림길: "아무한테도 말하지 마"', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(비밀을 지킬지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("더 커질까 봐 무서워")을 지나 근거를 고른다.', challenge: '갈림 3번(상담 선생님을 만난 다음 날)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 비밀 부탁', tool: 'dilemma',
          teacher: '"지어낸 친구 은이 괴롭힘을 털어놓으며 아무한테도 말하지 말라고 해요. 비밀을 지켜 주는 게 진짜 친구일까요?" 고를 때마다 은의 안전에 미친 영향을 읽게 한다. "약속은 꼭 지켜야 해요"라는 학생에게 "약속을 소중히 여기는 마음은 좋아요. 그런데 친구가 계속 다치는 비밀이라면, 안전이 먼저예요. 혼자 알리지 않고 \'같이 가자\'고 할 수 있어요"라고 말해 준다.',
          task: '갈림길마다 고르고, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '비밀 부탁',
            steps: [
              { text: '은이 괴롭힘을 털어놓으며 "아무한테도 말하지 마"라고 해요.', motif: 'moon',
                good: ['together', '"너를 지키려고 같이 선생님께 가자" 한다', '은이 망설이다 고개를 끄덕여요.', [['은', '도움을 받을 길이 열려요', 1]]],
                bad: ['spread', '다른 친구들에게 퍼뜨린다', '은의 이야기가 소문이 돼요.', '퍼뜨리는 것은 2차 피해예요.', [['은', '더 상처받아요', -1]]],
                mid: ['keep', '약속하고 아무에게도 말하지 않는다', '은은 계속 혼자 괴롭힘을 견뎌요.', '비밀을 지키려는 마음은 알지만, 안전이 비밀보다 먼저예요.', [['은', '도움을 못 받아요', -1]]] },
              { text: '은이 "선생님이 알면 더 커질까 봐 무서워"라고 해요.', motif: 'cloud',
                good: ['stay', '"내가 곁에 있을게" 하고 함께 간다', '은과 함께 상담 선생님을 만나요.', [['은', '혼자가 아니에요', 1]]],
                bad: ['leave', '"그럼 네가 알아서 해" 한다', '은은 다시 혼자 남아요.', '무서워하는 친구 곁에 있어 주면 함께 갈 수 있어요.', [['은', '더 외로워요', -1]]] },
              { text: '상담 선생님을 만난 다음 날, 반에서 은의 이야기를 묻는 친구가 있어요.', motif: 'sun',
                good: ['guard', '"그 이야기는 은을 위해 하지 말자" 하고 막는다', '친구가 고개를 끄덕이고 더 묻지 않아요.', [['은', '소문에서 지켜져요', 1]]],
                bad: ['tell', '들은 대로 다 말해 준다', '은의 이야기가 반에 퍼져요.', '소문은 2차 피해가 돼요.', [['은', '다시 상처받아요', -1]]] },
            ],
            ending: '"같이 가자"는 말과 지켜 준 비밀 덕분에 은이 도움을 받고 있어요.',
            reasons: [{ id: 'safety', text: '친구의 안전이 비밀보다 먼저다' }, { id: 'together', text: '혼자 알리지 않고 함께 간다' }, { id: 'rumor', text: '소문은 2차 피해다' }, { id: 'promise', text: '어떤 비밀이든 꼭 지켜야 진짜 친구다', why: '친구가 계속 다치는 비밀은 믿는 어른과 함께 해결해요.' }],
            good: ['safety', 'together', 'rumor'],
            talk: '모둠에서 "비밀을 부탁받았을 때 친구에게 할 말"을 하나씩 말해요.',
            conclude: '안전이 걸린 비밀은 "같이 가자"며 어른께 함께 알리고, 소문은 막아요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '"아무한테도 말하지 마"라는 친구에게 할 말을 써요.' }] },
      }),
      X('act.support-plan', {
        title: '친구 지지 실천 계획 쓰기', method: '친구 지지 실천 계획 쓰기', tool: 'rubric-writing', minutes: 26,
        levels: { easy: '문장 틀을 보고 할 일 한 가지를 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '할 일 두 가지를 두 문장 이상 쓰고 기준 3개(2차 피해 없음·안전·할 수 있음)를 점검한다.', challenge: '함께할 친구와 어른(\'선생님\'·\'어른\'·\'보호자\')까지 넣어 세 문장 이상 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '친구 지지 계획', tool: 'rubric-writing',
          teacher: '"가상 친구 은을 위해 이번 주에 할 일을 계획해 볼까요? 같이 급식 먹기, 소문 멈추기, 어른과 잇기 가운데 골라도 돼요." 칠판에 예를 적는다. "괴롭힌 애를 혼내 주겠다"처럼 쓰는 학생에게 "그러면 나와 은이 더 위험해질 수 있어요. 은 곁에서 할 수 있는 안전한 일을 써 볼까요?"라고 묻는다. 계획에 은을 탓하는 말이 없는지 다시 읽게 한다.',
          task: '가상 친구를 위해 이번 주 할 일을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('가상 친구 은을 위해 이번 주에 할 일을 써요', { topic: '가상 친구 은을 위해 이번 주에 할 일을 써요(같이 급식 먹기·소문 멈추기·어른과 잇기 등, 실제 친구 이름은 쓰지 않아요).', starter: '이번 주에 나는 은과 ___ 하겠다. 그리고 ___ 하겠다.', crit: ['2차 피해(소문·탓하기)가 없다', '나와 친구 모두 안전하다', '이번 주에 할 수 있다'], must: [['선생님', '어른', '보호자']], chars: [20, 220], title: '친구 지지 계획', sents: [1, 2, 3], chCrit: '함께할 친구와 어른을 넣었다', chPrompt: '친구 지지 계획에 함께할 친구와 어른까지 넣어 써요.' }, 0.25),
            RUB('은에게 건넬 첫마디를 써요', { topic: '가상 친구 은에게 건넬 첫마디를 한두 문장으로 써요.', starter: '은아, ___. 네 잘못 아니야.', crit: ['은의 마음을 알아주었다', '은을 탓하지 않았다', '함께하겠다는 뜻이 있다'], must: [['같이', '곁에', '함께']], chars: [10, 140], title: '은에게 건넬 첫마디' }, 0.2,
              { conclude: '피해 친구 곁에서는 탓하지 않고, 소문을 멈추고, 어른과 이어 주는 것이 지지예요.' }),
            { prompt: '짝과 계획을 바꿔 읽고 2차 피해가 될 말이 없는지 서로 확인해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 친구를 위해 이번 주 할 일을 써요.', columns: ['할 일', '함께할 사람'], cells: [['', ''], ['', '']] }, { type: 'check', prompt: '내 계획을 점검해요.', options: ['소문·탓하기가 없다', '안전하다', '이번 주에 할 수 있다'] }] },
      }),
      X('wrap.peace-pledge', {
        title: '중학교까지 가져갈 평화 약속', method: '중학교까지 가져갈 평화 약속 판', tool: 'collage', minutes: 6,
        levels: { easy: '조각 3개 이상으로 꾸미고 약속 1개를 정해 점검 칸 2개를 표시한다.', base: '조각 5개 이상으로 다리·별·손을 만들고 약속 3개를 정해 점검 칸 3개를 표시한다.', challenge: '약속마다 지킬 장면을 활동지에 붙여 쓰고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"초등학교에서 중학교로 가는 다리를 만들고, 그 다리 위에 가져갈 평화 약속을 올려 볼까요?" 긴 네모(다리)·별·하트(손) 조각으로 만드는 방법을 칠판에 보인다. "중학교는 달라서 약속이 소용없어요"라는 말에는 "학교는 바뀌어도 \'구경만 하지 않기\', \'도움 청하기\'는 그대로 쓸 수 있어요"라고 말해 준다. 약속은 활동지에 쓴다.',
          exitTicket: [
            COLX('중학교까지 가져갈 평화 약속 판을 조각으로 꾸미고 점검해요.', ['다리 모양으로 이어짐을 나타냈다', '별로 약속을 나타냈다', '하트로 함께하는 손을 나타냈다', '약속마다 지킬 장면을 활동지에 썼다']),
            { type: 'short', prompt: '중학교에서도 지킬 평화 약속 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '중학교까지 가져갈 약속',
          items: [
            { type: 'table', prompt: '평화 약속과 지킬 장면을 써요.', columns: ['약속', '지킬 장면'], cells: [['', ''], ['', ''], ['', '']] },
            { type: 'draw', prompt: '초등에서 중학교로 이어지는 평화 약속 판을 그려요.' },
          ],
        },
        notes: '콜라주는 글자를 붙이지 못한다. 다리·별·손은 긴 네모·별·하트 조각으로 만들고, 약속은 활동지에 쓴다.',
      }),
      X('wrap.route-check', {
        title: '도움 경로 스스로 점검', method: '도움 경로 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개(믿을 어른·학교 안 도움 장소)를 표시한다.', base: '점검 칸 3개(신고·상담 번호 자리 더함)를 표시한다.', challenge: '점검 칸 4개를 표시하고, 모르는 항목을 확인할 방법까지 정한다.' },
        wrap: {
          teacher: '"중학교에 가서도 쓸 도움 경로를 내가 알고 있는지 스스로 점검해 볼까요?" 점검 칸을 함께 읽는다. 믿을 어른은 이름을 쓰지 않고 마음속으로 떠올리게 한다. "번호를 몰라요"라는 학생에게 "모르는 걸 알아낸 게 오늘 한 일이에요. 어떻게 알아볼지 정하면 돼요"라고 말해 준다. ' + HELPNO + '는 칠판에 적어 둔 것을 활동지에 옮겨 쓰게 한다.',
          exitTicket: [
            SELF('도움 경로 점검', ['믿을 어른 세 명을 떠올렸다', '학교 안 도움 장소를 안다', `${HELPNO} 자리를 안다`, '모르는 것을 알아볼 방법을 정했다'], '도움 경로를 알고 있는지 스스로 표시해요.', { easy: 2, base: 3 }),
            { type: 'choice', prompt: '중학교에서 괴롭힘을 보았을 때 알맞은 것은?', options: ['혼자 해결한다', '상담실·Wee클래스·믿는 어른께 알린다', '모른 척한다'], answer: 1, difficulty: 0.15, explain: '중학교에도 상담실·Wee클래스와 믿는 어른이 있어요.' },
            { type: 'short', prompt: '모르는 도움 경로를 알아볼 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '나의 도움 경로',
          items: [
            { type: 'table', prompt: '나의 도움 경로를 써요(번호는 선생님이 알려 줘요).', columns: ['도움 경로', '쓸 내용'], cells: [['학교 안 도움 장소', ''], [HELPNO, ''], ['믿는 어른(이름 대신 \'담임 선생님\'처럼)', '']] },
            { type: 'short', prompt: '중학교에 가서 가장 먼저 찾아볼 도움 장소를 써요.' },
          ],
        },
        notes: `믿을 어른은 이름을 적지 않고 떠올리게만 한다. ${HELPNO}는 학교에서 확인한 것을 칠판에 적어 준다.`,
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
