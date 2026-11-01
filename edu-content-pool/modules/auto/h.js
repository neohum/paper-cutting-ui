/* 창체 자율·자치활동 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 auto 고.
 * 근거: 교육부 고시 제2022-33호 [별책 40] 창의적 체험활동 교육과정 <표 2>(p.8) 자율·자치활동 6개 예시 활동
 *   (자율: 주제 탐구·적응 및 개척·프로젝트형 봉사 / 자치: 기본생활습관 형성·관계 형성 및 소통·공동체 자치)과 <표 5>(p.13-14) 고 운영 중점 — sources/changche/research-changche.md §1.
 * 고 기준: 실제 자료 분석·토론(찬반 근거)·제안서·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 이 영역의 원칙:
 *   · 학생 자치·프로젝트형 봉사·주제 탐구·진로·자립 적응은 모두 '가상 학교'(가상 고등학교·가상 동네)와 가명 한두 글자 인물로 다룬다.
 *   · 학생 자신의 가정·성적·진로 결정은 채점하지 않는다 — 자기 탐색은 걷지 않는 활동지(제출·채점 없음)·selfCheck 로만 둔다.
 *   · 특정 학교·지역·단체·기업 이름을 쓰지 않는다('가상 복지관', '가상 구청', '가상 기업' 등으로 쓴다).
 *   · 정책 제안·토론은 근거를 따지는 활동이다 — 정답·정치적 입장을 정하지 않고, 실제 정당·정치인을 언급하지 않는다.
 *   · 수치 자료(그래프·예산)는 모두 '가상'이다(화면 제목에 밝힘). 피해 경험을 묻지 않는다.
 * 주제 18개 × 8모듈 = 144모듈(체계도 계획 전부).
 *
 * 교구 한계로 계획을 바꾼 곳:
 *   g10-adapt.activity.signal: body 에 머리·얼굴 칸이 없어 두통 신호는 빼고 목·어깨·눈·가슴·배·허리로 고른다.
 *   g10-adapt.activity.plan·g10-topic.activity.design: 학생 자신의 과목·진로 계획을 채점하지 않도록 교구 문항은 가상 인물(하윤·태오)의 계획으로 하고, 내 계획은 걷지 않는 활동지로 옮겼다.
 *   g10-adapt.wrap.buddy·g10-habit.wrap.timer 등 정리 모듈: 출구 질문에는 단계별 판이 없어 계획의 '2번/3번'·'15분/25분' 차이는 교사 진행으로 적었다. 25분 집중 구간은 8분 정리 시간에 할 수 없어 3분 맛보기를 실제로 하고 25분 계획은 타이머로 세운다.
 *   g10-habit.intro.log·g10-habit.activity.cycle: chart 는 목표선을, timeline 은 되돌아가는 화살표를 그리지 못한다 — 목표선은 칠판에 긋고, 되돌아가기는 '조정 뒤 다시 실행·다시 점검' 여섯 칸 차례로 나타냈다.
 *   g10-self.wrap.trial: 8분 안에 모의 법정을 열도록 심리·변론·판결을 2분씩으로 줄였다.
 *   g10-serve.wrap.interview: timer 기록판은 수만 받아 면담 답은 활동지에 글로 적고, 교구는 면담 예절 점검·시간 계획으로 판정한다. 실제 담당자가 없으면 교사가 가상 공부방 담당자 역을 한다.
 *   g10-self.wrap.forum: 의견 내용은 기록판에 담을 수 없어 찬성·반대·소수 의견 수를 적고 소수 의견 글은 활동지에 쓴다.
 *   g11-adapt.intro.curve·g11-self.intro.local·g11-serve.intro.map·g11-rel.intro.vote: 도입 교구는 시연 한 판이라 계획의 '사건 표시·범례·이동 시간·두 번째 그래프'는 교사가 말로 진행하는 단계로 적었다.
 *   g11-habit.wrap.remix: collage 조각에 이용 허락 정보를 담을 수 없어 '별 조각 = 출처 모르는 그림(쓰지 않기)'으로 정해 판정하고, 출처 칸은 활동지에 쓴다.
 *   g11-habit.wrap.remix·g11-serve.wrap.share·g11-rel.wrap.minutes·g11-topic.wrap.peer 등 정리 모듈: 출구 질문은 단계별 판이 없어 계획의 '조각 3·5개, 빈칸 2·4개, 질문 2·4개' 차이는 교사 진행으로 적고 판정은 가장 낮은 기준(조각 3개 이상 등)으로 했다.
 *   g11-rel.activity.deliberate·g11-self.wrap.collect·g11-self.wrap.report: timer 기록판은 수만 받아 표결·의견은 수(찬성·반대·소수 의견 수)로 기록하고, 소수 의견의 글은 활동지 회의록에 쓴다.
 *   g11-serve.activity.visit: 실제 기관 방문은 교구가 판정할 수 없어 안전 점검·타이머 계획·기록 입력(수만, 이름 없이)·스스로 점검으로 판정한다. 방문이 어려운 학급은 교실 모의 활동으로 같은 문항을 한다.
 *   g11-adapt.activity.cause·activity.reset·activity.story·wrap.routine: 계획의 '내 원인·내 이야기·내 계획'은 채점하지 않도록 걷지 않는 활동지로 옮기고, 교구 문항은 가상 인물로 했다.
 *   g12-adapt.activity.week: clock 문항 수는 단계마다 같아 계획의 '3·5구간'은 다섯 구간 공통 + 쉬움 30분 단위·짧은바늘 자리 표시로, '주말까지'는 도전 단계 마지막 문항을 주말 기상 시각으로 바꿔 나타냈다.
 *   g12-adapt.activity.help: wordcards 짝(match)은 영어 낱말용이라 상황↔방법·도움 받을 곳 잇기를 빈칸 채우기(fill)로, 첫마디는 고르기(pick)로 했다.
 *   g12-adapt.intro.compare·g12-rel.intro.*·g12-self.intro.*·g12-topic.intro.*: 도입 교구는 시연 한 판뿐이라 계획의 장면 수(1·2·3장면, 2·3·4짝)·두 번째 그래프·대안 말하기는 교사 진행으로 levels 에 적었다.
 *   g12-serve.intro.six: sortboard 바구니는 4개까지라 시연은 자율활동 세 갈래만, 자치활동 세 갈래는 칠판에서 함께 떠올린다.
 *   g12-*.wrap.*(timer): 출구 질문에는 단계별 판이 없어 계획의 '1바퀴·2바퀴', '1통·2통', '1개·3개' 차이는 교사 진행으로 적고, 판정은 타이머 계획·안전 점검·스스로 점검·기록판 수로 했다.
 *   g12-topic.wrap.lab·g12-serve.wrap.fair·g12-self.wrap.decide·g12-rel.wrap.debate: timer 기록판은 수만 받아 출처·날짜·소수 의견·합의점 글은 활동지에 쓴다.
 *   g12-self.activity.budget·g12-habit.activity.budget: economy 는 돈(원)만 세어 예산을 가상 원 금액으로 두었다.
 *   g12-habit.wrap.check: 계획의 '도움 기관까지'는 출구 교구 판정이 아니라 활동지 문항(함께 확인할 사람·곳)으로 두었다.
 * 
 * 사람 확인: (근거 파일 research-changche.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   g10-adapt.activity.choose: 원하는 과목이 학교에 열리지 않을 때 '다른 학교와 함께 여는 수업·온라인 수업'을 알아볼 수 있다는 안내, 과목 변경 기간·절차 — 교육부 고교학점제 누리집·시도교육청 공동교육과정 안내·각 학교 교육과정 편성 안내
 *   g10-adapt.activity.signal: 학업 스트레스의 몸 신호(목·어깨 뻣뻣함·눈 피로·두근거림·배 아픔·잠들기 어려움)와 '신호가 이어지면 담임·상담 선생님·Wee 클래스·보건실' 도움 경로 — 교육부 Wee 프로젝트·학생정신건강지원센터·국가정신건강정보포털
 *   g10-habit.wrap.timer: '25분 집중·5분 쉬기'는 의학 기준이 아니라 수업에서 정한 우리 반 연습 값(화면·교사 메모에 밝힘) — 확인 불필요, 바꾸려면 학습 상담 자료(교육부·Wee 학습 상담)
 *   g10-habit.activity.cycle·activity.adjust: 학습 자기 조절 네 단계(계획·실행·점검·조정)와 '나누어 되풀이하면 오래 기억에 남는다' — 교육부·한국교육개발원 자기주도학습 자료
 *   g10-rel.activity.nvc·activity.write·wrap.practice: 비폭력 대화 네 단계(관찰·느낌·바람·부탁)의 뜻과 예시 — 교육부·시도교육청 회복적 생활교육·관계 중심 생활교육 자료
 *   g10-rel.activity.source·activity.judge: 근거 따지기 기준(출처·관련성·대표성), 스스로 응답한 누리집 조사의 쏠림 — 한국언론진흥재단 미디어 리터러시 자료·통계청 통계교육 자료
 *   g10-self 전체: 자치법정 다섯 단계(사건 접수·심리·변론·판결·성찰 활동)와 역할(판사·배심원·변호인), 친분 있는 판단자의 회피 원칙 — 법무부 법교육(청소년 자치법정) 자료·각 학교 자치법정 운영 규정
 *   g10-self.activity.fix·wrap.forum: 학교 규칙 개정 절차(학생회·학교운영위원회 등) — 초·중등교육법 시행령(학교규칙)·각 학교 학칙. 수업에서는 가상 학교 규칙만 다룬다
 *   g10-topic.activity.type·activity.ethics·intro.case: 연구 부정 세 갈래(위조·변조·표절)의 뜻 — 교육부 「연구윤리 확보를 위한 지침」·한국연구재단 연구윤리정보센터
 *   g10-topic.wrap.cite: 참고문헌 표기 순서(저자·연도·제목·출판사 / 글쓴이·글 제목·확인한 날·누리집) — 학교 탐구 보고서 양식·한국연구재단 연구윤리정보센터 인용 안내
 *   g10-topic.activity.design·activity.survey(g10-serve): 사람에게 묻는 탐구·조사는 동의를 받고 이름 없이 한다는 원칙 — 교육부 「연구윤리 확보를 위한 지침」·개인정보보호위원회 안내
 *   g10-serve 전체: 아이와 만나는 봉사의 안전 약속(기관 안에서만, 기관 담당자 동행, 귀가·연락 방법, 개인 방문·연락처 교환 금지)과 사진 동의 원칙 — 1365 자원봉사포털·행정안전부 자원봉사 안내·각 기관 규칙
 *   g10-*: 그래프·설문·점수 값은 모두 수업용 가상 예시(화면 제목에 '가상'·'모둠 예시'로 밝힘) — 확인 불필요
 *   g11-adapt.intro.fail·activity.story·wrap.share: 고정 관점·성장 관점(마음가짐) 구분과 '실패를 배운 점으로 해석' — 학교 상담·진로 교육 자료(교육부 진로교육·Wee 프로젝트 자료)에서 표현 확인
 *   g11-adapt.activity.cause: 슬럼프 원인 네 갈래(목표·방법·몸과 마음·환경)는 수업용 분류 틀 — 학교 상담 자료(교육부·시도교육청 학습 상담 안내)
 *   g11-habit.intro.life·wrap.audit: 물건의 생애(원료·생산·운송·사용·버림) 단계 설명 — 환경부·한국환경산업기술원 전과정평가·환경성적표지 안내
 *   g11-habit.activity.buy·activity.compare: 수리·재사용·전자제품 회수가 자원 소비를 줄인다는 일반 설명, 수리비 '새 제품의 4분의 1'은 가상 설정 — 환경부 자원순환 안내·한국소비자원
 *   g11-habit.activity.check: 허위 정보 확인 차례(출처→날짜→다른 자료 대조→공유 판단) — 방송통신위원회·한국언론진흥재단 미디어 리터러시 자료
 *   g11-habit.intro.post·activity.rules: 혐오 표현을 '집단 전체를 깎아내리는 말'로 설명한 문구 — 국가인권위원회 혐오 표현 대응 안내
 *   g11-habit.activity.rules·wrap.remix: 남의 자료를 쓸 때 이용 허락 표시 확인·출처 표시, 허락 없으면 링크 — 한국저작권위원회 공유저작물·이용 허락(CCL) 안내
 *   g11-rel.activity.steps·activity.deliberate·wrap.minutes: 숙의 절차 차례(발표→질문→수정안→결정→소수 의견 기록)는 수업용 회의 틀 — 교육부·시도교육청 학생 자치 회의 운영 안내
 *   g11-self.activity.transparency·wrap.report: 학생회 집행 내역 공개 항목(사업·금액·날짜·영수증 대조·초과 까닭)과 담당 교사 확인 — 각 학교 학생회 회칙·시도교육청 학생 자치 예산 운영 안내
 *   g11-self.activity.steps·activity.proposal: 정책 제안 절차와 제안서 요소(문제·근거·대안 비교·기대 효과), 기관 답변 뒤 다시 제안 — 지방자치단체 청소년 참여 제안 제도·국민권익위원회 국민 제안 안내(제출처는 학교가 확인)
 *   g11-topic.activity.corr·activity.place·activity.write: 상관과 인과·셋째 요인·표본 대표성 설명과 보고서 짜임(서론·방법·결과·논의·참고문헌) — 고등학교 수학(통계)·과학탐구실험 교과서 서술
 *   g11-topic.intro.axis·activity.redraw: 잘린 축은 물결선·시작 수를 표시해야 한다는 그래프 표현 원칙 — 통계청 통계 시각화 안내·수학 교과서
 *   g11-serve.activity.agenda·activity.safety·activity.visit·wrap.call: 기관 사전 협의 항목, 인솔·이동·날씨 멈춤·응급 시 담당자 먼저 알리기, 개인 연락처 교환·개인 방문 금지 — 1365 자원봉사포털·행정안전부 자원봉사 활동 안전 안내, 학교 교외 체험 활동 운영 규정(보호자 동의)
 *   g11-serve.activity.safety: 천둥 칠 때 나무 아래를 피한다 — 행정안전부 국민재난안전포털 낙뢰 행동 요령
 *   g11-serve.intro.metric·activity.indicator·wrap.share: 산출(활동량)과 성과(변화) 구분, 이름 없는 측정 — 1365 자원봉사포털·한국중앙자원봉사센터 성과 관리 자료
 *   g11-serve.intro.map: 걷는 빠르기 1분 약 70m는 어림용 '우리 반 약속' 값
 *   g12-adapt.activity.week·activity.plan: '7시간 수면'은 수업 연습용 예시 값 — 질병관리청 국가건강정보포털 청소년 수면 권고로 확인
 *   g12-adapt.activity.anxiety·activity.help·intro.compare: 진로 불안 다루기(걱정과 할 일 나누기·SNS 끄기·숨 고르기)와 학교 안 도움 경로(담임·진로·상담 선생님·Wee 클래스·보건실) — 교육부 Wee 프로젝트·학교 상담 안내
 *   g12-habit.intro.spend·activity.budget·activity.pie: 고정·변동 지출, 필요·욕구, 비상금 먼저 떼기는 일반 금융 교육 수준, 금액·비율은 가상 — 금융감독원 금융교육·서민금융 안내
 *   g12-habit.intro.offer·activity.rights·wrap.practice·wrap.check: 통장·카드 빌려주기, 신분증 사진 요구, 서두르게 함이 위험 신호라는 문장(처벌 여부·금액 없음) — 금융감독원 대포통장·불법 금융 안내, 경찰청 사이버범죄 안내
 *   g12-habit.activity.contract: 임대차 계약 전 계약서 끝까지 읽기·빈칸 채우기·관리비·수리 책임·보증금은 기록이 남는 방법으로 주고 영수증 받기 — 국토교통부 주택 임대차 안내·법무부 생활법률
 *   g12-habit.activity.contract·activity.rights: 근로 조건(시간·시급·쉬는 시간·지급일)을 글로 남기고 사본을 받는다는 문장 — 고용노동부 근로계약서 안내(나이·금액·조문 번호는 쓰지 않음)
 *   g12-habit.activity.rights: '선거에 참여할 수 있다'를 권리 카드로 둠(나이 기준은 쓰지 않음) — 중앙선거관리위원회 안내. 성인 권리·책임의 일반 구분 — 법무부 생활법률
 *   g12-habit.wrap.check·activity.contract: '공공 상담 창구'(소비자·노동 상담 등)는 이름·번호 없이 자리 글로 둠 — 교사가 한국소비자원·고용노동부 안내로 확인해 채움
 *   g12-topic.activity.fake·activity.steps·wrap.lab·intro.problem: 사칭 문자 신호(공공기관 사칭·과태료 위협·링크 본인 인증), 링크 대신 공식 주소 직접 입력, 게시일·수정일 확인, 검색 광고 구별 — 경찰청·한국인터넷진흥원 스미싱 안내, 방송통신위원회
 *   g12-topic.activity.steps·intro.problem: 이사 뒤 전입 신고·건강 보험 주소 변경을 생활 문제 예로 씀(기한·서류 세부는 쓰지 않음) — 행정안전부 전입 신고 안내, 국민건강보험공단 안내
 *   g12-topic.activity.fake: '공공 지원 신청을 미끼로 상담료를 요구하는 광고는 의심한다' — 금융감독원·한국소비자원 피해 예방 안내(가상 '청년 월세 지원' 제도의 이름·조건은 실제 제도가 아님)
 *   g12-serve.activity.match: 주민 제안 창구로 동네 문제를 알리는 시민 참여 경로 — 행정안전부·지자체 주민 참여(국민 제안) 안내
 *   g12-serve.intro.six: 자율·자치 여섯 갈래는 근거 파일 research-changche §1-3 <표 2> 그대로(확인 불필요)
 *   g12-self.activity.access·activity.budget: 졸업 행사 접근성(경사로·자막·수어 화면) 준비 항목 — 보건복지부·한국장애인개발원 접근성 안내, 가격은 가상
 *   g12-rel.activity.steelman·wrap.debate: '상대 주장을 가장 강한 형태로 요약한 뒤 반론' 토론 규칙은 수업용 일반 토론 방법 — 교육청 토론 교육 자료
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'auto', band: '고', topic: `auto.h.${topic}`, grades }, o, { id: `auto.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(mindmap·story 등 카드 판 sort): groups = 칸마다 카드 글 목록(글 = 카드 id). 쉬움 = 칸마다 앞 k장, 도전 = hard(칸마다 더할 카드) 덧붙임. traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 분류판(sortboard 글 카드 모드): SORTQ 와 같되 mode 를 쓰지 않는다. 쉬움 = 칸마다 앞 k장, 도전 = hard 덧붙임(+ traps)
  const SBQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
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
  // 갈림길(dilemma): 나무를 depth 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 1번, 기본 = 2번, 도전 = 나무 전체(3번). 근거 카드는 모든 단계에서 고른다. hardReasons = 도전에서 더 고를 근거(근거 수를 늘리는 도전)
  const DILQ = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {}, hardReasons = null } = {}) => {
    const at = (n, g = good) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: g });
    const full = depth(scene);
    const it = { prompt, toolOptions: Object.assign({ scene: cut(scene, 2), reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } };
    if (full > 2) it.levels.challenge = { prompt: pfx(prompt, `갈림길 ${full}개`), toolOptions: { scene }, target: at(full, hardReasons || good) };
    else if (hardReasons) it.levels.challenge = { prompt: pfx(prompt, `근거 ${hardReasons.length}장`), target: at(full, hardReasons) };
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

  const MODS = [];

  // ======================================================================================================
  // 10학년 1. 과목 선택과 새 학급 관계 (적응 및 개척 활동)
  // ======================================================================================================
  {
    const M = MOD('g10-adapt', [10]);
    const CRIT = [['관심·흥미', 11], ['희망 진로와의 연결', 9], ['친구가 고른 과목', 6], ['학업 부담', 5], ['학교 개설 여부', 3]];
    const CHOOSE = { text: '가상 고등학교 1학년 하윤. 2학년 선택 과목 신청 마감이 일주일 남았다. 생명 분야에 관심이 있지만, 친한 친구들은 모두 다른 과목을 고른다.', who: '하윤', motif: 'book', choices: [
      { id: 'friend', text: '친구들과 같은 과목을 신청한다', result: '함께 수업을 듣게 되어 마음이 놓인다.', impact: [{ who: '하윤', text: '관심 분야 과목은 비워 둔다', tone: -1 }],
        next: { text: '2학년 봄, 수업 내용이 하윤의 관심과 거리가 멀어 지루하다.', choices: [
          { id: 'endure', text: '그냥 한 해를 버틴다', result: '수업 시간에 집중하기 어렵다.', impact: [{ who: '하윤', text: '관심 분야를 키울 기회를 놓친다', tone: -1 }], ending: '친구를 따라 고른 과목은 함께 앉아도 내 공부가 되기 어렵다.' },
          { id: 'ask', text: '담임 선생님께 다음 학기 변경 방법을 묻는다', result: '다음 학기에는 관심 과목을 더할 수 있다는 안내를 받는다.', impact: [{ who: '하윤', text: '늦었지만 방향을 다시 잡는다', tone: 0 }], ending: '처음 선택이 어긋나도 물어보면 고칠 길이 생긴다.' }] } },
      { id: 'look', text: '관심·진로·부담·개설 여부를 표로 견준다', result: '생명과학 과목이 관심과 진로에 가장 가깝다는 것을 확인한다.', impact: [{ who: '하윤', text: '고른 까닭을 스스로 설명할 수 있다', tone: 1 }],
        next: { text: '그런데 그 과목은 신청자가 적어 우리 학교에 열리지 않을 수도 있다는 말을 듣는다.', choices: [
          { id: 'consult', text: '진로 선생님께 다른 수강 길이 있는지 묻는다', result: '다른 학교와 함께 여는 수업이나 온라인 수업이 있는지 알아보기로 한다.', impact: [{ who: '하윤', text: '포기하지 않고 길을 찾는다', tone: 1 }],
            next: { text: '함께 여는 수업은 방과 후라 이동 시간이 든다. 학업 부담이 걱정된다.', choices: [
              { id: 'plan', text: '주간 시간표를 그려 보고 다른 과목 부담과 함께 따진다', result: '부담이 큰 다른 과목 하나를 덜어 시간을 맞춘다.', impact: [{ who: '하윤', text: '관심과 부담을 함께 지킨다', tone: 1 }], ending: '좋은 선택은 관심과 부담을 함께 따져 지킬 수 있는 계획까지 세운다.' },
              { id: 'all', text: '부담은 생각하지 않고 모두 신청한다', result: '학기 중반에 과제가 몰려 잠이 줄어든다.', impact: [{ who: '하윤', text: '지치기 시작한다', tone: -1 }], ending: '관심만 보고 부담을 빼면 계획이 오래가지 못한다.' }] } },
          { id: 'give', text: '열리지 않을 것 같으니 아무 과목이나 고른다', result: '마감 날 빈칸을 채우듯 신청한다.', impact: [{ who: '하윤', text: '고른 까닭을 말할 수 없다', tone: -1 }], ending: '개설 여부는 포기의 까닭이 아니라 물어볼 까닭이다.' }] } },
      { id: 'easy', text: '성적 받기 쉽다는 과목만 고른다', result: '소문만 듣고 과목을 정한다.', impact: [{ who: '하윤', text: '관심·진로와의 연결을 따지지 않는다', tone: -1 }], ending: '소문은 근거가 아니다. 과목 안내서와 선생님께 확인한다.' }] };
    const CHOOSE_R = [{ id: 'fit', text: '관심과 희망 진로에 이어지는 과목이다' }, { id: 'load', text: '전체 시간표의 학업 부담을 함께 따졌다' }, { id: 'open', text: '개설 여부와 다른 수강 길을 확인했다' }, { id: 'friend', text: '친한 친구들이 모두 고른 과목이다', why: '친구와 함께 듣는 것은 좋지만, 과목을 고르는 근거는 내 관심·진로·부담이에요.' }, { id: 'rumor', text: '성적 받기 쉽다는 소문이 있다', why: '소문은 확인한 근거가 아니에요.' }];

    const INC_GOOD = ['점심시간에 혼자 있는 친구에게 같이 먹자고 한다', '모둠 역할을 정할 때 모두에게 먼저 묻는다', '새로 온 친구에게 학교 안 곳곳을 알려 준다', '대화에 늦게 낀 친구에게 무슨 이야기인지 알려 준다'];
    const INC_BAD = ['우리끼리 아는 말로만 이야기를 이어 간다', '자리를 맡아 두고 다른 친구는 못 앉게 한다', '모둠 과제에서 한 친구 몫만 남겨 둔다', '친구가 말할 때 다른 친구와 눈짓을 주고받는다'];

    const BODY = ['목', '어깨', '가슴', '배', '눈', '허리', '무릎', '발목'];
    const HELP_ASK = (q) => ({ q, choices: ['혼자 참고 시험이 끝날 때까지 기다린다', '담임 선생님이나 상담 선생님께 말한다', '친구에게만 털어놓고 비밀로 한다'], why: ['신호가 계속되면 혼자 견디기보다 학교 안 도움 길을 써요.', '', '친구의 위로도 힘이 되지만, 계속되는 신호는 어른과 함께 살펴요.'] });

    MODS.push(
      M({
        id: 'intro.criteria', type: 'intro', title: '과목 선택 기준, 우리는 무엇을 볼까',
        method: '과목 선택 기준 순위 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 셋(관심·진로·친구)만 짚으며 가장 큰 막대와 작은 막대를 함께 읽는다.', base: '기준 다섯 막대를 모두 읽고, 가장 많이 고른 기준과 가장 적게 고른 기준을 견준다.', challenge: '그래프를 본 뒤 걷지 않는 활동지에 내 기준 다섯 개의 순위를 매기고, 반의 순위와 다른 곳 하나를 짚는다.' },
        intro: {
          teacher: '"가상 고등학교 1학년 한 반에게 \'과목을 고를 때 가장 먼저 보는 기준\'을 물었어요(예시 자료). 어느 막대가 가장 클까요?" 시연 단추로 가장 큰 막대를 고르는 모습을 보인다. "개설 여부는 3명뿐이니 안 봐도 된다"는 말이 나오면 "아무리 원해도 열리지 않으면 신청할 수 없어요. 적게 고른 기준이 덜 중요한 기준일까요?"라고 되묻는다. 친구가 고른 과목 막대도 작지 않다는 점을 가리키며, 오늘은 기준을 함께 따져 과목을 고르고 새 학급에서 관계를 맺는 법을 다룬다고 밝힌다.',
          student: '가상 학급의 과목 선택 기준 그래프를 보고, 가장 많이 고른 기준을 찾아보세요. 내 기준과 같은지 속으로 견주어 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '과목을 고를 때 먼저 보는 기준(가상 학급 예시)', unit: '명', yLabel: '학생 수', xLabel: '기준', data: CRIT, question: '가장 많은 학생이 먼저 보는 기준은?', choices: CRIT.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart on a classroom board with five bars labelled by paper tags, a paper course guide booklet and a pencil on a desk in front, soft spring light', banner: '무엇을 보고 과목을 고를까?', extra: [{ motif: 'book', x: 300, y: 96 }] },
        },
        notes: '그래프는 수업용 가상 예시다. 우리 반 학생에게 실제 기준을 손 들어 묻지 않고, 내 순위는 걷지 않는 활동지에만 적게 한다.',
      }),
      M({
        id: 'intro.lonely', type: 'intro', title: '새 학급 점심시간 장면',
        method: '새 학급 장면 마음 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 둘(혼자 먹는 친구, 같이 먹자는 말을 들은 친구)의 마음만 짝지어 보인다.', base: '주변 행동 셋에 따라 달라지는 마음을 짝짓는다.', challenge: '장면 넷을 모두 짝짓고, 같은 장면에서 다른 마음이 들 수도 있는 까닭을 말한다.' },
        intro: {
          teacher: '"새 학기 첫 주, 가상 고등학교 급식실이에요. 혼자 앉은 친구 곁에서 사람들이 하는 행동에 따라 그 친구의 마음은 어떻게 바뀔까요?" 시연 단추로 장면과 마음 카드가 짝지어지는 모습을 보여 준다. "혼자 먹는 걸 좋아할 수도 있잖아요"라는 말이 나오면 "맞아요. 그래서 먼저 \'같이 먹을래?\'라고 묻고, 친구가 고르게 하는 거예요"라고 답한다. 소외는 큰 사건보다 작은 행동이 쌓여 생긴다는 점을 짚는다.',
          student: '새 학급 점심시간 장면을 읽고, 주변 사람의 행동에 따라 혼자 앉은 친구의 마음이 어떨지 마음 카드와 짝지어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['외로움', '편안함', '불안', '고마움'], slots: [{ id: 's1', label: '아무도 말을 걸지 않고 다들 무리 지어 앉는다' }, { id: 's2', label: '옆자리 친구가 "같이 먹을래?"라고 묻는다' }, { id: 's3', label: '뒤에서 자기 이야기를 하는 듯한 웃음소리가 들린다' }, { id: 's4', label: '먹고 나서 함께 교실로 가자고 한다' }] }, sequence: [{ match: { s1: '외로움', s2: '고마움', s3: '불안', s4: '편안함' } }] },
          art: { draw: 'a paper school cafeteria with long tables, one student sitting alone at the end of a table, another student with a tray walking toward them, warm paper light', banner: '같이 먹을래?', extra: [{ motif: 'flower', x: 300, y: 96, color: 'peach' }] },
        },
        notes: '장면은 가상이다. 학생에게 자기가 혼자였던 경험을 말하게 하지 않는다.',
      }),

      M({
        id: 'activity.choose', type: 'activity', title: '과목 선택 갈림길 따라가기',
        method: '과목 선택 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거 카드 두 장을 고른다.', base: '두 번째 갈림길(개설되지 않을 수도 있음)까지 가 보고 근거 두 장을 고른다.', challenge: '세 번째 갈림길(학업 부담)까지 가서 근거 세 장(관심·부담·개설 여부)을 고르고 다른 길과 견준다.' },
        activity: {
          title: '하윤의 과목 신청', tool: 'dilemma',
          teacher: '"가상 인물 하윤이는 생명 분야에 관심이 있는데, 친한 친구들은 다른 과목을 골라요. 여러분이 하윤이라면 어떻게 할까요?" 선택마다 하윤에게 생긴 결과를 소리 내어 읽게 한다. \'친구와 같은 과목\'을 고른 학생에게 "봄 학기 장면에서 하윤이는 그 수업에서 무엇을 얻었나요?"라고 묻는다. \'아무 과목이나\'를 고르는 학생에게는 "개설 여부는 포기할 까닭일까요, 물어볼 까닭일까요?"라고 되묻는다. 친구와 함께하는 즐거움도 소중하지만 과목을 고르는 근거는 관심·진로·부담·개설 여부라는 점을 짚는다.',
          task: '하윤의 과목 신청 갈림길을 따라가며 결과를 보고 고른 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('하윤이 관심과 진로, 부담을 함께 따지는 길을 고르고 근거를 고르세요.', CHOOSE, [['look', 'consult', 'plan']], CHOOSE_R, ['fit', 'open'], { d: 0.4, hardReasons: ['fit', 'load', 'open'] }),
            EXPLOREQ('고르지 않은 다른 길(친구 따라 고르기·소문 듣고 고르기)도 끝까지 가 보고 결과를 견주세요.', CHOOSE, CHOOSE_R, ['다른 길의 끝 장면을 확인했다', '하윤에게 어떤 영향이 갔는지 짚었다'], { d: 0.35 }),
            DILQ('수강 신청 뒤 하윤의 친구 도윤이 과목을 바꾸고 싶어 하는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '도윤은 신청한 과목 하나가 생각보다 어렵고 진로와도 멀다고 느낀다. 변경 기간은 이번 주까지다.', who: '도윤', motif: 'book', choices: [
              { id: 'quiet', text: '말하기 번거로워 그냥 둔다', result: '변경 기간이 지나간다.', impact: [{ who: '도윤', text: '한 학기 내내 맞지 않는 수업을 듣는다', tone: -1 }], ending: '변경 기간은 정해져 있다. 놓치면 바꿀 기회도 지나간다.' },
              { id: 'check', text: '과목 안내서와 내 시간표를 다시 본다', result: '진로와 더 가까운 과목이 같은 시간에 열린다는 것을 찾는다.', impact: [{ who: '도윤', text: '바꿀 근거를 찾는다', tone: 1 }],
                next: { text: '바꾸려면 담임 선생님 상담과 신청서가 필요하다.', choices: [
                  { id: 'talk', text: '담임 선생님께 근거를 말하고 절차를 묻는다', result: '변경 신청서를 내고 새 과목으로 옮긴다.', impact: [{ who: '도윤', text: '스스로 고른 과목을 듣는다', tone: 1 }], ending: '근거를 갖고 절차를 밟으면 선택을 고칠 수 있다.' },
                  { id: 'skip', text: '절차 없이 새 과목 교실에 그냥 들어간다', result: '출석이 원래 과목으로 잡혀 결석 처리가 될 수 있다.', impact: [{ who: '도윤', text: '문제가 더 커진다', tone: -1 }], ending: '선택을 바꿀 때는 학교가 정한 절차를 거친다.' }] } }] },
              [['check', 'talk']], [{ id: 'base', text: '진로와 더 가까운 과목이라는 근거가 있다' }, { id: 'rule', text: '정해진 변경 기간과 절차를 지킨다' }, { id: 'hard', text: '어려우면 무조건 바꾸는 것이 낫다', why: '어려움만으로는 근거가 약해요. 진로·관심과 견주어 따져요.' }], ['base', 'rule'], { d: 0.35, more: { conclude: '과목 선택은 한 번에 끝나지 않아요. 근거를 다시 따지고 절차를 밟아 고칠 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '과목을 고를 때 내가 가장 먼저 볼 기준 두 가지와 그 까닭을 쓰세요(걷지 않음 — 나만 봐요).' }] },
        notes: '하윤·도윤은 가상 인물이다. 학생 자신의 실제 과목 선택을 발표시키거나 채점하지 않는다. 다른 수강 길(함께 여는 수업·온라인 수업)은 학교마다 다르므로 교사가 우리 학교 안내로 확인해 준다.',
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '학기 학업 계획서 쓰기',
        method: '학기 학업 계획서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '가상 인물 하윤의 과목 하나에 대해 문장 틀을 보고 목표·공부 방법을 쓴다.', base: '하윤의 과목 셋에 대해 학기 목표·주간 공부·점검 방법을 쓰고 기준표 세 항목을 점검한다.', challenge: '과목 셋 계획에 더해, 원하는 과목이 열리지 않을 때의 대안 과목까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '하윤의 학기 계획서', tool: 'rubric-writing',
          teacher: '"계획서는 \'열심히 하겠다\'가 아니라, 다음 주에 무엇을 몇 번 할지가 보여야 해요." 하윤의 가상 프로필(관심: 생명, 고른 과목: 생명과학·화학·심리학, 걱정: 수학 부담)을 칠판에 적고 기준표를 함께 읽는다. "목표: 1등급"처럼 결과만 쓴 학생에게 "그 목표에 가려면 이번 주에 무엇을 하나요? 지켰는지 어떻게 알 수 있나요?"라고 묻는다. 계획에는 근거·목표·점검 방법이 함께 있어야 고칠 수 있다는 점을 짚는다.',
          task: '가상 인물 하윤의 학기 학업 계획을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('하윤이 고른 과목 셋에 대해 고른 근거를 한 문장씩 쓰고 점검하세요.', '하윤(관심: 생명, 걱정: 수학 부담)이 생명과학·화학·심리학을 고른 근거를 과목마다 한 문장씩 쓰세요.', ['과목마다 근거를 썼다', '관심·진로·부담 가운데 둘 이상을 근거로 썼다', '친구·소문이 아닌 근거를 썼다'], { min: 60, max: 300, starter: '하윤이 생명과학을 고른 까닭은 ~이다.', sample: '하윤이 생명과학을 고른 까닭은 생명 분야에 관심이 있기 때문이다. 화학은 생명과학을 이해하는 데 바탕이 된다. 심리학은 사람에 대한 관심을 넓히고 수학 부담이 적다.', d: 0.3 }),
            { prompt: '하윤의 과목 셋에 대해 학기 목표·주간 공부·점검 방법을 넣은 학업 계획을 쓰고 점검하세요.', toolOptions: { topic: '하윤의 학기 학업 계획: 과목마다 목표 하나, 주마다 할 일, 지켰는지 확인할 방법을 쓰세요.', minChars: 90, maxChars: 400, sample: '생명과학은 단원마다 개념 지도를 그리는 것이 목표다. 주마다 수업 뒤 20분 복습을 세 번 한다. 금요일에 개념 지도를 짝에게 설명해 보며 점검한다. 화학과 심리학도 같은 방식으로 주간 할 일과 점검 날을 정한다.' }, target: { selfCheck: ['과목마다 목표를 썼다', '주마다 할 일을 횟수·시간으로 썼다', '지켰는지 확인할 방법을 썼다'] }, difficulty: 0.4,
              levels: {
                easy: { prompt: '하윤의 과목 하나(생명과학)에 대해 목표와 주간 공부 방법을 쓰고 점검하세요(과목 하나).', toolOptions: { topic: '하윤의 생명과학 계획: 학기 목표 하나와 주마다 할 일을 쓰세요.', minChars: 40, starter: '생명과학 목표는 ~이다. 이를 위해 주마다 ~를 ~번 한다.' }, target: { selfCheck: ['목표를 썼다', '주마다 할 일을 횟수·시간으로 썼다', '지켰는지 확인할 방법을 썼다'] } },
                challenge: { prompt: '과목 셋 계획에 더해, 심리학이 열리지 않을 때의 대안 과목과 그 근거까지 쓰고 점검하세요(대안 과목).', toolOptions: { minChars: 120 }, target: { selfCheck: ['과목마다 목표를 썼다', '주마다 할 일을 횟수·시간으로 썼다', '지켰는지 확인할 방법을 썼다', '대안 과목과 그 근거를 썼다'], mustInclude: [['대안', '대신']] } },
              } },
            RWQ('하윤의 계획이 한 달 뒤 어긋났을 때 고칠 규칙을 한두 문장으로 쓰고 점검하세요.', '하윤이 주간 복습을 두 주 연속 지키지 못했어요. 계획을 어떻게 고칠지 규칙을 쓰세요.', ['어긋난 원인을 짚었다', '고친 계획을 횟수·시간으로 썼다', '포기 대신 조정하는 말로 끝맺었다'], { min: 40, max: 250, starter: '두 주 연속 지키지 못하면 ~를 ~로 바꾼다.', d: 0.35, more: { conclude: '계획은 지키려고 세우지만, 어긋났을 때 고칠 규칙이 있어야 오래가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 학기 계획 초안을 써 보세요(걷지 않음 — 나만 봐요).', columns: ['과목', '학기 목표', '주마다 할 일', '점검 방법'], cells: [['', '', '', ''], ['', '', '', '']] }] },
        notes: '채점·자기 점검은 가상 인물 하윤의 계획으로 한다. 학생 자신의 계획은 걷지 않는 활동지에만 쓴다.',
      }),
      M({
        id: 'activity.include', type: 'activity', title: '소외 없는 관계 행동 나누기',
        method: '소외 없는 관계 행동 고르기', tool: 'sortboard', minutes: 18,
        levels: { easy: '행동 카드 4장을 포용·소외 바구니에 나누고, 틀리면 까닭을 듣고 다시 놓는다.', base: '행동 카드 6~8장을 나누고, 단체 대화방 장면에서도 같은 기준으로 나눈다.', challenge: '카드가 더해지고, 소외 행동을 포용 행동으로 바꾼 대안 카드를 골라 나눈다.' },
        activity: {
          title: '포용과 소외 바구니', tool: 'sortboard',
          teacher: '"새 학급에서 일부러 따돌리는 사람은 드물어요. 그런데 왜 혼자인 친구가 생길까요?" 카드를 놓을 때마다 "이 행동을 받은 사람은 대화에 들어올 수 있나요?"라고 묻는다. \'우리끼리 아는 말로만 이야기를 이어 간다\'를 포용에 넣는 학생에게 "우리끼리는 즐겁지만, 처음 온 친구는 그 말을 알아들을 수 있을까요?"라고 되묻는다. 소외는 의도가 아니라 받은 사람이 겪는 결과로 판단한다는 점을 짚는다.',
          task: '새 학급 행동 카드를 포용과 소외 바구니에 나누고, 소외를 바꿀 대안을 골라요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBQ('새 학급 교실의 행동 카드를 포용·소외 바구니에 나누세요.', ['포용', '소외'], [INC_GOOD.slice(0, 3), INC_BAD.slice(0, 3)], { k: 2, hard: [[INC_GOOD[3]], [INC_BAD[3]]], d: 0.25 }),
            SBQ('가상 학급 단체 대화방의 행동 카드를 포용·소외 바구니에 나누세요.', ['포용', '소외'], [
              ['새로 들어온 친구에게 반갑다고 인사를 남긴다', '공지를 못 본 친구에게 따로 알려 준다', '의견을 묻는 글에 모두 답할 시간을 준다'],
              ['한 친구 글에만 아무도 답하지 않는다', '몇 명만 따로 방을 만들어 반 일을 정한다', '친구가 올린 사진을 몰래 따로 돌려 본다'],
            ], { k: 2, hard: [['답이 늦은 친구를 기다렸다가 함께 정한다'], ['읽고도 대답하지 않는 것을 놀이처럼 한다']], d: 0.3 }),
            SBQ('소외 행동을 바꾼 카드를 \'포용으로 바꾼 대안\'과 \'아직 소외\' 바구니에 나누세요.', ['포용으로 바꾼 대안', '아직 소외'], [
              ['우리끼리 아는 말을 쓸 때 뜻을 풀어 말해 준다', '맡아 둔 자리를 비워 두고 같이 앉자고 한다', '모둠 과제 몫을 모두와 함께 나눈다'],
              ['다른 친구 몫을 대신 다 해 주고 말하지 않는다', '혼자인 친구를 불쌍하다며 여럿이 쳐다본다', '함께 앉되 그 친구에게는 말을 걸지 않는다'],
            ], { k: 2, hard: [['친구가 혼자 있고 싶은지 먼저 물어본다'], ['"너는 원래 조용하잖아"라고 대신 정해 버린다']], d: 0.35, more: { conclude: '포용은 거창한 일이 아니에요. 말을 풀어 주고, 자리를 내주고, 몫을 함께 나누는 작은 행동이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이번 주 우리 반에서 해 볼 포용 행동 하나를 구체적으로 쓰세요(언제·어디서·무엇을).' }] },
      }),
      M({
        id: 'activity.signal', type: 'activity', title: '스트레스 신호와 도움 길',
        method: '스트레스 위험 신호와 도움 경로', tool: 'body', minutes: 18,
        levels: { easy: '몸 그림에서 이름이 바로 보이는 상태로 신호가 나타난 곳 두 군데를 고른다.', base: '신호가 나타난 곳 네 군데를 이름 없이 고르고, 신호에 맞는 도움 길을 함께 고른다.', challenge: '상황마다 신호의 크기를 따져 담임·상담 선생님·보건실·보호자 가운데 알맞은 도움 길을 고른다.' },
        activity: {
          title: '몸이 보내는 신호', tool: 'body',
          teacher: '"공부 스트레스는 마음에만 오지 않아요. 몸이 먼저 신호를 보내기도 해요." 가상 인물 서진의 일주일 기록을 읽어 주고 신호가 나타난 몸의 자리를 고르게 한다. "스트레스는 원래 혼자 견디는 거예요"라는 말이 나오면 "신호가 두 주째 이어진다면, 혼자 견디는 것과 말하는 것 가운데 어느 쪽이 빨리 나아질까요?"라고 묻는다. 학교 안 도움 길(담임 선생님·상담 선생님·Wee 클래스·보건실)을 칠판에 적고, 내 신호를 발표하지 않는다는 약속을 먼저 한다.',
          task: '가상 인물의 스트레스 신호가 나타난 몸의 자리를 고르고, 알맞은 도움 길을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '시험 기간 서진은 목과 어깨가 뻣뻣하고 눈이 자주 피로하며 배가 자주 아파요. 신호가 나타난 곳을 모두 고르세요.', toolOptions: { mode: 'parts', parts: BODY }, target: { parts: ['목', '어깨', '눈', '배'] }, difficulty: 0.25,
              levels: { easy: { prompt: '시험 기간 서진은 목과 어깨가 뻣뻣해요. 신호가 나타난 곳 두 군데를 고르세요(두 신호).', target: { parts: ['목', '어깨'] } } } },
            { prompt: '서진은 발표 전날 가슴이 두근거리고 답답하며, 허리까지 아파 잠들기 어려웠어요. 신호가 나타난 곳을 고르고, 알맞은 도움 길을 고르세요.', toolOptions: { mode: 'parts', parts: BODY, ask: { q: '이 신호가 두 주째 이어진다면?', choices: ['시험이 끝날 때까지 참는다', '담임 선생님이나 상담 선생님께 말한다', '잠을 줄여 공부를 더 한다'], why: ['신호가 계속되면 혼자 참기보다 도움 길을 써요.', '', '잠을 줄이면 몸의 신호가 더 커져요.'] } }, target: { parts: ['가슴', '허리'], pick: 1 }, difficulty: 0.3,
              levels: { easy: { prompt: '서진은 발표 전날 가슴이 두근거리고 허리가 아팠어요. 신호가 나타난 곳 두 군데를 고르고, 알맞은 도움 길을 고르세요(두 신호).' } } },
            { prompt: '서진은 시험이 끝난 뒤에도 배가 계속 아프고 식사를 거의 못 해요. 신호가 나타난 곳을 고르고, 먼저 갈 곳을 고르세요.', toolOptions: { mode: 'parts', parts: BODY, ask: { q: '몸이 아파 수업 중 견디기 힘들 때 먼저 갈 곳은?', choices: ['보건실', '매점', '혼자 화장실'], why: ['', '먹을 것보다 먼저 몸 상태를 살펴요.', '혼자 있으면 도움을 받기 어려워요.'] } }, target: { parts: ['배'], pick: 0 }, difficulty: 0.3 },
            { prompt: '서진이 "요즘 아무것도 하기 싫고 공부 생각만 하면 숨이 막혀"라고 말해요. 마음이 힘든 신호가 이어질 때 함께 갈 곳을 고르세요.', toolOptions: { mode: 'parts', parts: BODY, ask: HELP_ASK('마음 신호가 이어질 때 서진에게 권할 길은?') }, target: { pick: 1 }, difficulty: 0.35,
              conclude: '몸이 아프면 보건실, 계속되는 마음의 신호는 담임·상담 선생님과 Wee 클래스, 그리고 보호자 — 혼자 견디지 않는 길이 학교 안에 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교의 도움 길을 채우세요(교사와 함께 확인).', columns: ['신호', '먼저 갈 곳', '가는 법'], cells: [['몸이 아플 때', '보건실', ''], ['마음 신호가 이어질 때', '', ''], ['공부 부담이 클 때', '', '']] }] },
        notes: '교구 한계: body 에는 머리·얼굴 칸이 없어 두통 신호는 다루지 않고 목·어깨·눈·가슴·배·허리로 고른다. 학생에게 자신의 스트레스 신호를 발표하게 하지 않는다. 서진은 가상 인물이다.',
      }),

      M({
        id: 'wrap.buddy', type: 'wrap', title: '3분 공통점 찾기 돌아가며 대화',
        method: '새 학급 관계 맺기 활동', tool: 'timer', minutes: 8,
        levels: { easy: '교사가 짝을 두 번 바꾸며(3분 대화 2번) 진행한다.', base: '3분 대화를 세 번 돌아가며 하고 짝을 바꿀 때 1분 쉰다.', challenge: '대화마다 찾은 공통점 수를 기록판에 적고, 가장 뜻밖이었던 공통점을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"이제 새 짝과 3분씩 공통점을 찾아볼 거예요. 질문은 \'좋아하는 음식·주말에 하는 일·요즘 듣는 노래\'처럼 가벼운 것으로 해요." 타이머를 함께 맞추고 신호를 켜서 모둠을 섞어 대화를 돌린다. 가족·성적·사는 곳처럼 말하기 싫을 수 있는 것은 묻지 않는다는 약속을 먼저 정한다. "공통점이 하나도 없었어요"라는 학생에게 "같은 반, 같은 급식, 같은 시간표도 공통점이에요. 작은 것부터 찾아볼까요?"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '공통점 찾기 대화', timeUnit: 'min', labels: ['대화', '짝 바꿈'], plan: { work: 2, rest: 2, rounds: 1 } }, prompt: '3분 대화, 1분 짝 바꾸기를 세 번 하도록 타이머를 맞추세요(분).', target: { plan: { work: 3, rest: 1, rounds: 3 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '찾은 공통점 기록', fields: [{ label: '첫째 짝', unit: '개', step: 1 }, { label: '둘째 짝', unit: '개', step: 1 }, { label: '셋째 짝', unit: '개', step: 1 }] }, prompt: '짝마다 찾은 공통점 수를 기록판에 적으세요(두 칸 이상).', target: { records: 2 }, difficulty: 0.1 },
            { type: 'choice', prompt: '처음 만난 친구와 대화를 열 때 알맞은 질문은?', options: ['너희 집은 어디야?', '요즘 즐겨 듣는 노래 있어?', '지난 시험 몇 점이었어?'], answer: 1, difficulty: 0.15, explain: '사는 곳·성적처럼 말하기 싫을 수 있는 것보다 누구나 편하게 답할 수 있는 질문으로 시작해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '새 학급 공통점 찾기',
          items: [
            { type: 'table', prompt: '대화에서 찾은 공통점을 쓰세요(친구 이름 대신 첫째·둘째·셋째).', columns: ['짝', '찾은 공통점'], cells: [['첫째', ''], ['둘째', ''], ['셋째', '']] },
            { type: 'short', prompt: '다음 주에 한 번 더 말을 걸어 보고 싶은 공통점 하나와 건넬 첫마디를 쓰세요.' },
          ],
        },
        notes: '대화 주제는 가벼운 것으로 정한다. 가족·성적·사는 곳·외모는 묻지 않는다. 기록판에는 수만 적는다.',
      }),
      M({
        id: 'wrap.week', type: 'wrap', title: '첫 달 학업 계획 점검 일정',
        method: '첫 달 점검 일정', tool: 'timer', minutes: 8,
        levels: { easy: '교사가 점검 단계 둘(계획 다시 읽기·지킨 날 세기)을 먼저 놓아 보이고 나머지를 함께 놓는다.', base: '점검 단계 카드 넷을 차례로 놓고 스스로 점검 칸을 표시한다.', challenge: '차례에 더해, 두 주 연속 어긋나면 무엇을 바꿀지 조정 규칙을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"계획은 세운 날보다 점검하는 날이 더 중요해요. 첫 달 동안 매주 금요일 5분을 점검 시간으로 정해 볼게요." 점검 단계 카드를 차례로 놓게 한 뒤, 스스로 점검 칸에 내가 정한 것을 표시하게 한다. "점검은 시험 끝나고 하면 되잖아요"라는 학생에게 "시험이 끝나면 고칠 수 있는 시간이 남아 있을까요?"라고 되묻는다. 점검표는 걷지 않는다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '금요일 5분 점검', cards: ['다음 주 계획을 조정한다', '이번 주 계획을 다시 읽는다', '어긋난 날의 원인을 적는다', '지킨 날을 센다'] }, prompt: '매주 금요일 학업 계획 점검 단계를 차례로 놓고, 내가 정한 것을 점검하세요.', target: { order: ['이번 주 계획을 다시 읽는다', '지킨 날을 센다', '어긋난 날의 원인을 적는다', '다음 주 계획을 조정한다'], selfCheck: ['점검할 요일과 시각을 정했다', '점검을 적을 자리를 정했다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '학업 계획 점검에 대한 말로 알맞은 것은?', options: ['시험이 끝난 뒤 한 번만 점검한다', '매주 짧게 점검하고 어긋나면 바로 조정한다', '계획은 처음 세운 대로 끝까지 바꾸지 않는다'], answer: 1, difficulty: 0.15, explain: '짧게 자주 점검해야 고칠 시간이 남아요. 계획은 바꿀 수 있어야 지켜져요.' },
            { type: 'short', prompt: '두 주 연속 계획이 어긋나면 무엇을 바꿀지 내 조정 규칙을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '첫 달 점검 일정',
          items: [
            { type: 'table', prompt: '첫 달 점검 날을 정하세요(걷지 않음 — 나만 봐요).', columns: ['주', '점검 날', '지킨 날 수', '조정할 것'], cells: [['1주', '', '', ''], ['2주', '', '', ''], ['3주', '', '', ''], ['4주', '', '', '']] },
            { type: 'check', prompt: '점검할 때 볼 것에 표시하세요.', options: ['계획 다시 읽기', '지킨 날 세기', '어긋난 원인 적기', '다음 주 조정'] },
          ],
          easy: { note: '"금요일에 계획을 다시 읽고, 지킨 날을 센다"부터 시작해요.', items: [{ type: 'short', prompt: '내가 점검할 요일과 시각을 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 10학년 2. 학습 자기 조절과 권리·책임 (기본생활습관 형성 활동 — 자기 관리·민주시민 의식)
  // ======================================================================================================
  {
    const M = MOD('g10-habit', [10]);
    const LOG = [['월', 2], ['화', 1.5], ['수', 0.5], ['목', 2], ['금', 1], ['토', 3], ['일', 0]];
    const DROP = { text: '가상 인물 지안은 중간고사 수학 점수가 지난번보다 많이 떨어졌다. 공부 시간은 오히려 늘었다.', who: '지안', motif: 'book', choices: [
      { id: 'will', text: '"내가 의지가 약해서야"라며 공부 시간만 더 늘린다', result: '밤늦게까지 문제집을 넘기지만 같은 유형을 또 틀린다.', impact: [{ who: '지안', text: '지치고 자신감이 떨어진다', tone: -1 }], ending: '원인을 모른 채 시간만 늘리면 같은 실수가 되풀이된다.' },
      { id: 'check', text: '틀린 문제를 유형별로 나눠 원인을 살핀다', result: '계산 실수보다 개념을 모르고 외운 문제가 많다는 것을 찾는다.', impact: [{ who: '지안', text: '고칠 곳이 보인다', tone: 1 }],
        next: { text: '원인은 \'개념을 이해하지 않고 풀이만 외운 것\'이다. 이제 무엇을 바꿀까?', choices: [
          { id: 'concept', text: '단원마다 개념을 내 말로 설명해 보는 시간을 넣는다', result: '문제 수는 줄었지만 왜 그렇게 푸는지 말할 수 있게 된다.', impact: [{ who: '지안', text: '이해가 깊어진다', tone: 1 }],
            next: { text: '두 주 뒤 점검해 보니, 설명하기를 세 번 계획했는데 한 번만 했다.', choices: [
              { id: 'adjust', text: '설명 시간을 짧게 나눠 등굣길·쉬는 시간에 넣는다', result: '다음 주에는 세 번을 모두 지킨다.', impact: [{ who: '지안', text: '계획이 생활에 맞춰진다', tone: 1 }], ending: '점검에서 어긋난 것을 찾아 계획을 고치는 것이 조정이다.' },
              { id: 'quit', text: '역시 안 되는 방법이라며 그만둔다', result: '예전처럼 풀이만 외우는 공부로 돌아간다.', impact: [{ who: '지안', text: '같은 문제가 다시 생긴다', tone: -1 }], ending: '지키지 못한 것은 방법이 틀렸다는 뜻이 아니라 조정할 때라는 신호다.' }] } },
          { id: 'more', text: '같은 문제집을 한 권 더 산다', result: '풀이를 외우는 문제가 더 늘어난다.', impact: [{ who: '지안', text: '원인은 그대로 남는다', tone: -1 }], ending: '원인에 맞지 않는 조정은 노력을 헛되게 만든다.' }] } },
      { id: 'blame', text: '시험이 너무 어려웠다며 넘긴다', result: '다음 시험 준비도 지난번과 똑같이 한다.', impact: [{ who: '지안', text: '나아질 기회를 놓친다', tone: -1 }], ending: '점검 없이 넘기면 다음 결과도 비슷하다.' }] };
    const DROP_R = [{ id: 'cause', text: '틀린 문제의 원인을 먼저 찾아야 맞는 방법을 고른다' }, { id: 'fit', text: '원인에 맞춰 방법을 바꾸는 것이 조정이다' }, { id: 'loop', text: '점검에서 어긋난 것은 다시 계획을 고칠 신호다' }, { id: 'will', text: '성적이 떨어진 것은 의지가 약해서다', why: '의지보다 방법과 원인을 먼저 따져요.' }, { id: 'time', text: '공부 시간을 늘리면 무엇이든 해결된다', why: '시간보다 원인에 맞는 방법이 먼저예요.' }];

    MODS.push(
      M({
        id: 'intro.log', type: 'intro', title: '한 주 공부 시간 꺾은선',
        method: '공부 시간 기록 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 월·화·수 사흘 점만 함께 찍고 흐름을 읽는다.', base: '이레의 표를 보고 꺾은선을 완성한 뒤 가장 많이 줄어든 날을 찾는다.', challenge: '칠판에 그은 목표선(하루 2시간)과 견주어 목표에 닿은 날과 못 닿은 날, 그 까닭을 말한다.' },
        intro: {
          teacher: '"가상 인물 지안의 한 주 공부 시간 기록이에요. 표로 보면 잘 안 보이던 것이 꺾은선으로 그리면 보여요." 시연 단추로 꺾은선이 그려지는 모습을 보여 준다. "토요일에 3시간 했으니 잘한 주예요"라는 말이 나오면 "수요일과 일요일은 어떤가요? 몰아서 하는 것과 고르게 하는 것은 같을까요?"라고 되묻는다. 오늘은 기록을 보고 공부 방법을 스스로 조정하는 단계와, 학교생활의 권리·책임을 함께 다룬다고 밝힌다.',
          student: '지안의 한 주 공부 시간 표를 꺾은선그래프로 그리고, 시간이 고르게 이어졌는지 흐름을 읽어 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'build', title: '지안의 한 주 공부 시간(가상)', unit: '시간', xLabel: '요일', yLabel: '공부 시간', data: LOG, scale: 0.5, max: 3, given: [0] }, sequence: [{ build: true }] },
          art: { draw: 'a paper line graph pinned on a cork board with seven points for days of the week, a small paper desk with an open planner and a pencil below, a dotted goal line cut from paper', banner: '기록하면 흐름이 보여요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '지안의 기록은 가상이다. 학생의 실제 공부 시간을 걷거나 발표시키지 않는다.',
      }),
      M({
        id: 'intro.case', type: 'intro', title: '교실 사례 속 서로의 바람',
        method: '교실 사례 속 권리 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 사례 둘(음악 듣기 두 사람)의 마음만 짝지어 보인다.', base: '사례 셋의 사람마다 바람과 마음을 짝짓는다.', challenge: '짝지은 뒤 각 사람의 바람에 \'조용히 공부할 권리\'처럼 권리 이름을 붙여 말한다.' },
        intro: {
          teacher: '"가상 고등학교 자습 시간이에요. 한 친구는 음악을 틀고 싶고, 옆 친구는 조용히 문제를 풀고 싶어요. 둘 중 누가 틀렸을까요?" 시연 단추로 사람마다의 마음이 짝지어지는 모습을 보여 준다. "음악은 내 권리니까 상관없다"는 말이 나오면 "옆 친구에게도 같은 크기의 권리가 있다면, 두 권리가 부딪칠 때는 어떻게 할까요?"라고 되묻는다. 권리는 혼자 가진 것이 아니라 서로 맞닿아 있다는 점을 짚는다.',
          student: '자습 시간 사례 속 사람마다 바라는 것이 무엇인지 읽고, 그 사람의 마음 카드와 짝지어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['짜증', '편안함', '걱정', '서운함'], slots: [{ id: 'a', label: '조용히 문제를 풀고 싶은데 옆자리에서 음악이 새어 나온다' }, { id: 'b', label: '이어폰으로 음악을 들으며 집중하고 싶다' }, { id: 'c', label: '햇빛 때문에 자리를 바꾸고 싶은데 말을 못 꺼냈다' }, { id: 'd', label: '자리를 바꿔 달라는 부탁을 이유도 못 듣고 거절당했다' }] }, sequence: [{ match: { a: '짜증', b: '편안함', c: '걱정', d: '서운함' } }] },
          art: { draw: 'a quiet paper classroom during self-study, one student wearing earphones with paper music notes floating, a neighbor covering ears, sunlight cut from yellow paper falling on a desk', banner: '내 바람, 너의 바람', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.cycle', type: 'activity', title: '자기 조절 네 단계',
        method: '자기 조절 네 단계 놓기', tool: 'timeline', minutes: 18,
        levels: { easy: '네 단계 카드(계획·실행·점검·조정)만 차례로 놓는다.', base: '네 단계를 놓고, 단계마다 알맞은 예 카드를 짝짓는다.', challenge: '조정 뒤 다시 실행·점검으로 되돌아가는 여섯 칸 흐름을 놓고, 함정 카드를 남긴다.' },
        activity: {
          title: '계획에서 조정까지', tool: 'timeline',
          teacher: '"공부가 잘 안될 때 \'의지가 약해서\'라고 말하기 쉬워요. 그런데 잘하는 사람들은 의지보다 이 네 단계를 돌려요." 카드를 놓기 전에 계획·실행·점검·조정의 뜻을 한 줄씩 말해 준다. 점검을 빼고 계획→실행→계획만 반복하는 학생에게 "어디가 어긋났는지 모르면 무엇을 고칠 수 있을까요?"라고 묻는다. 마지막 문항에서 조정은 끝이 아니라 다시 실행으로 이어지는 고리라는 점을 짚는다.',
          task: '학습 자기 조절 단계를 차례로 놓고, 단계마다 알맞은 예를 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('학습 자기 조절의 네 단계를 차례로 놓으세요.', ['계획: 목표와 방법을 정한다', '실행: 정한 방법대로 공부한다', '점검: 지킨 것과 어긋난 것을 본다', '조정: 원인에 맞게 방법을 바꾼다'], { k: 4, d: 0.2, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('단계마다 알맞은 지안의 예를 짝지으세요.', [['계획', '이번 주 수학 개념 설명하기 세 번'], ['실행', '쉬는 시간에 짝에게 개념 설명하기'], ['점검', '금요일에 지킨 횟수 세기'], ['조정', '시간을 나눠 등굣길에 넣기']], { k: 2, extra: ['점수가 떨어지면 의지를 탓하기'], d: 0.3, opt: { axis: ['먼저', '나중'] }, more: { hints: ['단계의 뜻(정하기·하기·보기·바꾸기)과 예의 움직임이 같은지 보세요.'] } }),
            ORDERQ('지안의 두 주를 자기 조절 흐름으로 차례로 놓으세요. 조정 뒤에는 다시 실행과 점검이 이어져요.', ['계획을 세운다', '첫 주를 실행한다', '점검에서 한 번만 지킨 것을 찾는다', '시간을 나누어 계획을 조정한다', '둘째 주를 다시 실행한다', '다시 점검해 세 번을 지킨 것을 확인한다'], { k: 4, traps: ['안 되니 계획을 버린다'], d: 0.35, opt: { axis: ['첫 주', '둘째 주'] }, more: { conclude: '자기 조절은 한 줄이 아니라 고리예요. 조정한 계획은 다시 실행되고 다시 점검돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'공부가 안 되면 의지가 약해서다\'라는 말을 네 단계로 고쳐 말하는 문장을 쓰세요.' }] },
      }),
      M({
        id: 'activity.adjust', type: 'activity', title: '원인에 맞는 조정 갈림길',
        method: '원인에 맞는 조정 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(원인을 살필지)에서 고른 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(원인에 맞는 방법)까지 가서 근거 한 장을 고른다.', challenge: '세 번째 갈림길(두 주 뒤 점검)까지 가서 근거 두 장을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '지안의 점수 다시 보기', tool: 'dilemma',
          teacher: '"지안이는 공부 시간을 늘렸는데 점수가 떨어졌어요. 무엇이 문제였을까요?" 첫 갈림길에서 \'의지가 약해서\'를 고르는 학생에게 "의지는 측정할 수 없지만, 틀린 문제는 나눠 볼 수 있어요. 어느 쪽이 고칠 곳을 알려 줄까요?"라고 묻는다. 세 번째 갈림길에서 \'그만둔다\'를 고르면 "지키지 못한 것이 방법이 틀렸다는 뜻일까요, 조정할 때라는 뜻일까요?"라고 되묻는다. 이 사례는 가상 인물의 점수이며, 우리 반 누구의 점수도 묻지 않는다고 미리 밝힌다.',
          task: '지안의 갈림길을 따라가며 원인을 진단하고, 원인에 맞는 조정과 그 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지안이 원인을 진단하고 원인에 맞게 조정하는 길을 고르고 근거를 고르세요.', DROP, [['check', 'concept', 'adjust']], DROP_R, ['cause'], { d: 0.4, hardReasons: ['cause', 'loop'] }),
            EXPLOREQ('\'의지 탓\'·\'시험 탓\' 길도 끝까지 가 보고, 원인을 살핀 길과 결과를 견주세요.', DROP, DROP_R, ['다른 길의 끝 장면을 확인했다', '원인을 살피지 않은 길의 결과를 짚었다'], { d: 0.35 }),
            DILQ('가상 인물 지후는 영어 단어 시험 때마다 외운 단어를 잊어버려요. 원인에 맞는 조정을 고르고 근거를 고르세요.', { text: '지후는 시험 전날 밤에 단어 100개를 한꺼번에 외운다. 시험 날엔 기억나지만 일주일 뒤엔 거의 잊는다.', who: '지후', motif: 'moon', choices: [
              { id: 'same', text: '전날 밤 외우는 양을 150개로 늘린다', result: '밤이 더 길어지고 다음 날 피곤하다.', impact: [{ who: '지후', text: '잊는 문제는 그대로다', tone: -1 }], ending: '원인(몰아 외우기)에 맞지 않는 조정이다.' },
              { id: 'split', text: '외우는 날을 나누어 하루 20개씩 되풀이한다', result: '같은 단어를 여러 날 다시 만난다.', impact: [{ who: '지후', text: '일주일 뒤에도 더 많이 기억한다', tone: 1 }],
                next: { text: '하루 20개씩 외우기로 했는데, 학원이 있는 날엔 빠뜨린다.', choices: [
                  { id: 'bus', text: '학원 가는 버스에서 10개만 외우는 날로 바꾼다', result: '빠지는 날 없이 이어 간다.', impact: [{ who: '지후', text: '계획이 생활에 맞춰진다', tone: 1 }], ending: '점검 뒤 생활에 맞게 고치는 것이 조정이다.' },
                  { id: 'drop', text: '빠지는 날이 생겼으니 다시 전날 몰아서 외운다', result: '처음 문제로 돌아간다.', impact: [{ who: '지후', text: '또 잊는다', tone: -1 }], ending: '어긋남은 계획을 버릴 까닭이 아니라 고칠 까닭이다.' }] } }] },
              [['split', 'bus']], [{ id: 'spread', text: '나누어 되풀이하면 오래 기억에 남는다' }, { id: 'life', text: '조정은 내 생활에 맞게 해야 이어진다' }, { id: 'more', text: '많이 외울수록 무조건 좋다', why: '양보다 원인(몰아 외우기)에 맞는 방법이 먼저예요.' }], ['spread', 'life'], { d: 0.35, more: { conclude: '원인을 찾고, 원인에 맞게 바꾸고, 생활에 맞춰 다시 고치기 — 조정은 의지가 아니라 방법이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '지안이나 지후의 사례에서 원인과 그에 맞는 조정을 한 문장으로 짝지어 쓰세요.' }] },
        notes: '지안·지후는 가상 인물이다. 학생의 실제 성적·공부 방법을 발표시키거나 채점하지 않는다.',
      }),
      M({
        id: 'activity.sort', type: 'activity', title: '권리·책임·타인의 권리 바구니',
        method: '권리·책임·타인의 권리 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '사례 카드 4장을 세 바구니에 나누고, 틀리면 까닭을 듣고 다시 놓는다.', base: '사례 카드 6장을 나눈다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나눈다.' },
        activity: {
          title: '세 바구니로 나누기', tool: 'sortboard',
          teacher: '"\'내가 누릴 것\', \'내가 해야 할 것\', \'다른 사람이 누릴 것\'을 나눠 봐요." 카드를 놓을 때마다 "이 문장의 주인공은 누구예요? 나예요, 다른 사람이에요?"라고 묻는다. \'다른 친구가 조용히 공부할 수 있게 소리를 줄인다\'를 권리에 넣는 학생에게 "이것은 내가 누리는 것인가요, 내가 해야 하는 것인가요?"라고 되묻는다. 내 권리와 다른 사람의 권리는 같은 크기라서, 책임은 그 둘이 함께 지켜지게 하는 일이라는 점을 짚는다.',
          task: '학교생활 사례 카드를 나의 권리·나의 책임·다른 사람의 권리 바구니에 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            Object.assign(SBQ('학교생활 사례 카드를 세 바구니에 나누세요.', ['나의 권리', '나의 책임', '다른 사람의 권리'], [
              ['궁금한 것을 수업 시간에 질문할 수 있다', '내 물건을 함부로 뒤지지 않게 할 수 있다'],
              ['다른 친구가 조용히 공부할 수 있게 소리를 줄인다', '빌린 책을 정한 날까지 돌려준다'],
              ['옆 친구도 자기 생각을 끝까지 말할 수 있다', '모둠 친구도 역할을 고를 수 있다'],
            ], { k: 1, hard: [['학급 회의에서 내 의견을 낼 수 있다'], ['학급 회의에서 정한 약속을 지킨다'], []], d: 0.3 }), {
              levels: {
                easy: { prompt: '학교생활 사례 카드를 세 바구니에 나누세요(카드 4장).', toolOptions: { cards: ['궁금한 것을 수업 시간에 질문할 수 있다', '다른 친구가 조용히 공부할 수 있게 소리를 줄인다', '빌린 책을 정한 날까지 돌려준다', '옆 친구도 자기 생각을 끝까지 말할 수 있다'] }, target: { sort: { '나의 권리': ['궁금한 것을 수업 시간에 질문할 수 있다'], '나의 책임': ['다른 친구가 조용히 공부할 수 있게 소리를 줄인다', '빌린 책을 정한 날까지 돌려준다'], '다른 사람의 권리': ['옆 친구도 자기 생각을 끝까지 말할 수 있다'] } } },
                challenge: { prompt: '학교생활 사례 카드를 세 바구니에 나누세요(카드 8장).', toolOptions: { cards: ['궁금한 것을 수업 시간에 질문할 수 있다', '다른 친구가 조용히 공부할 수 있게 소리를 줄인다', '옆 친구도 자기 생각을 끝까지 말할 수 있다', '내 물건을 함부로 뒤지지 않게 할 수 있다', '빌린 책을 정한 날까지 돌려준다', '모둠 친구도 역할을 고를 수 있다', '학급 회의에서 내 의견을 낼 수 있다', '학급 회의에서 정한 약속을 지킨다'] }, target: { sort: { '나의 권리': ['궁금한 것을 수업 시간에 질문할 수 있다', '내 물건을 함부로 뒤지지 않게 할 수 있다', '학급 회의에서 내 의견을 낼 수 있다'], '나의 책임': ['다른 친구가 조용히 공부할 수 있게 소리를 줄인다', '빌린 책을 정한 날까지 돌려준다', '학급 회의에서 정한 약속을 지킨다'], '다른 사람의 권리': ['옆 친구도 자기 생각을 끝까지 말할 수 있다', '모둠 친구도 역할을 고를 수 있다'] } } },
              } }),
            SBQ('같은 장면을 두 사람 쪽에서 본 카드를 \'권리가 지켜짐\'과 \'권리가 부딪침\' 바구니에 나누세요.', ['권리가 지켜짐', '권리가 부딪침'], [
              ['이어폰 소리를 줄여 서로 공부에 집중한다', '자리 바꾸기를 학급 회의에서 함께 정한다', '발표 순서를 미리 정해 모두 말한다'],
              ['한 사람이 노래를 크게 틀고 다른 사람은 참는다', '목소리 큰 친구 뜻대로 자리가 정해진다', '먼저 말한 사람만 계속 말한다'],
            ], { k: 2, hard: [['에어컨 온도를 투표로 정하고 추운 친구 자리를 옮긴다'], ['다수가 원한다며 소수의 불편은 묻지 않는다']], d: 0.3 }),
            SBQ('권리가 부딪칠 때의 해결 카드를 \'둘 다 지키는 방법\'과 \'한쪽만 지키는 방법\'으로 나누세요.', ['둘 다 지키는 방법', '한쪽만 지키는 방법'], [
              ['음악은 이어폰으로, 소리는 옆에서 안 들리게', '조용한 자리와 이야기 자리를 나누어 정한다', '서로 바라는 것을 먼저 말하고 들어 본다'],
              ['먼저 온 사람이 다 정한다', '불편한 사람이 참는다', '선생님께 한쪽을 혼내 달라고 한다'],
            ], { k: 2, d: 0.35, more: { conclude: '권리가 부딪칠 때는 누가 이기느냐가 아니라, 둘 다 지키는 방법을 함께 찾는 것이 책임이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'내 권리는 다른 사람과 상관없다\'는 말이 틀린 까닭을 오늘 카드 하나를 들어 쓰세요.' }] },
      }),
      M({
        id: 'activity.balance', type: 'activity', title: '권리 충돌 해결 글쓰기',
        method: '권리 충돌 해결 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '빈칸이 있는 문장 틀("○○의 권리는 ~이고, △△의 권리는 ~이다. 둘 다 지키려면 ~")을 채워 쓴다.', base: '한 문단(3~5문장)으로 양쪽 권리·근거·실행 방법을 쓰고 기준표 세 항목을 점검한다.', challenge: '한 문단에 더해 예상되는 반론 하나와 그에 대한 답까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '두 권리를 함께 지키는 글', tool: 'rubric-writing',
          teacher: '"오늘 쓸 글은 \'누가 옳다\'가 아니라 \'둘 다 지키려면 어떻게 할까\'예요." 기준표 세 항목(양쪽 권리·근거·실행 방법)을 먼저 함께 읽는다. 한쪽 편만 드는 글을 쓴 학생에게 "상대의 권리는 글에 어디에 있나요?"라고 묻는다. "서로 배려하자"로 끝나는 글에는 "누가, 언제, 무엇을 하면 배려가 되나요?"라고 되물어 실행 방법을 쓰게 한다.',
          task: '권리가 부딪치는 사례 하나를 골라 둘 다 지키는 해결 방안을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('자습실에서 이야기하며 공부하고 싶은 모둠과 조용히 공부하고 싶은 학생의 권리를 함께 지키는 해결 방안을 쓰고 점검하세요.', '자습실 사례: 모둠 토의와 조용한 개인 공부, 둘 다 지키는 방안을 한 문단으로 쓰세요.', ['양쪽의 권리를 모두 썼다', '해결 방안의 근거를 썼다', '누가 언제 무엇을 할지 실행 방법을 썼다'], { min: 80, max: 400, sent: [3, 5], starter: '모둠의 권리는 ~이고, 혼자 공부하는 학생의 권리는 ~이다. 둘 다 지키려면 ~', plus: '예상되는 반론 하나와 그에 대한 답을 썼다', sample: '모둠은 함께 이야기하며 배울 권리가 있고, 혼자 공부하는 학생은 조용히 집중할 권리가 있다. 두 권리는 같은 공간에서 부딪친다. 자습실을 앞쪽 조용한 자리와 뒤쪽 토의 자리로 나누면 둘 다 지킬 수 있다. 학급 회의에서 자리 표를 정하고 한 달 뒤 점검한다.', d: 0.4 }),
            RWQ('교실 에어컨 온도를 두고 더위를 타는 학생과 추위를 타는 학생의 권리를 함께 지키는 해결 방안을 쓰고 점검하세요.', '에어컨 사례: 더위를 타는 학생과 추위를 타는 학생, 둘 다 지키는 방안을 한 문단으로 쓰세요.', ['양쪽의 권리를 모두 썼다', '해결 방안의 근거를 썼다', '누가 언제 무엇을 할지 실행 방법을 썼다'], { min: 80, max: 400, sent: [3, 5], starter: '더위를 타는 학생의 권리는 ~이고, 추위를 타는 학생의 권리는 ~이다. 둘 다 지키려면 ~', plus: '예상되는 반론 하나와 그에 대한 답을 썼다', d: 0.4 }),
            RWQ('사례 하나를 골라 쓴 내 해결 방안에서 가장 지키기 어려운 부분과 그 보완책을 두 문장으로 쓰고 점검하세요.', '내 해결 방안에서 가장 지키기 어려운 부분과 보완책을 두 문장으로 쓰세요.', ['지키기 어려운 부분을 짚었다', '보완책을 실행할 수 있게 썼다', '양쪽 권리를 다시 확인했다'], { min: 40, max: 250, sent: [2, 3], starter: '가장 지키기 어려운 부분은 ~이다. 그래서 ~', d: 0.35, more: { conclude: '좋은 해결 글은 양쪽 권리를 이름 붙여 쓰고, 근거를 대고, 누가 무엇을 할지까지 써요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 해결 방안을 한 문장으로 줄여 쓰세요.' }] },
      }),

      M({
        id: 'wrap.timer', type: 'wrap', title: '집중 구간 계획과 맛보기',
        method: '집중 구간 공부 실습', tool: 'timer', minutes: 8,
        levels: { easy: '교사와 함께 15분 집중·5분 쉬기 계획을 맞추고 3분 맛보기 구간을 해 본다.', base: '25분 집중·5분 쉬기 계획을 스스로 맞추고, 시작 전 점검 뒤 3분 맛보기 구간을 해 본다.', challenge: '25분 집중 두 구간(사이 5분 쉬기) 계획을 세우고, 맛보기 뒤 집중을 깬 것 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"집중은 의지보다 구간으로 지켜요. 우리 반 연습 값은 25분 집중, 5분 쉬기예요." 타이머를 함께 맞춘 뒤, 시작 전 점검 칸을 표시하고 3분 맛보기 구간을 실제로 해 본다(수업에서는 3분, 25분 구간은 집에서). "25분은 너무 길어요"라는 학생에게 "15분부터 시작해도 돼요. 중요한 것은 구간을 정하고 쉬는 시간도 지키는 거예요"라고 말한다. 맛보기 뒤 "무엇이 집중을 깼나요?"를 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '집중 구간 계획', timeUnit: 'min', labels: ['집중', '쉬기'], plan: { work: 10, rest: 10, rounds: 1 } }, prompt: '우리 반 연습 값(25분 집중·5분 쉬기)으로 두 구간을 하도록 타이머를 맞추세요(분).', target: { plan: { work: 25, rest: 5, rounds: 2 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '3분 맛보기', timeUnit: 'min', labels: ['집중', '쉬기'], plan: { work: 1, rest: 0, rounds: 1 }, safety: ['휴대폰을 가방에 넣었다', '이번 구간에 할 일 하나를 정했다', '책상 위에 그 일에 필요한 것만 두었다'] }, prompt: '시작 전 점검 세 칸을 확인하고, 3분 한 구간 맛보기로 타이머를 맞추세요(분).', target: { plan: { work: 3, rounds: 1 }, safety: true }, difficulty: 0.15 },
            { type: 'choice', prompt: '집중 구간 공부에 대한 말로 알맞은 것은?', options: ['쉬는 시간은 아까우니 건너뛴다', '구간과 쉬는 시간을 정하고 둘 다 지킨다', '집중이 안 되면 의지가 약한 것이다'], answer: 1, difficulty: 0.15, explain: '쉬는 시간도 계획의 일부예요. 구간을 정하면 의지에 덜 기대고 집중을 이어 갈 수 있어요.' },
            { type: 'short', prompt: '맛보기 구간에서 집중을 깬 것 하나와 다음에 바꿀 점을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '나의 집중 구간 계획',
          items: [
            { type: 'table', prompt: '집에서 해 볼 집중 구간 계획을 쓰세요(걷지 않음).', columns: ['구간', '할 일', '집중 시간', '쉬는 시간'], cells: [['1', '', '', ''], ['2', '', '', '']] },
            { type: 'check', prompt: '시작 전에 할 일에 표시하세요.', options: ['휴대폰 멀리 두기', '할 일 하나 정하기', '필요한 것만 책상에', '물 준비하기'] },
          ],
          easy: { note: '"15분 집중, 5분 쉬기"부터 시작해요.', items: [{ type: 'short', prompt: '첫 구간에 할 일 하나를 쓰세요.' }] },
        },
        notes: '25분·5분은 의학 기준이 아니라 이 수업에서 정한 우리 반 연습 값이다. 8분 정리 시간에는 3분 맛보기만 하고 25분 구간은 집에서 해 보게 한다.',
      }),
      M({
        id: 'wrap.talk', type: 'wrap', title: '권리 충돌 짝 토의 3분',
        method: '권리 충돌 짝 토의', tool: 'timer', minutes: 8,
        levels: { easy: '사례 하나(자습실)를 두고 짝과 한 사람씩 90초 동안 한쪽 권리를 대변한다.', base: '사례 둘(자습실·에어컨)을 두고 역할을 바꿔 가며 대변하고, 토의 차례 카드를 놓는다.', challenge: '토의 뒤 짝과 합의안 한 문장을 만들어 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"짝과 역할을 나눠요. 한 사람은 모둠 쪽 권리를, 한 사람은 조용히 공부하는 쪽 권리를 대변해요. 내 진짜 생각과 달라도 괜찮아요." 타이머를 90초 두 번으로 맞춘 뒤 신호와 함께 토의를 시작한다. 상대 말을 끊는 짝에게 "상대가 말한 권리를 한 문장으로 요약해 줄 수 있나요?"라고 묻는다. 토의는 이기기가 아니라 겹치는 바람을 찾는 것이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝 토의 타이머', labels: ['대변', '바꾸기'], plan: { work: 60, rest: 20, rounds: 1 } }, prompt: '한 사람이 90초 대변하고 10초 쉬며 역할을 바꾸도록, 두 번 하게 타이머를 맞추세요(초).', target: { plan: { work: 90, rest: 10, rounds: 2 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '토의 차례', cards: ['둘 다 지키는 합의안을 쓴다', '내가 맡은 쪽 권리를 말한다', '겹치는 바람을 찾는다', '상대가 말한 권리를 요약한다'] }, prompt: '권리 충돌 짝 토의의 차례 카드를 놓으세요.', target: { order: ['내가 맡은 쪽 권리를 말한다', '상대가 말한 권리를 요약한다', '겹치는 바람을 찾는다', '둘 다 지키는 합의안을 쓴다'] }, difficulty: 0.2 },
            { type: 'short', prompt: '짝과 만든 합의안을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '권리 충돌 짝 토의',
          items: [
            { type: 'table', prompt: '토의한 사례의 두 권리와 합의안을 쓰세요.', columns: ['사례', '한쪽 권리', '다른 쪽 권리', '합의안'], cells: [['자습실', '', '', ''], ['에어컨', '', '', '']] },
            { type: 'short', prompt: '상대 쪽을 대변해 보고 새로 알게 된 점 하나를 쓰세요.' },
          ],
        },
        notes: '역할은 무작위로 나누어 자기 생각과 다른 쪽을 대변하게 한다. 토의 내용은 채점하지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 10학년 3. 근거의 신뢰성과 비폭력 대화 (관계 형성 및 소통 활동 — 토의·토론)
  // ======================================================================================================
  {
    const M = MOD('g10-rel', [10]);
    const CLAIM_FACT = ['가상 설문에서 1학년 120명 가운데 70명이 찬성했다', '지금 매점은 점심시간에만 문을 연다', '지난 학기 매점 앞 줄이 평균 15분이었다는 학생회 기록이 있다'];
    const CLAIM_OPIN = ['매점 빵은 너무 맛없다', '줄 서는 시간은 정말 아깝다', '쉬는 시간에 매점에 가면 더 즐거울 것 같다'];
    const CLAIM_MAIN = ['매점을 쉬는 시간에도 열어야 한다', '매점 운영 시간은 지금처럼 두어야 한다'];
    const ARTICLE = { text: '가상 학교 신문 기사: "자습실 휴대폰 허용, 학생 대부분이 원한다." 근거로 \'한 동아리 단체 대화방 투표 결과\'를 들었다.', who: '학생 기자단', motif: 'book', choices: [
      { id: 'share', text: '제목만 보고 기사를 바로 반 단체 대화방에 퍼 나른다', result: '반 친구들이 "다들 원한대"라며 그대로 믿는다.', impact: [{ who: '반 친구들', text: '확인하지 않은 근거를 사실로 받아들인다', tone: -1 }], ending: '출처를 따지지 않고 퍼 나르면 약한 근거가 사실처럼 굳는다.' },
      { id: 'source', text: '근거가 어디서 나왔는지 출처를 확인한다', result: '근거는 회원 25명인 한 동아리의 투표라는 것을 찾는다.', impact: [{ who: '나', text: '근거의 범위를 알게 된다', tone: 1 }],
        next: { text: '동아리 투표 질문은 "자습실에서 음악 앱을 써도 될까?"였다.', choices: [
          { id: 'relevant', text: '질문이 기사 주장(휴대폰 허용 전체)과 맞는지 따진다', result: '음악 앱만 물은 질문으로 휴대폰 전체 허용을 말하기는 어렵다는 것을 안다.', impact: [{ who: '나', text: '관련성의 빈틈을 찾는다', tone: 1 }],
            next: { text: '학생 기자단이 "그래도 25명 중 23명이 찬성했으니 대부분 아닌가요?"라고 묻는다.', choices: [
              { id: 'sample', text: '25명이 전교생을 대표하는지 대표성을 짚고 전교 설문을 제안한다', result: '기자단이 학년마다 고르게 묻는 설문을 다시 하기로 한다.', impact: [{ who: '학교 공동체', text: '더 믿을 만한 근거로 토론한다', tone: 1 }], ending: '출처·관련성·대표성을 차례로 따지면 근거가 단단해진다.' },
              { id: 'accept', text: '23명이면 많으니 기사를 그대로 믿는다', result: '전교생 의견을 묻지 않은 채 토론이 이어진다.', impact: [{ who: '다른 학년 학생', text: '의견이 빠진다', tone: -1 }], ending: '비율이 높아도 일부 집단이면 전체를 대표하지 못한다.' }] } },
          { id: 'trust', text: '기자단이 자신 있게 썼으니 믿는다', result: '질문과 주장이 다르다는 점을 놓친다.', impact: [{ who: '나', text: '빈틈 있는 근거를 받아들인다', tone: -1 }], ending: '자신 있게 말한다고 근거가 믿을 만해지지는 않는다.' }] } },
      { id: 'ignore', text: '어차피 내 생각과 같으니 확인할 필요 없다', result: '내 생각과 같은 기사라 의심하지 않는다.', impact: [{ who: '나', text: '내 편 근거만 믿게 된다', tone: -1 }], ending: '내 생각과 같은 근거일수록 더 꼼꼼히 따진다.' }] };
    const ARTICLE_R = [{ id: 'src', text: '근거가 어디서 나왔는지 출처를 확인했다' }, { id: 'rel', text: '근거가 주장과 같은 것을 말하는지 따졌다' }, { id: 'rep', text: '조사한 사람들이 전체를 대표하는지 따졌다' }, { id: 'conf', text: '기자가 자신 있게 썼으니 믿을 만하다', why: '말투의 자신감은 근거의 힘이 아니에요.' }, { id: 'mine', text: '내 생각과 같으니 맞는 기사다', why: '내 생각과 같은지는 근거가 믿을 만한지와 상관없어요.' }];
    const NVC_CARDS = { o: '네가 모둠 자료를 이틀째 올리지 않아서', f: '나는 발표 준비가 늦어질까 걱정돼', n: '나는 발표를 함께 잘 마치고 싶어', r: '오늘 밤 9시까지 올려 줄 수 있을까?' };
    const SURVEY2 = [['가: 한 동아리 25명', 25], ['나: 학년마다 고르게 300명', 300]];
    const SURVEY3 = [['가: 한 동아리 25명', 25], ['나: 학년마다 고르게 300명', 300], ['다: 누리집 자유 응답 80명', 80]];

    MODS.push(
      M({
        id: 'intro.claim', type: 'intro', title: '토론 발언 속 사실·의견·주장',
        method: '토론 발언 속 사실·의견 고르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 발언 카드 4장(사실 둘·의견 둘)을 함께 나눠 보인다.', base: '발언 카드 6장을 사실·의견·주장 바구니에 나눈다.', challenge: '발언 카드 8장을 나누고, 사실 카드 가운데 출처가 밝혀진 것과 아닌 것을 말로 가린다.' },
        intro: {
          teacher: '"가상 학교 학급 토론 주제는 \'매점을 쉬는 시간에도 열자\'예요. 발언들을 들어 보면 사실·의견·주장이 섞여 있어요." 시연 단추로 카드가 바구니에 나뉘는 모습을 보여 준다. "\'줄 서는 시간은 정말 아깝다\'는 다들 그러니까 사실이에요"라는 말이 나오면 "누구나 확인할 수 있는 수나 기록인가요, 그 사람의 느낌인가요?"라고 되묻는다. 주장은 하고 싶은 결론, 사실은 확인할 수 있는 것, 의견은 느낌·판단이라는 점을 짚고, 오늘은 근거를 따지고 말하는 방법까지 다룬다고 밝힌다.',
          student: '매점 토론의 발언 카드를 읽고, 확인할 수 있는 사실·개인의 의견·하고 싶은 결론(주장)으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['사실', '의견', '주장'], cards: [CLAIM_FACT[0], CLAIM_OPIN[0], CLAIM_MAIN[0], CLAIM_FACT[1], CLAIM_OPIN[1], CLAIM_MAIN[1]] }, sequence: [{ sort: { 사실: [CLAIM_FACT[0], CLAIM_FACT[1]], 의견: [CLAIM_OPIN[0], CLAIM_OPIN[1]], 주장: [CLAIM_MAIN[0], CLAIM_MAIN[1]] } }] },
          art: { draw: 'a paper classroom debate with speech bubbles cut from paper floating above students, three paper baskets on a shelf labelled with tags, a school store window in the background', banner: '사실일까, 의견일까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '설문 수치·학생회 기록은 수업용 가상 자료다.',
      }),
      M({
        id: 'intro.hurt', type: 'intro', title: '같은 뜻 다른 말, 듣는 마음',
        method: '같은 뜻 다른 말, 듣는 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 비난하는 말 하나와 바꾼 말 하나의 마음만 짝지어 보인다.', base: '말 셋을 듣는 사람의 마음과 짝짓는다.', challenge: '말 넷을 모두 짝짓고, 같은 뜻인데 마음이 달라진 까닭을 낱말 하나로 짚는다.' },
        intro: {
          teacher: '"모둠 친구가 자료를 이틀째 안 올렸어요. 하고 싶은 말은 같아요. \'자료를 올려 줘\'. 그런데 말하는 방식에 따라 듣는 친구의 마음은 어떻게 달라질까요?" 시연 단추로 말과 마음 카드가 짝지어지는 모습을 보여 준다. "솔직하게 말하는 게 뭐가 나빠요"라는 말이 나오면 "솔직함과 비난은 같을까요? \'너는 늘 그래\'는 사실일까요?"라고 되묻는다. 오늘은 관찰·느낌·바람·부탁 네 단계로 솔직하되 비난하지 않는 말을 연습한다고 밝힌다.',
          student: '같은 뜻을 담은 서로 다른 말을 읽고, 그 말을 듣는 친구의 마음 카드와 짝지어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['화남', '미안함', '억울함', '편안함'], slots: [{ id: 'a', label: '"너는 맨날 이런 식이야. 책임감이 없어."' }, { id: 'b', label: '"자료가 이틀째 안 올라와서 걱정돼. 오늘 올려 줄 수 있어?"' }, { id: 'c', label: '"다른 애들은 다 했는데 너만 안 했잖아."' }, { id: 'd', label: '"혹시 어려운 부분 있으면 같이 나눠 할까?"' }] }, sequence: [{ match: { a: '화남', b: '미안함', c: '억울함', d: '편안함' } }] },
          art: { draw: 'two paper speech bubbles side by side above two students at a desk, one bubble jagged and dark, the other round and soft, a laptop with a group folder between them', banner: '같은 뜻, 다른 말', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.source', type: 'activity', title: '근거 자료 믿을 만한가',
        method: '근거 자료 신뢰성 따지기', tool: 'chart', minutes: 18,
        levels: { easy: '조사 둘(동아리 25명·전교 300명)의 응답자 수 그래프를 값이 보이는 상태로 견준다.', base: '조사 셋의 그래프를 값 표시 없이 견주어 대표성·관련성·출처를 따진다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 고른 까닭을 보기에서 골라 활동지에 한 문장으로 쓴다.' },
        activity: {
          title: '세 조사 견주기', tool: 'chart',
          teacher: '"\'자습실 휴대폰 허용\'에 대한 가상 조사가 셋 있어요. 결과만 보지 말고, 누구에게 물었는지·무엇을 물었는지·누가 조사했는지를 봐요." 첫 문항에서 응답자 수만 보고 고르는 학생에게 "300명이 모두 한 학년이라면 어떨까요? 수만큼 중요한 건 고르게 물었는지예요"라고 말한다. "찬성 비율이 가장 높은 조사가 가장 믿을 만하다"는 학생에게 "비율이 높은 것과 근거가 믿을 만한 것은 같은 말일까요?"라고 되묻는다.',
          task: '가상 조사 그래프를 읽고 어느 근거가 더 믿을 만한지 출처·관련성·대표성으로 따져요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '자습실 휴대폰 허용에 대한 가상 조사들의 응답자 수예요. 학년마다 고르게 물어 전교생을 가장 잘 대표하는 조사를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '조사별 응답자 수(가상)', unit: '명', yLabel: '응답자 수', xLabel: '조사', data: SURVEY3, question: '전교생을 가장 잘 대표하는 조사는?', choices: SURVEY3.map((x) => x[0]), why: ['한 동아리만 물으면 그 동아리 생각만 나와요.', '', '누리집에 스스로 들어온 사람만 답해 관심 많은 사람에게 쏠릴 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.25,
              levels: { easy: { prompt: '가상 조사 둘의 응답자 수예요. 전교생을 더 잘 대표하는 조사를 고르세요(그래프 둘).', toolOptions: { data: SURVEY2, choices: SURVEY2.map((x) => x[0]), why: ['한 동아리만 물으면 그 동아리 생각만 나와요.', ''] } } } },
            { prompt: '세 조사의 찬성 비율이에요. 찬성 비율이 가장 높은 조사를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '조사별 찬성 비율(가상)', unit: '%', yLabel: '찬성 비율', xLabel: '조사', data: [['가: 한 동아리', 92], ['나: 학년마다 고르게', 54], ['다: 누리집 자유 응답', 75]], max: 100, scale: 10, question: '찬성 비율이 가장 높은 조사는?', choices: ['가: 한 동아리', '나: 학년마다 고르게', '다: 누리집 자유 응답'] }, target: { pick: 0 }, difficulty: 0.15,
              conclude: '찬성 비율이 가장 높은 조사가 대표성이 가장 높은 조사는 아니에요. 92%는 한 동아리 25명의 생각이에요.' },
            { prompt: '학년마다 고르게 물은 조사 나의 학년별 찬성 비율이에요. 세 학년 가운데 찬성 비율이 가장 낮은 학년의 값을 읽으세요.', toolOptions: { type: 'bar', mode: 'read', title: '조사 나 학년별 찬성 비율(가상)', unit: '%', yLabel: '찬성 비율', xLabel: '학년', data: [['1학년', 62], ['2학년', 55], ['3학년', 45]], max: 100, scale: 5, question: '가장 낮은 학년의 찬성 비율은?' }, target: { value: 45 }, difficulty: 0.3,
              conclude: '고르게 물으면 학년마다 생각이 다르다는 것까지 보여요. 한 집단만 물었다면 이 차이를 볼 수 없어요.' },
            { prompt: '조사 다는 응답자도 많고 찬성도 많지만 근거로 쓰기 조심스러워요. 가장 큰 까닭을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '조사 다: 누리집 자유 응답(가상)', unit: '명', yLabel: '응답자 수', xLabel: '답', data: [['찬성', 60], ['반대', 20]], question: '조사 다를 근거로 쓰기 조심스러운 가장 큰 까닭은?', choices: ['응답자가 80명이라 너무 많다', '스스로 들어온 사람만 답해 관심 많은 쪽으로 쏠릴 수 있다', '찬성이 반대보다 많다'], why: ['응답자 수가 많은 것은 문제가 아니에요.', '', '결과가 어느 쪽인지는 믿을 만한지와 상관없어요.'] }, target: { pick: 1 }, difficulty: 0.4,
              conclude: '근거를 쓰기 전에 세 가지를 물어요. 어디서 나왔나(출처), 주장과 같은 것을 물었나(관련성), 전체를 대표하나(대표성).' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 조사 가운데 토론 근거로 가장 알맞은 것을 고르고, 대표성을 들어 그 까닭을 한 문장으로 쓰세요.' }] },
        notes: '조사와 수치는 모두 수업용 가상 자료다.',
      }),
      M({
        id: 'activity.judge', type: 'activity', title: '기사 근거 따지기 갈림길',
        method: '근거 판단 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(출처를 확인할지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(관련성)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(대표성)까지 가서 근거 세 장(출처·관련성·대표성)을 고른다.' },
        activity: {
          title: '학교 신문 기사 따지기', tool: 'dilemma',
          teacher: '"가상 학교 신문 기사 제목이 \'학생 대부분이 원한다\'예요. 퍼 나르기 전에 무엇을 확인할까요?" 첫 갈림길에서 \'내 생각과 같으니 확인할 필요 없다\'를 고르는 학생에게 "내 생각과 같을수록 왜 더 꼼꼼히 봐야 할까요?"라고 묻는다. 이 활동은 휴대폰 허용에 찬성하거나 반대하는 정답을 찾는 것이 아니라, 어느 쪽이든 근거를 따지는 연습이라고 밝힌다.',
          task: '기사 근거를 출처·관련성·대표성 차례로 따지는 갈림길을 따라가고, 판단의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('기사 근거를 출처·관련성·대표성으로 따지는 길을 고르고 근거를 고르세요.', ARTICLE, [['source', 'relevant', 'sample']], ARTICLE_R, ['src', 'rel'], { d: 0.4, hardReasons: ['src', 'rel', 'rep'] }),
            EXPLOREQ('\'바로 퍼 나르기\'·\'내 생각과 같으니 믿기\' 길도 끝까지 가 보고, 결과를 견주세요.', ARTICLE, ARTICLE_R, ['다른 길의 끝 장면을 확인했다', '확인하지 않은 근거가 누구에게 영향을 주는지 짚었다'], { d: 0.35 }),
            DILQ('토론 상대가 "유명한 사람이 그렇게 말했다"를 근거로 들어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '학급 토론에서 상대편이 "구독자 많은 영상에서 그렇게 말했어요"라며 근거를 든다.', who: '토론 상대', motif: 'star', choices: [
              { id: 'agree', text: '구독자가 많으니 믿고 반박을 접는다', result: '영상 속 말이 사실인지 아무도 확인하지 않는다.', impact: [{ who: '토론', text: '근거 따지기가 멈춘다', tone: -1 }], ending: '유명함은 근거의 힘이 아니다.' },
              { id: 'ask', text: '그 말의 출처 자료가 무엇인지 묻는다', result: '상대가 영상 속 말의 원래 자료를 찾아보기로 한다.', impact: [{ who: '토론', text: '근거를 함께 확인한다', tone: 1 }],
                next: { text: '원래 자료를 찾아보니 다른 나라 성인을 조사한 자료였다.', choices: [
                  { id: 'point', text: '조사 대상이 우리 학교 학생과 다르다는 점을 정중하게 짚는다', result: '상대가 우리 학교에 맞는 근거를 다시 찾기로 한다.', impact: [{ who: '양쪽', text: '더 맞는 근거로 토론한다', tone: 1 }], ending: '근거의 대상이 주장의 대상과 맞는지 따지는 것이 관련성이다.' },
                  { id: 'mock', text: '"그것도 모르고 썼냐"며 비웃는다', result: '상대가 입을 닫고 토론 분위기가 굳는다.', impact: [{ who: '상대', text: '창피함을 느낀다', tone: -1 }], ending: '근거를 짚는 것과 사람을 깎아내리는 것은 다르다.' }] } }] },
              [['ask', 'point']], [{ id: 'origin', text: '말의 원래 자료(출처)를 확인한다' }, { id: 'target', text: '조사 대상이 주장의 대상과 맞는지 본다' }, { id: 'famous', text: '유명한 사람의 말이면 믿을 만하다', why: '유명함이 아니라 자료가 근거예요.' }], ['origin', 'target'], { d: 0.35, more: { conclude: '근거를 따질 때는 사람이 아니라 자료를 보고, 짚을 때는 정중하게 말해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 보낸 기사를 퍼 나르기 전에 확인할 세 가지(출처·관련성·대표성)를 내 말로 한 줄씩 쓰세요.' }] },
        notes: '기사·영상은 가상이다. 휴대폰 허용에 대한 찬반 정답을 정하지 않고, 근거를 따지는 과정만 판정한다.',
      }),
      M({
        id: 'activity.nvc', type: 'activity', title: '네 단계로 바꿔 말하기',
        method: '네 단계로 바꿔 말하기', tool: 'story', minutes: 18,
        levels: { easy: '말풍선 빈칸 두 칸(관찰·부탁)에 카드를 넣는다.', base: '말풍선 빈칸 네 칸(관찰·느낌·바람·부탁)에 카드를 넣는다.', challenge: '사례 두 개(모둠 자료·빌린 물건)를 네 칸 모두 채우고, 비난이 섞인 함정 카드를 남긴다.' },
        activity: {
          title: '말풍선 네 칸 채우기', tool: 'story',
          teacher: '"비폭력 대화의 네 단계는 관찰(본 것)·느낌(내 마음)·바람(내가 바라는 것)·부탁(상대가 할 수 있는 구체적 행동)이에요." 칠판에 네 칸을 그리고 첫 사례를 함께 읽는다. 관찰 칸에 \'너는 책임감이 없어서\'를 넣는 학생에게 "이건 카메라에 찍히는 장면인가요, 내 판단인가요?"라고 묻는다. 부탁 칸에 \'제발 좀 잘해\'를 넣으면 "상대가 듣고 바로 할 수 있는 행동인가요?"라고 되묻는다.',
          task: '말풍선 빈칸에 관찰·느낌·바람·부탁 카드를 알맞게 넣어 비난 없이 솔직한 말을 만들어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '모둠 자료를 올리지 않은 친구에게 할 말을 네 단계로 완성하세요.', toolOptions: { mode: 'fill', title: '모둠 자료 사례', slots: [{ id: 'o', who: '민서', label: '관찰: ___' }, { id: 'f', who: '민서', label: '느낌: ___' }, { id: 'n', who: '민서', label: '바람: ___' }, { id: 'r', who: '민서', label: '부탁: ___' }], cards: [NVC_CARDS.r, NVC_CARDS.f, '너는 맨날 책임감이 없어서', NVC_CARDS.o, NVC_CARDS.n, '제발 좀 잘해'] }, target: { fill: { o: NVC_CARDS.o, f: NVC_CARDS.f, n: NVC_CARDS.n, r: NVC_CARDS.r } }, difficulty: 0.3,
              levels: { easy: { prompt: '모둠 자료 사례의 관찰과 부탁 빈칸을 채우세요(빈칸 둘).', toolOptions: { slots: [{ id: 'o', who: '민서', label: '관찰: ___' }, { id: 'r', who: '민서', label: '부탁: ___' }], cards: [NVC_CARDS.r, '너는 맨날 책임감이 없어서', NVC_CARDS.o, '제발 좀 잘해'] }, target: { fill: { o: NVC_CARDS.o, r: NVC_CARDS.r } } } } },
            { prompt: '빌려 간 계산기를 일주일째 돌려주지 않는 친구에게 할 말을 네 단계로 완성하세요.', toolOptions: { mode: 'fill', title: '빌린 물건 사례', slots: [{ id: 'o', who: '은호', label: '관찰: ___' }, { id: 'f', who: '은호', label: '느낌: ___' }, { id: 'n', who: '은호', label: '바람: ___' }, { id: 'r', who: '은호', label: '부탁: ___' }], cards: ['내일 수학 시간 전까지 돌려줄 수 있어?', '지난주에 빌려 간 계산기가 아직 안 와서', '너는 남의 물건을 우습게 알아', '나는 내일 시험 준비가 걱정돼', '나는 내 물건을 제때 쓰고 싶어', '빨리 내놔'] }, target: { fill: { o: '지난주에 빌려 간 계산기가 아직 안 와서', f: '나는 내일 시험 준비가 걱정돼', n: '나는 내 물건을 제때 쓰고 싶어', r: '내일 수학 시간 전까지 돌려줄 수 있어?' } }, difficulty: 0.35,
              levels: { easy: { prompt: '빌린 물건 사례의 관찰과 부탁 빈칸을 채우세요(빈칸 둘).', toolOptions: { slots: [{ id: 'o', who: '은호', label: '관찰: ___' }, { id: 'r', who: '은호', label: '부탁: ___' }], cards: ['내일 수학 시간 전까지 돌려줄 수 있어?', '지난주에 빌려 간 계산기가 아직 안 와서', '너는 남의 물건을 우습게 알아', '빨리 내놔'] }, target: { fill: { o: '지난주에 빌려 간 계산기가 아직 안 와서', r: '내일 수학 시간 전까지 돌려줄 수 있어?' } } } } },
            { prompt: '네 단계 말 가운데 비난이 섞여 고쳐야 할 말 카드를 모두 고르세요.', toolOptions: { mode: 'pick', basket: '고쳐야 할 말', cards: ['너는 늘 늦어서 다 망쳐', '회의에 20분 늦게 와서', '나는 시간이 모자랄까 걱정돼', '네가 이기적이라서 화나', '다음 회의는 5분 전에 와 줄 수 있어?', '알아서 좀 해'] }, target: { pick: ['너는 늘 늦어서 다 망쳐', '네가 이기적이라서 화나', '알아서 좀 해'] }, difficulty: 0.35,
              conclude: '\'늘\'·\'맨날\'·\'너는 ~한 사람\'은 관찰이 아니라 판단이에요. 본 것을 말하고, 내 마음을 말하고, 할 수 있는 행동을 부탁해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'너는 맨날 늦어\'를 관찰 문장으로 바꿔 쓰세요.' }] },
        notes: '민서·은호는 가상 인물이다. 비폭력 대화의 네 단계는 일반적인 의사소통 틀이며, 학생에게 실제 갈등 상대를 말하게 하지 않는다.',
      }),
      M({
        id: 'activity.write', type: 'activity', title: '비폭력 대화 문장 쓰기',
        method: '비폭력 대화 문장 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '빈칸 문장 틀("~를 보았을 때 나는 ~했어. 나는 ~를 바라. ~해 줄 수 있어?")을 채워 쓴다.', base: '갈등 사례 하나에 네 단계 문장을 처음부터 쓰고 기준표 네 항목을 점검한다.', challenge: '네 단계 문장에 더해 상대가 보일 반응을 예상해 한 문장을 덧붙이고 기준 하나를 더 점검한다.' },
        activity: {
          title: '네 단계 문장 쓰기', tool: 'rubric-writing',
          teacher: '"이번에는 카드 없이 직접 써요. 가상 사례 셋 중 하나를 골라요." 기준표 네 항목을 함께 읽고, 쓴 뒤 \'관찰에 판단 낱말(늘·맨날·이기적)이 없는가\'를 스스로 확인하게 한다. "그냥 \'미안해\'라고 하면 되잖아요"라는 학생에게 "이 사례에서 사과할 사람은 누구인가요? 내가 바라는 것을 말하는 것도 관계를 지키는 일이에요"라고 말한다.',
          task: '가상 갈등 사례에 관찰·느낌·바람·부탁 네 단계 문장을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('짝이 내 필기를 말없이 가져가 베꼈어요. 네 단계 문장을 쓰고 점검하세요.', '필기 사례: 짝이 내 필기 공책을 말없이 가져가 베꼈어요. 관찰·느낌·바람·부탁으로 쓰세요.', ['관찰에 판단 낱말 없이 본 것만 썼다', '내 느낌을 낱말로 썼다', '내 바람을 썼다', '상대가 할 수 있는 구체적 부탁을 썼다'], { min: 50, max: 300, starter: '내 공책을 말없이 가져간 것을 보았을 때 나는 ~했어. 나는 ~를 바라. ~해 줄 수 있어?', plus: '상대가 보일 반응을 예상해 한 문장 덧붙였다', must: [['줄 수 있어', '줄래', '해 줄']], d: 0.35 }),
            RWQ('모둠 회의에서 한 친구가 내 의견이 나올 때마다 말을 끊어요. 네 단계 문장을 쓰고 점검하세요.', '회의 사례: 내가 말할 때 친구가 세 번 말을 끊었어요. 관찰·느낌·바람·부탁으로 쓰세요.', ['관찰에 판단 낱말 없이 본 것만 썼다', '내 느낌을 낱말로 썼다', '내 바람을 썼다', '상대가 할 수 있는 구체적 부탁을 썼다'], { min: 50, max: 300, starter: '오늘 회의에서 내가 말할 때 ~번 말이 끊겼을 때 나는 ~했어. 나는 ~를 바라. ~해 줄 수 있어?', plus: '상대가 보일 반응을 예상해 한 문장 덧붙였다', d: 0.4 }),
            RWQ('반 단체 대화방에서 친구가 내 글에만 답하지 않아요. 네 단계 문장을 쓰고 점검하세요.', '대화방 사례: 이번 주 내 글 세 개에 친구가 답하지 않았어요. 관찰·느낌·바람·부탁으로 쓰세요.', ['관찰에 판단 낱말 없이 본 것만 썼다', '내 느낌을 낱말로 썼다', '내 바람을 썼다', '상대가 할 수 있는 구체적 부탁을 썼다'], { min: 50, max: 300, starter: '이번 주 내 글 ~개에 답이 없는 것을 보았을 때 나는 ~했어. 나는 ~를 바라. ~해 줄 수 있어?', plus: '상대가 보일 반응을 예상해 한 문장 덧붙였다', d: 0.4, more: { conclude: '솔직함은 비난이 아니라, 본 것과 내 마음과 바람을 분명히 말하는 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 문장 가운데 가장 바꾸기 어려웠던 단계와 그 까닭을 쓰세요.' }] },
        notes: '사례는 가상이다. 학생의 실제 갈등 상대나 겪은 일을 쓰게 하지 않는다.',
      }),

      M({
        id: 'wrap.practice', type: 'wrap', title: '짝과 비폭력 대화 주고받기',
        method: '짝 비폭력 대화 실습', tool: 'timer', minutes: 8,
        levels: { easy: '사례 하나로 한 사람이 네 단계를 말하고 다른 사람은 듣는다.', base: '사례 둘을 두고 1분씩 번갈아 말하며 점검 칸을 표시한다.', challenge: '역할을 바꿔 듣는 쪽이 들은 네 단계를 되짚어 말해 주고, 출구 질문에 들은 사람의 마음을 쓴다.' },
        wrap: {
          teacher: '"짝과 사례 카드 하나를 골라 1분 동안 네 단계로 말해 봐요. 듣는 사람은 끊지 않고 들어요." 타이머를 1분씩 번갈아 맞추고 신호와 함께 시작한다. 말한 뒤 점검 칸을 스스로 표시하게 한다. 웃음이 터져 말을 잇지 못하는 짝에게 "어색한 게 정상이에요. 처음엔 카드를 보고 읽어도 괜찮아요"라고 말한다. 연습 사례는 가상이며 실제 친구 이야기는 하지 않는다는 약속을 먼저 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝 대화 실습', labels: ['말하기', '바꾸기'], plan: { work: 30, rest: 30, rounds: 1 } }, prompt: '1분 말하기, 10초 바꾸기를 네 번(두 사람 × 사례 둘) 하도록 타이머를 맞추세요(초).', target: { plan: { work: 60, rest: 10, rounds: 4 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '내 말 점검' }, prompt: '실습에서 내가 한 말을 네 단계 점검 칸으로 표시하세요.', target: { selfCheck: ['본 것만 관찰로 말했다', '내 느낌을 낱말로 말했다', '내 바람을 말했다', '할 수 있는 행동을 부탁했다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '비폭력 대화의 부탁으로 알맞은 것은?', options: ['"좀 알아서 잘해 줘."', '"다음 회의에는 5분 전에 와 줄 수 있어?"', '"너 때문에 다 망했어."'], answer: 1, difficulty: 0.15, explain: '부탁은 상대가 듣고 바로 할 수 있는 구체적인 행동이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '짝 비폭력 대화 실습',
          items: [
            { type: 'check', prompt: '내가 말할 때 한 것에 표시하세요.', options: ['관찰', '느낌', '바람', '부탁'] },
            { type: 'short', prompt: '짝의 말 가운데 듣기 좋았던 한 마디를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.debate', type: 'wrap', title: '근거 중심 미니 토론',
        method: '근거 중심 미니 토론', tool: 'timer', minutes: 8,
        levels: { easy: '찬반 입론(각 1분)만 하고 근거의 출처를 하나씩 말한다.', base: '입론과 반론(상대 근거의 출처·관련성·대표성 짚기)까지 한다.', challenge: '입론·반론에 더해 최종 발언까지 하고, 생각이 바뀐 근거를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"주제는 \'매점을 쉬는 시간에도 열자\'예요. 이기는 쪽이 아니라 근거가 단단한 쪽을 찾아요." 찬반을 무작위로 나누고 타이머에 맞춰 입론·반론·최종 발언을 진행한다. 반론에서 사람을 공격하는 학생에게 "상대의 근거 중 출처·관련성·대표성 가운데 어디가 약한지 짚어 볼까요?"라고 돌려 묻는다. 토론 결과로 매점 운영을 정하지 않으며, 정답도 없다고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '미니 토론 차례', cards: ['반대 측 반론', '찬성 측 입론', '최종 발언', '반대 측 입론', '찬성 측 반론'] }, prompt: '미니 토론의 차례 카드를 놓으세요.', target: { order: ['찬성 측 입론', '반대 측 입론', '찬성 측 반론', '반대 측 반론', '최종 발언'] }, difficulty: 0.2 },
            { type: 'tool', tool: 'timer', options: { title: '발언 타이머', timeUnit: 'min', labels: ['발언', '작전'], plan: { work: 2, rest: 0, rounds: 2 } }, prompt: '발언 1분, 작전 1분을 다섯 번(입론 둘·반론 둘·최종 발언) 하도록 타이머를 맞추세요(분).', target: { plan: { work: 1, rest: 1, rounds: 5 } }, difficulty: 0.15 },
            { type: 'choice', prompt: '반론으로 가장 알맞은 것은?', options: ['"그쪽은 매점을 좋아해서 그렇게 말하는 거잖아요."', '"근거로 든 설문은 한 학년만 물어서 전교생을 대표하기 어렵습니다."', '"목소리가 크다고 맞는 건 아니죠."'], answer: 1, difficulty: 0.2, explain: '반론은 사람이 아니라 근거의 출처·관련성·대표성을 짚어요.' },
            { type: 'short', prompt: '토론에서 들은 근거 가운데 가장 단단했던 것과 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '근거 중심 미니 토론',
          items: [
            { type: 'table', prompt: '토론에서 나온 근거를 따져 보세요.', columns: ['근거', '출처', '관련성', '대표성'], cells: [['', '', '', ''], ['', '', '', '']] },
            { type: 'short', prompt: '반론할 때 사람이 아니라 근거를 짚는 말 한 문장을 쓰세요.' },
          ],
        },
        notes: '찬반은 무작위로 나눈다. 토론 결과로 학교 운영을 정하지 않으며 승패를 매기지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 10학년 4. 학생 자치법정과 규칙 개정안 (공동체 자치활동 — <표 5> 고 "자치법정 등 공동체 협의")
  // ======================================================================================================
  {
    const M = MOD('g10-self', [10]);
    const STEPS = ['사건 접수', '심리', '변론', '판결', '성찰 활동'];
    const JURY = { text: '가상 고등학교 자치법정. 배심원을 맡은 서아에게 사건 서류가 왔다. 지각을 되풀이한 학생이 서아의 가장 친한 친구다.', who: '서아', motif: 'house', choices: [
      { id: 'hide', text: '친한 사이라는 것을 말하지 않고 그대로 맡는다', result: '심리 중에 친구 쪽 말만 귀에 들어온다.', impact: [{ who: '사건 학생', text: '공정하지 않은 판단을 받을 수 있다', tone: -1 }],
        next: { text: '다른 배심원이 서아와 친구 사이를 알게 되어 판단을 의심한다.', choices: [
          { id: 'deny', text: '친구라도 상관없다고 버틴다', result: '배심원단 안에서 다툼이 생긴다.', impact: [{ who: '자치법정', text: '믿음을 잃는다', tone: -1 }], ending: '공정해 보이지 않는 판단은 결과가 같아도 믿기 어렵다.' },
          { id: 'late', text: '늦게라도 사실을 밝히고 물러난다', result: '판결이 미뤄지고 새 배심원을 정한다.', impact: [{ who: '자치법정', text: '늦었지만 공정함을 되찾는다', tone: 0 }], ending: '처음에 밝혔다면 더 일찍 공정함을 지킬 수 있었다.' }] } },
      { id: 'tell', text: '친한 사이라는 것을 밝히고 다른 배심원으로 바꿔 달라고 한다', result: '담당 교사가 다른 배심원을 정한다. 서아는 방청석에서 지켜본다.', impact: [{ who: '사건 학생', text: '공정한 심리를 받는다', tone: 1 }],
        next: { text: '친구가 서아에게 "내 편 좀 들어 줘. 증인으로 나서 줄래?"라고 부탁한다.', choices: [
          { id: 'truth', text: '본 사실만 말하는 증인이라면 나설 수 있다고 답한다', result: '서아는 친구가 아침마다 동생을 데려다준다는 사실을 증언한다.', impact: [{ who: '사건 학생', text: '사정이 판단에 담긴다', tone: 1 }],
            next: { text: '판결 회의에서 \'벌점만 주자\'는 의견과 \'사정을 듣고 성찰 활동을 정하자\'는 의견이 나온다.', choices: [
              { id: 'reflect', text: '사정과 되풀이 횟수를 함께 따져 지각을 줄일 성찰 활동을 정한다', result: '아침 시간 계획 세우기와 담임 상담이 정해진다.', impact: [{ who: '사건 학생', text: '행동을 바꿀 길을 얻는다', tone: 1 }], ending: '자치법정은 벌을 주는 곳이 아니라 행동을 돌아보고 바꾸게 돕는 곳이다.' },
              { id: 'punish', text: '본보기로 가장 무거운 벌을 주자고 한다', result: '사건 학생이 억울하다며 다음 심리에 나오지 않는다.', impact: [{ who: '사건 학생', text: '행동을 바꿀 까닭을 찾지 못한다', tone: -1 }], ending: '본보기 벌은 사정과 비례를 따지지 않는다.' }] } },
          { id: 'lie', text: '친구를 위해 본 적 없는 사정을 지어 말해 준다', result: '다른 증언과 맞지 않아 심리가 엉킨다.', impact: [{ who: '자치법정', text: '사실 확인이 어려워진다', tone: -1 }], ending: '편을 드는 거짓 증언은 친구도 법정도 지키지 못한다.' }] } }] };
    const JURY_R = [{ id: 'conflict', text: '판단할 사람이 당사자와 가까우면 미리 밝히고 물러난다' }, { id: 'fact', text: '증언은 본 사실만 말한다' }, { id: 'prop', text: '사정과 되풀이 횟수를 따져 알맞은 성찰 활동을 정한다' }, { id: 'friend', text: '친구 편을 드는 것이 의리다', why: '판단하는 자리에서 편을 들면 공정함이 무너져요.' }, { id: 'example', text: '본보기로 무겁게 벌해야 다른 학생이 조심한다', why: '자치법정은 벌주기보다 행동을 바꾸게 돕는 곳이에요.' }];
    const RULE_CLEAR = ['수업 시작 종이 울린 뒤 교실에 들어오면 지각으로 기록한다', '휴대폰은 1교시 시작 전 교실 보관함에 넣는다', '복도에서는 오른쪽으로 걷는다', '도서관 책은 빌린 날부터 14일 안에 돌려준다'];
    const RULE_VAGUE = ['학생답지 않은 복장은 안 된다', '수업 분위기를 해치는 행동을 하지 않는다', '불량한 태도를 보이면 벌점을 준다', '적절한 시간에 등교한다'];
    const EVAL = { A: [['목적', 4], ['대상', 3], ['명확성', 2], ['인권 존중', 4], ['실행 가능성', 3]], B: [['목적', 4], ['대상', 4], ['명확성', 5], ['인권 존중', 4], ['실행 가능성', 4]] };

    MODS.push(
      M({
        id: 'intro.scene', type: 'intro', title: '자치법정 사건 장면과 쟁점',
        method: '사건 장면 보고 쟁점 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 쟁점 카드 보기 둘(되풀이 횟수·사정) 가운데서 함께 고른다.', base: '쟁점 카드 보기 셋 가운데 이 사건에서 따질 것을 고른다.', challenge: '쟁점 두 장을 고르고, 함정 카드(성적·외모)가 쟁점이 아닌 까닭을 말한다.' },
        intro: {
          teacher: '"가상 고등학교 자치법정에 사건이 접수됐어요. 한 학생이 한 달에 지각을 여덟 번 했어요. 이 사건에서 따져야 할 것은 무엇일까요?" 시연 단추로 쟁점 카드가 골라지는 모습을 보여 준다. "지각했으면 벌 받으면 끝 아니에요?"라는 말이 나오면 "왜 늦었는지, 몇 번이었는지를 모르고도 알맞은 판단을 할 수 있을까요?"라고 되묻는다. 자치법정은 벌을 정하는 곳이 아니라 사실과 사정을 듣고 성찰 활동을 정하는 곳이라는 점을 짚는다.',
          student: '가상 자치법정 사건 장면을 읽고, 이 사건에서 따져야 할 쟁점 카드를 골라 보세요. 사건과 상관없는 카드는 남겨요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '따져야 할 쟁점', cards: ['지각이 한 달에 몇 번이었는가', '늦은 데 사정이 있었는가', '그 학생의 성적은 어떤가', '그 학생의 옷차림은 어떤가'] }, sequence: [{ pick: ['지각이 한 달에 몇 번이었는가', '늦은 데 사정이 있었는가'] }] },
          art: { draw: 'a paper student court room in a classroom, a small desk for the student judge, paper chairs for jurors, a wall clock cut from paper showing a late morning time', banner: '무엇을 따져야 할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '사건은 가상이다. 실제 학생의 생활 기록을 사례로 쓰지 않는다.',
      }),
      M({
        id: 'intro.rule', type: 'intro', title: '모호한 규칙 찾기',
        method: '모호한 규칙 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 규칙 카드 4장을 명확·모호 바구니에 나눠 보인다.', base: '규칙 카드 6장을 명확·모호 바구니에 나눈다.', challenge: '모호한 규칙에서 뜻이 갈리는 낱말(\'학생답지 않은\'·\'적절한\' 등)을 짚어 말한다.' },
        intro: {
          teacher: '"가상 학교 규칙 문장들이에요. 읽는 사람마다 다르게 판단할 수 있는 규칙은 어느 것일까요?" 시연 단추로 카드가 나뉘는 모습을 보여 준다. "규칙은 넓게 써야 모든 경우를 막을 수 있잖아요"라는 말이 나오면 "\'학생답지 않은 복장\'으로 벌점을 받았다면, 어떤 옷이 그런 옷인지 누가 정할까요?"라고 되묻는다. 넓은 규칙은 판단하는 사람 마음대로 쓰일 수 있다는 점을 짚고, 오늘은 자치법정 절차와 규칙 개정안을 다룬다고 밝힌다.',
          student: '가상 학교 규칙 카드를 읽고, 누가 읽어도 같은 뜻인 규칙(명확)과 사람마다 다르게 판단할 수 있는 규칙(모호)으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['명확', '모호'], cards: [RULE_CLEAR[0], RULE_VAGUE[0], RULE_CLEAR[1], RULE_VAGUE[1], RULE_CLEAR[2], RULE_VAGUE[2]] }, sequence: [{ sort: { 명확: RULE_CLEAR.slice(0, 3), 모호: RULE_VAGUE.slice(0, 3) } }] },
          art: { draw: 'a paper school rule board with strips of paper rules pinned on it, some strips crisp and straight, others crumpled and blurry, a magnifying glass made of paper in front', banner: '누가 읽어도 같은 뜻일까?', extra: [{ motif: 'book', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.steps', type: 'activity', title: '자치법정 절차 놓기',
        method: '자치법정 절차 놓기', tool: 'timeline', minutes: 18,
        levels: { easy: '절차 카드 4장(접수·심리·변론·판결)을 차례로 놓는다.', base: '절차 다섯 단계(성찰 활동까지)를 놓고, 가상 사건의 진행 카드를 차례로 놓는다.', challenge: '단계마다 맡는 역할(판사·배심원·변호인·사건 학생 등)을 짝짓고 함정 카드를 남긴다.' },
        activity: {
          title: '접수에서 성찰까지', tool: 'timeline',
          teacher: '"자치법정은 다섯 단계로 흘러가요. 사건 접수, 심리(사실 확인), 변론(사정 듣기), 판결, 성찰 활동." 첫 문항 뒤 "판결 다음이 왜 끝이 아닐까요?"라고 묻는다. 판결 바로 뒤에 \'벌점 공개\'를 놓는 학생에게 "공개하면 사건 학생은 행동을 바꾸기 쉬워질까요, 숨기고 싶어질까요?"라고 되묻는다. 단계마다 누가 무엇을 하는지 역할을 정해야 공정하게 돌아간다는 점을 짚는다. 이 절차는 수업용으로 정리한 틀이며 학교마다 운영 방식이 다를 수 있다고 말해 준다.',
          task: '자치법정 절차를 차례로 놓고, 단계마다 맡는 역할을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('자치법정 절차 다섯 단계를 차례로 놓으세요.', STEPS, { k: 4, d: 0.2, opt: { axis: ['먼저', '나중'] } }),
            ORDERQ('가상 지각 사건이 자치법정에서 진행된 차례대로 카드를 놓으세요.', ['학급 자치부가 사건을 접수한다', '지각 기록을 확인하는 심리를 연다', '사건 학생과 변호인이 사정을 말한다', '배심원이 논의해 판결한다', '아침 시간 계획 세우기 활동을 한다'], { k: 3, traps: ['판결 결과를 게시판에 이름과 함께 붙인다'], d: 0.3, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('자치법정에서 단계마다 중심 역할을 맡는 사람을 짝지으세요.', [['사건 접수', '학급 자치부'], ['심리', '판사 역 학생'], ['변론', '변호인 역 학생'], ['판결', '배심원단'], ['성찰 활동', '사건 학생과 담임 선생님']], { k: 3, extra: ['구경하는 다른 반 학생'], d: 0.35, opt: { axis: ['먼저', '나중'] }, more: { conclude: '역할을 나누는 까닭은 한 사람이 접수부터 판결까지 다 정하지 않게 하려는 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '판결 다음에 성찰 활동이 있어야 하는 까닭을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.fair', type: 'activity', title: '친한 친구 사건과 배심원',
        method: '공정한 판단 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(친분을 밝힐지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(증인 부탁)까지 가서 근거 한 장을 고른다.', challenge: '세 번째 갈림길(판결 회의)까지 가서 근거 두 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '서아의 배심원 자리', tool: 'dilemma',
          teacher: '"서아는 배심원인데, 사건 학생이 가장 친한 친구예요. 친구를 생각하면 그대로 맡아 편을 들어 주고 싶겠죠?" 첫 갈림길에서 \'말하지 않고 맡는다\'를 고르는 학생에게 "나중에 다른 배심원이 알게 되면, 판결이 맞아도 사람들이 믿을까요?"라고 묻는다. 세 번째 갈림길에서 \'본보기 벌\'을 고르면 "사건 학생은 그 벌로 아침 지각을 줄일 방법을 배울까요?"라고 되묻는다. 공정함은 결과뿐 아니라 판단하는 과정이 믿을 만해야 한다는 점을 짚는다.',
          task: '배심원 서아의 갈림길을 따라가며 공정한 판단의 원칙을 근거로 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('친한 친구 사건을 맡은 배심원 서아가 공정함을 지키는 길을 고르고 근거를 고르세요.', JURY, [['tell', 'truth', 'reflect']], JURY_R, ['conflict'], { d: 0.4, hardReasons: ['conflict', 'prop'] }),
            EXPLOREQ('\'말하지 않고 맡기\' 길도 끝까지 가 보고, 결과를 견주세요.', JURY, JURY_R, ['다른 길의 끝 장면을 확인했다', '자치법정의 믿음에 어떤 영향이 갔는지 짚었다'], { d: 0.35 }),
            DILQ('판사 역 학생 도현에게 사건 학생 쪽 선배가 "잘 봐 달라"고 말을 걸어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '심리 전날, 사건 학생과 같은 동아리 선배가 판사 역 도현에게 "후배니까 잘 봐 줘"라고 말한다.', who: '도현', motif: 'moon', choices: [
              { id: 'nod', text: '선배니까 알겠다고 답한다', result: '다음 날 심리에서 도현은 사건 학생 쪽 말만 묻는다.', impact: [{ who: '자치법정', text: '판단이 한쪽으로 기운다', tone: -1 }], ending: '심리 밖에서 받은 부탁은 공정함을 무너뜨린다.' },
              { id: 'refuse', text: '심리 밖에서는 사건 이야기를 하지 않는다고 정중히 말한다', result: '선배가 머쓱해하며 돌아간다.', impact: [{ who: '도현', text: '판단의 자리를 지킨다', tone: 1 }],
                next: { text: '도현은 이 일을 담당 교사에게 알릴지 고민한다.', choices: [
                  { id: 'report', text: '담당 교사에게 있었던 일을 그대로 알린다', result: '담당 교사가 심리 전 모두에게 \'법정 밖 부탁 금지\'를 다시 알린다.', impact: [{ who: '자치법정', text: '절차가 더 단단해진다', tone: 1 }], ending: '부탁을 밝히면 다음 사람도 같은 부탁을 받지 않는다.' },
                  { id: 'keep', text: '거절했으니 됐다며 아무에게도 말하지 않는다', result: '다른 배심원에게도 같은 부탁이 갔다는 것을 나중에 안다.', impact: [{ who: '자치법정', text: '빈틈이 남는다', tone: 0 }], ending: '혼자 거절하는 것보다 절차로 막는 것이 더 단단하다.' }] } }] },
              [['refuse', 'report']], [{ id: 'outside', text: '판단하는 사람은 심리 밖에서 사건 부탁을 받지 않는다' }, { id: 'open', text: '받은 부탁을 밝혀 절차로 막는다' }, { id: 'senior', text: '선배 말은 따르는 것이 예의다', why: '예의와 판단의 공정함은 다른 문제예요.' }], ['outside', 'open'], { d: 0.35, more: { conclude: '공정함은 판단하는 사람이 가까운 관계와 바깥 부탁에서 떨어져 있을 때 지켜져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '자치법정에서 판단하는 사람이 지켜야 할 원칙 하나를 오늘 갈림길을 들어 쓰세요.' }] },
        notes: '서아·도현은 가상 인물이다. 자치법정 운영 방식은 학교마다 다르며, 수업에서는 \'벌이 아닌 성찰 활동\' 틀로 다룬다.',
      }),
      M({
        id: 'activity.eval', type: 'activity', title: '개정안 두 개 점수 견주기',
        method: '개정안 평가 점수 그래프', tool: 'chart', minutes: 18,
        levels: { easy: '두 기준(명확성·인권 존중)만 막대로 그리고 견준다.', base: '다섯 기준(목적·대상·명확성·인권 존중·실행 가능성) 점수 막대를 그리고 견주어 읽는다.', challenge: '명확성에 가중치(2배)를 준 합계를 계산해, 가중치에 따라 결론이 달라지는지 짚는다.' },
        activity: {
          title: '개정안 평가 막대', tool: 'chart',
          teacher: '"가상 학교 \'복장 규정\' 개정안이 두 개 올라왔어요. 가안은 \'단정한 복장\', 나안은 \'교복 상의 또는 학교 체육복, 실내화 착용\'이에요. 다섯 기준으로 모둠이 매긴 점수를 막대로 그려 견줘 봐요." 점수는 모둠 합의로 정한 예시라고 밝힌다. "점수 합이 높으면 무조건 좋은 안이에요"라는 학생에게 "명확성이 특히 중요한 규칙이라면 그 기준에 더 무게를 둘 수도 있지 않을까요?"라고 묻는다. 기준과 무게를 먼저 정해야 평가가 공정하다는 점을 짚는다.',
          task: '개정안 두 개를 다섯 기준 점수 막대로 그리고 견주어 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가안(\'단정한 복장\')의 다섯 기준 점수(5점 만점, 모둠 예시)를 막대로 그리세요.', toolOptions: { type: 'bar', mode: 'build', title: '가안 평가 점수(모둠 예시)', unit: '점', xLabel: '기준', yLabel: '점수', data: EVAL.A, max: 5, scale: 1, given: [0] }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '가안의 두 기준(명확성·인권 존중) 점수를 막대로 그리세요(기준 둘).', toolOptions: { data: [['명확성', 2], ['인권 존중', 4]], given: [] } } } },
            { prompt: '나안(\'교복 상의 또는 체육복, 실내화\')의 다섯 기준 점수(모둠 예시)를 막대로 그리세요.', toolOptions: { type: 'bar', mode: 'build', title: '나안 평가 점수(모둠 예시)', unit: '점', xLabel: '기준', yLabel: '점수', data: EVAL.B, max: 5, scale: 1, given: [0] }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '나안의 두 기준(명확성·인권 존중) 점수를 막대로 그리세요(기준 둘).', toolOptions: { data: [['명확성', 5], ['인권 존중', 4]], given: [] } } } },
            { prompt: '두 안의 기준별 점수 차이를 봐요. 가안과 나안의 점수 차이가 가장 큰 기준을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '나안 점수 − 가안 점수(모둠 예시)', unit: '점', xLabel: '기준', yLabel: '점수 차', data: [['목적', 0], ['대상', 1], ['명확성', 3], ['인권 존중', 0], ['실행 가능성', 1]], max: 5, scale: 1, question: '점수 차이가 가장 큰 기준은?', choices: ['목적', '대상', '명확성', '인권 존중', '실행 가능성'] }, target: { pick: 2 }, difficulty: 0.3,
              conclude: '\'단정한\'은 사람마다 뜻이 달라 명확성이 낮아요. 두 안의 차이는 대부분 명확성에서 나와요.' },
            { prompt: '명확성 점수를 2배로 셈한 가안의 합계를 구하세요(목적 4·대상 3·명확성 2·인권 존중 4·실행 가능성 3).', toolOptions: { type: 'bar', mode: 'read', title: '가안 평가 점수(모둠 예시)', unit: '점', xLabel: '기준', yLabel: '점수', data: EVAL.A, max: 5, scale: 1, question: '명확성 2배를 넣은 가안의 합계는?' }, target: { value: 18 }, difficulty: 0.4,
              conclude: '가중치를 주면 중요한 기준의 약점이 더 크게 드러나요. 어떤 기준에 무게를 둘지도 함께 정해야 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 개정안 가운데 어느 쪽이 나은지, 가장 중요하다고 본 기준을 들어 한 문장으로 쓰세요.' }] },
        notes: '평가 점수는 모둠 합의로 정한 수업용 예시다. 실제 학교 규정을 평가하지 않고 가상 개정안으로 다룬다.',
      }),
      M({
        id: 'activity.fix', type: 'activity', title: '모호한 조문 고쳐 쓰기',
        method: '모호한 조문 고쳐 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '모호한 조문 하나를 문장 틀("~하면 ~로 본다")을 보고 고쳐 쓴다.', base: '모호한 조문 둘을 각각 고쳐 쓰고 기준표(누구에게·무엇을·언제·인권) 네 항목을 점검한다.', challenge: '고친 조문에 적용 사례(지켜진 경우·어긴 경우)까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '조문을 명확하게', tool: 'rubric-writing',
          teacher: '"모호한 조문을 고치는 요령은 \'누가 읽어도 같은 판단\'이 나오게 하는 거예요. 누구에게, 무엇을, 언제까지를 넣어요." 첫 조문을 함께 고쳐 본다. \'학생답지 않은 복장\'을 \'예의 바른 복장\'으로만 바꾼 학생에게 "\'예의 바른\'도 사람마다 다르지 않을까요? 눈으로 확인할 수 있는 말로 바꿔 볼까요?"라고 묻는다. 고칠 때 학생의 몸·외모를 지나치게 정하는 조문이 되지 않도록 인권 존중 기준을 함께 본다.',
          task: '가상 학교 규칙의 모호한 조문을 누가 읽어도 같은 뜻이 되게 고쳐 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('\'수업 분위기를 해치는 행동을 하지 않는다\'를 명확하게 고쳐 쓰고 점검하세요.', '조문 1: "수업 분위기를 해치는 행동을 하지 않는다"를 누가 읽어도 같은 뜻이 되게 고쳐 쓰세요.', ['누구에게 적용되는지 썼다', '무엇을 하면 어기는지 눈으로 확인할 수 있게 썼다', '언제(어느 시간)에 적용되는지 썼다', '학생의 인권을 지나치게 막지 않는다'], { min: 30, max: 250, starter: '수업 시간에 ~하면 수업 방해로 본다.', sample: '수업 시간에 선생님이 멈춰 달라고 한 뒤에도 큰 소리로 다른 이야기를 이어 가면 수업 방해로 본다.', plus: '지켜진 경우와 어긴 경우의 적용 사례를 썼다', d: 0.35 }),
            RWQ('\'적절한 시간에 등교한다\'를 명확하게 고쳐 쓰고 점검하세요.', '조문 2: "적절한 시간에 등교한다"를 누가 읽어도 같은 뜻이 되게 고쳐 쓰세요.', ['누구에게 적용되는지 썼다', '무엇을 하면 어기는지 눈으로 확인할 수 있게 썼다', '언제(어느 시간)에 적용되는지 썼다', '학생의 인권을 지나치게 막지 않는다'], { min: 30, max: 250, starter: '모든 학생은 ~시 ~분까지 ~에 들어온다.', plus: '지켜진 경우와 어긴 경우의 적용 사례를 썼다', d: 0.4 }),
            RWQ('고친 두 조문 가운데 하나를 골라, 고치기 전보다 무엇이 나아졌는지 두 문장으로 쓰고 점검하세요.', '고친 조문 하나를 골라 고치기 전과 견주어 나아진 점을 두 문장으로 쓰세요.', ['고치기 전 조문의 모호한 낱말을 짚었다', '고친 뒤 판단이 같아지는 까닭을 썼다', '고친 조문이 인권을 존중하는지 따졌다'], { min: 40, max: 250, sent: [2, 3], d: 0.35, more: { conclude: '좋은 조문은 넓지 않고 분명해요. 누가 읽어도 같은 판단이 나오고, 사람의 권리를 지나치게 막지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고치기 전과 고친 뒤를 견주어 쓰세요.', columns: ['고치기 전', '모호한 낱말', '고친 조문'], cells: [['수업 분위기를 해치는 행동', '', ''], ['적절한 시간에 등교', '', '']] }] },
        notes: '조문은 가상 학교 규칙이다. 학교 규칙의 실제 제·개정 절차는 학교마다 다르므로 교사가 우리 학교 학칙으로 확인해 준다.',
      }),

      M({
        id: 'wrap.trial', type: 'wrap', title: '7분 모의 자치법정',
        method: '모의 자치법정', tool: 'timer', minutes: 8,
        levels: { easy: '심리(사실 확인)만 2분 동안 하고 절차 점검 칸 둘을 표시한다.', base: '심리·변론·판결까지 진행하고 절차 점검 칸 넷을 모두 표시한다.', challenge: '판결 뒤 사건 학생이 할 성찰 활동을 배심원단이 정하고 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"가상 사건 \'과제 제출 기한 세 번 어김\'으로 7분 모의 자치법정을 열어요. 판사 1명, 변호인 1명, 배심원 3명, 사건 학생 역 1명이에요." 역할 카드를 무작위로 나누고 타이머로 단계마다 시간을 지킨다. 배심원이 \'본보기로 무겁게\'를 말하면 "되풀이 횟수와 사정을 따졌나요?"라고 묻는다. 절차 점검 칸을 함께 표시하고, 사건 학생 역은 연기일 뿐 실제 학생과 상관없다고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모의 자치법정 점검', timeUnit: 'min', labels: ['단계', '정리'], plan: { work: 1, rest: 1, rounds: 1 }, safety: ['판단하는 사람과 사건 학생이 가까운 사이인지 확인했다', '심리에서 사실과 추측을 나눴다', '변론에서 사정을 끝까지 들었다', '벌이 아니라 성찰 활동으로 판결했다'] }, prompt: '단계마다 2분, 정리 0분으로 세 단계(심리·변론·판결)를 하도록 타이머를 맞추고 절차 점검 네 칸을 확인하세요(분).', target: { plan: { work: 2, rest: 0, rounds: 3 }, safety: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '자치법정에 대한 말로 알맞은 것은?', options: ['자치법정은 잘못한 학생에게 벌을 주는 곳이다', '자치법정은 사실과 사정을 듣고 행동을 바꿀 성찰 활동을 정한다', '판결은 배심원의 친분에 따라 달라져도 된다'], answer: 1, difficulty: 0.15, explain: '자치법정은 벌보다 사실과 사정을 따져 행동을 돌아보게 돕는 곳이에요.' },
            { type: 'short', prompt: '모의 법정 사건 학생 역이 할 성찰 활동 하나와 그렇게 정한 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '모의 자치법정 기록',
          items: [
            { type: 'table', prompt: '모의 법정 단계마다 나온 내용을 쓰세요.', columns: ['단계', '나온 내용'], cells: [['심리(사실)', ''], ['변론(사정)', ''], ['판결(성찰 활동)', '']] },
            { type: 'check', prompt: '우리 모의 법정이 지킨 것에 표시하세요.', options: ['친분 확인', '사실과 추측 나누기', '사정 끝까지 듣기', '성찰 활동으로 판결'] },
          ],
        },
        notes: '역할은 무작위로 나누고, 사건 학생 역은 연기라고 밝힌다. 실제 학생의 사안을 모의 법정에 올리지 않는다. 8분 정리 시간에 맞춰 단계마다 2분으로 줄여 진행한다.',
      }),
      M({
        id: 'wrap.forum', type: 'wrap', title: '규칙 개정 학급 토론회',
        method: '규칙 개정 학급 토론회', tool: 'timer', minutes: 8,
        levels: { easy: '고친 조문 하나를 두고 찬성·반대 의견 수만 기록한다.', base: '고친 조문 둘을 두고 의견 수와 고칠 점을 기록한다.', challenge: '다수 의견과 함께 소수 의견 하나를 기록판에 따로 남기고 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"모둠에서 고친 조문을 학급 토론회에 올려요. 한 사람 30초씩 의견을 말하고, 기록 담당은 의견 수를 적어요." 타이머로 발언 시간을 지키고 기록판에 찬성·반대·소수 의견 수를 적게 한다. "다수결로 정했으니 소수 의견은 지워도 돼요"라는 학생에게 "소수 의견에 다음 개정 때 고칠 점이 들어 있다면요?"라고 되묻는다. 토론회는 학교 규칙을 바로 바꾸는 자리가 아니라, 학생회에 올릴 의견을 모으는 연습이라고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '토론회 발언 타이머', labels: ['발언', '기록'], plan: { work: 20, rest: 20, rounds: 4 } }, prompt: '한 사람 30초 발언, 10초 기록을 여섯 번 하도록 타이머를 맞추세요(초).', target: { plan: { work: 30, rest: 10, rounds: 6 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '토론회 의견 기록', fields: [{ label: '찬성 의견', unit: '개', step: 1 }, { label: '반대 의견', unit: '개', step: 1 }, { label: '소수 의견', unit: '개', step: 1 }] }, prompt: '토론회에서 나온 찬성·반대·소수 의견 수를 기록판에 모두 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '토론회 소수 의견에 대한 말로 알맞은 것은?', options: ['다수결로 정했으니 지운다', '기록으로 남겨 다음 개정 때 다시 본다', '소수 의견을 낸 사람을 설득할 때까지 토론을 끝내지 않는다'], answer: 1, difficulty: 0.15, explain: '소수 의견은 지우지 않고 남겨 다음에 고칠 점으로 살펴요.' },
            { type: 'short', prompt: '토론회에서 나온 소수 의견 하나를 쓰고, 그 의견이 고칠 점을 알려 주는지 쓰세요.' },
          ],
        },
        worksheet: {
          title: '규칙 개정 토론회 기록',
          items: [
            { type: 'table', prompt: '조문마다 나온 의견을 쓰세요.', columns: ['조문', '다수 의견', '소수 의견', '고칠 점'], cells: [['조문 1', '', '', ''], ['조문 2', '', '', '']] },
            { type: 'short', prompt: '학생회에 올릴 최종 개정안을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '토론회는 의견을 모으는 연습이다. 실제 학교 규칙 개정은 학교 절차(학생회·학교운영위원회 등)를 따르므로 교사가 우리 학교 절차로 확인해 준다.',
      }),
    );
  }

  // ======================================================================================================
  // 10학년 5. 진로 연계 탐구 설계와 연구 윤리 (주제 탐구 활동 — <표 5> 고 "진로와 연계된 분야의 주제 탐구")
  // ======================================================================================================
  {
    const M = MOD('g10-topic', [10]);
    const DEADLINE = { text: '가상 고등학교 탐구 동아리. 태오 모둠은 \'운동장 나무 그늘과 기온\' 탐구 발표가 내일이다. 계획한 측정 10번 가운데 6번만 했다.', who: '태오', motif: 'tree', choices: [
      { id: 'fake', text: '나머지 4번은 앞의 값과 비슷하게 지어 채운다', result: '표는 꽉 찼지만 실제로 잰 값이 아니다.', impact: [{ who: '발표를 듣는 친구들', text: '지어낸 자료를 사실로 믿는다', tone: -1 }],
        next: { text: '발표 뒤 친구가 "4번째 값은 비 온 날인데 왜 이렇게 높아요?"라고 묻는다.', choices: [
          { id: 'cover', text: '얼버무리고 넘어간다', result: '의심이 남고 모둠 탐구 전체를 믿기 어렵게 된다.', impact: [{ who: '모둠', text: '신뢰를 잃는다', tone: -1 }], ending: '지어낸 자료는 들킬 때까지가 아니라 처음부터 탐구를 무너뜨린다.' },
          { id: 'confess', text: '지어낸 값이라고 털어놓고 사과한다', result: '발표를 다시 하기로 한다.', impact: [{ who: '모둠', text: '늦었지만 바로잡는다', tone: 0 }], ending: '바로잡을 수는 있지만, 처음부터 있는 그대로 밝히는 편이 낫다.' }] } },
      { id: 'honest', text: '6번만 잰 사실을 밝히고 그 자료로 발표한다', result: '자료는 적지만 모두 실제 값이다.', impact: [{ who: '모둠', text: '믿을 수 있는 자료로 말한다', tone: 1 }],
        next: { text: '6번 가운데 한 번은 온도계를 햇빛에 둔 채 재서 값이 튀었다.', choices: [
          { id: 'mark', text: '그 값을 지우지 않고 \'측정 실수\'라고 표시해 따로 설명한다', result: '청중이 왜 그 값을 빼고 해석했는지 이해한다.', impact: [{ who: '청중', text: '과정을 믿는다', tone: 1 }],
            next: { text: '발표가 끝나고, 선생님이 "자료가 부족한데 결론을 어떻게 썼나요?"라고 묻는다.', choices: [
              { id: 'limit', text: '\'측정이 적어 이번 결론은 잠정적이다\'라고 한계와 다음 계획을 밝힌다', result: '선생님이 다음 측정 계획을 함께 세우자고 한다.', impact: [{ who: '모둠', text: '탐구를 이어 갈 길이 생긴다', tone: 1 }], ending: '한계를 밝히는 것은 약점이 아니라 정직한 탐구의 일부다.' },
              { id: 'over', text: '\'나무 그늘은 언제나 5도 낮다\'고 단정한다', result: '6번 자료로 \'언제나\'를 말하기 어렵다는 지적을 받는다.', impact: [{ who: '모둠', text: '결론의 힘이 약해진다', tone: -1 }], ending: '자료보다 큰 결론은 자료를 지어내는 것과 닮아 있다.' }] } },
          { id: 'delete', text: '튄 값을 아무 말 없이 지운다', result: '표는 깔끔해졌지만 무엇을 뺐는지 아무도 모른다.', impact: [{ who: '청중', text: '과정을 확인할 수 없다', tone: -1 }], ending: '말없이 지우거나 바꾸면 변조가 될 수 있다.' }] } },
      { id: 'copy', text: '인터넷에서 찾은 다른 학교 탐구 자료를 출처 없이 옮긴다', result: '그래프는 그럴듯하지만 우리가 잰 것이 아니다.', impact: [{ who: '원래 탐구한 사람', text: '자기 결과를 빼앗긴다', tone: -1 }], ending: '남의 자료를 출처 없이 쓰면 표절이다.' }] };
    const DEADLINE_R = [{ id: 'real', text: '실제로 얻은 자료만 쓰고, 부족하면 부족하다고 밝힌다' }, { id: 'trace', text: '뺀 값이나 실수는 지우지 않고 까닭과 함께 적는다' }, { id: 'limit', text: '자료의 한계에 맞게 결론을 쓴다' }, { id: 'full', text: '표가 비어 있으면 점수가 깎이니 채워야 한다', why: '빈칸을 지어 채우면 위조예요. 부족함은 밝히면 돼요.' }, { id: 'small', text: '조금만 바꾸면 아무도 모른다', why: '들키는지가 아니라 사실인지가 기준이에요.' }];
    const PLAG = ['다른 사람의 보고서 문단을 출처 없이 옮겨 썼다', '인터넷 그래프를 내가 만든 것처럼 붙였다', '친구의 탐구 질문을 허락 없이 내 것으로 냈다'];
    const FABR = ['하지 않은 설문 결과를 지어 표에 넣었다', '측정하지 않은 날의 온도를 만들어 적었다', '없는 인터뷰 내용을 지어 인용했다'];
    const FALS = ['가설과 맞지 않는 값을 몰래 지웠다', '그래프 눈금을 바꿔 차이를 크게 보이게 했다', '응답 수 40명을 400명으로 고쳐 적었다'];
    const OK = ['인용한 문장에 따옴표와 출처를 달았다', '측정 실수 값을 표시하고 까닭을 적었다'];

    MODS.push(
      M({
        id: 'intro.career', type: 'intro', title: '관심 분야에서 탐구 질문 뻗기',
        method: '진로 관심 분야 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 셋(원인·영향·해결)에 궁금한 점 카드를 하나씩 붙여 보인다.', base: '가지 다섯(원인·영향·해결·측정 방법·관련 직업)에 궁금한 점 카드를 나눈다.', challenge: '걷지 않는 활동지에 내 관심 분야를 가운데 두고 가지마다 질문 하나씩을 적는다.' },
        intro: {
          teacher: '"가상 인물 태오는 환경 공학에 관심이 있어요. 관심 분야는 너무 넓어서 그대로는 탐구가 안 돼요. 궁금한 점을 가지로 뻗어 좁혀 봐요." 시연 단추로 \'도시 열섬\'에서 가지가 뻗는 모습을 보여 준다. "관심 분야가 아직 없어요"라는 학생에게 "요즘 자주 보는 영상이나 궁금했던 뉴스 하나에서 시작해도 돼요"라고 말한다. 내 관심 분야는 발표하지 않고 걷지 않는 활동지에만 적는다고 밝히고, 오늘은 탐구 설계와 연구 윤리를 다룬다고 밝힌다.',
          student: '가상 인물 태오의 관심 주제 \'도시 열섬\'에서 궁금한 점 카드를 원인·영향·해결·측정 방법·관련 직업 가지에 나누어 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '도시 열섬', slots: ['원인', '영향', '해결', '측정 방법', '관련 직업'], cards: ['아스팔트가 열을 얼마나 머금을까?', '열섬은 잠에 어떤 영향을 줄까?', '나무를 심으면 얼마나 시원해질까?', '그늘과 양지의 기온을 어떻게 잴까?', '도시 녹지를 설계하는 사람은 누구일까?'] }, sequence: [{ sort: { 원인: ['아스팔트가 열을 얼마나 머금을까?'], 영향: ['열섬은 잠에 어떤 영향을 줄까?'], 해결: ['나무를 심으면 얼마나 시원해질까?'], '측정 방법': ['그늘과 양지의 기온을 어떻게 잴까?'], '관련 직업': ['도시 녹지를 설계하는 사람은 누구일까?'] } }] },
          art: { draw: 'a paper mind map spreading from a small paper city block with tall buildings and a single tree, branches of paper strips with question cards, a thermometer cut from paper', banner: '넓은 관심을 질문으로 좁혀요', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
        notes: '태오는 가상 인물이다. 학생의 진로 관심 분야를 발표시키거나 기록·채점하지 않는다(걷지 않는 활동지).',
      }),
      M({
        id: 'intro.case', type: 'intro', title: '지어낸 자료가 남긴 마음',
        method: '연구 부정 사례 장면', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 둘(지어낸 모둠원·믿고 따라 한 학생)의 마음만 짝지어 보인다.', base: '장면 셋의 사람마다 마음을 짝짓는다.', challenge: '장면 넷을 짝짓고, 장면 속 잘못에 위조·변조·표절 가운데 알맞은 이름을 붙여 말한다.' },
        intro: {
          teacher: '"가상 학교 탐구 대회에서, 한 모둠이 하지 않은 설문 결과를 지어 발표했다는 것이 드러났어요. 이 일로 마음이 흔들린 사람은 지어낸 사람만일까요?" 시연 단추로 사람마다의 마음 카드가 짝지어지는 모습을 보여 준다. "들키지만 않으면 아무도 안 다치잖아요"라는 말이 나오면 "그 결과를 믿고 자기 탐구에 인용한 다른 학생은 어떻게 될까요?"라고 되묻는다. 연구 부정은 나 혼자의 일이 아니라 그 자료를 믿은 모두에게 번진다는 점을 짚는다.',
          student: '탐구 자료를 지어낸 일이 드러난 장면을 읽고, 장면 속 사람마다 들었을 마음 카드를 짝지어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['실망', '억울함', '부끄러움', '걱정'], slots: [{ id: 'a', label: '그 결과를 믿고 자기 보고서에 인용한 다른 학교 학생' }, { id: 'b', label: '같은 대회에서 직접 설문을 돌려 정직하게 발표한 모둠' }, { id: 'c', label: '지어낸 값이 드러나 발표를 취소한 모둠원' }, { id: 'd', label: '다음 해 대회 참가를 준비하는 1학년' }] }, sequence: [{ match: { a: '실망', b: '억울함', c: '부끄러움', d: '걱정' } }] },
          art: { draw: 'a paper science fair hall with poster boards, one poster with a crumpled paper chart being taken down, other students watching from their own boards, soft grey paper light', banner: '지어낸 자료는 누구를 흔들까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이다. 실제 연구 부정 사건·인물을 다루지 않는다.',
      }),

      M({
        id: 'activity.design', type: 'activity', title: '탐구 설계서 쓰기',
        method: '탐구 설계서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '탐구 질문과 가설 두 요소만 문장 틀을 보고 쓴다.', base: '질문·가설·방법·산출물 네 요소를 갖춘 설계서를 쓰고 기준표로 점검한다.', challenge: '네 요소에 더해 주별 일정까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '태오의 탐구 설계서', tool: 'rubric-writing',
          teacher: '"설계서는 네 가지를 갖춰야 해요. 무엇이 궁금한지(질문), 무엇을 예상하는지(가설), 어떻게 알아볼지(방법), 무엇을 만들어 낼지(산출물)." 칠판에 네 칸을 그리고 태오의 주제로 첫 칸을 함께 채운다. 질문을 \'열섬에 대해 알아보자\'로 쓴 학생에게 "이 질문으로 무엇을 재면 답이 나올까요? 잴 수 있게 좁혀 볼까요?"라고 묻는다. 가설이 질문을 되풀이만 하면 "예상하는 결과를 \'~할수록 ~할 것이다\'로 써 볼까요?"라고 되묻는다.',
          task: '가상 인물 태오의 진로 연계 탐구 설계서를 질문·가설·방법·산출물 요소로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '태오의 주제 \'운동장 나무 그늘과 기온\'으로 질문·가설·방법·산출물을 갖춘 설계서를 쓰고 점검하세요.', toolOptions: { topic: '태오의 탐구 설계서: 질문·가설·방법·산출물을 한 문장씩 쓰세요(주제: 운동장 나무 그늘과 기온).', minChars: 100, maxChars: 450, sample: '질문: 운동장 나무 그늘은 양지보다 기온이 얼마나 낮을까? 가설: 그늘이 넓을수록 양지와의 기온 차가 클 것이다. 방법: 2주 동안 오후 1시에 그늘 세 곳과 양지 세 곳의 기온을 같은 온도계로 잰다. 산출물: 기온 차 그래프와 학교 그늘 쉼터 제안서.' }, target: { selfCheck: ['잴 수 있는 탐구 질문을 썼다', '\'~할수록 ~할 것이다\' 꼴의 가설을 썼다', '언제·어디서·무엇으로 잴지 방법을 썼다', '만들어 낼 산출물을 썼다'] }, difficulty: 0.4,
              levels: {
                easy: { prompt: '태오의 주제 \'운동장 나무 그늘과 기온\'으로 탐구 질문과 가설 두 요소를 쓰고 점검하세요(두 요소).', toolOptions: { topic: '태오의 탐구 질문과 가설을 한 문장씩 쓰세요.', minChars: 40, starter: '질문: ~은 ~보다 ~할까? 가설: ~할수록 ~할 것이다.' }, target: { selfCheck: ['잴 수 있는 탐구 질문을 썼다', '\'~할수록 ~할 것이다\' 꼴의 가설을 썼다', '질문과 가설이 같은 것을 다룬다'] } },
                challenge: { prompt: '네 요소에 더해 4주 일정까지 넣은 설계서를 쓰고 점검하세요(일정까지).', toolOptions: { minChars: 140 }, target: { selfCheck: ['잴 수 있는 탐구 질문을 썼다', '\'~할수록 ~할 것이다\' 꼴의 가설을 썼다', '언제·어디서·무엇으로 잴지 방법을 썼다', '만들어 낼 산출물을 썼다', '주별 일정을 썼다'], mustInclude: [['주', '일정']] } },
              } },
            RWQ('넓은 질문 \'급식에 대해 알아보자\'를 잴 수 있는 탐구 질문과 방법으로 좁혀 쓰고 점검하세요.', '\'급식에 대해 알아보자\'를 잴 수 있는 탐구 질문 하나와 그 방법으로 좁혀 쓰세요.', ['잴 수 있는 탐구 질문으로 좁혔다', '무엇을 얼마 동안 잴지 썼다', '사람에게 묻는다면 동의와 익명을 지킬 방법을 썼다'], { min: 50, max: 300, starter: '질문: 급식 ~은 ~에 따라 달라질까? 방법: ~동안 ~를 잰다.', d: 0.35 }),
            RWQ('태오의 탐구 결과로 만들 산출물이 진로(환경 공학)와 어떻게 이어지는지 두 문장으로 쓰고 점검하세요.', '태오의 산출물(그래프·제안서)이 환경 공학 진로와 어떻게 이어지는지 두 문장으로 쓰세요.', ['산출물이 무엇인지 썼다', '진로 분야에서 하는 일과 이었다', '탐구를 넘는 지나친 주장을 하지 않았다'], { min: 40, max: 250, sent: [2, 3], d: 0.35, more: { conclude: '좋은 설계서는 잴 수 있는 질문, 확인할 수 있는 가설, 따라 할 수 있는 방법, 쓸모 있는 산출물을 갖춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 관심 분야로 설계서 초안을 써 보세요(걷지 않음 — 나만 봐요).', columns: ['질문', '가설', '방법', '산출물'], cells: [['', '', '', '']] }] },
        notes: '채점·자기 점검은 가상 인물 태오의 설계서로 한다. 학생 자신의 진로 분야 설계는 걷지 않는 활동지에 쓴다. 사람에게 묻는 탐구는 동의·익명 원칙을 함께 다룬다.',
      }),
      M({
        id: 'activity.data', type: 'activity', title: '얻을 자료 미리 그려 보기',
        method: '방법별 자료 그래프 예측', tool: 'chart', minutes: 18,
        levels: { easy: '예측 표를 보고 꺾은선 하나를 값이 보이는 상태로 그린다.', base: '예측 꺾은선과 막대 두 개를 그리고, 방법에 맞는 그래프 종류를 고른다.', challenge: '가로축·세로축에 놓을 변수(바꾸는 것·재는 것)를 골라 그래프와 변수를 함께 짚는다.' },
        activity: {
          title: '예측 그래프 그리기', tool: 'chart',
          teacher: '"측정하기 전에 얻을 자료를 미리 그려 보면 방법의 빈틈이 보여요. 이 그래프는 결과가 아니라 \'예측\'이에요." 화면 제목의 \'예측\'·\'가상\'을 함께 읽는다. 시간에 따라 바뀌는 자료를 막대로 그리려는 학생에게 "시간이 흐르며 이어지는 변화는 어떤 그래프가 잘 보여 줄까요?"라고 묻는다. 예측과 실제 결과가 다를 수 있고, 다르면 그것도 탐구의 발견이라는 점을 짚는다.',
          task: '태오의 탐구 방법으로 얻을 자료를 예측 그래프로 그리고, 알맞은 그래프와 변수를 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '태오가 예측한 하루 양지 기온 변화(가상 예측)를 꺾은선으로 그리세요.', toolOptions: { type: 'line', mode: 'build', title: '양지 기온 예측(가상)', unit: '°C', xLabel: '시각', yLabel: '기온', data: [['9시', 24], ['11시', 28], ['13시', 32], ['15시', 31], ['17시', 27]], from: 20, max: 34, scale: 2, given: [0] }, target: { build: true }, difficulty: 0.2 },
            { prompt: '같은 시각(13시) 그늘 세 곳과 양지의 예측 기온(가상)을 막대로 그리세요.', toolOptions: { type: 'bar', mode: 'build', title: '13시 장소별 기온 예측(가상)', unit: '°C', xLabel: '장소', yLabel: '기온', data: [['양지', 32], ['큰 나무 그늘', 27], ['작은 나무 그늘', 29], ['건물 그늘', 28]], max: 34, scale: 1, given: [0] }, target: { build: true }, difficulty: 0.25 },
            { prompt: '\'2주 동안 매일 오후 1시 기온이 어떻게 바뀌는지\'를 보이려면 어떤 그래프가 알맞은지 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '알맞은 그래프 고르기(가상 예측)', unit: '°C', xLabel: '날', yLabel: '기온', data: [['1일', 30], ['4일', 31], ['7일', 29], ['10일', 33], ['14일', 32]], from: 26, max: 34, scale: 1, question: '날마다 이어지는 변화를 보이기에 알맞은 그래프는?', choices: ['꺾은선그래프', '원그래프', '그림그래프'], why: ['', '원그래프는 전체에서 차지하는 비율을 보일 때 써요.', '그림그래프는 수를 그림으로 셀 때 써요.'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '\'그늘 넓이에 따라 기온 차가 달라지는가\'를 그래프로 보일 때 가로축에 놓을 변수를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '그늘 넓이와 기온 차(가상 예측)', unit: '°C', xLabel: '그늘 넓이', yLabel: '양지와의 기온 차', data: [['좁음', 2], ['보통', 3], ['넓음', 5]], max: 6, scale: 1, question: '가로축(바꾸는 것)에 놓을 변수는?', choices: ['그늘 넓이', '양지와의 기온 차', '측정한 사람'], why: ['', '기온 차는 재는 것이라 세로축에 놓아요.', '측정한 사람은 같게 두어야 할 조건이에요.'] }, target: { pick: 0 }, difficulty: 0.4,
              conclude: '바꾸는 것은 가로축, 재는 것은 세로축, 나머지 조건은 같게 — 그래프를 미리 그리면 방법이 분명해져요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '태오의 탐구에서 같게 두어야 할 조건 두 가지를 쓰세요.' }] },
        notes: '그래프 값은 탐구 전 예측을 나타낸 가상 값이다(실제 측정 결과 아님).',
      }),
      M({
        id: 'activity.type', type: 'activity', title: '표절·위조·변조 가리기',
        method: '표절·위조·변조 가리기', tool: 'sortboard', minutes: 18,
        levels: { easy: '사례 카드 3장(종류마다 1장)을 세 바구니에 나누고, 틀리면 까닭을 듣고 다시 놓는다.', base: '사례 카드 6장을 표절·위조·변조 바구니에 나눈다.', challenge: '카드가 더해지고, 연구 부정이 아닌 정상 사례 카드는 어느 바구니에도 넣지 않고 남긴다.' },
        activity: {
          title: '세 가지 연구 부정', tool: 'sortboard',
          teacher: '"연구 부정 세 가지를 구별해 봐요. 표절은 남의 것을 내 것처럼, 위조는 없는 것을 만들기, 변조는 있는 것을 바꾸기예요." 카드를 놓을 때마다 "이 자료는 원래 있었나요, 없었나요? 누구의 것인가요?"라고 묻는다. "인터넷 글은 누구나 볼 수 있으니 출처 없이 써도 된다"는 학생에게 "누구나 볼 수 있다고 누구나의 것일까요? 그 글을 쓴 사람은 있지 않나요?"라고 되묻는다. 도전 단계의 정상 사례를 바구니에 넣는 학생에게 출처를 달고 실수를 밝힌 것은 오히려 지켜야 할 행동이라는 점을 짚는다.',
          task: '탐구 사례 카드를 표절·위조·변조 바구니에 나누고, 정상 사례는 남겨요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBQ('탐구 사례 카드를 표절·위조·변조 바구니에 나누세요.', ['표절', '위조', '변조'], [PLAG.slice(0, 2), FABR.slice(0, 2), FALS.slice(0, 2)], { k: 1, hard: [[PLAG[2]], [FABR[2]], [FALS[2]]], traps: [], d: 0.3, more: {} }),
            Object.assign(SBQ('탐구 발표 준비 장면의 카드를 나누세요. 연구 부정이 아닌 카드는 남겨요.', ['표절', '위조', '변조'], [[PLAG[2]], [FABR[2]], [FALS[2]]], { k: 1, d: 0.35 }), {
              levels: { challenge: { prompt: '탐구 발표 준비 장면의 카드를 나누세요. 연구 부정이 아닌 정상 사례 카드는 남겨요(정상 사례 섞기).', toolOptions: { cards: [PLAG[2], OK[0], FABR[2], FALS[2], OK[1]] }, target: { sort: { 표절: [PLAG[2]], 위조: [FABR[2]], 변조: [FALS[2]] } } } } }),
            SBQ('탐구 보고서 고치기 장면의 카드를 \'지켜야 할 행동\'과 \'연구 부정\' 바구니에 나누세요.', ['지켜야 할 행동', '연구 부정'], [
              [OK[0], OK[1], '자료가 부족하면 결론에 한계를 밝혔다'],
              ['남의 사진을 출처 없이 표지에 썼다', '결과가 좋게 보이도록 응답 몇 개를 바꿨다', '하지도 않은 실험 사진을 다른 곳에서 가져왔다'],
            ], { k: 2, hard: [['함께 탐구한 친구 이름을 보고서에 밝혔다'], ['혼자 한 것처럼 모둠원 이름을 뺐다']], d: 0.35, more: { conclude: '출처를 달고, 실수를 밝히고, 한계를 쓰는 것 — 정직한 탐구는 빈틈을 숨기지 않는 데서 시작해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'인터넷 글은 출처 없이 써도 된다\'는 말을 고쳐 쓰세요.' }] },
      }),
      M({
        id: 'activity.ethics', type: 'activity', title: '마감 전날 연구 윤리 갈림길',
        method: '연구 윤리 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(부족한 자료를 어떻게 할지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(튄 값 처리)까지 가서 근거 한 장을 고른다.', challenge: '세 번째 갈림길(결론 쓰기)까지 가서 근거 두 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '태오 모둠의 마감 전날', tool: 'dilemma',
          teacher: '"발표는 내일, 측정은 10번 중 6번. 여러분이 태오 모둠이라면?" 첫 갈림길에서 \'지어 채운다\'를 고르는 학생에게 "표가 꽉 찬 것과 탐구가 믿을 만한 것은 같을까요?"라고 묻는다. 두 번째 갈림길에서 \'말없이 지운다\'를 고르면 "왜 뺐는지 모르는 청중은 이 표를 어떻게 믿을까요?"라고 되묻는다. 부족함·실수·한계를 밝히는 것이 정직한 탐구라는 점을 짚는다.',
          task: '마감 전날 자료가 부족한 태오 모둠의 갈림길을 따라가며 연구 윤리에 맞는 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('태오 모둠이 연구 윤리를 지키는 길을 고르고 근거를 고르세요.', DEADLINE, [['honest', 'mark', 'limit']], DEADLINE_R, ['real'], { d: 0.4, hardReasons: ['real', 'limit'] }),
            EXPLOREQ('\'지어 채우기\'·\'출처 없이 옮기기\' 길도 끝까지 가 보고, 결과를 견주세요.', DEADLINE, DEADLINE_R, ['다른 길의 끝 장면을 확인했다', '그 길이 표절·위조·변조 가운데 무엇인지 짚었다'], { d: 0.35 }),
            DILQ('모둠원 예린이 "설문 응답이 20명뿐이니 우리끼리 몇 장 더 쓰자"고 해요. 알맞은 길을 고르고 근거를 고르세요.', { text: '태오 모둠의 다른 탐구. 설문 응답이 20명뿐이다. 예린이 "우리끼리 몇 장 더 써서 40명으로 만들자"고 한다.', who: '예린', motif: 'book', choices: [
              { id: 'yes', text: '몇 장쯤은 괜찮다며 함께 쓴다', result: '응답은 40명이 되었지만 절반이 지어낸 것이다.', impact: [{ who: '모둠', text: '위조 자료로 발표하게 된다', tone: -1 }], ending: '몇 장이든 지어낸 응답은 위조다.' },
              { id: 'no', text: '지어내지 말고 20명 자료를 쓰자고 말한다', result: '예린이 "그럼 너무 적잖아"라고 걱정한다.', impact: [{ who: '모둠', text: '정직한 자료를 지킨다', tone: 1 }],
                next: { text: '예린이 "적은 자료로 발표하면 점수가 낮을 것 같아"라고 한다.', choices: [
                  { id: 'more', text: '남은 시간 동안 설문을 더 받을 길을 찾고, 모자라면 한계로 밝히자고 한다', result: '하루 동안 설문을 더 받아 28명이 된다. 한계는 발표에 밝힌다.', impact: [{ who: '모둠', text: '정직하게 자료를 늘린다', tone: 1 }], ending: '자료가 부족할 때는 더 모으거나 한계를 밝힌다.' },
                  { id: 'quit', text: '어차피 적으니 탐구를 포기한다', result: '20명 자료도 버리고 발표를 하지 않는다.', impact: [{ who: '모둠', text: '할 수 있는 탐구까지 놓친다', tone: -1 }], ending: '적은 자료도 정직하게 쓰면 탐구가 된다.' }] } }] },
              [['no', 'more']], [{ id: 'nofake', text: '응답 수를 지어 늘리지 않는다' }, { id: 'show', text: '자료가 적으면 한계를 밝힌다' }, { id: 'score', text: '점수를 위해 조금은 괜찮다', why: '점수보다 자료가 사실인지가 먼저예요.' }], ['nofake', 'show'], { d: 0.35, more: { conclude: '자료가 부족할 때 할 수 있는 정직한 일은 둘이에요. 더 모으거나, 부족하다고 밝히거나.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '태오 모둠이 발표에서 밝혀야 할 \'한계\' 문장을 하나 써 보세요.' }] },
        notes: '태오·예린은 가상 인물이다. 연구 부정 판단은 「연구윤리 확보를 위한 지침」의 일반 정의(위조·변조·표절) 수준으로 다룬다.',
      }),

      M({
        id: 'wrap.consult', type: 'wrap', title: '설계서 짝 검토',
        method: '탐구 설계 짝 검토', tool: 'timer', minutes: 8,
        levels: { easy: '짝 설계서에서 한 요소(탐구 질문)만 보고 점검 칸을 표시한다.', base: '짝 설계서의 네 요소를 모두 보고 점검 칸을 표시한 뒤 질문 하나를 남긴다.', challenge: '점검에 더해 짝의 설계를 낫게 할 개선 제안 한 문장을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"짝과 태오 설계서(또는 내가 쓴 초안 중 보여 줘도 되는 것)를 바꿔 봐요. 2분 읽고, 1분 질문해요." 타이머를 맞추고 신호와 함께 시작한다. 점검 칸은 칭찬이나 점수가 아니라 \'있다·없다\'만 본다고 말한다. "다 좋아 보여요"라는 학생에게 "이 방법대로 따라 하면 다른 사람도 같은 자료를 얻을 수 있을까요?"라고 묻는다. 진로 분야 초안은 원하는 사람만 보여 주고, 보여 주지 않아도 된다고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝 검토 타이머', timeUnit: 'min', labels: ['읽기', '질문'], plan: { work: 1, rest: 1, rounds: 1 } }, prompt: '2분 읽기, 1분 질문을 두 번(서로 바꿔서) 하도록 타이머를 맞추세요(분).', target: { plan: { work: 2, rest: 1, rounds: 2 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '짝 설계서 점검' }, prompt: '짝의 설계서에 네 요소가 있는지 점검 칸을 표시하세요.', target: { selfCheck: ['잴 수 있는 탐구 질문이 있다', '확인할 수 있는 가설이 있다', '따라 할 수 있는 방법이 있다', '만들어 낼 산출물이 있다'] }, difficulty: 0.1 },
            { type: 'short', prompt: '짝의 설계에 남길 질문 하나 또는 개선 제안 한 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '탐구 설계 짝 검토',
          items: [
            { type: 'check', prompt: '짝 설계서에 있는 요소에 표시하세요.', options: ['탐구 질문', '가설', '방법', '산출물', '일정'] },
            { type: 'short', prompt: '짝에게 받은 질문 가운데 내 설계를 고치게 한 것을 쓰세요.' },
          ],
        },
        notes: '짝 검토는 점수를 매기지 않는다. 자기 진로 분야 초안은 원하는 학생만 보여 준다.',
      }),
      M({
        id: 'wrap.cite', type: 'wrap', title: '참고문헌 출처 표기 실습',
        method: '출처 표기 실습', tool: 'story', minutes: 8,
        levels: { easy: '책 참고문헌의 두 항목(저자·제목)만 채운다.', base: '책 참고문헌 네 항목(저자·제목·연도·출판사)을 채운다.', challenge: '책에 더해 웹 자료 참고문헌(글쓴이·글 제목·확인한 날·누리집)까지 채운다.' },
        wrap: {
          teacher: '"출처 표기는 \'이 내용은 내가 아니라 이 사람에게서 왔다\'고 밝히는 일이에요." 칠판에 \'저자(연도). 제목. 출판사.\' 순서를 적고 카드를 채우게 한다. 웹 자료에 \'인터넷\'이라고만 쓰는 학생에게 "인터넷은 장소가 아니라 수많은 누리집이에요. 어느 누리집의 누구 글인지 알 수 있어야 다른 사람이 찾아갈 수 있어요"라고 말한다. 표기 순서는 학교·분야마다 조금씩 다르니 우리 학교 탐구 보고서 양식을 따른다고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '책 참고문헌', slots: [{ id: 'au', label: '저자: ___' }, { id: 'yr', label: '연도: ___' }, { id: 'ti', label: '제목: ___' }, { id: 'pu', label: '출판사: ___' }], cards: ['도시의 열섬과 나무', '가상출판', '김가상', '2024', '인터넷'] }, prompt: '가상의 책 정보 카드로 참고문헌 칸을 채우세요(함정 카드 하나는 남겨요).', target: { fill: { au: '김가상', yr: '2024', ti: '도시의 열섬과 나무', pu: '가상출판' } }, difficulty: 0.2 },
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '웹 자료 참고문헌', slots: [{ id: 'au', label: '글쓴이: ___' }, { id: 'ti', label: '글 제목: ___' }, { id: 'dt', label: '확인한 날: ___' }, { id: 'si', label: '누리집: ___' }], cards: ['가상 기상 자료실', '여름 도시 기온 자료 안내', '2026년 9월 1일', '가상 기상 자료실 편집부', '어딘가의 블로그'] }, prompt: '가상의 웹 자료 정보 카드로 참고문헌 칸을 채우세요(함정 카드 하나는 남겨요).', target: { fill: { au: '가상 기상 자료실 편집부', ti: '여름 도시 기온 자료 안내', dt: '2026년 9월 1일', si: '가상 기상 자료실' } }, difficulty: 0.3 },
            { type: 'choice', prompt: '출처 표기에 대한 말로 알맞은 것은?', options: ['인터넷 글은 누구나 볼 수 있으니 출처가 없어도 된다', '다른 사람이 같은 자료를 찾아갈 수 있게 쓴다', '내 말로 바꿔 쓰면 출처는 지워도 된다'], answer: 1, difficulty: 0.15, explain: '출처는 다른 사람이 같은 자료를 찾아 확인할 수 있게 하는 길이에요. 내 말로 바꿔 써도 생각을 빌렸다면 밝혀요.' },
          ],
        },
        worksheet: {
          title: '출처 표기 실습',
          items: [
            { type: 'short', prompt: '오늘 칠판의 순서대로 가상의 책 참고문헌 한 줄을 써 보세요.' },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '내 말로 바꿔 쓴 내용도 생각을 빌렸다면 ___를 밝힌다.', answer: '출처' },
          ],
          easy: { note: '저자와 제목부터 찾아 써요.', items: [{ type: 'short', prompt: '가상의 책 저자와 제목을 쓰세요.' }] },
        },
        notes: '책·누리집 정보는 모두 가상이다. 참고문헌 표기 순서는 학교 탐구 보고서 양식에 맞춘다.',
      }),
    );
  }

  // ======================================================================================================
  // 10학년 6. 필요를 먼저 묻는 봉사 설계 (프로젝트형 봉사활동 — <표 5> 고 "공동체에 봉사하는 활동 수행")
  // ======================================================================================================
  {
    const M = MOD('g10-serve', [10]);
    const NEED = [['숙제를 함께 봐 줄 사람', 18], ['함께 놀 사람', 9], ['책·학용품', 4], ['간식', 3]];
    const NEED_P = [['아이 숙제 도움', 7], ['아이 안전한 귀가', 10], ['책·학용품', 2], ['간식', 1]];
    const PLAN = { text: '가상 동네 어린이 공부방 봉사를 준비하는 지우 모둠. 계획이 둘 올라왔다. 가안: 매주 토요일 간식 파티 열기. 나안: 평일 방과 후 주 2회 숙제 함께 보기.', who: '지우 모둠', motif: 'house', choices: [
      { id: 'a', text: '모둠원이 하고 싶어 하는 가안을 고른다', result: '첫 파티는 즐거웠지만 공부방 선생님은 "평일 숙제 도움이 더 필요해요"라고 말한다.', impact: [{ who: '공부방 아이들', text: '가장 필요한 도움은 그대로 비어 있다', tone: -1 }], ending: '하고 싶은 봉사보다 필요한 봉사를 먼저 따진다.' },
      { id: 'measure', text: '두 안을 다섯 기준(필요성·실현 가능성·지속성·안전·존중)으로 따져 본다', result: '필요성은 나안이 높지만, 평일 주 2회는 모둠원 시간표로 어렵다는 것이 드러난다.', impact: [{ who: '지우 모둠', text: '계획의 빈틈을 미리 찾는다', tone: 1 }],
        next: { text: '실현 가능성을 높이려면 무엇을 바꿀까?', choices: [
          { id: 'adjust', text: '주 1회로 줄이고 모둠원을 두 조로 나눠 번갈아 간다', result: '한 학기 동안 빠짐없이 이어 갈 수 있는 일정이 된다.', impact: [{ who: '공부방 아이들', text: '꾸준히 숙제 도움을 받는다', tone: 1 }],
            next: { text: '안전 기준을 보니, 아이들과 만나는 공간과 귀가 시간을 정하지 않았다.', choices: [
              { id: 'safe', text: '공부방 선생님과 함께 공간·귀가 시간·연락 방법을 정한다', result: '보호자에게 안내문이 나가고, 공부방 선생님이 늘 함께한다.', impact: [{ who: '아이와 보호자', text: '안심하고 참여한다', tone: 1 }], ending: '필요·실현 가능성·지속성·안전·존중을 모두 따진 계획이 오래간다.' },
              { id: 'skip', text: '고등학생이니 알아서 하면 된다고 넘어간다', result: '첫날 아이 한 명의 귀가 시간을 두고 혼란이 생긴다.', impact: [{ who: '아이와 보호자', text: '불안해한다', tone: -1 }], ending: '아이와 만나는 봉사는 안전 약속을 기관과 먼저 정한다.' }] } },
          { id: 'push', text: '어려워도 주 2회를 그대로 밀어붙인다', result: '한 달 만에 빠지는 모둠원이 늘어 봉사가 끊긴다.', impact: [{ who: '공부방 아이들', text: '기다리던 도움이 갑자기 사라진다', tone: -1 }], ending: '지속성을 따지지 않은 봉사는 받는 사람에게 실망을 남긴다.' }] } },
      { id: 'both', text: '둘 다 하겠다고 약속한다', result: '약속이 많아져 무엇을 먼저 할지 정하지 못한다.', impact: [{ who: '공부방', text: '일정을 잡기 어렵다', tone: -1 }], ending: '많이 약속하는 것보다 지킬 수 있게 약속하는 것이 존중이다.' }] };
    const PLAN_R = [{ id: 'need', text: '받는 사람이 가장 필요로 하는 것을 먼저 따졌다' }, { id: 'keep', text: '우리 시간표로 끝까지 이어 갈 수 있게 조정했다' }, { id: 'safe', text: '아이와 만나는 공간·귀가·연락을 기관과 함께 정했다' }, { id: 'fun', text: '우리가 즐거워야 좋은 봉사다', why: '즐거움도 소중하지만, 봉사의 첫 기준은 받는 사람의 필요예요.' }, { id: 'many', text: '많이 해 줄수록 좋은 봉사다', why: '지킬 수 없는 약속은 받는 사람에게 실망을 남겨요.' }];

    MODS.push(
      M({
        id: 'intro.who', type: 'intro', title: '봉사의 이해관계자 찾기',
        method: '이해관계자 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 셋(도움을 받는 사람·기관·우리 모둠)에 카드를 하나씩 붙여 보인다.', base: '가지 다섯(받는 사람·보호자·기관·이웃·우리 모둠)에 이해관계자 카드를 나눈다.', challenge: '가지마다 그 사람이 바라는 것(이해)을 말로 덧붙인다.' },
        intro: {
          teacher: '"가상 동네 어린이 공부방에서 봉사를 하려고 해요. 이 봉사와 관계있는 사람은 아이들뿐일까요?" 시연 단추로 가지에 카드가 붙는 모습을 보여 준다. "아이들만 좋으면 되잖아요"라는 말이 나오면 "아이를 데리러 오는 보호자, 공간을 내주는 공부방, 옆집 이웃은 이 봉사로 무엇이 달라질까요?"라고 되묻는다. 이해관계자를 먼저 찾아야 누구에게 무엇을 물을지 알 수 있다는 점을 짚고, 오늘은 필요를 먼저 묻는 봉사 설계를 한다고 밝힌다.',
          student: '가상 어린이 공부방 봉사와 관계있는 사람 카드를 받는 사람·보호자·기관·이웃·우리 모둠 가지에 나누어 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '어린이 공부방 봉사', slots: ['받는 사람', '보호자', '기관', '이웃', '우리 모둠'], cards: ['공부방에 다니는 아이들', '아이를 데리러 오는 가족', '공부방 담당 선생님', '공부방 건물의 이웃 가게', '봉사하는 고등학생'] }, sequence: [{ sort: { '받는 사람': ['공부방에 다니는 아이들'], 보호자: ['아이를 데리러 오는 가족'], 기관: ['공부방 담당 선생님'], 이웃: ['공부방 건물의 이웃 가게'], '우리 모둠': ['봉사하는 고등학생'] } }] },
          art: { draw: 'a small paper neighbourhood study room with low tables, paper children with books, a paper teacher at the door, high school students arriving with a notebook, warm afternoon light', banner: '누구와 관계있는 봉사일까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '공부방·동네는 가상이다. 실제 기관 이름을 쓰지 않는다.',
      }),
      M({
        id: 'intro.gift', type: 'intro', title: '받는 사람이 원치 않은 도움',
        method: '받는 사람이 원치 않은 도움 장면', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 둘(묻지 않은 선물·먼저 물은 도움)의 마음만 짝지어 보인다.', base: '장면 셋의 받는 사람 마음을 짝짓는다.', challenge: '장면 넷을 짝짓고, 원치 않은 도움 장면을 무엇으로 바꾸면 좋을지 말한다.' },
        intro: {
          teacher: '"가상 고등학교 봉사 동아리가 어르신 쉼터에 갔어요. 준비한 도움이 늘 반가웠을까요?" 시연 단추로 장면과 마음 카드가 짝지어지는 모습을 보여 준다. "도와주는 건데 고마워해야죠"라는 말이 나오면 "필요 없는 물건을 잔뜩 받으면, 그걸 치우는 일은 누구 몫일까요?"라고 되묻는다. 좋은 마음만으로는 좋은 도움이 되지 않고, 먼저 물어야 한다는 점을 짚는다.',
          student: '봉사 장면을 읽고, 도움을 받은 사람의 마음 카드를 짝지어 보세요. 어떤 도움이 반가웠는지 견주어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['곤란함', '고마움', '부담', '편안함'], slots: [{ id: 'a', label: '묻지 않고 가져온 헌 옷 상자가 쉼터 복도를 가득 채웠다' }, { id: 'b', label: '"무엇이 필요하세요?" 먼저 묻고 휴대전화 사용법을 함께 익혔다' }, { id: 'c', label: '사진을 찍겠다며 여러 번 같은 자세를 부탁했다' }, { id: 'd', label: '어르신이 원하는 날에 맞춰 말동무 시간을 정했다' }] }, sequence: [{ match: { a: '곤란함', b: '고마움', c: '부담', d: '편안함' } }] },
          art: { draw: 'a paper senior community room with a hallway crowded by cardboard boxes on one side, and on the other side a student and an elder looking at a phone together at a small table', banner: '먼저 물었나요?', extra: [{ motif: 'flower', x: 300, y: 96, color: 'peach' }] },
        },
        notes: '쉼터·동아리는 가상이다. 봉사 사진은 받는 사람의 동의를 먼저 구한다는 점을 함께 짚는다.',
      }),

      M({
        id: 'activity.survey', type: 'activity', title: '필요 조사 문항 쓰기',
        method: '필요 조사 문항 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '필요 조사 문항 하나를 문장 틀을 보고 쓴다.', base: '받는 사람·보호자·기관에게 물을 필요 조사 문항 셋을 쓰고 기준표(존중·중립·구체)로 점검한다.', challenge: '문항 셋에 더해 면담에서 이어 물을 꼬리 질문까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '필요를 묻는 문항', tool: 'rubric-writing',
          teacher: '"좋은 필요 조사 문항은 세 가지를 지켜요. 존중(상대를 낮추지 않기), 중립(답을 유도하지 않기), 구체(답할 수 있게 좁히기)." 칠판에 나쁜 예 \'공부방 아이들은 공부를 못해서 도움이 필요하죠?\'를 적고 무엇이 문제인지 함께 짚는다. \'간식 파티 좋죠?\'처럼 답을 정해 둔 문항을 쓴 학생에게 "이 문항에 \'아니요\'라고 답하기 쉬울까요?"라고 묻는다. 아이에게 묻는 문항은 공부방 선생님·보호자를 거쳐 동의를 받고 이름 없이 묻는다는 점을 짚는다.',
          task: '가상 어린이 공부방 봉사를 위한 필요 조사 문항을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '공부방 아이들·보호자·공부방 선생님에게 물을 필요 조사 문항 셋을 쓰고 점검하세요.', toolOptions: { topic: '필요 조사 문항 셋: 아이에게 하나, 보호자에게 하나, 공부방 선생님에게 하나를 쓰세요.', minChars: 60, maxChars: 400, sample: '아이: 공부방에서 가장 함께하고 싶은 것을 하나 골라 주세요(숙제·놀이·책 읽기·기타). 보호자: 평일 몇 시에 데리러 오시나요? 공부방 선생님: 봉사자가 가장 도와주었으면 하는 시간과 일은 무엇인가요?' }, target: { selfCheck: ['상대를 낮추는 말이 없다(존중)', '답을 정해 두지 않았다(중립)', '답할 수 있게 좁혀 물었다(구체)'] }, difficulty: 0.35,
              levels: {
                easy: { prompt: '공부방 선생님에게 물을 필요 조사 문항 하나를 쓰고 점검하세요(문항 하나).', toolOptions: { topic: '공부방 선생님에게 물을 필요 조사 문항 하나를 쓰세요.', minChars: 20, starter: '봉사자가 ~ 시간에 ~를 도와드리면 좋을까요, 아니면 ~이 더 필요하신가요?' } },
                challenge: { prompt: '문항 셋에 더해 공부방 선생님 면담에서 이어 물을 꼬리 질문 둘까지 쓰고 점검하세요(꼬리 질문까지).', toolOptions: { minChars: 100 }, target: { selfCheck: ['상대를 낮추는 말이 없다(존중)', '답을 정해 두지 않았다(중립)', '답할 수 있게 좁혀 물었다(구체)', '앞의 답을 이어받는 꼬리 질문을 썼다'] } },
              } },
            RWQ('나쁜 예 \'공부방 아이들은 공부를 못해서 도움이 필요하죠?\'를 기준에 맞게 고쳐 쓰고 점검하세요.', '나쁜 예 "공부방 아이들은 공부를 못해서 도움이 필요하죠?"를 존중·중립·구체에 맞게 고쳐 쓰세요.', ['상대를 낮추는 말을 없앴다', '답을 정해 두지 않았다', '답할 수 있게 좁혀 물었다'], { min: 20, max: 200, starter: '공부방에서 ~할 때 어떤 도움이 있으면 좋을까요?', d: 0.3 }),
            RWQ('필요 조사를 할 때 지킬 약속(동의·이름 없이·결과 쓰임)을 두 문장으로 쓰고 점검하세요.', '필요 조사를 하기 전 받는 사람에게 알릴 약속을 두 문장으로 쓰세요.', ['조사에 응할지 고를 수 있다고 썼다', '이름 없이 묻는다고 썼다', '결과를 어디에 쓸지 밝혔다'], { min: 40, max: 250, sent: [2, 3], d: 0.35, more: { conclude: '필요 조사는 우리가 하고 싶은 것을 확인하는 자리가 아니라, 받는 사람의 목소리를 먼저 듣는 자리예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 문항 가운데 가장 \'중립\'을 지키기 어려웠던 문항과 고친 방법을 쓰세요.' }] },
        notes: '조사 대상은 가상 공부방이다. 실제로 조사할 때는 기관·보호자 동의를 먼저 받고 이름 없이 묻는다.',
      }),
      M({
        id: 'activity.result', type: 'activity', title: '필요 조사 결과 읽기',
        method: '필요 조사 결과 해석', tool: 'chart', minutes: 18,
        levels: { easy: '아이들 응답 그래프 하나를 값이 보이는 상태로 읽고 가장 큰 필요를 고른다.', base: '아이들과 보호자 응답 그래프 둘을 견주어 우선 필요를 고른다.', challenge: '조사 결과와 처음 계획(간식 파티)을 견주어 계획에서 바꿀 곳을 고른다.' },
        activity: {
          title: '응답 그래프 해석', tool: 'chart',
          teacher: '"가상 공부방의 필요 조사 결과 예시예요. 우리가 처음 하고 싶었던 간식 파티는 몇 번째일까요?" 그래프를 읽고 가장 큰 필요를 고르게 한다. "아이들이 간식을 적게 골랐으니 간식은 필요 없다"는 학생에게 "적게 고른 것은 없어도 된다는 뜻일까요, 다른 것이 더 급하다는 뜻일까요?"라고 묻는다. 보호자 그래프에서 \'안전한 귀가\'가 가장 큰 까닭을 짚으며 이해관계자마다 필요가 다르다는 점을 보여 준다.',
          task: '가상 필요 조사 결과 그래프를 읽고, 우선 필요를 골라 계획과 견주어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '공부방 아이 34명이 고른 \'가장 필요한 도움\'(가상 예시)이에요. 가장 많이 고른 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '아이들이 고른 가장 필요한 도움(가상)', unit: '명', xLabel: '도움', yLabel: '고른 아이 수', data: NEED, question: '가장 많이 고른 도움은?', choices: NEED.map((x) => x[0]) }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '보호자 20명이 고른 \'가장 필요한 도움\'(가상 예시)이에요. 가장 많이 고른 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '보호자가 고른 가장 필요한 도움(가상)', unit: '명', xLabel: '도움', yLabel: '고른 보호자 수', data: NEED_P, question: '보호자가 가장 많이 고른 도움은?', choices: NEED_P.map((x) => x[0]) }, target: { pick: 1 }, difficulty: 0.25,
              conclude: '아이와 보호자의 필요가 달라요. 그래서 이해관계자마다 따로 물어요.' },
            { prompt: '아이들 응답에서 \'숙제를 함께 봐 줄 사람\'을 고른 수는 \'간식\'을 고른 수의 몇 배인지 구하세요.', toolOptions: { type: 'bar', mode: 'read', title: '아이들이 고른 가장 필요한 도움(가상)', unit: '명', xLabel: '도움', yLabel: '고른 아이 수', data: NEED, question: '숙제 도움 ÷ 간식 = ?' }, target: { value: 6 }, difficulty: 0.3 },
            { prompt: '처음 계획 \'매주 토요일 간식 파티\'를 조사 결과와 견주었을 때, 계획에서 가장 먼저 바꿀 곳을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '아이들이 고른 가장 필요한 도움(가상)', unit: '명', xLabel: '도움', yLabel: '고른 아이 수', data: NEED, question: '계획에서 가장 먼저 바꿀 곳은?', choices: ['간식 종류를 더 늘린다', '중심 활동을 숙제 함께 보기로 바꾼다', '파티 횟수를 두 배로 늘린다'], why: ['간식은 아이들이 가장 적게 고른 도움이에요.', '', '횟수보다 활동이 필요와 맞는지가 먼저예요.'] }, target: { pick: 1 }, difficulty: 0.4,
              conclude: '조사 결과는 계획을 고치라고 하는 신호예요. 우리가 하고 싶은 것보다 받는 사람이 필요한 것이 먼저예요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '아이와 보호자의 필요를 함께 담은 봉사 활동 하나를 한 문장으로 제안하세요.' }] },
        notes: '조사 결과는 수업용 가상 예시다.',
      }),
      M({
        id: 'activity.eval', type: 'activity', title: '다섯 기준으로 계획 따지기',
        method: '다섯 기준 계획 평가 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(두 계획 가운데 어떻게 고를지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(실현 가능성 조정)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(안전)까지 가서 근거 세 장(필요·지속·안전)을 고르고 다른 길과 견준다.' },
        activity: {
          title: '두 계획 견주기', tool: 'dilemma',
          teacher: '"지우 모둠 앞에 계획이 둘이에요. 가안은 모두가 하고 싶어 하는 간식 파티, 나안은 조사에서 가장 필요하다고 나온 숙제 함께 보기." 첫 갈림길에서 가안을 고르는 학생에게 "공부방 선생님이 마지막에 한 말을 다시 읽어 볼까요?"라고 묻는다. 두 번째 갈림길에서 \'밀어붙인다\'를 고르면 "한 달 뒤 빠지는 모둠원이 늘면, 기다리던 아이들은 어떻게 될까요?"라고 되묻는다. 다섯 기준(필요성·실현 가능성·지속성·안전·존중)을 칠판에 적어 두고 선택마다 어느 기준을 따졌는지 짚는다.',
          task: '봉사 계획 둘을 다섯 기준으로 따지는 갈림길을 따라가며, 고른 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지우 모둠이 다섯 기준으로 계획을 따져 고치는 길을 고르고 근거를 고르세요.', PLAN, [['measure', 'adjust', 'safe']], PLAN_R, ['need', 'keep'], { d: 0.4, hardReasons: ['need', 'keep', 'safe'] }),
            EXPLOREQ('\'하고 싶은 가안 고르기\'·\'둘 다 약속하기\' 길도 끝까지 가 보고, 결과를 견주세요.', PLAN, PLAN_R, ['다른 길의 끝 장면을 확인했다', '받는 사람에게 어떤 영향이 갔는지 짚었다'], { d: 0.35 }),
            DILQ('봉사 첫날, 모둠원 한 명이 "아이들과 찍은 사진을 SNS에 올리자"고 해요. 존중 기준에 맞는 길을 고르고 근거를 고르세요.', { text: '봉사 첫날이 즐겁게 끝났다. 모둠원 하나가 "아이들이랑 찍은 사진, 봉사 기록으로 SNS에 올리자"고 한다.', who: '지우 모둠', motif: 'star', choices: [
              { id: 'post', text: '좋은 일이니 바로 올린다', result: '아이 얼굴과 공부방 이름이 그대로 드러난다.', impact: [{ who: '아이와 보호자', text: '동의 없이 얼굴이 알려진다', tone: -1 }], ending: '좋은 일의 기록이라도 받는 사람의 동의가 먼저다.' },
              { id: 'ask', text: '올리기 전에 공부방 선생님께 사진 규칙을 묻는다', result: '선생님이 "보호자 동의 없이는 아이 얼굴을 쓰지 않아요"라고 알려 준다.', impact: [{ who: '아이와 보호자', text: '존중받는다', tone: 1 }],
                next: { text: '그래도 봉사 기록은 남기고 싶다.', choices: [
                  { id: 'hands', text: '얼굴과 기관 이름이 드러나지 않는 활동 사진만 쓰고, 글로 기록한다', result: '함께 만든 그림·책상 사진과 활동 소감이 기록으로 남는다.', impact: [{ who: '모두', text: '기록과 존중을 함께 지킨다', tone: 1 }], ending: '봉사 기록의 주인공은 우리가 아니라 함께한 시간이다.' },
                  { id: 'blur', text: '얼굴을 흐리게만 하면 괜찮다며 단체 사진을 올린다', result: '옷과 장소로 아이가 누구인지 알아본 사람이 생긴다.', impact: [{ who: '아이', text: '사생활이 드러난다', tone: -1 }], ending: '흐리게 해도 알아볼 수 있으면 동의를 대신하지 못한다.' }] } }] },
              [['ask', 'hands']], [{ id: 'consent', text: '받는 사람과 보호자의 동의가 먼저다' }, { id: 'record', text: '얼굴·이름 없이도 봉사를 기록할 수 있다' }, { id: 'proud', text: '좋은 일은 널리 알릴수록 좋다', why: '알리는 것보다 받는 사람의 존중이 먼저예요.' }], ['consent', 'record'], { d: 0.35, more: { conclude: '존중 기준은 계획서 안에만 있지 않아요. 사진 한 장, 말 한마디에도 받는 사람의 동의를 먼저 생각해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '지우 모둠의 고친 계획을 다섯 기준 가운데 둘을 들어 한 문장으로 평가하세요.' }] },
        notes: '지우 모둠과 공부방은 가상이다. 아이와 만나는 봉사의 안전·사진 규칙은 실제 기관 규칙을 따른다.',
      }),
      M({
        id: 'activity.fix', type: 'activity', title: '평가 뒤 계획 고치기',
        method: '평가 뒤 계획 고치기', tool: 'sortboard', minutes: 18,
        levels: { easy: '계획 항목 카드 4장을 유지·수정·삭제 바구니에 나누고, 틀리면 까닭을 듣고 다시 놓는다.', base: '계획 항목 카드 6장을 나누고, 수정 바구니 카드마다 까닭을 말한다.', challenge: '카드가 더해지고, 수정 바구니의 한 장을 골라 활동지에 수정안을 쓴다.' },
        activity: {
          title: '유지·수정·삭제', tool: 'sortboard',
          teacher: '"다섯 기준으로 평가한 결과를 바탕으로 계획 항목을 고쳐 봐요. 그대로 둘 것, 고칠 것, 뺄 것." 카드를 놓을 때마다 "이 항목은 다섯 기준 가운데 어디에 걸리나요?"라고 묻는다. \'매주 간식 파티\'를 삭제에 넣는 학생에게 "아예 빼야 할까요, 숙제 시간 뒤 짧은 간식으로 바꿀 수도 있을까요?"라고 되물어 수정과 삭제를 가르게 한다.',
          task: '평가 결과를 보고 봉사 계획 항목 카드를 유지·수정·삭제 바구니에 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBQ('지우 모둠의 봉사 계획 항목 카드를 유지·수정·삭제 바구니에 나누세요.', ['유지', '수정', '삭제'], [
              ['주 1회 숙제 함께 보기', '공부방 선생님이 늘 함께하기'],
              ['평일 주 2회 방문(시간표와 안 맞음)', '매주 토요일 간식 파티(필요가 적음)'],
              ['아이 얼굴 사진 SNS 올리기', '아이 집에 따로 찾아가 숙제 봐 주기'],
            ], { k: 1, hard: [['두 조로 나눠 번갈아 가기'], ['쉬는 시간 놀이 담당 정하기(맡을 사람 없음)'], ['아이 연락처를 모둠원끼리 나누기']], d: 0.3 }),
            SBQ('고친 항목의 까닭 카드를 기준 바구니에 나누세요.', ['필요성', '지속성', '안전·존중'], [
              ['조사에서 숙제 도움이 가장 많이 나왔다', '보호자는 안전한 귀가를 가장 원했다'],
              ['한 학기 내내 갈 수 있는 횟수로 줄였다', '한 사람이 빠져도 이어지게 두 조로 나눴다'],
              ['기관 안에서만 만난다', '사진은 동의 받은 것만 쓴다'],
            ], { k: 1, d: 0.35 }),
            SBQ('수정안 카드를 \'기준에 맞게 고침\'과 \'아직 문제 있음\' 바구니에 나누세요.', ['기준에 맞게 고침', '아직 문제 있음'], [
              ['간식 파티 → 숙제 시간 뒤 10분 간식', '평일 주 2회 → 주 1회 두 조 번갈아', '아이 사진 → 동의 받은 활동 사진만'],
              ['간식 파티 → 파티 대신 선물 상자 보내기', '주 2회 → 시험 기간엔 말없이 쉬기', '사진 → 얼굴만 흐리게 해서 올리기'],
            ], { k: 2, d: 0.35, more: { conclude: '계획을 고칠 때마다 다섯 기준에 다시 대어 봐요. 고친 안이 새 문제를 만들 수도 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '수정 바구니의 항목 하나를 골라 수정안과 그 까닭(기준)을 한 문장으로 쓰세요.' }] },
      }),

      M({
        id: 'wrap.interview', type: 'wrap', title: '공부방 담당자 모둠 면담',
        method: '수혜 기관 담당자 면담', tool: 'timer', minutes: 8,
        levels: { easy: '모둠이 준비한 질문 둘을 1분씩 묻고 답을 활동지에 적는다.', base: '질문 셋을 묻고, 면담 전 예절 점검 칸을 확인한다.', challenge: '답을 듣고 꼬리 질문 하나를 이어 묻고, 출구 질문에 꼬리 질문과 들은 답을 쓴다.' },
        wrap: {
          teacher: '"오늘은 선생님이 가상 공부방 담당 선생님 역할을 맡을게요(교사가 섭외한 실제 담당자가 있다면 그분과 해요). 모둠마다 1분씩 질문해요." 면담 전 예절 점검 칸을 함께 확인하고 타이머를 맞춘다. 답을 듣고 바로 다음 질문으로 넘어가는 모둠에게 "방금 답에서 더 궁금한 게 생기지 않았나요? 그걸 꼬리 질문으로 이어 물어요"라고 말한다. 답은 기록판이 아니라 활동지에 글로 적는다고 안내하고, 받은 정보는 봉사 계획에만 쓴다고 약속한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모둠 면담', labels: ['질문', '받아 적기'], plan: { work: 30, rest: 30, rounds: 2 }, safety: ['인사와 함께 면담 목적을 밝힌다', '기록해도 되는지 먼저 묻는다', '답을 끊지 않고 끝까지 듣는다', '아이 개인 정보는 묻지 않는다'] }, prompt: '면담 전 예절 네 칸을 확인하고, 질문 1분·받아 적기 20초를 세 번 하도록 타이머를 맞추세요(초).', target: { plan: { work: 60, rest: 20, rounds: 3 }, safety: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '면담에서 꼬리 질문으로 알맞은 것은?', options: ['"다음 질문으로 넘어갈게요."', '"방금 숙제 도움이 필요하다고 하셨는데, 어느 과목이 가장 그런가요?"', '"그 아이 이름이 뭐예요?"'], answer: 1, difficulty: 0.15, explain: '꼬리 질문은 방금 들은 답을 이어받아 더 구체적으로 묻는 질문이에요. 아이 개인 정보는 묻지 않아요.' },
            { type: 'short', prompt: '내가 한 꼬리 질문과 들은 답을 한 줄씩 쓰세요.' },
          ],
        },
        worksheet: {
          title: '공부방 담당자 면담 기록',
          items: [
            { type: 'table', prompt: '질문과 들은 답을 쓰세요.', columns: ['질문', '들은 답', '꼬리 질문'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] },
            { type: 'short', prompt: '면담에서 알게 되어 계획을 바꿀 점 하나를 쓰세요.' },
          ],
        },
        notes: '교구 한계: timer 기록판은 수만 적어서, 면담 답은 활동지에 글로 적는다. 실제 담당자를 섭외하지 못하면 교사가 가상 공부방 담당자 역할을 한다. 아이 개인 정보는 묻지 않는다.',
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '고친 계획 다섯 기준 점검',
        method: '고친 계획 스스로 점검', tool: 'timer', minutes: 8,
        levels: { easy: '세 기준(필요성·실현 가능성·안전)만 점검 칸에 표시한다.', base: '다섯 기준 점검 칸을 모두 표시한다.', challenge: '짝과 계획을 바꿔 다섯 기준으로 점검해 주고, 짝이 찾은 빈틈 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"고친 계획을 다섯 기준에 마지막으로 대어 봐요. 점수가 아니라 \'됐다·아직\'만 표시해요." 점검 칸을 하나씩 소리 내어 읽고 표시하게 한다. 모두 \'됐다\'에 표시한 모둠에게 "봉사가 한 학기 뒤 끝날 때 공부방 아이들에게 어떻게 알릴지도 정했나요?"라고 물어 지속성·존중을 다시 보게 한다. "봉사는 우리가 하고 싶은 것을 해 주는 것"이라는 말에는 오늘 조사 그래프를 다시 가리킨다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '고친 계획 점검' }, prompt: '지우 모둠의 고친 계획을 다섯 기준 점검 칸으로 표시하세요.', target: { selfCheck: ['필요성: 조사에서 나온 필요를 중심에 두었다', '실현 가능성: 우리 시간표로 할 수 있다', '지속성: 한 학기 동안 이어 갈 수 있다', '안전: 공간·귀가·연락을 기관과 정했다', '존중: 사진·말·마무리를 받는 사람 뜻대로 한다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '봉사 계획의 \'존중\' 기준에 가장 가까운 것은?', options: ['우리가 준비한 것을 최대한 많이 전한다', '받는 사람이 원하는 때와 방법을 먼저 묻는다', '봉사 사진을 많이 남긴다'], answer: 1, difficulty: 0.15, explain: '존중은 받는 사람이 무엇을, 언제, 어떻게 원하는지 먼저 묻고 따르는 거예요.' },
            { type: 'short', prompt: '점검에서 \'아직\'으로 남은 기준 하나와 고칠 방법을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '고친 봉사 계획 점검',
          items: [
            { type: 'table', prompt: '다섯 기준으로 고친 계획을 점검하세요.', columns: ['기준', '됐다/아직', '근거'], cells: [['필요성', '', ''], ['실현 가능성', '', ''], ['지속성', '', ''], ['안전', '', ''], ['존중', '', '']] },
            { type: 'short', prompt: '\'봉사는 우리가 하고 싶은 것을 해 주는 것\'이라는 말을 오늘 배운 말로 고쳐 쓰세요.' },
          ],
          easy: { note: '필요성·실현 가능성·안전 세 기준부터 봐요.', items: [{ type: 'check', prompt: '고친 계획이 갖춘 기준에 표시하세요.', options: ['필요성', '실현 가능성', '안전'] }] },
        },
      }),
    );
  }


  // ======================================================================================================
  // 11-1. 슬럼프와 실패 뒤 다시 서기 (11학년 · 적응 및 개척 활동)
  // ======================================================================================================
  {
    const M = MOD('g11-adapt', [11]);
    const CURVE = [['3월', 8], ['4월', 7], ['5월', 5], ['6월', 3], ['7월', 4], ['9월', 6], ['10월', 4], ['11월', 6]];
    const FAIL = { text: '가상 인물 도윤이는 반년 동안 준비한 과학 탐구 대회 예선에서 떨어졌다. 발표 날 질문에 제대로 답하지 못했다.', who: '도윤', motif: 'cloud', choices: [
      { id: 'quit', text: '"나는 탐구에 소질이 없어"라며 동아리를 그만둔다', result: '대회 이야기가 나오면 자리를 피한다.', impact: [{ who: '도윤', text: '좋아하던 분야와 멀어진다', tone: -1 }],
        next: { text: '한 달 뒤, 동아리 친구가 다음 대회를 같이 준비하자고 연락했다.', choices: [
          { id: 'refuse', text: '"어차피 또 떨어질 거야"라며 거절한다', result: '연락이 끊긴다.', impact: [{ who: '도윤', text: '다시 해 볼 기회를 놓친다', tone: -1 }], ending: '실패를 능력 탓으로만 보면 다음 기회까지 닫힌다.' },
          { id: 'listen', text: '일단 이야기를 들어 본다', result: '심사평에 "질문 대비만 보완하면 좋겠다"는 말이 있었다는 것을 알게 된다.', impact: [{ who: '도윤', text: '실패의 원인이 하나로 좁혀진다', tone: 1 }], ending: '늦게라도 원인을 들으면 다시 설 길이 보인다.' }] } },
      { id: 'review', text: '심사평을 받아 무엇이 부족했는지 적어 본다', result: '탐구 내용보다 질문에 답하는 준비가 부족했다는 것을 찾는다.', impact: [{ who: '도윤', text: '실패가 고칠 수 있는 문제로 바뀐다', tone: 1 }],
        next: { text: '원인은 찾았지만 다음 대회까지 석 달뿐이다.', choices: [
          { id: 'plan', text: '예상 질문 목록을 만들고 매주 한 번 친구 앞에서 연습한다', result: '연습할수록 답이 짧고 분명해진다.', impact: [{ who: '도윤', text: '작은 진전을 눈으로 확인한다', tone: 1 }],
            next: { text: '연습 3주째, 여전히 어려운 질문 하나에 말이 막힌다.', choices: [
              { id: 'ask', text: '지도 선생님께 그 질문만 따로 묻고 방법을 바꾼다', result: '자료를 한 장 더 준비해 답하는 방법을 찾는다.', impact: [{ who: '도윤', text: '막힌 곳을 도움으로 넘는다', tone: 1 }], ending: '막힐 때 방법을 바꾸고 도움을 청하는 것도 다시 서기의 한 부분이다.' },
              { id: 'all', text: '연습 시간을 세 배로 늘려 밤까지 붙잡는다', result: '잠이 줄고 다른 과목까지 흔들린다.', impact: [{ who: '도윤', text: '지쳐서 연습을 미루게 된다', tone: -1 }], ending: '노력의 양만 늘리면 원인이 그대로 남을 수 있다.' }] } },
          { id: 'redo', text: '처음부터 주제를 새로 바꾼다', result: '부족하지 않았던 탐구 내용까지 버린다.', impact: [{ who: '도윤', text: '시간이 더 빠듯해진다', tone: 0 }], ending: '원인과 상관없는 것까지 바꾸면 다시 서는 길이 길어진다.' }] } },
      { id: 'hide', text: '아무렇지 않은 척하며 혼자 끙끙 앓는다', result: '수업 시간에도 대회 장면이 자꾸 떠오른다.', impact: [{ who: '도윤', text: '마음의 짐이 쌓인다', tone: -1 }], ending: '실패를 숨기면 원인을 살필 기회도 함께 숨는다.' }] };
    const FAIL_R = [{ id: 'cause', text: '실패의 원인을 찾으면 고칠 방법이 보인다' }, { id: 'grow', text: '한 번의 결과는 능력 전체가 아니라 지금의 상태다' }, { id: 'help', text: '막힐 때 도움을 청하는 것도 방법이다' }, { id: 'talent', text: '떨어졌다는 것은 소질이 없다는 증거다', why: '한 번의 결과로 능력 전체를 판단할 수 없어요.' }, { id: 'more', text: '무조건 더 오래 하면 해결된다', why: '원인이 그대로면 시간만 늘려도 같은 곳에서 막혀요.' }];
    const EXAM = { text: '가상 인물 하린이는 2학기 첫 모의고사 수학 점수가 1학기보다 크게 떨어졌다. 문제집은 두 권이나 풀었다.', who: '하린', motif: 'cloud', choices: [
      { id: 'wrong', text: '틀린 문제를 유형별로 나눠 본다', result: '계산 실수보다 개념을 헷갈린 문제가 많다는 것을 찾는다.', impact: [{ who: '하린', text: '무엇을 고칠지 알게 된다', tone: 1 }],
        next: { text: '개념이 약하다는 것을 알았다. 무엇을 바꿀까?', choices: [
          { id: 'concept', text: '새 문제집 대신 개념 정리 노트를 만들고 같은 유형을 다시 푼다', result: '두 주 뒤 같은 유형에서 덜 헤맨다.', impact: [{ who: '하린', text: '방법이 원인에 맞는다', tone: 1 }], ending: '원인에 맞춰 방법을 바꾸면 노력이 점수로 이어지기 쉽다.' },
          { id: 'book', text: '문제집을 한 권 더 산다', result: '문제 수는 늘지만 같은 곳에서 계속 틀린다.', impact: [{ who: '하린', text: '지치고 자신감이 준다', tone: -1 }], ending: '양을 늘리는 것만으로는 원인이 고쳐지지 않는다.' }] } },
      { id: 'blame', text: '"이번 시험이 이상했어"라며 넘어간다', result: '다음 시험 준비도 1학기와 똑같이 한다.', impact: [{ who: '하린', text: '같은 원인이 그대로 남는다', tone: -1 }], ending: '원인을 밖에서만 찾으면 바꿀 것이 남지 않는다.' }] };
    const EXAM_R = [{ id: 'cause', text: '틀린 까닭을 나눠 보면 원인이 보인다' }, { id: 'fit', text: '방법은 원인에 맞게 바꿔야 한다' }, { id: 'lazy', text: '점수가 떨어진 것은 노력이 부족해서다', why: '두 권을 풀었는데도 떨어졌다면 노력의 양보다 방법을 봐야 해요.' }];

    MODS.push(
      M({
        id: 'intro.curve', type: 'intro', title: '학기 의욕 곡선 그리기',
        method: '학기 의욕 곡선 그리기', tool: 'chart', minutes: 6,
        levels: { easy: '가상 인물의 의욕 점수 네 점(3·4·5·6월)만 함께 찍어 꺾은선을 본다.', base: '여덟 점(3~11월) 꺾은선을 완성하고 가장 낮아진 때를 찾는다.', challenge: '낮아진 때마다 무슨 일이 있었을지(시험·진로 고민·몸 상태) 사건을 짐작해 칠판에 표시한다.' },
        intro: {
          teacher: '"이 그래프는 가상 인물 서진이의 한 학기 의욕 점수예요. 언제 가장 낮아졌을까요?" 시연 단추로 꺾은선이 완성되는 모습을 보여 주고, 6월과 10월처럼 두 번 내려간 곳을 손으로 짚는다. "의욕이 떨어지는 건 게으른 사람만 겪는 일이잖아요"라는 말이 나오면 "서진이는 3월에 8점이었어요. 같은 사람이 왜 6월엔 3점이 됐을까요?"라고 되묻는다. 슬럼프는 사람의 성격이 아니라 시기와 원인이 있는 상태라는 점을 짚고, 오늘은 원인을 나눠 보고 다시 세우는 방법을 찾는다고 밝힌다.',
          student: '가상 인물 서진이의 학기 의욕 점수 그래프를 보고, 의욕이 가장 낮아진 때와 그때 무슨 일이 있었을지 짐작해 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'build', title: '서진이의 의욕 점수(가상)', yLabel: '의욕 점수', xLabel: '달', data: CURVE, max: 10 }, sequence: [{ build: true }] },
          art: { draw: 'a paper line graph like a mountain trail with two dips, a small paper student figure resting at the lowest point and looking up toward the rising line, autumn leaves cut from orange paper', banner: '내려간 곳에도 까닭이 있어요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '학생 자신의 의욕 곡선은 발표시키지 않는다. 그리고 싶은 학생은 걷지 않는 활동지에 따로 그린다.',
      }),
      M({
        id: 'intro.fail', type: 'intro', title: '실패 뒤 두 생각과 마음',
        method: '실패 뒤 두 생각 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '생각 두 가지(고정 관점 하나·성장 관점 하나)와 마음을 함께 짝 짓는다.', base: '생각 세 가지와 마음을 짝 짓고 어느 생각이 다음 행동으로 이어지는지 말한다.', challenge: '생각 네 가지와 마음을 짝 짓고, 고정 관점 생각 하나를 성장 관점으로 바꿔 말한다.' },
        intro: {
          teacher: '"시험을 망친 날 머릿속에 떠오르는 말은 사람마다 달라요. 같은 결과에 다른 생각이 들면 마음도 달라질까요?" 시연 단추로 생각 카드와 마음 카드가 짝지어지는 모습을 보여 준다. "솔직히 실패하면 능력이 없는 거잖아요"라는 말이 나오면 "자전거를 처음 탈 때 넘어진 사람은 자전거에 소질이 없는 걸까요?"라고 되묻는다. 생각을 바꾸는 것은 핑계를 대는 것이 아니라 다음 행동을 고를 수 있게 하는 것이라고 짚는다.',
          student: '실패한 뒤 떠오를 수 있는 생각 카드 옆에, 그 생각을 하면 들 마음을 짝지어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', cards: ['걱정', '뿌듯함', '속상함', '편안함'], slots: [{ id: 'f1', label: '"나는 원래 머리가 안 돼"' }, { id: 'g1', label: '"아직 방법을 못 찾았을 뿐이야"' }, { id: 'f2', label: '"다들 나를 한심하게 볼 거야"' }, { id: 'g2', label: '"이번에 배운 게 하나는 있어"' }] }, sequence: [{ match: { f1: '속상함', g1: '편안함', f2: '걱정', g2: '뿌듯함' } }] },
          art: { draw: 'two paper speech bubbles over a paper student after a test, one bubble dark grey with rain clouds, the other light with a small sprout growing, a test sheet on the desk', banner: '같은 실패, 다른 생각', extra: [{ motif: 'rain', x: 120, y: 96 }, { motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.cause', type: 'activity', title: '슬럼프 원인 네 갈래',
        method: '슬럼프 원인 네 갈래 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '바구니마다 사례 카드 한 장씩(4장)을 넣고, 틀린 바구니에 넣으면 까닭을 듣고 되돌린다.', base: '사례 카드 6장을 목표·방법·몸과 마음·환경 바구니에 나누고, 해결 카드도 원인에 맞게 나눈다.', challenge: '헷갈리는 카드까지 10장을 나누고, 내 원인은 걷지 않는 활동지에만 적는다.' },
        activity: {
          title: '슬럼프 원인 바구니', tool: 'sortboard',
          teacher: '"슬럼프의 원인은 한 가지가 아니에요. 목표가 흐려졌는지, 방법이 안 맞는지, 몸과 마음이 지쳤는지, 주변 환경이 바뀌었는지 나눠 봐요." 카드를 넣을 때마다 "이 사람에게 무엇을 바꾸면 나아질까요?"라고 묻는다. "슬럼프는 다 노력 부족이에요"라며 모두 \'방법\'에 넣는 학생에게 "잠을 네 시간 자는 사람에게 노력을 더 하라고 하면 나아질까요?"라고 되묻는다. 원인이 다르면 해결도 다르다는 점을 셋째 문항에서 짚는다.',
          task: '가상 인물들의 사례 카드를 슬럼프 원인 바구니에 나누고, 원인에 맞는 해결을 골라요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('가상 인물들의 사례 카드를 슬럼프 원인 바구니에 나누세요.', ['목표', '방법', '몸과 마음', '환경'], [
              ['왜 공부하는지 모르겠다는 말이 늘었다', '목표가 너무 커서 시작하기 막막하다'],
              ['문제집만 풀고 틀린 문제는 다시 안 본다', '외우기만 하고 설명해 본 적이 없다'],
              ['요즘 잠을 하루 다섯 시간도 못 잔다'],
              ['학원이 바뀌어 공부 시간이 흩어졌다'],
            ], { k: 1, hard: [[], [], ['작은 일에도 쉽게 지치고 짜증이 난다'], ['집에 공부할 조용한 자리가 없어졌다']], traps: ['원래 의지가 약한 사람이라서 그렇다', '운이 나빴을 뿐 아무것도 바꿀 필요 없다'], d: 0.3 }),
            SBQ('해결 카드를 그 해결이 겨냥하는 원인 바구니에 나누세요.', ['목표', '방법', '몸과 마음', '환경'], [
              ['한 달 목표를 한 주 목표로 쪼갠다', '진로와 이 과목이 이어지는 점을 적어 본다'],
              ['틀린 문제를 유형별로 다시 푼다', '배운 내용을 친구에게 설명해 본다'],
              ['잠자는 시각부터 먼저 정한다', '힘들 때 상담 선생님과 이야기한다'],
              ['공부할 자리와 시간을 고정한다', '휴대폰을 다른 방에 두고 공부한다'],
            ], { k: 1, traps: ['슬럼프가 지나갈 때까지 아무것도 안 한다'], d: 0.35 }),
            SBQ('가상 인물 지안이의 일기 문장을 원인 바구니에 나누세요(원인이 아닌 문장은 남겨요).', ['목표', '방법', '몸과 마음', '환경'], [
              ['꿈이 바뀌어 이 공부를 왜 하는지 흐려졌다'],
              ['읽기만 하고 문제는 안 풀어서 시험에서 막혔다'],
              ['밥을 자주 거르고 머리가 늘 무겁다'],
              ['동생 방과 같이 쓰게 되어 집중할 수 없다'],
            ], { k: 1, traps: ['오늘 급식이 맛있었다', '어제 본 영화가 재미있었다'], d: 0.35, more: { conclude: '원인을 나누면 무엇을 바꿀지 보여요. 원인이 몸과 마음이면 쉬는 것도 방법이고, 방법이 원인이면 쉬기만 해서는 안 바뀌어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '(걷지 않아요) 요즘 내 공부에 가장 가까운 원인 바구니 하나와, 그 원인에 맞는 해결 하나를 적어 두세요.' }] },
        notes: '모든 사례는 가상 인물이다. 학생 자신의 원인은 걷지 않는 활동지에만 쓰고 발표시키지 않는다.',
      }),
      M({
        id: 'activity.reset', type: 'activity', title: '목표·방법 다시 세우기',
        method: '목표·방법 다시 세우기 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문장 틀("원인은 ~이다. 그래서 목표를 ~로, 방법을 ~로 바꾼다.")의 빈칸을 채워 쓴다.', base: '원인·새 목표·새 방법을 한 문단으로 쓰고 기준표(원인 연결·구체성)로 점검한다.', challenge: '다시 점검할 날짜까지 넣고 기준표 항목 하나를 더 점검한다.' },
        activity: {
          title: '다시 세우는 계획 글', tool: 'rubric-writing',
          teacher: '"슬럼프에서 나오는 계획은 \'열심히 하자\'가 아니라 \'원인 → 새 목표 → 새 방법\'으로 이어져야 해요." 쓰기 전에 기준표를 함께 읽고, 예시 하나를 칠판에 쓴다. "다음엔 더 열심히 하겠다"로 끝낸 학생에게 "열심히 한 것을 다음 주에 어떻게 확인할 수 있을까요?"라고 묻는다. 목표는 일주일 안에 확인할 수 있을 만큼 작게 쓰라고 짚는다. 이 글은 가상 인물의 계획으로 쓰고, 내 계획은 원하는 학생만 걷지 않는 활동지에 쓴다.',
          task: '가상 인물의 슬럼프 원인에 맞춰 새 목표와 방법을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 인물 하린이(원인: 방법 — 문제집만 풀고 틀린 문제를 다시 보지 않음)의 새 목표와 방법을 쓰고 점검하세요.', '하린이의 원인에 맞춰 새 목표와 방법을 2~4문장으로 쓰세요.', ['원인과 이어지는 방법을 썼다', '목표를 일주일 안에 확인할 수 있게 썼다', '무엇을 얼마나 할지 구체적으로 썼다'], { min: 50, max: 300, must: [['목표', '방법']], starter: '원인은 ~이다. 그래서 목표를 ~로, 방법을 ~로 바꾼다.', sample: '하린이의 원인은 틀린 문제를 다시 보지 않는 방법에 있다. 그래서 목표를 이번 주 틀린 문제 20개 다시 풀기로 바꾼다. 방법은 매일 저녁 틀린 문제 세 개를 유형별 노트에 옮겨 다시 푸는 것이다.', plus: '다시 점검할 날짜를 썼다', d: 0.35 }),
            RWQ('가상 인물 서진이(원인: 몸과 마음 — 잠이 부족하고 쉽게 지침)의 새 목표와 방법을 쓰고 점검하세요.', '서진이의 원인에 맞춰 새 목표와 방법을 2~4문장으로 쓰세요.', ['원인이 몸과 마음이라는 점을 썼다', '쉬기·잠도 방법에 넣었다', '도움을 청할 사람이나 곳을 넣었다'], { min: 50, max: 300, starter: '서진이는 지쳐 있으니 먼저 ~를 지킨다. 공부 목표는 ~로 줄인다.', sample: '서진이는 지쳐 있으니 먼저 밤 12시 전에 자는 것을 지킨다. 공부 목표는 하루 한 과목 복습으로 줄인다. 일주일이 지나도 지치면 상담 선생님과 이야기한다.', plus: '다시 점검할 날짜를 썼다', d: 0.4 }),
            RWQ('가상 인물 지안이(원인: 목표 — 꿈이 바뀌어 공부하는 까닭이 흐려짐)의 새 목표를 쓰고 점검하세요.', '지안이가 공부의 까닭을 다시 찾는 목표를 2~4문장으로 쓰세요.', ['바뀐 관심과 공부를 잇는 점을 썼다', '작은 첫걸음을 썼다', '목표를 확인할 방법을 썼다'], { min: 50, max: 300, starter: '지안이의 새 관심은 ~이다. 이 과목은 ~와 이어진다. 이번 주에는 ~를 해 본다.', sample: '지안이의 새 관심은 동물 돌봄이다. 생명과학은 이 관심과 바로 이어진다. 이번 주에는 관련 학과의 교육과정을 찾아보고 생명과학 한 단원을 다시 정리해 본다.', plus: '다시 점검할 날짜를 썼다', d: 0.4, more: { conclude: '다시 세운 계획은 원인과 이어지고, 작고, 확인할 수 있어야 해요. 그래야 다음 주에 고칠 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '(걷지 않아요) 내가 바꿔 보고 싶은 공부 방법 하나와 다시 점검할 날짜를 적어 두세요.' }] },
        notes: '평가하는 것은 가상 인물의 계획 글이 기준표를 갖췄는지뿐이다. 학생 자신의 성적·계획은 걷거나 채점하지 않는다.',
      }),
      M({
        id: 'activity.path', type: 'activity', title: '대회 탈락 뒤 갈림길',
        method: '실패 뒤 행동 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(탈락 직후)에서 고르고 결과를 본 뒤 근거를 고른다.', base: '두 번째 갈림길(원인을 찾은 뒤)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(연습 중 막힘)까지 가서 근거 두 장을 고르고, 고르지 않은 길과 견준다.' },
        activity: {
          title: '대회 탈락 뒤 갈림길', tool: 'dilemma',
          teacher: '"반년 준비한 대회에서 떨어진 도윤이. 다음 날 무엇을 할까요?" 선택마다 결과를 소리 내어 읽고, "이 선택은 실패를 무엇의 증거로 보고 있나요?"라고 묻는다. "그만두는 게 상처를 덜 받는 길"이라는 학생에게 "그만둔 뒤 한 달 장면에서 도윤이는 무엇을 잃었나요?"라고 되묻는다. 연습 시간을 세 배로 늘리는 길을 고른 학생에게는 원인이 바뀌었는지 묻는다. 다시 서기는 원인을 보고 방법을 바꾸는 일이라는 점을 짚는다.',
          task: '도윤이와 하린이의 갈림길을 따라가며 다시 서는 해석과 행동을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('대회에서 떨어진 도윤이가 다시 서는 길을 고르고 근거를 고르세요.', FAIL, [['review', 'plan', 'ask']], FAIL_R, ['cause', 'help'], { d: 0.4 }),
            EXPLOREQ('도윤이의 다른 길도 끝까지 가 보고 결과를 견주세요.', FAIL, FAIL_R, ['포기한 길의 한 달 뒤를 확인했다', '연습량만 늘린 길의 결과를 확인했다'], { d: 0.35 }),
            DILQ('모의고사 점수가 떨어진 하린이가 원인에 맞게 다시 서는 길을 고르고 근거를 고르세요.', EXAM, [['wrong', 'concept']], EXAM_R, ['cause', 'fit'], { d: 0.35, more: { conclude: '실패 뒤 다시 서는 길은 원인을 찾고, 방법을 바꾸고, 막히면 도움을 청하는 길이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도윤이가 고른 길 가운데 가장 결정적인 선택 하나와 그 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.story', type: 'activity', title: '다시 일어선 이야기',
        method: '다시 일어선 이야기 차례', tool: 'story', minutes: 18,
        levels: { easy: '장면 카드 3장(실패·해석·행동)을 차례로 놓는다.', base: '장면 카드 4장(실패·해석·행동·변화)을 놓고, 말풍선 빈칸에 성장 관점의 말을 넣는다.', challenge: '함정 장면 카드를 빼고 놓은 뒤, 내 이야기는 걷지 않는 활동지에 네 칸으로 쓴다.' },
        activity: {
          title: '다시 일어선 이야기', tool: 'story',
          teacher: '"다시 일어선 이야기에는 늘 같은 뼈대가 있어요. 실패, 그것을 보는 생각, 새 행동, 그리고 변화." 첫 이야기를 함께 놓은 뒤 둘째 이야기는 혼자 놓게 한다. "실패하자마자 바로 성공하는 장면"을 앞에 놓는 학생에게 "그 사이에 무엇이 빠졌을까요?"라고 묻는다. 말풍선 문항에서 "괜찮아, 넌 원래 잘해"처럼 결과를 부정하는 위로를 고르는 학생에게, 성장 관점은 결과를 숨기는 말이 아니라 배운 점을 보는 말이라고 짚는다.',
          task: '가상 인물의 다시 일어선 이야기 장면을 차례로 놓고, 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('가상 인물 유나의 이야기 장면을 차례로 놓으세요.', ['오디션에서 첫 소절부터 음이 흔들렸다', '"긴장을 다루는 연습이 부족했구나" 하고 생각했다', '매주 친구들 앞에서 한 곡씩 불러 보았다', '석 달 뒤 무대에서 끝까지 노래했다'], { k: 3, traps: ['다음 날 바로 오디션에 합격했다'], d: 0.3, opt: { axis: ['처음', '나중'] } }),
            { prompt: '말풍선 빈칸에 성장 관점의 말을 넣으세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '유나', label: '"떨어졌지만 ___"' }, { id: 'b2', who: '친구', label: '"다음 연습 때 ___"' }], cards: ['긴장할 때 무엇을 할지 배웠어', '내가 들어 주고 어디가 좋았는지 말해 줄게', '나는 원래 노래에 소질이 없어', '다음엔 그냥 안 나가면 돼'] }, target: { fill: { b1: '긴장할 때 무엇을 할지 배웠어', b2: '내가 들어 주고 어디가 좋았는지 말해 줄게' } }, difficulty: 0.3 },
            ORDERQ('가상 인물 준서의 이야기 장면을 차례로 놓으세요.', ['코딩 대회 과제를 시간 안에 못 끝냈다', '"설계 없이 바로 짠 게 문제였어" 하고 돌아봤다', '다음 과제부터 먼저 순서도를 그렸다', '오류를 찾는 시간이 눈에 띄게 줄었다'], { k: 3, traps: ['"코딩은 나랑 안 맞아"라며 그만두었다'], d: 0.35, opt: { axis: ['처음', '나중'] }, more: { conclude: '다시 일어선 이야기는 실패를 지우는 이야기가 아니라, 실패에서 배운 것으로 행동을 바꾼 이야기예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '(걷지 않아요) 작은 실패 하나로 내 이야기를 네 칸에 써 보세요.', columns: ['실패', '생각', '행동', '변화'], cells: [['', '', '', '']] }] },
      }),

      M({
        id: 'wrap.share', type: 'wrap', title: '짝과 성장 해석 나누기',
        method: '짝과 성장 해석 나누기', tool: 'timer', minutes: 8,
        levels: { easy: '교사가 예시 실패 하나를 주고, 짝과 한 번씩 성장 관점으로 바꿔 말한다.', base: '2분 말하기·1분 바꾸기를 두 번 돌려 짝과 두 가지 실패를 바꿔 말한다.', challenge: '바꿔 말한 뒤 짝에게 응원 문장 하나를 덧붙여 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"짝과 작은 실패 하나씩을 나눠요. 크게 아픈 일 말고, 지각했다·발표를 망쳤다 정도의 작은 일이요. 말하고 싶지 않으면 교사가 준 예시로 해도 돼요." 타이머를 2분 말하기·1분 바꾸기·2번으로 맞추게 한 뒤 시작한다. 듣는 짝은 판단하지 않고 "그 일에서 배운 점은 뭐였어?"라고 묻게 한다. "괜찮아, 별거 아니야"로만 끝내는 짝에게, 성장 해석은 작다고 넘기는 말이 아니라 다음에 할 행동을 찾는 말이라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝과 성장 해석 나누기', labels: ['말하기', '바꾸기'], timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 }, showTotal: true }, prompt: '짝 나누기 타이머를 2분 말하기, 1분 바꾸기, 2번으로 맞추세요.', target: { plan: { work: 2, rest: 1, rounds: 2 } }, difficulty: 0.15 },
            { type: 'choice', prompt: '"수행평가 발표를 망쳤어"를 성장 관점으로 바꾼 말로 알맞은 것은?', options: ['"나는 발표 체질이 아니야"', '"발표 전에 한 번 소리 내어 연습해야겠다는 걸 알았어"', '"다른 애들도 다 망쳤을 거야"'], answer: 1, difficulty: 0.15, explain: '성장 관점은 결과에서 배운 점을 찾아 다음 행동으로 잇는 말이에요.' },
            { type: 'short', prompt: '짝에게 해 주고 싶은 응원 문장 하나를 쓰세요(이름은 쓰지 않아요).' },
          ],
        },
        worksheet: {
          title: '성장 해석 나누기',
          items: [
            { type: 'table', prompt: '고정 관점의 말을 성장 관점으로 바꿔 쓰세요.', columns: ['고정 관점', '성장 관점'], cells: [['"나는 원래 수학이 안 돼"', ''], ['"한 번 떨어졌으니 끝이야"', '']] },
            { type: 'short', prompt: '짝 나누기에서 들은 말 가운데 힘이 된 말 하나를 쓰세요.' },
          ],
          easy: { note: '"아직 ~를 못 했을 뿐이야", "이번에 ~를 배웠어"로 시작해 보세요.', items: [{ type: 'short', prompt: '"나는 원래 수학이 안 돼"를 바꿔 쓰세요.' }] },
        },
        notes: '나누는 실패는 학생이 고른 작은 일로, 말하기 싫으면 교사 예시로 대신한다. 무엇을 말했는지는 걷지 않는다.',
      }),
      M({
        id: 'wrap.routine', type: 'wrap', title: '다시 서기 루틴 점검',
        method: '다시 서기 루틴 점검', tool: 'timer', minutes: 8,
        levels: { easy: '루틴 순서 카드 두 장(시작·점검)을 함께 놓는다.', base: '루틴 순서 카드 세 장을 놓고 2주 스스로 점검 칸을 표시한다.', challenge: '루틴이 지켜지지 않을 때의 조정 규칙을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"새 방법은 루틴이 되어야 지켜져요. 시작 신호, 할 일, 점검을 차례로 놓아 볼까요?" 순서 카드를 놓고 점검 칸을 하나씩 읽게 한다. "루틴은 하루도 빠지면 실패"라는 말이 나오면 "두 주 가운데 이틀을 놓쳤다면 다시 시작하는 규칙이 있으면 어떨까요?"라고 되묻는다. 조정 규칙(예: 이틀 놓치면 양을 반으로)이 루틴을 오래 가게 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '다시 서기 루틴', cards: ['일주일 뒤 바꿀 점을 하나 고른다', '저녁 9시에 틀린 문제 노트를 편다', '세 문제를 다시 풀고 표시한다'] }, prompt: '하린이의 다시 서기 루틴 순서 카드를 차례로 놓고, 2주 점검 칸을 표시하세요.', target: { order: ['저녁 9시에 틀린 문제 노트를 편다', '세 문제를 다시 풀고 표시한다', '일주일 뒤 바꿀 점을 하나 고른다'], selfCheck: ['루틴을 시작할 신호(시각·장소)를 정했다', '하루에 할 양을 작게 정했다', '2주 동안 표시할 점검 칸을 만들었다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '루틴을 이틀 놓쳤을 때의 조정 규칙으로 알맞은 것은?', options: ['처음부터 다시 계획을 버린다', '양을 반으로 줄여 다음 날 다시 시작한다', '놓친 이틀 몫을 하루에 몰아서 한다'], answer: 1, difficulty: 0.2, explain: '놓친 날이 있어도 작게 다시 시작하는 규칙이 루틴을 이어 줘요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '다시 서기 루틴 2주 점검표',
          items: [
            { type: 'table', prompt: '(걷지 않아요) 루틴을 지킨 날에 표시하세요.', columns: ['주', '월', '화', '수', '목', '금'], cells: [['1주', '', '', '', '', ''], ['2주', '', '', '', '', '']] },
            { type: 'short', prompt: '루틴이 끊겼을 때 쓸 나의 조정 규칙 하나를 쓰세요.' },
          ],
        },
        notes: '점검표는 학생이 스스로 쓰고 걷지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 11-2. 지속 가능한 소비와 온라인 공동체 (11학년 · 기본생활습관 형성 활동)
  // ======================================================================================================
  {
    const M = MOD('g11-habit', [11]);
    const LIFE = ['목화를 길러 실을 뽑는다', '공장에서 천을 짜고 염색한다', '배와 트럭으로 가게까지 옮긴다', '입고 빨며 몇 해를 쓴다', '버리거나 다시 쓴다'];
    const GOODS = [
      { id: 'bottle', text: '오래 쓰는 스테인리스 물병', price: 15000 },
      { id: 'pet', text: '한 번 쓰고 버리는 생수 묶음', price: 6000 },
      { id: 'bag', text: '수선 보증이 있는 천 가방', price: 25000 },
      { id: 'cheapbag', text: '한 철 쓰면 해지는 싼 가방', price: 9000 },
      { id: 'refill', text: '리필해 쓰는 샤프심 통', price: 3000 },
      { id: 'pens', text: '포장이 많은 일회용 펜 묶음', price: 4000 },
      { id: 'note', text: '재생 종이 공책 3권', price: 4500 },
    ];
    const FIX = { text: '가상 인물 은호의 무선 이어폰 한쪽 소리가 작아졌다. 산 지 1년 반, 새 제품 광고가 계속 뜬다.', who: '은호', motif: 'house', choices: [
      { id: 'new', text: '바로 새 제품을 산다', result: '쓰던 이어폰은 서랍에 넣어 둔다.', impact: [{ who: '은호', text: '용돈 대부분이 나간다', tone: -1 }, { who: '환경', text: '버려질 전자 제품이 하나 는다', tone: -1 }],
        next: { text: '한 달 뒤, 서랍 속 이어폰을 보니 아직 한쪽은 잘 들린다.', choices: [
          { id: 'drawer', text: '그대로 서랍에 둔다', result: '쓰지 않는 기기가 늘어난다.', impact: [{ who: '환경', text: '자원이 쓰이지 못한 채 묵힌다', tone: -1 }], ending: '바로 바꾸면 아직 쓸 수 있는 물건의 생애가 짧아진다.' },
          { id: 'collect', text: '전자 제품 회수함에 낸다', result: '부품 일부가 다시 쓰일 수 있게 된다.', impact: [{ who: '환경', text: '버림 단계의 영향이 준다', tone: 1 }], ending: '버림 단계에서도 할 수 있는 선택이 있다.' }] } },
      { id: 'check', text: '먼저 고장 원인과 수리 방법을 알아본다', result: '귀 덮개에 먼지가 막혀 소리가 작았을 수 있다는 안내를 찾는다.', impact: [{ who: '은호', text: '돈을 쓰지 않고 시도할 길이 생긴다', tone: 1 }],
        next: { text: '청소했더니 조금 나아졌지만 완전히 돌아오지는 않았다.', choices: [
          { id: 'repair', text: '제조사 수리를 맡기고 비용을 새 제품 값과 견준다', result: '수리비가 새 제품 값의 4분의 1이다.', impact: [{ who: '은호', text: '적은 돈으로 더 쓴다', tone: 1 }, { who: '환경', text: '물건의 생애가 늘어난다', tone: 1 }],
            next: { text: '수리 뒤 친구가 "중고로 팔고 새것 사지 그래?"라고 한다.', choices: [
              { id: 'keep', text: '쓸 수 있을 때까지 쓰고, 바꿀 때는 중고 거래나 회수를 고려한다', result: '2년을 더 쓴다.', impact: [{ who: '은호', text: '소비 계획이 분명해진다', tone: 1 }], ending: '수리하고 오래 쓰고, 끝에서 다시 쓰이게 하는 것이 물건의 생애 전체를 보는 선택이다.' },
              { id: 'flip', text: '수리한 김에 팔고 새 모델을 산다', result: '돈이 다시 크게 나간다.', impact: [{ who: '은호', text: '수리한 의미가 줄어든다', tone: 0 }], ending: '새 모델을 따라가면 수리의 이익이 금방 사라진다.' }] } },
          { id: 'cheap', text: '아주 싼 이어폰을 하나 더 산다', result: '석 달 만에 그것도 고장 난다.', impact: [{ who: '환경', text: '버려질 물건이 둘이 된다', tone: -1 }], ending: '싼 물건을 자주 사면 결국 더 쓰고 더 버린다.' }] } },
      { id: 'used', text: '중고 거래로 같은 제품 한 짝만 구한다', result: '판매자 설명과 달리 배터리가 약한 제품이 온다.', impact: [{ who: '은호', text: '확인 없이 산 값을 치른다', tone: -1 }], ending: '중고도 상태를 확인할 방법이 있어야 좋은 선택이 된다.' }] };
    const FIX_R = [{ id: 'life', text: '오래 쓰면 물건의 생애 전체의 영향이 준다' }, { id: 'compare', text: '수리비와 새 제품 값을 견주어 판단한다' }, { id: 'end', text: '버릴 때도 회수·재사용 길을 고른다' }, { id: 'cheapgood', text: '싸면 무조건 좋은 소비다', why: '자주 고장 나면 돈도 자원도 더 들어요.' }, { id: 'trend', text: '새 모델이 나오면 바꾸는 것이 당연하다', why: '광고는 내 필요를 대신 정해 주지 않아요.' }];
    const NEWS = { cards: [
      { id: 'n1', text: '올린 사람·기관이 누구인지 찾아본다', motif: 'house' },
      { id: 'n2', text: '언제 쓰인 글인지 날짜를 본다', motif: 'sun' },
      { id: 'n3', text: '다른 믿을 만한 자료에도 같은 내용이 있는지 견준다', motif: 'cloud' },
      { id: 'n4', text: '확인된 내용만 공유하거나 공유하지 않는다', motif: 'star' },
    ] };

    MODS.push(
      M({
        id: 'intro.life', type: 'intro', title: '티셔츠 한 장의 생애',
        method: '티셔츠 한 장의 생애 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 원료·생산·사용·버림 네 장을 함께 놓는다.', base: '운송을 더한 다섯 장을 차례로 놓는다.', challenge: '단계마다 어떤 영향(물·에너지·쓰레기)이 생길지 하나씩 말한다.' },
        intro: {
          teacher: '"지금 입은 티셔츠는 어디서 시작됐을까요? 가게에서 시작된 게 아니에요." 시연 단추로 생애 카드가 차례로 놓이는 모습을 보여 주고, 가장 긴 시간이 걸리는 단계와 우리가 고를 수 있는 단계를 묻는다. "옷값만 싸면 좋은 소비잖아요"라는 말이 나오면 "가격표에는 다섯 단계 가운데 무엇이 적혀 있나요?"라고 되묻는다. 오늘은 물건의 생애 전체를 보고 고르는 연습을 한다고 밝힌다.',
          student: '티셔츠 한 장이 원료에서 버려질 때까지 거치는 단계를 차례로 생각해 보고, 내가 고를 수 있는 단계가 어디인지 찾아보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['원료', '버림'], slots: 5, cards: [LIFE[3], LIFE[0], LIFE[4], LIFE[2], LIFE[1]] }, sequence: [{ order: LIFE }] },
          art: { draw: 'a paper T-shirt in the middle of a looping paper path: cotton field, factory with looms, cargo ship and truck, a washing line, and a recycling bin, each stage cut from pastel paper', banner: '티셔츠는 어디서 왔을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.post', type: 'intro', title: '혐오 댓글을 읽는 사람의 마음',
        method: '온라인 글 보고 느낌 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '댓글 장면 두 개와 읽는 사람 마음을 함께 짝 짓는다.', base: '장면 세 개와 마음을 짝 짓고, 그 댓글을 본 다른 사람들의 마음도 말한다.', challenge: '각 장면에서 읽는 사람이 어떻게 대응할지(신고·반박·지지 댓글) 짐작해 말한다.' },
        intro: {
          teacher: '"가상 게시판에 이런 댓글들이 달렸어요. 실제 표현은 화면에 쓰지 않고 어떤 내용인지만 적었어요. 이 글을 읽는 사람은 어떤 마음일까요?" 시연 단추로 장면과 마음이 짝지어지는 모습을 보여 준다. "농담인데 예민하게 받는 게 문제잖아요"라는 말이 나오면 "그 집단에 속한 사람이 이 댓글을 매일 본다면 농담으로 들릴까요?"라고 되묻는다. 혐오 표현은 한 사람이 아니라 한 집단 전체를 깎아내리는 말이라는 점을 짚는다.',
          student: '가상 게시판 댓글 장면마다, 그 글을 읽는 사람이 느낄 마음을 짝지어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', cards: ['화남', '무서움', '고마움'], slots: [{ id: 'p1', label: '어느 지역 출신을 통째로 깎아내리는 댓글' }, { id: 'p2', label: '다른 나라에서 온 학생들을 나가라고 하는 댓글' }, { id: 'p3', label: '그 댓글에 "사람을 집단으로 묶어 비난하지 말자"는 답글' }] }, sequence: [{ match: { p1: '화남', p2: '무서움', p3: '고마움' } }] },
          art: { draw: 'a paper phone screen showing a comment thread with grey blurred comment boxes and one bright supportive reply box, a paper hand hovering over a report flag button', banner: '그 글을 읽는 사람이 있어요', extra: [{ motif: 'storm', x: 120, y: 96 }, { motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '혐오 표현의 실제 문구는 화면·발문에 쓰지 않고 내용만 설명한다. 특정 지역·국가 이름을 쓰지 않는다.',
      }),

      M({
        id: 'activity.buy', type: 'activity', title: '예산 안 지속 가능한 선택',
        method: '예산 안에서 지속 가능한 선택', tool: 'economy', minutes: 18,
        levels: { easy: '물건 넷 가운데 오래 쓰는 것 두 개를 예산 안에서 고른다.', base: '물건 일곱 가운데 가격·내구성·환경 표시를 따져 네 개를 예산 안에서 고른다.', challenge: '예산이 줄어든 조건에서 다시 고르고, 활동지에 고른 까닭을 쓴다.' },
        activity: {
          title: '새 학기 준비 예산', tool: 'economy',
          teacher: '"가상 인물 은호의 새 학기 준비 예산은 5만 원이에요. 가격표만 보지 말고 얼마나 오래 쓸지, 버릴 때 무엇이 남을지 함께 따져 봐요." 고를 때마다 "이 물건은 생애 다섯 단계 가운데 어디에서 차이가 나나요?"라고 묻는다. 싼 가방과 일회용 묶음만 골라 돈을 남기는 학생에게 "한 학기 뒤 이 가방을 또 사면 두 번 값은 얼마일까요?"라고 되묻는다. 지속 가능한 소비는 돈을 더 쓰는 것이 아니라 생애 전체로 따지는 것이라고 짚는다.',
          task: '가상 예산 막대 안에서 가격·내구성·환경 표시를 따져 물건을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '예산 5만 원. 한 번 쓰고 버리는 물건은 빼고, 오래 쓰는 물건 네 개를 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 50000, items: GOODS }, target: { budget: { not: ['pet', 'pens'], count: 4 } }, difficulty: 0.3,
              levels: { easy: { prompt: '예산 5만 원. 물건 넷 가운데 오래 쓰는 물건 두 개를 예산 안에서 고르세요.', toolOptions: { items: [GOODS[0], GOODS[1], GOODS[4], GOODS[5]] }, target: { budget: { must: ['bottle', 'refill'], count: 2 } } } } },
            { prompt: '예산이 3만 원으로 줄었어요. 수선 보증 천 가방은 꼭 넣고, 일회용 물건은 빼고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 30000, items: GOODS }, target: { budget: { must: ['bag'], not: ['pet', 'pens'] } }, difficulty: 0.35 },
            { prompt: '친구는 같은 3만 원으로 싼 가방과 일회용 묶음을 사겠대요. 싼 가방은 빼고 물병·리필 샤프심 통을 넣어 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 30000, items: GOODS }, target: { budget: { must: ['bottle', 'refill'], not: ['cheapbag', 'pet'] } }, difficulty: 0.35,
              conclude: '가격표는 생애의 한 칸일 뿐이에요. 오래 쓰고, 다시 채워 쓰고, 덜 버리는 물건이 길게 보면 돈과 자원을 아껴요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 무엇을 먼저 지키고 무엇을 뺐는지, 그 까닭을 두 문장으로 쓰세요.' }] },
        notes: '물건과 가격은 모두 수업용 가상 예시다. 특정 상품명·회사명을 쓰지 않는다. 학생 자신의 용돈·가정 형편은 묻지 않는다.',
      }),
      M({
        id: 'activity.compare', type: 'activity', title: '새것·수리·중고 갈림길',
        method: '소비 선택 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(새것·수리·중고)에서 고르고 결과를 본 뒤 근거를 고른다.', base: '두 번째 갈림길까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(수리 뒤 친구의 권유)까지 가서 근거 세 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '고장 난 이어폰 갈림길', tool: 'dilemma',
          teacher: '"이어폰 한쪽 소리가 작아졌어요. 새로 살까, 고칠까, 중고를 찾을까?" 선택마다 은호의 지갑과 환경에 어떤 영향이 가는지 나눠 읽게 한다. "수리는 귀찮고 오래 걸리잖아요"라는 학생에게 "수리비가 새 제품 값의 4분의 1이라면, 그 귀찮음은 얼마짜리일까요?"라고 묻는다. 중고 길을 고른 학생에게는 중고도 좋은 선택이 될 수 있지만 상태를 확인할 방법이 있어야 한다고 짚는다.',
          task: '은호의 이어폰 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('은호가 물건의 생애를 따져 고르는 길을 가고 근거를 고르세요.', FIX, [['check', 'repair', 'keep']], FIX_R, ['life', 'compare'], { d: 0.4, hardReasons: ['life', 'compare', 'end'] }),
            EXPLOREQ('은호의 다른 길도 끝까지 가 보고 지갑과 환경에 간 영향을 견주세요.', FIX, FIX_R, ['새것을 바로 산 길의 결과를 확인했다', '싼 것을 또 산 길의 결과를 확인했다'], { d: 0.35 }),
            DILQ('겨울 패딩 지퍼가 고장 난 가상 인물 수아가 생애를 따져 고르는 길을 가고 근거를 고르세요.', { text: '수아의 패딩 지퍼가 고장 났다. 옷은 아직 따뜻하다. 할인 광고에는 새 패딩이 반값이다.', who: '수아', motif: 'snow', choices: [
              { id: 'mend', text: '수선집에 지퍼 교체를 맡긴다', result: '며칠 뒤 지퍼가 새것처럼 된다.', impact: [{ who: '수아', text: '적은 돈으로 겨울을 난다', tone: 1 }],
                next: { text: '친구가 "그래도 유행이 지났잖아"라고 한다.', choices: [
                  { id: 'wear', text: '따뜻하고 잘 맞으니 계속 입는다', result: '두 해를 더 입는다.', impact: [{ who: '환경', text: '새 옷 한 벌의 생산이 미뤄진다', tone: 1 }], ending: '유행보다 쓰임을 기준으로 삼으면 물건의 생애가 길어진다.' },
                  { id: 'buy2', text: '결국 새 패딩도 산다', result: '수선한 패딩은 옷장에 걸린다.', impact: [{ who: '수아', text: '돈이 두 번 나간다', tone: -1 }], ending: '수선 뒤 다시 사면 수선의 의미가 줄어든다.' }] } },
              { id: 'sale', text: '반값이니 새 패딩을 산다', result: '고장 난 패딩은 버린다.', impact: [{ who: '환경', text: '아직 따뜻한 옷이 쓰레기가 된다', tone: -1 }], ending: '반값이어도 필요 없는 물건은 비싼 소비다.' }] },
              [['mend', 'wear']], [{ id: 'need', text: '필요와 쓰임을 기준으로 고른다' }, { id: 'longer', text: '고쳐 쓰면 새 생산이 줄어든다' }, { id: 'half', text: '반값이면 사는 것이 이득이다', why: '필요 없는 물건은 반값이어도 쓰레기가 될 수 있어요.' }], ['need', 'longer'], { d: 0.35, more: { conclude: '새것·수리·중고에는 정답이 하나가 아니에요. 생애 전체에서 무엇이 줄고 무엇이 늘지 따져 고르는 것이 지속 가능한 소비예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '새것·수리·중고 가운데 하나를 고를 때 내가 쓸 기준 두 가지를 쓰세요.' }] },
        notes: '수리 비용 비율은 수업용 가상 설정이다.',
      }),
      M({
        id: 'activity.check', type: 'activity', title: '허위 정보 확인 차례',
        method: '허위 정보 확인 차례', tool: 'story', minutes: 18,
        levels: { easy: '확인 장면 3장(출처·날짜·대조)을 차례로 놓는다.', base: '공유 판단까지 4장을 놓고, 함정 장면(바로 공유)은 빼고 남긴다.', challenge: '가상 사례 게시물에서 의심할 단서 카드를 고르는 문항까지 푼다.' },
        activity: {
          title: '공유 전에 확인하기', tool: 'story',
          teacher: '"\'내일부터 학교 급식 전면 중단\'이라는 글이 단톡방에 돌았어요. 공유하기 전에 무엇부터 할까요?" 첫 문항을 놓은 뒤 각자 다른 차례를 고른 까닭을 듣는다. "친구가 보냈으니 믿을 만하다"는 말에 "그 친구는 어디서 받았을까요? 처음 쓴 사람은 누구일까요?"라고 되묻는다. 확인이 안 되면 공유하지 않는 것도 판단이라는 점을 짚는다.',
          task: '허위 정보를 확인하는 장면을 차례로 놓고, 가상 게시물에서 의심할 단서를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('단톡방에 돈 가상 공지 "내일부터 급식 전면 중단"을 공유하기 전 확인 장면을 차례로 놓으세요.', NEWS.cards.map((c) => c.id), { k: 3, traps: ['n5'], d: 0.3, opt: { axis: ['받았을 때', '공유할 때'], cards: [...NEWS.cards, { id: 'n5', text: '놀라운 소식이니 먼저 공유한다', motif: 'wind' }].reverse() }, more: { levels: { easy: { prompt: '단톡방에 돈 가상 공지 "내일부터 급식 전면 중단"을 공유하기 전 확인 장면을 차례로 놓으세요(카드 3장).', toolOptions: { slots: 3, cards: NEWS.cards.slice(0, 3).reverse() }, target: { order: ['n1', 'n2', 'n3'] } } } } }),
            { prompt: '가상 게시물 "○○ 음료 마시면 시험 점수 오른다(3년 전 글)"에서 의심할 단서 카드만 고르세요.', toolOptions: { mode: 'pick', basket: '의심할 단서', cards: [{ id: 'old', text: '3년 전에 쓰인 글이다', motif: 'sun' }, { id: 'nosrc', text: '글쓴이와 연구 출처가 없다', motif: 'house' }, { id: 'ad', text: '글 끝에 구매 링크가 있다', motif: 'star' }, { id: 'many', text: '조회 수가 많다', motif: 'cloud' }, { id: 'font', text: '글씨가 크고 보기 좋다', motif: 'leaf' }] }, target: { pick: ['old', 'nosrc', 'ad'] }, difficulty: 0.35 },
            ORDERQ('가상 뉴스 캡처 "유명 대학 입시 내일 폐지"를 받았을 때 확인 장면을 차례로 놓으세요.', ['캡처에 언론사 이름과 원문 주소가 있는지 본다', '기사 날짜와 지금 날짜를 견준다', '교육 기관의 공식 발표에 같은 내용이 있는지 찾는다', '확인이 안 되면 "확인 안 된 내용"이라고 답하고 퍼뜨리지 않는다'], { k: 3, traps: ['캡처만 보고 친구들에게 알린다'], d: 0.35, opt: { axis: ['받았을 때', '공유할 때'] }, more: { conclude: '출처 → 날짜 → 다른 자료 대조 → 공유 판단. 확인이 안 되면 멈추는 것도 공동체를 지키는 행동이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '확인이 안 된 글을 받았을 때 단톡방에 남길 한 문장을 쓰세요.' }] },
        notes: '게시물은 모두 가상이다. 실제 언론사·대학·상품 이름을 쓰지 않는다.',
      }),
      M({
        id: 'activity.rules', type: 'activity', title: '온라인 공동체 규칙 쓰기',
        method: '온라인 공동체 규칙 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '규칙마다 문장 틀("우리는 ~한다. 왜냐하면 ~")을 보고 쓴다.', base: '허위 정보·혐오 표현·저작권 규칙을 하나씩 까닭과 함께 쓰고 기준표로 점검한다.', challenge: '규칙마다 어겼을 때의 절차까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '가상 학급 카페 규칙', tool: 'rubric-writing',
          teacher: '"가상 학급 온라인 카페의 운영 규칙을 우리가 정해요. 금지만 늘어놓지 말고, 무엇을 하자는지와 까닭을 함께 써요." 첫 규칙을 함께 쓰며 기준표를 읽는다. "퍼온 글은 출처만 쓰면 다 된다"는 학생에게 "출처를 적어도 원작자가 허락하지 않았다면 어떨까요? 이용 허락 표시를 봐야 해요"라고 짚는다. 혐오 규칙에서 "싫은 사람은 강퇴"처럼 쓰는 학생에게 사람이 아니라 행동을 다루는 규칙으로 고쳐 보게 한다.',
          task: '가상 학급 카페의 허위 정보·혐오 표현·저작권 규칙을 까닭과 함께 쓰고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('허위 정보 규칙을 까닭과 함께 쓰고 점검하세요.', '가상 학급 카페의 허위 정보 규칙을 1~3문장으로 쓰세요.', ['해야 할 행동을 썼다', '그 규칙이 필요한 까닭을 썼다', '누구나 지킬 수 있게 구체적으로 썼다'], { min: 30, max: 250, must: [['왜냐하면', '때문에']], starter: '우리는 ~한다. 왜냐하면 ~', sample: '우리는 출처와 날짜를 확인한 정보만 올린다. 확인이 안 된 글은 "확인 중"이라고 밝힌다. 왜냐하면 잘못된 정보가 퍼지면 바로잡기 어렵기 때문이다.', plus: '어겼을 때의 절차를 썼다', d: 0.35 }),
            RWQ('혐오 표현 규칙을 까닭과 함께 쓰고 점검하세요.', '가상 학급 카페의 혐오 표현 규칙을 1~3문장으로 쓰세요.', ['사람이 아니라 행동을 다루었다', '그 규칙이 필요한 까닭을 썼다', '본 사람이 할 수 있는 행동을 썼다'], { min: 30, max: 250, must: [['왜냐하면', '때문에']], starter: '우리는 ~하지 않는다. 그런 글을 보면 ~한다. 왜냐하면 ~', sample: '우리는 출신·성별·장애 등으로 사람을 묶어 깎아내리는 글을 쓰지 않는다. 그런 글을 보면 퍼뜨리지 않고 운영진에게 알린다. 왜냐하면 그 집단의 친구가 카페를 떠나게 되기 때문이다.', plus: '어겼을 때의 절차를 썼다', d: 0.4 }),
            RWQ('저작권 규칙을 까닭과 함께 쓰고 점검하세요.', '가상 학급 카페의 저작권 규칙을 1~3문장으로 쓰세요.', ['출처 밝히기를 썼다', '이용 허락 표시 확인을 썼다', '그 규칙이 필요한 까닭을 썼다'], { min: 30, max: 250, must: [['출처']], starter: '우리는 남의 글·그림을 쓸 때 ~한다. 왜냐하면 ~', sample: '우리는 남의 글·그림을 쓸 때 이용 허락 표시를 확인하고 출처를 밝힌다. 허락이 없으면 링크만 건다. 왜냐하면 만든 사람의 권리를 지켜야 하기 때문이다.', plus: '어겼을 때의 절차를 썼다', d: 0.4, more: { conclude: '좋은 규칙은 할 일과 까닭이 함께 있고, 사람이 아니라 행동을 다뤄요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 규칙 가운데 지키기 가장 어려울 것 같은 규칙과, 그것을 돕는 방법을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.audit', type: 'wrap', title: '가방 속 물건 생애 조사',
        method: '내 물건 생애 조사', tool: 'timer', minutes: 8,
        levels: { easy: '물건 하나의 원산지·소재 표시를 찾아 기록판에 적는다.', base: '물건 세 개를 살펴 표시가 있는 수를 기록판에 적는다.', challenge: '모둠 기록을 모아 표시가 없는 물건이 얼마나 되는지 집계해 말한다.' },
        wrap: {
          teacher: '"3분 동안 가방이나 필통 속 물건 세 개의 원산지와 소재 표시를 찾아봐요. 꺼내고 싶지 않은 물건은 꺼내지 않아도 되고, 교사가 준 물건으로 해도 돼요." 타이머를 3분 조사·1분 정리로 맞추게 한 뒤 시작한다. "표시가 없으면 조사 실패"라는 학생에게 "표시가 없다는 것도 기록할 값이에요. 왜 없을까요?"라고 묻는다. 집계할 때 표시가 있는 물건과 없는 물건의 차이를 생애 단계와 잇는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '물건 생애 조사', labels: ['조사', '정리'], timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 }, fields: [{ label: '살펴본 물건', unit: '개', step: 1 }, { label: '원산지 표시 있음', unit: '개', step: 1 }, { label: '소재 표시 있음', unit: '개', step: 1 }] }, prompt: '타이머를 3분 조사·1분 정리 한 번으로 맞추고, 조사한 물건 수를 기록판에 적으세요.', target: { plan: { work: 3, rest: 1, rounds: 1 }, records: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '물건의 생애에서 소비자가 직접 고를 수 있는 단계를 고르세요.', options: ['원료 농장의 물 사용량', '얼마나 오래 쓰고 어떻게 버릴지', '배의 운송 경로'], answer: 1, difficulty: 0.15, explain: '사용과 버림 단계는 우리가 바로 바꿀 수 있고, 살 때의 선택으로 앞 단계에도 영향을 줘요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 물건 생애 조사',
          items: [
            { type: 'table', prompt: '살펴본 물건의 표시를 적으세요.', columns: ['물건', '원산지', '소재', '오래 쓸 방법'], cells: [['', '', '', ''], ['', '', '', '']] },
            { type: 'short', prompt: '조사한 물건 하나를 더 오래 쓰거나 다시 쓰는 방법을 쓰세요.' },
          ],
        },
        notes: '학생 소지품은 원하는 것만 살핀다. 무엇을 가지고 있는지 발표시키지 않는다.',
      }),
      M({
        id: 'wrap.remix', type: 'wrap', title: '저작권 지킨 카드뉴스 한 장',
        method: '저작권 지킨 카드뉴스 만들기', tool: 'collage', minutes: 8,
        levels: { easy: '자유 이용 조각 세 개로 카드뉴스 한 장을 꾸민다.', base: '조각 다섯 개 안팎으로 꾸미고 출처 칸 하나를 채운다(판정은 세 개 이상).', challenge: '출처 칸 두 개를 채우고, 별 조각을 쓰지 않은 까닭을 출구 질문에 답한다.' },
        wrap: {
          teacher: '"오늘 판의 별 조각은 \'출처도 이용 허락도 모르는 그림\'이라고 정해요. 나머지 조각은 자유 이용 표시가 있는 그림이에요." 별을 빼고 조각으로 \'공유 전에 확인하자\' 카드뉴스 한 장을 꾸미게 한다. "인터넷에 있으면 다 써도 되잖아요"라는 학생에게 "그림을 만든 사람이 허락했는지는 어디서 알 수 있을까요?"라고 묻는다. 출처 칸은 활동지에 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, prompt: '별 조각(출처 모르는 그림)은 쓰지 않고 다른 조각 세 개 이상으로 "공유 전에 확인하자" 카드뉴스를 꾸미고 점검하세요.', target: { has: [{ shape: 'star', max: 0 }], pieces: { min: 3 }, selfCheck: ['자유 이용 조각만 썼다', '전하려는 말이 한눈에 보인다', '활동지에 출처 칸을 채웠다'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '다른 사람의 그림을 카드뉴스에 쓸 때 알맞은 것은?', options: ['출처만 적으면 언제나 써도 된다', '이용 허락 표시를 확인하고 출처를 밝힌다', '조금 고쳐 쓰면 내 그림이 된다'], answer: 1, difficulty: 0.15, explain: '출처를 밝히는 것과 함께, 만든 사람이 어떤 이용을 허락했는지 확인해야 해요.' },
            { type: 'short', prompt: '별 조각을 쓰지 않은 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '저작권 지킨 카드뉴스',
          items: [
            { type: 'table', prompt: '카드뉴스에 쓴 자료의 출처 칸을 채우세요(가상 자료).', columns: ['자료', '만든 사람·곳', '이용 허락 표시'], cells: [['그림 1', '', ''], ['그림 2', '', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '다른 사람의 자료를 쓸 때는 ___ 표시를 확인하고 출처를 밝힌다.', answer: '이용 허락' },
          ],
        },
        notes: '교구 조각에는 이용 허락 정보를 담을 수 없어 \'별 조각 = 출처 모르는 그림\'으로 정해 판정한다. 출처는 활동지에 쓴다.',
      }),
    );
  }

  // ======================================================================================================
  // 11-3. 숙의 절차와 협업 갈등 풀기 (11학년 · 관계 형성 및 소통 활동)
  // ======================================================================================================
  {
    const M = MOD('g11-rel', [11]);
    const STEPS = ['안건과 의견을 발표한다', '서로 질문하고 근거를 따진다', '의견을 모아 수정안을 만든다', '수정안으로 결정한다', '소수 의견과 까닭을 기록한다'];
    const RIDE = { text: '가상 모둠 과제 마감 닷새 전. 네 명 가운데 태오는 자료 조사를 맡았지만 단톡방 답이 없다. 리더 시아가 혼자 밤새 정리하고 있다.', who: '시아', motif: 'moon', choices: [
      { id: 'all', text: '시아가 말없이 태오 몫까지 다 한다', result: '과제는 끝나지만 시아가 지쳐 다른 과목을 놓친다.', impact: [{ who: '시아', text: '억울함이 쌓인다', tone: -1 }, { who: '태오', text: '무엇을 놓쳤는지 모른다', tone: 0 }], ending: '말없이 떠안으면 갈등은 사라지지 않고 다음 과제로 미뤄진다.' },
      { id: 'ask', text: '태오에게 따로 연락해 사정을 묻는다', result: '태오는 자료를 어디서 찾을지 몰라 손을 놓고 있었다고 한다.', impact: [{ who: '태오', text: '부끄럽지만 말할 기회가 생긴다', tone: 1 }],
        next: { text: '원인은 \'게으름\'이 아니라 \'방법을 모름\'이었다. 마감까지 닷새.', choices: [
          { id: 'split', text: '조사할 곳 두 곳을 함께 정하고, 사흘 뒤 중간 점검을 잡는다', result: '태오가 사흘 만에 자료 두 개를 올린다.', impact: [{ who: '모둠', text: '일이 다시 나뉜다', tone: 1 }],
            next: { text: '중간 점검 날, 태오 자료 하나가 출처 없는 글이다.', choices: [
              { id: 'together', text: '점검표에 따라 출처 있는 자료로 바꾸는 법을 함께 본다', result: '태오가 다음부터 출처를 먼저 적는다.', impact: [{ who: '태오', text: '맡은 몫을 해낸다', tone: 1 }], ending: '원인을 알고 역할·점검을 다시 세우면 무임승차가 협업으로 바뀐다.' },
              { id: 'blame', text: '단톡방에 "또 대충 했네"라고 쓴다', result: '태오가 다시 말이 없어진다.', impact: [{ who: '모둠', text: '분위기가 얼어붙는다', tone: -1 }], ending: '공개 비난은 고칠 힘보다 숨을 이유를 준다.' }] } },
          { id: 'take', text: '"그럼 됐어, 내가 할게"라며 일을 가져온다', result: '태오는 다시 할 일이 없어진다.', impact: [{ who: '시아', text: '혼자 짐을 진다', tone: -1 }], ending: '대신 해 주면 방법을 배울 기회도 함께 가져간다.' }] } },
      { id: 'report', text: '단톡방에 태오 이름을 걸고 "무임승차"라고 공개한다', result: '태오가 단톡방을 나간다.', impact: [{ who: '태오', text: '모둠에 돌아오기 어려워진다', tone: -1 }, { who: '모둠', text: '할 사람이 하나 준다', tone: -1 }], ending: '혼내기는 원인을 덮고 관계만 끊는다.' }] };
    const RIDE_R = [{ id: 'cause', text: '안 하는 까닭을 먼저 물어야 해결이 보인다' }, { id: 'check', text: '역할과 중간 점검을 다시 정하면 일이 나뉜다' }, { id: 'private', text: '문제는 따로, 차분하게 말한다' }, { id: 'punish', text: '무임승차는 공개적으로 혼내야 고쳐진다', why: '공개 비난은 원인을 덮고 관계를 끊어요.' }, { id: 'alone', text: '잘하는 사람이 다 하는 게 빠르다', why: '혼자 떠안으면 다음 과제에서 같은 일이 되풀이돼요.' }];

    MODS.push(
      M({
        id: 'intro.vote', type: 'intro', title: '51 대 49 그래프의 빈틈',
        method: '다수결 결과 그래프의 빈틈', tool: 'chart', minutes: 6,
        levels: { easy: '51:49 가상 투표 막대를 읽고 이긴 쪽을 고른다.', base: '같은 그래프에서 49표 쪽이 무엇을 잃는지 말한다.', challenge: '다수결만 하지 않고 49표 쪽 의견을 담을 방법(수정안·조건)을 제안한다.' },
        intro: {
          teacher: '"가상 학급 회의에서 \'체육대회 반티를 사자\'가 51 대 49로 정해졌어요. 그럼 끝일까요?" 시연 단추로 이긴 쪽 막대가 골라지는 모습을 보여 준다. "다수결이니 공정하잖아요"라는 말이 나오면 "49표 쪽에는 반티 값이 부담인 친구도 있었다면, 그 까닭은 어디에 기록됐나요?"라고 되묻는다. 다수결은 결정 방법이지만, 결정 전에 의견을 나누고 다듬는 숙의가 놓친 의견을 줄인다고 짚는다.',
          student: '가상 학급 투표 결과 그래프를 보고, 진 쪽 49표의 의견은 어디로 갔을지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '반티 구매 투표(가상)', yLabel: '표', xLabel: '의견', unit: '표', data: [['찬성', 51], ['반대', 49]], question: '많은 표를 받은 쪽은?', choices: ['찬성', '반대'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'two nearly equal paper bar columns on a classroom board, a small paper ballot box, and a speech bubble with a question mark floating over the shorter bar', banner: '49표의 목소리는 어디로?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '투표 수치는 가상이다.',
      }),
      M({
        id: 'intro.team', type: 'intro', title: '모둠 과제 장면의 마음',
        method: '모둠 과제 장면 마음 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 두 개(혼자 다 하는 친구·답이 없는 친구)와 마음을 함께 짝 짓는다.', base: '장면 세 개와 마음을 짝 짓는다.', challenge: '답이 없는 친구가 왜 그럴지 원인을 두 가지 이상 짐작해 말한다.' },
        intro: {
          teacher: '"모둠 과제에서 이런 장면, 본 적 있죠? 각 사람은 어떤 마음일까요?" 시연 단추로 장면과 마음을 짝지어 보인다. "안 하는 애는 그냥 게으른 거죠"라는 말이 나오면 "혹시 무엇을 해야 할지 몰라서, 또는 말 꺼내기 어려워서 그럴 수는 없을까요?"라고 되묻는다. 무임승차에도 원인이 있고, 원인을 알아야 풀 수 있다고 짚는다.',
          student: '가상 모둠 과제 장면마다 그 사람이 느낄 마음을 짝지어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', cards: ['화남', '불안', '부끄러움'], slots: [{ id: 't1', label: '밤새 혼자 자료를 정리하는 리더' }, { id: 't2', label: '맡은 일을 어떻게 할지 몰라 답을 못 하는 친구' }, { id: 't3', label: '발표 날 자기 몫이 없다는 걸 들킨 친구' }] }, sequence: [{ match: { t1: '화남', t2: '불안', t3: '부끄러움' } }] },
          art: { draw: 'four paper students around a group desk, one buried under a stack of papers, one staring at a blank phone screen, two looking at each other unsure, a paper clock showing late night', banner: '모둠 과제, 각자의 마음', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.steps', type: 'activity', title: '숙의 절차 차례',
        method: '숙의 절차 차례 놓기', tool: 'timeline', minutes: 18,
        levels: { easy: '절차 카드 4장(발표·질문·수정안·결정)을 차례로 놓는다.', base: '소수 의견 기록까지 5장을 차례로 놓고, 함정 카드(곧바로 투표)는 남긴다.', challenge: '단계마다 사회자가 할 말 카드를 짝짓는 문항까지 푼다.' },
        activity: {
          title: '숙의 절차 차례', tool: 'timeline',
          teacher: '"숙의는 \'오래 이야기하기\'가 아니라 차례가 있는 대화예요." 첫 문항을 놓은 뒤 "곧바로 투표하기"를 앞에 놓은 학생에게 "발표만 듣고 바로 투표하면 질문할 기회는 언제 생길까요?"라고 묻는다. 소수 의견 기록을 빼는 학생에게 "다음 회의에서 같은 안건이 나오면 49표 쪽의 까닭은 어디서 찾을까요?"라고 되묻는다. 결정은 다수로 해도, 까닭은 모두 남긴다는 점을 짚는다.',
          task: '숙의 절차 카드를 차례로 놓고, 단계마다 사회자의 말을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('가상 학급 회의 "반티 구매" 안건의 숙의 절차를 차례로 놓으세요.', STEPS, { k: 4, traps: ['발표를 듣자마자 바로 투표한다'], d: 0.3, opt: { axis: ['회의 시작', '회의 끝'] } }),
            MATCHQ('숙의 단계마다 사회자가 할 말을 짝지으세요.', [['질문 단계', '"그 의견의 근거를 더 들어 볼까요?"'], ['수정안 단계', '"두 의견을 함께 담을 방법이 있을까요?"'], ['결정 단계', '"수정안으로 표결하겠습니다"'], ['기록 단계', '"반대한 분들의 까닭도 회의록에 남기겠습니다"']], { k: 3, extra: ['"시간 없으니 그냥 정합시다"'], d: 0.35 }),
            ORDERQ('가상 학생회 "축제 부스 수 줄이기" 안건에서 반대 의견이 나온 뒤의 절차를 차례로 놓으세요.', ['반대 의견의 근거를 듣는다', '찬반 양쪽에 질문한다', '"부스 수는 줄이되 동아리 공동 부스 허용" 수정안을 만든다', '수정안으로 표결한다', '남은 반대 의견을 기록한다'], { k: 4, traps: ['반대 의견을 낸 사람에게 다시 생각해 보라고 한다'], d: 0.35, opt: { axis: ['반대 의견', '기록'] }, more: { conclude: '숙의는 듣고 → 따지고 → 다듬고 → 정하고 → 남기는 차례예요. 수정안이 있으면 51 대 49가 더 많은 사람의 합의로 바뀔 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '숙의 절차에서 소수 의견을 기록하는 까닭을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.deliberate', type: 'activity', title: '숙의 회의 해 보기',
        method: '숙의 회의 진행', tool: 'timer', minutes: 18,
        levels: { easy: '회의 단계 카드 3장(발표·질문·결정)을 차례로 놓고 발언 타이머를 맞춘다.', base: '5단계 카드를 놓고, 발언·질문 타이머를 맞춘 뒤 표결 결과와 소수 의견 수를 기록판에 적는다.', challenge: '수정안을 만들어 다시 표결하고 첫 표결과 수정안 표결의 기록을 함께 적는다.' },
        activity: {
          title: '학급 안건 숙의 회의', tool: 'timer',
          teacher: '"오늘 안건은 가상 안건 \'교실 뒤 게시판을 자유 게시판으로 바꾸자\'예요. 교사가 사회를 보고, 단계마다 타이머로 시간을 지켜요." 먼저 단계 카드를 놓아 회의 차례를 정하고, 발언 2분·질문 1분 타이머로 진행한다. 질문 단계에서 "그건 틀렸어"처럼 말하는 학생에게 "그 의견의 근거 가운데 무엇이 궁금한가요?"로 바꿔 묻게 한다. 표결 뒤 반대표를 \'진 표\'가 아니라 \'기록할 의견\'으로 다룬다. 정답 결론은 없고 절차를 지키는 것이 목표라고 밝힌다.',
          task: '숙의 회의 단계를 정하고, 단계마다 타이머를 맞추고, 표결과 소수 의견을 기록판에 남겨요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '오늘 숙의 회의의 단계 카드를 차례로 놓으세요.', toolOptions: { title: '숙의 회의 차례', cards: ['결정한다', '소수 의견을 기록한다', '의견을 발표한다', '수정안을 만든다', '질문하고 근거를 따진다'] }, target: { order: ['의견을 발표한다', '질문하고 근거를 따진다', '수정안을 만든다', '결정한다', '소수 의견을 기록한다'] }, difficulty: 0.25,
              levels: { easy: { prompt: '오늘 숙의 회의의 단계 카드를 차례로 놓으세요(카드 3장).', toolOptions: { cards: ['결정한다', '의견을 발표한다', '질문하고 근거를 따진다'] }, target: { order: ['의견을 발표한다', '질문하고 근거를 따진다', '결정한다'] } } } },
            { prompt: '발언 타이머를 한 사람당 2분 발언, 1분 질문으로 네 사람 차례가 돌게 맞추세요.', toolOptions: { title: '발언·질문 타이머', labels: ['발언', '질문'], timeUnit: 'min', plan: { work: 1, rest: 1, rounds: 1 }, showTotal: true }, target: { plan: { work: 2, rest: 1, rounds: 4 } }, difficulty: 0.25 },
            { prompt: '첫 표결 결과(찬성·반대·기권 수)와 기록한 소수 의견 수를 기록판에 적으세요.', toolOptions: { title: '첫 표결 기록', fields: [{ label: '찬성', unit: '표', step: 1 }, { label: '반대', unit: '표', step: 1 }, { label: '기권', unit: '표', step: 1 }, { label: '기록한 소수 의견', unit: '개', step: 1 }] }, target: { records: true }, difficulty: 0.2,
              levels: { challenge: { prompt: '첫 표결과 수정안 표결의 찬성·반대 수를 함께 기록판에 적으세요(수정안 표결).', toolOptions: { title: '첫 표결과 수정안 표결', fields: [{ label: '첫 표결 찬성', unit: '표', step: 1 }, { label: '첫 표결 반대', unit: '표', step: 1 }, { label: '수정안 찬성', unit: '표', step: 1 }, { label: '수정안 반대', unit: '표', step: 1 }] }, target: { records: true } } } },
            { prompt: '회의가 숙의 절차를 지켰는지 스스로 점검하세요.', toolOptions: { title: '숙의 점검' }, target: { selfCheck: ['발언 시간을 모두 같게 지켰다', '질문은 사람이 아니라 근거를 향했다', '소수 의견의 까닭을 기록했다'] }, difficulty: 0.15,
              conclude: '숙의 회의는 시간을 같게, 질문은 근거에, 반대는 기록으로 — 그래야 진 쪽도 다음 회의에 다시 와요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오늘 회의의 결정과 소수 의견을 회의록에 쓰세요.', columns: ['결정', '소수 의견', '소수 의견의 까닭'], cells: [['', '', '']] }] },
        notes: '안건은 가상 안건이며 결론을 정해 두지 않는다. 표결 수는 학급마다 다르므로 기록 칸은 모두 채웠는지만 본다. 회의록에 학생 이름을 쓰지 않는다.',
      }),
      M({
        id: 'activity.cause', type: 'activity', title: '무임승차 갈림길',
        method: '협업 갈등 원인 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(혼자 다 하기·묻기·공개하기)에서 고르고 결과를 본 뒤 근거를 고른다.', base: '두 번째 갈림길(원인을 안 뒤)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(중간 점검 날)까지 가서 근거 세 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '답이 없는 모둠원', tool: 'dilemma',
          teacher: '"태오가 단톡방에 답이 없어요. 시아는 어떻게 할까요?" 선택마다 태오·시아·모둠에 간 영향을 나눠 읽는다. "무임승차는 공개적으로 혼내야 안 한다"는 학생에게 "공개한 뒤 장면에서 모둠의 일손은 늘었나요, 줄었나요?"라고 묻는다. 둘째 갈림길에서 "그럼 내가 할게"를 고른 학생에게 대신 해 주기가 왜 해결이 아닌지 묻는다. 원인 → 역할 다시 나누기 → 중간 점검이 갈등 풀기의 뼈대라고 짚는다.',
          task: '모둠 과제 갈림길을 따라가며 원인과 해결을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('시아가 원인을 찾아 협업으로 푸는 길을 가고 근거를 고르세요.', RIDE, [['ask', 'split', 'together']], RIDE_R, ['cause', 'check'], { d: 0.4, hardReasons: ['cause', 'check', 'private'] }),
            EXPLOREQ('다른 길도 끝까지 가 보고, 모둠과 태오에게 간 결과를 견주세요.', RIDE, RIDE_R, ['혼자 다 한 길의 결과를 확인했다', '공개 비난한 길의 결과를 확인했다'], { d: 0.35 }),
            DILQ('역할을 두고 다투는 가상 모둠에서 갈등을 푸는 길을 가고 근거를 고르세요.', { text: '발표 역할을 두고 두 사람이 모두 하겠다며 다툰다. 아무도 보고서 정리는 하겠다고 하지 않는다.', who: '모둠', motif: 'storm', choices: [
              { id: 'rule', text: '각자 하고 싶은 까닭과 잘하는 점을 말하고, 역할 기준을 먼저 정한다', result: '발표는 내용을 가장 잘 아는 사람, 정리는 꼼꼼한 사람이 맡기로 한다.', impact: [{ who: '모둠', text: '역할이 기준으로 나뉜다', tone: 1 }],
                next: { text: '발표를 못 하게 된 한 사람이 서운해한다.', choices: [
                  { id: 'swap', text: '다음 과제에서는 역할을 바꾸기로 약속서에 적는다', result: '서운함이 풀리고 정리를 맡는다.', impact: [{ who: '그 사람', text: '다음 기회가 보인다', tone: 1 }], ending: '기준과 다음 약속이 있으면 역할 다툼이 공정한 나누기가 된다.' },
                  { id: 'ignore', text: '정해졌으니 따르라고 한다', result: '그 사람이 정리를 대충 한다.', impact: [{ who: '모둠', text: '보고서 질이 떨어진다', tone: -1 }], ending: '서운함을 덮으면 일의 질로 돌아온다.' }] } },
              { id: 'rps', text: '가위바위보로 정한다', result: '진 사람이 끝까지 불만을 말한다.', impact: [{ who: '모둠', text: '다툼이 다른 일로 옮겨 간다', tone: -1 }], ending: '운으로 정하면 까닭이 남지 않아 다툼이 끝나지 않는다.' }] },
              [['rule', 'swap']], [{ id: 'standard', text: '역할은 기준을 먼저 정하고 나눈다' }, { id: 'next', text: '다음 기회를 약속하면 서운함이 준다' }, { id: 'luck', text: '운으로 정하는 것이 가장 공정하다', why: '운으로 정하면 왜 그렇게 나눴는지 설명할 수 없어요.' }], ['standard', 'next'], { d: 0.35, more: { conclude: '협업 갈등은 사람 탓이 아니라 역할·기준·점검의 문제로 다루면 풀려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '태오 같은 모둠원에게 처음 건넬 말을 비난 없이 한 문장으로 쓰세요.' }] },
        notes: '모든 장면은 가상 모둠이다. 실제 학급의 특정 학생을 떠올려 말하게 하지 않는다.',
      }),
      M({
        id: 'activity.contract', type: 'activity', title: '모둠 역할 약속서',
        method: '모둠 역할 약속서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '역할·마감 두 요소를 문장 틀로 쓴다.', base: '역할·마감·중간 점검·갈등 시 대화 방법 네 요소를 담아 쓰고 기준표로 점검한다.', challenge: '약속을 어겼을 때의 절차까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '모둠 역할 약속서', tool: 'rubric-writing',
          teacher: '"약속서는 벌칙표가 아니에요. 무엇을 누가 언제까지 하고, 언제 함께 확인하고, 막히면 어떻게 말할지를 적는 거예요." 가상 모둠(발표 과제, 4명, 2주)의 약속서를 쓰게 한다. "안 하면 벌금 만 원"처럼 쓰는 학생에게 "벌금이 태오처럼 방법을 몰라 멈춘 친구를 도와줄까요?"라고 묻는다. 어겼을 때의 절차는 \'따로 묻기 → 역할 조정 → 선생님과 상의\'처럼 단계로 쓰게 한다.',
          task: '가상 모둠의 역할 약속서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 모둠(발표 과제·4명·2주)의 역할과 마감을 약속서로 쓰고 점검하세요.', '역할과 마감을 담은 약속서 첫 부분을 2~4문장으로 쓰세요.', ['역할마다 맡은 사람(가명)을 썼다', '역할마다 마감 날짜를 썼다', '역할이 겹치거나 빈 곳이 없다'], { min: 40, max: 300, starter: '자료 조사는 ~가 ~일까지, 정리는 ~가 ~일까지 맡는다.', sample: '자료 조사는 가와 나가 7일까지 두 곳씩 맡는다. 보고서 정리는 다가 10일까지 맡는다. 발표 연습 자료는 라가 12일까지 만든다.', d: 0.3 }),
            RWQ('같은 모둠의 중간 점검과 갈등 시 대화 방법을 약속서에 쓰고 점검하세요.', '중간 점검 일정과 막혔을 때 대화하는 방법을 2~4문장으로 쓰세요.', ['중간 점검 날짜와 확인할 것을 썼다', '막혔을 때 먼저 말하는 방법을 썼다', '비난하지 않는 대화 방법을 썼다'], { min: 40, max: 300, starter: '우리는 ~일에 중간 점검을 하고 ~를 확인한다. 막히면 ~', sample: '우리는 6일에 중간 점검을 하고 각자 자료가 출처와 함께 올라왔는지 확인한다. 막히면 그날 안에 단톡방에 "도움이 필요해"라고 쓴다. 늦어진 사람에게는 따로 사정을 먼저 묻는다.', plus: '약속을 어겼을 때의 절차를 단계로 썼다', d: 0.4 }),
            RWQ('약속서를 읽은 새 모둠원이 무엇을 할지 알 수 있게 한 문단으로 다듬어 쓰고 점검하세요.', '역할·마감·중간 점검·대화 방법을 모두 담아 약속서를 한 문단으로 쓰세요.', ['역할과 마감을 썼다', '중간 점검을 썼다', '갈등 때 대화 방법을 썼다', '벌칙이 아니라 도움과 조정을 썼다'], { min: 80, max: 400, must: [['점검']], plus: '약속을 어겼을 때의 절차를 단계로 썼다', d: 0.45, more: { conclude: '좋은 약속서는 일을 나누고, 확인할 날을 정하고, 막혔을 때 말할 길을 열어 두어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '약속서에 넣은 내용 가운데 무임승차를 가장 잘 막을 것 하나와 그 까닭을 쓰세요.' }] },
        notes: '약속서의 이름 칸은 가·나·다·라 같은 가명으로 쓰게 한다.',
      }),

      M({
        id: 'wrap.minutes', type: 'wrap', title: '소수 의견까지 적는 회의록',
        method: '소수 의견 기록 연습', tool: 'story', minutes: 8,
        levels: { easy: '교사가 회의록 빈칸 두 칸을 함께 채우고 나머지 두 칸을 학생이 채운다.', base: '회의록 빈칸 네 칸(결정·찬성 까닭·소수 의견·소수 의견의 까닭)을 채운다.', challenge: '소수 의견의 까닭을 다음 회의에서 어떻게 다룰지 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"회의록에는 무엇이 정해졌는지와 함께, 누가 왜 반대했는지도 남아야 해요." 반티 회의를 떠올리며 회의록 말풍선 빈칸을 채우게 한다. "반대 의견은 졌으니 안 적어도 된다"고 생각하는 학생에게 "다음 학기 반티 회의에서 \'값이 부담\'이라는 까닭을 아무도 모르면 어떻게 될까요?"라고 묻는다. 이름 대신 \'반대 의견\'으로 적는다는 것도 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '가상 학급 회의록', slots: [{ id: 'd', who: '서기', label: '결정: ___' }, { id: 'y', who: '서기', label: '찬성 까닭: ___' }, { id: 'n', who: '서기', label: '소수 의견: ___' }, { id: 'w', who: '서기', label: '소수 의견 까닭: ___' }], cards: ['반티를 사되 값은 2만 원 안으로 한다', '반 단합에 도움이 된다', '반티를 사지 말자', '값이 부담되는 친구가 있다', '반대한 친구는 다음에 따르기로 했다'] }, prompt: '회의록 빈칸에 알맞은 카드를 넣으세요.', target: { fill: { d: '반티를 사되 값은 2만 원 안으로 한다', y: '반 단합에 도움이 된다', n: '반티를 사지 말자', w: '값이 부담되는 친구가 있다' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '회의록에 소수 의견을 적는 까닭으로 가장 알맞은 것은?', options: ['반대한 사람을 나중에 설득하려고', '다음 결정 때 그 까닭을 다시 살피려고', '누가 반대했는지 알려 주려고'], answer: 1, difficulty: 0.15, explain: '소수 의견의 까닭은 다음 결정과 수정안의 재료가 돼요. 이름이 아니라 까닭을 남겨요.' },
            { type: 'short', prompt: '다음 회의에서 소수 의견의 까닭을 어떻게 다룰지 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '소수 의견까지 적는 회의록',
          items: [
            { type: 'table', prompt: '가상 안건 "자유 게시판" 회의록을 쓰세요.', columns: ['결정', '찬성 까닭', '소수 의견', '소수 의견 까닭'], cells: [['', '', '', '']] },
            { type: 'short', prompt: '회의록에 이름을 쓰지 않고 의견만 적는 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.midcheck', type: 'wrap', title: '모둠 중간 점검 회의',
        method: '모둠 중간 점검 회의', tool: 'timer', minutes: 8,
        levels: { easy: '약속서의 한 항목(역할 진행)만 함께 점검한다.', base: '네 항목(역할·마감·자료 출처·막힌 곳)을 점검하고 진행률을 기록판에 적는다.', challenge: '막힌 곳의 조정안을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"5분 동안 가상 모둠이 되어 약속서로 중간 점검을 해 봐요." 타이머를 5분 점검·1분 정리로 맞추고, 항목을 하나씩 소리 내어 확인하게 한다. "다 잘되고 있어요"로 끝내려는 모둠에게 "가장 늦어진 일 하나만 꼽는다면 무엇인가요?"라고 묻는다. 점검은 잘못을 찾는 시간이 아니라 일을 다시 나누는 시간이라고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '중간 점검 회의', labels: ['점검', '정리'], timeUnit: 'min', plan: { work: 3, rest: 0, rounds: 1 }, fields: [{ label: '끝난 역할', unit: '개', step: 1 }, { label: '진행 중인 역할', unit: '개', step: 1 }], safety: ['역할마다 진행을 말했다', '마감을 다시 확인했다', '자료 출처를 확인했다', '막힌 곳을 하나 찾았다'] }, prompt: '타이머를 5분 점검·1분 정리로 맞추고, 네 항목을 확인한 뒤 역할 진행 수를 적으세요.', target: { plan: { work: 5, rest: 1 }, safety: true, records: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '중간 점검에서 한 사람의 일이 늦어졌을 때 먼저 할 일은?', options: ['점검표에 "지각"이라고 적는다', '무엇이 막혔는지 묻고 역할을 조정한다', '마감 날까지 기다려 본다'], answer: 1, difficulty: 0.15, explain: '늦어진 까닭을 알아야 도울 방법과 조정안이 나와요.' },
            { type: 'short', prompt: '막힌 곳 하나에 대한 조정안을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '모둠 중간 점검표',
          items: [
            { type: 'table', prompt: '가상 모둠의 중간 점검을 적으세요.', columns: ['역할', '진행', '막힌 곳', '조정안'], cells: [['자료 조사', '', '', ''], ['정리', '', '', ''], ['발표 준비', '', '', '']] },
            { type: 'check', prompt: '중간 점검에서 지킨 것에 표시하세요.', options: ['사람이 아니라 일을 이야기했다', '늦어진 까닭을 먼저 물었다', '다음 점검 날을 정했다'] },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11-4. 학생회 예산과 정책 제안서 (11학년 · 공동체 자치활동)
  // ======================================================================================================
  {
    const M = MOD('g11-self', [11]);
    const PIE = [['축제·행사', 40], ['동아리 지원', 25], ['학급 비품', 15], ['캠페인', 10], ['예비비', 10]];
    const TOWN = { title: '가상 동네 지도', grid: [6, 4], places: [{ name: '가상 고등학교', icon: 'school', at: [1, 1] }, { name: '신호등 없는 횡단보도', icon: 'dot', at: [2, 2] }, { name: '불 꺼진 공원 산책로', icon: 'park', at: [4, 1] }, { name: '버스 정류장(지붕 없음)', icon: 'bus', at: [0, 3] }, { name: '도서관', icon: 'library', at: [5, 3] }, { name: '시장', icon: 'market', at: [3, 0] }] };
    const PROJ = [
      { id: 'safe', text: '등굣길 안전 캠페인(필수 사업)', price: 300000 },
      { id: 'club', text: '동아리 발표회 지원', price: 400000 },
      { id: 'fest', text: '축제 무대 장식', price: 500000 },
      { id: 'mat', text: '학급 공용 우산·충전기', price: 200000 },
      { id: 'goods', text: '학생회 임원 단체 기념품', price: 250000 },
    ];
    const OPEN = { text: '가상 고등학교 학생회 회계 지우는 축제 뒤 집행 내역을 정리했다. 장식비가 계획보다 20만 원 넘었다. 임원 한 명이 "괜히 공개해서 말 나오게 하지 말자"고 한다.', who: '지우', motif: 'house', choices: [
      { id: 'hide', text: '총액만 공개하고 세부 내역은 감춘다', result: '게시판에 "그래서 어디에 썼냐"는 질문이 이어진다.', impact: [{ who: '학생들', text: '학생회를 믿기 어려워진다', tone: -1 }],
        next: { text: '한 학급이 정식으로 세부 내역 공개를 요청했다.', choices: [
          { id: 'late', text: '그제야 세부 내역을 공개한다', result: '내역은 문제없었지만 "숨기려 했다"는 말이 남는다.', impact: [{ who: '학생회', text: '신뢰를 되찾는 데 오래 걸린다', tone: -1 }], ending: '늦은 공개는 내용보다 감춘 사실로 기억된다.' },
          { id: 'refuse', text: '임원만 알면 된다며 거절한다', result: '다음 선거에서 예산 공개가 가장 큰 쟁점이 된다.', impact: [{ who: '학생들', text: '자치에서 멀어진다', tone: -1 }], ending: '예산은 학생 모두의 것이라 감추면 자치가 무너진다.' }] } },
      { id: 'all', text: '세부 내역과 초과 까닭을 함께 공개한다', result: '"비가 와서 천막을 더 빌렸다"는 설명이 함께 실린다.', impact: [{ who: '학생들', text: '까닭을 알고 질문한다', tone: 1 }],
        next: { text: '공개 뒤 "초과분은 어디서 메웠냐"는 질문이 들어왔다.', choices: [
          { id: 'answer', text: '예비비에서 메운 기록과 다음 행사 예산 조정안을 답한다', result: '질문한 학생이 다음 회의에 의견을 내러 온다.', impact: [{ who: '학생회', text: '믿음이 커진다', tone: 1 }],
            next: { text: '다음 학기 예산 회의에서 예비비를 늘리자는 안이 나왔다.', choices: [
              { id: 'rule', text: '예비비 쓰임과 공개 시기를 규칙으로 정한다', result: '매달 집행 내역을 게시하는 규칙이 생긴다.', impact: [{ who: '학생들', text: '언제든 확인할 수 있다', tone: 1 }], ending: '기록 → 공개 → 질문 → 규칙으로 이어지면 투명성이 제도가 된다.' },
              { id: 'leave', text: '이번만 그런 것이니 그대로 둔다', result: '다음 행사에서 같은 혼란이 생긴다.', impact: [{ who: '학생회', text: '같은 질문을 또 받는다', tone: 0 }], ending: '한 번의 공개로 끝내면 다음 혼란을 막지 못한다.' }] } },
          { id: 'skip', text: '"공개했으니 됐다"며 답하지 않는다', result: '질문이 소문으로 바뀐다.', impact: [{ who: '학생들', text: '공개의 의미가 줄어든다', tone: -1 }], ending: '공개는 질문에 답할 때 완성된다.' }] } },
      { id: 'fix', text: '장부를 계획대로 고쳐 적는다', result: '숫자가 영수증과 맞지 않는다.', impact: [{ who: '학생회', text: '더 큰 문제가 된다', tone: -1 }], ending: '기록을 고치면 투명성이 아니라 신뢰 전체가 무너진다.' }] };
    const OPEN_R = [{ id: 'ours', text: '학생회 예산은 학생 모두의 돈이다' }, { id: 'reason', text: '초과도 까닭과 함께 공개하면 믿음이 생긴다' }, { id: 'rule', text: '공개 시기와 방법을 규칙으로 정해야 이어진다' }, { id: 'officers', text: '예산은 임원만 알면 된다', why: '예산을 쓰는 사람과 내는 사람이 다를수록 공개가 필요해요.' }, { id: 'quiet', text: '말이 나오지 않게 감추는 것이 낫다', why: '감춘 사실이 알려지면 내용보다 더 큰 불신이 생겨요.' }];
    const PSTEPS = ['문제를 발견한다', '자료를 조사한다', '의견을 모은다', '대안을 견준다', '제안서를 쓴다', '제출하고 결과를 확인한다'];

    MODS.push(
      M({
        id: 'intro.budget', type: 'intro', title: '학생회 예산 원그래프',
        method: '예산 배분 원그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '비중이 큰 세 항목(축제·동아리·비품)만 함께 읽는다.', base: '다섯 항목을 모두 읽고 가장 큰 항목을 고른다.', challenge: '우리라면 어느 항목의 비중을 바꿀지, 그 기준을 말한다.' },
        intro: {
          teacher: '"가상 고등학교 학생회의 한 해 예산이에요. 어디에 가장 많이 썼나요?" 시연 단추로 가장 큰 조각을 고르는 모습을 보인다. "축제가 제일 크니까 그게 제일 중요한 거죠"라는 말이 나오면 "비중이 크다는 것과 우선순위가 높다는 것은 같을까요? 필수 사업은 어디에 있나요?"라고 되묻는다. 오늘은 예산의 우선순위 기준과, 쓴 돈을 공개하는 방법을 다룬다고 밝힌다.',
          student: '가상 학생회 예산 원그래프에서 가장 큰 항목을 찾고, 그 비중이 알맞은지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '가상 학생회 예산 비중(%)', data: PIE, question: '가장 큰 비중은?', choices: PIE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a large paper pie chart on a student council notice board, slices cut from pastel paper, a paper calculator and a ledger book beside it', banner: '우리 예산, 어디에 썼을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '예산 비중은 가상이다.',
      }),
      M({
        id: 'intro.local', type: 'intro', title: '동네 문제 자리 찾기',
        method: '지역 문제 지도 표시', tool: 'map', minutes: 6,
        levels: { easy: '교사가 문제 장소 한 곳(신호등 없는 횡단보도)에 핀을 꽂아 보인다.', base: '학생들이 문제 장소 세 곳을 말하고 교사가 차례로 핀을 옮긴다.', challenge: '문제 장소를 나타낼 범례(안전·편의·환경)를 정해 말한다.' },
        intro: {
          teacher: '"가상 동네 지도예요. 등하굣길에 불편하거나 위험한 곳은 어디일까요?" 시연 단추로 신호등 없는 횡단보도에 핀이 꽂히는 모습을 보여 주고, 학생들이 다른 장소를 말하면 핀을 옮겨 본다. "이런 건 어른들이 알아서 고치잖아요"라는 말이 나오면 "학생이 매일 지나는 길을 가장 잘 아는 사람은 누구일까요?"라고 되묻는다. 지역 사회 연계 자치활동으로 정책 제안서를 만들 수 있다고 밝힌다.',
          student: '가상 동네 지도에서 등하굣길에 불편하거나 위험해 보이는 곳을 찾아보세요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '신호등 없는 횡단보도' }] },
          art: { draw: 'a paper town map with a school, a crosswalk without traffic lights, a dark park path and a bus stop without a roof, red paper pins marking problem spots', banner: '우리 동네, 바꿀 곳은?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '지도는 가상 동네다. 실제 지역 이름을 쓰지 않는다.',
      }),

      M({
        id: 'activity.allocate', type: 'activity', title: '학생회 예산 편성',
        method: '예산 편성 실습', tool: 'economy', minutes: 18,
        levels: { easy: '사업 셋 가운데 필수 사업을 넣어 예산 안에서 고른다.', base: '사업 다섯 가운데 필수 사업을 넣고 우선순위에 맞게 예산 100만 원 안에서 고른다.', challenge: '예산이 줄어든 조건에서 다시 편성하고 활동지에 근거를 기록한다.' },
        activity: {
          title: '사업 우선순위 편성', tool: 'economy',
          teacher: '"가상 학생회 2학기 예산은 100만 원이에요. 우선순위 기준은 셋: 모든 학생에게 닿는가, 안전과 관련 있는가, 다른 돈으로 대신할 수 없는가." 칠판에 기준을 적고 고를 때마다 "이 사업은 기준 몇 개에 맞나요?"라고 묻는다. 임원 기념품을 넣는 학생에게 "이 사업은 모든 학생에게 닿나요?"라고 되묻는다. 정답 편성은 여럿일 수 있고, 근거를 말할 수 있으면 된다고 밝힌다.',
          task: '가상 예산 막대 안에서 우선순위 기준에 맞게 사업을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '예산 100만 원. 필수 사업(등굣길 안전 캠페인)을 넣고, 모든 학생에게 닿지 않는 임원 기념품은 빼고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: PROJ }, target: { budget: { must: ['safe'], not: ['goods'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '예산 100만 원. 사업 셋 가운데 필수 사업(등굣길 안전 캠페인)을 넣어 예산 안에서 고르세요.', toolOptions: { items: PROJ.slice(0, 3) }, target: { budget: { must: ['safe'] } } } } },
            { prompt: '예산이 70만 원으로 줄었어요. 필수 사업은 지키고, 임원 기념품은 빼고 두 사업만 고르세요.', toolOptions: { mode: 'budget', budget: 700000, items: PROJ }, target: { budget: { must: ['safe'], not: ['goods'], count: 2 } }, difficulty: 0.35 },
            { prompt: '학생 설문에서 "비 오는 날 우산이 없다"는 의견이 가장 많았어요. 예산 100만 원 안에서 필수 사업과 공용 우산·충전기를 함께 넣어 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: PROJ }, target: { budget: { must: ['safe', 'mat'], not: ['goods'] } }, difficulty: 0.35,
              conclude: '예산 편성은 가치의 순서예요. 필수 사업을 먼저 지키고, 학생 의견을 근거로 넣고, 넣은 까닭을 기록해 두어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 편성의 근거를 기록하세요.', columns: ['넣은 사업', '맞는 기준', '뺀 사업과 까닭'], cells: [['', '', ''], ['', '', '']] }] },
        notes: '사업과 금액은 수업용 가상 예시다.',
      }),
      M({
        id: 'activity.transparency', type: 'activity', title: '집행 내역 공개 갈림길',
        method: '투명성 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(감추기·공개·고쳐 적기)에서 고르고 결과를 본 뒤 근거를 고른다.', base: '두 번째 갈림길(공개 뒤 질문)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(다음 학기 규칙)까지 가서 근거 세 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '예산 초과 공개 갈림길', tool: 'dilemma',
          teacher: '"장식비가 20만 원 넘었어요. 공개하면 말이 나올 텐데, 지우는 어떻게 할까요?" 선택마다 학생들과 학생회에 간 영향을 읽게 한다. "문제가 없으면 굳이 공개할 필요 없다"는 학생에게 "문제가 없는지 학생들은 무엇으로 알 수 있나요?"라고 묻는다. 장부를 고쳐 적는 길을 고른 학생에게는 그 길이 왜 가장 큰 문제가 되는지 묻는다. 투명성은 한 번의 공개가 아니라 기록·공개·답변·규칙으로 이어진다는 점을 짚는다.',
          task: '학생회 집행 내역 공개 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지우가 집행 내역의 투명성을 지키는 길을 가고 근거를 고르세요.', OPEN, [['all', 'answer', 'rule']], OPEN_R, ['ours', 'reason'], { d: 0.4, hardReasons: ['ours', 'reason', 'rule'] }),
            EXPLOREQ('감춘 길과 고쳐 적은 길도 끝까지 가 보고 결과를 견주세요.', OPEN, OPEN_R, ['총액만 공개한 길의 결과를 확인했다', '장부를 고친 길의 결과를 확인했다'], { d: 0.35 }),
            DILQ('동아리 지원금 배분 회의 내용을 공개할지 정하는 길을 가고 근거를 고르세요.', { text: '동아리 지원금 배분 회의에서 한 동아리가 많이 받았다. 회의록을 공개하면 다른 동아리가 서운해할 수 있다.', who: '학생회', motif: 'house', choices: [
              { id: 'pub', text: '배분 기준과 회의록을 함께 공개한다', result: '서운하다는 동아리가 기준표를 보고 다음 신청을 준비한다.', impact: [{ who: '동아리들', text: '기준을 알고 준비한다', tone: 1 }],
                next: { text: '한 동아리가 기준 하나가 불공정하다고 의견을 냈다.', choices: [
                  { id: 'review', text: '다음 회의 안건으로 올려 기준을 다시 논의한다', result: '기준이 한 항목 고쳐진다.', impact: [{ who: '학생회', text: '기준이 더 단단해진다', tone: 1 }], ending: '공개는 기준을 고칠 기회까지 준다.' },
                  { id: 'deny', text: '이미 정한 것이라며 받지 않는다', result: '불만이 쌓인다.', impact: [{ who: '동아리들', text: '참여할 이유가 준다', tone: -1 }], ending: '공개해 놓고 의견을 막으면 반쪽 투명성이 된다.' }] } },
              { id: 'secret', text: '금액만 알리고 회의록은 비공개로 한다', result: '"친한 동아리만 챙겼다"는 소문이 돈다.', impact: [{ who: '학생회', text: '의심을 받는다', tone: -1 }], ending: '기준이 보이지 않으면 결정이 사람 탓으로 읽힌다.' }] },
              [['pub', 'review']], [{ id: 'standard', text: '배분 기준을 함께 공개해야 결정을 이해한다' }, { id: 'voice', text: '공개 뒤 의견을 받아 기준을 고칠 수 있다' }, { id: 'feel', text: '서운함을 막으려면 감추는 것이 낫다', why: '감추면 서운함이 의심으로 커져요.' }], ['standard', 'voice'], { d: 0.35, more: { conclude: '투명성은 쓴 돈과 정한 까닭을 모두에게 보이고, 질문에 답하고, 기준을 고칠 길을 여는 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 학생회가 집행 내역을 공개할 때 꼭 넣어야 할 것 세 가지를 쓰세요.' }] },
      }),
      M({
        id: 'activity.steps', type: 'activity', title: '정책 제안 절차',
        method: '정책 제안 절차 놓기', tool: 'timeline', minutes: 18,
        levels: { easy: '절차 카드 4장(문제 발견~대안 비교)을 차례로 놓는다.', base: '제출·결과 확인까지 6장을 놓고, 함정 카드(조사 없이 바로 제출)는 남긴다.', challenge: '단계마다 나올 산출물 카드를 짝짓는 문항까지 푼다.' },
        activity: {
          title: '정책 제안 절차', tool: 'timeline',
          teacher: '"가상 동네의 \'신호등 없는 횡단보도\' 문제로 정책 제안을 한다면 어떤 차례로 할까요?" 첫 문항을 놓은 뒤 "제안서부터 쓰면 빠르잖아요"라는 학생에게 "자료와 의견 없이 쓴 제안서를 받은 기관은 무엇을 근거로 판단할까요?"라고 묻는다. 결과 확인을 빼는 학생에게, 제출한 뒤 답을 확인하고 다시 제안하는 것까지가 절차라고 짚는다. 제안의 결론은 정해 두지 않는다.',
          task: '정책 제안 절차 카드를 차례로 놓고, 단계마다 나올 산출물을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('가상 동네 "신호등 없는 횡단보도" 문제의 정책 제안 절차를 차례로 놓으세요.', PSTEPS, { k: 4, traps: ['조사 없이 바로 제안서를 낸다'], d: 0.3, opt: { axis: ['문제 발견', '결과 확인'] } }),
            MATCHQ('정책 제안 단계마다 나올 산출물을 짝지으세요.', [['자료를 조사한다', '등하교 시간 통행량 기록표'], ['의견을 모은다', '학생·주민 설문 결과'], ['대안을 견준다', '대안별 비용·효과 비교표'], ['제출하고 결과를 확인한다', '기관 답변과 후속 계획']], { k: 3, extra: ['학생회 임원 사진'], d: 0.35 }),
            ORDERQ('가상 동네 "지붕 없는 버스 정류장" 제안에서, 제출 뒤 답변이 "예산 부족"으로 온 다음의 차례를 놓으세요.', ['답변의 까닭을 학생들에게 알린다', '비용이 적은 대안을 다시 견준다', '수정 제안서를 쓴다', '다시 제출하고 결과를 확인한다'], { k: 3, traps: ['답변이 나쁘니 제안을 그만둔다'], d: 0.35, opt: { axis: ['답변', '다시 제출'] }, more: { conclude: '정책 제안은 문제 → 자료 → 의견 → 대안 → 제안서 → 결과 확인, 그리고 답변에 따라 다시 고치는 되풀이예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '정책 제안 절차에서 가장 빠뜨리기 쉬운 단계와 그 단계가 필요한 까닭을 쓰세요.' }] },
        notes: '제안 대상 기관은 \'가상 구청\'처럼 쓰고 실제 기관·지역 이름을 쓰지 않는다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '정책 제안서 쓰기',
        method: '정책 제안서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문제와 근거 자료 두 요소를 문장 틀로 쓴다.', base: '문제·근거 자료·대안 비교·기대 효과 네 요소를 담아 쓰고 기준표로 점검한다.', challenge: '예상되는 반론과 답까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '가상 구청 제안서', tool: 'rubric-writing',
          teacher: '"제안서는 \'고쳐 주세요\'가 아니라 \'이런 문제가 있고, 근거는 이것이고, 이런 대안들 가운데 이것이 낫다\'로 써야 해요." 가상 자료(등교 시간 횡단보도 통행 학생 수·설문 결과)를 칠판에 적고 쓰게 한다. "위험하니까 신호등을 꼭 달아 주세요"처럼 근거 없이 쓴 학생에게 "기관이 \'얼마나 위험한가요?\'라고 물으면 무엇을 보여 줄까요?"라고 묻는다. 결론은 학생마다 달라도 되고, 근거와 대안 비교가 있는지를 본다고 밝힌다.',
          task: '가상 동네 문제 하나로 정책 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 동네 "신호등 없는 횡단보도" 문제와 근거 자료를 제안서 첫 부분으로 쓰고 점검하세요.', '문제와 근거 자료를 2~3문장으로 쓰세요(가상 자료: 등교 시간 통행 학생 약 300명, 설문 응답의 70%가 위험하다고 답함).', ['문제가 무엇인지 썼다', '가상 자료의 수치를 근거로 썼다', '누가 영향을 받는지 썼다'], { min: 40, max: 300, must: [['명', '%']], starter: '가상 동네 ~에는 ~ 문제가 있다. 근거는 ~이다.', sample: '가상 동네 학교 앞 횡단보도에는 신호등이 없어 등교 시간에 학생과 차가 뒤섞이는 문제가 있다. 등교 시간에 약 300명이 이곳을 건너고, 설문 응답의 70%가 위험하다고 답했다.', d: 0.35 }),
            RWQ('같은 문제의 대안 비교와 기대 효과를 쓰고 점검하세요.', '대안 두 가지(예: 신호등 설치·등교 시간 교통 지도)를 견주고 고른 대안의 기대 효과를 2~4문장으로 쓰세요.', ['대안을 두 가지 이상 썼다', '대안마다 장단점을 견주었다', '고른 대안의 기대 효과를 썼다'], { min: 60, max: 350, plus: '예상되는 반론과 그에 대한 답을 썼다', d: 0.4 }),
            RWQ('가상 동네 "불 꺼진 공원 산책로" 문제로 제안서를 한 문단으로 쓰고 점검하세요.', '문제·근거·대안 비교·기대 효과를 모두 담아 한 문단으로 쓰세요(근거는 가상 자료로 지어 쓰되 "가상"이라고 밝혀요).', ['문제를 썼다', '근거 자료를 썼다', '대안을 견주었다', '기대 효과를 썼다'], { min: 100, max: 450, must: [['가상']], plus: '예상되는 반론과 그에 대한 답을 썼다', d: 0.45, more: { conclude: '좋은 제안서는 의견이 아니라 근거·대안 비교·기대 효과로 설득해요. 결론은 달라도 이 짜임은 같아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 제안서에 기관이 던질 질문 하나와 그 답을 쓰세요.' }] },
        notes: '통행 수·설문 비율은 수업용 가상 자료다. 제안의 결론을 채점하지 않고 짜임만 점검한다.',
      }),

      M({
        id: 'wrap.report', type: 'wrap', title: '집행 공개 게시물 점검',
        method: '예산 집행 공개 게시물 만들기', tool: 'timer', minutes: 8,
        levels: { easy: '공개 게시물에 넣을 항목 세 가지(사업·금액·날짜)를 점검한다.', base: '다섯 가지(사업·금액·날짜·영수증 확인·초과 까닭)를 점검하고 게시 차례를 놓는다.', challenge: '게시물에 질문 받는 방법(질문함·답변 날짜)을 덧붙여 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"가상 축제 집행 내역을 게시판에 붙일 공개 게시물로 정리해요. 4분 동안 모둠이 점검 칸을 확인하고 게시 차례를 정해요." 타이머를 4분으로 맞추고 시작한다. "금액만 쓰면 되죠"라는 모둠에게 "학생이 이 게시물만 보고 계획과 달라진 까닭을 알 수 있나요?"라고 묻는다. 게시는 학생회 담당 선생님 확인을 거친다는 점도 차례에 넣게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '집행 공개 게시물', labels: ['정리', '확인'], timeUnit: 'min', plan: { work: 2, rest: 1, rounds: 1 }, cards: ['게시판과 누리집에 올린다', '담당 선생님과 내역을 확인한다', '내역을 표로 정리한다'], safety: ['사업 이름을 썼다', '쓴 금액을 썼다', '쓴 날짜를 썼다', '영수증과 금액을 맞춰 보았다', '계획과 달라진 까닭을 썼다'] }, prompt: '타이머를 4분 정리·1분 확인으로 맞추고, 게시 차례를 놓고, 게시물 점검 다섯 칸을 확인하세요.', target: { plan: { work: 4, rest: 1 }, order: ['내역을 표로 정리한다', '담당 선생님과 내역을 확인한다', '게시판과 누리집에 올린다'], safety: true }, difficulty: 0.25 },
            { type: 'choice', prompt: '집행 공개 게시물에 꼭 필요한 것은?', options: ['임원들의 소감', '계획과 달라진 금액과 그 까닭', '다음 행사 홍보 문구'], answer: 1, difficulty: 0.15, explain: '달라진 것과 까닭이 보여야 학생들이 집행을 확인하고 질문할 수 있어요.' },
            { type: 'short', prompt: '게시물을 본 학생이 질문할 수 있는 방법 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '집행 공개 게시물',
          items: [
            { type: 'table', prompt: '가상 축제 집행 내역을 공개 게시물 표로 정리하세요.', columns: ['사업', '계획 금액', '쓴 금액', '달라진 까닭'], cells: [['무대 장식', '50만 원', '70만 원', ''], ['천막 대여', '10만 원', '10만 원', '']] },
            { type: 'short', prompt: '이 게시물에 덧붙일 질문 받는 방법과 답변 날짜를 쓰세요.' },
          ],
        },
        notes: '집행 내역은 가상이다.',
      }),
      M({
        id: 'wrap.collect', type: 'wrap', title: '제안을 위한 의견 모으기',
        method: '제안을 위한 의견 수렴', tool: 'timer', minutes: 8,
        levels: { easy: '모둠 하나의 의견만 모아 기록판에 적는다.', base: '학급 전체 의견을 손 들기로 모아 찬성·반대·다른 의견 수를 기록판에 적는다.', challenge: '소수 의견의 까닭까지 받아 활동지에 적는다.' },
        wrap: {
          teacher: '"오늘 만든 제안을 가상 구청에 내기 전에 학급 의견을 모아 봐요. 3분 동안 손 들기로 찬성·반대·다른 의견을 세요." 타이머를 3분 의견·1분 집계로 맞추고 진행한다. "반대가 적으니 그냥 빼자"는 말에 "그 한두 명의 까닭이 제안서의 약점일 수 있지 않을까요?"라고 묻는다. 의견은 이름 없이 수와 까닭으로만 적는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '학급 의견 모으기', labels: ['의견', '집계'], timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 }, fields: [{ label: '찬성', unit: '명', step: 1 }, { label: '반대', unit: '명', step: 1 }, { label: '다른 의견', unit: '명', step: 1 }] }, prompt: '타이머를 3분 의견·1분 집계로 맞추고, 손 들기 결과를 기록판에 적으세요.', target: { plan: { work: 3, rest: 1 }, records: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '의견 수렴에서 소수 의견을 다루는 방법으로 알맞은 것은?', options: ['수가 적으니 제안서에서 뺀다', '까닭을 받아 제안서의 반론 대비에 쓴다', '다수 의견에 따르라고 설득한다'], answer: 1, difficulty: 0.15, explain: '소수 의견의 까닭은 제안서가 대비해야 할 반론이 될 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '제안을 위한 의견 모으기',
          items: [
            { type: 'table', prompt: '학급 의견을 이름 없이 정리하세요.', columns: ['의견', '수', '대표 까닭'], cells: [['찬성', '', ''], ['반대', '', ''], ['다른 의견', '', '']] },
            { type: 'short', prompt: '소수 의견의 까닭 하나를 제안서에 어떻게 반영할지 쓰세요.' },
          ],
        },
        notes: '의견은 이름 없이 수와 까닭만 기록한다. 결론을 교사가 정하지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 11-5. 통계 해석과 탐구 보고서 (11학년 · 주제 탐구 활동)
  // ======================================================================================================
  {
    const M = MOD('g11-topic', [11]);
    const CUT = [['가 반', 92], ['나 반', 95]];
    const ICE = { text: '가상 탐구 모둠의 자료: 한 해 동안 달마다 아이스크림 판매량과 물놀이 사고 건수를 그렸더니 함께 오르내렸다.', who: '탐구 모둠', motif: 'sun', choices: [
      { id: 'cause', text: '"아이스크림이 사고를 부른다"고 결론 낸다', result: '보고서에 "아이스크림 판매를 줄이면 사고가 준다"고 쓴다.', impact: [{ who: '보고서', text: '자료가 말하지 않는 결론을 담는다', tone: -1 }],
        next: { text: '검토자가 "여름에 둘 다 늘어난 것 아닌가요?"라고 묻는다.', choices: [
          { id: 'keep', text: '그래도 결론을 그대로 둔다', result: '검토에서 "인과를 보여 주지 못했다"는 평을 받는다.', impact: [{ who: '모둠', text: '보고서의 믿음이 떨어진다', tone: -1 }], ending: '함께 움직인다는 것만으로는 원인이라고 말할 수 없다.' },
          { id: 'revise', text: '결론을 "함께 늘어나는 관계가 있다"로 고친다', result: '결론이 자료만큼으로 줄어든다.', impact: [{ who: '보고서', text: '정확해진다', tone: 1 }], ending: '늦게라도 결론을 자료만큼으로 고치면 보고서가 정직해진다.' }] } },
      { id: 'third', text: '둘 다에 영향을 주는 다른 요인이 있는지 찾는다', result: '기온 자료를 함께 놓으니 기온이 오르는 달에 둘 다 늘어난다.', impact: [{ who: '모둠', text: '숨은 요인을 찾는다', tone: 1 }],
        next: { text: '기온이라는 셋째 요인을 찾았다. 결론을 어떻게 쓸까?', choices: [
          { id: 'corr', text: '"두 값은 함께 늘어나며, 기온이 둘 다에 영향을 줄 수 있다"고 쓴다', result: '결론이 자료만큼만 말한다.', impact: [{ who: '보고서', text: '해석이 정확하다', tone: 1 }],
            next: { text: '검토자가 "기온이 원인이라는 것도 이 자료로 확정되나요?"라고 묻는다.', choices: [
              { id: 'limit', text: '한계에 "원인 확정에는 추가 탐구가 필요하다"고 적는다', result: '논의에 다음 탐구 계획이 생긴다.', impact: [{ who: '모둠', text: '다음 탐구 질문을 얻는다', tone: 1 }], ending: '상관을 찾고, 숨은 요인을 살피고, 한계를 적는 것이 바른 해석이다.' },
              { id: 'sure', text: '"기온이 원인이다"라고 단정한다', result: '같은 잘못을 다른 변수로 되풀이한다.', impact: [{ who: '보고서', text: '다시 과장된다', tone: -1 }], ending: '셋째 요인도 자료로 확인하기 전에는 원인이라고 단정할 수 없다.' }] } },
          { id: 'drop', text: '헷갈리니 이 자료를 보고서에서 뺀다', result: '흥미로운 결과가 사라진다.', impact: [{ who: '보고서', text: '쓸 수 있는 자료를 잃는다', tone: 0 }], ending: '헷갈리는 자료는 빼기보다 해석을 정확히 하면 된다.' }] } },
      { id: 'sample', text: '한 달 자료만 더 보고 판단한다', result: '한 달 자료로는 관계를 말하기 어렵다.', impact: [{ who: '모둠', text: '판단 근거가 부족하다', tone: 0 }], ending: '표본이 작으면 어느 쪽으로도 결론을 내기 어렵다.' }] };
    const ICE_R = [{ id: 'corrnot', text: '함께 늘어난다고 원인과 결과인 것은 아니다' }, { id: 'third', text: '둘 다에 영향을 주는 셋째 요인을 살펴야 한다' }, { id: 'limit', text: '자료로 말할 수 없는 것은 한계에 적는다' }, { id: 'together', text: '같이 오르내리면 원인과 결과다', why: '함께 움직이는 것은 상관일 뿐, 원인은 따로 보여야 해요.' }, { id: 'graph', text: '그래프에 보이면 믿으면 된다', why: '그래프는 축·표본·숨은 요인을 함께 따져 읽어야 해요.' }];
    const SEC = ['서론', '방법', '결과', '논의'];

    MODS.push(
      M({
        id: 'intro.axis', type: 'intro', title: '세로축이 잘린 그래프',
        method: '축이 잘린 그래프 첫인상', tool: 'chart', minutes: 6,
        levels: { easy: '가상 막대그래프 하나를 보고 차이가 커 보이는 까닭을 함께 찾는다.', base: '세로축 시작 수(90)를 짚고, 0부터 그리면 어떻게 보일지 말한다.', challenge: '같은 자료를 0부터 다시 그린 모양을 손으로 그려 보이고 인상 차이를 말한다.' },
        intro: {
          teacher: '"가상 두 반의 평균 점수 그래프예요. 나 반이 훨씬 잘한 것처럼 보이죠?" 시연 단추로 \'차이가 커 보이는 까닭\' 보기를 고르는 모습을 보인다. "막대가 세 배나 차이 나니까 큰 차이죠"라는 말이 나오면 "세로축이 몇부터 시작하는지 볼까요? 92와 95의 차이는 몇 점인가요?"라고 되묻는다. 그래프는 보이는 대로가 아니라 축·단위·표본을 따져 읽어야 한다고 짚는다.',
          student: '가상 두 반의 평균 점수 그래프를 보고, 차이가 커 보이는 까닭을 세로축에서 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '두 반 평균 점수(가상)', yLabel: '점수', xLabel: '반', unit: '점', data: CUT, from: 90, max: 96, question: '차이가 커 보이는 까닭은?', choices: ['나 반 학생이 훨씬 많아서', '세로축이 90부터 시작해서', '두 반 점수가 많이 달라서'] }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper bar chart with a wavy break at the bottom of the vertical axis, two bars that look very different, and a paper magnifying glass over the axis numbers', banner: '축을 먼저 보세요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '점수는 가상 반의 가상 값이다. 학생 성적 자료를 쓰지 않는다.',
      }),
      M({
        id: 'intro.outline', type: 'intro', title: '탐구 보고서 짜임 생각그물',
        method: '보고서 짜임 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 세 개(서론·방법·결과)에 내용 카드를 함께 단다.', base: '가지 다섯 개(서론·방법·결과·논의·참고문헌)에 카드를 단다.', challenge: '가지마다 들어갈 내용을 하나씩 더 말한다.' },
        intro: {
          teacher: '"탐구 보고서는 다섯 가지로 짜여요. 가운데 \'탐구 보고서\'에서 가지를 뻗어 볼까요?" 시연 단추로 카드가 가지에 달리는 모습을 보여 준다. "결과랑 논의는 같은 거 아니에요?"라는 말이 나오면 "\'점수가 5점 올랐다\'와 \'그 까닭은 아마 ~일 것이다\'는 같은 말일까요?"라고 되묻는다. 결과는 자료가 보여 준 것, 논의는 그 뜻과 한계라는 점을 짚는다.',
          student: '탐구 보고서의 다섯 부분에 어떤 내용이 들어갈지 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '탐구 보고서', slots: ['서론', '방법', '결과', '논의', '참고문헌'], cards: ['탐구 질문과 동기', '자료를 모은 방법과 표본', '그래프와 수치', '결과의 뜻과 한계', '참고한 자료의 출처'] }, sequence: [{ sort: { 서론: ['탐구 질문과 동기'], 방법: ['자료를 모은 방법과 표본'], 결과: ['그래프와 수치'], 논의: ['결과의 뜻과 한계'], 참고문헌: ['참고한 자료의 출처'] } }] },
          art: { draw: 'a paper report booklet in the center with five paper branches labeled by colored tabs, each branch holding a small paper card, a pencil and a graph sheet nearby', banner: '보고서의 다섯 가지', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.corr', type: 'activity', title: '상관과 인과 갈림길',
        method: '상관과 인과 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(인과 결론·셋째 요인 찾기·한 달 더 보기)에서 고르고 근거를 고른다.', base: '두 번째 갈림길(결론 쓰기)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(검토자 질문)까지 가서 근거 세 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '아이스크림과 물놀이 사고', tool: 'dilemma',
          teacher: '"아이스크림 판매량과 물놀이 사고가 함께 오르내렸어요. 아이스크림이 사고를 부를까요?" 웃음이 나오면 "그럼 왜 함께 움직였을까요?"라고 묻는다. 첫 길에서 인과 결론을 고른 학생에게 검토자의 질문 장면을 다시 읽게 한다. 셋째 요인 길을 고른 학생에게도 "기온이 원인이라고 단정해도 될까요?"라고 끝까지 묻는다. 상관 → 숨은 요인 → 한계가 해석의 차례라고 짚는다.',
          task: '탐구 모둠의 해석 갈림길을 따라가며 자료만큼의 결론을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('가상 탐구 모둠이 자료를 바르게 해석하는 길을 가고 근거를 고르세요.', ICE, [['third', 'corr', 'limit']], ICE_R, ['corrnot', 'third'], { d: 0.4, hardReasons: ['corrnot', 'third', 'limit'] }),
            EXPLOREQ('인과로 결론 낸 길도 끝까지 가 보고 검토 결과를 견주세요.', ICE, ICE_R, ['인과로 단정한 길의 검토 결과를 확인했다', '셋째 요인을 찾은 길과 견주었다'], { d: 0.35 }),
            DILQ('"스마트폰 사용 시간이 긴 학생일수록 잠이 적다"는 가상 설문 결과를 해석하는 길을 가고 근거를 고르세요.', { text: '가상 설문 120명: 스마트폰 사용 시간이 긴 학생일수록 잠자는 시간이 짧았다.', who: '탐구 모둠', motif: 'moon', choices: [
              { id: 'phone', text: '"스마트폰이 잠을 줄인다"고 쓴다', result: '거꾸로, 잠이 안 와서 폰을 오래 볼 수도 있다는 검토 의견이 나온다.', impact: [{ who: '보고서', text: '방향을 확인하지 않은 결론이다', tone: -1 }], ending: '어느 쪽이 먼저인지 모르면 인과를 말할 수 없다.' },
              { id: 'relation', text: '"함께 나타나는 관계가 있다"고 쓰고 방향은 한계에 적는다', result: '논의에 "사용 시간을 정해 두고 잠을 재는 탐구"가 다음 계획으로 들어간다.', impact: [{ who: '모둠', text: '다음 탐구가 분명해진다', tone: 1 }],
                next: { text: '검토자가 "120명이 전체 고등학생을 대표하나요?"라고 묻는다.', choices: [
                  { id: 'sampleok', text: '한 학교 120명이라 대표성에 한계가 있다고 적는다', result: '결론의 범위가 분명해진다.', impact: [{ who: '보고서', text: '정직해진다', tone: 1 }], ending: '표본의 범위를 밝히면 결론을 얼마나 넓혀 쓸지 알 수 있다.' },
                  { id: 'all', text: '"모든 고등학생이 그렇다"고 넓혀 쓴다', result: '검토에서 과장이라는 평을 받는다.', impact: [{ who: '보고서', text: '믿음이 떨어진다', tone: -1 }], ending: '작은 표본을 전체로 넓히면 결론이 자료를 넘어선다.' }] } }] },
              [['relation', 'sampleok']], [{ id: 'direction', text: '어느 쪽이 먼저인지 모르면 인과를 말할 수 없다' }, { id: 'sample', text: '표본의 크기와 범위를 결론에 밝힌다' }, { id: 'many', text: '120명이면 모든 학생을 대표한다', why: '한 학교 120명은 그 학교 응답자의 경향일 뿐이에요.' }], ['direction', 'sample'], { d: 0.35, more: { conclude: '자료가 보여 주는 만큼만 말하고, 방향·숨은 요인·표본의 한계는 논의에 적어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"함께 늘어났다"와 "원인이다"의 차이를 예를 하나 들어 쓰세요.' }] },
        notes: '판매량·사고 건수·설문 자료는 모두 가상이다.',
      }),
      M({
        id: 'activity.redraw', type: 'activity', title: '그래프 바르게 다시 그리기',
        method: '바른 그래프 다시 그리기', tool: 'chart', minutes: 18,
        levels: { easy: '첫 자료를 0부터 시작하는 막대그래프로 다시 그리고, 막대 끝에 값이 보인다.', base: '첫 자료는 꺾은선으로, 둘째 자료는 막대로 0부터 다시 그리고 인상 차이를 고른다.', challenge: '두 가지 그래프를 값 표시 없이 그리고, 인상 차이를 활동지에 쓴다.' },
        activity: {
          title: '0부터 다시 그리기', tool: 'chart',
          teacher: '"잘린 축 그래프를 0부터 다시 그리면 어떻게 보일까요? 같은 숫자인데 인상이 바뀌는지 직접 봐요." 다시 그린 뒤 "아까는 세 배 차이처럼 보였는데 지금은?"이라고 묻는다. "잘린 축은 다 거짓말"이라는 학생에게 "작은 변화를 자세히 봐야 할 때는 축을 자를 수도 있어요. 대신 무엇을 꼭 표시해야 할까요?"라고 되묻는다(물결선·시작 수). 그래프를 그린 사람의 선택이 읽는 사람의 인상을 바꾼다는 점을 짚는다.',
          task: '가상 자료를 0부터 시작하는 그래프로 다시 그리고, 인상이 어떻게 달라지는지 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 동아리 회원 수(4월 48명, 5월 50명, 6월 52명, 7월 53명)를 0부터 시작하는 꺾은선그래프로 다시 그리세요.', toolOptions: { type: 'line', mode: 'build', title: '동아리 회원 수(가상)', yLabel: '회원 수', xLabel: '달', unit: '명', data: [['4월', 48], ['5월', 50], ['6월', 52], ['7월', 53]], max: 60, scale: 10, step: 1 }, target: { build: true }, difficulty: 0.3,
              levels: { easy: { prompt: '가상 동아리 회원 수(4월 48명, 5월 50명, 6월 52명, 7월 53명)를 0부터 시작하는 막대그래프로 다시 그리세요.', toolOptions: { type: 'bar' } } } },
            { prompt: '아까 본 두 반 평균 점수(가 반 92점, 나 반 95점)를 0부터 시작하는 막대그래프로 다시 그리세요.', toolOptions: { type: 'bar', mode: 'build', title: '두 반 평균 점수(가상)', yLabel: '점수', xLabel: '반', unit: '점', data: CUT, max: 100, scale: 10, step: 1 }, target: { build: true }, difficulty: 0.3 },
            { prompt: '0부터 다시 그린 두 반 그래프를 보고, 인상이 어떻게 달라졌는지 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '두 반 평균 점수(가상, 0부터)', yLabel: '점수', xLabel: '반', unit: '점', data: CUT, max: 100, question: '0부터 그리니 어떻게 보이나요?', choices: ['차이가 여전히 세 배쯤 커 보인다', '두 반의 차이가 작아 보인다', '가 반이 더 높아 보인다'], why: ['막대 길이를 다시 견주어 보세요.', '', '값을 다시 읽어 보세요.'] }, target: { pick: 1 }, difficulty: 0.3 },
            { prompt: '세로축을 잘라 그릴 때 꼭 해야 할 일을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '두 반 평균 점수(가상, 90부터)', yLabel: '점수', xLabel: '반', unit: '점', data: CUT, from: 90, max: 96, question: '축을 자를 때 꼭 할 일은?', choices: ['물결선과 시작 수를 분명히 표시한다', '막대 색을 더 진하게 한다', '제목에서 단위를 뺀다'], why: ['', '색은 축 정보를 대신하지 못해요.', '단위가 없으면 더 헷갈려요.'] }, target: { pick: 0 }, difficulty: 0.35,
              conclude: '같은 숫자도 축을 어떻게 그리느냐에 따라 인상이 달라져요. 읽는 사람은 축을 먼저 보고, 그리는 사람은 시작 수를 숨기지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '잘린 축 그래프와 0부터 그린 그래프의 인상 차이를 근거와 함께 두 문장으로 쓰세요.' }] },
        notes: '자료는 모두 가상이다.',
      }),
      M({
        id: 'activity.place', type: 'activity', title: '보고서 문장 짜임 나누기',
        method: '보고서 문장 짜임에 나누기', tool: 'sortboard', minutes: 18,
        levels: { easy: '바구니마다 문장 카드 한 장씩(4장)을 넣고, 틀린 바구니에 넣으면 되돌아온다.', base: '문장 카드 8장을 서론·방법·결과·논의 바구니에 나눈다.', challenge: '헷갈리는 카드를 더한 10장을 나누고, 어느 칸에도 맞지 않게 잘못 쓰인 문장은 남긴 뒤 활동지에 고쳐 쓴다.' },
        activity: {
          title: '보고서 문장 바구니', tool: 'sortboard',
          teacher: '"가상 탐구 \'점심시간 산책과 오후 집중도\' 보고서의 문장들이 섞였어요. 어느 부분의 문장일까요?" 카드를 넣을 때마다 "이 문장은 자료가 보여 준 것인가요, 그 뜻을 해석한 것인가요?"라고 묻는다. "산책이 집중력을 높였다"를 결과에 넣는 학생에게 "그건 수치일까요, 해석일까요?"라고 되묻는다. 결과 칸에 해석이 섞이면 보고서가 자료보다 크게 말하게 된다는 점을 짚는다.',
          task: '가상 탐구 보고서의 문장 카드를 서론·방법·결과·논의 바구니에 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('가상 탐구 "점심시간 산책과 오후 집중도"의 문장 카드를 보고서 짜임 바구니에 나누세요.', SEC, [
              ['오후 수업에 졸린 학생이 많아 이 탐구를 시작했다', '탐구 질문: 점심 산책은 오후 집중도와 관계가 있는가'],
              ['2주 동안 30명이 산책한 날과 안 한 날을 나눠 기록했다', '집중도는 스스로 매긴 5점 척도로 쟀다'],
              ['산책한 날의 평균 집중도는 3.8점, 안 한 날은 3.2점이었다', '30명 가운데 21명이 산책한 날 점수가 더 높았다'],
              ['산책이 집중에 도움이 될 수 있음을 보여 준다', '스스로 매긴 점수라 기분의 영향을 받았을 수 있다'],
            ], { k: 1, hard: [['선행 연구에서 가벼운 운동과 주의력의 관계를 찾아보았다'], [], [], ['날씨가 산책 여부와 기분에 함께 영향을 주었을 수 있다']], traps: ['산책은 모든 학생의 성적을 확실히 올린다'], d: 0.3 }),
            SBQ('결과 문장과 논의 문장을 가려 나누세요(결과·논의 어디에도 맞지 않게 지나친 문장은 남겨요).', ['결과', '논의'], [
              ['평균 집중도 차이는 0.6점이었다', '산책한 날 점수가 높은 학생이 70%였다'],
              ['차이가 작아 더 많은 날의 자료가 필요하다', '다음에는 교사 관찰 점수도 함께 쓰면 좋겠다'],
            ], { k: 1, traps: ['산책하면 누구나 집중력이 두 배가 된다'], d: 0.35 }),
            SBQ('가상 탐구 "급식 잔반과 메뉴 선호"의 문장 카드를 짜임 바구니에 나누세요.', SEC, [
              ['잔반이 많은 날이 메뉴마다 다른지 궁금했다'],
              ['한 달 동안 메뉴별 잔반 무게를 급식실 협조로 기록했다', '학생 100명에게 메뉴 선호를 물었다'],
              ['채소 반찬이 나온 날 잔반이 평균 1.4배였다'],
              ['선호 조사와 잔반이 같은 방향을 보였지만 한 학교 자료라 넓혀 말하기 어렵다'],
            ], { k: 1, traps: ['채소 반찬은 급식에서 빼야 한다고 증명되었다'], d: 0.35, more: { conclude: '결과는 자료가 보여 준 것, 논의는 그 뜻과 한계예요. 둘을 나누면 보고서가 자료만큼 정직해져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"산책은 모든 학생의 성적을 확실히 올린다"를 자료만큼의 논의 문장으로 고쳐 쓰세요.' }] },
        notes: '탐구 사례와 수치는 모두 가상이다.',
      }),
      M({
        id: 'activity.write', type: 'activity', title: '결과·논의 문단 쓰기',
        method: '결과·논의 문단 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문장 틀("결과: ~였다.")을 보고 결과 문단을 쓴다.', base: '결과 문단과 논의 문단을 따로 쓰고 기준표(자료만큼의 결론)로 점검한다.', challenge: '논의에 탐구의 한계를 넣고 기준 하나를 더 점검한다.' },
        activity: {
          title: '결과와 논의 나눠 쓰기', tool: 'rubric-writing',
          teacher: '"가상 탐구 \'점심 산책과 집중도\' 자료로 결과와 논의를 나눠 써요. 결과에는 숫자, 논의에는 뜻과 한계." 칠판에 자료(산책한 날 3.8점·안 한 날 3.2점, 30명·2주, 스스로 매긴 점수)를 적는다. 결과 문단에 "산책은 효과가 있다"를 쓴 학생에게 "그 문장은 숫자만으로 확인되나요?"라고 묻는다. 논의에 "확실히 증명됐다"를 쓴 학생에게 표본과 측정 방법을 다시 보게 한다.',
          task: '가상 자료로 결과와 논의를 나눠 쓰고, 자료만큼만 말했는지 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 자료(산책한 날 3.8점, 안 한 날 3.2점, 30명·2주)로 결과 문단을 쓰고 점검하세요.', '결과 문단을 2~3문장으로 쓰세요.', ['수치를 정확히 옮겼다', '해석 없이 자료가 보여 준 것만 썼다', '표본과 기간을 밝혔다'], { min: 40, max: 250, must: [['점']], starter: '결과: 2주 동안 30명을 기록한 결과, ~였다.', sample: '2주 동안 30명을 기록한 결과, 산책한 날의 평균 집중도는 3.8점, 안 한 날은 3.2점이었다. 30명 가운데 21명이 산책한 날 점수가 더 높았다.', d: 0.3 }),
            RWQ('같은 자료로 논의 문단을 쓰고 점검하세요.', '논의 문단을 2~4문장으로 쓰세요.', ['결과의 뜻을 자료만큼만 썼다', '"확실히"·"증명"처럼 지나친 말을 쓰지 않았다', '다음 탐구에서 바꿀 점을 썼다'], { min: 50, max: 300, starter: '논의: 이 결과는 ~일 수 있음을 보여 준다. 다만 ~', sample: '이 결과는 점심 산책이 오후 집중에 도움이 될 수 있음을 보여 준다. 다만 차이가 0.6점으로 작고, 다음에는 더 긴 기간 자료를 모으겠다.', plus: '탐구의 한계(표본·측정 방법)를 썼다', d: 0.4 }),
            RWQ('가상 자료(채소 반찬 날 잔반 평균 1.4배, 한 학교 한 달)로 결과와 논의를 한 문단에 나눠 쓰고 점검하세요.', '"결과:"와 "논의:"를 붙여 한 문단으로 쓰세요.', ['결과와 논의를 나눠 썼다', '결과에 해석을 섞지 않았다', '논의가 자료를 넘어서지 않았다'], { min: 60, max: 350, must: [['결과'], ['논의']], plus: '탐구의 한계(표본·측정 방법)를 썼다', d: 0.45, more: { conclude: '결과는 숫자를 정확히, 논의는 그 뜻을 자료만큼, 한계는 숨기지 않고 — 그래야 읽는 사람이 믿고 이어서 탐구할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 논의 문단에서 "자료를 넘어선" 말이 있다면 찾아 고쳐 쓰세요.' }] },
        notes: '자료는 모두 가상이다.',
      }),

      M({
        id: 'wrap.peer', type: 'wrap', title: '동료 검토 회의',
        method: '동료 검토 회의', tool: 'timer', minutes: 8,
        levels: { easy: '검토 질문 두 개(결과에 수치가 있나·논의가 자료를 넘지 않나)만 점검한다.', base: '검토 질문 네 개를 점검하고 검토 타이머를 맞춘다.', challenge: '짝의 글에 수정 제안 한 문장을 덧붙여 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"짝과 오늘 쓴 결과·논의 문단을 바꿔 읽어요. 3분 읽고 검토, 1분 말해 주기를 두 번 돌려요." 타이머를 맞추고 검토 질문을 함께 읽는다. "좋네, 잘 썼어"로만 끝내는 학생에게 "질문 넷 가운데 어느 것에 \'아니요\'가 나왔나요? 그게 짝에게 가장 쓸모 있는 말이에요"라고 짚는다. 검토는 사람이 아니라 글을 향한다는 점도 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '동료 검토', labels: ['검토', '말하기'], timeUnit: 'min', plan: { work: 1, rest: 1, rounds: 1 }, safety: ['결과에 수치가 정확히 있다', '결과에 해석이 섞이지 않았다', '논의가 자료를 넘어서지 않는다', '한계가 적혀 있다'] }, prompt: '검토 타이머를 3분 검토·1분 말하기, 2번으로 맞추고 짝의 글에 검토 질문 네 개를 확인하세요.', target: { plan: { work: 3, rest: 1, rounds: 2 }, safety: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '쓸모 있는 동료 검토 말로 알맞은 것은?', options: ['"전체적으로 좋아"', '"논의 둘째 문장의 \'증명\'은 자료보다 크게 말한 것 같아"', '"네 글은 나보다 못해"'], answer: 1, difficulty: 0.15, explain: '어느 문장의 무엇을 고칠지 짚어 주는 말이 검토에 쓸모 있어요.' },
            { type: 'short', prompt: '짝의 글에 줄 수정 제안 한 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '동료 검토표',
          items: [
            { type: 'check', prompt: '짝의 글에서 확인한 것에 표시하세요.', options: ['결과에 수치가 정확하다', '결과에 해석이 섞이지 않았다', '논의가 자료를 넘어서지 않는다', '한계가 적혀 있다'] },
            { type: 'short', prompt: '짝에게 준 수정 제안과 그 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.revise', type: 'wrap', title: '검토 의견 반영하기',
        method: '검토 반영 차례', tool: 'story', minutes: 8,
        levels: { easy: '교사가 검토 의견·수정 두 장면을 함께 놓는다.', base: '검토 의견→수정→확인 세 장면을 차례로 놓는다.', challenge: '두 검토 의견이 엇갈릴 때 무엇을 먼저 반영할지 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"검토 의견을 받았다면 이제 고칠 차례예요. 받고 → 고치고 → 확인하는 장면을 놓아 볼까요?" 장면을 놓은 뒤 "의견을 받으면 다 고쳐야 해요?"라는 질문에 "자료로 확인해 보고, 맞으면 고치고, 아니면 왜 안 고치는지 적어 둬요"라고 답한다. 고친 문장을 짝에게 다시 보여 주는 확인 단계를 빼지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', title: '검토 반영 이야기', slots: 3, cards: [{ id: 'check', text: '고친 문장을 검토자에게 다시 보여 준다', motif: 'star' }, { id: 'get', text: '"\'증명\'은 지나친 말 같아"라는 의견을 받는다', motif: 'cloud' }, { id: 'fix', text: '"도움이 될 수 있음을 보여 준다"로 고친다', motif: 'leaf' }] }, prompt: '검토 의견을 반영하는 장면을 차례로 놓으세요.', target: { order: ['get', 'fix', 'check'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '검토 의견 두 개가 서로 엇갈릴 때 알맞은 것은?', options: ['목소리 큰 쪽 의견을 따른다', '자료로 확인해 맞는 쪽을 반영하고 까닭을 적는다', '둘 다 무시한다'], answer: 1, difficulty: 0.2, explain: '검토 의견도 자료로 확인해 반영하고, 반영하지 않은 까닭은 적어 둬요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '검토 반영 기록',
          items: [
            { type: 'table', prompt: '받은 검토 의견과 반영을 적으세요.', columns: ['검토 의견', '고친 문장', '반영 여부와 까닭'], cells: [['', '', ''], ['', '', '']] },
            { type: 'short', prompt: '고치기 전 문장과 고친 뒤 문장 가운데 더 정직한 쪽과 그 까닭을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11-6. 지역 기관 협의와 성과 평가 (11학년 · 프로젝트형 봉사활동)
  // ======================================================================================================
  {
    const M = MOD('g11-serve', [11]);
    const AREA = { title: '가상 동네 협력 기관 지도', grid: [6, 4], scale: { cell: 200, unit: 'm' }, places: [{ name: '가상 고등학교', icon: 'school', at: [0, 3] }, { name: '가상 노인복지관', icon: 'house', at: [3, 3] }, { name: '가상 어린이도서관', icon: 'library', at: [0, 0] }, { name: '가상 공원 관리소', icon: 'park', at: [5, 1] }, { name: '시장', icon: 'market', at: [3, 1] }] };
    const DAY = { text: '가상 노인복지관 스마트폰 도우미 봉사 날. 출발 직전, 인솔 선생님이 갑자기 회의로 20분 늦는다는 연락이 왔다. 모둠원 몇은 "먼저 가 있자"고 한다.', who: '봉사 모둠', motif: 'house', choices: [
      { id: 'go', text: '먼저 출발해 복지관으로 간다', result: '가는 길에 한 명이 길을 잘못 들어 연락이 끊긴다.', impact: [{ who: '모둠', text: '인원 확인이 안 된다', tone: -1 }], ending: '안전 계획의 인솔 규칙을 건너뛰면 작은 일이 큰 걱정이 된다.' },
      { id: 'wait', text: '안전 계획대로 학교에서 기다리고 기관 담당자에게 늦는다고 알린다', result: '담당자가 "시작을 20분 미루겠다"고 답한다.', impact: [{ who: '기관', text: '일정을 미리 조정한다', tone: 1 }],
        next: { text: '복지관에 도착하니 어르신 한 분이 "어지럽다"며 자리에서 일어나지 못한다.', choices: [
          { id: 'staff', text: '곧바로 복지관 담당자와 인솔 선생님께 알린다', result: '담당자가 어르신을 돌보고, 모둠은 정해진 활동을 이어 간다.', impact: [{ who: '어르신', text: '알맞은 도움을 받는다', tone: 1 }],
            next: { text: '활동이 끝날 무렵, 한 어르신이 개인 연락처를 주며 "따로 집에 와서 알려 달라"고 한다.', choices: [
              { id: 'policy', text: '정중히 사양하고 담당자에게 요청을 전해 다음 회차로 잇는다', result: '담당자가 다음 회차 신청을 받아 준다.', impact: [{ who: '어르신', text: '안전한 방법으로 도움을 이어 받는다', tone: 1 }], ending: '안전 계획은 이동·응급·개인 접촉까지 기관과 정한 규칙을 지키는 것이다.' },
              { id: 'private', text: '연락처를 받아 주말에 혼자 찾아간다', result: '학교와 기관이 모르는 활동이 된다.', impact: [{ who: '학생', text: '보호받지 못하는 상황에 놓인다', tone: -1 }], ending: '선의라도 기관·학교 밖 개인 방문은 안전 계획을 벗어난다.' }] } },
          { id: 'self', text: '모둠이 직접 어르신을 부축해 밖으로 모신다', result: '어르신이 더 어지러워한다.', impact: [{ who: '어르신', text: '위험해질 수 있다', tone: -1 }], ending: '응급 상황은 직접 처리하지 않고 담당자에게 먼저 알린다.' }] } },
      { id: 'cancel', text: '아무에게도 알리지 않고 오늘은 취소한다', result: '복지관에서 어르신들이 한 시간을 기다린다.', impact: [{ who: '어르신들', text: '약속이 깨진다', tone: -1 }], ending: '바뀐 일정은 기관에 바로 알려야 한다.' }] };
    const DAY_R = [{ id: 'plan', text: '인솔·이동은 안전 계획대로 한다' }, { id: 'tell', text: '바뀐 일정과 문제는 기관 담당자에게 바로 알린다' }, { id: 'rule', text: '응급·개인 접촉은 기관과 정한 규칙을 따른다' }, { id: 'kind', text: '좋은 뜻이면 규칙을 넘어도 된다', why: '좋은 뜻도 안전 계획 안에서 해야 모두가 보호받아요.' }, { id: 'fast', text: '빨리 시작하는 것이 가장 중요하다', why: '일정보다 인원과 안전 확인이 먼저예요.' }];

    MODS.push(
      M({
        id: 'intro.map', type: 'intro', title: '협력 기관까지의 거리',
        method: '협력 기관 지도 표시', tool: 'map', minutes: 6,
        levels: { easy: '교사가 협력 후보 기관 한 곳(가상 노인복지관)까지의 길을 축척으로 세어 보인다.', base: '후보 기관 두 곳까지의 거리를 견주어 말한다.', challenge: '걸어서 1분에 약 70m를 간다고 정하고(우리 반 약속), 이동 시간을 어림해 말한다.' },
        intro: {
          teacher: '"가상 동네에서 봉사를 함께할 기관을 찾아요. 한 칸은 200m예요. 학교에서 복지관까지는 얼마나 될까요?" 시연 단추로 칸을 세어 거리가 나오는 모습을 보인다. "가까운 곳이 무조건 좋은 곳이죠"라는 말이 나오면 "가까워도 우리 봉사 목표와 맞지 않는다면 어떨까요?"라고 되묻는다. 거리는 안전 계획(이동 방법·시간)의 출발점이라는 점을 짚는다.',
          student: '가상 동네 지도에서 학교와 협력 후보 기관 사이의 거리를 칸 수와 축척으로 구해 보세요.',
          demo: { tool: 'map', options: Object.assign({ mode: 'scale', showCells: true }, AREA), sequence: [{ from: '가상 고등학교', to: '가상 노인복지관' }] },
          art: { draw: 'a paper neighborhood map with a school, an elderly welfare center, a children library and a park office, a dotted paper path with footprints from the school to the center, a scale bar at the bottom', banner: '함께할 기관은 어디에?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '기관 이름은 모두 가상이다. 걷는 빠르기 1분 70m는 어림용 우리 반 약속이다.',
      }),
      M({
        id: 'intro.metric', type: 'intro', title: '산출과 성과는 다르다',
        method: '산출·성과 그래프 견주기', tool: 'chart', minutes: 6,
        levels: { easy: '봉사 시간(산출) 그래프 하나만 함께 읽는다.', base: '봉사 시간과 어르신 혼자 할 수 있는 기능 수(성과)를 견주어 차이를 고른다.', challenge: '우리 봉사라면 어떤 성과 지표를 쓸지 제안한다.' },
        intro: {
          teacher: '"가상 두 모둠의 봉사 기록이에요. 가 모둠은 20시간, 나 모둠은 10시간 했어요. 그런데 어르신이 혼자 할 수 있게 된 기능은 나 모둠이 더 많았어요." 시연 단추로 성과 그래프에서 더 큰 막대를 고르는 모습을 보인다. "많이 했으면 성과도 크죠"라는 말에 "시간은 우리가 한 양이고, 성과는 상대에게 생긴 변화예요. 둘은 같을까요?"라고 되묻는다.',
          student: '가상 두 모둠의 봉사 시간과, 어르신이 혼자 할 수 있게 된 기능 수를 견주어 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '어르신이 혼자 할 수 있게 된 기능 수(가상)', yLabel: '기능 수', xLabel: '모둠', unit: '개', data: [['가 모둠(20시간)', 3], ['나 모둠(10시간)', 6]], question: '변화(성과)가 더 큰 모둠은?', choices: ['가 모둠(20시간)', '나 모둠(10시간)'] }, sequence: [{ pick: 1 }] },
          art: { draw: 'two paper bar charts side by side, one showing hours volunteered and the other showing skills learned by elderly people holding paper smartphones, arrows connecting effort to change', banner: '많이 한 것과 달라진 것', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '수치는 가상이다.',
      }),

      M({
        id: 'activity.agenda', type: 'activity', title: '사전 협의 확인 항목',
        method: '협의에서 확인할 내용 고르기', tool: 'sortboard', minutes: 18,
        levels: { easy: '꼭 확인·선택 바구니에 카드 두 장씩(4장)을 넣고, 틀리면 되돌아온다.', base: '카드 6장 안팎을 나누고, 협의에서 묻지 않을 카드는 남긴다.', challenge: '헷갈리는 카드까지 나눈 뒤, 빠진 확인 항목 하나를 활동지에 더한다.' },
        activity: {
          title: '기관 협의 확인 항목', tool: 'sortboard',
          teacher: '"가상 노인복지관과 스마트폰 도우미 봉사를 협의해요. 전화 한 통에 꼭 확인할 것과, 여유가 있으면 물을 것을 나눠 봐요." 카드를 넣을 때마다 "이걸 모르고 가면 당일에 무슨 일이 생길까요?"라고 묻는다. "기관이 알아서 준비해 주겠죠"라는 학생에게 "기관은 우리 인원과 시간을 언제 알 수 있을까요?"라고 되묻는다. 응급 연락 방법과 개인 연락처 교환 규칙은 꼭 확인할 항목이라는 점을 짚는다.',
          task: '기관 사전 협의 항목 카드를 꼭 확인·선택 바구니에 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('가상 노인복지관 사전 협의 항목 카드를 꼭 확인·선택 바구니에 나누세요(묻지 않을 카드는 남겨요).', ['꼭 확인', '선택'], [
              ['봉사 날짜·시간과 참여 인원', '어르신이 실제로 어려워하는 것', '응급 상황 때 연락할 담당자'],
              ['기념사진을 찍어도 되는지', '활동 뒤 소감을 나눌 시간'],
            ], { k: 2, hard: [['개인 연락처를 주고받지 않는 규칙'], ['다음 회차 가능 여부']], traps: ['어르신들의 집 주소', '복지관 예산 규모'], d: 0.3 }),
            SBQ('가상 어린이도서관 책 읽어 주기 봉사의 협의 항목을 나누세요.', ['꼭 확인', '선택'], [
              ['아이들 나이와 인원', '활동 공간과 보호자 동반 여부', '읽어 줄 책을 누가 고르는지'],
              ['활동 뒤 도서관 둘러보기', '다음 달 행사 참여'],
            ], { k: 2, traps: ['아이들의 이름과 학교'], d: 0.35 }),
            SBQ('협의 뒤 정리할 내용을 안전 계획·역할 분담 바구니에 나누세요.', ['안전 계획', '역할 분담'], [
              ['이동은 인솔 선생님과 함께 걸어서', '응급 시 담당자에게 먼저 알리기', '개인 연락처 주고받지 않기'],
              ['도우미 짝 정하기', '기록 담당 정하기', '시간 지킴이 정하기'],
            ], { k: 2, traps: ['늦으면 각자 알아서 가기'], d: 0.35, more: { conclude: '사전 협의는 기관의 필요, 일정, 안전 규칙을 먼저 묻는 것이에요. 협의한 내용이 안전 계획과 역할 분담이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '카드에 없지만 협의에서 꼭 물어야 할 항목 하나와 그 까닭을 쓰세요.' }] },
        notes: '기관은 모두 가상이다. 수혜자의 개인정보(이름·주소·연락처)는 협의 항목에서도 받지 않는다.',
      }),
      M({
        id: 'activity.safety', type: 'activity', title: '봉사 당일 안전 갈림길',
        method: '안전 계획 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(인솔 지연)에서 고르고 결과를 본 뒤 근거를 고른다.', base: '두 번째 갈림길(어르신이 어지러워함)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(개인 연락처 요청)까지 가서 근거 세 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '봉사 당일 갈림길', tool: 'dilemma',
          teacher: '"계획대로 되지 않는 날이 진짜 안전 계획을 시험해요." 선택마다 모둠·기관·어르신에게 간 영향을 읽게 한다. "선생님이 늦으면 우리끼리 가도 되잖아요, 고등학생인데"라는 학생에게 "길을 잃은 친구가 생기면 누가 인원을 확인하나요?"라고 묻는다. 셋째 갈림길에서 혼자 찾아가는 길을 고른 학생에게, 좋은 뜻도 기관·학교가 모르는 활동이 되면 보호받지 못한다고 짚는다.',
          task: '봉사 당일 갈림길을 따라가며 안전 계획에 맞는 선택을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('봉사 모둠이 안전 계획대로 하루를 보내는 길을 가고 근거를 고르세요.', DAY, [['wait', 'staff', 'policy']], DAY_R, ['plan', 'tell'], { d: 0.4, hardReasons: ['plan', 'tell', 'rule'] }),
            EXPLOREQ('먼저 출발한 길과 직접 부축한 길도 끝까지 가 보고 결과를 견주세요.', DAY, DAY_R, ['먼저 출발한 길의 결과를 확인했다', '직접 부축한 길의 결과를 확인했다'], { d: 0.35 }),
            DILQ('공원 정화 봉사 중 비가 쏟아지는 상황에서 안전한 길을 가고 근거를 고르세요.', { text: '가상 공원 정화 봉사 30분째, 갑자기 비가 쏟아지고 천둥소리가 난다. 아직 구역의 절반이 남았다.', who: '봉사 모둠', motif: 'storm', choices: [
              { id: 'stop', text: '안전 계획대로 활동을 멈추고 관리소 건물로 모인다', result: '인솔 선생님이 인원을 확인한다.', impact: [{ who: '모둠', text: '모두 안전하다', tone: 1 }],
                next: { text: '비가 그치지 않는다. 남은 구역은 어떻게 할까?', choices: [
                  { id: 'later', text: '관리소와 다음 날짜를 다시 정한다', result: '다음 주에 남은 구역을 마친다.', impact: [{ who: '공원', text: '정화가 이어진다', tone: 1 }], ending: '멈춤과 다시 정하기도 안전 계획의 일부다.' },
                  { id: 'rush', text: '빗속에 서둘러 마저 끝낸다', result: '미끄러져 넘어지는 사람이 생긴다.', impact: [{ who: '모둠', text: '다칠 위험이 커진다', tone: -1 }], ending: '목표를 채우려 위험을 무릅쓰면 봉사의 뜻이 흔들린다.' }] } },
              { id: 'tree', text: '큰 나무 아래에서 비를 피하며 기다린다', result: '천둥이 가까워진다.', impact: [{ who: '모둠', text: '번개 위험이 있는 곳에 있다', tone: -1 }], ending: '천둥이 칠 때 나무 아래는 피할 곳이 아니다.' }] },
              [['stop', 'later']], [{ id: 'stoprule', text: '날씨가 나빠지면 멈추는 규칙을 따른다' }, { id: 'reschedule', text: '못 한 일은 기관과 다시 일정을 정한다' }, { id: 'finish', text: '시작한 일은 무슨 일이 있어도 끝낸다', why: '안전이 목표보다 먼저예요.' }], ['stoprule', 'reschedule'], { d: 0.35, more: { conclude: '안전 계획은 이동·날씨·응급·개인 접촉에서 멈추고 알리는 규칙이에요. 계획이 있으면 바뀐 상황에서도 길을 잃지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 봉사의 안전 계획에 꼭 넣을 "멈추고 알리는" 규칙 하나를 쓰세요.' }] },
      }),
      M({
        id: 'activity.indicator', type: 'activity', title: '성과 지표 정하기',
        method: '성과 지표 정하기 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문장 틀을 보고 봉사 목표에 맞는 성과 지표 하나와 측정 방법을 쓴다.', base: '성과 지표 두 개와 측정 방법을 쓰고 기준표로 점검한다.', challenge: '측정 시점(처음·끝)을 넣고 기준 하나를 더 점검한다.' },
        activity: {
          title: '성과 지표와 측정', tool: 'rubric-writing',
          teacher: '"성과 지표는 \'우리가 얼마나 했나\'가 아니라 \'상대에게 무엇이 달라졌나\'를 재는 기준이에요." 산출(봉사 시간·참여 인원)과 성과(혼자 할 수 있게 된 기능 수·만족도)를 칠판에 나눠 적는다. "봉사 시간 20시간 달성"을 지표로 쓴 학생에게 "그건 우리가 한 양이에요. 어르신에게 생긴 변화는 무엇으로 잴까요?"라고 묻는다. 측정은 수혜자의 이름 없이, 기관과 정한 방법으로 한다는 점을 짚는다.',
          task: '가상 봉사 목표에 맞는 성과 지표와 측정 방법을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 봉사 "어르신 스마트폰 도우미"의 성과 지표 두 개와 측정 방법을 쓰고 점검하세요.', '성과 지표 두 개와 측정 방법을 2~4문장으로 쓰세요.', ['지표가 수혜자에게 생긴 변화를 잰다', '지표마다 측정 방법을 썼다', '이름 없이 잴 수 있게 썼다'], { min: 50, max: 300, must: [['지표']], starter: '첫째 지표는 ~이고, ~로 잰다. 둘째 지표는 ~이고, ~로 잰다.', sample: '첫째 지표는 어르신이 혼자 할 수 있게 된 기능 수이고, 활동 끝에 확인표로 잰다. 둘째 지표는 다음 회차에도 오고 싶다는 어르신 비율이고, 이름 없는 설문으로 잰다.', plus: '처음과 끝의 측정 시점을 썼다', d: 0.35 }),
            RWQ('가상 봉사 "어린이도서관 책 읽어 주기"의 성과 지표 두 개와 측정 방법을 쓰고 점검하세요.', '성과 지표 두 개와 측정 방법을 2~4문장으로 쓰세요.', ['지표가 아이들에게 생긴 변화를 잰다', '지표마다 측정 방법을 썼다', '산출(시간·횟수)과 섞지 않았다'], { min: 50, max: 300, must: [['지표']], plus: '처음과 끝의 측정 시점을 썼다', d: 0.4 }),
            RWQ('같은 봉사의 산출과 성과를 한 문단으로 견주어 쓰고 점검하세요.', '산출 지표 하나와 성과 지표 하나를 견주어, 왜 성과 지표가 필요한지 한 문단으로 쓰세요.', ['산출 지표를 썼다', '성과 지표를 썼다', '둘의 차이를 까닭과 함께 썼다'], { min: 60, max: 350, must: [['산출'], ['성과']], d: 0.4, more: { conclude: '산출은 우리가 한 양, 성과는 상대에게 생긴 변화예요. 성과 지표가 있어야 봉사를 고쳐 나갈 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 정한 성과 지표를 처음과 끝에 언제 잴지 쓰세요.' }] },
        notes: '측정은 기관과 정한 방법으로, 수혜자 이름 없이 한다. 수치는 가상 예시다.',
      }),
      M({
        id: 'activity.visit', type: 'activity', title: '기관 봉사 실행 기록',
        method: '지역 기관 봉사 실행', tool: 'timer', minutes: 18,
        levels: { easy: '출발 전 안전 점검을 하고, 봉사 타이머를 30분으로 맞춘다.', base: '봉사 타이머를 60분(쉬기 포함)으로 맞추고 활동 기록판을 채운다.', challenge: '성과 지표를 활동 처음·끝에 재어 기록판에 적는다.' },
        activity: {
          title: '봉사 실행과 기록', tool: 'timer',
          teacher: '"오늘은 협의한 가상 노인복지관에서 봉사하는 날이에요(실제 방문은 학교의 체험 활동 절차와 보호자 동의를 거친 날에만 해요)." 출발 전 안전 점검 칸을 함께 소리 내어 확인하고, 활동 타이머를 맞춘다. 점검 칸을 대충 누르는 학생에게 "응급 연락할 담당자 이름을 지금 말할 수 있나요?"라고 묻는다. 기록판에는 수혜자의 이름이 아니라 수만 적는다는 점을 짚는다. 방문이 어려운 학급은 교실 모의 활동으로 같은 문항을 한다.',
          task: '출발 전 안전 점검을 하고, 봉사 타이머를 맞추고, 활동과 성과 지표를 기록판에 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '출발 전 안전 점검 칸을 모두 확인하세요.', toolOptions: { title: '출발 전 안전 점검', safety: ['인솔 선생님과 인원을 확인했다', '기관 담당자 연락 방법을 안다', '이동 길과 모이는 곳을 안다', '개인 연락처를 주고받지 않는 규칙을 안다', '몸이 안 좋으면 바로 말하기로 했다'] }, target: { safety: true }, difficulty: 0.15 },
            { prompt: '봉사 타이머를 25분 활동, 10분 쉬기, 2번으로 맞추세요(쉬기 포함 60분).', toolOptions: { title: '봉사 활동 타이머', labels: ['활동', '쉬기'], timeUnit: 'min', plan: { work: 10, rest: 5, rounds: 1 }, showTotal: true }, target: { plan: { work: 25, rest: 10, rounds: 2 } }, difficulty: 0.25,
              levels: { easy: { prompt: '봉사 타이머를 30분 활동, 한 번으로 맞추세요.', target: { plan: { work: 30, rounds: 1 } } } } },
            { prompt: '활동 기록판에 오늘 도운 어르신 수와 다룬 기능 수를 적으세요(이름은 적지 않아요).', toolOptions: { title: '활동 기록', fields: [{ label: '도운 어르신', unit: '명', step: 1 }, { label: '다룬 기능', unit: '개', step: 1 }] }, target: { records: true }, difficulty: 0.2,
              levels: { challenge: { prompt: '성과 지표를 활동 처음과 끝에 재어 기록판에 적으세요(혼자 할 수 있는 기능 수, 이름은 적지 않아요).', toolOptions: { title: '성과 지표 기록', fields: [{ label: '처음: 혼자 할 수 있는 기능', unit: '개', step: 1 }, { label: '끝: 혼자 할 수 있는 기능', unit: '개', step: 1 }, { label: '도운 어르신', unit: '명', step: 1 }] }, target: { records: true } } } },
            { prompt: '돌아와서 봉사가 안전 계획대로 진행됐는지 스스로 점검하세요.', toolOptions: { title: '돌아와서 점검' }, target: { selfCheck: ['인원이 모두 함께 돌아왔다', '문제가 생겼을 때 담당자에게 알렸다', '수혜자 개인정보를 기록하지 않았다'] }, difficulty: 0.15,
              conclude: '점검하고 출발하고, 시간을 지키고, 이름 없이 기록하고, 돌아와 다시 점검하는 것까지가 봉사 실행이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오늘 봉사 기록을 정리하세요(이름 없이).', columns: ['활동', '산출(시간·인원)', '성과(달라진 점)'], cells: [['', '', '']] }] },
        notes: '실제 기관 방문은 학교의 교외 체험 활동 절차·보호자 동의·기관 협의가 끝난 경우에만 하고, 그렇지 않으면 교실 모의 활동으로 같은 문항을 한다. 기록에 수혜자 이름·연락처를 쓰지 않는다.',
      }),

      M({
        id: 'wrap.call', type: 'wrap', title: '기관 협의 모의 통화',
        method: '기관 협의 모의 통화', tool: 'timer', minutes: 8,
        levels: { easy: '협의 항목 두 개(일정·인원)만 묻는 모의 통화를 한다.', base: '네 항목(일정·인원·필요·응급 연락)을 차례대로 묻는다.', challenge: '교사가 던지는 돌발 질문("오늘 인원이 바뀌면요?")에 답하는 말을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"제가 가상 노인복지관 담당자예요. 2분 동안 모둠 대표가 전화를 걸어 협의 항목을 확인해 봐요." 통화 차례 카드를 먼저 놓게 한 뒤 타이머를 2분으로 맞추고 모의 통화를 한다. 인사 없이 바로 묻는 학생에게 "담당자는 누가 어디서 전화했는지 먼저 알고 싶어 해요"라고 짚는다. 통화 끝에 들은 내용을 되풀이해 확인하는 단계를 빼지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모의 통화', labels: ['통화', '정리'], timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 }, cards: ['들은 내용을 되풀이해 확인한다', '학교와 이름(모둠 이름)을 밝히고 인사한다', '날짜·인원·필요·응급 연락을 차례로 묻는다', '감사 인사를 하고 끊는다'] }, prompt: '모의 통화 타이머를 2분 통화·1분 정리로 맞추고, 통화 차례 카드를 놓으세요.', target: { plan: { work: 2, rest: 1 }, order: ['학교와 이름(모둠 이름)을 밝히고 인사한다', '날짜·인원·필요·응급 연락을 차례로 묻는다', '들은 내용을 되풀이해 확인한다', '감사 인사를 하고 끊는다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '담당자가 "그날 어르신이 예상보다 많이 오실 수도 있어요"라고 할 때 알맞은 답은?', options: ['"그건 그때 알아서 할게요"', '"인솔 선생님과 상의해 짝을 늘릴 수 있는지 다시 연락드릴게요"', '"그럼 봉사를 취소할게요"'], answer: 1, difficulty: 0.2, explain: '바뀔 수 있는 조건은 학교와 상의해 다시 알리겠다고 답해요.' },
            { type: 'short', prompt: '돌발 질문 하나를 떠올리고, 그에 답할 말을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '기관 협의 통화 메모',
          items: [
            { type: 'table', prompt: '모의 통화에서 확인한 내용을 메모하세요.', columns: ['항목', '확인한 내용'], cells: [['날짜·시간', ''], ['인원', ''], ['기관의 필요', ''], ['응급 연락', '']] },
            { type: 'short', prompt: '통화에서 빠뜨린 항목이 있다면 다시 연락할 때 할 말을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.share', type: 'wrap', title: '성과 공유판 꾸미기',
        method: '성과 공유 게시물', tool: 'collage', minutes: 8,
        levels: { easy: '조각 세 개(지표 결과·활동·감사)로 공유판을 꾸민다.', base: '조각 다섯 개 안팎으로 꾸미고 산출과 성과를 구별해 담는다(판정은 세 개 이상).', challenge: '활동지에 이번 봉사의 한계 칸을 채운다.' },
        wrap: {
          teacher: '"사진 대신 조각으로 성과 공유판을 꾸며요. 수혜자 얼굴·이름은 넣지 않아요." 큰 조각은 성과(달라진 점), 작은 조각은 산출(한 양)로 정하고 꾸미게 한다. "많이 한 걸 크게 보여 줘야죠"라는 학생에게 "보는 사람이 알고 싶은 건 우리가 한 양일까요, 달라진 것일까요?"라고 묻는다. 잘 안 된 점(한계)도 공유판에 남기는 것이 다음 봉사를 돕는다고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'heart', 'star'], sizes: ['s', 'm', 'l'] }, prompt: '큰 조각(성과) 하나 이상과 작은 조각(산출) 하나 이상을 넣어 조각 세 개 이상으로 성과 공유판을 꾸미고 점검하세요.', target: { has: [{ size: 'l', min: 1 }, { size: 's', min: 1 }], pieces: { min: 3 }, selfCheck: ['성과(달라진 점)를 크게 보였다', '산출(한 양)을 작게 보였다', '수혜자의 얼굴·이름을 넣지 않았다'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '성과 공유 게시물에 가장 먼저 보여야 할 것은?', options: ['봉사한 시간의 합', '수혜자에게 달라진 점', '참여한 학생 명단'], answer: 1, difficulty: 0.15, explain: '공유의 중심은 우리가 한 양이 아니라 상대에게 생긴 변화예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '성과 공유판',
          items: [
            { type: 'table', prompt: '공유판에 담은 내용을 정리하세요.', columns: ['산출', '성과', '한계'], cells: [['', '', '']] },
            { type: 'short', prompt: '다음 봉사에서 성과를 더 키울 방법 하나를 쓰세요.' },
          ],
        },
        notes: '공유판에 수혜자 사진·이름을 넣지 않는다. 수치는 기관과 정한 방법으로 잰 값만 쓴다.',
      }),
    );
  }


  // ======================================================================================================
  // 12학년 1. 고3 생활 계획과 진로 불안 (적응 및 개척 활동 — 정서 지원)
  // ======================================================================================================
  {
    const M = MOD('g12-adapt', [12]);
    const WHEEL = [['학업', 8], ['건강', 3], ['관계', 4], ['쉼', 2]];
    const APPLY = { text: '가상 고등학교 3학년 나래. 원서 마감이 일주일 남았다. 어느 학과를 쓸지 아직 정하지 못했고, 밤마다 가슴이 답답하다.', who: '나래', motif: 'moon', choices: [
      { id: 'scroll', text: '잠들기 전 친구들의 합격·원서 소식을 계속 찾아본다', result: '새벽 2시까지 화면을 넘기며 불안이 더 커진다.', impact: [{ who: '나래', text: '잠이 모자라고 비교가 커진다', tone: -1 }], ending: '남의 소식을 찾아볼수록 내 결정은 더 흐려진다.' },
      { id: 'write', text: '불안한 까닭을 종이에 적어 \'정보가 모자란 것\'과 \'걱정\'을 나눈다', result: '학과 두 곳의 교육 과정을 아직 비교해 보지 않았다는 것을 찾는다.', impact: [{ who: '나래', text: '할 수 있는 일이 보인다', tone: 1 }],
        next: { text: '할 일은 보였지만 혼자 정하기에는 여전히 막막하다.', choices: [
          { id: 'consult', text: '담임 선생님·진로 선생님께 상담을 신청한다', result: '두 학과의 차이와 나래의 관심을 함께 정리한다.', impact: [{ who: '나래', text: '혼자 지던 짐이 가벼워진다', tone: 1 }],
            next: { text: '상담 뒤에도 마감 전날 밤 다시 불안이 올라온다.', choices: [
              { id: 'routine', text: '정해 둔 쉼(산책·잠자리 시각)을 지키고 다음 날 아침에 최종 확인한다', result: '잠을 자고 아침에 차분히 원서를 마무리한다.', impact: [{ who: '나래', text: '불안이 있어도 결정을 해낸다', tone: 1 }], ending: '불안을 없애는 것이 아니라, 불안이 있어도 할 일을 해내는 길을 찾는 것이다.' },
              { id: 'allnight', text: '밤새 다시 처음부터 고민한다', result: '아침에 머리가 무겁고 마감 시각이 빠듯해진다.', impact: [{ who: '나래', text: '지친 채 결정하게 된다', tone: -1 }], ending: '지친 밤의 고민은 결정을 더 어렵게 만든다.' }] } },
          { id: 'alone', text: '남에게 짐이 될까 봐 혼자 해결하려 한다', result: '마감 하루 전까지 답답함이 이어진다.', impact: [{ who: '나래', text: '불안이 쌓인다', tone: -1 }], ending: '도움을 청하는 것은 약함이 아니라 문제를 푸는 방법이다.' }] } },
      { id: 'avoid', text: '생각하지 않으려고 원서 이야기를 피한다', result: '마감 하루 전 급하게 아무 학과나 고른다.', impact: [{ who: '나래', text: '고른 까닭을 말할 수 없다', tone: -1 }], ending: '피하면 잠시 편하지만 결정은 더 급해진다.' }] };
    const APPLY_R = [{ id: 'split', text: '불안을 \'할 수 있는 일\'과 \'걱정\'으로 나누면 다음 행동이 보인다' }, { id: 'help', text: '믿을 만한 어른과 나누면 혼자 지던 짐이 가벼워진다' }, { id: 'rest', text: '잠과 쉼을 지켜야 결정할 힘이 남는다' }, { id: 'compare', text: '친구 소식과 비교하면 동기가 생긴다', why: '비교는 동기보다 불안을 키우기 쉬워요.' }, { id: 'alone', text: '불안은 혼자 견뎌야 강해진다', why: '혼자 견디기보다 도움 받을 곳을 쓰는 것도 힘이에요.' }];
    const DAY = [['일어나기', 6, 30], ['아침 식사', 7, 0], ['저녁 식사', 6, 0], ['산책', 7, 30], ['잠자리', 11, 30]];

    MODS.push(
      M({
        id: 'intro.wheel', type: 'intro', title: '고3 생활 네 영역 점수',
        method: '생활 네 영역 점수 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 네 영역(학업·건강·관계·쉼) 막대를 함께 그리고 가장 낮은 영역을 짚는다.', base: '나래의 3월과 지금 점수를 칠판 표로 견주며 어느 영역이 줄었는지 말한다.', challenge: '칠판에 그은 목표선(영역마다 5점)과 견주어 목표에 못 닿은 영역을 짚는다.' },
        intro: {
          teacher: '"가상 고등학교 3학년 나래가 학업·건강·관계·쉼 네 영역의 만족 점수를 10점 만점으로 매겼어요." 시연 단추로 막대가 그려지는 모습을 보여 준다. "고3은 원래 공부만 하는 거잖아요"라는 말이 나오면 "건강 3점, 쉼 2점으로 학업 8점을 몇 달이나 이어 갈 수 있을까요?"라고 되묻는다. 오늘은 오래 이어 갈 수 있는 생활 계획과 진로 불안을 다루는 법을 이야기한다고 밝히고, 내 점수는 걷지 않는 활동지에만 적게 한다.',
          student: '가상 인물 나래의 생활 네 영역 점수를 막대그래프로 그리고, 어느 영역이 기울어 있는지 살펴보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '나래의 생활 만족 점수(가상, 10점 만점)', unit: '점', xLabel: '영역', yLabel: '만족 점수', data: WHEEL, max: 10, scale: 1, given: [0] }, sequence: [{ build: true }] },
          art: { draw: 'a paper wheel divided into four colored segments for study, health, relationships and rest, one segment much larger than the others, a tired paper student leaning on a stack of books beside it', banner: '기울어진 바퀴는 오래 못 굴러요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '나래는 가상 인물이다. 학생의 실제 생활 점수를 걷거나 발표시키지 않는다.',
      }),
      M({
        id: 'intro.compare', type: 'intro', title: '비교가 커지는 밤',
        method: '비교가 커지는 장면 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 한 장면(친구 합격 소식)의 마음 크기 눈금을 함께 짚는다.', base: '두 장면(합격 소식·자기소개서 자랑 글)을 이어 읽으며 마음 크기가 어떻게 바뀌는지 말한다.', challenge: '세 장면(화면을 끈 뒤 산책)까지 이어 읽고, 마음이 줄어든 까닭을 말한다.' },
        intro: {
          teacher: '"밤 11시, 가상 인물 나래가 SNS에서 친구의 합격 소식을 봤어요. 나래의 불안은 얼마나 클까요?" 시연 단추로 눈금이 움직이는 모습을 보여 준다. "비교해야 자극이 돼서 공부하죠"라는 말이 나오면 "자극이 된 다음 날 나래는 공부가 더 잘됐을까요, 잠을 못 잤을까요?"라고 되묻는다. 비교는 남의 가장 좋은 순간과 내 가장 힘든 순간을 견주게 만든다는 점을 짚는다. 학생 자신의 불안 크기는 묻지 않는다.',
          student: '나래가 밤에 친구의 합격 소식을 본 장면을 읽고, 나래의 불안이 얼마나 클지 눈금에서 골라 보세요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '밤 11시, 나래는 SNS에서 친구의 합격 소식을 연달아 보았다.', feeling: '불안', steps: 5, ask: '나래의 불안은 얼마나 클까요?', after: '남의 가장 좋은 순간과 내 가장 힘든 순간을 견주면 불안이 커져요.' }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper bedroom at night with a glowing phone screen showing paper congratulation banners, a student hugging knees on the bed, a crescent moon outside the window', banner: '비교는 밤에 더 커져요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '나래는 가상 인물이다. 학생에게 자기 불안의 크기나 비교 경험을 말하게 하지 않는다.',
      }),

      M({
        id: 'activity.week', type: 'activity', title: '나래의 하루 시각 맞추기',
        method: '한 주 생활 시간 배분', tool: 'clock', minutes: 18,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다.', base: '평일 다섯 구간(기상·아침·저녁·산책·잠자리) 시각을 5분 단위로 맞춘다.', challenge: '1분 단위로 맞추고, 마지막 구간을 주말 계획(늦잠 없이 한 시간만 늦게)으로 바꿔 맞춘다.' },
        activity: {
          title: '평일 다섯 구간', tool: 'clock',
          teacher: '"나래가 학업·건강·관계·쉼을 지키는 하루를 짰어요. 시계로 하루의 기둥 시각을 맞춰 봐요." 시각마다 "이 시각이 무너지면 어느 영역이 먼저 흔들릴까요?"라고 묻는다. 잠자리 시각을 새벽 2시로 미루려는 학생에게 "아침 6시 30분에 일어나려면 몇 시간을 자게 될까요?"라고 되묻는다. 주말 문항에서 몰아 자기보다 평일과 한 시간 안쪽으로 맞추는 까닭을 짚는다. 시각은 나래의 가상 계획이며 정답 생활표가 아니라고 밝힌다.',
          task: '가상 인물 나래의 생활 계획에 나온 시각을 시계에 나타내요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1, showMinuteMarks: false } },
          items: [
            { prompt: `나래는 평일 아침 ${DAY[0][1]}시 ${DAY[0][2]}분에 일어나요. 일어나는 시각을 시계에 나타내세요.`, toolOptions: {}, target: { h: DAY[0][1], m: DAY[0][2] }, difficulty: 0.1 },
            { prompt: '일어나고 30분 뒤 아침을 먹어요. 아침 식사 시각을 나타내세요.', toolOptions: {}, target: { h: DAY[1][1], m: DAY[1][2] }, difficulty: 0.2 },
            { prompt: '자율학습 전 저녁 6시에 식사로 건강 영역을 지켜요. 저녁 식사 시각을 나타내세요.', toolOptions: {}, target: { h: DAY[2][1], m: DAY[2][2] }, difficulty: 0.2 },
            { prompt: '저녁 식사 뒤 한 시간 반이 지나 친구와 30분 산책하며 쉼과 관계를 챙겨요. 산책을 시작하는 시각을 나타내세요.', toolOptions: {}, target: { h: DAY[3][1], m: DAY[3][2] }, difficulty: 0.3 },
            { prompt: '아침 6시 30분에 일어나며 7시간을 자려면 잠자리에 드는 시각을 나타내세요.', toolOptions: {}, target: { h: DAY[4][1], m: DAY[4][2] }, difficulty: 0.35,
              levels: { challenge: { prompt: '주말에는 평일보다 한 시간만 늦게 일어나요. 주말 일어나는 시각을 나타내세요(주말 계획).', target: { h: 7, m: 30 } } },
              conclude: '잠자리와 기상 시각이 하루의 기둥이에요. 주말에 몰아 자기보다 평일과 비슷하게 지키면 월요일이 덜 무너져요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 하루의 기둥 시각을 정해 보세요(걷지 않음 — 나만 봐요).', columns: ['구간', '평일', '주말'], cells: [['일어나기', '', ''], ['식사', '', ''], ['쉼·운동', '', ''], ['잠자리', '', '']] }] },
        notes: '시각은 가상 인물 나래의 계획이다. 학생의 실제 생활표를 걷지 않는다. 7시간 수면은 이 수업의 연습용 예시 값이다.',
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '나래의 생활 계획서',
        method: '지속 가능한 생활 계획서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '학업·쉼 두 영역만 문장 틀을 보고 쓴다.', base: '학업·건강·관계·쉼 네 영역을 담은 생활 계획을 쓰고 기준표(현실성·쉼 포함·점검)로 점검한다.', challenge: '네 영역 계획에 더해 계획이 무너진 주의 대안까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '네 영역 생활 계획', tool: 'rubric-writing',
          teacher: '"오래 가는 계획은 꽉 찬 계획이 아니라 지킬 수 있는 계획이에요." 나래의 점수 그래프를 다시 띄우고 기준표 세 항목을 함께 읽는다. \'하루 12시간 공부\'처럼 쉼이 빠진 계획을 쓴 학생에게 "이 계획에서 나래의 건강 3점, 쉼 2점은 어떻게 될까요?"라고 묻는다. \'운동을 열심히 한다\'처럼 막연한 글에는 "언제, 몇 분, 무엇을 할지 써야 지켰는지 확인할 수 있어요"라고 말한다.',
          task: '가상 인물 나래의 지속 가능한 생활 계획을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '나래의 네 영역(학업·건강·관계·쉼)을 담은 한 주 생활 계획을 쓰고 점검하세요.', toolOptions: { topic: '나래의 한 주 생활 계획: 학업·건강·관계·쉼마다 언제, 무엇을, 얼마나 할지 한 문장씩 쓰세요.', minChars: 100, maxChars: 450, sample: '학업은 평일 자율학습 시간에 오늘 배운 과목을 복습한다. 건강은 아침을 거르지 않고 저녁 식사 뒤 30분 걷는다. 관계는 수요일 저녁 산책을 친구와 함께한다. 쉼은 잠자리 시각 11시 30분을 지키고 일요일 오후 두 시간은 공부하지 않는다.' }, target: { selfCheck: ['하루·주의 실제 시간 안에서 할 수 있는 계획이다(현실성)', '쉼과 잠을 계획 안에 넣었다', '지켰는지 확인할 점검 방법이 있다'] }, difficulty: 0.4,
              levels: {
                easy: { prompt: '나래의 학업과 쉼 두 영역 계획을 쓰고 점검하세요(두 영역).', toolOptions: { topic: '나래의 학업 계획과 쉼 계획을 한 문장씩 쓰세요.', minChars: 40, starter: '학업은 ~에 ~를 한다. 쉼은 ~에 ~를 한다.' } },
                challenge: { prompt: '네 영역 계획에 더해, 모의고사 주처럼 계획이 무너진 주의 대안을 쓰고 점검하세요(무너질 때 대안).', toolOptions: { minChars: 140 }, target: { selfCheck: ['하루·주의 실제 시간 안에서 할 수 있는 계획이다(현실성)', '쉼과 잠을 계획 안에 넣었다', '지켰는지 확인할 점검 방법이 있다', '계획이 무너진 주에 지킬 최소 계획을 썼다'] } },
              } },
            RWQ('나래의 처음 계획 \'매일 새벽 2시까지 공부, 주말도 쉬지 않기\'를 기준에 맞게 고쳐 쓰고 점검하세요.', '나래의 처음 계획 "매일 새벽 2시까지 공부, 주말도 쉬지 않기"를 오래 이어 갈 수 있게 고쳐 쓰세요.', ['잠자리 시각을 현실적으로 바꿨다', '쉼 시간을 넣었다', '고친 까닭을 썼다'], { min: 50, max: 300, starter: '나래의 계획을 ~로 고친다. 왜냐하면 ~', d: 0.35 }),
            RWQ('나래가 \'비교\' 때문에 계획이 흔들릴 때 쓸 자기 규칙을 두 문장으로 쓰고 점검하세요.', '나래가 친구 소식을 보고 계획이 흔들릴 때 지킬 자기 규칙을 두 문장으로 쓰세요.', ['비교가 생기는 상황을 짚었다', '그때 할 구체적 행동을 썼다', '남이 아니라 어제의 나와 견주는 말로 끝맺었다'], { min: 40, max: 250, sent: [2, 3], d: 0.35, more: { conclude: '지속 가능한 계획은 쉼을 넣고, 무너질 때의 대안과 흔들릴 때의 규칙까지 갖춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 생활에서 가장 먼저 지키고 싶은 영역 하나와 그 방법을 쓰세요(걷지 않음 — 나만 봐요).' }] },
        notes: '채점·자기 점검은 가상 인물 나래의 계획으로 한다. 학생 자신의 생활 계획은 걷지 않는 활동지에 쓴다.',
      }),
      M({
        id: 'activity.anxiety', type: 'activity', title: '원서 마감 앞 갈림길',
        method: '진로 불안 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(불안할 때 무엇을 할지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(혼자 할지 도움을 청할지)까지 가서 근거 한 장을 고른다.', challenge: '세 번째 갈림길(마감 전날 밤)까지 가서 근거 두 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '나래의 일주일', tool: 'dilemma',
          teacher: '"원서 마감 일주일 전, 나래는 학과를 정하지 못해 밤마다 답답해요. 여러분이 나래의 친구라면 어떤 길을 권할까요?" 첫 갈림길에서 \'친구 소식을 찾아본다\'를 고르는 학생에게 "정보를 모으는 것과 남의 결과를 찾아보는 것은 같을까요?"라고 묻는다. \'혼자 해결\'을 고르면 "남에게 짐이 된다는 생각, 정말 그럴까요? 담임 선생님은 이런 상담을 하려고 계세요"라고 말한다. 학생 자신의 진로 결정이나 불안은 묻지 않는다고 미리 밝힌다.',
          task: '나래의 갈림길을 따라가며 진로 불안을 다루는 행동과 그 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('나래가 불안을 다루며 결정을 해내는 길을 고르고 근거를 고르세요.', APPLY, [['write', 'consult', 'routine']], APPLY_R, ['split'], { d: 0.4, hardReasons: ['split', 'help'] }),
            EXPLOREQ('\'소식 찾아보기\'·\'피하기\' 길도 끝까지 가 보고 결과를 견주세요.', APPLY, APPLY_R, ['다른 길의 끝 장면을 확인했다', '나래의 잠과 결정에 어떤 영향이 갔는지 짚었다'], { d: 0.35 }),
            DILQ('나래의 친구 하람이 "나만 아직 아무것도 못 정했어"라며 울먹여요. 친구로서 알맞은 길을 고르고 근거를 고르세요.', { text: '점심시간, 하람이 "다들 정했는데 나만 아무것도 못 정했어"라며 울먹인다.', who: '하람', motif: 'cloud', choices: [
              { id: 'push', text: '"빨리 정해, 시간 없어"라고 다그친다', result: '하람이 더 위축되어 말을 멈춘다.', impact: [{ who: '하람', text: '불안이 커진다', tone: -1 }], ending: '다그침은 불안을 줄이지 못한다.' },
              { id: 'listen', text: '끝까지 듣고 "많이 답답했겠다"라고 말한다', result: '하람이 조금 진정하고 무엇이 막막한지 털어놓는다.', impact: [{ who: '하람', text: '마음이 가라앉는다', tone: 1 }],
                next: { text: '하람이 "요즘 잠도 못 자고 밥도 못 먹겠어"라고 덧붙인다.', choices: [
                  { id: 'adult', text: '함께 상담 선생님이나 Wee 클래스에 가 보자고 권한다', result: '하람이 다음 날 상담을 신청한다.', impact: [{ who: '하람', text: '도움을 받기 시작한다', tone: 1 }], ending: '잠과 식사까지 흔들리는 신호는 어른과 함께 살핀다.' },
                  { id: 'secret', text: '둘만의 비밀로 하고 혼자 위로를 이어 간다', result: '하람의 신호가 몇 주째 이어진다.', impact: [{ who: '하람', text: '도움이 늦어진다', tone: -1 }], ending: '친구의 위로도 힘이지만, 계속되는 신호는 어른과 잇는다.' }] } }] },
              [['listen', 'adult']], [{ id: 'hear', text: '먼저 끝까지 들어 주면 불안이 가라앉는다' }, { id: 'link', text: '잠·식사가 흔들리면 학교 안 어른과 잇는다' }, { id: 'hurry', text: '빨리 정하라고 다그쳐야 친구가 움직인다', why: '다그침은 불안을 키우기 쉬워요.' }], ['hear', 'link'], { d: 0.35, more: { conclude: '불안은 혼자 지는 짐이 아니에요. 나누고, 할 일을 나누고, 신호가 크면 어른과 함께해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '불안할 때 \'할 수 있는 일\'과 \'걱정\'을 나누는 방법을 나래에게 권하는 한 문장으로 쓰세요.' }] },
        notes: '나래·하람은 가상 인물이다. 학생의 실제 진로 결정·불안을 묻거나 채점하지 않는다. 도움 경로는 학교 안(담임·상담 선생님·Wee 클래스·보건실)과 보호자로 둔다.',
      }),
      M({
        id: 'activity.help', type: 'activity', title: '불안 크기와 도움 받을 곳',
        method: '불안 다루기 방법과 도움 받을 곳 잇기', tool: 'wordcards', minutes: 18,
        levels: { easy: '불안 상황 두 칸에 알맞은 방법 카드를 넣는다.', base: '불안 크기가 다른 상황 네 칸에 방법 카드를, 다른 네 칸에 도움 받을 곳 카드를 넣는다.', challenge: '도움을 청할 때 건넬 첫마디 카드까지 골라 넣는다.' },
        activity: {
          title: '상황에 맞는 길', tool: 'wordcards',
          teacher: '"불안에도 크기가 있어요. 작은 불안은 내가 다룰 수 있고, 큰 불안이 오래가면 도움을 청해요." 칸마다 "이 상황은 며칠째인가요? 잠과 식사까지 흔들리나요?"라고 묻는다. 작은 불안에 \'Wee 클래스 상담\'을 넣는 학생에게 "그것도 좋은 길이에요. 그런데 먼저 혼자 해 볼 수 있는 방법은 무엇일까요?"라고 말하고, 큰 불안에 \'참고 견디기\'를 넣으면 "몇 주째 잠을 못 잔다면 혼자 참는 게 맞을까요?"라고 되묻는다.',
          task: '가상 인물들의 불안 상황 빈칸에 알맞은 방법과 도움 받을 곳 카드를 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '불안 크기가 다른 상황마다 알맞은 방법 카드를 빈칸에 넣으세요.', toolOptions: { mode: 'fill', slots: [{ id: 'a', label: '모의고사 전날 조금 떨린다 → ___' }, { id: 'b', label: '친구 소식을 보면 마음이 가라앉는다 → ___' }, { id: 'c', label: '할 일이 많아 막막하다 → ___' }, { id: 'd', label: '두 주째 잠을 못 자고 밥맛이 없다 → ___' }], cards: ['천천히 숨 고르고 준비물 점검하기', '정해 둔 시각에 SNS 끄기', '할 일을 적고 작은 일부터 하기', '상담 선생님께 말하기', '밤새 혼자 참기'] }, target: { fill: { a: '천천히 숨 고르고 준비물 점검하기', b: '정해 둔 시각에 SNS 끄기', c: '할 일을 적고 작은 일부터 하기', d: '상담 선생님께 말하기' } }, difficulty: 0.3,
              levels: { easy: { prompt: '불안 상황 두 칸에 알맞은 방법 카드를 넣으세요(두 짝).', toolOptions: { slots: [{ id: 'a', label: '모의고사 전날 조금 떨린다 → ___' }, { id: 'd', label: '두 주째 잠을 못 자고 밥맛이 없다 → ___' }], cards: ['천천히 숨 고르고 준비물 점검하기', '상담 선생님께 말하기', '밤새 혼자 참기'] }, target: { fill: { a: '천천히 숨 고르고 준비물 점검하기', d: '상담 선생님께 말하기' } } } } },
            { prompt: '가상 인물의 상황마다 먼저 찾아갈 학교 안 도움 받을 곳을 빈칸에 넣으세요.', toolOptions: { mode: 'fill', slots: [{ id: 'a', label: '원서 쓸 학과를 두고 고민한다 → ___' }, { id: 'b', label: '불안해서 수업 중 숨이 가쁘고 어지럽다 → ___' }, { id: 'c', label: '마음이 계속 무겁고 이야기할 곳이 필요하다 → ___' }, { id: 'd', label: '집에서도 잠을 못 자 가족이 걱정한다 → ___' }], cards: ['담임·진로 선생님', '보건실', 'Wee 클래스·상담실', '보호자와 함께 상담', '혼자 인터넷 검색'] }, target: { fill: { a: '담임·진로 선생님', b: '보건실', c: 'Wee 클래스·상담실', d: '보호자와 함께 상담' } }, difficulty: 0.3,
              levels: { easy: { prompt: '상황 두 칸에 먼저 찾아갈 학교 안 도움 받을 곳을 넣으세요(두 짝).', toolOptions: { slots: [{ id: 'a', label: '원서 쓸 학과를 두고 고민한다 → ___' }, { id: 'b', label: '불안해서 수업 중 숨이 가쁘고 어지럽다 → ___' }], cards: ['담임·진로 선생님', '보건실', '혼자 인터넷 검색'] }, target: { fill: { a: '담임·진로 선생님', b: '보건실' } } } } },
            { prompt: '상담 선생님께 도움을 청할 때 건넬 수 있는 첫마디 카드를 모두 고르세요.', toolOptions: { mode: 'pick', basket: '건넬 수 있는 첫마디', cards: ['"요즘 잠을 잘 못 자서 이야기하고 싶어요."', '"별일 아닌데 그냥 바쁘시죠?"', '"학과를 못 정해서 같이 정리해 주실 수 있어요?"', '"아무것도 아니에요, 괜찮아요."', '"언제 상담 시간이 되는지 여쭤봐도 될까요?"'] }, target: { pick: ['"요즘 잠을 잘 못 자서 이야기하고 싶어요."', '"학과를 못 정해서 같이 정리해 주실 수 있어요?"', '"언제 상담 시간이 되는지 여쭤봐도 될까요?"'] }, difficulty: 0.35,
              conclude: '도움을 청하는 첫마디는 거창하지 않아도 돼요. 지금 어떤지, 무엇이 필요한지 한 문장이면 시작이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교 도움 받을 곳을 채우세요(교사와 함께 확인).', columns: ['도움 받을 곳', '어디에 있나', '언제 갈 수 있나'], cells: [['담임·진로 선생님', '', ''], ['Wee 클래스·상담실', '', ''], ['보건실', '', '']] }] },
        notes: '교구 한계: wordcards 의 짝(match)은 영어 낱말용이라, 상황과 방법·도움 받을 곳 잇기를 빈칸 채우기(fill)로 했다. 상황은 가상 인물의 것이며 학생 자신의 불안을 묻지 않는다.',
      }),

      M({
        id: 'wrap.circle', type: 'wrap', title: '응원 나눔 원',
        method: '응원 나눔 원', tool: 'timer', minutes: 8,
        levels: { easy: '둥글게 앉아 한 바퀴 동안 오른쪽 친구에게 응원 한마디를 건넨다.', base: '두 바퀴를 돌며, 두 번째 바퀴는 왼쪽 친구에게 건넨다.', challenge: '\'열심히 했어\' 대신 본 행동을 짚는 구체적 인정 말로 건네고 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"고3 한 해, 결과는 저마다 다르지만 노력은 서로 보았어요. 열 명씩 모둠을 지어 둥글게 앉아 한 사람 20초씩 옆 친구에게 응원 한마디를 건네요." 타이머를 맞추고 신호와 함께 돈다. 성적·합격 이야기가 나오면 "결과 말고, 친구가 한 행동 가운데 본 것을 말해 볼까요? 예를 들면 \'아침마다 먼저 와서 문 열어 준 것\'"이라고 돌린다. 말하기 어려운 학생은 "고마워"만 해도 된다고 미리 말해 둔다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '응원 나눔 원', labels: ['한마디', '넘기기'], plan: { work: 10, rest: 10, rounds: 8 } }, prompt: '한 사람 20초 한마디, 5초 넘기기로 한 모둠 열 명이 돌도록 타이머를 맞추세요(초).', target: { plan: { work: 20, rest: 5, rounds: 10 } }, difficulty: 0.15 },
            { type: 'choice', prompt: '구체적인 인정 말로 가장 알맞은 것은?', options: ['"넌 머리가 좋잖아."', '"모둠 발표 때 자료를 끝까지 정리해 준 거 고마웠어."', '"합격하면 한턱내."'], answer: 1, difficulty: 0.15, explain: '구체적 인정은 타고난 것이나 결과가 아니라, 친구가 한 행동을 짚어 말해요.' },
            { type: 'short', prompt: '내가 건넨(또는 건네고 싶은) 구체적 인정 한마디를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '응원 나눔 원',
          items: [
            { type: 'short', prompt: '오늘 들은 응원 가운데 기억에 남는 말을 쓰세요(친구 이름은 쓰지 않아요).' },
            { type: 'short', prompt: '\'잘했어\'를 친구의 행동을 짚는 인정 말로 바꿔 쓰세요.' },
          ],
        },
        notes: '성적·합격 여부를 말하지 않는 약속을 먼저 정한다. 말하기 어려운 학생은 짧게 넘겨도 된다.',
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '생활 계획 주간 점검',
        method: '생활 계획 주간 점검', tool: 'timer', minutes: 8,
        levels: { easy: '교사가 점검 카드 둘(기둥 시각 확인·쉼 지킴 확인)을 먼저 놓아 보이고 함께 놓는다.', base: '점검 순서 카드 넷을 차례로 놓고 스스로 점검 칸을 표시한다.', challenge: '차례에 더해, 쉼이 두 번 빠지면 무엇을 바꿀지 조정 규칙을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"일요일 저녁 10분, 한 주 생활을 점검해 봐요. 점수 매기기가 아니라 다음 주를 고치는 시간이에요." 점검 카드를 차례로 놓게 한 뒤, 스스로 점검 칸에 내가 정할 것을 표시하게 한다. "공부만 못 지켰어요"라는 학생에게 "쉼과 잠은 지켰나요? 그것도 계획의 절반이에요"라고 말한다. 점검표는 걷지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '일요일 10분 점검', cards: ['다음 주 한 가지를 조정한다', '네 영역마다 지킨 날을 센다', '잠자리·기상 기둥 시각을 확인한다', '흔들린 날의 원인을 적는다'] }, prompt: '한 주 생활 계획 점검 카드를 차례로 놓고, 내가 정할 것을 점검하세요.', target: { order: ['잠자리·기상 기둥 시각을 확인한다', '네 영역마다 지킨 날을 센다', '흔들린 날의 원인을 적는다', '다음 주 한 가지를 조정한다'], selfCheck: ['점검할 요일과 시각을 정했다', '다음 주 조정은 한 가지만 고르기로 했다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '생활 계획 점검에 대한 말로 알맞은 것은?', options: ['못 지킨 날이 있으면 계획을 버린다', '흔들린 원인을 찾아 다음 주 한 가지를 조정한다', '공부 시간만 세면 된다'], answer: 1, difficulty: 0.15, explain: '점검은 버리기가 아니라 고치기예요. 학업·건강·관계·쉼을 함께 봐요.' },
            { type: 'short', prompt: '쉼이 한 주에 두 번 빠지면 무엇을 바꿀지 내 조정 규칙을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '한 주 생활 점검',
          items: [
            { type: 'table', prompt: '이번 주 네 영역을 점검하세요(걷지 않음 — 나만 봐요).', columns: ['영역', '지킨 날', '흔들린 원인', '다음 주 조정'], cells: [['학업', '', '', ''], ['건강', '', '', ''], ['관계', '', '', ''], ['쉼', '', '', '']] },
            { type: 'check', prompt: '점검할 때 볼 것에 표시하세요.', options: ['기둥 시각', '지킨 날 세기', '흔들린 원인', '한 가지 조정'] },
          ],
          easy: { note: '"잠자리 시각을 지켰나?"부터 봐요.', items: [{ type: 'short', prompt: '이번 주 잠자리 시각을 지킨 날 수를 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 12학년 2. 자립 예산과 성인의 권리·책임 (기본생활습관 형성 활동 — 자기 관리·민주시민 의식)
  // ======================================================================================================
  {
    const M = MOD('g12-habit', [12]);
    const SPEND = { fn: ['월세', '휴대전화 기본 요금'], vn: ['식재료', '교통비'], vw: ['배달 음식', '새 운동화'], fw: ['영상 구독 서비스', '게임 정기 결제'] };
    const BUD = [
      { id: 'rent', text: '월세', price: 450000 }, { id: 'bill', text: '공과금·통신비', price: 100000 }, { id: 'food', text: '식비', price: 300000 },
      { id: 'bus', text: '교통비', price: 60000 }, { id: 'fun', text: '여가·모임', price: 100000 }, { id: 'clothes', text: '새 옷', price: 150000 },
      { id: 'save', text: '비상금 모으기', price: 100000 }, { id: 'phone', text: '새 휴대전화 할부', price: 80000 },
    ];
    const ROOM = { text: '가상 인물 도윤은 고교 졸업 뒤 가상 도시에서 첫 자취방을 구한다. 마음에 드는 방을 본 날, 중개인이 "오늘 계약하면 싸게 해 줄게요"라고 한다.', who: '도윤', motif: 'house', choices: [
      { id: 'sign', text: '싸다는 말에 계약서를 읽지 않고 바로 서명한다', result: '나중에 관리비·청소비가 따로라는 것을 안다.', impact: [{ who: '도윤', text: '예산보다 매달 돈이 더 나간다', tone: -1 }], ending: '읽지 않은 계약서의 조건도 서명하면 지켜야 할 약속이 된다.' },
      { id: 'read', text: '계약서를 받아 보고 하루 생각할 시간을 달라고 한다', result: '중개인이 마지못해 계약서 사본을 준다.', impact: [{ who: '도윤', text: '확인할 시간을 얻는다', tone: 1 }],
        next: { text: '계약서를 읽어 보니 관리비 항목과 수리 책임 칸이 비어 있다.', choices: [
          { id: 'ask', text: '빈칸을 채워 달라고 하고, 보호자·믿을 어른과 함께 확인한다', result: '관리비와 수리 책임이 계약서에 적힌다.', impact: [{ who: '도윤', text: '나중의 다툼을 줄인다', tone: 1 }],
            next: { text: '계약 날, 집주인이 "보증금은 계좌 말고 현금으로 주세요"라고 한다.', choices: [
              { id: 'record', text: '기록이 남는 방법으로 보내고, 받았다는 확인을 받는다', result: '돈을 보낸 기록과 영수증이 남는다.', impact: [{ who: '도윤', text: '보증금을 지킬 근거가 생긴다', tone: 1 }], ending: '계약은 읽고, 빈칸을 채우고, 기록을 남길 때 나를 지킨다.' },
              { id: 'cash', text: '어른이 그러자니 현금으로 건넨다', result: '받았다는 증거가 하나도 남지 않는다.', impact: [{ who: '도윤', text: '돌려받을 때 다툼이 생길 수 있다', tone: -1 }], ending: '기록 없는 큰돈은 나중에 나를 지켜 주지 못한다.' }] } },
          { id: 'trust', text: '빈칸은 원래 그렇다는 말을 믿고 서명한다', result: '한 달 뒤 보일러 수리비를 두고 다툼이 생긴다.', impact: [{ who: '도윤', text: '수리비를 떠안는다', tone: -1 }], ending: '빈칸은 나중에 상대가 채울 수 있는 칸이다.' }] } },
      { id: 'friend', text: '친구가 괜찮다던 방이니 확인 없이 계약한다', result: '친구 방과 계약 조건이 달랐다.', impact: [{ who: '도윤', text: '예상과 다른 조건을 지킨다', tone: -1 }], ending: '남의 경험은 내 계약서를 대신 읽어 주지 않는다.' }] };
    const ROOM_R = [{ id: 'read', text: '서명하기 전에 계약서를 끝까지 읽는다' }, { id: 'blank', text: '빈칸과 모르는 조건은 채우고 물어본다' }, { id: 'proof', text: '큰돈은 기록이 남는 방법으로 주고받는다' }, { id: 'cheap', text: '오늘만 싸다면 빨리 계약하는 것이 이익이다', why: '서두르게 하는 말은 확인할 시간을 빼앗는 위험 신호예요.' }, { id: 'adult', text: '어른이 하자는 대로 하면 된다', why: '내가 서명하는 계약은 내가 확인해야 해요.' }];

    MODS.push(
      M({
        id: 'intro.spend', type: 'intro', title: '지출 종류 네 바구니',
        method: '지출 종류 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 지출 카드 4장(월세·식재료·배달 음식·구독 서비스)을 함께 나눠 보인다.', base: '지출 카드 8장을 고정·필요, 변동·필요, 변동·욕구, 고정·욕구 바구니에 나눈다.', challenge: '애매한 카드(교통비 가운데 택시비 등)를 어느 바구니에 둘지 근거를 들어 판단한다.' },
        intro: {
          teacher: '"가상 인물 도윤이 졸업 뒤 자취를 시작해요. 한 달 지출을 네 바구니로 나눠 볼까요? 매달 같은 돈이 나가는지(고정·변동), 꼭 필요한지(필요·욕구)." 시연 단추로 카드가 나뉘는 모습을 보여 준다. "구독 서비스는 매달 나가니까 필요한 거예요"라는 말이 나오면 "매달 나가는 것과 꼭 필요한 것은 같은 기준일까요?"라고 되묻는다. 두 기준을 섞지 않고 따로 보는 것이 예산의 시작이라는 점을 짚는다.',
          student: '가상 인물 도윤의 한 달 지출 카드를, 매달 같은지(고정·변동)와 꼭 필요한지(필요·욕구) 두 기준으로 네 바구니에 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['고정·필요', '변동·필요', '변동·욕구', '고정·욕구'], cards: [...SPEND.fn, ...SPEND.vn, ...SPEND.vw, ...SPEND.fw] }, sequence: [{ sort: { '고정·필요': SPEND.fn, '변동·필요': SPEND.vn, '변동·욕구': SPEND.vw, '고정·욕구': SPEND.fw } }] },
          art: { draw: 'a small paper studio apartment with a desk, a paper wallet and four paper baskets on a shelf labelled with tags, receipts cut from paper floating into the baskets', banner: '매달 같을까, 꼭 필요할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '도윤은 가상 인물이다. 학생 가정의 수입·지출을 묻지 않는다.',
      }),
      M({
        id: 'intro.offer', type: 'intro', title: '솔깃한 아르바이트 제안',
        method: '솔깃한 제안 장면 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 제안 문구 둘의 마음만 짝지어 보인다.', base: '제안 문구 셋을 읽고 들 수 있는 마음을 짝짓는다.', challenge: '제안 문구 넷을 짝짓고, 문구마다 위험 신호의 이름(서두르게 함·개인 정보 요구·지나친 보수 등)을 붙여 말한다.' },
        intro: {
          teacher: '"졸업을 앞둔 가상 인물 도윤에게 메시지가 왔어요. \'하루 2시간, 통장만 빌려주면 고수익!\' 이런 문구를 보면 어떤 마음이 들까요?" 시연 단추로 문구와 마음 카드가 짝지어지는 모습을 보여 준다. "쉽게 큰돈 버는 건 기회잖아요"라는 말이 나오면 "일은 적은데 보수가 크다면, 그 차이는 누가 떠안는 걸까요?"라고 되묻는다. 솔깃한 마음은 자연스럽지만, 그 마음을 노리는 문구에는 위험 신호가 있다는 점을 짚는다.',
          student: '도윤이 받은 솔깃한 제안 문구를 읽고, 그 문구를 볼 때 들 수 있는 마음 카드와 짝지어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['설렘', '조급함', '찜찜함', '불안'], slots: [{ id: 'a', label: '"하루 2시간, 일주일에 100만 원 보장!"' }, { id: 'b', label: '"오늘 안에 답 안 하면 자리가 없어요."' }, { id: 'c', label: '"통장과 카드만 잠깐 빌려주면 돼요."' }, { id: 'd', label: '"신분증 사진부터 먼저 보내 주세요."' }] }, sequence: [{ match: { a: '설렘', b: '조급함', c: '찜찜함', d: '불안' } }] },
          art: { draw: 'a paper phone screen with a glittering paper banner promising easy money, a fishing hook cut from paper hidden behind the banner, a student hesitating with a thumb above the screen', banner: '솔깃할수록 한 번 더', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '제안 문구는 가상이다. 실제 업체·서비스 이름을 쓰지 않는다.',
      }),

      M({
        id: 'activity.budget', type: 'activity', title: '도윤의 한 달 예산',
        method: '한 달 예산 세우기', tool: 'economy', minutes: 18,
        levels: { easy: '항목 4개(월세·공과금·식비·교통비) 가운데 예산 안에서 꼭 필요한 것을 고른다.', base: '항목 6개(여가·새 옷 더함)를 가상 수입 110만 원 안에서 고정·필요 지출을 먼저 넣고 고른다.', challenge: '항목 8개에서 비상금 모으기를 꼭 넣고, 욕구 지출 하나를 빼서 예산을 맞춘다.' },
        activity: {
          title: '예산 막대 맞추기', tool: 'economy',
          teacher: '"도윤의 가상 한 달 수입은 110만 원이에요. 예산 막대를 넘지 않게 지출을 골라 봐요. 먼저 넣을 것은 무엇일까요?" 고정·필요 지출(월세·공과금)을 먼저 넣게 하고, 새 옷부터 고르는 학생에게 "월세를 못 내면 새 옷은 어디에 둘까요?"라고 묻는다. 비상금 문항에서 "남으면 모으면 되잖아요"라는 학생에게 "남는 달이 올까요? 먼저 떼어 두는 것과 남으면 모으는 것은 결과가 다르지 않을까요?"라고 되묻는다. 금액은 수업용 가상 값이라고 밝힌다.',
          task: '가상 수입 안에서 도윤의 한 달 지출을 예산 막대에 맞춰 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 수입 110만 원. 월세와 공과금·통신비는 꼭 넣고 예산 안에서 도윤의 한 달 지출을 고르세요.', toolOptions: { mode: 'budget', budget: 1100000, items: BUD.slice(0, 6) }, target: { budget: { must: ['rent', 'bill'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '가상 수입 110만 원. 항목 네 개 가운데 월세와 공과금·통신비는 꼭 넣고 예산 안에서 고르세요(항목 넷).', toolOptions: { items: BUD.slice(0, 4) } },
                challenge: { prompt: '가상 수입 110만 원. 항목 여덟 개에서 월세·공과금·식비·비상금 모으기는 꼭 넣고 예산 안에서 고르세요(비상금 포함).', toolOptions: { items: BUD }, target: { budget: { must: ['rent', 'bill', 'food', 'save'] } } },
              } },
            { prompt: '이번 달 수입이 100만 원으로 줄었어요. 월세·공과금·식비·교통비는 꼭 넣고, 새 옷은 빼고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: BUD.slice(0, 7) }, target: { budget: { must: ['rent', 'bill', 'food', 'bus'], not: ['clothes'] } }, difficulty: 0.35 },
            { prompt: '수입 110만 원. 비상금 모으기를 먼저 떼고, 필요 지출 넷을 넣은 뒤 남는 돈으로 하나만 더 골라 모두 여섯 항목을 고르세요.', toolOptions: { mode: 'budget', budget: 1100000, items: BUD }, target: { budget: { must: ['save', 'rent', 'bill', 'food', 'bus'], count: 6 } }, difficulty: 0.4,
              conclude: '예산은 \'남으면 쓰기\'가 아니라 \'먼저 정하기\'예요. 고정·필요 지출과 비상금을 먼저 떼어 두면 욕구 지출을 고를 기준이 생겨요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도윤에게 \'비상금을 먼저 떼어 두라\'고 권하는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '수입·지출 금액은 수업용 가상 값이다. 학생 가정의 수입·용돈을 묻지 않는다.',
      }),
      M({
        id: 'activity.pie', type: 'activity', title: '예산 원그래프 그리기',
        method: '예산 원그래프 만들기', tool: 'chart', minutes: 18,
        levels: { easy: '네 항목 예산 비율 표를 보고 값이 보이는 원그래프를 완성한다.', base: '여섯 항목 예산 비율로 원그래프를 그리고, 비중이 가장 큰 항목을 읽는다.', challenge: '원그래프를 읽고 다음 달 줄일 항목과 그 비율을 골라 까닭을 짚는다.' },
        activity: {
          title: '비중 한눈에 보기', tool: 'chart',
          teacher: '"도윤의 한 달 예산을 원그래프로 그리면 어디에 돈이 가장 많이 가는지 한눈에 보여요." 비율 표(합 100%)를 함께 읽고 원그래프를 그리게 한다. "가장 큰 조각부터 줄이면 되죠"라는 학생에게 "월세 조각은 이번 달에 바로 줄일 수 있을까요? 줄일 수 있는 조각과 없는 조각을 나눠 볼까요?"라고 묻는다. 비율은 수업용 가상 예산이라고 밝힌다.',
          task: '도윤의 가상 예산을 원그래프로 그리고, 비중을 읽어 줄일 항목을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '도윤의 한 달 예산 비율(가상)로 원그래프를 그리세요.', toolOptions: { type: 'circle', mode: 'build', title: '도윤의 한 달 예산 비율(가상, %)', unit: '%', data: [['월세', 40], ['식비', 25], ['공과금·통신비', 10], ['교통비', 5], ['여가·모임', 10], ['비상금', 10]], tickPct: 5 }, target: { build: true }, difficulty: 0.3,
              levels: { easy: { prompt: '도윤의 한 달 예산 비율(가상)을 네 항목으로 묶은 원그래프를 그리세요(항목 넷).', toolOptions: { data: [['월세', 40], ['식비', 25], ['기타 생활비', 25], ['비상금', 10]] } } } },
            { prompt: '도윤의 예산 원그래프에서 비중이 두 번째로 큰 항목을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '도윤의 한 달 예산 비율(가상, %)', unit: '%', data: [['월세', 40], ['식비', 25], ['공과금·통신비', 10], ['교통비', 5], ['여가·모임', 10], ['비상금', 10]], question: '두 번째로 큰 비중은?', choices: ['월세', '식비', '공과금·통신비', '여가·모임'] }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '배달 음식을 자주 시킨 달의 예산이에요(가상). 식비 조각은 몇 %인지 읽으세요.', toolOptions: { type: 'circle', mode: 'read', title: '배달이 잦은 달의 예산 비율(가상, %)', unit: '%', data: [['월세', 40], ['식비', 35], ['공과금·통신비', 10], ['교통비', 5], ['여가·모임', 10]], question: '식비 비율은 몇 %?' }, target: { value: 35 }, difficulty: 0.3,
              conclude: '식비가 커지자 비상금 조각이 사라졌어요. 한 조각이 커지면 다른 조각이 줄어요.' },
            { prompt: '배달이 잦은 달의 예산을 보고, 다음 달 가장 먼저 줄일 수 있는 항목을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '배달이 잦은 달의 예산 비율(가상, %)', unit: '%', data: [['월세', 40], ['식비', 35], ['공과금·통신비', 10], ['교통비', 5], ['여가·모임', 10]], question: '다음 달 가장 먼저 줄일 수 있는 항목은?', choices: ['월세', '식비(배달 줄이기)', '공과금·통신비'], why: ['월세는 계약으로 정해져 이번 달에 바로 줄이기 어려워요.', '', '공과금도 줄일 수 있지만, 조각이 크게 늘어난 곳은 식비예요.'] }, target: { pick: 1 }, difficulty: 0.4,
              conclude: '가장 큰 조각보다 \'늘어난 조각\'과 \'바로 줄일 수 있는 조각\'을 먼저 봐요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도윤이 식비를 줄여 비상금 조각을 되살릴 방법을 한 문장으로 쓰세요.' }] },
        notes: '비율은 수업용 가상 예산이다.',
      }),
      M({
        id: 'activity.contract', type: 'activity', title: '서명 전 확인 갈림길',
        method: '계약 확인 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(바로 서명할지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(빈칸 처리)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(보증금 주는 방법)까지 가서 근거 세 장을 고르고, 근로 계약 장면까지 따져 본다.' },
        activity: {
          title: '도윤의 첫 자취방', tool: 'dilemma',
          teacher: '"성인이 되면 내 이름으로 계약을 하게 돼요. 서명은 \'읽었고 지키겠다\'는 약속이에요." 첫 갈림길에서 \'바로 서명\'을 고르는 학생에게 "\'오늘만 싸다\'는 말은 무엇을 빼앗는 말일까요?"라고 묻는다. \'빈칸은 원래 그렇다\'를 믿는 학생에게 "빈칸은 나중에 누가 채울 수 있을까요?"라고 되묻는다. 계약의 자세한 법 내용은 상황마다 다르니, 실제 계약 때는 보호자·믿을 어른·공공 상담 창구와 함께 확인한다고 밝힌다.',
          task: '자취방 계약과 아르바이트 계약 갈림길을 따라가며 확인 사항을 근거로 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('도윤이 자취방 계약에서 확인 사항을 지키는 길을 고르고 근거를 고르세요.', ROOM, [['read', 'ask', 'record']], ROOM_R, ['read', 'blank'], { d: 0.4, hardReasons: ['read', 'blank', 'proof'] }),
            EXPLOREQ('\'바로 서명\'·\'친구 말 믿기\' 길도 끝까지 가 보고 결과를 견주세요.', ROOM, ROOM_R, ['다른 길의 끝 장면을 확인했다', '도윤에게 어떤 부담이 생겼는지 짚었다'], { d: 0.35 }),
            DILQ('도윤이 카페 아르바이트를 시작하는데 사장님이 "계약서는 나중에 쓰자"고 해요. 알맞은 길을 고르고 근거를 고르세요.', { text: '가상 카페 아르바이트 첫날. 사장님이 "바쁘니까 계약서는 나중에 쓰고 오늘부터 일하자"고 한다.', who: '도윤', motif: 'house', choices: [
              { id: 'later', text: '분위기를 깨기 싫어 그냥 일을 시작한다', result: '한 달 뒤 약속과 다른 시급이 들어온다.', impact: [{ who: '도윤', text: '약속을 증명할 근거가 없다', tone: -1 }], ending: '말로 한 약속은 다툼이 생겼을 때 증명하기 어렵다.' },
              { id: 'ask', text: '일하기 전에 근로 조건을 글로 남겨 달라고 정중히 말한다', result: '사장님이 머뭇거리다 계약서를 꺼낸다.', impact: [{ who: '도윤', text: '조건을 확인할 기회를 얻는다', tone: 1 }],
                next: { text: '계약서에 일하는 시간·시급·쉬는 시간·지급 날을 적는 칸이 있다.', choices: [
                  { id: 'check', text: '칸마다 들은 조건과 같은지 확인하고 사본을 받아 둔다', result: '조건이 적힌 계약서 사본을 보관한다.', impact: [{ who: '도윤', text: '일한 만큼 받을 근거가 생긴다', tone: 1 }], ending: '근로 조건을 글로 남기고 사본을 받으면 나를 지킬 수 있다.' },
                  { id: 'skip', text: '바빠 보여서 읽지 않고 서명만 한다', result: '쉬는 시간 칸이 비어 있었다는 것을 나중에 안다.', impact: [{ who: '도윤', text: '쉬는 시간을 주장하기 어렵다', tone: -1 }], ending: '계약서를 받는 것과 읽는 것은 둘 다 필요하다.' }] } }] },
              [['ask', 'check']], [{ id: 'paper', text: '근로 조건은 글로 남기고 사본을 받는다' }, { id: 'items', text: '시간·시급·쉬는 시간·지급 날을 칸마다 확인한다' }, { id: 'mood', text: '첫날부터 계약서를 말하면 눈치 없는 것이다', why: '조건을 확인하는 것은 일하는 사람의 당연한 몫이에요.' }], ['paper', 'items'], { d: 0.35, more: { conclude: '자취방이든 아르바이트든, 서명 전에 읽고, 빈칸을 묻고, 글과 기록을 남기는 것이 성인의 책임이자 권리예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '계약서에 서명하기 전에 꼭 확인할 것 한 가지와 그 까닭을 쓰세요.' }] },
        notes: '도윤·카페·자취방은 가상이다. 계약·근로의 구체적 법 기준(나이·금액·조문)은 다루지 않고, 실제 계약 때 보호자·믿을 어른·공공 상담 창구와 확인하도록 한다.',
      }),
      M({
        id: 'activity.rights', type: 'activity', title: '성인의 권리와 책임 가지',
        method: '권리와 책임 가리기', tool: 'mindmap', minutes: 18,
        levels: { easy: '권리·책임 두 가지에 카드 2장을 붙인다.', base: '권리·책임 가지에 카드 4장을 나눈다.', challenge: '헷갈리는 카드가 더해진 6장을 나누고, 책임을 계약·근로·금융 가지로 다시 나눈다.' },
        activity: {
          title: '두 가지로 나누기', tool: 'mindmap',
          teacher: '"성인이 되면 새로 할 수 있는 일(권리)이 생기고, 그만큼 내가 지는 몫(책임)도 생겨요." 카드를 놓을 때마다 "이 카드는 내가 \'할 수 있는\' 것인가요, \'져야 하는\' 것인가요?"라고 묻는다. \'계약을 맺을 수 있다\'를 권리에만 넣는 학생에게 "맺을 수 있다는 것은, 맺은 계약을 지켜야 한다는 것과 함께 오지 않을까요?"라고 되묻는다. 나이 기준은 법과 제도마다 다르므로 오늘은 정확한 나이를 외우지 않는다고 밝힌다.',
          task: '성인이 되며 생기는 일 카드를 권리와 책임 가지에 나누고, 책임을 영역별로 다시 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('성인이 되며 생기는 일 카드를 권리와 책임 가지에 나누세요.', ['권리', '책임'], [
              ['선거에 참여해 대표를 뽑을 수 있다', '내 이름으로 계좌·계약을 열 수 있다'],
              ['서명한 계약의 조건을 지킨다', '빌린 돈은 약속한 날까지 갚는다'],
            ], { k: 1, hard: [['일한 만큼 정해진 임금을 받을 수 있다'], ['내 계좌·카드를 남에게 빌려주지 않는다']], d: 0.3, opt: { topic: '성인이 된다는 것' } }),
            SORTQ('성인의 책임 카드를 계약·근로·금융 가지에 나누세요.', ['계약', '근로', '금융'], [
              ['계약서를 끝까지 읽고 서명한다', '빈칸은 채운 뒤 서명한다'],
              ['정한 근무 시간을 지킨다', '근로 조건을 글로 남긴다'],
              ['카드 대금을 결제일에 낸다', '통장을 남에게 빌려주지 않는다'],
            ], { k: 1, d: 0.35, opt: { topic: '성인의 책임' } }),
            PICKQ('쉽게 큰돈을 준다는 제안 가운데 위험 신호가 담긴 카드를 모두 고르세요.', ['"통장만 빌려주면 하루 10만 원"', '"오늘 안에 결정해야 해요"', '"신분증 사진을 먼저 보내 주세요"'], ['"근무 시간과 시급은 계약서에 적어 드려요"', '"궁금한 건 보호자와 상의하고 연락 주세요"'], { d: 0.35, opt: { topic: '위험한 제안', basket: '위험 신호' }, more: { conclude: '계좌·신분증을 넘기라는 말, 서두르게 하는 말은 위험 신호예요. 좋은 제안은 확인할 시간을 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'계약을 맺을 수 있다\'는 권리에 함께 따라오는 책임을 한 문장으로 쓰세요.' }] },
        notes: '선거권·계약·근로의 나이 기준과 법 조항은 다루지 않는다. 권리와 책임의 짝을 이해하는 데 초점을 둔다.',
      }),

      M({
        id: 'wrap.check', type: 'wrap', title: '계약 확인 목록 쓰기',
        method: '계약 확인 목록 쓰기', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '확인 목록 세 항목을 쓴다.', base: '확인 목록 다섯 항목과 위험한 제안 거절 문장을 쓰고 기준표로 점검한다.', challenge: '목록과 거절 문장에 더해, 막힐 때 도움을 청할 곳(보호자·믿을 어른·공공 상담 창구)까지 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 나만의 \'서명 전 확인 목록\'으로 남겨요. 지갑이나 휴대전화 메모에 넣어 둘 만큼 짧게요." 기준표를 함께 읽고 쓴다. "다 읽으면 된다"라고만 쓴 학생에게 "무엇을 읽나요? 빈칸, 돈, 날짜, 사본… 하나씩 적어 볼까요?"라고 묻는다. 거절 문장은 상대를 탓하지 않고 짧고 분명하게 쓰는 것이 좋다고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '서명 전 확인 목록 다섯 항목과, 위험한 제안을 거절하는 한 문장을 쓰세요.', minChars: 60, maxChars: 400, starter: '1. 계약서를 끝까지 읽는다. 2. ~ / 거절: "~"', sample: '1. 계약서를 끝까지 읽는다. 2. 빈칸을 채운 뒤 서명한다. 3. 돈·날짜·기간을 확인한다. 4. 큰돈은 기록이 남게 주고받는다. 5. 사본을 받아 둔다. 거절: "계좌는 빌려줄 수 없어요. 그 제안은 받지 않을게요."' }, prompt: '서명 전 확인 목록과 거절 문장을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['확인할 것을 다섯 항목으로 썼다', '돈·날짜·빈칸 가운데 둘 이상이 들어 있다', '거절 문장이 짧고 분명하다'], mustInclude: [['계약', '서명']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '위험한 제안을 거절하는 말로 가장 알맞은 것은?', options: ['"생각해 볼게요, 신분증은 먼저 보낼게요."', '"계좌는 빌려줄 수 없어요. 그 제안은 받지 않을게요."', '"다른 친구를 소개해 줄게요."'], answer: 1, difficulty: 0.15, explain: '거절은 짧고 분명하게, 정보를 넘기지 않고, 다른 사람을 끌어들이지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '서명 전 확인 목록',
          items: [
            { type: 'table', prompt: '나의 서명 전 확인 목록을 쓰세요.', columns: ['번호', '확인할 것'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']] },
            { type: 'short', prompt: '계약이나 제안이 헷갈릴 때 함께 확인할 사람·곳을 쓰세요(보호자·믿을 어른·공공 상담 창구 등).' },
          ],
          easy: { note: '"읽기·빈칸·사본" 세 가지부터 써요.', items: [{ type: 'short', prompt: '서명 전 확인할 것 세 가지를 쓰세요.' }] },
        },
        notes: '공공 상담 창구는 교사가 지역·기관 안내로 확인해 알려 준다(연락처는 쓰지 않는다).',
      }),
      M({
        id: 'wrap.practice', type: 'wrap', title: '짝 거절 연습',
        method: '짝 거절 연습', tool: 'timer', minutes: 8,
        levels: { easy: '장면 하나(통장 빌려주기)로 한 사람이 제안하고 다른 사람이 거절한다.', base: '장면 둘(통장·서두르는 계약)을 30초씩 번갈아 하고 점검 칸을 표시한다.', challenge: '역할을 바꿔 제안하는 쪽도 해 보고, 거절하기 가장 어려웠던 말을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"짝 가운데 한 사람은 솔깃한 제안을 하는 역할, 한 사람은 거절하는 역할이에요. 제안 쪽은 카드에 적힌 말만 써요." 타이머를 30초씩 맞추고 신호와 함께 시작한다. 거절하며 길게 사과하는 학생에게 "미안해할 일이 아니에요. \'안 돼요, 받지 않을게요\'면 충분해요"라고 말한다. 연습이 끝나면 점검 칸을 스스로 표시하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '거절 연습', labels: ['제안', '거절'], plan: { work: 20, rest: 20, rounds: 2 } }, prompt: '제안 30초, 거절 30초를 네 번(장면 둘 × 역할 바꾸기) 하도록 타이머를 맞추세요(초).', target: { plan: { work: 30, rest: 30, rounds: 4 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '내 거절 점검' }, prompt: '연습에서 내가 한 거절을 점검 칸으로 표시하세요.', target: { selfCheck: ['짧고 분명하게 \'안 된다\'고 말했다', '계좌·신분증 같은 정보를 넘기지 않았다', '서두르게 해도 생각할 시간을 달라고 했다', '필요하면 믿을 어른에게 알리겠다고 했다'] }, difficulty: 0.1 },
            { type: 'short', prompt: '거절하기 가장 어려웠던 제안의 말과, 다음에 쓸 거절 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '짝 거절 연습',
          items: [
            { type: 'table', prompt: '장면마다 쓴 거절 문장을 적으세요.', columns: ['장면', '제안의 말', '내 거절 문장'], cells: [['통장 빌려주기', '', ''], ['서두르는 계약', '', '']] },
            { type: 'check', prompt: '내 거절에 있었던 것에 표시하세요.', options: ['짧고 분명함', '정보 지키기', '생각할 시간', '어른에게 알리기'] },
          ],
        },
        notes: '제안 쪽 대사는 교사가 준비한 카드 문장만 쓴다. 실제 업체 이름을 쓰지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 12학년 3. 응원하는 관계와 성숙한 토론 (관계 형성 및 소통 활동 — 토의·토론, 사제동행)
  // ======================================================================================================
  {
    const M = MOD('g12-rel', [12]);
    const JOB = { text: '가상 고등학교 3학년 교실. 친구 수아가 "나는 대학 대신 졸업하고 바로 취업하기로 했어"라고 말한다. 반 친구 대부분은 진학을 준비한다.', who: '수아', motif: 'star', choices: [
      { id: 'why', text: '"왜 대학을 안 가? 아깝다"라고 말한다', result: '수아가 웃으며 넘기지만 말수가 줄어든다.', impact: [{ who: '수아', text: '내 선택이 낮게 여겨졌다고 느낀다', tone: -1 }], ending: '걱정처럼 들려도 선택을 깎아내리는 말은 응원이 아니다.' },
      { id: 'ask', text: '"어떤 일을 하고 싶은지 궁금해"라고 묻는다', result: '수아가 가고 싶은 분야와 준비해 온 자격 공부를 이야기한다.', impact: [{ who: '수아', text: '내 선택을 설명할 기회를 얻는다', tone: 1 }],
        next: { text: '다른 친구가 옆에서 "그래도 나중에 후회하지 않을까?"라고 끼어든다.', choices: [
          { id: 'respect', text: '"수아가 따져 보고 정한 거잖아. 나는 응원해"라고 말한다', result: '수아가 고맙다며 웃는다. 끼어든 친구도 질문을 바꾼다.', impact: [{ who: '수아', text: '지지받는다고 느낀다', tone: 1 }],
            next: { text: '졸업이 다가오며 수아는 일을 시작할 준비로 바빠지고, 함께 지낼 시간이 줄어든다.', choices: [
              { id: 'keep', text: '서로의 일정을 묻고 한 달에 한 번 만나자고 정한다', result: '길은 달라도 만남이 이어진다.', impact: [{ who: '두 사람', text: '관계가 이어진다', tone: 1 }], ending: '진로가 달라도 관계는 이어 갈 방법을 함께 정하면 끝나지 않는다.' },
              { id: 'drift', text: '이제 다른 세상 사람이라며 연락을 줄인다', result: '자연스럽게 멀어진다.', impact: [{ who: '두 사람', text: '아쉬움이 남는다', tone: -1 }], ending: '진로가 달라서가 아니라 이어 가려 하지 않아서 관계가 멀어진다.' }] } },
          { id: 'join', text: '분위기에 맞춰 "그건 그렇지"라고 맞장구친다', result: '수아가 혼자 설명해야 하는 처지가 된다.', impact: [{ who: '수아', text: '외로움을 느낀다', tone: -1 }], ending: '말없이 맞장구치는 것도 한쪽 편을 드는 일이 될 수 있다.' }] } },
      { id: 'compare', text: '"나는 이번에 원서 다섯 곳 넣었어"라며 내 이야기로 돌린다', result: '대화가 내 원서 이야기로 바뀐다.', impact: [{ who: '수아', text: '말할 자리를 잃는다', tone: -1 }], ending: '친구의 소식에 내 비교를 얹으면 응원이 되기 어렵다.' }] };
    const JOB_R = [{ id: 'curious', text: '판단보다 궁금함으로 물으면 친구가 자기 선택을 말할 수 있다' }, { id: 'respect', text: '따져 보고 정한 선택은 길이 달라도 존중한다' }, { id: 'keep', text: '진로가 달라도 이어 갈 방법을 함께 정한다' }, { id: 'worry', text: '걱정되니까 다시 생각해 보라고 말해야 한다', why: '걱정도 선택을 깎아내리는 말로 들릴 수 있어요. 먼저 물어요.' }, { id: 'end', text: '진로가 다르면 관계는 끝나기 마련이다', why: '관계는 진로가 아니라 이어 가려는 마음과 약속으로 이어져요.' }];
    const CLAIM = '고3 2학기에는 자율학습을 원하는 사람만 하자';
    const SUM_OK = ['원하지 않는 학생은 각자 맞는 공부 방식을 고르게 하자는 주장이다', '모두에게 같은 자율학습이 맞지 않으니 선택권을 주자는 주장이다', '억지로 앉아 있는 시간보다 스스로 정한 시간이 효과적이라는 주장이다'];
    const SUM_BAD = ['공부를 하기 싫다는 주장이다', '자율학습을 없애자는 주장이다', '선생님 말을 따르지 말자는 주장이다'];

    MODS.push(
      M({
        id: 'intro.words', type: 'intro', title: '응원의 말, 비교의 말',
        method: '응원·비교의 말 듣는 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 말 둘(비교의 말·응원의 말)의 마음만 짝지어 보인다.', base: '말 셋을 듣는 친구의 마음과 짝짓는다.', challenge: '말 넷을 모두 짝짓고, 같은 걱정을 응원으로 바꾸는 말을 하나 만들어 본다.' },
        intro: {
          teacher: '"졸업을 앞두고 친구들의 길이 달라져요. 누구는 진학, 누구는 취업, 누구는 한 해 더 준비해요. 그런 친구에게 건넨 말을 들으면 어떤 마음일까요?" 시연 단추로 말과 마음 카드가 짝지어지는 모습을 보여 준다. "걱정돼서 하는 말이니 괜찮아요"라는 말이 나오면 "걱정하는 마음과 듣는 사람이 받는 마음이 같을까요?"라고 되묻는다. 오늘은 길이 다른 친구를 응원하는 말과, 생각이 다른 사람과 성숙하게 토론하는 법을 다룬다고 밝힌다.',
          student: '진로가 다른 친구에게 건넨 말들을 읽고, 그 말을 들은 친구의 마음 카드와 짝지어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['서운함', '고마움', '부담', '든든함'], slots: [{ id: 'a', label: '"그 학과 나와서 뭐 해 먹고 살려고?"' }, { id: 'b', label: '"네가 오래 고민한 거 알아. 응원해."' }, { id: 'c', label: '"다들 너 기대하고 있어. 꼭 붙어야 해."' }, { id: 'd', label: '"어느 길이든 힘들면 연락해. 만나자."' }] }, sequence: [{ match: { a: '서운함', b: '고마움', c: '부담', d: '든든함' } }] },
          art: { draw: 'a paper school hallway splitting into several paper paths toward different doors, students waving to each other across the paths, paper confetti stars', banner: '길이 달라도 응원해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.strawman', type: 'intro', title: '상대 주장, 바르게 요약했나',
        method: '왜곡된 요약 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 요약 카드 4장을 정확·왜곡 바구니에 나눠 보인다.', base: '요약 카드 6장을 정확·왜곡 바구니에 나눈다.', challenge: '왜곡 카드 하나를 골라 상대가 동의할 만한 요약으로 고쳐 말한다.' },
        intro: {
          teacher: `"가상 학급 토론 주제는 '${CLAIM}'예요. 반대편이 이 주장을 요약했는데, 어떤 요약은 주장을 일부러 약하게 바꿨어요." 시연 단추로 카드가 나뉘는 모습을 보여 준다. "상대 주장을 약하게 만들어야 토론에서 이기죠"라는 말이 나오면 "상대가 하지 않은 말을 이긴 것은 상대를 이긴 걸까요?"라고 되묻는다. 상대가 \'맞아, 내 말이 그거야\'라고 할 만큼 요약한 뒤에 반론하는 것이 성숙한 토론이라는 점을 짚는다.`,
          student: '자율학습 토론의 주장을 반대편이 요약한 카드를 읽고, 주장을 바르게 담은 요약과 일부러 바꾼(왜곡한) 요약으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['정확한 요약', '왜곡한 요약'], cards: [SUM_OK[0], SUM_BAD[0], SUM_OK[1], SUM_BAD[1], SUM_OK[2], SUM_BAD[2]] }, sequence: [{ sort: { '정확한 요약': SUM_OK, '왜곡한 요약': SUM_BAD } }] },
          art: { draw: 'a paper debate stage with two podiums, a speech bubble on one side being reshaped into a smaller crooked bubble by the other side, a paper magnifying glass checking it', banner: '상대가 동의할 요약인가?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '토론 주제는 가상 학급의 것이다. 찬반 정답을 정하지 않는다.',
      }),

      M({
        id: 'activity.cheer', type: 'activity', title: '취업을 고른 친구 응원하기',
        method: '응원 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(친구 소식에 어떻게 답할지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(끼어든 말에 어떻게 할지)까지 가서 근거 한 장을 고른다.', challenge: '세 번째 갈림길(졸업 뒤 관계)까지 가서 근거 두 장을 고르고 다른 길과 견준다.' },
        activity: {
          title: '수아에게 건넬 말', tool: 'dilemma',
          teacher: '"가상 인물 수아는 진학 대신 취업을 골랐어요. 반 친구 대부분은 진학을 준비해요. 여러분이 수아의 친구라면 어떤 말을 건넬까요?" 첫 갈림길에서 \'왜 안 가? 아깝다\'를 고르는 학생에게 "아깝다는 말은 수아의 선택이 무엇보다 못하다는 뜻으로 들릴 수 있지 않을까요?"라고 묻는다. 어느 진로가 더 낫다는 정답을 정하는 활동이 아니며, 우리 반 누구의 진로도 묻지 않는다고 밝힌다.',
          task: '수아의 갈림길을 따라가며 길이 다른 친구를 응원하는 말과 그 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('수아를 응원하며 관계를 이어 가는 길을 고르고 근거를 고르세요.', JOB, [['ask', 'respect', 'keep']], JOB_R, ['curious'], { d: 0.4, hardReasons: ['curious', 'keep'] }),
            EXPLOREQ('\'아깝다고 말하기\'·\'내 이야기로 돌리기\' 길도 끝까지 가 보고 결과를 견주세요.', JOB, JOB_R, ['다른 길의 끝 장면을 확인했다', '수아의 마음에 어떤 영향이 갔는지 짚었다'], { d: 0.35 }),
            DILQ('친구 지훈이 원하던 곳에 떨어져 한 해 더 준비하기로 했어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '지훈은 원하던 곳에 떨어져 한 해 더 준비하기로 했다. 단체 대화방에는 합격 축하 글이 줄줄이 올라온다.', who: '지훈', motif: 'rain', choices: [
              { id: 'cheerup', text: '"힘내! 넌 할 수 있어!"라고 단체 대화방에 올린다', result: '지훈이 단체 대화방에 아무 답도 하지 않는다.', impact: [{ who: '지훈', text: '모두 앞에서 이름이 불려 부담스럽다', tone: -1 }], ending: '좋은 뜻의 말도 자리와 때를 가려야 응원이 된다.' },
              { id: 'private', text: '따로 "요즘 어때? 이야기하고 싶으면 언제든"이라고 보낸다', result: '며칠 뒤 지훈이 짧게 답한다.', impact: [{ who: '지훈', text: '부담 없이 기댈 곳이 생긴다', tone: 1 }],
                next: { text: '지훈이 "다들 앞서가는데 나만 멈춘 것 같아"라고 말한다.', choices: [
                  { id: 'listen', text: '고쳐 주려 하지 않고 "그렇게 느낄 수 있겠다"며 들어 준다', result: '지훈이 준비 계획을 조금씩 이야기한다.', impact: [{ who: '지훈', text: '마음이 가벼워진다', tone: 1 }], ending: '응원은 해결책보다 먼저 곁에 있어 주는 것이다.' },
                  { id: 'fix', text: '"한 해 금방 가, 별거 아니야"라고 말한다', result: '지훈이 대화를 짧게 끝낸다.', impact: [{ who: '지훈', text: '마음을 가볍게 여겨졌다고 느낀다', tone: -1 }], ending: '\'별거 아니다\'는 말은 상대의 마음을 작게 만든다.' }] } }] },
              [['private', 'listen']], [{ id: 'place', text: '응원도 상대가 편한 자리와 때를 고른다' }, { id: 'stay', text: '고쳐 주기보다 먼저 곁에서 들어 준다' }, { id: 'loud', text: '모두 앞에서 크게 응원할수록 힘이 된다', why: '모두 앞에서 이름이 불리는 것이 부담일 수 있어요.' }], ['place', 'stay'], { d: 0.35, more: { conclude: '응원은 내가 하고 싶은 말이 아니라, 친구가 받을 수 있는 말과 자리로 건네요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'왜 그 길을 가?\'를 궁금함으로 묻는 응원의 말로 바꿔 쓰세요.' }] },
        notes: '수아·지훈은 가상 인물이다. 진로(진학·취업·재수 등) 사이에 우열이 없다는 점을 지키고, 학생의 실제 진로를 묻지 않는다.',
      }),
      M({
        id: 'activity.thanks', type: 'activity', title: '구체적인 감사 편지',
        method: '감사 편지 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 문장(고마운 장면·그때 내 마음·고마운 말) 틀을 채워 쓴다.', base: '한 문단으로 구체적 장면을 담은 감사 편지를 쓰고 기준표로 점검한다.', challenge: '한 문단에 더해 앞으로의 다짐 한 문장을 덧붙이고 기준 하나를 더 점검한다.' },
        activity: {
          title: '감사 편지 쓰기', tool: 'rubric-writing',
          teacher: '"고3을 지나며 고마운 사람이 있었나요? 선생님, 친구, 학교에서 늘 도와주신 분… \'늘 고마워\'보다 \'그날 그 장면\'을 쓰면 편지가 살아나요." 기준표를 함께 읽는다. 이름·연락처는 쓰지 말고 \'○○ 선생님께\'처럼 쓰라고 미리 말한다. \'항상 고마웠어\'만 쓴 학생에게 "언제, 어디서, 무엇을 해 준 것이 가장 먼저 떠오르나요?"라고 묻는다. 가족에게 쓰고 싶지 않은 학생은 학교 안의 사람에게 써도 된다고 안내해 고르게 한다.',
          task: '고마운 사람에게 구체적인 장면을 담은 감사 편지를 쓰고 기준표로 점검해요(이름·연락처는 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('고마운 사람에게 구체적 장면을 담은 감사 편지를 한 문단으로 쓰고 점검하세요.', '고마운 사람에게 감사 편지를 한 문단으로 쓰세요(이름 대신 \'○○께\').', ['언제·어디서·무엇을 해 주었는지 장면을 썼다', '그때 내 마음을 썼다', '고맙다는 말을 분명히 썼다'], { min: 80, max: 450, starter: '○○께. ~ 때 ~를 해 주셔서 저는 ~했어요. 정말 고맙습니다.', plus: '앞으로의 다짐을 한 문장 덧붙였다', sample: '○○ 선생님께. 2학기 모의고사가 끝난 날, 교실에 혼자 남은 저에게 따뜻한 차를 건네며 "오늘 버틴 것만으로 충분해"라고 말씀해 주셨어요. 그날 저는 처음으로 마음을 놓고 울 수 있었어요. 정말 고맙습니다.', d: 0.35 }),
            RWQ('반 친구 한 명에게 고3 동안 고마웠던 장면을 두세 문장으로 쓰고 점검하세요.', '반 친구 한 명에게 고마웠던 장면을 두세 문장으로 쓰세요(이름 대신 \'○○에게\').', ['구체적 장면을 썼다', '그 행동이 나에게 준 영향을 썼다', '성적·외모가 아닌 행동을 짚었다'], { min: 40, max: 300, sent: [2, 3], starter: '○○에게. ~ 때 네가 ~해 줘서 ~', d: 0.35 }),
            RWQ('평소 잘 드러나지 않게 학교를 도와준 분(급식·시설·도서관 등)께 감사의 말을 두 문장으로 쓰고 점검하세요.', '학교를 보이지 않게 도와준 분께 감사의 말을 두 문장으로 쓰세요.', ['그분이 한 일을 구체적으로 썼다', '그 일이 우리에게 준 도움을 썼다', '존중하는 말씨로 썼다'], { min: 30, max: 250, sent: [2, 3], d: 0.3, more: { conclude: '구체적인 감사는 \'당신이 한 일을 내가 보았다\'는 인정이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '편지를 전할 방법(직접·편지함·낭독 등)과 전할 날을 쓰세요.' }] },
        notes: '편지 대상은 학생이 고르되 이름·연락처는 쓰지 않는다. 가족 이야기를 쓰도록 요구하지 않는다. 쓴 글의 내용을 평가하지 않고 기준표 자기 점검만 한다.',
      }),
      M({
        id: 'activity.steelman', type: 'activity', title: '가장 강한 형태로 요약하기',
        method: '가장 강한 형태로 요약하기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '빈칸 틀("상대의 주장은 ~이고, 가장 강한 근거는 ~이다")을 채운다.', base: '반대 주장을 두 문장으로 강하게 요약하고 기준표로 점검한다.', challenge: '두 문장 요약에 더해 내 주장과의 공통점 한 문장을 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '상대 주장 강하게 요약', tool: 'rubric-writing',
          teacher: '"오늘의 규칙: 반론하기 전에 상대 주장을 상대가 \'맞아, 그게 내 말이야\'라고 할 만큼 강하게 요약해요." 가상 토론 주제 세 개를 칠판에 적고 기준표를 함께 읽는다. 요약에 \'~라는 핑계\'처럼 깎아내리는 말을 넣은 학생에게 "상대가 이 문장을 보고 동의할까요?"라고 묻는다. 내 생각과 반대 쪽을 요약하는 연습이며, 어느 쪽이 옳은지는 정하지 않는다고 밝힌다.',
          task: '가상 토론 주제에서 내 생각과 반대 쪽 주장을 가장 강한 형태로 요약하고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ(`주제 '${CLAIM}'에서 반대 쪽(모두 함께 자율학습)의 주장을 가장 강한 형태로 두 문장 요약하고 점검하세요.`, '"모두 함께 자율학습을 하자"는 쪽의 주장을 상대가 동의할 만큼 강하게 두 문장으로 요약하세요.', ['상대의 핵심 주장을 썼다', '상대의 가장 강한 근거를 썼다', '깎아내리는 말이 없다'], { min: 50, max: 300, sent: [2, 3], starter: '상대의 주장은 ~이다. 가장 강한 근거는 ~이다.', plus: '내 주장과의 공통점을 한 문장 썼다', sample: '모두 함께 자율학습을 하면 서로 집중하는 분위기가 만들어져 혼자보다 공부를 이어 가기 쉽다는 주장이다. 특히 계획을 혼자 지키기 어려운 학생에게 정해진 시간과 장소가 버팀목이 된다는 근거가 가장 강하다.', d: 0.4 }),
            RWQ('주제 \'학급 단체 대화방은 밤 10시 뒤 알림을 끄자\'에서 반대 쪽 주장을 가장 강한 형태로 두 문장 요약하고 점검하세요.', '"밤 10시 뒤에도 알림을 켜 두자"는 쪽의 주장을 상대가 동의할 만큼 두 문장으로 요약하세요.', ['상대의 핵심 주장을 썼다', '상대의 가장 강한 근거를 썼다', '깎아내리는 말이 없다'], { min: 50, max: 300, sent: [2, 3], starter: '상대의 주장은 ~이다. 가장 강한 근거는 ~이다.', plus: '내 주장과의 공통점을 한 문장 썼다', d: 0.4 }),
            RWQ('주제 \'졸업 앨범 사진은 각자 원하는 옷으로 찍자\'에서 반대 쪽 주장을 가장 강한 형태로 요약하고 점검하세요.', '"졸업 앨범 사진은 교복으로 맞춰 찍자"는 쪽의 주장을 상대가 동의할 만큼 두 문장으로 요약하세요.', ['상대의 핵심 주장을 썼다', '상대의 가장 강한 근거를 썼다', '깎아내리는 말이 없다'], { min: 50, max: 300, sent: [2, 3], plus: '내 주장과의 공통점을 한 문장 썼다', d: 0.4, more: { conclude: '상대 주장을 가장 강하게 요약하면, 내 반론도 진짜 쟁점에 닿아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 요약한 반대 주장 가운데 실제로 설득력 있다고 느낀 부분을 쓰세요.' }] },
        notes: '주제는 모두 가상 학급의 것이다. 찬반 정답을 정하지 않고, 요약이 공정한지만 스스로 점검한다.',
      }),
      M({
        id: 'activity.map', type: 'activity', title: '두 주장의 공통점과 차이',
        method: '공통점·차이 생각그물', tool: 'mindmap', minutes: 18,
        levels: { easy: '공통점·차이 두 가지에 카드 2장을 붙인다.', base: '공통점·차이 가지에 카드 4장을 나눈다.', challenge: '카드 6장을 나누고, 차이를 좁힐 숙의 질문 카드를 고른다.' },
        activity: {
          title: '공통점·차이 가지', tool: 'mindmap',
          teacher: `"'${CLAIM}' 토론의 두 주장을 가운데 두고, 공통점과 차이를 가지로 나눠 봐요." 카드를 놓을 때마다 "이건 두 쪽이 모두 바라는 것인가요, 한쪽만 바라는 것인가요?"라고 묻는다. "공통점은 없어요, 정반대예요"라는 학생에게 "두 쪽 모두 3학년이 끝까지 공부를 잘 이어 가길 바라지 않나요?"라고 되묻는다. 공통점에서 출발해야 차이를 좁히는 질문이 나온다는 점을 짚는다.`,
          task: '자율학습 토론의 두 주장 카드를 공통점과 차이 가지에 나누고, 숙의 질문을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('자율학습 토론의 두 주장 카드를 공통점과 차이 가지에 나누세요.', ['공통점', '차이'], [
              ['두 쪽 모두 고3이 공부를 이어 가길 바란다', '두 쪽 모두 학생의 건강을 걱정한다'],
              ['한쪽은 선택권, 한쪽은 함께하는 분위기를 앞세운다', '한쪽은 학원·집 공부를, 한쪽은 학교 공부를 더 믿는다'],
            ], { k: 1, hard: [['두 쪽 모두 학생 의견을 묻자고 한다'], ['한쪽은 개인 계획을, 한쪽은 정해진 시간을 중요하게 본다']], d: 0.3, opt: { topic: '자율학습 토론' } }),
            SORTQ('토론에서 나온 말 카드를 \'공통점에서 출발한 말\'과 \'차이만 키우는 말\' 가지에 나누세요.', ['공통점에서 출발한 말', '차이만 키우는 말'], [
              ['우리 둘 다 끝까지 버티는 방법을 찾고 있네', '건강을 지키는 쪽으로 방법을 맞춰 보자'],
              ['너희는 공부하기 싫은 거잖아', '억지로 앉혀 두자는 거잖아'],
            ], { k: 1, d: 0.3, opt: { topic: '토론에서 나온 말' } }),
            PICKQ('두 주장의 차이를 좁히는 숙의 질문 카드를 모두 고르세요.', ['"선택하되 일주일에 한 번은 함께하는 방법은 어떨까?"', '"원하지 않는 학생은 무엇으로 계획을 점검할까?"'], ['"그래서 누가 이긴 건데?"', '"그쪽 주장은 처음부터 틀렸어"'], { d: 0.35, opt: { topic: '숙의 질문', basket: '숙의 질문' }, more: { conclude: '숙의는 이기는 쪽을 정하는 것이 아니라, 공통점 위에서 차이를 좁히는 질문을 찾는 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '자율학습 토론에서 차이를 좁힐 나만의 숙의 질문 하나를 쓰세요.' }] },
      }),

      M({
        id: 'wrap.debate', type: 'wrap', title: '요약 먼저 토론',
        method: '요약 먼저 토론', tool: 'timer', minutes: 8,
        levels: { easy: '한 라운드(주장 → 상대 요약 → 확인)만 한다.', base: '두 라운드를 하며 반론 전에 매번 상대 주장을 요약하고 확인받는다.', challenge: '두 라운드 뒤 양쪽이 동의한 합의점을 기록판에 적고 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"규칙은 하나예요. 반론하기 전에 상대 주장을 요약하고, 상대가 \'맞아\'라고 해야 반론할 수 있어요." 타이머에 맞춰 주장 1분, 요약 30초를 진행한다. 요약이 틀렸다며 상대가 고개를 저으면 "다시 한 번, 상대가 동의할 때까지 요약해 볼까요?"라고 말한다. 승패를 정하지 않고, 합의점과 남은 차이를 기록하는 것이 목표라고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '요약 먼저 토론 차례', cards: ['상대가 "맞아"라고 확인한다', '주장을 말한다', '요약한 뒤 반론한다', '상대 주장을 요약한다'] }, prompt: '요약 먼저 토론의 한 라운드 차례 카드를 놓으세요.', target: { order: ['주장을 말한다', '상대 주장을 요약한다', '상대가 "맞아"라고 확인한다', '요약한 뒤 반론한다'] }, difficulty: 0.2 },
            { type: 'tool', tool: 'timer', options: { title: '토론 합의점 기록', fields: [{ label: '합의한 점', unit: '개', step: 1 }, { label: '남은 차이', unit: '개', step: 1 }] }, prompt: '토론에서 찾은 합의점과 남은 차이의 수를 기록판에 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'short', prompt: '두 쪽이 동의한 합의점 하나를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '요약 먼저 토론',
          items: [
            { type: 'table', prompt: '라운드마다 상대 주장 요약을 적으세요.', columns: ['라운드', '상대 주장 요약', '상대 확인'], cells: [['1', '', ''], ['2', '', '']] },
            { type: 'short', prompt: '요약 먼저 규칙이 토론을 어떻게 바꾸었는지 쓰세요.' },
          ],
        },
        notes: '찬반은 무작위로 나눈다. 승패·점수를 매기지 않는다.',
      }),
      M({
        id: 'wrap.letters', type: 'wrap', title: '감사 편지 전하기',
        method: '감사 편지 전하기', tool: 'timer', minutes: 8,
        levels: { easy: '편지 한 통을 전할 방법을 정하고 전하기 전 점검 칸을 표시한다.', base: '편지 두 통(선생님·친구)을 정해 점검하고, 원하는 학생은 학급에서 30초 낭독한다.', challenge: '편지를 받은 사람의 답장이나 반응을 다음 시간에 나누기로 하고 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"쓴 편지는 전할 때 완성돼요. 직접 건네기, 편지함에 넣기, 원하는 사람은 학급 낭독 30초." 낭독은 원하는 학생만, 받는 사람 이름은 밝히지 않고 \'○○께\'로 읽는다고 약속한다. 전하기 전 점검 칸을 함께 표시하게 한다. "쑥스러워서 못 주겠어요"라는 학생에게 "편지함에 넣거나 졸업식 날 건네도 괜찮아요. 전할 날을 정해 두는 것만으로도 시작이에요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '편지 전하기', labels: ['낭독', '박수'], plan: { work: 20, rest: 10, rounds: 2 }, safety: ['받는 사람 이름·연락처를 편지에 쓰지 않았다', '전할 방법을 정했다', '전할 날을 정했다'] }, prompt: '전하기 전 점검 세 칸을 확인하고, 낭독 30초·박수 5초를 다섯 번 하도록 타이머를 맞추세요(초).', target: { plan: { work: 30, rest: 5, rounds: 5 }, safety: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '감사 편지를 전할 때의 약속으로 알맞은 것은?', options: ['낭독은 모두 꼭 해야 한다', '낭독은 원하는 사람만, 이름 대신 ○○로 읽는다', '받는 사람의 연락처를 함께 적어 둔다'], answer: 1, difficulty: 0.15, explain: '편지는 전하는 사람과 받는 사람 모두 편하게 — 낭독은 고를 수 있고, 이름·연락처는 밝히지 않아요.' },
            { type: 'short', prompt: '편지를 언제, 어떻게 전할지 쓰세요.' },
          ],
        },
        worksheet: {
          title: '감사 편지 전하기',
          items: [
            { type: 'table', prompt: '전할 편지를 정리하세요(이름 대신 ○○).', columns: ['받는 사람', '전할 방법', '전할 날'], cells: [['○○ 선생님', '', ''], ['○○', '', '']] },
            { type: 'short', prompt: '편지를 전한 뒤(또는 받는다면) 기대하는 마음을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '낭독은 원하는 학생만 한다. 편지 내용을 평가하거나 걷지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 12학년 4. 자치 인수인계와 모두의 졸업 행사 (공동체 자치활동)
  // ======================================================================================================
  {
    const M = MOD('g12-self', [12]);
    const COST = [['찬성(부담 없음)', 48], ['부담되지만 낼 수 있음', 30], ['부담이 커서 어려움', 22]];
    const COST_G = [['기숙사·통학 먼 학생', 38], ['아르바이트하는 학생', 30], ['학교 가까이 사는 학생', 12]];
    const VENUE = { text: '가상 고등학교 졸업 준비 위원회. 졸업 행사 안건이 올라왔다. 가안: 시내 연회장 저녁 파티(한 사람 3만 원, 계단만 있음). 나안: 학교 강당 낮 행사(비용 없음, 경사로 있음).', who: '졸업 준비 위원회', motif: 'house', choices: [
      { id: 'vote', text: '바로 다수결로 정한다', result: '가안이 근소하게 이긴다. 휠체어를 쓰는 학생과 비용이 부담인 학생들이 조용해진다.', impact: [{ who: '일부 학생', text: '참여하기 어려워진다', tone: -1 }], ending: '다수가 좋은 행사가 모두가 갈 수 있는 행사는 아니다.' },
      { id: 'criteria', text: '투표 전에 접근성·비용 부담·다양성 기준으로 두 안을 따진다', result: '가안은 계단만 있고 비용 부담이 크다는 점이 드러난다.', impact: [{ who: '위원회', text: '빠지는 사람을 미리 본다', tone: 1 }],
        next: { text: '가안을 원하는 학생들이 "강당은 너무 평범해요"라고 말한다.', choices: [
          { id: 'mix', text: '나안을 바탕으로 원하는 분위기(조명·사진 부스)를 더하는 수정안을 만든다', result: '비용은 그대로 0원, 분위기는 살린 안이 나온다.', impact: [{ who: '모든 학생', text: '참여하면서 바람도 담긴다', tone: 1 }],
            next: { text: '수정안을 공지하려는데, 저녁 시간 아르바이트로 낮에도 못 오는 학생이 있다는 의견이 들어온다.', choices: [
              { id: 'record', text: '행사 영상·사진을 나중에 함께 보는 자리와 소수 의견 기록을 남긴다', result: '못 오는 학생도 졸업을 함께 기억할 길이 생긴다.', impact: [{ who: '소수 학생', text: '목소리가 기록된다', tone: 1 }], ending: '모두의 행사는 빠지는 사람을 끝까지 찾고, 그 목소리를 기록한다.' },
              { id: 'ignore', text: '몇 명뿐이니 그대로 진행한다', result: '그 학생들은 졸업 행사 이야기에서 멀어진다.', impact: [{ who: '소수 학생', text: '빠진 채로 남는다', tone: -1 }], ending: '\'몇 명뿐\'은 빠져도 된다는 뜻이 아니다.' }] } },
          { id: 'force', text: '평범해도 정해졌으니 따르라고 한다', result: '불만이 남고 준비 참여가 줄어든다.', impact: [{ who: '가안 지지 학생', text: '목소리가 무시된다', tone: -1 }], ending: '기준으로 따진 뒤에도 다른 쪽 바람을 담는 수정이 필요하다.' }] } },
      { id: 'cheap', text: '돈 내기 어려운 학생은 안 와도 된다고 한다', result: '행사가 \'낼 수 있는 학생\'의 자리가 된다.', impact: [{ who: '비용 부담 학생', text: '공동체에서 밀려난다', tone: -1 }], ending: '참여 조건을 개인 사정에 떠넘기면 모두의 행사가 아니다.' }] };
    const VENUE_R = [{ id: 'access', text: '누구나 갈 수 있는 장소인지(접근성) 먼저 따진다' }, { id: 'cost', text: '비용이 참여를 막지 않는지 따진다' }, { id: 'minor', text: '소수 의견과 빠지는 사람을 기록하고 보완한다' }, { id: 'major', text: '다수가 좋으면 모두에게 좋은 행사다', why: '다수가 좋아도 갈 수 없는 사람이 있으면 모두의 행사가 아니에요.' }, { id: 'self', text: '돈은 각자 사정이니 위원회가 신경 쓸 일이 아니다', why: '비용 부담은 참여를 가르는 기준이라 위원회가 함께 따져요.' }];
    const DOC_MUST = ['맡은 일 목록과 한 해 일정', '진행 중인 사업과 남은 일', '예산 사용 내역과 남은 돈', '함께 일한 사람의 역할(이름 대신 직책)'];
    const DOC_GOOD = ['잘된 점과 아쉬웠던 점(교훈)', '자주 받은 질문과 답', '참고할 회의록 위치'];
    const DOC_NO = ['임원 개인 연락처 목록', '후배 임원에 대한 소문', '다른 학생 개인 기록 사진'];
    const GOODS = [
      { id: 'ramp', text: '무대 경사로 대여', price: 100000 }, { id: 'caption', text: '자막·수어 화면 준비', price: 150000 }, { id: 'photo', text: '사진 부스 소품', price: 80000 },
      { id: 'light', text: '무대 조명 대여', price: 200000 }, { id: 'snack', text: '모두에게 같은 간식', price: 250000 }, { id: 'balloon', text: '풍선 장식', price: 60000 },
      { id: 'gift', text: '임원만 받는 기념품', price: 120000 },
    ];

    MODS.push(
      M({
        id: 'intro.lost', type: 'intro', title: '기록 없이 시작한 학생회',
        method: '기록 없이 시작한 학생회 장면', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 둘(예산 내역이 없음·행사 날짜를 모름)의 마음만 짝지어 보인다.', base: '장면 셋의 새 임원 마음을 짝짓는다.', challenge: '장면 넷을 짝짓고, 장면마다 어떤 기록이 있었다면 달랐을지 짐작해 말한다.' },
        intro: {
          teacher: '"가상 고등학교 새 학생회가 3월에 일을 시작했는데, 지난 임원들이 남긴 기록이 하나도 없어요." 시연 단추로 장면과 마음 카드가 짝지어지는 모습을 보여 준다. "말로 물어보면 되잖아요"라는 말이 나오면 "졸업한 선배에게 매번 연락할 수 있을까요? 선배도 다 기억할까요?"라고 되묻는다. 오늘은 후배에게 남길 인수인계 기록과, 모두가 참여하는 졸업 행사 결정을 다룬다고 밝힌다.',
          student: '기록 없이 일을 시작한 새 학생회 장면을 읽고, 장면마다 새 임원의 마음 카드를 짝지어 보세요.',
          demo: { tool: 'emotion', options: { cards: ['막막함', '당황', '불안', '답답함'], slots: [{ id: 'a', label: '작년 축제를 어떻게 준비했는지 아무도 모른다' }, { id: 'b', label: '예산이 얼마 남았는지 기록이 없다' }, { id: 'c', label: '진행 중이던 기부 행사가 있었다는 걸 뒤늦게 안다' }, { id: 'd', label: '같은 실수를 되풀이했다는 말을 듣는다' }] }, sequence: [{ match: { a: '막막함', b: '불안', c: '당황', d: '답답함' } }] },
          art: { draw: 'a paper student council room with empty shelves and an empty binder, new council members looking at a blank calendar on the wall, a dusty paper box in the corner', banner: '기록이 없으면 처음부터', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '학생회는 가상이다.',
      }),
      M({
        id: 'intro.survey', type: 'intro', title: '졸업 행사 비용 부담 조사',
        method: '졸업 행사 비용 부담 조사', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 의견 그래프 하나(찬성·부담·어려움)를 함께 읽는다.', base: '두 번째 그래프(어려움을 고른 학생의 사정별 비율)를 칠판에 띄워 견주며 부담이 큰 집단을 말한다.', challenge: '부담이 큰 집단이 참여할 수 있는 대안을 하나 말한다.' },
        intro: {
          teacher: '"가상 고등학교 3학년 100명에게 \'졸업 행사 참가비 3만 원\'에 대한 의견을 물었어요(예시 자료)." 시연 단추로 그래프를 읽고 \'부담이 커서 어려움\' 막대를 짚는다. "절반 가까이 괜찮다니 그냥 하죠"라는 말이 나오면 "22명이 빠진 졸업 행사를 \'우리 학년 행사\'라고 부를 수 있을까요?"라고 되묻는다. 학생 개인의 형편은 묻지 않으며, 자료는 가상이라고 밝힌다.',
          student: '가상 학년의 졸업 행사 참가비 의견 그래프를 읽고, 참가가 어려운 학생이 얼마나 되는지 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '참가비 3만 원에 대한 의견(가상 학년 100명)', unit: '명', xLabel: '의견', yLabel: '학생 수', data: COST, question: '\'부담이 커서 어려움\'을 고른 학생 수는?', choices: ['48명', '30명', '22명'] }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper bar chart on a school bulletin board beside a graduation poster with paper caps, a few paper students standing a little apart from the crowd', banner: '누가 빠지게 될까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '조사 자료는 가상이다. 우리 반 학생의 형편·비용 부담을 묻지 않는다.',
      }),

      M({
        id: 'activity.docs', type: 'activity', title: '인수인계 문서 항목',
        method: '인수인계 문서 요소 고르기', tool: 'sortboard', minutes: 18,
        levels: { easy: '문서 항목 카드 4장을 꼭 필요·있으면 좋음·불필요 바구니에 나누고, 틀리면 까닭을 듣고 다시 놓는다.', base: '문서 항목 카드 8장을 세 바구니에 나눈다.', challenge: '카드를 모두 나눈 뒤, 활동지에 빠진 항목 하나를 더 적는다.' },
        activity: {
          title: '남길 기록 고르기', tool: 'sortboard',
          teacher: '"인수인계 문서는 후배가 3월 첫날 펼쳐 보는 지도예요. 무엇이 꼭 있어야 할까요?" 카드를 놓을 때마다 "이게 없으면 후배는 무엇을 처음부터 다시 해야 할까요?"라고 묻는다. \'임원 개인 연락처 목록\'을 꼭 필요에 넣는 학생에게 "졸업한 사람의 개인 연락처가 문서로 계속 돌아다녀도 될까요? 이름 대신 직책과 학교 공식 연락 경로를 남기면 어떨까요?"라고 되묻는다.',
          task: '학생회 인수인계 문서 항목 카드를 꼭 필요·있으면 좋음·불필요 바구니에 나눠요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            Object.assign(SBQ('인수인계 문서 항목 카드를 세 바구니에 나누세요.', ['꼭 필요', '있으면 좋음', '불필요'], [DOC_MUST.slice(0, 3), DOC_GOOD.slice(0, 2), DOC_NO.slice(0, 3)], { k: 1, d: 0.3 }), {
              levels: {
                easy: { prompt: '인수인계 문서 항목 카드를 세 바구니에 나누세요(카드 4장).', toolOptions: { cards: [DOC_MUST[0], DOC_GOOD[0], DOC_NO[0], DOC_MUST[1]] }, target: { sort: { '꼭 필요': [DOC_MUST[0], DOC_MUST[1]], '있으면 좋음': [DOC_GOOD[0]], 불필요: [DOC_NO[0]] } } },
              } }),
            SBQ('인수인계 문서에 넣을 항목 카드를 바구니에 나누세요.', ['꼭 필요', '있으면 좋음', '불필요'], [[DOC_MUST[3], '연간 행사 날짜와 신청 기한'], [DOC_GOOD[2], '자주 쓰는 공지 양식'], ['임원끼리 나눈 사적인 대화 캡처', '개인 성적표']], { k: 1, d: 0.3 }),
            SBQ('인수인계 방법 카드를 \'기록으로 남는 방법\'과 \'사라지기 쉬운 방법\' 바구니에 나누세요.', ['기록으로 남는 방법', '사라지기 쉬운 방법'], [
              ['학생회 공용 폴더에 문서로 저장', '인수인계 회의 회의록 남기기', '담당 선생님과 함께 문서 확인'],
              ['졸업 전 복도에서 말로 알려 주기', '개인 휴대전화에만 저장', '필요하면 연락하라고만 하기'],
            ], { k: 2, d: 0.35, more: { conclude: '인수인계는 말이 아니라 기록이에요. 공용으로, 함께 확인해서, 개인 정보 없이 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 카드에 없었지만 인수인계 문서에 꼭 넣고 싶은 항목 하나와 그 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.handover', type: 'activity', title: '인수인계 문서 쓰기',
        method: '인수인계 문서 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 요소(맡은 일·일정·진행 중 사업)를 문장 틀을 보고 쓴다.', base: '다섯 요소(맡은 일·일정·진행 중 사업·연락 경로(직책)·교훈)를 쓰고 기준표로 점검한다.', challenge: '다섯 요소에 더해 실패한 일과 그 까닭(실패 기록)까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '역할 인수인계서', tool: 'rubric-writing',
          teacher: '"가상 학생회의 \'환경부장\'이 되어 후배에게 인수인계 문서를 써요." 칠판에 가상 환경부의 한 해(분리배출 캠페인·텀블러 대여·여름 절전 행사)를 적어 둔다. 연락처를 적으려는 학생에게 "개인 번호 대신 \'학생회 담당 선생님을 통해\'처럼 직책과 공식 경로를 써요"라고 말한다. 잘된 일만 쓰는 학생에게 "후배가 같은 실수를 피하려면 무엇이 더 도움이 될까요?"라고 묻는다.',
          task: '가상 학생회 환경부장이 되어 후배에게 남길 인수인계 문서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 학생회 환경부장의 인수인계 문서를 다섯 요소로 쓰고 점검하세요.', toolOptions: { topic: '환경부장 인수인계: 맡은 일·한 해 일정·진행 중 사업·연락 경로(직책)·교훈을 한 문장씩 쓰세요.', minChars: 100, maxChars: 450, sample: '맡은 일: 분리배출 캠페인과 텀블러 대여 관리. 일정: 4월 캠페인, 7월 절전 행사, 11월 결산. 진행 중 사업: 텀블러 30개 가운데 6개가 아직 반납되지 않았다. 연락 경로: 학생회 담당 선생님을 통해 물어보면 된다. 교훈: 캠페인은 홍보 기간을 두 주 이상 두어야 참여가 늘었다.' }, target: { selfCheck: ['맡은 일과 한 해 일정을 썼다', '진행 중인 사업과 남은 일을 썼다', '개인 연락처 대신 직책·공식 경로를 썼다', '다음 사람이 쓸 교훈을 썼다'] }, difficulty: 0.4,
              levels: {
                easy: { prompt: '환경부장 인수인계 문서의 세 요소(맡은 일·일정·진행 중 사업)를 쓰고 점검하세요(세 요소).', toolOptions: { topic: '환경부장 인수인계: 맡은 일·일정·진행 중 사업을 한 문장씩 쓰세요.', minChars: 50, starter: '맡은 일: ~. 일정: ~. 진행 중 사업: ~.' }, target: { selfCheck: ['맡은 일을 썼다', '한 해 일정을 썼다', '진행 중인 사업과 남은 일을 썼다'] } },
                challenge: { prompt: '다섯 요소에 더해 실패한 일과 그 까닭까지 쓰고 점검하세요(실패 기록 포함).', toolOptions: { minChars: 140 }, target: { selfCheck: ['맡은 일과 한 해 일정을 썼다', '진행 중인 사업과 남은 일을 썼다', '개인 연락처 대신 직책·공식 경로를 썼다', '다음 사람이 쓸 교훈을 썼다', '실패한 일과 그 까닭을 숨기지 않고 썼다'], mustInclude: [['실패', '아쉬', '잘 안 된']] } },
              } },
            RWQ('후배가 3월 첫 주에 가장 먼저 할 일 세 가지를 차례대로 쓰고 점검하세요.', '환경부장 후배가 3월 첫 주에 가장 먼저 할 일 세 가지를 차례대로 쓰세요.', ['할 일을 차례대로 썼다', '할 일마다 기한이나 시기를 썼다', '도움 받을 곳(직책)을 썼다'], { min: 40, max: 300, starter: '첫째, ~까지 ~를 한다. 둘째, ~', d: 0.35 }),
            RWQ('인수인계 문서를 받은 후배가 고마워할 \'교훈\' 한 가지를 두 문장으로 쓰고 점검하세요.', '후배에게 남길 교훈 한 가지를, 있었던 일과 함께 두 문장으로 쓰세요.', ['있었던 일을 구체적으로 썼다', '다음에 어떻게 하면 좋을지 썼다', '특정 학생을 탓하지 않았다'], { min: 40, max: 250, sent: [2, 3], d: 0.35, more: { conclude: '좋은 인수인계 문서는 일정·진행 중인 일·연락 경로·교훈을 남겨, 후배가 처음부터 다시 하지 않게 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 맡았던(또는 맡고 싶은) 학교 역할 하나에서 후배에게 남기고 싶은 교훈을 쓰세요(걷지 않음).' }] },
        notes: '역할은 가상 학생회 환경부장이다. 개인 연락처를 문서에 남기지 않고 직책·공식 경로를 쓴다.',
      }),
      M({
        id: 'activity.access', type: 'activity', title: '졸업 행사 장소 결정',
        method: '접근성 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(어떻게 정할지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(반대 의견 담기)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(그래도 못 오는 학생)까지 가서 근거 세 장(접근성·비용·소수 의견)을 고른다.' },
        activity: {
          title: '두 행사안 견주기', tool: 'dilemma',
          teacher: '"졸업 준비 위원회에 행사안이 둘 올라왔어요. 시내 연회장 저녁 파티(3만 원, 계단만)와 학교 강당 낮 행사(0원, 경사로)." 첫 갈림길에서 \'바로 다수결\'을 고르는 학생에게 "투표 결과에서 휠체어를 쓰는 친구와 비용이 부담인 친구는 어디에 있나요?"라고 묻는다. 두 번째 갈림길에서 \'따르라고 한다\'를 고르면 "가안을 원한 친구들의 바람은 무엇이었을까요? 그 바람을 나안에 담을 수는 없을까요?"라고 되묻는다. 정답은 정해져 있지 않고, 기준으로 따지는 과정을 본다고 밝힌다.',
          task: '졸업 행사 안건 갈림길을 따라가며 접근성·비용 부담·다양성을 따지는 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('졸업 준비 위원회가 모두 참여할 수 있는 결정을 하는 길을 고르고 근거를 고르세요.', VENUE, [['criteria', 'mix', 'record']], VENUE_R, ['access', 'cost'], { d: 0.4, hardReasons: ['access', 'cost', 'minor'] }),
            EXPLOREQ('\'바로 다수결\'·\'돈 못 내면 안 와도 된다\' 길도 끝까지 가 보고 결과를 견주세요.', VENUE, VENUE_R, ['다른 길의 끝 장면을 확인했다', '누가 빠지게 되는지 짚었다'], { d: 0.35 }),
            DILQ('행사 프로그램에 \'반별 장기자랑\'이 올라왔는데, 무대에 서기 어려운 학생도 있어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '행사 프로그램 안건: 반마다 무대에서 장기자랑을 꼭 하자. 무대에 서는 것이 큰 부담인 학생들도 있다.', who: '졸업 준비 위원회', motif: 'star', choices: [
              { id: 'all', text: '반 전원이 꼭 무대에 서게 한다', result: '몇몇 학생이 행사 당일 오지 않기로 한다.', impact: [{ who: '부담 느끼는 학생', text: '행사를 피하게 된다', tone: -1 }], ending: '모두를 같은 방식으로 참여시키면 오히려 빠지는 사람이 생긴다.' },
              { id: 'choose', text: '무대·영상·사진 전시 가운데 참여 방식을 고를 수 있게 한다', result: '무대에 서지 않는 학생은 반 사진 전시를 맡는다.', impact: [{ who: '모든 학생', text: '자기 방식으로 참여한다', tone: 1 }],
                next: { text: '영상 상영에 자막이 없어 소리를 듣기 어려운 학생이 볼 수 없다는 의견이 나온다.', choices: [
                  { id: 'caption', text: '영상에 자막을 넣고 안내 화면을 크게 한다', result: '누구나 영상 내용을 따라갈 수 있다.', impact: [{ who: '소리를 듣기 어려운 학생', text: '함께 즐긴다', tone: 1 }], ending: '참여 방식을 넓히고 접근성을 채우면 모두의 행사가 된다.' },
                  { id: 'nocap', text: '시간이 없으니 자막 없이 상영한다', result: '일부 학생은 화면만 바라본다.', impact: [{ who: '소리를 듣기 어려운 학생', text: '혼자 빠진다', tone: -1 }], ending: '\'시간이 없다\'는 까닭으로 접근성을 빼면 누군가 빠진다.' }] } }] },
              [['choose', 'caption']], [{ id: 'ways', text: '참여 방식을 여러 가지로 열어 둔다(다양성)' }, { id: 'caption', text: '보고 듣는 데 막힘이 없게 한다(접근성)' }, { id: 'same', text: '모두 똑같이 해야 공평하다', why: '같은 방식이 모두에게 같은 기회는 아니에요.' }], ['ways', 'caption'], { d: 0.35, more: { conclude: '모두의 행사는 같은 방식이 아니라 누구나 참여할 수 있는 방식을 찾는 데서 시작해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'다수가 좋으면 모두가 좋은 행사다\'라는 말을 오늘 갈림길을 들어 고쳐 쓰세요.' }] },
        notes: '위원회·행사안은 가상이다. 학생 개인의 형편·장애 여부를 묻지 않는다. 행사 결정의 찬반 정답을 정하지 않는다.',
      }),
      M({
        id: 'activity.budget', type: 'activity', title: '모두를 위한 행사 예산',
        method: '모두를 위한 행사 예산', tool: 'economy', minutes: 18,
        levels: { easy: '가상 예산 안에서 접근성 물품을 포함해 세 개를 고른다.', base: '예산 안에서 접근성 물품(경사로·자막)을 꼭 넣고 다섯 개를 고른다.', challenge: '학생 부담 0원 조건(학급 예산만 씀)에서 임원만 받는 기념품을 빼고 고른다.' },
        activity: {
          title: '예산 막대 안에서', tool: 'economy',
          teacher: '"졸업 행사 가상 예산은 학년 자치 예산 60만 원이에요. 학생에게 따로 걷지 않는 \'부담 0원\' 행사를 만들어 봐요." 고를 때마다 "이 물품은 누구의 참여를 돕나요? 모두인가요, 일부인가요?"라고 묻는다. 조명·풍선부터 고르는 모둠에게 "경사로가 없으면 무대에 오르지 못하는 친구가 있다면, 어느 것이 먼저일까요?"라고 되묻는다. 금액은 수업용 가상 값이라고 밝힌다.',
          task: '가상 예산 안에서 누구도 빠지지 않는 졸업 행사 물품을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 예산 60만 원. 무대 경사로와 자막·수어 화면을 꼭 넣고 다섯 개를 고르세요.', toolOptions: { mode: 'budget', budget: 600000, items: GOODS }, target: { budget: { must: ['ramp', 'caption'], count: 5 } }, difficulty: 0.3,
              levels: { easy: { prompt: '가상 예산 60만 원. 무대 경사로를 꼭 넣고 세 개를 고르세요(세 개).', target: { budget: { must: ['ramp'], count: 3 } } } } },
            { prompt: '예산이 40만 원으로 줄었어요. 경사로와 자막·수어 화면은 지키고, 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 400000, items: GOODS }, target: { budget: { must: ['ramp', 'caption'] } }, difficulty: 0.35 },
            { prompt: '학생 부담 0원 조건: 학년 자치 예산 60만 원만 써요. 경사로·자막·모두에게 같은 간식은 넣고, 임원만 받는 기념품은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 600000, items: GOODS }, target: { budget: { must: ['ramp', 'caption', 'snack'], not: ['gift'] } }, difficulty: 0.4,
              conclude: '모두를 위한 예산은 \'보기 좋은 것\'보다 \'누구도 못 오게 막지 않는 것\'을 먼저 사요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠이 가장 먼저 넣은 물품과, 그것이 누구의 참여를 돕는지 쓰세요.' }] },
        notes: '예산·가격은 수업용 가상 값이다. 학생 개인에게 행사비를 걷는 것을 전제로 하지 않는다.',
      }),

      M({
        id: 'wrap.meeting', type: 'wrap', title: '후배와 인수인계 회의',
        method: '인수인계 회의', tool: 'timer', minutes: 8,
        levels: { easy: '인수인계 문서 한 항목(진행 중 사업)만 설명하고 점검 칸을 표시한다.', base: '문서 전체를 차례대로 설명하고 절차 점검 칸을 모두 표시한다.', challenge: '후배 역 학생의 질문을 받는 질의응답까지 하고, 받은 질문을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"짝 가운데 한 사람은 졸업하는 환경부장, 한 사람은 새 환경부장 역이에요. 담당 선생님이 함께 있는 회의라고 생각해요." 타이머로 설명 2분, 질문 1분을 지킨다. 설명이 \'그냥 하면 돼\'로 끝나는 짝에게 "후배가 문서를 보며 다시 할 수 있게, 어디에 무엇이 적혀 있는지 짚어 줄까요?"라고 말한다. 회의가 끝나면 절차 점검 칸을 표시하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '인수인계 회의', timeUnit: 'min', labels: ['설명', '질문'], plan: { work: 1, rest: 1, rounds: 1 }, safety: ['담당 선생님(또는 역)이 함께 있다', '문서를 함께 보며 설명했다', '진행 중인 일과 남은 돈을 짚었다', '후배의 질문을 받았다'] }, prompt: '절차 점검 네 칸을 확인하고, 설명 2분·질문 1분을 두 번(역할 바꿔) 하도록 타이머를 맞추세요(분).', target: { plan: { work: 2, rest: 1, rounds: 2 }, safety: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '인수인계에 대한 말로 알맞은 것은?', options: ['말로만 알려 주면 충분하다', '문서를 함께 보며 설명하고 질문을 받는다', '개인 연락처를 남겨 두면 문서는 필요 없다'], answer: 1, difficulty: 0.15, explain: '인수인계는 문서로 남기고, 함께 보며 설명하고, 질문을 받아야 이어져요.' },
            { type: 'short', prompt: '후배 역에게 받은 질문(또는 받고 싶은 질문) 하나와 답을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '인수인계 회의 기록',
          items: [
            { type: 'table', prompt: '회의에서 넘긴 것을 적으세요.', columns: ['항목', '설명한 내용', '받은 질문'], cells: [['진행 중 사업', '', ''], ['남은 예산', '', ''], ['교훈', '', '']] },
            { type: 'check', prompt: '우리 회의가 지킨 절차에 표시하세요.', options: ['담당 선생님 함께', '문서 보며 설명', '남은 일·돈 짚기', '질문 받기'] },
          ],
        },
        notes: '역할극이다. 실제 후배와 회의할 때는 학생회 담당 교사가 함께한다.',
      }),
      M({
        id: 'wrap.decide', type: 'wrap', title: '졸업 행사 결정 회의',
        method: '졸업 행사 결정 회의', tool: 'timer', minutes: 8,
        levels: { easy: '행사안 둘을 기준표로 견주고 표결한다.', base: '행사안 셋을 기준표로 견주고 표결하며, 찬성·반대·소수 의견 수를 기록한다.', challenge: '결정 뒤 소수 의견을 담는 보완책 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"이제 결정할 차례예요. 투표 전에 기준 세 가지(접근성·비용 부담·다양성)를 한 번씩 소리 내어 확인해요." 안마다 30초 설명, 10초 생각을 타이머로 진행하고 표결한다. 기록 담당은 찬성·반대·소수 의견 수를 적는다. "다수결로 정했으니 끝"이라는 말이 나오면 "소수 의견에서 고칠 점을 하나 찾아 보완책으로 붙여 볼까요?"라고 묻는다. 가상 위원회의 결정 연습이며 실제 행사는 학교 절차로 정한다고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '행사안 설명 타이머', labels: ['설명', '생각'], plan: { work: 20, rest: 20, rounds: 2 } }, prompt: '행사안 하나에 설명 30초, 생각 10초씩 세 안을 하도록 타이머를 맞추세요(초).', target: { plan: { work: 30, rest: 10, rounds: 3 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '결정 회의 기록', fields: [{ label: '찬성', unit: '표', step: 1 }, { label: '반대', unit: '표', step: 1 }, { label: '소수 의견', unit: '개', step: 1 }] }, prompt: '결정 회의의 찬성·반대 표 수와 소수 의견 수를 기록판에 모두 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'short', prompt: '결정된 안에 소수 의견을 담는 보완책 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '졸업 행사 결정 회의',
          items: [
            { type: 'table', prompt: '행사안을 기준으로 견주세요.', columns: ['행사안', '접근성', '비용 부담', '다양성'], cells: [['가안', '', '', ''], ['나안', '', '', ''], ['수정안', '', '', '']] },
            { type: 'short', prompt: '결정과 함께 기록한 소수 의견 하나를 쓰세요.' },
          ],
        },
        notes: '가상 위원회 결정 연습이다. 실제 졸업 행사는 학생회·학교 절차로 정한다.',
      }),
    );
  }

  // ======================================================================================================
  // 12학년 5. 3년 탐구 돌아보기와 공공 정보 활용 (주제 탐구 활동)
  // ======================================================================================================
  {
    const M = MOD('g12-topic', [12]);
    const JOURNEY = ['1학년 봄: 학교 텃밭 물 주기 관찰 일지', '1학년 겨울: 교실 미세먼지 측정 모둠 탐구', '2학년 여름: 급식 잔반 줄이기 설문 프로젝트', '2학년 겨울: 동네 버스 정류장 그늘 지도 만들기', '3학년 봄: 학교 옥상 녹지 제안서 쓰기'];
    const SMS = { text: '가상 인물 하린이 졸업 뒤 이사를 앞두고 문자를 받았다. "[공공기관] 전입 신고 미완료로 과태료 예정. 아래 링크에서 즉시 본인 인증하세요."', who: '하린', motif: 'house', choices: [
      { id: 'click', text: '과태료가 걱정돼 바로 링크를 누르고 인증한다', result: '이름·주민번호 앞자리·카드 번호를 입력하는 화면이 나온다.', impact: [{ who: '하린', text: '개인 정보가 넘어갈 위험에 놓인다', tone: -1 }], ending: '겁을 주며 서두르게 하는 문자의 링크는 누르지 않는다.' },
      { id: 'stop', text: '링크를 누르지 않고 보낸 곳이 진짜인지 먼저 따진다', result: '발신 번호가 개인 휴대전화 번호처럼 보이고, 기관 이름이 \'공공기관\'뿐이다.', impact: [{ who: '하린', text: '위험 신호를 알아챈다', tone: 1 }],
        next: { text: '그래도 전입 신고를 해야 하는지는 알고 싶다.', choices: [
          { id: 'official', text: '검색 광고가 아닌 공식 누리집 주소를 직접 쳐서 들어가 안내를 찾는다', result: '공식 안내에서 전입 신고 방법과 기한을 찾는다.', impact: [{ who: '하린', text: '믿을 수 있는 정보를 얻는다', tone: 1 }],
            next: { text: '찾은 안내 글 아래에 \'게시일 3년 전\'이라고 적혀 있다.', choices: [
              { id: 'date', text: '최근 수정일을 확인하고, 헷갈리면 주민센터에 직접 묻는다', result: '바뀐 신청 방법을 확인하고 기한 안에 신고한다.', impact: [{ who: '하린', text: '최신 정보로 문제를 푼다', tone: 1 }], ending: '출처를 확인하고, 날짜를 확인하고, 헷갈리면 공식 창구에 묻는다.' },
              { id: 'old', text: '공식 누리집이니 날짜는 상관없다며 그대로 따른다', result: '바뀌기 전 방법으로 준비해 다시 해야 한다.', impact: [{ who: '하린', text: '시간을 들여 다시 준비한다', tone: 0 }], ending: '공식 정보도 날짜가 지나면 바뀌었을 수 있다.' }] } },
          { id: 'ad', text: '검색 첫 결과로 나온 \'대행 서비스\' 광고를 누른다', result: '수수료를 내라는 안내가 나온다.', impact: [{ who: '하린', text: '필요 없는 돈을 쓸 뻔한다', tone: -1 }], ending: '검색 첫 결과가 공식 정보는 아니다. 광고 표시를 확인한다.' }] } },
      { id: 'friend', text: '친구들 단체 대화방에 문자를 퍼 나르며 물어본다', result: '친구 몇이 링크를 눌러 본다.', impact: [{ who: '친구들', text: '같은 위험에 놓인다', tone: -1 }], ending: '의심스러운 링크는 퍼 나르지 않는다.' }] };
    const SMS_R = [{ id: 'src', text: '보낸 곳이 진짜 기관인지 출처를 먼저 따진다' }, { id: 'direct', text: '링크 대신 공식 누리집 주소를 직접 쳐서 들어간다' }, { id: 'date', text: '정보의 게시일·수정일(최신성)을 확인한다' }, { id: 'hurry', text: '과태료라고 하니 빨리 인증하는 것이 안전하다', why: '겁을 주며 서두르게 하는 것이 사칭의 대표 신호예요.' }, { id: 'top', text: '검색 첫 결과는 공식 정보다', why: '첫 결과에는 광고가 섞여 있어요. 광고 표시와 주소를 확인해요.' }];

    MODS.push(
      M({
        id: 'intro.timeline', type: 'intro', title: '3년 탐구 여정 시간 띠',
        method: '3년 탐구 경험 시간 띠', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 카드 3장(1학년 봄·2학년 여름·3학년 봄)을 함께 놓아 보인다.', base: '가상 인물 하린의 탐구 경험 카드 5장을 시간 띠에 놓는다.', challenge: '카드마다 배운 점 한 낱말(관찰·측정·설문·지도·제안)을 붙여 말하고, 흐름에서 이어진 관심을 짚는다.' },
        intro: {
          teacher: '"가상 고등학교 3학년 하린의 3년 탐구 기록이에요. 하나씩 보면 따로 같지만, 시간 띠에 놓으면 이어지는 관심이 보여요." 시연 단추로 카드가 차례대로 놓이는 모습을 보여 준다. "탐구는 성적에 넣으려고 한 거잖아요"라는 말이 나오면 "그 활동 가운데 지금도 궁금한 것이 남아 있나요? 그게 졸업 뒤에도 이어 갈 탐구의 씨앗이에요"라고 말한다. 내 3년은 걷지 않는 활동지에만 적게 하고, 오늘은 탐구 돌아보기와 공공 정보 활용을 다룬다고 밝힌다.',
          student: '가상 인물 하린의 3년 탐구 경험 카드를 시간 띠에 차례대로 놓고, 하린의 관심이 어떻게 이어졌는지 살펴보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['1학년', '3학년'], slots: 5, cards: [JOURNEY[3], JOURNEY[0], JOURNEY[4], JOURNEY[1], JOURNEY[2]] }, sequence: [{ order: JOURNEY }] },
          art: { draw: 'a long paper ribbon timeline across a classroom wall with five paper project cards pinned along it, a small garden, a dust meter, a lunch tray, a bus stop and a green rooftop drawn on them', banner: '3년의 탐구가 이어져요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '하린은 가상 인물이다. 학생의 실제 탐구 이력·생활기록부 내용을 발표시키지 않는다.',
      }),
      M({
        id: 'intro.problem', type: 'intro', title: '자립 생활 문제 장면',
        method: '자립 생활 문제 장면', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 정보 카드 보기 둘 가운데서 함께 고른다.', base: '정보 카드 보기 셋 가운데 이 문제를 풀 때 찾아야 할 정보를 고른다.', challenge: '고른 정보를 어느 기관(주민센터·건강 보험 담당 기관 등) 누리집에서 찾을지 짐작해 말한다.' },
        intro: {
          teacher: '"가상 인물 하린이 졸업 뒤 다른 도시로 이사해요. 이사하면 해야 할 일이 생겨요. 전입 신고, 건강 보험 주소 바꾸기… 무엇부터 찾아봐야 할까요?" 시연 단추로 찾아야 할 정보 카드가 골라지는 모습을 보여 준다. "검색하면 첫 줄에 다 나와요"라는 말이 나오면 "첫 줄이 공식 기관이 쓴 글인지, 광고인지 어떻게 알 수 있을까요?"라고 되묻는다. 생활 문제는 공식 기관의 최신 정보로 풀어야 한다는 점을 짚는다.',
          student: '이사를 앞둔 하린의 생활 문제 장면을 읽고, 문제를 풀기 위해 찾아야 할 정보 카드를 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '찾아야 할 정보', cards: ['전입 신고 방법과 기한', '필요한 서류', '이삿짐 업체 할인 광고', '연예인 이사 소식'] }, sequence: [{ pick: ['전입 신고 방법과 기한', '필요한 서류'] }] },
          art: { draw: 'a paper moving scene with cardboard boxes, a student holding a phone with a paper search screen, a small paper community service center building in the distance', banner: '무엇을 찾아야 할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '절차의 세부(기한·서류)는 다루지 않고, 찾아야 할 정보와 찾는 곳을 고르는 데 초점을 둔다.',
      }),

      M({
        id: 'activity.strength', type: 'activity', title: '하린의 강점 생각그물',
        method: '강점 생각그물', tool: 'mindmap', minutes: 18,
        levels: { easy: '관심·강점 두 가지에 카드를 붙인다.', base: '관심·강점·증거 경험 세 가지에 카드를 나눈다.', challenge: '강점 가지마다 그것을 보여 주는 증거 경험을 짝짓고, 증거 없는 말을 가려낸다.' },
        activity: {
          title: '관심·강점·증거', tool: 'mindmap',
          teacher: '"강점은 \'나는 성실해\'처럼 말하는 것이 아니라, 그것을 보여 주는 경험으로 말해요." 가운데 하린을 두고 카드를 나누게 한다. \'끈기가 있다\'를 증거 경험에 넣는 학생에게 "이건 강점이에요. 끈기를 보여 주는 하린의 장면은 어느 카드일까요?"라고 묻는다. 마지막 문항에서 증거 없는 말과 증거 있는 말을 견주며, 학생 자신의 강점은 걷지 않는 활동지에 쓰게 한다.',
          task: '가상 인물 하린의 탐구 경험에서 관심·강점·증거를 나누고, 강점과 증거를 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            Object.assign(SORTQ('하린의 카드를 관심·강점·증거 경험 가지에 나누세요.', ['관심', '강점', '증거 경험'], [
              ['도시의 녹지와 기온', '사람들이 덜 버리게 하는 방법'],
              ['오래 꾸준히 기록한다', '설문 결과를 그래프로 정리한다'],
              ['텃밭 관찰 일지를 한 학기 동안 썼다', '잔반 설문 200명 결과를 그래프로 발표했다'],
            ], { k: 1, d: 0.3, opt: { topic: '하린' } }), {
              levels: { easy: { prompt: '하린의 카드를 관심·강점 가지에 나누세요(가지 둘).', toolOptions: { slots: ['관심', '강점'], cards: ['도시의 녹지와 기온', '오래 꾸준히 기록한다', '사람들이 덜 버리게 하는 방법', '설문 결과를 그래프로 정리한다'] }, target: { sort: { 관심: ['도시의 녹지와 기온', '사람들이 덜 버리게 하는 방법'], 강점: ['오래 꾸준히 기록한다', '설문 결과를 그래프로 정리한다'] } } } } }),
            MATCHQ('하린의 강점마다 그것을 보여 주는 증거 경험을 짝지으세요.', [['오래 꾸준히 기록한다', '텃밭 일지를 한 학기 동안 썼다'], ['자료를 그래프로 정리한다', '잔반 설문 결과를 그래프로 발표했다'], ['지도로 문제를 보여 준다', '정류장 그늘 지도를 만들었다']], { k: 2, extra: ['선생님께 칭찬을 들었다'], d: 0.3, opt: { topic: '강점과 증거' }, more: { hints: ['강점에 쓰인 행동(기록·정리·지도)이 경험 카드에도 보이는지 찾아요.'] } }),
            PICKQ('하린의 자기소개 문장 가운데 증거가 함께 있는 문장을 모두 고르세요.', ['"한 학기 동안 텃밭 일지를 쓰며 꾸준함을 길렀다"', '"정류장 그늘 지도를 만들며 지도로 문제를 보여 주는 법을 익혔다"'], ['"나는 무엇이든 열심히 한다"', '"나는 리더십이 뛰어나다"'], { d: 0.35, opt: { topic: '증거 있는 말', basket: '증거가 있는 문장' }, more: { conclude: '강점은 증거 경험과 함께 말할 때 힘이 생겨요. 졸업 뒤 이어 갈 탐구도 그 강점에서 출발해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 3년을 돌아보며 강점과 증거를 적어 보세요(걷지 않음 — 나만 봐요).', columns: ['관심', '강점', '증거 경험'], cells: [['', '', ''], ['', '', '']] }] },
        notes: '채점은 가상 인물 하린의 카드로 한다. 학생 자신의 강점·경험은 걷지 않는 활동지에만 쓴다.',
      }),
      M({
        id: 'activity.next', type: 'activity', title: '이어 갈 탐구 계획 글',
        method: '이어 갈 탐구 계획 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '빈칸 틀("나는 ~에 관심이 있고 ~를 잘한다. 졸업 뒤 ~를 탐구하고 ~로 배운다")을 채운다.', base: '하린의 강점과 이어지는 탐구 주제·배움 방법을 한 문단으로 쓰고 기준표로 점검한다.', challenge: '한 문단에 더해 첫 달에 할 일 세 가지를 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '졸업 뒤 탐구 계획', tool: 'rubric-writing',
          teacher: '"탐구는 학교가 끝나도 이어 갈 수 있어요. 도서관, 공개 강의, 동아리, 일터에서도요." 하린의 생각그물을 다시 보며 기준표(강점 연결·구체성·배움 방법)를 함께 읽는다. \'환경을 공부하겠다\'처럼 넓게 쓴 학생에게 "하린의 강점(기록·그래프·지도)으로 무엇을 잴 수 있을까요? 질문으로 좁혀 볼까요?"라고 묻는다. 진로 선택을 정하는 글이 아니라 관심을 이어 가는 글이라고 밝힌다.',
          task: '가상 인물 하린이 졸업 뒤 이어 갈 탐구 계획을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '하린의 강점과 이어지는 졸업 뒤 탐구 주제와 배움 방법을 한 문단으로 쓰고 점검하세요.', toolOptions: { topic: '하린의 졸업 뒤 탐구 계획: 이어 갈 탐구 질문, 강점과의 연결, 배움 방법을 한 문단으로 쓰세요.', minChars: 80, maxChars: 450, sample: '하린은 도시 녹지와 기온에 관심이 있고, 꾸준히 기록하고 그래프로 정리하는 강점이 있다. 졸업 뒤에는 \'새로 이사한 동네의 공원 크기와 여름 기온은 어떤 관계일까\'를 탐구한다. 공공 기상 자료와 직접 잰 기온을 함께 기록하고, 도서관 공개 강의로 도시 계획 기초를 배운다.' }, target: { selfCheck: ['이어 갈 탐구 질문을 썼다', '강점·경험과 이었다', '배움 방법(자료·강의·동아리 등)을 썼다'] }, difficulty: 0.4,
              levels: {
                easy: { prompt: '빈칸 틀을 채워 하린의 졸업 뒤 탐구 계획을 쓰고 점검하세요(빈칸 틀).', toolOptions: { minChars: 40, starter: '하린은 ~에 관심이 있고 ~를 잘한다. 졸업 뒤 ~를 탐구하고 ~로 배운다.' } },
                challenge: { prompt: '한 문단 계획에 더해 첫 달에 할 일 세 가지를 쓰고 점검하세요(첫 달 계획).', toolOptions: { minChars: 120 }, target: { selfCheck: ['이어 갈 탐구 질문을 썼다', '강점·경험과 이었다', '배움 방법(자료·강의·동아리 등)을 썼다', '첫 달에 할 일 세 가지를 썼다'] } },
              } },
            RWQ('하린의 넓은 계획 \'환경을 더 공부하겠다\'를 잴 수 있는 탐구 질문으로 좁혀 쓰고 점검하세요.', '"환경을 더 공부하겠다"를 하린의 강점으로 잴 수 있는 탐구 질문 하나로 좁혀 쓰세요.', ['잴 수 있는 질문으로 좁혔다', '하린의 강점(기록·그래프·지도) 하나를 썼다', '무엇을 잴지 썼다'], { min: 30, max: 250, starter: '질문: ~은 ~에 따라 달라질까?', d: 0.35 }),
            RWQ('하린이 탐구에 쓸 공공 자료를 고를 때 지킬 기준 두 가지를 두 문장으로 쓰고 점검하세요.', '하린이 탐구에 쓸 공공 자료를 고를 때 지킬 기준 두 가지를 두 문장으로 쓰세요.', ['출처(어느 기관)를 확인한다고 썼다', '최신성(게시일·수정일)을 확인한다고 썼다', '광고·사칭과 구별하는 방법을 썼다'], { min: 40, max: 250, sent: [2, 3], d: 0.35, more: { conclude: '졸업 뒤 탐구는 강점에서 출발해 잴 수 있는 질문으로 좁히고, 믿을 만한 공공 자료로 이어 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '졸업 뒤 내가 이어 가 보고 싶은 궁금한 점 하나를 쓰세요(걷지 않음 — 나만 봐요).' }] },
        notes: '채점·자기 점검은 가상 인물 하린의 계획으로 한다. 학생의 진로·진학 계획을 묻거나 채점하지 않는다.',
      }),
      M({
        id: 'activity.fake', type: 'activity', title: '사칭 문자 갈림길',
        method: '사칭·광고 정보 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(문자 링크를 누를지)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(어디서 정보를 찾을지)까지 가서 근거 두 장을 고른다.', challenge: '세 번째 갈림길(오래된 안내)까지 가서 근거 세 장(출처·직접 접속·최신성)을 고른다.' },
        activity: {
          title: '하린의 문자 한 통', tool: 'dilemma',
          teacher: '"\'과태료\', \'즉시\', \'본인 인증\'. 이 세 낱말이 한 문자에 다 있으면 멈춰야 해요." 첫 갈림길에서 \'바로 링크\'를 고르는 학생에게 "진짜 기관이라면 문자 링크로 카드 번호를 물을까요?"라고 묻는다. 두 번째 갈림길에서 \'검색 첫 결과 광고\'를 고르면 "광고 표시를 봤나요? 주소창의 주소는 공식 기관 주소인가요?"라고 되묻는다. 실제 기관 이름과 주소는 교사가 공식 안내로 확인해 칠판에 적어 준다.',
          task: '사칭 문자와 광고 정보 갈림길을 따라가며 출처·최신성을 확인하는 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('하린이 사칭 문자에 속지 않고 공식 정보로 문제를 푸는 길을 고르고 근거를 고르세요.', SMS, [['stop', 'official', 'date']], SMS_R, ['src', 'direct'], { d: 0.4, hardReasons: ['src', 'direct', 'date'] }),
            EXPLOREQ('\'바로 링크 누르기\'·\'퍼 나르기\' 길도 끝까지 가 보고 결과를 견주세요.', SMS, SMS_R, ['다른 길의 끝 장면을 확인했다', '하린과 친구들에게 어떤 위험이 생겼는지 짚었다'], { d: 0.35 }),
            DILQ('하린이 \'청년 월세 지원 마감 임박! 지금 신청\'이라는 SNS 광고를 봤어요. 알맞은 길을 고르고 근거를 고르세요.', { text: 'SNS에 "청년 월세 지원 마감 임박! 지금 신청하면 바로 지급" 광고가 떴다. 신청 버튼을 누르면 상담료 결제 화면이 나온다는 댓글이 있다.', who: '하린', motif: 'star', choices: [
              { id: 'pay', text: '마감이라니 상담료를 내고 신청한다', result: '돈을 냈지만 공공 지원 신청은 되지 않았다.', impact: [{ who: '하린', text: '돈만 잃는다', tone: -1 }], ending: '공공 지원 신청에 대행 상담료를 요구하는 광고는 의심한다.' },
              { id: 'check', text: '광고를 누르지 않고, 지원이 실제로 있는지 공식 기관 안내를 찾는다', result: '비슷한 지원이 있지만 조건과 기간이 광고와 다르다는 것을 안다.', impact: [{ who: '하린', text: '정확한 조건을 안다', tone: 1 }],
                next: { text: '공식 안내를 읽어도 내가 대상인지 헷갈린다.', choices: [
                  { id: 'ask', text: '공식 안내에 적힌 상담 창구나 주민센터에 직접 묻는다', result: '대상 여부와 신청 방법을 확인한다.', impact: [{ who: '하린', text: '헛걸음 없이 신청을 준비한다', tone: 1 }], ending: '헷갈릴 때는 광고가 아니라 공식 창구에 묻는다.' },
                  { id: 'guess', text: '아마 될 거라고 짐작하고 그냥 둔다', result: '신청 기간이 지나간다.', impact: [{ who: '하린', text: '받을 수 있던 지원을 놓친다', tone: -1 }], ending: '확인하지 않은 짐작은 기회도 놓치게 한다.' }] } }] },
              [['check', 'ask']], [{ id: 'nopay', text: '공공 지원 신청을 미끼로 돈을 요구하면 의심한다' }, { id: 'official', text: '지원 조건은 공식 기관 안내와 창구로 확인한다' }, { id: 'rush', text: '마감 임박이면 일단 신청부터 하는 것이 낫다', why: '서두르게 하는 말은 확인할 시간을 빼앗는 신호예요.' }], ['nopay', 'official'], { d: 0.35, more: { conclude: '출처·최신성을 확인하고, 링크 대신 공식 주소로, 헷갈리면 공식 창구에 — 자립 생활의 정보 습관이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사칭 문자의 위험 신호 세 가지를 낱말로 쓰세요.' }] },
        notes: '문자·광고·지원 제도는 가상이다. 실제 공공 지원 제도의 이름·조건·금액은 다루지 않는다.',
      }),
      M({
        id: 'activity.steps', type: 'activity', title: '공공 정보로 해결하는 차례',
        method: '공공 정보로 해결하는 차례', tool: 'story', minutes: 18,
        levels: { easy: '장면 카드 3장(문제 정리·공식 누리집·신청)을 차례로 놓는다.', base: '장면 카드 4장(최신성 확인 더함)을 차례로 놓고 함정 카드를 남긴다.', challenge: '공식 누리집이 막혔을 때의 대체 경로 장면까지 차례로 놓는다.' },
        activity: {
          title: '정보 찾기 네 장면', tool: 'story',
          teacher: '"생활 문제를 공공 정보로 푸는 길은 네 장면이에요. 문제 정리 → 공식 누리집 찾기 → 최신성 확인 → 신청." 장면을 놓을 때마다 "이 장면을 건너뛰면 무엇이 잘못될 수 있나요?"라고 묻는다. \'검색 첫 결과 누르기\'를 놓는 학생에게 "그 결과가 공식 기관 주소인지 확인했나요?"라고 되묻는다. 누리집이 막히거나 어려울 때는 공식 상담 창구·주민센터 방문 같은 다른 길이 있다는 점을 짚는다.',
          task: '하린의 생활 문제를 공공 정보로 해결하는 장면 카드를 차례로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('하린의 전입 신고 문제를 해결하는 장면을 차례로 놓으세요.', ['무엇을 해야 하는지 문제를 정리한다', '공식 기관 누리집 주소를 직접 찾아 들어간다', '안내 글의 게시일·수정일을 확인한다', '안내에 따라 신청한다'], { k: 3, traps: ['검색 첫 결과 광고를 누른다'], d: 0.3 }),
            ORDERQ('하린이 이사 뒤 건강 보험 주소 변경을 확인하는 장면을 차례로 놓으세요.', ['바꿔야 할 정보가 무엇인지 적는다', '공식 기관 안내 화면을 찾는다', '안내가 최근 것인지 날짜를 본다', '필요하면 공식 상담 창구에 묻는다'], { k: 3, traps: ['단체 대화방에 아는 사람 있냐고 묻고 끝낸다'], d: 0.3 }),
            ORDERQ('공식 누리집 접속이 막혔을 때 하린의 대체 경로 장면을 차례로 놓으세요.', ['접속이 안 되는 화면을 기록해 둔다', '공식 안내에 적힌 상담 창구를 찾는다', '주민센터에 직접 가서 묻는다', '받은 안내대로 신청하고 접수 확인을 받는다'], { k: 3, traps: ['문자로 온 다른 링크로 접속한다'], d: 0.35, more: { conclude: '공식 누리집이 막혀도 공식 창구와 직접 방문이라는 다른 길이 있어요. 낯선 링크는 대체 경로가 아니에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'검색 첫 결과가 공식 정보다\'라는 말이 왜 틀렸는지 한 문장으로 쓰세요.' }] },
        notes: '절차는 일반적인 정보 찾기 흐름이다. 실제 신고·변경 절차와 기한은 교사가 공식 안내로 확인해 준다.',
      }),

      M({
        id: 'wrap.share', type: 'wrap', title: '나의 탐구 여정 발표',
        method: '탐구 여정 발표', tool: 'timer', minutes: 8,
        levels: { easy: '모둠 안에서 1분 동안 하린 또는 나의 탐구 여정 한 장면을 말한다.', base: '모둠 안에서 한 사람 3분 동안 탐구 여정과 다음 계획을 말한다(시간이 모자라면 두 사람만).', challenge: '발표 뒤 듣는 사람에게 질문 하나를 받고 답한다.' },
        wrap: {
          teacher: '"오늘 정리한 탐구 여정을 모둠 안에서 나눠요. 내 이야기가 부담되면 하린의 여정을 소개해도 괜찮아요." 타이머를 맞추고 신호와 함께 시작한다. 발표가 결과 자랑으로만 흐르면 "그 탐구에서 지금도 궁금한 것은 무엇인가요?"라고 묻는다. 듣는 사람은 평가하지 않고 질문 하나를 준비한다는 약속을 먼저 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '탐구 여정 발표', timeUnit: 'min', labels: ['발표', '질문'], plan: { work: 1, rest: 0, rounds: 1 } }, prompt: '발표 3분, 질문 1분을 두 사람이 하도록 타이머를 맞추세요(분).', target: { plan: { work: 3, rest: 1, rounds: 2 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '발표 점검' }, prompt: '내 발표(또는 소개)를 점검 칸으로 표시하세요.', target: { selfCheck: ['이어진 관심을 말했다', '강점과 증거 경험을 말했다', '다음에 이어 갈 계획을 말했다'] }, difficulty: 0.1 },
            { type: 'short', prompt: '발표에서 받은(또는 한) 질문 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '탐구 여정 발표',
          items: [
            { type: 'table', prompt: '발표할 내용을 정리하세요.', columns: ['이어진 관심', '강점과 증거', '다음 계획'], cells: [['', '', '']] },
            { type: 'short', prompt: '친구 발표에서 배운 점 하나를 쓰세요(친구 이름은 쓰지 않아요).' },
          ],
        },
        notes: '발표는 원하는 학생만 자기 이야기로 하고, 원하지 않으면 가상 인물 하린의 여정을 소개한다. 발표를 평가하지 않는다.',
      }),
      M({
        id: 'wrap.lab', type: 'wrap', title: '공공 정보 찾기 실습',
        method: '공공 정보 찾기 실습', tool: 'timer', minutes: 8,
        levels: { easy: '생활 문제 하나(전입 신고)의 공식 정보를 찾아 출처·날짜를 활동지에 적는다.', base: '생활 문제 둘의 공식 정보를 찾고, 찾은 공식 출처 수를 기록판에 적는다.', challenge: '찾은 정보와 오늘의 사칭 문자를 견주어 다른 점을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"모둠마다 생활 문제 하나를 골라 공식 정보를 찾아요. 3분 안에 찾고, 출처와 날짜를 적어요." 시작 전 점검 칸을 함께 확인한다. 검색 결과의 광고를 누르려는 모둠에게 "광고 표시를 봤나요? 주소창을 함께 읽어 볼까요?"라고 말한다. 기기가 없는 교실에서는 교사가 공식 누리집 화면을 띄워 함께 찾는다. 개인 정보를 입력하는 화면까지는 가지 않는다고 약속한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '공공 정보 찾기', timeUnit: 'min', labels: ['찾기', '적기'], plan: { work: 2, rest: 2, rounds: 1 }, safety: ['문자·광고 링크가 아니라 주소를 직접 쳐서 들어간다', '주소가 공식 기관 주소인지 본다', '게시일·수정일을 확인한다', '개인 정보를 입력하지 않는다'] }, prompt: '시작 전 점검 네 칸을 확인하고, 찾기 3분·적기 1분 한 번으로 타이머를 맞추세요(분).', target: { plan: { work: 3, rest: 1, rounds: 1 }, safety: true }, difficulty: 0.2 },
            { type: 'tool', tool: 'timer', options: { title: '찾은 정보 기록', fields: [{ label: '공식 출처', unit: '곳', step: 1 }, { label: '광고·사칭 의심', unit: '곳', step: 1 }] }, prompt: '찾은 공식 출처 수와 광고·사칭으로 의심한 곳의 수를 기록판에 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'short', prompt: '찾은 공식 정보와 오늘의 사칭 문자가 어떻게 달랐는지 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '공공 정보 찾기 기록',
          items: [
            { type: 'table', prompt: '찾은 정보를 기록하세요.', columns: ['생활 문제', '출처(기관)', '게시일·수정일', '찾은 내용'], cells: [['', '', '', ''], ['', '', '', '']] },
            { type: 'check', prompt: '내가 지킨 확인 습관에 표시하세요.', options: ['주소 직접 입력', '공식 주소 확인', '날짜 확인', '개인 정보 입력 안 함'] },
          ],
        },
        notes: '교구 한계: timer 기록판은 수만 적어서 출처·날짜 글은 활동지에 쓴다. 기기가 없으면 교사가 화면을 띄워 함께 찾는다.',
      }),
    );
  }

  // ======================================================================================================
  // 12학년 6. 졸업 뒤 이어 갈 봉사와 시민 참여 (프로젝트형 봉사활동 — 개인 프로젝트형 봉사)
  // ======================================================================================================
  {
    const M = MOD('g12-serve', [12]);
    const WEEK = [['일·학업', 40], ['잠', 30], ['식사·집안일', 10], ['이동', 5], ['여가', 10], ['봉사·참여', 5]];
    const CHOOSE = { text: '가상 인물 은재는 졸업 뒤 평일엔 일하고, 주말 하루는 쉰다. 졸업 뒤에도 봉사나 시민 참여를 이어 가고 싶다. 가까운 곳에 세 가지 기회가 있다.', who: '은재', motif: 'tree', choices: [
      { id: 'big', text: '매일 저녁 두 시간씩 하는 큰 봉사 단체 활동', result: '처음 두 주는 열심히 나가지만 일과 겹쳐 지친다.', impact: [{ who: '은재', text: '쉬는 시간이 사라진다', tone: -1 }],
        next: { text: '한 달째, 은재는 일이 늦게 끝나 세 번 연속 빠졌다.', choices: [
          { id: 'quit', text: '미안해서 말없이 그만둔다', result: '함께하던 사람들이 은재의 자리를 비워 둔 채 기다린다.', impact: [{ who: '함께하던 사람들', text: '갑자기 빈자리가 생긴다', tone: -1 }], ending: '맞지 않는 계획은 말없이 끊기기 쉽다.' },
          { id: 'tell', text: '담당자에게 사정을 말하고 주 1회로 줄인다', result: '부담이 줄어 꾸준히 나간다.', impact: [{ who: '은재', text: '이어 갈 수 있게 된다', tone: 1 }], ending: '처음 계획이 맞지 않으면 말하고 줄여 이어 간다.' }] } },
      { id: 'fit', text: '토요일 오전 두 시간, 동네 도서관 어린이 책 읽어 주기', result: '은재가 좋아하는 책과 쉬는 날이 맞는다.', impact: [{ who: '은재', text: '관심과 시간이 맞는다', tone: 1 }],
        next: { text: '석 달째, 도서관 담당자가 "책 읽어 주기 순서표를 만들어 줄 수 있어요?"라고 묻는다.', choices: [
          { id: 'strength', text: '정리하는 강점을 살려 다른 봉사자와 함께 순서표를 만든다', result: '봉사자 모두가 일정을 한눈에 보게 된다.', impact: [{ who: '도서관', text: '봉사가 더 잘 굴러간다', tone: 1 }], ending: '시간·관심·강점이 맞는 참여는 오래가고 넓어진다.' },
          { id: 'alone', text: '혼자 다 떠맡아 매주 밤새 만든다', result: '순서표는 생겼지만 은재가 지친다.', impact: [{ who: '은재', text: '지속하기 어려워진다', tone: -1 }], ending: '강점을 쓰더라도 혼자 다 떠맡으면 오래가지 못한다.' }] } },
      { id: 'once', text: '한 번 하고 끝나는 행사 봉사만 골라 사진을 남긴다', result: '봉사 시간 기록은 쌓이지만 이어지는 관계는 없다.', impact: [{ who: '은재', text: '하고 싶던 \'이어 가기\'는 못 한다', tone: 0 }], ending: '한 번의 참여도 의미 있지만, 이어 가려면 내 생활에 맞는 자리를 찾는다.' }] };
    const CHOOSE_R = [{ id: 'time', text: '내 시간에 맞는 빈도·기간이라야 이어 갈 수 있다' }, { id: 'interest', text: '관심과 강점이 맞으면 오래 즐겁게 한다' }, { id: 'talk', text: '맞지 않으면 말하고 줄여서라도 이어 간다' }, { id: 'more', text: '많이 할수록 좋은 봉사다', why: '많이보다 꾸준히가 받는 사람에게 더 힘이 돼요.' }, { id: 'end', text: '봉사는 학교를 졸업하면 끝난다', why: '졸업 뒤에도 동네·일터·온라인에서 참여할 수 있어요.' }];
    const TOWN = { title: '가상 동네 참여 지도', grid: [6, 4], scale: { cell: 300, unit: 'm' }, places: [{ name: '은재의 집', icon: 'house', at: [0, 3] }, { name: '동네 도서관', icon: 'library', at: [3, 3] }, { name: '하천 정화 모임 장소', icon: 'park', at: [5, 1] }, { name: '주민센터', icon: 'office', at: [2, 1] }, { name: '시장', icon: 'market', at: [4, 0] }, { name: '역', icon: 'station', at: [0, 0] }] };

    MODS.push(
      M({
        id: 'intro.time', type: 'intro', title: '졸업 뒤 한 주 시간 띠',
        method: '졸업 뒤 한 주 시간 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 네 항목(일·학업·잠·여가·봉사)으로 묶어 띠그래프를 함께 읽는다.', base: '여섯 항목 띠그래프를 완성하고 봉사·참여 칸이 얼마인지 찾는다.', challenge: '봉사·참여 5%가 한 주에 몇 시간쯤인지 어림해 그 계획이 현실적인지 말한다.' },
        intro: {
          teacher: '"가상 인물 은재의 졸업 뒤 한 주 시간 계획을 띠그래프로 그려요. 봉사·참여 칸은 어디쯤일까요?" 시연 단추로 띠가 채워지는 모습을 보여 준다. "5%면 너무 적어서 의미 없어요"라는 말이 나오면 "한 주 168시간의 5%는 몇 시간쯤일까요? 그 시간을 꾸준히 쓰면 일 년에 얼마일까요?"라고 되묻는다. 졸업 뒤 참여는 크게가 아니라 내 시간에 맞게 꾸준히라는 점을 짚는다.',
          student: '가상 인물 은재의 졸업 뒤 한 주 시간 계획을 띠그래프로 그리고, 봉사·참여에 쓸 수 있는 시간을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'band', mode: 'build', title: '은재의 졸업 뒤 한 주 시간(가상, %)', unit: '%', data: WEEK, tickPct: 5 }, sequence: [{ build: true }] },
          art: { draw: 'a long paper strip divided into colored blocks for work, sleep, meals, travel, leisure and a small green block for volunteering, a young adult walking with a tote bag toward a library', banner: '작은 칸도 꾸준히', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
        notes: '시간 배분은 가상 인물 은재의 계획이다. 학생의 졸업 뒤 계획을 묻지 않는다.',
      }),
      M({
        id: 'intro.six', type: 'intro', title: '3년 자율·자치 여섯 갈래',
        method: '3년 자율·자치 여섯 갈래 떠올리기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 자율활동 세 갈래(적응·탐구·봉사) 바구니에 카드를 한 장씩 넣어 보인다.', base: '자율활동 세 갈래 카드를 나눈 뒤, 자치활동 세 갈래(생활습관·관계·자치)는 칠판에서 함께 떠올린다.', challenge: '갈래마다 3년 동안 한 활동 두 가지를 걷지 않는 활동지에 적는다.' },
        intro: {
          teacher: '"3년 동안 한 자율·자치활동은 여섯 갈래로 나눌 수 있어요. 자율활동은 적응·주제 탐구·봉사, 자치활동은 생활습관·관계·공동체 자치예요." 시연 단추로 자율활동 세 바구니에 카드가 나뉘는 모습을 보여 주고, 자치활동 세 갈래는 칠판에 적어 함께 떠올린다. "봉사는 시간 채우기였어요"라는 말이 나오면 "그 가운데 다시 해 보고 싶은 것이 하나라도 있었나요?"라고 묻는다. 오늘은 이 돌아보기를 바탕으로 졸업 뒤 이어 갈 참여를 정한다고 밝힌다.',
          student: '가상 학급의 3년 활동 카드를 자율활동 세 갈래(적응·주제 탐구·봉사) 바구니에 나누어 보고, 내 3년도 떠올려 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['적응·개척', '주제 탐구', '프로젝트형 봉사'], cards: ['1학년 입학 초 학교 둘러보기', '진로 연계 탐구 설계서 쓰기', '공부방 숙제 함께 보기 봉사', '고3 생활 계획 세우기', '통계 해석 탐구 보고서', '지역 기관과 하천 정화'] }, sequence: [{ sort: { '적응·개척': ['1학년 입학 초 학교 둘러보기', '고3 생활 계획 세우기'], '주제 탐구': ['진로 연계 탐구 설계서 쓰기', '통계 해석 탐구 보고서'], '프로젝트형 봉사': ['공부방 숙제 함께 보기 봉사', '지역 기관과 하천 정화'] } }] },
          art: { draw: 'six paper baskets on a long shelf, three on the left labelled for autonomy and three on the right for self-government, paper memory cards from three school years tumbling into them', banner: '3년을 여섯 갈래로', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '교구 한계: sortboard 바구니는 4개까지라, 시연은 자율활동 세 갈래만 하고 자치활동 세 갈래는 칠판에서 함께 떠올린다. 학생 자신의 3년 활동은 걷지 않는 활동지에 적는다.',
      }),

      M({
        id: 'activity.match', type: 'activity', title: '나에게 맞는 참여 고르기',
        method: '나에게 맞는 참여 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(세 기회 가운데 고르기)에서 결과를 보고 근거 한 장을 고른다.', base: '두 번째 갈림길(석 달째 또는 한 달째 장면)까지 가서 근거 한 장을 고른다.', challenge: '두 번째 갈림길까지 가서 근거 두 장(시간·관심)을 고르고, 다른 기회의 길과 견준다.' },
        activity: {
          title: '은재의 세 가지 기회', tool: 'dilemma',
          teacher: '"가상 인물 은재 앞에 참여 기회가 셋 있어요. 매일 두 시간 큰 단체, 토요일 오전 도서관 책 읽어 주기, 한 번뿐인 행사 봉사." 첫 갈림길에서 \'매일 두 시간\'을 고르는 학생에게 "은재의 평일 일정표를 다시 볼까요? 이 계획은 몇 달 갈까요?"라고 묻는다. 한 번 행사를 고르는 학생에게는 "그것도 의미 있어요. 그런데 은재가 바란 \'이어 가기\'에는 어느 쪽이 맞을까요?"라고 되묻는다. 어떤 봉사가 더 훌륭하다는 정답을 정하지 않고, 지속 가능성을 따지는 활동이라고 밝힌다.',
          task: '은재의 시간·관심·강점에 맞는 참여를 고르는 갈림길을 따라가며 지속 가능성의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('은재가 졸업 뒤에도 이어 갈 수 있는 참여를 고르는 길을 고르고 근거를 고르세요.', CHOOSE, [['fit', 'strength']], CHOOSE_R, ['time'], { d: 0.4, hardReasons: ['time', 'interest'] }),
            EXPLOREQ('\'매일 두 시간 큰 단체\'·\'한 번 행사 봉사\' 길도 끝까지 가 보고 결과를 견주세요.', CHOOSE, CHOOSE_R, ['다른 길의 끝 장면을 확인했다', '은재와 함께하는 사람에게 어떤 영향이 갔는지 짚었다'], { d: 0.35 }),
            DILQ('은재의 친구 도담은 시간은 적지만 동네 하천 쓰레기 문제에 관심이 커요. 알맞은 시민 참여 길을 고르고 근거를 고르세요.', { text: '도담은 평일·주말 모두 바빠 봉사 시간을 내기 어렵다. 그래도 동네 하천에 쓰레기가 쌓이는 문제가 늘 마음에 걸린다.', who: '도담', motif: 'leaf', choices: [
              { id: 'give', text: '시간이 없으니 아무것도 할 수 없다고 포기한다', result: '하천 문제는 그대로다.', impact: [{ who: '도담', text: '마음에 걸린 채 지나간다', tone: -1 }], ending: '시간이 적어도 참여할 방법은 있다.' },
              { id: 'small', text: '출퇴근길에 쓰레기 쌓이는 곳을 사진으로 기록해 주민 제안 창구에 낸다', result: '주민센터에서 그곳에 쓰레기통 위치를 다시 살피겠다고 답한다.', impact: [{ who: '동네', text: '문제가 공식 창구에 닿는다', tone: 1 }],
                next: { text: '도담의 제안에 같은 문제를 느낀 이웃들의 의견이 붙는다.', choices: [
                  { id: 'join', text: '한 달에 한 번 하천 정화 모임에 한 시간씩 함께한다', result: '이웃과 함께 하천을 꾸준히 돌본다.', impact: [{ who: '도담', text: '작게 시작한 참여가 이어진다', tone: 1 }], ending: '작은 기록이 시민 참여의 시작이 되고, 내 시간에 맞게 넓힐 수 있다.' },
                  { id: 'fight', text: '댓글로 다른 이웃을 탓하며 다툰다', result: '제안 글이 다툼으로 덮인다.', impact: [{ who: '동네', text: '함께할 사람이 줄어든다', tone: -1 }], ending: '시민 참여는 탓하기보다 근거를 모아 함께 푸는 일이다.' }] } }] },
              [['small', 'join']], [{ id: 'small', text: '시간이 적으면 작은 기록·제안부터 시작한다' }, { id: 'channel', text: '공식 주민 제안 창구로 문제를 알린다' }, { id: 'blame', text: '문제는 남 탓을 크게 해야 고쳐진다', why: '탓하기보다 근거를 모아 함께 풀어요.' }], ['small', 'channel'], { d: 0.35, more: { conclude: '봉사와 시민 참여는 졸업으로 끝나지 않아요. 내 시간·관심·강점에 맞게 작게 시작해 꾸준히 이어 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '은재가 도서관 봉사를 오래 이어 갈 수 있었던 까닭을 시간·관심·강점 가운데 둘을 들어 쓰세요.' }] },
        notes: '은재·도담과 동네·기관은 가상이다. 특정 봉사 단체·플랫폼 이름을 쓰지 않는다. 시민 참여 활동에 정치적 입장을 정하지 않는다.',
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '작은 개인 봉사 계획서',
        method: '작은 개인 봉사 계획서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 요소(대상·활동·빈도)를 문장 틀을 보고 쓴다.', base: '네 요소(대상·활동·빈도·기간)를 담은 작은 계획을 쓰고 기준표(지속 가능·구체성)로 점검한다.', challenge: '네 요소에 더해 함께할 사람과 역할까지 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '은재의 작은 계획', tool: 'rubric-writing',
          teacher: '"작은 계획이 오래가요. 누구를 위해(대상), 무엇을(활동), 얼마나 자주(빈도), 언제까지(기간)." 은재의 한 주 시간 띠를 다시 보며 기준표를 함께 읽는다. \'매일 봉사하겠다\'를 쓴 학생에게 "은재의 봉사·참여 칸 5%로 매일이 될까요?"라고 묻는다. \'좋은 일을 하겠다\'처럼 막연한 글에는 "토요일 몇 시에, 어디서, 무엇을 하나요?"라고 되묻는다.',
          task: '가상 인물 은재의 졸업 뒤 작은 개인 봉사 계획을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '은재의 작은 개인 봉사 계획을 대상·활동·빈도·기간 네 요소로 쓰고 점검하세요.', toolOptions: { topic: '은재의 작은 개인 봉사 계획: 대상·활동·빈도·기간을 한 문장씩 쓰세요.', minChars: 80, maxChars: 400, sample: '대상: 동네 도서관에 오는 초등학생. 활동: 그림책을 읽어 주고 함께 이야기 나누기. 빈도: 매주 토요일 오전 10시부터 두 시간. 기간: 우선 6개월 하고, 끝나면 이어 갈지 다시 정한다.' }, target: { selfCheck: ['대상과 활동을 구체적으로 썼다', '빈도와 기간을 썼다', '은재의 시간 안에서 이어 갈 수 있는 계획이다'] }, difficulty: 0.4,
              levels: {
                easy: { prompt: '은재의 봉사 계획 세 요소(대상·활동·빈도)를 쓰고 점검하세요(세 요소).', toolOptions: { topic: '은재의 봉사 계획: 대상·활동·빈도를 한 문장씩 쓰세요.', minChars: 40, starter: '대상: ~. 활동: ~. 빈도: 매주 ~요일 ~시.' }, target: { selfCheck: ['대상과 활동을 구체적으로 썼다', '빈도를 썼다', '은재의 시간 안에서 이어 갈 수 있는 계획이다'] } },
                challenge: { prompt: '네 요소에 더해 함께할 사람과 맡을 역할까지 쓰고 점검하세요(함께할 사람).', toolOptions: { minChars: 110 }, target: { selfCheck: ['대상과 활동을 구체적으로 썼다', '빈도와 기간을 썼다', '은재의 시간 안에서 이어 갈 수 있는 계획이다', '함께할 사람과 역할을 썼다'] } },
              } },
            RWQ('은재의 첫 계획 \'매일 저녁 봉사하기\'를 지속 가능하게 고쳐 쓰고 점검하세요.', '은재의 첫 계획 "매일 저녁 봉사하기"를 은재의 시간에 맞게 고쳐 쓰세요.', ['빈도를 현실적으로 바꿨다', '쉬는 시간을 지켰다', '고친 까닭을 썼다'], { min: 40, max: 300, starter: '은재의 계획을 ~로 고친다. 왜냐하면 ~', d: 0.35 }),
            RWQ('은재가 봉사를 마치거나 쉬어야 할 때, 함께하던 곳에 알리는 말을 두 문장으로 쓰고 점검하세요.', '은재가 봉사를 쉬어야 할 때 도서관 담당자에게 알리는 말을 두 문장으로 쓰세요.', ['미리 알린다고 썼다', '쉬는 까닭이나 기간을 썼다', '받는 사람을 존중하는 말씨로 썼다'], { min: 30, max: 250, sent: [2, 3], d: 0.3, more: { conclude: '작은 계획은 시작도, 쉬기도, 마치기도 미리 말하고 함께 정할 때 받는 사람에게 믿음이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '졸업 뒤 해 보고 싶은 작은 참여 계획을 적어 보세요(걷지 않음 — 나만 봐요).', columns: ['대상', '활동', '빈도', '기간'], cells: [['', '', '', '']] }] },
        notes: '채점·자기 점검은 가상 인물 은재의 계획으로 한다. 학생 자신의 계획은 걷지 않는 활동지에 쓴다.',
      }),
      M({
        id: 'activity.pledge', type: 'activity', title: '졸업 다짐 글쓰기',
        method: '졸업 다짐 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 문장(돌아본 한 장면·배운 점·졸업 뒤 다짐) 틀을 채운다.', base: '여섯 갈래 가운데 둘 이상을 돌아본 한 문단 다짐을 쓰고 기준표로 점검한다.', challenge: '한 문단에 더해 다짐을 스스로 점검할 시점(예: 졸업 1년 뒤 3월)을 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '여섯 갈래 다짐', tool: 'rubric-writing',
          teacher: '"3년 동안 자율·자치활동 여섯 갈래를 지나왔어요. 그 가운데 졸업 뒤에도 가져갈 것은 무엇인가요?" 기준표를 함께 읽고, 다짐은 남에게 보이려는 것이 아니라 내가 나중에 꺼내 볼 글이라고 말한다. 이름·학교·연락처는 쓰지 않는다. \'열심히 살겠다\'처럼 쓴 학생에게 "3년 가운데 어느 장면에서 그 다짐이 나왔나요? 그 장면을 먼저 써 볼까요?"라고 묻는다. 글의 내용은 평가하지 않고 기준표로 스스로 점검만 한다.',
          task: '3년 자율·자치활동 여섯 갈래를 돌아보며 졸업 뒤 생활·참여 다짐을 쓰고 기준표로 스스로 점검해요(이름·학교·연락처는 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('여섯 갈래 가운데 둘 이상을 돌아보며 졸업 뒤 생활·참여 다짐을 한 문단으로 쓰고 점검하세요.', '3년 자율·자치활동을 돌아보며 졸업 뒤 생활·참여 다짐을 한 문단으로 쓰세요.', ['여섯 갈래 가운데 둘 이상의 장면을 썼다', '그 장면에서 배운 점을 썼다', '졸업 뒤 할 수 있는 구체적 다짐을 썼다'], { min: 80, max: 450, starter: '3년 동안 ~ 활동에서 ~를 배웠다. 그래서 졸업 뒤에는 ~하겠다.', plus: '다짐을 스스로 점검할 시점을 썼다', d: 0.35 }),
            RWQ('여섯 갈래 가운데 가장 어려웠던 갈래 하나와, 그것을 지나며 달라진 점을 두 문장으로 쓰고 점검하세요.', '3년 동안 가장 어려웠던 갈래 하나와 그것을 지나며 달라진 점을 두 문장으로 쓰세요.', ['갈래 하나를 골랐다', '어려웠던 장면을 썼다', '달라진 점을 썼다'], { min: 40, max: 250, sent: [2, 3], d: 0.35 }),
            RWQ('후배에게 \'자율·자치활동에서 이것만은 해 보라\'고 권하는 말을 두 문장으로 쓰고 점검하세요.', '후배에게 자율·자치활동에서 꼭 해 보라고 권할 것을 두 문장으로 쓰세요.', ['권할 활동을 구체적으로 썼다', '권하는 까닭을 썼다', '후배를 존중하는 말씨로 썼다'], { min: 30, max: 250, sent: [2, 3], d: 0.3, more: { conclude: '돌아본 장면에서 나온 다짐은 졸업 뒤에도 꺼내 볼 수 있는 나침반이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 다짐을 언제 다시 꺼내 볼지 날짜나 때를 쓰세요(걷지 않음 — 나만 봐요).' }] },
        notes: '다짐 글은 학생 자신의 글이지만 채점하지 않고 기준표 자기 점검만 한다. 이름·학교·연락처를 쓰지 않게 안내한다.',
      }),
      M({
        id: 'activity.map', type: 'activity', title: '가상 동네 참여 지도',
        method: '내 동네 참여 거리 지도', tool: 'map', minutes: 18,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보이는 지도에서 참여할 곳 한 곳을 찾는다.', base: '참여할 수 있는 곳 세 곳(도서관·하천 정화 모임·주민센터)에 차례로 핀을 꽂는다.', challenge: '은재의 집에서 참여할 곳까지 축척으로 거리를 계산한다.' },
        activity: {
          title: '참여할 곳 찾기', tool: 'map',
          teacher: '"가상 동네 지도예요. 은재의 집 가까이에 참여할 수 있는 곳이 어디 있을까요?" 문항마다 "이곳에서는 어떤 참여를 할 수 있을까요?"라고 묻는다. 시장을 고르는 학생에게 "장보기도 동네를 살리는 일이지만, 오늘 찾는 것은 봉사·시민 참여 자리예요"라고 말한다. 거리 문항에서는 가까울수록 오래 이어 가기 쉽다는 점을 짚는다. 학생의 실제 사는 동네는 묻지 않는다.',
          task: '가상 동네 지도에서 은재가 참여할 수 있는 곳에 핀을 꽂고, 거리를 계산해요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '은재가 토요일 오전에 어린이 책 읽어 주기를 할 수 있는 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '동네 도서관' }, difficulty: 0.15 },
            { prompt: '한 달에 한 번 이웃과 하천 쓰레기를 줍는 모임이 열리는 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '하천 정화 모임 장소' }, difficulty: 0.2 },
            { prompt: '동네 문제를 공식으로 제안하거나 참여 안내를 받을 수 있는 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '주민센터' }, difficulty: 0.25 },
            { prompt: '은재의 집에서 동네 도서관까지 길을 세어 거리를 구하세요(한 칸 300m).', toolOptions: Object.assign({ mode: 'scale' }, TOWN), target: { from: '은재의 집', to: '동네 도서관' }, difficulty: 0.35,
              levels: { easy: { prompt: '은재의 집에서 동네 도서관까지 번호가 붙은 칸을 세어 거리를 구하세요(한 칸 300m, 칸 번호).', toolOptions: { showCells: true } } },
              conclude: '가까운 곳의 작은 참여가 오래가요. 거리도 지속 가능한 계획의 조건이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '은재에게 세 곳 가운데 하나를 권하고, 거리와 시간을 들어 그 까닭을 쓰세요.' }] },
        notes: '지도·장소는 가상이다. 학생의 실제 사는 곳을 묻거나 지도에 표시하게 하지 않는다.',
      }),

      M({
        id: 'wrap.fair', type: 'wrap', title: '참여 정보 나눔 장터',
        method: '참여 정보 나눔 장터', tool: 'timer', minutes: 8,
        levels: { easy: '모둠 자리를 하나 돌며 참여 기회 하나를 듣는다.', base: '모둠 자리를 세 곳 돌며 참여 기회를 듣고, 들른 곳 수를 기록판에 적는다.', challenge: '들른 자리마다 질문 하나씩을 남기고 출구 질문에 가장 좋았던 질문을 쓴다.' },
        wrap: {
          teacher: '"모둠마다 오늘 찾은 참여 기회(가상 동네·온라인·학교 밖)를 책상 위에 소개 카드로 펼쳐요. 한 사람은 남아 설명하고, 나머지는 1분씩 돌아요." 타이머 신호에 맞춰 자리를 옮긴다. 소개가 \'좋은 곳이에요\'로 끝나면 "얼마나 자주, 누구와, 어디서 하나요?"를 물어보라고 듣는 사람에게 권한다. 실제 단체 이름 대신 가상 이름이나 활동 종류로 소개한다는 약속을 먼저 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나눔 장터', labels: ['듣기', '옮기기'], plan: { work: 30, rest: 30, rounds: 1 } }, prompt: '한 자리에서 60초 듣고 15초 옮기기를 세 번 하도록 타이머를 맞추세요(초).', target: { plan: { work: 60, rest: 15, rounds: 3 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '장터 기록', fields: [{ label: '들른 자리', unit: '곳', step: 1 }, { label: '남긴 질문', unit: '개', step: 1 }] }, prompt: '들른 자리 수와 남긴 질문 수를 기록판에 모두 적으세요.', target: { records: true }, difficulty: 0.1 },
            { type: 'short', prompt: '장터에서 들은 참여 기회 가운데 은재(또는 나)에게 맞을 것 하나와 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '참여 정보 나눔 장터',
          items: [
            { type: 'table', prompt: '들은 참여 기회를 적으세요.', columns: ['참여 기회', '빈도', '어디서', '남긴 질문'], cells: [['', '', '', ''], ['', '', '', ''], ['', '', '', '']] },
            { type: 'check', prompt: '좋은 참여 기회의 조건에 표시하세요.', options: ['내 시간에 맞음', '관심과 맞음', '가까움', '함께할 사람 있음'] },
          ],
        },
        notes: '참여 기회는 가상 이름이나 활동 종류로 소개한다. 실제 단체·기업 이름을 쓰지 않는다.',
      }),
      M({
        id: 'wrap.seal', type: 'wrap', title: '다짐 서로 확인하기',
        method: '다짐 서로 확인하기', tool: 'timer', minutes: 8,
        levels: { easy: '짝과 다짐 하나를 1분씩 나눈다.', base: '다짐 둘을 나누고 1년 뒤 스스로 확인할 점검 칸을 함께 정한다.', challenge: '서로 연락하지 않아도 스스로 확인할 방법(달력 알림·편지 봉투 등)을 정해 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"다짐은 나누면 단단해져요. 짝과 1분씩 다짐을 말하고, 1년 뒤 내가 스스로 확인할 점검 칸을 정해요." 타이머를 맞추고 신호와 함께 시작한다. "1년 뒤 서로 연락해서 확인하자"는 짝에게 "연락처를 주고받지 않아도 혼자 확인할 방법이 있을까요? 달력 알림이나 나에게 쓰는 편지 같은 거요"라고 말한다. 다짐은 평가하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '다짐 나누기', timeUnit: 'min', labels: ['말하기', '바꾸기'], plan: { work: 2, rest: 1, rounds: 1 } }, prompt: '1분 말하기, 바꾸기 없이 두 번(서로) 하도록 타이머를 맞추세요(분).', target: { plan: { work: 1, rest: 0, rounds: 2 } }, difficulty: 0.15 },
            { type: 'tool', tool: 'timer', options: { title: '1년 뒤 점검 정하기' }, prompt: '1년 뒤 스스로 확인할 점검 칸을 정했는지 표시하세요.', target: { selfCheck: ['1년 뒤 확인할 다짐을 하나 이상 정했다', '확인할 때(날짜나 시기)를 정했다', '연락 없이 혼자 확인할 방법을 정했다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '다짐을 1년 뒤 스스로 확인하는 방법으로 알맞은 것은?', options: ['짝의 개인 연락처를 받아 둔다', '달력 알림이나 나에게 쓰는 편지로 남긴다', '단체 대화방에 다짐을 모두 올린다'], answer: 1, difficulty: 0.15, explain: '개인 정보를 주고받지 않아도, 나에게 남기는 알림·편지로 스스로 확인할 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '1년 뒤의 나에게',
          items: [
            { type: 'table', prompt: '1년 뒤 확인할 다짐을 적으세요(걷지 않음 — 나만 봐요).', columns: ['다짐', '확인할 때', '확인 방법'], cells: [['', '', ''], ['', '', '']] },
            { type: 'short', prompt: '1년 뒤의 나에게 한 문장을 쓰세요.' },
          ],
        },
        notes: '연락처를 주고받지 않는다. 다짐 활동지는 걷지 않는다.',
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
