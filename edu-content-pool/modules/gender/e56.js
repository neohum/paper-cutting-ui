/* 창체 양성평등교육(성교육 포함) — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 gender 초5-6.
 * 근거: 교육기본법 제17조의2, 양성평등기본법 제30·36조, 성폭력방지법 제5조, 가정폭력방지법 제4조의3, 학교보건법 제9조 — 교육부 지침 연 15시간
 *   (성폭력·가정폭력 예방교육 각 매년 1회 1시간 이상, 딥페이크 등 디지털성폭력 별도 편성), 교육부 「학교 성교육 표준안」 초 범위
 *   (research-mandatory §1·§2: 몸의 변화와 사춘기, 성별 고정관념 깨기, 몸의 경계·'싫어요' 말하기, 성폭력 신고 방법).
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'). 인물은 지어낸 가명(민서·도윤·지후·솔·서연·하준·은우·결·유나·민재·하은·지아·도현·하람).
 * 주제 17개(5학년 8 · 6학년 9) × 도입 2 · 활동 3 · 정리 2 = 계획 모듈 119개 전부. 추천 조합은 체계도 sequences(학년마다 15차시).
 *
 * 이 영역은 발행 전에 사람이 직접 보는 민감 영역이다. 지킨 원칙(모든 모듈):
 *   - 사춘기 몸 변화(2차 성징·월경·몽정·생식 기관)는 체계도 concepts 와 표준안 수준의 사실·위생·존중만 쓴다. 성적 행위는 묘사하지 않는다
 *     (수정·임신·출산은 '차례'만 다룬다). 생식 기관은 바른 이름과 하는 일만, 그림은 보건 교과서의 단순한 도식만 쓰라고 교사 메모에 적었다.
 *   - 피해 경험·학생 자신의 몸 상태(월경·몽정 여부, 통증, 키)·가정 사정을 묻지 않는다. 판단·채점은 모두 가상 인물로 한다.
 *   - 동의는 '분명한 좋아'. 조르기·겁주기·대가·망설임·침묵은 동의가 아니고, 동의는 언제든 바꿀 수 있다.
 *   - 잘못은 늘 한 사람(피해를 준 쪽)에게 있고, 말한 사람·알린 사람은 잘한 것 — 갈림길 결과·근거 카드·교사 발문에서 같은 틀을 지킨다.
 *   - 성별 고정관념을 정답으로 만들지 않는다: 직업·역할·집안일 문항은 '누구나'가 정답, 가상 가족은 '보호자 1·2'로 성별을 드러내지 않았다.
 *   - 놀림·평가 낱말은 카드에 쓰지 않고 '몸매를 두고 평가하는 말'처럼 묶어 말한다(계획의 "나 너무 못생겼어"는 "나는 내 얼굴이 싫어"로 바꿈).
 *   - 도움 받을 곳은 체계도 concepts 의 것만: 담임·보건·상담 선생님, 보건실·상담실, 보호자·믿는 (이웃) 어른, 지역 상담 기관, 어른과 함께 신고.
 *     체계도 concepts 에 전화번호가 없어 이 파일에는 번호를 하나도 넣지 않았다 — 포스터·캠페인의 도움 칸과 지도의 기관 번호는
 *     '학교가 확인해 알려 주는 신고·상담 번호'를 교사가 적어 넣는다(notes 에 적음).
 *
 * 계획과 다르게 한 곳(교구 한계 — levels 글은 실제 설정대로 적었다):
 *  - body(body-spots·body-link·organ-names): 몸 그림에 생식 기관·겨드랑이·머리 칸이 없다. body-spots 는 목·피부·어깨·가슴·허리·허벅지 칸으로,
 *    body-link·organ-names 는 몸 그림 + 보기 고르기(ask)로 바른 이름·하는 일을 고르고, 위치는 보건 교과서 도식으로 짚게 했다. 교구가 설명 글을 띄우지 않아 설명은 교사 말로.
 *  - height-graph: chart 는 꺾은선 하나만 그려 민서 그래프만 보이고, 도윤의 해(13살)는 교사가 말로 견주게 했다.
 *  - growth-chart: '보건 교과서 자료' 대신 모양만 보이는 가상 값(눈금)을 넣었다 — 실제 값으로 바꿀 것(아래 사람 확인).
 *  - 갈림길(dilemma)은 깊이 3까지라 '쉬움 2번·기본 3번·도전 +α'는 쉬움 2번·기본 3번·도전 3번+근거 모두로 하고, 도전의 덧붙이기는 셋째 talk 문항으로 옮겼다.
 *  - sortboard 도입의 "결과를 함께 확인"(job-cards)은 모든 카드가 '누구나 할 수 있다'에 들어가는 시연으로 했다(빈 바구니가 답).
 *  - intro.gesture-read: 마음 카드 3장에 몸짓 6개를 짝 지을 수 없어(카드 한 장 = 칸 하나) emotion sort(마음 칸에 몸짓 카드 나누기)로 했다.
 *  - kitchen 점검표(consent-check·source-check)는 '골라 표시'라 사례마다 '그 사례가 지킨 항목'에 표시하는 문항으로 했다.
 *  - chore-share: 공평한 나누기는 답이 여럿이라 kitchen match 에서 칸마다 어느 집안일이든 하나씩이면 맞게 하고, 함정 카드('혼자 다 하기')를 섞었다.
 *  - day-plan: kitchen '일과 모드'는 카드 한 장 = 칸 하나라, 시간 칸이 겹치지 않는 카드로만 나누기를 했다.
 *  - block-coding(safe-route·close-route): 판 칸에 이름을 달 수 없어 별 칸 = 안전 행동, 도착 = 알리기/차단, 바위 = 답장·몰래 지우기·눌러 보기로 정하고 칠판·활동지에 적게 했다.
 *  - keyboard 구호(respect-chant·no-rhythm·chant·check-chant·stop-chant): 쉬움 = 들려준 한 마디 따라 놓기, 기본 = 세 마디 박 맞추기, 도전 = 네 마디.
 *    no-rhythm 의 '괜찮아'는 '좋다'로도 들려 거절말에서 빼고 '안 할래요'로 바꿨다.
 *  - breathe: 타이머 최소 5초라 계획의 4초를 5초(우리 반 연습값)로 바꿨다. stretch 의 20초·10초도 우리 반 연습값.
 *  - collage: 그림(물방울·칫솔·달·파우치)을 그리지 못해 모양(동그라미·반원·별·긴 네모)에 뜻을 약속하고 교사 발문에 적었다. 글 문구는 활동지에 쓴다.
 *  - 정리(출구) 질문의 단계 차이는 교구 질문 levels 로 줄 수 있는 것만 바꾸고, 나머지(셋째·넷째 질문)는 교사 진행으로 적었다.
 *  - 차시 제목 40자 때문에 media-roles·photo-request 첫 활동의 activity.title 을 줄였다.
 *  - 44px: body 보기 단추 '위'(한 글자)가 38.5px 이라 보기를 '작은창자'로 바꿨다. 다른 교구에서는 44px 문제가 나오지 않았다.
 *
 * 사람 확인: 근거 파일(research-mandatory)에는 법정 시수와 표준안 학교급 범위 제목만 있다. 아래 문장은 일반 성교육 내용으로 썼으니 확인처에서 문구를 본다.
 *  - puberty-signs.*: 2차 성징 정의, 달라지는 자리(목소리·피부 피지와 여드름·땀·털·가슴·어깨·허리), 사춘기 시작 시기는 사람마다 다름,
 *    여드름은 피지 증가로도 생김, 위생 습관(세수·샤워·속옷 날마다 갈아입기·베개 커버·일찍 자기·물 마시기), 손 씻기 3단계 — 교육부 학교 성교육 표준안(초 5~6), 보건 교과서, 질병관리청 손 씻기 안내.
 *  - menstruation.*: 월경 순환 차례(자궁 안쪽 막이 두꺼워짐 → 난소에서 난자 → 막이 떨어져 나옴 → 다시 두꺼워짐, 한 달쯤·사람마다 다름),
 *    처음엔 주기가 들쭉날쭉할 수 있음, 월경 중 가벼운 운동 가능, 파우치(생리대·여벌 속옷·봉투·물티슈), 진통제는 어른·보건 선생님과 상의,
 *    학교에서 도움 청하는 차례(화장실 확인 → 담임·보건 선생님 → 생리대 → 손 씻기), 월경용품 비치 장소(학교마다 다름) — 표준안·보건 교과서·학교 보건실.
 *  - wetdream-respect.*: 몽정 정의(잠자는 동안 정액이 나옴, 정자가 만들어진다는 신호, 병·나쁜 생각 탓 아님), 대처(갈아입기·빨래 바구니·보호자·보건 선생님께 묻기),
 *    생식 기관 바른 이름과 하는 일(고환 = 정자를 만듦, 음경 = 오줌과 정액이 나오는 길, 난소 = 난자를 만듦, 자궁 = 아기가 자라는 곳) — 표준안·보건 교과서.
 *  - media-roles.*·equality-ads.*: 성 역할 고정관념·성차별 낱말 뜻, "소방관 시험은 성별이 아니라 체력과 능력을 본다", "육아 휴직은 아빠도 엄마도 쓸 수 있다" — 여성가족부·한국양성평등교육진흥원 양성평등교육 자료, 고용노동부 육아휴직 안내.
 *  - consent.*·consent-change.*: 동의 = 분명한 '좋아'·자유로움·대가 없음·언제든 바꿀 수 있음, 조르기·겁주기·대가·망설임·침묵은 동의가 아님, 몸짓 거절 신호,
 *    묻기 → 대답 듣기 → 싫다면 멈추기 — 교육부 성교육 표준안, 한국양성평등교육진흥원 동의 교육 자료.
 *  - harassment.*: 성희롱 판단 기준('듣는 사람이 불편하고 몸·성을 두고 한 말'), 멈추기 → 기록(언제·어디서·무슨 말) → 알리기, 주변인 행동(곁에 서기·화제 돌리기·알리기) — 교육부 학교 성희롱·성폭력 예방 안내, 한국여성인권진흥원.
 *  - photo-request.*·digital-crime.*: 몸 사진 요구 거절 → 퍼뜨리지 않기 → 차단 → 믿는 어른께 알리기, 딥페이크 정의, 받은 사진 전달·공유도 가해가 될 수 있음,
 *    지우기 전 어른과 상의해 함께 신고, 프로필 공개 범위·위치 공유 끄기 — 교육부 디지털 성범죄 예방 안내, 여성가족부·한국여성인권진흥원 디지털성범죄피해자지원센터, 방송통신위원회.
 *  - info-check.*: 정보 점검 네 질문(누가 썼나·근거·교과서와 같은가·사라고 조르나), 선정적 광고 창은 닫고 알리고 차단 설정, '확인 필요' 예시(키 크는 약·음식) — 질병관리청·식품의약품안전처 건강 정보 안내, 방송통신위원회 유해 정보 안내.
 *  - family-violence.*·family-help.*: 가정폭력의 여러 모습(몸·겁주는 말·돌보지 않음·물건 부수기), 보고 듣는 것도 아이에게 해로움, 아이 탓이 아님,
 *    알리면 상담·보호로 가족이 안전해지도록 도움, 어린이도 알릴 수 있음, 지금 위험하면 경찰(파출소), 어린이가 직접 나서지 않음 —
 *    여성가족부 가정폭력 예방교육 자료, 경찰청, 지역 가정폭력상담소. 지역 상담 기관 이름·번호는 학교가 확인해 교사가 넣는다.
 *  - after-help.*: 도움받는 차례(안전한 곳 → 믿는 어른 → 어른이 상담·신고로 이음 → 계속 지지), 2차 피해(소문·탓하는 말) 뜻, 지지하는 말 — 교육부 성폭력 예방교육 자료, 여성가족부·해바라기센터 안내.
 *  - growth-life.*: 성장 단계 이름(영아·유아·어린이·사춘기·청년·어른·노년), 수정 → 자궁에 자리 잡음 → 태아 자람 → 출생 → 돌봄 차례,
 *    태아 몸무게 그래프(가상 값 — 실제 값은 보건 교과서로 바꿀 것, '마지막 몇 달에 많이 자람'의 문구 포함), 아기 준비물 가격(가상) — 보건 교과서·표준안.
 *  - self-care.*: 월경통 돌봄(배 따뜻하게·가벼운 스트레칭·쉬기·보건실), 스트레칭 동작(무릎 당기기·고양이 자세)과 20초·10초, 생리대는 몇 시간마다 갈기(교사가 교과서로 읽음),
 *    약은 어른과 상의 — 보건 교과서·학교 보건 선생님 안내.
 *  - stress-image.*: 스트레스 건강한 대처·피할 대처, 숨 고르기 5초, 보정 사진은 빛·각도·보정으로 바뀜 — 보건 교과서, 교육부 학생 마음건강 자료, 한국양성평등교육진흥원 미디어 리터러시 자료.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('cyberbullying', 5)('intro.group-chat', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `gender.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'gender', band: '초5-6', topic: `gender.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');

  // ---- 카드 판 문항 ----
  // 나누기: groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const inter = (g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = { slots, cards: inter(groups) }; if (topic) base.topic = topic; if (mode) base.mode = mode;
    const ez = take(easy); const fullCards = inter(full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 칸 수가 단계마다 다른 나누기: 쉬움 = easySlots 칸만(그 칸 카드만), 기본 = slots 전부, 도전 = 함정 카드 더함
  const SORTN = (prompt, { topic, slots, groups, easySlots, traps = [], mode }, d, more) => {
    const inter = (sl) => { const out = []; const n = Math.max(...sl.map((s) => groups[s].length)); for (let i = 0; i < n; i++) for (const s of sl) if (groups[s][i]) out.push(groups[s][i]); return out; };
    const pick = (sl) => Object.fromEntries(sl.map((s) => [s, groups[s]]));
    const base = { slots, cards: inter(slots) }; if (topic) base.topic = topic; if (mode) base.mode = mode;
    const n = (sl) => sl.reduce((a, s) => a + groups[s].length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(${easySlots.length}칸, 카드 ${n(easySlots)}장).`, toolOptions: { slots: easySlots, cards: inter(easySlots) }, target: { sort: pick(easySlots) } } };
    if (traps.length) { const c = inter(slots); c.splice(2, 0, ...traps); lv.challenge = { prompt: `${cut(prompt)}(넣지 않을 카드도 있어요).`, toolOptions: { cards: c }, target: { sort: pick(slots) } }; }
    return Object.assign({ prompt, toolOptions: base, target: { sort: pick(slots) }, difficulty: d, levels: lv }, more);
  };
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 장면(카드 칸에 남겨야 함)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode, title } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => cards[i]); const ezIds = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ezIds } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    const o = Object.assign(mode ? { mode } : {}, title ? { title } : {}, { slots: steps.length, cards: mix(cards) });
    return Object.assign({ prompt, toolOptions: o, target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 짝 잇기: pairs = [[왼쪽 말, 카드]…]. 쉬움 = 앞 easy쌍, 도전 = 함정 카드 더함
  const MATCH = (prompt, pairs, { easy = 2, traps = [], mode = 'match', title, topic } = {}, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `m${i + 1}`, label }));
    const cardsOf = (n) => { const c = pairs.slice(0, n).map(([, c]) => c); return [...c.slice(1), c[0]]; };
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, c], i) => [`m${i + 1}`, c])) });
    const o = Object.assign(mode ? { mode } : {}, title ? { title } : {}, topic ? { topic } : {}, { slots: sl, cards: cardsOf(pairs.length) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}쌍).`, toolOptions: { slots: sl.slice(0, easy), cards: cardsOf(easy) }, target: tg(easy) } };
    if (traps.length) lv.challenge = { prompt: `${cut(prompt)}(맞지 않는 카드도 있어요).`, toolOptions: { cards: [...cardsOf(pairs.length), ...traps] }, target: tg(pairs.length) };
    return Object.assign({ prompt, toolOptions: o, target: tg(pairs.length), difficulty: d, levels: lv }, more);
  };
  // 고르기(pick): good = 고를 카드, traps = 고르지 않을 카드. 쉬움 = good 앞 easy장 + 함정 한 장, 도전 = 함정 더
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], mode = 'pick', title, topic } = {}, d, more) => {
    const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };
    const o = Object.assign({ mode, basket }, title ? { title } : {}, topic ? { topic } : {}, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
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
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 3개, 도전 = 기준 3개 + 고쳐 쓰기(꼭 넣을 낱말)
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title }, d, more) => ({
    prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: { selfCheck: crit.slice(0, 3), chars }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] } },
      challenge: { prompt: `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: { selfCheck: [...crit.slice(0, 3), '한 군데 이상 고쳐 썼다'], chars: [chars[0] + 10, chars[1]], mustInclude: must } },
    },
    ...more,
  });
  // 정리용 출구 질문 꼴로 바꾸기(활동 문항 모양 → { type: 'tool', tool, options, … })
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty || 0.15 }, it.levels ? { levels: it.levels } : {});
  const RUBX = (prompt, spec) => EX('rubric-writing', RUB(prompt, spec, 0.2));
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 4 } = {}, d, more) => {
    const it = (list) => list.map((t) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
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
  // 정리: 장면에 마음 카드 짝 짓기(emotion match) — 장면 1·2·3개
  const FEEL = (prompt, scenes, cards) => {
    const sl = scenes.map(([label], i) => ({ id: `s${i + 1}`, label }));
    const tg = (n) => ({ match: Object.fromEntries(scenes.slice(0, n).map(([, ok], i) => [`s${i + 1}`, ok])) });
    return {
      type: 'tool', tool: 'emotion', options: { cards, slots: sl.slice(0, 2) }, prompt, target: tg(2), difficulty: 0.15,
      levels: { easy: { prompt: `${cut(prompt)}(장면 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(장면 셋).`, toolOptions: { slots: sl }, target: tg(3) } },
    };
  };
  // 막대·원그래프 읽기 문항(chart read). data = [[이름, 값]…]
  const READ = (prompt, { type = 'bar', title, unit = '명', data, choices, question, why, xLabel, yLabel, from }, pick, d, more) => ({
    prompt, toolOptions: Object.assign({ type, mode: 'read', title, unit, data, choices: choices || data.map((x) => x[0]), question }, why ? { why } : {}, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}, from != null ? { from } : {}),
    target: { pick }, difficulty: d, ...more,
  });


  // ---- 이 파일에서 더 쓰는 도움 함수 ----
  // 갈림길 두·세 번: 쉬움 갈림 2번, 기본 3번, 도전 3번 + 근거를 모두(계획 '쉬움 2번·기본 3번' 꼴)
  const DIL3 = ({ steps, ending, reasons, good, title, talk, conclude }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길 세 번에서 알맞은 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good, some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 두 번에서 알맞은 선택을 고르고 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good, some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나고, 알맞은 근거를 모두 골라요.`, target: { path: [goodPath(steps, 3)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 끝 장면 두 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(2) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(3) },
    ];
  };
  // 나누기 시연(sortboard·mindmap 도입): groups = { 칸: [카드…] } → 카드를 섞어 보이고 sequence 로 다 넣는다
  const SDEMO = (tool, slots, groups, extra = {}) => {
    const cards = []; const n = Math.max(...slots.map((s) => groups[s].length));
    for (let i = 0; i < n; i++) for (const s of slots) if (groups[s][i]) cards.push(groups[s][i]);
    const half = Object.fromEntries(slots.map((s) => [s, groups[s].slice(0, 1)]));
    return { tool, options: Object.assign({ slots, cards }, extra), sequence: [{ sort: half }, { sort: groups }] };
  };
  // 마음 크기(emotion scale) 정리 질문 — 쉬움 3칸·기본 5칸
  const SCALE = (prompt, situation, feeling, level, more) => ({
    type: 'tool', tool: 'emotion', options: Object.assign({ mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, more || {}), prompt, target: { level }, difficulty: 0.1,
    levels: { easy: { prompt: `${cut(prompt)}(세 칸 눈금).`, toolOptions: { steps: 3, scaleLabels: { 1: '조금', 3: '많이' } }, target: { level: 'any' } } },
  });
  // 갈래(emotion branch) 문항: choices = [{ id, text, result, mood, why? }…], good = 알맞은 보기 id(목록 가능), easyIds = 쉬움에 남길 보기
  const BRANCH = (prompt, { situation, ask, who, motif, choices, good, easyIds }, d, more) => Object.assign({
    prompt, toolOptions: Object.assign({ mode: 'branch', situation, ask: ask || '어떻게 할까요?', choices }, who ? { who } : {}, motif ? { motif } : {}), target: { choice: good }, difficulty: d,
    levels: easyIds ? { easy: { prompt: `${cut(prompt)}(보기 ${easyIds.length}개).`, toolOptions: { choices: choices.filter((c) => easyIds.includes(c.id)) }, target: { choice: [].concat(good).filter((g) => easyIds.includes(g)) } } } : undefined,
  }, more);
  // 리듬(keyboard rhythm): 들려준 리듬 따라 놓기(follow) / 마디마다 박 맞추기(compose)
  const RHY = (prompt, pattern, d, more) => Object.assign({ prompt, toolOptions: { mode: 'rhythm', meter: 4, measures: Math.ceil(pattern.reduce((a, b) => a + ({ q: 1, e: 0.5, h: 2, qr: 1 }[b] || 1), 0) / 4), pattern, blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: pattern }, difficulty: d }, more);
  const BEATS = (prompt, measures, d, more) => Object.assign({ prompt, toolOptions: { mode: 'rhythm', meter: 4, measures, blocks: ['q', 'e', 'h', 'qr'] }, target: { beats: true }, difficulty: d }, more);
  // 지도 장소
  const P = (name, icon, at) => ({ name, icon, at });

  // ======== 5학년 · 사춘기 몸 신호와 위생 습관 (표준안 초 '몸의 변화와 사춘기') ========
  {
    const X = mk('puberty-signs', 5);
    const GROW = [['9살', 5], ['10살', 5], ['11살', 8], ['12살', 6], ['13살', 4], ['14살', 2]];
    M.push(
      X('intro.body-spots', {
        title: '종이 몸에서 달라지는 자리 찾기', method: '종이 몸에서 달라지는 자리 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 세 곳(목·피부·가슴)이 골라지는 시연을 보이며 변화를 소리 내어 말해 준다.', base: '여섯 곳(어깨·허리·허벅지 더함)이 골라지는 시연을 보고, 누구에게나 오는 변화와 사람마다 다르게 오는 변화를 말로 나눈다.', challenge: '고른 자리마다 왜 변하는지(몸이 어른이 될 준비) 한 줄로 말한다.' },
        intro: {
          teacher: '"5학년 무렵부터 몸은 어른이 될 준비를 시작해요. 이걸 2차 성징이라고 해요. 어디가 달라질까요?" 시연 단추로 목(목소리)·피부(여드름·땀)·가슴이 먼저, 이어 어깨·허리·허벅지가 골라지는 모습을 보인다. 자리마다 "목소리가 굵어지거나 갈라질 수 있어요", "땀과 피지가 늘어요"처럼 짧게 말해 준다(교구는 설명 글을 띄우지 않는다). "몸이 변하는 건 부끄러운 일이에요"라는 말에는 "누구나 겪는 자연스러운 자람이에요. 언제 오는지는 사람마다 달라요"라고 말해 준다.',
          student: '종이 몸에서 사춘기에 달라지는 자리 한 곳을 골라, 어떻게 달라지는지 짝에게 한 문장으로 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '피부', '어깨', '가슴', '허리', '허벅지', '무릎', '발목'], names: true }, sequence: [{ parts: ['목', '피부', '가슴'] }, { parts: ['목', '피부', '어깨', '가슴', '허리', '허벅지'] }] },
          art: art('a simple clothed paper child figure with small paper stars at the neck, shoulders and skin, a paper growth arrow beside it', '몸이 어른이 될 준비를 해요', 'star', 'mint'),
        },
        notes: '종이 몸은 옷 입은 모습으로 다룬다. 겨드랑이 칸이 없어 겨드랑이 털·땀은 \'피부\'·\'어깨\'에서 말로 짚는다. 학생 자신의 몸 변화를 말하게 하지 않는다.',
      }),
      X('intro.height-graph', {
        title: '두 친구의 키 자람 그래프 읽기', method: '두 친구의 키 자람 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '민서 그래프에서 가장 많이 자란 해 하나만 찾는다.', base: '민서의 가장 많이 자란 해를 찾고, 교사가 말해 주는 도윤의 해(13살)와 견준다.', challenge: '친구와 견주어 걱정할 필요가 없는 까닭(시기는 사람마다 다름)을 말한다.' },
        intro: {
          teacher: '"이 꺾은선그래프는 지어낸 친구 민서가 한 해 동안 자란 키예요. 숫자는 가상이에요. 가장 많이 자란 해는 언제일까요?" 시연 단추로 \'11살\'을 고르는 모습을 보인다. 이어 "도윤이는 13살에 가장 많이 자랐대요"라고 말해 주고 견주게 한다. "나는 아직 안 컸으니 이상해요"라는 말에는 "사춘기는 시작하는 때가 사람마다 달라요. 빠르거나 늦어도 모두 자라는 중이에요"라고 말해 준다.',
          student: '민서와 도윤이 가장 많이 자란 해가 왜 다를지 짝과 한 가지씩 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '민서가 한 해 동안 자란 키(가상)', unit: 'cm', xLabel: '나이', yLabel: '자란 키', data: GROW, question: '가장 많이 자란 해는?', choices: GROW.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: art('a paper line graph with a gentle peak beside two paper children of different heights smiling at each other', '자라는 때는 사람마다 달라요', 'sun', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생의 키를 재거나 견주지 않는다.',
      }),
      X('activity.change-branches', {
        title: '몸 변화·마음 변화 가지', method: '몸 변화·마음 변화 가지 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(몸 변화·마음 변화)에 카드 6장을 나눈다.', base: '가지 4개(누구에게나·사람마다 다름 더함)에 카드 10장을 나눈다.', challenge: '가지 4개에 넣지 않을 카드가 섞이고, 둘째 문항에서 변화 카드마다 도움이 되는 행동 카드를 잇는다(함정 카드 섞임).' },
        activity: {
          title: '사춘기 변화 생각 그물', tool: 'mindmap',
          teacher: '"사춘기에는 몸만 변할까요, 마음도 변할까요?" 카드를 하나씩 소리 내어 읽고 가지에 붙이게 한다. "짜증이 느는 건 성격이 나빠져서예요"라는 학생에게 "몸이 바뀌는 때에는 마음도 출렁일 수 있어요. 나쁜 사람이 된 게 아니에요"라고 말해 준다. 둘째 문항에서 "여드름은 안 씻어서만 생겨요"라는 말이 나오면 "피지가 늘어서 생기기도 해요. 순하게 씻는 건 도움이 돼요"라고 짚는다.',
          task: '가운데 \'사춘기\'에서 가지마다 변화 카드를 붙이고, 변화마다 도움이 되는 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('사춘기 변화 카드를 알맞은 가지에 붙여요.', { topic: '사춘기', slots: ['몸 변화', '마음 변화', '누구에게나', '사람마다 다름'], easySlots: ['몸 변화', '마음 변화'],
              groups: { '몸 변화': ['목소리가 굵어져요', '땀 냄새가 나요', '여드름이 나요'], '마음 변화': ['짜증이 늘기도 해요', '혼자 있고 싶어요', '친구 말이 신경 쓰여요'], 누구에게나: ['언젠가 모두 겪어요', '어른이 될 준비예요'], '사람마다 다름': ['시작하는 나이', '키 크는 빠르기'] },
              traps: ['모두 같은 날 시작'] }, 0.25),
            MATCH('변화 카드마다 도움이 되는 행동을 이어요.', [['땀 냄새가 나요', '씻고 옷 갈아입기'], ['짜증이 늘기도 해요', '숨 고르고 쉬기'], ['여드름이 나요', '순한 비누로 세수'], ['혼자 있고 싶어요', '쉬었다 이야기하기']], { easy: 2, traps: ['여드름 손으로 짜기'], title: '변화와 돌봄', topic: '돌봄 잇기' }, 0.25,
              { conclude: '사춘기에는 몸과 마음이 함께 변해요. 시작은 사람마다 다르고, 변화마다 돌보는 방법이 있어요.' }),
            { prompt: '사춘기 변화 가운데 친구들이 가장 궁금해할 것 하나를 골라 모둠에서 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '변화에 알맞은 가지를 써요.', columns: ['변화', '가지'], cells: [['목소리가 굵어져요', ''], ['혼자 있고 싶어요', ''], ['시작하는 나이', '']], answer: '몸 변화, 마음 변화, 사람마다 다름' }] },
      }),
      X('activity.daily-hygiene', {
        title: '나의 하루 위생 점검표', method: '나의 하루 위생 점검표 만들기', tool: 'kitchen', minutes: 14,
        levels: { easy: '항목 4개(습관 2·함정 2) 가운데 사춘기 몸을 돌보는 습관만 고른다.', base: '항목 8개 가운데 습관을 고르고, 둘째 문항에서 습관 카드를 아침·학교·저녁 칸에 나눈다.', challenge: '항목 9개에서 고르고 칸에 카드를 더 나눈 뒤, 지키기 어려운 습관에 바꿀 방법(물티슈 챙기기 등)을 짝에게 말한다(셋째 문항).' },
        activity: {
          title: '하루 위생 점검표와 시간 칸', tool: 'kitchen',
          teacher: '"땀과 피지가 늘면 하루에 무엇을 더 챙기면 좋을까요?" 점검표 항목을 함께 읽고 몸을 돌보는 습관만 표시하게 한다. \'향수로 냄새 덮기\'를 고른 학생에게 "냄새의 원인인 땀은 그대로 남아요. 무엇이 더 도움이 될까요?"라고 묻는다. 둘째 문항에서 습관을 하루 시간 칸에 나누고, 집마다 하루가 다르니 내 시간은 활동지에 스스로 적게 한다.',
          task: '사춘기 몸을 돌보는 습관을 점검표에서 고르고, 습관을 아침·학교·저녁 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHK('사춘기 몸을 돌보는 하루 습관만 표시해요.', '나의 하루 위생', ['아침에 세수하기', '체육 뒤 땀 닦기', '저녁에 샤워하기', '속옷 날마다 갈아입기', '베개 커버 자주 빨기', '일찍 잠자리 들기', '물 자주 마시기'], ['향수로 냄새 덮기', '여드름 손으로 짜기'], { easy: 2, base: 6 }, 0.2),
            SORT('하루 습관 카드를 아침·학교·저녁 칸에 나누어요.', { slots: ['아침', '학교', '저녁'], groups: { 아침: ['세수하기', '깨끗한 옷 입기'], 학교: ['체육 뒤 땀 닦기', '점심 뒤 손 씻기'], 저녁: ['샤워하기', '일찍 잠자리 들기'] }, easy: 1, extra: { 아침: ['이 닦고 나서기'], 학교: ['물 자주 마시기'], 저녁: ['내일 여벌 옷 챙기기'] } }, 0.25,
              { conclude: '땀과 피지가 늘면 씻기·갈아입기·잠으로 몸을 돌봐요. 내 하루에 맞게 시간을 정해요.' }),
            { prompt: '지키기 어려운 습관 하나와 바꿀 방법(예: 물티슈 챙기기)을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 하루에 넣을 위생 습관을 써요.', columns: ['아침', '학교', '저녁'], cells: [['', '', '']] }] },
        notes: '점검표는 학생 자신의 실제 위생 상태를 묻지 않는다. 집에서 샤워·빨래를 할 수 있는 형편은 저마다 다르니 \'할 수 있는 만큼\'이라고 말해 준다.',
      }),
      X('activity.sweat-choice', {
        title: '땀 냄새 고민 갈림길', method: '땀 냄새 고민 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(지후가 무엇을 할지·다음 날 준비)을 지나 근거를 고르고, 교사가 결과를 소리 내어 읽어 준다.', base: '갈림 3번(수군댄 친구 솔의 선택 더함)을 모둠이 함께 정하고 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 솔이 지후에게 건넬 존중하는 말 한 문장을 덧붙인다(셋째 문항).' },
        activity: {
          title: '갈림길: 체육 뒤 땀 냄새', tool: 'dilemma',
          teacher: '"지후는 체육 뒤 친구들이 땀 냄새 이야기를 수군대는 소리를 들었어요. 지후라면 어떤 마음일까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "냄새나는 건 지후 잘못이에요"라는 말에는 "땀이 느는 건 누구에게나 오는 몸 변화예요. 잘못이 아니라 돌보면 되는 일이에요"라고 말해 준다. 셋째 갈림에서는 수군댄 솔의 선택도 고르게 하고, 여럿 앞에서 몸을 두고 말하는 것은 놀림이 된다는 점을 짚는다.',
          task: '지후와 솔의 갈림길마다 고르고, 결과를 읽은 뒤 가장 좋은 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '체육 뒤 땀 냄새',
            steps: [
              { text: '체육 뒤 지후는 친구들이 땀 냄새 이야기를 수군대는 소리를 들었어요.', motif: 'sun',
                good: ['ask', '보건 선생님께 땀 돌보는 법을 묻는다', '씻기와 옷 갈아입기 방법을 알게 돼요.', [['지후', '걱정이 줄어요', 1]]],
                bad: ['spray', '향수를 잔뜩 뿌린다', '냄새가 섞여 머리 아프다는 친구가 생겨요.', '향으로 덮기보다 씻고 갈아입는 게 도움이 돼요.', [['지후', '고민이 그대로예요', -1]]] },
              { text: '다음 날도 체육 시간이 있어요. 지후는 무엇을 준비할까요?', motif: 'house',
                good: ['pack', '작은 수건과 여벌 옷을 챙긴다', '체육 뒤 땀을 닦고 갈아입어 개운해요.', [['지후', '스스로 돌봐요', 1]]],
                bad: ['skip', '체육을 빠지려고 아프다고 한다', '좋아하던 체육을 못 해 속상해요.', '땀은 자연스러운 변화라 피하지 않고 돌보면 돼요.', [['지후', '하고 싶은 걸 못 해요', -1]]] },
              { text: '수군댔던 솔이 이번엔 어떻게 할지 골라요.', motif: 'cloud',
                good: ['kind', '놀리지 않고, 걱정되면 따로 조용히 말한다', '지후가 "알려 줘서 고마워"라고 해요.', [['지후', '존중받아요', 1], ['솔', '좋은 친구가 돼요', 1]]],
                bad: ['tease', '여럿 앞에서 계속 놀린다', '지후가 교실에 들어오기 싫어해요.', '몸을 두고 여럿 앞에서 놀리면 마음이 크게 다쳐요.', [['지후', '마음이 다쳐요', -1]]] },
            ],
            ending: '지후는 스스로 몸을 돌보고, 솔은 놀림 대신 존중을 골라 둘 다 편해졌어요.',
            reasons: [{ id: 'natural', text: '땀이 느는 것은 자연스러운 몸 변화다' }, { id: 'care', text: '씻기·갈아입기처럼 스스로 돌보면 된다' }, { id: 'shame', text: '몸 변화는 숨겨야 할 부끄러운 일이다', why: '누구에게나 오는 자람이라 부끄러운 일이 아니에요.' }, { id: 'cover', text: '향수로 덮으면 다 해결된다', why: '땀은 씻고 갈아입어야 해결돼요.' }],
            good: ['natural', 'care'],
            talk: '솔이 지후에게 건넬 존중하는 말 한 문장을 모둠에서 지어 말해요.',
            conclude: '땀은 자연스러운 변화예요. 스스로 돌보고, 친구의 몸 변화는 놀리지 않아요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '체육 뒤 땀 냄새가 걱정될 때 도움이 되는 것은?', options: ['향수를 잔뜩 뿌린다', '땀을 닦고 옷을 갈아입는다', '체육을 빠진다'], answer: '땀을 닦고 옷을 갈아입는다' },
          { type: 'short', prompt: '친구의 몸 변화가 눈에 띌 때 놀리지 않고 할 수 있는 말을 써요.' },
        ] },
        notes: '이야기는 지어낸 것이다. 반 학생의 냄새·몸을 예로 들지 않는다.',
      }),
      X('wrap.week-check', {
        title: '이번 주 실천 스스로 점검', method: '이번 주 위생 실천 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '이번 주에 해 볼 습관 1개에 표시하고 손 씻기 순서 카드를 놓는다.', base: '습관 2개에 표시하고 손 씻기 순서 카드 3장을 놓는다.', challenge: '습관 3개에 표시하고, 지키기 어려울 때 대신할 방법을 한 줄 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 습관 가운데 이번 주에 해 볼 것은 무엇인가요?" 점검 칸을 스스로 표시하게 하고, 손 씻기 순서 카드를 놓게 한다. "한 번에 다 해야 해요"라는 학생에게 "하나라도 꾸준히 하면 몸이 편해져요"라고 말해 준다. 요일마다 표시할 판은 활동지에 만든다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '이번 주에 해 볼 습관' }, prompt: '이번 주에 해 볼 위생 습관에 스스로 표시해요(두 칸).', target: { selfCheck: ['체육 뒤 땀 닦기', '속옷 날마다 갈아입기'] }, difficulty: 0.1,
              levels: { easy: { prompt: '이번 주에 해 볼 위생 습관에 스스로 표시해요(한 칸).', target: { selfCheck: ['체육 뒤 땀 닦기'] } }, challenge: { prompt: '이번 주에 해 볼 위생 습관에 스스로 표시해요(세 칸).', target: { selfCheck: ['체육 뒤 땀 닦기', '속옷 날마다 갈아입기', '저녁에 샤워하기'] } } } },
            { type: 'tool', tool: 'timer', options: { title: '손 씻기 순서', cards: ['물로 헹구고 닦기', '물 적시기', '비누 거품 문지르기'] }, prompt: '손 씻기 순서대로 카드를 놓아요.', target: { order: ['물 적시기', '비누 거품 문지르기', '물로 헹구고 닦기'] }, difficulty: 0.1 },
            { type: 'short', prompt: '지키기 어려운 습관이 있으면 대신할 방법을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '이번 주 위생 실천판',
          items: [
            { type: 'table', prompt: '해 볼 습관을 쓰고, 지킨 날에 ○ 해요.', columns: ['습관', '월', '화', '수', '목', '금'], cells: [['', '', '', '', '', ''], ['', '', '', '', '', '']] },
            { type: 'short', prompt: '사춘기 몸을 돌보는 습관 가운데 가장 중요하다고 생각하는 것과 그 까닭을 써요.' },
          ],
          easy: { note: '습관 하나만 골라도 돼요.', items: [{ type: 'draw', prompt: '이번 주에 해 볼 습관을 하는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.care-badge', {
        title: '사춘기 돌봄 배지 만들기', method: '사춘기 돌봄 배지 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '큰 동그라미 배지에 습관 그림 조각 1개를 붙인다.', base: '배지에 습관 그림 조각 2개 이상을 붙인다.', challenge: '조각 2개 이상을 붙이고, 배지 뒷면에 친구에게 줄 응원 한마디를 정해 표시한다.' },
        wrap: {
          teacher: '"오늘 고른 돌봄 습관을 배지로 만들어 볼까요? 물방울은 씻기, 반원은 잠, 별은 깨끗한 옷처럼 정해 봐요." 큰 동그라미를 먼저 붙이게 한다. 조각이 많아야 좋은 배지라는 생각에는 "내가 정말 지킬 습관 몇 개면 충분해요"라고 말해 준다. 배지에 이름은 쓰지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'semi', 'star', 'leaf', 'heart'], maxPieces: 8 }, prompt: '큰 동그라미 배지에 습관 그림 조각 두 개 이상을 붙여요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }], pieces: { min: 3 } }, difficulty: 0.1,
              levels: { easy: { prompt: '큰 동그라미 배지에 습관 그림 조각 하나를 붙여요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }], pieces: { min: 2 } } }, challenge: { prompt: '배지에 조각 두 개 이상을 붙이고 뒷면 응원 한마디를 정해 표시해요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }], pieces: { min: 3 }, selfCheck: ['뒷면에 쓸 응원 한마디를 정했다'] } } } },
            { type: 'choice', prompt: '사춘기 몸 변화에 대해 바른 말은?', options: ['모두 같은 나이에 온다', '시작하는 때는 사람마다 다르다', '부끄러운 일이라 숨긴다'], answer: 1, difficulty: 0.15, explain: '사춘기는 사람마다 다른 때에 와요. 자연스러운 자람이에요.' },
          ],
        },
        worksheet: {
          title: '나의 사춘기 돌봄 배지',
          items: [
            { type: 'draw', prompt: '내 돌봄 배지를 그리고 습관 이름을 적어요.' },
            { type: 'short', prompt: '배지 뒷면에 친구에게 줄 응원 한마디를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 월경을 알고 준비하기 (표준안 초 '몸의 변화와 사춘기', 학교보건법 제9조 성교육) ========
  {
    const X = mk('menstruation', 5);
    const CYCLE = [{ id: 'thick', text: '자궁 안쪽 막이 두꺼워져요' }, { id: 'egg', text: '난소에서 난자가 나와요' }, { id: 'flow', text: '막이 떨어져 나와요(월경)' }, { id: 'again', text: '막이 다시 두꺼워져요' }];
    const SCHOOL = [P('보건실', 'hospital', [1, 0]), P('5학년 2반 교실', 'school', [4, 0]), P('월경용품 비치 장소', 'dot', [2, 2]), P('도서관', 'library', [5, 2]), P('운동장', 'park', [0, 3]), P('급식실', 'market', [4, 3])];
    const PIN = (prompt, place, d, more) => Object.assign({ type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 학교 도움 지도(가상)', places: SCHOOL }, prompt, target: { place }, difficulty: d }, more);
    M.push(
      X('intro.cycle-wheel', {
        title: '한 달 몸의 순환 판', method: '한 달 몸의 순환 판 놓기', tool: 'lifecycle', minutes: 6,
        levels: { easy: '교사가 첫 자리(막이 두꺼워져요)를 정해 주고 카드 3장이 놓이는 시연을 본다.', base: '카드 4장이 순환 차례로 놓이는 시연을 보고 차례를 소리 내어 읽는다.', challenge: '순환이 한 달쯤 걸리고 사람마다 다를 수 있다는 설명을 덧붙여 말한다.' },
        intro: {
          teacher: '"월경은 몸이 아기를 맞을 준비를 되풀이하는 자연스러운 순환이에요." 시연 단추로 \'막이 두꺼워져요 → 난자가 나와요 → 막이 떨어져 나와요(월경) → 다시 두꺼워져요\'가 둥근 판에 놓이는 모습을 보인다. 아기가 생기지 않으면 두꺼워진 막이 몸 밖으로 나오는 것이 월경이라고 말해 준다. "월경은 더러운 피예요"라는 말에는 "몸이 건강하게 순환하는 표시예요. 더러운 것이 아니에요"라고 말해 준다. 남학생도 함께 알아 두면 친구를 존중할 수 있다고 밝힌다.',
          student: '둥근 판의 차례를 보고, 월경이 왜 \'순환\'인지 짝에게 한 문장으로 말해 보아요.',
          demo: { tool: 'lifecycle', options: { center: '한 달 몸의 순환', cards: [CYCLE[2], CYCLE[0], CYCLE[3], CYCLE[1]], shuffle: false }, sequence: [{ order: ['thick', 'egg', 'flow'], cyclic: true }, { order: ['thick', 'egg', 'flow', 'again'], cyclic: true }] },
          art: art('a round paper wheel with four soft paper segments and gentle arrows going around, a small paper calendar beside it', '몸은 한 달쯤 순환해요', 'moon', 'rose'),
        },
        notes: '순환판은 몸의 그림 없이 글 카드로만 보인다. 학생 자신의 월경 여부를 묻지 않는다.',
      }),
      X('intro.fact-rumor', {
        title: '월경 사실·오해 나누기', method: '월경 사실·오해 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장(사실 2·오해 2)이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 사실·오해 바구니에 다 들어가는 시연을 보고, 카드마다 까닭을 말한다.', challenge: '오해 카드마다 바로잡는 문장을 말로 지어 본다.' },
        intro: {
          teacher: '"월경에 대해 들어 본 말 가운데 사실과 오해를 가려 볼까요?" 시연 단추로 카드가 \'사실\'·\'오해\' 바구니에 들어가는 모습을 보인다. "월경 중에는 아무 운동도 못 해요"라는 말에는 "몸이 괜찮으면 가벼운 운동은 할 수 있어요. 불편하면 쉬어도 돼요"라고 말해 준다. "월경은 여학생만 알면 돼요"라는 말에는 "모두가 알아야 친구를 존중하고 도울 수 있어요"라고 말해 준다.',
          student: '오해 카드 하나를 골라 바른 말로 바꾸어 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['사실', '오해'], { 사실: ['처음엔 주기가 들쭉날쭉할 수 있다', '월경 중에도 가벼운 운동을 할 수 있다', '자연스러운 몸의 순환이다', '남학생도 알면 좋다'], 오해: ['월경은 더러운 것이다', '월경은 아픈 병이다', '월경은 숨겨야 할 일이다', '여학생만 알면 된다'] }),
          art: art('two paper baskets on a paper shelf labelled with a check mark and a question mark, small paper cards floating between them', '사실일까, 오해일까?', 'star', 'lavender'),
        },
      }),
      X('activity.pack-bag', {
        title: '월경 준비 파우치 꾸리기', method: '월경 준비 파우치 꾸리기', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 4장을 \'파우치에 넣을 것\'과 \'필요 없거나 어른과 상의할 것\'으로 나눈다.', base: '카드 8장을 두 칸에 나눈다.', challenge: '카드 10장을 나눈 뒤, 둘째 문항에서 현장체험학습 날 더 챙길 것만 고른다(함정 카드 섞임).' },
        activity: {
          title: '월경 준비 파우치', tool: 'kitchen',
          teacher: '"월경을 미리 준비하면 학교에서도 마음이 편해요. 파우치에 무엇을 넣을까요?" 카드를 놓을 때마다 까닭을 말하게 한다. "진통제를 많이 넣어 두면 좋아요"라는 학생에게 "약은 보호자나 보건 선생님과 상의해서 정해진 만큼만 먹어요"라고 말해 준다. 생리대 실물은 교사가 보건실 자료로 보여 줄 수 있다. 둘째 문항에서는 하루 종일 밖에 있는 날 무엇이 더 필요한지 생각하게 한다.',
          task: '월경 준비 카드를 파우치에 넣을 것과 어른과 상의할 것으로 나누고, 체험학습 날 챙길 것을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('월경 준비 카드를 알맞은 칸에 나누어요.', { slots: ['파우치에 넣을 것', '필요 없거나 상의할 것'], groups: { '파우치에 넣을 것': ['생리대 몇 개', '여벌 속옷', '작은 봉투', '물티슈'], '필요 없거나 상의할 것': ['진통제 마음대로 여러 알', '큰 거울', '향 진한 향수', '두꺼운 화장품'] }, extra: { '파우치에 넣을 것': ['손 소독제'], '필요 없거나 상의할 것': ['처음 보는 약'] } }, 0.2),
            PICK('현장체험학습 날 파우치에 더 챙길 것만 골라요.', '체험학습 날 더', ['생리대 넉넉히', '작은 봉투 여러 장', '여벌 속옷 한 벌'], ['진통제 한 통', '큰 거울'], { easy: 1, easyTraps: 1, extraTraps: ['친구 약 빌리기'], mode: 'pick' }, 0.25,
              { conclude: '파우치에는 생리대·여벌 속옷·봉투·물티슈를 챙기고, 약은 어른과 상의해요.' }),
            { prompt: '파우치를 깜빡한 날 학교에서 어떻게 할지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '월경 준비 파우치에 넣을 것에 표시해요.', options: ['생리대', '여벌 속옷', '작은 봉투', '물티슈'] }] },
        notes: '생리대 종류·쓰는 법은 보건 선생님 자료로 다룬다. 학생 자신의 준비 상태를 묻지 않는다.',
      }),
      X('activity.first-day', {
        title: '처음 월경을 알아챈 날의 차례', method: '처음 월경을 알아챈 날의 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장(확인하기·선생님께 말하기·손 씻고 교실로)을 차례대로 놓는다.', base: '장면 카드 4장을 차례대로 놓고, 둘째 문항에서 서연과 선생님 말풍선 2칸을 채운다.', challenge: '장면 4장 사이에 섞인 틀린 장면(참고 끝까지 앉아 있기)을 빼고 놓은 뒤, 말풍선을 채운다.' },
        activity: {
          title: '서연이 처음 월경을 알아챈 날', tool: 'story',
          teacher: '"서연이는 수업 중에 속옷이 젖은 느낌이 들었어요. 무엇부터 할까요?" 장면 카드를 놓은 뒤 반 전체가 차례를 읽게 한다. "창피해서 끝까지 참을래요"라는 말에는 "선생님은 이럴 때 도와주려고 계세요. 말하는 건 잘한 일이에요"라고 말해 준다. 말풍선을 채운 뒤 선생님 역할을 맡은 학생이 따뜻하게 답하는 말을 소리 내어 읽게 한다.',
          task: '서연이 처음 월경을 알아챈 날의 장면을 차례대로 놓고, 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('서연이 처음 월경을 알아챈 날의 장면을 차례대로 놓아요.', ['화장실에서 확인하기', '담임·보건 선생님께 말하기', '생리대 쓰기', '손 씻고 교실로'], { easy: [0, 1, 3], trap: '참고 끝까지 앉아 있기', motifs: ['house', 'star', 'leaf', 'sun'] }, 0.2),
            { prompt: '서연과 보건 선생님의 말풍선 빈칸에 알맞은 말을 넣어요.', toolOptions: { mode: 'fill', title: '보건실에서(지어낸 장면)', slots: [{ id: 'b1', who: '서연', label: '선생님, ___' }, { id: 'b2', who: '보건 선생님', label: '말해 줘서 고마워. ___' }], cards: ['월경이 시작된 것 같아요', '자연스러운 일이야', '아무것도 아니에요', '창피한 일이네'] }, target: { fill: { b1: '월경이 시작된 것 같아요', b2: '자연스러운 일이야' } }, difficulty: 0.2,
              levels: { easy: { prompt: '서연의 말풍선 빈칸에 알맞은 말을 넣어요(빈칸 하나).', toolOptions: { slots: [{ id: 'b1', who: '서연', label: '선생님, ___' }], cards: ['월경이 시작된 것 같아요', '아무것도 아니에요'] }, target: { fill: { b1: '월경이 시작된 것 같아요' } } } },
              conclude: '확인하고, 선생님께 말하고, 생리대를 쓰고, 손을 씻어요. 도움을 청하는 건 잘한 일이에요.' },
            { prompt: '친구가 서연처럼 당황해 보이면 어떤 말을 건넬지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '학교에서 월경이 시작되면 담임 선생님이나 ___ 선생님께 말해요.', answer: '보건' }] },
        notes: '장면은 지어낸 것이다. 몸 그림 없이 장면 글로만 다룬다.',
      }),
      X('activity.class-note', {
        title: '반 친구에게 보내는 월경 안내 쪽지', method: '반 친구에게 보내는 월경 안내 쪽지 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 27,
        levels: { easy: '문장 틀을 보고 두 문장을 쓰고 기준 2개(사실·존중하는 말)를 점검한다.', base: '세 문장을 쓰고 기준 3개(사실·존중하는 말·도움 청할 곳)를 점검한다.', challenge: '세 문장을 쓰고 한 군데 고쳐 쓴 뒤, 둘째 문항에서 친구가 놀릴 때 할 말을 쓰고 짝과 바꿔 기준으로 서로 점검한다(셋째 문항).' },
        activity: {
          title: '월경 안내 쪽지', tool: 'rubric-writing',
          teacher: '"반 친구 모두가 알면 좋은 월경 사실은 무엇일까요?" 모둠이 먼저 사실 두세 가지를 정하게 한 뒤 쪽지를 쓰게 한다. 기준표를 함께 읽는다. "월경하는 친구는 조심해야 해"처럼 걱정만 담은 문장에는 "사실과 함께 \'도와줄게\' 같은 존중하는 말을 넣어 볼까요?"라고 말해 준다. 이름·개인 이야기는 쓰지 않는다고 다시 말해 준다.',
          task: '모둠에서 정한 월경 사실로 반 친구에게 보내는 쪽지를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '반 친구 모두에게 보내는 월경 안내 쪽지를 세 문장으로 써요.', toolOptions: { title: '월경 안내 쪽지', topic: '반 친구 모두가 알면 좋은 월경 사실을 세 문장으로 써요(이름은 쓰지 않아요).', minChars: 40, maxChars: 200, maxSentences: 4 }, target: { selfCheck: ['사실만 썼다', '존중하는 말을 썼다', '도움 청할 곳을 넣었다'], chars: [40, 200], sentences: [3, 4] }, difficulty: 0.25,
              levels: {
                easy: { prompt: '반 친구에게 보내는 월경 안내 쪽지를 두 문장으로 써요(문장 틀을 써도 돼요).', toolOptions: { starter: '월경은 ___. 친구가 월경 중이면 ___.' }, target: { selfCheck: ['사실만 썼다', '존중하는 말을 썼다'], chars: [20, 200], sentences: [2, 4] } },
                challenge: { prompt: '월경 안내 쪽지를 세 문장으로 쓰고, 다 쓰면 한 군데 고쳐 써요.', target: { selfCheck: ['사실만 썼다', '존중하는 말을 썼다', '도움 청할 곳을 넣었다', '한 군데 이상 고쳐 썼다'], chars: [50, 200], sentences: [3, 4], mustInclude: [['보건실', '보건 선생님', '담임']] } },
              } },
            { prompt: '친구가 월경을 놀릴 때 할 말을 한두 문장으로 써요.', toolOptions: { title: '놀림을 멈추는 말', topic: '누군가 월경을 두고 놀릴 때, 놀림을 멈추게 하는 말을 한두 문장으로 써요.', minChars: 15, maxChars: 120 }, target: { selfCheck: ['상대를 깎아내리지 않았다', '멈춰 달라고 썼다'], chars: [15, 120] }, difficulty: 0.2,
              levels: { easy: { prompt: '친구가 월경을 놀릴 때 할 말을 한 문장으로 써요(문장 틀을 써도 돼요).', toolOptions: { starter: '월경은 ___ 일이야. 그러니까 ___.' }, target: { selfCheck: ['멈춰 달라고 썼다'], chars: [10, 120] } } },
              conclude: '월경은 자연스러운 순환이에요. 사실을 알고, 존중하고, 도움 청할 곳을 함께 알려요.' },
            { prompt: '짝과 쪽지를 바꿔 읽고 기준표에 맞는지 서로 한 가지씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [
          { type: 'short', prompt: '반 친구 모두가 알면 좋은 월경 사실 한 가지를 써요.' },
          { type: 'check', prompt: '월경 안내 쪽지에 넣은 것에 표시해요.', options: ['사실', '존중하는 말', '도움 청할 곳'] },
        ] },
        notes: '쪽지는 교실 게시용이다. 학생 자신의 경험은 쓰지 않게 한다.',
      }),
      X('wrap.help-map', {
        title: '학교에서 도움받는 곳 지도', method: '학교에서 월경 도움받는 곳 지도에 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '첫 질문 지도에 장소 두 곳만 보이고, 보건실에 핀을 꽂는다.', base: '장소 여섯 곳 지도에서 보건실·담임 교실·월경용품 비치 장소에 차례로 핀을 꽂는다.', challenge: '세 곳을 꽂은 뒤 넷째 질문에서 쉬는 시간이 짧을 때 가장 가까운 도움 장소를 고른다(교사가 도전 모둠에 먼저 풀게 한다).' },
        wrap: {
          teacher: '"우리 학교에서 월경 때문에 도움이 필요하면 어디로 갈까요?" 지도의 장소 이름을 함께 읽고 핀을 꽂게 한다. 지도는 지어낸 학교이니, 우리 학교의 보건실과 월경용품을 두는 곳은 교사가 실제 위치로 말해 준다. "보건실은 아플 때만 가요"라는 말에는 "월경 준비물이 필요할 때도 갈 수 있어요"라고 말해 준다.',
          exitTicket: [
            PIN('월경용품이 필요해요. 보건 선생님이 계신 곳에 핀을 꽂아요.', '보건실', 0.1, { levels: { easy: { prompt: '보건 선생님이 계신 곳에 핀을 꽂아요(장소 두 곳).', toolOptions: { places: [SCHOOL[0], SCHOOL[4]], readout: true } } } }),
            PIN('담임 선생님께 말하고 싶어요. 우리 반 교실에 핀을 꽂아요.', '5학년 2반 교실', 0.1),
            PIN('학교가 정한 월경용품 비치 장소에 핀을 꽂아요.', '월경용품 비치 장소', 0.15),
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 학교 도움 지도(가상)', places: SCHOOL, readOnly: true, ask: { q: '운동장에서 쉬는 시간이 짧아요. 가장 가까운 도움 장소는?', choices: ['보건실', '도서관', '급식실'], why: ['', '도서관에는 월경용품이 없을 수 있어요.', '급식실은 도움 장소가 아니에요.'] } }, prompt: '운동장에서 쉬는 시간이 짧을 때 가장 가까운 도움 장소를 골라요.', target: { pick: 0 }, difficulty: 0.2 },
          ],
        },
        worksheet: {
          title: '학교에서 도움받는 곳',
          items: [
            { type: 'table', prompt: '우리 학교에서 도움받는 곳을 써요.', columns: ['필요할 때', '갈 곳'], cells: [['월경용품이 필요해요', ''], ['선생님께 말하고 싶어요', '']], answer: '보건실(또는 비치 장소), 담임 교실' },
            { type: 'short', prompt: '친구가 월경 때문에 도움이 필요해 보이면 어떻게 도울지 써요.' },
          ],
        },
        notes: '지도는 지어낸 학교다. 우리 학교의 월경용품 비치 장소는 학교가 정한 곳으로 바꾸어 말해 준다.',
      }),
      X('wrap.worry-scale', {
        title: '월경 걱정 눈금 다시 재기', method: '가상 인물의 월경 걱정 눈금 다시 재기', tool: 'emotion', minutes: 6,
        levels: { easy: '세 칸 눈금에 서연의 걱정을 표시한다(어느 칸이든 된다).', base: '다섯 칸 눈금에 준비를 마친 서연의 걱정을 표시하고, 걱정을 줄여 준 방법 카드를 고른다.', challenge: '방법 카드를 고른 뒤, 걱정이 남아 있다면 누구에게 물을지 고른다.' },
        wrap: {
          teacher: '"수업 전 서연이는 월경이 아주 걱정됐어요. 파우치를 챙기고 도움받을 곳을 알게 된 지금은 어떨까요?" 눈금을 표시하게 한다. 학생 자신의 걱정 크기는 묻지 않는다. "걱정이 남아 있으면 이상해요"라는 말에는 "궁금한 게 남는 건 자연스러워요. 물어볼 사람이 있으면 돼요"라고 말해 준다.',
          exitTicket: [
            SCALE('파우치를 챙기고 도움받을 곳을 안 서연의 걱정 크기를 표시해요.', '서연이 월경 파우치를 챙기고 보건실 위치도 알게 됐어요', '걱정', [1, 2]),
            EX('emotion', PICK('서연의 걱정을 줄여 준 방법만 골라요.', '걱정을 줄인 방법', ['파우치 미리 챙기기', '보건실 알아 두기'], ['혼자 꾹 참기', '아무에게도 안 말하기'], { easy: 1, easyTraps: 1 }, 0.15)),
            { type: 'choice', prompt: '월경이 궁금할 때 물어보기 좋은 사람은?', options: ['보호자나 보건 선생님', '처음 보는 누리집 글쓴이', '아무에게도 묻지 않기'], answer: 0, difficulty: 0.15, explain: '보호자·보건 선생님·담임 선생님께 물어보면 바른 정보를 얻을 수 있어요.' },
          ],
        },
        worksheet: {
          title: '월경, 걱정 대신 준비',
          items: [
            { type: 'short', prompt: '서연의 걱정을 줄여 준 방법 두 가지를 써요.' },
            { type: 'choice', prompt: '월경에 대해 바른 말은?', options: ['더러운 것이다', '자연스러운 몸의 순환이다', '여학생만 알면 된다'], answer: '자연스러운 몸의 순환이다' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 몽정 바르게 알고 친구의 변화 존중하기 (표준안 초 '몸의 변화와 사춘기'·'성별 고정관념 깨기') ========
  {
    const X = mk('wetdream-respect', 5);
    const ASK = (prompt, q, choices, pick, d, easyChoices, easyPick = 0, more) => Object.assign({
      prompt, toolOptions: { mode: 'parts', parts: ['가슴', '배', '허리', '허벅지'], ask: { q, choices } }, target: { pick }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(보기 두 개).`, toolOptions: { ask: { q, choices: easyChoices } }, target: { pick: easyPick } } },
    }, more);
    M.push(
      X('intro.ox-quiz', {
        title: '몽정 사실·오해 소리 퀴즈', method: '몽정 사실·오해 소리 퀴즈', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 3장을 소리 내어 읽어 주며 바구니에 들어가는 시연을 보인다.', base: '카드 6장이 사실·오해 바구니에 다 들어가는 시연을 보고 까닭을 말한다.', challenge: '오해 카드마다 바른 설명을 말로 잇는다.' },
        intro: {
          teacher: '"몽정은 잠자는 동안 정액이 나오는 일이에요. 몸에서 정자가 만들어지기 시작했다는 자연스러운 신호예요." 카드를 하나씩 소리 내어 읽고, 시연 단추로 사실·오해 바구니에 들어가는 모습을 보인다. "몽정은 나쁜 생각을 해서 생겨요"라는 말에는 "그렇지 않아요. 몸이 자라며 저절로 생기는 일이에요"라고 말해 준다. 웃음이 나오면 "몸의 바른 이름과 변화를 배우는 시간이에요"라고 차분하게 말한다.',
          student: '오해 카드 하나를 골라, 바르게 고친 말을 짝에게 들려주어요.',
          demo: SDEMO('sortboard', ['사실', '오해'], { 사실: ['잠자는 동안 정액이 나오는 일', '정자가 만들어진다는 신호', '속옷을 갈아입으면 된다'], 오해: ['몽정은 병이다', '나쁜 생각 때문에 생긴다', '숨겨야 할 잘못이다'] }),
          art: art('two paper baskets on a paper shelf with a small paper moon and soft blanket nearby, simple and calm', '자연스러운 몸의 신호예요', 'moon', 'sky'),
        },
        notes: '몸 그림 없이 글 카드로만 다룬다. 학생에게 몽정 경험을 묻지 않는다.',
      }),
      X('intro.teased-feeling', {
        title: '놀림받은 인물의 마음 날씨', method: '놀림받은 인물의 마음 날씨 짝 짓기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 하나(발표 중 목소리가 갈라짐)에 마음 카드가 이어지는 시연을 본다.', base: '장면 셋(목소리·키·여드름)에 마음 카드가 이어지는 시연을 본다.', challenge: '마음 카드 옆에 하준이 바라는 친구 행동을 말로 고른다.' },
        intro: {
          teacher: '"하준이는 발표하다가 목소리가 갈라졌어요. 몇몇이 크게 웃었어요. 하준이 마음의 날씨는 어떨까요?" 시연 단추로 장면마다 마음 카드가 이어지는 모습을 보인다. "웃은 건 장난이에요"라는 말에는 "웃은 쪽은 장난이어도, 하준이 마음에는 비가 올 수 있어요"라고 말해 준다. 목소리·키·여드름은 사춘기에 누구나 겪을 수 있는 변화라는 점을 짚는다.',
          student: '하준이 친구들에게 바라는 행동 하나를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 'voice', label: '발표 중 목소리가 갈라져 웃음' }, { id: 'tall', label: '키를 두고 별명 부름' }, { id: 'skin', label: '여드름을 두고 수군댐' }], cards: ['속상함', '화남', '걱정', '신남'] }, sequence: [{ match: { voice: '속상함' } }, { match: { voice: '속상함', tall: '화남', skin: '걱정' } }] },
          art: art('a paper child standing at a paper podium with a small grey paper rain cloud above, classmates drawn as simple paper shapes', '마음에도 날씨가 있어요', 'rain', 'sky'),
        },
        notes: '장면은 지어낸 것이다. 반 학생의 목소리·키·피부를 예로 들지 않는다.',
      }),
      X('activity.body-link', {
        title: '몸의 부분과 하는 일 잇기', method: '몸의 부분 바른 이름과 하는 일 잇기', tool: 'body', minutes: 14,
        levels: { easy: '문항마다 보기 두 개 가운데 바른 이름·하는 일을 고른다.', base: '문항 다섯 개(고환·음경·난소·자궁의 하는 일, 바른 이름을 쓰는 까닭)에서 보기 세 개 가운데 고른다.', challenge: '같은 다섯 문항을 풀고, 남자 몸과 여자 몸 기관의 공통점(새 생명을 만드는 데 함께 쓰임)을 짝에게 말한다.' },
        activity: {
          title: '생식 기관의 바른 이름', tool: 'body',
          teacher: '"우리 몸의 다른 부분처럼, 생식 기관에도 바른 이름이 있어요." 종이 몸에는 생식 기관 그림이 없으니 보건 교과서의 단순한 도식 그림을 함께 띄우고, 교구에서는 이름과 하는 일을 고른다. "그 이름은 말하면 안 되는 말이에요"라는 학생에게 "바른 이름을 알아야 아플 때 정확히 말하고 도움을 받을 수 있어요"라고 말해 준다. 장난스러운 별명은 소리 내어 말하지 않는다.',
          task: '보건 교과서 도식 그림을 보며, 기관마다 바른 이름과 하는 일을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            ASK('정자를 만드는 기관의 바른 이름을 골라요.', '정자를 만드는 기관은?', ['고환', '작은창자', '콩팥'], 0, 0.15, ['고환', '작은창자']),
            ASK('음경이 하는 일을 골라요.', '음경이 하는 일은?', ['피를 온몸에 보내요', '오줌과 정액이 나오는 길', '음식을 잘게 부숴요'], 1, 0.2, ['피를 온몸에 보내요', '오줌과 정액이 나오는 길'], 1),
            ASK('난소가 하는 일을 골라요.', '난소가 하는 일은?', ['숨을 쉬어요', '소리를 들어요', '난자를 만들어요'], 2, 0.2, ['숨을 쉬어요', '난자를 만들어요'], 1),
            ASK('자궁이 하는 일을 골라요.', '자궁이 하는 일은?', ['아기가 자라는 곳이에요', '음식을 소화해요', '냄새를 맡아요'], 0, 0.2, ['아기가 자라는 곳이에요', '음식을 소화해요']),
            ASK('장난 별명 대신 바른 이름을 쓰는 까닭을 골라요.', '바른 이름을 쓰는 까닭은?', ['어른처럼 보이려고', '아플 때 정확히 말하고 도움받으려고', '친구를 웃기려고'], 1, 0.15, ['친구를 웃기려고', '아플 때 정확히 말하고 도움받으려고'], 1,
              { conclude: '고환·음경·난소·자궁은 새 생명과 관련된 몸의 부분이에요. 바른 이름으로 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기관이 하는 일을 써요.', columns: ['기관', '하는 일'], cells: [['고환', ''], ['난소', ''], ['자궁', '']], answer: '정자를 만든다, 난자를 만든다, 아기가 자라는 곳' }] },
        notes: '교구 몸 그림에는 생식 기관이 없다. 보건 교과서의 단순한 도식 그림만 쓰고, 사진·실물 그림은 쓰지 않는다. 학생 자신의 몸을 묻지 않는다.',
      }),
      X('activity.morning-fill', {
        title: '몽정을 알아챈 아침 말풍선', method: '아침에 몽정을 알아챘을 때 말풍선 채우기', tool: 'story', minutes: 14,
        levels: { easy: '도윤의 말풍선 빈칸 2개를 채운다.', base: '말풍선 빈칸 4개를 채우고, 둘째 문항에서 도윤에게 해 줄 바른 말만 고른다.', challenge: '빈칸 4개를 채우고 헷갈리는 카드까지 섞인 고르기를 한 뒤, 도윤이 스스로에게 할 말을 지어 짝에게 말한다(셋째 문항).' },
        activity: {
          title: '도윤의 아침', tool: 'story',
          teacher: '"도윤이는 아침에 일어나 속옷이 젖은 것을 알았어요. 깜짝 놀랐대요. 무엇을 하면 될까요?" 말풍선 빈칸을 함께 읽고 채우게 한다. "몰래 숨겨 둘래요"라는 말에는 "숨길 일이 아니에요. 갈아입고 빨래 바구니에 넣으면 돼요"라고 말해 준다. 궁금한 것은 보호자·보건 선생님께 물어보면 된다는 점을 짚는다.',
          task: '도윤의 아침 장면 말풍선에 알맞은 말을 넣고, 도윤에게 해 줄 바른 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '도윤의 말풍선 빈칸에 알맞은 말을 넣어요.', toolOptions: { mode: 'fill', title: '도윤의 아침(지어낸 장면)', slots: [{ id: 'b1', who: '도윤', label: '놀랐지만 일단 ___' }, { id: 'b2', who: '도윤', label: '젖은 속옷은 ___' }, { id: 'b3', who: '도윤', label: '이건 ___' }, { id: 'b4', who: '도윤', label: '궁금한 건 ___' }], cards: ['속옷을 갈아입자', '빨래 바구니에 넣자', '자연스러운 몸 변화야', '보호자께 물어보자', '몰래 숨겨 두자', '큰 병일지도 몰라'] }, target: { fill: { b1: '속옷을 갈아입자', b2: '빨래 바구니에 넣자', b3: '자연스러운 몸 변화야', b4: '보호자께 물어보자' } }, difficulty: 0.25,
              levels: { easy: { prompt: '도윤의 말풍선 빈칸 두 개에 알맞은 말을 넣어요.', toolOptions: { slots: [{ id: 'b1', who: '도윤', label: '놀랐지만 일단 ___' }, { id: 'b2', who: '도윤', label: '젖은 속옷은 ___' }], cards: ['속옷을 갈아입자', '빨래 바구니에 넣자', '몰래 숨겨 두자'] }, target: { fill: { b1: '속옷을 갈아입자', b2: '빨래 바구니에 넣자' } } } } },
            PICK('몽정을 알아챈 도윤에게 해 줄 바른 말만 골라요.', '도윤에게 해 줄 말', ['자연스러운 일이야', '갈아입으면 돼', '궁금하면 물어봐'], ['병원에 가야 해', '나쁜 생각 탓이야'], { easy: 1, easyTraps: 1, extraTraps: ['절대 말하지 마'] }, 0.2,
              { conclude: '몽정은 자연스러운 몸 변화예요. 갈아입고, 빨래 바구니에 넣고, 궁금하면 어른께 물어요.' }),
            { prompt: '도윤이 걱정될 때 스스로에게 할 말을 지어 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '몽정을 알아채면 속옷을 갈아입고 젖은 속옷은 ___ 에 넣어요.', answer: '빨래 바구니' }] },
      }),
      X('activity.recess-choice', {
        title: '놀림을 본 쉬는 시간 갈림길', method: '몸 변화 놀림을 본 쉬는 시간 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(목소리 흉내·가방 속 생리대 놀림)을 지나 근거를 고른다.', base: '모둠 토의 뒤 갈림 3번(놀린 친구가 "장난인데?"라고 할 때 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 선택마다 하준·서연·놀린 친구 세 사람의 영향을 견주어 말한다(셋째 문항).' },
        activity: {
          title: '갈림길: 쉬는 시간의 놀림', tool: 'dilemma',
          teacher: '"쉬는 시간에 몇몇이 하준이 목소리를 흉내 내고, 서연이 가방 속 생리대를 보고 크게 떠들어요. 나는 무엇을 할 수 있을까요?" 고를 때마다 결과와 세 사람의 영향을 소리 내어 읽게 한다. "다들 웃으니까 나도 웃어야 해요"라는 마음을 먼저 인정하고 "하준이와 서연이도 웃고 있을까요?"라고 묻는다. 잘못은 놀린 쪽에 있고, 멈추게 하거나 선생님께 알린 사람은 잘한 것이라고 분명히 말한다.',
          task: '갈림길마다 고르고, 하준·서연·놀린 친구에게 생긴 일을 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '쉬는 시간의 놀림',
            steps: [
              { text: '쉬는 시간, 몇몇이 하준의 갈라진 목소리를 흉내 내며 웃어요.', motif: 'cloud',
                good: ['stop', '"그만해, 누구나 변해"라고 말한다', '흉내 내던 친구들이 멈칫해요.', [['하준', '편이 있다고 느껴요', 1]]],
                bad: ['laugh', '같이 웃는다', '흉내가 더 커져요.', '함께 웃으면 놀림이 더 커져요.', [['하준', '더 속상해요', -1]]] },
              { text: '이번엔 서연의 가방 속 생리대를 보고 몇 명이 크게 떠들어요.', motif: 'house',
                good: ['tell', '선생님께 알리고 서연 곁에 선다', '선생님이 반 이야기 시간을 열어요.', [['서연', '보호받아요', 1]]],
                bad: ['ignore', '모른 척 자리로 간다', '서연이 혼자 가방을 끌어안아요.', '모른 척하면 놀림이 계속되기 쉬워요.', [['서연', '혼자 남아요', -1]]] },
              { text: '놀린 친구가 "장난인데 왜 그래?"라고 해요.', motif: 'star',
                good: ['explain', '"몸 변화는 놀릴 일이 아니야, 사과하자"고 한다', '놀린 친구가 하준과 서연에게 사과해요.', [['하준·서연', '마음이 풀려요', 1], ['놀린 친구', '잘못을 알게 돼요', 0]]],
                bad: ['drop', '"그래, 장난이지" 하고 넘긴다', '다음 날 놀림이 또 생겨요.', '장난이라는 말로 상처가 없어지지 않아요.', [['하준·서연', '계속 아파요', -1]]] },
            ],
            ending: '멈추게 하고, 알리고, 사과까지 이어져 모두가 존중받는 반이 되었어요.',
            reasons: [{ id: 'natural', text: '목소리·월경 같은 몸 변화는 누구나 겪는 자연스러운 일이다' }, { id: 'hurt', text: '받는 사람이 아프면 장난이 아니다' }, { id: 'joke', text: '다들 웃으면 괜찮은 장난이다', why: '여럿이 웃어도 받는 친구는 아파요.' }, { id: 'quiet', text: '내 일이 아니니 가만히 있는 게 낫다', why: '가만히 있으면 놀림이 이어지기 쉬워요.' }],
            good: ['natural', 'hurt'],
            talk: '선택마다 하준·서연·놀린 친구 세 사람에게 무슨 일이 생겼는지 모둠에서 견주어 말해요.',
            conclude: '몸 변화는 놀릴 일이 아니에요. 멈추게 하고 알리는 사람은 잘한 거예요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '친구의 몸 변화를 놀리는 장면을 보면?', options: ['같이 웃는다', '그만하자고 하거나 선생님께 알린다', '모른 척한다'], answer: '그만하자고 하거나 선생님께 알린다' },
          { type: 'short', prompt: '놀림을 받은 친구에게 건넬 위로의 말을 한 문장으로 써요.' },
        ] },
        notes: '이야기는 지어낸 것이다. 우리 반에 이런 일이 있었는지 묻지 않는다.',
      }),
      X('wrap.respect-chant', {
        title: '존중 구호 리듬 만들기', method: '존중 구호 리듬 짓고 치기', tool: 'keyboard', minutes: 6,
        levels: { easy: '들려준 구호 리듬(한 마디)을 듣고 블록으로 따라 놓는다.', base: '구호 두 마디에 마디마다 4박이 되게 리듬을 짓는다.', challenge: '두 마디 리듬을 짓고, 모둠 구호를 새로 지었는지 점검 칸에 표시한다.' },
        wrap: {
          teacher: '"몸이 바뀌는 건 자연스러워, 놀림 대신 존중해!" 구호를 함께 말해 본 뒤 리듬 블록으로 박을 지어 치게 한다. 한 마디는 4박이라는 점을 짚는다. 목소리가 작은 학생에게 "분명하게 말하는 연습이에요. 또박또박 말해 볼까요?"라고 말해 준다. 끝에 반 전체가 지은 리듬으로 구호를 한 번 외친다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '존중 구호 두 마디에 마디마다 4박이 되게 리듬을 지어요.', target: { beats: true }, difficulty: 0.15,
              levels: {
                easy: { prompt: '구호 리듬(한 마디)을 듣고 똑같이 블록을 놓아요.', toolOptions: { measures: 1, pattern: ['q', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q'] } },
                challenge: { prompt: '모둠 구호 두 마디에 4박 리듬을 짓고 점검 칸에 표시해요.', target: { beats: true, selfCheck: ['모둠 구호를 새로 지었다'] } },
              } },
            { type: 'choice', prompt: '친구의 목소리가 갈라질 때 존중하는 행동은?', options: ['흉내 낸다', '기다려 주고 끝까지 듣는다', '크게 웃는다'], answer: 1, difficulty: 0.1, explain: '목소리 변화는 자연스러워요. 끝까지 들어 주는 것이 존중이에요.' },
          ],
        },
        worksheet: {
          title: '존중 구호',
          items: [
            { type: 'short', prompt: '우리 반 존중 구호를 써요.' },
            { type: 'choice', prompt: '몽정에 대해 바른 말은?', options: ['병이다', '자연스러운 몸 변화다', '숨겨야 할 잘못이다'], answer: '자연스러운 몸 변화다' },
          ],
        },
      }),
      X('wrap.one-line', {
        title: '나의 존중 한 문장 다짐', method: '나의 존중 한 문장 다짐 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '둘째 질문의 보기 문장 가운데 다짐을 고르고, 첫 질문은 문장 틀을 써서 쓴다.', base: '한 문장 다짐을 쓰고 기준 2개(구체적인 행동·상대 마음)를 점검한다.', challenge: '두 문장으로 쓰고, 지키기 어려운 순간까지 적은 뒤 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"친구의 몸 변화를 보면 나는 무엇을 할 건가요?" "놀리지 않겠다"보다 "목소리가 갈라져도 끝까지 들어 주겠다"처럼 눈에 보이는 행동으로 쓰게 한다. 기준표를 함께 읽는다. 친구 이름은 쓰지 않는다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { title: '나의 존중 다짐', topic: '"친구의 몸 변화를 보면 나는 ___ 하겠다"를 한 문장으로 써요.', minChars: 10, maxChars: 120 }, prompt: '친구의 몸 변화를 보면 할 행동을 한 문장으로 써요.', target: { selfCheck: ['눈에 보이는 행동으로 썼다', '상대 마음을 생각했다'], chars: [10, 120] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '친구의 몸 변화를 보면 할 행동을 문장 틀로 써요.', toolOptions: { starter: '친구의 몸 변화를 보면 나는 ___ 하겠다.' }, target: { selfCheck: ['눈에 보이는 행동으로 썼다'], chars: [8, 120] } },
                challenge: { prompt: '다짐을 두 문장으로 쓰고 지키기 어려운 순간도 적어요.', target: { selfCheck: ['눈에 보이는 행동으로 썼다', '상대 마음을 생각했다', '지키기 어려운 순간을 적었다', '한 군데 이상 고쳐 썼다'], chars: [30, 160], sentences: [2, 3] } },
              } },
            { type: 'choice', prompt: '가장 구체적인 존중 다짐은?', options: ['착하게 지내겠다', '목소리가 갈라져도 끝까지 들어 주겠다', '그냥 잘하겠다'], answer: 1, difficulty: 0.15, explain: '무엇을 할지 눈에 보이게 쓴 다짐이 지키기 쉬워요.' },
          ],
        },
        worksheet: {
          title: '나의 존중 다짐',
          items: [
            { type: 'short', prompt: '친구의 몸 변화를 보면 내가 할 행동을 한 문장으로 써요.' },
            { type: 'short', prompt: '그 다짐을 지키기 어려운 순간과 그때 할 말을 써요.' },
          ],
          easy: { note: '"끝까지 들어 주겠다"처럼 짧게 써도 돼요.', items: [{ type: 'draw', prompt: '친구를 존중하는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 5학년 · 영상·게임 속 성 역할 살피고 성차별에 말하기 (표준안 초 '성별 고정관념 깨기', 양성평등기본법 양성평등교육) ========
  {
    const X = mk('media-roles', 5);
    const ADS = [['요리하는 여자', 14], ['요리하는 남자', 6], ['운전하는 여자', 4], ['운전하는 남자', 16]];
    const JOBS = ['간호사', '소방관', '요리사', '축구 선수', '유치원 선생님', '비행기 조종사', '과학자', '미용사'];
    const CHARS = ['구출만 기다리는 공주', '늘 남자인 전사', '늘 엄마인 요리사'];
    M.push(
      X('intro.ad-graph', {
        title: '광고 등장인물 막대그래프 읽기', method: '광고 등장인물 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 \'요리하는 여자\'와 \'요리하는 남자\' 막대 두 개만 견주어 보인다.', base: '막대 네 개를 읽고 어느 쪽이 더 많은지 말한다.', challenge: '광고를 다시 만든다면 막대가 어떻게 바뀔지 손으로 높이를 그려 보인다.' },
        intro: {
          teacher: '"이 그래프는 장난감 광고 20편을 살펴봤다고 꾸민 가상 조사예요. 요리하는 인물과 운전하는 인물은 누구로 많이 나왔을까요?" 시연 단추로 가장 높은 막대(\'운전하는 남자\')를 고르는 모습을 보인다. "원래 그런 거예요"라는 말에는 "실제로는 누구나 요리하고 운전해요. 그런데 광고는 왜 이렇게 그렸을까요?"라고 되묻는다. 숫자는 가상이라는 점을 밝힌다.',
          student: '광고를 만든 사람은 왜 이렇게 그렸을지 까닭 하나를 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '장난감 광고 20편 속 인물(가상)', unit: '편', xLabel: '인물', yLabel: '나온 횟수', data: ADS, question: '가장 많이 나온 인물은?', choices: ADS.map((x) => x[0]) }, sequence: [{ pick: 3 }] },
          art: art('a paper bar chart with four bars beside a paper toy box and a small paper TV screen', '광고는 누구를 보여 줄까?', 'star', 'peach'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 조사처럼 말하지 않는다.',
      }),
      X('intro.job-cards', {
        title: '직업 카드, 누구나 할 수 있나', method: '직업 카드 누구나 할 수 있나 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 직업 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '직업 카드 8장이 모두 \'누구나 할 수 있다\'에 들어가는 시연을 보고 결과를 함께 확인한다.', challenge: '\'한 성별만\'이라고 생각했던 직업이 있다면 그 생각이 어디서 왔을지(광고·영상·주변 말) 말한다.' },
        intro: {
          teacher: '"간호사, 소방관, 요리사… 이 직업은 누구나 할 수 있을까요, 한 성별만 할 수 있을까요?" 먼저 학생들이 손을 들어 예상하게 한 뒤, 시연 단추로 카드가 모두 \'누구나 할 수 있다\'에 들어가는 모습을 보인다. "소방관은 힘이 세야 하니 남자 일이에요"라는 말에는 "소방관이 되는 시험은 성별이 아니라 체력과 능력을 봐요. 여자 소방관도 많아요"라고 말해 준다. 예상이 달랐던 학생을 탓하지 않는다.',
          student: '\'한 성별만\'이라고 생각하게 만드는 장면을 어디서 보았는지 짝에게 한 가지 말해 보아요.',
          demo: Object.assign(SDEMO('sortboard', ['누구나 할 수 있다', '한 성별만'], { '누구나 할 수 있다': JOBS, '한 성별만': [] })),
          art: art('paper job cards with simple tools (a fire hose, a chef hat, a stethoscope, a ball) on a paper shelf with two baskets', '이 일은 누가 할 수 있을까?', 'star', 'buttercup'),
        },
      }),
      X('activity.question-chars', {
        title: '캐릭터에게 질문 잇기', method: '게임 캐릭터에게 질문 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '캐릭터 가지 2개에 질문 카드를 붙인다.', base: '캐릭터 가지 3개에 질문 카드를 2장씩 붙인다(함정 카드 섞임).', challenge: '질문을 붙인 뒤, 둘째 문항에서 캐릭터마다 바꾼 설정 카드를 잇는다(맞지 않는 카드 섞임).' },
        activity: {
          title: '캐릭터에게 질문하기', tool: 'mindmap',
          teacher: '"게임 속 공주는 왜 늘 구출만 기다릴까요? 전사는 왜 늘 남자일까요?" 캐릭터 설명을 함께 읽고 질문 카드를 가지에 붙이게 한다. "게임은 그냥 재미라 상관없어요"라는 학생에게 "자주 보는 장면은 우리 생각에도 스며들어요. 질문하며 보면 재미도 지키고 생각도 넓어져요"라고 말해 준다. 둘째 문항에서는 바꾼 캐릭터가 더 재미있을지도 이야기하게 한다.',
          task: '캐릭터 가지마다 질문 카드를 붙이고, 고정관념 없이 바꾼 설정을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('캐릭터 가지마다 알맞은 질문 카드를 붙여요.', { topic: '질문하며 보기', slots: CHARS, easySlots: CHARS.slice(0, 2),
              groups: { [CHARS[0]]: ['공주가 스스로 나가면?', '왜 기다리기만 할까?'], [CHARS[1]]: ['여자 전사는 왜 없지?', '전사가 치료도 하면?'], [CHARS[2]]: ['아빠 요리사는 어때?', '요리사가 모험하면?'] },
              traps: ['캐릭터 옷 색깔은?'] }, 0.25),
            MATCH('캐릭터마다 고정관념 없이 바꾼 설정을 이어요.', [[CHARS[0], '지도를 읽어 길을 찾는 공주'], [CHARS[1], '여자·남자 섞인 전사 팀'], [CHARS[2], '가족이 돌아가며 요리']], { easy: 2, traps: ['분홍 옷만 입는 공주'], title: '바꾼 캐릭터', topic: '새 설정' }, 0.25,
              { conclude: '영상·게임 속 성 역할은 질문하며 봐요. 누구나 구하고, 싸우고, 요리할 수 있어요.' }),
            { prompt: '바꾼 캐릭터 가운데 가장 재미있을 것 같은 것을 골라 까닭을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 좋아하는 영상·게임 캐릭터에게 던질 질문 하나를 써요.' }] },
      }),
      X('activity.new-char', {
        title: '고정관념 없는 캐릭터 만들기', method: '색종이 조각으로 고정관념 없는 캐릭터 만들기', tool: 'collage', minutes: 14,
        levels: { easy: '캐릭터 몸·옷 조각 4개 이상을 붙인다.', base: '조각 4개로 캐릭터를 만든 뒤, 둘째 문항에서 능력 배지(별) 2개 이상을 붙인다.', challenge: '배지까지 붙이고, 셋째 문항에서 캐릭터 소개 문장을 정해 점검한 뒤 모둠에 발표한다(넷째 문항).' },
        activity: {
          title: '새 캐릭터 만들기', tool: 'collage',
          teacher: '"성별과 상관없이 고른 능력을 가진 캐릭터를 만들어 볼까요? 치료·건축·요리·수비 가운데 무엇을 줄까요?" 별 조각을 능력 배지로 쓰자고 약속한다. "여자 캐릭터는 분홍, 남자는 파랑이어야 해요"라는 말에는 "색도 누구나 좋아하는 걸 고를 수 있어요"라고 말해 준다. 캐릭터 이름에 반 친구 이름을 쓰지 않는다.',
          task: '색종이 조각으로 캐릭터를 만들고 능력 배지를 붙여 소개해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '색종이 조각 4개 이상으로 캐릭터의 몸과 옷을 만들어요.', toolOptions: { shapes: ['circle', 'rect', 'triangle', 'semi', 'square'], maxPieces: 12 }, target: { pieces: { min: 4 } }, difficulty: 0.1 },
            { prompt: '캐릭터에게 능력 배지(별)를 2개 이상 붙여요.', toolOptions: { shapes: ['star', 'circle', 'rect'], maxPieces: 10 }, target: { has: [{ shape: 'star', min: 2 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '캐릭터에게 능력 배지(별)를 1개 이상 붙여요.', target: { has: [{ shape: 'star', min: 1 }] } } } },
            { prompt: '캐릭터를 꾸미고 소개 문장을 정한 뒤 점검 칸에 표시해요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['성별과 상관없이 능력을 골랐다', '캐릭터 소개 문장을 정했다'], minPieces: 3 }, difficulty: 0.1,
              conclude: '능력은 성별이 아니라 하고 싶은 마음과 연습으로 생겨요.' },
            { prompt: '내 캐릭터의 능력과 소개 문장을 모둠에 발표해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 만든 캐릭터의 능력과 소개 문장을 써요.' }] },
      }),
      X('activity.group-roles', {
        title: '모둠 역할 정하기 갈림길', method: '모둠 역할 정하기 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(성별로 나누자는 말·정하는 방법)을 지나 근거를 고른다.', base: '갈림 3번(반대하는 친구가 나올 때 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 결과마다 모둠 활동이 어떻게 달라졌는지 견주어 말한다(셋째 문항).' },
        activity: {
          title: '갈림길: 모둠 역할 나누기', tool: 'dilemma',
          teacher: '"모둠에서 \'여자니까 기록, 남자니까 무거운 것 옮기기\'라는 말이 나왔어요. 어떻게 정하면 좋을까요?" 고를 때마다 결과와 모둠 친구들의 마음을 읽게 한다. "빨리 정하려면 그게 편해요"라는 말에는 "편한 방법이 모두에게 공평한지도 생각해 볼까요?"라고 묻는다. 결과마다 누가 무엇을 배우게 됐는지 견주게 한다.',
          task: '갈림길마다 고르고, 모둠 활동이 어떻게 달라지는지 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '모둠 역할 나누기',
            steps: [
              { text: '모둠에서 "여자니까 기록, 남자니까 무거운 것 옮기기"라는 말이 나왔어요.', motif: 'house',
                good: ['ask', '하고 싶은 역할을 먼저 묻자고 한다', '기록하고 싶은 남학생, 옮기고 싶은 여학생이 손을 들어요.', [['모둠 친구들', '하고 싶은 일을 해요', 1]]],
                bad: ['follow', '그냥 그 말대로 따른다', '하고 싶던 역할을 못 한 친구가 시무룩해요.', '성별로만 나누면 하고 싶은 마음과 잘하는 점이 사라져요.', [['모둠 친구들', '아쉬워요', -1]]] },
              { text: '하고 싶은 역할이 겹쳐요. 어떻게 정할까요?', motif: 'star',
                good: ['rotate', '돌아가며 맡자고 한다', '모두가 여러 역할을 해 보게 돼요.', [['모둠 친구들', '여러 일을 배워요', 1]]],
                bad: ['fixed', '목소리 큰 친구가 정한 대로 한다', '늘 같은 친구만 같은 일을 해요.', '한쪽만 정하면 공평하지 않아요.', [['모둠 친구들', '불공평해요', -1]]] },
              { text: '한 친구가 "원래 그렇게 하는 거야"라며 반대해요.', motif: 'cloud',
                good: ['reason', '누구나 할 수 있다고 까닭을 말하고 한 번 해 보자고 한다', '해 본 친구들이 "생각보다 잘 되네"라고 해요.', [['반대한 친구', '생각이 넓어져요', 1]]],
                bad: ['giveup', '말다툼이 싫어 처음 말대로 한다', '다음 활동에서도 같은 일이 되풀이돼요.', '존중하며 까닭을 말하면 생각을 바꿀 수 있어요.', [['모둠 친구들', '계속 아쉬워요', -1]]] },
            ],
            ending: '하고 싶은 마음을 묻고 돌아가며 맡아, 모두가 여러 역할을 배운 모둠이 되었어요.',
            reasons: [{ id: 'able', text: '역할은 성별이 아니라 하고 싶은 마음과 잘하는 점으로 정한다' }, { id: 'fair', text: '돌아가며 맡으면 모두 여러 일을 배운다' }, { id: 'nature', text: '여자 일·남자 일은 원래 정해져 있다', why: '일은 성별이 아니라 마음과 연습으로 해요.' }, { id: 'fast', text: '빨리 정하려면 성별로 나누는 게 낫다', why: '빠른 것보다 공평한 것이 모둠을 더 즐겁게 해요.' }],
            good: ['able', 'fair'],
            talk: '결과마다 모둠 활동이 어떻게 달라졌는지 견주어 모둠에서 말해요.',
            conclude: '모둠 역할은 하고 싶은 마음을 묻고 돌아가며 정해요. 성별로 미리 나누지 않아요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '모둠 역할을 공평하게 정하는 방법은?', options: ['성별로 나눈다', '하고 싶은 역할을 묻고 돌아가며 맡는다', '목소리 큰 친구가 정한다'], answer: '하고 싶은 역할을 묻고 돌아가며 맡는다' },
          { type: 'short', prompt: '"원래 그렇게 하는 거야"라는 친구에게 존중하며 건넬 말을 써요.' },
        ] },
      }),
      X('wrap.stop-words', {
        title: '성차별 장면에서 할 말 채우기', method: '성차별 장면 말풍선에 할 말 채우기', tool: 'story', minutes: 6,
        levels: { easy: '장면 하나("남자가 왜 울어?")의 말풍선을 채운다.', base: '장면 셋의 말풍선을 채운다(틀린 카드 섞임).', challenge: '말풍선을 채우고, 셋째 질문에 내 말투로 바꾼 문장을 쓴다.' },
        wrap: {
          teacher: '"\'남자가 왜 울어?\'라는 말을 들으면 어떻게 답할 수 있을까요?" 말풍선을 함께 읽고 채우게 한다. 상대를 깎아내리는 말이 아니라 멈추게 하는 말을 고르게 한다. "그냥 웃고 넘길래요"라는 학생에게 "웃고 넘기기 어려울 때 짧게 한마디만 해도 돼요"라고 말해 준다.',
          exitTicket: [
            EX('story', { prompt: '성차별 말을 들은 장면의 말풍선에 알맞은 답을 넣어요.', toolOptions: { mode: 'fill', title: '이럴 땐 이렇게', slots: [{ id: 'w1', who: '나', label: '"남자가 왜 울어?"에는 "___"' }, { id: 'w2', who: '나', label: '"여자가 무슨 축구야?"에는 "___"' }, { id: 'w3', who: '나', label: '"남자가 무슨 요리야?"에는 "___"' }], cards: ['누구나 슬프면 울 수 있어', '누구나 축구할 수 있어', '요리는 누구나 해', '울면 약한 거야'] }, target: { fill: { w1: '누구나 슬프면 울 수 있어', w2: '누구나 축구할 수 있어', w3: '요리는 누구나 해' } }, difficulty: 0.15,
              levels: { easy: { prompt: '"남자가 왜 울어?" 장면의 말풍선에 알맞은 답을 넣어요.', toolOptions: { slots: [{ id: 'w1', who: '나', label: '"남자가 왜 울어?"에는 "___"' }], cards: ['누구나 슬프면 울 수 있어', '울면 약한 거야'] }, target: { fill: { w1: '누구나 슬프면 울 수 있어' } } } } }),
            { type: 'choice', prompt: '성차별 말에 답하는 알맞은 태도는?', options: ['똑같이 놀린다', '존중하며 짧게 멈추게 한다', '못 들은 척한다'], answer: 1, difficulty: 0.15, explain: '상대를 깎아내리지 않고 짧게 멈추게 하는 말이 힘이 있어요.' },
            { type: 'short', prompt: '골라 넣은 말 하나를 내 말투로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '성차별에 말하기',
          items: [
            { type: 'short', prompt: '"여자니까/남자니까" 말을 들었을 때 할 말을 써요.' },
            { type: 'choice', prompt: '성 역할 고정관념에 대해 바른 말은?', options: ['여자 일·남자 일은 정해져 있다', '누구나 하고 싶은 일을 할 수 있다', '게임 속 장면은 생각에 영향이 없다'], answer: '누구나 하고 싶은 일을 할 수 있다' },
          ],
        },
      }),
      X('wrap.week-hunt', {
        title: '이번 주 고정관념 찾기 기록판', method: '이번 주 고정관념 찾기 기록판 만들기', tool: 'timer', minutes: 6,
        levels: { easy: '장소 한 곳(영상)에서 찾은 고정관념 장면 수를 적는다.', base: '장소 세 곳(집·학교·영상)에서 찾은 장면 수를 적는다.', challenge: '장면 수를 적고, 셋째 질문에 찾은 장면을 바꾼 문장을 쓴다.' },
        wrap: {
          teacher: '"이번 주에는 고정관념 탐정이 되어 볼까요? 집·학교·영상에서 \'여자니까/남자니까\' 장면을 찾아 세어 봐요." 오늘은 수업 중에 떠오른 장면 수로 첫 기록을 넣게 한다. 가족이나 친구를 탓하려는 기록이 아니라 장면을 알아차리는 기록이라고 말해 준다. "하나도 못 찾았어요"도 괜찮은 기록이라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '고정관념 찾기 첫 기록', fields: [{ label: '집', unit: '번' }, { label: '학교', unit: '번' }, { label: '영상', unit: '번' }] }, prompt: '오늘 떠오른 고정관념 장면 수를 장소마다 적어요.', target: { records: true }, difficulty: 0.1,
              levels: { easy: { prompt: '영상에서 떠오른 고정관념 장면 수를 적어요.', toolOptions: { fields: [{ label: '영상', unit: '번' }] } } } },
            { type: 'choice', prompt: '고정관념 장면을 찾았을 때 할 일은?', options: ['그대로 따라 한다', '질문하며 다르게 생각해 본다', '친구를 탓한다'], answer: 1, difficulty: 0.1, explain: '"왜 그렇게만 그렸을까?" 질문하면 생각이 넓어져요.' },
            { type: 'short', prompt: '찾은 장면 하나를 고정관념 없는 문장으로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '고정관념 탐정 기록판',
          items: [
            { type: 'table', prompt: '날마다 찾은 고정관념 장면 수를 적어요.', columns: ['장소', '월', '화', '수', '목', '금'], cells: [['집', '', '', '', '', ''], ['학교', '', '', '', '', ''], ['영상', '', '', '', '', '']] },
            { type: 'short', prompt: '찾은 장면 하나를 바꾼 문장으로 써요.' },
          ],
        },
        notes: '기록은 학생이 스스로 적는 값으로 채점하지 않는다. 가족의 집안일 분담 같은 가정 사정을 발표하게 하지 않는다.',
      }),
    );
  }

  // ======== 5학년 · 조르기·겁주기·대가는 동의가 아니에요 (표준안 초 '몸의 경계·싫어요 말하기') ========
  {
    const X = mk('consent', 5);
    const CRIT = [{ id: 'clear', text: '분명하게 "좋아"라고 했다' }, { id: 'free', text: '조르거나 겁주지 않았다' }, { id: 'nogift', text: '대가를 걸지 않았다' }, { id: 'change', text: '싫으면 바꿔도 된다고 했다' }];
    const CASE = (prompt, pass, easyIds, d, more) => Object.assign({
      prompt, toolOptions: { mode: 'checklist', title: '동의 점검표', items: CRIT }, target: { checklist: pass }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(항목 두 개).`, toolOptions: { items: CRIT.filter((c) => easyIds.includes(c.id)) }, target: { checklist: pass.filter((p) => easyIds.includes(p)) } } },
    }, more);
    M.push(
      X('intro.face-read', {
        title: '표정과 몸짓 읽기', method: '물었을 때 상대 표정과 몸짓 읽기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 두 개("안아도 돼?"·"같이 사진 찍자")에 표정 카드가 이어지는 시연을 본다.', base: '장면 네 개에 표정 카드가 이어지는 시연을 보고 까닭을 말한다.', challenge: '망설이는 표정에서 다음에 할 말("싫으면 안 해도 돼")을 말로 고른다.' },
        intro: {
          teacher: '"친구에게 \'안아도 돼?\' 하고 물었어요. 대답은 말로만 올까요?" 시연 단추로 장면마다 웃음·망설임·찡그림 표정 카드가 이어지는 모습을 보인다. "대답을 안 했으니 괜찮은 거예요"라는 말에는 "말이 없고 망설이면 \'좋아\'가 아니에요. 분명한 \'좋아\'일 때만 해요"라고 말해 준다. 오늘은 동의와 동의가 아닌 것을 가려 본다고 밝힌다.',
          student: '망설이는 표정을 본다면 어떤 말을 건넬지 짝에게 한 문장으로 말해 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 'hug', label: '"안아도 돼?" 하고 물음' }, { id: 'photo', label: '"같이 사진 찍자" 하고 물음' }, { id: 'ball', label: '"공 같이 할래?" 하고 물음' }, { id: 'hand', label: '"손잡고 갈래?" 하고 물음' }], cards: ['웃음', '망설임', '찡그림'] }, sequence: [{ match: { hug: '망설임', photo: '찡그림' } }, { match: { hug: '망설임', photo: '찡그림', ball: '웃음', hand: '망설임' } }] },
          art: art('paper children facing each other, one smiling, one hesitating with a small paper question mark, simple paper faces', '대답은 표정에도 있어요', 'star', 'lavender'),
        },
      }),
      X('intro.yes-or-not', {
        title: '동의일까 아닐까', method: '대답 카드 동의·동의 아님 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 동의·동의 아님 바구니에 다 들어가는 시연을 보고 까닭을 말한다.', challenge: '동의 아님 카드마다 무엇이 문제인지(조르기·겁주기·대가·망설임) 이름을 붙여 말한다.' },
        intro: {
          teacher: '"\'알았어\'라고 대답했으면 동의일까요?" 카드를 하나씩 읽고 시연 단추로 바구니에 들어가는 모습을 보인다. "다섯 번 졸라서 \'알았어\'라고 했으면 결국 좋다는 거예요"라는 말에는 "조르기에 지쳐서 한 대답은 자유로운 대답이 아니에요"라고 말해 준다. 동의는 분명한 \'좋아\'이고, 조르기·겁주기·대가로 얻은 대답은 동의가 아니라고 정리한다.',
          student: '동의 아님 바구니의 카드 하나를 골라 무엇이 문제인지 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['동의', '동의 아님'], { 동의: ['"응, 좋아!"(웃으며)', '"좋아, 같이 하자!"', '"그래, 해 볼래!"(신나서)', '"좋아, 그런데 조금만"'], '동의 아님': ['"…알았어"(다섯 번 조른 뒤)', '"과자 주면 해 줄게"', '"안 하면 안 놀아 줘"에 "응"', '대답 없이 고개를 숙임'] }),
          art: art('two paper baskets with speech bubble cards, one bubble with a bright paper sun and one with a grey paper cloud', '분명한 "좋아"가 동의예요', 'sun', 'peach'),
        },
      }),
      X('activity.three-steps', {
        title: '동의 묻기 세 단계', method: '동의 묻기 세 단계 장면과 말풍선', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장(묻기·대답 듣기·싫다면 멈추기)의 차례만 놓는다.', base: '장면 차례를 놓고, 둘째 문항에서 단계마다 말풍선 3칸을 채운다.', challenge: '틀린 장면(대답 전에 해 버리기)을 빼고 차례를 놓은 뒤, 셋째 문항에서 "잘 모르겠어"라는 대답일 때 할 말을 고른다(헷갈리는 카드 섞임).' },
        activity: {
          title: '묻고, 듣고, 멈추기', tool: 'story',
          teacher: '"친구 몸에 닿거나 친구 물건을 쓸 때는 먼저 묻고, 대답을 잘 듣고, 싫다면 멈춰요." 장면을 놓은 뒤 말풍선을 소리 내어 읽게 한다. "물어보면 어색해요"라는 학생에게 "묻는 건 친구를 아끼는 말이에요"라고 말해 준다. 셋째 문항에서 "잘 모르겠어"는 \'좋아\'가 아니라는 점을 짚는다.',
          task: '동의 묻기 세 단계를 차례대로 놓고, 단계마다 할 말을 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('동의를 묻는 세 단계를 차례대로 놓아요.', ['먼저 묻기', '대답 잘 듣기', '싫다면 멈추기'], { easy: [0, 1, 2], trap: '대답 전에 해 버리기', motifs: ['star', 'leaf', 'sun'] }, 0.15),
            { prompt: '단계마다 할 말을 말풍선에 넣어요.', toolOptions: { mode: 'fill', title: '은우와 짝(지어낸 장면)', slots: [{ id: 'b1', who: '은우', label: '묻기: "___"' }, { id: 'b2', who: '은우', label: '듣기: "___"' }, { id: 'b3', who: '은우', label: '멈추기: "___"' }], cards: ['안아도 돼?', '천천히 말해도 돼', '알겠어, 안 할게', '그냥 할게'] }, target: { fill: { b1: '안아도 돼?', b2: '천천히 말해도 돼', b3: '알겠어, 안 할게' } }, difficulty: 0.2,
              levels: { easy: { prompt: '묻기와 멈추기 말풍선에 할 말을 넣어요(빈칸 두 개).', toolOptions: { slots: [{ id: 'b1', who: '은우', label: '묻기: "___"' }, { id: 'b3', who: '은우', label: '멈추기: "___"' }], cards: ['안아도 돼?', '알겠어, 안 할게', '그냥 할게'] }, target: { fill: { b1: '안아도 돼?', b3: '알겠어, 안 할게' } } } } },
            PICK('짝이 "잘 모르겠어"라고 할 때 할 말만 골라요.', '"잘 모르겠어"에는', ['그럼 안 할게', '나중에 다시 물을게'], ['그럼 해도 되지?', '빨리 정해'], { easy: 1, easyTraps: 1, extraTraps: ['싫다고는 안 했잖아'] }, 0.25,
              { conclude: '먼저 묻고, 대답을 잘 듣고, 싫다면 멈춰요. "잘 모르겠어"는 \'좋아\'가 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '동의 묻기는 먼저 묻기 → 대답 잘 듣기 → 싫다면 ___ 예요.', answer: '멈추기' }] },
      }),
      X('activity.consent-check', {
        title: '동의 점검표로 사례 살피기', method: '동의 점검표로 가상 사례 살피기', tool: 'kitchen', minutes: 14,
        levels: { easy: '사례마다 점검 항목 2개만 보고, 그 사례에 맞는 항목에 표시한다.', base: '사례 3개를 점검 항목 4개로 살펴 맞는 항목에만 표시한다.', challenge: '사례 3개를 점검한 뒤, 모든 항목을 통과하도록 사례 하나를 고쳐 짝에게 말한다(넷째 문항).' },
        activity: {
          title: '동의 점검표', tool: 'kitchen',
          teacher: '"점검표 네 줄은 동의를 살피는 질문이에요. 분명한가, 자유로운가, 대가가 없나, 바꿀 수 있나." 사례를 소리 내어 읽고 그 사례가 지킨 항목에만 표시하게 한다. "선물을 줬으니 해 줘야 해요"라는 말에는 "선물은 고마운 마음이지, 대신 무엇을 해야 하는 약속이 아니에요"라고 말해 준다. 사례는 모두 지어낸 것이다.',
          task: '사례를 읽고, 동의 점검표에서 그 사례가 지킨 항목에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CASE('사례 1: "같이 그네 탈래?" "응, 좋아! 싫으면 말할게"가 지킨 항목에 표시해요.', ['clear', 'free', 'nogift', 'change'], ['clear', 'nogift'], 0.15),
            CASE('사례 2: 다섯 번 조르자 "…알았어"라고 했어요. 지킨 항목에 표시해요.', ['nogift'], ['clear', 'nogift'], 0.25),
            CASE('사례 3: "과자 줄게, 대신 숙제 보여 줘" "…응". 지킨 항목에 표시해요.', ['free'], ['free', 'nogift'], 0.25,
              { conclude: '분명하고, 자유롭고, 대가가 없고, 언제든 바꿀 수 있어야 동의예요.' }),
            { prompt: '사례 2나 3을 골라 모든 항목을 통과하도록 고쳐 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '동의가 되려면 필요한 것에 모두 표시해요.', options: ['분명한 "좋아"', '조르지 않기', '대가 걸지 않기', '언제든 바꿀 수 있음'] }] },
      }),
      X('activity.pushy-play', {
        title: '같이 놀자고 조르는 친구 갈림길', method: '놀이를 조르는 친구 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(조르기·겁주기)을 지나 근거를 고른다.', base: '갈림 3번(조른 친구 결의 선택 더함)을 지나 근거를 고른다.', challenge: '결이 사과하는 끝 장면까지 가서 근거를 모두 고르고, 그 까닭을 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '갈림길: 자꾸 조르는 친구', tool: 'dilemma',
          teacher: '"은우는 오늘 그 놀이가 싫다고 했어요. 그런데 결이 계속 조르고 \'안 하면 단체방에서 뺀다\'고 해요." 고를 때마다 은우와 결의 마음을 읽게 한다. "친구가 그렇게 원하면 해 줘야 해요"라는 말에는 "거절은 친구를 싫어하는 게 아니라 내 마음을 말하는 거예요. 거절도 존중받아야 해요"라고 말해 준다. 잘못은 겁준 쪽에 있고, 알린 은우는 잘한 것이라고 분명히 한다.',
          task: '갈림길마다 은우와 결의 선택을 고르고, 결과를 읽은 뒤 동의의 조건을 근거로 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '자꾸 조르는 친구',
            steps: [
              { text: '은우가 놀이가 싫다고 했는데 결이 "한 번만, 제발" 하고 계속 졸라요.', motif: 'cloud',
                good: ['clear', '"싫어, 오늘은 안 할래"라고 분명히 말한다', '결이 잠깐 멈춰요.', [['은우', '내 마음을 지켜요', 1]]],
                bad: ['giveup', '귀찮아서 "…알았어"라고 한다', '은우는 하기 싫은 놀이를 하며 속상해요.', '졸라서 얻은 "알았어"는 동의가 아니에요.', [['은우', '속상해요', -1]]] },
              { text: '결이 "안 하면 단체방에서 뺄 거야"라고 겁을 줘요.', motif: 'wind',
                good: ['tell', '선생님께 알린다', '선생님이 둘과 이야기 시간을 가져요.', [['은우', '보호받아요', 1]]],
                bad: ['fear', '무서워서 하기로 한다', '다음에도 겁주면 된다고 결이 생각해요.', '겁을 줘서 얻은 대답은 동의가 아니에요.', [['은우', '계속 겁나요', -1]]] },
              { text: '선생님과 이야기한 뒤, 결은 어떻게 할까요?', motif: 'sun',
                good: ['sorry', '은우에게 사과하고 거절을 받아들인다', '둘은 다른 놀이를 함께 해요.', [['은우', '존중받아요', 1], ['결', '좋은 친구가 돼요', 1]]],
                bad: ['again', '다른 날 또 조른다', '은우가 결을 피하게 돼요.', '거절을 받아들여야 함께 놀 수 있어요.', [['은우', '불편해요', -1]]] },
            ],
            ending: '은우는 분명히 거절하고 알렸고, 결은 사과하고 거절을 받아들였어요.',
            reasons: [{ id: 'free', text: '동의는 조르기·겁주기 없이 자유롭게 하는 것이다' }, { id: 'accept', text: '거절도 존중받아야 한다' }, { id: 'many', text: '여러 번 조르면 결국 동의가 된다', why: '지쳐서 한 대답은 자유로운 대답이 아니에요.' }, { id: 'gift', text: '선물을 주면 해 줘야 한다', why: '선물은 대가가 아니에요.' }],
            good: ['free', 'accept'],
            talk: '결이 사과하는 끝 장면이 왜 가장 좋은지 모둠에서 까닭을 말해요.',
            conclude: '조르기·겁주기·대가로 얻은 대답은 동의가 아니에요. 거절은 존중해요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '친구가 거절했을 때 알맞은 행동은?', options: ['계속 조른다', '"알겠어"라고 받아들인다', '겁을 준다'], answer: '"알겠어"라고 받아들인다' },
          { type: 'short', prompt: '친구가 계속 조를 때 분명하게 거절하는 말을 한 문장으로 써요.' },
        ] },
      }),
      X('wrap.no-rhythm', {
        title: '분명한 거절말 리듬 연습', method: '분명한 거절말 리듬 연습', tool: 'keyboard', minutes: 6,
        levels: { easy: '거절말 한 마디("싫어요")의 리듬을 듣고 따라 놓는다.', base: '거절말 세 마디("싫어요·멈춰요·안 할래요")에 마디마다 4박 리듬을 짓는다.', challenge: '네 마디(거절을 들었을 때 하는 "알겠어" 더함)에 4박 리듬을 짓는다.' },
        wrap: {
          teacher: '"싫어요! 멈춰요! 안 할래요!" 반 전체가 분명한 목소리로 말해 본 뒤 리듬 블록으로 마디를 짓게 한다. 작게 말하는 학생에게 "눈을 보고 또박또박 말하면 더 분명해져요"라고 말해 준다. 거절을 들었을 때는 "알겠어"라고 받아들이는 것까지 연습이라고 말해 준다. \'괜찮아\'는 좋다는 뜻으로도 들릴 수 있어 거절말로 쓰지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 3, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '거절말 세 마디에 마디마다 4박이 되게 리듬을 지어요.', target: { beats: true }, difficulty: 0.15,
              levels: {
                easy: { prompt: '"싫어요" 한 마디 리듬을 듣고 똑같이 블록을 놓아요.', toolOptions: { measures: 1, pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] } },
                challenge: { prompt: '거절말 세 마디와 "알겠어" 한 마디에 4박 리듬을 지어요.', toolOptions: { measures: 4 }, target: { beats: true } },
              } },
            { type: 'choice', prompt: '거절을 들었을 때 알맞은 대답은?', options: ['"한 번만 더"', '"알겠어"', '"왜 싫은데?"'], answer: 1, difficulty: 0.1, explain: '거절을 들으면 "알겠어"라고 받아들여요.' },
          ],
        },
        worksheet: {
          title: '분명한 거절말',
          items: [
            { type: 'short', prompt: '싫을 때 분명하게 할 거절말을 써요.' },
            { type: 'choice', prompt: '동의가 아닌 것은?', options: ['웃으며 "좋아!"', '다섯 번 조른 뒤 "…알았어"', '"그래, 같이 하자!"'], answer: '다섯 번 조른 뒤 "…알았어"' },
          ],
        },
      }),
      X('wrap.own-words', {
        title: '동의 뜻을 내 말로 쓰기', method: '동의 뜻을 내 말로 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("동의란 ___")의 빈칸을 채워 쓰고 기준 2개를 점검한다.', base: '두 문장으로 쓰고 기준 3개(자유로움·분명함·바꿀 수 있음)를 점검한다.', challenge: '예시 상황을 넣어 세 문장으로 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"오늘 배운 동의를 내 말로 설명한다면?" 기준표 세 낱말(자유롭게·분명하게·바꿀 수 있게)을 함께 읽는다. "동의는 \'응\'이라고 하는 거예요"라고 쓴 학생에게 "조른 뒤의 \'응\'도 동의일까요? 무엇을 더 넣으면 좋을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { title: '동의를 내 말로', topic: '"동의란 ___"으로 시작해 동의의 뜻을 두 문장으로 써요.', minChars: 20, maxChars: 160 }, prompt: '동의의 뜻을 내 말로 두 문장으로 써요.', target: { selfCheck: ['자유롭게 하는 것을 넣었다', '분명한 "좋아"를 넣었다', '바꿀 수 있음을 넣었다'], chars: [20, 160], sentences: [2, 3] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '동의의 뜻을 문장 틀의 빈칸을 채워 써요.', toolOptions: { starter: '동의란 ___ 하는 것이다. 마음이 바뀌면 ___.' }, target: { selfCheck: ['자유롭게 하는 것을 넣었다', '분명한 "좋아"를 넣었다'], chars: [10, 160] } },
                challenge: { prompt: '동의의 뜻을 예시 상황을 넣어 세 문장으로 써요.', target: { selfCheck: ['자유롭게 하는 것을 넣었다', '분명한 "좋아"를 넣었다', '바꿀 수 있음을 넣었다', '예시 상황을 넣었다'], chars: [40, 200], sentences: [3, 4] } },
              } },
            { type: 'choice', prompt: '동의에 대해 바른 말은?', options: ['한 번 좋다고 하면 바꿀 수 없다', '언제든 마음을 바꿀 수 있다', '선물을 받으면 해 줘야 한다'], answer: 1, difficulty: 0.15, explain: '동의는 언제든 바꿀 수 있어요.' },
          ],
        },
        worksheet: {
          title: '동의를 내 말로',
          items: [
            { type: 'short', prompt: '"동의란 ___"으로 시작해 동의의 뜻을 써요.' },
            { type: 'check', prompt: '동의가 아닌 것에 표시해요.', options: ['조른 뒤의 "응"', '겁을 준 뒤의 "응"', '대가를 건 "응"', '대답 없이 망설임'] },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 성희롱 알아차리고 대처하기 (표준안 초 '몸의 경계·싫어요 말하기'·'성폭력 신고 방법', 성폭력 예방교육) ========
  {
    const X = mk('harassment', 5);
    const SURVEY = [['참는다', 18], ['그만하라고 말한다', 7], ['어른에게 알린다', 5]];
    const AROUND = [P('5학년 2반 교실', 'school', [1, 0]), P('상담실', 'office', [3, 0]), P('보건실', 'hospital', [5, 1]), P('운동장', 'park', [0, 2]), P('집', 'house', [4, 3]), P('놀이터', 'park', [1, 3])];
    const PIN = (prompt, place, d, more) => Object.assign({ type: 'tool', tool: 'map', options: { grid: [6, 4], title: '학교와 동네 도움 지도(가상)', places: AROUND }, prompt, target: { place }, difficulty: d }, more);
    const YUNA = '쉬는 시간, 한 친구가 유나의 몸을 두고 성적인 농담을 했어요. 유나는 굳은 얼굴이에요. 나는 옆에 있어요.';
    M.push(
      X('intro.joke-or-not', {
        title: '장난일까 성희롱일까', method: '장난과 성희롱일 수 있는 말 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 \'괜찮음\'·\'성희롱일 수 있음\'에 다 들어가는 시연을 본다.', challenge: '"듣는 사람이 불편하면 문제"라는 기준을 판단 근거로 들어 카드 하나를 설명한다.' },
        intro: {
          teacher: '"웃자고 한 말이면 다 괜찮을까요?" 카드를 소리 내어 읽고 시연 단추로 바구니에 들어가는 모습을 보인다. 실제 놀림 말은 읽지 않고 \'몸매를 두고 평가하는 말\'처럼 묶어서만 말한다. "말한 사람이 장난이라고 하면 장난이에요"라는 말에는 "듣는 사람이 불편하고 몸이나 성을 두고 한 말이면 성희롱일 수 있어요. 기준은 듣는 사람의 마음이에요"라고 말해 준다.',
          student: '\'성희롱일 수 있음\' 바구니의 카드 하나를 골라, 왜 그런지 \'듣는 사람의 마음\'으로 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['괜찮음', '성희롱일 수 있음'], { 괜찮음: ['모두 함께 웃는 이야기', '친구 그림을 칭찬하는 말', '좋아하는 게임 이야기', '"같이 놀자" 부르기'], '성희롱일 수 있음': ['몸매를 두고 평가하는 말', '성적인 별명 부르기', '옷차림을 두고 놀리는 말', '몸을 두고 하는 성적인 농담'] }),
          art: art('two paper baskets on a shelf, one with a bright paper smile card and one with a paper stop hand card', '듣는 사람의 마음이 기준이에요', 'star', 'rose'),
        },
        notes: '카드에 실제 놀림 말·몸 평가 말을 쓰지 않는다. 학생에게 들어 본 말을 말하게 하지 않는다.',
      }),
      X('intro.survey-graph', {
        title: '가상 학교 설문 그래프 읽기', method: '불편한 농담 설문 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 막대 하나를 고른다.', base: '막대 세 개를 견주어 말한다.', challenge: '"알린다"를 늘리려면 학교에 무엇이 필요할지(믿어 주는 어른·비밀 지키기) 말한다.' },
        intro: {
          teacher: '"어느 학교 학생들이 \'불편한 농담을 들으면 어떻게 하나요?\'에 답했다고 꾸민 가상 설문이에요. 가장 많은 답은 무엇일까요?" 시연 단추로 \'참는다\'를 고르는 모습을 보인다. "참으면 해결돼요"라는 말에는 "참으면 말한 사람은 괜찮은 줄 알고 되풀이할 수 있어요. 말하고 알리는 길을 같이 배워요"라고 말해 준다. 숫자는 가상이라고 밝힌다.',
          student: '\'참는다\'가 가장 많은 까닭을 모둠에서 하나 골라 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '불편한 농담을 들으면(가상 설문)', unit: '명', xLabel: '답', yLabel: '학생 수', data: SURVEY, question: '가장 많은 답은?', choices: SURVEY.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper bar chart with three bars, the tallest bar has a small paper zipper mouth on top', '참지 않아도 돼요', 'cloud', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.stop-record-tell', {
        title: '멈추기·기록·알리기 차례', method: '멈추기·기록·알리기 대처 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장(멈추기·기록·알리기)의 차례를 놓는다(바로 맞는지 보임).', base: '장면 3장의 차례를 놓고, 둘째 문항에서 유나의 말풍선 3칸을 채운다.', challenge: '셋째 문항에서 친구가 함께 가 주는 장면을 더해 4장을 차례대로 놓는다(틀린 장면 섞임).' },
        activity: {
          title: '유나의 대처 차례', tool: 'story',
          teacher: '"유나는 성적인 농담을 들었어요. 무엇부터 할 수 있을까요?" 장면 카드를 놓은 뒤 차례를 소리 내어 읽게 한다. "기록은 왜 해요?"라는 질문에는 "언제·어디서·무슨 일이었는지 적어 두면 어른이 도울 때 큰 힘이 돼요"라고 말해 준다. "그만해"라고 말하기 어려우면 그 자리를 떠나 바로 알려도 된다는 점, 잘못은 말한 사람에게 있다는 점을 분명히 한다.',
          task: '유나가 성적인 농담을 들은 뒤 할 일을 차례대로 놓고, 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('유나가 성적인 농담을 들은 뒤 할 일을 차례대로 놓아요.', ['"그만해"라고 말하기', '날짜·들은 말 적어 두기', '담임·보건 선생님께 알리기'], { easy: [0, 1, 2], motifs: ['star', 'leaf', 'house'] }, 0.15),
            { prompt: '유나의 말풍선 빈칸에 알맞은 말을 넣어요.', toolOptions: { mode: 'fill', title: '유나의 대처(지어낸 장면)', slots: [{ id: 'b1', who: '유나', label: '멈추기: "___"' }, { id: 'b2', who: '유나', label: '기록: "___"' }, { id: 'b3', who: '유나', label: '알리기: "___"' }], cards: ['그런 말 하지 마', '언제·어디서인지 적자', '선생님, 도와주세요', '참고 넘기자'] }, target: { fill: { b1: '그런 말 하지 마', b2: '언제·어디서인지 적자', b3: '선생님, 도와주세요' } }, difficulty: 0.2,
              levels: { easy: { prompt: '유나의 멈추기·알리기 말풍선에 알맞은 말을 넣어요(빈칸 두 개).', toolOptions: { slots: [{ id: 'b1', who: '유나', label: '멈추기: "___"' }, { id: 'b3', who: '유나', label: '알리기: "___"' }], cards: ['그런 말 하지 마', '선생님, 도와주세요', '참고 넘기자'] }, target: { fill: { b1: '그런 말 하지 마', b3: '선생님, 도와주세요' } } } } },
            ORDER('친구가 함께 가 주는 장면을 더해 대처 차례를 놓아요.', ['"그만해"라고 말하기', '날짜·들은 말 적어 두기', '친구가 함께 가 주기', '선생님께 함께 알리기'], { easy: [0, 1, 3], trap: '모두 비밀로 하기', title: '함께하는 대처' }, 0.25,
              { conclude: '멈추라고 말하고, 기록하고, 믿는 어른께 알려요. 친구가 함께 가 주면 더 든든해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '성희롱을 겪거나 보면 멈추기 → ___ → 알리기 차례로 해요.', answer: '기록하기' }] },
        notes: '장면은 지어낸 것이다. 농담의 실제 내용은 쓰지 않는다.',
      }),
      X('activity.bystander', {
        title: '주변에 있던 친구라면', method: '주변 친구로서 행동 고르고 결과 보기', tool: 'emotion', minutes: 14,
        levels: { easy: '문항마다 보기 2개 가운데 유나를 돕는 행동을 고른다.', base: '보기 4개(따라 웃기·화제 돌리기·곁에 서기·어른께 알리기) 가운데 돕는 행동을 고르고 결과와 유나의 마음을 읽는다.', challenge: '셋째 문항에서 두 행동을 함께 했을 때(곁에 서고 함께 알리기)의 결과를 본 뒤, 결과를 모둠에서 견주어 말한다(넷째 문항).' },
        activity: {
          title: '주변 친구의 선택', tool: 'emotion',
          teacher: '"내가 유나 옆에 있었다면 무엇을 할 수 있을까요?" 보기를 고를 때마다 결과 글과 유나의 마음을 소리 내어 읽게 한다. "나는 상관없으니 가만히 있을래요"라는 학생에게 "옆에 있는 친구 한 명이 유나 마음을 크게 바꿀 수 있어요"라고 말해 준다. 직접 맞서기 어려우면 곁에 서거나 어른께 알리는 것도 돕는 일이라고 짚는다.',
          task: '유나 옆에 있는 내가 할 행동을 고르고, 결과와 유나의 마음을 읽어요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            BRANCH('유나 옆에 있는 내가 할 수 있는 돕는 행동을 골라요.', { situation: YUNA, who: '나', motif: 'cloud', choices: [
              { id: 'laugh', text: '따라 웃기', result: '농담이 더 커지고 유나는 고개를 숙여요.', mood: '속상함', why: '따라 웃으면 농담이 더 커져요.' },
              { id: 'change', text: '화제를 다른 이야기로 돌리기', result: '농담이 잠깐 멈춰요.', mood: '걱정' },
              { id: 'near', text: '유나 곁에 서기', result: '유나가 혼자가 아니라고 느껴요.', mood: '편안함' },
              { id: 'tell', text: '선생님께 알리기', result: '선생님이 농담을 멈추게 해요.', mood: '편안함' },
            ], good: ['change', 'near', 'tell'], easyIds: ['laugh', 'near'] }, 0.15),
            BRANCH('다음 날 같은 친구가 또 그런 농담을 해요. 돕는 행동을 골라요.', { situation: '다음 날 같은 친구가 또 유나에게 성적인 농담을 해요.', who: '나', motif: 'storm', choices: [
              { id: 'ignore', text: '어제 일이니 모른 척하기', result: '농담이 날마다 되풀이돼요.', mood: '속상함', why: '되풀이되면 꼭 어른께 알려요.' },
              { id: 'tell', text: '어제와 오늘 일을 선생님께 알리기', result: '선생님이 두 사람과 이야기해요.', mood: '편안함' },
              { id: 'same', text: '똑같이 농담으로 갚기', result: '싸움이 커져요.', mood: '화남', why: '똑같이 갚으면 문제가 더 커져요.' },
            ], good: 'tell', easyIds: ['ignore', 'tell'] }, 0.2),
            BRANCH('두 행동을 함께 하면 어떻게 될지 가장 든든한 선택을 골라요.', { situation: YUNA, who: '나', motif: 'sun', choices: [
              { id: 'one', text: '혼자 조용히 걱정만 하기', result: '유나는 내 마음을 몰라요.', mood: '걱정', why: '걱정하는 마음을 행동으로 보여 줘요.' },
              { id: 'both', text: '곁에 서고 함께 선생님께 가기', result: '유나가 든든해하고 선생님이 돕기 시작해요.', mood: '편안함' },
              { id: 'post', text: '단체방에 그 친구 이야기 올리기', result: '소문이 퍼져 유나가 더 곤란해져요.', mood: '속상함', why: '단체방에 올리면 유나 이야기까지 퍼져요.' },
            ], good: 'both', easyIds: ['one', 'both'] }, 0.2,
              { conclude: '주변 친구는 곁에 서고, 화제를 돌리고, 어른께 알릴 수 있어요. 함께 하면 더 든든해요.' }),
            { prompt: '세 문항의 결과를 견주어, 유나에게 가장 힘이 된 행동을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '주변 친구로서 할 수 있는 돕는 행동에 표시해요.', options: ['곁에 서기', '화제 돌리기', '어른께 알리기', '따라 웃기'] }] },
        notes: '이야기는 지어낸 것이다. 반에서 이런 일이 있었는지 묻지 않는다.',
      }),
      X('activity.stop-poster', {
        title: '우리 반 성희롱 멈춤 포스터', method: '모둠 성희롱 멈춤 포스터 만들기', tool: 'collage', minutes: 27,
        levels: { easy: '신호 조각(세모) 2개를 붙이고, 둘째 문항은 정해진 틀(긴 네모 도움 칸이 붙어 있음)에 조각을 더한다.', base: '알아차리는 신호 2개(세모)·할 말 1개(동그라미)·알릴 사람(하트)·도움 칸(긴 네모)을 모두 넣어 포스터를 꾸민다.', challenge: '네 요소를 넣고, 셋째 문항에서 포스터를 본 친구가 할 일을 한 문장 구호로 정해 점검한다.' },
        activity: {
          title: '성희롱 멈춤 포스터', tool: 'collage',
          teacher: '"우리 반 친구들이 포스터를 보고 바로 알아차리고 움직일 수 있게 만들어 볼까요?" 세모는 알아차리는 신호, 동그라미는 할 말, 하트는 알릴 사람, 긴 네모는 도움 칸이라고 약속한다. 도움 칸에는 학교가 확인해 알려 주는 신고·상담 번호를 교사가 나중에 적어 넣는다. "무서운 그림을 넣어야 눈에 띄어요"라는 말에는 "보는 친구가 겁먹지 않고 도움을 떠올리게 만들어요"라고 말해 준다.',
          task: '모둠이 신호·할 말·알릴 사람·도움 칸 조각을 붙여 성희롱 멈춤 포스터를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '알아차리는 신호를 뜻하는 세모 조각을 2개 붙여요.', toolOptions: { shapes: ['triangle', 'circle', 'heart', 'rect'], maxPieces: 8 }, target: { has: [{ shape: 'triangle', min: 2 }] }, difficulty: 0.1 },
            { prompt: '신호(세모 2)·할 말(동그라미)·알릴 사람(하트)·도움 칸(긴 네모)을 모두 넣어요.', toolOptions: { shapes: ['triangle', 'circle', 'heart', 'rect', 'star'], maxPieces: 14 }, target: { has: [{ shape: 'triangle', min: 2 }, { shape: 'circle', min: 1 }, { shape: 'heart', min: 1 }, { shape: 'rect', min: 1 }] }, difficulty: 0.2,
              levels: { easy: { prompt: '도움 칸이 붙은 틀에 신호(세모)와 알릴 사람(하트)을 더해요.', state: { pieces: [{ shape: 'rect', color: '파랑', size: 'l', x: 280, y: 320, r: 0 }] }, target: { has: [{ shape: 'rect', min: 1 }, { shape: 'triangle', min: 1 }, { shape: 'heart', min: 1 }] } } } },
            { prompt: '포스터를 본 친구가 할 일을 구호로 정하고 점검 칸에 표시해요.', toolOptions: { maxPieces: 16 }, target: { selfCheck: ['알아차리는 신호를 넣었다', '할 말과 알릴 사람을 넣었다', '구호 한 문장을 정했다'], minPieces: 4 }, difficulty: 0.1,
              conclude: '불편한 몸·성 이야기는 알아차리고, 멈추라고 말하고, 믿는 어른께 알려요.' },
            { prompt: '모둠 포스터와 구호를 반에 발표해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [
          { type: 'short', prompt: '우리 모둠 포스터의 구호를 써요.' },
          { type: 'table', prompt: '포스터에 넣은 것을 써요.', columns: ['알아차리는 신호', '할 말', '알릴 사람'], cells: [['', '', '']] },
        ] },
        notes: '도움 칸의 신고·상담 번호는 학교가 확인한 것을 교사가 적어 넣는다(이 모듈에는 번호를 넣지 않았다).',
      }),
      X('wrap.help-map', {
        title: '도움받을 사람·장소 지도', method: '학교·동네 도움받을 사람과 장소 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '첫 질문 지도에 장소 두 곳만 보이고 상담실에 핀을 꽂는다.', base: '장소 여섯 곳 지도에서 상담실·보건실·집에 차례로 핀을 꽂는다.', challenge: '넷째 질문에서 학교 밖(토요일)일 때 갈 곳과 만날 사람을 고른다(교사가 도전 모둠에 먼저 풀게 한다).' },
        wrap: {
          teacher: '"불편한 일이 생기면 누구를 만나러 어디로 갈까요?" 핀을 꽂을 때마다 그곳에서 만날 사람(담임·상담·보건 선생님, 보호자)을 말하게 한다. 지도는 지어낸 곳이니 우리 학교의 실제 상담실 위치는 교사가 말해 준다. "어른이 안 믿어 주면 어떡해요?"라는 걱정에는 "믿어 줄 때까지 다른 어른에게도 말해요"라고 말해 준다.',
          exitTicket: [
            PIN('상담 선생님을 만나고 싶어요. 상담실에 핀을 꽂아요.', '상담실', 0.1, { levels: { easy: { prompt: '상담 선생님이 계신 곳에 핀을 꽂아요(장소 두 곳).', toolOptions: { places: [AROUND[1], AROUND[3]], readout: true } } } }),
            PIN('보건 선생님께 말하고 싶어요. 보건실에 핀을 꽂아요.', '보건실', 0.1),
            PIN('집에 와서 보호자께 말하려고 해요. 집에 핀을 꽂아요.', '집', 0.1),
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '학교와 동네 도움 지도(가상)', places: AROUND, readOnly: true, ask: { q: '토요일 놀이터에서 불편한 말을 들었어요. 어떻게 할까요?', choices: ['집에 가서 보호자께 말하기', '월요일까지 참기', '혼자 따지러 가기'], why: ['', '기다리지 않고 보호자께 바로 말해요.', '혼자 따지면 위험할 수 있어요.'] } }, prompt: '학교 밖일 때 갈 곳과 만날 사람을 골라요.', target: { pick: 0 }, difficulty: 0.2 },
          ],
        },
        worksheet: {
          title: '도움받을 사람과 장소',
          items: [
            { type: 'table', prompt: '도움받을 곳과 만날 사람을 써요.', columns: ['장소', '만날 사람'], cells: [['상담실', ''], ['보건실', ''], ['집', '']], answer: '상담 선생님, 보건 선생님, 보호자' },
            { type: 'short', prompt: '첫 어른이 바쁘면 다음에 말할 어른을 써요(이름 대신 \'담임 선생님\'처럼).' },
          ],
        },
        notes: '지도는 지어낸 학교·동네다. 실제 상담 기관과 번호는 학교가 확인한 것을 교사가 알려 준다.',
      }),
      X('wrap.steps-check', {
        title: '대처 차례 스스로 점검', method: '성희롱 대처 차례와 다짐 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '첫 질문(멈추기·기록·알리기 순서)만 스스로 하고 나머지는 교사와 함께 읽는다.', base: '순서를 놓고, 둘째 질문의 다짐 칸에 표시한다.', challenge: '순서와 다짐을 마치고, 셋째 질문에 다짐을 지키기 위한 내 말 한 줄을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 차례를 다시 놓아 볼까요?" 순서를 놓게 한 뒤 다짐을 스스로 표시하게 한다. "다짐을 못 지키면 어떡해요?"라는 걱정에는 "곁에 서는 것만으로도 큰 도움이에요. 어려우면 어른께 알리면 돼요"라고 말해 준다. 학생 자신의 일은 묻지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '대처 차례', cards: ['알리기', '멈추기', '기록하기'] }, prompt: '성희롱 대처 차례대로 카드를 놓아요.', target: { order: ['멈추기', '기록하기', '알리기'] }, difficulty: 0.1 },
            { type: 'tool', tool: 'timer', options: { title: '나의 다짐' }, prompt: '내가 지킬 다짐에 스스로 표시해요.', target: { selfCheck: ['친구가 그런 일을 겪으면 곁에 서겠다', '불편한 농담을 따라 하지 않겠다'] }, difficulty: 0.1 },
            { type: 'short', prompt: '다짐을 지키기 위해 할 내 말 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '성희롱, 이렇게 대처해요',
          items: [
            { type: 'table', prompt: '대처 차례를 써요.', columns: ['1', '2', '3'], cells: [['', '', '']], answer: '멈추기, 기록하기, 알리기' },
            { type: 'short', prompt: '친구가 불편한 농담을 들었을 때 내가 할 수 있는 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 몸 사진 요구 거절하고 알리기, 딥페이크 기초 (교육부 지침 '딥페이크 등 디지털성폭력', 표준안 초 '싫어요 말하기·신고 방법') ========
  {
    const X = mk('photo-request', 5);
    // 거북이 판: ★ = 안전 행동 칸(거절 → 퍼뜨리지 않기 → 차단), 도착 = 믿는 어른께 알리기(집), 바위 = 답장하기·몰래 지우기
    const ROUTE = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[2, 3], [2, 1], [4, 1]], rocks: [[3, 3], [1, 1]], blocks: ['fwd', 'left', 'right', 'rep'] };
    const BUGGY = ['fwd', 'fwd', 'fwd', 'left', 'fwd', 'fwd', 'right', 'fwd', 'fwd', 'left', 'fwd'];
    M.push(
      X('intro.message-fill', {
        title: '메시지 장면에 거절 문장 넣기', method: '몸 사진 요구 메시지에 거절 문장 넣기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 첫 말풍선 하나("안 보내")가 채워지는 시연을 보인다.', base: '말풍선 세 칸(거절·연락 그만·차단하고 알리기)이 채워지는 시연을 보고 소리 내어 읽는다.', challenge: '거절 뒤 차단·알리기 행동까지 넣는 까닭을 말한다.' },
        intro: {
          teacher: '"게임에서 만난 사람이 \'사진 보내 줘, 우리 친하잖아\'라는 메시지를 보냈어요. 이 장면은 지어낸 거예요." 시연 단추로 말풍선에 \'안 보내\' → \'그만 연락해\' → \'차단하고 어른께 알리기\'가 들어가는 모습을 보인다. "친하면 보내도 돼요"라는 말에는 "몸 사진은 친한 사이라도 보내지 않아요. 달라고 하는 쪽이 잘못이에요"라고 말해 준다. 메시지를 받은 것은 받은 사람의 잘못이 아니라고 분명히 한다.',
          student: '"사진 보내 줘"라는 메시지에 보낼 거절 문장을 짝과 한 번씩 또박또박 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'fill', title: '게임 채팅(지어낸 장면)', slots: [{ id: 'b1', who: '나', label: '거절: "___"' }, { id: 'b2', who: '나', label: '한 번 더: "___"' }, { id: 'b3', who: '나', label: '그다음: ___' }], cards: ['안 보내', '그만 연락해', '차단하고 어른께 알리기', '알았어, 보낼게'] }, sequence: [{ fill: { b1: '안 보내' } }, { fill: { b1: '안 보내', b2: '그만 연락해', b3: '차단하고 어른께 알리기' } }] },
          art: art('a paper tablet screen with a chat bubble and a big paper stop hand next to it, a paper shield on the side', '안 보내, 그만, 알린다', 'star', 'sky'),
        },
        notes: '학생에게 이런 메시지를 받은 적이 있는지 묻지 않는다. 받은 적이 있다고 말하는 학생이 있으면 수업 뒤 따로 듣고 학교 절차대로 잇는다.',
      }),
      X('intro.send-or-not', {
        title: '보내도 되는 것과 안 되는 것', method: '사진·정보 보내도 되는 것과 안 되는 것 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 \'괜찮아요\'·\'안 돼요\'에 다 들어가는 시연을 본다.', challenge: '\'안 돼요\' 카드마다 생길 수 있는 결과(퍼짐·찾아옴)를 말한다.' },
        intro: {
          teacher: '"온라인에서 보내도 되는 것과 안 되는 것을 가려 볼까요?" 시연 단추로 카드가 바구니에 들어가는 모습을 보인다. "얼굴 사진 정도는 괜찮아요"라는 말에는 "모르는 사람에게는 얼굴 사진·학교 이름도 보내지 않아요. 한 번 보낸 사진은 내가 지울 수 없어요"라고 말해 준다.',
          student: '\'안 돼요\' 카드 하나를 골라, 보내면 어떤 일이 생길 수 있는지 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['괜찮아요', '안 돼요'], { 괜찮아요: ['내가 그린 그림 사진', '보호자께 보내는 숙제 사진', '반 알림장 사진', '키우는 꽃 사진'], '안 돼요': ['몸 사진', '모르는 사람에게 얼굴 사진', '학교 이름과 반', '집 주소'] }),
          art: art('two paper baskets, one with a paper drawing and flower photo, one with a paper lock symbol', '보내기 전에 멈춰요', 'star', 'mint'),
        },
      }),
      X('activity.safe-route', {
        title: '안전 행동 차례 코딩', method: '거북이 코딩으로 안전 행동 차례 지나기', tool: 'block-coding', minutes: 14,
        levels: { easy: '작은 판(칸 3개: 거절 → 차단 → 알리기)에서 블록 6개 이내로 거북이를 도착시킨다.', base: '큰 판에서 별 칸 3개(거절·퍼뜨리지 않기·차단)를 지나 바위(답장하기·몰래 지우기)를 피해 집(믿는 어른께 알리기)에 도착시킨다.', challenge: '같은 큰 판을 가장 적은 블록(10개)으로 도착시키고, 둘째 문항에서 바위에 부딪히는 프로그램을 한 블록만 고쳐 바로잡는다.' },
        activity: {
          title: '거북이의 안전 길', tool: 'block-coding',
          teacher: '"판의 별 칸은 차례로 거절, 퍼뜨리지 않기, 차단이에요. 집 칸은 믿는 어른께 알리기예요. 바위 칸은 답장하기와 몰래 지우기예요." 칠판에 판을 그리고 칸마다 이름을 적어 둔다(교구 판에는 칸 이름이 없다). "몰래 지우면 끝나요"라는 학생에게 "지우기 전에 어른과 함께 보면 도움을 받을 수 있어요"라고 말해 준다. 블록을 붙인 뒤 실행을 눌러 확인하게 한다.',
          task: '거북이가 별 칸(거절·퍼뜨리지 않기·차단)을 지나 집(어른께 알리기)에 닿도록 블록을 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '별 칸 세 곳을 모두 지나 바위를 피해 집 칸에 닿도록 블록을 놓아요.', toolOptions: ROUTE, target: { reach: true, stars: true }, difficulty: 0.25,
              levels: {
                easy: { prompt: '별 칸 두 곳을 지나 집 칸에 닿도록 블록을 6개 이내로 놓아요.', toolOptions: { cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 3, y: 2 }, stars: [[1, 2], [2, 2]], rocks: [[2, 0]], maxBlocks: 6 }, target: { reach: true, stars: true, maxBlocks: 6 } },
                challenge: { prompt: '별 칸 세 곳을 지나 집에 닿되, 블록을 10개 이하로 놓아요.', target: { reach: true, stars: true, maxBlocks: 10 } },
              } },
            { prompt: '바위(답장하기)에 부딪히는 프로그램을 한 블록만 고쳐 집에 닿게 해요.', toolOptions: ROUTE, state: { program: BUGGY }, target: { reach: true, stars: true, maxEdits: 1, from: BUGGY }, difficulty: 0.3,
              conclude: '거절하고, 퍼뜨리지 않고, 차단하고, 믿는 어른께 알려요. 답장하거나 몰래 지우지 않아요.' },
            { prompt: '별 칸 세 곳의 뜻을 차례대로 짝에게 말하고, 바위 칸을 피하는 까닭도 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '몸 사진 요구를 받으면 할 일을 차례대로 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '거절, 퍼뜨리지 않기, 차단, 믿는 어른께 알리기' }] },
        notes: '거북이 판에는 칸 이름이 없다. 별·집·바위 칸의 뜻은 칠판과 활동지에 적어 준다.',
      }),
      X('activity.deepfake-map', {
        title: '딥페이크 기초 생각 그물', method: '딥페이크가 무엇이고 왜 피해인지 가지 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(무엇인가·왜 피해인가)에 카드를 나눈다.', base: '가지 3개(보면 할 일 더함)에 카드 9장을 나눈다(함정 카드 섞임).', challenge: '카드를 나눈 뒤, 둘째 문항에서 "합성인 줄 알면 괜찮다"는 오해를 고치는 근거 카드만 고른다(헷갈리는 카드 섞임).' },
        activity: {
          title: '딥페이크 생각 그물', tool: 'mindmap',
          teacher: '"딥페이크는 사람 얼굴을 다른 사진이나 영상에 합성하는 거예요. 진짜처럼 보여서 문제가 돼요." 카드를 하나씩 읽고 가지에 붙이게 한다. "합성인 건 다 아니까 괜찮아요"라는 학생에게 "보는 사람은 진짜로 믿을 수 있고, 얼굴 주인은 크게 상처받아요"라고 말해 준다. 실제 합성 사진·영상은 보여 주지 않는다.',
          task: '가운데 \'딥페이크\'에서 가지마다 카드를 나누고, 오해를 고치는 근거를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('딥페이크 카드를 알맞은 가지에 붙여요.', { topic: '딥페이크', slots: ['무엇인가', '왜 피해인가', '보면 할 일'], easySlots: ['무엇인가', '왜 피해인가'],
              groups: { 무엇인가: ['얼굴을 다른 사진에 합성', '진짜처럼 보이게 만듦', '앱으로 쉽게 만들 수 있음'], '왜 피해인가': ['장난이어도 사람이 다쳐요', '퍼지면 지우기 어려워요', '사람들이 진짜로 믿어요'], '보면 할 일': ['퍼뜨리지 않아요', '믿는 어른께 알려요', '저장·전달하지 않아요'] },
              traps: ['재밌으면 괜찮아요'] }, 0.25),
            PICK('"합성인 줄 알면 괜찮다"는 오해를 고치는 근거만 골라요.', '오해를 고치는 근거', ['보는 사람은 진짜로 믿어요', '얼굴 주인은 크게 상처받아요'], ['합성은 장난일 뿐이에요', '다들 보니까 괜찮아요'], { easy: 1, easyTraps: 1, extraTraps: ['내가 안 만들면 상관없어요'], topic: '딥페이크' }, 0.25,
              { conclude: '딥페이크는 얼굴을 합성한 것이에요. 합성이어도 사람이 다치니 퍼뜨리지 않고 어른께 알려요.' }),
            { prompt: '딥페이크 사진을 보았을 때 할 일 하나를 골라 까닭과 함께 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '딥페이크 사진을 보면 저장하거나 퍼뜨리지 않고 믿는 ___ 께 알려요.', answer: '어른' }] },
        notes: '실제 딥페이크 사진·영상을 보여 주지 않는다.',
      }),
      X('activity.groupchat-choice', {
        title: '단체방 합성 사진 갈림길', method: '단체방에 올라온 합성 사진 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(이모티콘·다른 방에 보내자는 말)을 지나 근거를 고른다.', base: '갈림 3번(사진을 올린 친구에게 할 말 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 올린 친구에게 할 말과 그 결과를 모둠에서 이어 말한다(셋째 문항).' },
        activity: {
          title: '단체방 합성 사진', tool: 'dilemma',
          teacher: '"반 단체방에 친구 얼굴을 합성한 사진이 올라왔어요. 나는 무엇을 할 수 있을까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "저장해 두면 증거가 돼요"라는 말에는 "증거는 혼자 모으거나 보내지 않고, 어른과 함께 다뤄요"라고 말해 준다. 잘못은 만들고 퍼뜨린 쪽에 있고, 알린 사람은 잘한 것이라고 분명히 한다.',
          task: '갈림길마다 고르고, 사진 속 친구에게 생긴 일을 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '단체방의 합성 사진',
            steps: [
              { text: '반 단체방에 한 친구 얼굴을 합성한 사진이 올라왔어요.', motif: 'cloud',
                good: ['notshare', '반응하지 않고 어른께 알린다', '선생님이 바로 돕기 시작해요.', [['사진 속 친구', '보호받아요', 1]]],
                bad: ['emoji', '웃음 이모티콘을 단다', '더 많은 친구가 사진을 봐요.', '이모티콘도 사진을 더 퍼지게 해요.', [['사진 속 친구', '더 아파요', -1]]] },
              { text: '한 친구가 "저장해서 다른 방에도 보내자"고 해요.', motif: 'wind',
                good: ['refuse', '"저장도 전달도 안 해"라고 답한다', '사진이 더 퍼지지 않아요.', [['사진 속 친구', '덜 퍼져요', 1]]],
                bad: ['save', '저장해서 다른 방에 보낸다', '사진이 퍼져 친구가 학교에 오기 힘들어해요.', '받은 사진을 보내는 것도 가해가 돼요.', [['사진 속 친구', '학교가 무서워요', -1]]] },
              { text: '사진을 올린 친구가 "장난이었어"라고 해요.', motif: 'house',
                good: ['say', '"친구가 다쳐, 내리고 선생님께 말하자"고 한다', '올린 친구가 사진을 내리고 선생님과 이야기해요.', [['사진 속 친구', '마음을 놓아요', 1], ['올린 친구', '잘못을 알게 돼요', 0]]],
                bad: ['joke', '"그래, 장난이지" 하고 넘긴다', '사진이 그대로 남아 있어요.', '장난이라는 말로 피해가 없어지지 않아요.', [['사진 속 친구', '계속 아파요', -1]]] },
            ],
            ending: '퍼뜨리지 않고 어른께 알린 덕분에 사진 속 친구가 보호받았어요.',
            reasons: [{ id: 'harm', text: '합성 사진도 얼굴 주인에게 큰 상처를 준다' }, { id: 'adult', text: '퍼뜨리지 않고 증거는 어른과 함께 다룬다' }, { id: 'fake', text: '합성은 진짜가 아니니 괜찮다', why: '합성이어도 사람들이 믿고, 친구는 다쳐요.' }, { id: 'notme', text: '내가 만들지 않았으면 상관없다', why: '보내고 퍼뜨리면 나도 피해를 키워요.' }],
            good: ['harm', 'adult'],
            talk: '사진을 올린 친구에게 할 말과 그 결과를 모둠에서 이어 말해요.',
            conclude: '합성 사진은 반응·저장·전달하지 않고 어른께 알려요. 잘못은 만들고 퍼뜨린 쪽에 있어요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '단체방에 친구 합성 사진이 올라오면?', options: ['저장해서 보낸다', '반응하지 않고 어른께 알린다', '웃음 이모티콘을 단다'], answer: '반응하지 않고 어른께 알린다' },
          { type: 'short', prompt: '"저장해서 다른 방에도 보내자"는 친구에게 할 말을 써요.' },
        ] },
        notes: '이야기는 지어낸 것이다. 실제 합성 사진을 보여 주지 않는다.',
      }),
      X('wrap.chant', {
        title: '"안 보내, 안 퍼뜨려, 알린다" 구호', method: '세 마디 디지털 안전 구호에 박자 짓기', tool: 'keyboard', minutes: 6,
        levels: { easy: '첫 마디("안 보내") 리듬을 듣고 따라 놓는다.', base: '세 마디 구호에 마디마다 4박 리듬을 짓는다.', challenge: '넷째 마디(도움 받는 곳 "어른께")를 덧붙여 네 마디에 4박 리듬을 짓는다.' },
        wrap: {
          teacher: '"안 보내! 안 퍼뜨려! 알린다!" 반 전체가 한 번 외친 뒤 리듬을 짓게 한다. 구호는 무섭게가 아니라 힘 있게 외친다고 말해 준다. 넷째 마디를 짓는 모둠에게 "어디에, 누구에게 알릴지 넣어 볼까요?"라고 묻는다. 끝에 반 전체가 지은 리듬으로 함께 친다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 3, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '"안 보내, 안 퍼뜨려, 알린다" 세 마디에 4박 리듬을 지어요.', target: { beats: true }, difficulty: 0.15,
              levels: {
                easy: { prompt: '"안 보내" 한 마디 리듬을 듣고 똑같이 블록을 놓아요.', toolOptions: { measures: 1, pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] } },
                challenge: { prompt: '구호에 넷째 마디(도움 받는 곳)를 더해 네 마디 리듬을 지어요.', toolOptions: { measures: 4 }, target: { beats: true } },
              } },
            { type: 'choice', prompt: '몸 사진을 보내 달라는 메시지를 받으면?', options: ['친하면 보낸다', '거절하고 차단한 뒤 어른께 알린다', '몰래 지우고 잊는다'], answer: 1, difficulty: 0.1, explain: '거절하고 차단하고, 믿는 어른께 알려요. 받은 사람의 잘못이 아니에요.' },
          ],
        },
        worksheet: {
          title: '디지털 안전 구호',
          items: [
            { type: 'short', prompt: '우리 반 디지털 안전 구호를 써요.' },
            { type: 'choice', prompt: '합성(딥페이크) 사진에 대해 바른 말은?', options: ['진짜가 아니니 괜찮다', '합성이어도 사람이 다친다', '퍼뜨려도 된다'], answer: '합성이어도 사람이 다친다' },
          ],
        },
      }),
      X('wrap.device-check', {
        title: '내 기기 안전 점검표', method: '내 기기 안전 습관 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '안전 습관 3칸을 골라 표시한다(함정 섞임).', base: '안전 습관 6칸을 골라 표시한다.', challenge: '6칸을 표시하고, 아직 못 하는 습관의 바꿀 계획을 한 줄 쓴다.' },
        wrap: {
          teacher: '"내 휴대폰이나 태블릿을 지키는 습관은 무엇일까요?" 점검표에서 안전 습관만 골라 표시하게 한다. \'모르는 사람 친구 수락\'을 고른 학생에게 "온라인에서는 나이와 이름을 속일 수 있어요"라고 말해 준다. 집마다 기기 사정이 다르니 기기가 없는 학생은 가족 기기를 떠올려 하게 한다.',
          exitTicket: [
            EX('kitchen', CHK('내 기기를 지키는 안전 습관만 골라 표시해요.', '내 기기 안전 점검', ['프로필 공개 범위 좁히기', '모르는 사람 차단하기', '사진 보내기 전 멈추기', '보호자와 앱 규칙 정하기', '위치 공유 끄기', '이상하면 어른께 알리기'], ['모르는 사람 친구 수락'], { easy: 3, base: 6 }, 0.15)),
            { type: 'short', prompt: '아직 못 하는 습관 하나와 바꿀 계획을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '내 기기 안전 점검',
          items: [
            { type: 'check', prompt: '내가 지키는 기기 안전 습관에 표시해요.', options: ['프로필 공개 범위 좁히기', '모르는 사람 차단하기', '사진 보내기 전 멈추기', '보호자와 앱 규칙 정하기'] },
            { type: 'short', prompt: '보호자와 정하고 싶은 앱 규칙 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 가정폭력, 오해와 사실 (가정폭력방지법 예방교육 매년 1회 이상 — research-mandatory §1) ========
  {
    const X = mk('family-violence', 5);
    const TOWN = [P('5학년 2반 교실', 'school', [1, 0]), P('상담실', 'office', [2, 0]), P('믿는 이웃 어른 집', 'house', [4, 2]), P('지역 상담 기관', 'office', [5, 0]), P('공원', 'park', [0, 3]), P('시장', 'market', [2, 3])];
    const HELP = (prompt, place, d, more) => Object.assign({
      prompt, toolOptions: { grid: [6, 4], title: '도움 경로 지도(가상)', places: TOWN }, target: { place }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(장소 두 곳).`, toolOptions: { places: [TOWN.find((p) => p.name === place), TOWN[4]], readout: true } } },
    }, more);
    M.push(
      X('intro.myth-fact', {
        title: '가정폭력 오해와 사실 나누기', method: '가정폭력 오해와 사실 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 오해·사실 바구니에 다 들어가는 시연을 보고 까닭을 말한다.', challenge: '오해 카드마다 바로잡는 문장을 말로 짓는다.' },
        intro: {
          teacher: '"가정폭력에 대해 흔히 듣는 말 가운데 오해와 사실을 가려 볼까요?" 시연 단추로 카드가 바구니에 들어가는 모습을 보인다. "집안일이니 남이 끼면 안 돼요"라는 말에는 "집 안에서 일어나도 누군가 다치거나 겁을 먹는다면 도움이 필요한 일이에요"라고 말해 준다. "아이가 말을 안 들어서 그래요"라는 말에는 "어떤 까닭으로도 아이 탓이 아니에요"라고 분명히 말한다. 학생에게 집안 이야기를 묻지 않는다.',
          student: '오해 카드 하나를 골라 바른 말로 바꾸어 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['오해', '사실'], { 오해: ['집안일이니 남이 끼면 안 된다', '참으면 저절로 나아진다', '때리는 것만 폭력이다', '아이가 잘못해서 생긴다'], 사실: ['겁주는 말·물건 부수기도 폭력이다', '어느 것도 아이 탓이 아니다', '알리면 어른이 도울 수 있다', '보고 듣는 것도 아이에게 해롭다'] }),
          art: art('a paper house with a soft glow and two paper baskets in front of it, a small paper heart on the door', '아이 탓이 아니에요', 'house', 'peach'),
        },
        notes: '이 차시를 들으며 마음이 힘들어 보이는 학생이 있으면 수업 뒤 따로 다가가고 학교 절차(담임·상담 선생님)로 잇는다. 학생 가정에 대해 묻지 않는다.',
      }),
      X('intro.minjae-feeling', {
        title: '가상 인물 민재의 마음 날씨', method: '가상 인물 민재의 마음 날씨 짝 짓기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 하나(큰 소리가 날 때)에 마음 카드 1장이 이어지는 시연을 본다.', base: '장면 두 개에 마음 카드 2장이 이어지는 시연을 보고 까닭을 말한다.', challenge: '민재에게 필요한 것(안전·들어 줄 어른)을 말로 고른다.' },
        intro: {
          teacher: '"민재는 지어낸 친구예요. 지난밤 집에서 큰 소리와 물건 깨지는 소리가 나서 잠을 거의 못 잤어요. 민재 마음의 날씨는 어떨까요?" 시연 단추로 장면마다 마음 카드가 이어지는 모습을 보인다. "민재가 학교에서 졸면 혼나야 해요"라는 말에는 "민재에게는 꾸중보다 안전과 들어 줄 어른이 필요해요"라고 말해 준다. 장면을 자세히 묘사하지 않는다.',
          student: '민재에게 지금 가장 필요한 것이 무엇일지 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 'night', label: '밤에 큰 소리가 날 때' }, { id: 'morning', label: '잠 못 잔 아침, 학교 가는 길' }], cards: ['무서움', '걱정', '신남', '편안함'] }, sequence: [{ match: { night: '무서움' } }, { match: { night: '무서움', morning: '걱정' } }] },
          art: art('a paper child walking to school under a soft grey paper cloud, a warm paper sun peeking from behind', '민재에게 필요한 것은?', 'cloud', 'lavender'),
        },
      }),
      X('activity.many-forms', {
        title: '가정폭력의 여러 모습 가지', method: '가정폭력의 여러 모습 가지 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(몸을 다치게 함·겁주는 말)에 그림 카드를 나눈다.', base: '가지 4개(돌보지 않음·물건 부수기 더함)에 그림 카드를 나눈다(함정 카드 섞임).', challenge: '가지에 나눈 뒤, 둘째 문항에서 가운데에 놓을 말("어느 것도 아이 탓이 아니에요")을 고르고 까닭을 말한다.' },
        activity: {
          title: '여러 모습의 폭력 그물', tool: 'mindmap',
          teacher: '"가정폭력은 때리는 것만일까요?" 그림 카드를 짧게 읽고 가지에 붙이게 한다. 장면을 자세히 설명하지 않고 카드 글만 읽는다. "소리 지르는 건 폭력이 아니에요"라는 말에는 "겁을 주어 무섭게 만드는 것도 몸을 다치게 하는 것만큼 아이에게 해로워요"라고 말해 준다. 둘째 문항에서 어떤 모습이든 아이 탓이 아니라는 점을 반 전체가 소리 내어 말하게 한다.',
          task: '가운데 \'가정폭력의 여러 모습\'에서 가지마다 그림 카드를 붙이고, 가운데에 놓을 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('그림 카드를 알맞은 가지에 붙여요.', { topic: '여러 모습', slots: ['몸을 다치게 함', '겁주는 말', '돌보지 않음', '물건 부수기'], easySlots: ['몸을 다치게 함', '겁주는 말'],
              groups: { '몸을 다치게 함': ['밀치거나 때림', '세게 붙잡음'], '겁주는 말': ['"쫓아낼 거야" 위협', '무섭게 소리 지름'], '돌보지 않음': ['밥을 챙겨 주지 않음', '아파도 돌보지 않음'], '물건 부수기': ['물건을 던져 부숨', '문을 세게 쾅 침'] },
              traps: ['함께 저녁 먹기'] }, 0.25),
            PICK('가운데에 놓을 말만 골라요.', '가운데에 놓을 말', ['어느 것도 아이 탓이 아니에요'], ['아이가 말을 안 들어서예요', '집안일이라 괜찮아요'], { easy: 1, easyTraps: 1, extraTraps: ['참으면 나아져요'], topic: '가정폭력' }, 0.2,
              { conclude: '가정폭력에는 몸·말·돌보지 않음·물건 부수기 같은 여러 모습이 있어요. 어느 것도 아이 탓이 아니에요.' }),
            { prompt: '\'어느 것도 아이 탓이 아니에요\'가 왜 가운데에 있어야 하는지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '겁주는 말과 물건 부수기도 폭력이에요. 어느 것도 ___ 탓이 아니에요.', answer: '아이' }] },
        notes: '카드는 짧은 낱말과 그림 기호로만 보인다. 장면을 자세히 묘사하거나 학생에게 겪은 일을 묻지 않는다.',
      }),
      X('activity.help-route', {
        title: '도움 경로 지도', method: '학교·동네 도움 경로 지도에 핀 꽂기', tool: 'map', minutes: 14,
        levels: { easy: '문항마다 장소 두 곳만 보이는 지도에서 알맞은 곳에 핀을 꽂는다(이름이 보임).', base: '장소 여섯 곳 지도에서 담임 교실·상담실·믿는 이웃 어른 집·지역 상담 기관에 핀을 꽂고, 교사가 칠판에 길을 잇는다.', challenge: '같은 문항을 마친 뒤, 다섯째 문항에서 밤이나 주말일 때 갈 수 있는 곳을 고른다.' },
        activity: {
          title: '도움 경로 지도', tool: 'map',
          teacher: '"민재 같은 친구가 도움이 필요하면 어디로 갈 수 있을까요?" 상황을 읽고 핀을 꽂게 한 뒤, 칠판 지도에 교실 → 상담실 → 지역 상담 기관으로 이어지는 길을 그려 보인다. 지역 상담 기관의 이름과 번호는 학교가 확인해 알려 주는 것으로 교사가 적어 준다. "어린이는 상담 기관에 못 가요"라는 말에는 "믿는 어른과 함께 가거나, 선생님이 대신 이어 줄 수 있어요"라고 말해 준다. 지도는 지어낸 동네다.',
          task: '상황을 읽고 도움 경로 지도에서 알맞은 곳에 핀을 꽂아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            HELP('학교에서 담임 선생님께 먼저 말하고 싶어요. 갈 곳에 핀을 꽂아요.', '5학년 2반 교실', 0.15),
            HELP('상담 선생님과 이야기하고 싶어요. 갈 곳에 핀을 꽂아요.', '상담실', 0.15),
            HELP('방과 후 동네에서 믿는 어른을 찾고 싶어요. 갈 곳에 핀을 꽂아요.', '믿는 이웃 어른 집', 0.2),
            HELP('학교 선생님이 이어 주는 전문 기관에 핀을 꽂아요.', '지역 상담 기관', 0.2),
            { prompt: '토요일 밤에 도움이 필요해요. 갈 수 있는 곳을 골라요.', toolOptions: { grid: [6, 4], title: '도움 경로 지도(가상)', places: TOWN, readOnly: true, ask: { q: '토요일 밤, 학교는 닫혀 있어요. 어디로 갈까요?', choices: ['믿는 이웃 어른 집', '닫힌 학교 상담실', '시장'], why: ['', '밤과 주말에는 학교가 닫혀 있어요.', '시장은 도움 장소가 아니에요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '학교에서는 담임·상담 선생님, 동네에서는 믿는 어른, 그리고 지역 상담 기관으로 도움이 이어져요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 경로를 차례대로 써요.', columns: ['1', '2', '3'], cells: [['', '', '']], answer: '담임 선생님, 상담 선생님, 지역 상담 기관' }] },
        notes: '지도는 지어낸 동네다. 지역 상담 기관의 이름·번호는 학교가 확인해 교사가 칠판에 적어 준다(이 모듈에는 번호를 넣지 않았다).',
      }),
      X('activity.secret-choice', {
        title: '친구의 비밀을 들었을 때 갈림길', method: '친구의 걱정되는 비밀을 들었을 때 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(어떻게 들을지·누구에게 갈지)을 지나 근거를 고른다.', base: '갈림 3번(친구가 "가지 마"라고 할 때 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 친구가 거절할 때 다시 건넬 말을 모둠에서 짓는다(셋째 문항).' },
        activity: {
          title: '갈림길: 친구의 비밀', tool: 'dilemma',
          teacher: '"친구가 \'집에 가기 무서워, 아무한테도 말하지 마\'라고 했어요. 비밀은 꼭 지켜야 할까요?" 고를 때마다 친구의 안전과 마음이 어떻게 바뀌는지 읽게 한다. "말하면 배신이에요"라는 말에는 "친구가 다칠 수 있는 비밀은 믿는 어른께 이어야 친구를 지켜요. 소문을 내는 것과는 달라요"라고 말해 준다. 친구 잘못이 아니고, 어른께 이은 사람은 잘한 것이라고 분명히 한다.',
          task: '갈림길마다 고르고, 친구의 안전과 마음이 어떻게 바뀌는지 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '친구의 비밀',
            steps: [
              { text: '친구가 "집에 가기 무서워. 아무한테도 말하지 마"라고 해요.', motif: 'moon',
                good: ['listen', '끝까지 듣고 "말해 줘서 고마워"라고 한다', '친구가 조금 마음을 놓아요.', [['친구', '혼자가 아니에요', 1]]],
                bad: ['promise', '"응, 비밀 지킬게"라고 약속한다', '친구는 그날도 혼자 집에 가요.', '안전이 걸린 비밀은 지키지 않고 어른께 이어요.', [['친구', '도움을 못 받아요', -1]]] },
              { text: '친구가 "그럼 어떻게 해?"라고 물어요.', motif: 'cloud',
                good: ['go', '"상담 선생님께 같이 가자"고 한다', '친구가 망설이다 고개를 끄덕여요.', [['친구', '도움에 가까워져요', 1]]],
                bad: ['others', '다른 친구들에게 이야기한다', '소문이 퍼져 친구가 더 힘들어해요.', '여러 친구에게 말하는 건 돕는 게 아니라 소문이에요.', [['친구', '더 힘들어요', -1]]] },
              { text: '상담실 앞에서 친구가 "싫어, 그냥 가자"라고 해요.', motif: 'wind',
                good: ['again', '"너를 지키고 싶어서야"라고 말하고 선생님께 알린다', '선생님이 친구를 돕기 시작해요.', [['친구', '보호받아요', 1], ['나', '용기를 냈어요', 1]]],
                bad: ['drop', '친구 말대로 그냥 돌아간다', '친구의 걱정은 그대로 남아요.', '친구가 망설여도 어른께 이으면 친구를 지킬 수 있어요.', [['친구', '계속 무서워요', -1]]] },
            ],
            ending: '끝까지 듣고, 믿는 어른께 이은 덕분에 친구가 도움을 받기 시작했어요.',
            reasons: [{ id: 'link', text: '도움을 잇는 것이 친구를 지키는 일이다' }, { id: 'notfault', text: '친구 잘못이 아니고, 돕는 일은 어른이 한다' }, { id: 'secret', text: '약속한 비밀은 무엇이든 지킨다', why: '친구가 다칠 수 있는 비밀은 어른께 이어요.' }, { id: 'gossip', text: '여러 친구에게 알리면 빨리 해결된다', why: '여러 친구에게 말하면 소문이 되어 친구가 더 힘들어요.' }],
            good: ['link', 'notfault'],
            talk: '친구가 "가지 마"라며 거절할 때 다시 건넬 말을 모둠에서 지어 말해요.',
            conclude: '다칠 수 있는 비밀은 지키지 않고 믿는 어른께 이어요. 친구 잘못이 아니에요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '친구가 다칠 수 있는 비밀을 지켜 달라고 하면?', options: ['꼭 지킨다', '친구를 지키려고 믿는 어른께 잇는다', '여러 친구에게 말한다'], answer: '친구를 지키려고 믿는 어른께 잇는다' },
          { type: 'short', prompt: '걱정을 말한 친구에게 처음 건넬 말을 써요.' },
        ] },
        notes: '이야기는 지어낸 것이다. 가정폭력 장면을 묘사하지 않는다.',
      }),
      X('wrap.ask-steps', {
        title: '도움 요청 세 단계', method: '도움 요청 세 단계 차례 놓기', tool: 'story', minutes: 6,
        levels: { easy: '장면 카드 2장(마음먹기·믿는 어른에게 말하기)의 차례를 놓는다.', base: '장면 카드 3장(다시 말하기 더함)의 차례를 놓는다.', challenge: '차례를 놓은 뒤, 둘째 질문에서 첫 어른이 바쁠 때의 다음 장면을 고른다.' },
        wrap: {
          teacher: '"도움을 청할 때 꼭 기억할 세 단계를 놓아 볼까요?" 장면을 놓은 뒤 함께 읽는다. "한 번 말했는데 안 도와주면 끝이에요"라는 말에는 "도움이 이어질 때까지 다른 어른에게도 다시 말해요"라고 말해 준다. 학생 자신의 일을 묻지 않는다.',
          exitTicket: [
            EX('story', ORDER('도움을 청하는 단계를 차례대로 놓아요.', ['말하기로 마음먹기', '믿는 어른 찾아 말하기', '도움이 올 때까지 다시 말하기'], { easy: [0, 1], title: '도움 요청 세 단계' }, 0.1)),
            EX('story', PICK('첫 어른이 바빠서 못 들었어요. 다음 장면만 골라요.', '다음 장면', ['다른 믿는 어른께 말하기'], ['그냥 포기하기', '혼자 참기'], { easy: 1, easyTraps: 1 }, 0.15)),
            { type: 'short', prompt: '내가 믿는 어른 두 사람을 써요(이름 대신 \'담임 선생님\'처럼).' },
          ],
        },
        worksheet: {
          title: '도움 요청 세 단계',
          items: [
            { type: 'table', prompt: '도움 요청 단계를 차례대로 써요.', columns: ['1', '2', '3'], cells: [['', '', '']], answer: '마음먹기, 믿는 어른 찾아 말하기, 다시 말하기' },
            { type: 'short', prompt: '첫 어른이 바쁠 때 내가 할 일을 써요.' },
          ],
        },
      }),
      X('wrap.kind-card', {
        title: '친구에게 건넬 한마디 카드', method: '민재에게 건넬 한마디 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '둘째 질문의 보기 가운데 알맞은 한마디를 고르고, 첫 질문은 문장 틀로 쓴다.', base: '한 문장을 쓰고 기준 3개(탓하지 않음·도움 길·비밀을 퍼뜨리지 않음)를 점검한다.', challenge: '두 문장으로 쓰고 함께 갈 어른을 넣은 뒤 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"민재에게 어떤 한마디를 건네면 힘이 될까요?" 기준표를 함께 읽고 쓰게 한다. "너희 집 왜 그래?"처럼 캐묻는 말을 쓴 학생에게 "민재가 말하고 싶을 때 들어 주는 말로 바꿔 볼까요?"라고 말해 준다. 카드에 실제 친구 이름을 쓰지 않는다.',
          exitTicket: [
            RUBX('민재에게 건넬 한마디를 써요', { topic: '지어낸 친구 민재가 걱정을 털어놓았어요. 민재에게 건넬 한마디를 써요(이름은 쓰지 않아요).', starter: '말해 줘서 ___. 우리 같이 ___.', crit: ['탓하지 않았다', '도움 길을 알려 줬다', '비밀을 퍼뜨리지 않는 말이다'], must: [['선생님', '어른', '상담']], chars: [15, 120], title: '민재에게 건넬 한마디' }),
            { type: 'choice', prompt: '민재에게 건넬 한마디로 가장 알맞은 것은?', options: ['"너희 집 왜 그래?"', '"말해 줘서 고마워. 같이 선생님께 가자"', '"다른 애들한테도 말해 볼게"'], answer: 1, difficulty: 0.15, explain: '탓하지 않고, 도움 길을 함께 찾는 말이 힘이 돼요.' },
          ],
        },
        worksheet: {
          title: '친구에게 건넬 한마디',
          items: [
            { type: 'short', prompt: '걱정을 털어놓은 친구에게 건넬 한마디를 써요.' },
            { type: 'check', prompt: '좋은 한마디에 들어갈 것에 표시해요.', options: ['탓하지 않기', '도움 길 알려 주기', '비밀 퍼뜨리지 않기'] },
          ],
          easy: { note: '"말해 줘서 고마워"처럼 짧게 써도 돼요.', items: [{ type: 'draw', prompt: '친구 곁에 있어 주는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 성장 띠와 새 생명의 탄생 (표준안 초 '몸의 변화와 사춘기', 학교보건법 제9조 성교육) ========
  {
    const X = mk('growth-life', 6);
    const BAND = [{ id: 'baby', text: '영아' }, { id: 'tod', text: '유아' }, { id: 'kid', text: '어린이' }, { id: 'teen', text: '사춘기' }, { id: 'young', text: '청년' }, { id: 'adult', text: '어른' }, { id: 'old', text: '노년' }];
    const FETUS = [['4달', 1], ['5달', 2], ['6달', 4], ['7달', 7], ['8달', 11], ['9달', 16]];
    const FT = '태아 몸무게가 늘어나는 모양(가상 값)';
    const LINE = (prompt, choices, pick, d, more) => READ(prompt, { type: 'line', title: FT, unit: '눈금', xLabel: '임신 기간', yLabel: '몸무게(가상)', data: FETUS, choices, question: '알맞은 것은?' }, pick, d, more);
    const SHOP = [{ id: 'diaper', text: '기저귀', price: 30000 }, { id: 'clothes', text: '아기 옷', price: 20000 }, { id: 'check', text: '병원 검진', price: 40000 }, { id: 'bed', text: '아기 침대', price: 60000 }, { id: 'toy', text: '장난감', price: 15000 }, { id: 'bottle', text: '젖병', price: 25000 }];
    M.push(
      X('intro.life-band', {
        title: '아기에서 어른까지 성장 띠', method: '아기에서 어른까지 성장 띠 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 카드 4장(영아·유아·어린이·사춘기)이 놓이는 시연을 보인다.', base: '카드 7장(청년·어른·노년 더함)이 다 놓이는 시연을 보고, 지금 나의 자리에 손가락 깃발을 꽂는다.', challenge: '사춘기 칸에 그 시기에 생기는 변화 두 가지를 말로 덧붙인다.' },
        intro: {
          teacher: '"사람은 아기로 태어나 어떤 차례로 자랄까요?" 시연 단추로 영아 → 유아 → 어린이 → 사춘기 → 청년 → 어른 → 노년 카드가 띠에 놓이는 모습을 보인다. "지금 우리는 어디쯤 있을까요?" 하고 손가락으로 \'어린이\'와 \'사춘기\' 사이를 짚게 한다. "사춘기는 문제가 생기는 때예요"라는 말에는 "몸과 마음이 어른이 될 준비를 하는 자연스러운 때예요"라고 말해 준다.',
          student: '성장 띠에서 지금 나의 자리를 짚고, 다음 단계에 무엇이 달라질지 짝에게 말해 보아요.',
          demo: { tool: 'timeline', options: { axis: ['태어남', '나이 듦'], slots: 7, cards: [BAND[3], BAND[0], BAND[5], BAND[2], BAND[6], BAND[1], BAND[4]], shuffle: false }, sequence: [{ order: ['baby', 'tod', 'kid', 'teen'] }, { order: ['baby', 'tod', 'kid', 'teen', 'young', 'adult', 'old'] }] },
          art: art('a long paper ribbon with seven paper figures from a baby to an elderly person, a small paper flag in the middle', '나는 지금 어디쯤?', 'sun', 'mint'),
        },
      }),
      X('intro.organ-names', {
        title: '생식 기관 바른 이름 고르기', method: '생식 기관 바른 이름 고르기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 이름 두 개(자궁·고환)를 짚으며 보기 고르기 시연을 보인다.', base: '이름 네 개(난소·음경 더함)를 교과서 도식에서 짚고 시연을 본다.', challenge: '기관마다 하는 일을 한 줄로 말한다.' },
        intro: {
          teacher: '"아기는 어디에서 자랄까요? 바른 이름으로 말해 볼까요?" 교구 몸 그림에는 생식 기관이 없으니 보건 교과서의 단순한 도식 그림을 함께 띄우고 자궁·난소·고환·음경 자리를 짚는다. 시연 단추로 보기에서 \'자궁\'을 고르는 모습을 보인다. "그 이름은 부끄러운 말이에요"라는 학생에게 "눈·코처럼 몸의 한 부분의 바른 이름이에요"라고 차분하게 말해 준다.',
          student: '도식 그림에서 짚은 기관 하나의 바른 이름과 하는 일을 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '허리', '허벅지'], ask: { q: '아기가 자라는 곳의 바른 이름은?', choices: ['작은창자', '자궁', '콩팥'] } }, sequence: [{ pick: 1 }] },
          art: art('a simple paper outline of a body with a soft paper heart in the middle and a paper label card beside it', '몸의 바른 이름을 알아요', 'heart', 'peach'),
        },
        notes: '교구 몸 그림에 생식 기관이 없다. 보건 교과서의 단순한 도식만 쓰고 사진은 쓰지 않는다.',
      }),
      X('activity.life-steps', {
        title: '새 생명이 자라는 차례', method: '새 생명이 자라는 차례 놓기', tool: 'lifecycle', minutes: 14,
        levels: { easy: '카드 3장(수정·태아가 자람·태어남)의 차례를 놓는다.', base: '카드 5장(자궁에 자리 잡음·돌봄 받으며 자람 더함)의 차례를 놓는다.', challenge: '차례를 놓은 뒤, 둘째 문항에서 돌봄 단계에 필요한 일 카드만 고른다(헷갈리는 카드 섞임).' },
        activity: {
          title: '새 생명이 자라는 판', tool: 'lifecycle',
          teacher: '"정자와 난자가 만나 수정이 되면, 새 생명은 어떤 차례로 자랄까요?" 카드를 놓은 뒤 \'차례대로 따라가 보기\' 단추로 함께 읽는다. 수정이 어떻게 이루어지는지는 다루지 않고 차례만 다룬다. "태어나면 다 자란 거예요"라는 말에는 "태어난 뒤에도 오랫동안 돌봄을 받으며 자라요. 우리도 그렇게 자랐어요"라고 말해 준다.',
          task: '새 생명이 자라는 차례대로 카드를 놓고, 돌봄 단계에 필요한 일을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '새 생명이 자라는 차례대로 카드를 놓아요.', toolOptions: { center: '새 생명이 자라요', cycle: false, cards: [{ id: 'grow', text: '태아가 자라요' }, { id: 'meet', text: '정자와 난자가 만나요(수정)' }, { id: 'care', text: '돌봄을 받으며 자라요' }, { id: 'nest', text: '자궁에 자리 잡아요' }, { id: 'born', text: '태어나요' }] }, target: { order: ['meet', 'nest', 'grow', 'born', 'care'] }, difficulty: 0.2,
              levels: { easy: { prompt: '새 생명이 자라는 차례대로 카드를 놓아요(카드 3장).', toolOptions: { cards: [{ id: 'born', text: '태어나요' }, { id: 'meet', text: '정자와 난자가 만나요(수정)' }, { id: 'grow', text: '태아가 자라요' }] }, target: { order: ['meet', 'grow', 'born'] } } } },
            PICK('돌봄 단계에 필요한 일만 골라요.', '돌봄 단계', ['안아 주고 먹이기', '아플 때 병원 데려가기', '함께 놀아 주기'], ['혼자 오래 두기', '울면 모른 척하기'], { easy: 1, easyTraps: 1, extraTraps: ['엄마 혼자 다 하기'] }, 0.2,
              { conclude: '새 생명은 수정 → 자궁에 자리 잡기 → 자람 → 태어남 → 돌봄의 차례로 자라요. 돌봄은 가족 모두의 일이에요.' }),
            { prompt: '내가 아기였을 때 받았을 돌봄 하나를 떠올려 짝에게 말해요(말하기 싫으면 \'아기들은\'으로 말해요).', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '새 생명이 자라는 차례를 써요.', columns: ['1', '2', '3', '4', '5'], cells: [['', '', '', '', '']], answer: '수정, 자궁에 자리 잡음, 태아가 자람, 태어남, 돌봄 받으며 자람' }] },
        notes: '수정·임신·출산은 차례만 다루고 성적 행위는 다루지 않는다. 입양·한부모 가정 등 가족의 여러 모습을 떠올려 \'아기를 돌보는 어른\'으로 말한다.',
      }),
      X('activity.growth-chart', {
        title: '태아가 자라는 그래프 읽기', method: '태아가 자라는 꺾은선그래프 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '값이 보이는 그래프에서 두 점(5달·8달)을 견준다.', base: '가장 많이 자라는 시기를 찾는다.', challenge: '그 시기에 임신한 사람과 가족이 할 돌봄을 고르고, 넷째 문항에서 모둠이 돌봄 계획을 말한다.' },
        activity: {
          title: '태아가 자라는 그래프', tool: 'chart',
          teacher: '"이 그래프는 태아의 몸무게가 늘어나는 모양을 보여 주는 가상 값이에요. 실제 값은 보건 교과서 자료로 확인해요." 교사가 교과서 자료가 있으면 그것을 함께 띄운다. "아기는 처음부터 크게 자라요"라는 말에는 "처음에는 아주 작다가 마지막 몇 달에 많이 자라요"라고 짚는다. 돌봄은 임신한 사람 혼자가 아니라 가족이 함께 한다는 점을 말해 준다.',
          task: '태아가 자라는 그래프(가상 값)를 읽고, 가장 많이 자라는 시기와 그때의 돌봄을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            LINE('5달과 8달 가운데 태아가 더 무거운 때는?(가상 값)', ['5달', '8달'], 1, 0.15),
            LINE('태아가 가장 많이 자라는 시기는?(가상 값)', ['4~5달', '6~7달', '8~9달'], 2, 0.25),
            LINE('태아가 많이 자라는 시기에 가족이 할 돌봄은?', ['임신한 사람 혼자 다 하기', '가족이 무거운 일 나눠 하기', '검진 미루기'], 1, 0.2,
              { conclude: '태아는 마지막 몇 달에 많이 자라요. 이때 가족이 함께 돌봐요.' }),
            { prompt: '태아가 많이 자라는 시기에 우리 가족이라면 할 돌봄을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상 값)에서 태아가 가장 많이 자라는 때는?', options: ['처음 몇 달', '가운데 몇 달', '마지막 몇 달'], answer: '마지막 몇 달' }] },
        notes: '그래프 값은 모양만 보이는 가상 값이다. 실제 태아 크기·몸무게는 보건 교과서 자료로 바꾸어 보여 준다.',
      }),
      X('activity.family-plan', {
        title: '아기를 맞는 가족의 준비 계획', method: '예산 안에서 아기 맞을 준비 고르고 돌봄 나누기', tool: 'economy', minutes: 27,
        levels: { easy: '물건 카드 4장 가운데 예산(10만 원, 가상) 안에서 검진을 넣어 고른다.', base: '카드 6장 가운데 예산 안에서 검진을 넣어 7만 원 이상 고르고, 둘째 문항에서 준비를 돈·시간으로 나눈 뒤 "누가 돌보나"를 모둠에서 정한다.', challenge: '예산이 7만 원으로 줄어도 검진과 기저귀는 지키게 고르고, 무엇을 바꿨는지 근거를 말한다.' },
        activity: {
          title: '아기를 맞는 준비', tool: 'economy',
          teacher: '"아기를 맞는 가족은 무엇을 준비할까요? 돈으로 사는 것만 준비일까요?" 가격은 수업용 가상 값이라고 밝힌다. 첫 문항 뒤 둘째 문항에서 밤에 먹이기·안아 재우기 같은 시간이 드는 준비를 나누게 한다. "아기는 엄마가 돌봐요"라는 말에는 "보호자 두 사람 모두, 그리고 가족 모두가 함께 돌봐요. 육아 휴가는 아빠도 엄마도 쓸 수 있어요"라고 말해 준다.',
          task: '예산 안에서 아기 맞을 준비를 고르고, 준비를 돈과 시간으로 나눈 뒤 누가 돌볼지 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '예산 10만 원(가상) 안에서 병원 검진을 넣어 7만 원 이상 골라요.', toolOptions: { mode: 'budget', items: SHOP, budget: 100000, ask: '아기를 맞을 준비를 골라요(가상 가격).' }, target: { budget: { max: 100000, min: 70000, must: ['check'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '예산 10만 원(가상) 안에서 병원 검진을 넣어 골라요(카드 4장).', toolOptions: { items: SHOP.slice(0, 4) }, target: { budget: { max: 100000, min: 60000, must: ['check'] } } },
                challenge: { prompt: '예산이 7만 원(가상)으로 줄었어요. 검진과 기저귀를 지켜 골라요.', toolOptions: { budget: 70000 }, target: { budget: { max: 70000, must: ['check', 'diaper'] } } },
              } },
            SORT('아기 맞을 준비를 돈이 드는 것과 시간·마음이 드는 것으로 나누어요.', { slots: ['돈이 드는 준비', '시간·마음이 드는 준비'], groups: { '돈이 드는 준비': ['기저귀 사기', '아기 옷 사기', '검진비 내기'], '시간·마음이 드는 준비': ['밤에 우유 먹이기', '안아 주고 재우기', '보호자 육아 휴가'] }, extra: { '돈이 드는 준비': ['젖병 사기'], '시간·마음이 드는 준비': ['함께 놀아 주기'] } }, 0.2,
              { conclude: '아기를 맞으려면 돈뿐 아니라 시간과 마음이 들어요. 돌봄은 보호자와 가족 모두의 일이에요.' }),
            { prompt: '시간·마음이 드는 준비를 가족 가운데 누가 맡을지 모둠에서 정하고 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '아기를 돌보는 일을 나누어 써요.', columns: ['돌봄 일', '맡을 사람'], cells: [['밤에 우유 먹이기', ''], ['안아 주고 재우기', ''], ['병원 데려가기', '']] },
          { type: 'short', prompt: '"아기는 엄마가 돌본다"는 말을 바르게 고쳐 써요.' },
        ] },
        notes: '가격은 수업용 가상 값이다. 학생 가정의 형편이나 가족 구성을 묻지 않는다.',
      }),
      X('wrap.life-letter', {
        title: '새 생명에게 보내는 세 문장', method: '새 생명에게 보내는 세 문장 편지 쓰고 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 두 문장을 쓰고 기준 1개를 점검한다.', base: '세 문장을 쓰고 기준 2개(생명의 소중함·돌봄 약속)를 점검한다.', challenge: '나의 성장 이야기 한 문장을 넣어 네 문장으로 쓰고 기준 3개를 점검한다.' },
        wrap: {
          teacher: '"갓 태어난 아기에게 편지를 쓴다면 무엇을 말해 주고 싶나요?" 동생이 없으면 이웃 아기나 상상 속 아기에게 써도 된다고 말해 준다. "편지는 길어야 좋아요"라는 생각에는 "짧아도 마음이 담기면 충분해요"라고 말해 준다. 실제 가족 이름은 쓰지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { title: '새 생명에게', topic: '갓 태어난 아기에게 보내는 편지를 세 문장으로 써요(이름은 쓰지 않아요).', minChars: 30, maxChars: 200 }, prompt: '새 생명에게 보내는 편지를 세 문장으로 써요.', target: { selfCheck: ['생명의 소중함을 썼다', '돌봄 약속을 썼다'], chars: [30, 200], sentences: [3, 4] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '새 생명에게 보내는 편지를 두 문장으로 써요(문장 틀을 써도 돼요).', toolOptions: { starter: '아기야, 태어나 줘서 ___. 내가 ___.' }, target: { selfCheck: ['생명의 소중함을 썼다'], chars: [15, 200], sentences: [2, 4] } },
                challenge: { prompt: '나의 성장 이야기를 한 문장 넣어 네 문장으로 편지를 써요.', target: { selfCheck: ['생명의 소중함을 썼다', '돌봄 약속을 썼다', '나의 성장 이야기를 넣었다'], chars: [40, 220], sentences: [4, 5] } },
              } },
            { type: 'choice', prompt: '아기를 돌보는 책임은 누구에게 있을까요?', options: ['엄마에게만', '보호자와 가족 모두에게', '아무에게도 없다'], answer: 1, difficulty: 0.1, explain: '아기 돌봄은 보호자와 가족 모두가 함께 해요.' },
          ],
        },
        worksheet: {
          title: '새 생명에게 보내는 편지',
          items: [
            { type: 'short', prompt: '새 생명에게 보내는 편지를 세 문장으로 써요.' },
            { type: 'short', prompt: '내가 자라면서 받은 돌봄 가운데 고마운 것 하나를 써요.' },
          ],
          easy: { note: '"태어나 줘서 고마워"처럼 짧게 써도 돼요.', items: [{ type: 'draw', prompt: '아기에게 주고 싶은 선물을 그려요.' }] },
        },
      }),
      X('wrap.life-feeling', {
        title: '생명 탄생을 알고 난 마음 눈금', method: '생명 탄생을 알고 난 마음 눈금 표시', tool: 'emotion', minutes: 6,
        levels: { easy: '첫 질문(신기함) 하나의 눈금만 세 칸으로 표시한다.', base: '마음 두 가지(신기함·고마움) 눈금을 다섯 칸으로 표시하고 책임감은 말로 나눈다.', challenge: '눈금을 표시한 뒤, 셋째 질문에서 고마운 사람에게 할 행동만 고른다.' },
        wrap: {
          teacher: '"새 생명이 자라고 태어나는 차례를 알고 나니 마음이 어떤가요?" 눈금은 정답이 없고, 내 마음 크기를 표시하는 것이라고 말해 준다. 책임감은 말로 나누게 한다. 발표는 원하는 학생만 한다.',
          exitTicket: [
            SCALE('새 생명이 태어나는 차례를 안 나의 신기한 마음 크기를 표시해요.', '새 생명이 자라고 태어나는 차례를 알게 됐어요', '신기함', 'any'),
            SCALE('나를 돌봐 준 사람에게 고마운 마음 크기를 표시해요.', '나도 오랫동안 돌봄을 받으며 자랐어요', '고마움', 'any'),
            EX('emotion', PICK('고마운 사람에게 할 행동만 골라요.', '고마운 사람에게', ['"고마워요"라고 말하기', '집안일 하나 돕기'], ['모른 척하기', '짜증 내기'], { easy: 1, easyTraps: 1 }, 0.1)),
          ],
        },
        worksheet: {
          title: '생명을 알고 난 마음',
          items: [
            { type: 'short', prompt: '오늘 배운 것 가운데 가장 신기했던 것을 써요.' },
            { type: 'short', prompt: '나를 돌봐 준 사람에게 할 고마움의 행동 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 월경통과 몽정, 스스로 돌보기 (표준안 초 '몸의 변화와 사춘기', 학교보건법 제9조) ========
  {
    const X = mk('self-care', 6);
    const CARE = [['배 따뜻하게', 9], ['가벼운 스트레칭', 6], ['보건실 가기', 5]];
    const SCHOOL = [P('보건실', 'hospital', [1, 1]), P('월경용품 비치 장소', 'dot', [3, 0]), P('6학년 1반 교실', 'school', [5, 0]), P('집', 'house', [4, 3]), P('운동장', 'park', [0, 3]), P('도서관', 'library', [2, 3])];
    const TRIP = [P('인솔 선생님 자리', 'dot', [2, 1]), P('화장실', 'dot', [4, 1]), P('기념품 가게', 'market', [1, 3]), P('전시실', 'museum', [5, 3])];
    const PIN = (prompt, place, d, more) => Object.assign({ type: 'tool', tool: 'map', options: { grid: [6, 4], title: '학교와 집 도움 지도(가상)', places: SCHOOL }, prompt, target: { place }, difficulty: d }, more);
    M.push(
      X('intro.care-graph', {
        title: '월경통 돌봄 방법 그림그래프', method: '월경통 돌봄 방법 그림그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '그림 수를 세어 가장 많은 방법 하나를 찾는다.', base: '세 방법을 견주어 말한다.', challenge: '그래프에 없는 돌봄 방법 하나(물 마시기·쉬기 등)를 덧붙이고 까닭을 말한다.' },
        intro: {
          teacher: '"이 그림그래프는 어느 6학년 반이 \'월경통 때 도움이 된 방법\'을 골랐다고 꾸민 가상 자료예요. 가장 많은 방법은 무엇일까요?" 시연 단추로 \'배 따뜻하게\'를 고르는 모습을 보인다. "아파도 무조건 참아야 해요"라는 말에는 "아프면 쉬거나 보건실에 가는 것도 스스로 돌보는 거예요"라고 말해 준다. 숫자는 가상이라고 밝히고 학생 자신의 통증을 묻지 않는다.',
          student: '그래프의 세 방법 가운데 가장 해 보기 쉬운 것을 골라 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '월경통 때 도움이 된 방법(가상)', unit: '명', xLabel: '방법', yLabel: '학생 수', data: CARE, icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'heart', question: '가장 많이 고른 방법은?', choices: CARE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper picture graph with small paper hearts in rows beside a paper hot water bottle', '아프면 돌봐요', 'heart', 'rose'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 남학생도 함께 알아 두면 친구를 도울 수 있다고 말해 준다.',
      }),
      X('intro.right-wrong', {
        title: '돌봄 방법 맞다·아니다', method: '월경통·몽정 돌봄 방법 맞다·아니다 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 \'맞다\'·\'아니다\'에 다 들어가는 시연을 본다.', challenge: '\'아니다\' 카드를 바른 방법으로 고쳐 말한다.' },
        intro: {
          teacher: '"월경통과 몽정 뒤에 스스로 돌보는 방법 가운데 맞는 것과 아닌 것을 가려 볼까요?" 시연 단추로 카드가 바구니에 들어가는 모습을 보인다. "약은 많이 먹을수록 빨리 나아요"라는 말에는 "약은 보호자나 보건 선생님과 상의해 정해진 만큼만 먹어요"라고 말해 준다. "몽정한 속옷은 숨겨요"라는 말에는 "숨길 일이 아니에요. 갈아입고 빨래 바구니에 넣어요"라고 말해 준다.',
          student: '\'아니다\' 카드 하나를 골라 바른 돌봄 방법으로 바꾸어 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['맞다', '아니다'], { 맞다: ['배를 따뜻하게 한다', '생리대를 자주 갈아 준다', '몽정 뒤 속옷을 갈아입는다', '아프면 보건실에 간다'], 아니다: ['진통제를 마음대로 여러 알 먹는다', '몽정 뒤 속옷을 숨겨 둔다', '아파도 무조건 참는다', '생리대를 하루 내내 그대로 둔다'] }),
          art: art('two paper baskets with a paper check mark and a paper cross, a small paper hot water bottle and paper towel nearby', '스스로 돌보는 법', 'star', 'mint'),
        },
      }),
      X('activity.stretch', {
        title: '가벼운 스트레칭 따라 하기', method: '구간 타이머로 가벼운 스트레칭 따라 하기', tool: 'timer', minutes: 14,
        levels: { easy: '타이머를 하기 20초·쉬기 10초·2번으로 맞추고, 순서 카드 2장을 놓는다.', base: '타이머를 4번으로 맞추고, 순서 카드 4장을 놓은 뒤 점검 3칸에 표시한다.', challenge: '같은 순서를 마친 뒤, 불편할 때 멈추고 쉬는 내 규칙을 점검 4칸째에 정해 표시한다.' },
        activity: {
          title: '가벼운 스트레칭 타이머', tool: 'timer',
          teacher: '"배나 허리가 뻐근할 때 몸을 살살 풀어 주면 편해질 수 있어요." 보건 선생님이 안내한 쉬운 동작(무릎 당기기·고양이 자세)만 하고, 20초·10초는 우리 반 연습값이라고 밝힌다. "아파도 끝까지 해야 해요"라는 말에는 "불편하면 바로 멈추고 쉬어요. 그것도 스스로 돌보기예요"라고 말해 준다. 월경 여부와 상관없이 반 전체가 함께 한다.',
          task: '스트레칭 타이머를 맞추어 따라 하고, 순서 카드와 점검 칸을 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '하기 20초·쉬기 10초를 4번 하도록 타이머를 맞춰요(우리 반 연습값).', toolOptions: { title: '스트레칭 타이머', plan: { work: 10, rest: 10, rounds: 2 } }, target: { plan: { work: 20, rest: 10, rounds: 4 } }, difficulty: 0.2,
              levels: { easy: { prompt: '하기 20초·쉬기 10초를 2번 하도록 타이머를 맞춰요.', target: { plan: { work: 20, rest: 10, rounds: 2 } } } } },
            { prompt: '스트레칭 순서대로 카드를 놓아요.', toolOptions: { title: '스트레칭 순서', cards: ['고양이 자세', '편하게 앉기', '천천히 숨 고르기', '무릎 가슴 쪽으로 당기기'] }, target: { order: ['편하게 앉기', '무릎 가슴 쪽으로 당기기', '고양이 자세', '천천히 숨 고르기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '스트레칭 순서대로 카드를 놓아요(카드 2장).', toolOptions: { cards: ['고양이 자세', '편하게 앉기'] }, target: { order: ['편하게 앉기', '고양이 자세'] } } } },
            { prompt: '스트레칭을 한 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '스트레칭 점검' }, target: { selfCheck: ['천천히 따라 했다', '숨을 참지 않았다', '불편하면 멈췄다'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '스트레칭을 한 뒤 해낸 것과 내 멈춤 규칙에 표시해요(네 칸).', target: { selfCheck: ['천천히 따라 했다', '숨을 참지 않았다', '불편하면 멈췄다', '내 멈춤 규칙을 정했다'] } } },
              conclude: '가볍게 몸을 풀면 편해질 수 있어요. 불편하면 멈추고 쉬고, 계속 아프면 보건실에 가요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '스트레칭하다 불편할 때 지킬 내 멈춤 규칙을 써요.' }] },
        notes: '보건 선생님이 안내한 쉬운 동작만 한다. 20초·10초는 우리 반 연습값이다. 몸이 불편한 학생은 앉아서 숨 고르기만 해도 된다.',
      }),
      X('activity.day-plan', {
        title: '월경 기간 하루 일과 짜기', method: '월경 기간 하루 일과에 돌봄 카드 배치', tool: 'kitchen', minutes: 14,
        levels: { easy: '돌봄 카드 4장을 등교 전·쉬는 시간·점심·하교 뒤 칸에 나눈다.', base: '카드 7장을 네 칸에 나눈다.', challenge: '카드를 나눈 뒤, 둘째 문항에서 체육 수업이 있는 날 더 챙길 것만 고른다(헷갈리는 카드 섞임).' },
        activity: {
          title: '월경 기간 하루 일과', tool: 'kitchen',
          teacher: '"월경 기간에는 하루 중 언제 무엇을 챙기면 좋을까요?" 카드를 하나씩 읽고 시간 칸에 놓게 한다. 생리대는 몇 시간마다 갈아 주는 것이 좋다는 점을 보건 교과서 안내로 함께 읽는다. "월경 때는 체육을 꼭 빠져야 해요"라는 말에는 "몸이 괜찮으면 가볍게 할 수 있고, 불편하면 선생님께 말하고 쉬어요"라고 말해 준다.',
          task: '월경 기간 돌봄 카드를 하루 시간 칸에 나누고, 체육 있는 날 더 챙길 것을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('월경 기간 돌봄 카드를 하루 시간 칸에 나누어요.', { slots: ['등교 전', '쉬는 시간', '점심', '하교 뒤'], groups: { '등교 전': ['파우치 챙기기', '아침 먹기'], '쉬는 시간': ['생리대 갈기', '물 마시기'], 점심: ['밥 먹고 손 씻기'], '하교 뒤': ['따뜻하게 씻기', '일찍 잠자리 들기'] }, easy: 1 }, 0.2),
            PICK('체육 수업이 있는 날 더 챙길 것만 골라요.', '체육 있는 날', ['여벌 속옷 챙기기', '체육 뒤 생리대 갈기'], ['체육 무조건 빠지기', '물 안 마시기'], { easy: 1, easyTraps: 1, extraTraps: ['아파도 말 안 하기'], mode: 'pick' }, 0.25,
              { conclude: '월경 기간에는 생리대 갈기·물 마시기·손 씻기·일찍 자기를 하루에 넣어요. 불편하면 말해요.' }),
            { prompt: '몽정을 알아챈 날 아침 일과에 넣을 일을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '월경 기간 하루에 챙길 일을 써요.', columns: ['등교 전', '쉬는 시간', '하교 뒤'], cells: [['', '', '']] }] },
      }),
      X('activity.trip-choice', {
        title: '현장체험학습 날 갈림길', method: '현장체험학습 날 월경·몽정 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(하은의 아침·하준의 아침)을 지나 근거를 고른다.', base: '갈림 3번(버스에서 친구로서 도울 일 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 친구로서 도울 수 있는 행동을 모둠에서 하나 더 말한다(셋째 문항).' },
        activity: {
          title: '갈림길: 체험학습 날', tool: 'dilemma',
          teacher: '"오늘은 현장체험학습 날이에요. 하은이는 아침에 월경이 시작됐고, 하준이는 몽정을 알아채 늦을까 걱정해요." 두 친구의 선택을 차례로 고르고 결과를 읽게 한다. "아프면 참고 가야 해요"라는 말에는 "선생님께 미리 말해 두는 것도 스스로 돌보기예요"라고 말해 준다. 셋째 갈림에서는 내가 옆자리 친구라면 어떻게 도울지 고르게 한다.',
          task: '하은과 하준, 옆자리 친구의 갈림길마다 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '체험학습 날',
            steps: [
              { text: '체험학습 날 아침, 하은이는 월경이 시작된 것을 알았어요.', motif: 'sun',
                good: ['pack', '파우치를 넉넉히 챙기고 선생님께 미리 말한다', '선생님이 쉬는 곳을 알려 줘요.', [['하은', '마음이 편해요', 1]]],
                bad: ['hide', '아무 준비 없이 그냥 나선다', '버스에서 걱정이 커져요.', '미리 준비하고 말해 두면 걱정이 줄어요.', [['하은', '걱정돼요', -1]]] },
              { text: '하준이는 아침에 몽정을 알아채고 늦을까 걱정해요.', motif: 'moon',
                good: ['change', '속옷을 갈아입고 빨래 바구니에 넣고 출발한다', '제시간에 버스에 타요.', [['하준', '개운해요', 1]]],
                bad: ['skip', '체험학습을 안 가겠다고 한다', '친구들과의 하루를 놓쳐요.', '몽정은 자연스러운 일이라 갈아입으면 돼요.', [['하준', '아쉬워요', -1]]] },
              { text: '버스에서 옆자리 하은이가 배가 아프다며 얼굴을 찡그려요.', motif: 'cloud',
                good: ['help', '"선생님께 같이 말할까?"라고 묻고 함께 말한다', '선생님이 쉴 자리를 마련해 줘요.', [['하은', '도움을 받아요', 1], ['나', '좋은 친구가 돼요', 1]]],
                bad: ['loud', '"왜 그래?" 하고 크게 묻는다', '다른 친구들이 쳐다봐 하은이 곤란해해요.', '조용히 묻고 함께 어른께 말하면 도움이 돼요.', [['하은', '곤란해요', -1]]] },
            ],
            ending: '하은과 하준은 준비하고 도움을 청했고, 옆자리 친구는 조용히 도왔어요.',
            reasons: [{ id: 'askhelp', text: '도움을 청하는 것도 스스로 돌보기다' }, { id: 'natural', text: '월경·몽정은 자연스러워 준비하면 된다' }, { id: 'endure', text: '아파도 무조건 참아야 한다', why: '아프면 말하고 쉬는 것이 몸을 돌보는 거예요.' }, { id: 'medicine', text: '약을 많이 먹으면 빨리 낫는다', why: '약은 어른과 상의해 정해진 만큼만 먹어요.' }],
            good: ['askhelp', 'natural'],
            talk: '체험학습 날 친구로서 도울 수 있는 행동을 모둠에서 하나 더 말해요.',
            conclude: '월경·몽정은 준비하면 돼요. 아프거나 곤란하면 도움을 청하는 것이 스스로 돌보기예요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '체험학습 날 월경이 시작되면?', options: ['참고 아무에게도 말하지 않는다', '파우치를 챙기고 선생님께 미리 말한다', '집에 가겠다고 한다'], answer: '파우치를 챙기고 선생님께 미리 말한다' },
          { type: 'short', prompt: '옆자리 친구가 아파 보일 때 조용히 도울 방법을 써요.' },
        ] },
        notes: '이야기는 지어낸 것이다. 학생의 월경·몽정 경험을 묻지 않는다.',
      }),
      X('wrap.help-pins', {
        title: '보건실·비치 장소·보호자 연락 핀', method: '학교·집 도움 장소에 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '첫 질문 지도에 장소 두 곳만 보이고 보건실에 핀을 꽂는다.', base: '보건실·월경용품 비치 장소·집(보호자 연락) 세 곳에 핀을 꽂는다.', challenge: '넷째 질문에서 현장체험학습 장소 지도에서도 도움 장소(인솔 선생님 자리)에 핀을 꽂는다.' },
        wrap: {
          teacher: '"학교에서, 집에서, 체험학습 장소에서 도움이 필요하면 어디로 갈까요?" 핀을 꽂을 때마다 그곳에서 만날 사람을 말하게 한다. 지도는 지어낸 곳이니 우리 학교의 실제 보건실·월경용품 비치 장소는 교사가 말해 준다. "밖에서는 도움받을 곳이 없어요"라는 말에는 "인솔 선생님께 먼저 말하면 돼요"라고 말해 준다.',
          exitTicket: [
            PIN('배가 많이 아파요. 보건실에 핀을 꽂아요.', '보건실', 0.1, { levels: { easy: { prompt: '보건 선생님이 계신 곳에 핀을 꽂아요(장소 두 곳).', toolOptions: { places: [SCHOOL[0], SCHOOL[4]], readout: true } } } }),
            PIN('생리대가 떨어졌어요. 월경용품 비치 장소에 핀을 꽂아요.', '월경용품 비치 장소', 0.1),
            PIN('보호자께 연락하고 싶어요. 집에 핀을 꽂아요.', '집', 0.1),
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '체험학습 장소 지도(가상)', places: TRIP }, prompt: '체험학습 장소에서 도움이 필요해요. 인솔 선생님 자리에 핀을 꽂아요.', target: { place: '인솔 선생님 자리' }, difficulty: 0.15 },
          ],
        },
        worksheet: {
          title: '도움받을 곳',
          items: [
            { type: 'table', prompt: '장소마다 도움받을 곳을 써요.', columns: ['학교', '집', '체험학습 장소'], cells: [['', '', '']], answer: '보건실, 보호자, 인솔 선생님' },
            { type: 'short', prompt: '도움을 청할 때 할 말을 한 문장으로 써요.' },
          ],
        },
      }),
      X('wrap.care-kit', {
        title: '나의 돌봄 키트 그림 카드', method: '색종이 조각으로 나의 돌봄 키트 꾸미기', tool: 'collage', minutes: 6,
        levels: { easy: '돌봄 키트 조각 3개를 붙인다.', base: '조각 5개 이상으로 키트(파우치·여벌 속옷·따뜻한 물병 등)를 꾸민다.', challenge: '조각 5개 이상을 붙이고, 키트 쓰는 순서 번호를 정해 점검 칸에 표시한다.' },
        wrap: {
          teacher: '"나만의 돌봄 키트에는 무엇을 넣을까요? 긴 네모는 파우치, 네모는 여벌 속옷, 동그라미는 따뜻한 물병처럼 정해 봐요." 키트는 월경이 있든 없든 누구나 만들 수 있다고 말해 준다. "남자는 키트가 필요 없어요"라는 말에는 "몽정 뒤 갈아입을 속옷, 땀 닦을 수건도 돌봄 키트예요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'square', 'circle', 'heart', 'star', 'semi'], maxPieces: 10 }, prompt: '색종이 조각 5개 이상으로 나의 돌봄 키트를 꾸며요.', target: { pieces: { min: 5 } }, difficulty: 0.1,
              levels: { easy: { prompt: '색종이 조각 3개로 나의 돌봄 키트를 꾸며요.', target: { pieces: { min: 3 } } }, challenge: { prompt: '조각 5개 이상으로 키트를 꾸미고 쓰는 순서를 정해 표시해요.', target: { pieces: { min: 5 }, selfCheck: ['키트 쓰는 순서 번호를 정했다'] } } } },
            { type: 'choice', prompt: '월경통이 심할 때 알맞은 것은?', options: ['진통제를 마음대로 여러 알 먹는다', '보건실이나 보호자에게 도움을 청한다', '무조건 참는다'], answer: 1, difficulty: 0.1, explain: '아프면 도움을 청해요. 약은 어른과 상의해요.' },
          ],
        },
        worksheet: {
          title: '나의 돌봄 키트',
          items: [
            { type: 'draw', prompt: '나의 돌봄 키트를 그리고 넣을 것의 이름을 적어요.' },
            { type: 'short', prompt: '키트를 쓰는 순서를 번호로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 사춘기 스트레스와 사진 속 몸 (표준안 초 '몸의 변화와 사춘기') ========
  {
    const X = mk('stress-image', 6);
    const SCREEN = [['아침', 3], ['쉬는 시간', 2], ['방과 후', 6], ['잠들기 전', 9]];
    M.push(
      X('intro.stress-temp', {
        title: '스트레스 온도계', method: '가상 인물 상황별 스트레스 온도 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 상황 하나(여드름이 났다)의 온도를 시연으로 보인다.', base: '상황 셋(여드름·답장 없음·시험)을 교사가 읽어 주고, 손가락 다섯 개로 온도를 나타낸다.', challenge: '같은 상황이라도 사람마다 온도가 다를 수 있는 까닭을 말한다.' },
        intro: {
          teacher: '"지어낸 친구 솔은 아침에 여드름이 난 것을 봤어요. 솔의 스트레스 온도는 몇 칸쯤일까요?" 시연 단추로 \'걱정\' 온도계가 세 칸까지 오르는 모습을 보인다. 이어 \'친구가 답장을 안 한다\'·\'시험이 다가온다\'를 말로 들려주고 손가락으로 온도를 나타내게 한다. "스트레스는 혼자 참아야 해요"라는 말에는 "알아차리고 돌보면 돼요. 말할 사람이 있으면 더 가벼워져요"라고 말해 준다. 학생 자신의 온도는 묻지 않는다.',
          student: '세 상황 가운데 솔의 온도가 가장 높을 것 같은 상황을 골라 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '지어낸 친구 솔이 아침에 여드름이 난 것을 봤어요', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 3 }] },
          art: art('a paper thermometer with five segments beside a paper child looking into a small paper mirror', '마음의 온도를 알아차려요', 'cloud', 'sky'),
        },
      }),
      X('intro.screen-graph', {
        title: '하루 본 몸 사진 수 그래프', method: '하루 본 보정 몸 사진 수 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 막대 하나를 고른다.', base: '시간대 네 개를 견주어 말한다.', challenge: '그 시간대에 할 수 있는 다른 활동을 말로 고른다.' },
        intro: {
          teacher: '"이 그래프는 지어낸 친구가 하루 동안 영상·광고에서 본 \'보정된 몸 사진\' 수를 꾸민 가상 자료예요. 가장 많이 본 때는 언제일까요?" 시연 단추로 \'잠들기 전\'을 고르는 모습을 보인다. "사진 속 몸이 보통 몸이에요"라는 말에는 "사진은 빛·각도·보정으로 바뀌어요. 진짜 몸은 사람마다 다 달라요"라고 말해 준다. 숫자는 가상이라고 밝힌다.',
          student: '잠들기 전에 사진 대신 할 수 있는 일 하나를 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '하루 본 보정된 몸 사진(가상)', unit: '장', xLabel: '시간대', yLabel: '본 사진 수', data: SCREEN, question: '가장 많이 본 때는?', choices: SCREEN.map((x) => x[0]) }, sequence: [{ pick: 3 }] },
          art: art('a paper bar chart beside a paper phone screen showing a smoothed paper photo frame', '사진 속 몸은 보정될 수 있어요', 'star', 'lavender'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생의 휴대폰 사용 시간을 묻거나 견주지 않는다.',
      }),
      X('activity.cause-cope', {
        title: '스트레스 원인과 대처 잇기', method: '스트레스 원인과 건강한 대처 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '대처 카드를 건강한 대처·피할 대처 가지에 나누고, 둘째 문항에서 원인 2개에 대처를 잇는다.', base: '대처 카드 8장을 나누고, 원인 3개(몸 변화·친구 관계·공부)에 대처를 잇는다(맞지 않는 카드 섞임).', challenge: '카드를 더 나누고 잇기를 마친 뒤, 나에게 맞는 대처를 골라 까닭을 짝에게 말한다(셋째 문항).' },
        activity: {
          title: '스트레스 돌봄 그물', tool: 'mindmap',
          teacher: '"스트레스가 생길 때 하는 일 가운데 몸과 마음에 도움이 되는 것과 아닌 것은?" 카드를 하나씩 읽고 가지에 붙이게 한다. "밤새 휴대폰을 보면 잊혀요"라는 학생에게 "잠깐 잊어도 잠이 모자라 다음 날 더 힘들 수 있어요"라고 말해 준다. 둘째 문항에서 원인마다 맞는 대처를 잇게 한다.',
          task: '대처 카드를 가지에 나누고, 스트레스 원인마다 알맞은 대처를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('스트레스 대처 카드를 건강한 대처와 피할 대처로 나누어요.', { topic: '스트레스 대처', slots: ['건강한 대처', '피할 대처'], groups: { '건강한 대처': ['바깥에서 걷기', '믿는 사람에게 말하기', '잠 충분히 자기', '좋아하는 음악 듣기'], '피할 대처': ['밤새 휴대폰 보기', '혼자 꾹 참기', '친구에게 화풀이', '끼니 거르기'] }, extra: { '건강한 대처': ['일기에 적어 보기'], '피할 대처': ['사진 속 몸과 견주기'] } }, 0.2),
            MATCH('스트레스 원인마다 알맞은 대처를 이어요.', [['여드름이 나서 속상해', '순하게 씻고 보건실에 묻기'], ['친구가 답장을 안 해', '직접 묻거나 믿는 사람에게 말하기'], ['시험이 걱정돼', '계획 세우고 푹 자기']], { easy: 2, traps: ['밤새 휴대폰 보기'], title: '원인과 대처', topic: '원인 잇기' }, 0.25,
              { conclude: '스트레스는 알아차리고 건강하게 돌봐요. 혼자 참지 말고 믿는 사람에게 말해요.' }),
            { prompt: '나에게 맞는 건강한 대처 하나를 골라 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '스트레스가 생길 때 해 볼 건강한 대처 두 가지를 써요.' }] },
      }),
      X('activity.breathe', {
        title: '숨 고르기 따라 하기', method: '구간 타이머로 숨 고르기 따라 하고 점검', tool: 'timer', minutes: 14,
        levels: { easy: '타이머를 들이쉬기 5초·내쉬기 5초·3번으로 맞추고 따라 한다.', base: '5번으로 맞추고 따라 한 뒤, 하기 전·한 뒤 마음 점수를 적고 점검 칸에 표시한다.', challenge: '같은 순서를 마치고, 스트레스 상황에서 언제 쓸지 계획을 정해 점검 넷째 칸에 표시한다.' },
        activity: {
          title: '숨 고르기 타이머', tool: 'timer',
          teacher: '"마음이 출렁일 때 숨을 천천히 쉬면 몸이 먼저 조용해져요." 타이머의 \'하기\'는 들이쉬기, \'쉬기\'는 내쉬기로 쓰자고 약속하고, 5초는 우리 반 연습값이라고 밝힌다. 다 같이 따라 한다. "숨쉬기로 고민이 사라져요"라는 말에는 "고민이 다 사라지진 않아도 생각할 힘이 생겨요. 그래도 힘들면 믿는 어른께 말해요"라고 말해 준다. 어지러우면 바로 멈춘다.',
          task: '숨 고르기 타이머를 맞추어 따라 하고, 마음 점수와 점검 칸을 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '들이쉬기 5초·내쉬기 5초를 5번 하도록 타이머를 맞춰요(우리 반 연습값).', toolOptions: { title: '숨 고르기 타이머', plan: { work: 10, rest: 10, rounds: 2 } }, target: { plan: { work: 5, rest: 5, rounds: 5 } }, difficulty: 0.2,
              levels: { easy: { prompt: '들이쉬기 5초·내쉬기 5초를 3번 하도록 타이머를 맞춰요.', target: { plan: { work: 5, rest: 5, rounds: 3 } } } } },
            { prompt: '숨 고르기를 하기 전과 한 뒤의 마음 점수(1~5)를 적어요.', toolOptions: { title: '마음 점수 기록', fields: [{ label: '하기 전 마음', unit: '점' }, { label: '한 뒤 마음', unit: '점' }] }, target: { records: true }, difficulty: 0.1 },
            { prompt: '숨 고르기를 한 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '숨 고르기 점검' }, target: { selfCheck: ['천천히 따라 했다', '어지러우면 멈췄다', '마음 변화를 알아차렸다'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '숨 고르기를 한 뒤 해낸 것과 쓸 때 계획에 표시해요(네 칸).', target: { selfCheck: ['천천히 따라 했다', '어지러우면 멈췄다', '마음 변화를 알아차렸다', '언제 쓸지 계획을 정했다'] } } },
              conclude: '숨을 천천히 고르면 몸과 마음이 함께 편해져요. 그래도 힘들면 믿는 어른께 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '숨 고르기를 쓰고 싶은 때를 하나 써요(예: 발표 전).' }] },
        notes: '계획의 4초는 타이머 최소값이 5초라 5초로 했다(우리 반 연습값). 마음 점수는 학생이 스스로 적는 값으로 채점하지 않는다.',
      }),
      X('activity.as-i-am', {
        title: '있는 그대로의 나 포스터', method: '내 몸이 할 수 있는 일 포스터 꾸미기', tool: 'collage', minutes: 27,
        levels: { easy: '내 몸이 할 수 있는 일 조각 3개를 붙이고, 존중 말 띠는 교사가 함께 정한다.', base: '조각 5개를 붙이고, 둘째 문항에서 존중 말 띠(긴 네모)를 단다.', challenge: '조각과 띠를 붙인 뒤, 셋째 문항에서 광고 문구 하나를 존중하는 문구로 바꿔 넣고 점검한다.' },
        activity: {
          title: '있는 그대로의 나', tool: 'collage',
          teacher: '"내 몸은 어떻게 보이는지보다 무엇을 할 수 있는지가 더 많아요. 달리는 다리, 그림 그리는 손, 웃는 얼굴처럼요." 조각마다 \'할 수 있는 일\'을 정해 붙이게 한다. "날씬해야 멋져요"라는 말에는 "몸 모양은 사람마다 달라요. 견주는 말 대신 존중하는 말을 달아 볼까요?"라고 말해 준다. 끝에 모둠이 서로 포스터를 보고 칭찬 쪽지를 붙이게 한다. 몸 모양을 평가하는 쪽지는 쓰지 않는다.',
          task: '내 몸이 할 수 있는 일 조각을 붙이고 존중하는 말 띠를 달아 포스터를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '내 몸이 할 수 있는 일 조각을 5개 이상 붙여요.', toolOptions: { shapes: ['circle', 'star', 'heart', 'leaf', 'semi', 'triangle'], maxPieces: 12 }, target: { pieces: { min: 5 } }, difficulty: 0.1,
              levels: { easy: { prompt: '내 몸이 할 수 있는 일 조각을 3개 이상 붙여요.', target: { pieces: { min: 3 } } } } },
            { prompt: '포스터 아래에 존중하는 말 띠(큰 긴 네모)를 달고 조각 2개를 더 붙여요.', toolOptions: { shapes: ['rect', 'circle', 'star', 'heart'], maxPieces: 12 }, target: { has: [{ shape: 'rect', size: 'l', min: 1 }], pieces: { min: 3 } }, difficulty: 0.15 },
            { prompt: '포스터를 꾸미고 넣은 것을 점검 칸에 표시해요.', toolOptions: { maxPieces: 16 }, target: { selfCheck: ['견주는 말 대신 존중하는 말을 정했다', '내 몸이 할 수 있는 일을 넣었다'], minPieces: 3 }, difficulty: 0.1,
              levels: { challenge: { prompt: '광고 문구 하나를 존중하는 문구로 바꿔 넣고 점검 칸에 표시해요.', target: { selfCheck: ['견주는 말 대신 존중하는 말을 정했다', '내 몸이 할 수 있는 일을 넣었다', '광고 문구 하나를 존중하는 문구로 바꿨다'], minPieces: 3 } } },
              conclude: '내 몸은 할 수 있는 일이 많아요. 사진 속 몸과 견주지 않고 있는 그대로 존중해요.' },
            { prompt: '모둠 친구 포스터를 보고 칭찬 한마디를 말해요(몸 모양 말고 할 수 있는 일을 칭찬해요).', free: true, talk: true },
          ],
        },
        worksheet: { items: [
          { type: 'short', prompt: '내 포스터의 존중하는 말 띠에 쓴 문장을 써요.' },
          { type: 'short', prompt: '"날씬해져야 멋져요" 같은 광고 문구를 존중하는 문구로 바꿔 써요.' },
        ] },
        notes: '학생의 몸을 사진으로 찍거나 붙이지 않는다. 칭찬 쪽지는 몸 모양이 아니라 할 수 있는 일·노력을 칭찬한다.',
      }),
      X('wrap.cheer-line', {
        title: '나에게 하는 응원 문장', method: '나에게 하는 응원 문장 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀로 한 문장을 쓰고 기준 1개(구체적인가)를 점검한다.', base: '두 문장을 쓰고 기준 2개(구체적인가·견주는 말이 없나)를 점검한다.', challenge: '두 문장에 도움을 청할 사람을 넣고 기준 3개를 점검한다.' },
        wrap: {
          teacher: '"스트레스 받을 때 나에게 무슨 말을 해 주면 좋을까요?" "힘내"보다 "발표 전엔 숨 다섯 번 쉬고 하면 돼"처럼 구체적으로 쓰게 한다. "남보다 잘해야 해"처럼 견주는 말이 들어가면 "나만의 속도로 하는 말로 바꿔 볼까요?"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { title: '나에게 하는 응원', topic: '스트레스 받을 때 나에게 해 줄 응원을 두 문장으로 써요.', minChars: 15, maxChars: 160 }, prompt: '스트레스 받을 때 나에게 해 줄 응원을 두 문장으로 써요.', target: { selfCheck: ['구체적으로 썼다', '견주는 말이 없다'], chars: [15, 160], sentences: [2, 3] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '나에게 해 줄 응원을 한 문장으로 써요(문장 틀을 써도 돼요).', toolOptions: { starter: '힘들 때는 ___ 하면 괜찮아.' }, target: { selfCheck: ['구체적으로 썼다'], chars: [8, 160], sentences: [1, 3] } },
                challenge: { prompt: '응원 두 문장에 도움을 청할 사람을 넣어 써요.', target: { selfCheck: ['구체적으로 썼다', '견주는 말이 없다', '도움 청할 사람을 넣었다'], chars: [20, 180], sentences: [2, 3], mustInclude: [['보호자', '선생님', '친구', '어른']] } },
              } },
            { type: 'choice', prompt: '스트레스를 다루는 바른 생각은?', options: ['혼자 꾹 참는다', '알아차리고 돌보고, 힘들면 말한다', '사진 속 몸과 견준다'], answer: 1, difficulty: 0.1, explain: '알아차리고 건강하게 돌보고, 힘들면 믿는 사람에게 말해요.' },
          ],
        },
        worksheet: {
          title: '나에게 하는 응원',
          items: [
            { type: 'short', prompt: '스트레스 받을 때 나에게 해 줄 응원 문장을 써요.' },
            { type: 'short', prompt: '힘들 때 이야기할 사람 한 명을 써요(이름 대신 \'보호자\'처럼).' },
          ],
        },
      }),
      X('wrap.friend-fill', {
        title: '"내 얼굴이 싫어"라는 친구에게', method: '자기 몸이 싫다는 친구 말에 들어 주는 말 채우기', tool: 'story', minutes: 6,
        levels: { easy: '친구 말 뒤 빈칸 하나("그렇게 느꼈구나")를 채운다.', base: '빈칸 세 개를 채운다(알맞지 않은 카드 섞임).', challenge: '빈칸을 채우고, 둘째 질문에서 친구가 계속 힘들어할 때 함께 갈 어른을 고른다.' },
        wrap: {
          teacher: '"친구가 \'나는 내 얼굴이 싫어\'라고 하면 어떻게 들어 줄 수 있을까요?" 말풍선을 함께 읽고 채우게 한다. "아니야, 넌 예뻐"처럼 바로 바꾸려는 말도 좋은 마음이지만, 먼저 "그렇게 느꼈구나" 하고 들어 주는 것이 힘이 된다고 말해 준다. 외모를 평가하는 말 대신 할 수 있는 일이나 좋은 점을 말하게 한다.',
          exitTicket: [
            EX('story', { prompt: '친구 말 뒤 빈칸에 들어 주는 말을 넣어요.', toolOptions: { mode: 'fill', title: '쉬는 시간(지어낸 장면)', slots: [{ id: 'f1', who: '나', label: '먼저 들어 주기: "___"' }, { id: 'f2', who: '나', label: '좋은 점 말하기: "___"' }, { id: 'f3', who: '나', label: '함께하기: "___"' }], cards: ['그렇게 느꼈구나', '넌 친구를 잘 웃게 해', '힘들면 같이 어른께 말하자', '맞아, 좀 그래'] }, target: { fill: { f1: '그렇게 느꼈구나', f2: '넌 친구를 잘 웃게 해', f3: '힘들면 같이 어른께 말하자' } }, difficulty: 0.15,
              levels: { easy: { prompt: '친구 말 뒤 첫 빈칸에 들어 주는 말을 넣어요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '먼저 들어 주기: "___"' }], cards: ['그렇게 느꼈구나', '맞아, 좀 그래'] }, target: { fill: { f1: '그렇게 느꼈구나' } } } } }),
            { type: 'choice', prompt: '친구가 계속 힘들어하면 함께 갈 사람은?', options: ['상담 선생님이나 보호자', '모르는 온라인 사람', '아무도 없다'], answer: 0, difficulty: 0.1, explain: '계속 힘들어하면 믿는 어른께 함께 가요.' },
          ],
        },
        worksheet: {
          title: '들어 주는 말',
          items: [
            { type: 'short', prompt: '자기 몸이 싫다는 친구에게 먼저 건넬 들어 주는 말을 써요.' },
            { type: 'short', prompt: '외모 말고 친구의 좋은 점을 말하는 문장을 하나 써요.' },
          ],
        },
        notes: '계획의 친구 말("나 너무 못생겼어")은 평가 낱말을 피하려고 "나는 내 얼굴이 싫어"로 바꾸었다.',
      }),
    );
  }

  // ======== 6학년 · 성 정보, 사실과 소문 가려내기 (표준안 초 '몸의 변화와 사춘기', 디지털 성폭력 예방) ========
  {
    const X = mk('info-check', 6);
    const CRIT = [{ id: 'who', text: '누가 썼는지 알 수 있다' }, { id: 'why', text: '근거가 적혀 있다' }, { id: 'same', text: '보건 교과서와 같은 말이다' }, { id: 'calm', text: '사라고 조르지 않는다' }];
    const CASE = (prompt, pass, easyIds, d, more) => Object.assign({
      prompt, toolOptions: { mode: 'checklist', title: '정보 믿기 전 점검', items: CRIT }, target: { checklist: pass }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(항목 두 개).`, toolOptions: { items: CRIT.filter((c) => easyIds.includes(c.id)) }, target: { checklist: pass.filter((p) => easyIds.includes(p)) } } },
    }, more);
    // 거북이 판: ★ = 닫기 → 보지 않기 → 어른에게 알리기, 도착 = 차단 설정, 바위 = 눌러 보기
    const ROUTE = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[2, 3], [4, 3], [4, 1]], rocks: [[1, 2], [3, 2]], blocks: ['fwd', 'left', 'right', 'rep'] };
    M.push(
      X('intro.heard-sort', {
        title: '들은 말 사실·소문 나누기', method: '들은 성 정보 사실·소문·확인 필요 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 3장이 \'사실\'·\'소문\' 두 바구니에 들어가는 시연을 보인다.', base: '카드 6장이 \'사실\'·\'소문\'·\'확인 필요\' 세 바구니에 다 들어가는 시연을 본다.', challenge: '\'확인 필요\' 카드를 누구에게 물을지 정해 말한다.' },
        intro: {
          teacher: '"친구나 인터넷에서 들은 몸에 관한 말, 다 믿어도 될까요?" 시연 단추로 카드가 사실·소문·확인 필요 바구니에 들어가는 모습을 보인다. "많이 퍼진 말이면 사실이에요"라는 말에는 "많이 퍼져도 틀린 말일 수 있어요. 누가, 무슨 근거로 말했는지 봐요"라고 말해 준다. 확인 필요 카드는 보건 선생님께 함께 물어보자고 정한다.',
          student: '\'확인 필요\' 카드 하나를 골라 누구에게 물어볼지 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['사실', '소문', '확인 필요'], { 사실: ['처음엔 월경 주기가 들쭉날쭉할 수 있다', '사춘기 시작은 사람마다 다르다'], 소문: ['몽정을 하면 키가 안 큰다', '여드름은 안 씻어서만 생긴다'], '확인 필요': ['광고 속 키 크는 약', '친구가 들은 가슴 커지는 음식'] }),
          art: art('three paper baskets with a check mark, a cross and a question mark, small paper speech bubbles flying in', '누가, 무슨 근거로?', 'star', 'sky'),
        },
      }),
      X('intro.popup', {
        title: '이상한 광고 창이 떴을 때', method: '선정적 광고 창이 떴을 때 갈래 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 보기 두 개(눌러 본다·닫는다) 가운데 고르는 시연을 보인다.', base: '보기 세 개(어른에게 알린다 더함)의 결과와 마음을 함께 읽는다.', challenge: '같은 창이 두 번째로 뜰 때 할 행동(차단 설정·어른과 함께)을 말로 고른다.' },
        intro: {
          teacher: '"게임을 하는데 어른용 사진이 있는 광고 창이 갑자기 떴어요. 어떻게 할까요?" 실제 광고 화면은 보여 주지 않는다. 시연 단추로 \'어른에게 알린다\'를 고르고 결과를 읽어 준다. "광고 창은 눌러 봐도 괜찮아요"라는 말에는 "누르면 더 이상한 화면이 이어지거나 내 정보가 새어 나갈 수 있어요. 닫고 알려요"라고 말해 준다. 창이 뜬 것은 본 사람의 잘못이 아니라고 말해 준다.',
          student: '광고 창을 닫은 뒤 누구에게 어떻게 말할지 짝에게 한 문장으로 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '게임 중에 어른용 사진이 있는 광고 창이 갑자기 떴어요.', ask: '어떻게 할까요?', motif: 'storm', choices: [{ id: 'click', text: '눌러 본다', result: '더 이상한 화면이 이어져요.', mood: '걱정' }, { id: 'close', text: '닫는다', result: '창이 사라졌지만 또 뜰 수 있어요.', mood: '편안함' }, { id: 'tell', text: '닫고 어른에게 알린다', result: '보호자가 차단 설정을 함께 해 줘요.', mood: '편안함' }] }, sequence: [{ choice: 'tell' }] },
          art: art('a paper tablet with a paper pop-up window and a big paper close button, a paper hand pressing it', '닫고, 알려요', 'storm', 'lavender'),
        },
        notes: '실제 선정적 광고 화면을 보여 주지 않는다. 학생에게 본 적이 있는지 묻지 않는다.',
      }),
      X('activity.source-check', {
        title: '정보 믿기 전 점검표', method: '정보 믿기 전 점검표로 가상 글 살피기', tool: 'kitchen', minutes: 14,
        levels: { easy: '가상 글마다 점검 항목 2개만 보고 그 글이 지킨 항목에 표시한다.', base: '가상 글 3개를 점검 항목 4개로 살펴 지킨 항목에만 표시한다.', challenge: '글 3개를 점검한 뒤, 통과하지 못한 글을 바른 정보로 고쳐 짝에게 말한다(넷째 문항).' },
        activity: {
          title: '정보 점검표', tool: 'kitchen',
          teacher: '"정보를 믿기 전에 네 가지를 물어봐요. 누가 썼나, 근거가 있나, 보건 교과서와 같은 말인가, 사라고 조르나." 가상 글을 소리 내어 읽고 그 글이 지킨 항목에만 표시하게 한다. "광고에 \'의사 추천\'이라고 쓰여 있으니 믿어도 돼요"라는 말에는 "누가 추천했는지, 근거가 있는지 확인할 수 있나요?"라고 묻는다. 글은 모두 지어낸 것이다.',
          task: '가상 글을 읽고, 정보 점검표에서 그 글이 지킨 항목에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CASE('글 1: 보건실 안내문 "처음엔 월경 주기가 들쭉날쭉할 수 있어요(보건 교과서 ○쪽)"', ['who', 'why', 'same', 'calm'], ['who', 'calm'], 0.15),
            CASE('글 2: 누군지 모르는 사람이 쓴 "몽정하면 키가 안 큰대"', ['calm'], ['why', 'calm'], 0.25),
            CASE('글 3: ○○회사 광고 "키 크는 약, 지금 안 사면 늦어요!"', ['who'], ['who', 'same'], 0.25,
              { conclude: '누가 썼는지, 근거가 있는지, 교과서와 같은지, 조르지 않는지 점검하고 믿어요.' }),
            { prompt: '점검을 통과하지 못한 글 하나를 바른 정보로 고쳐 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '정보를 믿기 전 점검할 것에 모두 표시해요.', options: ['누가 썼나', '근거가 있나', '보건 교과서와 같은가', '사라고 조르나'] }] },
      }),
      X('activity.close-route', {
        title: '광고 창 피하기 차례 코딩', method: '거북이 코딩으로 광고 창 피하는 차례 지나기', tool: 'block-coding', minutes: 14,
        levels: { easy: '작은 판(칸 3개)에서 블록 6개 이내로 거북이를 도착시킨다.', base: '큰 판에서 별 칸 3개(닫기·보지 않기·어른에게 알리기)를 지나 바위(눌러 보기)를 피해 차단 설정 칸에 도착시키고, 둘째 문항에서 프로그램이 멈출 칸을 고른다.', challenge: '같은 큰 판을 반복 블록을 써서 블록 5개 이하로 도착시킨다.' },
        activity: {
          title: '광고 창 피하기 길', tool: 'block-coding',
          teacher: '"판의 별 칸은 차례로 닫기, 보지 않기, 어른에게 알리기예요. 도착 칸은 차단 설정이에요. 바위 칸은 \'눌러 보기\'예요." 칠판에 판을 그리고 칸마다 이름을 적어 둔다(교구 판에는 칸 이름이 없다). 도전 모둠에는 "같은 블록이 되풀이되면 반복 블록으로 줄일 수 있어요"라고 말해 준다. "한 번만 눌러 볼래요"라는 말에는 "한 번 누르면 더 이상한 창이 이어질 수 있어요"라고 말해 준다.',
          task: '거북이가 별 칸(닫기·보지 않기·어른에게 알리기)을 지나 차단 설정 칸에 닿도록 블록을 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '별 칸 세 곳을 지나 바위를 피해 차단 설정 칸에 닿도록 블록을 놓아요.', toolOptions: ROUTE, target: { reach: true, stars: true }, difficulty: 0.25,
              levels: {
                easy: { prompt: '별 칸 두 곳을 지나 도착 칸에 닿도록 블록을 6개 이내로 놓아요.', toolOptions: { cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 2], [3, 1]], rocks: [[1, 0]], maxBlocks: 6 }, target: { reach: true, stars: true, maxBlocks: 6 } },
                challenge: { prompt: '반복 블록을 써서 블록 5개 이하로 차단 설정 칸에 닿아요.', target: { reach: true, stars: true, maxBlocks: 5, use: ['rep'] } },
              } },
            { prompt: '이 프로그램대로 가면 거북이가 멈출 칸을 골라요.', toolOptions: Object.assign({}, ROUTE, { mode: 'trace', program: ['fwd', 'fwd', 'left', 'fwd'] }), target: { end: { x: 2, y: 2 } }, difficulty: 0.25,
              conclude: '광고 창은 닫고, 보지 않고, 어른에게 알리고, 차단 설정을 해요. 눌러 보지 않아요.' },
            { prompt: '별 칸 세 곳과 도착 칸의 뜻을 차례대로 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '이상한 광고 창이 뜨면 할 일을 차례대로 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '닫기, 보지 않기, 어른에게 알리기, 차단 설정' }] },
        notes: '거북이 판에는 칸 이름이 없다. 별·도착·바위 칸의 뜻은 칠판과 활동지에 적어 준다.',
      }),
      X('activity.link-choice', {
        title: '친구가 보낸 링크 갈림길', method: '친구가 보낸 선정적 영상 링크 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(열지 여부·답장)을 지나 근거를 고른다.', base: '갈림 3번(친구가 다시 조를 때 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 친구에게 보낼 답장을 모둠에서 직접 지어 결과를 견준다(셋째 문항).' },
        activity: {
          title: '친구가 보낸 링크', tool: 'dilemma',
          teacher: '"친구가 \'이거 봐 봐\'라며 어른용 영상 링크를 보냈어요." 링크나 영상의 내용은 말하지 않는다. 고를 때마다 결과를 읽게 한다. "친구가 보낸 거니 괜찮아요"라는 말에는 "친구가 보냈어도 나에게 해로운 영상은 피해요"라고 말해 준다. 링크를 받은 것은 받은 사람의 잘못이 아니고, 어른에게 알린 것은 잘한 일이라고 말해 준다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '친구가 보낸 링크',
            steps: [
              { text: '친구가 "이거 봐 봐"라며 어른용 영상 링크를 보냈어요.', motif: 'cloud',
                good: ['noopen', '링크를 열지 않는다', '내 화면은 그대로 안전해요.', [['나', '마음이 편해요', 1]]],
                bad: ['open', '궁금해서 열어 본다', '보고 싶지 않던 장면이 머리에 남아요.', '선정적인 영상은 열지 않고 피해요.', [['나', '마음이 불편해요', -1]]] },
              { text: '친구에게 뭐라고 답할까요?', motif: 'house',
                good: ['reply', '"이런 건 안 볼래, 너도 보지 마"라고 답한다', '친구가 "알았어"라고 답해요.', [['친구', '다시 생각해요', 1]]],
                bad: ['forward', '다른 친구에게 넘긴다', '링크가 반 전체로 퍼져요.', '넘기면 다른 친구도 해로운 영상을 보게 돼요.', [['반 친구들', '불편해요', -1]]] },
              { text: '친구가 "겁쟁이야? 한 번만 봐"라며 다시 졸라요.', motif: 'wind',
                good: ['tell', '보호자께 알리고 함께 차단한다', '보호자가 차단 설정을 도와줘요.', [['나', '보호받아요', 1], ['친구', '어른의 도움을 받게 돼요', 0]]],
                bad: ['give', '졸라서 결국 열어 본다', '다음에도 또 보내와요.', '조른다고 해로운 것이 괜찮아지지 않아요.', [['나', '또 불편해요', -1]]] },
            ],
            ending: '열지 않고, 분명히 답하고, 어른에게 알려 나를 지켰어요.',
            reasons: [{ id: 'protect', text: '해로운 영상을 피하는 것이 나를 지키는 일이다' }, { id: 'adult', text: '이상한 링크는 어른에게 알린다' }, { id: 'once', text: '한 번 보는 건 괜찮다', why: '한 번 본 장면도 마음에 남을 수 있어요.' }, { id: 'popular', text: '많이 퍼진 것은 괜찮은 것이다', why: '많이 퍼져도 해로울 수 있어요.' }],
            good: ['protect', 'adult'],
            talk: '친구에게 보낼 답장을 모둠에서 직접 지어 말하고, 결과가 어떻게 달라질지 견주어요.',
            conclude: '선정적인 링크는 열지 않고, 넘기지 않고, 어른에게 알려요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '친구가 어른용 영상 링크를 보내면?', options: ['열어 본다', '열지 않고 어른에게 알린다', '다른 친구에게 넘긴다'], answer: '열지 않고 어른에게 알린다' },
          { type: 'short', prompt: '링크를 보낸 친구에게 보낼 답장을 써요.' },
        ] },
      }),
      X('wrap.trusted-sources', {
        title: '믿을 수 있는 출처 가지', method: '궁금할 때 믿을 수 있는 출처 가지 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 1개(사람)에 출처 카드를 붙인다.', base: '가지 2개(사람·자료)에 출처 카드를 붙인다(함정 카드 섞임).', challenge: '카드를 붙인 뒤, 둘째 질문에 출처마다 물어볼 질문 하나를 쓴다.' },
        wrap: {
          teacher: '"몸에 대해 궁금할 때 어디에 물어보면 좋을까요?" 출처 카드를 읽고 가지에 붙이게 한다. \'모르는 누리집 글\'을 붙이려는 학생에게 "누가 썼는지 알 수 있나요?"라고 되묻는다. 궁금한 것을 묻는 건 부끄러운 일이 아니라고 말해 준다.',
          exitTicket: [
            EX('mindmap', SORTN('궁금할 때 물어볼 출처를 가지에 붙여요.', { topic: '궁금할 때', slots: ['사람', '자료'], easySlots: ['사람'], groups: { 사람: ['보호자', '보건 선생님', '담임 선생님'], 자료: ['보건 교과서', '학교 안내문', '보건실 게시물'] }, traps: ['모르는 누리집 글'] }, 0.15)),
            { type: 'short', prompt: '보건 선생님께 물어보고 싶은 질문 하나를 써요(이름은 쓰지 않아요).' },
            { type: 'choice', prompt: '많이 퍼진 몸에 관한 말을 들었을 때 알맞은 것은?', options: ['많이 퍼졌으니 믿는다', '믿을 만한 출처에서 확인한다', '친구에게 더 퍼뜨린다'], answer: 1, difficulty: 0.1, explain: '보호자·보건 선생님·교과서로 확인해요.' },
          ],
        },
        worksheet: {
          title: '믿을 수 있는 출처',
          items: [
            { type: 'table', prompt: '믿을 수 있는 출처를 써요.', columns: ['사람', '자료'], cells: [['', ''], ['', '']] },
            { type: 'short', prompt: '출처 하나에 물어볼 질문을 써요.' },
          ],
        },
      }),
      X('wrap.check-chant', {
        title: '확인 구호 리듬', method: '정보 확인 구호에 박자 짓기', tool: 'keyboard', minutes: 6,
        levels: { easy: '첫 마디("누가 썼지?") 리듬을 듣고 따라 놓는다.', base: '세 마디("누가 썼지? 근거는? 어른께 물어봐!")에 4박 리듬을 짓는다.', challenge: '구호에 한 줄을 더 지어 네 마디에 4박 리듬을 짓는다.' },
        wrap: {
          teacher: '"누가 썼지? 근거는? 어른께 물어봐!" 반 전체가 한 번 외친 뒤 리듬을 짓게 한다. 한 마디는 4박이라는 점을 짚는다. 도전 모둠에게 "넷째 줄에는 무엇을 넣으면 좋을까요? 예를 들면 \'교과서로 확인!\'처럼요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 3, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '확인 구호 세 마디에 마디마다 4박이 되게 리듬을 지어요.', target: { beats: true }, difficulty: 0.15,
              levels: {
                easy: { prompt: '"누가 썼지?" 한 마디 리듬을 듣고 똑같이 블록을 놓아요.', toolOptions: { measures: 1, pattern: ['e', 'e', 'q', 'h'] }, target: { rhythm: ['e', 'e', 'q', 'h'] } },
                challenge: { prompt: '확인 구호에 한 줄을 더 지어 네 마디 리듬을 지어요.', toolOptions: { measures: 4 }, target: { beats: true } },
              } },
            { type: 'choice', prompt: '성 정보를 믿기 전에 먼저 물어볼 것은?', options: ['얼마나 재미있나', '누가 썼고 근거가 있나', '몇 명이 봤나'], answer: 1, difficulty: 0.1, explain: '누가 썼는지, 근거가 있는지 먼저 확인해요.' },
          ],
        },
        worksheet: {
          title: '정보 확인 구호',
          items: [
            { type: 'short', prompt: '우리 반 정보 확인 구호를 써요.' },
            { type: 'choice', prompt: '이상한 광고 창이 뜨면?', options: ['눌러 본다', '닫고 어른에게 알린다', '친구에게 보여 준다'], answer: '닫고 어른에게 알린다' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 몸짓으로 보내는 "싫어"와 동의 바꾸기 (표준안 초 '몸의 경계·싫어요 말하기') ========
  {
    const X = mk('consent-change', 6);
    const LIGHT = [{ shape: 'circle', color: '초록', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }];
    M.push(
      X('intro.gesture-read', {
        title: '몸짓 신호 읽기', method: '몸짓 신호를 마음 칸에 나누기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 몸짓 카드 3장이 마음 칸에 들어가는 시연을 보인다.', base: '몸짓 카드 6장이 \'좋아\'·\'싫어\'·\'잘 모르겠어\' 칸에 다 들어가는 시연을 본다.', challenge: '\'잘 모르겠어\' 신호일 때 할 말("괜찮아? 쉬었다 할까?")을 말로 고른다.' },
        intro: {
          teacher: '"\'싫어\'는 말로만 올까요?" 몸짓 카드를 하나씩 읽고 시연 단추로 마음 칸에 들어가는 모습을 보인다. "말로 싫다고 안 했으니 괜찮아요"라는 말에는 "물러나거나 고개를 돌리는 것도 \'싫어\' 신호예요. 신호가 보이면 멈추고 물어요"라고 말해 준다. 오늘은 동의를 바꾸는 마음도 존중하는 법을 배운다고 밝힌다.',
          student: '\'싫어\' 칸의 몸짓 하나를 골라, 그 신호를 보면 무엇을 할지 짝에게 말해 보아요.',
          demo: SDEMO('emotion', ['좋아', '싫어', '잘 모르겠어'], { 좋아: ['웃으며 다가옴', '신나서 박수 침'], 싫어: ['뒤로 물러남', '고개를 돌림'], '잘 모르겠어': ['"음…" 하고 머뭇거림', '굳은 표정으로 가만히'] }, { mode: 'sort' }),
          art: art('three paper signal cards with simple paper figures stepping back, turning away and smiling', '몸짓도 말을 해요', 'star', 'peach'),
        },
      }),
      X('intro.changed-mind', {
        title: '처음엔 좋다던 친구 장면', method: '마음을 바꾼 친구 장면 차례 놓기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 3장이 놓이는 시연을 보인다.', base: '장면 4장("알겠어, 쉬자"까지)이 놓이는 시연을 본다.', challenge: '친구가 멈춘 뒤의 장면을 하나 더 지어 말한다.' },
        intro: {
          teacher: '"처음에 \'좋아!\'라고 했던 친구가 중간에 \'이제 그만할래\'라고 해요. 그래도 계속해야 할까요?" 시연 단추로 장면 카드가 차례로 놓이는 모습을 보인다. "처음에 좋다고 했으니 끝까지 해야 해요"라는 말에는 "동의는 언제든 바꿀 수 있어요. 바뀐 마음도 존중해요"라고 말해 준다.',
          student: '친구가 멈춘 뒤에 이어질 장면을 하나 지어 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { slots: 4, title: '쉬는 시간 공 던지기(지어낸 장면)', cards: [{ id: 'play', text: '신나게 함께 놀아요', motif: 'sun' }, { id: 'yes', text: '"공 던지기 할래?" "좋아!"', motif: 'star' }, { id: 'ok', text: '"알겠어, 쉬자"', motif: 'leaf' }, { id: 'stop', text: '"이제 그만할래"', motif: 'cloud' }], shuffle: false }, sequence: [{ order: ['yes', 'play', 'stop'] }, { order: ['yes', 'play', 'stop', 'ok'] }] },
          art: art('two paper children with a paper ball, one raising a hand to pause, the other nodding', '마음은 바뀔 수 있어요', 'leaf', 'mint'),
        },
      }),
      X('activity.stop-signals', {
        title: '멈춰야 할 신호 나누기', method: '말·몸짓 신호를 계속해도 됨·멈춰야 함으로 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '신호 카드 4장을 두 바구니에 나눈다(틀리면 까닭이 나옴).', base: '신호 카드 8장을 두 바구니에 나눈다.', challenge: '카드 10장을 나눈 뒤, 둘째 문항에서 신호가 섞일 때 확인하는 말과 밀어붙이는 말을 가른다.' },
        activity: {
          title: '계속해도 될까, 멈춰야 할까', tool: 'sortboard',
          teacher: '"웃음이 사라지거나 몸을 빼는 건 어떤 신호일까요?" 카드를 하나씩 읽고 바구니에 넣게 한다. "웃고 있으면 괜찮은 거예요"라는 말에는 "웃으면서 몸을 빼거나 \'그만\'이라고 하면 멈춤 신호예요. 헷갈리면 물어봐요"라고 말해 준다. 둘째 문항에서 확인하는 말을 소리 내어 연습한다.',
          task: '말·몸짓 신호 카드를 \'계속해도 됨\'과 \'멈춰야 함\' 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('말·몸짓 신호 카드를 알맞은 바구니에 나누어요.', { slots: ['계속해도 됨', '멈춰야 함'], groups: { '계속해도 됨': ['"좋아!" 하며 웃음', '"한 번 더 하자!"', '먼저 다가와 같이 함', '신나서 박수 침'], '멈춰야 함': ['"그만"이라고 말함', '웃음이 사라짐', '몸을 뒤로 뺌', '고개를 돌림'] }, extra: { '계속해도 됨': ['"재밌다!"'], '멈춰야 함': ['"음…" 하고 머뭇거림'] } }, 0.2),
            SORT('신호가 섞일 때 하는 말을 확인하는 말과 밀어붙이는 말로 나누어요.', { slots: ['확인하는 말', '밀어붙이는 말'], groups: { '확인하는 말': ['"괜찮아? 그만할까?"', '"쉬었다 할래?"'], '밀어붙이는 말': ['"웃고 있으니 괜찮지?"', '"조금만 더!"'] }, easy: 1, extra: { '확인하는 말': ['"싫으면 말해 줘"'], '밀어붙이는 말': ['"처음엔 좋다며"'] } }, 0.25,
              { conclude: '"그만"·몸 빼기·웃음이 사라짐은 멈춤 신호예요. 헷갈리면 멈추고 물어요.' }),
            { prompt: '\'멈춰야 함\' 신호를 보았을 때 할 확인 말을 짝과 한 번씩 연습해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '멈춰야 하는 신호에 모두 표시해요.', options: ['"그만"이라고 말함', '몸을 뒤로 뺌', '웃음이 사라짐', '"한 번 더 하자!"'] }] },
      }),
      X('activity.change-script', {
        title: '동의 바꾸기 짧은 대본', method: '동의를 바꾸는 장면 네 줄 대본 쓰고 점검', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '대본 틀을 채워 쓰고 기준 2개를 점검한다.', base: '네 줄 대본을 쓰고 기준 2개(분명하게 말했나·상대가 존중했나)를 점검한다.', challenge: '대본을 쓰고 한 군데 고친 뒤, 둘째 문항에서 바뀐 마음을 존중하지 않는 장면을 고쳐 쓴다.' },
        activity: {
          title: '동의 바꾸기 대본', tool: 'rubric-writing',
          teacher: '"처음엔 좋다고 했다가 마음을 바꾸는 장면을 네 줄 대본으로 써 볼까요?" 인물 이름은 지어낸 이름(한두 글자)으로 쓰게 한다. "마음을 바꾸면 친구가 서운해해요"라는 걱정에는 "서운할 수는 있어도, 바뀐 마음을 존중하는 게 진짜 친구예요"라고 말해 준다. 다 쓰면 모둠이 짧게 읽어 보게 한다. 몸에 닿는 장면은 손잡기·간지럼처럼 가벼운 것으로만 쓴다.',
          task: '동의를 바꾸는 장면을 네 줄 대본으로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '처음엔 좋다고 했다가 마음을 바꾸는 장면을 네 줄 대본으로 써요.', toolOptions: { title: '동의 바꾸기 대본', topic: '가: "같이 ○○ 하자" 나: "좋아" … 나: "이제 그만할래" 가: "○○" — 네 줄로 써요(지어낸 이름).', minChars: 30, maxChars: 200 }, target: { selfCheck: ['바꾼 마음을 분명하게 말했다', '상대가 존중하는 말로 답했다'], chars: [30, 200], sentences: [4, 6] }, difficulty: 0.25,
              levels: {
                easy: { prompt: '대본 틀의 빈칸을 채워 마음을 바꾸는 장면을 써요.', toolOptions: { starter: '가: 같이 ___ 하자. 나: 좋아. 나: 이제 ___. 가: 알겠어, ___.' }, target: { selfCheck: ['바꾼 마음을 분명하게 말했다', '상대가 존중하는 말로 답했다'], chars: [20, 200], sentences: [3, 6] } },
                challenge: { prompt: '네 줄 대본을 쓰고, 다 쓰면 한 군데 고쳐 써요.', target: { selfCheck: ['바꾼 마음을 분명하게 말했다', '상대가 존중하는 말로 답했다', '한 군데 이상 고쳐 썼다'], chars: [40, 220], sentences: [4, 6] } },
              } },
            { prompt: '"처음엔 좋다며!"라고 답한 장면을 존중하는 답으로 고쳐 써요.', toolOptions: { title: '존중하는 답으로 고치기', topic: '나: "이제 그만할래" 가: "처음엔 좋다며!" — 가의 답을 존중하는 말로 고쳐 써요.', minChars: 10, maxChars: 120 }, target: { selfCheck: ['바뀐 마음을 받아들였다', '서운한 마음도 탓하지 않고 말했다'], chars: [10, 120] }, difficulty: 0.2,
              conclude: '동의는 언제든 바꿀 수 있어요. "알겠어"라고 바뀐 마음을 존중해요.' },
            { prompt: '모둠에서 대본을 짧게 소리 내어 읽고, 존중하는 답이 잘 들렸는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 "이제 그만할래"라고 할 때 존중하는 답을 써요.' }] },
      }),
      X('activity.tickle-choice', {
        title: '간지럼 놀이 갈림길', method: '간지럼 놀이에서 멈춤 신호 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(멈춤 신호·친구의 대답)을 지나 근거를 고른다.', base: '갈림 3번(주변 친구가 "더 해" 할 때 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 결과마다 친구 마음이 어떻게 바뀌었는지 모둠에서 견준다(셋째 문항).' },
        activity: {
          title: '갈림길: 간지럼 놀이', tool: 'dilemma',
          teacher: '"처음엔 웃던 친구가 \'그만해\'라며 몸을 뺐어요. 웃고 있었으니 더 해도 될까요?" 고를 때마다 결과와 친구의 마음을 읽게 한다. "장난인데 그만하라니 재미없어요"라는 말에는 "함께 즐거워야 놀이예요. 한쪽이 싫으면 장난이 아니에요"라고 말해 준다. 주변 친구가 부추길 때도 멈춘 사람이 잘한 것이라고 분명히 한다.',
          task: '갈림길마다 고르고, 친구의 마음이 어떻게 바뀌는지 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '간지럼 놀이',
            steps: [
              { text: '처음엔 웃던 친구가 "그만해"라며 몸을 뒤로 뺐어요.', motif: 'cloud',
                good: ['stop', '바로 멈추고 "괜찮아?"라고 묻는다', '친구가 숨을 고르며 고개를 끄덕여요.', [['친구', '존중받아요', 1]]],
                bad: ['more', '웃었으니 더 한다', '친구가 화를 내며 자리를 떠나요.', '"그만"과 몸을 빼는 것은 멈춤 신호예요.', [['친구', '싫고 화나요', -1]]] },
              { text: '친구가 "응, 이제 싫어"라고 해요.', motif: 'house',
                good: ['other', '"알겠어, 다른 놀이 할까?"라고 묻는다', '둘이 같이 그림 그리기를 해요.', [['친구', '편안해요', 1]]],
                bad: ['sulk', '"처음엔 좋다며!"라고 서운해한다', '친구가 미안해하며 눈치를 봐요.', '처음에 좋다고 했어도 마음은 바꿀 수 있어요.', [['친구', '눈치가 보여요', -1]]] },
              { text: '주변 친구들이 "더 해, 더 해!"라고 외쳐요.', motif: 'wind',
                good: ['firm', '"싫다고 했으니 안 해"라고 말한다', '부추기던 친구들도 조용해져요.', [['친구', '든든해요', 1], ['나', '믿음직해요', 1]]],
                bad: ['crowd', '분위기에 밀려 다시 간지럼을 태운다', '친구가 나와 놀기 싫어하게 돼요.', '여럿이 부추겨도 멈춤 신호가 먼저예요.', [['친구', '믿음이 깨져요', -1]]] },
            ],
            ending: '멈춤 신호를 보고 멈추고, 바뀐 마음을 존중해 둘 다 즐겁게 놀았어요.',
            reasons: [{ id: 'change', text: '동의는 언제든 바꿀 수 있다' }, { id: 'signal', text: '말과 몸짓의 "싫어"는 멈춤 신호다' }, { id: 'first', text: '처음에 좋다고 했으면 끝까지 해야 한다', why: '처음 대답보다 지금 마음이 먼저예요.' }, { id: 'noword', text: '말로 싫다고 안 하면 괜찮다', why: '몸을 빼거나 웃음이 사라지는 것도 "싫어"예요.' }],
            good: ['change', 'signal'],
            talk: '결과마다 친구의 마음이 어떻게 바뀌었는지 모둠에서 견주어 말해요.',
            conclude: '"그만"과 몸짓 신호를 보면 멈추고 물어요. 바뀐 마음도 존중해요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '처음엔 웃던 친구가 몸을 빼며 "그만"이라고 하면?', options: ['웃었으니 계속한다', '바로 멈추고 괜찮은지 묻는다', '조금만 더 한다'], answer: '바로 멈추고 괜찮은지 묻는다' },
          { type: 'short', prompt: '주변에서 "더 해"라고 부추길 때 할 말을 써요.' },
        ] },
      }),
      X('wrap.pledge-check', {
        title: '동의 다짐 점검표', method: '동의 다짐 점검표에 표시', tool: 'kitchen', minutes: 6,
        levels: { easy: '동의 다짐 2칸을 골라 표시한다(함정 섞임).', base: '동의 다짐 4칸을 골라 표시한다.', challenge: '4칸을 표시하고, 지키기 어려운 다짐을 대신할 행동을 한 줄 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 동의를 내 다짐으로 만들어 볼까요?" 점검표에서 동의 다짐만 골라 표시하게 한다. \'웃으면 계속한다\'를 고른 학생에게 "웃으면서도 몸을 뺄 수 있어요. 무엇을 함께 봐야 할까요?"라고 되묻는다.',
          exitTicket: [
            EX('kitchen', CHK('내가 지킬 동의 다짐만 골라 표시해요.', '나의 동의 다짐', ['먼저 묻는다', '표정과 몸짓을 본다', '바뀐 마음도 받아들인다', '대가를 걸지 않는다'], ['웃으면 계속한다'], { easy: 2, base: 4 }, 0.15)),
            { type: 'short', prompt: '지키기 어려운 다짐 하나와 대신할 행동을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '나의 동의 다짐',
          items: [
            { type: 'check', prompt: '내가 지킬 동의 다짐에 표시해요.', options: ['먼저 묻는다', '표정과 몸짓을 본다', '바뀐 마음도 받아들인다', '대가를 걸지 않는다'] },
            { type: 'short', prompt: '동의는 언제든 바꿀 수 있다는 것을 내 말로 써요.' },
          ],
        },
      }),
      X('wrap.signal-light', {
        title: '동의 신호등 만들기', method: '색종이 동의 신호등 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '초록·노랑·빨강 동그라미 3개만 붙인다.', base: '세 색 동그라미 옆에 할 행동 조각을 붙여 조각 6개 이상으로 만든다.', challenge: '신호등을 만들고, 노랑일 때 확인하는 말을 정해 점검 칸에 표시한다.' },
        wrap: {
          teacher: '"초록은 \'좋아\', 노랑은 \'잘 모르겠어\', 빨강은 \'싫어\'예요. 색마다 내가 할 행동은?" 초록 옆에는 함께하기, 노랑 옆에는 묻기, 빨강 옆에는 멈추기 조각을 붙이게 한다. "노랑이면 그냥 해도 돼요"라는 말에는 "노랑은 \'좋아\'가 아니에요. 멈추고 물어요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star', 'square', 'heart'], colors: ['초록', '노랑', '빨강', '파랑', '하양'], maxPieces: 10 }, prompt: '세 색 동그라미 옆에 할 행동 조각을 붙여 동의 신호등을 만들어요.', target: { has: LIGHT, pieces: { min: 6 } }, difficulty: 0.15,
              levels: { easy: { prompt: '초록·노랑·빨강 동그라미를 하나씩 붙여 신호등을 만들어요.', target: { has: LIGHT } }, challenge: { prompt: '신호등을 만들고 노랑일 때 확인하는 말을 정해 표시해요.', target: { has: LIGHT, pieces: { min: 6 }, selfCheck: ['노랑일 때 확인하는 말을 정했다'] } } } },
            { type: 'choice', prompt: '노랑(잘 모르겠어) 신호일 때 알맞은 행동은?', options: ['그냥 계속한다', '멈추고 "괜찮아?"라고 묻는다', '더 빨리 한다'], answer: 1, difficulty: 0.1, explain: '잘 모르겠으면 멈추고 물어요.' },
          ],
        },
        worksheet: {
          title: '동의 신호등',
          items: [
            { type: 'table', prompt: '신호 색마다 할 행동을 써요.', columns: ['초록(좋아)', '노랑(잘 모르겠어)', '빨강(싫어)'], cells: [['', '', '']], answer: '함께하기, 멈추고 묻기, 멈추기' },
            { type: 'short', prompt: '노랑일 때 확인하는 말을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 성폭력 뒤 도움받는 길과 2차 피해 막기 (성폭력방지법 예방교육 매년 1회 이상, 표준안 초 '성폭력 신고 방법') ========
  {
    const X = mk('after-help', 6);
    const BAR = [['혼날까 봐', 12], ['소문날까 봐', 10], ['누구에게 말할지 몰라서', 6]];
    const TOWN = [P('6학년 1반 교실', 'school', [0, 0]), P('상담실', 'office', [2, 0]), P('보건실', 'hospital', [4, 0]), P('지역 상담 기관', 'office', [5, 2]), P('집', 'house', [1, 3]), P('공원', 'park', [3, 3])];
    const HELP = (prompt, place, d, more) => Object.assign({
      prompt, toolOptions: { grid: [6, 4], title: '도움 기관 지도(가상)', places: TOWN }, target: { place }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(장소 두 곳).`, toolOptions: { places: [TOWN.find((p) => p.name === place), TOWN[5]], readout: true } } },
    }, more);
    M.push(
      X('intro.blame-support', {
        title: '탓하는 말·지지하는 말', method: '탓하는 말과 지지하는 말 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 \'탓하는 말\'·\'지지하는 말\'에 다 들어가는 시연을 본다.', challenge: '탓하는 말 하나를 지지하는 말로 바꾸어 말한다.' },
        intro: {
          teacher: '"누군가 힘든 일을 겪고 용기 내어 말했어요. 어떤 말이 힘이 되고, 어떤 말이 다시 상처가 될까요?" 시연 단추로 카드가 바구니에 들어가는 모습을 보인다. "왜 거기 갔어?"는 걱정하는 마음일 수 있어도, 듣는 사람에게는 \'네 탓\'으로 들린다고 짚는다. "피해자에게도 잘못이 있어요"라는 말에는 "잘못은 늘 한 사람, 피해를 준 사람에게 있어요. 말한 사람은 잘한 거예요"라고 분명히 말한다.',
          student: '탓하는 말 하나를 골라 지지하는 말로 바꾸어 짝에게 들려주어요.',
          demo: SDEMO('sortboard', ['탓하는 말', '지지하는 말'], { '탓하는 말': ['"왜 거기 갔어?"', '"너도 조심했어야지"', '"왜 바로 말 안 했어?"', '"네가 그래서 그래"'], '지지하는 말': ['"네 잘못이 아니야"', '"말해 줘서 고마워"', '"네 말을 믿어"', '"같이 어른께 가자"'] }),
          art: art('two paper speech bubbles, one sharp grey and one soft warm with a paper heart, a paper hand reaching out', '네 잘못이 아니야', 'heart', 'peach'),
        },
        notes: '성폭력 장면을 묘사하지 않는다. 학생에게 겪은 일을 묻지 않고, 털어놓는 학생이 있으면 수업 뒤 따로 듣고 학교 절차로 잇는다.',
      }),
      X('intro.barrier-graph', {
        title: '도움 요청을 막는 이유 그래프', method: '도움 요청을 막는 이유 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 막대 하나를 고른다.', base: '막대 세 개를 견주어 말한다.', challenge: '가장 큰 이유를 줄이려면 친구·학교가 할 일(믿어 주기·비밀 지키기)을 말한다.' },
        intro: {
          teacher: '"이 그래프는 \'힘든 일이 있어도 도움을 바로 청하지 못하는 이유\'를 꾸민 가상 자료예요. 가장 큰 이유는 무엇일까요?" 시연 단추로 \'혼날까 봐\'를 고르는 모습을 보인다. "혼날 짓을 했으니 그렇죠"라는 말에는 "피해를 입은 사람은 혼날 일을 한 게 아니에요. 그래서 우리가 믿어 주는 말을 배우는 거예요"라고 말해 준다. 숫자는 가상이라고 밝힌다.',
          student: '\'소문날까 봐\'를 줄이려면 친구로서 무엇을 할 수 있을지 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '도움을 바로 청하지 못하는 이유(가상)', unit: '명', xLabel: '이유', yLabel: '학생 수', data: BAR, question: '가장 큰 이유는?', choices: BAR.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper bar chart with three bars beside a closed paper door slowly opening with warm light', '말할 수 있는 학교', 'sun', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.help-order', {
        title: '도움받는 차례', method: '성폭력 뒤 도움받는 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장(안전한 곳·믿는 어른·계속 지지)의 차례를 놓는다.', base: '장면 카드 4장(어른이 상담·신고로 잇기 더함)의 차례를 놓는다.', challenge: '틀린 장면(혼자 참고 잊기)을 빼고 놓은 뒤, 둘째 문항에서 첫 어른이 믿어 주지 않을 때의 다음 장면을 고른다(헷갈리는 카드 섞임).' },
        activity: {
          title: '도움받는 차례', tool: 'story',
          teacher: '"싫은 몸 접촉이나 성적인 괴롭힘 같은 일이 생겼거나 알게 되었을 때, 도움은 어떤 차례로 이어질까요?" 장면 카드를 놓은 뒤 차례를 읽게 한다. "증거가 없으면 말해도 소용없어요"라는 말에는 "증거를 찾는 일은 어른이 해요. 먼저 말하는 것이 시작이에요"라고 말해 준다. 첫 어른이 믿어 주지 않아도 다른 어른에게 다시 말하면 된다는 점을 짚는다.',
          task: '도움받는 차례대로 장면을 놓고, 첫 어른이 믿어 주지 않을 때의 다음 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('도움받는 차례대로 장면 카드를 놓아요.', ['안전한 곳으로 가기', '믿는 어른에게 말하기', '어른이 상담·신고로 잇기', '계속 곁에서 지지받기'], { easy: [0, 1, 3], trap: '혼자 참고 잊기', motifs: ['house', 'star', 'leaf', 'heart'] }, 0.2),
            PICK('첫 어른이 믿어 주지 않았어요. 다음 장면만 골라요.', '다음 장면', ['다른 믿는 어른께 다시 말하기'], ['포기하고 혼자 참기', '친구들에게 퍼뜨리기'], { easy: 1, easyTraps: 1, extraTraps: ['혼자 따지러 가기'] }, 0.25,
              { conclude: '안전한 곳으로 가고, 믿는 어른에게 말하면 어른이 상담·신고로 이어요. 믿어 줄 때까지 다시 말해요.' }),
            { prompt: '\'계속 곁에서 지지받기\'에서 친구가 할 수 있는 일을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '첫 어른이 믿어 주지 않으면 다른 믿는 어른에게 ___ 말해요.', answer: '다시' }] },
        notes: '성폭력 장면을 묘사하지 않는다. 장면 카드는 도움의 차례만 보인다.',
      }),
      X('activity.agency-map', {
        title: '도움 기관 지도', method: '학교·동네 도움 기관 지도에 핀 꽂기', tool: 'map', minutes: 14,
        levels: { easy: '문항마다 장소 두 곳만 보이는 지도에서 핀을 꽂는다(이름이 보임).', base: '장소 여섯 곳 지도에서 상담실·보건실·담임 교실·지역 상담 기관에 핀을 꽂는다.', challenge: '같은 문항을 마친 뒤, 다섯째 문항에서 학교가 쉬는 날 갈 곳을 고른다.' },
        activity: {
          title: '도움 기관 지도', tool: 'map',
          teacher: '"도움을 받을 수 있는 곳은 학교 안에도, 동네에도 있어요." 상황을 읽고 핀을 꽂게 한다. 지역 상담 기관의 이름과 신고·상담 번호는 학교가 확인해 알려 주는 것으로 교사가 칠판에 적어 준다. "기관에 가면 무서울 것 같아요"라는 말에는 "믿는 어른과 함께 가요. 그곳 어른들은 돕는 일을 하는 사람들이에요"라고 말해 준다. 지도는 지어낸 동네다.',
          task: '상황을 읽고 도움 기관 지도에서 알맞은 곳에 핀을 꽂아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            HELP('상담 선생님과 이야기하고 싶어요. 갈 곳에 핀을 꽂아요.', '상담실', 0.15),
            HELP('몸이 아프거나 다친 곳이 있어요. 갈 곳에 핀을 꽂아요.', '보건실', 0.15),
            HELP('담임 선생님께 먼저 말하고 싶어요. 갈 곳에 핀을 꽂아요.', '6학년 1반 교실', 0.15),
            HELP('학교가 이어 주는 전문 상담 기관에 핀을 꽂아요.', '지역 상담 기관', 0.2),
            { prompt: '학교가 쉬는 날 도움이 필요해요. 갈 곳을 골라요.', toolOptions: { grid: [6, 4], title: '도움 기관 지도(가상)', places: TOWN, readOnly: true, ask: { q: '학교가 쉬는 토요일이에요. 어떻게 할까요?', choices: ['집에서 보호자께 말하고 함께 기관에 연락', '월요일까지 혼자 참기', '공원에서 친구들에게 말하기'], why: ['', '기다리지 않고 믿는 어른께 바로 말해요.', '여럿에게 말하면 소문이 될 수 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '학교에서는 담임·상담·보건 선생님, 쉬는 날에는 보호자와 함께 지역 상담 기관으로 이어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움받을 곳과 만날 사람을 써요.', columns: ['장소', '만날 사람'], cells: [['상담실', ''], ['지역 상담 기관', ''], ['집', '']], answer: '상담 선생님, 상담하는 어른, 보호자' }] },
        notes: '지도는 지어낸 동네다. 지역 상담 기관의 이름·신고·상담 번호는 학교가 확인한 것을 교사가 적어 준다(이 모듈에는 번호를 넣지 않았다).',
      }),
      X('activity.rumor-choice', {
        title: '소문이 퍼지는 반 갈림길', method: '단체방 소문이 퍼질 때 2차 피해 막기 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(소문을 전할지·탓하는 말에 답할지)을 지나 근거를 고른다.', base: '갈림 3번(소문을 처음 낸 친구에게 할 일 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 처음 낸 친구에게 할 말의 결과를 모둠에서 이어 말한다(셋째 문항).' },
        activity: {
          title: '소문 멈추기', tool: 'dilemma',
          teacher: '"지어낸 학교의 단체방에 한 학생이 힘든 일을 겪었다는 소문이 돌아요. 나는 무엇을 할 수 있을까요?" 소문의 내용은 말하지 않는다. 고를 때마다 결과를 읽게 한다. "소문을 전하는 건 그냥 이야기예요"라는 말에는 "소문과 탓하는 말은 그 학생에게 또 다른 상처, 2차 피해가 돼요"라고 말해 준다. 소문을 멈추고 어른께 알린 사람은 잘한 것이라고 분명히 한다.',
          task: '갈림길마다 고르고, 소문 속 학생에게 생긴 일을 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '단체방 소문',
            steps: [
              { text: '단체방에 한 학생이 힘든 일을 겪었다는 소문이 올라왔어요.', motif: 'cloud',
                good: ['stopsay', '"확인 안 된 이야기는 멈추자"고 쓴다', '몇 명이 글쓰기를 멈춰요.', [['소문 속 학생', '덜 퍼져요', 1]]],
                bad: ['spread', '다른 방에 전한다', '소문이 다른 반까지 퍼져요.', '소문을 전하면 2차 피해가 커져요.', [['소문 속 학생', '더 아파요', -1]]] },
              { text: '한 친구가 "그 애도 잘못이 있대"라고 써요.', motif: 'wind',
                good: ['notfault', '"피해를 입은 사람 탓이 아니야"라고 답한다', '탓하는 글이 더 이어지지 않아요.', [['소문 속 학생', '편이 생겨요', 1]]],
                bad: ['agree', '맞장구 이모티콘을 단다', '탓하는 글이 늘어나요.', '잘못은 늘 피해를 준 사람에게 있어요.', [['소문 속 학생', '상처가 커져요', -1]]] },
              { text: '소문을 처음 올린 친구가 누구인지 알게 됐어요.', motif: 'house',
                good: ['tell', '선생님께 알리고, 친구에게도 멈추라고 한다', '선생님이 단체방 글을 정리하도록 도와요.', [['소문 속 학생', '보호받아요', 1], ['처음 올린 친구', '잘못을 알게 돼요', 0]]],
                bad: ['silent', '모른 척한다', '소문이 다시 올라와요.', '어른께 알려야 소문을 멈출 수 있어요.', [['소문 속 학생', '계속 힘들어요', -1]]] },
            ],
            ending: '소문을 멈추고 탓하는 말에 답하고 어른께 알려, 2차 피해를 막았어요.',
            reasons: [{ id: 'second', text: '소문과 탓하는 말은 2차 피해가 된다' }, { id: 'stop', text: '2차 피해를 막는 것도 도움이다' }, { id: 'justtalk', text: '소문을 전하는 것은 피해가 아니다', why: '전할수록 그 학생의 상처가 커져요.' }, { id: 'blame', text: '피해를 입은 사람에게도 잘못이 있다', why: '잘못은 늘 피해를 준 사람에게 있어요.' }],
            good: ['second', 'stop'],
            talk: '소문을 처음 올린 친구에게 할 말과 그 결과를 모둠에서 이어 말해요.',
            conclude: '소문을 전하지 않고, 탓하는 말에 답하고, 어른께 알려요. 2차 피해를 막는 것도 도움이에요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '힘든 일을 겪은 친구에 대한 소문을 들으면?', options: ['다른 친구에게 전한다', '전하지 않고 멈추자고 한다', '사실인지 물어보러 간다'], answer: '전하지 않고 멈추자고 한다' },
          { type: 'short', prompt: '"그 애도 잘못이 있대"라는 글에 보낼 답을 써요.' },
        ] },
        notes: '이야기는 지어낸 것이다. 소문의 내용은 쓰지 않는다.',
      }),
      X('wrap.heard-feeling', {
        title: '지지하는 말을 들은 마음', method: '지지하는 말과 탓하는 말을 들은 마음 견주기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 하나("네 잘못이 아니야")에 마음 카드를 잇는다.', base: '두 장면(지지하는 말·탓하는 말)에 마음 카드를 잇고 견준다.', challenge: '세 장면에 잇고, 둘째 질문에서 지지의 말 한 가지를 더 고른다.' },
        wrap: {
          teacher: '"용기 내어 말한 친구가 \'네 잘못이 아니야\'를 들으면, 또 \'왜 거기 갔어?\'를 들으면 마음이 어떨까요?" 장면에 마음 카드를 잇게 하고 두 마음을 견주게 한다. 지지하는 말 한마디가 도움을 이어 가게 한다는 점을 짚는다.',
          exitTicket: [
            FEEL('장면마다 가상 인물의 마음 카드를 이어요.', [['"네 잘못이 아니야"를 들었을 때', '편안함'], ['"왜 거기 갔어?"를 들었을 때', '속상함'], ['"말해 줘서 고마워"를 들었을 때', '고마움']], ['편안함', '속상함', '고마움', '신남']),
            EX('emotion', PICK('지지하는 말을 하나 더 골라요.', '지지하는 말', ['네 말을 믿어'], ['너도 조심했어야지', '왜 이제 말해?'], { easy: 1, easyTraps: 1 }, 0.15)),
          ],
        },
        worksheet: {
          title: '지지하는 말',
          items: [
            { type: 'short', prompt: '탓하는 말 하나를 지지하는 말로 바꿔 써요.' },
            { type: 'choice', prompt: '힘든 일을 말한 친구에게 알맞은 말은?', options: ['"왜 거기 갔어?"', '"네 잘못이 아니야"', '"다른 애들도 알아?"'], answer: '"네 잘못이 아니야"' },
          ],
        },
      }),
      X('wrap.support-card', {
        title: '지지 문장 카드 쓰기', method: '도움을 청한 친구에게 지지 문장 쓰고 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '둘째 질문의 보기 가운데 지지 문장을 고르고, 첫 질문은 문장 틀로 쓴다.', base: '두 문장을 쓰고 기준 3개(탓하지 않음·비밀 지킴·도움 길)를 점검한다.', challenge: '세 문장으로 쓰고 함께 갈 어른을 넣은 뒤 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"도움을 청한 친구에게 건넬 지지 문장을 써 볼까요?" 기준표를 함께 읽는다. "무슨 일이었는지 자세히 말해 봐"처럼 캐묻는 말을 쓴 학생에게 "자세한 이야기는 어른이 들어요. 친구로서는 믿어 주고 곁에 있는 말을 써 볼까요?"라고 말해 준다. 실제 이름은 쓰지 않는다.',
          exitTicket: [
            RUBX('도움을 청한 친구에게 건넬 지지 문장을 써요', { topic: '지어낸 친구가 힘든 일을 털어놓았어요. 건넬 지지 문장을 써요(이름은 쓰지 않아요).', starter: '네 잘못이 ___. 말해 줘서 ___.', crit: ['탓하지 않았다', '비밀을 지키는 말이다', '도움 길을 알려 줬다'], must: [['선생님', '어른', '상담', '보호자']], chars: [20, 160], title: '지지 문장 카드' }),
            { type: 'choice', prompt: '도움을 청한 친구에게 가장 알맞은 지지 문장은?', options: ['"무슨 일인지 다 말해 봐"', '"네 잘못이 아니야. 같이 상담 선생님께 가자"', '"다른 애들한테는 말 안 했지?"'], answer: 1, difficulty: 0.15, explain: '탓하지 않고 믿어 주며 도움 길을 함께 찾는 말이에요.' },
          ],
        },
        worksheet: {
          title: '지지 문장 카드',
          items: [
            { type: 'short', prompt: '도움을 청한 친구에게 건넬 지지 문장을 써요.' },
            { type: 'check', prompt: '지지 문장에 넣을 것에 표시해요.', options: ['탓하지 않기', '비밀 지키기', '도움 길 알려 주기'] },
          ],
          easy: { note: '"네 잘못이 아니야"처럼 짧게 써도 돼요.', items: [{ type: 'draw', prompt: '친구 곁에 있어 주는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 몰래 찍기·딥페이크·단톡방 성적 농담 멈추기 (교육부 지침 '딥페이크 등 디지털성폭력', 성폭력 예방교육) ========
  {
    const X = mk('digital-crime', 6);
    M.push(
      X('intro.is-it-crime', {
        title: '디지털 성폭력일까', method: '디지털 성폭력일까 아닐까 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 \'디지털 성폭력\'·\'아님\'에 다 들어가는 시연을 본다.', challenge: '"보내기만 했다"도 왜 문제인지 까닭을 말한다(받은 사람·찍힌 사람의 마음).' },
        intro: {
          teacher: '"휴대폰으로 하는 일 가운데 디지털 성폭력은 무엇일까요?" 시연 단추로 카드가 바구니에 들어가는 모습을 보인다. "받은 사진을 보내기만 했으니 상관없어요"라는 말에는 "보내는 순간 더 많은 사람이 보게 돼요. 공유도 가해가 될 수 있어요"라고 말해 준다. 실제 사진·영상은 보여 주지 않는다.',
          student: '\'디지털 성폭력\' 바구니의 카드 하나를 골라, 찍히거나 합성된 사람이 어떤 마음일지 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['디지털 성폭력', '아님'], { '디지털 성폭력': ['몰래 사진 찍기', '얼굴을 몸 사진에 합성', '받은 사진을 다른 방에 보내기', '단톡방에 성적 농담 올리기'], 아님: ['그림 그리기 앱 쓰기', '허락받고 단체 사진 찍기', '숙제 사진 보내기', '가족과 영상 통화'] }),
          art: art('two paper baskets with paper phone cards, one basket marked with a paper stop sign', '찍지 않아, 보내지 않아', 'star', 'rose'),
        },
      }),
      X('intro.chat-branch', {
        title: '단톡방에 성적 농담이 올라왔다', method: '단톡방 성적 농담에 갈래 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 보기 두 개(웃음 반응·"그만하자" 글) 가운데 고르는 시연을 보인다.', base: '보기 네 개(반응 없음·어른에게 알림 더함)의 결과와 마음을 함께 읽는다.', challenge: '두 번째 날 같은 일이 있을 때의 선택(어른에게 알림)을 말로 고른다.' },
        intro: {
          teacher: '"반 단톡방에 성적인 농담이 올라왔어요. 웃음 이모티콘을 달면 어떻게 될까요?" 농담의 내용은 말하지 않는다. 시연 단추로 \'"그만하자" 글\'을 고르고 결과를 읽어 준다. "다들 하니까 괜찮아요"라는 말에는 "다들 해도 누군가는 불편하고 상처받아요. 성적 농담은 멈춰야 해요"라고 말해 준다.',
          student: '"그만하자"라는 글을 어떻게 쓰면 좋을지 짝과 한 문장씩 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '반 단톡방에 성적인 농담이 올라왔어요.', ask: '나는 어떻게 할까요?', motif: 'cloud', choices: [{ id: 'laugh', text: '웃음 반응을 단다', result: '농담이 더 이어져요.', mood: '걱정' }, { id: 'none', text: '아무 반응도 안 한다', result: '농담이 멈추지 않아요.', mood: '걱정' }, { id: 'stop', text: '"그만하자"라고 쓴다', result: '몇 명이 "맞아"라고 답해요.', mood: '편안함' }, { id: 'tell', text: '어른에게 알린다', result: '선생님이 단톡방 약속을 다시 정해요.', mood: '편안함' }] }, sequence: [{ choice: 'stop' }] },
          art: art('a paper phone with a group chat, one paper speech bubble with a stop hand among many bubbles', '"그만하자" 한마디의 힘', 'cloud', 'sky'),
        },
      }),
      X('activity.cause-effect', {
        title: '딥페이크 원인과 결과 잇기', method: '딥페이크 원인·결과와 멈출 행동 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '원인·결과 가지에 카드를 나누고, 둘째 문항에서 단계 3개에 멈출 행동을 잇는다.', base: '카드를 나누고 단계 4개에 멈출 행동 카드를 잇는다(맞지 않는 카드 섞임).', challenge: '잇기를 마친 뒤, 가장 빨리 멈출 수 있는 단계를 골라 까닭을 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '퍼짐과 멈춤', tool: 'mindmap',
          teacher: '"재미로 만든 합성 사진 하나가 어떻게 친구를 학교에 오기 힘들게 만들까요?" 원인·결과 카드를 나눈 뒤 단계마다 멈출 행동을 잇게 한다. "지우면 끝나요"라는 학생에게 "누군가 저장했다면 지워도 다시 퍼질 수 있어요. 그래서 처음에 멈추는 게 가장 좋아요"라고 말해 준다. 실제 합성 사진은 보여 주지 않는다.',
          task: '딥페이크 원인과 결과 카드를 나누고, 단계마다 멈출 수 있는 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('딥페이크 카드를 원인과 결과 가지에 나누어요.', { topic: '딥페이크', slots: ['원인', '결과'], groups: { 원인: ['재미로 얼굴 합성하기', '받은 사진 전달하기', '웃음 반응 달기'], 결과: ['단톡방에 퍼짐', '지워도 다시 퍼짐', '친구가 학교에 오기 힘듦'] }, extra: { 원인: ['몰래 저장해 두기'], 결과: ['친구가 잠을 못 잠'] } }, 0.2),
            MATCH('단계마다 퍼짐을 멈출 수 있는 행동을 이어요.', [['합성하고 싶을 때', '만들지 않기'], ['단톡방에 올라왔을 때', '반응·저장 안 하기'], ['누가 다시 퍼뜨릴 때', '어른과 함께 신고'], ['친구가 힘들어할 때', '곁에 있어 주기']], { easy: 3, traps: ['웃음 이모티콘 달기'], title: '멈출 자리', topic: '멈춤 잇기' }, 0.25,
              { conclude: '합성·전달·반응이 퍼짐을 만들어요. 단계마다 멈출 수 있고, 처음에 멈추는 것이 가장 좋아요.' }),
            { prompt: '가장 빨리 멈출 수 있는 단계를 골라 까닭을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '합성 사진은 지워도 다시 ___ 수 있어서, 처음에 멈추는 것이 가장 좋아요.', answer: '퍼질' }] },
      }),
      X('activity.received-check', {
        title: '받았을 때 행동 점검표', method: '디지털 성폭력 사진을 받았을 때 행동 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '사례마다 할 행동 2칸을 골라 표시한다(함정 섞임).', base: '사례 2개에 할 행동 4칸을 골라 표시한다.', challenge: '두 사례를 점검한 뒤, 행동 순서를 바꾸면(먼저 지우기 등) 어떻게 될지 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '받았을 때 할 일', tool: 'kitchen',
          teacher: '"이런 사진을 받으면 받은 사람이 잘못한 걸까요?" 받은 것은 받은 사람의 잘못이 아니라고 먼저 분명히 말한다. 사례를 읽고 할 행동만 표시하게 한다. "얼른 지우면 돼요"라는 말에는 "지우기 전에 믿는 어른과 상의하면, 어른이 신고를 도울 수 있어요"라고 말해 준다. 사례는 지어낸 것이다.',
          task: '사례를 읽고, 사진을 받았을 때 할 행동만 점검표에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('사례 1: 모르는 사람이 몸 사진을 보냈어요. 할 행동만 표시해요.', '받았을 때 할 일', ['열어 보지 않는다', '퍼뜨리지 않는다', '지우기 전 어른과 상의한다', '믿는 어른과 신고한다'], ['똑같이 답장한다'], { easy: 2, base: 4 }, 0.2),
            CHK('사례 2: 단톡방에 친구를 몰래 찍은 사진이 왔어요. 할 행동만 표시해요.', '받았을 때 할 일', ['열어 보지 않는다', '퍼뜨리지 않는다', '지우기 전 어른과 상의한다', '믿는 어른과 신고한다'], ['보낸 친구에게 따진다'], { easy: 2, base: 4 }, 0.2,
              { conclude: '열지 않고, 퍼뜨리지 않고, 지우기 전 어른과 상의해 함께 신고해요. 받은 사람의 잘못이 아니에요.' }),
            { prompt: '\'먼저 지우기\'처럼 순서를 바꾸면 어떻게 될지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사진을 받았을 때 할 일을 차례대로 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '열어 보지 않기, 퍼뜨리지 않기, 어른과 상의하기, 함께 신고하기' }] },
        notes: '신고는 믿는 어른과 함께 한다. 학교가 확인한 신고·상담 번호는 교사가 알려 준다(이 모듈에는 번호를 넣지 않았다).',
      }),
      X('activity.campaign', {
        title: '디지털 성폭력 멈춤 캠페인 카드', method: '모둠 디지털 성폭력 멈춤 캠페인 카드 만들기', tool: 'collage', minutes: 27,
        levels: { easy: '구호 띠(큰 긴 네모)와 멈춤 그림(빨강 동그라미)을 붙이고, 둘째 문항은 도움 칸이 붙은 틀에 조각을 더한다.', base: '구호 띠·멈춤 그림·도움 칸(네모)을 모두 넣고 조각 5개 이상으로 꾸민다.', challenge: '세 요소를 넣고, 셋째 문항에서 저학년 동생용 쉬운 말 카드까지 정해 점검한다.' },
        activity: {
          title: '멈춤 캠페인 카드', tool: 'collage',
          teacher: '"학년 게시판에 붙일 캠페인 카드를 만들어 볼까요? 큰 긴 네모는 구호 띠, 빨강 동그라미는 멈춤 그림, 네모는 도움 칸이에요." 도움 칸에는 학교가 확인해 알려 주는 신고·상담 번호를 교사가 나중에 적어 넣는다. "무섭게 만들어야 안 해요"라는 말에는 "겁주기보다 \'찍지 않아, 보내지 않아, 함께 알려\'처럼 할 일을 보여 줘요"라고 말해 준다.',
          task: '모둠이 구호 띠·멈춤 그림·도움 칸 조각을 붙여 캠페인 카드를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '구호 띠(큰 긴 네모)와 멈춤 그림(빨강 동그라미)을 붙여요.', toolOptions: { shapes: ['rect', 'circle', 'square', 'star'], maxPieces: 8 }, target: { has: [{ shape: 'rect', size: 'l', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }] }, difficulty: 0.1 },
            { prompt: '구호 띠·멈춤 그림·도움 칸(네모)을 넣어 조각 5개 이상으로 꾸며요.', toolOptions: { shapes: ['rect', 'circle', 'square', 'star', 'heart'], maxPieces: 14 }, target: { has: [{ shape: 'rect', size: 'l', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }, { shape: 'square', min: 1 }], pieces: { min: 5 } }, difficulty: 0.2,
              levels: { easy: { prompt: '도움 칸이 붙은 틀에 구호 띠와 멈춤 그림을 더해요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'm', x: 460, y: 320, r: 0 }] }, target: { has: [{ shape: 'square', min: 1 }, { shape: 'rect', size: 'l', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }] } } } },
            { prompt: '캠페인 카드의 구호를 정하고 점검 칸에 표시해요.', toolOptions: { maxPieces: 16 }, target: { selfCheck: ['구호를 정했다', '도움 칸 자리를 남겼다'], minPieces: 3 }, difficulty: 0.1,
              levels: { challenge: { prompt: '구호와 저학년 동생용 쉬운 말을 정하고 점검 칸에 표시해요.', target: { selfCheck: ['구호를 정했다', '도움 칸 자리를 남겼다', '동생도 알 쉬운 말을 정했다'], minPieces: 3 } } },
              conclude: '찍지 않고, 보내지 않고, 함께 알려요. 공유도 가해가 될 수 있어요.' },
            { prompt: '모둠 캠페인 카드와 구호를 반에 발표해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [
          { type: 'short', prompt: '우리 모둠 캠페인 구호를 써요.' },
          { type: 'short', prompt: '저학년 동생이 알아듣게 쉬운 말로 바꾼 구호를 써요.' },
        ] },
        notes: '도움 칸의 신고·상담 번호는 학교가 확인한 것을 교사가 적어 넣는다.',
      }),
      X('wrap.stop-chant', {
        title: '멈춤 구호 리듬', method: '디지털 성폭력 멈춤 구호에 박자 짓기', tool: 'keyboard', minutes: 6,
        levels: { easy: '첫 마디("찍지 않아") 리듬을 듣고 따라 놓는다.', base: '세 마디("찍지 않아, 보내지 않아, 함께 알려")에 4박 리듬을 짓는다.', challenge: '모둠별로 이어 칠 수 있게 네 마디(모둠 한 줄 더함)에 4박 리듬을 짓는다.' },
        wrap: {
          teacher: '"찍지 않아! 보내지 않아! 함께 알려!" 반 전체가 외친 뒤 리듬을 짓게 한다. 끝에 모둠별로 한 마디씩 이어 치게 한다. 구호를 장난스럽게 바꾸는 모둠에게 "구호는 친구를 지키는 약속이에요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 3, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '멈춤 구호 세 마디에 마디마다 4박이 되게 리듬을 지어요.', target: { beats: true }, difficulty: 0.15,
              levels: {
                easy: { prompt: '"찍지 않아" 한 마디 리듬을 듣고 똑같이 블록을 놓아요.', toolOptions: { measures: 1, pattern: ['q', 'e', 'e', 'h'] }, target: { rhythm: ['q', 'e', 'e', 'h'] } },
                challenge: { prompt: '멈춤 구호에 모둠 한 줄을 더해 네 마디 리듬을 지어요.', toolOptions: { measures: 4 }, target: { beats: true } },
              } },
            { type: 'choice', prompt: '"받기만 했으니 상관없다"는 생각이 틀린 까닭은?', options: ['받은 사진을 보내면 피해가 커져서', '사진은 금방 사라져서', '받은 사람이 잘못이라서'], answer: 0, difficulty: 0.15, explain: '받은 사람 잘못은 아니지만, 보내면 피해가 커져요. 퍼뜨리지 않고 알려요.' },
          ],
        },
        worksheet: {
          title: '멈춤 구호',
          items: [
            { type: 'short', prompt: '우리 반 멈춤 구호를 써요.' },
            { type: 'choice', prompt: '디지털 성폭력이 아닌 것은?', options: ['몰래 사진 찍기', '허락받고 단체 사진 찍기', '얼굴 합성 사진 보내기'], answer: '허락받고 단체 사진 찍기' },
          ],
        },
      }),
      X('wrap.chat-check', {
        title: '이번 주 내 단톡방 점검', method: '이번 주 내 단톡방 습관 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '단톡방 습관 1칸에 스스로 표시한다.', base: '단톡방 습관 3칸에 스스로 표시한다.', challenge: '3칸에 표시하고, 반 단톡방 규칙 제안 한 줄을 쓴다.' },
        wrap: {
          teacher: '"이번 주에 내 단톡방에서 지킬 습관은 무엇일까요?" 스스로 점검 칸에 표시하게 하고, 요일마다 표시할 판은 활동지에 만든다. 단톡방이 없는 학생은 가족 대화방이나 앞으로 쓸 때를 떠올려 하게 한다. 학생의 실제 대화 내용을 보여 달라고 하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '이번 주 단톡방 습관' }, prompt: '이번 주에 지킬 단톡방 습관에 스스로 표시해요(세 칸).', target: { selfCheck: ['사진 올리기 전 묻기', '성적 농담 멈추기', '문제 글은 어른께 알리기'] }, difficulty: 0.1,
              levels: { easy: { prompt: '이번 주에 지킬 단톡방 습관에 스스로 표시해요(한 칸).', target: { selfCheck: ['사진 올리기 전 묻기'] } } } },
            { type: 'short', prompt: '반 단톡방 규칙으로 제안하고 싶은 것 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '이번 주 단톡방 점검판',
          items: [
            { type: 'table', prompt: '지킨 날에 ○ 해요.', columns: ['습관', '월', '화', '수', '목', '금'], cells: [['사진 올리기 전 묻기', '', '', '', '', ''], ['성적 농담 멈추기', '', '', '', '', ''], ['문제 글은 어른께', '', '', '', '', '']] },
            { type: 'short', prompt: '반 단톡방 규칙 제안 한 줄을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 광고 문구 고쳐 쓰고 평등한 가정·학교 찾기 (표준안 초 '성별 고정관념 깨기', 양성평등기본법 양성평등교육) ========
  {
    const X = mk('equality-ads', 6);
    const CHORE = [['보호자 1', 9], ['보호자 2', 2], ['첫째', 1], ['나', 1]];
    const ALL4 = ['설거지', '빨래', '청소', '장보기'];
    const AD = (prompt, ad, d, more) => Object.assign({
      prompt, toolOptions: { title: '광고 문구 고쳐 쓰기', topic: `광고 문구 "${ad}"를 누구나 쓸 수 있는 문구로 고쳐 써요.`, minChars: 6, maxChars: 80 }, target: { selfCheck: ['성별을 빼도 뜻이 통한다', '누구나 쓸 수 있는 문구다'], chars: [6, 80] }, difficulty: d,
    }, more);
    M.push(
      X('intro.chores-graph', {
        title: '가상 가족 집안일 그래프', method: '가상 가족 집안일 시간 띠그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 긴 칸 하나를 고른다.', base: '네 사람의 칸을 견주어 공평한지 말한다.', challenge: '공평하게 바꾼 띠그래프 모양을 손으로 그려 보인다.' },
        intro: {
          teacher: '"이 띠그래프는 지어낸 가족 네 명이 한 주에 집안일을 한 시간을 꾸민 가상 자료예요. 누가 가장 많이 했을까요?" 시연 단추로 \'보호자 1\'을 고르는 모습을 보인다. "집안일은 돕는 거예요"라는 말에는 "집에서 함께 사는 사람 모두의 일이에요. \'돕기\'가 아니라 \'함께 하기\'예요"라고 말해 준다. 학생 가정의 집안일 나누기를 발표하게 하지 않는다.',
          student: '이 가족의 집안일을 공평하게 바꾼다면 어떻게 나눌지 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: '한 주 집안일 시간(가상 가족)', unit: '시간', data: CHORE, question: '가장 많이 한 사람은?', choices: CHORE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a long paper band chart split into four uneven colored parts beside a paper house with a broom and dishes', '집안일은 함께 하는 일', 'house', 'mint'),
        },
        notes: '그래프는 지어낸 가족의 가상 자료다. 가족 구성원 이름은 성별을 드러내지 않게 \'보호자 1·2\'로 했다.',
      }),
      X('intro.equal-or-not', {
        title: '평등 장면·차별 장면 나누기', method: '평등 장면과 차별 장면 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장이 바구니에 들어가는 시연을 보인다.', base: '카드 8장이 \'평등\'·\'차별\'에 다 들어가는 시연을 본다.', challenge: '차별 카드 하나를 평등한 장면으로 고쳐 말한다.' },
        intro: {
          teacher: '"이 장면들은 평등할까요, 차별일까요?" 시연 단추로 카드가 바구니에 들어가는 모습을 보인다. "남자 간호사는 좀 이상해요"라는 말에는 "간호는 성별이 아니라 공부와 마음으로 하는 일이에요"라고 말해 준다. 차별 카드를 고쳐 말해 볼 학생을 부른다.',
          student: '차별 카드 하나를 골라 평등한 장면으로 바꾸어 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['평등', '차별'], { 평등: ['아빠가 육아 휴직을 써요', '누구나 축구부에 들어가요', '누구나 반장 선거에 나가요', '가족이 함께 설거지해요'], 차별: ['"여자는 반장 못 해"', '"남자가 간호사면 이상해"', '"여자니까 조용히 해"', '"남자니까 울지 마"'] }),
          art: art('two paper baskets, one with a balanced paper scale and one with a tilted scale, paper scene cards around', '평등일까, 차별일까?', 'star', 'buttercup'),
        },
      }),
      X('activity.chore-share', {
        title: '우리 집 집안일 나누기 일과표', method: '집안일 카드를 가족 칸에 공평하게 나누기', tool: 'kitchen', minutes: 14,
        levels: { easy: '집안일 카드 2장을 가족 칸 2개에 하나씩 나눈다(어느 칸이든 하나씩이면 된다).', base: '집안일 카드 4장을 가족 칸 4개에 하나씩 공평하게 나누고, 둘째 문항에서 내가 맡을 일을 고른다.', challenge: '나누기를 마치고, 바쁜 날(시험 기간·보호자 야근)을 생각해 요일별로 다시 나누는 방법을 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '집안일 나누기', tool: 'kitchen',
          teacher: '"지어낸 가족 네 명이 집안일 네 가지를 한 사람에 하나씩 나눈다면 어떻게 나눌까요?" 정답은 여러 가지이고, 한 사람이 다 하지 않으면 공평하다고 말해 준다. "빨래는 엄마 일이에요"라는 말에는 "빨래는 누구나 배워서 할 수 있어요"라고 말해 준다. 둘째 문항에서 어린이도 맡을 수 있는 일을 고르게 한다.',
          task: '집안일 카드를 가족 칸에 하나씩 공평하게 나누고, 내가 맡을 일을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '집안일 카드 4장을 가족 칸 4개에 하나씩 나누어요(나누는 방법은 여러 가지, 넣지 않을 카드도 있어요).', toolOptions: { mode: 'match', groups: false, title: '지어낸 가족의 집안일', slots: [{ id: 'p1', label: '보호자 1' }, { id: 'p2', label: '보호자 2' }, { id: 'p3', label: '첫째' }, { id: 'p4', label: '나' }], cards: [...ALL4, '쉬는 날 몰아서 혼자 다 하기'] }, target: { match: { p1: ALL4, p2: ALL4, p3: ALL4, p4: ALL4 } }, difficulty: 0.15,
              levels: { easy: { prompt: '집안일 카드 2장을 가족 칸 2개에 하나씩 나누어요.', toolOptions: { slots: [{ id: 'p1', label: '보호자 1' }, { id: 'p4', label: '나' }], cards: ['설거지', '빨래', '쉬는 날 몰아서 혼자 다 하기'] }, target: { match: { p1: ['설거지', '빨래'], p4: ['설거지', '빨래'] } } } } },
            PICK('어린이인 내가 맡을 수 있는 집안일만 골라요.', '내가 맡을 일', ['내 방 정리', '수저 놓기', '빨래 개기'], ['아무것도 안 하기', '"그건 엄마 일" 하기'], { easy: 1, easyTraps: 1, extraTraps: ['"그건 아빠 일" 하기'], mode: 'pick' }, 0.2,
              { conclude: '집안일은 함께 사는 사람 모두의 일이에요. 성별이 아니라 할 수 있는 만큼 나눠요.' }),
            { prompt: '바쁜 날을 생각해 요일별로 다시 나누는 방법을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 맡을 수 있는 집안일 하나와 언제 할지 써요.' }] },
        notes: '학생 가정의 실제 집안일 분담이나 가족 구성을 묻지 않는다. 지어낸 가족으로만 다룬다.',
      }),
      X('activity.rewrite-ads', {
        title: '광고 문구 고쳐 쓰기', method: '광고 문구를 평등한 문구로 고쳐 쓰고 점검', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '첫 문구를 문장 틀로 고쳐 쓰고 기준 1개를 점검한다.', base: '문구 3개를 고쳐 쓰고 문구마다 기준 2개(성별을 빼도 뜻이 통하나·누구나 쓸 수 있나)를 점검한다.', challenge: '문구 3개를 고친 뒤, 셋째 문구로 짧은 광고 대사(두 문장)까지 쓴다.' },
        activity: {
          title: '광고 문구 고치기', tool: 'rubric-writing',
          teacher: '"\'엄마의 손맛 그대로\'라는 문구에서 \'엄마\'를 빼면 뜻이 통할까요?" 문구를 소리 내어 읽고 고쳐 쓰게 한다. "광고 문구는 생각에 영향이 없어요"라는 말에는 "자주 듣는 말은 \'요리는 엄마 일\'처럼 생각을 만들어요"라고 말해 준다. 실제 회사 이름은 쓰지 않는다.',
          task: '성 역할 고정관념이 담긴 광고 문구를 누구나 쓸 수 있는 문구로 고쳐 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            AD('"엄마의 손맛 그대로"를 누구나 쓸 수 있는 문구로 고쳐 써요.', '엄마의 손맛 그대로', 0.2,
              { levels: { easy: { prompt: '"엄마의 손맛 그대로"를 문장 틀로 고쳐 써요.', toolOptions: { starter: '___의 손맛 그대로' }, target: { selfCheck: ['성별을 빼도 뜻이 통한다'], chars: [4, 80] } } } }),
            AD('"남자라면 이 차"를 누구나 쓸 수 있는 문구로 고쳐 써요.', '남자라면 이 차', 0.2),
            AD('"여자아이 필수템, 분홍 가방"을 누구나 쓸 수 있는 문구로 고쳐 써요.', '여자아이 필수템, 분홍 가방', 0.2,
              { levels: { challenge: { prompt: '분홍 가방 문구를 고치고, 그 문구로 광고 대사 두 문장을 써요.', toolOptions: { maxChars: 160 }, target: { selfCheck: ['성별을 빼도 뜻이 통한다', '누구나 쓸 수 있는 문구다', '광고 대사 두 문장을 썼다'], chars: [20, 160], sentences: [2, 3] } } },
                conclude: '광고 문구에서 성별을 빼도 뜻이 통하면, 누구나 쓸 수 있는 평등한 문구가 돼요.' }),
            { prompt: '고친 문구 하나를 모둠에 읽어 주고, 성별을 빼도 뜻이 통하는지 서로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '광고 문구를 고쳐 써요.', columns: ['처음 문구', '고친 문구'], cells: [['엄마의 손맛 그대로', ''], ['남자라면 이 차', '']] }] },
      }),
      X('activity.equal-ad', {
        title: '평등한 광고 만들기', method: '모둠 평등한 광고 판 만들기', tool: 'collage', minutes: 27,
        levels: { easy: '다양한 인물 조각(동그라미 얼굴) 4개를 붙인다.', base: '인물 조각 4개와 고친 문구 띠(큰 긴 네모)를 모두 넣는다.', challenge: '인물과 문구를 넣고, 셋째 문항에서 광고를 본 사람이 바꿀 행동 문구까지 정해 점검한다.' },
        activity: {
          title: '평등한 광고 판', tool: 'collage',
          teacher: '"학교 축제에 붙일 평등한 광고를 만들어 볼까요? 동그라미는 여러 가족·직업 인물, 큰 긴 네모는 고친 문구 띠예요." 인물의 색·모양은 성별과 상관없이 자유롭게 고르게 한다. 발표 뒤 다른 모둠이 "고정관념이 남은 곳이 있나요?"를 살피게 한다. 지적은 고칠 방법과 함께 말하게 한다.',
          task: '모둠이 다양한 인물 조각과 고친 문구 띠를 붙여 평등한 광고를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '여러 가족·직업 인물을 뜻하는 동그라미 조각을 4개 이상 붙여요.', toolOptions: { shapes: ['circle', 'rect', 'semi', 'star'], maxPieces: 12 }, target: { has: [{ shape: 'circle', min: 4 }] }, difficulty: 0.1 },
            { prompt: '인물 조각 4개와 고친 문구 띠(큰 긴 네모)를 모두 넣어요.', toolOptions: { shapes: ['circle', 'rect', 'semi', 'star', 'heart'], maxPieces: 14 }, target: { has: [{ shape: 'circle', min: 4 }, { shape: 'rect', size: 'l', min: 1 }] }, difficulty: 0.2 },
            { prompt: '광고를 꾸미고 넣은 것을 점검 칸에 표시해요.', toolOptions: { maxPieces: 16 }, target: { selfCheck: ['다양한 가족·직업 인물을 넣었다', '고친 문구를 넣었다'], minPieces: 4 }, difficulty: 0.1,
              levels: { challenge: { prompt: '광고를 본 사람이 바꿀 행동 문구까지 정하고 점검 칸에 표시해요.', target: { selfCheck: ['다양한 가족·직업 인물을 넣었다', '고친 문구를 넣었다', '바꿀 행동 문구를 정했다'], minPieces: 4 } } },
              conclude: '평등한 광고는 누구나 무엇이든 할 수 있다는 것을 보여 줘요.' },
            { prompt: '다른 모둠 광고를 보고 고정관념이 남은 곳이 있는지 고칠 방법과 함께 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [
          { type: 'short', prompt: '우리 모둠 광고의 고친 문구를 써요.' },
          { type: 'short', prompt: '다른 모둠 광고에서 좋았던 점 하나를 써요.' },
        ] },
      }),
      X('wrap.equal-places', {
        title: '평등한 곳 가지', method: '가정·학교·일터 평등한 모습 가지 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 1개(가정)에 평등한 모습 카드를 붙인다.', base: '가지 3개(가정·학교·일터)에 카드를 붙인다(함정 카드 섞임).', challenge: '카드를 붙이고, 둘째 질문에 중학교에서 지킬 평등 약속을 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 평등한 모습을 가정·학교·일터 가지에 붙여 볼까요?" 카드를 읽고 붙이게 한다. 함정 카드를 붙이려는 학생에게 "이 말을 들은 사람은 어떤 기분일까요?"라고 되묻는다. 끝으로 중학교에 가서도 지킬 약속을 쓰게 한다.',
          exitTicket: [
            EX('mindmap', SORTN('평등한 모습 카드를 알맞은 가지에 붙여요.', { topic: '평등한 곳', slots: ['가정', '학교', '일터'], easySlots: ['가정'], groups: { 가정: ['함께 설거지하기', '돌아가며 청소하기'], 학교: ['누구나 반장 선거', '남녀 함께 축구'], 일터: ['아빠도 육아 휴직', '같은 일에 같은 대우'] }, traps: ['"여자는 이 일 못 해"'] }, 0.15)),
            { type: 'short', prompt: '중학교에 가서도 지킬 평등 약속 하나를 써요.' },
            { type: 'choice', prompt: '"집안일은 돕는 것"이라는 말을 바르게 고친 것은?', options: ['집안일은 엄마 일이다', '집안일은 함께 하는 일이다', '집안일은 안 해도 된다'], answer: 1, difficulty: 0.1, explain: '함께 사는 사람 모두의 일이에요.' },
          ],
        },
        worksheet: {
          title: '평등한 곳',
          items: [
            { type: 'table', prompt: '평등한 모습을 하나씩 써요.', columns: ['가정', '학교', '일터'], cells: [['', '', '']] },
            { type: 'short', prompt: '중학교에서 지킬 평등 약속을 써요.' },
          ],
        },
      }),
      X('wrap.heard-scale', {
        title: '고정관념 말을 들은 마음과 내 행동', method: '고정관념 말을 들은 가상 인물 마음 눈금과 행동 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '세 칸 눈금에 하람의 마음을 표시한다(어느 칸이든 된다).', base: '다섯 칸 눈금에 마음을 표시하고, 둘째 질문에서 내가 할 행동을 고른다.', challenge: '셋째 질문에서 말한 사람에게 할 문장까지 고른다.' },
        wrap: {
          teacher: '"지어낸 친구 하람은 울고 있을 때 \'남자니까 울지 마\'라는 말을 들었어요. 하람의 마음은 얼마나 속상할까요?" 눈금을 표시한 뒤 내가 할 행동을 고르게 한다. 말한 사람을 비난하기보다 다르게 생각하게 돕는 말을 고르게 한다.',
          exitTicket: [
            SCALE('"남자니까 울지 마"를 들은 하람의 속상한 마음 크기를 표시해요.', '하람이 울고 있을 때 "남자니까 울지 마"라는 말을 들었어요', '속상함', [3, 5]),
            EX('emotion', PICK('하람 옆에 있는 내가 할 행동만 골라요.', '내가 할 행동', ['"울어도 괜찮아" 말해 주기', '곁에 있어 주기'], ['같이 놀리기', '못 본 척하기'], { easy: 1, easyTraps: 1 }, 0.1)),
            { type: 'choice', prompt: '"남자니까 울지 마"라고 말한 사람에게 할 문장은?', options: ['"너도 울보잖아"', '"누구나 슬프면 울 수 있어"', '아무 말도 안 하기'], answer: 1, difficulty: 0.15, explain: '비난하지 않고 다르게 생각하게 돕는 말이에요.' },
          ],
        },
        worksheet: {
          title: '고정관념 말에 대처하기',
          items: [
            { type: 'short', prompt: '"여자니까/남자니까" 말을 들은 친구에게 해 줄 말을 써요.' },
            { type: 'short', prompt: '그 말을 한 사람에게 할 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 가정폭력을 알렸을 때 이어지는 도움 (가정폭력방지법 예방교육 매년 1회 이상 — research-mandatory §1) ========
  {
    const X = mk('family-help', 6);
    const TOWN = [P('학교', 'school', [1, 0]), P('지역 상담 기관', 'office', [4, 0]), P('파출소', 'police', [5, 2]), P('믿는 이웃 집', 'house', [1, 2]), P('지아네 집', 'apartment', [2, 3]), P('놀이터', 'park', [4, 3])];
    const HELP = (prompt, place, d, more) => Object.assign({
      prompt, toolOptions: { grid: [6, 4], title: '우리 동네 도움 지도(가상)', places: TOWN }, target: { place }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(장소 두 곳).`, toolOptions: { places: [TOWN.find((p) => p.name === place), TOWN[5]], readout: true } } },
    }, more);
    M.push(
      X('intro.after-myth', {
        title: '알리면 어떻게 될까 오해·사실', method: '가정폭력을 알린 뒤에 대한 오해·사실 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 3장이 바구니에 들어가는 시연을 보인다.', base: '카드 6장이 \'오해\'·\'사실\'에 다 들어가는 시연을 본다.', challenge: '오해 카드마다 바른 설명을 말로 잇는다.' },
        intro: {
          teacher: '"가정폭력을 알리면 어떻게 될까요? 많은 어린이가 걱정 때문에 망설여요." 시연 단추로 카드가 바구니에 들어가는 모습을 보인다. "알리면 가족이 벌만 받고 끝나요"라는 말에는 "상담과 보호로 가족 모두가 다시 안전해지도록 돕는 거예요"라고 말해 준다. "어린이는 알릴 수 없어요"라는 말에는 "어린이도 믿는 어른에게 알릴 수 있어요"라고 말해 준다. 학생 가정에 대해 묻지 않는다.',
          student: '오해 카드 하나를 골라 바른 설명으로 바꾸어 짝에게 말해 보아요.',
          demo: SDEMO('sortboard', ['오해', '사실'], { 오해: ['알리면 가족이 벌만 받는다', '어린이는 알릴 수 없다', '알리면 일이 더 나빠진다'], 사실: ['상담과 보호로 가족이 다시 안전해지게 돕는다', '어린이도 믿는 어른께 알릴 수 있다', '알리는 것은 가족을 돕는 일이다'] }),
          art: art('a paper house with a warm paper door opening and small paper hands reaching to help', '알리는 것은 돕는 일', 'house', 'peach'),
        },
        notes: '이 차시를 들으며 마음이 힘들어 보이는 학생이 있으면 수업 뒤 따로 다가가고 학교 절차로 잇는다.',
      }),
      X('intro.after-feeling', {
        title: '도움을 받은 뒤 인물의 마음', method: '가상 인물이 도움을 받기 전과 뒤의 마음 견주기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 하나(상담 선생님과 이야기한 뒤)에 마음 카드가 이어지는 시연을 본다.', base: '두 장면(알리기 전·이야기한 뒤)에 마음 카드가 이어지는 시연을 보고 견준다.', challenge: '마음이 바뀐 까닭(믿어 주는 어른·안전 계획)을 말로 고른다.' },
        intro: {
          teacher: '"지어낸 친구 지아는 알리기 전에는 걱정이 가득했어요. 상담 선생님과 이야기한 뒤에는 어떤 마음일까요?" 시연 단추로 두 장면에 마음 카드가 이어지는 모습을 보인다. "말하면 더 무서워져요"라는 말에는 "말한 뒤에는 혼자가 아니게 돼요. 어른들이 함께 안전 계획을 세워요"라고 말해 준다.',
          student: '지아의 마음이 바뀐 까닭을 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 'before', label: '알리기 전 지아' }, { id: 'after', label: '상담 선생님과 이야기한 뒤 지아' }], cards: ['걱정', '편안함', '신남', '화남'] }, sequence: [{ match: { after: '편안함' } }, { match: { before: '걱정', after: '편안함' } }] },
          art: art('two paper scenes side by side, a paper child under a grey paper cloud and the same child under a warm paper sun with an adult', '말하고 나니 혼자가 아니에요', 'sun', 'buttercup'),
        },
      }),
      X('activity.help-chain', {
        title: '알린 뒤 이어지는 도움 차례', method: '가정폭력을 알린 뒤 이어지는 도움 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장(선생님께 말하기·안전 계획·계속 돌봄)의 차례를 놓는다.', base: '장면 카드 4장(학교가 전문 기관과 연결 더함)의 차례를 놓는다.', challenge: '틀린 장면(혼자 해결하기)을 빼고 놓은 뒤, 둘째 문항에서 장면마다 지아 곁에 있는 사람을 잇는다(맞지 않는 카드 섞임).' },
        activity: {
          title: '이어지는 도움', tool: 'story',
          teacher: '"지아가 담임 선생님께 말한 뒤에는 어떤 일이 이어질까요?" 장면 카드를 놓은 뒤 차례를 읽게 한다. "선생님께 말하면 끝이에요"라는 말에는 "선생님은 전문 기관과 이어 주고, 안전 계획을 세우고, 그 뒤에도 계속 살펴요"라고 말해 준다. 기관 이름·번호는 학교가 확인해 알려 주는 것으로 교사가 덧붙인다.',
          task: '지아가 알린 뒤 이어지는 도움 장면을 차례대로 놓고, 곁에 있는 사람을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('지아가 알린 뒤 이어지는 도움 장면을 차례대로 놓아요.', ['담임·상담 선생님께 말하기', '학교가 전문 기관과 연결', '안전 계획 세우기', '계속 돌봄 받기'], { easy: [0, 2, 3], trap: '혼자 해결하기', motifs: ['star', 'house', 'leaf', 'sun'] }, 0.2),
            MATCH('장면마다 지아 곁에 있는 사람을 이어요.', [['선생님께 말할 때', '담임 선생님'], ['기관과 이어질 때', '상담 기관 선생님'], ['계속 돌봄 받을 때', '안전한 보호자']], { easy: 2, traps: ['모르는 온라인 사람'], title: '곁에 있는 사람' }, 0.25,
              { conclude: '알리면 학교가 전문 기관과 이어 주고, 안전 계획을 세우고, 계속 돌봐요.' }),
            { prompt: '\'알리는 것은 가족 모두를 돕는 일\'인 까닭을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알린 뒤 이어지는 도움을 차례대로 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '선생님께 말하기, 전문 기관 연결, 안전 계획, 계속 돌봄' }] },
        notes: '이야기는 지어낸 것이다. 실제 기관 이름과 연결 절차는 학교가 확인한 것을 교사가 덧붙인다.',
      }),
      X('activity.town-map', {
        title: '우리 동네 도움 지도', method: '동네 도움 지도에 핀 꽂기', tool: 'map', minutes: 14,
        levels: { easy: '문항마다 장소 두 곳만 보이는 지도에서 핀을 꽂는다(이름이 보임).', base: '장소 여섯 곳 지도에서 학교·지역 상담 기관·파출소·믿는 이웃 집에 핀을 꽂는다.', challenge: '같은 문항을 마친 뒤, 다섯째 문항에서 지아네 집에서 가장 가까운 도움 장소를 고른다.' },
        activity: {
          title: '동네 도움 지도', tool: 'map',
          teacher: '"우리 동네에서 도움을 받을 수 있는 곳은 어디일까요?" 상황을 읽고 핀을 꽂게 한다. 지역 상담 기관의 이름과 번호는 학교가 확인해 알려 주는 것을 교사가 칠판에 적어 준다. "파출소는 나쁜 사람만 가는 곳이에요"라는 말에는 "지금 누군가 다칠 것처럼 위험할 때 어린이를 지켜 주는 곳이에요"라고 말해 준다. 지도는 지어낸 동네다.',
          task: '상황을 읽고 동네 도움 지도에서 알맞은 곳에 핀을 꽂아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            HELP('학교에서 선생님께 말하고 싶어요. 갈 곳에 핀을 꽂아요.', '학교', 0.15),
            HELP('학교가 이어 주는 상담 기관에 핀을 꽂아요.', '지역 상담 기관', 0.15),
            HELP('지금 누군가 다칠 것처럼 위험해요. 경찰이 있는 곳에 핀을 꽂아요.', '파출소', 0.2),
            HELP('방과 후 가까이에서 믿는 어른을 찾고 싶어요. 갈 곳에 핀을 꽂아요.', '믿는 이웃 집', 0.2),
            { prompt: '지아네 집에서 가장 가까운 도움 장소를 골라요.', toolOptions: { grid: [6, 4], title: '우리 동네 도움 지도(가상)', places: TOWN, readOnly: true, ask: { q: '지아네 집에서 가장 가까운 도움 장소는?', choices: ['믿는 이웃 집', '파출소', '놀이터'], why: ['', '파출소는 지아네 집에서 더 멀어요.', '놀이터는 도움 장소가 아니에요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '학교·지역 상담 기관·믿는 이웃 어른, 그리고 지금 위험할 때는 경찰이 도와요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황에 알맞은 도움 장소를 써요.', columns: ['상황', '도움 장소'], cells: [['선생님께 말하고 싶어요', ''], ['상담을 받고 싶어요', ''], ['지금 위험해요', '']], answer: '학교, 지역 상담 기관, 파출소' }] },
        notes: '지도는 지어낸 동네다. 지역 상담 기관·신고 번호는 학교가 확인한 것을 교사가 적어 준다(이 모듈에는 번호를 넣지 않았다).',
      }),
      X('activity.neighbor-choice', {
        title: '옆집에서 들린 큰 소리 갈림길', method: '옆집에서 들린 큰 소리 갈림길', tool: 'dilemma', minutes: 27,
        levels: { easy: '갈림 2번(모른 척할지·보호자가 망설일 때)을 지나 근거를 고른다.', base: '갈림 3번(선생님께 말한 뒤 할 일 더함)을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 근거를 모두 고르고, 보호자가 망설일 때 건넬 말을 모둠에서 짓는다(셋째 문항).' },
        activity: {
          title: '옆집의 큰 소리', tool: 'dilemma',
          teacher: '"지어낸 친구 도현은 밤마다 옆집에서 큰 소리와 우는 소리를 들어요. 도현은 무엇을 할 수 있을까요?" 고를 때마다 결과를 읽게 한다. "남의 집 일에는 끼면 안 돼요"라는 말에는 "누군가 다칠 수 있다면 알리는 것이 그 집 사람들을 돕는 일이에요"라고 말해 준다. 어린이가 직접 찾아가 나서지 않고 어른과 기관에 맡긴다는 점을 분명히 한다.',
          task: '도현의 갈림길마다 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL3({
            title: '옆집의 큰 소리',
            steps: [
              { text: '밤마다 옆집에서 큰 소리와 우는 소리가 들려요.', motif: 'moon',
                good: ['tellparent', '보호자에게 들은 것을 말한다', '보호자가 도현의 걱정을 들어 줘요.', [['도현', '혼자가 아니에요', 1]]],
                bad: ['ignore', '모른 척한다', '소리는 밤마다 이어져요.', '누군가 다칠 수 있다면 알려야 해요.', [['옆집 사람들', '도움을 못 받아요', -1]]] },
              { text: '보호자가 "남의 집 일이라…" 하며 망설여요.', motif: 'cloud',
                good: ['teacher', '다음 날 담임 선생님께도 말한다', '선생님이 학교 절차대로 어른들과 이어 줘요.', [['옆집 사람들', '도움에 가까워져요', 1]]],
                bad: ['drop', '그냥 잊기로 한다', '도현의 걱정은 그대로 남아요.', '첫 어른이 망설이면 다른 믿는 어른께 말해요.', [['도현', '걱정이 남아요', -1]]] },
              { text: '선생님이 "알려 줘서 고마워. 어른들이 함께 도울게"라고 해요.', motif: 'sun',
                good: ['trust', '어른과 기관에 맡기고 직접 나서지 않는다', '어른들이 안전하게 살펴요.', [['도현', '안전해요', 1], ['옆집 사람들', '도움을 받아요', 1]]],
                bad: ['go', '직접 옆집에 찾아가 따진다', '도현이 위험해질 수 있어요.', '어린이가 직접 나서면 위험해요. 어른과 기관이 도와요.', [['도현', '위험해요', -1]]] },
            ],
            ending: '도현이 알리고 어른에게 맡긴 덕분에 옆집 사람들이 도움을 받기 시작했어요.',
            reasons: [{ id: 'help', text: '알리는 것은 돕는 일이다' }, { id: 'safe', text: '직접 나서지 않고 어른과 기관에 맡긴다' }, { id: 'privacy', text: '남의 집 일에는 끼면 안 된다', why: '누군가 다칠 수 있다면 알리는 것이 돕는 일이에요.' }, { id: 'punish', text: '알리면 그 가족이 벌만 받는다', why: '상담과 보호로 가족 모두가 안전해지도록 도와요.' }],
            good: ['help', 'safe'],
            talk: '보호자가 망설일 때 도현이 건넬 말을 모둠에서 지어 말해요.',
            conclude: '걱정되는 소리를 들으면 믿는 어른께 알려요. 직접 나서지 않고 어른과 기관에 맡겨요.',
          }),
        },
        worksheet: { items: [
          { type: 'choice', prompt: '옆집에서 걱정되는 소리가 계속 들리면?', options: ['모른 척한다', '믿는 어른께 알린다', '직접 찾아가 따진다'], answer: '믿는 어른께 알린다' },
          { type: 'short', prompt: '보호자가 망설일 때 다음으로 말할 어른을 써요(이름 대신 \'담임 선생님\'처럼).' },
        ] },
        notes: '이야기는 지어낸 것이다. 폭력 장면을 묘사하지 않는다.',
      }),
      X('wrap.guide-card', {
        title: '도움 안내 카드 쓰기', method: '후배에게 주는 도움 안내 카드 쓰고 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀로 두 줄을 쓰고 기준 2개를 점검한다.', base: '세 줄을 쓰고 기준 3개(누구에게·어떻게·탓하지 않는 말)를 점검한다.', challenge: '세 줄을 쓰고 중학생이 되어서도 쓸 수 있게 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"5학년 후배에게 \'걱정될 때 이렇게 해요\' 카드를 써 준다면?" 기준표를 함께 읽는다. "참으면 돼"처럼 참으라는 말을 쓴 학생에게 "참지 않고 말해도 된다는 걸 알려 주면 어떨까요?"라고 말해 준다. 실제 이름·주소는 쓰지 않는다.',
          exitTicket: [
            RUBX('후배에게 주는 도움 안내 카드를 세 줄로 써요', { topic: '후배에게 주는 "걱정될 때 이렇게 해요" 카드를 세 줄로 써요(이름은 쓰지 않아요).', starter: '걱정될 때는 ___에게 말해요. ___ 말하면 돼요.', crit: ['누구에게 말할지 썼다', '어떻게 말할지 썼다', '탓하지 않는 말이다'], must: [['선생님', '어른', '보호자', '상담']], chars: [30, 200], title: '도움 안내 카드' }),
            { type: 'choice', prompt: '도움 안내 카드에 넣으면 안 되는 말은?', options: ['"믿는 어른께 말해요"', '"참으면 다 괜찮아져"', '"네 잘못이 아니에요"'], answer: 1, difficulty: 0.1, explain: '참지 않고 말해도 돼요.' },
          ],
        },
        worksheet: {
          title: '도움 안내 카드',
          items: [
            { type: 'short', prompt: '후배에게 주는 도움 안내 카드를 세 줄로 써요.' },
            { type: 'check', prompt: '카드에 넣은 것에 표시해요.', options: ['누구에게 말할지', '어떻게 말할지', '탓하지 않는 말'] },
          ],
        },
      }),
      X('wrap.link-check', {
        title: '도움 연결 다짐 점검표', method: '도움 연결 다짐 점검표에 표시', tool: 'kitchen', minutes: 6,
        levels: { easy: '도움 연결 다짐 1칸을 골라 표시한다(함정 섞임).', base: '다짐 3칸을 골라 표시한다.', challenge: '3칸을 표시하고, 중학교 첫 주에 확인할 도움 장소를 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 도움 연결을 내 다짐으로 만들어 볼까요?" 점검표에서 다짐만 골라 표시하게 한다. \'위험한 비밀도 무조건 지키기\'를 고른 학생에게 "친구가 다칠 수 있는 비밀은 어떻게 해야 할까요?"라고 되묻는다. 믿는 어른 두 명은 이름 대신 \'담임 선생님\'처럼 쓰게 한다.',
          exitTicket: [
            EX('kitchen', CHK('내가 지킬 도움 연결 다짐만 골라 표시해요.', '도움 연결 다짐', ['믿는 어른 두 명 정하기', '도움 장소 알아 두기', '위험한 비밀은 함께 알리기'], ['위험한 비밀도 무조건 지키기'], { easy: 1, base: 3 }, 0.15)),
            { type: 'short', prompt: '중학교 첫 주에 확인할 도움 장소 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '도움 연결 다짐',
          items: [
            { type: 'short', prompt: '내가 믿는 어른 두 명을 써요(이름 대신 \'담임 선생님\'처럼).' },
            { type: 'short', prompt: '중학교에 가서 확인할 도움 장소를 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
