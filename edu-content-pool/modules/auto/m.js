/* 창체 자율·자치활동 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 auto 중.
 * 근거: 교육부 고시 제2022-33호 [별책 40] 창의적 체험활동 교육과정 <표 2>(p.8) 자율활동(주제 탐구·적응 및 개척·프로젝트형 봉사)·
 *   자치활동(기본생활습관 형성·관계 형성 및 소통·공동체 자치), <표 5>(p.13-14) 중학교 운영 중점. 조사: sources/changche/research-changche.md.
 *   1시간 = 중 45분(S2). 주제마다 source 는 체계도에 있다.
 * 중 기준: 사례 분석·딜레마 토의·자료 해석·짧은 글쓰기(기준표 자기 평가)·역할극·캠페인. 학교·학급·인물·수치는 모두 지어낸 가상 자료다(가명).
 *   학생 자신의 가정·성적·친구 관계·진로 결정은 채점하지 않는다 — 교구 문항은 가상 인물·가상 학교로 하고, 자기 탐색은 걷지 않는 활동지 칸에 둔다.
 *   특정 학교·지역·단체·기업 이름을 쓰지 않는다. 선거·회의는 학생 자치 수준으로만 다루고 실제 정당·정치인은 언급하지 않는다.
 *   피해 경험은 묻지 않는다. 전화번호는 쓰지 않는다(체계도 concepts 에 없음).
 * 주제 18개 × 8모듈 = 144모듈(7·8·9학년 각 6주제: 적응 및 개척·기본생활습관·관계 형성 및 소통·공동체 자치·주제 탐구·프로젝트형 봉사).
 *
 * 사람 확인: 근거 파일에는 고시 항목 제목뿐이라, 아래 일반 수칙·절차 문장은 공식 안내로 한 번 더 확인한다.
 *   - auto.m.g7-adapt.intro.diff — '하루에 만나는 수업 선생님 수' 막대는 가상 시간표다. 중학교 한 시간 45분(근거 S2) 밖의 시간표 수치는 화면에 '가상'으로 밝혔다.
 *   - auto.m.g7-adapt.activity.help — 몸이 아플 때 보건실, 걱정은 상담실, 일정·준비물은 담임 선생님(교무실)이라는 안내는 일반 학교 안내다. 학교마다 상담실·보건실 이용 방법이 다르니 우리 학교 안내로 확인한다.
 *   - auto.m.g7-adapt.activity.dilemma·wrap.check — '감정이 클 때 먼저 멈추고 숨 고르기, 나-전달로 말하기, 되풀이되면 어른에게 도움 청하기'는 일반 상담 안내 문장이다(학교 상담교사·청소년상담복지 안내로 확인).
 *   - auto.m.g7-habit.activity.sort — 페트병 분리배출 차례(내용물 비우기→헹구기→라벨 떼기→찌그러뜨려 뚜껑 닫기→투명 페트병 칸)와 '영수증·기름이 밴 종이는 일반 쓰레기' 판단은 일반 분리배출 안내다. 환경부 「재활용품 분리배출 가이드라인」·지자체 안내로 확인한다(지역마다 다를 수 있음).
 *   - auto.m.g7-habit.intro.bin·wrap.campaign — 잔반 그래프와 잔반통 눈금 기록은 가상 자료다. 실제 급식실 점검은 영양(교)사와 시간·방법을 정한다.
 *   - auto.m.g7-habit.activity.four — '중요·급함 네 칸'은 일반 시간 관리 방법(아이젠하워 매트릭스로 알려진 방법)이다. 교육과정 원문 용어가 아니다.
 *   - auto.m.g7-rel.activity.change — 나-전달법의 세 부분(상황·느낌·바람)은 일반 의사소통 교육 용어다(학교 상담·인성교육 자료로 확인).
 *   - auto.m.g7-rel.activity.roles·practice — 모둠 토의 역할(사회자·기록자·발표자·시간 지킴이)과 할 일은 일반 협동 학습 안내다. 근거 파일에는 '토의⋅토론'이라는 활동 이름만 있다.
 *   - auto.m.g7-self.activity.order — 학급 회의 차례(개회→안건 상정→제안 설명→토의→표결→결과 발표→폐회)는 일반 학급회의 진행 안내다. 학교 학생회 규정·학급회의 운영 안내로 확인한다(학교마다 이름이 다를 수 있음).
 *   - auto.m.g7-self.activity.dept — 학급자치회 부서(학습·환경·생활부)와 할 일은 가상 학급의 예시다. 실제 부서 이름은 학교·학급이 정한다.
 *   - auto.m.g7-self.activity.minutes — 회의록 요소(날짜·안건·제안·토의 요지·표결 결과·소수 의견·실행 계획)는 일반 회의록 안내다.
 *   - auto.m.g7-topic.activity.method — 자료 수집 방법(관찰·설문·면담·문헌 조사)의 특징과 조사 약속(동의 구하기·개인정보 적지 않기·출처 적기)은 일반 탐구 방법 안내다. 근거 파일에는 '개인 연구·소집단 공동 연구·프로젝트'라는 활동 이름만 있다.
 *   - auto.m.g7-topic.activity.survey·intro.which — 수면 시간 설문 결과는 가상 자료다. 실제 청소년 수면 권장 시간 같은 수치는 쓰지 않았다.
 *   - auto.m.g7-serve.activity.steps — 프로젝트형 봉사 차례(조사→계획→역할 나누기→실행→돌아보기)는 일반 프로젝트 학습 안내다. 근거 파일에는 '개인·공동 프로젝트형 봉사활동'이라는 이름만 있다.
 *   - auto.m.g7-serve.wrap.do — 교내 봉사 안전 점검 항목(장갑 끼기·날카로운 것은 손으로 줍지 않기·약품 쓰지 않기·정해진 구역 안에서만)은 일반 안전 수칙이다. 학교 안전 담당·학교 봉사활동 운영 안내로 확인한다.
 *   - auto.m.g8-adapt.intro.signal·activity.scale — 스트레스 신호(목·어깨 뭉침, 가슴 두근거림, 배 아픔, 잠이 안 옴, 짜증)와 크기에 맞는 대처(작으면 스스로, 크거나 오래가면 도움 요청)는 일반 정서 지원 안내다. 학교 상담교사·청소년상담복지 안내로 확인한다.
 *   - auto.m.g8-adapt.wrap.breath — '4초 들이쉬고 4초 내쉬기를 4번'은 일반 긴장 풀기 호흡 안내다(체계도 계획 값). 어지러우면 멈추게 했다. 보건교사 안내로 확인한다.
 *   - auto.m.g8-adapt.activity.goal — '무엇을·얼마나·언제까지'로 목표를 구체화하는 방법은 일반 목표 설정 안내다(교육과정 원문 용어 아님).
 *   - auto.m.g8-habit.activity.effect — '잠이 부족하면 수업 중 졸음·짜증, 아침을 거르면 오전 집중이 흐려진다' 같은 생활 리듬 영향은 일반 건강 안내 문장이다. 권장 수면 시간 같은 수치는 쓰지 않았다(질병관리청·보건교사 안내로 확인).
 *   - auto.m.g8-habit.activity.meal — 식품 갈래(곡류·고기(고기·생선·달걀·콩)·채소·우유·유지)와 아침 식판 예시는 일반 영양 안내다. 교구의 다섯 식품군 칸을 따랐다(식품의약품안전처·영양교사 안내로 확인).
 *   - auto.m.g8-habit.activity.care — '기르던 생물을 함부로 자연에 놓아주지 않는다, 방학 동안 돌볼 사람·방법을 정한다'는 일반 생명 존중·동물 보호 안내다(학교 생태 교육·동물 보호 안내로 확인).
 *   - auto.m.g8-rel.intro.iceberg·activity.win — '입장(겉으로 하는 요구)·바람(속에 있는 필요)'을 나누어 함께 채우는 해결을 찾는 방법은 일반 갈등 해결 교육 안내다(학교 또래 조정·인성교육 자료로 확인).
 *   - auto.m.g8-rel.activity.mediate — 또래 조정 차례(규칙 정하기→차례로 이야기→바람 찾기→해결안 함께 만들기→약속하기)는 일반 또래 조정 안내다. 학교폭력이 의심되는 일은 또래 조정이 아니라 교사에게 알린다.
 *   - auto.m.g8-rel.intro.debate-clip·wrap.mini — 토론 차례(입론→반론→최종 발언)는 교육용 토론의 일반 형식이다(학교 토론 수업 자료로 확인).
 *   - auto.m.g8-self.intro.path·activity.order — 건의 절차(학급 회의→건의문→대의원회→학생회가 정리해 학교에 전달→학교 답변→학급에 결과 알림)는 가상 학교 학생회 규정 예시다. 학교마다 학생회 규정이 다르니 우리 학교 학생회 규정으로 확인한다.
 *   - auto.m.g8-self.activity.revise — 학교 규칙을 바꿀 때 학생이 개정을 제안하고 설문·토론회로 의견을 내며, 심의·결정은 학교운영위원회·학교장이 맡는다는 구분은 일반 안내다. 근거 파일에 없다(초·중등교육법 시행령의 학교규칙 제·개정 조항, 시·도교육청 학생 참여 안내로 확인).
 *   - auto.m.g8-topic.activity.sort·fix — 설문 문항의 문제 유형(답을 이끄는 유도 문항, 두 가지를 한꺼번에 묻는 이중 질문)과 고치는 방법은 일반 사회조사 방법 안내다(통계청 통계교육 자료 등으로 확인).
 *   - auto.m.g8-topic.activity.claim·overreach·wrap.report — '사실·해석·결론'을 나누고 표본(30명)이 말하는 범위를 넘지 않게 결론을 쓰는 방법은 일반 자료 해석 안내다. 설문 결과 수치는 모두 가상이다.
 *   - auto.m.g8-serve.wrap.do·activity.roles — 지역 연계 봉사 안전 수칙(보호자 동의, 교사 인솔, 정해진 구역·시간, 차도 가까이 가지 않기, 비상시 모이는 곳과 연락 차례 정하기)은 일반 안전 안내다. 학교 체험활동 안전 매뉴얼·교육청 봉사활동 운영 안내로 확인한다.
 *   - auto.m.g8-serve.activity.data — 마을 불편 설문·월별 민원 그래프는 가상 자료다. 실제 지역 자료를 쓸 때는 공공기관 공개 자료의 출처·날짜를 밝힌다.
 *   - auto.m.g9-adapt.intro.change — 고등학교에서 과목을 골라 듣고 학점을 이수한다는 2022 개정 고교학점제 내용은 근거 파일에 자세히 없다(고 창체 18학점만 있음). 교육부·시도교육청 고교학점제 안내로 확인한다. 화면 문장은 일반적인 서술로만 썼다.
 *   - auto.m.g9-adapt.activity.source — '학교 공식 누리집·입학 설명회·교육청 안내가 개인 후기보다 믿을 만하다'는 정보원 판단은 일반 정보 활용 안내다.
 *   - auto.m.g9-adapt.activity.reframe·help — 불안한 생각을 근거 있는 균형 잡힌 생각으로 바꾸기, 상황마다 담임·상담 교사·보호자에게 도움 청하기는 일반 상담 안내다(학교 상담교사 안내로 확인).
 *   - auto.m.g9-habit.activity.rules·draft — 공정한 디지털 공동체 규칙의 조건(모두에게 같게 적용, 지킬 수 있음, 개인정보·사생활 같은 권리 보호, 어겼을 때 절차를 미리 정함)은 일반 디지털 시민성 안내다(교육부·방송통신위원회 디지털 시민교육 자료로 확인).
 *   - auto.m.g9-habit.intro.energy·activity.ideas·activity.score — 학교 전기 사용 그래프와 실천안 점수는 가상 자료다. 탄소 배출량 같은 실제 수치는 쓰지 않았다. 실천안의 효과 크기는 환경부·한국환경공단 탄소중립 실천 안내로 확인한다.
 *   - auto.m.g9-rel.activity.spot·rewrite — 외모·출신 지역·성별 역할에 대한 편견 표현 예시와 고친 표현은 일반 인권·다양성 교육 안내 수준으로 썼다(비하어는 쓰지 않음). 국가인권위원회·교육부 인권교육 자료로 확인한다.
 *   - auto.m.g9-rel.activity.plan·letter·wrap.do — 사제동행 활동을 학생이 기획해 선생님께 제안하는 절차(목적·날짜·장소·참여 방법·안전을 담아 정중하게 제안)는 일반 안내다. 근거 파일에는 '사제동행'이라는 활동 이름만 있다. 학교 밖 활동은 학교 체험활동 규정을 따른다.
 *   - auto.m.g9-self.intro.principle·activity.steps·wrap.vote — 보통·평등·직접·비밀 선거 원칙과 학생회 선거 관리 절차(선거관리위원회 구성→선거 공고→후보 등록→선거 운동→투표→개표→당선 공고)는 일반 선거 교육 안내이며 가상 학교 학생회 규정 예시다. 중앙선거관리위원회 선거 교육 자료와 우리 학교 학생회 규정으로 확인한다.
 *   - auto.m.g9-self.activity.budget — 졸업 행사 물품 값과 예산은 가상이다. 실제 행사 예산은 학교 회계 절차를 따른다.
 *   - auto.m.g9-self.activity.plan·wrap.run — 행사 접근성(경사로·자리, 자막·큰 글씨 안내, 조용한 쉼터)과 행사 안전 점검은 일반 안내다(학교 행사 안전 매뉴얼·장애 인식 개선 자료로 확인).
 *   - auto.m.g9-topic.activity.funnel·write — 넓은 문제를 대상·장소·기간으로 좁혀 탐구 질문을 만드는 방법(질문 깔때기)은 일반 탐구 방법 안내다. 근거 파일에는 '프로젝트' 활동 이름만 있다.
 *   - auto.m.g9-topic.activity.order·qa·wrap.peer — 발표 구성(질문→방법→결과→결론→질의응답)과 질의응답 태도, 동료 평가 기준은 일반 발표 수업 안내다.
 *   - auto.m.g9-serve.activity.case·principle — 봉사 중 뜻밖의 문제를 안전·존중·기록·소통 원칙으로 판단하는 내용(비·더위 같은 날씨에는 멈추고 바꾸기, 도움 받는 사람이 거절하면 그 뜻을 존중하기, 다치면 바로 멈추고 인솔 교사에게 알리기)은 일반 봉사활동 안전·윤리 안내다. 교육청 봉사활동 운영 안내·학교 체험활동 안전 매뉴얼로 확인한다.
 *   - auto.m.g9-serve.intro.before — 계획 목표와 실제 결과 수치는 가상 자료다.
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `auto.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'auto', band: '중', topic: `auto.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드. mindmap·sortboard·kitchen·story·emotion·wordcards 공통
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 분류판(sortboard 글 카드 모드): mode 칸을 쓰지 않는다
  const BB = (prompt, slots, cards, opt) => { const x = SB(prompt, slots, cards, opt); delete x.toolOptions.mode; return x; };
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글 (wordcards 에는 쓰지 않는다 — 영어 판이 된다. wordcards 는 FB·SB·PB·OB)
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글]] — 칸 하나에 카드 한 장
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => ({ id: `f${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 기준표 글쓰기: o = 교구 옵션(topic·minChars·maxChars·minSentences·maxSentences·title·starter·placeholder), crit = 기준표, more = target 에 더할 칸(mustInclude 등)
  const RW = (prompt, o, crit, more) => ({ prompt, toolOptions: o, target: Object.assign({ selfCheck: crit }, more) });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(1단)·기본(2단)·도전(3단) 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // good = 도전 단계의 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok } 도전에만 더할 근거(도전은 근거 2개 이상)
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])] } },
    },
  }, extra);
  // 도입 시연용 갈림길: 깊이 2 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R) => ({ tool: 'dilemma', options: { title, scene: cut(tree, 2), reasons: R || [] }, sequence: [{ path: paths(good, 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ==== 7학년 · 달라진 중학교 생활과 사춘기 마음 (auto.m.g7-adapt) ====
  {
    const M = MK('g7-adapt', [7]);
    // 가상 시간표 — 하루에 만나는 수업 선생님 수
    const TEACH = [['초6 월', 2], ['중1 월', 6], ['초6 목', 3], ['중1 목', 5]];
    // 가상의 중학교 1층 칸 지도
    const FLOOR = { grid: [6, 4], title: '가상의 우리 중학교 1층', regions: [
      { name: '1학년 교실', cells: [[0, 0], [1, 0]] }, { name: '교무실', cells: [[2, 0], [3, 0]] }, { name: '보건실', cells: [[4, 0]] }, { name: '상담실', cells: [[5, 0]] },
      { name: '복도', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '도서관', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] },
      { name: '급식실', cells: [[2, 2], [3, 2], [2, 3], [3, 3]] }, { name: '행정실', cells: [[4, 2], [5, 2]] }, { name: '현관', cells: [[4, 3], [5, 3]] },
    ] };
    const FLOOR_EASY = { grid: [6, 4], title: '가상의 우리 중학교 1층', regions: [
      { name: '1학년 교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '교무실', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] },
      { name: '보건실', cells: [[4, 0], [5, 0], [4, 1], [5, 1]] }, { name: '상담실', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] },
    ] };

    // 감정이 커졌을 때 — 쉬는 시간 흉내
    const D1 = { text: '쉬는 시간, 지호가 아까 내가 발표하던 말투를 흉내 내며 웃는다. 얼굴이 확 달아오르고 화가 치민다.', ask: '나는 어떻게 할까?', motif: 'storm', choices: [
      { id: 'yell', text: '소리를 지르며 책상을 친다', result: '교실이 조용해지고 지호도 얼굴을 붉힌다.', impact: [{ who: '나', text: '화가 더 커진다', tone: -1 }, { who: '반 친구들', text: '놀라서 불편하다', tone: -1 }], why: '감정이 아주 클 때 바로 터뜨리면 다툼이 더 커져요.', end: '화를 터뜨려 다툼이 커졌어요.',
        next: { text: '지호가 "장난인데 왜 그렇게까지 해?"라며 맞선다.', choices: [
          { id: 'shove', text: '지호의 어깨를 민다', result: '몸싸움이 될 뻔해 선생님이 오신다.', impact: [{ who: '지호', text: '다칠 뻔한다', tone: -1 }] },
          { id: 'leave', text: '"잠깐 나갔다 올게" 하고 자리를 뜬다', result: '복도에서 숨을 고르자 조금 진정된다.', impact: [{ who: '나', text: '마음이 가라앉는다', tone: 1 }] }] } },
      { id: 'pause', text: '숨을 크게 쉬고 잠깐 자리를 벗어난다', result: '복도 창가에서 숨을 고르자 화가 조금 가라앉는다.', impact: [{ who: '나', text: '마음이 가라앉는다', tone: 1 }], end: '먼저 멈춰서 마음을 가라앉혔어요.',
        next: { text: '조금 지나도 속상한 마음이 남아 있다. 지호는 아무 일 없다는 듯 웃고 있다.', choices: [
          { id: 'hold', text: '아무렇지 않은 척 참고 넘어간다', result: '며칠 동안 지호를 보면 기분이 가라앉는다.', impact: [{ who: '나', text: '속상함이 쌓인다', tone: -1 }], why: '참기만 하면 마음이 쌓여요. 말로 알리는 길도 있어요.' },
          { id: 'tell', text: '"흉내 내서 창피하고 속상했어"라고 말한다', result: '지호가 놀라며 그런 줄 몰랐다고 사과한다.', impact: [{ who: '지호', text: '내 마음을 알게 된다', tone: 1 }], end: '내 마음을 말로 알렸어요.',
            next: { text: '그런데 다음 날 지호가 다른 친구 앞에서 또 흉내를 낸다.', choices: [
              { id: 'ask', text: '담임 선생님이나 상담 선생님께 도움을 청한다', result: '선생님이 두 사람과 따로 이야기를 나눈다.', impact: [{ who: '나', text: '혼자 견디지 않는다', tone: 1 }] },
              { id: 'back', text: '나도 지호 말투를 흉내 내 놀린다', result: '서로 놀리는 일이 반 전체로 번진다.', impact: [{ who: '반 친구들', text: '편을 나눈다', tone: -1 }], why: '똑같이 갚으면 놀림이 끝나지 않고 번져요.' }] } }] } },
      { id: 'chat', text: '반 단체 대화방에 지호 험담을 올린다', result: '험담이 퍼져 지호도 화가 나고 일이 더 커진다.', impact: [{ who: '지호', text: '여럿 앞에서 상처받는다', tone: -1 }], why: '화난 채로 올린 글은 지울 수 없게 퍼져요.', ending: '대화방 글 때문에 일이 더 커졌어요.' }] };
    const R1 = [{ id: 'r1', text: '감정이 클 때 먼저 멈추면 더 큰 다툼을 막는다' }, { id: 'r2', text: '내 마음을 말로 알리면 상대가 바꿀 기회가 생긴다' },
      { id: 'r3', text: '화가 나도 참기만 하는 것이 어른스럽다', why: '참기만 하면 마음이 쌓여요. 알맞게 말하는 것이 성숙한 대처예요.' }, { id: 'r4', text: '똑같이 갚아 줘야 다시 안 한다', why: '갚아 주면 놀림이 번져요.' }];
    // 모둠 수행평가에서 맡은 몫을 못 했을 때
    const D2 = { text: '모둠 수행평가 발표 전날, 서윤은 맡은 자료 조사를 반밖에 못 했다. 모둠 대화방에 "아직이야?"라는 말이 올라온다. 가슴이 두근거리고 걱정이 커진다.', ask: '서윤은 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'hide', text: '대화방을 보지 않고 휴대전화를 꺼 둔다', result: '모둠원들이 서윤이 맡은 부분을 모른 채 밤을 보낸다.', impact: [{ who: '모둠원', text: '발표 준비가 막힌다', tone: -1 }], why: '피하면 걱정도 문제도 그대로 남아요.', end: '피해서 문제가 그대로 남았어요.',
        next: { text: '다음 날 아침, 모둠원들이 화가 나 있다.', choices: [
          { id: 'excuse', text: '"휴대전화가 고장 났어"라고 둘러댄다', result: '믿음이 깨진다.', impact: [{ who: '모둠원', text: '서윤을 믿기 어렵다', tone: -1 }] },
          { id: 'sorry', text: '솔직하게 사과하고 남은 부분을 함께 나눈다', result: '모둠원들이 쉬는 시간에 함께 마무리한다.', impact: [{ who: '모둠원', text: '발표를 해낸다', tone: 1 }] }] } },
      { id: 'share', text: '"반밖에 못 했어, 미안해"라고 솔직히 말한다', result: '모둠원 하나가 "남은 부분은 같이 나누자"고 답한다.', impact: [{ who: '모둠원', text: '상황을 알고 준비한다', tone: 1 }], end: '솔직하게 알려서 함께 대비했어요.',
        next: { text: '나눠 맡았지만 밤 10시가 넘어도 끝나지 않는다. 걱정 때문에 잠이 오지 않는다.', choices: [
          { id: 'allnight', text: '밤을 새워서라도 혼자 다 끝낸다', result: '다음 날 너무 피곤해 발표에서 말이 꼬인다.', impact: [{ who: '나', text: '몸과 마음이 지친다', tone: -1 }], why: '밤을 새우면 다음 날 더 힘들어요. 할 수 있는 만큼 하고 나누어요.' },
          { id: 'enough', text: '할 수 있는 만큼 정리하고 자고, 내일 일찍 이어서 한다', result: '아침에 머리가 맑아 빠르게 마무리한다.', impact: [{ who: '나', text: '덜 지친다', tone: 1 }], end: '쉬고 나서 이어 했어요.',
            next: { text: '발표가 끝났는데도 "또 이러면 어떡하지"라는 걱정이 며칠째 이어진다.', choices: [
              { id: 'talkup', text: '담임 선생님이나 상담 선생님께 걱정을 이야기한다', result: '할 일을 나누어 적는 방법을 함께 찾는다.', impact: [{ who: '나', text: '걱정이 줄어든다', tone: 1 }] },
              { id: 'alone', text: '나만 이런 것 같아 아무에게도 말하지 않는다', result: '걱정이 계속 커진다.', impact: [{ who: '나', text: '혼자 지친다', tone: -1 }], why: '이런 걱정은 많은 친구가 겪어요. 이야기하면 방법이 보여요.' }] } }] } },
      { id: 'blame', text: '"자료가 너무 어려웠어"라며 주제를 고른 친구 탓을 한다', result: '모둠 분위기가 나빠지고 서로 말을 안 한다.', impact: [{ who: '모둠원', text: '서운하다', tone: -1 }], why: '남 탓을 하면 함께 해결할 길이 막혀요.', ending: '남 탓을 해서 모둠이 멀어졌어요.' }] };
    const R2 = [{ id: 'r1', text: '걱정을 숨기지 않고 알리면 함께 대비할 수 있다' }, { id: 'r2', text: '몸이 지치면 걱정과 실수가 함께 커진다' },
      { id: 'r3', text: '내 실수는 혼자 해결해야 한다', why: '모둠 일은 함께 나누어 해결할 수 있어요.' }, { id: 'r4', text: '걱정은 모르는 척하면 사라진다', why: '피한 걱정은 다음 날 더 커져서 돌아와요.' }];
    // 첫 주 교과 교실을 못 찾아 늦었을 때
    const D3 = { text: '입학 첫 주, 다온은 과학실을 못 찾아 수업에 5분 늦었다. 모두가 쳐다봐 얼굴이 화끈거린다.', ask: '다온은 어떻게 할까?', motif: 'wind', choices: [
      { id: 'quiet', text: '아무 말 없이 고개를 숙이고 빈자리에 앉는다', result: '선생님이 늦은 까닭을 모른 채 수업을 이어 간다.', impact: [{ who: '다온', text: '창피함이 오래간다', tone: -1 }], why: '짧게 까닭을 말하면 오해도 창피함도 줄어요.', end: '말없이 앉아 마음이 계속 불편했어요.',
        next: { text: '쉬는 시간, 다음 수업도 교과 교실이다. 어디인지 또 모르겠다.', choices: [
          { id: 'guess', text: '아무 데나 가 보며 찾는다', result: '이번에도 늦을 뻔한다.', impact: [{ who: '다온', text: '불안이 커진다', tone: -1 }] },
          { id: 'askf', text: '같은 반 친구에게 같이 가자고 묻는다', result: '친구와 함께 제때 도착한다.', impact: [{ who: '다온', text: '안심이 된다', tone: 1 }] }] } },
      { id: 'say', text: '"교실을 못 찾아 늦었습니다, 죄송합니다"라고 말한다', result: '선생님이 고개를 끄덕이고 다음부터 찾는 방법을 알려 준다.', impact: [{ who: '다온', text: '마음이 놓인다', tone: 1 }], end: '까닭을 짧게 말해 마음이 놓였어요.',
        next: { text: '쉬는 시간에도 창피한 마음이 남아 있다. "나만 이런 실수를 하나 봐"라는 생각이 든다.', choices: [
          { id: 'self', text: '"나는 원래 덜렁대"라고 스스로를 탓한다', result: '다음 수업 내내 기운이 없다.', impact: [{ who: '다온', text: '자신감이 줄어든다', tone: -1 }], why: '첫 주 실수는 누구나 해요. 탓보다 방법을 찾아요.' },
          { id: 'plan', text: '시간표 옆에 교과 교실 위치를 적어 둔다', result: '다음 교과 교실을 헤매지 않고 찾는다.', impact: [{ who: '다온', text: '준비가 된다', tone: 1 }], end: '실수에서 방법을 찾았어요.',
            next: { text: '그래도 이번 주 내내 학교 가는 아침마다 배가 아프고 긴장된다.', choices: [
              { id: 'nurse', text: '보건 선생님이나 담임 선생님께 몸과 마음 상태를 말한다', result: '쉬는 방법과 적응을 돕는 방법을 함께 찾는다.', impact: [{ who: '다온', text: '도움을 받는다', tone: 1 }] },
              { id: 'endure', text: '곧 나아지겠지 하며 아무에게도 말하지 않는다', result: '긴장이 이어져 아침이 더 힘들어진다.', impact: [{ who: '다온', text: '혼자 견딘다', tone: -1 }], why: '몸으로 오는 긴장 신호도 도움을 청할 까닭이에요.' }] } }] } },
      { id: 'skip', text: '창피해서 다음 시간에는 아예 교실에 가지 않는다', result: '결석 처리가 되어 걱정이 더 커진다.', impact: [{ who: '다온', text: '문제가 더 커진다', tone: -1 }], why: '피하면 창피함보다 큰 문제가 생겨요.', ending: '피해서 문제가 더 커졌어요.' }] };
    const R3 = [{ id: 'r1', text: '첫 주 실수는 방법을 찾으면 줄어든다' }, { id: 'r2', text: '몸에 오는 긴장도 도움을 청할 신호다' },
      { id: 'r3', text: '창피한 일은 피하는 것이 낫다', why: '피하면 더 큰 문제가 생겨요.' }, { id: 'r4', text: '실수하는 사람은 원래 그런 사람이다', why: '실수는 성격이 아니라 아직 익숙하지 않아서예요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.diff', {
        title: '초등과 중학교 하루 견주기', method: '초등·중학교 하루 시간표 견주기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 월요일 막대 2개(초6 월·중1 월)만 짚어 견주고 더 큰 쪽을 고르게 한다.', base: '막대 4개(월·목 두 요일)를 읽고 중학교에서 달라진 점을 하나 고른다.', challenge: '막대 4개를 읽은 뒤 달라진 점 두 개(선생님 수·교실 이동)와 그 까닭을 말한다.' },
        intro: {
          teacher: '"초등학교 6학년 월요일에는 수업 선생님을 몇 분 만났을까요? 중학교 1학년 월요일에는요?" 가상 시간표로 만든 막대그래프를 띄우고 시연 단추로 가장 긴 막대가 골라지는 모습을 보인다. "중학교는 무조건 어렵다"는 말이 나오면 "달라지는 것과 어려운 것은 같은 말일까요? 달라진 점을 알면 미리 준비할 수 있어요"라고 되묻는다. 그래프는 수업용 가상 시간표라고 처음에 밝힌다.',
          student: '가상 시간표 그래프에서 초등학교와 중학교의 하루를 견주어 보고, 중학교에서 달라진 점을 하나 찾아 짝에게 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '하루에 만나는 수업 선생님 수(가상 시간표)', unit: '명', xLabel: '학년·요일', yLabel: '선생님 수', data: TEACH, question: '수업 선생님을 가장 많이 만나는 날은?', choices: TEACH.map((d) => d[0]) }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut split scene: a cozy elementary classroom with one teacher on the left, and a middle school hallway with several subject teachers and room signs on the right', banner: '중학교에서 무엇이 달라질까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '시간표 수치는 가상이다. 학생에게 다니던 초등학교 이름을 묻지 않는다.',
      }),
      M('intro.weather', {
        title: '가상 친구 마음 크기 눈금', method: '요즘 내 마음 크기 눈금 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 사례 1개(서윤)를 읽고 함께 눈금을 고른다.', base: '교사가 사례 2개(서윤·하준)를 읽고 학생이 마음 크기를 눈금으로 고른다.', challenge: '사례 3개(서윤·하준·다온)의 마음 크기를 고르고, 고른 크기의 까닭을 한 가지씩 말한다.' },
        intro: {
          teacher: '"같은 일이 생겨도 마음의 크기는 사람마다, 날마다 달라요. 서윤이의 걱정은 몇 칸쯤일까요?" 시연 단추로 눈금이 3칸에 놓이는 모습을 보인 뒤, 하준(새 친구가 아직 없다)·다온(교과 교실을 못 찾았다) 사례를 이어서 읽어 준다. "이렇게 마음이 출렁이는 건 이상한 거예요"라는 말이 나오면 "사춘기에는 마음의 크기가 자주 바뀌는 것이 흔한 일이에요. 크기를 알면 알맞게 다룰 수 있어요"라고 짚는다. 학생 자신의 마음을 발표시키지 않고 가상 친구로만 이야기한다.',
          student: '가상 친구의 사례를 듣고 그 친구의 마음 크기가 눈금 몇 칸쯤일지 골라요. 왜 그 크기인지 짝과 이야기해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 친구 서윤: 다음 주에 수행평가가 세 과목이나 겹친 것을 알았다.', feeling: '걱정', steps: 5, ask: '서윤의 걱정은 얼마나 클까요?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper-cut row of three teenagers each with a small paper weather sign above their head: a cloud, a light rain, a gust of wind, beside a five-step paper gauge', banner: '마음의 크기는 얼마나 될까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사례는 모두 가상이다. 학생의 실제 마음 크기를 묻거나 기록하지 않는다. 걱정을 털어놓는 학생은 수업 뒤 따로 이야기한다.',
      }),

      // ---- 활동 ----
      M('activity.cope', {
        title: '달라진 점과 대처 방법 잇기', method: '변화와 대처 방법 잇기', tool: 'wordcards', minutes: 16,
        levels: { easy: '변화 3개에 대처 카드 한 장씩을 넣는다(넣으면 바로 맞는지 알려 준다).', base: '변화 4개에 대처 카드를 한 장씩 넣고, 혼자 할 대처와 도움을 청할 대처를 나눈다.', challenge: '첫 문항에서 변화 4개마다 대처 카드를 두 장씩 나누어 넣는다(함정 카드가 섞인다).' },
        activity: {
          title: '달라진 점과 대처 방법 잇기', tool: 'wordcards',
          teacher: '"교과 교실로 옮겨 다니게 되면 무엇이 가장 먼저 필요할까요?" 변화 카드마다 알맞은 대처 카드를 넣은 뒤, 왜 그 대처가 맞는지 한 사람씩 말하게 한다. "그냥 참고 익숙해지면 된다"는 학생에게 "참는 것과 준비하는 것 가운데 어느 쪽이 첫 주를 덜 힘들게 할까요?"라고 되묻는다. 모르는 것은 묻는 것도 대처 방법이라는 점을 짚는다.',
          task: '중학교에서 달라지는 점 카드마다 알맞은 대처 방법 카드를 넣고, 혼자 할 대처와 도움을 청할 대처를 나누어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('달라지는 점마다 알맞은 대처 카드를 넣으세요.', [['교과 교실로 옮겨 다닌다 → ___', '시간표 옆에 교실 위치 적기'], ['과목마다 선생님이 다르다 → ___', '과목별로 안내를 따로 적기'], ['수업 중에 수행평가가 있다 → ___', '평가 날짜를 달력에 표시하기'], ['한 교시가 45분으로 길어졌다 → ___', '쉬는 시간에 물 마시고 몸 풀기']], ['혼자 참고 넘어가기', '친구 것을 매번 빌려 쓰기'], { trayLabel: '대처 카드' }),
              FB('달라지는 점 세 가지에 알맞은 대처 카드를 넣으세요.', [['교과 교실로 옮겨 다닌다 → ___', '시간표 옆에 교실 위치 적기'], ['과목마다 선생님이 다르다 → ___', '과목별로 안내를 따로 적기'], ['수업 중에 수행평가가 있다 → ___', '평가 날짜를 달력에 표시하기']], []),
              SB('달라지는 점마다 대처 카드를 두 장씩 넣으세요.', ['교과 교실 이동', '과목별 선생님', '수행평가', '45분 수업'], [
                { id: 'a1', text: '시간표 옆에 교실 위치 적기', to: '교과 교실 이동' }, { id: 'a2', text: '쉬는 시간 시작에 준비물 챙기기', to: '교과 교실 이동' },
                { id: 'b1', text: '과목별로 안내를 따로 적기', to: '과목별 선생님' }, { id: 'b2', text: '모르는 것은 과목 선생님께 묻기', to: '과목별 선생님' },
                { id: 'c1', text: '평가 날짜를 달력에 표시하기', to: '수행평가' }, { id: 'c2', text: '평가 기준 안내를 미리 읽기', to: '수행평가' },
                { id: 'd1', text: '쉬는 시간에 물 마시고 몸 풀기', to: '45분 수업' }, { id: 'd2', text: '졸릴 때 바른 자세로 고쳐 앉기', to: '45분 수업' },
                { id: 't1', text: '혼자 참고 넘어가기' }, { id: 't2', text: '친구 것을 매번 빌려 쓰기' }])),
            IT(PB('새 학교생활에 도움이 되는 대처만 골라 담으세요.', '도움이 되는 대처', [
              { id: 'p1', text: '헷갈리면 같은 반 친구에게 묻기', ok: true }, { id: 'p2', text: '전날 밤에 다음 날 시간표 확인하기', ok: true },
              { id: 'p3', text: '모르는 척 넘어가기' }, { id: 'p4', text: '평가 날짜는 누가 알려 주길 기다리기' },
              { id: 'p5', text: '쉬는 시간마다 다음 교실 미리 가기', ok: true }, { id: 'p6', text: '실수하면 다음 시간을 빠지기' }]),
              PB('새 학교생활에 도움이 되는 대처만 골라 담으세요(4장).', '도움이 되는 대처', [
                { id: 'p1', text: '헷갈리면 같은 반 친구에게 묻기', ok: true }, { id: 'p2', text: '전날 밤에 다음 날 시간표 확인하기', ok: true },
                { id: 'p3', text: '모르는 척 넘어가기' }, { id: 'p6', text: '실수하면 다음 시간을 빠지기' }])),
            IT(SB('대처 카드를 혼자 할 대처와 도움을 청할 대처로 나누세요.', ['혼자 할 대처', '도움을 청할 대처'], [
              { id: 'h1', text: '준비물을 전날 가방에 넣기', to: '혼자 할 대처' }, { id: 'h2', text: '평가 날짜를 달력에 표시하기', to: '혼자 할 대처' },
              { id: 'h3', text: '평가 기준이 헷갈리면 과목 선생님께 묻기', to: '도움을 청할 대처' }, { id: 'h4', text: '걱정이 오래가면 상담 선생님과 이야기하기', to: '도움을 청할 대처' },
              { id: 'h5', text: '쉬는 시간에 물 마시고 몸 풀기', to: '혼자 할 대처' }, { id: 'h6', text: '교실을 못 찾으면 친구에게 같이 가자고 하기', to: '도움을 청할 대처' }]),
              SB('대처 카드 네 장을 두 칸으로 나누세요.', ['혼자 할 대처', '도움을 청할 대처'], [
                { id: 'h1', text: '준비물을 전날 가방에 넣기', to: '혼자 할 대처' }, { id: 'h2', text: '평가 날짜를 달력에 표시하기', to: '혼자 할 대처' },
                { id: 'h3', text: '평가 기준이 헷갈리면 과목 선생님께 묻기', to: '도움을 청할 대처' }, { id: 'h4', text: '걱정이 오래가면 상담 선생님과 이야기하기', to: '도움을 청할 대처' }]),
              null, { conclude: '중학교 생활은 혼자 알아서 버티는 것이 아니에요. 스스로 준비할 것은 준비하고, 모르는 것은 묻는 것도 대처예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '달라진 점 두 가지와 내가 해 볼 대처를 써요.', columns: ['달라진 점', '내가 해 볼 대처'], cells: [['', ''], ['', '']], answer: '(예) 교과 교실 이동 — 시간표 옆에 교실 위치 적기, 수행평가 — 평가 날짜 달력에 표시' }],
          easy: [{ type: 'choice', prompt: '수행평가 날짜를 놓치지 않는 방법에 ○ 해요.', options: ['달력에 표시하기', '누가 알려 주길 기다리기'], answer: '달력에 표시하기' }] },
      }),
      M('activity.week', {
        title: '첫 주 아침·이동 시각 맞추기', method: '첫 주 할 일 시간 계획 세우기', tool: 'clock', minutes: 16,
        levels: { easy: '정각으로 답이 나오는 상황만 나오고, 긴바늘은 12에 고정된다(짧은바늘만 돌린다).', base: '긴바늘이 10분 단위로 움직이고, 이동·준비 시간을 거꾸로 빼서 출발 시각을 나타낸다.', challenge: '긴바늘이 5분 단위로 움직이고, 두 가지 준비(이동과 준비물·옷 갈아입기)를 함께 빼서 시각을 나타낸다.' },
        activity: {
          title: '첫 주 아침·이동 시각 맞추기', tool: 'clock',
          teacher: '"1교시가 9시에 과학실에서 시작한다면, 반 교실에서는 몇 시에 일어서야 할까요?" 학생마다 시계를 맞춘 뒤 시작 시각에서 걸리는 시간을 거꾸로 빼는 방법을 짝에게 설명하게 한다. "종 치면 뛰어가면 된다"는 학생에게 "복도가 붐비는 쉬는 시간에 뛰면 어떻게 될까요?"라고 되묻는다. 상황은 모두 가상 학생 하준의 시간표이며 학생의 실제 일과를 묻지 않는다.',
          task: '가상 학생 하준의 첫 주 일정에서 시작 시각과 걸리는 시간을 보고, 늦어도 언제 움직여야 하는지 시계로 나타내요.',
          levels: { easy: { hourOnly: true }, base: { minuteStep: 10 }, challenge: { minuteStep: 5, showMinuteMarks: false } },
          items: [
            IT({ prompt: '하준의 1교시는 9시에 과학실에서 시작해요. 반 교실에서 과학실까지 10분 걸린다면 늦어도 몇 시에 출발해야 할까요?', toolOptions: { title: '교과 교실로 출발' }, target: { h: 8, m: 50 } },
              { prompt: '하준은 수업이 시작하는 9시보다 1시간 일찍 집을 나서기로 했어요. 집을 나서는 시각을 나타내세요.', target: { h: 8, m: 0 } },
              { prompt: '1교시 9시 과학실. 사물함에서 준비물 꺼내기 5분, 과학실까지 걷기 10분이에요. 늦어도 몇 시에 반 교실에서 일어서야 할까요?', target: { h: 8, m: 45 } }),
            IT({ prompt: '5교시 체육이 1시 30분 체육관에서 시작해요. 옷 갈아입고 이동하는 데 20분 걸린다면 늦어도 몇 시에 출발해야 할까요?', toolOptions: { title: '체육관으로 출발' }, target: { h: 1, m: 10 } },
              { prompt: '하준은 학교가 끝난 4시부터 1시간 동안 숙제를 하기로 했어요. 숙제를 마치는 시각을 나타내세요.', target: { h: 5, m: 0 } },
              { prompt: '5교시 체육 1시 30분. 옷 갈아입기 15분, 체육관까지 걷기 5분이에요. 늦어도 몇 시에 반 교실을 나서야 할까요?', target: { h: 1, m: 10 } }),
            IT({ prompt: '하준은 10시 30분에 잠들기로 했어요. 잠들기 30분 전에 다음 날 가방을 챙긴다면 몇 시에 챙겨야 할까요?', toolOptions: { title: '전날 밤 준비' }, target: { h: 10, m: 0 } },
              { prompt: '하준은 11시에 잠들기로 했어요. 잠들기 1시간 전에 가방을 챙긴다면 몇 시에 챙길까요?', target: { h: 10, m: 0 } },
              { prompt: '하준은 10시 30분에 잠들어요. 그 전에 씻기 20분, 가방 챙기기 15분이 걸린다면 늦어도 몇 시에 시작해야 할까요?', target: { h: 9, m: 55 } },
              { conclude: '시작 시각에서 걸리는 시간을 거꾸로 빼면 언제 움직일지 알 수 있어요. 미리 정해 두면 첫 주가 덜 바빠요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '하준의 첫 주 일정에서 출발 시각을 써요.', columns: ['상황', '출발 시각'], cells: [['1교시 9시 과학실(이동 10분)', ''], ['5교시 1시 30분 체육관(준비 20분)', '']], answer: '8시 50분, 1시 10분' }],
          easy: [{ type: 'blank', prompt: '빈칸에 시각을 써요.', text: '수업이 9시에 시작하고 1시간 일찍 집을 나서면 ___시에 나서요.', answer: '8' }] },
      }),
      M('activity.dilemma', {
        title: '감정이 커졌을 때 갈림길', method: '감정이 커졌을 때 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(되풀이되는 장면)까지 가고, 바른 근거 카드 2장을 모두 고른다(함정 근거 섞임).' },
        activity: {
          title: '감정이 커졌을 때 갈림길', tool: 'dilemma',
          teacher: '"화가 치밀 때 바로 하는 행동과 숨을 한 번 고른 뒤 하는 행동은 결과가 어떻게 다를까요?" 한 길을 끝까지 가 본 뒤 되돌아가 다른 길의 결과와 견주게 한다. "참는 게 제일 어른스럽다"는 학생에게 "참기만 한 뒤 며칠이 지나면 그 마음은 어디로 갈까요?"라고 되묻는다. 감정은 이상한 것이 아니라 크기에 맞게 다루는 것이며, 되풀이되면 어른에게 도움을 청하는 것도 해결이라는 점을 짚는다.',
          task: '감정이 커진 가상 장면에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 내 말투를 흉내 내요. 한 번 골라 결과를 보세요.', base: '친구가 내 말투를 흉내 내요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 내 말투를 흉내 내요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '쉬는 시간 흉내', D1, [['pause', 'tell', 'ask']], R1, ['r1', 'r2']),
            DIL({ easy: '모둠 과제를 반밖에 못 했어요. 한 번 골라 결과를 보세요.', base: '모둠 과제를 반밖에 못 했어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '모둠 과제를 반밖에 못 했어요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '발표 전날 밤', D2, [['share', 'enough', 'talkup']], R2, ['r1', 'r2']),
            DIL({ easy: '교과 교실을 못 찾아 늦었어요. 한 번 골라 결과를 보세요.', base: '교과 교실을 못 찾아 늦었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '교과 교실을 못 찾아 늦었어요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '첫 주 지각', D3, [['say', 'plan', 'nurse']], R3, ['r1', 'r2'], null, { conclude: '감정이 클 때는 먼저 멈추고, 마음을 말로 알리고, 되풀이되면 어른에게 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '화가 크게 났을 때 가장 먼저 하면 좋은 행동은?', options: ['바로 소리를 지른다', '숨을 고르고 잠깐 자리를 벗어난다', '대화방에 글을 올린다'], answer: '숨을 고르고 잠깐 자리를 벗어난다' }] },
      }),
      M('activity.help', {
        title: '도움 받을 곳 지도에 핀 꽂기', method: '도움 받을 곳 지도 표시', tool: 'map', minutes: 16,
        levels: { easy: '곳이 4군데뿐인 크게 나눈 지도에서 핀을 꽂는다.', base: '곳이 9군데인 1층 지도에서 상황에 맞는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 언제 찾아가면 좋을지 보기에서 고른다.' },
        activity: {
          title: '도움 받을 곳 지도에 핀 꽂기', tool: 'map',
          teacher: '"머리가 아플 때, 걱정이 많을 때, 안내를 놓쳤을 때 우리 학교에서 어디로 가면 될까요?" 상황마다 핀을 꽂은 뒤 그곳에 계신 분이 누구인지 함께 말한다. "상담실은 큰 문제가 있는 사람만 가는 곳"이라는 학생에게 "작은 걱정일 때 가면 더 빨리 가벼워지지 않을까요?"라고 되묻는다. 지도는 가상 학교이므로, 끝나기 전에 우리 학교의 실제 상담실·보건실 위치를 함께 짚어 준다.',
          task: '가상의 우리 중학교 1층 지도에서 상황마다 도움 받을 곳에 핀을 꽂아요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '머리가 아프고 열이 나는 것 같아요. 어디로 가야 할까요? 핀을 꽂으세요.', toolOptions: FLOOR, target: { region: '보건실' } },
              { prompt: '머리가 아프고 열이 나는 것 같아요. 어디로 갈까요?', toolOptions: FLOOR_EASY },
              { prompt: '머리가 아프고 열이 나요. 핀을 꽂고, 언제 가면 좋을지 고르세요.', toolOptions: Object.assign({}, FLOOR, { ask: { q: '보건실은 언제 가면 좋을까요?', choices: ['꾹 참다가 쓰러질 것 같을 때', '몸이 평소와 다르다고 느낄 때', '수업이 지루할 때'] } }), target: { region: '보건실', pick: 1 } }),
            IT({ prompt: '요즘 걱정이 많아 누군가에게 털어놓고 싶어요. 어디로 갈까요? 핀을 꽂으세요.', toolOptions: FLOOR, target: { region: '상담실' } },
              { prompt: '걱정을 털어놓고 싶어요. 어디로 갈까요?', toolOptions: FLOOR_EASY },
              { prompt: '걱정을 털어놓고 싶어요. 핀을 꽂고, 언제 가면 좋을지 고르세요.', toolOptions: Object.assign({}, FLOOR, { ask: { q: '상담실은 언제 찾아갈 수 있을까요?', choices: ['큰 문제가 생겼을 때만', '작은 걱정이라도 이야기하고 싶을 때', '선생님이 부를 때만'] } }), target: { region: '상담실', pick: 1 } }),
            IT({ prompt: '수행평가 날짜와 준비물 안내를 놓쳤어요. 담임 선생님을 찾아 어디로 갈까요? 핀을 꽂으세요.', toolOptions: FLOOR, target: { region: '교무실' } },
              { prompt: '안내를 놓쳐 담임 선생님을 찾아요. 어디로 갈까요?', toolOptions: FLOOR_EASY },
              { prompt: '안내를 놓쳐 담임 선생님을 찾아요. 핀을 꽂고, 언제 가면 좋을지 고르세요.', toolOptions: Object.assign({}, FLOOR, { ask: { q: '담임 선생님께는 언제 여쭈면 좋을까요?', choices: ['평가 날이 지난 뒤', '놓친 것을 안 날 쉬는 시간에', '방학이 시작되면'] } }), target: { region: '교무실', pick: 1 } },
              { conclude: '몸은 보건실, 마음은 상담실, 일정과 안내는 담임 선생님께 — 작을 때 찾아가면 더 쉽게 풀려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 찾아갈 곳을 써요.', columns: ['상황', '찾아갈 곳'], cells: [['열이 나요', ''], ['걱정이 오래가요', ''], ['안내를 놓쳤어요', '']], answer: '보건실, 상담실, 담임 선생님(교무실)' }] },
        notes: '지도는 가상 학교다. 우리 학교 상담실·보건실 위치와 이용 방법을 수업 뒤 안내한다.',
      }),

      // ---- 정리 ----
      M('wrap.letter', {
        title: '나에게 쓰는 적응 다짐', method: '나에게 쓰는 적응 다짐 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("중학교에서 ___이 달라졌다. 그래서 나는 ___ 하겠다.")을 채워 쓰고 기준 2개를 점검한다.', base: '달라진 점 하나와 대처 하나를 넣어 세 문장으로 쓰고 기준 3개를 점검한다.', challenge: '도움 받을 곳까지 넣어 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'열심히 하겠다\'와 \'평가 날짜를 달력에 적겠다\' 가운데 다음 주에 정말 할 수 있는 다짐은 어느 쪽일까요?" 두 문장을 견주어 읽은 뒤 오늘 찾은 달라진 점 하나와 대처 하나를 넣어 다짐을 쓰게 한다. "다짐은 크게 써야 멋있다"는 학생에게 작고 구체적인 다짐이 더 오래 간다고 말해 준다. 다짐 글은 발표시키지 않고, 이름이나 반 번호는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '중학교에서 달라진 점 하나와 그에 맞는 대처 하나를 넣어, 나에게 쓰는 다짐을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '나에게 쓰는 다짐', placeholder: '예: 중학교에서는 교실을 옮겨 다닌다…' },
              prompt: '나에게 쓰는 적응 다짐을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['달라진 점을 하나 썼다', '그 변화에 맞는 대처를 썼다', '언제부터 할지 썼다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 다짐을 쓰고 기준표에 표시해요.', toolOptions: { starter: '중학교에서 ___이(가) 달라졌다. 그래서 나는 ___ 하겠다.', minSentences: 2 }, target: { selfCheck: ['달라진 점을 하나 썼다', '그 변화에 맞는 대처를 썼다'] } },
            { prompt: '도움 받을 곳까지 넣어 다짐을 쓰고 기준표에 표시해요.', target: { selfCheck: ['달라진 점을 하나 썼다', '그 변화에 맞는 대처를 썼다', '언제부터 할지 썼다', '어려울 때 찾아갈 사람이나 곳을 썼다'] } }),
            { type: 'choice', prompt: '다음 주에 실제로 해 볼 수 있는 다짐으로 가장 알맞은 것은?', options: ['중학교 생활을 열심히 하겠다', '월요일부터 평가 날짜를 달력에 적겠다', '절대 실수하지 않겠다'], answer: 1, difficulty: 0.2, explain: '언제 무엇을 할지 드러나야 실천할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '나에게 쓰는 적응 다짐',
          items: [
            { type: 'short', prompt: '달라진 점 하나와 대처 하나를 넣어 나에게 쓰는 다짐을 세 문장으로 써요. (이 칸은 걷지 않아요.)' },
            { type: 'check', prompt: '내 다짐을 기준표로 점검해요.', options: ['달라진 점이 들어 있다', '그 변화에 맞는 대처가 들어 있다', '언제부터 할지 들어 있다'] },
          ],
          easy: { note: '문장 틀을 채워도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 다짐을 써요.', text: '중학교에서 ___이(가) 달라졌다. 그래서 나는 ___ 하겠다.', answer: '(예) 교실 이동, 시간표 옆에 교실 위치를 적겠다' }] },
        },
      }),
      M('wrap.check', {
        title: '감정 다루기 스스로 점검', method: '감정 다루기 방법 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '대처 두 가지(멈추기·말로 알리기) 점검 칸만 표시한다.', base: '오늘 배운 대처 세 가지 점검 칸을 표시한다.', challenge: '세 칸을 표시한 뒤 짝과 활동지를 바꿔 서로의 한 주 계획을 점검해 준다(교사 진행).' },
        wrap: {
          teacher: '"오늘 갈림길에서 고른 대처 가운데, 다음에 마음이 커질 때 내가 실제로 해 볼 수 있는 것은 무엇인가요?" 점검 칸은 맞히는 문제가 아니라 다짐을 확인하는 칸이라고 말하고 하나씩 소리 내어 읽으며 표시하게 한다. "사춘기 감정은 이상한 거라 숨겨야 한다"는 말에는 "감정이 출렁이는 것은 흔한 일이고, 다루는 방법을 배우는 것"이라고 짚는다. 한 주 뒤 이 활동지를 다시 펴 보자고 약속한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '감정 다루기 점검' },
              prompt: '다음에 마음이 커지면 해 볼 대처를 모두 확인하고 표시해요.', target: { selfCheck: ['마음이 커지면 먼저 멈추고 숨을 고른다', '속상한 마음을 "나는 ~해서 속상해"로 말한다', '되풀이되면 담임·상담 선생님께 말한다'] }, difficulty: 0.1 },
            { prompt: '다음에 마음이 커지면 해 볼 대처 두 가지를 확인하고 표시해요.', target: { selfCheck: ['마음이 커지면 먼저 멈추고 숨을 고른다', '속상한 마음을 "나는 ~해서 속상해"로 말한다'] } }),
            { type: 'choice', prompt: '"사춘기에 마음이 자주 출렁이는 것은 이상한 일이다"라는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 숨겨야 한다', '흔한 변화이고, 크기에 맞게 다루는 방법을 익히면 된다', '어른이 되면 저절로 사라지니 신경 쓰지 않는다'], answer: 1, difficulty: 0.2, explain: '감정 변화는 흔한 일이에요. 알아차리고 다루는 방법을 익혀요.' },
            { type: 'short', prompt: '세 가지 대처 가운데 이번 주에 가장 먼저 해 볼 것 하나와 그 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '감정 다루기 한 주 점검',
          items: [
            { type: 'check', prompt: '이번 주에 해 본 대처에 표시해요. 한 주 뒤 다시 펴 봐요. (걷지 않아요.)', options: ['먼저 멈추고 숨 고르기', '나-전달로 마음 말하기', '되풀이되면 선생님께 말하기'] },
            { type: 'short', prompt: '마음이 커질 때 찾아갈 수 있는 사람이나 곳을 두 가지 써요.' },
          ],
          easy: { items: [{ type: 'choice', prompt: '화가 크게 났을 때 먼저 할 일에 ○ 해요.', options: ['숨 고르기', '소리 지르기'], answer: '숨 고르기' }] },
        },
        notes: '점검 칸은 다짐 확인용이며 채점하지 않는다. 학생 활동지는 걷지 않는다.',
      }),
    );
  }

  // ==== 7학년 · 시간 관리와 급식·분리배출 실천 (auto.m.g7-habit) ====
  {
    const M = MK('g7-habit', [7]);
    const Q4 = ['중요·급함', '중요·안 급함', '안 중요·급함', '안 중요·안 급함'];
    const HJ = [
      { id: 'h1', text: '내일 낼 수학 수행평가 마무리', to: '중요·급함' }, { id: 'h2', text: '다음 주 영어 말하기 평가 연습', to: '중요·안 급함' },
      { id: 'h3', text: '단체 대화방 새 알림 확인', to: '안 중요·급함' }, { id: 'h4', text: '좋아하는 영상 이어 보기', to: '안 중요·안 급함' },
      { id: 'h5', text: '오늘 밤까지 낼 동아리 신청서', to: '중요·급함' }, { id: 'h6', text: '매일 20분 줄넘기', to: '중요·안 급함' },
      { id: 'h7', text: '친구가 보낸 게임 초대에 답하기', to: '안 중요·급함' }, { id: 'h8', text: '휴대전화 배경 화면 바꾸기', to: '안 중요·안 급함' },
    ];
    const WASTE = [['월', 14], ['화', 9], ['수', 18], ['목', 7], ['금', 11]];

    ALL.push(
      // ---- 도입 ----
      M('intro.todo', {
        title: '방과 후 할 일 시간 어림', method: '내 할 일 목록 시간 어림', tool: 'clock', minutes: 6,
        levels: { easy: '교사가 할 일 2가지(숙제·저녁)만 시계로 이어 보인다.', base: '할 일 3가지(숙제·저녁·평가 준비)를 이어 끝나는 시각을 어림한다.', challenge: '할 일 4가지를 잇고 모두 합쳐 몇 분이 걸리는지 말한다.' },
        intro: {
          teacher: '"가상 학생 하준은 4시에 집에 와서 숙제 30분, 저녁 40분을 하면 몇 시가 될까요?" 시연 단추로 시계가 4시 → 4시 30분 → 5시 10분으로 움직이는 모습을 보인다. "할 일은 금방 끝난다"는 말이 나오면 "어림한 시간과 실제 걸린 시간이 같았던 적이 많았나요?"라고 되묻고, 어림해 보면 시간이 모자란 곳이 보인다는 점을 짚는다. 학생의 실제 방과 후 일정은 묻지 않는다.',
          student: '가상 학생 하준의 방과 후 할 일마다 걸리는 시간을 어림해 보고, 시계로 이으면 몇 시에 끝나는지 짝과 말해요.',
          demo: { tool: 'clock', options: { title: '하준의 방과 후', minuteStep: 10 }, sequence: [{ h: 4, m: 0 }, { h: 4, m: 30 }, { h: 5, m: 10 }] },
          art: { draw: 'a paper-cut desk after school with a big paper clock, a short to-do list pinned on a board, a backpack and a bowl of rice', banner: '할 일마다 몇 분이 걸릴까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      M('intro.bin', {
        title: '요일별 잔반 그래프 읽기', method: '급식 잔반 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '잔반이 가장 많은 날 하나를 고른다.', base: '가장 많은 날과 가장 적은 날을 견주어 차이를 말한다.', challenge: '수요일에 잔반이 많았던 까닭을 메뉴·먹는 시간으로 짐작해 말한다.' },
        intro: {
          teacher: '"가상 학교의 잔반 그래프에서 남은 음식이 가장 많은 날은 무슨 요일일까요?" 시연 단추로 수요일 막대가 골라지는 모습을 보인 뒤 "왜 그날 많이 남았을까요?"라고 묻는다. "잔반은 맛없는 급식 탓"이라는 말이 나오면 "받은 양과 먹은 양은 누가 정할 수 있을까요?"라고 되묻는다. 그래프는 수업용 가상 자료라고 밝힌다.',
          student: '가상 학교의 요일별 잔반 그래프를 보고 가장 많이 남은 날을 찾고, 왜 그랬을지 짐작해 짝과 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '요일별 잔반량(가상 학교)', unit: 'kg', xLabel: '요일', yLabel: '잔반량', data: WASTE, question: '잔반이 가장 많은 요일은?', choices: WASTE.map((d) => d[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut school cafeteria with a row of trays, a bin with leftover food and a paper bar chart on the wall', banner: '왜 이날 많이 남았을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '잔반량 수치는 가상이다. 급식을 만든 분을 탓하는 말로 흐르지 않게, 받는 양을 스스로 정할 수 있다는 쪽으로 이끈다.',
      }),

      // ---- 활동 ----
      M('activity.four', {
        title: '할 일을 네 칸에 나누기', method: '할 일을 네 칸에 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '할 일 카드 4장을 네 칸에 나누고, 칸 옆에 든 장 수가 보이며 틀리면 바로 되돌아온다.', base: '할 일 카드 6장을 네 칸에 나눈다.', challenge: '할 일 카드 8장(2장 더)을 나눈 뒤, 급하지만 중요하지 않은 일을 가려내는 문항까지 푼다.' },
        activity: {
          title: '할 일을 네 칸에 나누기', tool: 'sortboard',
          teacher: '"단체 대화방 알림은 급한 일일까요, 중요한 일일까요?" 카드를 놓을 때마다 \'오늘 안 하면 무슨 일이 생기나\'(급함)와 \'내 목표에 얼마나 도움이 되나\'(중요)를 따로 묻는다. "급한 일이 언제나 가장 중요하다"는 학생에게 "다음 주 말하기 평가 연습은 오늘 급하지 않지만, 미루면 어떻게 될까요?"라고 되묻는다. 중요하지만 급하지 않은 칸을 비워 두지 않는 것이 시간 관리의 열쇠라는 점을 짚는다.',
          task: '가상 학생 하준의 할 일 카드를 중요·급함 네 칸에 나누어요. 오늘 안 하면 생기는 일과 목표에 도움이 되는 정도를 따로 따져요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('하준의 할 일 카드를 네 칸에 나누세요.', Q4, HJ.slice(0, 6)),
              BB('하준의 할 일 카드 4장을 네 칸에 나누세요.', Q4, HJ.slice(0, 4)),
              BB('하준의 할 일 카드 8장을 네 칸에 나누세요.', Q4, HJ)),
            IT(BB('시험 주간 서윤의 할 일을 네 칸에 나누세요.', Q4, [
              { id: 's1', text: '내일 시험 과목 복습', to: '중요·급함' }, { id: 's2', text: '다음 달 독서 감상문 책 고르기', to: '중요·안 급함' },
              { id: 's3', text: '방금 온 광고 문자 지우기', to: '안 중요·급함' }, { id: 's4', text: '사진첩 정리하기', to: '안 중요·안 급함' },
              { id: 's5', text: '오늘 낼 체험학습 동의서 챙기기', to: '중요·급함' }, { id: 's6', text: '잠들기 전 20분 정리 습관', to: '중요·안 급함' }]),
              BB('서윤의 할 일 카드 4장을 네 칸에 나누세요.', Q4, [
                { id: 's1', text: '내일 시험 과목 복습', to: '중요·급함' }, { id: 's2', text: '다음 달 독서 감상문 책 고르기', to: '중요·안 급함' },
                { id: 's3', text: '방금 온 광고 문자 지우기', to: '안 중요·급함' }, { id: 's4', text: '사진첩 정리하기', to: '안 중요·안 급함' }])),
            IT(BB('급하지만 중요하지 않은 일과, 중요하지만 급하지 않은 일을 가려 나누세요.', ['중요하지만 안 급함', '급하지만 안 중요함'], [
              { id: 'g1', text: '매일 조금씩 하는 영어 듣기', to: '중요하지만 안 급함' }, { id: 'g2', text: '울리자마자 확인하는 게임 알림', to: '급하지만 안 중요함' },
              { id: 'g3', text: '한 달 뒤 발표를 위한 자료 모으기', to: '중요하지만 안 급함' }, { id: 'g4', text: '지금 끝나는 할인 쿠폰 받기', to: '급하지만 안 중요함' }]),
              null, null, { conclude: '급한 일이 언제나 중요한 일은 아니에요. 중요하지만 급하지 않은 일을 미리 해 두면 급한 일이 줄어들어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오늘 내 할 일 두 가지를 네 칸 가운데 어디에 넣을지 써요. (걷지 않아요.)', columns: ['할 일', '칸'], cells: [['', ''], ['', '']], answer: '(예) 내일 낼 과제 — 중요·급함, 매일 운동 — 중요·안 급함' }],
          easy: [{ type: 'choice', prompt: '\'다음 주 평가 연습\'은 어느 칸일까요?', options: ['중요·안 급함', '안 중요·급함'], answer: '중요·안 급함' }] },
      }),
      M('activity.back', {
        title: '마감에서 거꾸로 일정 짜기', method: '수행평가 마감에서 거꾸로 일정 짜기', tool: 'timer', minutes: 16,
        levels: { easy: '단계 카드 2장을 차례로 놓고, 작업·쉬기 시간이 정해진 타이머의 번 수만 맞춘다.', base: '단계 카드 3장을 차례로 놓고 작업·쉬기·번 수를 모두 맞춘다.', challenge: '단계 카드 4장(여유 하루 포함)을 놓고, 여유 시간을 더한 전체 시간에 맞게 타이머를 짠다.' },
        activity: {
          title: '마감에서 거꾸로 일정 짜기', tool: 'timer',
          teacher: '"금요일이 마감이라면 고쳐 쓰기는 언제 해야 할까요? 마감 날 아침일까요?" 마감에서 한 칸씩 거꾸로 짚으며 단계 카드를 놓게 하고, 단계마다 몇 분짜리 작업을 몇 번 할지 타이머로 맞추게 한다. "전날 밤에 몰아서 하면 된다"는 학생에게 "그 밤에 다른 과목 숙제까지 겹치면 어떻게 될까요?"라고 되묻는다. 거꾸로 일정에는 하루쯤 여유를 넣어야 뜻밖의 일에도 버틴다는 점을 짚는다.',
          task: '가상 학생 하준의 과학 보고서 마감(금요일)에서 거꾸로 단계를 놓고, 단계마다 작업·쉬기 시간(분)을 타이머로 맞춰요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '금요일 마감 보고서의 단계 카드를 해야 할 차례로 놓으세요.', toolOptions: { title: '하준의 거꾸로 일정', cards: ['목요일 고쳐 쓰기', '화요일 자료 모으기', '수요일 초안 쓰기'] }, target: { order: ['화요일 자료 모으기', '수요일 초안 쓰기', '목요일 고쳐 쓰기'] } },
              { prompt: '금요일 마감 보고서의 단계 카드 두 장을 차례로 놓으세요.', toolOptions: { cards: ['목요일 고쳐 쓰기', '수요일 초안 쓰기'] }, target: { order: ['수요일 초안 쓰기', '목요일 고쳐 쓰기'] } },
              { prompt: '금요일 마감 보고서의 단계를 하루 여유를 넣어 차례로 놓으세요.', toolOptions: { cards: ['수요일 초안 쓰기', '목요일 여유(못 한 것 마무리)', '월요일 자료 모으기', '화요일 개요 짜기'] }, target: { order: ['월요일 자료 모으기', '화요일 개요 짜기', '수요일 초안 쓰기', '목요일 여유(못 한 것 마무리)'] } }),
            IT({ prompt: '초안 쓰기에 50분이 필요해요. 25분 작업 뒤 5분 쉬기를 몇 번 하면 될까요? 작업·쉬기·번 수를 모두 맞추세요.', toolOptions: { title: '초안 쓰기 시간', timeUnit: 'min', labels: ['작업', '쉬기'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 25, rest: 5, rounds: 2 } } },
              { prompt: '25분 작업·5분 쉬기로 50분 작업을 하려면 몇 번 할까요? 번 수를 맞추세요.', toolOptions: { plan: { work: 25, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } } },
              { prompt: '초안 쓰기 작업을 20분씩 3번 하고 사이마다 5분 쉬어요. 전체 시간이 70분이 되게 타이머를 맞추세요.', toolOptions: { showTotal: true }, target: { plan: { work: 20, rest: 5, rounds: 3 }, total: 70 } }),
            IT({ prompt: '고쳐 쓰기 30분을 15분 작업 두 번으로 나누고 사이에 5분 쉬어요. 타이머를 맞추세요.', toolOptions: { title: '고쳐 쓰기 시간', timeUnit: 'min', labels: ['작업', '쉬기'], plan: { work: 5, rest: 0, rounds: 1 } }, target: { plan: { work: 15, rest: 5, rounds: 2 } } },
              { prompt: '15분 작업·5분 쉬기로 고쳐 쓰기를 두 번 해요. 번 수를 맞추세요.', toolOptions: { plan: { work: 15, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } } },
              { prompt: '고쳐 쓰기에 여유 10분을 더해 15분 작업을 세 번, 사이에 5분 쉬기로 맞추세요.', toolOptions: { showTotal: true }, target: { plan: { work: 15, rest: 5, rounds: 3 }, total: 55 } },
              { conclude: '마감에서 거꾸로 단계를 놓고, 단계마다 시간을 나누고, 하루쯤 여유를 넣으면 몰아서 하지 않아도 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '하준의 거꾸로 일정을 완성해요.', columns: ['요일', '할 단계'], cells: [['화', ''], ['수', ''], ['목', ''], ['금', '제출']], answer: '자료 모으기, 초안 쓰기, 고쳐 쓰기' }] },
      }),
      M('activity.tray', {
        title: '먹을 만큼 담는 식판 계획', method: '먹을 만큼 담기 식판 계획', tool: 'kitchen', minutes: 16,
        levels: { easy: '음식 카드 4장을 두 칸(보통 받기·조금만 받기)에 나누고, 틀리면 바로 알려 준다.', base: '음식 카드 6장을 두 칸에 나누고 잔반을 줄이는 행동 점검표를 표시한다.', challenge: '배식대에서 덜어 달라고 할 때 쓸 정중한 말까지 고른다(함정 말 섞임).' },
        activity: {
          title: '먹을 만큼 담는 식판 계획', tool: 'kitchen',
          teacher: '"다온은 생선조림을 늘 반 넘게 남긴대요. 처음부터 어떻게 받으면 좋을까요?" 음식 카드를 나눈 뒤 \'먹을 만큼 받기\'가 편식과는 어떻게 다른지 묻는다. "싫은 건 아예 안 받으면 된다"는 학생에게 "조금만 받아 맛보는 것과 아예 안 받는 것은 몸에 어떤 차이가 있을까요?"라고 되묻는다. 덜어 달라는 말은 배식하는 분께 정중하게 한다는 점을 짚는다.',
          task: '가상 학생 다온의 식성에 맞게 음식 카드를 \'보통 받기\'와 \'조금만 받기\'로 나누고, 잔반을 줄이는 행동과 말을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('다온은 밥과 김치는 다 먹지만 생선조림·나물은 늘 남겨요. 오늘 메뉴를 두 칸에 나누세요.', ['보통 받기', '조금만 받기'], [
              { id: 'm1', text: '잡곡밥', to: '보통 받기' }, { id: 'm2', text: '김치', to: '보통 받기' }, { id: 'm3', text: '생선조림', to: '조금만 받기' },
              { id: 'm4', text: '시금치나물', to: '조금만 받기' }, { id: 'm5', text: '미역국', to: '보통 받기' }, { id: 'm6', text: '도라지무침', to: '조금만 받기' }], { groups: false }),
              SB('다온의 식성에 맞게 음식 4가지를 두 칸에 나누세요.', ['보통 받기', '조금만 받기'], [
                { id: 'm1', text: '잡곡밥', to: '보통 받기' }, { id: 'm2', text: '김치', to: '보통 받기' }, { id: 'm3', text: '생선조림', to: '조금만 받기' }, { id: 'm4', text: '시금치나물', to: '조금만 받기' }], { groups: false })),
            IT(CL('잔반을 줄이는 행동만 표시하세요.', '잔반 줄이기 점검', [
              { id: 'c1', text: '먹을 만큼만 받는다', ok: true }, { id: 'c2', text: '싫은 반찬은 맛도 안 보고 버린다' },
              { id: 'c3', text: '처음엔 조금 받고 더 먹고 싶으면 더 받는다', ok: true }, { id: 'c4', text: '친구와 이야기하느라 먹을 시간을 놓친다' },
              { id: 'c5', text: '남길 것 같으면 받기 전에 덜어 달라고 한다', ok: true }, { id: 'c6', text: '후식만 먼저 먹고 나머지를 남긴다' }])),
            IT(PB('배식대에서 덜어 달라고 할 때 알맞은 말만 골라 담으세요.', '건넬 말', [
              { id: 'w1', text: '"조금만 주세요, 감사합니다"', ok: true }, { id: 'w2', text: '"이거 맛없어서 빼 주세요"' },
              { id: 'w3', text: '"남기지 않게 반만 받을게요"', ok: true }, { id: 'w4', text: '말없이 식판을 뒤로 뺀다' }]),
              null,
              PB('배식대에서 덜어 달라고 할 때 알맞은 말만 골라 담으세요(함정 말 포함).', '건넬 말', [
                { id: 'w1', text: '"조금만 주세요, 감사합니다"', ok: true }, { id: 'w2', text: '"이거 맛없어서 빼 주세요"' },
                { id: 'w3', text: '"남기지 않게 반만 받을게요"', ok: true }, { id: 'w4', text: '말없이 식판을 뒤로 뺀다' },
                { id: 'w5', text: '"맛보게 조금만 담아 주세요"', ok: true }, { id: 'w6', text: '"이런 걸 누가 먹어요"' }]),
              { conclude: '처음부터 먹을 만큼 받으면 남기지 않아요. 덜어 달라는 말은 배식하는 분께 정중하게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '배식대에서 덜어 달라고 할 때 쓸 정중한 말을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '잔반을 줄이는 행동에 ○ 해요.', options: ['먹을 만큼만 받기', '받고 나서 버리기'], answer: '먹을 만큼만 받기' }] },
      }),
      M('activity.sort', {
        title: '분리배출 차례와 헷갈리는 물건', method: '바른 분리배출 차례와 종류 나누기', tool: 'story', minutes: 16,
        levels: { easy: '페트병 장면 카드 3장을 차례로 놓는다(넣으면 바로 알려 준다).', base: '장면 카드 4장을 차례로 놓고 말풍선 빈칸에 알맞은 말을 넣는다.', challenge: '헷갈리는 물건 카드를 종이·플라스틱·일반 쓰레기 칸에 나누는 문항까지 함정 카드와 함께 푼다.' },
        activity: {
          title: '분리배출 차례와 헷갈리는 물건', tool: 'story',
          teacher: '"음료가 남은 페트병을 그대로 넣으면 어떻게 될까요?" 장면 카드를 차례로 놓은 뒤, 헹구기와 라벨 떼기를 빼먹으면 재활용이 어려워진다는 점을 함께 말한다. "분리배출은 대충 나눠도 공장에서 다 골라 준다"는 학생에게 "기름이 밴 종이가 깨끗한 종이와 섞이면 어떻게 될까요?"라고 되묻는다. 지역마다 기준이 조금씩 다를 수 있으니 우리 학교 분리배출대 안내를 함께 보자고 한다.',
          task: '페트병을 버리는 장면 카드를 바른 차례로 놓고, 말풍선에 알맞은 말을 넣고, 헷갈리는 물건을 나누어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('페트병을 버리는 장면 카드를 차례대로 놓으세요.', [{ id: 'p1', text: '남은 음료 비우기', motif: 'cloud' }, { id: 'p2', text: '물로 헹구기', motif: 'leaf' }, { id: 'p3', text: '라벨 떼기', motif: 'star' }, { id: 'p4', text: '찌그러뜨려 뚜껑 닫기', motif: 'house' }], { title: '페트병 분리배출' }),
              OB('페트병을 버리는 장면 카드 3장을 차례대로 놓으세요.', [{ id: 'p1', text: '남은 음료 비우기', motif: 'cloud' }, { id: 'p2', text: '물로 헹구기', motif: 'leaf' }, { id: 'p3', text: '라벨 떼기', motif: 'star' }], { title: '페트병 분리배출' })),
            IT(FB('말풍선 빈칸에 알맞은 말 카드를 넣으세요.', [['"우유갑은 ___ 펼쳐 말려서 내요."', '헹군 뒤'], ['"페트병 라벨은 ___ 떼어 내요."', '비닐이라'], ['"음식물이 묻은 그릇은 ___ 내요."', '씻어서']], ['그대로', '아무 칸에'], { title: '분리배출 말풍선' }),
              FB('말풍선 빈칸 두 곳에 알맞은 말 카드를 넣으세요.', [['"우유갑은 ___ 펼쳐 말려서 내요."', '헹군 뒤'], ['"페트병 라벨은 ___ 떼어 내요."', '비닐이라']], [], { title: '분리배출 말풍선' })),
            IT(SB('헷갈리는 물건을 알맞은 칸에 나누세요.', ['종이', '플라스틱', '일반 쓰레기'], [
              { id: 'q1', text: '깨끗한 종이 상자', to: '종이' }, { id: 'q2', text: '헹군 요구르트병', to: '플라스틱' },
              { id: 'q3', text: '감열지 영수증', to: '일반 쓰레기' }, { id: 'q4', text: '기름이 밴 종이 포장지', to: '일반 쓰레기' }], { title: '어디에 넣을까?' }),
              null,
              SB('헷갈리는 물건을 알맞은 칸에 나누세요(물건이 더 섞여 있어요).', ['종이', '플라스틱', '일반 쓰레기'], [
                { id: 'q1', text: '깨끗한 종이 상자', to: '종이' }, { id: 'q2', text: '헹군 요구르트병', to: '플라스틱' },
                { id: 'q3', text: '감열지 영수증', to: '일반 쓰레기' }, { id: 'q4', text: '기름이 밴 종이 포장지', to: '일반 쓰레기' },
                { id: 'q5', text: '헹군 플라스틱 반찬통', to: '플라스틱' }, { id: 'q6', text: '테이프 뗀 택배 상자', to: '종이' }], { title: '어디에 넣을까?' }),
              { conclude: '비우고, 헹구고, 떼고, 나누어야 재활용이 돼요. 헷갈리는 물건은 우리 지역 분리배출 안내를 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '페트병은 내용물을 비우고, 물로 ___, 라벨을 떼어 내요.', answer: '헹구고' }] },
      }),

      // ---- 정리 ----
      M('wrap.plan', {
        title: '한 주 실천 계획 쓰기', method: '한 주 실천 계획 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("이번 주 ___요일에 ___을(를) ___분 하겠다.")을 채워 쓰고 기준 2개를 점검한다.', base: '시간 관리 하나·급식 하나를 넣어 세 문장으로 쓰고 기준 3개(구체성·측정 가능·급식 실천)를 점검한다.', challenge: '실천했는지 무엇으로 확인할지(점검 방법)까지 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'시간을 잘 쓰겠다\'와 \'월·수·금 저녁 8시에 25분 영어 연습을 하겠다\' 가운데, 일주일 뒤 했는지 안 했는지 알 수 있는 계획은 어느 쪽일까요?" 두 문장을 견주어 읽게 한 뒤, 시간 관리 하나와 급식 실천 하나를 넣어 계획을 쓰게 한다. "계획은 머릿속에만 있어도 된다"는 학생에게 적어 둔 계획은 확인할 수 있다고 짚는다. 계획 글은 발표시키지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '이번 주에 해 볼 시간 관리 실천 하나와 급식 실천 하나를 넣어 계획을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '한 주 실천 계획', placeholder: '예: 월·수·금 저녁에…' },
              prompt: '한 주 실천 계획을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['언제 할지 요일이나 시각을 썼다', '얼마나 할지 수로 썼다', '급식 실천을 하나 넣었다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 실천 계획을 쓰고 기준표에 표시해요.', toolOptions: { starter: '이번 주 ___요일에 ___을(를) ___분 하겠다. 급식에서는 ___ 하겠다.', minSentences: 2 }, target: { selfCheck: ['언제 할지 요일이나 시각을 썼다', '급식 실천을 하나 넣었다'] } },
            { prompt: '실천했는지 확인할 방법까지 넣어 계획을 쓰고 기준표에 표시해요.', target: { selfCheck: ['언제 할지 요일이나 시각을 썼다', '얼마나 할지 수로 썼다', '급식 실천을 하나 넣었다', '했는지 확인할 방법을 썼다'] } }),
            { type: 'choice', prompt: '일주일 뒤 실천했는지 확인하기 가장 쉬운 계획은?', options: ['급식을 잘 먹겠다', '이번 주 급식에서 매일 먹을 만큼만 받고 남기지 않겠다', '건강하게 지내겠다'], answer: 1, difficulty: 0.2, explain: '무엇을 언제 얼마나 할지 드러나야 확인할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '한 주 실천 계획',
          items: [
            { type: 'short', prompt: '시간 관리 하나·급식 하나를 넣은 한 주 실천 계획을 세 문장으로 써요. (걷지 않아요.)' },
            { type: 'check', prompt: '내 계획을 기준표로 점검해요.', options: ['언제 할지 들어 있다', '얼마나 할지 수로 들어 있다', '급식 실천이 들어 있다'] },
          ],
          easy: { note: '문장 틀을 채워도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 계획을 써요.', text: '이번 주 ___요일에 ___을(를) ___분 하겠다.', answer: '(예) 화, 영어 듣기, 20' }] },
        },
      }),
      M('wrap.campaign', {
        title: '급식실 분리배출 실천 점검', method: '급식실 분리배출 실천 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸을 표시하고 기록판 1칸(오늘 잔반통 눈금)을 적는다.', base: '점검 칸을 표시하고 기록판 3칸(사흘 동안의 잔반통 눈금)을 적는다.', challenge: '기록판 3칸을 적고, 활동지에서 사흘 기록을 막대그래프로 옮겨 그린다.' },
        wrap: {
          teacher: '"오늘 점심 뒤 분리배출대에서 우리 모둠이 무엇을 살펴볼까요?" 교사가 점검 차례를 함께 읽고, 점심시간에 모둠별로 분리배출대와 잔반통 눈금을 살핀 뒤 다음 시간에 기록판을 채우게 한다. "한 번 점검하면 끝"이라는 학생에게 "하루만 보고 잔반이 줄었는지 알 수 있을까요?"라고 되묻는다. 점검은 영양 선생님과 미리 시간을 정하고, 잔반통 안에 손을 넣지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '급식실 분리배출 점검', safety: ['잔반을 국물·건더기로 나눠 버리는지 본다', '식판·수저를 정해진 곳에 두는지 본다', '우유갑을 헹궈 따로 모으는지 본다', '잔반통 안에 손을 넣지 않는다'], fields: [{ label: '월 눈금', unit: '칸' }, { label: '화 눈금', unit: '칸' }, { label: '수 눈금', unit: '칸' }] },
              prompt: '점검할 것을 모두 확인하고, 모둠이 본 사흘 동안의 잔반통 눈금을 기록판에 적어요.', target: { safety: true, records: true }, difficulty: 0.15 },
            { prompt: '점검할 것을 모두 확인하고, 오늘 잔반통 눈금 1칸을 적어요.', toolOptions: { fields: [{ label: '오늘 눈금', unit: '칸' }] } }),
            { type: 'choice', prompt: '잔반이 줄었는지 알아보려면 어떻게 기록하는 것이 가장 알맞을까요?', options: ['하루만 보고 판단한다', '같은 방법으로 여러 날 기록해 견준다', '느낌으로 판단한다'], answer: 1, difficulty: 0.2, explain: '같은 방법으로 여러 날 재야 변화를 알 수 있어요.' },
          ],
        },
        worksheet: {
          title: '급식실 분리배출 점검 기록',
          items: [
            { type: 'table', prompt: '모둠이 본 잔반통 눈금을 적어요.', columns: ['요일', '잔반통 눈금(칸)'], cells: [['월', ''], ['화', ''], ['수', '']], answer: '모둠 기록' },
            { type: 'short', prompt: '사흘 기록을 보고 잔반을 줄이려면 우리 반이 무엇을 바꿀지 한 문장으로 써요.' },
          ],
          easy: { items: [{ type: 'short', prompt: '오늘 잔반통 눈금과 눈에 띈 점을 한 줄로 써요.' }] },
        },
        notes: '교사 진행 모듈이다. 실제 점검은 점심시간에 하고, 이 7분에는 점검 항목 확인과 기록을 한다(체계도 \'점심 뒤 점검\'을 수업 시간 안에서 할 수 없어 기록 정리로 바꿈). 도전의 \'그래프로 옮기기\'는 교구가 아니라 활동지에서 한다.',
      }),
    );
  }

  // ==== 7학년 · 나-전달법과 모둠 토의 역할 (auto.m.g7-rel) ====
  {
    const M = MK('g7-rel', [7]);
    // 토의가 막힌 모둠
    const MEET = { text: '모둠 토의 주제는 \'반 게시판 꾸미기\'. 5분이 지났는데 모두 휴대전화나 책상만 보고 아무도 말하지 않는다.', ask: '사회자인 나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'wait', text: '누가 먼저 말하겠지 하고 기다린다', result: '시간이 다 가도록 아무 의견이 나오지 않는다.', impact: [{ who: '모둠', text: '결론을 못 낸다', tone: -1 }], why: '사회자가 차례를 정해 주지 않으면 침묵이 길어져요.', end: '기다리기만 해서 시간이 다 갔어요.',
        next: { text: '선생님이 다가와 "의견이 몇 개 나왔니?"라고 묻는다.', choices: [
          { id: 'none', text: '"아무도 말을 안 해요"라고 친구들 탓을 한다', result: '모둠 분위기가 더 가라앉는다.', impact: [{ who: '모둠원', text: '서운하다', tone: -1 }] },
          { id: 'restart', text: '"지금부터 한 사람씩 돌아가며 말하자"고 한다', result: '한 명씩 짧게 의견을 말하기 시작한다.', impact: [{ who: '모둠', text: '토의가 시작된다', tone: 1 }] }] } },
      { id: 'turn', text: '"한 사람씩 돌아가며 한 가지만 말해 보자"고 한다', result: '조용하던 친구도 짧게 의견을 낸다.', impact: [{ who: '모둠원', text: '말할 차례가 생긴다', tone: 1 }], end: '돌아가며 말하게 해서 의견이 모였어요.',
        next: { text: '의견이 넷 나왔는데 한 친구가 "다 별로야"라고 말한다.', choices: [
          { id: 'mine', text: '사회자인 내 의견으로 정해 버린다', result: '빨리 끝나지만 다른 친구들은 아무 말이 없다.', impact: [{ who: '모둠원', text: '내 의견은 소용없다고 느낀다', tone: -1 }], why: '사회자는 결론을 정하는 사람이 아니라 의견을 모으는 사람이에요.' },
          { id: 'ask', text: '"어떤 점이 별로인지, 고칠 방법은 뭔지 말해 줄래?"라고 묻는다', result: '고칠 점이 나와 의견이 더 좋아진다.', impact: [{ who: '모둠', text: '더 나은 안이 나온다', tone: 1 }] }] } },
      { id: 'scold', text: '"왜 아무도 안 해? 다들 성의 없어"라고 말한다', result: '모두 더 입을 닫는다.', impact: [{ who: '모둠원', text: '위축된다', tone: -1 }], why: '탓하는 말은 말문을 더 닫게 해요.', ending: '탓하는 말에 모두 입을 닫았어요.' }] };
    const MEET_R = [{ id: 'r1', text: '말할 차례를 정해 주면 조용한 사람도 의견을 낸다' }, { id: 'r2', text: '토의는 말 잘하는 한 사람이 이끌면 된다', why: '모두가 말할 기회를 가져야 좋은 결론이 나와요.' }];
    // 나-전달법 카드
    const LATE = { s: { id: 'a1', text: '약속 시간에 30분 늦게 와서' }, f: { id: 'a2', text: '나는 기다리며 걱정됐어' }, w: { id: 'a3', text: '늦으면 미리 연락해 줘' } };
    const LATE_T = [{ id: 'x1', text: '너는 맨날 늦어' }, { id: 'x2', text: '너 때문에 다 망쳤어' }];
    const BOOK = { s: { id: 'b1', text: '빌려 간 책을 아직 안 돌려줘서' }, f: { id: 'b2', text: '나는 숙제를 못 할까 봐 답답해' }, w: { id: 'b3', text: '내일까지 돌려주면 좋겠어' } };
    const BOOK_T = [{ id: 'x3', text: '너는 남의 물건을 막 써' }, { id: 'x4', text: '다시는 안 빌려줄 거야' }];
    const IMSG = (who, set, trap, title) => ({ toolOptions: { mode: 'fill', title, slots: [{ id: 'f1', who, label: '"네가 ___"' }, { id: 'f2', who, label: '"___"(내 느낌)' }, { id: 'f3', who, label: '"그래서 ___"(내 바람)' }], cards: [set.s, set.f, set.w, ...trap] }, target: { fill: { f1: set.s.id, f2: set.f.id, f3: set.w.id } } });
    const ROLE_PAIRS = [['사회자: ___', '말할 차례를 정하고 의견을 모은다'], ['기록자: ___', '나온 의견을 빠짐없이 적는다'], ['발표자: ___', '모둠 결론을 반 앞에서 전한다'], ['시간 지킴이: ___', '남은 시간을 알리고 신호를 준다']];

    ALL.push(
      // ---- 도입 ----
      M('intro.scene', {
        title: '말 한마디에 바뀌는 마음', method: '말 한마디에 바뀌는 마음 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 말("너 때문에"·"나는 ~해서 걱정됐어")만 읽고 듣는 친구 마음 2짝을 함께 잇는다.', base: '말 3개를 듣고 듣는 친구 마음 카드를 3짝 잇는다.', challenge: '말 4개를 듣고 4짝을 이은 뒤 어느 말이 관계를 지키는지 까닭을 말한다.' },
        intro: {
          teacher: '"같은 속상한 일인데 \'너 때문에 망쳤잖아\'와 \'나는 자료가 늦어서 걱정됐어\'를 들은 친구 마음은 어떻게 다를까요?" 시연 단추로 마음 카드가 말 옆에 놓이는 모습을 보인다. "솔직하게 말하는 건 원래 상처를 주는 것"이라는 말이 나오면 "솔직함과 상대를 탓하는 것은 같은 걸까요?"라고 되묻는다. 오늘은 내 마음을 솔직하면서도 상대를 탓하지 않게 말하는 방법을 익힌다고 밝힌다.',
          student: '가상 장면 속 두 말을 듣고, 그 말을 들은 친구의 마음 카드를 이어 보아요. 어느 말이 다음 대화를 이어 가게 할지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"너 때문에 발표 다 망쳤잖아!"' }, { id: 's2', label: '"나는 자료가 늦어서 걱정됐어. 다음엔 미리 말해 줘."' }], cards: [{ id: 'k1', text: '화남' }, { id: 'k2', text: '미안함' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut pair of speech bubbles between two teenagers, one jagged red bubble and one soft round green bubble, with small weather signs above the listener', banner: '어떤 말이 마음을 열까?', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
        },
      }),
      M('intro.meeting', {
        title: '말이 없는 모둠 토의 장면', method: '토의가 막힌 장면 원인 고르기', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림길 하나만 함께 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 원인과 해결 근거를 고른다.', challenge: '두 길을 모두 끝까지 가 본 뒤 근거 2개(차례 정하기·사회자의 일)를 말로 견준다.' },
        intro: {
          teacher: '"5분 동안 아무도 말하지 않는 모둠, 무엇이 막혀 있는 걸까요?" 시연 단추로 \'돌아가며 말하기\' 길을 따라가 보인 뒤 다른 길이 어떻게 끝나는지 묻는다. "말 못 하는 애들이 문제"라는 말이 나오면 "말할 차례와 방법이 정해져 있었나요?"라고 되묻는다. 토의가 막히는 까닭은 사람보다 방법에 있는 경우가 많다는 점을 짚는다.',
          student: '말이 없는 가상 모둠 토의 장면에서 사회자가 할 행동을 골라 결과를 보고, 토의가 막힌 까닭을 생각해요.',
          demo: DEMO_DIL('말이 없는 모둠', MEET, [['turn', 'ask']], MEET_R),
          art: { draw: 'a paper-cut round table of four teenagers looking down at their desks in silence, an empty paper speech bubble floating above, a small timer on the table', banner: '왜 아무도 말하지 않을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.change', {
        title: '너-전달법을 나-전달법으로', method: '너-전달법을 나-전달법으로 바꾸기', tool: 'story', minutes: 16,
        levels: { easy: '말풍선 빈칸 1개(내 느낌)만 고르고, 상황·바람은 미리 채워져 있다.', base: '말풍선 빈칸 3개(상황·느낌·바람)에 카드를 넣어 나-전달법 문장을 만든다(탓하는 함정 카드 섞임).', challenge: '첫 문항에서 상황 두 개의 빈칸 6개를 한 판에서 채운다.' },
        activity: {
          title: '너-전달법을 나-전달법으로', tool: 'story',
          teacher: '"\'너는 맨날 늦어\'를 들으면 상대는 무엇을 고칠까요, 아니면 무엇부터 변명할까요?" 말풍선을 채운 뒤 소리 내어 읽어 보고, 탓하는 카드를 넣었을 때와 견주게 한다. "나-전달법은 참고 돌려 말하는 것"이라는 학생에게 "상황·느낌·바람을 다 말하는 것이 돌려 말하는 걸까요, 분명하게 말하는 걸까요?"라고 되묻는다. 나-전달법은 상대를 바꾸라고 명령하는 대신 바람을 부탁하는 말이라는 점을 짚는다.',
          task: '탓하는 말(너-전달법)을 상황·느낌·바람이 드러나는 나-전달법 말풍선으로 바꾸어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(Object.assign({ prompt: '"너는 맨날 늦어!"를 나-전달법으로 바꾸세요. 말풍선 세 칸에 카드를 넣으세요.' }, IMSG('나', LATE, LATE_T, '늦게 온 친구에게')),
              { prompt: '"너는 맨날 늦어!"를 나-전달법으로 바꿀 때, 내 느낌 칸에 알맞은 카드를 넣으세요.', toolOptions: { slots: [{ id: 'f2', who: '나', label: '"네가 약속 시간에 30분 늦게 와서 ___. 늦으면 미리 연락해 줘."' }], cards: [LATE.f, ...LATE_T] }, target: { fill: { f2: LATE.f.id } } },
              { prompt: '두 상황을 모두 나-전달법으로 바꾸세요. 빈칸 여섯 곳에 카드를 넣으세요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '(늦은 친구) "네가 ___"' }, { id: 'f2', who: '나', label: '(늦은 친구) "___"' }, { id: 'f3', who: '나', label: '(늦은 친구) "그래서 ___"' }, { id: 'g1', who: '나', label: '(책 친구) "네가 ___"' }, { id: 'g2', who: '나', label: '(책 친구) "___"' }, { id: 'g3', who: '나', label: '(책 친구) "그래서 ___"' }], cards: [LATE.s, LATE.f, LATE.w, BOOK.s, BOOK.f, BOOK.w, LATE_T[0], BOOK_T[0]] }, target: { fill: { f1: 'a1', f2: 'a2', f3: 'a3', g1: 'b1', g2: 'b2', g3: 'b3' } } }),
            IT(Object.assign({ prompt: '"넌 남의 물건을 막 써!"를 나-전달법으로 바꾸세요. 말풍선 세 칸에 카드를 넣으세요.' }, IMSG('나', BOOK, BOOK_T, '책을 안 돌려준 친구에게')),
              { prompt: '"넌 남의 물건을 막 써!"를 바꿀 때, 내 느낌 칸에 알맞은 카드를 넣으세요.', toolOptions: { slots: [{ id: 'f2', who: '나', label: '"네가 빌려 간 책을 아직 안 돌려줘서 ___. 내일까지 돌려주면 좋겠어."' }], cards: [BOOK.f, ...BOOK_T] }, target: { fill: { f2: BOOK.f.id } } }),
            IT({ prompt: '나-전달법으로 말한 문장만 골라 담으세요.', toolOptions: { mode: 'pick', basket: '나-전달법', title: '어느 말이 나-전달법일까?', cards: [
              { id: 'p1', text: '"네가 내 자리에 앉아서 당황했어. 다음엔 물어봐 줘."' }, { id: 'p2', text: '"넌 왜 맨날 남의 자리에 앉아?"' },
              { id: 'p3', text: '"대화방에서 내 사진이 올라와 속상했어. 지워 주면 좋겠어."' }, { id: 'p4', text: '"너 진짜 생각 없다."' }] }, target: { pick: ['p1', 'p3'] } },
              null, null, { conclude: '나-전달법은 상황·내 느낌·내 바람을 말해요. 탓하지 않아도 내 마음을 분명하게 전할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워 나-전달법 문장을 만들어요.', text: '네가 ___ 해서, 나는 ___. 그래서 ___ 해 주면 좋겠어.', answer: '(예) 약속에 늦게 와서, 걱정됐어, 늦으면 미리 연락' }] },
      }),
      M('activity.refuse', {
        title: '관계를 지키는 거절 대본', method: '관계를 지키는 거절 대본 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '대본 틀("미안하지만 ___ 어려워. 왜냐하면 ___. 대신 ___")의 빈칸을 채워 쓰고 기준 2개(분명함·존중)를 점검한다.', base: '부탁을 거절하는 대본을 네 줄로 쓰고 기준 3개(분명함·존중·까닭)를 점검한다.', challenge: '거절하면서 함께할 수 있는 대안까지 넣어 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '관계를 지키는 거절 대본', tool: 'rubric-writing',
          teacher: '"\'싫어\'와 \'미안하지만 오늘은 어려워, 대신 주말에 같이 하자\' 가운데 다음 날 다시 웃으며 만날 수 있는 거절은 어느 쪽일까요?" 두 대본을 견주어 읽은 뒤 가상 장면마다 거절 대본을 쓰게 한다. "거절하면 관계가 깨진다"는 학생에게 "억지로 들어준 뒤 속으로 화가 쌓이면 그 관계는 어떻게 될까요?"라고 되묻는다. 분명하게 말하되 상대를 깎아내리지 않는 것이 핵심이라는 점을 짚는다.',
          task: '가상 친구의 부탁을 분명하면서도 존중하는 말로 거절하는 짧은 대본을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('시험 전날 밤 친구 하린이 "게임 한 판만 같이 하자"고 해요. 거절하는 대본을 네 줄로 쓰세요.', { topic: '시험 전날 밤 게임 하자는 부탁을 거절하는 대본(네 줄)', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 5, title: '거절 대본 ①', placeholder: '나: 미안하지만…' }, ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다', '거절하는 까닭을 썼다']),
              { prompt: '대본 틀을 채워 게임 부탁을 거절하세요.', toolOptions: { starter: '미안하지만 ___ 어려워. 왜냐하면 ___.', minSentences: 2 }, target: { selfCheck: ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다'] } },
              { prompt: '게임 부탁을 거절하면서 함께할 수 있는 대안까지 넣어 대본을 쓰세요.', target: { selfCheck: ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다', '거절하는 까닭을 썼다', '함께할 수 있는 대안을 제안했다'] } }),
            IT(RW('친구 도윤이 "숙제 좀 보여 줘, 베낄게"라고 해요. 거절하는 대본을 네 줄로 쓰세요.', { topic: '숙제를 베끼게 해 달라는 부탁을 거절하는 대본(네 줄)', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 5, title: '거절 대본 ②', placeholder: '나: 그건 좀…' }, ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다', '거절하는 까닭을 썼다']),
              { prompt: '대본 틀을 채워 숙제 베끼기 부탁을 거절하세요.', toolOptions: { starter: '미안하지만 ___ 어려워. 왜냐하면 ___.', minSentences: 2 }, target: { selfCheck: ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다'] } },
              { prompt: '숙제 베끼기 부탁을 거절하면서 대안(같이 풀기 등)까지 넣어 대본을 쓰세요.', target: { selfCheck: ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다', '거절하는 까닭을 썼다', '함께할 수 있는 대안을 제안했다'] } }),
            IT(RW('친구 수아가 "네 이어폰 일주일만 빌려줘"라고 해요. 거절하는 대본을 네 줄로 쓰세요.', { topic: '아끼는 물건을 오래 빌려 달라는 부탁을 거절하는 대본(네 줄)', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 5, title: '거절 대본 ③', placeholder: '나: 그 이어폰은…' }, ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다', '거절하는 까닭을 썼다']),
              { prompt: '대본 틀을 채워 물건 빌려 달라는 부탁을 거절하세요.', toolOptions: { starter: '미안하지만 ___ 어려워. 왜냐하면 ___.', minSentences: 2 }, target: { selfCheck: ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다'] } },
              { prompt: '물건 부탁을 거절하면서 대안까지 넣어 대본을 쓰세요.', target: { selfCheck: ['거절한다는 뜻을 분명히 썼다', '상대를 깎아내리는 말이 없다', '거절하는 까닭을 썼다', '함께할 수 있는 대안을 제안했다'] } },
              { conclude: '좋은 거절은 분명하고, 까닭이 있고, 상대를 깎아내리지 않아요. 대안을 함께 말하면 관계도 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내가 쓴 거절 대본에 들어간 것에 표시해요.', options: ['분명한 거절', '까닭', '존중하는 말', '대안'] }] },
        notes: '대본은 가상 친구의 부탁이다. 실제 친구 이름을 쓰지 않게 한다.',
      }),
      M('activity.roles', {
        title: '토의 역할과 할 일 잇기', method: '토의 역할과 할 일 잇기', tool: 'wordcards', minutes: 16,
        levels: { easy: '역할 2개(사회자·기록자)의 빈칸에 할 일 카드를 넣는다(넣으면 바로 알려 준다).', base: '역할 4개의 빈칸에 할 일 카드를 넣고, 역할별 할 일을 두 장씩 나눈다.', challenge: '사회자에게 맞지 않는 할 일 카드를 빼고 알맞은 것만 고른다(함정 카드 섞임).' },
        activity: {
          title: '토의 역할과 할 일 잇기', tool: 'wordcards',
          teacher: '"사회자는 결론을 정하는 사람일까요, 의견을 모으는 사람일까요?" 역할마다 할 일 카드를 넣은 뒤, 역할이 없을 때 모둠 토의가 어떻게 흘러갔는지 떠올리게 한다. "역할은 말 잘하는 친구가 다 맡으면 된다"는 학생에게 "기록자와 시간 지킴이가 없으면 5분 뒤 무엇이 남을까요?"라고 되묻는다. 역할은 돌아가며 맡아야 모두가 연습할 수 있다는 점을 짚는다.',
          task: '모둠 토의 역할(사회자·기록자·발표자·시간 지킴이)마다 알맞은 할 일 카드를 넣고, 사회자에게 맞지 않는 할 일을 가려요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('역할마다 알맞은 할 일 카드를 넣으세요.', ROLE_PAIRS, ['내 의견으로 결론 정하기']),
              FB('사회자와 기록자의 빈칸에 알맞은 할 일 카드를 넣으세요.', ROLE_PAIRS.slice(0, 2), [])),
            IT(SB('할 일 카드를 역할 칸에 두 장씩 나누세요.', ['사회자', '기록자', '발표자', '시간 지킴이'], [
              { id: 'r1', text: '돌아가며 말할 차례 정하기', to: '사회자' }, { id: 'r2', text: '다른 의견도 있는지 묻기', to: '사회자' },
              { id: 'r3', text: '나온 의견을 빠짐없이 적기', to: '기록자' }, { id: 'r4', text: '적은 내용을 다시 읽어 주기', to: '기록자' },
              { id: 'r5', text: '모둠 결론을 반 앞에서 전하기', to: '발표자' }, { id: 'r6', text: '소수 의견도 함께 전하기', to: '발표자' },
              { id: 'r7', text: '남은 시간 알리기', to: '시간 지킴이' }, { id: 'r8', text: '마칠 1분 전 신호 주기', to: '시간 지킴이' }]),
              SB('할 일 카드를 두 역할 칸에 두 장씩 나누세요.', ['사회자', '기록자'], [
                { id: 'r1', text: '돌아가며 말할 차례 정하기', to: '사회자' }, { id: 'r2', text: '다른 의견도 있는지 묻기', to: '사회자' },
                { id: 'r3', text: '나온 의견을 빠짐없이 적기', to: '기록자' }, { id: 'r4', text: '적은 내용을 다시 읽어 주기', to: '기록자' }])),
            IT(PB('사회자가 할 일만 골라 담으세요.', '사회자가 할 일', [
              { id: 'm1', text: '말할 차례 정하기', ok: true }, { id: 'm2', text: '의견을 모아 정리하기', ok: true },
              { id: 'm3', text: '내 의견으로 결론 정하기' }, { id: 'm4', text: '조용한 친구 의견 묻기', ok: true }]),
              null,
              PB('사회자가 할 일만 골라 담으세요(맞지 않는 할 일이 더 섞였어요).', '사회자가 할 일', [
                { id: 'm1', text: '말할 차례 정하기', ok: true }, { id: 'm2', text: '의견을 모아 정리하기', ok: true },
                { id: 'm3', text: '내 의견으로 결론 정하기' }, { id: 'm4', text: '조용한 친구 의견 묻기', ok: true },
                { id: 'm5', text: '마음에 안 드는 의견 끊기' }, { id: 'm6', text: '기록을 혼자 다 맡기' }]),
              { conclude: '역할이 있으면 모두가 토의에 참여해요. 사회자는 정하는 사람이 아니라 모으는 사람이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '역할마다 할 일을 한 가지씩 써요.', columns: ['역할', '할 일'], cells: [['사회자', ''], ['기록자', ''], ['시간 지킴이', '']], answer: '말할 차례 정하기·의견 모으기, 의견 적기, 남은 시간 알리기' }] },
      }),
      M('activity.practice', {
        title: '역할 맡아 5분 모둠 토의', method: '역할 맡아 5분 모둠 토의', tool: 'timer', minutes: 16,
        levels: { easy: '토의 시간을 3분으로 타이머에 맞추고 한 번 토의한다.', base: '토의 5분·정리 1분으로 타이머를 맞추고 토의 차례 카드를 놓은 뒤 토의한다.', challenge: '역할을 바꿔 두 번 토의하도록 토의 5분·정리 1분·2번으로 맞춘다.' },
        activity: {
          title: '역할 맡아 5분 모둠 토의', tool: 'timer',
          teacher: '"오늘 토의 주제는 \'우리 반 쉬는 시간 소음을 줄이는 방법\'이에요. 시간 지킴이는 4분이 지나면 손을 들어 신호를 주세요." 모둠마다 역할 카드를 나눠 갖게 하고, 타이머를 맞춘 뒤 실제로 토의하게 한다. "말을 많이 한 모둠이 잘한 모둠"이라는 학생에게 "모두가 한 번씩 말한 모둠과 한 사람이 다 말한 모둠 가운데 어느 쪽 결론이 반 전체를 대표할까요?"라고 되묻는다. 토의가 끝나면 스스로 점검 칸을 표시하게 한다.',
          task: '모둠에서 역할을 나눠 맡고, 타이머를 맞춰 실제로 토의한 뒤, 토의 차례와 내가 한 일을 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '토의 5분, 정리 1분으로 타이머를 맞추세요.', toolOptions: { title: '모둠 토의 타이머', timeUnit: 'min', labels: ['토의', '정리'], plan: { work: 2, rest: 2, rounds: 1 } }, target: { plan: { work: 5, rest: 1, rounds: 1 } } },
              { prompt: '토의 시간을 3분으로 맞추세요.', target: { plan: { work: 3, rounds: 1 } } },
              { prompt: '역할을 바꿔 두 번 토의하도록 토의 5분·정리 1분·2번으로 맞추세요.', target: { plan: { work: 5, rest: 1, rounds: 2 } } }),
            IT({ prompt: '5분 토의의 차례 카드를 놓으세요.', toolOptions: { title: '토의 차례', cards: ['기록자가 의견 정리해 읽기', '사회자가 주제·시간 알리기', '발표자가 결론 발표 준비', '돌아가며 의견 말하기'] }, target: { order: ['사회자가 주제·시간 알리기', '돌아가며 의견 말하기', '기록자가 의견 정리해 읽기', '발표자가 결론 발표 준비'] } },
              { prompt: '토의 차례 카드 세 장을 놓으세요.', toolOptions: { cards: ['기록자가 의견 정리해 읽기', '사회자가 주제·시간 알리기', '돌아가며 의견 말하기'] }, target: { order: ['사회자가 주제·시간 알리기', '돌아가며 의견 말하기', '기록자가 의견 정리해 읽기'] } }),
            IT({ prompt: '토의를 마친 뒤 내가 한 일을 스스로 점검하세요.', toolOptions: { title: '토의 뒤 스스로 점검' }, target: { selfCheck: ['맡은 역할의 일을 했다', '다른 사람 말을 끝까지 들었다', '시간 지킴이 신호를 지켰다'] } },
              null, null, { conclude: '역할을 나누고 시간을 정하면 5분 안에도 모두의 의견이 담긴 결론을 낼 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 토의에서 내가 맡은 역할과 잘한 점 하나를 써요.' }] },
        notes: '교사 진행 모듈이다. 실제 토의는 모둠별로 하고 교구는 타이머·차례·점검만 기록한다.',
      }),

      // ---- 정리 ----
      M('wrap.roleplay', {
        title: '짝과 부탁·거절 역할극', method: '짝과 부탁·거절 역할극', tool: 'timer', minutes: 7,
        levels: { easy: '대본을 보며 역할극을 하고 점검 칸 2개를 표시한다.', base: '대본을 외워 역할극을 하고 점검 칸 3개를 표시한다.', challenge: '교사가 즉석에서 준 새 부탁 장면으로 역할극을 하고 점검 칸 3개를 표시한다.' },
        wrap: {
          teacher: '"부탁하는 사람과 거절하는 사람을 1분씩 바꿔 해 볼게요. 거절을 들은 쪽은 어떤 말이 덜 서운했는지 알려 주세요." 짝과 역할을 바꾸도록 타이머를 맞춘 뒤 실제로 해 보게 한다. "거절 연습은 어색하니까 웃으며 대충 하자"는 학생에게 "실제로 거절해야 할 때 말이 안 나오는 것은 연습해 보지 않아서일 수 있어요"라고 말해 준다. 실제 친구 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '부탁·거절 역할극', timeUnit: 'min', labels: ['역할극', '바꾸기'], plan: { work: 3, rest: 0, rounds: 1 } },
              prompt: '짝과 1분씩 역할을 바꿔 두 번 하도록 역할극 1분·바꾸기 0분·2번으로 맞춘 뒤, 해 보고 점검 칸에 표시해요.', target: { plan: { work: 1, rest: 0, rounds: 2 }, selfCheck: ['거절한다는 뜻을 분명히 말했다', '상대를 깎아내리지 않았다', '대안을 제안했다'] }, difficulty: 0.2 },
            { prompt: '역할극 1분·2번으로 맞추고, 해 본 뒤 점검 칸 두 개에 표시해요.', target: { plan: { work: 1, rounds: 2 }, selfCheck: ['거절한다는 뜻을 분명히 말했다', '상대를 깎아내리지 않았다'] } }),
            { type: 'choice', prompt: '"거절하면 관계가 깨진다"는 생각에 대한 답으로 가장 알맞은 것은?', options: ['그러니 늘 들어줘야 한다', '분명하고 정중한 거절은 오히려 믿음을 지킨다', '거절할 땐 아무 말 없이 피하면 된다'], answer: 1, difficulty: 0.2, explain: '억지로 들어주면 속으로 서운함이 쌓여요. 정중한 거절이 관계를 지켜요.' },
          ],
        },
        worksheet: {
          title: '부탁·거절 역할극 돌아보기',
          items: [
            { type: 'check', prompt: '짝의 거절에서 잘된 것에 표시해 줘요.', options: ['분명했다', '정중했다', '대안이 있었다'] },
            { type: 'short', prompt: '역할극에서 들은 거절 가운데 덜 서운했던 말 한 줄을 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 역할극은 짝끼리 실제로 하고, 교구는 시간 맞추기와 점검만 기록한다.',
      }),
      M('wrap.tally', {
        title: '우리 모둠 경청 그래프', method: '우리 모둠 경청 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '가상 모둠 4명이 말한 횟수를 그림그래프로 만든다.', base: '같은 기록을 막대그래프로 만든다.', challenge: '그래프를 읽고 모두가 고르게 말하게 할 방법을 고른다.' },
        wrap: {
          teacher: '"가상 모둠의 기록을 보면 한 사람이 거의 다 말했네요. 이 모둠 결론은 네 사람 모두의 생각일까요?" 그래프를 만든 뒤 가장 긴 막대와 가장 짧은 막대를 견주게 한다. "말을 적게 한 친구는 의견이 없는 것"이라는 학생에게 "말할 차례가 없어서였을 수도 있지 않을까요?"라고 되묻는다. 우리 모둠의 실제 횟수는 발표시키지 않고 활동지에 스스로만 적게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: { type: 'bar', title: '가상 모둠이 5분 토의에서 말한 횟수', unit: '번', xLabel: '모둠원', yLabel: '말한 횟수', data: [['가온', 6], ['나래', 1], ['다솜', 3], ['라온', 2]] },
              prompt: '가상 모둠의 기록 표를 보고 막대그래프를 완성해요.', target: { build: true }, difficulty: 0.2 },
            { prompt: '가상 모둠의 기록 표를 보고 그림그래프를 완성해요.', toolOptions: { type: 'picture', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }], icon: 'person' } },
            { prompt: '그래프를 읽고 모두가 고르게 말하게 할 방법을 고르세요.', toolOptions: { mode: 'read', question: '이 모둠이 다음 토의에서 바꿀 점은?', choices: ['가온이 계속 다 말한다', '돌아가며 한 번씩 말할 차례를 정한다', '나래는 듣기만 한다'] }, target: { pick: 1 } }),
            { type: 'choice', prompt: '"토의는 말 잘하는 사람이 이끌면 된다"에 대한 반박으로 가장 알맞은 것은?', options: ['말 잘하는 사람이 빨리 끝낸다', '모두가 말해야 결론이 모둠 전체의 생각이 된다', '토의는 원래 지루하다'], answer: 1, difficulty: 0.2, explain: '고르게 말할 기회가 있어야 모둠 결론이 돼요.' },
          ],
        },
        worksheet: {
          title: '우리 모둠 경청 돌아보기',
          items: [
            { type: 'short', prompt: '오늘 우리 모둠 토의에서 고르게 말했는지 한 문장으로 돌아봐요. (걷지 않아요.)' },
            { type: 'check', prompt: '다음 토의에서 해 볼 것에 표시해요.', options: ['돌아가며 말하기', '말한 사람 끝까지 듣기', '조용한 친구 의견 묻기'] },
          ],
        },
        notes: '그래프 자료는 가상 모둠이다. 우리 반 학생의 말한 횟수를 기록해 걷거나 비교하지 않는다.',
      }),
    );
  }

  // ==== 7학년 · 학급자치회와 학급 회의 (auto.m.g7-self) ====
  {
    const M = MK('g7-self', [7]);
    const VOTE = [['쉬는 시간 소음', 9], ['사물함 정리', 4], ['분리배출 당번', 7], ['교실 온도', 5], ['게시판 낡음', 2]];
    // 토의 없이 바로 표결하는 회의
    const FLOW = { text: '가상 학급 회의. 사회자가 "안건은 체육대회 반 티셔츠 색입니다. 바로 손 들어 정합시다"라고 한다. 아직 아무도 의견을 말하지 않았다.', ask: '서기인 나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'go', text: '그대로 손을 들어 표결한다', result: '파랑이 정해졌지만 "검정이 더 낫다"는 불만이 쏟아진다.', impact: [{ who: '반 친구들', text: '결정에 납득하지 못한다', tone: -1 }], why: '의견을 나누지 않고 표결하면 까닭 없이 숫자만 남아요.', end: '토의 없이 정해 불만이 남았어요.',
        next: { text: '회의가 끝난 뒤 몇몇이 "다시 정하자"고 한다.', choices: [
          { id: 'ignore', text: '"이미 정했으니 끝"이라고 한다', result: '반 분위기가 나빠진다.', impact: [{ who: '반 친구들', text: '서로 서운하다', tone: -1 }] },
          { id: 'next', text: '다음 회의에 다시 안건으로 올리자고 한다', result: '다음 회의에서 의견을 나누기로 한다.', impact: [{ who: '반 친구들', text: '말할 기회가 생긴다', tone: 1 }] }] } },
      { id: 'step', text: '"표결 전에 제안 설명과 토의를 먼저 하자"고 말한다', result: '사회자가 색마다 제안한 사람에게 까닭을 묻는다.', impact: [{ who: '반 친구들', text: '까닭을 듣고 고른다', tone: 1 }], end: '빠진 단계를 넣어 토의했어요.',
        next: { text: '토의 뒤 표결에서 파랑 18표, 검정 9표가 나왔다. 검정을 고른 친구들이 아쉬워한다.', choices: [
          { id: 'erase', text: '회의록에 파랑이 정해졌다는 것만 적는다', result: '검정을 고른 까닭이 기록에서 사라진다.', impact: [{ who: '소수 의견 친구들', text: '내 의견이 지워진 것 같다', tone: -1 }], why: '소수 의견도 회의록에 남겨야 다음에 참고할 수 있어요.' },
          { id: 'record', text: '표결 결과와 검정을 고른 까닭(때가 덜 탄다)도 함께 적는다', result: '다음 행사 때 그 의견을 다시 살펴보기로 한다.', impact: [{ who: '소수 의견 친구들', text: '의견이 남는다', tone: 1 }] }] } },
      { id: 'quiet', text: '서기는 적기만 하는 사람이니 아무 말도 하지 않는다', result: '토의 없이 표결이 끝난다.', impact: [{ who: '반 친구들', text: '까닭을 모른 채 정한다', tone: -1 }], why: '역할이 무엇이든 회의 차례가 빠지면 말할 수 있어요.', ending: '빠진 단계를 알면서도 말하지 않았어요.' }] };
    const FLOW_R = [{ id: 'r1', text: '표결 전에 제안 설명과 토의가 있어야 까닭을 알고 고른다' }, { id: 'r2', text: '회의는 반장이 정하고 나머지는 따르면 된다', why: '학급 회의는 모두가 의견을 내고 함께 정하는 자리예요.' }];
    const STEPS7 = [{ id: 'o1', text: '개회' }, { id: 'o2', text: '안건 상정' }, { id: 'o3', text: '제안 설명' }, { id: 'o4', text: '토의' }, { id: 'o5', text: '표결' }, { id: 'o6', text: '결과 발표' }, { id: 'o7', text: '폐회' }];
    // 1인 1역 순번(한 주에 한 칸씩 옆 역할로)
    const ROT5 = ['칠판 정리', '분리배출', '우유 나르기', '창문 열고 닫기', '게시판 관리'];

    ALL.push(
      // ---- 도입 ----
      M('intro.problem', {
        title: '우리 반 불편 투표 그래프', method: '우리 반 불편 투표 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 후보 3개(소음·분리배출·사물함)만 짚어 가장 많은 표를 고르게 한다.', base: '후보 5개의 그림그래프를 읽고 학급 회의 안건 후보를 고른다.', challenge: '표가 적은 후보도 안건이 될 수 있는 까닭(급함·모두에게 영향)을 말한다.' },
        intro: {
          teacher: '"가상 1학년 3반 친구들이 꼽은 불편 가운데 표가 가장 많은 것은 무엇일까요?" 그림그래프를 띄우고 시연 단추로 \'쉬는 시간 소음\'이 골라지는 모습을 보인다. "표가 가장 많은 것만 안건이 된다"는 말이 나오면 "표는 적어도 모두의 안전에 관한 일이라면 어떨까요?"라고 되묻는다. 오늘은 불편을 회의 안건으로 바꾸고 함께 정하는 차례를 익힌다고 밝힌다.',
          student: '가상 반의 불편 투표 그림그래프를 보고, 학급 회의에 올릴 안건 후보를 고르고 까닭을 짝에게 말해요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '가상 1학년 3반이 꼽은 불편(투표)', unit: '표', xLabel: '불편', yLabel: '표 수', data: VOTE, icons: [{ value: 5, name: '5표' }, { value: 1, name: '1표' }], icon: 'person', question: '표가 가장 많은 불편은?', choices: VOTE.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut classroom board with sticky-note votes in rows, small paper person icons stacked beside each problem, a ballot box on the teacher desk', banner: '어떤 불편을 안건으로 올릴까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '투표 결과는 가상 학급이다.',
      }),
      M('intro.flow', {
        title: '토의 없이 표결한 회의 장면', method: '회의 장면 보고 잘못된 차례 찾기', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림길만 함께 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 빠진 단계와 근거를 고른다.', challenge: '두 길의 끝을 견주고, 빠진 단계 두 가지(제안 설명·토의)와 소수 의견 기록의 까닭을 말한다.' },
        intro: {
          teacher: '"아직 아무도 의견을 말하지 않았는데 바로 손을 들어 정하면 무엇이 빠질까요?" 시연 단추로 \'표결 전에 토의하자\'는 길을 따라가 보인다. "회의는 반장이 정하고 따르면 된다"는 말이 나오면 "그렇게 정한 일을 반 친구들이 기꺼이 지킬까요?"라고 되묻는다. 회의 차례에는 까닭을 듣고 고르는 단계가 있다는 점을 짚는다.',
          student: '토의 없이 바로 표결하려는 가상 학급 회의 장면에서 길을 골라 결과를 보고, 빠진 단계가 무엇인지 찾아요.',
          demo: DEMO_DIL('바로 표결하는 회의', FLOW, [['step', 'record']], FLOW_R),
          art: { draw: 'a paper-cut class meeting with a student chair at the front and hands rising too early, an empty paper speech bubble labeled with a question mark', banner: '어느 차례가 빠졌을까?', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.dept', {
        title: '부서와 맡을 일 나누기', method: '부서와 맡을 일 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '할 일 카드를 두 부서(학습·환경) 칸에 나누고, 틀리면 바로 되돌아온다.', base: '할 일 카드를 세 부서(학습·환경·생활) 칸에 나눈다.', challenge: '공정한 1인 1역 조건과 공정하지 않은 조건을 가려 나누는 문항까지 푼다.' },
        activity: {
          title: '부서와 맡을 일 나누기', tool: 'sortboard',
          teacher: '"\'분리배출 당번 정하기\'는 학습부 일일까요, 환경부 일일까요?" 카드를 놓을 때마다 그 일이 반의 어떤 불편을 줄이는지 함께 말한다. "부서는 반장이 정해 주면 된다"는 학생에게 "부서마다 할 일을 우리가 정하면 무엇이 달라질까요?"라고 되묻는다. 1인 1역이 공정하려면 모두가 돌아가며 맡고 일의 무게가 비슷해야 한다는 점을 짚는다.',
          task: '가상 학급자치회의 할 일 카드를 학습부·환경부·생활부 칸에 나누고, 공정한 1인 1역 조건을 가려요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('할 일 카드를 알맞은 부서 칸에 나누세요.', ['학습부', '환경부', '생활부'], [
              { id: 'd1', text: '모둠 학습 자료 나눠 주기', to: '학습부' }, { id: 'd2', text: '수행평가 날짜 게시판에 적기', to: '학습부' },
              { id: 'd3', text: '분리배출 당번 정하기', to: '환경부' }, { id: 'd4', text: '교실 화분 물 주기', to: '환경부' },
              { id: 'd5', text: '쉬는 시간 소음 약속 알리기', to: '생활부' }, { id: 'd6', text: '분실물 상자 관리하기', to: '생활부' }]),
              BB('할 일 카드를 두 부서 칸에 나누세요.', ['학습부', '환경부'], [
                { id: 'd1', text: '모둠 학습 자료 나눠 주기', to: '학습부' }, { id: 'd2', text: '수행평가 날짜 게시판에 적기', to: '학습부' },
                { id: 'd3', text: '분리배출 당번 정하기', to: '환경부' }, { id: 'd4', text: '교실 화분 물 주기', to: '환경부' }])),
            IT(BB('학급 행사 준비 일을 알맞은 부서 칸에 나누세요.', ['학습부', '환경부', '생활부'], [
              { id: 'e1', text: '행사 퀴즈 문제 모으기', to: '학습부' }, { id: 'e2', text: '행사 뒤 쓰레기 나눠 모으기', to: '환경부' },
              { id: 'e3', text: '행사 때 줄 서기 약속 정하기', to: '생활부' }, { id: 'e4', text: '일회용품 줄이는 방법 찾기', to: '환경부' }]),
              BB('학급 행사 준비 일을 두 부서 칸에 나누세요.', ['학습부', '환경부'], [
                { id: 'e1', text: '행사 퀴즈 문제 모으기', to: '학습부' }, { id: 'e2', text: '행사 뒤 쓰레기 나눠 모으기', to: '환경부' }, { id: 'e4', text: '일회용품 줄이는 방법 찾기', to: '환경부' }])),
            IT(BB('1인 1역을 정하는 조건을 공정한 것과 공정하지 않은 것으로 나누세요.', ['공정한 조건', '공정하지 않은 조건'], [
              { id: 'f1', text: '한 달마다 역할을 돌아가며 맡는다', to: '공정한 조건' }, { id: 'f2', text: '힘든 역할은 늘 같은 사람이 맡는다', to: '공정하지 않은 조건' },
              { id: 'f3', text: '역할마다 하는 일의 양을 비슷하게 맞춘다', to: '공정한 조건' }, { id: 'f4', text: '친한 친구끼리 편한 역할을 나눠 갖는다', to: '공정하지 않은 조건' }]),
              null, null, { conclude: '부서와 역할은 반의 불편을 나눠 맡는 약속이에요. 돌아가며 맡고 일의 양을 맞추면 공정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반에 새로 만들면 좋을 1인 1역 하나와, 그 역할이 줄여 줄 불편을 써요.' }],
          easy: [{ type: 'choice', prompt: '\'교실 화분 물 주기\'는 어느 부서 일일까요?', options: ['환경부', '학습부'], answer: '환경부' }] },
      }),
      M('activity.fair', {
        title: '1인 1역 순번 일정 짜기', method: '1인 1역 순번 일정 짜기', tool: 'timer', minutes: 16,
        levels: { easy: '역할 3개가 돌아가는 순번에서 한 사람의 3주 차례를 놓는다.', base: '역할 5개가 돌아가는 순번에서 한 사람의 5주 차례를 놓는다.', challenge: '결석한 날 역할을 어떻게 이어 맡을지 규칙의 차례까지 놓는다.' },
        activity: {
          title: '1인 1역 순번 일정 짜기', tool: 'timer',
          teacher: '"순번표는 한 주마다 한 칸씩 옆 역할로 옮겨 가요. 이번 주 우유를 나른 서윤은 다음 주에 무엇을 맡을까요?" 순번 규칙을 칠판에 적고 한 사람씩 몇 주 차례를 따라가게 한다. "편한 역할을 계속 하고 싶은 사람은 그냥 하게 두면 된다"는 학생에게 "그러면 힘든 역할은 누가 계속 맡게 될까요?"라고 되묻는다. 결석한 날 생기는 빈자리도 미리 규칙으로 정해야 다툼이 없다는 점을 짚는다.',
          task: '가상 학급의 1인 1역 순번표 규칙(한 주에 한 칸씩 옆 역할로)을 따라 한 사람이 맡을 역할 차례를 놓아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '순번표 차례는 칠판 정리→분리배출→우유 나르기→창문 열고 닫기→게시판 관리예요. 1주 차에 우유를 나른 서윤의 5주 역할 차례를 놓으세요.', toolOptions: { title: '서윤의 5주 순번', cards: ['칠판 정리', '게시판 관리', '우유 나르기', '분리배출', '창문 열고 닫기'] }, target: { order: ['우유 나르기', '창문 열고 닫기', '게시판 관리', '칠판 정리', '분리배출'] } },
              { prompt: '순번표 차례는 칠판 정리→분리배출→우유 나르기예요. 1주 차에 분리배출을 맡은 서윤의 3주 역할 차례를 놓으세요.', toolOptions: { cards: ['우유 나르기', '칠판 정리', '분리배출'] }, target: { order: ['분리배출', '우유 나르기', '칠판 정리'] } }),
            IT({ prompt: '같은 순번표에서 1주 차에 게시판을 맡은 하준의 5주 역할 차례를 놓으세요.', toolOptions: { title: '하준의 5주 순번', cards: ROT5.slice().reverse() }, target: { order: ['게시판 관리', '칠판 정리', '분리배출', '우유 나르기', '창문 열고 닫기'] } },
              { prompt: '칠판 정리→분리배출→우유 나르기 순번에서 1주 차에 우유를 나른 하준의 3주 차례를 놓으세요.', toolOptions: { cards: ['칠판 정리', '분리배출', '우유 나르기'] }, target: { order: ['우유 나르기', '칠판 정리', '분리배출'] } }),
            IT({ prompt: '역할을 맡은 사람이 결석했을 때의 약속을 차례로 놓으세요.', toolOptions: { title: '결석한 날의 약속', cards: ['돌아온 날 하루 더 맡는다', '순번표의 다음 사람이 하루 대신 맡는다', '결석을 담당 부장에게 알린다'] }, target: { order: ['결석을 담당 부장에게 알린다', '순번표의 다음 사람이 하루 대신 맡는다', '돌아온 날 하루 더 맡는다'] } },
              null, null, { conclude: '규칙대로 한 칸씩 돌아가면 누구나 모든 역할을 한 번씩 맡아요. 빈자리 규칙도 미리 정해 두면 공정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '서윤의 순번을 완성해요.', columns: ['주', '서윤의 역할'], cells: [['1주', '우유 나르기'], ['2주', ''], ['3주', '']], answer: '창문 열고 닫기, 게시판 관리' }] },
      }),
      M('activity.order', {
        title: '학급 회의 절차 차례 놓기', method: '회의 절차 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '회의 단계 카드 5장(개회·안건 상정·토의·표결·폐회)을 차례로 놓는다.', base: '회의 단계 카드 7장을 차례로 놓는다(넣는 대로 맞는지 알려 주지 않는다).', challenge: '단계마다 사회자가 할 말 카드를 그 단계 눈금에 잇는다.' },
        activity: {
          title: '학급 회의 절차 차례 놓기', tool: 'timeline',
          teacher: '"표결 다음에는 무엇을 해야 결정이 반 전체에 알려질까요?" 단계 카드를 놓은 뒤 앞 단계가 빠지면 어떤 일이 생기는지 하나씩 짚는다. "제안 설명은 시간 낭비"라는 학생에게 "까닭을 모른 채 손을 들면 무엇을 기준으로 고를까요?"라고 되묻는다. 사회자가 단계마다 하는 말을 소리 내어 읽어 보게 한다.',
          task: '학급 회의 단계 카드를 개회부터 폐회까지 차례로 놓고, 단계마다 사회자가 할 말을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('학급 회의 단계 카드를 차례대로 놓으세요.', STEPS7, { axis: ['처음', '끝'] }),
              OB('학급 회의 단계 카드 다섯 장을 차례대로 놓으세요.', pickCards(STEPS7, ['o1', 'o2', 'o4', 'o5', 'o7']), { axis: ['처음', '끝'] })),
            IT({ prompt: '단계마다 사회자가 할 말 카드를 이으세요.', toolOptions: { mode: 'match', axis: ['처음', '끝'], slots: [{ id: 't1', label: '안건 상정' }, { id: 't2', label: '토의' }, { id: 't3', label: '표결' }, { id: 't4', label: '결과 발표' }], cards: [
              { id: 'k1', text: '"오늘 안건은 쉬는 시간 소음입니다"' }, { id: 'k2', text: '"다른 의견 있으신 분 말씀해 주세요"' },
              { id: 'k3', text: '"찬성하는 분 손을 들어 주세요"' }, { id: 'k4', text: '"찬성 18, 반대 9로 통과되었습니다"' }, { id: 'k5', text: '"제 생각대로 정하겠습니다"' }] }, target: { match: { t1: 'k1', t2: 'k2', t3: 'k3', t4: 'k4' } } },
              { prompt: '세 단계에 사회자가 할 말 카드를 이으세요.', toolOptions: { slots: [{ id: 't1', label: '안건 상정' }, { id: 't3', label: '표결' }, { id: 't4', label: '결과 발표' }], cards: [{ id: 'k1', text: '"오늘 안건은 쉬는 시간 소음입니다"' }, { id: 'k3', text: '"찬성하는 분 손을 들어 주세요"' }, { id: 'k4', text: '"찬성 18, 반대 9로 통과되었습니다"' }] }, target: { match: { t1: 'k1', t3: 'k3', t4: 'k4' } } }),
            IT(OB('토의 단계 안에서 일어날 일을 차례대로 놓으세요.', [{ id: 'u1', text: '제안한 사람이 까닭 말하기' }, { id: 'u2', text: '질문과 다른 의견 듣기' }, { id: 'u3', text: '고친 안 정리하기' }], { axis: ['처음', '끝'] }, [{ id: 'u4', text: '사회자 혼자 결론 내기' }]),
              null, null, { conclude: '개회부터 폐회까지 차례를 지키면 모두가 까닭을 듣고 고르고, 정한 일을 함께 알게 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 회의 단계를 써요.', text: '개회 → 안건 상정 → 제안 설명 → ___ → 표결 → 결과 발표 → 폐회', answer: '토의' }] },
      }),
      M('activity.minutes', {
        title: '모의 회의 회의록 쓰기', method: '회의록 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '회의록 틀("안건: ___ / 결과: ___")을 채우고 기준 2개(안건·결과)를 점검한다.', base: '모의 회의 내용을 보고 회의록을 세 문장 이상으로 쓰고 기준 3개(안건·표결 결과·실행 계획)를 점검한다.', challenge: '소수 의견까지 넣어 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '모의 회의 회의록 쓰기', tool: 'rubric-writing',
          teacher: '"회의록을 다음 주에 읽는 친구는 무엇을 가장 먼저 알고 싶을까요?" 모의 회의 내용을 함께 읽고 안건·결과·실행 계획을 찾게 한 뒤 회의록을 쓰게 한다. "다수결이면 소수 의견은 적지 않아도 된다"는 학생에게 "다음에 같은 문제가 생기면 그때 반대한 까닭이 도움이 되지 않을까요?"라고 되묻는다. 회의록에는 발언한 친구의 실명 대신 \'한 학생\'으로 적게 한다.',
          task: '가상 학급의 모의 회의 내용을 읽고, 안건·표결 결과·실행 계획·소수 의견이 드러나는 회의록을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('모의 회의 ①의 회의록을 쓰세요.', { topic: '모의 회의 ①: 안건 \'쉬는 시간 소음 줄이기\'. 제안 \'복도에서는 작은 목소리\'. 표결 찬성 20, 반대 6으로 통과. 생활부가 다음 주 월요일 안내문을 붙이기로 함. 반대한 학생들은 \'교실 안 소음이 더 문제\'라고 함.', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 6, title: '회의록 ①', placeholder: '안건: …' }, ['안건을 썼다', '표결 결과를 수로 썼다', '누가 언제 실행할지 썼다']),
              { prompt: '회의록 틀을 채워 모의 회의 ①의 회의록을 쓰세요.', toolOptions: { starter: '안건: ___. 결과: ___.', minSentences: 2 }, target: { selfCheck: ['안건을 썼다', '표결 결과를 썼다'] } },
              { prompt: '소수 의견까지 넣어 모의 회의 ①의 회의록을 쓰세요.', target: { selfCheck: ['안건을 썼다', '표결 결과를 수로 썼다', '누가 언제 실행할지 썼다', '소수 의견을 적었다'] } }),
            IT(RW('모의 회의 ②의 회의록을 쓰세요.', { topic: '모의 회의 ②: 안건 \'사물함 정리 날 정하기\'. 제안 \'매주 금요일 종례 5분\'과 \'한 달에 한 번\'. 표결 매주 금요일 17, 한 달에 한 번 9. 환경부가 금요일마다 알리기로 함. 소수는 \'매주는 부담\'이라고 함.', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 6, title: '회의록 ②', placeholder: '안건: …' }, ['안건을 썼다', '표결 결과를 수로 썼다', '누가 언제 실행할지 썼다']),
              { prompt: '회의록 틀을 채워 모의 회의 ②의 회의록을 쓰세요.', toolOptions: { starter: '안건: ___. 결과: ___.', minSentences: 2 }, target: { selfCheck: ['안건을 썼다', '표결 결과를 썼다'] } },
              { prompt: '소수 의견까지 넣어 모의 회의 ②의 회의록을 쓰세요.', target: { selfCheck: ['안건을 썼다', '표결 결과를 수로 썼다', '누가 언제 실행할지 썼다', '소수 의견을 적었다'] } }),
            IT(RW('모의 회의 ③의 결과를 반 게시판에 붙일 짧은 알림으로 쓰세요.', { topic: '모의 회의 ③: 안건 \'분리배출 당번\'. 결과 \'모둠별로 일주일씩 돌아가며 맡기\'(찬성 22, 반대 4). 1모둠부터 시작. 반 게시판에 붙일 알림을 2~3문장으로.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 3, title: '회의 결과 알림', placeholder: '알림: …' }, ['무엇이 정해졌는지 썼다', '언제부터 누가 하는지 썼다', '표결 결과를 수로 썼다']),
              { prompt: '틀을 채워 모의 회의 ③의 결과 알림을 쓰세요.', toolOptions: { starter: '학급 회의에서 ___ 정했습니다. ___부터 시작합니다.', minSentences: 2 }, target: { selfCheck: ['무엇이 정해졌는지 썼다', '언제부터 누가 하는지 썼다'] } },
              null, { conclude: '좋은 회의록은 안건·결과·실행 계획·소수 의견을 남겨, 회의에 없던 사람도 알 수 있게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '회의록에 꼭 들어갈 것에 표시해요.', options: ['안건', '표결 결과', '실행 계획', '소수 의견'] }] },
      }),

      // ---- 정리 ----
      M('wrap.real', {
        title: '실제 학급 회의 짧게 진행', method: '실제 학급 회의 진행', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 사회를 보고 5분 회의를 연 뒤 절차 점검표를 표시한다.', base: '학생 사회자가 5분 회의를 열고 절차 점검표를 표시한다.', challenge: '표결 뒤 실행 계획(누가·언제)까지 정하고 점검표와 스스로 점검 칸을 표시한다.' },
        wrap: {
          teacher: '"오늘 안건은 한 가지, \'다음 주 쉬는 시간 소음 약속\'이에요. 사회자는 오늘 배운 차례대로 5분 안에 회의를 진행해 주세요." 교사가 옆에서 차례 카드를 들어 보이며 돕고, 시간 지킴이가 1분 전에 신호를 준다. "시간이 짧으니 토의는 건너뛰자"는 말이 나오면 "한 사람씩 한 문장이면 1분이면 돼요"라고 짚는다. 회의가 끝나면 절차 점검표를 함께 표시한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '5분 학급 회의', timeUnit: 'min', labels: ['회의', '정리'], plan: { work: 3, rest: 0, rounds: 1 }, safety: ['개회와 안건 상정을 했다', '제안 설명과 토의를 했다', '표결하고 결과를 발표했다', '소수 의견을 기록했다'] },
              prompt: '회의 5분·정리 2분으로 타이머를 맞추고, 회의를 마친 뒤 절차 점검표를 모두 표시해요.', target: { plan: { work: 5, rest: 2, rounds: 1 }, safety: true }, difficulty: 0.2 },
            null,
            { prompt: '회의 5분·정리 2분으로 맞추고, 점검표와 함께 실행 계획 칸을 표시해요.', target: { plan: { work: 5, rest: 2, rounds: 1 }, safety: true, selfCheck: ['누가 실행할지 정했다', '언제부터 할지 정했다'] } }),
            { type: 'choice', prompt: '회의 시간이 짧을 때 가장 알맞은 진행은?', options: ['토의를 건너뛰고 바로 표결한다', '한 사람씩 한 문장으로 짧게 토의한 뒤 표결한다', '사회자가 혼자 정한다'], answer: 1, difficulty: 0.2, explain: '짧아도 까닭을 듣는 단계는 남겨야 해요.' },
          ],
        },
        worksheet: {
          title: '학급 회의 결과',
          items: [
            { type: 'table', prompt: '오늘 회의 결과를 적어요.', columns: ['칸', '내용'], cells: [['안건', ''], ['결과(표 수)', ''], ['실행(누가·언제)', '']], answer: '학급 회의 결과' },
            { type: 'short', prompt: '오늘 회의에서 나온 소수 의견 하나를 적어요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 7분 안에 회의 5분·정리 2분으로 줄여 진행한다(체계도의 \'실제 학급 회의\'를 정리 시간 안에 맞춤). 안건은 반 전체가 바로 정할 수 있는 작은 것으로 고른다.',
      }),
      M('wrap.reflect', {
        title: '회의 돌아보기 글', method: '회의 돌아보기 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("잘된 점은 ___. 고칠 점은 ___.")을 채우고 기준 2개를 점검한다.', base: '잘된 점·고칠 점을 두 문장씩(네 문장) 쓰고 기준 3개를 점검한다.', challenge: '다음 회의에 바꿀 제안 한 가지까지 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"오늘 회의에서 차례가 잘 지켜진 단계와 빠질 뻔한 단계는 무엇이었나요?" 회의 단계를 떠올리며 잘된 점과 고칠 점을 두 문장씩 쓰게 한다. "고칠 점을 쓰면 사회자 탓을 하는 것"이라는 학생에게 고칠 점은 사람이 아니라 진행 방법을 쓰는 것이라고 말해 준다. 친구 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 학급 회의(또는 모의 회의)에서 잘된 점 두 문장, 고칠 점 두 문장을 쓰세요.', minChars: 40, maxChars: 240, minSentences: 4, maxSentences: 5, title: '회의 돌아보기', placeholder: '잘된 점은…' },
              prompt: '회의 돌아보기 글을 네 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['잘된 점을 회의 단계와 이어 썼다', '고칠 점을 사람이 아니라 방법으로 썼다', '친구 이름을 쓰지 않았다'] }, difficulty: 0.3 },
            { prompt: '틀을 채워 회의 돌아보기 글을 쓰고 기준표에 표시해요.', toolOptions: { starter: '잘된 점은 ___. 고칠 점은 ___.', minSentences: 2 }, target: { selfCheck: ['잘된 점을 썼다', '고칠 점을 방법으로 썼다'] } },
            { prompt: '다음 회의에 바꿀 제안까지 넣어 돌아보기 글을 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 6 }, target: { selfCheck: ['잘된 점을 회의 단계와 이어 썼다', '고칠 점을 사람이 아니라 방법으로 썼다', '친구 이름을 쓰지 않았다', '다음 회의에 바꿀 제안을 썼다'] } }),
            { type: 'choice', prompt: '회의 돌아보기에서 \'고칠 점\'으로 가장 알맞은 문장은?', options: ['사회자가 말을 못 했다', '토의 시간이 짧아 반대 까닭을 다 못 들었다', '회의가 재미없었다'], answer: 1, difficulty: 0.2, explain: '고칠 점은 사람이 아니라 진행 방법을 짚어요.' },
          ],
        },
        worksheet: {
          title: '회의 돌아보기',
          items: [
            { type: 'short', prompt: '오늘 회의에서 잘된 점 하나와 고칠 점 하나를 써요.' },
            { type: 'short', prompt: '다음 회의에 바꿀 제안 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 탐구 질문 만들기와 자료 모으기 (auto.m.g7-topic) ====
  {
    const M = MK('g7-topic', [7]);
    const SLEEP = [['6시간 미만', 4], ['6~7시간', 9], ['7~8시간', 11], ['8~9시간', 5], ['9시간 이상', 1]];
    // 자료를 모으는 방법 고르기
    const WHICH = { text: '가상 학생 다온의 탐구 질문은 \'우리 학교 1학년은 평일에 몇 시간쯤 잘까?\'이다. 자료를 어떻게 모을까?', ask: '다온은 어떤 방법을 고를까?', motif: 'moon', choices: [
      { id: 'search', text: '인터넷 검색 결과 한 개를 그대로 옮긴다', result: '전국 이야기라 우리 학교 1학년과 맞는지 알 수 없다.', impact: [{ who: '다온', text: '질문에 답하지 못한다', tone: -1 }], why: '질문의 대상이 \'우리 학교 1학년\'이면 그 사람들에게서 자료를 모아야 해요.', end: '다른 대상의 자료라 질문에 답하지 못했어요.',
        next: { text: '선생님이 "이 자료는 누구를 조사한 걸까?"라고 묻는다.', choices: [
          { id: 'keep', text: '"비슷하겠죠"라며 그대로 쓴다', result: '결론을 믿기 어렵다.', impact: [{ who: '듣는 친구들', text: '결론을 믿지 못한다', tone: -1 }] },
          { id: 'change', text: '우리 학교 1학년에게 묻는 방법으로 바꾼다', result: '질문과 대상이 맞는 자료를 모으기로 한다.', impact: [{ who: '다온', text: '알맞은 자료를 얻는다', tone: 1 }] }] } },
      { id: 'survey', text: '1학년 친구들에게 짧은 익명 설문을 한다', result: '여러 명의 답을 모아 비교할 수 있다.', impact: [{ who: '다온', text: '질문에 맞는 자료를 얻는다', tone: 1 }], end: '질문에 맞는 대상에게 설문했어요.',
        next: { text: '설문지에 이름과 반을 쓰는 칸을 넣을지 고민한다.', choices: [
          { id: 'name', text: '이름·반 칸을 넣어 누가 적게 자는지 알아 둔다', result: '친구들이 솔직하게 답하기 꺼린다.', impact: [{ who: '응답한 친구들', text: '사생활이 드러난다', tone: -1 }], why: '탐구에 필요 없는 개인정보는 묻지 않아요.' },
          { id: 'anon', text: '이름 없이 쓰고 \'답하기 싫으면 안 해도 된다\'고 적는다', result: '친구들이 편하게 답한다.', impact: [{ who: '응답한 친구들', text: '안심하고 답한다', tone: 1 }] }] } },
      { id: 'guess', text: '내 생각으로 \'7시간쯤\'이라고 쓴다', result: '자료 없이 짐작만 남는다.', impact: [{ who: '다온', text: '탐구가 되지 않는다', tone: -1 }], why: '짐작은 탐구의 출발점일 뿐 결론이 아니에요.', ending: '자료 없이 짐작만 남았어요.' }] };
    const WHICH_R = [{ id: 'r1', text: '질문의 대상에게서 자료를 모아야 질문에 답할 수 있다' }, { id: 'r2', text: '검색 결과 하나면 충분하다', why: '누구를 조사한 자료인지 먼저 봐요.' }];
    const Q = [
      { id: 'q1', text: '우리 학교 개교 연도는?', to: '답이 하나' }, { id: 'q2', text: '쉬는 시간 운동이 오후 집중에 어떤 영향을 줄까?', to: '탐구할 수 있음' },
      { id: 'q3', text: '1학년 교실은 몇 층에 있을까?', to: '답이 하나' }, { id: 'q4', text: '우리 반 친구들은 어떤 까닭으로 급식을 남길까?', to: '탐구할 수 있음' },
      { id: 'q5', text: '물이 끓는 온도는?', to: '답이 하나' }, { id: 'q6', text: '교실 화분 위치에 따라 잎 색이 어떻게 달라질까?', to: '탐구할 수 있음' },
    ];
    const METHOD = [['관찰: ___', '직접 보고 일어난 일을 기록한다'], ['설문: ___', '여러 사람에게 같은 질문을 묻는다'], ['면담: ___', '한 사람에게 깊이 묻고 듣는다'], ['문헌 조사: ___', '책·자료에서 이미 밝혀진 것을 찾는다']];

    ALL.push(
      // ---- 도입 ----
      M('intro.curious', {
        title: '관심사에서 궁금한 점 뻗기', method: '관심사 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 3개(왜·어떻게·얼마나)에 궁금한 점 카드를 하나씩 붙여 보인다.', base: '가지 5개(왜·어떻게·얼마나·누가·어디서)로 궁금한 점을 뻗어 말한다.', challenge: '가지마다 궁금한 점을 질문 문장으로 바꿔 말한다.' },
        intro: {
          teacher: '"가상 학생 서윤의 관심사는 \'반려식물\'이에요. 서윤이 궁금한 것을 \'왜·어떻게·얼마나\' 가지로 뻗으면 무엇이 나올까요?" 시연 단추로 궁금한 점 카드가 가지에 붙는 모습을 보인다. "나는 관심사가 없다"는 말이 나오면 "요즘 자주 찾아보거나 친구와 이야기하는 것이 무엇인가요?"라고 되묻는다. 관심사는 거창하지 않아도 탐구의 출발점이 된다는 점을 짚는다.',
          student: '가상 학생 서윤의 관심사에서 궁금한 점을 가지로 뻗어 보고, 내 관심사 하나도 떠올려 짝에게 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '반려식물', slots: ['왜', '어떻게', '얼마나'], cards: [{ id: 'c1', text: '왜 잎 끝이 노래질까' }, { id: 'c2', text: '어떻게 물을 주면 좋을까' }, { id: 'c3', text: '햇빛이 얼마나 필요할까' }] }, sequence: [{ at: { c1: 0 } }, { at: { c1: 0, c2: 1 } }, { at: { c1: 0, c2: 1, c3: 2 } }] },
          art: { draw: 'a paper-cut potted plant in the center of a paper mind map with branches holding small question-mark cards', banner: '내 관심사에서 무엇이 궁금할까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      M('intro.which', {
        title: '자료 모으는 방법 갈림길', method: '자료 모으는 방법 고르기 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림길만 함께 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 방법을 고른 근거를 고른다.', challenge: '두 길을 견주고 근거 2개(질문의 대상·개인정보)를 말로 설명한다.' },
        intro: {
          teacher: '"\'우리 학교 1학년은 몇 시간 잘까?\'에 답하려면 누구에게서 자료를 얻어야 할까요?" 시연 단추로 설문 길을 따라가며 이름 칸을 넣을지 고르는 장면까지 보인다. "검색하면 다 나온다"는 말이 나오면 "검색 결과는 누구를 조사한 것일까요?"라고 되묻는다. 방법은 질문의 대상과 맞아야 한다는 점을 짚는다.',
          student: '가상 학생 다온의 탐구 질문에 맞는 자료 모으는 방법을 길을 따라 골라 보고, 왜 그 방법이 맞는지 생각해요.',
          demo: DEMO_DIL('자료를 어떻게 모을까', WHICH, [['survey', 'anon']], WHICH_R),
          art: { draw: 'a paper-cut crossroads sign with three arrows labeled by small icons: a magnifying glass, a clipboard survey and a thought bubble, a student standing before it', banner: '어떤 방법으로 자료를 모을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.good', {
        title: '좋은 탐구 질문 가리기', method: '좋은 탐구 질문 가리기', tool: 'sortboard', minutes: 16,
        levels: { easy: '질문 카드 4장을 두 칸에 나누고, 틀리면 바로 되돌아온다.', base: '질문 카드 6장을 \'답이 하나\'·\'탐구할 수 있음\'으로 나눈다.', challenge: '고쳐 쓴 질문 카드를 \'잘 고쳤다\'·\'아직 답이 하나\'로 가려내는 문항까지 푼다.' },
        activity: {
          title: '좋은 탐구 질문 가리기', tool: 'sortboard',
          teacher: '"\'우리 학교 개교 연도는?\'은 검색하면 한 번에 끝나요. \'쉬는 시간 운동이 오후 집중에 어떤 영향을 줄까?\'는 어떤가요?" 카드를 놓을 때마다 그 질문에 답하려면 무엇을 조사해야 하는지 묻는다. "검색하면 바로 답이 나오는 질문이 좋은 질문"이라는 학생에게 "답을 찾은 뒤에 더 알아낼 것이 남아 있나요?"라고 되묻는다. 탐구 질문은 자료를 모아 따져 봐야 답이 나오는 질문이라는 점을 짚는다.',
          task: '질문 카드를 \'답이 하나로 정해진 질문\'과 \'자료를 모아 탐구할 수 있는 질문\'으로 나누어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('질문 카드를 두 칸에 나누세요.', ['답이 하나', '탐구할 수 있음'], Q),
              BB('질문 카드 4장을 두 칸에 나누세요.', ['답이 하나', '탐구할 수 있음'], Q.slice(0, 4))),
            IT(BB('반려식물에 관한 질문을 두 칸에 나누세요.', ['답이 하나', '탐구할 수 있음'], [
              { id: 'p1', text: '선인장은 어느 대륙에서 왔을까?', to: '답이 하나' }, { id: 'p2', text: '물 주는 간격에 따라 잎 수가 어떻게 달라질까?', to: '탐구할 수 있음' },
              { id: 'p3', text: '우리 반 화분은 모두 몇 개일까?', to: '답이 하나' }, { id: 'p4', text: '친구들은 왜 식물 기르기를 그만둘까?', to: '탐구할 수 있음' }]),
              BB('반려식물 질문 카드 4장을 두 칸에 나누세요.', ['답이 하나', '탐구할 수 있음'], [
                { id: 'p1', text: '선인장은 어느 대륙에서 왔을까?', to: '답이 하나' }, { id: 'p2', text: '물 주는 간격에 따라 잎 수가 어떻게 달라질까?', to: '탐구할 수 있음' },
                { id: 'p3', text: '우리 반 화분은 모두 몇 개일까?', to: '답이 하나' }, { id: 'p4', text: '친구들은 왜 식물 기르기를 그만둘까?', to: '탐구할 수 있음' }])),
            IT(BB('\'급식 메뉴는 몇 가지?\'를 고쳐 쓴 질문을 가려 나누세요.', ['잘 고쳤다', '아직 답이 하나'], [
              { id: 'r1', text: '메뉴 종류에 따라 잔반량이 어떻게 달라질까?', to: '잘 고쳤다' }, { id: 'r2', text: '오늘 급식 메뉴는 무엇일까?', to: '아직 답이 하나' },
              { id: 'r3', text: '1학년이 좋아하는 반찬과 그 까닭은 무엇일까?', to: '잘 고쳤다' }, { id: 'r4', text: '급식실은 몇 시에 열까?', to: '아직 답이 하나' }]),
              null, null, { conclude: '좋은 탐구 질문은 검색 한 번으로 끝나지 않고, 자료를 모아 따져 봐야 답이 나와요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'우리 학교 개교 연도는?\'을 탐구할 수 있는 질문으로 고쳐 써요.' }],
          easy: [{ type: 'choice', prompt: '탐구할 수 있는 질문에 ○ 해요.', options: ['물이 끓는 온도는?', '쉬는 시간 운동이 집중에 주는 영향은?'], answer: '쉬는 시간 운동이 집중에 주는 영향은?' }] },
      }),
      M('activity.write', {
        title: '내 탐구 질문 쓰고 점검', method: '내 탐구 질문 쓰고 점검', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '질문 틀("___에 따라 ___이(가) 어떻게 달라질까?")을 채워 쓰고 기준 2개를 점검한다.', base: '탐구 질문 하나를 쓰고 기준 3개(조사할 수 있음·답이 열려 있음·범위가 정해짐)를 점검한다.', challenge: '마지막 문항에서 두 질문을 견주어 더 좋은 쪽과 까닭을 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '내 탐구 질문 쓰고 점검', tool: 'rubric-writing',
          teacher: '"\'수면은 중요할까?\'와 \'우리 반 친구들의 잠드는 시각은 아침 기분과 어떤 관계가 있을까?\' 가운데 한 달 안에 조사할 수 있는 질문은 어느 쪽일까요?" 두 질문을 견준 뒤 질문을 쓰게 하고 기준표를 하나씩 표시하게 한다. "질문은 크고 멋있어야 한다"는 학생에게 "중학생이 한 달 동안 직접 모을 수 있는 자료로 답할 수 있나요?"라고 되묻는다. 관심사는 개인 일이 드러나지 않는 것으로 고르게 한다.',
          task: '관심사에서 출발해 답이 하나로 정해지지 않은 탐구 질문을 쓰고, 기준표로 조사할 수 있는지 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('가상 학생 서윤의 관심사 \'청소년 수면\'으로 탐구 질문 하나를 쓰세요.', { topic: '관심사 \'청소년 수면\'으로, 자료를 모아 답할 수 있는 탐구 질문 한 문장을 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '탐구 질문 ①', placeholder: '예: …에 따라 …이 어떻게 달라질까?' }, ['직접 자료를 모아 답할 수 있다', '답이 하나로 정해져 있지 않다', '누구·어디를 조사할지 드러난다']),
              { prompt: '질문 틀을 채워 \'청소년 수면\' 탐구 질문을 쓰세요.', toolOptions: { starter: '___에 따라 ___이(가) 어떻게 달라질까?' }, target: { selfCheck: ['직접 자료를 모아 답할 수 있다', '답이 하나로 정해져 있지 않다'] } }),
            IT(RW('내 관심사 하나로 탐구 질문을 쓰세요.', { topic: '내 관심사 하나로 탐구 질문 한 문장을 쓰세요(개인 일이 드러나지 않는 관심사로).', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '탐구 질문 ②', placeholder: '내 관심사: … / 질문: …' }, ['직접 자료를 모아 답할 수 있다', '답이 하나로 정해져 있지 않다', '누구·어디를 조사할지 드러난다']),
              { prompt: '질문 틀을 채워 내 관심사 탐구 질문을 쓰세요.', toolOptions: { starter: '___에 따라 ___이(가) 어떻게 달라질까?' }, target: { selfCheck: ['직접 자료를 모아 답할 수 있다', '답이 하나로 정해져 있지 않다'] } }),
            IT(RW('\'수면은 중요할까?\'와 \'우리 반 친구들의 잠드는 시각과 아침 기분은 어떤 관계일까?\'를 견주어, 더 좋은 탐구 질문과 그 까닭을 쓰세요.', { topic: '두 질문 가운데 더 좋은 탐구 질문을 고르고 까닭을 두 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 3, title: '두 질문 견주기' }, ['더 좋은 질문을 골랐다', '조사할 수 있는지로 까닭을 썼다', '범위가 정해졌는지로 까닭을 썼다']),
              { prompt: '두 질문 가운데 더 좋은 탐구 질문을 고르고 까닭을 쓰세요.', toolOptions: { starter: '더 좋은 질문은 ___이다. 왜냐하면 ___.', minSentences: 1 }, target: { selfCheck: ['더 좋은 질문을 골랐다', '까닭을 썼다'] } },
              { prompt: '두 질문을 견주어 더 좋은 질문과 까닭을 쓰고, 덜 좋은 질문을 고칠 방법까지 쓰세요.', toolOptions: { maxSentences: 4 }, target: { selfCheck: ['더 좋은 질문을 골랐다', '조사할 수 있는지로 까닭을 썼다', '범위가 정해졌는지로 까닭을 썼다', '덜 좋은 질문을 고칠 방법을 썼다'] } },
              { conclude: '좋은 탐구 질문은 직접 조사할 수 있고, 답이 열려 있고, 누구·어디를 볼지 정해져 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 탐구 질문 하나를 다시 깨끗하게 옮겨 써요.' }] },
      }),
      M('activity.method', {
        title: '자료 수집 방법과 특징 잇기', method: '방법과 특징 잇기', tool: 'wordcards', minutes: 16,
        levels: { easy: '방법 2개(관찰·설문)의 빈칸에 특징 카드를 넣는다(바로 알려 준다).', base: '방법 4개(관찰·설문·면담·문헌 조사)의 빈칸에 특징 카드를 넣고, 질문마다 알맞은 방법을 나눈다.', challenge: '조사할 때 지킬 약속 카드만 골라 담는 문항까지 함정 카드와 함께 푼다.' },
        activity: {
          title: '자료 수집 방법과 특징 잇기', tool: 'wordcards',
          teacher: '"한 사람의 생각을 깊이 듣고 싶을 때와 여러 사람의 생각을 견주고 싶을 때, 방법은 같을까요?" 방법마다 특징 카드를 넣은 뒤 질문마다 어울리는 방법을 고르게 한다. "설문이 제일 정확하다"는 학생에게 "식물 잎 색이 바뀌는 것을 설문으로 알 수 있을까요?"라고 되묻는다. 어떤 방법이든 상대의 동의를 얻고 개인정보를 적지 않는다는 약속을 함께 짚는다.',
          task: '관찰·설문·면담·문헌 조사의 특징 카드를 잇고, 질문마다 알맞은 방법을 고르고, 조사 약속을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('방법마다 알맞은 특징 카드를 넣으세요.', METHOD, ['내 짐작을 그대로 쓴다']),
              FB('관찰과 설문의 빈칸에 알맞은 특징 카드를 넣으세요.', METHOD.slice(0, 2), [])),
            IT(SB('탐구 질문마다 알맞은 방법 칸에 나누세요.', ['관찰', '설문', '면담', '문헌 조사'], [
              { id: 'm1', text: '화분 위치에 따른 잎 색 변화', to: '관찰' }, { id: 'm2', text: '1학년이 급식을 남기는 까닭', to: '설문' },
              { id: 'm3', text: '영양 선생님이 메뉴를 정하는 기준', to: '면담' }, { id: 'm4', text: '식물이 빛을 쓰는 원리', to: '문헌 조사' }]),
              SB('탐구 질문 두 개를 알맞은 방법 칸에 나누세요.', ['관찰', '설문'], [
                { id: 'm1', text: '화분 위치에 따른 잎 색 변화', to: '관찰' }, { id: 'm2', text: '1학년이 급식을 남기는 까닭', to: '설문' }])),
            IT(PB('조사할 때 지킬 약속 카드만 골라 담으세요.', '조사 약속', [
              { id: 'k1', text: '묻기 전에 동의를 구한다', ok: true }, { id: 'k2', text: '이름·연락처는 적지 않는다', ok: true },
              { id: 'k3', text: '찾은 자료의 출처를 적는다', ok: true }, { id: 'k4', text: '마음에 드는 답만 골라 적는다' }]),
              null,
              PB('조사할 때 지킬 약속 카드만 골라 담으세요(함정 카드가 더 섞였어요).', '조사 약속', [
                { id: 'k1', text: '묻기 전에 동의를 구한다', ok: true }, { id: 'k2', text: '이름·연락처는 적지 않는다', ok: true },
                { id: 'k3', text: '찾은 자료의 출처를 적는다', ok: true }, { id: 'k4', text: '마음에 드는 답만 골라 적는다' },
                { id: 'k5', text: '답하기 싫다면 묻지 않는다', ok: true }, { id: 'k6', text: '친구 답을 다른 반에 알려 준다' }]),
              { conclude: '방법은 질문에 맞게 고르고, 어떤 방법이든 동의·개인정보 보호·출처 적기 약속을 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '방법마다 특징을 써요.', columns: ['방법', '특징'], cells: [['관찰', ''], ['면담', ''], ['문헌 조사', '']], answer: '직접 보고 기록, 한 사람에게 깊이 묻기, 책·자료에서 찾기' }] },
      }),
      M('activity.survey', {
        title: '가상 설문 결과 막대그래프', method: '간단 설문 결과 그래프', tool: 'chart', minutes: 16,
        levels: { easy: '설문 항목 3개의 막대를 표를 보고 그린다.', base: '설문 항목 5개의 막대를 그린다.', challenge: '그래프를 읽고 자료가 말하는 만큼만 쓴 해석 한 문장을 고른다.' },
        activity: {
          title: '가상 설문 결과 막대그래프', tool: 'chart',
          teacher: '"30명에게 물은 수면 시간 표를 막대로 바꾸면 무엇이 한눈에 보일까요?" 표를 보고 막대를 그린 뒤 가장 긴 막대와 짧은 막대를 견주게 한다. "그래프만 그리면 탐구 끝"이라는 학생에게 "이 그래프로 우리 반 친구들이 피곤한 까닭까지 알 수 있을까요?"라고 되묻는다. 자료는 수업용 가상 설문이며, 학생의 실제 수면 시간은 묻지 않는다.',
          task: '가상 학급 30명의 수면 시간 설문 표를 막대그래프로 나타내고, 그래프가 말하는 만큼만 해석해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '가상 설문 표를 보고 수면 시간 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '평일 수면 시간(가상 학급 30명 설문)', unit: '명', xLabel: '수면 시간', yLabel: '학생 수', data: SLEEP }, target: { build: true } },
              { prompt: '가상 설문 표의 세 항목으로 막대그래프를 완성하세요.', toolOptions: { data: SLEEP.slice(0, 3) } }),
            IT({ prompt: '가상 설문 \'아침밥을 먹고 오는 날\' 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '한 주에 아침밥을 먹고 오는 날(가상 학급 30명)', unit: '명', xLabel: '먹은 날 수', yLabel: '학생 수', data: [['0일', 3], ['1~2일', 6], ['3~4일', 8], ['5일', 13]], given: [0] }, target: { build: true } },
              { prompt: '가상 설문 표의 세 항목으로 아침밥 막대그래프를 완성하세요.', toolOptions: { data: [['0일', 3], ['1~2일', 6], ['3~4일', 8]], given: [0] } }),
            IT({ prompt: '수면 시간 그래프에서 응답자가 가장 많은 항목을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '평일 수면 시간(가상 학급 30명 설문)', unit: '명', xLabel: '수면 시간', yLabel: '학생 수', data: SLEEP, question: '응답자가 가장 많은 항목은?', choices: SLEEP.map((d) => d[0]) }, target: { pick: 2 } },
              null,
              { prompt: '수면 시간 그래프가 말하는 만큼만 쓴 해석을 고르세요.', toolOptions: { question: '자료가 말하는 만큼만 쓴 해석은?', choices: ['모든 중학생은 7~8시간 잔다', '이 가상 학급에서는 7~8시간이라고 답한 학생이 가장 많다', '6시간 미만으로 자면 성적이 떨어진다'] }, target: { pick: 1 } },
              { conclude: '그래프는 누구에게 물었는지 안에서만 말해요. 그 밖의 사람이나 까닭까지 넘겨 말하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '수면 시간 그래프를 보고 자료가 말하는 만큼만 해석 한 문장을 써요.' }] },
        notes: '설문 자료는 가상 학급이다. 학생 본인의 수면 시간·아침 식사 여부를 묻거나 걷지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.ask', {
        title: '동의 구하고 짝 면담하기', method: '짝 면담 실습', tool: 'timer', minutes: 7,
        levels: { easy: '면담 3분으로 타이머를 맞추고 질문 2개를 해 본 뒤 기록판에 한 질문 수를 적는다.', base: '면담 약속을 확인하고 질문 3개를 해 본 뒤 기록판에 한 질문 수·꼬리 질문 수를 적는다.', challenge: '꼬리 질문을 하나 이상 더한 뒤 기록판을 적는다.' },
        wrap: {
          teacher: '"짝에게 면담을 시작하기 전에 꼭 먼저 해야 할 말은 무엇일까요?" 동의를 구하는 말을 함께 연습한 뒤, 짝의 관심사 주제(예: 좋아하는 운동·자주 보는 영상 갈래)로 3분 면담을 하게 한다. "면담이니까 무엇이든 물어봐도 된다"는 학생에게 "가족 일이나 성적처럼 답하기 곤란한 질문을 받으면 어떨까요?"라고 되묻는다. 답의 내용은 활동지에만 적고 발표시키지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝 면담 3분', timeUnit: 'min', labels: ['면담', '바꾸기'], plan: { work: 1, rest: 0, rounds: 1 }, safety: ['면담 전에 동의를 구했다', '답하기 싫은 질문은 넘어가도 된다고 말했다', '가족·성적처럼 곤란한 질문은 하지 않았다'], fields: [{ label: '한 질문 수', unit: '개' }, { label: '꼬리 질문 수', unit: '개' }] },
              prompt: '면담 3분으로 타이머를 맞추고, 면담 약속을 확인한 뒤 해 보고, 기록판 두 칸을 적어요.', target: { plan: { work: 3 }, safety: true, records: true }, difficulty: 0.2 },
            { prompt: '면담 3분으로 맞추고 약속을 확인한 뒤, 한 질문 수를 적어요.', toolOptions: { fields: [{ label: '한 질문 수', unit: '개' }] } }),
            { type: 'choice', prompt: '면담을 시작할 때 가장 먼저 할 말로 알맞은 것은?', options: ['"이름이랑 연락처부터 말해 줘"', '"관심사에 대해 3분만 물어봐도 될까?"', '"빨리 대답해"'], answer: 1, difficulty: 0.15, explain: '면담은 동의를 구하는 말로 시작해요.' },
          ],
        },
        worksheet: {
          title: '짝 면담 기록',
          items: [
            { type: 'table', prompt: '내가 한 질문과 짝의 답을 짧게 적어요. (걷지 않아요.)', columns: ['질문', '답(요약)'], cells: [['', ''], ['', ''], ['', '']], answer: '면담 기록' },
            { type: 'short', prompt: '꼬리 질문 하나를 써요(짝의 답을 듣고 더 물어본 질문).' },
          ],
        },
        notes: '교사 진행 모듈이다. 교구의 기록판은 수만 받으므로 답 내용은 활동지에 적게 했다(체계도 \'기록판에 답을 적는다\'를 질문 수 기록으로 바꿈).',
      }),
      M('wrap.plan', {
        title: '탐구 계획 한 줄 정리', method: '탐구 계획 한 줄 정리', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 2개(질문·방법)에 카드를 넣는다.', base: '말풍선 빈칸 3개(질문·방법·약속)에 카드를 넣는다.', challenge: '빈칸 4개(질문·방법·약속·일정)에 카드를 넣는다.' },
        wrap: {
          teacher: '"다온의 탐구 계획을 한 줄로 말하면 \'무엇을, 어떻게, 어떤 약속으로\'가 다 들어가야 해요." 말풍선 빈칸을 채운 뒤 소리 내어 읽게 하고, 빠진 칸이 있으면 계획이 어떻게 흔들리는지 묻는다. "방법만 정하면 계획은 끝"이라는 학생에게 "언제까지 모을지 정하지 않으면 어떻게 될까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'story', options: { mode: 'fill', title: '다온의 탐구 계획', slots: [{ id: 'f1', who: '다온', label: '"내 질문은 ___"' }, { id: 'f2', who: '다온', label: '"___ 방법으로 모을 거야"' }, { id: 'f3', who: '다온', label: '"조사할 때는 ___"' }], cards: [
              { id: 'c1', text: '1학년 평일 수면 시간은 얼마일까' }, { id: 'c2', text: '1학년 익명 설문' }, { id: 'c3', text: '동의를 구하고 이름은 안 받기' }, { id: 'c4', text: '검색 한 번으로 끝내기' }] },
              prompt: '다온의 탐구 계획 말풍선 세 칸을 채워요.', target: { fill: { f1: 'c1', f2: 'c2', f3: 'c3' } }, difficulty: 0.2 },
            { prompt: '다온의 탐구 계획 말풍선 두 칸(질문·방법)을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '다온', label: '"내 질문은 ___"' }, { id: 'f2', who: '다온', label: '"___ 방법으로 모을 거야"' }], cards: [{ id: 'c1', text: '1학년 평일 수면 시간은 얼마일까' }, { id: 'c2', text: '1학년 익명 설문' }, { id: 'c4', text: '검색 한 번으로 끝내기' }] }, target: { fill: { f1: 'c1', f2: 'c2' } } },
            { prompt: '다온의 탐구 계획 말풍선 네 칸(질문·방법·약속·일정)을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '다온', label: '"내 질문은 ___"' }, { id: 'f2', who: '다온', label: '"___ 방법으로 모을 거야"' }, { id: 'f3', who: '다온', label: '"조사할 때는 ___"' }, { id: 'f4', who: '다온', label: '"___까지 모아 정리할게"' }], cards: [
              { id: 'c1', text: '1학년 평일 수면 시간은 얼마일까' }, { id: 'c2', text: '1학년 익명 설문' }, { id: 'c3', text: '동의를 구하고 이름은 안 받기' }, { id: 'c5', text: '다음 주 금요일' }, { id: 'c4', text: '검색 한 번으로 끝내기' }] }, target: { fill: { f1: 'c1', f2: 'c2', f3: 'c3', f4: 'c5' } } }),
            { type: 'choice', prompt: '탐구 계획에 \'언제까지\'가 빠지면 생기기 쉬운 일은?', options: ['자료를 모으는 일이 끝없이 미뤄진다', '질문이 더 좋아진다', '설문 응답이 늘어난다'], answer: 0, difficulty: 0.2, explain: '일정이 있어야 계획이 실행돼요.' },
          ],
        },
        worksheet: {
          title: '내 탐구 계획 한 줄',
          items: [
            { type: 'blank', prompt: '내 탐구 계획을 한 줄로 써요.', text: '내 질문은 ___이고, ___ 방법으로 ___까지 모을 거예요.', answer: '(예) 쉬는 시간 운동과 오후 집중의 관계, 관찰과 설문, 다음 주 금요일' },
            { type: 'check', prompt: '조사할 때 지킬 약속에 표시해요.', options: ['동의 구하기', '이름·연락처 적지 않기', '출처 적기'] },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 학교 안 봉사 프로젝트 (auto.m.g7-serve) ====
  {
    const M = MK('g7-serve', [7]);
    const CAMPUS = { grid: [6, 4], title: '가상의 우리 중학교 둘레', regions: [
      { name: '본관 계단', cells: [[0, 0], [1, 0]] }, { name: '급식실 앞', cells: [[2, 0], [3, 0]] }, { name: '도서관', cells: [[4, 0], [5, 0]] },
      { name: '화단', cells: [[0, 1], [0, 2]] }, { name: '운동장', cells: [[1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2]] }, { name: '분리배출장', cells: [[4, 1], [5, 1]] },
      { name: '체육관 앞', cells: [[4, 2], [5, 2]] }, { name: '정문', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '자전거 거치대', cells: [[3, 3], [4, 3], [5, 3]] },
    ] };
    const SCORE = [['급식실 앞 줄 안내', 4], ['분리배출장 정리', 5], ['도서관 책 정리', 3]];
    const STEPS = [{ id: 'p1', text: '불편 조사하기' }, { id: 'p2', text: '주제와 계획 세우기' }, { id: 'p3', text: '역할 나누기' }, { id: 'p4', text: '실행하기' }, { id: 'p5', text: '돌아보고 나누기' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.walk', {
        title: '학교 지도에서 불편한 곳 찾기', method: '학교 지도에서 불편한 곳 표시', tool: 'map', minutes: 6,
        levels: { easy: '교사가 불편한 곳 1곳(분리배출장)에 핀이 꽂히는 모습을 보이고 까닭을 함께 말한다.', base: '핀 3곳이 꽂히는 모습을 보고 곳마다 무엇이 불편한지 말한다.', challenge: '핀 3곳마다 누가 불편을 겪는지(학생·선생님·방문객)까지 붙여 말한다.' },
        intro: {
          teacher: '"가상 학교 둘레를 한 바퀴 돈다고 생각해 봐요. 쓰레기가 넘치거나 줄이 엉키는 곳은 어디일까요?" 시연 단추로 분리배출장·급식실 앞·자전거 거치대에 핀이 꽂히는 모습을 보인다. "봉사는 학교 밖에 나가서 하는 것"이라는 말이 나오면 "날마다 지나다니는 곳에도 우리가 바꿀 수 있는 불편이 있지 않을까요?"라고 되묻는다. 오늘은 학교 안의 불편을 봉사 주제로 바꾸는 방법을 익힌다고 밝힌다.',
          student: '가상 학교 지도에서 불편하거나 도움이 필요해 보이는 곳을 찾고, 무엇이 불편한지 짝과 말해요.',
          demo: { tool: 'map', options: CAMPUS, sequence: [{ pin: [4, 1] }, { pin: [2, 0] }, { pin: [4, 3] }] },
          art: { draw: 'a paper-cut school campus seen from above with a recycling corner overflowing, a tangled line at the cafeteria door and bicycles fallen at a rack, small paper pins on each', banner: '우리 학교의 불편은 어디에?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      M('intro.review', {
        title: '봉사 장면과 도움 받은 마음', method: '지난 봉사 사진 보고 잘된 점 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 봉사 장면 2개를 읽고 도움 받은 사람의 마음 카드를 함께 잇는다.', base: '봉사 장면 3개와 마음 카드를 잇고 잘된 점을 말한다.', challenge: '마음 카드를 이은 뒤 아쉬운 장면에서 바꿀 점을 하나 말한다.' },
        intro: {
          teacher: '"가상 선배들이 한 봉사 장면이에요. 1학년 동생들이 길을 헤매지 않게 교실 안내판을 붙였을 때 동생들 마음은 어땠을까요?" 시연 단추로 마음 카드가 장면 옆에 놓이는 모습을 보인 뒤 나머지 장면을 함께 읽는다. "봉사는 시간만 채우면 된다"는 말이 나오면 "도움 받은 사람의 마음이 달라지지 않았다면 그것을 봉사라고 할 수 있을까요?"라고 되묻는다. 장면은 그림 대신 글로 읽어 주고, 실제 학생 사진은 쓰지 않는다.',
          student: '가상 선배들의 봉사 장면 글을 읽고 도움 받은 사람의 마음 카드를 이어요. 무엇이 잘되었는지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '1학년 교실 길 안내판을 붙였다' }, { id: 's2', label: '도서관 반납 책을 갈래별로 정리했다' }], cards: [{ id: 'k1', text: '고마움' }, { id: 'k2', text: '편안함' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut school hallway with older students taping a friendly arrow sign on the wall while younger students smile, and a neat library cart nearby', banner: '도움 받은 사람의 마음은?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.need', {
        title: '불편을 봉사 주제로 바꾸기', method: '불편을 봉사 주제로 바꾸기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(직접 할 일·알릴 일)에 할 수 있는 일 카드를 붙인다(바로 알려 준다).', base: '가지 4개(직접 정리·안내·조사·건의)에 카드를 붙인다.', challenge: '공동체에 도움이 크고 학생이 안전하게 할 수 있는 봉사 주제만 고르는 문항까지 함정과 함께 푼다.' },
        activity: {
          title: '불편을 봉사 주제로 바꾸기', tool: 'mindmap',
          teacher: '"분리배출장이 넘친다는 불편에서 우리가 직접 할 수 있는 일은 무엇이고, 어른께 건의해야 할 일은 무엇일까요?" 카드를 가지에 붙일 때마다 그 일이 누구에게 도움이 되는지 한 사람씩 말하게 한다. "봉사는 무조건 몸으로 치우는 것"이라는 학생에게 "안내문을 붙이거나 원인을 조사하는 것도 불편을 줄이지 않을까요?"라고 되묻는다. 학생이 할 수 없는 위험한 일(높은 곳·약품)은 어른께 건의하는 쪽에 둔다는 점을 짚는다.',
          task: '학교 안 불편 하나에서 \'우리가 할 수 있는 일\' 가지를 뻗고, 공동체에 도움이 되는 봉사 주제를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('\'분리배출장이 넘친다\'에서 할 수 있는 일 카드를 가지에 붙이세요.', ['직접 정리', '안내하기', '조사하기', '건의하기'], [
              { id: 'n1', text: '점심 뒤 10분 분리배출장 정리', to: '직접 정리' }, { id: 'n2', text: '종류별 그림 안내판 붙이기', to: '안내하기' },
              { id: 'n3', text: '어느 요일에 넘치는지 기록하기', to: '조사하기' }, { id: 'n4', text: '수거함을 하나 더 두자고 건의', to: '건의하기' },
              { id: 'n5', text: '반마다 분리배출 방법 알리기', to: '안내하기' }, { id: 'n6', text: '넘치는 까닭을 친구들에게 묻기', to: '조사하기' }], { topic: '분리배출장이 넘친다' }),
              SB('\'분리배출장이 넘친다\'에서 할 수 있는 일 카드를 두 가지에 붙이세요.', ['직접 할 일', '알릴 일'], [
                { id: 'n1', text: '점심 뒤 10분 분리배출장 정리', to: '직접 할 일' }, { id: 'n2', text: '종류별 그림 안내판 붙이기', to: '알릴 일' },
                { id: 'n7', text: '헹군 우유갑 따로 모으기', to: '직접 할 일' }, { id: 'n5', text: '반마다 분리배출 방법 알리기', to: '알릴 일' }], { topic: '분리배출장이 넘친다' })),
            IT(SB('\'급식실 앞 줄이 엉킨다\'에서 할 수 있는 일 카드를 가지에 붙이세요.', ['직접 정리', '안내하기', '조사하기', '건의하기'], [
              { id: 'g1', text: '바닥에 줄 서는 화살표 붙이기', to: '직접 정리' }, { id: 'g2', text: '반별 입장 차례 알림 만들기', to: '안내하기' },
              { id: 'g3', text: '몇 시에 가장 붐비는지 세어 보기', to: '조사하기' }, { id: 'g4', text: '입장 시간 나누기를 학생회에 건의', to: '건의하기' }], { topic: '급식실 앞 줄이 엉킨다' }),
              SB('\'급식실 앞 줄이 엉킨다\'에서 할 수 있는 일 카드를 두 가지에 붙이세요.', ['직접 할 일', '알릴 일'], [
                { id: 'g1', text: '바닥에 줄 서는 화살표 붙이기', to: '직접 할 일' }, { id: 'g2', text: '반별 입장 차례 알림 만들기', to: '알릴 일' }], { topic: '급식실 앞 줄이 엉킨다' })),
            IT(PB('공동체에 도움이 크고 학생이 안전하게 할 수 있는 봉사 주제만 골라 담으세요.', '우리 봉사 주제', [
              { id: 't1', text: '1학년 교실 길 안내판 만들기', ok: true }, { id: 't2', text: '체육관 지붕 위 낙엽 치우기' },
              { id: 't3', text: '도서관 반납 책 갈래별 정리', ok: true }, { id: 't4', text: '우리 반 사물함만 꾸미기' }], { topic: '봉사 주제 고르기' }),
              null,
              PB('공동체에 도움이 크고 학생이 안전하게 할 수 있는 봉사 주제만 골라 담으세요(함정 주제 포함).', '우리 봉사 주제', [
                { id: 't1', text: '1학년 교실 길 안내판 만들기', ok: true }, { id: 't2', text: '체육관 지붕 위 낙엽 치우기' },
                { id: 't3', text: '도서관 반납 책 갈래별 정리', ok: true }, { id: 't4', text: '우리 반 사물함만 꾸미기' },
                { id: 't5', text: '분리배출 그림 안내판 붙이기', ok: true }, { id: 't6', text: '청소용 약품 섞어 바닥 닦기' }], { topic: '봉사 주제 고르기' }),
              { conclude: '불편 하나에서도 직접 하기·알리기·조사하기·건의하기로 할 수 있는 일이 여럿 나와요. 위험한 일은 어른께 건의해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 불편 하나와, 그것을 줄일 봉사 주제 하나를 써요.' }] },
      }),
      M('activity.vote', {
        title: '봉사 주제 후보 점수 견주기', method: '주제 후보 평가 그래프', tool: 'chart', minutes: 16,
        levels: { easy: '후보 2개의 \'도움 정도\' 점수 막대를 그린다.', base: '후보 3개의 \'도움 정도\'·\'실천 가능성\' 점수 막대를 그리고 견준다.', challenge: '기준 3개(도움 정도·실천 가능성·안전)의 합계 그래프를 읽고 주제를 고른다.' },
        activity: {
          title: '봉사 주제 후보 점수 견주기', tool: 'chart',
          teacher: '"도움은 크지만 우리가 해낼 수 없는 주제와, 작지만 확실히 해낼 수 있는 주제 가운데 무엇을 고를까요?" 모둠이 매긴 가상 점수 표를 막대로 바꾼 뒤 기준마다 1등이 다른지 견주게 한다. "가장 멋져 보이는 주제를 고르면 된다"는 학생에게 "멋져 보이는 것과 실제로 해낼 수 있는 것은 같은가요?"라고 되묻는다. 기준을 여럿 두면 한 가지 생각에 치우치지 않는다는 점을 짚는다.',
          task: '가상 모둠이 매긴 봉사 주제 후보 점수(5점 만점)를 막대그래프로 나타내고, 기준을 견주어 주제를 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '\'도움 정도\' 점수 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '후보별 도움 정도(가상 모둠 점수)', unit: '점', xLabel: '후보', yLabel: '점수', max: 5, scale: 1, data: SCORE }, target: { build: true } },
              { prompt: '후보 두 개의 \'도움 정도\' 막대를 완성하세요.', toolOptions: { data: SCORE.slice(0, 2) } }),
            IT({ prompt: '\'실천 가능성\' 점수 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '후보별 실천 가능성(가상 모둠 점수)', unit: '점', xLabel: '후보', yLabel: '점수', max: 5, scale: 1, data: [['급식실 앞 줄 안내', 3], ['분리배출장 정리', 4], ['도서관 책 정리', 5]] }, target: { build: true } },
              { prompt: '후보 두 개의 \'실천 가능성\' 막대를 완성하세요.', toolOptions: { data: [['급식실 앞 줄 안내', 3], ['분리배출장 정리', 4]] } }),
            IT({ prompt: '두 기준을 더한 점수 그래프에서 가장 높은 후보를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '도움 정도+실천 가능성(가상 모둠 점수)', unit: '점', xLabel: '후보', yLabel: '합계', max: 10, data: [['급식실 앞 줄 안내', 7], ['분리배출장 정리', 9], ['도서관 책 정리', 8]], question: '합계가 가장 높은 후보는?', choices: ['급식실 앞 줄 안내', '분리배출장 정리', '도서관 책 정리'] }, target: { pick: 1 } },
              null,
              { prompt: '안전 점수까지 더한 세 기준 합계 그래프에서 고를 주제를 고르세요.', toolOptions: { title: '세 기준 합계(가상 모둠 점수)', max: 15, data: [['급식실 앞 줄 안내', 12], ['분리배출장 정리', 11], ['도서관 책 정리', 13]], question: '세 기준 합계로 고를 주제는?' }, target: { pick: 2 } },
              { conclude: '기준을 여럿 두고 견주면 멋져 보이는 주제보다 우리가 해낼 수 있고 도움이 되는 주제를 고를 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 보고 우리 모둠이 고를 주제와 까닭을 한 문장으로 써요.' }] },
        notes: '점수는 가상 모둠이 매긴 값이다. 실제 수업에서는 모둠이 직접 점수를 매겨 활동지 표에 옮겨 볼 수 있다.',
      }),
      M('activity.steps', {
        title: '봉사 계획 차례 놓기', method: '봉사 계획 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '봉사 단계 카드 4장을 차례로 놓는다(바로 알려 준다).', base: '봉사 단계 카드 5장을 차례로 놓는다.', challenge: '단계마다 알맞은 날짜 눈금에 카드를 잇는다.' },
        activity: {
          title: '봉사 계획 차례 놓기', tool: 'timeline',
          teacher: '"불편을 조사하기도 전에 역할부터 나누면 무엇이 문제일까요?" 단계 카드를 놓은 뒤 한 단계를 빼면 어떻게 되는지 하나씩 묻는다. "실행하면 끝, 돌아보기는 필요 없다"는 학생에게 "다음 모둠이 같은 봉사를 더 잘하려면 무엇이 남아야 할까요?"라고 되묻는다. 날짜를 정하면 미뤄지지 않는다는 점을 짚는다.',
          task: '봉사 프로젝트 단계 카드를 조사부터 돌아보기까지 차례로 놓고, 단계마다 날짜를 정해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('봉사 프로젝트 단계 카드를 차례대로 놓으세요.', STEPS, { axis: ['처음', '끝'] }),
              OB('봉사 프로젝트 단계 카드 네 장을 차례대로 놓으세요.', pickCards(STEPS, ['p1', 'p2', 'p4', 'p5']), { axis: ['처음', '끝'] })),
            IT({ prompt: '단계 카드를 알맞은 날짜 눈금에 이으세요.', toolOptions: { mode: 'match', axis: ['처음', '끝'], slots: [{ id: 'w1', label: '첫째 주' }, { id: 'w2', label: '둘째 주' }, { id: 'w3', label: '셋째 주' }, { id: 'w4', label: '넷째 주' }], cards: [
              { id: 'c1', text: '불편 조사하기' }, { id: 'c2', text: '계획 세우고 역할 나누기' }, { id: 'c3', text: '실행하기' }, { id: 'c4', text: '돌아보고 나누기' }] }, target: { match: { w1: 'c1', w2: 'c2', w3: 'c3', w4: 'c4' } } },
              { prompt: '단계 카드 세 장을 날짜 눈금에 이으세요.', toolOptions: { slots: [{ id: 'w1', label: '첫째 주' }, { id: 'w2', label: '둘째 주' }, { id: 'w3', label: '셋째 주' }], cards: [{ id: 'c1', text: '불편 조사하기' }, { id: 'c2', text: '계획 세우고 역할 나누기' }, { id: 'c3', text: '실행하기' }] }, target: { match: { w1: 'c1', w2: 'c2', w3: 'c3' } } }),
            IT(OB('실행하는 날 할 일을 차례대로 놓으세요.', [{ id: 'd1', text: '안전 점검하기' }, { id: 'd2', text: '맡은 구역에서 봉사하기' }, { id: 'd3', text: '도구 정리하기' }, { id: 'd4', text: '한 일 기록하기' }], { axis: ['처음', '끝'] }, [{ id: 'd5', text: '기록 없이 해산하기' }]),
              null, null, { conclude: '조사→계획→역할→실행→돌아보기 차례에 날짜를 붙이면 봉사가 시간 채우기가 아니라 프로젝트가 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 봉사 단계에 날짜를 붙여 써요.', columns: ['단계', '날짜'], cells: [['불편 조사', ''], ['계획·역할', ''], ['실행', ''], ['돌아보기', '']], answer: '모둠 계획' }] },
      }),
      M('activity.roles', {
        title: '역할 나누고 실행 시간 맞추기', method: '역할 나누고 일정 맞추기', tool: 'timer', minutes: 16,
        levels: { easy: '역할 3개가 일하는 차례 카드를 놓고 실행 시간을 맞춘다.', base: '역할 4개의 차례 카드를 놓고 실행·정리 시간을 맞춘다.', challenge: '차례와 시간에 더해 실행 전 안전 점검 칸을 모두 표시한다.' },
        activity: {
          title: '역할 나누고 실행 시간 맞추기', tool: 'timer',
          teacher: '"안내판 붙이기 봉사에서 기록 담당은 언제 일해야 할까요? 다 끝난 뒤에만일까요?" 역할 카드를 일하는 차례로 놓고, 점심시간 안에 끝나도록 실행·정리 시간을 맞추게 한다. "역할은 정하지 않아도 그때그때 하면 된다"는 학생에게 "모두 안내판만 붙이고 아무도 정리하지 않으면 어떻게 될까요?"라고 되묻는다. 실행 전 안전 점검도 한 사람의 역할로 정해 둔다는 점을 짚는다.',
          task: '가상 모둠의 \'1학년 교실 길 안내판\' 봉사에서 역할이 일하는 차례를 놓고, 점심시간 안에 끝나게 시간을 맞춰요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '안내판 봉사에서 역할이 일하는 차례 카드를 놓으세요.', toolOptions: { title: '안내판 봉사 역할 차례', cards: ['붙이기 담당: 안내판 붙이기', '안전 담당: 도구·사다리 없는지 점검', '기록 담당: 붙인 곳 기록', '정리 담당: 남은 테이프 정리'] }, target: { order: ['안전 담당: 도구·사다리 없는지 점검', '붙이기 담당: 안내판 붙이기', '기록 담당: 붙인 곳 기록', '정리 담당: 남은 테이프 정리'] } },
              { prompt: '안내판 봉사에서 세 역할이 일하는 차례 카드를 놓으세요.', toolOptions: { cards: ['붙이기 담당: 안내판 붙이기', '안전 담당: 도구·사다리 없는지 점검', '정리 담당: 남은 테이프 정리'] }, target: { order: ['안전 담당: 도구·사다리 없는지 점검', '붙이기 담당: 안내판 붙이기', '정리 담당: 남은 테이프 정리'] } }),
            IT({ prompt: '점심시간에 봉사 20분, 정리 5분을 하려고 해요. 타이머를 맞추세요.', toolOptions: { title: '점심시간 봉사 시간', timeUnit: 'min', labels: ['봉사', '정리'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 20, rest: 5, rounds: 1 } } },
              { prompt: '점심시간에 봉사 20분을 하려고 해요. 봉사 시간을 맞추세요.', target: { plan: { work: 20, rounds: 1 } } }),
            IT({ prompt: '안내판을 붙이러 가기 전 안전 담당이 확인할 것을 모두 표시하세요.', toolOptions: { title: '실행 전 안전 점검', safety: ['의자·책상 위에 올라가지 않는다', '복도에 사람이 몰릴 때는 잠시 멈춘다', '가위·칼은 정리 담당이 모아 둔다', '선생님께 시작과 끝을 알린다'] }, target: { safety: true } },
              null, null, { conclude: '역할마다 일하는 차례와 시간을 정하고, 안전 점검을 한 사람이 맡으면 봉사가 엉키지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 봉사 역할과 맡은 사람을 써요(이름 대신 번호).', columns: ['역할', '맡은 사람', '할 일'], cells: [['안전 담당', '', ''], ['기록 담당', '', ''], ['정리 담당', '', '']], answer: '모둠 계획' }] },
      }),

      // ---- 정리 ----
      M('wrap.do', {
        title: '교내 봉사 준비와 실행 기록', method: '교내 봉사 실행', tool: 'timer', minutes: 7,
        levels: { easy: '실행 시간 15분으로 타이머를 맞추고, 시작 전 안전 점검을 표시하고, 기록판 1칸(한 시간)을 적는다.', base: '실행 시간 30분으로 맞추고, 안전 점검을 표시하고, 기록판 2칸(한 시간·한 곳 수)을 적는다.', challenge: '기록판을 적고, 활동지에 사진 대신 한 일을 글로 기록한다.' },
        wrap: {
          teacher: '"오늘 점심시간에 할 봉사를 떠올리며 안전 점검부터 함께 읽어 봐요. 하나라도 지킬 수 없으면 무엇을 바꿔야 할까요?" 교사가 인솔해 정해진 시간에 봉사를 하고, 이 시간에는 시작 전 점검과 다녀온 뒤의 기록을 채운다. "사진을 찍어 올려야 기록이 된다"는 학생에게 "도움 받은 사람 얼굴이 찍히면 어떨까요? 한 일을 글로 남기는 것도 기록이에요"라고 짚는다. 봉사는 정해진 구역 밖으로 나가지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '교내 봉사', timeUnit: 'min', labels: ['봉사', '정리'], plan: { work: 10, rest: 0, rounds: 1 }, safety: ['장갑을 꼈다', '날카로운 것은 손으로 줍지 않는다', '약품은 쓰지 않는다', '정해진 구역 안에서만 한다'], fields: [{ label: '봉사한 시간', unit: '분' }, { label: '붙인 안내판', unit: '장' }] },
              prompt: '실행 시간 30분으로 타이머를 맞추고, 안전 점검을 모두 표시하고, 다녀온 뒤 기록판을 적어요.', target: { plan: { work: 30 }, safety: true, records: true }, difficulty: 0.2 },
            { prompt: '실행 시간 15분으로 맞추고, 안전 점검을 표시하고, 봉사한 시간을 적어요.', toolOptions: { fields: [{ label: '봉사한 시간', unit: '분' }] }, target: { plan: { work: 15 }, safety: true, records: true } }),
            { type: 'choice', prompt: '봉사 기록으로 가장 알맞은 것은?', options: ['도움 받은 사람 얼굴이 나온 사진', '한 일·한 곳·걸린 시간을 적은 글', '봉사 시간만 적은 숫자 하나'], answer: 1, difficulty: 0.2, explain: '무엇을 어디서 얼마나 했는지 남겨야 돌아볼 수 있어요.' },
          ],
        },
        worksheet: {
          title: '교내 봉사 기록',
          items: [
            { type: 'table', prompt: '오늘 한 봉사를 기록해요.', columns: ['칸', '내용'], cells: [['한 일', ''], ['한 곳', ''], ['걸린 시간', '']], answer: '모둠 기록' },
            { type: 'short', prompt: '사진 대신, 봉사하며 본 변화 하나를 글로 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 체계도의 \'15분·30분 봉사\'는 7분 정리 시간 안에 할 수 없어, 실제 봉사는 점심시간 등 따로 정한 시간에 교사 인솔로 하고, 이 모듈은 시작 전 점검과 다녀온 뒤 기록을 맡는다. 타이머의 15·30분은 계획한 실행 시간이다.',
      }),
      M('wrap.check', {
        title: '봉사 계획서 스스로 점검', method: '계획서 스스로 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '계획서 요소 3개(목적·대상·역할)를 넣어 쓰고 기준 3개를 점검한다.', base: '요소 5개(목적·대상·역할·안전·평가)를 넣어 쓰고 기준 5개를 점검한다.', challenge: '5요소를 점검한 뒤 고칠 점 한 가지까지 써 넣고 기준 5개를 점검한다.' },
        wrap: {
          teacher: '"계획서에 \'열심히 한다\'만 있으면, 봉사가 끝난 뒤 잘했는지 무엇으로 알 수 있을까요?" 목적·대상·역할·안전·평가 다섯 칸을 함께 읽고 모둠 계획서를 짧게 쓰게 한다. "안전은 당연하니 안 써도 된다"는 학생에게 "당연한 것이 빠졌을 때 사고가 나요"라고 짚는다. 모둠원 이름 대신 역할 이름으로 쓰게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '우리 모둠 교내 봉사 계획서를 목적·대상·역할·안전·평가가 드러나게 써 보세요.', minChars: 50, maxChars: 300, minSentences: 4, maxSentences: 7, title: '봉사 계획서', placeholder: '목적: … / 대상: …' },
              prompt: '봉사 계획서를 쓰고 다섯 요소를 기준표에 스스로 표시해요.', target: { selfCheck: ['목적을 썼다', '누구를 돕는지 썼다', '역할을 나눠 썼다', '안전 약속을 썼다', '잘했는지 확인할 방법을 썼다'] }, difficulty: 0.3 },
            { prompt: '봉사 계획서를 목적·대상·역할 세 요소로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 30, minSentences: 3, starter: '목적: ___. 대상: ___. 역할: ___.' }, target: { selfCheck: ['목적을 썼다', '누구를 돕는지 썼다', '역할을 나눠 썼다'] } },
            { prompt: '봉사 계획서를 쓰고, 마지막 문장에 고칠 점 하나를 넣은 뒤 기준표에 표시해요.', toolOptions: { maxSentences: 8 }, target: { selfCheck: ['목적을 썼다', '누구를 돕는지 썼다', '역할을 나눠 썼다', '안전 약속을 썼다', '잘했는지 확인할 방법을 썼다'], mustInclude: [['고칠 점', '고칠점', '바꿀 점']] } }),
            { type: 'choice', prompt: '봉사 계획서의 \'평가\' 칸에 쓸 문장으로 가장 알맞은 것은?', options: ['열심히 한다', '안내판을 붙인 뒤 1학년에게 길을 찾기 쉬워졌는지 묻는다', '봉사 시간을 채운다'], answer: 1, difficulty: 0.2, explain: '도움이 되었는지 확인할 방법이 평가예요.' },
          ],
        },
        worksheet: {
          title: '봉사 계획서 점검',
          items: [
            { type: 'table', prompt: '우리 모둠 봉사 계획서를 다섯 칸으로 써요.', columns: ['요소', '내용'], cells: [['목적', ''], ['대상', ''], ['역할', ''], ['안전', ''], ['평가', '']], answer: '모둠 계획' },
            { type: 'short', prompt: '계획서에서 고칠 점 한 가지를 써요.' },
          ],
          easy: { note: '목적·대상·역할 세 칸만 채워도 돼요.', items: [{ type: 'table', prompt: '세 칸을 채워요.', columns: ['요소', '내용'], cells: [['목적', ''], ['대상', ''], ['역할', '']], answer: '모둠 계획' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 학년 목표와 스트레스 다루기 (auto.m.g8-adapt) ====
  {
    const M = MK('g8-adapt', [8]);
    const VAGUE = [
      { id: 'v1', text: '올해는 공부를 열심히 하겠다', to: '막연한 다짐' }, { id: 'v2', text: '매일 저녁 9시에 영어 단어 10개를 외운다', to: '구체적 목표' },
      { id: 'v3', text: '운동을 많이 하겠다', to: '막연한 다짐' }, { id: 'v4', text: '1학기 동안 주 3번 20분 줄넘기를 한다', to: '구체적 목표' },
      { id: 'v5', text: '책을 많이 읽겠다', to: '막연한 다짐' }, { id: 'v6', text: '한 달에 책 두 권을 읽고 한 줄 감상을 쓴다', to: '구체적 목표' },
    ];
    const TRACK = [['1주', 2], ['2주', 4], ['3주', 3], ['4주', 5]];
    // 시험 전날 불안 갈림길
    const EXAM = { text: '가상 학생 서윤은 내일 과학 시험이 있다. 밤 10시, 아직 못 본 단원이 남아 가슴이 두근거리고 손에 땀이 난다.', ask: '서윤은 어떻게 할까?', motif: 'moon', choices: [
      { id: 'all', text: '못 본 단원까지 밤새 다 보기로 한다', result: '새벽 3시에 잠들어 아침에 머리가 멍하다.', impact: [{ who: '서윤', text: '시험 중 집중이 흐려진다', tone: -1 }], why: '잠을 줄이면 불안과 실수가 함께 커져요.', end: '밤을 새워 다음 날 지쳤어요.',
        next: { text: '시험지를 받자 아는 문제도 떠오르지 않는다.', choices: [
          { id: 'panic', text: '"망했다"며 펜을 내려놓는다', result: '남은 시간을 그냥 보낸다.', impact: [{ who: '서윤', text: '할 수 있던 것도 못 한다', tone: -1 }] },
          { id: 'calm', text: '숨을 크게 쉬고 아는 문제부터 푼다', result: '조금씩 떠오르기 시작한다.', impact: [{ who: '서윤', text: '마음을 다잡는다', tone: 1 }] }] } },
      { id: 'pick', text: '중요한 부분만 정리해 보고 11시에 잔다', result: '불안은 남았지만 푹 잔다.', impact: [{ who: '서윤', text: '아침에 머리가 맑다', tone: 1 }], end: '정리하고 제때 잠들었어요.',
        next: { text: '그런데 시험이 끝난 뒤에도 "다음 시험도 망칠 거야"라는 생각이 며칠째 떠나지 않고 밥맛도 없다.', choices: [
          { id: 'hide', text: '누구에게도 말하지 않고 참는다', result: '걱정이 계속 커진다.', impact: [{ who: '서윤', text: '혼자 지친다', tone: -1 }], why: '며칠 넘게 이어지고 몸까지 힘들면 도움을 청할 때예요.' },
          { id: 'tell', text: '보호자나 담임 선생님께 요즘 걱정을 말한다', result: '공부 계획을 나눠 짜는 방법을 함께 찾는다.', impact: [{ who: '서윤', text: '걱정을 나눈다', tone: 1 }], end: '걱정을 말로 나눴어요.',
            next: { text: '도움을 받았는데도 잠을 못 자는 날이 두 주 넘게 이어진다.', choices: [
              { id: 'counsel', text: '상담 선생님과 따로 이야기할 시간을 정한다', result: '불안을 다루는 방법을 꾸준히 연습한다.', impact: [{ who: '서윤', text: '전문적인 도움을 받는다', tone: 1 }] },
              { id: 'enough', text: '한 번 말했으니 이제 혼자 견딘다', result: '잠 못 드는 날이 이어진다.', impact: [{ who: '서윤', text: '지친다', tone: -1 }], why: '오래가는 신호에는 더 큰 도움이 필요해요.' }] } }] } },
      { id: 'phone', text: '불안해서 휴대전화를 보다가 늦게 잔다', result: '공부도 쉬기도 하지 못한 채 밤이 간다.', impact: [{ who: '서윤', text: '불안이 그대로다', tone: -1 }], why: '피하는 행동은 불안을 잠깐 덮을 뿐이에요.', ending: '불안을 피하다 밤이 지났어요.' }] };
    const EXAM_R = [{ id: 'r1', text: '잠을 지키면 불안할 때도 실력을 낼 수 있다' }, { id: 'r2', text: '오래가는 걱정은 도움을 청할 신호다' },
      { id: 'r3', text: '스트레스는 참으면 사라진다', why: '참기만 하면 몸과 마음에 쌓여요.' }, { id: 'r4', text: '불안할수록 잠을 줄여야 한다', why: '잠이 부족하면 불안이 더 커져요.' }];
    // 발표 앞둔 긴장
    const TALK = { text: '가상 학생 하준은 다음 시간에 반 앞에서 모둠 발표를 한다. 쉬는 시간부터 목이 뻣뻣하고 배가 살살 아프다.', ask: '하준은 어떻게 할까?', motif: 'wind', choices: [
      { id: 'skip', text: '보건실에 간다며 발표를 피한다', result: '모둠원이 하준 몫까지 발표하느라 당황한다.', impact: [{ who: '모둠원', text: '부담이 커진다', tone: -1 }], why: '긴장을 피하면 다음 발표가 더 두려워져요.', end: '피해서 다음이 더 걱정됐어요.',
        next: { text: '다음 발표 때도 같은 긴장이 찾아온다.', choices: [
          { id: 'again', text: '또 피한다', result: '피하는 습관이 굳는다.', impact: [{ who: '하준', text: '긴장이 더 커진다', tone: -1 }] },
          { id: 'try', text: '짧은 부분만 맡아 해 본다', result: '떨렸지만 끝까지 해낸다.', impact: [{ who: '하준', text: '자신감이 조금 생긴다', tone: 1 }] }] } },
      { id: 'breath', text: '천천히 숨을 쉬며 첫 문장만 세 번 연습한다', result: '목이 조금 풀리고 첫 문장이 입에 붙는다.', impact: [{ who: '하준', text: '긴장이 줄어든다', tone: 1 }], end: '숨 고르고 연습해서 긴장이 줄었어요.',
        next: { text: '발표 중 한 문장을 잊어 잠깐 말이 막혔다.', choices: [
          { id: 'freeze', text: '얼굴이 빨개진 채 그대로 서 있는다', result: '시간이 길게 느껴진다.', impact: [{ who: '하준', text: '더 당황한다', tone: -1 }], why: '막혔을 때 쓸 방법을 미리 정해 두면 덜 당황해요.' },
          { id: 'note', text: '메모를 보고 다음 문장부터 이어 간다', result: '발표를 끝까지 마친다.', impact: [{ who: '하준', text: '해냈다는 느낌', tone: 1 }], end: '메모를 보고 끝까지 마쳤어요.',
            next: { text: '발표가 끝나고도 실수한 장면이 자꾸 떠오른다.', choices: [
              { id: 'share', text: '모둠원에게 "떨렸는데 끝까지 해서 다행"이라고 말한다', result: '모둠원도 떨렸다고 웃는다.', impact: [{ who: '하준', text: '마음이 가벼워진다', tone: 1 }] },
              { id: 'blame', text: '"나는 원래 발표를 못 해"라고 생각한다', result: '다음 발표가 더 무거워진다.', impact: [{ who: '하준', text: '자신감이 줄어든다', tone: -1 }], why: '실수 하나로 나를 판단하지 않아요.' }] } }] } },
      { id: 'ignore', text: '긴장한 걸 숨기려고 친구들과 장난만 친다', result: '연습을 못 한 채 발표 시간이 된다.', impact: [{ who: '하준', text: '더 떨린다', tone: -1 }], why: '신호를 알아차리고 다루어야 줄어들어요.', ending: '준비 없이 발표를 맞았어요.' }] };
    const TALK_R = [{ id: 'r1', text: '몸의 긴장 신호를 알아차리면 다룰 수 있다' }, { id: 'r2', text: '막혔을 때 쓸 방법을 정해 두면 덜 당황한다' },
      { id: 'r3', text: '떨리면 피하는 것이 낫다', why: '피하면 다음이 더 두려워져요.' }, { id: 'r4', text: '실수하면 발표를 못 하는 사람이다', why: '실수는 누구나 해요.' }];
    // 친구와의 다툼 뒤 스트레스
    const FIGHT = { text: '가상 학생 다온은 단짝과 오해로 다툰 뒤 사흘째 말을 안 한다. 수업 시간에도 그 생각뿐이고 짜증이 자주 난다.', ask: '다온은 어떻게 할까?', motif: 'storm', choices: [
      { id: 'snap', text: '다른 친구들에게도 짜증을 낸다', result: '주변 친구들까지 다온을 피한다.', impact: [{ who: '반 친구들', text: '불편하다', tone: -1 }], why: '스트레스가 다른 관계로 번질 수 있어요.', end: '짜증이 다른 친구에게 번졌어요.',
        next: { text: '혼자 점심을 먹게 되었다.', choices: [
          { id: 'sulk', text: '아무와도 말하지 않는다', result: '외로움이 커진다.', impact: [{ who: '다온', text: '외롭다', tone: -1 }] },
          { id: 'sorry', text: '짜증 낸 친구들에게 사과한다', result: '친구들이 괜찮다고 한다.', impact: [{ who: '반 친구들', text: '다시 가까워진다', tone: 1 }] }] } },
      { id: 'write', text: '먼저 마음을 글로 적어 정리해 본다', result: '무엇이 서운했는지 또렷해진다.', impact: [{ who: '다온', text: '마음이 정리된다', tone: 1 }], end: '마음을 적어 정리했어요.',
        next: { text: '정리해 보니 단짝에게 하고 싶은 말이 생겼다.', choices: [
          { id: 'wait', text: '단짝이 먼저 말할 때까지 기다린다', result: '서로 기다리기만 하며 일주일이 간다.', impact: [{ who: '다온', text: '답답함이 이어진다', tone: -1 }], why: '정리한 마음은 전할 때 풀려요.' },
          { id: 'talk', text: '"그때 그 말에 서운했어"라고 먼저 말을 건다', result: '단짝도 오해였다며 사과한다.', impact: [{ who: '단짝', text: '오해를 푼다', tone: 1 }], end: '먼저 말을 건네 오해를 풀었어요.',
            next: { text: '화해했지만 비슷한 일이 생길까 봐 불안하다.', choices: [
              { id: 'rule', text: '서운하면 바로 말하자고 둘이 약속한다', result: '불안이 줄어든다.', impact: [{ who: '다온', text: '안심이 된다', tone: 1 }] },
              { id: 'avoid', text: '다시 다툴까 봐 단짝을 피한다', result: '사이가 다시 멀어진다.', impact: [{ who: '단짝', text: '서운하다', tone: -1 }], why: '피하면 불안이 관계를 멀게 해요.' }] } }] } },
      { id: 'game', text: '밤늦게까지 게임으로 잊으려 한다', result: '잠이 부족해 다음 날 짜증이 더 난다.', impact: [{ who: '다온', text: '더 지친다', tone: -1 }], why: '잊으려는 행동이 잠을 빼앗으면 스트레스가 커져요.', ending: '잠이 줄어 더 지쳤어요.' }] };
    const FIGHT_R = [{ id: 'r1', text: '마음을 글로 정리하면 하고 싶은 말이 또렷해진다' }, { id: 'r2', text: '서운함을 말로 전하면 오해를 풀 기회가 생긴다' },
      { id: 'r3', text: '스트레스는 다른 일로 덮으면 사라진다', why: '덮은 스트레스는 다시 돌아와요.' }, { id: 'r4', text: '먼저 말을 거는 쪽이 지는 것이다', why: '먼저 말을 거는 것은 관계를 지키는 용기예요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.vague', {
        title: '막연한 다짐과 구체적 목표', method: '막연한 다짐·구체적 목표 가리기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장만 두 칸에 나누어 보인다.', base: '카드 6장이 두 칸에 나뉘는 모습을 보고 구체적 목표의 공통점을 말한다.', challenge: '막연한 다짐 하나를 골라 무엇을·얼마나·언제까지가 드러나게 고쳐 말한다.' },
        intro: {
          teacher: '"\'공부를 열심히 하겠다\'와 \'매일 저녁 9시에 영어 단어 10개를 외운다\' 가운데, 한 달 뒤 지켰는지 알 수 있는 것은 어느 쪽일까요?" 시연 단추로 다짐 카드가 두 바구니에 나뉘는 모습을 보인다. "목표는 크게 세울수록 좋다"는 말이 나오면 "크기만 하고 오늘 무엇을 할지 모르는 목표는 어떻게 될까요?"라고 되묻는다. 구체적 목표에는 무엇을·얼마나·언제까지가 들어 있다는 점을 짚는다.',
          student: '가상 학생들의 다짐 카드가 \'막연한 다짐\'과 \'구체적 목표\'로 나뉘는 것을 보고, 구체적 목표에 공통으로 들어 있는 것을 찾아요.',
          demo: { tool: 'sortboard', options: BB('', ['막연한 다짐', '구체적 목표'], VAGUE).toolOptions, sequence: [{ at: { v1: 0, v2: 1 } }, { at: { v1: 0, v2: 1, v3: 0, v4: 1, v5: 0, v6: 1 } }] },
          art: { draw: 'a paper-cut shelf with two paper baskets, one holding cloudy speech bubbles and one holding neat cards with a clock and a number, a teenager sorting them', banner: '지켰는지 알 수 있는 목표는?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.signal', {
        title: '몸으로 오는 스트레스 신호', method: '몸·마음·행동 스트레스 신호 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 몸 그림에서 신호가 오는 곳 2곳(목·어깨)을 짚어 보인다.', base: '신호가 오는 곳 4곳(목·어깨·가슴·배)이 골라지는 모습을 보고 신호를 말한다.', challenge: '몸 신호에 더해 마음(짜증·걱정)·행동(잠 못 듦·피하기) 신호까지 말한다.' },
        intro: {
          teacher: '"시험 전날 가상 학생 서윤은 목이 뻣뻣하고 가슴이 두근거리고 배가 아프대요. 몸의 어디에서 신호가 오고 있나요?" 시연 단추로 목·어깨·가슴·배가 골라지는 모습을 보인다. "스트레스는 마음에만 오는 것"이라는 말이 나오면 "긴장하면 몸에서는 무엇이 달라지나요?"라고 되묻는다. 몸 신호를 알아차리는 것이 다루기의 첫걸음이라는 점을 짚는다. 학생 자신의 증상은 발표시키지 않는다.',
          student: '가상 학생 서윤의 이야기를 듣고, 몸 그림에서 스트레스 신호가 나타나는 곳을 찾아요. 마음과 행동 신호도 떠올려요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '가슴', '배', '무릎'], names: true }, sequence: [{ parts: ['목', '어깨'] }, { parts: ['목', '어깨', '가슴', '배'] }] },
          art: { draw: 'a paper-cut outline of a teenager with small zigzag marks at the neck, shoulders, chest and stomach, and tiny weather clouds around the head', banner: '몸이 보내는 신호는?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '몸 그림 교구에 머리 칸이 없어 두통은 말로만 짚는다. 학생 개인의 증상을 묻지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.goal', {
        title: '구체적인 학년 목표로 고쳐 쓰기', method: '내 학년 목표 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '목표 틀("___까지 ___을(를) ___ 하겠다.")을 채워 쓰고 기준 2개를 점검한다.', base: '가상 학생의 막연한 다짐을 무엇을·얼마나·언제까지가 드러나는 목표 하나로 고쳐 쓰고 기준 3개를 점검한다.', challenge: '마지막 문항에서 목표 2개와 실천 방법까지 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '구체적인 학년 목표로 고쳐 쓰기', tool: 'rubric-writing',
          teacher: '"하준의 \'공부 열심히\'를 무엇을·얼마나·언제까지로 바꾸면 어떤 문장이 될까요?" 한 문장을 함께 고쳐 본 뒤 가상 학생들의 다짐을 고쳐 쓰게 한다. "목표는 크게 세울수록 좋다"는 학생에게 "지금 하루 10분도 못 하는 일을 하루 3시간 하기로 하면 어떻게 될까요?"라고 되묻는다. 학생 자신의 학년 목표는 활동지에 따로 쓰고 걷지 않는다고 밝힌다.',
          task: '가상 학생들의 막연한 다짐을 무엇을·얼마나·언제까지가 드러나는 학년 목표로 고쳐 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('하준의 다짐 \'공부를 열심히 하겠다\'를 구체적인 학년 목표로 고쳐 쓰세요.', { topic: '하준의 다짐 \'공부를 열심히 하겠다\'를 무엇을·얼마나·언제까지가 드러나는 목표로 고쳐 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '하준의 목표', placeholder: '예: 1학기 동안…' }, ['무엇을 할지 썼다', '얼마나 할지 수로 썼다', '언제까지 할지 썼다']),
              { prompt: '목표 틀을 채워 하준의 다짐을 고쳐 쓰세요.', toolOptions: { starter: '___까지 ___을(를) ___ 하겠다.' }, target: { selfCheck: ['무엇을 할지 썼다', '언제까지 할지 썼다'] } }),
            IT(RW('서윤의 다짐 \'운동을 많이 하겠다\'를 구체적인 학년 목표로 고쳐 쓰세요.', { topic: '서윤의 다짐 \'운동을 많이 하겠다\'를 무엇을·얼마나·언제까지가 드러나는 목표로 고쳐 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '서윤의 목표', placeholder: '예: 2학기 동안…' }, ['무엇을 할지 썼다', '얼마나 할지 수로 썼다', '언제까지 할지 썼다']),
              { prompt: '목표 틀을 채워 서윤의 다짐을 고쳐 쓰세요.', toolOptions: { starter: '___까지 ___을(를) ___ 하겠다.' }, target: { selfCheck: ['무엇을 할지 썼다', '언제까지 할지 썼다'] } }),
            IT(RW('다온의 다짐 \'책을 많이 읽겠다\'를 구체적인 목표로 고쳐 쓰고, 실천 방법도 한 문장 쓰세요.', { topic: '다온의 다짐 \'책을 많이 읽겠다\'를 구체적인 목표와 실천 방법으로 쓰세요.', minChars: 25, maxChars: 200, minSentences: 2, maxSentences: 3, title: '다온의 목표와 실천' }, ['무엇을 할지 썼다', '얼마나 할지 수로 썼다', '언제까지 할지 썼다']),
              { prompt: '목표 틀을 채워 다온의 다짐을 고쳐 쓰세요.', toolOptions: { starter: '___까지 ___을(를) ___ 하겠다.', minSentences: 1 }, target: { selfCheck: ['무엇을 할지 썼다', '언제까지 할지 썼다'] } },
              { prompt: '다온의 목표를 두 개(독서 하나·다른 하나)로 쓰고 실천 방법까지 쓰세요.', toolOptions: { maxSentences: 5, minSentences: 3 }, target: { selfCheck: ['무엇을 할지 썼다', '얼마나 할지 수로 썼다', '언제까지 할지 썼다', '실천 방법(언제·어디서)을 썼다'] } },
              { conclude: '좋은 목표는 무엇을·얼마나·언제까지가 드러나서, 지켰는지 스스로 확인할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 학년 목표 하나를 무엇을·얼마나·언제까지가 드러나게 써요. (걷지 않아요.)' }] },
        notes: '체계도의 \'내 학년 목표 쓰기\'는 학생의 개인 목표를 교구에 남기지 않도록 가상 학생의 다짐 고쳐 쓰기로 했고, 자기 목표는 걷지 않는 활동지 칸에 쓴다.',
      }),
      M('activity.track', {
        title: '목표 실천 꺾은선 그래프', method: '목표 달성 그래프 만들기', tool: 'chart', minutes: 16,
        levels: { easy: '2주 실천 기록의 점을 찍는다.', base: '4주 실천 기록의 점을 찍고 흐름을 읽는다.', challenge: '그래프에서 줄어든 주의 까닭과 고칠 점을 추론해 고른다.' },
        activity: {
          title: '목표 실천 꺾은선 그래프', tool: 'chart',
          teacher: '"서윤은 주 5번 줄넘기가 목표였어요. 4주 동안 몇 번씩 했는지 꺾은선으로 그리면 무엇이 보일까요?" 점을 찍은 뒤 올라간 주와 내려간 주를 짚게 한다. "한 주라도 못 하면 목표는 실패"라는 학생에게 "선 전체가 어느 쪽으로 가고 있나요?"라고 되묻는다. 기록은 나를 혼내려는 것이 아니라 계획을 고치려는 것이라는 점을 짚는다. 자료는 가상 학생의 기록이다.',
          task: '가상 학생 서윤의 4주 줄넘기 실천 기록을 꺾은선그래프로 나타내고, 흐름과 고칠 점을 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '서윤의 주별 줄넘기 실천 횟수를 꺾은선그래프로 나타내세요.', toolOptions: { type: 'line', title: '서윤의 주별 줄넘기 횟수(가상 기록, 목표 주 5번)', unit: '번', xLabel: '주', yLabel: '실천 횟수', max: 6, scale: 1, data: TRACK }, target: { build: true } },
              { prompt: '서윤의 처음 2주 실천 횟수를 꺾은선그래프로 나타내세요.', toolOptions: { data: TRACK.slice(0, 2) } }),
            IT({ prompt: '하준의 주별 단어 외우기 기록을 꺾은선그래프로 나타내세요.', toolOptions: { type: 'line', title: '하준의 주별 단어 외운 날(가상 기록, 목표 주 5일)', unit: '일', xLabel: '주', yLabel: '외운 날', max: 6, scale: 1, data: [['1주', 5], ['2주', 4], ['3주', 2], ['4주', 4]], given: [0] }, target: { build: true } },
              { prompt: '하준의 처음 2주 기록을 꺾은선그래프로 나타내세요.', toolOptions: { data: [['1주', 5], ['2주', 4]], given: [0] } }),
            IT({ prompt: '하준의 그래프에서 실천이 가장 적은 주를 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '하준의 주별 단어 외운 날(가상 기록)', unit: '일', xLabel: '주', yLabel: '외운 날', max: 6, data: [['1주', 5], ['2주', 4], ['3주', 2], ['4주', 4]], question: '실천이 가장 적은 주는?', choices: ['1주', '2주', '3주', '4주'] }, target: { pick: 2 } },
              null,
              { prompt: '3주에 시험이 있었어요. 하준이 계획을 고칠 점으로 알맞은 것을 고르세요.', toolOptions: { question: '하준이 고칠 점은?', choices: ['목표를 포기한다', '시험 주에는 단어 수를 줄여 이어 가는 계획을 미리 세운다', '그래프를 그리지 않는다'] }, target: { pick: 1 } },
              { conclude: '실천 기록을 그래프로 보면 흐름과 흔들린 때가 보여요. 흔들린 까닭을 찾아 계획을 고쳐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하준의 그래프에서 3주에 줄어든 까닭과 고칠 점을 한 문장으로 써요.' }] },
      }),
      M('activity.scale', {
        title: '스트레스 크기와 알맞은 대처', method: '스트레스 크기에 맞는 대처', tool: 'emotion', minutes: 16,
        levels: { easy: '눈금이 3칸이고 범위를 넓게 받아 주며, 대처 보기가 2개다.', base: '눈금 5칸에서 사례마다 스트레스 크기를 고르고 대처 보기 3개 가운데 고른다.', challenge: '맞힌 뒤에만 결과가 보이고, 같은 사례라도 오래갈 때의 대처를 고른다.' },
        activity: {
          title: '스트레스 크기와 알맞은 대처', tool: 'emotion',
          teacher: '"준비물을 깜빡한 일과 두 주째 잠을 못 자는 일, 스트레스 크기가 같을까요?" 사례마다 눈금을 고른 뒤 그 크기에 맞는 대처를 고르게 한다. "스트레스는 참으면 사라진다"는 학생에게 "작은 것은 스스로 풀 수 있지만, 크거나 오래가는 것도 참으면 될까요?"라고 되묻는다. 작으면 스스로, 크거나 오래가면 도움을 청한다는 기준을 짚는다. 사례는 모두 가상이다.',
          task: '가상 친구들의 사례마다 스트레스 크기를 눈금으로 재고, 그 크기에 맞는 대처를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '가상 친구 하준의 스트레스 크기를 눈금으로 고르세요.', toolOptions: { mode: 'scale', situation: '하준은 미술 준비물을 깜빡해 짝에게 빌렸다. 조금 민망했다.', feeling: '걱정', steps: 5, ask: '스트레스 크기는 얼마나 될까요?', after: '작은 스트레스는 숨 고르기·다음 날 챙기기로 스스로 풀 수 있어요.' }, target: { level: [1, 2] } },
              { prompt: '하준의 스트레스 크기를 3칸 눈금에서 고르세요.', toolOptions: { steps: 3 }, target: { level: 1 } }),
            IT({ prompt: '하준에게 알맞은 대처를 고르세요.', toolOptions: { mode: 'branch', who: '하준', situation: '준비물을 깜빡해 조금 민망하다.', feeling: '걱정', ask: '크기에 맞는 대처는?', choices: [
              { id: 'self', text: '고맙다고 말하고 전날 가방 챙기기를 정한다', result: '다음부터 잊지 않는다.', mood: '편안함' },
              { id: 'big', text: '상담실에 바로 가서 오래 이야기한다', result: '작은 일도 말할 수 있지만, 스스로 풀 수 있는 크기였다.', why: '작은 스트레스는 스스로 풀 방법부터 써 봐요.' },
              { id: 'hide', text: '창피해서 그 시간 내내 아무것도 안 한다', result: '수업을 놓친다.', mood: '속상함', why: '작은 일로 수업을 놓치면 스트레스가 커져요.' }] }, target: { choice: 'self' } },
              { toolOptions: { choices: [
                { id: 'self', text: '고맙다고 말하고 전날 가방 챙기기를 정한다', result: '다음부터 잊지 않는다.', mood: '편안함' },
                { id: 'hide', text: '창피해서 그 시간 내내 아무것도 안 한다', result: '수업을 놓친다.', mood: '속상함', why: '작은 일로 수업을 놓치면 스트레스가 커져요.' }] } }),
            IT({ prompt: '가상 친구 서윤의 스트레스 크기를 눈금으로 고르세요.', toolOptions: { mode: 'scale', situation: '서윤은 두 주째 시험 걱정으로 잠을 잘 못 자고 밥맛도 없다.', feeling: '불안', steps: 5, ask: '스트레스 크기는 얼마나 될까요?', after: '크고 오래가는 스트레스는 어른에게 도움을 청할 신호예요.' }, target: { level: [4, 5] } },
              { prompt: '서윤의 스트레스 크기를 3칸 눈금에서 고르세요.', toolOptions: { steps: 3 }, target: { level: 3 } }),
            IT({ prompt: '서윤에게 알맞은 대처를 고르세요.', toolOptions: { mode: 'branch', who: '서윤', situation: '두 주째 잠을 못 자고 밥맛도 없다.', feeling: '불안', ask: '크기에 맞는 대처는?', choices: [
              { id: 'help', text: '보호자나 상담 선생님께 요즘 상태를 말한다', result: '잠과 공부 계획을 함께 살펴본다.', mood: '편안함' },
              { id: 'endure', text: '시험만 끝나면 괜찮다며 참는다', result: '시험 뒤에도 잠을 못 잔다.', mood: '불안', why: '두 주 넘게 몸까지 힘들면 참기보다 도움을 청해요.' },
              { id: 'night', text: '밤새 공부해 걱정을 없앤다', result: '더 지쳐 버린다.', mood: '속상함', why: '잠을 줄이면 불안이 커져요.' }] }, target: { choice: 'help' } },
              { toolOptions: { choices: [
                { id: 'help', text: '보호자나 상담 선생님께 요즘 상태를 말한다', result: '잠과 공부 계획을 함께 살펴본다.', mood: '편안함' },
                { id: 'endure', text: '시험만 끝나면 괜찮다며 참는다', result: '시험 뒤에도 잠을 못 잔다.', mood: '불안', why: '두 주 넘게 몸까지 힘들면 참기보다 도움을 청해요.' }] } },
              null, { conclude: '스트레스는 크기를 먼저 재요. 작으면 스스로 풀고, 크거나 오래가면 어른에게 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '스트레스 크기에 맞는 대처를 써요.', columns: ['크기', '대처'], cells: [['작다', ''], ['크거나 오래간다', '']], answer: '스스로 풀기(숨 고르기·계획), 어른에게 도움 청하기' }] },
        notes: '체계도의 \'사례 1·2·3개\'는 단계마다 문항 수를 바꿀 수 없어, 같은 사례 둘(작은 것·큰 것)을 크기 재기와 대처 고르기로 나누고 단계는 눈금 칸 수·보기 수로 바꿨다.',
      }),
      M('activity.dilemma', {
        title: '시험 전날 불안 갈림길', method: '시험 전날 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(오래가는 장면)까지 가서 도움 요청 시점을 고르고, 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '시험 전날 불안 갈림길', tool: 'dilemma',
          teacher: '"불안할 때 밤을 새우는 것과 정리하고 자는 것, 다음 날 어느 쪽이 더 실력을 낼까요?" 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "도움을 청하는 건 약한 사람"이라는 학생에게 "두 주째 잠을 못 자는 친구에게 \'혼자 버텨\'라고 말해 줄 건가요?"라고 되묻는다. 도움을 청하는 때는 신호가 크거나 오래갈 때라는 점을 짚는다.',
          task: '불안한 가상 장면에서 길을 골라 결과를 따라가고, 언제 도움을 청할지 고르고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '시험 전날 밤 불안해요. 한 번 골라 결과를 보세요.', base: '시험 전날 밤 불안해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '시험 전날 밤 불안해요. 세 번 골라 도움 요청 시점까지 가고 바른 근거를 모두 고르세요.' },
              '시험 전날 밤', EXAM, [['pick', 'tell', 'counsel']], EXAM_R, ['r1', 'r2']),
            DIL({ easy: '발표 전에 몸이 긴장해요. 한 번 골라 결과를 보세요.', base: '발표 전에 몸이 긴장해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '발표 전에 몸이 긴장해요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '발표 앞둔 긴장', TALK, [['breath', 'note', 'share']], TALK_R, ['r1', 'r2']),
            DIL({ easy: '단짝과 다툰 뒤 짜증이 나요. 한 번 골라 결과를 보세요.', base: '단짝과 다툰 뒤 짜증이 나요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '단짝과 다툰 뒤 짜증이 나요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '다툼 뒤 사흘', FIGHT, [['write', 'talk', 'rule']], FIGHT_R, ['r1', 'r2'], null, { conclude: '스트레스는 신호를 알아차리고, 크기에 맞게 다루고, 크거나 오래가면 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '도움을 청하기 가장 알맞은 때는?', options: ['스트레스가 아주 작을 때만', '걱정이 두 주 넘게 이어지고 몸까지 힘들 때', '시험이 끝난 뒤에만'], answer: '걱정이 두 주 넘게 이어지고 몸까지 힘들 때' }] },
      }),

      // ---- 정리 ----
      M('wrap.share', {
        title: '짝과 목표 나누고 응원하기', method: '짝과 목표 공유·응원', tool: 'timer', minutes: 7,
        levels: { easy: '짝과 목표 1개를 나누고 점검 칸 2개를 표시한다.', base: '짝과 목표 2개를 나누고 응원 한마디까지 한 뒤 점검 칸 3개를 표시한다.', challenge: '목표를 나눈 뒤 중간 점검 날짜를 함께 정하고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"짝의 목표를 듣고 \'그게 되겠어?\' 대신 어떤 말을 해 주면 힘이 날까요?" 1분씩 번갈아 목표를 말하도록 타이머를 맞춘 뒤, 들은 쪽이 응원 한마디를 해 주게 한다. "목표를 말하면 못 지켰을 때 창피하다"는 학생에게 "나눌 목표는 성적이 아니라 생활 습관 하나여도 괜찮아요"라고 말해 준다. 말하고 싶지 않은 학생은 오늘 고쳐 쓴 가상 학생의 목표로 대신 나누게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝과 목표 나누기', timeUnit: 'min', labels: ['말하기', '바꾸기'], plan: { work: 2, rest: 1, rounds: 1 } },
              prompt: '한 사람이 1분씩 번갈아 말하도록 말하기 1분·바꾸기 0분·2번으로 맞추고, 나눈 뒤 점검 칸에 표시해요.', target: { plan: { work: 1, rest: 0, rounds: 2 }, selfCheck: ['목표를 무엇을·얼마나·언제까지로 말했다', '짝의 목표를 끝까지 들었다', '응원 한마디를 해 주었다'] }, difficulty: 0.2 },
            { prompt: '말하기 1분·2번으로 맞추고, 나눈 뒤 점검 칸 두 개에 표시해요.', target: { plan: { work: 1, rounds: 2 }, selfCheck: ['목표를 말했다', '짝의 목표를 끝까지 들었다'] } },
            { prompt: '말하기 1분·2번으로 맞추고, 중간 점검 날짜까지 정한 뒤 점검 칸에 표시해요.', target: { plan: { work: 1, rest: 0, rounds: 2 }, selfCheck: ['목표를 무엇을·얼마나·언제까지로 말했다', '짝의 목표를 끝까지 들었다', '응원 한마디를 해 주었다', '중간 점검 날짜를 함께 정했다'] } }),
            { type: 'choice', prompt: '짝의 목표를 듣고 해 줄 응원으로 가장 알맞은 것은?', options: ['"그거 너무 쉬운데?"', '"주 3번이면 할 수 있겠다, 3주 뒤에 같이 확인하자"', '"어차피 못 지킬걸"'], answer: 1, difficulty: 0.15, explain: '구체적으로 응원하고 함께 확인할 때를 정하면 힘이 돼요.' },
          ],
        },
        worksheet: {
          title: '짝과 목표 나누기',
          items: [
            { type: 'short', prompt: '짝에게 들은 응원 한마디를 적어요. (걷지 않아요.)' },
            { type: 'blank', prompt: '중간 점검 날짜를 적어요.', text: '우리는 ___월 ___일에 목표를 중간 점검해요.', answer: '짝과 정한 날짜' },
          ],
        },
        notes: '교사 진행 모듈이다. 목표 내용은 채점하지 않고 나눴는지만 스스로 표시한다.',
      }),
      M('wrap.breath', {
        title: '긴장 풀기 호흡 연습', method: '긴장 풀기 호흡 연습', tool: 'timer', minutes: 7,
        levels: { easy: '4초 들이쉬기·4초 내쉬기를 2번으로 맞추고 함께 해 본다.', base: '4초 들이쉬기·4초 내쉬기를 4번으로 맞추고 함께 해 본다.', challenge: '4번으로 맞춘 뒤 교사 안내 없이 혼자 타이머를 보며 해 본다.' },
        wrap: {
          teacher: '"발표 전에 목이 뻣뻣해질 때, 숨을 어떻게 쉬면 몸이 조금 풀릴까요?" 타이머를 맞춘 뒤 교사가 "들이쉬고… 내쉬고…"를 소리 내어 함께 4번 해 본다. "숨쉬기로 스트레스가 다 없어진다"는 학생에게 "호흡은 지금의 긴장을 낮추는 방법이고, 오래가는 걱정은 도움을 청해야 해요"라고 짚는다. 어지럽거나 불편한 학생은 바로 멈추고 편하게 쉬게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '긴장 풀기 호흡', labels: ['들이쉬기', '내쉬기'], plan: { work: 10, rest: 10, rounds: 1 }, workStep: 1, restStep: 1, showTotal: true },
              prompt: '4초 들이쉬기·4초 내쉬기를 4번 하도록 타이머를 맞춘 뒤 함께 해 봐요.', target: { plan: { work: 4, rest: 4, rounds: 4 } }, difficulty: 0.1 },
            { prompt: '4초 들이쉬기·4초 내쉬기를 2번 하도록 타이머를 맞춘 뒤 함께 해 봐요.', target: { plan: { work: 4, rest: 4, rounds: 2 } } },
            { prompt: '4초 들이쉬기·4초 내쉬기를 4번으로 맞추고, 이번에는 혼자 타이머를 보며 해 봐요.', target: { plan: { work: 4, rest: 4, rounds: 4 }, selfCheck: ['혼자 타이머를 보며 끝까지 했다'] } }),
            { type: 'choice', prompt: '호흡 연습에 대한 설명으로 가장 알맞은 것은?', options: ['호흡만 하면 모든 걱정이 사라진다', '지금의 긴장을 낮추는 데 도움이 되고, 오래가는 걱정은 도움을 청한다', '어지러워도 끝까지 참고 한다'], answer: 1, difficulty: 0.2, explain: '호흡은 지금의 긴장을 다루는 방법 가운데 하나예요.' },
          ],
        },
        worksheet: {
          title: '긴장 풀기 호흡',
          items: [
            { type: 'short', prompt: '호흡 연습을 써 보고 싶은 때를 하나 써요. (걷지 않아요.)' },
            { type: 'check', prompt: '호흡 연습 약속에 표시해요.', options: ['천천히 4초 들이쉬기', '천천히 4초 내쉬기', '어지러우면 바로 멈추기'] },
          ],
        },
        notes: '교사 진행 모듈이다. 호흡 연습 중 불편을 말하는 학생은 바로 쉬게 하고 보건실과 연계한다.',
      }),
    );
  }

  // ==== 8학년 · 생활 리듬과 생명 존중 (auto.m.g8-habit) ====
  {
    const M = MK('g8-habit', [8]);
    const CAUSE = [['밤늦게 휴대전화를 보다 늦게 잔다 → ___', '1교시에 졸고 짜증이 난다'], ['아침을 거르고 등교한다 → ___', '오전 수업에 집중이 흐려진다'], ['주말에 낮 12시까지 몰아 잔다 → ___', '일요일 밤에 잠이 안 온다'], ['하루 종일 앉아만 있는다 → ___', '몸이 뻐근하고 쉽게 지친다']];
    const SLEEP2 = [['월①', 7], ['화①', 6], ['수①', 7], ['목①', 5], ['금①', 6], ['월②', 7], ['화②', 7], ['수②', 8], ['목②', 7], ['금②', 7]];
    // 방학 동안 반 거북이
    const TURTLE = { text: '가상 2학년 4반은 한 학기 동안 거북이 \'느림이\'를 길렀다. 방학이 일주일 남았는데 아무도 돌볼 계획을 세우지 않았다.', ask: '반장인 나는 어떻게 할까?', motif: 'leaf', choices: [
      { id: 'release', text: '학교 앞 개울에 놓아주자고 한다', result: '느림이가 낯선 물에서 살아남기 어렵고, 원래 살던 생물에게도 해가 될 수 있다.', impact: [{ who: '느림이', text: '살 곳을 잃는다', tone: -1 }, { who: '개울 생물', text: '터전이 흔들린다', tone: -1 }], why: '기르던 생물을 자연에 놓아주면 그 생물도, 원래 살던 생물도 위험해져요.', end: '놓아주어 생물이 위험해졌어요.',
        next: { text: '선생님이 "놓아주면 어떤 일이 생길까?"라고 묻는다.', choices: [
          { id: 'fine', text: '"자연이 더 좋잖아요"라고 우긴다', result: '위험을 따져 보지 않은 채 정하게 된다.', impact: [{ who: '느림이', text: '위험하다', tone: -1 }] },
          { id: 'rethink', text: '방학 동안 돌볼 사람을 정하자고 다시 제안한다', result: '돌봄 계획을 세우기 시작한다.', impact: [{ who: '느림이', text: '돌봄을 받는다', tone: 1 }] }] } },
      { id: 'plan', text: '학급 회의를 열어 방학 돌봄 계획을 세우자고 한다', result: '보호자 동의를 받은 친구들이 한 주씩 맡기로 한다.', impact: [{ who: '느림이', text: '방학에도 돌봄을 받는다', tone: 1 }], end: '돌봄 계획을 함께 세웠어요.',
        next: { text: '첫 주를 맡은 친구가 먹이 주는 방법을 잘 모른다고 한다.', choices: [
          { id: 'guess', text: '"대충 아무거나 주면 돼"라고 한다', result: '맞지 않는 먹이로 느림이가 탈이 날 수 있다.', impact: [{ who: '느림이', text: '건강이 나빠질 수 있다', tone: -1 }], why: '생물마다 맞는 먹이와 돌봄이 있어요.' },
          { id: 'card', text: '먹이·물 갈기·관찰 방법을 적은 돌봄 카드를 함께 만든다', result: '누가 맡아도 같은 방법으로 돌본다.', impact: [{ who: '느림이', text: '꾸준히 돌봄을 받는다', tone: 1 }], end: '돌봄 카드로 방법을 나눴어요.',
            next: { text: '방학이 끝나고 느림이가 너무 커져 교실 수조가 좁아졌다.', choices: [
              { id: 'consult', text: '선생님과 함께 더 넓게 기를 곳·방법을 알아본다', result: '알맞은 곳으로 옮길 방법을 찾는다.', impact: [{ who: '느림이', text: '알맞은 곳에서 산다', tone: 1 }] },
              { id: 'leave', text: '좁아도 그냥 둔다', result: '느림이가 움직이기 힘들어진다.', impact: [{ who: '느림이', text: '지낸 곳이 좁고 괴롭다', tone: -1 }], why: '돌보는 책임은 생물이 자라는 동안 계속돼요.' }] } }] } },
      { id: 'leave', text: '방학 동안 교실에 그냥 두고 먹이를 잔뜩 넣어 둔다', result: '먹이가 썩어 물이 더러워진다.', impact: [{ who: '느림이', text: '병들 수 있다', tone: -1 }], why: '먹이를 한꺼번에 두는 것은 돌봄이 아니에요.', ending: '돌보지 않아 물이 더러워졌어요.' }] };
    const TURTLE_R = [{ id: 'r1', text: '기르기 시작한 생물을 끝까지 돌볼 책임이 있다' }, { id: 'r2', text: '기르던 생물을 자연에 놓아주면 생물과 자연 모두 위험해진다' },
      { id: 'r3', text: '생물을 돌보는 책임은 기르는 동안만이다', why: '방학·이사처럼 기르기 어려운 때에도 책임은 이어져요.' }, { id: 'r4', text: '자연에 놓아주면 생물이 더 행복하다', why: '기르던 생물은 자연에서 살아남기 어려워요.' }];
    // 교실 화분이 시들 때
    const PLANT = { text: '가상 반 교실 창가 화분 다섯 개가 시들어 간다. 화분 당번이 "어차피 금방 죽어"라고 말한다.', ask: '나는 어떻게 할까?', motif: 'leaf', choices: [
      { id: 'trash', text: '시든 화분을 버리고 새것을 사자고 한다', result: '같은 일이 또 되풀이된다.', impact: [{ who: '화분', text: '버려진다', tone: -1 }], why: '시든 까닭을 모르면 새 화분도 시들어요.', end: '까닭을 모른 채 버렸어요.',
        next: { text: '새 화분도 두 주 만에 시들기 시작한다.', choices: [
          { id: 'again', text: '또 버린다', result: '돈과 생명이 함께 버려진다.', impact: [{ who: '반', text: '돌봄을 배우지 못한다', tone: -1 }] },
          { id: 'why', text: '시드는 까닭을 함께 찾아보자고 한다', result: '물 주기 기록이 없다는 것을 알게 된다.', impact: [{ who: '화분', text: '살릴 방법이 생긴다', tone: 1 }] }] } },
      { id: 'find', text: '흙과 잎을 살펴보며 시드는 까닭을 함께 찾자고 한다', result: '물을 너무 자주 준 화분과 거의 안 준 화분이 섞여 있다.', impact: [{ who: '화분', text: '살릴 방법이 보인다', tone: 1 }], end: '까닭을 함께 찾았어요.',
        next: { text: '당번이 바뀔 때마다 물 주는 방법이 달라진다.', choices: [
          { id: 'each', text: '당번이 알아서 하게 둔다', result: '어떤 날은 두 번, 어떤 날은 안 준다.', impact: [{ who: '화분', text: '또 시든다', tone: -1 }], why: '돌봄 방법을 나누어야 누가 맡아도 같아요.' },
          { id: 'log', text: '화분마다 물 주는 날을 적는 기록표를 붙인다', result: '물 주기가 고르게 된다.', impact: [{ who: '화분', text: '다시 살아난다', tone: 1 }], end: '기록표로 돌봄을 나눴어요.',
            next: { text: '살아난 화분 하나가 너무 커져 창가가 좁아졌다.', choices: [
              { id: 'share', text: '알맞은 화분으로 옮겨 심거나 원하는 반과 나눈다', result: '화분이 더 잘 자란다.', impact: [{ who: '화분', text: '알맞은 곳에서 자란다', tone: 1 }] },
              { id: 'cut', text: '귀찮으니 줄기를 다 잘라 버린다', result: '화분이 다시 시든다.', impact: [{ who: '화분', text: '상처를 입는다', tone: -1 }], why: '자란 생명에 맞게 돌봄을 바꿔요.' }] } }] } },
      { id: 'agree', text: '"맞아, 어차피 식물이니까" 하고 넘긴다', result: '화분이 모두 시든다.', impact: [{ who: '화분', text: '시들어 죽는다', tone: -1 }], why: '작은 생명도 돌보면 살아나요.', ending: '넘겨서 화분이 모두 시들었어요.' }] };
    const PLANT_R = [{ id: 'r1', text: '작은 생명도 까닭을 찾아 돌보면 살릴 수 있다' }, { id: 'r2', text: '돌봄 방법을 나누면 누가 맡아도 꾸준히 돌볼 수 있다' },
      { id: 'r3', text: '식물은 생명이 아니어서 버려도 된다', why: '식물도 돌보면 살아나는 생명이에요.' }, { id: 'r4', text: '새로 사면 되니 까닭을 몰라도 된다', why: '까닭을 모르면 같은 일이 되풀이돼요.' }];
    // 관찰하던 곤충
    const BUG = { text: '가상 반이 과학 시간에 관찰하던 사슴벌레 애벌레가 어른벌레가 되었다. 친구 하나가 "구경 끝났으니 운동장에 버리자"고 한다.', ask: '나는 어떻게 할까?', motif: 'leaf', choices: [
      { id: 'dump', text: '운동장 구석에 그냥 둔다', result: '살 수 없는 곳이라 곧 죽을 수 있다.', impact: [{ who: '사슴벌레', text: '살 곳을 잃는다', tone: -1 }], why: '관찰이 끝나도 생명을 대하는 책임은 남아요.', end: '그냥 두어 생명이 위험해졌어요.',
        next: { text: '다음 날 운동장에서 움직이지 않는 사슴벌레를 보았다.', choices: [
          { id: 'shrug', text: '"어쩔 수 없지"라며 지나간다', result: '같은 일이 또 일어날 수 있다.', impact: [{ who: '다음 생물', text: '같은 일을 겪는다', tone: -1 }] },
          { id: 'rule', text: '관찰 생물을 돌려보낼 방법을 반 약속으로 정하자고 한다', result: '다음 관찰부터 계획을 함께 세운다.', impact: [{ who: '다음 생물', text: '보호받는다', tone: 1 }] }] } },
      { id: 'ask', text: '선생님께 알맞게 돌보거나 보낼 방법을 묻자고 한다', result: '분양을 원하는 친구가 보호자 동의를 받아 기르기로 한다.', impact: [{ who: '사슴벌레', text: '돌봄을 이어 받는다', tone: 1 }], end: '알맞은 방법을 함께 찾았어요.',
        next: { text: '분양받은 친구가 일주일 만에 "생각보다 귀찮다"고 한다.', choices: [
          { id: 'quit', text: '"그럼 아무 데나 놔줘"라고 한다', result: '생물이 위험해진다.', impact: [{ who: '사슴벌레', text: '버려진다', tone: -1 }], why: '돌보기로 한 약속은 생명에 대한 약속이에요.' },
          { id: 'help', text: '돌봄 방법을 함께 찾아보고, 어려우면 선생님과 다시 정하자고 한다', result: '친구가 돌봄 방법을 익혀 계속 기른다.', impact: [{ who: '사슴벌레', text: '꾸준히 돌봄을 받는다', tone: 1 }], end: '함께 방법을 찾아 돌봄을 이었어요.',
            next: { text: '반에서 다음 학기에도 생물을 관찰하자는 의견이 나온다.', choices: [
              { id: 'first', text: '관찰이 끝난 뒤 계획까지 먼저 정하고 시작하자고 한다', result: '시작 전에 끝까지의 책임을 정한다.', impact: [{ who: '다음 생물', text: '처음부터 보호받는다', tone: 1 }] },
              { id: 'later', text: '일단 데려오고 나중에 생각하자고 한다', result: '같은 고민이 되풀이된다.', impact: [{ who: '다음 생물', text: '위험해질 수 있다', tone: -1 }], why: '생명을 데려오기 전에 끝까지의 계획을 세워요.' }] } }] } },
      { id: 'keep', text: '아무 말 없이 교실 구석에 둔다', result: '먹이를 주는 사람이 없어 약해진다.', impact: [{ who: '사슴벌레', text: '굶는다', tone: -1 }], why: '누군가 맡지 않으면 돌봄이 멈춰요.', ending: '맡는 사람이 없어 생물이 약해졌어요.' }] };
    const BUG_R = [{ id: 'r1', text: '관찰이 끝나도 생명에 대한 책임은 남는다' }, { id: 'r2', text: '생물을 데려오기 전에 끝까지 돌볼 계획을 세워야 한다' },
      { id: 'r3', text: '수업에 쓴 생물은 버려도 괜찮다', why: '수업에 쓴 생물도 같은 생명이에요.' }, { id: 'r4', text: '귀찮으면 그만 돌봐도 된다', why: '돌보기로 한 약속은 생명에 대한 약속이에요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.day', {
        title: '가상 학생 하루의 수면 시계', method: '내 하루 수면·식사·운동 시계', tool: 'clock', minutes: 6,
        levels: { easy: '교사가 정각(11시에 잠들고 7시에 일어남)으로 시계를 보이고 잔 시간을 센다.', base: '30분 단위(11시 30분·6시 30분)로 시계를 보이고 잔 시간을 센다.', challenge: '같은 학생의 주중과 주말(새벽 1시에 자고 11시에 일어남) 시각을 견주어 리듬이 어떻게 흔들리는지 말한다.' },
        intro: {
          teacher: '"가상 학생 하준은 어젯밤 11시 30분에 잠들어 오늘 6시 30분에 일어났어요. 몇 시간 잤을까요?" 시연 단추로 시계가 잠든 시각과 일어난 시각으로 움직이는 모습을 보이고 함께 센다. "주말에 몰아 자면 괜찮다"는 말이 나오면 "주말에 낮까지 자면 일요일 밤에는 어떻게 될까요?"라고 되묻는다. 학생 자신의 잠든 시각은 발표시키지 않고, 가상 학생으로만 이야기한다.',
          student: '가상 학생 하준의 잠든 시각과 일어난 시각을 시계로 보고 몇 시간 잤는지 세어 봐요. 주말에는 어떻게 달라질지 생각해요.',
          demo: { tool: 'clock', options: { title: '하준의 수면 시각', minuteStep: 30 }, sequence: [{ h: 11, m: 30 }, { h: 6, m: 30 }] },
          art: { draw: 'a paper-cut bedroom at night with a moon in the window, a paper alarm clock, and a second panel with the morning sun and a breakfast tray', banner: '잠든 시각과 일어난 시각', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '수면 시각은 가상 학생의 것이다. 학생의 실제 생활 시각을 묻거나 적게 하지 않는다.',
      }),
      M('intro.pet', {
        title: '교내 생물을 대하는 장면', method: '생물 대하는 장면 보고 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개를 읽고 마음 카드를 함께 잇는다.', base: '장면 3개에 마음 카드를 잇는다.', challenge: '장면 4개에 마음 카드를 잇고 생물 입장에서 바뀌었으면 하는 행동을 말한다.' },
        intro: {
          teacher: '"교실 수조를 친구가 손가락으로 두드리는 장면을 본 화분 당번 서윤의 마음은 어떨까요?" 시연 단추로 마음 카드가 장면 옆에 놓이는 모습을 보인 뒤 다른 장면도 읽어 준다. "생물은 마음이 없으니 상관없다"는 말이 나오면 "두드리는 소리에 거북이는 어떻게 움직일까요? 그걸 보는 친구는요?"라고 되묻는다. 생명을 대하는 태도가 함께 지내는 사람의 마음에도 닿는다는 점을 짚는다.',
          student: '교실에서 생물을 대하는 가상 장면을 듣고, 그 장면을 본 친구의 마음 카드를 이어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '친구가 수조를 손가락으로 쾅쾅 두드린다' }, { id: 's2', label: '친구가 시든 화분에 물을 주고 햇빛 쪽으로 옮긴다' }], cards: [{ id: 'k1', text: '걱정' }, { id: 'k2', text: '고마움' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut classroom corner with a small turtle tank and potted plants on the windowsill, one student tapping the glass and another watering a plant', banner: '생물을 대하는 모습을 볼 때 마음은?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.effect', {
        title: '생활 리듬과 학교생활 잇기', method: '생활 리듬과 학교생활 잇기', tool: 'wordcards', minutes: 16,
        levels: { easy: '원인 2개에 결과 카드를 넣는다(넣으면 바로 알려 준다).', base: '원인 4개에 결과 카드를 넣고, 원인을 수면·식사·운동으로 나눈다.', challenge: '\'주말 몰아 자기\'가 괜찮지 않은 근거 카드만 고르는 문항까지 함정과 함께 푼다.' },
        activity: {
          title: '생활 리듬과 학교생활 잇기', tool: 'wordcards',
          teacher: '"밤늦게 휴대전화를 본 다음 날, 1교시에는 무슨 일이 생길까요?" 원인 카드마다 결과 카드를 넣고, 결과가 다시 다음 원인이 되는 흐름(늦잠→아침 거름→오전 집중 흐림)을 함께 짚는다. "주말에 몰아 자면 괜찮다"는 학생에게 "토요일 낮 12시에 일어나면 일요일 밤 잠드는 시각은 어떻게 될까요?"라고 되묻는다. 생활 리듬은 날마다 비슷한 시각을 지키는 것이라는 점을 짚는다.',
          task: '수면 부족·아침 거르기 같은 원인 카드와 학교생활 결과 카드를 잇고, 생활 리듬을 지켜야 하는 근거를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('원인마다 학교생활에 나타나는 결과 카드를 넣으세요.', CAUSE, ['아무 일도 생기지 않는다']),
              FB('원인 두 개에 결과 카드를 넣으세요.', CAUSE.slice(0, 2), [])),
            IT(SB('생활 습관 카드를 수면·식사·운동 칸에 나누세요.', ['수면', '식사', '운동'], [
              { id: 'h1', text: '잠들기 30분 전 휴대전화 내려놓기', to: '수면' }, { id: 'h2', text: '평일·주말 일어나는 시각 비슷하게', to: '수면' },
              { id: 'h3', text: '아침에 우유와 빵이라도 먹기', to: '식사' }, { id: 'h4', text: '야식 대신 저녁 제때 먹기', to: '식사' },
              { id: 'h5', text: '쉬는 시간에 일어나 몸 풀기', to: '운동' }, { id: 'h6', text: '하교 때 한 정거장 걷기', to: '운동' }]),
              SB('생활 습관 카드 네 장을 수면·식사 칸에 나누세요.', ['수면', '식사'], [
                { id: 'h1', text: '잠들기 30분 전 휴대전화 내려놓기', to: '수면' }, { id: 'h2', text: '평일·주말 일어나는 시각 비슷하게', to: '수면' },
                { id: 'h3', text: '아침에 우유와 빵이라도 먹기', to: '식사' }, { id: 'h4', text: '야식 대신 저녁 제때 먹기', to: '식사' }])),
            IT(PB('\'주말에 몰아 자면 괜찮다\'가 맞지 않는 근거 카드만 골라 담으세요.', '맞지 않는 근거', [
              { id: 'e1', text: '주말 늦잠이 일요일 밤 잠을 늦춘다', ok: true }, { id: 'e2', text: '월요일 아침에 더 피곤해진다', ok: true },
              { id: 'e3', text: '잠은 많이 잘수록 무조건 좋다' }, { id: 'e4', text: '주말엔 시간이 많으니 상관없다' }]),
              null,
              PB('\'주말에 몰아 자면 괜찮다\'가 맞지 않는 근거 카드만 골라 담으세요(함정 카드가 더 섞였어요).', '맞지 않는 근거', [
                { id: 'e1', text: '주말 늦잠이 일요일 밤 잠을 늦춘다', ok: true }, { id: 'e2', text: '월요일 아침에 더 피곤해진다', ok: true },
                { id: 'e3', text: '잠은 많이 잘수록 무조건 좋다' }, { id: 'e4', text: '주말엔 시간이 많으니 상관없다' },
                { id: 'e5', text: '날마다 비슷한 시각에 일어나야 리듬이 선다', ok: true }, { id: 'e6', text: '평일 잠 부족은 주말에 다 갚을 수 있다' }]),
              { conclude: '수면·식사·운동은 서로 이어져 학교생활에 나타나요. 날마다 비슷한 리듬을 지키는 것이 중요해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '생활 리듬이 흔들리면 학교생활에 어떤 일이 생기는지 원인과 결과를 이어 한 문장으로 써요.' }] },
      }),
      M('activity.plan', {
        title: '습관 하나 바꾸기 단계 계획', method: '습관 하나 바꾸기 단계 계획', tool: 'timer', minutes: 16,
        levels: { easy: '바꾸기 단계 카드 2장을 차례로 놓는다.', base: '단계 카드 3장을 차례로 놓고 2주 기록판 칸을 채운다.', challenge: '단계 카드에 \'어려울 때 대안\' 카드까지 넣어 4장을 차례로 놓는다.' },
        activity: {
          title: '습관 하나 바꾸기 단계 계획', tool: 'timer',
          teacher: '"하준이 \'잠들기 전 휴대전화 오래 보기\'를 바꾸려면, 첫날부터 휴대전화를 아예 안 보는 것이 좋을까요?" 바꾸기 단계를 작은 것부터 차례로 놓게 하고, 2주 동안 지킨 날을 기록판에 적는 방법을 보인다. "습관은 마음만 먹으면 하루에 바뀐다"는 학생에게 "하루 만에 바꾸려다 사흘째 포기한 적은 없을까요?"라고 되묻는다. 어려운 날을 위한 대안을 미리 정해 두면 포기하지 않는다는 점을 짚는다.',
          task: '가상 학생 하준이 바꿀 습관 하나의 단계 카드를 차례로 놓고, 2주 동안 지킨 날을 적는 기록판을 채워요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '하준이 \'잠들기 전 휴대전화 오래 보기\'를 바꾸는 단계 카드를 차례로 놓으세요.', toolOptions: { title: '하준의 습관 바꾸기', cards: ['잠들기 30분 전 휴대전화를 거실에 두기', '바꿀 습관 하나 정하기', '알람을 잠들 시각 30분 전에 맞추기'] }, target: { order: ['바꿀 습관 하나 정하기', '알람을 잠들 시각 30분 전에 맞추기', '잠들기 30분 전 휴대전화를 거실에 두기'] } },
              { prompt: '하준의 습관 바꾸기 단계 카드 두 장을 차례로 놓으세요.', toolOptions: { cards: ['잠들기 30분 전 휴대전화를 거실에 두기', '바꿀 습관 하나 정하기'] }, target: { order: ['바꿀 습관 하나 정하기', '잠들기 30분 전 휴대전화를 거실에 두기'] } },
              { prompt: '하준의 습관 바꾸기 단계를 \'어려울 때 대안\'까지 넣어 차례로 놓으세요.', toolOptions: { cards: ['잠들기 30분 전 휴대전화를 거실에 두기', '못 지킨 날은 다음 날 10분 일찍 내려놓기', '바꿀 습관 하나 정하기', '알람을 잠들 시각 30분 전에 맞추기'] }, target: { order: ['바꿀 습관 하나 정하기', '알람을 잠들 시각 30분 전에 맞추기', '잠들기 30분 전 휴대전화를 거실에 두기', '못 지킨 날은 다음 날 10분 일찍 내려놓기'] } }),
            IT({ prompt: '서윤이 \'아침 거르기\'를 바꾸는 단계 카드를 차례로 놓으세요.', toolOptions: { title: '서윤의 습관 바꾸기', cards: ['우유와 빵을 식탁에 꺼내 두고 자기', '10분 일찍 일어나기', '바꿀 습관 하나 정하기'] }, target: { order: ['바꿀 습관 하나 정하기', '우유와 빵을 식탁에 꺼내 두고 자기', '10분 일찍 일어나기'] } },
              { prompt: '서윤의 습관 바꾸기 단계 카드 두 장을 차례로 놓으세요.', toolOptions: { cards: ['10분 일찍 일어나기', '바꿀 습관 하나 정하기'] }, target: { order: ['바꿀 습관 하나 정하기', '10분 일찍 일어나기'] } },
              { prompt: '서윤의 습관 바꾸기 단계를 \'어려울 때 대안\'까지 넣어 차례로 놓으세요.', toolOptions: { cards: ['우유와 빵을 식탁에 꺼내 두고 자기', '늦은 날은 우유 한 잔이라도 마시기', '10분 일찍 일어나기', '바꿀 습관 하나 정하기'] }, target: { order: ['바꿀 습관 하나 정하기', '우유와 빵을 식탁에 꺼내 두고 자기', '10분 일찍 일어나기', '늦은 날은 우유 한 잔이라도 마시기'] } }),
            IT({ prompt: '하준이 2주 동안 지킨 날 수를 기록판에 옮겨 적으세요: 1주 4일, 2주 6일.', toolOptions: { title: '하준의 2주 기록판', fields: [{ label: '1주 지킨 날', unit: '일' }, { label: '2주 지킨 날', unit: '일' }] }, target: { records: [4, 6] } },
              null, null, { conclude: '습관은 하나를 정해 작은 단계부터 바꾸고, 기록하고, 어려운 날의 대안을 미리 정해 두면 이어 갈 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 바꾸고 싶은 습관 하나의 계획을 써요. (걷지 않아요.)', columns: ['칸', '내용'], cells: [['바꿀 습관', ''], ['첫 단계', ''], ['어려울 때 대안', '']], answer: '자기 계획' }] },
      }),
      M('activity.care', {
        title: '반 생물 돌봄 갈림길', method: '생명 돌봄 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(자라난 뒤·다음 학기)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '반 생물 돌봄 갈림길', tool: 'dilemma',
          teacher: '"방학 동안 반 거북이를 학교 앞 개울에 놓아주면, 거북이와 개울 생물에게 어떤 일이 생길까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 하고, 영향 칸에서 생물 쪽 결과를 함께 읽는다. "생물을 돌보는 책임은 기르는 동안만"이라는 학생에게 "방학은 기르는 동안이 아닐까요? 생물이 다 자란 뒤에는요?"라고 되묻는다. 생명을 데려오기 전에 끝까지의 계획을 세운다는 점을 짚는다.',
          task: '반에서 기르는 생물을 둘러싼 가상 장면에서 길을 골라 결과를 따라가고, 끝에서 생명 존중의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '방학 동안 반 거북이를 어떻게 할까요? 한 번 골라 결과를 보세요.', base: '방학 동안 반 거북이를 어떻게 할까요? 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '방학 동안 반 거북이를 어떻게 할까요? 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '방학 동안 거북이', TURTLE, [['plan', 'card', 'consult']], TURTLE_R, ['r1', 'r2']),
            DIL({ easy: '교실 화분이 시들어 가요. 한 번 골라 결과를 보세요.', base: '교실 화분이 시들어 가요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '교실 화분이 시들어 가요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '시드는 화분', PLANT, [['find', 'log', 'share']], PLANT_R, ['r1', 'r2']),
            DIL({ easy: '관찰하던 곤충을 어떻게 할까요? 한 번 골라 결과를 보세요.', base: '관찰하던 곤충을 어떻게 할까요? 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '관찰하던 곤충을 어떻게 할까요? 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '관찰이 끝난 뒤', BUG, [['ask', 'help', 'first']], BUG_R, ['r1', 'r2'], null, { conclude: '생명을 돌보는 책임은 기르는 동안만이 아니라 끝까지 이어져요. 데려오기 전에 끝까지의 계획을 세워요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '방학 동안 반에서 기르는 생물에 대한 가장 알맞은 행동은?', options: ['학교 앞 개울에 놓아준다', '돌볼 사람과 방법을 정한 계획을 세운다', '먹이를 잔뜩 넣고 둔다'], answer: '돌볼 사람과 방법을 정한 계획을 세운다' }] },
      }),
      M('activity.meal', {
        title: '균형 잡힌 아침 식판', method: '균형 잡힌 아침 식판', tool: 'kitchen', minutes: 16,
        levels: { easy: '음식 카드 4장을 식품 갈래 2칸(곡류·고기)에 나눈다(바로 알려 준다).', base: '음식 카드 6장을 식품 갈래 3칸(곡류·고기·채소)에 나누고 갈래가 고루 든 아침을 고른다.', challenge: '시간이 없는 날 5분 안에 차릴 수 있으면서 두 갈래 이상 든 대안 아침을 고르는 문항까지 함정과 함께 푼다.' },
        activity: {
          title: '균형 잡힌 아침 식판', tool: 'kitchen',
          teacher: '"빵 두 개만 먹은 아침과 빵 하나·달걀·우유를 먹은 아침은 무엇이 다를까요?" 음식 카드를 갈래 칸에 나눈 뒤, 아침 식판에 갈래가 몇 개 들었는지 세어 보게 한다. "아침은 배만 채우면 된다"는 학생에게 "점심까지 버티는 힘은 어느 아침에서 더 나올까요?"라고 되묻는다. 바쁜 날에는 완벽한 식판보다 두 갈래라도 챙기는 대안이 낫다는 점을 짚는다. 학생의 실제 아침 식사는 묻지 않는다.',
          task: '가상 학생의 아침 음식 카드를 식품 갈래 칸에 나누고, 갈래가 고루 든 아침과 바쁜 날의 대안을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('아침 음식 카드를 식품 갈래 칸에 나누세요.', ['곡류', '고기', '채소'], [
              { id: 'f1', text: '밥', to: '곡류' }, { id: 'f2', text: '식빵', to: '곡류' }, { id: 'f3', text: '달걀', to: '고기' },
              { id: 'f4', text: '두부', to: '고기' }, { id: 'f5', text: '시금치', to: '채소' }, { id: 'f6', text: '김치', to: '채소' }]),
              SB('아침 음식 카드 네 장을 두 갈래 칸에 나누세요.', ['곡류', '고기'], [
                { id: 'f1', text: '밥', to: '곡류' }, { id: 'f2', text: '식빵', to: '곡류' }, { id: 'f3', text: '달걀', to: '고기' }, { id: 'f4', text: '두부', to: '고기' }])),
            IT(PB('식품 갈래가 세 가지 이상 고루 든 아침 식판만 골라 담으세요.', '고른 아침', [
              { id: 't1', text: '밥·달걀국·김치', ok: true }, { id: 't2', text: '식빵 두 장', },
              { id: 't3', text: '식빵·달걀·우유', ok: true }, { id: 't4', text: '과자와 음료수' }], { autoMotif: false }),
              PB('식품 갈래가 세 가지 이상 든 아침 식판만 골라 담으세요(3장).', '고른 아침', [
                { id: 't1', text: '밥·달걀국·김치', ok: true }, { id: 't2', text: '식빵 두 장' }, { id: 't4', text: '과자와 음료수' }], { autoMotif: false })),
            IT(PB('바쁜 날 5분 안에 차릴 수 있고 두 갈래 이상 든 대안 아침만 골라 담으세요.', '바쁜 날 아침', [
              { id: 'q1', text: '우유와 바나나', ok: true }, { id: 'q2', text: '삶은 달걀과 식빵 한 장', ok: true },
              { id: 'q3', text: '아침을 거르고 매점 과자', }, { id: 'q4', text: '사탕 몇 개' }], { autoMotif: false }),
              null,
              PB('바쁜 날 5분 안에 차릴 수 있고 두 갈래 이상 든 대안 아침만 골라 담으세요(함정 포함).', '바쁜 날 아침', [
                { id: 'q1', text: '우유와 바나나', ok: true }, { id: 'q2', text: '삶은 달걀과 식빵 한 장', ok: true },
                { id: 'q3', text: '아침을 거르고 매점 과자' }, { id: 'q4', text: '사탕 몇 개' },
                { id: 'q5', text: '두유와 주먹밥', ok: true }, { id: 'q6', text: '탄산음료 한 캔' }], { autoMotif: false }),
              { conclude: '아침은 갈래가 고루 들면 좋고, 바쁜 날에는 두 갈래라도 챙기는 대안을 정해 두면 거르지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '바쁜 날 5분 안에 차릴 수 있는 아침 한 가지와 든 식품 갈래를 써요.' }],
          easy: [{ type: 'choice', prompt: '갈래가 더 고루 든 아침에 ○ 해요.', options: ['식빵·달걀·우유', '식빵 두 장'], answer: '식빵·달걀·우유' }] },
      }),

      // ---- 정리 ----
      M('wrap.log', {
        title: '2주 수면 기록 돌아보기', method: '2주 생활 기록 돌아보기', tool: 'chart', minutes: 7,
        levels: { easy: '가상 학생의 1주(5일) 수면 시간 막대를 그린다.', base: '2주(10일) 수면 시간 막대를 그리고 변화를 읽는다.', challenge: '가상 학생이 스스로 정한 목표(7시간)보다 적게 잔 날이 며칠인지 그래프에서 읽는다.' },
        wrap: {
          teacher: '"하준이 습관을 바꾼 뒤 2주 동안 잠든 시간을 적었어요. 1주와 2주 가운데 어느 쪽 막대가 더 고른가요?" 막대를 그린 뒤 들쭉날쭉한 주와 고른 주를 견주게 한다. "기록은 귀찮기만 하다"는 학생에게 "기록이 없었다면 하준은 무엇이 달라졌는지 알 수 있었을까요?"라고 되묻는다. 자료는 가상 학생의 기록이며, 학생 자신의 수면 기록은 걷지 않는 활동지에만 적게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: { type: 'bar', title: '하준의 2주 수면 시간(가상 기록)', unit: '시간', xLabel: '날(①1주 ②2주)', yLabel: '잔 시간', max: 9, scale: 1, data: SLEEP2 },
              prompt: '하준의 2주 수면 기록 표를 보고 막대그래프를 완성해요.', target: { build: true }, difficulty: 0.25 },
            { prompt: '하준의 1주 수면 기록 표를 보고 막대그래프를 완성해요.', toolOptions: { data: SLEEP2.slice(0, 5) } },
            { prompt: '하준이 정한 목표 7시간보다 적게 잔 날은 며칠인지 그래프를 읽고 쓰세요.', toolOptions: { mode: 'read', question: '7시간보다 적게 잔 날은 며칠?' }, target: { value: 3 } }),
            { type: 'choice', prompt: '하준의 2주 기록에서 알 수 있는 것으로 가장 알맞은 것은?', options: ['모든 중학생은 7시간 잔다', '하준은 2주째에 1주보다 고르게 잤다', '수면 시간은 성적과 같다'], answer: 1, difficulty: 0.2, explain: '기록은 기록한 사람·기간 안의 변화만 보여 줘요.' },
          ],
        },
        worksheet: {
          title: '생활 기록 돌아보기',
          items: [
            { type: 'short', prompt: '하준의 1주와 2주 수면 기록을 견주어 달라진 점을 한 문장으로 써요.' },
            { type: 'table', prompt: '내 생활 기록을 해 보고 싶다면 적어 봐요. (걷지 않아요.)', columns: ['날', '잔 시간'], cells: [['', ''], ['', ''], ['', '']], answer: '자기 기록' },
          ],
        },
        notes: '체계도의 \'목표선 긋기\'는 그래프 교구가 선을 그을 수 없어, 목표보다 적게 잔 날 수 읽기로 바꿨다. 7시간은 가상 학생이 스스로 정한 목표이며 권장 수면 시간이 아니다.',
      }),
      M('wrap.pledge', {
        title: '생명 존중 다짐 글', method: '생명 존중 다짐 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 ___을(를) 돌볼 때 ___ 하겠다. 왜냐하면 ___.")을 채우고 기준 2개를 점검한다.', base: '생명을 돌보는 책임을 담은 다짐을 세 문장으로 쓰고 기준 3개(구체적 행동·까닭·끝까지의 책임)를 점검한다.', challenge: '실천할 날짜까지 넣어 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'생명을 소중히 하겠다\'와 \'방학 전 주에 반 거북이 돌봄 카드를 만들겠다\' 가운데 실제로 생명을 지키는 다짐은 어느 쪽일까요?" 두 문장을 견준 뒤, 교실 생물·주변 동식물 가운데 하나를 정해 다짐을 쓰게 한다. "작은 벌레까지 신경 쓰는 건 지나치다"는 학생에게 "오늘 갈림길에서 작은 선택이 생물에게 어떤 결과를 냈나요?"라고 되묻는다. 다짐 글은 발표시키지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '교실 생물이나 주변 동식물 하나를 정해, 생명을 돌보는 책임을 담은 다짐을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '생명 존중 다짐', placeholder: '예: 나는 교실 화분을…' },
              prompt: '생명 존중 다짐을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['돌볼 생명과 구체적 행동을 썼다', '그렇게 하는 까닭을 썼다', '끝까지 책임지는 내용을 넣었다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 생명 존중 다짐을 쓰고 기준표에 표시해요.', toolOptions: { starter: '나는 ___을(를) 돌볼 때 ___ 하겠다. 왜냐하면 ___.', minSentences: 2 }, target: { selfCheck: ['돌볼 생명과 구체적 행동을 썼다', '그렇게 하는 까닭을 썼다'] } },
            { prompt: '실천할 날짜까지 넣어 생명 존중 다짐을 쓰고 기준표에 표시해요.', target: { selfCheck: ['돌볼 생명과 구체적 행동을 썼다', '그렇게 하는 까닭을 썼다', '끝까지 책임지는 내용을 넣었다', '실천할 날짜를 썼다'] } }),
            { type: 'choice', prompt: '"생물을 돌보는 책임은 기르는 동안만이다"에 대한 반박으로 가장 알맞은 것은?', options: ['맞다, 다 기르면 끝이다', '방학·이사·다 자란 뒤처럼 기르기 어려운 때에도 책임은 이어진다', '생물은 스스로 알아서 산다'], answer: 1, difficulty: 0.2, explain: '데려온 순간부터 끝까지 책임이 이어져요.' },
          ],
        },
        worksheet: {
          title: '생명 존중 다짐',
          items: [
            { type: 'short', prompt: '내가 돌볼 생명 하나와 구체적인 행동을 넣어 다짐을 써요. (걷지 않아요.)' },
            { type: 'check', prompt: '내 다짐을 점검해요.', options: ['구체적 행동이 있다', '까닭이 있다', '끝까지의 책임이 있다'] },
          ],
          easy: { note: '문장 틀을 채워도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 다짐을 써요.', text: '나는 ___을(를) 돌볼 때 ___ 하겠다.', answer: '(예) 교실 화분, 물 주는 날을 기록표에 적겠다' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 갈등 속 바람 찾기와 토론 근거 (auto.m.g8-rel) ====
  {
    const M = MK('g8-rel', [8]);
    // 청소 구역 갈등
    const CLEAN = { text: '가상 2학년 반. 하준은 "복도 청소는 1모둠이 계속 해"라고 하고, 1모둠 서윤은 "우리만 3주째야, 이제 바꿔"라고 맞선다.', ask: '조정을 맡은 나는 어떻게 할까?', motif: 'storm', choices: [
      { id: 'vote', text: '바로 손을 들어 다수결로 정하자고 한다', result: '다른 모둠들이 손을 들어 1모둠이 또 맡게 된다.', impact: [{ who: '1모둠', text: '억울함이 쌓인다', tone: -1 }], why: '입장만 세면 그 아래 바람(공평함)을 놓쳐요.', end: '숫자로 정해 억울함이 남았어요.',
        next: { text: '1모둠이 다음 날부터 청소를 대충 한다.', choices: [
          { id: 'scold', text: '1모둠을 나무란다', result: '갈등이 더 커진다.', impact: [{ who: '1모둠', text: '더 서운하다', tone: -1 }] },
          { id: 'reopen', text: '두 쪽의 바람을 다시 들어 보자고 한다', result: '서로 바라는 것을 말하기 시작한다.', impact: [{ who: '두 쪽', text: '이야기할 기회가 생긴다', tone: 1 }] }] } },
      { id: 'listen', text: '두 사람에게 각자 바라는 것이 무엇인지 차례로 묻는다', result: '하준은 \'교실 청소가 늦어지지 않는 것\', 서윤은 \'공평하게 돌아가는 것\'을 바란다고 한다.', impact: [{ who: '두 쪽', text: '서로의 바람을 안다', tone: 1 }], end: '서로의 바람을 들었어요.',
        next: { text: '두 바람을 알게 되었다. 이제 해결안을 정해야 한다.', choices: [
          { id: 'onewin', text: '하준 말대로 1모둠이 계속 하되 칭찬을 해 주자고 한다', result: '서윤의 바람(공평함)은 채워지지 않는다.', impact: [{ who: '1모둠', text: '여전히 억울하다', tone: -1 }], why: '한쪽 바람만 채우면 갈등이 다시 돌아와요.' },
          { id: 'both', text: '모둠별로 2주씩 돌아가고, 교실 청소 시간표를 함께 정하자고 한다', result: '공평하게 돌아가고 교실 청소도 늦어지지 않는다.', impact: [{ who: '두 쪽', text: '바람이 함께 채워진다', tone: 1 }], end: '두 바람을 함께 채웠어요.',
            next: { text: '한 달 뒤 한 모둠이 순번을 자주 잊는다.', choices: [
              { id: 'board', text: '순번표를 게시판에 붙이고 담당 부장이 하루 전에 알리자고 한다', result: '순번이 지켜진다.', impact: [{ who: '반 모두', text: '약속을 지킨다', tone: 1 }] },
              { id: 'drop', text: '"역시 안 되네" 하고 예전으로 돌린다', result: '처음 갈등이 다시 시작된다.', impact: [{ who: '1모둠', text: '다시 억울하다', tone: -1 }], why: '약속은 지킬 방법을 함께 고쳐 가요.' }] } }] } },
      { id: 'side', text: '친한 하준 편을 들어 준다', result: '서윤이 조정자를 믿지 않게 된다.', impact: [{ who: '서윤', text: '편파적이라 느낀다', tone: -1 }], why: '조정자는 어느 편도 들지 않아요.', ending: '편을 들어 조정이 깨졌어요.' }] };
    const CLEAN_R = [{ id: 'r1', text: '입장 아래의 바람을 알면 함께 채우는 길이 보인다' }, { id: 'r2', text: '한쪽 바람만 채우면 갈등이 다시 돌아온다' },
      { id: 'r3', text: '갈등은 한쪽이 이겨야 끝난다', why: '한쪽이 이기면 다른 쪽의 바람이 남아 갈등이 돌아와요.' }, { id: 'r4', text: '다수결이면 언제나 공평하다', why: '다수결도 소수의 바람을 살피지 않으면 억울함이 남아요.' }];
    // 창문 열기 다툼
    const WIN = { text: '쉬는 시간, 다온은 "더우니까 창문 다 열자"고 하고 창가에 앉은 하린은 "추워, 닫아"라고 한다. 둘이 창문을 번갈아 여닫는다.', ask: '옆에 있던 나는 어떻게 할까?', motif: 'wind', choices: [
      { id: 'pick', text: '"더운 사람이 많으니 열자"고 한다', result: '하린이 혼자 덜덜 떤다.', impact: [{ who: '하린', text: '춥고 서운하다', tone: -1 }], why: '사람 수보다 각자 바라는 것을 먼저 봐요.', end: '한쪽 편을 들어 하린이 서운했어요.',
        next: { text: '하린이 다음 시간에 겉옷을 뒤집어쓰고 엎드린다.', choices: [
          { id: 'none', text: '모른 척한다', result: '하린이 수업에 집중하지 못한다.', impact: [{ who: '하린', text: '수업을 놓친다', tone: -1 }] },
          { id: 'ask2', text: '하린에게 무엇이 필요한지 묻는다', result: '창가 쪽만 닫으면 된다고 한다.', impact: [{ who: '하린', text: '들어 준다고 느낀다', tone: 1 }] }] } },
      { id: 'needs', text: '두 사람에게 바라는 것을 묻는다', result: '다온은 \'시원한 공기\', 하린은 \'창가 쪽이 춥지 않은 것\'을 바란다.', impact: [{ who: '두 사람', text: '바람이 드러난다', tone: 1 }], end: '두 사람의 바람을 물었어요.',
        next: { text: '두 바람을 알았다. 무엇을 제안할까?', choices: [
          { id: 'half', text: '복도 쪽 창은 열고 창가 쪽은 닫자고 한다', result: '공기는 바뀌고 창가도 덜 춥다.', impact: [{ who: '두 사람', text: '바람이 함께 채워진다', tone: 1 }], end: '두 바람을 함께 채웠어요.',
            next: { text: '다음 날 같은 다툼이 다른 친구들 사이에서 생긴다.', choices: [
              { id: 'class', text: '학급 회의에서 창문 약속을 정하자고 건의한다', result: '반 전체 약속이 생긴다.', impact: [{ who: '반 모두', text: '다툼이 줄어든다', tone: 1 }] },
              { id: 'again', text: '그때그때 싸우게 둔다', result: '다툼이 되풀이된다.', impact: [{ who: '반 모두', text: '불편하다', tone: -1 }], why: '되풀이되는 갈등은 공동의 약속으로 풀어요.' }] } },
          { id: 'coin', text: '동전을 던져 이긴 사람 말대로 하자고 한다', result: '진 사람의 바람은 그대로 남는다.', impact: [{ who: '진 사람', text: '불만이 남는다', tone: -1 }], why: '운으로 정하면 바람을 채우지 못해요.' }] } },
      { id: 'leave', text: '시끄러워서 교실 밖으로 나가 버린다', result: '두 사람의 다툼이 커진다.', impact: [{ who: '두 사람', text: '목소리가 커진다', tone: -1 }], why: '도울 수 있을 때 한 마디 거들면 갈등이 작아져요.', ending: '자리를 피해 다툼이 커졌어요.' }] };
    const WIN_R = [{ id: 'r1', text: '두 사람의 바람을 함께 채우는 방법을 찾을 수 있다' }, { id: 'r2', text: '되풀이되는 갈등은 공동의 약속으로 푼다' },
      { id: 'r3', text: '사람이 많은 쪽 말이 언제나 옳다', why: '사람 수보다 바람을 먼저 봐요.' }, { id: 'r4', text: '운으로 정하면 공평하다', why: '운으로 정하면 진 사람의 바람이 남아요.' }];
    // 발표 역할 다툼
    const ROLE = { text: '모둠 발표 준비. 도윤과 수아가 둘 다 "내가 발표할래"라며 다툰다. 나머지 둘은 자료 정리만 하고 싶어 한다.', ask: '모둠장인 나는 어떻게 할까?', motif: 'storm', choices: [
      { id: 'me', text: '"그럼 내가 할게"라며 내가 맡는다', result: '두 사람 모두 서운해한다.', impact: [{ who: '도윤·수아', text: '둘 다 서운하다', tone: -1 }], why: '두 사람의 바람을 묻지 않고 정하면 둘 다 서운해요.', end: '내가 맡아 둘 다 서운해했어요.',
        next: { text: '두 사람이 준비에 손을 놓는다.', choices: [
          { id: 'alone', text: '혼자 다 준비한다', result: '발표 준비가 늦어진다.', impact: [{ who: '모둠', text: '준비가 늦다', tone: -1 }] },
          { id: 'askwhy', text: '왜 발표하고 싶은지 둘에게 묻는다', result: '바라는 것이 서로 다르다는 것을 안다.', impact: [{ who: '모둠', text: '다시 이야기한다', tone: 1 }] }] } },
      { id: 'why', text: '두 사람에게 발표하고 싶은 까닭을 묻는다', result: '도윤은 \'말하기 연습\', 수아는 \'자기가 찾은 자료를 직접 소개하기\'를 바란다.', impact: [{ who: '도윤·수아', text: '바람이 드러난다', tone: 1 }], end: '발표하고 싶은 까닭을 들었어요.',
        next: { text: '두 바람을 알았다. 어떻게 나눌까?', choices: [
          { id: 'split', text: '도윤은 앞부분 발표, 수아는 자기 자료 부분 발표로 나누자고 한다', result: '두 사람 모두 맡고 싶은 것을 맡는다.', impact: [{ who: '도윤·수아', text: '바람이 함께 채워진다', tone: 1 }], end: '발표를 나눠 둘의 바람을 채웠어요.',
            next: { text: '자료 정리를 맡은 둘이 "우리는 발표에 안 나오니 덜 중요하냐"고 묻는다.', choices: [
              { id: 'credit', text: '발표 끝에 자료를 만든 사람을 소개하자고 한다', result: '모두의 몫이 드러난다.', impact: [{ who: '모둠 모두', text: '인정받는다', tone: 1 }] },
              { id: 'ignore2', text: '"발표가 제일 중요해"라고 한다', result: '두 사람이 서운해한다.', impact: [{ who: '자료 담당', text: '서운하다', tone: -1 }], why: '보이지 않는 몫도 함께 인정해요.' }] } },
          { id: 'rps', text: '가위바위보로 한 사람만 정한다', result: '진 사람의 바람이 남는다.', impact: [{ who: '진 사람', text: '아쉬움이 남는다', tone: -1 }], why: '나눌 수 있는 길이 있는지 먼저 찾아봐요.' }] } },
      { id: 'wait', text: '둘이 알아서 정하라며 지켜본다', result: '다툼이 길어져 준비 시간이 줄어든다.', impact: [{ who: '모둠', text: '시간을 잃는다', tone: -1 }], why: '모둠장이 바람을 묻는 자리를 만들어 줄 수 있어요.', ending: '지켜보기만 해서 시간을 잃었어요.' }] };
    const ROLE_R = [{ id: 'r1', text: '같은 입장이어도 바람이 다르면 나눌 길이 있다' }, { id: 'r2', text: '모두의 몫을 드러내면 함께한다고 느낀다' },
      { id: 'r3', text: '한 사람이 이겨야 깔끔하다', why: '한쪽이 이기면 다른 쪽 바람이 남아요.' }, { id: 'r4', text: '다툼은 끼어들지 않는 것이 좋다', why: '바람을 묻는 자리를 만들어 주면 도울 수 있어요.' }];
    const EVID = [
      { id: 'e1', text: '학교가 전교생에게 한 설문에서 62%가 찬성했다', to: '믿을 만함' }, { id: 'e2', text: '친구가 "다들 그렇대"라고 했다', to: '믿기 어려움' },
      { id: 'e3', text: '공공기관 누리집 통계에 나온 수치다', to: '믿을 만함' }, { id: 'e4', text: '조회 수가 많은 영상에서 그렇게 말했다', to: '믿기 어려움' },
      { id: 'e5', text: '두 달 동안 우리 반 기록을 모은 결과다', to: '믿을 만함' }, { id: 'e6', text: '댓글이 1000개 달린 글의 주장이다', to: '믿기 어려움' },
    ];
    const FIELD = [['찬성', 18], ['반대', 7], ['잘 모름', 5]];

    ALL.push(
      // ---- 도입 ----
      M('intro.iceberg', {
        title: '빙산으로 보는 입장과 바람', method: '빙산 그림으로 입장·바람 보기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 2개(물 위 입장·물 아래 바람)에 카드를 하나씩 붙여 보인다.', base: '두 사람의 입장·바람 가지 4개에 카드가 붙는 모습을 보고 차이를 말한다.', challenge: '두 사람 모두의 바람을 함께 채울 방법을 말로 제안한다.' },
        intro: {
          teacher: '"\'1모둠이 계속 복도 청소 해\'와 \'이제 바꿔\'는 겉으로 보이는 입장이에요. 그 아래, 물에 잠긴 빙산에는 무엇이 있을까요?" 시연 단추로 하준·서윤의 입장과 바람 카드가 가지에 붙는 모습을 보인다. "갈등은 한쪽이 이겨야 끝난다"는 말이 나오면 "두 사람의 바람이 꼭 부딪칠까요?"라고 되묻는다. 입장은 부딪쳐도 바람은 함께 채울 수 있는 경우가 많다는 점을 짚는다.',
          student: '가상 청소 구역 갈등에서 두 사람의 입장(물 위)과 바람(물 아래)이 빙산 가지에 붙는 것을 보고, 바람이 서로 부딪치는지 생각해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '청소 구역 갈등', slots: ['하준 입장', '하준 바람', '서윤 입장', '서윤 바람'], cards: [{ id: 'c1', text: '1모둠이 계속 맡아' }, { id: 'c2', text: '교실 청소가 늦어지지 않기' }, { id: 'c3', text: '이제 바꿔' }, { id: 'c4', text: '공평하게 돌아가기' }] }, sequence: [{ at: { c1: 0, c3: 2 } }, { at: { c1: 0, c2: 1, c3: 2, c4: 3 } }] },
          art: { draw: 'a paper-cut iceberg floating in layered blue paper water, small labels on the tip above the water and larger labels hidden below, two teenagers standing on either side', banner: '물 아래에는 무엇이 있을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      M('intro.debate-clip', {
        title: '토론 장면에서 차례 고르기', method: '토론 장면에서 차례 고르기', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 장면 카드 3장(입론·반론·최종 발언)을 차례로 놓아 보인다.', base: '장면 카드 5장(사회자 안내·찬성 입론·반대 입론·반론·최종 발언)이 놓이는 모습을 보고 차례를 말한다.', challenge: '단계마다 토론자가 할 말을 한 문장씩 말한다.' },
        intro: {
          teacher: '"\'쉬는 시간 운동장 개방을 늘리자\'는 가상 토론이에요. 상대 주장을 반박하는 말은 처음에 할까요, 상대 주장을 들은 뒤에 할까요?" 시연 단추로 장면 카드가 차례대로 놓이는 모습을 보인다. "토론은 목소리 큰 쪽이 이기는 것"이라는 말이 나오면 "차례가 정해진 토론에서 이기는 쪽은 무엇을 갖춘 쪽일까요?"라고 되묻는다. 토론은 차례와 근거로 겨룬다는 점을 짚는다.',
          student: '가상 토론 장면 카드가 입론→반론→최종 발언 차례로 놓이는 것을 보고, 각 단계에서 무엇을 말하는지 생각해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['처음', '끝'], slots: 5, cards: [{ id: 'd1', text: '사회자가 주제·규칙 안내' }, { id: 'd2', text: '찬성 입론' }, { id: 'd3', text: '반대 입론' }, { id: 'd4', text: '서로 반론' }, { id: 'd5', text: '최종 발언' }] }, sequence: [{ at: { d1: 0, d2: 1, d3: 2 } }, { at: { d1: 0, d2: 1, d3: 2, d4: 3, d5: 4 } }] },
          art: { draw: 'a paper-cut classroom debate with two facing desks, a student moderator in the middle holding a small timer, and a paper timeline strip above them', banner: '토론은 어떤 차례로?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '체계도 id 는 2026-11-02 코디네이터 공지로 intro.debateClip → intro.debate-clip 으로 바뀌었다.',
      }),

      // ---- 활동 ----
      M('activity.win', {
        title: '함께 채우는 해결 갈림길', method: '함께 채우는 해결 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(약속을 지키는 장면)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '함께 채우는 해결 갈림길', tool: 'dilemma',
          teacher: '"다수결로 정한 길과 바람을 물은 길, 한 달 뒤 반 분위기는 어떻게 다를까요?" 한 길을 끝까지 가 본 뒤 되돌아가 다른 길의 결과·영향과 견주게 한다. "갈등은 한쪽이 이겨야 끝난다"는 학생에게 "진 쪽의 바람은 어디로 갈까요?"라고 되묻는다. 조정자는 편을 들지 않고 바람을 묻는 사람이라는 점을 짚는다.',
          task: '가상 갈등 장면에서 길을 골라 결과를 따라가며 두 쪽의 바람을 함께 채우는 해결을 찾고, 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '청소 구역으로 다퉈요. 한 번 골라 결과를 보세요.', base: '청소 구역으로 다퉈요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '청소 구역으로 다퉈요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '청소 구역 갈등', CLEAN, [['listen', 'both', 'board']], CLEAN_R, ['r1', 'r2']),
            DIL({ easy: '창문을 두고 다퉈요. 한 번 골라 결과를 보세요.', base: '창문을 두고 다퉈요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '창문을 두고 다퉈요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '창문 다툼', WIN, [['needs', 'half', 'class']], WIN_R, ['r1', 'r2']),
            DIL({ easy: '발표 역할로 다퉈요. 한 번 골라 결과를 보세요.', base: '발표 역할로 다퉈요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '발표 역할로 다퉈요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '발표 역할 다툼', ROLE, [['why', 'split', 'credit']], ROLE_R, ['r1', 'r2'], null, { conclude: '입장이 부딪쳐도 바람을 물으면 함께 채우는 길이 보여요. 정한 약속은 지킬 방법까지 함께 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '청소 구역 갈등에서 두 사람의 입장과 바람을 써요.', columns: ['사람', '입장', '바람'], cells: [['하준', '', ''], ['서윤', '', '']], answer: '1모둠이 계속 맡아·교실 청소가 늦지 않기 / 이제 바꿔·공평하게 돌아가기' }] },
      }),
      M('activity.mediate', {
        title: '또래 조정 역할극', method: '또래 조정 역할극', tool: 'timer', minutes: 16,
        levels: { easy: '조정 차례 카드 5장을 놓고, 대본을 보며 한 번 역할극을 한다.', base: '차례 카드를 놓고 대본 일부를 즉흥으로 바꿔 역할극을 한 뒤 점검 칸을 표시한다.', challenge: '역할을 바꿔 두 번 하도록 타이머를 맞추고 역할극을 한 뒤 점검 칸을 표시한다.' },
        activity: {
          title: '또래 조정 역할극', tool: 'timer',
          teacher: '"조정자는 누가 잘못했는지 판정하는 사람일까요, 두 사람이 해결안을 찾게 돕는 사람일까요?" 셋씩 당사자 둘·조정자 하나를 맡게 하고, 조정 차례 카드를 놓은 뒤 청소 구역 대본으로 역할극을 하게 한다. "조정자가 해결안을 정해 주면 빠르다"는 학생에게 "스스로 만든 약속과 남이 정해 준 약속 가운데 어느 쪽을 더 잘 지킬까요?"라고 되묻는다. 괴롭힘이 의심되는 일은 또래 조정이 아니라 선생님께 알린다는 점을 분명히 한다.',
          task: '셋이 당사자·조정자 역할을 맡아 또래 조정 차례를 놓고, 타이머에 맞춰 역할극을 한 뒤 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '또래 조정의 차례 카드를 놓으세요.', toolOptions: { title: '또래 조정 차례', cards: ['해결안 함께 만들기', '조정 규칙 정하기(끼어들지 않기)', '약속하고 확인 날짜 정하기', '한 사람씩 차례로 이야기하기', '각자의 바람 찾기'] }, target: { order: ['조정 규칙 정하기(끼어들지 않기)', '한 사람씩 차례로 이야기하기', '각자의 바람 찾기', '해결안 함께 만들기', '약속하고 확인 날짜 정하기'] } }),
            IT({ prompt: '역할극을 한 번 하도록 역할극 4분·바꾸기 1분으로 타이머를 맞추세요.', toolOptions: { title: '또래 조정 역할극 시간', timeUnit: 'min', labels: ['역할극', '바꾸기'], plan: { work: 2, rest: 2, rounds: 1 } }, target: { plan: { work: 4, rest: 1, rounds: 1 } } },
              null,
              { prompt: '역할을 바꿔 두 번 하도록 역할극 4분·바꾸기 1분·2번으로 타이머를 맞추세요.', target: { plan: { work: 4, rest: 1, rounds: 2 } } }),
            IT({ prompt: '역할극을 마친 뒤 조정자로서(또는 당사자로서) 한 일을 스스로 점검하세요.', toolOptions: { title: '또래 조정 스스로 점검' }, target: { selfCheck: ['어느 편도 들지 않았다', '두 사람의 바람을 물었다', '해결안을 두 사람이 함께 만들게 했다'] } },
              null, null, { conclude: '조정자는 판정하지 않고 차례와 질문으로 돕고, 두 사람이 스스로 해결안을 만들게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '역할극에서 조정자가 한 질문 가운데 가장 도움이 된 것을 한 줄로 써요.' }] },
        notes: '교사 진행 모듈이다. 역할극은 가상 갈등 대본으로 하고, 반 안의 실제 갈등을 소재로 쓰지 않는다.',
      }),
      M('activity.evidence', {
        title: '믿을 만한 근거 가리기', method: '믿을 만한 근거 가리기', tool: 'sortboard', minutes: 16,
        levels: { easy: '근거 카드 4장을 두 칸(믿을 만함·믿기 어려움)에 나누고, 틀리면 바로 되돌아온다.', base: '근거 카드 6장을 두 칸에 나눈다.', challenge: '같은 주장의 근거를 출처가 분명한 것과 불분명한 것으로 가려 나누는 문항까지 푼다.' },
        activity: {
          title: '믿을 만한 근거 가리기', tool: 'sortboard',
          teacher: '"조회 수가 많은 영상에서 나온 말과 학교가 전교생에게 한 설문 결과 가운데 토론 근거로 무엇이 더 믿을 만할까요?" 카드를 놓을 때마다 누가, 언제, 어떻게 조사했는지 묻는다. "많은 사람이 말하면 좋은 근거다"는 학생에게 "1000명이 같은 소문을 퍼뜨리면 그 소문은 사실이 될까요?"라고 되묻는다. 근거의 힘은 사람 수가 아니라 출처와 조사 방법에서 나온다는 점을 짚는다.',
          task: '토론 근거 카드를 \'믿을 만함\'과 \'믿기 어려움\'으로 나누고, 출처가 분명한지 따져요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('근거 카드를 두 칸에 나누세요.', ['믿을 만함', '믿기 어려움'], EVID),
              BB('근거 카드 4장을 두 칸에 나누세요.', ['믿을 만함', '믿기 어려움'], EVID.slice(0, 4))),
            IT(BB('\'쉬는 시간 운동장 개방\' 토론의 근거를 두 칸에 나누세요.', ['믿을 만함', '믿기 어려움'], [
              { id: 'g1', text: '보건실 기록: 지난달 운동장 사고 3건', to: '믿을 만함' }, { id: 'g2', text: '"운동장 나가면 다 다친대"라는 소문', to: '믿기 어려움' },
              { id: 'g3', text: '학생회가 전교생에게 한 설문 결과', to: '믿을 만함' }, { id: 'g4', text: '한 친구의 "나는 싫어"라는 말', to: '믿기 어려움' }]),
              BB('운동장 개방 토론의 근거 카드 2장을 두 칸에 나누세요.', ['믿을 만함', '믿기 어려움'], [
                { id: 'g1', text: '보건실 기록: 지난달 운동장 사고 3건', to: '믿을 만함' }, { id: 'g2', text: '"운동장 나가면 다 다친대"라는 소문', to: '믿기 어려움' }])),
            IT(BB('근거 카드를 출처가 분명한 것과 불분명한 것으로 나누세요.', ['출처가 분명함', '출처가 불분명함'], [
              { id: 'h1', text: '\'어디선가 봤는데\' 하는 통계', to: '출처가 불분명함' }, { id: 'h2', text: '조사한 곳·날짜가 적힌 설문 결과', to: '출처가 분명함' },
              { id: 'h3', text: '누가 썼는지 모르는 캡처 사진', to: '출처가 불분명함' }, { id: 'h4', text: '공공기관 누리집 자료(날짜 표기)', to: '출처가 분명함' }]),
              null, null, { conclude: '근거는 많은 사람이 말한다고 믿을 만해지지 않아요. 누가, 언제, 어떻게 조사했는지 출처를 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '믿을 만한 근거인지 따질 때 물어볼 질문 두 가지를 써요.' }],
          easy: [{ type: 'choice', prompt: '더 믿을 만한 근거에 ○ 해요.', options: ['전교생 설문 결과', '"다들 그렇대"'], answer: '전교생 설문 결과' }] },
      }),
      M('activity.data', {
        title: '토론 근거 자료 그래프 읽기', method: '근거 자료 그래프 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '그래프 하나를 읽고 찬성 주장에 맞는 근거 하나를 고른다.', base: '그래프 두 개를 읽고 주장마다 맞는 근거를 고른다.', challenge: '같은 그래프에서 반대편이 쓸 반론 근거까지 고른다.' },
        activity: {
          title: '토론 근거 자료 그래프 읽기', tool: 'chart',
          teacher: '"찬성 18명이라는 막대만 보고 \'모두가 원한다\'고 말해도 될까요?" 가상 설문 그래프를 읽고 주장에 맞는 근거 문장을 고르게 한다. "내 주장에 유리한 숫자만 말하면 된다"는 학생에게 "상대가 \'잘 모름\' 5명을 짚으면 어떻게 답할까요?"라고 되묻는다. 좋은 근거는 자료가 말하는 만큼만 말한다는 점을 짚는다. 자료는 모두 가상이다.',
          task: '\'쉬는 시간 운동장 개방을 늘리자\' 토론의 가상 자료 그래프를 읽고, 주장에 맞는 근거와 반론 근거를 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '가상 설문 그래프에서 찬성 주장에 맞는 근거를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '운동장 개방 확대에 대한 생각(가상 학급 30명)', unit: '명', xLabel: '응답', yLabel: '학생 수', data: FIELD, question: '찬성 주장에 맞는 근거는?', choices: ['30명 가운데 18명이 찬성했다', '모든 학생이 찬성했다', '반대가 가장 많았다'] }, target: { pick: 0 } }),
            IT({ prompt: '가상 사고 기록 그래프에서 반대 주장에 맞는 근거를 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '월별 쉬는 시간 운동장 사고(가상 보건실 기록)', unit: '건', xLabel: '월', yLabel: '사고 수', data: [['3월', 1], ['4월', 2], ['5월', 4], ['6월', 3]], question: '반대 주장에 맞는 근거는?', choices: ['5월에 사고가 가장 많았다', '사고가 한 건도 없었다', '사고가 줄곧 줄었다'] }, target: { pick: 0 } },
              null,
              { prompt: '사고 기록 그래프에서 찬성 쪽이 쓸 반론 근거를 고르세요.', toolOptions: { question: '찬성 쪽 반론 근거는?', choices: ['6월에는 5월보다 사고가 줄었다', '사고 기록은 믿을 수 없다', '사고는 상관없다'] }, target: { pick: 0 } }),
            IT({ prompt: '설문 그래프에서 반대 쪽이 쓸 반론 근거를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '운동장 개방 확대에 대한 생각(가상 학급 30명)', unit: '명', xLabel: '응답', yLabel: '학생 수', data: FIELD, question: '반대 쪽이 쓸 반론 근거는?', choices: ['반대와 잘 모름을 더하면 12명이다', '찬성이 한 명도 없다', '설문은 아무 뜻이 없다'] }, target: { pick: 0 } },
              null, null, { conclude: '같은 그래프에서도 양쪽 근거가 나와요. 자료가 말하는 만큼만 말하고, 상대가 짚을 숫자도 미리 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '설문 그래프로 찬성 근거 문장 하나를 자료가 말하는 만큼만 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.mini', {
        title: '모둠 대항 미니 토론', method: '미니 토론', tool: 'timer', minutes: 7,
        levels: { easy: '입론만 하는 미니 토론(찬성 입론→반대 입론)의 차례를 놓고 진행한다.', base: '입론·반론까지 네 차례를 놓고 진행한다.', challenge: '최종 발언까지 여섯 차례를 놓고 발언 1분으로 맞춰 진행한다.' },
        wrap: {
          teacher: '"주제는 \'쉬는 시간 운동장 개방을 늘리자\'예요. 발언은 1분, 시간 지킴이가 10초 전에 손을 들어요." 교사가 사회를 보며 모둠 대항으로 진행하고, 차례 카드대로 발언하게 한다. "말을 끊고 들어가야 이긴다"는 학생에게 "차례를 지킨 반론과 끊고 들어온 반론 가운데 무엇이 더 설득력 있게 들릴까요?"라고 되묻는다. 토론이 끝나면 차례를 지켰는지 표시한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '미니 토론', timeUnit: 'min', labels: ['발언', '작전'], plan: { work: 2, rest: 0, rounds: 1 }, cards: ['반대 반론', '찬성 입론', '찬성 반론', '반대 입론'] },
              prompt: '미니 토론의 차례 카드를 놓고, 발언 1분으로 타이머를 맞춰요.', target: { order: ['찬성 입론', '반대 입론', '반대 반론', '찬성 반론'], plan: { work: 1 } }, difficulty: 0.2 },
            { prompt: '입론만 하는 미니 토론 차례 카드를 놓고, 발언 1분으로 맞춰요.', toolOptions: { cards: ['반대 입론', '찬성 입론'] }, target: { order: ['찬성 입론', '반대 입론'], plan: { work: 1 } } },
            { prompt: '최종 발언까지 미니 토론 차례 카드를 놓고, 발언 1분으로 맞춰요.', toolOptions: { cards: ['반대 반론', '찬성 최종 발언', '찬성 입론', '반대 최종 발언', '찬성 반론', '반대 입론'] }, target: { order: ['찬성 입론', '반대 입론', '반대 반론', '찬성 반론', '반대 최종 발언', '찬성 최종 발언'], plan: { work: 1 } } }),
            { type: 'choice', prompt: '미니 토론에서 반론을 할 때 가장 알맞은 것은?', options: ['상대 말을 끊고 바로 반박한다', '차례가 오면 상대 근거의 약한 점을 짚는다', '상대를 비꼬는 말을 한다'], answer: 1, difficulty: 0.2, explain: '반론은 차례에 맞춰 근거를 겨루는 거예요.' },
          ],
        },
        worksheet: {
          title: '미니 토론 돌아보기',
          items: [
            { type: 'check', prompt: '토론에서 지킨 것에 표시해요.', options: ['차례 지키기', '1분 안에 말하기', '근거 들어 말하기', '상대를 존중하는 말'] },
            { type: 'short', prompt: '상대 쪽 근거 가운데 기억에 남는 것 하나를 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 반론 차례에서는 반대 쪽이 먼저 반론하고 찬성 쪽이 이어 반론하는 교실용 형식으로 정했다.',
      }),
      M('wrap.reflect', {
        title: '토론 근거 돌아보기 글', method: '토론 돌아보기 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("내 근거는 ___였다. 상대 근거 ___는 ___.")을 채우고 기준 2개를 점검한다.', base: '내 근거 하나와 상대 근거 하나를 평가하는 글을 네 문장으로 쓰고 기준 3개를 점검한다.', challenge: '내 근거 가운데 고칠 점과 고칠 방법까지 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"오늘 내가 쓴 근거는 출처가 분명했나요? 상대가 쓴 근거 가운데 인정할 만한 것은 무엇이었나요?" 근거를 \'출처·자료가 말하는 만큼\' 기준으로 평가하는 글을 쓰게 한다. "상대 근거를 칭찬하면 진 것"이라는 학생에게 "좋은 근거를 알아보는 눈이 다음 토론에서 무엇을 바꿀까요?"라고 되묻는다. 친구 이름 대신 \'찬성 쪽\'·\'반대 쪽\'으로 쓰게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 토론에서 내가 쓴 근거 하나와 상대 쪽 근거 하나를 출처·자료가 말하는 만큼을 기준으로 평가해 네 문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 4, maxSentences: 5, title: '토론 돌아보기', placeholder: '내 근거는…' },
              prompt: '토론 돌아보기 글을 네 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['내 근거 하나를 평가했다', '상대 근거 하나를 평가했다', '출처나 자료를 기준으로 평가했다'] }, difficulty: 0.3 },
            { prompt: '문장 틀을 채워 토론 돌아보기 글을 쓰고 기준표에 표시해요.', toolOptions: { starter: '내 근거는 ___였다. 상대 근거 ___는 ___.', minSentences: 2 }, target: { selfCheck: ['내 근거 하나를 평가했다', '상대 근거 하나를 평가했다'] } },
            { prompt: '내 근거의 고칠 점과 고칠 방법까지 넣어 돌아보기 글을 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 6 }, target: { selfCheck: ['내 근거 하나를 평가했다', '상대 근거 하나를 평가했다', '출처나 자료를 기준으로 평가했다', '내 근거를 고칠 방법을 썼다'] } }),
            { type: 'choice', prompt: '근거를 평가하는 문장으로 가장 알맞은 것은?', options: ['상대 근거는 그냥 틀렸다', '상대 근거는 출처가 분명했지만 30명만 조사해 전체를 말하기는 어렵다', '내 근거는 내 생각이라 맞다'], answer: 1, difficulty: 0.2, explain: '출처와 자료가 말하는 범위를 함께 짚어요.' },
          ],
        },
        worksheet: {
          title: '토론 돌아보기',
          items: [
            { type: 'short', prompt: '내가 쓴 근거 하나를 출처 기준으로 평가해요.' },
            { type: 'short', prompt: '상대 쪽 근거 가운데 인정할 만한 것과 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 건의와 학교 규칙 개정 참여 (auto.m.g8-self) ====
  {
    const M = MK('g8-self', [8]);
    const SCHOOL = { grid: [6, 4], title: '가상의 우리 중학교 건의 길', regions: [
      { name: '2학년 3반 교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '대의원회 회의실', cells: [[2, 0], [3, 0]] }, { name: '학생회실', cells: [[4, 0], [5, 0]] },
      { name: '복도', cells: [[2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '교무실', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '교장실', cells: [[2, 2], [3, 2]] },
      { name: '도서관', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] }, { name: '급식실', cells: [[2, 3], [3, 3]] },
    ] };
    const RULES = [['휴대전화 보관', 11], ['겨울 체육복 등교', 8], ['급식 줄 차례', 5], ['쉬는 시간 운동장', 4], ['교실 난방 시간', 2]];
    const STEPS = [{ id: 's1', text: '학급 회의에서 건의 안건 정하기' }, { id: 's2', text: '건의문 쓰기' }, { id: 's3', text: '대의원회에 올리기' }, { id: 's4', text: '학생회가 정리해 학교에 전달' }, { id: 's5', text: '학교의 답변 받기' }, { id: 's6', text: '학급에 결과 알리기' }];
    // 휴대전화 규칙 토론회
    const PHONE = { text: '가상 학교 학생회가 \'수업 시간 휴대전화 보관 규칙\' 개정 토론회를 연다. 사회를 맡은 나에게 "학생회 임원끼리 정하면 빠르다"는 말이 들려온다.', ask: '사회자인 나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'quick', text: '임원 회의에서 바로 개정안을 정한다', result: '빨리 정했지만 "우리는 의견도 못 냈다"는 불만이 나온다.', impact: [{ who: '전교생', text: '결정에 납득하지 못한다', tone: -1 }], why: '모두에게 걸리는 규칙은 모두의 의견을 들어야 지켜져요.', end: '의견 없이 정해 불만이 나왔어요.',
        next: { text: '개정안을 지키지 않는 학생이 늘어난다.', choices: [
          { id: 'punish', text: '벌점을 늘리자고 한다', result: '불만이 더 커진다.', impact: [{ who: '전교생', text: '반발한다', tone: -1 }] },
          { id: 'hear', text: '늦었지만 의견 수렴을 다시 하자고 한다', result: '설문과 학급 토의 일정을 잡는다.', impact: [{ who: '전교생', text: '의견을 낼 기회가 생긴다', tone: 1 }] }] } },
      { id: 'survey', text: '토론회 전에 학급마다 의견을 모으고 설문을 하자고 한다', result: '찬성·반대·조건부 찬성 의견이 고루 모인다.', impact: [{ who: '전교생', text: '의견을 낼 수 있다', tone: 1 }], end: '의견을 먼저 고루 모았어요.',
        next: { text: '토론회에서 찬성 쪽 발언이 길어지고 반대 쪽은 말할 시간이 거의 없다.', choices: [
          { id: 'cut', text: '시간이 없으니 그대로 마친다', result: '반대 쪽 의견이 기록에 남지 않는다.', impact: [{ who: '반대 쪽 학생', text: '목소리가 사라진다', tone: -1 }], why: '토론회는 양쪽이 같은 시간을 가져야 공정해요.' },
          { id: 'equal', text: '양쪽 발언 시간을 똑같이 3분으로 다시 나눈다', result: '반대 쪽 \'점심시간만 허용\' 대안이 나온다.', impact: [{ who: '양쪽', text: '공정하게 말한다', tone: 1 }], end: '시간을 똑같이 나눠 대안이 나왔어요.',
            next: { text: '토론회 결과를 학교에 전할 차례다. 대안이 여럿이다.', choices: [
              { id: 'all', text: '다수 의견과 소수 대안을 함께 정리해 학교에 전하고 결과를 알린다', result: '학교가 대안을 함께 검토해 답변한다.', impact: [{ who: '전교생', text: '결과를 안다', tone: 1 }] },
              { id: 'mine', text: '내가 좋아하는 안만 골라 전한다', result: '다른 의견이 빠진다.', impact: [{ who: '전교생', text: '대표성을 잃는다', tone: -1 }], why: '사회자는 모은 의견을 고루 전해요.' }] } }] } },
      { id: 'cancel', text: '시끄러워질 것 같으니 토론회를 취소한다', result: '규칙은 그대로이고 불만만 남는다.', impact: [{ who: '전교생', text: '말할 곳이 없다', tone: -1 }], why: '의견이 갈릴수록 들을 자리가 필요해요.', ending: '취소해서 불만만 남았어요.' }] };
    const PHONE_R = [{ id: 'r1', text: '모두에게 걸리는 규칙은 고루 의견을 들어야 지켜진다' }, { id: 'r2', text: '토론회는 양쪽이 같은 시간을 가져야 공정하다' },
      { id: 'r3', text: '규칙은 학생이 바꿀 수 없다', why: '학생은 개정을 제안하고 의견을 낼 수 있어요.' }, { id: 'r4', text: '빨리 정하는 것이 가장 좋다', why: '빨리 정해도 지켜지지 않으면 소용없어요.' }];
    // 체육복 등교 건의
    const GYM = { text: '가상 2학년 3반은 \'체육 있는 날 체육복 등교\'를 건의하기로 했다. 그런데 건의문을 누가 쓸지, 어떻게 쓸지 정하지 못했다.', ask: '학급 대표인 나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'demand', text: '"체육복 등교 허락해 주세요!" 한 줄만 써서 낸다', result: '대의원회에서 까닭이 없다며 보류된다.', impact: [{ who: '반 친구들', text: '건의가 멈춘다', tone: -1 }], why: '건의문에는 문제와 근거, 대안이 있어야 해요.', end: '근거 없이 내서 보류됐어요.',
        next: { text: '반 친구들이 "건의해 봤자 소용없다"고 한다.', choices: [
          { id: 'give', text: '맞다며 포기한다', result: '불편이 그대로 남는다.', impact: [{ who: '반 친구들', text: '그대로 불편하다', tone: -1 }] },
          { id: 'redo', text: '근거를 모아 다시 써 보자고 한다', result: '갈아입는 데 걸리는 시간을 조사하기로 한다.', impact: [{ who: '반 친구들', text: '다시 해 볼 힘이 생긴다', tone: 1 }] }] } },
      { id: 'gather', text: '갈아입는 데 걸리는 시간과 불편을 먼저 조사하자고 한다', result: '탈의실이 좁아 쉬는 시간 10분 가운데 8분이 걸린다는 기록이 모인다.', impact: [{ who: '반 친구들', text: '근거를 갖춘다', tone: 1 }], end: '조사해 근거를 모았어요.',
        next: { text: '건의문을 쓰는데 한 친구가 "선생님들이 꽉 막혀서 그래요"라고 쓰자고 한다.', choices: [
          { id: 'rude', text: '그 문장을 그대로 넣는다', result: '건의문을 읽는 사람이 불쾌해한다.', impact: [{ who: '건의를 받는 학교', text: '내용보다 말투에 걸린다', tone: -1 }], why: '정중한 말로 써야 내용이 전달돼요.' },
          { id: 'polite', text: '"쉬는 시간 안에 갈아입기 어렵습니다"처럼 사실과 정중한 말로 바꾼다', result: '건의문이 대의원회를 통과해 학생회로 간다.', impact: [{ who: '반 친구들', text: '건의가 나아간다', tone: 1 }], end: '정중하게 고쳐 건의가 나아갔어요.',
            next: { text: '학교에서 \'한 학기 시범 운영\' 답변이 왔다.', choices: [
              { id: 'share', text: '답변과 시범 기간 약속을 학급에 알리고 지키자고 한다', result: '시범 운영이 잘 되어 계속하기로 한다.', impact: [{ who: '반 친구들', text: '결과를 알고 지킨다', tone: 1 }] },
              { id: 'keep', text: '답변을 대표들만 알고 넘어간다', result: '반 친구들이 결과를 몰라 혼란스럽다.', impact: [{ who: '반 친구들', text: '결과를 모른다', tone: -1 }], why: '건의 결과는 처음 건의한 곳으로 돌아와야 해요.' }] } }] } },
      { id: 'skip', text: '대의원회를 거치지 않고 교장실에 바로 찾아간다', result: '절차를 거치라는 답을 듣는다.', impact: [{ who: '반 친구들', text: '시간이 더 걸린다', tone: -1 }], why: '절차를 거치면 다른 반 의견도 함께 모여 힘이 커져요.', ending: '절차를 건너뛰어 돌아가야 했어요.' }] };
    const GYM_R = [{ id: 'r1', text: '근거와 대안을 갖춘 건의가 받아들여지기 쉽다' }, { id: 'r2', text: '건의 결과는 처음 건의한 학급에 돌아와야 한다' },
      { id: 'r3', text: '건의는 내도 아무 소용이 없다', why: '근거를 갖춰 절차대로 내면 바뀔 수 있어요.' }, { id: 'r4', text: '세게 말해야 들어준다', why: '정중한 말이 내용을 더 잘 전해요.' }];
    // 급식 줄 차례 규칙
    const LUNCH = { text: '가상 학교는 3학년부터 급식을 먹는다. 2학년 대의원회에서 "학년별로 돌아가며 먼저 먹자"는 안이 나왔지만 3학년 대표는 반대한다.', ask: '대의원회 회장인 나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'force', text: '2학년이 많으니 표결로 밀어붙인다', result: '3학년이 결과를 따르지 않겠다고 한다.', impact: [{ who: '3학년', text: '무시당했다고 느낀다', tone: -1 }], why: '다른 학년에도 걸리는 규칙은 그 학년의 바람도 들어야 해요.', end: '밀어붙여 3학년이 반발했어요.',
        next: { text: '학생회가 이 안건을 다시 논의하자고 한다.', choices: [
          { id: 'refuse', text: '이미 정했다며 거절한다', result: '갈등이 학년 사이로 번진다.', impact: [{ who: '전교생', text: '편이 갈린다', tone: -1 }] },
          { id: 'accept', text: '3학년 대표도 함께하는 자리를 만들자고 한다', result: '양쪽 대표가 함께 앉는다.', impact: [{ who: '양쪽 학년', text: '이야기할 자리가 생긴다', tone: 1 }] }] } },
      { id: 'why3', text: '3학년 대표에게 반대하는 까닭을 묻는다', result: '3학년은 \'오후 첫 시간 보충 수업에 늦지 않는 것\'을 바란다고 한다.', impact: [{ who: '3학년', text: '바람을 말한다', tone: 1 }], end: '반대 까닭을 들었어요.',
        next: { text: '2학년은 공평함, 3학년은 늦지 않는 것을 바란다.', choices: [
          { id: 'mix', text: '보충 수업이 있는 날만 3학년 먼저, 나머지는 돌아가며 하자는 안을 만든다', result: '두 학년 대표가 함께 찬성한다.', impact: [{ who: '양쪽 학년', text: '바람이 함께 채워진다', tone: 1 }], end: '두 학년의 바람을 함께 채웠어요.',
            next: { text: '학생회에 올렸더니 \'한 달 시범 뒤 다시 보자\'는 의견이 나온다.', choices: [
              { id: 'trial', text: '시범 기간과 확인할 점을 정해 공고한다', result: '한 달 뒤 결과를 보고 고친다.', impact: [{ who: '전교생', text: '바꿔 볼 수 있다', tone: 1 }] },
              { id: 'final', text: '시범 없이 바로 확정하자고 고집한다', result: '문제가 생겨도 고치기 어려워진다.', impact: [{ who: '전교생', text: '불편이 굳는다', tone: -1 }], why: '시범 운영은 고칠 기회를 남겨요.' }] } },
          { id: 'drop', text: '의견이 갈리니 안건을 없던 일로 한다', result: '2학년의 불편이 그대로 남는다.', impact: [{ who: '2학년', text: '그대로 불편하다', tone: -1 }], why: '갈린 의견을 함께 채울 방법을 먼저 찾아봐요.' }] } },
      { id: 'teacher', text: '선생님이 정해 달라고 넘긴다', result: '학생 의견이 빠진 채 정해진다.', impact: [{ who: '전교생', text: '참여할 기회를 잃는다', tone: -1 }], why: '학생 자치는 스스로 의견을 모으는 데서 시작해요.', ending: '넘겨서 학생 의견이 빠졌어요.' }] };
    const LUNCH_R = [{ id: 'r1', text: '다른 학년에 걸리는 규칙은 그 학년의 바람도 들어야 한다' }, { id: 'r2', text: '시범 운영은 고칠 기회를 남긴다' },
      { id: 'r3', text: '수가 많은 학년 뜻대로 하면 된다', why: '수가 적어도 그 학년의 바람을 들어야 공정해요.' }, { id: 'r4', text: '어려운 안건은 선생님이 정하는 게 맞다', why: '학생 자치는 스스로 의견을 모으는 데서 시작해요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.path', {
        title: '건의가 가는 길 지도', method: '건의가 가는 길 보기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 핀 3곳(교실→대의원회→학생회)을 차례로 꽂아 보인다.', base: '핀 4곳(교실→대의원회→학생회→교무실)을 차례로 꽂는 모습을 보고 곳마다 하는 일을 말한다.', challenge: '답변이 다시 교실로 돌아오는 길까지 말로 이어 본다.' },
        intro: {
          teacher: '"우리 반이 \'체육복 등교\'를 건의하면 그 종이는 어디를 거쳐 어디까지 갈까요?" 시연 단추로 교실→대의원회 회의실→학생회실→교무실에 차례로 핀이 꽂히는 모습을 보인다. "건의는 내도 아무 소용이 없다"는 말이 나오면 "건의가 어디서 멈췄는지 알아본 적이 있나요? 길을 알면 따라가 볼 수 있어요"라고 되묻는다. 답변은 같은 길을 거꾸로 돌아와 교실에 알려져야 끝난다는 점을 짚는다.',
          student: '가상 학교 지도에서 학급의 건의가 대의원회·학생회를 거쳐 학교로 가는 길을 따라가 보고, 곳마다 무엇을 하는지 생각해요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [0, 0] }, { pin: [2, 0] }, { pin: [4, 0] }, { pin: [0, 2] }] },
          art: { draw: 'a paper-cut school floor plan with a paper envelope traveling along a dotted path from a classroom to a meeting room, a student council room and a staff office, and an arrow curving back', banner: '건의는 어디로 갈까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.rule', {
        title: '바꾸고 싶은 규칙 투표 그래프', method: '불편한 규칙 투표 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 후보 3개 막대를 짚고 가장 많은 표를 고르게 한다.', base: '후보 5개 막대를 읽고 건의할 규칙을 고른다.', challenge: '표 수와 함께 \'바꾸면 누구에게 영향이 가는지\'를 한 문장으로 해석한다.' },
        intro: {
          teacher: '"가상 학교 2학년이 바꾸고 싶은 규칙 투표 결과예요. 표가 가장 많은 규칙은 무엇일까요?" 시연 단추로 \'휴대전화 보관\' 막대가 골라지는 모습을 보인다. "표가 많으니 학생들 뜻대로 바로 바꿔야 한다"는 말이 나오면 "이 규칙은 선생님·다른 학년에게도 걸리는데, 그쪽 의견은 어떻게 들을까요?"라고 되묻는다. 규칙을 바꾸는 데에는 절차와 여러 사람의 의견이 필요하다는 점을 짚는다.',
          student: '가상 학교의 규칙 투표 막대그래프를 보고 건의할 규칙을 고르고, 그 규칙이 누구에게 걸리는지 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '바꾸고 싶은 학교 규칙(가상 2학년 투표)', unit: '표', xLabel: '규칙', yLabel: '표 수', data: RULES, question: '표가 가장 많은 규칙은?', choices: RULES.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut school rulebook opened on a desk with sticky notes, a small ballot box and a bar chart pinned beside it', banner: '어떤 규칙을 바꾸고 싶을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '투표 결과는 가상이다. 실제 학교 규칙의 옳고 그름을 이 자리에서 판단하지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.order', {
        title: '건의 절차 차례 놓기', method: '건의 절차 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '건의 단계 카드 4장을 차례로 놓는다(바로 알려 준다).', base: '건의 단계 카드 5장(답변 받기까지)을 차례로 놓는다.', challenge: '결과를 학급에 알리는 단계까지 6장을 놓고, 단계마다 맡는 곳을 잇는다.' },
        activity: {
          title: '건의 절차 차례 놓기', tool: 'timeline',
          teacher: '"건의문을 쓰기 전에 무엇을 먼저 정해야 할까요?" 단계 카드를 놓은 뒤 한 단계를 빼면 건의가 어디서 멈추는지 하나씩 묻는다. "답변을 받으면 끝"이라는 학생에게 "처음 건의한 반 친구들은 결과를 어떻게 알 수 있을까요?"라고 되묻는다. 절차의 끝은 결과가 건의한 곳으로 돌아오는 것이라는 점을 짚는다.',
          task: '가상 학교의 건의 단계 카드를 학급 회의부터 결과 알리기까지 차례로 놓고, 단계마다 맡는 곳을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('건의 단계 카드를 차례대로 놓으세요.', STEPS.slice(0, 5), { axis: ['처음', '끝'] }),
              OB('건의 단계 카드 네 장을 차례대로 놓으세요.', STEPS.slice(0, 4), { axis: ['처음', '끝'] }),
              OB('건의 단계 카드 여섯 장을 결과 알리기까지 차례대로 놓으세요.', STEPS, { axis: ['처음', '끝'] })),
            IT({ prompt: '건의 단계마다 맡는 곳 카드를 이으세요.', toolOptions: { mode: 'match', axis: ['처음', '끝'], slots: [{ id: 't1', label: '안건 정하기' }, { id: 't2', label: '반 건의 모으기' }, { id: 't3', label: '학교에 전달하기' }, { id: 't4', label: '답변하기' }], cards: [
              { id: 'k1', text: '학급 회의' }, { id: 'k2', text: '대의원회' }, { id: 'k3', text: '학생회' }, { id: 'k4', text: '학교(교무실·학교장)' }, { id: 'k5', text: '친구 단체 대화방' }] }, target: { match: { t1: 'k1', t2: 'k2', t3: 'k3', t4: 'k4' } } },
              { prompt: '세 단계에 맡는 곳 카드를 이으세요.', toolOptions: { slots: [{ id: 't1', label: '안건 정하기' }, { id: 't2', label: '반 건의 모으기' }, { id: 't3', label: '학교에 전달하기' }], cards: [{ id: 'k1', text: '학급 회의' }, { id: 'k2', text: '대의원회' }, { id: 'k3', text: '학생회' }] }, target: { match: { t1: 'k1', t2: 'k2', t3: 'k3' } } }),
            IT(OB('답변이 학급까지 돌아오는 차례를 놓으세요.', [{ id: 'b1', text: '학교가 학생회에 답변 보내기' }, { id: 'b2', text: '학생회가 대의원회에 알리기' }, { id: 'b3', text: '학급 대표가 반에 알리기' }], { axis: ['처음', '끝'] }, [{ id: 'b4', text: '대표만 알고 끝내기' }]),
              null, null, { conclude: '건의는 학급에서 시작해 대의원회·학생회를 거쳐 학교로 가고, 답변은 같은 길로 학급에 돌아와야 끝나요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 곳을 써요.', text: '학급 회의 → 건의문 → ___ → 학생회 → 학교 답변 → 학급에 알리기', answer: '대의원회' }] },
      }),
      M('activity.letter', {
        title: '좋은 건의문 쓰기', method: '좋은 건의문 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '건의문 틀("___이 불편합니다. 왜냐하면 ___. 그래서 ___을 건의합니다.")을 채우고 기준 2개를 점검한다.', base: '건의문을 네 문장 안팎으로 쓰고 기준 4개(문제·근거·대안·정중함)를 점검한다.', challenge: '예상되는 반대 의견과 그에 대한 답까지 넣어 쓰고 기준 5개를 점검한다.' },
        activity: {
          title: '좋은 건의문 쓰기', tool: 'rubric-writing',
          teacher: '"\'체육복 등교 허락해 주세요!\'와 \'탈의실이 좁아 쉬는 시간 10분 가운데 8분이 걸립니다. 체육 있는 날 체육복 등교를 건의합니다\' 가운데 어느 건의문이 대의원회를 통과할까요?" 두 문장을 견준 뒤 가상 상황마다 건의문을 쓰게 한다. "세게 말해야 들어준다"는 학생에게 "읽는 사람이 불쾌하면 내용까지 닿을까요?"라고 되묻는다. 반대 의견을 미리 생각해 두면 건의가 더 단단해진다는 점을 짚는다.',
          task: '가상 학급의 불편을 문제·근거·대안이 드러나는 정중한 건의문으로 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('\'체육 있는 날 체육복 등교\' 건의문을 쓰세요.', { topic: '가상 상황: 탈의실이 좁아 쉬는 시간 10분 가운데 8분이 걸린다. 체육 있는 날 체육복 등교를 건의하는 글을 쓰세요.', minChars: 50, maxChars: 280, minSentences: 3, maxSentences: 6, title: '건의문 ①', placeholder: '학생회에 건의합니다…' }, ['문제를 썼다', '근거(사실·기록)를 썼다', '대안을 제안했다', '정중한 말로 썼다']),
              { prompt: '건의문 틀을 채워 체육복 등교를 건의하세요.', toolOptions: { starter: '___이 불편합니다. 왜냐하면 ___. 그래서 ___을 건의합니다.', minSentences: 2 }, target: { selfCheck: ['문제를 썼다', '대안을 제안했다'] } },
              { prompt: '반대 의견과 그 답까지 넣어 체육복 등교 건의문을 쓰세요.', toolOptions: { maxSentences: 8 }, target: { selfCheck: ['문제를 썼다', '근거(사실·기록)를 썼다', '대안을 제안했다', '정중한 말로 썼다', '예상되는 반대 의견에 답했다'] } }),
            IT(RW('\'교실 난방 시간\' 건의문을 쓰세요.', { topic: '가상 상황: 1교시 동안 교실이 추워 겉옷을 입고 수업한다. 난방 시작 시간을 앞당기자는 건의문을 쓰세요.', minChars: 50, maxChars: 280, minSentences: 3, maxSentences: 6, title: '건의문 ②', placeholder: '학생회에 건의합니다…' }, ['문제를 썼다', '근거(사실·기록)를 썼다', '대안을 제안했다', '정중한 말로 썼다']),
              { prompt: '건의문 틀을 채워 난방 시간을 건의하세요.', toolOptions: { starter: '___이 불편합니다. 왜냐하면 ___. 그래서 ___을 건의합니다.', minSentences: 2 }, target: { selfCheck: ['문제를 썼다', '대안을 제안했다'] } },
              { prompt: '반대 의견(전기 요금 등)과 그 답까지 넣어 난방 시간 건의문을 쓰세요.', toolOptions: { maxSentences: 8 }, target: { selfCheck: ['문제를 썼다', '근거(사실·기록)를 썼다', '대안을 제안했다', '정중한 말로 썼다', '예상되는 반대 의견에 답했다'] } }),
            IT(RW('아래 무례한 건의문을 정중한 건의문으로 고쳐 쓰세요.', { topic: '고칠 글: "급식 줄 진짜 짜증 나요. 선생님들은 맨날 모른 척하잖아요. 당장 바꿔요." — 문제·근거·대안이 드러나는 정중한 글로 고쳐 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 5, title: '건의문 고쳐 쓰기' }, ['비난하는 말을 뺐다', '문제와 근거를 썼다', '대안을 제안했다']),
              { prompt: '틀을 채워 무례한 건의문을 정중하게 고쳐 쓰세요.', toolOptions: { starter: '급식 줄이 ___ 불편합니다. ___을 건의합니다.', minSentences: 2 }, target: { selfCheck: ['비난하는 말을 뺐다', '대안을 제안했다'] } },
              null, { conclude: '좋은 건의문은 문제·근거·대안을 정중한 말로 쓰고, 반대 의견까지 미리 생각해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 건의문에 들어간 것에 표시해요.', options: ['문제', '근거', '대안', '정중한 말', '반대 의견에 대한 답'] }] },
      }),
      M('activity.revise', {
        title: '규칙 개정 단계와 학생 참여', method: '규칙 개정 절차와 학생 참여 단계', tool: 'sortboard', minutes: 16,
        levels: { easy: '개정 단계 카드 4장을 \'학생이 직접 참여\'·\'학교 기구가 맡음\'으로 나누고, 틀리면 바로 되돌아온다.', base: '개정 단계 카드 6장을 두 칸에 나눈다.', challenge: '학생이 참여할 때 지킬 점과 지키지 않을 점을 까닭과 함께 가려 나누는 문항까지 푼다.' },
        activity: {
          title: '규칙 개정 단계와 학생 참여', tool: 'sortboard',
          teacher: '"학교 규칙을 바꿀 때 학생이 할 수 있는 일은 제안뿐일까요, 의견을 내는 것까지일까요?" 카드를 놓을 때마다 그 단계에서 학생 목소리가 어떻게 들어가는지 함께 말한다. "규칙은 학생이 바꿀 수 없다"는 학생에게 "개정 제안과 설문·토론회가 없으면 학교는 학생의 불편을 어떻게 알까요?"라고 되묻는다. 학생이 직접 결정하지 않는 단계도 학생 의견을 바탕으로 한다는 점을 짚는다. 절차는 가상 학교의 예시이며 학교마다 다를 수 있다.',
          task: '가상 학교의 규칙 개정 단계 카드를 \'학생이 직접 참여하는 단계\'와 \'학교 기구가 맡는 단계\'로 나누어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('규칙 개정 단계 카드를 두 칸에 나누세요.', ['학생이 직접 참여', '학교 기구가 맡음'], [
              { id: 'v1', text: '학생회가 개정안을 제안한다', to: '학생이 직접 참여' }, { id: 'v2', text: '전교생 설문에 의견을 낸다', to: '학생이 직접 참여' },
              { id: 'v3', text: '토론회에서 찬반 의견을 말한다', to: '학생이 직접 참여' }, { id: 'v4', text: '학교운영위원회가 심의한다', to: '학교 기구가 맡음' },
              { id: 'v5', text: '학교장이 정하고 알린다', to: '학교 기구가 맡음' }, { id: 'v6', text: '교직원 회의에서 의견을 모은다', to: '학교 기구가 맡음' }]),
              BB('규칙 개정 단계 카드 4장을 두 칸에 나누세요.', ['학생이 직접 참여', '학교 기구가 맡음'], [
                { id: 'v1', text: '학생회가 개정안을 제안한다', to: '학생이 직접 참여' }, { id: 'v2', text: '전교생 설문에 의견을 낸다', to: '학생이 직접 참여' },
                { id: 'v4', text: '학교운영위원회가 심의한다', to: '학교 기구가 맡음' }, { id: 'v5', text: '학교장이 정하고 알린다', to: '학교 기구가 맡음' }])),
            IT(BB('개정 뒤에 할 일을 두 칸에 나누세요.', ['학생이 직접 참여', '학교 기구가 맡음'], [
              { id: 'w1', text: '바뀐 규칙을 학급에서 함께 읽는다', to: '학생이 직접 참여' }, { id: 'w2', text: '시범 기간 뒤 불편을 다시 모은다', to: '학생이 직접 참여' },
              { id: 'w3', text: '바뀐 규칙을 학교 규칙집에 싣는다', to: '학교 기구가 맡음' }, { id: 'w4', text: '보호자에게 바뀐 규칙을 알린다', to: '학교 기구가 맡음' }]),
              BB('개정 뒤에 할 일 카드 2장을 두 칸에 나누세요.', ['학생이 직접 참여', '학교 기구가 맡음'], [
                { id: 'w1', text: '바뀐 규칙을 학급에서 함께 읽는다', to: '학생이 직접 참여' }, { id: 'w3', text: '바뀐 규칙을 학교 규칙집에 싣는다', to: '학교 기구가 맡음' }])),
            IT(BB('규칙 개정에 참여할 때 지킬 점과 지키지 않을 점을 나누세요.', ['지킬 점', '지키지 않을 점'], [
              { id: 'x1', text: '근거를 들어 의견을 낸다', to: '지킬 점', why: '근거가 있어야 다른 사람을 설득해요.' }, { id: 'x2', text: '반대하는 친구를 대화방에서 몰아세운다', to: '지키지 않을 점', why: '다른 의견을 몰아세우면 참여가 막혀요.' },
              { id: 'x3', text: '다른 학년·선생님 입장도 들어 본다', to: '지킬 점', why: '규칙은 모두에게 걸려요.' }, { id: 'x4', text: '정해진 결과를 무조건 따르지 않는다', to: '지키지 않을 점', why: '정해진 결과는 지키고, 바꾸고 싶으면 다시 절차를 밟아요.' }]),
              null, null, { conclude: '학생은 개정을 제안하고 설문·토론회로 의견을 내며, 정해진 규칙은 지키고 다시 절차를 밟아 바꿀 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '학교 규칙 개정에서 학생이 참여할 수 있는 단계 두 가지를 써요.' }],
          easy: [{ type: 'choice', prompt: '학생이 직접 참여하는 단계에 ○ 해요.', options: ['설문에 의견 내기', '학교운영위원회 심의'], answer: '설문에 의견 내기' }] },
      }),
      M('activity.hearing', {
        title: '규칙 토론회 갈림길', method: '규칙 토론회 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(결과 전달·시범 운영)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '규칙 토론회 갈림길', tool: 'dilemma',
          teacher: '"임원끼리 빨리 정한 규칙과 전교생 의견을 모아 정한 규칙, 어느 쪽이 더 잘 지켜질까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 하고, 영향 칸에서 소수 쪽 결과를 꼭 읽게 한다. "규칙은 학생이 바꿀 수 없다"는 학생에게 "오늘 장면에서 학생이 바꾼 것은 무엇이었나요?"라고 되묻는다. 의견 수렴은 시간이 걸려도 결과를 지키게 만든다는 점을 짚는다. 장면은 모두 가상 학교다.',
          task: '가상 학교의 규칙 토론회·건의 장면에서 길을 골라 결과를 따라가고, 의견 수렴의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '휴대전화 규칙 토론회를 열어요. 한 번 골라 결과를 보세요.', base: '휴대전화 규칙 토론회를 열어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '휴대전화 규칙 토론회를 열어요. 세 번 골라 결과 전달까지 가고 바른 근거를 모두 고르세요.' },
              '휴대전화 규칙 토론회', PHONE, [['survey', 'equal', 'all']], PHONE_R, ['r1', 'r2']),
            DIL({ easy: '체육복 등교를 건의해요. 한 번 골라 결과를 보세요.', base: '체육복 등교를 건의해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '체육복 등교를 건의해요. 세 번 골라 결과 알리기까지 가고 바른 근거를 모두 고르세요.' },
              '체육복 등교 건의', GYM, [['gather', 'polite', 'share']], GYM_R, ['r1', 'r2']),
            DIL({ easy: '급식 차례 규칙이 갈려요. 한 번 골라 결과를 보세요.', base: '급식 차례 규칙이 갈려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '급식 차례 규칙이 갈려요. 세 번 골라 시범 운영까지 가고 바른 근거를 모두 고르세요.' },
              '급식 차례 규칙', LUNCH, [['why3', 'mix', 'trial']], LUNCH_R, ['r1', 'r2'], null, { conclude: '규칙은 의견을 고루 모으고, 양쪽에 같은 시간을 주고, 결과를 알리고, 시범 뒤 고치면서 함께 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '규칙 토론회를 공정하게 여는 방법으로 가장 알맞은 것은?', options: ['임원끼리 먼저 정해 둔다', '양쪽에 같은 발언 시간을 주고 소수 의견도 기록한다', '찬성 쪽만 발언하게 한다'], answer: '양쪽에 같은 발언 시간을 주고 소수 의견도 기록한다' }] },
      }),

      // ---- 정리 ----
      M('wrap.council', {
        title: '모의 대의원회 열기', method: '모의 대의원회', tool: 'timer', minutes: 7,
        levels: { easy: '건의 1건을 발표하고 표결하는 차례를 놓고 진행한다.', base: '건의 2건을 차례로 다루도록 발표 2분·표결 1분·2번으로 맞춰 진행한다.', challenge: '2건을 다룬 뒤 결과 회신문을 쓸 사람과 알릴 때를 정하고 점검 칸을 표시한다.' },
        wrap: {
          teacher: '"오늘 쓴 건의문 가운데 두 개를 모의 대의원회에 올려 볼게요. 반 대표 역할을 맡은 사람은 2분 안에 발표해 주세요." 교사가 진행하며 발표→질문→표결 차례로 다루고, 시간 지킴이가 신호를 준다. "통과 못 하면 건의한 반이 진 것"이라는 학생에게 "보류된 까닭을 알면 다음 건의가 어떻게 달라질까요?"라고 되묻는다. 표결 결과는 회신문으로 학급에 돌려보낸다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '모의 대의원회', timeUnit: 'min', labels: ['발표', '표결'], plan: { work: 1, rest: 0, rounds: 1 }, cards: ['표결하기', '건의문 발표하기', '질문과 답하기', '결과 기록하기'] },
              prompt: '모의 대의원회 차례 카드를 놓고, 건의 2건을 다루도록 발표 2분·표결 1분·2번으로 맞춰요.', target: { order: ['건의문 발표하기', '질문과 답하기', '표결하기', '결과 기록하기'], plan: { work: 2, rest: 1, rounds: 2 } }, difficulty: 0.2 },
            { prompt: '모의 대의원회 차례 카드를 놓고, 건의 1건을 다루도록 발표 2분·표결 1분·1번으로 맞춰요.', target: { order: ['건의문 발표하기', '질문과 답하기', '표결하기', '결과 기록하기'], plan: { work: 2, rest: 1, rounds: 1 } } },
            { prompt: '차례 카드를 놓고 2건으로 맞춘 뒤, 결과 회신을 정했는지 점검 칸에 표시해요.', target: { order: ['건의문 발표하기', '질문과 답하기', '표결하기', '결과 기록하기'], plan: { work: 2, rest: 1, rounds: 2 }, selfCheck: ['회신문을 쓸 사람을 정했다', '학급에 알릴 날을 정했다'] } }),
            { type: 'choice', prompt: '대의원회에서 보류된 건의에 대해 할 일로 가장 알맞은 것은?', options: ['건의를 포기한다', '보류 까닭을 회신문으로 받아 고쳐서 다시 낸다', '대의원회를 탓한다'], answer: 1, difficulty: 0.2, explain: '까닭을 알면 근거를 보태 다시 낼 수 있어요.' },
          ],
        },
        worksheet: {
          title: '모의 대의원회 결과 회신',
          items: [
            { type: 'table', prompt: '다룬 건의와 결과를 써요.', columns: ['건의', '결과(표 수)'], cells: [['', ''], ['', '']], answer: '모의 대의원회 결과' },
            { type: 'short', prompt: '결과 회신문 첫 문장을 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 7분 안에서 모의로 진행하며, 실제 학교 대의원회 결과처럼 다루지 않는다.',
      }),
      M('wrap.opinion', {
        title: '규칙 개정 의견 모으기', method: '학급 의견 모으기 활동', tool: 'timer', minutes: 7,
        levels: { easy: '한 모둠의 찬성·반대·조건부 의견 수를 기록판에 적는다.', base: '반 전체(모둠 넷)의 의견 수를 모아 기록판에 적는다.', challenge: '의견 수를 적은 뒤 소수 의견을 기록했는지 점검 칸까지 표시한다.' },
        wrap: {
          teacher: '"\'휴대전화 보관 규칙\' 개정에 대해 모둠마다 찬성·반대·조건부 찬성이 몇 명인지 모아 볼게요." 교사가 진행하며 모둠별로 2분 이야기한 뒤 수를 모아 기록판에 적게 한다. "조건부 찬성은 애매하니 빼자"는 학생에게 "\'점심시간만 허용\' 같은 조건이 실제 개정안이 될 수 있지 않을까요?"라고 되묻는다. 개인 이름 없이 수와 의견만 적는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '학급 의견 모으기', timeUnit: 'min', labels: ['모둠 토의', '모으기'], plan: { work: 1, rest: 1, rounds: 1 }, fields: [{ label: '찬성', unit: '명' }, { label: '반대', unit: '명' }, { label: '조건부 찬성', unit: '명' }] },
              prompt: '모둠 토의 2분·모으기 1분으로 맞추고, 반 전체의 찬성·반대·조건부 찬성 수를 기록판에 적어요.', target: { plan: { work: 2, rest: 1 }, records: true }, difficulty: 0.2 },
            { prompt: '모둠 토의 2분·모으기 1분으로 맞추고, 우리 모둠의 찬성 수를 적어요.', toolOptions: { fields: [{ label: '우리 모둠 찬성', unit: '명' }] } },
            { prompt: '모둠 토의 2분·모으기 1분으로 맞추고 의견 수를 적은 뒤, 소수 의견 기록을 점검해요.', target: { plan: { work: 2, rest: 1 }, records: true, selfCheck: ['소수 의견의 까닭을 한 줄로 적었다', '이름 없이 의견만 적었다'] } }),
            { type: 'choice', prompt: '학급 의견을 모을 때 \'조건부 찬성\'을 따로 세는 까닭으로 가장 알맞은 것은?', options: ['애매해서 빼려고', '조건이 새로운 대안이 될 수 있어서', '찬성 수를 늘리려고'], answer: 1, difficulty: 0.2, explain: '조건 속에 함께 채울 수 있는 대안이 들어 있어요.' },
          ],
        },
        worksheet: {
          title: '학급 의견 모으기',
          items: [
            { type: 'table', prompt: '모은 의견을 적어요.', columns: ['의견', '수', '대표 까닭'], cells: [['찬성', '', ''], ['반대', '', ''], ['조건부 찬성', '', '']], answer: '학급 기록' },
            { type: 'short', prompt: '소수 의견 하나와 그 까닭을 적어요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 학생 이름과 의견을 짝지어 기록하지 않는다.',
      }),
    );
  }

  // ==== 8학년 · 공정한 설문과 자료 해석 (auto.m.g8-topic) ====
  {
    const M = MK('g8-topic', [8]);
    const PIE = [['도서관', 40], ['운동장', 30], ['교실', 20], ['기타', 10]];
    const QS = [
      { id: 'q1', text: '쉬는 시간에 주로 어디에서 지내나요?', to: '공정한 문항' }, { id: 'q2', text: '좁고 시끄러운 매점을 넓혀야 하지 않을까요?', to: '유도 문항' },
      { id: 'q3', text: '급식의 맛과 양에 만족하나요?', to: '이중 질문' }, { id: 'q4', text: '하루에 휴대전화를 몇 시간쯤 쓰나요?', to: '공정한 문항' },
      { id: 'q5', text: '모두가 원하는 운동장 개방에 찬성하나요?', to: '유도 문항' }, { id: 'q6', text: '도서관 책과 자리는 충분한가요?', to: '이중 질문' },
      { id: 'q7', text: '등교 시각을 늦추는 것에 대해 어떻게 생각하나요?', to: '공정한 문항' }, { id: 'q8', text: '건강에 나쁜 탄산음료 자판기를 없애야겠죠?', to: '유도 문항' },
    ];
    const BAD = [{ id: 'b1', text: '답을 한쪽으로 이끈다', ok: true }, { id: 'b2', text: '두 가지를 한꺼번에 묻는다', ok: true }, { id: 'b3', text: '짧아서 읽기 쉽다' }, { id: 'b4', text: '보기가 고르게 있다' }];
    // 30명 설문으로 '모든 중학생'
    const OVER = { text: '가상 모둠이 우리 반 30명에게 설문했더니 21명이 \'아침에 피곤하다\'고 답했다. 모둠장이 결론에 "모든 중학생은 아침에 피곤하다"라고 쓰자고 한다.', ask: '기록 담당인 나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'write', text: '그대로 쓴다', result: '발표 뒤 "다른 반·다른 학교도 조사했나요?"라는 질문에 답하지 못한다.', impact: [{ who: '모둠', text: '결론을 믿지 못하게 된다', tone: -1 }], why: '우리 반 30명의 답으로는 모든 중학생을 말할 수 없어요.', end: '지나친 결론으로 질문에 답하지 못했어요.',
        next: { text: '선생님이 "이 결론을 어떻게 고치면 될까?"라고 묻는다.', choices: [
          { id: 'more', text: '"그래도 다들 비슷할 거예요"라고 버틴다', result: '결론의 믿음이 더 떨어진다.', impact: [{ who: '모둠', text: '설득력을 잃는다', tone: -1 }] },
          { id: 'fix', text: '"우리 반 30명 가운데 21명"으로 고친다', result: '결론이 자료와 맞아진다.', impact: [{ who: '모둠', text: '믿을 만한 결론이 된다', tone: 1 }] }] } },
      { id: 'scope', text: '"우리 반 30명 가운데 21명이 피곤하다고 답했다"로 쓰자고 한다', result: '결론이 자료가 말하는 만큼이 된다.', impact: [{ who: '모둠', text: '믿을 만한 결론', tone: 1 }], end: '자료만큼만 결론을 썼어요.',
        next: { text: '모둠원 하나가 "피곤한 까닭은 휴대전화 때문"이라고 덧붙이자고 한다. 설문에는 까닭을 묻지 않았다.', choices: [
          { id: 'add', text: '그럴듯하니 덧붙인다', result: '자료에 없는 원인이 결론에 들어간다.', impact: [{ who: '듣는 사람', text: '사실처럼 오해한다', tone: -1 }], why: '설문에서 묻지 않은 까닭은 결론이 아니라 짐작이에요.' },
          { id: 'guess', text: '\'까닭은 이번 설문으로 알 수 없어 다음 탐구 질문으로 남긴다\'고 쓴다', result: '한계와 다음 탐구가 함께 드러난다.', impact: [{ who: '모둠', text: '탐구가 이어진다', tone: 1 }], end: '알 수 없는 것을 한계로 남겼어요.',
            next: { text: '발표 시간이 짧아 한계를 뺄지 고민한다.', choices: [
              { id: 'keep', text: '한계 한 문장은 꼭 남긴다', result: '듣는 친구들이 결론의 범위를 정확히 안다.', impact: [{ who: '듣는 사람', text: '정확히 이해한다', tone: 1 }] },
              { id: 'cut', text: '한계를 빼고 결론만 크게 말한다', result: '결론이 더 넓게 퍼져 오해가 생긴다.', impact: [{ who: '듣는 사람', text: '넘겨짚는다', tone: -1 }], why: '한계는 결론을 지키는 문장이에요.' }] } }] } },
      { id: 'drop', text: '결론을 아예 쓰지 말자고 한다', result: '탐구가 결론 없이 끝난다.', impact: [{ who: '모둠', text: '알아낸 것을 전하지 못한다', tone: -1 }], why: '결론은 지우는 것이 아니라 범위를 맞춰 써요.', ending: '결론 없이 끝났어요.' }] };
    const OVER_R = [{ id: 'r1', text: '조사한 사람의 범위 안에서만 결론을 낸다' }, { id: 'r2', text: '묻지 않은 원인은 결론이 아니라 다음 탐구 질문이다' },
      { id: 'r3', text: '결과가 원하는 대로 나오면 좋은 설문이다', why: '원하는 결과와 공정한 설문은 별개예요.' }, { id: 'r4', text: '많은 사람이 그렇다면 모두가 그렇다', why: '30명 가운데 21명은 30명에 대한 사실이에요.' }];
    // 유도 문항으로 얻은 결과
    const LEAD = { text: '가상 모둠이 "좁고 시끄러운 매점을 넓혀야 하지 않을까요?"라고 물어 90%가 \'네\'라고 답했다. 이 결과로 학생회에 건의하려 한다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'use', text: '90%라는 숫자를 그대로 건의문에 쓴다', result: '학생회에서 "문항이 답을 이끌었다"는 지적을 받는다.', impact: [{ who: '모둠', text: '자료를 믿지 못하게 된다', tone: -1 }], why: '답을 이끈 문항의 결과는 실제 생각을 보여 주지 않아요.', end: '유도 문항 결과로 지적을 받았어요.',
        next: { text: '모둠원들이 "그래도 다들 넓히고 싶을 거야"라고 한다.', choices: [
          { id: 'insist', text: '그 말을 근거로 다시 낸다', result: '건의가 또 보류된다.', impact: [{ who: '모둠', text: '시간을 잃는다', tone: -1 }] },
          { id: 'redo', text: '문항을 고쳐 다시 조사하자고 한다', result: '고친 문항으로 다시 조사하기로 한다.', impact: [{ who: '모둠', text: '믿을 자료를 얻는다', tone: 1 }] }] } },
      { id: 'rewrite', text: '"매점 넓이에 대해 어떻게 생각하나요?"로 고쳐 다시 조사하자고 한다', result: '찬성 55%, 상관없음 30%, 반대 15%로 나온다.', impact: [{ who: '모둠', text: '실제 생각을 안다', tone: 1 }], end: '문항을 고쳐 실제 생각을 알았어요.',
        next: { text: '처음 90%보다 숫자가 줄어 모둠원이 실망한다.', choices: [
          { id: 'hide', text: '처음 결과(90%)를 쓰고 새 결과는 숨긴다', result: '자료를 고른 것이 드러나 믿음을 잃는다.', impact: [{ who: '모둠', text: '정직하지 않게 된다', tone: -1 }], why: '불리한 결과도 숨기지 않아야 믿을 만한 탐구예요.' },
          { id: 'honest', text: '새 결과를 쓰고, 문항을 고친 까닭도 함께 밝힌다', result: '건의가 믿을 만하다는 평가를 받는다.', impact: [{ who: '모둠', text: '믿음을 얻는다', tone: 1 }], end: '정직하게 새 결과를 썼어요.',
            next: { text: '상관없음 30%를 어떻게 해석할지 정해야 한다.', choices: [
              { id: 'asyes', text: '상관없음을 찬성으로 더한다', result: '85% 찬성처럼 부풀려진다.', impact: [{ who: '듣는 사람', text: '오해한다', tone: -1 }], why: '상관없음은 찬성이 아니에요.' },
              { id: 'asis', text: '찬성·상관없음·반대를 따로 그대로 적는다', result: '자료가 말하는 그대로 전해진다.', impact: [{ who: '듣는 사람', text: '정확히 안다', tone: 1 }] }] } }] } },
      { id: 'more', text: '더 많은 사람에게 같은 문항으로 묻자고 한다', result: '사람 수는 늘었지만 문항의 문제는 그대로다.', impact: [{ who: '모둠', text: '같은 잘못이 커진다', tone: -1 }], why: '문항이 치우치면 사람 수를 늘려도 고쳐지지 않아요.', ending: '사람 수만 늘려 문제가 그대로였어요.' }] };
    const LEAD_R = [{ id: 'r1', text: '답을 이끈 문항의 결과는 실제 생각을 보여 주지 않는다' }, { id: 'r2', text: '불리한 결과도 숨기지 않아야 믿을 만하다' },
      { id: 'r3', text: '사람 수가 많으면 문항이 치우쳐도 괜찮다', why: '치우친 문항은 사람 수로 고쳐지지 않아요.' }, { id: 'r4', text: '원하는 숫자가 나오면 잘된 설문이다', why: '원하는 숫자와 공정한 설문은 별개예요.' }];
    // 그래프 하나로 원인 단정
    const CAUSE = { text: '가상 반 설문에서 \'휴대전화를 하루 3시간 넘게 쓴다\'는 학생 8명 가운데 6명이 \'아침에 피곤하다\'고 답했다. 친구가 "휴대전화가 피곤함의 원인"이라고 결론 내자고 한다.', ask: '나는 어떻게 할까?', motif: 'moon', choices: [
      { id: 'cause', text: '원인이라고 결론 낸다', result: '"잠든 시각이 늦어서일 수도 있지 않나요?"라는 질문을 받는다.', impact: [{ who: '모둠', text: '다른 까닭에 답하지 못한다', tone: -1 }], why: '함께 나타난다고 해서 원인이라고 단정할 수 없어요.', end: '원인으로 단정해 질문에 막혔어요.',
        next: { text: '다른 모둠이 "휴대전화를 덜 쓰는데도 피곤한 사람도 있다"고 짚는다.', choices: [
          { id: 'ignore', text: '그 사람들은 예외라고 넘긴다', result: '결론이 더 흔들린다.', impact: [{ who: '모둠', text: '믿음을 잃는다', tone: -1 }] },
          { id: 'soften', text: '\'함께 나타났다\'로 고쳐 쓴다', result: '결론이 자료와 맞아진다.', impact: [{ who: '모둠', text: '정확해진다', tone: 1 }] }] } },
      { id: 'link', text: '"함께 나타났지만 원인인지는 이 자료로 알 수 없다"고 쓰자고 한다', result: '결론의 범위가 정확해진다.', impact: [{ who: '모둠', text: '믿을 만한 결론', tone: 1 }], end: '함께 나타남과 원인을 구별했어요.',
        next: { text: '그렇다면 원인을 알아보려면 무엇을 더 조사해야 할까?', choices: [
          { id: 'same', text: '같은 설문을 한 번 더 한다', result: '같은 것만 다시 확인된다.', impact: [{ who: '모둠', text: '새로 알게 된 것이 없다', tone: -1 }], why: '원인을 보려면 다른 까닭(잠든 시각 등)도 함께 봐야 해요.' },
          { id: 'other', text: '잠든 시각도 함께 묻는 다음 설문을 계획한다', result: '다른 까닭과 함께 견줄 수 있게 된다.', impact: [{ who: '모둠', text: '탐구가 깊어진다', tone: 1 }], end: '다른 까닭도 함께 볼 계획을 세웠어요.',
            next: { text: '다음 설문에 잠든 시각을 물으려는데 이름도 함께 받자는 의견이 나온다.', choices: [
              { id: 'anon', text: '이름 없이 익명으로 묻는다', result: '친구들이 솔직하게 답한다.', impact: [{ who: '응답한 친구들', text: '사생활을 지킨다', tone: 1 }] },
              { id: 'named', text: '누가 늦게 자는지 알게 이름을 받는다', result: '응답이 줄고 솔직하지 않게 된다.', impact: [{ who: '응답한 친구들', text: '사생활이 드러난다', tone: -1 }], why: '탐구에 필요 없는 개인정보는 받지 않아요.' }] } }] } },
      { id: 'skip', text: '헷갈리니 이 자료는 빼 버린다', result: '알아낸 것까지 사라진다.', impact: [{ who: '모둠', text: '자료를 잃는다', tone: -1 }], why: '자료는 버리지 말고 말할 수 있는 만큼만 써요.', ending: '자료를 버려 알아낸 것도 사라졌어요.' }] };
    const CAUSE_R = [{ id: 'r1', text: '함께 나타난 것과 원인은 다르다' }, { id: 'r2', text: '원인을 보려면 다른 까닭도 함께 조사해야 한다' },
      { id: 'r3', text: '숫자가 크면 원인이 확실하다', why: '숫자가 커도 다른 까닭이 숨어 있을 수 있어요.' }, { id: 'r4', text: '헷갈리는 자료는 버리는 게 낫다', why: '자료는 말할 수 있는 만큼만 쓰면 돼요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.bad', {
        title: '이상한 설문 문항의 문제', method: '이상한 설문 문항 보고 문제 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 유도 문항 하나를 읽고 문제 카드 2장 가운데 고른다.', base: '문항 하나를 읽고 문제 카드 3장이 담기는 모습을 본 뒤 까닭을 말한다.', challenge: '문제를 고른 뒤 문항을 고칠 말을 즉석에서 제안한다.' },
        intro: {
          teacher: '"\'좁고 시끄러운 매점을 넓혀야 하지 않을까요?\'라고 물으면, 사람들은 어떻게 답하기 쉬울까요?" 시연 단추로 문제 카드가 바구니에 담기는 모습을 보인 뒤 \'급식의 맛과 양에 만족하나요?\'도 읽어 준다. "결과가 원하는 대로 나오면 좋은 설문"이라는 말이 나오면 "그 결과가 사람들의 진짜 생각일까요, 문항이 만든 생각일까요?"라고 되묻는다. 오늘은 공정한 문항을 만들고 자료가 말하는 만큼만 결론을 내는 법을 익힌다고 밝힌다.',
          student: '가상 설문 문항을 읽고 무엇이 문제인지 카드에서 골라 보아요. 이 문항으로 얻은 답을 믿어도 될지 생각해요.',
          demo: { tool: 'wordcards', options: PB('', '문항의 문제', BAD).toolOptions, sequence: [{ at: { b1: 0 } }, { at: { b1: 0, b2: 0 } }] },
          art: { draw: 'a paper-cut clipboard survey with one question tilted and an arrow pushing toward a single answer box, a magnifying glass hovering over it', banner: '이 문항, 무엇이 이상할까?', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
      }),
      M('intro.result', {
        title: '설문 결과 그래프 첫인상', method: '설문 결과 그래프 첫인상', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대그래프로 바꿔 보이며 가장 많은 항목을 짚는다.', base: '원그래프를 보고 가장 큰 조각과 그 비율을 고른다.', challenge: '막대와 원그래프를 견주어 각각 무엇이 잘 보이는지 말한다.' },
        intro: {
          teacher: '"가상 모둠이 \'쉬는 시간에 주로 지내는 곳\'을 물었어요. 원그래프에서 가장 큰 조각은 무엇이고 몇 %일까요?" 시연 단추로 도서관 조각이 골라지는 모습을 보인다. "40%면 거의 다 도서관에 있다"는 말이 나오면 "나머지 60%는 어디에 있을까요?"라고 되묻는다. 첫인상은 자료를 꼼꼼히 읽는 출발점일 뿐이라는 점을 짚는다. 자료는 가상이다.',
          student: '가상 모둠의 설문 결과 원그래프에서 가장 큰 조각과 비율을 찾고, 눈에 띄는 점을 짝과 말해요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '쉬는 시간에 주로 지내는 곳(가상 학급 30명)', unit: '%', data: PIE, question: '가장 큰 조각은?', choices: PIE.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut pie chart made of layered colored paper slices on a corkboard, with tiny icons of a library, a field and a classroom', banner: '그래프에서 무엇이 먼저 보일까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.sort', {
        title: '설문 문항 유형 가리기', method: '문항 유형 가리기', tool: 'sortboard', minutes: 16,
        levels: { easy: '문항 카드 4장을 세 칸(공정한 문항·유도 문항·이중 질문)에 나누고, 칸 옆에 장 수가 보이며 틀리면 되돌아온다.', base: '문항 카드 6장을 세 칸에 나눈다.', challenge: '문항 카드 8장을 세 칸에 나눈다.' },
        activity: {
          title: '설문 문항 유형 가리기', tool: 'sortboard',
          teacher: '"\'도서관 책과 자리는 충분한가요?\'에 \'아니요\'라고 답한 사람은 책이 모자란다는 걸까요, 자리가 모자란다는 걸까요?" 카드를 놓을 때마다 그 문항으로 얻은 답을 해석할 수 있는지 묻는다. "짧게 한 번에 물으면 좋은 문항"이라는 학생에게 "한 번에 두 가지를 물으면 답을 어떻게 나눠 읽을까요?"라고 되묻는다. 공정한 문항은 한 가지만, 어느 쪽으로도 기울지 않게 묻는다는 점을 짚는다.',
          task: '가상 설문 문항 카드를 공정한 문항·유도 문항·이중 질문으로 나누어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('설문 문항 카드를 세 칸에 나누세요.', ['공정한 문항', '유도 문항', '이중 질문'], QS.slice(0, 6)),
              BB('설문 문항 카드 4장을 세 칸에 나누세요.', ['공정한 문항', '유도 문항', '이중 질문'], pickCards(QS, ['q1', 'q2', 'q3', 'q4'])),
              BB('설문 문항 카드 8장을 세 칸에 나누세요.', ['공정한 문항', '유도 문항', '이중 질문'], QS)),
            IT(BB('급식 설문 문항 카드를 세 칸에 나누세요.', ['공정한 문항', '유도 문항', '이중 질문'], [
              { id: 'k1', text: '급식에서 가장 좋아하는 반찬은 무엇인가요?', to: '공정한 문항' }, { id: 'k2', text: '늘 남는 나물 반찬은 빼야 하지 않나요?', to: '유도 문항' },
              { id: 'k3', text: '급식 시간과 줄 서는 방법이 괜찮나요?', to: '이중 질문' }, { id: 'k4', text: '급식을 남기는 날은 한 주에 며칠인가요?', to: '공정한 문항' }]),
              BB('급식 설문 문항 카드 3장을 세 칸에 나누세요.', ['공정한 문항', '유도 문항', '이중 질문'], [
                { id: 'k1', text: '급식에서 가장 좋아하는 반찬은 무엇인가요?', to: '공정한 문항' }, { id: 'k2', text: '늘 남는 나물 반찬은 빼야 하지 않나요?', to: '유도 문항' }, { id: 'k3', text: '급식 시간과 줄 서는 방법이 괜찮나요?', to: '이중 질문' }])),
            IT(BB('보기가 고른지 아닌지 나누세요.', ['보기가 고르다', '보기가 치우쳤다'], [
              { id: 'p1', text: '만족 / 보통 / 불만족', to: '보기가 고르다' }, { id: 'p2', text: '아주 만족 / 만족 / 조금 만족', to: '보기가 치우쳤다' },
              { id: 'p3', text: '찬성 / 반대 / 잘 모름', to: '보기가 고르다' }, { id: 'p4', text: '꼭 필요 / 필요 / 있으면 좋음', to: '보기가 치우쳤다' }]),
              null, null, { conclude: '공정한 문항은 한 가지만 묻고, 답을 이끄는 말이 없고, 보기가 고르게 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'급식의 맛과 양에 만족하나요?\'를 공정한 문항 두 개로 나누어 써요.' }],
          easy: [{ type: 'choice', prompt: '유도 문항에 ○ 해요.', options: ['쉬는 시간에 주로 어디에서 지내나요?', '좁고 시끄러운 매점을 넓혀야 하지 않을까요?'], answer: '좁고 시끄러운 매점을 넓혀야 하지 않을까요?' }] },
      }),
      M('activity.fix', {
        title: '문제 있는 문항 고쳐 쓰기', method: '문항 고쳐 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '유도 문항 1개를 틀("___에 대해 어떻게 생각하나요?")에 맞춰 고치고 기준 2개를 점검한다.', base: '유도 문항·이중 질문 2개를 고쳐 쓰고 기준 3개(중립·한 가지만·이해 쉬움)를 점검한다.', challenge: '고친 문항에 고른 보기까지 붙여 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '문제 있는 문항 고쳐 쓰기', tool: 'rubric-writing',
          teacher: '"\'건강에 나쁜 탄산음료 자판기를 없애야겠죠?\'에서 답을 이끄는 낱말은 무엇일까요?" 이끄는 말을 함께 찾아 지운 뒤 문항을 고쳐 쓰게 한다. "고쳐도 결국 같은 답이 나올 텐데 무슨 차이냐"는 학생에게 "같은 답이 나와도, 고친 문항의 답이어야 진짜 생각이라고 말할 수 있어요"라고 짚는다. 이중 질문은 두 문항으로 나누는 것이 가장 쉬운 고치기라는 점을 알려 준다.',
          task: '가상 설문의 유도 문항과 이중 질문을 중립적이고 한 가지만 묻는 문항으로 고쳐 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('유도 문항 \'건강에 나쁜 탄산음료 자판기를 없애야겠죠?\'를 고쳐 쓰세요.', { topic: '고칠 문항: "건강에 나쁜 탄산음료 자판기를 없애야겠죠?" — 답을 이끌지 않는 문항으로 고쳐 쓰세요.', minChars: 10, maxChars: 120, minSentences: 1, maxSentences: 2, title: '문항 고쳐 쓰기 ①', placeholder: '고친 문항: …' }, ['답을 이끄는 낱말을 뺐다', '한 가지만 묻는다', '처음 읽어도 이해하기 쉽다']),
              { prompt: '틀에 맞춰 탄산음료 자판기 문항을 고쳐 쓰세요.', toolOptions: { starter: '___에 대해 어떻게 생각하나요?' }, target: { selfCheck: ['답을 이끄는 낱말을 뺐다', '한 가지만 묻는다'] } },
              { prompt: '탄산음료 자판기 문항을 고쳐 쓰고, 고른 보기 세 개까지 붙여 쓰세요.', toolOptions: { maxSentences: 3 }, target: { selfCheck: ['답을 이끄는 낱말을 뺐다', '한 가지만 묻는다', '처음 읽어도 이해하기 쉽다', '보기가 찬반 쪽에 고르게 있다'] } }),
            IT(RW('이중 질문 \'도서관 책과 자리는 충분한가요?\'를 고쳐 쓰세요.', { topic: '고칠 문항: "도서관 책과 자리는 충분한가요?" — 한 가지씩 묻는 문항으로 고쳐 쓰세요(두 문항으로 나눠도 돼요).', minChars: 10, maxChars: 150, minSentences: 1, maxSentences: 3, title: '문항 고쳐 쓰기 ②', placeholder: '고친 문항: …' }, ['답을 이끄는 낱말을 뺐다', '한 문항에 한 가지만 묻는다', '처음 읽어도 이해하기 쉽다']),
              null,
              { prompt: '도서관 문항을 나누어 고쳐 쓰고, 문항마다 고른 보기까지 붙여 쓰세요.', toolOptions: { maxSentences: 4 }, target: { selfCheck: ['답을 이끄는 낱말을 뺐다', '한 문항에 한 가지만 묻는다', '처음 읽어도 이해하기 쉽다', '보기가 고르게 있다'] } }),
            IT(RW('유도 문항 \'모두가 원하는 운동장 개방에 찬성하나요?\'를 고쳐 쓰세요.', { topic: '고칠 문항: "모두가 원하는 운동장 개방에 찬성하나요?" — 답을 이끌지 않는 문항으로 고쳐 쓰세요.', minChars: 10, maxChars: 120, minSentences: 1, maxSentences: 2, title: '문항 고쳐 쓰기 ③', placeholder: '고친 문항: …' }, ['답을 이끄는 낱말을 뺐다', '한 가지만 묻는다', '처음 읽어도 이해하기 쉽다']),
              { prompt: '틀에 맞춰 운동장 개방 문항을 고쳐 쓰세요.', toolOptions: { starter: '___에 대해 어떻게 생각하나요?' }, target: { selfCheck: ['답을 이끄는 낱말을 뺐다', '한 가지만 묻는다'] } },
              null, { conclude: '이끄는 말을 빼고, 한 문항에 한 가지만 묻고, 보기를 고르게 두면 공정한 문항이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고치기 전과 고친 뒤 문항을 써요.', columns: ['고치기 전', '고친 뒤'], cells: [['탄산음료 자판기를 없애야겠죠?', ''], ['도서관 책과 자리는 충분한가요?', '']], answer: '탄산음료 자판기에 대해 어떻게 생각하나요? / 도서관 책은 충분한가요? + 도서관 자리는 충분한가요?' }] },
      }),
      M('activity.claim', {
        title: '사실·해석·결론 구별하기', method: '사실·해석·결론 구별하기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 3개(사실·해석·결론)에 문장 카드를 한 장씩 붙인다(바로 알려 준다).', base: '문장 카드 6장을 세 가지에 두 장씩 붙인다.', challenge: '자료가 말하는 것을 넘은 지나친 결론 카드는 붙이지 않고 남긴다(함정 카드 섞임).' },
        activity: {
          title: '사실·해석·결론 구별하기', tool: 'mindmap',
          teacher: '"\'30명 가운데 21명이 피곤하다고 답했다\'는 사실일까요, 해석일까요?" 카드를 붙일 때마다 그 문장이 자료에 그대로 있는지(사실), 자료를 풀어 읽은 것인지(해석), 그래서 무엇을 하자는 것인지(결론) 묻는다. "그래프를 보면 결론은 저절로 나온다"는 학생에게 "\'모든 중학생은 피곤하다\'도 이 그래프에서 저절로 나올까요?"라고 되묻는다. 지나친 결론은 어느 가지에도 붙이지 않는다는 점을 짚는다.',
          task: '가상 설문 자료에서 나온 문장 카드를 사실·해석·결론 가지에 붙이고, 지나친 결론은 남겨 두어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('수면 설문 자료의 문장 카드를 세 가지에 붙이세요.', ['사실', '해석', '결론'], [
              { id: 'f1', text: '30명 가운데 21명이 아침에 피곤하다고 답했다', to: '사실' }, { id: 'f2', text: '7시간 미만으로 잔다는 답이 13명이었다', to: '사실' },
              { id: 'i1', text: '우리 반은 피곤하다는 학생이 절반을 넘는다', to: '해석' }, { id: 'i2', text: '잠이 짧은 학생이 적지 않다', to: '해석' },
              { id: 'c1', text: '우리 반 잠드는 시각 약속을 정해 보자', to: '결론' }, { id: 'c2', text: '수면 시간을 더 자세히 조사해 보자', to: '결론' }], { topic: '우리 반 수면 설문(가상)' }),
              SB('수면 설문 자료의 문장 카드 세 장을 세 가지에 붙이세요.', ['사실', '해석', '결론'], [
                { id: 'f1', text: '30명 가운데 21명이 아침에 피곤하다고 답했다', to: '사실' }, { id: 'i1', text: '우리 반은 피곤하다는 학생이 절반을 넘는다', to: '해석' }, { id: 'c1', text: '우리 반 잠드는 시각 약속을 정해 보자', to: '결론' }], { topic: '우리 반 수면 설문(가상)' }),
              SB('수면 설문 문장 카드를 세 가지에 붙이고, 지나친 결론은 남기세요.', ['사실', '해석', '결론'], [
                { id: 'f1', text: '30명 가운데 21명이 아침에 피곤하다고 답했다', to: '사실' }, { id: 'f2', text: '7시간 미만으로 잔다는 답이 13명이었다', to: '사실' },
                { id: 'i1', text: '우리 반은 피곤하다는 학생이 절반을 넘는다', to: '해석' }, { id: 'i2', text: '잠이 짧은 학생이 적지 않다', to: '해석' },
                { id: 'c1', text: '우리 반 잠드는 시각 약속을 정해 보자', to: '결론' }, { id: 'c2', text: '수면 시간을 더 자세히 조사해 보자', to: '결론' },
                { id: 'x1', text: '모든 중학생은 아침에 피곤하다' }, { id: 'x2', text: '피곤한 까닭은 휴대전화 때문이다' }], { topic: '우리 반 수면 설문(가상)' })),
            IT(SB('쉬는 시간 설문 자료의 문장 카드를 세 가지에 붙이세요.', ['사실', '해석', '결론'], [
              { id: 'g1', text: '응답자의 40%가 도서관이라고 답했다', to: '사실' }, { id: 'g2', text: '우리 반은 쉬는 시간에 도서관을 가장 많이 쓴다', to: '해석' },
              { id: 'g3', text: '도서관 쉬는 시간 이용 규칙을 학급에서 이야기해 보자', to: '결론' }], { topic: '쉬는 시간 설문(가상)' }),
              null,
              SB('쉬는 시간 설문 문장 카드를 붙이고, 지나친 결론은 남기세요.', ['사실', '해석', '결론'], [
                { id: 'g1', text: '응답자의 40%가 도서관이라고 답했다', to: '사실' }, { id: 'g2', text: '우리 반은 쉬는 시간에 도서관을 가장 많이 쓴다', to: '해석' },
                { id: 'g3', text: '도서관 쉬는 시간 이용 규칙을 학급에서 이야기해 보자', to: '결론' }, { id: 'g4', text: '운동장은 필요 없으니 없애야 한다' }], { topic: '쉬는 시간 설문(가상)' })),
            IT(PB('자료가 말하는 만큼만 쓴 결론만 골라 담으세요.', '알맞은 결론', [
              { id: 'k1', text: '우리 반 30명 가운데 21명이 피곤하다고 답했다', ok: true }, { id: 'k2', text: '중학생은 모두 잠이 부족하다' },
              { id: 'k3', text: '우리 반은 쉬는 시간 도서관 이용이 가장 많았다', ok: true }, { id: 'k4', text: '도서관을 안 가는 학생은 책을 싫어한다' }], { topic: '결론 고르기' }),
              null, null, { conclude: '사실은 자료 그대로, 해석은 자료를 풀어 읽은 것, 결론은 그 범위 안에서 할 일이에요. 넘친 결론은 붙이지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '수면 설문 자료로 사실·해석·결론을 한 문장씩 써요.', columns: ['칸', '문장'], cells: [['사실', ''], ['해석', ''], ['결론', '']], answer: '(예) 30명 가운데 21명이 피곤하다고 답함 / 절반이 넘는다 / 잠드는 시각 약속을 정해 보자' }] },
      }),
      M('activity.overreach', {
        title: '결론이 지나친가 갈림길', method: '결론이 지나친가 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(한계 쓰기·보기 해석·개인정보)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '결론이 지나친가 갈림길', tool: 'dilemma',
          teacher: '"우리 반 30명에게 물은 결과로 \'모든 중학생\'을 말해도 될까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 하고, 발표를 듣는 사람 쪽 영향을 함께 읽는다. "결과가 원하는 대로 나오면 좋은 설문"이라는 학생에게 "원하는 결과를 얻으려고 문항을 바꾸거나 숫자를 숨기면 그 결과를 누가 믿을까요?"라고 되묻는다. 한계를 밝히는 문장이 결론을 지킨다는 점을 짚는다. 장면은 모두 가상이다.',
          task: '가상 모둠의 설문 결과로 결론을 쓰는 장면에서 길을 골라 결과를 따라가고, 자료가 말하는 만큼의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '30명 설문으로 \'모든 중학생\'이라 쓰려 해요. 한 번 골라 결과를 보세요.', base: '30명 설문으로 \'모든 중학생\'이라 쓰려 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '30명 설문으로 \'모든 중학생\'이라 쓰려 해요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '지나친 결론', OVER, [['scope', 'guess', 'keep']], OVER_R, ['r1', 'r2']),
            DIL({ easy: '유도 문항으로 90% 찬성이 나왔어요. 한 번 골라 결과를 보세요.', base: '유도 문항으로 90% 찬성이 나왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '유도 문항으로 90% 찬성이 나왔어요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '유도 문항 결과', LEAD, [['rewrite', 'honest', 'asis']], LEAD_R, ['r1', 'r2']),
            DIL({ easy: '함께 나타난 결과를 원인이라 하려 해요. 한 번 골라 결과를 보세요.', base: '함께 나타난 결과를 원인이라 하려 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '함께 나타난 결과를 원인이라 하려 해요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '원인 단정', CAUSE, [['link', 'other', 'anon']], CAUSE_R, ['r1', 'r2'], null, { conclude: '결론은 조사한 사람·물은 것의 범위 안에서 쓰고, 알 수 없는 것은 한계와 다음 탐구로 남겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '우리 반 30명 설문 결과로 쓸 결론으로 가장 알맞은 것은?', options: ['모든 중학생은 아침에 피곤하다', '우리 반 30명 가운데 21명이 아침에 피곤하다고 답했다', '피곤한 까닭은 휴대전화다'], answer: '우리 반 30명 가운데 21명이 아침에 피곤하다고 답했다' }] },
      }),

      // ---- 정리 ----
      M('wrap.run', {
        title: '고친 문항으로 반 설문 집계', method: '반 설문 실시와 집계', tool: 'timer', minutes: 7,
        levels: { easy: '고친 문항 2개로 손을 들어 설문하고 기록판 2칸에 집계한다.', base: '고친 문항 4개로 설문하고 기록판 4칸에 집계한다.', challenge: '기록판 4칸을 집계한 뒤, 활동지에서 결과를 막대그래프로 옮겨 그린다.' },
        wrap: {
          teacher: '"오늘 고친 문항으로 우리 반에 물어볼게요. 답하고 싶지 않으면 손을 들지 않아도 돼요." 교사가 문항을 읽고 학생들은 고개를 숙인 채 손을 들어 답하며, 기록 담당이 수를 세어 기록판에 적는다. "손 든 사람을 다 외워 두자"는 학생에게 "설문은 누가 답했는지가 아니라 몇 명이 답했는지를 세는 것"이라고 짚는다. 문항은 개인 사정이 드러나지 않는 것(쉬는 시간 장소·좋아하는 반찬 등)만 쓴다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '우리 반 설문 집계', timeUnit: 'min', labels: ['설문', '집계'], plan: { work: 2, rest: 2, rounds: 1 }, safety: ['답하고 싶지 않으면 손을 들지 않아도 된다고 알렸다', '이름을 적지 않았다', '고친 문항을 그대로 읽었다'], fields: [{ label: '문항1 \'예\'', unit: '명' }, { label: '문항2 \'예\'', unit: '명' }, { label: '문항3 \'예\'', unit: '명' }, { label: '문항4 \'예\'', unit: '명' }] },
              prompt: '설문 4분·집계 2분으로 맞추고, 약속을 확인한 뒤 문항 4개의 \'예\' 수를 기록판에 적어요.', target: { plan: { work: 4, rest: 2 }, safety: true, records: true }, difficulty: 0.2 },
            { prompt: '설문 4분·집계 2분으로 맞추고, 약속을 확인한 뒤 문항 2개의 \'예\' 수를 적어요.', toolOptions: { fields: [{ label: '문항1 \'예\'', unit: '명' }, { label: '문항2 \'예\'', unit: '명' }] } }),
            { type: 'choice', prompt: '반 설문을 할 때 지켜야 할 것으로 가장 알맞은 것은?', options: ['누가 손을 들었는지 적어 둔다', '답하지 않아도 되고, 이름 없이 수만 센다', '원하는 답이 나올 때까지 다시 묻는다'], answer: 1, difficulty: 0.15, explain: '설문은 동의와 익명이 먼저예요.' },
          ],
        },
        worksheet: {
          title: '우리 반 설문 결과',
          items: [
            { type: 'table', prompt: '고친 문항과 \'예\' 수를 적어요.', columns: ['문항', '\'예\' 수'], cells: [['', ''], ['', ''], ['', ''], ['', '']], answer: '학급 집계' },
            { type: 'short', prompt: '결과를 막대그래프로 그린다면 가장 긴 막대는 무엇일지 쓰고, 활동지 뒷면에 그려 봐요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 체계도 도전의 \'그래프로 옮기기\'는 기록판 교구가 그래프를 그리지 못해 활동지에서 한다.',
      }),
      M('wrap.report', {
        title: '자료만큼만 쓴 결론 문단', method: '자료만큼만 쓴 결론 문단', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 2개(사실·결론)에 카드를 넣는다.', base: '말풍선 빈칸 3개(사실→해석→결론)에 카드를 넣는다(지나친 결론 카드 섞임).', challenge: '빈칸 4개(사실→해석→결론→한계)에 카드를 넣는다.' },
        wrap: {
          teacher: '"결론 문단은 사실에서 출발해 해석을 거쳐 결론으로 가요. 한계 한 문장을 붙이면 무엇이 달라질까요?" 말풍선을 채운 뒤 소리 내어 읽게 하고, 지나친 결론 카드를 넣으면 어떻게 들리는지 견주게 한다. "한계를 쓰면 탐구가 약해 보인다"는 학생에게 "한계를 먼저 밝힌 결론과 질문을 받고서야 인정한 결론 가운데 무엇이 더 믿음을 줄까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'story', options: { mode: 'fill', title: '결론 문단', slots: [{ id: 'f1', who: '발표자', label: '(사실) "___"' }, { id: 'f2', who: '발표자', label: '(해석) "___"' }, { id: 'f3', who: '발표자', label: '(결론) "___"' }], cards: [
              { id: 'c1', text: '30명 가운데 21명이 피곤하다고 답했어요' }, { id: 'c2', text: '우리 반은 피곤하다는 학생이 절반을 넘어요' }, { id: 'c3', text: '잠드는 시각 약속을 정해 보면 좋겠어요' }, { id: 'c4', text: '모든 중학생은 잠이 부족해요' }] },
              prompt: '결론 문단 말풍선 세 칸(사실·해석·결론)을 채워요.', target: { fill: { f1: 'c1', f2: 'c2', f3: 'c3' } }, difficulty: 0.2 },
            { prompt: '결론 문단 말풍선 두 칸(사실·결론)을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '발표자', label: '(사실) "___"' }, { id: 'f3', who: '발표자', label: '(결론) "___"' }], cards: [{ id: 'c1', text: '30명 가운데 21명이 피곤하다고 답했어요' }, { id: 'c3', text: '잠드는 시각 약속을 정해 보면 좋겠어요' }, { id: 'c4', text: '모든 중학생은 잠이 부족해요' }] }, target: { fill: { f1: 'c1', f3: 'c3' } } },
            { prompt: '결론 문단 말풍선 네 칸(사실·해석·결론·한계)을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '발표자', label: '(사실) "___"' }, { id: 'f2', who: '발표자', label: '(해석) "___"' }, { id: 'f3', who: '발표자', label: '(결론) "___"' }, { id: 'f4', who: '발표자', label: '(한계) "___"' }], cards: [
              { id: 'c1', text: '30명 가운데 21명이 피곤하다고 답했어요' }, { id: 'c2', text: '우리 반은 피곤하다는 학생이 절반을 넘어요' }, { id: 'c3', text: '잠드는 시각 약속을 정해 보면 좋겠어요' }, { id: 'c5', text: '우리 반만 조사해서 다른 반은 알 수 없어요' }, { id: 'c4', text: '모든 중학생은 잠이 부족해요' }] }, target: { fill: { f1: 'c1', f2: 'c2', f3: 'c3', f4: 'c5' } } }),
            { type: 'choice', prompt: '결론 문단에 한계 문장을 넣는 까닭으로 가장 알맞은 것은?', options: ['문단을 길게 하려고', '결론이 말할 수 있는 범위를 듣는 사람에게 알리려고', '탐구를 약해 보이게 하려고'], answer: 1, difficulty: 0.2, explain: '한계는 결론을 넘겨짚지 않게 지켜 줘요.' },
          ],
        },
        worksheet: {
          title: '자료만큼만 쓴 결론',
          items: [
            { type: 'short', prompt: '오늘 우리 반 설문 결과로 사실→해석→결론 문단을 세 문장으로 써요.' },
            { type: 'short', prompt: '내 결론의 한계 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 마을 문제와 공동 봉사 계획서 (auto.m.g8-serve) ====
  {
    const M = MK('g8-serve', [8]);
    const TOWN = { grid: [6, 4], title: '가상의 우리 학교 주변', places: [
      { name: '학교', icon: 'school', at: [2, 1] }, { name: '버스 정류장', icon: 'bus', at: [4, 1] }, { name: '작은 공원', icon: 'park', at: [0, 0] },
      { name: '시장 골목', icon: 'market', at: [5, 3] }, { name: '아파트 단지', icon: 'apartment', at: [0, 3] }, { name: '도서관', icon: 'library', at: [3, 3] },
    ] };
    const COMPLAIN = [['공원 쓰레기', 34], ['정류장 담배꽁초', 21], ['골목 불법 주차', 15], ['어두운 길', 12], ['낙서', 8]];

    ALL.push(
      // ---- 도입 ----
      M('intro.map', {
        title: '학교 주변 문제 지도', method: '학교 주변 문제 지도', tool: 'map', minutes: 6,
        levels: { easy: '교사가 문제가 있는 곳 1곳(작은 공원)에 핀이 꽂히는 모습을 보인다.', base: '문제가 있는 곳 3곳에 핀이 꽂히는 모습을 보고 곳마다 문제를 말한다.', challenge: '핀 3곳의 문제를 쓰레기·안전·환경 같은 종류로 묶어 범례처럼 말한다.' },
        intro: {
          teacher: '"가상 학교 주변을 걸어 본다고 생각해요. 공원·정류장·시장 골목에서 주민들이 불편해할 만한 것은 무엇일까요?" 시연 단추로 공원·정류장·시장 골목에 핀이 꽂히는 모습을 보인다. "마을 문제는 어른들이 해결할 일"이라는 말이 나오면 "학생이 조사하고 알리고 함께 치울 수 있는 것도 있지 않을까요?"라고 되묻는다. 지도는 가상 마을이며 실제 지역 이름은 쓰지 않는다.',
          student: '가상 학교 주변 지도에서 주민이 불편해할 만한 곳을 찾고, 무엇이 문제인지 짝과 말해요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ pin: [0, 0] }, { pin: [4, 1] }, { pin: [5, 3] }] },
          art: { draw: 'a paper-cut neighborhood map around a school with a small park scattered with litter, a bus stop and a narrow market alley, small paper pins on each', banner: '학교 주변의 문제는 어디에?', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
      }),
      M('intro.photo', {
        title: '마을 장면과 주민 마음', method: '마을 장면 보고 느낌 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개를 읽고 주민 마음 카드를 함께 잇는다.', base: '장면 3개에 주민 마음 카드를 잇는다.', challenge: '마음 카드를 이은 뒤 그 장면이 생긴 원인을 짐작해 말한다.' },
        intro: {
          teacher: '"공원 의자 옆에 쓰레기가 쌓인 장면을 본 어르신 주민의 마음은 어떨까요?" 시연 단추로 마음 카드가 장면 옆에 놓이는 모습을 보인 뒤 다른 장면도 읽어 준다. "주민 마음까지 알 필요는 없다"는 말이 나오면 "봉사가 누구의 불편을 줄이려는 것인지 모르면 무엇을 해야 할지 알 수 있을까요?"라고 되묻는다. 장면은 가상이며 실제 사람 사진은 쓰지 않는다.',
          student: '가상 마을 장면 글을 듣고, 그 장면을 본 주민의 마음 카드를 이어요. 그런 장면이 왜 생겼을지도 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '공원 의자 옆에 쓰레기가 쌓여 있다' }, { id: 's2', label: '밤길 가로등이 꺼져 골목이 어둡다' }], cards: [{ id: 'k1', text: '속상함' }, { id: 'k2', text: '무서움' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut small park bench with litter beside it and an elderly neighbor looking at it, and a dark alley with a broken street lamp', banner: '주민은 어떤 마음일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.cause', {
        title: '원인과 해결·봉사 잇기', method: '원인과 해결·봉사 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '원인 가지 2개에 원인 카드를 붙인다(바로 알려 준다).', base: '원인 가지 3개에 카드를 붙이고, 원인마다 해결 카드를 잇는다.', challenge: '해결 가운데 학생이 안전하게 할 수 있는 봉사만 골라 표시한다(함정 섞임).' },
        activity: {
          title: '원인과 해결·봉사 잇기', tool: 'mindmap',
          teacher: '"공원에 쓰레기가 쌓이는 까닭은 \'사람들이 나빠서\'뿐일까요?" 원인 카드를 쓰레기통 부족·안내 부족·치우는 때 같은 가지로 나누게 한 뒤, 원인마다 해결을 잇게 한다. "봉사는 눈에 보이는 결과만 중요하다"는 학생에게 "한 번 다 치워도 원인이 그대로면 다음 주에 어떻게 될까요?"라고 되묻는다. 원인에 닿는 봉사(안내판·조사·건의)도 결과만큼 중요하다는 점을 짚는다.',
          task: '가상 마을 문제 \'공원 쓰레기\'의 원인 가지를 뻗고, 원인마다 해결과 학생이 할 수 있는 봉사를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('\'공원 쓰레기\'의 원인 카드를 원인 가지에 붙이세요.', ['쓰레기통 문제', '안내 부족', '치우는 때 문제'], [
              { id: 'c1', text: '쓰레기통이 한 곳뿐이다', to: '쓰레기통 문제' }, { id: 'c2', text: '쓰레기통이 금방 넘친다', to: '쓰레기통 문제' },
              { id: 'c3', text: '분리배출 안내판이 없다', to: '안내 부족' }, { id: 'c4', text: '되가져가자는 알림이 없다', to: '안내 부족' },
              { id: 'c5', text: '주말에 수거가 없다', to: '치우는 때 문제' }, { id: 'c6', text: '행사 뒤 바로 치우지 않는다', to: '치우는 때 문제' }], { topic: '공원 쓰레기' }),
              SB('\'공원 쓰레기\'의 원인 카드를 두 가지에 붙이세요.', ['쓰레기통 문제', '안내 부족'], [
                { id: 'c1', text: '쓰레기통이 한 곳뿐이다', to: '쓰레기통 문제' }, { id: 'c2', text: '쓰레기통이 금방 넘친다', to: '쓰레기통 문제' },
                { id: 'c3', text: '분리배출 안내판이 없다', to: '안내 부족' }, { id: 'c4', text: '되가져가자는 알림이 없다', to: '안내 부족' }], { topic: '공원 쓰레기' })),
            IT(MB('원인마다 알맞은 해결 카드를 이으세요.', [['쓰레기통이 한 곳뿐이다', '쓰레기통을 늘려 달라고 건의한다'], ['분리배출 안내판이 없다', '학생들이 안내판을 만들어 붙인다'], ['주말에 수거가 없다', '주말 수거를 관리하는 곳에 알린다']], ['그냥 두면 저절로 줄어든다'], { topic: '원인과 해결' }),
              MB('원인 두 개에 알맞은 해결 카드를 이으세요.', [['쓰레기통이 한 곳뿐이다', '쓰레기통을 늘려 달라고 건의한다'], ['분리배출 안내판이 없다', '학생들이 안내판을 만들어 붙인다']], [], { topic: '원인과 해결' })),
            IT(PB('해결 가운데 학생이 안전하게 할 수 있는 봉사만 골라 담으세요.', '우리가 할 봉사', [
              { id: 'p1', text: '교사 인솔로 공원 쓰레기 줍기', ok: true }, { id: 'p2', text: '분리배출 안내판 만들어 붙이기', ok: true },
              { id: 'p3', text: '쓰레기 버린 사람 찾아가 따지기' }, { id: 'p4', text: '밤에 혼자 공원 지키기' }], { topic: '학생이 할 수 있는 봉사' }),
              null,
              PB('해결 가운데 학생이 안전하게 할 수 있는 봉사만 골라 담으세요(함정 포함).', '우리가 할 봉사', [
                { id: 'p1', text: '교사 인솔로 공원 쓰레기 줍기', ok: true }, { id: 'p2', text: '분리배출 안내판 만들어 붙이기', ok: true },
                { id: 'p3', text: '쓰레기 버린 사람 찾아가 따지기' }, { id: 'p4', text: '밤에 혼자 공원 지키기' },
                { id: 'p5', text: '쓰레기가 많은 요일을 조사해 건의하기', ok: true }, { id: 'p6', text: '공원 쓰레기통을 직접 옮겨 놓기' }], { topic: '학생이 할 수 있는 봉사' }),
              { conclude: '마을 문제는 원인을 따라가야 해결이 보여요. 학생은 안전한 범위에서 치우기·알리기·조사·건의로 함께할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'공원 쓰레기\'의 원인 하나와, 그 원인에 닿는 봉사 하나를 이어 써요.' }] },
      }),
      M('activity.data', {
        title: '마을 문제 자료 그래프 읽기', method: '마을 문제 자료 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '그래프 하나에서 가장 심각한 문제 하나를 고른다.', base: '그래프 두 개에서 가장 심각한 문제와 두 문제의 차이를 읽는다.', challenge: '월별 꺾은선그래프에서 변화 추세를 읽고 봉사 시기를 고른다.' },
        activity: {
          title: '마을 문제 자료 그래프 읽기', tool: 'chart',
          teacher: '"가상 주민 설문에서 가장 많이 꼽힌 불편은 무엇이고, 두 번째와 몇 명 차이일까요?" 그래프를 읽은 뒤 가장 심각한 문제를 고른 까닭을 수로 말하게 한다. "표가 가장 많은 문제만 봉사 주제가 된다"는 학생에게 "표는 적어도 위험한 문제(어두운 길)라면 어떻게 할까요?"라고 되묻는다. 자료는 가상이며, 실제 자료를 쓸 때는 출처와 날짜를 밝힌다는 점을 짚는다.',
          task: '가상 마을 조사 그래프에서 가장 심각한 문제와 변화 추세를 읽고, 봉사 주제와 시기를 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '가상 주민 설문 그래프에서 가장 많이 꼽힌 불편을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '학교 주변에서 불편한 점(가상 주민 설문 90명)', unit: '명', xLabel: '불편', yLabel: '응답 수', data: COMPLAIN, question: '가장 많이 꼽힌 불편은?', choices: COMPLAIN.map((d) => d[0]) }, target: { pick: 0 } }),
            IT({ prompt: '\'공원 쓰레기\'는 \'정류장 담배꽁초\'보다 몇 명 더 꼽았는지 그래프에서 읽어 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '학교 주변에서 불편한 점(가상 주민 설문 90명)', unit: '명', xLabel: '불편', yLabel: '응답 수', data: COMPLAIN, question: '몇 명 더 많은가요?' }, target: { value: 13 } },
              { prompt: '\'정류장 담배꽁초\'를 꼽은 사람은 몇 명인지 읽어 쓰세요.', toolOptions: { question: '정류장 담배꽁초는 몇 명?' }, target: { value: 21 } }),
            IT({ prompt: '월별 공원 쓰레기 민원 그래프에서 민원이 가장 많은 달을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '월별 공원 쓰레기 민원(가상 기록)', unit: '건', xLabel: '월', yLabel: '민원 수', data: [['3월', 4], ['4월', 7], ['5월', 12], ['6월', 9]], question: '민원이 가장 많은 달은?', choices: ['3월', '4월', '5월', '6월'] }, target: { pick: 2 } },
              null,
              { prompt: '월별 민원이 늘어나는 흐름을 보고 봉사를 시작하기 알맞은 때를 고르세요.', toolOptions: { question: '봉사를 시작하기 알맞은 때는?', choices: ['민원이 늘기 시작하는 4월', '민원이 가장 적은 3월만', '민원이 줄어든 6월 뒤'] }, target: { pick: 0 } },
              { conclude: '그래프로 가장 심각한 문제와 늘어나는 때를 보면 봉사의 주제와 시기를 근거 있게 정할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 근거로 우리 모둠 봉사 주제와 시기를 한 문장으로 써요.' }] },
      }),
      M('activity.plan', {
        title: '공동 봉사 계획서 쓰기', method: '공동 봉사 계획서 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '계획서 틀로 3요소(목적·대상·활동)를 쓰고 기준 3개를 점검한다.', base: '6요소(목적·대상·활동·역할·안전·평가)를 갖춘 계획서를 쓰고 기준 6개를 점검한다.', challenge: '평가 기준을 수로 확인할 수 있게(예: 쓰레기 봉투 수·민원 수 변화) 구체화하고 기준 6개를 점검한다.' },
        activity: {
          title: '공동 봉사 계획서 쓰기', tool: 'rubric-writing',
          teacher: '"\'공원을 깨끗하게 한다\'는 평가 기준으로 봉사가 끝난 뒤 잘했는지 알 수 있을까요?" 여섯 요소를 함께 읽고 가상 모둠의 계획서를 쓰게 한 뒤, 평가 칸을 수로 확인할 수 있게 고쳐 보게 한다. "봉사는 눈에 보이는 결과만 중요하다"는 학생에게 "안내판을 붙인 뒤 한 달 동안 쓰레기가 줄었는지 보는 것도 결과 아닐까요?"라고 되묻는다. 안전 칸에는 보호자 동의와 교사 인솔을 꼭 넣게 한다.',
          task: '가상 모둠의 \'공원 쓰레기\' 공동 봉사 계획서를 목적·대상·활동·역할·안전·평가가 드러나게 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('\'공원 쓰레기\' 공동 봉사 계획서를 여섯 요소로 쓰세요.', { topic: '가상 모둠의 \'공원 쓰레기\' 공동 봉사 계획서를 목적·대상·활동·역할·안전·평가가 드러나게 쓰세요.', minChars: 60, maxChars: 450, minSentences: 4, maxSentences: 9, title: '공동 봉사 계획서', placeholder: '목적: … / 대상: …' }, ['목적을 썼다', '누구를 돕는지 썼다', '할 활동을 썼다', '역할을 나눠 썼다', '안전 약속(동의·인솔)을 썼다', '평가 방법을 썼다']),
              { prompt: '계획서 틀로 목적·대상·활동 세 요소를 쓰세요.', toolOptions: { minChars: 30, minSentences: 3, starter: '목적: ___. 대상: ___. 활동: ___.' }, target: { selfCheck: ['목적을 썼다', '누구를 돕는지 썼다', '할 활동을 썼다'] } },
              { prompt: '여섯 요소 계획서를 쓰되, 평가 방법을 수로 확인할 수 있게 쓰세요.', target: { selfCheck: ['목적을 썼다', '누구를 돕는지 썼다', '할 활동을 썼다', '역할을 나눠 썼다', '안전 약속(동의·인솔)을 썼다', '평가 방법을 수로 확인할 수 있게 썼다'] } }),
            IT(RW('계획서의 \'평가\' 칸만 구체적으로 다시 쓰세요.', { topic: '고칠 평가 칸: "공원을 깨끗하게 한다." — 봉사 뒤 잘되었는지 확인할 수 있게 다시 쓰세요.', minChars: 20, maxChars: 180, minSentences: 1, maxSentences: 3, title: '평가 칸 고쳐 쓰기' }, ['무엇을 확인할지 썼다', '언제 확인할지 썼다', '어떻게 확인할지 썼다']),
              { prompt: '틀에 맞춰 평가 칸을 다시 쓰세요.', toolOptions: { starter: '봉사 ___주 뒤에 ___을(를) 세어 확인한다.' }, target: { selfCheck: ['무엇을 확인할지 썼다', '언제 확인할지 썼다'] } },
              { prompt: '평가 칸을 봉사 전과 뒤의 수를 견주는 방법으로 다시 쓰세요.', target: { selfCheck: ['무엇을 확인할지 썼다', '언제 확인할지 썼다', '어떻게 확인할지 썼다', '봉사 전과 뒤를 견주는 방법을 썼다'] } }),
            IT(RW('계획서의 \'안전\' 칸만 다시 쓰세요.', { topic: '고칠 안전 칸: "조심한다." — 마을 봉사에서 지킬 안전 약속이 드러나게 다시 쓰세요.', minChars: 20, maxChars: 180, minSentences: 2, maxSentences: 4, title: '안전 칸 고쳐 쓰기' }, ['보호자 동의를 썼다', '교사 인솔과 정해진 구역을 썼다', '비상시 모일 곳을 썼다']),
              { prompt: '틀에 맞춰 안전 칸을 다시 쓰세요.', toolOptions: { starter: '보호자 동의를 받고, ___의 인솔로 ___ 안에서만 한다.', minSentences: 1 }, target: { selfCheck: ['보호자 동의를 썼다', '교사 인솔과 정해진 구역을 썼다'] } },
              null, { conclude: '좋은 계획서는 여섯 요소를 갖추고, 평가는 확인할 수 있게, 안전은 구체적으로 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 공동 봉사 계획서를 여섯 칸으로 써요.', columns: ['요소', '내용'], cells: [['목적', ''], ['대상', ''], ['활동', ''], ['역할', ''], ['안전', ''], ['평가', '']], answer: '모둠 계획' }] },
      }),
      M('activity.roles', {
        title: '마을 봉사 역할과 일정', method: '역할과 일정 정하기', tool: 'timer', minutes: 16,
        levels: { easy: '역할 3개가 일하는 차례 카드를 놓고 활동 시간을 맞춘다.', base: '역할 4개의 차례를 놓고 활동·정리 시간을 맞추고 안전 점검 칸을 표시한다.', challenge: '안전 점검에 비상시 모일 곳·연락 차례 칸까지 표시한다.' },
        activity: {
          title: '마을 봉사 역할과 일정', tool: 'timer',
          teacher: '"공원 봉사에서 \'안전 담당\'은 출발 전에 무엇을 하고, 활동 중에는 무엇을 볼까요?" 역할 카드를 일하는 차례로 놓고, 방과 후 시간 안에 끝나도록 시간을 맞추게 한다. "마을은 넓으니 각자 흩어져서 하면 빠르다"는 학생에게 "흩어진 친구가 다치면 누가 언제 알 수 있을까요?"라고 되묻는다. 비상시 모일 곳과 알릴 차례를 미리 정해 두는 것이 역할 나누기의 일부라는 점을 짚는다.',
          task: '가상 모둠의 마을 공원 봉사에서 역할이 일하는 차례를 놓고, 활동·정리 시간을 맞추고, 안전 점검 칸을 표시해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '공원 봉사에서 역할이 일하는 차례 카드를 놓으세요.', toolOptions: { title: '공원 봉사 역할 차례', cards: ['기록 담당: 모은 봉투 수 기록', '안전 담당: 인원·장갑 확인', '활동 담당: 구역별 쓰레기 줍기', '정리 담당: 분리해 모으기'] }, target: { order: ['안전 담당: 인원·장갑 확인', '활동 담당: 구역별 쓰레기 줍기', '정리 담당: 분리해 모으기', '기록 담당: 모은 봉투 수 기록'] } },
              { prompt: '공원 봉사에서 세 역할이 일하는 차례 카드를 놓으세요.', toolOptions: { cards: ['정리 담당: 분리해 모으기', '안전 담당: 인원·장갑 확인', '활동 담당: 구역별 쓰레기 줍기'] }, target: { order: ['안전 담당: 인원·장갑 확인', '활동 담당: 구역별 쓰레기 줍기', '정리 담당: 분리해 모으기'] } }),
            IT({ prompt: '방과 후 활동 40분, 정리 10분으로 타이머를 맞추세요.', toolOptions: { title: '공원 봉사 시간', timeUnit: 'min', labels: ['활동', '정리'], plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { work: 40, rest: 10, rounds: 1 } } },
              { prompt: '방과 후 활동 시간을 40분으로 맞추세요.', target: { plan: { work: 40, rounds: 1 } } }),
            IT({ prompt: '출발 전 안전 담당이 확인할 것을 모두 표시하세요.', toolOptions: { title: '출발 전 안전 점검', safety: ['보호자 동의서를 모두 냈다', '선생님과 함께 출발한다', '장갑·집게를 나눠 받았다', '차도 가까이 가지 않기로 했다'] }, target: { safety: true } },
              null,
              { prompt: '출발 전 안전 점검과 비상 대비 칸까지 모두 표시하세요.', toolOptions: { safety: ['보호자 동의서를 모두 냈다', '선생님과 함께 출발한다', '장갑·집게를 나눠 받았다', '차도 가까이 가지 않기로 했다', '비상시 모일 곳을 정했다', '다치면 선생님께 먼저 알리는 차례를 정했다'] }, target: { safety: true } },
              { conclude: '역할은 일하는 차례와 시간까지 정하고, 안전 담당은 출발 전 점검과 비상 대비를 맡아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 봉사 역할과 할 일을 써요(이름 대신 번호).', columns: ['역할', '맡은 사람', '할 일'], cells: [['안전 담당', '', ''], ['활동 담당', '', ''], ['기록 담당', '', '']], answer: '모둠 계획' }] },
        notes: '비상 연락은 전화번호를 쓰지 않고 \'선생님께 먼저 알리는 차례\'로만 정한다.',
      }),

      // ---- 정리 ----
      M('wrap.do', {
        title: '지역 연계 봉사 실행 기록', method: '지역 연계 봉사 실행', tool: 'timer', minutes: 7,
        levels: { easy: '실행 시간 20분으로 타이머를 맞추고 안전 점검을 표시한 뒤 기록판 1칸(모은 봉투 수)을 적는다.', base: '실행 시간 40분으로 맞추고 안전 점검을 표시한 뒤 기록판 2칸(모은 봉투 수·활동 시간)을 적는다.', challenge: '기록판을 적고 활동지에 주민 반응을 글로 기록한다.' },
        wrap: {
          teacher: '"오늘 방과 후 공원 봉사 전에 안전 점검을 함께 읽어 볼게요. 하나라도 빠지면 출발하지 않아요." 교사 인솔로 정한 시간에 봉사를 하고, 이 시간에는 출발 전 점검과 다녀온 뒤의 기록을 채운다. "주민에게 칭찬받으려고 하는 게 봉사"라는 학생에게 "칭찬보다 주민의 불편이 줄었는지가 더 중요하지 않을까요?"라고 되묻는다. 주민 사진·이름은 기록하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '지역 연계 봉사', timeUnit: 'min', labels: ['봉사', '정리'], plan: { work: 10, rest: 0, rounds: 1 }, safety: ['보호자 동의서를 냈다', '선생님 인솔로 간다', '정해진 구역 안에서만 한다', '차도 가까이 가지 않는다'], fields: [{ label: '모은 봉투', unit: '개' }, { label: '활동 시간', unit: '분' }] },
              prompt: '실행 시간 40분으로 타이머를 맞추고, 안전 점검을 모두 표시하고, 다녀온 뒤 기록판을 적어요.', target: { plan: { work: 40 }, safety: true, records: true }, difficulty: 0.2 },
            { prompt: '실행 시간 20분으로 맞추고, 안전 점검을 표시하고, 모은 봉투 수를 적어요.', toolOptions: { fields: [{ label: '모은 봉투', unit: '개' }] }, target: { plan: { work: 20 }, safety: true, records: true } }),
            { type: 'choice', prompt: '마을 봉사 기록으로 가장 알맞은 것은?', options: ['주민 얼굴이 나온 사진', '한 일·모은 양·주민 반응을 이름 없이 적은 글', '봉사 시간만 적은 숫자'], answer: 1, difficulty: 0.2, explain: '이름·얼굴 없이 한 일과 변화를 남겨요.' },
          ],
        },
        worksheet: {
          title: '지역 연계 봉사 기록',
          items: [
            { type: 'table', prompt: '오늘 한 봉사를 기록해요.', columns: ['칸', '내용'], cells: [['한 일', ''], ['모은 양', ''], ['걸린 시간', '']], answer: '모둠 기록' },
            { type: 'short', prompt: '주민 반응이나 눈에 띈 변화를 이름 없이 한 문장으로 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 체계도의 \'20분·40분 봉사\'는 7분 정리 시간 안에 할 수 없어, 실제 봉사는 방과 후 등 따로 정한 시간에 교사 인솔로 하고, 이 모듈은 출발 전 점검과 다녀온 뒤 기록을 맡는다.',
      }),
      M('wrap.check', {
        title: '계획 대 실행 견주기', method: '계획 대 실행 견주기', tool: 'sortboard', minutes: 7,
        levels: { easy: '계획 카드 4장을 \'된 것\'·\'안 된 것\'·\'바꾼 것\'에 나눈다.', base: '계획 카드 6장을 세 칸에 나눈다.', challenge: '나눈 뒤 다음 계획에 반영할 점을 고르는 문항까지 푼다.' },
        wrap: {
          teacher: '"가상 모둠의 계획 카드와 실제 기록을 견주어 볼게요. 계획대로 된 것, 안 된 것, 현장에서 바꾼 것은 무엇일까요?" 카드를 나눈 뒤 \'안 된 것\'과 \'바꾼 것\'마다 까닭을 묻는다. "계획대로 안 되면 실패한 봉사"라는 학생에게 "비가 와서 실내 활동으로 바꾼 것도 실패일까요?"라고 되묻는다. 견주기의 목적은 다음 계획을 고치는 것이라는 점을 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'sortboard', options: BB('', ['된 것', '안 된 것', '바꾼 것'], [
              { id: 'p1', text: '쓰레기 봉투 10개 모으기 → 12개 모음', to: '된 것' }, { id: 'p2', text: '안내판 3개 붙이기 → 1개만 붙임', to: '안 된 것' },
              { id: 'p3', text: '공원 두 구역 → 비가 와 한 구역만', to: '바꾼 것' }, { id: 'p4', text: '활동 뒤 기록 남기기 → 기록함', to: '된 것' },
              { id: 'p5', text: '주민 의견 듣기 → 시간이 모자라 못 함', to: '안 된 것' }, { id: 'p6', text: '집게 줍기 → 집게가 모자라 장갑으로', to: '바꾼 것' }]).toolOptions,
              prompt: '가상 모둠의 계획 카드를 된 것·안 된 것·바꾼 것으로 나누어요.', target: BB('', ['된 것', '안 된 것', '바꾼 것'], [
                { id: 'p1', to: '된 것' }, { id: 'p2', to: '안 된 것' }, { id: 'p3', to: '바꾼 것' }, { id: 'p4', to: '된 것' }, { id: 'p5', to: '안 된 것' }, { id: 'p6', to: '바꾼 것' }]).target, difficulty: 0.2 },
            Object.assign({ prompt: '계획 카드 4장을 된 것·안 된 것·바꾼 것으로 나누어요.' }, (() => { const x = BB('', ['된 것', '안 된 것', '바꾼 것'], [
              { id: 'p1', text: '쓰레기 봉투 10개 모으기 → 12개 모음', to: '된 것' }, { id: 'p2', text: '안내판 3개 붙이기 → 1개만 붙임', to: '안 된 것' },
              { id: 'p3', text: '공원 두 구역 → 비가 와 한 구역만', to: '바꾼 것' }, { id: 'p4', text: '활동 뒤 기록 남기기 → 기록함', to: '된 것' }]); return { toolOptions: x.toolOptions, target: x.target }; })())),
            { type: 'choice', prompt: '다음 계획에 반영할 점으로 가장 알맞은 것은?', options: ['안 된 것은 잊는다', '안내판은 미리 만들어 두고, 주민 의견 듣기 시간을 따로 잡는다', '계획을 아예 세우지 않는다'], answer: 1, difficulty: 0.25, explain: '안 된 것의 까닭을 다음 계획에 넣어요.' },
          ],
        },
        worksheet: {
          title: '계획 대 실행',
          items: [
            { type: 'table', prompt: '우리 모둠 봉사의 계획과 실제를 견주어 써요.', columns: ['계획', '실제', '된 것/안 된 것/바꾼 것'], cells: [['', '', ''], ['', '', ''], ['', '', '']], answer: '모둠 기록' },
            { type: 'short', prompt: '다음 계획에 반영할 점 한 가지를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 고등학교 진학 준비와 불안 다루기 (auto.m.g9-adapt) ====
  {
    const M = MK('g9-adapt', [9]);
    const LIFE = [
      { id: 'l1', text: '한 학급이 같은 시간표로 수업한다', to: '중학교' }, { id: 'l2', text: '듣고 싶은 과목을 골라 시간표를 짠다', to: '고등학교' },
      { id: 'l3', text: '수행평가가 있다', to: '둘 다' }, { id: 'l4', text: '과목마다 학점을 채워 이수한다', to: '고등학교' },
      { id: 'l5', text: '창의적 체험활동 시간이 있다', to: '둘 다' }, { id: 'l6', text: '자유학기가 있다', to: '중학교' },
    ];
    const MAP = { mode: 'scale', grid: [6, 4], title: '가상의 다온네 동네', scale: { cell: 500, unit: 'm' }, places: [
      { name: '다온네 집', icon: 'house', at: [0, 3] }, { name: '가람고', icon: 'school', at: [3, 3] }, { name: '나래고', icon: 'school', at: [0, 0] },
      { name: '버스 정류장', icon: 'bus', at: [2, 2] }, { name: '도서관', icon: 'library', at: [5, 1] },
    ] };
    // 학교 정보를 어디서 찾나
    const SRC = { text: '가상 학생 다온은 진학 후보 \'가람고\'의 과목 선택 방법이 궁금하다. 검색하니 \'거기 과목 선택 엉망이래\'라는 익명 후기가 가장 위에 뜬다.', ask: '다온은 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'trust', text: '후기를 믿고 가람고를 후보에서 뺀다', result: '언제 누가 쓴 글인지도 모른 채 결정한다.', impact: [{ who: '다온', text: '정보 없이 결정한다', tone: -1 }], why: '익명 후기 한 개로는 학교를 알 수 없어요.', end: '후기 하나로 결정해 버렸어요.',
        next: { text: '나중에 친구가 그 후기는 몇 해 전 글이라고 알려 준다.', choices: [
          { id: 'shrug', text: '이미 정했으니 그대로 둔다', result: '좋은 기회를 놓칠 수 있다.', impact: [{ who: '다온', text: '선택지가 줄어든다', tone: -1 }] },
          { id: 'check', text: '학교 공식 안내를 다시 찾아본다', result: '지금의 과목 선택 방법을 알게 된다.', impact: [{ who: '다온', text: '정확한 정보를 얻는다', tone: 1 }] }] } },
      { id: 'official', text: '가람고 공식 누리집의 교육과정 안내를 찾아본다', result: '과목 목록과 선택 방법을 날짜가 적힌 자료로 확인한다.', impact: [{ who: '다온', text: '정확한 정보를 얻는다', tone: 1 }], end: '공식 안내를 먼저 확인했어요.',
        next: { text: '안내문에 모르는 낱말(학점, 이수)이 많아 막막하다.', choices: [
          { id: 'skip', text: '어려우니 그냥 넘긴다', result: '중요한 내용을 놓친다.', impact: [{ who: '다온', text: '모르는 채 남는다', tone: -1 }], why: '모르는 것은 물어보면 돼요.' },
          { id: 'askt', text: '담임 선생님께 모르는 낱말을 여쭌다', result: '학점과 이수의 뜻을 알게 된다.', impact: [{ who: '다온', text: '이해가 깊어진다', tone: 1 }], end: '모르는 것을 물어 이해했어요.',
            next: { text: '입학 설명회 날과 학원 시간이 겹친다.', choices: [
              { id: 'go', text: '보호자와 이야기해 설명회에 간다', result: '궁금한 점을 직접 묻고 답을 듣는다.', impact: [{ who: '다온', text: '직접 확인한다', tone: 1 }] },
              { id: 'miss', text: '친구가 들은 이야기로 대신한다', result: '내 궁금증은 묻지 못한다.', impact: [{ who: '다온', text: '내 질문이 남는다', tone: -1 }], why: '전해 들은 말보다 직접 묻는 것이 정확해요.' }] } }] } },
      { id: 'friend', text: '친구 단체 대화방에 "가람고 어때?"라고만 묻는다', result: '서로 다른 소문만 잔뜩 모인다.', impact: [{ who: '다온', text: '더 헷갈린다', tone: -1 }], why: '소문을 모아도 사실이 되지 않아요.', ending: '소문만 모여 더 헷갈렸어요.' }] };
    const SRC_R = [{ id: 'r1', text: '학교 공식 안내는 날짜와 출처가 있어 믿을 만하다' }, { id: 'r2', text: '모르는 것은 선생님께 묻고 직접 확인하는 것이 정확하다' },
      { id: 'r3', text: '인터넷 후기가 가장 정확한 학교 정보다', why: '익명 후기는 언제 누가 쓴 것인지 알기 어려워요.' }, { id: 'r4', text: '많은 사람이 말하면 사실이다', why: '소문은 여럿이 말해도 사실이 되지 않아요.' }];
    // 선배의 말
    const SENIOR = { text: '동아리 선배가 다온에게 "그 과목은 무조건 어려우니 절대 고르지 마"라고 말한다. 다온은 그 과목에 관심이 많다.', ask: '다온은 어떻게 할까?', motif: 'wind', choices: [
      { id: 'obey', text: '선배 말대로 관심 과목을 빼기로 한다', result: '관심 있는 분야를 알아볼 기회를 놓친다.', impact: [{ who: '다온', text: '관심을 접는다', tone: -1 }], why: '한 사람의 경험은 참고할 수 있지만 전부가 아니에요.', end: '한 사람 말로 관심을 접었어요.',
        next: { text: '그 과목을 들은 다른 선배는 재미있었다고 한다.', choices: [
          { id: 'confused', text: '누구 말이 맞는지 몰라 고민만 한다', result: '결정이 미뤄진다.', impact: [{ who: '다온', text: '헷갈린다', tone: -1 }] },
          { id: 'look', text: '과목 안내서에서 무엇을 배우는지 직접 확인한다', result: '내용을 알고 판단한다.', impact: [{ who: '다온', text: '스스로 판단한다', tone: 1 }] }] } },
      { id: 'askwhy', text: '선배에게 왜 어려웠는지 구체적으로 묻는다', result: '선배는 실험 보고서가 많아 바빴다고 한다.', impact: [{ who: '다온', text: '어려운 점을 정확히 안다', tone: 1 }], end: '까닭을 구체적으로 물었어요.',
        next: { text: '보고서가 많다는 것이 걱정된다.', choices: [
          { id: 'fear', text: '걱정되니 무조건 피한다', result: '관심 과목을 놓친다.', impact: [{ who: '다온', text: '기회를 놓친다', tone: -1 }], why: '어려운 점을 알면 대비할 수 있어요.' },
          { id: 'compare', text: '과목 안내서와 담임 선생님 설명으로 다른 정보와 견준다', result: '보고서를 미리 준비하는 방법도 알게 된다.', impact: [{ who: '다온', text: '대비 방법을 안다', tone: 1 }], end: '여러 정보를 견주어 보았어요.',
            next: { text: '결정은 고등학교에 가서 다시 할 수 있다는 것도 알게 되었다.', choices: [
              { id: 'note', text: '지금 알게 된 것을 정리해 두고 결정은 그때 다시 한다', result: '서두르지 않고 준비한다.', impact: [{ who: '다온', text: '부담이 줄어든다', tone: 1 }] },
              { id: 'rush', text: '지금 당장 확정하려고 밤새 고민한다', result: '불안만 커진다.', impact: [{ who: '다온', text: '지친다', tone: -1 }], why: '지금 확정하지 않아도 되는 것은 정보만 모아 둬요.' }] } }] } },
      { id: 'argue', text: '"선배가 뭘 알아요"라며 무시한다', result: '도움이 될 경험까지 듣지 못한다.', impact: [{ who: '선배', text: '서운하다', tone: -1 }], why: '경험은 참고 자료로 들어 두고 다른 정보와 견줘요.', ending: '경험을 무시해 참고할 것도 잃었어요.' }] };
    const SENIOR_R = [{ id: 'r1', text: '한 사람의 경험은 다른 정보와 견주어 참고한다' }, { id: 'r2', text: '어려운 점을 구체적으로 알면 대비할 수 있다' },
      { id: 'r3', text: '선배 말은 언제나 맞다', why: '경험은 사람마다 달라요.' }, { id: 'r4', text: '어렵다는 말이 있으면 피하는 것이 안전하다', why: '관심과 대비 방법도 함께 따져요.' }];
    // 친구와 비교
    const COMP = { text: '다온의 친구는 벌써 갈 학교와 과목을 다 정했다고 한다. 다온은 "나만 늦은 것 같다"는 생각에 불안하다.', ask: '다온은 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'copy', text: '친구와 같은 학교·과목으로 정해 버린다', result: '내 관심과 맞는지 따져 보지 않았다.', impact: [{ who: '다온', text: '내 선택이 아니다', tone: -1 }], why: '친구의 속도와 선택이 내 정답은 아니에요.', end: '친구를 따라 정해 버렸어요.',
        next: { text: '정하고 나서도 마음이 개운하지 않다.', choices: [
          { id: 'ignore', text: '그냥 참는다', result: '불안이 계속된다.', impact: [{ who: '다온', text: '불안하다', tone: -1 }] },
          { id: 'restart', text: '내 관심을 다시 적어 보고 담임 선생님과 이야기한다', result: '내가 궁금한 것이 무엇인지 보인다.', impact: [{ who: '다온', text: '내 기준이 생긴다', tone: 1 }] }] } },
      { id: 'balance', text: '"나는 아직 정보를 모으는 중"이라고 생각을 바꿔 본다', result: '늦었다는 생각보다 할 일이 보인다.', impact: [{ who: '다온', text: '불안이 줄어든다', tone: 1 }], end: '생각을 균형 있게 바꿨어요.',
        next: { text: '할 일을 적어 보니 설명회·안내서 읽기·상담이 남았다.', choices: [
          { id: 'all', text: '이번 주에 다 끝내려고 무리한다', result: '지쳐서 오히려 미룬다.', impact: [{ who: '다온', text: '지친다', tone: -1 }], why: '할 일은 나눠서 차례로 해요.' },
          { id: 'order', text: '날짜를 정해 하나씩 차례로 한다', result: '하나씩 해내며 마음이 놓인다.', impact: [{ who: '다온', text: '자신감이 생긴다', tone: 1 }], end: '날짜를 정해 하나씩 했어요.',
            next: { text: '그래도 밤마다 진학 걱정으로 잠이 잘 안 온다.', choices: [
              { id: 'counsel', text: '상담 선생님께 걱정을 이야기한다', result: '걱정을 다루는 방법을 함께 찾는다.', impact: [{ who: '다온', text: '도움을 받는다', tone: 1 }] },
              { id: 'hide', text: '나만 이런 것 같아 숨긴다', result: '걱정이 계속 쌓인다.', impact: [{ who: '다온', text: '혼자 지친다', tone: -1 }], why: '진학 불안은 많은 친구가 겪어요. 이야기하면 방법이 보여요.' }] } }] } },
      { id: 'quit', text: '"어차피 안 될 거야"라며 알아보기를 그만둔다', result: '준비할 시간이 그냥 지나간다.', impact: [{ who: '다온', text: '기회를 놓친다', tone: -1 }], why: '불안할수록 작은 할 일 하나부터 시작해요.', ending: '알아보기를 그만둬 시간이 지나갔어요.' }] };
    const COMP_R = [{ id: 'r1', text: '친구의 속도는 내 정답이 아니다' }, { id: 'r2', text: '진학 불안은 흔하며 이야기하면 방법이 보인다' },
      { id: 'r3', text: '불안은 나만 느낀다', why: '많은 친구가 같은 불안을 느껴요.' }, { id: 'r4', text: '친구와 같이 정하면 안전하다', why: '내 관심과 맞는지가 먼저예요.' }];
    const HELP = [['수업 내용이 너무 어려워 진학이 걱정된다 → ___', '담임 선생님께 "상담 시간을 잡을 수 있을까요?"'], ['걱정 때문에 잠이 안 온다 → ___', '상담 선생님께 "요즘 걱정을 이야기하고 싶어요"'], ['진학 후보 학교를 함께 알아보고 싶다 → ___', '보호자께 "설명회에 같이 가 줄 수 있어요?"']];

    ALL.push(
      // ---- 도입 ----
      M('intro.change', {
        title: '중학교와 고등학교 생활 견주기', method: '중학교·고등학교 생활 견주기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장을 \'중학교\'·\'고등학교\'·\'둘 다\'에 나누어 보인다.', base: '카드 6장이 세 칸에 나뉘는 모습을 보고 고등학교에서 달라지는 점을 말한다.', challenge: '\'학점을 채워 이수한다\'는 말이 무슨 뜻일지 짐작해 말한다.' },
        intro: {
          teacher: '"고등학교에서는 시간표를 누가 정할까요? 지금처럼 반 전체가 같은 시간표일까요?" 시연 단추로 생활 카드가 세 칸에 나뉘는 모습을 보인다. "고등학교 이야기는 너무 어렵고 멀다"는 말이 나오면 "달라지는 점을 미리 알면 불안이 줄지 않을까요?"라고 되묻는다. 과목 선택·학점의 자세한 방법은 학교마다 안내가 있으니 공식 안내로 확인한다고 밝힌다.',
          student: '생활 카드가 중학교·고등학교·둘 다 칸에 나뉘는 것을 보고, 고등학교에서 달라지는 점 하나를 짝에게 말해요.',
          demo: { tool: 'sortboard', options: BB('', ['중학교', '고등학교', '둘 다'], LIFE).toolOptions, sequence: [{ at: { l1: 0, l2: 1, l3: 2 } }, { at: { l1: 0, l2: 1, l3: 2, l4: 1, l5: 2, l6: 0 } }] },
          art: { draw: 'a paper-cut path from a middle school building to a high school building with a signpost of course cards and a small credit counter', banner: '고등학교에서 무엇이 달라질까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.thought', {
        title: '불안을 키우는 생각 찾기', method: '불안을 키우는 생각 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 생각 카드 2개를 읽고 마음 카드를 함께 잇는다.', base: '생각 3개에 마음 카드를 잇는다.', challenge: '생각 4개에 마음 카드를 잇고, 불안을 키우는 생각의 공통점을 말한다.' },
        intro: {
          teacher: '"\'나만 늦었어\'라고 생각할 때와 \'나는 정보를 모으는 중이야\'라고 생각할 때, 다온의 마음은 어떻게 다를까요?" 시연 단추로 마음 카드가 생각 옆에 놓이는 모습을 보인다. "불안은 나만 느낀다"는 말이 나오면 "진학을 앞둔 친구들 가운데 걱정이 하나도 없는 사람이 많을까요?"라고 되묻는다. 같은 상황도 어떤 생각을 하느냐에 따라 마음의 크기가 달라진다는 점을 짚는다. 학생 자신의 걱정은 발표시키지 않는다.',
          student: '가상 학생 다온의 진학 걱정 속 생각 카드를 듣고, 그 생각이 만드는 마음 카드를 이어요. 불안을 키우는 생각을 찾아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"나만 늦었어, 다 망했어"' }, { id: 's2', label: '"나는 아직 정보를 모으는 중이야"' }], cards: [{ id: 'k1', text: '불안' }, { id: 'k2', text: '편안함' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut teenager at a crossroads with two thought bubbles, one dark storm cloud and one calm leaf, and a high school building far away', banner: '어떤 생각이 불안을 키울까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.source', {
        title: '학교 정보원 믿을 만한가', method: '학교 정보원 믿을 만한가', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(직접 확인하기)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '학교 정보원 믿을 만한가', tool: 'dilemma',
          teacher: '"검색 맨 위의 익명 후기와 학교 공식 누리집 안내 가운데, 언제 누가 쓴 것인지 알 수 있는 것은 어느 쪽일까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "인터넷 후기가 가장 정확한 학교 정보"라는 학생에게 "그 후기는 몇 년 전 글일 수도 있지 않을까요?"라고 되묻는다. 정보는 출처·날짜를 보고, 모르면 묻고, 직접 확인한다는 차례를 짚는다. 학교 이름은 모두 가상이다.',
          task: '가상 학생 다온이 진학 정보를 찾는 장면에서 길을 골라 결과를 따라가고, 믿을 만한 정보원의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '익명 후기가 먼저 보여요. 한 번 골라 결과를 보세요.', base: '익명 후기가 먼저 보여요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '익명 후기가 먼저 보여요. 세 번 골라 직접 확인까지 가고 바른 근거를 모두 고르세요.' },
              '익명 후기와 공식 안내', SRC, [['official', 'askt', 'go']], SRC_R, ['r1', 'r2']),
            DIL({ easy: '선배가 과목을 고르지 말래요. 한 번 골라 결과를 보세요.', base: '선배가 과목을 고르지 말래요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '선배가 과목을 고르지 말래요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '선배의 말', SENIOR, [['askwhy', 'compare', 'note']], SENIOR_R, ['r1', 'r2']),
            DIL({ easy: '친구는 벌써 다 정했대요. 한 번 골라 결과를 보세요.', base: '친구는 벌써 다 정했대요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구는 벌써 다 정했대요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '친구와 견주기', COMP, [['balance', 'order', 'counsel']], COMP_R, ['r1', 'r2'], null, { conclude: '진학 정보는 출처와 날짜를 보고, 경험은 견주어 참고하고, 모르면 묻고 직접 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '진학 후보 학교의 과목 선택 방법을 알아볼 때 가장 먼저 볼 곳은?', options: ['익명 후기', '학교 공식 누리집·안내 자료', '친구 단체 대화방'], answer: '학교 공식 누리집·안내 자료' }] },
      }),
      M('activity.map', {
        title: '후보 학교 통학 거리 재기', method: '진학 후보 학교 지도에 표시', tool: 'map', minutes: 16,
        levels: { easy: '후보 학교 1곳까지 길 위 칸에 번호가 보이는 지도에서 거리를 구한다.', base: '후보 학교 2곳까지의 거리를 축척(한 칸 500m)으로 구한다.', challenge: '거리를 구한 뒤 걸어서 걸리는 통학 시간을 어림해 고른다.' },
        activity: {
          title: '후보 학교 통학 거리 재기', tool: 'map',
          teacher: '"지도 한 칸이 500m라면, 다온네 집에서 가람고까지 칸을 몇 개 지나나요?" 칸 수를 세어 거리로 바꾸는 방법을 함께 해 본 뒤 두 학교를 견주게 한다. "가까운 학교가 무조건 좋은 학교"라는 학생에게 "거리는 고를 때 따지는 여러 기준 가운데 하나일 뿐이지 않을까요?"라고 되묻는다. 지도와 학교는 모두 가상이며, 학생 자신의 집이나 후보 학교는 묻지 않는다.',
          task: '가상 학생 다온네 동네 칸 지도에서 진학 후보 학교까지의 거리를 축척으로 구하고, 통학 시간을 어림해요.',
          levels: { easy: { showCells: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '다온네 집에서 가람고까지의 거리를 축척으로 구해 넣으세요.', toolOptions: Object.assign({}, MAP, { from: '다온네 집', to: '가람고' }), target: { from: '다온네 집', to: '가람고' } }),
            IT({ prompt: '다온네 집에서 나래고까지의 거리를 축척으로 구해 넣으세요.', toolOptions: Object.assign({}, MAP, { from: '다온네 집', to: '나래고' }), target: { from: '다온네 집', to: '나래고' } }),
            IT({ prompt: '다온네 집에서 버스 정류장까지의 거리를 축척으로 구해 넣으세요.', toolOptions: Object.assign({}, MAP, { from: '다온네 집', to: '버스 정류장' }), target: { from: '다온네 집', to: '버스 정류장' } },
              null,
              { prompt: '집에서 가람고까지 걸어서 1분에 약 100m를 간다면 몇 분쯤 걸릴지 고르세요.', toolOptions: Object.assign({}, MAP, { from: '다온네 집', to: '가람고', ask: { q: '걸어서 몇 분쯤 걸릴까요?', choices: ['약 5분', '약 15분', '약 1시간'] } }), target: { from: '다온네 집', to: '가람고', pick: 1 } },
              { conclude: '칸 수에 축척을 곱하면 거리가 나와요. 통학 거리는 학교를 고를 때 따지는 여러 기준 가운데 하나예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다온의 후보 학교까지 거리를 써요.', columns: ['곳', '거리'], cells: [['가람고', ''], ['나래고', '']], answer: '1500m, 1500m' }] },
        notes: '지도·학교 이름은 가상이다. 학생의 실제 주소·후보 학교를 묻거나 적게 하지 않는다. 체계도의 \'핀 꽂기\'는 통학 거리를 구하는 축척 모드로 했다.',
      }),
      M('activity.reframe', {
        title: '균형 잡힌 생각으로 바꿔 쓰기', method: '균형 잡힌 생각으로 바꿔 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '틀("___라고 생각했지만, 사실은 ___. 그래서 ___.")을 채워 쓰고 기준 2개를 점검한다.', base: '가상 친구의 불안한 생각을 근거를 넣은 균형 잡힌 생각 두 문장으로 바꾸고 기준 3개를 점검한다.', challenge: '도움을 청할 곳까지 넣어 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '균형 잡힌 생각으로 바꿔 쓰기', tool: 'rubric-writing',
          teacher: '"\'나는 다 망했어\'를 \'다 괜찮아\'로 바꾸면 균형 잡힌 생각일까요?" 무조건 좋게 생각하는 것과 근거를 보고 생각하는 것을 견준 뒤 가상 친구의 생각을 바꿔 쓰게 한다. "불안은 나만 느낀다"는 학생에게 "오늘 읽은 가상 친구들 사례에 나와 비슷한 생각이 하나도 없었나요?"라고 되묻는다. 균형 잡힌 생각에는 \'사실\'이 들어간다는 점을 짚는다. 학생 자신의 걱정은 걷지 않는 활동지에만 쓴다.',
          task: '가상 친구의 불안한 생각을 사실과 근거를 넣은 균형 잡힌 생각으로 바꿔 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('가상 친구 하준의 생각 \'친구들은 다 정했는데 나만 늦었어\'를 균형 잡힌 생각으로 바꿔 쓰세요.', { topic: '하준의 생각: "친구들은 다 정했는데 나만 늦었어." — 사실과 근거를 넣어 균형 잡힌 생각 두 문장으로 바꿔 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 3, title: '생각 바꾸기 ①', placeholder: '사실은…' }, ['처음 생각을 그대로 되풀이하지 않았다', '사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다']),
              { prompt: '틀을 채워 하준의 생각을 바꿔 쓰세요.', toolOptions: { starter: '___라고 생각했지만, 사실은 ___. 그래서 ___.' }, target: { selfCheck: ['사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다'] } },
              { prompt: '하준의 생각을 바꾸고, 도움을 청할 사람이나 곳까지 넣어 쓰세요.', toolOptions: { maxSentences: 4 }, target: { selfCheck: ['처음 생각을 그대로 되풀이하지 않았다', '사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다', '도움을 청할 사람이나 곳을 썼다'] } }),
            IT(RW('가상 친구 서윤의 생각 \'고등학교 가면 분명 못 따라갈 거야\'를 균형 잡힌 생각으로 바꿔 쓰세요.', { topic: '서윤의 생각: "고등학교 가면 분명 못 따라갈 거야." — 사실과 근거를 넣어 균형 잡힌 생각 두 문장으로 바꿔 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 3, title: '생각 바꾸기 ②', placeholder: '사실은…' }, ['처음 생각을 그대로 되풀이하지 않았다', '사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다']),
              { prompt: '틀을 채워 서윤의 생각을 바꿔 쓰세요.', toolOptions: { starter: '___라고 생각했지만, 사실은 ___. 그래서 ___.' }, target: { selfCheck: ['사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다'] } },
              { prompt: '서윤의 생각을 바꾸고, 도움을 청할 사람이나 곳까지 넣어 쓰세요.', toolOptions: { maxSentences: 4 }, target: { selfCheck: ['처음 생각을 그대로 되풀이하지 않았다', '사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다', '도움을 청할 사람이나 곳을 썼다'] } }),
            IT(RW('가상 친구 다온의 생각 \'설명회에서 질문하면 다들 비웃을 거야\'를 균형 잡힌 생각으로 바꿔 쓰세요.', { topic: '다온의 생각: "설명회에서 질문하면 다들 비웃을 거야." — 사실과 근거를 넣어 균형 잡힌 생각 두 문장으로 바꿔 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 3, title: '생각 바꾸기 ③', placeholder: '사실은…' }, ['처음 생각을 그대로 되풀이하지 않았다', '사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다']),
              { prompt: '틀을 채워 다온의 생각을 바꿔 쓰세요.', toolOptions: { starter: '___라고 생각했지만, 사실은 ___. 그래서 ___.' }, target: { selfCheck: ['사실이나 근거를 넣었다', '할 수 있는 일을 하나 넣었다'] } },
              null, { conclude: '균형 잡힌 생각은 무조건 좋게 보는 것이 아니라 사실과 근거를 보고, 할 수 있는 일을 찾는 생각이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '요즘 내가 가진 걱정 하나를 균형 잡힌 생각으로 바꿔 써 봐요. (걷지 않아요.)' }] },
      }),
      M('activity.help', {
        title: '도움 받을 사람과 첫마디 잇기', method: '도움 받을 사람과 말 잇기', tool: 'wordcards', minutes: 16,
        levels: { easy: '상황 2개에 도움 받을 사람과 첫마디 카드를 넣는다(바로 알려 준다).', base: '상황 3개에 첫마디 카드를 넣고, 상황을 도와줄 사람 칸에 나눈다.', challenge: '첫마디 카드 가운데 정중하고 분명한 것만 골라 담는다(함정 섞임).' },
        activity: {
          title: '도움 받을 사람과 첫마디 잇기', tool: 'wordcards',
          teacher: '"걱정 때문에 잠이 안 올 때, 누구에게 무슨 말로 시작하면 좋을까요?" 상황마다 도와줄 사람과 첫마디 카드를 넣은 뒤 소리 내어 읽어 보게 한다. "도움을 청하는 것은 약한 사람이나 하는 일"이라는 학생에게 "모르는 길을 묻는 것과 무엇이 다를까요?"라고 되묻는다. 첫마디는 짧아도 되고, 무엇이 필요한지만 분명하면 된다는 점을 짚는다.',
          task: '진학을 앞둔 가상 상황마다 도움 받을 사람(담임·상담 교사·보호자)과 첫마디 카드를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('상황마다 알맞은 첫마디 카드를 넣으세요.', HELP, ['아무에게도 말하지 않기']),
              FB('상황 두 개에 알맞은 첫마디 카드를 넣으세요.', HELP.slice(0, 2), [])),
            IT(SB('상황 카드를 도와줄 사람 칸에 나누세요.', ['담임 선생님', '상담 선생님', '보호자'], [
              { id: 'a1', text: '과목 선택 방법이 헷갈린다', to: '담임 선생님' }, { id: 'a2', text: '진학 원서 일정을 놓칠까 걱정된다', to: '담임 선생님' },
              { id: 'a3', text: '불안해서 밥맛이 없다', to: '상담 선생님' }, { id: 'a4', text: '친구와 비교하며 자꾸 우울해진다', to: '상담 선생님' },
              { id: 'a5', text: '설명회에 함께 갈 사람이 필요하다', to: '보호자' }, { id: 'a6', text: '통학 방법을 함께 정하고 싶다', to: '보호자' }]),
              SB('상황 카드 세 장을 도와줄 사람 칸에 나누세요.', ['담임 선생님', '상담 선생님', '보호자'], [
                { id: 'a1', text: '과목 선택 방법이 헷갈린다', to: '담임 선생님' }, { id: 'a3', text: '불안해서 밥맛이 없다', to: '상담 선생님' }, { id: 'a5', text: '설명회에 함께 갈 사람이 필요하다', to: '보호자' }])),
            IT(PB('정중하고 무엇이 필요한지 분명한 첫마디만 골라 담으세요.', '좋은 첫마디', [
              { id: 'w1', text: '"진학 상담 시간을 잡을 수 있을까요?"', ok: true }, { id: 'w2', text: '"그냥… 아니에요"' },
              { id: 'w3', text: '"요즘 걱정이 있어 10분만 이야기하고 싶어요"', ok: true }, { id: 'w4', text: '"알아서 다 정해 주세요"' }]),
              null,
              PB('정중하고 분명한 첫마디만 골라 담으세요(함정 카드가 더 섞였어요).', '좋은 첫마디', [
                { id: 'w1', text: '"진학 상담 시간을 잡을 수 있을까요?"', ok: true }, { id: 'w2', text: '"그냥… 아니에요"' },
                { id: 'w3', text: '"요즘 걱정이 있어 10분만 이야기하고 싶어요"', ok: true }, { id: 'w4', text: '"알아서 다 정해 주세요"' },
                { id: 'w5', text: '"설명회 날 함께 가 줄 수 있어요?"', ok: true }, { id: 'w6', text: '"몰라요, 다 싫어요"' }]),
              { conclude: '도움을 청하는 것은 길을 묻는 것과 같아요. 누구에게, 무엇이 필요한지 짧고 정중하게 말하면 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '진학 걱정이 생기면 이야기할 사람 한 명과 첫마디를 써요. (걷지 않아요.)' }] },
      }),

      // ---- 정리 ----
      M('wrap.plan', {
        title: '진학 준비 할 일 차례', method: '진학 준비 체크 일정', tool: 'timer', minutes: 7,
        levels: { easy: '진학 준비 할 일 카드 3장을 차례로 놓는다.', base: '할 일 카드 5장을 차례로 놓는다.', challenge: '5장을 놓은 뒤 할 일마다 마감 날을 정했는지 점검 칸까지 표시한다.' },
        wrap: {
          teacher: '"설명회에 가기 전과 다녀온 뒤 할 일은 무엇일까요? 원서 마감 직전에 처음 알아보면 어떻게 될까요?" 할 일 카드를 차례로 놓게 한 뒤, 차례마다 날짜를 붙이는 연습을 활동지에서 하게 한다. "진학 준비는 3학년 겨울에 한꺼번에 하면 된다"는 학생에게 "설명회는 언제 열리는지 먼저 알아봐야 하지 않을까요?"라고 되묻는다. 학생의 실제 진학 계획은 걷지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '진학 준비 차례', cards: ['담임 선생님과 상담하기', '후보 학교 공식 안내 읽기', '관심 분야 적어 보기', '입학 설명회 다녀오기', '알게 된 것 정리하기'] },
              prompt: '가상 학생 다온의 진학 준비 할 일 카드를 차례로 놓아요.', target: { order: ['관심 분야 적어 보기', '후보 학교 공식 안내 읽기', '입학 설명회 다녀오기', '알게 된 것 정리하기', '담임 선생님과 상담하기'] }, difficulty: 0.25 },
            { prompt: '다온의 진학 준비 할 일 카드 세 장을 차례로 놓아요.', toolOptions: { cards: ['입학 설명회 다녀오기', '관심 분야 적어 보기', '후보 학교 공식 안내 읽기'] }, target: { order: ['관심 분야 적어 보기', '후보 학교 공식 안내 읽기', '입학 설명회 다녀오기'] } },
            { prompt: '할 일 카드 다섯 장을 차례로 놓고, 마감 날을 정했는지 점검 칸에 표시해요.', target: { order: ['관심 분야 적어 보기', '후보 학교 공식 안내 읽기', '입학 설명회 다녀오기', '알게 된 것 정리하기', '담임 선생님과 상담하기'], selfCheck: ['할 일마다 마감 날을 정했다', '설명회 날짜를 공식 안내로 확인하기로 했다'] } }),
            { type: 'choice', prompt: '진학 준비를 시작하는 첫 할 일로 가장 알맞은 것은?', options: ['원서 마감 날 알아보기 시작', '내 관심 분야를 적어 보고 공식 안내를 찾아보기', '친구가 정한 곳을 따라 정하기'], answer: 1, difficulty: 0.2, explain: '내 관심에서 출발해 믿을 만한 정보를 모아요.' },
          ],
        },
        worksheet: {
          title: '진학 준비 할 일',
          items: [
            { type: 'table', prompt: '진학 준비 할 일과 마감 날을 써 봐요. (걷지 않아요.)', columns: ['할 일', '마감 날'], cells: [['관심 분야 적기', ''], ['공식 안내 읽기', ''], ['설명회', '']], answer: '자기 계획' },
            { type: 'short', prompt: '할 일 가운데 이번 주에 할 것 하나를 써요.' },
          ],
        },
      }),
      M('wrap.talk', {
        title: '짝과 걱정 나누고 응원하기', method: '짝과 걱정 나누고 응원하기', tool: 'timer', minutes: 7,
        levels: { easy: '짝과 걱정 1개를 나누고 점검 칸 2개를 표시한다.', base: '걱정 2개를 나누고 응원 한마디까지 한 뒤 점검 칸 3개를 표시한다.', challenge: '걱정을 나눈 뒤 각자 도움 계획(누구에게·언제)까지 정하고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"진학 걱정은 많은 친구가 함께 가진 것이에요. 짝의 걱정을 듣고 \'그건 별거 아니야\' 대신 어떤 말을 해 주면 좋을까요?" 1분씩 번갈아 말하도록 타이머를 맞추고, 교사가 시작과 바꾸는 때를 알린다. "걱정을 말하면 약해 보인다"는 학생에게 "오늘 바꿔 쓴 균형 잡힌 생각을 짝에게 들려주는 것도 괜찮아요"라고 말해 준다. 말하고 싶지 않은 학생은 가상 친구의 걱정으로 대신 나누게 하고, 들은 이야기는 밖에 옮기지 않기로 약속한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '걱정 나누기', timeUnit: 'min', labels: ['말하기', '바꾸기'], plan: { work: 2, rest: 1, rounds: 1 }, safety: ['들은 이야기는 밖에 옮기지 않는다', '말하고 싶지 않으면 가상 친구 걱정으로 대신한다'] },
              prompt: '1분씩 번갈아 말하도록 말하기 1분·바꾸기 0분·2번으로 맞추고, 약속을 확인한 뒤 나누고 점검 칸에 표시해요.', target: { plan: { work: 1, rest: 0, rounds: 2 }, safety: true, selfCheck: ['걱정 하나를 말했다', '짝의 걱정을 끝까지 들었다', '응원 한마디를 해 주었다'] }, difficulty: 0.2 },
            { prompt: '말하기 1분·2번으로 맞추고, 약속을 확인한 뒤 나누고 점검 칸 두 개에 표시해요.', target: { plan: { work: 1, rounds: 2 }, safety: true, selfCheck: ['걱정 하나를 말했다', '짝의 걱정을 끝까지 들었다'] } },
            { prompt: '말하기 1분·2번으로 맞추고, 나눈 뒤 도움 계획까지 정했는지 점검 칸에 표시해요.', target: { plan: { work: 1, rest: 0, rounds: 2 }, safety: true, selfCheck: ['걱정 하나를 말했다', '짝의 걱정을 끝까지 들었다', '응원 한마디를 해 주었다', '누구에게 언제 도움을 청할지 정했다'] } }),
            { type: 'choice', prompt: '짝이 진학 걱정을 말할 때 해 줄 말로 가장 알맞은 것은?', options: ['"그건 별거 아니야"', '"나도 비슷해. 설명회 같이 알아볼래?"', '"너만 그런 거야"'], answer: 1, difficulty: 0.15, explain: '공감하고 함께할 일을 말하면 힘이 돼요.' },
          ],
        },
        worksheet: {
          title: '걱정 나누기',
          items: [
            { type: 'short', prompt: '짝에게 들은 응원 한마디를 적어요. (걷지 않아요.)' },
            { type: 'blank', prompt: '내 도움 계획을 써요. (걷지 않아요.)', text: '___에게 ___까지 이야기해 볼게요.', answer: '자기 계획' },
          ],
        },
        notes: '교사 진행 모듈이다. 걱정의 내용은 채점하지 않고, 나눈 걱정이 위기 신호로 보이면 수업 뒤 상담교사와 연계한다.',
      }),
    );
  }

  // ==== 9학년 · 디지털 공동체 규칙과 탄소 줄이기 (auto.m.g9-habit) ====
  {
    const M = MK('g9-habit', [9]);
    const POWER = [['3월', 52], ['4월', 40], ['5월', 38], ['6월', 55], ['7월', 68]];
    // 대화방 규칙 만들기
    const CHAT = { text: '가상 3학년 2반 단체 대화방에 밤 12시까지 알림이 이어지고, 한 친구 사진에 놀리는 댓글이 달렸다. 학급 회의에서 대화방 규칙을 만들기로 했다.', ask: '규칙 만들기를 맡은 나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'many', text: '생각나는 금지 규칙을 20개 넘게 적는다', result: '아무도 다 기억하지 못하고 하루 만에 지켜지지 않는다.', impact: [{ who: '반 친구들', text: '규칙을 모른다', tone: -1 }], why: '규칙은 많을수록 좋은 것이 아니라 지킬 수 있어야 해요.', end: '규칙이 너무 많아 지켜지지 않았어요.',
        next: { text: '친구들이 "이걸 어떻게 다 지켜"라고 한다.', choices: [
          { id: 'force', text: '어기면 대화방에서 내보내자고 한다', result: '반발이 커진다.', impact: [{ who: '반 친구들', text: '반발한다', tone: -1 }] },
          { id: 'trim', text: '꼭 필요한 규칙 몇 개로 줄이자고 한다', result: '핵심 규칙을 다시 고르기 시작한다.', impact: [{ who: '반 친구들', text: '지킬 수 있게 된다', tone: 1 }] }] } },
      { id: 'core', text: '불편한 점을 먼저 모아 꼭 필요한 규칙 3개만 정하자고 한다', result: '\'밤 10시 뒤 알림 자제\', \'남의 사진은 동의 받고 올리기\', \'놀리는 말 쓰지 않기\'가 후보로 나온다.', impact: [{ who: '반 친구들', text: '규칙을 기억한다', tone: 1 }], end: '꼭 필요한 규칙만 골랐어요.',
        next: { text: '한 친구가 "반장은 공지할 게 많으니 밤에도 올려도 되지?"라고 묻는다.', choices: [
          { id: 'except', text: '반장은 예외로 하자고 한다', result: '"왜 반장만?"이라는 불만이 나온다.', impact: [{ who: '반 친구들', text: '불공평하다고 느낀다', tone: -1 }], why: '공정한 규칙은 모두에게 같게 적용돼요.' },
          { id: 'same', text: '모두에게 같게 하되, 급한 공지는 다음 날 아침에 올리자고 한다', result: '모두가 같은 규칙을 지킨다.', impact: [{ who: '반 친구들', text: '공평하게 느낀다', tone: 1 }], end: '모두에게 같은 규칙을 정했어요.',
            next: { text: '규칙을 어긴 일이 생기면 어떻게 할지 아직 정하지 않았다.', choices: [
              { id: 'step', text: '먼저 개인 메시지로 알리고, 되풀이되면 담임 선생님과 이야기하는 차례를 정한다', result: '어겼을 때도 다툼 없이 처리된다.', impact: [{ who: '반 친구들', text: '절차를 안다', tone: 1 }] },
              { id: 'shame', text: '어긴 사람을 대화방에 공개하자고 한다', result: '또 다른 놀림이 생긴다.', impact: [{ who: '어긴 친구', text: '여럿 앞에서 창피를 당한다', tone: -1 }], why: '규칙을 어긴 사람의 권리도 지켜야 해요.' }] } }] } },
      { id: 'leave', text: '대화방을 없애자고 한다', result: '필요한 공지까지 받을 곳이 사라진다.', impact: [{ who: '반 친구들', text: '공지를 놓친다', tone: -1 }], why: '문제를 없애려다 필요한 것까지 없애면 다른 불편이 생겨요.', ending: '대화방을 없애 공지를 놓치게 됐어요.' }] };
    const CHAT_R = [{ id: 'r1', text: '공정한 규칙은 모두에게 같게 적용된다' }, { id: 'r2', text: '규칙은 지킬 수 있을 만큼 꼭 필요한 것으로 정한다' },
      { id: 'r3', text: '대화방 규칙은 많을수록 좋다', why: '많으면 아무도 기억하지 못해요.' }, { id: 'r4', text: '어긴 사람은 공개해야 고친다', why: '어긴 사람의 권리도 지켜야 해요.' }];
    // 사진 올리기
    const PHOTO = { text: '체험학습 사진을 반 대화방에 올리려는데, 몇몇 친구 얼굴이 크게 나온 사진이 많다.', ask: '사진을 모은 나는 어떻게 할까?', motif: 'sun', choices: [
      { id: 'post', text: '추억이니 전부 그대로 올린다', result: '한 친구가 "내 사진은 내려 줘"라고 한다.', impact: [{ who: '사진 속 친구', text: '원하지 않는 사진이 퍼진다', tone: -1 }], why: '사진 속 사람에게 먼저 묻는 것이 사진 규칙의 출발이에요.', end: '묻지 않고 올려 친구가 불편해했어요.',
        next: { text: '사진은 이미 몇 명이 저장했다.', choices: [
          { id: 'shrug', text: '이미 퍼졌으니 그냥 둔다', result: '친구가 더 속상해한다.', impact: [{ who: '사진 속 친구', text: '속상하다', tone: -1 }] },
          { id: 'down', text: '바로 내리고 저장한 친구들에게 지워 달라고 부탁한다', result: '더 퍼지는 것을 막는다.', impact: [{ who: '사진 속 친구', text: '보호받는다', tone: 1 }] }] } },
      { id: 'ask', text: '사진 속 친구들에게 먼저 올려도 되는지 묻는다', result: '두 명이 자기 얼굴 사진은 빼 달라고 한다.', impact: [{ who: '사진 속 친구', text: '선택할 수 있다', tone: 1 }], end: '올리기 전에 먼저 물었어요.',
        next: { text: '빼 달라는 친구가 있어 사진 고르기가 번거롭다.', choices: [
          { id: 'skipask', text: '귀찮으니 다음부터는 묻지 않기로 한다', result: '같은 문제가 되풀이된다.', impact: [{ who: '반 친구들', text: '불안하다', tone: -1 }], why: '번거로워도 동의는 빼지 않아요.' },
          { id: 'rule', text: '\'사진은 나온 사람 동의 뒤 올리기\'를 대화방 규칙으로 제안한다', result: '다음부터 모두가 같은 방법을 쓴다.', impact: [{ who: '반 친구들', text: '사생활을 지킨다', tone: 1 }], end: '동의 규칙을 제안했어요.',
            next: { text: '규칙에 \'동의를 어떻게 확인하는가\'가 빠져 있다.', choices: [
              { id: 'how', text: '\'올리기 전 개인 메시지로 묻고 답을 받는다\'고 덧붙인다', result: '확인 방법까지 분명해진다.', impact: [{ who: '반 친구들', text: '지키기 쉽다', tone: 1 }] },
              { id: 'vague', text: '\'알아서 잘 묻기\'로 둔다', result: '사람마다 다르게 해석한다.', impact: [{ who: '반 친구들', text: '헷갈린다', tone: -1 }], why: '지킬 수 있는 규칙은 방법이 분명해요.' }] } }] } },
      { id: 'blur', text: '얼굴만 흐리게 하면 묻지 않아도 된다며 올린다', result: '옷과 배경으로 누군지 알아본다.', impact: [{ who: '사진 속 친구', text: '알아볼 수 있다', tone: -1 }], why: '흐리게 해도 알아볼 수 있으면 먼저 물어야 해요.', ending: '흐리게 해도 누군지 드러났어요.' }] };
    const PHOTO_R = [{ id: 'r1', text: '사진은 나온 사람의 동의를 받고 올린다' }, { id: 'r2', text: '규칙에는 지키는 방법이 분명해야 한다' },
      { id: 'r3', text: '추억이면 묻지 않아도 된다', why: '추억이어도 사진 속 사람이 원하지 않을 수 있어요.' }, { id: 'r4', text: '얼굴만 가리면 괜찮다', why: '다른 단서로 알아볼 수 있어요.' }];
    // 대화방 놀림
    const MOCK = { text: '대화방에서 한 친구의 맞춤법 실수를 두고 여러 명이 \'ㅋㅋㅋ\'를 단다. 그 친구는 아무 말이 없다.', ask: '나는 어떻게 할까?', motif: 'storm', choices: [
      { id: 'laugh', text: '나도 웃음 표시를 단다', result: '웃음 표시가 더 늘어난다.', impact: [{ who: '실수한 친구', text: '여럿에게 놀림받는다', tone: -1 }], why: '작은 웃음 표시도 모이면 놀림이 돼요.', end: '웃음 표시를 더해 놀림이 커졌어요.',
        next: { text: '그 친구가 대화방에서 나가 버렸다.', choices: [
          { id: 'none', text: '모른 척한다', result: '친구가 반에서도 말이 줄어든다.', impact: [{ who: '실수한 친구', text: '위축된다', tone: -1 }] },
          { id: 'sorry', text: '개인 메시지로 사과하고 놀린 친구들에게도 말한다', result: '친구가 조금 마음을 연다.', impact: [{ who: '실수한 친구', text: '사과를 받는다', tone: 1 }] }] } },
      { id: 'change', text: '"다들 실수하잖아, 그만하자"라며 화제를 돌린다', result: '웃음 표시가 멈춘다.', impact: [{ who: '실수한 친구', text: '덜 창피하다', tone: 1 }], end: '말려서 놀림이 멈췄어요.',
        next: { text: '그래도 비슷한 일이 또 생길 것 같다.', choices: [
          { id: 'wait', text: '그때마다 말리면 된다고 생각한다', result: '말리는 사람이 없을 때 또 놀림이 생긴다.', impact: [{ who: '반 친구들', text: '같은 일이 되풀이된다', tone: -1 }], why: '되풀이되는 일은 공동의 규칙으로 막아요.' },
          { id: 'propose', text: '\'놀리는 말과 웃음 표시 쓰지 않기\'를 규칙으로 제안한다', result: '학급 회의 안건이 된다.', impact: [{ who: '반 친구들', text: '함께 지킨다', tone: 1 }], end: '규칙으로 제안했어요.',
            next: { text: '규칙이 생긴 뒤에도 몰래 놀리는 일이 있으면 어떻게 할까.', choices: [
              { id: 'report', text: '되풀이되면 담임 선생님께 알리는 차례를 규칙에 넣는다', result: '혼자 해결하지 않아도 된다.', impact: [{ who: '반 친구들', text: '보호받는다', tone: 1 }] },
              { id: 'self', text: '각자 알아서 하게 둔다', result: '놀림을 당한 친구가 혼자 견딘다.', impact: [{ who: '놀림받은 친구', text: '혼자 견딘다', tone: -1 }], why: '도움을 청할 차례가 규칙에 있어야 해요.' }] } }] } },
      { id: 'screen', text: '대화를 캡처해 다른 반 친구에게 보여 준다', result: '놀림이 다른 반까지 퍼진다.', impact: [{ who: '실수한 친구', text: '더 많은 사람이 안다', tone: -1 }], why: '캡처해 옮기면 놀림이 더 퍼져요.', ending: '캡처를 옮겨 놀림이 퍼졌어요.' }] };
    const MOCK_R = [{ id: 'r1', text: '작은 웃음 표시도 모이면 놀림이 된다' }, { id: 'r2', text: '되풀이되는 일은 공동 규칙과 도움 청할 차례로 막는다' },
      { id: 'r3', text: '대화방 일은 장난이니 괜찮다', why: '대화방에서도 상처는 진짜예요.' }, { id: 'r4', text: '말리면 나도 놀림받으니 가만히 있는다', why: '한 마디가 놀림을 멈출 수 있어요.' }];
    const SCORE = [['빈 교실 불 끄기', 3], ['급식 잔반 줄이기', 4], ['걸어서 등교하기', 5]];

    ALL.push(
      // ---- 도입 ----
      M('intro.chat', {
        title: '단체 대화방 장면 속 마음', method: '단체 대화방 장면에서 문제 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개를 읽고 읽는 친구 마음 카드를 함께 잇는다.', base: '장면 3개에 읽는 친구 마음 카드를 잇는다.', challenge: '마음 카드를 이은 뒤 장면마다 문제에 이름(밤늦은 알림·동의 없는 사진·놀림)을 붙인다.' },
        intro: {
          teacher: '"밤 12시에 알림이 30개 쌓인 걸 본 친구, 자기 사진에 놀리는 댓글이 달린 걸 본 친구의 마음은 어떨까요?" 시연 단추로 마음 카드가 장면 옆에 놓이는 모습을 보인다. "대화방은 그냥 장난하는 곳"이라는 말이 나오면 "화면 너머의 친구도 교실에서처럼 같은 마음을 느끼지 않을까요?"라고 되묻는다. 대화방도 우리 반 공동체이고 규칙이 필요하다는 점을 짚는다. 장면은 가상이다.',
          student: '가상 단체 대화방 장면을 읽고, 그 글을 읽는 친구의 마음 카드를 이어요. 무엇이 문제인지도 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '밤 12시까지 알림이 30개 쌓였다' }, { id: 's2', label: '내 사진에 놀리는 댓글이 달렸다' }], cards: [{ id: 'k1', text: '짜증' }, { id: 'k2', text: '속상함' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut smartphone screen showing a group chat with many notification bubbles at midnight, a moon outside the window and a teenager covering their ears', banner: '대화방 너머의 마음은?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),
      M('intro.energy', {
        title: '학교 전기 사용 그래프', method: '학교 에너지 사용 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 전기를 가장 많이 쓴 달을 짚는다.', base: '두 달(4월·7월)을 견주어 차이를 읽는다.', challenge: '7월에 많이 쓴 까닭(냉방)을 짐작하고 줄일 방법을 말한다.' },
        intro: {
          teacher: '"가상 학교의 월별 전기 사용 그래프에서 가장 높은 점은 몇 월일까요? 왜 그달이 높을까요?" 시연 단추로 7월 점이 골라지는 모습을 보인다. "학교 전기는 학교가 내니 우리와 상관없다"는 말이 나오면 "빈 교실에 켜진 불과 에어컨은 누가 끌 수 있을까요?"라고 되묻는다. 그래프는 가상 자료이며, 오늘은 학교에서 탄소를 줄이는 실천안을 따져 본다고 밝힌다.',
          student: '가상 학교의 월별 전기 사용 꺾은선그래프를 보고 가장 많이 쓴 달과 그 까닭을 짐작해 짝과 말해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '월별 학교 전기 사용(가상 자료)', unit: '백 kWh', xLabel: '월', yLabel: '사용량', data: POWER, from: 30, question: '전기를 가장 많이 쓴 달은?', choices: POWER.map((d) => d[0]) }, sequence: [{ pick: 4 }] },
          art: { draw: 'a paper-cut school building with lit windows in empty classrooms, an air conditioner blowing, and a paper line graph rising toward summer', banner: '전기를 언제 많이 쓸까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '사용량 수치는 가상이다.',
      }),

      // ---- 활동 ----
      M('activity.rules', {
        title: '공정한 대화방 규칙 갈림길', method: '공정한 규칙 조건 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(어겼을 때·확인 방법)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '공정한 대화방 규칙 갈림길', tool: 'dilemma',
          teacher: '"규칙을 20개 만든 반과 3개 만든 반, 한 달 뒤 어느 반이 규칙을 더 잘 지킬까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 하고, 영향 칸에서 \'모두에게 같은가\'를 따지게 한다. "대화방 규칙은 많을수록 좋다"는 학생에게 "기억하지 못하는 규칙은 지킬 수 있을까요?"라고 되묻는다. 공정한 규칙의 조건(모두에게 같음·지킬 수 있음·권리 보호)을 짚는다.',
          task: '가상 반 단체 대화방 장면에서 길을 골라 결과를 따라가고, 공정한 규칙의 조건이 담긴 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '대화방 규칙을 만들어요. 한 번 골라 결과를 보세요.', base: '대화방 규칙을 만들어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '대화방 규칙을 만들어요. 세 번 골라 어겼을 때 차례까지 가고 바른 근거를 모두 고르세요.' },
              '대화방 규칙 만들기', CHAT, [['core', 'same', 'step']], CHAT_R, ['r1', 'r2']),
            DIL({ easy: '체험학습 사진을 올리려 해요. 한 번 골라 결과를 보세요.', base: '체험학습 사진을 올리려 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '체험학습 사진을 올리려 해요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '사진 올리기', PHOTO, [['ask', 'rule', 'how']], PHOTO_R, ['r1', 'r2']),
            DIL({ easy: '대화방에서 놀림이 시작됐어요. 한 번 골라 결과를 보세요.', base: '대화방에서 놀림이 시작됐어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '대화방에서 놀림이 시작됐어요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '대화방 놀림', MOCK, [['change', 'propose', 'report']], MOCK_R, ['r1', 'r2'], null, { conclude: '공정한 대화방 규칙은 모두에게 같고, 지킬 수 있을 만큼이고, 사진·사생활 같은 권리를 지키고, 어겼을 때 차례가 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '공정한 대화방 규칙으로 가장 알맞은 것은?', options: ['반장만 밤에도 공지할 수 있다', '모두 밤 10시 뒤에는 알림을 보내지 않는다', '어긴 사람은 대화방에 공개한다'], answer: '모두 밤 10시 뒤에는 알림을 보내지 않는다' }] },
      }),
      M('activity.draft', {
        title: '우리 반 대화방 규칙 쓰기', method: '우리 반 대화방 규칙 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '규칙 틀("우리는 ___ 때 ___ 한다.")로 규칙 1개를 쓰고 기준 2개를 점검한다.', base: '대화방 규칙 3개를 쓰고 기준 3개(모두에게 같음·지킬 수 있음·권리 보호)를 점검한다.', challenge: '규칙 3개에 어겼을 때의 절차까지 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '우리 반 대화방 규칙 쓰기', tool: 'rubric-writing',
          teacher: '"\'예의 바르게 하기\'와 \'밤 10시 뒤에는 급하지 않은 알림을 보내지 않는다\' 가운데 지켰는지 알 수 있는 규칙은 어느 쪽일까요?" 두 규칙을 견준 뒤 모둠 규칙안을 쓰게 한다. "어긴 사람은 내보내면 된다"는 학생에게 "규칙의 목적은 내보내는 것일까요, 함께 지내는 것일까요?"라고 되묻는다. 규칙에는 실제 친구 이름이나 사례를 쓰지 않게 한다.',
          task: '가상 반 단체 대화방에 쓸 규칙을 모두에게 같고 지킬 수 있고 권리를 지키도록 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('알림 시간에 대한 대화방 규칙을 쓰세요.', { topic: '단체 대화방의 알림 시간에 대한 규칙을 1~2문장으로 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '규칙 ① 알림 시간' }, ['모두에게 같게 적용된다', '지켰는지 알 수 있다', '쉬는 시간·잠잘 권리를 지킨다']),
              { prompt: '틀에 맞춰 알림 시간 규칙을 쓰세요.', toolOptions: { starter: '우리는 ___ 때 ___ 한다.' }, target: { selfCheck: ['모두에게 같게 적용된다', '지켰는지 알 수 있다'] } }),
            IT(RW('사진·개인정보에 대한 대화방 규칙을 쓰세요.', { topic: '단체 대화방에 사진이나 개인정보를 올리는 것에 대한 규칙을 1~2문장으로 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '규칙 ② 사진·개인정보' }, ['모두에게 같게 적용된다', '지켰는지 알 수 있다', '사진·사생활 권리를 지킨다']),
              { prompt: '틀에 맞춰 사진 규칙을 쓰세요.', toolOptions: { starter: '우리는 ___ 때 ___ 한다.' }, target: { selfCheck: ['모두에게 같게 적용된다', '지켰는지 알 수 있다'] } }),
            IT(RW('말과 표현에 대한 대화방 규칙을 쓰세요.', { topic: '단체 대화방에서 쓰는 말과 웃음 표시에 대한 규칙을 1~2문장으로 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '규칙 ③ 말과 표현' }, ['모두에게 같게 적용된다', '지켰는지 알 수 있다', '놀림받지 않을 권리를 지킨다']),
              { prompt: '틀에 맞춰 말과 표현 규칙을 쓰세요.', toolOptions: { starter: '우리는 ___ 때 ___ 한다.' }, target: { selfCheck: ['모두에게 같게 적용된다', '지켰는지 알 수 있다'] } },
              { prompt: '말과 표현 규칙에, 어겼을 때의 절차까지 넣어 쓰세요.', toolOptions: { maxSentences: 3 }, target: { selfCheck: ['모두에게 같게 적용된다', '지켰는지 알 수 있다', '놀림받지 않을 권리를 지킨다', '어겼을 때의 절차를 썼다'] } },
              { conclude: '좋은 대화방 규칙은 모두에게 같고, 지켰는지 알 수 있고, 권리를 지키고, 어겼을 때 차례가 분명해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 대화방 규칙안 세 개를 써요.', columns: ['규칙', '지키는 권리'], cells: [['', ''], ['', ''], ['', '']], answer: '모둠 규칙안' }] },
      }),
      M('activity.ideas', {
        title: '탄소 줄이기 실천안 생각그물', method: '탄소 줄이기 실천안 생각그물', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(교실·급식)에 실천안 카드를 붙인다(바로 알려 준다).', base: '가지 3개(교실·급식·이동)에 실천안 카드를 붙인다.', challenge: '가지마다 두 장씩 붙이고, 효과가 없거나 지킬 수 없는 함정 카드는 남긴다.' },
        activity: {
          title: '탄소 줄이기 실천안 생각그물', tool: 'mindmap',
          teacher: '"우리 학교에서 탄소를 줄일 수 있는 곳은 교실·급식·이동 가운데 어디일까요? 세 곳 모두일 수도 있을까요?" 실천안 카드를 가지에 붙일 때마다 그 행동이 무엇을 줄이는지(전기·음식물 쓰레기·연료) 말하게 한다. "작은 실천은 효과가 없다"는 학생에게 "한 반의 빈 교실 소등이 전교 30개 반으로 늘면 어떻게 될까요?"라고 되묻는다. 지킬 수 없는 실천안(에어컨 아예 끄기)은 좋은 안이 아니라는 점을 짚는다.',
          task: '학교에서 할 수 있는 탄소 줄이기 실천안 카드를 교실·급식·이동 가지에 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('실천안 카드를 교실·급식·이동 가지에 붙이세요.', ['교실', '급식', '이동'], [
              { id: 'a1', text: '빈 교실 불·선풍기 끄기', to: '교실' }, { id: 'b1', text: '먹을 만큼 받아 잔반 줄이기', to: '급식' }, { id: 'c1', text: '가까운 거리는 걸어서 등교', to: '이동' },
              { id: 'a2', text: '냉방 온도 약속 지키기', to: '교실' }, { id: 'b2', text: '개인 물병 쓰기', to: '급식' }, { id: 'c2', text: '버스·자전거 이용하기', to: '이동' }], { topic: '학교 탄소 줄이기' }),
              SB('실천안 카드를 교실·급식 가지에 붙이세요.', ['교실', '급식'], [
                { id: 'a1', text: '빈 교실 불·선풍기 끄기', to: '교실' }, { id: 'b1', text: '먹을 만큼 받아 잔반 줄이기', to: '급식' }, { id: 'a2', text: '냉방 온도 약속 지키기', to: '교실' }, { id: 'b2', text: '개인 물병 쓰기', to: '급식' }], { topic: '학교 탄소 줄이기' }),
              SB('실천안 카드를 가지마다 두 장씩 붙이고, 함정 카드는 남기세요.', ['교실', '급식', '이동'], [
                { id: 'a1', text: '빈 교실 불·선풍기 끄기', to: '교실' }, { id: 'b1', text: '먹을 만큼 받아 잔반 줄이기', to: '급식' }, { id: 'c1', text: '가까운 거리는 걸어서 등교', to: '이동' },
                { id: 'a2', text: '냉방 온도 약속 지키기', to: '교실' }, { id: 'b2', text: '개인 물병 쓰기', to: '급식' }, { id: 'c2', text: '버스·자전거 이용하기', to: '이동' },
                { id: 'x1', text: '한여름에도 에어컨 아예 끄기' }, { id: 'x2', text: '일회용 컵을 더 많이 쓰기' }], { topic: '학교 탄소 줄이기' })),
            IT(MB('실천안마다 줄이는 것을 이으세요.', [['빈 교실 불 끄기', '전기 사용'], ['잔반 줄이기', '음식물 쓰레기'], ['걸어서 등교하기', '자동차 연료']], ['아무것도 줄지 않는다'], { topic: '무엇을 줄일까?' }),
              MB('실천안 두 개가 줄이는 것을 이으세요.', [['빈 교실 불 끄기', '전기 사용'], ['잔반 줄이기', '음식물 쓰레기']], [], { topic: '무엇을 줄일까?' })),
            IT(PB('우리 반이 한 주 동안 꾸준히 지킬 수 있는 실천안만 골라 담으세요.', '한 주 실천안', [
              { id: 'k1', text: '쉬는 시간 빈 교실 불 끄기 당번', ok: true }, { id: 'k2', text: '모두 매일 10km 걸어 등교' },
              { id: 'k3', text: '급식 먹을 만큼 받기', ok: true }, { id: 'k4', text: '한 주 동안 전기를 하나도 안 쓰기' }], { topic: '지킬 수 있는 실천' }),
              null, null, { conclude: '탄소 줄이기는 교실·급식·이동에서 모두 할 수 있어요. 작아도 꾸준히 지킬 수 있는 실천이 좋은 실천안이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반이 해 볼 탄소 줄이기 실천안 하나와 그것이 줄이는 것을 써요.' }] },
      }),
      M('activity.score', {
        title: '실천안 평가표 그래프', method: '실천안 평가표 그래프', tool: 'chart', minutes: 16,
        levels: { easy: '실천안 셋의 한 기준(효과) 점수 막대를 그린다.', base: '세 기준(효과·지속 가능성·참여 쉬움) 막대를 그리고 합계 그래프로 고른다.', challenge: '\'효과\'에 두 배 무게를 준 합계 그래프를 읽고, 무게에 따라 고른 안이 달라지는지 따진다.' },
        activity: {
          title: '실천안 평가표 그래프', tool: 'chart',
          teacher: '"\'걸어서 등교하기\'는 효과가 크지만 모두가 할 수 있을까요?" 가상 모둠이 매긴 점수 표를 기준마다 막대로 그린 뒤, 기준마다 1등이 다른지 견주게 한다. "효과가 가장 큰 안만 고르면 된다"는 학생에게 "효과는 크지만 아무도 지키지 못하면 실제 효과는 얼마일까요?"라고 되묻는다. 어떤 기준에 무게를 두느냐에 따라 고르는 안이 달라질 수 있다는 점을 짚는다.',
          task: '탄소 줄이기 실천안 셋을 효과·지속 가능성·참여 쉬움 점수(가상 모둠, 5점 만점)로 그래프를 그려 견주어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '\'효과\' 점수 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '실천안별 효과 점수(가상 모둠)', unit: '점', xLabel: '실천안', yLabel: '점수', max: 5, scale: 1, data: SCORE }, target: { build: true } }),
            IT({ prompt: '\'참여 쉬움\' 점수 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '실천안별 참여 쉬움 점수(가상 모둠)', unit: '점', xLabel: '실천안', yLabel: '점수', max: 5, scale: 1, data: [['빈 교실 불 끄기', 5], ['급식 잔반 줄이기', 4], ['걸어서 등교하기', 2]] }, target: { build: true } },
              { prompt: '\'참여 쉬움\' 점수 막대 두 개를 완성하세요.', toolOptions: { data: [['빈 교실 불 끄기', 5], ['급식 잔반 줄이기', 4]] } }),
            IT({ prompt: '세 기준을 더한 합계 그래프에서 합계가 가장 낮은 실천안을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '효과+지속 가능성+참여 쉬움 합계(가상 모둠)', unit: '점', xLabel: '실천안', yLabel: '합계', max: 15, data: [['빈 교실 불 끄기', 12], ['급식 잔반 줄이기', 12], ['걸어서 등교하기', 10]], question: '합계가 가장 낮은 실천안은?', choices: ['빈 교실 불 끄기', '급식 잔반 줄이기', '걸어서 등교하기'] }, target: { pick: 2 } },
              null,
              { prompt: '효과에 두 배 무게를 준 합계 그래프에서 가장 높은 실천안을 고르세요.', toolOptions: { title: '효과×2+지속 가능성+참여 쉬움(가상 모둠)', max: 20, data: [['빈 교실 불 끄기', 15], ['급식 잔반 줄이기', 16], ['걸어서 등교하기', 15]], question: '효과에 무게를 두면 가장 높은 실천안은?' }, target: { pick: 1 } },
              { conclude: '기준을 여럿 두고 견주면 한 기준만 볼 때보다 지킬 수 있는 좋은 실천안을 고를 수 있어요. 무게를 바꾸면 결과도 달라질 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 기준 가운데 우리 반이 가장 무게를 두어야 할 기준과 그 까닭을 써요.' }] },
        notes: '점수는 가상 모둠이 매긴 값이다. 체계도 도전의 \'가중치\'는 효과 점수를 두 배로 한 합계 그래프 읽기로 했다.',
      }),

      // ---- 정리 ----
      M('wrap.agree', {
        title: '대화방 규칙 합의 회의', method: '학급 규칙 합의 회의', tool: 'timer', minutes: 7,
        levels: { easy: '모둠 규칙안 1개에 찬성 수를 기록판에 적는다.', base: '규칙안 3개의 찬성 수를 기록판에 적고 합의한다.', challenge: '찬성 수를 적은 뒤 소수 의견을 기록했는지 점검 칸까지 표시한다.' },
        wrap: {
          teacher: '"모둠마다 낸 규칙안 가운데 세 개를 골라 우리 반이 합의해 볼게요. 손을 들어 찬성하는 규칙만 남길 거예요." 교사가 진행하며 규칙안마다 30초 설명 뒤 찬성 수를 세어 기록판에 적게 한다. "반 넘게 찬성하면 반대한 사람 의견은 필요 없다"는 학생에게 "반대 까닭 속에 규칙을 더 낫게 할 점이 있지 않을까요?"라고 되묻는다. 합의된 규칙은 대화방 공지에 올린다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '대화방 규칙 합의', timeUnit: 'min', labels: ['설명', '표결'], plan: { work: 1, rest: 1, rounds: 1 }, fields: [{ label: '규칙안1 찬성', unit: '명' }, { label: '규칙안2 찬성', unit: '명' }, { label: '규칙안3 찬성', unit: '명' }] },
              prompt: '규칙안 3개를 다루도록 설명 1분·표결 1분·3번으로 맞추고, 규칙안마다 찬성 수를 기록판에 적어요.', target: { plan: { work: 1, rest: 1, rounds: 3 }, records: true }, difficulty: 0.2 },
            { prompt: '규칙안 1개를 다루도록 설명 1분·표결 1분·1번으로 맞추고, 찬성 수를 적어요.', toolOptions: { fields: [{ label: '규칙안 찬성', unit: '명' }] }, target: { plan: { work: 1, rest: 1, rounds: 1 }, records: true } },
            { prompt: '설명 1분·표결 1분·3번으로 맞추고 찬성 수를 적은 뒤, 소수 의견 기록을 점검해요.', target: { plan: { work: 1, rest: 1, rounds: 3 }, records: true, selfCheck: ['반대 까닭을 한 줄씩 적었다', '이름 없이 의견만 적었다'] } }),
            { type: 'choice', prompt: '규칙 합의에서 소수 의견을 기록하는 까닭으로 가장 알맞은 것은?', options: ['반대한 사람을 기억하려고', '규칙을 고칠 때 참고하려고', '회의를 길게 하려고'], answer: 1, difficulty: 0.2, explain: '소수 의견 속에 규칙을 낫게 할 점이 있어요.' },
          ],
        },
        worksheet: {
          title: '우리 반 대화방 규칙 합의',
          items: [
            { type: 'table', prompt: '합의한 규칙과 찬성 수를 적어요.', columns: ['규칙', '찬성 수'], cells: [['', ''], ['', ''], ['', '']], answer: '학급 합의' },
            { type: 'short', prompt: '소수 의견 하나와 그 까닭을 적어요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 합의한 규칙은 실제 학급 대화방이 있을 때 공지하고, 없으면 게시판에 붙인다.',
      }),
      M('wrap.act', {
        title: '한 주 탄소 실천 점검', method: '한 주 탄소 실천 점검', tool: 'timer', minutes: 7,
        levels: { easy: '고른 실천안을 3일 동안 해 보기로 하고 점검 칸 3개(첫날 다짐)를 표시한다.', base: '5일 동안 해 보기로 하고 첫날 점검 칸을 표시한 뒤, 나머지 날은 활동지에 표시한다.', challenge: '5일 실천을 마친 뒤 활동지 표를 막대그래프로 옮겨 결과를 본다.' },
        wrap: {
          teacher: '"오늘 고른 실천안을 이번 주에 정말 해 볼 거예요. 첫날인 오늘 할 수 있는 것부터 점검 칸에 표시해 볼까요?" 실천할 날 수를 타이머의 \'번\' 칸으로 정한 뒤 오늘의 점검 칸을 함께 읽게 하고, 나머지 날은 활동지에 날마다 표시하게 한다. "하루 빠지면 실패"라는 학생에게 "다섯 날 가운데 네 날을 지켰다면 그것도 큰 변화 아닐까요?"라고 짚는다. 실천 기록은 채점하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '한 주 탄소 실천(번 = 실천할 날 수)', timeUnit: 'min', labels: ['실천', '쉬기'], plan: { work: 1, rest: 0, rounds: 1 } },
              prompt: '실천할 날 수를 5번으로 맞추고, 오늘 할 실천을 확인하며 점검 칸에 표시해요.', target: { plan: { rounds: 5 }, selfCheck: ['빈 교실 불 끄기 당번을 확인했다', '급식을 먹을 만큼만 받기로 했다', '활동지에 날마다 표시하기로 했다'] }, difficulty: 0.1 },
            { prompt: '실천할 날 수를 3번으로 맞추고, 오늘 할 실천을 확인하며 점검 칸에 표시해요.', target: { plan: { rounds: 3 }, selfCheck: ['빈 교실 불 끄기 당번을 확인했다', '급식을 먹을 만큼만 받기로 했다', '활동지에 날마다 표시하기로 했다'] } }),
            { type: 'choice', prompt: '"작은 실천은 효과가 없다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['맞다, 큰일만 해야 한다', '작은 실천도 여러 반이 꾸준히 하면 쌓여서 커진다', '실천은 어른만 할 수 있다'], answer: 1, difficulty: 0.2, explain: '꾸준히, 함께 하면 작은 실천도 쌓여요.' },
          ],
        },
        worksheet: {
          title: '한 주 탄소 실천 표',
          items: [
            { type: 'table', prompt: '날마다 실천했으면 ○ 해요. (걷지 않아요.)', columns: ['날', '불 끄기', '먹을 만큼 받기'], cells: [['월', '', ''], ['화', '', ''], ['수', '', ''], ['목', '', ''], ['금', '', '']], answer: '자기 기록' },
            { type: 'short', prompt: '한 주를 마치고 막대그래프로 옮겨 보면 무엇이 보일지 한 문장으로 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 교구는 첫날의 다짐 점검만 받고, 날마다의 점검은 활동지에서 한다(체계도 \'매일 스스로 점검\'을 수업 한 시간 안에서 기록할 수 없어 나눔). 도전의 \'결과 그래프\'도 활동지에서 한다.',
      }),
    );
  }

  // ==== 9학년 · 편견 없는 말과 사제동행 (auto.m.g9-rel) ====
  {
    const M = MK('g9-rel', [9]);
    const ACT = [['점심 산책', 9], ['배드민턴', 7], ['보드게임', 6], ['화단 가꾸기', 4], ['책 나눔', 3]];
    const SPOT = [
      { id: 's1', text: '"키가 작으니 농구는 못 하겠네"', to: '편견 있음' }, { id: 's2', text: '"농구 연습 같이 할래?"', to: '편견 없음' },
      { id: 's3', text: '"그 지역 사람들은 다 성격이 급해"', to: '편견 있음' }, { id: 's4', text: '"너는 어디에서 자랐는지 궁금해"', to: '편견 없음' },
      { id: 's5', text: '"남자가 무슨 꽃꽂이 동아리야"', to: '편견 있음' }, { id: 's6', text: '"꽃꽂이 동아리 재밌어 보인다"', to: '편견 없음' },
    ];
    // 사제동행 날짜 정하기
    const DATE = { text: '가상 3학년 1반이 담임 선생님과 함께하는 \'점심 산책\'을 기획한다. 기획 담당인 나는 날짜부터 정해야 한다.', ask: '날짜를 어떻게 정할까?', motif: 'sun', choices: [
      { id: 'mine', text: '내가 편한 날로 정해 공지한다', result: '그날 학원·동아리가 있는 친구들이 빠진다.', impact: [{ who: '반 친구들', text: '절반이 못 온다', tone: -1 }], why: '함께하는 활동은 참여할 사람의 사정을 먼저 들어요.', end: '내 편한 날로 정해 많이 빠졌어요.',
        next: { text: '선생님도 그날 회의가 있다고 하신다.', choices: [
          { id: 'keep', text: '선생님 없이 우리끼리 한다', result: '사제동행이 아니게 된다.', impact: [{ who: '선생님', text: '함께하지 못한다', tone: -1 }] },
          { id: 'redo', text: '선생님과 친구들에게 되는 날을 다시 묻는다', result: '되는 날을 새로 모은다.', impact: [{ who: '반 모두', text: '참여할 수 있다', tone: 1 }] }] } },
      { id: 'ask', text: '선생님께 되는 날을 여쭙고, 반 친구들에게 되는 날 설문을 한다', result: '목요일 점심이 가장 많이 된다.', impact: [{ who: '반 모두', text: '많이 참여한다', tone: 1 }], end: '되는 날을 물어 정했어요.',
        next: { text: '장소를 정해야 한다. 학교 밖 공원이 멋지지만 점심시간 안에 다녀오기 어렵다.', choices: [
          { id: 'far', text: '멋진 학교 밖 공원으로 정한다', result: '시간이 모자라 5교시에 늦을 수 있다.', impact: [{ who: '반 모두', text: '수업에 늦을 위험', tone: -1 }], why: '장소는 시간·안전 안에서 고르고, 학교 밖은 따로 허락이 필요해요.' },
          { id: 'near', text: '학교 안 운동장 둘레길로 정한다', result: '점심시간 안에 안전하게 다녀온다.', impact: [{ who: '반 모두', text: '안전하게 즐긴다', tone: 1 }], end: '시간과 안전에 맞는 장소를 골랐어요.',
            next: { text: '걷기가 불편한 친구가 한 명 있다.', choices: [
              { id: 'leave', text: '그 친구는 교실에 있으라고 한다', result: '그 친구만 빠진다.', impact: [{ who: '그 친구', text: '소외된다', tone: -1 }], why: '함께하는 활동은 모두가 참여할 방법을 찾아요.' },
              { id: 'adapt', text: '천천히 걷는 짧은 길과 쉼터를 함께 정한다', result: '모두가 함께 산책한다.', impact: [{ who: '그 친구', text: '함께한다', tone: 1 }] }] } }] } },
      { id: 'cancel', text: '날짜 맞추기가 어려우니 그만두자고 한다', result: '기획이 사라진다.', impact: [{ who: '반 모두', text: '기회를 잃는다', tone: -1 }], why: '어려우면 묻고 조정하면 돼요.', ending: '그만둬서 기회가 사라졌어요.' }] };
    const DATE_R = [{ id: 'r1', text: '함께하는 활동은 참여할 사람의 사정을 먼저 묻는다' }, { id: 'r2', text: '모두가 참여할 수 있는 방법을 함께 찾는다' },
      { id: 'r3', text: '기획한 사람이 편한 대로 정하면 된다', why: '참여할 사람의 사정을 들어야 함께할 수 있어요.' }, { id: 'r4', text: '멋진 곳이면 시간·안전은 나중 문제다', why: '시간과 안전이 먼저예요.' }];
    // 선생님께 제안하기
    const ASK = { text: '활동 계획이 정해졌다. 이제 담임 선생님께 함께해 주실 수 있는지 제안해야 한다.', ask: '어떻게 제안할까?', motif: 'flower', choices: [
      { id: 'chat', text: '쉬는 시간에 "선생님, 목요일에 산책 가요!"라고 외친다', result: '선생님이 무슨 활동인지 몰라 되묻는다.', impact: [{ who: '선생님', text: '내용을 모른다', tone: -1 }], why: '제안에는 목적과 내용이 함께 있어야 해요.', end: '내용 없이 외쳐 되물음을 받았어요.',
        next: { text: '선생님이 "목적과 계획을 정리해서 다시 말해 줄래?"라고 하신다.', choices: [
          { id: 'sulk', text: '귀찮아서 그만둔다', result: '기획이 멈춘다.', impact: [{ who: '반 친구들', text: '기다리다 실망한다', tone: -1 }] },
          { id: 'write', text: '제안 글을 짧게 정리해 다시 드린다', result: '선생님이 계획을 이해한다.', impact: [{ who: '선생님', text: '계획을 안다', tone: 1 }] }] } },
      { id: 'letter', text: '인사·목적·내용·부탁을 담은 짧은 제안 글을 드린다', result: '선생님이 계획을 읽고 반가워하신다.', impact: [{ who: '선생님', text: '계획을 이해한다', tone: 1 }], end: '정중한 제안 글을 드렸어요.',
        next: { text: '선생님이 "그날은 어렵고 다음 주 목요일은 된다"고 답하신다.', choices: [
          { id: 'upset', text: '"왜 안 돼요?"라고 따진다', result: '분위기가 어색해진다.', impact: [{ who: '선생님', text: '부담을 느낀다', tone: -1 }], why: '제안은 상대가 거절하거나 조정할 수 있다는 것을 받아들여요.' },
          { id: 'adjust', text: '감사하다고 말하고 날짜를 바꿔 다시 공지한다', result: '다음 주 목요일로 정해진다.', impact: [{ who: '반 모두', text: '함께할 수 있다', tone: 1 }], end: '조정을 받아들여 날짜를 바꿨어요.',
            next: { text: '활동을 마친 뒤 할 일이 남았다.', choices: [
              { id: 'thanks', text: '함께해 주신 선생님께 감사 인사와 소감을 전한다', result: '다음 사제동행도 함께하자는 이야기가 나온다.', impact: [{ who: '선생님', text: '고마움을 느낀다', tone: 1 }] },
              { id: 'forget', text: '끝났으니 그냥 넘어간다', result: '고마운 마음이 전해지지 않는다.', impact: [{ who: '선생님', text: '서운하다', tone: -1 }], why: '감사 인사로 활동이 마무리돼요.' }] } }] } },
      { id: 'skip', text: '선생님께는 말하지 않고 우리끼리 하기로 한다', result: '사제동행의 뜻이 사라진다.', impact: [{ who: '선생님', text: '함께할 기회를 모른다', tone: -1 }], why: '선생님께 제안하는 것은 무례한 일이 아니에요.', ending: '제안하지 않아 사제동행이 아니게 됐어요.' }] };
    const ASK_R = [{ id: 'r1', text: '제안에는 목적과 내용을 담아 정중하게 전한다' }, { id: 'r2', text: '상대가 조정하거나 거절할 수 있음을 받아들인다' },
      { id: 'r3', text: '선생님께 제안하는 것은 무례하다', why: '정중한 제안은 무례가 아니에요.' }, { id: 'r4', text: '제안은 짧게 외치면 충분하다', why: '목적과 내용이 있어야 상대가 판단할 수 있어요.' }];
    // 참여 방법 정하기
    const JOIN = { text: '보드게임 사제동행을 기획했는데, 게임을 잘하는 친구들만 모여 앉으려 한다. 처음 해 보는 친구들은 구경만 할 것 같다.', ask: '기획 담당인 나는 어떻게 할까?', motif: 'star', choices: [
      { id: 'skill', text: '잘하는 친구끼리 한 판, 못하는 친구끼리 한 판으로 나눈다', result: '처음 하는 친구들이 규칙을 몰라 금방 그만둔다.', impact: [{ who: '처음 하는 친구', text: '흥미를 잃는다', tone: -1 }], why: '실력으로 나누면 처음 하는 사람이 배울 기회가 줄어요.', end: '실력으로 나눠 처음 하는 친구들이 그만뒀어요.',
        next: { text: '선생님이 "모두 함께 즐기려면?"이라고 물으신다.', choices: [
          { id: 'same', text: '"원래 그런 거예요"라고 답한다', result: '분위기가 그대로다.', impact: [{ who: '처음 하는 친구', text: '소외된다', tone: -1 }] },
          { id: 'mixit', text: '모둠을 섞고 잘하는 친구가 규칙을 알려 주자고 한다', result: '처음 하는 친구도 함께 즐긴다.', impact: [{ who: '반 모두', text: '함께 즐긴다', tone: 1 }] }] } },
      { id: 'mix', text: '모둠을 섞고 첫 판은 규칙 익히기 판으로 하자고 한다', result: '처음 하는 친구들도 규칙을 익혀 함께한다.', impact: [{ who: '처음 하는 친구', text: '함께 즐긴다', tone: 1 }], end: '모둠을 섞어 함께 즐겼어요.',
        next: { text: '한 모둠에서 "선생님은 우리 편 해 주세요"라며 다툰다.', choices: [
          { id: 'one', text: '목소리 큰 모둠에 선생님을 모신다', result: '다른 모둠이 서운해한다.', impact: [{ who: '다른 모둠', text: '서운하다', tone: -1 }], why: '함께하는 분은 돌아가며 모셔요.' },
          { id: 'rotate', text: '판마다 선생님이 모둠을 돌아가며 함께하시게 한다', result: '모든 모둠이 선생님과 한 판씩 한다.', impact: [{ who: '반 모두', text: '공평하게 함께한다', tone: 1 }], end: '돌아가며 함께해 공평했어요.',
            next: { text: '끝날 시간이 다 되었는데 한 모둠이 판을 끝내지 못했다.', choices: [
              { id: 'over', text: '수업 시간을 넘겨서라도 끝낸다', result: '다음 수업에 늦는다.', impact: [{ who: '반 모두', text: '다음 수업에 늦는다', tone: -1 }], why: '정한 시간을 지키는 것도 약속이에요.' },
              { id: 'stop', text: '정한 시간에 멈추고 다음에 이어 하기로 한다', result: '모두 제때 정리한다.', impact: [{ who: '반 모두', text: '약속을 지킨다', tone: 1 }] }] } }] } },
      { id: 'watch', text: '처음 하는 친구들은 구경해도 괜찮다며 둔다', result: '구경하는 친구들이 지루해한다.', impact: [{ who: '처음 하는 친구', text: '소외된다', tone: -1 }], why: '함께하는 활동은 모두가 참여해야 해요.', ending: '구경만 해서 지루해했어요.' }] };
    const JOIN_R = [{ id: 'r1', text: '함께하는 활동은 처음 하는 사람도 참여할 방법을 만든다' }, { id: 'r2', text: '함께하는 분과의 시간은 모두에게 공평하게 나눈다' },
      { id: 'r3', text: '잘하는 사람끼리 해야 재미있다', why: '섞여야 배우고 함께 즐길 수 있어요.' }, { id: 'r4', text: '시간은 재미있으면 넘겨도 된다', why: '정한 시간도 약속이에요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.hear', {
        title: '들은 말에 담긴 마음', method: '들은 말에 담긴 마음 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 말 2개를 읽고 들은 사람 마음 카드를 함께 잇는다.', base: '말 3개에 들은 사람 마음 카드를 잇는다.', challenge: '말 4개에 마음 카드를 잇고, 말한 사람이 \'농담\'이라고 했을 때 들은 사람 마음이 달라지는지 말한다.' },
        intro: {
          teacher: '"\'키가 작으니 농구는 못 하겠네\'를 들은 친구의 마음은 어떨까요? 말한 사람은 농담이었다고 해요." 시연 단추로 마음 카드가 말 옆에 놓이는 모습을 보인다. "농담이면 편견 표현도 괜찮다"는 말이 나오면 "농담이라는 말이 들은 사람의 속상함을 지워 줄까요?"라고 되묻는다. 편견은 한 사람을 무리의 특징으로 묶어 판단하는 것이라는 점을 짚는다. 학생 자신이 들은 말은 묻지 않는다.',
          student: '가상 장면 속 말을 듣고, 그 말을 들은 사람의 마음 카드를 이어요. 말한 사람이 농담이라고 하면 마음이 달라질지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"키가 작으니 농구는 못 하겠네"' }, { id: 's2', label: '"농구 연습 같이 할래?"' }], cards: [{ id: 'k1', text: '속상함' }, { id: 'k2', text: '기쁨' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut school basketball court with two speech bubbles near a shorter teenager, one jagged gray bubble and one warm bright bubble, small weather signs above', banner: '농담이면 괜찮을까?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '학생에게 편견 섞인 말을 들은 경험을 묻지 않는다. 비하어는 쓰지 않는다.',
      }),
      M('intro.ideas', {
        title: '선생님과 하고 싶은 활동 투표', method: '선생님과 하고 싶은 활동 투표', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 후보 3개만 짚어 표가 가장 많은 활동을 고른다.', base: '후보 5개의 그림그래프를 읽고 사제동행 활동 후보를 고른다.', challenge: '표가 적은 활동의 까닭(장소·준비물)을 짐작해 말한다.' },
        intro: {
          teacher: '"가상 3학년 1반이 담임 선생님과 함께하고 싶은 활동을 투표했어요. 가장 많은 표를 받은 활동은 무엇일까요?" 시연 단추로 \'점심 산책\'이 골라지는 모습을 보인다. "선생님께 같이 하자고 제안하는 건 무례하다"는 말이 나오면 "정중하게 목적과 계획을 말씀드리면 어떨까요?"라고 되묻는다. 사제동행은 학생이 기획해 선생님께 제안할 수 있다는 점을 짚는다. 투표 결과는 가상이다.',
          student: '가상 반의 사제동행 활동 투표 그림그래프를 보고, 표가 많은 활동과 그 까닭을 짝과 말해요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '선생님과 하고 싶은 활동(가상 3학년 1반 투표)', unit: '표', xLabel: '활동', yLabel: '표 수', data: ACT, icons: [{ value: 5, name: '5표' }, { value: 1, name: '1표' }], icon: 'heart', question: '표가 가장 많은 활동은?', choices: ACT.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut classroom board with a picture graph of small paper hearts next to activity icons: a walking path, a badminton racket, board game pieces, a flower bed and books', banner: '선생님과 무엇을 함께할까?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '체계도의 \'그림그래프로 만든다\'는 도입 6분 안에 시연으로 보이고, 학생이 직접 그리는 것은 하지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.spot', {
        title: '편견 표현 가리기', method: '편견 표현 가리기', tool: 'sortboard', minutes: 16,
        levels: { easy: '문장 카드 4장을 \'편견 있음\'·\'편견 없음\'에 나누고, 틀리면 바로 되돌아온다.', base: '문장 카드 6장을 두 칸에 나눈다.', challenge: '편견이 있는 문장을 외모·출신 지역·성별 역할 가운데 어느 편견인지 나누는 문항까지 푼다.' },
        activity: {
          title: '편견 표현 가리기', tool: 'sortboard',
          teacher: '"\'그 지역 사람들은 다 성격이 급해\'에서 \'다\'라는 낱말은 무엇을 하고 있나요?" 카드를 놓을 때마다 한 사람을 무리로 묶어 판단하는지 따지게 한다. "칭찬처럼 들리면 편견이 아니다"는 학생에게 "\'여자니까 꼼꼼하겠다\'는 칭찬일까요, 한 사람을 무리로 묶은 말일까요?"라고 되묻는다. 편견 없는 말은 그 사람 자체에 관심을 두는 말이라는 점을 짚는다. 실제 지역 이름은 쓰지 않는다.',
          task: '가상 장면 속 문장 카드를 \'편견 있음\'과 \'편견 없음\'으로 나누고, 편견의 종류를 가려요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BB('문장 카드를 두 칸에 나누세요.', ['편견 있음', '편견 없음'], SPOT),
              BB('문장 카드 4장을 두 칸에 나누세요.', ['편견 있음', '편견 없음'], SPOT.slice(0, 4))),
            IT(BB('칭찬처럼 들리는 문장도 따져 두 칸에 나누세요.', ['편견 있음', '편견 없음'], [
              { id: 'c1', text: '"여자니까 정리를 잘하겠다"', to: '편견 있음' }, { id: 'c2', text: '"정리를 꼼꼼히 해 줘서 고마워"', to: '편견 없음' },
              { id: 'c3', text: '"키가 크니까 배구 잘하겠다"', to: '편견 있음' }, { id: 'c4', text: '"배구 서브가 정말 좋더라"', to: '편견 없음' }]),
              BB('칭찬처럼 들리는 문장 카드 2장을 두 칸에 나누세요.', ['편견 있음', '편견 없음'], [
                { id: 'c1', text: '"여자니까 정리를 잘하겠다"', to: '편견 있음' }, { id: 'c2', text: '"정리를 꼼꼼히 해 줘서 고마워"', to: '편견 없음' }])),
            IT(BB('편견이 담긴 문장을 편견의 종류 칸에 나누세요.', ['외모', '출신 지역', '성별 역할'], [
              { id: 't1', text: '"안경 쓴 애들은 다 공부만 해"', to: '외모' }, { id: 't2', text: '"시골에서 왔으면 휴대전화 잘 모르겠네"', to: '출신 지역' },
              { id: 't3', text: '"남자가 왜 울어"', to: '성별 역할' }, { id: 't4', text: '"여자는 수학을 어려워해"', to: '성별 역할' }]),
              null, null, { conclude: '편견은 한 사람을 외모·출신·성별 같은 무리로 묶어 판단하는 말이에요. 칭찬처럼 들려도 묶어 판단하면 편견이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '편견이 담긴 말에서 자주 보이는 낱말(예: \'다\', \'~니까\')을 찾아 써요.' }],
          easy: [{ type: 'choice', prompt: '편견 없는 말에 ○ 해요.', options: ['"농구 연습 같이 할래?"', '"키가 작으니 농구는 못 하겠네"'], answer: '"농구 연습 같이 할래?"' }] },
      }),
      M('activity.rewrite', {
        title: '존중하는 말로 바꿔 쓰기', method: '존중하는 말로 바꿔 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '편견 표현 1개를 틀("___ 대신 ___라고 말할게.")로 바꾸고 기준 2개를 점검한다.', base: '편견 표현 2개를 존중하는 말로 바꿔 쓰고 기준 3개를 점검한다.', challenge: '바꾼 까닭까지 쓰고 기준 4개를 점검한다.' },
        activity: {
          title: '존중하는 말로 바꿔 쓰기', tool: 'rubric-writing',
          teacher: '"\'남자가 왜 울어\'를 존중하는 말로 바꾸면 어떤 말이 될까요? 그냥 말을 안 하는 것도 방법일까요?" 무리로 묶는 낱말을 빼고 그 사람에게 관심을 두는 말로 바꾸게 한다. "농담이면 편견 표현도 괜찮다"는 학생에게 "오늘 마음 카드에서 농담을 들은 친구는 어떤 마음이었나요?"라고 되묻는다. 바꾼 말은 그 사람의 행동이나 마음을 보는 말이라는 점을 짚는다.',
          task: '가상 장면의 편견 표현을 무리로 묶지 않고 그 사람에게 관심을 두는 존중하는 말로 바꿔 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('\'남자가 왜 울어\'를 존중하는 말로 바꿔 쓰세요.', { topic: '고칠 말: "남자가 왜 울어." — 우는 친구에게 할 존중하는 말로 바꿔 쓰세요.', minChars: 10, maxChars: 150, minSentences: 1, maxSentences: 2, title: '바꿔 쓰기 ①' }, ['무리로 묶는 말을 뺐다', '그 사람의 마음이나 행동을 보았다', '듣는 사람이 상처받지 않을 말이다']),
              { prompt: '틀을 채워 \'남자가 왜 울어\'를 바꿔 쓰세요.', toolOptions: { starter: '"___" 대신 "___"라고 말할게.' }, target: { selfCheck: ['무리로 묶는 말을 뺐다', '듣는 사람이 상처받지 않을 말이다'] } },
              { prompt: '\'남자가 왜 울어\'를 바꿔 쓰고, 바꾼 까닭도 한 문장 쓰세요.', toolOptions: { maxSentences: 3 }, target: { selfCheck: ['무리로 묶는 말을 뺐다', '그 사람의 마음이나 행동을 보았다', '듣는 사람이 상처받지 않을 말이다', '바꾼 까닭을 썼다'] } }),
            IT(RW('\'시골에서 왔으면 휴대전화 잘 모르겠네\'를 존중하는 말로 바꿔 쓰세요.', { topic: '고칠 말: "시골에서 왔으면 휴대전화 잘 모르겠네." — 전학 온 친구에게 할 존중하는 말로 바꿔 쓰세요.', minChars: 10, maxChars: 150, minSentences: 1, maxSentences: 2, title: '바꿔 쓰기 ②' }, ['무리로 묶는 말을 뺐다', '그 사람의 마음이나 행동을 보았다', '듣는 사람이 상처받지 않을 말이다']),
              { prompt: '틀을 채워 \'시골에서 왔으면…\'을 바꿔 쓰세요.', toolOptions: { starter: '"___" 대신 "___"라고 말할게.' }, target: { selfCheck: ['무리로 묶는 말을 뺐다', '듣는 사람이 상처받지 않을 말이다'] } },
              { prompt: '\'시골에서 왔으면…\'을 바꿔 쓰고, 바꾼 까닭도 한 문장 쓰세요.', toolOptions: { maxSentences: 3 }, target: { selfCheck: ['무리로 묶는 말을 뺐다', '그 사람의 마음이나 행동을 보았다', '듣는 사람이 상처받지 않을 말이다', '바꾼 까닭을 썼다'] } }),
            IT(RW('\'여자는 수학을 어려워해\'를 존중하는 말로 바꿔 쓰세요.', { topic: '고칠 말: "여자는 수학을 어려워해." — 수학 문제를 묻는 친구에게 할 존중하는 말로 바꿔 쓰세요.', minChars: 10, maxChars: 150, minSentences: 1, maxSentences: 2, title: '바꿔 쓰기 ③' }, ['무리로 묶는 말을 뺐다', '그 사람의 마음이나 행동을 보았다', '듣는 사람이 상처받지 않을 말이다']),
              { prompt: '틀을 채워 \'여자는 수학을…\'을 바꿔 쓰세요.', toolOptions: { starter: '"___" 대신 "___"라고 말할게.' }, target: { selfCheck: ['무리로 묶는 말을 뺐다', '듣는 사람이 상처받지 않을 말이다'] } },
              null, { conclude: '존중하는 말은 무리로 묶는 말을 빼고, 눈앞의 그 사람이 무엇을 하고 무엇을 느끼는지에 관심을 두는 말이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 바꿔 쓴 말 가운데 하나를 골라, 실제로 써 볼 상황을 한 문장으로 써요.' }] },
      }),
      M('activity.plan', {
        title: '사제동행 활동 기획 갈림길', method: '사제동행 활동 기획 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(모두 참여·감사 인사·시간 약속)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '사제동행 활동 기획 갈림길', tool: 'dilemma',
          teacher: '"기획한 사람이 편한 날로 정한 활동과, 모두에게 물어 정한 활동은 누가 참여하게 될까요?" 날짜·장소·참여 방법 갈림길을 하나씩 끝까지 가 보게 하고, 영향 칸에서 빠지는 사람이 생기는지 읽게 한다. "선생님께 제안하는 것은 무례하다"는 학생에게 "정중한 제안 글을 받은 선생님은 어떤 마음일까요?"라고 되묻는다. 학교 밖 활동은 학교의 허락과 안전 절차가 따로 필요하다는 점을 짚는다.',
          task: '가상 반의 사제동행 활동을 기획하는 장면에서 날짜·장소·참여 방법 길을 골라 결과를 따라가고 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '사제동행 날짜를 정해요. 한 번 골라 결과를 보세요.', base: '사제동행 날짜와 장소를 정해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '사제동행 날짜·장소·참여 방법을 정해요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '점심 산책 기획', DATE, [['ask', 'near', 'adapt']], DATE_R, ['r1', 'r2']),
            DIL({ easy: '선생님께 제안해요. 한 번 골라 결과를 보세요.', base: '선생님께 제안해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '선생님께 제안해요. 세 번 골라 감사 인사까지 가고 바른 근거를 모두 고르세요.' },
              '선생님께 제안', ASK, [['letter', 'adjust', 'thanks']], ASK_R, ['r1', 'r2']),
            DIL({ easy: '보드게임 모둠을 나눠요. 한 번 골라 결과를 보세요.', base: '보드게임 모둠을 나눠요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '보드게임 모둠을 나눠요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '보드게임 참여', JOIN, [['mix', 'rotate', 'stop']], JOIN_R, ['r1', 'r2'], null, { conclude: '사제동행은 모두의 사정을 묻고, 모두가 참여할 방법을 찾고, 정중하게 제안하고, 감사로 마무리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '사제동행 날짜를 정하는 방법으로 가장 알맞은 것은?', options: ['기획한 사람이 편한 날', '선생님과 친구들에게 되는 날을 묻고 정한 날', '가장 멋진 장소가 비는 날'], answer: '선생님과 친구들에게 되는 날을 묻고 정한 날' }] },
      }),
      M('activity.letter', {
        title: '선생님께 드리는 정중한 제안 글', method: '정중한 제안 글', tool: 'story', minutes: 16,
        levels: { easy: '제안 글 말풍선 빈칸 2개(인사·부탁)에 카드를 넣는다(바로 알려 준다).', base: '빈칸 4개(인사·목적·내용·부탁)에 카드를 넣는다(함정 카드 섞임).', challenge: '맞힌 뒤에만 결과가 보이는 판에서 빈칸 4개를 채우고, 활동지에 내 말로 제안 글을 직접 쓴다.' },
        activity: {
          title: '선생님께 드리는 정중한 제안 글', tool: 'story',
          teacher: '"\'선생님, 목요일에 산책 가요!\'와 \'선생님, 안녕하세요. 반 친구들과 선생님이 함께 걸으며 이야기하는 시간을 만들고 싶어요…\' 가운데 선생님이 계획을 알 수 있는 글은 어느 쪽일까요?" 말풍선 빈칸을 채운 뒤 소리 내어 읽게 하고, 함정 카드를 넣었을 때와 견주게 한다. "정중하게 쓰면 너무 딱딱하다"는 학생에게 "정중함은 딱딱함이 아니라 상대가 판단할 수 있게 돕는 것"이라고 짚는다.',
          task: '선생님께 드리는 사제동행 제안 글 말풍선에 인사·목적·내용·부탁 카드를 넣어 정중한 제안을 완성해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('점심 산책 제안 글 말풍선 네 칸에 카드를 넣으세요.', [['(인사) "___"', '선생님, 안녕하세요.'], ['(목적) "___"', '선생님과 함께 걸으며 이야기하고 싶어요.'], ['(내용) "___"', '다음 주 목요일 점심, 운동장 둘레를 20분 걸어요.'], ['(부탁) "___"', '함께해 주실 수 있을까요?']], ['선생님, 무조건 오세요!', '안 오시면 서운할 거예요.'], { title: '점심 산책 제안' }),
              FB('점심 산책 제안 글 말풍선 두 칸(인사·부탁)에 카드를 넣으세요.', [['(인사) "___"', '선생님, 안녕하세요.'], ['(부탁) "___"', '함께해 주실 수 있을까요?']], [], { title: '점심 산책 제안' })),
            IT(FB('보드게임 제안 글 말풍선 네 칸에 카드를 넣으세요.', [['(인사) "___"', '선생님, 잠시 시간 괜찮으세요?'], ['(목적) "___"', '반이 함께 웃는 시간을 만들고 싶어요.'], ['(내용) "___"', '금요일 창체 시간 20분, 모둠 보드게임을 해요.'], ['(부탁) "___"', '모둠을 돌며 함께해 주시면 좋겠어요.']], ['그냥 와서 보시기만 해요.', '이미 다 정했어요.'], { title: '보드게임 제안' }),
              FB('보드게임 제안 글 말풍선 두 칸(인사·부탁)에 카드를 넣으세요.', [['(인사) "___"', '선생님, 잠시 시간 괜찮으세요?'], ['(부탁) "___"', '모둠을 돌며 함께해 주시면 좋겠어요.']], [], { title: '보드게임 제안' })),
            IT(PB('정중한 제안 글에 들어갈 문장만 골라 담으세요.', '제안 글 문장', [
              { id: 'p1', text: '"어려우시면 다른 날로 바꿀 수 있어요."', ok: true }, { id: 'p2', text: '"안 해 주시면 다 같이 실망할 거예요."' },
              { id: 'p3', text: '"준비와 정리는 저희가 맡을게요."', ok: true }, { id: 'p4', text: '"선생님은 그냥 오시기만 하면 돼요."' }], { title: '제안 글 고르기' }),
              null, null, { conclude: '정중한 제안 글은 인사·목적·내용·부탁을 담고, 상대가 조정할 수 있게 여지를 남겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '선생님께 드리는 사제동행 제안 글을 인사·목적·내용·부탁이 들어가게 내 말로 써요.' }] },
        notes: '체계도 도전의 \'직접 쓰기\'는 말풍선 교구가 글을 받지 못해 활동지에서 한다.',
      }),

      // ---- 정리 ----
      M('wrap.do', {
        title: '사제동행 활동 실행 점검', method: '사제동행 활동 실행', tool: 'timer', minutes: 7,
        levels: { easy: '활동 시간 15분으로 타이머를 맞추고 시작 전 점검과 다녀온 뒤 점검 칸 2개를 표시한다.', base: '활동 시간 30분으로 맞추고 점검 칸 3개를 표시한다.', challenge: '30분으로 맞추고 점검한 뒤, 활동지에 소감을 기록한다.' },
        wrap: {
          teacher: '"오늘 점심에 선생님과 함께할 활동이에요. 출발 전에 약속부터 확인할까요?" 교사와 함께 정한 시간에 활동을 하고, 이 시간에는 시작 전 확인과 다녀온 뒤 점검을 채운다. "선생님과 하는 활동이면 선생님이 다 챙겨 주신다"는 학생에게 "기획한 우리가 맡기로 한 준비와 정리는 누가 할까요?"라고 되묻는다. 소감은 발표시키지 않고 활동지에만 쓰게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '사제동행 활동', timeUnit: 'min', labels: ['활동', '정리'], plan: { work: 10, rest: 0, rounds: 1 }, safety: ['정한 장소 안에서만 한다', '정한 시간에 돌아온다', '준비와 정리를 맡은 사람이 있다'] },
              prompt: '활동 30분으로 타이머를 맞추고, 시작 전 약속을 표시한 뒤, 다녀와서 점검 칸에 표시해요.', target: { plan: { work: 30 }, safety: true, selfCheck: ['모두가 참여할 수 있었다', '선생님께 감사 인사를 했다', '정리까지 마쳤다'] }, difficulty: 0.2 },
            { prompt: '활동 15분으로 맞추고, 시작 전 약속을 표시한 뒤, 다녀와서 점검 칸 두 개에 표시해요.', target: { plan: { work: 15 }, safety: true, selfCheck: ['모두가 참여할 수 있었다', '선생님께 감사 인사를 했다'] } }),
            { type: 'choice', prompt: '사제동행 활동을 마무리하는 방법으로 가장 알맞은 것은?', options: ['끝나면 바로 흩어진다', '정리를 마치고 함께해 주신 선생님께 감사 인사를 한다', '다음 활동을 선생님께 정해 달라고 한다'], answer: 1, difficulty: 0.15, explain: '정리와 감사 인사로 활동이 마무리돼요.' },
          ],
        },
        worksheet: {
          title: '사제동행 활동 돌아보기',
          items: [
            { type: 'short', prompt: '선생님과 함께한 활동에서 기억에 남는 장면 하나를 써요. (걷지 않아요.)' },
            { type: 'check', prompt: '활동에서 지킨 것에 표시해요.', options: ['정한 시간', '정한 장소', '준비와 정리', '감사 인사'] },
          ],
        },
        notes: '교사 진행 모듈이다. 체계도의 \'15분·30분 활동\'은 7분 정리 시간 안에 할 수 없어, 실제 활동은 점심시간 등 따로 정한 시간에 교사와 함께 하고 이 모듈은 확인과 점검을 맡는다.',
      }),
      M('wrap.circle', {
        title: '존중의 말 나눔 원', method: '존중의 말 나눔 원', tool: 'timer', minutes: 7,
        levels: { easy: '한 사람 10초로 타이머를 맞추고 원을 한 바퀴 돌며 존중의 말을 건넨다(바퀴 수는 교사 진행).', base: '10초로 맞추고 두 바퀴 돌며 존중의 말을 건넨 뒤 점검 칸 2개를 표시한다.', challenge: '두 바퀴 돌며 둘째 바퀴에는 그 친구가 한 행동을 구체적으로 칭찬하고 점검 칸 3개를 표시한다.' },
        wrap: {
          teacher: '"둥글게 앉아 오른쪽 친구에게 존중하는 말 한마디씩 건넬 거예요. 외모나 성별 말고, 그 친구가 한 일이나 마음을 보는 말로요." 교사가 진행하며 한 사람 10초씩 돌아가게 하고, 말하기 어려운 학생은 \'고마워\' 한마디도 괜찮다고 알려 준다. "칭찬이면 무엇이든 괜찮다"는 학생에게 "\'키가 커서 멋있다\'와 \'모둠 정리를 도와줘서 고마웠어\' 가운데 그 사람을 보는 말은 어느 쪽일까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '존중의 말 나눔 원', labels: ['말하기', '넘기기'], plan: { work: 5, rest: 5, rounds: 1 }, workStep: 1, restStep: 1 },
              prompt: '한 사람 10초 말하기·넘기기 0초로 맞추고 원을 돈 뒤, 점검 칸에 표시해요.', target: { plan: { work: 10, rest: 0 }, selfCheck: ['외모·성별이 아니라 행동이나 마음을 짚었다', '친구의 말을 끝까지 들었다'] }, difficulty: 0.1 },
            null,
            { prompt: '10초 말하기로 맞추고 두 바퀴를 돈 뒤, 구체적으로 칭찬했는지 점검 칸에 표시해요.', target: { plan: { work: 10, rest: 0 }, selfCheck: ['외모·성별이 아니라 행동이나 마음을 짚었다', '친구의 말을 끝까지 들었다', '그 친구가 한 행동을 구체적으로 칭찬했다'] } }),
            { type: 'choice', prompt: '존중의 말로 가장 알맞은 것은?', options: ['"너는 키가 커서 멋있어"', '"모둠 정리를 먼저 도와줘서 고마웠어"', '"남자답게 잘했어"'], answer: 1, difficulty: 0.2, explain: '그 사람이 한 행동과 마음을 보는 말이 존중의 말이에요.' },
          ],
        },
        worksheet: {
          title: '존중의 말',
          items: [
            { type: 'short', prompt: '오늘 들은 존중의 말 가운데 기억에 남는 것을 적어요. (걷지 않아요.)' },
            { type: 'short', prompt: '다음에 건네고 싶은 존중의 말 하나를 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 말하기를 어려워하는 학생은 넘길 수 있게 한다. 바퀴 수는 타이머가 아니라 교사 진행으로 정한다.',
      }),
    );
  }

  // ==== 9학년 · 학생회 선거와 졸업 주간 자치 행사 (auto.m.g9-self) ====
  {
    const M = MK('g9-self', [9]);
    const WISH = [['반별 장기 자랑', 35], ['추억 사진전', 30], ['선생님께 편지 쓰기', 20], ['운동장 놀이 한마당', 15]];
    const PRIN = [['투표용지를 친구가 대신 내 줬다 → ___', '직접 선거'], ['3학년은 두 표, 1학년은 한 표씩 준다 → ___', '평등 선거'], ['누구를 찍었는지 손을 들어 보여 준다 → ___', '비밀 선거'], ['동아리 회원만 투표할 수 있다 → ___', '보통 선거']];
    const STEPS = [{ id: 'e1', text: '선거관리위원회 꾸리기' }, { id: 'e2', text: '선거 공고하기' }, { id: 'e3', text: '후보 등록 받기' }, { id: 'e4', text: '선거 운동 기간' }, { id: 'e5', text: '투표하기' }, { id: 'e6', text: '개표하고 당선 공고' }];
    // 실현 못 할 공약
    const P1 = { text: '가상 학교 학생회장 후보 하준의 공약: "당선되면 급식에 매일 치킨이 나오게 하겠습니다!" 친구들이 크게 환호한다.', ask: '유권자인 나는 어떻게 할까?', motif: 'star', choices: [
      { id: 'cheer', text: '재미있으니 그 공약만 보고 찍기로 한다', result: '당선 뒤 공약이 지켜지지 않아 실망이 커진다.', impact: [{ who: '전교생', text: '학생회를 믿지 못한다', tone: -1 }], why: '실현 못 할 공약은 크게 걸수록 실망도 커져요.', end: '재미만 보고 골라 실망이 컸어요.',
        next: { text: '다음 선거에서도 비슷한 공약이 나온다.', choices: [
          { id: 'again', text: '또 재미로 고른다', result: '같은 실망이 되풀이된다.', impact: [{ who: '전교생', text: '선거에 무관심해진다', tone: -1 }] },
          { id: 'check', text: '공약을 따져 볼 질문을 먼저 정한다', result: '권한·예산·실현 방법을 묻기로 한다.', impact: [{ who: '전교생', text: '따져 고른다', tone: 1 }] }] } },
      { id: 'power', text: '학생회가 급식 메뉴를 정할 권한이 있는지부터 따져 본다', result: '메뉴는 학생회가 아니라 학교가 정한다는 것을 안다.', impact: [{ who: '나', text: '공약의 한계를 안다', tone: 1 }], end: '권한부터 따져 봤어요.',
        next: { text: '후보 토론회에서 질문할 기회가 생겼다.', choices: [
          { id: 'mock', text: '"그거 거짓말이잖아요"라고 몰아세운다', result: '토론회 분위기가 험악해진다.', impact: [{ who: '후보', text: '답할 기회 없이 비난받는다', tone: -1 }], why: '공약 검토는 사람을 몰아세우는 것이 아니라 근거를 묻는 것이에요.' },
          { id: 'ask', text: '"학생회 권한으로 어떻게 이룰 건가요?"라고 묻는다', result: '후보가 \'급식 메뉴 설문을 모아 학교에 건의하겠다\'로 공약을 고친다.', impact: [{ who: '전교생', text: '지킬 수 있는 공약을 듣는다', tone: 1 }], end: '정중하게 근거를 물었어요.',
            next: { text: '투표 날, 친구가 "같이 하준 찍자"고 한다.', choices: [
              { id: 'own', text: '공약을 견주어 내 판단으로 고르고 누구를 찍었는지 말하지 않는다', result: '비밀 선거 원칙을 지킨다.', impact: [{ who: '나', text: '스스로 고른다', tone: 1 }] },
              { id: 'follow', text: '친구 따라 같은 후보를 찍고 인증 사진을 보낸다', result: '비밀 선거 원칙이 깨진다.', impact: [{ who: '선거', text: '공정성이 흔들린다', tone: -1 }], why: '투표는 스스로 판단하고 누구를 찍었는지 드러내지 않아요.' }] } }] } },
      { id: 'ignore', text: '어차피 다 거짓말이니 투표하지 않기로 한다', result: '공약을 따져 보는 사람이 줄어든다.', impact: [{ who: '전교생', text: '대표를 고를 힘이 약해진다', tone: -1 }], why: '실망스러울수록 공약을 따져 보고 투표해요.', ending: '투표를 포기해 따져 볼 기회도 잃었어요.' }] };
    const P1_R = [{ id: 'r1', text: '공약은 학생회 권한 안에서 이룰 수 있어야 한다' }, { id: 'r2', text: '공약 검토는 사람을 몰아세우지 않고 근거를 묻는 것이다' },
      { id: 'r3', text: '실현 못 해도 공약은 크게 걸수록 좋다', why: '지키지 못한 공약은 믿음을 잃게 해요.' }, { id: 'r4', text: '친구들이 찍는 후보가 좋은 후보다', why: '투표는 내 판단으로 해요.' }];
    // 예산이 필요한 공약
    const P2 = { text: '후보 서윤의 공약: "모든 교실에 새 공기청정기를 놓겠습니다." 학생회 한 해 활동비보다 훨씬 많은 돈이 든다.', ask: '공약 검토 모둠인 우리는 어떻게 할까?', motif: 'star', choices: [
      { id: 'like', text: '좋은 공약이니 그대로 지지한다', result: '당선 뒤 예산이 없어 시작도 못 한다.', impact: [{ who: '전교생', text: '실망한다', tone: -1 }], why: '예산을 따지지 않은 공약은 좋은 뜻이어도 이룰 수 없어요.', end: '예산을 따지지 않아 시작도 못 했어요.',
        next: { text: '서윤이 "학교가 사 주겠죠"라고 한다.', choices: [
          { id: 'trust', text: '그 말을 믿는다', result: '근거 없이 기대만 커진다.', impact: [{ who: '전교생', text: '기대가 깨진다', tone: -1 }] },
          { id: 'cost', text: '드는 돈과 쓸 수 있는 돈을 견주어 보자고 한다', result: '예산 검토를 시작한다.', impact: [{ who: '전교생', text: '현실을 안다', tone: 1 }] }] } },
      { id: 'budget', text: '드는 돈과 학생회 활동비를 견주어 본다', result: '전 교실은 어렵고, 학교에 건의할 일이라는 것을 안다.', impact: [{ who: '전교생', text: '공약의 크기를 안다', tone: 1 }], end: '예산을 견주어 봤어요.',
        next: { text: '모둠이 공약 평가표를 만들려 한다.', choices: [
          { id: 'like2', text: '\'마음에 드는지\' 한 기준만 둔다', result: '후보마다 좋고 싫음만 남는다.', impact: [{ who: '유권자', text: '견주기 어렵다', tone: -1 }], why: '공약은 실현 가능성·권한·예산으로 따져요.' },
          { id: 'criteria', text: '실현 가능성·권한·예산 세 기준으로 평가표를 만든다', result: '후보 공약을 같은 잣대로 견줄 수 있다.', impact: [{ who: '유권자', text: '근거 있게 고른다', tone: 1 }], end: '세 기준으로 평가표를 만들었어요.',
            next: { text: '평가표를 공개하려는데 한 후보에게만 불리해 보인다.', choices: [
              { id: 'same', text: '모든 후보를 같은 기준으로 평가해 함께 공개한다', result: '평가표가 공정하다는 믿음을 얻는다.', impact: [{ who: '후보들', text: '공평하게 평가받는다', tone: 1 }] },
              { id: 'hide', text: '그 후보 칸만 빼고 공개한다', result: '평가표가 편파적이라는 말을 듣는다.', impact: [{ who: '선거', text: '공정성이 흔들린다', tone: -1 }], why: '모든 후보에게 같은 기준을 써야 공정해요.' }] } }] } },
      { id: 'mockp', text: '"돈도 없으면서"라며 서윤을 놀린다', result: '토론 대신 놀림만 남는다.', impact: [{ who: '서윤', text: '상처받는다', tone: -1 }], why: '공약을 따지는 것과 후보를 놀리는 것은 달라요.', ending: '놀림으로 끝나 공약을 따지지 못했어요.' }] };
    const P2_R = [{ id: 'r1', text: '공약은 드는 돈과 쓸 수 있는 돈을 견주어 따진다' }, { id: 'r2', text: '모든 후보를 같은 기준으로 평가해야 공정하다' },
      { id: 'r3', text: '좋은 뜻이면 예산은 상관없다', why: '예산이 없으면 이룰 수 없어요.' }, { id: 'r4', text: '마음에 드는 공약이 좋은 공약이다', why: '좋고 싫음이 아니라 근거로 따져요.' }];
    // 지킬 수 있는 작은 공약
    const P3 = { text: '후보 다온의 공약: "한 달에 한 번 학생 의견함을 열어 학교에 전하고, 결과를 게시판에 붙이겠습니다." 친구들은 "너무 시시하다"고 한다.', ask: '나는 어떻게 할까?', motif: 'star', choices: [
      { id: 'boring', text: '시시하니 관심 두지 않는다', result: '지킬 수 있는 공약이 묻혀 버린다.', impact: [{ who: '다온', text: '공약이 알려지지 않는다', tone: -1 }], why: '공약은 크기보다 지킬 수 있는지가 중요해요.', end: '시시하다며 넘겼어요.',
        next: { text: '당선된 후보의 큰 공약이 하나도 지켜지지 않았다.', choices: [
          { id: 'regret', text: '"다 똑같다"며 선거를 탓한다', result: '다음 선거에도 관심이 줄어든다.', impact: [{ who: '전교생', text: '무관심해진다', tone: -1 }] },
          { id: 'learn', text: '다음엔 지킬 수 있는지로 따져 보자고 한다', result: '공약을 보는 기준이 바뀐다.', impact: [{ who: '전교생', text: '따져 고른다', tone: 1 }] }] } },
      { id: 'eval', text: '작아도 학생회 권한 안에서 지킬 수 있는 공약인지 따져 본다', result: '권한·예산·방법이 모두 분명하다는 것을 안다.', impact: [{ who: '유권자', text: '근거 있게 판단한다', tone: 1 }], end: '지킬 수 있는지 따져 봤어요.',
        next: { text: '다온에게 공약을 어떻게 확인할 수 있는지 묻고 싶다.', choices: [
          { id: 'none2', text: '굳이 묻지 않는다', result: '당선 뒤 지켰는지 알기 어렵다.', impact: [{ who: '유권자', text: '확인할 길이 없다', tone: -1 }], why: '공약은 지켰는지 확인할 방법까지 있어야 해요.' },
          { id: 'howcheck', text: '"지켰는지 우리가 어떻게 알 수 있나요?"라고 묻는다', result: '다온이 \'매달 게시판에 결과를 붙인다\'고 답한다.', impact: [{ who: '유권자', text: '확인할 방법을 안다', tone: 1 }], end: '확인 방법까지 물었어요.',
            next: { text: '선거가 끝나고, 당선된 사람이 누구든 공약을 지키는지 지켜볼 차례다.', choices: [
              { id: 'watch', text: '게시판의 공약 이행 결과를 확인하고 학급 회의에서 이야기한다', result: '학생회가 공약을 더 꼼꼼히 챙긴다.', impact: [{ who: '전교생', text: '자치에 참여한다', tone: 1 }] },
              { id: 'forget', text: '선거가 끝났으니 잊는다', result: '공약이 흐지부지된다.', impact: [{ who: '전교생', text: '목소리를 잃는다', tone: -1 }], why: '투표 뒤에도 지켜보는 것이 자치예요.' }] } }] } },
      { id: 'mockd', text: '대화방에 다온 공약을 비웃는 글을 올린다', result: '공약 대신 놀림이 퍼진다.', impact: [{ who: '다온', text: '상처받는다', tone: -1 }], why: '후보를 비웃는 것은 공약 검토가 아니에요.', ending: '비웃는 글로 공약 검토가 사라졌어요.' }] };
    const P3_R = [{ id: 'r1', text: '공약은 크기보다 지킬 수 있는지가 중요하다' }, { id: 'r2', text: '투표 뒤에도 공약 이행을 지켜보는 것이 자치다' },
      { id: 'r3', text: '작은 공약은 시시하니 볼 필요가 없다', why: '작아도 지킬 수 있는 공약이 변화를 만들어요.' }, { id: 'r4', text: '선거가 끝나면 학생이 할 일은 없다', why: '지켜보고 의견을 내는 것도 자치예요.' }];
    const ITEMS = [{ id: 'mic', text: '무선 마이크 대여', price: 30000 }, { id: 'print', text: '사진전 인화', price: 40000 }, { id: 'paper', text: '편지지·봉투', price: 15000 },
      { id: 'snack', text: '모두 나눌 간식', price: 50000 }, { id: 'cap', text: '자막 띄울 화면 대여', price: 20000 }, { id: 'balloon', text: '풍선 장식', price: 25000 }, { id: 'trophy', text: '큰 트로피', price: 60000 }];

    ALL.push(
      // ---- 도입 ----
      M('intro.principle', {
        title: '선거 장면에서 어긴 원칙', method: '선거 장면에서 어긴 원칙 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 장면 2개(대신 투표·손들어 보이기)에 원칙 카드를 넣어 보인다.', base: '장면 4개에 어긴 원칙 카드가 들어가는 모습을 보고 원칙의 뜻을 말한다.', challenge: '원칙을 어기면 누구의 어떤 권리가 다치는지 까닭을 말한다.' },
        intro: {
          teacher: '"친구가 내 투표용지를 대신 내 줬다면, 선거의 어떤 원칙을 어긴 걸까요?" 시연 단추로 장면마다 원칙 카드가 들어가는 모습을 보인다. "학생회 선거는 그냥 인기투표"라는 말이 나오면 "한 사람이 두 표를 가지면 그 결과를 모두가 받아들일까요?"라고 되묻는다. 오늘은 학생 자치 수준의 선거 원칙과 공약 따져 보기를 익힌다고 밝힌다. 실제 정당이나 정치인 이야기는 하지 않는다.',
          student: '가상 학생회 선거 장면마다 어긴 선거 원칙(보통·평등·직접·비밀) 카드가 들어가는 것을 보고, 원칙의 뜻을 생각해요.',
          demo: { tool: 'wordcards', options: FB('', PRIN, []).toolOptions, sequence: [{ at: { w1: 0, w3: 2 } }, { at: { w1: 0, w2: 1, w3: 2, w4: 3 } }] },
          art: { draw: 'a paper-cut school election corner with a ballot box behind a privacy screen, four paper cards labeled with small icons of a person, an equal sign, a hand and a lock', banner: '어떤 원칙을 어겼을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '선거는 학생회 수준으로만 다룬다. 실제 정당·정치인·선거를 언급하거나 평가하지 않는다.',
      }),
      M('intro.survey', {
        title: '졸업 행사 희망 조사 그래프', method: '졸업 행사 희망 조사 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대로 바꿔 보이며 가장 많은 의견을 짚는다.', base: '원그래프에서 가장 큰 조각과 비율을 고른다.', challenge: '가장 작은 조각(소수 의견)도 행사에 담을 방법을 말한다.' },
        intro: {
          teacher: '"가상 3학년 졸업 주간 행사 희망 조사예요. 원그래프에서 가장 큰 조각은 무엇이고 몇 %일까요?" 시연 단추로 \'반별 장기 자랑\'이 골라지는 모습을 보인다. "가장 많은 의견만 하면 된다"는 말이 나오면 "15%의 친구들이 원한 \'운동장 놀이\'를 짧게라도 담을 방법은 없을까요?"라고 되묻는다. 모두가 함께하는 행사는 소수 의견도 살핀다는 점을 짚는다. 자료는 가상이다.',
          student: '가상 졸업 행사 희망 조사 원그래프에서 가장 많은 의견과 가장 적은 의견을 찾고, 둘 다 담을 방법을 생각해요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '졸업 주간 행사 희망(가상 3학년 조사)', unit: '%', data: WISH, question: '가장 큰 조각은?', choices: WISH.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut school auditorium decorated for graduation week with a paper pie chart on a stand and small icons of a stage, photo frames, letters and a field', banner: '졸업 주간에 무엇을 할까?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.steps', {
        title: '학생회 선거 관리 절차', method: '선거 관리 절차 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '선거 단계 카드 4장(후보 등록·선거 운동·투표·개표 공고)을 차례로 놓는다(바로 알려 준다).', base: '선거 단계 카드 6장을 차례로 놓는다.', challenge: '단계마다 선거관리위원회가 할 일 카드를 잇는다.' },
        activity: {
          title: '학생회 선거 관리 절차', tool: 'timeline',
          teacher: '"후보 등록을 받기 전에 \'언제, 어떻게 뽑는다\'를 알리지 않으면 무엇이 문제일까요?" 단계 카드를 놓은 뒤, 단계마다 선거관리위원회가 하는 일을 짚는다. "선거 관리는 선생님이 다 하신다"는 학생에게 "학생 선거관리위원회가 맡으면 무엇이 달라질까요?"라고 되묻는다. 공정한 절차가 있어야 결과를 모두가 받아들인다는 점을 짚는다. 절차는 가상 학교 학생회 규정의 예시다.',
          task: '가상 학교 학생회 선거 단계 카드를 차례로 놓고, 단계마다 선거관리위원회가 할 일을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('학생회 선거 단계 카드를 차례대로 놓으세요.', STEPS, { axis: ['처음', '끝'] }),
              OB('학생회 선거 단계 카드 네 장을 차례대로 놓으세요.', pickCards(STEPS, ['e3', 'e4', 'e5', 'e6']), { axis: ['처음', '끝'] })),
            IT({ prompt: '선거 단계마다 선거관리위원회가 할 일 카드를 이으세요.', toolOptions: { mode: 'match', axis: ['처음', '끝'], slots: [{ id: 't1', label: '선거 공고' }, { id: 't2', label: '선거 운동' }, { id: 't3', label: '투표' }, { id: 't4', label: '개표' }], cards: [
              { id: 'k1', text: '날짜·자격·방법을 알린다' }, { id: 'k2', text: '모든 후보에게 같은 홍보 자리를 준다' },
              { id: 'k3', text: '기표소 가림막을 세운다' }, { id: 'k4', text: '참관인 앞에서 표를 센다' }, { id: 'k5', text: '친한 후보를 도와준다' }] }, target: { match: { t1: 'k1', t2: 'k2', t3: 'k3', t4: 'k4' } } },
              { prompt: '세 단계에 선거관리위원회가 할 일 카드를 이으세요.', toolOptions: { slots: [{ id: 't1', label: '선거 공고' }, { id: 't3', label: '투표' }, { id: 't4', label: '개표' }], cards: [{ id: 'k1', text: '날짜·자격·방법을 알린다' }, { id: 'k3', text: '기표소 가림막을 세운다' }, { id: 'k4', text: '참관인 앞에서 표를 센다' }] }, target: { match: { t1: 'k1', t3: 'k3', t4: 'k4' } } }),
            IT(OB('투표 날 선거관리위원회가 하는 일을 차례대로 놓으세요.', [{ id: 'v1', text: '빈 투표함 확인하고 봉하기' }, { id: 'v2', text: '명부로 투표할 사람 확인' }, { id: 'v3', text: '가림막 안에서 투표하기' }, { id: 'v4', text: '투표함 옮겨 개표하기' }], { axis: ['처음', '끝'] }, [{ id: 'v5', text: '누구 찍었는지 물어보기' }]),
              null, null, { conclude: '공고→등록→운동→투표→개표·공고 차례를 공정하게 지켜야 결과를 모두가 받아들여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 단계를 써요.', text: '선거 공고 → 후보 등록 → ___ → 투표 → 개표·당선 공고', answer: '선거 운동' }] },
      }),
      M('activity.pledge', {
        title: '공약 따져 보기 갈림길', method: '공약 따져 보기 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(투표·평가표 공개·이행 지켜보기)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '공약 따져 보기 갈림길', tool: 'dilemma',
          teacher: '"\'매일 치킨\' 공약과 \'한 달에 한 번 의견함\' 공약, 당선 뒤 지켜질 공약은 어느 쪽일까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 하고, 실현 가능성·권한·예산 세 기준을 칠판에 적는다. "실현 못 해도 공약은 크게 걸수록 좋다"는 학생에게 "지켜지지 않은 큰 공약을 본 유권자는 다음 선거를 어떻게 볼까요?"라고 되묻는다. 공약 검토는 후보를 놀리는 것이 아니라 근거를 묻는 것이라는 점을 짚는다. 공약은 모두 가상 학교 학생회 공약이다.',
          task: '가상 학생회 선거 공약을 실현 가능성·권한·예산으로 따져 보는 장면에서 길을 골라 결과를 따라가고 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '\'매일 치킨\' 공약이 나왔어요. 한 번 골라 결과를 보세요.', base: '\'매일 치킨\' 공약이 나왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '\'매일 치킨\' 공약이 나왔어요. 세 번 골라 투표까지 가고 바른 근거를 모두 고르세요.' },
              '실현 못 할 공약', P1, [['power', 'ask', 'own']], P1_R, ['r1', 'r2']),
            DIL({ easy: '예산이 큰 공약이 나왔어요. 한 번 골라 결과를 보세요.', base: '예산이 큰 공약이 나왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '예산이 큰 공약이 나왔어요. 세 번 골라 평가표 공개까지 가고 바른 근거를 모두 고르세요.' },
              '예산이 큰 공약', P2, [['budget', 'criteria', 'same']], P2_R, ['r1', 'r2']),
            DIL({ easy: '작고 시시해 보이는 공약이 있어요. 한 번 골라 결과를 보세요.', base: '작고 시시해 보이는 공약이 있어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '작고 시시해 보이는 공약이 있어요. 세 번 골라 이행 지켜보기까지 가고 바른 근거를 모두 고르세요.' },
              '작지만 지킬 수 있는 공약', P3, [['eval', 'howcheck', 'watch']], P3_R, ['r1', 'r2'], null, { conclude: '공약은 크기가 아니라 실현 가능성·권한·예산과 확인 방법으로 따지고, 투표 뒤에도 지켜봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 공약 하나를 세 기준으로 따져 봐요.', columns: ['기준', '따져 본 점'], cells: [['실현 가능성', ''], ['학생회 권한', ''], ['예산', '']], answer: '(예) 의견함 공약 — 할 수 있음, 학생회가 맡을 수 있음, 돈이 거의 안 듦' }] },
        notes: '공약 예시는 학교생활(급식·의견함·교실 물품)로만 한다. 실제 정치·사회 쟁점과 잇지 않는다.',
      }),
      M('activity.budget', {
        title: '졸업 행사 예산 짜기', method: '행사 예산 짜기', tool: 'economy', minutes: 16,
        levels: { easy: '물품 3개 가운데 예산 막대를 넘지 않게 고른다.', base: '물품 5개 가운데 꼭 필요한 것을 넣고 예산 안에서 고른다.', challenge: '물품 7개 가운데 모두가 참여할 수 있게 하는 물품(자막 화면)을 반드시 넣고, 예산 안에서 고른다.' },
        activity: {
          title: '졸업 행사 예산 짜기', tool: 'economy',
          teacher: '"예산이 정해져 있으면 무엇부터 넣어야 할까요? 멋진 트로피일까요, 모두가 볼 수 있는 자막 화면일까요?" 물품을 고르며 예산 막대가 어떻게 차는지 보게 하고, 넘으면 무엇을 뺄지 모둠이 이야기하게 한다. "남는 돈 없이 다 쓰는 게 잘 짠 예산"이라는 학생에게 "뜻밖의 일이 생기면 어디서 돈을 마련할까요?"라고 되묻는다. 모두가 참여할 수 있게 하는 비용은 맨 먼저 챙긴다는 점을 짚는다. 값과 예산은 모두 가상이다.',
          task: '가상 3학년 학생회의 졸업 행사 예산 안에서, 꼭 필요한 물품과 모두가 참여하게 하는 물품을 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '예산 10만 원 안에서, 편지 쓰기에 꼭 필요한 편지지·봉투를 넣고 행사 물품을 고르세요.', toolOptions: { mode: 'budget', budget: 100000, ask: '예산 10만 원(가상)', items: ITEMS.slice(0, 5) }, target: { budget: { must: ['paper'], min: 60000 } } },
              { prompt: '예산 10만 원 안에서 물품 세 가지 가운데 편지지·봉투를 꼭 넣어 고르세요.', toolOptions: { items: ITEMS.slice(0, 3) }, target: { budget: { must: ['paper'], min: 45000 } } },
              { prompt: '예산 10만 원 안에서 편지지·봉투와 자막 화면을 꼭 넣고, 큰 트로피는 빼고 고르세요.', toolOptions: { items: ITEMS }, target: { budget: { must: ['paper', 'cap'], not: ['trophy'], min: 65000 } } }),
            IT({ prompt: '예산 8만 원 안에서 사진전 인화를 넣고 물품을 두 가지만 고르세요.', toolOptions: { mode: 'budget', budget: 80000, ask: '예산 8만 원(가상)', items: ITEMS.slice(0, 5) }, target: { budget: { must: ['print'], count: 2 } } },
              { prompt: '예산 8만 원 안에서 사진전 인화를 넣고 두 가지를 고르세요(물품 3개).', toolOptions: { items: ITEMS.slice(0, 3) }, target: { budget: { must: ['print'], count: 2 } } },
              { prompt: '예산 8만 원 안에서 사진전 인화와 자막 화면을 넣고 두 가지만 고르세요.', toolOptions: { items: ITEMS }, target: { budget: { must: ['print', 'cap'], count: 2 } } }),
            IT({ prompt: '예산 12만 원 안에서 간식을 넣되 2만 원 넘게 남겨 비상금을 두고 고르세요.', toolOptions: { mode: 'budget', budget: 120000, ask: '예산 12만 원(가상)', items: ITEMS.slice(0, 5) }, target: { budget: { must: ['snack'], max: 100000 } } },
              { prompt: '예산 12만 원 안에서 간식을 넣고 2만 원 넘게 남기세요(물품 3개+간식).', toolOptions: { items: [ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3]] }, target: { budget: { must: ['snack'], max: 100000 } } },
              null, { conclude: '예산은 꼭 필요한 것과 모두가 참여하게 하는 것부터 넣고, 뜻밖의 일을 위해 조금 남겨 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠이 고른 물품과 남긴 돈, 그렇게 고른 까닭을 써요.' }] },
        notes: '체계도 도전의 \'모두 참여 조건\'은 자막 화면(must)을 반드시 넣는 조건으로 했다.',
      }),
      M('activity.plan', {
        title: '졸업 주간 행사 기획서', method: '행사 기획서 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '기획서 틀로 3요소(의견 수렴·역할·예산)를 쓰고 기준 3개를 점검한다.', base: '5요소(의견 수렴·역할·예산·안전·평가)를 갖춘 기획서를 쓰고 기준 5개를 점검한다.', challenge: '모두가 참여할 수 있게 하는 접근성 계획까지 넣어 쓰고 기준 6개를 점검한다.' },
        activity: {
          title: '졸업 주간 행사 기획서', tool: 'rubric-writing',
          teacher: '"우리가 하고 싶은 행사와 3학년 모두가 함께할 수 있는 행사는 같을까요?" 의견 수렴·역할·예산·안전·평가 다섯 칸을 함께 읽고 가상 학년 행사 기획서를 쓰게 한다. "행사는 재미만 있으면 된다"는 학생에게 "휠체어를 쓰는 친구, 큰 소리가 힘든 친구도 같은 자리에서 즐길 수 있을까요?"라고 되묻는다. 기획서에는 친구 이름 대신 역할 이름을 쓰게 한다.',
          task: '가상 3학년 졸업 주간 자치 행사 기획서를 의견 수렴·역할·예산·안전·평가가 드러나게 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('\'반별 장기 자랑\' 졸업 주간 행사 기획서를 쓰세요.', { topic: '가상 3학년의 \'반별 장기 자랑\' 행사 기획서를 의견 수렴·역할·예산·안전·평가가 드러나게 쓰세요.', minChars: 60, maxChars: 400, minSentences: 4, maxSentences: 8, title: '행사 기획서', placeholder: '의견 수렴: … / 역할: …' }, ['의견을 어떻게 모았는지 썼다', '역할을 나눠 썼다', '예산을 썼다', '안전 약속을 썼다', '평가 방법을 썼다']),
              { prompt: '기획서 틀로 의견 수렴·역할·예산 세 요소를 쓰세요.', toolOptions: { minChars: 30, minSentences: 3, starter: '의견 수렴: ___. 역할: ___. 예산: ___.' }, target: { selfCheck: ['의견을 어떻게 모았는지 썼다', '역할을 나눠 썼다', '예산을 썼다'] } },
              { prompt: '다섯 요소에 접근성 계획까지 넣어 장기 자랑 기획서를 쓰세요.', toolOptions: { maxSentences: 9 }, target: { selfCheck: ['의견을 어떻게 모았는지 썼다', '역할을 나눠 썼다', '예산을 썼다', '안전 약속을 썼다', '평가 방법을 썼다', '모두가 참여할 수 있게 하는 방법을 썼다'] } }),
            IT(RW('기획서의 \'안전\' 칸만 구체적으로 다시 쓰세요.', { topic: '고칠 안전 칸: "조심한다." — 강당에서 여는 장기 자랑의 안전 약속이 드러나게 다시 쓰세요.', minChars: 20, maxChars: 200, minSentences: 2, maxSentences: 4, title: '안전 칸 고쳐 쓰기' }, ['무대 오르내리는 길을 썼다', '전선·장비 정리를 썼다', '비상시 나가는 길을 썼다']),
              { prompt: '틀에 맞춰 안전 칸을 다시 쓰세요.', toolOptions: { starter: '무대는 ___으로 오르내리고, 전선은 ___.', minSentences: 1 }, target: { selfCheck: ['무대 오르내리는 길을 썼다', '전선·장비 정리를 썼다'] } }),
            IT(RW('기획서의 \'평가\' 칸을 행사 뒤 설문으로 쓰세요.', { topic: '행사가 끝난 뒤 3학년에게 물을 평가 설문 문항 두 개와 그 결과를 어떻게 쓸지 쓰세요.', minChars: 20, maxChars: 200, minSentences: 2, maxSentences: 4, title: '평가 칸 쓰기' }, ['공정한 문항으로 썼다', '한 문항에 한 가지만 물었다', '결과를 다음 행사에 어떻게 쓸지 썼다']),
              { prompt: '틀에 맞춰 평가 설문 문항 하나를 쓰세요.', toolOptions: { starter: '행사 뒤 "___에 대해 어떻게 생각하나요?"라고 묻는다.', minSentences: 1 }, target: { selfCheck: ['공정한 문항으로 썼다', '한 문항에 한 가지만 물었다'] } },
              null, { conclude: '좋은 행사 기획서는 의견을 모은 과정·역할·예산·안전·평가를 담고, 모두가 참여할 방법까지 챙겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 행사 기획서를 다섯 칸으로 써요.', columns: ['요소', '내용'], cells: [['의견 수렴', ''], ['역할', ''], ['예산', ''], ['안전', ''], ['평가', '']], answer: '모둠 기획' }] },
      }),

      // ---- 정리 ----
      M('wrap.vote', {
        title: '모의 투표와 개표', method: '모의 투표와 개표', tool: 'timer', minutes: 7,
        levels: { easy: '모의 투표 차례 카드(확인→가림막 투표→투표함 넣기)만 놓고 투표한다.', base: '투표와 개표 차례 카드 5장을 놓고 개표까지 한다.', challenge: '개표 뒤 결과 공고까지 차례 카드 6장을 놓고 절차 점검표를 표시한다.' },
        wrap: {
          teacher: '"오늘은 가상 후보 세 명의 공약으로 모의 투표를 해 볼게요. 투표용지는 가림막 뒤에서 쓰고, 누구를 찍었는지 말하지 않아요." 교사가 진행하며 선거관리위원 역할 학생이 명부 확인·개표를 맡게 한다. "모의 투표니까 대충 해도 된다"는 학생에게 "모의 투표에서 원칙을 지켜 보는 것이 진짜 선거의 연습이에요"라고 짚는다. 후보는 가상 인물이며 반 친구 이름을 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '모의 투표와 개표', cards: ['참관인 앞에서 표 세기', '명부로 투표할 사람 확인', '가림막 뒤에서 투표', '투표함에 넣기', '빈 투표함 확인하고 봉하기'], safety: ['누구를 찍었는지 말하지 않았다', '한 사람이 한 표만 냈다', '가림막 뒤에서 혼자 썼다'] },
              prompt: '모의 투표·개표 차례 카드를 놓고, 투표를 마친 뒤 절차 점검표를 표시해요.', target: { order: ['빈 투표함 확인하고 봉하기', '명부로 투표할 사람 확인', '가림막 뒤에서 투표', '투표함에 넣기', '참관인 앞에서 표 세기'], safety: true }, difficulty: 0.2 },
            { prompt: '모의 투표 차례 카드 세 장을 놓고, 투표를 마친 뒤 점검표를 표시해요.', toolOptions: { cards: ['투표함에 넣기', '명부로 투표할 사람 확인', '가림막 뒤에서 투표'] }, target: { order: ['명부로 투표할 사람 확인', '가림막 뒤에서 투표', '투표함에 넣기'], safety: true } },
            { prompt: '결과 공고까지 차례 카드 여섯 장을 놓고, 점검표를 표시해요.', toolOptions: { cards: ['참관인 앞에서 표 세기', '결과 공고하기', '명부로 투표할 사람 확인', '가림막 뒤에서 투표', '투표함에 넣기', '빈 투표함 확인하고 봉하기'] }, target: { order: ['빈 투표함 확인하고 봉하기', '명부로 투표할 사람 확인', '가림막 뒤에서 투표', '투표함에 넣기', '참관인 앞에서 표 세기', '결과 공고하기'], safety: true } }),
            { type: 'choice', prompt: '개표를 참관인 앞에서 하는 까닭으로 가장 알맞은 것은?', options: ['빨리 끝내려고', '표를 공정하게 셌다는 것을 모두가 믿게 하려고', '후보를 놀라게 하려고'], answer: 1, difficulty: 0.2, explain: '여럿이 지켜보면 결과를 믿을 수 있어요.' },
          ],
        },
        worksheet: {
          title: '모의 투표 결과 공고',
          items: [
            { type: 'table', prompt: '가상 후보별 표 수를 적어요.', columns: ['후보', '표 수'], cells: [['1번', ''], ['2번', ''], ['3번', '']], answer: '모의 투표 결과' },
            { type: 'short', prompt: '결과 공고문 첫 문장을 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 후보와 공약은 가상이며 반 친구를 후보로 세우지 않는다.',
      }),
      M('wrap.run', {
        title: '학년 자치 행사 진행 점검', method: '학년 자치 행사 진행', tool: 'timer', minutes: 7,
        levels: { easy: '행사 1부만 진행하도록 시간을 맞추고 안전 점검을 표시한다.', base: '행사 전체(1부·2부) 시간을 맞추고 안전 점검과 역할 기록판을 채운다.', challenge: '진행 뒤 평가 설문을 했는지 점검 칸까지 표시한다.' },
        wrap: {
          teacher: '"오늘 졸업 주간 행사를 시작하기 전에, 안전 담당은 점검표를 소리 내어 읽어 주세요." 교사 지원 아래 정한 시간에 행사를 진행하고, 이 시간에는 시작 전 점검과 진행 기록을 채운다. "행사는 재미있으면 기록은 필요 없다"는 학생에게 "내년 3학년은 무엇을 보고 행사를 준비할까요?"라고 되묻는다. 역할 기록은 이름 대신 역할로 적는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '학년 자치 행사', timeUnit: 'min', labels: ['1·2부', '쉬는 때'], plan: { work: 10, rest: 0, rounds: 1 }, safety: ['무대 오르내리는 길이 비어 있다', '전선을 테이프로 붙였다', '비상구를 막지 않았다', '쉼터 자리를 마련했다'], fields: [{ label: '참여한 반', unit: '반' }, { label: '진행 역할 수', unit: '명' }] },
              prompt: '1부 20분·쉬는 때 5분·2번으로 맞추고, 안전 점검을 표시하고, 기록판을 채워요.', target: { plan: { work: 20, rest: 5, rounds: 2 }, safety: true, records: true }, difficulty: 0.2 },
            { prompt: '1부만 20분으로 맞추고 안전 점검을 표시해요.', toolOptions: { fields: [] }, target: { plan: { work: 20, rounds: 1 }, safety: true } },
            { prompt: '20분·5분·2번으로 맞추고 점검·기록을 채운 뒤, 평가 설문을 했는지 표시해요.', target: { plan: { work: 20, rest: 5, rounds: 2 }, safety: true, records: true, selfCheck: ['행사 뒤 평가 설문을 했다', '설문 결과를 내년 3학년에게 남기기로 했다'] } }),
            { type: 'choice', prompt: '자치 행사를 마친 뒤 가장 먼저 할 일로 알맞은 것은?', options: ['바로 흩어진다', '정리하고 평가 설문으로 잘된 점·고칠 점을 모은다', '사진만 올린다'], answer: 1, difficulty: 0.15, explain: '평가가 다음 행사를 더 낫게 해요.' },
          ],
        },
        worksheet: {
          title: '학년 자치 행사 기록',
          items: [
            { type: 'table', prompt: '행사 진행을 기록해요(이름 대신 역할).', columns: ['역할', '한 일'], cells: [['사회', ''], ['안전', ''], ['기록', '']], answer: '행사 기록' },
            { type: 'short', prompt: '내년 3학년에게 남길 행사 팁 한 가지를 써요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 실제 행사는 졸업 주간에 따로 정한 시간에 하고, 이 7분에는 시작 전 점검과 진행 기록을 맡는다(체계도의 \'1부·전체 진행\'을 정리 시간 안에서 할 수 없어 나눔).',
      }),
    );
  }

  // ==== 9학년 · 탐구 질문 좁히기와 발표 (auto.m.g9-topic) ====
  {
    const M = MK('g9-topic', [9]);
    const ISSUE = [['청소년 수면', 12], ['일회용품 쓰레기', 9], ['통학길 안전', 7], ['급식 잔반', 5], ['동네 공원 이용', 3]];
    // 날카로운 질문을 받았을 때
    const QA1 = { text: '가상 모둠의 \'우리 학교 일회용 컵 사용\' 발표가 끝나자, 다른 모둠 학생이 "30명만 조사했는데 전교생이라고 해도 돼요?"라고 묻는다.', ask: '발표자인 나는 어떻게 답할까?', motif: 'star', choices: [
      { id: 'defend', text: '"다들 비슷하니까 괜찮아요"라고 넘긴다', result: '질문한 학생이 고개를 갸웃한다.', impact: [{ who: '듣는 사람', text: '결론을 믿기 어렵다', tone: -1 }], why: '질문은 탐구를 더 단단하게 할 기회예요. 넘기면 믿음을 잃어요.', end: '질문을 넘겨 믿음을 잃었어요.',
        next: { text: '선생님이 "질문에 다시 답해 볼까?"라고 하신다.', choices: [
          { id: 'annoy', text: '"왜 저한테만 그래요"라고 한다', result: '분위기가 굳는다.', impact: [{ who: '모둠', text: '평가가 낮아진다', tone: -1 }] },
          { id: 'admit', text: '"좋은 질문이에요, 30명에 대한 결과로 고칠게요"라고 답한다', result: '결론이 더 정확해진다.', impact: [{ who: '모둠', text: '믿음을 얻는다', tone: 1 }] }] } },
      { id: 'thank', text: '"좋은 질문 고마워요"라고 먼저 말하고 한계를 인정한다', result: '질문한 학생이 고개를 끄덕인다.', impact: [{ who: '질문한 학생', text: '존중받는다', tone: 1 }], end: '고맙다고 하고 한계를 인정했어요.',
        next: { text: '질문한 학생이 "그럼 어떻게 하면 전교생을 알 수 있어요?"라고 다시 묻는다.', choices: [
          { id: 'dunno', text: '"모르겠어요"라고만 답한다', result: '대화가 끊긴다.', impact: [{ who: '듣는 사람', text: '아쉽다', tone: -1 }], why: '모르면 다음에 해 볼 방법을 함께 말할 수 있어요.' },
          { id: 'next', text: '"학년마다 몇 반씩 더 조사하면 알 수 있을 것 같아요"라고 다음 방법을 말한다', result: '듣는 사람들이 다음 탐구를 기대한다.', impact: [{ who: '모둠', text: '탐구가 이어진다', tone: 1 }], end: '다음 탐구 방법을 말했어요.',
            next: { text: '질의응답 시간이 끝나 가는데 질문하려는 손이 두 개 더 있다.', choices: [
              { id: 'one', text: '시간 지킴이에게 묻고 한 질문만 더 받은 뒤, 나머지는 쉬는 시간에 답하겠다고 한다', result: '시간을 지키면서 질문도 존중한다.', impact: [{ who: '질문한 학생들', text: '존중받는다', tone: 1 }] },
              { id: 'cut', text: '시간이 없다며 손을 무시한다', result: '질문하려던 학생들이 서운해한다.', impact: [{ who: '질문한 학생들', text: '무시당했다고 느낀다', tone: -1 }], why: '시간이 없으면 다른 방법으로 답할 약속을 해요.' }] } }] } },
      { id: 'attack', text: '"그쪽 모둠은 몇 명 조사했는데요?"라고 되받아친다', result: '질의응답이 말싸움이 된다.', impact: [{ who: '두 모둠', text: '서로 감정이 상한다', tone: -1 }], why: '질문에는 질문한 사람이 아니라 질문 내용에 답해요.', ending: '되받아쳐 말싸움이 됐어요.' }] };
    const QA1_R = [{ id: 'r1', text: '질문은 탐구를 단단하게 하는 기회다' }, { id: 'r2', text: '한계를 인정하고 다음 방법을 말하면 믿음을 얻는다' },
      { id: 'r3', text: '질문을 받으면 진 것이다', why: '질문은 공격이 아니라 관심이에요.' }, { id: 'r4', text: '날카로운 질문에는 똑같이 되받아친다', why: '질문 내용에 답해야 해요.' }];
    // 질문하는 쪽 태도
    const QA2 = { text: '다른 모둠의 \'통학길 안전\' 발표를 들었다. 그래프의 단위가 빠져 헷갈린다.', ask: '듣는 사람인 나는 어떻게 할까?', motif: 'star', choices: [
      { id: 'laugh', text: '옆 친구에게 "저거 틀렸다"고 속삭이며 웃는다', result: '발표자가 웃음소리를 듣고 위축된다.', impact: [{ who: '발표자', text: '위축된다', tone: -1 }], why: '궁금한 점은 질의응답 시간에 정중하게 물어요.', end: '속삭이며 웃어 발표자가 위축됐어요.',
        next: { text: '질의응답 시간이 되었다.', choices: [
          { id: 'mockq', text: '"그래프도 못 그려요?"라고 묻는다', result: '발표자가 얼굴이 빨개진다.', impact: [{ who: '발표자', text: '창피하다', tone: -1 }] },
          { id: 'politeq', text: '"그래프 세로축 단위가 무엇인지 알려 줄 수 있어요?"라고 묻는다', result: '발표자가 단위를 알려 주고 고마워한다.', impact: [{ who: '발표자', text: '고칠 점을 안다', tone: 1 }] }] } },
      { id: 'note', text: '궁금한 점을 적어 두었다가 질의응답 시간에 정중하게 묻는다', result: '발표자가 단위를 알려 주고 고마워한다.', impact: [{ who: '발표자', text: '존중받는다', tone: 1 }], end: '적어 두었다가 정중하게 물었어요.',
        next: { text: '답을 들었는데 또 다른 궁금증이 생겼다.', choices: [
          { id: 'many', text: '질문을 다섯 개 연달아 한다', result: '다른 학생이 질문할 시간이 없어진다.', impact: [{ who: '다른 학생', text: '질문 기회를 잃는다', tone: -1 }], why: '질문 시간은 함께 나눠 써요.' },
          { id: 'onemore', text: '한 가지만 더 묻고 다른 사람에게 차례를 넘긴다', result: '여러 사람이 질문을 나눈다.', impact: [{ who: '다른 학생', text: '질문할 수 있다', tone: 1 }], end: '차례를 나눠 질문했어요.',
            next: { text: '동료 평가 시간이다. 그 모둠 발표에 아쉬운 점이 있었다.', choices: [
              { id: 'harsh', text: '"별로였음"이라고만 쓴다', result: '무엇을 고칠지 알 수 없다.', impact: [{ who: '발표 모둠', text: '고칠 점을 모른다', tone: -1 }], why: '평가는 근거와 고칠 방법을 함께 써요.' },
              { id: 'useful', text: '좋은 점 하나와 고칠 점 하나를 기준에 맞춰 쓴다', result: '발표 모둠이 다음 발표를 고칠 수 있다.', impact: [{ who: '발표 모둠', text: '도움을 받는다', tone: 1 }] }] } }] } },
      { id: 'silent', text: '헷갈리지만 아무것도 묻지 않는다', result: '발표자는 고칠 점을 모른 채 끝낸다.', impact: [{ who: '발표자', text: '고칠 기회를 놓친다', tone: -1 }], why: '정중한 질문은 발표자를 돕는 일이에요.', ending: '묻지 않아 고칠 기회가 사라졌어요.' }] };
    const QA2_R = [{ id: 'r1', text: '정중한 질문은 발표자를 돕는 일이다' }, { id: 'r2', text: '질문 시간과 차례는 함께 나눠 쓴다' },
      { id: 'r3', text: '틀린 점은 비웃어야 고친다', why: '비웃음은 고칠 힘을 빼앗아요.' }, { id: 'r4', text: '궁금해도 묻지 않는 것이 예의다', why: '정중하게 묻는 것이 예의예요.' }];
    // 답을 모르는 질문
    const QA3 = { text: '가상 모둠의 \'청소년 수면\' 발표 뒤 "잠을 오래 자면 성적도 오르나요?"라는 질문이 나왔다. 조사하지 않은 내용이다.', ask: '발표자인 나는 어떻게 답할까?', motif: 'moon', choices: [
      { id: 'guessa', text: '"네, 당연히 올라요"라고 짐작으로 답한다', result: '근거 없는 말이 사실처럼 퍼진다.', impact: [{ who: '듣는 사람', text: '잘못 안다', tone: -1 }], why: '조사하지 않은 것은 짐작으로 답하지 않아요.', end: '짐작으로 답해 근거 없는 말이 퍼졌어요.',
        next: { text: '다른 학생이 "그건 어디서 나온 말이에요?"라고 묻는다.', choices: [
          { id: 'insist', text: '"제 생각엔 맞아요"라고 버틴다', result: '발표 전체의 믿음이 흔들린다.', impact: [{ who: '모둠', text: '믿음을 잃는다', tone: -1 }] },
          { id: 'correct', text: '"조사하지 않은 내용이라 정정할게요"라고 말한다', result: '정직하다는 평가를 받는다.', impact: [{ who: '모둠', text: '믿음을 되찾는다', tone: 1 }] }] } },
      { id: 'honest', text: '"그건 이번에 조사하지 않아 알 수 없어요"라고 솔직히 답한다', result: '질문한 학생이 고개를 끄덕인다.', impact: [{ who: '듣는 사람', text: '정확히 안다', tone: 1 }], end: '조사 범위를 솔직히 말했어요.',
        next: { text: '질문한 학생이 아쉬워한다.', choices: [
          { id: 'end', text: '그냥 다음 질문으로 넘어간다', result: '좋은 질문이 그대로 사라진다.', impact: [{ who: '질문한 학생', text: '아쉽다', tone: -1 }], why: '답 못 한 질문은 다음 탐구 질문이 될 수 있어요.' },
          { id: 'future', text: '"다음 탐구 질문으로 적어 둘게요"라고 말하고 적는다', result: '질문이 다음 탐구로 이어진다.', impact: [{ who: '질문한 학생', text: '존중받는다', tone: 1 }], end: '다음 탐구 질문으로 적었어요.',
            next: { text: '발표가 끝나고 모둠원 하나가 "모른다고 해서 창피했다"고 한다.', choices: [
              { id: 'shame', text: '"다음엔 아무 말이나 하자"고 한다', result: '짐작으로 답하는 습관이 생긴다.', impact: [{ who: '모둠', text: '정직함을 잃는다', tone: -1 }], why: '모른다고 말하는 것은 정직한 태도예요.' },
              { id: 'proud', text: '"정직하게 답해서 오히려 믿음을 얻었어"라고 말한다', result: '모둠이 다음 발표 준비에 자신감을 얻는다.', impact: [{ who: '모둠', text: '자신감을 얻는다', tone: 1 }] }] } }] } },
      { id: 'dodge', text: '못 들은 척 다음 질문을 받는다', result: '질문한 학생이 무시당했다고 느낀다.', impact: [{ who: '질문한 학생', text: '서운하다', tone: -1 }], why: '모르는 질문도 존중해 답해요.', ending: '못 들은 척해 질문한 학생이 서운했어요.' }] };
    const QA3_R = [{ id: 'r1', text: '조사하지 않은 것은 모른다고 솔직히 답한다' }, { id: 'r2', text: '답 못 한 질문은 다음 탐구 질문이 된다' },
      { id: 'r3', text: '모른다고 하면 발표를 망친다', why: '짐작으로 답할 때 믿음을 잃어요.' }, { id: 'r4', text: '그럴듯하면 짐작으로 답해도 된다', why: '근거 없는 말은 사실처럼 퍼져요.' }];
    const SCENES = [{ id: 'n1', text: '탐구 질문 소개', motif: 'star' }, { id: 'n2', text: '조사 방법 설명', motif: 'leaf' }, { id: 'n3', text: '결과 그래프 보이기', motif: 'sun' }, { id: 'n4', text: '결론과 한계 말하기', motif: 'house' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.big', {
        title: '사회 문제 관심 투표', method: '사회 문제 관심 투표', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 후보 3개 막대만 짚어 가장 많은 표를 고른다.', base: '후보 5개 막대를 읽고 모둠이 탐구할 문제를 고른다.', challenge: '고른 문제가 왜 탐구할 만한지 까닭을 한 문장으로 말한다.' },
        intro: {
          teacher: '"가상 3학년 반이 관심 있는 사회 문제를 투표했어요. 표가 가장 많은 것은 무엇일까요?" 시연 단추로 \'청소년 수면\' 막대가 골라지는 모습을 보인다. "청소년 수면은 너무 넓어서 무엇을 조사할지 모르겠다"는 말이 나오면 "누구의, 어디서, 언제의 수면을 볼지 정하면 어떻게 될까요?"라고 되묻는다. 오늘은 넓은 문제를 탐구할 수 있는 질문으로 좁히고 발표까지 구성한다고 밝힌다. 투표 결과는 가상이다.',
          student: '가상 반의 사회 문제 관심 투표 그래프를 보고 모둠이 탐구할 문제를 고르고, 그 문제가 왜 넓은지 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '탐구하고 싶은 사회 문제(가상 3학년 투표)', unit: '표', xLabel: '문제', yLabel: '표 수', data: ISSUE, question: '표가 가장 많은 문제는?', choices: ISSUE.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut classroom board with a bar chart of topic cards: a moon for sleep, a paper cup, a crosswalk, a food tray and a park bench', banner: '어떤 문제를 탐구할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '후보 문제는 학교·생활 가까이의 중립적인 주제로만 고른다. 정치적으로 다투는 쟁점은 넣지 않는다.',
      }),
      M('intro.talk', {
        title: '좋은 발표·아쉬운 발표 장면', method: '좋은 발표·아쉬운 발표 장면', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 발표 장면 2개를 읽고 듣는 사람 마음 카드를 함께 잇는다.', base: '발표 장면 3개에 듣는 사람 마음 카드를 잇는다.', challenge: '마음 카드를 이은 뒤 장면마다 그런 마음이 든 까닭을 말한다.' },
        intro: {
          teacher: '"발표자가 화면 글을 그대로 읽기만 할 때와 질문으로 시작해 그래프를 짚어 줄 때, 듣는 사람의 마음은 어떻게 다를까요?" 시연 단추로 마음 카드가 장면 옆에 놓이는 모습을 보인다. "발표는 말을 잘하는 사람만 잘한다"는 말이 나오면 "차례가 잘 짜인 발표는 말솜씨가 없어도 잘 들리지 않을까요?"라고 되묻는다. 좋은 발표의 비결은 말솜씨보다 구성에 있다는 점을 짚는다.',
          student: '가상 발표 장면을 듣고, 듣는 사람의 마음 카드를 이어요. 좋은 발표와 아쉬운 발표가 무엇이 다른지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '발표자가 화면 글을 5분 동안 그대로 읽는다' }, { id: 's2', label: '발표자가 질문으로 시작해 그래프를 짚어 준다' }], cards: [{ id: 'k1', text: '지루함' }, { id: 'k2', text: '신남' }] }, sequence: [{ at: { k1: 0 } }, { at: { k1: 0, k2: 1 } }] },
          art: { draw: 'a paper-cut classroom presentation with a student pointing at a paper bar chart and an audience of paper students, some yawning and some leaning forward', banner: '듣는 사람은 어떤 마음일까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.funnel', {
        title: '질문 깔때기로 좁히기', method: '질문 깔때기로 좁히기', tool: 'mindmap', minutes: 16,
        levels: { easy: '대상 가지 하나에 알맞은 카드를 붙인다(바로 알려 준다).', base: '대상·장소·기간 세 가지에 카드를 하나씩 붙여 질문을 좁힌다(함정 카드 섞임).', challenge: '좁히기 전과 뒤 질문 가운데 탐구할 수 있는 질문만 고르는 문항까지 푼다.' },
        activity: {
          title: '질문 깔때기로 좁히기', tool: 'mindmap',
          teacher: '"\'청소년 수면\'에서 \'누구의\'를 정하면 질문이 어떻게 바뀔까요? \'어디서\', \'언제\'까지 정하면요?" 깔때기 가지마다 카드를 붙이며 질문이 좁아지는 모습을 함께 읽는다. "질문이 넓을수록 좋은 탐구"라는 학생에게 "\'전 세계 청소년 수면\'을 한 달 동안 우리가 조사할 수 있을까요?"라고 되묻는다. 좁힌 질문은 우리가 직접 자료를 모을 수 있는 질문이라는 점을 짚는다.',
          task: '넓은 사회 문제를 대상·장소·기간 가지에 카드를 붙여 탐구할 수 있는 질문으로 좁혀요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('\'청소년 수면\'을 대상·장소·기간 가지에 카드를 하나씩 붙여 좁히세요.', ['대상', '장소', '기간'], [
              { id: 'a1', text: '우리 학교 3학년', to: '대상' }, { id: 'b1', text: '우리 학교', to: '장소' }, { id: 'c1', text: '시험 전 두 주', to: '기간' },
              { id: 'x1', text: '전 세계 모든 사람' }, { id: 'x2', text: '지구 전체' }], { topic: '청소년 수면' }),
              SB('\'청소년 수면\'의 대상 가지에 알맞은 카드를 붙이세요.', ['대상'], [
                { id: 'a1', text: '우리 학교 3학년', to: '대상' }, { id: 'x1', text: '전 세계 모든 사람' }], { topic: '청소년 수면' })),
            IT(SB('\'일회용품 쓰레기\'를 대상·장소·기간 가지에 카드를 하나씩 붙여 좁히세요.', ['대상', '장소', '기간'], [
              { id: 'd1', text: '매점에서 쓰는 일회용 컵', to: '대상' }, { id: 'e1', text: '우리 학교 매점 앞', to: '장소' }, { id: 'f1', text: '11월 한 달', to: '기간' },
              { id: 'x3', text: '모든 나라의 쓰레기' }, { id: 'x4', text: '앞으로 100년' }], { topic: '일회용품 쓰레기' }),
              SB('\'일회용품 쓰레기\'의 대상 가지에 알맞은 카드를 붙이세요.', ['대상'], [
                { id: 'd1', text: '매점에서 쓰는 일회용 컵', to: '대상' }, { id: 'x3', text: '모든 나라의 쓰레기' }], { topic: '일회용품 쓰레기' })),
            IT(PB('직접 자료를 모아 답할 수 있는 탐구 질문만 골라 담으세요.', '탐구할 질문', [
              { id: 'q1', text: '시험 전 두 주 우리 학교 3학년의 잠드는 시각은?', ok: true }, { id: 'q2', text: '세상 모든 청소년은 왜 잠이 부족할까?' },
              { id: 'q3', text: '11월 한 달 매점 앞 일회용 컵은 하루 몇 개 버려질까?', ok: true }, { id: 'q4', text: '지구의 쓰레기를 모두 없애려면?' }], { topic: '좁힌 질문 고르기' }),
              null, null, { conclude: '넓은 문제는 대상·장소·기간을 정하면 우리가 직접 조사할 수 있는 탐구 질문이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '\'통학길 안전\'을 대상·장소·기간으로 좁혀 써요.', columns: ['칸', '정한 것'], cells: [['대상', ''], ['장소', ''], ['기간', '']], answer: '(예) 우리 학교 학생, 정문 앞 횡단보도, 등교 시간 일주일' }] },
      }),
      M('activity.write', {
        title: '좁힌 탐구 질문 쓰기', method: '좁힌 탐구 질문 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '틀("___ 동안 ___의 ___은(는) 어떨까?")을 채워 질문 1개를 쓰고 기준 2개를 점검한다.', base: '좁힌 질문 1개를 쓰고 기준 4개(대상·장소·기간·조사 가능)를 점검한다.', challenge: '같은 문제로 좁힌 질문 2개를 쓰고 더 좋은 쪽을 고른 까닭까지 쓴 뒤 기준 4개를 점검한다.' },
        activity: {
          title: '좁힌 탐구 질문 쓰기', tool: 'rubric-writing',
          teacher: '"\'일회용품이 환경에 나쁠까?\'에 대상·장소·기간을 넣으면 어떤 질문이 될까요?" 한 질문을 함께 좁혀 본 뒤 모둠 문제로 질문을 쓰고 기준표를 하나씩 표시하게 한다. "기간까지 정하면 너무 좁아서 재미없다"는 학생에게 "기간이 없으면 언제까지 조사할지 어떻게 정할까요?"라고 되묻는다. 좁힌 질문이 곧 조사 계획의 첫 줄이라는 점을 짚는다.',
          task: '넓은 사회 문제를 대상·장소·기간이 드러나고 직접 조사할 수 있는 탐구 질문으로 좁혀 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('\'통학길 안전\'을 좁힌 탐구 질문으로 쓰세요.', { topic: '넓은 문제 \'통학길 안전\'을 대상·장소·기간이 드러나는 탐구 질문 한 문장으로 좁혀 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '좁힌 질문 ①', placeholder: '예: …동안 …의 …은 어떨까?' }, ['대상을 정했다', '장소를 정했다', '기간을 정했다', '직접 조사할 수 있다']),
              { prompt: '틀을 채워 \'통학길 안전\' 질문을 쓰세요.', toolOptions: { starter: '___ 동안 ___의 ___은(는) 어떨까?' }, target: { selfCheck: ['대상을 정했다', '기간을 정했다'] } },
              { prompt: '\'통학길 안전\'으로 좁힌 질문 두 개를 쓰고, 더 좋은 쪽과 까닭을 쓰세요.', toolOptions: { maxSentences: 4, minSentences: 3 }, target: { selfCheck: ['대상을 정했다', '장소를 정했다', '기간을 정했다', '더 좋은 질문을 고른 까닭을 썼다'] } }),
            IT(RW('\'급식 잔반\'을 좁힌 탐구 질문으로 쓰세요.', { topic: '넓은 문제 \'급식 잔반\'을 대상·장소·기간이 드러나는 탐구 질문 한 문장으로 좁혀 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '좁힌 질문 ②', placeholder: '예: …동안 …의 …은 어떨까?' }, ['대상을 정했다', '장소를 정했다', '기간을 정했다', '직접 조사할 수 있다']),
              { prompt: '틀을 채워 \'급식 잔반\' 질문을 쓰세요.', toolOptions: { starter: '___ 동안 ___의 ___은(는) 어떨까?' }, target: { selfCheck: ['대상을 정했다', '기간을 정했다'] } }),
            IT(RW('우리 모둠이 고른 사회 문제를 좁힌 탐구 질문으로 쓰세요.', { topic: '우리 모둠이 고른 사회 문제를 대상·장소·기간이 드러나는 탐구 질문 한 문장으로 좁혀 쓰세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '우리 모둠 질문' }, ['대상을 정했다', '장소를 정했다', '기간을 정했다', '직접 조사할 수 있다']),
              { prompt: '틀을 채워 우리 모둠 질문을 쓰세요.', toolOptions: { starter: '___ 동안 ___의 ___은(는) 어떨까?' }, target: { selfCheck: ['대상을 정했다', '기간을 정했다'] } },
              null, { conclude: '좁힌 질문에는 누구를·어디서·언제가 드러나고, 우리가 직접 자료를 모아 답할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠의 좁힌 탐구 질문을 깨끗하게 옮겨 써요.' }] },
      }),
      M('activity.order', {
        title: '발표 장면 차례 놓기', method: '발표 차례 놓기', tool: 'story', minutes: 16,
        levels: { easy: '발표 장면 카드 3장(질문·결과·결론)을 차례로 놓는다(바로 알려 준다).', base: '장면 카드 4장(질문·방법·결과·결론)을 놓고 말풍선 빈칸을 채운다.', challenge: '질의응답 장면까지 5장을 차례로 놓는다.' },
        activity: {
          title: '발표 장면 차례 놓기', tool: 'story',
          teacher: '"결과 그래프부터 보여 주면, 듣는 사람은 그 그래프가 무엇을 조사한 건지 알 수 있을까요?" 장면 카드를 놓은 뒤 차례를 바꾸면 어떻게 들리는지 견주게 한다. "결론만 말해도 된다"는 학생에게 "방법을 모르면 그 결론을 믿을 수 있을까요?"라고 되묻는다. 발표 차례는 탐구 차례와 같다는 점을 짚는다.',
          task: '탐구 발표 장면 카드를 질문→방법→결과→결론 차례로 놓고, 장면마다 말풍선을 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('발표 장면 카드를 차례대로 놓으세요.', SCENES, { title: '탐구 발표' }),
              OB('발표 장면 카드 세 장을 차례대로 놓으세요.', pickCards(SCENES, ['n1', 'n3', 'n4']), { title: '탐구 발표' }),
              OB('질의응답까지 발표 장면 카드 다섯 장을 차례대로 놓으세요.', [...SCENES, { id: 'n5', text: '질문 받고 답하기', motif: 'flower' }], { title: '탐구 발표' })),
            IT(FB('발표 장면마다 말풍선 빈칸에 알맞은 말 카드를 넣으세요.', [['(질문) "저희 질문은 ___"', '시험 전 두 주 3학년은 몇 시에 잘까요?'], ['(방법) "___"', '3학년 60명에게 익명 설문을 했어요.'], ['(결과) "___"', '절반이 12시 넘어 잔다고 답했어요.'], ['(결론) "___"', '60명 결과라 다른 학년은 알 수 없어요.']], ['모든 청소년은 잠이 부족해요.'], { title: '발표 말풍선' }),
              FB('발표 장면 두 곳의 말풍선 빈칸에 말 카드를 넣으세요.', [['(질문) "저희 질문은 ___"', '시험 전 두 주 3학년은 몇 시에 잘까요?'], ['(결과) "___"', '절반이 12시 넘어 잔다고 답했어요.']], [], { title: '발표 말풍선' })),
            IT({ prompt: '발표 장면에 맞지 않는 말 카드를 빼고, 결론 장면에 쓸 말만 골라 담으세요.', toolOptions: { mode: 'pick', basket: '결론 장면에 쓸 말', title: '결론 고르기', cards: [
              { id: 'p1', text: '"조사한 3학년 가운데 절반이 늦게 잤어요."' }, { id: 'p2', text: '"다른 학년도 조사해 보고 싶어요."' },
              { id: 'p3', text: '"모든 중학생은 밤을 새워요."' }, { id: 'p4', text: '"늦게 자는 건 휴대전화 때문이에요."' }] }, target: { pick: ['p1', 'p2'] } },
              null, null, { conclude: '발표는 질문→방법→결과→결론 차례로 하고, 결론은 자료가 말하는 만큼과 한계를 함께 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 발표를 장면별로 짧게 써요.', columns: ['장면', '할 말'], cells: [['질문', ''], ['방법', ''], ['결과', ''], ['결론', '']], answer: '모둠 발표 구성' }] },
      }),
      M('activity.qa', {
        title: '질의응답 태도 갈림길', method: '질의응답 태도 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(시간 나누기·동료 평가·정직)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '질의응답 태도 갈림길', tool: 'dilemma',
          teacher: '"\'30명만 조사했는데 전교생이라고 해도 돼요?\'라는 질문은 공격일까요, 도움일까요?" 발표자와 질문하는 쪽 장면을 하나씩 끝까지 가 보게 하고, 영향 칸에서 상대의 마음을 읽게 한다. "질문을 받으면 진 것"이라는 학생에게 "질문을 받은 뒤 결론을 고친 발표는 처음보다 약해졌을까요, 단단해졌을까요?"라고 되묻는다. 존중하는 질의응답은 사람이 아니라 내용에 묻고 답한다는 점을 짚는다.',
          task: '탐구 발표의 질의응답 가상 장면에서 길을 골라 결과를 따라가고, 존중하는 질문과 답의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '날카로운 질문을 받았어요. 한 번 골라 결과를 보세요.', base: '날카로운 질문을 받았어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '날카로운 질문을 받았어요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '날카로운 질문', QA1, [['thank', 'next', 'one']], QA1_R, ['r1', 'r2']),
            DIL({ easy: '다른 모둠 발표가 헷갈려요. 한 번 골라 결과를 보세요.', base: '다른 모둠 발표가 헷갈려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '다른 모둠 발표가 헷갈려요. 세 번 골라 동료 평가까지 가고 바른 근거를 모두 고르세요.' },
              '질문하는 쪽', QA2, [['note', 'onemore', 'useful']], QA2_R, ['r1', 'r2']),
            DIL({ easy: '조사하지 않은 질문이 나왔어요. 한 번 골라 결과를 보세요.', base: '조사하지 않은 질문이 나왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '조사하지 않은 질문이 나왔어요. 세 번 골라 끝까지 가고 바른 근거를 모두 고르세요.' },
              '답을 모르는 질문', QA3, [['honest', 'future', 'proud']], QA3_R, ['r1', 'r2'], null, { conclude: '질의응답은 내용에 묻고 답하는 시간이에요. 고마워하고, 한계와 모르는 것은 솔직히 말하고, 차례를 나눠요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '조사하지 않은 내용을 질문받았을 때 가장 알맞은 답은?', options: ['짐작으로 답한다', '"이번에 조사하지 않아 알 수 없어요. 다음 탐구로 적어 둘게요."', '못 들은 척한다'], answer: '"이번에 조사하지 않아 알 수 없어요. 다음 탐구로 적어 둘게요."' }] },
      }),

      // ---- 정리 ----
      M('wrap.present', {
        title: '모둠 탐구 발표회', method: '모둠 탐구 발표회', tool: 'timer', minutes: 7,
        levels: { easy: '발표 2분으로 타이머를 맞추고 발표 차례 카드를 놓은 뒤 발표한다.', base: '발표 3분으로 맞추고 차례를 놓은 뒤 발표한다.', challenge: '발표 3분·질의응답 1분으로 맞추고 질문 2개를 받는다.' },
        wrap: {
          teacher: '"오늘은 두 모둠이 발표해요. 발표 시간은 3분, 시간 지킴이가 30초 전에 손을 들어요." 교사가 진행하며 모둠마다 타이머를 맞추고, 오늘 놓은 장면 차례대로 발표하게 한다. "시간을 넘겨도 다 말하는 게 낫다"는 학생에게 "정한 시간 안에 핵심을 말하는 것도 발표 실력이에요"라고 짚는다. 발표하지 않는 모둠은 질문 하나씩을 준비한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '모둠 탐구 발표회', timeUnit: 'min', labels: ['발표', '질의응답'], plan: { work: 1, rest: 0, rounds: 1 }, cards: ['결론과 한계', '탐구 질문', '결과 그래프', '조사 방법'] },
              prompt: '발표 3분으로 타이머를 맞추고, 발표 차례 카드를 놓은 뒤 발표해요.', target: { plan: { work: 3 }, order: ['탐구 질문', '조사 방법', '결과 그래프', '결론과 한계'] }, difficulty: 0.2 },
            { prompt: '발표 2분으로 맞추고, 발표 차례 카드를 놓은 뒤 발표해요.', target: { plan: { work: 2 }, order: ['탐구 질문', '조사 방법', '결과 그래프', '결론과 한계'] } },
            { prompt: '발표 3분·질의응답 1분으로 맞추고 차례 카드를 놓은 뒤, 질문 2개를 받았는지 표시해요.', target: { plan: { work: 3, rest: 1 }, order: ['탐구 질문', '조사 방법', '결과 그래프', '결론과 한계'], selfCheck: ['질문 2개를 받고 답했다'] } }),
            { type: 'choice', prompt: '발표 시간이 30초 남았을 때 가장 알맞은 행동은?', options: ['남은 내용을 빠르게 다 읽는다', '결론과 한계를 짧게 말하고 마친다', '시간을 넘겨 계속한다'], answer: 1, difficulty: 0.2, explain: '시간이 없을수록 결론과 한계를 먼저 말해요.' },
          ],
        },
        worksheet: {
          title: '탐구 발표회',
          items: [
            { type: 'short', prompt: '다른 모둠 발표에서 준비한 질문 하나를 써요.' },
            { type: 'short', prompt: '우리 모둠 발표에서 받은 질문과 우리의 답을 적어요.' },
          ],
        },
        notes: '교사 진행 모듈이다. 7분 안에는 한두 모둠만 발표하고 나머지 모둠은 다음 시간에 이어 한다.',
      }),
      M('wrap.peer', {
        title: '기준표로 동료 평가하기', method: '기준표 동료 평가', tool: 'timer', minutes: 7,
        levels: { easy: '한 모둠 발표를 기준표로 점검하고 별점 1칸을 적는다.', base: '세 모둠 발표의 별점(5점 만점)을 기록판에 적고 기준표를 점검한다.', challenge: '별점을 적은 뒤 활동지에 모둠마다 고칠 점까지 쓴다.' },
        wrap: {
          teacher: '"동료 평가는 좋은 점과 고칠 점을 기준에 맞춰 알려 주는 선물이에요. \'별로\'라는 말로 무엇을 고칠 수 있을까요?" 기준표(질문이 좁혀졌다·방법이 질문과 맞다·결론이 자료만큼이다·한계를 말했다)를 함께 읽고, 발표마다 별점을 기록판에 적게 한다. "친한 모둠은 점수를 후하게 준다"는 학생에게 "같은 기준을 모든 모둠에 쓰는 것이 공정한 평가"라고 짚는다. 별점은 성적에 넣지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '동료 평가', fields: [{ label: '1모둠 별점', unit: '점' }, { label: '2모둠 별점', unit: '점' }, { label: '3모둠 별점', unit: '점' }] },
              prompt: '세 모둠 발표의 별점을 기록판에 적고, 기준표로 점검했는지 표시해요.', target: { records: true, selfCheck: ['질문이 좁혀졌는지 봤다', '결론이 자료만큼인지 봤다', '모든 모둠에 같은 기준을 썼다'] }, difficulty: 0.2 },
            { prompt: '한 모둠 발표의 별점을 적고, 기준표로 점검했는지 표시해요.', toolOptions: { fields: [{ label: '1모둠 별점', unit: '점' }] }, target: { records: true, selfCheck: ['질문이 좁혀졌는지 봤다', '결론이 자료만큼인지 봤다'] } }),
            { type: 'choice', prompt: '동료 평가 문장으로 가장 알맞은 것은?', options: ['"별로였음"', '"질문은 잘 좁혔는데, 결론에서 조사한 범위를 넘었어요."', '"친해서 5점"'], answer: 1, difficulty: 0.2, explain: '기준에 맞춰 좋은 점과 고칠 점을 함께 써요.' },
          ],
        },
        worksheet: {
          title: '동료 평가',
          items: [
            { type: 'table', prompt: '모둠마다 좋은 점과 고칠 점을 써요.', columns: ['모둠', '좋은 점', '고칠 점'], cells: [['1모둠', '', ''], ['2모둠', '', ''], ['3모둠', '', '']], answer: '동료 평가' },
            { type: 'check', prompt: '내가 쓴 평가를 점검해요.', options: ['기준에 맞췄다', '고칠 방법을 적었다', '사람이 아니라 발표를 평가했다'] },
          ],
        },
        notes: '교사 진행 모듈이다. 별점은 수업 안 피드백용이며 성적에 쓰지 않는다.',
      }),
    );
  }

  // ==== 9학년 · 봉사 실행 중 문제 대응과 성찰 (auto.m.g9-serve) ====
  {
    const M = MK('g9-serve', [9]);
    const RISK = [
      { id: 'k1', text: '장갑을 끼고 집게로 쓰레기를 줍는다', to: '안전' }, { id: 'k2', text: '깨진 유리 조각을 맨손으로 줍는다', to: '위험' },
      { id: 'k3', text: '인솔 선생님이 보이는 곳에서 활동한다', to: '안전' }, { id: 'k4', text: '차도로 내려가 떨어진 쓰레기를 줍는다', to: '위험' },
      { id: 'k5', text: '무거운 상자는 둘이 함께 든다', to: '안전' }, { id: 'k6', text: '세제 두 가지를 섞어 바닥을 닦는다', to: '위험' },
    ];
    const BEFORE = [['모은 쓰레기 봉투', 10, 8], ['안내판 붙이기', 6, 6], ['참여 인원', 12, 10], ['주민 의견 듣기', 6, 2]];
    // 비가 오는 날
    const RAIN = { text: '가상 3학년 모둠이 공원 봉사를 시작한 지 10분 만에 비가 굵어진다. 계획한 쓰레기 줍기는 절반도 못 했다.', ask: '모둠장인 나는 어떻게 할까?', motif: 'rain', choices: [
      { id: 'push', text: '계획을 채우려고 비를 맞으며 계속한다', result: '바닥이 미끄러워 한 친구가 넘어질 뻔한다.', impact: [{ who: '모둠원', text: '다칠 뻔한다', tone: -1 }], why: '안전이 계획보다 먼저예요.', end: '계획을 채우려다 위험해졌어요.',
        next: { text: '인솔 선생님이 멈추라고 하신다.', choices: [
          { id: 'argue', text: '"조금만 더 하면 끝나요"라고 버틴다', result: '위험이 계속된다.', impact: [{ who: '모둠원', text: '위험하다', tone: -1 }] },
          { id: 'stop', text: '바로 멈추고 비를 피한다', result: '모두 안전하게 실내로 들어간다.', impact: [{ who: '모둠원', text: '안전하다', tone: 1 }] }] } },
      { id: 'pause', text: '바로 멈추고 인솔 선생님과 비를 피한 뒤 다음 할 일을 정한다', result: '모두 안전하게 정자 아래로 모인다.', impact: [{ who: '모둠원', text: '안전하다', tone: 1 }], end: '바로 멈추고 안전을 지켰어요.',
        next: { text: '비가 그치지 않는다. 남은 시간이 30분이다.', choices: [
          { id: 'home', text: '그냥 해산하고 아무것도 남기지 않는다', result: '봉사가 기록 없이 끝난다.', impact: [{ who: '모둠', text: '돌아볼 것이 없다', tone: -1 }], why: '멈춘 것도 기록해야 다음 계획에 쓸 수 있어요.' },
          { id: 'switch', text: '실내에서 분리배출 안내판을 만드는 일로 바꾼다', result: '목적(공원 쓰레기 줄이기)에 맞는 일을 이어 간다.', impact: [{ who: '모둠', text: '목적을 이어 간다', tone: 1 }], end: '목적에 맞게 활동을 바꿨어요.',
            next: { text: '활동을 마치고 기록을 남겨야 한다.', choices: [
              { id: 'record', text: '날씨로 멈춘 때와 바꾼 활동, 다음에 바꿀 점을 기록한다', result: '다음 봉사 계획에 \'비 오는 날 대안\'이 생긴다.', impact: [{ who: '다음 모둠', text: '대비할 수 있다', tone: 1 }] },
              { id: 'only', text: '봉투 수만 적는다', result: '왜 줄었는지 알 수 없다.', impact: [{ who: '다음 모둠', text: '같은 일을 겪는다', tone: -1 }], why: '바뀐 까닭까지 기록해야 해요.' }] } }] } },
      { id: 'quit', text: '"망했다"며 봉사를 그만두고 각자 집에 간다', result: '인솔 선생님이 인원을 확인하지 못해 걱정한다.', impact: [{ who: '인솔 선생님', text: '학생을 찾지 못한다', tone: -1 }], why: '문제가 생겨도 그만두지 말고 함께 멈추고 알려요.', ending: '흩어져서 더 큰 문제가 생겼어요.' }] };
    const RAIN_R = [{ id: 'r1', text: '안전이 계획보다 먼저다' }, { id: 'r2', text: '문제가 생기면 목적에 맞게 활동을 바꾸고 기록한다' },
      { id: 'r3', text: '문제가 생기면 봉사를 그만두면 된다', why: '멈추고 바꾸면 목적을 이어 갈 수 있어요.' }, { id: 'r4', text: '계획한 양은 무슨 일이 있어도 채운다', why: '안전이 계획보다 먼저예요.' }];
    // 도움을 거절할 때
    const REFUSE = { text: '가상 모둠이 노인 복지관에서 \'말벗 봉사\'를 하기로 했다. 한 어르신이 "오늘은 혼자 있고 싶다"며 고개를 젓는다.', ask: '나는 어떻게 할까?', motif: 'flower', choices: [
      { id: 'insist', text: '봉사 시간을 채워야 하니 옆에 앉아 계속 말을 건다', result: '어르신이 불편해하며 자리를 옮긴다.', impact: [{ who: '어르신', text: '불편하다', tone: -1 }], why: '도움은 받는 사람이 원할 때 도움이에요.', end: '거절을 무시해 어르신이 불편해했어요.',
        next: { text: '복지관 선생님이 다가오신다.', choices: [
          { id: 'excuse', text: '"봉사 시간 때문에요"라고 말한다', result: '봉사의 뜻이 흐려진다.', impact: [{ who: '어르신', text: '존중받지 못한다', tone: -1 }] },
          { id: 'askstaff', text: '어르신 뜻을 존중하는 다른 방법을 여쭌다', result: '다른 활동을 안내받는다.', impact: [{ who: '어르신', text: '존중받는다', tone: 1 }] }] } },
      { id: 'respect', text: '"알겠습니다, 편히 쉬세요"라고 인사하고 복지관 선생님께 알린다', result: '복지관 선생님이 다른 어르신을 소개해 주신다.', impact: [{ who: '어르신', text: '뜻을 존중받는다', tone: 1 }], end: '거절을 존중하고 알렸어요.',
        next: { text: '새로 만난 어르신이 옛날이야기를 해 주신다. 친구가 몰래 사진을 찍으려 한다.', choices: [
          { id: 'photo', text: '기념이니 찍게 둔다', result: '어르신 얼굴이 동의 없이 찍힌다.', impact: [{ who: '어르신', text: '사생활이 드러난다', tone: -1 }], why: '사진은 동의를 받아야 해요.' },
          { id: 'noph', text: '사진은 찍지 말고 이야기를 글로 기록하자고 한다', result: '어르신이 편안하게 이야기를 이어 가신다.', impact: [{ who: '어르신', text: '편안하다', tone: 1 }], end: '사진 대신 글로 기록했어요.',
            next: { text: '봉사를 마치고 모둠 기록을 쓴다.', choices: [
              { id: 'names', text: '어르신 이름과 사는 곳까지 자세히 적는다', result: '개인정보가 기록에 남는다.', impact: [{ who: '어르신', text: '개인정보가 드러난다', tone: -1 }], why: '기록에는 개인정보를 남기지 않아요.' },
              { id: 'anon', text: '이름 없이 한 일과 배운 점만 적는다', result: '존중을 지키며 기록이 남는다.', impact: [{ who: '모둠', text: '돌아볼 기록이 생긴다', tone: 1 }] }] } }] } },
      { id: 'leave', text: '말없이 그냥 다른 곳으로 가 버린다', result: '복지관 선생님이 모둠이 어디 있는지 모른다.', impact: [{ who: '복지관 선생님', text: '당황한다', tone: -1 }], why: '바뀐 상황은 담당자에게 알려요.', ending: '알리지 않고 옮겨 당황하게 했어요.' }] };
    const REFUSE_R = [{ id: 'r1', text: '도움은 받는 사람이 원할 때 도움이다' }, { id: 'r2', text: '기록에는 사진·개인정보 대신 한 일과 배운 점을 남긴다' },
      { id: 'r3', text: '봉사 시간을 채우는 것이 가장 중요하다', why: '시간보다 받는 사람의 뜻이 먼저예요.' }, { id: 'r4', text: '기념사진은 동의 없이 찍어도 된다', why: '사진은 동의를 받아야 해요.' }];
    // 다쳤을 때
    const HURT = { text: '하천 정화 봉사 중 모둠원 하나가 돌에 미끄러져 무릎이 까졌다. 피가 조금 난다.', ask: '옆에 있던 나는 어떻게 할까?', motif: 'leaf', choices: [
      { id: 'later', text: '"괜찮아, 끝나고 보자"며 봉사를 이어 간다', result: '친구가 아파서 제대로 걷지 못한다.', impact: [{ who: '다친 친구', text: '더 아프다', tone: -1 }], why: '다치면 바로 멈추고 알려요.', end: '다친 친구를 두고 이어 갔어요.',
        next: { text: '친구의 무릎이 붓기 시작한다.', choices: [
          { id: 'self2', text: '우리끼리 휴지로 닦아 준다', result: '제대로 치료하지 못한다.', impact: [{ who: '다친 친구', text: '치료가 늦어진다', tone: -1 }] },
          { id: 'tellt', text: '바로 인솔 선생님께 알린다', result: '선생님이 응급 처치를 하신다.', impact: [{ who: '다친 친구', text: '처치를 받는다', tone: 1 }] }] } },
      { id: 'tell', text: '활동을 멈추고 바로 인솔 선생님께 알린다', result: '선생님이 상처를 살피고 응급 처치를 하신다.', impact: [{ who: '다친 친구', text: '처치를 받는다', tone: 1 }], end: '멈추고 바로 알렸어요.',
        next: { text: '다른 모둠원들이 "우리만이라도 끝내자"고 한다.', choices: [
          { id: 'split', text: '선생님 없이 우리끼리 하천에 남는다', result: '어른 없이 물가에 있게 된다.', impact: [{ who: '모둠원', text: '위험해진다', tone: -1 }], why: '인솔 교사 없이 위험한 곳에 남지 않아요.' },
          { id: 'together', text: '선생님 지시대로 안전한 곳에 함께 모인다', result: '모두 안전하게 기다린다.', impact: [{ who: '모둠원', text: '안전하다', tone: 1 }], end: '함께 안전한 곳에 모였어요.',
            next: { text: '봉사가 끝나고 기록을 쓴다.', choices: [
              { id: 'hide', text: '다친 일은 빼고 잘된 것만 적는다', result: '다음 모둠이 같은 곳에서 또 미끄러질 수 있다.', impact: [{ who: '다음 모둠', text: '같은 위험을 겪는다', tone: -1 }], why: '사고와 위험한 곳도 기록해야 다음이 안전해요.' },
              { id: 'note', text: '미끄러운 곳과 처치한 일을 기록해 다음 계획에 남긴다', result: '다음 봉사 때 그곳을 피하거나 장화를 준비한다.', impact: [{ who: '다음 모둠', text: '대비할 수 있다', tone: 1 }] }] } }] } },
      { id: 'panic', text: '놀라서 아무것도 못 하고 서 있는다', result: '시간이 흘러 처치가 늦어진다.', impact: [{ who: '다친 친구', text: '처치가 늦다', tone: -1 }], why: '당황스러워도 \'멈추고 알리기\'만 먼저 해요.', ending: '당황해서 처치가 늦어졌어요.' }] };
    const HURT_R = [{ id: 'r1', text: '다치면 바로 멈추고 인솔 교사에게 알린다' }, { id: 'r2', text: '사고와 위험한 곳도 기록해야 다음이 안전하다' },
      { id: 'r3', text: '작은 상처는 끝나고 봐도 된다', why: '작은 상처도 바로 알려야 해요.' }, { id: 'r4', text: '잘된 것만 기록한다', why: '사고 기록이 다음 봉사를 지켜요.' }];
    const PRIN = [['안전: ___', '날씨가 나빠지면 바로 멈춘다'], ['존중: ___', '받는 사람이 거절하면 그 뜻을 따른다'], ['기록: ___', '바뀐 일과 까닭을 이름 없이 적는다'], ['소통: ___', '바뀐 상황을 인솔 교사에게 알린다']];

    ALL.push(
      // ---- 도입 ----
      M('intro.risk', {
        title: '봉사 장면 위험 요소 찾기', method: '봉사 장면 위험 요소 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장을 \'안전\'·\'위험\'에 나누어 보인다.', base: '카드 6장이 두 칸에 나뉘는 모습을 보고 위험한 까닭을 말한다.', challenge: '위험 카드마다 어떻게 바꾸면 안전해지는지 대응을 말한다.' },
        intro: {
          teacher: '"깨진 유리 조각이 보이면 맨손으로 주워도 될까요?" 시연 단추로 봉사 장면 카드가 \'안전\'과 \'위험\'에 나뉘는 모습을 보인다. "봉사는 좋은 일이니 조금 위험해도 괜찮다"는 말이 나오면 "봉사하다 다치면 도움 받는 사람도, 우리도 힘들어지지 않을까요?"라고 되묻는다. 오늘은 봉사 중 생기는 뜻밖의 문제를 원칙으로 판단하는 법을 익힌다고 밝힌다.',
          student: '가상 봉사 장면 카드가 안전과 위험으로 나뉘는 것을 보고, 위험한 장면을 어떻게 바꾸면 좋을지 생각해요.',
          demo: { tool: 'sortboard', options: BB('', ['안전', '위험'], RISK).toolOptions, sequence: [{ at: { k1: 0, k2: 1 } }, { at: { k1: 0, k2: 1, k3: 0, k4: 1, k5: 0, k6: 1 } }] },
          art: { draw: 'a paper-cut park cleanup scene with students in gloves using tongs, a broken glass shard marked with a warning, a road edge and a teacher watching nearby', banner: '봉사 중 위험은 어디에?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      M('intro.before', {
        title: '계획과 결과 막대 견주기', method: '계획·결과 막대 견주기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 항목 2개(봉투·안내판)의 계획과 결과를 짚는다.', base: '항목 4개 가운데 계획과 결과 차이가 가장 큰 것을 고른다.', challenge: '차이가 난 까닭을 날씨·시간·사람 같은 원인으로 짐작해 말한다.' },
        intro: {
          teacher: '"가상 모둠이 계획한 주민 의견 듣기는 6명, 실제로는 2명이었어요. 왜 이렇게 차이가 났을까요?" 시연 단추로 차이가 가장 큰 항목이 골라지는 모습을 보인다. "계획대로 안 되면 실패한 봉사"라는 말이 나오면 "안내판은 계획대로 됐는데, 그럼 이 봉사는 다 실패일까요?"라고 되묻는다. 계획과 결과를 견주는 것은 다음 계획을 고치기 위해서라는 점을 짚는다. 자료는 가상이다.',
          student: '가상 모둠 봉사의 계획과 실제 결과 차이 그래프를 보고 차이가 가장 큰 항목을 찾고, 왜 그런지 짐작해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '계획보다 모자란 정도(가상 모둠, 계획−결과)', unit: '개·명', xLabel: '항목', yLabel: '차이', data: BEFORE.map((d) => [d[0], d[1] - d[2]]), question: '계획과 결과 차이가 가장 큰 항목은?', choices: BEFORE.map((d) => d[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut clipboard with a plan list beside a paper bar chart comparing planned and actual results, a small rain cloud and a clock in the corner', banner: '계획과 결과는 얼마나 달랐을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 교구가 막대를 한 항목에 두 개씩 그리지 못해, 계획에서 결과를 뺀 차이 막대로 보였다(체계도 \'계획·결과 막대 견주기\'). 차이는 봉투 2·안내판 0·참여 인원 2·의견 듣기 4로, 시연은 의견 듣기를 고른다.',
      }),

      // ---- 활동 ----
      M('activity.case', {
        title: '봉사 중 뜻밖의 문제 갈림길', method: '뜻밖의 문제 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면 하나를 본다.', base: '갈림길 2번을 끝까지 가 보고 알맞은 근거 카드를 한 장 이상 고른다.', challenge: '갈림길 3번(기록 남기기)까지 가고 바른 근거 2장을 모두 고른다.' },
        activity: {
          title: '봉사 중 뜻밖의 문제 갈림길', tool: 'dilemma',
          teacher: '"비가 굵어지는데 계획한 양을 채우려고 계속하는 것과 멈추고 활동을 바꾸는 것, 봉사의 목적에 맞는 쪽은 어느 쪽일까요?" 장면마다 끝까지 가 본 뒤 안전·존중·기록·소통 가운데 어느 원칙이 걸려 있었는지 묻는다. "문제가 생기면 봉사를 그만두면 된다"는 학생에게 "멈추는 것과 그만두는 것은 어떻게 다를까요?"라고 되묻는다. 바뀐 일과 사고도 기록해야 다음이 안전하다는 점을 짚는다.',
          task: '가상 봉사 중 생긴 뜻밖의 문제(날씨·거절·부상)에서 원칙에 맞는 길을 골라 따라가고 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '봉사 중 비가 굵어져요. 한 번 골라 결과를 보세요.', base: '봉사 중 비가 굵어져요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '봉사 중 비가 굵어져요. 세 번 골라 기록까지 가고 바른 근거를 모두 고르세요.' },
              '비 오는 날', RAIN, [['pause', 'switch', 'record']], RAIN_R, ['r1', 'r2']),
            DIL({ easy: '어르신이 말벗 봉사를 거절해요. 한 번 골라 결과를 보세요.', base: '어르신이 말벗 봉사를 거절해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '어르신이 말벗 봉사를 거절해요. 세 번 골라 기록까지 가고 바른 근거를 모두 고르세요.' },
              '도움을 거절할 때', REFUSE, [['respect', 'noph', 'anon']], REFUSE_R, ['r1', 'r2']),
            DIL({ easy: '봉사 중 친구가 다쳤어요. 한 번 골라 결과를 보세요.', base: '봉사 중 친구가 다쳤어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '봉사 중 친구가 다쳤어요. 세 번 골라 기록까지 가고 바른 근거를 모두 고르세요.' },
              '다쳤을 때', HURT, [['tell', 'together', 'note']], HURT_R, ['r1', 'r2'], null, { conclude: '봉사 중 문제가 생기면 그만두지 말고 멈추고, 받는 사람의 뜻을 존중하고, 알리고, 바뀐 일까지 기록해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '봉사 중 친구가 다쳤을 때 가장 먼저 할 일은?', options: ['끝나고 살펴본다', '활동을 멈추고 인솔 선생님께 알린다', '우리끼리 처치한다'], answer: '활동을 멈추고 인솔 선생님께 알린다' }] },
      }),
      M('activity.principle', {
        title: '봉사 원칙과 대응 잇기', method: '원칙과 대응 잇기', tool: 'wordcards', minutes: 16,
        levels: { easy: '원칙 2개(안전·존중)의 빈칸에 대응 카드를 넣는다(바로 알려 준다).', base: '원칙 4개(안전·존중·기록·소통)의 빈칸에 대응 카드를 넣고, 대응을 원칙 칸에 나눈다.', challenge: '사례 카드마다 가장 먼저 지킬 원칙의 대응만 고르는 문항까지 함정과 함께 푼다.' },
        activity: {
          title: '봉사 원칙과 대응 잇기', tool: 'wordcards',
          teacher: '"\'바뀐 상황을 인솔 교사에게 알린다\'는 네 원칙 가운데 어디에 들어갈까요?" 원칙마다 대응 카드를 넣은 뒤, 오늘 갈림길 장면을 떠올려 어느 원칙이 걸려 있었는지 묻는다. "원칙은 외우기만 하면 된다"는 학생에게 "비가 오는 순간 원칙이 떠오르려면 무엇을 연습해야 할까요?"라고 되묻는다. 원칙은 행동 한 줄로 바꿔 둘 때 쓸 수 있다는 점을 짚는다.',
          task: '봉사 원칙(안전·존중·기록·소통) 카드와 대응 행동 카드를 잇고, 사례마다 지킬 대응을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('원칙마다 알맞은 대응 카드를 넣으세요.', PRIN, ['계획한 양은 무조건 채운다']),
              FB('안전과 존중의 빈칸에 알맞은 대응 카드를 넣으세요.', PRIN.slice(0, 2), [])),
            IT(SB('대응 카드를 원칙 칸에 나누세요.', ['안전', '존중', '기록', '소통'], [
              { id: 'p1', text: '장갑을 끼고 집게를 쓴다', to: '안전' }, { id: 'p2', text: '사진은 동의를 받고 찍는다', to: '존중' },
              { id: 'p3', text: '사고와 위험한 곳을 적는다', to: '기록' }, { id: 'p4', text: '흩어지기 전에 인원을 확인한다', to: '소통' },
              { id: 'p5', text: '받는 사람이 원하는 방식으로 돕는다', to: '존중' }, { id: 'p6', text: '바꾼 활동과 까닭을 적는다', to: '기록' }]),
              SB('대응 카드 네 장을 원칙 칸에 나누세요.', ['안전', '존중', '기록', '소통'], [
                { id: 'p1', text: '장갑을 끼고 집게를 쓴다', to: '안전' }, { id: 'p2', text: '사진은 동의를 받고 찍는다', to: '존중' },
                { id: 'p3', text: '사고와 위험한 곳을 적는다', to: '기록' }, { id: 'p4', text: '흩어지기 전에 인원을 확인한다', to: '소통' }])),
            IT(PB('사례: 봉사 중 수혜자가 "사진은 싫어요"라고 해요. 지킬 대응만 골라 담으세요.', '지킬 대응', [
              { id: 'c1', text: '사진을 찍지 않는다', ok: true }, { id: 'c2', text: '한 일을 이름 없이 글로 적는다', ok: true },
              { id: 'c3', text: '얼굴만 가리고 찍는다' }, { id: 'c4', text: '기념이니 한 장만 찍는다' }]),
              null,
              PB('사례: 수혜자가 사진을 싫어해요. 지킬 대응만 골라 담으세요(함정 포함).', '지킬 대응', [
                { id: 'c1', text: '사진을 찍지 않는다', ok: true }, { id: 'c2', text: '한 일을 이름 없이 글로 적는다', ok: true },
                { id: 'c3', text: '얼굴만 가리고 찍는다' }, { id: 'c4', text: '기념이니 한 장만 찍는다' },
                { id: 'c5', text: '모둠원에게도 찍지 않기로 알린다', ok: true }, { id: 'c6', text: '나중에 몰래 찍는다' }]),
              { conclude: '안전·존중·기록·소통 원칙은 행동 한 줄로 바꿔 두면 뜻밖의 순간에도 꺼내 쓸 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원칙마다 내가 지킬 행동 한 줄을 써요.', columns: ['원칙', '지킬 행동'], cells: [['안전', ''], ['존중', ''], ['기록', ''], ['소통', '']], answer: '(예) 날씨가 나빠지면 멈춘다 / 거절하면 따른다 / 바뀐 일 적기 / 인솔 교사에게 알리기' }] },
      }),
      M('activity.do', {
        title: '교내 봉사 실행과 기록', method: '봉사 실행과 기록', tool: 'timer', minutes: 16,
        levels: { easy: '교내 봉사 10분으로 타이머를 맞추고 안전 점검 뒤 봉사하고, 기록판 1칸(한 시간)을 적는다.', base: '봉사 12분·정리 3분으로 맞추고 안전 점검 뒤 봉사하고, 기록판 2칸(한 시간·한 일의 양)을 적는다.', challenge: '봉사 12분·정리 3분으로 하고, 기록판에 생긴 문제와 대응한 수까지 적는다.' },
        activity: {
          title: '교내 봉사 실행과 기록', tool: 'timer',
          teacher: '"오늘 16분 안에 우리 모둠이 계획한 교내 봉사(화단 정리·분리배출장 정리 등)를 해 볼 거예요. 시작 전에 안전 점검부터 읽어 볼까요?" 교사가 인솔해 정한 구역에서 봉사를 하고, 돌아와 기록판을 채우게 한다. "시간이 짧으니 점검은 건너뛰자"는 학생에게 "짧은 시간일수록 다치면 그 시간이 다 사라져요"라고 짚는다. 문제가 생기면 오늘 배운 원칙대로 멈추고 알린다.',
          task: '교사 인솔로 모둠이 계획한 교내 봉사를 짧게 해 보고, 안전 점검과 기록판(시간·한 일·생긴 문제)을 채워요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '봉사 12분·정리 3분으로 타이머를 맞추세요.', toolOptions: { title: '교내 봉사 시간', timeUnit: 'min', labels: ['봉사', '정리'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { work: 12, rest: 3, rounds: 1 } } },
              { prompt: '봉사 시간을 10분으로 맞추세요.', target: { plan: { work: 10, rounds: 1 } } }),
            IT({ prompt: '봉사를 시작하기 전 안전 점검을 모두 표시하세요.', toolOptions: { title: '시작 전 안전 점검', safety: ['장갑을 꼈다', '정해진 구역을 확인했다', '날카로운 것은 집게로만 줍기로 했다', '문제가 생기면 멈추고 알리기로 했다'] }, target: { safety: true } }),
            IT({ prompt: '봉사를 마친 뒤 기록판에 한 시간과 한 일의 양을 적으세요.', toolOptions: { title: '봉사 기록판', fields: [{ label: '봉사한 시간', unit: '분' }, { label: '모은 봉투', unit: '개' }] }, target: { records: true } },
              { prompt: '봉사를 마친 뒤 봉사한 시간을 적으세요.', toolOptions: { fields: [{ label: '봉사한 시간', unit: '분' }] } },
              { prompt: '봉사를 마친 뒤 시간·양과 함께 생긴 문제 수와 대응한 수를 적으세요.', toolOptions: { fields: [{ label: '봉사한 시간', unit: '분' }, { label: '모은 봉투', unit: '개' }, { label: '생긴 문제', unit: '건' }, { label: '대응한 문제', unit: '건' }] } },
              { conclude: '짧은 봉사도 점검→실행→기록 차례를 지키면 다음 봉사를 더 잘 계획할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 봉사에서 생긴 문제와 우리가 한 대응을 이름 없이 한 문장으로 써요.' }] },
        notes: '교사 진행 모듈이다. 체계도의 \'15분·30분 봉사\'는 16분 활동 안에서 할 수 없어, 교내에서 10분(쉬움)·12분+정리 3분(기본·도전)으로 줄였다. 더 긴 봉사는 따로 정한 시간에 교사 인솔로 한다.',
      }),
      M('activity.good', {
        title: '잘된 점·고칠 점 생각그물', method: '잘된 점·고칠 점 생각그물', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(잘된 점·고칠 점)에 카드 2장씩만 붙인다(바로 알려 준다).', base: '가지 2개에 카드 4장을 붙인다.', challenge: '카드 6장을 붙이고, 돌아보기에 맞지 않는 함정 카드(남 탓·핑계)는 남긴다.' },
        activity: {
          title: '잘된 점·고칠 점 생각그물', tool: 'mindmap',
          teacher: '"\'비 때문에 망했다\'는 고칠 점일까요, 핑계일까요?" 가상 모둠의 돌아보기 카드를 두 가지에 붙이게 하고, 고칠 점 카드는 \'다음에 무엇을 바꿀지\'가 들어 있는지 따지게 한다. "고칠 점은 잘못한 사람을 적는 것"이라는 학생에게 "사람이 아니라 방법을 적으면 다음에 무엇이 달라질까요?"라고 되묻는다. 잘된 점도 꼭 함께 적어야 다음에 이어 갈 수 있다는 점을 짚는다.',
          task: '가상 모둠의 봉사 돌아보기 카드를 \'잘된 점\'과 \'고칠 점\' 가지에 붙이고, 남 탓·핑계 카드는 남겨 두어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('봉사 돌아보기 카드를 두 가지에 붙이세요.', ['잘된 점', '고칠 점'], [
              { id: 'g1', text: '비가 오자 바로 멈추고 실내 활동으로 바꿨다', to: '잘된 점' }, { id: 'g2', text: '바뀐 일을 기록해 두었다', to: '잘된 점' },
              { id: 'b1', text: '비 오는 날 대안을 미리 정하지 않았다', to: '고칠 점' }, { id: 'b2', text: '주민 의견 듣기 시간을 따로 잡지 않았다', to: '고칠 점' }], { topic: '공원 봉사 돌아보기' }),
              SB('봉사 돌아보기 카드 두 장씩을 두 가지에 붙이세요.', ['잘된 점', '고칠 점'], [
                { id: 'g1', text: '비가 오자 바로 멈추고 실내 활동으로 바꿨다', to: '잘된 점' }, { id: 'b1', text: '비 오는 날 대안을 미리 정하지 않았다', to: '고칠 점' }], { topic: '공원 봉사 돌아보기' }),
              SB('봉사 돌아보기 카드 여섯 장을 붙이고 함정 카드는 남기세요.', ['잘된 점', '고칠 점'], [
                { id: 'g1', text: '비가 오자 바로 멈추고 실내 활동으로 바꿨다', to: '잘된 점' }, { id: 'g2', text: '바뀐 일을 기록해 두었다', to: '잘된 점' }, { id: 'g3', text: '안내판 6개를 계획대로 붙였다', to: '잘된 점' },
                { id: 'b1', text: '비 오는 날 대안을 미리 정하지 않았다', to: '고칠 점' }, { id: 'b2', text: '주민 의견 듣기 시간을 따로 잡지 않았다', to: '고칠 점' }, { id: 'b3', text: '집게가 모자랐다', to: '고칠 점' },
                { id: 'x1', text: '비 때문에 다 망했다' }, { id: 'x2', text: '늦게 온 친구 탓이다' }], { topic: '공원 봉사 돌아보기' })),
            IT(SB('복지관 말벗 봉사 돌아보기 카드를 두 가지에 붙이세요.', ['잘된 점', '고칠 점'], [
              { id: 'h1', text: '어르신이 거절했을 때 뜻을 따랐다', to: '잘된 점' }, { id: 'h2', text: '사진 대신 글로 기록했다', to: '잘된 점' },
              { id: 'h3', text: '나눌 이야기 주제를 미리 준비하지 않았다', to: '고칠 점' }, { id: 'h4', text: '복지관 선생님께 미리 연락하지 않았다', to: '고칠 점' }], { topic: '말벗 봉사 돌아보기' }),
              SB('말벗 봉사 돌아보기 카드 두 장을 두 가지에 붙이세요.', ['잘된 점', '고칠 점'], [
                { id: 'h1', text: '어르신이 거절했을 때 뜻을 따랐다', to: '잘된 점' }, { id: 'h3', text: '나눌 이야기 주제를 미리 준비하지 않았다', to: '고칠 점' }], { topic: '말벗 봉사 돌아보기' })),
            IT(PB('고칠 점 카드 가운데 다음에 바꿀 방법이 담긴 것만 골라 담으세요.', '다음에 바꿀 점', [
              { id: 'n1', text: '다음엔 비 오는 날 실내 대안을 계획서에 넣는다', ok: true }, { id: 'n2', text: '다음엔 집게를 인원 수만큼 빌린다', ok: true },
              { id: 'n3', text: '다음엔 운이 좋기를 바란다' }, { id: 'n4', text: '다음엔 늦는 친구를 빼고 한다' }], { topic: '다음에 바꿀 점' }),
              null, null, { conclude: '돌아보기는 잘된 점과 고칠 점을 함께 적고, 고칠 점은 사람이 아니라 다음에 바꿀 방법으로 적어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 봉사의 잘된 점과 고칠 점을 써요.', columns: ['잘된 점', '고칠 점(다음에 바꿀 방법)'], cells: [['', ''], ['', '']], answer: '모둠 돌아보기' }] },
      }),

      // ---- 정리 ----
      M('wrap.reflect', {
        title: '봉사 성찰 글', method: '봉사 성찰 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '틀("계획은 ___였고 실제로는 ___했다. 그래서 ___을 배웠다.")을 채우고 기준 2개를 점검한다.', base: '계획과 결과를 견준 성찰 글을 네 문장으로 쓰고 기준 4개(사실·느낌·배움·다음)를 점검한다.', challenge: '고등학교에서 이어 갈 계획까지 쓰고 기준 5개를 점검한다.' },
        wrap: {
          teacher: '"\'재미있었다\'만 있는 글과 \'계획한 봉투는 10개였지만 비 때문에 8개를 모았고, 실내 대안을 미리 정해야 한다는 것을 배웠다\'는 글은 무엇이 다를까요?" 두 글을 견준 뒤 사실·느낌·배움·다음 차례로 성찰 글을 쓰게 한다. "성찰 글은 반성문"이라는 학생에게 "잘된 점과 배운 점을 적는 것도 성찰이에요"라고 짚는다. 도움 받은 분의 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '이번 봉사의 계획과 결과를 견주어 사실·느낌·배움·다음이 드러나는 성찰 글을 네 문장으로 쓰세요.', minChars: 50, maxChars: 280, minSentences: 4, maxSentences: 6, title: '봉사 성찰 글', placeholder: '계획은…' },
              prompt: '봉사 성찰 글을 네 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['계획과 결과의 사실을 썼다', '느낀 점을 썼다', '배운 점을 썼다', '다음에 할 일을 썼다'] }, difficulty: 0.3 },
            { prompt: '틀을 채워 봉사 성찰 글을 쓰고 기준표에 표시해요.', toolOptions: { starter: '계획은 ___였고 실제로는 ___했다. 그래서 ___을 배웠다.', minSentences: 2, minChars: 30 }, target: { selfCheck: ['계획과 결과의 사실을 썼다', '배운 점을 썼다'] } },
            { prompt: '고등학교에서 이어 갈 계획까지 넣어 성찰 글을 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 7 }, target: { selfCheck: ['계획과 결과의 사실을 썼다', '느낀 점을 썼다', '배운 점을 썼다', '다음에 할 일을 썼다', '고등학교에서 이어 갈 방법을 썼다'] } }),
            { type: 'choice', prompt: '성찰 글의 \'배운 점\'으로 가장 알맞은 문장은?', options: ['재미있었다', '비 오는 날 대안을 미리 계획해야 한다는 것을 배웠다', '다시는 봉사를 안 하겠다'], answer: 1, difficulty: 0.2, explain: '배운 점은 다음 봉사에 쓸 수 있는 깨달음이에요.' },
          ],
        },
        worksheet: {
          title: '봉사 성찰',
          items: [
            { type: 'short', prompt: '이번 봉사의 계획과 결과를 견주어 성찰 글을 써요. (걷지 않아요.)' },
            { type: 'check', prompt: '내 성찰 글을 점검해요.', options: ['사실', '느낌', '배움', '다음'] },
          ],
          easy: { note: '틀을 채워도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '계획은 ___였고 실제로는 ___했다. 그래서 ___을 배웠다.', answer: '(예) 봉투 10개, 8개를 모았다, 비 오는 날 대안이 필요하다는 것' }] },
        },
      }),
      M('wrap.next', {
        title: '고등학교에서 이어 갈 봉사', method: '이어 갈 방법 고르기', tool: 'timer', minutes: 7,
        levels: { easy: '이어 갈 방법 카드 2장(돌아보기 정리·관심 분야 정하기)을 차례로 놓는다.', base: '이어 갈 방법 카드 3장을 차례로 놓는다.', challenge: '카드 4장을 놓고, 고등학교 첫 달에 할 일을 정했는지 점검 칸까지 표시한다.' },
        wrap: {
          teacher: '"중학교에서 한 봉사를 고등학교에서 이어 가려면 무엇부터 해야 할까요?" 이어 갈 방법 카드를 차례로 놓게 하고, 첫 달에 할 일 하나를 정해 보게 한다. "고등학교는 공부만 해도 바쁘니 봉사는 끝"이라는 학생에게 "작은 봉사라도 관심 분야와 이으면 고등학교 생활과 함께 갈 수 있지 않을까요?"라고 되묻는다. 학생 자신의 진로 결정은 묻거나 채점하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '봉사 이어 가기', cards: ['고등학교 봉사 동아리·자치 활동 알아보기', '중학교 봉사 기록 정리하기', '내 관심 분야와 봉사 잇기'] },
              prompt: '고등학교에서 봉사를 이어 갈 방법 카드를 차례로 놓아요.', target: { order: ['중학교 봉사 기록 정리하기', '내 관심 분야와 봉사 잇기', '고등학교 봉사 동아리·자치 활동 알아보기'] }, difficulty: 0.2 },
            { prompt: '봉사를 이어 갈 방법 카드 두 장을 차례로 놓아요.', toolOptions: { cards: ['내 관심 분야와 봉사 잇기', '중학교 봉사 기록 정리하기'] }, target: { order: ['중학교 봉사 기록 정리하기', '내 관심 분야와 봉사 잇기'] } },
            { prompt: '이어 갈 방법 카드 네 장을 차례로 놓고, 첫 달 계획을 정했는지 표시해요.', toolOptions: { cards: ['고등학교 봉사 동아리·자치 활동 알아보기', '첫 달에 한 번 참여해 보기', '중학교 봉사 기록 정리하기', '내 관심 분야와 봉사 잇기'] }, target: { order: ['중학교 봉사 기록 정리하기', '내 관심 분야와 봉사 잇기', '고등학교 봉사 동아리·자치 활동 알아보기', '첫 달에 한 번 참여해 보기'], selfCheck: ['첫 달에 할 일 하나를 정했다'] } }),
            { type: 'choice', prompt: '"문제가 생기면 봉사를 그만두면 된다"에 대한 답으로 가장 알맞은 것은?', options: ['맞다, 그만두는 게 안전하다', '멈추고 원칙대로 대응한 뒤, 바꿔서 이어 갈 수 있다', '문제는 숨기면 된다'], answer: 1, difficulty: 0.2, explain: '멈추는 것과 그만두는 것은 달라요. 바꿔서 이어 가요.' },
          ],
        },
        worksheet: {
          title: '봉사 이어 가기',
          items: [
            { type: 'short', prompt: '고등학교에서 이어 가고 싶은 봉사 한 가지를 써요. (걷지 않아요.)' },
            { type: 'blank', prompt: '첫 달 계획을 써요. (걷지 않아요.)', text: '고등학교 첫 달에 ___을(를) 한 번 해 볼게요.', answer: '자기 계획' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
