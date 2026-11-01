/* 창체 안전교육 사이버 중독 예방 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-cyber 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 약물 및 사이버 중독 예방
 *   '3. 인터넷 게임 사용 규칙 만들기 및 실천' · '4. 스마트폰의 건전한 사용 방법' + 7대 표준안 사이버(인터넷 게임·스마트폰) 소분류.
 * 고 기준: 실제 자료 분석·토론(찬반 근거)·제안서·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 수치 자료는 모두 '가상'이다(화면 제목에 밝힌다). 인물은 직접 지은 가명이다. 특정 게임·앱·회사 이름을 쓰지 않는다.
 * 학생 자신의 사용 시간·게임 이름 같은 개인 습관은 채점하지 않는다 — 채점 문항은 가상 친구의 기록·사례로 묻고, 내 습관은 활동지·스스로 점검으로만 쓴다.
 * 도박·확률형 아이템은 이 학년군 계획에 없다. 게임 결제는 '지출 관리'로만 다룬다.
 * 주제 6개, 계획 모듈 45개 전부.
 *
 * 사람 확인: 근거 파일(research-*.md)에 세부가 없어 일반 지식으로 쓴 문장들. 수업 전 공식 안내처에서 확인한다.
 *  - game-disorder 전 모듈: '세계보건기구가 국제질병분류에 게임이용장애를 올렸다'(체계도 concepts) — 등재 시기·국내 질병분류 반영 여부는 쓰지 않았다.
 *    세계보건기구 국제질병분류 원문 또는 보건복지부·질병관리청 자료로 확인.
 *  - game-disorder.activity.criteria-check·argument-map·wrap.term-blank: 진단 기준이 '조절 실패·다른 일보다 게임이 앞섬·문제가 생겨도 계속함·오래 지속'을 보며
 *    '이용 시간만으로 진단하지 않는다'는 문장 — 지속 기간 수치는 쓰지 않았다. 세계보건기구 국제질병분류 원문으로 확인.
 *  - game-disorder.intro.headlines·activity.fact-opinion: '국제질병분류는 진단과 통계에 쓰는 분류 목록이다' — 세계보건기구 자료로 확인.
 *  - attention-economy 전 모듈: 다크 패턴 세 유형(멈춤 방해형·압박형·기본값형)은 수업용으로 묶은 분류다(공식 분류 아님). 한국소비자원·공정거래위원회 온라인 다크패턴 안내와 견주어 본다.
 *  - attention-economy.activity.revenue-flow: '무료 앱은 광고비, 구독형은 구독료가 주 수입' — 일반 사업 모형 설명. 한국소비자원·방송통신위원회 이용자 안내로 확인.
 *  - log-rule·study-sleep 전 모듈: '잠들기 전 화면 사용이 잠드는 시각을 늦출 수 있다', '잠이 다음 날 집중과 기억을 돕는다' — 질병관리청 국가건강정보포털 수면 안내로 확인.
 *    '하루 7시간 잠'·'잠들기 30분 전 화면 끄기'는 이 수업의 연습용 '우리 반 약속'이며 의학 기준이 아니다(화면에 그렇게 밝힌다).
 *  - study-sleep.activity.focus-plan: '공부 50분·쉬기 10분' 구간은 연습용 계획 값이다.
 *  - game-disorder.activity.criteria-check 교사 메모: 도움 경로 '학교 상담실·청소년 상담 1388'(체계도 saf-cyber 중 concepts) — 한국청소년상담복지개발원으로 확인.
 *  - wellbeing-proposal·independence 의 금액(학생회 활동비·생활비·구독료)은 모두 가상 값이다. */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-cyber', band: '고', topic: `saf-cyber.h.${topic}`, grades }, o, { id: `saf-cyber.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(sort): groups = 칸마다 카드 글 목록(글 = 카드 id). 쉬움 = 앞 es칸만, 칸마다 앞 k장. 도전 = hard(칸마다 더할 카드) 덧붙임. traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, es = slots.length, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (ss, gs) => ({ sort: Object.fromEntries(ss.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(slots, groups), difficulty: d, levels: {} };
    const es2 = slots.slice(0, es); const eg = groups.slice(0, es).map((g) => g.slice(0, k));
    const easyTag = es < slots.length ? `${es}칸, 카드 ${eg.flat().length}장` : `카드 ${eg.flat().length}장`;
    base.levels.easy = { prompt: pfx(prompt, easyTag), toolOptions: Object.assign({ cards: mix(eg) }, es < slots.length ? { slots: es2 } : {}), target: tgt(es2, eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(slots, hg) }; }
    return Object.assign(base, more);
  };
  // 차례 문항(order): steps = 바른 차례(글 = id). 쉬움 = 앞 k장, 도전 = plus(끝에 더할 단계), traps = 자리에 놓지 않을 함정 카드
  const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
  const ORDERQ = (prompt, steps, { k = 3, plus = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: steps.length, cards: lay(steps, traps) }, opt), target: { order: steps }, difficulty: d, levels: {} };
    if (k < steps.length) it.levels.easy = { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { slots: k, cards: lay(steps.slice(0, k), []) }, target: { order: steps.slice(0, k) } };
    if (plus) { const ps = [...steps, ...plus]; it.levels.challenge = { prompt: pfx(prompt, `카드 ${ps.length}장`), toolOptions: { slots: ps.length, cards: lay(ps, traps) }, target: { order: ps } }; }
    if (!Object.keys(it.levels).length) delete it.levels;
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
  // 갈림길(dilemma): 나무를 n 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 easyN번, 기본·도전 = 나무 전체. 근거 카드는 모든 단계에서 고른다
  const DILQ = (prompt, scene, paths, reasons, good, { easyN = 2, d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const full = depth(scene);
    const it = { prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: at(full), difficulty: d, levels: {} };
    if (full > easyN) it.levels.easy = { prompt: pfx(prompt, `갈림길 ${easyN}번`), toolOptions: { scene: cut(scene, easyN) }, target: at(easyN) };
    else delete it.levels;
    return Object.assign(it, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀(starter) + easyChecks(기준을 줄인 판), 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, easyChecks = null, sample = null, plus = null, d = 0.4, more = {} } = {}) => {
    const t = (cs) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, sent ? { sentences: sent } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks), difficulty: d, levels: {} };
    if (starter || easyChecks) it.levels.easy = Object.assign({}, starter ? { toolOptions: { starter } } : {}, easyChecks ? { prompt: pfx(prompt, `기준 ${easyChecks.length}개`), target: t(easyChecks) } : {});
    if (plus) it.levels.challenge = { prompt: pfx(prompt, `기준 ${checks.length + 1}개`), target: t([...checks, plus]) };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 점검표(kitchen checklist): items = [[id, 글, 넣을지]…]. 쉬움 = 앞 k개 항목, 도전 = hard(뒤에 더할 항목)
  const CHECKQ = (prompt, title, items, { k = 0, hard = null, d = 0.3, more = {} } = {}) => {
    const mk = (xs) => ({ mode: 'checklist', title, items: xs.map(([id, text]) => ({ id, text })) });
    const on = (xs) => ({ checklist: xs.filter((x) => x[2]).map((x) => x[0]) });
    const it = { prompt, toolOptions: mk(items), target: on(items), difficulty: d, levels: {} };
    if (k) { const e = items.slice(0, k); it.levels.easy = { prompt: pfx(prompt, `항목 ${k}개`), toolOptions: mk(e), target: on(e) }; }
    if (hard) { const h = [...items, ...hard]; it.levels.challenge = { prompt: pfx(prompt, `항목 ${h.length}개`), toolOptions: mk(h), target: on(h) }; }
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 그래프 읽기(chart read): 같은 자료로 여러 문항
  const READQ = (base) => (prompt, extra, target, d, more = {}) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'read' }, base, extra), target, difficulty: d }, more);
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];

  // ======================================================================================================
  // 1. 주의 경제와 플랫폼 설계 분석 (10학년)
  // ======================================================================================================
  {
    const M = MOD('attention-economy', [10]);
    const LINE = { type: 'line', title: '가상 플랫폼 하루 평균 이용 시간(가상 자료)', unit: '분', xLabel: '주', yLabel: '하루 평균 이용 시간', from: 30,
      data: [['1주', 40], ['2주', 42], ['3주', 41], ['4주', 43], ['5주', 55], ['6주', 58], ['7주', 60], ['8주', 62]] };
    const L = READQ(LINE);

    MODS.push(
      M({
        id: 'intro.meeting', type: 'intro', title: '가상 앱 회사의 기획 회의',
        method: '가상 앱 회사 회의 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 세 장(머무는 시간·관심과 주의·관심사 데이터)만 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 회사가 얻으려는 것을 학생이 고르고, 함정 두 장을 남긴 까닭을 말한다.', challenge: '회의 목표 \'하루 이용 시간 늘리기\'가 이용자의 잠·공부와 부딪히는 지점을 한 문장으로 말한다.' },
        intro: {
          teacher: '"가상의 무료 동영상 앱 회사 회의예요. 회의 목표가 \'하루 이용 시간 늘리기\'라고 적혀 있네요. 돈을 받지 않는 앱이 왜 이용 시간에 이렇게 신경 쓸까요?" 두세 명의 대답을 듣고 시연 단추로 회사가 얻으려는 카드가 바구니에 담기는 모습을 보여 준다. "무료니까 우리한테서 가져가는 건 없잖아요"라는 말이 나오면 "돈 대신 무엇을 내고 있는지 카드에서 찾아볼까요?"라고 되묻는다. 오늘은 내 시간과 주의가 어떻게 수익이 되는지 구조로 따져 본다고 밝힌다.',
          student: '가상 앱 회사의 기획 회의 장면을 읽고, 회사가 무료 앱 이용자에게서 얻으려는 것을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '회사가 얻으려는 것', title: '가상 회사 기획 회의', shuffle: false, cards: [
            { id: 'time', text: '이용자가 앱에 머무는 시간', motif: 'sun' }, { id: 'fee', text: '이용자가 내는 가입비', motif: 'house' }, { id: 'focus', text: '이용자의 관심과 주의', motif: 'star' },
            { id: 'rest', text: '이용자의 충분한 휴식', motif: 'moon' }, { id: 'data', text: '이용자의 관심사 데이터', motif: 'cloud' }] }, sequence: [{ pick: ['time', 'focus', 'data'] }] },
          art: { draw: 'a paper meeting room with a whiteboard showing a rising line labelled daily watch time, paper chairs around a table, a phone cut-out in the middle with tiny clock and eye shapes flowing out of it', banner: '무료 앱은 무엇을 얻을까?' },
        },
        notes: '회사·앱은 모두 가상이다. 실제 기업·서비스 이름을 꺼내지 않게 하고, 학생이 이름을 말하면 \'어떤 영상 앱\'처럼 바꿔 말한다.',
      }),
      M({
        id: 'intro.terms', type: 'intro', title: '주의 경제 핵심 용어 잇기',
        method: '핵심 용어와 사례 잇기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 쌍(주의 경제·기본값 설계)을 뜻 풀이와 함께 먼저 잇는다.', base: '네 쌍을 학생이 잇고 짝과 맞춰 본다.', challenge: '용어마다 내가 본 사례 하나를 앱 이름 없이 말한다.' },
        intro: {
          teacher: '"오늘 쓸 낱말 네 개예요. 주의 경제, 참여 지표, 다크 패턴, 기본값 설계. 처음 듣는 말이어도 사례를 보면 이미 겪어 본 일일 거예요." 시연 단추로 용어 카드가 사례와 이어지는 모습을 보여 준다. "다크 패턴은 해킹 같은 불법 기술이죠?"라는 말이 나오면 "해지 버튼을 찾기 어렵게 숨겨 둔 것도 불법 해킹일까요, 설계일까요?"라고 되묻는다. 다크 패턴은 숨은 기술이 아니라 화면을 그렇게 \'설계\'한 것이라는 점을 짚는다.',
          student: '용어 카드를 짧은 사례 문장과 이어 보세요. 사례를 말할 때는 앱 이름 대신 \'어떤 앱\'이라고 말해요.',
          demo: { tool: 'wordcards', options: { words: [
            { en: '주의 경제', ko: '사람들의 시간과 관심을 모아 수익으로 바꾸는 구조' }, { en: '참여 지표', ko: '이용 시간·재방문처럼 얼마나 머무는지 재는 수' },
            { en: '다크 패턴', ko: '해지 버튼을 숨기듯 이용자를 몰래 이끄는 화면 설계' }, { en: '기본값 설계', ko: '자동 재생이 처음부터 켜져 있게 정해 두는 것' }] },
          sequence: [{ match: { '주의 경제': '주의 경제', '참여 지표': '참여 지표', '다크 패턴': '다크 패턴', '기본값 설계': '기본값 설계' } }] },
          art: { draw: 'four paper word cards pinned to a corkboard with strings leading to small paper screens: a hidden cancel button, an autoplay toggle switched on, a rising counter, a crowd of tiny eyes', banner: '낱말로 구조를 읽어요' },
        },
      }),

      M({
        id: 'activity.revenue-flow', type: 'activity', title: '무료 앱 수익 구조 나누기',
        method: '무료 앱 수익 구조 나누기', tool: 'economy', minutes: 19,
        levels: { easy: '첫 문항이 두 칸(이용자가 내주는 것·광고주가 내는 것)에 카드 4장으로 줄어든다.', base: '세 칸에 카드 7장을 나누고(무료 앱에 없는 함정 카드 \'구독료\'는 남긴다), 흐름 카드를 차례로 놓고, 활동지에 흐름을 한 문장으로 쓴다.', challenge: '첫 문항에 카드 한 장(다시 찾아오는 횟수)이 더해지고, 구독형 서비스와 수입원을 견주는 짝을 근거로 설명한다.' },
        activity: {
          title: '무료 앱의 돈은 어디서 오나', tool: 'economy',
          teacher: '"무료 앱도 회사가 돌아가려면 돈이 필요해요. 그 돈은 누가 낼까요?" 카드를 칸에 넣을 때마다 "이 카드는 누구 손에서 누구 손으로 가나요?"라고 묻는다. \'구독료\'를 이용자 칸에 넣는 학생에게 "이 앱은 무료라고 했죠? 이용자가 돈을 낸다면 무료일까요?"라고 되묻는다. 이용자는 돈 대신 시간·주의·데이터를 내고, 그것이 광고주의 광고비로 바뀐다는 흐름을 칠판에 화살표로 그린다.',
          task: '카드를 이용자·회사·광고주 칸에 나누고 수익이 흐르는 차례를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('무료 동영상 앱(가상)의 카드를 누가 내주고 누가 얻는지 칸에 나누세요.', ['이용자가 내주는 것', '광고주가 내는 것', '회사가 얻는 것'], [
              ['시청 시간', '관심사 데이터', '클릭·좋아요 기록'],
              ['광고비', '노출 횟수에 따른 광고 비용'],
              ['팔 수 있는 광고 자리', '맞춤 광고에 쓸 분석 자료'],
            ], { k: 2, es: 2, hard: [['다시 찾아오는 횟수'], [], []], traps: ['구독료'], d: 0.3, opt: { trayLabel: '수익 카드' } }),
            ORDERQ('무료 앱에서 이용 시간이 수익이 되는 흐름을 차례로 놓으세요.', ['이용자가 영상을 오래 본다', '광고를 보여 줄 기회가 늘어난다', '광고주가 광고비를 더 낸다', '회사가 더 오래 보게 기능을 고친다'], { k: 3, d: 0.3, opt: { trayLabel: '흐름 카드' } }),
            MATCHQ('서비스 방식마다 주된 수입원을 짝지으세요.', [['무료·광고형 앱', '광고주가 낸 광고비'], ['구독형 서비스', '이용자가 낸 구독료']], { k: 2, extra: ['앱을 내려받은 횟수'], d: 0.35,
              more: { conclude: '광고형은 이용자의 시간이 길수록, 구독형은 이용자가 계속 돈을 낼수록 회사에 이익이에요. 어느 쪽이든 \'무엇을 늘리려 하는지\'를 보면 설계가 보여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이용자·회사·광고주를 모두 넣어 무료 앱의 수익 흐름을 한 문장으로 쓰세요.' }] },
        notes: '교구의 예산(budget) 판은 돈(원)만 세므로 시간·데이터 흐름은 칸 나누기와 차례로 다룬다. 함정 카드 \'구독료\'는 무료 앱에 없는 수입이라 어느 칸에도 넣지 않는다.',
      }),
      M({
        id: 'activity.metric-line', type: 'activity', title: '자동 재생 전후 가상 지표 해석',
        method: '기능 도입 전후 가상 지표 해석', tool: 'chart', minutes: 19,
        levels: { easy: '꺾은선의 점마다 값이 보여 눈금을 세지 않고 읽는다.', base: '값 표시 없이 눈금으로 읽어 변화량을 계산하고, 단정하려면 더 필요한 자료를 고른다.', challenge: '값 표시 없이 풀고, 활동지에 다른 원인(방학·새 콘텐츠) 가설과 확인 방법을 쓴다.' },
        activity: {
          title: '자동 재생 뒤 늘어난 이용 시간', tool: 'chart',
          teacher: '"가상 플랫폼이 5주 차에 자동 재생을 켰어요. 그 뒤로 이용 시간이 늘었네요. 그럼 자동 재생 때문이라고 말해도 될까요?" 먼저 그래프를 읽고 변화량을 구하게 한 뒤, 세 번째 문항에서 잠시 멈추고 짝과 의견을 나누게 한다. "기능을 켠 뒤에 늘었으니 원인이 증명됐다"는 학생에게 "그 주에 방학이 시작됐다면 어떻게 될까요? 둘 중 무엇 때문인지 이 그래프만으로 가를 수 있나요?"라고 묻는다. \'뒤에 일어났다\'와 \'때문에 일어났다\'는 다르다는 점을 짚는다.',
          task: '가상 지표 꺾은선그래프를 읽고, 원인이라고 말하려면 무엇이 더 필요한지 따져요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            L('자동 재생을 켠 5주 차에 이용 시간이 가장 크게 뛰었어요. 4주 차에서 5주 차로 몇 분 늘었나요?', { question: '4주→5주 늘어난 시간은?' }, { value: 12 }, 0.2),
            L('켜기 전 1~4주와 켠 뒤 5~8주 가운데, 주마다 이용 시간이 한 번도 줄지 않고 늘기만 한 쪽을 고르세요.', { question: '주마다 늘기만 한 쪽은?', choices: ['켜기 전 1~4주', '켠 뒤 5~8주'], why: ['3주 차에 한 번 줄어든 점을 보세요.', ''] }, { pick: 1 }, 0.25),
            L('"자동 재생이 이용 시간을 늘렸다"고 단정하려면 더 필요한 자료를 고르세요.', { question: '더 필요한 자료는?', choices: ['같은 기간 자동 재생을 끈 이용자의 이용 시간', '그래프 선의 색과 굵기', '회사가 낸 홍보 문구'], why: ['', '선의 모양은 원인을 알려 주지 않아요.', '홍보 문구는 회사의 주장이에요.'] }, { pick: 0 }, 0.35),
            L('알고 보니 5주 차에 방학이 시작되고 인기 새 콘텐츠도 나왔어요. 가장 알맞은 해석을 고르세요.', { question: '가장 알맞은 해석은?', choices: ['자동 재생 때문임이 증명된다', '방학·새 콘텐츠도 원인일 수 있어 따로 확인해야 한다', '이용 시간은 사실 늘지 않았다'], why: ['같은 때 일어난 다른 일이 있어요.', '', '그래프에서 이용 시간은 분명히 늘었어요.'] }, { pick: 1 }, 0.4,
              { conclude: '기능을 켠 뒤에 늘었다는 것만으로는 원인이 증명되지 않아요. 같은 때 일어난 다른 일과, 기능을 끈 사람들의 자료를 견주어야 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '이용 시간이 늘어난 다른 원인 가설과 확인 방법을 쓰세요.', columns: ['다른 원인 가설', '확인 방법'], cells: [['', ''], ['', '']] }] },
        notes: '그래프는 수업용 가상 자료다(화면 제목에 밝힘). 실제 서비스의 수치로 바꿔 말하지 않는다.',
      }),
      M({
        id: 'activity.pattern-sort', type: 'activity', title: '다크 패턴 사례 유형 분석',
        method: '다크 패턴 사례 유형 분석', tool: 'mindmap', minutes: 19,
        levels: { easy: '첫 문항이 두 가지(멈춤 방해형·압박형)에 카드 4장으로 줄어든다.', base: '세 가지에 카드 8장을 나누고(다크 패턴이 아닌 함정 카드 1장은 남긴다), 유형마다 바꾼 설계를 짝지으며, 활동지에 칸마다 근거를 쓴다.', challenge: '첫 문항에 카드 한 장(맞춤 추천 기본 켜짐)이 더해지고, 활동지에 대안 화면을 글로 설계한다.' },
        activity: {
          title: '다크 패턴 세 갈래', tool: 'mindmap',
          teacher: '"오늘은 화면 설계를 세 갈래로 나눠 봐요. 멈추기 어렵게 하는 것, 마음을 조급하게 하는 것, 처음부터 정해 두는 것." 카드를 놓을 때마다 "이 화면은 이용자에게서 무엇을 빼앗나요? 시간인가요, 선택인가요?"라고 묻는다. \'사용 시간 알림 켜기 메뉴\'를 다크 패턴에 넣는 학생에게 "이 메뉴는 이용자를 몰래 이끄나요, 스스로 고르게 돕나요?"라고 되묻는다. \'설계를 알면 나는 안 넘어간다\'는 말이 나오면, 알아도 기본값은 그대로 남는다는 점을 짚는다.',
          task: '다크 패턴 사례 카드를 세 갈래로 나누고, 이용자에게 선택권을 돌려주는 설계를 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('다크 패턴 사례 카드를 세 갈래 가지에 나누세요.', ['멈춤 방해형', '압박형', '기본값형'], [
              ['해지 버튼을 메뉴 깊숙이 숨김', '끝없이 이어지는 피드', '"정말 나가시겠어요?" 창이 여러 번 뜸'],
              ['"연속 기록이 끊겨요" 경고', '"알림 끄면 혜택을 놓쳐요" 문구', '"친구가 기다리고 있어요" 알림'],
              ['자동 재생이 처음부터 켜짐', '알림 전체 허용이 미리 체크됨'],
            ], { k: 2, es: 2, hard: [[], [], ['맞춤 추천이 기본으로 켜짐']], traps: ['사용 시간 알림을 켜는 메뉴가 있음'], d: 0.3, opt: { topic: '다크 패턴' } }),
            MATCHQ('유형마다 이용자에게 선택권을 돌려주는 바뀐 설계를 짝지으세요.', [['멈춤 방해형', '해지 버튼을 가입 버튼만큼 찾기 쉽게 둠'], ['압박형', '손해 문구 대신 사실만 알리는 안내'], ['기본값형', '자동 재생을 처음엔 꺼 두고 이용자가 켬']], { k: 3, extra: ['알림을 끄면 기능 일부를 잠금'], d: 0.35, opt: { topic: '바뀐 설계' } }),
            PICKQ('이용자가 스스로 멈추고 고르게 돕는 설계만 고르세요.', ['영상이 끝나면 "계속 볼까요?"라고 묻기', '하루 사용 시간 알림을 쉽게 켜는 메뉴'], ['남은 혜택 시간을 깜빡이며 보여 주기', '나가기 단추를 작고 흐리게 두기'], { d: 0.35, opt: { basket: '선택권을 돌려주는 설계' },
              more: { conclude: '다크 패턴은 이용자의 선택을 몰래 바꾸는 설계예요. 설계를 바꾸면 의지에 기대지 않고도 멈추기 쉬워져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '유형마다 사례를 하나씩 골라 다크 패턴으로 본 근거와 바꾼 화면을 쓰세요(앱 이름 없이).', columns: ['유형', '근거', '바꾼 화면'], cells: [['멈춤 방해형', '', ''], ['압박형', '', ''], ['기본값형', '', '']] }] },
        notes: '세 유형은 수업용으로 묶은 분류다. 한 사례가 두 유형에 걸칠 수 있다는 의견이 나오면 인정하고, 교구에서는 가장 두드러진 쪽 하나에 놓게 한다.',
      }),
      M({
        id: 'activity.position', type: 'activity', title: '청소년 계정 기본값 찬반 입장문',
        method: '청소년 계정 기본값 찬반 입장문', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '첫 글은 문장 틀을 보고 주장과 근거 하나만 쓰며 기준 2개를 점검한다.', base: '근거 둘과 반론 반박을 넣은 입장문을 쓰고 기준 4개로 고친 뒤, 반대편 근거 글과 비교 글을 쓴다.', challenge: '글마다 기준 하나가 더 붙고, 반대편의 가장 강한 근거를 인정한 뒤 답한다.' },
        activity: {
          title: '"청소년 계정 기본값을 꺼야 한다"', tool: 'rubric-writing',
          teacher: '"\'청소년 계정은 자동 재생·야간 알림을 기본으로 꺼야 한다.\' 찬성도 반대도 다 근거가 있을 수 있어요. 오늘은 이기는 글이 아니라 근거가 튼튼한 글을 써 봐요." 쓰기 전에 기준표 네 항목을 소리 내어 읽는다. "요즘 애들은 다 폰 중독이라서"처럼 사람을 싸잡는 근거를 쓴 학생에게 "그 문장은 사실인가요, 의견인가요? 확인할 자료가 있나요?"라고 묻는다. 반대 입장(스스로 고를 자유, 꺼 두면 쓸 때 불편)도 강한 근거가 될 수 있다는 점을 짚고, 두 번째 글에서 그 근거를 직접 써 보게 한다.',
          task: '청소년 계정 기본값에 대한 입장문을 쓰고 기준표로 고쳐요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('"청소년 계정은 자동 재생·야간 알림을 기본으로 꺼야 한다"에 대한 내 입장을 한 문단으로 쓰세요.', '청소년 계정 기본값(자동 재생·야간 알림 끄기)에 찬성 또는 반대하는 입장문을 한 문단으로 쓰세요.',
              ['첫 문장에 찬성·반대를 밝혔다', '근거를 두 개 썼다', '예상되는 반론을 하나 들고 반박했다', '근거가 사실인지 의견인지 구분했다'],
              { min: 120, max: 600, must: [['왜냐하면', '때문']], starter: '나는 청소년 계정 기본값을 끄는 데 (찬성/반대)한다. 왜냐하면 ~', easyChecks: ['첫 문장에 찬성·반대를 밝혔다', '근거를 하나 이상 썼다'], plus: '사람을 싸잡는 표현 없이 썼다', d: 0.4 }),
            RWQ('내 입장의 반대편에서 가장 강한 근거 하나를 2~3문장으로 써 보세요.', '내 입장과 반대편에 선 사람이 낼 가장 강한 근거를 그 사람의 말로 쓰세요.',
              ['반대편 입장을 첫 문장에 밝혔다', '근거가 확인할 수 있는 내용이다', '반대편을 깎아내리는 말이 없다'],
              { min: 60, max: 400, sent: [2, 3], starter: '반대편은 ~라고 말할 것이다. 그 까닭은 ~', plus: '그 근거가 강한 까닭을 한 문장 더 썼다', d: 0.4 }),
            RWQ('두 글을 견주어 어느 쪽 근거가 더 강한지와 그 까닭을 2~3문장으로 쓰세요.', '내 근거와 반대편 근거를 견주어, 어느 근거가 더 강한지 까닭과 함께 쓰세요.',
              ['두 근거를 모두 언급했다', '강하다고 본 기준(확인 가능성·해당 범위 등)을 썼다', '내 입장을 고치거나 지킬 까닭을 썼다'],
              { min: 60, max: 400, sent: [2, 3], must: [['근거']], plus: '반대편 근거를 인정하는 문장을 넣었다', d: 0.45,
                more: { conclude: '좋은 입장문은 반대편의 가장 강한 근거를 알고도 내 입장을 지킬(또는 고칠) 까닭을 보여 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 입장문의 근거를 사실과 의견으로 나눠 적으세요.', columns: ['근거', '사실/의견', '확인할 자료'], cells: [['', '', ''], ['', '', '']] }] },
        notes: '찬반 어느 쪽을 골라도 점수는 같다. 특정 플랫폼·회사 이름을 근거로 쓰지 않게 한다.',
      }),

      M({
        id: 'wrap.structure-map', type: 'wrap', title: '내 시간이 수익이 되는 길',
        method: '주의 경제 구조 정리 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 이용자·광고주 두 가지에 카드를 먼저 달고, 학생은 플랫폼 가지만 채운다.', base: '세 가지(이용자·플랫폼·광고주)에 카드를 모두 단다.', challenge: '출구 글에 가지마다 이용자가 되찾을 수 있는 통제권을 하나씩 쓴다.' },
        wrap: {
          teacher: '"가운데에 \'내 시간이 수익이 되는 길\'이라고 썼어요. 오늘 찾은 장치를 이용자·플랫폼·광고주 가지에 달아 봐요." 마인드맵을 채운 뒤 출구 질문으로 넘어간다. 출구 2번에서 \'무료 앱은 아무것도 가져가지 않는다\'를 고른 학생에게 수익 흐름 카드를 다시 떠올리게 하고 "광고비는 무엇을 보고 내는 돈이었나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '내 시간이 수익이 되는 길', slots: ['이용자', '플랫폼', '광고주'], cards: ['시간과 주의를 내준다', '광고비를 낸다', '자동 재생·끝없는 피드를 둔다', '관심사 데이터가 쌓인다', '맞춤 광고를 산다', '맞춤 추천을 다듬는다'] }, prompt: '카드를 이용자·플랫폼·광고주 가지에 다세요.', target: { sort: { 이용자: ['시간과 주의를 내준다', '관심사 데이터가 쌓인다'], 플랫폼: ['자동 재생·끝없는 피드를 둔다', '맞춤 추천을 다듬는다'], 광고주: ['광고비를 낸다', '맞춤 광고를 산다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['무료 앱은 이용자에게서 아무것도 가져가지 않는다', '무료 앱은 이용자의 시간과 주의를 광고 수익으로 바꾼다', '설계를 알기만 하면 영향을 전혀 받지 않는다'], answer: 1, difficulty: 0.15, explain: '이용자는 돈 대신 시간·주의·데이터를 내고, 그것이 광고주의 광고비로 바뀌어요. 설계를 알아도 기본값은 그대로 남아요.' },
            { type: 'short', prompt: '이용자가 되찾을 수 있는 통제권 하나를 쓰세요(예: 어떤 설정을 바꿀지).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '주의 경제 구조',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '무료 앱에서 이용자는 돈 대신 ___과 주의를 내준다.', answer: '시간' },
            { type: 'table', prompt: '가지마다 오늘 찾은 설계 장치와 이용자가 되찾을 통제권을 쓰세요.', columns: ['가지', '설계 장치', '되찾을 통제권'], cells: [['이용자', '', ''], ['플랫폼', '', ''], ['광고주', '', '']] },
          ],
        },
      }),
      M({
        id: 'wrap.setting-check', type: 'wrap', title: '친구에게 권할 설정 점검표',
        method: '오늘 바꿀 설정 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 점검표 앞 세 항목을 함께 읽으며 표시한다.', base: '여섯 항목 가운데 도움이 될 설정만 학생이 골라 표시한다.', challenge: '활동지에 바꾼 뒤 확인할 지표(내 사용 기록에서 무엇을 볼지)를 정해 쓴다.' },
        wrap: {
          teacher: '"가상 친구 다온이가 \'영상이 끝없이 이어져서 잠을 놓친다\'고 고민을 털어놨어요. 오늘 배운 설계를 거꾸로 쓰면 어떤 설정이 도움이 될까요?" 점검표를 채운 뒤, 내 설정은 활동지에서 스스로 고르게 한다. \'모든 알림 허용\'을 고르는 학생에게 "알림이 많을수록 앱으로 돌아오는 횟수는 늘까요, 줄까요?"라고 묻는다. 내 사용 시간을 발표시키지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '다온이에게 도움이 될 설정', items: [{ id: 'auto', text: '자동 재생 끄기' }, { id: 'badge', text: '빨간 숫자 배지 켜 두기' }, { id: 'bundle', text: '알림 묶어 받기' }, { id: 'rec', text: '시청 기록 기반 추천 줄이기' }, { id: 'all', text: '모든 알림 허용하기' }, { id: 'timer', text: '사용 시간 알림 켜기' }] }, prompt: '다온이의 고민에 도움이 될 설정만 표시하세요.', target: { checklist: ['auto', 'bundle', 'rec', 'timer'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '설정을 바꾼 뒤 효과를 확인하는 방법으로 가장 알맞은 것은?', options: ['느낌이 좋아졌는지 떠올린다', '한 주 뒤 사용 기록에서 밤 시간 사용이 줄었는지 본다', '친구에게 내가 달라졌는지 묻는다'], answer: 1, difficulty: 0.2, explain: '바꾼 설정이 효과가 있었는지는 기록으로 견주어야 알 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '이번 주 내 설정',
          items: [
            { type: 'check', prompt: '이번 주에 내 기기에서 바꿔 볼 설정에 표시하세요(채점하지 않아요).', options: ['자동 재생 끄기', '알림 묶어 받기', '시청 기록 기반 추천 줄이기', '사용 시간 알림 켜기', '밤 시간 방해 금지 켜기'] },
            { type: 'short', prompt: '바꾼 뒤 한 주 동안 무엇을 보고 효과를 확인할지 쓰세요.' },
          ],
        },
        notes: '채점하는 점검은 가상 친구의 고민으로 하고, 학생 자신의 설정은 활동지에서 스스로 고르게만 한다.',
      }),
    );
  }

  // ======================================================================================================
  // 2. 사용 기록으로 수면 지키는 규칙 세우기 (10학년)
  // ======================================================================================================
  {
    const M = MOD('log-rule', [10]);
    const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
    const USE = { type: 'bar', title: '하윤이의 밤 10시 이후 사용 시간(가상 기록)', unit: '분', xLabel: '요일', yLabel: '사용 시간', data: [['월', 30], ['화', 60], ['수', 120], ['목', 40], ['금', 150], ['토', 90], ['일', 50]] };
    const SLEEP = { type: 'line', title: '하윤이가 잠든 시각(밤 10시에서 몇 분 뒤, 가상 기록)', unit: '분', xLabel: '요일', yLabel: '밤 10시에서 몇 분 뒤', data: [['월', 70], ['화', 100], ['수', 170], ['목', 80], ['금', 190], ['토', 140], ['일', 90]] };
    const U = READQ(USE); const S = READQ(SLEEP);

    MODS.push(
      M({
        id: 'intro.bed-clock', type: 'intro', title: '누운 시각과 잠든 시각',
        method: '누운 시각과 잠든 시각 견주기', tool: 'clock', minutes: 6,
        levels: { easy: '교사가 디지털 시각을 칠판에 함께 적으며 두 시계를 읽는다.', base: '두 시각을 시계에서 읽고 그 사이 시간(1시간 45분)을 구한다.', challenge: '기상 시각 6시 40분까지 넣어 실제 잔 시간을 계산한다.' },
        intro: {
          teacher: '"가상 친구 하윤이의 기록이에요. 11시 20분에 누웠는데, 잠든 건 1시 5분이래요. 그 사이에 무슨 일이 있었을까요?" 시연 단추로 두 시각을 차례로 보여 주고 사이 시간을 함께 센다. "누워 있었으니까 쉰 거 아니에요?"라는 말이 나오면 "누워서 화면을 보던 1시간 45분이 잠이었을까요, 쉼이었을까요?"라고 되묻는다. 오늘은 느낌이 아니라 기록으로 문제 시간대를 찾아 규칙을 세운다고 밝힌다.',
          student: '가상 친구 하윤이는 11시 20분에 누웠지만 1시 5분에 잠들었어요. 두 시각을 시계에서 보고 그 사이 시간을 구해 보세요.',
          demo: { tool: 'clock', options: { minuteStep: 5 }, sequence: [{ h: 11, m: 20 }, { h: 1, m: 5 }] },
          art: { draw: 'two paper clocks side by side on a bedside table, one showing 11:20 and one showing 1:05, a glowing paper phone on a pillow between them and a crescent moon outside the window', banner: '누운 뒤 잠들기까지' },
        },
        notes: '학생에게 자기가 잠든 시각을 말하게 하지 않는다. 하윤이는 가상 인물이다.',
      }),
      M({
        id: 'intro.morning', type: 'intro', title: '늦게 잠든 다음 날 1교시',
        method: '늦게 잠든 다음 날 컨디션 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 보기 세 장(졸림·멍함·짜증)을 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 하윤이의 상태를 학생이 고르고, 함정 두 장을 남긴 까닭을 말한다.', challenge: '고른 상태가 그날 수업·수행평가에 줄 영향을 한 문장으로 말한다.' },
        intro: {
          teacher: '"하윤이는 새벽 1시 넘어 잠들고 1교시 수학 시간에 앉아 있어요. 지금 하윤이의 몸과 마음은 어떨까요?" 시연 단추로 상태 카드가 바구니에 담기는 모습을 보여 준다. "한두 시간 덜 자도 아침에 커피 마시면 똑같아요"라는 말이 나오면 "졸음을 잠시 가리는 것과 잠이 채워지는 것이 같을까요?"라고 되묻는다. 늦게 잔 대가는 다음 날 낮에 나타난다는 점을 짚는다.',
          student: '새벽에 잠든 하윤이가 다음 날 1교시에 앉아 있어요. 하윤이의 몸과 마음 상태로 알맞은 카드를 골라 보세요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '하윤이의 1교시 상태', shuffle: false, cards: [{ id: 'sleepy', text: '졸림' }, { id: 'fresh', text: '개운함' }, { id: 'blank', text: '멍함' }, { id: 'focus', text: '집중 잘됨' }, { id: 'cranky', text: '짜증' }] }, sequence: [{ pick: ['sleepy', 'blank', 'cranky'] }] },
          art: { draw: 'a paper classroom in the morning, a paper student resting a heavy head on one hand over a math textbook, a clock showing 9:00, a small grey cloud above the head', banner: '늦게 잔 다음 날' },
        },
      }),

      M({
        id: 'activity.log-read', type: 'activity', title: '사용 기록과 잠든 시각 함께 읽기',
        method: '사용 기록과 수면 시각 함께 읽기', tool: 'chart', minutes: 12,
        levels: { easy: '막대·점마다 값이 보여 눈금을 세지 않고 읽는다.', base: '값 표시 없이 막대와 꺾은선을 읽고, 둘이 함께 늦어진 요일을 찾아 관계를 해석한다.', challenge: '값 표시 없이 풀고, 활동지에 \'함께 변한다\'와 \'원인이다\'의 차이를 쓴다.' },
        activity: {
          title: '하윤이의 한 주 기록 읽기', tool: 'chart',
          teacher: '"하윤이의 한 주 가상 기록이에요. 막대는 밤 10시 이후 사용 시간, 꺾은선은 잠든 시각이에요. 둘이 같이 움직이는 요일이 보이나요?" 그래프 두 개를 번갈아 보며 요일을 짚게 한다. "사용 시간이 길어서 늦게 잔 게 확실하다"는 학생에게 "숙제가 많아서 늦게까지 깨어 있다가 폰을 본 거라면 어떻게 될까요?"라고 묻는다. 함께 변한 것은 단서이고, 원인인지 보려면 규칙을 바꿔 보고 다시 기록해야 한다는 점을 짚는다.',
          task: '사용 시간 막대와 잠든 시각 꺾은선(가상 기록)을 읽고 둘의 관계를 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            U('하윤이의 기록에서 밤 10시 이후 사용 시간이 가장 긴 요일을 고르세요.', { question: '가장 긴 막대는?', choices: DAYS }, { pick: 4 }, 0.15),
            S('잠든 시각 꺾은선에서 하윤이가 가장 일찍 잠든 요일을 고르세요.', { question: '가장 낮은 점은?', choices: DAYS }, { pick: 0 }, 0.2),
            U('사용 시간이 긴 두 요일(수·금)과 짧은 두 요일(월·목)의 막대를 보세요. 수요일 사용 시간은 목요일보다 몇 분 긴가요?', { question: '수요일 − 목요일은?' }, { value: 80 }, 0.3),
            S('두 그래프를 함께 볼 때 가장 알맞은 해석을 고르세요.', { question: '가장 알맞은 해석은?', choices: ['사용 시간이 긴 날 잠든 시각도 늦었다', '사용 시간과 잠든 시각은 아무 관계가 없다', '이 기록으로 폰이 원인임이 증명된다'], why: ['', '수·금처럼 둘이 함께 늦어진 날이 있어요.', '함께 변한 것과 원인은 달라요. 다른 이유가 있었는지 더 봐야 해요.'] }, { pick: 0 }, 0.35,
              { conclude: '기록은 함께 늦어진 시간대를 보여 줘요. 원인인지 알려면 그 시간대에 규칙을 세워 바꿔 보고 다시 기록해 견주어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'사용 시간과 잠든 시각이 함께 늦어졌다\'와 \'폰 때문에 늦게 잤다\'의 차이를 한 문장으로 쓰세요.' }] },
        notes: '그래프는 가상 기록이다. 학생 자신의 사용 기록을 화면에 띄우거나 발표하게 하지 않는다.',
      }),
      M({
        id: 'activity.rule-steps', type: 'activity', title: '규칙 세우는 다섯 단계',
        method: '규칙 세우는 차례 놓기', tool: 'timeline', minutes: 13,
        levels: { easy: '첫 문항이 단계 카드 3장으로 줄어든다.', base: '단계 카드 5장을 놓고, 단계마다 하윤이의 내용을 짝지은 뒤, 잴 수 있는 규칙을 고른다.', challenge: '첫 문항에 \'점검 결과로 규칙 고치기\' 단계가 더해져 6장을 놓고, 활동지에 고칠 기준을 쓴다.' },
        activity: {
          title: '기록에서 규칙까지', tool: 'timeline',
          teacher: '"규칙은 \'폰 줄이기\'처럼 마음먹기로 시작하면 금방 흐려져요. 기록에서 시작하면 어떻게 될까요?" 단계 카드를 놓은 뒤 하윤이의 내용을 단계에 맞춰 짝짓게 한다. \'규칙 쓰기\'를 \'기록 보기\'보다 앞에 놓는 학생에게 "문제 시간대를 모르고 쓴 규칙은 어느 시간을 지켜야 할지 알려 줄까요?"라고 묻는다. \'폰을 적당히 쓴다\'를 규칙으로 고르는 학생에게는 "한 주 뒤에 이 규칙을 지켰는지 무엇으로 확인하죠?"라고 되묻는다.',
          task: '규칙 세우는 단계를 차례로 놓고, 단계마다 하윤이의 내용을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('수면을 지키는 규칙을 세우는 단계를 차례로 놓으세요.', ['사용 기록 보기', '문제 시간대 찾기', '조건-행동 규칙 쓰기', '측정 방법 정하기', '한 주 뒤 점검하기'], { k: 3, plus: ['점검 결과로 규칙 고치기'], d: 0.3, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('단계마다 알맞은 하윤이의 내용을 짝지으세요.', [['문제 시간대 찾기', '밤 11시~1시에 영상이 이어짐'], ['조건-행동 규칙 쓰기', '밤 11시가 되면 폰을 거실 충전기에 둔다'], ['측정 방법 정하기', '아침마다 잠든 시각을 적는다'], ['한 주 뒤 점검하기', '규칙을 지킨 날 수를 센다']], { k: 3, extra: ['폰을 덜 쓰도록 노력한다'], d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            PICKQ('지켰는지 기록으로 확인할 수 있는 규칙만 고르세요.', ['평일 밤 11시 이후 폰은 거실에서 충전한다', '잠들기 30분 전에는 화면을 끈다'], ['폰을 적당히 쓴다', '밤에는 조금만 본다'], { d: 0.35, opt: { basket: '잴 수 있는 규칙', axis: ['먼저', '나중'] },
              more: { conclude: '좋은 규칙에는 언제(조건)·무엇을(행동)이 들어 있어, 한 주 뒤 기록으로 지켰는지 셀 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '한 주 뒤 점검에서 규칙을 고쳐야 한다고 판단할 기준을 하나 쓰세요(예: 지킨 날이 몇 날 미만이면).' }] },
        notes: '\'잠들기 30분 전 화면 끄기\'는 이 수업의 연습용 약속이며 의학 기준이 아니다.',
      }),
      M({
        id: 'activity.night-budget', type: 'activity', title: '밤 9시~자정 시간 예산',
        method: '밤 시간 예산 짜기', tool: 'economy', minutes: 13,
        levels: { easy: '첫 문항이 시간 블록 4장으로 줄어든다.', base: '시간 블록 6장을 꼭 넣을 것·줄일 것으로 나누고(수면 준비 블록은 꼭 넣을 것), 밤 차례와 시간대 짝을 맞춘다.', challenge: '헷갈리는 블록 2장이 더해지고, 활동지에 시험 기간 밤 계획을 따로 짜서 견준다.' },
        activity: {
          title: '하윤이의 밤 180분', tool: 'economy',
          teacher: '"밤 9시부터 자정까지는 180분이에요. 돈처럼 더 빌릴 수 없는 예산이죠. 하윤이는 이 180분을 어떻게 나눠야 잠을 지킬 수 있을까요?" 블록을 나눌 때 \'수면 준비(화면 끔)\' 블록을 어디에 넣는지 지켜본다. 그 블록을 \'줄일 것\'에 넣는 학생에게 "화면을 끄는 30분이 없으면 누운 시각과 잠든 시각 사이가 어떻게 됐었죠?"라고 묻는다. 여가 화면을 없애는 게 아니라 시간과 자리를 정하는 것이라는 점을 짚는다.',
          task: '하윤이의 밤 시간 블록을 나누고, 잠을 지키는 차례로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('하윤이의 밤 9시~자정 블록을 꼭 넣을 것과 줄일 수 있는 것으로 나누세요.', ['꼭 넣을 것', '줄일 수 있는 것'], [
              ['수면 준비(화면 끔) 30분', '씻기·정리 30분', '자습 60분'],
              ['침대에서 영상 60분', '단체방 수시 확인 30분', '알림 올 때마다 폰 보기'],
            ], { k: 2, hard: [['내일 준비물 챙기기 10분'], ['"한 편만" 영상 이어 보기']], d: 0.25, opt: { trayLabel: '시간 블록' } }),
            ORDERQ('잠을 지키는 하윤이의 밤 계획을 차례로 놓으세요.', ['자습', '여가 화면(거실에서)', '씻기·정리', '수면 준비(화면 끔)', '잠자리에 들기'], { k: 3, d: 0.3, opt: { axis: ['밤 9시', '자정'] } }),
            MATCHQ('고친 계획에서 시간대와 블록을 짝지으세요.', [['밤 9시~10시', '자습'], ['밤 10시~10시 30분', '여가 화면(거실에서)'], ['밤 10시 30분~11시', '씻기·정리'], ['밤 11시~11시 30분', '수면 준비(화면 끔)']], { k: 3, extra: ['침대에서 영상'], d: 0.35,
              more: { conclude: '밤 시간 예산에서 수면 준비 블록은 마지막까지 지키고, 줄일 것은 정해진 자리 밖의 화면 시간이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '평일과 시험 기간의 밤 9시~자정 계획을 견주어 쓰세요.', columns: ['시간대', '평일', '시험 기간'], cells: [['밤 9시~10시', '', ''], ['밤 10시~11시', '', ''], ['밤 11시~자정', '', '']] }] },
        notes: '교구의 예산(budget) 판은 돈(원)만 세므로 시간 예산은 블록 나누기·차례·짝으로 다룬다. 학생의 실제 밤 일과를 발표시키지 않는다.',
      }),

      M({
        id: 'wrap.rule-check', type: 'wrap', title: '수면 보호 규칙 점검표',
        method: '수면 보호 규칙 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 \'시각\'·\'장소\' 두 항목을 하윤이 규칙에서 함께 찾는다.', base: '여섯 항목 가운데 하윤이 규칙이 갖춘 네 항목을 학생이 표시한다.', challenge: '활동지에 내 규칙 초안에서 빠진 항목을 채워 다시 쓴다.' },
        wrap: {
          teacher: '"하윤이가 세운 규칙이에요. \'평일 밤 11시가 되면 폰을 거실 충전기에 두고, 아침에 잠든 시각을 적는다. 시험 기간에는 10시 30분.\' 좋은 규칙의 조건을 몇 개나 갖췄을까요?" 점검표를 채운 뒤 출구 질문으로 넘어간다. \'어기면 벌을 준다\'를 표시한 학생에게 "규칙 문장에 벌 이야기가 있었나요? 벌이 있어야 좋은 규칙일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '하윤이 규칙이 갖춘 것', items: [{ id: 'time', text: '시각이 분명하다' }, { id: 'punish', text: '어기면 벌을 준다' }, { id: 'place', text: '폰 둘 장소가 정해져 있다(침실 밖)' }, { id: 'measure', text: '지켰는지 기록으로 잴 수 있다' }, { id: 'long', text: '규칙 문장이 길고 자세하다' }, { id: 'except', text: '예외 조건(시험 기간)이 있다' }] }, prompt: '하윤이의 규칙이 갖춘 것만 표시하세요.', target: { checklist: ['time', 'place', 'measure', 'except'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['잠들기 전 화면은 누워서 보면 쉬는 것과 같다', '잠들기 전 화면을 보면 잠드는 시각이 늦어질 수 있다', '규칙은 기록 없이 감으로 세워도 충분하다'], answer: 1, difficulty: 0.15, explain: '하윤이의 기록에서 누운 시각과 잠든 시각 사이가 화면 시간이었어요. 기록이 있어야 문제 시간대를 찾을 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '수면 보호 규칙',
          items: [
            { type: 'check', prompt: '내 규칙 초안이 갖춘 것에 표시하세요(채점하지 않아요).', options: ['시각이 분명하다', '폰 둘 장소가 정해져 있다', '기록으로 잴 수 있다', '예외 조건이 있다'] },
            { type: 'short', prompt: '빠진 항목을 채워 내 규칙을 한 문장으로 다시 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.rule-line', type: 'wrap', title: '규칙 한 문장 완성',
        method: '규칙 한 문장 완성', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 첫 빈칸(시각)을 함께 채우고 나머지는 학생이 채운다.', base: '빈칸 세 개를 학생이 모두 채운다.', challenge: '출구 글에 주말 규칙 문장도 지어 쓴다.' },
        wrap: {
          teacher: '"하윤이의 기록에서 문제 시간대는 밤 11시 이후였죠. 그 기록에 맞게 규칙 문장의 빈칸을 채워 봐요." 카드를 채운 뒤 내 규칙은 출구 글로 쓰게 한다. \'침대 옆\' 카드를 고른 학생에게 "폰이 손 닿는 곳에 있으면 11시 이후에 어떻게 됐었나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'r1', label: '평일 ___ 이후에는' }, { id: 'r2', label: '폰을 ___에 두고' }, { id: 'r3', label: '___를 한다.' }], cards: ['밤 11시', '거실 충전기', '책 읽기나 스트레칭', '침대 옆', '새벽 1시', '"한 편만" 영상 보기'] }, prompt: '하윤이의 기록에 맞게 규칙 문장의 빈칸을 채우세요.', target: { fill: { r1: '밤 11시', r2: '거실 충전기', r3: '책 읽기나 스트레칭' } }, difficulty: 0.2 },
            { type: 'short', prompt: '같은 모양으로 주말 규칙 문장을 하나 지어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 규칙 한 문장',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '좋은 규칙에는 언제라는 ___과 무엇을 할지라는 행동이 들어간다.', answer: '조건' },
            { type: 'short', prompt: '"평일 ( ) 이후에는 폰을 ( )에 두고 ( )를 한다" 모양으로 내 규칙을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 게임이용장애 논쟁: 사실과 의견, 찬반 토론 (11학년)
  // ======================================================================================================
  {
    const M = MOD('game-disorder', [11]);
    const SIGNS = [['hours', '게임하는 시간이 길다'], ['control', '그만하려 해도 조절이 안 된다'], ['priority', '잠·공부보다 게임이 앞선다'], ['despite', '문제가 생겨도 계속한다'], ['persist', '이런 모습이 오래 이어진다']];
    const CASE = (prompt, on, d, more = {}) => CHECKQ(prompt, '사례에서 드러난 것', SIGNS.map(([id, t]) => [id, t, on.includes(id)]), { k: 3, d, more });

    MODS.push(
      M({
        id: 'intro.headlines', type: 'intro', title: '같은 소식, 엇갈린 기사 제목',
        method: '엇갈린 가상 기사 제목 비교', tool: 'story', minutes: 6,
        levels: { easy: '교사가 두 기사가 같은 점 하나(같은 등재 소식)를 먼저 짚는다.', base: '같은 점·다른 점 카드를 학생이 각각 나눈다.', challenge: '두 제목이 독자에게 주는 인상(걱정·반발)을 말하고, 어느 쪽도 사실 전부가 아니라는 점을 짚어 말한다.' },
        intro: {
          teacher: '"가상 기사 두 편이에요. 하나는 \'"게임도 질병" 우려 커져\', 다른 하나는 \'"산업 위축" 걱정하는 업계\'. 같은 소식을 다뤘는데 왜 이렇게 다를까요?" 시연 단추로 같은 점·다른 점 카드가 나뉘는 모습을 보여 준다. "제목이 다르니까 둘 중 하나는 가짜 뉴스예요"라는 말이 나오면 "두 기사 모두 같은 사실을 담고 있다면, 다른 것은 무엇일까요?"라고 되묻는다. 같은 사실도 무엇을 앞세우느냐에 따라 인상이 달라진다는 점을 짚고, 오늘은 사실과 의견을 갈라 읽는다고 밝힌다.',
          student: '같은 소식을 다룬 가상 기사 두 편의 제목과 첫 문단을 읽고, 두 기사가 같은 점과 다른 점을 나눠 보세요.',
          demo: { tool: 'story', options: { mode: 'sort', title: '가상 기사 두 편', slots: ['두 기사가 같은 점', '두 기사가 다른 점'], shuffle: false, cards: [
            { id: 'same1', text: '세계보건기구의 등재 소식을 다룸', motif: 'star' }, { id: 'diff1', text: '한 기사는 건강 우려를 앞세움', motif: 'cloud' },
            { id: 'same2', text: '국제질병분류를 언급함', motif: 'house' }, { id: 'diff2', text: '한 기사는 산업 피해를 앞세움', motif: 'sun' }] },
          sequence: [{ sort: { '두 기사가 같은 점': ['same1', 'same2'], '두 기사가 다른 점': ['diff1', 'diff2'] } }] },
          art: { draw: 'two folded paper newspapers side by side with different bold headline shapes, one with a worried cloud icon and one with a falling factory chart icon, a magnifying glass between them', banner: '같은 소식, 다른 제목' },
        },
        notes: '기사는 수업용 가상 기사다. 실제 언론사·기자 이름을 쓰지 않는다.',
      }),
      M({
        id: 'intro.opinion-band', type: 'intro', title: '가상 여론 띠그래프 읽기',
        method: '가상 여론 띠그래프와 사실 구별', tool: 'chart', minutes: 6,
        levels: { easy: '조각마다 값이 보이는 띠그래프에서 가장 큰 칸을 함께 찾는다.', base: '가장 큰 칸과 두 칸의 차를 읽고, 여론 비율이 사실 판단의 근거가 되는지 말한다.', challenge: '여론 조사가 알려 주는 것(사람들의 생각)과 못 알려 주는 것(진단 기준이 맞는지)을 나눠 말한다.' },
        intro: {
          teacher: '"가상의 설문 결과예요. \'게임이용장애 등재에 대한 생각\' 가운데 찬성이 가장 크네요. 그럼 등재가 옳다는 사실이 증명된 걸까요?" 시연 단추로 가장 큰 칸을 고르는 모습을 보인다. "많은 사람이 그렇다고 하면 맞는 거죠"라는 말이 나오면 "옛날에 많은 사람이 해가 땅을 돈다고 믿었을 때, 그 생각이 사실이었나요?"라고 되묻는다. 여론은 사람들이 어떻게 생각하는지는 알려 주지만 무엇이 사실인지는 따로 확인해야 한다는 점을 짚는다.',
          student: '가상 설문 띠그래프를 읽고, 여론 비율이 \'등재가 옳은가\'라는 판단의 근거가 될 수 있는지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: '등재에 대한 생각(가상 설문)', unit: '%', data: [['찬성', 40], ['반대', 35], ['모름', 25]], question: '가장 큰 칸은?', choices: ['찬성', '반대', '모름'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a long paper band chart split into three coloured strips labelled agree, disagree and unsure, small paper speech bubbles floating above it, a balance scale cut from paper beside it', banner: '많은 생각 = 사실일까?' },
        },
        notes: '설문 값은 가상이다. 실제 여론 조사 수치로 바꾸어 말하지 않는다.',
      }),

      M({
        id: 'activity.fact-opinion', type: 'activity', title: '논쟁 진술 사실·의견 가르기',
        method: '논쟁 진술 사실·의견 가르기', tool: 'story', minutes: 19,
        levels: { easy: '첫 문항이 진술 카드 4장으로 줄고, 주장-사실 짝이 2쌍으로 준다.', base: '진술 카드 8장을 사실·의견으로 나누고, 주장마다 근거로 쓸 사실 카드를 짝짓는다.', challenge: '첫 문항에 카드 2장이 더해지고, 섞인 진술을 사실 부분·의견 부분으로 쪼갠 까닭을 짝에게 설명한다.' },
        activity: {
          title: '사실 카드와 의견 카드', tool: 'story',
          teacher: '"사실은 누구나 자료로 확인할 수 있는 말, 의견은 판단이나 예측이 들어간 말이에요. \'게임은 모두 해롭다\'는 어느 쪽일까요?" 카드를 놓을 때마다 "이 말을 확인하려면 어떤 자료를 보면 되나요?"라고 묻는다. \'등재는 치료받을 길을 넓힐 것이다\'를 사실에 넣는 학생에게 "\'~할 것이다\'는 이미 일어난 일인가요, 앞으로의 예측인가요?"라고 되묻는다. 의견도 사실을 근거로 대면 힘이 생긴다는 점을 두 번째 문항에서 짚는다.',
          task: '게임이용장애 논쟁 진술을 사실·의견으로 나누고, 주장마다 근거가 되는 사실을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('게임이용장애 논쟁 진술 카드를 사실과 의견으로 나누세요.', ['사실', '의견'], [
              ['세계보건기구가 국제질병분류에 게임이용장애를 올렸다', '국제질병분류는 진단과 통계에 쓰는 분류 목록이다', '진단 기준에는 조절이 안 되는 모습이 들어 있다', '등재를 두고 찬성과 반대 의견이 함께 나왔다'],
              ['게임은 모두 해롭다', '등재는 게임 이용자를 낙인찍는다', '등재는 치료받을 길을 넓힐 것이다', '게임 산업이 큰 피해를 볼 것이다'],
            ], { k: 2, hard: [['진단 기준은 이용 시간만으로 정하지 않는다'], ['부모 세대는 게임을 이해하지 못한다']], d: 0.3, opt: { title: '논쟁 진술 카드' } }),
            MATCHQ('주장마다 근거로 쓸 수 있는 사실 카드를 짝지으세요.', [['주장: 등재는 치료받을 길을 넓힐 것이다', '국제질병분류는 진단과 통계에 쓰는 분류 목록이다'], ['주장: 많이 하는 것과 장애는 다르다', '진단 기준에는 조절이 안 되는 모습이 들어 있다'], ['주장: 등재 논쟁은 아직 끝나지 않았다', '등재를 두고 찬성과 반대 의견이 함께 나왔다']],
              { k: 2, extra: ['게임은 모두 해롭다'], d: 0.35, opt: { title: '주장과 근거' }, more: { hints: ['주장을 뒷받침하는 근거가 되는 사실 카드를 찾아요. 의견 카드는 근거가 되지 않아요.'] } }),
            SORTQ('섞인 진술 두 개를 쪼갠 카드예요. 사실 부분과 의견 부분으로 나누세요.', ['사실 부분', '의견 부분'], [
              ['세계보건기구가 게임이용장애를 올렸다', '찬반 의견이 함께 나왔다'],
              ['그러니 게임은 위험한 취미다', '그러니 등재는 잘못이다'],
            ], { k: 1, d: 0.4, opt: { title: '섞인 진술 쪼개기' },
              more: { conclude: '한 문장 안에도 사실과 의견이 섞여 있어요. \'그러니\' 뒤의 판단이 앞의 사실에서 정말 나오는지 따져 봐야 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"세계보건기구가 등재했으니 게임은 해롭다"에서 사실 부분과 의견 부분을 나누고, 의견이 사실에서 바로 나오지 않는 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.criteria-check', type: 'activity', title: '기준 신호로 가상 사례 점검',
        method: '기준 신호로 가상 사례 점검', tool: 'kitchen', minutes: 19,
        levels: { easy: '사례마다 점검 항목이 3개(시간·조절·우선순위)로 줄어든다.', base: '가상 사례 세 명을 점검 항목 5개로 점검하고, 신호가 모두 오래 이어진 사례를 고른다.', challenge: '항목 5개로 점검하고, 활동지에 \'많이 함\'과 \'장애 신호\'를 가른 근거를 사례마다 쓴다.' },
        activity: {
          title: '세 사례 점검표', tool: 'kitchen',
          teacher: '"가상 사례 세 명이에요. 서진·민재·유나 모두 게임을 많이 하는데, 기준이 말하는 신호는 누구에게 있을까요?" 사례를 소리 내어 읽고 점검표를 표시하게 한다. 서진의 \'조절이 안 된다\'에 표시하는 학생에게 "서진이는 약속 시각이 되면 껐다고 했죠? 오래 한 것과 멈추지 못한 것은 같을까요?"라고 묻는다. 이 점검은 진단이 아니며 진단은 전문가만 할 수 있다는 점, 나나 친구를 진단하려고 쓰지 않는다는 점을 분명히 말한다.',
          task: '가상 사례 세 명의 생활 묘사를 읽고, 사례에서 드러난 것만 점검표에 표시해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            CASE('서진(가상): 주말마다 친구들과 4시간씩 게임을 한다. 약속한 시각이 되면 끄고, 잠과 숙제는 지키며 성적도 그대로다. 드러난 것만 표시하세요.', ['hours'], 0.3),
            CASE('민재(가상): 그만하려 해도 새벽까지 이어진다. 숙제·식사를 자주 건너뛰고, 성적이 떨어지고 가족과 다퉈도 계속한다. 여러 달째 이렇다. 드러난 것만 표시하세요.', ['hours', 'control', 'priority', 'despite', 'persist'], 0.35),
            CASE('유나(가상): 시험이 끝난 한 주 동안 그만하려 해도 한 판 더 하게 됐고 학원 숙제를 미뤘다. 다음 주부터는 평소대로 돌아왔다. 드러난 것만 표시하세요.', ['hours', 'control', 'priority'], 0.4),
            { prompt: '세 사례 가운데 기준이 말하는 신호가 모두 드러나고 오래 이어진 사례를 고르세요.', toolOptions: { mode: 'pick', basket: '신호가 모두 오래 이어진 사례', autoMotif: false, cards: ['서진', '민재', '유나'] }, target: { pick: ['민재'] }, difficulty: 0.35,
              conclude: '게임 시간이 길다는 것만으로는 기준 신호가 아니에요. 조절이 안 되고, 다른 일보다 앞서고, 문제가 생겨도 계속하는 모습이 오래 이어지는지를 봐요. 걱정되면 혼자 판단하지 말고 상담실에 함께 가요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례마다 \'많이 함\'과 \'장애 신호\'를 가른 근거를 쓰세요.', columns: ['사례', '드러난 신호', '가른 근거'], cells: [['서진', '', ''], ['민재', '', ''], ['유나', '', '']] }] },
        notes: '세 사례는 가상이다. 학생 자신이나 친구를 이 점검표로 진단하게 하지 않는다. 걱정을 말하는 학생이 있으면 학교 상담실(또는 청소년 상담 1388)로 연결한다. 진단 기준의 지속 기간 수치는 쓰지 않았다(사람 확인 목록).',
      }),
      M({
        id: 'activity.argument-map', type: 'activity', title: '등재 찬반 근거 지도',
        method: '찬반 근거 지도 그리기', tool: 'mindmap', minutes: 19,
        levels: { easy: '첫 문항이 찬성·반대 가지에 근거 하나씩(2장)으로 줄어든다.', base: '양쪽 가지에 근거를 둘씩 달고 함정 카드는 남기며, 근거마다 사실·의견을 가르고 약한 근거를 고른다.', challenge: '양쪽에 근거가 하나씩 더해지고, 활동지에 가장 강한 근거와 가장 약한 근거를 골라 까닭을 쓴다.' },
        activity: {
          title: '찬반 근거 지도', tool: 'mindmap',
          teacher: '"가운데에 \'등재는 바람직한가\'를 두고 모둠이 찬성·반대 가지를 채워 봐요. 오늘은 내 편이 아니라 양쪽 근거를 다 아는 것이 목표예요." 근거를 달 때마다 "이 근거는 이미 확인된 일인가요, 앞으로 그럴 수 있다는 예측인가요?"라고 묻는다. \'내 친구는 매일 해도 괜찮았다\'를 반대 근거로 다는 학생에게 "한 사람의 경험으로 많은 사람에게 맞는 판단을 할 수 있을까요?"라고 되묻는다. 양쪽 근거 대부분이 \'~할 수 있다\'는 예측이라는 점을 짚고, 그래서 토론에서 사실 확인이 중요하다고 말한다.',
          task: '찬성·반대 근거를 가지에 달고, 근거마다 사실인지 의견·예측인지 가려요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성·반대 가지에 나누세요. 근거가 되지 않는 카드는 남겨요.', ['찬성 근거', '반대 근거'], [
              ['도움이 필요한 사람이 상담·치료를 받기 쉬워질 수 있다', '연구와 통계가 쌓일 수 있다'],
              ['많이 하는 이용자까지 낙인찍힐 수 있다', '과잉 진단이 생길 수 있다'],
            ], { k: 1, hard: [['문제를 일찍 알아차릴 수 있다'], ['게임 산업이 위축될 수 있다']], traps: ['내 친구는 매일 해도 괜찮았다', '게임은 원래 나쁘다'], d: 0.3, opt: { topic: '등재는 바람직한가' } }),
            SORTQ('지도에 단 진술을 사실로 확인할 수 있는 것과 의견·예측으로 나누세요.', ['확인할 수 있는 사실', '의견·예측'], [
              ['세계보건기구가 게임이용장애를 국제질병분류에 올렸다', '진단 기준은 이용 시간만 보지 않는다'],
              ['등재로 낙인이 생길 것이다', '등재로 치료가 쉬워질 것이다'],
            ], { k: 1, d: 0.35, opt: { topic: '사실과 예측' } }),
            PICKQ('토론 근거로 쓰기에 약한 것만 고르세요.', ['내 친구는 매일 해도 괜찮았다', '다들 게임은 나쁘다고 한다'], ['진단 기준은 이용 시간만 보지 않는다', '도움이 필요한 사람이 상담을 받을 수 있다'], { d: 0.35, opt: { basket: '약한 근거', topic: '약한 근거' },
              more: { conclude: '한 사람의 경험이나 \'다들 그렇다\'는 말은 약한 근거예요. 강한 근거는 확인할 수 있고 많은 사람에게 해당해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 지도에서 가장 강한 근거와 가장 약한 근거를 고르고 까닭을 쓰세요.', columns: ['', '근거', '까닭'], cells: [['가장 강한 근거', '', ''], ['가장 약한 근거', '', '']] }] },
      }),
      M({
        id: 'activity.position-paper', type: 'activity', title: '등재에 대한 내 입장문',
        method: '등재에 대한 입장문 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '첫 글은 문장 틀을 보고 근거 하나를 쓰며 기준 2개를 점검한다.', base: '근거 둘과 반론 반박을 넣은 입장문을 기준 4개로 고치고, 낙인 표현 고쳐 쓰기와 짝 피드백을 쓴다.', challenge: '첫 글에 다섯째 기준(반대 입장의 가장 강한 근거를 인정하고 답함)이 붙고, 다른 글에도 기준 하나씩이 더해진다.' },
        activity: {
          title: '내 입장문과 짝 피드백', tool: 'rubric-writing',
          teacher: '"찬성이든 반대든 괜찮아요. 오늘 기준은 근거가 튼튼한지, 그리고 사람을 깎아내리지 않는지예요." 쓰기 전에 기준표를 함께 읽고, \'게임 중독자\'처럼 사람을 꼬리표로 부르는 말과 \'게임 조절이 어려운 사람\'처럼 상황을 말하는 표현을 칠판에 나란히 적는다. "어차피 의견이니까 근거는 아무거나 써도 된다"는 학생에게 "앞 활동의 사실 카드 가운데 내 주장을 받쳐 줄 것이 있나요?"라고 묻는다. 마지막 글은 짝의 입장문을 읽고 쓰는 피드백이니, 짝 글의 좋은 점부터 쓰게 한다.',
          task: '등재에 대한 입장문을 쓰고, 낙인 없는 표현으로 고치고, 짝 글에 피드백을 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('게임이용장애 등재에 대한 내 입장을 한 문단으로 쓰세요.', '세계보건기구의 게임이용장애 등재에 대한 내 입장(찬성 또는 반대)을 한 문단으로 쓰세요.',
              ['첫 문장에 입장을 밝혔다', '근거를 두 개 썼다', '반론을 하나 들고 반박했다', '근거로 쓴 사실을 확인했다'],
              { min: 120, max: 600, must: [['왜냐하면', '때문']], starter: '나는 게임이용장애 등재에 (찬성/반대)한다. 왜냐하면 ~', easyChecks: ['첫 문장에 입장을 밝혔다', '근거를 하나 이상 썼다'], plus: '반대 입장의 가장 강한 근거를 인정하고 답했다', d: 0.4 }),
            RWQ('"게임 중독자들은 의지가 약하다"를 낙인 없는 문장으로 2문장 안에서 고쳐 쓰세요.', '사람을 꼬리표로 부르지 않고, 상황과 도움을 중심으로 고쳐 쓰세요.',
              ['사람을 깎아내리는 말을 뺐다', '행동이나 상황을 중심으로 썼다', '도움을 받을 수 있다는 내용을 넣었다'],
              { min: 30, max: 300, sent: [1, 2], starter: '게임 조절이 어려운 사람은 ~', plus: '의지 탓만 하지 않는 까닭을 썼다', d: 0.35 }),
            RWQ('짝의 입장문을 읽고 피드백을 2~3문장으로 쓰세요.', '짝의 입장문에서 좋은 점 하나와 기준표로 본 고칠 점 하나를 쓰세요(짝 이름은 쓰지 않아요).',
              ['좋은 점 하나를 썼다', '고칠 점을 기준표 말로 썼다', '짝의 입장을 깎아내리지 않았다'],
              { min: 40, max: 300, sent: [2, 3], plus: '고칠 방법을 하나 제안했다', d: 0.35,
                more: { conclude: '입장이 달라도 근거는 함께 다듬을 수 있어요. 토론의 목표는 이기기보다 더 튼튼한 판단이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '낙인 표현과 고쳐 쓴 표현을 나란히 적으세요.', columns: ['낙인 표현', '고쳐 쓴 표현'], cells: [['게임 중독자', ''], ['폐인', ''], ['의지가 약한 애', '']] }] },
        notes: '찬반 어느 쪽을 골라도 점수는 같다. 특정 게임·회사 이름을 근거로 쓰지 않게 한다.',
      }),

      M({
        id: 'wrap.term-blank', type: 'wrap', title: '게임이용장애 핵심 개념 빈칸',
        method: '핵심 개념 빈칸 채우기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 첫 빈칸(조절)을 함께 채우고 나머지는 학생이 채운다.', base: '빈칸 세 개를 학생이 모두 채운다.', challenge: '출구 글에 \'오래 함\'만으로 판단할 수 없는 까닭을 한 문장 더 쓴다.' },
        wrap: {
          teacher: '"오늘 점검표의 신호를 한 문장으로 묶어 봐요." 빈칸 카드를 채운 뒤 출구 질문으로 넘어간다. 빈칸에 \'이용 시간\'을 넣는 학생에게 "서진이는 오래 했지만 신호가 없었죠? 기준이 보는 건 시간이었나요, 조절이었나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'g1', label: '게임이용장애는 ___이 안 되고,' }, { id: 'g2', label: '다른 일보다 ___이 앞서며,' }, { id: 'g3', label: '문제가 생겨도 ___하는 모습이 오래 이어지는 것이다.' }], cards: ['조절', '게임', '계속', '이용 시간', '친구', '그만'] }, prompt: '핵심 개념 문장의 빈칸을 카드로 채우세요.', target: { fill: { g1: '조절', g2: '게임', g3: '계속' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'게임을 오래 한다\'만으로 게임이용장애라고 할 수 없는 까닭을 고르세요.', options: ['기준은 이용 시간이 아니라 조절·우선순위·문제 지속을 보기 때문에', '오래 하는 사람은 모두 실력이 좋아서', '시간은 잴 수 없어서'], answer: 0, difficulty: 0.2, explain: '서진이처럼 오래 해도 조절하고 할 일을 지키면 기준 신호가 아니에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '게임이용장애 핵심 개념',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '확인할 수 있는 말은 ___, 판단이나 예측이 들어간 말은 의견이다.', answer: '사실' },
            { type: 'short', prompt: '\'오래 함\'만으로 판단할 수 없는 까닭을 한 문장으로 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.debate-check', type: 'wrap', title: '토론 태도 스스로 점검',
        method: '토론 태도 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '교사가 앞 두 줄(사실·의견 구별, 끝까지 듣기)을 함께 읽고 표시하게 한다.', base: '점검 세 줄을 스스로 표시하고 다음 토론에서 고칠 점을 고른다.', challenge: '활동지에 고칠 점을 실천할 구체적 행동까지 쓴다.' },
        wrap: {
          teacher: '"오늘 토론에서 나는 어땠나요? 점수를 매기는 게 아니라 다음 토론을 위한 점검이에요. 솔직하게 표시해 봐요." 표시한 뒤 고칠 점 하나를 고르게 한다. "말을 많이 한 사람이 잘한 거죠"라는 말이 나오면 "상대 근거를 끝까지 들어야 반박도 정확해지지 않을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '오늘 토론 돌아보기' }, prompt: '오늘 토론에서 내가 한 것을 스스로 점검해 표시하세요.', target: { selfCheck: ['사실과 의견을 구별해 말했다', '상대 근거를 끝까지 들었다', '낙인 표현을 쓰지 않았다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '다음 토론에서 고칠 점을 정할 때 가장 알맞은 방법은?', options: ['모든 것을 한꺼번에 고친다', '하나를 골라 다음 토론에서 할 행동으로 정한다', '상대가 먼저 고치기를 기다린다'], answer: 1, difficulty: 0.1, explain: '고칠 점은 하나를 골라 할 수 있는 행동으로 정해야 다음에 실제로 바뀌어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '토론 태도 점검',
          items: [
            { type: 'check', prompt: '오늘 토론에서 잘한 것에 표시하세요.', options: ['사실과 의견 구별', '상대 근거 끝까지 듣기', '낙인 없는 표현', '근거 들어 반박하기'] },
            { type: 'short', prompt: '다음 토론에서 고칠 점 하나와 그것을 실천할 구체적 행동을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 수면·학업과 디지털 습관 재설계 (11학년)
  // ======================================================================================================
  {
    const M = MOD('study-sleep', [11]);
    const EXAM = { text: '시험 전날 밤 11시, 정리가 거의 끝났다. 단체방에 "다들 뭐 해?"가 뜨고, 추천 영상 "한 편만 보고 자"가 화면에 보인다.', who: '지후', motif: 'moon', choices: [
      { id: 'sleep', text: '폰을 거실에 두고 바로 잔다', result: '조금 아쉽지만 11시 30분에 잠든다.', impact: [{ who: '지후', text: '잠을 충분히 잔다', tone: 1 }],
        next: { text: '아침에 개운하게 일어났다. 시험 전 10분이 남았다.', choices: [
          { id: 'review', text: '정리 노트를 한 번 훑어본다', result: '어젯밤 본 내용이 또렷하게 떠오른다.', impact: [{ who: '지후', text: '차분하게 시험을 본다', tone: 1 }],
            next: { text: '시험이 끝났다. 내일 시험이 하나 더 있다.', choices: [
              { id: 'same', text: '오늘처럼 정리하고 제때 잔다', result: '이틀째도 컨디션이 고르다.', impact: [{ who: '지후', text: '시험 주 내내 집중이 이어진다', tone: 1 }], ending: '한 번 지킨 잠이 그 주 전체의 힘이 된다.' },
              { id: 'binge', text: '잘 봤으니 밤새 영상을 몰아 본다', result: '이틀째 아침 머리가 무겁다.', impact: [{ who: '지후', text: '좋은 흐름이 끊긴다', tone: -1 }], ending: '하루 잘 잤다고 다음 날 밤샘이 괜찮아지지는 않는다.' }] } },
          { id: 'phone', text: '단체방에 밀린 대화를 읽는다', result: '대화를 읽다 시험 시간이 된다.', impact: [{ who: '지후', text: '머릿속이 단체방 이야기로 흩어진다', tone: -1 }], ending: '시험 직전 화면은 정리한 내용을 밀어낸다.' }] } },
      { id: 'chat', text: '단체방에 들어가 대화한다', result: '이야기가 재미있어 시간이 금방 간다.', impact: [{ who: '지후', text: '잠드는 시각이 밀린다', tone: -1 }],
        next: { text: '새벽 1시, 대화가 아직 이어진다.', choices: [
          { id: 'leave', text: '"내일 시험이라 먼저 잘게" 하고 나간다', result: '1시 30분에 눕는다.', impact: [{ who: '지후', text: '잠은 줄었지만 더 밀리지는 않는다', tone: 0 }],
            next: { text: '아침, 알람을 겨우 듣고 일어났다.', choices: [
              { id: 'calm', text: '아침을 먹고 일찍 나서서 노트를 본다', result: '졸리지만 아는 문제는 풀어낸다.', impact: [{ who: '지후', text: '피해를 줄인다', tone: 0 }], ending: '늦게라도 멈춘 판단이 피해를 줄였다.' },
              { id: 'skip', text: '아침을 거르고 뛰어간다', result: '시험 중 배가 고프고 머리가 멍하다.', impact: [{ who: '지후', text: '집중이 더 흐려진다', tone: -1 }], ending: '잠이 모자란 날은 아침까지 챙겨야 버틸 수 있다.' }] } },
          { id: 'stay', text: '분위기를 깨기 싫어 계속 대화한다', result: '새벽 3시에 잠든다.', impact: [{ who: '지후', text: '시험 중 졸다 문제를 놓친다', tone: -1 }], ending: '단체방은 내일 시험을 대신 봐 주지 않는다.' }] } },
      { id: 'video', text: '"한 편만" 영상을 본다', result: '한 편이 금방 끝난다.', impact: [{ who: '지후', text: '아직은 괜찮다고 느낀다', tone: 0 }],
        next: { text: '한 편이 끝나자 다음 영상이 저절로 시작된다.', choices: [
          { id: 'off', text: '자동 재생을 끄고 폰을 거실에 둔다', result: '조금 늦게 11시 50분에 눕는다.', impact: [{ who: '지후', text: '이어지는 고리를 끊는다', tone: 1 }],
            next: { text: '누웠는데 폰 생각이 난다.', choices: [
              { id: 'bed', text: '눈을 감고 내일 순서를 떠올리다 잠든다', result: '자정 무렵 잠든다.', impact: [{ who: '지후', text: '시험 날 아침 무리 없이 일어난다', tone: 1 }], ending: '장치를 끊고 폰을 멀리 둔 것이 잠을 지켰다.' },
              { id: 'scroll', text: '거실에 가서 폰을 다시 가져온다', result: '새벽 2시까지 영상을 본다.', impact: [{ who: '지후', text: '잠이 크게 줄어든다', tone: -1 }], ending: '손 닿는 곳에 폰이 돌아오면 고리도 돌아온다.' }] } },
          { id: 'more', text: '"이것만" 하며 계속 본다', result: '새벽 2시가 넘었다.', impact: [{ who: '지후', text: '시험 날 아침 일어나기 힘들다', tone: -1 }], ending: '\'한 편만\'은 다음 영상이 저절로 이어지는 순간 깨진다.' }] } }] };
    const EXAM_R = [{ id: 'sleep', text: '잠이 다음 날 시험 집중을 지켜 준다' }, { id: 'cut', text: '이어지는 장치를 끊는 행동이 의지보다 쉽다' }, { id: 'one', text: '"한 편만"은 늘 한 편으로 끝난다', why: '자동 재생은 다음 편을 저절로 이어 줘요.' }, { id: 'all', text: '다들 깨어 있으니 괜찮다', why: '친구가 깨어 있어도 내 시험 날 컨디션은 내 잠이 정해요.' }];
    const PLAN = { text: '시험 사흘 전 밤 12시, 계획한 범위의 절반만 했다.', who: '지후', motif: 'book', choices: [
      { id: 'allnight', text: '남은 범위를 밤새 끝낸다', result: '새벽 4시에 겨우 잠든다.', impact: [{ who: '지후', text: '범위는 다 봤지만 잠이 크게 모자라다', tone: -1 }],
        next: { text: '다음 날 수업 시간, 계속 졸리다.', choices: [
          { id: 'nap', text: '쉬는 시간에 잠깐 엎드려 쉰다', result: '조금 나아지지만 오후 내내 멍하다.', impact: [{ who: '지후', text: '하루가 통째로 흐려진다', tone: -1 }], ending: '밤샘의 대가는 다음 날 하루 전체로 돌아온다.' },
          { id: 'energy', text: '에너지 음료로 버틴다', result: '밤에 또 잠이 안 온다.', impact: [{ who: '지후', text: '수면이 이틀째 무너진다', tone: -1 }], ending: '졸음을 가리면 다음 날 밤 잠까지 흔들린다.' }] } },
      { id: 'replan', text: '남은 범위를 사흘에 나눠 다시 짜고 잔다', result: '12시 30분에 잠든다.', impact: [{ who: '지후', text: '불안하지만 잠은 지킨다', tone: 0 }],
        next: { text: '다음 날 아침, 다시 짠 계획표를 본다.', choices: [
          { id: 'follow', text: '오늘 몫부터 한다', result: '사흘 동안 범위를 끝낸다.', impact: [{ who: '지후', text: '시험 날 컨디션이 좋다', tone: 1 }], ending: '양을 나누면 잠을 지키면서도 범위를 끝낼 수 있다.' },
          { id: 'delay', text: '오늘은 쉬고 내일 몰아서 한다', result: '시험 전날 다시 범위가 쌓인다.', impact: [{ who: '지후', text: '전날 밤샘으로 돌아간다', tone: -1 }], ending: '다시 짠 계획도 미루면 처음 문제로 돌아온다.' }] } }] };
    const PLAN_R = [{ id: 'split', text: '남은 양을 나눠야 잠을 지키며 끝낼 수 있다' }, { id: 'mem', text: '잠을 자야 공부한 내용이 남는다' }, { id: 'night', text: '시험 전 밤샘이 가장 효율적이다', why: '밤샘은 다음 날 집중과 기억을 함께 떨어뜨려요.' }];

    MODS.push(
      M({
        id: 'intro.wake-clock', type: 'intro', title: '잠든 시각과 일어난 시각',
        method: '취침·기상 시각으로 수면 시간 구하기', tool: 'clock', minutes: 6,
        levels: { easy: '교사가 디지털 시각(12시 50분·6시 30분)을 함께 적으며 시계를 읽는다.', base: '두 시각에서 수면 시간(5시간 40분)을 구하고 우리 반 약속 7시간과 견준다.', challenge: '7시간을 자려면 몇 시에 잠들고, 그 30분 전 몇 시에 화면을 꺼야 할지 거꾸로 계산한다.' },
        intro: {
          teacher: '"가상 친구 지후는 평일에 12시 50분에 잠들고 6시 30분에 일어나요. 몇 시간 잤을까요?" 시연 단추로 두 시각을 차례로 보여 주고 함께 센다. "잠을 줄인 만큼 공부 시간이 느니까 이득 아닌가요?"라는 말이 나오면 "5시간 40분 잔 다음 날 1교시에 지후는 그 시간을 공부로 쓸 수 있을까요?"라고 되묻는다. 이 수업의 연습용 약속인 7시간과 견주어 모자란 시간을 칠판에 적는다.',
          student: '가상 친구 지후의 잠든 시각(12시 50분)과 일어난 시각(6시 30분)을 시계에서 보고 수면 시간을 구해, 우리 반 약속 7시간과 견주어 보세요.',
          demo: { tool: 'clock', options: { minuteStep: 5 }, sequence: [{ h: 12, m: 50 }, { h: 6, m: 30 }] },
          art: { draw: 'a paper alarm clock on a desk showing 6:30 beside a stack of textbooks, a small paper moon fading into a sunrise through the window, a folded paper phone face-down', banner: '몇 시간 잤을까?' },
        },
        notes: '\'7시간\'은 의학 기준이 아니라 이 수업의 연습용 우리 반 약속이다. 학생 자신의 수면 시간을 발표시키지 않는다.',
      }),
      M({
        id: 'intro.case', type: 'intro', title: '성적이 흔들린 한 달',
        method: '성적이 흔들린 가상 사례 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 세 장(늦게 잠·졸음·마감 놓침)을 짚으며 고리를 함께 찾는다.', base: '보기 다섯 장 가운데 고리를 이루는 카드를 학생이 고르고, 함정 두 장을 남긴 까닭을 말한다.', challenge: '고리를 끊을 가장 쉬운 지점 하나를 골라 제안한다.' },
        intro: {
          teacher: '"가상 친구 지후의 한 달이에요. 밤마다 영상과 단체방으로 늦게 자다가, 수업 중 졸고, 결국 수행평가 마감을 놓쳤어요. 무엇이 무엇으로 이어졌을까요?" 시연 단추로 고리 카드가 바구니에 담기는 모습을 보여 준다. "지후가 원래 공부를 못해서 그래요"라는 말이 나오면 "한 달 전 지후의 성적은 괜찮았어요. 그 사이 바뀐 것은 무엇일까요?"라고 되묻는다. 오늘은 사람 탓이 아니라 생활의 고리를 찾아 다시 설계한다고 밝힌다.',
          student: '가상 친구 지후의 한 달 사례를 읽고, 성적이 흔들리기까지 이어진 고리 카드를 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이어진 고리', title: '지후의 한 달(가상)', shuffle: false, cards: [
            { id: 'late', text: '밤마다 영상·단체방으로 늦게 잠', motif: 'moon' }, { id: 'brain', text: '머리가 나빠서 성적이 떨어짐', motif: 'cloud' }, { id: 'doze', text: '수업 중 졸음', motif: 'sun' },
            { id: 'hard', text: '과목이 원래 어려움', motif: 'book' }, { id: 'miss', text: '수행평가 마감을 놓침', motif: 'star' }] }, sequence: [{ pick: ['late', 'doze', 'miss'] }] },
          art: { draw: 'a paper calendar page with four weeks, each week showing a smaller moon and a heavier sleepy face, a paper assignment sheet with a missed deadline stamp at the end', banner: '한 달 사이 무슨 일이?' },
        },
      }),

      M({
        id: 'activity.week-budget', type: 'activity', title: '하교 후 300분 다시 나누기',
        method: '평일 저녁 시간 예산 재설계', tool: 'economy', minutes: 12,
        levels: { easy: '첫 문항이 시간 블록 4장으로 줄어든다.', base: '시간 블록 6장을 지킬 것·줄일 것으로 나누고(수면 준비는 지킬 블록), 먼저 줄일 블록을 고르고, 블록마다 쓰임을 짝짓는다.', challenge: '헷갈리는 블록 2장이 더해지고, 활동지에 시험 2주 전 저녁 계획을 따로 짜며 근거를 쓴다.' },
        activity: {
          title: '지후의 하교 후 300분', tool: 'economy',
          teacher: '"지후의 하교 후 자유 시간은 300분이에요. 하고 싶은 걸 다 넣으면 넘쳐요. 무엇을 줄일까요?" 블록을 나눌 때 \'수면 준비\'를 어디에 넣는지 본다. 잠과 수면 준비를 줄이려는 학생에게 "잠을 줄여 얻은 30분과 화면을 줄여 얻은 30분은 다음 날 똑같을까요?"라고 묻는다. \'폰을 옆에 엎어 두면 괜찮다\'는 말이 나오면 손 닿는 곳의 폰이 집중을 끊는다는 점을 짚고, 자리를 바꾸는 것도 예산 짜기의 일부라고 말한다.',
          task: '지후의 저녁 블록을 지킬 것과 줄일 것으로 나누고, 넘치는 계획을 고쳐요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('지후의 하교 후 블록을 지킬 것과 줄일 수 있는 것으로 나누세요.', ['지킬 블록', '줄일 수 있는 블록'], [
              ['자습 120분', '수면 준비 30분', '운동 30분'],
              ['여가 화면 90분', '침대에서 영상 30분', '단체방 수시 확인'],
            ], { k: 2, hard: [['저녁 식사 30분'], ['쉬는 시간마다 짧은 영상']], d: 0.25, opt: { trayLabel: '시간 블록' } }),
            PICKQ('넣고 싶은 블록을 다 넣으니 300분을 넘었어요. 먼저 줄일 블록만 고르세요.', ['여가 화면 90분', '단체방 수시 확인'], ['수면 준비 30분', '자습 120분'], { d: 0.3, opt: { basket: '먼저 줄일 블록' } }),
            MATCHQ('고친 계획의 블록마다 알맞은 쓰임을 짝지으세요.', [['자습 120분', '시험 범위를 나눠 복습한다'], ['수면 준비 30분', '화면을 끄고 잠들 준비를 한다'], ['여가 화면 30분', '정해 둔 만큼만 거실에서 쉰다']], { k: 2, extra: ['잠을 줄여 공부 시간을 늘린다'], d: 0.35,
              more: { conclude: '시간 예산을 고칠 때는 잠과 수면 준비를 먼저 지키고, 정해진 자리 밖의 화면 시간을 줄여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '평소와 시험 2주 전 저녁 계획을 견주고, 바꾼 근거를 쓰세요.', columns: ['블록', '평소', '시험 2주 전', '바꾼 근거'], cells: [['자습', '', '', ''], ['여가 화면', '', '', ''], ['수면 준비', '', '', '']] }] },
        notes: '교구의 예산(budget) 판은 돈(원)만 세므로 시간 예산은 블록 나누기·고르기·짝으로 다룬다.',
      }),
      M({
        id: 'activity.focus-plan', type: 'activity', title: '집중 구간 타이머 맞추기',
        method: '집중 구간 계획 맞추기', tool: 'timer', minutes: 13,
        levels: { easy: '첫 문항은 공부 시간(50분) 칸 하나만 맞으면 된다.', base: '공부·쉬기·횟수 세 값을 맞추고, 시작 전 순서 카드를 놓고, 두 번째 계획을 맞춘다.', challenge: '마지막 문항에 쉬는 시간 대안 활동 점검 칸이 더해져 모두 확인해야 한다.' },
        activity: {
          title: '공부 50분·쉬기 10분 계획', tool: 'timer',
          teacher: '"오늘 저녁 지후의 집중 계획은 공부 50분, 쉬기 10분, 3번이에요. 이 값은 정답이 아니라 연습용 계획이에요." 타이머 칸을 맞춘 뒤 시작 전 순서 카드를 놓게 한다. \'타이머 시작\'을 맨 앞에 놓는 학생에게 "폰이 책상 위에 있는 채로 50분을 시작하면 첫 알림에 어떻게 될까요?"라고 묻는다. 쉬는 10분에 영상을 켜면 쉬는 시간이 늘어나기 쉽다는 점을 짚고, 화면 없는 쉬기를 함께 정한다.',
          task: '집중 구간 타이머를 계획대로 맞추고, 시작 전 순서를 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '지후의 오늘 저녁 계획(공부 50분·쉬기 10분·3번)대로 타이머를 분 단위로 맞추세요.', toolOptions: { timeUnit: 'min', title: '저녁 집중 계획', plan: { work: 25, rest: 5, rounds: 1 }, showTotal: true }, target: { plan: { work: 50, rest: 10, rounds: 3 } }, difficulty: 0.25,
              levels: { easy: { prompt: '지후의 계획에서 공부 시간(50분)만 타이머에 맞추세요(값 하나).', target: { plan: { work: 50 } } } } },
            { prompt: '집중 구간을 시작하기 전에 할 일을 차례로 놓으세요.', toolOptions: { title: '시작 전 순서', cards: ['타이머 시작', '폰을 다른 방에 두기', '목표 한 줄 쓰기'] }, target: { order: ['폰을 다른 방에 두기', '목표 한 줄 쓰기', '타이머 시작'] }, difficulty: 0.25 },
            { prompt: '숙제가 적은 날 계획(공부 40분·쉬기 10분·2번)으로 타이머를 맞추세요.', toolOptions: { timeUnit: 'min', title: '숙제 적은 날', plan: { work: 50, rest: 5, rounds: 3 } }, target: { plan: { work: 40, rest: 10, rounds: 2 } }, difficulty: 0.3,
              levels: { challenge: { prompt: '숙제가 적은 날 계획(공부 40분·쉬기 10분·2번)으로 맞추고, 쉬는 시간 대안 활동도 모두 확인하세요(점검 칸 더함).', toolOptions: { safety: ['쉬는 시간에는 일어나 물을 마신다', '창밖을 보거나 몸을 편다', '쉬는 시간에도 폰은 다른 방에 둔다'] }, target: { plan: { work: 40, rest: 10, rounds: 2 }, safety: true } } },
              conclude: '집중 구간은 타이머보다 시작 전 준비(폰 자리·목표)와 화면 없는 쉬기가 지켜 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쉬는 10분에 화면 대신 할 수 있는 활동 두 가지와 그 까닭을 쓰세요.' }] },
        notes: '\'50분·10분\'은 연습용 계획 값이다. 학급 사정에 맞게 바꿔도 된다고 말해 준다.',
      }),
      M({
        id: 'activity.exam-eve', type: 'activity', title: '시험 전날 밤 갈림길',
        method: '시험 전날 밤 갈림길 결과 추적', tool: 'dilemma', minutes: 13,
        levels: { easy: '첫 갈림길 장면이 두 번의 선택으로 줄고 근거를 고른다.', base: '세 번 갈라지는 길을 끝까지 가서 근거를 고르고, 다른 길도 끝까지 가 보며, 시험 사흘 전 장면(갈림 두 번)을 푼다.', challenge: '같은 판으로 풀고, 활동지에 세 갈래 선택의 다음 날 결과를 표로 견준다.' },
        activity: {
          title: '시험 전날 밤 11시', tool: 'dilemma',
          teacher: '"시험 전날 밤 11시, 단체방 알림과 \'한 편만\' 영상이 동시에 떠요. 여러분이 지후라면 무엇을 누를까요?" 첫 선택을 고르기 전에 손을 들어 세 길에 한 번씩 표시하게 한다. \'한 편만\' 길을 고른 학생에게 "한 편이 끝나는 순간 화면에서 무슨 일이 일어났나요?"라고 묻는다. \'다들 깨어 있으니 괜찮다\'를 근거로 고른 학생에게 "친구가 깨어 있는 것이 내 다음 날 집중에 도움이 될까요?"라고 되묻는다. 다른 길도 끝까지 가 보게 해, 늦게라도 멈춘 길과 끝까지 간 길의 결과를 견주게 한다.',
          task: '시험 전날 밤 갈림길을 따라가 다음 날 결과를 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DILQ('시험 전날 밤, 다음 날 집중을 지키는 길을 끝까지 따라가고 근거를 고르세요.', EXAM, [['sleep', 'review', 'same'], ['video', 'off', 'bed'], ['chat', 'leave', 'calm']], EXAM_R, ['sleep', 'cut'], { easyN: 2, d: 0.4 }),
            EXPLOREQ('같은 밤의 다른 길도 끝까지 가 보고 다음 날 결과를 견주세요.', EXAM, EXAM_R, ['다른 길의 끝 장면을 확인했다', '선택마다 다음 날 결과를 견주었다'], { d: 0.35 }),
            DILQ('시험 사흘 전 밤, 범위가 절반 남았어요. 잠을 지키며 끝내는 길을 고르고 근거를 고르세요.', PLAN, [['replan', 'follow']], PLAN_R, ['split', 'mem'], { d: 0.4,
              more: { conclude: '밤샘과 \'한 편만\'은 다음 날 결과로 돌아와요. 잠을 지키는 길은 양을 나누고, 이어지는 장치를 끊는 데서 시작해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시험 전날 밤 세 갈래 선택의 다음 날 결과를 견주세요.', columns: ['첫 선택', '다음 날 아침', '시험 결과·컨디션'], cells: [['바로 잔다', '', ''], ['단체방', '', ''], ['"한 편만" 영상', '', '']] }] },
        notes: '지후는 가상 인물이다. 학생 자신의 시험 전날 습관을 발표시키지 않는다.',
      }),

      M({
        id: 'wrap.reflection', type: 'wrap', title: '다음 주 바꿀 습관 하나',
        method: '다음 주 바꿀 습관 성찰 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '교사가 문장 틀("다음 주에 나는 ~을 바꾼다. 왜냐하면 ~")을 칠판에 적어 두고 두 문장부터 쓰게 한다.', base: '세 문장(습관·까닭·확인 방법)을 쓰고 기준 세 항목을 스스로 점검한다.', challenge: '활동지에 실패할 때의 대비책 문장을 더한다.' },
        wrap: {
          teacher: '"오늘 지후의 한 주를 다시 설계했어요. 이제 내 차례예요. 다음 주에 바꿀 습관 딱 하나를 골라 봐요." 쓰기 전에 기준표 세 항목을 함께 읽는다. "폰을 줄인다"처럼 언제·어디서가 없는 글을 쓴 학생에게 "다음 주 금요일에 이 습관을 지켰는지 무엇으로 확인할 수 있을까요?"라고 묻는다. 글은 채점하지 않고, 내 사용 시간을 숫자로 적지 않아도 된다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '다음 주에 바꿀 습관 하나와 그 까닭, 지켰는지 확인할 방법을 세 문장으로 쓰세요.', minChars: 60, maxChars: 400, starter: '다음 주에 나는 ~을 바꾼다. 왜냐하면 ~', sample: '다음 주 평일에 나는 밤 11시가 되면 폰을 거실에 둔다. 늦게 잔 다음 날 수업이 잘 안 들렸기 때문이다. 아침마다 잠든 시각을 적어 금요일에 지킨 날을 세겠다.' }, prompt: '바꿀 습관 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['언제·어디서 할지 구체적으로 썼다', '지켰는지 잴 방법을 썼다', '지금 내 생활에서 할 수 있는 크기다'], sentences: [3, 5] }, difficulty: 0.3 },
            { type: 'choice', prompt: '좋은 습관 계획에 가장 가까운 것을 고르세요.', options: ['다음 주부터 폰을 아예 안 쓴다', '평일 밤 11시에 폰을 거실에 두고, 잠든 시각을 적어 확인한다', '시험 전날에만 밤을 새우지 않는다'], answer: 1, difficulty: 0.15, explain: '언제·어디서가 분명하고 확인 방법이 있으며, 지킬 수 있는 크기의 계획이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '다음 주 바꿀 습관',
          items: [
            { type: 'short', prompt: '바꿀 습관·까닭·확인 방법을 세 문장으로 쓰세요.' },
            { type: 'short', prompt: '계획대로 안 된 날, 다음 날 어떻게 되돌릴지 대비책을 쓰세요.' },
          ],
          easy: { note: '"다음 주에 나는 ~을 바꾼다. 왜냐하면 ~. ~으로 확인하겠다."', items: [{ type: 'short', prompt: '바꿀 습관 하나와 그 까닭을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.cycle', type: 'wrap', title: '수면-집중 고리 끊기',
        method: '수면-집중 순환 고리와 끊는 지점', tool: 'lifecycle', minutes: 6,
        levels: { easy: '교사가 \'늦게 잠듦\'을 맨 위에 먼저 놓고 학생은 나머지를 잇는다.', base: '카드 다섯 장으로 고리를 잇고 끊을 행동을 고른다.', challenge: '활동지에 고리의 지점마다 끊는 행동을 하나씩 쓴다.' },
        wrap: {
          teacher: '"오늘 본 일들을 고리로 이어 봐요. 늦게 자면 무슨 일이 생기고, 그게 다시 밤으로 어떻게 돌아오나요?" 고리를 이은 뒤 끊는 행동을 고르게 한다. \'주말에 몰아 잔다\'를 고르는 학생에게 "주말에 몰아 자면 월요일 밤에 잠이 제때 올까요? 고리는 평일에 끊겨야 해요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { center: '수면-집중 고리', cards: [{ id: 'late', text: '늦게 잠듦' }, { id: 'tired', text: '낮에 피곤함' }, { id: 'focus', text: '수업 집중이 떨어짐' }, { id: 'pile', text: '할 일이 밀림' }, { id: 'binge', text: '밤에 몰아서 화면 사용' }] }, prompt: '수면과 집중이 서로 이어지는 차례로 고리를 이으세요.', target: { order: ['late', 'tired', 'focus', 'pile', 'binge'], cyclic: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '이 고리를 평일에 끊는 행동으로 가장 알맞은 것은?', options: ['밤 화면을 끄는 시각과 폰 둘 자리를 정한다', '낮에 졸리면 에너지 음료를 마신다', '주말에 몰아서 잔다'], answer: 0, difficulty: 0.15, explain: '고리가 시작되는 밤 화면에서 끊어야 다음 날 피곤함부터 줄어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '수면-집중 고리',
          items: [
            { type: 'table', prompt: '고리의 지점마다 끊는 행동을 하나씩 쓰세요.', columns: ['지점', '끊는 행동'], cells: [['늦게 잠듦', ''], ['낮에 피곤함', ''], ['밤에 몰아서 화면 사용', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '잠을 줄이면 다음 날 ___이 떨어져 할 일이 더 밀린다.', answer: '집중' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 디지털 웰빙 제안서 쓰기 (12학년)
  // ======================================================================================================
  {
    const M = MOD('wellbeing-proposal', [12]);
    const SURVEY = { type: 'bar', title: '우리 학교 설문 "그렇다" 응답 비율(가상 자료)', unit: '%', xLabel: '설문 문항', yLabel: '"그렇다" 응답 비율', data: [['잠들기 전 사용', 68], ['수업 중 알림 확인', 41], ['늦은 밤 단체방', 55], ['사용 후 후회', 47]] };
    const Q = READQ(SURVEY);
    const B = { locker: { id: 'locker', text: '야간 자습용 폰 보관함', price: 150000 }, print: { id: 'print', text: '캠페인 포스터 인쇄', price: 40000 }, game: { id: 'game', text: '폰 없는 점심 놀이 도구', price: 60000 },
      gift: { id: 'gift', text: '설문 참여 경품', price: 50000 }, shirt: { id: 'shirt', text: '학생회 단체 티셔츠', price: 120000 }, video: { id: 'video', text: '홍보 영상 외부 제작', price: 200000 } };
    const items = (...ks) => ks.map((k) => B[k]);

    MODS.push(
      M({
        id: 'intro.wellbeing-terms', type: 'intro', title: '디지털 웰빙 다섯 요소',
        method: '디지털 웰빙 요소와 사례 잇기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 세 쌍(수면·집중·관계)을 사례와 함께 먼저 잇는다.', base: '다섯 쌍을 학생이 잇고, 우리 학교에서 가장 흔들리는 요소를 하나 고른다.', challenge: '고른 요소의 근거를 일상 관찰 한 문장으로 말한다(친구 이름 없이).' },
        intro: {
          teacher: '"디지털 웰빙은 \'폰을 덜 쓰기\'가 아니라 화면과 함께 살면서도 잠·집중·관계를 지키는 상태예요. 다섯 요소를 학교생활 장면과 이어 봐요." 시연 단추로 요소 카드가 사례와 이어지는 모습을 보여 준다. "웰빙은 각자 의지 문제니까 학교가 할 일은 없어요"라는 말이 나오면 "수업 중 알림이 반 전체에 울린다면, 그건 한 사람의 의지 문제일까요?"라고 되묻는다. 오늘부터 두 차시 동안 우리 학교에 낼 디지털 웰빙 제안서를 설계한다고 밝힌다.',
          student: '디지털 웰빙 요소 카드를 학교생활 사례와 이어 보고, 우리 학교에서 가장 흔들리는 요소를 하나 골라 보세요.',
          demo: { tool: 'wordcards', options: { words: [
            { en: '수면', ko: '밤늦은 단체방 때문에 1교시에 조는 학생이 많다' }, { en: '집중', ko: '수업 중 알림 진동에 자꾸 눈이 간다' }, { en: '관계', ko: '점심시간에 마주 앉아도 각자 화면만 본다' },
            { en: '자기 통제', ko: '그만 보려 해도 다음 영상을 누르게 된다' }, { en: '정보 균형', ko: '추천된 비슷한 영상만 계속 보게 된다' }] },
          sequence: [{ match: { 수면: '수면', 집중: '집중', 관계: '관계', '자기 통제': '자기 통제', '정보 균형': '정보 균형' } }] },
          art: { draw: 'a paper school building with five small paper windows, each showing a scene: a sleepy student, a buzzing phone on a desk, friends looking at screens at lunch, a hand hovering over a next button, a row of identical video tiles', banner: '우리 학교의 디지털 웰빙' },
        },
      }),
      M({
        id: 'intro.adopted', type: 'intro', title: '채택된 가상 학생회 제안',
        method: '채택된 가상 제안 사례 분석', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 세 장(채택 이유)을 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 채택 이유를 학생이 고르고, 함정 두 장을 남긴 까닭을 말한다.', challenge: '반대가 있었다면 누가 무엇을 걱정했을지 추론해 말한다.' },
        intro: {
          teacher: '"어느 가상 학교 학생회가 \'야간 자습 시간에는 폰을 보관함에 두고, 쉬는 시간에는 자유롭게 쓴다\'는 제안을 냈고 채택됐어요. 왜 받아들여졌을까요?" 시연 단추로 채택 이유 카드가 바구니에 담기는 모습을 보여 준다. "규칙이 엄격할수록 잘 통과되잖아요"라는 말이 나오면 "쉬는 시간까지 다 금지했다면 학생들은 찬성했을까요?"라고 되묻는다. 좋은 제안은 금지를 많이 넣는 것이 아니라 자료·대안·평가 방법을 갖춘 것이라는 점을 짚는다.',
          student: '가상 학생회의 제안이 채택되기까지의 사례를 읽고, 채택된 이유를 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '채택된 이유', title: '가상 학생회 제안', shuffle: false, cards: [
            { id: 'data', text: '설문 자료로 문제를 보였다', motif: 'book' }, { id: 'strict', text: '규칙이 가장 엄격했다', motif: 'cloud' }, { id: 'free', text: '쉬는 시간 사용은 그대로 두었다', motif: 'sun' },
            { id: 'popular', text: '학생회장이 인기가 많았다', motif: 'star' }, { id: 'trial', text: '시범 운영 뒤 평가하기로 했다', motif: 'house' }] }, sequence: [{ pick: ['data', 'free', 'trial'] }] },
          art: { draw: 'a paper student council meeting with a proposal sheet on a table, a row of small paper lockers for phones behind them, a paper approval stamp hovering above the sheet', banner: '이 제안은 왜 통과됐을까?' },
        },
        notes: '사례 속 학교는 가상이다.',
      }),

      M({
        id: 'activity.problem-data', type: 'activity', title: '가상 학교 설문으로 문제 정의',
        method: '가상 학교 설문으로 문제 정의', tool: 'chart', minutes: 19,
        levels: { easy: '막대 끝에 값이 보여 눈금을 세지 않고 읽는다.', base: '값 표시 없이 막대를 읽고 두 문항을 견주어, 제안할 문제를 한 문장으로 정의하는 보기를 고른다.', challenge: '값 표시 없이 풀고, 활동지에 이 자료의 한계와 추가 조사 방법을 쓴다.' },
        activity: {
          title: '설문 막대에서 문제 찾기', tool: 'chart',
          teacher: '"가상의 우리 학교 설문이에요. 네 문항에 \'그렇다\'고 답한 비율이죠. 우리 제안서는 어떤 문제를 다뤄야 할까요?" 먼저 막대를 읽게 한 뒤, 세 번째 문항에서 문제 정의 문장을 함께 견준다. \'학생들은 폰을 너무 좋아한다\'를 고르는 학생에게 "그 문장은 자료에서 나온 말인가요? 제안서로 무엇을 바꿀 수 있나요?"라고 묻는다. 설문은 생각을 묻는 자료라서 실제 사용 시간은 알려 주지 않는다는 한계를 마지막 문항에서 짚는다.',
          task: '가상 설문 막대그래프를 읽고, 제안서에 쓸 문제를 자료로 정의해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            Q('가상 설문에서 "그렇다" 응답이 가장 많은 문항을 고르세요.', { question: '가장 큰 막대는?', choices: ['잠들기 전 사용', '수업 중 알림 확인', '늦은 밤 단체방', '사용 후 후회'] }, { pick: 0 }, 0.15),
            Q('\'잠들기 전 사용\'의 응답 비율은 \'수업 중 알림 확인\'보다 몇 %p 높은가요?', { question: '두 막대의 차는?' }, { value: 27 }, 0.3),
            Q('이 자료로 정의한 제안서 문제로 가장 알맞은 것을 고르세요.', { question: '가장 알맞은 문제 정의는?', choices: ['잠들기 전 화면 사용이 우리 학교 학생의 잠을 흔든다', '학생들은 폰을 너무 좋아한다', '알림은 아무 문제가 없다'], why: ['', '자료가 아니라 판단이 들어간 말이고, 무엇을 바꿀지 드러나지 않아요.', '수업 중 알림에도 "그렇다"가 꽤 있어요.'] }, { pick: 0 }, 0.35),
            Q('이 가상 설문만으로는 알 수 없는 것을 고르세요.', { question: '이 설문으로 알 수 없는 것은?', choices: ['어떤 문항에 "그렇다"가 많은지', '학생들이 실제로 하루 몇 분 썼는지', '두 문항 가운데 어느 쪽 응답이 많은지'], why: ['막대 길이로 알 수 있어요.', '', '막대를 견주면 알 수 있어요.'] }, { pick: 1 }, 0.4,
              { conclude: '설문은 학생들의 생각을 보여 줄 뿐 실제 사용량은 아니에요. 제안서에는 자료의 출처와 한계를 함께 밝혀요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 설문 자료의 한계 하나와, 그것을 보완할 추가 조사 방법을 쓰세요.' }] },
        notes: '설문 값은 가상이다. 실제 학급 설문을 하려면 이름을 받지 않는 무기명 설문으로 한다.',
      }),
      M({
        id: 'activity.stakeholders', type: 'activity', title: '이해관계자 입장 지도',
        method: '이해관계자 입장 지도', tool: 'mindmap', minutes: 19,
        levels: { easy: '첫 문항이 두 가지(학생·교사)에 카드 4장으로 줄어든다.', base: '네 가지(학생·교사·보호자·학교 운영)에 기대·걱정 카드 8장을 달고, 기대와 걱정을 가르고, 걱정마다 제안의 답을 짝짓는다.', challenge: '첫 문항에 가지마다 카드 한 장이 더해지고, 활동지에 남은 걱정에 대한 답을 쓴다.' },
        activity: {
          title: '"우리 제안"을 둘러싼 사람들', tool: 'mindmap',
          teacher: '"우리 제안이 \'야간 자습 시간 폰 보관\'이라면, 누가 무엇을 기대하고 무엇을 걱정할까요? 학생만 생각한 제안은 채택되기 어려워요." 카드를 가지에 달 때마다 "이 말은 누구의 목소리일까요?"라고 묻는다. 보호자의 \'급할 때 연락\' 걱정을 \'괜한 걱정\'이라고 넘기는 학생에게 "그 걱정에 답이 없으면 보호자는 제안에 찬성할까요?"라고 되묻는다. 걱정은 반대가 아니라 제안이 답해야 할 질문이라는 점을 짚는다.',
          task: '이해관계자 가지에 기대와 걱정을 달고, 걱정마다 제안에서 답할 방법을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('기대·걱정 카드를 말한 사람의 가지에 다세요.', ['학생', '교사', '보호자', '학교 운영'], [
              ['쉬는 시간 사용은 지키고 싶다', '야간 자습 중 친구 연락이 끊길까 아쉽다'],
              ['수업 중 알림이 줄길 바란다', '보관함 관리가 일이 될까 걱정된다'],
              ['급할 때 연락이 될지 걱정된다', '아이의 잠이 늘길 바란다'],
              ['보관 중 분실 책임이 걱정된다', '보관함 예산이 필요하다'],
            ], { k: 2, es: 2, hard: [['스스로 정한 규칙이면 지키겠다'], ['야간 자습 집중이 늘길 바란다'], ['집에서도 같은 규칙을 쓰고 싶다'], ['다른 학년과 형평이 맞아야 한다']], d: 0.3, opt: { topic: '우리 제안' } }),
            SORTQ('이해관계자의 말을 기대와 걱정으로 나누세요.', ['기대', '걱정'], [
              ['수업 중 알림이 줄길 바란다', '아이의 잠이 늘길 바란다'],
              ['급할 때 연락이 될지 걱정된다', '보관 중 분실 책임이 걱정된다'],
            ], { k: 1, d: 0.25, opt: { topic: '기대와 걱정' } }),
            MATCHQ('걱정마다 제안에서 답할 방법을 짝지으세요.', [['급할 때 연락이 될지 걱정된다', '급한 연락은 교무실 전화로 받아 전한다'], ['보관 중 분실 책임이 걱정된다', '잠금 보관함과 보관 기록부를 둔다'], ['보관함 관리가 일이 될까 걱정된다', '학생회가 당번을 정해 맡는다']], { k: 2, extra: ['걱정하지 말라고 설득한다'], d: 0.35, opt: { topic: '걱정에 답하기' },
              more: { conclude: '이해관계자의 걱정에 제안 안에서 답하면, 반대하던 사람도 함께 지키는 제안이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 제안에 남은 걱정과 답을 쓰세요.', columns: ['누구의 걱정', '걱정', '제안에서 답할 방법'], cells: [['', '', ''], ['', '', '']] }] },
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '디지털 웰빙 제안서 쓰기',
        method: '디지털 웰빙 제안서 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓰며, 칸마다 기준 2개를 점검한다.', base: '문제·근거, 제안·실행 방법, 평가 방법 세 칸을 쓰고 칸마다 기준 3개로 고친다.', challenge: '칸마다 기준 하나가 더 붙고(예상 반론과 답 등), 활동지에 반론 칸을 더한다.' },
        activity: {
          title: '세 칸 제안서', tool: 'rubric-writing',
          teacher: '"제안서는 \'하지 말자\'를 나열하는 글이 아니에요. 문제를 자료로 보이고, 대신 무엇을 할지, 잘됐는지 어떻게 잴지까지 써야 해요." 칸마다 기준표를 먼저 읽는다. 근거 칸에 가상 설문 숫자를 쓰는 학생에게 \'가상 자료\'라고 밝혀 적게 한다. 제안 칸에 \'폰 전면 금지\'를 쓴 학생에게 "앞 차시의 이해관계자 가운데 이 제안에 가장 크게 반대할 사람은 누구일까요? 금지 대신 줄 수 있는 대안은?"이라고 묻는다. 평가 칸이 비어 있으면 "한 달 뒤에 무엇을 다시 재면 이 제안이 효과가 있었는지 알까요?"라고 묻는다.',
          task: '문제·제안·평가 세 칸으로 디지털 웰빙 제안서를 쓰고 기준표로 고쳐요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서 첫 칸: 우리 학교의 문제와 근거를 2~3문장으로 쓰세요.', '가상 설문 자료를 근거로, 우리 학교의 디지털 사용 문제를 정의하세요(가상 자료임을 밝혀요).',
              ['문제를 한 문장으로 정의했다', '가상 자료임을 밝히고 근거로 썼다', '누구에게 생기는 문제인지 썼다'],
              { min: 60, max: 400, sent: [2, 3], must: [['가상', '설문']], starter: '가상 설문에서 ~이 가장 많았다. 그래서 우리 학교의 문제는 ~', easyChecks: ['문제를 한 문장으로 정의했다', '가상 자료임을 밝히고 근거로 썼다'], plus: '자료의 한계를 한 문장 밝혔다', d: 0.4 }),
            RWQ('둘째 칸: 제안과 실행 방법을 2~3문장으로 쓰세요.', '금지보다 대안을 중심으로, 누가·언제·어디서 할지 드러나게 제안을 쓰세요.',
              ['금지보다 대안을 중심에 두었다', '누가·언제·어디서 할지 썼다', '학교에서 실제로 할 수 있는 크기다'],
              { min: 60, max: 400, sent: [2, 3], starter: '우리는 ~ 시간에 ~을 제안한다. 대신 ~', easyChecks: ['금지보다 대안을 중심에 두었다', '누가·언제·어디서 할지 썼다'], plus: '예상되는 반론 하나와 답을 썼다', d: 0.4 }),
            RWQ('셋째 칸: 평가 방법을 2~3문장으로 쓰세요.', '제안이 효과가 있었는지 무엇을, 언제 다시 잴지, 결과에 따라 어떻게 고칠지 쓰세요.',
              ['무엇을 다시 잴지 썼다', '언제 다시 잴지 썼다', '결과에 따라 고칠 방법을 썼다'],
              { min: 60, max: 400, sent: [2, 3], must: [['설문', '기록', '조사']], starter: '시범 운영 ~ 뒤에 ~을 다시 조사한다.', easyChecks: ['무엇을 다시 잴지 썼다', '언제 다시 잴지 썼다'], plus: '처음 자료와 견줄 기준을 정했다', d: 0.4,
                more: { conclude: '좋은 제안서는 문제(자료)·대안(실행)·평가(다시 재기)가 이어져, 채택 뒤에도 고쳐 갈 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서의 다섯 칸을 정리하세요.', columns: ['칸', '쓸 내용'], cells: [['문제', ''], ['근거(가상 자료)', ''], ['제안', ''], ['실행 방법', ''], ['평가 방법', '']] }] },
        notes: '제안서는 모둠 단위로 써도 된다. 실제 학교에 낼 때는 가상 자료를 실제 무기명 설문으로 바꾸게 한다.',
      }),
      M({
        id: 'activity.resource-budget', type: 'activity', title: '제안 실행 예산 배분',
        method: '제안 실행 자원 배분', tool: 'economy', minutes: 19,
        levels: { easy: '첫 문항이 물건 3개로 줄고, 숫자 합계를 보며 고른다.', base: '물건 6개 가운데 꼭 필요한 것을 넣고 제안과 먼 것은 빼며 예산 30만 원 안에서 고르고, 줄어든 예산으로 다시 고른다.', challenge: '숫자 합계가 맞힌 뒤에만 보이고(막대만 보임), 활동지에 돈 없이 같은 효과를 낼 대안을 쓴다.' },
        activity: {
          title: '학생회 활동비 300,000원', tool: 'economy',
          teacher: '"가상 학생회 활동비는 30만 원이에요. 우리 제안(야간 자습 폰 보관 + 폰 없는 점심 놀이)을 실행하려면 무엇이 꼭 필요할까요?" 고를 때마다 "이 물건이 없으면 제안이 실행되지 않나요?"라고 묻는다. 홍보 영상 외부 제작을 고르는 학생에게 "이 돈을 쓰면 보관함은 살 수 있나요? 홍보는 돈 없이 할 방법이 없을까요?"라고 되묻는다. 예산이 줄 때는 제안의 핵심이 아니라 꾸밈부터 뺀다는 점을 짚는다.',
          task: '예산 막대 안에서 제안 실행에 꼭 필요한 것을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '예산 300,000원. 제안의 핵심인 폰 보관함은 꼭 넣고 고르세요.', toolOptions: { mode: 'budget', budget: 300000, items: items('locker', 'print', 'game', 'gift') }, target: { budget: { must: ['locker'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '예산 300,000원. 폰 보관함은 꼭 넣고 고르세요(물건 3개).', toolOptions: { items: items('locker', 'print', 'game') } } } },
            { prompt: '예산 300,000원. 보관함과 점심 놀이 도구는 꼭 넣고, 제안과 먼 단체 티셔츠·홍보 영상 외부 제작은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 300000, items: items('locker', 'shirt', 'print', 'video', 'game', 'gift') }, target: { budget: { must: ['locker', 'game'], not: ['shirt', 'video'] } }, difficulty: 0.3 },
            { prompt: '활동비가 200,000원으로 줄었어요. 보관함은 지키고, 티셔츠·홍보 영상은 빼고 다시 고르세요.', toolOptions: { mode: 'budget', budget: 200000, items: items('locker', 'shirt', 'print', 'video', 'game', 'gift') }, target: { budget: { must: ['locker'], not: ['shirt', 'video'] } }, difficulty: 0.35,
              conclude: '예산이 줄면 제안의 핵심(보관함)은 지키고, 홍보·꾸밈은 돈 없이 할 방법을 찾아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '돈을 쓰지 않고 같은 효과를 낼 대안을 쓰세요.', columns: ['돈이 드는 것', '돈 없이 할 대안'], cells: [['캠페인 포스터 인쇄', ''], ['점심 놀이 도구', ''], ['설문 참여 경품', '']] }] },
        notes: '금액은 모두 가상이다.',
      }),

      M({
        id: 'wrap.scope-sort', type: 'wrap', title: '누가 바꿀 문제인가',
        method: '문제 후보를 바꿀 주체로 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 \'개인\'·\'학교\' 두 가지 카드를 먼저 함께 단다.', base: '세 가지(개인·학교·플랫폼)에 카드를 모두 단다.', challenge: '출구 글에 제안서에 넣을 가지를 고른 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 문제 후보를 \'누가 바꿀 수 있나\'로 나눠 봐요. 제안서는 학교가 바꿀 수 있는 것을 다뤄야 받아들여져요." 마인드맵을 채운 뒤 출구 질문으로 넘어간다. 모든 문제를 \'개인이 바꿀 것\'에 넣는 학생에게 "자동 재생이 처음부터 켜져 있는 건 개인 의지로 고칠 수 있는 설계일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '누가 바꿀까', slots: ['개인이 바꿀 것', '학교가 바꿀 것', '플랫폼이 바꿀 것'], cards: ['잠들기 전 폰을 거실에 두기', '야간 자습 시간 보관함 운영', '청소년 계정 자동 재생 기본 끄기', '알림 묶어 받기 설정', '쉬는 시간 사용 규칙 정하기', '해지 버튼 찾기 쉽게 하기'] }, prompt: '문제 해결 카드를 바꿀 주체의 가지에 다세요.', target: { sort: { '개인이 바꿀 것': ['잠들기 전 폰을 거실에 두기', '알림 묶어 받기 설정'], '학교가 바꿀 것': ['야간 자습 시간 보관함 운영', '쉬는 시간 사용 규칙 정하기'], '플랫폼이 바꿀 것': ['청소년 계정 자동 재생 기본 끄기', '해지 버튼 찾기 쉽게 하기'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '좋은 제안서의 조건으로 가장 알맞은 것을 고르세요.', options: ['금지 규칙을 최대한 많이 넣는다', '문제를 자료로 보이고 대안과 평가 방법을 담는다', '주장만 분명하면 근거는 없어도 된다'], answer: 1, difficulty: 0.15, explain: '금지만 많은 제안은 반발을 부르고, 근거와 평가가 없으면 채택되기도 고치기도 어려워요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '바꿀 주체 나누기',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '디지털 문제는 모두 ___ 의지의 문제만은 아니다.', answer: '개인' },
            { type: 'short', prompt: '우리 제안서에 넣을 가지(개인·학교·플랫폼)를 고르고 그 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.schedule', type: 'wrap', title: '제안 실행 일정 차례',
        method: '제안 실행 일정 차례 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 \'제안 제출\'을 먼저 놓고 학생은 나머지를 잇는다.', base: '다섯 단계를 차례로 놓고 활동지에 날짜·담당을 단다.', challenge: '활동지에 평가 단계에서 볼 지표를 붙인다.' },
        wrap: {
          teacher: '"제안서가 채택되면 끝일까요? 실제로 굴러가려면 차례가 있어요." 일정 카드를 차례로 놓은 뒤 활동지에 날짜와 담당을 달게 한다. \'평가\'를 빼고 \'시범 운영\' 다음 바로 \'고치기\'로 가는 학생에게 "무엇을 보고 고칠지 모르면 어디를 고칠 수 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: ['평가', '제안 제출', '고치기', '의견 수렴', '시범 운영'] }, prompt: '제안 실행 일정을 차례로 놓으세요.', target: { order: ['제안 제출', '의견 수렴', '시범 운영', '평가', '고치기'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '시범 운영 뒤 \'평가\' 단계가 꼭 필요한 까닭을 고르세요.', options: ['제안이 효과가 있었는지 처음 자료와 견주어 보려고', '학생회 일을 늘리려고', '반대한 사람을 찾아내려고'], answer: 0, difficulty: 0.15, explain: '처음 설문과 같은 방법으로 다시 재야 무엇을 고칠지 알 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '제안 실행 일정',
          items: [
            { type: 'table', prompt: '단계마다 날짜와 담당을 쓰세요.', columns: ['단계', '날짜', '담당'], cells: [['제안 제출', '', ''], ['의견 수렴', '', ''], ['시범 운영', '', ''], ['평가', '', ''], ['고치기', '', '']] },
            { type: 'short', prompt: '평가 단계에서 볼 지표 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 자립 첫해 디지털 생활 설계와 진로 (12학년)
  // ======================================================================================================
  {
    const M = MOD('independence', [12]);
    const W = { food: { id: 'food', text: '식비', price: 300000 }, bus: { id: 'bus', text: '교통비', price: 60000 }, phone: { id: 'phone', text: '휴대전화 요금', price: 50000 }, book: { id: 'book', text: '교재·학용품', price: 40000 },
      vodA: { id: 'vodA', text: '영상 구독 하나', price: 13000 }, vodB: { id: 'vodB', text: '영상 구독 둘', price: 15000 }, music: { id: 'music', text: '음악 구독', price: 11000 }, game: { id: 'game', text: '게임 결제', price: 50000 }, night: { id: 'night', text: '야식 배달 4번', price: 80000 } };
    const pickW = (...ks) => ks.map((k) => W[k]);
    const DEAD = { text: '과제 마감 전날 밤 10시, 과제는 절반 남았다. 친구가 "한 판만 같이 하자"고 게임 초대를 보냈다.', who: '서하', motif: 'moon', choices: [
      { id: 'join', text: '초대에 응한다', result: '한 판이 끝나자 "한 판 더"가 온다.', impact: [{ who: '서하', text: '과제 시간이 줄어든다', tone: -1 }],
        next: { text: '자정, 과제는 그대로다.', choices: [
          { id: 'stop', text: '"마감이라 여기까지" 하고 나간다', result: '새벽 2시에 과제를 겨우 끝낸다.', impact: [{ who: '서하', text: '늦었지만 과제를 지킨다', tone: 0 }],
            next: { text: '아침 9시에 아르바이트가 있다.', choices: [
              { id: 'alarm', text: '바로 자고 알람을 두 개 맞춘다', result: '졸리지만 제시간에 도착한다.', impact: [{ who: '아르바이트 동료', text: '믿고 일을 나눈다', tone: 1 }], ending: '늦게라도 멈춘 덕에 과제와 아르바이트를 함께 지켰다.' },
              { id: 'scroll', text: '잠이 안 와 영상을 본다', result: '알람을 못 듣고 늦는다.', impact: [{ who: '아르바이트 동료', text: '일이 몰려 곤란해진다', tone: -1 }], ending: '과제는 냈지만 다음 날 약속이 무너졌다.' }] } },
          { id: 'keep', text: '분위기를 깨기 싫어 계속한다', result: '새벽 4시가 넘었다.', impact: [{ who: '서하', text: '과제를 못 낸다', tone: -1 }], ending: '마감을 놓치고 아침 아르바이트에도 늦었다. 감독해 줄 사람이 없으면 멈추는 것도 내 몫이다.' }] } },
      { id: 'later', text: '"과제 끝내고 11시 반에 할게"라고 답한다', result: '과제를 시작한다.', impact: [{ who: '친구', text: '조금 아쉬워한다', tone: 0 }],
        next: { text: '11시 반, 과제가 아직 조금 남았다. 친구가 다시 부른다.', choices: [
          { id: 'honest', text: '"오늘은 못 하겠어, 주말에 하자"고 보낸다', result: '과제를 내고 12시 반에 잠든다.', impact: [{ who: '친구', text: '주말 약속을 반긴다', tone: 1 }],
            next: { text: '한 달 뒤, 과제 점수와 성적이 나왔다.', choices: [
              { id: 'same', text: '마감 주에는 같은 원칙을 지키기로 한다', result: '다음 마감도 제때 낸다.', impact: [{ who: '서하', text: '생활 리듬이 자리 잡는다', tone: 1 }], ending: '원칙을 미리 정해 두면 그날그날 흔들리지 않는다.' },
              { id: 'drift', text: '이번엔 됐으니 다음엔 그때 가서 정한다', result: '다음 마감 전날 같은 고민이 돌아온다.', impact: [{ who: '서하', text: '매번 다시 흔들린다', tone: -1 }], ending: '한 번의 성공은 원칙이 아니다.' }] } },
          { id: 'rush', text: '과제를 대충 마무리해 내고 게임에 들어간다', result: '새벽까지 게임을 한다.', impact: [{ who: '서하', text: '과제 점수가 낮게 나온다', tone: -1 }], ending: '마감은 지켰지만 결과의 질을 내주었다.' }] } },
      { id: 'mute', text: '방해 금지를 켜고 과제부터 한다', result: '알림이 오지 않아 과제가 빨리 끝난다.', impact: [{ who: '서하', text: '자정에 과제를 낸다', tone: 1 }],
        next: { text: '자정, 과제를 다 냈다. 방해 금지를 끄니 초대가 와 있다.', choices: [
          { id: 'submit', text: '친구와 주말 약속을 잡고 잔다', result: '푹 자고 아침에 일어난다.', impact: [{ who: '서하', text: '과제·잠·친구를 모두 지킨다', tone: 1 }], ending: '환경을 먼저 바꾸면 의지에 덜 기대도 된다.' },
          { id: 'reward', text: '보상으로 새벽까지 게임을 한다', result: '다음 날 하루가 흐릿하다.', impact: [{ who: '서하', text: '잠을 잃는다', tone: -1 }], ending: '보상도 잠을 넘어서면 다음 날 값을 치른다.' }] } }] };
    const DEAD_R = [{ id: 'env', text: '방해 금지·장소 같은 환경을 먼저 바꾸면 덜 흔들린다' }, { id: 'move', text: '친구와의 약속은 마감 뒤로 옮길 수 있다' }, { id: 'adult', text: '성인이 되면 조절은 저절로 된다', why: '감독이 없어지면 조절은 오히려 내가 설계해야 해요.' }, { id: 'one', text: '"한 판만"이면 금방 끝난다', why: '\'한 판 더\'가 이어지기 쉬운 것이 문제였어요.' }];
    const TRIAL = { text: '내일 영상 구독 무료 체험이 끝나 자동 결제된다는 알림이 왔다. 서하는 이미 구독이 두 개 있다.', who: '서하', motif: 'coin', choices: [
      { id: 'leave', text: '그냥 둔다', result: '체험이 끝나고 자동 결제가 된다.', impact: [{ who: '서하', text: '구독이 세 개가 된다', tone: -1 }],
        next: { text: '한 달 뒤 결제 내역에 구독료가 세 번 찍혔다.', choices: [
          { id: 'review', text: '구독 목록을 보고 하나만 남긴다', result: '다음 달부터 지출이 줄어든다.', impact: [{ who: '서하', text: '늦게라도 정리한다', tone: 0 }], ending: '정리는 했지만 한 달 치는 이미 나갔다.' },
          { id: 'ignore', text: '작은 돈이니 그대로 둔다', result: '구독료가 매달 빠져나간다.', impact: [{ who: '서하', text: '식비가 빠듯해진다', tone: -1 }], ending: '작은 구독료도 모이면 생활비를 밀어낸다.' }] } },
      { id: 'cancel', text: '오늘 해지하고 달력에 결제일을 적는다', result: '자동 결제가 막힌다.', impact: [{ who: '서하', text: '지출을 스스로 고른다', tone: 1 }],
        next: { text: '다음 달, 보고 싶은 새 작품이 그 서비스에 올라왔다.', choices: [
          { id: 'swap', text: '다른 구독 하나를 끊고 한 달만 바꿔 쓴다', result: '구독은 두 개 그대로다.', impact: [{ who: '서하', text: '예산 안에서 즐긴다', tone: 1 }], ending: '구독은 늘리는 대신 바꿔 쓰면 예산이 지켜진다.' },
          { id: 'add', text: '세 개 모두 다시 구독한다', result: '구독이 또 세 개가 된다.', impact: [{ who: '서하', text: '처음 문제로 돌아간다', tone: -1 }], ending: '해지만으로는 부족하고, 다시 늘릴 때의 원칙이 필요하다.' }] } }] };
    const TRIAL_R = [{ id: 'sum', text: '작은 구독료도 모이면 생활비를 밀어낸다' }, { id: 'date', text: '결제일을 적어 두면 내가 고를 수 있다' }, { id: 'small', text: '한 달 만 원쯤은 신경 쓸 필요 없다', why: '하나는 작아도 세 개면 식비 며칠 치가 돼요.' }];

    MODS.push(
      M({
        id: 'intro.two-am', type: 'intro', title: '자취 첫해 새벽 두 시',
        method: '자취 첫해 새벽 두 시 사례', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 세 장(판단이 흔들린 순간)을 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 흔들린 순간을 학생이 고르고, 함정 두 장을 남긴 까닭을 말한다.', challenge: '고등학생 때와 달라진 조건(감독 없음·시간표가 비어 있음 등)을 분석해 말한다.' },
        intro: {
          teacher: '"가상 대학 신입생 서하는 혼자 산 지 두 달째예요. 과제 마감 전날 밤, 영상과 게임을 오가다 보니 새벽 두 시가 됐어요. 어느 순간에 판단이 흔들렸을까요?" 시연 단추로 흔들린 순간 카드가 바구니에 담기는 모습을 보여 준다. "어른이 되면 알아서 조절하게 돼요"라는 말이 나오면 "서하에게는 \'그만 자라\'고 말해 줄 사람이 없어요. 그럼 조절은 쉬워질까요, 어려워질까요?"라고 되묻는다. 오늘은 혼자 살 때 흔들리는 장면을 미리 판단해 나의 원칙을 세운다고 밝힌다.',
          student: '혼자 사는 첫해 마감 전날 밤, 새벽 두 시까지 영상과 게임을 오간 가상 신입생 서하의 장면을 읽고, 판단이 흔들린 순간을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '판단이 흔들린 순간', title: '서하의 새벽 두 시(가상)', shuffle: false, cards: [
            { id: 'next', text: '"한 편만" 하고 다음 영상을 누른 순간', motif: 'moon' }, { id: 'dinner', text: '저녁을 챙겨 먹은 순간', motif: 'sun' }, { id: 'invite', text: '친구의 게임 초대를 받은 순간', motif: 'star' },
            { id: 'notice', text: '과제 공지를 확인한 순간', motif: 'book' }, { id: 'close', text: '과제 파일을 열지 않고 닫은 순간', motif: 'cloud' }] }, sequence: [{ pick: ['next', 'invite', 'close'] }] },
          art: { draw: 'a small paper studio room at night, a desk with a closed laptop and an assignment sheet, a glowing phone and game controller on the bed, a wall clock showing 2:00', banner: '혼자 사는 첫해, 새벽 두 시' },
        },
        notes: '서하는 가상 인물이다. 학생에게 집에서의 밤 습관을 발표시키지 않는다.',
      }),
      M({
        id: 'intro.first-class', type: 'intro', title: '첫 수업 시각에서 거꾸로 세기',
        method: '첫 수업·출근 시각에서 거꾸로 계산', tool: 'clock', minutes: 6,
        levels: { easy: '교사가 기상 시각(7시 30분)만 함께 거꾸로 센다.', base: '기상 시각과 화면을 끌 시각(12시)을 시계에서 차례로 확인한다.', challenge: '우리 반 약속 7시간 수면과 수면 준비 30분을 넣어 계산한 과정을 짝에게 설명한다.' },
        intro: {
          teacher: '"서하의 첫 수업은 9시, 집에서 학교까지 50분, 씻고 준비하는 데 40분이 걸려요. 몇 시에 일어나야 할까요?" 함께 거꾸로 센 뒤 시연 단추로 7시 30분과 12시를 차례로 보여 준다. "자취하면 아침에 깨워 줄 사람이 없으니 알람만 여러 개 맞추면 돼요"라는 말이 나오면 "알람은 일어나는 시각을 지켜 주지만, 잠드는 시각은 누가 지켜 줄까요?"라고 되묻는다. 우리 반 약속 7시간과 수면 준비 30분을 넣으면 화면을 끌 시각이 나온다는 점을 짚는다.',
          student: '9시 첫 수업, 이동 50분, 준비 40분이에요. 서하가 일어날 시각과, 우리 반 약속(7시간 수면·잠들기 30분 전 화면 끄기)대로 화면을 끌 시각을 거꾸로 세어 보세요.',
          demo: { tool: 'clock', options: { minuteStep: 5 }, sequence: [{ h: 7, m: 30 }, { h: 12, m: 0 }] },
          art: { draw: 'a paper wall clock above a small paper calendar marked with a 9 o\'clock class, a paper bus on a winding road, a phone switched off on a nightstand', banner: '거꾸로 세어 정해요' },
        },
        notes: '\'7시간 수면·30분 전 화면 끄기\'는 의학 기준이 아니라 이 수업의 연습용 약속이다.',
      }),

      M({
        id: 'activity.month-budget', type: 'activity', title: '첫 달 생활비 속 디지털 지출',
        method: '첫 달 생활비 속 디지털 지출 배분', tool: 'economy', minutes: 12,
        levels: { easy: '둘째·셋째 문항의 물건 수가 5개로 줄고(구독 하나만 남음), 숫자 합계를 보며 푼다.', base: '물건 7~8개에서 식비·교통비·통신비·교재를 지키며 예산 50만 원 안에 고르고, 구독을 뺄 때의 변화를 견준다.', challenge: '숫자 합계가 맞힌 뒤에만 보이고(막대만 보임), 활동지에 구독을 하나씩 뺄 때의 변화로 내 원칙을 쓴다.' },
        activity: {
          title: '서하의 첫 달 생활비', tool: 'economy',
          teacher: '"서하의 한 달 생활비(가상)예요. 식비·교통비 같은 꼭 필요한 지출을 먼저 넣고 나면 남는 돈에서 구독과 게임 결제를 골라야 해요." 고를 때마다 막대가 어디까지 차는지 보게 한다. "구독료는 만 원대라 몇 개 해도 괜찮다"는 학생에게 "영상 구독 둘과 음악 구독을 더하면 얼마가 되나요? 그 돈이면 식비 며칠 치일까요?"라고 묻는다. 디지털 지출은 하나하나보다 모였을 때 다른 항목을 밀어낸다는 점을 짚는다.',
          task: '예산 막대 안에서 꼭 필요한 지출을 지키며 디지털 지출을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '한 달 예산 600,000원. 식비와 교통비는 꼭 넣고 고르세요.', toolOptions: { mode: 'budget', budget: 600000, items: pickW('food', 'game', 'bus', 'phone') }, target: { budget: { must: ['food', 'bus'] } }, difficulty: 0.2 },
            { prompt: '예산이 500,000원이에요. 식비·교통비·휴대전화 요금·교재는 꼭 넣고, 남는 돈 안에서 디지털 지출을 고르세요.', toolOptions: { mode: 'budget', budget: 500000, items: pickW('food', 'vodA', 'bus', 'game', 'phone', 'vodB', 'book') }, target: { budget: { must: ['food', 'bus', 'phone', 'book'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '예산이 500,000원이에요. 식비·교통비·휴대전화 요금·교재는 꼭 넣고 고르세요(물건 5개).', toolOptions: { items: pickW('food', 'vodA', 'bus', 'phone', 'book') } } } },
            { prompt: '예산이 480,000원으로 줄었어요. 꼭 필요한 넷은 지키고, 야식 배달은 빼고 구독은 남는 돈 안에서만 고르세요.', toolOptions: { mode: 'budget', budget: 480000, items: pickW('food', 'vodA', 'bus', 'music', 'phone', 'vodB', 'book', 'night') }, target: { budget: { must: ['food', 'bus', 'phone', 'book'], not: ['night'] } }, difficulty: 0.35,
              levels: { easy: { prompt: '예산이 480,000원으로 줄었어요. 꼭 필요한 넷은 지키고 야식 배달은 빼고 고르세요(물건 5개).', toolOptions: { items: pickW('food', 'bus', 'phone', 'book', 'night') } } },
              conclude: '꼭 필요한 지출을 먼저 넣고 남는 돈 안에서 구독을 고르면, 작은 구독료가 모여 생활비를 밀어내는 일을 막을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '구독을 하나씩 뺄 때 남는 돈의 변화를 쓰고, 내 구독 원칙을 한 줄로 정하세요.', columns: ['뺀 구독', '남는 돈의 변화'], cells: [['영상 구독 하나', ''], ['음악 구독', ''], ['내 원칙', '']] }] },
        notes: '금액은 모두 가상이다. 게임 결제는 지출 관리로만 다루며 특정 게임·결제 방식을 언급하지 않는다.',
      }),
      M({
        id: 'activity.deadline-path', type: 'activity', title: '마감 전날 밤 게임 초대 갈림길',
        method: '마감 전날 새벽 갈림길 결과 추적', tool: 'dilemma', minutes: 13,
        levels: { easy: '첫 갈림길 장면이 두 번의 선택으로 줄고 근거를 고른다.', base: '세 번 갈라지는 길을 끝까지 가서 근거를 고르고, 다른 길도 끝까지 가 보며, 무료 체험 결제 장면(갈림 두 번)을 푼다.', challenge: '같은 판으로 풀고, 활동지에 선택마다 미리 막을 환경 설계(방해 금지·장소·달력)를 쓴다.' },
        activity: {
          title: '마감 전날 밤 10시', tool: 'dilemma',
          teacher: '"서하에게 \'한 판만 같이 하자\'는 초대가 왔어요. 과제는 절반 남았어요. 여러분이라면 무엇을 누를까요?" 첫 선택 전에 세 길에 손을 들게 하고, 장면마다 다음 날 누가 영향을 받는지 소리 내어 읽게 한다. \'성인이 되면 조절은 저절로 된다\'를 근거로 고른 학생에게 "서하에게 \'그만하라\'고 말해 준 사람이 있었나요? 없을 때 조절은 누가 설계하죠?"라고 묻는다. 무료 체험 장면에서는 \'작은 돈이니 그대로 둔다\'를 고른 학생에게 한 달 예산 막대를 다시 떠올리게 한다.',
          task: '마감 전날 밤 갈림길을 따라가 다음 날과 한 달 뒤 결과를 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DILQ('마감 전날 밤 게임 초대에서 과제·잠·약속을 지키는 길을 끝까지 따라가고 근거를 고르세요.', DEAD, [['later', 'honest', 'same'], ['mute', 'submit'], ['join', 'stop', 'alarm']], DEAD_R, ['env', 'move'], { easyN: 2, d: 0.4 }),
            EXPLOREQ('같은 밤의 다른 길도 끝까지 가 보고 다음 날 결과를 견주세요.', DEAD, DEAD_R, ['다른 길의 끝 장면을 확인했다', '선택마다 누가 영향을 받는지 견주었다'], { d: 0.35 }),
            DILQ('무료 체험이 내일 끝나 자동 결제된다는 알림이 왔어요. 예산을 지키는 길을 고르고 근거를 고르세요.', TRIAL, [['cancel', 'swap']], TRIAL_R, ['sum', 'date'], { d: 0.4,
              more: { conclude: '혼자 사는 생활에서는 그날의 의지보다 미리 정한 환경(방해 금지·결제일 달력)과 원칙이 마감·잠·지출을 지켜 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '흔들리는 순간마다 미리 막을 환경 설계를 쓰세요.', columns: ['흔들리는 순간', '미리 막을 환경 설계'], cells: [['마감 전날 게임 초대', ''], ['자동 재생되는 다음 영상', ''], ['무료 체험 자동 결제', '']] }] },
        notes: '서하는 가상 인물이다. 특정 게임·결제 서비스 이름을 쓰지 않는다.',
      }),
      M({
        id: 'activity.career-map', type: 'activity', title: '희망 진로와 디지털 습관 잇기',
        method: '희망 진로와 디지털 습관 연결', tool: 'mindmap', minutes: 13,
        levels: { easy: '첫 문항이 두 가지(필요한 역량·흔들 수 있는 습관)에 카드 4장으로 줄어든다.', base: '세 가지에 카드 9장을 달고(진로와 무관한 함정 카드 1장은 남긴다), 습관마다 연습할 것을 짝지으며, 시작이 분명한 연습을 고른다.', challenge: '첫 문항에 카드 2장이 더해지고, 활동지에 내 진로로 가지마다 구체적 행동과 시작 날짜를 쓴다.' },
        activity: {
          title: '하랑이의 진로 지도', tool: 'mindmap',
          teacher: '"가상 친구 하랑이의 희망 진로는 영상 편집자예요. 이 일에 필요한 힘은 무엇이고, 지금의 어떤 습관이 그 힘을 흔들까요?" 카드를 달 때마다 "이 습관은 하랑이가 일할 때 어떤 장면에서 문제가 될까요?"라고 묻는다. "디지털 습관은 진로랑 상관없어요"라는 학생에게 "마감이 있는 일에서 작업 중 알림을 계속 확인하면 어떻게 될까요?"라고 되묻는다. 하랑이의 지도를 본보기로, 활동지에서는 내 진로로 같은 지도를 그리게 한다.',
          task: '하랑이의 진로 지도에 필요한 역량·흔들 수 있는 습관·연습할 것을 달고, 습관과 연습을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('하랑이(희망: 영상 편집자)의 진로 지도 가지에 카드를 다세요.', ['필요한 역량', '흔들 수 있는 습관', '지금부터 연습할 것'], [
              ['마감을 지키는 자기 관리', '오래 집중하는 힘', '정보가 맞는지 판단하는 힘'],
              ['작업 중 알림을 계속 확인함', '밤늦게 영상을 이어 봄', '검색 첫 결과만 믿음'],
              ['작업할 때 알림 묶어 받기', '밤 화면 끄는 시각 정하기', '자료 출처를 두 곳에서 확인하기'],
            ], { k: 2, es: 2, hard: [['동료와 일정을 맞추는 힘'], [], ['한 주 일정을 일요일에 미리 짜기']], traps: ['편집 프로그램을 많이 깔아 두기'], d: 0.3, opt: { topic: '하랑이의 희망 진로' } }),
            MATCHQ('흔들 수 있는 습관마다 지금부터 연습할 것을 짝지으세요.', [['작업 중 알림을 계속 확인함', '작업할 때 알림 묶어 받기'], ['밤늦게 영상을 이어 봄', '밤 화면 끄는 시각 정하기'], ['검색 첫 결과만 믿음', '자료 출처를 두 곳에서 확인하기']], { k: 2, extra: ['더 좋은 기기 사기'], d: 0.3, opt: { topic: '습관과 연습' } }),
            PICKQ('행동과 시작이 분명한 연습만 고르세요.', ['이번 주 월요일부터 밤 12시에 화면 끄기', '다음 과제부터 출처 두 곳 적기'], ['앞으로 열심히 하기', '언젠가 습관 고치기'], { d: 0.35, opt: { basket: '시작이 분명한 연습', topic: '연습 고르기' },
              more: { conclude: '진로에 필요한 힘은 지금의 디지털 습관에서 자라거나 흔들려요. 연습은 행동과 시작 날짜가 분명해야 시작돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 희망 진로로 지도를 그리고, 가지마다 구체적 행동과 시작 날짜를 쓰세요(진로를 정하지 않았다면 관심 분야로).', columns: ['가지', '내용', '구체적 행동', '시작 날짜'], cells: [['필요한 역량', '', '', ''], ['흔들 수 있는 습관', '', '', ''], ['지금부터 연습할 것', '', '', '']] }] },
        notes: '하랑이는 가상 인물이다. 학생의 진로를 발표시키지 않아도 되며, 진로를 정하지 않은 학생은 관심 분야로 쓰게 한다.',
      }),

      M({
        id: 'wrap.principles', type: 'wrap', title: '스무 살의 나에게 쓰는 원칙',
        method: '스무 살의 나에게 디지털 생활 원칙 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '교사가 문장 틀("스무 살의 나에게. 첫째, ~할 때는 ~한다")을 칠판에 적고 원칙 두 개부터 쓰게 한다.', base: '원칙 세 개를 쓰고 기준 세 항목을 스스로 점검한다.', challenge: '활동지에 원칙마다 깨질 상황과 대비책을 쓴다.' },
        wrap: {
          teacher: '"일 년 뒤 혼자 살게 될지도 모르는 스무 살의 나에게 편지를 써요. 오늘 서하에게서 본 장면 가운데 나에게도 올 것 같은 순간에 대비하는 원칙 세 가지예요." 쓰기 전에 기준표 세 항목을 함께 읽는다. "폰을 적게 쓰자"처럼 넓은 원칙을 쓴 학생에게 "마감 전날 밤 초대가 왔을 때, 그 원칙이 무엇을 하라고 알려 주나요?"라고 묻는다. 편지는 채점하지 않고 남에게 보여 주지 않아도 된다고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '스무 살의 나에게 디지털 생활 원칙 세 가지를 편지로 쓰세요.', minChars: 80, maxChars: 500, starter: '스무 살의 나에게. 첫째, ~할 때는 ~한다.', sample: '스무 살의 나에게. 첫째, 마감 전날 밤에는 방해 금지를 켜고 과제부터 한다. 둘째, 새 구독은 결제일을 달력에 적고 하나를 끊을 때만 더한다. 셋째, 편집 일을 하고 싶으니 작업할 때는 알림을 묶어 받는다.' }, prompt: '원칙 편지를 쓰고 기준표로 점검하세요.', target: { selfCheck: ['원칙마다 언제·무엇을 할지 구체적으로 썼다', '진로나 관심 분야와 이어지는 원칙이 있다', '혼자서도 지킬 수 있는 크기다'], sentences: [3, 8] }, difficulty: 0.3 },
            { type: 'choice', prompt: '"성인이 되면 스스로 조절이 저절로 된다"에 대한 가장 알맞은 말을 고르세요.', options: ['맞다, 나이가 들면 자연스럽게 된다', '감독이 없어지는 만큼 미리 원칙과 환경을 설계해야 한다', '조절은 원래 불가능하니 신경 쓸 필요 없다'], answer: 1, difficulty: 0.15, explain: '혼자 살면 \'그만하라\'고 말해 줄 사람이 없어요. 그래서 미리 정한 원칙과 환경이 더 중요해져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '스무 살의 나에게',
          items: [
            { type: 'short', prompt: '스무 살의 나에게 디지털 생활 원칙 세 가지를 쓰세요.' },
            { type: 'table', prompt: '원칙마다 깨질 상황과 대비책을 쓰세요.', columns: ['원칙', '깨질 상황', '대비책'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
          ],
          easy: { note: '"스무 살의 나에게. 첫째, ~할 때는 ~한다. 둘째, ~"', items: [{ type: 'short', prompt: '지킬 원칙 두 가지를 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.principle-line', type: 'wrap', title: '원칙 한 문장 완성',
        method: '원칙 한 문장 완성', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 앞 두 빈칸(마감 전날 밤·알림 끄고 과제부터)을 함께 채운다.', base: '빈칸 네 개를 학생이 모두 채운다.', challenge: '출구 글에 같은 모양으로 원칙 문장을 하나 더 지어 쓴다.' },
        wrap: {
          teacher: '"서하가 오늘 장면들을 겪고 정한 원칙이에요. \'마감 전날 밤에는 알림을 끄고 과제부터 하고, 새 구독 결제는 한 달 예산표를 보고 정한다.\' 이 원칙대로 빈칸을 채워 봐요." 카드를 채운 뒤 내 원칙 문장을 출구 글로 쓰게 한다. \'친구가 부를 때\'를 첫 빈칸에 넣은 학생에게 "서하가 가장 흔들린 때는 언제였죠?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'p1', label: '혼자 살아도 나는 ___에는' }, { id: 'p2', label: '___ 하고,' }, { id: 'p3', label: '___는' }, { id: 'p4', label: '___와 함께 정한다.' }], cards: ['마감 전날 밤', '알림을 끄고 과제부터', '새 구독 결제', '한 달 예산표', '친구가 부를 때', '기분'] }, prompt: '서하가 정한 원칙대로 문장의 빈칸을 채우세요.', target: { fill: { p1: '마감 전날 밤', p2: '알림을 끄고 과제부터', p3: '새 구독 결제', p4: '한 달 예산표' } }, difficulty: 0.2 },
            { type: 'short', prompt: '같은 모양으로 나의 원칙 문장을 하나 지어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 원칙 한 문장',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '혼자 살면 감독이 없으므로 미리 정한 ___과 환경이 나를 지킨다.', answer: '원칙' },
            { type: 'short', prompt: '"혼자 살아도 나는 ( )에는 ( )하고 ( )는 ( )와 함께 정한다" 모양으로 내 원칙을 쓰세요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
