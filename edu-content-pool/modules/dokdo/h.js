/* 창체 계기교육 독도교육 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 dokdo 고.
 * 근거: 교육부 「독도교육 활성화 계획」(2025.1.) — 학교급 공통 연 10시간 이상 권장(교과+창체 통합), 독도교육 내용체계(2011) 고등학교
 *   '독도 수호 의지'(수호 활동 현황·참여 방법·바람직한 영토관·역사관), sources/changche/research-days.md §2,
 *   그리고 같은 학년 단원 재료(lessons/units/g10·g11·g12-cc-dokdo.js — 외교부 독도 누리집·동북아역사재단 자료의 서술)에 있는 사료·연도만 쓴다.
 * 사료 인용은 짧게, 사료가 말한 만큼만. 국제법 개념(영토·영해 12해리·배타적 경제수역 200해리·실효적 지배)은 기초 수준.
 * 정치적 중립: 대한민국 정부의 공식 입장과 사료를 근거로 읽고 따지는 활동으로 하며, 현재 정치인·정당·현 정부 정책·외교 현안을 평가하지 않는다.
 * 상대국 정부의 주장은 '주장'으로 다루고 근거로 따진다. 상대국 국민을 탓하거나 미워하게 하는 말을 쓰지 않는다.
 * 그래프 수치 가운데 독도지킴이학교(초40·중40·고40)만 공식 자료이고, 나머지(모둠 점수·설문·공유 수·청중 점검)는 화면에 '가상·예시'로 밝힌다.
 * 주제 15개 × 8모듈 = 120모듈(체계도 계획 전부).
 *
 * 사람 확인: (발행 전 외교부 독도 누리집 dokdo.mofa.go.kr · 동북아역사재단 독도연구소 · 교육부 「2025 독도교육 활성화 계획」 원문으로 확인)
 *  - [g10-sources.*, g12-limit.*] 『세종실록』 「지리지」(1454) 서술을 '두 섬이 서로 멀지 않아 맑은 날 보인다고 적음'으로 줄여 씀 — 외교부 누리집 번역문과 대조.
 *  - [g10-sources.*, g12-limit.*] 안용복 진술(『숙종실록』, 1693년 무렵)·에도 막부 울릉도 도해 금지(1696)·태정관 지령(1877) 연도와 줄인 서술 — 외교부·동북아역사재단.
 *  - [g10-sources.activity.dil, g12-limit.*] 『신증동국여지승람』 「팔도총도」에 우산도가 울릉도 서쪽에 그려진 점(위치 한계) — 동북아역사재단.
 *  - [g10-intl.*, g12-limit.*] 카이로 선언(1943)의 '폭력과 탐욕으로 빼앗은 지역' 원칙을 '침탈로 빼앗긴 지역'으로 줄여 씀, 포츠담 선언(1945)이 그 조항 이행을 밝힌 점 — 외교부.
 *  - [g10-intl.*] 연합국 최고사령관 각서 제677호(1946.1.)·제1033호(1946.6., 일본 선박 접근 금지 수역)의 날짜와 줄인 서술 — 외교부.
 *  - [g10-intl.*, g10-explain.*] 샌프란시스코 강화조약(1951) 제2조 '제주도·거문도·울릉도를 포함하는 한국' 인용과 '한국의 섬 3천여 개 가운데 예시' 설명 — 외교부.
 *  - [g10-gov.*] 정부 기본 입장 문장(역사적·지리적·국제법적으로 명백한 고유 영토 / 영유권 분쟁 없음 / 외교 교섭·사법적 해결 대상 아님 / 도발에 단호·엄중 대응)과 '왜곡에 항의·오기 정정 요청' 표현 — 외교부 독도 누리집 원문 문장과 대조.
 *  - [g11-guard.*] 독도의용수비대(1950년대 울릉도 주민)의 임무가 경찰에 이어진 점, 독도경비대(경찰)·해양경찰·울릉군(울릉읍 독도리)·독도 등대·동북아역사재단 역할 — 외교부·경찰청·울릉군.
 *  - [g10-sov.*, g11-policy.*] 독도 전체가 천연기념물 천연보호구역이고 허가 없이 동식물을 채집할 수 없다는 점, 강치가 20세기 전반 무분별한 포획으로 사라진 점 — 국가유산청.
 *  - [g10-explain.*, g11-media.*] 외교부 누리집의 영어 표기(Dokdo·East Sea) — 외교부.
 *  - [g12-plan.*] 2025 계획 숫자(연 10시간 이상 권장·2014~ 권장·2016~ 독도교육주간·지킴이학교 120교·디지털 콘텐츠 15종 각 5차시·'독도 e-런' 15차시)와 '독도의 날(10.25) 비법정' — 교육부 계획서 원문(2026년 계획은 확인 못함).
 *  - [g11-media.activity.rules] 칙령의 영문 표기 'Imperial Ordinance' — 외교부 독도 누리집 영문판에서 확인(근거 파일에 없음).
 *  - [g12-video.intro.recall] 학년 카드(중1~고3 주제)는 lessons/units/g7~g12-cc-dokdo.js 단원 제목을 줄인 것 — 단원 재료와 대조.
 *  - [g11-act.activity.letter 등] 정정 요청문 예시 문구는 수업용 예시이며 실제 발송 전 교사가 검토한다. */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'dokdo', band: '고', topic: `dokdo.h.${topic}`, grades }, o, { id: `dokdo.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기(sort): groups = 칸마다 카드 글(글 = id). 쉬움 = 칸마다 앞 k장, 도전 = hard(칸마다 더할 카드). traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 분류판(sortboard 글 카드 모드): 쉬움 = 칸마다 앞 k장 + instant·showCount, 도전 = more(더할 카드, 함정 포함)
  const BOARDQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg), instant: true, showCount: true }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard.add[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length + (hard.traps || []).length}장`), toolOptions: { more: [...mix(hard.add.map((x) => x || [])), ...(hard.traps || [])] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 차례(order): steps = 바른 차례. sub = { easy: [쓸 카드 번호…], base: [...] } 처럼 단계마다 쓸 카드(차례 유지). 없으면 쉬움 = 앞 k장
  const ORDERQ = (prompt, steps, { k = 3, sub = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
    const pickOf = (ix) => ix.map((i) => steps[i]);
    const baseSteps = sub && sub.base ? pickOf(sub.base) : steps;
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: baseSteps.length, cards: lay(baseSteps, traps) }, opt), target: { order: baseSteps }, difficulty: d, levels: {} };
    const easy = sub && sub.easy ? pickOf(sub.easy) : (k < baseSteps.length ? baseSteps.slice(0, k) : null);
    if (easy) it.levels.easy = { prompt: pfx(prompt, `카드 ${easy.length}장`), toolOptions: { slots: easy.length, cards: lay(easy, []) }, target: { order: easy } };
    if (sub && sub.base && steps.length > baseSteps.length) it.levels.challenge = { prompt: pfx(prompt, `카드 ${steps.length}장`), toolOptions: { slots: steps.length, cards: lay(steps, traps) }, target: { order: steps } };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 짝(match): pairs = [[칸 글, 카드 글]…]. 쉬움 = 앞 k쌍, 도전 = extraHard(함정 카드 더하기)
  const MATCHQ = (prompt, pairs, { k = 3, extra = [], extraHard = null, d = 0.3, opt = {}, more = {} } = {}) => {
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([s, c]) => [s, c])) });
    const it = { prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p) => p[0]), cards: [...pairs.map((p) => p[1]).reverse(), ...extra] }, opt), target: t(pairs), difficulty: d, levels: {} };
    if (k < pairs.length) { const e = pairs.slice(0, k); it.levels.easy = { prompt: pfx(prompt, `${k}쌍`), toolOptions: { slots: e.map((p) => p[0]), cards: e.map((p) => p[1]).reverse() }, target: t(e) }; }
    if (extraHard) it.levels.challenge = { prompt: pfx(prompt, '함정 카드 더함'), toolOptions: { cards: [...pairs.map((p) => p[1]).reverse(), ...extra, ...extraHard] } };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 고르기(pick)
  const PICKQ = (prompt, good, bad, { d = 0.3, opt = {}, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'pick', cards: mix([good, bad]) }, opt), target: { pick: good }, difficulty: d }, more);
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
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };
  const AX = ['옛날', '오늘날'];
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };

  // 공식 자료(외교부 독도 누리집·동북아역사재단)의 사료 — 짧은 카드 글
  const SRC = {
    sejong: '1454 『세종실록』 「지리지」: 두 섬이 서로 보인다고 적음',
    ahn: '1693 무렵 안용복의 진술(『숙종실록』)',
    bakufu: '1696 에도 막부의 울릉도 도해 금지',
    dajokan: '1877 태정관 지령: 울릉도 외 한 섬은 일본과 무관',
    edict: '1900 대한제국 칙령 제41호: 석도를 울도군 관할로',
    shimane: '1905 시마네현 고시 제40호: 대한제국에 알리지 않은 편입',
    report: '1906 울도 군수 보고: "본군 소속 독도"',
    scapin: '1946 연합국 최고사령관 각서 제677호',
    peace: '1952 평화선 선언(인접 해양 주권)',
  };

  const MODS = [];

  // ======================================================================================================
  // 1. 사료의 시대 순서와 증거로서의 힘 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-sources', [10]);
    const LINE9 = [SRC.sejong, SRC.ahn, SRC.bakufu, SRC.dajokan, SRC.edict, SRC.shimane, SRC.report, SRC.scapin, SRC.peace];
    const CONFLICT = { text: '모둠 발표 준비 중. 「팔도총도」에는 우산도가 울릉도 서쪽에 그려져 있고, 『세종실록』 「지리지」는 두 섬이 서로 보인다고 적었다.', who: '모둠', motif: 'house', choices: [
      { id: 'hide', text: '위치가 다른 지도는 발표에서 슬쩍 뺀다', result: '발표 자료가 깔끔해 보인다.', impact: [{ who: '모둠', text: '당장은 편하다', tone: 0 }],
        next: { text: '질의 시간, 다른 모둠이 "팔도총도에서는 위치가 다르던데요?"라고 묻는다.', choices: [
          { id: 'deny', text: '그 지도는 잘못됐다고만 말한다', result: '질문한 모둠이 고개를 갸웃한다.', impact: [{ who: '모둠', text: '발표 전체의 믿음이 흔들린다', tone: -1 }], ending: '숨긴 한계는 상대가 먼저 찾아낸다.' },
          { id: 'late', text: '그제야 한계를 인정하고 다른 기록을 든다', result: '설명은 되지만 왜 처음에 빠졌는지 질문이 이어진다.', impact: [{ who: '모둠', text: '설득력이 조금 깎인다', tone: 0 }], ending: '한계는 질문받기 전에 밝힐 때 힘이 된다.' }] } },
      { id: 'cross', text: '지도의 위치 한계를 밝히고 다른 기록과 함께 쓴다', result: '발표에 "지도는 위치가 다르지만, 우산도라는 섬을 따로 알고 있었다"는 문장을 넣는다.', impact: [{ who: '모둠', text: '근거를 정직하게 다룬다', tone: 1 }],
        next: { text: '질의 시간, 다른 모둠이 "그럼 지도는 쓸모없는 것 아닌가요?"라고 묻는다.', choices: [
          { id: 'explain', text: '지도와 관찬 기록이 서로를 보완한다고 답한다', result: '두 사료가 어떻게 이어지는지 차례로 설명한다.', impact: [{ who: '듣는 모둠', text: '사료를 함께 읽는 법을 배운다', tone: 1 }],
            next: { text: '발표가 끝났다. 선생님이 "근거를 하나 더 붙인다면?"이라고 묻는다.', choices: [
              { id: 'edict', text: '1900년 칙령 제41호처럼 국가가 낸 근대 법령을 더한다', result: '조선 시대 인식에서 대한제국의 관할까지 흐름이 이어진다.', impact: [{ who: '모둠', text: '근거가 시대를 따라 단단해진다', tone: 1 }], ending: '한계를 밝힌 뒤 다른 사료로 보완하면 결론이 더 단단해진다.' },
              { id: 'feel', text: '"누가 봐도 우리 땅"이라는 말로 마무리한다', result: '듣는 모둠이 "그건 근거가 아니잖아요"라고 한다.', impact: [{ who: '모둠', text: '마지막에 설득력을 잃는다', tone: -1 }], ending: '마지막 문장도 근거로 끝내야 한다.' }] } },
          { id: 'drop', text: '그 말이 맞다며 지도를 빼 버린다', result: '조선이 우산도를 따로 알고 있었다는 근거 하나가 사라진다.', impact: [{ who: '모둠', text: '쓸 수 있던 근거를 잃는다', tone: -1 }], ending: '한계가 있는 사료도 다른 사료와 함께 쓰면 근거가 된다.' }] } },
      { id: 'map', text: '지도만 크게 띄우고 "옛 지도에도 있다"고 말한다', result: '위치가 다른 부분이 화면에 크게 보인다.', impact: [{ who: '모둠', text: '반박받기 쉬운 자리에 선다', tone: -1 }], ending: '사료 하나에 기대면 그 사료의 한계가 곧 내 주장의 한계가 된다.' }] };
    const CONFLICT_R = [{ id: 'limit', text: '사료의 한계를 먼저 밝히면 오히려 믿음이 커진다' }, { id: 'cross', text: '종류가 다른 사료를 함께 읽으면 결론이 단단해진다' }, { id: 'hideit', text: '불리한 사료는 숨기는 편이 낫다', why: '숨긴 한계는 상대가 찾아내고, 그때는 발표 전체를 의심받아요.' }, { id: 'one', text: '오래된 지도 한 장이면 충분하다', why: '지도는 위치·크기가 실제와 다를 수 있어 다른 기록과 함께 봐야 해요.' }];
    const AHN = { text: '친구가 "안용복 이야기가 제일 재미있으니 발표는 그것 하나로 하자"고 한다. 안용복의 말은 『숙종실록』에 남은 진술이다.', who: '친구', motif: 'house', choices: [
      { id: 'only', text: '안용복 진술 하나로 발표를 짠다', result: '이야기는 흥미롭지만 "개인의 말 아닌가요?"라는 질문을 받는다.', impact: [{ who: '모둠', text: '반박에 답할 근거가 모자라다', tone: -1 }], ending: '개인 진술만으로는 국가의 판단을 보여 주기 어렵다.' },
      { id: 'pair', text: '진술과 함께 1696년 막부의 도해 금지 같은 공식 결정을 든다', result: '개인의 말과 정부 사이의 결정이 함께 이어진다.', impact: [{ who: '모둠', text: '이야기와 근거를 모두 갖춘다', tone: 1 }],
        next: { text: '발표 문장을 쓰다가 친구가 "안용복이 장군이었다고 쓰면 더 멋있겠다"고 한다.', choices: [
          { id: 'fact', text: '기록대로 숙종 때의 어부라고 쓴다', result: '사실과 다른 곳이 없는 발표문이 된다.', impact: [{ who: '모둠', text: '반박받을 틈이 줄어든다', tone: 1 }], ending: '사료가 말한 만큼만 쓰는 것이 가장 강한 발표다.' },
          { id: 'hero', text: '장군이라고 부풀려 쓴다', result: '사실 확인에서 틀린 문장이 나온다.', impact: [{ who: '모둠', text: '다른 근거까지 의심받는다', tone: -1 }], ending: '부풀린 한 문장이 나머지 근거의 믿음까지 깎는다.' }] } }] };
    const AHN_R = [{ id: 'state', text: '개인 진술은 공식 문서와 함께 들 때 힘이 커진다' }, { id: 'exact', text: '사료가 말한 만큼만 쓴다' }, { id: 'fun', text: '재미있는 이야기가 가장 강한 근거다', why: '흥미와 증거의 힘은 다른 기준이에요.' }];

    MODS.push(
      M({
        id: 'intro.recall', type: 'intro', title: '아는 사료 모두 꺼내기',
        method: '아는 사료 모두 꺼내기', tool: 'wordcards', minutes: 6,
        levels: { easy: '사료 카드 8장 가운데 앞 4장(조선 시대)만 함께 읽고 아는지 나눈다.', base: '앞 6장까지 읽고 아는 것·처음 보는 것으로 나눈다.', challenge: '8장 모두 나누고, 처음 보는 카드 하나에 "누가 만든 기록일까"를 어림해 말한다.' },
        intro: {
          teacher: '"중학교에서 독도 사료를 몇 가지나 배웠는지 꺼내 볼까요? 정확한 연도보다 \'들어 본 적 있다\'가 오늘의 출발점이에요." 카드를 한 장씩 읽고 손을 들어 아는지 표시하게 한 뒤, 시연 단추로 카드가 \'알아요\'와 \'처음 봐요\'에 나뉘는 모습을 보여 준다. "칙령 제41호에 독도라는 이름이 그대로 적혀 있다"는 말이 나오면 "칙령에 적힌 섬 이름은 무엇이었을까요?"라고 되물어 \'석도\'를 짚는다. 처음 보는 카드가 많아도 괜찮고, 오늘은 이 카드들을 시대 순으로 놓고 증거로서의 힘을 따진다고 밝힌다.',
          student: '사료 카드를 읽고 내가 아는 것과 처음 보는 것으로 나누어 보세요. 아는 카드는 무엇을 보여 주는 기록인지 한 마디로 떠올려 봐요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['알아요', '처음 봐요'], cards: [SRC.sejong, SRC.ahn, SRC.bakufu, SRC.dajokan, SRC.edict, SRC.report, SRC.scapin, SRC.peace] }, sequence: [{ sort: { 알아요: [SRC.sejong, SRC.edict, SRC.ahn], '처음 봐요': [SRC.bakufu, SRC.dajokan, SRC.report, SRC.scapin, SRC.peace] } }] },
          art: { draw: 'a row of old paper documents and scrolls laid out on a desk, some with paper bookmarks sticking out, a small paper island of two rocky peaks in the background sea', banner: '내가 아는 독도 사료', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '시연의 나눔은 예시일 뿐이다. 아는 정도는 학생마다 다르므로 나눈 결과를 평가하지 않는다.',
      }),
      M({
        id: 'intro.claim', type: 'intro', title: '"지도 한 장이면 끝" 주장에 반응하기',
        method: '"지도 한 장이면 끝" 주장 반응', tool: 'emotion', minutes: 6,
        levels: { easy: '앞 두 주장에만 반응 카드를 짝짓는다.', base: '세 주장 모두에 반응 카드를 짝짓는다.', challenge: '짝지은 반응마다 "왜 그렇게 반응했는지" 까닭을 한 마디로 붙인다.' },
        intro: {
          teacher: '"\'옛 지도 한 장이면 영토 문제는 끝난다.\' 이 말을 들으면 여러분은 어떤 반응이 먼저 드나요?" 세 주장을 차례로 읽고 바로 믿기·근거를 더 찾기·믿기 어렵다 가운데 고르게 한 뒤, 시연 단추로 한 가지 짝 짓기를 보여 준다. 시연은 정답이 아니라는 점을 먼저 밝힌다. "오래된 기록일수록 무조건 강하다"를 바로 믿는 학생이 있으면 "오래됐지만 위치가 실제와 다르게 그려졌다면요?"라고 되묻는다. 사료는 하나가 아니라 종류와 힘이 다른 여러 장을 함께 읽는 것이라는 점을 오늘의 질문으로 남긴다.',
          student: '세 주장을 읽고, 각 주장에 대한 내 반응(바로 믿는다·근거를 더 찾는다·믿기 어렵다)을 짝지어 보세요. 정답은 없어요.',
          demo: { tool: 'emotion', options: { mode: 'match', weather: false, slots: ['옛 지도 한 장이면 영토가 정해진다', '사료는 여러 종류를 함께 봐야 한다', '오래된 기록일수록 무조건 강하다'], cards: ['근거를 더 찾는다', '바로 믿는다', '믿기 어렵다'] }, sequence: [{ match: { '옛 지도 한 장이면 영토가 정해진다': '근거를 더 찾는다', '사료는 여러 종류를 함께 봐야 한다': '바로 믿는다', '오래된 기록일수록 무조건 강하다': '믿기 어렵다' } }] },
          art: { draw: 'a single old paper map pinned to a board with a big question mark, surrounded by smaller paper documents, a laws scroll and a letter waiting to be added', banner: '지도 한 장이면 끝일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '반응을 채점하지 않는다. 학생이 왜 그렇게 반응했는지 듣고, 수업 끝 정리 모듈에서 생각이 바뀌었는지 다시 묻는다.',
      }),

      M({
        id: 'activity.line', type: 'activity', title: '1454~1952 사료 시간 띠',
        method: '1454~1952 사료 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '시간 띠 카드 5장을 놓고, 놓을 때마다 맞는지 바로 보인다.', base: '카드 7장을 놓고 확인하며, 사료마다 보여 주는 것을 짝짓는다.', challenge: '카드 9장(시마네현 고시 포함)을 놓고, 활동지에 칙령이 고시보다 앞선 뜻을 설명한다.' },
        activity: {
          title: '사료를 시대 순으로', tool: 'timeline',
          teacher: '"카드를 놓을 때마다 이 기록을 만든 쪽이 누구인지 소리 내어 말해 봐요 — 조선 왕조, 일본 정부, 대한제국, 연합국." 태정관 지령을 막부 도해 금지보다 앞에 두는 학생에게 "태정관은 메이지 정부의 기관이에요. 막부가 먼저일까요, 메이지 정부가 먼저일까요?"라고 묻는다. 시마네현 고시를 칙령 제41호보다 앞에 두는 학생이 많으니, 다 놓은 뒤 "칙령이 5년 앞선다는 것이 왜 중요할까요?"를 함께 짚는다. 연도는 공식 자료에 있는 것만 말하게 한다.',
          task: '사료 카드를 일어난 차례대로 놓고, 사료마다 보여 주는 것을 이어요.', levels: LV,
          items: [
            ORDERQ('독도 관련 사료를 시대 순으로 시간 띠에 놓으세요.', LINE9, { sub: { easy: [0, 3, 4, 7, 8], base: [0, 1, 2, 3, 4, 7, 8] }, d: 0.3, opt: { axis: AX }, more: { hints: ['카드 앞의 연도와, 그 기록을 만든 나라·정부가 언제 있었는지를 함께 떠올려요.'] } }),
            MATCHQ('연도 눈금에 그 해의 사료가 보여 주는 것을 이으세요.', [['1454년', '조선이 두 섬을 알고 있었다는 지리 인식'], ['1877년', '일본 정부가 한 섬을 일본과 무관하다고 판단'], ['1900년', '대한제국이 근대 법령으로 석도를 관할'], ['1946년', '연합국이 독도를 일본 통치 범위에서 제외']], { k: 3, extraHard: ['독도에 사람이 살았다는 기록', '조약으로 독도를 새로 얻었다는 기록'], d: 0.35, opt: { axis: AX }, more: { hints: ['카드 글이 그 사료가 실제로 말한 만큼만인지 따져요.'] } }),
            SORTQ('사료 카드를 만든 때에 따라 시대 칸에 나누세요.', ['조선 시대', '대한제국', '광복 뒤'], [[SRC.sejong, SRC.ahn], [SRC.edict, SRC.report], [SRC.scapin, SRC.peace]], { k: 1, d: 0.3, opt: { axis: AX }, more: { conclude: '독도를 알고 관할하고 지켜 온 기록은 조선에서 대한제국, 광복 뒤까지 시대마다 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '1900년 칙령 제41호가 1905년 시마네현 고시보다 앞선다는 점이 왜 중요한지 한두 문장으로 쓰세요.' }] },
        notes: '시마네현 고시는 우리 쪽 기록이 아니라 일본 정부 쪽의 편입 주장 문서임을 분명히 한다. 연도는 외교부·동북아역사재단 서술에 있는 것만 쓴다.',
      }),
      M({
        id: 'activity.weight', type: 'activity', title: '사료 종류별 증거력 매기기',
        method: '사료 종류별 증거력 매기기', tool: 'chart', minutes: 18,
        levels: { easy: '사료 종류 3가지의 예시 점수로 막대를 만들고, 막대 끝에 값이 보인다.', base: '사료 종류 4가지로 막대를 만들고, 점수를 그렇게 매긴 까닭을 고른다.', challenge: '값 표시 없이 풀고, 활동지에 가장 높은 종류의 한계를 한 문장으로 쓴다.' },
        activity: {
          title: '모둠 A의 증거력 점수 읽기', tool: 'chart',
          teacher: '"이 점수는 정답이 아니라 모둠 A가 기준표(누가 만들었나·그 시대 기록인가·대상이 분명한가)로 매긴 예시예요. 우리는 점수보다 까닭을 따져요." 개인 여행기나 진술을 가장 힘센 증거로 두는 학생에게 "개인의 기록이 나라의 뜻을 보여 줄 수 있을까요?"라고 묻는다. 지도를 "그림이라서 의미 없다"고 하는 학생에게는 지도도 의미가 있지만 정확성과 국가가 만든 것인지를 함께 봐야 한다고 말해 준다. 태정관 지령이 왜 강한지 묻고, 상대국 정부가 자기에게 불리한 판단을 스스로 남긴 문서라는 점을 짚는다.',
          task: '예시 점수로 막대그래프를 만들고, 점수의 까닭을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '모둠 A가 매긴 예시 점수(5점 만점)로 사료 종류별 막대를 완성하세요.', toolOptions: { type: 'bar', mode: 'build', title: '사료 종류별 증거력(모둠 A 예시 점수)', unit: '점', xLabel: '사료 종류', yLabel: '예시 점수', max: 5, data: [['법령', 5], ['외교 문서', 5], ['관찬 사서', 4], ['지도', 3]] }, target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '모둠 A가 매긴 예시 점수(5점 만점)로 사료 종류 3가지의 막대를 완성하세요.', toolOptions: { data: [['법령', 5], ['관찬 사서', 4], ['지도', 3]] } } } },
            { prompt: '모둠 A가 가장 낮게 매긴 사료 종류를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '사료 종류별 증거력(모둠 A 예시 점수)', unit: '점', xLabel: '사료 종류', yLabel: '예시 점수', max: 5, data: [['법령', 5], ['외교 문서', 5], ['관찬 사서', 4], ['지도', 3], ['개인 기록', 2]], question: '가장 낮은 막대는?', choices: ['법령', '외교 문서', '관찬 사서', '지도', '개인 기록'], why: ['가장 높은 막대 가운데 하나예요.', '가장 높은 막대 가운데 하나예요.', '중간쯤 막대예요.', '개인 기록보다 높아요.', ''] }, target: { pick: 4 }, difficulty: 0.15 },
            { prompt: '모둠 A가 개인 기록을 가장 낮게 매긴 까닭으로 알맞은 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '사료 종류별 증거력(모둠 A 예시 점수)', unit: '점', xLabel: '사료 종류', yLabel: '예시 점수', max: 5, data: [['법령', 5], ['외교 문서', 5], ['관찬 사서', 4], ['지도', 3], ['개인 기록', 2]], question: '개인 기록이 낮은 까닭은?', choices: ['개인의 말은 나라의 판단을 보여 주기 어려워서', '개인 기록은 모두 거짓이라서', '글씨가 오래되어 읽기 어려워서'], why: ['', '거짓이라는 뜻이 아니라, 국가의 뜻을 보여 주지 못한다는 뜻이에요.', '읽기 어려움은 증거의 힘과 다른 문제예요.'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '지도를 법령보다 낮게 매긴 까닭으로 알맞은 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '사료 종류별 증거력(모둠 A 예시 점수)', unit: '점', xLabel: '사료 종류', yLabel: '예시 점수', max: 5, data: [['법령', 5], ['외교 문서', 5], ['관찬 사서', 4], ['지도', 3], ['개인 기록', 2]], question: '지도가 법령보다 낮은 까닭은?', choices: ['그림이라서 아무 의미가 없어서', '위치·크기가 실제와 다를 수 있어 다른 기록과 함께 봐야 해서', '색이 바래서'], why: ['지도도 그 시대의 인식을 보여 주는 의미 있는 자료예요.', '', '색은 증거의 힘과 관계없어요.'] }, target: { pick: 1 }, difficulty: 0.35, conclude: '증거의 힘은 누가, 어떤 자격으로, 얼마나 분명하게 남겼는지에서 나와요. 한계가 있으면 다른 사료로 보완해요.' },
            { prompt: '외교 문서 가운데 1877년 태정관 지령이 특히 강한 근거로 꼽히는 까닭을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '사료 종류별 증거력(모둠 A 예시 점수)', unit: '점', xLabel: '사료 종류', yLabel: '예시 점수', max: 5, data: [['법령', 5], ['외교 문서', 5], ['관찬 사서', 4], ['지도', 3], ['개인 기록', 2]], question: '태정관 지령이 강한 까닭은?', choices: ['상대국 정부가 자기에게 불리한 판단을 스스로 남겨서', '가장 오래된 기록이라서', '그림이 함께 있어서'], why: ['', '1454년 『세종실록』 「지리지」가 더 오래됐어요.', '그림 여부는 까닭이 아니에요.'] }, target: { pick: 0 }, difficulty: 0.4 },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 높게 매긴 사료 종류(법령) 하나를 골라, 그 사료만으로는 말할 수 없는 한계를 한 문장으로 쓰세요.' }] },
        notes: '점수는 모둠 기준표로 매긴 수업용 예시이며 학계·정부가 정한 값이 아니다. 화면 제목에 \'예시 점수\'로 밝힌다.',
      }),
      M({
        id: 'activity.dil', type: 'activity', title: '사료가 서로 다르게 말할 때',
        method: '사료가 서로 다르게 말할 때', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 하나에서 고르고 결과를 본 뒤 근거를 고른다.', base: '갈림길 둘을 지나 질의 장면의 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 결과를 따라가고, 다른 길과 견준다.' },
        activity: {
          title: '엇갈리는 사료 앞의 갈림길', tool: 'dilemma',
          teacher: '"두 사료가 서로 다르게 말할 때, 불리한 쪽을 숨기는 것과 한계를 밝히는 것 가운데 어느 쪽이 더 설득력 있을까요?" 선택마다 듣는 모둠이 어떻게 반응하는지 소리 내어 읽게 한다. \'슬쩍 뺀다\'를 고른 학생에게 "질의 시간에 그 지도를 누가 먼저 꺼냈나요?"라고 묻는다. 안용복 진술을 다룰 때는 \'장군\'으로 부풀리는 오개념을 짚고, 기록대로 숙종 때 어부였다고 말하게 한다. 사료를 과장하지 않는 것이 오히려 설득력을 높인다는 점을 강조한다.',
          task: '사료가 엇갈리는 상황의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지도와 관찬 기록이 엇갈리는 발표 준비에서 근거를 정직하게 다루는 길을 고르고, 근거를 고르세요.', CONFLICT, [['cross', 'explain', 'edict']], CONFLICT_R, ['limit', 'cross'], { d: 0.4 }),
            EXPLOREQ('고르지 않은 다른 길도 끝까지 가 보고, 질의 장면의 결과를 견주세요.', CONFLICT, CONFLICT_R, ['다른 길의 질의 장면 결과를 확인했다', '숨긴 한계가 어떻게 드러났는지 짚었다'], { d: 0.35 }),
            DILQ('안용복 진술 하나로 발표하자는 친구에게 알맞은 길을 고르고 근거를 고르세요.', AHN, [['pair', 'fact']], AHN_R, ['state', 'exact'], { d: 0.35, more: { conclude: '개인 진술은 공식 문서와 함께, 사료가 말한 만큼만 쓸 때 힘이 생겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '한계가 있는 사료를 발표에 쓸 때 덧붙일 문장을 하나 쓰세요(예: "이 지도는 위치가 다르지만, ~").' }] },
        notes: '「팔도총도」의 우산도 위치(울릉도 서쪽)는 동북아역사재단 서술을 따른다(사람 확인 목록). 안용복은 숙종 때(1693년 무렵) 어부로만 소개한다.',
      }),
      M({
        id: 'activity.brief', type: 'activity', title: '사료 분석 보고서',
        method: '사료 분석 보고서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '작성 주체·목적, 증거력, 한계 네 항목을 세 칸에 나눠 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 한계 칸에서 예상 반론에 답한다.' },
        activity: {
          title: '칙령 제41호 분석 보고서', tool: 'rubric-writing',
          teacher: '"보고서는 \'우리 땅이니까\'로 끝나는 글이 아니라, 이 사료를 누가 왜 만들었고 무엇을 말하며 무엇은 말하지 않는지를 쓰는 글이에요." 칙령 제41호를 예로 함께 읽는다. "칙령으로 독도에 군청을 세웠다"고 쓰는 학생에게 군청은 울릉도에 두었고 독도(석도)는 관할 구역이었다는 점을 짚는다. 한계 칸을 비우는 학생에게는 "칙령에 적힌 섬 이름 \'석도\'가 독도라는 것은 무엇으로 뒷받침할까요?"라고 물어 1906년 울도 군수 보고 같은 다른 사료를 떠올리게 한다.',
          task: '사료 하나(칙령 제41호)를 골라 보고서 칸을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('칙령 제41호의 작성 주체와 목적을 2~3문장으로 쓰세요.', '1900년 대한제국 칙령 제41호: 누가, 무엇을 하려고 만든 문서인지 쓰세요.', ['만든 주체(대한제국 정부)를 썼다', '무엇을 정한 문서인지 썼다', '사료에 없는 말을 덧붙이지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['대한제국', '정부']], starter: '칙령 제41호는 1900년 대한제국 정부가 ~', plus: '공포한 방식(관보)을 썼다', d: 0.35 }),
            RWQ('칙령 제41호가 증거로서 힘을 갖는 까닭을 2~3문장으로 쓰세요.', '칙령 제41호가 독도 영유의 근거로서 힘을 갖는 까닭을 쓰세요.', ['국가가 낸 근대 법령이라는 점을 썼다', '시마네현 고시(1905)보다 앞선다는 점을 썼다', '까닭을 두 가지 이상 들었다'], { min: 40, max: 300, sent: [2, 3], must: [['법령', '칙령']], starter: '이 칙령은 ~이기 때문에 힘이 있다.', plus: '공개적으로 알렸다는 점을 썼다', d: 0.4 }),
            RWQ('칙령 제41호만으로 말할 수 없는 한계와 보완할 사료를 2~3문장으로 쓰세요.', '칙령에 적힌 이름은 \'석도\'다. 이 사료의 한계와, 그것을 보완하는 다른 사료를 쓰세요.', ['칙령에 적힌 섬 이름이 석도라는 점을 썼다', '보완할 사료를 하나 이상 들었다', '한계를 숨기지 않고 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['석도']], starter: '칙령에는 독도가 아니라 석도라고 적혀 있어서 ~', plus: '"석도는 독도가 아니다"라는 반론에 답했다', d: 0.45, more: { conclude: '한계를 쓰고 다른 사료로 보완한 보고서가 반론을 가장 잘 견뎌요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '보고서 네 항목을 정리하세요.', columns: ['항목', '칙령 제41호'], cells: [['작성 주체', ''], ['목적', ''], ['증거로서의 힘', ''], ['한계와 보완 사료', '']] }] },
        notes: '군청은 울릉도(태하동)에 두었고 독도는 관할 구역이었다(단원 재료 서술). 석도=독도를 뒷받침하는 자료로는 1906년 울도 군수 보고 등을 든다.',
      }),

      M({
        id: 'wrap.seminar', type: 'wrap', title: '모둠 사료 세미나',
        method: '모둠 사료 세미나', tool: 'timer', minutes: 8,
        levels: { easy: '교사가 시간을 재고 모둠은 3분 발표만 한다.', base: '3분 발표 뒤 1분 질의를 받는다.', challenge: '질의 때 듣는 모둠이 반론 하나를 제기하고 발표 모둠이 근거로 답한다.' },
        wrap: {
          teacher: '"모둠마다 사료 하나를 맡아 3분 동안 주체·내용·힘·한계를 발표해요. 발표 뒤 1분은 질의예요." 교사가 타이머로 발표와 질의를 번갈아 진행하고, 오늘은 두 모둠만 발표하고 나머지는 다음 시간에 잇는다. 질의에서 "그 사료로 독도에 사람이 살았다는 것도 알 수 있나요?"처럼 사료를 넘어선 질문이 나오면, 발표 모둠이 "사료가 말한 만큼만 말하겠다"고 답하게 한다. 발표가 감정적인 표현으로 흐르면 근거 문장으로 바꿔 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '사료 세미나 시간', labels: ['발표', '질의'], timeUnit: 'min', plan: { work: 2, rest: 2, rounds: 1 } }, prompt: '두 모둠이 3분 발표하고 그 사이 1분 질의를 하도록 타이머를 맞추세요.', target: { plan: { work: 3, rest: 1, rounds: 2 } }, difficulty: 0.2 },
            { type: 'choice', prompt: '세미나 질의에서 가장 알맞은 답은 무엇인가요?', options: ['모르는 것은 확인해 보겠다고 말한다', '확인하지 않은 연도를 그럴듯하게 댄다', '질문한 모둠이 틀렸다고 말한다'], answer: 0, difficulty: 0.15, explain: '확인하지 않은 숫자를 대면 나머지 근거까지 의심받아요. 모르는 것은 확인하겠다고 말하는 것이 믿음을 지켜요.' },
            { type: 'short', prompt: '오늘 들은 발표 가운데 사료의 한계를 가장 잘 밝힌 문장을 하나 옮겨 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '사료 세미나 기록',
          items: [
            { type: 'table', prompt: '발표를 듣고 기록하세요.', columns: ['모둠', '맡은 사료', '힘', '한계'], cells: [['1모둠', '', '', ''], ['2모둠', '', '', '']] },
            { type: 'short', prompt: '내가 던진(또는 던지고 싶은) 질문 하나를 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다. 8분 안에 두 모둠만 하고, 나머지 모둠은 다음 차시 도입에 잇는다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '사료의 힘과 한계 정리',
        method: '사료 힘·한계 정리', tool: 'sortboard', minutes: 8,
        levels: { easy: '교사가 카드 3장을 먼저 함께 읽고 넣어 보인 뒤 나머지를 넣는다.', base: '카드 6장을 스스로 힘·한계 바구니에 넣는다.', challenge: '다 넣은 뒤 한계 카드 하나를 골라 보완할 사료를 말한다.' },
        wrap: {
          teacher: '"오늘 본 사료마다 무엇을 말하고 무엇은 말하지 않나요? 카드를 힘과 한계 바구니에 나눠 봐요." 「지리지」를 "독도에 사람이 살았다는 증거"로 이해한 학생에게는 원문이 말하는 것은 두 섬이 보인다는 지리 인식이라고 바로잡는다. 한계가 있는 사료를 "쓸모없다"고 하는 학생에게는 다른 사료와 교차하면 결론이 단단해진다는 점을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['힘', '한계'], cards: ['「지리지」: 조선 정부가 엮은 관찬 기록이다', '「지리지」: 두 섬이 보인다는 인식까지만 말한다', '칙령 제41호: 국가가 관보로 알린 근대 법령이다', '칙령 제41호: 적힌 이름이 독도가 아니라 석도다', '안용복 진술: 당시 일을 생생하게 전한다', '안용복 진술: 한 개인의 말이다'] }, prompt: '사료 설명 카드를 힘과 한계 바구니에 나누세요.', target: { sort: { 힘: ['「지리지」: 조선 정부가 엮은 관찬 기록이다', '칙령 제41호: 국가가 관보로 알린 근대 법령이다', '안용복 진술: 당시 일을 생생하게 전한다'], 한계: ['「지리지」: 두 섬이 보인다는 인식까지만 말한다', '칙령 제41호: 적힌 이름이 독도가 아니라 석도다', '안용복 진술: 한 개인의 말이다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '한계가 있는 사료를 다룰 때 가장 알맞은 태도는 무엇인가요?', options: ['한계는 숨기고 힘만 말한다', '한계를 밝히고 다른 사료로 보완한다', '한계가 있으면 쓰지 않는다'], answer: 1, difficulty: 0.15, explain: '한계를 먼저 밝히고 다른 사료와 교차해 보완하면 결론이 더 단단해져요.' },
            { type: 'short', prompt: '수업 처음의 "지도 한 장이면 끝"이라는 말에 지금 내 생각을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '사료의 힘과 한계',
          items: [
            { type: 'table', prompt: '사료 둘의 힘과 한계를 정리하세요.', columns: ['사료', '힘', '한계'], cells: [['『세종실록』 「지리지」', '', ''], ['칙령 제41호', '', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사료는 그 사료가 ___ 만큼만 말하고, 한계는 다른 사료로 보완한다.', answer: '말한' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 2. 주권 범위와 주권 행사 조건 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-sov', [10]);
    const SEA = []; for (let c = 0; c < 7; c++) for (let r = 0; r < 5; r++) if (!(c === 3 && r === 2)) SEA.push([c, r]);
    const RING = [[2, 1], [3, 1], [4, 1], [2, 2], [4, 2], [2, 3], [3, 3], [4, 3]];
    const ZONE = { grid: [7, 5], title: '독도 둘레 칸 지도(줄인 그림)', places: [{ name: '독도', icon: 'island', at: [3, 2] }], sea: SEA, regions: [{ name: '영해(기선에서 12해리)', cells: RING, color: 'sky' }] };
    const COND = { text: '사례 1: 1900년 대한제국은 칙령 제41호로 석도를 울도군 관할로 정하고 관보에 실었다.', who: '판정단', motif: 'house', choices: [
      { id: 'open', text: '관보에 실었으니 공개적 행사다', result: '누구나 볼 수 있게 알린 국가의 행위로 판정한다.', impact: [{ who: '판정', text: '공개성 조건을 확인한다', tone: 1 }],
        next: { text: '사례 2: 1906년 울도 군수가 "본군 소속 독도"라고 중앙 정부에 보고했다.', choices: [
          { id: 'cont', text: '관할이 이어지고 있었다는 흔적이다', result: '칙령 뒤에도 지방 관리가 독도를 소속으로 다뤘다고 판정한다.', impact: [{ who: '판정', text: '계속성 조건을 확인한다', tone: 1 }],
            next: { text: '사례 3: 오늘 독도에는 경찰인 독도경비대가 머물며 경비한다.', choices: [
              { id: 'peace', text: '평화적·계속적으로 권한을 행사하는 것이다', result: '경찰이 자기 영토의 치안을 맡는 일로 판정한다.', impact: [{ who: '판정', text: '세 조건이 오늘까지 이어진다', tone: 1 }], ending: '1900년부터 오늘까지 평화적·계속적·공개적인 주권 행사가 이어진다.' },
              { id: 'force', text: '힘으로 섬을 차지한 것이다', result: '판정단 안에서 "군대가 아니라 경찰인데요?"라는 반론이 나온다.', impact: [{ who: '판정', text: '평화적 조건을 잘못 읽는다', tone: -1 }], ending: '경찰이 지키는 것은 자기 영토의 치안을 맡는 평화적 행사다.' }] } },
          { id: 'once', text: '보고는 한 번뿐이니 의미가 없다', result: '칙령과 보고가 이어진다는 점을 놓친다.', impact: [{ who: '판정', text: '계속성을 따지지 못한다', tone: -1 }], ending: '보고 하나도 칙령과 이어 읽으면 관할이 계속됐다는 근거가 된다.' }] } },
      { id: 'secret', text: '정부 안의 일이라 공개적이라 보기 어렵다', result: '관보가 누구나 볼 수 있는 공포 수단이라는 점을 놓친다.', impact: [{ who: '판정', text: '공개성을 잘못 읽는다', tone: -1 }], ending: '관보에 실은 법령은 대표적인 공개적 국가 행위다.' }] };
    const COND_R = [{ id: 'three', text: '실효적 지배는 평화적·계속적·공개적인 권한 행사다' }, { id: 'origin', text: '독도의 주권 행사는 원래 우리 영토라는 데서 출발한다' }, { id: 'take', text: '먼저 차지하면 무조건 인정된다', why: '실효적 지배는 역사적 근거와 함께 말해야 해요.' }, { id: 'army', text: '군대가 지켜야 주권이다', why: '독도는 경찰인 독도경비대가 지켜요.' }];
    const NOTICE = { text: '1905년 시마네현은 고시 제40호로 독도를 편입한다고 했다. 대한제국 정부에는 알리지 않았다.', who: '판정단', motif: 'cloud', choices: [
      { id: 'nopub', text: '상대국에 알리지 않았다는 점을 따져 본다', result: '1900년 관보에 실은 칙령과 견주어 본다.', impact: [{ who: '판정', text: '두 문서의 공개 방식을 견준다', tone: 1 }],
        next: { text: '친구가 "그래도 고시가 나왔으니 일본 땅이 된 것 아니야?"라고 묻는다.', choices: [
          { id: 'order', text: '칙령이 5년 앞서 독도를 관할했다고 답한다', result: '친구가 두 문서의 연도를 다시 본다.', impact: [{ who: '친구', text: '시간 순서로 따져 보게 된다', tone: 1 }], ending: '이미 관할하던 섬을 알리지 않고 편입했다는 점이 문제로 남는다.' },
          { id: 'agree', text: '고시가 나왔으니 그럴 수 있다고 한다', result: '앞선 칙령을 빼고 판단하게 된다.', impact: [{ who: '판정', text: '앞선 사료를 놓친다', tone: -1 }], ending: '문서 하나만 보면 앞선 관할을 놓친다.' }] } },
      { id: 'skip', text: '고시가 있으니 따질 것이 없다고 본다', result: '앞선 칙령과 견주지 않는다.', impact: [{ who: '판정', text: '근거를 견주지 못한다', tone: -1 }], ending: '주장 문서도 앞뒤 사료와 견주어 따져야 한다.' }] };
    const NOTICE_R = [{ id: 'first', text: '칙령 제41호가 고시보다 5년 앞선다' }, { id: 'pub', text: '공개 방식은 주권 행사를 따지는 기준이 된다' }, { id: 'paper', text: '나중에 낸 문서가 늘 이긴다', why: '문서의 차례와 앞선 관할을 함께 봐야 해요.' }];

    MODS.push(
      M({
        id: 'intro.scene', type: 'intro', title: '오늘 독도의 시설 장면 읽기',
        method: '오늘 독도 시설 사진 장면 읽기', tool: 'wordcards', minutes: 6,
        levels: { easy: '장면 카드 6장 가운데 독도경비대·등대 두 장만 함께 고른다.', base: '네 장(경비·등대·주소·보호구역)을 고르고 까닭을 말한다.', challenge: '여섯 장 모두 보고, 함정 두 장이 왜 국가 권한 행사가 아닌지 말한다.' },
        intro: {
          teacher: '"오늘 독도에서 볼 수 있는 장면이에요. 이 가운데 나라가 권한을 쓰고 있는 장면은 무엇일까요?" 장면 카드를 읽고 두세 명에게 고르게 한 뒤, 시연 단추로 국가 권한 행사 장면이 바구니에 담기는 모습을 보여 준다. "관광객이 많이 가니까 우리 땅"이라는 말이 나오면 "관광객이 많은 다른 나라 섬도 그 관광객 나라의 땅이 될까요?"라고 되묻는다. 오늘은 이 장면들을 주권의 범위(영토·영해·영공)와 주권 행사의 조건으로 읽는다고 밝힌다.',
          student: '장면 카드를 읽고 나라가 권한을 쓰고 있는 장면만 바구니에 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '국가 권한 행사', cards: ['독도경비대가 섬에 머물며 경비한다', '관광객이 기념사진을 찍는다', '독도 등대가 바닷길을 밝힌다', '여행 글에 독도 사진이 올라온다', '울릉군이 울릉읍 독도리 주소를 관리한다', '천연보호구역으로 정해 관리한다'] }, sequence: [{ pick: ['독도경비대가 섬에 머물며 경비한다', '독도 등대가 바닷길을 밝힌다', '울릉군이 울릉읍 독도리 주소를 관리한다', '천연보호구역으로 정해 관리한다'] }] },
          art: { draw: 'a paper island with two rocky peaks, a small lighthouse, a police guard post with a flag, a paper address sign and seabirds circling', banner: '오늘 독도에서는 누가 무엇을 할까?', extra: [{ motif: 'bird', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.map', type: 'intro', title: '독도 둘레 영해 그리기',
        method: '독도 둘레 영해 그리기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 영해 칸 이름을 보이며 함께 핀을 꽂는다.', base: '학생이 칸 이름 없이 영해 칸을 스스로 짚고 범위를 말한다.', challenge: '영해 위 하늘이 영공이라는 점까지 말로 설명한다.' },
        intro: {
          teacher: '"독도처럼 작은 섬 하나가 왜 그렇게 중요할까요?" 대답을 듣고 국가의 영역은 땅(영토)뿐 아니라 둘레 바다(영해)와 그 위 하늘(영공)까지 이어진다고 알린다. 영해는 기선에서 12해리(1해리는 1,852m)라는 유엔 해양법 협약의 기준을 소개하고, 시연 단추로 독도 둘레 칸에 핀이 꽂히는 모습을 보여 준다. 칸 지도는 줄인 그림이라 칸 크기가 실제 12해리는 아니라고 먼저 말한다. "배타적 경제수역도 우리 영토예요"라는 말이 나오면 "그 바다에 다른 나라 배가 지나갈 수 없을까요?"라고 되물어 영해와 구별한다.',
          student: '칸 지도에서 독도 둘레의 바다 가운데 영해에 해당하는 칸을 짚어 보고, 영해와 영공이 무엇인지 말해 보세요.',
          demo: { tool: 'map', options: ZONE, sequence: [{ region: '영해(기선에서 12해리)' }] },
          art: { draw: 'a small paper island in the middle of layered blue paper waves, a dotted paper ring around it marking territorial waters, a soft sky dome above it', banner: '땅·바다·하늘로 이어지는 주권', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '배타적 경제수역(200해리)은 말로만 소개하고 지도에 경계선을 그리지 않는다(경계 획정은 수업 범위 밖).',
      }),

      M({
        id: 'activity.cond', type: 'activity', title: '주권 행사 조건으로 사례 판정',
        method: '주권 행사 조건과 사례 판정', tool: 'dilemma', minutes: 18,
        levels: { easy: '사례 1(칙령의 관보 공포) 하나를 판정하고 근거를 고른다.', base: '사례 1·2(군수 보고)를 차례로 판정한다.', challenge: '사례 3(오늘의 독도경비대)까지 판정하고 다른 길과 견준다.' },
        activity: {
          title: '평화적·계속적·공개적 판정', tool: 'dilemma',
          teacher: '"한 번 깃발을 꽂은 것과 120년 넘게 꾸준히 다스려 온 것은 어떻게 다를까요?" 국제법에서 실효적 지배는 국가가 평화롭게, 끊기지 않고, 공개적으로 권한을 행사하는 것이라고 알린다. 사례마다 세 조건 가운데 무엇을 보여 주는지 말하게 한다. 독도경비대를 \'힘으로 차지\'로 읽는 학생에게 "독도를 지키는 사람은 군인일까요, 경찰일까요?"라고 묻는다. "실효적 지배만 하면 남의 땅도 가질 수 있어요?"라는 질문에는 독도의 주권 행사는 원래 우리 영토라는 데서 출발한다고 답한다.',
          task: '사례마다 주권 행사의 조건으로 판정하며 갈림길을 지나고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('세 사례를 차례로 판정하며 주권 행사의 조건을 바르게 읽는 길을 고르고, 근거를 고르세요.', COND, [['open', 'cont', 'peace']], COND_R, ['three', 'origin'], { d: 0.4 }),
            DILQ('1905년 시마네현 고시를 주권 행사 조건으로 따지는 길을 고르고, 근거를 고르세요.', NOTICE, [['nopub', 'order']], NOTICE_R, ['first', 'pub'], { d: 0.4 }),
            EXPLOREQ('사례 판정에서 고르지 않은 다른 길도 끝까지 가 보고 결과를 견주세요.', COND, COND_R, ['다른 길에서 어떤 조건을 잘못 읽었는지 확인했다', '세 조건을 모두 말할 수 있다'], { d: 0.35, more: { conclude: '주권 행사의 조건은 평화적·계속적·공개적이고, 독도에서는 1900년부터 오늘까지 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례마다 보여 주는 조건을 쓰세요.', columns: ['사례', '보여 주는 조건'], cells: [['1900 칙령의 관보 공포', ''], ['1906 울도 군수 보고', ''], ['오늘의 독도경비대', '']] }] },
      }),
      M({
        id: 'activity.table', type: 'activity', title: '주권 행사 분야 분류표',
        method: '주권 행사 분야 분류표', tool: 'chart', minutes: 18,
        levels: { easy: '띠그래프 네 칸 가운데 두 칸이 미리 그려져 있고, 칸에 값이 보인다.', base: '사례 10개를 분야별로 센 비율로 띠그래프를 스스로 완성하고 읽는다.', challenge: '값 표시 없이 풀고, 띠그래프로 알 수 없는 것을 골라 활동지에 해석 문장을 쓴다.' },
        activity: {
          title: '사례 10개의 분야 비율', tool: 'chart',
          teacher: '"오늘 독도의 주권 행사 사례 10개를 경비·행정·보호·연구·교육 네 분야로 나눠 띠그래프로 그려 봐요." 칠판에 사례 10개(독도경비대 상주·해양경찰 경비 / 칙령 제41호 관할·독도리 주소·독도 등대 운영·독도 관련 법률 / 천연보호구역 지정·허가 없는 채집 금지·생태 보전 관리 / 동북아역사재단 자료 발간)를 적고 함께 센다. 천연보호구역을 \'시설\'로 넣는 학생에게 "자연을 법으로 지키는 일은 누가 하는 일일까요?"라고 묻는다. 이 비율은 우리가 고른 사례 묶음의 비율일 뿐, 나라가 쓰는 힘의 크기가 아니라는 점을 짚는다.',
          task: '사례 10개를 분야별로 센 비율로 띠그래프를 만들고 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '사례 10개를 분야별로 센 비율(경비 20%·행정 40%·보호 30%·연구·교육 10%)로 띠그래프를 완성하세요.', toolOptions: { type: 'band', mode: 'build', title: '독도 주권 행사 사례 10개의 분야 비율(우리 반 사례 묶음)', unit: '%', data: [['경비', 20], ['행정', 40], ['보호', 30], ['연구·교육', 10]] }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { toolOptions: { given: [0, 1] } } } },
            { prompt: '띠그래프에서 비율이 가장 큰 분야를 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '독도 주권 행사 사례 10개의 분야 비율(우리 반 사례 묶음)', unit: '%', data: [['경비', 20], ['행정', 40], ['보호', 30], ['연구·교육', 10]], question: '가장 큰 분야는?', choices: ['경비', '행정', '보호', '연구·교육'] }, target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '\'천연보호구역 지정\'은 어느 분야 사례로 셌는지 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '독도 주권 행사 사례 10개의 분야 비율(우리 반 사례 묶음)', unit: '%', data: [['경비', 20], ['행정', 40], ['보호', 30], ['연구·교육', 10]], question: '천연보호구역 지정은?', choices: ['경비', '행정', '보호', '연구·교육'], why: ['경비는 독도경비대·해양경찰의 일이에요.', '주소·법령·등대 같은 사례를 행정으로 셌어요.', '', '연구·교육은 자료 발간 같은 일이에요.'] }, target: { pick: 2 }, difficulty: 0.25 },
            { prompt: '이 띠그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '독도 주권 행사 사례 10개의 분야 비율(우리 반 사례 묶음)', unit: '%', data: [['경비', 20], ['행정', 40], ['보호', 30], ['연구·교육', 10]], question: '알 수 없는 것은?', choices: ['우리가 고른 사례 가운데 행정이 가장 많다는 것', '나라가 분야마다 쓰는 예산과 인원의 크기', '보호 분야 사례가 경비보다 많다는 것'], why: ['띠의 길이로 알 수 있어요.', '', '띠의 길이로 견줄 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '사례를 세어 만든 비율은 고른 사례 묶음을 보여 줄 뿐, 실제 노력의 크기를 재지는 못해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '띠그래프를 보고 독도의 주권 행사가 여러 분야에 걸쳐 있다는 것을 한 문장으로 해석하세요.' }] },
        notes: '비율은 수업에서 고른 사례 10개를 센 값이다(공식 통계 아님). 화면 제목에 \'우리 반 사례 묶음\'으로 밝힌다.',
      }),
      M({
        id: 'activity.eco', type: 'activity', title: '자연 보호를 주권 행사로 읽기',
        method: '자연 보호를 주권 행사로 읽기', tool: 'mindmap', minutes: 18,
        levels: { easy: '관할·관리 두 가지에 카드를 단다.', base: '관할·관리·연구 세 가지에 카드를 단다.', challenge: '가지마다 주권 행사의 조건(평화적·계속적·공개적) 근거 카드를 하나씩 붙인다.' },
        activity: {
          title: '천연보호구역 생각그물', tool: 'mindmap',
          teacher: '"독도의 괭이갈매기와 바위를 지키는 일이 왜 영토 주권과 이어질까요?" 국가유산청 자료에 따라 독도는 섬 전체가 천연기념물인 천연보호구역이고, 국가가 법에 따라 자연을 보호하는 일 자체가 관할권 행사라고 알린다. 독도에 살던 강치가 20세기 전반 무분별한 포획으로 사라졌다는 점도 소개한다. \'관광객이 늘어서\'를 주권의 근거로 다는 학생에게 "관광객이 국가를 대신할 수 있을까요?"라고 묻는다. 국가가 법으로 꾸준히, 공개적으로 관리한다는 점이 핵심이라고 짚는다.',
          task: '천연보호구역 가운데에 관할·관리·연구 가지를 세우고 사례 카드를 달아요.', levels: LV,
          items: [
            SORTQ('천연보호구역 사례 카드를 관할·관리·연구 가지에 다세요.', ['관할', '관리', '연구'], [
              ['국가가 법으로 섬 전체를 보호구역으로 정했다', '독도 주소는 울릉군 울릉읍 독도리다'],
              ['허가 없이 동식물을 채집할 수 없다', '방문객에게 쓰레기 되가져가기를 안내한다'],
              ['동북아역사재단이 독도 자료를 연구·발간한다', '독도교육 자료를 학교에 보낸다'],
            ], { k: 1, traps: ['관광객이 많아지면 주권이 생긴다'], d: 0.3, opt: { topic: '천연보호구역 독도' } }),
            MATCHQ('가지마다 그것이 보여 주는 주권 행사의 조건을 이으세요.', [['법으로 보호구역을 정해 알림', '공개적'], ['해마다 이어지는 보호 관리', '계속적'], ['경찰·행정으로 지킴', '평화적']], { k: 2, extra: ['힘으로 차지함'], d: 0.35, opt: { topic: '보호와 주권 행사' }, more: { hints: ['누가, 얼마나 오래, 어떻게 알리며 한 일인지 나누어 생각해요.'] } }),
            PICKQ('독도의 자연을 지키는 바른 행동만 고르세요.', ['정해진 길로만 다닌다', '쓰레기를 되가져간다', '번식기 새 둥지에 가까이 가지 않는다'], ['기념으로 작은 돌을 가져간다', '예쁜 꽃을 꺾어 간다'], { d: 0.25, opt: { basket: '바른 행동', topic: '천연보호구역 독도' }, more: { conclude: '독도의 자연을 지키는 일은 국가의 관할권 행사이고, 방문객도 그 규칙을 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '독도의 자연을 지키는 일이 주권과 이어지는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '독도 방문 경험을 묻지 않는다. 천연보호구역 규칙은 국가유산청 안내로 확인한다(사람 확인 목록).',
      }),
      M({
        id: 'activity.essay', type: 'activity', title: '고유 영토와 주권 행사의 관계 논술',
        method: '고유 영토와 주권 행사 관계 논술', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '개념·관계·근거를 한 단락 안의 세 칸에 나눠 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 마지막 칸에서 예상 반론에 답한다.' },
        activity: {
          title: '두 개념의 관계 쓰기', tool: 'rubric-writing',
          teacher: '"\'고유 영토\'와 \'주권 행사(실효적 지배)\'는 따로 노는 말일까요?" 역사적으로 원래 우리 영토였다는 근거와, 그 영토에 국가가 평화롭게 권한을 행사해 왔다는 근거가 서로를 받친다는 점을 먼저 말한다. 실효적 지배만 쓰고 역사적 근거를 빼는 학생에게 "그러면 남의 땅을 먼저 차지한 경우와 무엇이 다를까요?"라고 묻는다. 근거는 칙령 제41호(1900)나 독도경비대처럼 공식 자료에 있는 것을 쓰게 한다.',
          task: '고유 영토와 주권 행사의 관계를 근거 두 개로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('고유 영토와 주권 행사(실효적 지배)의 뜻을 2문장으로 쓰세요.', '\'고유 영토\'와 \'주권 행사(실효적 지배)\'가 각각 무엇인지 쓰세요.', ['고유 영토의 뜻을 썼다', '주권 행사의 세 조건 가운데 하나 이상을 썼다', '두 개념을 섞지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['고유 영토']], starter: '고유 영토란 ~이고, 주권 행사란 ~이다.', plus: '평화적·계속적·공개적 세 조건을 모두 썼다', d: 0.35 }),
            RWQ('두 개념이 서로를 받치는 관계를 근거 두 개를 들어 2~3문장으로 쓰세요.', '역사적 근거 하나와 오늘의 주권 행사 근거 하나를 들어 두 개념의 관계를 쓰세요.', ['역사적 근거를 하나 들었다', '오늘의 주권 행사 근거를 하나 들었다', '두 근거가 어떻게 이어지는지 썼다'], { min: 60, max: 400, sent: [2, 3], must: [['칙령', '세종실록', '지리지'], ['경비대', '등대', '천연보호구역', '독도리']], starter: '1900년 칙령 제41호처럼 ~. 그리고 오늘 ~.', plus: '근거마다 연도나 기관 이름을 정확히 썼다', d: 0.4 }),
            RWQ('"먼저 차지해 다스리면 그만 아니냐"는 반론에 2~3문장으로 답하세요.', '반론: "실효적 지배만 하면 남의 땅도 가질 수 있지 않나요?" 이 반론에 답하세요.', ['반론을 정확히 옮겼다', '독도의 주권 행사가 고유 영토에서 출발한다는 점을 썼다', '정중한 말투로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['고유', '원래']], starter: '그렇게 볼 수도 있지만, 독도는 ~', plus: '반론의 옳은 부분을 먼저 인정했다', d: 0.45, more: { conclude: '독도의 주권 행사는 원래 우리 영토라는 역사적 근거 위에서 이어져 와 두 근거가 서로를 받쳐요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 논술의 중심 문장을 한 문장으로 옮겨 쓰세요.' }] },
      }),

      M({
        id: 'wrap.peer', type: 'wrap', title: '짝 논술 교차 점검',
        method: '짝 논술 교차 점검', tool: 'timer', minutes: 8,
        levels: { easy: '짝 글에서 고칠 점 하나만 적어 준다.', base: '기준표 칸으로 점검하고 고칠 점 둘을 적어 준다.', challenge: '고칠 점마다 바꿔 쓸 대안 문장까지 적어 준다.' },
        wrap: {
          teacher: '"짝과 글을 바꿔 3분 동안 읽고 기준표로 점검한 뒤, 2분 동안 고칠 점을 말해 줘요." 교사가 타이머로 읽기와 말하기 구간을 진행한다. "좋아요" 한마디로 끝내는 학생에게 "어느 문장의 근거가 가장 분명했나요? 그리고 어디에 근거가 비었나요?"라고 묻게 한다. 짝의 글을 고칠 때는 사람이 아니라 문장을 두고 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝 논술 점검', labels: ['읽기', '말하기'], timeUnit: 'min', plan: { work: 1, rest: 1, rounds: 1 } }, prompt: '짝 글을 3분 읽고 2분 동안 고칠 점을 말하도록 타이머를 맞추고, 점검한 것을 표시하세요.', target: { plan: { work: 3, rest: 2 }, selfCheck: ['짝 글의 근거 두 개를 찾아 밑줄 쳤다', '고칠 점을 두 개 적어 주었다', '사람이 아니라 문장을 두고 말했다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '짝에게 줄 가장 쓸모 있는 피드백은 무엇인가요?', options: ['잘 썼어요', '둘째 문장에 연도나 기관 이름을 넣으면 근거가 분명해져요', '내 글이 더 나아요'], answer: 1, difficulty: 0.15, explain: '어느 문장을 어떻게 고치면 좋은지 짚어 줄 때 짝이 바로 고칠 수 있어요.' },
            { type: 'short', prompt: '짝에게서 받은 피드백 가운데 내 글에 반영할 것 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '짝 논술 점검표',
          items: [
            { type: 'check', prompt: '짝 글에서 확인한 것에 표시하세요.', options: ['고유 영토의 뜻이 있다', '주권 행사의 조건이 있다', '역사적 근거가 있다', '오늘의 주권 행사 근거가 있다', '반론에 답했다'] },
            { type: 'short', prompt: '짝 글에서 고칠 점 두 가지를 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다. 짝 글을 학급 전체에 공개하지 않는다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '용어 정확성 점검',
        method: '용어 정확성 점검', tool: 'sortboard', minutes: 8,
        levels: { easy: '교사가 문장 두 장을 함께 판정해 보인 뒤 나머지를 넣는다.', base: '문장 6장을 바름·고침 바구니에 스스로 넣는다.', challenge: '고침 바구니의 문장 하나를 바르게 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 쓴 용어를 정확하게 썼는지 점검해요. 바른 문장과 고칠 문장을 나눠 봐요." 배타적 경제수역을 영토로 쓰는 학생에게 영해·영공과 무엇이 다른지 다시 묻는다. "실효적 지배는 힘으로 차지하는 것"을 바름에 넣는 학생에게는 평화적·계속적·공개적 조건을 다시 짚는다. 독도를 군대가 지킨다고 넣는 학생에게는 경찰인 독도경비대를 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['바름', '고침'], cards: ['영해는 기선에서 12해리까지의 바다다', '배타적 경제수역도 우리 영토다', '영공은 영토와 영해 위의 하늘이다', '실효적 지배는 힘으로 차지하는 것이다', '실효적 지배는 평화적·계속적·공개적인 행사다', '독도는 군대가 머물며 지킨다'] }, prompt: '용어를 쓴 문장을 바름과 고침 바구니에 나누세요.', target: { sort: { 바름: ['영해는 기선에서 12해리까지의 바다다', '영공은 영토와 영해 위의 하늘이다', '실효적 지배는 평화적·계속적·공개적인 행사다'], 고침: ['배타적 경제수역도 우리 영토다', '실효적 지배는 힘으로 차지하는 것이다', '독도는 군대가 머물며 지킨다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '"독도는 군대가 머물며 지킨다"를 바르게 고친 것은?', options: ['독도는 아무도 지키지 않는다', '독도는 경찰인 독도경비대가 머물며 지킨다', '독도는 관광객이 지킨다'], answer: 1, difficulty: 0.15, explain: '독도에는 경찰인 독도경비대가 머물며 자기 영토의 치안을 맡아요.' },
            { type: 'short', prompt: '"배타적 경제수역도 우리 영토다"를 바르게 고쳐 쓰세요.' },
          ],
        },
        worksheet: {
          title: '주권 범위와 조건 용어',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '영해는 기선에서 ___해리, 배타적 경제수역은 ___해리까지다.', answer: '12, 200' },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '실효적 지배는 국가가 평화적·___적·공개적으로 권한을 행사하는 것이다.', answer: '계속' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 정부 입장문 분석 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-gov', [10]);
    // 외교부 독도 누리집의 정부 기본 입장을 줄여 옮긴 문장(사람 확인 목록)
    const G = {
      e1: '1900년 칙령 제41호로 관할했다',
      e2: '울릉도에서 맑은 날 보인다',
      e3: '1946년 각서 제677호가 일본 범위에서 뺐다',
      p1: '독도는 명백한 우리 고유 영토다',
      p2: '영유권 분쟁은 존재하지 않는다',
      p3: '외교 교섭·사법적 해결의 대상이 아니다',
      a1: '독도경비대가 머물며 경비한다',
      a2: '도발에는 단호하고 엄중하게 대응한다',
      a3: '왜곡에 항의하고 오기 정정을 요청한다',
    };
    const COURT = { text: '외국 신문 칼럼: "두 나라가 국제 재판으로 해결하면 되지 않나?" 우리 학급이 정부 입장을 설명하는 답글을 쓰기로 했다.', who: '학급', motif: 'house', choices: [
      { id: 'weak', text: '"재판을 피하는 건 근거가 부족해서"라고 쓴다', result: '정부 입장과 다른 설명이 퍼진다.', impact: [{ who: '읽는 사람', text: '입장을 잘못 이해한다', tone: -1 }], ending: '정부 입장의 논리를 원문으로 확인하지 않으면 거꾸로 설명하게 된다.' },
      { id: 'logic', text: '"고유 영토이고 분쟁이 없어 사법적 해결 대상이 아니다"라고 쓴다', result: '정부 기본 입장의 세 문장을 차례로 옮긴다.', impact: [{ who: '읽는 사람', text: '입장의 뼈대를 안다', tone: 1 }],
        next: { text: '댓글: "상대 나라가 주장하는데 어떻게 분쟁이 없다는 거죠?"', choices: [
          { id: 'claim', text: '상대가 주장한다는 것과 분쟁이 있다는 것은 다르다고 답한다', result: '주장이 있어도 우리 영토라는 사실은 다툴 문제가 아니라는 입장을 설명한다.', impact: [{ who: '댓글 쓴 사람', text: '두 말의 차이를 생각해 본다', tone: 1 }],
            next: { text: '댓글: "그 입장의 근거는 뭔가요?"', choices: [
              { id: 'source', text: '칙령 제41호(1900) 같은 근거와 외교부 누리집 주소를 단다', result: '근거와 출처가 함께 실린 답글이 된다.', impact: [{ who: '읽는 사람', text: '스스로 확인할 길을 얻는다', tone: 1 }], ending: '입장은 근거와 출처가 붙을 때 설득력을 갖는다.' },
              { id: 'angry', text: '"당연한 걸 왜 묻냐"고 답한다', result: '답글 아래에 다툼이 이어진다.', impact: [{ who: '학급', text: '앞서 쓴 설명까지 묻힌다', tone: -1 }], ending: '감정적인 답은 앞선 근거까지 가린다.' }] } },
          { id: 'admit', text: '"주장이 있으니 분쟁이 있는 셈"이라고 답한다', result: '정부 입장과 반대되는 말을 하게 된다.', impact: [{ who: '읽는 사람', text: '입장을 잘못 이해한다', tone: -1 }], ending: '상대의 주장과 분쟁의 존재를 구별해야 정부 입장을 바로 설명할 수 있다.' }] } },
      { id: 'skip', text: '외국 칼럼이니 답하지 않는다', result: '칼럼의 질문이 그대로 남는다.', impact: [{ who: '읽는 사람', text: '한쪽 설명만 본다', tone: 0 }], ending: '근거 있는 설명을 남길 기회도 함께 사라진다.' }] };
    const COURT_R = [{ id: 'nodispute', text: '정부는 영유권 분쟁이 존재하지 않는다는 입장이다' }, { id: 'diff', text: '상대의 주장과 분쟁의 존재는 같은 말이 아니다' }, { id: 'nobasis', text: '재판을 피하면 근거가 없다는 뜻이다', why: '정부는 고유 영토이고 분쟁이 없어 사법적 해결의 대상이 아니라는 입장이에요.' }, { id: 'loud', text: '세게 말할수록 설득된다', why: '설득은 근거와 출처에서 나와요.' }];

    MODS.push(
      M({
        id: 'intro.frag', type: 'intro', title: '입장문 한 문단 처음 읽기',
        method: '입장문 한 문단 처음 읽기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 \'역사적\'·\'지리적\' 두 낱말을 함께 짚는다.', base: '근거를 담은 낱말 세 개를 학생이 고른다.', challenge: '세 낱말에 더해, 입장을 드러내는 낱말(\'명백한\' 등) 하나를 구별해 말한다.' },
        intro: {
          teacher: '"외교부 독도 누리집 첫 화면에는 어떤 문장이 있을까요?" 학생들에게 짐작하게 한 뒤, 정부의 기본 입장 — 독도는 역사적·지리적·국제법적으로 명백한 우리 고유의 영토이며, 영유권 분쟁은 존재하지 않고, 외교 교섭이나 사법적 해결의 대상이 될 수 없다 — 을 소리 내어 읽는다. 시연 단추로 근거의 갈래를 담은 낱말이 바구니에 담기는 모습을 보여 준다. "분쟁이 없다는데 왜 이렇게 시끄러워요?"라는 질문이 나오면 "상대가 주장한다는 것과 분쟁이 있다는 것은 같을까요?"라고 되묻고, 오늘의 질문으로 남긴다.',
          student: '정부 입장문 한 문단을 듣고, 무엇을 근거로 삼는지 알려 주는 낱말을 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '근거의 갈래', cards: ['역사적', '명백한', '지리적', '고유의', '국제법적', '대상'] }, sequence: [{ pick: ['역사적', '지리적', '국제법적'] }] },
          art: { draw: 'a paper government statement sheet with three highlighted words glowing, a magnifying glass made of paper, a small island on the corner of the page', banner: '입장문은 무엇을 근거로 할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '입장문 문장은 외교부 독도 누리집 서술을 줄여 옮긴 것이다(사람 확인 목록). 특정 정부·정치인의 발언이 아니라 정부의 기본 입장으로만 다룬다.',
      }),
      M({
        id: 'intro.why', type: 'intro', title: '정부가 입장문을 내는 까닭',
        method: '정부가 입장문을 내는 까닭', tool: 'emotion', minutes: 6,
        levels: { easy: '목적 카드 두 장만 대상 독자와 함께 잇는다.', base: '목적 세 장을 대상 독자와 잇는다.', challenge: '네 장 모두 잇고, 대상마다 말투가 어떻게 달라질지 말한다.' },
        intro: {
          teacher: '"정부는 왜 독도에 대한 입장문을 누리집에 올려 둘까요? 누가 읽으라고 쓴 글일까요?" 목적 카드를 읽고 대상 독자를 짐작하게 한 뒤, 시연 단추로 목적과 대상이 이어지는 모습을 보여 준다. "우리끼리 보려고요"라는 답만 나오면 "외국어로도 같은 내용을 싣는다면 누구를 생각한 걸까요?"라고 되묻는다. 같은 입장도 읽는 사람에 따라 근거를 고르는 방식과 말투가 달라진다는 점을 짚는다.',
          student: '입장문을 내는 목적 카드와 그 글을 읽을 대상을 이어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', weather: false, slots: ['우리 입장과 근거를 국제 사회에 밝힌다', '잘못된 지도·자료에 고쳐 달라고 한다', '국민이 정확한 사실을 알게 한다', '학교에서 배울 자료로 쓰게 한다'], cards: ['학생과 교사', '우리 국민', '잘못 적은 출판사·누리집', '외국 정부와 외국 시민'] }, sequence: [{ match: { '우리 입장과 근거를 국제 사회에 밝힌다': '외국 정부와 외국 시민', '잘못된 지도·자료에 고쳐 달라고 한다': '잘못 적은 출판사·누리집', '국민이 정확한 사실을 알게 한다': '우리 국민', '학교에서 배울 자료로 쓰게 한다': '학생과 교사' } }] },
          art: { draw: 'a paper statement sheet sending paper airplanes to different readers: a globe, a family house, a school and a publisher with a map', banner: '입장문은 누구에게 쓰는 글일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.three', type: 'activity', title: '근거·입장·행동 나누기',
        method: '근거·입장·행동 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '입장문 문장 3장을 넣고, 틀린 바구니에 넣으면 까닭과 함께 돌아온다.', base: '문장 6장을 근거·입장·행동 바구니에 나누고, 입장문에 없는 말과 \'분쟁 없음\'의 뜻도 가른다.', challenge: '문장 9장(더한 3장)을 나누고 활동지에 입장문을 자기 말로 요약한다.' },
        activity: {
          title: '입장문 문장 세 바구니', tool: 'sortboard',
          teacher: '"이 문장은 왜 그런지(근거)인가요, 무엇이라 보는지(입장)인가요, 무엇을 하는지(행동)인가요?" 독도경비대 문장을 근거에 넣는 학생에게 "오늘 실제로 하는 일이니 어느 바구니일까요?"라고 묻는다. 입장문에 없는 말(상대 국민을 탓하는 말, \'분쟁 지역\')을 입장문 문장으로 고르는 학생에게는 원문을 다시 읽게 한다. "분쟁 없음"을 "아무도 주장하지 않음"으로 이해하는 학생에게는 상대의 주장이 있어도 우리 영토라는 사실은 다툴 문제가 아니라는 입장이라고 짚는다.',
          task: '입장문 문장을 근거·입장·행동 바구니에 나누고, 입장문에 없는 말을 가려요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('정부 입장문 문장을 근거·입장·행동 바구니에 나누세요.', ['근거', '입장', '행동'], [[G.e1, G.e2], [G.p1, G.p2], [G.a1, G.a2]], { k: 1, hard: { add: [[G.e3], [G.p3], [G.a3]] }, d: 0.3, opt: { trayLabel: '입장문 문장' } }),
            BOARDQ('입장문에 있는 문장과 입장문에 없는 말을 나누세요.', ['입장문에 있는 문장', '입장문에 없는 말'], [[G.p2, G.a3], ['독도는 두 나라가 다투는 분쟁 지역이다', '상대 나라 사람들은 모두 잘못이다']], { k: 1, d: 0.3, more: { hints: ['정부가 실제로 쓴 문장인지, 누군가 덧붙인 말인지 원문과 견주어 봐요.'] } }),
            BOARDQ('\'영유권 분쟁이 없다\'의 뜻을 바르게 이해한 말과 오해한 말로 나누세요.', ['바른 이해', '오해'], [['상대가 주장해도 다툴 문제가 아니라는 입장이다', '우리 영토라는 사실을 협상 대상으로 두지 않는다'], ['아무도 독도를 주장하지 않는다는 뜻이다', '근거가 없어서 재판을 피한다는 뜻이다']], { k: 1, d: 0.35, more: { conclude: '입장문은 근거·입장·행동으로 짜여 있고, \'분쟁 없음\'은 상대의 주장과 분쟁의 존재를 구별한 입장이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '입장문을 근거·입장·행동이 모두 들어가게 자기 말로 한 문장 요약하세요.' }] },
        notes: '입장문 문장은 외교부 누리집 서술을 줄인 것이다(사람 확인 목록). \'입장문에 없는 말\' 카드는 혐오 표현을 가르는 연습용이며 소리 내어 따라 말하게 하지 않는다.',
      }),
      M({
        id: 'activity.ratio', type: 'activity', title: '입장문 구성 비율 그래프',
        method: '입장문 구성 비율 그래프', tool: 'chart', minutes: 18,
        levels: { easy: '세 항목 가운데 하나가 미리 그려진 원그래프를 완성하고, 조각에 값이 보인다.', base: '세 항목 원그래프를 스스로 완성하고 무엇이 많은지 해석한다.', challenge: '값 표시 없이 풀고, 다른 입장문(가상 예시)과 견주어 근거 비율을 해석한다.' },
        activity: {
          title: '근거·입장·행동 원그래프', tool: 'chart',
          teacher: '"입장문 열 문장을 나눠 보니 근거 4, 입장 3, 행동 3이었어요. 원그래프로 그리면 무엇이 보일까요?" 비율을 백분율로 바꾸는 과정을 함께 말한다. 근거가 많은 까닭을 "말이 길어서"라고 하는 학생에게 "입장만 있고 근거가 없는 글이라면 읽는 사람은 무엇을 물을까요?"라고 되묻는다. 견줄 입장문은 수업용 가상 예시이며, 비율은 문장 수를 센 것일 뿐 글의 옳고 그름을 재지 않는다고 짚는다.',
          task: '입장문 문장 수를 원그래프로 만들고, 비율을 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '입장문 10문장의 구성(근거 4·입장 3·행동 3)을 백분율 원그래프로 완성하세요.', toolOptions: { type: 'circle', mode: 'build', title: '정부 입장문 10문장의 구성', unit: '%', data: [['근거', 40], ['입장', 30], ['행동', 30]] }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { toolOptions: { given: [0] } } } },
            { prompt: '원그래프에서 가장 큰 조각을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '정부 입장문 10문장의 구성', unit: '%', data: [['근거', 40], ['입장', 30], ['행동', 30]], question: '가장 큰 조각은?', choices: ['근거', '입장', '행동'] }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '근거 문장이 가장 많은 까닭으로 알맞은 것을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '정부 입장문 10문장의 구성', unit: '%', data: [['근거', 40], ['입장', 30], ['행동', 30]], question: '근거가 많은 까닭은?', choices: ['입장을 읽는 사람이 스스로 확인할 수 있게 하려고', '글을 길게 보이려고', '행동을 숨기려고'], why: ['', '길이는 목적이 아니에요.', '행동 문장도 30%로 함께 실려 있어요.'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '가상 예시 성명서(근거 20%·입장 50%·행동 30%)와 견줄 때 알맞은 해석을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '가상 예시 성명서의 구성(수업용)', unit: '%', data: [['근거', 20], ['입장', 50], ['행동', 30]], question: '정부 입장문과 견주면?', choices: ['가상 성명서는 입장이 많고 근거가 적어 설득력이 약해 보인다', '두 글의 근거 비율이 같다', '행동이 가장 많은 쪽은 가상 성명서다'], why: ['', '정부 입장문은 근거 40%, 가상 성명서는 20%예요.', '두 글 모두 행동은 30%예요.'] }, target: { pick: 0 }, difficulty: 0.4, conclude: '입장을 밝히는 글은 근거가 충분할 때 읽는 사람이 스스로 확인하고 설득돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '원그래프를 보고 정부 입장문의 짜임을 한 문장으로 해석하세요.' }] },
        notes: '10문장 구성은 앞 활동에서 나눈 문장을 센 수업용 값이고, 견주는 성명서는 가상 예시다. 화면 제목에 밝힌다.',
      }),
      M({
        id: 'activity.logic', type: 'activity', title: '"분쟁이 없다" 입장의 논리 따라가기',
        method: '"분쟁이 없다" 입장의 논리 따라가기', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(답글의 첫 문장)에서 고르고 근거를 고른다.', base: '두 번째 갈림길(분쟁의 뜻을 묻는 댓글)까지 간다.', challenge: '세 번째 갈림길(근거를 묻는 댓글)까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '국제 재판 제안 칼럼에 답하기', tool: 'dilemma',
          teacher: '"정부는 왜 국제 재판에 맡기자는 제안에 응하지 않을까요? 오늘은 찬반이 아니라, 정부 입장의 논리를 정확히 따라가 설명해 봐요." 국제재판을 피하는 것을 근거 부족으로 여기는 학생에게 입장문 원문(사법적 해결의 대상이 될 수 없다)을 다시 읽게 한다. 흔히 "응하면 분쟁이 있는 것처럼 된다"는 설명이 함께 나온다는 점도 알려 준다. 감정적인 답글을 고르는 학생에게는 앞서 쓴 근거가 어떻게 묻히는지 결과 장면을 보게 한다.',
          task: '칼럼에 답글을 쓰는 갈림길을 따라가며 정부 입장의 논리를 확인하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('국제 재판 제안 칼럼에 정부 입장의 논리대로 답하는 길을 고르고 근거를 고르세요.', COURT, [['logic', 'claim', 'source']], COURT_R, ['nodispute', 'diff'], { d: 0.4 }),
            EXPLOREQ('다른 답글의 길도 끝까지 가 보고, 읽는 사람이 어떻게 이해하는지 견주세요.', COURT, COURT_R, ['다른 길에서 입장을 거꾸로 설명한 장면을 찾았다', '주장과 분쟁의 차이를 내 말로 말할 수 있다'], { d: 0.35 }),
            DILQ('친구가 "분쟁 없다면서 왜 독도교육을 해?"라고 물을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '친구: "분쟁이 없다면서 왜 학교에서 독도교육을 10시간이나 하라고 해?"', who: '친구', motif: 'house', choices: [
              { id: 'know', text: '바르게 알고 근거로 말할 수 있게 하려는 것이라고 답한다', result: '친구가 "아, 시끄럽게 하려는 게 아니구나"라고 한다.', impact: [{ who: '친구', text: '교육의 목적을 이해한다', tone: 1 }], ending: '분쟁이 없다는 입장과 바르게 알리는 교육은 서로 어긋나지 않는다.' },
              { id: 'fight', text: '상대 나라를 이기려고 배우는 것이라고 답한다', result: '친구가 "그럼 싸우자는 거야?"라고 되묻는다.', impact: [{ who: '친구', text: '교육을 다툼으로 오해한다', tone: -1 }], ending: '독도교육은 다툼이 아니라 근거와 존중을 배우는 일이다.' }] },
              [['know']], [{ id: 'right', text: '근거를 바르게 알아야 왜곡에 차분히 답할 수 있다' }, { id: 'win', text: '독도교육은 상대를 이기려고 한다', why: '독도교육은 바르게 알고 근거로 말하는 힘을 기르는 교육이에요.' }], ['right'], { d: 0.3, more: { conclude: '\'분쟁 없음\'은 협상 대상이 아니라는 입장이고, 교육은 그 근거를 바르게 아는 일이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"상대가 주장한다"와 "분쟁이 있다"가 다른 까닭을 한두 문장으로 쓰세요.' }] },
        notes: '정부 입장의 논리를 설명하는 활동이며 찬반 토론이 아니다. 현재 외교 현안이나 특정 정부의 대응을 평가하지 않는다.',
      }),
      M({
        id: 'activity.summ', type: 'activity', title: '입장문 요약문 쓰기',
        method: '입장문 요약문 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '입장·근거와 행동을 합쳐 200자 안팎으로 요약하고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸을 외국 독자용으로 다시 쓴다.' },
        activity: {
          title: '200자 요약', tool: 'rubric-writing',
          teacher: '"요약은 줄이는 글이지 바꾸는 글이 아니에요. 원문에 없는 말을 넣거나 근거를 빼면 요약이 아니라 다른 글이 돼요." 기준표의 정확성·근거 보존 항목을 먼저 함께 읽는다. "독도는 분쟁 지역이지만 우리 땅"처럼 원문과 어긋나는 요약을 쓴 학생에게 입장문의 둘째 문장을 다시 보게 한다. 외국 독자용으로 다시 쓸 때는 칙령·각서가 무엇인지 한 마디 풀어 주게 한다.',
          task: '입장문을 정확하게 요약하고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('입장문의 입장 세 가지를 1~2문장으로 요약하세요.', '정부 입장문의 입장(고유 영토·분쟁 없음·사법적 해결 대상 아님)을 요약하세요.', ['입장 세 가지를 모두 담았다', '원문에 없는 말을 넣지 않았다', '\'분쟁 지역\'처럼 원문과 어긋난 말이 없다'], { min: 40, max: 200, sent: [1, 2], must: [['분쟁']], starter: '정부는 독도가 ~이고, ~이며, ~라는 입장이다.', plus: '입장 문장의 순서를 원문대로 지켰다', d: 0.35 }),
            RWQ('근거와 행동을 더해 전체 요약을 200자 안팎으로 쓰세요.', '입장에 근거(역사·지리·국제법)와 행동(경비·대응)을 더해 200자 안팎으로 요약하세요.', ['근거를 하나 이상 넣었다', '행동을 하나 이상 넣었다', '200자 안팎으로 줄였다'], { min: 150, max: 260, sent: [2, 4], must: [['근거', '칙령', '역사'], ['경비', '대응', '정정']], starter: '정부는 ~라는 입장이다. 그 근거는 ~. 또 정부는 ~.', plus: '근거마다 연도나 문서 이름을 정확히 썼다', d: 0.4 }),
            RWQ('독도를 처음 듣는 외국 독자를 위해 요약을 2문장으로 다시 쓰세요.', '외국 독자는 칙령·각서를 모른다. 처음 듣는 사람도 알 수 있게 요약을 다시 쓰세요.', ['어려운 문서 이름을 한 마디로 풀었다', '정부 입장을 바꾸지 않았다', '상대를 존중하는 말투로 썼다'], { min: 40, max: 250, sent: [2, 3], must: [['정부', '한국']], starter: '한국 정부는 독도가 ~라고 봅니다. 예를 들어 ~', plus: '영어 표기 Dokdo를 함께 적었다', d: 0.45, more: { conclude: '좋은 요약은 원문의 입장·근거·행동을 바꾸지 않고 읽는 사람에 맞게 줄여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 요약에서 원문의 근거를 가장 잘 지킨 문장을 옮겨 쓰세요.' }] },
      }),

      M({
        id: 'wrap.talk', type: 'wrap', title: '모둠 요약 돌려 읽기',
        method: '모둠 요약 비교 토의', tool: 'timer', minutes: 8,
        levels: { easy: '돌려 읽은 요약마다 빠진 근거 하나만 적는다.', base: '빠진 근거 둘을 기록판에 적는다.', challenge: '빠진 근거 셋과 원문과 어긋난 표현까지 적는다.' },
        wrap: {
          teacher: '"모둠 안에서 요약문을 2분씩 세 번 돌려 읽어요. 읽을 때마다 원문에 있는데 요약에서 빠진 근거를 기록판에 적어요." 교사가 타이머로 돌리기를 진행한다. "다 비슷해요"라는 말이 나오면 "근거·입장·행동 가운데 어느 바구니가 가장 자주 빠졌나요?"라고 묻는다. 친구의 요약을 평가할 때는 사람이 아니라 문장을 두고 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '요약 돌려 읽기', labels: ['읽기', '넘기기'], timeUnit: 'min', plan: { work: 1, rest: 1, rounds: 1 }, fields: [{ label: '빠진 근거 수', unit: '개', step: 1 }] }, prompt: '요약문을 2분씩 쉬지 않고 3번 돌려 읽도록 타이머를 맞추고, 찾은 빠진 근거 수를 적으세요.', target: { plan: { work: 2, rest: 0, rounds: 3 }, records: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '요약에서 가장 자주 빠지면 안 되는 것은 무엇인가요?', options: ['입장을 뒷받침하는 근거', '글쓴이의 이름', '꾸미는 말'], answer: 0, difficulty: 0.15, explain: '근거가 빠지면 입장만 남아 읽는 사람이 스스로 확인할 수 없어요.' },
            { type: 'short', prompt: '우리 모둠 요약에서 가장 자주 빠진 근거를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '요약 비교 기록판',
          items: [
            { type: 'table', prompt: '돌려 읽은 요약마다 빠진 것을 적으세요.', columns: ['요약', '빠진 근거', '어긋난 표현'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', '']] },
            { type: 'short', prompt: '다음에 요약할 때 꼭 지킬 점 하나를 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '입장문 분석 틀 정리',
        method: '분석 틀 생각그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 근거·입장 두 가지의 질문 카드를 먼저 달아 보인다.', base: '근거·입장·행동 세 가지에 질문과 예 카드를 단다.', challenge: '다른 자료(예: 학교 안내문)에 이 틀을 쓴 예를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 쓴 근거·입장·행동 틀은 독도 입장문에만 쓸 수 있을까요? 다른 자료에도 쓸 수 있게 질문으로 정리해 봐요." 질문 카드(왜 그렇다고 하나·무엇이라 보나·무엇을 하나)와 예 카드를 가지에 단다. 행동 카드를 입장 가지에 다는 학생에게 "실제로 하는 일인가요, 생각을 밝힌 말인가요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '입장문 분석 틀', slots: ['근거', '입장', '행동'], cards: ['왜 그렇다고 하나?', '칙령 제41호(1900)', '무엇이라고 보나?', '영유권 분쟁은 존재하지 않는다', '무엇을 하고 있나?', '독도경비대 경비'] }, prompt: '질문 카드와 예 카드를 분석 틀 가지에 다세요.', target: { sort: { 근거: ['왜 그렇다고 하나?', '칙령 제41호(1900)'], 입장: ['무엇이라고 보나?', '영유권 분쟁은 존재하지 않는다'], 행동: ['무엇을 하고 있나?', '독도경비대 경비'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '근거·입장·행동 틀로 읽기에 가장 알맞은 다른 자료는?', options: ['학교의 휴대전화 사용 규칙 안내문', '친구와 나눈 농담', '노래 가사'], answer: 0, difficulty: 0.15, explain: '안내문처럼 입장과 근거, 할 일을 밝히는 글이 이 틀로 읽기 좋아요.' },
            { type: 'short', prompt: '이 틀을 써서 읽어 보고 싶은 다른 자료 하나와 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '입장문 분석 틀',
          items: [
            { type: 'table', prompt: '분석 틀을 정리하세요.', columns: ['칸', '묻는 질문', '독도 입장문의 예'], cells: [['근거', '', ''], ['입장', '', ''], ['행동', '', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '정부는 독도에 대한 영유권 ___이 존재하지 않는다는 입장이다.', answer: '분쟁' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 1943~1952년 국제 문서의 해석 쟁점 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-intl', [10]);
    const D = {
      cairo: '1943 카이로 선언',
      potsdam: '1945 포츠담 선언',
      s677: '1946.1 연합국 최고사령관 각서 제677호',
      s1033: '1946.6 연합국 최고사령관 각서 제1033호',
      sf: '1951 샌프란시스코 강화조약',
      peace: '1952.1 평화선 선언',
    };
    const MAPX = { grid: [7, 5], title: '각서 제677호의 범위(줄인 칸 그림)', places: [{ name: '울릉도', icon: 'island', at: [2, 1] }, { name: '독도', icon: 'island', at: [3, 1] }, { name: '일본 본토', icon: 'city', at: [5, 2] }], regions: [{ name: '일본 통치·행정 범위', cells: [[5, 1], [5, 2], [6, 1], [6, 2], [5, 3], [6, 3]], color: 'peach' }, { name: '범위에서 뺀 곳', cells: [[2, 1], [3, 1]], color: 'mint' }] };
    const ISSUE = { text: '문서 1. 1946년 각서 제677호는 독도를 일본 통치·행정 범위에서 뺐다. 일본 정부는 이 각서가 최종 결정이 아니라고 주장한다.', who: '해석단', motif: 'cloud', choices: [
      { id: 'never', text: '그 뒤 이 범위가 바뀐 적이 없다는 점을 근거로 든다', result: '1946년 6월 각서 제1033호도 같은 방향이었다는 점을 함께 찾는다.', impact: [{ who: '해석단', text: '문서를 앞뒤로 이어 읽는다', tone: 1 }],
        next: { text: '문서 2. 1951년 강화조약 제2조는 "제주도·거문도·울릉도를 포함하는 한국"에 대한 권리 포기를 적었다. 독도는 적히지 않았다.', choices: [
          { id: 'example', text: '3천여 개 섬 가운데 대표적인 섬을 예로 든 것이라고 해석한다', result: '적힌 세 섬이 한반도 남쪽·서남쪽·동쪽 바다에 흩어져 있다는 점을 확인한다.', impact: [{ who: '해석단', text: '조약 문장을 원문대로 읽는다', tone: 1 }],
            next: { text: '문서 3. 1943년 카이로 선언은 침탈로 빼앗은 지역에서 일본을 내보낸다는 원칙을 밝혔다. 1905년 편입도 여기에 해당할까?', choices: [
              { id: 'cairo', text: '1905년 편입이 국권 침탈 과정이었다는 점과 잇는다', result: '포츠담 선언이 카이로 선언 조항 이행을 밝힌 점까지 이어 읽는다.', impact: [{ who: '해석단', text: '세 문서가 하나의 흐름으로 이어진다', tone: 1 }], ending: '문서 하나가 아니라 1943~1952년 문서를 함께 읽을 때 해석이 단단해진다.' },
              { id: 'size', text: '독도가 작은 섬이라 해당하지 않는다고 본다', result: '섬의 크기를 기준으로 삼아 편입 과정을 놓친다.', impact: [{ who: '해석단', text: '원칙의 기준을 잘못 잡는다', tone: -1 }], ending: '카이로 선언의 기준은 섬의 크기가 아니라 빼앗긴 과정이다.' }] } },
          { id: 'only', text: '적힌 섬만 한국 땅이라고 받아들인다', result: '제주도·거문도·울릉도 말고는 모두 빠진다는 이상한 결론이 나온다.', impact: [{ who: '해석단', text: '조약을 앞 문서와 떼어 읽는다', tone: -1 }], ending: '적힌 섬만이라면 한국의 다른 섬 3천여 개도 빠지게 된다.' }] } },
      { id: 'accept', text: '최종 결정이 아니라면 의미가 없다고 본다', result: '각서가 독도를 일본 범위에서 뺀 사실을 버린다.', impact: [{ who: '해석단', text: '근거 하나를 잃는다', tone: -1 }], ending: '최종 결정인가를 따질 때도 그 뒤에 바뀐 적이 있는지를 함께 본다.' }] };
    const ISSUE_R = [{ id: 'chain', text: '1943~1952년 문서는 앞뒤로 이어 읽어야 한다' }, { id: 'text', text: '조약 해석은 원문과 공식 기관 설명에서 시작한다' }, { id: 'missing', text: '적히지 않았으면 무조건 빠진 것이다', why: '조약은 한국의 섬 3천여 개 가운데 대표적인 섬을 예로 들었어요.' }, { id: 'web', text: '누리 소통망에 많이 퍼진 해석이 맞다', why: '많이 퍼졌다는 것은 맞다는 뜻이 아니에요.' }];

    MODS.push(
      M({
        id: 'intro.q', type: 'intro', title: '쟁점 질문 미리 보기',
        method: '쟁점 질문 미리 보기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 두 장만 읽고 하나를 고르게 한다.', base: '질문 카드 세 장 가운데 가장 궁금한 것을 고른다.', challenge: '카드에 없는 내 질문 하나를 만들어 말한다.' },
        intro: {
          teacher: '"같은 문서를 두 나라가 다르게 읽는다면, 무엇을 기준으로 따져야 할까요?" 대답을 듣고 중3에서 읽은 카이로 선언·포츠담 선언·연합국 각서·샌프란시스코 강화조약·평화선 선언을 다시 꺼내, 오늘은 문서마다 무엇이 해석의 쟁점인지 정리한다고 밝힌다. 시연 단추로 질문 카드 하나가 바구니에 담기는 모습을 보여 준다. "조약 하나만 보면 되지 않아요?"라는 반응에는 "조약을 만든 사람들도 앞의 문서를 알고 있었겠지요?"라고 되묻는다.',
          student: '쟁점 질문 카드 가운데 내가 가장 궁금한 질문을 하나 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '가장 궁금한 질문', cards: ['각서 제677호는 최종 결정이었을까?', '조약에 적힌 세 섬은 예시일까?', '카이로 선언 원칙은 1905년 편입에도 해당할까?', '평화선 선언은 무엇을 선언했을까?'] }, sequence: [{ pick: ['조약에 적힌 세 섬은 예시일까?'] }] },
          art: { draw: 'a row of paper documents of different shapes on a ribbon timeline from 1943 to 1952, each with a small question tag attached', banner: '문서마다 무엇이 쟁점일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '질문 고르기는 채점하지 않는다. 고른 질문을 활동 뒤에 다시 꺼내 답할 수 있는지 묻는다.',
      }),
      M({
        id: 'intro.map', type: 'intro', title: '문서별 범위 지도 겹쳐 보기',
        method: '문서별 범위 지도 겹쳐 보기', tool: 'map', minutes: 6,
        levels: { easy: '각서 제677호 하나의 범위만 칸 지도에서 함께 본다.', base: '각서 범위에 더해 강화조약 제2조에 적힌 섬(제주도·거문도·울릉도)을 말로 겹쳐 본다.', challenge: '두 문서의 차이(범위를 그은 문서와 섬을 예로 든 문서)를 말로 설명한다.' },
        intro: {
          teacher: '"1946년 각서 제677호는 일본의 통치·행정 범위를 정하면서 어떤 섬을 뺐을까요?" 칸 지도에서 일본 통치·행정 범위와 범위에서 뺀 곳을 보이고, 시연 단추로 독도 칸에 핀이 꽂히는 모습을 보여 준다. 칸 지도는 줄인 그림이라 실제 거리·모양과 다르다고 먼저 말한다. 이어 1951년 강화조약 제2조는 범위를 긋지 않고 "제주도·거문도·울릉도를 포함하는 한국"이라고 섬을 예로 들었다는 점을 말로 겹쳐 본다. "각서가 독도를 일본에 넣었다"는 오개념이 나오면 지도의 두 색을 다시 가리킨다.',
          student: '칸 지도에서 각서 제677호의 일본 범위와 범위에서 뺀 곳을 보고, 독도가 어느 쪽에 있는지 짚어 보세요.',
          demo: { tool: 'map', options: MAPX, sequence: [{ place: '독도' }] },
          art: { draw: 'two translucent paper overlays on a simple grid map, one tinted peach marking a range and one tinted mint around two small islands, a paper pin on the smaller island', banner: '문서마다 그은 범위가 달라요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '칸 지도는 줄인 그림이며 실제 경계선이 아니다. 각서가 뺀 곳은 단원 재료에 있는 독도·울릉도만 표시한다.',
      }),

      M({
        id: 'activity.line', type: 'activity', title: '국제 문서 연도·성격 시간 띠',
        method: '문서 연도·성격 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '문서 카드 3장을 시간 띠에 놓고, 놓을 때마다 맞는지 바로 보인다.', base: '문서 5장을 놓고, 시기 칸에 나누고, 문서마다 성격 카드를 잇는다.', challenge: '각서 제1033호까지 6장을 놓고, 성격 잇기에 함정 카드가 더해진다.' },
        activity: {
          title: '1943~1952 문서 띠', tool: 'timeline',
          teacher: '"이 문서는 전쟁 중의 것인가요, 점령기의 것인가요, 그 뒤의 것인가요?" 각서 제1033호를 강화조약 뒤에 두는 학생에게는 각서가 점령기(1946)의 문서라는 점을 짚는다. 포츠담 선언 카드가 남는 학생에게는 1945년이라는 점을 확인시킨다. 성격을 이을 때 "조약이 영토를 새로 정했다"를 고르는 학생에게는 조약이 카이로·포츠담 원칙과 각서를 이어받았다는 단원 재료의 설명을 다시 보게 한다.',
          task: '1943~1952년 문서를 차례대로 놓고, 시기와 성격을 이어요.', levels: LV,
          items: [
            ORDERQ('1943~1952년 국제 문서를 차례대로 시간 띠에 놓으세요.', [D.cairo, D.potsdam, D.s677, D.s1033, D.sf, D.peace], { sub: { easy: [0, 2, 4], base: [0, 1, 2, 4, 5] }, d: 0.3, opt: { axis: AX }, more: { hints: ['카드 앞의 연도와 달을 먼저 읽어요.'] } }),
            SORTQ('문서를 만든 때에 따라 시기 칸에 나누세요.', ['전쟁 중(1943~1945)', '점령기(1946)', '1951년 이후'], [[D.cairo, D.potsdam], [D.s677, D.s1033], [D.sf, D.peace]], { k: 1, d: 0.3, opt: { axis: AX } }),
            MATCHQ('문서와 그 성격을 이으세요.', [[D.cairo, '침탈로 빼앗긴 지역에서 일본을 내보낸다는 원칙'], [D.potsdam, '카이로 선언 조항 이행과 일본 주권 범위 한정'], [D.s677, '독도를 일본 통치·행정 범위에서 제외'], [D.sf, '제주도·거문도·울릉도를 포함하는 한국의 권리 인정']], { k: 3, extraHard: ['조약이 독도를 일본 영토로 정함', '각서가 독도를 일본에 넣음'], d: 0.35, opt: { axis: AX }, more: { conclude: '1943~1952년 문서는 전쟁 중의 원칙이 점령기 조치와 강화조약으로 이어지는 하나의 흐름이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '각서 제677호와 강화조약이 독도를 다루는 방식(범위를 긋기와 섬을 예로 들기)이 어떻게 다른지 한 문장으로 쓰세요.' }] },
        notes: '문서 날짜는 단원 재료(외교부 서술)에 있는 연도·달만 쓴다(사람 확인 목록).',
      }),
      M({
        id: 'activity.issue', type: 'activity', title: '쟁점별 해석 갈림길',
        method: '쟁점별 해석 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '문서 1(각서 제677호)의 해석 갈림길 하나에서 고르고 근거를 고른다.', base: '문서 2(강화조약)까지 해석 갈림길을 지난다.', challenge: '문서 3(카이로 선언)까지 해석을 이어 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '세 문서의 해석 쟁점', tool: 'dilemma',
          teacher: '"오늘은 상대의 해석을 소리치며 거부하는 것이 아니라, 문서의 문장과 앞뒤 문서로 따져요." 문서마다 일본 정부의 주장과 우리 정부의 설명을 나란히 읽게 한다. \'적힌 섬만 한국 땅\'을 고르는 학생에게 "이름이 없는 다른 섬 3천여 개는 어떻게 될까요?"라고 묻는다. 카이로 선언에서 섬의 크기를 기준으로 삼는 학생에게는 기준이 빼앗긴 과정이라는 점을 짚는다. 누리 소통망의 해석보다 조약 원문과 공식 기관 설명을 먼저 보게 한다.',
          task: '문서마다 해석의 갈림길을 지나며 결과를 추적하고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('세 문서의 해석 쟁점을 원문과 앞뒤 문서로 따지는 길을 고르고 근거를 고르세요.', ISSUE, [['never', 'example', 'cairo']], ISSUE_R, ['chain', 'text'], { d: 0.4 }),
            EXPLOREQ('다른 해석의 길도 끝까지 가 보고, 어떤 결론에 이르는지 견주세요.', ISSUE, ISSUE_R, ['다른 길이 어느 문서를 떼어 읽었는지 찾았다', '내 해석의 근거 문서를 말할 수 있다'], { d: 0.35 }),
            DILQ('친구가 두 각서를 헷갈려 쓴 발표문을 고치는 길을 고르고 근거를 고르세요.', { text: '친구의 발표문: "1946년 6월 각서 제1033호가 일본의 통치 범위를 정했다."', who: '친구', motif: 'house', choices: [
              { id: 'table', text: '두 각서를 표로 견주어 보자고 한다', result: '제677호는 통치·행정 범위, 제1033호는 일본 선박의 접근 금지 수역이라는 차이가 드러난다.', impact: [{ who: '친구', text: '두 문서를 바르게 구별한다', tone: 1 }], ending: '비슷한 문서는 무엇을 정했는지 표로 견주어 구별한다.' },
              { id: 'keep', text: '번호만 다르니 그대로 둔다', result: '발표에서 두 각서의 내용이 뒤섞인다.', impact: [{ who: '듣는 사람', text: '잘못된 내용을 배운다', tone: -1 }], ending: '문서 번호와 내용을 바르게 잇지 않으면 근거가 흔들린다.' }] },
              [['table']], [{ id: 'what', text: '문서는 번호보다 무엇을 정했는지로 구별한다' }, { id: 'same', text: '같은 해의 문서는 내용도 같다', why: '같은 해에 나왔어도 정한 내용이 달라요.' }], ['what'], { d: 0.3, more: { conclude: '해석의 근거는 원문과 앞뒤 공식 문서이고, 비슷한 문서는 무엇을 정했는지로 구별해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '쟁점마다 우리 해석과 근거 문서를 쓰세요.', columns: ['쟁점', '우리 해석', '근거 문서'], cells: [['각서는 최종 결정인가', '', ''], ['적힌 섬은 예시인가', '', ''], ['1905년 편입도 해당하나', '', '']] }] },
        notes: '일본 정부의 주장은 \'주장\'으로만 소개하고 근거로 따진다. 상대국 국민을 탓하는 말은 쓰지 않는다.',
      }),
      M({
        id: 'activity.matrix', type: 'activity', title: '쟁점–근거 표',
        method: '쟁점–근거 표', tool: 'chart', minutes: 18,
        levels: { easy: '쟁점 2개의 근거 문서 수로 막대를 만들고, 막대 끝에 값이 보인다.', base: '쟁점 3개의 막대를 만들고 표 빈칸을 채운다.', challenge: '값 표시 없이 풀고, 근거가 가장 적은 쟁점(빈 칸)을 해석해 더 찾을 자료를 활동지에 쓴다.' },
        activity: {
          title: '쟁점마다 근거 문서 세기', tool: 'chart',
          teacher: '"쟁점마다 근거로 든 문서를 세어 보니 어느 쟁점이 가장 든든하고, 어느 쟁점에 근거를 더 찾아야 할까요?" 칠판 표(쟁점 A 1905년 편입: 카이로 선언·칙령 제41호·태정관 지령 / 쟁점 B 각서는 최종 결정인가: 각서 제677호·제1033호 / 쟁점 C 적힌 섬은 예시인가: 강화조약 제2조·카이로 선언·포츠담 선언·각서 제677호)를 함께 센다. 문서 수가 적은 쟁점을 "약한 주장"으로 단정하는 학생에게 "문서가 둘뿐이면 틀린 해석일까요, 더 찾아볼 쟁점일까요?"라고 묻는다.',
          task: '쟁점마다 근거 문서 수를 막대로 나타내고, 표를 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '쟁점마다 칠판 표의 근거 문서 수로 막대그래프를 완성하세요.', toolOptions: { type: 'bar', mode: 'build', title: '쟁점별 근거 문서 수(우리 반 정리)', unit: '개', xLabel: '쟁점', yLabel: '근거 문서 수', max: 5, data: [['A 1905년 편입', 3], ['B 최종 결정인가', 2], ['C 적힌 섬은 예시인가', 4]] }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '쟁점 2개의 근거 문서 수로 막대그래프를 완성하세요.', toolOptions: { data: [['A 1905년 편입', 3], ['C 적힌 섬은 예시인가', 4]] } } } },
            { prompt: '그래프를 읽고 표의 빈칸(쟁점 B의 근거 문서 수)을 채우세요.', toolOptions: { type: 'bar', mode: 'read', title: '쟁점별 근거 문서 수(우리 반 정리)', unit: '개', xLabel: '쟁점', yLabel: '근거 문서 수', max: 5, data: [['A 1905년 편입', 3], ['B 최종 결정인가', 2], ['C 적힌 섬은 예시인가', 4]], showTable: true, tableBlanks: [1] }, target: { table: true }, difficulty: 0.2 },
            { prompt: '근거 문서가 가장 적은 쟁점을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '쟁점별 근거 문서 수(우리 반 정리)', unit: '개', xLabel: '쟁점', yLabel: '근거 문서 수', max: 5, data: [['A 1905년 편입', 3], ['B 최종 결정인가', 2], ['C 적힌 섬은 예시인가', 4]], question: '근거가 가장 적은 쟁점은?', choices: ['A 1905년 편입', 'B 최종 결정인가', 'C 적힌 섬은 예시인가'] }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '근거 문서가 가장 적은 쟁점에 대해 알맞은 해석을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '쟁점별 근거 문서 수(우리 반 정리)', unit: '개', xLabel: '쟁점', yLabel: '근거 문서 수', max: 5, data: [['A 1905년 편입', 3], ['B 최종 결정인가', 2], ['C 적힌 섬은 예시인가', 4]], question: '쟁점 B를 어떻게 볼까?', choices: ['우리 해석이 틀렸다는 뜻이다', '근거 자료를 더 찾아 보강할 쟁점이다', '쟁점 B는 버려도 된다'], why: ['문서 수는 우리 반이 찾은 양이지 해석의 옳고 그름이 아니에요.', '', '쟁점을 버리면 반론에 답할 길이 사라져요.'] }, target: { pick: 1 }, difficulty: 0.35, conclude: '근거 문서 수는 우리가 찾은 양을 보여 줄 뿐이에요. 적은 쪽은 더 찾아 보강할 자리예요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쟁점 B를 보강하려면 어떤 자료를 어디서 더 찾을지 한 문장으로 쓰세요.' }] },
        notes: '문서 수는 수업에서 정리한 표를 센 값이다. 근거의 많고 적음을 해석의 옳고 그름으로 읽지 않게 한다.',
      }),
      M({
        id: 'activity.memo', type: 'activity', title: '쟁점 정리 메모',
        method: '쟁점 정리 메모', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '질문·해석, 근거·출처를 네 칸 메모로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 반대 해석을 반박하는 칸을 쓴다.' },
        activity: {
          title: '질문–해석–근거–출처 메모', tool: 'rubric-writing',
          teacher: '"쟁점 메모는 남이 읽어도 바로 확인할 수 있어야 해요. 그래서 출처 칸이 꼭 있어요." 쟁점 하나(예: 적힌 섬은 예시인가)를 골라 쓰게 한다. 근거 칸에 "다들 그렇게 말한다"를 쓰는 학생에게 "그 말은 어느 문서의 몇 번째 문장인가요?"라고 묻는다. 반대 해석을 쓸 때는 상대의 주장을 정확히 옮긴 뒤 반박하게 하고, 상대를 깎아내리는 말은 쓰지 않게 한다.',
          task: '쟁점 하나를 골라 질문–해석–근거–출처 메모를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('쟁점 질문과 우리 해석을 1~2문장으로 쓰세요.', '쟁점 하나를 골라 질문으로 쓰고, 그에 대한 우리 해석을 쓰세요.', ['쟁점을 질문 꼴로 썼다', '해석을 한 문장으로 분명히 썼다', '문서 이름과 연도를 바르게 썼다'], { min: 30, max: 200, sent: [1, 2], must: [['?', '까', '인가']], starter: '질문: ~인가? 해석: ~이다.', plus: '쟁점이 어느 문서에서 나왔는지 밝혔다', d: 0.35 }),
            RWQ('해석의 근거와 출처를 2~3문장으로 쓰세요.', '해석을 뒷받침하는 근거 문서와 확인할 수 있는 출처를 쓰세요.', ['근거 문서를 하나 이상 들었다', '출처(공식 기관)를 밝혔다', '근거가 해석과 이어진다'], { min: 40, max: 300, sent: [2, 3], must: [['외교부', '동북아역사재단', '누리집']], starter: '근거는 ~이다. 이 내용은 ~에서 확인할 수 있다.', plus: '근거 문서의 연도나 조항을 정확히 썼다', d: 0.4 }),
            RWQ('반대 해석을 정확히 옮기고 2~3문장으로 반박하세요.', '반대 해석(예: "조약에 독도가 없으니 일본 땅이다")을 옮기고 근거로 반박하세요.', ['반대 해석을 정확히 옮겼다', '근거 문서로 반박했다', '상대를 깎아내리는 말이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['그러나', '하지만', '반면']], starter: '반대 해석은 ~라고 한다. 그러나 ~', plus: '반박의 근거를 둘 이상 들었다', d: 0.45, more: { conclude: '쟁점 메모는 질문·해석·근거·출처를 갖추고 반대 해석까지 정확히 옮겨 답할 때 쓸모 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '쟁점 메모 네 칸을 정리하세요.', columns: ['칸', '내 메모'], cells: [['질문', ''], ['해석', ''], ['근거', ''], ['출처', '']] }] },
      }),

      M({
        id: 'wrap.present', type: 'wrap', title: '쟁점 미니 발표',
        method: '쟁점 미니 발표', tool: 'timer', minutes: 8,
        levels: { easy: '모둠은 2분 발표만 한다.', base: '2분 발표 뒤 1분 질의를 받는다.', challenge: '질의에서 반대 해석으로 묻는 질문에 근거로 답한다.' },
        wrap: {
          teacher: '"모둠마다 쟁점 하나를 2분 동안 질문–해석–근거–출처 차례로 발표해요. 질의는 제가 진행해요." 교사가 타이머로 두 모둠의 발표와 질의를 진행한다. 질의에서 "그 각서의 조항 번호는요?"처럼 기억나지 않는 질문이 나오면 "모르는 것은 확인해 보겠다"고 답하게 하고, 확인하지 않은 숫자를 대지 않게 한다. 반대 해석으로 묻는 질문에는 상대의 말을 먼저 옮긴 뒤 답하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '쟁점 미니 발표', labels: ['발표', '질의'], timeUnit: 'min', plan: { work: 1, rest: 2, rounds: 1 } }, prompt: '두 모둠이 2분씩 발표하고 사이에 1분 질의를 하도록 타이머를 맞추세요.', target: { plan: { work: 2, rest: 1, rounds: 2 } }, difficulty: 0.2 },
            { type: 'choice', prompt: '쟁점 발표의 차례로 알맞은 것은?', options: ['질문 → 해석 → 근거 → 출처', '출처 → 질문 → 근거 → 해석', '해석 → 출처 → 질문 → 근거'], answer: 0, difficulty: 0.15, explain: '무엇을 묻는지 먼저 밝히고, 해석과 근거, 확인할 출처 차례로 말해요.' },
            { type: 'short', prompt: '오늘 발표에서 들은 근거 가운데 가장 설득력 있던 것과 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '쟁점 발표 기록',
          items: [
            { type: 'table', prompt: '발표를 들으며 기록하세요.', columns: ['모둠', '쟁점', '근거 문서', '출처'], cells: [['1모둠', '', '', ''], ['2모둠', '', '', '']] },
            { type: 'short', prompt: '발표 모둠에게 하고 싶은 질문 하나를 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다. 8분 안에 두 모둠만 하고 나머지는 다음 차시에 잇는다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '쟁점 해석 분류 점검',
        method: '쟁점 분류 점검', tool: 'sortboard', minutes: 8,
        levels: { easy: '교사가 해석 문장 두 장을 함께 판정해 보인다.', base: '해석 문장 6장을 타당·근거 부족 바구니에 스스로 넣는다.', challenge: '근거 부족 문장 하나를 근거 있는 문장으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 나온 해석 문장을 근거로 판정해요. 타당한 해석인가요, 근거가 모자란 해석인가요?" "각서 제677호가 독도를 일본에 넣었다"를 타당에 두는 학생에게 지도 도입의 두 색을 떠올리게 한다. "조약 하나만 읽으면 충분하다"를 타당에 두는 학생에게는 1943~1952년 문서 띠를 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['타당', '근거 부족'], cards: ['조약에 적힌 섬은 3천여 개 섬 가운데 예시다', '조약에 독도가 없으니 일본 땅이다', '각서 제677호는 독도를 일본 통치 범위에서 뺐다', '각서 제677호가 독도를 일본에 넣었다', '카이로 선언 원칙은 침탈로 빼앗긴 지역에 적용된다', '조약 하나만 읽으면 충분하다'] }, prompt: '해석 문장을 타당과 근거 부족 바구니에 나누세요.', target: { sort: { 타당: ['조약에 적힌 섬은 3천여 개 섬 가운데 예시다', '각서 제677호는 독도를 일본 통치 범위에서 뺐다', '카이로 선언 원칙은 침탈로 빼앗긴 지역에 적용된다'], '근거 부족': ['조약에 독도가 없으니 일본 땅이다', '각서 제677호가 독도를 일본에 넣었다', '조약 하나만 읽으면 충분하다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '"조약에 독도가 없으니 일본 땅이다"에 답할 근거로 가장 알맞은 것은?', options: ['적힌 섬은 3천여 개 섬 가운데 대표적인 예시다', '조약은 중요하지 않다', '그 말을 한 사람을 믿을 수 없다'], answer: 0, difficulty: 0.2, explain: '조약 문장을 원문대로 읽고, 앞선 각서 제677호와 함께 답해요. 사람을 탓하는 것은 근거가 아니에요.' },
            { type: 'short', prompt: '근거 부족 문장 하나를 골라 근거 있는 문장으로 고쳐 쓰세요.' },
          ],
        },
        worksheet: {
          title: '1943~1952 국제 문서 쟁점',
          items: [
            { type: 'table', prompt: '문서마다 쟁점을 정리하세요.', columns: ['문서', '쟁점', '우리 해석의 근거'], cells: [['각서 제677호(1946)', '', ''], ['강화조약(1951)', '', ''], ['카이로 선언(1943)', '', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '강화조약 제2조는 "제주도·___·울릉도를 포함하는 한국"이라고 적었다.', answer: '거문도' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 외국 독자를 위한 설명과 왜곡 대응 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-explain', [10]);
    const POST = { text: '외국어 게시글: "독도는 1905년까지 주인 없는 섬이었다." 벌써 댓글이 달리기 시작했다.', who: '나', motif: 'house', choices: [
      { id: 'curse', text: '화가 나서 거친 말로 댓글을 단다', result: '게시글이 다툼 글로 더 많이 퍼진다.', impact: [{ who: '읽는 사람', text: '근거보다 다툼만 본다', tone: -1 }], ending: '거친 말은 주장의 신뢰를 떨어뜨리고 왜곡 글을 더 퍼뜨린다.' },
      { id: 'polite', text: '1900년 칙령 제41호와 외교부 누리집 주소를 들어 정중히 답한다', result: '게시자가 "그 칙령은 어디서 볼 수 있죠?"라고 묻는다.', impact: [{ who: '게시자', text: '근거를 확인해 볼 생각을 한다', tone: 1 }],
        next: { text: '게시자가 확인하더니 "그래도 석도가 독도라는 증거는요?"라고 묻는다.', choices: [
          { id: 'more', text: '1906년 울도 군수 보고 같은 다른 사료를 더해 답한다', result: '게시자가 본문에 "다른 견해도 있다"는 줄을 덧붙인다.', impact: [{ who: '읽는 사람', text: '두 설명을 함께 보게 된다', tone: 1 }],
            next: { text: '여전히 원래 문장은 지워지지 않았다.', choices: [
              { id: 'record', text: '대화를 기록해 두고 누리집 운영자에게 근거와 함께 정정을 요청한다', result: '운영자가 검토하겠다는 답을 보낸다.', impact: [{ who: '게시판', text: '정정 절차가 시작된다', tone: 1 }], ending: '근거·출처를 갖춘 정중한 대응과 기록이 정정으로 이어진다.' },
              { id: 'spam', text: '친구들에게 같은 댓글을 도배하자고 한다', result: '게시판이 댓글 도배로 막힌다.', impact: [{ who: '게시판', text: '대화가 끊긴다', tone: -1 }], ending: '도배는 근거 있는 대화까지 묻어 버린다.' }] } },
          { id: 'quit', text: '"모르면 말을 말라"고 하고 대화를 끝낸다', result: '게시자가 더는 묻지 않는다.', impact: [{ who: '게시자', text: '확인할 길을 잃는다', tone: -1 }], ending: '질문은 근거를 보탤 기회였다.' }] } },
      { id: 'share', text: '확인 없이 "이것 좀 봐"라며 친구들에게 퍼 나른다', result: '게시글을 본 사람이 늘어난다.', impact: [{ who: '읽는 사람', text: '왜곡 글을 더 많이 본다', tone: -1 }], ending: '확인 없는 공유는 화를 내더라도 왜곡을 돕는다.' }] };
    const POST_R = [{ id: 'calm', text: '근거와 출처를 갖춘 정중한 대응이 정정을 이끈다' }, { id: 'spread', text: '거친 말과 확인 없는 공유는 왜곡 글을 퍼뜨린다' }, { id: 'loud', text: '세게 화내야 상대가 물러선다', why: '거친 말은 주장의 신뢰를 떨어뜨려요.' }, { id: 'ignoreall', text: '외국어 글은 우리와 상관없다', why: '외국 독자에게 근거를 알릴 기회예요.' }];

    MODS.push(
      M({
        id: 'intro.reader', type: 'intro', title: '외국 독자가 궁금해할 질문',
        method: '외국 독자가 궁금해할 질문 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 두 장만 읽고 먼저 물을 것을 고르게 한다.', base: '네 장 가운데 외국 독자가 먼저 물을 질문 둘을 고른다.', challenge: '카드에 없는 외국 독자의 질문 하나를 만들어 말한다.' },
        intro: {
          teacher: '"독도를 처음 듣는 외국 대학생이 가장 먼저 물을 질문은 무엇일까요?" 질문 카드를 읽고 두세 명에게 고르게 한 뒤, 시연 단추로 질문 두 장이 바구니에 담기는 모습을 보여 준다. "왜 한국 땅이냐"를 바로 묻는다고만 하는 학생에게 "어디에 있는지도 모르는 사람에게 근거부터 말하면 어떨까요?"라고 되묻는다. 외국 독자는 칙령이나 각서가 무엇인지 모른다는 점을 짚고, 오늘은 그 독자를 위한 설명 글을 설계한다고 밝힌다.',
          student: '독도를 처음 듣는 외국 독자가 먼저 물을 것 같은 질문을 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '먼저 물을 질문', cards: ['독도는 어디에 있나요?', '석도와 독도는 같은 섬인가요?', '왜 두 나라가 다르게 말하나요?', '평화선의 폭은 몇 해리인가요?'] }, sequence: [{ pick: ['독도는 어디에 있나요?', '왜 두 나라가 다르게 말하나요?'] }] },
          art: { draw: 'a paper globe with a tiny island highlighted, paper speech bubbles with question marks floating from people of different countries', banner: '처음 듣는 사람은 무엇을 물을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.post', type: 'intro', title: '누리 소통망 글 판정',
        method: '누리 소통망 글 판정', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 글 카드 세 장을 함께 판정해 보인다.', base: '여섯 장을 사실·의견·근거 없는 주장으로 함께 나눈다.', challenge: '근거 없는 주장 카드마다 반박할 사료를 한 마디로 말한다.' },
        intro: {
          teacher: '"이 문장은 사료로 확인할 수 있나요, 누군가의 판단인가요, 아니면 사료와 맞지 않는 주장인가요?" 누리 소통망에서 본 글이라고 생각하고 카드를 읽게 한 뒤, 시연 단추로 세 바구니에 나뉘는 모습을 보여 준다. "독도 교육은 더 늘려야 한다"를 사실로 두는 학생에게 "이 말이 맞는지 틀리는지 사료로 가릴 수 있나요?"라고 묻는다. 조회 수가 많은 글이 믿을 만하다는 말에는 조회 수는 많이 본 것이지 맞다는 뜻이 아니라고 짚는다.',
          student: '누리 소통망의 독도 관련 글을 사실·의견·근거 없는 주장으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['사실', '의견', '근거 없는 주장'], cards: ['1900년 칙령 제41호가 석도를 울도군 관할로 했다', '독도 사진은 가을이 가장 아름답다', '독도는 1905년 전에는 주인 없는 섬이었다', '독도에는 독도경비대가 머문다', '독도 교육 시간을 더 늘려야 한다', '각서 제677호가 독도를 일본에 넣었다'] }, sequence: [{ sort: { 사실: ['1900년 칙령 제41호가 석도를 울도군 관할로 했다', '독도에는 독도경비대가 머문다'], 의견: ['독도 사진은 가을이 가장 아름답다', '독도 교육 시간을 더 늘려야 한다'], '근거 없는 주장': ['독도는 1905년 전에는 주인 없는 섬이었다', '각서 제677호가 독도를 일본에 넣었다'] } }] },
          art: { draw: 'a paper phone screen showing a feed of short posts about an island, three paper baskets below labelled with check, speech bubble and question mark', banner: '사실일까, 의견일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      M({
        id: 'activity.plan', type: 'activity', title: '설명 글 구조 설계',
        method: '설명 글 구조 설계', tool: 'story', minutes: 18,
        levels: { easy: '질문·답·근거 3칸을 차례로 놓는다.', base: '출처를 더한 4칸을 놓고, 다른 질문의 설명 글도 4칸으로 짠다.', challenge: '마무리까지 5칸을 놓고, 외국 독자에게 쓸 문장을 가려 고른다.' },
        activity: {
          title: '질문→답→근거→출처→마무리', tool: 'story',
          teacher: '"외국 독자가 가장 먼저 알아야 할 것은 무엇일까요? 설명 글은 질문에서 시작해 답을 먼저 주고, 근거와 출처로 받친 뒤 마무리해요." 근거를 답보다 앞에 두는 학생에게 "답을 모르는 채 근거를 읽으면 독자는 무엇을 위한 근거인지 알까요?"라고 묻는다. 우리끼리만 아는 줄임말을 효과적이라고 고르는 학생에게는 처음 듣는 사람의 입장에서 다시 읽게 한다. 배경 설명(칙령이 무엇인지)을 빼먹지 않게 짚는다.',
          task: '외국 독자를 위한 설명 글 카드를 차례대로 놓고, 쓸 문장을 골라요.', levels: LV,
          items: [
            ORDERQ('"독도는 왜 한국 땅인가요?"에 답하는 설명 글 카드를 차례대로 놓으세요.', ['질문: 독도는 왜 한국 영토인가요?', '답: 역사와 국제법 근거로 한국 영토예요', '근거: 1900년 칙령 제41호가 독도를 관할했어요', '출처: 외교부 독도 누리집에서 볼 수 있어요', '마무리: 궁금한 점은 공식 자료로 함께 확인해요'], { sub: { easy: [0, 1, 2], base: [0, 1, 2, 3] }, d: 0.3, opt: { title: '외국 독자용 설명 글' } }),
            ORDERQ('"조약에 독도가 없다던데요?"에 답하는 설명 글 카드를 차례대로 놓으세요.', ['질문: 강화조약에 독도가 없다던데요?', '답: 적힌 섬은 대표적인 예시예요', '근거: 한국의 섬 3천여 개를 다 적지 않았어요', '출처: 외교부 독도 누리집의 조약 설명', '마무리: 앞선 각서 제677호도 함께 보세요'], { sub: { easy: [0, 1, 2], base: [0, 1, 2, 3] }, d: 0.35, opt: { title: '외국 독자용 설명 글' } }),
            PICKQ('외국 독자용 설명 글에 쓰기 알맞은 문장만 고르세요.', ['칙령은 대한제국 정부가 낸 법령이에요', '자세한 원문은 외교부 누리집에 있어요'], ['ㅇㅈ? 독도는 당연 우리 땅', '이걸 모르면 상식이 없는 거예요'], { d: 0.3, opt: { basket: '쓸 문장', title: '외국 독자용 설명 글' }, more: { conclude: '외국 독자용 글은 답을 먼저, 근거와 출처로 받치고, 처음 듣는 사람도 알 낱말로 써요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 설명 글의 짜임을 쓰세요.', columns: ['칸', '쓸 내용'], cells: [['질문', ''], ['답', ''], ['근거', ''], ['출처', ''], ['마무리', '']] }] },
      }),
      M({
        id: 'activity.draft', type: 'activity', title: '외국 독자용 설명 글',
        method: '외국 독자용 설명 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '두 단락(질문·답 / 근거 둘·출처)과 마무리를 쓰고 기준표(정확성·출처·어조)로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마무리에 영어 요약 한 줄(Dokdo 표기)을 더한다.' },
        activity: {
          title: '두 단락 설명 글', tool: 'rubric-writing',
          teacher: '"오늘 글의 독자는 독도를 처음 듣는 외국 대학생이에요. 그 사람이 읽고 스스로 확인할 수 있어야 해요." 근거는 사료 하나와 국제 문서 하나로 둘을 넣게 한다. 감정 섞인 말(\'억지\'·\'뻔뻔\')을 쓴 학생에게 "이 낱말을 외국 독자가 읽으면 근거가 보일까요, 감정이 보일까요?"라고 묻는다. 외교부 누리집은 독도를 Dokdo, 동해를 East Sea로 적는다는 점을 알려 준다.',
          task: '외국 독자를 위한 설명 글을 두 단락으로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('첫 단락: 외국 독자의 질문과 답을 2~3문장으로 쓰세요.', '외국 독자의 질문 "독도는 왜 한국 땅인가요?"와 그 답을 쓰세요.', ['독도가 어디에 있는지 먼저 알렸다', '답을 첫 단락에 분명히 썼다', '처음 듣는 사람도 알 낱말로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['동해', '울릉도']], starter: '독도는 한국 동해의 울릉도 가까이에 있는 섬입니다. ~', plus: '질문을 한 사람을 존중하는 첫 문장을 썼다', d: 0.35 }),
            RWQ('둘째 단락: 사료 하나와 국제 문서 하나를 근거로 출처와 함께 2~4문장으로 쓰세요.', '사료 하나(예: 1900년 칙령 제41호)와 국제 문서 하나(예: 1946년 각서 제677호)를 근거로 쓰세요.', ['사료 근거를 하나 들었다', '국제 문서 근거를 하나 들었다', '출처를 밝혔다'], { min: 60, max: 400, sent: [2, 4], must: [['칙령', '지리지', '태정관'], ['각서', '조약', '카이로']], starter: '첫째, 1900년 ~. 둘째, 1946년 ~. 자세한 내용은 ~에서 볼 수 있습니다.', plus: '문서마다 무엇인지 한 마디로 풀어 썼다', d: 0.4 }),
            RWQ('마무리 문장을 1~2문장으로 쓰고 어조를 점검하세요.', '외국 독자가 더 알아볼 수 있게 마무리 문장을 쓰세요.', ['감정 섞인 낱말이 없다', '더 알아볼 곳을 알렸다', '상대 나라 사람을 탓하지 않았다'], { min: 20, max: 200, sent: [1, 2], must: [['확인', '자료', '누리집']], starter: '더 궁금한 점은 ~에서 함께 확인해 보세요.', plus: '영어 요약 한 줄에 Dokdo 표기를 썼다', d: 0.4, more: { conclude: '외국 독자용 글은 정확한 근거, 밝힌 출처, 존중하는 어조가 함께 있을 때 설득해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 설명 글을 점검하세요.', options: ['위치를 먼저 알렸다', '근거 둘을 넣었다', '출처를 밝혔다', '감정 섞인 낱말이 없다', 'Dokdo 표기를 바르게 썼다'] }] },
      }),
      M({
        id: 'activity.org', type: 'activity', title: '질문마다 답 찾을 공식 기관',
        method: '질문마다 답 찾을 공식 기관', tool: 'emotion', minutes: 18,
        levels: { easy: '질문 두 개와 공식 기관을 잇는다.', base: '질문 세 개를 잇고, 출처를 고르는 갈림길과 믿을 만한 출처 고르기를 한다.', challenge: '질문 네 개를 잇고, 함정 카드(익명 게시판·영상 댓글)가 더해진다.' },
        activity: {
          title: '질문과 기관 잇기', tool: 'emotion',
          teacher: '"이 질문의 답은 어디서 찾아야 가장 믿을 만할까요?" 질문 카드와 기관 카드를 잇게 한다. 동북아역사재단을 \'민간 단체\'로 아는 학생에게 정부가 세운 공공 연구기관이라는 점을 짚는다. 천연보호구역 규칙을 외교부에서 찾는다고 잇는 학생에게 "자연유산을 맡는 기관은 어디일까요?"라고 묻는다. 익명 게시판을 고르는 학생에게는 출처를 확인할 수 없는 글은 근거로 쓰지 않는다고 말해 준다.',
          task: '질문 카드와 답을 찾을 공식 기관 카드를 잇고, 믿을 만한 출처를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MATCHQ('질문마다 답을 찾을 공식 기관을 이으세요.', [['정부의 공식 입장은 무엇인가요?', '외교부 독도 누리집'], ['사료를 더 깊이 읽고 싶어요', '동북아역사재단'], ['천연보호구역 규칙은 무엇인가요?', '국가유산청'], ['독도의 주소와 행정은요?', '울릉군']], { k: 2, extraHard: ['익명 게시판', '영상 댓글'], d: 0.3, opt: { weather: false }, more: { levels: { easy: { prompt: '질문마다 답을 찾을 공식 기관을 이으세요(2쌍).', toolOptions: { slots: ['정부의 공식 입장은 무엇인가요?', '사료를 더 깊이 읽고 싶어요'], cards: ['동북아역사재단', '외교부 독도 누리집'] }, target: { match: { '정부의 공식 입장은 무엇인가요?': '외교부 독도 누리집', '사료를 더 깊이 읽고 싶어요': '동북아역사재단' } } }, base: { prompt: '질문마다 답을 찾을 공식 기관을 이으세요(3쌍).', toolOptions: { slots: ['정부의 공식 입장은 무엇인가요?', '사료를 더 깊이 읽고 싶어요', '천연보호구역 규칙은 무엇인가요?'], cards: ['국가유산청', '동북아역사재단', '외교부 독도 누리집'] }, target: { match: { '정부의 공식 입장은 무엇인가요?': '외교부 독도 누리집', '사료를 더 깊이 읽고 싶어요': '동북아역사재단', '천연보호구역 규칙은 무엇인가요?': '국가유산청' } } }, challenge: { prompt: '질문마다 답을 찾을 공식 기관을 이으세요(4쌍, 함정 카드 더함).', toolOptions: { cards: ['울릉군', '국가유산청', '동북아역사재단', '외교부 독도 누리집', '익명 게시판', '영상 댓글'] } } } } }),
            { prompt: '외국 친구가 출처 없는 해석 영상을 보냈어요. 알맞은 대응을 고르세요.', toolOptions: { mode: 'branch', situation: '외국 친구가 "이 영상 보니까 독도가 너희 땅이 아니래"라며 출처 없는 해석 영상을 보냈다.', choices: [{ id: 'check', text: '영상의 출처를 묻고 외교부 누리집 설명을 함께 보내 준다', result: '친구가 두 자료를 견주어 본다.', mood: '편안함' }, { id: 'block', text: '말없이 친구를 차단한다', result: '친구는 영상 설명만 기억한다.', mood: '속상함', why: '대화를 끊으면 근거를 알릴 기회도 사라져요.' }, { id: 'mock', text: '"그런 걸 믿냐"고 놀린다', result: '친구가 기분이 상해 대화를 그만둔다.', mood: '화남', why: '놀림은 근거가 아니라 다툼만 남겨요.' }] }, target: { choice: 'check' }, difficulty: 0.25 },
            { prompt: '믿을 만한 출처의 특징만 고르세요.', toolOptions: { mode: 'pick', weather: false, basket: '믿을 만한 출처', cards: ['만든 기관이 밝혀져 있다', '근거 문서와 날짜가 있다', '조회 수가 아주 많다', '글쓴이를 알 수 없다', '원문을 함께 보여 준다'] }, target: { pick: ['만든 기관이 밝혀져 있다', '근거 문서와 날짜가 있다', '원문을 함께 보여 준다'] }, difficulty: 0.25, conclude: '질문마다 그 일을 맡은 공식 기관에서 답을 찾고, 만든 곳과 근거가 밝혀진 자료를 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '질문과 찾아볼 곳을 정리하세요.', columns: ['질문', '찾아볼 공식 기관'], cells: [['정부 입장', ''], ['사료', ''], ['천연보호구역', ''], ['주소·행정', '']] }] },
        notes: '동북아역사재단은 정부가 세운 공공 연구기관이다. 기관 역할은 단원 재료 서술을 따른다(사람 확인 목록).',
      }),
      M({
        id: 'activity.dil', type: 'activity', title: '왜곡 글에 답할 때',
        method: '왜곡 글에 답할 때', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 대응을 고르고 결과(확산·정정)를 본 뒤 근거를 고른다.', base: '두 번째 갈림길(추가 질문)까지 간다.', challenge: '세 번째 갈림길(정정 요청)까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '"주인 없는 섬" 게시글 앞에서', tool: 'dilemma',
          teacher: '"화가 나는 글을 봤을 때, 무엇이 그 글을 덜 퍼지게 하고 고쳐지게 할까요?" 선택마다 결과가 확산인지 정정인지 소리 내어 읽게 한다. 거친 댓글을 고르는 학생에게 "그 댓글 때문에 게시글을 본 사람이 늘었나요, 줄었나요?"라고 묻는다. 확인 없이 퍼 나르기를 고르는 학생에게는 화를 내며 공유해도 왜곡을 돕는다는 점을 짚는다. 추가 질문에는 다른 사료를 더해 답하게 하고, 마지막에는 기록과 정정 요청이라는 절차를 보여 준다.',
          task: '왜곡 글에 답하는 갈림길을 따라가며 결과를 추적하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('"주인 없는 섬" 게시글에 근거로 대응해 정정을 이끄는 길을 고르고 근거를 고르세요.', POST, [['polite', 'more', 'record']], POST_R, ['calm', 'spread'], { d: 0.4 }),
            EXPLOREQ('다른 대응의 길도 끝까지 가 보고, 확산과 정정 가운데 어디로 갔는지 견주세요.', POST, POST_R, ['다른 길이 확산으로 끝난 까닭을 짚었다', '정정으로 가는 데 필요한 것(근거·출처·기록)을 말할 수 있다'], { d: 0.35 }),
            DILQ('친구가 왜곡 글을 캡처해 단톡방에 올리며 "다 같이 욕하자"고 할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '친구가 왜곡 글을 캡처해 단톡방에 올리며 "다 같이 욕 댓글 달자"고 한다.', who: '친구', motif: 'house', choices: [
              { id: 'join', text: '함께 욕 댓글을 단다', result: '게시글이 다툼으로 더 많이 노출된다.', impact: [{ who: '게시글', text: '더 널리 퍼진다', tone: -1 }], ending: '모여서 욕하면 왜곡 글의 노출을 키운다.' },
              { id: 'suggest', text: '욕 대신 근거 링크 하나씩 남기자고 제안한다', result: '친구 몇 명이 외교부 누리집 주소를 단 정중한 댓글을 남긴다.', impact: [{ who: '읽는 사람', text: '근거를 함께 보게 된다', tone: 1 }], ending: '같은 마음도 근거로 모으면 힘이 된다.' }] },
              [['suggest']], [{ id: 'calm2', text: '근거와 출처로 정중하게 답하는 것이 설득력을 지킨다' }, { id: 'crowd', text: '여럿이 욕하면 상대가 물러선다', why: '모인 욕설은 왜곡 글을 더 퍼뜨리고 우리 주장의 신뢰를 떨어뜨려요.' }], ['calm2'], { d: 0.3, more: { conclude: '왜곡 글에는 거친 말 대신 근거·출처로 정중히 답하고, 기록해 정정을 요청해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"독도는 1905년까지 주인 없는 섬이었다"는 글에 남길 정중한 댓글을 근거와 출처를 넣어 두 문장으로 쓰세요.' }] },
        notes: '실제 게시글·계정을 찾아 댓글을 달게 하지 않는다. 수업 안 가상 장면으로만 연습한다.',
      }),

      M({
        id: 'wrap.qa', type: 'wrap', title: '외국 친구 역할 문답',
        method: '외국 친구 역할 문답', tool: 'timer', minutes: 8,
        levels: { easy: '짝이 질문 하나를 하고 근거로 답한다.', base: '질문 둘에 답하며 짝이 점검 칸에 표시한다.', challenge: '질문 셋에 답하고, 마지막 질문은 반대 해석으로 묻는다.' },
        wrap: {
          teacher: '"짝이 외국 친구 역할을 맡아 30초 동안 묻고, 나는 1분 동안 근거로 답해요. 두 번 돌아가요." 교사가 타이머로 묻기와 답하기를 진행한다. 답할 때 "그냥 우리 땅이에요"에서 멈추면 짝이 "근거는요?"라고 되묻게 한다. 확인하지 않은 숫자를 대는 대신 "확인해 보겠다"고 말하는 것이 신뢰를 지킨다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '외국 친구 역할 문답', labels: ['묻기', '답하기'], plan: { work: 20, rest: 20, rounds: 1 } }, prompt: '30초 묻고 1분 답하기를 두 번 하도록 타이머를 맞추고, 문답에서 지킨 것을 표시하세요.', target: { plan: { work: 30, rest: 60, rounds: 2 }, selfCheck: ['답을 먼저 말했다', '근거를 하나 이상 들었다', '출처를 밝혔다', '존중하는 말투로 답했다'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '외국 친구가 "그 각서의 정확한 날짜는요?"라고 물었는데 기억나지 않아요. 알맞은 답은?', options: ['그럴듯한 날짜를 댄다', '확인해서 알려 주겠다고 말한다', '중요하지 않다고 넘긴다'], answer: 1, difficulty: 0.15, explain: '모르는 것은 확인해 보겠다고 말해야 다른 근거의 믿음도 지켜져요.' },
            { type: 'short', prompt: '짝의 질문 가운데 답하기 가장 어려웠던 것과, 다음에 어떻게 답할지 쓰세요.' },
          ],
        },
        worksheet: {
          title: '외국 친구 역할 문답',
          items: [
            { type: 'table', prompt: '문답을 기록하세요.', columns: ['질문', '내가 든 근거', '출처'], cells: [['1', '', ''], ['2', '', '']] },
            { type: 'short', prompt: '짝이 답할 때 가장 설득력 있던 문장을 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다. 역할극의 외국 친구는 가상 인물이다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '10학년 근거 지도',
        method: '10학년 근거 지도', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 사료·주권 두 가지의 카드를 먼저 달아 보인다.', base: '사료·주권·국제 문서 세 가지까지 스스로 단다.', challenge: '대응까지 네 가지에 모두 카드를 단다.' },
        wrap: {
          teacher: '"고1 동안 배운 근거를 한 장에 모아요. 외국 친구가 물으면 어느 가지에서 꺼내 쓸까요?" 카드를 가지에 단 뒤 출구 질문으로 넘어간다. 실효적 지배를 사료 가지에 다는 학생에게는 국제법 개념이라는 점을 짚되 독도경비대처럼 오늘의 사례와도 이어진다고 말해 준다. "독도는 분쟁 지역"을 고1에서 확인한 사실로 두는 학생에게는 정부 입장을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '10학년 독도 근거', slots: ['사료', '주권', '국제 문서', '대응'], cards: ['칙령 제41호(1900)', '『세종실록』 「지리지」(1454)', '영해 12해리', '평화적·계속적·공개적 행사', '각서 제677호(1946)', '강화조약 제2조(1951)', '근거·출처로 정중히 답하기', '공식 기관 자료로 확인하기'] }, prompt: '한 해 동안 배운 근거 카드를 네 가지에 다세요.', target: { sort: { 사료: ['칙령 제41호(1900)', '『세종실록』 「지리지」(1454)'], 주권: ['영해 12해리', '평화적·계속적·공개적 행사'], '국제 문서': ['각서 제677호(1946)', '강화조약 제2조(1951)'], 대응: ['근거·출처로 정중히 답하기', '공식 기관 자료로 확인하기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '외국 친구가 "왜 한국 땅이냐"고 물을 때 가장 먼저 꺼낼 말로 알맞은 것은?', options: ['역사와 국제법 근거로 한국 영토라는 답과 근거 하나', '상대 나라에 대한 불만', '그냥 우리 땅이라는 말'], answer: 0, difficulty: 0.15, explain: '답을 먼저 말하고, 사료나 국제 문서 근거 하나를 출처와 함께 들어요.' },
            { type: 'short', prompt: '고1에서 새로 배운 근거 가운데 가장 쓸모 있었던 것과 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '10학년 독도 근거 지도',
          items: [
            { type: 'table', prompt: '네 갈래마다 기억할 근거를 쓰세요.', columns: ['갈래', '기억할 근거'], cells: [['사료', ''], ['주권', ''], ['국제 문서', ''], ['대응', '']] },
            { type: 'short', prompt: '고2에서 더 알고 싶은 것을 하나 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 독도를 지키는 기관과 120년의 발자취 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-guard', [11]);
    const ORGS = ['독도경비대', '해양경찰', '울릉군', '동북아역사재단', '외교부', '국가유산청'];
    const ULL = { grid: [7, 4], title: '울릉도·독도 확대 칸 지도(줄인 그림)', places: [{ name: '울릉군청', icon: 'office', at: [1, 1] }, { name: '울릉도 항구', icon: 'port', at: [1, 2] }, { name: '독도경비대', icon: 'police', at: [5, 1] }, { name: '독도 등대', icon: 'lighthouse', at: [5, 2] }], sea: [[0, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [0, 3], [2, 3], [3, 3], [4, 3], [6, 3], [3, 1], [3, 2], [6, 1], [6, 2], [4, 1], [4, 2]] };
    const FLOW = ['1900 칙령 제41호: 석도를 울도군 관할로', '1906 울도 군수 보고: "본군 소속 독도"', '1946 각서 제677호: 일본 통치 범위에서 제외', '1952 평화선 선언', '1950년대 울릉도 주민의 독도의용수비대', '오늘: 경찰인 독도경비대가 머문다'];

    MODS.push(
      M({
        id: 'intro.who', type: 'intro', title: '기관 이름 보고 하는 일 어림',
        method: '기관 이름 보고 하는 일 어림', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 기관 카드 두 장(독도경비대·외교부)을 읽고 하는 일을 함께 어림한다.', base: '아는 기관 세 곳을 고르고 하는 일을 어림해 말한다.', challenge: '네 곳을 고르고, 어림한 일이 맞는지 활동에서 확인하겠다고 적어 둔다.' },
        intro: {
          teacher: '"지금 이 순간 독도를 지키고 있는 사람은 누구일까요?" 대답을 듣고(군인이요·경찰이요) 기관 카드를 하나씩 읽게 한다. 아는 기관을 고르게 한 뒤 시연 단추로 카드가 바구니에 담기는 모습을 보여 준다. "군대가 지켜요"라는 말이 나오면 "독도를 경찰이 지킨다는 것은 무엇을 뜻할까요?"라고 되물으며, 자기 영토의 치안을 맡는 일이라는 점을 짚는다. 오늘은 기관마다 하는 일과 1900년부터 이어진 수호의 발자취를 정리한다고 밝힌다.',
          student: '독도와 관련된 기관 카드 가운데 내가 아는 곳을 고르고, 그 기관이 하는 일을 어림해 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '내가 아는 기관', cards: ORGS }, sequence: [{ pick: ['독도경비대', '외교부'] }] },
          art: { draw: 'paper name badges of different organizations pinned around a small paper island: a police cap, a coast guard boat, a town hall, a library of documents and a globe', banner: '누가 독도를 지킬까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '고르기는 채점하지 않는다. 어림한 일은 활동 \'기관과 하는 일 잇기\'에서 확인한다.',
      }),
      M({
        id: 'intro.map', type: 'intro', title: '기관 위치 지도',
        method: '기관 위치 지도', tool: 'map', minutes: 6,
        levels: { easy: '독도경비대·울릉군청 두 곳만 함께 짚는다.', base: '독도경비대·독도 등대·울릉군청 세 곳을 짚는다.', challenge: '네 곳(항구 포함)을 짚고, 섬 위·둘레 바다·울릉도로 나누어 맡는 일을 말한다.' },
        intro: {
          teacher: '"독도를 지키는 일은 독도 섬 위에서만 일어날까요?" 칸 지도에서 울릉도와 독도를 보이고, 시연 단추로 독도경비대 자리에 핀이 꽂히는 모습을 보여 준다. 섬 위는 독도경비대, 둘레 바다는 해양경찰, 행정은 울릉군이 맡는다고 알린다. "해양경찰이 섬에 산다"는 말이 나오면 섬 위와 둘레 바다로 나누어 생각하게 한다. 칸 지도는 줄인 그림이라 실제 거리·위치와 다르다고 먼저 말한다.',
          student: '울릉도·독도 칸 지도에서 독도를 지키는 기관이 있는 곳을 찾아 짚어 보세요.',
          demo: { tool: 'map', options: ULL, sequence: [{ place: '독도경비대' }] },
          art: { draw: 'two paper islands, a larger one with a town hall and a harbor and a smaller rocky one with a lighthouse and a guard post, paper boats between them', banner: '독도를 지키는 자리', extra: [{ motif: 'bird', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.match', type: 'activity', title: '기관과 하는 일 잇기',
        method: '기관과 하는 일 잇기', tool: 'emotion', minutes: 18,
        levels: { easy: '기관 세 곳과 하는 일을 잇는다.', base: '기관 네 곳을 잇고, 기관이 일하는 자리를 나누며, 울릉군의 몫을 판단한다.', challenge: '기관 다섯 곳과 하는 일을 잇고, 함정 카드가 더해진다.' },
        activity: {
          title: '기관마다 맡은 일', tool: 'emotion',
          teacher: '"이 기관은 독도의 어느 부분을 맡고 있나요?" 해양경찰과 독도경비대의 역할을 바꾸어 잇는 학생에게는 섬 위와 둘레 바다로 나누어 생각하게 한다. 동북아역사재단을 국가 기관이 아닌 민간 단체로 아는 학생에게는 정부가 세운 공공 연구기관이라는 점을 짚는다. 울릉군이 외교 교섭을 한다고 고르는 학생에게는 외교는 중앙 정부의 몫이라고 말해 준다.',
          task: '기관 카드와 하는 일 카드를 잇고, 기관이 일하는 자리를 나눠요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            MATCHQ('기관과 그 기관이 독도에서 하는 일을 이으세요.', [['독도경비대', '섬에 머물며 경비한다'], ['해양경찰', '둘레 바다를 경비한다'], ['울릉군', '독도리 주소 등 행정을 맡는다'], ['동북아역사재단', '독도 연구와 교육 자료를 낸다'], ['외교부', '대외 입장과 홍보를 맡는다']], { k: 3, extraHard: ['외국과 외교 교섭을 한다(울릉군)', '섬에 군부대를 둔다'], d: 0.3, opt: { weather: false }, more: { levels: { easy: { prompt: '기관과 그 기관이 독도에서 하는 일을 이으세요(3쌍).', toolOptions: { slots: ['독도경비대', '해양경찰', '울릉군'], cards: ['독도리 주소 등 행정을 맡는다', '둘레 바다를 경비한다', '섬에 머물며 경비한다'] }, target: { match: { 독도경비대: '섬에 머물며 경비한다', 해양경찰: '둘레 바다를 경비한다', 울릉군: '독도리 주소 등 행정을 맡는다' } } }, base: { prompt: '기관과 그 기관이 독도에서 하는 일을 이으세요(4쌍).', toolOptions: { slots: ['독도경비대', '해양경찰', '울릉군', '동북아역사재단'], cards: ['독도 연구와 교육 자료를 낸다', '독도리 주소 등 행정을 맡는다', '둘레 바다를 경비한다', '섬에 머물며 경비한다'] }, target: { match: { 독도경비대: '섬에 머물며 경비한다', 해양경찰: '둘레 바다를 경비한다', 울릉군: '독도리 주소 등 행정을 맡는다', 동북아역사재단: '독도 연구와 교육 자료를 낸다' } } }, challenge: { prompt: '기관과 그 기관이 독도에서 하는 일을 이으세요(5쌍, 함정 카드 더함).', toolOptions: { cards: ['대외 입장과 홍보를 맡는다', '독도 연구와 교육 자료를 낸다', '독도리 주소 등 행정을 맡는다', '둘레 바다를 경비한다', '섬에 머물며 경비한다', '외국과 외교 교섭을 한다(울릉군)', '섬에 군부대를 둔다'] } } } } }),
            SORTQ('기관이 주로 일하는 자리로 나누세요.', ['독도 섬 위', '독도 둘레 바다', '울릉도·육지'], [['독도경비대', '독도 등대'], ['해양경찰'], ['울릉군청', '동북아역사재단']], { k: 1, d: 0.25, opt: { weather: false } }),
            { prompt: '친구가 "울릉군이 독도 문제로 외국과 협상한대"라고 해요. 알맞은 답을 고르세요.', toolOptions: { mode: 'branch', situation: '친구: "독도는 울릉군 땅이니까 울릉군이 외국과 협상한대."', choices: [{ id: 'central', text: '울릉군은 행정을 맡고, 외교는 중앙 정부(외교부)의 몫이라고 말한다', result: '친구가 지방 정부와 중앙 정부의 일을 나누어 본다.', mood: '편안함' }, { id: 'yes', text: '맞다고 맞장구친다', result: '잘못된 정보가 그대로 남는다.', mood: '걱정', why: '외교 교섭은 중앙 정부(외교부)의 몫이에요.' }, { id: 'nobody', text: '아무도 협상하지 않으니 상관없다고 한다', result: '친구가 기관의 역할을 알 기회를 놓친다.', mood: '속상함', why: '기관마다 맡은 일을 바르게 알려 주는 것이 좋아요.' }] }, target: { choice: 'central' }, difficulty: 0.25, conclude: '독도는 경비(독도경비대·해양경찰), 행정(울릉군), 연구(동북아역사재단), 외교(외교부)가 나누어 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기관과 하는 일을 정리하세요.', columns: ['기관', '하는 일', '일하는 자리'], cells: [['독도경비대', '', ''], ['해양경찰', '', ''], ['울릉군', '', ''], ['동북아역사재단', '', '']] }] },
        notes: '기관 역할은 단원 재료(외교부 서술)를 따른다(사람 확인 목록). 국가유산청은 천연보호구역 관리로 다음 주제에서 다룬다.',
      }),
      M({
        id: 'activity.role', type: 'activity', title: '역할 분담 그래프',
        method: '역할 분담 그래프', tool: 'chart', minutes: 18,
        levels: { easy: '세 분야 막대를 만들고, 막대 끝에 값이 보인다.', base: '네 분야(외교·경비·연구·교육·행정·보호) 막대를 만들고 읽는다.', challenge: '값 표시 없이 풀고, \'기관 수가 적으면 덜 중요하다\'는 해석을 반박하는 문장을 쓴다.' },
        activity: {
          title: '분야별 기관 수', tool: 'chart',
          teacher: '"오늘 다룬 기관 일곱 곳(외교부 / 독도경비대·해양경찰 / 동북아역사재단·교육부 / 울릉군·국가유산청)을 분야별로 세어 막대로 그려 봐요." 칠판에 함께 센 뒤 그래프를 만든다. 외교 막대가 짧다고 "외교는 덜 중요하다"고 읽는 학생에게 "기관 수와 그 일의 무게는 같은 것일까요?"라고 묻는다. 막대는 오늘 수업에서 다룬 기관만 센 것이라는 점을 먼저 밝힌다.',
          task: '분야별 기관 수를 막대그래프로 만들고, 바르게 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '오늘 다룬 기관 7곳을 분야별로 센 수로 막대그래프를 완성하세요.', toolOptions: { type: 'bar', mode: 'build', title: '분야별 기관 수(오늘 다룬 7곳)', unit: '곳', xLabel: '분야', yLabel: '기관 수', max: 3, data: [['외교', 1], ['경비', 2], ['연구·교육', 2], ['행정·보호', 2]] }, target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '외교·경비·연구·교육 세 분야의 기관 수로 막대그래프를 완성하세요.', toolOptions: { data: [['외교', 1], ['경비', 2], ['연구·교육', 2]] } } } },
            { prompt: '기관이 한 곳뿐인 분야를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '분야별 기관 수(오늘 다룬 7곳)', unit: '곳', xLabel: '분야', yLabel: '기관 수', max: 3, data: [['외교', 1], ['경비', 2], ['연구·교육', 2], ['행정·보호', 2]], question: '한 곳뿐인 분야는?', choices: ['외교', '경비', '연구·교육', '행정·보호'] }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '경비 분야 막대가 나타내는 기관 수를 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '분야별 기관 수(오늘 다룬 7곳)', unit: '곳', xLabel: '분야', yLabel: '기관 수', max: 3, data: [['외교', 1], ['경비', 2], ['연구·교육', 2], ['행정·보호', 2]], question: '경비 분야는 몇 곳?' }, target: { value: 2 }, difficulty: 0.2 },
            { prompt: '이 그래프의 해석으로 알맞은 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '분야별 기관 수(오늘 다룬 7곳)', unit: '곳', xLabel: '분야', yLabel: '기관 수', max: 3, data: [['외교', 1], ['경비', 2], ['연구·교육', 2], ['행정·보호', 2]], question: '알맞은 해석은?', choices: ['독도는 여러 분야의 기관이 나누어 지킨다', '외교는 기관이 하나라 덜 중요하다', '경비 기관만 있으면 충분하다'], why: ['', '기관 수와 일의 무게는 같지 않아요.', '경비·행정·연구·외교가 함께 해야 해요.'] }, target: { pick: 0 }, difficulty: 0.35, conclude: '독도 수호는 한 기관이 아니라 경비·행정·연구·교육·외교가 역할을 나누어 함께 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"기관 수가 적은 분야는 덜 중요하다"는 해석을 반박하는 문장을 한두 문장으로 쓰세요.' }] },
        notes: '기관 수는 수업에서 다룬 일곱 곳만 센 값이다. 화면 제목에 밝힌다.',
      }),
      M({
        id: 'activity.line', type: 'activity', title: '1900~오늘 수호 발자취',
        method: '1900~오늘 수호 발자취', tool: 'timeline', minutes: 18,
        levels: { easy: '발자취 카드 4장을 놓고, 놓을 때마다 맞는지 바로 보인다.', base: '카드 6장을 놓고(시마네현 고시는 남긴다), 시대 칸에 나누고 시대마다 지킨 주체를 잇는다.', challenge: '카드가 섞여 나오고, 활동지에 국권 피탈기(1910~1945)의 사정을 덧붙여 흐름을 설명한다.' },
        activity: {
          title: '수호의 발자취 띠', tool: 'timeline',
          teacher: '"독도를 지켜 온 역사는 언제부터 시작되었다고 할 수 있을까요?" 대답을 듣고(광복 뒤부터요·칙령 때부터요) 1900년 칙령 제41호부터 오늘의 독도경비대까지 흐름이 이어진다고 알린다. 의용수비대를 평화선 앞에 두는 학생에게는 평화선이 1952년이고 의용수비대는 그 뒤 활동했다는 점을 짚는다. 시마네현 고시 카드를 띠에 놓는 학생에게는 우리 쪽 수호 활동이 아니라는 점을 묻는다. 공식 자료에 연도가 있는 사건만 연도로 말하게 하고, 영웅담으로 부풀리지 않게 한다.',
          task: '1900년부터 오늘까지 독도를 지킨 일을 차례대로 놓고, 시대와 주체를 이어요.', levels: LV,
          items: [
            ORDERQ('1900년부터 오늘까지 독도를 지킨 일을 차례대로 놓으세요. 우리 쪽 수호 활동이 아닌 카드는 남겨요.', FLOW, { sub: { easy: [0, 1, 3, 5] }, traps: ['1905 시마네현 고시 제40호'], d: 0.3, opt: { axis: AX }, more: { hints: ['카드의 연도를 먼저 읽고, 우리 쪽이 한 일인지 따져요.'] } }),
            SORTQ('발자취 카드를 시대 칸에 나누세요.', ['대한제국', '광복 뒤 1940~50년대', '오늘날'], [[FLOW[0], FLOW[1]], [FLOW[2], FLOW[3], FLOW[4]], [FLOW[5]]], { k: 1, d: 0.3, opt: { axis: AX } }),
            MATCHQ('시대마다 독도를 지킨 주체를 이으세요.', [['1900년대', '대한제국 정부와 울도 군수'], ['1950년대', '울릉도 주민(독도의용수비대)'], ['오늘날', '경찰(독도경비대)']], { k: 2, extra: ['외국 여행객'], d: 0.3, opt: { axis: AX }, more: { conclude: '대한제국 정부에서 울릉도 주민, 오늘의 경찰까지 독도를 지킨 흐름이 이어져 왔어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '국권 피탈기(1910~1945)에 독도를 지킬 수 없었던 사정과, 광복 뒤 다시 이어진 흐름을 한두 문장으로 쓰세요.' }] },
        notes: '독도의용수비대는 1950년대 울릉도 주민들의 자발적 활동이었고 그 임무는 경찰에 이어졌다(단원 재료 서술, 사람 확인 목록). 인원·날짜 같은 세부 수치는 쓰지 않는다.',
      }),
      M({
        id: 'activity.essay', type: 'activity', title: '수호 흐름 해설문',
        method: '수호 흐름 해설문', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '시작·이어짐·오늘 세 칸으로 한 단락 해설문을 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어 두 단락 분량으로 연속성을 설명한다.' },
        activity: {
          title: '수호의 연속성 해설', tool: 'rubric-writing',
          teacher: '"해설문의 핵심은 \'이어져 왔다\'는 연속성이에요. 사건을 늘어놓는 것이 아니라 앞뒤가 어떻게 이어지는지를 써요." 사건마다 지킨 주체를 넣게 한다. "영웅들이 목숨 걸고"처럼 감정으로 부풀린 문장을 쓴 학생에게 "기록에 남은 사실로 바꾸면 어떻게 쓸까요?"라고 묻는다. 끊긴 시기(국권 피탈기)를 숨기지 않고 쓰는 것이 오히려 흐름을 정확하게 만든다고 짚는다.',
          task: '1900년부터 오늘까지 독도 수호의 흐름을 해설문으로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('수호의 시작(대한제국)을 2문장으로 쓰세요.', '1900년 칙령 제41호와 1906년 울도 군수 보고로 시작되는 수호의 흐름을 쓰세요.', ['연도와 문서 이름을 정확히 썼다', '지킨 주체를 썼다', '기록에 없는 말을 덧붙이지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['1900', '칙령']], starter: '1900년 대한제국은 ~. 1906년에는 ~.', plus: '두 사건이 어떻게 이어지는지 썼다', d: 0.35 }),
            RWQ('광복 뒤 이어진 흐름을 2~3문장으로 쓰세요.', '국권 피탈기 뒤 광복, 평화선 선언(1952), 독도의용수비대로 이어진 흐름을 쓰세요.', ['국권 피탈기의 끊김을 숨기지 않았다', '평화선과 의용수비대의 차례가 바르다', '주민들의 활동을 부풀리지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['평화선'], ['의용수비대', '주민']], starter: '국권을 빼앗긴 동안에는 ~. 광복 뒤 ~.', plus: '의용수비대의 임무가 경찰에 이어졌다는 점을 썼다', d: 0.4 }),
            RWQ('오늘의 독도경비대가 이 흐름에서 갖는 뜻을 2문장으로 쓰세요.', '오늘의 독도경비대가 120년 넘는 흐름의 어디에 서 있는지 쓰세요.', ['오늘의 기관을 정확히 썼다', '앞의 흐름과 이었다', '경찰이 지킨다는 뜻을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['경비대']], starter: '오늘 독도에는 ~. 이는 ~', plus: '연속성을 한 문장으로 정리해 끝맺었다', d: 0.4, more: { conclude: '수호의 흐름은 끊긴 시기까지 사실대로 적을 때 오히려 정확하게 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 해설문의 마지막 문장(연속성 정리)을 옮겨 쓰세요.' }] },
      }),

      M({
        id: 'wrap.pair', type: 'wrap', title: '짝에게 해설 발표',
        method: '짝에게 해설 발표', tool: 'timer', minutes: 8,
        levels: { easy: '1분 동안 해설의 시작 부분만 말한다.', base: '2분 동안 해설 전체를 말하고 짝이 점검 칸에 표시한다.', challenge: '2분 해설 뒤 짝의 질문 하나에 답한다.' },
        wrap: {
          teacher: '"짝에게 2분 동안 수호의 흐름을 해설하고, 1분 동안 짝의 질문을 받아요. 두 사람 모두 돌아가요." 교사가 타이머로 진행한다. 해설이 사건 나열에 그치면 짝이 "그래서 앞뒤가 어떻게 이어지나요?"라고 묻게 한다. 해설에서 연도를 지어서 말하면 해설문의 연도와 견주게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝 해설', labels: ['해설', '질문'], timeUnit: 'min', plan: { work: 1, rest: 2, rounds: 1 } }, prompt: '2분 해설과 1분 질문을 두 사람이 한 번씩 하도록 타이머를 맞추고, 짝의 해설에서 확인한 것을 표시하세요.', target: { plan: { work: 2, rest: 1, rounds: 2 }, selfCheck: ['칙령부터 오늘까지 차례가 맞았다', '시대마다 지킨 주체가 나왔다', '부풀린 말 없이 사실로 말했다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '해설에서 "독도 수호는 광복 뒤에 시작됐다"고 들었다면 짝에게 무엇을 짚어 줄까요?', options: ['1900년 칙령 제41호부터 흐름이 시작된다', '광복 뒤가 맞다', '연도는 중요하지 않다'], answer: 0, difficulty: 0.15, explain: '수호의 흐름은 1900년 칙령 제41호로 독도를 근대 법령에 넣은 일부터 이어져요.' },
            { type: 'short', prompt: '짝의 해설에서 가장 분명했던 연결 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '짝 해설 점검',
          items: [
            { type: 'check', prompt: '짝의 해설에서 확인한 것에 표시하세요.', options: ['칙령 제41호(1900)', '울도 군수 보고(1906)', '평화선 선언(1952)', '독도의용수비대(1950년대)', '오늘의 독도경비대'] },
            { type: 'short', prompt: '짝에게 받은 질문과 내 답을 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '수호 발자취 사실 확인',
        method: '가장 놀라운 사실 고르기', tool: 'sortboard', minutes: 8,
        levels: { easy: '교사가 사실 카드 두 장을 함께 판정해 보인다.', base: '카드 6장을 사실·사실과 다름 바구니에 넣고, 가장 놀라운 사실 하나를 고른다.', challenge: '고른 사실이 왜 놀라웠는지 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 발자취 가운데 사실인 것과 사실과 다른 것을 먼저 가려요. 그다음 가장 놀라웠던 사실 하나를 골라요." 놀라움은 사람마다 다르니 채점하지 않는다고 먼저 말한다. "독도는 군대가 지킨다"를 사실에 두는 학생에게 경찰인 독도경비대를 다시 짚는다. "의용수비대는 경찰이 만들었다"를 사실에 두는 학생에게는 울릉도 주민들의 자발적 활동이었다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['사실', '사실과 다름'], cards: ['독도경비대는 경찰이다', '독도는 군대가 머물며 지킨다', '1950년대 울릉도 주민이 의용수비대를 꾸렸다', '의용수비대는 경찰이 만들었다', '수호의 흐름은 1900년 칙령부터 이어진다', '독도 수호는 광복 뒤에 처음 시작됐다'] }, prompt: '발자취 카드를 사실과 사실과 다름 바구니에 나누세요.', target: { sort: { 사실: ['독도경비대는 경찰이다', '1950년대 울릉도 주민이 의용수비대를 꾸렸다', '수호의 흐름은 1900년 칙령부터 이어진다'], '사실과 다름': ['독도는 군대가 머물며 지킨다', '의용수비대는 경찰이 만들었다', '독도 수호는 광복 뒤에 처음 시작됐다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '오늘 배운 사실 가운데 가장 놀라웠던 것을 고르세요(정답 없음).', options: ['독도를 경찰이 지킨다는 것', '울릉도 주민들이 스스로 독도를 지켰다는 것', '1900년부터 흐름이 이어진다는 것'], answer: 0, difficulty: 0.05, explain: '어느 것을 골라도 괜찮아요. 고른 까닭을 다음 칸에 써 봐요.' },
            { type: 'short', prompt: '고른 사실이 놀라웠던 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '독도 수호의 발자취',
          items: [
            { type: 'table', prompt: '시대마다 지킨 주체와 한 일을 쓰세요.', columns: ['시대', '지킨 주체', '한 일'], cells: [['대한제국', '', ''], ['1950년대', '', ''], ['오늘날', '', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도는 군대가 아니라 ___인 독도경비대가 머물며 지킨다.', answer: '경찰' },
          ],
        },
        notes: '계획의 \'알았음/새로 앎\' 나누기는 사람마다 답이 달라 교구로 채점할 수 없어, 사실 확인 나누기 + 놀라운 사실 고르기(정답 없음 안내)로 바꿨다. 고르기 문항은 교사 화면에서 채점에 쓰지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 7. 자연 보호와 정부 대응의 세 갈래 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-policy', [11]);
    const NEWS = { di: ['정부, 외국 누리집의 독도 오기에 정정 요청', '외교부, 독도 영문 자료 보강', '정부, 외국 교과서 독도 왜곡에 항의'], re: ['연구기관, 독도 사료집 새로 펴내', '독도교육주간 수업 자료 학교에 보급'], gu: ['독도경비대, 겨울에도 경비 근무 이어가', '해양경찰, 독도 둘레 바다 순찰'] };
    const VISIT = { text: '가상 학교의 모의 정책 회의. 안건: "독도의 자연을 지키면서 더 많은 국민이 독도를 알 수 있게 하자." 방문객을 어떻게 할까?', who: '모의 회의', motif: 'house', choices: [
      { id: 'open', text: '규칙 없이 방문객을 크게 늘리자고 한다', result: '방문객이 늘며 쓰레기와 소음이 함께 늘어난다.', impact: [{ who: '독도 바닷새', text: '번식기에 둥지를 떠날 수 있다', tone: -1 }],
        next: { text: '한 해 뒤 보고: 바위틈 쓰레기가 늘고 번식기 새들이 줄었다는 관찰이 나왔다.', choices: [
          { id: 'keep', text: '그래도 그대로 둔다', result: '보호구역의 자연이 더 상한다.', impact: [{ who: '천연보호구역', text: '보전 관리가 무너진다', tone: -1 }], ending: '규칙 없는 개방은 지키려던 자연을 잃게 한다.' },
          { id: 'close', text: '갑자기 방문을 모두 막는다', result: '이미 계획을 세운 방문객들이 혼란을 겪는다.', impact: [{ who: '국민', text: '독도를 직접 볼 기회를 잃는다', tone: -1 }], ending: '미리 정한 규칙이 없으면 극단을 오가게 된다.' }] } },
      { id: 'rule', text: '정해진 길·번식기 규칙·쓰레기 되가져가기를 조건으로 방문을 연다', result: '방문객 안내문에 보호 규칙이 실린다.', impact: [{ who: '방문객', text: '규칙을 알고 찾는다', tone: 1 }],
        next: { text: '반대 의견: "규칙이 많으면 오히려 찾는 사람이 줄 거예요."', choices: [
          { id: 'explain', text: '규칙의 까닭(천연보호구역·번식기)을 쉽게 알리는 안내를 더한다', result: '방문객이 규칙을 지켜야 하는 까닭을 이해한다.', impact: [{ who: '방문객', text: '스스로 규칙을 지킨다', tone: 1 }],
            next: { text: '마지막으로, 직접 가지 못하는 사람을 위한 방법을 정해야 한다.', choices: [
              { id: 'online', text: '공식 자료로 만든 온라인 자료와 교육으로 알린다', result: '섬에 가지 않아도 독도를 배울 길이 생긴다.', impact: [{ who: '국민', text: '자연을 해치지 않고 독도를 안다', tone: 1 }], ending: '보호 규칙과 알리는 방법을 함께 세우면 자연과 앎을 함께 지킨다.' },
              { id: 'souvenir', text: '독도 돌을 기념품으로 나누어 준다', result: '보호 대상인 돌이 섬 밖으로 나간다.', impact: [{ who: '천연보호구역', text: '보호 대상이 훼손된다', tone: -1 }], ending: '천연보호구역의 돌도 보호 대상이다.' }] } },
          { id: 'drop', text: '반대 의견대로 규칙을 모두 없앤다', result: '방문객은 늘지만 보호 조건이 사라진다.', impact: [{ who: '천연보호구역', text: '보호가 약해진다', tone: -1 }], ending: '반대 의견은 규칙을 없애기보다 규칙을 알리는 방법으로 담을 수 있다.' }] } },
      { id: 'ban', text: '처음부터 방문을 모두 막자고 한다', result: '자연은 지키지만 국민이 독도를 직접 알 기회가 줄어든다.', impact: [{ who: '국민', text: '독도를 직접 보기 어렵다', tone: -1 }], ending: '보호와 앎을 함께 지킬 길을 찾아야 한다.' }] };
    const VISIT_R = [{ id: 'both', text: '보호 규칙을 지키면서 알리는 방법을 함께 세운다' }, { id: 'law', text: '천연보호구역은 국가가 법으로 보호하는 곳이다' }, { id: 'more', text: '방문객이 많을수록 주권이 강해진다', why: '주권 행사는 방문객 수가 아니라 국가의 관할·관리로 이루어져요.' }, { id: 'none', text: '자연은 그냥 두면 저절로 지켜진다', why: '사람이 찾는 곳은 규칙과 관리가 있어야 지켜져요.' }];

    MODS.push(
      M({
        id: 'intro.eco', type: 'intro', title: '독도 생태 장면 보고 질문',
        method: '독도 생태 사진 장면 보고 질문', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 두 장만 읽고 하나를 고르게 한다.', base: '세 장 가운데 "누가 관리할까"에 가장 가까운 질문을 고른다.', challenge: '카드에 없는 내 질문 하나를 만든다.' },
        intro: {
          teacher: '"괭이갈매기가 바위틈에 둥지를 틀고, 해국이 바위에 핀 장면이에요. 이 자연은 누가, 어떻게 지킬까요?" 장면을 말로 그려 주고 질문 카드를 읽게 한 뒤, 시연 단추로 질문 하나가 바구니에 담기는 모습을 보여 준다. 독도에 살던 강치가 20세기 전반 무분별한 포획으로 사라졌다는 점을 소개하고, "그때 누군가 관리했다면 어땠을까요?"라고 묻는다. 오늘은 자연 보호를 주권 행사로 읽고, 정부의 대응을 세 갈래로 나눈다고 밝힌다.',
          student: '독도 생태 장면을 떠올리며 질문 카드를 읽고, "누가 관리할까"를 묻는 질문을 하나 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '오늘의 질문', cards: ['괭이갈매기 둥지는 누가 지킬까?', '독도의 돌을 가져가도 될까?', '강치는 왜 사라졌을까?'] }, sequence: [{ pick: ['괭이갈매기 둥지는 누가 지킬까?'] }] },
          art: { draw: 'black-tailed gulls nesting in rocky crevices of a paper island, purple sea asters on the rocks, a faint paper silhouette of a sea lion fading into the waves', banner: '이 자연은 누가 지킬까?', extra: [{ motif: 'bird', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.news', type: 'intro', title: '대응 뉴스 제목 나누기',
        method: '대응 뉴스 제목 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 제목 세 장을 함께 나눠 보인다.', base: '제목 여섯 장을 외교·연구·경비 바구니에 나눈다.', challenge: '어느 바구니에도 맞지 않는 함정 제목을 가려낸다.' },
        intro: {
          teacher: '"외국 교과서에 독도가 다른 나라 땅으로 적혔다는 소식을 들으면 정부는 무엇을 할까요?" 대답을 듣고 정부의 대응은 외교적 대응(항의·정정 요청), 연구와 교육(자료 발간·독도교육), 경비와 관리(독도경비대·해양경찰) 세 갈래로 볼 수 있다고 알린다. 수업용 가상 뉴스 제목을 읽고 시연 단추로 바구니에 나뉘는 모습을 보여 준다. "왜 더 세게 안 해요?"라는 질문에는 "차분하고 단호한 대응과 감정적인 대응은 어떻게 다를까요?"라고 되묻는다.',
          student: '가상 뉴스 제목을 외교·연구·경비 가운데 어느 대응인지 바구니에 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['외교', '연구', '경비'], cards: [NEWS.di[0], NEWS.re[0], NEWS.gu[0], NEWS.di[2], NEWS.re[1], NEWS.gu[1]] }, sequence: [{ sort: { 외교: [NEWS.di[0], NEWS.di[2]], 연구: [NEWS.re[0], NEWS.re[1]], 경비: [NEWS.gu[0], NEWS.gu[1]] } }] },
          art: { draw: 'paper newspaper headlines flying into three paper baskets labelled with a globe, a book and a guard cap, a small island in the corner', banner: '정부 대응의 세 갈래', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '뉴스 제목은 수업용 가상 제목이다. 실제 기사·특정 시기 정부의 대응을 평가하지 않는다.',
      }),

      M({
        id: 'activity.link', type: 'activity', title: '보호 조치가 주권 행사인 까닭',
        method: '보호 조치가 주권 행사인 까닭', tool: 'mindmap', minutes: 18,
        levels: { easy: '관할·관리 두 가지에 근거 카드를 단다.', base: '관할·관리·공개성 세 가지에 근거 카드를 단다.', challenge: '근거마다 확인할 출처 기관을 잇는다.' },
        activity: {
          title: '보호 조치와 주권 생각그물', tool: 'mindmap',
          teacher: '"국가가 독도의 자연을 법으로 보호하는 일은 왜 주권 행사가 될까요?" 관할(국가가 법으로 정함)·관리(꾸준히 이어 감)·공개성(누구나 알게 함) 세 가지로 나누어 근거를 달게 한다. \'관광객이 많아서\'를 근거로 다는 학생에게 "방문객이 많은 것과 국가가 다스리는 것은 같을까요?"라고 묻는다. 출처를 잇는 문항에서는 천연보호구역은 국가유산청, 주소는 울릉군처럼 일을 맡은 기관에서 확인하게 한다.',
          task: '보호 조치 가지에 관할·관리·공개성 근거를 달고, 출처를 이어요.', levels: LV,
          items: [
            SORTQ('보호 조치의 근거 카드를 관할·관리·공개성 가지에 다세요.', ['관할', '관리', '공개성'], [
              ['국가가 법으로 천연보호구역을 지정했다', '독도는 울릉군 울릉읍 독도리에 속한다'],
              ['허가 없이 동식물을 채집할 수 없게 한다', '해마다 보호 관리를 이어 간다'],
              ['보호구역 지정을 누구나 볼 수 있게 알린다', '방문객에게 보호 규칙을 안내한다'],
            ], { k: 1, traps: ['관광객이 많으니 우리 땅이다'], d: 0.3, opt: { topic: '보호 조치와 주권' } }),
            MATCHQ('근거마다 확인할 출처 기관을 이으세요.', [['천연보호구역 지정', '국가유산청'], ['독도리 주소', '울릉군'], ['정부 기본 입장', '외교부 독도 누리집']], { k: 2, extraHard: ['익명 블로그'], d: 0.3, opt: { topic: '근거와 출처' } }),
            PICKQ('주권 행사로 볼 수 있는 보호 조치만 고르세요.', ['법으로 천연보호구역을 지정한다', '허가 없는 채집을 막는다'], ['여행객이 사진을 많이 올린다', '외국 관광객이 독도 기념품을 산다'], { d: 0.3, opt: { basket: '주권 행사인 보호 조치', topic: '보호 조치와 주권' }, more: { conclude: '국가가 법으로 정하고, 꾸준히 관리하고, 공개적으로 알리는 보호 조치는 관할권 행사예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"자연 보호도 주권 행사다"를 관할·관리·공개성 가운데 둘을 넣어 한 문장으로 설명하세요.' }] },
      }),
      M({
        id: 'activity.dil', type: 'activity', title: '보호와 방문 개방 사이',
        method: '보호와 방문 개방 사이', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(방문 방식)에서 고르고 결과를 본 뒤 근거를 고른다.', base: '두 번째 갈림길(반대 의견)까지 간다.', challenge: '세 번째 갈림길(가지 못하는 사람을 위한 방법)까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '모의 정책 회의 갈림길', tool: 'dilemma',
          teacher: '"자연을 지키는 것과 국민이 독도를 아는 것, 둘 다 중요하다면 어떤 규칙이 둘을 함께 지킬까요?" 가상 학교의 모의 회의임을 먼저 밝히고, 실제 정책의 옳고 그름을 따지는 시간이 아니라고 말한다. \'규칙 없이 늘리자\'를 고르는 학생에게 "한 해 뒤 보고에서 누가 피해를 보았나요?"라고 묻는다. \'모두 막자\'를 고르는 학생에게는 "국민이 독도를 알 기회는 어떻게 될까요?"라고 묻는다. 반대 의견은 규칙을 없애기보다 규칙의 까닭을 알리는 방법으로 담을 수 있다고 짚는다.',
          task: '가상 모의 정책 회의의 갈림길을 따라가며 결과를 추적하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('보호와 방문을 함께 지키는 길을 고르고, 근거를 고르세요.', VISIT, [['rule', 'explain', 'online']], VISIT_R, ['both', 'law'], { d: 0.4 }),
            EXPLOREQ('다른 길도 끝까지 가 보고, 자연과 국민에게 어떤 결과가 생기는지 견주세요.', VISIT, VISIT_R, ['다른 길에서 피해를 본 쪽을 찾았다', '내 길이 무엇을 함께 지키는지 말할 수 있다'], { d: 0.35 }),
            DILQ('친구가 독도에서 예쁜 돌을 하나 주워 가자고 할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '가상 장면: 독도를 찾은 친구가 "작은 돌 하나쯤 기념으로 가져가자"고 한다.', who: '친구', motif: 'house', choices: [
              { id: 'leave', text: '천연보호구역의 돌도 보호 대상이라며 두고 가자고 한다', result: '친구가 돌 대신 사진을 찍는다.', impact: [{ who: '천연보호구역', text: '그대로 지켜진다', tone: 1 }], ending: '보호구역의 규칙을 지키는 것도 독도를 지키는 일이다.' },
              { id: 'take', text: '하나쯤은 괜찮다며 가져간다', result: '다른 방문객도 따라 돌을 줍는다.', impact: [{ who: '천연보호구역', text: '보호 대상이 조금씩 사라진다', tone: -1 }], ending: '한 사람의 \'하나쯤\'이 모이면 보호구역이 상한다.' }] },
              [['leave']], [{ id: 'protect', text: '천연보호구역의 돌도 보호 대상이다' }, { id: 'small', text: '작은 것은 괜찮다', why: '작은 것도 모이면 보호구역을 해쳐요.' }], ['protect'], { d: 0.3, more: { conclude: '보호와 방문은 규칙을 함께 세우고 알릴 때 둘 다 지켜져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보호와 방문을 함께 지키는 규칙 하나를 조건과 까닭을 넣어 한 문장으로 쓰세요.' }] },
        notes: '모의 회의는 가상이며 실제 정책·정부의 결정을 평가하지 않는다. 독도 방문 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.chart', type: 'activity', title: '대응 갈래 비중 그래프',
        method: '대응 갈래 비중 그래프', tool: 'chart', minutes: 18,
        levels: { easy: '세 갈래 가운데 하나가 미리 그려진 원그래프를 완성하고, 조각에 값이 보인다.', base: '세 갈래 원그래프를 스스로 완성하고 비중을 해석한다.', challenge: '값 표시 없이 풀고, 빠진 갈래(시민 참여 등)를 제안한다.' },
        activity: {
          title: '가상 뉴스 10건의 갈래', tool: 'chart',
          teacher: '"가상 뉴스 제목 10건을 나눠 보니 외교 5, 연구 3, 경비 2였어요. 원그래프로 그리면 무엇이 보이나요?" 백분율로 바꾸는 과정을 함께 말한다. 외교 조각이 크다고 "정부는 외교만 한다"고 읽는 학생에게 "뉴스로 나오는 일과 매일 이어지는 일(경비 같은)은 똑같이 보도될까요?"라고 묻는다. 그래프는 고른 가상 제목의 비중이지 실제 노력의 크기가 아니라는 점을 짚는다.',
          task: '가상 뉴스 10건의 갈래 비중을 원그래프로 만들고 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 뉴스 10건의 갈래(외교 5·연구 3·경비 2)를 백분율 원그래프로 완성하세요.', toolOptions: { type: 'circle', mode: 'build', title: '가상 뉴스 10건의 대응 갈래', unit: '%', data: [['외교', 50], ['연구', 30], ['경비', 20]] }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { toolOptions: { given: [0] } } } },
            { prompt: '원그래프에서 경비 조각의 백분율을 쓰세요.', toolOptions: { type: 'circle', mode: 'read', title: '가상 뉴스 10건의 대응 갈래', unit: '%', data: [['외교', 50], ['연구', 30], ['경비', 20]], question: '경비는 몇 %?' }, target: { value: 20 }, difficulty: 0.2 },
            { prompt: '이 원그래프의 해석으로 알맞은 것을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '가상 뉴스 10건의 대응 갈래', unit: '%', data: [['외교', 50], ['연구', 30], ['경비', 20]], question: '알맞은 해석은?', choices: ['고른 뉴스에서는 외교 대응이 가장 많이 보도됐다', '정부는 경비를 가장 적게 한다', '연구는 하지 않는다'], why: ['', '보도된 비중은 실제 노력의 크기와 달라요. 경비는 매일 이어지는 일이에요.', '연구 조각이 30%예요.'] }, target: { pick: 0 }, difficulty: 0.35 },
            { prompt: '세 갈래 말고 더 넣으면 좋을 갈래로 알맞은 것을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '가상 뉴스 10건의 대응 갈래', unit: '%', data: [['외교', 50], ['연구', 30], ['경비', 20]], question: '빠진 갈래는?', choices: ['학생·시민이 근거로 알리는 참여', '상대 나라를 비난하는 운동', '확인 없는 영상 퍼 나르기'], why: ['', '비난은 대응이 아니라 다툼을 키워요.', '확인 없는 공유는 왜곡을 도와요.'] }, target: { pick: 0 }, difficulty: 0.35, conclude: '정부 대응은 외교·연구·경비의 세 갈래이고, 시민의 근거 있는 참여가 그 곁에 설 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '원그래프를 보고 "보도된 비중"과 "실제 노력"이 다를 수 있는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '뉴스 10건과 비율은 수업용 가상 자료다. 화면 제목에 \'가상\'으로 밝힌다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '정책 제안 한 장',
        method: '정책 제안 한 장', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '문제·제안·근거·실행 방법 네 항목을 세 칸에 쓰고 기준표(근거·실행 가능성)로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 예상 문제와 대안을 쓴다.' },
        activity: {
          title: '학생 정책 제안서', tool: 'rubric-writing',
          teacher: '"세 갈래(외교·연구·경비) 가운데 하나를 골라, 학생으로서 제안하고 싶은 것을 한 장으로 써요. 실제 정책을 평가하는 글이 아니라 우리가 할 수 있는 제안이에요." 근거 칸에 공식 자료를 쓰게 한다. "독도에 큰 건물을 짓자"처럼 천연보호구역과 맞지 않는 제안에는 "천연보호구역 규칙과 맞을까요?"라고 묻는다. 실행 가능성은 누가·언제·무엇으로 할지가 분명해야 한다고 짚는다.',
          task: '세 갈래 가운데 하나를 골라 학생 정책 제안을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('고른 갈래와 해결하고 싶은 문제를 2문장으로 쓰세요.', '외교·연구·경비 가운데 한 갈래를 고르고, 해결하고 싶은 문제를 쓰세요.', ['갈래를 하나 골라 밝혔다', '문제를 구체적으로 썼다', '특정 정치인·정당을 언급하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['외교', '연구', '경비']], starter: '내가 고른 갈래는 ~이다. 해결하고 싶은 문제는 ~', plus: '문제가 왜 중요한지 까닭을 썼다', d: 0.35 }),
            RWQ('제안과 그 근거를 2~3문장으로 쓰세요.', '문제를 해결할 학생 제안과, 그 제안의 근거(공식 자료)를 쓰세요.', ['제안을 한 문장으로 분명히 썼다', '공식 자료 근거를 들었다', '천연보호구역 등 규칙과 맞는다'], { min: 40, max: 300, sent: [2, 3], must: [['제안']], starter: '나는 ~을 제안한다. 그 근거는 ~', plus: '근거의 출처 기관을 밝혔다', d: 0.4 }),
            RWQ('실행 방법(누가·언제·무엇으로)을 2~3문장으로 쓰세요.', '제안을 누가, 언제, 무엇으로 실행할지 쓰세요.', ['누가 할지 썼다', '언제 할지 썼다', '필요한 것을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['학생', '학교', '우리']], starter: '우리 학교 학생들이 ~에 ~으로', plus: '예상 문제와 대안을 썼다', d: 0.4, more: { conclude: '좋은 제안은 문제·근거·실행 방법이 분명하고, 지킬 규칙과 어긋나지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '정책 제안 한 장을 정리하세요.', columns: ['항목', '내 제안'], cells: [['갈래', ''], ['문제', ''], ['제안', ''], ['근거', ''], ['실행 방법', '']] }] },
        notes: '현 정부 정책이나 특정 정당·정치인을 평가하는 글이 되지 않게 한다. 제안은 학생이 할 수 있는 범위로 쓴다.',
      }),

      M({
        id: 'wrap.forum', type: 'wrap', title: '제안 모둠 토의',
        method: '제안 모둠 토의', tool: 'timer', minutes: 8,
        levels: { easy: '모둠은 제안 발표만 한다.', base: '발표 뒤 질의를 받고 실행 가능성 점수를 기록판에 적는다.', challenge: '질의를 반영한 수정안 한 줄까지 말한다.' },
        wrap: {
          teacher: '"세 모둠이 2분씩 제안을 발표하고, 사이 1분은 질의예요. 듣는 모둠은 실행 가능성 점수(1~5)를 기록판에 적어요." 교사가 타이머로 진행한다. 점수는 제안을 낸 사람이 아니라 제안의 실행 방법을 두고 매기게 한다. "돈이 많이 들어요"처럼 막연한 비판에는 "어느 부분을 바꾸면 실행할 수 있을까요?"라고 되물어 수정안으로 이끈다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '제안 토의', labels: ['발표', '질의'], timeUnit: 'min', plan: { work: 1, rest: 1, rounds: 1 }, fields: [{ label: '1모둠 점수', unit: '점', step: 1 }, { label: '2모둠 점수', unit: '점', step: 1 }, { label: '3모둠 점수', unit: '점', step: 1 }] }, prompt: '세 모둠이 2분 발표·1분 질의를 하도록 타이머를 맞추고, 모둠마다 실행 가능성 점수를 적으세요.', target: { plan: { work: 2, rest: 1, rounds: 3 }, records: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '실행 가능성 점수를 매길 때 가장 알맞은 기준은?', options: ['누가·언제·무엇으로 할지 분명한가', '발표한 사람과 친한가', '제안이 길었는가'], answer: 0, difficulty: 0.15, explain: '실행 가능성은 실행할 사람·때·방법이 분명한지로 따져요.' },
            { type: 'short', prompt: '들은 제안 가운데 하나를 골라 실행할 수 있게 바꿀 수정안 한 줄을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '제안 토의 기록판',
          items: [
            { type: 'table', prompt: '모둠 제안을 기록하세요.', columns: ['모둠', '갈래', '제안', '점수(1~5)'], cells: [['1', '', '', ''], ['2', '', '', ''], ['3', '', '', '']] },
            { type: 'short', prompt: '우리 모둠 제안에 들어온 질문과 수정할 점을 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다. 점수는 제안 내용에 대한 것이며 학생 평가에 쓰지 않는다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '세 갈래 정리 점검',
        method: '세 갈래 정리 점검', tool: 'emotion', minutes: 8,
        levels: { easy: '교사가 첫 갈래의 사례를 함께 이어 보인다.', base: '세 갈래와 사례를 잇는다.', challenge: '함정 사례가 왜 정부 대응이 아닌지 말한다.' },
        wrap: {
          teacher: '"오늘 나눈 세 갈래를 사례와 다시 이어 봐요." 갈래와 사례를 잇게 한 뒤 출구 질문으로 넘어간다. 독도경비대를 연구 갈래에 잇는 학생에게 "오늘 실제로 섬을 지키는 일은 어느 갈래일까요?"라고 묻는다. 함정 사례(상대 국민을 비난하는 운동)를 잇는 학생에게는 그것이 정부 대응이 아니며 다툼을 키운다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', weather: false, slots: ['외교', '연구·교육', '경비·관리'], cards: ['독도경비대의 경비 근무', '독도 사료집 발간', '외국 누리집 오기에 정정 요청', '상대 국민을 비난하는 운동'] }, prompt: '세 갈래와 그 갈래의 사례를 이으세요. 맞지 않는 카드는 남겨요.', target: { match: { 외교: '외국 누리집 오기에 정정 요청', '연구·교육': '독도 사료집 발간', '경비·관리': '독도경비대의 경비 근무' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"독도의 자연을 지키는 일"은 정부 대응 가운데 어디와 가장 가까운가요?', options: ['경비·관리(관할권 행사)', '아무 갈래도 아니다', '외교 교섭'], answer: 0, difficulty: 0.2, explain: '국가가 법으로 자연을 보호하고 관리하는 일은 관할권을 행사하는 일이에요.' },
            { type: 'short', prompt: '세 갈래 곁에서 학생이 할 수 있는 일 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '자연 보호와 정부 대응',
          items: [
            { type: 'table', prompt: '세 갈래마다 사례를 하나씩 쓰세요.', columns: ['갈래', '사례'], cells: [['외교', ''], ['연구·교육', ''], ['경비·관리', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도는 섬 전체가 천연기념물인 ___으로 지정되어 있다.', answer: '천연보호구역' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 학생 참여와 잘못된 표기 바로잡기 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-act', [11]);
    const WRONG = { grid: [7, 4], title: '예시 지도(잘못 칠해진 칸 찾기)', places: [{ name: '울릉도', icon: 'island', at: [2, 1] }, { name: '독도', icon: 'island', at: [4, 1] }], regions: [{ name: '대한민국으로 칠한 곳', cells: [[0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 1]], color: 'mint' }, { name: '다른 나라로 칠한 곳', cells: [[4, 1], [5, 1], [6, 1], [5, 2], [6, 2]], color: 'peach' }] };
    const STEPS = ['잘못된 표기를 화면으로 확인하고 저장한다', '공식 자료에서 근거와 출처를 모은다', '정중한 정정 요청문을 쓴다', '담당 창구로 요청문을 보낸다', '보낸 날짜와 답을 기록한다'];
    const PART = { text: '상황 1. 외국 여행 안내 누리집의 지도에 독도가 다른 나라 색으로 칠해져 있다.', who: '나', motif: 'house', choices: [
      { id: 'request', text: '화면을 저장하고 근거를 모아 정중히 정정을 요청한다', result: '운영자가 검토하겠다는 답을 보낸다.', impact: [{ who: '누리집 이용자', text: '바른 지도를 볼 길이 열린다', tone: 1 }],
        next: { text: '상황 2. 학교 축제에서 독도 부스를 맡았다.', choices: [
          { id: 'quiz', text: '출처를 단 사료 퀴즈와 지도 체험을 준비한다', result: '참여한 학생들이 근거를 하나씩 기억해 간다.', impact: [{ who: '참여 학생', text: '근거로 독도를 배운다', tone: 1 }],
            next: { text: '상황 3. 누리 소통망에 출처 없는 독도 영상이 돌고 있다.', choices: [
              { id: 'check', text: '퍼 나르지 않고, 공식 자료 링크를 함께 나눈다', result: '친구들이 영상보다 공식 자료를 먼저 본다.', impact: [{ who: '친구들', text: '확인하는 습관이 생긴다', tone: 1 }], ending: '상황마다 근거와 절차를 갖춘 참여가 가장 오래 남는다.' },
              { id: 'forward', text: '재미있어서 바로 퍼 나른다', result: '확인되지 않은 내용이 더 퍼진다.', impact: [{ who: '친구들', text: '잘못된 내용을 믿게 된다', tone: -1 }], ending: '확인 없는 공유는 좋은 뜻이어도 왜곡을 돕는다.' }] } },
          { id: 'blame', text: '상대 나라를 비난하는 포스터를 붙인다', result: '부스 앞에서 다툼 섞인 말이 오간다.', impact: [{ who: '참여 학생', text: '근거 대신 반감만 남는다', tone: -1 }], ending: '비난은 참여가 아니라 다툼을 키운다.' }] } },
      { id: 'curse', text: '누리집 게시판에 거친 말로 항의한다', result: '글이 삭제되고 지도는 그대로다.', impact: [{ who: '나', text: '정정 기회를 잃는다', tone: -1 }], ending: '거친 항의는 정정을 이끌지 못한다.' },
      { id: 'ignore', text: '내 일이 아니라며 넘긴다', result: '잘못된 지도가 그대로 남는다.', impact: [{ who: '누리집 이용자', text: '잘못된 지도를 본다', tone: -1 }], ending: '작은 정정 요청도 바른 정보를 남기는 참여다.' }] };
    const PART_R = [{ id: 'proc', text: '근거·출처를 갖추고 절차를 밟으면 정정을 이끌 수 있다' }, { id: 'respect', text: '참여는 상대를 비난하지 않고 사실로 알리는 것이다' }, { id: 'anger', text: '화가 날수록 세게 말해야 한다', why: '거친 말은 정정을 이끌지 못하고 신뢰를 잃게 해요.' }, { id: 'share', text: '좋은 뜻이면 확인 없이 나눠도 된다', why: '확인 없는 공유는 좋은 뜻이어도 왜곡을 도와요.' }];

    MODS.push(
      M({
        id: 'intro.scene', type: 'intro', title: '참여 장면 고르기',
        method: '참여 장면 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 참여 장면 두 장을 함께 고른다.', base: '내가 할 수 있는 장면 세 장을 고른다.', challenge: '네 장을 고르고, 함정 장면이 왜 참여가 아닌지 말한다.' },
        intro: {
          teacher: '"고등학생인 내가 독도를 위해 지금 할 수 있는 일은 무엇일까요?" 참여 장면 카드를 읽고 내가 할 수 있는 것을 고르게 한 뒤, 시연 단추로 카드가 바구니에 담기는 모습을 보여 준다. 욕 댓글이나 확인 안 된 영상 퍼 나르기를 \'열심히 참여한 것\'으로 보는 학생에게 "그 행동 뒤에 바른 정보가 늘까요, 다툼이 늘까요?"라고 묻는다. 오늘은 상황마다 참여 방법을 고르고, 잘못된 표기를 바로잡는 절차를 익힌다고 밝힌다.',
          student: '참여 장면 카드를 읽고 내가 할 수 있는 참여만 바구니에 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '내가 할 수 있는 참여', cards: ['독도 자료를 출처와 함께 읽는다', '상대 나라 누리집에 욕 댓글을 단다', '잘못된 표기를 찾아 정중히 정정을 요청한다', '확인 안 된 영상을 퍼 나른다', '독도교육주간 행사에 참여한다', '외국 친구에게 근거로 설명한다'] }, sequence: [{ pick: ['독도 자료를 출처와 함께 읽는다', '잘못된 표기를 찾아 정중히 정정을 요청한다', '독도교육주간 행사에 참여한다', '외국 친구에게 근거로 설명한다'] }] },
          art: { draw: 'paper students at desks writing polite letters, reading documents and holding a small quiz board about an island, paper envelopes flying out of a window', banner: '내가 할 수 있는 참여', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.find', type: 'intro', title: '잘못된 지도 표기 찾기',
        method: '잘못된 지도 표기 찾기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 잘못 칠해진 독도 칸 한 곳을 함께 짚는다.', base: '독도 칸을 짚고, 바다 이름이 빠진 점을 말로 하나 더 찾는다.', challenge: '세 곳(섬 색·섬 이름·바다 이름)을 찾아 어떻게 고쳐야 하는지 말한다.' },
        intro: {
          teacher: '"이 예시 지도는 수업용으로 일부러 틀리게 만든 지도예요. 어디가 잘못되었을까요?" 지도를 보이고 학생에게 찾게 한 뒤, 시연 단추로 다른 나라 색으로 칠해진 독도 칸에 핀이 꽂히는 모습을 보여 준다. 섬 색 말고도 바다 이름이 적히지 않은 점, 섬 이름이 다르게 적힐 수 있는 점을 함께 말로 짚는다. "잘못된 지도를 보면 바로 화부터 내야 하나요?"라는 질문에는 "고쳐지게 하려면 무엇이 필요할까요?"라고 되묻는다.',
          student: '예시 지도에서 잘못 표기된 곳을 찾아 짚고, 어떻게 고쳐야 하는지 말해 보세요.',
          demo: { tool: 'map', options: WRONG, sequence: [{ place: '독도' }] },
          art: { draw: 'a paper map pinned to a corkboard with one small island colored the wrong shade, a paper magnifying glass and a red paper correction tag beside it', banner: '어디가 잘못 표기되었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '예시 지도는 수업용으로 만든 잘못된 지도다. 실제 출판사·누리집의 지도를 띄워 비난하는 활동으로 쓰지 않는다. 바다 이름은 외교부 누리집의 영어 표기(East Sea)를 알려 준다.',
      }),

      M({
        id: 'activity.choose', type: 'activity', title: '상황별 참여 방법 갈림길',
        method: '상황별 참여 방법 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '상황 1(잘못된 지도) 하나에서 참여 방법을 고르고 근거를 고른다.', base: '상황 2(학교 축제 부스)까지 간다.', challenge: '상황 3(출처 없는 영상)까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '세 상황의 참여 갈림길', tool: 'dilemma',
          teacher: '"같은 마음이라도 어떤 방법을 고르느냐에 따라 결과가 달라져요." 상황마다 결과를 소리 내어 읽게 한다. 거친 항의를 고른 학생에게 "그 글이 삭제된 뒤 지도는 어떻게 되었나요?"라고 묻는다. 비난 포스터를 고른 학생에게는 참여가 혐오나 감정적 비난으로 흐르면 근거가 사라진다는 점을 짚는다. 좋은 뜻으로 영상을 퍼 나르는 학생에게는 확인 없는 공유가 왜곡을 돕는다고 말해 준다.',
          task: '상황마다 참여 방법을 고르며 결과를 추적하고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('세 상황에서 근거와 절차를 갖춘 참여 방법을 고르고, 근거를 고르세요.', PART, [['request', 'quiz', 'check']], PART_R, ['proc', 'respect'], { d: 0.4 }),
            EXPLOREQ('다른 참여 방법의 길도 끝까지 가 보고 결과를 견주세요.', PART, PART_R, ['다른 길이 어떤 결과로 끝났는지 확인했다', '내 방법이 무엇을 남기는지 말할 수 있다'], { d: 0.35 }),
            DILQ('정정을 요청했는데 한 달째 답이 없을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '정정 요청을 보낸 지 한 달, 아직 답이 없다.', who: '나', motif: 'moon', choices: [
              { id: 'remind', text: '기록을 보고 같은 근거로 한 번 더 정중히 묻는다', result: '운영자가 늦어진 까닭과 검토 일정을 알려 준다.', impact: [{ who: '나', text: '요청이 이어진다', tone: 1 }], ending: '기록이 있으면 차분하게 다시 요청할 수 있다.' },
              { id: 'rage', text: '여러 계정으로 같은 항의를 쏟아낸다', result: '스팸으로 분류되어 요청이 묻힌다.', impact: [{ who: '나', text: '정정 기회를 잃는다', tone: -1 }], ending: '쏟아내는 항의는 요청을 오히려 묻는다.' }] },
              [['remind']], [{ id: 'record', text: '보낸 날짜와 답을 기록해 두면 차분히 다시 요청할 수 있다' }, { id: 'flood', text: '많이 보낼수록 빨리 고쳐진다', why: '같은 항의를 쏟아내면 스팸으로 분류되어 묻혀요.' }], ['record'], { d: 0.3, more: { conclude: '참여는 근거·출처·절차·기록을 갖추고, 상대를 비난하지 않을 때 결과를 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 상황 가운데 하나를 골라, 내가 실제로 할 수 있는 참여 방법을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.sort', type: 'activity', title: '참여 방법의 효과와 부작용',
        method: '참여 방법 효과·부작용 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '방법 카드 4장을 효과·부작용 바구니에 넣고, 틀리면 까닭과 함께 돌아온다.', base: '방법 카드 6장을 나누고, 부작용 카드마다 대안을 고르며, 참여 대상을 나눈다.', challenge: '카드 8장(더한 2장)을 나누고 활동지에 부작용 방법의 대안을 쓴다.' },
        activity: {
          title: '참여 방법 두 바구니', tool: 'sortboard',
          teacher: '"이 방법은 바른 정보를 늘리나요, 다툼이나 왜곡을 늘리나요?" 방법 카드를 효과와 부작용으로 나누게 한다. \'같은 댓글 도배\'를 효과에 두는 학생에게 "도배된 게시판에서 근거 있는 글이 보일까요?"라고 묻는다. 부작용 카드마다 같은 마음을 살리는 대안을 함께 찾게 한다. 참여의 목적은 이기는 것이 아니라 바른 정보를 남기는 것이라고 짚는다.',
          task: '참여 방법 카드를 효과와 부작용 바구니에 나누고, 대안을 찾아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('참여 방법 카드를 효과와 부작용 바구니에 나누세요.', ['효과', '부작용'], [['출처를 밝힌 정정 요청', '근거를 갖춘 교내 캠페인', '공식 자료 링크 나누기'], ['상대 나라를 비난하는 포스터', '확인 없는 영상 공유', '같은 댓글 도배']], { k: 2, hard: { add: [['외국 친구에게 근거로 설명하기'], ['상대 국민을 깎아내리는 별명 쓰기']] }, d: 0.3 }),
            BOARDQ('부작용 방법을 바꿀 대안과 그렇지 않은 것을 나누세요.', ['좋은 대안', '대안이 아님'], [['비난 포스터 대신 사료 퀴즈 판 만들기', '퍼 나르기 대신 공식 자료 확인하기'], ['도배 대신 더 큰 글씨로 도배하기', '비난 대신 더 센 비난 쓰기']], { k: 1, d: 0.3 }),
            BOARDQ('참여 방법을 학교 안에서 할 일과 누리 소통망에서 할 일로 나누세요.', ['학교 안', '누리 소통망'], [['독도교육주간 사료 퀴즈 부스', '교실 게시판에 근거 카드 붙이기'], ['공식 자료 링크와 함께 글 올리기', '잘못된 게시글에 정중한 근거 댓글']], { k: 1, d: 0.25, more: { conclude: '좋은 참여는 바른 정보를 늘리고, 같은 마음도 근거와 존중으로 나타내요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '부작용 방법 하나를 골라 같은 마음을 살리는 대안을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.steps', type: 'activity', title: '정정 요청 절차 차례',
        method: '정정 요청 절차 차례', tool: 'story', minutes: 18,
        levels: { easy: '확인·근거 수집·요청문 3단계를 차례로 놓는다.', base: '기록까지 4단계를 놓고, 요청문 문장 차례를 놓는다.', challenge: '보내기까지 5단계를 놓고, 요청문에 넣을 것을 가려 고른다.' },
        activity: {
          title: '잘못된 표기를 바로잡는 차례', tool: 'story',
          teacher: '"잘못된 표기를 찾았을 때 가장 먼저 할 일은 무엇일까요? 화부터 내는 것이 아니라 확인하고 저장하는 거예요." 요청문을 쓰기 전에 근거를 모으지 않는 학생에게 "근거 없이 고쳐 달라고 하면 상대는 무엇을 보고 판단할까요?"라고 묻는다. 기록 단계를 빼는 학생에게는 답이 없을 때 다시 요청하려면 무엇이 필요한지 묻는다. 요청문은 인사→문제 위치→근거→출처→부탁 차례로 쓴다고 알린다.',
          task: '정정 요청 절차와 요청문의 차례를 놓고, 요청문에 넣을 것을 골라요.', levels: LV,
          items: [
            ORDERQ('잘못된 표기를 바로잡는 절차를 차례대로 놓으세요.', STEPS, { sub: { easy: [0, 1, 2], base: [0, 1, 2, 4] }, d: 0.3, opt: { title: '정정 요청 절차' } }),
            ORDERQ('정정 요청문 문장을 차례대로 놓으세요.', ['안녕하세요, 한국의 고등학생입니다', '누리집 ○○ 쪽 지도의 독도 표기를 보았습니다', '독도는 1900년 칙령 제41호 등 근거가 있는 한국 영토입니다', '자세한 근거는 외교부 독도 누리집에 있습니다', '검토해 주시면 감사하겠습니다'], { k: 3, d: 0.3, opt: { title: '정정 요청문' } }),
            PICKQ('정정 요청문에 넣어야 할 것만 고르세요.', ['잘못된 표기가 있는 쪽과 위치', '근거와 출처', '정중한 부탁'], ['상대 나라에 대한 불만', '내 전화번호와 집 주소'], { d: 0.3, opt: { basket: '요청문에 넣을 것', title: '정정 요청문' }, more: { conclude: '정정 요청은 확인→근거→요청문→보내기→기록의 차례로, 근거·출처·정중함을 갖춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '정정 요청 절차마다 할 일을 쓰세요.', columns: ['단계', '할 일'], cells: [['확인', ''], ['근거 수집', ''], ['요청문', ''], ['보내기', ''], ['기록', '']] }] },
        notes: '요청문에 학생 개인정보(전화번호·주소)를 쓰지 않게 한다. 실제로 보낼 때는 교사가 검토한다.',
      }),
      M({
        id: 'activity.letter', type: 'activity', title: '정정 요청문 쓰기',
        method: '정정 요청문 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '인사·문제 위치, 근거·출처, 부탁을 다섯 문장 안팎으로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에 외국어(영어) 요약 한 줄을 더한다.' },
        activity: {
          title: '정중한 정정 요청문', tool: 'rubric-writing',
          teacher: '"요청문을 받는 사람은 독도를 잘 모를 수 있어요. 무엇이 잘못되었는지, 왜 그런지, 어디서 확인하는지를 정중하게 알려 줘요." 수업용 가상 누리집을 대상으로 쓰게 한다. "당장 고쳐라"처럼 명령하는 말투를 쓴 학생에게 "받는 사람이 기분 좋게 검토하게 하려면 어떻게 바꿀까요?"라고 묻는다. 개인정보(이름·연락처)는 쓰지 않게 한다.',
          task: '가상 누리집에 보낼 정중한 정정 요청문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('인사와 문제 위치를 2문장으로 쓰세요.', '가상 누리집 운영자에게 인사하고, 잘못된 표기가 어디에 있는지 쓰세요.', ['정중한 인사로 시작했다', '잘못된 표기의 위치를 구체적으로 썼다', '개인정보를 쓰지 않았다'], { min: 30, max: 200, sent: [2, 3], must: [['안녕하세요', '안녕하십니까']], starter: '안녕하세요, ~입니다. 누리집 ~에서 ~', plus: '무엇이 어떻게 잘못 적혔는지 썼다', d: 0.35 }),
            RWQ('근거와 출처를 2문장으로 쓰세요.', '독도가 한국 영토라는 근거 하나와 확인할 수 있는 출처를 쓰세요.', ['근거를 하나 이상 들었다', '출처를 밝혔다', '상대를 탓하는 말이 없다'], { min: 40, max: 250, sent: [2, 3], must: [['칙령', '각서', '지리지'], ['외교부', '누리집']], starter: '독도는 ~ 근거가 있는 한국 영토입니다. 자세한 내용은 ~', plus: '근거의 연도를 정확히 썼다', d: 0.4 }),
            RWQ('정중한 부탁과 마무리를 1~2문장으로 쓰세요.', '고쳐 달라는 부탁과 감사의 마무리를 쓰세요.', ['명령이 아니라 부탁하는 말투다', '감사의 말로 끝맺었다', '감정 섞인 낱말이 없다'], { min: 20, max: 200, sent: [1, 2], must: [['검토', '부탁', '감사']], starter: '검토해 주시면 ~', plus: '영어 요약 한 줄(Dokdo 표기)을 덧붙였다', d: 0.4, more: { conclude: '정정 요청문은 위치·근거·출처를 분명히 하고 정중하게 부탁할 때 검토로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 요청문을 점검하세요.', options: ['정중한 인사', '문제 위치', '근거', '출처', '정중한 부탁', '개인정보 없음'] }] },
        notes: '요청문은 가상 누리집을 대상으로 쓰는 연습이다. 실제 발송은 교사가 문구를 검토한 뒤에만 한다(사람 확인 목록).',
      }),

      M({
        id: 'wrap.review', type: 'wrap', title: '요청문 짝 점검',
        method: '요청문 짝 점검', tool: 'timer', minutes: 8,
        levels: { easy: '짝 요청문에서 점검 칸 하나(정중함)만 본다.', base: '점검 칸 셋(위치·근거·정중함)을 본다.', challenge: '정중함을 높일 대안 문장을 하나 써 준다.' },
        wrap: {
          teacher: '"짝과 요청문을 바꿔 2분 동안 읽고 점검 칸에 표시한 뒤, 2분 동안 정중함을 높일 문장을 제안해요." 교사가 타이머로 진행한다. 짝의 글을 고칠 때 "이 문장은 명령처럼 들릴 수 있어요. \'~해 주시면 감사하겠습니다\'로 바꾸면 어떨까요?"처럼 문장을 두고 말하게 한다. 짝 글의 근거가 틀렸다면 출처를 함께 확인해 보자고 제안하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '요청문 짝 점검', labels: ['읽기', '제안'], timeUnit: 'min', plan: { work: 1, rest: 1, rounds: 1 } }, prompt: '짝 요청문을 2분 읽고 2분 제안하도록 타이머를 맞추고, 점검한 칸을 표시하세요.', target: { plan: { work: 2, rest: 2 }, selfCheck: ['문제 위치가 분명한지 보았다', '근거와 출처가 있는지 보았다', '말투가 정중한지 보았다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '짝의 요청문 "당장 지도를 고쳐라."를 정중하게 바꾼 것은?', options: ['지도를 고쳐 주시면 감사하겠습니다.', '고치지 않으면 가만두지 않겠다.', '빨리 고쳐라.'], answer: 0, difficulty: 0.15, explain: '부탁하는 말투가 받는 사람을 검토하게 만들어요.' },
            { type: 'short', prompt: '짝에게 제안받은 문장 가운데 내 요청문에 넣을 것을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '요청문 짝 점검표',
          items: [
            { type: 'check', prompt: '짝 요청문에서 확인한 것에 표시하세요.', options: ['문제 위치', '근거', '출처', '정중한 말투', '개인정보 없음'] },
            { type: 'short', prompt: '짝에게 써 준 대안 문장을 옮겨 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.bar', type: 'wrap', title: '참여 계획 점검 그래프',
        method: '참여 계획 점검 그래프', tool: 'chart', minutes: 8,
        levels: { easy: '교사가 계획 두 개의 막대를 함께 그려 보인다.', base: '모둠 계획 세 개의 실행 쉬움 점수 막대를 그리고 하나를 고른다.', challenge: '고른 계획의 까닭을 효과와 함께 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"모둠이 세운 참여 계획 세 개를 실행 쉬움 점수(가상 예시, 5점 만점)로 막대에 그려 봐요. 점수가 높다고 늘 좋은 계획일까요?" 막대를 그린 뒤 효과까지 함께 따져 하나를 고르게 한다. 쉬움 점수만 보고 고르는 학생에게 "그 계획이 바른 정보를 얼마나 늘릴까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '참여 계획 실행 쉬움 점수(가상 예시)', unit: '점', xLabel: '계획', yLabel: '실행 쉬움', max: 5, data: [['A 사료 퀴즈 부스', 4], ['B 정정 요청 보내기', 3], ['C 홍보 영상 만들기', 2]] }, prompt: '모둠 참여 계획 세 개의 실행 쉬움 점수(가상 예시)로 막대그래프를 완성하세요.', target: { build: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '실행 쉬움과 효과를 함께 따질 때 알맞은 생각은?', options: ['쉬운 계획부터 하되 효과가 큰 계획도 차근차근 준비한다', '가장 쉬운 계획 하나만 하면 된다', '어려운 계획은 하지 않는다'], answer: 0, difficulty: 0.15, explain: '쉬움과 효과를 함께 보고 차례를 정하면 계획이 실제로 이루어져요.' },
            { type: 'short', prompt: '우리 모둠이 고른 계획과 그 까닭(쉬움·효과)을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '참여 계획 점검',
          items: [
            { type: 'table', prompt: '모둠 계획을 두 기준으로 매기세요.', columns: ['계획', '실행 쉬움(1~5)', '효과(1~5)'], cells: [['A', '', ''], ['B', '', ''], ['C', '', '']] },
            { type: 'short', prompt: '고른 계획을 언제 실행할지 쓰세요.' },
          ],
        },
        notes: '점수는 모둠이 매긴 가상 예시다. 교구는 막대 하나만 그리므로 \'효과\' 점수는 활동지 표에서 함께 적는다.',
      }),
    );
  }

  // ======================================================================================================
  // 9. 합성 사진·가짜 뉴스와 외국어 알림 원칙 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-media', [11]);
    const SPREAD = [['1시간', 20], ['2시간', 60], ['3시간', 180], ['4시간', 400], ['5시간', 700]];
    const RULES = { text: '번역: 학급이 만든 독도 소개 글을 번역기로 영어로 옮겼더니 "칙령"이 엉뚱한 낱말로 바뀌었다.', who: '학급', motif: 'house', choices: [
      { id: 'verify', text: '외교부 누리집의 영문 자료와 대조해 낱말을 고친다', result: '칙령이 "Imperial Ordinance"로 바르게 옮겨진다.', impact: [{ who: '외국 독자', text: '뜻을 바르게 읽는다', tone: 1 }],
        next: { text: '표기: 섬과 바다 이름을 어떻게 적을지 정해야 한다.', choices: [
          { id: 'mofa', text: '외교부 누리집처럼 Dokdo, East Sea로 적는다', result: '공식 표기로 통일된 글이 된다.', impact: [{ who: '외국 독자', text: '공식 자료와 같은 이름을 찾는다', tone: 1 }],
            next: { text: '어조: 마지막 문장을 어떻게 쓸까?', choices: [
              { id: 'respect', text: '"공식 자료에서 함께 확인해 보세요"로 끝낸다', result: '외국 독자가 링크를 눌러 본다.', impact: [{ who: '외국 독자', text: '스스로 확인한다', tone: 1 }], ending: '정확한 번역·공식 표기·존중하는 어조가 함께 있어야 알림이 닿는다.' },
              { id: 'attack', text: '"모르면 공부부터 하라"로 끝낸다', result: '외국 독자가 글을 닫는다.', impact: [{ who: '외국 독자', text: '반감을 느낀다', tone: -1 }], ending: '공격하는 어조는 앞의 정확한 내용까지 가린다.' }] } },
          { id: 'mixed', text: '그때그때 떠오르는 대로 적는다', result: '한 글 안에 이름이 여러 가지로 섞인다.', impact: [{ who: '외국 독자', text: '같은 섬인지 헷갈린다', tone: -1 }], ending: '표기가 섞이면 독자가 혼란스러워한다.' }] } },
      { id: 'as', text: '번역기 결과를 그대로 올린다', result: '엉뚱한 낱말 때문에 글의 뜻이 바뀐다.', impact: [{ who: '외국 독자', text: '잘못 이해한다', tone: -1 }], ending: '번역은 공식 자료와 대조해 확인해야 한다.' }] };
    const RULES_R = [{ id: 'check', text: '번역은 공식 영문 자료와 대조해 확인한다' }, { id: 'tone', text: '존중하는 어조가 정확한 내용을 독자에게 닿게 한다' }, { id: 'machine', text: '번역기는 늘 정확하다', why: '고유한 문서 이름은 번역기가 엉뚱하게 옮길 수 있어요.' }, { id: 'strong', text: '세게 말해야 외국 독자가 알아듣는다', why: '공격하는 어조는 독자가 글을 닫게 해요.' }];

    MODS.push(
      M({
        id: 'intro.photo', type: 'intro', title: '두 장면 가운데 합성 고르기',
        method: '두 사진 가운데 합성 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 장면 두 쌍을 읽고 의심스러운 쪽을 함께 고른다.', base: '세 쌍에서 의심스러운 장면을 고른다.', challenge: '고른 장면마다 의심한 근거(출처·날짜·과장)를 말한다.' },
        intro: {
          teacher: '"사진 두 장 가운데 하나는 합성일 수 있어요. 무엇을 보면 알 수 있을까요?" 장면 카드를 쌍으로 읽고(실제 사진 대신 말로 그린 장면) 의심스러운 쪽을 고르게 한 뒤, 시연 단추로 의심 장면이 바구니에 담기는 모습을 보여 준다. "멋있으니 진짜일 것"이라는 말에는 "출처와 날짜가 적혀 있나요?"라고 되묻는다. 오늘은 가짜 뉴스의 신호와 외국어로 알릴 때의 원칙을 익힌다고 밝힌다.',
          student: '장면 카드를 두 장씩 견주어 보고, 합성이거나 의심스러운 장면을 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '의심스러운 장면', cards: ['촬영 기관이 적힌 독도 등대와 바닷새 사진', '출처 없이 독도 위에 놀이공원이 선 사진', '날짜가 적힌 독도경비대 근무 사진', '"충격 단독" 제목의 흐릿한 독도 사진', '연구기관이 펴낸 독도 식물 사진', '그림자 방향이 서로 다른 독도 사진'] }, sequence: [{ pick: ['출처 없이 독도 위에 놀이공원이 선 사진', '"충격 단독" 제목의 흐릿한 독도 사진', '그림자 방향이 서로 다른 독도 사진'] }] },
          art: { draw: 'two paper photo frames side by side, one showing a calm island with a lighthouse and birds, the other showing the same island with a strange amusement park cut from mismatched paper', banner: '어느 쪽이 의심스러울까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '실제 합성 사진을 띄우지 않고 말로 그린 장면 카드로 다룬다.',
      }),
      M({
        id: 'intro.sig', type: 'intro', title: '가짜 뉴스 신호 생각그물',
        method: '가짜 뉴스 신호 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '출처·날짜 두 가지에 신호 카드를 함께 단다.', base: '출처·날짜·과장 세 가지에 단다.', challenge: '세 가지 밖의 네 번째 신호(예: 그림자·글자 어긋남)를 말로 더한다.' },
        intro: {
          teacher: '"가짜 뉴스는 어떤 신호를 남길까요?" 신호 카드를 읽고 출처·날짜·과장 가지에 다는 모습을 시연 단추로 보여 준다. "유명한 계정이 올렸으니 믿을 만하다"는 말이 나오면 "그 계정은 어디서 그 사진을 가져왔다고 밝혔나요?"라고 되묻는다. 신호 하나만으로 가짜라고 단정하지 말고, 신호가 보이면 확인할 차례라는 점을 짚는다.',
          student: '가짜 뉴스 신호 카드를 출처·날짜·과장 가지에 달아 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '가짜 뉴스 신호', slots: ['출처', '날짜', '과장'], cards: ['글쓴이나 기관이 없다', '사진 출처가 없다', '날짜가 없다', '옛 사진을 오늘 일처럼 쓴다', '"충격"·"단독" 같은 제목', '숫자가 지나치게 크다'] }, sequence: [{ sort: { 출처: ['글쓴이나 기관이 없다', '사진 출처가 없다'], 날짜: ['날짜가 없다', '옛 사진을 오늘 일처럼 쓴다'], 과장: ['"충격"·"단독" 같은 제목', '숫자가 지나치게 크다'] } }] },
          art: { draw: 'a paper newspaper with three paper warning flags sticking out labelled with a person icon, a calendar and an exclamation mark', banner: '가짜 뉴스의 신호', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.judge', type: 'activity', title: '신호로 판정하기',
        method: '신호로 판정하기', tool: 'sortboard', minutes: 18,
        levels: { easy: '뉴스 카드 3장(정답 하나 이상씩)을 넣고, 틀리면 까닭과 함께 돌아온다.', base: '카드 6장을 신뢰·의심 바구니에 나누고, 의심 카드를 신호별로 다시 나눈다.', challenge: '카드 9장(더한 3장)을 나누고 활동지에 판정 근거를 쓴다.' },
        activity: {
          title: '신뢰와 의심 바구니', tool: 'sortboard',
          teacher: '"이 글은 믿을 만한가요, 확인이 필요한가요? 신호로 판정해요." 공식 기관 이름이 있는 글을 의심에 두는 학생에게는 기관과 날짜가 밝혀진 점을 다시 보게 한다. 내용이 우리에게 반가운 글이라고 신뢰에 두는 학생에게 "반가운 내용이라도 출처가 없으면 어떻게 할까요?"라고 묻는다. 우리 편 글도 확인해야 한다는 점이 오늘의 핵심이라고 짚는다.',
          task: '독도 관련 글 카드를 신뢰와 의심으로 나누고, 의심 카드에 신호를 붙여요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('독도 관련 글 카드를 신뢰와 의심 바구니에 나누세요.', ['신뢰', '의심'], [['외교부 누리집의 독도 설명(날짜 있음)', '연구기관이 펴낸 사료집 소개', '국가유산청의 천연보호구역 안내'], ['출처 없는 "독도 팔린다" 소문 글', '날짜 없는 옛 사진의 "오늘 독도" 글', '"충격" 제목의 숫자 부풀린 글']], { k: 1, hard: { add: [['교육부의 독도교육 안내문'], ['우리에게 반가운 내용이지만 출처 없는 글']], traps: [] }, d: 0.3 }),
            BOARDQ('의심 글을 가장 큰 신호에 따라 바구니에 나누세요.', ['출처 없음', '날짜 어긋남', '과장'], [['출처 없는 "독도 팔린다" 소문 글'], ['날짜 없는 옛 사진의 "오늘 독도" 글'], ['"충격" 제목의 숫자 부풀린 글']], { k: 1, d: 0.3 }),
            BOARDQ('신호를 본 뒤의 행동을 할 일과 하지 말 일로 나누세요.', ['할 일', '하지 말 일'], [['공식 기관 자료와 견주어 본다', '공유하기 전에 날짜와 출처를 확인한다'], ['반가운 내용이니 바로 퍼 나른다', '신호 하나로 글쓴이를 비난한다']], { k: 1, d: 0.3, more: { conclude: '우리에게 반가운 글도 신호가 보이면 공식 자료로 확인한 뒤에 나눠요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '의심 바구니에 넣은 글 하나를 골라, 어떤 신호를 보고 판정했는지 쓰세요.' }] },
        notes: '글 카드는 수업용 가상 글이다.',
      }),
      M({
        id: 'activity.spread', type: 'activity', title: '퍼지는 속도 그래프 읽기',
        method: '퍼지는 속도 그래프 읽기', tool: 'chart', minutes: 18,
        levels: { easy: '꺾은선 점에 값이 보이고, 가장 크게 는 때를 읽는다.', base: '값 표시 없이 읽고, 확인 전 공유의 영향을 해석한다.', challenge: '해석에 더해 확인하고 대응하기 가장 좋은 때를 고르고 까닭을 쓴다.' },
        activity: {
          title: '확인 전 공유 수(가상)', tool: 'chart',
          teacher: '"이 그래프는 가상 예시예요. 출처 없는 독도 글 하나가 올라온 뒤 시간마다 공유 수가 어떻게 늘었을까요?" 처음 한두 시간은 적어 보여도 뒤로 갈수록 크게 는다는 점을 짚는다. "나 하나 공유하는 건 괜찮다"는 학생에게 "처음 1시간의 20번 가운데 하나가 나였다면, 5시간 뒤 700번에 내 몫은 얼마나 될까요?"라고 묻는다. 대응은 빨리, 확인은 공유보다 먼저라는 점을 정리한다.',
          task: '가상 공유 수 꺾은선그래프를 읽고, 확인 전 공유의 영향을 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 그래프에서 3시간 뒤 공유 수를 쓰세요.', toolOptions: { type: 'line', mode: 'read', title: '출처 없는 글의 공유 수(가상 예시)', unit: '번', xLabel: '올라온 뒤', yLabel: '공유 수', data: SPREAD, question: '3시간 뒤 공유 수는?' }, target: { value: 180 }, difficulty: 0.2 },
            { prompt: '공유 수가 한 시간 사이에 가장 많이 늘어난 때를 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '출처 없는 글의 공유 수(가상 예시)', unit: '번', xLabel: '올라온 뒤', yLabel: '공유 수', data: SPREAD, question: '가장 많이 는 구간은?', choices: ['1→2시간', '2→3시간', '3→4시간', '4→5시간'], why: ['40번 늘었어요.', '120번 늘었어요.', '220번 늘었어요.', ''] }, target: { pick: 3 }, difficulty: 0.3 },
            { prompt: '이 가상 그래프의 해석으로 알맞은 것을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '출처 없는 글의 공유 수(가상 예시)', unit: '번', xLabel: '올라온 뒤', yLabel: '공유 수', data: SPREAD, question: '알맞은 해석은?', choices: ['확인 전 공유가 쌓이면 시간이 갈수록 더 빨리 퍼진다', '처음에 적으니 걱정할 필요가 없다', '공유 수가 많으면 사실이다'], why: ['', '뒤로 갈수록 크게 늘어요.', '많이 퍼진 것과 사실인 것은 달라요.'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '확인하고 대응하기에 가장 좋은 때를 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '출처 없는 글의 공유 수(가상 예시)', unit: '번', xLabel: '올라온 뒤', yLabel: '공유 수', data: SPREAD, question: '대응하기 좋은 때는?', choices: ['1시간 안', '3시간 뒤', '5시간 뒤'], why: ['', '이미 180번 퍼졌어요.', '이미 700번 퍼졌어요.'] }, target: { pick: 0 }, difficulty: 0.35, conclude: '퍼지기 전 이른 때에 확인하고 대응해야 하고, 나부터 확인 전에는 공유하지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"나 하나쯤 공유해도 괜찮다"는 생각을 그래프 근거로 반박하는 문장을 쓰세요.' }] },
        notes: '공유 수는 수업용 가상 자료다. 화면 제목에 \'가상 예시\'로 밝힌다.',
      }),
      M({
        id: 'activity.rules', type: 'activity', title: '외국어 알림 원칙 갈림길',
        method: '외국어 알림 원칙 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '번역 갈림길 하나에서 고르고 근거를 고른다.', base: '표기 갈림길까지 간다.', challenge: '어조 갈림길까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '번역·표기·어조', tool: 'dilemma',
          teacher: '"독도를 영어로 소개한다면 어떤 낱말을 쓰겠어요?" 대답을 듣고 외교부 누리집은 독도를 Dokdo, 동해를 East Sea로 적는다는 점을 알린다. 번역기 결과를 그대로 올리는 학생에게 "번역기가 칙령 제41호를 어떻게 옮겼는지 확인했나요?"라고 묻는다. 공격하는 어조를 고르는 학생에게는 결과 장면에서 외국 독자가 글을 닫는 모습을 보게 하고, 정확한 내용도 어조 때문에 닿지 않을 수 있다고 짚는다.',
          task: '외국어로 알리는 글의 번역·표기·어조 갈림길을 지나며 결과를 추적하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('외국어 알림 글의 번역·표기·어조 원칙을 지키는 길을 고르고 근거를 고르세요.', RULES, [['verify', 'mofa', 'respect']], RULES_R, ['check', 'tone'], { d: 0.4 }),
            EXPLOREQ('원칙을 지키지 않은 길도 끝까지 가 보고, 외국 독자의 반응을 견주세요.', RULES, RULES_R, ['다른 길에서 외국 독자의 반응을 확인했다', '세 원칙(번역·표기·어조)을 말할 수 있다'], { d: 0.35 }),
            DILQ('친구가 영어 게시물에 상대 나라를 놀리는 그림을 넣자고 할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '친구: "영어 게시물에 상대 나라를 놀리는 그림을 넣으면 눈에 띌 거야."', who: '친구', motif: 'house', choices: [
              { id: 'map', text: '놀리는 그림 대신 칸 지도와 출처를 넣자고 한다', result: '게시물이 근거 중심으로 바뀐다.', impact: [{ who: '외국 독자', text: '근거를 먼저 본다', tone: 1 }], ending: '눈에 띄는 것보다 믿을 수 있는 것이 오래 남는다.' },
              { id: 'mock', text: '눈에 띄니 놀리는 그림을 넣는다', result: '게시물에 다툼 댓글이 몰린다.', impact: [{ who: '외국 독자', text: '반감을 느낀다', tone: -1 }], ending: '놀리는 그림은 근거를 가리고 반감을 키운다.' }] },
              [['map']], [{ id: 'evidence', text: '외국 독자에게는 근거와 출처가 먼저다' }, { id: 'eye', text: '눈에 띄면 무엇이든 괜찮다', why: '놀리는 그림은 혐오로 읽히고 근거를 가려요.' }], ['evidence'], { d: 0.3, more: { conclude: '외국어로 알릴 때는 정확한 번역, 공식 표기, 존중하는 어조를 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '외국어 알림 세 원칙을 정리하세요.', columns: ['원칙', '지키는 방법'], cells: [['번역', ''], ['표기', ''], ['어조', '']] }] },
        notes: '영문 표기는 외교부 누리집(Dokdo·East Sea)을 따른다(사람 확인 목록). 칙령의 영문 이름은 외교부 영문 자료로 확인한다.',
      }),
      M({
        id: 'activity.write', type: 'activity', title: '외국 독자용 짧은 게시물',
        method: '외국 독자용 짧은 게시물', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '한국어 게시물만 쓰고, 외국어 칸은 한국어 한 줄 요약으로 쓴다.', base: '한국어 게시물과 외국어(영어) 한 줄을 쓰고 기준표로 점검한다.', challenge: '두 언어 요약이 같은 뜻인지 점검하는 기준이 더해진다.' },
        activity: {
          title: '두 언어 게시물', tool: 'rubric-writing',
          teacher: '"짧은 게시물일수록 근거 하나, 출처 하나, 존중하는 끝맺음이 중요해요." 한국어 게시물을 먼저 쓰고 영어 한 줄을 붙이게 한다. 영어 문장에 Dokdo 대신 다른 이름을 쓰는 학생에게 외교부 누리집 표기를 다시 보게 한다. 영어 문장이 어려우면 짧고 정확한 한 줄이 길고 틀린 문장보다 낫다고 말해 준다.',
          task: '원칙을 지킨 짧은 게시물을 한국어와 외국어 한 줄로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('한국어 게시물을 2~3문장으로 쓰세요.', '외국 독자에게 보일 짧은 한국어 게시물을 근거 하나·출처 하나를 넣어 쓰세요.', ['근거를 하나 들었다', '출처를 밝혔다', '존중하는 말로 끝맺었다'], { min: 40, max: 250, sent: [2, 3], must: [['외교부', '누리집', '동북아역사재단']], starter: '독도는 ~. 근거는 ~. 자세한 내용은 ~', plus: '처음 듣는 사람도 알 낱말로 썼다', d: 0.35 }),
            { prompt: '외국어(영어) 한 줄을 쓰고 기준표로 점검하세요.', toolOptions: { topic: '한국어 게시물을 영어 한 줄로 요약하세요. 섬 이름은 Dokdo로 적어요.', minChars: 15, maxChars: 200 }, target: { selfCheck: ['섬 이름을 Dokdo로 적었다', '한국어 게시물과 뜻이 같다', '공격하는 말이 없다'], mustInclude: ['Dokdo'] }, difficulty: 0.4,
              levels: { easy: { prompt: '외국어 대신 한국어 한 줄로 게시물을 요약하고 점검하세요(한국어만).', toolOptions: { topic: '한국어 게시물을 한 줄로 요약하세요.', starter: '한 줄 요약: 독도는 ~' }, target: { selfCheck: ['한 줄로 요약했다', '게시물과 뜻이 같다', '공격하는 말이 없다'] } },
                challenge: { prompt: '외국어(영어) 한 줄을 쓰고 두 언어의 뜻이 같은지 점검하세요(두 언어 요약).', target: { selfCheck: ['섬 이름을 Dokdo로 적었다', '한국어 게시물과 뜻이 같다', '공격하는 말이 없다', '두 언어 모두 출처를 가리켰다'], mustInclude: ['Dokdo'] } } } },
            RWQ('게시물이 세 원칙을 지켰는지 점검한 결과를 2문장으로 쓰세요.', '내 게시물이 번역·표기·어조 원칙을 지켰는지 점검해 쓰세요.', ['번역을 무엇과 대조했는지 썼다', '표기를 확인했다', '어조를 점검했다'], { min: 40, max: 250, sent: [2, 3], must: [['번역', '표기', '어조']], starter: '번역은 ~와 대조했고, 표기는 ~', d: 0.35, more: { conclude: '짧은 게시물도 근거·출처·공식 표기·존중하는 어조를 갖추면 외국 독자에게 닿아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 게시물의 영어 한 줄을 옮겨 쓰고, 쓰기 어려웠던 낱말을 적으세요.' }] },
        notes: '게시물은 수업 안에서만 나눈다. 실제 누리 소통망에 올릴 때는 교사가 문구를 함께 검토한다.',
      }),

      M({
        id: 'wrap.swap', type: 'wrap', title: '게시물 돌려 보기',
        method: '게시물 돌려 보기', tool: 'timer', minutes: 8,
        levels: { easy: '돌려 본 게시물 하나에만 원칙 점검 칸을 표시한다.', base: '게시물 두 개를 돌려 보며 표시한다.', challenge: '게시물 세 개를 돌려 보고 하나에 고칠 점을 적어 준다.' },
        wrap: {
          teacher: '"교사 신호에 맞춰 모둠 게시물을 1분 30초씩 돌려 보고, 원칙 점검 칸에 표시해요." 교사가 타이머로 돌리기를 진행한다. 다른 모둠 게시물에서 원칙을 어긴 곳을 찾으면 그 문장을 두고 말하게 하고, 쓴 사람을 탓하지 않게 한다. 영어 표기가 다른 곳을 찾은 학생에게 공식 표기를 함께 확인하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '게시물 돌려 보기', labels: ['보기', '넘기기'], plan: { work: 60, rest: 0, rounds: 1 } }, prompt: '게시물을 1분 30초씩 보고 10초에 넘기기를 3번 하도록 타이머를 맞추고, 확인한 원칙을 표시하세요.', target: { plan: { work: 90, rest: 10, rounds: 3 }, selfCheck: ['번역이 공식 자료와 맞는지 보았다', 'Dokdo·East Sea 표기를 보았다', '어조가 존중하는지 보았다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '다른 모둠 게시물에서 공격하는 문장을 찾았다면 어떻게 말할까요?', options: ['"이 문장을 공식 자료 안내 문장으로 바꾸면 더 잘 닿을 것 같아요"', '"이 모둠은 생각이 없네요"', '말하지 않고 넘어간다'], answer: 0, difficulty: 0.15, explain: '사람이 아니라 문장을 두고, 고칠 방법과 함께 말해요.' },
            { type: 'short', prompt: '돌려 본 게시물 가운데 원칙을 가장 잘 지킨 문장을 옮겨 쓰세요.' },
          ],
        },
        worksheet: {
          title: '게시물 원칙 점검',
          items: [
            { type: 'table', prompt: '돌려 본 게시물을 점검하세요(○·△·×).', columns: ['게시물', '번역', '표기', '어조'], cells: [['1', '', '', ''], ['2', '', '', ''], ['3', '', '', '']] },
            { type: 'short', prompt: '우리 모둠 게시물에서 고칠 점 하나를 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '알림 원칙 다섯 줄',
        method: '원칙 다섯 줄 고르기', tool: 'emotion', minutes: 8,
        levels: { easy: '교사가 원칙 세 줄과 지킨 예시를 함께 잇는다.', base: '원칙 네 줄을 지킨 예시와 잇는다.', challenge: '다섯 줄 모두 잇고, 내 게시물에서 지킨 줄을 고른다.' },
        wrap: {
          teacher: '"오늘 배운 원칙 다섯 줄을 지킨 예시와 다시 이어 봐요." 원칙 카드와 예시를 잇게 한 뒤 출구 질문으로 넘어간다. \'사실 확인\'과 \'출처\'를 헷갈리는 학생에게 "공유하기 전에 하는 일과, 글에 적어 두는 일은 무엇이 다를까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', weather: false, slots: ['번역 확인', '공식 표기', '출처 밝히기', '존중하는 어조', '공유 전 확인'], cards: ['날짜와 출처를 보고 나서 공유했다', '"함께 확인해 보세요"로 끝맺었다', '외교부 누리집 주소를 달았다', 'Dokdo·East Sea로 적었다', '번역기 결과를 공식 영문 자료와 대조했다'] }, prompt: '알림 원칙과 그 원칙을 지킨 예시를 이으세요.', target: { match: { '번역 확인': '번역기 결과를 공식 영문 자료와 대조했다', '공식 표기': 'Dokdo·East Sea로 적었다', '출처 밝히기': '외교부 누리집 주소를 달았다', '존중하는 어조': '"함께 확인해 보세요"로 끝맺었다', '공유 전 확인': '날짜와 출처를 보고 나서 공유했다' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '합성 사진이 의심될 때 가장 먼저 할 일은?', options: ['출처와 날짜를 확인한다', '바로 퍼 나른다', '올린 사람을 비난한다'], answer: 0, difficulty: 0.15, explain: '신호가 보이면 먼저 출처와 날짜를 확인해요.' },
            { type: 'short', prompt: '다섯 줄 가운데 내가 가장 지키기 어려운 원칙과 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '외국어 알림 원칙',
          items: [
            { type: 'check', prompt: '다음 게시물에서 지킬 원칙에 표시하세요.', options: ['번역 확인', '공식 표기', '출처 밝히기', '존중하는 어조', '공유 전 확인'] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '외교부 누리집은 독도를 ___, 동해를 East Sea로 적는다.', answer: 'Dokdo' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 10. 근거와 출처를 갖춘 학교 독도 캠페인 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-camp', [11]);
    const FIX = { text: '기획안 피드백 1: "포스터 문구 \'독도를 넘보지 마라\'는 공격적으로 읽힐 수 있어요."', who: '모둠', motif: 'house', choices: [
      { id: 'accept', text: '피드백을 받아 "근거로 아는 독도"로 문구를 바꾼다', result: '문구가 차분해지고 근거 칸이 눈에 띈다.', impact: [{ who: '참여 학생', text: '반감 없이 다가온다', tone: 1 }],
        next: { text: '피드백 2: "출처 칸이 비어 있어요."', choices: [
          { id: 'source', text: '근거마다 외교부·동북아역사재단 출처를 단다', result: '보는 사람이 스스로 확인할 길이 생긴다.', impact: [{ who: '참여 학생', text: '근거를 믿고 확인한다', tone: 1 }],
            next: { text: '피드백 3: "\'독도교육은 학교급마다 10시간 의무\'라는 문장이 계획서와 달라요."', choices: [
              { id: 'correct', text: '계획서대로 "학교급 공통 연 10시간 이상 권장"으로 고친다', result: '숫자와 표현이 정책 자료와 같아진다.', impact: [{ who: '캠페인', text: '정확한 인용으로 믿음을 얻는다', tone: 1 }], ending: '피드백을 받아 문구·출처·인용을 고친 캠페인이 믿음을 얻는다.' },
              { id: 'leave', text: '비슷한 뜻이니 그대로 둔다', result: '선생님이 오인용을 짚어 포스터를 다시 찍는다.', impact: [{ who: '모둠', text: '시간과 믿음을 잃는다', tone: -1 }], ending: '\'권장\'과 \'의무\'는 다른 말이다.' }] } },
          { id: 'nosrc', text: '출처는 보는 사람이 알아서 찾으면 된다고 둔다', result: '보는 사람이 근거를 확인하지 못한다.', impact: [{ who: '참여 학생', text: '근거를 의심한다', tone: -1 }], ending: '출처 없는 근거는 확인할 수 없는 주장이 된다.' }] } },
      { id: 'reject', text: '눈에 띄어야 한다며 그대로 둔다', result: '포스터 앞에서 다툼 섞인 말이 오간다.', impact: [{ who: '참여 학생', text: '근거 대신 반감이 남는다', tone: -1 }], ending: '공격적인 문구는 캠페인의 목적을 가린다.' }] };
    const FIX_R = [{ id: 'feedback', text: '피드백은 캠페인을 정확하고 존중하게 만든다' }, { id: 'cite', text: '정책 숫자는 계획서 표현대로 인용한다' }, { id: 'loud', text: '센 문구일수록 효과가 크다', why: '공격적인 문구는 반감을 키워 목적을 가려요.' }, { id: 'pride', text: '피드백을 받으면 지는 것이다', why: '피드백을 반영하는 것이 더 나은 캠페인을 만들어요.' }];
    const RUN = ['부스 자리와 동선을 점검한다', '자료와 출처 카드를 놓는다', '참여 학생을 맞이해 퀴즈를 진행한다', '참여 인원을 센다', '자리를 정리하고 기록을 남긴다'];

    MODS.push(
      M({
        id: 'intro.ex', type: 'intro', title: '캠페인 사례 견주기',
        method: '캠페인 사례 견주기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 사례 두 장을 함께 판정해 보인다.', base: '사례 네 장을 근거 있음·없음 바구니에 함께 나눈다.', challenge: '근거 없는 사례마다 무엇을 더하면 되는지 말한다.' },
        intro: {
          teacher: '"두 학교가 독도 캠페인을 했어요. 어느 쪽이 더 오래 기억될까요?" 수업용 가상 사례 카드를 읽고 시연 단추로 근거 있음·없음 바구니에 나뉘는 모습을 보여 준다. 구호만 크게 외친 사례를 \'열정적이라 좋다\'고 하는 학생에게 "참여한 학생이 집에 가서 기억할 근거가 있을까요?"라고 묻는다. 오늘은 동북아역사재단의 고등학교 사례처럼 근거와 출처를 갖춘 \'독도 지키기 프로젝트\'를 기획한다고 밝힌다.',
          student: '가상 캠페인 사례를 근거 있음과 근거 없음으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['근거 있음', '근거 없음'], cards: ['출처를 단 사료 퀴즈 부스', '상대 나라를 비난하는 구호 외치기', '칸 지도와 영해 설명 게시판', '확인 안 된 영상 틀어 주기'] }, sequence: [{ sort: { '근거 있음': ['출처를 단 사료 퀴즈 부스', '칸 지도와 영해 설명 게시판'], '근거 없음': ['상대 나라를 비난하는 구호 외치기', '확인 안 된 영상 틀어 주기'] } }] },
          art: { draw: 'two paper school booths side by side, one with neat source cards and a small island map, the other with loud paper megaphones and no papers', banner: '어느 캠페인이 오래 남을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 수업용 가상 사례다. 동북아역사재단 \'내가 만들어 가는 독도\' 고등학교 사례(독도 지키기 프로젝트)는 research-days.md 에 근거한다.',
      }),
      M({
        id: 'intro.aud', type: 'intro', title: '대상 학생 조사 그래프',
        method: '대상 학생 조사 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 \'잘 안다\'·\'잘 모른다\' 두 항목만 함께 읽는다.', base: '세 항목을 읽고 캠페인 대상을 정한다.', challenge: '그래프로 대상을 정한 까닭을 한 문장으로 말한다.' },
        intro: {
          teacher: '"캠페인은 누구를 위한 것일까요? 가상 학급 설문(독도 사료를 하나 이상 말할 수 있나요?)을 보고 정해 봐요." 그래프를 보이고 시연 단추로 가장 큰 막대가 골라지는 모습을 보여 준다. 응답이 가장 많은 쪽만 대상이라고 하는 학생에게 "\'조금 안다\'는 학생에게 필요한 것과 \'잘 모른다\'는 학생에게 필요한 것은 같을까요?"라고 묻는다. 실제 설문을 할 때는 이름을 받지 않는다고 짚는다.',
          student: '가상 학급 설문 그래프를 보고, 캠페인이 누구에게 무엇을 알려야 할지 정해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '독도 사료를 하나 이상 말할 수 있나요?(가상 설문 30명)', unit: '명', xLabel: '응답', yLabel: '학생 수', data: [['잘 안다', 6], ['조금 안다', 14], ['잘 모른다', 10]], question: '가장 많은 응답은?', choices: ['잘 안다', '조금 안다', '잘 모른다'] }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper bar chart on a classroom board with three bars of different heights, small paper students looking at it and pointing at a paper island poster', banner: '누구에게 알릴까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '설문 수치는 가상이다. 실제 설문은 이름 없이 하고 결과를 학생 개인 평가에 쓰지 않는다.',
      }),

      M({
        id: 'activity.plan', type: 'activity', title: '캠페인 기획안 쓰기',
        method: '캠페인 기획안 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '목적·대상, 근거·출처, 활동·평가 여섯 항목을 세 칸에 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 위험 요소(혐오 표현·오인용·안전)와 대비책을 쓴다.' },
        activity: {
          title: '여섯 항목 기획안', tool: 'rubric-writing',
          teacher: '"기획안은 목적·대상·근거·출처·활동·평가 여섯 항목을 갖춰요. 활동이 아무리 재미있어도 근거와 출처가 없으면 캠페인이 아니라 행사예요." 대상은 도입의 가상 설문처럼 근거로 정하게 한다. 평가 칸에 \'잘하기\'처럼 막연하게 쓴 학생에게 "끝난 뒤 무엇을 세면 잘됐는지 알 수 있을까요?"라고 묻는다. 위험 요소로 혐오 표현과 숫자 오인용, 부스 안전을 함께 떠올리게 한다.',
          task: '학교 독도 캠페인 기획안을 여섯 항목으로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('목적과 대상을 2문장으로 쓰세요.', '캠페인의 목적과 대상을, 대상을 정한 근거와 함께 쓰세요.', ['목적을 한 문장으로 분명히 썼다', '대상을 정했다', '대상을 정한 근거를 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['대상', '학생']], starter: '이 캠페인의 목적은 ~이다. 대상은 ~이다. 왜냐하면 ~', plus: '목적이 근거로 아는 독도와 이어진다', d: 0.35 }),
            RWQ('알릴 근거와 출처를 2~3문장으로 쓰세요.', '캠페인에서 알릴 근거 두 가지와 그 출처를 쓰세요.', ['근거를 두 가지 들었다', '근거마다 출처를 밝혔다', '숫자와 표현을 정확히 인용했다'], { min: 40, max: 300, sent: [2, 3], must: [['외교부', '동북아역사재단', '교육부']], starter: '알릴 근거는 ~와 ~이다. 출처는 ~', plus: '근거마다 연도를 정확히 썼다', d: 0.4 }),
            RWQ('활동과 평가 방법을 2~3문장으로 쓰세요.', '캠페인 활동(무엇을 언제 어디서)과 평가 방법(무엇을 셀지)을 쓰세요.', ['활동을 구체적으로 썼다', '평가할 것을 셀 수 있게 썼다', '혐오 표현이 들어갈 자리가 없다'], { min: 40, max: 300, sent: [2, 3], must: [['평가', '세', '설문']], starter: '점심시간에 ~에서 ~을 한다. 끝난 뒤 ~을 센다.', plus: '위험 요소와 대비책을 썼다', d: 0.4, more: { conclude: '좋은 캠페인 기획안은 근거·출처가 중심에 있고, 끝난 뒤 셀 수 있는 평가를 갖춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기획안 여섯 항목을 정리하세요.', columns: ['항목', '우리 모둠'], cells: [['목적', ''], ['대상', ''], ['근거', ''], ['출처', ''], ['활동', ''], ['평가', '']] }] },
      }),
      M({
        id: 'activity.poster', type: 'activity', title: '홍보물 시안 꾸미기',
        method: '홍보물 시안 꾸미기', tool: 'collage', minutes: 18,
        levels: { easy: '모양 세 가지 고르개로 조각 3개 이상 붙여 제목·근거 칸을 꾸민다.', base: '조각 5개 이상으로 제목·근거·출처 칸을 꾸미고, 글자 칸 색 대비를 맞춘다.', challenge: '출처 칸과 QR 자리(작은 네모)를 따로 두고 점검한다.' },
        activity: {
          title: '근거가 보이는 홍보물', tool: 'collage',
          teacher: '"홍보물에서 가장 크게 보여야 할 것은 무엇일까요? 화려한 그림이 아니라 근거 문구예요." 긴 네모 조각을 글자 칸으로 쓰고, 근거 문구와 출처 칸을 정하게 한다. 실제 글자는 활동지에 먼저 쓰게 한다. 상대 나라를 놀리는 그림을 넣으려는 학생에게 "그 그림을 본 사람이 근거를 먼저 볼까요, 다툼을 먼저 볼까요?"라고 묻는다. 글자 칸은 밝은 바탕에 어두운 조각처럼 대비를 주어야 멀리서도 읽힌다고 짚는다.',
          task: '근거 문구와 출처 칸이 보이는 홍보물 시안을 조각으로 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '홍보물의 제목 칸과 근거 문구 칸을 긴 네모 조각으로 정하고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle', 'star'] }, target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['제목 칸이 가장 위에 있다', '근거 문구 칸이 크게 보인다', '상대를 놀리는 그림이 없다'], minPieces: 5 }, difficulty: 0.25,
              levels: { easy: { prompt: '홍보물의 제목 칸과 근거 문구 칸을 긴 네모 조각으로 정하고 점검하세요(조각 3개 이상).', toolOptions: { shapes: ['rect', 'square', 'circle'] }, target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['제목 칸이 가장 위에 있다', '근거 문구 칸이 크게 보인다', '상대를 놀리는 그림이 없다'], minPieces: 3 } } } },
            { prompt: '글자 칸이 멀리서도 읽히도록 밝은 조각과 어두운 조각을 맞닿게 붙이세요.', toolOptions: { shapes: ['rect', 'square', 'circle'] }, target: { contrast: 'light-dark', pieces: { min: 2 } }, difficulty: 0.3 },
            { prompt: '출처 칸과 QR 자리(작은 네모)를 따로 두고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle'] }, target: { has: [{ shape: 'square', size: 's', min: 1 }, { shape: 'rect', min: 1 }], selfCheck: ['출처 칸이 근거 문구 가까이에 있다', 'QR 자리를 작은 네모로 두었다', '출처 칸의 글자가 너무 작지 않다'], minPieces: 3 }, difficulty: 0.35, conclude: '홍보물은 근거 문구가 가장 크게, 출처는 그 가까이에 보여야 보는 사람이 확인할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '홍보물에 들어갈 글을 쓰세요.', columns: ['칸', '글'], cells: [['제목', ''], ['근거 문구', ''], ['출처', '']] }] },
        notes: '조각 판은 글자를 쓰지 못한다. 글자는 활동지에 쓰고 조각으로 자리와 크기를 정한다. 실제 게시 전 교사가 문구를 검토한다.',
      }),
      M({
        id: 'activity.fix', type: 'activity', title: '기획안 고치기 갈림길',
        method: '기획안 고치기 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '피드백 1(공격적 문구) 갈림길에서 고르고 근거를 고른다.', base: '피드백 2(출처 칸)까지 간다.', challenge: '피드백 3(오인용)까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '세 피드백 앞의 갈림길', tool: 'dilemma',
          teacher: '"피드백은 기획안을 깎아내리는 말이 아니라 더 낫게 만드는 재료예요. 받아들일지, 어떻게 고칠지 갈림길에서 정해 봐요." 공격적 문구를 \'눈에 띄어야 한다\'며 그대로 두는 학생에게 결과 장면을 보게 한다. 오인용 피드백에서 "비슷한 뜻"이라고 넘기는 학생에게는 \'권장\'과 \'의무\'가 정책 자료에서 다른 말이라는 점을 짚는다. 고친 기획안을 기준표(사실성·출처·존중)로 다시 점검하게 한다.',
          task: '기획안 피드백 갈림길을 지나며 결과를 추적하고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('세 피드백을 받아 기획안을 고치는 길을 고르고, 근거를 고르세요.', FIX, [['accept', 'source', 'correct']], FIX_R, ['feedback', 'cite'], { d: 0.4 }),
            EXPLOREQ('피드백을 받아들이지 않은 길도 끝까지 가 보고 결과를 견주세요.', FIX, FIX_R, ['다른 길에서 캠페인이 잃은 것을 찾았다', '사실성·출처·존중 기준을 말할 수 있다'], { d: 0.35 }),
            DILQ('모둠원이 피드백에 서운해할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '모둠원: "내가 쓴 문구를 다 고치라니 서운해."', who: '모둠원', motif: 'house', choices: [
              { id: 'together', text: '문구의 좋은 뜻은 살리고 표현만 함께 고치자고 한다', result: '모둠원이 새 문구를 직접 제안한다.', impact: [{ who: '모둠원', text: '존중받으며 고친다', tone: 1 }], ending: '사람이 아니라 문장을 고치면 모둠이 함께 나아간다.' },
              { id: 'blame', text: '"네 문구 때문에 다시 해야 한다"고 말한다', result: '모둠원이 더는 의견을 내지 않는다.', impact: [{ who: '모둠', text: '함께 고칠 힘을 잃는다', tone: -1 }], ending: '탓하는 말은 고칠 힘을 빼앗는다.' }] },
              [['together']], [{ id: 'sentence', text: '사람이 아니라 문장을 두고 고친다' }, { id: 'fault', text: '잘못한 사람을 분명히 짚어야 한다', why: '탓하기보다 함께 고칠 방법을 찾는 것이 모둠을 지켜요.' }], ['sentence'], { d: 0.3, more: { conclude: '피드백을 받아 문구·출처·인용을 고치고, 고칠 때는 사람이 아니라 문장을 다뤄요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '받은 피드백과 고친 점을 쓰세요.', columns: ['피드백', '고친 점'], cells: [['문구', ''], ['출처', ''], ['인용', '']] }] },
        notes: '\'학교급 공통 연 10시간 이상 권장\'은 교육부 「2025 독도교육 활성화 계획」 표현이다(research-days.md §2-1).',
      }),
      M({
        id: 'activity.run', type: 'activity', title: '실제 캠페인 운영',
        method: '실제 캠페인 운영', tool: 'timer', minutes: 18,
        levels: { easy: '운영 시간을 10분으로 맞추고 안전 점검과 순서만 지킨다.', base: '운영 시간을 20분으로 맞추고 안전·순서를 점검한다.', challenge: '20분 운영에 더해 참여 인원을 기록판에 적는다.' },
        activity: {
          title: '점심시간 캠페인 부스', tool: 'timer',
          teacher: '"오늘은 교사 인솔로 정해진 시간(점심시간 등)에 캠페인을 실제로 운영해요. 시작 전에 안전과 순서를 먼저 점검해요." 부스 자리·동선·전기선을 함께 확인한다. 참여 학생에게 이름이나 연락처를 묻지 않고, 인원만 센다고 미리 정한다. 참여 학생과 다툼이 생기면 운영 학생이 혼자 해결하지 않고 바로 교사에게 알리게 한다.',
          task: '캠페인 시작 전 안전을 점검하고, 운영 시간과 순서를 맞추고, 참여 기록을 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '캠페인 부스를 열기 전에 안전 점검 칸을 모두 확인하세요.', toolOptions: { title: '부스 안전 점검', safety: ['통로가 막히지 않았다', '전기선이 발에 걸리지 않게 정리했다', '참여 학생의 이름·연락처를 받지 않기로 했다', '다툼이 생기면 교사에게 바로 알리기로 했다'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '캠페인 운영 순서 카드를 차례대로 놓으세요.', toolOptions: { title: '운영 순서', cards: [RUN[3], RUN[1], RUN[4], RUN[0], RUN[2]] }, target: { order: RUN }, difficulty: 0.25 },
            { prompt: '캠페인 운영 시간을 20분 한 번으로 맞추세요.', toolOptions: { title: '운영 시간', labels: ['운영', '정리'], timeUnit: 'min', plan: { work: 5, rest: 0, rounds: 1 } }, target: { plan: { work: 20, rounds: 1 } }, difficulty: 0.2,
              levels: { easy: { prompt: '캠페인 운영 시간을 10분 한 번으로 맞추세요(짧은 운영).', target: { plan: { work: 10, rounds: 1 } } } } },
            { prompt: '운영 뒤 참여 인원을 기록판에 적으세요.', toolOptions: { title: '참여 기록', fields: [{ label: '퀴즈 참여 인원', unit: '명', step: 1 }, { label: '출처 카드 가져간 인원', unit: '명', step: 1 }] }, target: { records: true }, difficulty: 0.15, conclude: '안전과 순서를 먼저 점검하고, 이름 없이 인원만 세면 다음 캠페인을 근거로 고칠 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '운영 기록을 쓰세요.', columns: ['항목', '기록'], cells: [['운영 시각과 장소', ''], ['참여 인원', ''], ['잘된 점', ''], ['문제와 대응', '']] }] },
        notes: '교사 인솔 아래에서만 운영한다(교사 진행). 참여 학생의 개인정보를 받지 않는다. 운영 장소·시간은 학교 사정에 맞춰 교사가 정한다.',
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '캠페인 성찰 글',
        method: '캠페인 성찰 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀("잘된 점은 ~, 고칠 점은 ~")을 보고 쓴다.', base: '잘된 점·고칠 점·다음 계획 세 단락 분량을 쓰고 기준표로 점검한다.', challenge: '운영 기록의 숫자(참여 인원 등)를 근거로 넣어 쓴다.' },
        wrap: {
          teacher: '"운영 기록을 펴 보세요. 오늘 캠페인에서 잘된 점, 고칠 점, 다음 계획을 기록을 근거로 써요." 쓰기 전에 기준표를 함께 읽는다. "다 좋았다"로만 쓴 학생에게 "참여 인원 기록에서 무엇을 알 수 있었나요?"라고 묻는다. 고칠 점은 모둠원 탓이 아니라 기획과 운영 방법에서 찾게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 캠페인의 잘된 점·고칠 점·다음 계획을 운영 기록을 근거로 쓰세요.', minChars: 80, maxChars: 500, starter: '잘된 점은 ~. 고칠 점은 ~. 다음에는 ~', sample: '잘된 점은 출처 카드를 본 학생들이 외교부 누리집 주소를 사진으로 남겨 간 것이다. 고칠 점은 퀴즈 줄이 길어 통로가 좁아진 것이다. 다음에는 퀴즈 판을 두 개로 나누고, 끝난 뒤 설문으로 기억한 근거를 세겠다.' }, prompt: '캠페인 성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['잘된 점을 기록 근거와 함께 썼다', '고칠 점을 방법에서 찾았다', '다음 계획을 구체적으로 썼다'], mustInclude: [['다음']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '성찰 글의 고칠 점으로 가장 알맞은 것은?', options: ['퀴즈 줄이 길어 통로가 좁았으니 판을 둘로 나눈다', '모둠원 한 명이 늦게 와서 망쳤다', '고칠 점은 없다'], answer: 0, difficulty: 0.15, explain: '고칠 점은 사람 탓이 아니라 방법에서 찾고, 고칠 길과 함께 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '캠페인 성찰',
          items: [
            { type: 'short', prompt: '잘된 점·고칠 점·다음 계획을 기록 근거와 함께 쓰세요.' },
            { type: 'short', prompt: '캠페인을 하며 독도에 대해 새로 알게 된 것 하나를 쓰세요.' },
          ],
          easy: { note: '"잘된 점은 ~. 고칠 점은 ~. 다음에는 ~"', items: [{ type: 'short', prompt: '잘된 점과 고칠 점을 한 가지씩 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.share', type: 'wrap', title: '모둠 성찰 나눔',
        method: '모둠 성찰 나눔', tool: 'timer', minutes: 8,
        levels: { easy: '모둠에서 한 명이 대표로 1분 나눈다.', base: '모둠원 모두 1분씩 나눈다.', challenge: '나눈 뒤 다음 캠페인 계획 하나를 모둠이 합의한다.' },
        wrap: {
          teacher: '"모둠원이 1분씩 성찰을 나눠요. 끝나면 제가 반 전체의 공통 교훈을 정리할게요." 교사가 타이머로 네 사람의 나눔을 진행한다. 나눔이 남 탓으로 흐르면 "그 일을 막으려면 기획에서 무엇을 바꿀까요?"라고 되묻는다. 마지막에 반 전체에서 자주 나온 교훈(근거와 출처, 존중하는 문구, 안전)을 칠판에 정리한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모둠 성찰 나눔', labels: ['나눔', '쉬기'], timeUnit: 'min', plan: { work: 2, rest: 1, rounds: 1 } }, prompt: '모둠원 네 명이 쉬지 않고 1분씩 나누도록 타이머를 맞추세요.', target: { plan: { work: 1, rest: 0, rounds: 4 } }, difficulty: 0.2 },
            { type: 'choice', prompt: '반 전체의 공통 교훈으로 가장 알맞은 것은?', options: ['근거와 출처를 갖추고 존중하는 문구로 알린다', '목소리가 클수록 좋은 캠페인이다', '참여 학생의 이름을 모두 적어야 한다'], answer: 0, difficulty: 0.15, explain: '근거·출처·존중이 캠페인을 오래 남게 하고, 참여 학생의 개인정보는 받지 않아요.' },
            { type: 'short', prompt: '우리 모둠이 합의한 다음 캠페인 계획 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '모둠 성찰 나눔',
          items: [
            { type: 'table', prompt: '모둠원의 성찰을 한 줄씩 기록하세요.', columns: ['모둠원', '성찰 한 줄'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
            { type: 'short', prompt: '반 전체의 공통 교훈을 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다. 모둠원 이름 대신 번호로 기록한다.',
      }),
    );
  }

  // ======================================================================================================
  // 11. 바람직한 영토관과 혐오 없는 주권 말하기 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-view', [12]);
    const MEET = { text: '가상 장면: 국제 청소년 교류 행사. 함께 활동하던 외국 친구가 "독도는 우리 교과서에서 다르게 배웠어"라고 말한다.', who: '나', motif: 'house', choices: [
      { id: 'angry', text: '목소리를 높여 "그건 틀렸어"라고만 말한다', result: '친구가 입을 다물고 분위기가 굳는다.', impact: [{ who: '외국 친구', text: '마음을 닫는다', tone: -1 }],
        next: { text: '행사 마지막 날, 친구가 나를 피한다.', choices: [
          { id: 'sorry', text: '말투를 사과하고 다시 이야기해 보자고 한다', result: '친구가 조금 웃으며 고개를 끄덕인다.', impact: [{ who: '관계', text: '다시 이어질 틈이 생긴다', tone: 0 }], ending: '말투를 바로잡으면 늦게라도 대화가 다시 열린다.' },
          { id: 'cold', text: '그대로 연락을 끊는다', result: '교류에서 얻을 것도 함께 잃는다.', impact: [{ who: '관계', text: '끊어진다', tone: -1 }], ending: '감정적인 첫마디가 관계와 설득을 함께 잃게 한다.' }] } },
      { id: 'calm', text: '서로 배운 것을 묻고, 우리 쪽 근거를 차분히 설명한다', result: '친구가 "칙령 제41호는 처음 들어"라며 관심을 보인다.', impact: [{ who: '외국 친구', text: '근거를 들어 본다', tone: 1 }],
        next: { text: '친구: "그래도 나는 우리 정부 설명이 맞는 것 같아."', choices: [
          { id: 'respect', text: '생각은 존중하고, 공식 자료 주소를 건넨 뒤 다른 활동을 이어 간다', result: '친구가 자료 주소를 저장하고 함께 활동을 마친다.', impact: [{ who: '관계', text: '존중이 이어진다', tone: 1 }],
            next: { text: '행사가 끝나고 친구가 "다음에도 같이 하자"며 연락처 대신 학교 교류 모임을 알려 준다.', choices: [
              { id: 'keep', text: '학교 교류 모임으로 교류를 이어 간다', result: '독도 이야기 밖의 문화·환경 활동도 함께 하게 된다.', impact: [{ who: '관계', text: '교류가 자란다', tone: 1 }], ending: '주권은 근거로 분명히 말하고, 교류는 존중으로 키울 수 있다.' },
              { id: 'only', text: '독도 이야기가 아니면 만날 필요 없다고 한다', result: '교류가 한 가지 주제에 갇힌다.', impact: [{ who: '관계', text: '좁아진다', tone: 0 }], ending: '교류는 한 주제보다 넓을 때 오래 간다.' }] } },
          { id: 'push', text: '인정할 때까지 계속 몰아붙인다', result: '친구가 지쳐 자리를 뜬다.', impact: [{ who: '관계', text: '대화가 끊긴다', tone: -1 }], ending: '설득은 몰아붙임이 아니라 근거와 시간이 한다.' }] } },
      { id: 'avoid', text: '불편하니 못 들은 척한다', result: '서로 다른 배움을 나눌 기회가 지나간다.', impact: [{ who: '외국 친구', text: '근거를 들을 기회가 없다', tone: 0 }], ending: '피하는 것도 존중일 수 있지만, 근거를 나눌 기회는 놓친다.' }] };
    const MEET_R = [{ id: 'both', text: '주권은 근거로 분명히 말하고 교류는 존중으로 키운다' }, { id: 'person', text: '정부의 주장과 그 나라 사람은 같지 않다' }, { id: 'win', text: '인정을 받아 내야 이긴 것이다', why: '설득은 근거와 시간이 하고, 관계를 지키는 것도 중요해요.' }, { id: 'hate', text: '그 나라 사람들과는 교류하지 않는 것이 맞다', why: '주권을 지키는 것과 교류를 끊는 것은 같은 일이 아니에요.' }];

    MODS.push(
      M({
        id: 'intro.cond', type: 'intro', title: '영토관 조건 후보 고르기',
        method: '영토관 조건 후보 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '조건 후보 여섯 장 가운데 앞 세 장만 함께 읽고 고른다.', base: '다섯 장을 읽고 바람직한 조건을 고른다.', challenge: '여섯 장 모두 보고, 함정 카드가 왜 조건이 아닌지 까닭을 말한다.' },
        intro: {
          teacher: '"\'바람직한 영토관\'이란 무엇일까요? 독도를 사랑하는 마음이 크면 그것으로 충분할까요?" 교육부 내용체계는 고등학교에서 한일 관계를 발전적으로 만들 수 있는 바람직한 영토관과 역사관을 기르도록 한다고 알린다. 조건 후보를 읽고 고르게 한 뒤 시연 단추로 바구니에 담는 모습을 보여 준다. "상대를 미워해야 애국"이라는 말이 나오면 "미움이 근거가 될 수 있을까요?"라고 되묻는다.',
          student: '바람직한 영토관의 조건 후보 카드를 읽고, 조건이 될 수 있는 것만 바구니에 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '바람직한 영토관의 조건', cards: ['근거로 주권을 말한다', '상대 나라를 미워해야 한다', '사실과 의견을 구별한다', '감정이 클수록 애국이다', '상대 국민을 존중한다', '교류와 협력을 키운다'] }, sequence: [{ pick: ['근거로 주권을 말한다', '사실과 의견을 구별한다', '상대 국민을 존중한다', '교류와 협력을 키운다'] }] },
          art: { draw: 'a paper scale balancing a small island and a pair of shaking hands, documents stacked beneath the island side, calm pastel sea around', banner: '바람직한 영토관의 조건', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.line', type: 'intro', title: '혐오 문장과 근거 문장 견주기',
        method: '두 문장 비교: 혐오 vs 근거', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 문장 두 개와 반응을 함께 잇는다.', base: '문장 세 개와 듣는 사람의 반응을 잇는다.', challenge: '혐오 문장을 근거 문장으로 고쳐 말한다.' },
        intro: {
          teacher: '"같은 마음에서 나온 말이라도, 듣는 사람의 반응은 어떻게 다를까요?" 세 문장을 읽고 듣는 사람의 반응과 잇게 한 뒤 시연 단추로 이어지는 모습을 보여 준다. 혐오 문장은 따라 말하게 하지 않고 화면으로만 본다. "그 나라 사람들은 다 똑같아"를 \'솔직한 말\'이라고 하는 학생에게 "그 말에 근거가 있나요? 듣는 사람이 그다음 무엇을 할까요?"라고 묻는다.',
          student: '세 문장을 읽고, 듣는 사람이 보일 반응과 이어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', weather: false, slots: ['"그 나라 사람들은 다 똑같아"', '"1900년 칙령 제41호가 근거예요"', '"공식 자료를 같이 볼까요?"'], cards: ['대화를 이어 간다', '근거를 찾아본다', '마음을 닫는다'] }, sequence: [{ match: { '"그 나라 사람들은 다 똑같아"': '마음을 닫는다', '"1900년 칙령 제41호가 근거예요"': '근거를 찾아본다', '"공식 자료를 같이 볼까요?"': '대화를 이어 간다' } }] },
          art: { draw: 'two paper speech bubbles, one jagged and dark making a listener turn away, one smooth and light with a small document icon making a listener lean in', banner: '같은 마음, 다른 말', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '혐오 문장 예시는 일반화하는 말 하나만 쓰고 비하어는 쓰지 않는다. 학생에게 소리 내어 따라 말하게 하지 않는다.',
      }),

      M({
        id: 'activity.split', type: 'activity', title: '주권과 교류 구분',
        method: '주권과 교류 구분', tool: 'sortboard', minutes: 18,
        levels: { easy: '사례 카드 4장을 넣고, 틀리면 까닭과 함께 돌아온다.', base: '카드 6장을 나누고, 교류 자리에서 할 말과 피할 말을 가른다.', challenge: '카드 8장(더한 2장)을 나누고 활동지에 두 칸의 차이를 쓴다.' },
        activity: {
          title: '주권과 교류 나누기', tool: 'sortboard',
          teacher: '"독도의 영토 주권은 양보할 수 없어요. 그렇다면 그 나라와 함께 하는 모든 일을 멈춰야 할까요?" 사례 카드를 두 바구니에 나누게 한다. 문화·스포츠 교류를 \'주권 양보\'로 두는 학생에게 "교류를 한다고 독도의 주권이 바뀌나요?"라고 묻는다. 반대로 독도 경비를 \'교류로 조정할 일\'로 두는 학생에게는 정부 입장(외교 교섭의 대상이 아님)을 다시 짚는다.',
          task: '사례 카드를 양보할 수 없는 주권과 함께 키울 교류로 나누고, 교류 자리의 말을 가려요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('사례 카드를 양보할 수 없는 주권과 함께 키울 교류로 나누세요.', ['양보할 수 없는 주권', '함께 키울 교류'], [['독도에 대한 영토 주권', '독도경비대의 경비', '칙령 제41호 같은 역사적 근거'], ['두 나라 학생의 문화 교류', '바다 쓰레기 줄이기 공동 활동', '스포츠 친선 경기']], { k: 2, hard: { add: [['천연보호구역 관할'], ['서로의 언어를 배우는 교환 학습']] }, d: 0.3 }),
            BOARDQ('교류 자리에서 할 말과 피할 말을 나누세요.', ['할 말', '피할 말'], [['우리는 이렇게 배웠어요. 근거는 이 자료예요', '네가 배운 것도 들려줄래요?'], ['너희 나라 사람들은 다 그래', '이 얘기 안 하면 친구 안 해']], { k: 1, d: 0.3 }),
            BOARDQ('바람직한 영토관에 맞는 생각과 맞지 않는 생각으로 나누세요.', ['맞는 생각', '맞지 않는 생각'], [['주권은 근거로 분명히 말한다', '정부의 주장과 그 나라 사람을 나누어 본다'], ['주권을 지키려면 교류를 모두 끊어야 한다', '감정이 클수록 주권이 강해진다']], { k: 1, d: 0.3, more: { conclude: '주권은 근거로 분명히, 교류는 존중으로 — 둘은 함께 갈 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"양보할 수 없는 주권"과 "함께 키울 교류"가 어떻게 함께 갈 수 있는지 한두 문장으로 쓰세요.' }] },
        notes: '특정 시기의 외교 관계·현 정부의 대외 정책을 평가하지 않는다. 교류 사례는 일반 예시다.',
      }),
      M({
        id: 'activity.dil', type: 'activity', title: '교류 행사에서 독도 이야기가 나올 때',
        method: '교류 행사에서 독도 이야기가 나올 때', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(첫마디)에서 고르고 근거를 고른다.', base: '두 번째 갈림길(친구의 다른 생각)까지 간다.', challenge: '세 번째 갈림길(교류 이어 가기)까지 결과(관계·설득)를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '교류 행사 대화 갈림길', tool: 'dilemma',
          teacher: '"외국 친구가 다르게 배웠다고 말하면, 그 친구가 잘못한 걸까요?" 친구는 자기 나라에서 배운 것을 말했을 뿐이라는 점을 먼저 짚는다. 선택마다 관계와 설득이 어떻게 되는지 두 가지로 읽게 한다. 몰아붙이는 길을 고른 학생에게 "친구가 자리를 뜬 뒤 설득은 이루어졌나요?"라고 묻는다. 정부의 주장과 그 나라 사람을 나누어 보는 것이 바람직한 영토관의 출발이라고 정리한다.',
          task: '교류 행사 대화의 갈림길을 따라가며 관계와 설득의 결과를 추적하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('교류 행사 대화에서 주권과 교류를 함께 지키는 길을 고르고 근거를 고르세요.', MEET, [['calm', 'respect', 'keep']], MEET_R, ['both', 'person'], { d: 0.4 }),
            EXPLOREQ('다른 첫마디의 길도 끝까지 가 보고, 관계와 설득의 결과를 견주세요.', MEET, MEET_R, ['다른 길에서 관계가 어떻게 되었는지 확인했다', '다른 길에서 설득이 이루어졌는지 확인했다'], { d: 0.35 }),
            DILQ('교류 행사 단체 사진에 친구가 상대 나라를 놀리는 문구를 달자고 할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '친구: "단체 사진에 상대 나라를 놀리는 문구를 달면 웃기겠다."', who: '친구', motif: 'house', choices: [
              { id: 'no', text: '함께한 친구들을 존중하자며 다른 문구를 제안한다', result: '모두가 웃을 수 있는 문구로 사진을 남긴다.', impact: [{ who: '교류 친구들', text: '존중받는다', tone: 1 }], ending: '존중하는 문구가 교류를 다음으로 잇는다.' },
              { id: 'yes', text: '재미있으니 그대로 단다', result: '사진을 본 교류 친구들이 상처받는다.', impact: [{ who: '교류 친구들', text: '상처받는다', tone: -1 }], ending: '놀리는 말은 장난이어도 혐오로 읽힌다.' }] },
              [['no']], [{ id: 'respect2', text: '함께한 사람을 존중하는 것은 주권과 어긋나지 않는다' }, { id: 'joke', text: '장난이면 괜찮다', why: '놀리는 말은 장난이어도 상대에게 혐오로 읽혀요.' }], ['respect2'], { d: 0.3, more: { conclude: '바람직한 영토관은 주권을 근거로 분명히 하고, 사람을 존중하며 교류를 키우는 데서 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '외국 친구가 "다르게 배웠다"고 말할 때 내가 할 첫마디를 한 문장으로 쓰세요.' }] },
        notes: '교류 장면과 인물은 가상이다. 학생의 실제 교류 경험이나 가족의 생각을 묻지 않는다.',
      }),
      M({
        id: 'activity.rp', type: 'activity', title: '상황 역할극 대본',
        method: '상황 역할극 대본', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '첫 칸은 문장 틀을 보고 대사 2줄을 쓴다.', base: '첫 만남·근거 대화·마무리 대사를 6줄 안팎으로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에 해설(무대 지문)을 넣는다.' },
        activity: {
          title: '근거로 말하는 대본', tool: 'rubric-writing',
          teacher: '"대본 속 나는 근거로 말하고, 상대는 자기 생각을 말해요. 누가 이기는 대본이 아니라 대화가 이어지는 대본을 써요." 상대 역할을 \'나쁜 사람\'으로 쓰는 학생에게 "그 친구는 자기 나라에서 배운 것을 말했을 뿐이라면요?"라고 묻는다. 근거 대사에는 칙령 제41호(1900)나 각서 제677호(1946)처럼 공식 자료에 있는 것을 쓰게 한다. 인물은 가상 이름(한두 글자)으로 쓴다.',
          task: '혐오 없이 근거로 말하는 역할극 대본을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('첫 만남 장면의 대사 2줄을 쓰세요.', '교류 행사에서 외국 친구가 "다르게 배웠다"고 말하는 첫 장면의 대사 2줄을 쓰세요.', ['상대의 말을 정중히 받았다', '서로 배운 것을 묻는 대사가 있다', '인물 이름을 가상으로 썼다'], { min: 20, max: 200, sent: [2, 3], must: [['배웠', '배운']], starter: '친구: "~" / 나: "그렇구나, 너는 ~ 배웠구나. ~"', plus: '첫 대사에 존중하는 말이 들어 있다', d: 0.35 }),
            RWQ('근거로 말하는 대사 2~3줄을 쓰세요.', '나의 대사로 근거 하나를 공식 자료와 함께 말하세요.', ['근거를 하나 들었다', '출처를 밝혔다', '혐오·비하 표현이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['칙령', '각서', '지리지']], starter: '나: "우리는 ~를 근거로 배워. 자료는 ~에 있어."', plus: '상대가 다시 물을 수 있게 열어 두었다', d: 0.4 }),
            RWQ('마무리 대사 1~2줄을 쓰세요.', '서로 생각이 달라도 관계를 이어 가는 마무리 대사를 쓰세요.', ['상대의 생각을 존중했다', '교류를 이어 갈 말이 있다', '내 근거를 바꾸지 않았다'], { min: 20, max: 200, sent: [1, 2], must: [['같이', '함께', '다음']], starter: '나: "생각은 달라도 ~"', plus: '해설(무대 지문)로 두 사람의 표정·동작을 덧붙였다', d: 0.4, more: { conclude: '좋은 대본은 근거를 분명히 말하면서도 사람을 존중해 대화가 이어지게 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 혐오 없이 근거로 말한 대사 한 줄을 옮겨 쓰세요.' }] },
      }),
      M({
        id: 'activity.play', type: 'activity', title: '역할극 발표',
        method: '역할극 발표', tool: 'timer', minutes: 18,
        levels: { easy: '대본을 보며 역할극을 한다.', base: '대본을 외워 역할극을 하고, 듣는 모둠이 어조 점검 칸에 표시한다.', challenge: '역할극 끝에 교사의 즉석 질문 하나에 근거로 답한다.' },
        activity: {
          title: '모둠 역할극', tool: 'timer',
          teacher: '"네 모둠이 3분씩 역할극을 하고, 사이 1분 동안 듣는 모둠이 어조 점검 칸에 표시해요." 교사가 타이머로 진행한다. 역할극이 웃음거리로 흐르면 멈추고 "이 장면을 외국 친구가 본다면 어떤 기분일까요?"라고 묻는다. 점검은 배우가 아니라 대사를 두고 하게 한다. 도전 모둠에게는 끝에 즉석 질문("그 자료는 어디서 확인해요?")을 던진다.',
          task: '역할극 시간을 맞추고, 진행 순서를 정하고, 듣는 모둠으로서 어조를 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '네 모둠이 3분씩 역할극을 하고 사이 1분 점검하도록 타이머를 맞추세요.', toolOptions: { title: '역할극 시간', labels: ['역할극', '점검'], timeUnit: 'min', plan: { work: 1, rest: 1, rounds: 1 } }, target: { plan: { work: 3, rest: 1, rounds: 4 } }, difficulty: 0.2 },
            { prompt: '역할극 한 모둠의 진행 순서 카드를 차례대로 놓으세요.', toolOptions: { title: '진행 순서', cards: ['어조 점검 칸에 표시한다', '대본을 소리 내어 맞춰 본다', '역할극을 한다', '역할과 장면을 소개한다'] }, target: { order: ['대본을 소리 내어 맞춰 본다', '역할과 장면을 소개한다', '역할극을 한다', '어조 점검 칸에 표시한다'] }, difficulty: 0.25 },
            { prompt: '들은 역할극의 어조를 점검 칸에 표시하세요.', toolOptions: { title: '어조 점검' }, target: { selfCheck: ['상대를 깎아내리는 말이 없었다', '근거와 출처가 나왔다', '상대의 생각을 존중하는 대사가 있었다', '대화가 이어지며 끝났다'] }, difficulty: 0.1, conclude: '역할극은 근거와 존중이 함께 있는 대화를 몸으로 연습하는 시간이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '들은 역할극을 점검하세요(○·△).', columns: ['모둠', '근거·출처', '존중', '대화 이어짐'], cells: [['1', '', '', ''], ['2', '', '', ''], ['3', '', '', '']] }] },
        notes: '교사 진행 활동이다. 상대 역할을 우스꽝스럽게 꾸미지 않게 한다.',
      }),

      M({
        id: 'wrap.essay', type: 'wrap', title: '나의 영토관 성찰 글',
        method: '나의 영토관 성찰 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀("나에게 바람직한 영토관은 ~")을 보고 쓴다.', base: '한 단락으로 쓰고 기준표(근거·존중·일관성)로 점검한다.', challenge: '두 단락으로, 오늘 생각이 바뀐 점까지 쓴다.' },
        wrap: {
          teacher: '"나에게 바람직한 영토관은 무엇인가요? 오늘 나눈 주권과 교류, 존중을 바탕으로 써요." 쓰기 전에 기준표(근거·존중·일관성)를 함께 읽는다. 주권만 강조하고 존중이 빠진 글, 또는 존중만 있고 근거가 빠진 글을 쓴 학생에게 "두 가지가 함께 있으려면 어떤 문장이 더 필요할까요?"라고 묻는다. 성찰 글은 채점하지 않고 교사만 읽는다고 알린다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '나에게 바람직한 영토관은 무엇인지 근거와 존중을 담아 쓰세요.', minChars: 80, maxChars: 500, starter: '나에게 바람직한 영토관은 ~이다. 왜냐하면 ~', sample: '나에게 바람직한 영토관은 독도의 주권을 근거로 분명히 말하면서 상대 나라 사람을 존중하는 것이다. 칙령 제41호 같은 근거를 알면 화를 내지 않고도 설명할 수 있다. 정부의 주장과 그 나라 사람은 같지 않으니 교류는 계속 키우고 싶다.' }, prompt: '나의 영토관 성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['근거를 하나 이상 넣었다', '상대를 존중하는 문장이 있다', '주장이 처음부터 끝까지 일관된다'], mustInclude: [['근거', '칙령', '자료']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '바람직한 영토관과 가장 거리가 먼 생각은?', options: ['주권을 근거로 분명히 말한다', '상대 국민 전체를 미워해야 한다', '교류는 존중으로 키운다'], answer: 1, difficulty: 0.15, explain: '미움은 근거가 아니고, 정부의 주장과 그 나라 사람은 같지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 영토관',
          items: [
            { type: 'short', prompt: '나에게 바람직한 영토관을 근거와 존중을 담아 한 단락으로 쓰세요.' },
            { type: 'short', prompt: '오늘 수업에서 생각이 바뀐(또는 단단해진) 점 하나를 쓰세요.' },
          ],
          easy: { note: '"나에게 바람직한 영토관은 ~이다. 왜냐하면 ~"', items: [{ type: 'short', prompt: '나에게 바람직한 영토관을 두 문장으로 쓰세요.' }] },
        },
        notes: '성찰 글은 채점하지 않는다. 가족의 생각이나 정치적 견해를 묻지 않는다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '영토관 생각그물',
        method: '영토관 생각그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 주권·교류 두 가지에 카드를 먼저 단다.', base: '주권·교류·존중 세 가지에 카드를 단다.', challenge: '가지마다 오늘 본 사례 하나를 출구 질문에 붙인다.' },
        wrap: {
          teacher: '"오늘 배운 영토관을 주권·교류·존중 세 가지로 정리해요." 카드를 단 뒤 출구 질문으로 넘어간다. \'정부의 주장과 사람을 나누어 보기\'를 교류 가지에 다는 학생에게 "그것은 무엇을 지키는 태도일까요?"라고 물어 존중 가지와 잇게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '바람직한 영토관', slots: ['주권', '교류', '존중'], cards: ['근거로 주권을 분명히 말한다', '독도는 외교 교섭의 대상이 아니다', '문화·환경 교류를 이어 간다', '서로 배운 것을 묻는다', '정부의 주장과 사람을 나눈다', '비하하는 말을 쓰지 않는다'] }, prompt: '영토관 카드를 주권·교류·존중 가지에 다세요.', target: { sort: { 주권: ['근거로 주권을 분명히 말한다', '독도는 외교 교섭의 대상이 아니다'], 교류: ['문화·환경 교류를 이어 간다', '서로 배운 것을 묻는다'], 존중: ['정부의 주장과 사람을 나눈다', '비하하는 말을 쓰지 않는다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"주권을 지키려면 교류를 모두 끊어야 한다"에 대한 알맞은 답은?', options: ['주권은 근거로 지키고, 교류는 존중으로 이어 갈 수 있다', '맞다, 교류는 위험하다', '주권은 중요하지 않다'], answer: 0, difficulty: 0.15, explain: '양보할 수 없는 주권과 함께 키울 교류는 서로 다른 칸에 있어요.' },
            { type: 'short', prompt: '세 가지 가운데 내가 가장 지키기 어려운 것과 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '바람직한 영토관',
          items: [
            { type: 'table', prompt: '세 가지마다 오늘 본 사례를 쓰세요.', columns: ['가지', '사례'], cells: [['주권', ''], ['교류', ''], ['존중', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '정부의 ___과 그 나라 사람은 같지 않다.', answer: '주장' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 12. 사료의 힘과 한계, 겹겹의 반박 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-limit', [12]);
    const CLAIMS = ['1905년 전 독도는 주인 없는 섬이었다', '강화조약에 독도가 적히지 않았다', '각서 제677호는 최종 결정이 아니었다', '석도가 독도라는 증거가 약하다', '국제 재판으로 해결하자'];
    const LAYER = { text: '일본 정부의 주장 1: "1905년 전 독도는 주인 없는 섬이었다." 1층 반박을 고르자.', who: '반박단', motif: 'cloud', choices: [
      { id: 'edict', text: '1900년 칙령 제41호가 이미 석도를 울도군 관할로 했다', result: '상대가 "석도가 독도라는 증거는요?"라고 되묻는다.', impact: [{ who: '반박단', text: '1층 근거를 세운다', tone: 1 }],
        next: { text: '2층: "석도가 독도라는 증거는요?" 무엇으로 답할까?', choices: [
          { id: 'report', text: '1906년 울도 군수의 "본군 소속 독도" 보고와 독섬이라는 방언을 든다', result: '상대가 "그래도 일본은 몰랐다"고 되묻는다.', impact: [{ who: '반박단', text: '1층의 한계를 2층으로 보완한다', tone: 1 }],
            next: { text: '3층: "그래도 일본은 그 섬을 몰랐다." 무엇으로 답할까?', choices: [
              { id: 'dajokan', text: '1877년 태정관 지령이 울릉도 외 한 섬을 일본과 무관하다고 했다', result: '상대 정부의 기록으로 \'몰랐다\'는 주장을 다시 따진다.', impact: [{ who: '반박단', text: '세 층의 근거가 서로 받친다', tone: 1 }], ending: '한 근거의 한계를 다음 근거가 보완하면 반박이 겹겹이 단단해진다.' },
              { id: 'insist', text: '"그냥 우리 땅이다"라고 되풀이한다', result: '상대가 "근거가 바닥났네요"라고 한다.', impact: [{ who: '반박단', text: '앞의 두 층까지 약해 보인다', tone: -1 }], ending: '마지막 층에서 근거를 놓으면 앞의 반박도 흔들린다.' }] } },
          { id: 'skip', text: '그건 중요하지 않다고 넘긴다', result: '상대가 1층 반박의 한계를 계속 파고든다.', impact: [{ who: '반박단', text: '1층이 흔들린다', tone: -1 }], ending: '한계를 넘기지 말고 다른 사료로 보완해야 한다.' }] } },
      { id: 'angry', text: '"억지 주장"이라고 맞선다', result: '듣는 사람이 근거를 기다리다 실망한다.', impact: [{ who: '반박단', text: '근거 없이 감정만 남는다', tone: -1 }], ending: '감정적인 낱말은 반박이 아니다.' }] };
    const LAYER_R = [{ id: 'layer', text: '한 근거의 한계를 다음 근거로 보완한다' }, { id: 'state', text: '상대 정부가 남긴 기록도 반박의 근거가 된다' }, { id: 'loud', text: '같은 말을 세게 되풀이하면 이긴다', why: '되풀이는 근거가 아니에요.' }, { id: 'hide', text: '한계는 말하지 않는 편이 낫다', why: '숨긴 한계는 상대가 먼저 파고들어요.' }];
    const TBL = { type: 'bar', unit: '개', xLabel: '사료', yLabel: '보완 사료 수', max: 3 };

    MODS.push(
      M({
        id: 'intro.honest', type: 'intro', title: '한계를 감추면 어떻게 될까',
        method: '한계를 감추면 어떻게 될까', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 주장과 청중 반응을 함께 잇는다.', base: '세 주장과 청중 반응을 잇는다.', challenge: '이은 반응마다 까닭을 한 마디로 말한다.' },
        intro: {
          teacher: '"사료의 한계를 숨긴 발표와 밝힌 발표, 청중은 어느 쪽을 더 믿을까요?" 세 주장을 읽고 청중 반응과 잇게 한 뒤 시연 단추로 이어지는 모습을 보여 준다. "한계를 말하면 지는 것 아닌가요?"라는 질문에는 "숨긴 한계를 상대가 먼저 꺼내면 어떻게 될까요?"라고 되묻는다. 오늘은 사료마다 힘과 한계를 함께 말하고, 한계를 다른 근거로 겹겹이 보완하는 반박을 짠다고 밝힌다.',
          student: '세 발표를 읽고, 청중이 보일 반응과 이어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', weather: false, slots: ['사료의 한계를 숨긴 발표', '한계를 밝히고 다른 사료로 보완한 발표', '근거 없이 감정만 담은 발표'], cards: ['믿고 귀 기울인다', '나중에 들통나 믿음을 잃는다', '근거를 기다리다 실망한다'] }, sequence: [{ match: { '사료의 한계를 숨긴 발표': '나중에 들통나 믿음을 잃는다', '한계를 밝히고 다른 사료로 보완한 발표': '믿고 귀 기울인다', '근거 없이 감정만 담은 발표': '근거를 기다리다 실망한다' } }] },
          art: { draw: 'a paper podium with a speaker holding open documents, an audience of paper figures, one document with a small honest label showing a crack being patched by another sheet', banner: '한계를 밝히면 믿음이 생길까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.list', type: 'intro', title: '주장 목록 처음 읽기',
        method: '주장 목록 처음 읽기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 주장 카드 두 장만 읽고 하나를 고르게 한다.', base: '네 장 가운데 반박이 가장 어려워 보이는 것을 고른다.', challenge: '다섯 장 모두 보고, 고른 까닭을 한 문장으로 말한다.' },
        intro: {
          teacher: '"일본 정부가 내세우는 주장을 목록으로 먼저 읽어 봐요. 주장을 아는 것은 그 주장을 믿는 것이 아니라, 근거로 따지기 위한 준비예요." 카드를 읽고 반박이 가장 어려워 보이는 것을 고르게 한 뒤 시연 단추로 하나가 바구니에 담기는 모습을 보여 준다. 주장을 읽다가 상대 국민을 탓하는 말이 나오면 "이것은 그 나라 사람 모두의 생각일까요, 정부의 주장일까요?"라고 되물어 주장과 사람을 나눈다.',
          student: '일본 정부의 주장 카드를 읽고, 반박이 가장 어려워 보이는 것을 하나 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '반박이 어려워 보이는 주장', cards: CLAIMS }, sequence: [{ pick: ['석도가 독도라는 증거가 약하다'] }] },
          art: { draw: 'a paper notice board with five paper claim cards pinned in a row, each with a small empty answer tag hanging below', banner: '주장마다 무엇으로 답할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '주장 카드는 단원 재료에 나온 일본 정부 주장만 쓴다. 고르기는 채점하지 않는다.',
      }),

      M({
        id: 'activity.table', type: 'activity', title: '사료 힘·한계 표',
        method: '사료 힘·한계 표', tool: 'chart', minutes: 18,
        levels: { easy: '사료 3개의 보완 사료 수로 막대를 만들고, 막대 끝에 값이 보인다.', base: '사료 5개의 막대를 만들고, 한계와 보완 사료를 고른다.', challenge: '값 표시 없이 풀고, 활동지에 보완 관계를 해석한다.' },
        activity: {
          title: '사료마다 힘·한계·보완', tool: 'chart',
          teacher: '"칠판 표를 함께 채워요. 사료마다 힘, 한계, 그 한계를 보완하는 다른 사료." 표(「지리지」: 관찬 기록 / 두 섬이 보인다는 인식까지 / 안용복 진술·태정관 지령, 「팔도총도」: 조선 지도 / 위치가 다름 / 「지리지」, 안용복 진술: 당시 교섭 / 개인 진술 / 막부 도해 금지·『숙종실록』, 칙령 제41호: 근대 법령 / 석도라는 이름 / 1906 보고·독섬 방언, 각서 제677호: 연합국 문서 / 최종 결정인가 / 각서 제1033호)를 채운 뒤 보완 사료 수를 막대로 그린다. 보완 사료가 하나뿐인 사료를 \'약한 사료\'로 단정하는 학생에게 "보완이 하나라도 서로 단단히 받치면 어떨까요?"라고 묻는다.',
          task: '사료마다 보완 사료 수를 막대로 나타내고, 한계와 보완 관계를 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '칠판 표의 사료마다 보완 사료 수로 막대그래프를 완성하세요.', toolOptions: Object.assign({}, TBL, { mode: 'build', title: '사료별 보완 사료 수(우리 반 표)', data: [['「지리지」', 2], ['「팔도총도」', 1], ['안용복 진술', 2], ['칙령 제41호', 2], ['각서 제677호', 1]] }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '사료 3개의 보완 사료 수로 막대그래프를 완성하세요.', toolOptions: { data: [['「지리지」', 2], ['「팔도총도」', 1], ['칙령 제41호', 2]] } } } },
            { prompt: '\'한 개인의 진술\'이라는 한계가 있는 사료를 고르세요.', toolOptions: Object.assign({}, TBL, { mode: 'read', title: '사료별 보완 사료 수(우리 반 표)', data: [['「지리지」', 2], ['「팔도총도」', 1], ['안용복 진술', 2], ['칙령 제41호', 2], ['각서 제677호', 1]], question: '개인 진술인 사료는?', choices: ['「지리지」', '「팔도총도」', '안용복 진술', '칙령 제41호', '각서 제677호'], why: ['조선 정부의 관찬 기록이에요.', '조선의 지도예요.', '', '대한제국 정부의 법령이에요.', '연합국의 문서예요.'] }), target: { pick: 2 }, difficulty: 0.25 },
            { prompt: '칙령 제41호의 한계(적힌 이름이 석도)를 보완하는 사료를 고르세요.', toolOptions: Object.assign({}, TBL, { mode: 'read', title: '사료별 보완 사료 수(우리 반 표)', data: [['「지리지」', 2], ['「팔도총도」', 1], ['안용복 진술', 2], ['칙령 제41호', 2], ['각서 제677호', 1]], question: '석도의 한계를 보완하는 것은?', choices: ['1906년 울도 군수 보고', '1905년 시마네현 고시', '조회 수가 많은 영상'], why: ['', '편입을 주장한 일본 쪽 문서예요.', '출처를 확인할 수 없어요.'] }), target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '「팔도총도」의 한계(우산도 위치가 다름)를 보완하는 사료를 고르세요.', toolOptions: Object.assign({}, TBL, { mode: 'read', title: '사료별 보완 사료 수(우리 반 표)', data: [['「지리지」', 2], ['「팔도총도」', 1], ['안용복 진술', 2], ['칙령 제41호', 2], ['각서 제677호', 1]], question: '팔도총도를 보완하는 것은?', choices: ['두 섬이 보인다고 적은 「지리지」', '같은 지도를 크게 확대한 사진', '지도는 무시하자는 말'], why: ['', '같은 지도는 한계를 보완하지 못해요.', '한계가 있어도 다른 사료와 함께 쓸 수 있어요.'] }), target: { pick: 0 }, difficulty: 0.35, conclude: '사료마다 한계가 있어도 서로 다른 사료가 한계를 보완하면 결론이 단단해져요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사료 셋의 힘·한계·보완 사료를 쓰세요.', columns: ['사료', '힘', '한계', '보완 사료'], cells: [['「지리지」', '', '', ''], ['칙령 제41호', '', '', ''], ['각서 제677호', '', '', '']] }] },
        notes: '보완 사료 수는 칠판 표를 센 값이다(공식 통계 아님). 사료 서술은 단원 재료를 따른다(사람 확인 목록).',
      }),
      M({
        id: 'activity.layer', type: 'activity', title: '겹겹 반박 갈림길',
        method: '겹겹 반박 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '1층 반박 갈림길에서 고르고 근거를 고른다.', base: '2층(되묻는 질문)까지 반박을 세운다.', challenge: '3층까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '"주인 없는 섬" 주장에 세 층으로', tool: 'dilemma',
          teacher: '"반박은 한 번으로 끝나지 않아요. 상대가 되물으면 그 근거의 한계를 다음 근거가 보완해야 해요." 층마다 상대가 무엇을 되묻는지 먼저 읽게 한다. "억지 주장"이라고 맞서는 길을 고른 학생에게 "그 말에 근거가 있었나요?"라고 묻는다. 3층에서 태정관 지령을 고를 때는 상대 정부가 스스로 남긴 기록이라 힘이 크다는 점을 짚는다. 반박은 상대 국민이 아니라 정부의 주장을 향한다는 점을 다시 말한다.',
          task: '주장에 1층·2층·3층 반박을 세우는 갈림길을 지나며 결과를 추적하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('"1905년 전 주인 없는 섬" 주장에 겹겹이 반박하는 길을 고르고 근거를 고르세요.', LAYER, [['edict', 'report', 'dajokan']], LAYER_R, ['layer', 'state'], { d: 0.4 }),
            EXPLOREQ('다른 반박의 길도 끝까지 가 보고, 몇 층에서 흔들렸는지 견주세요.', LAYER, LAYER_R, ['다른 길이 몇 층에서 흔들렸는지 찾았다', '층마다 보완한 근거를 말할 수 있다'], { d: 0.35 }),
            DILQ('"강화조약에 독도가 없다" 주장에 두 층으로 반박하는 길을 고르고 근거를 고르세요.', { text: '주장 2: "강화조약에 독도가 적히지 않았다."', who: '반박단', motif: 'cloud', choices: [
              { id: 'example', text: '적힌 섬은 3천여 개 섬 가운데 대표적인 예시라고 답한다', result: '상대가 "예시라는 근거는요?"라고 되묻는다.', impact: [{ who: '반박단', text: '1층을 세운다', tone: 1 }],
                next: { text: '"예시라는 근거는요?"', choices: [
                  { id: 'scapin', text: '앞선 각서 제677호가 독도를 일본 범위에서 뺐다는 점과 잇는다', result: '조약을 앞 문서와 함께 읽는 해석이 선다.', impact: [{ who: '반박단', text: '2층이 1층을 받친다', tone: 1 }], ending: '조약은 앞선 문서와 이어 읽을 때 뜻이 분명해진다.' },
                  { id: 'repeat', text: '"예시니까 예시"라고 되풀이한다', result: '상대가 고개를 젓는다.', impact: [{ who: '반박단', text: '1층이 흔들린다', tone: -1 }], ending: '되풀이는 2층이 되지 못한다.' }] } },
              { id: 'ignore', text: '조약은 중요하지 않다고 한다', result: '듣는 사람이 반박을 피했다고 느낀다.', impact: [{ who: '반박단', text: '믿음을 잃는다', tone: -1 }], ending: '중요한 문서를 피하면 반박이 아니라 회피가 된다.' }] },
              [['example', 'scapin']], [{ id: 'chain2', text: '조약은 앞선 각서·선언과 이어 읽는다' }, { id: 'dodge', text: '불리한 문서는 피하는 게 낫다', why: '피하면 반박이 아니라 회피로 보여요.' }], ['chain2'], { d: 0.35, more: { conclude: '겹겹 반박은 한 근거의 한계를 다음 근거로 보완하고, 끝까지 근거로 말하는 데서 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 층의 반박을 정리하세요.', columns: ['층', '상대의 물음', '내 근거'], cells: [['1층', '', ''], ['2층', '', ''], ['3층', '', '']] }] },
      }),
      M({
        id: 'activity.tree', type: 'activity', title: '반박 근거 나무',
        method: '반박 근거 나무', tool: 'mindmap', minutes: 18,
        levels: { easy: '주장마다 가지에 카드 1장씩 달고, 틀리면 바로 알 수 있다.', base: '주장 세 개마다 역사·국제법·실효 가지에 근거 카드를 단다.', challenge: '카드가 섞여 나오고, 근거가 아닌 함정 카드를 남긴다.' },
        activity: {
          title: '주장마다 세 가지 근거', tool: 'mindmap',
          teacher: '"주장 하나에 근거는 한 갈래만 있을까요? 역사·국제법·실효(오늘의 주권 행사) 세 갈래로 나무를 세워요." 실효 가지를 비우는 학생에게 "오늘 독도에서 누가 무엇을 하고 있었나요?"라고 묻는다. 감정 섞인 카드(억지·뻔뻔)를 근거 가지에 다는 학생에게는 그것은 근거가 아니라 낱말일 뿐이라고 짚는다. 주장 셋 모두 일본 정부의 주장이라는 점을 밝히고 상대 국민을 탓하는 말로 흐르지 않게 한다.',
          task: '일본 정부의 주장마다 역사·국제법·실효 가지에 반박 근거 카드를 달아요.', levels: LV,
          items: [
            SORTQ('주장 1 "1905년 전 주인 없는 섬"의 반박 근거를 가지에 다세요.', ['역사', '국제법', '실효'], [['1900 칙령 제41호로 관할', '1877 태정관 지령'], ['카이로 선언의 침탈 지역 원칙'], ['1906 울도 군수의 "본군 소속" 보고']], { k: 1, traps: ['억지 주장이라는 말'], d: 0.3, opt: { topic: '주장 1: 주인 없는 섬' } }),
            SORTQ('주장 2 "강화조약에 독도가 없다"의 반박 근거를 가지에 다세요.', ['역사', '국제법', '실효'], [['『세종실록』 「지리지」의 두 섬 인식'], ['각서 제677호(1946)', '3천여 섬 가운데 예시라는 설명'], ['독도경비대 상주']], { k: 1, traps: ['조약은 중요하지 않다는 말'], d: 0.35, opt: { topic: '주장 2: 조약에 없다' } }),
            SORTQ('주장 3 "국제 재판으로 해결하자"에 답하는 근거를 가지에 다세요.', ['역사', '국제법', '실효'], [['1900년부터 이어진 관할 기록'], ['영유권 분쟁이 존재하지 않는다는 입장'], ['울릉군 울릉읍 독도리 행정']], { k: 1, traps: ['재판이 무서워서라는 말'], d: 0.35, opt: { topic: '주장 3: 국제 재판' }, more: { conclude: '주장마다 역사·국제법·실효 세 갈래 근거를 세우면 한 갈래가 흔들려도 나무가 버텨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 주장 가운데 하나를 골라, 역사·국제법·실효 근거를 한 문장씩 쓰세요.' }] },
        notes: '주장 3의 국제법 갈래는 정부 기본 입장(분쟁 없음·사법적 해결 대상 아님)을 근거로 쓴다(사람 확인 목록).',
      }),
      M({
        id: 'activity.essay', type: 'activity', title: '한계까지 말하는 반박문',
        method: '한계까지 말하는 반박문', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '주장·한계 인정, 보완 근거를 두 단락으로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에서 예상 재반박까지 답한다.' },
        activity: {
          title: '한계를 인정하고 보완하는 반박', tool: 'rubric-writing',
          teacher: '"오늘의 반박문은 우리 사료의 한계를 먼저 인정해요. 그래야 다음 근거가 보완하는 모습이 보여요." 주장은 일본 정부의 주장으로 정확히 옮기게 한다. 한계 칸을 \'없다\'로 비우는 학생에게 "칙령에 적힌 섬 이름은 무엇이었나요?"라고 물어 한계를 찾게 한다. 재반박 칸에서는 상대가 무엇을 다시 물을지 먼저 적고 답하게 한다.',
          task: '사료의 한계를 인정하면서 다른 근거로 보완하는 반박문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('반박할 주장을 정확히 옮기고, 우리 사료의 한계를 2문장으로 인정하세요.', '주장 "1905년 전 독도는 주인 없는 섬이었다"를 옮기고, 칙령 제41호의 한계를 인정하세요.', ['주장을 정확히 옮겼다', '우리 사료의 한계를 숨기지 않았다', '상대 국민을 탓하는 말이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['석도', '한계']], starter: '일본 정부는 ~라고 주장한다. 칙령 제41호에는 ~라는 한계가 있다.', plus: '주장을 낸 주체(정부)를 밝혔다', d: 0.4 }),
            RWQ('한계를 보완하는 근거 둘을 2~3문장으로 쓰세요.', '칙령의 한계를 보완하는 다른 근거 두 가지를 쓰세요.', ['보완 근거를 둘 들었다', '근거의 연도와 이름이 정확하다', '근거가 한계와 이어진다'], { min: 60, max: 400, sent: [2, 4], must: [['1906', '군수', '독섬', '태정관']], starter: '그러나 이 한계는 ~와 ~로 보완된다.', plus: '근거마다 출처를 밝혔다', d: 0.45 }),
            RWQ('예상 재반박을 쓰고 2문장으로 답하세요.', '상대가 다시 물을 것(재반박)을 하나 쓰고, 근거로 답하세요.', ['재반박을 정확히 예상했다', '근거로 답했다', '정중한 말투를 지켰다'], { min: 40, max: 300, sent: [2, 3], must: [['다시', '재반박', '그렇다면']], starter: '상대는 다시 ~라고 물을 수 있다. 그렇다면 ~', plus: '답에 상대 정부의 기록을 근거로 썼다', d: 0.45, more: { conclude: '한계를 인정하고 다른 근거로 보완한 반박문이 재반박에도 흔들리지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 반박문에서 한계를 인정한 문장을 옮겨 쓰고, 그 문장이 왜 설득력을 높이는지 쓰세요.' }] },
      }),

      M({
        id: 'wrap.mock', type: 'wrap', title: '모의 질의응답',
        method: '모의 질의응답', tool: 'timer', minutes: 8,
        levels: { easy: '교사의 질문 하나에 모둠이 답한다.', base: '질문 둘에 답하고 기록판에 근거 수를 적는다.', challenge: '질문 셋에 답하고, 마지막 질문은 재반박으로 묻는다.' },
        wrap: {
          teacher: '"제가 질문자 역할을 맡아 30초 동안 묻고, 모둠은 1분 30초 동안 겹겹 반박으로 답해요. 두 번 해요." 교사가 타이머로 진행하고, 듣는 모둠은 답에 나온 근거 수를 기록판에 적는다. 질문자 역할은 상대국 국민이 아니라 \'주장을 검토하는 사람\'이라고 밝힌다. 답이 감정으로 흐르면 근거 수를 함께 세어 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모의 질의응답', labels: ['질문', '답변'], plan: { work: 20, rest: 30, rounds: 1 }, fields: [{ label: '1번 답의 근거 수', unit: '개', step: 1 }, { label: '2번 답의 근거 수', unit: '개', step: 1 }] }, prompt: '30초 질문·1분 30초 답변을 두 번 하도록 타이머를 맞추고, 답마다 나온 근거 수를 적으세요.', target: { plan: { work: 30, rest: 90, rounds: 2 }, records: true }, difficulty: 0.25 },
            { type: 'choice', prompt: '"석도가 독도라는 증거는요?"라는 질문에 가장 알맞은 답은?', options: ['1906년 울도 군수의 "본군 소속 독도" 보고가 뒷받침한다', '그런 질문은 하지 마세요', '모두가 아는 사실이다'], answer: 0, difficulty: 0.15, explain: '되묻는 질문에는 한계를 보완하는 다른 사료로 답해요.' },
            { type: 'short', prompt: '오늘 질의응답에서 가장 단단했던 반박 하나를 층 차례대로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '모의 질의응답 기록판',
          items: [
            { type: 'table', prompt: '질문마다 답에 나온 근거를 적으세요.', columns: ['질문', '1층 근거', '2층 근거', '근거 수'], cells: [['1', '', '', ''], ['2', '', '', '']] },
            { type: 'short', prompt: '우리 모둠이 다음에 더 준비할 근거를 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '반박 층위 점검',
        method: '반박 층위 점검', tool: 'sortboard', minutes: 8,
        levels: { easy: '교사가 반박 문장 두 장을 함께 판정해 보인다.', base: '반박 문장 6장을 1층·2층·근거 부족 바구니에 넣는다.', challenge: '근거 부족 문장 하나를 근거 있는 반박으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 나온 반박 문장이 몇 층의 반박인지, 근거가 모자란지 점검해요." 1층은 주장에 바로 답하는 근거, 2층은 그 근거의 한계를 보완하는 근거라고 다시 말한다. "그 주장은 들을 가치가 없다"를 반박으로 두는 학생에게 "그 문장에 사료가 있나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['1층 반박', '2층 반박', '근거 부족'], cards: ['1900년 칙령 제41호로 이미 관할했다', '적힌 섬은 3천여 섬 가운데 예시다', '석도가 독도임은 1906년 보고가 뒷받침한다', '예시라는 해석은 각서 제677호와 이어진다', '독도는 그냥 우리 땅이다', '그 주장은 들을 가치가 없다'] }, prompt: '반박 문장을 1층·2층·근거 부족 바구니에 나누세요.', target: { sort: { '1층 반박': ['1900년 칙령 제41호로 이미 관할했다', '적힌 섬은 3천여 섬 가운데 예시다'], '2층 반박': ['석도가 독도임은 1906년 보고가 뒷받침한다', '예시라는 해석은 각서 제677호와 이어진다'], '근거 부족': ['독도는 그냥 우리 땅이다', '그 주장은 들을 가치가 없다'] } }, difficulty: 0.3 },
            { type: 'choice', prompt: '2층 반박이 필요한 까닭으로 알맞은 것은?', options: ['1층 근거의 한계를 상대가 되물을 수 있어서', '말을 길게 하려고', '상대를 지치게 하려고'], answer: 0, difficulty: 0.15, explain: '1층 근거에도 한계가 있으니, 되물음에 다른 근거로 보완해 답해요.' },
            { type: 'short', prompt: '근거 부족 문장 하나를 골라 근거 있는 반박으로 고쳐 쓰세요.' },
          ],
        },
        worksheet: {
          title: '사료의 힘과 한계, 겹겹 반박',
          items: [
            { type: 'table', prompt: '주장 하나를 골라 겹겹 반박을 쓰세요.', columns: ['주장', '1층', '2층'], cells: [['', '', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '1877년 ___ 지령은 울릉도 외 한 섬을 일본과 무관하다고 했다.', answer: '태정관' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 13. 교육부 독도교육 계획 읽기 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-plan', [12]);
    const CITE = { text: '친구의 발표 자료: "교육부는 학교급별로 독도교육을 10시간씩 의무로 정했다."', who: '친구', motif: 'house', choices: [
      { id: 'source', text: '계획서 원문을 함께 찾아보자고 한다', result: '원문에서 "학교급 공통 연 10시간 이상 권장(교과+창체 통합)"을 찾는다.', impact: [{ who: '친구', text: '원문을 확인한다', tone: 1 }],
        next: { text: '친구: "10시간쯤이니까 비슷한 말 아니야?"', choices: [
          { id: 'exact', text: '\'권장\'과 \'의무\', \'공통\'과 \'학교급별\'은 다른 말이라며 고쳐 쓴다', result: '발표 자료가 "학교급 공통 연 10시간 이상 권장"으로 바뀐다.', impact: [{ who: '발표', text: '정확한 인용이 된다', tone: 1 }],
            next: { text: '마지막으로 출처를 어떻게 적을까?', choices: [
              { id: 'title', text: '교육부 「독도교육 활성화 계획」(2025)이라고 적는다', result: '듣는 사람이 같은 자료를 찾아볼 수 있다.', impact: [{ who: '듣는 사람', text: '스스로 확인한다', tone: 1 }], ending: '정책 숫자는 표현과 출처까지 원문대로 인용해야 한다.' },
              { id: 'none', text: '"교육부 자료"라고만 적는다', result: '어느 해 어느 자료인지 알 수 없다.', impact: [{ who: '듣는 사람', text: '확인하기 어렵다', tone: 0 }], ending: '출처는 자료 이름과 해까지 적어야 찾을 수 있다.' }] } },
          { id: 'approx', text: '비슷하니 그대로 둔다', result: '발표 뒤 "의무라는 근거가 뭐냐"는 질문을 받는다.', impact: [{ who: '발표', text: '믿음을 잃는다', tone: -1 }], ending: '\'권장\'을 \'의무\'로 옮기면 정책을 잘못 전하게 된다.' }] } },
      { id: 'laugh', text: '틀렸다고 친구를 놀린다', result: '친구가 자료를 고치지 않고 감춘다.', impact: [{ who: '친구', text: '고칠 기회를 놓친다', tone: -1 }], ending: '틀린 인용은 함께 원문을 찾아 고칠 때 바로잡힌다.' }] };
    const CITE_R = [{ id: 'word', text: '\'권장\'과 \'의무\'는 다른 말이다' }, { id: 'orig', text: '정책 숫자는 원문 표현과 출처까지 인용한다' }, { id: 'close', text: '숫자가 비슷하면 표현은 상관없다', why: '같은 10시간이라도 권장과 의무는 뜻이 달라요.' }, { id: 'mock', text: '틀린 사람을 놀려야 다음에 조심한다', why: '놀림은 고칠 기회를 빼앗아요.' }];
    const SCH = [['초', 40], ['중', 40], ['고', 40]];

    MODS.push(
      M({
        id: 'intro.q', type: 'intro', title: '"권장"과 "의무" 구별 질문',
        method: '"권장"과 "의무" 구별 질문', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 문장 카드 두 장을 함께 나눈다.', base: '네 장을 권장·의무로 나눈다.', challenge: '여섯 장 모두 나누고, 독도교육 10시간이 어느 쪽인지 짐작해 말한다.' },
        intro: {
          teacher: '"\'~을 권장한다\'와 \'~해야 한다\'는 같은 말일까요?" 문장 카드를 읽고 권장과 의무로 나누는 모습을 시연 단추로 보여 준다. "권장이면 안 해도 되는 거잖아요"라는 말이 나오면 "권장한다는 것은 교육부가 무엇을 바란다는 뜻일까요?"라고 되묻는다. 오늘은 교육부 「독도교육 활성화 계획」(2025)을 읽으며 정책 자료의 숫자와 표현을 정확히 인용하는 법을 익힌다고 밝힌다.',
          student: '정책 문장 카드를 읽고 권장 표현과 의무 표현으로 나누어 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['권장', '의무'], cards: ['운영을 권장한다', '반드시 운영해야 한다', '연계를 권장한다', '의무적으로 편성한다', '자율로 정한다', '어기면 안 된다'] }, sequence: [{ sort: { 권장: ['운영을 권장한다', '연계를 권장한다', '자율로 정한다'], 의무: ['반드시 운영해야 한다', '의무적으로 편성한다', '어기면 안 된다'] } }] },
          art: { draw: 'a paper policy booklet opened on a desk with two paper stamps beside it, one soft round stamp and one firm square stamp, a magnifying glass over a line of text', banner: '권장일까, 의무일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.guess', type: 'intro', title: '지킴이학교 수 어림하기',
        method: '지킴이학교 수 어림하기', tool: 'emotion', minutes: 6,
        levels: { easy: '어림 카드 두 장 가운데 하나를 고른다.', base: '어림 카드 세 장 가운데 하나를 고른다.', challenge: '고른 어림의 까닭(학교급마다 같을지 다를지)을 말한다.' },
        intro: {
          teacher: '"교육부 계획에는 독도지킴이학교가 나와요. 초·중·고에 각각 몇 학교쯤 있을까요?" 어림 카드를 고르게 하고, 시연 단추로 한 학생의 어림이 바구니에 담기는 모습을 보여 준다(시연은 어림일 뿐 정답이 아니다). 정답은 활동에서 실제 자료로 확인한다고 미리 말한다. "고등학교는 적을 것 같아요"라는 짐작에는 "그렇게 생각한 까닭은 무엇인가요?"라고 묻고, 그 까닭을 자료와 견주게 한다.',
          student: '독도지킴이학교 수를 어림한 카드 가운데 내 어림에 가장 가까운 것을 골라 보세요.',
          demo: { tool: 'emotion', options: { mode: 'pick', weather: false, basket: '내 어림', cards: ['초 100·중 50·고 20', '초·중·고 각 40', '초 10·중 20·고 90'] }, sequence: [{ pick: ['초 100·중 50·고 20'] }] },
          art: { draw: 'three paper school buildings of different sizes with question marks on their flags, a paper booklet with a number hidden under a flap', banner: '지킴이학교는 몇 곳일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '시연은 한 학생의 어림 예시다. 실제 수(초 40·중 40·고 40, 모두 120교)는 활동에서 확인한다.',
      }),

      M({
        id: 'activity.bar', type: 'activity', title: '지킴이학교 학교급별 그래프',
        method: '지킴이학교 학교급별 그래프', tool: 'chart', minutes: 18,
        levels: { easy: '초 막대가 미리 그려진 그래프를 완성하고, 막대 끝에 값이 보인다.', base: '세 막대를 완성하고 합계와 해석을 고른다.', challenge: '값 표시 없이 풀고, 비율로 바꾸어 해석한다.' },
        activity: {
          title: '독도지킴이학교 120교', tool: 'chart',
          teacher: '"교육부 「2025 독도교육 활성화 계획」에 따르면 독도지킴이학교는 120교, 초 40·중 40·고 40이에요. 도입의 어림과 견주어 봐요." 막대를 완성한 뒤 합계와 비율을 읽게 한다. "고등학교가 40교뿐이니 고등학교는 덜 중요하다"고 읽는 학생에게 "학교급마다 같은 수를 정한 뜻은 무엇일까요?"라고 묻는다. 학교급별 전체 학교 수가 다르다는 점을 들어, 이 그래프로 알 수 없는 것도 함께 짚는다.',
          task: '독도지킴이학교 학교급별 막대그래프를 완성하고 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '교육부 계획의 독도지킴이학교 수(초 40·중 40·고 40)로 막대그래프를 완성하세요.', toolOptions: { type: 'bar', mode: 'build', title: '독도지킴이학교 수(교육부 2025 계획)', unit: '교', xLabel: '학교급', yLabel: '학교 수', max: 50, scale: 10, data: SCH }, target: { build: true }, difficulty: 0.15,
              levels: { easy: { toolOptions: { given: [0] } } } },
            { prompt: '세 학교급 지킴이학교를 모두 더하면 몇 교인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '독도지킴이학교 수(교육부 2025 계획)', unit: '교', xLabel: '학교급', yLabel: '학교 수', max: 50, scale: 10, data: SCH, question: '모두 몇 교?' }, target: { value: 120 }, difficulty: 0.2 },
            { prompt: '학교급별 지킴이학교의 비율을 바르게 말한 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '독도지킴이학교 수(교육부 2025 계획)', unit: '교', xLabel: '학교급', yLabel: '학교 수', max: 50, scale: 10, data: SCH, question: '비율은?', choices: ['세 학교급이 약 3분의 1씩 같다', '초등학교가 절반이다', '고등학교가 가장 많다'], why: ['', '초등학교는 120교 가운데 40교예요.', '세 막대의 높이가 같아요.'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '이 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '독도지킴이학교 수(교육부 2025 계획)', unit: '교', xLabel: '학교급', yLabel: '학교 수', max: 50, scale: 10, data: SCH, question: '알 수 없는 것은?', choices: ['학교급마다 지킴이학교 수가 같다는 것', '학교급 전체 학교 가운데 몇 %가 지킴이학교인지', '지킴이학교가 모두 120교라는 것'], why: ['막대 높이로 알 수 있어요.', '', '막대를 더하면 알 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '정책 숫자는 원문대로 읽고, 그 숫자로 알 수 있는 것과 없는 것을 구별해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 보고 "독도지킴이학교"에 대한 사실 문장 하나와 해석 문장 하나를 구별해 쓰세요.' }] },
        notes: '지킴이학교 수는 교육부 「2025 독도교육 활성화 계획」(research-days.md §2-1)의 공식 숫자다. 2026년 계획은 확인하지 못했으므로 \'2025 계획 기준\'으로 밝힌다.',
      }),
      M({
        id: 'activity.facts', type: 'activity', title: '계획서 문장 사실·해석 나누기',
        method: '계획서 문장 사실·해석 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '문장 4장을 넣고, 틀리면 까닭과 함께 돌아온다.', base: '문장 6장을 계획서 인용·해석으로 나누고, 정확한 인용과 오인용, 계획서와 다른 말을 가른다.', challenge: '문장 8장(더한 2장)을 나누고 활동지에 해석 문장 하나를 인용 문장으로 고쳐 쓴다.' },
        activity: {
          title: '인용과 해석 바구니', tool: 'sortboard',
          teacher: '"계획서에 그대로 있는 문장(인용)과, 그것을 보고 누군가 판단한 문장(해석)을 나눠요." "10시간이면 충분하다"를 인용에 두는 학생에게 "계획서가 \'충분하다\'고 적었나요?"라고 묻는다. 오인용 바구니에서는 숫자는 맞아도 표현(\'권장\'·\'공통\')이 바뀐 문장을 찾게 한다. 2026년 계획처럼 확인하지 못한 자료는 \'확인 못 함\'으로 말하는 것이 정확하다고 짚는다.',
          task: '계획서 문장을 인용과 해석으로 나누고, 정확한 인용과 오인용을 가려요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('문장 카드를 계획서 인용과 해석으로 나누세요.', ['계획서 인용', '해석'], [['독도지킴이학교는 120교(초40·중40·고40)다', '연간 10시간 이상 운영을 권장한다', '디지털 콘텐츠 15종을 학교급별 5차시씩 낸다'], ['10시간이면 독도교육이 충분하다', '지킴이학교가 더 늘어야 한다', '디지털 콘텐츠가 수업보다 낫다']], { k: 2, hard: { add: [['2016년부터 독도교육주간을 운영한다'], ['고등학교에는 독도교육이 덜 필요하다']] }, d: 0.3 }),
            BOARDQ('문장을 정확한 인용과 오인용으로 나누세요.', ['정확한 인용', '오인용'], [['학교급 공통 연 10시간 이상 권장', '지킴이학교는 초·중·고 각 40교'], ['학교급마다 10시간 의무', '지킴이학교는 학교급마다 120교']], { k: 1, d: 0.3, more: { hints: ['숫자만 보지 말고, 그 숫자에 붙은 낱말(공통·권장·각)까지 원문과 견주어 봐요.'] } }),
            BOARDQ('문장을 2025 계획서 기준 사실과 계획서와 다른 말로 나누세요.', ['2025 계획서 기준 사실', '계획서와 다른 말'], [['독도의 날(10.25)은 법정기념일이 아니다', '독도교육주간은 시도·학교가 연중 한 주를 정한다'], ['독도의 날은 법정기념일이다', '독도교육주간은 전국이 같은 날 한다']], { k: 1, d: 0.35, more: { conclude: '정책 자료는 숫자와 함께 그 숫자에 붙은 표현(권장·공통·자율)까지 원문대로 옮겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '해석 문장 하나를 골라, 계획서를 인용한 사실 문장으로 고쳐 쓰세요.' }] },
        notes: '계획서 숫자는 research-days.md §2-1(교육부 2025 계획)을 따른다. 독도의 날이 비법정이라는 점도 같은 근거 파일에 있다(사람 확인 목록).',
      }),
      M({
        id: 'activity.cite', type: 'activity', title: '오인용 바로잡기 갈림길',
        method: '오인용 바로잡기 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(오인용을 만났을 때)에서 고르고 근거를 고른다.', base: '두 번째 갈림길(비슷한 말이라는 반론)까지 간다.', challenge: '세 번째 갈림길(출처 적기)까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '"학교급별 10시간 의무" 바로잡기', tool: 'dilemma',
          teacher: '"친구 발표 자료에 \'학교급별 10시간 의무\'라고 적혀 있어요. 무엇이 틀렸고, 어떻게 바로잡을까요?" 원문은 \'학교급 공통 연 10시간 이상 권장(교과와 창체 통합)\'이라고 먼저 확인한다. 친구를 놀리는 길을 고른 학생에게 결과 장면을 보게 한다. "10시간이면 비슷하다"는 반론에는 권장·의무, 공통·학교급별이 뜻이 다른 말이라는 점을 짚는다. 출처는 자료 이름과 해까지 적게 한다.',
          task: '오인용을 바로잡는 갈림길을 따라가며 결과를 추적하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('"학교급별 10시간 의무" 오인용을 원문대로 바로잡는 길을 고르고 근거를 고르세요.', CITE, [['source', 'exact', 'title']], CITE_R, ['word', 'orig'], { d: 0.4 }),
            EXPLOREQ('다른 길도 끝까지 가 보고, 발표가 어떻게 되었는지 견주세요.', CITE, CITE_R, ['다른 길에서 발표가 잃은 것을 찾았다', '정확한 인용 문장을 말할 수 있다'], { d: 0.35 }),
            DILQ('누리 소통망에 "독도의 날은 법정기념일"이라는 글을 봤을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '누리 소통망 글: "10월 25일 독도의 날은 법으로 정한 국가 기념일이에요!"', who: '나', motif: 'house', choices: [
              { id: 'check', text: '근거 자료를 확인하고, 비법정이라는 점을 출처와 함께 정중히 댓글로 단다', result: '글쓴이가 "확인해 볼게요"라고 답한다.', impact: [{ who: '글쓴이', text: '고칠 기회를 얻는다', tone: 1 }], ending: '좋은 뜻의 글이라도 사실과 다르면 근거로 정중히 바로잡는다.' },
              { id: 'like', text: '좋은 내용이니 그냥 공유한다', result: '틀린 정보가 더 퍼진다.', impact: [{ who: '읽는 사람', text: '잘못 알게 된다', tone: -1 }], ending: '우리에게 반가운 글도 확인 없이 퍼뜨리면 오인용을 돕는다.' }] },
              [['check']], [{ id: 'verify', text: '반가운 내용이어도 근거를 확인한다' }, { id: 'goodwill', text: '좋은 뜻이면 사실이 아니어도 괜찮다', why: '좋은 뜻이어도 틀린 정보는 믿음을 떨어뜨려요.' }], ['verify'], { d: 0.3, more: { conclude: '정책 숫자와 표현은 원문대로, 출처는 자료 이름과 해까지 적어 인용해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"학교급별 10시간 의무"를 바르게 고친 문장을 출처와 함께 쓰세요.' }] },
      }),
      M({
        id: 'activity.brief', type: 'activity', title: '정책 요약 브리핑',
        method: '정책 요약 브리핑', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '시간·주간, 지킴이학교·콘텐츠, 출처 네 항목을 세 칸에 쓰고 기준표(정확한 인용)로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에 학생 제안 한 줄을 더한다.' },
        activity: {
          title: '2025 계획 브리핑 글', tool: 'rubric-writing',
          teacher: '"브리핑은 듣는 사람이 숫자를 그대로 옮겨 적을 수 있게 정확해야 해요." 네 항목(시간·주간·지킴이학교·콘텐츠)을 계획서 표현대로 쓰게 한다. 숫자는 맞지만 \'권장\'을 빼먹은 학생에게 "그 숫자에 붙어 있던 낱말은 무엇이었나요?"라고 묻는다. 제안 한 줄은 계획에 대한 평가가 아니라 학생으로서 해 보고 싶은 것으로 쓰게 한다.',
          task: '교육부 2025 독도교육 계획의 핵심을 브리핑 글로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('운영 시간과 독도교육주간을 2문장으로 쓰세요.', '2025 계획의 운영 시간(연 10시간 이상)과 독도교육주간을 계획서 표현대로 쓰세요.', ['\'학교급 공통\'과 \'권장\'을 빠뜨리지 않았다', '교과와 창체 통합을 썼다', '독도교육주간을 정하는 방식을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['권장'], ['10']], starter: '2025 계획은 학교급 공통으로 ~을 권장한다. 독도교육주간은 ~', plus: '독도교육주간과 이어 운영하는 때(독도의 날 등)를 썼다', d: 0.4 }),
            RWQ('독도지킴이학교와 디지털 콘텐츠를 2문장으로 쓰세요.', '독도지킴이학교 수와 디지털 콘텐츠 수를 계획서 숫자대로 쓰세요.', ['지킴이학교 120교(초40·중40·고40)를 정확히 썼다', '콘텐츠 15종·학교급별 5차시를 정확히 썼다', '숫자에 단위를 붙였다'], { min: 40, max: 300, sent: [2, 3], must: [['120'], ['15']], starter: '독도지킴이학교는 ~교이고, 디지털 콘텐츠는 ~', plus: '교원 원격연수(독도 e-런 15차시)까지 썼다', d: 0.4 }),
            RWQ('출처와 마무리를 1~2문장으로 쓰세요.', '브리핑의 출처를 자료 이름과 해까지 밝히고 마무리하세요.', ['자료 이름을 정확히 썼다', '해(2025)를 썼다', '확인하지 못한 것은 확인 못 했다고 썼다'], { min: 30, max: 250, sent: [1, 2], must: [['2025'], ['계획']], starter: '이 브리핑은 교육부 「~」(2025)을 바탕으로 했다.', plus: '학생으로서 해 보고 싶은 제안 한 줄을 덧붙였다', d: 0.4, more: { conclude: '정책 브리핑은 숫자·표현·출처를 원문대로 옮기고, 확인하지 못한 것은 그렇다고 말해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '브리핑 네 항목을 정리하세요.', columns: ['항목', '계획서 표현'], cells: [['운영 시간', ''], ['독도교육주간', ''], ['독도지킴이학교', ''], ['디지털 콘텐츠', '']] }] },
        notes: '계획 숫자는 research-days.md §2-1(교육부 2025 계획)만 쓴다. 계획에 대한 찬반 평가 글이 되지 않게 한다.',
      }),

      M({
        id: 'wrap.press', type: 'wrap', title: '모의 브리핑 발표',
        method: '모의 브리핑 발표', tool: 'timer', minutes: 8,
        levels: { easy: '모둠 대표가 1분 브리핑을 한다.', base: '2분 브리핑을 하고 다른 모둠이 숫자 정확성을 점검한다.', challenge: '브리핑 뒤 질의에서 숫자의 출처를 묻는 질문에 답한다.' },
        wrap: {
          teacher: '"두 모둠이 2분씩 브리핑하고, 사이 1분 동안 다른 모둠이 숫자 정확성을 점검해요." 교사가 타이머로 진행한다. 점검하는 모둠은 숫자와 그 숫자에 붙은 표현(공통·권장·각)을 원문과 견주게 한다. 브리핑에서 숫자를 부풀리면 멈추고 원문을 함께 다시 본다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모의 브리핑', labels: ['브리핑', '점검'], timeUnit: 'min', plan: { work: 1, rest: 2, rounds: 1 } }, prompt: '두 모둠이 2분씩 브리핑하고 사이 1분 점검하도록 타이머를 맞추고, 점검한 것을 표시하세요.', target: { plan: { work: 2, rest: 1, rounds: 2 }, selfCheck: ['10시간에 \'공통\'과 \'권장\'이 붙었는지 보았다', '지킴이학교 120교(초40·중40·고40)를 확인했다', '출처에 자료 이름과 해가 있었다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '브리핑에서 숫자를 가장 정확하게 옮긴 것은?', options: ['독도교육은 학교급 공통 연 10시간 이상 권장이다', '독도교육은 학교급마다 10시간 의무다', '독도교육은 1년에 10시간쯤 한다'], answer: 0, difficulty: 0.15, explain: '숫자와 함께 \'공통\'·\'이상\'·\'권장\'까지 원문대로 옮겨요.' },
            { type: 'short', prompt: '다른 모둠 브리핑에서 고쳐야 할 숫자나 표현을 하나 쓰세요(없으면 \'없음\').' },
          ],
        },
        worksheet: {
          title: '모의 브리핑 점검',
          items: [
            { type: 'table', prompt: '브리핑의 숫자를 점검하세요.', columns: ['항목', '들은 숫자·표현', '원문과 같은가'], cells: [['운영 시간', '', ''], ['지킴이학교', '', ''], ['디지털 콘텐츠', '', '']] },
            { type: 'short', prompt: '우리 모둠 브리핑에서 다음에 고칠 점을 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '정책 자료 읽기 틀 정리',
        method: '정책 읽기 틀 정리', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 주체·대상 두 가지에 카드를 먼저 단다.', base: '주체·대상·수치 세 가지에 단다.', challenge: '강제성까지 네 가지에 모두 단다.' },
        wrap: {
          teacher: '"오늘 쓴 정책 읽기 틀을 네 가지로 정리해요. 누가(주체), 누구에게(대상), 얼마나(수치), 얼마나 강하게(강제성)." 카드를 가지에 단 뒤 출구 질문으로 넘어간다. \'권장\'을 수치 가지에 다는 학생에게 "이 낱말은 숫자인가요, 강하기를 나타내는 말인가요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '정책 자료 읽기 틀', slots: ['주체', '대상', '수치', '강제성'], cards: ['교육부', '시도교육청', '초·중·고 학교', '교사와 학생', '연 10시간 이상', '지킴이학교 120교', '권장', '자율 선정'] }, prompt: '정책 읽기 틀 카드를 네 가지에 다세요.', target: { sort: { 주체: ['교육부', '시도교육청'], 대상: ['초·중·고 학교', '교사와 학생'], 수치: ['연 10시간 이상', '지킴이학교 120교'], 강제성: ['권장', '자율 선정'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '정책 자료를 인용할 때 가장 먼저 지킬 것은?', options: ['숫자와 표현을 원문대로 옮긴다', '기억나는 대로 옮긴다', '숫자를 반올림해 크게 말한다'], answer: 0, difficulty: 0.15, explain: '정책 자료는 숫자와 그 숫자에 붙은 표현까지 원문대로 옮겨요.' },
            { type: 'short', prompt: '이 틀로 읽어 보고 싶은 다른 정책 자료 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '정책 자료 읽기 틀',
          items: [
            { type: 'table', prompt: '독도교육 계획을 틀로 정리하세요.', columns: ['칸', '독도교육 계획'], cells: [['주체', ''], ['대상', ''], ['수치', ''], ['강제성', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도교육은 학교급 공통 연 10시간 이상 ___한다.', answer: '권장' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 14. 국제 청중 3분 설명과 누리 소통망 책임 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-global', [12]);
    const TALK3 = ['도입: 독도의 위치를 지도로 보인다', '근거 1: 1900년 칙령 제41호', '근거 2: 1946년 각서 제677호', '근거 3: 오늘의 독도경비대', '마무리: 공식 자료 주소를 알린다'];
    const RESP = { text: '내가 올린 독도 설명 글에 "연도가 틀렸어요"라는 댓글이 달렸다. 확인해 보니 각서 연도를 잘못 적었다.', who: '나', motif: 'house', choices: [
      { id: 'fix', text: '정정 표시를 하고 바른 연도로 고친 뒤 고마움을 전한다', result: '댓글 쓴 사람이 "정정해 줘서 고마워요"라고 답한다.', impact: [{ who: '읽는 사람', text: '바른 정보를 본다', tone: 1 }],
        next: { text: '누군가 내 글을 퍼 가며 상대 국민을 깎아내리는 문구를 붙였다.', choices: [
          { id: 'report', text: '혐오 문구를 빼 달라고 정중히 요청하고, 안 되면 신고한다', result: '문구가 내려가고 원래 설명만 남는다.', impact: [{ who: '읽는 사람', text: '근거만 본다', tone: 1 }],
            next: { text: '친구가 출처 없는 자극적인 독도 글을 같이 공유하자고 한다.', choices: [
              { id: 'pass', text: '출처를 확인할 수 없으니 공유하지 않고 공식 자료를 대신 건넨다', result: '친구가 공식 자료를 먼저 읽는다.', impact: [{ who: '친구', text: '확인하는 습관을 본다', tone: 1 }], ending: '정정·요청·공유하지 않기가 누리 소통망에서 독도를 지키는 책임이다.' },
              { id: 'share', text: '반응이 좋을 것 같아 공유한다', result: '출처 없는 글이 더 퍼진다.', impact: [{ who: '읽는 사람', text: '근거 없는 글을 본다', tone: -1 }], ending: '반응을 노린 공유는 책임을 버린다.' }] } },
          { id: 'cheer', text: '많이 퍼지니 그대로 둔다', result: '혐오 문구가 붙은 채 내 글이 퍼진다.', impact: [{ who: '상대 국민', text: '상처받는다', tone: -1 }], ending: '내 글에 붙은 혐오도 내 책임과 무관하지 않다.' }] } },
      { id: 'delete', text: '조용히 글을 지우고 모른 척한다', result: '이미 퍼 간 사람들은 틀린 연도를 그대로 갖고 있다.', impact: [{ who: '읽는 사람', text: '정정을 모른다', tone: -1 }], ending: '몰래 지우기보다 정정 표시가 퍼진 정보까지 바로잡는다.' },
      { id: 'argue', text: '"그 정도는 괜찮다"며 댓글과 다툰다', result: '틀린 연도가 그대로 남는다.', impact: [{ who: '나', text: '믿음을 잃는다', tone: -1 }], ending: '틀림을 인정하지 않으면 다른 근거까지 의심받는다.' }] };
    const RESP_R = [{ id: 'correct', text: '틀린 것은 정정 표시와 함께 고친다' }, { id: 'nohate', text: '내 글에 붙은 혐오도 바로잡을 책임이 있다' }, { id: 'quiet', text: '틀린 글은 몰래 지우면 된다', why: '이미 퍼 간 사람은 정정을 알 수 없어요.' }, { id: 'reach', text: '많이 퍼지면 무엇이 붙어도 좋다', why: '혐오가 붙은 확산은 근거를 가리고 사람에게 상처를 줘요.' }];

    MODS.push(
      M({
        id: 'intro.aud', type: 'intro', title: '국제 청중이 모르는 것 고르기',
        method: '국제 청중이 모르는 것 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 배경지식 카드 두 장을 함께 고른다.', base: '네 장 가운데 설명이 필요한 것을 고른다.', challenge: '여섯 장 모두 보고, 함정 카드가 왜 필요 없는지 말한다.' },
        intro: {
          teacher: '"국제 청중 앞에서 3분 동안 독도를 설명한다면, 그 청중이 모르는 것은 무엇일까요?" 배경지식 카드를 읽고 설명이 필요한 것을 고르게 한 뒤 시연 단추로 바구니에 담는 모습을 보여 준다. 우리 반·학교 이야기처럼 청중과 상관없는 카드를 고르는 학생에게 "외국 청중이 그 이야기를 들으면 무엇을 알게 될까요?"라고 묻는다. 국제 청중은 대한제국이나 칙령이 무엇인지 모를 수 있다는 점을 짚는다.',
          student: '국제 청중에게 설명이 필요한 배경지식 카드를 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '설명이 필요한 것', cards: ['울릉도와 독도가 어디인지', '우리 반 별명', '대한제국이 어떤 나라였는지', '칙령이 무엇인지', '우리 학교 급식 메뉴', '연합국 각서가 무엇인지'] }, sequence: [{ pick: ['울릉도와 독도가 어디인지', '대한제국이 어떤 나라였는지', '칙령이 무엇인지', '연합국 각서가 무엇인지'] }] },
          art: { draw: 'a paper lecture hall with audience members from many countries holding question cards, a speaker at a podium with a small island map on the screen', banner: '국제 청중은 무엇을 모를까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.sns', type: 'intro', title: '누리 소통망 글 반응 예측',
        method: '누리 소통망 글 반응 예측', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 글 유형 두 개와 반응을 함께 잇는다.', base: '세 유형을 반응과 잇는다.', challenge: '네 유형 모두 잇고, 내가 쓸 글 유형을 고른다.' },
        intro: {
          teacher: '"독도 이야기를 누리 소통망에 올린다면, 어떤 글이 어떤 반응을 부를까요?" 글 유형과 예상 반응을 잇게 한 뒤 시연 단추로 이어지는 모습을 보여 준다. 자극적인 글을 \'많이 퍼지니 효과적\'이라고 하는 학생에게 "퍼진 뒤 사람들은 무엇을 기억할까요, 근거일까요, 다툼일까요?"라고 묻는다. 오늘은 3분 설명을 짜고, 누리 소통망에서의 책임을 고른다고 밝힌다.',
          student: '누리 소통망 글 유형과 그 글이 부를 반응을 이어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', weather: false, slots: ['출처를 단 차분한 설명 글', '상대 국민을 깎아내리는 글', '출처 없는 자극적인 사진 글', '질문에 답하는 대화형 글'], cards: ['대화가 이어진다', '퍼지지만 금방 의심받는다', '다툼 댓글이 몰린다', '링크를 눌러 확인한다'] }, sequence: [{ match: { '출처를 단 차분한 설명 글': '링크를 눌러 확인한다', '상대 국민을 깎아내리는 글': '다툼 댓글이 몰린다', '출처 없는 자극적인 사진 글': '퍼지지만 금방 의심받는다', '질문에 답하는 대화형 글': '대화가 이어진다' } }] },
          art: { draw: 'a paper smartphone with four different post cards floating out, each leading by a paper string to a different crowd reaction', banner: '어떤 글이 어떤 반응을 부를까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      M({
        id: 'activity.time', type: 'activity', title: '3분 설명 시간 배분',
        method: '3분 설명 시간 배분', tool: 'timer', minutes: 18,
        levels: { easy: '순서 카드는 도입·근거·마무리 3장으로 놓는다.', base: '순서 카드 5장을 놓고, 근거 세 구간 타이머를 맞춘다.', challenge: '전체 3분(180초)에 맞추는 구간을 스스로 짜고, 연습 시간을 기록한다.' },
        activity: {
          title: '180초 설계', tool: 'timer',
          teacher: '"3분은 생각보다 짧아요. 근거 하나에 얼마를 쓸 수 있을까요?" 순서 카드를 먼저 놓고, 근거 세 개에 50초씩, 사이 넘기기 15초로 타이머를 맞추게 한다. 도입에 1분을 넘게 쓰는 학생에게 "근거에 남는 시간은 얼마인가요?"라고 묻는다. 마지막 문항에서는 전체를 180초로 맞추는 조합을 스스로 짜게 하고, 실제 연습 시간을 재어 적게 한다.',
          task: '3분 설명의 순서를 놓고, 구간 시간을 맞추고, 연습 시간을 기록해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '3분 설명의 순서 카드를 차례대로 놓으세요.', toolOptions: { title: '3분 설명 순서', cards: [TALK3[3], TALK3[0], TALK3[4], TALK3[2], TALK3[1]] }, target: { order: TALK3 }, difficulty: 0.25,
              levels: { easy: { prompt: '3분 설명의 순서 카드 3장(도입·근거·마무리)을 차례대로 놓으세요.', toolOptions: { cards: [TALK3[4], TALK3[1], TALK3[0]] }, target: { order: [TALK3[0], TALK3[1], TALK3[4]] } } } },
            { prompt: '근거 하나에 50초, 사이 넘기기 15초로 근거 세 개를 말하도록 타이머를 맞추세요.', toolOptions: { title: '근거 구간', labels: ['근거', '넘기기'], plan: { work: 30, rest: 5, rounds: 1 } }, target: { plan: { work: 50, rest: 15, rounds: 3 } }, difficulty: 0.25 },
            { prompt: '전체가 정확히 3분(180초)이 되도록 구간·넘기기·횟수를 스스로 맞추세요.', toolOptions: { title: '전체 3분', labels: ['말하기', '넘기기'], plan: { work: 40, rest: 10, rounds: 2 }, showTotal: true }, target: { total: 180 }, difficulty: 0.35 },
            { prompt: '짝 앞에서 연습한 3분 설명의 실제 시간을 두 번 재어 적으세요.', toolOptions: { title: '연습 기록', stopwatch: true, fields: [{ label: '1회 연습', unit: '초', step: 1 }, { label: '2회 연습', unit: '초', step: 1 }] }, target: { records: true }, difficulty: 0.15, conclude: '3분 설명은 근거마다 시간을 정해 두면 마무리와 출처까지 빠뜨리지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 3분 설명의 시간 계획을 쓰세요.', columns: ['구간', '시간(초)', '할 말'], cells: [['도입', '', ''], ['근거 1', '', ''], ['근거 2', '', ''], ['근거 3', '', ''], ['마무리', '', '']] }] },
      }),
      M({
        id: 'activity.script', type: 'activity', title: '3분 설명 원고',
        method: '3분 설명 원고', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '도입·근거 셋·마무리를 3분 분량으로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마무리에 외국어(영어) 요약 한 줄을 더한다.' },
        activity: {
          title: '국제 청중용 원고', tool: 'rubric-writing',
          teacher: '"원고는 읽는 글이 아니라 듣는 글이에요. 짧은 문장, 처음 듣는 사람도 아는 낱말, 근거마다 출처." 근거 셋은 앞 활동의 순서(칙령·각서·독도경비대)를 쓰게 한다. 근거마다 \'그것이 무엇인지\' 한 마디를 붙이게 한다. 마무리에 상대 나라를 겨냥한 말이 들어가면 "국제 청중 가운데 그 나라 사람이 있다면 어떻게 들을까요?"라고 묻는다.',
          task: '국제 청중을 위한 3분 설명 원고를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('도입 원고를 2문장으로 쓰세요.', '국제 청중에게 독도의 위치를 알리는 도입 원고를 쓰세요.', ['위치를 처음 듣는 사람도 알게 썼다', '짧은 문장으로 썼다', '청중에게 인사했다'], { min: 30, max: 200, sent: [2, 3], must: [['동해', '울릉도']], starter: '여러분, ~를 아시나요? 독도는 ~', plus: 'Dokdo 표기를 함께 말했다', d: 0.35 }),
            RWQ('근거 셋을 출처와 함께 3~4문장으로 쓰세요.', '칙령 제41호(1900)·각서 제677호(1946)·오늘의 독도경비대를 근거로, 출처와 함께 쓰세요.', ['근거 셋을 모두 넣었다', '근거마다 무엇인지 한 마디로 풀었다', '출처를 밝혔다'], { min: 80, max: 450, sent: [3, 5], must: [['칙령'], ['각서'], ['경비대']], starter: '첫째, 1900년 ~. 둘째, 1946년 ~. 셋째, 오늘 ~. 자세한 내용은 ~', plus: '근거마다 연도를 정확히 말했다', d: 0.45 }),
            RWQ('마무리 원고를 1~2문장으로 쓰세요.', '청중이 더 알아볼 곳을 알리며 존중하는 말로 마무리하세요.', ['더 알아볼 곳을 알렸다', '존중하는 말로 끝맺었다', '상대 나라를 겨냥한 말이 없다'], { min: 20, max: 200, sent: [1, 2], must: [['자료', '누리집', '확인']], starter: '더 궁금하신 점은 ~에서 함께 확인해 주세요.', plus: '영어 요약 한 줄을 덧붙였다', d: 0.4, more: { conclude: '국제 청중용 원고는 짧고 쉬운 문장에 근거·출처를 싣고, 존중으로 끝맺어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 원고에서 근거를 \'처음 듣는 사람도 알게\' 풀어 쓴 문장을 하나 옮겨 쓰세요.' }] },
      }),
      M({
        id: 'activity.resp', type: 'activity', title: '누리 소통망 책임 갈림길',
        method: '누리 소통망 책임 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(정정)에서 고르고 근거를 고른다.', base: '두 번째 갈림길(혐오가 붙은 퍼 가기)까지 간다.', challenge: '세 번째 갈림길(공유 권유)까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '정정·요청·공유하지 않기', tool: 'dilemma',
          teacher: '"내가 올린 글에 틀린 것이 있으면, 몰래 지우는 것과 정정 표시를 하는 것 가운데 무엇이 책임일까요?" 선택마다 읽는 사람에게 무엇이 남는지 보게 한다. 내 글에 붙은 혐오 문구를 \'많이 퍼지니 좋다\'고 두는 학생에게 "그 문구를 본 상대 나라 사람은 어떤 기분일까요?"라고 묻는다. 공유하지 않는 것도 적극적인 책임이라는 점을 짚는다.',
          task: '누리 소통망에서 정정·요청·공유하지 않기 갈림길을 지나며 결과를 추적하고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('누리 소통망에서 책임 있게 행동하는 길을 고르고 근거를 고르세요.', RESP, [['fix', 'report', 'pass']], RESP_R, ['correct', 'nohate'], { d: 0.4 }),
            EXPLOREQ('다른 길도 끝까지 가 보고, 읽는 사람에게 무엇이 남는지 견주세요.', RESP, RESP_R, ['다른 길에서 읽는 사람이 잃은 것을 찾았다', '세 가지 책임(정정·요청·공유하지 않기)을 말할 수 있다'], { d: 0.35 }),
            DILQ('내 3분 설명 영상에 악성 댓글이 달렸을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '내 3분 설명 영상에 "거짓말쟁이"라는 악성 댓글이 달렸다.', who: '나', motif: 'moon', choices: [
              { id: 'calm', text: '맞대응하지 않고, 근거 링크를 고정 댓글로 남긴 뒤 악성 댓글은 신고한다', result: '다른 시청자들이 고정 댓글의 자료를 본다.', impact: [{ who: '시청자', text: '근거를 먼저 본다', tone: 1 }], ending: '맞대응 대신 근거를 남기고 신고하면 대화의 질이 지켜진다.' },
              { id: 'fight', text: '똑같이 거친 말로 맞대응한다', result: '댓글 창이 다툼으로 가득 찬다.', impact: [{ who: '시청자', text: '영상 내용보다 다툼을 본다', tone: -1 }], ending: '거친 맞대응은 내 영상의 근거까지 묻는다.' }] },
              [['calm']], [{ id: 'pin', text: '맞대응보다 근거를 남기고 신고하는 것이 낫다' }, { id: 'back', text: '받은 만큼 돌려줘야 한다', why: '맞대응은 다툼만 키우고 근거를 가려요.' }], ['pin'], { d: 0.3, more: { conclude: '누리 소통망의 책임은 틀리면 정정하고, 혐오는 바로잡고, 확인 못 한 것은 공유하지 않는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 가지 책임 가운데 내가 가장 지키기 어려운 것과 지킬 방법을 쓰세요.' }] },
        notes: '악성 댓글을 받은 경험을 묻지 않는다. 장면은 가상이다.',
      }),
      M({
        id: 'activity.norm', type: 'activity', title: '책임 있는 게시 규칙',
        method: '책임 있는 게시 규칙', tool: 'sortboard', minutes: 18,
        levels: { easy: '규칙 후보 4장을 넣고, 틀리면 까닭과 함께 돌아온다.', base: '후보 6장을 지킬 것·아닌 것으로 나누고, 올리기 전·뒤 할 일과 고쳐 쓸 규칙을 가른다.', challenge: '후보 8장(더한 2장)을 나누고 활동지에 우리 반 규칙 하나를 직접 쓴다.' },
        activity: {
          title: '우리 반 게시 규칙', tool: 'sortboard',
          teacher: '"우리 반이 독도 이야기를 누리 소통망에 올릴 때 지킬 규칙을 정해요." 규칙 후보를 지킬 것과 아닌 것으로 나누게 한다. \'반응이 좋으면 확인은 나중에\'를 지킬 것에 두는 학생에게 "확인을 나중에 하면, 그사이 퍼진 글은 어떻게 될까요?"라고 묻는다. 규칙은 짧고, 누구나 확인할 수 있게 써야 지켜진다고 짚는다.',
          task: '게시 규칙 후보를 지킬 것과 아닌 것으로 나누고, 올리기 전·뒤 할 일을 가려요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('게시 규칙 후보를 지킬 것과 아닌 것으로 나누세요.', ['지킬 것', '아닌 것'], [['올리기 전에 날짜·출처를 확인한다', '공식 자료 링크를 단다', '상대 국민을 깎아내리지 않는다'], ['반응이 좋으면 확인은 나중에 한다', '틀린 글은 몰래 지운다', '자극적인 제목으로 조회 수를 올린다']], { k: 2, hard: { add: [['틀린 것은 정정 표시와 함께 고친다'], ['남의 사진을 출처 없이 쓴다']] }, d: 0.3 }),
            BOARDQ('지킬 규칙을 올리기 전과 올린 뒤에 할 일로 나누세요.', ['올리기 전', '올린 뒤'], [['날짜·출처를 확인한다', '혐오 표현이 없는지 다시 읽는다'], ['틀린 곳은 정정 표시로 고친다', '혐오 댓글은 신고한다']], { k: 1, d: 0.3 }),
            BOARDQ('규칙 문장을 그대로 쓸 것과 고쳐 쓸 것으로 나누세요.', ['그대로 쓸 규칙', '고쳐 쓸 규칙'], [['출처를 확인할 수 없으면 공유하지 않는다', '틀리면 정정 표시를 한다'], ['좋은 글을 올리자', '나쁜 말은 웬만하면 쓰지 말자']], { k: 1, d: 0.35, more: { conclude: '좋은 게시 규칙은 짧고, 누구나 지켰는지 확인할 수 있게 구체적이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 독도 게시 규칙 하나를 지켰는지 확인할 수 있게 구체적으로 쓰세요.' }] },
      }),

      M({
        id: 'wrap.deliver', type: 'wrap', title: '3분 설명 발표',
        method: '3분 설명 발표', tool: 'timer', minutes: 8,
        levels: { easy: '모둠 대표가 원고를 보며 설명한다.', base: '원고를 외워 설명하고, 청중 역할 학생이 이해도 점검 칸에 표시한다.', challenge: '설명 뒤 청중 역할 학생의 질문 하나에 답한다.' },
        wrap: {
          teacher: '"두 모둠 대표가 3분씩 설명하고, 사이 1분 동안 청중 역할 학생이 이해도 점검 칸에 표시해요." 교사가 타이머로 진행한다. 청중 역할 학생은 국제 청중이 되어 \'처음 듣는 사람도 알았는가\'를 기준으로 표시하게 한다. 설명이 3분을 넘기면 마무리로 바로 넘어가게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '3분 설명 발표', labels: ['설명', '점검'], timeUnit: 'min', plan: { work: 2, rest: 2, rounds: 1 } }, prompt: '두 모둠이 3분씩 설명하고 사이 1분 점검하도록 타이머를 맞추고, 청중으로서 점검한 것을 표시하세요.', target: { plan: { work: 3, rest: 1, rounds: 2 }, selfCheck: ['독도의 위치를 알게 되었다', '근거가 무엇인지 알게 되었다', '더 알아볼 곳을 알게 되었다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '3분 설명이 시간을 넘길 것 같을 때 알맞은 것은?', options: ['남은 근거를 줄이고 마무리와 출처를 꼭 말한다', '마무리를 빼고 근거만 계속 말한다', '빠르게 읽어 모두 말한다'], answer: 0, difficulty: 0.15, explain: '마무리와 출처가 있어야 청중이 스스로 더 알아볼 수 있어요.' },
            { type: 'short', prompt: '들은 설명 가운데 국제 청중이 가장 잘 알아들었을 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '3분 설명 점검',
          items: [
            { type: 'table', prompt: '청중으로서 이해도를 표시하세요(○·△·×).', columns: ['모둠', '위치', '근거', '더 알아볼 곳'], cells: [['1', '', '', ''], ['2', '', '', '']] },
            { type: 'short', prompt: '우리 모둠 설명에서 보완할 점을 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '청중 이해도 그래프',
        method: '청중 이해도 그래프', tool: 'chart', minutes: 8,
        levels: { easy: '교사가 \'위치\' 막대를 먼저 그려 보인다.', base: '세 항목 막대를 그리고 가장 낮은 항목을 찾는다.', challenge: '가장 낮은 항목의 보완 계획을 쓴다.' },
        wrap: {
          teacher: '"청중 점검 결과(가상 예시: 청중 20명 가운데 \'알게 되었다\'에 표시한 수)를 막대로 그려 봐요. 어디를 보완해야 할까요?" 막대를 그린 뒤 가장 낮은 항목을 찾게 한다. 가장 낮은 항목을 \'청중이 집중을 안 해서\'로 탓하는 학생에게 "설명에서 무엇을 바꾸면 그 막대가 올라갈까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '청중 이해도(가상 예시, 20명)', unit: '명', xLabel: '항목', yLabel: '알게 된 청중', max: 20, scale: 2, data: [['위치', 18], ['근거', 12], ['더 알아볼 곳', 8]] }, prompt: '청중 이해도 점검 결과(가상 예시)로 막대그래프를 완성하세요.', target: { build: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '가장 먼저 보완할 항목과 방법으로 알맞은 것은?', options: ['더 알아볼 곳 — 마무리에 공식 자료 주소를 또렷이 말한다', '위치 — 지도를 더 크게 한다', '근거 — 근거를 열 개로 늘린다'], answer: 0, difficulty: 0.2, explain: '가장 낮은 막대(8명)는 \'더 알아볼 곳\'이에요. 마무리에서 출처를 분명히 알리면 올라가요.' },
            { type: 'short', prompt: '우리 모둠 3분 설명의 보완 계획 한 가지를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '청중 이해도와 보완',
          items: [
            { type: 'table', prompt: '우리 모둠의 청중 점검 결과를 적으세요.', columns: ['항목', '알게 된 청중 수', '보완할 점'], cells: [['위치', '', ''], ['근거', '', ''], ['더 알아볼 곳', '', '']] },
            { type: 'short', prompt: '누리 소통망에 3분 설명을 올린다면 지킬 책임 하나를 쓰세요.' },
          ],
        },
        notes: '그래프 수치는 가상 예시다. 실제 학급 점검 결과는 활동지 표에 적는다.',
      }),
    );
  }

  // ======================================================================================================
  // 15. 근거 장면과 출처 자막, 홍보 영상 기획과 6년 정리 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-video', [12]);
    const BOARD7 = ['도입: 독도 하늘 장면·"10월 25일은 무슨 날?"', '근거 장면: 칙령 문서 화면', '출처 자막: 1900년 칙령 제41호 — 외교부 독도 누리집', '근거 장면: 독도경비대 화면', '출처 자막: 오늘도 지키는 섬 — 공식 자료', '마무리: 학생 화면·"사실을 확인하고 나눠요"', '끝 화면: 자료 목록'];
    const YEARS = ['중1: 안용복과 막부의 도해 금지', '중2: 칙령 제41호와 시마네현 고시', '중3: 연합국 각서와 강화조약', '고1: 국제법 기초와 사료 종합', '고2: 수호 활동과 참여 방법', '고3: 바람직한 영토관과 홍보'];

    MODS.push(
      M({
        id: 'intro.ex', type: 'intro', title: '좋은 영상 장면 고르기',
        method: '좋은 영상 장면 고르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 장면 카드 두 장을 함께 나눈다.', base: '네 장을 근거·출처 있음과 없음으로 나눈다.', challenge: '여섯 장 모두 나누고, 없음 장면에 무엇을 더할지 말한다.' },
        intro: {
          teacher: '"홍보 영상에서 오래 남는 장면은 어떤 장면일까요? 화려한 장면일까요, 근거가 보이는 장면일까요?" 수업용 가상 장면 카드를 읽고 시연 단추로 바구니에 나뉘는 모습을 보여 준다. 배경 음악만 크게 깐 장면을 \'감동적\'이라며 있음에 두는 학생에게 "그 장면을 보고 무엇을 확인할 수 있나요?"라고 묻는다. 오늘은 동북아역사재단 고등학교 사례처럼 홍보 동영상을 기획하고, 6년의 독도 학습을 정리한다고 밝힌다.',
          student: '가상 영상 장면 카드를 근거·출처 있음과 없음으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['근거·출처 있음', '근거·출처 없음'], cards: ['칙령 문서 화면과 출처 자막', '배경 음악만 크게 깐 바다 장면', '칸 지도와 영해 설명 자막', '출처 없는 합성 사진 장면', '독도경비대 화면과 공식 자료 자막', '상대 나라를 놀리는 그림 장면'] }, sequence: [{ sort: { '근거·출처 있음': ['칙령 문서 화면과 출처 자막', '칸 지도와 영해 설명 자막', '독도경비대 화면과 공식 자료 자막'], '근거·출처 없음': ['배경 음악만 크게 깐 바다 장면', '출처 없는 합성 사진 장면', '상대 나라를 놀리는 그림 장면'] } }] },
          art: { draw: 'a paper film strip unrolling across the table with frames showing an island, an old document with a caption bar and a guard post, a paper clapperboard beside it', banner: '오래 남는 장면은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '장면은 수업용 가상 장면이다. 동북아역사재단 고등학교 사례(홍보 동영상 제작)는 research-days.md 에 근거한다.',
      }),
      M({
        id: 'intro.recall', type: 'intro', title: '6년 공부 떠올리기',
        method: '6년 공부 떠올리기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 학년 카드 두 장을 읽고 하나를 고르게 한다.', base: '네 장 가운데 가장 기억나는 것을 고른다.', challenge: '여섯 장 모두 보고, 고른 카드에서 기억나는 근거 하나를 말한다.' },
        intro: {
          teacher: '"중학교 1학년부터 고등학교 3학년까지, 6년 동안 독도에 대해 무엇을 배웠나요?" 학년 카드를 읽고 가장 기억나는 것을 고르게 한 뒤 시연 단추로 하나가 바구니에 담기는 모습을 보여 준다. 기억나는 것이 없다는 학생에게는 "오늘 활동에서 카드 하나씩 다시 만나 볼 거예요"라고 말한다. 오늘 마지막에는 6년의 배움을 위치·자연·역사·국제법 네 갈래로 묶어 다짐을 쓴다고 밝힌다.',
          student: '6년의 독도 공부 카드 가운데 가장 기억나는 것을 하나 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '가장 기억나는 공부', cards: YEARS }, sequence: [{ pick: ['중2: 칙령 제41호와 시마네현 고시'] }] },
          art: { draw: 'six paper notebooks stacked like stairs, each with a small island sticker, a graduation cap made of paper resting on the top notebook', banner: '6년 동안 무엇을 배웠을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학년 카드의 주제는 같은 체계도의 중·고 단원 재료(g7~g12-cc-dokdo) 흐름을 따른다. 고르기는 채점하지 않는다.',
      }),

      M({
        id: 'activity.board', type: 'activity', title: '영상 장면 차례(스토리보드)',
        method: '영상 장면 차례(스토리보드)', tool: 'story', minutes: 18,
        levels: { easy: '장면 3장(도입·근거·마무리)을 차례로 놓는다.', base: '장면 5장(출처 자막 포함)을 놓고, 넣을 장면을 가려 고른다.', challenge: '장면 7장(근거 둘·끝 화면 자료 목록)을 놓는다.' },
        activity: {
          title: '장면 차례', tool: 'story',
          teacher: '"근거 장면 바로 뒤에는 무엇이 와야 할까요? 그 근거를 어디서 확인하는지 알려 주는 출처 자막이에요." 출처 자막을 영상 맨 끝에 몰아 두는 학생에게 "근거 장면을 볼 때 출처가 같이 보이면 무엇이 좋을까요?"라고 묻는다. 끝 화면에 자료 목록을 두는 까닭도 함께 짚는다. 장면 글은 단원 재료의 예시를 따른다.',
          task: '홍보 영상 장면 카드를 차례대로 놓고, 영상에 넣을 장면을 골라요.', levels: LV,
          items: [
            ORDERQ('홍보 영상 장면 카드를 차례대로 놓으세요.', BOARD7, { sub: { easy: [0, 1, 5], base: [0, 1, 2, 5, 6] }, d: 0.3, opt: { title: '독도 홍보 영상 스토리보드' } }),
            PICKQ('홍보 영상에 넣을 장면만 고르세요.', ['칸 지도와 영해 설명 자막', '공식 자료 주소가 보이는 끝 화면'], ['출처 없는 합성 사진', '상대 나라를 놀리는 그림'], { d: 0.25, opt: { basket: '넣을 장면', title: '독도 홍보 영상 스토리보드' } }),
            SORTQ('장면 카드를 화면(그림)과 자막(글)으로 나누세요.', ['화면', '자막'], [['독도 하늘 장면', '칙령 문서 화면'], ['1900년 칙령 제41호 — 외교부 독도 누리집', '사실을 확인하고 나눠요']], { k: 1, d: 0.3, opt: { title: '독도 홍보 영상 스토리보드' }, more: { conclude: '좋은 홍보 영상은 근거 장면마다 출처 자막을 붙이고, 끝 화면에 자료 목록을 둬요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 스토리보드를 쓰세요.', columns: ['장면', '화면', '자막'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', ''], ['5', '', '']] }] },
        notes: '장면 예시는 단원 재료(g12-cc-dokdo)의 스토리보드 예시를 따른다. 실제 영상 제작·게시는 교사가 저작권·초상권을 함께 확인한다.',
      }),
      M({
        id: 'activity.design', type: 'activity', title: '장면 시안 꾸미기',
        method: '장면 시안 꾸미기', tool: 'collage', minutes: 18,
        levels: { easy: '모양 세 가지 고르개로 장면을 꾸민다(조각 수가 적어도 된다).', base: '근거 장면·출처 자막 장면·끝 화면 세 시안을 꾸미고 장마다 점검한다.', challenge: '같은 세 시안에서 출처 자막 칸을 화면 아래 띠로 맞추는 점검이 더해진다.' },
        activity: {
          title: '근거 장면 시안 세 장', tool: 'collage',
          teacher: '"장면 시안은 그림을 잘 그리는 것보다, 근거와 자막이 어디에 놓이는지 정하는 거예요." 지도·사료 조각(동그라미·네모)과 자막 띠(긴 네모)를 쓰게 한다. 자막 칸을 너무 작게 두는 학생에게 "휴대폰 화면에서도 읽힐까요?"라고 묻는다. 상대 나라를 놀리는 그림이나 실제 사람 얼굴은 넣지 않는다는 원칙을 먼저 정한다.',
          task: '근거 장면·출처 자막·끝 화면 시안을 조각으로 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '근거 장면 시안: 사료 화면(네모)과 섬 지도(동그라미)를 놓고 점검하세요.', toolOptions: { shapes: ['square', 'circle', 'rect', 'triangle', 'star'] }, target: { has: [{ shape: 'square', min: 1 }, { shape: 'circle', min: 1 }], selfCheck: ['사료 화면이 가장 크게 보인다', '섬 지도를 함께 놓았다', '실제 사람 얼굴을 넣지 않았다'], minPieces: 3 }, difficulty: 0.25,
              levels: { easy: { toolOptions: { shapes: ['square', 'circle', 'rect'] } } } },
            { prompt: '출처 자막 장면 시안: 화면 아래에 자막 띠(긴 네모)를 놓고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle'] }, target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['자막 띠가 화면 아래에 있다', '자막 띠가 읽힐 만큼 크다', '근거 장면과 함께 보인다'], minPieces: 2 }, difficulty: 0.3,
              levels: { challenge: { prompt: '출처 자막 장면 시안: 자막 띠를 화면 아래 한 줄로 맞추고 점검하세요(띠 맞추기).', target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['자막 띠가 화면 아래에 있다', '자막 띠가 읽힐 만큼 크다', '근거 장면과 함께 보인다', '자막 띠가 화면 양 끝까지 한 줄로 이어진다'], minPieces: 2 } } } },
            { prompt: '끝 화면 시안: 자료 목록 칸(긴 네모 2개 이상)을 놓고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'star'] }, target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['자료 목록 칸이 두 줄 이상이다', '공식 자료 주소를 넣을 자리가 있다', '놀리는 그림이 없다'], minPieces: 2 }, difficulty: 0.3, conclude: '장면 시안은 근거가 크게, 출처 자막이 읽히게, 끝에 자료 목록이 보이게 놓아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시안마다 들어갈 글을 쓰세요.', columns: ['시안', '화면 설명', '자막 글'], cells: [['근거 장면', '', ''], ['출처 자막', '', ''], ['끝 화면', '', '']] }] },
        notes: '조각 판은 글자를 쓰지 못한다. 자막 글은 활동지에 쓰고 조각으로 자리를 정한다.',
      }),
      M({
        id: 'activity.four', type: 'activity', title: '6년 학습 네 갈래 정리',
        method: '6년 학습 4갈래 정리', tool: 'mindmap', minutes: 18,
        levels: { easy: '갈래마다 카드 1장씩 달고, 틀리면 바로 알 수 있다.', base: '위치·자연·역사·국제법 네 갈래에 배움 카드를 단다.', challenge: '카드가 섞여 나오고, 갈래마다 출처 기관을 잇는다.' },
        activity: {
          title: '네 갈래 정리', tool: 'mindmap',
          teacher: '"6년 동안 배운 독도를 네 갈래로 묶으면 어떤 모습일까요?" 배움 카드를 갈래에 달게 한다. 실효적 지배를 역사 갈래에 넣는 학생에게는 국제법 개념이라는 점을 짚되, 독도경비대처럼 오늘의 사례와도 이어진다고 말해 준다. "상대 국민에 대한 반감"을 6년의 배움으로 고르는 학생에게는 우리가 배운 것은 근거와 존중이라는 점을 분명히 한다.',
          task: '6년의 배움 카드를 위치·자연·역사·국제법 갈래에 달고, 출처를 이어요.', levels: LV,
          items: [
            SORTQ('6년의 배움 카드를 네 갈래에 다세요.', ['위치', '자연', '역사', '국제법'], [['울릉도에서 맑은 날 보인다', '동도·서도와 둘레 바위섬'], ['괭이갈매기와 해국', '섬 전체가 천연보호구역'], ['1900 칙령 제41호', '1693 무렵 안용복'], ['영해 12해리', '1946 각서 제677호']], { k: 1, traps: ['상대 국민에 대한 반감'], d: 0.3, opt: { topic: '6년의 독도 학습' } }),
            MATCHQ('갈래마다 더 알아볼 출처 기관을 이으세요.', [['자연', '국가유산청'], ['역사', '동북아역사재단'], ['국제법', '외교부 독도 누리집']], { k: 2, extraHard: ['익명 게시판'], d: 0.3, opt: { topic: '갈래와 출처' } }),
            PICKQ('6년 동안 배운 것으로 알맞은 것만 고르세요.', ['근거로 말하는 법', '상대를 존중하는 말투', '공식 자료로 확인하는 습관'], ['상대 국민을 미워하는 마음', '확인 없이 퍼 나르는 습관'], { d: 0.25, opt: { basket: '6년의 배움', topic: '6년의 독도 학습' }, more: { conclude: '6년의 독도 학습은 위치·자연·역사·국제법의 근거와, 그것을 존중하며 말하는 법이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '네 갈래마다 가장 기억할 배움을 쓰세요.', columns: ['갈래', '기억할 배움'], cells: [['위치', ''], ['자연', ''], ['역사', ''], ['국제법', '']] }] },
      }),
      M({
        id: 'activity.pledge', type: 'activity', title: '다짐 글',
        method: '다짐 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '배움 정리와 실천 다짐을 한 단락 분량으로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어 두 단락 분량으로 쓴다.' },
        activity: {
          title: '네 갈래 배움과 앞으로의 실천', tool: 'rubric-writing',
          teacher: '"다짐은 크고 멋진 말보다, 내가 정말 할 수 있는 실천이 담길 때 힘이 있어요." 네 갈래 배움에서 하나 이상을 근거로 넣게 한다. "독도를 위해 목숨을 바치겠다"처럼 막연하고 거창한 다짐에는 "다음 주에 할 수 있는 일로 바꾸면 무엇일까요?"라고 묻는다. 다짐 글은 채점하지 않고, 원하는 학생만 나눈다고 알린다.',
          task: '6년의 배움을 정리하고 앞으로의 실천을 다짐 글로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('6년의 배움을 네 갈래 가운데 둘 이상으로 2~3문장 정리하세요.', '위치·자연·역사·국제법 가운데 둘 이상의 갈래로 6년의 배움을 정리하세요.', ['갈래를 둘 이상 썼다', '갈래마다 근거 하나를 넣었다', '사실을 정확히 썼다'], { min: 60, max: 400, sent: [2, 4], must: [['위치', '자연', '역사', '국제법']], starter: '나는 6년 동안 독도의 ~와 ~를 배웠다. 예를 들어 ~', plus: '네 갈래를 모두 썼다', d: 0.4 }),
            RWQ('앞으로의 실천 다짐을 2~3문장으로 쓰세요.', '앞으로 내가 실제로 할 수 있는 실천 두 가지를 다짐으로 쓰세요.', ['실천이 구체적이다', '내가 실제로 할 수 있다', '존중하는 말로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['하겠다', '할 것이다', '해야겠다']], starter: '앞으로 나는 ~하겠다. 또 ~', plus: '언제 할지까지 썼다', d: 0.4 }),
            RWQ('다짐을 한 문장으로 줄여 끝맺으세요.', '내 다짐을 다른 사람에게 말할 수 있는 한 문장으로 줄이세요.', ['한 문장으로 줄였다', '근거와 존중이 함께 드러난다', '거창하지 않고 지킬 수 있다'], { min: 15, max: 120, sent: [1, 1], starter: '나는 ~', d: 0.35, more: { conclude: '좋은 다짐은 배운 근거 위에, 내가 지킬 수 있는 실천을 담아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 다짐 한 문장을 옮겨 쓰세요.' }] },
        notes: '다짐 글은 채점하지 않고 원하는 학생만 나눈다.',
      }),

      M({
        id: 'wrap.screen', type: 'wrap', title: '시안 상영과 피드백',
        method: '시안 상영과 피드백', tool: 'timer', minutes: 8,
        levels: { easy: '한 모둠의 시안을 함께 보고 피드백한다.', base: '세 모둠의 시안을 돌려 보고 근거·출처 점검 칸에 표시한다.', challenge: '모든 모둠의 시안을 보고 모둠마다 피드백 한 줄을 남긴다.' },
        wrap: {
          teacher: '"세 모둠이 1분씩 시안을 보여 주고, 사이 1분 동안 다른 모둠이 근거·출처 점검 칸에 표시하고 피드백을 적어요." 교사가 타이머로 진행한다. 피드백은 \'좋아요\'가 아니라 "이 장면의 출처 자막이 작아요"처럼 고칠 곳을 짚게 한다. 시안을 낸 사람이 아니라 장면을 두고 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '시안 상영', labels: ['상영', '피드백'], timeUnit: 'min', plan: { work: 2, rest: 2, rounds: 1 } }, prompt: '세 모둠이 1분씩 상영하고 사이 1분 피드백하도록 타이머를 맞추고, 시안에서 확인한 것을 표시하세요.', target: { plan: { work: 1, rest: 1, rounds: 3 }, selfCheck: ['근거 장면이 있었다', '근거마다 출처 자막이 있었다', '끝 화면에 자료 목록이 있었다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '시안 피드백으로 가장 쓸모 있는 것은?', options: ['"칙령 장면의 출처 자막을 더 크게 하면 좋겠어요"', '"멋있어요"', '"우리 모둠이 더 잘했어요"'], answer: 0, difficulty: 0.15, explain: '어느 장면의 무엇을 어떻게 고칠지 짚어 줄 때 바로 고칠 수 있어요.' },
            { type: 'short', prompt: '우리 모둠이 받은 피드백 가운데 반영할 것 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '시안 피드백 기록',
          items: [
            { type: 'table', prompt: '돌려 본 시안을 점검하세요(○·△·×).', columns: ['모둠', '근거 장면', '출처 자막', '자료 목록', '피드백'], cells: [['1', '', '', '', ''], ['2', '', '', '', ''], ['3', '', '', '', '']] },
            { type: 'short', prompt: '우리 모둠 시안에서 고칠 점을 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다.',
      }),
      M({
        id: 'wrap.sum', type: 'wrap', title: '다짐 나눔',
        method: '다짐 나눔', tool: 'timer', minutes: 8,
        levels: { easy: '희망하는 학생만 다짐 한 문장을 말한다.', base: '모둠마다 한 사람씩 다짐 한 문장을 말한다.', challenge: '모두가 한 사람씩 다짐 한 문장을 말한다.' },
        wrap: {
          teacher: '"한 사람씩 20초 동안 다짐 한 문장을 말해요. 박수는 다짐이 끝날 때마다 짧게 쳐요." 교사가 타이머로 차례를 진행하고, 말하고 싶지 않은 학생은 건너뛰어도 된다고 먼저 알린다. 다짐이 상대 나라를 겨냥한 말로 흐르면 "우리가 6년 동안 배운 근거와 존중으로 바꿔 말하면 어떨까요?"라고 되묻는다. 마지막에 교사가 6년의 배움을 한 문장으로 정리하며 마무리한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '다짐 나눔', labels: ['다짐', '박수'], plan: { work: 10, rest: 10, rounds: 1 } }, prompt: '한 사람이 20초 다짐하고 5초 박수 치기를 6번 하도록 타이머를 맞추세요.', target: { plan: { work: 20, rest: 5, rounds: 6 } }, difficulty: 0.2 },
            { type: 'choice', prompt: '6년의 독도 학습을 가장 잘 담은 다짐은?', options: ['근거를 바르게 알고, 존중하며 알리겠다', '상대 나라를 이기겠다', '독도 이야기는 이제 그만하겠다'], answer: 0, difficulty: 0.15, explain: '6년 동안 배운 것은 근거와 그것을 존중하며 말하는 법이에요.' },
            { type: 'short', prompt: '오늘 들은 다짐 가운데 마음에 남은 것과 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '6년의 독도 학습을 마치며',
          items: [
            { type: 'short', prompt: '내 다짐 한 문장을 쓰세요.' },
            { type: 'short', prompt: '1년 뒤의 나에게, 독도에 대해 꼭 기억하라고 남길 근거 하나를 쓰세요.' },
          ],
        },
        notes: '교사 진행 정리다. 다짐 말하기는 원하지 않으면 건너뛸 수 있다.',
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
