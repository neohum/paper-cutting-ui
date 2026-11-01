/* 창체 법정교육 다문화 이해 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 multi 고.
 * 근거: 다문화가족지원법 제5조·시행령 제10조의2(연 2시간, 교육부 지침) — research-mandatory §1, §2 다문화 이해 고(이주민 인권, 세계시민성).
 * 고 기준: 실제 자료 분석·토론(찬반 근거)·제안서·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 이 영역의 원칙:
 *   · 문화·출신을 불쌍함·특별함·이국적 볼거리로 그리지 않는다. 사람 먼저 쓰는 말('다른 나라에서 온 동료', '이주민 당사자').
 *   · 비하·혐오 표현은 인용하지 않고 '출신을 들먹이며 모욕한다'처럼 상황으로만 쓴다. 고정관념 문장은 바로잡는 함정 카드(why)로만 쓴다.
 *   · 특정 나라·민족·종교 이름을 쓰지 않는다(기도 시간·먹지 않는 재료로만 말한다). 인물은 직접 지은 가명 한 글자(라·안·별·하·윤)다.
 *   · 이주·정책처럼 논쟁적인 주제는 근거를 따지는 토론으로 — 정답·정치적 입장을 정하지 않고, 정당·정치인·실제 정책 이름을 쓰지 않는다.
 *   · 법은 근거 파일에 있는 것(다문화가족지원법 제5조·시행령 제10조의2)만 — 노동 관련 법 이름·조문·수치(휴게 시간·최저임금)는 쓰지 않는다.
 *   · 수치 자료는 모두 '가상'이다(화면 제목에 밝힘). 시급 1만 원·예산은 계산 연습용 가상 값이다.
 *   · 도움 받을 곳은 전화번호 없이 체계도 자리 글 '[학교가 확인해 넣는 차별 상담·구제 기관]' 그대로(교사가 확인해 채운다). 경찰은 번호 없이 '위급하면 경찰에 신고'로만.
 *   · 학생 자신의 가족 배경·출신·종교·장애 여부·피해 경험을 묻지 않는다.
 * 주제 4개, 체계도 계획 모듈 32개 전부.
 *
 * 교구 한계로 계획을 바꾼 곳:
 *   media.activity.ad-redesign: '쉬움 장면 2개' → 문항 수는 단계마다 같아야 해서 쉬움은 고르개(모양 종류)를 줄였다.
 *   global-citizen.activity.shared-schedule: '쉬움 시간 2개' → 쉬움은 짧은바늘 자리 칠하기(hourZone). 시계는 한 번에 한 시각이라 두 사람의 시간은 문항으로 나누고 시간표는 활동지가 맡는다.
 *   bystander.wrap.my-way: '할 수 있다·연습 필요'(사람마다 다른 답)는 분류판 정답이 될 수 없어 활동지 표로 옮기고, 교구는 직접·분산·위임·지연 갈래 나누기로 썼다.
 *   media.wrap.check-q: wordcards 는 글 카드 빈칸(fill)으로만 쓴다(영어 발음 모드 안 씀). '세 장 고르기'는 칸 셋에 좋은 질문 넷 가운데 아무거나.
 *   migrant-rights.intro.myth-sort: '오해·사실' 바구니를 '근거 없는 오해·인권 원칙에 맞는 말'로 바꾸었다(근거 파일에 없는 사실 주장 — 예: 세금 — 을 쓰지 않으려고).
 *   migrant-rights.activity.wage-calc: economy 는 돈만 센다 — 급여 차이를 거스름돈(낸 돈 − 값) 꼴로 만들었다.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   bystander 전체(intro.why-silent·activity.bus-dilemma·activity.step-order·wrap.my-way): 목격자 개입 방법 분류(직접·분산·위임·지연)와 '안전 확인 → 피해자에게 말 걸기 → 도움 요청 → 기록 → 뒤에 묻기' 차례, 침묵의 까닭(두려움·책임 분산·확신 없음) — 국가인권위원회 차별 대응·혐오표현 대응 안내, 교육부 다문화교육 자료(일반 지식, 근거 약함)
 *   bystander.activity.step-order: 온라인 비하 댓글은 퍼 나르지 않고 기록·신고 기능·지지 메시지·믿을 어른 순서 — 방송통신위원회·한국지능정보사회진흥원 디지털 시민성 자료
 *   bystander.wrap.help-route·migrant-rights.wrap.remedy-route: 도움·구제 경로(현장 책임자 → 위급하면 경찰 → 학교 → 차별 상담·구제 기관, 기록 → 상의 → 상담 → 당사자 뜻에 따른 절차) — 국가인권위원회 진정 안내, 지역 외국인·이주민 지원 기관 안내(기관 이름은 교사가 확인해 채움)
 *   migrant-rights.intro.myth-sort·activity.workplace-dilemma·wrap.rights-reflect: '일하는 사람은 누구나 안전한 일터에서 일할 권리가 있다'·'같은 일을 하면 출신과 상관없이 공정한 처우'·'인권은 국적과 상관없다'(원칙 문장) — 국가인권위원회 이주민 인권 자료, 고용노동부 외국인 근로자 권익 안내
 *   migrant-rights.activity.workplace-dilemma: 쉬는 시간 대화 언어를 한 사람에게만 막는 것을 차별의 예로 든 판단 — 국가인권위원회 차별 판단 기준
 *   migrant-rights.activity.wage-calc: '시간·업무·미리 알린 경력 기준·야간 수당은 정당한 차이일 수 있고, 국적·억양은 부당한 차이'라는 분류 — 고용노동부 외국인 근로자 권익 안내(같은 일 같은 처우)
 *   media 전체: 미디어 재현 분석 틀(누구를·어떤 낱말로·무엇을 빼고·어떤 인상), '되풀이되는 묘사가 고정관념을 굳힌다' — 방송통신심의위원회 방송 심의 규정(차별·인권), 한국언론진흥재단 미디어 리터러시 자료
 *   global-citizen.intro.citizen-mind: 세계시민성의 네 가지(존중·참여·연대·책임) 묶음 — 교육부·아시아태평양국제이해교육원 세계시민교육 자료
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'multi', band: '고', topic: `multi.h.${topic}`, grades }, o, { id: `multi.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(카드 판 sort — mindmap·story·timeline·emotion): groups = 칸마다 카드 글(글 = 카드 id). 쉬움 = 칸마다 앞 k장, 도전 = hard 덧붙임. traps = 어느 칸에도 안 넣을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 분류판(sortboard 글 카드 모드): 쉬움 = 바구니마다 앞 k장, 도전 = more(바구니마다 더할 카드)
  const SBQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const it = { prompt, toolOptions: { slots, cards: [...mix(groups), ...traps] }, target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    it.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); it.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { more: hard.flat() }, target: tgt(hg) }; }
    return Object.assign(it, more);
  };
  // 차례 문항(order): steps = 바른 차례(글 = id). 쉬움 = 앞 k장, traps = 자리에 놓지 않을 함정 카드
  const ORDERQ = (prompt, steps, { k = 3, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: steps.length, cards: lay(steps, traps) }, opt), target: { order: steps }, difficulty: d, levels: {} };
    if (k < steps.length) it.levels.easy = { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { slots: k, cards: lay(steps.slice(0, k), []) }, target: { order: steps.slice(0, k) } };
    else delete it.levels;
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
  // 낱말 짝(wordcards match): pairs = [[낱말, 뜻]…] — match 는 소리를 내지 않는다
  const WORDQ = (prompt, pairs, { k = 3, d = 0.3, opt = {}, more = {} } = {}) => {
    const w = (ps) => ps.map(([en, ko]) => ({ en, ko }));
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([en]) => [en, en])) });
    const it = { prompt, toolOptions: Object.assign({ words: w(pairs) }, opt), target: t(pairs), difficulty: d };
    if (k < pairs.length) it.levels = { easy: { prompt: pfx(prompt, `낱말 ${k}개`), toolOptions: { words: w(pairs.slice(0, k)) }, target: t(pairs.slice(0, k)) } };
    return Object.assign(it, more);
  };
  // 갈림길(dilemma): 나무를 depth 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 1번, 기본 = 2번, 도전 = 나무 전체(3번). 근거 카드는 모든 단계에서 고른다
  const DILQ = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const full = depth(scene);
    const it = { prompt, toolOptions: Object.assign({ scene: cut(scene, 2), reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } };
    if (full > 2) it.levels.challenge = { prompt: pfx(prompt, `갈림길 ${full}개`), toolOptions: { scene }, target: at(full) };
    return Object.assign(it, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀(starter), 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, sample = null, plus = null, d = 0.4, more = {} } = {}) => {
    const t = (cs) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, sent ? { sentences: sent } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks), difficulty: d, levels: {} };
    if (starter) it.levels.easy = { toolOptions: { starter } };
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
  // 짝·모둠이 말로 하는 문항(교구 판에 '해 보았어요' 표시 하나) — 카드 판·timer 에서
  const DONEQ = (prompt, title, label, more = {}) => Object.assign({ prompt, free: true, toolOptions: { title, doneLabel: label } }, more);
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];

  // ======================================================================================================
  // 1. 미디어 속 이주민 모습 읽기 (10학년)
  // ======================================================================================================
  {
    const M = MOD('media', [10]);
    const SC_STEREO = ['이주민 출연자가 늘 서툰 말투로 웃음거리 역할만 맡는 예능', '이주민이 나오는 뉴스 사진이 늘 사건·사고 기사 옆에만 놓인다', '다른 나라 출신 인물이 전통 의상 소품처럼 배경에만 서 있는 광고'];
    const SC_DIVERSE = ['이주민 의사가 자기 전문 분야를 차분히 설명하는 시사 프로그램', '출신이 다양한 친구들이 평범한 진로 고민을 나누는 드라마', '이주민 당사자가 자기 이야기를 직접 말하는 다큐멘터리'];
    const ROLES = [['노동자', 9], ['피해자', 6], ['전문가', 2], ['주인공', 1]];
    const ROLEBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '가상 드라마 표본 속 이주민 등장 역할(가상 자료)', unit: '명', xLabel: '맡은 역할', yLabel: '등장인물 수', data: ROLES }, more);
    // 예능 PD 의 갈림길
    const PD = { text: '예능 PD 윤은 편집실에서 다른 나라 출신 출연자 라의 억양 장면을 보고 있다. 작가가 "여기 자막을 크게 넣으면 빵 터져요"라고 한다.', who: 'PD 윤', motif: 'star', choices: [
      { id: 'use', text: '억양을 큰 자막으로 강조해 웃음 소재로 쓴다', result: '방송 뒤 그 장면이 짧은 영상으로 퍼진다.', impact: [{ who: '출연자 라', text: '말투를 흉내 내는 댓글이 쏟아진다', tone: -1 }],
        next: { text: '라가 "제 말투가 놀림거리가 됐어요"라고 연락해 왔다.', choices: [
          { id: 'ignore', text: '"예능이니 웃고 넘기자"고 답한다', result: '라는 다음 촬영을 망설인다.', impact: [{ who: '출연자 라', text: '일터에서 존중받지 못한다고 느낀다', tone: -1 }], ending: '웃음의 대상이 된 사람에게 예능은 그냥 재미가 아니다.' },
          { id: 'fix', text: '다시보기 자막을 고치고 라와 이야기한다', result: '퍼진 영상은 남았지만 다음 편집 기준이 생긴다.', impact: [{ who: '시청자', text: '고친 까닭을 알게 된다', tone: 1 }], ending: '바로잡는 것은 늦어도 필요하지만, 처음부터 빼는 쪽이 피해가 적다.' }] } },
      { id: 'cut', text: '억양 장면은 빼고 라의 재치 있는 말로 웃음을 만든다', result: '라가 농담을 이끄는 장면이 방송된다.', impact: [{ who: '출연자 라', text: '재치 있는 사람으로 보인다', tone: 1 }],
        next: { text: '시청률 회의에서 "자극이 약했다"는 말이 나온다.', choices: [
          { id: 'back', text: '다음 회에는 억양 자막을 다시 넣는다', result: '같은 놀림 댓글이 생긴다.', impact: [{ who: '출연자 라', text: '다시 웃음 소재가 된다', tone: -1 }], ending: '한 번 지킨 기준도 흔들리면 같은 결과로 돌아간다.' },
          { id: 'keep', text: '기준을 지키고 출연자들이 서로 어울리는 장면을 늘린다', result: '출연자들의 관계가 재미의 중심이 된다.', impact: [{ who: '시청자', text: '여러 모습의 이주민을 보게 된다', tone: 1 }],
            next: { text: '다른 프로그램 PD가 그 편집 기준을 물어 온다.', choices: [
              { id: 'share', text: '편집 기준을 문서로 정리해 나눈다', result: '제작진 안에서 기준이 공유된다.', impact: [{ who: '다음 출연자', text: '같은 일을 되풀이하지 않는다', tone: 1 }], ending: '한 사람의 선택이 제작 원칙이 되면 다음 사람까지 지킨다.' },
              { id: 'mine', text: '우리 팀 일이니 알아서 하라고 한다', result: '다른 프로그램은 예전 방식 그대로다.', impact: [{ who: '다른 출연자', text: '여전히 웃음 소재가 된다', tone: 0 }], ending: '좋은 기준도 나누지 않으면 한 팀에 머문다.' }] } }] } },
      { id: 'ask', text: '라에게 장면을 보여 주고 어떻게 쓸지 함께 정한다', result: '라가 "말투 말고 제 농담이 살았으면 해요"라고 말한다.', impact: [{ who: '출연자 라', text: '자기 모습을 정하는 데 참여한다', tone: 1 }],
        next: { text: '라의 뜻대로 편집했더니 작가가 "덜 웃기다"고 한다.', choices: [
          { id: 'respect', text: '라의 뜻을 지키며 다른 재미를 찾는다', result: '라의 농담 장면이 짧은 영상으로 퍼진다.', impact: [{ who: '출연자 라', text: '믿고 출연을 이어 간다', tone: 1 }],
            next: { text: '다음 회 새 출연자도 다른 나라에서 온 사람이다.', choices: [
              { id: 'rule', text: '처음부터 출연자와 장면을 상의하는 절차를 만든다', result: '상의가 제작 순서의 한 칸이 된다.', impact: [{ who: '다음 출연자', text: '처음부터 존중받는다', tone: 1 }], ending: '당사자와 함께 정하는 일이 절차가 되면 기준이 오래간다.' },
              { id: 'again', text: '이번엔 바쁘니 묻지 않고 편집한다', result: '새 출연자의 말투가 다시 자막이 된다.', impact: [{ who: '다음 출연자', text: '웃음 소재가 된다', tone: -1 }], ending: '한 번의 상의로는 부족하고, 절차가 있어야 이어진다.' }] } },
          { id: 'override', text: '"방송은 재미"라며 원래 자막을 넣는다', result: '라는 상의한 뜻이 무시됐다고 느낀다.', impact: [{ who: '출연자 라', text: '믿음이 깨진다', tone: -1 }], ending: '물어보고 무시하면 묻지 않은 것보다 실망이 크다.' }] } }] };
    const PD_R = [{ id: 'dignity', text: '웃음의 대상이 된 사람의 존엄이 재미보다 먼저다' }, { id: 'voice', text: '출연자가 자기가 어떻게 보일지 말할 수 있어야 한다' }, { id: 'fun', text: '예능은 재미일 뿐 보는 사람에게 영향이 없다', why: '되풀이되는 장면은 시청자가 그 집단을 떠올리는 방식에 쌓여요.' }, { id: 'rating', text: '시청률이 오르면 어떤 장면이든 괜찮다', why: '시청률은 누가 상처받는지 알려 주지 않아요.' }];
    // 뉴스 제목 프레임 가지(가상 제목)
    const HEAD = '가상 뉴스 제목: "○○시 외국인 노동자 급증… 주민 불안 커져"';
    const FR = {
      who: ['이주노동자를 한 덩어리로 묶어 부른다', '주민과 이주민을 서로 다른 편처럼 나눈다'],
      word: ['"급증"이라는 낱말로 위협처럼 느끼게 한다', '"불안"이라는 감정 낱말을 앞세운다'],
      omit: ['불안하다는 근거 자료가 없다', '이주노동자 당사자의 말이 빠져 있다'],
      feel: ['이주민이 늘면 위험하다는 인상', '이주민도 그 도시의 주민이라는 사실이 가려진다'],
    };
    const FR_TRAP = { id: 'fact', text: '제목은 사실만 전하니 따져 볼 것이 없다', why: '같은 사실도 어떤 낱말을 고르고 무엇을 빼느냐에 따라 인상이 달라져요.' };

    MODS.push(
      M({
        id: 'intro.scene-sort', type: 'intro', title: '고정관념일까, 다양성일까',
        method: '장면 가르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 장면 카드 넷(강화 둘·다양성 둘)만 바구니에 넣어 보이며 차이를 짚는다.', base: '장면 카드 여섯을 \'고정관념 강화\'·\'다양성 재현\' 바구니에 넣는 시연을 보고 가른 근거를 말한다.', challenge: '어느 바구니에 넣을지 애매한 장면(예: 이주민이 요리를 소개하는 예능)의 쟁점을 짝과 짚는다.' },
        intro: {
          teacher: '"여러분이 지난주에 본 예능·드라마·광고에 이주민이 나왔다면, 어떤 역할이었나요?" 두세 명의 대답을 듣고 시연 단추로 가상 장면 카드가 두 바구니에 들어가는 모습을 보여 준다. "예능은 재미일 뿐인데 무슨 영향이 있어요?"라는 말이 나오면 "같은 모습이 백 번 되풀이되면, 그 모습을 처음 보는 사람은 이주민을 어떻게 떠올릴까요?"라고 되묻는다. 장면 하나가 나쁜 것이 아니라 한 가지 모습만 되풀이될 때 고정관념이 굳는다는 점을 짚는다.',
          student: '가상 미디어 장면 카드를 보고, 이주민에 대한 고정관념을 굳히는 장면과 여러 모습을 보여 주는 장면으로 나누어 보세요. 한 가지 모습만 되풀이되는지가 판단 근거예요.',
          demo: { tool: 'sortboard', options: { slots: ['고정관념 강화', '다양성 재현'], cards: mix([SC_STEREO, SC_DIVERSE]) }, sequence: [{ sort: { '고정관념 강화': SC_STEREO, '다양성 재현': SC_DIVERSE } }] },
          art: { draw: 'a paper television screen split into two halves, one half repeating the same small paper figure in a row like stamps, the other half showing varied paper figures as a doctor, a student and a storyteller, two paper baskets on a shelf below', banner: '한 가지 모습만 보이나요?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '장면은 모두 가상이다. 실제 프로그램·광고·출연자 이름을 쓰지 않는다. 학생에게 자기 가족의 출신을 묻지 않는다.',
      }),
      M({
        id: 'intro.role-chart', type: 'intro', title: '이주민은 어떤 역할로 나올까',
        method: '등장 역할 분포 자료', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 가장 큰 막대(노동자)와 가장 작은 막대(주인공)만 짚으며 값을 읽는다.', base: '역할 넷의 막대를 읽고 가장 많은 역할을 고르는 시연을 본다.', challenge: '이 분포가 시청자에게 줄 인상을 한 문장으로 말하고, 가상 자료라 알 수 없는 것도 짚는다.' },
        intro: {
          teacher: '"이 그래프는 실제 조사가 아니라 수업을 위해 만든 가상 자료예요. 가상의 드라마 표본에서 이주민 등장인물 18명이 어떤 역할을 맡았는지 세었어요." 시연 단추로 \'노동자\' 막대가 골라지는 모습을 보여 준다. "노동자로 나오는 게 뭐가 문제예요? 일하는 건 좋은 거잖아요"라는 말이 나오면 "맞아요, 일은 존중받을 일이에요. 그런데 주인공이 한 명뿐이라면 시청자는 이주민의 어떤 이야기를 들을 기회가 적을까요?"라고 되묻는다. 역할 자체가 아니라 역할이 한쪽에 쏠리는 것을 보는 것이라고 짚는다.',
          student: '가상 드라마 표본의 이주민 등장 역할 막대그래프를 읽고, 어떤 역할에 쏠려 있는지, 그 쏠림이 보는 사람에게 어떤 인상을 줄지 생각해 보세요.',
          demo: { tool: 'chart', options: ROLEBAR({ question: '가장 많이 맡은 역할은?', choices: ROLES.map((x) => x[0]), showValues: true }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart standing like a row of paper buildings, the tallest bar wearing a tiny work helmet and the shortest bar wearing a tiny crown, a paper film clapperboard leaning beside it', banner: '역할은 고르게 나올까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '수치는 모두 가상이다(화면 제목에 밝힘). 실제 방송 통계로 읽히지 않게 한다.',
      }),

      M({
        id: 'activity.frame-analysis', type: 'activity', title: '뉴스 제목의 프레임 나누기',
        method: '뉴스 제목 프레임 분석', tool: 'mindmap', minutes: 17,
        levels: { easy: '가지 둘(누구를·어떤 낱말로)만 있는 판에서 카드를 놓고, 틀린 가지에 넣으면 바로 되돌아온다.', base: '가지 넷(누구를·어떤 낱말로·무엇을 빼고·어떤 인상)에 카드를 나누고, 다른 제목과 프레임을 짝짓고, 대안 제목을 고른다.', challenge: '함정 카드가 더해진 판을 나누고, 같은 사건을 다른 프레임으로 쓴 제목을 활동지에 직접 쓴다.' },
        activity: {
          title: '뉴스 제목 프레임 지도', tool: 'mindmap',
          teacher: '"' + HEAD.replace('가상 뉴스 제목: ', '') + ' — 이 제목은 가상이에요. 틀린 말은 없어 보이는데, 읽고 나면 어떤 느낌이 남나요?" 가지마다 "이 낱말을 다른 낱말로 바꾸면 느낌이 어떻게 달라질까요?"라고 묻는다. "숫자가 늘었다는 건 사실이니 문제없다"는 학생에게 "늘었다는 사실과 \'불안\'이라는 감정은 같은 근거로 나왔나요? 주민 불안의 근거는 제목 어디에 있나요?"라고 되묻는다. 프레임을 읽는 것은 기자를 비난하는 일이 아니라 내가 받은 인상이 어디서 왔는지 따지는 일이라는 점을 짚는다.',
          task: '가상 뉴스 제목을 네 가지(누구를·어떤 낱말로·무엇을 빼고·어떤 인상)로 나누어 분석하고, 다른 프레임의 제목과 견주어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: `${HEAD}. 이 제목을 분석한 카드를 네 가지에 나누세요.`, toolOptions: { mode: 'sort', topic: '뉴스 제목 프레임', slots: ['누구를', '어떤 낱말로', '무엇을 빼고', '어떤 인상'], cards: mix([FR.who, FR.word, FR.omit, FR.feel]) }, target: { sort: { 누구를: FR.who, '어떤 낱말로': FR.word, '무엇을 빼고': FR.omit, '어떤 인상': FR.feel } }, difficulty: 0.35,
              levels: {
                easy: { prompt: `${HEAD}. 분석 카드를 두 가지(누구를·어떤 낱말로)에 나누세요(가지 둘).`, toolOptions: { slots: ['누구를', '어떤 낱말로'], cards: mix([FR.who, FR.word]) }, target: { sort: { 누구를: FR.who, '어떤 낱말로': FR.word } } },
                challenge: { prompt: `${HEAD}. 분석 카드를 네 가지에 나누세요. 어디에도 맞지 않는 카드는 남겨요(함정 카드).`, toolOptions: { cards: [...mix([FR.who, FR.word, FR.omit, FR.feel]), FR_TRAP] }, target: { sort: { 누구를: FR.who, '어떤 낱말로': FR.word, '무엇을 빼고': FR.omit, '어떤 인상': FR.feel } } } } },
            MATCHQ('같은 사건을 다르게 쓴 가상 제목마다 그 제목이 주는 인상을 짝지으세요.', [['"외국인 노동자 급증… 주민 불안"', '이주민이 늘면 위험하다는 인상'], ['"일손 빈 공장, 이주노동자와 함께 돌아간다"', '함께 일하는 이웃이라는 인상'], ['"이주노동자 ○명 늘어… 주민·노동자 함께 간담회"', '사실과 양쪽 목소리를 함께 전하는 인상']], { k: 2, extra: ['이주민은 모두 불쌍하다는 인상'], d: 0.35, opt: { topic: '제목과 인상' }, more: { hints: ['제목에서 감정을 담은 낱말과 빠진 사람을 먼저 찾아보세요.'] } }),
            PICKQ('처음 가상 제목을 사실은 지키면서 고정관념을 덜 만드는 제목으로 고친 것을 모두 고르세요.', ['"○○시 이주노동자 늘어… 주민·노동자 함께 이야기 나눠"', '"○○시 일터 이주노동자 증가, 주민 의견도 엇갈려"'], ['"○○시 외국인 몰려와… 불안한 밤거리"', '"외국인 노동자, 이대로 괜찮은가"'], { d: 0.4, opt: { topic: '고친 제목', basket: '고친 제목' }, more: { conclude: '좋은 제목은 사실을 줄이지 않으면서 근거 없는 감정 낱말을 빼고, 빠졌던 당사자의 목소리를 넣어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '같은 사건을 다른 프레임으로 쓴 제목 하나를 직접 쓰고, 무엇을 바꾸었는지(낱말·넣은 사람·뺀 감정) 한 줄로 쓰세요.' }] },
        notes: '제목은 모두 가상이다. 실제 언론사·기사를 띄우지 않는다. 프레임 분석은 사실 확인이 아니라 표현 방식 분석이라는 점을 밝힌다.',
      }),
      M({
        id: 'activity.producer-dilemma', type: 'activity', title: 'PD의 선택 갈림길',
        method: 'PD의 선택 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(쓴다·빼고 다른 재미·출연자와 상의) 하나를 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 시청자 반응과 출연자 영향을 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 가 보고, 세 길을 견주어 활동지에 제작 원칙을 정리한다.' },
        activity: {
          title: 'PD의 갈림길', tool: 'dilemma',
          teacher: '"여러분이 예능 PD라면, 출연자의 억양으로 크게 웃길 수 있는 장면을 쓸까요?" 선택마다 결과와 \'누구에게 어떤 영향\'을 소리 내어 읽게 한다. "본인도 웃었으니 괜찮다"는 학생에게 "촬영장에서 웃은 것과, 그 장면이 수십만 번 퍼져 흉내 댓글이 달리는 것을 라가 똑같이 받아들일까요?"라고 되묻는다. 재미를 포기하라는 것이 아니라 웃음의 대상이 누구인지 따지는 것이라고 짚고, 셋째 갈림길에서 개인의 선택이 제작 절차가 되는 장면을 함께 본다.',
          task: '가상 예능 PD가 되어 갈림길마다 선택하고, 시청자 반응과 출연자 영향을 따라가 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('출연자와 상의하는 길을 끝까지 이어 가고, 내 선택의 근거를 고르세요.', PD, [['ask', 'respect', 'rule'], ['cut', 'keep', 'share']], PD_R, ['dignity', 'voice'], { d: 0.4, opt: { title: 'PD의 선택' } }),
            EXPLOREQ('\'억양을 웃음 소재로 쓴다\' 길과 \'출연자와 상의한다\' 길을 끝까지 가 보고 결과를 견주세요.', PD, PD_R, ['두 길의 끝 장면을 모두 확인했다', '출연자 라에게 남은 영향을 견주었다'], { d: 0.35 }),
            DILQ('뉴스 편집자 별이 이주민 관련 기사에 넣을 사진을 고른다. 알맞은 길을 고르고 근거를 고르세요.', { text: '이주민이 함께하는 지역 축제 기사. 편집자 별 앞에 사진 두 장이 있다: 경찰차가 함께 찍힌 사진, 주민과 이주민이 함께 무대를 준비하는 사진.', who: '편집자 별', motif: 'sun', choices: [
              { id: 'police', text: '눈길을 끄는 경찰차 사진을 쓴다', result: '축제 기사가 사건 기사처럼 읽힌다.', impact: [{ who: '축제 참가자', text: '위험한 행사처럼 보인다', tone: -1 }], ending: '기사 내용과 맞지 않는 사진은 없는 인상을 만든다.' },
              { id: 'stage', text: '함께 무대를 준비하는 사진을 쓴다', result: '기사 내용과 사진이 맞아떨어진다.', impact: [{ who: '축제 참가자', text: '있는 그대로 보인다', tone: 1 }],
                next: { text: '데스크가 "사진이 밋밋하다"며 다시 고르라고 한다.', choices: [
                  { id: 'explain', text: '기사 내용과 맞는 사진이어야 한다고 근거를 들어 설명한다', result: '데스크가 사진을 그대로 둔다.', impact: [{ who: '독자', text: '정확한 인상을 받는다', tone: 1 }], ending: '근거를 말하면 기준을 지킬 수 있다.' },
                  { id: 'swap', text: '말없이 경찰차 사진으로 바꾼다', result: '기사의 인상이 다시 달라진다.', impact: [{ who: '축제 참가자', text: '위험한 행사처럼 보인다', tone: -1 }], ending: '기준을 말하지 않으면 쉽게 흔들린다.' }] } }] },
            [['stage', 'explain']], [{ id: 'fit', text: '사진은 기사 내용과 맞아야 한다' }, { id: 'show', text: '있는 그대로의 모습을 보여 주는 것이 공정하다' }, { id: 'click', text: '많이 보면 어떤 사진이든 괜찮다', why: '눈길을 끄는 것과 사실을 전하는 것은 달라요.' }], ['fit', 'show'], { d: 0.35, more: { conclude: '웃음·사진·제목 — 고르는 사람의 선택 하나가 시청자와 독자가 이주민을 떠올리는 방식을 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 길을 견주어 제작 원칙을 정리하세요.', columns: ['길', '출연자에게 남은 영향', '여기서 얻은 제작 원칙'], cells: [['억양을 웃음 소재로', '', ''], ['빼고 다른 재미', '', ''], ['출연자와 상의', '', '']] }] },
        notes: 'PD 윤·출연자 라·편집자 별은 가상 인물이다. 억양 흉내를 교실에서 따라 하지 않게 한다.',
      }),
      M({
        id: 'activity.guideline', type: 'activity', title: '이주민 재현 가이드라인 제안',
        method: '보도·제작 가이드라인 제안', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '가이드라인 세 항목을 문장 틀을 보고 쓴다.', base: '가이드라인 다섯 항목을 쓰고 구체성·근거·실행 가능성 기준표로 점검한다.', challenge: '위반 사례 판정 예시를 하나 붙여 기준 하나를 더 점검한다.' },
        activity: {
          title: '재현 가이드라인', tool: 'rubric-writing',
          teacher: '"오늘 본 장면·그래프·제목을 바탕으로, 방송국과 신문사에 보낼 \'이주민을 보여 줄 때 지킬 약속\'을 써 봐요." 기준표를 먼저 함께 읽는다. "이주민을 좋게 보여 준다"처럼 막연한 항목에는 "편집자가 내일 아침 바로 확인할 수 있게, 무엇을 하고 무엇을 하지 않는지로 바꿔 볼까요?"라고 묻는다. "이주민은 불쌍하게 보여 주지 않는다"는 좋지만 "그럼 늘 훌륭하게만 보여 줘야 하나요?"라고 되물어, 특별하게 꾸미는 것도 고정관념이 될 수 있다는 점을 짚는다.',
          task: '이주민을 보여 줄 때 지킬 보도·제작 가이드라인을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가이드라인 세 항목을 쓰세요. 항목마다 \'하지 않는다/한다\'가 분명해야 해요.', '이주민을 보여 줄 때 방송·신문이 지킬 약속 세 항목을 한 문장씩 쓰세요.', ['항목마다 할 일이 구체적이다', '오늘 본 장면·자료를 근거로 삼았다', '제작진이 실제로 지킬 수 있다'], { min: 60, max: 300, sent: [3, 3], starter: '1. ~ 장면에서는 ~하지 않는다. 2. ~ 3. ~', d: 0.3 }),
            RWQ('가이드라인 다섯 항목으로 늘려 쓰세요(웃음·사진·제목·역할·당사자 목소리).', '이주민 재현 가이드라인 다섯 항목을 쓰세요.', ['항목마다 할 일이 구체적이다', '근거(자료·사례)가 있다', '실행 가능하다', '불쌍함·특별함으로 꾸미지 않는다는 내용이 있다'], { min: 120, max: 500, sent: [5, 6], must: [['당사자', '출연자 본인', '본인']], plus: '위반 사례 하나를 들어 어느 항목을 어겼는지 판정했다', d: 0.4,
              sample: '1. 말투·억양을 웃음 소재로 쓰지 않는다. 2. 기사 내용과 맞지 않는 사건 사진을 쓰지 않는다. 3. 제목에 근거 없는 감정 낱말을 앞세우지 않는다. 4. 노동자·피해자 역할에만 쏠리지 않게 다양한 역할을 맡긴다. 5. 장면을 쓰기 전에 당사자에게 보여 주고 의견을 듣는다.', more: { conclude: '좋은 가이드라인은 마음가짐이 아니라 내일 편집실에서 확인할 수 있는 행동으로 쓰여요.' } }),
            DONEQ('짝과 가이드라인을 바꿔 읽고, 편집자가 바로 확인하기 어려운 항목 하나를 찾아 고칠 말을 서로 제안하세요.', '짝과 바꿔 읽기', '짝과 바꿔 읽고 제안해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 가이드라인 가운데 가장 중요하다고 생각하는 항목 하나와 그 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.ad-redesign', type: 'activity', title: '광고 콘티 다시 설계하기',
        method: '광고 다시 설계하기', tool: 'collage', minutes: 18,
        levels: { easy: '모양 몇 가지만 있는 고르개로 장면 셋을 꾸미고 점검한다(장면 수는 같고 고르개가 단순하다).', base: '장면 셋(인물·역할·문구)을 다양한 조각으로 다시 배치하고 장면마다 점검한다.', challenge: '셋째 장면에서 타깃 시청자와 메시지를 정하고, 그것이 장면에 드러나는지 하나 더 점검한다.' },
        activity: {
          title: '광고 콘티 세 장면', tool: 'collage',
          teacher: '"가상 음료 광고 콘티예요. 1장면: 한 사람만 전통 의상 차림으로 뒤에 서 있다. 2장면: 그 사람이 서툰 말로 제품 이름을 말해 웃음을 준다. 3장면: \'○○ 맛 그대로!\'라는 문구." 칠판에 원래 콘티를 적고, 장면마다 무엇을 바꿀지 먼저 말하게 한다. "그럼 이주민을 아예 빼면 되잖아요"라는 학생에게 "빼는 것도 하나의 메시지예요. 함께 나오되 어떤 역할로 나오면 좋을까요?"라고 되묻는다. 특정 나라의 옷·음식을 구경거리처럼 쓰지 않는다는 원칙을 먼저 정한다.',
          task: '고정관념을 강화하는 가상 광고 콘티 세 장면을 다양한 인물 조각과 문구 자리로 다시 배치하고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '1장면(인물): 여러 인물이 앞줄에 함께 서는 장면을 서로 다른 조각으로 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, target: { selfCheck: ['서로 다른 조각으로 여러 인물을 나타냈다', '한 사람만 뒤에 따로 세우지 않았다', '실제 사람 얼굴·이름을 넣지 않았다'], minPieces: 4 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '2장면(역할): 말투가 아니라 행동(제품을 고르고 나누는 모습)으로 재미를 주는 장면을 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'heart'] }, target: { has: [{ shape: 'circle', min: 2 }], selfCheck: ['인물마다 하는 행동이 보인다', '말투·억양을 웃음 소재로 쓰지 않았다'], minPieces: 3 }, difficulty: 0.3,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '3장면(문구): 문구를 넣을 긴 네모 조각 자리와 함께 마무리 장면을 꾸미고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'star', 'heart', 'diamond'] }, target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['문구 자리를 만들었다', '모두가 함께 즐기는 장면이다'], minPieces: 3 }, difficulty: 0.3,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } }, challenge: { prompt: '3장면(문구): 타깃 시청자와 메시지를 정하고, 그것이 드러나게 마무리 장면을 꾸미고 점검하세요(타깃·메시지).', target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['문구 자리를 만들었다', '모두가 함께 즐기는 장면이다', '정한 타깃 시청자와 메시지가 장면에 드러난다'], minPieces: 3 } } },
              conclude: '함께 서고, 행동으로 웃고, 모두의 문구로 끝내면 — 이주민은 볼거리가 아니라 광고 속 사람이 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원래 콘티와 고친 콘티를 견주어 쓰세요.', columns: ['장면', '원래', '고친 것', '바꾼 까닭'], cells: [['1 인물', '한 사람만 뒤에', '', ''], ['2 역할', '서툰 말로 웃음', '', ''], ['3 문구', '', '', '']] }] },
        notes: '교구 한계: 계획의 \'쉬움 장면 2개\'는 문항 수를 단계마다 같게 두어야 해서, 쉬움은 고르개(모양 종류)를 줄이는 것으로 바꾸었다. 광고·제품은 가상이다. 문구는 활동지에 쓴다.',
      }),

      M({
        id: 'wrap.media-reflect', type: 'wrap', title: '내 미디어 습관 되돌아보기',
        method: '내 미디어 습관 성찰', tool: 'story', minutes: 7,
        levels: { easy: '교사가 첫 칸(자주 보는 콘텐츠)을 함께 고르고, 학생은 두 칸을 채운다.', base: '세 칸(자주 보는 콘텐츠 → 거기서 본 모습 → 앞으로 던질 질문)을 카드로 채운다.', challenge: '짝의 세 칸과 견주어 다른 점 한 줄을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 본 것을 내 화면으로 가져와 봐요. 내가 자주 보는 것에서 이주민은 어떤 모습이었나요?" 세 칸을 채운 뒤 셋째 칸에서 \'그 나라 사람은 원래 그렇다고 기억한다\'가 왜 남는지 묻는다. "나는 그런 거 신경 안 쓰고 그냥 본다"는 학생에게 "신경 쓰지 않을 때 장면이 더 쉽게 쌓여요. 다음에 볼 때 질문 하나만 던져 볼까요?"라고 말한다. 잘 보지 않는다면 \'거의 나오지 않음\'도 정직한 답이라고 알린다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 's1', label: '내가 자주 보는 것은 ___' }, { id: 's2', label: '거기서 본 이주민 모습은 ___' }, { id: 's3', label: '앞으로 볼 때 ___ 하고 묻겠다' }], cards: [{ id: 'show', text: '예능' }, { id: 'drama', text: '드라마' }, { id: 'news', text: '뉴스·짧은 영상' }, { id: 'joke', text: '웃음 소재로 쓰인 모습' }, { id: 'pro', text: '전문가·주인공으로 나온 모습' }, { id: 'none', text: '거의 나오지 않음' }, { id: 'q1', text: '누가 말하고 누가 빠졌나?' }, { id: 'q2', text: '웃음의 대상은 누구인가?' }, { id: 'trap', text: '그 나라 사람은 원래 그렇다고 기억한다', why: '한 장면을 한 집단 전체로 넓히면 그것이 고정관념이에요.' }] }, prompt: '세 칸에 내 생각에 맞는 카드를 한 장씩 놓으세요(어디에도 안 맞는 카드는 남겨요).', target: { fill: { s1: ['show', 'drama', 'news'], s2: ['joke', 'pro', 'none'], s3: ['q1', 'q2'] } }, difficulty: 0.2 },
            { type: 'short', prompt: '다음에 콘텐츠를 볼 때 던질 나만의 질문 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 미디어 습관',
          items: [
            { type: 'short', prompt: '오늘 수업 전과 뒤, 미디어 속 이주민 모습에 대한 내 생각이 어떻게 달라졌는지 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '짝의 세 칸과 견주어 다른 점 하나를 쓰세요.' },
          ],
        },
        notes: '학생의 시청 기록을 확인하지 않는다. 가족·출신을 묻지 않는다.',
      }),
      M({
        id: 'wrap.check-q', type: 'wrap', title: '미디어 볼 때 던질 질문 카드',
        method: '미디어 볼 때 던질 질문 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 질문 카드 하나를 함께 고르고, 학생은 나머지 칸을 채운다.', base: '질문 카드 셋을 골라 내 카드 세 칸에 놓는다.', challenge: '활동지에 새 질문 하나를 직접 만든다.' },
        wrap: {
          teacher: '"오늘 배운 것을 질문 세 장으로 들고 나가요. 다음에 예능·광고·뉴스를 볼 때 머릿속에서 꺼낼 카드예요." 카드를 고른 뒤 \'어느 나라 사람이 더 웃긴가?\' 카드가 왜 남는지 묻는다. "질문만 던지면 뭐가 바뀌어요?"라는 말에 "질문을 던지는 순간 그냥 받아들이던 장면을 한 번 멈추게 돼요. 그 멈춤이 미디어 리터러시의 시작이에요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'c1', label: '내 질문 카드 하나: ___' }, { id: 'c2', label: '내 질문 카드 둘: ___' }, { id: 'c3', label: '내 질문 카드 셋: ___' }], cards: [{ id: 'who', text: '누가 말하고 있나?' }, { id: 'miss', text: '누가 빠졌나?' }, { id: 'laugh', text: '웃음의 대상은 누구인가?' }, { id: 'need', text: '출신이 이야기에 꼭 필요한 정보인가?' }, { id: 'funny', text: '어느 나라 사람이 더 웃긴가?', why: '나라로 사람을 묶어 웃음을 고르는 질문은 고정관념을 키워요.' }, { id: 'exotic', text: '이국적인 볼거리가 충분한가?', why: '다른 문화를 구경거리로 보는 질문이에요. 사람이 어떻게 보이는지를 물어요.' }] }, prompt: '미디어를 볼 때 던질 질문 카드 셋을 골라 내 카드 칸에 놓으세요.', target: { fill: { c1: ['who', 'miss', 'laugh', 'need'], c2: ['who', 'miss', 'laugh', 'need'], c3: ['who', 'miss', 'laugh', 'need'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '예능 속 이주민 묘사에 대한 말로 알맞은 것은?', options: ['예능은 재미일 뿐 영향이 없다', '같은 모습이 되풀이되면 보는 사람의 생각에 쌓일 수 있다', '이주민은 늘 좋은 사람으로만 보여 줘야 한다'], answer: 1, difficulty: 0.15, explain: '한 장면이 아니라 되풀이되는 모습이 고정관념을 만들어요. 늘 좋게만 꾸미는 것도 사람을 한 가지로 보는 일이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 질문 카드',
          items: [
            { type: 'short', prompt: '내가 고른 질문 카드 하나를 최근 본 콘텐츠에 던져 보고 떠오른 생각을 쓰세요.' },
            { type: 'short', prompt: '새 질문 카드 하나를 직접 만들어 쓰세요.' },
          ],
        },
        notes: 'wordcards 는 글 카드 빈칸(fill)으로만 쓴다 — 영어 발음 모드를 쓰지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 2. 차별을 목격한 순간의 선택 (10학년)
  // ======================================================================================================
  {
    const M = MOD('bystander', [10]);
    const HELPPLACE = '[학교가 확인해 넣는 차별 상담·구제 기관]';
    const CITY = { title: '가상 도시의 장면 자리', grid: [6, 4], places: [{ name: '버스', icon: 'bus', at: [1, 1] }, { name: '편의점', icon: 'market', at: [3, 0] }, { name: '아르바이트 매장', icon: 'office', at: [4, 2] }, { name: '온라인 게시판', icon: 'library', at: [1, 3] }, { name: '학교', icon: 'school', at: [5, 0] }, { name: '공원', icon: 'park', at: [3, 3] }] };
    const SILENT = { fear: ['나에게 화가 돌아올까 봐 무섭다', '말을 잘못해 일이 커질까 걱정된다'], spread: ['다른 사람이 나서겠지 생각한다', '아무도 움직이지 않으니 괜찮은 줄 안다'], unsure: ['정말 차별인지 확신이 없다', '무엇을 해야 할지 방법을 모른다'] };
    const BUS = { text: '저녁 버스 안. 한 승객이 다른 나라에서 온 듯한 승객 안에게 출신을 들먹이며 큰소리로 모욕한다. 안은 고개를 숙이고 있고, 다른 승객들은 휴대폰만 본다.', who: '나', motif: 'cloud', choices: [
      { id: 'silent', text: '못 본 척 휴대폰을 본다', result: '모욕이 두 정거장 동안 이어진다.', impact: [{ who: '안', text: '아무도 편이 없다고 느낀다', tone: -1 }], ending: '침묵은 중립이 아니라 피해자를 혼자 두는 선택이 될 수 있다.' },
      { id: 'confront', text: '일어나 큰 소리로 그만하라고 맞선다', result: '모욕하던 승객이 나에게 화를 낸다.', impact: [{ who: '나', text: '위험해질 수 있다', tone: -1 }],
        next: { text: '승객이 나에게 다가오며 목소리를 높인다.', choices: [
          { id: 'driver2', text: '더 맞서지 않고 기사에게 도움을 청한다', result: '기사가 차를 세우고 승객을 진정시킨다.', impact: [{ who: '안', text: '모욕이 멈춘다', tone: 1 }], ending: '맞서다 위험해지면 다른 사람의 도움으로 바꾸는 것도 개입이다.' },
          { id: 'fight', text: '끝까지 말싸움을 한다', result: '다툼이 커지고 안은 더 곤란해진다.', impact: [{ who: '안', text: '관심이 쏠려 더 불편하다', tone: -1 }], ending: '이기려는 개입은 피해자를 더 곤란하게 할 수 있다.' }] } },
      { id: 'sit', text: '안의 옆자리로 가서 "괜찮으세요?" 하고 평범하게 말을 건다', result: '모욕하던 승객이 머쓱해 말을 줄인다.', impact: [{ who: '안', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '승객이 다시 혼잣말로 중얼거리기 시작한다.', choices: [
          { id: 'driver', text: '안에게 물어본 뒤 기사에게 알린다', result: '기사가 안내 방송으로 소란을 멈추게 한다.', impact: [{ who: '안', text: '안전하게 내릴 수 있다', tone: 1 }],
            next: { text: '안과 같은 정류장에서 내렸다.', choices: [
              { id: 'check', text: '"괜찮으세요? 필요하면 본 것을 말해 드릴게요"라고 묻는다', result: '안이 고맙다며 도움 받을 곳을 함께 찾아본다.', impact: [{ who: '안', text: '도움을 받을 길이 생긴다', tone: 1 }], ending: '뒤에 괜찮은지 묻는 것까지가 피해자를 지지하는 개입이다.' },
              { id: 'go', text: '끝났으니 바로 집으로 간다', result: '안은 혼자 정류장에 남는다.', impact: [{ who: '안', text: '놀란 마음이 남는다', tone: 0 }], ending: '소란이 멈춘 뒤에도 한마디가 큰 힘이 된다.' }] } },
          { id: 'leave', text: '자리를 옮겨 다시 휴대폰을 본다', result: '안은 다시 혼자 남는다.', impact: [{ who: '안', text: '잠깐의 지지가 끊긴다', tone: 0 }], ending: '시작한 지지는 상황이 끝날 때까지 이어 갈 때 힘이 된다.' }] } },
      { id: 'tell', text: '조용히 기사에게 가서 상황을 알린다', result: '기사가 안내 방송을 하고 승객이 조용해진다.', impact: [{ who: '안', text: '모욕이 멈춘다', tone: 1 }],
        next: { text: '안은 여전히 고개를 숙이고 있다.', choices: [
          { id: 'talk', text: '안에게 다가가 괜찮은지 묻는다', result: '안이 고개를 들고 "고마워요"라고 한다.', impact: [{ who: '안', text: '지지를 느낀다', tone: 1 }], ending: '도움 요청과 피해자 지지를 함께 하면 개입이 완성된다.' },
          { id: 'done', text: '할 일은 했으니 자리로 돌아간다', result: '모욕은 멈췄지만 안은 혼자다.', impact: [{ who: '안', text: '놀란 마음이 그대로다', tone: 0 }], ending: '멈추게 한 것도 개입이지만, 피해자 곁에 서는 일이 남아 있다.' }] } }] };
    const BUS_R = [{ id: 'safe', text: '내 안전을 지키면서 할 수 있는 방법을 고른다' }, { id: 'victim', text: '피해자가 혼자가 아니라고 느끼게 한다' }, { id: 'hero', text: '직접 맞서 이겨야 진짜 개입이다', why: '맞서는 것만 개입이 아니에요. 곁에 서기·도움 요청·나중에 묻기도 개입이에요.' }, { id: 'mind', text: '남의 일이니 끼어들지 않는 게 예의다', why: '출신을 이유로 한 모욕 앞의 침묵은 피해자에게 \'모두가 동의한다\'로 보일 수 있어요.' }];
    const STEPS = ['내 안전과 주변 상황을 확인한다', '피해자에게 평범하게 말을 건다', '책임자나 주변 사람에게 도움을 청한다', '본 것을 시간과 함께 기록해 둔다', '뒤에 피해자에게 괜찮은지 묻는다'];
    const SURVEY = [['그냥 지나감', 42], ['나중에 피해자에게 말 걸기', 18], ['주변 책임자에게 알림', 15], ['그 자리에서 제지', 10], ['기록 남기기', 6]];
    const SURBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '차별을 목격했을 때 한 행동(가상 설문 100명, 가상 자료)', unit: '명', xLabel: '한 행동', yLabel: '응답 수', data: SURVEY }, more);

    MODS.push(
      M({
        id: 'intro.scene-map', type: 'intro', title: '차별이 일어나는 자리',
        method: '차별이 일어나는 자리', tool: 'map', minutes: 7,
        levels: { easy: '교사가 핀 둘(버스·편의점)만 열어 가상 장면을 함께 읽는다.', base: '핀 넷(버스·편의점·아르바이트 매장·온라인 게시판)을 열어 가상 장면을 읽는 시연을 본다.', challenge: '장소마다 개입이 어려운 까닭(좁은 공간·손님과 직원·익명)을 하나씩 말한다.' },
        intro: {
          teacher: '"차별은 멀리서가 아니라 우리가 매일 지나는 자리에서 일어나요." 시연 단추로 \'버스\' 칸에 핀이 꽂히는 모습을 보여 주고, 핀마다 가상 장면을 읽는다 — 버스: 한 승객이 다른 승객의 출신을 들먹이며 모욕한다. 편의점: 손님이 직원의 억양을 흉내 내며 비웃는다. 아르바이트 매장: 점장이 한 직원에게만 "너희 나라 사람들은 원래 느리다"고 말한다. 온라인 게시판: 이주민 가게 후기에 출신을 비하하는 댓글이 달린다. "그런 말은 그냥 농담 아니에요?"라는 말이 나오면 "듣는 사람이 웃을 수 없는데 혼자 웃는 말을 농담이라고 할 수 있을까요?"라고 되묻는다. 오늘은 내가 겪은 일을 말하는 시간이 아니라, 본 사람으로서 할 수 있는 일을 익히는 시간이라고 밝힌다.',
          student: '가상 도시 지도의 핀을 열어 차별 장면을 읽어 보세요. 장소마다 본 사람이 나서기 어려운 까닭이 무엇인지 생각해 보세요.',
          demo: { tool: 'map', options: CITY, sequence: [{ place: '버스' }] },
          art: { draw: 'a paper city grid map with small paper pins on a bus, a convenience store, a part-time shop and a laptop screen, each pin holding a tiny speech bubble with a crack in it', banner: '차별은 어디서 일어날까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 모두 가상이고, 비하 표현은 \'출신을 들먹이며\'처럼 상황으로만 말한다(교사가 인용할 때도 특정 나라 이름을 넣지 않는다). 학생에게 피해 경험을 묻지 않는다.',
      }),
      M({
        id: 'intro.why-silent', type: 'intro', title: '목격자는 왜 침묵할까',
        method: '왜 침묵할까', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(두려움·책임 분산)에 카드 한 장씩을 놓아 보인다.', base: '가지 셋(두려움·책임 분산·확신 없음)에 카드가 나뉘는 시연을 본다.', challenge: '가지마다 이겨 낼 방법을 하나씩 말로 붙인다.' },
        intro: {
          teacher: '"버스 안 다른 승객들은 왜 휴대폰만 봤을까요? 나쁜 사람이라서일까요?" 시연 단추로 \'목격자의 침묵\' 둘레의 세 가지에 카드가 놓이는 모습을 보여 준다. "다들 가만히 있으면 괜찮은 거겠지"라는 말에는 "모두가 서로를 보며 그렇게 생각한다면, 그 자리에서 움직이는 사람은 몇 명일까요?"라고 되묻는다. 침묵하는 사람을 탓하려는 것이 아니라 침묵의 까닭을 알면 이겨 낼 방법도 보인다는 점을 짚는다.',
          student: '목격자가 침묵하는 까닭을 두려움·책임 분산·확신 없음으로 나누어 보고, 오늘 그 까닭을 이겨 낼 방법을 찾아보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '목격자의 침묵', slots: ['두려움', '책임 분산', '확신 없음'], cards: mix([SILENT.fear, SILENT.spread, SILENT.unsure]) }, sequence: [{ sort: { 두려움: SILENT.fear, '책임 분산': SILENT.spread, '확신 없음': SILENT.unsure } }] },
          art: { draw: 'a paper bus interior with several paper passengers looking down at paper phones, thought bubbles above them holding a small lock, a pointing finger and a question mark', banner: '왜 아무도 움직이지 않을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.bus-dilemma', type: 'activity', title: '버스 안 갈림길',
        method: '버스 안 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길 하나를 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 안전과 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 가 보고, 여러 행동을 엮은 최선안을 활동지에 쓴다.' },
        activity: {
          title: '버스 안 갈림길', tool: 'dilemma',
          teacher: '"버스 안에서 한 승객이 안에게 출신을 들먹이며 모욕해요. 여러분은 무엇을 할 수 있을까요?" 선택마다 \'안에게\'와 \'나에게\' 생기는 영향을 함께 읽게 한다. "나서면 일이 더 커진다"는 학생에게 "맞서는 길에서는 그럴 수 있어요. 그런데 옆자리로 가 말을 건 길에서는 어땠나요?"라고 되묻는다. 반대로 "끝까지 싸워 이겨야 한다"는 학생에게는 안이 그 다툼에서 어떤 표정이었을지 묻는다. 개입은 맞서기 하나가 아니라 곁에 서기·도움 청하기·나중에 묻기까지 여러 가지라는 점을 짚는다.',
          task: '버스 안 장면을 갈림길마다 따라가며 안전과 결과를 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('버스 안 장면에서 안전하게 피해자를 돕는 길을 끝까지 이어 가고, 근거를 고르세요.', BUS, [['sit', 'driver', 'check'], ['tell', 'talk']], BUS_R, ['safe', 'victim'], { d: 0.4, opt: { title: '버스 안' } }),
            EXPLOREQ('\'큰 소리로 맞선다\' 길과 \'옆자리로 가 말을 건다\' 길을 끝까지 가 보고 결과를 견주세요.', BUS, BUS_R, ['두 길의 끝 장면을 모두 확인했다', '안과 나에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('편의점에서 손님이 직원 별의 억양을 흉내 내며 비웃어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '편의점 계산대. 앞 손님이 직원 별의 억양을 흉내 내며 친구와 비웃는다. 별은 말없이 계산을 이어 간다.', who: '나', motif: 'house', choices: [
              { id: 'laugh', text: '분위기에 맞춰 같이 웃는다', result: '손님들이 더 크게 흉내 낸다.', impact: [{ who: '별', text: '일터에서 웃음거리가 된다', tone: -1 }], ending: '함께 웃는 것도 비웃음에 힘을 보탠다.' },
              { id: 'normal', text: '내 차례에 별에게 평범하게 인사하고 정중하게 계산한다', result: '흉내 내던 손님들이 머쓱해 가게를 나간다.', impact: [{ who: '별', text: '존중받는 손님 응대를 느낀다', tone: 1 }],
                next: { text: '손님들이 나간 뒤 가게가 조용해졌다.', choices: [
                  { id: 'ask', text: '"아까 일 괜찮으세요?" 하고 짧게 묻는다', result: '별이 "괜찮아요, 고마워요"라고 웃는다.', impact: [{ who: '별', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '평범한 존중과 짧은 한마디가 분산 개입이 된다.' },
                  { id: 'pass', text: '아무 말 없이 나간다', result: '별은 남은 하루를 혼자 견딘다.', impact: [{ who: '별', text: '놀란 마음이 남는다', tone: 0 }], ending: '분위기를 바꾼 뒤 한마디를 더하면 지지가 완성된다.' }] } }] },
            [['normal', 'ask']], [{ id: 'respect', text: '평범한 존중으로 비웃는 분위기를 바꿀 수 있다' }, { id: 'checkin', text: '뒤에 괜찮은지 묻는 것도 개입이다' }, { id: 'joke', text: '손님이 장난친 것뿐이다', why: '듣는 사람이 웃을 수 없는 흉내는 장난이 아니라 비하예요.' }], ['respect', 'checkin'], { d: 0.35, more: { conclude: '맞서기만 개입이 아니에요. 곁에 서기, 분위기 바꾸기, 도움 청하기, 뒤에 묻기 — 내 안전을 지키며 고를 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '버스 장면에서 여러 행동을 엮은 나의 최선안을 차례대로 쓰세요(예: 곁에 서기 → 도움 청하기 → 뒤에 묻기).' }] },
        notes: '안·별은 가상 인물이다. 모욕의 말은 인용하지 않고 상황으로만 말한다. 교실에서 억양 흉내를 재연하지 않는다.',
      }),
      M({
        id: 'activity.step-order', type: 'activity', title: '안전한 개입의 차례',
        method: '안전한 개입 차례', tool: 'timeline', minutes: 18,
        levels: { easy: '앞의 세 단계(안전 확인 → 말 걸기 → 도움 요청) 카드만 차례로 놓는다.', base: '다섯 단계를 차례로 놓고(함정 카드는 남김), 온라인·일터 장면의 차례도 놓는다.', challenge: '같은 다섯 단계가 상황에 따라 어떻게 바뀌는지 활동지에 표시한다.' },
        activity: {
          title: '안전한 개입 차례', tool: 'timeline',
          teacher: '"버스 갈림길에서 잘된 길을 다시 보면 차례가 있었어요. 무엇부터 했을까요?" 카드를 놓을 때마다 "이 단계를 건너뛰면 무엇이 위험해질까요?"라고 묻는다. "가해자를 먼저 혼내야 한다"는 학생에게 "혼내는 동안 피해자는 어디에 있나요? 우리 차례의 가운데에는 누가 있나요?"라고 되묻는다. 기록은 퍼뜨리려는 것이 아니라 피해자가 원할 때 도우려는 것이고, 피해자 얼굴을 찍어 올리지 않는다는 점을 짚는다.',
          task: '안전한 개입의 단계를 차례로 놓고, 장소가 바뀌면 차례가 어떻게 달라지는지 견주어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            ORDERQ('버스·거리에서 차별을 목격했을 때 안전한 개입의 단계를 차례로 놓으세요(어울리지 않는 카드는 남겨요).', STEPS, { k: 3, traps: ['가해자와 말싸움으로 이긴다'], d: 0.3, opt: { axis: ['먼저', '나중'] } }),
            ORDERQ('온라인 게시판에서 출신을 비하하는 댓글을 보았을 때의 차례를 놓으세요.', ['댓글을 퍼 나르지 않고 화면을 기록한다', '신고 기능으로 운영자에게 알린다', '당사자에게 지지하는 댓글이나 메시지를 남긴다', '계속되면 믿을 어른과 상의한다'], { k: 3, traps: ['비하 댓글을 캡처해 단톡방에 돌린다'], d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            ORDERQ('아르바이트 매장에서 점장이 동료에게 출신을 들먹이는 말을 할 때의 차례를 놓으세요.', ['그 자리에서 동료 곁에 선다', '나중에 동료에게 괜찮은지, 원하는 것을 묻는다', '동료가 원하면 함께 윗사람이나 상담 기관에 알린다', '일어난 날짜와 말을 기록해 둔다'], { k: 3, traps: ['동료 뜻을 묻지 않고 혼자 본사에 항의한다'], d: 0.4, opt: { axis: ['먼저', '나중'] }, more: { conclude: '장소마다 차례는 조금씩 달라도 가운데에는 늘 피해자의 안전과 뜻이 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장소마다 바뀌는 단계를 표시하세요.', columns: ['단계', '버스', '온라인', '일터'], cells: [['안전 확인', '', '', ''], ['피해자에게 말 걸기', '', '', ''], ['도움 요청', '', '', ''], ['기록', '', '', ''], ['뒤에 묻기', '', '', '']] }] },
      }),
      M({
        id: 'activity.survey-read', type: 'activity', title: '목격자 행동 설문 읽기',
        method: '목격자 행동 자료 해석', tool: 'chart', minutes: 17,
        levels: { easy: '막대 셋(그냥 지나감·말 걸기·알림)을 값이 보이는 채로 읽는다.', base: '막대 다섯을 읽고, 행동한 사람 수를 더하고, 행동을 늘릴 방안을 고른다.', challenge: '값을 숨긴 막대를 읽고, 이 자료로 알 수 없는 것(자료의 한계)을 고른다.' },
        activity: {
          title: '목격자 행동 자료', tool: 'chart',
          teacher: '"이 그래프는 수업을 위해 만든 가상 설문이에요. 차별을 목격한 100명이 무엇을 했는지 나타냈다고 해 볼게요." 막대를 읽고 \'그냥 지나감\'이 왜 가장 클지 아까 \'침묵의 까닭\'과 이어 말하게 한다. "대부분 지나가니 나도 지나가도 된다"는 학생에게 "그 42명도 서로를 보며 그렇게 생각했을 수 있어요. 나머지 58명이 한 행동 가운데 내가 할 수 있는 것은 무엇일까요?"라고 되묻는다. 마지막 문항에서 설문은 사람들이 \'했다고 말한 것\'이라는 한계를 짚는다.',
          task: '가상 설문 막대그래프를 읽고, 목격자의 행동을 늘릴 방안과 자료의 한계를 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 설문에서 가장 많은 사람이 한 행동을 고르세요.', toolOptions: SURBAR({ question: '가장 많은 행동은?', choices: SURVEY.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '가상 설문의 막대 셋에서 가장 많은 사람이 한 행동을 고르세요(막대 셋).', toolOptions: { data: SURVEY.slice(0, 3), choices: SURVEY.slice(0, 3).map((x) => x[0]) }, target: { pick: 0 } } } },
            { prompt: '\'그냥 지나감\'을 뺀 나머지 네 행동을 한 사람은 모두 몇 명인가요?', toolOptions: SURBAR({ question: '행동한 사람은 모두 몇 명?' }), target: { value: 49 }, difficulty: 0.3,
              levels: { easy: { prompt: '\'나중에 피해자에게 말 걸기\'와 \'주변 책임자에게 알림\'을 한 사람은 모두 몇 명인가요(막대 셋)?', toolOptions: { data: SURVEY.slice(0, 3) }, target: { value: 33 } } } },
            { prompt: '\'기록 남기기\'가 가장 적어요. 이 행동을 늘리는 방안으로 가장 알맞은 것을 고르세요.', toolOptions: SURBAR({ question: '기록을 늘리는 방안은?', choices: ['기록하는 방법(시간·장소·한 말)을 미리 익힌다', '피해자 얼굴을 찍어 SNS에 올리는 법을 알린다', '기록은 경찰만 하는 일이라고 알린다'], why: ['', '피해자 얼굴을 퍼뜨리면 또 다른 피해가 돼요.', '본 사람의 기록도 피해자가 도움을 청할 때 힘이 돼요.'] }), target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '이 가상 설문만으로는 알 수 없는 것을 고르세요.', toolOptions: SURBAR({ question: '이 자료로 알 수 없는 것은?', choices: ['어떤 행동이 가장 많았는지', '응답한 사람이 실제로 그렇게 행동했는지', '기록을 남긴 사람이 가장 적었는지'], why: ['막대 길이로 알 수 있어요.', '', '막대 길이로 알 수 있어요.'] }), target: { pick: 1 }, difficulty: 0.4, conclude: '설문은 사람들이 했다고 말한 것이에요. 실제 행동과 다를 수 있어서, 결론을 낼 때는 그 한계를 함께 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '목격자의 행동을 늘릴 학교·지역 방안 하나와, 그 방안이 \'침묵의 까닭\' 가운데 무엇을 줄이는지 쓰세요.' }] },
        notes: '자료는 수업용 가상 값이다(화면 제목에 밝힘). 실제 조사 통계로 읽히지 않게 한다.',
      }),
      M({
        id: 'activity.script', type: 'activity', title: '아르바이트 매장 개입 대본',
        method: '개입 대본 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '네 줄 대본을 문장 틀을 보고 쓴다.', base: '여섯 줄 대본을 쓰고 안전·피해자 중심·짧고 분명한 말 기준표로 점검한다.', challenge: '상대가 반발할 때의 대사를 넣어 기준 하나를 더 점검한다.' },
        activity: {
          title: '개입 대본', tool: 'rubric-writing',
          teacher: '"가상 장면이에요. 아르바이트 매장에서 손님이 동료 직원 안에게 \'말도 못 알아듣는데 왜 여기 있냐\'며 출신을 들먹여요. 나는 같은 매장 직원이에요." 기준표를 먼저 함께 읽는다. 대본이 손님을 꾸짖는 말로만 채워지면 "안은 지금 어디 있나요? 안에게 하는 말이 한 줄이라도 있나요?"라고 묻는다. "그 손님한테 똑같이 막말해 주면 된다"는 학생에게 "그러면 매장 안이 더 위험해지고, 안은 더 곤란해져요. 짧고 분명한 말이 더 힘이 세요"라고 답한다. 실제 친구·가게 이름은 쓰지 않게 한다.',
          task: '가상 아르바이트 매장 장면의 개입 대본을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('개입 대본을 네 줄로 쓰세요. 한 줄은 안에게 하는 말이어야 해요.', '가상 매장 장면: 손님이 동료 안의 출신을 들먹이며 무시한다. 나의 개입 대본을 네 줄로 쓰세요.', ['안에게 하는 말이 있다', '손님에게 짧고 분명하게 말했다', '내 안전을 지키는 방법이 있다'], { min: 50, max: 300, sent: [4, 4], starter: '나(손님에게): ~. 나(안에게): ~. 나(점장에게): ~. 나(나중에 안에게): ~.', d: 0.3 }),
            RWQ('같은 대본을 여섯 줄로 늘려 쓰세요(말리기·곁에 서기·책임자에게 알리기·뒤에 묻기).', '가상 매장 장면의 개입 대본을 여섯 줄로 쓰세요.', ['안전을 먼저 생각했다', '피해자(안) 중심의 말이 있다', '말이 짧고 분명하다', '모욕을 되갚는 말이 없다'], { min: 90, max: 450, sent: [6, 6], must: [['괜찮', '도와']], plus: '손님이 반발할 때의 대사를 넣었다', d: 0.4,
              sample: '나(손님에게): 손님, 그런 말씀은 멈춰 주세요. 주문은 제가 도와드릴게요. 나(안에게): 안 님, 제가 이어서 받을게요. 나(점장에게): 점장님, 계산대에 와 주실 수 있을까요? 나(손님이 화낼 때): 화나신 건 알겠지만 직원을 무시하는 말은 안 됩니다. 나(나중에 안에게): 아까 괜찮았어요? 원하면 같이 점장님께 말씀드려요.', more: { conclude: '좋은 개입 대본은 짧고 분명하며, 말의 가운데에 피해자를 둬요.' } }),
            DONEQ('짝과 대본을 소리 내어 한 번씩 읽고, 가장 짧고 분명했던 줄 하나를 골라 서로 말해 주세요.', '짝과 소리 내어 읽기', '짝과 읽고 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 \'안에게 하는 말\' 한 줄을 옮겨 쓰고, 그 말이 안에게 어떤 힘이 될지 쓰세요.' }] },
        notes: '안은 가상 인물이다. 교사가 손님 대사를 읽을 때 비하 표현을 인용하지 않고 \'출신을 들먹이며 무시한다\'로 말한다.',
      }),

      M({
        id: 'wrap.my-way', type: 'wrap', title: '나에게 맞는 개입 방법',
        method: '나에게 맞는 개입 방법 고르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 직접·위임 바구니에 카드 한 장씩을 함께 넣고, 활동지 두 칸을 채운다.', base: '개입 방법 카드 넷을 네 바구니(직접·분산·위임·지연)에 넣고, 활동지에 \'할 수 있다·연습 필요\'를 표시한다.', challenge: '\'연습 필요\'로 표시한 방법을 연습할 계획을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 본 개입은 네 가지로 묶을 수 있어요. 직접(그 자리에서 말리기), 분산(관심을 돌려 분위기 바꾸기), 위임(책임자에게 알리기), 지연(뒤에 피해자에게 묻기)." 카드를 바구니에 넣은 뒤, 활동지에서 나에게 \'할 수 있다\'와 \'연습 필요\'를 고르게 한다. "나는 용기가 없어서 아무것도 못 한다"는 학생에게 "지연 개입은 용기가 크게 필요하지 않아요. 상황이 끝난 뒤 \'괜찮아?\' 한마디도 개입이에요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['직접', '분산', '위임', '지연'], cards: ['"그만하세요"라고 짧게 말한다', '피해자에게 길을 묻는 척 말을 건다', '기사·점장에게 상황을 알린다', '상황이 끝난 뒤 피해자에게 괜찮은지 묻는다', { id: 'post', text: '가해자 얼굴을 찍어 SNS에 올린다', why: '얼굴을 퍼뜨리면 피해자까지 다시 드러나고 새로운 다툼이 생겨요.' }] }, prompt: '개입 방법 카드를 네 바구니에 넣으세요(어디에도 맞지 않는 카드는 남겨요).', target: { sort: { 직접: ['"그만하세요"라고 짧게 말한다'], 분산: ['피해자에게 길을 묻는 척 말을 건다'], 위임: ['기사·점장에게 상황을 알린다'], 지연: ['상황이 끝난 뒤 피해자에게 괜찮은지 묻는다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '목격자의 개입에 대한 말로 알맞은 것은?', options: ['개입은 직접 맞서는 것뿐이다', '내 안전을 지키며 고를 수 있는 개입 방법이 여럿 있다', '내가 나서면 일이 늘 더 커진다'], answer: 1, difficulty: 0.15, explain: '직접·분산·위임·지연 가운데 상황과 내 안전에 맞는 방법을 고를 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나에게 맞는 개입 방법',
          items: [
            { type: 'table', prompt: '네 방법마다 나에게 맞는 칸에 ○ 하세요.', columns: ['방법', '할 수 있다', '연습 필요'], cells: [['직접', '', ''], ['분산', '', ''], ['위임', '', ''], ['지연', '', '']] },
            { type: 'short', prompt: '\'연습 필요\'로 고른 방법 하나를 언제, 어떻게 연습할지 쓰세요.' },
          ],
        },
        notes: '교구 한계: 분류판은 바구니마다 정답이 있어야 해서 \'할 수 있다·연습 필요\'(사람마다 다른 답)는 활동지 표로 옮기고, 교구는 네 개입 방법의 갈래 나누기로 썼다.',
      }),
      M({
        id: 'wrap.help-route', type: 'wrap', title: '도움 경로 확인',
        method: '도움 경로 확인', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 현장 책임자·학교 두 항목을 함께 표시하고, 나머지를 학생이 고른다.', base: '도움 경로 넷(현장 책임자·경찰·학교·차별 상담·구제 기관)을 표시하고 함정 항목은 남긴다.', challenge: '친구에게 알려 줄 순서를 활동지에 정한다.' },
        wrap: {
          teacher: '"본 사람도 혼자 다 해결할 필요는 없어요. 도움을 이어 줄 곳을 확인해 봐요." 칠판의 \'차별 상담·구제 기관\' 옆에 ' + HELPPLACE + '을 적어 두고 학교에서 확인한 곳을 채운다. 위급하면 경찰에 신고한다는 점을 짚는다. "가해자 연락처를 알아내서 따지면 된다"는 학생에게 "그건 나를 위험하게 하고 피해자의 뜻과도 다를 수 있어요. 이을 곳으로 잇는 것이 안전해요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '차별을 보았을 때 이어 줄 곳', items: [{ id: 'staff', text: '현장 책임자(기사·점장·운영자)에게 알린다' }, { id: 'police', text: '위급하면 경찰에 신고한다' }, { id: 'school', text: '학교(담임·상담 선생님)와 상의한다' }, { id: 'agency', text: `차별 상담·구제 기관 ${HELPPLACE}` }, { id: 'dox', text: '가해자 연락처를 알아내 직접 따진다' }, { id: 'sns', text: '피해자 사진과 함께 SNS에 고발 글을 올린다' }] }, prompt: '차별을 보았을 때 이어 줄 도움 경로만 표시하세요.', target: { checklist: ['staff', 'police', 'school', 'agency'] }, difficulty: 0.2 },
            { type: 'short', prompt: '이 가운데 내 휴대전화 메모에 저장해 둘 항목 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움 경로',
          items: [
            { type: 'table', prompt: '우리 학교·지역의 실제 도움 경로를 채우세요(교사와 함께 확인).', columns: ['도움 경로', '언제', '가는 법·연락처'], cells: [['현장 책임자', '', ''], ['학교', '', ''], ['차별 상담·구제 기관', '', HELPPLACE]] },
            { type: 'short', prompt: '친구에게 도움 경로를 알려 줄 순서를 쓰세요.' },
          ],
        },
        notes: '번호는 쓰지 않고 체계도의 자리 글을 둔다 — 교사가 학교에서 확인한 차별 상담·구제 기관을 활동지에 채운다.',
      }),
    );
  }

  // ======================================================================================================
  // 3. 이주민의 인권과 일할 권리 (11학년)
  // ======================================================================================================
  {
    const M = MOD('migrant-rights', [11]);
    const HELPPLACE = '[학교가 확인해 넣는 차별 상담·구제 기관]';
    const MYTH = ['이주민은 모두 같은 이유로 이 나라에 왔다', '국적이 다르면 일터에서 안전할 권리도 다르다', '이주노동자는 지역 일과 상관없이 산다'];
    const RIGHT = ['일하는 사람은 누구나 안전한 일터에서 일할 권리가 있다', '인권은 국적과 상관없이 모든 사람에게 있다', '같은 일을 하면 출신과 상관없이 공정한 처우를 받아야 한다'];
    const WORKMAP = { title: '가상 ○○군 일터 지도', grid: [6, 4], places: [{ name: '농장', icon: 'field', at: [0, 1] }, { name: '공장', icon: 'factory', at: [2, 0] }, { name: '병원', icon: 'hospital', at: [4, 1] }, { name: '식당', icon: 'market', at: [3, 2] }, { name: '연구소', icon: 'museum', at: [5, 3] }, { name: '주택가', icon: 'house', at: [1, 3] }] };
    const WORK = { text: '주말 아르바이트를 하는 카페(가상). 같은 시간 같은 일을 하는데 다른 나라에서 온 동료 안만 휴식 시간 없이 계속 일한다. 안은 아무 말도 하지 않는다.', who: '나', motif: 'house', choices: [
      { id: 'pass', text: '내 일이 아니니 모른 척한다', result: '안은 몇 주째 쉬지 못하고 일한다.', impact: [{ who: '안', text: '지친 채 혼자 견딘다', tone: -1 }], ending: '모른 척하면 불공정한 처우가 그대로 이어진다.' },
      { id: 'ask', text: '쉬는 시간에 안에게 괜찮은지, 어떻게 하고 싶은지 묻는다', result: '안이 "말하면 일자리를 잃을까 봐 걱정돼요"라고 한다.', impact: [{ who: '안', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '안은 문제를 알리고 싶지만 혼자 말하기는 두렵다고 한다.', choices: [
          { id: 'together', text: '안과 함께 매니저에게 휴식 시간을 똑같이 정해 달라고 말한다', result: '매니저가 근무표를 다시 짠다.', impact: [{ who: '안', text: '같은 휴식 시간을 받는다', tone: 1 }],
            next: { text: '한 달 뒤, 근무표가 다시 예전처럼 바뀌었다.', choices: [
              { id: 'help', text: '안의 뜻을 묻고 차별 상담·구제 기관을 함께 찾아본다', result: '안이 상담을 받아 다음 단계를 스스로 정한다.', impact: [{ who: '안', text: '자기 권리를 지킬 길을 안다', tone: 1 }], ending: '당사자의 뜻을 묻고 함께 경로를 찾으면 권리가 이어진다.' },
              { id: 'give', text: '한 번 말했으니 더는 어쩔 수 없다고 넘긴다', result: '안은 다시 쉬지 못한다.', impact: [{ who: '안', text: '바뀐 것이 사라진다', tone: -1 }], ending: '한 번의 개선이 지켜지는지 함께 살펴야 한다.' }] } },
          { id: 'alone', text: '안의 뜻을 묻지 않고 혼자 매니저에게 따진다', result: '매니저가 안을 따로 불러 "누가 불만이냐"고 묻는다.', impact: [{ who: '안', text: '더 곤란해진다', tone: -1 }], ending: '돕고 싶어도 당사자의 뜻을 건너뛰면 그 사람이 더 곤란해질 수 있다.' }] } },
      { id: 'manager', text: '바로 매니저에게 가서 휴식 시간이 왜 다른지 묻는다', result: '매니저가 "그건 그 친구가 원해서야"라고 답한다.', impact: [{ who: '안', text: '자기 이야기가 대신 말해진다', tone: 0 }],
        next: { text: '안이 정말 원했는지는 아무도 확인하지 않았다.', choices: [
          { id: 'askafter', text: '안에게 직접 물어 확인한다', result: '안이 사실은 쉬고 싶었다고 말한다.', impact: [{ who: '안', text: '자기 말을 할 기회를 얻는다', tone: 1 }], ending: '당사자에게 직접 확인해야 무엇이 공정한지 알 수 있다.' },
          { id: 'believe', text: '매니저 말을 믿고 넘어간다', result: '안은 계속 쉬지 못한다.', impact: [{ who: '안', text: '상황이 그대로다', tone: -1 }], ending: '당사자 없이 들은 말만으로는 사실을 알 수 없다.' }] } },
      { id: 'info', text: '안에게 도움 기관 안내문을 건넨다', result: '안이 안내문을 받아 두지만 아직 망설인다.', impact: [{ who: '안', text: '도움 길을 하나 안다', tone: 1 }], ending: '정보를 건네는 것도 도움이고, 쓸지는 안이 정한다.' }] };
    const WORK_R = [{ id: 'equal', text: '같은 일을 하면 출신과 상관없이 같은 처우를 받아야 한다' }, { id: 'voice', text: '당사자의 뜻을 묻고 함께 정한다' }, { id: 'stereo', text: '다른 나라 사람들은 원래 오래 일하는 것을 좋아한다', why: '한 집단을 한 가지 성격으로 묶는 말은 고정관념이에요. 안이 원하는지는 안에게 물어요.' }, { id: 'quiet', text: '내가 나서면 일이 커지니 가만히 있는다', why: '혼자 나서지 않아도 돼요. 안에게 묻고 함께 정하는 길이 있어요.' }];
    const IND = [['농업', 40], ['제조업', 30], ['돌봄·의료', 15], ['사무·행정', 5]];
    const INDBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '가상 ○○군 산업별 일하는 사람 가운데 이주노동자 비율(가상 자료)', unit: '%', xLabel: '산업', yLabel: '이주노동자 비율', data: IND }, more);
    const FAIR = ['일한 시간이 달라서', '맡은 업무와 책임이 달라서', '미리 알린 경력 기준이 달라서'];
    const UNFAIR = ['국적이 달라서', '말에 억양이 있어서', '불만을 말하지 않을 것 같아서'];

    MODS.push(
      M({
        id: 'intro.myth-sort', type: 'intro', title: '오해일까, 인권 원칙일까',
        method: '오해일까 사실일까', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 문장 카드 넷만 바구니에 넣어 보이며 근거를 짚는다.', base: '문장 카드 여섯을 \'근거 없는 오해\'·\'인권 원칙에 맞는 말\' 바구니에 넣는 시연을 보고 근거를 말한다.', challenge: '오해 카드마다 그런 오해가 생긴 까닭(한 사례를 전체로 넓힘·뉴스 프레임 등)을 하나씩 말한다.' },
        intro: {
          teacher: '"이주민과 이주노동자에 대해 자주 듣는 말 여섯 개예요. 어느 것이 근거 없는 오해이고, 어느 것이 인권 원칙에 맞는 말일까요?" 시연 단추로 카드가 두 바구니에 들어가는 모습을 보여 준다. "그래도 국적이 다르면 권리도 좀 다를 수 있지 않나요?"라는 말이 나오면 "국적에 따라 투표처럼 다른 제도는 있을 수 있어요. 그런데 안전하게 일할 권리, 존중받을 권리가 국적에 따라 달라져야 할까요?"라고 되묻는다. 오늘은 특정 정책에 찬성·반대를 정하는 시간이 아니라 사실과 원칙을 가려 근거로 말하는 시간이라고 밝힌다.',
          student: '이주민에 대해 자주 듣는 말 카드를 보고, 근거 없는 오해와 인권 원칙에 맞는 말로 나누어 보세요. 한 사람의 이야기를 모두의 이야기로 넓히고 있는지가 판단 근거예요.',
          demo: { tool: 'sortboard', options: { slots: ['근거 없는 오해', '인권 원칙에 맞는 말'], cards: mix([MYTH, RIGHT]) }, sequence: [{ sort: { '근거 없는 오해': MYTH, '인권 원칙에 맞는 말': RIGHT } }] },
          art: { draw: 'two paper baskets on a shelf, one with a small paper question mark tag and one with a small paper scale of justice tag, six paper sentence strips floating above, a paper magnifying glass over one strip', banner: '오해일까, 원칙일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '오해 카드는 바로잡으려고 보이는 것이다. 학생에게 자기 가족의 국적·이주 배경을 묻지 않는다. 투표권 등 국적에 따른 제도 차이는 이 수업에서 세부를 다루지 않는다.',
      }),
      M({
        id: 'intro.work-map', type: 'intro', title: '우리 생활 속 이주민의 일',
        method: '우리 생활 속 이주민의 일', tool: 'map', minutes: 7,
        levels: { easy: '교사가 핀 둘(농장·공장)만 열어 하는 일을 함께 읽는다.', base: '핀 넷(농장·공장·병원·식당)을 열어 하는 일을 읽는 시연을 본다.', challenge: '연구소 핀까지 열고, 그 일이 멈추면 우리 생활에 생길 일을 추론해 말한다.' },
        intro: {
          teacher: '"오늘 아침 먹은 채소, 입은 옷, 아플 때 가는 병원 — 그 일터에 누가 있을까요?" 시연 단추로 \'농장\' 칸에 핀이 꽂히는 모습을 보여 주고, 핀마다 가상 일터를 읽는다 — 농장: 채소를 심고 거둔다. 공장: 부품을 만든다. 병원: 환자를 돌보고 통역을 돕는다. 식당: 음식을 만들고 손님을 맞는다. 연구소: 새 기술을 연구한다. "이주민은 힘든 일만 한다"는 말이 나오면 "연구소 핀도 있어요. 하는 일은 사람마다 다양해요"라고 되묻는다. 이주민의 일을 고마움이나 불쌍함으로 보는 것이 아니라 함께 사는 지역의 일로 본다는 점을 짚는다.',
          student: '가상 지역 지도의 핀을 열어 이주민이 하는 일을 확인해 보세요. 그 일이 우리 생활의 어디와 이어지는지 생각해 보세요.',
          demo: { tool: 'map', options: WORKMAP, sequence: [{ place: '농장' }] },
          art: { draw: 'a paper county map with pins on a farm, a factory, a hospital, a restaurant and a lab, small paper workers of varied looks at each place connected by paper threads to a family dinner table', banner: '우리 생활은 누구의 일과 이어질까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '지도와 일터는 가상이다. 특정 나라를 특정 일과 묶지 않는다(\'다른 나라에서 온 동료\'로만 말한다).',
      }),

      M({
        id: 'activity.workplace-dilemma', type: 'activity', title: '아르바이트 동료 갈림길',
        method: '아르바이트 동료 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길 하나를 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 결과를 보고 근거를 고른다.', challenge: '동료의 뜻을 존중하는 길을 끝까지(갈림길 셋) 가 보고, 다른 길과 견준다.' },
        activity: {
          title: '아르바이트 동료 갈림길', tool: 'dilemma',
          teacher: '"가상 장면이에요. 같은 카페에서 같은 일을 하는데 다른 나라에서 온 동료 안만 쉬는 시간이 없어요. 여러분이라면?" 선택마다 안에게 생긴 영향을 소리 내어 읽게 한다. \'혼자 매니저에게 따진다\'를 고른 학생에게 "정의로운 마음이었는데 왜 안이 더 곤란해졌을까요?"라고 묻는다. "국적이 다르면 일하는 조건도 다를 수 있다"는 학생에게 "같은 시간, 같은 일이라면 다른 대우의 근거가 국적일 수 있을까요?"라고 되묻는다. 돕는 사람이 대신 결정하지 않고 당사자의 뜻을 먼저 묻는다는 점을 짚는다.',
          task: '아르바이트 동료 장면을 갈림길마다 따라가며 결과를 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('동료 안의 뜻을 묻는 길을 끝까지 이어 가고, 내 선택의 근거를 고르세요.', WORK, [['ask', 'together', 'help'], ['manager', 'askafter'], ['info']], WORK_R, ['equal', 'voice'], { d: 0.4, opt: { title: '아르바이트 동료' } }),
            EXPLOREQ('\'혼자 매니저에게 따진다\' 길과 \'함께 매니저에게 말한다\' 길을 끝까지 가 보고 결과를 견주세요.', WORK, WORK_R, ['두 길의 끝 장면을 모두 확인했다', '안에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('다른 날, 매니저가 안에게만 "너희 나라 말 쓰지 마"라며 쉬는 시간 대화를 막아요. 알맞은 길을 고르고 근거를 고르세요.', { text: '쉬는 시간, 안이 같은 언어를 쓰는 다른 가게 친구와 통화하자 매니저가 안에게만 "여기서는 너희 나라 말 쓰지 마"라고 한다.', who: '나', motif: 'house', choices: [
              { id: 'agree', text: '매니저 말이 맞다며 고개를 끄덕인다', result: '안은 쉬는 시간에도 눈치를 본다.', impact: [{ who: '안', text: '자기 언어가 부끄러운 것처럼 느낀다', tone: -1 }], ending: '쉬는 시간의 언어까지 막는 것은 한 사람만 다르게 대하는 일이다.' },
              { id: 'askan', text: '나중에 안에게 그 말을 어떻게 느꼈는지 묻는다', result: '안이 "다른 사람은 통화해도 괜찮은데 저만 그래요"라고 한다.', impact: [{ who: '안', text: '마음을 털어놓는다', tone: 1 }],
                next: { text: '안은 같은 규칙이 모두에게 적용되면 괜찮다고 한다.', choices: [
                  { id: 'rule', text: '안과 함께 쉬는 시간 규칙을 모두에게 똑같이 해 달라고 건의한다', result: '쉬는 시간 규칙이 모두에게 같아진다.', impact: [{ who: '안', text: '다른 직원과 같은 대우를 받는다', tone: 1 }], ending: '모두에게 같은 규칙이면 공정하고, 한 사람만 다르면 차별이다.' },
                  { id: 'drop', text: '안이 참으면 되니 그냥 둔다', result: '안만 다른 규칙 아래 남는다.', impact: [{ who: '안', text: '혼자 다른 대우를 받는다', tone: -1 }], ending: '당사자가 바꾸고 싶어 하는데 혼자 두면 차별이 이어진다.' }] } }] },
            [['askan', 'rule']], [{ id: 'same', text: '모두에게 같은 규칙인지 따진다' }, { id: 'voice2', text: '당사자에게 먼저 묻고 함께 건의한다' }, { id: 'adapt', text: '이 나라에 왔으면 무조건 다 맞춰야 한다', why: '함께 일하는 규칙은 모두에게 같아야 해요. 한 사람에게만 다른 규칙은 맞추기가 아니라 차별이에요.' }], ['same', 'voice2'], { d: 0.35, more: { conclude: '공정함의 기준은 \'모두에게 같은가\', 돕는 순서는 \'당사자에게 먼저 묻기\'예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '선택마다 안에게 생긴 영향을 견주세요.', columns: ['내 선택', '바로 생긴 일', '안의 뜻이 존중되었나'], cells: [['모른 척', '', ''], ['혼자 따지기', '', ''], ['묻고 함께 말하기', '', '']] }] },
        notes: '안은 가상 인물이다. 근로 조건의 법적 기준(휴게 시간 길이 등)은 근거 파일에 없어 수치·조항을 쓰지 않고 \'같은 일·같은 처우\' 원칙으로만 다룬다.',
      }),
      M({
        id: 'activity.contribution-chart', type: 'activity', title: '지역 산업 자료로 주장 검토',
        method: '지역 경제 자료 해석', tool: 'chart', minutes: 18,
        levels: { easy: '산업 둘(농업·사무)의 막대를 값이 보이는 채로 읽는다.', base: '산업 넷의 막대를 읽고 차이를 계산한 뒤, \'일자리를 빼앗는다\' 주장을 검토할 자료를 고른다.', challenge: '값을 숨긴 막대를 읽고, 이 자료로 결론 낼 수 없는 부분을 고른다.' },
        activity: {
          title: '지역 산업 자료', tool: 'chart',
          teacher: '"이 그래프는 수업을 위해 만든 가상 자료예요. 가상의 ○○군에서 산업별로 일하는 사람 가운데 이주노동자가 몇 %인지 나타냈어요." 막대를 읽은 뒤 칠판에 \'이주노동자가 일자리를 빼앗는다\'는 주장을 적고 "이 그래프가 그 주장을 증명하나요, 반박하나요, 아니면 둘 다 못 하나요?"라고 묻는다. "비율이 높으면 빼앗은 거잖아요"라는 학생에게 "그 일자리에 지원한 사람이 얼마나 있었는지, 빈자리가 얼마였는지는 이 그래프에 있나요?"라고 되묻는다. 결론을 내는 것이 아니라 주장과 자료 사이의 거리를 재는 연습이라는 점을 짚는다.',
          task: '가상 산업별 자료를 읽고, \'일자리를 빼앗는다\' 주장을 검토하는 데 필요한 것과 이 자료의 한계를 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 자료에서 이주노동자 비율이 가장 높은 산업을 고르세요.', toolOptions: INDBAR({ question: '비율이 가장 높은 산업은?', choices: IND.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '농업과 사무·행정 막대에서 이주노동자 비율이 더 높은 산업을 고르세요(산업 둘).', toolOptions: { data: [IND[0], IND[3]], choices: ['농업', '사무·행정'] }, target: { pick: 0 } } } },
            { prompt: '농업과 사무·행정의 이주노동자 비율은 몇 %포인트 차이가 나나요?', toolOptions: INDBAR({ question: '두 산업의 차이는?' }), target: { value: 35 }, difficulty: 0.3,
              levels: { easy: { prompt: '농업과 사무·행정의 이주노동자 비율 차이를 구하세요(산업 둘).', toolOptions: { data: [IND[0], IND[3]] }, target: { value: 35 } } } },
            { prompt: '\'이주노동자가 일자리를 빼앗는다\'는 주장을 검토하려면 이 그래프 말고 무엇이 더 필요할지 고르세요.', toolOptions: INDBAR({ question: '더 필요한 자료는?', choices: ['그 일자리에 지원한 사람 수와 빈자리 수', '이주노동자가 온 나라 목록', '막대의 색깔'], why: ['', '출신 나라는 일자리를 빼앗았는지와 상관없어요.', '색깔은 자료가 아니에요.'] }), target: { pick: 0 }, difficulty: 0.35 },
            { prompt: '이 가상 자료만으로 결론 낼 수 없는 것을 고르세요.', toolOptions: INDBAR({ question: '이 자료로 결론 낼 수 없는 것은?', choices: ['산업마다 이주노동자 비율이 다르다', '이주노동자가 없으면 그 일을 다른 사람이 했을 것이다', '농업의 비율이 사무·행정보다 높다'], why: ['막대로 알 수 있어요.', '', '막대로 알 수 있어요.'] }), target: { pick: 1 }, difficulty: 0.4, conclude: '비율 자료는 \'누가 일하는지\'를 보여 줄 뿐 \'빼앗았는지\'는 말해 주지 않아요. 주장에는 그 주장에 맞는 자료가 필요해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'이주노동자가 일자리를 빼앗는다\' 주장을 이 자료로 검토하는 글을 세 줄로 쓰세요(자료가 보여 주는 것·보여 주지 않는 것·더 필요한 자료).' }] },
        notes: '자료는 수업용 가상 값이다(화면 제목에 밝힘). 실제 지역·산업 통계로 읽히지 않게 하고, 결론(옳다·그르다)을 정하지 않는다.',
      }),
      M({
        id: 'activity.wage-calc', type: 'activity', title: '같은 일, 같은 처우 계산',
        method: '같은 일 같은 처우 계산', tool: 'economy', minutes: 17,
        levels: { easy: '차이의 까닭 카드 둘만 나누고, 덜 받은 돈을 지폐로 만든다.', base: '가상 급여 명세의 차이를 지폐로 만들고, 까닭 카드 여섯을 정당·부당으로 나누고, 따지는 차례를 놓는다.', challenge: '까닭 카드가 더해진 판을 나누고, 차이가 정당한지 판단 근거를 활동지에 쓴다.' },
        activity: {
          title: '가상 급여 명세 비교', tool: 'economy',
          teacher: '"가상 급여 명세예요. A와 B는 같은 매장에서 같은 일을 20시간씩 했고, 우리 반 계산 연습용 가상 시급은 똑같이 1만 원이에요. 그런데 A는 20만 원, B는 16만 원을 받았어요." 먼저 차이를 돈으로 만들게 한다. 까닭 카드를 나눌 때 "차이가 있다는 것만으로 차별일까요?"라고 묻고, 시간·업무가 다르면 차이는 정당할 수 있다는 점을 짚는다. "말을 잘 못하니 덜 받아도 된다"는 학생에게 "같은 일을 같은 시간 했는데, 억양이 일의 값을 바꾸나요?"라고 되묻는다. 시급 1만 원은 실제 기준이 아니라 계산 연습용 값이라고 밝힌다.',
          task: '같은 일을 한 두 사람의 가상 급여 명세를 비교해 차이를 찾고, 그 차이가 정당한지 따져요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가격표의 \'값\'은 B가 받은 16만 원, \'낸 돈\'은 B가 받아야 했던 20만 원이에요. 두 돈의 차이(B가 덜 받은 돈)를 지폐로 만드세요.', toolOptions: { mode: 'pay', item: { text: 'B가 받은 급여(가상)', price: 160000 }, paid: 200000, coins: [1000, 5000, 10000, 50000], ask: 'B가 덜 받은 돈은 얼마일까요?' }, target: { pay: 40000 }, difficulty: 0.25 },
            SORTQ('급여 차이의 까닭 카드를 \'정당한 차이일 수 있음\'과 \'부당한 차이\'로 나누세요.', ['정당한 차이일 수 있음', '부당한 차이'], [FAIR, UNFAIR], { k: 1, hard: [['야간에 일해 미리 정한 수당이 붙어서'], ['출신 나라 물가가 싸서']], d: 0.35 }),
            ORDERQ('급여 명세에서 차이를 발견했을 때 따지는 차례를 놓으세요.', ['두 명세서를 나란히 놓는다', '일한 시간과 업무가 같은지 확인한다', '다른 항목을 찾는다', '차이의 까닭이 정당한지 따진다', '부당하면 당사자와 함께 도움 경로를 찾는다'], { k: 3, traps: ['차이가 있으면 바로 SNS에 올린다'], d: 0.35, more: { conclude: '차이가 있다는 것과 차별이라는 것은 다른 말이에요. 같은 일·같은 시간인데 출신 때문에 다르다면 부당한 차이예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 급여의 차이가 정당한지 판단할 때 쓴 근거를 한 문장으로 쓰세요.' }] },
        notes: '교구 한계: economy 는 돈(원)만 센다 — 급여 차이를 \'낸 돈 − 값\'(거스름) 꼴로 만들었다. 시급·급여는 계산 연습용 가상 값이며 최저임금 등 실제 기준이 아니다(근거 파일에 없음).',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '토론문: 이주민 지원 센터를 늘려야 할까',
        method: '찬반 토론문: 이주민 정책', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '한쪽 입장에서 근거 하나를 담은 토론문을 문장 틀을 보고 쓴다.', base: '근거 둘과 반론 대응을 담은 토론문을 쓰고 주장·자료 근거·반론 대응·존중의 언어 기준표로 점검한다.', challenge: '반대 입장의 토론문도 한 문단 더 써서 기준 하나를 더 점검한다.' },
        activity: {
          title: '정책 토론문', tool: 'rubric-writing',
          teacher: '"논제: \'우리 지역에 이주민 지원 센터를 늘려야 한다.\' 찬성도 반대도 근거를 갖출 수 있어요. 오늘 평가하는 것은 어느 쪽을 골랐는지가 아니라 근거와 존중의 언어예요." 찬성 쪽 근거 예(통역·상담 수요, 지역 적응), 반대 쪽 근거 예(예산 우선순위, 기존 기관과 중복, 주민 전체 서비스로 통합)를 칠판 양쪽에 함께 적는다. 어느 쪽이든 특정 집단을 깎아내리는 말이 나오면 "그 문장은 정책을 따지나요, 사람을 깎아내리나요?"라고 되묻는다. 교사는 자기 입장을 밝히지 않는다.',
          task: '논제 \'우리 지역에 이주민 지원 센터를 늘려야 한다\'에 대해 한쪽 입장의 토론문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('찬성이든 반대든 한쪽 입장을 골라 주장과 근거 하나를 쓰세요.', '논제: 우리 지역에 이주민 지원 센터를 늘려야 한다. 내 입장과 근거 하나를 쓰세요.', ['주장을 첫 문장에 분명히 썼다', '근거가 주장과 이어진다', '사람을 깎아내리지 않았다'], { min: 50, max: 300, sent: [2, 4], must: [['찬성', '반대']], starter: '나는 이 논제에 (찬성/반대)한다. 왜냐하면 ~ 때문이다.', d: 0.3 }),
            RWQ('같은 입장에서 근거 둘과 반론에 대한 답을 담아 토론문을 쓰세요.', '논제: 우리 지역에 이주민 지원 센터를 늘려야 한다. 근거 둘과 반론 대응을 담은 토론문을 쓰세요.', ['주장이 분명하다', '자료나 사례를 근거로 들었다', '반대쪽 주장에 답했다', '존중의 언어로 썼다'], { min: 120, max: 500, sent: [4, 7], must: [['찬성', '반대'], ['반면', '하지만', '그러나']], plus: '반대 입장의 토론문도 한 문단 더 썼다', d: 0.4, more: { conclude: '좋은 토론문은 내 쪽 근거만큼 상대 쪽의 가장 강한 근거에 답하고, 정책을 따지되 사람을 깎아내리지 않아요.' } }),
            DONEQ('반대 입장을 고른 짝과 토론문을 바꿔 읽고, 상대 글에서 가장 설득력 있는 근거 하나를 골라 말해 주세요.', '반대 입장 짝과 바꿔 읽기', '바꿔 읽고 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '양쪽의 근거를 정리하세요.', columns: ['입장', '가장 강한 근거', '그 근거에 대한 상대의 답'], cells: [['찬성', '', ''], ['반대', '', '']] }] },
        notes: '논쟁적 정책 주제다 — 정답·정치적 입장을 정하지 않고, 교사는 입장을 밝히지 않는다. 정당·정치인·실제 정책 이름을 언급하지 않는다. 평가는 입장이 아니라 근거·반론 대응·존중의 언어로 한다.',
      }),

      M({
        id: 'wrap.remedy-route', type: 'wrap', title: '차별을 보았을 때의 구제 경로',
        method: '구제 경로 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 첫 카드(기록하기)를 놓아 보이고, 학생이 나머지 셋을 놓는다.', base: '구제 경로 네 단계를 차례로 놓고 함정 카드는 남긴다.', challenge: '단계마다 준비할 것을 활동지에 적는다.' },
        wrap: {
          teacher: '"차별을 보았거나 동료가 도움을 청했을 때, 길이 있다는 것을 알면 혼자 참지 않아도 돼요." 칠판의 \'차별 상담·구제 기관\' 옆에 ' + HELPPLACE + '을 적어 두고 학교에서 확인한 곳을 채운다. 차례를 놓은 뒤 "절차를 진행할지는 누가 정하나요?"라고 묻고 당사자라는 점을 짚는다. "증거가 없으면 아무것도 못 한다"는 학생에게 "그래서 첫 단계가 기록이에요. 날짜와 한 말을 적어 두는 것부터 시작해요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: ['당사자의 뜻에 따라 절차를 진행한다', '날짜·장소·한 말을 기록한다', `${HELPPLACE}에 상담한다`, '믿을 사람(보호자·선생님)과 상의한다', '혼자 참고 아무에게도 말하지 않는다'] }, prompt: '구제 경로를 차례로 놓으세요(어울리지 않는 카드는 남겨요).', target: { order: ['날짜·장소·한 말을 기록한다', '믿을 사람(보호자·선생님)과 상의한다', `${HELPPLACE}에 상담한다`, '당사자의 뜻에 따라 절차를 진행한다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '이주노동자의 권리에 대한 말로 알맞은 것은?', options: ['국적이 다르면 노동의 권리도 다르다', '같은 일을 하면 출신과 상관없이 공정한 처우를 받아야 한다', '차별을 당해도 참는 것이 이 나라에 맞추는 것이다'], answer: 1, difficulty: 0.15, explain: '인권은 국적과 상관없이 모든 사람에게 있어요. 같은 일에는 같은 처우가 공정해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '구제 경로',
          items: [
            { type: 'table', prompt: '단계마다 준비할 것을 쓰세요.', columns: ['단계', '준비할 것'], cells: [['기록하기', ''], ['믿을 사람과 상의', ''], ['상담 기관', HELPPLACE], ['절차 진행', '']] },
            { type: 'short', prompt: '구제 경로에서 \'당사자의 뜻\'이 중요한 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '기관 이름·번호는 쓰지 않고 체계도의 자리 글을 둔다 — 교사가 학교에서 확인해 채운다. 학생에게 자기 피해 경험을 묻지 않는다.',
      }),
      M({
        id: 'wrap.rights-reflect', type: 'wrap', title: '인권 한 줄 성찰',
        method: '인권 성찰 글', tool: 'story', minutes: 7,
        levels: { easy: '교사가 첫 칸(수업 전 생각)을 함께 고르고, 학생은 두 칸을 채운다.', base: '세 칸(수업 전 생각 → 새로 안 사실 → 내 일터 생활에서 할 일)을 카드로 채운다.', challenge: '짝의 카드와 견주어 다른 점 한 줄을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"곧 아르바이트나 첫 일터에서 다른 나라에서 온 동료를 만날 수 있어요. 오늘 생각을 세 칸으로 정리해 봐요." 셋째 칸에서 \'남의 일이니 모른 척한다\'가 왜 남는지 묻는다. "수업 전에도 원래 다 알았다"는 학생에게는 첫 칸에 \'누구나 같은 인권을 가진다\'를 놓고, 둘째 칸에는 오늘 새로 따져 본 것을 고르게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 's1', label: '수업 전 나는 ___ 고 생각했다' }, { id: 's2', label: '오늘 새로 안 것은 ___ 는 것이다' }, { id: 's3', label: '내 일터 생활에서 나는 ___' }], cards: [{ id: 'b1', text: '국적에 따라 권리가 다르다' }, { id: 'b2', text: '깊이 생각해 본 적이 없다' }, { id: 'b3', text: '누구나 같은 인권을 가진다' }, { id: 'n1', text: '인권은 국적과 상관없다' }, { id: 'n2', text: '같은 일에는 같은 처우가 공정하다' }, { id: 'n3', text: '차별을 바로잡는 구제 경로가 있다' }, { id: 'd1', text: '동료의 처우가 다르면 먼저 뜻을 묻겠다' }, { id: 'd2', text: '출신을 들먹이는 말에 함께 웃지 않겠다' }, { id: 'trap', text: '문제가 보여도 남의 일이니 모른 척하겠다', why: '모른 척하면 불공정한 처우가 이어져요. 혼자 나서지 않고 묻는 것부터 할 수 있어요.' }] }, prompt: '세 칸에 내 생각에 맞는 카드를 한 장씩 놓으세요(어디에도 안 맞는 카드는 남겨요).', target: { fill: { s1: ['b1', 'b2', 'b3'], s2: ['n1', 'n2', 'n3'], s3: ['d1', 'd2'] } }, difficulty: 0.2 },
            { type: 'short', prompt: '셋째 칸의 다짐을 실제로 지킬 장면 하나를 떠올려 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '인권 성찰',
          items: [
            { type: 'short', prompt: '오늘 수업에서 생각이 바뀌었거나 굳어진 점 하나를 까닭과 함께 쓰세요.' },
            { type: 'short', prompt: '짝의 세 칸과 견주어 다른 점 하나를 쓰세요.' },
          ],
        },
        notes: '학생의 가족 배경·아르바이트 경험을 묻지 않는다. 첫 칸은 정직한 처음 생각을 고르게 하고 평가하지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 4. 세계시민으로 함께 살기 (12학년)
  // ======================================================================================================
  {
    const M = MOD('global-citizen', [12]);
    const DORM_SLOTS = [{ id: 'd1', label: '장면 1: 저녁 기도 시간' }, { id: 'd2', label: '장면 2: 함께 시키는 야식' }, { id: 'd3', label: '장면 3: 밤 11시 소등' }];
    const DORM_CARDS = [{ id: 'c1', text: '룸메이트가 기도하는 동안 내가 큰 소리로 통화한다' }, { id: 'c2', text: '룸메이트가 먹지 않는 재료가 든 음식을 혼자 정해 시킨다' }, { id: 'c3', text: '한 사람은 일찍 자고 한 사람은 늦게까지 불을 켠다' }];
    const CITIZEN = { respect: ['룸메이트의 기도 시간을 일상으로 존중한다'], join: ['지역 공존 행사 준비 모임에 함께한다'], solid: ['출신 때문에 무시당하는 동료 곁에 선다'], duty: ['내 소비가 다른 나라 노동자에게 주는 영향을 따진다'] };
    const ROOM = { text: '기숙사 방. 룸메이트 하는 저녁 8시에 기도 시간이 있고, 나는 내일 시험이라 같은 시간에 소리 내어 외우며 공부하려 한다.', who: '나', motif: 'moon', choices: [
      { id: 'complain', text: '"왜 하필 지금이야"라고 불평한다', result: '하가 말없이 방을 나가 복도에서 기도한다.', impact: [{ who: '하', text: '자기 방에서 불편함을 느낀다', tone: -1 }],
        next: { text: '다음 날부터 하와 말이 줄었다.', choices: [
          { id: 'sorry', text: '먼저 사과하고 시간표를 함께 보자고 한다', result: '하가 웃으며 "나도 미리 말할걸"이라고 한다.', impact: [{ who: '하', text: '관계가 회복된다', tone: 1 }], ending: '불평으로 시작했어도 대화로 돌아오면 조율이 시작된다.' },
          { id: 'cold', text: '서로 피하며 지낸다', result: '방이 불편한 곳이 된다.', impact: [{ who: '나', text: '방에서 쉬지 못한다', tone: -1 }], ending: '말하지 않은 불편은 함께 사는 공간 전체를 무겁게 한다.' }] } },
      { id: 'ignore', text: '모른 척하고 소리 내어 공부한다', result: '하가 기도에 집중하지 못한다.', impact: [{ who: '하', text: '존중받지 못한다고 느낀다', tone: -1 }], ending: '내 계획만 밀어붙이면 상대의 시간이 사라진다.' },
      { id: 'plan', text: '하에게 시간표를 함께 맞춰 보자고 제안한다', result: '하가 기도는 20분이면 된다고 알려 준다.', impact: [{ who: '하', text: '자기 생활이 존중받는다고 느낀다', tone: 1 }],
        next: { text: '둘이 시간표를 펼쳤다. 기도 20분 동안 나는 무엇을 할까?', choices: [
          { id: 'quiet', text: '그 20분은 소리 내지 않고 눈으로 복습한다', result: '둘 다 계획대로 저녁을 보낸다.', impact: [{ who: '하', text: '편하게 기도한다', tone: 1 }],
            next: { text: '다음 주 새 룸메이트가 들어온다. 그도 자기 생활 시간이 있다.', choices: [
              { id: 'three', text: '세 사람의 시간을 함께 적고 방 규칙을 다시 정한다', result: '모두가 한 칸씩 양보한 시간표가 생긴다.', impact: [{ who: '새 룸메이트', text: '처음부터 함께 정한다', tone: 1 }], ending: '공존은 한쪽이 맞추는 것이 아니라 함께 정하는 규칙에서 나온다.' },
              { id: 'old', text: '우리 둘의 규칙을 그대로 따르라고 한다', result: '새 룸메이트는 말할 기회가 없다.', impact: [{ who: '새 룸메이트', text: '소외감을 느낀다', tone: -1 }], ending: '먼저 온 사람의 규칙만 따르게 하면 새 사람의 목소리가 빠진다.' }] } },
          { id: 'demand', text: '시험 기간이니 기도는 밖에서 해 달라고 한다', result: '하가 마지못해 나가지만 서운해한다.', impact: [{ who: '하', text: '혼자만 맞춘다고 느낀다', tone: -1 }], ending: '한쪽만 양보하는 조정은 공존이 아니다.' }] } }] };
    const ROOM_R = [{ id: 'both', text: '두 사람의 시간이 모두 중요하다' }, { id: 'talk', text: '먼저 묻고 함께 시간표를 맞춘다' }, { id: 'major', text: '방에서 다수인 쪽 생활에 맞추는 게 공평하다', why: '수가 많다고 한쪽만 맞추면 공존이 아니라 한쪽의 양보예요.' }, { id: 'favor', text: '기도 시간은 특별한 행사라 내가 봐 주는 것이다', why: '기도는 하의 평범한 일상이에요. 봐 주는 게 아니라 서로의 일상을 존중하는 거예요.' }];
    const BUD = [{ id: 'food', text: '주민·이주민이 함께 만드는 음식 부스 재료', price: 300000 }, { id: 'stage', text: '공연 무대와 음향', price: 400000 }, { id: 'interp', text: '안내 통역과 다국어 안내판', price: 200000 }, { id: 'meet', text: '함께 준비하는 모임(3회)', price: 100000 }, { id: 'flyer', text: '홍보물 인쇄', price: 150000 }, { id: 'photo', text: '다른 나라 옷을 빌려 입는 사진 부스', price: 250000 }];

    MODS.push(
      M({
        id: 'intro.dorm-scene', type: 'intro', title: '기숙사 첫날 장면',
        method: '기숙사 첫날 장면', tool: 'story', minutes: 7,
        levels: { easy: '교사가 장면 둘(기도 시간·야식)만 짝지어 보이며 생길 수 있는 갈등을 읽는다.', base: '장면 셋에 생길 수 있는 갈등 카드가 짝지어지는 시연을 본다.', challenge: '장면마다 두 사람의 서로 다른 입장을 한 문장씩 말한다.' },
        intro: {
          teacher: '"대학 기숙사나 첫 직장 숙소에서 생활 리듬도, 먹는 것도, 기도 시간도 다른 룸메이트를 만났다고 해 볼게요." 시연 단추로 장면마다 갈등 카드가 짝지어지는 모습을 보여 준다. "그런 사람이랑은 방을 바꾸면 되잖아요"라는 말이 나오면 "방을 바꿔도 다음 룸메이트와 나는 또 다를 거예요. 다른 것이 문제일까요, 말하지 않는 것이 문제일까요?"라고 되묻는다. 룸메이트의 생활은 신기한 구경거리가 아니라 나와 같은 평범한 일상이라는 점을 짚는다.',
          student: '기숙사 첫날의 가상 장면 셋을 보고, 장면마다 생길 수 있는 갈등을 짝지어 보세요. 누가 틀린 것이 아니라 서로의 일상이 겹치는 자리를 찾는 거예요.',
          demo: { tool: 'story', options: { mode: 'match', slots: DORM_SLOTS, cards: DORM_CARDS }, sequence: [{ match: { d1: 'c1', d2: 'c2', d3: 'c3' } }] },
          art: { draw: 'a paper dormitory room with two paper beds and two desks, a small paper prayer mat beside one bed, a paper clock showing evening, two paper figures holding a shared paper timetable between them', banner: '서로의 일상이 겹칠 때', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '룸메이트 하는 가상 인물이다. 특정 종교·나라 이름을 쓰지 않는다(\'기도 시간\'·\'먹지 않는 재료\'로만 말한다). 학생에게 자기 종교·가족 배경을 묻지 않는다.',
      }),
      M({
        id: 'intro.citizen-mind', type: 'intro', title: '세계시민은 무엇을 할까',
        method: '세계시민은 무엇을 할까', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(존중·참여)에 카드를 한 장씩 놓아 보인다.', base: '가지 넷(존중·참여·연대·책임)에 학교·지역 예 카드가 놓이는 시연을 본다.', challenge: '내 진로와 이어지는 가지 하나를 말로 더한다.' },
        intro: {
          teacher: '"세계시민이라고 하면 무엇이 떠오르나요?" 두세 명의 대답을 듣고 시연 단추로 \'세계시민\' 둘레 네 가지에 학교·지역의 예가 놓이는 모습을 보여 준다. "세계시민은 외국에 나가야 되는 거 아니에요?"라는 말이 나오면 "기숙사 방, 아르바이트 매장, 우리 지역 행사 — 오늘 카드의 장소는 모두 어디인가요?"라고 되묻는다. 세계시민성은 먼 나라 이야기가 아니라 지금 사는 곳에서 서로 다른 사람과 함께 사는 방식이라는 점을 짚는다.',
          student: '\'세계시민\' 둘레의 존중·참여·연대·책임 가지에 학교와 지역의 예를 붙여 보세요. 외국이 아니라 지금 사는 곳의 예예요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '세계시민', slots: ['존중', '참여', '연대', '책임'], cards: mix([CITIZEN.respect, CITIZEN.join, CITIZEN.solid, CITIZEN.duty]) }, sequence: [{ sort: { 존중: CITIZEN.respect, 참여: CITIZEN.join, 연대: CITIZEN.solid, 책임: CITIZEN.duty } }] },
          art: { draw: 'a paper globe in the center sitting on a small paper neighborhood with a school, a dorm and a market, four paper branches reaching out to a handshake, a raised hand, linked arms and a balance scale', banner: '세계시민은 바로 여기서', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.roommate-dilemma', type: 'activity', title: '룸메이트 조율 갈림길',
        method: '룸메이트 조율 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길(불평·무시·시간표 함께 조정) 하나를 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 관계의 결과를 보고 근거를 고른다.', challenge: '갈림길 셋(새 룸메이트)까지 가 보고, 세 길을 견주어 조율 원칙을 활동지에 쓴다.' },
        activity: {
          title: '룸메이트 조율 갈림길', tool: 'dilemma',
          teacher: '"룸메이트 하의 기도 시간과 내 시험공부 시간이 겹쳐요. 둘 다 중요한 일이에요. 어떻게 할까요?" 선택마다 하와 나에게 생긴 결과를 소리 내어 읽게 한다. "내 방이기도 하니까 내 공부가 먼저"라는 학생에게 "하에게도 똑같이 자기 방이에요. 둘 다 \'내 방\'일 때 누구 것이 먼저일까요?"라고 되묻는다. \'기도는 밖에서\'를 고른 길에서는 조정처럼 보여도 한쪽만 양보했다는 점을 짚고, 셋째 갈림길에서 새 사람이 들어올 때 규칙을 다시 정하는 것까지 본다.',
          task: '룸메이트와 시간이 겹치는 장면을 갈림길마다 따라가며 관계의 결과를 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('룸메이트와 함께 시간표를 맞추는 길을 끝까지 이어 가고, 근거를 고르세요.', ROOM, [['plan', 'quiet', 'three'], ['complain', 'sorry']], ROOM_R, ['both', 'talk'], { d: 0.4, opt: { title: '룸메이트와 겹친 시간' } }),
            EXPLOREQ('\'불평한다\' 길과 \'시간표를 함께 맞춘다\' 길을 끝까지 가 보고 관계의 결과를 견주세요.', ROOM, ROOM_R, ['두 길의 끝 장면을 모두 확인했다', '하와 나의 관계 결과를 견주었다'], { d: 0.35 }),
            DILQ('공동 부엌에서 룸메이트가 먹지 않는 재료를 같은 냄비로 요리하려 해요. 알맞은 길을 고르고 근거를 고르세요.', { text: '기숙사 공동 부엌. 내가 쓰려는 냄비는 하가 먹지 않는 재료를 한 번도 담지 않아 온 냄비다. 오늘 그 냄비로 그 재료를 요리하려 한다.', who: '나', motif: 'house', choices: [
              { id: 'use', text: '설거지하면 되니 그냥 쓴다', result: '하가 나중에 알고 그 냄비를 쓰지 못하게 된다.', impact: [{ who: '하', text: '쓸 냄비를 잃는다', tone: -1 }], ending: '내 기준의 \'괜찮음\'이 상대에게도 괜찮은지는 물어야 안다.' },
              { id: 'ask', text: '하에게 냄비를 어떻게 나누어 쓰면 좋을지 묻는다', result: '하가 "냄비를 따로 정해 두면 좋겠어"라고 한다.', impact: [{ who: '하', text: '자기 식생활이 존중받는다', tone: 1 }],
                next: { text: '부엌을 함께 쓰는 다른 학생들도 있다.', choices: [
                  { id: 'label', text: '함께 쓰는 사람들과 냄비 표시 규칙을 정한다', result: '모두가 쓰기 편한 부엌 규칙이 생긴다.', impact: [{ who: '부엌을 쓰는 모두', text: '헷갈림이 줄어든다', tone: 1 }], ending: '한 사람의 필요를 물은 것이 모두의 규칙이 되었다.' },
                  { id: 'secret', text: '우리 둘만 알고 넘어간다', result: '다른 학생이 모르고 그 냄비를 쓴다.', impact: [{ who: '하', text: '같은 일이 또 생긴다', tone: 0 }], ending: '함께 쓰는 공간의 약속은 함께 쓰는 사람과 정해야 지켜진다.' }] } }] },
            [['ask', 'label']], [{ id: 'askfirst', text: '상대에게 무엇이 필요한지 먼저 묻는다' }, { id: 'shared', text: '함께 쓰는 공간의 규칙은 쓰는 사람 모두와 정한다' }, { id: 'weird', text: '먹는 것을 가리는 것은 그 사람이 까다로운 것이다', why: '먹지 않는 음식은 신념·건강·문화마다 다를 수 있는 평범한 생활이에요. 까다로움이 아니라 다름이에요.' }], ['askfirst', 'shared'], { d: 0.35, more: { conclude: '조율의 원칙: 먼저 묻고, 둘 다 중요하다고 보고, 함께 쓰는 공간의 규칙은 함께 정한다.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 길을 견주어 내가 정한 조율 원칙을 두 문장으로 쓰세요.' }] },
        notes: '하는 가상 인물이다. 기도·먹지 않는 재료는 특정 종교·나라와 잇지 않는다.',
      }),
      M({
        id: 'activity.shared-schedule', type: 'activity', title: '함께 쓰는 생활 시간표',
        method: '함께 쓰는 생활 시간표', tool: 'clock', minutes: 18,
        levels: { easy: '짧은바늘 자리가 연하게 칠해진 시계로 두 사람의 시각을 나타낸다(문항 수는 같다).', base: '두 사람의 생활 시각(기도·공부·소등·기상)과 겹치는 시간의 조정안을 30분 단위로 시계에 나타낸다.', challenge: '작은 눈금이 숨은 시계로 풀고, 셋째 문항은 세 명이 쓰는 방의 소등 시각으로 바꾸어 나타낸다.' },
        activity: {
          title: '함께 쓰는 생활 시간표', tool: 'clock',
          teacher: '"가상 룸메이트 하와 나의 하루를 시계에 함께 놓아 봐요. 겹치는 시간이 보이면 조정안이 보여요." 문항마다 시계를 맞춘 뒤 "이 시각은 누가 양보한 시각인가요, 둘이 나눈 시각인가요?"라고 묻는다. "그냥 내가 다 맞추면 편하다"는 학생에게 "한쪽이 늘 맞추면 편한 쪽은 누구일까요? 오래가는 시간표일까요?"라고 되묻는다. 시각은 수업용 가상 생활표라는 점을 밝힌다.',
          task: '두 사람의 생활 시각을 시계에 나타내고, 겹치는 시간을 조정한 시각을 정해요.', levels: { easy: { hourZone: true }, base: {}, challenge: { showMinuteMarks: false } },
          items: [
            { prompt: '하의 저녁 기도는 7시 30분에 시작해요(가상 생활표). 시계 바늘로 7시 30분을 나타내세요.', toolOptions: { minuteStep: 30 }, target: { h: 7, m: 30 }, difficulty: 0.15 },
            { prompt: '기도는 20분이에요. 둘은 넉넉히 8시까지를 조용한 시간으로 정했어요. 내가 소리 내어 공부를 시작할 시각을 나타내세요.', toolOptions: { minuteStep: 30 }, target: { h: 8, m: 0 }, difficulty: 0.2 },
            { prompt: '하는 11시에 자고, 나는 시험 기간에 늦게까지 공부해요. 조정안: 11시부터는 공용 공부방으로 옮겨요. 옮길 시각을 나타내세요.', toolOptions: { minuteStep: 30 }, target: { h: 11, m: 0 }, difficulty: 0.2,
              levels: { challenge: { prompt: '새 룸메이트가 들어와 세 명이 쓰는 방이 됐어요. 셋은 소등을 10시 30분으로 정하고 늦게 공부하는 사람은 공용 공부방으로 가기로 했어요. 그 소등 시각을 나타내세요(세 명).', target: { h: 10, m: 30 } } } },
            { prompt: '하는 아침 6시 30분에 일어나 기도하고, 나는 7시에 일어나요. 내가 알람을 진동으로 바꿔 두면 되는, 하가 일어나는 시각을 나타내세요.', toolOptions: { minuteStep: 30 }, target: { h: 6, m: 30 }, difficulty: 0.2, conclude: '겹치는 시간을 시계에 놓아 보면 \'누가 양보할까\'가 아니라 \'어떻게 나눌까\'를 말할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 사람의 하루와 조정안을 시간표로 정리하세요.', columns: ['시각', '하', '나', '조정안'], cells: [['7:30', '기도', '', ''], ['8:00', '', '', ''], ['11:00', '', '', ''], ['6:30', '', '', '']] }] },
        notes: '교구 한계: 계획의 \'쉬움 시간 2개\'는 문항 수를 단계마다 같게 두어야 해서, 쉬움은 짧은바늘 자리를 칠해 주는 도움으로 바꾸었다. 시계는 한 번에 한 시각만 나타내므로 두 사람의 시간은 문항을 나누어 놓고, 함께 보는 시간표는 활동지가 맡는다.',
      }),
      M({
        id: 'activity.festival-budget', type: 'activity', title: '공존 행사 예산 짜기',
        method: '지역 공존 행사 예산 기획', tool: 'economy', minutes: 17,
        levels: { easy: '항목 넷만 있는 판에서 꼭 넣을 항목을 넣어 예산 안에서 고른다.', base: '항목 여섯 가운데 통역·준비 모임을 꼭 넣어 100만 원 안에서 고르고, 참가자 의견을 반영해 다시 고른다.', challenge: '예산이 60만 원으로 줄었을 때 무엇을 지킬지 정해 다시 고르고, 활동지에 까닭을 쓴다.' },
        activity: {
          title: '공존 행사 예산', tool: 'economy',
          teacher: '"가상 예산 100만 원으로, 이주민과 선주민이 함께 준비하는 지역 행사를 기획해요." 칠판에 \'함께 준비\'와 \'구경거리\'를 나란히 적는다. \'다른 나라 옷을 빌려 입는 사진 부스\'를 고른 학생에게 "이 부스는 누가 준비하고, 누가 구경하나요? 그 나라에서 온 참가자는 어떻게 느낄까요?"라고 묻는다 — 정답이 아니라 따져 볼 쟁점이다. "통역은 돈 아까워요, 다들 대충 알아들어요"라는 말에는 "안내를 알아듣지 못하는 사람에게 그 행사는 \'함께\'일까요?"라고 되묻는다. 예산은 수업용 가상 값이라는 점을 밝힌다.',
          task: '가상 예산으로 이주민·선주민이 함께 준비하는 지역 행사의 항목을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 예산 100만 원. \'안내 통역과 다국어 안내판\'과 \'함께 준비하는 모임\'을 꼭 넣고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: BUD }, target: { budget: { must: ['interp', 'meet'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '가상 예산 100만 원. 통역·안내판과 준비 모임을 꼭 넣고 예산 안에서 고르세요(항목 넷).', toolOptions: { items: BUD.slice(0, 4) }, target: { budget: { must: ['interp', 'meet'] } } } } },
            { prompt: '준비 모임에서 한 참가자가 "옷 사진 부스는 우리 문화를 구경거리처럼 보이게 해요"라고 의견을 냈어요. 사진 부스는 빼고, 통역과 준비 모임은 꼭 넣어 100만 원 안에서 다시 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: BUD }, target: { budget: { must: ['interp', 'meet'], not: ['photo'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '참가자 의견에 따라 사진 부스는 빼고, 통역과 준비 모임을 꼭 넣어 다시 고르세요(항목 다섯).', toolOptions: { items: [...BUD.slice(0, 4), BUD[5]] }, target: { budget: { must: ['interp', 'meet'], not: ['photo'] } } } } },
            { prompt: '예산이 60만 원으로 줄었어요. 통역과 준비 모임은 지키고, 예산 안에서 다시 고르세요.', toolOptions: { mode: 'budget', budget: 600000, items: BUD }, target: { budget: { must: ['interp', 'meet'] } }, difficulty: 0.35,
              levels: { easy: { prompt: '예산이 60만 원으로 줄었어요. 통역과 준비 모임은 지키고 다시 고르세요(항목 넷).', toolOptions: { items: BUD.slice(0, 4) }, target: { budget: { must: ['interp', 'meet'] } } } },
              conclude: '예산이 줄어도 \'모두가 알아듣는 안내\'와 \'함께 준비하는 자리\'를 지키면 행사가 구경이 아니라 공존이 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 끝까지 지킨 항목과 그 까닭을 한 문장으로 쓰세요.' }] },
        notes: '예산과 값은 수업용 가상 값이다. 사진 부스는 \'구경거리\' 쟁점을 따지게 하려는 항목이며, 둘째 문항은 참가자(당사자) 의견을 반영하는 장면이다.',
      }),
      M({
        id: 'activity.festival-proposal', type: 'activity', title: '공존 행사 기획서 쓰기',
        method: '행사 기획서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '네 문장 기획서를 문장 틀을 보고 쓴다.', base: '여덟 문장 기획서를 목적·함께 준비하는 방법·존중의 조건·평가 방법 기준표로 점검한다.', challenge: '참가자 의견 수렴 방법을 더해 기준 하나를 더 점검한다.' },
        activity: {
          title: '공존 행사 기획서', tool: 'rubric-writing',
          teacher: '"예산을 짠 행사를 지역 주민센터에 낼 기획서로 써 봐요." 기준표를 먼저 함께 읽는다. 소개 문장에 \'신기한 ○○ 나라 음식\'처럼 구경거리로 그리는 말이 보이면 "그 음식을 매일 먹는 사람에게 \'신기한\'은 어떻게 들릴까요? 만드는 사람을 주어로 써 볼까요?"라고 묻는다. "이주민이 우리 문화를 배우는 행사"로만 쓴 학생에게 "서로 배우는 자리라면 누가 무엇을 준비할까요?"라고 되묻는다. 실제 주민·참가자 이름은 쓰지 않는다.',
          task: '이주민과 선주민이 함께 준비하는 지역 공존 행사의 기획서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('기획서를 네 문장(목적·준비 방법·존중의 조건·평가)으로 쓰세요.', '가상 지역 공존 행사 기획서: 목적, 함께 준비하는 방법, 존중의 조건, 평가 방법을 한 문장씩 쓰세요.', ['목적이 분명하다', '이주민과 선주민이 함께 준비하는 방법이 있다', '평가 방법이 있다'], { min: 60, max: 300, sent: [4, 4], starter: '목적: ~. 준비: ~이 함께 ~. 존중: ~. 평가: ~.', d: 0.3 }),
            RWQ('기획서를 여덟 문장으로 늘려 쓰세요.', '가상 지역 공존 행사 기획서를 여덟 문장으로 쓰세요(목적·준비 방법·존중의 조건·평가 방법).', ['목적이 분명하다', '함께 준비하는 방법이 구체적이다', '고정관념 없는 소개의 조건이 있다', '평가 방법이 있다'], { min: 160, max: 600, sent: [8, 9], must: [['함께', '같이']], plus: '참가자 의견을 모을 방법을 썼다', d: 0.4,
              sample: '이 행사의 목적은 지역에 사는 이주민과 선주민이 서로를 이웃으로 알아 가는 것이다. 준비 모임은 세 번 열고, 주민과 이주민이 함께 부스와 공연을 정한다. 음식 부스는 만드는 사람이 직접 자기 음식을 소개한다. 안내는 통역과 다국어 안내판으로 모두가 알아듣게 한다. 소개 글에는 \'신기한\'·\'이국적인\' 같은 구경거리 낱말을 쓰지 않는다. 특정 나라를 한 가지 모습으로 묶는 소개도 하지 않는다. 행사 뒤에는 참가자 설문으로 함께 준비했다고 느꼈는지 묻는다. 그 결과를 다음 행사 준비 모임에서 나눈다.', more: { conclude: '좋은 공존 행사 기획서는 누가 보여 주고 누가 구경하는 행사가 아니라, 함께 준비하는 방법과 존중의 조건이 적힌 행사예요.' } }),
            DONEQ('짝과 기획서를 바꿔 읽고, 구경거리처럼 들리는 말이 있는지 서로 찾아 고칠 말을 제안하세요.', '짝과 바꿔 읽기', '바꿔 읽고 제안해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '기획서의 \'존중의 조건\' 한 가지를 옮겨 쓰고, 그것이 왜 필요한지 쓰세요.' }] },
      }),

      M({
        id: 'wrap.career-link', type: 'wrap', title: '진로와 세계시민성 잇기',
        method: '진로와 세계시민성 잇기', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 \'다국어 안내\' 하나를 함께 표시하고, 학생이 나머지를 고른다.', base: '희망 진로에서 실천할 세계시민 행동 셋을 표시하고 함정 항목은 남긴다.', challenge: '고른 행동을 언제 실천할지 활동지에 정한다.' },
        wrap: {
          teacher: '"곧 일하게 될 곳 — 가게, 병원, 사무실, 공장, 학교 — 어디든 다른 나라에서 온 손님이나 동료가 있을 거예요. 그 일터에서 할 수 있는 세계시민 행동을 골라 봐요." 표시한 뒤 \'억양을 따라 하며 친근하게\'가 왜 남는지 묻는다. "친해지려고 따라 하는 건데요?"라는 말에 "듣는 사람이 놀림으로 느낄 수 있다면, 친근함을 보일 다른 방법은 무엇일까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내 일터에서의 세계시민 행동', items: [{ id: 'multi', text: '안내문을 여러 언어로 준비한다' }, { id: 'same', text: '손님의 출신과 상관없이 같은 방식으로 응대한다' }, { id: 'colleague', text: '다른 문화에서 온 동료와 일하는 방식을 서로 묻고 맞춘다' }, { id: 'accent', text: '손님의 억양을 따라 하며 친근하게 군다' }, { id: 'origin', text: '출신을 먼저 묻고 응대 방식을 바꾼다' }] }, prompt: '희망 진로의 일터에서 실천할 세계시민 행동만 표시하세요.', target: { checklist: ['multi', 'same', 'colleague'] }, difficulty: 0.2 },
            { type: 'short', prompt: '내 희망 진로를 떠올리고, 표시한 행동 하나를 그 일터에서 어떻게 실천할지 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '진로와 세계시민성',
          items: [
            { type: 'short', prompt: '희망 진로의 일터에서 실천할 세계시민 행동 하나와 실천 시기를 쓰세요.' },
            { type: 'short', prompt: '세계시민은 외국에 나가야 되는 것일까요? 오늘 수업으로 내 생각을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '희망 진로는 학생이 정하고, 말하기 싫으면 \'관심 있는 일\'로 바꿔 쓰게 한다.',
      }),
      M({
        id: 'wrap.final-reflect', type: 'wrap', title: '공존 다짐 성찰',
        method: '공존 다짐 성찰', tool: 'emotion', minutes: 7,
        levels: { easy: '\'공존은 서로 맞춰 가는 것\'에 대한 동의 눈금 하나만 고른다.', base: '동의 눈금을 고르고, 공존에 대한 알맞은 말을 고른다.', challenge: '오늘 바뀐 생각과 그 까닭을 활동지에 한 줄로 쓴다.' },
        wrap: {
          teacher: '"\'공존은 서로 맞춰 가는 것이다.\' 이 문장에 얼마나 동의하나요? 정답은 없고 익명이에요." 눈금을 고른 뒤 \'서로\'라는 낱말에 밑줄을 긋게 한다. "결국 소수가 다수에 맞추는 게 현실 아니에요?"라는 말에 "기숙사 방 규칙에서 한쪽만 맞춘 길은 어떻게 끝났나요?"라고 되묻는다. 생각이 바뀌지 않았다면 그 까닭도 소중한 근거라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '‘공존은 서로 맞춰 가는 것이다’라는 문장', feeling: '생각', steps: 5, scaleLabels: { 1: '전혀 아니다', 5: '매우 그렇다' } }, prompt: '이 문장에 대한 지금 내 생각을 1~5점으로 고르세요(익명).', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'choice', prompt: '공존에 대한 말로 알맞은 것은?', options: ['공존은 소수가 다수에 맞추는 것이다', '공존은 서로의 일상을 존중하며 함께 규칙을 정하는 것이다', '세계시민은 외국에 나가야 될 수 있다'], answer: 1, difficulty: 0.15, explain: '공존은 한쪽의 양보가 아니라 함께 정하는 규칙에서 나와요. 세계시민성은 지금 사는 곳에서도 실천해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '공존 다짐',
          items: [
            { type: 'short', prompt: '오늘 바뀐 생각(또는 굳어진 생각) 하나와 그 까닭을 한 줄로 쓰세요.' },
            { type: 'short', prompt: '앞으로 함께 사는 곳(방·학교·일터)에서 지킬 공존 다짐 한 문장을 쓰세요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
