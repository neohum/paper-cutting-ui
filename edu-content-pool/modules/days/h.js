/* 창체 계기교육 기념일 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 days 고.
 * 근거: sources/changche/research-days.md(§1 총괄표·§3 고 제안·§4 정치적 중립) + 기존 g7~g12-cc-days 차시 사실. 날짜는 「국경일에 관한 법률」·「각종 기념일 등에 관한 규정」 기준.
 * 고 기준: 사료(공식 기관이 공개한 짧은 문장만)·조문 읽기, 근거를 따지는 토론, 기획안·논설·입장문, 결과를 끝까지 따라가는 갈림길.
 * 이 영역의 원칙(framework/BRIEF_EVENTS.md):
 *   · 사실은 공식 근거만 — 날짜·인물·경위·수치는 근거 파일과 공식 기관 자료 범위. 확인 못 한 사실은 쓰지 않고 아래 '사람 확인:'에 둔다.
 *   · 평가는 교육과정 서술 범위 — 해석이 갈리는 곳은 '여러 관점이 있다'로 쓰고 근거를 따지는 활동으로만, 정답을 정하지 않는다(열린 문항은 selfCheck·'any').
 *   · 정치적 중립 — 정당·현직 정치인·현 정부 정책을 언급하거나 평가하지 않고, 사건을 오늘의 정치 논쟁과 잇지 않는다. 선거 문항은 가상 학생회·가상 게시물로만.
 *   · 혐오·적대 표현 금지 — 다른 나라·민족 전체를 탓하는 말을 쓰지 않는다(광복절 주제는 '역사의 책임'과 '사람 전체 미워하기'를 가르는 활동).
 *   · 희생·폭력은 구체 묘사 없이 추모·의미 중심. 학생의 가족사·개인 견해를 묻거나 채점하지 않는다(성찰 눈금은 모두 level 'any', 익명).
 *   · 실존 인물은 공식 자료의 사실만, 지어낸 대사를 붙이지 않는다. 장면 속 학생은 가상 인물(가명 한두 글자)이다.
 * 수치 자료 가운데 설문·점수·배출량 그래프는 모두 '가상'이다(화면 제목에 밝힘). 연도 차(햇수)는 공식 연도에서 셈한 값이다.
 * 주제 12개, 체계도 계획 모듈 140개 전부.
 *
 * 교구 한계로 계획을 바꾼 곳:
 *   chart 는 수 자료만 그린다 — '조문·제도 견주는 표'는 공식 연도에서 셈한 햇수 막대(또는 '가상' 설문 막대)와 표(showTable)를 보이고, 견주는 물음은 고르기 보기로 한다.
 *   chart·rubric-writing·timer 는 단계마다 항목 수를 줄일 수 없다 — '항목 2개/3개'는 값 표시(showValues)·문장 틀(starter)·숫자를 밝힌 문항 글로, '도전'은 기준 하나 더·점검 하나 더로 바꾸었다.
 *   timer 회의·토의 진행(교사 진행 guided)은 '순서 카드 → 시간 맞추기 → 마친 뒤 점검' 문항으로 판정하고, 말한 내용은 채점하지 않는다(활동지에 남김).
 *   정리(출구) 질문은 단계별 판이 없다 — 모듈 levels 의 차이는 교사 진행 방식(문장 틀을 칠판에 보이기·까닭을 말로 덧붙이기)이다.
 *   emotion '눈금+까닭'의 까닭은 채점하지 않는 짧은 글(short)로 받는다.
 *   collage 는 글자를 넣지 못한다 — 게시물·홍보물의 제목·한 줄 설명·출처는 활동지 표에 쓰고, 교구는 짜임(제목 띠·그림·설명 칸)과 스스로 점검을 맡는다.
 *   map 은 실제 지도가 아니라 칸 지도다 — 장소 칸 자리는 대강의 방향(서울 위쪽·부산 오른쪽 아래 등)만 나타낸다.
 *
 * 사람 확인: (근거 파일에 없는 사실·문구 — 모듈 id 와 확인할 공식 안내처)
 *   march1.intro.preamble·activity.line·activity.clause·wrap.link: 현행 헌법 전문 첫 문장('3·1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4·19민주이념을 계승') 원문,
 *     대한민국 임시 헌장(1919.4.11.) 제1조 '대한민국은 민주공화제로 함', 제헌 헌법(1948.7.17. 공포) 제1조 '대한민국은 민주공화국이다', 현행 헌법 1987.10.29. 공포 — 국가법령정보센터(헌법)·국사편찬위원회 우리역사넷·대한민국임시정부기념관
 *   march1.intro.place: 탑골공원(독립 선언서 낭독)·서대문형무소역사관·독립기념관(1987년 개관)의 위치와 성격 — 국가보훈부 현충시설 정보·독립기념관·서대문형무소역사관 누리집
 *   march1.intro.fact·activity.essay: 사료로 쓴 짧은 문장('조선이 독립국임과 조선인이 자주민임을 선언하노라' — 기미 독립 선언서 첫 문장 현대어 요지) — 국사편찬위원회·독립기념관 자료
 *   april19 전체: 1960년 2·28 대구 학생 시위 → 3·15 부정 선거 → 4월 19일 대규모 시위 → 교수단 시국 선언 → 대통령 하야 발표 → 6월 헌법 개정 차례, 부정 선거 방식(미리 넣어 둔 표·조를 짠 공개 투표·대리 투표)의 교과서 서술 — 국가보훈부(4·19혁명)·국사편찬위원회 우리역사넷·국가기록원
 *   april19.intro.forms·activity.compare: 국립4·19민주묘지(서울)·기념식·기록물 보존 — 국가보훈부 국립4·19민주묘지 누리집
 *   april19.activity.analyze·intro.principle: 선거의 4원칙(헌법 제41조·제67조)과 기표소 가림막·본인 확인·투표함 봉인·참관인 같은 오늘의 장치 — 국가법령정보센터(헌법·공직선거법)·중앙선거관리위원회
 *   april19.activity.fake·wrap.rule: 선거 정보는 중앙선거관리위원회 공식 안내로 확인한다는 대응 — 중앙선거관리위원회
 *   science.intro.consent·activity.match·activity.choose·wrap.apply: 연구 동의서에 있어야 할 항목(목적·기간·위험·철회 권리·개인정보 보호), 언제든 불이익 없이 그만둘 권리,
 *     미성년자 보호자 동의, 사람 대상 연구 = 생명윤리 심의·개인정보 보호·동물실험 심의라는 구분 — 국가법령정보센터(생명윤리 및 안전에 관한 법률·개인정보 보호법·동물보호법)·국가생명윤리정책원
 *   science.intro.heritage·wrap.review: 측우기(비의 양)·앙부일구(해 그림자로 시각)·자격루(물로 시각)의 쓰임 — 국립중앙과학관·국가유산청
 *   earth.activity.line·intro.treaty: 기후 변화 협약 1992·교토 의정서 1997(선진국 감축 의무)·파리 협정 2015(모든 당사국 목표, 2℃보다 훨씬 낮게·1.5℃ 노력), 첫 지구의 날(1970) — 환경부·외교부 기후변화 자료
 *   earth.intro.ad·activity.green·wrap.check: '공인된 환경 인증 표시'·그린워싱 확인 질문(무엇이·얼마나·누가 확인했나) — 환경부·한국환경산업기술원 환경표지 안내·공정거래위원회 환경 관련 표시·광고 심사지침
 *   earth.activity.policy: 감축·적응 정책의 예(재생에너지·단열 / 폭염 쉼터·방파제·홍수 예보) 구분 — 환경부·기상청 기후위기 적응 자료
 *   may18 전체: 1988 국회 청문회·1995 특별법·1997 국가 기념일·2011 기록물 세계기록유산, 국립5·18민주묘지·5·18민주광장(옛 전남도청 앞)·5·18민주화운동기록관(세계기록유산 보존)의 역할 — 국가보훈부·5·18기념재단·5·18민주화운동기록관
 *   june.intro.flag·activity.scene·wrap.one: 현충일 오전 10시 사이렌 1분 묵념, 조기 게양(깃면 너비만큼 내려 닮) — 국가보훈부·행정안전부 국기 게양 안내(국기법)
 *   june.intro.space·activity.nations: 국립서울현충원·국립대전현충원·유엔기념공원(부산, 6·25전쟁 유엔군 전사자 안장) — 국가보훈부 국립묘지 안내·재한유엔기념공원
 *   june.activity.system·wrap.one: 보훈 제도를 예우·기억·지원으로 나눈 틀과 예(국립묘지 안장·기념식·현충 시설 보존·교육·의료 지원)는 수업용 정리 — 국가보훈부 보훈 제도 안내(국가유공자 예우 및 지원에 관한 법률)
 *   june10.activity.steps·intro.who·wrap.one: 헌법 개정 절차(제안 → 20일 이상 공고 → 국회 재적 3분의 2 이상 의결 → 국민 투표 투표자 과반수 찬성 → 대통령 공포, 제128조~제130조), 1987년 10월 국민 투표 확정 — 국가법령정보센터(헌법)·국가기록원
 *   june10.activity.clause: 제67조(대통령 직접 선거)·제70조(임기 5년 단임)·제111조(헌법재판소)와 6월 항쟁 요구의 연결 — 국가법령정보센터(헌법)·민주화운동기념사업회
 *   june10.intro.first·activity.ready·wrap.check: 선거권 만 18세, 투표 때 사진 있는 신분증(학생증 포함 여부), 선거 공보·후보 정보 확인처 — 중앙선거관리위원회
 *   liberation.intro.five·activity.sort·wrap.one: 국경일 다섯 날(3·1절·제헌절·광복절·개천절·한글날), 국경일 깃봉 끝까지·현충일·국가장 조기 게양 — 국가법령정보센터(국경일에 관한 법률·대한민국국기법)·행정안전부
 *   liberation.intro.who·activity.match: 안중근 하얼빈 의거(1909)·안창호 흥사단 창립(1913)·유관순 아우내 장터 만세 시위(1919)·윤봉길 훙커우 공원 의거(1932) — 국가보훈부 공훈전자사료관
 *   liberation.activity.hate·reply·wrap.boundary: '역사의 책임'과 '사람 전체를 향한 혐오'를 가르는 기준 문장(수업용) — 국가인권위원회 혐오 표현 대응 안내
 *   foundation.intro.law·activity.clause·wrap.one: 교육기본법 제2조(홍익인간·인격 도야·자주적 생활능력·민주시민·인류공영) 원문과 낱말 풀이 — 국가법령정보센터(교육기본법)
 *   foundation.intro.heritage·activity.myth: 참성단(강화 마니산, 단군이 제사 지냈다고 전해짐)·고인돌(청동기 시대 무덤)·비파형 동검(고조선 문화)의 설명 — 국가유산청·국사편찬위원회 우리역사넷
 *   hangul.activity.refine·wrap.one: 국어기본법의 공문서 원칙(어문 규범에 맞추어 한글로 작성, 괄호 안 다른 글자 병기)과 다듬은 말(홈페이지 → 누리집, 스크린도어 → 안전문, 익일 → 다음 날) — 국가법령정보센터(국어기본법 제14조)·국립국어원 다듬은 말
 *   hangul.intro.myth·activity.fact: 훈민정음 창제 1443·반포 1446, 해례본 1997 세계기록유산, 세종대왕 문해상, 자음 기본자가 발음 기관 모양을 본뜸, '세계 1위 문자 선정'은 없음 — 국립국어원·국립한글박물관·유네스코 한국위원회
 *   hangul.activity.bias: 살색 → 살구색, 벙어리장갑 → 손모아장갑, 결손 가정 → 한부모 가정 — 국가인권위원회 권고·국립국어원
 *   students.intro.demand: 1929년 학생들의 요구(학생 자치권·언론·집회의 자유)와 초·중등교육법 제17조(학생 자치 활동 권장·보호)·헌법 제21조·제31조의 연결 — research-days.md §3(전북교육청 2015 자료, 2차), 광주학생독립운동기념관·국가법령정보센터
 *   students.intro.event: 1929년 10월 나주역 다툼 → 11월 3일 광주 학생 시위, 광주학생독립운동기념관·학생독립운동기념탑(광주)·나주학생독립운동기념관(나주)의 위치 — 광주학생독립운동기념관·국가보훈부
 *   students.activity.channel·choose·wrap.my: 청소년참여위원회(청소년기본법)·자치단체 누리집 민원 창구가 청소년 의견 통로라는 설명 — 여성가족부 청소년 참여 안내·각 자치단체 누리집
 *   rights.intro.article·wrap.one: 세계 인권 선언 1948.12.10. 유엔 총회 채택·제1조 문장, 헌법 제10조 원문 — 국가인권위원회·국가법령정보센터(헌법). 세계 인권의 날의 법정 기념일 여부는 확인 못함(research-days.md §1)
 *   rights.activity.match: 헌법 제11조(평등)·제17조(사생활의 비밀과 자유)·제21조(언론·출판·집회·결사의 자유)·제31조(교육받을 권리) — 국가법령정보센터(헌법)
 *   rights.activity.help: 인권 침해 때 기록 → 믿을 어른·상담 → 학교 절차 → 국가인권위원회 상담·진정 → 결과 확인 흐름(수업용 일반 틀) — 국가인권위원회 진정 안내
 *   rights.activity.issue: 헌법 제37조 제2항(필요한 경우 법률로 제한, 본질적 내용 침해 금지)의 요지와 '표현의 자유도 다른 사람의 권리를 해치면 제한될 수 있다' — 국가법령정보센터(헌법)·국가인권위원회. 교실 CCTV는 열린 쟁점(정답 없음)
 */
(function () {
  const MOD = (topic) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'days', band: '고', topic: `days.h.${topic}`, grades: [10, 11, 12] }, o, { id: `days.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(sort — mindmap·story·timeline·emotion·sortboard 공통): groups = 칸마다 카드 글. 쉬움 = 칸마다 앞 k장, 도전 = hard 덧붙임, traps = 함정 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {}, mode = true } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign(mode ? { mode: 'sort' } : {}, { slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    if (eg.flat().length < groups.flat().length) base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    if (!Object.keys(base.levels).length) delete base.levels;
    return Object.assign(base, more);
  };
  // 글 카드 분류판(sortboard): mode 칸을 두지 않는다
  const SBQ = (prompt, slots, groups, o = {}) => SORTQ(prompt, slots, groups, Object.assign({}, o, { mode: false }));
  // 차례 문항(order): steps = 바른 차례. 쉬움 = 앞 k장, traps = 함정 카드(기본·도전)
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
  // 낱말 짝(wordcards match): pairs = [[낱말, 뜻]…] — 한국어 카드, 소리 없음
  const WORDQ = (prompt, pairs, { k = 3, d = 0.3, opt = {}, more = {} } = {}) => {
    const w = (ps) => ps.map(([en, ko]) => ({ en, ko }));
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([en]) => [en, en])) });
    const it = { prompt, toolOptions: Object.assign({ words: w(pairs), speak: false }, opt), target: t(pairs), difficulty: d };
    if (k < pairs.length) it.levels = { easy: { prompt: pfx(prompt, `낱말 ${k}개`), toolOptions: { words: w(pairs.slice(0, k)) }, target: t(pairs.slice(0, k)) } };
    return Object.assign(it, more);
  };
  // 갈림길(dilemma): 나무를 단계에서 자른다. 쉬움 = 갈림길 1번, 기본 = 2번, 도전 = 나무 전체(3번)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  const DILQ = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const full = depth(scene);
    const it = { prompt, toolOptions: Object.assign({ scene: cut(scene, 2), reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } };
    if (full > 2) it.levels.challenge = { prompt: pfx(prompt, `갈림길 ${full}개`), toolOptions: { scene }, target: at(full) };
    return Object.assign(it, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기(정답 길 없음)
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, opt = {}, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀(starter), 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, sample = null, plus = null, d = 0.4, more = {} } = {}) => {
    const t = (cs) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, sent ? { sentences: sent } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks), difficulty: d, levels: {} };
    if (starter) it.levels.easy = { toolOptions: { starter } };
    if (plus) it.levels.challenge = { prompt: pfx(prompt, '기준 하나 더'), target: t([...checks, plus]) };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 그래프 읽기(chart read): 고르기 / 수 쓰기
  const CPICK = (prompt, base, question, choices, pick, { why = null, d = 0.3, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({}, base, { mode: 'read', question, choices }, why ? { why } : {}), target: { pick }, difficulty: d }, more);
  const CVAL = (prompt, base, question, value, { d = 0.3, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({}, base, { mode: 'read', question }), target: { value }, difficulty: d }, more);
  // 진행판(timer) 문항: 순서 카드 / 분 단위 시간 맞추기 / 마친 뒤 점검
  const TORDER = (prompt, title, steps, { k = 0, d = 0.2, more = {} } = {}) => {
    const lay = (s) => [...s.slice(1), s[0]].reverse();
    const it = { prompt, toolOptions: { title, cards: lay(steps) }, target: { order: steps }, difficulty: d };
    if (k && k < steps.length) it.levels = { easy: { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { cards: lay(steps.slice(0, k)) }, target: { order: steps.slice(0, k) } } };
    return Object.assign(it, more);
  };
  const TPLAN = (prompt, title, plan, labels, { easy = null, start = { work: 1, rest: 0, rounds: 1 }, d = 0.25, more = {} } = {}) => {
    const it = { prompt, toolOptions: { title, timeUnit: 'min', labels, plan: start }, target: { plan }, difficulty: d };
    if (easy) it.levels = { easy: { prompt: easy } };
    return Object.assign(it, more);
  };
  const TCHECK = (prompt, title, checks, { plus = null, d = 0.2, more = {} } = {}) => {
    const it = { prompt, toolOptions: { title }, target: { selfCheck: checks }, difficulty: d };
    if (plus) it.levels = { challenge: { prompt: pfx(prompt, '점검 하나 더'), target: { selfCheck: [...checks, plus] } } };
    return Object.assign(it, more);
  };
  // 출구 질문
  const XRW = (prompt, topic, checks, { min = 30, max = 250, must = null, starter = null, sample = null } = {}) => ({ type: 'tool', tool: 'rubric-writing', options: Object.assign({ topic, minChars: min, maxChars: max }, starter ? { starter } : {}, sample ? { sample } : {}), prompt, target: Object.assign({ selfCheck: checks }, must ? { mustInclude: must } : {}), difficulty: 0.3 });
  const XSCALE = (prompt, situation, feeling, labels, ask) => ({ type: 'tool', tool: 'emotion', options: Object.assign({ mode: 'scale', situation, feeling, steps: 5, scaleLabels: labels }, ask ? { ask } : {}), prompt, target: { level: 'any' }, difficulty: 0.1 });
  const XCHOICE = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, explain, difficulty: d });
  const XSHORT = (prompt) => ({ type: 'short', prompt });
  const EXIT_CHECK = ['사실이 공식 자료와 맞다', '오늘 배운 핵심 낱말을 넣었다', '외운 문장이 아니라 내 말로 썼다'];
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };
  const LIVE = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const NONE = { easy: {}, base: {}, challenge: {} };
  const SCALE5 = { 1: '전혀 아니다', 5: '매우 그렇다' };

  const MODS = [];

  // ======================================================================================================
  // 1. 3·1절 — 헌법 전문의 정신과 기억
  // ======================================================================================================
  {
    const M = MOD('march1');
    const YEARS = { type: 'bar', title: '1919년(3·1운동)에서 몇 해 뒤인가', yLabel: '햇수(년)', xLabel: '문서·사건', unit: '년', showTable: true, data: [['제헌 헌법 공포(1948)', 29], ['4·19혁명(1960)', 41], ['현행 헌법 공포(1987)', 68]] };
    MODS.push(
      M({
        id: 'intro.preamble', type: 'intro', title: '헌법 전문 첫 문장 읽기',
        method: '헌법 전문 첫 문장 소리 내어 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 두 장(3·1운동·대한민국임시정부)만 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 전문에 나오는 세 장을 학생이 고른다.', challenge: '왜 헌법의 맨 앞에 3·1운동을 적었을지 한 문장으로 말한다.' },
        intro: {
          teacher: '"헌법 맨 앞, 조문이 시작되기 전에 \'전문\'이 있어요. 첫 문장을 같이 소리 내어 읽어 볼까요? \'유구한 역사와 전통에 빛나는 우리 대한국민은 3·1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4·19민주이념을 계승하고…\'" 읽은 뒤 시연 단추로 전문에 나오는 낱말 카드가 바구니에 담기는 모습을 보여 준다. "전문은 그냥 멋을 낸 머리말 아니에요?"라는 말이 나오면 "나라의 뿌리가 어디에 있는지 밝히는 문장을 맨 앞에 둔 까닭은 무엇일까요?"라고 되묻는다. 오늘은 3·1운동의 정신이 헌법의 원리로 어떻게 이어졌는지 문서로 따라간다고 밝힌다.',
          student: '헌법 전문 첫 문장을 소리 내어 읽고, 전문에 실제로 나오는 낱말 카드를 바구니에 골라 담아 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '전문에 나오는 것', title: '헌법 전문 첫 문장', shuffle: false, cards: [
            { id: 'march', text: '3·1운동', motif: 'flag' }, { id: 'gov', text: '대한민국임시정부의 법통', motif: 'house' }, { id: 'king', text: '왕실의 전통', motif: 'castle' },
            { id: 'april', text: '4·19민주이념', motif: 'star' }, { id: 'army', text: '군대의 명령', motif: 'cloud' }] }, sequence: [{ pick: ['march', 'gov', 'april'] }] },
          art: { draw: 'a large paper scroll unrolled on a desk with the opening line of a constitution, a paper taegeukgi flag and the year 1919 cut out in paper above it, soft spring light', banner: '헌법 맨 앞 문장' },
        },
        notes: '전문은 국가법령정보센터의 현행 헌법 원문을 화면이나 칠판으로 함께 보며 첫 문장만 읽는다(긴 원문을 옮겨 적게 하지 않는다).',
      }),
      M({
        id: 'intro.place', type: 'intro', title: '3·1운동을 기억하는 장소',
        method: '3·1운동을 기억하는 장소 떠올리기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 두 곳(탑골공원·독립기념관)만 이름을 보이며 함께 핀을 꽂는다.', base: '세 곳의 이름을 듣고 칸 지도에서 독립 선언서를 낭독한 곳에 핀을 꽂는다.', challenge: '세 곳 가운데 한 곳이 품은 이야기(무엇을 기억하는 곳인지)를 한 문장으로 말한다.' },
        intro: {
          teacher: '"3·1운동을 기억하는 장소를 떠올려 볼까요?" 대답을 듣고(기다릴 반응: "독립기념관이요", "탑골공원이요") 독립 선언서를 낭독한 탑골공원, 독립운동가들이 갇혔던 서대문형무소 터의 역사관, 1987년 문을 연 독립기념관을 칸 지도로 보인다. 시연 단추로 탑골공원에 핀이 꽂히는 모습을 보여 준다. "기념관은 다 같은 곳 아니에요?"라는 말이 나오면 "낭독한 자리, 갇혔던 자리, 모아서 전시하는 자리는 기억하는 방식이 어떻게 다를까요?"라고 되묻는다. 오늘 기획할 학교 기념 활동도 무엇을 어떻게 기억할지 정하는 일이라고 잇는다.',
          student: '칸 지도에서 3·1운동을 기억하는 세 장소를 보고, 독립 선언서를 낭독한 곳에 핀을 꽂아 보세요.',
          demo: { tool: 'map', options: { grid: [5, 4], title: '3·1운동을 기억하는 곳(칸 지도)', places: [{ name: '탑골공원', icon: 'park', at: [1, 0] }, { name: '서대문형무소역사관', icon: 'museum', at: [0, 1] }, { name: '독립기념관', icon: 'heritage', at: [2, 2] }] }, sequence: [{ place: '탑골공원' }] },
          art: { draw: 'a paper map of Korea in soft pastel layers with three small paper pins, a paper pavilion in a park, a brick prison building and a large memorial hall, a paper taegeukgi waving above', banner: '기억은 장소에 남아요', extra: [{ motif: 'flag', x: 300, y: 96 }] },
        },
        notes: '칸 지도는 대강의 방향만 나타낸다(실제 거리·위치가 아니다). 서울 두 곳은 서울 칸 가까이, 독립기념관은 천안 쪽 칸에 둔다.',
      }),
      M({
        id: 'intro.fact', type: 'intro', title: '같은 사건, 두 서술',
        method: '같은 사건 두 서술 견주기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 문장만 읽어 주고 사실만 담은 쪽을 함께 고른다.', base: '세 문장 가운데 사실만 담은 두 문장을 학생이 고른다.', challenge: '남은 문장에서 해석·평가를 나타내는 낱말(가장·위대한 등)을 찾아 말한다.' },
        intro: {
          teacher: '"같은 3·1운동을 두 사람이 이렇게 썼어요. 하나는 \'1919년 3월 1일 독립 선언서가 낭독되고 만세 시위가 전국으로 퍼졌다.\' 다른 하나는 \'3·1운동은 우리 역사에서 가장 위대한 사건이다.\' 무엇이 다를까요?" 시연 단추로 사실만 담은 카드가 바구니에 담기는 모습을 보여 준다. "둘 다 맞는 말인데요?"라는 말이 나오면 "자료로 확인할 수 있는 말과, 쓴 사람의 판단이 들어간 말을 나눠 볼까요?"라고 되묻는다. 해석은 틀린 것이 아니라 근거로 따져야 하는 말이라는 점을 짚는다.',
          student: '3·1운동을 쓴 문장 카드 가운데 자료로 확인할 수 있는 사실만 담은 카드를 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '사실만 담은 문장', speak: false, cards: [
            { id: 'f1', text: '1919년 3월 1일 독립 선언서가 낭독되었다' }, { id: 'o1', text: '3·1운동은 가장 위대한 사건이다' }, { id: 'f2', text: '만세 시위가 전국으로 퍼져 나갔다' }] }, sequence: [{ pick: ['f1', 'f2'] }] },
          art: { draw: 'two paper speech bubbles side by side, one holding a calendar page dated March 1 1919 and a paper crowd, the other holding a big shining paper star, a magnifying glass between them', banner: '사실일까, 해석일까?' },
        },
      }),

      M({
        id: 'activity.line', type: 'activity', title: '1919에서 1987까지 이어짐',
        method: '1919·1948·1987 헌법 이어짐 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '차례 카드 3장(3·1운동·임시 헌장·제헌 헌법)만 놓고, 틀린 자리는 바로 알려 준다.', base: '카드 5장을 차례대로 놓고, 연도와 문서를 짝 지은 뒤 이어짐을 설명하는 문장을 고른다.', challenge: '카드를 섞어 놓고 시작하며, 활동지에 조문이 어떻게 이어졌는지 두 문장으로 설명한다.' },
        activity: {
          title: '1919에서 1987까지 이어짐', tool: 'timeline',
          teacher: '"3·1운동 한 달 뒤 상하이에서 대한민국임시정부가 세워지고 임시 헌장이 발표되었어요. 이 문서의 첫 조항이 오늘 헌법까지 어떻게 이어졌는지 시간 띠에 놓아 봐요." 놓을 때마다 "이 문서는 앞 문서에서 무엇을 이어받았나요?"라고 묻는다. 제헌 헌법을 임시 헌장보다 앞에 두는 학생에게 "1919년과 1948년 가운데 어느 쪽이 먼저일까요?"라고 되묻는다. 3번에서 "헌법은 1948년에 처음 생겨 앞의 일과는 상관없다"는 카드를 고른 학생에게는 현행 헌법 전문 첫 문장을 다시 읽게 한다.',
          task: '3·1운동에서 현행 헌법까지 문서와 사건을 시간 띠에 놓고, 무엇이 이어졌는지 골라요.', levels: LIVE,
          items: [
            ORDERQ('3·1운동에서 현행 헌법까지 문서와 사건을 일어난 차례대로 놓으세요.', ['3·1운동', '대한민국 임시 헌장 발표', '제헌 헌법 공포', '4·19혁명', '현행 헌법 공포'], { k: 3, d: 0.25, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('연도 칸에 그해의 문서를 짝지으세요.', [['1919년', '민주공화제를 밝힌 임시 헌장'], ['1948년', '민주공화국이라 정한 제헌 헌법'], ['1987년', '전문에 3·1운동을 적은 현행 헌법']], { k: 2, d: 0.3, opt: { axis: ['1919년', '오늘'] } }),
            PICKQ('세 문서의 이어짐을 바르게 설명한 카드만 고르세요.', ['임시 헌장의 민주공화제가 제헌 헌법 제1조로 이어졌다', '현행 헌법 전문은 임시정부의 법통을 계승한다고 밝힌다'], ['헌법은 1948년에 처음 생겨 앞의 일과 상관없다', '현행 헌법은 3·1운동을 다루지 않는다'], { d: 0.35, opt: { basket: '바른 설명', axis: ['1919년', '오늘'] }, more: { conclude: '1919년 임시 헌장의 민주공화제는 1948년 제헌 헌법 제1조로, 그리고 오늘 헌법 전문의 \'임시정부의 법통 계승\'으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '임시 헌장 제1조와 제헌 헌법 제1조가 어떻게 이어지는지 두 문장으로 쓰세요.' }] },
        notes: '조문은 짧은 문장만 인용한다: 임시 헌장 제1조 \'대한민국은 민주공화제로 함\', 제헌 헌법 제1조 \'대한민국은 민주공화국이다\'. 긴 원문을 옮기게 하지 않는다.',
      }),
      M({
        id: 'activity.clause', type: 'activity', title: '임시 헌장과 오늘 헌법 견주기',
        method: '임시 헌장과 오늘 헌법 조문 견주기', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 햇수가 보이고, 표를 보며 공통점을 고른다.', base: '값 표시 없이 막대와 표를 읽고 세 조문을 견주어 답한다.', challenge: '값 표시 없이 풀고, 활동지에 민주공화제 원리(주권이 국민에게 있음)를 조문 근거로 설명한다.' },
        activity: {
          title: '조문 견주기와 햇수 읽기', tool: 'chart',
          teacher: '"임시 헌장 제1조는 \'대한민국은 민주공화제로 함\', 제헌 헌법 제1조는 \'대한민국은 민주공화국이다\'예요. 두 문장 사이에 몇 해가 흘렀는지 막대로 먼저 읽고 조문을 견줘 봐요." 막대를 읽은 뒤 조문 물음으로 넘어간다. "민주공화제는 대통령이 있다는 뜻이에요"라고 답하는 학생에게 "왕이 아니라 누가 나라의 주인이라는 뜻일까요?"라고 되묻는다. 마지막 물음에서 민주공화제가 \'국민이 주인인 나라\'라는 원리라는 점을 짚는다.',
          task: '1919년에서 몇 해 뒤에 각 문서가 나왔는지 막대와 표로 읽고, 조문을 견주어 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            CVAL('임시 헌장(1919)에서 제헌 헌법 공포까지 몇 해가 흘렀는지 막대를 읽어 쓰세요.', YEARS, '제헌 헌법까지 몇 해?', 29, { d: 0.15 }),
            CPICK('임시 헌장 제1조와 제헌 헌법 제1조가 함께 정한 나라의 틀을 고르세요.', YEARS, '두 조문의 공통점은?', ['민주공화제(국민이 주인인 나라)', '왕이 다스리는 나라', '군대가 다스리는 나라'], 0, { why: ['', '두 조문 모두 왕을 두지 않아요.', '두 조문 어디에도 군대가 다스린다는 말이 없어요.'], d: 0.25 }),
            CPICK('현행 헌법 전문이 계승한다고 밝힌 두 가지를 바르게 고른 보기를 고르세요.', YEARS, '전문이 계승하는 것은?', ['임시정부의 법통과 4·19민주이념', '왕실의 전통과 4·19민주이념', '임시정부의 법통과 군대의 명령'], 0, { why: ['', '전문에 왕실의 전통은 나오지 않아요.', '전문에 군대의 명령은 나오지 않아요.'], d: 0.3 }),
            CPICK('민주공화제의 원리를 가장 바르게 설명한 보기를 고르세요.', YEARS, '민주공화제의 원리는?', ['나라의 주권이 국민에게 있다', '대통령이 모든 것을 정한다', '헌법을 바꾸지 않는다'], 0, { why: ['', '주권을 가진 쪽은 한 사람이 아니에요.', '헌법은 정해진 절차로 고칠 수 있어요.'], d: 0.35, more: { conclude: '민주공화제는 왕이 아니라 국민이 나라의 주인이라는 원리예요. 1919년의 약속이 오늘 헌법의 뼈대가 되었어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 문서를 표로 견주세요.', columns: ['문서', '연도', '나라의 틀을 밝힌 문장'], cells: [['대한민국 임시 헌장', '1919', ''], ['제헌 헌법', '1948', ''], ['현행 헌법', '1987', '']] }] },
        notes: '햇수는 공식 연도(1919·1948·1960·1987)에서 셈한 값이다. 조문 인용은 짧은 한 문장씩만.',
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '학교 3·1절 기념 활동 기획안',
        method: '학교 3·1절 기념 활동 기획안 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀(예: \'우리 활동의 목적은 ~이다\')을 보고 채운다.', base: '목적·사실 확인·참여 방법을 문항마다 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 반대 의견에 대한 대응까지 쓴다.' },
        activity: {
          title: '기념 활동 기획안', tool: 'rubric-writing',
          teacher: '"우리 학교 3·1절 기념 활동을 기획해 봐요. 좋은 기획안은 무엇을 기억할지, 그 사실을 어디서 확인했는지, 누구나 참여할 수 있는지가 분명해요." 문항마다 기준표를 함께 읽고 쓰게 한다. 사실 확인 칸에 "인터넷에서 봤다"고 쓰는 학생에게 "국사편찬위원회나 독립기념관처럼 누가 언제 낸 자료인지 밝힐 수 있을까요?"라고 묻는다. 기념 활동은 누구를 미워하는 자리가 아니라 정신을 이어받는 자리라는 점을 짚는다.',
          task: '학교 3·1절 기념 활동의 목적·사실 확인·참여 방법을 기획안으로 쓰고 기준표로 점검해요.', levels: NONE,
          items: [
            RWQ('기념 활동의 목적과 형식을 2~3문장으로 쓰세요.', '우리 학교 3·1절 기념 활동(전시·낭독·캠페인 등)의 목적과 형식을 쓰세요.', ['무엇을 기억할지 밝혔다', '활동 형식을 구체적으로 썼다', '3·1운동의 정신과 이었다'], { min: 50, max: 300, sent: [2, 4], must: [['목적']], starter: '우리 활동의 목적은 ~이다. 형식은 ~', plus: '참여 대상(학년·인원)을 밝혔다', d: 0.35 }),
            RWQ('활동에 쓸 사실을 어떻게 확인할지 2문장으로 쓰세요.', '기념 활동에 쓸 사실(날짜·장소·인물)을 확인할 공식 자료와 방법을 쓰세요.', ['확인할 사실을 적었다', '공식 기관 자료를 출처로 들었다', '해석과 사실을 나누어 쓰겠다고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['출처', '자료']], starter: '날짜와 장소는 ~에서 확인한다. 왜냐하면 ~', plus: '자료끼리 다를 때 어떻게 할지 밝혔다', d: 0.4 }),
            RWQ('누구나 존중받으며 참여할 방법을 2~3문장으로 쓰세요.', '모든 학생이 존중받으며 참여할 수 있는 방법과 지킬 약속을 쓰세요.', ['참여 방법을 구체적으로 썼다', '다른 나라 사람을 탓하는 표현을 쓰지 않는다고 밝혔다', '참여하기 어려운 학생도 고려했다'], { min: 50, max: 300, sent: [2, 4], must: [['존중', '참여']], starter: '참여 방법은 ~이다. 우리가 지킬 약속은 ~', plus: '\'기념 활동이 형식적이다\'는 반대 의견에 대한 대응을 썼다', d: 0.4, more: { conclude: '기념 활동의 힘은 확인한 사실, 모두의 참여, 서로를 존중하는 말에서 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기획안을 한 장으로 정리하세요.', columns: ['항목', '내용'], cells: [['목적', ''], ['형식·장소', ''], ['확인한 출처', ''], ['참여 방법', '']] }] },
        notes: '기획안은 학교 행사 계획 연습이며 실제 실행은 학교 계획·학교장 승인을 따른다(research-days.md §0-4).',
      }),
      M({
        id: 'activity.run', type: 'activity', title: '모둠 기획 회의',
        method: '모둠 기획 회의 진행', tool: 'timer', minutes: 18,
        levels: { easy: '회의 순서 카드 3장만 놓고, 문항 글에 적힌 시간대로 타이머를 맞춘다.', base: '순서 카드 4장을 놓고, 회의 시간을 네 단계로 나눈 값을 스스로 셈해 맞춘 뒤 마친 뒤 점검한다.', challenge: '마친 뒤 점검에 \'회의록에 결정과 근거를 적었다\'가 더해진다.' },
        activity: {
          title: '모둠 기획 회의', tool: 'timer',
          teacher: '"이제 모둠 기획 회의를 해요. 순서는 역할 정하기 → 안 내기 → 사실 확인 → 결정이에요. 한 단계에 4분씩, 모두 16분이에요." 순서를 놓고 타이머를 맞춘 뒤 신호에 맞춰 회의를 진행한다. 사실 확인 단계를 건너뛰려는 모둠에게 "결정한 안에 들어간 날짜와 장소는 누가 확인했나요?"라고 묻는다. "목소리 큰 사람 안으로 정하면 빨라요"라는 말에는 "모두가 안을 냈는지 점검표에서 확인해 볼까요?"라고 되묻는다.',
          task: '회의 순서를 놓고 타이머를 맞춰 기획 회의를 한 뒤, 회의 점검표에 표시해요.', levels: NONE,
          items: [
            TORDER('기획 회의의 순서 카드를 차례대로 놓으세요.', '기획 회의 순서', ['역할 정하기', '안 내기', '사실 확인', '결정하기'], { k: 3 }),
            TPLAN('회의 16분을 네 단계에 똑같이 나누어, 쉬는 시간 없이 네 번 돌도록 타이머를 맞추세요.', '기획 회의 타이머', { work: 4, rest: 0, rounds: 4 }, ['회의', '쉬기'], { easy: '한 단계 4분, 쉬기 0분, 4번으로 타이머를 맞추세요.' }),
            TCHECK('회의를 마친 뒤 회의 점검표에 표시하세요.', '기획 회의 점검', ['모두가 안을 하나 이상 냈다', '결정한 안의 사실을 공식 자료로 확인했다', '다른 사람의 안을 깎아내리지 않았다'], { plus: '회의록에 결정과 근거를 적었다', more: { conclude: '좋은 회의는 빨리 끝나는 회의가 아니라, 모두가 안을 내고 사실을 확인한 뒤 정하는 회의예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '회의록을 쓰세요.', columns: ['단계', '나온 의견·결정'], cells: [['역할', ''], ['낸 안', ''], ['확인한 사실·출처', ''], ['결정', '']] }] },
        notes: '교사가 신호와 시간을 진행한다. 회의에서 나온 말은 채점하지 않고 회의록(활동지)에 남긴다.',
      }),
      M({
        id: 'activity.essay', type: 'activity', title: '사실과 해석을 나눈 논설',
        method: '사실과 해석을 나누어 논설 쓰기', tool: 'rubric-writing', minutes: 36,
        levels: { easy: '사료 두 개를 쓰고, 문단마다 문장 틀을 보고 쓴다.', base: '사료 세 개로 네 문단(사실 → 해석 → 근거 → 맺음)을 쓰고 문단마다 기준표로 점검한다.', challenge: '문단마다 기준 하나가 더 붙고, 반론을 검토하는 문단을 더한다.' },
        activity: {
          title: '3·1운동의 의미 논설', tool: 'rubric-writing',
          teacher: '"오늘은 3·1운동의 의미를 논설문으로 써요. 논설은 사실과 내 해석을 나누고, 해석마다 사료를 근거로 대는 글이에요." 칠판에 짧은 사료 세 개를 적는다: ① 독립 선언서 첫 문장의 요지 \'조선이 독립국임과 조선인이 자주민임을 선언한다\', ② 임시 헌장 제1조 \'대한민국은 민주공화제로 함\', ③ 현행 헌법 전문 \'3·1운동으로 건립된 대한민국임시정부의 법통\'. 문단을 쓸 때마다 "이 문장은 사료에 있는 사실인가요, 내 판단인가요?"라고 묻는다. "3·1운동은 실패했다/성공했다"처럼 한 낱말로 끝내는 학생에게 "무엇을 기준으로 그렇게 판단했는지 사료로 보일 수 있을까요?"라고 되묻는다. 의미에는 여러 관점이 있을 수 있고, 근거가 있는 해석이 좋은 해석이라는 점을 짚는다.',
          task: '3·1운동을 다룬 사실과 해석을 나누고, 칠판의 사료를 근거로 3·1운동의 의미를 네 문단 논설로 쓴 뒤 문단마다 점검해요.', levels: NONE,
          items: [
            RWQ('1문단: 3·1운동에 대해 사료로 확인되는 사실을 2~3문장으로 쓰세요.', '3·1운동의 날짜·전개 등 사료로 확인되는 사실만 쓰세요.', ['날짜와 사건을 정확히 썼다', '판단하는 낱말(위대한·가장 등)을 넣지 않았다', '어느 사료에서 확인했는지 밝혔다'], { min: 50, max: 300, sent: [2, 4], must: [['1919']], starter: '1919년 3월 1일 ~. 사료 ①에 따르면 ~', plus: '사실 두 가지 이상을 썼다', d: 0.35 }),
            RWQ('2문단: 내가 생각하는 3·1운동의 의미(해석)를 2~3문장으로 쓰세요.', '3·1운동의 의미에 대한 내 해석을 쓰고, 그것이 해석임을 드러내세요.', ['내 해석을 분명히 밝혔다', '해석임을 드러내는 표현(나는 ~라고 본다)을 썼다', '사실과 섞어 쓰지 않았다'], { min: 50, max: 300, sent: [2, 4], must: [['의미']], starter: '나는 3·1운동의 의미가 ~라고 본다.', plus: '여러 관점이 있을 수 있음을 밝혔다', d: 0.4 }),
            RWQ('3문단: 내 해석의 근거를 사료로 들어 2~4문장으로 쓰세요.', '내 해석을 받치는 근거를 칠판의 사료(독립 선언서·임시 헌장·헌법 전문) 가운데서 들어 쓰세요.', ['사료를 하나 이상 근거로 들었다', '사료와 해석의 관계를 설명했다', '사료를 짧게 정확히 인용했다'], { min: 60, max: 400, sent: [2, 5], must: [['사료', '헌장', '전문', '선언서']], starter: '그렇게 보는 근거는 사료 ~이다. 이 사료는 ~', plus: '사료 두 개 이상을 견주어 썼다', d: 0.45 }),
            RWQ('4문단: 오늘 우리에게 주는 뜻으로 맺는 2~3문장을 쓰세요.', '3·1운동의 정신이 오늘 우리에게 주는 뜻을 쓰며 논설을 맺으세요.', ['앞 문단의 해석과 이어진다', '오늘의 삶과 잇는 내용이 있다', '다른 나라 사람 전체를 탓하는 표현이 없다'], { min: 50, max: 300, sent: [2, 4], starter: '그러므로 3·1운동은 오늘 우리에게 ~', plus: '내 해석과 다른 관점(반론)을 하나 검토했다', d: 0.4, more: { conclude: '논설의 힘은 사실과 해석을 나누고, 해석마다 사료로 근거를 대는 데서 나와요. 근거가 있으면 다른 관점과도 차분히 견줄 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 논설에서 사실과 해석을 나누어 적으세요.', columns: ['문단', '사실(사료)', '해석'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] }, { type: 'short', prompt: '내 해석과 다른 관점 하나를 쓰고, 그 관점의 근거가 무엇일지 한 문장으로 쓰세요.' }] },
        notes: '사료는 공식 기관이 공개한 짧은 문장만 칠판에 적는다(독립 선언서 전문을 옮기게 하지 않는다). 해석은 채점하지 않고 근거가 있는지만 스스로 점검한다. 이 활동 하나로 전개 36분을 쓴다.',
      }),

      M({
        id: 'wrap.link', type: 'wrap', title: '헌법 전문 속 3·1운동 한두 문장',
        method: '헌법 전문 속 3·1운동 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 빈칸 한 개 문장 틀(\'헌법 전문은 3·1운동으로 건립된 ___ 을 계승한다\')을 보고 쓴다.', base: '빈칸 두 개(임시정부의 법통·민주공화제)를 채우듯 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓰고, 교사가 한 명의 글을 함께 읽고 사실을 확인한다.' },
        wrap: {
          teacher: '"헌법 전문에서 3·1운동은 어떤 자리에 있었나요? 한두 문장으로 남겨 봐요." 쓰기 전에 기준표 세 항목을 함께 읽는다. "3·1운동은 헌법에 나오는 사건이다"처럼 짧게 끝내는 학생에게 "전문은 3·1운동으로 무엇이 세워졌다고 하나요?"라고 묻는다. 출구 2번에서 임시 헌장을 1948년 문서로 고른 학생에게 연도 띠를 다시 떠올리게 한다.',
          exitTicket: [
            XRW('헌법 전문 속 3·1운동을 한두 문장으로 쓰고 기준표로 점검하세요.', '헌법 전문에서 3·1운동이 어떤 뜻으로 이어지는지 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['전문'], ['임시정부', '법통']], sample: '헌법 전문은 3·1운동으로 세워진 대한민국임시정부의 법통을 이어받는다고 밝힌다. 그래서 1919년의 민주공화제 약속이 오늘 헌법의 뿌리가 된다.' }),
            XCHOICE('\'대한민국은 민주공화제로 함\'을 첫 조항에 둔 문서를 고르세요.', ['1919년 대한민국 임시 헌장', '1948년 제헌 헌법', '1987년 현행 헌법'], 0, '1919년 4월 임시정부가 발표한 임시 헌장의 제1조예요. 제헌 헌법 제1조는 \'민주공화국이다\'로 이어졌어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '헌법 전문 속 3·1운동',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '헌법 전문은 3·1운동으로 건립된 대한민국임시정부의 ___ 을 계승한다고 밝힌다.', answer: '법통' },
            { type: 'short', prompt: '3·1운동의 정신이 오늘 헌법의 어떤 원리로 이어졌는지 한 문장으로 쓰세요.' },
          ],
          easy: { note: '\'헌법 전문은 3·1운동으로 건립된 ___ 의 법통을 계승한다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '기획 회의 돌아보기',
        method: '기획 회의 성찰', tool: 'emotion', minutes: 8,
        levels: { easy: '눈금만 고른다(익명).', base: '눈금을 고르고 까닭을 한 줄 쓴다.', challenge: '다음 회의에서 바꿀 점 하나를 더 쓴다.' },
        wrap: {
          teacher: '"오늘 회의에서 내가 맡은 역할에 얼마나 만족하나요? 점수는 이름 없이 모아요." 눈금을 고른 뒤 까닭을 한 줄 쓰게 한다. "말을 많이 안 해서 0점이에요"라는 학생에게 "사실을 확인하거나 기록한 것도 회의를 움직인 역할이에요. 무엇을 했나요?"라고 묻는다. 출구 3번에서 "모두가 안을 냈나요, 결정 전에 사실을 확인했나요?"라고 함께 묻는다.',
          exitTicket: [
            XSCALE('회의에서 내 역할에 대한 만족도를 1~5로 고르세요(익명).', '오늘 기획 회의에서 내가 맡은 역할', '뿌듯함', SCALE5, '내 역할에 얼마나 만족하나요?'),
            XSHORT('그렇게 고른 까닭과 다음 회의에서 바꿀 점을 한 줄씩 쓰세요.'),
            XCHOICE('좋은 기획 회의에 가장 가까운 것을 고르세요.', ['목소리 큰 사람의 안으로 빨리 정한다', '모두가 안을 내고 사실을 확인한 뒤 정한다', '사실 확인은 행사 뒤에 한다'], 1, '모두가 안을 내고, 결정 전에 사실을 확인해야 기념 활동이 믿을 만해져요.'),
          ],
        },
        worksheet: {
          title: '기획 회의 돌아보기',
          items: [
            { type: 'check', prompt: '오늘 회의에서 내가 한 일에 표시하세요.', options: ['안을 냈다', '사실을 확인했다', '기록했다', '다른 의견을 들었다'] },
            { type: 'short', prompt: '다음 회의에서 바꿀 점 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.peer', type: 'wrap', title: '논설 짝 점검',
        method: '논설 기준표 짝 점검', tool: 'timer', minutes: 8,
        levels: { easy: '짝 점검 항목 중 앞 두 개(사실·해석 나눔)만 함께 본다.', base: '4분 타이머를 맞추고 네 항목을 모두 점검한다.', challenge: '점검 뒤 짝의 글에서 고칠 문장 하나를 활동지에 제안한다.' },
        wrap: {
          teacher: '"짝과 논설을 바꿔 읽어요. 4분 동안 기준표 네 항목을 점검하고 표시해요." 타이머를 맞춘 뒤 시작한다. 짝의 해석이 내 생각과 달라 점수를 깎으려는 학생에게 "기준은 해석이 나와 같은지가 아니라, 근거가 있는지예요"라고 말한다. 고칠 점은 사람이 아니라 문장을 두고 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '논설 짝 점검 4분', timeUnit: 'min', labels: ['점검', '쉬기'], plan: { work: 2, rest: 0, rounds: 1 } }, prompt: '타이머를 4분 한 번으로 맞추고, 짝의 논설을 읽으며 점검 네 칸을 모두 확인하세요.', target: { plan: { work: 4, rounds: 1 }, selfCheck: ['사실과 해석이 나뉘어 있다', '해석마다 사료 근거가 있다', '사료를 짧고 정확하게 인용했다', '다른 나라 사람 전체를 탓하는 표현이 없다'] }, difficulty: 0.2 },
            XCHOICE('짝의 해석이 내 생각과 다를 때 알맞은 점검을 고르세요.', ['내 생각과 다르면 틀렸다고 표시한다', '근거 사료가 있는지를 보고 표시한다', '점검하지 않고 넘긴다'], 1, '해석은 여러 관점이 있을 수 있어요. 점검 기준은 근거가 있는지예요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '논설 짝 점검',
          items: [
            { type: 'table', prompt: '짝의 논설을 점검하세요.', columns: ['기준', '○/△', '찾은 문장'], cells: [['사실과 해석 나눔', '', ''], ['사료 근거', '', ''], ['정확한 인용', '', ''], ['존중하는 표현', '', '']] },
            { type: 'short', prompt: '짝의 글에서 고치면 더 좋아질 문장 하나와 고친 문장을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 2. 4·19혁명 기념일 — 선거의 공정성
  // ======================================================================================================
  {
    const M = MOD('april19');
    const MEMO = { type: 'bar', title: '기억 방식별 접근성 점수(가상 학급 설문, 5점)', yLabel: '평균 점수', xLabel: '기억 방식', max: 5, showTable: true, data: [['장소(국립묘지 방문)', 2], ['기록(기록물 열람)', 4], ['의례(기념식 시청)', 3]] };
    const FAKE = { text: '선거를 앞둔 저녁, 반 단체 대화방에 "이번 투표는 도장을 두 번 찍어도 된대!"라는 글이 출처 없이 올라왔다(가상 장면).', who: '나', motif: 'cloud', choices: [
      { id: 'share', text: '친구들도 알아야 하니 다른 방에 바로 퍼 나른다', result: '글이 세 개 방으로 퍼지고, 몇몇은 그대로 믿는다.', impact: [{ who: '친구들', text: '잘못 알고 투표할 수 있다', tone: -1 }],
        next: { text: '한 친구가 "이거 진짜야? 출처 있어?"라고 묻는다.', choices: [
          { id: 'insist', text: '"다들 그렇대"라고 답한다', result: '확인 없이 말이 더 퍼진다.', impact: [{ who: '친구들', text: '혼란이 커진다', tone: -1 }], ending: '"다들 그렇대"는 근거가 아니다.' },
          { id: 'retract', text: '퍼 나른 글을 지우고 확인해 보겠다고 한다', result: '늦었지만 퍼짐이 멈춘다.', impact: [{ who: '친구들', text: '다시 확인할 기회가 생긴다', tone: 0 }], ending: '잘못 퍼 나른 것을 바로잡는 것도 책임이다.' }] } },
      { id: 'check', text: '퍼 나르기 전에 출처부터 찾아본다', result: '글 어디에도 누가 언제 발표했는지 없다.', impact: [{ who: '나', text: '믿을 근거가 없다는 것을 안다', tone: 1 }],
        next: { text: '어디서 확인할지 고른다.', choices: [
          { id: 'official', text: '선거를 관리하는 공식 기관의 안내를 찾는다', result: '투표 방법 안내에서 바른 기표 방법을 확인한다.', impact: [{ who: '나', text: '사실을 확인했다', tone: 1 }],
            next: { text: '확인한 내용을 대화방에 알릴지 고른다.', choices: [
              { id: 'reply', text: '공식 안내 링크를 붙여 차분히 바로잡는다', result: '친구들이 안내를 보고 고마워한다.', impact: [{ who: '친구들', text: '바른 정보로 투표한다', tone: 1 }], ending: '근거와 출처를 붙인 차분한 정정이 허위 정보를 멈춘다.' },
              { id: 'mock', text: '"이걸 믿냐"며 올린 친구를 놀린다', result: '말다툼이 나고 정정은 묻힌다.', impact: [{ who: '올린 친구', text: '부끄러워 대화방을 나간다', tone: -1 }], ending: '사실이 맞아도 비웃으면 정정이 전해지지 않는다.' }] } },
          { id: 'comment', text: '댓글이 많은 게시물을 찾아 믿는다', result: '댓글마다 말이 달라 더 헷갈린다.', impact: [{ who: '나', text: '여전히 확인하지 못했다', tone: 0 }], ending: '댓글 수는 사실의 근거가 아니다.' }] } },
      { id: 'ignore', text: '그냥 못 본 척 넘긴다', result: '나는 퍼 나르지 않았지만 글은 그대로 남는다.', impact: [{ who: '친구들', text: '몇몇은 잘못 알고 있다', tone: 0 }], ending: '퍼 나르지 않는 것은 시작이고, 확인해 알리면 더 나아간다.' }] };
    const FAKE_R = [{ id: 'source', text: '누가 언제 발표했는지 확인할 수 있어야 믿을 수 있다' }, { id: 'official', text: '선거 정보는 공식 기관의 안내로 확인한다' }, { id: 'calm', text: '바로잡을 때는 사람이 아니라 정보를 두고 말한다' }, { id: 'many', text: '많은 사람이 말하면 사실이다', why: '여럿이 말해도 출처가 없으면 확인되지 않은 정보예요.' }, { id: 'fast', text: '빨리 알리는 것이 정확한 것보다 중요하다', why: '잘못된 정보를 빨리 퍼뜨리면 피해도 빨리 커져요.' }];

    MODS.push(
      M({
        id: 'intro.principle', type: 'intro', title: '선거의 4원칙 짝 짓기',
        method: '선거의 4원칙 이름 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 쌍(보통·비밀)만 함께 짝짓는다.', base: '네 원칙과 뜻을 모두 짝짓는다.', challenge: '원칙 하나를 어기면 어떤 일이 생길지 한 문장으로 말한다.' },
        intro: {
          teacher: '"헌법은 대통령과 국회의원 선거를 보통·평등·직접·비밀선거로 한다고 정해요. 네 낱말의 뜻을 짝지어 볼까요?" 시연 단추로 네 쌍이 짝지어지는 모습을 보여 준다. "비밀선거는 누구를 뽑았는지 말하면 안 된다는 뜻이에요"라는 말이 나오면 "말하는 것을 막는 걸까요, 남이 내 표를 보거나 강요하지 못하게 하는 걸까요?"라고 되묻는다. 1960년 3월 15일 선거에서 이 원칙들이 어떻게 무너졌는지 오늘 따라간다고 밝힌다.',
          student: '선거의 4원칙(보통·평등·직접·비밀) 낱말과 그 뜻을 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { speak: false, words: [{ en: '보통선거', ko: '일정한 나이가 되면 누구나 투표한다' }, { en: '평등선거', ko: '한 사람이 한 표, 표의 가치가 같다' }, { en: '직접선거', ko: '자기가 직접 투표한다' }, { en: '비밀선거', ko: '누구를 뽑았는지 남이 알 수 없다' }] }, sequence: [{ match: { 보통선거: '보통선거', 평등선거: '평등선거', 직접선거: '직접선거', 비밀선거: '비밀선거' } }] },
          art: { draw: 'a paper ballot box in the centre with four paper cards around it, a voting booth curtain, a single ballot paper and a hand dropping it in, calm spring colours', banner: '선거의 네 원칙' },
        },
        notes: '근거: 헌법 제41조·제67조(보통·평등·직접·비밀선거). 정당·후보·현실 선거 이야기는 꺼내지 않는다.',
      }),
      M({
        id: 'intro.forms', type: 'intro', title: '기억은 어떤 모습일까',
        method: '기억의 형태 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 보기 카드(국립묘지·기념식)를 먼저 보이고 함께 붙인다.', base: '장소·기록·의례 가지마다 카드 하나 이상을 학생이 붙인다.', challenge: '4·19를 기억하는 장소가 있는 지역(서울 국립4·19민주묘지 등)을 말한다.' },
        intro: {
          teacher: '"한 사건을 사회가 기억하는 방식에는 무엇이 있을까요? 장소, 기록, 의례로 나눠 볼게요." 시연 단추로 카드가 세 가지에 붙는 모습을 보여 준다. "기억은 그냥 머릿속에 하는 거 아니에요?"라는 말이 나오면 "100년 뒤 사람도 알 수 있게 하려면 무엇이 남아야 할까요?"라고 되묻는다. 오늘은 4·19를 기억하는 방식을 기준을 세워 견준다고 밝힌다.',
          student: '\'4·19를 기억하는 방법\' 카드를 장소·기록·의례 가지에 붙여 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '4·19를 기억하는 방법', slots: ['장소', '기록', '의례'], cards: ['국립4·19민주묘지', '당시 신문·사진 보존', '4월 19일 기념식', '기념탑', '증언 기록', '묵념'] }, sequence: [{ sort: { 장소: ['국립4·19민주묘지', '기념탑'], 기록: ['당시 신문·사진 보존', '증언 기록'], 의례: ['4월 19일 기념식', '묵념'] } }] },
          art: { draw: 'a paper mind map with three branches: a memorial tower, a stack of old newspapers and photographs, and rows of paper people bowing at a ceremony, spring blossoms around', banner: '기억의 세 모습' },
        },
      }),
      M({
        id: 'intro.post', type: 'intro', title: '선거 게시물 첫인상',
        method: '선거 게시물 첫인상 판단', tool: 'emotion', minutes: 6,
        levels: { easy: '믿음의 정도를 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 말한다.', challenge: '이 글이 사실인지 확인할 방법을 하나 말한다.' },
        intro: {
          teacher: '"가상 게시물이에요. \'이번 학생회 선거, 이미 결과가 정해졌다더라. 아는 사람한테 들음.\' 얼마나 믿음이 가나요?" 손을 들어 1~5에 표시하게 한 뒤 시연 단추로 눈금을 보여 준다. "많이 공유됐으면 맞는 거죠"라는 말이 나오면 "공유 수와 사실 사이에 어떤 관계가 있을까요? 이 글에서 누가 언제 말했는지 보이나요?"라고 되묻는다. 첫인상은 누구나 가질 수 있고, 오늘은 그 첫인상을 근거로 확인하는 법을 배운다고 밝힌다.',
          student: '가상 게시물을 읽고, 얼마나 믿음이 가는지 눈금으로 골라 보세요. 정답은 없어요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 게시물: "이번 학생회 선거, 이미 결과가 정해졌다더라. 아는 사람한테 들음."', feeling: '걱정', steps: 5, scaleLabels: { 1: '전혀 안 믿긴다', 5: '아주 믿긴다' }, ask: '이 글이 얼마나 믿기나요?' }, sequence: [{ level: 2 }] },
          art: { draw: 'a paper smartphone showing a blurry post with many share arrows, a question mark cloud above it, and a magnifying glass resting on the edge of the phone', banner: '믿어도 될까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '게시물은 가상 학생회 선거다. 실제 선거·정당·후보 이야기는 꺼내지 않는다.',
      }),

      M({
        id: 'activity.analyze', type: 'activity', title: '어긴 원칙 찾기',
        method: '부정 선거 방식과 어긴 원칙 잇기', tool: 'sortboard', minutes: 18,
        levels: { easy: '부정 선거 카드 4장(칸마다 1장)만 나누고, 틀린 바구니는 바로 알려 준다.', base: '카드 8장을 네 원칙 바구니로 나누고, 오늘 학생회 선거 장면을 지킴·어김으로 나눈다.', challenge: '카드를 섞어 시작하고, 오늘 선거에서 각 원칙을 지키는 장치를 나눈다.' },
        activity: {
          title: '어긴 원칙 찾기', tool: 'sortboard',
          teacher: '"1960년 3월 15일 선거에서는 미리 표를 넣어 두거나, 조를 짜서 서로의 표를 보게 하는 일이 있었다고 교과서는 써요. 각 방식은 어떤 원칙을 무너뜨렸을까요?" 카드를 넣을 때마다 "이 방식 때문에 누가 무엇을 잃나요?"라고 묻는다. \'조를 짜서 공개 투표\'를 평등 칸에 넣는 학생에게 "표의 수가 달라졌나요, 아니면 남이 내 표를 보게 됐나요?"라고 되묻는다. 원칙은 장치로 지켜진다는 점을 3번 문항에서 짚는다.',
          task: '부정 선거 방식 카드를 어긴 원칙 바구니에 나누고, 오늘의 선거 장면과 장치에 원칙을 적용해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('부정 선거 방식 카드를 어긴 원칙 바구니에 나누세요.', ['보통선거', '평등선거', '직접선거', '비밀선거'], [
              ['투표할 사람에게 투표 안내를 주지 않기', '투표하러 온 사람을 겁주어 돌려보내기'],
              ['투표 전 투표함에 미리 표를 넣어 두기', '한 사람이 여러 번 투표하기'],
              ['다른 사람이 대신 투표지를 넣기', '이미 숨진 사람 이름으로 투표하기'],
              ['조를 짜서 서로 표를 보며 투표하기', '감시하는 사람 앞에서 기표하게 하기'],
            ], { k: 1, d: 0.35 }),
            SBQ('가상 학생회 선거 장면을 원칙 지킴·어김으로 나누세요.', ['원칙을 지킨 장면', '원칙을 어긴 장면'], [
              ['투표지를 접어 가림막 안에서 기표한다', '전교생에게 투표 안내를 똑같이 보낸다', '학생증으로 본인을 확인한다'],
              ['반장이 친구 투표지를 대신 써 준다', '후보 친구가 기표소 옆에서 지켜본다', '한 반만 투표 시간을 짧게 준다'],
            ], { k: 2, d: 0.3 }),
            SBQ('오늘 선거의 장치를 지키는 원칙 바구니에 나누세요.', ['평등선거', '직접선거', '비밀선거'], [
              ['한 사람에게 투표지 한 장만 주기'], ['신분증으로 본인 확인하기'], ['가림막이 있는 기표소'],
            ], { k: 1, hard: [['선거인 명부에 한 번만 서명'], ['본인만 투표소에 들어가기'], ['투표지를 접어서 넣기']], d: 0.35, more: { conclude: '선거의 원칙은 선언만으로 지켜지지 않아요. 기표소 가림막, 본인 확인, 한 사람 한 장 같은 장치가 원칙을 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원칙마다 1960년의 어김과 오늘의 장치를 정리하세요.', columns: ['원칙', '1960년 어긴 방식', '오늘 지키는 장치'], cells: [['평등', '', ''], ['직접', '', ''], ['비밀', '', '']] }] },
        notes: '부정 선거 방식은 교과서 서술 범위(미리 넣은 표·조를 짠 공개 투표·대리 투표)만 쓴다. 학생회 장면은 가상이다.',
      }),
      M({
        id: 'activity.line', type: 'activity', title: '1960년 봄의 시간 띠',
        method: '부정 선거에서 헌법 개정까지 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '카드 4장(2·28부터 하야 발표까지)만 차례대로 놓는다.', base: '카드 6장을 차례대로 놓고, 날짜 칸에 사건을 짝지은 뒤 사건 사이의 연결 문장을 고른다.', challenge: '카드를 섞어 시작하고, 활동지에 사건마다 다음 사건과의 연결을 한 줄씩 쓴다.' },
        activity: {
          title: '1960년 봄의 시간 띠', tool: 'timeline',
          teacher: '"1960년 2월부터 6월까지, 학생 시위에서 헌법 개정까지 이어진 일을 시간 띠에 놓아 봐요." 놓을 때마다 "앞 사건이 다음 사건에 어떤 영향을 주었을까요?"라고 묻는다. 대통령 하야 발표를 4월 19일보다 앞에 두는 학생에게 "시위가 커진 뒤일까요, 먼저일까요?"라고 되묻는다. 2·28, 3·15, 4·19가 이어진 민주 운동이라 모두 국가 기념일로 기억한다는 점을 짚는다.',
          task: '1960년 봄의 사건을 일어난 차례대로 놓고, 날짜와 짝짓고, 사건 사이의 연결을 골라요.', levels: LIVE,
          items: [
            ORDERQ('1960년 2월부터 6월까지의 사건을 일어난 차례대로 놓으세요.', ['대구 학생 2·28 시위', '3·15 부정 선거', '4월 19일 대규모 시위', '교수단 시국 선언', '대통령 하야 발표', '헌법 개정(6월)'], { k: 4, d: 0.3, opt: { axis: ['2월', '6월'] } }),
            MATCHQ('날짜 칸에 그날의 사건을 짝지으세요.', [['2월 28일', '대구 학생들의 시위'], ['3월 15일', '정·부통령 선거와 부정 선거'], ['4월 19일', '전국으로 번진 대규모 시위']], { k: 2, d: 0.25, opt: { axis: ['2월', '4월'] } }),
            PICKQ('사건 사이의 연결을 바르게 설명한 카드만 고르세요.', ['부정 선거에 항의하는 시위가 4월 19일 전국으로 커졌다', '대통령 하야 뒤 헌법을 고쳐 정부 형태를 바꾸었다'], ['4·19는 3·15 선거보다 먼저 일어났다', '2·28 시위는 하야 발표 뒤의 일이다'], { d: 0.35, opt: { basket: '바른 연결', axis: ['2월', '6월'] }, more: { conclude: '2·28에서 시작된 항의가 3·15 부정 선거로 커지고, 4월 19일 전국 시위와 하야, 헌법 개정으로 이어졌어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '3·15 부정 선거와 4·19혁명이 어떻게 이어지는지 두 문장으로 쓰세요.' }] },
        notes: '헌법 전문은 \'불의에 항거한 4·19민주이념을 계승\'한다고 밝힌다. 사건 경위는 교과서 서술 범위로만 다룬다.',
      }),
      M({
        id: 'activity.compare', type: 'activity', title: '기억 방식 견주는 표',
        method: '기억 방식 견주는 표 만들기', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 점수가 보이고, 접근성 기준 하나로 견준다.', base: '값 표시 없이 막대와 표를 읽고 접근성·사실성 두 기준으로 견준다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 사실과 의견을 가른 뒤 활동지에 내 의견을 근거와 함께 쓴다.' },
        activity: {
          title: '기억 방식 견주기', tool: 'chart',
          teacher: '"가상 학급 설문에서 기억 방식마다 \'누구나 쉽게 닿을 수 있는가(접근성)\' 점수를 매겼어요. 실제 통계가 아니라 우리 반 연습 자료예요." 막대를 읽은 뒤 사실성 기준으로 넘어간다. "점수가 가장 높으니 기록이 최고예요"라는 학생에게 "접근성 하나로 정할 수 있을까요? 그 자리에 직접 가 보는 경험은 무엇을 줄까요?"라고 되묻는다. 마지막 문항에서 \'설문 결과\'는 사실이고 \'그래서 최고다\'는 의견이라는 점을 짚는다.',
          task: '가상 설문 막대와 표를 읽고, 기억 방식을 접근성·사실성 기준으로 견주어 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            CPICK('가상 설문에서 접근성 점수가 가장 높은 기억 방식을 고르세요.', MEMO, '가장 높은 막대는?', ['장소(국립묘지 방문)', '기록(기록물 열람)', '의례(기념식 시청)'], 1, { d: 0.15 }),
            CVAL('가장 높은 점수와 가장 낮은 점수의 차는 몇 점인가요?', MEMO, '점수 차는?', 2, { d: 0.25 }),
            CPICK('\'사실성\'(사건을 정확히 전하는가) 기준에서 가장 근거가 분명한 설명을 고르세요.', MEMO, '사실성을 보는 기준은?', ['당시 신문·사진·증언을 원본 그대로 보존한다', '기념식 노래가 감동적이다', '묘지가 넓고 아름답다'], 0, { why: ['', '감동은 중요하지만 사실을 전하는지와는 다른 기준이에요.', '넓이는 사실을 전하는 정도와 관계가 없어요.'], d: 0.3 }),
            CPICK('다음 가운데 \'사실\'인 문장을 고르세요.', MEMO, '사실인 문장은?', ['가상 설문에서 기록의 접근성 점수가 가장 높다', '그러므로 기록이 가장 좋은 기억 방식이다', '장소 방문은 필요 없다'], 0, { why: ['', '\'가장 좋다\'는 판단이 들어간 의견이에요.', '설문 점수만으로 내린 의견이에요.'], d: 0.35, more: { conclude: '기억 방식은 하나만 고를 것이 아니라 기준마다 장단점이 달라요. 사실(점수)과 의견(그러니 최고다)을 나누면 토의가 차분해져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기억 방식을 두 기준으로 견주세요.', columns: ['방식', '접근성', '사실성', '내 의견'], cells: [['장소', '', '', ''], ['기록', '', '', ''], ['의례', '', '', '']] }] },
        notes: '설문 점수는 수업용 가상 값이다. 기억 방식의 가치를 하나로 정하지 않는다.',
      }),
      M({
        id: 'activity.discuss', type: 'activity', title: '기념 방식 토의',
        method: '기념 방식 토의 진행', tool: 'timer', minutes: 18,
        levels: { easy: '토의 순서 카드 3장만 놓고, 문항 글에 적힌 시간대로 맞춘다.', base: '순서 카드 4장을 놓고, 네 명의 발언 시간을 스스로 셈해 맞춘 뒤 마친 뒤 점검한다.', challenge: '마친 뒤 점검에 \'모둠 합의안을 기록했다\'가 더해진다.' },
        activity: {
          title: '기념 방식 토의', tool: 'timer',
          teacher: '"우리 학교가 4·19를 어떻게 기념하면 좋을지 토의해요. 규칙은 두 가지예요. 말할 때 \'사실은…\', \'내 의견은…\'으로 시작하기, 그리고 한 사람 2분." 순서를 놓고 타이머를 맞춘 뒤 신호에 맞춰 진행한다. 다른 사람 말을 끊는 모둠에게 "타이머가 끝날 때까지 기다린 뒤 질문으로 이어 볼까요?"라고 말한다. "의견은 다 다르니 정할 수 없어요"라는 말에는 "모두가 받아들일 수 있는 조건부터 찾아볼까요?"라고 되묻는다.',
          task: '토의 순서를 놓고 발언 타이머를 맞춰 토의한 뒤, 토의 점검표에 표시해요.', levels: NONE,
          items: [
            TORDER('기념 방식 토의의 순서 카드를 차례대로 놓으세요.', '기념 방식 토의 순서', ['쟁점 확인', '돌아가며 발언', '질문 주고받기', '합의 정리'], { k: 3 }),
            TPLAN('네 명이 한 사람 2분씩, 쉬는 시간 없이 차례로 말하도록 발언 타이머를 맞추세요.', '발언 타이머', { work: 2, rest: 0, rounds: 4 }, ['발언', '쉬기'], { easy: '발언 2분, 쉬기 0분, 4번으로 맞추세요.' }),
            TCHECK('토의를 마친 뒤 토의 점검표에 표시하세요.', '토의 점검', ['말할 때 사실과 의견을 밝혔다', '다른 사람 말을 끊지 않았다', '근거를 들어 의견을 냈다'], { plus: '모둠 합의안을 기록했다', more: { conclude: '토의의 목적은 이기는 것이 아니라, 사실과 의견을 나누어 모두가 받아들일 수 있는 방식을 찾는 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '토의 기록을 남기세요.', columns: ['나온 안', '근거(사실)', '의견'], cells: [['', '', ''], ['', '', ''], ['합의안', '', '']] }] },
        notes: '교사가 신호와 시간을 진행한다. 토의 내용은 채점하지 않는다.',
      }),
      M({
        id: 'activity.fake', type: 'activity', title: '선거 허위 정보 갈림길',
        method: '선거 허위 정보에 대응하는 갈림길과 글', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(확인할 곳 고르기)까지 따라가고 근거를 고른다.', challenge: '세 번째 갈림길(공식 확인처를 찾은 뒤 알리는 방법)까지 가고, 다른 길도 끝까지 가 본다.' },
        activity: {
          title: '선거 허위 정보 갈림길', tool: 'dilemma',
          teacher: '"가상 장면이에요. 반 단체 대화방에 출처 없는 선거 정보가 올라왔어요. 여러분은 어떻게 하나요?" 고를 때마다 "이 선택은 누구에게 어떤 영향을 줄까요?"라고 묻는다. 퍼 나르기를 고른 학생에게 "친구를 도우려던 마음은 좋았어요. 그런데 그 정보가 틀렸다면?"이라고 묻는다. 선거 정보는 선거를 관리하는 공식 기관의 안내로 확인한다는 점을 짚는다. 2번 문항에서는 다른 길을 끝까지 가 보고 견주게 한다.',
          task: '출처 없는 선거 정보를 받은 장면에서 확인 방법을 고르고 결과를 끝까지 따라가요.', levels: NONE,
          items: [
            DILQ('출처 없는 선거 정보를 받은 장면에서 선택하고, 내 선택의 근거를 고르세요.', FAKE, [['check', 'official', 'reply']], FAKE_R, ['source', 'official', 'calm'], { opt: { title: '출처 없는 선거 정보' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', FAKE, FAKE_R, ['두 길의 결과를 견주었다', '누가 영향을 받는지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('공식 안내를 확인한 뒤, 친구를 탓하지 않고 바로잡는 길을 고르세요.', FAKE, [['check', 'official', 'reply']], FAKE_R, ['official', 'calm'], { d: 0.45, opt: { title: '차분히 바로잡기' }, more: { conclude: '출처를 확인하고, 공식 안내로 근거를 대고, 사람이 아니라 정보를 두고 바로잡으면 허위 정보가 멈춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '출처 없는 선거 정보를 받았을 때 내가 할 확인 순서를 세 단계로 쓰세요.' }] },
        notes: '장면은 가상이다. 실제 선거·정당·후보와 잇지 않는다. 바른 기표 방법은 선거 관리 기관의 공식 안내로 확인하게 한다.',
      }),
      M({
        id: 'activity.reply', type: 'activity', title: '근거로 답하는 대응 글',
        method: '근거로 답하는 대응 글 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀을 보고 쓴다.', base: '네 문장(정보 짚기·근거·출처·존중하는 맺음)을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 예상되는 반박에 대한 답까지 쓴다.' },
        activity: {
          title: '근거로 답하는 글', tool: 'rubric-writing',
          teacher: '"가상 게시물 \'투표는 도장을 두 번 찍어도 된다더라\'에 답글을 써 봐요. 좋은 답글은 틀린 정보를 짚고, 공식 자료를 근거로 대고, 올린 사람을 탓하지 않아요." 쓰기 전에 기준표를 함께 읽는다. "그거 가짜야, 바보야"처럼 쓴 학생에게 "사실은 맞아도, 이 말을 들은 사람이 정정을 받아들일까요?"라고 묻는다. 출처는 \'어느 기관이 낸 어떤 안내\'처럼 구체적으로 쓰게 한다.',
          task: '출처 없는 가상 게시물에 공식 자료를 근거로 차분히 답하는 글을 쓰고 기준표로 점검해요.', levels: NONE,
          items: [
            RWQ('게시물의 어느 부분이 확인되지 않았는지 짚는 1~2문장을 쓰세요.', '가상 게시물 "투표는 도장을 두 번 찍어도 된다더라"에서 확인되지 않은 부분을 짚으세요.', ['확인되지 않은 주장을 정확히 짚었다', '올린 사람을 탓하지 않았다', '단정 대신 확인을 권했다'], { min: 30, max: 250, sent: [1, 3], starter: '이 글에는 ~가 나와 있지 않아요.', plus: '왜 그 부분이 중요한지 덧붙였다', d: 0.35 }),
            RWQ('공식 자료를 근거와 출처로 드는 2문장을 쓰세요.', '선거를 관리하는 공식 기관의 안내를 근거로 바른 정보를 쓰고 출처를 밝히세요.', ['공식 기관을 출처로 밝혔다', '바른 정보를 정확히 썼다', '확인할 수 있는 방법을 알렸다'], { min: 40, max: 300, sent: [2, 3], must: [['공식', '선거관리', '안내']], starter: '공식 안내에 따르면 ~. 출처는 ~', plus: '출처를 찾는 방법까지 안내했다', d: 0.4 }),
            RWQ('존중하는 말로 맺는 1~2문장을 쓰세요.', '함께 확인하자는 존중하는 말로 답글을 맺으세요.', ['비웃거나 깎아내리는 말이 없다', '함께 확인하자고 권했다', '사람이 아니라 정보를 두고 말했다'], { min: 20, max: 200, sent: [1, 3], starter: '혹시 헷갈렸다면 ~', plus: '"다들 그렇대"라는 반박에 대한 답을 썼다', d: 0.35, more: { conclude: '좋은 정정 글은 틀린 부분을 짚고, 공식 근거를 대고, 사람을 존중해요. 그래야 정정이 끝까지 전해져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 답글을 기준표로 점검하세요.', columns: ['기준', '내 글의 문장'], cells: [['확인 안 된 부분 짚기', ''], ['근거·출처', ''], ['존중하는 맺음', '']] }] },
      }),

      M({
        id: 'wrap.system', type: 'wrap', title: '공정 선거를 지키는 제도 하나',
        method: '공정 선거를 지키는 제도 하나 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 \'원칙 1쌍\' 문장 틀(\'___ 은 ___ 선거를 지킨다\')을 보고 쓴다.', base: '제도 하나와 그것이 지키는 원칙 두 가지를 이어 쓴다.', challenge: '그 제도가 없으면 생길 일까지 자기 말로 쓴다.' },
        wrap: {
          teacher: '"오늘 본 장치 가운데 하나를 골라, 그것이 어떤 원칙을 지키는지 한두 문장으로 써 봐요." 쓰기 전에 기준표를 함께 읽는다. "투표소가 공정 선거를 지킨다"처럼 넓게 쓰는 학생에게 "투표소 안의 어떤 장치가 어떤 원칙을 지키나요?"라고 묻는다. 출구 2번에서 \'조를 짠 공개 투표\'를 평등선거 위반으로 고른 학생에게 남이 표를 보게 된 장면을 다시 떠올리게 한다.',
          exitTicket: [
            XRW('공정 선거를 지키는 제도 하나를 한두 문장으로 쓰고 기준표로 점검하세요.', '오늘 배운 공정 선거 장치 하나와 그것이 지키는 원칙을 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['선거']], sample: '기표소 가림막은 누구를 뽑았는지 남이 볼 수 없게 해 비밀선거를 지킨다. 그래서 누구도 강요받지 않고 자기 뜻대로 투표할 수 있다.' }),
            XCHOICE('1960년 \'조를 짜서 서로 표를 보며 투표하기\'가 가장 직접 무너뜨린 원칙을 고르세요.', ['보통선거', '평등선거', '비밀선거'], 2, '남이 내 표를 보게 되면 비밀선거가 무너져요. 그러면 강요가 쉬워져요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '공정 선거를 지키는 장치',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '헌법은 선거를 보통·평등·직접·___ 선거로 한다고 정한다.', answer: '비밀' },
            { type: 'short', prompt: '내가 고른 장치가 없다면 어떤 일이 생길 수 있는지 한 문장으로 쓰세요.' },
          ],
          easy: { note: '\'___ 은 ___ 선거를 지킨다.\'', items: [{ type: 'short', prompt: '장치 하나와 원칙 하나를 넣어 문장을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.agree', type: 'wrap', title: '토의에서 얻은 생각',
        method: '토의 성찰 한 줄', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 카드 하나를 함께 고르며 사실·의견 가지에 붙인다.', base: '토의 카드를 사실·의견 가지에 모두 붙이고 까닭을 한 줄 쓴다.', challenge: '토의 전과 뒤에 바뀐 내 생각을 한 줄 더 쓴다.' },
        wrap: {
          teacher: '"오늘 토의에서 나온 말을 사실과 의견으로 다시 나눠 봐요. 의견이 틀린 게 아니라, 근거를 따져 볼 말이라는 뜻이에요." 마인드맵을 붙인 뒤 내 생각을 한 줄 쓰게 한다. "\'기념식이 중요하다\'는 당연하니까 사실이에요"라는 학생에게 "모두가 확인할 수 있는 자료로 보일 수 있나요, 아니면 판단인가요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '토의에서 나온 말', slots: ['사실', '의견'], cards: ['4월 19일에 기념식이 열린다', '국립4·19민주묘지는 서울에 있다', '기념식보다 기록 보존이 더 중요하다', '학교 기념 활동은 전시가 가장 좋다'] }, prompt: '토의에서 나온 말을 사실과 의견 가지로 나누세요.', target: { sort: { 사실: ['4월 19일에 기념식이 열린다', '국립4·19민주묘지는 서울에 있다'], 의견: ['기념식보다 기록 보존이 더 중요하다', '학교 기념 활동은 전시가 가장 좋다'] } }, difficulty: 0.2 },
            XSHORT('토의에서 얻은 생각 하나와, 바뀐 생각이 있다면 그 까닭을 한 줄로 쓰세요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '토의 돌아보기',
          items: [
            { type: 'short', prompt: '토의에서 가장 설득력 있던 근거 하나를 쓰세요.' },
            { type: 'check', prompt: '오늘 내가 지킨 토의 규칙에 표시하세요.', options: ['사실과 의견을 밝혔다', '말을 끊지 않았다', '근거를 들었다', '다른 의견을 정리해 말했다'] },
          ],
        },
      }),
      M({
        id: 'wrap.rule', type: 'wrap', title: '나의 정보 확인 규칙',
        method: '나의 정보 확인 규칙 점검', tool: 'timer', minutes: 8,
        levels: { easy: '점검 항목 앞 세 개를 교사와 함께 읽고 표시한다.', base: '다섯 항목을 스스로 읽고 모두 표시한다.', challenge: '선거 때 실천할 규칙 하나를 활동지에 날짜와 함께 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 확인 방법을 내 규칙으로 만들어 봐요. 다섯 항목을 읽고, 앞으로 지킬 것에 표시해요." 점검을 마친 뒤 출구 2번으로 넘어간다. "다 알지만 바쁘면 못 해요"라는 학생에게 "다섯 개 가운데 가장 짧게 할 수 있는 하나는 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 정보 확인 규칙' }, prompt: '정보 확인 규칙 다섯 칸을 읽고 앞으로 지킬 것으로 모두 표시하세요.', target: { selfCheck: ['누가 언제 발표했는지 본다', '공식 기관 안내와 견준다', '확인 전에는 퍼 나르지 않는다', '틀린 것을 알면 지우고 바로잡는다', '바로잡을 때 사람을 탓하지 않는다'] }, difficulty: 0.15 },
            XCHOICE('출처 없는 선거 정보를 받았을 때 가장 먼저 할 일을 고르세요.', ['바로 친구들에게 퍼 나른다', '누가 언제 발표했는지 확인한다', '댓글이 많으면 믿는다'], 1, '출처를 먼저 보고, 공식 기관 안내와 견주어 확인해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 정보 확인 규칙',
          items: [
            { type: 'short', prompt: '내 정보 확인 규칙 가운데 가장 먼저 지킬 하나를 쓰세요.' },
            { type: 'short', prompt: '선거 정보를 확인할 공식 기관 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 과학의 날 — 연구 윤리와 과학 소통
  // ======================================================================================================
  {
    const M = MOD('science');
    const STUDY = { text: '가상 인물 하은에게 대학 연구팀이 \'고등학생 수면 연구\'에 참여해 달라고 했다. 일주일 동안 손목 기기를 차고 설문에 답하는 연구다.', who: '하은', motif: 'moon', choices: [
      { id: 'sign', text: '동의서를 읽지 않고 바로 서명한다', result: '나중에 설문에 집 주소와 연락처 칸이 있는 것을 본다.', impact: [{ who: '하은', text: '내 정보가 어떻게 쓰이는지 모른다', tone: -1 }],
        next: { text: '사흘째, 기기를 차고 자는 것이 불편해졌다.', choices: [
          { id: 'endure', text: '서명했으니 끝까지 참는다', result: '잠을 설치며 일주일을 채운다.', impact: [{ who: '하은', text: '몸이 피곤해진다', tone: -1 }], ending: '동의는 한 번 서명으로 끝나는 의무가 아니다.' },
          { id: 'ask', text: '연구팀에 그만둘 수 있는지 묻는다', result: '언제든 그만둘 수 있다는 답을 듣는다.', impact: [{ who: '하은', text: '그만둘 권리를 알게 된다', tone: 1 }], ending: '모르면 묻는 것이 참여자의 권리다.' }] } },
      { id: 'read', text: '동의서를 끝까지 읽고 궁금한 점을 적는다', result: '연구 목적·기간·위험·정보 보호·그만둘 권리가 적혀 있다.', impact: [{ who: '하은', text: '무엇에 동의하는지 안다', tone: 1 }],
        next: { text: '보호자 동의 칸이 따로 있다.', choices: [
          { id: 'parent', text: '보호자와 동의서를 함께 읽는다', result: '보호자가 연락처 칸을 묻고, 연구팀이 정보 보호 방법을 설명한다.', impact: [{ who: '하은', text: '함께 판단한다', tone: 1 }],
            next: { text: '사흘째, 기기 때문에 잠이 불편해졌다.', choices: [
              { id: 'quit', text: '연구팀에 알리고 그만둔다', result: '연구팀이 불이익 없이 참여를 멈춘다.', impact: [{ who: '하은', text: '몸을 지킨다', tone: 1 }], ending: '참여자는 언제든 불이익 없이 그만둘 수 있다.' },
              { id: 'silent', text: '말없이 기기를 빼 두고 설문만 한다', result: '연구 자료가 엉키고 연구팀은 까닭을 모른다.', impact: [{ who: '연구팀', text: '자료를 믿기 어렵다', tone: -1 }], ending: '그만둘 때도 알리면 나와 연구 모두를 지킨다.' }] } },
          { id: 'skip', text: '보호자 칸은 내가 대신 채운다', result: '연구팀이 확인 과정에서 다시 동의를 받으라고 한다.', impact: [{ who: '하은', text: '참여가 늦어진다', tone: 0 }], ending: '보호자 동의는 대신 채울 수 있는 칸이 아니다.' }] } },
      { id: 'refuse', text: '잘 모르겠어서 바로 거절한다', result: '참여하지 않아도 아무 불이익이 없다.', impact: [{ who: '하은', text: '부담 없이 결정했다', tone: 0 }], ending: '참여하지 않을 자유도 참여자의 권리다.' }] };
    const STUDY_R = [{ id: 'info', text: '무엇에 동의하는지 알고 동의해야 진짜 동의다' }, { id: 'quit', text: '참여자는 언제든 불이익 없이 그만둘 수 있다' }, { id: 'guard', text: '미성년자는 보호자와 함께 판단한다' }, { id: 'paper', text: '서명했으면 끝까지 해야 한다', why: '동의는 언제든 거둘 수 있어요. 서명은 의무가 아니에요.' }, { id: 'reward', text: '보상이 크면 위험은 상관없다', why: '보상과 별개로 위험을 알고 판단해야 해요.' }];
    MODS.push(
      M({
        id: 'intro.consent', type: 'intro', title: '연구 참여 동의서 한 장',
        method: '연구 참여 동의서 한 장 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 두 장(연구 목적·그만둘 권리)만 짚으며 함께 고른다.', base: '보기 여섯 장 가운데 동의서에 꼭 있어야 할 네 장을 학생이 고른다.', challenge: '그 항목이 빠지면 참여자에게 어떤 일이 생길지 말한다.' },
        intro: {
          teacher: '"과학의 날이에요. 과학 연구에는 사람이 참여하기도 해요. 여러분이 연구에 참여해 달라는 동의서를 받았다면 무엇이 적혀 있어야 안심할 수 있을까요?" 대답을 듣고 시연 단추로 꼭 있어야 할 항목이 바구니에 담기는 모습을 보여 준다. "동의서는 그냥 서명하는 종이 아니에요?"라는 말이 나오면 "무엇에 동의하는지 모르고 한 서명을 동의라고 할 수 있을까요?"라고 되묻는다. 오늘은 연구 윤리 제도를 장면에 적용해 본다고 밝힌다.',
          student: '가상 연구 참여 동의서를 떠올리며, 동의서에 꼭 있어야 할 항목 카드를 바구니에 골라 담아 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '동의서에 꼭 있어야 할 것', title: '가상 연구 동의서', shuffle: false, cards: [
            { id: 'aim', text: '연구 목적과 기간', motif: 'book' }, { id: 'risk', text: '생길 수 있는 위험', motif: 'cloud' }, { id: 'brand', text: '연구팀이 좋아하는 색', motif: 'flower' },
            { id: 'quit', text: '언제든 그만둘 수 있음', motif: 'house' }, { id: 'force', text: '안 하면 받는 불이익', motif: 'storm' }, { id: 'data', text: '개인정보 보호 방법', motif: 'star' }] }, sequence: [{ pick: ['aim', 'risk', 'quit', 'data'] }] },
          art: { draw: 'a paper consent form on a clipboard with checkboxes, a paper pen, a small paper brain and a heart icon beside it, a laboratory flask in the background', banner: '무엇에 동의하나요?' },
        },
        notes: '동의서는 가상이다. 실제 연구 참여를 권하지 않는다.',
      }),
      M({
        id: 'intro.heritage', type: 'intro', title: '과학 유산과 쓰임',
        method: '과학 유산과 쓰임 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 쌍(측우기·앙부일구)만 함께 짝짓는다.', base: '세 유산(측우기·앙부일구·자격루)과 쓰임을 모두 짝짓는다.', challenge: '오늘 같은 일을 하는 기술(강수량계·시계 등)을 하나씩 말한다.' },
        intro: {
          teacher: '"과학의 날은 과학을 함께 나누는 날이기도 해요. 우리 과학 유산 세 가지와 쓰임을 짝지어 볼까요?" 시연 단추로 측우기·앙부일구·자격루가 쓰임과 짝지어지는 모습을 보여 준다. "옛날 과학은 지금과 상관없어요"라는 말이 나오면 "비의 양을 재는 일은 오늘 무엇이 하고 있을까요?"라고 되묻는다. 오늘 만들 과학 소통 카드는 이런 유산을 쉽고 정확하게 알리는 것이라고 잇는다.',
          student: '과학 유산 카드와 그 쓰임을 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { speak: false, words: [{ en: '측우기', ko: '비가 내린 양을 잰다' }, { en: '앙부일구', ko: '해 그림자로 시각을 안다' }, { en: '자격루', ko: '물의 흐름으로 시각을 알린다' }] }, sequence: [{ match: { 측우기: '측우기', 앙부일구: '앙부일구', 자격루: '자격루' } }] },
          art: { draw: 'three paper cut-outs of a rain gauge on a stone base, a bowl-shaped sundial and a water clock with stacked vessels, a paper sun and rain drops above them', banner: '우리 과학 유산' },
        },
      }),
      M({
        id: 'intro.issue', type: 'intro', title: '인공지능 기사 첫인상',
        method: '인공지능 기사 제목 첫인상', tool: 'emotion', minutes: 6,
        levels: { easy: '기대·우려의 정도를 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 말한다.', challenge: '판단을 바꾸려면 어떤 근거를 확인해야 할지 말한다.' },
        intro: {
          teacher: '"가상 기사 제목이에요. \'인공지능이 학생 숙제를 대신 써 준다\'. 기대가 큰가요, 우려가 큰가요?" 손을 들어 1~5에 표시하게 한 뒤 시연 단추로 눈금을 보여 준다. "무조건 좋다/무조건 나쁘다"는 말이 나오면 "기사 제목만 보고 판단했나요? 무엇을 더 알아야 할까요?"라고 되묻는다. 오늘은 과학기술 쟁점을 기대와 우려의 근거로 나누어 토의한다고 밝힌다.',
          student: '가상 기사 제목을 읽고, 내 마음이 기대 쪽인지 우려 쪽인지 눈금으로 골라 보세요. 정답은 없어요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 기사 제목: "인공지능이 학생 숙제를 대신 써 준다"', feeling: '걱정', steps: 5, scaleLabels: { 1: '기대가 크다', 5: '우려가 크다' }, ask: '지금 내 마음은 어느 쪽인가요?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper newspaper headline with a friendly paper robot holding a pencil, a student looking at it with one thought bubble of a star and one of a cloud', banner: '기대일까, 우려일까?' },
        },
        notes: '기사는 가상이다. 특정 회사·서비스 이름을 쓰지 않는다.',
      }),

      M({
        id: 'activity.match', type: 'activity', title: '연구 장면과 심의 제도',
        method: '연구 장면과 필요한 제도 잇기', tool: 'sortboard', minutes: 18,
        levels: { easy: '연구 장면 카드 3장(칸마다 1장)만 나누고, 틀린 바구니는 바로 알려 준다.', base: '장면 카드 6장을 세 제도 바구니로 나누고, 동의서 항목과 연구 장면을 차례로 나눈다.', challenge: '카드를 섞어 시작하고, 마지막 문항에 두 제도가 함께 필요한 장면 카드가 더해진다.' },
        activity: {
          title: '연구 장면과 심의 제도', tool: 'sortboard',
          teacher: '"사람이 참여하는 연구는 생명윤리 심의를, 개인정보를 모으면 개인정보 보호 규칙을, 동물을 쓰는 실험은 동물실험 심의를 거쳐요. 장면마다 어떤 제도가 필요할까요?" 카드를 넣을 때마다 "이 장면에서 누가 보호받아야 하나요?"라고 묻는다. "설문은 몸을 다치게 하지 않으니 심의가 필요 없어요"라는 학생에게 "설문 답이 밖으로 새면 누가 어떤 피해를 볼까요?"라고 되묻는다.',
          task: '연구 장면 카드를 필요한 제도 바구니로 나누고, 동의서 항목과 연구 장면을 지킴·어김으로 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('연구 장면 카드를 필요한 제도 바구니로 나누세요.', ['생명윤리 심의', '개인정보 보호', '동물실험 심의'], [
              ['사람의 혈액을 채취해 분석하는 연구', '고등학생에게 새 학습법을 적용하는 연구'],
              ['설문 응답자의 연락처를 모으는 일', '참여자 사진을 발표 자료에 싣는 일'],
              ['쥐에게 새 약을 시험하는 연구', '물고기를 기르며 반응을 보는 실험'],
            ], { k: 1, d: 0.3 }),
            SBQ('동의서 항목 카드를 있어야 할 것·있으면 안 되는 것으로 나누세요.', ['있어야 할 것', '있으면 안 되는 것'], [
              ['연구 목적과 기간', '생길 수 있는 위험', '언제든 그만둘 수 있다는 안내', '개인정보 보호 방법'],
              ['참여하지 않으면 성적에 불이익', '그만두면 위약금을 낸다', '위험은 알려 주지 않는다'],
            ], { k: 2, d: 0.3 }),
            SBQ('연구 장면을 윤리 지킴·어김으로 나누세요.', ['윤리를 지킴', '윤리를 어김'], [
              ['미성년자는 보호자 동의도 받는다', '이름 대신 번호로 자료를 정리한다'],
              ['동의 없이 설문 답을 공개한다', '그만두려는 참여자를 붙잡는다'],
            ], { k: 1, hard: [['모은 자료는 연구가 끝나면 정해진 대로 폐기한다'], ['참여자 사진을 허락 없이 누리집에 올린다']], d: 0.35, more: { conclude: '연구 윤리 제도는 연구를 막는 벽이 아니라, 참여자를 지키고 연구를 믿을 수 있게 만드는 약속이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사람의 혈액과 연락처를 함께 모으는 연구라면 어떤 제도가 모두 필요한지 까닭과 함께 쓰세요.' }] },
        notes: '제도 이름은 일반 명칭(기관생명윤리위원회·개인정보 보호·동물실험윤리위원회)만 쓰고 조항 번호는 쓰지 않는다.',
      }),
      M({
        id: 'activity.choose', type: 'activity', title: '연구 참여 갈림길',
        method: '연구 참여 장면 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(보호자 동의)까지 따라가고 근거 카드를 고른다.', challenge: '세 번째 갈림길(그만둘지)까지 가고, 근거 카드 두 장 이상을 고른다.' },
        activity: {
          title: '연구 참여 갈림길', tool: 'dilemma',
          teacher: '"가상 인물 하은이 수면 연구 참여를 권유받았어요. 하은이라면 어떻게 할까요?" 고를 때마다 "이 선택으로 하은이 무엇을 알게 되고 무엇을 놓치나요?"라고 묻는다. \'서명했으니 끝까지 참는다\'를 고른 학생에게 "동의를 거둘 권리는 서명 뒤에도 남아 있을까요?"라고 되묻는다. 참여를 거절하는 것도 존중받아야 할 선택이라는 점을 짚는다.',
          task: '연구 참여를 권유받은 하은이 되어 선택하고 결과를 끝까지 따라간 뒤, 내 선택의 근거를 골라요.', levels: NONE,
          items: [
            DILQ('하은이 되어 연구 참여 장면에서 선택하고 근거 카드를 고르세요.', STUDY, [['read', 'parent', 'quit']], STUDY_R, ['info', 'quit', 'guard'], { opt: { title: '연구 참여 권유' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', STUDY, STUDY_R, ['두 길의 결과를 견주었다', '참여자의 권리가 어디서 지켜졌는지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('거절도 존중받는 선택이에요. 바로 거절하는 길을 끝까지 가 보고 근거를 고르세요.', STUDY, [['refuse']], STUDY_R, ['info'], { d: 0.3, opt: { title: '거절하는 길' }, more: { conclude: '참여도, 거절도, 그만두기도 참여자의 권리예요. 알고 판단하는 것이 연구 윤리의 출발이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하은이 연구에 참여하기 전에 연구팀에 물어볼 질문 두 가지를 쓰세요.' }] },
      }),
      M({
        id: 'activity.steps', type: 'activity', title: '과학 소통 만드는 차례',
        method: '과학 소통 콘텐츠 만드는 차례 놓기', tool: 'timeline', minutes: 18,
        levels: { easy: '단계 카드 4장만 차례대로 놓고, 틀린 자리는 바로 알려 준다.', base: '단계 카드 6장을 차례대로 놓고, 단계와 할 일을 짝지은 뒤 빠뜨리기 쉬운 단계를 고른다.', challenge: '카드를 섞어 시작하고, 활동지에 빠뜨리기 쉬운 단계를 빠뜨리면 생길 일을 쓴다.' },
        activity: {
          title: '과학 소통 만드는 차례', tool: 'timeline',
          teacher: '"과학 유산 하나를 친구들에게 알리는 카드를 만든다면, 무엇부터 할까요?" 차례를 놓을 때마다 "이 단계를 건너뛰면 무엇이 잘못될 수 있나요?"라고 묻는다. 사실 확인을 맨 마지막에 두거나 빼는 학생에게 "쉽게 썼는데 틀린 내용이면, 쉬운 설명이 오히려 무엇을 퍼뜨릴까요?"라고 되묻는다. 쉬운 설명과 정확한 설명은 함께 가야 한다는 점을 짚는다.',
          task: '과학 소통 카드를 만드는 단계를 차례대로 놓고, 단계와 할 일을 짝지어요.', levels: LIVE,
          items: [
            ORDERQ('과학 소통 카드를 만드는 단계를 차례대로 놓으세요.', ['알릴 주제 정하기', '공식 자료 찾기', '사실과 출처 확인하기', '쉬운 말로 쓰기', '짝에게 검토받기', '고쳐서 게시하기'], { k: 4, d: 0.3, opt: { axis: ['처음', '끝'] } }),
            MATCHQ('단계 칸에 그 단계에서 할 일을 짝지으세요.', [['공식 자료 찾기', '박물관·연구 기관 자료를 모은다'], ['사실과 출처 확인하기', '두 자료 이상으로 날짜·쓰임을 견준다'], ['쉬운 말로 쓰기', '어려운 낱말을 풀어 쓴다'], ['짝에게 검토받기', '틀리거나 과장된 곳을 찾는다']], { k: 2, d: 0.3, opt: { axis: ['처음', '끝'] } }),
            PICKQ('사람들이 빠뜨리기 쉬운 단계 두 개를 고르세요.', ['사실과 출처 확인하기', '짝에게 검토받기'], ['알릴 주제 정하기', '고쳐서 게시하기'], { d: 0.35, opt: { basket: '빠뜨리기 쉬운 단계', axis: ['처음', '끝'] }, more: { conclude: '쉬운 설명일수록 확인과 검토가 더 중요해요. 틀린 내용을 쉽게 쓰면 틀린 것이 더 빨리 퍼져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사실 확인 단계를 빠뜨리면 생길 수 있는 일을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.make', type: 'activity', title: '과학의 날 소통 카드',
        method: '과학의 날 소통 카드 만들기', tool: 'collage', minutes: 18,
        levels: { easy: '모양 세 가지만 있는 고르개로, 제목 띠·그림·설명 칸 틀을 따라 꾸민다.', base: '모양 여러 가지로 카드 짜임을 스스로 정해 꾸미고 점검한다.', challenge: '마지막 문항에 \'출처 칸을 남겼다\' 점검이 더해지고, 활동지에 출처를 적는다.' },
        activity: {
          title: '과학 유산 소통 카드', tool: 'collage',
          teacher: '"과학 유산 하나를 골라 소통 카드를 꾸며요. 제목 띠, 그림, 한 줄 설명 칸이 있어야 해요. 글은 활동지에 먼저 쓰고, 판에서는 짜임을 꾸며요." 꾸밀 때마다 "보는 사람이 3초 안에 무엇을 알리는 카드인지 알 수 있나요?"라고 묻는다. 그림만 화려하게 채우는 학생에게 "설명 칸이 들어갈 자리가 남아 있나요?"라고 되묻는다. 출처를 밝히는 것이 정확한 소통의 마지막 단계라는 점을 짚는다.',
          task: '과학 유산 하나를 알리는 소통 카드를 제목 띠·그림·설명 칸으로 꾸미고 점검해요.', levels: NONE,
          items: [
            { prompt: '카드 위쪽에 제목 띠를 긴 네모 조각으로 놓고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle', 'star'] }, target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['제목 띠가 카드 위쪽에 있다', '제목 띠가 다른 조각에 가리지 않는다'], minPieces: 1 }, difficulty: 0.15,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } } } },
            { prompt: '가운데에 과학 유산을 나타내는 그림을 조각 셋 이상으로 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'semi', 'diamond'] }, target: { selfCheck: ['유산의 생김새를 떠올리게 한다', '그림이 카드 가운데에 있다', '꾸밈 조각이 설명 칸을 덮지 않는다'], minPieces: 3 }, difficulty: 0.25,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '아래쪽에 한 줄 설명 칸을 남기고 카드 전체를 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle', 'star', 'leaf'] }, target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['제목·그림·설명 칸이 다 있다', '보는 사람이 무엇을 알리는지 바로 안다'], minPieces: 3 }, difficulty: 0.3,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } }, challenge: { prompt: '아래쪽에 한 줄 설명 칸과 출처 칸을 남기고 카드 전체를 점검하세요(출처 칸).', target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['제목·그림·설명 칸이 다 있다', '보는 사람이 무엇을 알리는지 바로 안다', '출처를 적을 칸을 남겼다'], minPieces: 3 } } },
              conclude: '좋은 과학 소통 카드는 한눈에 알아보는 짜임과, 확인한 사실과, 밝힌 출처가 함께 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '카드에 넣을 글을 쓰세요.', columns: ['칸', '내용'], cells: [['제목', ''], ['한 줄 설명', ''], ['출처(기관·자료 이름)', '']] }] },
        notes: '카드 글(제목·설명·출처)은 활동지에 쓰고, 교구는 짜임만 꾸민다. 유산의 쓰임은 박물관·국립중앙과학관 같은 공식 자료로 확인한다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '기대와 우려 토의',
        method: '과학기술 쟁점 관점 토의 진행', tool: 'timer', minutes: 36,
        levels: { easy: '토의 절차 카드 3장만 놓고, 문항 글에 적힌 시간대로 맞추며, 교사가 근거 카드 묶음을 나눠 준다.', base: '절차 카드 5장을 놓고, 단계 시간을 스스로 셈해 맞춘 뒤 나온 근거 수를 기록하고 점검한다.', challenge: '마친 뒤 점검에 \'합의할 수 있는 조건을 정리했다\'가 더해진다.' },
        activity: {
          title: '기대와 우려 토의', tool: 'timer',
          teacher: '"쟁점은 \'학교 숙제에 인공지능을 써도 될까\'예요. 오늘은 찬반을 가리는 것이 아니라 기대와 우려의 근거를 나누어 봐요. 절차는 쟁점 확인 → 기대 근거 → 우려 근거 → 질문 → 정리, 한 단계 6분이에요." 순서를 놓고 타이머를 맞춘 뒤 신호에 맞춰 진행한다. 근거 대신 "그냥 싫어요"라고 말하는 학생에게 "그렇게 느끼게 한 사실이나 경험은 무엇일까요?"라고 되묻는다. 정리 단계에서 "이런 조건이면 써도 된다/안 된다"처럼 합의할 수 있는 조건을 찾게 한다. 기대와 우려는 둘 다 근거가 있을 수 있다는 점을 짚는다.',
          task: '토의 절차를 놓고 단계 타이머를 맞춰 토의한 뒤, 나온 근거 수를 적고 점검표에 표시해요.', levels: NONE,
          items: [
            TORDER('과학기술 쟁점 토의의 절차 카드를 차례대로 놓으세요.', '쟁점 토의 절차', ['쟁점 확인', '기대 근거 나누기', '우려 근거 나누기', '질문 주고받기', '정리하기'], { k: 3 }),
            TPLAN('토의 30분을 다섯 단계에 똑같이 나누어, 쉬는 시간 없이 다섯 번 돌도록 타이머를 맞추세요.', '토의 단계 타이머', { work: 6, rest: 0, rounds: 5 }, ['토의', '쉬기'], { easy: '한 단계 6분, 쉬기 0분, 5번으로 맞추세요.' }),
            { prompt: '토의에서 나온 기대 근거와 우려 근거의 수를 기록판에 적으세요.', toolOptions: { title: '나온 근거 기록', unit: '개', fields: [{ label: '기대 근거', unit: '개' }, { label: '우려 근거', unit: '개' }] }, target: { records: true }, difficulty: 0.15 },
            TCHECK('토의를 마친 뒤 토의 점검표에 표시하세요.', '쟁점 토의 점검', ['근거를 사실과 의견으로 나누어 말했다', '기대와 우려 양쪽 근거를 모두 들었다', '다른 관점을 깎아내리지 않았다'], { plus: '합의할 수 있는 조건을 정리했다', more: { conclude: '과학기술 쟁점에는 기대와 우려가 함께 있어요. 근거를 나누어 보면 \'어떤 조건에서\'라는 합의의 실마리가 보여요.' } }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '토의에서 나온 근거를 정리하세요.', columns: ['기대 근거', '우려 근거'], cells: [['', ''], ['', ''], ['', '']] },
          { type: 'short', prompt: '우리 모둠이 찾은 \'이런 조건이면 써도 된다\'는 조건 하나를 쓰세요.' },
        ] },
        notes: '교사가 신호와 시간을 진행한다. 토의 내용과 입장은 채점하지 않는다. 이 활동 하나로 전개 36분을 쓴다(진행 30분 + 기록·점검 6분).',
      }),

      M({
        id: 'wrap.apply', type: 'wrap', title: '연구에 참여할 때 확인할 것',
        method: '연구에 참여할 때 확인할 것 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 확인 항목 하나(그만둘 권리)를 넣어 문장 틀로 쓴다.', base: '확인할 것 두 가지를 넣어 한두 문장으로 쓰고 점검한다.', challenge: '그것을 확인해야 하는 까닭까지 자기 말로 쓴다.' },
        wrap: {
          teacher: '"연구 참여를 권유받는다면, 서명 전에 무엇을 확인할까요? 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "잘 읽어 본다"처럼 넓게 쓰는 학생에게 "동의서의 어떤 칸을 읽어야 할까요?"라고 묻는다. 출구 2번에서 \'서명하면 끝까지 해야 한다\'를 고른 학생에게 하은의 장면을 다시 떠올리게 한다.',
          exitTicket: [
            XRW('연구에 참여할 때 확인할 것을 한두 문장으로 쓰고 기준표로 점검하세요.', '연구 참여 전에 꼭 확인할 것과 그 까닭을 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['동의', '확인']], sample: '연구에 참여하기 전에 연구 목적과 위험, 그리고 언제든 그만둘 수 있는지를 동의서에서 확인한다. 알고 한 동의여야 내 몸과 정보를 지킬 수 있기 때문이다.' }),
            XCHOICE('연구 참여자의 권리로 맞는 것을 고르세요.', ['서명하면 끝까지 참여해야 한다', '언제든 불이익 없이 그만둘 수 있다', '위험은 연구가 끝난 뒤에 알려 준다'], 1, '참여자는 언제든 불이익 없이 동의를 거둘 수 있어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '연구 참여 전 확인',
          items: [
            { type: 'check', prompt: '동의서에서 확인할 것에 표시하세요.', options: ['연구 목적과 기간', '생길 수 있는 위험', '그만둘 수 있는지', '개인정보 보호 방법'] },
            { type: 'short', prompt: '미성년자가 연구에 참여할 때 보호자 동의가 필요한 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '\'나는 연구에 참여하기 전에 ___ 을 확인한다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.review', type: 'wrap', title: '짝 카드 사실 점검',
        method: '짝 콘텐츠 사실 점검', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 카드 하나를 함께 읽고 사실·과장 가지에 붙인다.', base: '짝 카드의 문장을 사실·과장 가지로 모두 나눈다.', challenge: '과장 문장을 사실에 맞게 고친 제안을 활동지에 쓴다.' },
        wrap: {
          teacher: '"짝의 카드 문장을 사실과 과장으로 나눠 봐요. 과장은 틀린 것만이 아니라 근거보다 부풀린 말이에요." 마인드맵을 붙인 뒤 고칠 제안을 쓰게 한다. "\'세계 최초\'는 멋있으니 괜찮아요"라는 학생에게 "그 말을 뒷받침할 자료를 찾았나요? 없다면 어떻게 고칠까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '짝 카드 문장 점검', slots: ['확인된 사실', '근거 없는 과장'], cards: ['측우기는 비가 내린 양을 잰다', '앙부일구는 해 그림자로 시각을 안다', '측우기만 있으면 날씨를 다 알 수 있다', '옛 과학은 오늘 과학보다 모두 뛰어나다'] }, prompt: '짝 카드에 나올 만한 문장을 사실과 과장 가지로 나누세요.', target: { sort: { '확인된 사실': ['측우기는 비가 내린 양을 잰다', '앙부일구는 해 그림자로 시각을 안다'], '근거 없는 과장': ['측우기만 있으면 날씨를 다 알 수 있다', '옛 과학은 오늘 과학보다 모두 뛰어나다'] } }, difficulty: 0.2 },
            XSHORT('짝 카드에서 고치면 좋을 문장 하나와 고친 문장을 쓰세요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '짝 카드 점검',
          items: [
            { type: 'table', prompt: '짝 카드를 점검하세요.', columns: ['점검', '○/△'], cells: [['사실이 정확하다', ''], ['과장이 없다', ''], ['출처를 밝혔다', '']] },
            { type: 'short', prompt: '짝 카드의 좋은 점 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.stance', type: 'wrap', title: '토의 뒤 내 입장',
        method: '토의 뒤 내 입장 성찰 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'나는 처음에 ~라고 생각했다. 토의 뒤 ~\')을 보고 쓴다.', base: '세 문장(처음 생각·들은 근거·지금 입장)으로 쓰고 점검한다.', challenge: '다른 관점을 존중하는 표현을 한 문장 넣는다.' },
        wrap: {
          teacher: '"토의 전과 뒤, 내 입장은 어떻게 움직였나요? 바뀌지 않았다면 그 까닭도 좋은 성찰이에요." 쓰기 전에 기준표를 함께 읽는다. "그냥 그대로예요"라고 쓰는 학생에게 "토의에서 들은 근거 가운데 가장 기억에 남는 것은 무엇이었나요?"라고 묻는다. 입장은 채점하지 않고, 근거를 들었는지만 스스로 점검한다는 점을 먼저 말한다.',
          exitTicket: [
            XRW('토의 뒤 내 입장과 바뀐 점을 세 문장으로 쓰고 점검하세요.', '처음 생각, 토의에서 들은 근거, 지금 내 입장을 세 문장으로 쓰세요.', ['처음 생각과 지금 입장을 모두 썼다', '토의에서 들은 근거를 하나 이상 썼다', '다른 관점을 깎아내리지 않았다'], { min: 50, max: 300, must: [['근거']], starter: '나는 처음에 ~라고 생각했다. 토의에서 ~라는 근거를 들었다. 지금 나는 ~', sample: '나는 처음에 인공지능을 숙제에 쓰면 안 된다고 생각했다. 토의에서 출처를 밝히고 초안만 돕게 하면 배움에 도움이 된다는 근거를 들었다. 지금 나는 조건을 정하면 쓸 수 있다고 본다.' }),
            XCHOICE('과학기술 쟁점 토의의 목적에 가장 가까운 것을 고르세요.', ['상대를 이겨 한쪽으로 정한다', '기대와 우려의 근거를 나누고 조건을 찾는다', '목소리가 큰 쪽으로 정한다'], 1, '쟁점 토의는 근거를 나누어 \'어떤 조건에서\'를 찾는 과정이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '토의 뒤 내 입장',
          items: [
            { type: 'short', prompt: '토의에서 들은 근거 가운데 가장 설득력 있던 것 하나를 쓰세요.' },
            { type: 'short', prompt: '나와 다른 관점에서 배울 점 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 지구의 날 — 기후 협약·그린워싱·기후 정의
  // ======================================================================================================
  {
    const M = MOD('earth');
    const TOTAL = { type: 'bar', title: '나라별 온실가스 배출 총량(가상 자료)', yLabel: '배출 총량(가상 단위)', xLabel: '가상 나라', showTable: true, data: [['가 나라', 90], ['나 나라', 60], ['다 나라', 20]] };
    const PER = { type: 'bar', title: '나라별 1인당 배출량(가상 자료)', yLabel: '1인당 배출(가상 단위)', xLabel: '가상 나라', showTable: true, data: [['가 나라', 3], ['나 나라', 12], ['다 나라', 8]] };
    const GREEN = { text: '가상 인물 서진이 텀블러를 사러 갔다. 한 상품 포장에 큰 글씨로 \'지구를 살리는 친환경 텀블러\'라고 적혀 있다.', who: '서진', motif: 'leaf', choices: [
      { id: 'buy', text: '친환경이라고 적혀 있으니 바로 산다', result: '집에 와 보니 무엇이 친환경인지 설명이 없다.', impact: [{ who: '서진', text: '무엇을 믿고 샀는지 모른다', tone: -1 }],
        next: { text: '같은 텀블러를 하나 더 사서 색깔별로 모을지 고민한다.', choices: [
          { id: 'collect', text: '친환경이니 여러 개 사도 괜찮다', result: '쓰지 않는 텀블러가 쌓인다.', impact: [{ who: '환경', text: '만드는 데 든 자원이 낭비된다', tone: -1 }], ending: '친환경 물건도 덜 사고 오래 쓰는 것이 먼저다.' },
          { id: 'use', text: '하나를 오래 쓰기로 한다', result: '일회용 컵을 덜 쓰게 된다.', impact: [{ who: '환경', text: '쓰레기가 준다', tone: 1 }], ending: '어떤 물건이든 오래 쓰는 것이 자원을 아낀다.' }] } },
      { id: 'ask', text: '무엇이 친환경인지 포장 뒷면을 읽는다', result: '\'재활용 소재\'라고만 있고 얼마나 들었는지는 없다.', impact: [{ who: '서진', text: '구체적 근거를 찾기 시작한다', tone: 1 }],
        next: { text: '무엇을 더 확인할지 고른다.', choices: [
          { id: 'cert', text: '공인된 환경 인증 표시가 있는지 본다', result: '다른 상품에는 인증 표시와 확인 번호가 있다.', impact: [{ who: '서진', text: '견줄 근거가 생긴다', tone: 1 }],
            next: { text: '인증 상품이 조금 더 비싸다.', choices: [
              { id: 'compare', text: '오래 쓸 수 있는지까지 견주어 고른다', result: '튼튼한 인증 상품 하나를 고른다.', impact: [{ who: '서진', text: '근거를 갖고 골랐다', tone: 1 }], ending: '구체적 근거·인증·오래 쓰기를 함께 보면 그린워싱을 가려낼 수 있다.' },
              { id: 'cheap', text: '문구만 있는 싼 상품을 고른다', result: '친환경인지 끝내 확인하지 못한다.', impact: [{ who: '서진', text: '근거 없이 골랐다', tone: 0 }], ending: '값만 보면 문구 뒤의 근거를 놓치기 쉽다.' }] } },
          { id: 'color', text: '포장이 초록색이니 믿는다', result: '색깔은 근거가 아니라는 것을 나중에 안다.', impact: [{ who: '서진', text: '다시 헷갈린다', tone: 0 }], ending: '초록색 포장과 나뭇잎 그림은 근거가 아니다.' }] } },
      { id: 'skip', text: '텀블러를 사지 않고 집에 있는 컵을 쓴다', result: '새 물건을 사지 않고도 일회용 컵을 줄인다.', impact: [{ who: '환경', text: '새 자원을 쓰지 않는다', tone: 1 }], ending: '이미 가진 것을 쓰는 것도 좋은 선택이다.' }] };
    const GREEN_R = [{ id: 'detail', text: '무엇이 얼마나 친환경인지 구체적으로 적혀 있어야 한다' }, { id: 'cert', text: '공인된 인증이나 확인할 수 있는 자료가 근거다' }, { id: 'long', text: '오래 쓰는 것이 자원을 아끼는 길이다' }, { id: 'greenpack', text: '초록색 포장이면 친환경이다', why: '색깔과 그림은 근거가 아니라 꾸밈이에요.' }, { id: 'word', text: '\'친환경\' 문구가 크면 믿을 만하다', why: '문구의 크기는 근거가 아니에요. 무엇이 친환경인지 구체적으로 확인해요.' }];
    MODS.push(
      M({
        id: 'intro.treaty', type: 'intro', title: '기후 협약과 연도',
        method: '협약 이름과 연도 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 쌍(기후 변화 협약·파리 협정)만 함께 짝짓는다.', base: '세 협약과 연도를 모두 짝짓는다.', challenge: '교토 의정서와 파리 협정의 차이를 한 줄로 짐작해 말한다.' },
        intro: {
          teacher: '"지구의 날은 법정 기념일은 아니지만, 세계가 기후 문제를 함께 생각하는 날이에요. 나라들이 맺은 기후 약속 세 가지를 연도와 짝지어 볼까요?" 시연 단추로 1992·1997·2015가 협약과 짝지어지는 모습을 보여 준다. "약속은 한 번 하면 끝 아니에요?"라는 말이 나오면 "왜 같은 문제로 세 번이나 약속을 새로 했을까요?"라고 되묻는다. 오늘은 약속의 흐름과 우리가 할 수 있는 일을 함께 본다고 밝힌다.',
          student: '국제 기후 협약 이름과 맺은 연도를 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { speak: false, words: [{ en: '기후 변화 협약', ko: '1992년' }, { en: '교토 의정서', ko: '1997년' }, { en: '파리 협정', ko: '2015년' }] }, sequence: [{ match: { '기후 변화 협약': '기후 변화 협약', '교토 의정서': '교토 의정서', '파리 협정': '파리 협정' } }] },
          art: { draw: 'a paper globe wrapped in three ribbons labelled with years, paper hands from many sides holding the ribbons, a thermometer and green leaves around', banner: '세 번의 기후 약속' },
        },
        notes: '지구의 날은 법정 기념일이 아니다(research-days.md §1). 환경·지속가능발전 범교과 주제로 다룬다.',
      }),
      M({
        id: 'intro.ad', type: 'intro', title: '친환경 광고 두 장',
        method: '친환경 광고 두 장 견주기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 두 장면만 읽고 근거가 있는 쪽을 함께 고른다.', base: '광고 문구 다섯 장 가운데 근거가 있는 세 장을 학생이 고른다.', challenge: '근거를 드러내는 낱말(수치·인증·소재)을 찾아 말한다.' },
        intro: {
          teacher: '"가상 광고 두 장이에요. 하나는 \'지구를 살리는 착한 물병\', 다른 하나는 \'재활용 플라스틱 50%, 공인 인증 표시\'. 어느 쪽이 더 믿을 만한가요?" 시연 단추로 근거가 있는 문구가 바구니에 담기는 모습을 보여 준다. "둘 다 친환경이라고 했는데요?"라는 말이 나오면 "무엇이, 얼마나 친환경인지 적힌 쪽은 어디일까요?"라고 되묻는다. 근거 없이 친환경처럼 보이게 하는 것을 \'그린워싱\'이라고 부른다고 알린다.',
          student: '가상 광고 문구 가운데 무엇이 얼마나 친환경인지 근거가 있는 문구만 바구니에 담아 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '근거가 있는 문구', title: '가상 광고 견주기', shuffle: false, cards: [
            { id: 'pct', text: '재활용 플라스틱 50% 사용', motif: 'leaf' }, { id: 'save', text: '지구를 살리는 착한 물병', motif: 'flower' }, { id: 'cert', text: '공인 환경 인증 표시', motif: 'star' },
            { id: 'green', text: '자연을 닮은 초록 포장', motif: 'tree' }, { id: 'refill', text: '리필해서 5년 쓰도록 설계', motif: 'sun' }] }, sequence: [{ pick: ['pct', 'cert', 'refill'] }] },
          art: { draw: 'two paper advertisement posters side by side, one with a big leaf and a smiling planet, the other with a small chart, a recycling symbol and a stamp, a magnifying glass between them', banner: '어느 광고에 근거가 있나요?' },
        },
        notes: '광고와 상품은 가상이다. 실제 상품·회사 이름을 쓰지 않는다.',
      }),
      M({
        id: 'intro.who', type: 'intro', title: '누가 얼마나 책임질까',
        method: '누가 얼마나 책임질까 첫 생각', tool: 'emotion', minutes: 6,
        levels: { easy: '첫 생각을 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 말한다.', challenge: '판단에 필요한 자료(총량·1인당·과거 배출 등)를 말한다.' },
        intro: {
          teacher: '"기후 변화를 줄이는 책임은 \'지금 많이 배출하는 나라\'와 \'모든 나라가 똑같이\' 가운데 어느 쪽에 더 가까울까요?" 손을 들어 1~5에 표시하게 한 뒤 시연 단추로 눈금을 보여 준다. "당연히 똑같이요"라는 말이 나오면 "사람 수가 아주 다른 두 나라라면, 총량과 1인당 가운데 무엇으로 견줘야 할까요?"라고 되묻는다. 정답이 없는 물음이며, 오늘은 자료로 관점을 견준다고 밝힌다.',
          student: '기후 변화를 줄이는 책임에 대한 내 첫 생각을 눈금으로 골라 보세요. 정답은 없어요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '기후 변화를 줄이는 책임은 누구에게 더 있을까?', feeling: '생각', steps: 5, scaleLabels: { 1: '모든 나라가 똑같이', 5: '많이 배출한 나라가 더' }, ask: '내 첫 생각은 어느 쪽인가요?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper balance scale with small paper factories and houses on each side, a paper globe in the middle with a thermometer, people of many countries standing around', banner: '책임은 어떻게 나눌까?' },
        },
      }),

      M({
        id: 'activity.line', type: 'activity', title: '기후 협약 시간 띠',
        method: '국제 기후 협약 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '협약 카드 3장을 차례대로 놓고, 틀린 자리는 바로 알려 준다.', base: '협약 3장과 첫 지구의 날을 차례대로 놓고, 협약마다 특징 카드를 짝짓는다.', challenge: '카드를 섞어 시작하고, 교토 의정서와 파리 협정의 차이를 설명하는 카드를 고른다.' },
        activity: {
          title: '기후 협약 시간 띠', tool: 'timeline',
          teacher: '"1992년 기후 변화 협약, 1997년 교토 의정서, 2015년 파리 협정. 세 약속은 무엇이 달라졌을까요?" 놓을 때마다 "이 약속은 누가 무엇을 하기로 했나요?"라고 묻는다. 파리 협정을 \'선진국만 줄이는 약속\'으로 고르는 학생에게 "파리 협정에서는 몇몇 나라만이 아니라 어느 나라들이 목표를 냈을까요?"라고 되묻는다. 파리 협정이 지구 평균 기온 상승을 산업화 이전보다 2℃보다 훨씬 낮게, 1.5℃로 제한하도록 노력하자고 정했다는 점을 짚는다.',
          task: '국제 기후 협약을 차례대로 놓고, 협약마다 특징을 짝지어요.', levels: LIVE,
          items: [
            ORDERQ('기후 문서와 날을 나온 차례대로 놓으세요.', ['첫 지구의 날', '기후 변화 협약', '교토 의정서', '파리 협정'], { k: 3, d: 0.25, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('협약 칸에 그 협약의 특징을 짝지으세요.', [['기후 변화 협약(1992)', '기후 문제에 함께 대응하자는 첫 틀'], ['교토 의정서(1997)', '선진국에 감축 의무를 정함'], ['파리 협정(2015)', '모든 당사국이 감축 목표를 냄']], { k: 2, d: 0.3, opt: { axis: ['1992년', '2015년'] } }),
            PICKQ('교토 의정서와 파리 협정의 차이를 바르게 설명한 카드만 고르세요.', ['교토는 주로 선진국에, 파리는 모든 당사국에 목표를 둔다', '파리 협정은 기온 상승을 2℃보다 훨씬 낮게 하자고 정했다'], ['파리 협정은 선진국에만 의무를 지운다', '교토 의정서가 파리 협정보다 나중에 나왔다'], { d: 0.35, opt: { basket: '바른 설명', axis: ['1992년', '2015년'] }, more: { conclude: '기후 약속은 \'함께 대응하자\'(1992)에서 \'선진국 감축 의무\'(1997), \'모든 당사국의 목표\'(2015)로 넓어졌어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '교토 의정서와 파리 협정의 차이를 한 문장으로 쓰세요.' }] },
        notes: '협약 연도와 파리 협정의 기온 목표는 기존 g10 차시 사실이다. 나라별 평가는 하지 않는다.',
      }),
      M({
        id: 'activity.policy', type: 'activity', title: '감축 정책과 적응 정책',
        method: '감축 정책과 적응 정책 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '정책 카드 4장(칸마다 2장)만 나누고, 틀린 바구니는 바로 알려 준다.', base: '정책 카드 8장을 감축·적응 바구니로 나누고, 우리 지역 장면에 맞는 정책을 나눈다.', challenge: '카드를 섞어 시작하고, 둘 다 필요한 까닭을 드러내는 카드가 더해진다.' },
        activity: {
          title: '감축과 적응 나누기', tool: 'sortboard',
          teacher: '"기후 정책은 크게 둘이에요. 온실가스를 줄이는 \'감축\', 이미 바뀌는 기후에 대비하는 \'적응\'. 카드를 나눠 볼까요?" 카드를 넣을 때마다 "이 정책은 원인을 줄이나요, 피해에 대비하나요?"라고 묻는다. 폭염 쉼터를 감축 칸에 넣는 학생에게 "쉼터는 온실가스를 줄일까요, 더위 피해를 줄일까요?"라고 되묻는다. 감축만 하거나 적응만 해서는 부족하다는 점을 3번 문항에서 짚는다.',
          task: '기후 정책 카드를 감축·적응 바구니로 나누고, 장면에 맞는 정책을 골라 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('기후 정책 카드를 감축과 적응 바구니로 나누세요.', ['감축 정책', '적응 정책'], [
              ['재생에너지 발전 늘리기', '건물 단열 고치기', '대중교통 넓히기', '석탄 발전 줄이기'],
              ['폭염 쉼터 만들기', '해안 방파제 높이기', '가뭄에 강한 작물 기르기', '홍수 예보 늘리기'],
            ], { k: 2, d: 0.25 }),
            SBQ('가상 바닷가 마을의 장면을 감축·적응 정책으로 나누세요.', ['감축 정책', '적응 정책'], [
              ['마을 버스를 전기 버스로 바꾼다', '지붕에 태양광 판을 단다'],
              ['바닷물이 넘칠 때 대피 길을 만든다', '여름 노인정을 무더위 쉼터로 연다'],
            ], { k: 1, d: 0.3 }),
            SBQ('두 정책이 함께 필요한 까닭을 드러내는 카드를 바구니로 나누세요.', ['감축이 필요한 까닭', '적응이 필요한 까닭'], [
              ['줄이지 않으면 앞으로 기온이 더 오른다'],
              ['이미 늘어난 폭염·홍수 피해에 대비해야 한다'],
            ], { k: 1, hard: [['원인을 줄여야 적응 비용도 덜 든다'], ['약한 사람이 먼저 피해를 입는다']], d: 0.35, more: { conclude: '감축은 원인을, 적응은 피해를 다뤄요. 하나만으로는 부족해서 두 정책이 함께 필요해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 지역에 필요한 정책을 하나씩 써 보세요.', columns: ['감축 정책', '적응 정책'], cells: [['', '']] }] },
      }),
      M({
        id: 'activity.level', type: 'activity', title: '실천의 세 수준',
        method: '기념 실천을 개인·학교·국가로 나누기', tool: 'mindmap', minutes: 18,
        levels: { easy: '실천 카드 6장(가지마다 2장)만 붙이고, 틀린 가지는 바로 알려 준다.', base: '카드 9장을 세 가지에 붙이고, 수준마다 실천과 그 효과를 짝짓는다.', challenge: '카드를 섞어 시작하고, 수준 사이의 연결을 설명하는 카드를 고른다.' },
        activity: {
          title: '실천의 세 수준', tool: 'mindmap',
          teacher: '"지구의 날 실천은 나 혼자 하는 일, 학교가 함께 하는 일, 나라가 정하는 일로 나눌 수 있어요." 카드를 붙일 때마다 "이 일은 누가 결정하나요?"라고 묻는다. "개인 실천은 너무 작아서 의미 없어요"라는 학생에게 "학교 급식에 채식 날이 생긴 것은 누구의 목소리에서 시작될 수 있을까요?"라고 되묻는다. 개인의 실천과 목소리가 학교와 나라의 결정으로 이어진다는 점을 3번에서 짚는다.',
          task: '지구의 날 실천 카드를 개인·학교·국가 가지로 나누고, 수준 사이의 연결을 골라요.', levels: LIVE,
          items: [
            SORTQ('지구의 날 실천 카드를 개인·학교·국가 가지에 붙이세요.', ['개인', '학교', '국가'], [
              ['텀블러 오래 쓰기', '가까운 거리는 걷기', '안 쓰는 전등 끄기'],
              ['급식 남기지 않기 캠페인', '학교 옥상 태양광 설치', '교복 물려주기 장터'],
              ['재생에너지 목표 정하기', '탄소 배출 기준 만들기', '대중교통 요금 지원'],
            ], { k: 2, d: 0.25, opt: { topic: '지구의 날 실천' } }),
            MATCHQ('수준 칸에 그 수준 실천의 효과를 짝지으세요.', [['개인', '내 생활의 배출을 줄이고 주변에 영향을 준다'], ['학교', '많은 사람이 한꺼번에 바뀐다'], ['국가', '규칙과 예산으로 사회 전체를 바꾼다']], { k: 2, d: 0.3, opt: { topic: '실천의 효과' } }),
            PICKQ('수준 사이의 연결을 바르게 설명한 카드만 고르세요.', ['학생들의 제안이 학교 급식 정책으로 이어질 수 있다', '나라의 기준이 바뀌면 학교와 개인의 선택도 바뀐다'], ['개인 실천은 학교·나라와 상관없다', '나라가 정하면 개인은 할 일이 없다'], { d: 0.35, opt: { basket: '바른 연결', topic: '수준 사이의 연결' }, more: { conclude: '개인의 실천과 목소리는 학교의 결정으로, 학교와 시민의 목소리는 나라의 정책으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 할 개인 실천 하나와, 그것을 학교 실천으로 넓힐 방법을 쓰세요.' }] },
      }),
      M({
        id: 'activity.green', type: 'activity', title: '그린워싱 가려내기',
        method: '그린워싱 광고 가려내기 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(무엇을 더 확인할지)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길까지 가고, 근거 카드 두 장 이상을 고른다.' },
        activity: {
          title: '그린워싱 가려내기', tool: 'dilemma',
          teacher: '"가상 인물 서진이 \'지구를 살리는 친환경 텀블러\'라는 문구를 봤어요. 서진이라면 어떻게 할까요?" 고를 때마다 "이 선택은 무엇을 근거로 했나요?"라고 묻는다. 초록색 포장을 믿는 길을 고른 학생에게 "색깔과 그림은 누가 정했을까요? 그것이 근거가 될까요?"라고 되묻는다. 친환경 물건도 덜 사고 오래 쓰는 것이 먼저라는 점을 짚는다.',
          task: '친환경 문구가 붙은 상품을 고르는 장면에서 확인 질문을 고르고 결과를 따라가요.', levels: NONE,
          items: [
            DILQ('서진이 되어 친환경 문구가 붙은 상품을 고르는 장면에서 선택하고 근거를 고르세요.', GREEN, [['ask', 'cert', 'compare']], GREEN_R, ['detail', 'cert', 'long'], { opt: { title: '친환경 문구' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', GREEN, GREEN_R, ['두 길의 결과를 견주었다', '근거와 꾸밈을 구별했다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('새로 사지 않고 이미 가진 컵을 쓰는 길을 끝까지 가 보고 근거를 고르세요.', GREEN, [['skip']], GREEN_R, ['long'], { d: 0.3, opt: { title: '사지 않는 선택' }, more: { conclude: '그린워싱을 가려내는 질문은 \'무엇이, 얼마나, 누가 확인했나\'예요. 그리고 덜 사고 오래 쓰는 것이 가장 확실한 친환경이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친환경 광고를 볼 때 던질 확인 질문 세 가지를 쓰세요.' }] },
        notes: '상품·광고는 가상이다. 특정 회사·상품을 그린워싱이라고 단정하지 않는다.',
      }),
      M({
        id: 'activity.data', type: 'activity', title: '배출 자료와 관점',
        method: '감축 자료 그래프 읽고 관점 견주기', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 값이 보이고, 총량 자료부터 읽는다.', base: '값 표시 없이 총량과 1인당 두 자료를 읽고 견준다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 관점이 갈리는 까닭을 고른 뒤 활동지에 설명한다.' },
        activity: {
          title: '배출 자료와 관점', tool: 'chart',
          teacher: '"가상의 세 나라 자료예요. 실제 나라가 아니에요. 총량으로 보면 누가 가장 많이 배출하나요? 1인당으로 보면요?" 두 그래프를 차례로 읽게 한다. "총량이 가장 크니까 가 나라만 줄이면 돼요"라는 학생에게 "1인당으로 보면 순서가 어떻게 바뀌나요? 어느 자료를 쓰느냐에 따라 관점이 어떻게 달라질까요?"라고 되묻는다. 자료마다 보여 주는 것이 달라 관점이 갈릴 수 있고, 그래서 근거를 밝히고 토의해야 한다는 점을 짚는다.',
          task: '가상 나라들의 배출 총량과 1인당 배출 그래프를 읽고, 자료에 따라 관점이 어떻게 갈리는지 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            CPICK('가상 자료에서 배출 총량이 가장 큰 나라를 고르세요.', TOTAL, '총량이 가장 큰 나라는?', ['가 나라', '나 나라', '다 나라'], 0, { d: 0.15 }),
            CPICK('가상 자료에서 1인당 배출량이 가장 큰 나라를 고르세요.', PER, '1인당이 가장 큰 나라는?', ['가 나라', '나 나라', '다 나라'], 1, { d: 0.2 }),
            CVAL('1인당 자료에서 가장 큰 값과 가장 작은 값의 차를 쓰세요.', PER, '1인당 값의 차는?', 9, { d: 0.3 }),
            CPICK('두 자료를 보고 관점이 갈리는 까닭으로 가장 알맞은 것을 고르세요.', PER, '관점이 갈리는 까닭은?', ['총량과 1인당 가운데 무엇을 기준으로 하느냐가 다르다', '한쪽 자료는 틀렸다', '그래프 색깔이 다르다'], 0, { why: ['', '두 자료 모두 같은 가상 나라를 다른 기준으로 보여 줘요.', '색깔은 판단의 근거가 아니에요.'], d: 0.35, more: { conclude: '총량으로 보면 가 나라, 1인당으로 보면 나 나라가 커요. 어떤 기준을 쓰느냐에 따라 \'누가 더 책임져야 하나\'의 관점이 갈려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '총량 기준과 1인당 기준 가운데 내가 더 알맞다고 보는 기준과 그 근거를 쓰세요.' }] },
        notes: '그래프 값은 모두 수업용 가상 자료다. 실제 나라를 평가하지 않는다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '기후 정책 제안서',
        method: '기후 정책 제안서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀을 보고 채운다.', base: '문제·근거, 정책, 예상 효과와 한계를 문항마다 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 반대 관점에 대한 대응까지 쓴다.' },
        activity: {
          title: '기후 정책 제안서', tool: 'rubric-writing',
          teacher: '"우리 학교나 지역에 필요한 기후 정책 하나를 제안해 봐요. 좋은 제안서는 문제와 근거, 정책, 예상 효과, 그리고 한계까지 써요." 문항마다 기준표를 함께 읽는다. 한계를 \'없다\'고 쓰는 학생에게 "이 정책에 돈이나 시간, 불편이 드는 사람은 누구일까요?"라고 묻는다. 정책을 쓸 때 특정 정당이나 인물을 끌어오지 않고 정책 내용만 다룬다는 점을 먼저 말한다.',
          task: '우리 학교나 지역에 필요한 기후 정책 하나를 문제·근거·정책·효과·한계를 갖춘 제안서로 쓰고 점검해요.', levels: NONE,
          items: [
            RWQ('문제와 근거를 2~3문장으로 쓰세요.', '우리 학교나 지역의 기후 문제 하나와 그 근거(관찰·자료)를 쓰세요.', ['문제를 구체적으로 밝혔다', '근거를 하나 이상 들었다', '근거의 출처를 밝혔다'], { min: 50, max: 300, sent: [2, 4], must: [['근거', '자료']], starter: '우리 지역의 문제는 ~이다. 그 근거는 ~', plus: '감축과 적응 가운데 어느 문제인지 밝혔다', d: 0.35 }),
            RWQ('정책과 예상 효과를 2~3문장으로 쓰세요.', '문제를 풀 정책 하나와 그 정책의 예상 효과를 쓰세요.', ['정책을 구체적으로 썼다', '누가 실행하는지 밝혔다', '예상 효과를 근거와 이었다'], { min: 50, max: 300, sent: [2, 4], must: [['정책']], starter: '나는 ~ 정책을 제안한다. 이 정책은 ~', plus: '효과를 확인할 방법을 썼다', d: 0.4 }),
            RWQ('정책의 한계와 보완을 2~3문장으로 쓰세요.', '이 정책의 한계(비용·불편·누가 부담하는지)와 보완 방법을 쓰세요.', ['한계를 솔직하게 썼다', '부담을 지는 사람을 고려했다', '보완 방법을 제시했다'], { min: 50, max: 300, sent: [2, 4], must: [['한계']], starter: '이 정책의 한계는 ~이다. 이를 보완하려면 ~', plus: '반대 관점의 근거를 들고 대응했다', d: 0.4, more: { conclude: '설득력 있는 제안서는 효과만 말하지 않고, 한계와 부담을 진 사람까지 살펴 보완해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서를 한 장으로 정리하세요.', columns: ['항목', '내용'], cells: [['문제·근거', ''], ['정책', ''], ['예상 효과', ''], ['한계·보완', '']] }] },
      }),

      M({
        id: 'wrap.pick', type: 'wrap', title: '내가 지지할 기후 정책',
        method: '내가 지지할 기후 정책과 근거 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'나는 ~ 정책을 지지한다. 왜냐하면 ~\')로 정책 하나를 쓴다.', base: '정책 하나와 근거 두 가지를 넣어 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓰고 한계도 한 마디 덧붙인다.' },
        wrap: {
          teacher: '"오늘 본 정책 가운데 내가 지지하는 것 하나를 근거와 함께 남겨 봐요. 어느 정책을 골랐는지는 채점하지 않아요. 근거가 있는지만 스스로 점검해요." 쓰기 전에 기준표를 함께 읽는다. "그냥 좋아서요"라고 쓰는 학생에게 "그 정책이 줄이는 것, 또는 대비하는 것은 무엇인가요?"라고 묻는다. 출구 2번에서 폭염 쉼터를 감축 정책으로 고른 학생에게 원인과 피해를 다시 가르게 한다.',
          exitTicket: [
            XRW('내가 지지할 기후 정책과 근거를 한두 문장으로 쓰고 기준표로 점검하세요.', '내가 지지하는 기후 정책 하나와 그 근거를 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['정책']], sample: '나는 학교 옥상 태양광 설치 정책을 지지한다. 학교가 쓰는 전기의 일부를 재생에너지로 바꾸어 온실가스를 줄이는 감축 정책이기 때문이다.' }),
            XCHOICE('적응 정책을 고르세요.', ['재생에너지 발전 늘리기', '폭염 쉼터 만들기', '석탄 발전 줄이기'], 1, '폭염 쉼터는 이미 늘어난 더위 피해에 대비하는 적응 정책이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '내가 지지할 기후 정책',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '온실가스를 줄이는 정책은 ___ 정책, 바뀐 기후에 대비하는 정책은 적응 정책이다.', answer: '감축' },
            { type: 'short', prompt: '내가 지지하는 정책의 한계 하나를 쓰세요.' },
          ],
          easy: { note: '\'나는 ~ 정책을 지지한다. 왜냐하면 ~\'', items: [{ type: 'short', prompt: '정책 하나와 근거 하나를 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '광고 확인 질문 점검',
        method: '광고 확인 질문 점검', tool: 'timer', minutes: 8,
        levels: { easy: '확인 질문 앞 세 개를 교사와 함께 읽고 표시한다.', base: '다섯 질문을 스스로 읽고 모두 표시한다.', challenge: '집에서 가족과 광고 하나를 함께 살펴볼 계획을 활동지에 쓴다.' },
        wrap: {
          teacher: '"친환경 광고를 볼 때 던질 질문 다섯 가지를 점검표로 만들어요. 읽고 앞으로 쓸 질문에 표시해요." 점검 뒤 출구 2번으로 넘어간다. "다 확인하려면 너무 오래 걸려요"라는 학생에게 "다섯 개 가운데 가게 앞에서 10초 만에 할 수 있는 것은 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '친환경 광고 확인 질문' }, prompt: '친환경 광고를 볼 때 던질 확인 질문 다섯 칸을 읽고 모두 표시하세요.', target: { selfCheck: ['무엇이 친환경인가?', '얼마나(수치) 친환경인가?', '누가 확인했나(인증·자료)?', '색깔·그림 말고 근거가 있나?', '꼭 새로 사야 하나?'] }, difficulty: 0.15 },
            XCHOICE('그린워싱을 가려내는 데 가장 도움이 되는 정보를 고르세요.', ['포장의 초록색', '\'지구를 살린다\'는 큰 문구', '재활용 소재 비율과 공인 인증'], 2, '구체적 수치와 확인할 수 있는 인증이 근거예요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '광고 확인 질문',
          items: [
            { type: 'short', prompt: '가장 먼저 쓸 확인 질문 하나를 쓰세요.' },
            { type: 'short', prompt: '가족과 함께 살펴볼 광고(종류)와 날짜를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.peer', type: 'wrap', title: '제안서 짝 피드백',
        method: '제안서 짝 피드백', tool: 'emotion', minutes: 8,
        levels: { easy: '짝 제안서의 설득력을 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 한 줄 쓴다.', challenge: '짝에게 고칠 제안 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"짝의 제안서를 읽고 설득력을 눈금으로 골라요. 내 생각과 같은지가 아니라, 근거와 한계를 잘 썼는지가 기준이에요." 눈금 뒤 까닭을 한 줄 쓰게 한다. 짝의 정책이 마음에 들지 않아 1점을 주려는 학생에게 "정책이 나와 달라도 근거가 탄탄할 수 있을까요?"라고 묻는다. 피드백은 사람이 아니라 글을 두고 한다.',
          exitTicket: [
            XSCALE('짝 제안서의 설득력을 1~5로 고르세요.', '짝의 기후 정책 제안서', '생각', { 1: '근거가 약하다', 5: '근거가 탄탄하다' }, '짝 제안서는 얼마나 설득력 있나요?'),
            XSHORT('그렇게 고른 까닭(근거·한계·효과 가운데)을 한 줄 쓰세요.'),
            XCHOICE('좋은 짝 피드백에 가장 가까운 것을 고르세요.', ['정책이 내 생각과 다르면 낮은 점수를 준다', '근거와 한계를 보고 고칠 점을 구체적으로 말한다', '좋다고만 말한다'], 1, '피드백은 글의 근거와 한계를 두고 구체적으로 해요.'),
          ],
        },
        worksheet: {
          title: '제안서 짝 피드백',
          items: [
            { type: 'table', prompt: '짝 제안서를 점검하세요.', columns: ['항목', '○/△'], cells: [['문제·근거', ''], ['정책·효과', ''], ['한계·보완', '']] },
            { type: 'short', prompt: '짝에게 줄 고칠 제안 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 5·18민주화운동 기념일 — 진상 규명·기억·왜곡 대응
  // ======================================================================================================
  {
    const M = MOD('may18');
    const SINCE = { type: 'bar', title: '1980년에서 몇 해 뒤인가', yLabel: '햇수(년)', xLabel: '제도', unit: '년', showTable: true, data: [['국회 청문회(1988)', 8], ['특별법 제정(1995)', 15], ['국가 기념일(1997)', 17], ['세계기록유산(2011)', 31]] };
    const MANNER = { text: '5월 18일 아침, 가상 인물 도윤이 반 단체 대화방에서 추모 이미지를 보았다. 아래에 장난스러운 웃음 이모티콘 댓글이 달려 있다.', who: '도윤', motif: 'flower', choices: [
      { id: 'laugh', text: '분위기를 맞추려고 웃음 이모티콘을 더한다', result: '추모 게시물이 장난 대화로 바뀐다.', impact: [{ who: '추모하는 사람들', text: '마음이 상한다', tone: -1 }],
        next: { text: '한 친구가 "오늘은 추모하는 날인데"라고 적었다.', choices: [
          { id: 'sorry', text: '"생각이 짧았어"라고 말하고 지운다', result: '대화가 다시 차분해진다.', impact: [{ who: '반 친구들', text: '서로 존중을 되찾는다', tone: 1 }], ending: '실수를 알아차리고 바로잡는 것도 추모의 자세다.' },
          { id: 'defend', text: '"그냥 장난인데 왜 그래"라고 답한다', result: '말다툼이 커진다.', impact: [{ who: '반 친구들', text: '서로 불편해진다', tone: -1 }], ending: '장난이라는 말이 상처를 지우지는 않는다.' }] } },
      { id: 'quiet', text: '댓글 대신 조용히 추모의 마음을 남긴다', result: '다른 친구들도 짧은 추모 글을 남긴다.', impact: [{ who: '반 친구들', text: '차분한 분위기가 이어진다', tone: 1 }],
        next: { text: '주말에 모둠이 기억 공간을 방문하기로 했다.', choices: [
          { id: 'learn', text: '방문 전에 공식 안내로 예절과 사실을 확인한다', result: '참배 예절과 공간의 역할을 알고 간다.', impact: [{ who: '모둠', text: '뜻깊게 방문한다', tone: 1 }],
            next: { text: '묘역 앞에서 친구가 기념사진을 찍자고 한다.', choices: [
              { id: 'respect', text: '참배를 마친 뒤 허용된 곳에서 차분히 찍는다', result: '다른 방문객도 편안하게 참배한다.', impact: [{ who: '방문객', text: '추모가 방해받지 않는다', tone: 1 }], ending: '공간의 뜻을 지키며 기록하는 것이 존중이다.' },
              { id: 'pose', text: '장난스러운 자세로 찍어 올린다', result: '게시물에 불편하다는 댓글이 달린다.', impact: [{ who: '유가족', text: '마음이 아플 수 있다', tone: -1 }], ending: '추모 공간에서의 장난은 누군가의 슬픔을 가볍게 만든다.' }] } },
          { id: 'skip', text: '그냥 가서 보고 오자고 한다', result: '어디가 어떤 곳인지 모른 채 둘러본다.', impact: [{ who: '모둠', text: '뜻을 놓친다', tone: 0 }], ending: '알고 가면 같은 공간도 더 깊이 기억된다.' }] } },
      { id: 'leave', text: '못 본 척 대화방을 나간다', result: '장난 댓글은 그대로 남는다.', impact: [{ who: '반 친구들', text: '분위기가 바뀌지 않는다', tone: 0 }], ending: '조용히 피하는 것보다 차분히 한마디 하는 것이 도움이 될 때가 있다.' }] };
    const MANNER_R = [{ id: 'respect', text: '추모는 희생된 사람과 유가족을 존중하는 일이다' }, { id: 'fix', text: '실수를 알아차리면 바로잡는 것이 존중이다' }, { id: 'know', text: '알고 방문하면 공간의 뜻을 지킬 수 있다' }, { id: 'joke', text: '장난은 장난일 뿐 상관없다', why: '장난이라도 추모하는 사람에게는 상처가 될 수 있어요.' }, { id: 'many', text: '다들 웃으니 괜찮다', why: '여럿이 해도 추모의 뜻을 가볍게 만드는 일은 존중이 아니에요.' }];
    MODS.push(
      M({
        id: 'intro.year', type: 'intro', title: '연도 카드 넷의 차례',
        method: '연도 카드 넷의 순서 짐작', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 두 장(1988·2011)만 앞뒤로 놓아 보인다.', base: '연도 카드 네 장을 학생이 앞뒤로 놓는다.', challenge: '연도마다 어떤 일이 있었을지 짐작해 말한다.' },
        intro: {
          teacher: '"1980년 5월 광주의 일은 그 뒤 수십 년에 걸쳐 밝혀지고 기억되었어요. 1988, 1995, 1997, 2011 — 네 연도를 차례로 놓아 볼까요?" 시연 단추로 네 카드가 차례대로 놓이는 모습을 보여 준다. "1980년에 다 밝혀진 거 아니에요?"라는 말이 나오면 "왜 진실을 밝히는 데 이렇게 오랜 시간이 걸렸을까요?"라고 되묻는다. 오늘은 이 연도마다 어떤 제도가 무엇을 바로잡았는지 따라간다고 밝힌다.',
          student: '1988·1995·1997·2011 연도 카드를 앞뒤 차례로 놓아 보고, 연도마다 무슨 일이 있었을지 짐작해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: ['2011년', '1995년', '1988년', '1997년'] }, sequence: [{ order: ['1988년', '1995년', '1997년', '2011년'] }] },
          art: { draw: 'a paper timeline ribbon with four paper year cards, white paper flowers placed along it, a soft May sky with paper clouds', banner: '기억은 오래 이어져요', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '사건 경위의 폭력 장면을 묘사하지 않는다. 진상 규명·기억의 제도 중심으로 다룬다.',
      }),
      M({
        id: 'intro.space', type: 'intro', title: '광주의 기억 공간',
        method: '기억 공간 떠올리기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 한 곳(국립5·18민주묘지)에 함께 핀을 꽂는다.', base: '두 곳 이상의 이름을 듣고 기록을 보존하는 곳에 핀을 꽂는다.', challenge: '그곳이 추모·모임·기록 가운데 어떤 역할을 하는지 말한다.' },
        intro: {
          teacher: '"5·18민주화운동을 기억하는 공간은 어디일까요?" 대답을 듣고(기다릴 반응: "국립5·18민주묘지요", "광주요") 희생자들이 잠든 국립5·18민주묘지, 시민들이 모였던 옛 전남도청 앞 5·18민주광장, 세계기록유산 기록물을 보존하는 5·18민주화운동기록관을 칸 지도로 보인다. 시연 단추로 기록관에 핀이 꽂히는 모습을 보여 준다. "추모 공간은 다 묘지예요"라는 말이 나오면 "기록을 지키는 곳, 사람들이 모였던 곳도 기억 공간일까요?"라고 되묻는다.',
          student: '칸 지도에서 광주의 기억 공간 세 곳을 보고, 기록물을 보존하는 곳에 핀을 꽂아 보세요.',
          demo: { tool: 'map', options: { grid: [5, 4], title: '광주의 기억 공간(칸 지도)', places: [{ name: '국립5·18민주묘지', icon: 'park', at: [4, 0] }, { name: '5·18민주광장', icon: 'city', at: [2, 2] }, { name: '5·18민주화운동기록관', icon: 'library', at: [1, 2] }] }, sequence: [{ place: '5·18민주화운동기록관' }] },
          art: { draw: 'a paper map of a city with three gentle paper pins, a memorial cemetery with white paper flowers, an open plaza with a fountain and an archive building with paper books', banner: '기억이 머무는 곳' },
        },
        notes: '칸 지도는 대강의 방향만 나타낸다.',
      }),
      M({
        id: 'intro.claim', type: 'intro', title: '온라인 주장 한 줄',
        method: '온라인 주장 한 줄 판단', tool: 'emotion', minutes: 6,
        levels: { easy: '믿음의 정도를 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 말한다.', challenge: '이 주장을 확인할 공식 자료가 어디 있을지 말한다.' },
        intro: {
          teacher: '"가상 게시물이에요. \'5·18은 남은 기록이 하나도 없어서 아무도 모른다.\' 얼마나 믿음이 가나요?" 손을 들어 1~5에 표시하게 한 뒤 시연 단추로 눈금을 보여 준다. "자신 있게 썼으니 맞겠죠"라는 말이 나오면 "이 주장이 사실인지 확인할 공식 기록은 어디 있을까요?"라고 되묻는다. 오늘은 이런 주장을 공식 기록으로 확인하고, 혐오 없이 근거로 답하는 법을 배운다고 밝힌다.',
          student: '가상 게시물의 주장을 읽고 얼마나 믿음이 가는지 눈금으로 골라 보세요. 정답은 없어요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 게시물: "5·18은 남은 기록이 하나도 없어서 아무도 모른다."', feeling: '걱정', steps: 5, scaleLabels: { 1: '전혀 안 믿긴다', 5: '아주 믿긴다' }, ask: '이 주장이 얼마나 믿기나요?' }, sequence: [{ level: 2 }] },
          art: { draw: 'a paper phone with a single bold post, a stack of paper archive boxes beside it with a small world heritage seal, a magnifying glass between them', banner: '기록은 남아 있을까?' },
        },
        notes: '게시물은 가상이다. 실제 왜곡 게시물이나 계정을 화면에 띄우지 않는다.',
      }),

      M({
        id: 'activity.system', type: 'activity', title: '제도 시간 띠',
        method: '진상 규명과 기념 제도 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '제도 카드 3장만 차례대로 놓고, 틀린 자리는 바로 알려 준다.', base: '제도 카드 4장을 차례대로 놓고, 연도 칸에 제도를 짝지은 뒤 제도의 역할을 고른다.', challenge: '카드를 섞어 시작하고, 각 제도가 바로잡은 것을 설명하는 카드를 고른다.' },
        activity: {
          title: '제도 시간 띠', tool: 'timeline',
          teacher: '"1988년 국회 청문회, 1995년 특별법, 1997년 국가 기념일 지정, 2011년 기록물의 세계기록유산 등재. 네 제도는 무엇을 했을까요?" 놓을 때마다 "이 제도로 무엇이 바로잡혔나요?"라고 묻는다. 세계기록유산을 1997년보다 앞에 두는 학생에게 연도를 다시 읽게 한다. 진상 규명은 한 번에 끝난 것이 아니라 여러 제도로 조금씩 이어졌다는 점을 짚는다.',
          task: '5·18 이후 진상 규명과 기념 제도를 차례대로 놓고, 제도마다 역할을 짝지어요.', levels: LIVE,
          items: [
            ORDERQ('5·18 이후의 제도를 생긴 차례대로 놓으세요.', ['국회 청문회', '5·18 특별법 제정', '국가 기념일 지정', '기록물 세계기록유산 등재'], { k: 3, d: 0.25, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('연도 칸에 그해의 제도를 짝지으세요.', [['1988년', '국회 청문회'], ['1995년', '5·18 특별법 제정'], ['1997년', '국가 기념일 지정'], ['2011년', '기록물 세계기록유산 등재']], { k: 2, d: 0.3, opt: { axis: ['1988년', '2011년'] } }),
            PICKQ('제도의 역할을 바르게 설명한 카드만 고르세요.', ['청문회는 감춰졌던 일을 공개적으로 묻는 자리였다', '세계기록유산 등재로 기록을 세계가 함께 지키게 되었다'], ['진상 규명은 1980년에 모두 끝났다', '국가 기념일 지정으로 기록이 모두 지워졌다'], { d: 0.35, opt: { basket: '바른 설명', axis: ['1988년', '2011년'] }, more: { conclude: '감춰졌던 진실은 청문회와 특별법으로 조금씩 밝혀지고, 국가 기념일과 세계기록유산으로 함께 기억하게 되었어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '진상 규명이 한 번에 끝나지 않은 까닭을 시간 띠를 근거로 한 문장으로 쓰세요.' }] },
        notes: '연도는 기존 g7~g12 차시 사실이다. 사건 경위의 폭력 장면은 다루지 않는다.',
      }),
      M({
        id: 'activity.role', type: 'activity', title: '바로잡는 제도의 역할 표',
        method: '과거사를 바로잡는 제도의 역할 표', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 햇수가 보이고, 표를 보며 제도의 역할을 고른다.', base: '값 표시 없이 막대와 표를 읽고 제도마다 맡은 역할을 고른다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 세 역할 가운데 오래 걸린 까닭을 고른 뒤 활동지에 쓴다.' },
        activity: {
          title: '제도의 역할 표', tool: 'chart',
          teacher: '"1980년에서 각 제도까지 몇 해가 흘렀는지 막대로 먼저 읽어요. 그리고 제도마다 진실 규명·명예 회복·기억 가운데 무엇을 맡았는지 견줘 봐요." 막대를 읽은 뒤 역할 물음으로 넘어간다. "기념일은 그냥 쉬는 날 아니에요?"라는 학생에게 "나라가 그날을 기념한다고 정하면 무엇이 달라질까요?"라고 되묻는다. 제도마다 맡은 역할이 다르고, 세 역할이 함께 있어야 과거가 바로잡힌다는 점을 짚는다.',
          task: '1980년에서 각 제도까지 걸린 햇수를 막대와 표로 읽고, 제도마다 맡은 역할을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            CVAL('1980년에서 5·18 특별법 제정까지 몇 해가 흘렀는지 막대를 읽어 쓰세요.', SINCE, '특별법까지 몇 해?', 15, { d: 0.15 }),
            CPICK('국회 청문회가 주로 맡은 역할을 고르세요.', SINCE, '청문회의 역할은?', ['진실 규명', '명예 회복', '기억'], 0, { why: ['', '청문회는 먼저 무엇이 있었는지 묻는 자리였어요.', '청문회는 기념이 아니라 묻고 밝히는 자리였어요.'], d: 0.25 }),
            CPICK('기록물의 세계기록유산 등재가 주로 맡은 역할을 고르세요.', SINCE, '세계기록유산의 역할은?', ['진실 규명', '명예 회복', '기억'], 2, { why: ['등재는 이미 남은 기록을 지키는 일이에요.', '등재는 사람이 아니라 기록을 지키는 일이에요.', ''], d: 0.3 }),
            CPICK('과거사를 바로잡는 데 오랜 시간이 걸린 까닭으로 가장 알맞은 것을 고르세요.', SINCE, '오래 걸린 까닭은?', ['감춰진 사실을 밝히고 제도로 만드는 데 여러 단계가 필요했다', '아무도 관심이 없었다', '기록이 전혀 없었다'], 0, { why: ['', '시민과 유가족, 기록이 진실을 지켜 왔어요.', '기록이 남아 세계기록유산이 되었어요.'], d: 0.35, more: { conclude: '과거를 바로잡는 일은 진실 규명, 명예 회복, 기억이 차례로 쌓이며 이루어져요. 한 제도로 끝나지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제도마다 맡은 역할을 정리하세요.', columns: ['제도', '연도', '맡은 역할'], cells: [['국회 청문회', '1988', ''], ['5·18 특별법', '1995', ''], ['국가 기념일', '1997', ''], ['세계기록유산', '2011', '']] }] },
        notes: '햇수는 공식 연도에서 셈한 값이다. 특별법의 세부 조항은 다루지 않는다.',
      }),
      M({
        id: 'activity.memorial', type: 'activity', title: '기억 공간 짝',
        method: '기억 공간과 역할 잇기', tool: 'wordcards', minutes: 18,
        levels: { easy: '기억 공간 낱말 2개만 역할과 짝짓는다.', base: '공간 낱말 3개와 역할을 짝짓고, 기록 보존 방법과 방문 예절을 나눈다.', challenge: '방문 계획 한 줄을 활동지에 쓰고, 기록을 지키는 행동만 고른다.' },
        activity: {
          title: '기억 공간 짝', tool: 'wordcards',
          teacher: '"기억 공간마다 맡은 역할이 달라요. 추모하는 곳, 모였던 곳, 기록을 지키는 곳. 짝지어 볼까요?" 짝을 지을 때마다 "그곳에 가면 무엇을 보고 느낄 수 있을까요?"라고 묻는다. 기록관을 \'묘역\'과 짝짓는 학생에게 "세계기록유산 기록물은 어디에 보관될까요?"라고 되묻는다. 기록을 지키는 일은 기관만이 아니라 우리가 기록을 함부로 바꾸거나 퍼뜨리지 않는 데서도 시작된다는 점을 짚는다.',
          task: '5·18 기억 공간과 그 역할을 짝짓고, 기록을 지키는 행동과 방문 예절을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            WORDQ('기억 공간과 그 역할을 짝지으세요.', [['국립5·18민주묘지', '희생자가 잠든 추모의 공간'], ['5·18민주광장', '시민들이 모였던 자리'], ['5·18민주화운동기록관', '세계기록유산 기록물을 보존하는 곳']], { k: 2, d: 0.25 }),
            SORTQ('행동 카드를 기록을 지키는 일·방문 예절로 나누세요.', ['기록을 지키는 일', '방문 예절'], [['원본 사진을 고치지 않고 출처와 함께 나눈다', '공식 기록관 자료로 사실을 확인한다'], ['묘역에서는 조용히 참배한다', '안내에 따라 정해진 길로 다닌다']], { k: 1, d: 0.3, opt: { mode: 'sort' } }),
            PICKQ('기록을 지키는 행동만 고르세요.', ['기록물을 출처와 함께 인용한다', '바뀐 사진을 보면 원본을 찾아 확인한다'], ['자극적인 장면만 잘라 퍼뜨린다', '출처 없는 영상을 그대로 공유한다'], { d: 0.35, opt: { mode: 'pick', basket: '기록을 지키는 행동' }, more: { conclude: '기억 공간은 추모·모임·기록을 나누어 맡고, 우리는 기록을 바꾸거나 함부로 퍼뜨리지 않는 것으로 그 기억을 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '기억 공간 한 곳을 방문한다면 무엇을 확인하고 갈지, 방문 계획을 한 줄로 쓰세요.' }] },
      }),
      M({
        id: 'activity.manner', type: 'activity', title: '추모의 자세 갈림길',
        method: '온라인·오프라인 추모의 자세 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(대화방)에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(방문 준비)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길(공간에서의 행동)까지 가고, 존중의 근거 카드 두 장 이상을 고른다.' },
        activity: {
          title: '추모의 자세 갈림길', tool: 'dilemma',
          teacher: '"가상 인물 도윤의 5월 18일이에요. 대화방에서, 그리고 기억 공간에서 어떤 자세가 추모일까요?" 고를 때마다 "이 행동을 유가족이 본다면 어떻게 느낄까요?"라고 묻는다. 장난 이모티콘을 고른 학생에게 "웃자고 한 일이 누군가에게는 어떻게 보일까요?"라고 되묻는다. 추모의 자세는 조용히 하는 것만이 아니라, 알고 가고, 실수를 바로잡는 것까지라는 점을 짚는다.',
          task: '도윤이 되어 온라인과 기억 공간에서 추모의 자세를 고르고 결과를 따라가요.', levels: NONE,
          items: [
            DILQ('도윤이 되어 추모 장면에서 선택하고 존중의 근거를 고르세요.', MANNER, [['quiet', 'learn', 'respect']], MANNER_R, ['respect', 'know'], { opt: { title: '5월 18일의 선택' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', MANNER, MANNER_R, ['두 길의 결과를 견주었다', '누가 어떤 마음일지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('장난에 끼었다가 바로잡는 길을 끝까지 가 보고 근거를 고르세요.', MANNER, [['laugh', 'sorry']], MANNER_R, ['respect', 'fix'], { d: 0.35, opt: { title: '바로잡는 길' }, more: { conclude: '추모의 자세는 희생된 사람과 유가족을 존중하는 데서 시작해요. 알고 다가가고, 실수는 바로잡아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '온라인에서 추모 게시물을 볼 때 지킬 나의 자세 하나를 쓰세요.' }] },
        notes: '장면은 가상이다. 학생에게 자기 가족·개인 견해를 묻지 않는다.',
      }),
      M({
        id: 'activity.verify', type: 'activity', title: '근거 따지기',
        method: '정보 근거 따져 나누고 대응 글 쓰기', tool: 'rubric-writing', minutes: 36,
        levels: { easy: '칠판의 정보 3개만 다루고, 문항마다 문장 틀을 보고 쓴다.', base: '정보 5개를 확인된 사실·근거 없는 주장으로 나누어 쓰고, 네 문장 대응 글을 쓴 뒤 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 출처 두 곳의 신뢰도를 견주는 문단을 더한다.' },
        activity: {
          title: '근거 따지기', tool: 'rubric-writing',
          teacher: '"칠판의 다섯 문장을 보세요. ① 1997년 5·18이 국가 기념일이 되었다. ② 5·18 기록물은 2011년 세계기록유산이 되었다. ③ 5·18은 남은 기록이 하나도 없다. ④ 1988년 국회 청문회가 열렸다. ⑤ 진상 규명은 1980년에 모두 끝났다. 공식 기록으로 확인되는 사실과 근거 없는 주장을 나눠 봐요." 나눈 까닭을 쓸 때마다 "어느 공식 기관의 자료로 확인할 수 있나요?"라고 묻는다. 대응 글에서 상대를 비난하는 학생에게 "사실을 바로잡는 데 비난이 도움이 될까요?"라고 되묻는다. 왜곡 정보에는 같은 방식(조롱·혐오)이 아니라 확인된 기록으로 답한다는 점을 짚는다.',
          task: '칠판의 다섯 문장을 공식 기록으로 확인된 사실과 근거 없는 주장으로 나누어 쓰고, 혐오 없이 근거로 답하는 대응 글을 써요.', levels: NONE,
          items: [
            RWQ('칠판 문장 가운데 공식 기록으로 확인되는 사실을 골라 까닭과 함께 2~3문장으로 쓰세요.', '칠판의 다섯 문장 가운데 확인된 사실을 고르고, 어떤 공식 기록으로 확인되는지 쓰세요.', ['확인된 사실을 바르게 골랐다', '확인할 공식 기관·기록을 밝혔다', '사실과 판단을 섞지 않았다'], { min: 50, max: 350, sent: [2, 4], must: [['기록', '자료']], starter: '확인된 사실은 ~이다. 이것은 ~ 자료로 확인할 수 있다.', plus: '사실 세 가지를 모두 골랐다', d: 0.35 }),
            RWQ('근거 없는 주장을 골라 무엇이 틀렸는지 2~3문장으로 쓰세요.', '칠판의 다섯 문장 가운데 근거 없는 주장을 고르고, 확인된 사실과 무엇이 다른지 쓰세요.', ['근거 없는 주장을 바르게 골랐다', '확인된 사실과 견주어 틀린 곳을 짚었다', '주장한 사람을 탓하지 않았다'], { min: 50, max: 350, sent: [2, 4], must: [['사실']], starter: '근거 없는 주장은 ~이다. 확인된 사실은 ~', plus: '두 주장을 모두 짚었다', d: 0.4 }),
            RWQ('가상 게시물 "5·18은 남은 기록이 하나도 없다"에 답하는 대응 글을 3~4문장으로 쓰세요.', '가상 게시물에 확인된 기록을 근거로, 혐오나 조롱 없이 답하는 글을 쓰세요.', ['확인된 기록을 근거로 들었다', '출처를 밝혔다', '혐오·조롱 표현이 없다'], { min: 60, max: 400, sent: [3, 5], must: [['세계기록유산', '기록']], starter: '말씀하신 내용과 달리 ~. 확인할 수 있는 곳은 ~', plus: '함께 확인해 보자고 권하는 말로 맺었다', d: 0.4 }),
            RWQ('내가 쓴 출처 두 곳이 왜 믿을 만한지 2~3문장으로 견주어 쓰세요.', '대응 글에 쓴 출처 두 곳(공식 기관·기록관 등)을 견주어 믿을 만한 까닭을 쓰세요.', ['출처 두 곳을 밝혔다', '믿을 만한 까닭(누가·언제·원본)을 썼다', '출처 없는 영상·게시물과 견주었다'], { min: 50, max: 350, sent: [2, 4], must: [['출처']], plus: '두 출처가 서로 다를 때 어떻게 할지 썼다', d: 0.45, more: { conclude: '왜곡 정보에 맞서는 힘은 목소리의 크기가 아니라 확인된 기록과 밝힌 출처, 그리고 존중하는 말에서 나와요.' } }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '칠판의 다섯 문장을 나누세요.', columns: ['문장', '확인된 사실 / 근거 없는 주장', '확인할 곳'], cells: [['①', '', ''], ['②', '', ''], ['③', '', ''], ['④', '', ''], ['⑤', '', '']] },
          { type: 'short', prompt: '왜곡 정보에 같은 방식(조롱·혐오)으로 맞서면 안 되는 까닭을 한 문장으로 쓰세요.' },
        ] },
        notes: '칠판 문장 가운데 ①②④는 기존 차시 사실, ③⑤는 수업용으로 만든 근거 없는 주장이다. 실제 왜곡 게시물·계정을 보여 주지 않는다. 이 활동 하나로 전개 36분을 쓴다.',
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '바로잡는 제도 하나의 뜻',
        method: '과거사를 바로잡는 제도 하나의 뜻 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'___ 는 ___ 을 바로잡았다\')로 제도 하나를 쓴다.', base: '제도 하나와 그것이 맡은 역할 두 가지를 이어 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓰고, 그 제도가 없었다면 어땠을지 덧붙인다.' },
        wrap: {
          teacher: '"오늘 본 제도 가운데 하나를 골라, 그 제도가 무엇을 바로잡았는지 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "특별법이 생겼다"처럼 사실만 쓰는 학생에게 "그 법이 생겨서 무엇이 달라졌나요?"라고 묻는다. 출구 2번에서 세계기록유산 등재를 1990년대로 고른 학생에게 시간 띠를 다시 떠올리게 한다.',
          exitTicket: [
            XRW('과거사를 바로잡는 제도 하나의 뜻을 한두 문장으로 쓰고 기준표로 점검하세요.', '5·18 이후의 제도 하나가 무엇을 바로잡았는지 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['청문회', '특별법', '기념일', '세계기록유산']], sample: '1997년 국가 기념일 지정은 5·18을 나라가 함께 기억하는 날로 정했다. 그래서 해마다 기념식을 열고 다음 세대가 그날을 배우게 되었다.' }),
            XCHOICE('5·18 기록물이 유네스코 세계기록유산이 된 해를 고르세요.', ['1988년', '1997년', '2011년'], 2, '2011년 등재로 5·18 기록은 세계가 함께 지키는 기록이 되었어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '바로잡는 제도',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '5·18민주화운동 기념일은 ___ 년에 국가 기념일이 되었다.', answer: '1997' },
            { type: 'short', prompt: '진실 규명·명예 회복·기억 가운데 가장 오래 걸렸다고 생각하는 것과 까닭을 쓰세요.' },
          ],
          easy: { note: '\'___ 는 ___ 을 바로잡았다.\'', items: [{ type: 'short', prompt: '제도 하나와 바로잡은 것을 넣어 문장을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.pledge', type: 'wrap', title: '추모의 자세 점검',
        method: '추모 자세 점검', tool: 'timer', minutes: 8,
        levels: { easy: '점검 항목 앞 세 개를 교사와 함께 읽고 표시한다.', base: '다섯 항목을 스스로 읽고 모두 표시한다.', challenge: '온라인에서 할 추모 실천 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 생각한 추모의 자세를 점검표로 남겨요. 앞으로 지킬 것에 표시해요." 점검 뒤 출구 2번으로 넘어간다. "추모는 조용히만 하면 돼요"라는 학생에게 "조용히 하는 것 말고, 알고 가는 것과 실수를 바로잡는 것도 추모일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '추모의 자세 점검' }, prompt: '추모의 자세 다섯 칸을 읽고 앞으로 지킬 것으로 모두 표시하세요.', target: { selfCheck: ['추모 게시물에 장난 댓글을 달지 않는다', '방문 전에 공식 안내로 사실과 예절을 확인한다', '기억 공간에서는 조용히 다닌다', '출처 없는 영상을 퍼 나르지 않는다', '실수했으면 바로 사과하고 바로잡는다'] }, difficulty: 0.15 },
            XCHOICE('추모의 자세로 가장 알맞은 것을 고르세요.', ['분위기를 맞추려고 장난 댓글을 단다', '알고 다가가고 실수는 바로잡는다', '추모 공간에서 자극적인 사진을 찍어 올린다'], 1, '추모는 희생된 사람과 유가족을 존중하는 데서 시작해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '추모의 자세',
          items: [
            { type: 'short', prompt: '온라인에서 할 추모 실천 하나를 쓰세요.' },
            { type: 'short', prompt: '친구가 추모 게시물에 장난을 칠 때 내가 할 수 있는 한마디를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.source', type: 'wrap', title: '확인할 공식 기관 정리',
        method: '확인한 공식 기관 정리', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 질문 하나(기록물 보기)를 함께 읽고 기관 카드를 붙인다.', base: '질문 셋마다 확인할 기관 카드를 붙인다.', challenge: '그 기관을 고른 까닭을 활동지에 쓴다.' },
        wrap: {
          teacher: '"궁금한 것이 생기면 어디서 확인할까요? 질문마다 알맞은 기관을 붙여 봐요." 붙인 뒤 출구 2번으로 넘어간다. 출처 없는 영상 채널을 붙이는 학생에게 "그 채널은 누가, 무엇을 근거로 만들었는지 확인할 수 있나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어디서 확인할까', slots: ['당시 기록물을 보고 싶다', '묘역 참배 안내를 알고 싶다', '국가 기념일 행사를 알고 싶다'], cards: ['5·18민주화운동기록관', '국립5·18민주묘지 안내', '국가보훈부 안내', '출처 없는 영상 채널', '익명 게시판'] }, prompt: '질문마다 확인할 공식 기관 카드를 짝지으세요.', target: { match: { '당시 기록물을 보고 싶다': '5·18민주화운동기록관', '묘역 참배 안내를 알고 싶다': '국립5·18민주묘지 안내', '국가 기념일 행사를 알고 싶다': '국가보훈부 안내' } }, difficulty: 0.2 },
            XSHORT('질문 하나를 골라, 그 기관을 고른 까닭을 한 줄로 쓰세요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '확인할 공식 기관',
          items: [
            { type: 'short', prompt: '믿을 만한 출처의 조건(누가·언제·원본) 가운데 가장 중요하다고 보는 것과 까닭을 쓰세요.' },
            { type: 'check', prompt: '공식 출처에 표시하세요.', options: ['5·18민주화운동기록관', '국가보훈부', '익명 게시판', '출처 없는 영상'] },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 현충일·6·25전쟁 — 보훈 제도·추모·평화
  // ======================================================================================================
  {
    const M = MOD('june');
    const VISIT = { type: 'bar', title: '가 보고 싶은 추모 공간(가상 학급 설문)', yLabel: '학생 수', xLabel: '추모 공간', unit: '명', showTable: true, data: [['국립서울현충원', 9], ['국립대전현충원', 5], ['유엔기념공원', 12]] };
    const SCENE = { text: '6월 6일 오전, 가상 인물 지아가 가족과 공원에 있다. 곧 10시 사이렌이 울린다.', who: '지아', motif: 'flag', choices: [
      { id: 'stop', text: '사이렌이 울리면 멈추어 1분 묵념한다', result: '주변 사람들도 걸음을 멈춘다.', impact: [{ who: '지아', text: '그날의 뜻을 몸으로 새긴다', tone: 1 }],
        next: { text: '집에 돌아와 태극기를 달려고 한다.', choices: [
          { id: 'half', text: '깃봉에서 깃면 너비만큼 내려 조기로 단다', result: '현충일의 뜻에 맞게 국기를 단다.', impact: [{ who: '이웃', text: '추모의 뜻이 전해진다', tone: 1 }],
            next: { text: '동생이 "왜 오늘은 국기를 내려 달아?"라고 묻는다.', choices: [
              { id: 'explain', text: '나라를 위해 희생한 분들을 기리는 날이라 조기로 단다고 알려 준다', result: '동생이 고개를 끄덕인다.', impact: [{ who: '동생', text: '현충일의 뜻을 안다', tone: 1 }], ending: '뜻을 알고 나누면 추모가 다음 사람에게 이어진다.' },
              { id: 'dunno', text: '"원래 그래"라고만 한다', result: '동생은 여전히 궁금하다.', impact: [{ who: '동생', text: '뜻을 모른 채 지나간다', tone: 0 }], ending: '까닭을 말해 주면 형식이 뜻이 된다.' }] } },
          { id: 'full', text: '평소처럼 깃봉 끝까지 올려 단다', result: '국경일과 같은 방식으로 달게 된다.', impact: [{ who: '지아', text: '추모의 날 방식과 다르다', tone: 0 }], ending: '현충일은 경축일이 아니라 추모의 날이라 조기로 단다.' }] } },
      { id: 'phone', text: '휴대폰 영상을 계속 본다', result: '사이렌이 울린 줄도 모르고 지나간다.', impact: [{ who: '지아', text: '그날의 뜻을 놓친다', tone: 0 }], ending: '1분의 멈춤이 그날을 기억하는 시작이다.' },
      { id: 'party', text: '쉬는 날이니 친구들과 축하 파티를 연다', result: '시끄러운 음악이 묵념 시간과 겹친다.', impact: [{ who: '주변 사람들', text: '추모가 방해받는다', tone: -1 }], ending: '현충일은 축하하는 날이 아니라 기리는 날이다.' }] };
    const SCENE_R = [{ id: 'honor', text: '현충일은 나라를 위해 희생한 분들을 기리는 날이다' }, { id: 'flag', text: '추모의 날에는 국기를 조기로 단다' }, { id: 'share', text: '뜻을 알고 나누면 추모가 이어진다' }, { id: 'holiday', text: '쉬는 날이니 무엇을 해도 된다', why: '쉬는 날이지만 그날을 기리는 뜻이 있어요.' }, { id: 'same', text: '국기는 언제나 같은 방식으로 단다', why: '현충일 같은 조의를 나타내는 날에는 조기로 달아요.' }];
    MODS.push(
      M({
        id: 'intro.flag', type: 'intro', title: '조기와 평소 게양',
        method: '조기와 평소 게양 견주기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 쌍(조기·평소 게양)만 함께 짝짓는다.', base: '게양 방법 세 가지와 날을 모두 짝짓는다.', challenge: '현충일에 조기를 다는 까닭을 한 문장으로 말한다.' },
        intro: {
          teacher: '"현충일에는 태극기를 어떻게 달까요? 국경일과 같을까요?" 대답을 듣고 국경일에는 깃봉 끝까지 올려 달고, 현충일에는 깃봉에서 깃면 너비만큼 내려 다는 조기를 단다는 점을 알린다. 시연 단추로 게양 방법과 날이 짝지어지는 모습을 보여 준다. "어차피 다 국기 다는 날이잖아요"라는 말이 나오면 "기쁜 날과 슬픔을 나누는 날을 국기로 어떻게 구별할까요?"라고 되묻는다.',
          student: '태극기 다는 방법과 그렇게 다는 날을 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { speak: false, words: [{ en: '조기 게양', ko: '현충일처럼 희생을 기리는 날' }, { en: '깃봉 끝까지 게양', ko: '광복절 같은 국경일' }, { en: '오전 10시 묵념', ko: '현충일 사이렌이 울릴 때' }] }, sequence: [{ match: { '조기 게양': '조기 게양', '깃봉 끝까지 게양': '깃봉 끝까지 게양', '오전 10시 묵념': '오전 10시 묵념' } }] },
          art: { draw: 'two paper flagpoles side by side, one taegeukgi flag at the top of its pole and one lowered by the width of the flag, white paper flowers at the base, a calm June sky', banner: '국기는 어떻게 달까요?' },
        },
        notes: '조기 게양 방법은 국기법 기준(깃면 너비만큼 내려 닮)이다. 기존 차시 사실.',
      }),
      M({
        id: 'intro.space', type: 'intro', title: '추모 공간 지도',
        method: '추모 공간 지도에 찾기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 한 곳(국립서울현충원)에 함께 핀을 꽂는다.', base: '세 곳의 이름을 듣고 유엔기념공원에 핀을 꽂는다.', challenge: '부산에 유엔기념공원이 있는 까닭을 짐작해 말한다.' },
        intro: {
          teacher: '"나라를 위해 희생한 분들을 기리는 공간은 어디에 있을까요?" 대답을 듣고 국립서울현충원, 국립대전현충원, 그리고 6·25전쟁 때 함께 싸운 유엔군 전사자들이 잠든 부산의 유엔기념공원을 칸 지도로 보인다. 시연 단추로 유엔기념공원에 핀이 꽂히는 모습을 보여 준다. "추모 공간에는 우리나라 사람만 있어요"라는 말이 나오면 "다른 나라에서 온 사람들의 희생도 기리는 곳이 있을까요?"라고 되묻는다. 오늘은 국경을 넘어 희생을 기리는 방식도 함께 본다고 밝힌다.',
          student: '칸 지도에서 추모 공간 세 곳을 보고, 유엔군 전사자들이 잠든 곳에 핀을 꽂아 보세요.',
          demo: { tool: 'map', options: { grid: [5, 5], title: '추모 공간(칸 지도)', places: [{ name: '국립서울현충원', icon: 'park', at: [1, 0] }, { name: '국립대전현충원', icon: 'park', at: [2, 2] }, { name: '유엔기념공원', icon: 'heritage', at: [4, 4] }] }, sequence: [{ place: '유엔기념공원' }] },
          art: { draw: 'a paper map of Korea with three paper pins, rows of small white paper markers under green paper trees, flags of many nations in soft pastel shapes at the bottom right', banner: '희생을 기리는 곳' },
        },
        notes: '칸 지도는 대강의 방향만 나타낸다. 유엔기념공원은 기존 g10~g12 차시 사실.',
      }),
      M({
        id: 'intro.state', type: 'intro', title: '두 서술 가운데 사실',
        method: '두 서술 가운데 사실 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 두 문장만 읽고 사실을 함께 고른다.', base: '문장 세 장 가운데 사실만 담은 두 장을 학생이 고른다.', challenge: '남은 문장에서 의견을 나타내는 낱말을 찾아 말한다.' },
        intro: {
          teacher: '"현충일에 관한 문장 세 개예요. \'현충일은 6월 6일이다.\' \'오전 10시에 사이렌이 울리면 1분 묵념한다.\' \'현충일 행사는 모두 지루하다.\' 무엇이 사실이고 무엇이 의견일까요?" 시연 단추로 사실 카드가 바구니에 담기는 모습을 보여 준다. "지루한 건 사실인데요?"라는 말이 나오면 "모든 사람이 그렇게 느낄까요? 자료로 확인할 수 있나요?"라고 되묻는다. 오늘 토의에서도 사실과 의견을 나누어 말한다고 밝힌다.',
          student: '현충일에 관한 문장 카드 가운데 사실만 담은 카드를 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '사실만 담은 문장', title: '현충일 문장', shuffle: false, cards: [
            { id: 'date', text: '현충일은 6월 6일이다', motif: 'flag' }, { id: 'bore', text: '현충일 행사는 모두 지루하다', motif: 'cloud' }, { id: 'siren', text: '오전 10시 사이렌에 1분 묵념한다', motif: 'flower' }] }, sequence: [{ pick: ['date', 'siren'] }] },
          art: { draw: 'two paper speech bubbles, one with a calendar page showing June 6 and a clock at ten, the other with a sleepy cloud, white paper flowers below', banner: '사실일까, 의견일까?' },
        },
      }),

      M({
        id: 'activity.system', type: 'activity', title: '보훈 제도 나누기',
        method: '보훈 제도와 그 뜻 잇기', tool: 'sortboard', minutes: 18,
        levels: { easy: '제도 카드 3장(칸마다 1장)만 나누고, 틀린 바구니는 바로 알려 준다.', base: '제도 카드 6장을 예우·기억·지원 바구니로 나누고, 장면을 나눈다.', challenge: '카드를 섞어 시작하고, 제도의 까닭을 드러내는 카드가 더해진다.' },
        activity: {
          title: '보훈 제도 나누기', tool: 'sortboard',
          teacher: '"보훈은 나라를 위해 희생하거나 공헌한 분들의 뜻을 기리고 보답하는 일이에요. 제도를 예우·기억·지원으로 나눠 볼까요?" 카드를 넣을 때마다 "이 제도는 누구에게 무엇을 하나요?"라고 묻는다. 국립묘지 안장을 지원 칸에 넣는 학생에게 "돈이나 혜택을 주는 일일까요, 명예를 높이는 일일까요?"라고 되묻는다. 보훈 제도는 희생을 잊지 않겠다는 사회의 약속이라는 점을 짚는다.',
          task: '보훈 제도 카드를 예우·기억·지원 바구니로 나누고, 장면에 맞는 제도를 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('보훈 제도 카드를 예우·기억·지원 바구니로 나누세요.', ['예우', '기억', '지원'], [
              ['국립묘지에 모시기', '기념식에서 공로를 기리기'],
              ['현충일을 기념일로 정하기', '현충 시설을 보존하기'],
              ['유가족의 교육을 돕기', '치료와 생활을 돕기'],
            ], { k: 1, d: 0.3 }),
            SBQ('6월의 장면을 예우·기억·지원 바구니로 나누세요.', ['예우', '기억', '지원'], [
              ['기념식에서 유공자를 소개한다'], ['학생들이 현충 시설 안내문을 만든다'], ['다친 분이 치료비 지원을 받는다'],
            ], { k: 1, d: 0.3 }),
            SBQ('보훈 제도가 있는 까닭을 드러내는 카드를 바구니로 나누세요.', ['예우', '기억', '지원'], [
              ['희생의 명예를 높이려고'], ['다음 세대가 잊지 않도록'], ['남은 가족의 삶을 지키려고'],
            ], { k: 1, hard: [['공로에 사회가 감사를 표하려고'], ['기록과 공간으로 이어 가려고'], ['다친 분이 일상으로 돌아오도록']], d: 0.35, more: { conclude: '보훈은 예우로 명예를 높이고, 기억으로 다음 세대에 잇고, 지원으로 남은 삶을 지키는 사회의 약속이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보훈 제도 가운데 가장 중요하다고 생각하는 것 하나와 그 까닭을 쓰세요.' }] },
        notes: '보훈 제도는 일반 명칭으로만 다룬다(법 조항·지원 금액은 쓰지 않는다).',
      }),
      M({
        id: 'activity.scene', type: 'activity', title: '현충일 추모 갈림길',
        method: '추모 장면 판단 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(사이렌)에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(국기 달기)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길(동생에게 설명)까지 가고, 근거 카드를 고른다.' },
        activity: {
          title: '현충일 추모 갈림길', tool: 'dilemma',
          teacher: '"가상 인물 지아의 현충일 아침이에요. 사이렌, 국기, 동생의 질문 — 지아라면 어떻게 할까요?" 고를 때마다 "이 선택은 그날의 뜻과 어떻게 이어지나요?"라고 묻는다. 축하 파티를 고른 학생에게 "쉬는 날이지만 이날을 정한 까닭은 무엇일까요?"라고 되묻는다. 형식을 지키는 것보다 뜻을 알고 나누는 것이 추모를 이어 준다는 점을 짚는다.',
          task: '지아가 되어 현충일 장면에서 선택하고 결과를 따라간 뒤, 근거 카드를 골라요.', levels: NONE,
          items: [
            DILQ('지아가 되어 현충일 장면에서 선택하고 근거 카드를 고르세요.', SCENE, [['stop', 'half', 'explain']], SCENE_R, ['honor', 'flag'], { opt: { title: '현충일 아침' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', SCENE, SCENE_R, ['두 길의 결과를 견주었다', '추모의 뜻이 어디서 지켜졌는지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('국기를 평소처럼 단 길을 끝까지 가 보고, 바른 방법의 근거를 고르세요.', SCENE, [['stop', 'full']], SCENE_R, ['flag'], { d: 0.3, opt: { title: '국기 다는 방법' }, more: { conclude: '현충일에는 사이렌에 맞춰 묵념하고, 국기는 조기로 달아요. 그 뜻을 알고 나누면 추모가 다음 사람에게 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '동생에게 현충일에 조기를 다는 까닭을 설명하는 말을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.nations', type: 'activity', title: '국경 넘는 추모',
        method: '국경을 넘는 추모 방식 표 읽기', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 학생 수가 보이고, 표를 보며 공간마다 기리는 대상을 고른다.', base: '값 표시 없이 막대와 표를 읽고 공간마다 기리는 대상과 방식을 고른다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 공통점을 고른 뒤 활동지에 설명한다.' },
        activity: {
          title: '국경 넘는 추모', tool: 'chart',
          teacher: '"가상 학급 설문에서 가 보고 싶은 추모 공간을 물었어요. 실제 통계가 아니라 우리 반 연습 자료예요. 막대를 읽고, 공간마다 누구를 어떻게 기리는지 견줘 봐요." 막대를 읽은 뒤 대상·방식 물음으로 넘어간다. "유엔기념공원은 외국 사람 묘지라 우리와 상관없어요"라는 학생에게 "그분들은 왜 이 땅에 잠들어 있을까요?"라고 되묻는다. 추모 공간은 국적을 넘어 희생을 기리고 평화를 바라는 뜻을 함께 담는다는 점을 짚는다.',
          task: '가상 설문 막대와 표를 읽고, 추모 공간마다 기리는 대상과 방식을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            CPICK('가상 설문에서 가 보고 싶다는 학생이 가장 많은 공간을 고르세요.', VISIT, '가장 높은 막대는?', ['국립서울현충원', '국립대전현충원', '유엔기념공원'], 2, { d: 0.15 }),
            CVAL('세 공간을 고른 학생 수를 모두 더하면 몇 명인가요?', VISIT, '모두 몇 명?', 26, { d: 0.25 }),
            CPICK('유엔기념공원이 기리는 대상을 고르세요.', VISIT, '유엔기념공원이 기리는 대상은?', ['6·25전쟁 때 함께 싸운 유엔군 전사자', '조선 시대 왕들', '올림픽 메달리스트'], 0, { why: ['', '왕릉은 다른 문화유산이에요.', '운동선수를 기리는 곳이 아니에요.'], d: 0.3 }),
            CPICK('세 추모 공간의 공통점으로 가장 알맞은 것을 고르세요.', VISIT, '세 공간의 공통점은?', ['나라와 평화를 위한 희생을 기린다', '모두 같은 나라 사람만 모신다', '축하 행사를 여는 곳이다'], 0, { why: ['', '유엔기념공원에는 여러 나라 전사자가 잠들어 있어요.', '추모 공간은 기리는 곳이에요.'], d: 0.35, more: { conclude: '현충원과 유엔기념공원은 국적을 넘어 희생을 기리는 곳이에요. 희생을 기억하는 일은 다시는 그런 희생이 없기를 바라는 평화의 마음과 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '추모 공간을 표로 견주세요.', columns: ['공간', '있는 곳', '기리는 대상'], cells: [['국립서울현충원', '서울', ''], ['국립대전현충원', '대전', ''], ['유엔기념공원', '부산', '']] }] },
        notes: '설문 수치는 수업용 가상 값이다. 특정 나라·집단을 탓하는 말을 쓰지 않는다.',
      }),
      M({
        id: 'activity.visit', type: 'activity', title: '추모 공간 방문 안내문',
        method: '추모 공간 방문 안내문 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀을 보고 채운다.', base: '공간 소개·지킬 예절·알아 둘 사실을 문항마다 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에 외국인 방문객을 위한 한 줄을 더한다.' },
        activity: {
          title: '방문 안내문', tool: 'rubric-writing',
          teacher: '"추모 공간 한 곳을 골라 처음 가는 친구를 위한 방문 안내문을 써 봐요. 공간 소개, 지킬 예절, 알아 둘 사실이 들어가야 해요." 문항마다 기준표를 함께 읽는다. 예절 칸에 "조용히"만 쓰는 학생에게 "참배할 때, 사진 찍을 때, 다닐 때 각각 무엇을 지키면 될까요?"라고 묻는다. 사실은 공식 누리집 안내로 확인해 쓰게 한다.',
          task: '추모 공간 한 곳의 방문 안내문을 공간 소개·예절·알아 둘 사실로 쓰고 기준표로 점검해요.', levels: NONE,
          items: [
            RWQ('공간 소개를 2문장으로 쓰세요.', '추모 공간 한 곳(현충원·유엔기념공원 등)이 어디에 있고 누구를 기리는지 쓰세요.', ['공간 이름과 있는 곳을 썼다', '기리는 대상을 정확히 썼다', '공식 안내로 확인한 사실만 썼다'], { min: 40, max: 300, sent: [2, 3], starter: '~은 ~에 있다. 이곳은 ~을 기리는 곳이다.', plus: '공간이 만들어진 까닭을 덧붙였다', d: 0.35 }),
            RWQ('지킬 예절을 2~3문장으로 쓰세요.', '그 공간을 방문할 때 지킬 예절을 참배·사진·다니기로 나누어 쓰세요.', ['예절을 둘 이상 썼다', '행동이 보이게 구체적으로 썼다', '명령보다 권하는 말투로 썼다'], { min: 40, max: 300, sent: [2, 4], must: [['예절', '참배', '조용']], starter: '참배할 때는 ~. 사진은 ~', plus: '왜 그 예절을 지키는지 까닭을 썼다', d: 0.4 }),
            RWQ('방문 전에 알아 둘 사실을 2문장으로 쓰세요.', '방문 전에 알아 두면 좋은 사실(운영 안내 확인하기·기념일 행사 등)과 확인할 곳을 쓰세요.', ['알아 둘 사실을 썼다', '확인할 공식 안내를 밝혔다', '과장이나 짐작을 넣지 않았다'], { min: 40, max: 300, sent: [2, 3], starter: '방문 전에 ~을 확인하세요. 확인할 곳은 ~', plus: '외국인 방문객을 위한 쉬운 한 줄을 더했다', d: 0.4, more: { conclude: '좋은 안내문은 확인한 사실, 구체적인 예절, 모두를 배려하는 말로 그 공간의 뜻을 지켜 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '안내문을 한 장으로 정리하세요.', columns: ['항목', '내용'], cells: [['공간 소개', ''], ['지킬 예절', ''], ['알아 둘 사실', ''], ['확인한 곳', '']] }] },
      }),
      M({
        id: 'activity.talk', type: 'activity', title: '추모와 평화 토의',
        method: '추모와 평화 토의 진행', tool: 'timer', minutes: 36,
        levels: { easy: '토의 순서 카드 3장만 놓고, 문항 글에 적힌 시간대로 맞추며, 교사가 질문 카드를 나눠 준다.', base: '순서 카드 4장을 놓고, 단계 시간을 스스로 셈해 맞춘 뒤 나온 질문 수를 기록하고 점검한다.', challenge: '마친 뒤 점검에 \'모둠 합의 문장을 썼다\'가 더해진다.' },
        activity: {
          title: '추모와 평화 토의', tool: 'timer',
          teacher: '"오늘 토의 질문은 \'희생을 기억하는 일은 평화와 어떤 관계일까?\'예요. 순서는 사실/의견 나누기 → 질문 만들기 → 토의 → 정리, 한 단계 7분이에요." 순서를 놓고 타이머를 맞춘 뒤 신호에 맞춰 진행한다. 토의 중 특정 나라 사람 전체를 탓하는 말이 나오면 "역사 속 사건의 책임과 그 나라 사람 전체를 미워하는 것은 같을까요?"라고 되묻는다. "추모는 전쟁을 기억하는 것이니 평화와 반대다"라는 말에는 "희생을 기억하는 사람들은 무엇을 바랄까요?"라고 묻고, 여러 관점이 있을 수 있으니 근거로 말하게 한다.',
          task: '토의 순서를 놓고 단계 타이머를 맞춰 토의한 뒤, 나온 질문 수를 적고 점검표에 표시해요.', levels: NONE,
          items: [
            TORDER('추모와 평화 토의의 순서 카드를 차례대로 놓으세요.', '추모와 평화 토의 순서', ['사실과 의견 나누기', '질문 만들기', '토의하기', '정리하기'], { k: 3 }),
            TPLAN('토의 28분을 네 단계에 똑같이 나누어, 쉬는 시간 없이 네 번 돌도록 타이머를 맞추세요.', '토의 단계 타이머', { work: 7, rest: 0, rounds: 4 }, ['토의', '쉬기'], { easy: '한 단계 7분, 쉬기 0분, 4번으로 맞추세요.' }),
            { prompt: '토의에서 모둠이 만든 질문 수와 나온 근거 수를 기록판에 적으세요.', toolOptions: { title: '토의 기록', unit: '개', fields: [{ label: '만든 질문', unit: '개' }, { label: '나온 근거', unit: '개' }] }, target: { records: true }, difficulty: 0.15 },
            TCHECK('토의를 마친 뒤 토의 점검표에 표시하세요.', '추모와 평화 토의 점검', ['사실과 의견을 나누어 말했다', '근거를 들어 의견을 냈다', '어느 나라 사람 전체를 탓하는 말을 하지 않았다'], { plus: '모둠 합의 문장을 썼다', more: { conclude: '희생을 기억하는 일과 평화를 바라는 마음은 서로 반대가 아니라 이어질 수 있어요. 여러 관점을 근거로 견주면 그 관계가 더 분명해져요.' } }),
          ],
        },
        worksheet: { items: [
          { type: 'table', prompt: '토의 기록을 남기세요.', columns: ['질문', '나온 근거(사실)', '의견'], cells: [['', '', ''], ['', '', '']] },
          { type: 'short', prompt: '우리 모둠의 합의 문장(또는 서로 다른 의견을 정리한 문장)을 쓰세요.' },
        ] },
        notes: '교사가 신호와 시간을 진행한다. 토의 내용과 입장은 채점하지 않는다. 안보 주제는 표현에 유의한다(research-days.md §4). 이 활동 하나로 전개 36분을 쓴다.',
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '보훈의 뜻 한두 문장',
        method: '보훈의 뜻 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'보훈은 ___ 을 기리고 보답하는 일이다\')로 쓴다.', base: '보훈의 뜻과 제도 하나를 넣어 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓰고, 내가 할 수 있는 일을 덧붙인다.' },
        wrap: {
          teacher: '"보훈이 무엇인지, 오늘 본 제도 하나를 넣어 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "보훈은 돈을 주는 것이다"처럼 한쪽만 쓰는 학생에게 "예우와 기억은 어떤 일이었나요?"라고 묻는다. 출구 2번에서 국경일과 같은 방식으로 국기를 단다고 고른 학생에게 조기를 다시 떠올리게 한다.',
          exitTicket: [
            XRW('보훈의 뜻을 한두 문장으로 쓰고 기준표로 점검하세요.', '보훈이 무엇인지 오늘 본 제도 하나를 넣어 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['보훈']], sample: '보훈은 나라를 위해 희생한 분들의 뜻을 기리고 보답하는 일이다. 현충일을 기념일로 정해 해마다 기리는 것도 다음 세대가 잊지 않게 하는 보훈이다.' }),
            XCHOICE('현충일에 태극기를 다는 방법을 고르세요.', ['깃봉 끝까지 올려 단다', '깃봉에서 깃면 너비만큼 내려 단다', '달지 않는다'], 1, '현충일처럼 희생을 기리는 날에는 조기로 달아요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '보훈의 뜻',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '현충일 오전 10시 사이렌이 울리면 ___ 분 동안 묵념한다.', answer: '1' },
            { type: 'short', prompt: '내가 할 수 있는 보훈의 실천 하나를 쓰세요.' },
          ],
          easy: { note: '\'보훈은 ___ 을 기리고 보답하는 일이다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.feel', type: 'wrap', title: '안내문 짝 점검',
        method: '안내문 짝 점검', tool: 'emotion', minutes: 8,
        levels: { easy: '짝 안내문의 존중 표현 정도를 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 한 줄 쓴다.', challenge: '짝에게 고칠 제안 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"짝의 방문 안내문을 읽고 존중하는 표현이 얼마나 담겼는지 눈금으로 골라요." 눈금 뒤 까닭을 한 줄 쓰게 한다. 명령하는 말투가 많은 안내문을 본 학생에게 "\'떠들지 마시오\'와 \'조용히 참배해 주세요\'는 읽는 사람에게 어떻게 다를까요?"라고 묻는다. 피드백은 사람이 아니라 글을 두고 한다.',
          exitTicket: [
            XSCALE('짝 안내문의 존중 표현 정도를 1~5로 고르세요.', '짝의 추모 공간 방문 안내문', '고마움', { 1: '존중 표현이 적다', 5: '존중 표현이 많다' }, '짝 안내문은 얼마나 존중을 담았나요?'),
            XSHORT('그렇게 고른 까닭을 한 줄 쓰세요.'),
            XCHOICE('존중을 담은 안내 문장을 고르세요.', ['떠들지 마시오', '조용히 참배해 주세요', '사진 찍지 마'], 1, '권하는 말투가 읽는 사람을 존중해요.'),
          ],
        },
        worksheet: {
          title: '안내문 짝 점검',
          items: [
            { type: 'table', prompt: '짝 안내문을 점검하세요.', columns: ['항목', '○/△'], cells: [['확인한 사실', ''], ['구체적인 예절', ''], ['존중하는 말투', '']] },
            { type: 'short', prompt: '짝에게 줄 고칠 제안 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '토의 뒤 생각 세 문장',
        method: '토의 성찰 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'토의 전 나는 ~. 토의에서 ~. 지금 나는 ~\')을 보고 쓴다.', base: '세 문장으로 쓰고 기준표로 점검한다.', challenge: '나와 다른 의견을 존중하는 표현을 한 문장 넣는다.' },
        wrap: {
          teacher: '"토의 뒤 희생의 기억과 평화의 관계에 대한 내 생각을 세 문장으로 남겨요. 생각은 채점하지 않고, 근거를 들었는지만 스스로 점검해요." 쓰기 전에 기준표를 함께 읽는다. "잘 모르겠다"고 쓰는 학생에게 "토의에서 들은 말 가운데 가장 기억에 남는 한 문장은 무엇이었나요?"라고 묻는다.',
          exitTicket: [
            XRW('토의 뒤 내 생각을 세 문장으로 쓰고 점검하세요.', '희생의 기억과 평화의 관계에 대한 토의 전 생각, 들은 근거, 지금 생각을 세 문장으로 쓰세요.', ['토의 전과 뒤의 생각을 모두 썼다', '토의에서 들은 근거를 하나 이상 썼다', '다른 의견을 깎아내리지 않았다'], { min: 50, max: 300, must: [['평화']], starter: '토의 전 나는 ~라고 생각했다. 토의에서 ~를 들었다. 지금 나는 ~', sample: '토의 전 나는 추모가 전쟁만 떠올리게 한다고 생각했다. 토의에서 희생을 기억해야 다시 그런 일이 없게 노력한다는 근거를 들었다. 지금 나는 기억이 평화를 지키는 출발이라고 본다.' }),
            XCHOICE('토의에서 나와 다른 의견을 들었을 때 알맞은 태도를 고르세요.', ['틀렸다고 바로 말한다', '근거를 묻고 내 생각과 견주어 본다', '못 들은 척한다'], 1, '근거를 묻고 견주면 내 생각도 더 단단해져요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '토의 뒤 내 생각',
          items: [
            { type: 'short', prompt: '토의에서 가장 기억에 남는 근거 하나를 쓰세요.' },
            { type: 'short', prompt: '나와 다른 의견에서 배울 점 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 7. 6·10민주항쟁 기념일 — 헌법 개정과 시민 참여
  // ======================================================================================================
  {
    const M = MOD('june10');
    const ART = { type: 'bar', title: '6월 항쟁의 요구가 담긴 현행 헌법 조문(조문 번호)', yLabel: '조문 번호', xLabel: '조문 내용', showTable: true, data: [['대통령 직접 선거', 67], ['대통령 임기 5년 단임', 70], ['헌법재판소', 111]] };
    const SCHOOL = { text: '가상 인물 민서는 학교 휴대폰 규칙이 너무 엄하다고 느낀다. 같은 생각을 하는 친구가 여럿 있다.', who: '민서', motif: 'house', choices: [
      { id: 'post', text: '익명 게시판에 선생님을 비난하는 글을 올린다', result: '글이 퍼지지만 규칙은 그대로이고 분위기만 나빠진다.', impact: [{ who: '선생님들', text: '마음이 상한다', tone: -1 }],
        next: { text: '학생회에서 "공식 안건으로 내 보면 어때?"라고 연락이 왔다.', choices: [
          { id: 'switch', text: '비난 글을 지우고 학생회에 안건을 낸다', result: '늦었지만 공식 논의가 시작된다.', impact: [{ who: '민서', text: '의견이 제자리를 찾는다', tone: 1 }], ending: '의견은 공식 통로에 실릴 때 바뀔 힘을 얻는다.' },
          { id: 'more', text: '게시판에 더 센 글을 올린다', result: '논쟁만 커지고 해결 방법은 나오지 않는다.', impact: [{ who: '학교', text: '갈등이 깊어진다', tone: -1 }], ending: '비난은 관심을 끌어도 해결로 이어지기 어렵다.' }] } },
      { id: 'council', text: '학생회에 안건으로 낸다', result: '학생회가 반별 의견을 모으기로 한다.', impact: [{ who: '친구들', text: '자기 의견을 낼 기회가 생긴다', tone: 1 }],
        next: { text: '모은 의견을 어떻게 전할지 정한다.', choices: [
          { id: 'formal', text: '근거를 정리해 학교에 공식 건의서를 낸다', result: '학교가 학생 대표를 불러 이야기를 듣는다.', impact: [{ who: '학교', text: '학생 의견을 듣는다', tone: 1 }],
            next: { text: '학교가 \'시범 운영 뒤 다시 논의\'를 제안했다.', choices: [
              { id: 'accept', text: '시범 운영 결과를 함께 점검하기로 한다', result: '한 달 뒤 자료를 보고 규칙을 고친다.', impact: [{ who: '모두', text: '함께 정한 규칙을 지킨다', tone: 1 }], ending: '절차를 거친 변화는 모두가 지키기 쉽다.' },
              { id: 'reject', text: '바로 바꾸지 않으면 안 된다고 버틴다', result: '논의가 멈추고 다시 처음으로 돌아간다.', impact: [{ who: '민서', text: '바꿀 기회를 놓친다', tone: -1 }], ending: '절차 안의 타협도 참여의 한 방법이다.' }] } },
          { id: 'rumor', text: '"곧 바뀐대"라는 소문부터 퍼뜨린다', result: '아직 정해진 것이 없어 혼란이 생긴다.', impact: [{ who: '친구들', text: '헷갈린다', tone: -1 }], ending: '확정되지 않은 일은 확인 뒤에 알린다.' }] } },
      { id: 'give', text: '어차피 안 바뀐다며 포기한다', result: '아무 일도 일어나지 않는다.', impact: [{ who: '민서', text: '불만이 그대로 남는다', tone: 0 }], ending: '말하지 않은 의견은 반영될 수 없다.' }] };
    const SCHOOL_R = [{ id: 'channel', text: '의견은 공식 통로로 낼 때 반영될 수 있다' }, { id: 'evidence', text: '근거를 정리하면 설득력이 커진다' }, { id: 'process', text: '절차를 거친 결정은 모두가 지키기 쉽다' }, { id: 'loud', text: '크게 비난할수록 빨리 바뀐다', why: '비난은 관심을 끌어도 해결로 이어지기 어려워요.' }, { id: 'useless', text: '학생 의견은 어차피 반영되지 않는다', why: '학생회·건의처럼 의견을 실을 통로가 있어요.' }];
    MODS.push(
      M({
        id: 'intro.who', type: 'intro', title: '헌법은 누가 바꿀까',
        method: '헌법은 누가 바꿀까 짐작', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 두 장(국회·국민)만 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 개정 절차에 참여하는 네 주체를 학생이 고른다.', challenge: '마지막에 국민 투표를 하는 뜻을 한 문장으로 말한다.' },
        intro: {
          teacher: '"헌법은 누가 바꿀 수 있을까요? 국회만? 대통령만?" 대답을 듣고 시연 단추로 헌법 개정에 참여하는 주체 카드가 바구니에 담기는 모습을 보여 준다. "국회가 정하면 끝 아니에요?"라는 말이 나오면 "법률은 국회가 정하지만, 헌법은 마지막에 누가 정할까요?"라고 되묻는다. 1987년 6월 시민들이 요구한 것이 국민 투표를 거쳐 오늘 헌법이 되었다고 잇는다.',
          student: '헌법을 바꾸는 절차에 참여하는 주체 카드를 바구니에 골라 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '헌법 개정에 참여하는 주체', speak: false, cards: [
            { id: 'na', text: '국회(제안·의결)' }, { id: 'pres', text: '대통령(제안·공포)' }, { id: 'people', text: '국민(국민 투표)' }, { id: 'court', text: '헌법재판소(개정안 의결)' }, { id: 'pub', text: '공고(국민에게 알림)' }] }, sequence: [{ pick: ['na', 'pres', 'people', 'pub'] }] },
          art: { draw: 'a paper constitution book in the centre with paper arrows from a parliament building, a presidential seal and a crowd of paper citizens dropping ballots into a box', banner: '헌법은 누가 바꿀까?' },
        },
        notes: '헌법 개정 절차(제안 → 공고 → 국회 의결 → 국민 투표 → 공포)는 헌법 제128조~제130조. 헌법재판소는 개정안을 의결하지 않는다(함정 카드).',
      }),
      M({
        id: 'intro.ways', type: 'intro', title: '두 시대의 의견 내기',
        method: '1987년과 오늘의 의견 내기 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 보기 카드를 먼저 보이고 함께 붙인다.', base: '두 시대 가지마다 카드 하나 이상을 학생이 붙인다.', challenge: '두 시대의 차이가 무엇 때문일지 짐작해 말한다.' },
        intro: {
          teacher: '"1987년 6월, 시민들은 어떻게 의견을 냈을까요? 그리고 오늘 우리는 어떻게 의견을 낼까요?" 시연 단추로 카드가 두 시대 가지에 붙는 모습을 보여 준다. "옛날에도 지금처럼 하면 됐잖아요"라는 말이 나오면 "대통령을 국민이 직접 뽑지 못하던 때, 의견을 실을 통로가 넉넉했을까요?"라고 되묻는다. 오늘 누리는 참여 통로가 어떻게 넓어졌는지 따라간다고 밝힌다.',
          student: '의견을 내는 방법 카드를 \'1987년 6월\'과 \'오늘\' 가지에 붙여 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '의견을 내는 방법', slots: ['1987년 6월', '오늘'], cards: ['거리에서 직선제를 외침', '국민 투표로 개헌을 확정', '대통령을 직접 투표로 뽑음', '학생회·건의로 의견 내기'] }, sequence: [{ sort: { '1987년 6월': ['거리에서 직선제를 외침', '국민 투표로 개헌을 확정'], 오늘: ['대통령을 직접 투표로 뽑음', '학생회·건의로 의견 내기'] } }] },
          art: { draw: 'a paper mind map split in two halves, on the left a crowd of paper citizens in June 1987 holding paper banners, on the right a calm polling booth and a school council meeting', banner: '그때와 지금의 목소리' },
        },
        notes: '1987년 국민 투표는 그해 10월 헌법 개정을 확정한 절차다(기존 차시 사실). 특정 정치인 이름은 쓰지 않는다.',
      }),
      M({
        id: 'intro.first', type: 'intro', title: '첫 투표 날 장면',
        method: '첫 투표 날 장면 듣기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 카드 두 장을 차례로 놓아 보인다.', base: '장면 카드 세 장을 학생이 차례대로 놓는다.', challenge: '첫 투표에서 궁금한 점 하나를 말한다.' },
        intro: {
          teacher: '"가상 인물 은호가 만 18세가 되어 처음 투표하러 가요. 장면을 들어 볼까요? 은호는 먼저 공식 선거 정보를 읽고, 신분증을 챙겨 투표소에 가고, 가림막 안에서 투표해요." 시연 단추로 장면 카드가 차례대로 놓이는 모습을 보여 준다. "투표는 그냥 가서 찍으면 돼요"라는 말이 나오면 "누구를 왜 뽑을지 알려면 무엇을 먼저 읽어야 할까요?"라고 되묻는다. 오늘은 첫 투표를 준비하는 차례를 정리한다고 밝힌다.',
          student: '가상 인물 은호의 첫 투표 장면 카드를 일어난 차례대로 놓아 보세요.',
          demo: { tool: 'story', options: { mode: 'order', title: '은호의 첫 투표', slots: 3, cards: [{ id: 'vote', text: '가림막 안에서 투표한다', motif: 'house' }, { id: 'read', text: '공식 선거 정보를 읽는다', motif: 'book' }, { id: 'go', text: '신분증을 챙겨 투표소에 간다', motif: 'sun' }] }, sequence: [{ order: ['read', 'go', 'vote'] }] },
          art: { draw: 'a young paper figure walking to a paper polling station with an ID card, a paper ballot box and a booth curtain, a small calendar marked with a circle', banner: '은호의 첫 투표' },
        },
        notes: '선거권 연령(만 18세)은 공직선거법 기준이다(사람 확인). 실제 선거·후보 이야기는 하지 않는다.',
      }),

      M({
        id: 'activity.steps', type: 'activity', title: '개정 절차 띠',
        method: '헌법 개정 절차 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '절차 카드 3장(제안·공고·국회 의결)만 차례대로 놓고, 틀린 자리는 바로 알려 준다.', base: '절차 카드 5장을 차례대로 놓고, 단계마다 기준을 짝지은 뒤 1987년의 개정을 설명하는 카드를 고른다.', challenge: '카드를 섞어 시작하고, 활동지에 단계별 기준(공고 20일 이상 등)을 정리한다.' },
        activity: {
          title: '개정 절차 띠', tool: 'timeline',
          teacher: '"헌법은 법률보다 바꾸기 어렵게 되어 있어요. 제안 → 공고 → 국회 의결 → 국민 투표 → 공포. 왜 이렇게 여러 단계를 거칠까요?" 놓을 때마다 "이 단계에서 누가 무엇을 확인하나요?"라고 묻는다. 국민 투표를 국회 의결보다 앞에 두는 학생에게 "국회가 의결한 안을 국민이 확정할까요, 그 반대일까요?"라고 되묻는다. 1987년 10월 국민 투표로 개정안이 확정되었다는 점을 짚는다.',
          task: '헌법 개정 절차를 차례대로 놓고, 단계마다 기준을 짝지어요.', levels: LIVE,
          items: [
            ORDERQ('헌법 개정 절차를 차례대로 놓으세요.', ['개정안 제안', '공고(국민에게 알림)', '국회 의결', '국민 투표', '대통령 공포'], { k: 3, d: 0.25, opt: { axis: ['처음', '끝'] } }),
            MATCHQ('절차 칸에 그 단계의 기준을 짝지으세요.', [['공고', '20일 이상 국민에게 알린다'], ['국회 의결', '재적 의원 3분의 2 이상이 찬성한다'], ['국민 투표', '투표자 과반수가 찬성해야 확정된다']], { k: 2, d: 0.35, opt: { axis: ['처음', '끝'] } }),
            PICKQ('1987년 헌법 개정을 바르게 설명한 카드만 고르세요.', ['6월 항쟁 뒤 국민 투표로 개정안이 확정되었다', '대통령을 국민이 직접 뽑도록 바뀌었다'], ['국회 의결만으로 확정되었다', '헌법재판소가 개정안을 만들었다'], { d: 0.35, opt: { basket: '바른 설명', axis: ['처음', '끝'] }, more: { conclude: '헌법은 여러 단계를 거쳐야 바뀌고, 마지막은 국민 투표예요. 1987년 6월의 요구도 이 절차를 거쳐 오늘 헌법이 되었어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '헌법 개정 단계별 기준을 정리하세요.', columns: ['단계', '누가', '기준'], cells: [['제안', '', ''], ['공고', '', ''], ['국회 의결', '', ''], ['국민 투표', '', '']] }] },
        notes: '단계별 기준은 헌법 제128조~제130조 원문 범위(공고 20일 이상, 국회 재적 3분의 2 이상 찬성, 국민 투표 투표자 과반수 찬성)다.',
      }),
      M({
        id: 'activity.clause', type: 'activity', title: '요구와 헌법 조문 잇기',
        method: '항쟁의 요구와 헌법 조문 잇기', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 조문 번호가 보이고, 표를 보며 요구 하나와 조문을 잇는다.', base: '값 표시 없이 표를 읽고 요구 세 가지와 조문을 잇는다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 조문의 의미를 고른 뒤 활동지에 설명한다.' },
        activity: {
          title: '요구와 조문 잇기', tool: 'chart',
          teacher: '"1987년 6월 시민들의 핵심 요구는 대통령 직선제였어요. 그 요구는 지금 헌법의 어느 조문에 담겼을까요? 표에서 조문 번호를 읽어 봐요." 표를 읽은 뒤 요구와 조문을 잇게 한다. "조문 번호는 외울 필요 없잖아요"라는 학생에게 "번호를 외우는 게 아니라, 번호로 원문을 찾아 읽을 수 있다는 게 중요해요. 국가법령정보센터에서 제67조를 찾아볼까요?"라고 말한다. 헌법재판소가 1987년 헌법에서 생겼다는 점을 짚는다.',
          task: '현행 헌법 조문 번호 표를 읽고, 6월 항쟁의 요구와 조문을 이어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            CPICK('대통령을 국민이 직접 뽑는다는 조문을 고르세요.', ART, '직접 선거 조문은?', ['제67조', '제70조', '제111조'], 0, { d: 0.15 }),
            CPICK('대통령 임기를 5년 단임으로 정한 조문을 고르세요.', ART, '임기 조문은?', ['제67조', '제70조', '제111조'], 1, { d: 0.2 }),
            CVAL('헌법재판소를 정한 조문 번호를 표에서 읽어 쓰세요.', ART, '헌법재판소 조문 번호는?', 111, { d: 0.25 }),
            CPICK('대통령 임기를 한 번만으로 정한(단임) 조문의 의미로 가장 알맞은 것을 고르세요.', ART, '단임 조문의 의미는?', ['한 사람이 권력을 오래 쥐지 못하게 한다', '대통령을 국회가 뽑는다', '선거를 하지 않는다'], 0, { why: ['', '대통령은 국민이 직접 뽑아요(제67조).', '대통령은 선거로 뽑아요.'], d: 0.35, more: { conclude: '직선제(제67조), 5년 단임(제70조), 헌법재판소(제111조) — 6월 항쟁의 요구는 이렇게 오늘 헌법의 조문이 되었어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '요구와 조문을 이어 정리하세요.', columns: ['1987년 요구', '현행 헌법 조문', '오늘의 의미'], cells: [['대통령 직선제', '제67조', ''], ['권력 집중 막기', '제70조', ''], ['헌법을 지키는 기관', '제111조', '']] }] },
        notes: '막대 값은 조문 번호다(수량이 아님). 조문 인용은 짧은 문장만, 원문은 국가법령정보센터에서 함께 읽는다.',
      }),
      M({
        id: 'activity.compare', type: 'activity', title: '참여 방식 나누기',
        method: '참여 방식을 시대와 성격으로 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '참여 방식 카드 3장(칸마다 1장)만 나누고, 틀린 바구니는 바로 알려 준다.', base: '카드 6장을 성격 바구니로 나누고, 합법적 통로와 아닌 것을 나눈다.', challenge: '카드를 섞어 시작하고, 합법적 통로의 조건을 나누는 카드가 더해진다.' },
        activity: {
          title: '참여 방식 나누기', tool: 'sortboard',
          teacher: '"시민이 의견을 내는 방법은 성격에 따라 나눌 수 있어요. 의견 표현, 결정 참여, 감시·확인." 카드를 넣을 때마다 "이 방법으로 시민은 무엇을 할 수 있나요?"라고 묻는다. "허위 정보로 여론을 모으는 것도 참여예요"라는 학생에게 "다른 사람의 판단을 속여서 모은 의견을 참여라고 할 수 있을까요?"라고 되묻는다. 합법적 참여 통로는 사실에 기대고, 다른 사람의 권리를 해치지 않는다는 점을 짚는다.',
          task: '참여 방식 카드를 성격 바구니로 나누고, 합법적 참여 통로인지 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('참여 방식 카드를 성격 바구니로 나누세요.', ['의견 표현', '결정 참여', '감시·확인'], [
              ['서명 운동에 참여하기', '평화로운 집회에서 의견 밝히기'],
              ['선거에서 투표하기', '주민 투표에 참여하기'],
              ['공개된 회의록 찾아 읽기', '선거 공보를 견주어 읽기'],
            ], { k: 1, d: 0.3 }),
            SBQ('카드를 합법적 참여 통로와 통로가 아닌 것으로 나누세요.', ['합법적 참여 통로', '통로가 아닌 것'], [
              ['학생회에 안건 내기', '지역 공청회에서 발언하기', '공식 기관에 건의서 내기'],
              ['남을 비방하는 글 퍼뜨리기', '허위 정보로 여론 모으기', '공공 시설 부수기'],
            ], { k: 2, d: 0.3 }),
            SBQ('합법적 통로의 조건에 맞는지 나누세요.', ['조건에 맞음', '조건에 어긋남'], [
              ['사실에 기대어 의견을 낸다', '다른 사람의 권리를 해치지 않는다'],
              ['상대를 겁주어 의견을 바꾸게 한다'],
            ], { k: 1, hard: [['정해진 절차와 기한을 지킨다'], ['익명 뒤에 숨어 거짓을 퍼뜨린다']], d: 0.35, more: { conclude: '합법적 참여는 사실에 기대고, 절차를 지키고, 다른 사람의 권리를 해치지 않아요. 1987년의 요구로 넓어진 통로를 오늘 우리가 쓰고 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 오늘 쓸 수 있는 합법적 참여 통로 하나와 그 조건을 쓰세요.' }] },
        notes: '특정 정당·단체·현재 쟁점을 예로 들지 않는다.',
      }),
      M({
        id: 'activity.school', type: 'activity', title: '학교에서 의견 내기',
        method: '학교에서 의견 내는 방식 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(의견 전하는 방법)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길(학교 제안에 답하기)까지 가고, 근거 카드를 고른다.' },
        activity: {
          title: '학교에서 의견 내기', tool: 'dilemma',
          teacher: '"가상 인물 민서는 학교 휴대폰 규칙에 불만이 있어요. 어떻게 의견을 내면 좋을까요?" 고를 때마다 "이 방법으로 규칙이 바뀔 가능성은 얼마나 될까요?"라고 묻는다. 익명 비난 글을 고른 학생에게 "관심은 끌었지만, 누가 그 글을 보고 규칙을 고치기로 결정할까요?"라고 되묻는다. 학교의 \'시범 운영\' 제안을 받아들이는 길처럼 절차 안의 타협도 참여라는 점을 짚는다.',
          task: '민서가 되어 학교 규칙에 의견을 내는 통로를 고르고 결과를 끝까지 따라가요.', levels: NONE,
          items: [
            DILQ('민서가 되어 학교 규칙에 의견을 내는 장면에서 선택하고 근거를 고르세요.', SCHOOL, [['council', 'formal', 'accept']], SCHOOL_R, ['channel', 'evidence', 'process'], { opt: { title: '학교 규칙에 대한 의견' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', SCHOOL, SCHOOL_R, ['두 길의 결과를 견주었다', '어느 통로가 결정으로 이어졌는지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('비난 글에서 공식 안건으로 바꾸는 길을 끝까지 가 보고 근거를 고르세요.', SCHOOL, [['post', 'switch']], SCHOOL_R, ['channel'], { d: 0.35, opt: { title: '통로를 바꾸는 길' }, more: { conclude: '의견은 공식 통로에 근거와 함께 실릴 때 결정으로 이어져요. 비난이나 소문은 관심을 끌어도 해결로 잇기 어려워요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '학교에 바꾸고 싶은 규칙이 있다면 어떤 통로로, 어떤 근거와 함께 낼지 쓰세요.' }] },
        notes: '장면은 가상이다. 실제 학교 규칙이나 교사를 비판하는 글로 이어지지 않게 한다.',
      }),
      M({
        id: 'activity.ready', type: 'activity', title: '첫 투표 준비',
        method: '첫 투표 준비 차례와 정보 확인 계획', tool: 'timeline', minutes: 18,
        levels: { easy: '준비 카드 4장만 차례대로 놓고, 틀린 자리는 바로 알려 준다.', base: '준비 카드 6장을 차례대로 놓고, 단계마다 확인할 곳을 짝짓는다.', challenge: '카드를 섞어 시작하고, 공식 정보처만 고르는 문항까지 푼다.' },
        activity: {
          title: '첫 투표 준비', tool: 'timeline',
          teacher: '"만 18세가 되면 첫 투표를 하게 돼요. 무엇부터 준비할까요?" 놓을 때마다 "이 단계는 어디서 확인할 수 있나요?"라고 묻는다. 선거 정보를 친구 단체방에서 얻겠다는 학생에게 "후보와 공약은 어디에서 공식으로 확인할 수 있을까요?"라고 되묻는다. 투표 준비는 누구를 뽑을지 정해 주는 것이 아니라 스스로 판단할 정보를 고르는 일이라는 점을 짚는다.',
          task: '첫 투표 준비 차례를 놓고, 단계마다 공식으로 확인할 곳을 짝지어요.', levels: LIVE,
          items: [
            ORDERQ('첫 투표 준비 단계를 차례대로 놓으세요.', ['선거권이 있는지 확인', '선거 공보·공식 정보 읽기', '공약을 견주어 판단', '투표소 위치 확인', '신분증 챙기기', '가림막 안에서 투표'], { k: 4, d: 0.3, opt: { axis: ['준비', '투표 날'] } }),
            MATCHQ('준비 단계 칸에 확인할 곳을 짝지으세요.', [['투표소 위치 확인', '선거 관리 기관의 공식 안내'], ['선거 공보 읽기', '집으로 오는 선거 공보'], ['신분증 챙기기', '학생증·주민등록증 등 사진 있는 신분증']], { k: 2, d: 0.3, opt: { axis: ['준비', '투표 날'] } }),
            PICKQ('후보 정보를 확인할 공식 정보처만 고르세요.', ['선거 관리 기관의 후보 정보', '집으로 오는 선거 공보'], ['출처 없는 단체방 글', '편집된 짧은 영상'], { d: 0.35, opt: { basket: '공식 정보처', axis: ['준비', '투표 날'] }, more: { conclude: '첫 투표 준비는 선거권 확인에서 시작해, 공식 정보로 스스로 판단하고, 신분증을 챙겨 가림막 안에서 투표하는 것으로 끝나요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 첫 투표 전에 꼭 확인할 정보 두 가지와 확인할 곳을 쓰세요.' }] },
        notes: '선거권 연령·신분증 종류는 중앙선거관리위원회 안내로 확인한다(사람 확인). 특정 선거·후보 이야기는 하지 않는다.',
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '나의 참여 계획서',
        method: '나의 참여 계획서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀을 보고 채운다.', base: '실천할 참여 방식·계획·까닭을 문항마다 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 정보 확인 방법까지 쓴다.' },
        activity: {
          title: '나의 참여 계획서', tool: 'rubric-writing',
          teacher: '"오늘 본 합법적 참여 방식 가운데 내가 실천할 것 하나를 골라 계획서를 써 봐요. 어떤 의견을 낼지는 채점하지 않아요. 통로와 계획이 분명한지만 점검해요." 문항마다 기준표를 함께 읽는다. "언젠가 투표하겠다"처럼 막연한 학생에게 "언제, 어디서, 무엇을 할지 적으면 지킬 수 있을까요?"라고 묻는다.',
          task: '합법적 참여 방식 가운데 실천할 것 하나를 골라 계획서를 쓰고 기준표로 점검해요.', levels: NONE,
          items: [
            RWQ('실천할 참여 방식과 까닭을 2문장으로 쓰세요.', '오늘 배운 합법적 참여 방식 가운데 실천할 것 하나와 그 까닭을 쓰세요.', ['참여 방식을 하나 밝혔다', '합법적 통로임을 확인했다', '까닭을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['참여']], starter: '나는 ~으로 참여하겠다. 왜냐하면 ~', plus: '그 통로의 조건(사실·절차)을 썼다', d: 0.35 }),
            RWQ('언제·어디서·무엇을 할지 계획을 2~3문장으로 쓰세요.', '그 참여를 언제, 어디서, 어떻게 할지 구체적인 계획을 쓰세요.', ['때를 밝혔다', '장소나 통로를 밝혔다', '할 일을 구체적으로 썼다'], { min: 40, max: 300, sent: [2, 4], must: [['계획']], starter: '내 계획은 ~에 ~에서 ~하는 것이다.', plus: '계획을 지켰는지 확인할 방법을 썼다', d: 0.4 }),
            RWQ('참여 전에 정보를 어떻게 확인할지 2문장으로 쓰세요.', '참여하기 전에 필요한 정보를 어디서, 어떻게 확인할지 쓰세요.', ['확인할 정보를 밝혔다', '공식 정보처를 썼다', '출처 없는 정보를 거르는 방법을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['확인']], starter: '참여 전에 ~를 ~에서 확인하겠다.', plus: '서로 다른 정보를 견주는 방법을 썼다', d: 0.4, more: { conclude: '참여는 마음만으로 이루어지지 않아요. 통로를 고르고, 계획을 세우고, 정보를 확인할 때 내 목소리가 결정에 닿아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '참여 계획서를 한 장으로 정리하세요.', columns: ['항목', '내용'], cells: [['참여 방식', ''], ['언제·어디서', ''], ['확인할 정보·출처', '']] }] },
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '조문 하나와 6월 항쟁',
        method: '헌법 조문 하나와 6월 항쟁의 관계 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'제67조는 ___ 요구를 담았다\')로 조문 하나를 쓴다.', base: '조문 하나와 그 요구, 오늘의 의미를 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓴다.' },
        wrap: {
          teacher: '"오늘 본 조문 하나를 골라, 6월 항쟁의 요구와 어떻게 이어지는지 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "제67조는 대통령 조문이다"처럼 짧게 끝내는 학생에게 "그 조문은 1987년 시민들의 어떤 요구를 담았나요?"라고 묻는다. 출구 2번에서 국회 의결만으로 헌법이 바뀐다고 고른 학생에게 절차 띠를 다시 떠올리게 한다.',
          exitTicket: [
            XRW('헌법 조문 하나와 6월 항쟁의 관계를 한두 문장으로 쓰고 기준표로 점검하세요.', '현행 헌법 조문 하나가 6월 항쟁의 어떤 요구를 담았는지 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['제67조', '제70조', '제111조', '조문']], sample: '헌법 제67조는 대통령을 국민의 직접 선거로 뽑는다고 정한다. 1987년 6월 시민들이 요구한 직선제가 이 조문으로 이어졌다.' }),
            XCHOICE('헌법 개정안을 마지막으로 확정하는 절차를 고르세요.', ['국회 의결', '국민 투표', '대통령 제안'], 1, '국회가 의결한 개정안은 국민 투표로 확정되고, 대통령이 공포해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '조문과 6월 항쟁',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '헌법 개정 절차는 제안 → 공고 → 국회 의결 → ___ → 공포 차례다.', answer: '국민 투표' },
            { type: 'short', prompt: '1987년의 개정이 오늘 나의 삶과 어떻게 이어지는지 한 문장으로 쓰세요.' },
          ],
          easy: { note: '\'제67조는 ___ 요구를 담았다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.today', type: 'wrap', title: '오늘 쓸 참여 통로 하나',
        method: '오늘 내가 쓸 참여 통로 하나', tool: 'emotion', minutes: 8,
        levels: { easy: '참여 통로 카드 하나만 고른다.', base: '통로를 고른 뒤 실천할 수 있는 정도를 눈금으로 고른다.', challenge: '언제 쓸지 활동지에 날짜와 함께 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 통로 가운데 내가 실제로 쓸 것 하나를 골라요. 그리고 실천할 수 있는 정도를 눈금으로 골라요. 이름 없이 모아요." 고른 뒤 출구 2번으로 넘어간다. 아무 통로도 고르지 않으려는 학생에게 "학급 회의에서 의견 한 번 내는 것도 통로예요. 가장 작게 시작할 수 있는 것은 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '내가 쓸 참여 통로', cards: ['학급 회의에서 의견 내기', '학생회에 안건 내기', '공식 기관에 건의서 내기', '선거 공보 견주어 읽기', '익명 비방 글 쓰기', '출처 없는 정보 퍼뜨리기'] }, prompt: '내가 쓸 합법적 참여 통로 카드를 고르세요(통로가 아닌 카드는 남겨요).', target: { pick: ['학급 회의에서 의견 내기', '학생회에 안건 내기', '공식 기관에 건의서 내기', '선거 공보 견주어 읽기'] }, difficulty: 0.2 },
            XSCALE('그 통로를 실천할 수 있는 정도를 1~5로 고르세요(익명).', '오늘 고른 참여 통로를 이번 학기에 실천하기', '뿌듯함', { 1: '어렵다', 5: '꼭 해 보겠다' }, '얼마나 실천할 수 있을까요?'),
            MOOD,
          ],
        },
        worksheet: {
          title: '내가 쓸 참여 통로',
          items: [
            { type: 'short', prompt: '내가 쓸 참여 통로 하나와 언제 쓸지 쓰세요.' },
            { type: 'short', prompt: '그 통로가 합법적인 통로인 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '출구 1번은 합법적 통로 네 장을 모두 고르는 문항이고, 실제로 쓸 하나는 활동지에 적는다.',
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '투표 준비 점검표',
        method: '투표 준비 점검표', tool: 'timer', minutes: 8,
        levels: { easy: '점검 항목 앞 세 개를 교사와 함께 읽고 표시한다.', base: '다섯 항목을 스스로 읽고 모두 표시한다.', challenge: '정보를 확인할 공식 기관 이름을 활동지에 쓴다.' },
        wrap: {
          teacher: '"첫 투표를 위한 준비 점검표예요. 다섯 칸을 읽고 앞으로 할 준비로 표시해요." 점검 뒤 출구 2번으로 넘어간다. "투표 날 생각하면 되죠"라는 학생에게 "공약을 견주어 읽는 데 시간이 얼마나 걸릴까요? 미리 할 일은 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '첫 투표 준비 점검' }, prompt: '첫 투표 준비 점검 다섯 칸을 읽고 모두 표시하세요.', target: { selfCheck: ['선거권이 있는지 확인한다', '선거 공보와 공식 후보 정보를 읽는다', '공약을 견주어 스스로 판단한다', '투표소 위치를 미리 확인한다', '사진 있는 신분증을 챙긴다'] }, difficulty: 0.15 },
            XCHOICE('후보 정보를 확인하기에 가장 알맞은 곳을 고르세요.', ['출처 없는 단체방 글', '선거 관리 기관의 공식 후보 정보', '편집된 짧은 영상'], 1, '공식 정보처에서 원문을 확인하고 스스로 판단해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '첫 투표 준비',
          items: [
            { type: 'short', prompt: '정보를 확인할 공식 기관 이름을 쓰세요.' },
            { type: 'short', prompt: '첫 투표에서 가장 궁금한 점 하나와 확인할 방법을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 광복절 — 국경일 제도·독립운동가 기억·혐오와 책임의 경계
  // ======================================================================================================
  {
    const M = MOD('liberation');
    const FLAG = { text: '8월 15일 아침, 가상 인물 유나가 아파트 베란다에 태극기를 달려고 한다.', who: '유나', motif: 'flag', choices: [
      { id: 'top', text: '깃봉과 깃면 사이를 떼지 않고 끝까지 올려 단다', result: '광복절 아침에 맞게 국기가 걸린다.', impact: [{ who: '이웃', text: '경축의 뜻이 전해진다', tone: 1 }],
        next: { text: '두 달 전 현충일에 단 방법이 떠올랐다. 동생이 "그때랑 왜 달라?"라고 묻는다.', choices: [
          { id: 'why', text: '현충일은 추모의 날이라 조기, 국경일은 경축이라 끝까지 단다고 말해 준다', result: '동생이 두 날의 뜻을 구별한다.', impact: [{ who: '동생', text: '국기 다는 까닭을 안다', tone: 1 }],
            next: { text: '저녁이 되었다. 국기를 어떻게 할지 고른다.', choices: [
              { id: 'keep', text: '비가 오지 않으니 그대로 두거나 정한 때에 거둔다', result: '국기를 깨끗하게 지킨다.', impact: [{ who: '유나', text: '국기를 아끼는 법을 안다', tone: 1 }], ending: '국기를 바르게 달고 아끼는 것이 그날을 기리는 일이다.' },
              { id: 'throw', text: '구겨서 베란다 바닥에 둔다', result: '국기가 더러워진다.', impact: [{ who: '유나', text: '다음 국경일에 쓰기 어렵다', tone: -1 }], ending: '국기는 함부로 다루지 않고 깨끗하게 보관한다.' }] } },
          { id: 'same', text: '"아무렇게나 달아도 돼"라고 답한다', result: '동생이 다음 현충일에도 끝까지 올려 단다.', impact: [{ who: '동생', text: '날의 뜻을 놓친다', tone: 0 }], ending: '다는 방법에는 그날의 뜻이 담겨 있다.' }] } },
      { id: 'half', text: '현충일처럼 깃면 너비만큼 내려 조기로 단다', result: '광복절인데 추모의 날처럼 보인다.', impact: [{ who: '이웃', text: '어떤 날인지 헷갈린다', tone: 0 }], ending: '국경일에는 깃봉 끝까지 올려 단다.' },
      { id: 'none', text: '쉬는 날이니 늦잠을 잔다', result: '국기를 달지 못하고 하루가 지난다.', impact: [{ who: '유나', text: '그날의 뜻을 생각할 기회를 놓친다', tone: 0 }], ending: '국기 달기는 그날의 뜻을 떠올리는 작은 실천이다.' }] };
    const FLAG_R = [{ id: 'joy', text: '국경일에는 깃봉 끝까지 올려 경축의 뜻을 나타낸다' }, { id: 'mourn', text: '현충일 같은 추모의 날에는 조기로 단다' }, { id: 'care', text: '국기는 깨끗하게 다루고 보관한다' }, { id: 'any', text: '국기는 아무렇게나 달아도 된다', why: '국기법은 날에 따라 다는 방법을 정해 두었어요.' }, { id: 'rest', text: '쉬는 날은 아무것도 하지 않아도 되는 날이다', why: '국경일은 그날의 뜻을 기리는 날이에요.' }];
    MODS.push(
      M({
        id: 'intro.five', type: 'intro', title: '다섯 국경일 짝 짓기',
        method: '다섯 국경일 이름 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 세 쌍(3·1절·광복절·한글날)만 함께 짝짓는다.', base: '다섯 국경일과 날짜를 모두 짝짓는다.', challenge: '국경일과 법정 기념일이 어떻게 다른지 짐작해 말한다.' },
        intro: {
          teacher: '"「국경일에 관한 법률」이 정한 국경일은 다섯 날이에요. 이름과 날짜를 짝지어 볼까요?" 시연 단추로 다섯 쌍이 짝지어지는 모습을 보여 준다. "쉬는 날이 다 국경일이죠?"라는 말이 나오면 "제헌절은 쉬는 날이 아닌데도 국경일이에요. 그럼 국경일을 정하는 기준은 무엇일까요?"라고 되묻는다. 오늘은 광복절을 중심으로 국경일 제도와 독립운동가를 기억하는 방법을 함께 본다고 밝힌다.',
          student: '다섯 국경일의 이름과 날짜를 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { speak: false, words: [{ en: '3·1절', ko: '3월 1일' }, { en: '제헌절', ko: '7월 17일' }, { en: '광복절', ko: '8월 15일' }, { en: '개천절', ko: '10월 3일' }, { en: '한글날', ko: '10월 9일' }] }, sequence: [{ match: { '3·1절': '3·1절', 제헌절: '제헌절', 광복절: '광복절', 개천절: '개천절', 한글날: '한글날' } }] },
          art: { draw: 'a paper calendar with five highlighted dates, a small paper taegeukgi flag above each one, a paper sun rising behind the calendar', banner: '다섯 국경일' },
        },
        notes: '국경일 다섯 날은 「국경일에 관한 법률」 기준(기존 차시 사실).',
      }),
      M({
        id: 'intro.who', type: 'intro', title: '독립운동가 인물 카드',
        method: '독립운동가 인물 카드 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 두 사람(유관순·안중근)의 한 일만 함께 짝짓는다.', base: '세 사람의 장면을 듣고 한 일 카드를 짝짓는다.', challenge: '이분들을 오늘 어떤 방식으로 기억하는지 짐작해 말한다.' },
        intro: {
          teacher: '"광복은 많은 사람들의 노력이 쌓인 결과예요. 세 분이 한 일을 짝지어 볼까요? 안중근은 1909년 하얼빈, 유관순은 1919년 아우내 장터, 윤봉길은 1932년 상하이 훙커우 공원과 이어져요." 시연 단추로 인물과 한 일이 짝지어지는 모습을 보여 준다. "독립운동가는 몇 명뿐이었어요"라는 말이 나오면 "이름이 널리 알려지지 않은 사람들도 있었을까요? 그분들은 어떻게 기억할 수 있을까요?"라고 되묻는다. 인물의 말을 지어내지 않고 공식 기록의 사실만 쓴다고 먼저 말한다.',
          student: '독립운동가 세 분의 이름 칸에 그분이 한 일 카드를 짝지어 보세요.',
          demo: { tool: 'story', options: { mode: 'match', title: '독립운동가와 한 일', slots: [{ id: 'ahn', label: '안중근' }, { id: 'yu', label: '유관순' }, { id: 'yoon', label: '윤봉길' }], cards: [{ id: 'h', text: '하얼빈 의거(1909)', motif: 'star' }, { id: 'a', text: '아우내 장터 만세(1919)', motif: 'flag' }, { id: 'k', text: '훙커우 공원 의거(1932)', motif: 'sun' }] }, sequence: [{ match: { ahn: 'h', yu: 'a', yoon: 'k' } }] },
          art: { draw: 'three paper portrait frames without faces, only paper silhouettes, each with a small paper landmark beneath: a railway station, a market square and a park, a paper taegeukgi in the background', banner: '광복을 이끈 사람들' },
        },
        notes: '인물의 활동은 국가보훈부 공훈전자사료관 범위의 사실만 쓴다. 인물에게 지어낸 대사를 붙이지 않는다.',
      }),
      M({
        id: 'intro.line', type: 'intro', title: '기억과 혐오의 경계',
        method: '두 문장 가운데 혐오 표현 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 문장만 읽고 사람 전체를 향한 표현을 함께 고른다.', base: '문장 세 장 가운데 사람 전체를 향한 표현을 학생이 고른다.', challenge: '고른 문장을 존중하는 문장으로 어떻게 바꿀지 짐작해 말한다.' },
        intro: {
          teacher: '"두 문장을 읽어 볼게요. \'식민 지배의 역사를 사실대로 기억해야 한다.\' \'그 나라 사람은 다 나쁘다.\' 무엇이 다를까요?" 시연 단추로 사람 전체를 향한 문장이 바구니에 담기는 모습을 보여 준다. "역사를 생각하면 화가 나니까 괜찮아요"라는 말이 나오면 "화가 나는 마음은 이해해요. 그런데 오늘 그 나라에 사는 친구, 우리 반에 있을지 모를 친구에게도 같은 말을 할 수 있을까요?"라고 되묻는다. 역사의 책임을 따지는 것과 사람 전체를 미워하는 것은 다르다는 점을 짚는다.',
          student: '문장 카드 가운데 한 나라 사람 전체를 향한 혐오 표현을 골라 바구니에 담아 보세요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '사람 전체를 향한 혐오 표현', weather: false, cards: [{ id: 'mem', text: '식민 지배의 역사를 사실대로 기억해야 한다' }, { id: 'hate', text: '그 나라 사람은 다 나쁘다' }, { id: 'resp', text: '역사의 사실은 기록으로 따져 본다' }] }, sequence: [{ pick: ['hate'] }] },
          art: { draw: 'a paper line dividing two sides, on one side an open history book and a candle, on the other a cracked speech bubble, a paper bridge reaching across', banner: '기억일까, 혐오일까?' },
        },
        notes: '특정 나라 이름을 문장에 넣지 않는다. 학생의 개인 감정이나 가족사를 묻지 않는다.',
      }),

      M({
        id: 'activity.sort', type: 'activity', title: '날 나누기',
        method: '국경일과 법정 기념일 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '기념일 카드 5장만 나누고, 틀린 바구니는 바로 알려 준다.', base: '카드 8장을 국경일·법정 기념일 바구니로 나누고, 근거 법과 게양 방법을 나눈다.', challenge: '카드를 섞어 시작하고, 나뉘는 근거를 드러내는 카드가 더해진다.' },
        activity: {
          title: '날 나누기', tool: 'sortboard',
          teacher: '"국경일은 「국경일에 관한 법률」이, 현충일 같은 기념일은 「각종 기념일 등에 관한 규정」이 정해요. 카드를 나눠 볼까요?" 카드를 넣을 때마다 "이 날은 어느 법령이 정했을까요?"라고 묻는다. 현충일을 국경일에 넣는 학생에게 "현충일에 국기를 어떻게 달았나요? 국경일과 같았나요?"라고 되묻는다. 국경일은 나라의 경사를 기념하는 다섯 날이고, 그 밖의 기념일은 규정으로 따로 정한다는 점을 짚는다.',
          task: '기념일 카드를 국경일과 법정 기념일 바구니로 나누고, 근거와 게양 방법을 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('기념일 카드를 국경일·법정 기념일 바구니로 나누세요.', ['국경일', '법정 기념일'], [
              ['3·1절', '제헌절', '광복절', '개천절', '한글날'],
              ['현충일', '4·19혁명 기념일', '학생독립운동기념일'],
            ], { k: 3, d: 0.25 }),
            SBQ('카드를 근거 법령 바구니로 나누세요.', ['국경일에 관한 법률', '각종 기념일 등에 관한 규정'], [
              ['광복절을 정한다', '한글날을 정한다'],
              ['현충일을 정한다', '5·18민주화운동 기념일을 정한다'],
            ], { k: 1, d: 0.3 }),
            SBQ('날에 맞는 국기 게양 방법 바구니로 나누세요.', ['깃봉 끝까지 게양', '조기 게양'], [
              ['광복절', '3·1절'],
              ['현충일'],
            ], { k: 1, hard: [['개천절'], ['국가장 기간']], d: 0.35, more: { conclude: '국경일 다섯 날은 법률로, 그 밖의 기념일은 규정으로 정해요. 경축의 날에는 깃봉 끝까지, 추모의 날에는 조기로 국기를 달아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '국경일과 법정 기념일을 견주세요.', columns: ['', '국경일', '법정 기념일'], cells: [['근거', '', ''], ['예', '', ''], ['국기 게양', '', '']] }] },
        notes: '국가장 기간 조기 게양은 국기법 기준(사람 확인).',
      }),
      M({
        id: 'activity.flag', type: 'activity', title: '국경일 태극기 갈림길',
        method: '국경일 태극기 게양 판단', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(게양 방법)에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(동생에게 설명)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길(국기 보관)까지 가고, 국기법 근거 카드를 고른다.' },
        activity: {
          title: '국경일 태극기 갈림길', tool: 'dilemma',
          teacher: '"가상 인물 유나의 광복절 아침이에요. 태극기를 어떻게 달까요?" 고를 때마다 "이 방법은 그날의 뜻과 어떻게 이어지나요?"라고 묻는다. 조기를 고른 학생에게 "광복절은 기쁜 날일까요, 슬픔을 나누는 날일까요?"라고 되묻는다. 국기법이 날에 따라 다는 방법을 정해 둔 까닭은 그날의 뜻을 함께 나타내기 위해서라는 점을 짚는다.',
          task: '유나가 되어 광복절 아침 국기 다는 방법을 고르고 결과를 따라간 뒤, 근거를 골라요.', levels: NONE,
          items: [
            DILQ('유나가 되어 광복절 국기 게양 장면에서 선택하고 근거를 고르세요.', FLAG, [['top', 'why', 'keep']], FLAG_R, ['joy', 'mourn'], { opt: { title: '광복절 아침' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', FLAG, FLAG_R, ['두 길의 결과를 견주었다', '날에 따라 다는 방법이 다른 까닭을 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('국경일에 조기로 단 길을 끝까지 가 보고, 바른 방법의 근거를 고르세요.', FLAG, [['half']], FLAG_R, ['joy'], { d: 0.3, opt: { title: '헷갈린 게양' }, more: { conclude: '광복절 같은 국경일에는 깃봉 끝까지, 현충일 같은 추모의 날에는 조기로 달아요. 국기를 다는 방법에 그날의 뜻이 담겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '광복절과 현충일에 국기 다는 방법이 다른 까닭을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.match', type: 'activity', title: '인물 잇기',
        method: '독립운동가와 활동 잇기', tool: 'wordcards', minutes: 18,
        levels: { easy: '인물 낱말 2개만 활동과 짝짓는다.', base: '인물 네 명과 활동을 짝짓고, 활동을 지역별로 나눈다.', challenge: '활동을 시대 순으로 놓는 문항까지 푼다.' },
        activity: {
          title: '인물 잇기', tool: 'wordcards',
          teacher: '"네 분의 독립운동가와 활동을 이어 봐요. 안중근은 1909년 하얼빈, 안창호는 1913년 흥사단 창립, 유관순은 1919년 아우내 장터, 윤봉길은 1932년 훙커우 공원." 짝을 지을 때마다 "이 활동은 어디서, 어떤 방식이었나요?"라고 묻는다. 안창호를 의거와 짝짓는 학생에게 "안창호는 교육으로 실력을 기르자는 활동을 했어요. 독립운동의 방식은 하나였을까요?"라고 되묻는다. 독립운동이 무장 투쟁·교육·만세 운동처럼 여러 방식이었다는 점을 짚는다.',
          task: '독립운동가와 활동을 짝짓고, 활동을 지역과 시대 순으로 정리해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            WORDQ('독립운동가와 활동을 짝지으세요.', [['안중근', '하얼빈 의거(1909)'], ['안창호', '흥사단 창립·교육 운동(1913)'], ['유관순', '아우내 장터 만세 시위(1919)'], ['윤봉길', '훙커우 공원 의거(1932)']], { k: 2, d: 0.25 }),
            SORTQ('활동 카드를 나라 안·나라 밖 바구니로 나누세요.', ['나라 안', '나라 밖'], [['아우내 장터 만세 시위'], ['하얼빈 의거', '훙커우 공원 의거']], { k: 1, d: 0.3, opt: { mode: 'sort' } }),
            ORDERQ('활동을 일어난 차례대로 놓으세요.', ['하얼빈 의거', '흥사단 창립', '아우내 장터 만세 시위', '훙커우 공원 의거'], { k: 4, d: 0.35, more: { conclude: '독립운동은 1909년 하얼빈에서 1932년 상하이까지, 나라 안팎에서 의거·교육·만세 운동처럼 여러 방식으로 이어졌어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '독립운동가의 활동을 정리하세요.', columns: ['인물', '활동', '연도·장소'], cells: [['안중근', '', ''], ['안창호', '', ''], ['유관순', '', ''], ['윤봉길', '', '']] }] },
        notes: '인물의 활동은 기존 g7~g12 차시와 국가보훈부 공훈전자사료관 범위의 사실이다. 의거 장면을 자세히 묘사하지 않는다.',
      }),
      M({
        id: 'activity.post', type: 'activity', title: '광복절 기념 게시물',
        method: '광복절 기념 게시물 만들기', tool: 'collage', minutes: 18,
        levels: { easy: '모양 세 가지만 있는 고르개로 제목 띠·그림·출처 칸 틀을 따라 꾸민다.', base: '모양 여러 가지로 짜임을 스스로 정해 꾸미고 점검한다.', challenge: '마지막 문항에 \'출처 칸 두 개를 남겼다\' 점검이 더해지고, 활동지에 출처 두 곳을 적는다.' },
        activity: {
          title: '광복절 게시물', tool: 'collage',
          teacher: '"광복절을 기념하는 게시물을 꾸며요. 사실에 충실하고 존중을 담는 것이 기준이에요. 글은 활동지에 먼저 쓰고, 판에서는 짜임을 꾸며요." 꾸밀 때마다 "이 게시물을 다른 나라 친구가 봐도 괜찮을까요?"라고 묻는다. 상대 나라를 깎아내리는 그림을 넣으려는 학생에게 "광복의 기쁨과 독립운동가의 뜻을 알리는 데 그 그림이 필요할까요?"라고 되묻는다. 출처를 밝히는 것이 사실에 충실한 게시물의 마지막 단계라는 점을 짚는다.',
          task: '광복절 기념 게시물을 제목 띠·그림·출처 칸으로 꾸미고 사실·존중을 점검해요.', levels: NONE,
          items: [
            { prompt: '게시물 위쪽에 제목 띠를 긴 네모 조각으로 놓고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'star'] }, target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['제목 띠가 위쪽에 있다', '제목 띠가 잘 보인다'], minPieces: 1 }, difficulty: 0.15,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } } } },
            { prompt: '가운데에 광복의 기쁨을 나타내는 그림을 조각 셋 이상으로 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'semi'] }, target: { selfCheck: ['광복의 기쁨이나 기억을 나타냈다', '다른 나라 사람을 깎아내리는 그림이 없다', '그림이 출처 칸을 덮지 않는다'], minPieces: 3 }, difficulty: 0.25,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '아래쪽에 한 줄 설명 칸과 출처 칸을 남기고 게시물 전체를 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle', 'star'] }, target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['제목·그림·설명·출처 칸이 다 있다', '사실에 충실하고 존중을 담았다'], minPieces: 3 }, difficulty: 0.3,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } }, challenge: { prompt: '아래쪽에 설명 칸과 출처 칸 두 개를 남기고 게시물 전체를 점검하세요(출처 두 개).', target: { has: [{ shape: 'rect', min: 3 }], selfCheck: ['제목·그림·설명·출처 칸이 다 있다', '사실에 충실하고 존중을 담았다', '출처 칸을 두 개 남겼다'], minPieces: 4 } } },
              conclude: '좋은 기념 게시물은 확인한 사실과 밝힌 출처, 그리고 누구에게나 존중을 담은 그림으로 그날의 뜻을 전해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '게시물에 넣을 글을 쓰세요.', columns: ['칸', '내용'], cells: [['제목', ''], ['한 줄 설명', ''], ['출처 1', ''], ['출처 2', '']] }] },
        notes: '게시물은 수업 안에서만 나눈다. 글(제목·설명·출처)은 활동지에 쓰고 교구는 짜임만 꾸민다.',
      }),
      M({
        id: 'activity.hate', type: 'activity', title: '혐오 구별',
        method: '역사 기억과 혐오 표현 가리기', tool: 'sortboard', minutes: 18,
        levels: { easy: '문장 카드 4장만 나누고, 틀린 바구니는 바로 알려 준다.', base: '카드 6장을 역사 기억·혐오 표현 바구니로 나누고, 바꿔 쓴 문장을 짝짓는다.', challenge: '카드를 섞어 시작하고, 혐오 표현을 바꿔 쓴 문장 카드가 더해진다.' },
        activity: {
          title: '혐오 구별', tool: 'sortboard',
          teacher: '"역사를 기억하는 말과 혐오 표현은 어떻게 다를까요? 기준은 두 가지예요. 사실과 책임을 따지는가, 사람 전체를 미워하게 하는가." 카드를 넣을 때마다 "이 말은 누구를 향하고 있나요? 사건인가요, 사람 전체인가요?"라고 묻는다. "다 맞는 말이잖아요"라는 학생에게 "오늘 그 나라에서 태어난 아이도 그 말의 대상이 될까요?"라고 되묻는다. 역사의 책임을 묻는 것과 특정 나라 사람 전체를 미워하는 것은 다르다는 점을 짚는다.',
          task: '문장 카드를 역사 기억·혐오 표현 바구니로 나누고, 혐오 표현을 바꿔 쓴 문장을 골라 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('문장 카드를 역사 기억·혐오 표현 바구니로 나누세요.', ['역사 기억', '혐오 표현'], [
              ['식민 지배의 사실을 기록으로 배운다', '독립운동가의 뜻을 기린다', '피해를 입은 분들을 추모한다'],
              ['그 나라 사람은 다 나쁘다', '그 나라 출신 친구와 놀지 말자', '비하하는 별명으로 부른다'],
            ], { k: 2, d: 0.3 }),
            SBQ('혐오 표현과 바꿔 쓴 문장을 짝지어 바구니에 넣으세요.', ['그 나라 사람은 다 나쁘다', '그 나라 출신 친구와 놀지 말자'], [
              ['역사 속 잘못은 사실로 따지고 책임을 묻는다'],
              ['출신과 상관없이 친구를 존중한다'],
            ], { k: 1, d: 0.35 }),
            SBQ('기준 카드를 역사 기억·혐오 표현 바구니로 나누세요.', ['역사 기억', '혐오 표현'], [
              ['사건과 책임을 사실로 따진다'],
              ['사람 전체를 미워하게 한다'],
            ], { k: 1, hard: [['기록과 출처를 밝힌다'], ['비하어로 사람을 부른다']], d: 0.35, more: { conclude: '역사 기억은 사건과 책임을 사실로 따지고, 혐오 표현은 사람 전체를 미워하게 해요. 기억은 지키고 혐오는 멈춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '혐오 표현 하나를 골라 역사 기억의 문장으로 바꿔 쓰세요.' }] },
        notes: '카드에 특정 나라 이름을 쓰지 않는다. 학생이 실제 비하어를 말하거나 쓰게 하지 않는다.',
      }),
      M({
        id: 'activity.reply', type: 'activity', title: '근거와 존중의 대응 글',
        method: '근거와 존중을 갖춘 대응 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀을 보고 쓴다.', base: '네 문장(짚기·사실·책임과 사람의 구별·존중의 맺음)을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 예상되는 반론에 대한 답까지 쓴다.' },
        activity: {
          title: '근거와 존중의 대응 글', tool: 'rubric-writing',
          teacher: '"가상 게시물 \'광복절이니 그 나라 사람은 다 미워해도 된다\'에 답글을 써요. 좋은 답글은 역사의 사실은 지키면서, 사람 전체를 향한 미움은 멈추게 해요." 쓰기 전에 기준표를 함께 읽는다. 답글에 다른 비하어를 쓰는 학생에게 "혐오에 혐오로 답하면 무엇이 달라질까요?"라고 묻는다. 사실의 출처는 공식 기관 자료로 밝히게 한다.',
          task: '사람 전체를 미워하자는 가상 게시물에 역사 사실과 존중을 갖춰 답하는 글을 쓰고 점검해요.', levels: NONE,
          items: [
            RWQ('게시물의 어느 부분이 혐오 표현인지 짚는 1~2문장을 쓰세요.', '가상 게시물 "그 나라 사람은 다 미워해도 된다"에서 혐오 표현인 부분을 짚으세요.', ['혐오 표현을 정확히 짚었다', '쓴 사람을 비난하지 않았다', '왜 문제인지 밝혔다'], { min: 30, max: 250, sent: [1, 3], starter: '이 글에서 ~라는 표현은 사람 전체를 향하고 있어요.', plus: '그 말이 누구에게 상처가 될지 썼다', d: 0.35 }),
            RWQ('역사의 사실과 책임을 근거와 출처로 드는 2문장을 쓰세요.', '역사의 사실(식민 지배·독립운동)을 공식 자료를 근거로 쓰고, 책임은 사건을 두고 묻는다는 점을 밝히세요.', ['역사 사실을 정확히 썼다', '공식 자료를 출처로 밝혔다', '책임과 사람 전체를 구별했다'], { min: 40, max: 300, sent: [2, 3], must: [['책임', '사실']], starter: '역사의 사실은 ~이다. 책임은 ~를 두고 물어야 한다.', plus: '오늘의 사람과 과거의 사건을 구별하는 까닭을 썼다', d: 0.4 }),
            RWQ('존중을 담아 맺는 1~2문장을 쓰세요.', '함께 기억하자는 존중의 말로 답글을 맺으세요.', ['비하·조롱 표현이 없다', '함께 기억하자고 권했다', '광복절의 뜻과 이었다'], { min: 20, max: 200, sent: [1, 3], starter: '광복절은 ~를 기억하는 날이니 ~', plus: '"사실이니까 괜찮다"는 반론에 대한 답을 썼다', d: 0.35, more: { conclude: '광복절의 기억은 사실과 책임을 지키는 데 있어요. 사람 전체를 향한 미움을 멈출 때 기억이 더 단단해져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 답글을 점검하세요.', columns: ['기준', '내 글의 문장'], cells: [['혐오 표현 짚기', ''], ['사실·출처', ''], ['책임과 사람의 구별', ''], ['존중의 맺음', '']] }] },
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '광복절의 뜻과 국기',
        method: '광복절의 뜻과 국기 게양 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'광복절은 ___ 을 기념하는 국경일이고, 국기는 ___ 단다\')로 쓴다.', base: '광복절의 뜻과 게양 방법 두 가지를 넣어 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓴다.' },
        wrap: {
          teacher: '"광복절의 뜻과 국기 다는 방법을 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "광복절은 쉬는 날"이라고 쓰는 학생에게 "무엇을 되찾은 날인가요?"라고 묻는다. 출구 2번에서 현충일을 국경일로 고른 학생에게 날 나누기 활동을 다시 떠올리게 한다.',
          exitTicket: [
            XRW('광복절의 뜻과 국기 게양을 한두 문장으로 쓰고 기준표로 점검하세요.', '광복절이 어떤 날인지, 그날 국기를 어떻게 다는지 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['광복'], ['국기', '태극기']], sample: '광복절은 1945년 8월 15일 나라를 되찾은 것을 기념하는 국경일이다. 그날 태극기는 경축의 뜻으로 깃봉 끝까지 올려 단다.' }),
            XCHOICE('국경일이 아닌 날을 고르세요.', ['제헌절', '현충일', '한글날'], 1, '현충일은 「각종 기념일 등에 관한 규정」의 기념일이에요. 국경일은 3·1절·제헌절·광복절·개천절·한글날이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '광복절의 뜻',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '국경일은 3·1절·제헌절·___·개천절·한글날 다섯 날이다.', answer: '광복절' },
            { type: 'short', prompt: '광복절에 내가 할 수 있는 기념 실천 하나를 쓰세요.' },
          ],
          easy: { note: '\'광복절은 ___ 을 기념하는 국경일이다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
        notes: '광복 1945년 8월 15일은 교과서 서술 범위의 사실이다.',
      }),
      M({
        id: 'wrap.gallery', type: 'wrap', title: '게시물 돌려 보기 점검',
        method: '게시물 짝 감상과 점검', tool: 'timer', minutes: 8,
        levels: { easy: '점검 항목 두 개(사실·존중)만 함께 본다.', base: '3분씩 네 번 돌려 보는 타이머를 맞추고 세 항목을 모두 점검한다.', challenge: '돌려 본 게시물 하나에 고칠 제안을 활동지에 쓴다.' },
        wrap: {
          teacher: '"모둠별 게시물을 돌려 봐요. 한 게시물에 2분, 모두 세 번 옮겨요. 볼 때마다 사실·출처·존중을 점검해요." 타이머를 맞춘 뒤 신호에 맞춰 옮긴다. 그림 솜씨로 점수를 매기려는 학생에게 "오늘 기준은 그림 솜씨가 아니라 사실·출처·존중이에요"라고 말한다. 고칠 점은 사람이 아니라 게시물을 두고 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '게시물 돌려 보기', timeUnit: 'min', labels: ['감상', '옮기기'], plan: { work: 1, rest: 0, rounds: 1 } }, prompt: '한 게시물에 2분, 쉬기 없이 세 번 돌려 보도록 타이머를 맞추고, 점검 세 칸을 모두 확인하세요.', target: { plan: { work: 2, rest: 0, rounds: 3 }, selfCheck: ['사실이 정확하다', '출처가 있다', '누구에게나 존중을 담았다'] }, difficulty: 0.2 },
            XCHOICE('게시물 점검의 기준으로 알맞은 것을 고르세요.', ['그림 솜씨', '사실·출처·존중', '색깔이 화려한지'], 1, '기념 게시물은 사실·출처·존중으로 점검해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '게시물 돌려 보기',
          items: [
            { type: 'table', prompt: '돌려 본 게시물을 점검하세요.', columns: ['모둠', '사실', '출처', '존중'], cells: [['', '', '', ''], ['', '', '', ''], ['', '', '', '']] },
            { type: 'short', prompt: '가장 좋았던 게시물의 좋은 점과, 고칠 제안 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.boundary', type: 'wrap', title: '나의 경계 규칙',
        method: '나의 경계 규칙 한 줄', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 규칙 카드 하나를 함께 골라 가지에 붙인다.', base: '규칙 카드를 지킬 것·멈출 것 가지에 모두 붙이고 까닭을 한 줄 쓴다.', challenge: '내 규칙이 적용될 사례 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"기억과 혐오를 가르는 나만의 규칙을 정해요. 먼저 지킬 것과 멈출 것을 나눠 봐요." 마인드맵을 붙인 뒤 내 규칙을 한 줄 쓰게 한다. "화가 나면 어쩔 수 없잖아요"라는 학생에게 "화가 나는 마음은 그대로 두고, 말을 고를 때 쓸 규칙은 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '나의 경계 규칙', slots: ['지킬 것', '멈출 것'], cards: ['사실과 출처를 확인하고 말한다', '책임은 사건을 두고 묻는다', '한 나라 사람 전체를 탓한다', '비하하는 별명을 쓴다'] }, prompt: '규칙 카드를 지킬 것·멈출 것 가지로 나누세요.', target: { sort: { '지킬 것': ['사실과 출처를 확인하고 말한다', '책임은 사건을 두고 묻는다'], '멈출 것': ['한 나라 사람 전체를 탓한다', '비하하는 별명을 쓴다'] } }, difficulty: 0.2 },
            XSHORT('나의 경계 규칙을 한 줄로 쓰고, 그 까닭을 덧붙이세요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 경계 규칙',
          items: [
            { type: 'short', prompt: '나의 경계 규칙을 한 줄로 쓰세요.' },
            { type: 'short', prompt: '내 규칙이 필요한 상황(가상) 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 9. 개천절 — 홍익인간과 공동체의 다양성
  // ======================================================================================================
  {
    const M = MOD('foundation');
    const SCHOOL = { text: '전학 온 가상 인물 라온은 다른 나라에서 자랐다. 모둠 활동에서 라온의 한국어가 조금 서툴러 친구들이 머뭇거린다.', who: '모둠', motif: 'house', choices: [
      { id: 'skip', text: '시간이 없으니 라온 몫은 우리가 대신 한다', result: '빨리 끝나지만 라온은 한 마디도 하지 못한다.', impact: [{ who: '라온', text: '자리가 없다고 느낀다', tone: -1 }],
        next: { text: '다음 시간에도 같은 모둠이다.', choices: [
          { id: 'again', text: '또 대신 해 준다', result: '라온이 모둠 활동을 피하기 시작한다.', impact: [{ who: '라온', text: '점점 멀어진다', tone: -1 }], ending: '대신 해 주는 것이 늘 돕는 것은 아니다.' },
          { id: 'ask', text: '라온에게 하고 싶은 역할을 묻는다', result: '라온이 그림 자료를 맡겠다고 한다.', impact: [{ who: '라온', text: '참여할 길이 생긴다', tone: 1 }], ending: '묻는 것에서 함께하기가 시작된다.' }] } },
      { id: 'role', text: '라온이 잘하는 것을 묻고 역할을 나눈다', result: '라온이 다른 나라에서 본 자료를 소개하겠다고 한다.', impact: [{ who: '모둠', text: '자료가 더 풍부해진다', tone: 1 }],
        next: { text: '발표 날, 다른 모둠이 "우리 것만 하자"고 말한다.', choices: [
          { id: 'explain', text: '여러 자료가 발표를 더 낫게 했다고 차분히 말한다', result: '다른 모둠도 고개를 끄덕인다.', impact: [{ who: '반 전체', text: '다양함을 힘으로 본다', tone: 1 }],
            next: { text: '선생님이 오늘 활동을 한 문장으로 정리해 보라고 한다.', choices: [
              { id: 'hongik', text: '"널리 사람을 이롭게 하려면 모두가 함께해야 한다"', result: '친구들이 박수를 친다.', impact: [{ who: '반 전체', text: '홍익인간의 뜻을 오늘 말로 나눈다', tone: 1 }], ending: '홍익인간은 우리만이 아니라 널리 사람을 이롭게 하자는 뜻이다.' },
              { id: 'ours', text: '"우리 것이 최고다"', result: '라온이 다시 조용해진다.', impact: [{ who: '라온', text: '밖으로 밀려난 느낌이 든다', tone: -1 }], ending: '정체성은 남을 밀어낼 때가 아니라 함께할 때 단단해진다.' }] } },
          { id: 'quiet', text: '괜히 다툴까 봐 가만히 있는다', result: '발표 분위기가 어색해진다.', impact: [{ who: '라온', text: '마음이 불편하다', tone: 0 }], ending: '차분한 한마디가 분위기를 바꿀 수 있다.' }] } },
      { id: 'wait', text: '라온이 말을 마칠 때까지 기다려 준다', result: '천천히지만 라온이 자기 생각을 말한다.', impact: [{ who: '라온', text: '존중받는다고 느낀다', tone: 1 }], ending: '기다려 주는 것도 함께하는 방법이다.' }] };
    const SCHOOL_R = [{ id: 'all', text: '홍익인간은 널리 사람을 이롭게 하자는 뜻이다' }, { id: 'role', text: '저마다 잘하는 것을 살리면 공동체가 풍부해진다' }, { id: 'ask', text: '돕기 전에 상대가 원하는 것을 묻는다' }, { id: 'ours', text: '우리 민족만 이롭게 하면 된다', why: '홍익인간은 \'널리 인간을\' 이롭게 하자는 뜻이에요.' }, { id: 'fast', text: '빨리 끝내는 것이 가장 중요하다', why: '빨리 끝내도 누군가 빠지면 함께한 활동이 아니에요.' }];
    MODS.push(
      M({
        id: 'intro.law', type: 'intro', title: '교육기본법 제2조 한 줄',
        method: '교육기본법 제2조 한 줄 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 두 장(홍익인간·인류공영)만 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 조문에 나오는 세 장을 학생이 고른다.', challenge: '조문 낱말(도야·인류공영)을 오늘 말로 풀어 말한다.' },
        intro: {
          teacher: '"우리 교육의 목적을 정한 법이 있어요. 교육기본법 제2조 첫머리를 읽어 볼까요? \'교육은 홍익인간의 이념 아래 … 인류공영의 이상을 실현하는 데에 이바지하게 함을 목적으로 한다.\'" 읽은 뒤 시연 단추로 조문에 나오는 낱말이 바구니에 담기는 모습을 보여 준다. "홍익인간은 우리 민족만 잘되자는 말 아니에요?"라는 말이 나오면 "조문 끝의 \'인류공영\'은 누구와 함께 번영하자는 말일까요?"라고 되묻는다. 개천절의 홍익인간을 오늘 공동체의 말로 읽어 본다고 밝힌다.',
          student: '교육기본법 제2조 첫머리를 읽고, 조문에 실제로 나오는 낱말 카드를 바구니에 골라 담아 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '조문에 나오는 낱말', title: '교육기본법 제2조', shuffle: false, cards: [
            { id: 'hong', text: '홍익인간', motif: 'sun' }, { id: 'best', text: '민족 우월', motif: 'castle' }, { id: 'demo', text: '민주시민', motif: 'house' },
            { id: 'world', text: '인류공영', motif: 'star' }, { id: 'rank', text: '성적 순위', motif: 'cloud' }] }, sequence: [{ pick: ['hong', 'demo', 'world'] }] },
          art: { draw: 'an open paper law book with one highlighted line, a paper globe and many small paper people holding hands around it, soft autumn colours', banner: '널리 사람을 이롭게' },
        },
        notes: '조문은 국가법령정보센터 교육기본법 제2조 원문의 첫머리·끝만 짧게 인용한다.',
      }),
      M({
        id: 'intro.heritage', type: 'intro', title: '개천절과 문화유산',
        method: '개천절 관련 문화유산 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 쌍(참성단·고인돌)만 함께 짝짓는다.', base: '세 유산과 그 설명을 모두 짝짓는다.', challenge: '설명이 확인된 사실인지, 전해지는 이야기인지 가려 말한다.' },
        intro: {
          teacher: '"강화도 마니산 참성단을 알고 있나요? 단군이 하늘에 제사를 지냈다고 전해지는 곳이에요. 고조선 무렵의 고인돌과 비파형 동검도 남아 있어요." 시연 단추로 유산과 설명이 짝지어지는 모습을 보여 준다. "참성단에서 단군이 제사 지낸 건 확인된 사실이죠?"라는 말이 나오면 "\'전해진다\'와 \'남아 있다\'는 어떻게 다를까요?"라고 되묻는다. 오늘은 전해지는 이야기와 확인된 사실을 구별해 개천절을 알린다고 밝힌다.',
          student: '개천절과 이어지는 문화유산 카드와 그 설명을 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { speak: false, words: [{ en: '참성단', ko: '단군이 제사 지냈다고 전해지는 제단' }, { en: '고인돌', ko: '청동기 시대 무덤 유적' }, { en: '비파형 동검', ko: '고조선 문화를 보여 주는 유물' }] }, sequence: [{ match: { 참성단: '참성단', 고인돌: '고인돌', '비파형 동검': '비파형 동검' } }] },
          art: { draw: 'a paper mountain top with a stone altar, a large paper dolmen stone and a bronze dagger shape laid on a cloth, autumn leaves drifting', banner: '전해지는 것, 남아 있는 것' },
        },
        notes: '참성단·고인돌·비파형 동검은 기존 g7~g12 차시 사실이다. 고조선 건국 연도는 다루지 않는다.',
      }),
      M({
        id: 'intro.words', type: 'intro', title: '두 문장 느낌 견주기',
        method: '두 문장 느낌 견주기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 문장만 읽고 느낌을 함께 고른다.', base: '문장 세 장에 어울리는 느낌 카드를 학생이 짝짓는다.', challenge: '왜 그런 느낌이 드는지 까닭을 말한다.' },
        intro: {
          teacher: '"두 문장을 들어 볼게요. \'우리 반은 진짜 한국 사람만 모여야 한다.\' \'우리 반은 다양한 친구가 함께 만든다.\' 전학 온 친구가 듣는다면 어떤 마음일까요?" 시연 단추로 문장마다 느낌 카드가 짝지어지는 모습을 보여 준다. "첫 문장도 우리를 아끼는 말 아니에요?"라는 말이 나오면 "그 말 안에 들어가지 못하는 친구는 누구일까요?"라고 되묻는다. 오늘은 공동체의 정체성과 다양성이 어떻게 함께 갈 수 있는지 생각한다고 밝힌다.',
          student: '공동체에 관한 문장 세 개를 듣고, 전학 온 친구가 느낄 마음 카드를 짝지어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'ex', label: '"우리 반은 진짜 한국 사람만 모여야 한다"' }, { id: 'in', label: '"우리 반은 다양한 친구가 함께 만든다"' }, { id: 'help', label: '"모르는 것은 같이 찾아보자"' }], cards: ['속상함', '편안함', '고마움'] }, sequence: [{ match: { ex: '속상함', in: '편안함', help: '고마움' } }] },
          art: { draw: 'two paper speech bubbles, one with a closed paper fence, the other with an open paper gate and many paper children of different looks walking in', banner: '닫힌 말, 열린 말' },
        },
      }),

      M({
        id: 'activity.clause', type: 'activity', title: '조문 낱말과 뜻',
        method: '조문의 낱말과 뜻 잇기', tool: 'wordcards', minutes: 18,
        levels: { easy: '조문 낱말 2개만 뜻과 짝짓는다.', base: '낱말 네 개와 뜻을 짝짓고, 조문을 바르게 읽은 카드를 고른다.', challenge: '조문 낱말을 오늘 학교생활의 말로 바꾼 카드를 나눈다.' },
        activity: {
          title: '조문 낱말과 뜻', tool: 'wordcards',
          teacher: '"교육기본법 제2조에는 어려운 낱말이 여럿 있어요. 인격 도야, 자주적 생활능력, 민주시민, 인류공영. 뜻과 짝지어 봐요." 짝을 지을 때마다 "이 낱말을 오늘 우리 반 말로 바꾸면?"이라고 묻는다. 홍익인간을 \'우리 민족만 이롭게\'로 고르는 학생에게 "\'홍익\'은 \'널리 이롭게\'라는 뜻이에요. 누구를 이롭게 할까요?"라고 되묻는다. 조문 전체가 나와 공동체, 그리고 인류를 함께 바라본다는 점을 짚는다.',
          task: '교육기본법 제2조의 낱말과 뜻을 짝짓고, 조문을 바르게 읽은 카드를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            WORDQ('조문 낱말과 그 뜻을 짝지으세요.', [['홍익인간', '널리 인간을 이롭게 함'], ['인격 도야', '사람됨을 닦아 기름'], ['자주적 생활능력', '스스로 삶을 꾸려 가는 힘'], ['인류공영', '인류가 함께 번영함']], { k: 2, d: 0.25 }),
            PICKQ('교육기본법 제2조를 바르게 읽은 카드만 고르세요.', ['교육은 민주시민으로서 필요한 자질을 기르게 한다', '교육은 인류공영의 이상에 이바지하게 한다'], ['교육은 우리 민족만 앞서게 한다', '교육은 시험 순위를 높이는 것이 목적이다'], { d: 0.3, opt: { mode: 'pick', basket: '바르게 읽은 카드' } }),
            SORTQ('오늘의 말로 바꾼 카드를 조문 낱말 바구니로 나누세요.', ['홍익인간', '민주시민'], [['어려운 친구에게 먼저 손 내밀기', '모두에게 도움 되는 일 찾기'], ['학급 회의에서 의견 내기', '규칙을 함께 정하고 지키기']], { k: 1, d: 0.35, opt: { mode: 'sort' }, more: { conclude: '홍익인간은 \'널리 사람을 이롭게\' 하자는 뜻이에요. 교육기본법은 이 이념 아래 민주시민과 인류공영을 함께 말해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '교육기본법 제2조의 낱말 하나를 골라 오늘 우리 학교생활의 말로 풀어 쓰세요.' }] },
      }),
      M({
        id: 'activity.school', type: 'activity', title: '홍익인간을 학교에서',
        method: '홍익인간을 학교생활에 적용하는 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(발표 날)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길(정리 문장)까지 가고, 근거 카드를 고른다.' },
        activity: {
          title: '홍익인간을 학교에서', tool: 'dilemma',
          teacher: '"다른 나라에서 자란 가상 인물 라온이 우리 모둠에 왔어요. 홍익인간을 학교생활에 적용한다면 어떻게 할까요?" 고를 때마다 "이 선택은 라온과 모둠 모두에게 어떤 영향을 줄까요?"라고 묻는다. \'대신 해 준다\'를 고른 학생에게 "돕고 싶은 마음은 좋아요. 그런데 라온이 원한 것은 무엇이었을까요?"라고 되묻는다. 홍익인간은 우리만이 아니라 널리 사람을 이롭게 하자는 뜻이라는 점을 짚는다.',
          task: '라온과 같은 모둠이 된 장면에서 선택하고 결과를 끝까지 따라간 뒤, 근거를 골라요.', levels: NONE,
          items: [
            DILQ('라온과 같은 모둠이 된 장면에서 선택하고 근거 카드를 고르세요.', SCHOOL, [['role', 'explain', 'hongik']], SCHOOL_R, ['all', 'role'], { opt: { title: '새 친구와 모둠 활동' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', SCHOOL, SCHOOL_R, ['두 길의 결과를 견주었다', '라온의 마음이 어디서 달라졌는지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('기다려 주는 길을 끝까지 가 보고 근거를 고르세요.', SCHOOL, [['wait']], SCHOOL_R, ['ask'], { d: 0.3, opt: { title: '기다려 주는 길' }, more: { conclude: '홍익인간을 학교에서 실천하는 길은 묻고, 기다리고, 저마다의 힘을 살려 함께하는 데 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반에서 홍익인간을 실천할 수 있는 행동 하나를 쓰세요.' }] },
        notes: '장면은 가상이다. 반에 다문화 배경 학생이 있으면 그 학생을 예로 들거나 발표시키지 않는다.',
      }),
      M({
        id: 'activity.myth', type: 'activity', title: '이야기와 사실',
        method: '전해지는 이야기와 확인된 사실 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '카드 4장만 나누고, 틀린 바구니는 바로 알려 준다.', base: '카드 6장을 전해지는 이야기·확인된 사실로 나누고, 나눈 근거를 나눈다.', challenge: '카드를 섞어 시작하고, 나눈 근거를 드러내는 카드가 더해진다.' },
        activity: {
          title: '이야기와 사실', tool: 'sortboard',
          teacher: '"단군 이야기는 고조선을 세운 이야기로 전해져요. 그 안의 상징과, 유물로 확인되는 사실을 나눠 볼까요?" 카드를 넣을 때마다 "이것은 유물이나 기록으로 확인되나요, 이야기로 전해지나요?"라고 묻는다. \'곰이 사람이 되었다\'를 사실에 넣는 학생에게 "이야기는 무엇을 말하고 싶었을까요? 사실처럼 읽어야 할까요, 뜻을 읽어야 할까요?"라고 되묻는다. 이야기는 거짓이라서 버리는 것이 아니라 뜻을 읽는 것이고, 사실은 근거로 확인하는 것이라는 점을 짚는다.',
          task: '개천절과 관련된 카드를 전해지는 이야기와 확인된 사실 바구니로 나누고, 나눈 근거를 골라요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('카드를 전해지는 이야기·확인된 사실 바구니로 나누세요.', ['전해지는 이야기', '확인된 사실'], [
              ['곰이 사람이 되었다', '환웅이 하늘에서 내려왔다', '단군이 참성단에서 제사 지냈다'],
              ['개천절은 국경일이다', '고인돌이 남아 있다', '비파형 동검이 출토되었다'],
            ], { k: 2, d: 0.25 }),
            SBQ('나눈 근거 카드를 바구니로 나누세요.', ['전해지는 이야기의 근거', '확인된 사실의 근거'], [
              ['옛 책에 이야기로 실려 전한다', '상징으로 뜻을 전한다'],
              ['유물이 실제로 남아 있다', '법률에 날짜가 정해져 있다'],
            ], { k: 1, d: 0.3 }),
            SBQ('홍보물에 쓸 문장을 알맞게 쓴 것·고칠 것으로 나누세요.', ['알맞게 쓴 문장', '고칠 문장'], [
              ['"~라고 전해진다"로 이야기를 소개한다'],
              ['이야기를 확인된 사실처럼 쓴다'],
            ], { k: 1, hard: [['유물은 출처와 함께 소개한다'], ['우리 민족이 가장 뛰어나다고 쓴다']], d: 0.35, more: { conclude: '전해지는 이야기는 뜻을 읽고, 확인된 사실은 근거로 알려요. 홍보물에서도 \'~라고 전해진다\'와 \'~이 남아 있다\'를 구별해 써요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '단군 이야기의 상징 하나를 골라, 그것이 전하려는 뜻을 한 문장으로 쓰세요.' }] },
        notes: '기존 g7~g12 차시의 \'전해지는 이야기와 확인된 사실\' 구분을 따른다.',
      }),
      M({
        id: 'activity.poster', type: 'activity', title: '존중을 담은 개천절 홍보물',
        method: '존중을 담은 개천절 홍보물 만들기', tool: 'collage', minutes: 18,
        levels: { easy: '모양 세 가지만 있는 고르개로 제목 띠·그림·설명 칸 틀을 따라 꾸민다.', base: '모양 여러 가지로 짜임을 스스로 정해 꾸미고 점검한다.', challenge: '마지막 문항에 \'출처 칸을 남겼다\' 점검이 더해지고, 활동지에 출처를 적는다.' },
        activity: {
          title: '개천절 홍보물', tool: 'collage',
          teacher: '"개천절 홍보물을 꾸며요. 기준은 두 가지예요. 이야기와 사실을 구별하고, 누구나 함께할 수 있게 존중을 담기. 글은 활동지에 먼저 써요." 꾸밀 때마다 "다른 나라에서 온 친구가 이 홍보물을 보면 함께하고 싶을까요?"라고 묻는다. \'우리 민족 최고\' 같은 문구를 넣으려는 학생에게 "홍익인간의 \'널리\'와 그 문구는 어울릴까요?"라고 되묻는다.',
          task: '이야기와 사실을 구별하고 존중을 담은 개천절 홍보물을 꾸미고 점검해요.', levels: NONE,
          items: [
            { prompt: '홍보물 위쪽에 제목 띠를 긴 네모 조각으로 놓고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'triangle'] }, target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['제목 띠가 위쪽에 있다', '제목 띠가 잘 보인다'], minPieces: 1 }, difficulty: 0.15,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } } } },
            { prompt: '가운데에 여러 사람이 함께하는 그림을 조각 셋 이상으로 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'heart', 'star', 'leaf'] }, target: { selfCheck: ['여러 사람이 함께하는 모습을 나타냈다', '누군가를 밀어내는 그림이 없다', '그림이 설명 칸을 덮지 않는다'], minPieces: 3 }, difficulty: 0.25,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '아래쪽에 설명 칸을 남기고 홍보물 전체를 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle', 'star'] }, target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['제목·그림·설명 칸이 다 있다', '이야기와 사실을 구별해 쓸 자리를 정했다'], minPieces: 3 }, difficulty: 0.3,
              levels: { easy: { toolOptions: { shapes: ['rect', 'square', 'circle'] } }, challenge: { prompt: '아래쪽에 설명 칸과 출처 칸을 남기고 홍보물 전체를 점검하세요(출처 칸).', target: { has: [{ shape: 'rect', min: 3 }], selfCheck: ['제목·그림·설명 칸이 다 있다', '이야기와 사실을 구별해 쓸 자리를 정했다', '출처를 적을 칸을 남겼다'], minPieces: 4 } } },
              conclude: '존중을 담은 홍보물은 이야기와 사실을 구별하고, 누구나 함께하고 싶게 만들어요. 그것이 \'널리 사람을 이롭게\'의 오늘 모습이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '홍보물에 넣을 글을 쓰세요.', columns: ['칸', '내용'], cells: [['제목', ''], ['전해지는 이야기(~라고 전해진다)', ''], ['확인된 사실', ''], ['출처', '']] }] },
      }),
      M({
        id: 'activity.talk', type: 'activity', title: '정체성과 다양성 토의',
        method: '정체성과 다양성 토의 진행', tool: 'timer', minutes: 18,
        levels: { easy: '토의 순서 카드 3장만 놓고, 문항 글에 적힌 시간대로 맞추며, 교사가 질문 카드를 나눠 준다.', base: '순서 카드 4장을 놓고, 단계 시간을 스스로 셈해 맞춘 뒤 점검한다.', challenge: '마친 뒤 점검에 \'모둠 합의 문장을 썼다\'가 더해진다.' },
        activity: {
          title: '정체성과 다양성 토의', tool: 'timer',
          teacher: '"토의 질문은 \'우리 공동체의 정체성과 다양성은 서로 부딪칠까, 함께 갈 수 있을까?\'예요. 장면 카드(다문화 친구가 많은 학교, 다른 나라에서 온 이웃이 여는 지역 축제)를 보고 이야기해요. 순서는 장면 읽기 → 돌아가며 말하기 → 질문 → 정리, 한 단계 3분이에요." 순서를 놓고 타이머를 맞춘 뒤 신호에 맞춰 진행한다. "다양하면 우리 것이 사라져요"라는 말에는 "우리 것을 지키면서 함께한 예가 있을까요?"라고 묻고, 여러 관점을 근거로 말하게 한다.',
          task: '토의 순서를 놓고 타이머를 맞춰 정체성과 다양성을 토의한 뒤 점검표에 표시해요.', levels: NONE,
          items: [
            TORDER('정체성과 다양성 토의의 순서 카드를 차례대로 놓으세요.', '토의 순서', ['장면 읽기', '돌아가며 말하기', '질문 주고받기', '정리하기'], { k: 3 }),
            TPLAN('토의 12분을 네 단계에 똑같이 나누어, 쉬는 시간 없이 네 번 돌도록 타이머를 맞추세요.', '토의 단계 타이머', { work: 3, rest: 0, rounds: 4 }, ['토의', '쉬기'], { easy: '한 단계 3분, 쉬기 0분, 4번으로 맞추세요.' }),
            TCHECK('토의를 마친 뒤 토의 점검표에 표시하세요.', '정체성과 다양성 토의 점검', ['장면의 사실과 내 의견을 나누어 말했다', '다른 배경의 사람을 깎아내리지 않았다', '근거를 들어 의견을 냈다'], { plus: '모둠 합의 문장을 썼다', more: { conclude: '정체성과 다양성은 꼭 부딪치는 것이 아니에요. 서로의 다름을 존중할 때 공동체의 정체성도 더 넓고 단단해질 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '토의 기록을 남기세요.', columns: ['나온 의견', '근거', '질문'], cells: [['', '', ''], ['', '', ''], ['합의 문장', '', '']] }] },
        notes: '교사가 신호와 시간을 진행한다. 학생의 출신·가족 배경을 묻거나 발표시키지 않는다.',
      }),
      M({
        id: 'activity.rewrite', type: 'activity', title: '포용적으로 고쳐 쓰기',
        method: '배타적 표현을 포용적으로 고쳐 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '배타적 문장 2개만 고쳐 쓰고, 문장 틀을 본다.', base: '문장 4개를 고쳐 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 고친 까닭까지 쓴다.' },
        activity: {
          title: '포용적으로 고쳐 쓰기', tool: 'rubric-writing',
          teacher: '"칠판의 배타적 문장 네 개를 포용적으로 고쳐 써요. ① 진짜 한국 사람만 모여라. ② 그런 이름은 우리 반에 안 어울려. ③ 외국에서 온 친구는 우리 행사에서 빠져. ④ 우리 민족이 가장 뛰어나다." 고칠 때마다 "이 문장을 들은 사람 누구나 함께하고 싶을까요?"라고 묻는다. 뜻을 아예 지워 버리는 학생에게 "원래 문장이 하고 싶었던 말(우리 반을 아끼는 마음)은 살리면서 고칠 수 있을까요?"라고 되묻는다.',
          task: '칠판의 배타적 문장을 누구나 함께할 수 있는 포용적 문장으로 고쳐 쓰고 기준표로 점검해요.', levels: NONE,
          items: [
            RWQ('문장 ①·②를 포용적으로 고쳐 쓰세요.', '배타적 문장 ① "진짜 한국 사람만 모여라", ② "그런 이름은 우리 반에 안 어울려"를 고쳐 쓰세요.', ['두 문장을 모두 고쳤다', '누군가를 밀어내는 말이 없다', '원래의 아끼는 마음은 살렸다'], { min: 30, max: 250, sent: [2, 3], starter: '① 우리 반은 ~. ② ~', plus: '고친 까닭을 한 문장 덧붙였다', d: 0.35 }),
            RWQ('문장 ③·④를 포용적으로 고쳐 쓰세요.', '배타적 문장 ③ "외국에서 온 친구는 우리 행사에서 빠져", ④ "우리 민족이 가장 뛰어나다"를 고쳐 쓰세요.', ['두 문장을 모두 고쳤다', '누군가를 밀어내는 말이 없다', '홍익인간의 뜻과 어울린다'], { min: 30, max: 250, sent: [2, 3], starter: '③ 우리 행사는 ~. ④ ~', plus: '고친 까닭을 한 문장 덧붙였다', d: 0.4 }),
            RWQ('배타적 표현과 포용적 표현의 차이를 2문장으로 쓰세요.', '오늘 고쳐 쓴 경험을 바탕으로 배타적 표현과 포용적 표현의 차이를 쓰세요.', ['차이를 분명히 썼다', '예를 하나 들었다', '오늘 고친 문장과 이었다'], { min: 40, max: 300, sent: [2, 3], must: [['포용']], plus: '내가 앞으로 쓸 말 하나를 밝혔다', d: 0.4, more: { conclude: '포용적인 말은 아끼는 마음은 살리고, 누구도 밖으로 밀어내지 않아요. 그것이 \'널리 사람을 이롭게\'의 말이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고친 문장을 정리하세요.', columns: ['원래 문장', '고친 문장'], cells: [['①', ''], ['②', ''], ['③', ''], ['④', '']] }] },
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '홍익인간을 오늘 말로',
        method: '홍익인간을 오늘 말로 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'홍익인간은 오늘 말로 ___ 이다\')로 쓴다.', base: '홍익인간의 뜻과 오늘의 실천 두 가지를 넣어 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓴다.' },
        wrap: {
          teacher: '"홍익인간을 오늘 우리 말로 바꾸면 어떻게 될까요? 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "좋은 사람이 되자"처럼 넓게 쓰는 학생에게 "누구를, 어떻게 이롭게 하는 것인가요?"라고 묻는다. 출구 2번에서 \'우리 민족만 이롭게\'를 고른 학생에게 \'널리\'의 뜻을 다시 떠올리게 한다.',
          exitTicket: [
            XRW('홍익인간을 오늘 말로 한두 문장으로 쓰고 기준표로 점검하세요.', '홍익인간의 뜻을 오늘 우리 생활의 말로 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['홍익인간', '이롭게']], sample: '홍익인간은 오늘 말로 하면 나와 다른 사람까지 모두에게 도움이 되는 길을 찾는 것이다. 우리 반에서는 새로 온 친구가 함께할 자리를 만드는 것이 그 실천이다.' }),
            XCHOICE('홍익인간의 뜻을 고르세요.', ['우리 민족만 이롭게 한다', '널리 인간을 이롭게 한다', '강한 사람만 이롭게 한다'], 1, '\'홍익\'은 널리 이롭게 한다는 뜻이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '홍익인간을 오늘 말로',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '교육기본법 제2조는 교육이 ___ 의 이념 아래 이루어진다고 정한다.', answer: '홍익인간' },
            { type: 'short', prompt: '홍익인간을 실천할 나의 행동 하나를 쓰세요.' },
          ],
          easy: { note: '\'홍익인간은 오늘 말로 ___ 이다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.peer', type: 'wrap', title: '홍보물 짝 점검',
        method: '홍보물 짝 점검', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 카드 하나를 함께 읽고 사실·존중 가지에 붙인다.', base: '점검 카드를 사실·존중 가지에 모두 붙인다.', challenge: '짝에게 고칠 제안 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"짝의 홍보물을 사실과 존중 두 가지로 점검해요. 먼저 점검 항목이 어느 쪽 기준인지 나눠 봐요." 마인드맵을 붙인 뒤 짝의 홍보물에 대고 활동지에 표시하게 한다. 그림 솜씨를 평가하려는 학생에게 "오늘 기준은 솜씨가 아니라 사실과 존중이에요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '홍보물 점검 기준', slots: ['사실', '존중'], cards: ['이야기를 \'전해진다\'로 썼다', '유물은 출처를 밝혔다', '누구도 밀어내지 않는다', '함께하자고 권한다'] }, prompt: '홍보물 점검 항목을 사실·존중 가지로 나누세요.', target: { sort: { 사실: ['이야기를 \'전해진다\'로 썼다', '유물은 출처를 밝혔다'], 존중: ['누구도 밀어내지 않는다', '함께하자고 권한다'] } }, difficulty: 0.2 },
            XSHORT('짝 홍보물의 좋은 점 하나와 고칠 제안 하나를 쓰세요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '홍보물 짝 점검',
          items: [
            { type: 'table', prompt: '짝 홍보물을 점검하세요.', columns: ['기준', '○/△'], cells: [['이야기와 사실 구별', ''], ['출처', ''], ['존중·포용', '']] },
            { type: 'short', prompt: '짝에게 줄 고칠 제안 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '토의 뒤 생각 변화',
        method: '토의 성찰', tool: 'emotion', minutes: 8,
        levels: { easy: '생각 변화의 정도를 눈금으로만 고른다(익명).', base: '눈금을 고르고 그렇게 고른 까닭을 한 줄 쓴다.', challenge: '다음에 실천할 행동 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 토의와 고쳐 쓰기를 하고 나서, 정체성과 다양성에 대한 내 생각이 얼마나 움직였나요? 이름 없이 모아요." 눈금 뒤 까닭을 한 줄 쓰게 한다. "그대로예요"라는 학생에게 "그대로인 까닭도 좋은 성찰이에요. 무엇이 내 생각을 지켜 주었나요?"라고 묻는다.',
          exitTicket: [
            XSCALE('토의 뒤 내 생각이 움직인 정도를 1~5로 고르세요(익명).', '정체성과 다양성에 대한 내 생각', '생각', { 1: '그대로다', 5: '많이 넓어졌다' }, '내 생각은 얼마나 움직였나요?'),
            XSHORT('그렇게 고른 까닭과 다음에 실천할 행동 하나를 쓰세요.'),
            XCHOICE('정체성과 다양성에 대한 설명으로 오늘 배운 것과 가장 가까운 것을 고르세요.', ['다양하면 정체성은 반드시 사라진다', '서로 존중하면 함께 갈 수 있다', '정체성은 남을 밀어낼 때 단단해진다'], 1, '여러 관점이 있지만, 존중하며 함께하는 길을 근거로 찾을 수 있어요.'),
          ],
        },
        worksheet: {
          title: '토의 돌아보기',
          items: [
            { type: 'short', prompt: '토의에서 가장 기억에 남는 의견 하나를 쓰세요.' },
            { type: 'short', prompt: '다음에 실천할 포용의 행동 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 10. 한글날 — 공공 언어·한글 사실 확인·차별 없는 언어
  // ======================================================================================================
  {
    const M = MOD('hangul');
    const NOTICE = { text: '학생회 가상 인물 시우가 학교 안내문을 다듬는다. 원래 글은 "금일 익일 행사 시 우천 시 체육관으로 장소 변경, 참가 신청서 기재 후 제출 요망"이다.', who: '시우', motif: 'book', choices: [
      { id: 'keep', text: '공문서 같아 보이니 그대로 둔다', result: '1학년과 다문화 가정 보호자 몇몇이 뜻을 몰라 다시 묻는다.', impact: [{ who: '읽는 사람', text: '안내를 이해하지 못한다', tone: -1 }],
        next: { text: '담임 선생님이 "누가 읽을지 생각해 봤니?"라고 묻는다.', choices: [
          { id: 'fix', text: '쉬운 말로 다시 고친다', result: '"내일 비가 오면 체육관에서 해요"로 바뀐다.', impact: [{ who: '읽는 사람', text: '한 번에 이해한다', tone: 1 }], ending: '안내문은 읽는 사람이 이해할 때 제 몫을 한다.' },
          { id: 'blame', text: '"읽는 사람이 공부하면 되죠"라고 답한다', result: '문의가 계속 이어진다.', impact: [{ who: '학생회', text: '같은 설명을 되풀이한다', tone: -1 }], ending: '어려운 글의 부담은 결국 쓴 쪽으로 돌아온다.' }] } },
      { id: 'easy', text: '어려운 낱말에 표시하고 쉬운 말로 바꾼다', result: '"금일"은 "오늘", "기재"는 "적어"로 바꾼다.', impact: [{ who: '시우', text: '글이 쉬워진다', tone: 1 }],
        next: { text: '\'우천 시\'를 어떻게 바꿀지 고민한다.', choices: [
          { id: 'rain', text: '"비가 오면"으로 바꾸고 날짜를 숫자로 적는다', result: '"10월 10일(내일) 비가 오면 체육관에서 해요"가 된다.', impact: [{ who: '읽는 사람', text: '날짜와 장소가 분명하다', tone: 1 }],
            next: { text: '마지막으로 무엇을 확인할지 고른다.', choices: [
              { id: 'check', text: '1학년 친구에게 읽혀 보고 헷갈린 곳을 고친다', result: '"제출"을 "학생회실에 내요"로 더 구체적으로 바꾼다.', impact: [{ who: '모두', text: '누구나 이해한다', tone: 1 }], ending: '읽을 사람에게 직접 확인하면 공공 언어가 완성된다.' },
              { id: 'done', text: '내가 이해하니 그대로 붙인다', result: '쓴 사람만 아는 말 하나가 남는다.', impact: [{ who: '읽는 사람', text: '한 곳에서 멈춘다', tone: 0 }], ending: '쓴 사람이 아니라 읽는 사람의 눈으로 확인해야 한다.' }] } },
          { id: 'english', text: '"레인 시 짐으로 체인지"로 바꾼다', result: '외국어가 섞여 더 헷갈린다.', impact: [{ who: '읽는 사람', text: '다시 이해하지 못한다', tone: -1 }], ending: '어려운 한자어를 외국어로 바꾸는 것은 다듬기가 아니다.' }] } },
      { id: 'delete', text: '안내가 길어지니 행사 안내를 아예 빼 버린다', result: '비가 와도 어디로 가야 할지 아무도 모른다.', impact: [{ who: '모두', text: '정보를 잃는다', tone: -1 }], ending: '쉬운 글은 정보를 빼는 것이 아니라 정확하게 전하는 것이다.' }] };
    const NOTICE_R = [{ id: 'reader', text: '공공 안내문은 읽는 누구나 이해할 수 있어야 한다' }, { id: 'exact', text: '쉬운 말로 바꾸어도 정보는 정확하게 남긴다' }, { id: 'test', text: '읽을 사람에게 직접 확인하면 빠진 곳이 보인다' }, { id: 'hard', text: '어려운 말이 더 정확하고 권위 있다', why: '어려운 말은 읽는 사람의 이해를 막아 오히려 정보를 놓치게 해요.' }, { id: 'foreign', text: '외국어로 바꾸면 쉬워진다', why: '외국어가 모두에게 쉬운 것은 아니에요. 쉬운 우리말을 찾아요.' }];
    MODS.push(
      M({
        id: 'intro.notice', type: 'intro', title: '어려운 안내문 한 장',
        method: '어려운 안내문 한 장 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 어려운 낱말 두 장(금일·기재)만 짚으며 함께 고른다.', base: '낱말 여섯 장 가운데 어려운 낱말 네 장을 학생이 고른다.', challenge: '고른 낱말마다 쉬운 말을 짐작해 말한다.' },
        intro: {
          teacher: '"가상 학교 안내문이에요. \'금일 익일 행사 시 우천 시 체육관으로 장소 변경, 참가 신청서 기재 후 제출 요망.\' 한 번에 이해했나요?" 시연 단추로 어려운 낱말 카드가 바구니에 담기는 모습을 보여 준다. "어려운 말이 더 정확해 보이잖아요"라는 말이 나오면 "1학년 친구나 한국어가 서툰 보호자가 읽는다면 정확하게 이해할 수 있을까요?"라고 되묻는다. 한글날, 누구나 이해하는 공공 언어를 생각해 본다고 밝힌다.',
          student: '가상 학교 안내문을 읽고, 이해하기 어려운 낱말 카드를 바구니에 골라 담아 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '어려운 낱말', title: '가상 학교 안내문', shuffle: false, cards: [
            { id: 'today', text: '금일', motif: 'sun' }, { id: 'gym', text: '체육관', motif: 'house' }, { id: 'next', text: '익일', motif: 'moon' },
            { id: 'rain', text: '우천 시', motif: 'cloud' }, { id: 'form', text: '신청서', motif: 'book' }, { id: 'write', text: '기재 후', motif: 'star' }] }, sequence: [{ pick: ['today', 'next', 'rain', 'write'] }] },
          art: { draw: 'a paper school notice board with a dense paper notice full of hard words, a puzzled paper student and parent reading it, a paper magnifying glass hovering', banner: '한 번에 읽히나요?' },
        },
        notes: '안내문은 수업용 가상 문장이다.',
      }),
      M({
        id: 'intro.myth', type: 'intro', title: '한글 이야기 참과 과장',
        method: '한글 이야기 참·과장 짐작', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 카드 두 장만 읽고 참·과장을 함께 짐작한다.', base: '카드 네 장을 참·과장으로 학생이 나눈다.', challenge: '과장인지 확인할 방법(국립국어원·유네스코 자료 등)을 말한다.' },
        intro: {
          teacher: '"\'유네스코가 한글을 세계 1위 문자로 뽑았다\'는 말, 들어 봤나요?" 대답을 듣고 그런 선정은 없었고, 확인된 사실은 『훈민정음』 해례본이 1997년 세계기록유산이 되었고 유네스코가 문해 교육에 공헌한 사람에게 \'세종대왕 문해상\'을 준다는 것이라고 알린다. 시연 단추로 카드가 참·과장으로 나뉘는 모습을 보여 준다. "자랑스러운 말이니 과장이어도 괜찮잖아요"라는 말이 나오면 "과장이 밝혀지면 한글의 진짜 자랑까지 의심받지 않을까요?"라고 되묻는다.',
          student: '한글에 관한 문장 카드를 확인된 사실과 근거 없는 과장으로 짐작해 나눠 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', speak: false, slots: ['확인된 사실', '근거 없는 과장'], cards: ['해례본 세계기록유산', '세계 1위 문자 선정', '1446년 반포', '모든 소리를 다 적음'] }, sequence: [{ sort: { '확인된 사실': ['해례본 세계기록유산', '1446년 반포'], '근거 없는 과장': ['세계 1위 문자 선정', '모든 소리를 다 적음'] } }] },
          art: { draw: 'an old paper book with Korean letters on its pages, a paper world heritage seal on one side, a paper speech bubble with a big trophy on the other side crossed by a question mark', banner: '사실일까, 과장일까?' },
        },
        notes: '해례본 세계기록유산(1997)·세종대왕 문해상은 기존 g7~g12 차시 사실이다.',
      }),
      M({
        id: 'intro.feel', type: 'intro', title: '안내문을 못 읽는 마음',
        method: '안내문을 못 읽는 사람의 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 장면만 읽고 마음 카드를 함께 짝짓는다.', base: '장면 세 개에 어울리는 마음 카드를 학생이 짝짓는다.', challenge: '이런 일을 누가 겪을 수 있을지 말한다.' },
        intro: {
          teacher: '"병원 안내문의 어려운 말 때문에 약 먹는 방법을 몰랐던 가상 할머니, 외래어 메뉴판 앞에서 주문하지 못한 가상 손님, 쉬운 말로 다시 쓴 안내를 받은 가상 보호자. 이분들은 어떤 마음일까요?" 시연 단추로 장면과 마음 카드가 짝지어지는 모습을 보여 준다. "모르면 물어보면 되잖아요"라는 말이 나오면 "물어볼 사람이 없거나, 묻기가 부끄러운 상황이라면요?"라고 되묻는다. 어려운 말이 누군가에게는 정보의 벽이 된다는 점을 짚는다.',
          student: '안내문을 둘러싼 가상 장면을 보고, 그 사람이 느낄 마음 카드를 짝지어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'med', label: '약 봉투의 어려운 말 때문에 먹는 법을 모른 할머니' }, { id: 'menu', label: '외래어 메뉴판 앞에서 주문하지 못한 손님' }, { id: 'easy', label: '쉬운 말로 다시 쓴 안내를 받은 보호자' }], cards: ['걱정', '부끄러움', '고마움'] }, sequence: [{ match: { med: '걱정', menu: '부끄러움', easy: '고마움' } }] },
          art: { draw: 'three small paper scenes: an elderly figure holding a medicine envelope with a question mark, a customer before a menu board full of foreign words, a parent smiling at a simple notice', banner: '말이 벽이 될 때' },
        },
        notes: '장면은 가상이다. 학생이나 가족이 겪은 일을 묻지 않는다.',
      }),

      M({
        id: 'activity.refine', type: 'activity', title: '다듬은 말 잇기',
        method: '어려운 말과 다듬은 말 잇기', tool: 'wordcards', minutes: 18,
        levels: { easy: '어려운 말 3개만 다듬은 말과 짝짓는다.', base: '어려운 말 다섯 개와 다듬은 말을 짝짓고, 공문서 원칙에 맞는 카드를 고른다.', challenge: '다듬은 말을 쓰임 바구니로 나누는 문항까지 푼다.' },
        activity: {
          title: '다듬은 말 잇기', tool: 'wordcards',
          teacher: '"국어기본법은 공문서를 어문 규범에 맞추어 한글로 쓰도록 정해요. 국립국어원은 어려운 말을 다듬은 말을 알려 줘요. 짝지어 볼까요?" 짝을 지을 때마다 "다듬은 말이 원래 뜻을 정확히 담고 있나요?"라고 묻는다. "누리집보다 홈페이지가 더 익숙한데요?"라는 학생에게 "익숙한 것과 누구나 이해하는 것은 같을까요? 할머니께는 어느 쪽이 더 쉬울까요?"라고 되묻는다. 쉬운 말은 뜻을 덜어 내는 것이 아니라 정확히 전하는 것이라는 점을 짚는다.',
          task: '어려운 공공 언어와 다듬은 말을 짝짓고, 공문서 원칙에 맞는 카드를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            WORDQ('어려운 말과 다듬은 말을 짝지으세요.', [['금일', '오늘'], ['익일', '다음 날'], ['기재하다', '적다'], ['홈페이지', '누리집'], ['스크린도어', '안전문']], { k: 3, d: 0.25 }),
            PICKQ('공문서 원칙에 맞는 카드만 고르세요.', ['어문 규범에 맞추어 한글로 쓴다', '필요하면 괄호 안에 한자나 외국 글자를 함께 쓴다'], ['어려운 전문어를 그대로 쓸수록 좋다', '외국어로만 쓰면 더 정확하다'], { d: 0.3, opt: { mode: 'pick', basket: '공문서 원칙' } }),
            SORTQ('다듬은 말을 쓰임 바구니로 나누세요.', ['때를 나타내는 말', '장소·물건을 나타내는 말'], [['오늘', '다음 날'], ['누리집', '안전문']], { k: 1, d: 0.3, opt: { mode: 'sort' }, more: { conclude: '공공 언어는 어문 규범에 맞춘 한글로, 누구나 이해하는 쉬운 말로 써요. 다듬은 말은 뜻을 정확히 담아 정보의 벽을 낮춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 안내문에서 자주 보는 어려운 말 하나와 다듬은 말을 쓰세요.' }] },
        notes: '국어기본법의 공문서 원칙(어문 규범에 맞추어 한글로 작성, 괄호 안에 다른 글자 병기 가능)과 다듬은 말(누리집·안전문)은 국가법령정보센터·국립국어원 자료로 확인한다(사람 확인).',
      }),
      M({
        id: 'activity.judge', type: 'activity', title: '안내문 다듬기 갈림길',
        method: '안내문 다듬는 장면 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(우천 시 바꾸기)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길(읽을 사람에게 확인)까지 가고, 근거 카드를 고른다.' },
        activity: {
          title: '안내문 다듬기 갈림길', tool: 'dilemma',
          teacher: '"학생회의 가상 인물 시우가 어려운 학교 안내문을 다듬어요. 시우라면 어떻게 할까요?" 고를 때마다 "이 선택으로 누가 더 잘 이해하게 될까요?"라고 묻는다. 외국어로 바꾸는 길을 고른 학생에게 "\'레인 시 짐\'은 누구에게 쉬울까요?"라고 되묻는다. 쉬운 말로 바꾸어도 날짜·장소 같은 정보는 정확하게 남겨야 한다는 점을 짚는다.',
          task: '시우가 되어 어려운 안내문을 다듬는 장면에서 선택하고 결과를 따라간 뒤, 근거를 골라요.', levels: NONE,
          items: [
            DILQ('시우가 되어 안내문을 다듬는 장면에서 선택하고 근거 카드를 고르세요.', NOTICE, [['easy', 'rain', 'check']], NOTICE_R, ['reader', 'exact'], { opt: { title: '학교 안내문 다듬기' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', NOTICE, NOTICE_R, ['두 길의 결과를 견주었다', '읽는 사람이 어디서 멈췄는지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('안내문을 그대로 두었다가 고치는 길을 끝까지 가 보고 근거를 고르세요.', NOTICE, [['keep', 'fix']], NOTICE_R, ['reader'], { d: 0.3, opt: { title: '다시 고치는 길' }, more: { conclude: '공공 안내문은 읽는 사람의 눈으로 다듬어요. 쉬운 우리말로 바꾸되 정보는 정확히 남기고, 읽을 사람에게 직접 확인해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '시우가 고친 안내문을 한 문장으로 다시 써 보세요.' }] },
      }),
      M({
        id: 'activity.fact', type: 'activity', title: '사실과 과장',
        method: '한글에 관한 사실과 과장 가리기', tool: 'sortboard', minutes: 18,
        levels: { easy: '문장 카드 4장만 나누고, 틀린 바구니는 바로 알려 준다.', base: '카드 6장을 확인된 사실·근거 없는 과장으로 나누고, 근거 카드를 나눈다.', challenge: '카드를 섞어 시작하고, 근거를 드러내는 카드가 더해진다.' },
        activity: {
          title: '사실과 과장', tool: 'sortboard',
          teacher: '"한글에 관한 이야기에는 확인된 사실도 있고 근거 없는 과장도 있어요. 기준은 \'누가, 어떤 기록으로 확인했나\'예요." 카드를 넣을 때마다 "이 말은 어디서 확인할 수 있나요?"라고 묻는다. \'세계 1위 문자로 선정\'을 사실에 넣는 학생에게 "그런 선정을 한 기관과 날짜를 찾을 수 있나요?"라고 되묻는다. 한글의 진짜 자랑은 과장 없이도 충분하다는 점을 짚는다.',
          task: '한글에 관한 문장 카드를 확인된 사실과 근거 없는 과장 바구니로 나누고, 근거를 골라 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('한글에 관한 문장 카드를 확인된 사실·근거 없는 과장 바구니로 나누세요.', ['확인된 사실', '근거 없는 과장'], [
              ['훈민정음은 1443년에 만들고 1446년에 반포했다', '훈민정음 해례본은 1997년 세계기록유산이 되었다', '자음 기본자는 발음 기관의 모양을 본떴다'],
              ['유네스코가 한글을 세계 1위 문자로 뽑았다', '한글로는 세상의 모든 소리를 다 적는다', '한글은 하루 만에 누구나 다 익힌다'],
            ], { k: 2, d: 0.3 }),
            SBQ('근거 카드를 바구니로 나누세요.', ['사실의 근거', '과장의 표시'], [
              ['해례본이라는 기록이 남아 있다', '세계기록유산 목록에서 확인된다'],
              ['선정한 기관·날짜가 없다', '\'모든\'·\'누구나\'처럼 예외 없는 말을 쓴다'],
            ], { k: 1, d: 0.3 }),
            SBQ('한글날 행사에 쓸 문장을 알맞음·고칠 것 바구니로 나누세요.', ['알맞은 문장', '고칠 문장'], [
              ['해례본은 만든 원리를 밝힌 책이다'],
              ['한글은 세계에서 공식 1등인 글자다'],
            ], { k: 1, hard: [['한글날은 훈민정음 반포를 기념한다'], ['다른 나라 글자는 모두 한글보다 못하다']], d: 0.35, more: { conclude: '한글의 자랑은 해례본과 세계기록유산처럼 확인된 사실로 충분해요. 과장은 오히려 진짜 자랑을 흐리고, 다른 글자를 깎아내리는 말은 존중이 아니에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '과장 문장 하나를 골라 확인된 사실의 문장으로 고쳐 쓰세요.' }] },
        notes: '창제·반포 연도와 해례본 세계기록유산은 기존 차시 사실이다. 자음 기본자 원리는 해례본 서술 범위(사람 확인: 국립국어원).',
      }),
      M({
        id: 'activity.event', type: 'activity', title: '한글날 행사 기획 진행',
        method: '한글날 행사 기획과 진행 연습', tool: 'timer', minutes: 18,
        levels: { easy: '기획 순서 카드 3장만 놓고, 문항 글에 적힌 시간대로 맞춘다.', base: '순서 카드 4장을 놓고, 단계 시간을 스스로 셈해 맞춘 뒤 점검한다.', challenge: '마친 뒤 점검에 \'역할표를 기록했다\'가 더해진다.' },
        activity: {
          title: '한글날 행사 기획', tool: 'timer',
          teacher: '"한글날 학교 행사를 모둠이 기획해요. 순서는 목표 정하기 → 사실 확인 → 역할 나누기 → 홍보 문구 정하기, 한 단계 3분이에요." 순서를 놓고 타이머를 맞춘 뒤 신호에 맞춰 진행한다. 사실 확인을 건너뛰고 \'한글 세계 1위\' 같은 문구를 쓰려는 모둠에게 "그 문구의 출처를 찾았나요?"라고 묻는다. 홍보 문구도 쉬운 우리말로 쓰게 한다.',
          task: '한글날 행사 기획 순서를 놓고 타이머를 맞춰 계획을 세운 뒤 점검표에 표시해요.', levels: NONE,
          items: [
            TORDER('한글날 행사 기획 순서 카드를 차례대로 놓으세요.', '행사 기획 순서', ['목표 정하기', '사실 확인', '역할 나누기', '홍보 문구 정하기'], { k: 3 }),
            TPLAN('기획 12분을 네 단계에 똑같이 나누어, 쉬는 시간 없이 네 번 돌도록 타이머를 맞추세요.', '기획 단계 타이머', { work: 3, rest: 0, rounds: 4 }, ['기획', '쉬기'], { easy: '한 단계 3분, 쉬기 0분, 4번으로 맞추세요.' }),
            TCHECK('기획을 마친 뒤 기획 점검표에 표시하세요.', '행사 기획 점검', ['행사에 쓸 사실을 공식 자료로 확인했다', '모두에게 역할이 있다', '홍보 문구를 쉬운 우리말로 썼다'], { plus: '역할표를 기록했다', more: { conclude: '좋은 한글날 행사는 확인한 사실, 모두의 역할, 누구나 이해하는 쉬운 말로 만들어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '행사 계획과 역할표를 쓰세요.', columns: ['항목', '내용'], cells: [['목표', ''], ['확인한 사실·출처', ''], ['역할', ''], ['홍보 문구', '']] }] },
        notes: '교사가 신호와 시간을 진행한다.',
      }),
      M({
        id: 'activity.bias', type: 'activity', title: '표현 바꾸기',
        method: '차별 표현과 어려운 표현 바꾸기', tool: 'sortboard', minutes: 18,
        levels: { easy: '표현 카드 4장만 차별·어려움 바구니로 나누고, 틀린 바구니는 바로 알려 준다.', base: '카드 6장을 나누고, 표현마다 바꾼 말을 짝짓는다.', challenge: '카드를 섞어 시작하고, 바꾼 까닭 카드가 더해진다.' },
        activity: {
          title: '표현 바꾸기', tool: 'sortboard',
          teacher: '"우리 말 가운데에는 누군가를 차별하는 표현도 있고, 어려워서 정보를 막는 표현도 있어요. 먼저 나눠 보고, 바꾼 말과 이어 봐요." 카드를 넣을 때마다 "이 말은 누구를 불편하게 하거나, 누구의 이해를 막나요?"라고 묻는다. "살색은 그냥 색 이름이잖아요"라는 학생에게 "사람마다 살갗 색이 다른데, 한 색만 \'살색\'이라 부르면 누가 빠질까요?"라고 되묻는다. 차별 없는 말과 쉬운 말은 모두 \'누구나\'를 위한 말이라는 점을 짚는다.',
          task: '표현 카드를 차별 표현·어려운 표현 바구니로 나누고, 바꾼 말과 짝지어 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('표현 카드를 차별 표현·어려운 표현 바구니로 나누세요.', ['차별 표현', '어려운 표현'], [
              ['살색', '벙어리장갑', '결손 가정'],
              ['금일', '기재하다', '우천 시'],
            ], { k: 2, d: 0.25 }),
            SBQ('바꾼 말 카드를 원래 표현 바구니에 넣으세요.', ['살색', '벙어리장갑', '결손 가정', '우천 시'], [
              ['살구색'], ['손모아장갑'], ['한부모 가정'], ['비가 오면'],
            ], { k: 1, traps: ['보통 가정'], d: 0.35 }),
            SBQ('바꾼 까닭 카드를 바구니로 나누세요.', ['차별 표현을 바꾼 까닭', '어려운 표현을 바꾼 까닭'], [
              ['한 사람도 빠지거나 낮춰지지 않게'],
              ['누구나 정보를 이해하게'],
            ], { k: 1, hard: [['특정 장애를 낮춰 부르지 않으려고'], ['한자어를 모르는 사람도 읽게']], d: 0.35, more: { conclude: '차별 없는 말은 누구도 낮추지 않고, 쉬운 말은 누구나 이해하게 해요. 둘 다 \'모두를 위한 말\'이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 바꾼 말 가운데 하나를 골라, 왜 바꾸었는지 한 문장으로 쓰세요.' }] },
        notes: '살구색·손모아장갑·한부모 가정은 기존 g7~g12 차시 사실(국가인권위원회 권고·국립국어원 자료로 확인).',
      }),
      M({
        id: 'activity.rewrite', type: 'activity', title: '공공 안내문 고쳐 쓰기',
        method: '공공 안내문 고쳐 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '안내문 문장 3개만 고쳐 쓰고, 문장 틀을 본다.', base: '안내문 전체를 고쳐 쓰고 기준표(쉬운 말·차별 없음·정확성)로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 다양한 독자(어르신·외국인·어린이)를 고려한 문장을 더한다.' },
        activity: {
          title: '공공 안내문 고쳐 쓰기', tool: 'rubric-writing',
          teacher: '"가상 주민센터 안내문이에요. \'금일 우천 시 행사 순연, 결손 가정 대상 지원 신청은 익일까지 기재 후 제출 요망.\' 누구나 이해할 수 있게 고쳐 써요. 기준은 쉬운 말, 차별 없음, 정확성이에요." 문항마다 기준표를 함께 읽는다. 날짜를 빼 버리는 학생에게 "쉬워졌지만 언제까지인지 알 수 있나요?"라고 묻는다. 고친 글은 읽을 사람의 눈으로 다시 읽어 보게 한다.',
          task: '어려운 가상 공공 안내문을 쉬운 말·차별 없음·정확성 기준에 맞게 고쳐 쓰고 점검해요.', levels: NONE,
          items: [
            RWQ('안내문 앞부분(행사 미룸)을 쉬운 말로 고쳐 쓰세요.', '"금일 우천 시 행사 순연"을 누구나 이해하는 쉬운 말로 고쳐 쓰세요.', ['어려운 낱말을 쉬운 말로 바꾸었다', '날짜·조건 정보를 정확히 남겼다', '외국어로 바꾸지 않았다'], { min: 15, max: 200, sent: [1, 2], starter: '오늘 비가 오면 ~', plus: '날짜를 숫자로 함께 적었다', d: 0.3 }),
            RWQ('안내문 뒷부분(지원 신청)을 차별 없이 고쳐 쓰세요.', '"결손 가정 대상 지원 신청은 익일까지 기재 후 제출 요망"을 차별 없고 쉬운 말로 고쳐 쓰세요.', ['차별 표현을 바꾸었다', '어려운 낱말을 쉬운 말로 바꾸었다', '기한과 내는 곳을 정확히 썼다'], { min: 20, max: 250, sent: [1, 3], must: [['한부모']], starter: '한부모 가정 지원 신청은 ~', plus: '내는 곳을 구체적으로 적었다', d: 0.4 }),
            RWQ('다양한 독자를 위해 덧붙일 안내 1~2문장을 쓰세요.', '어르신·외국인·어린이처럼 다양한 독자가 이해하도록 덧붙일 안내 문장을 쓰세요.', ['읽는 사람을 떠올려 썼다', '문의할 방법을 알렸다', '쉬운 말로 썼다'], { min: 20, max: 250, sent: [1, 3], plus: '그림·큰 글씨 같은 다른 방법도 제안했다', d: 0.4, more: { conclude: '좋은 공공 안내문은 쉬운 말로, 누구도 낮추지 않고, 날짜와 장소 같은 정보를 정확히 전해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고친 안내문을 기준표로 점검하세요.', columns: ['기준', '고친 문장'], cells: [['쉬운 말', ''], ['차별 없음', ''], ['정확성(날짜·장소)', '']] }] },
        notes: '안내문은 수업용 가상 문장이다. 전화번호 같은 연락처는 쓰지 않고 \'주민센터 창구\'처럼 적는다.',
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '공문서 원칙 한두 문장',
        method: '국어기본법 공문서 원칙 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'공문서는 ___ 에 맞추어 ___ 로 쓴다\')로 쓴다.', base: '원칙 두 가지(한글로 쓰기·괄호 병기)를 넣어 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓰고, 그 원칙이 필요한 까닭을 덧붙인다.' },
        wrap: {
          teacher: '"국어기본법의 공문서 원칙을 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "공문서는 쉽게 쓴다"처럼 넓게 쓰는 학생에게 "무엇에 맞추어, 어떤 글자로 쓰나요?"라고 묻는다. 출구 2번에서 \'어려운 전문어를 그대로 쓴다\'를 고른 학생에게 안내문을 못 읽은 장면을 다시 떠올리게 한다.',
          exitTicket: [
            XRW('국어기본법 공문서 원칙을 한두 문장으로 쓰고 기준표로 점검하세요.', '국어기본법이 정한 공문서 작성 원칙을 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['공문서'], ['한글']], sample: '국어기본법은 공문서를 어문 규범에 맞추어 한글로 쓰고, 필요하면 괄호 안에 한자나 외국 글자를 쓸 수 있게 한다. 누구나 공공 정보를 이해할 수 있게 하려는 것이다.' }),
            XCHOICE('공문서 원칙에 맞는 것을 고르세요.', ['어려운 전문어를 그대로 쓴다', '어문 규범에 맞추어 한글로 쓴다', '외국어로만 쓴다'], 1, '공문서는 어문 규범에 맞추어 한글로 쓰고, 필요하면 괄호 안에 다른 글자를 써요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '공문서 원칙',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '공문서는 어문 규범에 맞추어 ___ 로 쓴다.', answer: '한글' },
            { type: 'short', prompt: '공공 언어가 쉬워야 하는 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '\'공문서는 ___ 에 맞추어 ___ 로 쓴다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.make', type: 'wrap', title: '한글날 표어 글자 조립',
        method: '한글날 표어 글자 조립', tool: 'hangul', minutes: 8,
        levels: { easy: '교사가 첫 글자(\'한\')를 함께 조립해 보인다.', base: '두 글자(\'한\'·\'글\')를 차례로 조립한다.', challenge: '받침이 있는 두 글자를 받침 자리를 스스로 골라 조립하고, 표어를 활동지에 쓴다.' },
        wrap: {
          teacher: '"우리 행사 표어는 \'한글, 모두의 말\'이에요. 표어 첫 낱말 \'한글\'의 두 글자를 낱자로 조립해 봐요." 조립하며 "받침은 글자 어디에 붙나요?"라고 묻는다. 받침을 오른쪽에 두려는 학생에게 "받침은 어느 모음이든 글자 맨 아래에 붙어요. 자음 기본자가 발음 기관 모양을 본떴다는 원리도 떠올려 볼까요?"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'hangul', options: { consonants: ['ㅎ', 'ㄱ', 'ㄴ', 'ㅁ'], vowels: ['ㅏ', 'ㅗ', 'ㅡ'], batchim: ['ㄴ', 'ㄹ', 'ㅇ'], slotHints: true }, prompt: '표어 \'한글\'의 첫 글자 \'한\'을 낱자로 조립하세요.', target: { syllable: '한' }, difficulty: 0.15 },
            { type: 'tool', tool: 'hangul', options: { consonants: ['ㄱ', 'ㄴ', 'ㅎ', 'ㅅ'], vowels: ['ㅡ', 'ㅏ', 'ㅜ'], batchim: ['ㄹ', 'ㄴ', 'ㅁ'], slotHints: true, wordSoFar: '한' }, prompt: '이어서 둘째 글자 \'글\'을 조립하세요.', target: { syllable: '글' }, difficulty: 0.2 },
            MOOD,
          ],
        },
        worksheet: {
          title: '한글날 표어',
          items: [
            { type: 'short', prompt: '우리 모둠의 한글날 표어를 쉬운 우리말로 쓰세요.' },
            { type: 'short', prompt: '표어에 받침이 있는 글자 하나를 골라 자음·모음·받침으로 나누어 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.peer', type: 'wrap', title: '고친 안내문 짝 점검',
        method: '고친 안내문 짝 점검', tool: 'emotion', minutes: 8,
        levels: { easy: '짝 안내문의 이해도를 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 한 줄 쓴다.', challenge: '짝에게 고칠 제안 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"짝이 고친 안내문을 1학년 친구나 어르신이 읽는다고 생각하고, 얼마나 이해하기 쉬운지 눈금으로 골라요." 눈금 뒤 까닭을 한 줄 쓰게 한다. 글씨체로 점수를 매기려는 학생에게 "기준은 쉬운 말·차별 없음·정확성이에요"라고 말한다.',
          exitTicket: [
            XSCALE('짝이 고친 안내문의 이해도를 1~5로 고르세요.', '짝이 고친 공공 안내문', '편안함', { 1: '이해하기 어렵다', 5: '누구나 바로 이해한다' }, '짝 안내문은 얼마나 이해하기 쉬운가요?'),
            XSHORT('그렇게 고른 까닭(쉬운 말·차별 없음·정확성 가운데)을 한 줄 쓰세요.'),
            XCHOICE('쉽고 정확한 안내 문장을 고르세요.', ['익일 우천 시 순연', '내일(10월 10일) 비가 오면 행사를 미뤄요', '레인 시 체인지'], 1, '쉬운 우리말에 날짜까지 정확히 적었어요.'),
          ],
        },
        worksheet: {
          title: '안내문 짝 점검',
          items: [
            { type: 'table', prompt: '짝 안내문을 점검하세요.', columns: ['기준', '○/△'], cells: [['쉬운 말', ''], ['차별 없음', ''], ['정확성', '']] },
            { type: 'short', prompt: '짝에게 줄 고칠 제안 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11. 학생독립운동기념일 — 학생 자치와 청소년 참여
  // ======================================================================================================
  {
    const M = MOD('students');
    const USED = { type: 'bar', title: '우리 반이 한 해 동안 써 본 참여 통로(가상 학급 설문)', yLabel: '써 본 학생 수', xLabel: '참여 통로', unit: '명', showTable: true, data: [['학교 설문 응답', 20], ['학생회 건의', 12], ['청소년참여위원회', 2], ['지역 공청회', 1]] };
    const TOWN = { text: '가상 인물 하람의 통학길에는 저녁이면 어두운 골목이 있다. 같은 길을 다니는 친구들도 무섭다고 한다.', who: '하람', motif: 'moon', choices: [
      { id: 'sns', text: '동네 단체방에 "구청은 뭐 하냐"는 글을 올린다', result: '공감 댓글은 많지만 담당 기관에는 전해지지 않는다.', impact: [{ who: '하람', text: '바뀐 것이 없다', tone: 0 }],
        next: { text: '한 어른이 "공식 민원으로 내 보면 어때?"라고 댓글을 달았다.', choices: [
          { id: 'switch', text: '자치단체 누리집 민원 창구에 내용을 정리해 낸다', result: '담당 부서에서 현장을 살펴보겠다는 답이 온다.', impact: [{ who: '하람', text: '의견이 담당 기관에 닿는다', tone: 1 }], ending: '의견은 결정할 수 있는 곳에 닿아야 바뀔 힘을 얻는다.' },
          { id: 'angry', text: '더 센 글로 기관을 비난한다', result: '말다툼만 커진다.', impact: [{ who: '동네', text: '서로 날카로워진다', tone: -1 }], ending: '비난은 관심을 끌어도 해결로 이어지기 어렵다.' }] } },
      { id: 'collect', text: '친구들과 어두운 곳과 시간대를 정리한다', result: '사진(사람 얼굴 없이)과 시간대가 담긴 자료가 생긴다.', impact: [{ who: '친구들', text: '함께 근거를 만든다', tone: 1 }],
        next: { text: '정리한 자료를 어디로 낼지 고른다.', choices: [
          { id: 'youth', text: '지역 청소년참여위원회나 자치단체 민원 창구에 낸다', result: '담당 부서가 자료를 받아 현장을 확인한다.', impact: [{ who: '하람', text: '공식 통로에 의견이 실린다', tone: 1 }],
            next: { text: '한 달 뒤 \'가로등을 늘리겠다\'는 답이 왔다.', choices: [
              { id: 'share', text: '결과를 친구들과 나누고 설치되는지 지켜본다', result: '두 달 뒤 골목이 밝아진다.', impact: [{ who: '모두', text: '안전한 길을 함께 만든다', tone: 1 }], ending: '참여는 의견을 내는 데서 끝나지 않고 결과를 확인하는 데까지 간다.' },
              { id: 'forget', text: '답을 받았으니 잊어버린다', result: '설치가 미뤄진 것을 아무도 모른다.', impact: [{ who: '하람', text: '결과를 놓친다', tone: 0 }], ending: '결과를 지켜보는 것도 참여의 한 부분이다.' }] } },
          { id: 'rumor', text: '"곧 가로등 생긴대"라는 말부터 퍼뜨린다', result: '정해진 것이 없어 혼란이 생긴다.', impact: [{ who: '친구들', text: '헷갈린다', tone: -1 }], ending: '확정되지 않은 일은 확인 뒤에 알린다.' }] } },
      { id: 'wait', text: '어른이 되면 그때 말하기로 한다', result: '어두운 골목은 그대로다.', impact: [{ who: '하람', text: '지금의 불편이 이어진다', tone: 0 }], ending: '청소년도 지금 의견을 낼 통로가 있다.' }] };
    const TOWN_R = [{ id: 'channel', text: '의견은 결정할 수 있는 곳(공식 통로)에 내야 한다' }, { id: 'evidence', text: '장소·시간처럼 확인할 수 있는 근거를 모은다' }, { id: 'follow', text: '결과를 확인하는 것까지가 참여다' }, { id: 'adult', text: '참여는 어른이 된 뒤에 한다', why: '청소년도 지역 청소년참여위원회·민원 같은 통로로 지금 참여할 수 있어요.' }, { id: 'loud', text: '크게 비난할수록 빨리 바뀐다', why: '비난은 관심을 끌어도 결정하는 곳에 닿지 않으면 바뀌지 않아요.' }];
    MODS.push(
      M({
        id: 'intro.demand', type: 'intro', title: '1929년 요구와 오늘',
        method: '1929년 요구와 오늘 학생회 견주기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 한 쌍(학생 자치권)만 함께 짝짓는다.', base: '요구 세 가지와 오늘 이루어진 것을 모두 짝짓는다.', challenge: '아직 남은 과제가 무엇일지 말한다.' },
        intro: {
          teacher: '"1929년 광주의 학생들은 민족 차별에 맞서 일어섰어요. 그때 학생들의 요구에는 학생 자치권, 언론·집회의 자유 같은 것이 있었다고 해요. 오늘 그 요구는 어디에 담겨 있을까요?" 시연 단추로 요구와 오늘의 제도가 짝지어지는 모습을 보여 준다. "다 이루어졌으니 이제 할 일 없죠"라는 말이 나오면 "제도가 있다는 것과 우리가 그 제도를 쓰는 것은 같을까요?"라고 되묻는다. 오늘은 학생 자치를 실제로 운영하는 법을 배운다고 밝힌다.',
          student: '1929년 학생들의 요구와 오늘 그 요구가 담긴 제도를 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { speak: false, words: [{ en: '학생 자치권', ko: '학생 자치 활동이 법으로 권장·보호된다' }, { en: '언론·집회의 자유', ko: '헌법이 언론·출판·집회의 자유를 보장한다' }, { en: '차별 없는 교육', ko: '헌법이 균등하게 교육받을 권리를 보장한다' }] }, sequence: [{ match: { '학생 자치권': '학생 자치권', '언론·집회의 자유': '언론·집회의 자유', '차별 없는 교육': '차별 없는 교육' } }] },
          art: { draw: 'a paper split scene: on the left students of 1929 in old school uniforms walking together, on the right a modern student council meeting around a paper table, a paper bridge joining the two', banner: '그때의 요구, 오늘의 제도' },
        },
        notes: '1929년 요구 사항(학생 자치권·언론·집회의 자유)은 research-days.md §3(전북교육청 2015 자료). 학생 자치 보장은 초·중등교육법 제17조, 언론·집회의 자유는 헌법 제21조, 교육받을 권리는 헌법 제31조.',
      }),
      M({
        id: 'intro.event', type: 'intro', title: '학생독립운동 기억 장소',
        method: '기억하는 장소와 방식 떠올리기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 한 곳(광주학생독립운동기념관)에 함께 핀을 꽂는다.', base: '두 곳 이상의 이름을 듣고 운동의 발단이 된 곳에 핀을 꽂는다.', challenge: '그곳이 기억·전시·기념식 가운데 어떤 역할을 하는지 말한다.' },
        intro: {
          teacher: '"1929년 10월 나주역에서 일본인 학생들이 우리 여학생을 괴롭힌 일로 다툼이 일어났고, 11월 3일 광주의 학생들이 차별에 맞서 거리로 나섰어요. 이 일을 기억하는 곳은 어디일까요?" 칸 지도로 광주학생독립운동기념관, 학생독립운동기념탑, 나주학생독립운동기념관을 보인다. 시연 단추로 나주의 기념관에 핀이 꽂히는 모습을 보여 준다. "그건 옛날 학생 이야기예요"라는 말이 나오면 "그때 학생들과 지금 여러분의 나이는 얼마나 다를까요?"라고 되묻는다.',
          student: '칸 지도에서 학생독립운동을 기억하는 세 곳을 보고, 운동의 발단이 된 나주의 기념관에 핀을 꽂아 보세요.',
          demo: { tool: 'map', options: { grid: [5, 4], title: '학생독립운동을 기억하는 곳(칸 지도)', places: [{ name: '광주학생독립운동기념관', icon: 'museum', at: [3, 1] }, { name: '학생독립운동기념탑', icon: 'heritage', at: [4, 1] }, { name: '나주학생독립운동기념관', icon: 'station', at: [1, 3] }] }, sequence: [{ place: '나주학생독립운동기념관' }] },
          art: { draw: 'a paper map of the southwest with a small railway station, a memorial hall and a tall paper monument, paper students in old uniforms walking between them, autumn leaves', banner: '학생들이 나선 길' },
        },
        notes: '나주역 발단·11월 3일 광주 학생들의 시위는 기존 차시 사실. 기념관·기념탑 위치는 칸 지도의 대강이다(사람 확인).',
      }),
      M({
        id: 'intro.voice', type: 'intro', title: '청소년 의견이 반영된 장면',
        method: '청소년 의견이 반영된 장면 듣기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 카드 두 장을 차례로 놓아 보인다.', base: '장면 카드 세 장을 학생이 차례대로 놓는다.', challenge: '각 장면에서 쓴 통로의 이름을 말한다.' },
        intro: {
          teacher: '"가상 학교 이야기예요. 학생들이 급식 의견을 학생회에 모았고, 학생회가 학교에 건의했고, 학교가 다음 달 식단에 반영했다고 공지했어요." 시연 단추로 장면 카드가 차례대로 놓이는 모습을 보여 준다. "학생 말은 어차피 안 들어 줘요"라는 말이 나오면 "이 이야기에서 의견이 반영되기까지 몇 단계를 거쳤나요? 어느 단계가 빠지면 반영되지 않았을까요?"라고 되묻는다.',
          student: '가상 학교에서 청소년 의견이 반영된 장면 카드를 일어난 차례대로 놓아 보세요.',
          demo: { tool: 'story', options: { mode: 'order', title: '급식 의견이 반영되기까지', slots: 3, cards: [{ id: 'notice', text: '학교가 반영 결과를 공지한다', motif: 'star' }, { id: 'collect', text: '학생회가 반별 의견을 모은다', motif: 'house' }, { id: 'propose', text: '학생회가 학교에 건의한다', motif: 'book' }] }, sequence: [{ order: ['collect', 'propose', 'notice'] }] },
          art: { draw: 'three paper panels: students dropping paper notes into a box, a student council member handing a folder to a teacher, a paper notice board with a new lunch menu and a smiling sun', banner: '의견이 닿기까지' },
        },
        notes: '장면은 가상이다.',
      }),

      M({
        id: 'activity.agenda', type: 'activity', title: '안건 처리 절차',
        method: '학생회 안건 처리 절차 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '절차 카드 3장만 차례대로 놓고, 틀린 자리는 바로 알려 준다.', base: '절차 카드 6장을 차례대로 놓고, 단계마다 원칙을 짝지은 뒤 원칙을 지킨 카드를 고른다.', challenge: '카드를 섞어 시작하고, 활동지에 단계별 원칙을 정리한다.' },
        activity: {
          title: '안건 처리 절차', tool: 'timeline',
          teacher: '"초·중등교육법 제17조는 학생의 자치 활동이 권장·보호된다고 정해요. 그 자치는 절차로 움직여요. 안건이 나와서 결과가 공지되기까지 차례를 놓아 볼까요?" 놓을 때마다 "이 단계를 건너뛰면 누구의 목소리가 빠질까요?"라고 묻는다. 의견 모으기 없이 바로 투표하려는 학생에게 "모든 반의 생각을 듣지 않은 투표는 누구의 결정일까요?"라고 되묻는다. 다수결 뒤에도 소수 의견을 기록하고 존중한다는 점을 짚는다.',
          task: '학생회 안건 처리 절차를 차례대로 놓고, 단계마다 원칙을 짝지어요.', levels: LIVE,
          items: [
            ORDERQ('학생회 안건 처리 절차를 차례대로 놓으세요.', ['안건 제안', '반별 의견 모으기', '학생회 회의에서 논의', '투표로 의결', '학교에 건의·실행', '결과 공지'], { k: 3, d: 0.3, opt: { axis: ['처음', '끝'] } }),
            MATCHQ('절차 칸에 그 단계에서 지킬 원칙을 짝지으세요.', [['반별 의견 모으기', '모든 반이 의견을 낼 기회를 갖는다'], ['투표로 의결', '다수결로 정하고 소수 의견도 기록한다'], ['결과 공지', '결정과 까닭을 모두에게 알린다']], { k: 2, d: 0.3, opt: { axis: ['처음', '끝'] } }),
            PICKQ('자치 원칙을 지킨 카드만 고르세요.', ['회의록을 게시판에 공개한다', '반대 의견도 회의록에 남긴다'], ['임원끼리만 정하고 알리지 않는다', '의견을 모으기 전에 결과를 정해 둔다'], { d: 0.35, opt: { basket: '원칙을 지킨 카드', axis: ['처음', '끝'] }, more: { conclude: '학생 자치는 제안 → 의견 모으기 → 논의 → 의결 → 건의 → 공지의 절차로 움직이고, 공개·참여·소수 존중의 원칙이 그 절차를 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단계별 원칙을 정리하세요.', columns: ['단계', '지킬 원칙'], cells: [['의견 모으기', ''], ['논의', ''], ['의결', ''], ['공지', '']] }] },
        notes: '절차는 수업용 일반 틀이며 실제 학생회 규정은 학교마다 학칙으로 정한다.',
      }),
      M({
        id: 'activity.principle', type: 'activity', title: '자치 활동의 원칙',
        method: '자치 활동의 원칙 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '사례 카드 4장만 원칙에 맞음·어긋남으로 나누고, 틀린 바구니는 바로 알려 준다.', base: '사례 카드 6장을 나누고, 어긋난 사례마다 고칠 방법을 짝짓는다.', challenge: '카드를 섞어 시작하고, 원칙 이름 바구니 문항에 카드가 더해진다.' },
        activity: {
          title: '자치 활동의 원칙', tool: 'sortboard',
          teacher: '"가상 학생회의 사례들이에요. 자치의 원칙(공개·참여·소수 존중)에 맞는 사례와 어긋난 사례를 나눠 봐요." 카드를 넣을 때마다 "이 사례에서 누구의 목소리가 빠졌나요?"라고 묻는다. "임원이 정하면 빨라서 좋아요"라는 학생에게 "빠른 결정과 모두가 따를 수 있는 결정 가운데 무엇이 자치일까요?"라고 되묻는다. 어긋난 사례는 고칠 방법과 짝지어 바로잡게 한다.',
          task: '가상 학생회 사례를 원칙에 맞음·어긋남으로 나누고, 어긋난 사례의 고칠 방법을 짝지어 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('가상 학생회 사례를 원칙에 맞음·어긋남 바구니로 나누세요.', ['원칙에 맞음', '원칙에 어긋남'], [
              ['회의 결과와 까닭을 게시판에 공개한다', '모든 반 대표가 회의에 참여한다', '반대 의견도 회의록에 남긴다'],
              ['임원끼리 결정하고 알리지 않는다', '1학년 의견은 듣지 않는다', '반대한 학생을 놀린다'],
            ], { k: 2, d: 0.3 }),
            SBQ('고칠 방법 카드를 어긋난 사례 바구니에 넣으세요.', ['임원끼리 결정하고 알리지 않는다', '1학년 의견은 듣지 않는다', '반대한 학생을 놀린다'], [
              ['회의록을 공개하고 까닭을 알린다'], ['모든 학년 대표를 회의에 부른다'], ['반대 의견을 존중하는 회의 규칙을 정한다'],
            ], { k: 1, d: 0.35 }),
            SBQ('사례를 지킨 원칙 바구니로 나누세요.', ['공개', '참여', '소수 존중'], [
              ['회의록을 게시한다'], ['모든 반이 의견을 낸다'], ['반대 의견을 기록한다'],
            ], { k: 1, hard: [['결정 까닭을 공지한다'], ['온라인 설문을 함께 연다'], ['소수 의견도 발표 시간을 준다']], d: 0.35, more: { conclude: '자치의 원칙은 공개, 참여, 소수 존중이에요. 어긋난 곳은 원칙을 살리는 방법으로 바로잡을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 회의에 더하고 싶은 원칙 하나와 그 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '기념 활동 기획안',
        method: '학생 주도 기념 활동 기획안 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀을 보고 채운다.', base: '목적·사실 확인·참여와 역할을 문항마다 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 활동이 잘 되었는지 평가할 방법까지 쓴다.' },
        activity: {
          title: '기념 활동 기획안', tool: 'rubric-writing',
          teacher: '"11월 3일 학생독립운동기념일을 우리가 직접 기념한다면? 학생이 주도하는 기념 활동 기획안을 써 봐요. 1929년 학생들처럼 우리가 주인이 되는 활동이에요." 문항마다 기준표를 함께 읽는다. "선생님이 정해 주면 할게요"라는 학생에게 "그날을 기념하는 가장 알맞은 방법이 \'학생이 주도하는 것\'이라면, 무엇부터 정해야 할까요?"라고 묻는다. 사실은 광주학생독립운동기념관 같은 공식 자료로 확인해 쓰게 한다.',
          task: '학생독립운동기념일에 학생이 주도할 기념 활동 기획안을 쓰고 기준표로 점검해요.', levels: NONE,
          items: [
            RWQ('기념 활동의 목적과 형식을 2~3문장으로 쓰세요.', '학생독립운동기념일에 우리 학교에서 할 학생 주도 기념 활동의 목적과 형식(낭독·전시·영상 등)을 쓰세요.', ['무엇을 기억할지 밝혔다', '활동 형식을 구체적으로 썼다', '학생이 주도하는 점이 드러난다'], { min: 50, max: 300, sent: [2, 4], must: [['목적']], starter: '우리 활동의 목적은 ~이다. 형식은 ~', plus: '참여 대상과 때를 밝혔다', d: 0.35 }),
            RWQ('활동에 쓸 사실을 어떻게 확인할지 2문장으로 쓰세요.', '기념 활동에 쓸 사실(1929년의 일, 11월 3일의 뜻)을 확인할 공식 자료와 방법을 쓰세요.', ['확인할 사실을 적었다', '공식 기관 자료를 출처로 들었다', '지어낸 대사나 장면을 쓰지 않겠다고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['출처', '자료']], starter: '1929년의 일은 ~에서 확인한다. 왜냐하면 ~', plus: '자료끼리 다를 때 어떻게 할지 밝혔다', d: 0.4 }),
            RWQ('참여 방법과 역할 나누기를 2~3문장으로 쓰세요.', '누구나 참여할 수 있는 방법과 모둠의 역할 나누기를 쓰세요.', ['참여 방법을 구체적으로 썼다', '역할을 나누었다', '참여하기 어려운 학생도 고려했다'], { min: 50, max: 300, sent: [2, 4], must: [['역할', '참여']], starter: '참여 방법은 ~이다. 역할은 ~', plus: '활동이 잘 되었는지 평가할 방법을 썼다', d: 0.4, more: { conclude: '학생 주도 기념 활동은 확인한 사실, 모두의 참여, 나눈 역할로 1929년 학생들의 정신을 오늘 우리 방식으로 이어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기획안을 한 장으로 정리하세요.', columns: ['항목', '내용'], cells: [['목적', ''], ['형식·때', ''], ['확인한 출처', ''], ['역할', '']] }] },
        notes: '실제 실행은 학교 계획과 학교장 승인을 따른다(research-days.md §0-4).',
      }),
      M({
        id: 'activity.run', type: 'activity', title: '기념 활동 진행',
        method: '기념 활동 실제 진행', tool: 'timer', minutes: 18,
        levels: { easy: '진행 순서 카드 3장만 놓고, 문항 글에 적힌 시간대로 맞춘다.', base: '순서 카드 4장을 놓고, 시간을 스스로 셈해 맞추고, 안전 점검 뒤 진행 기록을 남긴다.', challenge: '마친 뒤 점검에 \'다음 행사에 고칠 점을 기록했다\'가 더해진다.' },
        activity: {
          title: '기념 활동 진행', tool: 'timer',
          teacher: '"오늘은 교실 안에서 기념 활동을 실제로 진행해요. 순서는 역할 확인 → 안전 점검 → 진행(낭독·전시) → 정리, 진행은 모둠마다 3분씩 네 모둠이에요." 순서를 놓고 안전 점검을 마친 뒤 신호에 맞춰 진행한다. 낭독 대본에 지어낸 대사를 넣은 모둠에게 "실존 인물의 말은 공식 기록에 있는 것만 쓰기로 했지요?"라고 말한다. 진행이 끝나면 기록판에 참여 수를 적게 한다.',
          task: '진행 순서를 놓고 안전 점검을 한 뒤, 타이머에 맞춰 기념 활동을 진행하고 기록판에 남겨요.', levels: NONE,
          items: [
            TORDER('기념 활동 진행 순서 카드를 차례대로 놓으세요.', '기념 활동 진행 순서', ['역할 확인', '안전 점검', '낭독·전시 진행', '정리와 기록'], { k: 3 }),
            { prompt: '진행 전에 교실 안전 점검 세 칸을 모두 확인하세요.', toolOptions: { title: '교실 안전 점검', safety: ['통로에 가방·물건이 없다', '전시물이 넘어지지 않게 고정했다', '전기 기기 선이 발에 걸리지 않는다'] }, target: { safety: true }, difficulty: 0.15 },
            TPLAN('모둠마다 3분씩, 쉬는 시간 없이 네 모둠이 진행하도록 타이머를 맞추세요.', '진행 타이머', { work: 3, rest: 0, rounds: 4 }, ['진행', '쉬기'], { easy: '진행 3분, 쉬기 0분, 4번으로 맞추세요.' }),
            { prompt: '진행을 마친 뒤 참여한 사람 수와 발표한 모둠 수를 기록판에 적으세요.', toolOptions: { title: '진행 기록', unit: '명', fields: [{ label: '참여한 사람', unit: '명' }, { label: '발표한 모둠', unit: '모둠' }] }, target: { records: true }, difficulty: 0.15 },
            TCHECK('진행을 마친 뒤 진행 점검표에 표시하세요.', '기념 활동 점검', ['공식 기록의 사실만 썼다', '모두에게 역할이 있었다', '차분하고 존중하는 분위기였다'], { plus: '다음 행사에 고칠 점을 기록했다', more: { conclude: '기념 활동은 준비한 만큼 진행되고, 기록한 만큼 다음에 나아져요. 그것이 학생 자치가 이어지는 방식이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '진행 기록을 남기세요.', columns: ['모둠', '한 일', '잘된 점', '고칠 점'], cells: [['', '', '', ''], ['', '', '', '']] }] },
        notes: '교사가 신호와 시간을 진행한다. 진행 내용은 채점하지 않는다.',
      }),
      M({
        id: 'activity.channel', type: 'activity', title: '참여 통로 표',
        method: '참여 통로와 쓰임 표 읽기', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 학생 수가 보이고, 통로 두 개(학교 설문·학생회 건의)부터 읽는다.', base: '값 표시 없이 통로 네 개를 읽고 통로마다 다룰 수 있는 일을 고른다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 문제에 알맞은 통로를 고른 뒤 활동지에 까닭을 쓴다.' },
        activity: {
          title: '참여 통로 표', tool: 'chart',
          teacher: '"가상 학급 설문에서 한 해 동안 써 본 참여 통로를 물었어요. 실제 통계가 아니라 연습 자료예요. 많이 쓴 통로와 적게 쓴 통로를 읽어 봐요." 막대를 읽은 뒤 통로의 쓰임 물음으로 넘어간다. "지역 일은 청소년이 낄 데가 없어요"라는 학생에게 "지역 청소년참여위원회는 누구를 위해 있는 통로일까요?"라고 되묻는다. 문제마다 결정할 수 있는 곳에 닿는 통로가 다르다는 점을 짚는다.',
          task: '가상 설문 막대와 표를 읽고, 참여 통로마다 다룰 수 있는 일을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            CPICK('가상 설문에서 가장 많은 학생이 써 본 통로를 고르세요.', USED, '가장 높은 막대는?', ['학교 설문 응답', '학생회 건의', '청소년참여위원회', '지역 공청회'], 0, { d: 0.15 }),
            CVAL('학생회 건의를 써 본 학생과 청소년참여위원회를 써 본 학생의 차는 몇 명인가요?', USED, '두 통로의 차는?', 10, { d: 0.25 }),
            CPICK('\'학교 급식 메뉴\'에 의견을 내기에 가장 알맞은 통로를 고르세요.', USED, '급식 의견은 어디로?', ['학생회 건의', '지역 공청회', '익명 비방 글'], 0, { why: ['', '공청회는 지역 정책을 다루는 자리예요.', '비방 글은 결정하는 곳에 닿지 않아요.'], d: 0.3 }),
            CPICK('\'통학길 가로등\'처럼 지역의 문제에 의견을 내기에 알맞은 통로를 고르세요.', USED, '지역 문제는 어디로?', ['청소년참여위원회·자치단체 민원', '학급 회의만', '출처 없는 단체방 글'], 0, { why: ['', '학급 회의는 학교 안 일을 다뤄요. 지역 일은 자치단체에 닿아야 해요.', '단체방 글은 담당 기관에 닿지 않아요.'], d: 0.35, more: { conclude: '학교 안 일은 학생회·학교 설문으로, 지역 일은 청소년참여위원회·자치단체 민원으로. 결정할 수 있는 곳에 닿는 통로를 고르는 것이 참여의 첫걸음이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '참여 통로의 쓰임을 정리하세요.', columns: ['통로', '다룰 수 있는 일'], cells: [['학생회 건의', ''], ['학교 설문', ''], ['청소년참여위원회', ''], ['자치단체 민원', '']] }] },
        notes: '설문 수치는 가상이다. 청소년참여위원회(청소년기본법)·자치단체 민원 창구는 지역마다 운영이 다르다(사람 확인: 여성가족부 청소년 참여 안내·각 자치단체 누리집).',
      }),
      M({
        id: 'activity.choose', type: 'activity', title: '지역 문제 참여 갈림길',
        method: '참여 장면 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 따라가고 근거 카드를 고른다.', base: '두 번째 갈림길(어디로 낼지)까지 가고 근거를 고른다.', challenge: '세 번째 갈림길(결과 확인)까지 가고, 근거 카드 두 장 이상을 고른다.' },
        activity: {
          title: '지역 문제 참여 갈림길', tool: 'dilemma',
          teacher: '"가상 인물 하람의 통학길에 어두운 골목이 있어요. 하람이라면 어떻게 의견을 낼까요?" 고를 때마다 "이 선택은 결정할 수 있는 곳에 닿을까요?"라고 묻는다. \'어른이 되면 말한다\'를 고른 학생에게 "청소년이 지금 쓸 수 있는 통로는 무엇이 있을까요?"라고 되묻는다. 자료를 모을 때 사람 얼굴이나 개인정보는 넣지 않는다는 점, 그리고 결과를 확인하는 것까지가 참여라는 점을 짚는다.',
          task: '하람이 되어 지역 문제에 의견을 내는 통로를 고르고 결과를 끝까지 따라가요.', levels: NONE,
          items: [
            DILQ('하람이 되어 지역 문제에 의견을 내는 장면에서 선택하고 근거 카드를 고르세요.', TOWN, [['collect', 'youth', 'share']], TOWN_R, ['channel', 'evidence', 'follow'], { opt: { title: '어두운 통학길' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고, 두 결과를 견주어 점검하세요.', TOWN, TOWN_R, ['두 길의 결과를 견주었다', '의견이 어디에 닿았는지 짚었다'], { opt: { title: '다른 길도 가 보기' } }),
            DILQ('단체방 글에서 공식 민원으로 바꾸는 길을 끝까지 가 보고 근거를 고르세요.', TOWN, [['sns', 'switch']], TOWN_R, ['channel'], { d: 0.35, opt: { title: '통로를 바꾸는 길' }, more: { conclude: '청소년의 의견도 근거를 모아 결정할 수 있는 곳에 닿으면 바뀔 힘을 얻어요. 결과를 지켜보는 것까지가 참여예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 동네에서 바꾸고 싶은 것 하나와, 의견을 낼 통로를 쓰세요(사람 이름·주소는 쓰지 않아요).' }] },
        notes: '장면은 가상이다. 학생의 실제 주소·동네를 묻지 않는다.',
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '학생 자치 절차 한두 문장',
        method: '학생 자치 절차 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'안건은 ___ → ___ → 의결 → 공지 차례로 처리한다\')로 쓴다.', base: '절차 두 단계 이상과 원칙 하나를 넣어 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓰고, 학생독립운동과 잇는 말을 덧붙인다.' },
        wrap: {
          teacher: '"학생 자치의 절차를 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "학생회가 정한다"처럼 짧게 끝내는 학생에게 "정하기 전과 뒤에 어떤 단계가 있었나요?"라고 묻는다. 출구 2번에서 \'임원끼리 정한다\'를 고른 학생에게 공개·참여 원칙을 다시 떠올리게 한다.',
          exitTicket: [
            XRW('학생 자치 절차를 한두 문장으로 쓰고 기준표로 점검하세요.', '학생회 안건이 처리되는 절차와 지킬 원칙을 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['의견', '안건']], sample: '학생회 안건은 제안 뒤 반별 의견을 모으고, 회의에서 논의해 투표로 정한 다음 결과를 공지한다. 이때 회의록을 공개하고 반대 의견도 기록한다.' }),
            XCHOICE('학생 자치의 원칙에 맞는 것을 고르세요.', ['임원끼리 정하고 알리지 않는다', '모든 반이 의견을 내고 결과를 공개한다', '반대 의견은 지운다'], 1, '공개·참여·소수 존중이 자치의 원칙이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '학생 자치 절차',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '초·중등교육법은 학생의 ___ 활동이 권장·보호된다고 정한다.', answer: '자치' },
            { type: 'short', prompt: '1929년 학생들의 정신이 오늘 학생 자치와 어떻게 이어지는지 한 문장으로 쓰세요.' },
          ],
          easy: { note: '\'안건은 ___ → ___ → 의결 → 공지 차례로 처리한다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 단계를 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '진행 돌아보기',
        method: '진행 성찰', tool: 'emotion', minutes: 8,
        levels: { easy: '진행 만족도를 눈금으로만 고른다(익명).', base: '눈금을 고르고 그렇게 고른 까닭을 한 줄 쓴다.', challenge: '다음 행사에서 바꿀 점 하나를 더 쓴다.' },
        wrap: {
          teacher: '"오늘 기념 활동 진행에 얼마나 만족하나요? 이름 없이 모아요." 눈금 뒤 까닭을 한 줄 쓰게 한다. "발표를 못 해서 별로예요"라는 학생에게 "안전 점검이나 기록도 진행을 움직인 역할이에요. 무엇을 했나요?"라고 묻는다. 출구 3번은 진행 원칙을 함께 묻는다.',
          exitTicket: [
            XSCALE('오늘 기념 활동 진행의 만족도를 1~5로 고르세요(익명).', '오늘 우리가 진행한 기념 활동', '뿌듯함', SCALE5, '진행에 얼마나 만족하나요?'),
            XSHORT('그렇게 고른 까닭과 다음 행사에서 바꿀 점을 한 줄씩 쓰세요.'),
            XCHOICE('학생 주도 기념 활동에서 지킬 것으로 알맞은 것을 고르세요.', ['실존 인물에게 그럴듯한 대사를 지어 넣는다', '공식 기록의 사실만 쓰고 모두에게 역할을 준다', '안전 점검은 끝나고 한다'], 1, '실존 인물의 말은 공식 기록에 있는 것만 써요. 모두에게 역할이 있어야 학생 주도 활동이에요.'),
          ],
        },
        worksheet: {
          title: '진행 돌아보기',
          items: [
            { type: 'check', prompt: '오늘 내가 맡은 일에 표시하세요.', options: ['역할 확인', '안전 점검', '낭독·전시', '기록'] },
            { type: 'short', prompt: '다음 행사에서 바꿀 점 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.my', type: 'wrap', title: '나의 참여 계획 한 줄',
        method: '나의 참여 계획 한 줄', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 통로 카드 하나를 함께 골라 가지에 붙인다.', base: '통로 카드를 문제 가지에 짝짓고 내 계획을 한 줄 쓴다.', challenge: '계획에 날짜까지 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 통로 가운데 내가 쓸 것을 정해요. 먼저 문제마다 알맞은 통로를 짝지어 봐요." 짝지은 뒤 내 계획을 한 줄 쓰게 한다. "언젠가 해 볼게요"라는 학생에게 "이번 달 안에 할 수 있는 가장 작은 것은 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '문제에 맞는 통로', slots: ['학교 급식 의견', '통학길 가로등', '학교 축제 아이디어'], cards: ['학생회 건의', '자치단체 민원·청소년참여위원회', '학생회 설문', '익명 비방 글'] }, prompt: '문제마다 알맞은 참여 통로 카드를 짝지으세요.', target: { match: { '학교 급식 의견': ['학생회 건의', '학생회 설문'], '통학길 가로등': '자치단체 민원·청소년참여위원회', '학교 축제 아이디어': ['학생회 설문', '학생회 건의'] } }, difficulty: 0.2 },
            XSHORT('내가 쓸 참여 통로 하나와 계획(언제·무엇을)을 한 줄로 쓰세요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 참여 계획',
          items: [
            { type: 'short', prompt: '내가 쓸 참여 통로와 계획을 날짜와 함께 쓰세요.' },
            { type: 'short', prompt: '계획을 지켰는지 확인할 방법 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 12. 세계 인권의 날 — 기본권·인권 캠페인·권리 충돌
  // ======================================================================================================
  {
    const M = MOD('rights');
    const HATE = { text: '가상 학교 온라인 게시판에 특정 지역 출신 학생들을 비하하는 글이 올라왔다. 글쓴이는 "표현의 자유"라고 말한다.', who: '학생회', motif: 'cloud', choices: [
      { id: 'leave', text: '표현의 자유이니 그대로 둔다', result: '비하 댓글이 이어지고, 그 지역 출신 학생들이 게시판을 떠난다.', impact: [{ who: '비하당한 학생들', text: '학교에서 위축된다', tone: -1 }],
        next: { text: '학생 몇 명이 "우리도 말할 자유가 있는데 무서워서 못 쓴다"고 한다.', choices: [
          { id: 'rethink', text: '게시판 운영 규칙을 다시 논의한다', result: '표현의 자유와 다른 사람의 권리를 함께 지킬 규칙을 찾기 시작한다.', impact: [{ who: '학생들', text: '모두가 말할 수 있는 길을 찾는다', tone: 1 }], ending: '한 사람의 자유가 다른 사람의 자유를 막을 때 규칙이 필요하다.' },
          { id: 'ignore', text: '계속 그대로 둔다', result: '게시판에 남는 목소리가 한쪽뿐이 된다.', impact: [{ who: '학교', text: '토론이 사라진다', tone: -1 }], ending: '혐오 표현을 그대로 두면 오히려 다른 사람의 표현이 사라진다.' }] } },
      { id: 'rule', text: '학교 게시판 규칙에 따라 글을 가리고 까닭을 알린다', result: '글쓴이가 "검열"이라고 반발한다.', impact: [{ who: '비하당한 학생들', text: '보호받는다고 느낀다', tone: 1 }],
        next: { text: '글쓴이의 반발에 어떻게 답할지 고른다.', choices: [
          { id: 'explain', text: '비판은 자유지만 사람을 비하하는 것은 다른 사람의 권리를 해친다고 설명한다', result: '글쓴이가 비판하고 싶던 내용을 비하 없이 다시 쓴다.', impact: [{ who: '모두', text: '토론이 이어진다', tone: 1 }],
            next: { text: '학생회가 이 일을 어떻게 정리할지 고른다.', choices: [
              { id: 'publish', text: '기준을 정리해 모두에게 공개하고 의견을 받는다', result: '게시판 규칙이 더 분명해진다.', impact: [{ who: '모두', text: '기준을 함께 안다', tone: 1 }], ending: '권리가 부딪칠 때는 공개된 기준과 절차가 판단을 돕는다.' },
              { id: 'secret', text: '조용히 지우고 아무에게도 알리지 않는다', result: '무엇이 문제였는지 아무도 모른다.', impact: [{ who: '학생들', text: '기준을 몰라 불안하다', tone: 0 }], ending: '기준을 알리지 않으면 같은 일이 되풀이된다.' }] } },
          { id: 'ban', text: '그 학생을 게시판에서 영원히 쫓아낸다', result: '반발이 커지고 비슷한 다툼이 이어진다.', impact: [{ who: '글쓴이', text: '말할 기회를 모두 잃는다', tone: -1 }], ending: '권리를 제한할 때도 꼭 필요한 만큼만 한다.' }] } },
      { id: 'fight', text: '똑같이 비하하는 글로 맞받아친다', result: '게시판이 비하 글로 가득 찬다.', impact: [{ who: '모두', text: '서로 상처를 입는다', tone: -1 }], ending: '혐오에 혐오로 답하면 모두의 권리가 다친다.' }] };
    const HATE_R = [{ id: 'others', text: '표현의 자유도 다른 사람의 권리를 해치면 제한될 수 있다' }, { id: 'need', text: '권리를 제한할 때는 꼭 필요한 만큼만 한다' }, { id: 'open', text: '공개된 기준과 절차가 판단을 돕는다' }, { id: 'all', text: '표현의 자유는 무엇이든 말해도 된다는 뜻이다', why: '헌법은 다른 사람의 권리와 공공복리를 위해 필요한 경우 권리를 제한할 수 있게 해요.' }, { id: 'back', text: '혐오에는 혐오로 맞서야 한다', why: '혐오로 답하면 모두의 권리가 다쳐요.' }];
    const CCTV = { text: '가상 학교에서 교실 안 분실 사고가 이어지자 \'교실에 CCTV를 달자\'는 안건이 올라왔다. 안전을 바라는 의견과 사생활을 걱정하는 의견이 함께 나온다.', who: '학생회', motif: 'house', choices: [
      { id: 'install', text: '안전을 위해 교실에 바로 단다', result: '분실 걱정은 줄지만 늘 찍힌다는 느낌에 불편해하는 학생이 생긴다.', impact: [{ who: '분실을 걱정한 학생', text: '안심한다', tone: 1 }, { who: '사생활을 걱정한 학생', text: '불편하다', tone: -1 }],
        next: { text: '영상을 누가, 얼마나 볼지 정해야 한다.', choices: [
          { id: 'strict', text: '열람할 사람과 보관 기간을 엄격히 정한다', result: '걱정이 조금 줄어든다.', impact: [{ who: '학생들', text: '정해진 기준을 안다', tone: 1 }], ending: '안전을 위한 장치도 사생활을 지킬 기준이 함께 있어야 한다.' },
          { id: 'loose', text: '필요할 때 누구나 볼 수 있게 한다', result: '영상이 다른 일에 쓰일까 걱정이 커진다.', impact: [{ who: '학생들', text: '사생활이 불안하다', tone: -1 }], ending: '기준 없는 열람은 사생활을 크게 해친다.' }] } },
      { id: 'other', text: '사물함 잠금처럼 덜 침해하는 방법부터 해 본다', result: '분실이 줄어드는지 한 달 동안 지켜보기로 한다.', impact: [{ who: '학생들', text: '사생활을 지키며 안전을 찾는다', tone: 1 }],
        next: { text: '한 달 뒤 분실이 조금 줄었지만 다 없어지지는 않았다.', choices: [
          { id: 'again', text: '복도에만 다는 안을 함께 논의한다', result: '교실 안은 지키고 복도 안전을 보완하는 안이 나온다.', impact: [{ who: '학생들', text: '두 권리를 함께 살핀다', tone: 1 }], ending: '권리가 부딪칠 때는 덜 침해하는 방법부터 차례로 찾아볼 수 있다.' },
          { id: 'stop', text: '조금 줄었으니 그대로 둔다', result: '분실을 걱정하는 학생의 불안은 남는다.', impact: [{ who: '분실을 걱정한 학생', text: '여전히 걱정한다', tone: 0 }], ending: '한쪽 걱정이 남아 있으면 논의를 이어 갈 수 있다.' }] } },
      { id: 'vote', text: '바로 투표로 정한다', result: '근소한 차이로 결정되고 반대한 쪽은 승복하기 어렵다고 말한다.', impact: [{ who: '소수 의견', text: '목소리가 묻힌 느낌이다', tone: 0 }], ending: '권리가 걸린 일은 투표 전에 충분한 논의가 필요하다.' }] };
    const CCTV_R = [{ id: 'both', text: '안전과 사생활은 둘 다 지켜야 할 권리다' }, { id: 'least', text: '덜 침해하는 방법을 먼저 찾아볼 수 있다' }, { id: 'rule', text: '장치를 쓴다면 열람·보관 기준이 함께 있어야 한다' }, { id: 'talk', text: '권리가 걸린 일은 충분히 논의한다' }];
    MODS.push(
      M({
        id: 'intro.article', type: 'intro', title: '기본권 조문 한 줄',
        method: '기본권 조문 한 줄 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 두 장(존엄과 가치·행복 추구)만 짚으며 함께 고른다.', base: '보기 다섯 장 가운데 조문에 나오는 권리 두 장과 선언 문장 한 장을 학생이 고른다.', challenge: '세계 인권 선언 제1조와 헌법 제10조가 어떻게 이어지는지 말한다.' },
        intro: {
          teacher: '"1948년 12월 10일 유엔 총회가 세계 인권 선언을 채택했어요. 제1조는 \'모든 인간은 태어날 때부터 자유롭고 존엄성과 권리에 있어 평등하다\'예요. 우리 헌법 제10조도 읽어 볼까요? \'모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.\'" 시연 단추로 조문에 나오는 권리 카드가 바구니에 담기는 모습을 보여 준다. "권리가 적혀 있으면 다 지켜지는 거죠?"라는 말이 나오면 "적힌 권리를 지키려면 무엇이 더 필요할까요?"라고 되묻는다.',
          student: '헌법 제10조와 세계 인권 선언 제1조를 듣고, 두 문장에 나오는 권리 카드를 바구니에 골라 담아 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '조문에 나오는 권리', title: '헌법 제10조와 인권 선언 제1조', shuffle: false, cards: [
            { id: 'dignity', text: '인간으로서의 존엄과 가치', motif: 'star' }, { id: 'rule', text: '남을 다스릴 권리', motif: 'castle' }, { id: 'happy', text: '행복을 추구할 권리', motif: 'sun' },
            { id: 'any', text: '무엇이든 마음대로 할 권리', motif: 'storm' }, { id: 'equal', text: '존엄성과 권리에 있어 평등', motif: 'flower' }] }, sequence: [{ pick: ['dignity', 'happy', 'equal'] }] },
          art: { draw: 'an open paper constitution book and a paper scroll of a declaration side by side, paper people of many kinds holding hands in a circle around them, a soft December light', banner: '모든 사람의 권리' },
        },
        notes: '세계 인권 선언 채택일(1948.12.10)과 제1조, 헌법 제10조는 기존 g10~g12 차시 사실. 세계 인권의 날의 법정 기념일 여부는 확인 못함(research-days.md §1) — 날짜는 선언 채택일로만 소개한다.',
      }),
      M({
        id: 'intro.words', type: 'intro', title: '교실 속 차별 표현',
        method: '교실 속 차별 표현 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 카드 두 장만 읽고 차별 표현을 함께 고른다.', base: '문장 카드 다섯 장 가운데 차별 표현 세 장을 학생이 고른다.', challenge: '고른 표현을 바꾼 말로 짐작해 말한다.' },
        intro: {
          teacher: '"교실에서 무심코 쓰는 말 가운데 차별이 담긴 말이 있을까요?" 문장 카드를 읽은 뒤 시연 단추로 차별 표현이 바구니에 담기는 모습을 보여 준다. "장난으로 한 말인데요"라는 말이 나오면 "말한 사람의 뜻과 들은 사람의 마음은 같을까요?"라고 되묻는다. 오늘은 일상 속 차별 표현을 바꾸는 캠페인을 기획한다고 잇는다.',
          student: '교실에서 들릴 법한 문장 카드 가운데 차별이 담긴 표현을 골라 바구니에 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '차별이 담긴 표현', speak: false, cards: [
            { id: 'girl', text: '여자가 무슨 축구야' }, { id: 'help', text: '같이 해 볼래?' }, { id: 'old', text: '나이 든 사람은 이런 거 못 해' }, { id: 'thanks', text: '알려 줘서 고마워' }, { id: 'where', text: '너희 나라로 돌아가' }] }, sequence: [{ pick: ['girl', 'old', 'where'] }] },
          art: { draw: 'a paper classroom with floating paper speech bubbles, some bubbles cracked and grey, others bright and round, a paper student holding a magnifying glass', banner: '이 말, 괜찮을까?' },
        },
      }),
      M({
        id: 'intro.clash', type: 'intro', title: '두 권리가 부딪칠 때',
        method: '두 권리가 부딪치는 장면 첫 판단', tool: 'emotion', minutes: 6,
        levels: { easy: '첫 판단을 눈금으로만 고른다.', base: '눈금을 고르고 그렇게 고른 까닭을 말한다.', challenge: '판단하려면 어떤 정보를 더 확인해야 할지 말한다.' },
        intro: {
          teacher: '"가상 장면이에요. 친구가 학교 축제에서 찍은 단체 사진을 허락 없이 공개 계정에 올렸어요. 친구는 \'내 표현의 자유\'라고 하고, 사진 속 다른 친구는 \'내 사생활\'이라고 해요. 어느 쪽이 더 무거워 보이나요?" 손을 들어 1~5에 표시하게 한 뒤 시연 단추로 눈금을 보여 준다. "당연히 한쪽이 맞죠"라는 말이 나오면 "사진이 어디에, 누구에게 공개되었는지에 따라 판단이 달라질까요?"라고 되묻는다. 정답이 없는 첫 판단이며, 오늘은 근거로 따져 본다고 밝힌다.',
          student: '두 권리가 부딪치는 가상 장면을 보고, 내 첫 판단을 눈금으로 골라 보세요. 정답은 없어요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 장면: 친구가 축제 단체 사진을 허락 없이 공개 계정에 올렸다. "표현의 자유"와 "사생활"이 부딪친다.', feeling: '생각', steps: 5, scaleLabels: { 1: '표현의 자유가 더 무겁다', 5: '사생활이 더 무겁다' }, ask: '내 첫 판단은 어느 쪽인가요?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper balance scale with a paper speech bubble on one side and a paper door with a small lock on the other, a festival photo frame floating between them', banner: '어느 쪽이 더 무거울까?' },
        },
      }),

      M({
        id: 'activity.match', type: 'activity', title: '기본권과 사례',
        method: '기본권 조문과 사례 잇기', tool: 'sortboard', minutes: 18,
        levels: { easy: '사례 카드 3장(칸마다 1장)만 나누고, 틀린 바구니는 바로 알려 준다.', base: '사례 카드 6장을 기본권 바구니로 나누고, 사례를 조문 바구니로 나눈다.', challenge: '카드를 섞어 시작하고, 두 권리가 함께 걸린 사례를 가르는 카드가 더해진다.' },
        activity: {
          title: '기본권과 사례', tool: 'sortboard',
          teacher: '"헌법은 여러 기본권을 정해요. 제11조 평등, 제17조 사생활의 비밀과 자유, 제21조 언론·출판·집회·결사의 자유, 제31조 교육받을 권리. 사례마다 어떤 권리가 걸려 있을까요?" 카드를 넣을 때마다 "이 사례에서 누구의 무엇이 지켜지거나 침해되나요?"라고 묻는다. 휴대폰 몰래 보기를 평등권에 넣는 학생에게 "차별의 문제일까요, 감추고 싶은 것을 지킬 권리의 문제일까요?"라고 되묻는다. 한 사례에 두 권리가 함께 걸릴 수 있다는 점을 3번에서 짚는다.',
          task: '가상 사례 카드를 기본권 바구니로 나누고, 두 권리가 부딪치는 사례를 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('가상 사례 카드를 기본권 바구니로 나누세요.', ['평등권(제11조)', '사생활의 자유(제17조)', '교육받을 권리(제31조)'], [
              ['성별 때문에 동아리 가입을 거절당한다', '출신 지역으로 놀림을 받는다'],
              ['친구가 내 휴대폰 메시지를 몰래 본다', '내 일기를 허락 없이 게시판에 올린다'],
              ['장애 학생에게 맞는 수업 자료가 없다', '형편 때문에 교과서를 못 산다'],
            ], { k: 1, d: 0.3 }),
            SBQ('가상 사례를 걸린 자유 바구니로 나누세요.', ['사생활의 자유(제17조)', '표현의 자유(제21조)'], [
              ['내 사진을 허락 없이 공개한다', '내 집 주소를 단체방에 퍼뜨린다'],
              ['학교 신문에 비판 기사를 싣지 못하게 한다', '평화로운 서명 운동을 막는다'],
            ], { k: 1, d: 0.3 }),
            SBQ('사례를 한 권리만 걸림·두 권리가 부딪침 바구니로 나누세요.', ['한 권리만 걸린 사례', '두 권리가 부딪치는 사례'], [
              ['형편 때문에 교과서를 못 산다'],
              ['친구의 축제 사진을 허락 없이 올리며 표현의 자유라고 한다'],
            ], { k: 1, hard: [['성별 때문에 동아리 가입을 거절당한다'], ['안전을 위해 교실에 CCTV를 달자고 한다']], d: 0.35, more: { conclude: '사례마다 걸린 기본권이 있고, 때로는 두 권리가 함께 걸려 부딪쳐요. 그럴 때는 어느 하나를 지우지 않고 근거로 균형을 찾아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 권리가 부딪치는 사례 하나를 골라, 어떤 권리끼리 부딪치는지 쓰세요.' }] },
        notes: '조문 번호는 국가법령정보센터 헌법 원문 기준이다. 사례는 모두 가상이며 학생의 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.help', type: 'activity', title: '도움받는 차례',
        method: '인권 침해 때 도움받는 차례 놓기', tool: 'timeline', minutes: 18,
        levels: { easy: '차례 카드 3장만 놓고, 틀린 자리는 바로 알려 준다.', base: '차례 카드 5장을 놓고, 단계마다 준비할 것을 짝지은 뒤 도움받을 곳을 고른다.', challenge: '카드를 섞어 시작하고, 활동지에 단계별 준비물을 정리한다.' },
        activity: {
          title: '도움받는 차례', tool: 'timeline',
          teacher: '"가상 친구 다온이 학교에서 차별을 겪고 있다고 털어놓았어요. 다온을 돕는다면 어떤 차례로 도움을 받을 수 있을까요?" 놓을 때마다 "이 단계에서 무엇을 준비하면 좋을까요?"라고 묻는다. "참는 게 낫다"는 카드를 고르는 학생에게 "참는 것 말고 쓸 수 있는 공식 통로는 무엇이 있을까요?"라고 되묻는다. 학교 안팎에 도움받을 곳이 있고, 국가인권위원회에 진정할 수도 있다는 점을 짚는다. 학생 자신의 경험은 묻지 않는다.',
          task: '가상 친구가 인권 침해를 겪을 때 도움받는 차례를 놓고, 단계마다 준비할 것을 짝지어요.', levels: LIVE,
          items: [
            ORDERQ('인권 침해를 겪는 가상 친구를 돕는 차례를 놓으세요.', ['언제·어디서·무엇을 기록', '믿을 어른·상담 선생님과 이야기', '학교 절차로 알리기', '공식 기관에 상담·진정', '결과 확인하기'], { k: 3, d: 0.3, opt: { axis: ['처음', '끝'] } }),
            MATCHQ('단계 칸에 준비할 것을 짝지으세요.', [['언제·어디서·무엇을 기록', '날짜·장소·있었던 일을 적은 메모'], ['믿을 어른·상담 선생님과 이야기', '털어놓을 수 있는 사람 정하기'], ['공식 기관에 상담·진정', '기관의 상담 창구 확인']], { k: 2, d: 0.3, opt: { axis: ['처음', '끝'] } }),
            PICKQ('인권 침해 때 도움받을 수 있는 곳만 고르세요.', ['담임·상담 선생님', '국가인권위원회'], ['아무도 없는 익명 단체방', '가해한 사람에게만 따로 말하기'], { d: 0.35, opt: { basket: '도움받을 곳', axis: ['처음', '끝'] }, more: { conclude: '인권 침해는 참는 것이 아니라 기록하고, 믿을 어른과 나누고, 학교 절차와 국가인권위원회 같은 공식 기관으로 도움을 받을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단계별 준비물을 정리하세요.', columns: ['단계', '준비할 것'], cells: [['기록', ''], ['이야기하기', ''], ['학교 절차', ''], ['공식 기관', '']] }] },
        notes: '가상 친구 장면으로만 다룬다. 학생이 겪은 일을 꺼내게 하지 않는다. 국가인권위원회 진정 절차·상담 창구는 국가인권위원회 누리집으로 확인한다(사람 확인, 전화번호는 쓰지 않음).',
      }),
      M({
        id: 'activity.campaign', type: 'activity', title: '인권 캠페인 기획',
        method: '학교 인권 캠페인 기획서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문항마다 문장 틀을 보고 채운다.', base: '바꿀 표현·캠페인 방법·참여와 존중을 문항마다 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 효과를 확인할 방법까지 쓴다.' },
        activity: {
          title: '인권 캠페인 기획', tool: 'rubric-writing',
          teacher: '"일상 속 차별 표현을 바꾸는 학교 인권 캠페인을 기획해요. 좋은 기획서는 무엇을 바꿀지, 어떻게 알릴지, 누구도 상처받지 않게 할지가 분명해요." 문항마다 기준표를 함께 읽는다. 특정 학생의 말을 예로 들려는 학생에게 "캠페인이 누군가를 지목하면 그 사람의 인권은 어떻게 될까요?"라고 묻는다. 캠페인은 사람이 아니라 표현을 바꾸는 것이라는 점을 짚는다.',
          task: '일상 속 차별 표현을 바꾸는 학교 인권 캠페인 기획서를 쓰고 기준표로 점검해요.', levels: NONE,
          items: [
            RWQ('바꿀 차별 표현과 바꾼 말을 2문장으로 쓰세요.', '캠페인에서 바꿀 일상 속 차별 표현 하나와 바꾼 말, 그 까닭을 쓰세요.', ['바꿀 표현을 밝혔다', '바꾼 말을 제시했다', '특정 사람을 지목하지 않았다'], { min: 40, max: 300, sent: [2, 3], starter: '우리가 바꿀 표현은 ~이다. 바꾼 말은 ~', plus: '그 표현이 누구에게 상처가 되는지 썼다', d: 0.35 }),
            RWQ('캠페인 방법을 2~3문장으로 쓰세요.', '캠페인을 어떻게 알릴지(표어 게시·짝 설문·방송 등) 구체적으로 쓰세요.', ['방법을 구체적으로 썼다', '때와 장소를 밝혔다', '참여를 권하는 말투로 썼다'], { min: 50, max: 300, sent: [2, 4], must: [['캠페인']], starter: '우리 캠페인은 ~에서 ~ 방법으로 한다.', plus: '참여하기 어려운 학생도 고려했다', d: 0.4 }),
            RWQ('존중을 지킬 약속을 2문장으로 쓰세요.', '캠페인을 하며 누구도 비난받거나 지목되지 않게 할 약속을 쓰세요.', ['존중의 약속을 썼다', '사람이 아니라 표현을 다룬다고 밝혔다', '개인정보를 쓰지 않는다고 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['존중']], plus: '캠페인 효과를 확인할 방법을 썼다', d: 0.4, more: { conclude: '좋은 인권 캠페인은 사람이 아니라 표현을 바꾸고, 누구나 참여할 수 있게, 존중의 방식으로 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '캠페인 기획서를 한 장으로 정리하세요.', columns: ['항목', '내용'], cells: [['바꿀 표현 → 바꾼 말', ''], ['방법·때·장소', ''], ['존중의 약속', ''], ['효과 확인', '']] }] },
      }),
      M({
        id: 'activity.run', type: 'activity', title: '캠페인 진행',
        method: '캠페인 실제 진행', tool: 'timer', minutes: 18,
        levels: { easy: '진행 순서 카드 3장만 놓고, 문항 글에 적힌 시간대로 맞춘다.', base: '순서 카드 4장을 놓고, 시간을 스스로 셈해 맞춘 뒤 반응 기록을 남긴다.', challenge: '마친 뒤 점검에 \'반응에서 고칠 점을 찾아 기록했다\'가 더해진다.' },
        activity: {
          title: '캠페인 진행', tool: 'timer',
          teacher: '"이제 교실 안에서 캠페인을 실제로 진행해요. 순서는 역할 확인 → 존중 규칙 읽기 → 진행(표어 게시·짝 설문) → 반응 기록, 진행은 4분씩 세 번이에요." 순서를 놓고 타이머를 맞춘 뒤 신호에 맞춰 진행한다. 짝 설문에서 이름을 적게 하려는 모둠에게 "설문은 이름 없이 받기로 했지요?"라고 말한다. 반응을 기록판에 적게 한다.',
          task: '진행 순서를 놓고 타이머에 맞춰 캠페인을 진행한 뒤, 반응을 기록판에 남기고 점검해요.', levels: NONE,
          items: [
            TORDER('캠페인 진행 순서 카드를 차례대로 놓으세요.', '캠페인 진행 순서', ['역할 확인', '존중 규칙 읽기', '표어 게시·짝 설문', '반응 기록'], { k: 3 }),
            TPLAN('진행 4분씩, 쉬는 시간 없이 세 번 돌도록 타이머를 맞추세요.', '캠페인 진행 타이머', { work: 4, rest: 0, rounds: 3 }, ['진행', '쉬기'], { easy: '진행 4분, 쉬기 0분, 3번으로 맞추세요.' }),
            { prompt: '진행을 마친 뒤 설문 응답 수와 표어에 공감 스티커를 붙인 수를 기록판에 적으세요.', toolOptions: { title: '캠페인 반응 기록', unit: '개', fields: [{ label: '설문 응답', unit: '개' }, { label: '공감 스티커', unit: '개' }] }, target: { records: true }, difficulty: 0.15 },
            TCHECK('진행을 마친 뒤 캠페인 점검표에 표시하세요.', '캠페인 점검', ['설문은 이름 없이 받았다', '특정 사람을 지목하지 않았다', '존중하는 말로 참여를 권했다'], { plus: '반응에서 고칠 점을 찾아 기록했다', more: { conclude: '캠페인은 진행하고 끝나는 것이 아니라, 반응을 기록하고 고칠 점을 찾을 때 다음 캠페인이 더 나아져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '캠페인 반응을 기록하세요.', columns: ['방법', '반응', '고칠 점'], cells: [['표어 게시', '', ''], ['짝 설문', '', '']] }] },
        notes: '교사가 신호와 시간을 진행한다. 설문은 이름 없이 받고 개인 응답을 공개하지 않는다.',
      }),
      M({
        id: 'activity.issue', type: 'activity', title: '권리 충돌 갈림길',
        method: '권리 충돌 쟁점 갈림길과 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '쟁점 하나(게시판 비하 글)의 첫 갈림길까지만 따라가고 근거 카드를 고른다.', base: '두 쟁점(게시판·CCTV)을 두 번째 갈림길까지 따라가고 근거를 고른다.', challenge: '두 쟁점을 끝까지 따라가고, 근거 카드 두 장 이상을 고른다.' },
        activity: {
          title: '권리 충돌 갈림길', tool: 'dilemma',
          teacher: '"두 쟁점을 따라가요. 하나는 \'표현의 자유와 혐오 표현\', 다른 하나는 \'사생활과 안전\'이에요. 헌법은 권리를 다른 사람의 권리나 공공복리를 위해 꼭 필요한 경우 법으로 제한할 수 있게 하되, 본질적인 내용은 침해할 수 없게 해요." 고를 때마다 "이 선택으로 누구의 어떤 권리가 지켜지고 누구의 권리가 줄어드나요?"라고 묻는다. CCTV 쟁점에는 정답을 정하지 않고, 여러 길을 끝까지 가 본 뒤 근거를 견주게 한다. "무조건 안전이 먼저"라는 학생에게 "덜 침해하는 방법은 없었을까요?"라고 되묻는다.',
          task: '두 권리가 부딪치는 쟁점에서 선택하고 결과를 끝까지 따라간 뒤, 근거를 견주어요.', levels: NONE,
          items: [
            DILQ('게시판 비하 글 쟁점에서 선택하고 근거 카드를 고르세요.', HATE, [['rule', 'explain', 'publish']], HATE_R, ['others', 'need'], { opt: { title: '표현의 자유와 혐오 표현' } }),
            EXPLOREQ('교실 CCTV 쟁점은 정답이 없어요. 서로 다른 길 두 개를 끝까지 가 보고 근거를 고른 뒤 점검하세요.', CCTV, CCTV_R, ['두 길의 결과를 견주었다', '안전과 사생활을 모두 짚었다', '덜 침해하는 방법을 생각했다'], { d: 0.4, opt: { title: '사생활과 안전' } }),
            DILQ('게시판 쟁점에서 혐오로 맞받아친 길을 끝까지 가 보고 근거를 고르세요.', HATE, [['fight']], HATE_R, ['others'], { d: 0.35, opt: { title: '맞받아친 길' }, more: { conclude: '권리가 부딪칠 때는 한쪽을 지우지 않고, 꼭 필요한 만큼만 제한하며, 공개된 기준으로 판단해요. 정답이 하나가 아닌 쟁점은 근거를 견주어 입장을 세워요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: 'CCTV 쟁점에서 내가 끝까지 가 본 두 길의 결과를 견주어 한 문장으로 쓰세요.' }] },
        notes: '헌법 제37조 제2항(기본권 제한과 그 한계)은 원문 요지만 말로 소개한다. CCTV 쟁점은 열린 문항이며 어느 입장도 채점하지 않는다.',
      }),
      M({
        id: 'activity.stance', type: 'activity', title: '근거를 갖춘 입장문',
        method: '근거를 갖춘 입장문 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문단마다 문단 틀을 보고 쓴다.', base: '네 문단(입장·근거·다른 관점 검토·맺음)을 쓰고 문단마다 기준표로 점검한다.', challenge: '문단마다 기준 하나가 더 붙고, 반론을 검토하는 문단을 더 깊이 쓴다.' },
        activity: {
          title: '근거를 갖춘 입장문', tool: 'rubric-writing',
          teacher: '"\'교실에 CCTV를 달아야 할까?\'에 대한 내 입장문을 써요. 어느 입장이든 좋아요. 기준은 근거가 있는지, 다른 관점을 공정하게 검토했는지예요." 문단마다 기준표를 함께 읽는다. 상대 입장을 \'말도 안 된다\'고 쓰는 학생에게 "상대 입장에서 가장 강한 근거는 무엇일까요? 그것을 인정하고도 내 입장을 지킬 수 있나요?"라고 묻는다. 입장은 채점하지 않는다고 먼저 말한다.',
          task: '교실 CCTV 쟁점에 대한 내 입장을 근거와 다른 관점 검토를 갖춘 네 문단 입장문으로 쓰고 점검해요.', levels: NONE,
          items: [
            RWQ('1문단: 내 입장을 1~2문장으로 밝히세요.', '교실 CCTV 설치에 대한 내 입장(찬성·반대·조건부)을 밝히세요.', ['입장을 분명히 밝혔다', '어떤 권리가 걸렸는지 짚었다', '단정하는 말 대신 판단임을 드러냈다'], { min: 30, max: 250, sent: [1, 3], starter: '나는 교실 CCTV 설치에 ~ 입장이다.', plus: '조건이 있다면 조건을 밝혔다', d: 0.35 }),
            RWQ('2문단: 내 입장의 근거를 2~3문장으로 쓰세요.', '내 입장을 받치는 근거(오늘 본 결과·기본권 조문·덜 침해하는 방법 등)를 쓰세요.', ['근거를 둘 이상 들었다', '갈림길 결과나 조문을 근거로 썼다', '근거와 입장을 이었다'], { min: 50, max: 300, sent: [2, 4], must: [['근거', '왜냐하면', '때문']], starter: '그렇게 보는 근거는 ~이다.', plus: '근거의 출처를 밝혔다', d: 0.4 }),
            RWQ('3문단: 다른 관점을 공정하게 검토하는 2~3문장을 쓰세요.', '나와 다른 입장의 가장 강한 근거를 소개하고, 그에 대한 내 생각을 쓰세요.', ['다른 입장의 근거를 정확히 소개했다', '상대를 깎아내리지 않았다', '내 생각을 근거로 답했다'], { min: 50, max: 300, sent: [2, 4], starter: '물론 ~라는 의견도 있다. 그러나 ~', plus: '상대 근거에서 인정할 점을 밝혔다', d: 0.45 }),
            RWQ('4문단: 두 권리를 함께 지킬 방안으로 맺는 2문장을 쓰세요.', '안전과 사생활을 함께 지킬 방안을 제안하며 입장문을 맺으세요.', ['두 권리를 모두 다뤘다', '구체적인 방안을 썼다', '앞 문단과 이어진다'], { min: 40, max: 300, sent: [2, 3], starter: '그래서 나는 ~ 방안을 제안한다.', plus: '방안의 한계도 한 마디 썼다', d: 0.4, more: { conclude: '좋은 입장문은 내 입장만큼 상대의 가장 강한 근거를 공정하게 다루고, 부딪치는 권리를 함께 지킬 길을 찾아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 입장문을 점검하세요.', columns: ['문단', '핵심 문장'], cells: [['입장', ''], ['근거', ''], ['다른 관점 검토', ''], ['방안', '']] }] },
        notes: '열린 쟁점이며 어느 입장도 정답으로 정하지 않는다. 입장은 채점하지 않고 근거와 검토 여부만 스스로 점검한다.',
      }),

      M({
        id: 'wrap.one', type: 'wrap', title: '인권 선언과 헌법 기본권',
        method: '세계 인권 선언과 헌법 기본권의 관계 출구 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '칠판의 문장 틀(\'세계 인권 선언의 ___ 은 헌법 제10조의 ___ 로 이어진다\')로 쓴다.', base: '선언과 헌법 조문 하나씩을 넣어 한두 문장으로 쓰고 점검한다.', challenge: '문장 틀 없이 자기 말로 쓴다.' },
        wrap: {
          teacher: '"세계 인권 선언과 우리 헌법의 기본권은 어떻게 이어질까요? 한두 문장으로 남겨 봐요." 쓰기 전에 기준표를 함께 읽는다. "둘 다 인권 이야기다"처럼 넓게 쓰는 학생에게 "선언 제1조의 어떤 낱말이 헌법 제10조에도 나오나요?"라고 묻는다. 출구 2번에서 \'표현의 자유는 무엇이든 말해도 된다\'를 고른 학생에게 게시판 쟁점을 다시 떠올리게 한다.',
          exitTicket: [
            XRW('세계 인권 선언과 헌법 기본권의 관계를 한두 문장으로 쓰고 기준표로 점검하세요.', '세계 인권 선언의 정신이 우리 헌법의 기본권으로 어떻게 이어지는지 한두 문장으로 쓰세요.', EXIT_CHECK, { must: [['선언'], ['헌법', '기본권']], sample: '세계 인권 선언 제1조는 모든 인간이 존엄성과 권리에 있어 평등하다고 밝힌다. 우리 헌법 제10조도 모든 국민이 인간으로서의 존엄과 가치를 가진다고 정해 그 정신을 잇는다.' }),
            XCHOICE('표현의 자유에 대한 설명으로 알맞은 것을 고르세요.', ['무엇이든 말해도 된다는 뜻이다', '다른 사람의 권리를 해치면 제한될 수 있다', '학생에게는 없다'], 1, '표현의 자유도 다른 사람의 권리를 위해 꼭 필요한 경우 제한될 수 있어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '인권 선언과 헌법',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '세계 인권 선언은 1948년 12월 10일 ___ 총회에서 채택되었다.', answer: '유엔' },
            { type: 'short', prompt: '헌법 기본권 가운데 내 학교생활과 가장 가까운 권리 하나와 그 까닭을 쓰세요.' },
          ],
          easy: { note: '\'세계 인권 선언의 ___ 은 헌법 제10조의 ___ 로 이어진다.\'', items: [{ type: 'short', prompt: '빈칸에 들어갈 말을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '캠페인 반응 돌아보기',
        method: '캠페인 성찰', tool: 'emotion', minutes: 8,
        levels: { easy: '캠페인 반응에 대한 생각을 눈금으로만 고른다(익명).', base: '눈금을 고르고 그렇게 고른 까닭을 한 줄 쓴다.', challenge: '다음 캠페인에서 개선할 점 하나를 더 쓴다.' },
        wrap: {
          teacher: '"오늘 캠페인 반응을 보고 어떤 생각이 드나요? 표현이 바뀔 것 같은 정도를 눈금으로 골라요. 이름 없이 모아요." 눈금 뒤 까닭을 한 줄 쓰게 한다. "반응이 적어서 실패예요"라는 학생에게 "기록판의 숫자 말고, 설문에서 나온 말 가운데 기억나는 것이 있나요?"라고 묻는다.',
          exitTicket: [
            XSCALE('우리 캠페인으로 교실 표현이 바뀔 것 같은 정도를 1~5로 고르세요(익명).', '오늘 진행한 차별 표현 바꾸기 캠페인', '생각', { 1: '거의 안 바뀔 것 같다', 5: '많이 바뀔 것 같다' }, '표현이 얼마나 바뀔 것 같나요?'),
            XSHORT('그렇게 고른 까닭과 다음 캠페인에서 개선할 점을 한 줄씩 쓰세요.'),
            XCHOICE('인권 캠페인에서 지킬 것으로 알맞은 것을 고르세요.', ['차별 표현을 쓴 학생 이름을 공개한다', '사람이 아니라 표현을 바꾸자고 권한다', '설문 응답을 이름과 함께 게시한다'], 1, '캠페인은 사람을 지목하지 않고 표현을 바꾸는 것이에요.'),
          ],
        },
        worksheet: {
          title: '캠페인 돌아보기',
          items: [
            { type: 'short', prompt: '캠페인에서 가장 의미 있던 반응 하나를 쓰세요(이름 없이).' },
            { type: 'short', prompt: '다음 캠페인에서 개선할 점 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.peer', type: 'wrap', title: '입장문 짝 점검',
        method: '입장문 짝 점검', tool: 'timer', minutes: 8,
        levels: { easy: '짝 점검 항목 중 앞 두 개(입장·근거)만 함께 본다.', base: '4분 타이머를 맞추고 네 항목을 모두 점검한다.', challenge: '점검 뒤 짝의 글에서 고칠 문장 하나를 활동지에 제안한다.' },
        wrap: {
          teacher: '"짝과 입장문을 바꿔 읽어요. 4분 동안 네 항목을 점검해요. 기준은 짝의 입장이 나와 같은지가 아니라, 근거와 검토가 있는지예요." 타이머를 맞춘 뒤 시작한다. 입장이 달라 점수를 깎으려는 학생에게 "다른 입장이어도 근거가 탄탄할 수 있을까요?"라고 묻는다. 고칠 점은 사람이 아니라 문장을 두고 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '입장문 짝 점검 4분', timeUnit: 'min', labels: ['점검', '쉬기'], plan: { work: 2, rest: 0, rounds: 1 } }, prompt: '타이머를 4분 한 번으로 맞추고, 짝의 입장문을 읽으며 점검 네 칸을 모두 확인하세요.', target: { plan: { work: 4, rounds: 1 }, selfCheck: ['입장이 분명하다', '근거가 둘 이상 있다', '다른 관점을 공정하게 다뤘다', '두 권리를 함께 지킬 방안이 있다'] }, difficulty: 0.2 },
            XCHOICE('짝의 입장이 나와 다를 때 알맞은 점검을 고르세요.', ['입장이 다르면 낮게 점검한다', '근거와 다른 관점 검토가 있는지 본다', '점검하지 않는다'], 1, '열린 쟁점에서는 입장이 아니라 근거와 검토를 점검해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '입장문 짝 점검',
          items: [
            { type: 'table', prompt: '짝의 입장문을 점검하세요.', columns: ['기준', '○/△', '찾은 문장'], cells: [['분명한 입장', '', ''], ['근거', '', ''], ['다른 관점 검토', '', ''], ['방안', '', '']] },
            { type: 'short', prompt: '짝의 글에서 고치면 더 좋아질 문장 하나와 고친 문장을 쓰세요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
