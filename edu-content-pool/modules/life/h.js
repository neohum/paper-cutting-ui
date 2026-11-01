/* 창체 법정교육 생명존중·자살예방 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 life 고.
 * 근거: 「자살예방 및 생명존중문화 조성을 위한 법률」 제17조, 시행령 제10조의2 — 연 6시간 이상(research-mandatory §1),
 *   고 주제 범위: 위기 개입·마음건강 상담 자원·자해·SNS 위험 정보(내용 묘사 없이 대응 절차만)(research-mandatory §2).
 * 이 영역은 발행 전 사람이 직접 보는 민감 영역이다(framework/BRIEF_LIFE.md). 지킨 것:
 *   · 방법·수단·장소·도구를 쓰지 않는다(암시·그림 포함). 위험 게시물은 '생명을 위협하는 내용'까지만 쓴다. 자살을 해결책처럼 그리거나 원인을 하나로 단정하지 않는다.
 *   · 채점 문항은 모두 가상 인물(지안·유나·도하·은호·시우·준서·소윤·태오·은재·한결·라온·서진·하린·예린·세아·지민 — 직접 지은 가명).
 *     학생 자신의 생각·위기·관계·검사 결과는 묻지 않고, 자기 점검은 걷지 않는 활동지 '혼자 보기' 칸으로만 둔다.
 *   · 위기 대응은 '알아차리고 → 묻고(직접 물어도 괜찮다) → 듣고 → 어른·전문가와 잇기' 틀. 생명과 관련된 비밀은 지키지 않는다. 학생이 혼자 해결하지 않는다.
 *   · 도움 받을 곳은 체계도 고 주제 concepts·brief 의 것(학교 상담실·상담 선생님·보건실·보건소·청소년 상담 기관·병원·지역 정신건강 기관·대학 상담센터·보호자·담임)만.
 *     체계도 고 concepts 에 전화번호가 없어 번호는 모두 '[학교가 확인해 넣는 지역 상담 번호]' 자리로 둔다(112·119·1388 등 번호를 쓰지 않음).
 *   · 모든 모듈 교사 메모에 '위기 신호를 보이는 학생은 학교 위기관리 절차(상담교사·관리자 연계)를 따른다'를 넣었다(LIFE_NOTE).
 *   · 같은 학년군 폭력예방(saf-violence/h.js)의 gatekeeper·life-net 은 읽기만 했다 — 틀(살피기·듣기·잇기, 안전한 소통 원칙)은 맞추고 장면(서아 비밀·하람 단톡방·도윤 메시지·학생회 행사·졸업 연결망)은 되풀이하지 않았다.
 * 수치 자료는 모두 '가상'이다(상대 크기, 화면 제목에 밝힘). 금액·근무 시간·상담 운영 시간도 수업용 가상 값이다.
 * 주제 9개 × 8모듈 = 72모듈(체계도 계획 전부).
 *
 * 계획대로 하지 못한 것(교구 한계 — levels 글은 실제 설정대로 적음):
 *   · 문항 수는 단계마다 같다: '게시물 1개/2개'·'카드 3장/5장'·'근거 1개/3개' 같은 계획은 쉬움 = 문장 틀·카드 줄이기·바로 피드백, 도전 = 기준·카드·갈림길 하나 더로 바꿨다.
 *   · intro 의 levels 는 교사 진행 방식(도입은 시연 하나뿐)이다. source-chart 는 원그래프 하나만 시연하고 신뢰도 막대는 칠판에 그린다. work-stress.intro.chart 도 잠 꺾은선 하나만, 근무 시간은 칠판.
 *   · resource-access.activity.budget·work-stress.activity.clock: 시계는 한 시각만 나타내므로 '일주일' 설계·'시험 기간 조정'은 활동지 표로 옮겼다.
 *   · protective-network.activity.budget: economy 예산 판은 돈(원)만 세어 시간 예산은 블록 나누기·고르기·짝으로 했다.
 *   · resource-access.wrap.card: wordcards 뒤집기(flip)는 영어 발음을 내므로 상황(뜻)↔자원(카드) 짝 맞추기로 했다.
 *   · work-stress.activity.sort: 계획의 '참을 일·말할 일' 칸 이름을 '서로 조율할 일·꼭 말할 일'로 바꿨다(오개념 '부당한 대우는 참는 것'을 칸 이름이 되풀이하지 않게).
 *   · 체계도 brief 의 '[학교가 확인해 넣는 지역 상담 번호]'는 NUM 상수로 그대로 썼다.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   전체(LIFE_NOTE): 학교 위기관리 절차(상담교사·관리자 연계)와 위기 학생 연계 흐름 — 교육부 학생정신건강 자료(학생 자살 위기 대응 안내)
 *   전체: '[학교가 확인해 넣는 지역 상담 번호]' 자리와, 급할 때의 긴급 신고 번호를 화면에 넣을지 여부 — 보건복지부·중앙자살예방센터 상담 전화 안내(학교가 최신 번호를 확인)
 *   mh-literacy.intro.claims·activity.evaluate·wrap.checklist: 정보 판단 기준(작성자·날짜·근거·광고 여부·전문가 확인)과 '바로 낫는다는 약속·판매 링크는 의심 신호' — 교육부 학생정신건강 자료·보건복지부 정신건강 정보 안내
 *   mh-literacy.activity.debate·wrap.checklist: 온라인 자가 진단은 참고일 뿐 진단이 아니며 진단은 전문가가 상황을 함께 보고 한다 — 보건복지부·국립정신건강센터 정신건강 자가검진 안내
 *   mh-literacy.activity.map: 공공기관 안내·학교 상담·의료 전문가의 역할과 한계(학교 상담은 진단·처방을 하지 않고 필요하면 전문가와 잇는다) — 교육부 학교 상담(Wee) 운영 안내·보건복지부
 *   mh-literacy.activity.case·resource-access.activity.confidential·wrap.card: 상담 기록의 보관·공개 범위는 '상담 선생님께 직접 묻기'로만 다룸 — 학교 상담실 운영 지침(교육부)
 *   mh-literacy.activity.evaluate POST_B: '힘든 마음이 2주 넘게 이어지면 상담'이라는 가상 게시물 문구 — 보건복지부 정신건강 정보(우울 안내) / transition-care.activity.plan 예시 글의 '2주 넘게'도 같음
 *   resource-access.activity.confidential: 상담 비밀 보장은 원칙, 생명·안전이 위험할 때는 보호자 등에게 알릴 수 있고 그때도 먼저 학생과 의논한다 — 교육부 학교 상담 윤리·운영 안내, 한국상담심리학회 윤리 강령
 *   resource-access.activity.map·wrap.card, transition-care.activity.map: 곳마다 하는 일(학교 상담실·보건소·청소년 상담 기관·병원 정신건강 진료·지역 정신건강 기관·대학 상담센터)과 이용 대상 일반 설명 — 보건복지부 정신건강복지센터 안내·여성가족부 청소년상담복지센터 안내
 *   harmful-info 전체: 위험 정보 대응(공유·댓글·저장하지 않기 → 플랫폼 신고 → 보호자·교사에게 알리기 → 급하면 연락), '경고용 공유도 2차 확산' — 보건복지부·한국생명존중희망재단 자살보도 권고기준, 방송통신위원회 유해정보 신고 안내
 *   harmful-info.activity.procedure·sort: 학생이 증거용 캡처를 하지 않고 증거 판단은 어른·기관에 맡긴다 — 경찰청·방송통신심의위원회 신고 안내
 *   harmful-info.activity.self-care: 불편한 정보를 본 뒤 자기 돌봄(앱 닫기·쉬기·믿을 어른에게 말하기, 내용을 자세히 되풀이하지 않기) — 중앙자살예방센터·국가트라우마센터 안내
 *   crisis-connect 전체: 생명지킴이(보고·듣고·말하기) 틀 — 위기 신호(작별 같은 말·물건 나눠 주기·잠 변화), '걱정되면 직접 물어도 괜찮다', 생명과 관련된 비밀은 예외, 혼자 두지 않기 — 보건복지부·한국생명존중희망재단 생명지킴이 교육 안내
 *   crisis-connect.activity.steps·script: 어른이 곁에 없을 때 상담 전화로 잇기, 전화로 알릴 내용(누가·신호·지금 상태·도움이 필요한 것) — 중앙자살예방센터 상담 전화 안내
 *   crisis-connect.wrap.limit: 내 몫(알아차림·듣기·혼자 두지 않기)·어른 몫(보호자 연락·학교 절차)·전문가 몫(도움 계획·상담·치료) 구분 — 교육부 학생정신건강 자료
 *   protective-network.intro.data·intro.web·activity.dilemma: 소속감·사회적 지지(정서·정보·실질)가 보호 요인이라는 설명 — 보건복지부·한국생명존중희망재단 자살예방 안내
 *   protective-network.activity.healthy: 건강한 관계·해로운 관계(통제·고립) 신호 일반 설명 — 여성가족부·한국양성평등교육진흥원 관계 교육 자료
 *   stigma-campaign.activity.plan·design, community-proposal.activity.campaign: 안전한 소통 원칙(방법·자세한 내용 말하지 않기, 원인 단정하지 않기, 희망과 도움 경로 함께 알리기) — 보건복지부·한국생명존중희망재단 자살보도 권고기준
 *   stigma-campaign.activity.debate, community-proposal.activity.debate: 학교 마음건강 검사(정서·행동 특성검사 등)의 동의·결과 관리·검사 뒤 상담 연계 — 교육부 학생정서·행동특성검사 운영 지침
 *   work-stress.activity.dilemma·sort·write·wrap.self: '일하는 사람도 존중받고 쉴 권리가 있다', 폭언·임금 미지급·휴식 없는 요구는 말하고 도움을 청할 일, 기록(날짜·시간·들은 말)을 남기기 — 고용노동부 청소년 근로권익 안내(구체 기준·수치는 쓰지 않음)
 *   work-stress.activity.write·wrap.map: '일터 고민 상담 창구'(기관 이름·번호 없이 쓴 일반 표현) — 고용노동부 청소년 근로 상담 안내
 *   work-stress.activity.clock: '하루 7시간 잠'은 연습용 우리 반 약속(의학 기준 아님, 화면·메모에 밝힘) — 질병관리청 국가건강정보포털 청소년 수면 안내
 *   community-proposal.intro.law: 법 근거는 '제17조 학교의 생명존중교육, 시행령 연 6시간 이상'만 쓴다. 조문의 다른 세부 — 국가법령정보센터 원문
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'life', band: '고', topic: `life.h.${topic}`, grades }, o, { id: `life.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(sort): groups = 칸마다 카드 글 목록(글 = 카드 id). 쉬움 = 칸마다 앞 k장, 도전 = hard(칸마다 더할 카드) 덧붙임. traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 차례 문항(order): steps = 바른 차례(글 = id). 쉬움 = 앞 k장, traps = 자리에 놓지 않을 함정 카드(기본·도전)
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
  // 낱말 짝(wordcards match): pairs = [[낱말, 뜻]…]
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
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };
  // 공통 교사 메모 — 이 영역은 발행 전 사람이 직접 본다(BRIEF_LIFE.md)
  const LIFE_NOTE = '생명존중·자살예방 차시다. 방법·수단·장소·도구는 말하지도 쓰지도 않고, 자살을 해결책처럼 말하거나 원인을 하나로 단정하지 않는다. 학생 자신의 자살 생각·자해·위기를 묻거나 발표시키지 않는다(채점 문항은 모두 가상 인물). 위기 신호를 보이는 학생은 학교 위기관리 절차(상담교사·관리자 연계)를 따른다. 수업 전에 상담 선생님과 협의해 두고, 수업 중·뒤에 힘들어 보이는 학생은 따로 살핀다.';
  const NUM = '[학교가 확인해 넣는 지역 상담 번호]';
  const NUM_NOTE = `${NUM} 자리는 수업 전에 학교가 최신 공식 안내로 확인한 번호를 칠판·활동지에 적어 넣는다.`;
  const note = (...xs) => [LIFE_NOTE, ...xs].join(' ');
  // 말풍선 채우기(story fill): slots = [[id, who, label]…], good = [[id, 글]…](slots 차례), bad = 함정 카드 글
  const FILLQ = (prompt, title, slots, good, bad, { d = 0.3, more = {} } = {}) => Object.assign({
    prompt, toolOptions: { mode: 'fill', title, slots: slots.map(([id, who, label]) => ({ id, who, label })), cards: [...good.map(([id, text]) => ({ id, text })).reverse(), ...bad.map((text, i) => ({ id: `x${i + 1}`, text }))] },
    target: { fill: Object.fromEntries(slots.map(([id], i) => [id, good[i][0]])) }, difficulty: d }, more);

  const MODS = [];

  // ======================================================================================================
  // 1. 정신건강 이해력과 정보 판단 (10학년)
  // ======================================================================================================
  {
    const M = MOD('mh-literacy', [10]);
    // 가상 앱 결과를 받은 인물 — 자가 진단의 한계와 다음 걸음
    const APP = { text: '지안이는 SNS 광고에 뜬 무료 마음 검사 앱으로 10문항에 답했다. 결과 화면에 "우울 위험 높음"이 크게 뜬다.', who: '지안', motif: 'cloud', choices: [
      { id: 'self', text: '결과를 진단으로 믿고 혼자 검색을 이어 간다', result: '검색할수록 무서운 글이 늘고 밤늦게까지 휴대폰을 놓지 못한다.', impact: [{ who: '지안', text: '걱정이 더 커진다', tone: -1 }],
        next: { text: '며칠째 잠이 줄었다. 앱이 유료 상담 결제 창을 띄운다.', choices: [
          { id: 'pay', text: '앱 안의 유료 결제를 누른다', result: '누가 운영하는지 모르는 곳에 돈과 정보만 넘어간다.', impact: [{ who: '지안', text: '도움은 받지 못하고 불안만 남는다', tone: -1 }], ending: '앱 결과는 걱정을 키울 수도, 엉뚱한 곳으로 이끌 수도 있다.' },
          { id: 'late', text: '이제라도 보건 선생님께 앱 결과를 보여 준다', result: '보건 선생님이 상담 선생님과 이어 준다.', impact: [{ who: '지안', text: '늦었지만 사람과 이어진다', tone: 1 }], ending: '앱에서 멈추지 않고 사람에게 가면 길이 열린다.' }] } },
      { id: 'ignore', text: '"앱은 다 엉터리"라며 결과도, 요즘 기분도 무시한다', result: '앱은 닫았지만 요즘 힘든 마음은 그대로다.', impact: [{ who: '지안', text: '마음을 살필 기회를 놓친다', tone: 0 }], ending: '앱이 정확하지 않다고 해서 내 마음까지 괜찮은 것은 아니다.' },
      { id: 'ask', text: '결과를 들고 학교 상담 선생님을 찾아간다', result: '상담 선생님이 "앱은 참고일 뿐이야. 요즘 어떻게 지냈는지 들려줄래?"라고 묻는다.', impact: [{ who: '지안', text: '내 이야기를 들어 줄 사람이 생긴다', tone: 1 }],
        next: { text: '상담 선생님이 앱 결과보다 지안이의 요즘 생활(잠·식사·관계)을 함께 살펴보자고 한다.', choices: [
          { id: 'talk', text: '요즘 생활을 솔직하게 이야기한다', result: '상담 선생님이 필요하면 전문가와 이어 주겠다고 한다.', impact: [{ who: '지안', text: '내 상황에 맞는 도움을 찾는다', tone: 1 }],
            next: { text: '몇 주 뒤, 친구가 "그 앱 해 봤는데 나도 우울증이래"라고 말한다.', choices: [
              { id: 'share', text: '"앱은 참고야. 나는 상담 선생님이랑 이야기해 보니 도움이 됐어"라고 말한다', result: '친구가 상담실 위치를 묻는다.', impact: [{ who: '친구', text: '사람에게 가는 길을 안다', tone: 1 }], ending: '앱 결과를 다음 걸음(사람과 이야기하기)으로 이으면 도구가 된다.' },
              { id: 'same', text: '"그 앱 정확하더라, 너도 우울증 맞나 봐"라고 말한다', result: '친구가 결과를 진단처럼 믿고 겁을 먹는다.', impact: [{ who: '친구', text: '근거 없이 불안해진다', tone: -1 }], ending: '자가 진단 결과를 진단처럼 전하면 다른 사람의 걱정도 키운다.' }] } },
          { id: 'only', text: '"앱 결과만 보고 판단해 주세요"라고 한다', result: '상담 선생님이 앱만으로는 판단할 수 없다고 다시 설명한다.', impact: [{ who: '지안', text: '이야기할 기회를 조금 미룬다', tone: 0 }], ending: '판단은 점수가 아니라 사람의 상황을 함께 볼 때 할 수 있다.' }] } }] };
    const APP_R = [{ id: 'limit', text: '자가 진단은 참고일 뿐, 진단은 전문가가 상황을 함께 보고 한다' }, { id: 'person', text: '결과를 들고 믿을 어른·전문가에게 가는 것이 다음 걸음이다' }, { id: 'score', text: '10문항 점수가 높으면 병이 확실하다', why: '짧은 검사는 걱정을 알아채는 데 쓸 수 있을 뿐, 진단을 대신하지 못해요.' }, { id: 'free', text: '무료 앱이니 믿어도 된다', why: '무료인지보다 누가 만들었고 무엇을 근거로 하는지가 중요해요.' }];
    const DEBATE = { text: '토론 수업, 논제는 "자가 진단 앱은 도움이 된다"이다. 찬성 쪽 수빈이 발언을 마치자 반대 쪽이 "앱은 정확하지 않으니 쓸모없다"고 반박한다.', who: '수빈', motif: 'star', choices: [
      { id: 'cond', text: '"정확하지 않다는 점은 인정해. 그래서 결과를 상담으로 잇는 경우에만 유용하다고 봐"라고 답한다', result: '반대 쪽이 "그 조건이면 동의할 수 있다"며 질문을 이어 간다.', impact: [{ who: '토론', text: '근거가 더 단단해진다', tone: 1 }],
        next: { text: '반대 쪽이 "그럼 앱이 상담으로 잇지 않으면?"이라고 묻는다.', choices: [
          { id: 'criteria', text: '"믿을 만한 앱의 기준(만든 곳·근거·상담 연결 안내)을 함께 정하자"고 제안한다', result: '두 쪽이 앱을 고르는 기준 목록을 함께 만든다.', impact: [{ who: '토론', text: '조건부 결론에 닿는다', tone: 1 }],
            next: { text: '사회자가 마지막으로 결론 한 문장을 요청한다.', choices: [
              { id: 'final', text: '"기준을 갖춘 앱을 참고로 쓰고, 결과는 사람과 이야기하는 데 쓰면 도움이 된다"', result: '청중이 끄덕이며 결론을 받아 적는다.', impact: [{ who: '청중', text: '쓸 때의 조건을 안다', tone: 1 }], ending: '조건을 밝힌 결론은 찬반을 넘어 실제로 쓸 수 있는 답이 된다.' },
              { id: 'win', text: '"그러니까 찬성이 이겼다"고만 말한다', result: '결론에 조건이 빠져 청중이 무엇을 할지 모른다.', impact: [{ who: '청중', text: '쓸 수 있는 결론을 얻지 못한다', tone: 0 }], ending: '이기는 말보다 조건을 밝힌 결론이 듣는 사람에게 남는다.' }] } },
          { id: 'repeat', text: '같은 주장을 더 큰 목소리로 되풀이한다', result: '토론이 말다툼처럼 흐른다.', impact: [{ who: '토론', text: '새 근거가 나오지 않는다', tone: -1 }], ending: '반박에는 목소리가 아니라 근거로 답한다.' }] } },
      { id: 'deny', text: '"앱은 정확하다"고 우긴다', result: '반대 쪽이 앱 회사 광고 글을 근거로 내민 점을 짚는다.', impact: [{ who: '수빈', text: '근거가 약해진다', tone: -1 }], ending: '상대의 맞는 지적을 부정하면 내 주장도 힘을 잃는다.' },
      { id: 'quit', text: '반박을 듣고 아무 말도 하지 않는다', result: '찬성 쪽 근거가 그대로 묻힌다.', impact: [{ who: '토론', text: '생각을 견줄 기회가 사라진다', tone: 0 }], ending: '반박에 답하지 않으면 생각을 다듬을 기회도 놓친다.' }] };
    const DEBATE_R = [{ id: 'admit', text: '상대의 맞는 지적은 인정하고 조건을 붙여 답한다' }, { id: 'criteria', text: '판단 기준을 세우면 찬반이 함께 쓸 결론에 닿는다' }, { id: 'loud', text: '반박은 단호하게 되풀이할수록 이긴다', why: '같은 말을 되풀이해도 근거는 늘지 않아요.' }];
    // 가상 게시물 둘
    const POST_A = '가상 게시물 A: "의사도 모르는 비밀! 이 영양제 하나면 우울이 2주 만에 사라져요. 후기 1만 개, 지금 링크로 50% 할인." (작성자: 판매 계정, 날짜 없음)';
    const POST_B = '가상 게시물 B: "잠을 일정한 시간에 자는 것은 기분 관리에 도움이 될 수 있습니다. 힘든 마음이 2주 넘게 이어지면 학교 상담실이나 전문가와 이야기해 보세요." (작성자: 공공기관 안내 계정, 날짜 있음)';
    const CHECKS = [['who', '누가 썼는지(작성자) 확인하기', true], ['date', '언제 쓴 글인지(날짜) 확인하기', true], ['basis', '근거(자료·전문가 확인)가 있는지 보기', true], ['ad', '광고·판매 목적이 있는지 보기', true], ['expert', '전문가·믿을 어른에게 물어보기', true], ['likes', '좋아요 수가 많으면 믿기', false], ['fast', '"바로 낫는다"는 말이면 믿기', false]];
    const SCHOOL = [{ name: '우리 교실', icon: 'school', at: [1, 1] }, { name: '상담실', icon: 'dot', at: [4, 1] }, { name: '보건실', icon: 'hospital', at: [3, 3] }, { name: '교무실', icon: 'office', at: [0, 3] }, { name: '도서관', icon: 'library', at: [5, 3] }];

    MODS.push(
      M({
        id: 'intro.claims', type: 'intro', title: '이 주장, 얼마나 믿을까?',
        method: '정신건강 정보 진위 판단', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 주장 카드 3장을 하나씩 보이며 학급이 함께 눈금을 고른다.', base: '주장 카드 5장마다 각자 눈금을 고르고, 시연으로 판매 글의 눈금을 확인한다.', challenge: '눈금을 고른 뒤 판단 기준(출처·근거·이익 관계) 가운데 무엇을 보았는지 말한다.' },
        intro: {
          teacher: '"마음이 힘들 때 검색하면 이런 글이 나와요. \'이 영상 하나만 보면 우울이 사라진다.\' 여러분은 1에서 5 가운데 얼마나 믿나요?" 손가락으로 숫자를 들게 한 뒤 시연 단추로 판매 링크가 붙은 글이 \'믿기 어렵다\' 쪽으로 가는 모습을 보여 준다. "조회 수가 많으니 맞는 말 아닌가요?"라는 말이 나오면 "조회 수는 많이 본 사람 수일까요, 맞는 말이라는 증거일까요?"라고 되묻는다. 오늘은 마음에 관한 정보를 출처·근거·누가 이익을 보는지로 따져 보고, 믿을 정보는 결국 사람(전문가·상담)에게로 이어진다는 것을 배운다고 밝힌다.',
          student: '마음건강에 관한 주장 카드를 하나씩 보고, 얼마나 믿을 만한지 1~5 눈금으로 골라 보세요. 왜 그렇게 골랐는지 출처·근거·누가 이익을 보는지로 말해 보세요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '판매 링크가 붙은 글: "이 영상 하나만 보면 우울이 사라진다"', feeling: '걱정', steps: 5, scaleLabels: { 1: '믿기 어렵다', 5: '믿을 만하다' }, after: '바로 낫는다는 약속, 판매 링크, 출처 없음 — 믿기 어려운 신호예요.' }, sequence: [{ level: 1 }] },
          art: { draw: 'a paper phone screen showing a flashy post with a sparkling promise and a shopping link, a paper magnifying glass held over it, a five-step paper scale from doubt to trust beside it', banner: '얼마나 믿을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: note('주장 카드는 모두 가상이다. 실제 상품·영상·채널 이름을 쓰지 않는다. 학생이 실제로 본 정보를 발표하게 하지 않는다.'),
      }),
      M({
        id: 'intro.source-chart', type: 'intro', title: '많이 찾는 곳과 믿는 곳',
        method: '정보를 얻는 곳 자료', tool: 'chart', minutes: 7,
        levels: { easy: '원그래프에서 가장 큰 조각을 함께 읽는다.', base: '원그래프를 읽은 뒤 교사가 칠판에 보이는 가상 신뢰도 막대와 견준다.', challenge: '많이 찾는 곳과 믿을 만한 곳이 다른 까닭을 짝과 해석해 말한다.' },
        intro: {
          teacher: '"가상 학급 설문이에요. 고민이 생기면 마음건강 정보를 주로 어디서 찾나요?" 시연 단추로 가장 큰 조각(SNS·영상)을 고르는 모습을 보여 준다. 이어 칠판에 같은 설문의 \'믿을 만하다\' 응답(전문가·기관이 가장 높음)을 막대로 그려 견주게 한다. "다들 SNS에서 찾으니까 그게 제일 정확하겠죠"라는 말이 나오면 "가장 많이 가는 곳과 가장 믿는 곳이 같은가요?"라고 되묻는다. 자료는 가상이며, 실제 조사 결과가 필요하면 최신 공식 자료로 확인해야 한다는 점도 짚는다.',
          student: '가상 학급 설문 원그래프에서 마음건강 정보를 가장 많이 찾는 곳을 읽고, 칠판의 신뢰도 막대와 견주어 무엇이 다른지 말해 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '마음건강 정보를 주로 찾는 곳(가상 학급 설문)', unit: '%', data: [['SNS·영상', 45], ['포털 검색', 30], ['친구', 15], ['전문가·기관', 10]], question: '가장 큰 조각은?', choices: ['SNS·영상', '포털 검색', '친구', '전문가·기관'], showValues: true }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart with four slices beside a paper bar chart, a paper student comparing the two with a pencil, small icons of a phone, a search bar, two friends and a counselor door', banner: '많이 찾는 곳, 믿는 곳', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: note('설문 값은 모두 수업용 가상 값이다(화면 제목에 밝힘). 칠판 신뢰도 막대 예: 전문가·기관 > 친구 > 포털 > SNS(가상). 실제 통계를 쓰려면 교사가 최신 공식 자료(교육부 학생정신건강 자료 등)를 확인해 넣는다.'),
      }),

      M({
        id: 'activity.evaluate', type: 'activity', title: '가상 게시물 두 개 평가하기',
        method: '정보 출처 평가표', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '게시물마다 문장 틀("이 글은 ~가 썼고, 근거는 ~")을 보고 결론을 쓴다.', base: '틀 없이 게시물 두 개의 평가 결론을 각각 3문장으로 쓰고 기준표로 점검한다.', challenge: '기준 하나(반박 근거)가 더 붙어, 믿기 어려운 글에 대한 반박 근거까지 쓴다.' },
        activity: {
          title: '게시물 평가 결론 쓰기', tool: 'rubric-writing',
          teacher: '"두 게시물 모두 \'마음\'에 관한 글이지만 하나는 판매 계정, 하나는 공공기관 안내예요. 출처·근거·작성 의도 세 칸으로 따져 볼까요?" 쓰기 전에 기준표를 함께 읽는다. "후기가 1만 개면 효과가 있다는 거잖아요"라는 학생에게 "후기는 누가 고르고 누가 올렸을까요? 판매하는 쪽이 나쁜 후기를 남겨 둘까요?"라고 되묻는다. 공공기관 글도 \'무조건 맞다\'가 아니라 날짜와 근거를 확인해서 믿는 것이라는 점을 짚는다.',
          task: '가상 게시물 A·B를 출처·근거·작성 의도로 평가하고 결론을 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 게시물 A를 출처·근거·작성 의도로 평가하고 결론을 3문장으로 쓰세요.', POST_A, ['누가 썼는지(출처)를 짚었다', '근거가 있는지 따졌다', '판매 같은 작성 의도를 짚었다'], { min: 50, max: 350, sent: [2, 4], must: [['출처', '작성자', '판매', '계정']], starter: '이 글은 ~가 썼다. 근거는 ~. 그래서 나는 ~', plus: '이 글을 믿는 사람에게 할 반박 근거를 썼다', d: 0.35 }),
            RWQ('가상 게시물 B를 같은 기준으로 평가하고 결론을 3문장으로 쓰세요.', POST_B, ['누가 썼는지(출처)를 짚었다', '날짜·근거를 확인했다', '이 정보로 할 다음 행동을 썼다'], { min: 50, max: 350, sent: [2, 4], must: [['출처', '기관', '날짜', '근거']], starter: '이 글은 ~가 썼다. 날짜와 근거는 ~. 그래서 나는 ~', plus: '이 글에도 남는 한계(모든 사람에게 맞지는 않음 등)를 썼다', d: 0.35 }),
            RWQ('두 게시물을 견주어, 마음건강 정보를 믿을 때의 내 기준을 2~3문장으로 쓰세요.', '게시물 A와 B를 견주어, 마음건강 정보를 믿기 전에 내가 확인할 기준을 쓰세요.', ['두 게시물의 차이를 하나 이상 짚었다', '내가 확인할 기준을 썼다', '믿기 어려울 때 물어볼 사람을 썼다'], { min: 40, max: 300, sent: [2, 3], starter: 'A와 B의 차이는 ~. 앞으로 나는 ~를 확인하고, ~에게 물어보겠다.', plus: '기준을 지키기 어려운 상황(급할 때 등)에 할 일을 썼다', sample: 'A는 판매 계정이 근거 없이 바로 낫는다고 약속했고, B는 공공기관이 날짜와 함께 상담을 권했다. 앞으로 나는 작성자·날짜·광고 여부를 먼저 확인하겠다. 그래도 헷갈리면 상담 선생님께 물어보겠다.', d: 0.4, more: { conclude: '출처·근거·작성 의도를 보면 같은 \'마음 이야기\'도 무게가 달라요. 헷갈릴 때는 사람(전문가·상담)에게 물어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 게시물을 세 기준으로 비교해 쓰세요.', columns: ['기준', '게시물 A', '게시물 B'], cells: [['출처(누가)', '', ''], ['근거', '', ''], ['작성 의도', '', '']] }] },
        notes: note('게시물은 수업용 가상 글이다. 실제 상품·계정 이름을 넣지 않는다.'),
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '자가 진단 앱 찬반 토론',
        method: '찬반 토론: 자가 진단 앱', tool: 'dilemma', minutes: 18,
        levels: { easy: '앱 결과 갈림길과 토론 갈림길 모두 첫 갈림길까지 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가 조건부 결론(어떤 경우 앱이 유용한가)에 닿고 근거를 고른다.' },
        activity: {
          title: '앱 결과와 토론 갈림길', tool: 'dilemma',
          teacher: '"\'자가 진단 앱은 도움이 된다\', 여러분은 찬성인가요, 반대인가요? 오늘은 편을 정하기 전에 앱 결과를 받은 지안이의 길을 먼저 따라가 봐요." 선택마다 지안이에게 생긴 영향을 소리 내어 읽게 한다. "결과가 높게 나오면 그게 진단이죠"라는 학생에게 "10문항이 지안이의 잠·식사·관계를 다 알 수 있을까요?"라고 되묻는다. 토론 갈림길에서는 상대의 맞는 지적을 인정하고 조건을 붙이는 답이 왜 더 강한지 짚고, \'어떤 경우에 유용한가\'라는 조건부 결론을 학급이 함께 만든다.',
          task: '자가 진단 앱 결과와 토론 반박의 갈림길을 따라가며 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지안이가 앱 결과를 받은 뒤의 선택을 따라가고, 알맞은 길과 근거를 고르세요.', APP, [['ask', 'talk', 'share']], APP_R, ['limit', 'person'], { d: 0.4 }),
            EXPLOREQ('\'혼자 검색한다\' 길과 \'앱은 다 엉터리\' 길도 끝까지 가 보고 지안이에게 생긴 영향을 견주세요.', APP, APP_R, ['다른 길의 끝 장면을 확인했다', '사람과 이어졌는지 견주었다'], { d: 0.35 }),
            DILQ('토론에서 "앱은 정확하지 않으니 쓸모없다"는 반박을 받았어요. 근거로 답하는 길을 고르세요.', DEBATE, [['cond', 'criteria', 'final']], DEBATE_R, ['admit', 'criteria'], { d: 0.4, more: { conclude: '자가 진단 앱은 진단이 아니라 참고예요. 결과를 사람과 이야기하는 데 쓰는 경우에 도움이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"자가 진단 앱은 ___한 경우에 도움이 된다"는 조건부 결론을 근거 하나와 함께 쓰세요.' }] },
        notes: note('특정 앱 이름을 쓰지 않는다. 학생이 실제로 해 본 검사 결과를 말하게 하지 않는다.'),
      }),
      M({
        id: 'activity.map', type: 'activity', title: '근거 있는 정보 지도 그리기',
        method: '근거 있는 정보 지도', tool: 'mindmap', minutes: 17,
        levels: { easy: '정보 카드 6장을 세 가지에 달며 바로 피드백을 받는다.', base: '정보 카드 9장을 공공기관 안내·학교 상담·의료 전문가 가지에 달고, 정보마다 한계를 짝짓는다.', challenge: '헷갈리는 카드 2장이 더해진 판에서 달고, 활동지에 가지마다 한계를 덧붙인다.' },
        activity: {
          title: '정보 가지와 한계 잇기', tool: 'mindmap',
          teacher: '"근거 있는 정보는 어디서 얻을 수 있을까요? 공공기관 안내, 학교 상담, 의료 전문가 — 세 가지에서 얻는 정보가 서로 달라요." 카드를 달 때마다 "이 정보는 누가 책임지고 말해 주나요?"라고 묻는다. \'유명인 영상\'을 의료 전문가 가지에 넣는 학생에게 "말하는 사람이 유명한 것과 전문가인 것은 같을까요?"라고 되묻는다. 믿을 만한 곳의 정보에도 한계(내 상황을 다 모름 등)가 있어 결국 사람과 이야기하는 것이 필요하다는 점을 짚는다.',
          task: '정보 카드를 세 가지에 달고, 정보마다 한계를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('정보 카드를 얻을 수 있는 곳 가지에 다세요.', ['공공기관 안내', '학교 상담', '의료 전문가'], [
              ['마음건강 관리에 관한 일반 안내 자료', '지역에서 이용할 수 있는 상담 기관 목록', '위기 때 연락할 곳 안내'],
              ['요즘 내 학교생활 고민을 함께 정리하기', '친구 관계 갈등을 풀 방법 찾기', '필요하면 전문가와 이어 주기'],
              ['증상을 살펴 진단하기', '치료가 필요한지 판단하기', '약이 필요한지 정하기'],
            ], { k: 2, hard: [['청소년 마음건강 교육 자료'], ['진로 고민과 스트레스 함께 다루기'], []], traps: ['구독자 많은 유명인의 영상'], d: 0.3, opt: { topic: '근거 있는 정보' } }),
            MATCHQ('정보를 얻는 곳마다 남는 한계를 짝지으세요.', [['공공기관 안내', '모든 사람에게 맞춘 일반 정보라 내 상황을 다 담지 못한다'], ['학교 상담', '진단이나 약 처방은 하지 않고 필요하면 전문가와 잇는다'], ['의료 전문가', '예약과 시간이 필요해 바로 만나기 어려울 수 있다']], { k: 2, extra: ['한계가 전혀 없다'], d: 0.35, opt: { topic: '정보의 한계' }, more: { hints: ['그곳이 할 수 있는 일과 하지 않는 일을 떠올려 보세요.'] } }),
            PICKQ('근거 있는 정보의 특징만 고르세요.', ['누가 책임지고 썼는지 밝혀져 있다', '언제 쓴 정보인지 날짜가 있다', '필요하면 사람(상담·전문가)과 이어 준다'], ['바로 낫는다고 약속한다', '좋아요 수가 많다', '상품 구매 링크가 붙어 있다'], { d: 0.3, opt: { basket: '근거 있는 정보' }, more: { conclude: '근거 있는 정보는 출처와 날짜가 있고, 결국 사람에게 이어 줘요. 바로 낫는다는 약속과 판매 링크는 의심 신호예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 곳에서 얻을 정보와 그 한계를 쓰세요.', columns: ['얻는 곳', '얻을 정보', '한계'], cells: [['공공기관 안내', '', ''], ['학교 상담', '', ''], ['의료 전문가', '', '']] }] },
        notes: note('세 곳의 역할 구분은 일반 설명이다(사람 확인 목록). 학교 상담실이 하는 일과 이용 방법은 우리 학교 기준으로 교사가 보탠다.'),
      }),
      M({
        id: 'activity.case', type: 'activity', title: '잘못된 정보를 믿는 친구와 대화',
        method: '친구에게 정보 전하기', tool: 'story', minutes: 18,
        levels: { easy: '말풍선 카드를 놓으면 바로 맞는지 알려 주고, 대화 장면 3장을 차례로 놓는다.', base: '대화 장면 4장을 차례로 놓고, 빈 말풍선 3개를 채우고, 피해야 할 말을 고른다.', challenge: '말풍선 칸이 하나 더 붙어 상담 연결 말까지 채운다.' },
        activity: {
          title: '친구에게 정보 전하는 대화', tool: 'story',
          teacher: '"가상 친구 유나가 SNS에서 \'상담받으면 기록이 남아 대학 갈 때 불리하다\'는 글을 보고 상담을 안 가겠대요. 어떻게 말하면 유나가 들을까요?" 말풍선을 채우기 전에 "틀렸다고 바로 말하는 것과 같이 확인해 보자고 하는 것은 어떻게 다를까요?"라고 묻는다. "그 글 거짓말이야"로만 끝내는 학생에게 "그 말을 들은 유나는 다음에 어디로 갈까요?"라고 되묻는다. 상담 기록의 관리 방식은 상담 선생님께 직접 물어볼 수 있다는 것, 친구의 걱정을 먼저 인정하는 것이 대화의 시작이라는 점을 짚는다.',
          task: '유나와의 대화 장면을 차례로 놓고 빈 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            ORDERQ('유나와 나눈 대화 장면을 차례로 놓으세요.', ['유나가 SNS 글을 보여 주며 상담을 안 가겠다고 한다', '나는 유나의 걱정을 먼저 들어 준다', '함께 글의 출처와 날짜를 확인한다', '상담 선생님께 기록이 어떻게 관리되는지 같이 물어보자고 한다'], { k: 3, d: 0.25, opt: { title: '유나와의 대화(가상)' } }),
            FILLQ('유나와의 대화에서 빈 말풍선을 알맞은 말로 채우세요.', '유나와의 대화(가상)', [['b1', '나', '유: "상담받으면 기록 남아서 불리하대." / 나: ___'], ['b2', '나', '유: "다들 그렇게 말하던데?" / 나: ___'], ['b3', '나', '유: "그래도 좀 무서워." / 나: ___']], [['g1', '"그 글 보고 걱정됐구나. 어디서 본 글이야?"'], ['g2', '"누가 언제 쓴 글인지 같이 확인해 볼까?"'], ['g3', '"걱정되는 건 당연해. 상담 선생님께 직접 물어보자"']], ['"그런 거 믿는 네가 이상해"', '"그럼 그냥 상담 가지 마"'], { d: 0.35,
              more: { levels: { challenge: { prompt: '유나와의 대화에서 빈 말풍선 네 개를 채우세요(상담 연결 말까지).', toolOptions: { slots: [{ id: 'b1', who: '나', label: '유: "상담받으면 기록 남아서 불리하대." / 나: ___' }, { id: 'b2', who: '나', label: '유: "다들 그렇게 말하던데?" / 나: ___' }, { id: 'b3', who: '나', label: '유: "그래도 좀 무서워." / 나: ___' }, { id: 'b4', who: '나', label: '유: "혼자 가기는 싫어." / 나: ___' }], cards: [{ id: 'g4', text: '"점심시간에 내가 상담실 앞까지 같이 가 줄게"' }, { id: 'g3', text: '"걱정되는 건 당연해. 상담 선생님께 직접 물어보자"' }, { id: 'g2', text: '"누가 언제 쓴 글인지 같이 확인해 볼까?"' }, { id: 'g1', text: '"그 글 보고 걱정됐구나. 어디서 본 글이야?"' }, { id: 'x1', text: '"그런 거 믿는 네가 이상해"' }, { id: 'x2', text: '"그럼 그냥 상담 가지 마"' }] }, target: { fill: { b1: 'g1', b2: 'g2', b3: 'g3', b4: 'g4' } } } } } }),
            PICKQ('잘못된 정보를 믿는 친구에게 피해야 할 말만 고르세요.', ['"그런 걸 믿다니 바보 같아"', '"검색하면 다 나와, 네가 알아서 해"'], ['"같이 출처를 확인해 볼까?"', '"걱정되는 마음은 이해해"'], { d: 0.3, opt: { basket: '피해야 할 말' }, more: { conclude: '잘못된 정보를 믿는 친구에게는 걱정을 먼저 인정하고, 함께 확인하고, 사람(상담)에게 같이 가자고 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '유나에게 보낼 메시지를 "걱정 인정 → 함께 확인 → 상담 연결" 차례로 세 문장 쓰세요.' }] },
        notes: note('상담 기록의 보관·공개 범위는 학교마다 안내가 다를 수 있어 \'상담 선생님께 직접 묻기\'로만 다룬다. 우리 학교 상담실의 안내를 미리 확인해 두면 질문에 답할 수 있다.'),
      }),

      M({
        id: 'wrap.checklist', type: 'wrap', title: '정보 판단 체크리스트',
        method: '정보 판단 체크리스트', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 가운데 출처·날짜·근거 세 가지를 함께 읽고 표시한다.', base: '점검 항목 7개 가운데 정보를 믿기 전에 할 일 5개만 스스로 고른다.', challenge: '활동지에서 최근 본 기사·글 하나(내용 말고 형식만)에 체크리스트를 적용해 본다.' },
        wrap: {
          teacher: '"오늘 만든 기준을 체크리스트로 정리해요. 마음건강 정보를 믿기 전에 할 일만 골라 보세요." 함께 표시한 뒤 \'좋아요 수가 많으면 믿기\'를 고른 학생이 있으면 "좋아요는 무엇을 세는 숫자일까요?"라고 되묻는다. 체크리스트는 혼자 정보를 판단하는 도구이고, 그래도 헷갈리면 사람에게 묻는 것이 마지막 칸이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '마음건강 정보를 믿기 전에', items: CHECKS.map(([id, text]) => ({ id, text })) }, prompt: '마음건강 정보를 믿기 전에 할 일만 골라 표시하세요.', target: { checklist: CHECKS.filter((x) => x[2]).map((x) => x[0]) }, difficulty: 0.2 },
            { type: 'choice', prompt: '온라인 자가 진단 결과에 대한 말로 가장 알맞은 것은?', options: ['결과가 높게 나오면 그 병이 확실하다', '참고로 쓰고, 걱정되면 결과를 들고 전문가·상담 선생님과 이야기한다', '정확하지 않으니 내 기분도 신경 쓸 필요 없다'], answer: 1, difficulty: 0.2, explain: '자가 진단은 걱정을 알아채는 참고일 뿐, 진단은 전문가가 상황을 함께 보고 해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '정보 판단 체크리스트',
          items: [
            { type: 'check', prompt: '마음건강 정보를 볼 때 이번 주에 해 볼 확인에 표시하세요.', options: ['작성자 확인', '날짜 확인', '근거 확인', '광고·판매 여부 확인', '전문가·상담 선생님께 묻기'] },
            { type: 'short', prompt: '최근 본 건강 정보 하나(내용 말고 형식)를 떠올려 체크리스트로 따져 본 결과를 한 문장으로 쓰세요.' },
          ],
          easy: { note: '출처(누가) · 날짜(언제) · 근거(무엇으로) 세 칸부터 봐요.', items: [{ type: 'check', prompt: '정보를 믿기 전에 볼 것에 표시하세요.', options: ['누가 썼나', '언제 썼나', '근거가 있나'] }] },
        },
        notes: note(),
      }),
      M({
        id: 'wrap.connect', type: 'wrap', title: '정보 다음은 사람',
        method: '정보 다음은 사람', tool: 'map', minutes: 7,
        levels: { easy: '학교 지도에서 상담실 한 곳에 핀을 꽂는다.', base: '상담실에 핀을 꽂고, 몸이 먼저 힘들 때 갈 곳(보건실)을 고른다.', challenge: '활동지에 학교 밖 자원과 [학교가 확인해 넣는 지역 상담 번호] 칸을 채운다.' },
        wrap: {
          teacher: '"정보를 잘 따져도 마지막은 사람이에요. 우리 학교에서 마음 이야기를 할 수 있는 곳은 어디인가요?" 지도에 핀을 꽂은 뒤 우리 학교 상담실의 실제 위치와 이용 시간을 칠판에 적는다. "상담실은 큰 문제가 있을 때만 가는 곳"이라는 말이 나오면 "몸이 조금 아플 때도 보건실에 가듯, 마음이 조금 무거울 때도 갈 수 있을까요?"라고 되묻는다. 학교 밖 상담 번호는 학교가 확인한 번호를 함께 적는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 학교 도움 지도(가상)', places: SCHOOL }, prompt: '정보를 따져 봐도 마음이 계속 무거울 때 이야기하러 갈 곳에 핀을 꽂으세요.', target: { place: '상담실' }, difficulty: 0.15 },
            { type: 'choice', prompt: '잠을 못 자 두통이 이어져 몸이 먼저 힘들 때 학교에서 먼저 갈 곳으로 알맞은 것은?', options: ['보건실', '도서관', '교무실'], answer: 0, difficulty: 0.15, explain: '몸이 먼저 힘들면 보건실에 가고, 필요하면 보건 선생님이 상담 선생님과 이어 줄 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '정보 다음은 사람',
          items: [
            { type: 'table', prompt: '우리 학교 안팎에서 마음 이야기를 할 곳을 쓰세요.', columns: ['곳', '위치·이용 시간', '연락 방법'], cells: [['학교 상담실', '', ''], ['보건실', '', ''], ['학교 밖 상담', '', NUM]] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '정보를 따져 본 다음 걸음은 믿을 ___과 이야기하는 것이다.', answer: '사람(어른·전문가)' },
          ],
        },
        notes: note(NUM_NOTE, '지도는 가상 평면이다. 우리 학교 상담실·보건실의 실제 위치를 함께 알려 준다.'),
      }),
    );
  }

  // ======================================================================================================
  // 2. 마음건강 상담 자원과 이용 장벽 (10학년)
  // ======================================================================================================
  {
    const M = MOD('resource-access', [10]);
    const BARRIER = [['창피할까 봐', 9], ['비밀이 새어 나갈까 봐', 8], ['시간이 없어서', 6], ['효과가 있을지 의심돼서', 5]];
    const BARRIER_T = '상담을 망설이는 까닭(가상 학교 설문, 상대 크기)';
    const CASE = [{ id: 'c1', text: '쉬는 시간, 상담실 앞까지 걸어간다', motif: 'house' }, { id: 'c2', text: '복도에서 같은 반 친구와 눈이 마주친다', motif: 'cloud' }, { id: 'c3', text: '"여기 왜 왔어?" 소리를 들을까 걱정된다', motif: 'cloud' }, { id: 'c4', text: '문 앞에서 돌아서 교실로 간다', motif: 'leaf' }];
    // 비밀 보장과 그 한계 — 상담을 신청한 인물(가상)
    const CONF = { text: '도하는 처음으로 상담을 신청하며 "제가 한 말은 부모님께 절대 말하지 말아 주세요"라고 한다. 상담 선생님이 상담의 비밀 보장 원칙과 예외를 먼저 설명하겠다고 한다.', who: '도하', motif: 'house', choices: [
      { id: 'leave', text: '예외가 있다는 말에 "그럼 안 할래요"라며 일어선다', result: '도하는 상담실을 나오고, 고민은 다시 혼자의 몫이 된다.', impact: [{ who: '도하', text: '도움 받을 기회를 미룬다', tone: -1 }],
        next: { text: '며칠 뒤에도 고민이 계속된다. 상담 선생님이 복도에서 "언제든 다시 와도 돼"라고 인사한다.', choices: [
          { id: 'back', text: '다시 찾아가 예외가 무엇인지 물어본다', result: '선생님이 차근차근 설명해 준다.', impact: [{ who: '도하', text: '다시 도움과 이어진다', tone: 1 }], ending: '한 번 돌아섰어도 다시 물어보면 길이 이어진다.' },
          { id: 'never', text: '예외가 무서워 다시는 가지 않는다', result: '고민을 나눌 곳이 사라진다.', impact: [{ who: '도하', text: '혼자 견딘다', tone: -1 }], ending: '예외를 모른 채 피하면 대부분의 비밀이 지켜진다는 사실도 놓친다.' }] } },
      { id: 'ask', text: '"예외가 뭔지 알려 주세요"라고 묻는다', result: '선생님이 "상담 내용은 비밀로 지켜. 다만 네 생명이나 안전이 위험할 때는 보호자 등과 함께 너를 지켜야 해. 그때도 먼저 너와 의논할게"라고 말한다.', impact: [{ who: '도하', text: '어디까지 지켜지는지 안다', tone: 1 }],
        next: { text: '도하는 고민의 일부만 말할지, 솔직하게 다 말할지 망설인다.', choices: [
          { id: 'honest', text: '원칙과 예외를 알았으니 솔직하게 이야기한다', result: '선생님이 도하에게 맞는 다음 걸음을 함께 정한다.', impact: [{ who: '도하', text: '내 상황에 맞는 도움을 받는다', tone: 1 }],
            next: { text: '상담이 끝날 무렵, 선생님이 "이 내용 중에 보호자와 나누면 좋을 부분이 있는지 같이 생각해 볼까?"라고 묻는다.', choices: [
              { id: 'decide', text: '무엇을, 누가, 어떻게 전할지 선생님과 함께 정한다', result: '도하가 동의한 방식으로 보호자와 이야기할 계획이 생긴다.', impact: [{ who: '도하', text: '내 뜻이 존중받는다', tone: 1 }], ending: '비밀 보장은 원칙이고, 예외가 있을 때도 학생과 함께 의논한다.' },
              { id: 'refuse', text: '"아무것도 안 돼요"라고만 한다', result: '선생님이 생명·안전 위험이 아니라면 도하의 뜻을 존중하겠다고 한다.', impact: [{ who: '도하', text: '뜻은 지켜지지만 함께할 사람은 그대로 적다', tone: 0 }], ending: '예외가 아닌 이야기는 내 뜻대로 지켜진다.' }] } },
          { id: 'part', text: '불안해서 고민의 일부만 말한다', result: '선생님이 들은 만큼만 도울 수 있어 이야기가 겉돈다.', impact: [{ who: '도하', text: '도움이 반쪽이 된다', tone: 0 }], ending: '원칙을 알고도 숨기면 도움도 그만큼 작아진다.' }] } },
      { id: 'lie', text: '"사실 별일 아니에요"라고 둘러댄다', result: '상담이 짧게 끝나고 진짜 고민은 꺼내지 못한다.', impact: [{ who: '도하', text: '도움과 멀어진다', tone: -1 }], ending: '비밀이 걱정될 때는 숨기기보다 원칙을 먼저 물어본다.' }] };
    const CONF_R = [{ id: 'rule', text: '상담 내용은 원칙적으로 비밀이 지켜진다' }, { id: 'except', text: '생명·안전이 위험할 때만 보호자 등에게 알릴 수 있고, 그때도 먼저 의논한다' }, { id: 'record', text: '상담하면 무조건 기록이 남아 불이익을 받는다', why: '기록이 어떻게 관리되는지는 상담 선생님께 직접 물어볼 수 있어요. 걱정만으로 도움을 미루지 않아요.' }, { id: 'all', text: '예외가 있으니 아무것도 지켜지지 않는다', why: '예외는 생명·안전이 걸린 좁은 경우예요. 대부분의 이야기는 비밀이 지켜져요.' }];
    const AREA = [{ name: '우리 학교', icon: 'school', at: [1, 1], legend: '학교 상담실' }, { name: '보건소', icon: 'office', at: [4, 1], legend: '보건소' }, { name: '청소년 상담 기관', icon: 'library', at: [4, 3], legend: '청소년 상담 기관' }, { name: '병원', icon: 'hospital', at: [0, 3], legend: '병원(정신건강 진료)' }, { name: '우리 집', icon: 'house', at: [2, 3] }, { name: '공원', icon: 'park', at: [5, 0] }];

    MODS.push(
      M({
        id: 'intro.barrier-poll', type: 'intro', title: '상담을 망설이는 까닭 자료',
        method: '상담을 망설이는 까닭 자료', tool: 'chart', minutes: 7,
        levels: { easy: '막대 끝 값을 보며 가장 긴 막대를 함께 읽는다.', base: '1위 장벽이 왜 생기는지 해석해 말한다.', challenge: '장벽마다 줄일 아이디어를 한 가지씩 칠판에 붙인다.' },
        intro: {
          teacher: '"가상의 학교 설문이에요. 마음이 힘들어도 상담을 망설이는 까닭을 물었어요. 가장 긴 막대는 무엇인가요?" 시연 단추로 1위 장벽을 고르는 모습을 보여 준다. "창피한 건 본인 성격 문제"라는 말이 나오면 "상담실 앞을 지나가기만 해도 눈치가 보인다면, 그건 한 사람의 성격일까요, 학교 분위기일까요?"라고 되묻는다. 장벽마다 학교가 바꿀 수 있는 것이 있다는 점을 짚고, 자료가 가상이므로 우리 학교 실태는 따로 조사해야 한다고 말한다.',
          student: '가상 학교 설문 막대그래프에서 상담을 망설이는 가장 큰 까닭을 읽고, 그 까닭이 왜 생기는지 짝과 해석해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: BARRIER_T, yLabel: '응답 크기', xLabel: '까닭', data: BARRIER, question: '가장 긴 막대는?', choices: BARRIER.map((x) => x[0]), showValues: true }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with four bars of different heights in front of a paper counseling room door left slightly open, small paper thought bubbles of worry floating above a student in the hallway', banner: '왜 망설일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: note('설문 값은 수업용 가상 값이다(화면 제목에 밝힘). 우리 학교 실태가 필요하면 상담실과 협의해 익명 조사를 따로 한다.'),
      }),
      M({
        id: 'intro.case', type: 'intro', title: '상담실 앞에서 돌아선 사람',
        method: '상담실 앞에서 돌아선 인물', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장(걸어감·눈 마주침·돌아섬)을 함께 보며 망설인 장면을 고른다.', base: '장면 4장을 넘겨 보며 망설인 까닭이 보이는 장면을 고른다.', challenge: '돌아서지 않게 해 줄 학교 장치(예약 방법·입구 위치 등)를 하나 골라 말한다.' },
        intro: {
          teacher: '"가상 인물 시우는 상담을 받아 보려고 상담실 앞까지 갔다가 돌아섰어요. 어느 장면에서 마음이 바뀌었을까요?" 장면을 넘기며 두세 명에게 고르게 하고, 시연 단추로 망설인 까닭이 보이는 장면이 바구니에 담기는 모습을 보여 준다. "용기가 없어서 그런 거죠"라는 말이 나오면 "누군가 \'여기 왜 왔어?\'라고 물을까 걱정되는 건 용기만의 문제일까요?"라고 되묻는다. 오늘은 상담을 막는 장벽과, 그 장벽을 줄일 방법을 찾는다고 밝힌다.',
          student: '가상 인물 시우가 상담실 앞에서 돌아선 장면을 넘겨 보며, 망설인 까닭이 보이는 장면을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '망설인 까닭이 보이는 장면', title: '시우의 쉬는 시간(가상)', cards: CASE, shuffle: false }, sequence: [{ pick: ['c2', 'c3'] }] },
          art: { draw: 'a paper school hallway with a counseling room door at the end, a paper student halfway turning back, a classmate passing by, soft paper clouds of hesitation above', banner: '문 앞에서 돌아섰어요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: note('인물은 가상이다. 학생에게 상담실에 가 본 적이 있는지 묻지 않는다.'),
      }),

      M({
        id: 'activity.map', type: 'activity', title: '지역 상담 자원 지도',
        method: '자원 지도 만들기', tool: 'map', minutes: 17,
        levels: { easy: '핀을 꽂으면 칸 이름이 읽기 글자로 보이고, 이동 시간 문항에서 길 칸에 번호가 붙는다.', base: '읽기 글자 없이 상담 자원 네 곳에 핀을 꽂고 범례의 뜻을 채우며 이동 시간을 잰다.', challenge: '읽기 글자를 맞힌 확인 뒤에만 보이고, 활동지 범례에 곳마다 이용 조건을 적는다.' },
        activity: {
          title: '상담 자원 지도와 이동 시간', tool: 'map',
          teacher: '"우리 동네(가상)에는 마음 이야기를 할 곳이 몇 군데 있을까요? 학교 상담실, 보건소, 청소년 상담 기관, 병원 — 하는 일과 이용 조건이 달라요." 핀을 꽂을 때마다 "이곳은 언제, 어떻게 이용할 수 있을까요?"라고 묻는다. "병원은 아주 심할 때만 가는 곳"이라는 학생에게 "몸이 아플 때 병원에 가는 것처럼, 마음 때문에 잠·식사가 계속 힘들 때도 전문 진료를 받을 수 있어요"라고 말한다. 마지막 문항에서 이동 시간을 재며 \'가깝고 쉽게 닿는 곳\'이 장벽을 줄인다는 점을 짚는다. 실제 연락처는 학교가 확인한 번호만 적는다.',
          task: '가상 동네 지도에서 상담 자원을 찾아 핀을 꽂고, 범례와 이동 시간을 확인해요.', levels: { easy: { readout: true, showCells: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '방과 후 친구 관계 고민을 학교 안에서 먼저 나누고 싶어요. 그곳에 핀을 꽂으세요.', toolOptions: { title: '우리 동네 마음건강 자원(가상)', places: AREA }, target: { place: '우리 학교' }, difficulty: 0.15 },
            { prompt: '학교 밖에서 청소년이 고민을 상담할 수 있는 곳에 핀을 꽂으세요.', toolOptions: { title: '우리 동네 마음건강 자원(가상)', places: AREA }, target: { place: '청소년 상담 기관' }, difficulty: 0.2 },
            { prompt: '마음 때문에 잠·식사가 몇 주째 무너져 전문 진료가 필요해 보여요. 보호자와 함께 갈 곳에 핀을 꽂으세요.', toolOptions: { title: '우리 동네 마음건강 자원(가상)', places: AREA }, target: { place: '병원' }, difficulty: 0.25 },
            { prompt: '지도 범례의 빈칸을 눌러 기호마다 어떤 곳인지 채우세요.', toolOptions: { mode: 'legend', title: '우리 동네 마음건강 자원(가상)', places: AREA, meanings: { school: '학교 상담실', office: '보건소', library: '청소년 상담 기관', hospital: '병원(정신건강 진료)' } }, target: { legend: { school: '학교 상담실', office: '보건소', library: '청소년 상담 기관', hospital: '병원(정신건강 진료)' } }, difficulty: 0.3 },
            { prompt: '한 칸을 걸어서 5분으로 볼 때, 우리 집에서 청소년 상담 기관까지 걸리는 시간을 재세요.', toolOptions: { mode: 'scale', title: '우리 동네 마음건강 자원(가상)', places: AREA, scale: { cell: 5, unit: '분' } }, target: { from: '우리 집', to: '청소년 상담 기관' }, difficulty: 0.35, conclude: '상담 자원은 하는 일과 이용 조건이 달라요. 가깝고 쉽게 닿는 곳을 알아 두면 장벽이 줄어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '지도 범례에 곳마다 이용 조건을 적으세요.', columns: ['곳', '하는 일', '이용 조건(시간·방법)', '연락'], cells: [['학교 상담실', '', '', ''], ['청소년 상담 기관', '', '', NUM], ['보건소', '', '', ''], ['병원', '', '', '']] }] },
        notes: note(NUM_NOTE, '지도와 거리는 가상이다. 곳마다 하는 일(상담·검진 안내·진료)은 일반 설명이며 우리 지역 기관의 실제 이용 조건은 교사가 확인해 덧붙인다.'),
      }),
      M({
        id: 'activity.confidential', type: 'activity', title: '상담의 비밀 보장과 그 한계',
        method: '비밀 보장과 그 한계', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고르고 원칙·예외 근거를 고른다.', base: '갈림길 둘까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가 비밀 보장의 원칙과 예외를 근거로 고른다.' },
        activity: {
          title: '도하의 첫 상담', tool: 'dilemma',
          teacher: '"상담 내용은 다 비밀일까요, 아니면 다 알려질까요?" 몇 명의 생각을 들은 뒤 도하의 갈림길을 따라가게 한다. "예외가 있으면 결국 다 말하는 거잖아요"라는 학생에게 "예외는 어떤 경우라고 했나요? 그 경우에도 선생님이 먼저 무엇을 한다고 했나요?"라고 되묻는다. 비밀 보장은 원칙이고, 생명·안전이 위험할 때만 보호자 등과 함께 지킨다는 것, 기록 관리가 걱정되면 상담 선생님께 직접 물어볼 수 있다는 점을 짚는다.',
          task: '도하의 상담 갈림길을 따라 결과를 보고, 비밀 보장의 원칙과 예외를 근거로 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('도하가 첫 상담에서 비밀을 부탁했어요. 도하에게 도움이 되는 길과 근거를 고르세요.', CONF, [['ask', 'honest', 'decide']], CONF_R, ['rule', 'except'], { d: 0.4 }),
            EXPLOREQ('\'일어선다\' 길과 \'둘러댄다\' 길도 끝까지 가 보고 도하가 받은 도움을 견주세요.', CONF, CONF_R, ['다른 길의 끝 장면을 확인했다', '도움이 커졌는지 작아졌는지 견주었다'], { d: 0.35 }),
            DILQ('친구 은호가 "상담받으면 다 기록돼서 불리하대"라며 상담을 안 가겠대요. 알맞은 길을 고르세요.', { text: '은호가 "상담받으면 다 기록돼서 대학 갈 때 불리하대. 그래서 안 갈래"라고 한다.', who: '나', motif: 'cloud', choices: [
              { id: 'check', text: '"그 말 어디서 들었어? 상담 선생님께 직접 물어보자"고 한다', result: '은호가 "물어봐도 돼?"라며 조금 마음을 연다.', impact: [{ who: '은호', text: '걱정을 확인할 길이 생긴다', tone: 1 }],
                next: { text: '은호가 "혼자 물어보러 가긴 좀 그래"라고 한다.', choices: [
                  { id: 'with', text: '"점심시간에 같이 가서 물어보자"고 한다', result: '두 사람이 함께 상담실에 가 궁금한 것을 묻는다.', impact: [{ who: '은호', text: '걱정을 사실로 확인한다', tone: 1 }], ending: '소문은 직접 물어보면 확인할 수 있다.' },
                  { id: 'alone', text: '"그럼 네가 알아서 해"라고 한다', result: '은호는 결국 묻지 않는다.', impact: [{ who: '은호', text: '소문을 그대로 믿는다', tone: -1 }], ending: '같이 가 주는 한 걸음이 확인을 가능하게 한다.' }] } },
              { id: 'agree', text: '"맞아, 나도 그렇게 들었어"라고 맞장구친다', result: '은호의 걱정이 더 굳어진다.', impact: [{ who: '은호', text: '도움에서 멀어진다', tone: -1 }], ending: '확인하지 않은 말에 맞장구치면 소문이 사실처럼 굳는다.' },
              { id: 'force', text: '"무조건 괜찮아, 그냥 가"라고 밀어붙인다', result: '은호가 "너도 모르면서"라며 입을 닫는다.', impact: [{ who: '은호', text: '걱정이 무시당했다고 느낀다', tone: 0 }], ending: '걱정은 밀어붙이기보다 함께 확인할 때 풀린다.' }] },
            [['check', 'with']], [{ id: 'verify', text: '소문은 상담 선생님께 직접 물어 확인한다' }, { id: 'company', text: '함께 가 주면 확인할 용기가 생긴다' }, { id: 'rumor', text: '여럿이 들은 말이면 사실이다', why: '여럿이 같은 말을 해도 확인한 사실은 아닐 수 있어요.' }], ['verify', 'company'], { d: 0.35, more: { conclude: '상담의 비밀 보장은 원칙이고 예외는 생명·안전이 걸린 좁은 경우예요. 걱정되면 상담 선생님께 직접 물어봐요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '상담의 비밀 보장 원칙과 예외를, 상담을 망설이는 친구에게 설명하듯 두 문장으로 쓰세요.' }] },
        notes: note('비밀 보장의 원칙·예외와 상담 기록 관리 방식은 우리 학교 상담실 안내로 미리 확인한다(사람 확인 목록). 학생에게 실제 상담 경험을 묻지 않는다.'),
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '상담 이용 장벽 줄이기 제안서',
        method: '장벽 줄이기 제안서', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '칸마다 문장 틀을 보고 문제·근거와 방안 하나를 쓴다.', base: '문제·근거, 방안 두 가지, 기대 효과를 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 예상 반대와 그에 대한 답을 넣는다.' },
        activity: {
          title: '장벽 줄이기 제안 한 쪽', tool: 'rubric-writing',
          teacher: '"아까 본 장벽 가운데 하나를 골라, 학교 상담 이용을 늘릴 제안서를 써 봐요. 문제·근거·방안·기대 효과 네 칸이에요." 쓰기 전에 기준표를 함께 읽는다. "상담실을 더 홍보하면 된다"처럼 막연한 방안에 "누가, 언제, 어떻게 홍보할까요? 그게 어떤 장벽을 줄이나요?"라고 되묻는다. 방안은 장벽과 짝이 맞아야 한다는 점(창피함 → 눈에 덜 띄는 예약 방법 등)을 짚는다.',
          task: '학교 상담 이용을 늘릴 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 문제와 근거를 2~3문장으로 쓰세요.', '상담을 망설이는 까닭 가운데 하나를 골라, 그것이 왜 문제인지 근거와 함께 쓰세요(자료는 가상임을 밝히기).', ['고른 장벽을 분명히 썼다', '근거(가상 자료 등)를 썼다', '학생 한 사람이 아니라 학교가 바꿀 문제로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['장벽', '까닭', '망설']], starter: '우리 학교 학생들은 ~ 때문에 상담을 망설인다. 가상 설문에서 ~', plus: '자료의 한계(가상·우리 학교 아님)를 밝혔다', d: 0.35 }),
            RWQ('장벽을 줄일 방안을 2~3문장으로 쓰세요.', '앞에서 쓴 장벽을 줄일 학교의 방안을 쓰세요(누가·언제·어떻게).', ['방안이 고른 장벽과 짝이 맞는다', '누가·언제·어떻게를 썼다', '학생이 실제로 이용하기 쉬운 방법이다'], { min: 40, max: 300, sent: [2, 3], starter: '첫째, ~가 ~에 ~한다. 둘째, ~', plus: '방안을 두 가지로 썼다', d: 0.4 }),
            RWQ('기대 효과를 2~3문장으로 쓰세요.', '방안을 실행하면 무엇이 달라질지, 어떻게 확인할지 쓰세요.', ['달라질 모습을 썼다', '확인할 방법(설문·이용 수 등)을 썼다', '도움 요청이 자연스러운 학교 분위기와 이었다'], { min: 40, max: 300, sent: [2, 3], starter: '이 방안을 하면 ~. 효과는 ~로 확인한다.', plus: '예상되는 반대 의견과 그에 대한 답을 썼다', sample: '이 방안을 하면 상담실 앞에서 눈치를 보는 학생이 줄 것이다. 효과는 한 학기 뒤 익명 설문으로 확인한다. 상담을 받는 것이 평범한 일이라는 분위기가 생길 것이다.', d: 0.4, more: { conclude: '좋은 제안은 장벽과 방안이 짝을 이루고, 효과를 확인할 방법까지 담아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서 뼈대를 채우세요.', columns: ['칸', '내용'], cells: [['문제(고른 장벽)', ''], ['근거', ''], ['방안', ''], ['기대 효과와 확인 방법', '']] }] },
        notes: note('제안서는 학교 상담실·학생회와 함께 실제로 검토할 수 있다. 근거 수치는 가상이라고 밝히게 한다.'),
      }),
      M({
        id: 'activity.budget', type: 'activity', title: '상담 이용 시간 맞춰 보기',
        method: '상담 이용 시간 설계', tool: 'clock', minutes: 18,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다.', base: '10분 단위로 시각을 나타내고, 내 일과와 겹치는지 말한다.', challenge: '5분 단위로 나타내며 작은 눈금이 숨겨지고, 활동지에서 일주일 일과와 겹치지 않을 때의 대안을 정한다.' },
        activity: {
          title: '상담 가능 시간과 내 일과', tool: 'clock',
          teacher: '"상담을 망설이는 까닭 중 하나가 \'시간이 없어서\'였죠. 가상 학교 상담실 안내문을 보고, 내 일과에서 갈 수 있는 시간을 찾아봐요." 문항마다 시계를 맞춘 뒤 "이 시간에 나는 무엇을 하고 있나요?"라고 묻는다. "학원 때문에 상담은 못 간다"는 학생에게 "점심시간이나 예약 상담처럼 다른 시간대는 없을까요?"라고 되묻는다. 시간이 맞지 않으면 예약·다른 시간대·학교 밖 자원을 찾는 것이 장벽 줄이기라는 점을 짚는다.',
          task: '가상 상담실 안내문의 시각을 시계에 나타내고 내 일과와 견주어요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 10 }, challenge: { minuteStep: 5, showMinuteMarks: false } },
          items: [
            { prompt: '가상 안내문: "점심 상담은 12시 30분부터 엽니다." 점심 상담이 시작하는 시각을 나타내세요.', toolOptions: {}, target: { h: 12, m: 30 }, difficulty: 0.1 },
            { prompt: '가상 안내문: "방과 후 상담은 4시부터 5시 30분까지." 방과 후 상담이 시작하는 시각을 나타내세요.', toolOptions: {}, target: { h: 4, m: 0 }, difficulty: 0.15 },
            { prompt: '같은 안내문에서 방과 후 상담이 끝나는 시각을 나타내세요.', toolOptions: {}, target: { h: 5, m: 30 }, difficulty: 0.2 },
            { prompt: '가상 인물 하준이는 5시 30분 학원 버스를 타야 하고, 상담 한 번은 30분이 걸려요. 하준이가 늦지 않게 방과 후 상담을 시작할 가장 늦은 시각을 나타내세요.', toolOptions: {}, target: { h: 5, m: 0 }, difficulty: 0.35, conclude: '상담 시간과 내 일과가 겹치면 점심 상담·예약·학교 밖 자원처럼 다른 길을 찾을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '일주일 일과에서 상담에 갈 수 있는 시간을 찾아 쓰세요(겹치지 않으면 대안).', columns: ['요일', '갈 수 있는 시간', '겹치면 대안'], cells: [['월', '', ''], ['수', '', ''], ['금', '', '']] }] },
        notes: note('상담 시간은 가상 안내문이다. 우리 학교 상담실의 실제 운영 시간을 칠판에 적어 견주게 한다. 시계 교구는 한 시각만 나타내므로 \'일주일\' 설계는 활동지 표로 한다.'),
      }),

      M({
        id: 'wrap.card', type: 'wrap', title: '상황에 맞는 자원 카드',
        method: '내 자원 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 상황 글 3장을 먼저 읽어 주고 함께 자원 카드를 짝짓는다.', base: '상황 글 4장마다 알맞은 자원 카드를 스스로 짝짓는다.', challenge: '활동지에 친구에게 건넬 자원 카드 한 장을 직접 만든다.' },
        wrap: {
          teacher: '"오늘 알게 된 자원을 상황과 짝지어 \'내 자원 카드\'를 만들어요." 짝지은 뒤 밤·주말에 이야기할 곳이 어디였는지 다시 확인한다. "결국 한 곳만 알면 된다"는 학생에게 "학교 상담실이 문을 닫은 밤에는 어디로 갈까요?"라고 되묻는다. 학교 밖 번호는 학교가 확인한 번호를 칠판에 적어 둔다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '학교 상담실', ko: '친구 관계 고민으로 며칠째 마음이 무거울 때' }, { en: '보건실', ko: '잠을 못 자 두통이 이어져 몸이 먼저 힘들 때' }, { en: '청소년 상담 기관', ko: '학교 밖에서, 밤이나 주말에 이야기할 곳이 필요할 때' }, { en: '병원(정신건강 진료)', ko: '마음 때문에 잠·식사가 몇 주째 무너졌을 때(보호자와 함께)' }] }, prompt: '상황마다 알맞은 자원 카드를 짝지으세요.', target: { match: { '학교 상담실': '학교 상담실', 보건실: '보건실', '청소년 상담 기관': '청소년 상담 기관', '병원(정신건강 진료)': '병원(정신건강 진료)' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"상담 내용은 학교 기록에 남아 불이익이 된다"는 걱정에 대한 행동으로 가장 알맞은 것은?', options: ['걱정되니 상담을 미룬다', '기록이 어떻게 관리되는지 상담 선생님께 직접 묻는다', '친구들에게 소문이 맞는지 물어본다'], answer: 1, difficulty: 0.2, explain: '걱정은 소문이 아니라 상담 선생님께 직접 물어 확인할 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 자원 카드',
          items: [
            { type: 'table', prompt: '내 자원 카드를 완성하세요.', columns: ['상황', '갈 곳', '연락·위치'], cells: [['학교에서 마음이 무거울 때', '', ''], ['밤·주말에 이야기할 곳이 필요할 때', '', NUM]] },
            { type: 'short', prompt: '친구에게 건넬 자원 카드 한 장(상황과 갈 곳)을 만들어 쓰세요.' },
          ],
        },
        notes: note(NUM_NOTE, '자원별 역할은 일반 설명이다(사람 확인 목록).'),
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '도움 요청은 ___이다',
        method: '도움 요청에 대한 성찰', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 보기 세 개를 읽어 주고 함께 고른 뒤 결과 장면을 본다.', base: '"도움 요청은 ___이다" 문장의 빈칸을 스스로 고르고 결과 장면을 본다.', challenge: '활동지에 나의 다짐 문장을 이어 쓴다.' },
        wrap: {
          teacher: '"오늘 마지막 질문이에요. \'도움 요청은 ___이다.\' 빈칸에 무엇이 어울릴까요?" 고른 뒤 결과 장면을 함께 읽는다. "도움 요청은 약한 사람이 하는 것"을 고른 학생이 있으면 "운동선수가 코치에게 묻는 것도 약해서일까요?"라고 되묻는다. 도움을 청하는 것은 나를 돌보는 기술이고, 오늘 수업이 마음에 걸리는 사람은 상담 선생님을 찾아와도 된다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '"도움 요청은 ___이다." 빈칸에 가장 어울리는 말은?', feeling: '용기', choices: [{ id: 'weak', text: '약한 사람이나 하는 일', result: '도움을 청하지 못하고 혼자 버티는 사람이 늘어난다.', mood: '걱정' }, { id: 'brave', text: '나를 돌보는 용기 있는 선택', result: '힘들 때 서로 묻고 청하는 분위기가 생긴다.', mood: '편안함' }, { id: 'burden', text: '남에게 짐을 지우는 일', result: '미안한 마음에 말을 꺼내지 못한다.', mood: '속상함' }] }, prompt: '빈칸에 어울리는 말을 고르고 결과 장면을 보세요.', target: { choice: 'brave' }, difficulty: 0.15 },
            { type: 'choice', prompt: '상담 이용을 막는 장벽을 줄이는 방법으로 가장 알맞은 것은?', options: ['상담이 필요한 학생을 공개적으로 불러낸다', '예약 방법·운영 시간·비밀 보장 원칙을 쉽게 알린다', '정말 심각할 때만 가라고 안내한다'], answer: 1, difficulty: 0.2, explain: '이용 방법과 비밀 보장 원칙을 알기 쉽게 알리면 창피함·비밀 걱정·시간 장벽이 줄어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움 요청에 대한 나의 생각',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '도움 요청은 나를 돌보는 ___ 있는 선택이다.', answer: '용기' },
            { type: 'short', prompt: '오늘 수업을 마치며 \'도움 요청\'에 대한 나의 다짐 문장을 쓰세요(다른 사람에게 보이지 않아도 돼요).' },
          ],
        },
        notes: note(),
      }),
    );
  }

  // ======================================================================================================
  // 3. SNS 위험 정보에 대응하기 (10학년) — 위험 정보의 내용은 쓰지 않고 대응 절차만
  // ======================================================================================================
  {
    const M = MOD('harmful-info', [10]);
    const SPREAD = [['1시간', 2], ['2시간', 5], ['3시간', 11], ['4시간', 24], ['5시간', 50]];
    const SPREAD_T = '위험 게시물이 공유된 수(가상, 상대 크기)';
    const LINE = (q, more = {}) => Object.assign({ type: 'line', mode: 'read', title: SPREAD_T, yLabel: '공유 수', xLabel: '올라온 뒤', data: SPREAD, question: q }, more);
    // 공개 피드에서 위험 게시물을 본 인물 — 내용은 쓰지 않는다
    const SEE = { text: '준서의 피드에 모르는 계정이 올린 게시물이 뜬다. 생명을 위협하는 내용이라 보는 순간 마음이 철렁한다. 벌써 공유가 늘고 있다.', who: '준서', motif: 'storm', choices: [
      { id: 'warn', text: '친구들이 조심하라고 단톡방에 캡처해 공유한다', result: '단톡방 친구들이 게시물을 다시 보고, 몇몇이 다른 방에도 옮긴다.', impact: [{ who: '친구들', text: '원치 않던 위험 정보를 보게 된다', tone: -1 }],
        next: { text: '단톡방에서 게시물에 대한 추측과 농담이 오간다.', choices: [
          { id: 'delete', text: '"내가 잘못 올렸어"라며 캡처를 지우고 신고한다', result: '단톡방의 확산은 멈추고 원글은 신고된다.', impact: [{ who: '친구들', text: '더 퍼지지 않는다', tone: 1 }], ending: '경고하려던 공유도 확산이 된다. 늦었더라도 지우고 신고하면 멈출 수 있다.' },
          { id: 'join', text: '추측에 함께 답을 단다', result: '캡처가 여러 방으로 더 퍼진다.', impact: [{ who: '보는 사람들', text: '불안이 커진다', tone: -1 }], ending: '경고라는 뜻으로 시작해도 공유는 2차 확산이 된다.' }] } },
      { id: 'scroll', text: '못 본 척 넘긴다', result: '게시물은 그대로 남고 공유 수는 계속 늘어난다.', impact: [{ who: '보는 사람들', text: '위험 정보에 계속 노출된다', tone: -1 }], ending: '넘기기만 하면 위험 정보는 그 자리에 남는다.' },
      { id: 'report', text: '공유·댓글 없이 플랫폼에 신고한다', result: '신고가 접수되고, 준서는 마음이 계속 불편하다.', impact: [{ who: '보는 사람들', text: '게시물이 검토된다', tone: 1 }],
        next: { text: '준서는 그 게시물이 계속 떠올라 잠이 안 온다.', choices: [
          { id: 'tell', text: '보호자에게 "이상한 게시물을 봐서 마음이 불편해"라고 말한다', result: '보호자가 이야기를 들어 주고, 다음 날 담임 선생님께도 알리자고 한다.', impact: [{ who: '준서', text: '혼자 품지 않는다', tone: 1 }],
            next: { text: '다음 날 담임 선생님이 "게시자가 우리 학교 학생 같은지 혹시 아니?"라고 묻는다.', choices: [
              { id: 'facts', text: '아는 것(계정 이름이 낯설다는 것·본 시각)만 말한다', result: '선생님이 학교 절차에 따라 확인하겠다고 한다.', impact: [{ who: '준서', text: '할 일을 마치고 마음이 가벼워진다', tone: 1 }], ending: '공유하지 않고, 신고하고, 어른에게 알리면 확산을 막고 나도 지킨다.' },
              { id: 'guess', text: '같은 반 누구일 거라고 추측해 말한다', result: '근거 없는 추측이 다른 학생에게 상처가 될 수 있다.', impact: [{ who: '추측받은 학생', text: '억울한 소문에 휘말릴 수 있다', tone: -1 }], ending: '어른에게는 아는 사실만 전하고, 추측은 하지 않는다.' }] } },
          { id: 'search', text: '불안해서 관련 글을 계속 검색해 본다', result: '비슷한 게시물이 더 뜨고 마음이 더 무거워진다.', impact: [{ who: '준서', text: '불안이 커진다', tone: -1 }], ending: '불편한 것을 본 뒤에는 더 찾아보지 말고 사람에게 말한다.' }] } }] };
    const SEE_R = [{ id: 'nospread', text: '위험 정보는 경고하려는 뜻이어도 공유하면 퍼진다' }, { id: 'adult', text: '신고하고 믿을 어른에게 알리면 확산을 막고 나도 지킨다' }, { id: 'warnok', text: '경고하려는 공유는 괜찮다', why: '경고하려는 공유도 위험 정보를 더 많은 사람에게 보여 주는 2차 확산이에요.' }, { id: 'none', text: '모르는 계정이니 나와 상관없다', why: '누구의 게시물이든 신고는 확산을 줄이는 첫걸음이에요.' }];
    const PROC = ['공유·댓글·저장하지 않는다', '플랫폼에 신고한다', '보호자·교사에게 알린다', `급하면 ${NUM}에 연락한다`];

    MODS.push(
      M({
        id: 'intro.flow', type: 'intro', title: '공유가 퍼지는 속도',
        method: '공유가 퍼지는 속도', tool: 'chart', minutes: 7,
        levels: { easy: '점마다 값이 보이는 꺾은선에서 가장 높은 점을 함께 읽는다.', base: '시간마다 늘어난 폭을 해석해 초기 대응이 왜 중요한지 말한다.', challenge: '1시간에 신고된 경우와 5시간에 신고된 경우의 확산 차이를 견주어 말한다.' },
        intro: {
          teacher: '"가상 자료예요. 위험한 게시물 하나가 올라온 뒤 공유 수가 시간마다 어떻게 늘었을까요?" 시연 단추로 가장 높은 점을 고르는 모습을 보여 준다. "어차피 다 퍼질 텐데 신고해 봤자"라는 말이 나오면 "1시간에 멈춘 경우와 5시간에 멈춘 경우, 본 사람 수가 같을까요?"라고 되묻는다. 오늘은 위험 정보의 내용은 다루지 않고, 보았을 때 \'퍼뜨리지 않고 알리는\' 절차만 익힌다고 밝힌다.',
          student: '가상 꺾은선그래프에서 게시물이 올라온 뒤 공유 수가 어떻게 늘었는지 읽고, 일찍 멈추는 것이 왜 중요한지 말해 보세요.',
          demo: { tool: 'chart', options: LINE('공유 수가 가장 많은 때는?', { choices: SPREAD.map((x) => x[0]), showValues: true }), sequence: [{ pick: 4 }] },
          art: { draw: 'a paper line chart climbing steeply over five hours, tiny paper phone icons multiplying along the line, a paper hand pressing a stop button at the start of the line', banner: '일찍 멈추면 덜 퍼져요', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
        notes: note('그래프 값은 수업용 가상 상대 크기다(화면 제목에 밝힘). 실제 위험 게시물·화면을 보여 주지 않는다.'),
      }),
      M({
        id: 'intro.dilemma', type: 'intro', title: '"경고하려고 공유할까?"',
        method: '"경고하려고 공유할까?"', tool: 'dilemma', minutes: 7,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 함께 본다.', base: '두 번째 갈림길까지 가 보고 고른 근거를 말한다.', challenge: '근거 두 개를 골라 다른 길과 견준다.' },
        intro: {
          teacher: '"피드에 생명을 위협하는 게시물이 떴어요. 친구들이 조심하도록 단톡방에 알리는 건 좋은 일일까요?" 손을 들어 세 선택에 한 번씩 표시하게 한 뒤, 시연 단추로 \'신고 → 어른에게 알리기\' 길을 보여 준다. "경고하려는 건데 뭐가 문제예요?"라는 말이 나오면 "단톡방 친구들은 그 게시물을 보고 싶었을까요? 캡처는 몇 번 더 옮겨질까요?"라고 되묻는다. 좋은 뜻의 공유도 2차 확산이 된다는 점을 짚는다.',
          student: '준서가 되어 위험한 게시물을 본 뒤 무엇을 할지 고르고, 그 선택이 어떤 결과로 이어지는지 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: cut(SEE, 2), reasons: SEE_R, title: '피드에 뜬 위험 게시물' }, sequence: [{ path: ['report', 'tell'], reasons: ['nospread', 'adult'] }] },
          art: { draw: 'a paper phone showing a blurred post covered by a paper warning sticker, a fork in a paper path with one way leading to a group chat full of copies and the other to a report flag and a trusted adult', banner: '퍼뜨릴까, 알릴까?', extra: [{ motif: 'storm', x: 300, y: 96 }] },
        },
        notes: note('게시물의 내용은 말하지 않는다(\'생명을 위협하는 내용\'까지만). 학생에게 비슷한 게시물을 본 적이 있는지 묻지 않는다.'),
      }),

      M({
        id: 'activity.procedure', type: 'activity', title: '위험 정보 대응 절차',
        method: '대응 절차 정리', tool: 'kitchen', minutes: 17,
        levels: { easy: '대응 체크리스트 항목 4개에서 할 일을 고르고, 절차 카드 3장을 차례로 놓는다.', base: '항목 7개에서 할 일만 고르고, 절차 4칸을 차례로 놓고, 게시자에 따른 갈래를 짝짓는다.', challenge: '카드를 섞어 놓고, 게시자가 모르는 사람일 때와 아는 사람일 때의 갈래를 함께 설계해 활동지에 쓴다.' },
        activity: {
          title: '퍼뜨리지 않고 알리는 절차', tool: 'kitchen',
          teacher: '"위험 정보를 봤을 때 할 일을 체크리스트와 차례로 정리해요. 핵심은 \'퍼뜨리지 않고 알리기\'예요." 문항마다 "이 행동은 확산을 줄이나요, 키우나요?"라고 묻는다. "증거로 캡처해 두는 게 좋지 않나요?"라는 학생에게 "캡처는 결국 또 하나의 사본이 될 수 있어요. 증거가 필요한지는 어른·기관이 판단하게 해요"라고 말한다. 게시자가 아는 사람이면 보호자·교사에게 바로 알리고, 급해 보이면 학교가 확인한 번호에 연락한다는 갈래를 짚는다.',
          task: '위험 정보를 봤을 때 할 일을 고르고, 차례로 놓고, 상황별 갈래를 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHECKQ('위험 정보를 봤을 때 할 일만 골라 표시하세요.', '위험 정보를 봤을 때', [['nosh', '공유·댓글 하지 않기', true], ['rep', '플랫폼에 신고하기', true], ['tell', '보호자·교사에게 알리기', true], ['dm', '친구들에게 캡처 돌리기', false], ['ask', '게시자에게 자세한 내용 묻기', false], ['rest', '앱을 닫고 쉬기', true], ['look', '비슷한 글을 더 찾아보기', false]], { k: 4, d: 0.25 }),
            ORDERQ('위험 정보를 봤을 때의 대응 절차를 차례로 놓으세요.', PROC, { k: 3, d: 0.3 }),
            MATCHQ('상황마다 먼저 할 일을 짝지으세요.', [['게시자가 우리 학교 학생 같다', '담임·상담 선생님께 바로 알린다'], ['게시자가 모르는 계정이다', '플랫폼에 신고하고 보호자에게 알린다'], ['지금 당장 위험해 보인다', `어른에게 바로 알리고 ${NUM}에 연락한다`]], { k: 2, extra: ['친구들과 먼저 의논한다'], d: 0.4, more: { conclude: '공유·댓글 안 하기 → 신고 → 어른에게 알리기 → 급하면 학교가 확인한 번호. 게시자가 아는 사람이면 어른에게 바로 알려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '게시자에 따른 대응 갈래를 쓰세요.', columns: ['게시자', '내가 할 일', '알릴 어른·기관'], cells: [['아는 사람(같은 학교 등)', '', ''], ['모르는 사람', '', '']] }] },
        notes: note(NUM_NOTE, '증거 보존(캡처) 여부는 학생이 판단하지 않고 어른·기관에 맡기는 것으로 안내한다(사람 확인 목록).'),
      }),
      M({
        id: 'activity.sort', type: 'activity', title: '해도 될 일·안 될 일',
        method: '해도 될 일·안 될 일', tool: 'sortboard', minutes: 18,
        levels: { easy: '바구니 옆에 장 수가 보이고, 틀린 바구니에 넣으면 까닭과 함께 되돌아온다(카드 4장).', base: '카드 7장을 해도 될 일·안 될 일로 나누고, 안 될 일이 해로운 까닭과 할 일의 주체를 나눈다.', challenge: '헷갈리는 카드가 더해지고, 활동지에 안 될 일이 왜 해로운지 쓴다.' },
        activity: {
          title: '행동 카드 나누기', tool: 'sortboard',
          teacher: '"위험 정보를 본 뒤의 행동 카드예요. 해도 될 일과 안 될 일을 나누고, 안 될 일은 왜 해로운지까지 따져 봐요." 카드를 넣을 때마다 "이 행동 뒤에 그 게시물을 보는 사람은 늘어날까요, 줄어들까요?"라고 묻는다. \'호기심에 검색해 보기\'를 해도 될 일에 넣는 학생에게 "검색하면 비슷한 게시물이 더 뜨지 않을까요? 그건 나에게 어떤 영향을 줄까요?"라고 되묻는다.',
          task: '행동 카드를 바구니에 나누고, 해로운 까닭과 할 사람을 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORTQ('위험 정보를 본 뒤의 행동 카드를 해도 될 일과 안 될 일로 나누세요.', ['해도 될 일', '안 될 일'], [
              ['플랫폼에 신고하기', '보호자·교사에게 알리기', '앱을 닫고 쉬기'],
              ['캡처해 단톡방에 퍼뜨리기', '게시물에 조롱 댓글 달기', '호기심에 관련 내용 검색하기', '게시자가 누구인지 추측해 퍼뜨리기'],
            ], { k: 2, hard: [['게시물을 보지 않도록 설정 바꾸기'], ['"경고용"이라며 친구에게 보내기']], d: 0.3 }),
            SORTQ('안 될 일이 해로운 까닭을 바구니에 나누세요.', ['보는 사람을 늘린다', '힘든 사람에게 상처를 준다', '나를 더 불안하게 한다'], [
              ['캡처해 단톡방에 퍼뜨리기', '"경고용"이라며 친구에게 보내기'],
              ['게시물에 조롱 댓글 달기', '게시자를 놀리는 짤 만들기'],
              ['호기심에 관련 내용 검색하기', '밤새 반응 댓글 확인하기'],
            ], { k: 1, d: 0.35, more: { hints: ['그 행동 뒤에 누가 영향을 받는지(보는 사람·게시자·나) 떠올려 보세요.'] } }),
            SORTQ('대응에서 내가 할 일과 어른·기관이 할 일을 나누세요.', ['내가 할 일', '어른·기관이 할 일'], [
              ['공유하지 않기', '신고하기', '본 사실을 어른에게 알리기'],
              ['게시자가 누구인지 확인하기', '게시자의 안전 살피기', '증거가 필요한지 판단하기'],
            ], { k: 2, d: 0.35, more: { conclude: '나는 퍼뜨리지 않고, 신고하고, 알려요. 게시자를 찾고 살피는 일은 어른·기관의 몫이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'안 될 일\' 하나를 골라 왜 해로운지 누가 영향을 받는지와 함께 두 문장으로 쓰세요.' }] },
        notes: note(),
      }),
      M({
        id: 'activity.campaign', type: 'activity', title: '"퍼뜨리지 말고 알리기" 카드뉴스',
        method: '확산 방지 캠페인 설계', tool: 'collage', minutes: 17,
        levels: { easy: '카드뉴스 1장(멈추기)을 모양 몇 가지만 있는 고르개로 꾸민다.', base: '카드뉴스 3장(멈추기·신고하기·알리기)을 꾸미고 장마다 점검한다.', challenge: '3장을 중학생 대상 문구로 바꾸는 점검 항목이 하나 더 붙는다.' },
        activity: {
          title: '카드뉴스 세 장', tool: 'collage',
          teacher: '"\'퍼뜨리지 말고 알리기\' 카드뉴스 세 장을 만들어요. 1장 멈추기, 2장 신고하기, 3장 알리기." 장마다 문구를 활동지에 먼저 쓰고 조각으로 꾸미게 한다. 위험 내용을 그림으로 넣으려는 학생에게 "그 그림이 없어도 메시지가 전해질까요? 그 그림을 지금 힘든 사람이 본다면요?"라고 묻는다. 캠페인에는 위험 내용·장면 묘사 없이 \'할 일\'과 \'도움받을 곳\'만 담는다는 원칙을 먼저 정한다.',
          task: '"퍼뜨리지 말고 알리기" 카드뉴스 세 장을 조각으로 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '카드뉴스 1장(멈추기): 공유 단추 앞에서 멈추는 모습을 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, target: { selfCheck: ['멈추는 행동이 보인다', '위험 내용·장면을 넣지 않았다', '한 줄 문구를 넣을 자리를 남겼다'], minPieces: 3 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '카드뉴스 2장(신고하기): 신고 단추를 누르는 모습을 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'diamond'] }, target: { selfCheck: ['신고 행동이 보인다', '위험 내용·장면을 넣지 않았다', '누가 봐도 무엇을 할지 알 수 있다'], minPieces: 3 }, difficulty: 0.25 },
            { prompt: '카드뉴스 3장(알리기): 믿을 어른에게 알리는 모습과 도움받을 곳 자리를 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'diamond'] }, target: { selfCheck: ['어른에게 알리는 행동이 보인다', '도움받을 곳을 적을 자리를 남겼다', '희망을 주는 문구 자리를 남겼다'], minPieces: 3 }, difficulty: 0.3,
              levels: { challenge: { prompt: '카드뉴스 3장(알리기)을 중학생이 읽는다고 생각하고 꾸미고 점검하세요(대상 맞춤).', target: { selfCheck: ['어른에게 알리는 행동이 보인다', '도움받을 곳을 적을 자리를 남겼다', '희망을 주는 문구 자리를 남겼다', '중학생이 쓰는 말로 문구를 바꾸었다'], minPieces: 3 } } },
              conclude: '확산 방지 캠페인은 위험 내용 대신 할 일(멈추기·신고·알리기)과 도움받을 곳을 보여 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '카드뉴스 문구를 쓰세요.', columns: ['장', '제목', '한 줄 문구'], cells: [['1 멈추기', '', ''], ['2 신고하기', '', ''], ['3 알리기', '', '']] }] },
        notes: note('카드뉴스는 수업 안에서만 나눈다. 실제 SNS에 올릴 때는 교사가 문구를 검토하고, 도움받을 곳은 학교가 확인한 곳만 적는다. 위험 내용·장면·수단은 글과 그림 어디에도 넣지 않는다.'),
      }),
      M({
        id: 'activity.self-care', type: 'activity', title: '불편한 것을 본 뒤 나 돌보기',
        method: '불편한 것을 본 뒤 나 돌보기', tool: 'emotion', minutes: 18,
        levels: { easy: '마음 크기를 고르고, 할 일 보기를 고르면 결과 장면이 바로 보인다.', base: '두 장면(본 직후·그날 밤)에서 할 일을 고르고 결과를 본다.', challenge: '결과 장면은 맞힌 뒤에만 보이고, 어른에게 이야기할 말까지 고른다.' },
        activity: {
          title: '본 뒤의 마음과 할 일', tool: 'emotion',
          teacher: '"불편한 게시물을 본 뒤 마음이 철렁하거나 계속 떠오르는 건 이상한 게 아니에요. 그때 나를 어떻게 돌볼까요?" 가상 인물 소윤이의 장면마다 할 일을 고르고 결과를 함께 읽는다. "그냥 참으면 잊혀요"라는 학생에게 "계속 떠오르는데 혼자 참으면 잠은 어떨까요?"라고 되묻는다. 앱 닫기·쉬기·믿을 어른에게 이야기하기가 나를 지키는 행동이고, 불편함이 며칠 이어지면 상담 선생님을 찾는다는 점을 짚는다.',
          task: '가상 인물 소윤이의 마음 크기를 짐작하고, 장면마다 나를 돌보는 행동을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '소윤이가 피드에서 생명을 위협하는 게시물을 보고 손이 떨린대요. 소윤이의 놀람은 어느 정도일까요?', toolOptions: { mode: 'scale', situation: '피드에서 생명을 위협하는 게시물을 우연히 본 소윤', feeling: '놀람', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '불편한 것을 보면 크게 놀라는 것은 자연스러운 반응이에요.' }, target: { level: [3, 5] }, difficulty: 0.15 },
            { prompt: '게시물을 본 직후, 소윤이가 자신을 돌보려면 무엇을 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '게시물을 본 직후, 소윤이의 마음이 계속 철렁하다.', feeling: '걱정', who: '소윤', choices: [{ id: 'close', text: '신고한 뒤 앱을 닫고 물을 마시며 잠시 쉰다', result: '숨이 조금 가라앉는다.', mood: '편안함' }, { id: 'more', text: '무슨 일인지 관련 글을 더 찾아본다', result: '비슷한 글이 더 떠서 불안이 커진다.', mood: '무서움' }, { id: 'hold', text: '아무렇지 않은 척 계속 피드를 넘긴다', result: '마음이 계속 무겁다.', mood: '속상함' }] }, target: { choice: 'close' }, difficulty: 0.2 },
            { prompt: '그날 밤에도 게시물이 떠올라 잠이 안 와요. 소윤이가 할 일로 알맞은 것은?', toolOptions: { mode: 'branch', situation: '그날 밤, 게시물이 자꾸 떠올라 소윤이가 잠들지 못한다.', feeling: '걱정', who: '소윤', choices: [{ id: 'talk', text: '보호자에게 "오늘 본 게시물 때문에 마음이 불편해"라고 말한다', result: '보호자가 곁에서 이야기를 들어 준다.', mood: '편안함' }, { id: 'alone', text: '혼자 참고 휴대폰으로 시간을 보낸다', result: '새벽까지 잠들지 못한다.', mood: '걱정' }, { id: 'friend', text: '친구에게 그 게시물을 보내며 "이거 봐"라고 한다', result: '친구도 불편해지고 게시물이 한 번 더 퍼진다.', mood: '미안함' }] }, target: { choice: 'talk' }, difficulty: 0.25 },
            { prompt: '며칠이 지나도 불편함이 이어지면 소윤이가 담임 선생님께 할 말로 알맞은 것은?', toolOptions: { mode: 'branch', situation: '며칠이 지나도 소윤이는 그 게시물이 계속 떠오른다.', feeling: '걱정', who: '소윤', choices: [{ id: 'clear', text: '"며칠 전 본 게시물이 계속 떠올라서 상담 선생님과 이야기하고 싶어요"', result: '담임 선생님이 상담 선생님과 이어 준다.', mood: '편안함' }, { id: 'vague', text: '"아니에요, 아무 일도 없어요"', result: '도움을 청할 기회가 지나간다.', mood: '속상함' }, { id: 'detail', text: '게시물 내용을 자세히 설명하며 보여 준다', result: '내용을 다시 떠올리며 더 힘들어진다.', mood: '무서움' }] }, target: { choice: 'clear' }, difficulty: 0.3, conclude: '불편한 것을 본 뒤에는 앱 닫기 → 쉬기 → 믿을 어른에게 말하기. 내용을 자세히 되풀이하지 않고 \'마음이 불편하다\'고만 말해도 충분해요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '불편한 것을 본 뒤 나를 돌보는 방법 가운데 해 볼 것에 표시하세요(걷지 않아요, 혼자 보기).', options: ['앱 닫기', '물 마시고 쉬기', '산책·스트레칭', '믿을 어른에게 말하기', '상담 선생님 찾기'] }] },
        notes: note('마음 크기 문항은 가상 인물 소윤이의 마음을 짐작하는 것이며 학생 자신의 감정을 채점하지 않는다. 활동지 점검은 걷지 않는 혼자 보기 칸이다.'),
      }),

      M({
        id: 'wrap.write', type: 'wrap', title: '나의 온라인 대응 원칙',
        method: '나의 온라인 대응 원칙', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 위험 정보를 보면 ~")을 보고 원칙 한 줄을 쓴다.', base: '원칙 3줄을 쓰고 기준표 네 항목(공유 안 함·신고·알림·자기 돌봄)으로 점검한다.', challenge: '활동지에서 원칙을 친구에게 권하는 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 나의 온라인 대응 원칙 세 줄로 남겨요." 쓰기 전에 기준표 네 항목을 함께 읽는다. "그냥 무시한다"만 쓴 학생에게 "무시하면 그 게시물은 그 자리에 남아요. 신고와 알리기는 어디에 넣을까요?"라고 묻는다. 원칙에 \'나를 돌보는 일\'도 들어가야 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '위험 정보를 볼 때 나의 원칙을 세 줄로 쓰세요.', minChars: 40, maxChars: 300, starter: '나는 위험 정보를 보면 ~', sample: '나는 위험 정보를 보면 공유하거나 댓글을 달지 않는다. 바로 신고하고 보호자나 선생님께 알린다. 마음이 불편하면 앱을 닫고 쉬며 믿을 어른에게 이야기한다.' }, prompt: '나의 온라인 대응 원칙을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['공유·댓글 하지 않기를 넣었다', '신고하기를 넣었다', '어른에게 알리기를 넣었다', '나를 돌보는 일을 넣었다'], mustInclude: [['신고']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '"경고하려고 공유하는 것은 괜찮다"는 말에 대한 판단으로 알맞은 것은?', options: ['좋은 뜻이니 괜찮다', '좋은 뜻이어도 위험 정보를 더 퍼뜨리는 2차 확산이 된다', '친한 친구에게만 보내면 괜찮다'], answer: 1, difficulty: 0.15, explain: '뜻과 상관없이 공유는 더 많은 사람이 위험 정보를 보게 해요. 공유 대신 신고하고 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 온라인 대응 원칙',
          items: [
            { type: 'short', prompt: '나의 온라인 대응 원칙 세 줄을 쓰세요.' },
            { type: 'short', prompt: '원칙 하나를 골라 친구에게 권하는 말로 바꿔 쓰세요.' },
          ],
          easy: { note: '"나는 위험 정보를 보면 ~하지 않고, ~한다."', items: [{ type: 'short', prompt: '나의 원칙 한 줄을 쓰세요.' }] },
        },
        notes: note(),
      }),
      M({
        id: 'wrap.map', type: 'wrap', title: '위험 정보를 알릴 곳 확인',
        method: '알릴 곳 확인', tool: 'map', minutes: 7,
        levels: { easy: '지역 칸 지도에서 학교 밖 알릴 곳 한 곳에 핀을 꽂는다.', base: '핀을 꽂고, 게시자가 같은 학교 학생 같을 때 알릴 곳을 고른다.', challenge: '활동지에 밤·주말에 연락할 곳 칸([학교가 확인해 넣는 지역 상담 번호])을 확인해 채운다.' },
        wrap: {
          teacher: '"위험 정보를 봤을 때 알릴 곳을 지도에서 확인해요. 밤에 봤다면 먼저 보호자, 그다음은?" 핀을 꽂은 뒤 우리 지역 청소년 상담 기관과 학교가 확인한 번호를 칠판에 적는다. "밤에는 연락할 곳이 없다"는 학생에게 활동지의 밤·주말 칸을 함께 채우게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 동네 알릴 곳(가상)', places: [{ name: '우리 집', icon: 'house', at: [1, 2] }, { name: '우리 학교', icon: 'school', at: [3, 0] }, { name: '청소년 상담 기관', icon: 'library', at: [5, 2] }, { name: '도서관', icon: 'dot', at: [0, 0] }, { name: '공원', icon: 'park', at: [3, 3] }] }, prompt: '밤에 위험 게시물을 보고 보호자에게 알렸어요. 다음 날 함께 찾아갈 학교 밖 상담 기관에 핀을 꽂으세요.', target: { place: '청소년 상담 기관' }, difficulty: 0.15 },
            { type: 'choice', prompt: '위험 게시물의 게시자가 우리 학교 학생인 것 같을 때 먼저 알릴 곳은?', options: ['같은 반 단톡방', '담임·상담 선생님', '게시자 본인의 댓글 창'], answer: 1, difficulty: 0.15, explain: '아는 사람의 게시물이면 학교가 절차에 따라 살필 수 있도록 선생님께 바로 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '위험 정보를 알릴 곳',
          items: [
            { type: 'table', prompt: '때에 따라 알릴 곳을 쓰세요.', columns: ['때', '알릴 사람·곳', '연락 방법'], cells: [['학교에 있을 때', '', ''], ['밤·주말', '', NUM]] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '위험 정보는 퍼뜨리지 말고 ___하고 알린다.', answer: '신고' },
          ],
        },
        notes: note(NUM_NOTE, '지도는 가상이다. 우리 지역 청소년 상담 기관의 실제 위치·운영 시간은 교사가 확인해 알려 준다.'),
      }),
    );
  }

  // ======================================================================================================
  // 4. 위기의 친구, 연결과 동행 (11학년) — 알아차리고 → 묻고 → 듣고 → 어른·전문가와 잇기
  // ======================================================================================================
  {
    const M = MOD('crisis-connect', [11]);
    const WEEK = [{ id: 'w1', text: '월요일: 태오가 요즘 잠을 거의 못 잔다고 한다', motif: 'moon' }, { id: 'w2', text: '수요일: 아끼던 물건을 친구들에게 나눠 준다', motif: 'leaf' }, { id: 'w3', text: '금요일 밤: "그동안 고마웠어, 다들 잘 지내"라는 메시지가 온다', motif: 'cloud' }, { id: 'w4', text: '금요일 밤 늦게: 답장을 보내도 읽지 않는다', motif: 'storm' }];
    // 동아리 후배의 '절대 비밀' — 비밀보다 안전, 그리고 관계 회복
    const JUNIOR = { text: '방과 후 동아리실을 정리하는데 후배 은재가 "선배, 요즘 다 끝내고 싶다는 생각이 자꾸 들어요. 근데 절대 아무한테도 말하지 마세요"라고 한다.', who: '나', motif: 'cloud', choices: [
      { id: 'keep', text: '"알았어, 비밀 지킬게"라고 약속하고 그날은 헤어진다', result: '은재는 고개를 끄덕이고 집에 간다. 나는 밤새 마음이 무겁다.', impact: [{ who: '은재', text: '도울 수 있는 어른과 이어지지 못한다', tone: -1 }, { who: '나', text: '혼자 감당하기 어려운 걱정을 진다', tone: -1 }],
        next: { text: '다음 날 은재가 동아리에 나오지 않는다.', choices: [
          { id: 'now', text: '지금이라도 상담 선생님께 어제 들은 말을 알린다', result: '상담 선생님이 은재와 보호자에게 바로 연락하기로 한다.', impact: [{ who: '은재', text: '늦었지만 도움이 닿는다', tone: 1 }], ending: '약속했더라도 생명과 관련된 비밀은 어른에게 알리는 것이 맞다.' },
          { id: 'wait', text: '약속했으니 은재가 다시 연락할 때까지 기다린다', result: '은재의 신호는 아무에게도 닿지 않는다.', impact: [{ who: '은재', text: '혼자 견딘다', tone: -1 }], ending: '생명과 관련된 비밀은 지키는 약속이 아니다.' }] } },
      { id: 'stay', text: '"말해 줘서 고마워. 너를 혼자 두고 싶지 않아"라며 곁에 앉아 이야기를 듣는다', result: '은재가 요즘 힘든 마음을 조금씩 털어놓는다.', impact: [{ who: '은재', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '"선생님께 말하면 다시는 선배 안 볼 거예요." 은재가 고개를 돌린다.', choices: [
          { id: 'link', text: '"그래도 너를 잃고 싶지 않아. 지금 상담 선생님께 같이 가자, 옆에 있을게"라고 하며 함께 간다', result: '상담 선생님이 은재의 이야기를 듣고 보호자와 함께 도움을 이어 가기로 한다.', impact: [{ who: '은재', text: '전문가와 이어진다', tone: 1 }, { who: '나', text: '혼자 지던 걱정을 어른과 나눈다', tone: 1 }],
            next: { text: '일주일 뒤, 은재가 나를 보면 어색하게 피한다.', choices: [
              { id: 'care', text: '"요즘 어때? 동아리 끝나고 같이 매점 갈래?"라며 평소처럼 안부를 묻는다', result: '은재가 머뭇거리다 "그때 고마웠어요"라고 말한다.', impact: [{ who: '은재', text: '관계가 다시 이어진다', tone: 1 }], ending: '생명을 먼저 지키고, 그다음 곁에서 관계를 다시 잇는다.' },
              { id: 'avoid', text: '서운해서 나도 은재를 피한다', result: '은재는 도움은 받지만 곁의 사람 하나를 잃는다.', impact: [{ who: '은재', text: '외로움이 남는다', tone: 0 }], ending: '연결한 뒤의 안부도 동행의 한 부분이다.' }] } },
          { id: 'give', text: '은재 말대로 아무에게도 말하지 않기로 한다', result: '은재는 다시 혼자 집으로 간다.', impact: [{ who: '은재', text: '전문가와 이어지지 못한다', tone: -1 }], ending: '관계를 잃을까 두려워 비밀을 지키면 친구의 안전을 잃을 수 있다.' }] } },
      { id: 'cut', text: '부담스러워 "나도 잘 모르겠다"며 자리를 피하고 연락을 줄인다', result: '은재는 말한 것을 후회하며 더 혼자가 된다.', impact: [{ who: '은재', text: '말해도 소용없다고 느낀다', tone: -1 }], ending: '내가 다 해결할 수 없어도, 피하지 않고 어른에게 잇는 일은 할 수 있다.' }] };
    const JUNIOR_R = [{ id: 'life', text: '생명과 관련된 비밀보다 친구의 안전이 먼저다' }, { id: 'stay', text: '혼자 두지 않고 곁에 머물며 전문가에게 잇는다' }, { id: 'after', text: '연결한 뒤에도 안부를 이어 가면 관계를 회복할 수 있다' }, { id: 'promise', text: '약속은 무슨 일이 있어도 지켜야 한다', why: '생명과 관련된 비밀은 지켜야 할 약속의 예외예요.' }, { id: 'mine', text: '친구를 구하는 것은 모두 내 책임이다', why: '내 몫은 알아차리고 듣고 잇는 것이고, 돕는 일은 어른·전문가와 함께해요.' }];
    const pathAt = (n) => [['stay', 'link', 'care'].slice(0, n)];
    const JUNIORQ = {
      prompt: '은재의 \'절대 비밀\' 부탁에 대한 선택을 끝까지 이어 가고, 내 선택의 근거를 고르세요.',
      toolOptions: { scene: JUNIOR, reasons: JUNIOR_R, title: '후배의 절대 비밀' },
      target: { path: pathAt(2), reasons: ['life', 'stay'] }, difficulty: 0.4,
      levels: {
        easy: { prompt: '은재의 \'절대 비밀\' 부탁에서 첫 선택을 고르고 근거를 고르세요(갈림길 하나).', toolOptions: { scene: cut(JUNIOR, 1) }, target: { path: pathAt(1), reasons: ['life', 'stay'] } },
        base: { toolOptions: { scene: cut(JUNIOR, 2) } },
        challenge: { prompt: '은재의 \'절대 비밀\' 부탁을 끝까지 따라가 관계 회복까지 고르고, 생명 우선과 관계 회복의 근거를 고르세요(갈림길 셋).', toolOptions: { scene: JUNIOR }, target: { path: pathAt(3), reasons: ['life', 'stay', 'after'] } },
      },
    };
    JUNIORQ.toolOptions.scene = cut(JUNIOR, 2);
    const STEPS = ['혼자 두지 않고 곁에 머문다', '어른·보호자에게 바로 알린다', `전문가·${NUM}과 잇는다`, '그 뒤에도 안부를 묻는다'];
    const SHARE = [['mine', '알아차리고 말 걸기'], ['mine', '판단 없이 듣기'], ['mine', '혼자 두지 않기'], ['adult', '보호자에게 연락하기'], ['adult', '학교 위기관리 절차 시작하기'], ['pro', '상황을 살펴 도움 계획 세우기'], ['pro', '필요한 상담·치료 정하기']];

    MODS.push(
      M({
        id: 'intro.case', type: 'intro', title: '일주일 동안의 신호 읽기',
        method: '위기 신호 사례 읽기', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장(월·수·금 밤)을 함께 차례로 놓고 가장 걱정되는 장면을 고른다.', base: '장면 4장을 시간 순으로 놓고 언제 바로 어른에게 알려야 하는지 판단한다.', challenge: '바로 알려야 한다고 본 근거(작별 같은 말·연락 끊김)를 짝과 말한다.' },
        intro: {
          teacher: '"가상 친구 태오의 일주일이에요. 장면을 시간 순으로 놓아 보고, 언제 어른에게 알려야 할지 생각해 봐요." 시연 단추로 네 장면이 차례로 놓이는 모습을 보여 준다. "금요일 메시지는 그냥 인사 같은데요"라는 말이 나오면 "앞의 장면들(잠·물건 나눠 주기)과 이어서 보면 어떤가요?"라고 되묻는다. 작별처럼 들리는 말은 그날 바로 믿을 어른에게 알리는 신호이고, 신호 하나하나보다 이어지는 흐름을 보는 것이 중요하다는 점을 짚는다. 오늘은 내가 혼자 구하는 사람이 아니라 알아차리고, 묻고, 듣고, 어른·전문가와 잇는 사람이 되는 법을 배운다고 밝힌다.',
          student: '가상 친구 태오의 일주일 장면을 시간 순으로 놓고, 어느 때 바로 믿을 어른에게 알려야 하는지 판단해 보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '태오의 일주일(가상)', cards: [WEEK[2], WEEK[0], WEEK[3], WEEK[1]] }, sequence: [{ order: ['w1', 'w2', 'w3', 'w4'] }] },
          art: { draw: 'four paper calendar pages in a row with small weather motifs turning from moon to cloud to storm, a paper phone with an unread message bubble, a paper friend reaching toward a trusted adult silhouette', banner: '흐름을 읽어요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: note('장면은 가상이며 방법·수단·장소를 담지 않는다. 금요일 밤처럼 급해 보이는 상황은 보호자·가까운 어른에게 바로 알리고 학교 위기관리 절차와 학교가 확인한 연락처로 잇는다고 말해 준다.'),
      }),
      M({
        id: 'intro.myth', type: 'intro', title: '위기 개입, 맞는 말과 오해',
        method: '위기 개입 오해 판단', tool: 'emotion', minutes: 7,
        levels: { easy: '카드 3장을 교사가 읽어 주고 맞는 말·오해로 함께 나눈다.', base: '카드 5장을 맞는 말·오해로 나누고, 오해 카드마다 근거를 말한다.', challenge: '오해 카드 하나를 골라 바른 문장으로 고쳐 말한다.' },
        intro: {
          teacher: '"위기의 친구를 도울 때 흔히 듣는 말들이에요. 맞는 말일까요, 오해일까요?" 시연 단추로 카드가 두 칸에 나뉘는 모습을 보여 준다. "직접 물어보면 오히려 그 생각을 하게 만들지 않나요?"라는 말이 나오면 "걱정될 때 \'혹시 힘든 생각을 하고 있니?\'라고 물으면, 친구는 말할 기회를 얻을까요, 잃을까요?"라고 되묻는다. 걱정되면 직접 물어도 괜찮고, 전문가가 아니어도 알아차리고 잇는 일은 누구나 할 수 있다는 점을 짚는다.',
          student: '위기의 친구를 도울 때 흔히 듣는 말 카드를 맞는 말과 오해로 나누고, 오해라면 왜 그런지 근거를 말해 보세요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['맞는 말', '오해'], cards: ['걱정되면 직접 물어봐도 괜찮다', '생명과 관련된 비밀은 어른에게 알린다', '전문가만 위기의 친구를 도울 수 있다', '직접 물으면 그 생각을 심어 준다', '친구를 구하는 것은 모두 내 책임이다'] }, sequence: [{ sort: { '맞는 말': ['걱정되면 직접 물어봐도 괜찮다', '생명과 관련된 비밀은 어른에게 알린다'], 오해: ['전문가만 위기의 친구를 도울 수 있다', '직접 물으면 그 생각을 심어 준다', '친구를 구하는 것은 모두 내 책임이다'] } }] },
          art: { draw: 'paper cards being sorted into two paper trays labeled with a check mark and a question mark, a paper student and a friend sitting side by side on a bench, a gentle speech bubble between them', banner: '맞는 말일까, 오해일까?', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
        },
        notes: note('\'직접 물어도 괜찮다\'는 생명지킴이 교육의 묻기 단계다(사람 확인 목록). 물을 때도 방법·수단을 캐묻지 않고 마음과 안전을 묻는다.'),
      }),

      M({
        id: 'activity.dilemma', type: 'activity', title: '비밀과 생명 사이 갈림길',
        method: '비밀과 생명 사이', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길에서 고르고 생명 우선 근거를 고른다.', base: '갈림길 둘까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋(관계 회복)까지 따라가 생명 우선과 관계 회복의 근거를 함께 고른다.' },
        activity: {
          title: '후배의 절대 비밀', tool: 'dilemma',
          teacher: '"후배가 힘든 마음을 털어놓으며 \'절대 비밀\'을 부탁해요. 비밀을 지키면 의리, 알리면 배신일까요?" 선택마다 은재와 나에게 생긴 영향을 소리 내어 읽게 한다. \'비밀을 지킨다\'를 고른 학생에게 "그 약속이 지켜지는 동안 은재를 도울 수 있는 어른은 몇 명일까요?"라고 묻는다. 은재가 "다시는 안 볼 거예요"라고 할 때가 가장 어렵다는 것을 인정하고, 생명을 먼저 지키고 그다음 안부로 관계를 다시 잇는다는 점을 짚는다. 친구를 구하는 것이 모두 내 책임은 아니며, 내 몫은 곁에 머물고 잇는 것이라고 말해 준다.',
          task: '은재의 비밀 부탁 갈림길을 따라 결과를 보고, 생명을 먼저 지키는 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            JUNIORQ,
            EXPLOREQ('\'비밀을 지킨다\' 길과 \'자리를 피한다\' 길도 끝까지 가 보고 은재에게 생긴 영향을 견주세요.', JUNIOR, JUNIOR_R, ['다른 길의 끝 장면을 확인했다', '은재가 도움과 가까워졌는지 멀어졌는지 견주었다'], { d: 0.35 }),
            DILQ('은재가 상담 선생님과 이어진 뒤, 동아리 친구들이 "은재 무슨 일 있어?"라고 물어요. 알맞은 길을 고르세요.', { text: '은재가 며칠 동아리에 빠지자 친구들이 "은재 무슨 일 있어? 너는 알지?"라고 묻는다.', who: '나', motif: 'house', choices: [
              { id: 'private', text: '"은재 이야기는 은재가 하고 싶을 때 할 거야. 우리는 돌아오면 반갑게 맞자"고 한다', result: '친구들이 더 묻지 않고, 은재 자리를 비워 둔다.', impact: [{ who: '은재', text: '사생활이 지켜진다', tone: 1 }],
                next: { text: '한 친구가 "그래도 궁금한데 단톡방에서 은재한테 물어볼까?"라고 한다.', choices: [
                  { id: 'gentle', text: '"캐묻지 말고 \'보고 싶다\'는 안부만 보내자"고 한다', result: '은재가 안부 메시지에 짧게 고맙다고 답한다.', impact: [{ who: '은재', text: '돌아올 자리가 있다고 느낀다', tone: 1 }], ending: '친구의 위기는 소문거리가 아니라 지켜 줄 사생활이다.' },
                  { id: 'ask', text: '"그래, 직접 물어보자"며 단톡방에 묻는다', result: '은재가 단톡방에서 나간다.', impact: [{ who: '은재', text: '부담을 느낀다', tone: -1 }], ending: '여럿 앞에서 캐묻는 것은 관심이 아니라 부담이 될 수 있다.' }] } },
              { id: 'tellall', text: '들은 이야기를 친구들에게 자세히 전한다', result: '은재의 이야기가 소문처럼 퍼진다.', impact: [{ who: '은재', text: '믿음이 무너지고 더 숨는다', tone: -1 }], ending: '어른에게 알리는 것과 친구들에게 퍼뜨리는 것은 다르다.' },
              { id: 'joke', text: '"그냥 관심받고 싶은 거야"라고 넘긴다', result: '친구들 사이에 잘못된 말이 남는다.', impact: [{ who: '은재', text: '돌아올 자리가 좁아진다', tone: -1 }], ending: '힘든 시기를 깎아내리는 말은 돌아올 자리를 좁힌다.' }] },
            [['private', 'gentle']], [{ id: 'privacy', text: '어른에게 알리는 것과 친구들에게 퍼뜨리는 것은 다르다' }, { id: 'welcome', text: '돌아올 자리를 지켜 주는 것도 동행이다' }, { id: 'curious', text: '친구들이 궁금해하면 알려 주는 것이 솔직함이다', why: '친구의 위기는 그 친구의 사생활이에요. 알릴 곳은 도울 수 있는 어른이에요.' }], ['privacy', 'welcome'], { d: 0.35, more: { conclude: '생명과 관련된 비밀은 어른에게 알리고, 친구들에게는 퍼뜨리지 않아요. 곁에 머물고 돌아올 자리를 지키는 것이 동행이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '은재에게 "선생님께 같이 가자"고 말할 때, 은재의 마음을 존중하며 건넬 첫 두 문장을 쓰세요.' }] },
        notes: note('인물은 가상이다. 실제 친구 이름을 쓰지 않게 한다. 당장 위험해 보이는 상황은 학생이 혼자 판단하지 않고 곁의 어른·보호자에게 바로 알린다고 짚는다.'),
      }),
      M({
        id: 'activity.steps', type: 'activity', title: '연결 절차 설계하기',
        method: '연결 절차 설계', tool: 'kitchen', minutes: 18,
        levels: { easy: '점검 항목 4개에서 지금 할 일을 고르고, 절차 카드 3장을 차례로 놓는다.', base: '항목 7개에서 할 일만 고르고, 연결 절차 4칸을 차례로 놓고, 상황별 갈래를 짝짓는다.', challenge: '카드를 섞어 놓고, 활동지에 어른이 곁에 없을 때의 갈래까지 설계한다.' },
        activity: {
          title: '혼자 두지 않기부터 안부까지', tool: 'kitchen',
          teacher: '"친구가 위기 신호를 보일 때의 연결 절차를 체크리스트로 설계해요. 혼자 두지 않기 → 어른에게 바로 알리기 → 전문가와 잇기 → 그 뒤의 안부." 문항마다 "이 행동은 내 몫일까요, 어른·전문가의 몫일까요?"라고 묻는다. "내가 끝까지 해결해야 한다"는 학생에게 "끝까지 해야 하는 것은 해결이 아니라 연결이에요"라고 말한다. 어른이 곁에 없을 때는 보호자·가까운 어른에게 연락하고, 학교가 확인한 번호로 잇는 갈래를 함께 정한다.',
          task: '위기 신호를 보인 친구를 잇는 절차를 고르고, 차례로 놓고, 상황별 갈래를 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHECKQ('친구가 위기 신호를 보일 때 지금 할 일만 골라 표시하세요.', '위기 신호를 보일 때', [['stay', '곁에 머물며 혼자 두지 않기', true], ['tell', '어른·보호자에게 바로 알리기', true], ['keep', '친구가 원하니 비밀 지키기', false], ['listen', '판단하지 않고 듣기', true], ['fix', '내가 해결책을 찾아 주기', false], ['link', '전문가와 이어 주기', true], ['spread', '친구들에게 의견 묻기', false]], { k: 4, d: 0.25 }),
            ORDERQ('위기의 친구를 잇는 절차를 차례로 놓으세요.', STEPS, { k: 3, d: 0.3 }),
            MATCHQ('상황마다 먼저 할 일을 짝지으세요.', [['학교에서 친구가 위기 신호를 보인다', '친구 곁에 머물며 담임·상담 선생님을 부른다'], ['밤이라 학교 선생님과 연락이 안 된다', '내 보호자·친구의 보호자에게 바로 알린다'], ['곁에 어른이 아무도 없다', `${NUM}에 연락해 도움을 청한다`]], { k: 2, extra: ['다음 날까지 기다린다'], d: 0.4, more: { conclude: '혼자 두지 않기 → 어른에게 바로 알리기 → 전문가와 잇기 → 안부. 학교 선생님이 없으면 보호자, 어른이 없으면 학교가 확인한 번호로 이어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '어른이 곁에 없을 때의 갈래를 설계하세요.', columns: ['상황', '먼저 연락할 사람·곳', '그동안 내가 할 일'], cells: [['학교 밖, 낮', '', ''], ['밤·주말', '', ''], ['어른과 연락이 안 될 때', NUM, '']] }] },
        notes: note(NUM_NOTE, '연결 절차는 생명지킴이(보고·듣고·말하기) 교육의 틀을 따른 것이다(사람 확인 목록). 긴급한 경우의 신고 번호는 학교가 공식 안내로 확인해 칠판에 적는다.'),
      }),
      M({
        id: 'activity.script', type: 'activity', title: '도움 요청 전화 대본 쓰기',
        method: '전화로 도움 요청 대본', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '칸마다 문장 틀을 보고 대본 3줄(누가·왜·지금 상태)을 쓴다.', base: '첫 말·신호와 상태·질문에 대한 답을 틀 없이 쓰고 기준표로 점검한다(모두 합쳐 6줄 안팎).', challenge: '칸마다 기준 하나가 더 붙고, 상담 기관이 물을 때의 대답까지 넣는다.' },
        activity: {
          title: '상황을 알리는 대본', tool: 'rubric-writing',
          teacher: '"막상 어른이나 상담 기관에 연락하면 무슨 말부터 할지 막막해요. 오늘은 가상 친구 태오의 상황을 알리는 대본을 미리 써 봐요." 기준표를 함께 읽고 쓰게 한다. 신호를 자세히 묘사하려는 학생에게 "상담 기관이 알아야 할 것은 \'무슨 신호가 있었고 지금 어떤 상태인지\'예요. 방법이나 자세한 내용은 쓰지 않아요"라고 말한다. "제가 연락하면 일이 커질까 봐 무서워요"라는 학생에게 "일을 키우는 것이 아니라 친구를 지킬 사람을 늘리는 거예요"라고 답한다. 실제 이름·연락처는 쓰지 않는다.',
          task: '가상 친구 태오의 상황을 어른·상담 기관에 알리는 대본을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('상담 기관에 연락했을 때의 첫 말을 1~2문장으로 쓰세요.', '가상 친구 태오가 걱정되어 상담 기관에 연락했어요. 내가 누구이고 왜 연락했는지 첫 말을 쓰세요(실제 이름 쓰지 않기).', ['내가 누구인지(친구·학생) 밝혔다', '친구가 걱정되어 연락했다고 말했다', '실제 이름·연락처를 쓰지 않았다'], { min: 20, max: 200, sent: [1, 2], must: [['친구', '걱정']], starter: '안녕하세요, 저는 ~인데 친구가 걱정되어 연락했어요.', plus: '지금 어디에서 연락하는지 밝혔다', d: 0.3 }),
            RWQ('어떤 신호가 있었고 친구가 지금 어떤 상태인지 2~3문장으로 쓰세요.', '태오에게 있었던 신호(잠·물건 나눠 주기·작별 같은 메시지)와 지금 상태(연락이 안 됨 등)를 차분히 쓰세요. 방법이나 자세한 내용은 쓰지 않아요.', ['있었던 신호를 짧게 썼다', '지금 상태를 썼다', '방법·자세한 내용을 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['메시지', '신호', '연락']], starter: '친구가 요즘 ~했고, 오늘 밤 ~라는 메시지를 보냈어요. 지금은 ~', plus: '언제부터 그랬는지 시간 순서로 썼다', d: 0.35 }),
            RWQ('상담 기관이 "보호자에게 연락할 수 있나요?"라고 물을 때의 대답을 2~3문장으로 쓰세요.', '상담 기관이 "친구 보호자에게 연락할 수 있나요?"라고 물었어요. 내가 할 수 있는 것과 도움이 필요한 것을 쓰세요.', ['내가 할 수 있는 것을 솔직히 말했다', '도움이 필요한 부분을 요청했다', '안내를 따르겠다고 했다'], { min: 40, max: 300, sent: [2, 3], starter: '저는 ~할 수 있어요. 하지만 ~는 도와주세요.', plus: '연락 뒤에 내가 할 일(곁에 있기 등)을 물었다', sample: '저는 친구 보호자의 연락처는 모르지만 담임 선생님께는 연락할 수 있어요. 보호자에게 알리는 것은 도와주세요. 그동안 제가 무엇을 하면 좋을지도 알려 주세요.', d: 0.4, more: { conclude: '도움 요청 대본은 누가·무슨 신호·지금 상태·도움이 필요한 것 네 가지면 충분해요. 자세한 내용보다 빨리 잇는 것이 중요해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '전화 대본 뼈대를 채우세요(실제 이름·연락처 없이).', columns: ['칸', '내 말'], cells: [['내가 누구인지', ''], ['무슨 신호가 있었는지', ''], ['지금 상태', ''], ['도움이 필요한 것', '']] }] },
        notes: note(NUM_NOTE, '대본은 가상 친구를 위한 연습이다. 쓴 글에 실제 이름·연락처가 들어가면 교구가 가리고 정답 처리하지 않는다.'),
      }),
      M({
        id: 'activity.practice', type: 'activity', title: '연결 장면 동행 역할극',
        method: '동행 역할극', tool: 'timer', minutes: 18,
        levels: { easy: '역할극 1회(연기 4분·피드백 1분)로 타이머를 맞추고 안전 약속을 확인한다.', base: '역할을 바꿔 가며 3회 하도록 타이머를 맞추고, 차례를 놓고, 관찰자 점검표로 피드백한다.', challenge: '점검표에 어려운 반응 카드("너도 똑같아")에 차분히 답했는지가 더해진다.' },
        activity: {
          title: '역할극 시간과 점검', tool: 'timer',
          teacher: '"모둠에서 친구 역·돕는 사람 역·관찰자 역을 나눠, 오늘 배운 연결 장면을 4분씩 연기해요. 끝나면 관찰자가 1분 동안 피드백해요." 시작 전에 안전 약속을 함께 읽고 모두 확인하게 한다. 친구 역을 너무 실감 나게 하려는 학생에게 "오늘은 연기를 잘하는 시간이 아니라 돕는 말을 연습하는 시간이에요. 방법이나 자세한 내용은 대사에 넣지 않아요"라고 말한다. 역할극 중 힘들어지면 언제든 멈출 수 있고, 수업 뒤 이야기하고 싶은 사람은 상담 선생님을 찾아도 된다고 알린다.',
          task: '역할극 시간을 맞추고, 안전 약속과 차례를 확인한 뒤 관찰자 점검표로 피드백해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '연기 4분·피드백 1분을 역할을 바꿔 3번 하도록 타이머를 맞추세요.', toolOptions: { title: '동행 역할극 시간', timeUnit: 'min', labels: ['연기', '피드백'], plan: { work: 2, rest: 2, rounds: 1 } }, target: { plan: { work: 4, rest: 1, rounds: 3 } }, difficulty: 0.2,
              levels: { easy: { prompt: '연기 4분·피드백 1분을 1번 하도록 타이머를 맞추세요.', target: { plan: { work: 4, rest: 1, rounds: 1 } } } } },
            { prompt: '역할극을 시작하기 전에 모둠의 안전 약속을 모두 확인하세요.', toolOptions: { title: '역할극 안전 약속', safety: ['실제 내 이야기·친구 이름을 쓰지 않는다', '방법·자세한 내용은 대사에 넣지 않는다', '힘들면 누구든 언제든 멈출 수 있다', '역할극에서 한 말은 교실 밖으로 옮기지 않는다'] }, target: { safety: true }, difficulty: 0.15 },
            { prompt: '한 번의 역할극 차례를 바르게 놓으세요.', toolOptions: { title: '역할극 한 번의 차례', cards: ['관찰자가 점검표로 피드백하기', '역할 정하기(친구·돕는 사람·관찰자)', '장면 연기하기', '역할 바꾸기'] }, target: { order: ['역할 정하기(친구·돕는 사람·관찰자)', '장면 연기하기', '관찰자가 점검표로 피드백하기', '역할 바꾸기'] }, difficulty: 0.25 },
            { prompt: '관찰자가 되어 돕는 사람 역의 연기를 점검표로 표시하세요.', toolOptions: { title: '관찰자 점검표' }, target: { selfCheck: ['판단하지 않고 끝까지 들었다', '걱정되는 마음을 직접 물어보았다', '어른·전문가에게 함께 가자고 했다', '혼자 두지 않겠다고 말했다'] }, difficulty: 0.2,
              levels: { challenge: { prompt: '관찰자가 되어 점검표로 표시하세요. 어려운 반응 카드("너도 똑같아")에 답했는지도 보세요(항목 하나 더).', target: { selfCheck: ['판단하지 않고 끝까지 들었다', '걱정되는 마음을 직접 물어보았다', '어른·전문가에게 함께 가자고 했다', '혼자 두지 않겠다고 말했다', '어려운 반응에도 차분히 다시 다가갔다'] } } },
              conclude: '동행은 듣기·묻기·함께 가기·곁에 머물기예요. 연습해 둔 말이 실제 순간에 나와요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '역할극에서 가장 어려웠던 순간과, 다음에 해 볼 말 한 문장을 쓰세요.' }] },
        notes: note('역할극 장면은 오늘 배운 가상 사례(태오·은재)로만 한다. 학생이 친구 역을 하며 힘들어 보이면 바로 멈추고 역할을 바꾸거나 쉬게 한다.'),
      }),

      M({
        id: 'wrap.limit', type: 'wrap', title: '내 몫과 어른·전문가의 몫',
        method: '내 책임과 전문가의 책임', tool: 'mindmap', minutes: 7,
        levels: { easy: '내 몫·어른 몫 두 가지를 교사와 함께 먼저 짚고 카드를 단다.', base: '카드 7장을 내 몫·어른 몫·전문가 몫 세 가지에 단다.', challenge: '활동지에 \'돕는 내 마음 돌봄\' 가지를 더해 할 일을 쓴다.' },
        wrap: {
          teacher: '"가운데에 \'위기의 친구\'가 있어요. 무엇이 내 몫이고, 무엇이 어른과 전문가의 몫일까요?" 카드를 단 뒤 \'도움 계획 세우기\'를 내 몫에 단 학생이 있으면 "그 계획을 세우려면 무엇을 알아야 할까요? 그건 누가 할 수 있을까요?"라고 되묻는다. 친구를 구하는 것이 모두 내 책임은 아니라는 것, 돕는 사람도 자기 마음을 돌봐야 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '위기의 친구', slots: ['내 몫', '어른 몫', '전문가 몫'], cards: SHARE.map((x) => x[1]) }, prompt: '카드를 내 몫·어른 몫·전문가 몫 가지에 다세요.', target: { sort: { '내 몫': SHARE.filter((x) => x[0] === 'mine').map((x) => x[1]), '어른 몫': SHARE.filter((x) => x[0] === 'adult').map((x) => x[1]), '전문가 몫': SHARE.filter((x) => x[0] === 'pro').map((x) => x[1]) } }, difficulty: 0.25 },
            { type: 'choice', prompt: '"친구를 위기에서 구하는 것은 내 책임이다"라는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 끝까지 혼자 책임져야 한다', '내 몫은 알아차리고 듣고 잇는 것이고, 돕는 일은 어른·전문가와 함께한다', '내 책임이 아니니 모른 척해도 된다'], answer: 1, difficulty: 0.2, explain: '혼자 짊어지지도, 모른 척하지도 않아요. 곁에 머물고 어른·전문가에게 잇는 것이 내 몫이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 몫과 전문가의 몫',
          items: [
            { type: 'table', prompt: '세 몫에 할 일을 하나씩 더 쓰세요.', columns: ['내 몫', '어른 몫', '전문가 몫'], cells: [['', '', '']] },
            { type: 'short', prompt: '친구를 도운 뒤 내 마음을 돌볼 방법 하나를 쓰세요(혼자 보기).' },
          ],
        },
        notes: note(),
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '돕는 사람에게 필요한 것',
        method: '돕는 사람의 성찰', tool: 'collage', minutes: 7,
        levels: { easy: '포스터 문구 자리만 정하고 조각 몇 개로 꾸민다.', base: '문구와 그림 조각으로 \'쉼·대화·경계\'를 담은 포스터 한 장을 꾸미고 점검한다.', challenge: '활동지에 학교 자원 정보(상담실 위치·운영 시간)를 넣어 포스터 문구를 완성한다.' },
        wrap: {
          teacher: '"친구를 돕는 사람도 지칠 수 있어요. 돕는 사람에게 필요한 것 — 쉼, 대화, 경계를 담은 한 장 포스터를 만들어 봐요." 조각을 놓기 전에 문구를 먼저 정하게 한다. "도와주는 사람은 힘들다고 하면 안 된다"는 학생에게 "비행기에서 산소마스크를 누구에게 먼저 쓰라고 하나요?"라고 되묻는다. 돕다가 마음이 무거워지면 돕는 사람도 상담 선생님을 찾을 수 있다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '돕는 사람에게 필요한 쉼·대화·경계를 담은 포스터를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['쉼을 나타냈다', '대화(나도 털어놓기)를 나타냈다', '경계(혼자 다 하지 않기)를 나타냈다'], minPieces: 3 }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구를 돕다가 내 마음이 무거워졌을 때 알맞은 행동은?', options: ['친구를 위해 끝까지 혼자 참는다', '나도 믿을 어른·상담 선생님과 이야기한다', '친구와 연락을 끊는다'], answer: 1, difficulty: 0.15, explain: '돕는 사람도 도움을 받을 수 있어요. 내 마음을 돌봐야 곁에 오래 있을 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '돕는 사람의 포스터',
          items: [
            { type: 'short', prompt: '포스터의 한 줄 문구를 쓰세요(쉼·대화·경계 가운데 하나 이상 담기).' },
            { type: 'table', prompt: '포스터에 넣을 학교 자원 정보를 쓰세요.', columns: ['자원', '위치', '이용 시간'], cells: [['학교 상담실', '', ''], ['보건실', '', '']] },
          ],
        },
        notes: note('포스터에 위기 장면·방법을 그리지 않는다. 오늘 수업 뒤 이야기하고 싶은 학생이 상담실을 찾을 수 있도록 상담실 위치·시간을 칠판에 남겨 둔다.'),
      }),
    );
  }

  // ======================================================================================================
  // 5. 보호 요인과 관계망 설계 (11학년)
  // ======================================================================================================
  {
    const M = MOD('protective-network', [11]);
    const BELONG = [['소속감 낮음', 8], ['소속감 보통', 5], ['소속감 높음', 3]];
    const BELONG_T = '소속감 수준별 스트레스 정도(가상 자료, 상대 크기)';
    // 조용한 전학생 — 작은 관심부터
    const NEWBIE = { text: '3월 둘째 주, 전학 온 한결이는 쉬는 시간마다 이어폰을 끼고 혼자 앉아 있다. 모둠 활동 때도 말이 거의 없다.', who: '나', motif: 'house', choices: [
      { id: 'none', text: '혼자가 편한가 보다 하고 신경 쓰지 않는다', result: '한 달이 지나도 한결이는 반에서 이야기할 사람이 없다.', impact: [{ who: '한결', text: '반에 자리가 없다고 느낀다', tone: -1 }], ending: '혼자 있는 모습이 늘 원해서인지는 물어보기 전에는 모른다.' },
      { id: 'force', text: '친구들을 모아 한결이를 무리에 억지로 끼운다', result: '여럿이 한꺼번에 말을 걸자 한결이가 당황해 자리를 피한다.', impact: [{ who: '한결', text: '부담을 느낀다', tone: -1 }],
        next: { text: '다음 날 한결이가 쉬는 시간마다 교실 밖으로 나간다.', choices: [
          { id: 'sorry', text: '"어제 너무 갑작스러웠지? 미안해"라고 따로 말한다', result: '한결이가 "괜찮아"라며 조금 웃는다.', impact: [{ who: '한결', text: '마음이 조금 풀린다', tone: 1 }], ending: '관심은 상대의 속도에 맞출 때 닿는다.' },
          { id: 'blame', text: '"우리가 챙겨 줬는데 왜 저래"라고 말한다', result: '반 분위기가 한결이에게 차가워진다.', impact: [{ who: '한결', text: '더 고립된다', tone: -1 }], ending: '내 방식의 관심을 거절당했다고 상대를 탓하면 거리가 더 멀어진다.' }] } },
      { id: 'small', text: '모둠 활동 때 "이 부분 같이 해 볼래?"라고 작게 말을 건다', result: '한결이가 고개를 끄덕이고 맡은 부분을 해 온다.', impact: [{ who: '한결', text: '반에서 할 역할이 생긴다', tone: 1 }],
        next: { text: '며칠 뒤 한결이가 점심시간에 혼자 급식실로 가는 것을 본다.', choices: [
          { id: 'lunch', text: '"같이 먹을래? 싫으면 괜찮아"라고 묻는다', result: '한결이가 "응"이라고 답하고 같이 앉는다.', impact: [{ who: '한결', text: '함께하는 시간이 생긴다', tone: 1 }],
            next: { text: '한결이가 "사실 전 학교 친구들이랑 연락이 끊겨서 좀 힘들었어"라고 말한다.', choices: [
              { id: 'listen', text: '"그랬구나, 많이 낯설었겠다"라며 들어 주고, 학급 동아리도 함께 알아보자고 한다', result: '한결이가 반과 동아리에 조금씩 자리를 잡는다.', impact: [{ who: '한결', text: '관계망이 넓어진다', tone: 1 }], ending: '작은 관심이 대화로, 대화가 소속으로 이어진다.' },
              { id: 'switch', text: '"다 지나가"라며 바로 다른 이야기로 넘어간다', result: '한결이가 다시 말이 줄어든다.', impact: [{ who: '한결', text: '이야기할 틈을 잃는다', tone: 0 }], ending: '꺼낸 마음은 들어 줄 때 관계가 깊어진다.' }] } },
          { id: 'skip', text: '모둠 활동 때만 친하면 된다며 지나친다', result: '한결이의 점심시간은 그대로 혼자다.', impact: [{ who: '한결', text: '관계가 수업 시간에만 머문다', tone: 0 }], ending: '소속감은 여러 자리에서 조금씩 쌓인다.' }] } }] };
    const NEWBIE_R = [{ id: 'pace', text: '작은 관심부터, 상대의 속도에 맞춘다' }, { id: 'choice', text: '거절할 수 있게 물어보면 부담이 줄어든다' }, { id: 'more', text: '관심은 여럿이 한꺼번에 줄수록 좋다', why: '한꺼번에 많은 관심은 부담이 될 수 있어요. 관계는 많기보다 믿을 만해야 해요.' }, { id: 'alone', text: '혼자 있는 사람은 원해서 그런 것이니 둔다', why: '원해서인지는 물어보기 전에는 몰라요.' }];

    MODS.push(
      M({
        id: 'intro.data', type: 'intro', title: '소속감과 스트레스 자료',
        method: '소속감과 마음건강 자료', tool: 'chart', minutes: 7,
        levels: { easy: '막대 값을 보며 스트레스가 가장 높은 집단을 함께 읽는다.', base: '소속감과 스트레스의 관계를 해석해 말한다.', challenge: '이 자료만으로 \'소속감이 낮아서 스트레스가 높다\'고 단정할 수 없는 까닭을 말한다.' },
        intro: {
          teacher: '"가상 자료예요. 학교에서 느끼는 소속감에 따라 스트레스 정도가 어떻게 다를까요?" 시연 단추로 가장 높은 막대를 고르는 모습을 보여 준다. "그럼 소속감만 높이면 스트레스가 없어지겠네요"라는 말이 나오면 "두 가지가 함께 움직인다는 것과 하나가 다른 하나의 원인이라는 것은 같을까요? 스트레스가 커서 사람을 덜 만나게 된 것일 수도 있지 않을까요?"라고 되묻는다. 상관과 인과를 구별하되, 관계와 소속감은 함께 키울 수 있는 보호 요인이라는 점을 짚는다.',
          student: '가상 자료 막대그래프에서 소속감 수준별 스트레스 정도를 읽고, 둘의 관계를 \'함께 움직인다\'와 \'원인이다\'로 구별해 말해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: BELONG_T, yLabel: '스트레스 정도', xLabel: '소속감', data: BELONG, question: '스트레스 정도가 가장 높은 집단은?', choices: BELONG.map((x) => x[0]), showValues: true }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with three bars stepping down, small paper figures standing alone on the tall bar and holding hands on the short bar, a paper magnifying glass with a question mark between cause and correlation', banner: '함께 움직일까, 원인일까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: note('자료는 수업용 가상 값이다(화면 제목에 밝힘). 소속감·사회적 지지가 보호 요인이라는 설명은 일반 설명이다(사람 확인 목록). 실제 연구 수치가 필요하면 교사가 최신 공식 자료를 확인해 넣는다.'),
      }),
      M({
        id: 'intro.web', type: 'intro', title: '나를 둘러싼 관계망',
        method: '관계망 그리기', tool: 'mindmap', minutes: 7,
        levels: { easy: '가족·친구·학교 세 가지에 역할 카드를 함께 단다.', base: '가족·친구·학교·지역·온라인 다섯 가지에 지지 유형 카드를 단다.', challenge: '빈 가지를 채울 방법을 하나 떠올려 활동지에 혼자 적어 둔다.' },
        intro: {
          teacher: '"가운데에 \'나\'가 있어요. 가족·친구·학교·지역·온라인 가지에 누가, 어떤 지지를 주는지 이름 대신 역할로 달아 봐요." 시연 단추로 역할 카드가 가지에 달리는 모습을 보여 준다. "친구가 많으면 관계망이 튼튼한 거죠?"라는 말이 나오면 "100명과 아는 사이인 것과, 힘들 때 이야기할 한 사람이 있는 것 중 무엇이 더 힘이 될까요?"라고 되묻는다. 지지는 정서(들어 줌)·정보(알려 줌)·실질(함께해 줌)로 나뉘고, 관계는 많기보다 믿을 만해야 한다는 점을 짚는다. 학생 자신의 관계망은 발표하지 않고 활동지 혼자 보기 칸에만 적는다.',
          student: '가운데 \'나\'에서 가족·친구·학교·지역·온라인 가지에 어떤 사람이 어떤 지지를 주는지 이름 대신 역할로 떠올려 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '나', slots: ['가족', '친구', '학교', '지역', '온라인'], cards: ['보호자 — 들어 줌', '친구 — 함께 시간 보냄', '상담 선생님 — 고민 정리', '청소년 상담 기관 — 학교 밖 상담', '믿을 만한 공공기관 안내 — 정보'] }, sequence: [{ sort: { 가족: ['보호자 — 들어 줌'], 친구: ['친구 — 함께 시간 보냄'], 학교: ['상담 선생님 — 고민 정리'], 지역: ['청소년 상담 기관 — 학교 밖 상담'], 온라인: ['믿을 만한 공공기관 안내 — 정보'] } }] },
          art: { draw: 'a paper web radiating from a small paper figure in the center to five paper nodes shaped like a house, two friends, a school, a town building and a phone, threads of different thickness connecting them', banner: '나를 잇는 실', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: note('학생 자신의 관계망을 발표하거나 걷지 않는다(활동지 혼자 보기). 관계망이 비어 보이는 학생이 있으면 수업 뒤 조용히 살핀다.'),
      }),

      M({
        id: 'activity.design', type: 'activity', title: '혼자인 친구 없는 학급 제안',
        method: '학급 지지 구조 제안', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '칸마다 문장 틀을 보고 문제와 방안 하나를 쓴다.', base: '문제·방안 두 가지·실행과 평가를 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 반대 의견과 그에 대한 답을 넣는다.' },
        activity: {
          title: '새 학기 학급 지지 구조', tool: 'rubric-writing',
          teacher: '"새 학기에 우리 반에서 혼자인 친구가 없게 하려면 어떤 구조가 필요할까요? 문제·방안·실행·평가 네 칸으로 제안해 봐요." 기준표를 함께 읽고 쓰게 한다. "다 같이 친하게 지내자"처럼 구조가 없는 방안에 "누가, 언제, 어떤 자리를 만들까요?"라고 되묻는다. 특정 학생을 \'챙길 대상\'으로 지목하는 방안이 나오면 "모두가 자연스럽게 섞이는 구조는 없을까요?"라고 묻는다. 좋은 구조는 누구도 낙인찍지 않고 모두에게 자리를 준다는 점을 짚는다.',
          task: '새 학기 학급에서 혼자인 친구가 없게 하는 제안을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안의 문제를 2~3문장으로 쓰세요.', '새 학기 학급에서 혼자가 되기 쉬운 때(쉬는 시간·점심·모둠 정하기 등)를 짚어 문제를 쓰세요.', ['혼자 되기 쉬운 때를 구체적으로 썼다', '한 사람의 성격이 아니라 학급 구조의 문제로 썼다', '특정 학생을 지목하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['혼자', '소속']], starter: '새 학기에는 ~할 때 혼자가 되기 쉽다. 그 까닭은 ~', plus: '그 문제가 왜 중요한지(보호 요인과 이어) 썼다', d: 0.35 }),
            RWQ('방안과 실행 계획을 2~3문장으로 쓰세요.', '앞의 문제를 줄일 학급 방안과 실행(누가·언제·어떻게)을 쓰세요.', ['방안이 문제와 짝이 맞는다', '누가·언제·어떻게를 썼다', '모두가 자연스럽게 참여하는 구조다'], { min: 40, max: 300, sent: [2, 3], starter: '첫째, ~마다 ~를 바꿔 ~한다. 둘째, ~', plus: '방안을 두 가지로 썼다', d: 0.4 }),
            RWQ('평가 방법과 예상 반대에 대한 답을 2~3문장으로 쓰세요.', '방안이 효과가 있는지 어떻게 확인할지, 예상되는 반대에는 어떻게 답할지 쓰세요.', ['확인할 방법(익명 설문 등)을 썼다', '예상되는 반대 의견을 썼다', '반대에 대한 답을 썼다'], { min: 40, max: 300, sent: [2, 3], starter: '한 달 뒤 ~로 확인한다. "~"라는 반대가 있을 수 있지만 ~', plus: '방안을 고칠 시점을 정했다', sample: '한 달 뒤 익명 설문으로 \'쉬는 시간에 이야기할 사람이 있다\'는 응답을 확인한다. "모둠을 자꾸 바꾸면 불편하다"는 반대가 있을 수 있지만, 한 달에 한 번만 바꾸고 원하면 짝을 고를 수 있게 한다. 두 달 뒤 결과를 보고 방법을 고친다.', d: 0.4, more: { conclude: '좋은 지지 구조는 누구도 지목하지 않고 모두에게 자리를 주며, 효과를 확인하고 고쳐 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안의 뼈대를 채우세요.', columns: ['칸', '내용'], cells: [['문제', ''], ['방안', ''], ['실행(누가·언제)', ''], ['평가', '']] }] },
        notes: note('제안서는 학급 회의·학생회와 실제로 나눌 수 있다. 특정 학생을 지목하는 문장이 나오지 않게 살핀다.'),
      }),
      M({
        id: 'activity.dilemma', type: 'activity', title: '전학 온 친구 갈림길',
        method: '전학 온 친구', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가 작은 관심이 관계망으로 이어지는 길을 찾고 근거 두 개를 고른다.' },
        activity: {
          title: '조용한 전학생', tool: 'dilemma',
          teacher: '"전학 온 한결이는 쉬는 시간마다 혼자예요. 무관심, 억지로 끼우기, 작은 관심 — 어떤 길이 한결이에게 자리를 만들어 줄까요?" 선택마다 한결이에게 생긴 영향을 읽게 한다. \'억지로 끼운다\'를 고른 학생에게 "좋은 뜻이었는데 왜 한결이는 자리를 피했을까요?"라고 묻는다. 관계는 많을수록 좋은 것이 아니라 믿을 만하고 상대의 속도에 맞을 때 보호 요인이 된다는 점을 짚는다.',
          task: '전학 온 한결이와의 갈림길을 따라 결과를 보고, 관계를 잇는 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('한결이와의 갈림길을 따라가고, 한결이에게 자리를 만들어 주는 길과 근거를 고르세요.', NEWBIE, [['small', 'lunch', 'listen']], NEWBIE_R, ['pace', 'choice'], { d: 0.4 }),
            EXPLOREQ('\'신경 쓰지 않는다\' 길과 \'억지로 끼운다\' 길도 끝까지 가 보고 한결이에게 생긴 영향을 견주세요.', NEWBIE, NEWBIE_R, ['다른 길의 끝 장면을 확인했다', '한결이의 관계망이 넓어졌는지 좁아졌는지 견주었다'], { d: 0.35 }),
            DILQ('한결이가 반에 자리를 잡은 뒤, 단짝 모임이 한결이를 "우리끼리만 놀자"며 다른 친구들과 떼어 놓으려 해요. 알맞은 길을 고르세요.', { text: '한결이가 새 단짝 모임에 들어갔다. 모임 친구들이 "우리끼리만 놀자, 다른 애들이랑은 말하지 마"라고 한다.', who: '한결', motif: 'cloud', choices: [
              { id: 'both', text: '"너희도 좋지만 다른 친구들이랑도 지내고 싶어"라고 말한다', result: '모임 친구 몇은 서운해하지만 몇은 고개를 끄덕인다.', impact: [{ who: '한결', text: '여러 관계를 지킨다', tone: 1 }],
                next: { text: '모임 친구 하나가 "그럼 너 빠져"라며 단톡방에서 내보내겠다고 한다.', choices: [
                  { id: 'talk', text: '믿을 어른(담임 선생님)과 이 상황을 상의한다', result: '선생님이 학급 활동에서 자연스럽게 섞이는 자리를 만든다.', impact: [{ who: '한결', text: '혼자 감당하지 않는다', tone: 1 }], ending: '고립시키는 관계 앞에서는 어른과 상의하고 다른 관계를 지킨다.' },
                  { id: 'give', text: '모임에서 쫓겨날까 봐 다른 친구들과 연락을 끊는다', result: '한결이의 관계가 모임 하나로 좁아진다.', impact: [{ who: '한결', text: '다시 고립되기 쉬워진다', tone: -1 }], ending: '한 무리만 남기는 관계는 보호 요인이 되기 어렵다.' }] } },
              { id: 'follow', text: '모임 말대로 다른 친구들과 말하지 않는다', result: '모둠 활동 때 다른 친구들과 어색해진다.', impact: [{ who: '한결', text: '관계망이 좁아진다', tone: -1 }], ending: '나를 다른 관계에서 떼어 놓는 관계는 건강하지 않다.' },
              { id: 'leave', text: '아무 말 없이 모임에서 빠진다', result: '다시 쉬는 시간마다 혼자가 된다.', impact: [{ who: '한결', text: '외로움이 돌아온다', tone: -1 }], ending: '해로운 관계를 피하는 것과 혼자가 되는 것은 다르다. 다른 관계를 함께 지켜야 한다.' }] },
            [['both', 'talk']], [{ id: 'many', text: '여러 관계를 지키는 것이 보호 요인이다' }, { id: 'adult', text: '고립시키는 관계 앞에서는 믿을 어른과 상의한다' }, { id: 'loyal', text: '친한 모임이 원하면 다른 관계는 끊어도 된다', why: '나를 다른 관계에서 떼어 놓는 것은 통제에 가까워요.' }], ['many', 'adult'], { d: 0.35, more: { conclude: '관계는 많기보다 믿을 만해야 하고, 한 무리에만 갇히지 않게 여러 자리를 지켜야 보호 요인이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '새로 온 친구에게 부담 없이 건넬 첫마디 두 가지를 쓰고, 왜 부담이 적은지 쓰세요.' }] },
        notes: note('인물은 가상이다. 반에 실제 전학생이 있으면 그 학생이 지목되지 않도록 사례 이름·상황을 바꿔 쓴다.'),
      }),
      M({
        id: 'activity.budget', type: 'activity', title: '관계에 쓰는 시간 나누기',
        method: '관계에 쓰는 시간 예산', tool: 'economy', minutes: 17,
        levels: { easy: '시간 블록 카드 6장을 관계·공부·쉬기로 나눈다(바로 피드백).', base: '블록 9장을 나누고, 가상 인물 라온의 일주일 계획 가운데 균형 잡힌 것을 고르고, 시험 주간 조정과 짝짓는다.', challenge: '헷갈리는 블록 2장이 더해지고, 활동지에 시험 주간 계획을 다시 배분해 쓴다.' },
        activity: {
          title: '관계·공부·쉬기 균형', tool: 'economy',
          teacher: '"일주일 시간은 정해져 있어요. 관계·공부·쉬기에 어떻게 나누면 마음건강을 지킬 수 있을까요?" 가상 인물 라온이의 블록을 나누게 한다. \'친구와 새벽까지 통화\'를 관계에 넣으며 좋은 블록이라고 하는 학생에게 "그 시간이 잠을 깎는다면 다음 날 관계는 어떨까요?"라고 되묻는다. 관계 시간은 길이보다 꾸준함이 중요하고, 시험 주간에도 짧은 안부로 관계를 이어 갈 수 있다는 점을 짚는다.',
          task: '라온이의 일주일 블록을 관계·공부·쉬기로 나누고, 균형과 시험 주간 조정을 따져요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('라온이의 일주일 블록을 관계·공부·쉬기로 나누세요.', ['관계', '공부', '쉬기'], [
              ['가족과 저녁 먹으며 이야기', '친구와 주말 산책', '동아리 모임'],
              ['수학 복습 1시간', '모둠 과제 준비', '영어 단어 외우기'],
              ['밤 11시 전 잠자리', '좋아하는 음악 듣기', '혼자 쉬는 30분'],
            ], { k: 2, hard: [['친구에게 안부 메시지 보내기'], ['도서관에서 과제 자료 찾기'], ['점심 뒤 짧은 산책']], d: 0.25, opt: { trayLabel: '시간 블록' } }),
            PICKQ('라온이의 일주일 계획 가운데 관계·공부·쉬기가 균형 잡힌 것을 고르세요.', ['공부 위주이되 매일 가족과 저녁, 주말 친구 산책, 밤 11시 전 잠'], ['친구와 매일 새벽까지 통화하고 공부는 주말에 몰아서', '시험이 없어도 주말까지 공부만 하고 연락은 모두 끊기', '쉬는 시간마다 SNS만 보고 사람은 만나지 않기'], { d: 0.3, opt: { basket: '균형 잡힌 계획' } }),
            MATCHQ('시험 주간에 블록을 다시 나눌 때, 블록마다 바꾼 방법을 짝지으세요.', [['관계', '주말 산책 대신 매일 안부 메시지 한 번'], ['공부', '어려운 과목 복습 시간을 늘림'], ['쉬기', '잠자리 시각은 그대로 지킴']], { k: 2, extra: ['연락을 모두 끊음'], d: 0.35, more: { conclude: '관계는 길이보다 꾸준함이에요. 시험 주간에도 짧은 안부와 잠은 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시험 주간의 시간 배분을 다시 써 보세요(혼자 보기).', columns: ['', '평소 주', '시험 주간'], cells: [['관계', '', ''], ['공부', '', ''], ['쉬기', '', '']] }] },
        notes: note('교구의 예산(budget) 판은 돈(원) 단위만 보여서, 시간 예산은 블록 카드 나누기·고르기·짝으로 다룬다. 학생의 실제 일주일을 발표시키지 않고 가상 인물로 다룬다.'),
      }),
      M({
        id: 'activity.healthy', type: 'activity', title: '건강한 관계·해로운 관계',
        method: '건강한 관계·해로운 관계', tool: 'sortboard', minutes: 18,
        levels: { easy: '바구니 옆에 장 수가 보이고, 틀린 바구니에 넣으면 까닭과 함께 되돌아온다(카드 4장).', base: '카드 8장을 건강한 관계·해로운 관계로 나누고, 신호를 나누고, 할 일을 나눈다.', challenge: '헷갈리는 카드가 더해지고, 해로운 관계에서 벗어날 도움 경로까지 나눈다.' },
        activity: {
          title: '관계 카드 나누기', tool: 'sortboard',
          teacher: '"존중·응원은 건강한 관계, 통제·고립시키기는 해로운 관계예요. 그런데 실제로는 헷갈리는 카드가 많아요." 카드를 넣을 때마다 "이 행동 뒤에 나는 더 자유로워질까요, 더 좁아질까요?"라고 묻는다. "나만 보라고 하는 건 사랑해서잖아요"라는 학생에게 "그 말 때문에 다른 친구를 못 만나게 된다면, 관계망은 넓어질까요, 좁아질까요?"라고 되묻는다. 해로운 관계에서는 혼자 버티지 않고 믿을 어른·상담 선생님과 상의한다는 점을 짚는다.',
          task: '관계 카드를 바구니에 나누고, 해로운 관계에서 할 일까지 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORTQ('관계 속 행동 카드를 건강한 관계와 해로운 관계로 나누세요.', ['건강한 관계', '해로운 관계'], [
              ['내 생각이 달라도 존중해 준다', '힘든 일이 있을 때 응원해 준다', '다른 친구와 지내는 것을 반긴다', '싫다고 하면 멈춘다'],
              ['휴대폰 메시지를 늘 확인하려 한다', '다른 친구를 만나지 말라고 한다', '내 결정을 대신 정하려 한다', '답이 늦으면 화를 낸다'],
            ], { k: 2, hard: [['서로 혼자 있는 시간을 인정한다'], ['"너는 나밖에 없잖아"라고 자주 말한다']], d: 0.3 }),
            SORTQ('해로운 관계의 행동을 신호별로 나누세요.', ['통제', '고립시키기'], [
              ['내 결정을 대신 정하려 한다', '휴대폰 메시지를 늘 확인하려 한다'],
              ['다른 친구를 만나지 말라고 한다', '가족과 시간을 보내면 서운해한다'],
            ], { k: 1, d: 0.35, more: { hints: ['내 선택을 빼앗는 것인지, 나를 다른 관계에서 떼어 놓는 것인지 보세요.'] } }),
            SORTQ('해로운 관계라고 느낄 때 할 일을 나누세요.', ['내가 할 수 있는 일', '믿을 어른·전문가와 할 일'], [
              ['싫은 것은 싫다고 분명히 말하기', '다른 친구·가족과의 관계 지키기'],
              ['담임·상담 선생님과 상황 상의하기', '관계에서 안전하게 벗어날 방법 함께 찾기'],
            ], { k: 1, hard: [['일기처럼 날짜별로 느낌 적어 두기'], [`학교 밖 상담(${NUM}) 알아보기`]], d: 0.35, more: { conclude: '건강한 관계는 존중하고 응원하며 다른 관계를 반겨요. 통제·고립의 신호가 보이면 혼자 버티지 말고 믿을 어른과 상의해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '해로운 관계 카드 하나를 골라, 그 행동이 관계망을 어떻게 좁히는지 두 문장으로 쓰세요.' }] },
        notes: note(NUM_NOTE, '건강한·해로운 관계 신호는 일반 설명이다(사람 확인 목록). 학생의 실제 관계를 평가하거나 발표시키지 않는다.'),
      }),

      M({
        id: 'wrap.action', type: 'wrap', title: '이번 주 관계 실천 하나',
        method: '이번 주 관계 실천', tool: 'kitchen', minutes: 7,
        levels: { easy: '실천 항목 가운데 하나를 골라 표시한다.', base: '실천 항목 가운데 이번 주에 할 세 가지를 골라 표시한다.', challenge: '활동지에 실천 결과를 점검할 날짜를 정해 적는다.' },
        wrap: {
          teacher: '"오늘 배운 보호 요인을 이번 주 실천 하나로 옮겨요. 크게 하지 않아도 돼요." 표시한 뒤 출구 2번으로 넘어간다. "관계는 많을수록 좋다"를 고른 학생에게 "연락처가 많은 것과 힘들 때 이야기할 사람이 있는 것은 같을까요?"라고 되묻는다. 실천은 남에게 보이는 것이 아니라 나와 친구의 관계망을 조금 튼튼하게 하는 것이라고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '이번 주 관계 실천', items: [{ id: 'msg', text: '연락이 뜸했던 친구에게 안부 보내기' }, { id: 'meal', text: '혼자 먹는 친구와 함께 밥 먹기' }, { id: 'thanks', text: '고마운 사람에게 고마움 전하기' }, { id: 'family', text: '가족과 10분 이야기하기' }, { id: 'club', text: '관심 있는 동아리·모임 알아보기' }] }, prompt: '이번 주에 해 볼 관계 실천을 골라 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '"관계는 많을수록 좋다"는 말에 대한 판단으로 가장 알맞은 것은?', options: ['맞다, 아는 사람이 많을수록 안전하다', '관계는 수보다 믿을 만하고 서로 존중하는지가 중요하다', '관계는 적을수록 편하니 하나면 충분하다'], answer: 1, difficulty: 0.2, explain: '힘들 때 이야기할 믿을 만한 관계가 보호 요인이에요. 많기만 한 관계는 오히려 부담이 될 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '이번 주 관계 실천',
          items: [
            { type: 'short', prompt: '이번 주에 할 관계 실천 하나와 언제 할지를 쓰세요(혼자 보기).' },
            { type: 'table', prompt: '실천 결과를 점검할 날짜와 느낀 점을 쓰세요.', columns: ['점검 날짜', '해 보았나', '느낀 점'], cells: [['', '', '']] },
          ],
        },
        notes: note('실천 점검은 스스로 하는 것이며 걷거나 발표시키지 않는다.'),
      }),
      M({
        id: 'wrap.help', type: 'wrap', title: '관계망 속 전문가 자리',
        method: '관계망 속 전문가 자리', tool: 'map', minutes: 7,
        levels: { easy: '지역 칸 지도에서 전문 상담 자원 한 곳에 핀을 꽂는다.', base: '핀을 꽂고, 학교 안에서 먼저 찾을 곳을 고른다.', challenge: '활동지에 찾아가는 길과 [학교가 확인해 넣는 지역 상담 번호] 칸을 확인해 채운다.' },
        wrap: {
          teacher: '"관계망에는 가족·친구뿐 아니라 전문가의 자리도 있어요. 친구가 도울 수 없는 일은 누가 도울까요?" 지도에 핀을 꽂은 뒤 우리 지역 기관과 학교가 확인한 번호를 칠판에 적는다. "전문가는 마지막에 찾는 곳"이라는 학생에게 "관계망의 한 가닥으로 미리 알아 두면 언제 찾기 쉬울까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '관계망 속 전문가 자리(가상 동네)', places: [{ name: '우리 학교', icon: 'school', at: [0, 1] }, { name: '지역 정신건강 기관', icon: 'office', at: [4, 0] }, { name: '보건소', icon: 'hospital', at: [5, 3] }, { name: '도서관', icon: 'library', at: [2, 3] }, { name: '우리 집', icon: 'house', at: [3, 2] }] }, prompt: '학교 밖에서 마음건강 전문 상담을 받을 수 있는 곳에 핀을 꽂으세요.', target: { place: '지역 정신건강 기관' }, difficulty: 0.15 },
            { type: 'choice', prompt: '학교 안에서 전문 상담 자원과 이어 줄 수 있는 사람으로 알맞은 것은?', options: ['같은 반 친구', '상담 선생님', '동아리 선배'], answer: 1, difficulty: 0.15, explain: '상담 선생님은 학교 안에서 이야기를 듣고 필요하면 학교 밖 전문 자원과 이어 줄 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '관계망 속 전문가',
          items: [
            { type: 'table', prompt: '관계망 속 전문가 자리를 채우세요.', columns: ['자원', '찾아가는 길', '연락'], cells: [['학교 상담 선생님', '', ''], ['학교 밖 전문 상담', '', NUM]] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '친구가 도울 수 없는 일은 ___과 함께 돕는다.', answer: '어른·전문가' },
          ],
        },
        notes: note(NUM_NOTE, '지도는 가상이다. 우리 지역 정신건강 관련 기관의 실제 이름·위치는 교사가 공식 안내로 확인해 알려 준다.'),
      }),
    );
  }

  // ======================================================================================================
  // 6. 도움 요청 낙인 줄이기 캠페인 (11학년)
  // ======================================================================================================
  {
    const M = MOD('stigma-campaign', [11]);
    const DELAY = [['1단계', 2], ['2단계', 3], ['3단계', 5], ['4단계', 7], ['5단계', 9]];
    const DELAY_T = '주변 시선 걱정 단계별 상담을 미룬 응답(가상 설문, 상대 크기)';
    const LINE = (q, more = {}) => Object.assign({ type: 'line', mode: 'read', title: DELAY_T, yLabel: '미룬 응답', xLabel: '시선 걱정(1 적음 → 5 많음)', data: DELAY, question: q }, more);
    const WORDS = [
      ['낙인', '"상담받는 애들은 정신이 약한 거지"'], ['낙인', '"걔 상담실 다닌대, 조심해"'], ['낙인', '"우울은 의지가 없어서 생긴다"'], ['낙인', '"마음이 아픈 사람은 위험하다"'],
      ['중립', '"상담은 고민을 정리하는 데 도움이 될 수 있다"'], ['중립', '"마음이 힘든 것은 누구에게나 생길 수 있다"'], ['중립', '"도움을 청하는 것은 회복의 한 걸음이다"'], ['중립', '"마음건강도 몸 건강처럼 돌볼 수 있다"'],
    ];
    // 학교 정신건강 검사 결과 공개 찬반 — 조건부 결론
    const OPEN = { text: '학급 토론 논제: "학교 마음건강 검사 결과를 담임 선생님과 공유해야 한다." 서진이는 찬성 쪽 발언을 준비한다.', who: '서진', motif: 'star', choices: [
      { id: 'all', text: '"모든 학생 결과를 담임 선생님이 다 봐야 빨리 돕는다"고 주장한다', result: '반대 쪽이 "결과가 퍼지면 낙인이 생겨 아무도 솔직하게 답하지 않을 것"이라고 반박한다.', impact: [{ who: '토론', text: '찬성 근거가 흔들린다', tone: -1 }],
        next: { text: '반대 쪽 질문: "솔직하게 답하지 않으면 검사가 무슨 소용인가요?"', choices: [
          { id: 'admit', text: '"그 점은 맞아. 그럼 공유 범위와 동의를 정하자"며 주장을 고친다', result: '토론이 \'어떻게 공유할까\'로 나아간다.', impact: [{ who: '토론', text: '조건부 결론에 가까워진다', tone: 1 }], ending: '반박을 받아들여 조건을 붙이면 주장이 더 쓸모 있어진다.' },
          { id: 'insist', text: '"그래도 다 봐야 한다"고 되풀이한다', result: '토론이 제자리를 맴돈다.', impact: [{ who: '토론', text: '새 근거가 나오지 않는다', tone: -1 }], ending: '같은 주장을 되풀이해도 낙인 걱정은 풀리지 않는다.' }] } },
      { id: 'cond', text: '"학생이 동의하고, 도움에 필요한 범위만, 상담 선생님을 통해 공유한다면 찬성"이라고 주장한다', result: '반대 쪽이 "그 조건이면 받아들일 수 있다. 그런데 동의를 안 하면?"이라고 묻는다.', impact: [{ who: '토론', text: '논점이 분명해진다', tone: 1 }],
        next: { text: '반대 쪽 질문: "학생이 동의하지 않으면 그냥 두나요?"', choices: [
          { id: 'safety', text: '"동의가 원칙이지만 생명·안전이 걸리면 학교 절차에 따라 보호자와 함께 돕는다"고 답한다', result: '두 쪽이 원칙과 예외를 함께 정리한다.', impact: [{ who: '토론', text: '원칙과 예외가 세워진다', tone: 1 }],
            next: { text: '사회자가 결론 한 문장을 요청한다.', choices: [
              { id: 'final', text: '"동의와 필요한 범위를 지켜 공유하면 낙인 없이 도움을 빨리 이을 수 있다"', result: '학급이 결론을 받아 적는다.', impact: [{ who: '학급', text: '쓸 수 있는 원칙을 얻는다', tone: 1 }], ending: '조건부 결론은 도움과 사생활을 함께 지킨다.' },
              { id: 'vague', text: '"상황에 따라 다르다"고만 말한다', result: '어떤 상황인지 빠져 결론이 흐려진다.', impact: [{ who: '학급', text: '쓸 원칙을 얻지 못한다', tone: 0 }], ending: '조건을 말하지 않은 \'상황에 따라\'는 결론이 아니다.' }] } },
          { id: 'force', text: '"동의하지 않아도 무조건 공유한다"고 답한다', result: '반대 쪽이 낙인과 불신을 다시 짚는다.', impact: [{ who: '토론', text: '조건이 무너진다', tone: -1 }], ending: '동의를 빼면 낙인 걱정이 다시 살아난다.' }] } },
      { id: 'never', text: '"절대 공유하면 안 된다"로 입장을 바꾼다', result: '반대 쪽이 "그럼 위험한 학생은 어떻게 돕나요?"라고 묻는다.', impact: [{ who: '토론', text: '다른 쪽 근거를 놓친다', tone: 0 }], ending: '한쪽 끝으로 가면 다른 쪽의 중요한 근거를 놓친다.' }] };
    const OPEN_R = [{ id: 'consent', text: '동의와 필요한 범위를 지키면 낙인 걱정이 줄어든다' }, { id: 'except', text: '생명·안전이 걸린 경우는 학교 절차에 따라 돕는다' }, { id: 'allopen', text: '많이 알수록 빨리 도울 수 있으니 다 공개한다', why: '결과가 퍼지면 낙인이 생겨 솔직한 응답과 도움 요청이 줄 수 있어요.' }];
    const PHASE = ['준비: 대상과 메시지 정하기', '홍보: 포스터·안내문 붙이기', '실행: 캠페인 주간 활동', '평가: 익명 설문으로 변화 확인'];

    MODS.push(
      M({
        id: 'intro.words', type: 'intro', title: '미디어 속 낙인 표현 찾기',
        method: '미디어 속 낙인 표현 찾기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 문장 4개를 읽어 주고 함께 바구니에 나눈다.', base: '가상 기사·댓글 문장 8개를 낙인 표현·중립 표현으로 나눈다.', challenge: '낙인 표현 하나를 골라 중립 표현으로 고쳐 말한다.' },
        intro: {
          teacher: '"가상 기사와 댓글에서 가져온 문장이에요. 마음건강에 대해 낙인을 찍는 말과 중립적인 말을 나눠 볼까요?" 시연 단추로 문장이 두 바구니에 나뉘는 모습을 보여 준다. "그냥 농담인데 낙인까지예요?"라는 말이 나오면 "그 말을 들은 사람이 다음에 상담실에 갈 때 어떤 생각이 들까요?"라고 되묻는다. 낙인은 개인의 마음가짐이 아니라 말과 분위기로 만들어지고, 그래서 말과 분위기로 바꿀 수 있다는 점을 짚는다.',
          student: '가상 기사·댓글 문장을 낙인 표현과 중립 표현으로 나누고, 낙인 표현이 도움 요청을 어떻게 막는지 말해 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['낙인 표현', '중립 표현'], cards: WORDS.map((x) => x[1]) }, sequence: [{ sort: { '낙인 표현': WORDS.filter((x) => x[0] === '낙인').map((x) => x[1]), '중립 표현': WORDS.filter((x) => x[0] === '중립').map((x) => x[1]) } }] },
          art: { draw: 'paper newspaper clippings and comment bubbles being sorted into two paper baskets on a shelf, one basket with a crossed-out label, a paper student holding a pencil to rewrite a sentence', banner: '말이 낙인이 돼요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: note('문장은 모두 수업용 가상 문장이다. 실제 기사·댓글·유명인을 인용하지 않는다. 낙인 표현을 소리 내어 따라 읽게 하지 않는다.'),
      }),
      M({
        id: 'intro.chart', type: 'intro', title: '시선 걱정과 상담 미루기',
        method: '낙인과 도움 요청 자료', tool: 'chart', minutes: 7,
        levels: { easy: '점마다 값이 보이는 꺾은선에서 가장 높은 점을 함께 읽는다.', base: '시선 걱정이 커질수록 상담을 미룬 응답이 어떻게 변하는지 해석한다.', challenge: '이 가상 자료의 한계(누구에게 물었는지·인과 단정 불가)를 짝과 말한다.' },
        intro: {
          teacher: '"가상 설문이에요. 주변 시선이 걱정되는 정도를 1에서 5단계로 나눠, 단계마다 상담을 미뤘다는 응답을 보았어요." 시연 단추로 가장 높은 점을 고르는 모습을 보여 준다. "시선을 신경 쓰는 사람이 문제네요"라는 말이 나오면 "시선이 걱정되게 만드는 것은 누구일까요? 그건 바꿀 수 있을까요?"라고 되묻는다. 자료가 가상이고, 함께 움직인다고 해서 원인이라고 단정할 수 없다는 한계도 짚는다.',
          student: '가상 설문 꺾은선그래프에서 주변 시선 걱정이 커질수록 상담을 미룬 응답이 어떻게 변하는지 읽고 해석해 보세요.',
          demo: { tool: 'chart', options: LINE('상담을 미룬 응답이 가장 높은 단계는?', { choices: DELAY.map((x) => x[0]), showValues: true }), sequence: [{ pick: 4 }] },
          art: { draw: 'a paper line chart rising from left to right, small paper eyes floating along the top of the line, a paper student pausing in front of a counseling door with a calendar showing days being pushed later', banner: '시선이 미루게 해요', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
        notes: note('자료는 수업용 가상 값이다(화면 제목에 밝힘). 실제 조사 결과가 필요하면 교사가 최신 공식 자료를 확인해 넣는다.'),
      }),

      M({
        id: 'activity.debate', type: 'activity', title: '검사 결과 공유 찬반 토론',
        method: '찬반 토론: 학교 정신건강 검사 공개', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길(주장 고르기)까지 가서 근거를 고른다.', base: '갈림길 둘까지 따라가 반론에 답하고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가 동의·범위·예외를 담은 조건부 결론에 닿는다.' },
        activity: {
          title: '검사 결과 공유 논제', tool: 'dilemma',
          teacher: '"\'학교 마음건강 검사 결과를 담임 선생님과 공유해야 한다.\' 빨리 도울 수 있다는 근거와, 낙인이 생길 수 있다는 근거가 부딪혀요." 서진이의 주장을 고를 때마다 반대 쪽 반론을 소리 내어 읽게 한다. \'모두 다 봐야 한다\'를 고른 학생에게 "결과가 알려질 걸 안다면 여러분은 솔직하게 답할까요?"라고 묻는다. \'절대 안 된다\'를 고른 학생에게는 "생명·안전이 걸린 학생은 어떻게 도울까요?"라고 묻는다. 동의·필요한 범위·생명 안전 예외를 담은 조건부 결론을 학급이 함께 만든다.',
          task: '검사 결과 공유 논제의 갈림길을 따라 반론에 답하며 조건부 결론을 찾아요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('서진이의 주장과 반론에 대한 답을 따라가고, 조건부 결론에 닿는 길과 근거를 고르세요.', OPEN, [['cond', 'safety', 'final']], OPEN_R, ['consent', 'except'], { d: 0.4 }),
            EXPLOREQ('\'모두 다 공유\' 길과 \'절대 공유 안 함\' 길도 끝까지 가 보고 토론에 생긴 결과를 견주세요.', OPEN, OPEN_R, ['다른 길의 끝 장면을 확인했다', '각 길이 놓친 근거를 견주었다'], { d: 0.35 }),
            DILQ('검사 뒤 반 친구가 "너 검사 결과 뭐 나왔어? 보여 줘"라고 해요. 낙인을 줄이는 길을 고르세요.', { text: '검사 다음 날, 반 친구가 "너 결과 뭐 나왔어? 다들 보여 주던데"라고 묻는다.', who: '나', motif: 'house', choices: [
              { id: 'private', text: '"그건 각자 개인 정보야. 서로 묻지 말자"고 말한다', result: '친구가 "그러네"하며 더 묻지 않는다.', impact: [{ who: '반 친구들', text: '결과를 캐묻는 분위기가 줄어든다', tone: 1 }],
                next: { text: '다른 친구가 "결과 안 좋게 나온 애가 누군지 궁금하다"고 한다.', choices: [
                  { id: 'stop', text: '"그걸 궁금해하면 누가 솔직하게 답하겠어? 도움 필요한 사람은 상담 선생님이 챙겨"라고 한다', result: '대화가 다른 이야기로 넘어간다.', impact: [{ who: '도움이 필요한 학생', text: '낙인 걱정 없이 도움을 받을 수 있다', tone: 1 }], ending: '결과를 캐묻지 않는 분위기가 솔직한 응답과 도움 요청을 지킨다.' },
                  { id: 'guess', text: '함께 누구일지 짐작해 본다', result: '근거 없는 소문이 생긴다.', impact: [{ who: '짐작당한 학생', text: '낙인이 찍힌다', tone: -1 }], ending: '짐작과 소문이 낙인을 만든다.' }] } },
              { id: 'show', text: '분위기에 맞춰 결과를 보여 주고 다른 친구에게도 묻는다', result: '반에서 결과를 비교하는 분위기가 생긴다.', impact: [{ who: '반 친구들', text: '보여 주기 싫은 사람이 눈치를 본다', tone: -1 }], ending: '결과를 비교하는 분위기는 다음 검사의 솔직함을 앗아 간다.' },
              { id: 'lie', text: '"나 완전 정상이야, 이상한 애들이나 걱정하지"라고 말한다', result: '듣던 친구 몇이 표정이 굳는다.', impact: [{ who: '힘든 시기의 친구', text: '말을 꺼내기 더 어려워진다', tone: -1 }], ending: '\'정상·이상\'으로 가르는 말이 낙인이다.' }] },
            [['private', 'stop']], [{ id: 'privacy', text: '검사 결과는 각자의 개인 정보다' }, { id: 'climate', text: '캐묻지 않는 분위기가 솔직한 응답을 지킨다' }, { id: 'curious', text: '다들 보여 주면 나도 보여 줘야 공평하다', why: '보여 주기 싫은 사람이 눈치 보게 되는 분위기가 낙인을 만들어요.' }], ['privacy', 'climate'], { d: 0.35, more: { conclude: '검사 결과는 동의와 필요한 범위 안에서만 다루고, 친구끼리는 캐묻지 않아요. 그것이 낙인을 줄이는 학교 분위기예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"검사 결과는 ___한 경우에만 ___과 공유한다"는 조건부 결론을 근거와 함께 쓰세요.' }] },
        notes: note('학교 마음건강 검사(정서·행동 특성검사 등)의 실제 결과 관리 방식은 학교마다 공식 지침을 따른다(사람 확인 목록). 학생에게 자신의 검사 결과를 묻거나 말하게 하지 않는다.'),
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '낙인 줄이기 캠페인 기획서',
        method: '캠페인 기획서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 대상과 메시지를 쓴다.', base: '대상·메시지·방법·평가 지표 네 항목을 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 예산과 일정까지 넣는다.' },
        activity: {
          title: '캠페인 기획서 네 칸', tool: 'rubric-writing',
          teacher: '"우리 학교의 도움 요청 낙인을 줄이는 캠페인을 기획해요. 대상·메시지·방법·평가 지표 네 칸이에요." 쓰기 전에 기준표를 함께 읽는다. 메시지에 위기 사례를 넣으려는 학생에게 "그 사례가 없어도 메시지가 전해질까요? 지금 힘든 친구가 본다면요?"라고 묻는다. "효과는 모르겠다"는 학생에게 "캠페인 전과 뒤에 무엇을 견주면 달라졌는지 알 수 있을까요?"라고 되묻는다. 메시지는 겁주기가 아니라 도움 요청이 평범하다는 희망과 연결을 담는다는 점을 짚는다.',
          task: '낙인 줄이기 캠페인 기획서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('캠페인의 대상과 메시지를 2~3문장으로 쓰세요.', '누구에게(대상) 어떤 말(메시지)을 전할지 쓰세요. 위기 장면·방법은 넣지 않아요.', ['대상을 분명히 정했다', '메시지가 도움 요청을 평범한 일로 보이게 한다', '겁주거나 위기 장면을 넣지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['대상', '학년', '학생']], starter: '대상은 ~이다. 메시지는 "~"이다.', plus: '대상에 맞는 말투를 골랐다', d: 0.35 }),
            RWQ('캠페인 방법을 2~3문장으로 쓰세요.', '메시지를 어떻게 전할지(포스터·짧은 영상·안내문·학급 활동 등) 쓰세요.', ['방법이 대상에게 닿는 곳에서 이루어진다', '도움받을 곳(상담실 등)을 함께 알린다', '누구도 지목하거나 드러내지 않는다'], { min: 40, max: 300, sent: [2, 3], starter: '~에 ~를 붙이고, ~시간에 ~를 한다.', plus: '예산(재료비 등)을 대략 정했다', d: 0.4 }),
            RWQ('평가 지표를 2~3문장으로 쓰세요.', '캠페인이 효과가 있었는지 무엇으로, 언제 확인할지 쓰세요.', ['캠페인 전과 뒤에 견줄 것을 정했다', '확인 방법(익명 설문 등)을 썼다', '확인할 때를 정했다'], { min: 40, max: 300, sent: [2, 3], starter: '캠페인 전과 한 달 뒤에 ~를 익명으로 묻는다.', plus: '한 달 일정표(준비·홍보·실행·평가)를 넣었다', sample: '캠페인 전과 한 달 뒤에 \'힘들 때 상담실에 갈 수 있다\'는 응답을 익명 설문으로 견준다. 상담실 위치를 아는 학생 비율도 함께 묻는다. 결과는 학생회와 상담실이 함께 본다.', d: 0.4, more: { conclude: '좋은 캠페인 기획은 대상·메시지·방법·평가가 이어지고, 겁주기 대신 연결과 희망을 전해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '캠페인 기획서 뼈대를 채우세요.', columns: ['칸', '내용'], cells: [['대상', ''], ['메시지', ''], ['방법', ''], ['평가 지표', '']] }] },
        notes: note('캠페인 메시지는 보건복지부·한국생명존중희망재단의 안전한 소통 원칙(방법·자세한 내용 말하지 않기, 원인 단정하지 않기, 희망과 도움 경로 함께 알리기)을 따르게 한다(사람 확인 목록).'),
      }),
      M({
        id: 'activity.design', type: 'activity', title: '낙인 대신 연결 포스터',
        method: '캠페인 포스터 제작', tool: 'collage', minutes: 17,
        levels: { easy: '문구 자리를 정하고 모양 몇 가지만 있는 고르개로 꾸민다.', base: '문구와 그림 조각으로 포스터 두 장(문제 바꾸기·연결)을 꾸미고 점검한다.', challenge: '연결 포스터에 도움 자원 정보 자리를 넣는 점검 항목이 하나 더 붙는다.' },
        activity: {
          title: '연결을 말하는 포스터', tool: 'collage',
          teacher: '"낙인 대신 연결을 말하는 포스터를 만들어요. 한 장은 낙인 표현을 바꾸는 포스터, 한 장은 \'함께 가자\'는 연결 포스터예요." 문구를 활동지에 먼저 쓰고 조각으로 꾸미게 한다. 위기 장면을 그리려는 학생에게 "그 장면 없이 연결을 보여 줄 방법은 없을까요? 손잡기, 열린 문 같은 것은 어때요?"라고 묻는다. 포스터에는 위기 장면 묘사 없이 희망과 도움받을 곳을 담는다는 원칙을 먼저 정한다.',
          task: '낙인 대신 연결을 말하는 포스터 두 장을 조각으로 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '포스터 1(말 바꾸기): 낙인 표현이 중립 표현으로 바뀌는 모습을 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star'] }, target: { selfCheck: ['바뀌기 전과 뒤가 보인다', '낙인 표현을 크게 그대로 쓰지 않았다', '문구를 넣을 자리를 남겼다'], minPieces: 3 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '포스터 2(연결): 함께 도움을 찾아가는 모습을 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['함께하는 모습(둘 이상)이 보인다', '위기 장면을 넣지 않았다', '희망을 주는 문구 자리를 남겼다'], minPieces: 3 }, difficulty: 0.3,
              levels: { challenge: { prompt: '포스터 2(연결)에 도움 자원 정보 자리까지 넣어 꾸미고 점검하세요(정보 자리 하나 더).', target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['함께하는 모습(둘 이상)이 보인다', '위기 장면을 넣지 않았다', '희망을 주는 문구 자리를 남겼다', '도움 자원(상담실 위치·시간) 자리를 넣었다'], minPieces: 3 } } } },
            { prompt: '두 포스터를 짝과 바꿔 보고, 짝의 포스터를 점검표로 표시하세요.', toolOptions: { shapes: ['circle', 'square'], maxPieces: 4 }, target: { selfCheck: ['짝의 포스터에 위기 장면이 없다', '도움 요청을 평범한 일로 보이게 한다', '고칠 점 하나를 짝에게 말했다'], minPieces: 1 }, difficulty: 0.2, conclude: '연결 포스터는 위기 대신 함께하는 모습과 희망, 도움받을 곳을 보여 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 쓰세요.', columns: ['포스터', '큰 문구', '작은 문구'], cells: [['1 말 바꾸기', '', ''], ['2 연결', '', '']] }] },
        notes: note('포스터를 학교에 게시할 때는 교사와 상담 선생님이 문구를 검토하고, 도움받을 곳은 학교가 확인한 곳만 적는다.'),
      }),
      M({
        id: 'activity.timeline', type: 'activity', title: '캠페인 한 달 실행 일정',
        method: '캠페인 실행 일정', tool: 'timeline', minutes: 18,
        levels: { easy: '단계 카드 3장(준비·홍보·실행)을 한 달 띠에 차례로 놓는다.', base: '단계 카드 4장을 놓고, 할 일 카드를 주차에 나누고, 단계마다 위험 요소와 대응을 짝짓는다.', challenge: '카드를 섞어 놓고, 활동지에 위험 요소별 대응을 덧붙인다.' },
        activity: {
          title: '준비부터 평가까지', tool: 'timeline',
          teacher: '"캠페인은 한 번의 행사가 아니라 한 달의 흐름이에요. 준비·홍보·실행·평가를 띠에 놓아 봐요." 카드를 놓은 뒤 "평가는 언제 계획해야 할까요? 끝나고 나서일까요, 준비할 때일까요?"라고 묻는다. 위험 요소 문항에서 \'포스터에 낙인 댓글이 달림\' 같은 일이 생기면 혼자 대응하지 않고 교사·상담 선생님과 함께한다는 점을 짚는다.',
          task: '캠페인 단계와 할 일을 한 달 띠에 놓고, 위험 요소와 대응을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('캠페인 단계 카드를 한 달 띠에 차례로 놓으세요.', PHASE, { k: 3, d: 0.25, opt: { axis: ['1주', '4주'] } }),
            SORTQ('할 일 카드를 주차에 나누세요.', ['1주', '2주', '3주', '4주'], [
              ['대상 정하기', '상담 선생님과 문구 검토'],
              ['포스터 붙이기', '학급 안내 방송'],
              ['안부 카드 쓰기 활동', '상담실 열린 날 안내'],
              ['익명 설문 다시 하기', '결과 정리해 학생회에 알리기'],
            ], { k: 1, d: 0.3, opt: { axis: ['1주', '4주'] } }),
            MATCHQ('위험 요소마다 대응을 짝지으세요.', [['포스터에 낙인 댓글이 달린다', '교사·상담 선생님과 함께 내리고 다시 안내한다'], ['캠페인 중 걱정되는 신호를 보이는 학생이 있다', '상담 선생님께 바로 알린다'], ['참여가 적다', '학급 활동 시간에 짧게 함께한다']], { k: 2, extra: ['캠페인을 그만둔다'], d: 0.4, opt: { axis: ['1주', '4주'] }, more: { conclude: '캠페인은 준비 때 평가까지 계획하고, 걱정되는 일이 생기면 혼자가 아니라 어른과 함께 대응해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단계별 위험 요소와 대응을 쓰세요.', columns: ['단계', '생길 수 있는 문제', '대응'], cells: [['홍보', '', ''], ['실행', '', '']] }] },
        notes: note(),
      }),

      M({
        id: 'wrap.pitch', type: 'wrap', title: '캠페인 1분 발표',
        method: '1분 발표', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 30초 안에 핵심 메시지만 발표한다(타이머 문항은 1분 발표로 같다).', base: '발표 1분·질문 30초로 타이머를 맞추고 동료 점검표로 평가한다.', challenge: '질문 시간에 받은 질문 하나에 근거로 답한다.' },
        wrap: {
          teacher: '"모둠마다 1분 안에 캠페인을 발표해요. 대상·메시지·방법·평가 가운데 핵심만!" 발표 시간을 타이머로 맞춘 뒤 듣는 모둠은 점검표로 표시한다. "1분은 너무 짧아요"라는 모둠에게 "포스터 한 장이 지나가는 사람에게 주는 시간은 몇 초일까요?"라고 되묻는다. 점검은 칭찬 하나와 고칠 점 하나로 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '캠페인 1분 발표', labels: ['발표', '질문'], plan: { work: 30, rest: 10, rounds: 1 }, workStep: 10, restStep: 10 }, prompt: '발표 1분·질문 30초를 한 번 하도록 타이머를 맞추세요.', target: { plan: { work: 60, rest: 30, rounds: 1 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '동료 점검표' }, prompt: '다른 모둠의 발표를 듣고 점검표로 표시하세요.', target: { selfCheck: ['대상이 분명했다', '메시지가 도움 요청을 평범하게 보이게 했다', '위기 장면·겁주기가 없었다', '평가 방법이 있었다'] }, difficulty: 0.1 },
            MOOD,
          ],
        },
        worksheet: {
          title: '캠페인 발표 점검',
          items: [
            { type: 'table', prompt: '들은 발표 하나를 점검하세요.', columns: ['모둠', '칭찬 하나', '고칠 점 하나'], cells: [['', '', '']] },
            { type: 'short', prompt: '우리 모둠 발표에서 받은 질문과 내 답을 쓰세요.' },
          ],
        },
        notes: note('발표 시간은 수업 상황에 맞게 바꿀 수 있다(쉬움 단계는 30초 핵심 발표로 진행하되 타이머 문항은 같다).'),
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '나의 말 습관 돌아보기',
        method: '나의 말 습관 성찰', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 장면을 읽어 주고 바꿀 말 하나를 함께 고른다.', base: '장면에서 바꿀 말을 스스로 고르고 결과 장면을 본다.', challenge: '활동지에 친구에게 권할 말을 이어 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 낙인 표현, 혹시 나도 무심코 쓴 적은 없나요? 손을 들 필요는 없어요. 장면 속 말을 바꿔 봐요." 고른 뒤 결과 장면을 함께 읽는다. "그 정도 말은 다들 하잖아요"라는 학생에게 "다들 하는 말이라 더 많은 사람이 상담을 미루게 된다면요?"라고 되묻는다. 말 습관은 한 번에 바뀌지 않아도 알아차리는 것부터 시작된다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '친구가 "나 요즘 상담 다녀"라고 말했다. 순간 "너 멘탈 약하구나"라는 말이 나오려 한다.', feeling: '걱정', who: '나', choices: [{ id: 'weak', text: '"너 멘탈 약하구나"라고 그냥 말한다', result: '친구가 웃으며 넘기지만 다시는 그 이야기를 꺼내지 않는다.', mood: '속상함' }, { id: 'good', text: '"말해 줘서 고마워. 잘 다니고 있구나"라고 바꿔 말한다', result: '친구가 편하게 요즘 이야기를 이어 간다.', mood: '편안함' }, { id: 'joke', text: '"나도 상담 가야겠다 ㅋㅋ"라며 농담으로 넘긴다', result: '친구가 진지한 이야기를 멈춘다.', mood: '걱정' }] }, prompt: '장면 속 말을 낙인 없는 말로 바꿔 고르고 결과를 보세요.', target: { choice: 'good' }, difficulty: 0.15 },
            { type: 'choice', prompt: '"낙인은 개인의 문제라 바꿀 수 없다"는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 각자 마음먹기에 달렸다', '낙인은 말과 분위기로 만들어지므로 말과 분위기를 바꾸면 줄일 수 있다', '낙인은 저절로 없어지니 신경 쓸 필요 없다'], answer: 1, difficulty: 0.2, explain: '낙인은 함께 쓰는 말과 분위기에서 생겨요. 그래서 캠페인과 말 습관으로 줄일 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 말 습관',
          items: [
            { type: 'table', prompt: '바꾸고 싶은 말을 고쳐 쓰세요(혼자 보기).', columns: ['바꾸고 싶은 말', '바꾼 말'], cells: [['', ''], ['', '']] },
            { type: 'short', prompt: '친구에게 권하고 싶은 낙인 없는 말 한마디를 쓰세요.' },
          ],
        },
        notes: note('학생이 자기 말 습관을 발표하게 하지 않는다(활동지 혼자 보기).'),
      }),
    );
  }

  // ======================================================================================================
  // 7. 졸업 뒤 자립과 마음건강 관리 (12학년)
  // ======================================================================================================
  {
    const M = MOD('transition-care', [12]);
    const YEAR = ['수능', '졸업', '진학·취업 시작', '새 동네로 이사', '첫 학기 시험', '첫 겨울방학'];
    const WORRY = [['돈 관리', 35], ['외로움', 30], ['진로 불안', 20], ['생활 관리(밥·잠)', 15]];
    const WORRY_T = '졸업을 앞두고 가장 걱정되는 것(가상 설문)';
    const ITEMS = [{ id: 'rent', text: '주거비(월세)', price: 400000 }, { id: 'food', text: '식비', price: 300000 }, { id: 'trans', text: '교통비', price: 60000 }, { id: 'rest', text: '쉼 예산(여가·취미)', price: 50000 }, { id: 'save', text: '저축', price: 100000 }, { id: 'game', text: '새 게임기 할부', price: 300000 }];
    const CLINIC = { id: 'clinic', text: '예상 밖 병원비', price: 150000 };
    // 혼자 사는 첫 달 — 외로움이 커질 때
    const ALONE = { text: '대학 근처에서 혼자 살게 된 지 3주. 하린이는 수업이 끝나면 방에 돌아와 아무와도 말하지 않는 날이 늘었다. 주말이 유난히 길다.', who: '하린', motif: 'moon', choices: [
      { id: 'endure', text: '다들 이렇게 산다며 혼자 참는다', result: '밤늦게까지 휴대폰만 보다 잠이 줄어든다.', impact: [{ who: '하린', text: '외로움이 더 커진다', tone: -1 }],
        next: { text: '한 달째, 수업에 빠지는 날이 생긴다.', choices: [
          { id: 'reach', text: '이제라도 고향 친구에게 "요즘 좀 외로워"라고 연락한다', result: '친구가 "나도 그래"라며 주말 영상 통화를 약속한다.', impact: [{ who: '하린', text: '연결이 다시 생긴다', tone: 1 }], ending: '참다가도 연락하면 다시 이어질 수 있다.' },
          { id: 'skip', text: '수업을 더 빠지고 방에 머문다', result: '생활 리듬이 무너진다.', impact: [{ who: '하린', text: '혼자 견디는 시간이 길어진다', tone: -1 }], ending: '혼자 참는 시간이 길어지면 생활도 함께 무너진다.' }] } },
      { id: 'friend', text: '고향 친구에게 연락해 요즘 이야기를 나눈다', result: '친구와 통화하고 나니 조금 가벼워진다.', impact: [{ who: '하린', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '그래도 평일 밤마다 마음이 가라앉는 날이 이어진다.', choices: [
          { id: 'center', text: '학교 상담센터를 찾아가 상담을 예약한다', result: '상담 선생님과 생활 리듬과 관계를 함께 살펴보기로 한다.', impact: [{ who: '하린', text: '새 곳에서도 도움이 생긴다', tone: 1 }],
            next: { text: '상담 선생님이 학교 안 모임(동아리·학습 모임)도 알아보자고 한다.', choices: [
              { id: 'join', text: '관심 있는 모임 하나에 나가 본다', result: '같은 과 친구 몇과 인사를 나누게 된다.', impact: [{ who: '하린', text: '새 관계망이 생기기 시작한다', tone: 1 }], ending: '옛 친구·전문가·새 모임 — 연결이 여러 가닥일 때 전환기를 버틸 힘이 커진다.' },
              { id: 'later', text: '아직 낯설어 다음 학기로 미룬다', result: '상담은 이어 가지만 새 관계는 천천히 생긴다.', impact: [{ who: '하린', text: '도움은 있지만 관계망은 아직 좁다', tone: 0 }], ending: '내 속도대로 해도 괜찮다. 다만 연결의 가닥을 하나씩 늘려 간다.' }] } },
          { id: 'only', text: '친구에게만 기대고 다른 도움은 찾지 않는다', result: '친구도 바빠지자 연락이 뜸해진다.', impact: [{ who: '하린', text: '기댈 곳이 한 가닥뿐이다', tone: 0 }], ending: '한 사람에게만 기대면 그 사람이 바쁠 때 흔들린다.' }] } },
      { id: 'counsel', text: '학교·지역 상담을 알아보고 바로 이용한다', result: '대학 상담센터에서 첫 상담 날짜를 잡는다.', impact: [{ who: '하린', text: '전문가와 이어진다', tone: 1 }], ending: '졸업 뒤에도 도움받을 곳은 있다. 찾아가면 이어진다.' }] };
    const ALONE_R = [{ id: 'strands', text: '전환기에는 연결의 가닥(친구·전문가·새 모임)을 늘린다' }, { id: 'exists', text: '졸업 뒤에도 대학·지역에 도움받을 곳이 있다' }, { id: 'endure', text: '어른이 되면 외로움은 혼자 참아야 한다', why: '어른도 도움을 청해요. 혼자 참는 시간이 길어지면 생활이 무너질 수 있어요.' }, { id: 'none', text: '졸업하면 도움받을 곳이 없다', why: '대학 상담센터·지역 정신건강 기관·보건소처럼 성인이 이용할 곳이 있어요.' }];
    const CITY = [{ name: '내 자취방', icon: 'apartment', at: [1, 2] }, { name: '대학 상담센터', icon: 'school', at: [3, 0] }, { name: '지역 정신건강 기관', icon: 'office', at: [5, 2] }, { name: '보건소', icon: 'hospital', at: [3, 3] }, { name: '기차역', icon: 'station', at: [0, 0] }, { name: '시장', icon: 'market', at: [5, 0] }];

    MODS.push(
      M({
        id: 'intro.timeline', type: 'intro', title: '졸업 뒤 1년 일정 띠',
        method: '졸업 뒤 1년 일정 띠', tool: 'timeline', minutes: 7,
        levels: { easy: '카드 4장(수능·졸업·진학·이사)을 함께 시간 띠에 놓는다.', base: '카드 6장을 놓고 변화가 몰리는 때를 짚는다.', challenge: '변화가 몰리는 때에 필요한 자원 하나를 떠올려 말한다.' },
        intro: {
          teacher: '"수능부터 다음 해 겨울까지, 1년 동안 어떤 변화가 기다리고 있을까요?" 시연 단추로 카드가 시간 띠에 놓이는 모습을 보여 준다. 졸업부터 이사·새 생활까지 두세 달에 변화가 몰린다는 것을 함께 짚는다. "졸업하면 자유니까 다 괜찮아질 거예요"라는 말이 나오면 "좋은 변화도 여러 개가 한꺼번에 오면 몸과 마음은 어떨까요?"라고 되묻는다. 오늘은 그 전환기를 스스로 관리할 계획과, 졸업 뒤에도 이용할 자원을 정리한다고 밝힌다.',
          student: '수능부터 다음 해 겨울까지 생길 변화 카드를 시간 띠에 놓고, 변화가 한꺼번에 몰리는 때를 찾아보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['고3 가을', '다음 해 겨울'], slots: YEAR.length, cards: [YEAR[3], YEAR[0], YEAR[5], YEAR[2], YEAR[1], YEAR[4]] }, sequence: [{ order: YEAR }] },
          art: { draw: 'a long paper ribbon timeline from autumn leaves to winter snow, paper cards for an exam, a graduation cap, a backpack, a moving box and a calendar clustered in the middle, a paper student walking along the ribbon', banner: '변화가 몰리는 때', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: note('진학·취업·진로 결정은 학생마다 다르므로 \'진학·취업 시작\'을 한 카드로 묶었다. 학생의 실제 진로·가정 형편을 묻지 않는다.'),
      }),
      M({
        id: 'intro.data', type: 'intro', title: '전환기 걱정 자료 읽기',
        method: '전환기 걱정 자료', tool: 'chart', minutes: 7,
        levels: { easy: '원그래프에서 가장 큰 조각을 함께 읽는다.', base: '네 걱정의 크기를 견주어 해석한다.', challenge: '나라면 대비할 1순위를 마음속으로 고르고 까닭을 활동지에 혼자 적는다.' },
        intro: {
          teacher: '"가상 설문이에요. 졸업을 앞둔 학생들이 가장 걱정하는 것은 무엇일까요?" 시연 단추로 가장 큰 조각을 고르는 모습을 보여 준다. "외로움은 작은 문제 아닌가요?"라는 말이 나오면 "돈 관리 다음으로 큰 조각이 외로움이에요. 혼자 살기 시작하면 왜 외로움이 커질까요?"라고 되묻는다. 걱정 네 가지 모두 계획과 자원으로 대비할 수 있다는 점을 짚고, 자료가 가상임을 밝힌다.',
          student: '가상 설문 원그래프에서 졸업을 앞두고 가장 걱정되는 것을 읽고, 네 걱정을 견주어 해석해 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: WORRY_T, unit: '%', data: WORRY, question: '가장 큰 조각은?', choices: WORRY.map((x) => x[0]), showValues: true }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart with four slices decorated with a coin, two empty chairs, a signpost and a rice bowl with a moon, a paper student looking at it with a small notebook', banner: '무엇이 걱정될까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: note('자료는 수업용 가상 값이다(화면 제목에 밝힘). 학생 자신의 걱정 1순위는 발표시키지 않는다.'),
      }),

      M({
        id: 'activity.budget', type: 'activity', title: '자립 첫 달 생활 예산',
        method: '자립 생활 예산', tool: 'economy', minutes: 17,
        levels: { easy: '첫 문항은 항목 4개 가운데서 고르고, 예산 막대와 합계가 보인다.', base: '항목 6개로 주거·식비·교통을 넣고 쉼 예산을 지켜 고른다.', challenge: '합계는 맞힌 뒤에만 보이고, 예상 밖 병원비가 생긴 달을 다시 배분한다.' },
        activity: {
          title: '한 달 100만 원 나누기', tool: 'economy',
          teacher: '"가상 인물이 혼자 살며 한 달 생활비 100만 원을 쓴다고 해 봐요. 주거·식비·교통은 꼭 들어가야겠죠. 그럼 쉼 예산은요?" 문항마다 예산 막대를 보며 고르게 한다. 쉼 예산을 빼는 학생에게 "한 달 내내 쉬는 데 한 푼도 쓰지 않으면 마음은 어떻게 될까요?"라고 묻는다. 예상 밖 지출이 생기면 무엇부터 줄일지 정해 두는 것, 돈 걱정이 커지면 혼자 끌어안지 않고 상담·보호자와 의논하는 것도 자기 관리라는 점을 짚는다.',
          task: '가상 한 달 생활비 안에서 꼭 필요한 항목과 쉼 예산을 지키며 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '한 달 생활비 100만 원(가상). 주거비·식비·교통비는 꼭 넣고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: ITEMS }, target: { budget: { must: ['rent', 'food', 'trans'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '한 달 생활비 100만 원(가상). 주거비·식비·교통비는 꼭 넣고 예산 안에서 고르세요(항목 4개).', toolOptions: { items: ITEMS.filter((x) => ['rent', 'food', 'trans', 'game'].includes(x.id)) } } } },
            { prompt: '같은 100만 원에서 쉼 예산(여가·취미)까지 꼭 지키고, 새 게임기 할부는 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: ITEMS }, target: { budget: { must: ['rent', 'food', 'trans', 'rest'], not: ['game'] } }, difficulty: 0.3 },
            { prompt: '이번 달 예상 밖 병원비 15만 원이 생겼어요. 병원비·주거·식비·교통·쉼 예산을 지키며 100만 원 안에서 다시 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: [...ITEMS, CLINIC] }, target: { budget: { must: ['rent', 'food', 'trans', 'rest', 'clinic'] } }, difficulty: 0.4, conclude: '자립 예산은 꼭 필요한 것과 쉼을 먼저 지키고, 예상 밖 지출이 생기면 줄일 것을 미리 정해 두어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예상 밖 지출이 생긴 달, 무엇을 줄이고 무엇은 지킬지와 그 까닭을 쓰세요.' }] },
        notes: note('금액은 모두 수업용 가상 값이다. 학생 가정의 실제 형편·생활비를 묻지 않는다. 돈 걱정이 마음건강에 영향을 줄 수 있으며 의논할 곳이 있다는 정도로 다룬다.'),
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '마음건강 자기 관리 계획서',
        method: '마음건강 자기 관리 계획서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '칸마다 문장 틀을 보고 잠·운동과 관계 두 항목을 쓴다.', base: '잠·운동, 관계, 도움 자원 세 칸(네 항목)을 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 마음이 크게 힘들 때 연락할 순서를 넣는다.' },
        activity: {
          title: '나를 돌보는 네 항목', tool: 'rubric-writing',
          teacher: '"졸업 뒤 혼자 생활할 때 마음건강을 지킬 계획을 잠·운동·관계·도움 자원 네 항목으로 써 봐요." 기준표를 함께 읽고 쓰게 한다. "그때 가서 알아서 하면 돼요"라는 학생에게 "피곤하고 외로울 때 계획을 새로 세우기 쉬울까요, 미리 세워 둔 계획을 꺼내기 쉬울까요?"라고 되묻는다. 도움 자원 칸에는 학교가 확인한 연락처를 적게 하고, 계획은 남에게 보여 주는 것이 아니라 내가 꺼내 쓸 것이라고 말해 준다.',
          task: '졸업 뒤 생활을 떠올리며 마음건강 자기 관리 계획을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('잠과 운동 계획을 2~3문장으로 쓰세요.', '졸업 뒤 혼자 생활할 때 지킬 잠·운동 계획을 쓰세요(시각·횟수를 구체적으로).', ['잠드는 시각이나 잠 시간을 정했다', '운동 횟수나 방법을 정했다', '내가 지킬 수 있는 크기로 정했다'], { min: 40, max: 300, sent: [2, 3], must: [['잠', '자']], starter: '나는 밤 ~시 전에 잔다. 일주일에 ~번 ~를 한다.', plus: '계획이 무너진 날 되돌리는 방법을 썼다', d: 0.35 }),
            RWQ('관계 계획을 2~3문장으로 쓰세요.', '졸업 뒤에도 연결을 지킬 관계 계획(옛 친구·가족·새 모임)을 쓰세요.', ['연락을 이어 갈 사람(역할)을 정했다', '새 관계를 만들 방법을 정했다', '언제 할지 정했다'], { min: 40, max: 300, sent: [2, 3], starter: '나는 ~마다 ~에게 연락한다. 새 곳에서는 ~에 나가 본다.', plus: '연결이 한 가닥에만 기대지 않게 했다', d: 0.4 }),
            RWQ('도움 자원 계획을 2~3문장으로 쓰세요.', '마음이 힘들 때 이용할 도움 자원(대학 상담센터·지역 기관·학교가 확인한 연락처)과 이용 방법을 쓰세요.', ['이용할 도움 자원을 두 곳 이상 썼다', '언제 이용할지(어떤 신호가 보이면) 정했다', '이용 방법(예약·연락)을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['상담', '센터', '기관']], starter: '마음이 ~하면 ~에 연락한다. 그래도 힘들면 ~', plus: '마음이 크게 힘들 때 연락할 순서(1·2·3)를 정했다', sample: '잠이 줄고 2주 넘게 기분이 가라앉으면 대학 상담센터에 예약한다. 밤이나 주말에는 학교가 알려 준 지역 상담 번호로 연락한다. 마음이 크게 힘들면 1. 가족, 2. 상담센터, 3. 지역 상담 순서로 연락한다.', d: 0.4, more: { conclude: '자기 관리 계획은 잠·운동·관계·도움 자원 네 기둥이에요. 미리 세워 두면 힘들 때 꺼내 쓸 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 자기 관리 계획을 한눈에 정리하세요(혼자 보기).', columns: ['항목', '나의 계획', '지켰는지 볼 때'], cells: [['잠', '', ''], ['운동', '', ''], ['관계', '', ''], ['도움 자원', '', '']] }] },
        notes: note(NUM_NOTE, '\'2주 넘게\' 같은 기준은 예시 글의 연습용 표현이다(사람 확인 목록). 계획서는 걷거나 발표시키지 않는다.'),
      }),
      M({
        id: 'activity.dilemma', type: 'activity', title: '혼자 사는 첫 달 갈림길',
        method: '혼자 사는 첫 달', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길에서 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가 연결의 가닥을 늘리는 길을 찾고 근거 두 개를 고른다.' },
        activity: {
          title: '하린이의 첫 달', tool: 'dilemma',
          teacher: '"혼자 산 지 3주, 하린이는 아무와도 말하지 않는 날이 늘었어요. 참을까요, 옛 친구에게 연락할까요, 상담을 이용할까요?" 선택마다 하린이에게 생긴 영향을 읽게 한다. \'혼자 참는다\'를 고른 학생에게 "어른이 되었으니 참아야 한다는 생각은 어디서 왔을까요?"라고 묻는다. 졸업 뒤에도 대학 상담센터·지역 기관 같은 도움받을 곳이 있고, 연결은 여러 가닥일수록 튼튼하다는 점을 짚는다.',
          task: '하린이의 첫 달 갈림길을 따라 결과를 보고, 연결을 늘리는 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('하린이의 첫 달 갈림길을 따라가고, 연결의 가닥을 늘리는 길과 근거를 고르세요.', ALONE, [['friend', 'center', 'join']], ALONE_R, ['strands', 'exists'], { d: 0.4 }),
            EXPLOREQ('\'혼자 참는다\' 길과 \'친구에게만 기댄다\' 길도 끝까지 가 보고 하린이에게 생긴 영향을 견주세요.', ALONE, ALONE_R, ['다른 길의 끝 장면을 확인했다', '연결의 가닥이 몇 개였는지 견주었다'], { d: 0.35 }),
            DILQ('하린이의 고향 친구 예린이가 "요즘 너무 지쳐서 아무것도 하기 싫어"라고 연락해 왔어요. 하린이가 할 일을 고르세요.', { text: '밤 11시, 고향 친구 예린이에게서 "요즘 너무 지쳐서 아무것도 하기 싫어"라는 메시지가 온다.', who: '하린', motif: 'moon', choices: [
              { id: 'hear', text: '"많이 지쳤구나. 무슨 일 있었는지 들려줄래?"라고 답한다', result: '예린이가 새 일터에서 힘든 일을 털어놓는다.', impact: [{ who: '예린', text: '이야기할 사람이 생긴다', tone: 1 }],
                next: { text: '예린이가 "이런 생각이 계속 들어서 무서워"라고 한다.', choices: [
                  { id: 'link', text: '"혼자 두고 싶지 않아. 네가 사는 곳 상담 기관을 같이 찾아보자"고 하고, 걱정되면 예린이 가족에게도 알린다', result: '예린이가 다음 날 지역 상담 기관에 연락해 보기로 한다.', impact: [{ who: '예린', text: '전문가와 이어질 길이 생긴다', tone: 1 }], ending: '멀리 있어도 듣고, 혼자 두지 않고, 전문가와 잇는 일은 할 수 있다.' },
                  { id: 'cheer', text: '"힘내! 다 잘될 거야"라고만 하고 대화를 마친다', result: '예린이가 "응…"이라고만 답한다.', impact: [{ who: '예린', text: '무거운 마음이 그대로 남는다', tone: 0 }], ending: '응원 한마디보다 듣고 잇는 것이 힘이 된다.' }] } },
              { id: 'later', text: '피곤해서 내일 답하기로 한다', result: '밤새 예린이의 메시지에 답이 없다.', impact: [{ who: '예린', text: '혼자 밤을 보낸다', tone: -1 }], ending: '걱정되는 메시지는 미루지 않고 답한다.' },
              { id: 'same', text: '"나도 힘들어, 다 그래"라며 내 이야기만 한다', result: '예린이가 더 말하지 않는다.', impact: [{ who: '예린', text: '이야기할 틈을 잃는다', tone: -1 }], ending: '나도 힘들 때는 함께 도움을 찾자고 말할 수 있다.' }] },
            [['hear', 'link']], [{ id: 'listen', text: '먼저 듣고 혼자 두지 않는다' }, { id: 'pro', text: '멀리 있어도 그 지역의 전문가와 잇는다' }, { id: 'cheer', text: '"힘내"라는 말이면 충분하다', why: '응원만으로는 친구가 도움과 이어지지 않을 수 있어요.' }], ['listen', 'pro'], { d: 0.35, more: { conclude: '졸업 뒤에도 연결은 여러 가닥이고, 도움받을 곳은 있어요. 나도, 친구도 혼자 참지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하린이에게 "혼자 사는 첫 달"을 버틸 방법 두 가지를 조언하는 글을 두 문장으로 쓰세요.' }] },
        notes: note('인물은 가상이다. 예린이 장면처럼 친구가 위기 신호를 보이면 멀리 있어도 그 지역의 전문가·가족과 잇는다는 생명지킴이 틀을 따른다.'),
      }),
      M({
        id: 'activity.map', type: 'activity', title: '성인기 마음건강 자원 지도',
        method: '성인기 자원 지도', tool: 'map', minutes: 18,
        levels: { easy: '핀을 꽂으면 칸 이름이 읽기 글자로 보이고, 이동 시간 문항에서 길 칸에 번호가 붙는다.', base: '읽기 글자 없이 성인기 자원 네 곳을 찾아 핀을 꽂고 이동 시간을 잰다.', challenge: '읽기 글자를 맞힌 확인 뒤에만 보이고, 활동지에 곳마다 이용 방법을 적는다.' },
        activity: {
          title: '새 동네 자원 찾기', tool: 'map',
          teacher: '"졸업 뒤 새 동네(가상)로 이사했다고 생각해 봐요. 마음이 힘들 때 이용할 곳이 어디 있을까요?" 핀을 꽂을 때마다 "이곳은 누가, 어떻게 이용하나요?"라고 묻는다. "졸업하면 도움받을 곳이 없다"는 학생에게 지도의 대학 상담센터·지역 정신건강 기관·보건소를 가리키며 "고등학교 상담실 대신 이런 곳이 있어요"라고 말한다. 이사한 첫 주에 내 동네 자원을 찾아 두는 것이 자립 준비라는 점을 짚는다.',
          task: '가상 새 동네 지도에서 성인기 마음건강 자원을 찾아 핀을 꽂고 이동 시간을 재요.', levels: { easy: { readout: true, showCells: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '대학생이 학교 안에서 상담을 받을 수 있는 곳에 핀을 꽂으세요.', toolOptions: { title: '새 동네 자원 지도(가상)', places: CITY }, target: { place: '대학 상담센터' }, difficulty: 0.15 },
            { prompt: '대학에 다니지 않아도 지역 주민이 마음건강 상담을 이용할 수 있는 곳에 핀을 꽂으세요.', toolOptions: { title: '새 동네 자원 지도(가상)', places: CITY }, target: { place: '지역 정신건강 기관' }, difficulty: 0.2 },
            { prompt: '건강 검진과 건강 상담 안내를 받을 수 있는 공공 기관에 핀을 꽂으세요.', toolOptions: { title: '새 동네 자원 지도(가상)', places: CITY }, target: { place: '보건소' }, difficulty: 0.25 },
            { prompt: '내 자취방에서 지역 정신건강 기관까지, 한 칸을 걸어서 5분으로 볼 때 걸리는 시간을 재세요.', toolOptions: { mode: 'scale', title: '새 동네 자원 지도(가상)', places: CITY, scale: { cell: 5, unit: '분' } }, target: { from: '내 자취방', to: '지역 정신건강 기관' }, difficulty: 0.35, conclude: '졸업 뒤에도 대학 상담센터·지역 정신건강 기관·보건소 같은 자원이 있어요. 이사한 첫 주에 찾아 두면 필요할 때 바로 닿아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '졸업 뒤 이용할 자원과 이용 방법을 쓰세요.', columns: ['자원', '누가 이용하나', '이용 방법', '연락'], cells: [['대학 상담센터', '', '', ''], ['지역 정신건강 기관', '', '', ''], ['밤·주말 상담', '', '', NUM]] }] },
        notes: note(NUM_NOTE, '지도와 거리는 가상이다. 기관별 이용 대상·방법은 일반 설명이며 실제 지역 기관의 이름·이용 조건은 교사가 공식 안내로 확인해 덧붙인다(사람 확인 목록).'),
      }),

      M({
        id: 'wrap.letter', type: 'wrap', title: '1년 뒤의 나에게',
        method: '1년 뒤의 나에게', tool: 'story', minutes: 7,
        levels: { easy: '편지 빈칸 하나(힘들 때 할 일)를 함께 채운다.', base: '편지 빈칸 둘(할 일·연락할 곳)을 스스로 채운다.', challenge: '활동지에 구체적인 방법(시각·장소·연락처 자리)을 넣어 편지를 완성한다.' },
        wrap: {
          teacher: '"1년 뒤의 나에게 짧은 편지를 남겨요. \'힘들 때 ___하고 ___에게 연락하기.\'" 빈칸을 채운 뒤 활동지 편지로 이어 쓰게 한다. "1년 뒤엔 다 괜찮을 거야"만 쓰려는 학생에게 "괜찮지 않은 날의 나에게 무엇을 알려 주고 싶나요?"라고 묻는다. 편지는 걷지 않고 각자 간직한다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '1년 뒤의 나에게', slots: [{ id: 'do', who: '나', label: '힘들 때는 ___' }, { id: 'call', who: '나', label: '그래도 힘들면 ___' }], cards: [{ id: 'c1', text: '대학 상담센터나 지역 상담에 연락하기' }, { id: 'c2', text: '잠·밥을 먼저 챙기고 믿는 사람에게 이야기하기' }, { id: 'x1', text: '아무에게도 말하지 않고 참기' }, { id: 'x2', text: '연락을 모두 끊고 혼자 있기' }] }, prompt: '1년 뒤의 나에게 보내는 편지의 빈칸을 채우세요.', target: { fill: { do: 'c2', call: 'c1' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '"졸업하면 도움받을 곳이 없다"는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 학교를 떠나면 혼자 해결해야 한다', '대학 상담센터·지역 정신건강 기관·보건소처럼 성인이 이용할 곳이 있다', '가족 말고는 도움받을 곳이 없다'], answer: 1, difficulty: 0.15, explain: '졸업 뒤에도 성인이 이용할 수 있는 마음건강 자원이 있어요. 미리 찾아 두면 필요할 때 바로 닿아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '1년 뒤의 나에게',
          items: [
            { type: 'short', prompt: '1년 뒤의 나에게 짧은 편지를 쓰세요(힘들 때 할 일·연락할 곳 넣기, 걷지 않아요).' },
            { type: 'table', prompt: '편지에 넣을 연락할 곳을 정리하세요.', columns: ['차례', '연락할 사람·곳'], cells: [['1', ''], ['2', ''], ['3', NUM]] },
          ],
        },
        notes: note(NUM_NOTE, '편지는 걷거나 읽지 않는다.'),
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '자립 준비 점검표',
        method: '자립 준비 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '생활·관계·자원 세 영역 항목을 함께 읽고 할 일만 고른다.', base: '생활·관계·마음·자원 항목 8개 가운데 자립 준비에 맞는 것만 고른다.', challenge: '활동지에 부족한 항목 하나를 골라 할 행동을 정한다.' },
        wrap: {
          teacher: '"졸업 전에 준비해 둘 것을 점검표로 확인해요. 생활·관계·마음·자원 네 영역이에요." 함께 표시한 뒤 \'힘들어도 혼자 해결하기\'를 고른 학생이 있으면 "어른이 된다는 것은 혼자 다 하는 것일까요, 도움을 잘 청하는 것일까요?"라고 되묻는다. 부족한 항목은 졸업 전에 하나씩 채우면 된다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '자립 준비 점검', items: [{ id: 'sleep', text: '잠·밥 리듬을 스스로 지키기' }, { id: 'money', text: '한 달 예산 세워 보기' }, { id: 'keep', text: '연락을 이어 갈 사람 정하기' }, { id: 'new', text: '새 곳에서 나갈 모임 알아보기' }, { id: 'sign', text: '내 마음이 힘들 때의 신호 알기' }, { id: 'res', text: '이사할 동네의 상담 자원 찾아 두기' }, { id: 'alone', text: '힘들어도 혼자 해결하기' }, { id: 'cut', text: '고향 친구 연락 끊고 새로 시작하기' }] }, prompt: '자립 준비에 맞는 항목만 골라 표시하세요.', target: { checklist: ['sleep', 'money', 'keep', 'new', 'sign', 'res'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '자립 준비 점검에서 \'도움 자원\' 영역에 들어갈 행동으로 알맞은 것은?', options: ['이사할 동네의 상담 자원과 연락 방법을 미리 찾아 둔다', '힘들어질 때까지 기다렸다가 찾는다', '도움 자원은 필요 없다고 정한다'], answer: 0, difficulty: 0.15, explain: '미리 찾아 둔 자원은 힘들 때 바로 꺼내 쓸 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '자립 준비 점검',
          items: [
            { type: 'check', prompt: '졸업 전에 해 둘 것에 표시하세요(혼자 보기).', options: ['잠·밥 리듬', '한 달 예산', '연락 이어 갈 사람', '새 모임', '힘들 때 신호 알기', '상담 자원 찾기'] },
            { type: 'short', prompt: '부족한 항목 하나와 졸업 전에 할 행동을 쓰세요.' },
          ],
        },
        notes: note(),
      }),
    );
  }

  // ======================================================================================================
  // 8. 일·학업 스트레스와 나를 지키는 권리 (12학년)
  // ======================================================================================================
  {
    const M = MOD('work-stress', [12]);
    const DAY = [{ id: 'd1', text: '마감 시간이 지났는데 "조금만 더"라며 연장 근무를 한다', motif: 'moon' }, { id: 'd2', text: '손님이 계산이 늦다며 큰 소리로 폭언을 한다', motif: 'storm' }, { id: 'd3', text: '4시간째 쉬는 시간 없이 서서 일한다', motif: 'cloud' }, { id: 'd4', text: '동료가 "고생했어"라며 음료를 건넨다', motif: 'sun' }, { id: 'd5', text: '퇴근 뒤 과제를 하다 새벽 2시에 잔다', motif: 'moon' }];
    const SLEEP = [['1주', 7], ['2주', 6], ['3주', 5], ['4주', 4]];
    const SLEEP_T = '세아의 주별 하루 평균 잠(가상, 근무 시간이 늘어난 4주)';
    // 쉬는 시간 없이 일을 요구받은 인물
    const BREAK = { text: '주말 아르바이트 6시간째, 점장이 "오늘 바쁘니까 쉬는 시간 없이 계속해 줘"라고 한다. 세아는 다리가 저리고 머리가 아프다.', who: '세아', motif: 'cloud', choices: [
      { id: 'endure', text: '사회생활이니 참고 계속 일한다', result: '퇴근 무렵 어지러워 잠시 주저앉는다.', impact: [{ who: '세아', text: '몸과 마음이 지친다', tone: -1 }],
        next: { text: '다음 주에도 같은 요구가 이어진다.', choices: [
          { id: 'tell', text: '이제라도 보호자·선생님께 상황을 알리고 상의한다', result: '보호자가 일터에 쉬는 시간을 함께 확인해 보자고 한다.', impact: [{ who: '세아', text: '혼자 감당하지 않는다', tone: 1 }], ending: '참아 온 일도 늦지 않게 말하면 바뀔 수 있다.' },
          { id: 'again', text: '또 참는다', result: '잠이 줄고 주말이 두려워진다.', impact: [{ who: '세아', text: '스트레스가 쌓인다', tone: -1 }], ending: '부당한 대우를 참는 것은 사회생활의 기술이 아니다.' }] } },
      { id: 'polite', text: '"10분만 쉬고 와도 될까요? 머리가 아파서요"라고 정중히 요청한다', result: '점장이 잠시 망설이다 "그래, 10분만"이라고 한다.', impact: [{ who: '세아', text: '잠시 회복한다', tone: 1 }],
        next: { text: '다음 주, 점장이 "지난번처럼 쉬지 말고 해"라며 미리 못을 박는다.', choices: [
          { id: 'consult', text: '믿는 어른(보호자·담임 선생님)과 상의하고, 일터 고민 상담 창구도 함께 알아본다', result: '보호자와 함께 근무 조건을 다시 이야기하기로 한다.', impact: [{ who: '세아', text: '나를 지킬 방법이 생긴다', tone: 1 }],
            next: { text: '보호자와 이야기하기 전, 세아는 무엇을 준비할지 고민한다.', choices: [
              { id: 'record', text: '날짜·근무 시간·들은 말을 적어 둔 기록을 챙긴다', result: '이야기할 때 사실을 차분히 말할 수 있다.', impact: [{ who: '세아', text: '말할 근거가 생긴다', tone: 1 }], ending: '정중히 요청하고, 믿는 어른과 상의하고, 기록을 남기면 나를 지킬 수 있다.' },
              { id: 'quit', text: '아무 준비 없이 그만두겠다고만 말한다', result: '그만두게 되지만 받지 못한 것이 있는지 확인하지 못한다.', impact: [{ who: '세아', text: '내 권리를 다 확인하지 못한다', tone: 0 }], ending: '그만두더라도 기록과 상의는 나를 지키는 힘이 된다.' }] } },
          { id: 'silent', text: '말해 봐야 소용없다며 그냥 따른다', result: '세아의 지친 마음이 다시 쌓인다.', impact: [{ who: '세아', text: '말할 기회를 놓친다', tone: -1 }], ending: '한 번 막혔다고 말하기를 멈추면 혼자 참게 된다.' }] } },
      { id: 'adult', text: '바로 보호자에게 연락해 상황을 알린다', result: '보호자가 오늘은 무리하지 말고, 근무 조건을 함께 확인하자고 한다.', impact: [{ who: '세아', text: '든든한 편이 생긴다', tone: 1 }], ending: '일터의 어려움도 믿는 어른과 나눌 수 있다.' }] };
    const BREAK_R = [{ id: 'right', text: '일하는 사람도 존중받고 쉴 권리가 있다' }, { id: 'talk', text: '정중히 요청하고 믿는 어른과 상의하면 나를 지킬 수 있다' }, { id: 'endure', text: '부당한 대우를 참는 것이 사회생활이다', why: '부당한 대우를 참는 것은 사회생활의 기술이 아니에요. 말하고 도움을 청할 수 있어요.' }, { id: 'fault', text: '바쁜 날 쉬자고 하는 것은 내 잘못이다', why: '몸이 보내는 신호를 말하는 것은 잘못이 아니에요.' }];

    MODS.push(
      M({
        id: 'intro.case', type: 'intro', title: '아르바이트생의 하루',
        method: '아르바이트생의 하루', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장을 함께 넘겨 보며 스트레스 요인 장면을 고른다.', base: '장면 5장을 넘겨 보며 스트레스 요인 장면을 모두 고른다.', challenge: '고른 요인마다 할 수 있는 대응 하나를 짝과 말한다.' },
        intro: {
          teacher: '"가상 인물 세아의 주말 아르바이트 하루예요. 어떤 장면이 세아에게 스트레스가 될까요?" 장면을 넘기며 두세 명에게 고르게 하고, 시연 단추로 요인 장면이 바구니에 담기는 모습을 보여 준다. "손님이 소리치는 건 서비스업이면 당연하죠"라는 말이 나오면 "일하는 사람이 폭언을 듣는 것도 당연한 일일까요?"라고 되묻는다. 동료의 음료처럼 힘이 되는 장면도 있다는 것을 짚고, 오늘은 일터의 스트레스 요인을 알아차리고 도움을 청하는 길을 배운다고 밝힌다.',
          student: '가상 인물 세아의 아르바이트 하루 장면을 넘겨 보며, 세아에게 스트레스가 되는 장면을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '스트레스 요인', title: '세아의 주말 하루(가상)', cards: DAY, shuffle: false }, sequence: [{ pick: ['d1', 'd2', 'd3', 'd5'] }] },
          art: { draw: 'a paper cafe counter at night with a tired paper worker, a loud speech bubble from a customer, a paper clock past closing time, and a coworker offering a paper cup on the side', banner: '세아의 하루', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: note('인물은 가상이다. 학생의 실제 아르바이트 경험(특히 부당한 대우를 받은 일)을 묻지 않는다.'),
      }),
      M({
        id: 'intro.chart', type: 'intro', title: '근무 시간과 잠 자료',
        method: '근무 시간과 잠 자료', tool: 'chart', minutes: 7,
        levels: { easy: '점마다 값이 보이는 꺾은선에서 잠이 가장 적은 주를 함께 읽는다.', base: '칠판의 근무 시간 변화와 잠 시간 변화를 비교한다.', challenge: '잠이 위험할 만큼 줄어든 구간을 짚고 그 까닭을 말한다.' },
        intro: {
          teacher: '"가상 인물 세아는 4주 동안 근무 시간이 늘었어요(칠판에 주별 근무 시간을 적는다). 그동안 하루 평균 잠은 어떻게 바뀌었을까요?" 시연 단추로 잠이 가장 적은 주를 고르는 모습을 보여 준다. "젊으니까 잠은 좀 줄여도 괜찮아요"라는 말이 나오면 "잠이 줄면 다음 날 일과 공부, 기분은 어떨까요?"라고 되묻는다. 근무와 잠이 반대로 움직이는 구간을 짚고, 자료가 가상임을 밝힌다.',
          student: '가상 꺾은선그래프에서 세아의 주별 잠 시간을 읽고, 칠판의 근무 시간 변화와 견주어 무엇이 보이는지 말해 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: SLEEP_T, unit: '시간', yLabel: '하루 평균 잠', xLabel: '주', data: SLEEP, question: '잠이 가장 적은 주는?', choices: SLEEP.map((x) => x[0]), showValues: true }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper line chart sloping down over four weeks with a small paper moon getting smaller at each point, a paper work apron and a paper alarm clock beside it', banner: '일은 늘고 잠은 줄고', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: note('잠 시간과 근무 시간은 모두 수업용 가상 값이다(화면 제목에 밝힘). 칠판 근무 시간 예: 1주 10시간 → 4주 26시간(가상). 청소년 근로 시간 기준 등 실제 법 기준은 이 차시에서 수치로 다루지 않는다(사람 확인 목록).'),
      }),

      M({
        id: 'activity.dilemma', type: 'activity', title: '부당한 요구 앞에서 갈림길',
        method: '부당한 요구 앞에서', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 갈림길에서 고르고 근거를 고른다.', base: '갈림길 둘까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가 정중한 요청·상의·기록으로 이어지는 길을 찾고 근거 두 개를 고른다.' },
        activity: {
          title: '쉬는 시간 없이 계속해', tool: 'dilemma',
          teacher: '"점장이 쉬는 시간 없이 계속하라고 해요. 참을까요, 정중히 요청할까요, 믿는 어른과 상의할까요?" 선택마다 세아에게 생긴 영향을 읽게 한다. \'참는다\'를 고른 학생에게 "참는 동안 세아의 잠과 마음은 어떻게 되었나요?"라고 묻는다. "말하면 잘릴 것 같아요"라는 학생에게 "그 걱정이 클수록 혼자가 아니라 믿는 어른과 함께 말하는 게 필요하지 않을까요?"라고 되묻는다. 일하는 사람도 존중받고 쉴 권리가 있고, 기록을 남기면 말할 근거가 된다는 점을 짚는다.',
          task: '쉬는 시간 없이 일하라는 요구 앞에서의 갈림길을 따라 결과를 보고, 나를 지키는 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('세아가 쉬는 시간 없이 일하라는 요구를 받았어요. 나를 지키는 길과 근거를 고르세요.', BREAK, [['polite', 'consult', 'record']], BREAK_R, ['right', 'talk'], { d: 0.4 }),
            EXPLOREQ('\'참는다\' 길과 \'바로 보호자에게 알린다\' 길도 끝까지 가 보고 세아에게 생긴 영향을 견주세요.', BREAK, BREAK_R, ['다른 길의 끝 장면을 확인했다', '세아가 혼자 감당했는지 함께했는지 견주었다'], { d: 0.35 }),
            DILQ('손님이 세아에게 폭언을 했는데, 점장이 "손님이 왕이니 그냥 사과해"라고 해요. 알맞은 길을 고르세요.', { text: '손님이 세아에게 큰 소리로 폭언을 하고 나갔다. 점장이 "손님이 왕이야, 다음엔 그냥 사과해"라고 한다.', who: '세아', motif: 'storm', choices: [
              { id: 'say', text: '"폭언을 들으니 일하기가 너무 힘들어요. 이럴 땐 어떻게 하면 될까요?"라고 점장에게 말한다', result: '점장이 "다음엔 나를 바로 불러"라고 답한다.', impact: [{ who: '세아', text: '혼자 감당하지 않을 방법이 생긴다', tone: 1 }],
                next: { text: '그날 밤, 폭언이 계속 떠올라 잠이 오지 않는다.', choices: [
                  { id: 'share', text: '믿는 어른에게 오늘 일과 지금 마음을 이야기한다', result: '보호자가 이야기를 들어 주고, 계속 힘들면 상담도 함께 알아보자고 한다.', impact: [{ who: '세아', text: '마음이 조금 가벼워진다', tone: 1 }], ending: '일터의 상처도 말하면 덜어진다. 말할 곳이 있다.' },
                  { id: 'hold', text: '내가 부족해서 그렇다며 혼자 곱씹는다', result: '다음 출근이 두려워진다.', impact: [{ who: '세아', text: '자책이 커진다', tone: -1 }], ending: '폭언은 들은 사람의 잘못이 아니다.' }] } },
              { id: 'blame', text: '내 잘못이라고 생각하고 아무에게도 말하지 않는다', result: '폭언이 머릿속에서 계속 맴돈다.', impact: [{ who: '세아', text: '자책이 커진다', tone: -1 }], ending: '폭언은 들은 사람의 잘못이 아니다.' },
              { id: 'yell', text: '다음에 손님에게 똑같이 소리친다', result: '일터에서 다툼이 커진다.', impact: [{ who: '세아', text: '더 곤란해진다', tone: -1 }], ending: '맞대응보다 일터와 믿는 어른에게 알리는 것이 나를 지킨다.' }] },
            [['say', 'share']], [{ id: 'notmine', text: '폭언은 들은 사람의 잘못이 아니다' }, { id: 'tell', text: '일터와 믿는 어른에게 알리면 혼자 감당하지 않는다' }, { id: 'king', text: '손님이 왕이니 무엇이든 참아야 한다', why: '손님에게도 일하는 사람을 존중할 책임이 있어요.' }], ['notmine', 'tell'], { d: 0.35, more: { conclude: '일터에서도 나는 존중받을 권리가 있어요. 정중히 말하고, 믿는 어른과 상의하고, 기록을 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '점장에게 쉬는 시간을 정중히 요청하는 말을 두 문장으로 쓰세요(사실·요청 넣기).' }] },
        notes: note('일터의 쉬는 시간·근로 조건에 관한 구체 기준(시간·수치)은 다루지 않고 \'존중받고 쉴 권리\'로만 말한다. 실제 기준은 고용노동부 청소년 근로권익 안내로 교사가 확인한다(사람 확인 목록).'),
      }),
      M({
        id: 'activity.clock', type: 'activity', title: '근무와 쉼, 잠 시간 맞추기',
        method: '근무·휴식 시간 설계', tool: 'clock', minutes: 18,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다.', base: '10분 단위로 시각을 나타내고, 잠 시간이 지켜지는지 판단한다.', challenge: '5분 단위로 나타내며 작은 눈금이 숨겨지고, 활동지에서 시험 기간 근무를 조정한다.' },
        activity: {
          title: '세아의 금요일 저녁', tool: 'clock',
          teacher: '"세아는 금요일 저녁에 아르바이트를 해요. 근무·쉬는 시간·잠드는 시각을 시계에 나타내 보고, 잠이 지켜지는지 따져 봐요." 문항마다 시계를 맞춘 뒤 "이 시각이면 다음 날 아침까지 몇 시간 잘 수 있을까요?"라고 묻는다. "토요일은 학교가 없으니 늦게 자도 된다"는 학생에게 "토요일 아침에도 근무가 있다면요?"라고 되묻는다. 우리 반 약속(하루 7시간 잠)은 연습용 기준이며, 일정이 잠을 깎으면 근무를 조정하거나 상의할 수 있다는 점을 짚는다.',
          task: '세아의 금요일 근무·쉬는 시간·잠드는 시각을 시계에 나타내고 잠이 지켜지는지 따져요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 10 }, challenge: { minuteStep: 5, showMinuteMarks: false } },
          items: [
            { prompt: '세아의 금요일 근무는 저녁 6시에 시작해요. 근무가 시작하는 시각을 나타내세요.', toolOptions: {}, target: { h: 6, m: 0 }, difficulty: 0.1 },
            { prompt: '근무 2시간 30분 뒤에 쉬는 시간을 갖기로 했어요. 쉬는 시간이 시작하는 시각을 나타내세요.', toolOptions: {}, target: { h: 8, m: 30 }, difficulty: 0.2 },
            { prompt: '근무는 밤 10시에 끝나요. 근무가 끝나는 시각을 나타내세요.', toolOptions: {}, target: { h: 10, m: 0 }, difficulty: 0.2 },
            { prompt: '토요일 아침 7시 30분에 일어나야 해요. 우리 반 약속(하루 7시간 잠)을 지키려면 늦어도 몇 시에 잠들어야 할까요? 그 시각을 나타내세요.', toolOptions: {}, target: { h: 12, m: 30 }, difficulty: 0.35, conclude: '근무가 끝나는 시각과 잠드는 시각 사이가 좁으면 잠이 깎여요. 그럴 때는 근무를 조정하거나 상의할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시험 기간 근무를 조정한 계획을 쓰세요.', columns: ['', '평소 주', '시험 기간'], cells: [['근무 날·시간', '', ''], ['잠드는 시각', '', ''], ['조정을 상의할 사람', '', '']] }] },
        notes: note('\'하루 7시간 잠\'은 의학 기준이 아니라 이 수업의 연습용 우리 반 약속이다(화면·교사 메모에 밝힘). 근무 일정은 가상이다.'),
      }),
      M({
        id: 'activity.write', type: 'activity', title: '도움 요청 메시지 쓰기',
        method: '도움 요청 메시지 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '칸마다 문장 틀을 보고 사실과 요청을 2문장으로 쓴다.', base: '사실·감정·요청이 든 메시지를 4문장 안팎으로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 같은 내용을 상담 창구용으로 바꿔 쓴다.' },
        activity: {
          title: '사실·감정·요청 메시지', tool: 'rubric-writing',
          teacher: '"세아가 보호자나 선생님께 일터 상황을 알리는 메시지를 써 봐요. 사실(무슨 일이 있었나)·감정(지금 어떤가)·요청(무엇을 도와 달라는가) 세 가지가 들어가면 돼요." 기준표를 함께 읽고 쓰게 한다. "그냥 \'알바 힘들어\'라고 보내면 되잖아요"라는 학생에게 "그 메시지를 받은 사람은 무엇을 도와야 할지 알 수 있을까요?"라고 되묻는다. 메시지에는 실제 가게 이름·연락처를 쓰지 않는다.',
          task: '가상 인물 세아가 되어 일터 상황을 알리는 도움 요청 메시지를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('보호자에게 보낼 메시지를 2~4문장으로 쓰세요.', '세아가 되어, 쉬는 시간 없이 6시간 일하고 손님 폭언을 들은 일을 보호자에게 알리는 메시지를 쓰세요(실제 가게 이름·연락처 쓰지 않기).', ['있었던 일을 사실대로 썼다', '지금 내 마음·몸 상태를 썼다', '무엇을 도와 달라는지 썼다'], { min: 40, max: 300, sent: [2, 4], must: [['도와', '상의', '이야기']], starter: '오늘 일터에서 ~했어요. 지금 ~해요. ~를 같이 ~해 줄 수 있을까요?', plus: '언제 이야기하고 싶은지 정했다', d: 0.35 }),
            RWQ('담임 선생님께 보낼 메시지를 2~4문장으로 쓰세요.', '세아가 되어, 아르바이트 때문에 잠이 줄고 수업에 집중하기 어렵다는 것을 담임 선생님께 알리고 상담을 청하는 메시지를 쓰세요.', ['있었던 일을 사실대로 썼다', '학교생활에 생긴 영향을 썼다', '상담을 청했다'], { min: 40, max: 300, sent: [2, 4], must: [['상담', '선생님']], starter: '선생님, 요즘 ~ 때문에 ~해요. ~ 시간에 상담할 수 있을까요?', plus: '정중한 인사와 마무리를 넣었다', d: 0.4 }),
            RWQ('같은 내용을 일터 고민 상담 창구에 보낼 글로 바꿔 2~4문장으로 쓰세요.', '세아가 되어, 일터 고민 상담 창구에 보낼 글을 쓰세요. 날짜·근무 시간·있었던 일·묻고 싶은 것을 차분히 쓰세요.', ['날짜와 근무 시간을 썼다', '있었던 일을 감정보다 사실 위주로 썼다', '묻고 싶은 것을 분명히 썼다'], { min: 40, max: 300, sent: [2, 4], starter: '저는 ~에 ~시간 일했어요. ~했는데, ~해도 되는지 알고 싶어요.', plus: '기록(메모·캡처)이 있다고 밝혔다', sample: '저는 지난 토요일에 쉬는 시간 없이 6시간 일했어요. 점장님이 다음 주에도 쉬지 말라고 했어요. 이런 요구를 받았을 때 어떻게 하면 되는지 알고 싶어요. 날짜와 시간을 적어 둔 메모가 있어요.', d: 0.4, more: { conclude: '도움 요청 메시지는 사실·감정·요청 세 가지예요. 받는 사람에 맞게 바꾸면 도움이 더 빨리 와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '받는 사람에 따라 메시지를 어떻게 바꿨는지 쓰세요.', columns: ['받는 사람', '강조한 것'], cells: [['보호자', ''], ['담임 선생님', ''], ['상담 창구', '']] }] },
        notes: note('\'일터 고민 상담 창구\'는 기관 이름 없이 쓴 일반 표현이다. 실제 청소년 근로 상담 창구는 교사가 공식 안내(고용노동부 등)로 확인해 알려 준다(사람 확인 목록).'),
      }),
      M({
        id: 'activity.sort', type: 'activity', title: '조율할 일·꼭 말할 일',
        method: '참을 일·말할 일', tool: 'sortboard', minutes: 18,
        levels: { easy: '바구니 옆에 장 수가 보이고, 틀린 바구니에 넣으면 까닭과 함께 되돌아온다(카드 4장).', base: '카드 6장을 서로 조율할 일·꼭 말할 일로 나누고, 말할 방법과 기록할 것을 나눈다.', challenge: '헷갈리는 카드가 더해지고, 꼭 말할 일마다 말할 방법을 잇는다.' },
        activity: {
          title: '일터 상황 카드 나누기', tool: 'sortboard',
          teacher: '"일터에서 생기는 일 가운데 서로 조율해 볼 수 있는 일과, 꼭 말하고 도움을 청해야 할 일을 나눠 봐요." 카드를 넣을 때마다 "이 일은 한 번의 사정일까요, 나를 존중하지 않는 대우일까요?"라고 묻는다. \'임금을 주지 않음\'을 조율할 일에 넣는 학생에게 "일한 만큼 받는 것은 조율할 일일까요, 지켜져야 할 권리일까요?"라고 되묻는다. 꼭 말할 일은 혼자 버티지 않고 믿는 어른·상담 창구와 함께 말한다는 점을 짚는다.',
          task: '일터 상황 카드를 바구니에 나누고, 말할 방법과 기록할 것을 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORTQ('일터 상황 카드를 서로 조율할 일과 꼭 말하고 도움을 청할 일로 나누세요.', ['서로 조율할 일', '꼭 말할 일'], [
              ['바쁜 날 미리 양해를 구한 10분 늦은 퇴근', '근무 요일을 바꿔 달라는 부탁', '처음 배우는 일이라 실수를 지적받음'],
              ['손님이나 점장의 폭언', '일한 만큼 임금을 주지 않음', '쉬는 시간 없이 계속 일하라는 요구'],
            ], { k: 2, hard: [['동료와 휴식 순서를 정하는 일'], ['동의 없이 근무 시간을 자꾸 늘림']], d: 0.3 }),
            SORTQ('꼭 말할 일을 말하는 방법을 나누세요.', ['일터에 직접 정중히 말하기', '믿는 어른·상담 창구와 함께하기'], [
              ['"10분만 쉬고 와도 될까요?"라고 요청하기', '"이럴 땐 어떻게 하면 될까요?"라고 묻기'],
              ['보호자와 함께 근무 조건 다시 이야기하기', '일터 고민 상담 창구에 문의하기'],
            ], { k: 1, d: 0.35, more: { hints: ['혼자 바로 말할 수 있는 일인지, 함께할 사람이 필요한 일인지 보세요.'] } }),
            SORTQ('도움을 청할 때 기록해 둘 것과 하지 말아야 할 것을 나누세요.', ['기록해 둘 것', '하지 말아야 할 것'], [
              ['일한 날짜와 시간', '들은 말과 그때 상황', '받은 임금 내역'],
              ['손님 얼굴을 몰래 찍어 SNS에 올리기', '화가 나서 일터 욕을 퍼뜨리기'],
            ], { k: 1, d: 0.35, more: { conclude: '꼭 말할 일은 정중히 말하고, 믿는 어른·상담 창구와 함께하며, 날짜·시간·들은 말을 기록해 둬요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'꼭 말할 일\' 카드 하나를 골라 누구에게 어떻게 말할지 두 문장으로 쓰세요.' }] },
        notes: note('어떤 대우가 법 위반인지는 이 차시에서 판정하지 않고 \'꼭 말하고 도움을 청할 일\'로만 다룬다(사람 확인 목록: 고용노동부 청소년 근로권익 안내).'),
      }),

      M({
        id: 'wrap.map', type: 'wrap', title: '일터 고민 도움 경로 지도',
        method: '도움 경로 지도', tool: 'map', minutes: 7,
        levels: { easy: '학교·지역 칸 지도에서 학교 안 상담할 곳 한 곳에 핀을 꽂는다.', base: '핀을 꽂고, 마음까지 힘들어졌을 때 갈 곳을 고른다.', challenge: '활동지에 찾아가는 길과 [학교가 확인해 넣는 지역 상담 번호] 칸을 확인해 채운다.' },
        wrap: {
          teacher: '"일터 고민은 어디에 이야기할까요? 학교 안, 학교 밖 도움 경로를 지도에서 확인해요." 핀을 꽂은 뒤 우리 학교 진로·상담 담당 선생님과 학교가 확인한 번호를 칠판에 적는다. "일터 일은 학교와 상관없다"는 학생에게 "그 일 때문에 잠이 줄고 수업이 힘들다면 학교와 상관없을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '일터 고민 도움 경로(가상)', places: [{ name: '우리 학교 상담실', icon: 'school', at: [1, 1] }, { name: '일터 고민 상담 창구', icon: 'office', at: [4, 0] }, { name: '청소년 상담 기관', icon: 'library', at: [4, 3] }, { name: '아르바이트 가게', icon: 'market', at: [2, 3] }, { name: '우리 집', icon: 'house', at: [0, 3] }] }, prompt: '일터 고민을 학교 안에서 먼저 이야기할 곳에 핀을 꽂으세요.', target: { place: '우리 학교 상담실' }, difficulty: 0.15 },
            { type: 'choice', prompt: '일터 일 때문에 마음까지 크게 힘들어졌을 때 알맞은 행동은?', options: ['일이니 혼자 참는다', '믿는 어른에게 알리고 상담 선생님·학교 밖 상담을 이용한다', '일을 더 늘려 잊는다'], answer: 1, difficulty: 0.15, explain: '일터 스트레스가 마음까지 번지면 혼자 참지 말고 믿는 어른·상담과 이어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일터 고민 도움 경로',
          items: [
            { type: 'table', prompt: '일터 고민 도움 경로를 쓰세요.', columns: ['경로', '찾아가는 길·방법', '연락'], cells: [['학교 상담실·진로 선생님', '', ''], ['일터 고민 상담 창구', '', ''], ['학교 밖 마음 상담', '', NUM]] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '일터의 부당한 대우는 참지 말고 믿는 어른과 ___한다.', answer: '상의' },
          ],
        },
        notes: note(NUM_NOTE, '지도는 가상이다. 일터 고민 상담 창구의 실제 기관·연락처는 교사가 공식 안내로 확인해 알려 준다.'),
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '일터에서 나를 지키는 다짐',
        method: '나를 지키는 다짐', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 장면을 읽어 주고 함께 할 행동을 고른다.', base: '장면에서 나를 지키는 행동을 스스로 고르고 결과 장면을 본다.', challenge: '활동지에 친구에게 권할 말을 이어 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 다짐 하나로 정리해요. 일터에서 힘들 때 나는 무엇을 할까요?" 고른 뒤 결과 장면을 함께 읽는다. "그래도 돈 벌려면 참아야죠"라는 학생에게 "돈을 버는 것과 나를 지키는 것 중 하나만 골라야 할까요?"라고 되묻는다. 일터에서도 나는 존중받을 권리가 있다는 말로 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '첫 아르바이트 2주째, 점장이 또 쉬는 시간 없이 일하라고 한다. 몸이 무겁고 잠이 줄었다.', feeling: '걱정', who: '나', choices: [{ id: 'endure', text: '다들 참으니 나도 참는다', result: '다음 주에도 같은 일이 반복되고 마음이 지친다.', mood: '속상함' }, { id: 'protect', text: '정중히 쉬는 시간을 요청하고, 보호자·선생님과 상의한다', result: '혼자가 아니라는 생각에 마음이 놓인다.', mood: '편안함' }, { id: 'vanish', text: '말없이 다음 날부터 안 나간다', result: '받지 못한 것이 있는지도 확인하지 못한다.', mood: '걱정' }] }, prompt: '일터에서 나를 지키는 행동을 고르고 결과를 보세요.', target: { choice: 'protect' }, difficulty: 0.15 },
            { type: 'choice', prompt: '"일터의 부당한 대우는 참는 것이 사회생활이다"라는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 처음에는 다 참는다', '부당한 대우는 참을 일이 아니라 말하고 도움을 청할 일이다', '참기 싫으면 바로 그만두는 것이 답이다'], answer: 1, difficulty: 0.15, explain: '일하는 사람도 존중받을 권리가 있어요. 정중히 말하고, 믿는 어른·상담 창구와 함께해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나를 지키는 다짐',
          items: [
            { type: 'short', prompt: '일터에서 힘들 때 나를 지키는 다짐 한 문장을 쓰세요(혼자 보기).' },
            { type: 'short', prompt: '아르바이트를 시작하는 친구에게 권할 말 한 문장을 쓰세요.' },
          ],
        },
        notes: note(),
      }),
    );
  }

  // ======================================================================================================
  // 9. 생명존중 학교 공동체 제안 (12학년)
  // ======================================================================================================
  {
    const M = MOD('community-proposal', [12]);
    const CULTURE = [['힘들 때 도움을 청하기 쉽다', 4], ['서로 안부를 묻는다', 6], ['상담실 위치·이용법을 안다', 3]];
    const CULTURE_T = '우리 학교 생명존중 문화 진단(가상 학급 설문, 상대 크기)';
    // 학년 초 마음 검진 — 공청회 갈림길
    const CHECKUP = { text: '학생회 공청회 논제: "모든 학생이 학기 초에 마음 검진을 받게 하자." 3학년 대표 지민이가 의견을 정리해 발표해야 한다.', who: '지민', motif: 'star', choices: [
      { id: 'yes', text: '"모두 받게 하면 도움이 필요한 학생을 일찍 찾는다"며 찬성만 강조한다', result: '청중에서 "결과가 새면 어떡하나요?" "검진만 하고 끝나면요?"라는 질문이 나온다.', impact: [{ who: '공청회', text: '빈틈이 드러난다', tone: 0 }],
        next: { text: '질문: "검진 결과가 나쁘게 나오면 그다음은 누가 책임지나요?"', choices: [
          { id: 'system', text: '"검진 뒤 상담으로 잇는 절차가 갖춰져야 한다"고 조건을 더한다', result: '청중이 끄덕이며 조건을 받아 적는다.', impact: [{ who: '공청회', text: '조건부 결론에 가까워진다', tone: 1 }], ending: '검진은 그 뒤의 연결이 있을 때 의미가 있다.' },
          { id: 'ignore', text: '"그건 나중 문제"라며 넘긴다', result: '청중의 신뢰가 떨어진다.', impact: [{ who: '공청회', text: '논의가 멈춘다', tone: -1 }], ending: '연결 없는 검진은 걱정만 키울 수 있다.' }] } },
      { id: 'cond', text: '"비밀 보장과 동의, 검진 뒤 상담 연결이 갖춰진다면 찬성"이라고 조건을 밝힌다', result: '반대 쪽이 "조건이 갖춰지지 않은 학교는요?"라고 묻는다.', impact: [{ who: '공청회', text: '논점이 분명해진다', tone: 1 }],
        next: { text: '질문: "상담 인력이 부족한 학교라면 어떻게 하나요?"', choices: [
          { id: 'stage', text: '"먼저 상담 연결 체계를 갖추고, 그다음 검진을 넓히자"고 단계를 제안한다', result: '찬반 양쪽이 단계별 실행에 동의한다.', impact: [{ who: '공청회', text: '실행할 수 있는 안이 생긴다', tone: 1 }],
            next: { text: '사회자가 결론 한 문장을 요청한다.', choices: [
              { id: 'final', text: '"연결 체계·비밀 보장·동의를 갖춘 학교부터 학기 초 마음 검진을 한다"', result: '공청회 결론이 학생회 제안서에 실린다.', impact: [{ who: '학교 공동체', text: '실행할 수 있는 제안을 얻는다', tone: 1 }], ending: '조건과 단계를 밝힌 결론이 공동체를 움직인다.' },
              { id: 'half', text: '"좋은 생각이니 다들 노력하자"고 마무리한다', result: '무엇을 할지가 빠져 제안서에 실리지 못한다.', impact: [{ who: '학교 공동체', text: '실행이 멈춘다', tone: 0 }], ending: '\'노력하자\'는 결론이 아니라 바람이다.' }] } },
          { id: 'skip', text: '"그런 학교는 그냥 검진만 하면 된다"고 답한다', result: '반대 쪽이 연결 없는 검진의 위험을 다시 짚는다.', impact: [{ who: '공청회', text: '조건이 무너진다', tone: -1 }], ending: '조건을 빼면 찬성 근거도 약해진다.' }] } },
      { id: 'no', text: '"검진은 낙인만 만든다"며 반대만 강조한다', result: '청중에서 "그럼 힘든 학생은 어떻게 찾나요?"라는 질문이 나온다.', impact: [{ who: '공청회', text: '다른 쪽 근거를 놓친다', tone: 0 }], ending: '한쪽만 보면 다른 쪽의 중요한 근거를 놓친다.' }] };
    const CHECKUP_R = [{ id: 'link', text: '검진은 그 뒤 상담 연결이 있을 때 의미가 있다' }, { id: 'privacy', text: '비밀 보장과 동의가 낙인 걱정을 줄인다' }, { id: 'stage', text: '조건을 갖춘 곳부터 단계적으로 하면 실행할 수 있다' }, { id: 'all', text: '검진만 하면 문제가 해결된다', why: '검진은 시작일 뿐이에요. 결과를 상담과 잇는 체계가 있어야 해요.' }];
    const LAW_CARDS = [['edu', '생명존중교육 연 6시간 이상 하기'], ['edu', '학년에 맞는 마음건강 수업 꾸리기'], ['link', '걱정되는 학생을 상담과 잇는 절차 두기'], ['link', '상담실 위치·이용법 알리기'], ['culture', '서로 안부를 묻는 학급 활동'], ['culture', '도움 요청을 평범하게 여기는 분위기']];

    MODS.push(
      M({
        id: 'intro.law', type: 'intro', title: '생명존중교육의 근거',
        method: '생명존중교육의 근거', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 두 개(교육·상담 연결)에 학교가 할 일 카드를 함께 단다.', base: '가지 세 개(교육·상담 연결·문화 만들기)에 카드를 단다.', challenge: '학생이 할 수 있는 일 하나를 떠올려 말한다.' },
        intro: {
          teacher: '"여러분이 받아 온 생명존중교육에는 법적 근거가 있어요. 「자살예방 및 생명존중문화 조성을 위한 법률」 제17조에 따라 학교는 생명존중교육을 해야 하고, 시행령에 따라 연 6시간 이상이에요." 시연 단추로 학교가 할 일 카드가 가지에 달리는 모습을 보여 준다. "법으로 정했으니 학교만 하면 되는 일이죠"라는 말이 나오면 "안부를 묻는 분위기는 누가 만들까요?"라고 되묻는다. 생명존중은 개인의 마음가짐만이 아니라 교육·연결·문화가 함께 만드는 공동체의 일이라는 점을 짚고, 오늘은 우리 학교에 맞는 실천을 제안한다고 밝힌다.',
          student: '자살예방법 제17조(학교의 생명존중교육, 연 6시간 이상)를 가운데 두고, 교육·상담 연결·문화 만들기 가지에 학교가 할 일 카드를 달아 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '자살예방법 제17조', slots: ['교육', '상담 연결', '문화 만들기'], cards: LAW_CARDS.map((x) => x[1]) }, sequence: [{ sort: { 교육: LAW_CARDS.filter((x) => x[0] === 'edu').map((x) => x[1]), '상담 연결': LAW_CARDS.filter((x) => x[0] === 'link').map((x) => x[1]), '문화 만들기': LAW_CARDS.filter((x) => x[0] === 'culture').map((x) => x[1]) } }] },
          art: { draw: 'a paper law book opened in the center with three paper branches growing out to a classroom, a counseling door and a group of paper students holding hands, small paper leaves on each branch', banner: '법이 정한 교육, 함께 만드는 문화', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
        notes: note('법 근거는 research-mandatory §1(자살예방법 제17조, 시행령 제10조의2 — 연 6시간 이상)에 있는 것만 말한다. 조문의 다른 세부(누가·어떻게)는 교사가 국가법령정보센터 원문으로 확인해 덧붙인다(사람 확인 목록). \'상담 연결·문화 만들기\' 카드는 법 조문이 아니라 학교가 할 수 있는 일의 예시다.'),
      }),
      M({
        id: 'intro.survey', type: 'intro', title: '우리 학교 문화 진단 자료',
        method: '우리 학교 문화 진단 자료', tool: 'chart', minutes: 7,
        levels: { easy: '막대 값을 보며 가장 낮은 항목을 함께 읽는다.', base: '세 항목을 견주어 우리 학교 문화를 해석한다.', challenge: '가장 개선이 필요한 항목을 골라 까닭을 말한다.' },
        intro: {
          teacher: '"가상 학급 설문이에요. 우리 학교 생명존중 문화를 세 가지로 진단했어요. 가장 낮은 막대는 무엇인가요?" 시연 단추로 가장 낮은 막대를 고르는 모습을 보여 준다. "안부는 잘 묻는데 상담실은 모른다면, 무엇부터 바꿔야 할까요?"라고 묻는다. "다들 잘 지내는데 굳이 바꿔야 하나요?"라는 말이 나오면 "힘든 날이 온다면 어디로 가야 할지 알고 있나요?"라고 되묻는다. 자료가 가상이므로 실제 제안서에는 우리 학교 조사가 필요하다는 점을 짚는다.',
          student: '가상 학급 설문 막대그래프에서 우리 학교 생명존중 문화의 세 항목을 견주고, 가장 개선이 필요한 항목을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: CULTURE_T, yLabel: '그렇다 응답', xLabel: '항목', data: CULTURE, question: '가장 낮은 막대는?', choices: CULTURE.map((x) => x[0]), showValues: true }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper bar chart with three bars on a school bulletin board, a paper student council member pointing at the shortest bar, a small paper map of the school with a counseling room marked', banner: '무엇부터 바꿀까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: note('자료는 수업용 가상 값이다(화면 제목에 밝힘). 실제 학교 조사는 상담실·학생회와 협의해 익명으로 한다.'),
      }),

      M({
        id: 'activity.proposal', type: 'activity', title: '생명존중 학교 제안서 쓰기',
        method: '학교 제안서', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '칸마다 문장 틀을 보고 문제·근거와 실천 방안 두 항목을 쓴다.', base: '문제·근거, 실천 방안, 평가 방법 세 칸(네 항목)을 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 예상 반론과 그에 대한 답을 넣는다.' },
        activity: {
          title: '학교에 내는 제안서', tool: 'rubric-writing',
          teacher: '"오늘 진단 자료와 법 근거를 이어서, 우리 학교 생명존중 문화를 위한 제안서를 써요. 문제·근거·실천 방안·평가 방법 네 항목이에요." 기준표를 함께 읽고 쓰게 한다. 제안서에 위기의 자세한 사례를 넣으려는 학생에게 "그 문장이 없어도 근거가 될까요? 누가 읽고 힘들어질 수는 없을까요?"라고 묻는다. "다들 서로 아끼자"처럼 실행 주체가 없는 문장에는 "누가, 언제, 무엇을 할까요?"라고 되묻는다. 생명존중은 개인의 마음가짐만이 아니라 학교 구조로 만들 수 있다는 점을 짚는다.',
          task: '우리 학교 생명존중 문화를 위한 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 문제와 근거를 2~3문장으로 쓰세요.', '진단 자료(가상)와 생명존중교육의 법 근거를 이어, 우리 학교의 문제와 근거를 쓰세요.', ['문제를 한 가지로 분명히 썼다', '자료(가상임을 밝힘)나 법 근거를 썼다', '위기의 자세한 사례를 넣지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['근거', '자료', '설문', '법']], starter: '우리 학교는 ~가 부족하다. 가상 설문에서 ~', plus: '문제가 학생 개인이 아니라 학교 구조에 있음을 썼다', d: 0.35 }),
            RWQ('실천 방안을 2~3문장으로 쓰세요.', '문제를 줄일 실천 방안(누가·언제·무엇을)을 쓰세요.', ['방안이 문제와 짝이 맞는다', '누가·언제·무엇을 썼다', '도움받을 곳을 함께 알리는 방안이다'], { min: 40, max: 300, sent: [2, 3], starter: '학생회는 ~마다 ~를 한다. 상담실은 ~', plus: '방안을 두 가지 이상 썼다', d: 0.4 }),
            RWQ('평가 방법과 예상 반론에 대한 답을 2~3문장으로 쓰세요.', '방안이 효과가 있는지 어떻게 확인할지, 예상되는 반론에는 어떻게 답할지 쓰세요.', ['확인할 방법(익명 설문 등)과 때를 썼다', '예상되는 반론을 썼다', '반론에 대한 답을 썼다'], { min: 40, max: 300, sent: [2, 3], starter: '한 학기 뒤 ~로 확인한다. "~"라는 반론이 있을 수 있지만 ~', plus: '후배에게 이어 갈 방법을 썼다', sample: '한 학기 뒤 \'상담실 위치·이용법을 안다\'는 응답을 익명 설문으로 다시 확인한다. "수업 시간이 줄어든다"는 반론이 있을 수 있지만, 조회 시간 5분과 게시판을 활용한다. 결과는 학생회가 정리해 후배 학생회에 넘긴다.', d: 0.4, more: { conclude: '좋은 제안서는 근거·실행 주체·평가가 이어지고, 위기 사례 대신 연결과 희망을 담아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서 뼈대를 채우세요.', columns: ['칸', '내용'], cells: [['문제', ''], ['근거', ''], ['실천 방안', ''], ['평가 방법', '']] }] },
        notes: note('제안서는 학생회·상담실과 실제로 나눌 수 있다. 근거 수치는 가상이라고 밝히게 한다.'),
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '학년 초 마음 검진 공청회',
        method: '찬반 토론: 학년 초 마음 검진', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(주장 고르기)까지 가서 근거를 고른다.', base: '갈림길 둘까지 따라가 질문에 답하고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가 조건과 단계를 담은 조건부 결론에 닿는다.' },
        activity: {
          title: '마음 검진 공청회', tool: 'dilemma',
          teacher: '"\'모든 학생이 학기 초에 마음 검진을 받게 하자.\' 일찍 찾을 수 있다는 근거와, 낙인·연결 부족을 걱정하는 근거가 부딪혀요." 지민이의 발표를 고를 때마다 청중 질문을 소리 내어 읽게 한다. 찬성만 강조하는 학생에게 "검진 결과가 나온 다음 날, 그 학생은 누구를 만나나요?"라고 묻는다. 반대만 강조하는 학생에게는 "그럼 힘든 학생을 어떻게 찾을까요?"라고 묻는다. 조건(비밀 보장·동의·상담 연결)과 단계(체계 먼저)를 담은 결론을 학급이 함께 만든다.',
          task: '학년 초 마음 검진 공청회의 갈림길을 따라 질문에 답하며 조건부 결론을 찾아요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지민이의 공청회 발표를 따라가고, 조건과 단계를 담은 결론에 닿는 길과 근거를 고르세요.', CHECKUP, [['cond', 'stage', 'final']], CHECKUP_R, ['link', 'privacy'], { d: 0.4 }),
            EXPLOREQ('\'찬성만 강조\' 길과 \'반대만 강조\' 길도 끝까지 가 보고 공청회에 생긴 결과를 견주세요.', CHECKUP, CHECKUP_R, ['다른 길의 끝 장면을 확인했다', '각 길이 놓친 근거를 견주었다'], { d: 0.35 }),
            DILQ('공청회 뒤 SNS에 "검진하면 다 이상한 애 취급받는다"는 글이 퍼졌어요. 학생회가 할 일을 고르세요.', { text: '공청회 다음 날, 학교 익명 SNS에 "검진하면 다 이상한 애 취급받는다"는 글이 퍼진다. 학생회 단톡방이 술렁인다.', who: '학생회', motif: 'cloud', choices: [
              { id: 'facts', text: '상담 선생님과 함께 비밀 보장 원칙과 검진 뒤 절차를 알기 쉽게 안내한다', result: '안내문이 붙고 질문 창구가 열린다.', impact: [{ who: '학생들', text: '걱정을 사실로 확인한다', tone: 1 }],
                next: { text: '안내문 아래에 "그래도 무섭다"는 댓글이 달린다.', choices: [
                  { id: 'hear', text: '"걱정할 수 있어요. 궁금한 점은 상담실에 언제든 물어보세요"라고 답한다', result: '몇몇 학생이 상담실에 질문하러 온다.', impact: [{ who: '학생들', text: '걱정을 꺼낼 곳이 생긴다', tone: 1 }], ending: '낙인 섞인 소문에는 사실과 질문할 곳으로 답한다.' },
                  { id: 'delete', text: '댓글을 모두 지우고 답하지 않는다', result: '걱정은 다른 곳에서 더 커진다.', impact: [{ who: '학생들', text: '물을 곳을 잃는다', tone: -1 }], ending: '걱정을 지우면 사라지는 것이 아니라 숨는다.' }] } },
              { id: 'fight', text: '글쓴이를 찾아 단톡방에서 공개적으로 반박한다', result: '말싸움이 번지고 낙인 표현이 더 많이 오간다.', impact: [{ who: '학생들', text: '불안이 커진다', tone: -1 }], ending: '맞불은 낙인 표현을 더 퍼뜨린다.' },
              { id: 'drop', text: '시끄러우니 제안을 없던 일로 한다', result: '도움이 필요한 학생을 찾을 방법도 함께 사라진다.', impact: [{ who: '학교 공동체', text: '연결의 기회를 잃는다', tone: -1 }], ending: '소문 때문에 연결을 포기하면 낙인이 이긴다.' }] },
            [['facts', 'hear']], [{ id: 'fact', text: '낙인 섞인 소문에는 사실과 절차로 답한다' }, { id: 'ask', text: '걱정을 꺼낼 질문 창구를 열어 둔다' }, { id: 'win', text: '소문을 낸 사람을 찾아 이기면 해결된다', why: '맞불은 낙인 표현을 더 퍼뜨려요. 사실과 질문 창구가 걱정을 줄여요.' }], ['fact', 'ask'], { d: 0.35, more: { conclude: '마음 검진은 비밀 보장·동의·상담 연결이 갖춰질 때 의미가 있고, 낙인 섞인 소문에는 사실과 질문 창구로 답해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"학기 초 마음 검진은 ___가 갖춰진 경우에 한다"는 조건부 결론을 근거 두 개와 함께 쓰세요.' }] },
        notes: note('학교 마음건강 검사의 실제 운영(대상·동의·결과 관리)은 교육부 학생정신건강 지침을 따른다(사람 확인 목록). 학생에게 자신의 검사 경험이나 결과를 묻지 않는다.'),
      }),
      M({
        id: 'activity.timeline', type: 'activity', title: '생명존중 1년 실천 로드맵',
        method: '1년 실천 로드맵', tool: 'timeline', minutes: 17,
        levels: { easy: '실천 카드 3장을 시기(학기 초·시험 기간·방학 전)에 나눈다(바로 피드백).', base: '실천 카드 6장을 시기에 나누고, 1년 흐름을 차례로 놓고, 담당을 짝짓는다.', challenge: '카드를 섞어 놓고, 활동지에 실천마다 담당자를 붙인다.' },
        activity: {
          title: '시기에 맞춘 실천', tool: 'timeline',
          teacher: '"생명존중은 한 번의 행사가 아니라 1년의 흐름이에요. 학기 초·시험 기간·방학 전, 시기마다 필요한 실천이 달라요." 카드를 놓을 때마다 "이때 학생들에게 무엇이 가장 필요할까요?"라고 묻는다. "방학이면 학교가 할 일은 없다"는 학생에게 "방학 동안 힘든 학생은 어디에 연락할까요? 그 정보는 언제 알려야 할까요?"라고 되묻는다. 실천마다 담당(학생회·상담실·담임)을 정해야 이어진다는 점을 짚는다.',
          task: '생명존중 실천 카드를 1년 띠의 시기에 나누고, 흐름과 담당을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('생명존중 실천 카드를 시기에 나누세요.', ['학기 초', '시험 기간', '방학 전'], [
              ['새 학급 친해지기 활동', '상담실 위치·이용법 안내'],
              ['잠·쉼 지키기 캠페인', '시험 스트레스 상담 시간 늘리기'],
              ['방학 중 연락할 곳 안내', '방학 전 안부 카드 쓰기'],
            ], { k: 1, d: 0.25, opt: { axis: ['3월', '12월'] } }),
            ORDERQ('1년 실천 흐름을 차례로 놓으세요.', ['상담실 위치·이용법 안내', '시험 스트레스 상담 시간 늘리기', '방학 중 연락할 곳 안내', '1년 실천 돌아보기 설문'], { k: 3, d: 0.3, opt: { axis: ['3월', '12월'] } }),
            MATCHQ('실천마다 담당을 짝지으세요.', [['상담실 위치·이용법 안내', '상담실과 학생회'], ['새 학급 친해지기 활동', '담임 선생님과 학급'], ['방학 중 연락할 곳 안내', '학교(가정 통신)']], { k: 2, extra: ['아무도 정하지 않음'], d: 0.35, opt: { axis: ['3월', '12월'] }, more: { conclude: '생명존중 실천은 시기에 맞추고 담당을 정해야 1년 내내 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '1년 실천 로드맵에 담당자를 붙이세요.', columns: ['시기', '실천', '담당'], cells: [['학기 초', '', ''], ['시험 기간', '', ''], ['방학 전', '', '']] }] },
        notes: note(),
      }),
      M({
        id: 'activity.campaign', type: 'activity', title: '후배에게 "도움은 가까이"',
        method: '후배에게 보내는 캠페인', tool: 'collage', minutes: 18,
        levels: { easy: '문구 자리를 정하고 모양 몇 가지만 있는 고르개로 꾸민다.', base: '문구와 그림 조각으로 \'도움은 가까이\' 포스터 두 장(가까운 사람·가까운 곳)을 꾸미고 점검한다.', challenge: '가까운 곳 포스터에 학교 자원 정보 자리를 넣는 점검 항목이 하나 더 붙는다.' },
        activity: {
          title: '"도움은 가까이" 포스터', tool: 'collage',
          teacher: '"졸업을 앞둔 여러분이 후배에게 남기는 캠페인이에요. 주제는 \'도움은 가까이\'. 한 장은 가까운 사람, 한 장은 가까운 곳이에요." 문구를 먼저 정하고 조각으로 꾸미게 한다. "선배니까 겁을 좀 줘야 말을 듣죠"라는 학생에게 "겁을 먹은 후배가 도움을 청하기 쉬울까요, 희망을 본 후배가 쉬울까요?"라고 되묻는다. 위기 장면 없이 연결과 희망, 도움받을 곳을 담는다는 원칙을 먼저 정한다.',
          task: '후배를 위한 "도움은 가까이" 포스터 두 장을 조각으로 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '포스터 1(가까운 사람): 친구·선생님·가족이 곁에 있는 모습을 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'heart', 'star'] }, target: { selfCheck: ['곁에 있는 사람이 둘 이상 보인다', '위기 장면을 넣지 않았다', '후배에게 건넬 문구 자리를 남겼다'], minPieces: 3 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'heart'] } } } },
            { prompt: '포스터 2(가까운 곳): 학교 상담실로 가는 길을 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'leaf'] }, target: { selfCheck: ['상담실로 가는 길이 보인다', '희망을 주는 문구 자리를 남겼다', '위기 장면을 넣지 않았다'], minPieces: 3 }, difficulty: 0.3,
              levels: { challenge: { prompt: '포스터 2(가까운 곳)에 학교 자원 정보 자리까지 넣어 꾸미고 점검하세요(정보 자리 하나 더).', target: { selfCheck: ['상담실로 가는 길이 보인다', '희망을 주는 문구 자리를 남겼다', '위기 장면을 넣지 않았다', '상담실 위치·운영 시간 자리를 넣었다'], minPieces: 3 } } } },
            { prompt: '두 포스터를 짝과 바꿔 보고, 후배의 눈으로 점검표에 표시하세요.', toolOptions: { shapes: ['circle', 'square'], maxPieces: 4 }, target: { selfCheck: ['후배가 읽기 쉬운 말이다', '겁주는 말이 없다', '고칠 점 하나를 짝에게 말했다'], minPieces: 1 }, difficulty: 0.2, conclude: '후배에게 남기는 캠페인은 겁 대신 희망을, 위기 대신 가까운 사람과 곳을 보여 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 쓰세요.', columns: ['포스터', '큰 문구', '작은 문구'], cells: [['1 가까운 사람', '', ''], ['2 가까운 곳', '', '']] }] },
        notes: note('포스터를 학교에 게시할 때는 교사와 상담 선생님이 문구를 검토하고, 도움받을 곳은 학교가 확인한 곳만 적는다.'),
      }),

      M({
        id: 'wrap.pitch', type: 'wrap', title: '생명존중 제안 2분 발표',
        method: '제안 발표', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 1분 안에 제안의 핵심(문제·방안)만 발표한다(타이머 문항은 2분 발표로 같다).', base: '발표 2분·질의 1분으로 타이머를 맞추고 동료 점검표로 평가한다.', challenge: '질의 시간에 받은 질문 하나에 근거로 답한다.' },
        wrap: {
          teacher: '"모둠마다 2분 안에 생명존중 제안을 발표하고, 1분 동안 질의응답을 해요." 발표 시간을 타이머로 맞춘 뒤 듣는 모둠은 점검표로 표시한다. "우리 제안이 제일 좋다"는 모둠에게 "다른 모둠 제안과 합치면 더 좋아질 부분은 없을까요?"라고 묻는다. 좋은 제안은 학생회·상담실에 실제로 전달할 수 있다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '제안 발표', timeUnit: 'min', labels: ['발표', '질의'], plan: { work: 1, rest: 2, rounds: 1 } }, prompt: '발표 2분·질의 1분을 한 번 하도록 타이머를 맞추세요.', target: { plan: { work: 2, rest: 1, rounds: 1 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '동료 점검표' }, prompt: '다른 모둠의 제안 발표를 듣고 점검표로 표시하세요.', target: { selfCheck: ['문제와 근거가 분명했다', '실행 주체(누가·언제)가 있었다', '평가 방법이 있었다', '위기 사례 대신 연결과 희망을 담았다'] }, difficulty: 0.1 },
            MOOD,
          ],
        },
        worksheet: {
          title: '제안 발표 점검',
          items: [
            { type: 'table', prompt: '들은 제안 하나를 점검하세요.', columns: ['모둠', '좋았던 점', '더할 점'], cells: [['', '', '']] },
            { type: 'short', prompt: '질의응답에서 받은 질문과 우리 모둠의 답을 쓰세요.' },
          ],
        },
        notes: note(),
      }),
      M({
        id: 'wrap.pledge', type: 'wrap', title: '나의 생명존중 다짐',
        method: '나의 생명존중 다짐', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 다짐 보기를 읽어 주고 함께 하나를 고른다.', base: '다짐 문장을 스스로 고르고 그 결과로 바뀔 학교 장면을 본다.', challenge: '활동지에 친구에게 권할 다짐 문장을 이어 쓴다.' },
        wrap: {
          teacher: '"고등학교 생명존중교육의 마지막 시간이에요. 나의 다짐 하나를 골라 볼까요?" 고른 뒤 결과 장면을 함께 읽는다. "생명존중은 결국 각자 마음먹기"를 고르려는 학생에게 "내 다짐이 친구의 하루, 학교의 분위기를 바꿀 수 있다면요?"라고 되묻는다. 졸업 뒤에도 힘들 때 도움을 청하는 것은 용기라는 말과 함께, 오늘 수업이 마음에 걸리는 사람은 상담 선생님을 찾아도 된다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '졸업을 앞두고 마지막 생명존중 수업이 끝났다. 나의 다짐 하나를 고른다.', feeling: '뿌듯함', who: '나', choices: [{ id: 'mind', text: '"생명존중은 각자 마음먹기에 달렸다"', result: '수업이 끝나자 다짐도 함께 흐려진다.', mood: '걱정' }, { id: 'connect', text: '"힘들어 보이는 사람에게 먼저 묻고, 어른·전문가와 잇겠다"', result: '내 한마디가 누군가에게 도움으로 가는 다리가 된다.', mood: '뿌듯함' }, { id: 'alone', text: '"내 일만 잘하면 된다"', result: '곁의 사람이 힘든 줄 모르고 지나친다.', mood: '속상함' }] }, prompt: '나의 생명존중 다짐을 고르고 그 결과로 바뀔 장면을 보세요.', target: { choice: 'connect' }, difficulty: 0.15 },
            { type: 'choice', prompt: '"생명존중은 개인의 마음가짐 문제일 뿐이다"라는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 학교가 할 일은 없다', '개인의 마음가짐과 함께 교육·상담 연결·서로 묻는 문화를 공동체가 만든다', '법으로 정했으니 학생은 할 일이 없다'], answer: 1, difficulty: 0.2, explain: '생명존중은 교육·연결·문화를 공동체가 함께 만들 때 튼튼해져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 생명존중 다짐',
          items: [
            { type: 'short', prompt: '나의 생명존중 다짐 한 문장을 쓰세요(혼자 보기).' },
            { type: 'short', prompt: '친구나 후배에게 권하고 싶은 다짐 한 문장을 쓰세요.' },
          ],
        },
        notes: note(),
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
