/* 창체 안전교육 교통안전 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-traffic 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 교통안전 세 항목
 *   (1. 이륜차의 안전한 이용과 점검방법 알기 / 2. 자동차 사고의 원인과 예방방법 알기 / 3. 대중교통 이용 안전수칙 알기)
 *   + 7대 표준안 교통안전(보행자·자전거·오토바이[원인·주의]·자동차[원인·예방]·대중교통) 분류. 도로교통법은 취지만 다루고 조문 번호·범칙금·형량은 쓰지 않는다.
 * 고 기준: 법·제도 읽기와 사례 판단, 찬반 토론, 제안서·성찰 글, 진로·자립(면허·운전자) 연결, 딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 수치 자료는 모두 '가상'이다(상대 크기만). 인물은 직접 지은 가명이다. 피해 경험을 묻지 않는다. 전화번호는 체계도 concepts 의 112·119 만 쓴다.
 * 주제 15개 × 8모듈 = 120모듈(체계도 계획 전부).
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부 수칙이 없어 일반 안전 수칙·제도 설명으로 쓴 문장 — 모듈 id 와 확인할 공식 안내처)
 *   [vehicle-license]
 *   - intro.vehicle-sort·activity.license-match: 자전거/개인형 이동장치(전동킥보드·전동휠)/원동기장치자전거(소형 스쿠터)/이륜자동차(대형 오토바이) 구분과 전기자전거(페달 보조)의 자리 — 도로교통공단·경찰청
 *   - activity.license-match·law-read·use-dilemma·wraps: 개인형 이동장치 승차 정원 1명, 자전거·개인형 이동장치 운전자 안전모 착용 의무, 이륜자동차는 그에 맞는 면허(2종 소형 등) 필요 — 도로교통공단·국가법령정보센터
 *   - intro.first-ride: 중고 이륜차를 산 뒤의 절차(사용 신고·보험 가입) — 한국교통안전공단·관할 지자체
 *   - activity.plan-budget: 이륜차 보험 가입 의무(책임보험) — 금융감독원·한국교통안전공단
 *   - activity.law-read: 수업용 규정 요약문 문구(면허·안전모·승차 정원) — 국가법령정보센터 도로교통법
 *   [moto-cause]
 *   - intro.cause-map·activity.three-way: 과속·신호 위반·차로 사이 주행이 이륜차의 주된 위험 행동이라는 설명(체계도 concepts 문구) — 도로교통공단 교통사고분석시스템(TAAS)
 *   - intro.case-story·activity.consumer-dilemma: 배달 이륜차 사고에 재촉·평가·예상 시간 압박이 영향을 준다는 서술(가상 사례) — 고용노동부·안전보건공단 배달종사자 안전 안내
 *   - activity.trend-read: 저녁·밤 시간대 이륜차 운행량·사고 경향(그래프는 가상 상대 크기, 실제 경향은 확인 필요) — TAAS
 *   - wrap.responsibility-cards: 업체가 배달 종사자에게 안전 교육·보호장구를 제공하는 역할 — 고용노동부·안전보건공단
 *   [scooter-check]
 *   - intro.part-map·activity.pre-ride·activity.checklist-make: 출발 전 점검 항목(타이어 공기·홈, 브레이크 레버, 전조등·방향지시등·브레이크등, 거울, 연료·배터리)과 확인 방법, 이상 시 타지 않고 정비 — 도로교통공단 이륜차 안전 안내·차종 사용 설명서
 *   - activity.checklist-make: 매일·매주 점검 나누기는 '우리 반 약속'(법 기준 아님) — 정비 주기는 차종 설명서
 *   - intro.gear-body·wrap.gear-words: 장갑·무릎·팔꿈치 보호대·긴 소매·밝은 색 옷이 부상을 줄인다는 설명 — 도로교통공단
 *   - activity.helmet-order·wrap.gear-words: 안전모 바른 착용(맞는 크기, 이마 덮기, 턱끈 조이기, 흔들어 확인)과 빌린 안전모의 파손 확인, 인증 표시 — 한국소비자원·도로교통공단
 *   - activity.skip-dilemma: 바람 빠진 타이어가 모퉁이·제동에서 미끄러지기 쉽다는 설명 — 도로교통공단
 *   [ride-offer]
 *   - activity.chain-dilemma·wrap.plan-order: 무면허 운전 이륜차에 함께 탄 동승자도 법적 문제(조사 등)에 휘말릴 수 있다는 서술 — 경찰청·도로교통공단
 *   - activity.chain-dilemma·refuse-script·alt-budget: 개인형 이동장치 승차 정원 1명(면허가 있어도 둘이 타면 안 됨), 정원 초과 시 균형·제동 저하 — 도로교통공단
 *   - activity.alt-budget: 심야버스·택시 요금과 걸리는 시간은 모두 가상 값 — 지역 대중교통 안내
 *   - wrap.plan-order: 늦은 밤 귀가 시 보호자 연락·밝은 곳에서 기다리기·도착 알리기(일반 신변 안전 수칙) — 경찰청 안전 안내
 *   [walk-phone]
 *   - intro.after-bus·activity.bus-map·wrap.rule-pick: 서 있는 버스 앞·뒤로 바로 건너면 보행자와 운전자가 서로 가려지므로 버스가 떠난 뒤 횡단보도로 건넌다 — 도로교통공단·한국교통안전공단
 *   - activity.headphone-dilemma·wrap.week-check: 이어폰이 경적·엔진 소리를 가린다, 골목에서는 이어폰 한쪽을 빼고 가장자리로 걷는다, 주차장 출구 앞에서 멈춰 좌우를 본다 — 도로교통공단
 *   - intro.attention-test·wrap.week-check: 화면에 집중하면 시야가 좁아지고 반응이 늦어진다(실험 값은 우리 반 기록일 뿐) — 도로교통공단·한국교통안전공단 보행 중 스마트폰 안내
 *   - activity.data-read: 띠그래프 값은 모두 가상 — (확인 불필요, 화면에 '가상' 표시)
 *   [distraction]
 *   - intro.three-sort·wrap.focus-map: 주의 분산의 세 갈래(시각·수동·인지)와 핸즈프리 통화도 인지 주의를 빼앗는다는 설명 — 도로교통공단·한국교통안전공단
 *   - activity.passenger-dilemma·wrap.family-talk: 운전 중 휴대전화 사용 금지(신호 대기 중 포함 여부 포함)의 표현 — 국가법령정보센터 도로교통법·경찰청
 *   - wrap.focus-map: 출발 전 목적지 입력, 알림을 꺼 두는 운전 모드, 휴대전화를 손 닿지 않는 곳에 두기 — 도로교통공단
 *   - activity.glance-test: 늦게 알아챈 만큼 멈추는 거리가 길어진다(수치 없음) — 도로교통공단
 *   - activity.trend-chart: 막대 값은 모두 가상 — (확인 불필요, 화면에 '가상' 표시)
 *   [drunk-drowsy]
 *   - intro.drowsy-signs·activity.keys-dilemma·intervene-script: 졸음 신호(잦은 하품·무거운 눈꺼풀·차로 넘나듦·지나온 길이 기억나지 않음)와 창문·음악·껌은 졸음을 없애지 못한다는 설명 — 한국도로공사·도로교통공단
 *   - activity.keys-dilemma·wrap.alt-list: 술은 시간이 지나도 바로 깨지 않고 다음 날 아침 운전에도 남을 수 있다, 마신 사람은 깼는지 스스로 판단하기 어렵다 — 도로교통공단·경찰청·질병관리청
 *   - activity.body-effect: 술·졸음이 판단(뇌)·시야(눈)·반응 시간(손발 동작)을 떨어뜨린다는 설명 — 도로교통공단·질병관리청
 *   - activity.rest-plan: 점심 뒤에 졸음이 오기 쉽다, 장거리 운전 휴식 권고 간격('2시간마다'는 수업용 가족 약속) — 한국도로공사·도로교통공단
 *   - activity.keys-dilemma·wrap.alt-list·pledge-words: 음주 운전은 도로교통법이 금지하는 범죄(수치·형량 없음), 대안으로 대리운전·대중교통·술 마시지 않은 운전자 — 경찰청·도로교통공단
 *   [turn-seat]
 *   - intro.turn-map·activity.stop-dilemma·wrap.turn-words: 우회전 차는 횡단보도 보행자가 건너거나 건너려 할 때 일시정지(차량 신호와 별개), 우회전 신호등이 있으면 따른다 — 도로교통공단·경찰청
 *   - intro.pillar-view·activity.walker-letter: 앞 유리 기둥(A필러)·거울 사각에 보행자가 가려질 수 있고 버스·트럭 같은 큰 차는 회전 사각이 더 넓다 — 도로교통공단·한국교통안전공단
 *   - activity.seat-body·adjust-order·wrap.seat-check: 머리받침 높이는 머리 가운데·귀 높이, 어깨띠는 어깨 가운데·가슴, 골반띠는 배가 아닌 골반 위, 등받이는 세운다, 어깨띠를 겨드랑이 밑으로 빼지 않는다 — 한국교통안전공단·도로교통공단
 *   - activity.adjust-order·wrap.seat-check: 좌석 → 머리받침 → 거울 → 안전띠 조정 차례, 뒷좌석 포함 모든 좌석 안전띠 착용 — 도로교통공단
 *   - activity.stop-dilemma: 사고 뒤 멈추고 살피는 조치(비상등·119) — 도로교통공단
 *   [flood-car]
 *   - intro.flood-map·activity.enter-dilemma·wrap.rain-map: 집중호우 때 지하차도·하천변 도로·낮은 길가가 먼저 잠기고, 물이 찬 도로·지하차도에 들어가지 않으며 물이 불면 높은 길로 돌아 나온다, 큰 차도 물이 바퀴를 넘으면 떠밀리거나 멈춘다 — 국민재난안전포털·행정안전부
 *   - activity.enter-dilemma: 물을 빨리 지나가려 하면 엔진에 물이 들어가 차가 멈출 수 있다 — 국민재난안전포털·한국교통안전공단
 *   - activity.escape-order·wrap.reflect: 차량 침수 시 탈출 차례(안전띠 풀기 → 문이 열릴 때 바로 나가기 → 안 열리면 창문 열기·창문 깨는 도구 → 그래도 안 되면 물이 차 안팎 수압 차가 줄어든 뒤 문 열기 → 높은 곳으로 피하기), 신고는 밖의 높은 곳에서 — 국민재난안전포털·행정안전부
 *   - activity.report-call: 112·119 신고 때 위치 → 상황 → 사람 수 → 다친 상태 차례, 위치를 모르면 도로 이름 표지판·큰 건물·다리·터널 이름을 단서로 말한다 — 소방청·경찰청
 *   - activity.prepare-check: 차량 비상 준비물(손 닿는 곳의 창문 깨는 도구·손전등·충전기·물)과 출발 전 확인(기상 특보·우회 경로·연료) — 국민재난안전포털
 *   [after-crash]
 *   - intro.after-story·activity.duty-order·leave-dilemma·wrap.duty-words: 사고를 낸 운전자는 즉시 정차·사상자 구호·경찰 신고 의무가 있고, 다친 사람이 괜찮다고 해도 의무는 그대로다(도로교통법 취지, 조문 번호·형량 없음) — 국가법령정보센터·도로교통공단
 *   - activity.duty-order·scene-map: 2차 사고 예방(비상등 켜기, 안전 삼각대를 사고 차 뒤쪽 멀리, 사람은 가드레일 밖으로 대피, 목격자 차는 사고 지점을 지나 앞쪽 갓길) — 한국도로공사·도로교통공단
 *   - activity.duty-order·wrap.after-sort: 목격자의 할 일(내 안전 먼저 → 112·119에 위치 알리기 → 다친 사람 곁에서 돕기 → 경찰에 본 것 말하기), 목격자에게는 법적 의무가 없다는 설명 — 경찰청·소방청
 *   - activity.leave-dilemma: 주차된 빈 차를 긁었을 때 차 주인에게 연락처를 남기는 등 알리는 조치, 보험 처리 — 도로교통공단·금융감독원
 *   - activity.leave-dilemma: 다친 곳은 시간이 지나서야 드러날 수 있다(사흘 뒤 손목 금 사례는 가상) — 질병관리청·대한응급의학회 일반 안내
 *   [license-road]
 *   - intro.step-order·wrap.ready-sort: 면허 취득 단계(교통안전교육 → 학과 시험 → 기능 시험 → 도로 주행 시험)와 면허 종류별 응시 나이 — 도로교통공단 안전운전 통합민원
 *   - activity.plan-budget: 초보 운전자가 가족 차 보험에 보장되는지(운전자 범위 특약) 확인 필요 — 금융감독원·보험사 안내
 *   - activity.novice-dilemma·wrap.roadmap-story: 면허 취득 직후 초보 기간 사고 위험이 크다는 서술, 초보운전자 관련 제도 — 도로교통공단
 *   - activity.novice-dilemma: 사람을 내릴 때 차로 한가운데에 세우지 않는다(정차 장소) — 도로교통공단
 *   - activity.schedule: '피곤한 일 뒤 1시간 쉬기·밝을 때 연습'은 우리 반 약속(연습용 값) — 사람 확인 불필요, 화면에 가상으로 밝힘
 *   [defensive-drive]
 *   - intro.predict-view·activity.predict-table: 방어 운전 원리(예측·거리 두기·시야 확보·양보), 주차 차 사이·버스 정류장·골목 출구에서 예측할 위험과 대비 행동 — 도로교통공단
 *   - intro.state-map·activity.state-check·wrap.state-reflect: 피로·화남·졸음이 올 수 있는 약 복용이 운전 능력을 떨어뜨린다는 서술, 운전 주의 표시 약 — 식품의약품안전처·약사 안내, 도로교통공단
 *   - activity.distance-chart: 길이 젖으면 같은 반응 여유에 더 먼 거리가 필요하다는 경향(그래프 값은 가상) — 도로교통공단 안전거리 안내
 *   - activity.angry-dilemma: 커피·창문 열기·음악은 졸음을 없애지 못한다는 서술 — 도로교통공단·한국도로공사 졸음운전 안내
 *   [vulnerable-road]
 *   - intro.overtake-map·activity.share-essay·wrap.zone-words: 자전거를 앞지를 때 간격을 넓게 두고 서행한다, 중앙선을 넘는 앞지르기 허용 여부 — 도로교통공단
 *   - intro.weather-sort·activity.light-check·wrap.zone-words: 밤 전조등 일찍 켜기·맞은편 차 앞 하향등, 비 오는 낮 전조등, 안개에 상향등 대신 하향등·안개등, 앞이 안 보이면 안전한 곳에 세우기 — 도로교통공단·한국도로공사
 *   - activity.school-zone: 어린이보호구역에서 서행·멈출 준비, 횡단보도 앞 일시 정지(제한 속도 수치·처벌은 쓰지 않음) — 도로교통공단·경찰청
 *   - activity.school-zone: 이륜차는 작아서 거리·속도를 실제보다 멀고 느리게 보기 쉽다 — 도로교통공단
 *   - activity.case-analysis: 안개 속 연쇄 추돌의 원인(속도·차간 거리·상향등) 서술(가상 사례) — 도로교통공단·한국도로공사
 *   - wrap.gap-chart: 속도가 빨라질수록 위험이 더 크게 는다는 경향(그래프 값은 가상) — 도로교통공단
 *   [transit-travel]
 *   - intro.cabin-card: 기내 안내 문장(좌석에서 안전띠, 산소마스크는 본인 먼저, 비상구 위치 확인, 이착륙 때 전자기기 비행기 모드) — 국토교통부 항공안전 안내·항공사 기내 안전 안내
 *   - activity.guide-compare: 수단별 안내(열차와 승강장 사이 틈, 고속버스 좌석 안전띠·창가 비상 망치, 여객선 출항 뒤 구명조끼 위치 확인, 항공기 이착륙 때 등받이 세우기) — 한국교통안전공단·한국철도공사·해양수산부(한국해양교통안전공단) 안내
 *   - intro.crowd-map·activity.crowd-dilemma·wrap.crowd-order: 인파 밀집 때 행동(멈춰 자세 낮추기, 팔로 가슴 앞 공간 확보, 흐름을 거스르지 않기, 가장자리로 이동, 안내 방송 따르기) — 행정안전부 인파 밀집 안전 수칙·국민재난안전포털
 *   - wrap.crowd-order 출구 2: 붐비는 곳에서 넘어지면 몸을 웅크려 머리와 가슴을 감싼다 — 행정안전부 인파 밀집 안전 수칙
 *   - activity.crowd-dilemma 2번 문항: 휴게소 주차장 차 사이는 운전자에게 보이지 않으니 보행 통로로 걷고, 늦을 때는 기사에게 미리 알린다 — 한국도로공사·한국교통안전공단
 *   - activity.share-plan·wrap.trip-check: 혼자 이동할 때 일정·도착 예정 시각 공유, 보조배터리·종이 연락처 메모 — 일반 여행 안전 권고(외교부 해외안전여행·국민재난안전포털 생활안전 안내로 확인)
 *   [driver-pledge]
 *   - intro.duty-sort·intro.case-story: 교통사고 책임의 형사(벌금·형사 재판)·행정(면허 정지·벌점)·민사(손해·치료비 배상) 구분과 사고 뒤 처리 차례(신고 → 보험 접수 → 경찰 조사 → 면허 처분 통지) — 경찰청·도로교통공단·대한법률구조공단
 *   - activity.insurance-dilemma: 자동차보험은 피해 보상(민사)을 돕지만 형사·행정 책임을 없애지 않는다(종합보험 가입 특례와 그 예외는 단순화함), 사고 뒤 멈춤·구호·신고 의무, "괜찮다"는 말이 신고 의무를 없애지 않는다 — 금융감독원·손해보험협회·경찰청
 *   - activity.cost-budget: 자기 부담금·사고 뒤 보험료 할증, 자동차보험이 벌금을 보상하지 않는다, 상대 차 수리비·피해자 치료비는 보험이 보상 — 금융감독원 자동차보험 안내·손해보험협회
 *   - activity.debate: 초보 운전자 기준(야간 운전·동승 인원 제한 등 단계적 면허)의 예 — 도로교통공단(국외 사례는 확인된 자료만)
 *   - wrap.pledge·activity.three-years: 서약 항목(뒷좌석 안전띠, 운전 중 휴대전화 금지, 노란불 정지, 피로·분노 때 운전하지 않기)은 앞 주제와 같은 일반 수칙 — 도로교통공단
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-traffic', band: '고', topic: `saf-traffic.h.${topic}`, grades }, o, { id: `saf-traffic.h.${topic}.${o.id}` });
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


  const MODS = [];

  // ======================================================================================================
  // 1. 탈것의 법적 구분과 면허 조건 (10학년)
  // ======================================================================================================
  {
    const M = MOD('vehicle-license', [10]);
    const RIDE = { text: '고1 도현이는 버스 통학이 50분 걸려 힘들다. 친구가 "공유 킥보드 앱은 면허 없이도 인증만 하면 빌려져"라고 말한다.', who: '도현', motif: 'house', choices: [
      { id: 'nolicense', text: '면허 없이 공유 킥보드를 빌려 탄다', result: '앱 인증이 통과되어 통학 시간이 20분으로 줄어든다.', impact: [{ who: '도현', text: '면허 없이 운전하는 상태가 된다', tone: -1 }],
        next: { text: '한 달 뒤 등굣길, 교차로 앞에서 경찰이 개인형 이동장치 운전자를 확인하고 있다.', choices: [
          { id: 'run', text: '골목으로 방향을 틀어 피한다', result: '좁은 골목에서 나오던 차와 부딪칠 뻔한다.', impact: [{ who: '도현', text: '단속보다 큰 사고 위험을 만난다', tone: -1 }],
            next: { text: '그날 저녁, 부모님이 같은 반 친구 부모님에게서 이야기를 듣는다.', choices: [
              { id: 'stop', text: '킥보드를 그만 타고 면허 준비를 의논한다', result: '면허를 딸 때까지는 버스를 타기로 한다.', impact: [{ who: '도현', text: '늦었지만 법과 안전 안으로 돌아온다', tone: 1 }], ending: '피해 다니는 운전은 결국 멈춰야 하는 운전이다.' },
              { id: 'keep', text: '들키지 않게 계속 탄다', result: '매일 단속과 사고를 걱정하며 탄다.', impact: [{ who: '도현', text: '사고가 나면 무면허 책임까지 진다', tone: -1 }], ending: '앱 인증은 면허가 아니고, 사고 뒤의 책임은 나에게 남는다.' }] } },
          { id: 'caught', text: '그대로 가다가 확인을 받는다', result: '면허가 없다는 것이 드러나 운전을 멈추게 된다.', impact: [{ who: '도현', text: '무면허 운전으로 처분을 받는다', tone: -1 }], ending: '편리함 때문에 건너뛴 자격은 한 번의 확인으로 드러난다.' }] } },
      { id: 'license', text: '원동기장치자전거 면허를 딴 뒤 타기로 한다', result: '면허를 딸 수 있는 나이와 시험 일정을 알아본다.', impact: [{ who: '도현', text: '몇 달은 버스를 더 탄다', tone: 0 }],
        next: { text: '면허를 땄다. 첫날 친구가 "안전모는 귀찮으니 그냥 타"라고 한다.', choices: [
          { id: 'helmet', text: '안전모를 쓰고 혼자 탄다', result: '안전모 턱끈까지 조이고 출발한다.', impact: [{ who: '도현', text: '자격과 장구를 함께 갖춘다', tone: 1 }],
            next: { text: '비 오는 아침, 도로가 미끄럽다.', choices: [
              { id: 'bus', text: '그날은 버스를 탄다', result: '조금 늦게 도착하지만 넘어질 걱정이 없다.', impact: [{ who: '도현', text: '날씨에 맞게 수단을 바꾼다', tone: 1 }], ending: '면허가 있어도 날씨와 내 상태에 따라 타지 않는 판단이 필요하다.' },
              { id: 'fast', text: '늦을까 봐 평소처럼 빠르게 탄다', result: '젖은 맨홀 뚜껑에서 바퀴가 미끄러진다.', impact: [{ who: '도현', text: '가벼운 찰과상을 입는다', tone: -1 }], ending: '자격은 출발선일 뿐, 그날의 판단은 매번 새로 해야 한다.' }] } },
          { id: 'nohelmet', text: '가까운 길이니 안전모 없이 탄다', result: '면허는 있지만 안전모를 쓰지 않은 채 달린다.', impact: [{ who: '도현', text: '넘어지면 머리를 그대로 다친다', tone: -1 }], ending: '면허가 있어도 안전모 의무는 그대로다.' }] } },
      { id: 'bus', text: '대중교통을 그대로 이용한다', result: '통학은 길지만 버스에서 영어 단어를 외운다.', impact: [{ who: '도현', text: '법적 문제 없이 통학한다', tone: 1 }], ending: '모든 탈것을 당장 탈 필요는 없다. 지금 가진 자격에 맞는 수단을 고르는 것도 계획이다.' }] };
    const RIDE_R = [{ id: 'license', text: '개인형 이동장치도 원동기장치자전거 면허 이상이 있어야 운전할 수 있다' }, { id: 'gear', text: '면허를 딴 뒤에도 안전모 같은 의무는 따로 지켜야 한다' }, { id: 'app', text: '공유 앱 인증을 통과하면 면허가 있는 것과 같다', why: '앱 인증은 서비스 가입 절차일 뿐 운전 자격이 아니에요.' }, { id: 'short', text: '가까운 거리는 면허 없이 타도 된다', why: '거리와 상관없이 운전 자격은 같아요.' }];
    const VEH = ['자전거', '전동킥보드', '소형 스쿠터', '대형 오토바이'];

    MODS.push(
      M({
        id: 'intro.vehicle-sort', type: 'intro', title: '이 탈것은 법에서 무엇일까',
        method: '탈것 사진 카드 법적 구분', tool: 'mindmap', minutes: 6,
        levels: { easy: '자전거·전동킥보드·소형 스쿠터·대형 오토바이 카드 4장을 함께 나눈다.', base: '전기자전거(페달 보조)·전동휠까지 6장을 나누고 나눈 근거를 말한다.', challenge: '가장 헷갈린 카드 하나를 골라 왜 그 칸인지 근거를 한 문장으로 말한다.' },
        intro: {
          teacher: '"길에서 보는 탈것은 다 비슷해 보이지만 도로교통법은 이들을 서로 다른 이름으로 부르고, 이름마다 운전 자격이 달라요." 카드를 세 칸에 나누는 시연을 보여 준 뒤 학생들에게 헷갈리는 카드를 묻는다. "전동킥보드는 자전거랑 비슷하니까 면허가 필요 없다"는 말이 나오면 "모터가 달려 스스로 움직이는 탈것도 자전거와 같은 칸일까요?"라고 되묻는다. 오늘은 칸 이름이 곧 운전 자격의 차이라는 것을 확인한다고 밝힌다.',
          student: '탈것 카드를 자전거, 개인형 이동장치, 원동기장치자전거·이륜자동차 칸으로 나누고, 칸마다 운전 자격이 어떻게 다를지 짐작해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '법에서 부르는 이름', slots: ['자전거', '개인형 이동장치', '원동기장치자전거·이륜자동차'], cards: ['페달만으로 가는 자전거', '전동킥보드', '전동휠', '소형 스쿠터', '대형 오토바이'] }, sequence: [{ sort: { '자전거': ['페달만으로 가는 자전거'], '개인형 이동장치': ['전동킥보드', '전동휠'], '원동기장치자전거·이륜자동차': ['소형 스쿠터', '대형 오토바이'] } }] },
          art: { draw: 'a row of paper vehicles on a paper road: a bicycle, an electric kick scooter, a small moped and a large motorcycle, each with a blank paper tag hanging from it', banner: '법은 탈것을 어떻게 부를까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '구분은 도로교통법의 이름을 따르되 배기량·속도 같은 기준 수치는 외우게 하지 않는다. 구분 기준의 세부는 도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'intro.first-ride', type: 'intro', title: '중고 스쿠터를 사려는 친구',
        method: '처음 스쿠터를 사려는 친구 사례', tool: 'story', minutes: 7,
        levels: { easy: '장면 카드 3장(광고 보기·연락·바로 타기)을 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 빠진 확인 절차 하나를 짚는다.', challenge: '빠진 확인 절차 둘(면허·보험이나 보호장구)을 짚고 어느 장면 사이에 들어가야 하는지 말한다.' },
        intro: {
          teacher: '"고1 준서가 중고 거래 앱에서 싼 스쿠터를 발견했어요. 준서의 하루를 차례로 놓아 볼까요?" 시연으로 장면을 차례로 놓은 뒤 "이 이야기에서 빠진 장면은 무엇일까요?"라고 묻는다. "돈 주고 샀으니 내 것이고 바로 타면 된다"는 말이 나오면 "물건을 가진 것과 그 물건을 운전할 자격이 있는 것은 같을까요?"라고 되묻는다. 사는 것보다 먼저 확인할 것이 있다는 것이 오늘의 질문이라고 밝힌다.',
          student: '준서가 중고 스쿠터를 사는 장면 카드를 차례로 놓고, 타기 전에 꼭 있어야 했는데 빠진 확인 절차가 무엇인지 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '준서의 중고 스쿠터(가상)', cards: [{ id: 'ad', text: '중고 거래 앱에서 싼 스쿠터를 본다', motif: 'star' }, { id: 'call', text: '판매자와 만날 시간을 정한다', motif: 'house' }, { id: 'pay', text: '돈을 내고 열쇠를 받는다', motif: 'sun' }, { id: 'go', text: '그 자리에서 타고 집으로 간다', motif: 'cloud' }], shuffle: false }, sequence: [{ order: ['ad', 'call', 'pay', 'go'] }] },
          art: { draw: 'a paper teenager holding a phone showing a used scooter listing, a paper scooter with a price tag, and a dotted paper path with a missing stepping stone between buying and riding', banner: '사기 전에 무엇을 확인할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '빠진 절차로 면허 확인, 보험 가입, 안전모 준비, 이륜차 사용 신고 같은 행정 절차를 들 수 있다. 사용 신고·보험 의무의 세부는 사람이 확인한 뒤 설명한다(도로교통공단·한국교통안전공단 안내).',
      }),

      M({
        id: 'activity.license-match', type: 'activity', title: '탈것마다 필요한 운전 조건',
        method: '탈것과 운전 조건 잇기', tool: 'wordcards', minutes: 19,
        levels: { easy: '탈것 3개를 필요한 면허 카드와 짝짓는다.', base: '탈것 4개를 면허 카드와 짝짓고, 안전모·승차 정원 조건을 탈것과 잇는다.', challenge: '면허·안전모·승차 정원이 한꺼번에 걸리는 탈것의 조건을 모두 고르고, 앱 인증처럼 조건이 아닌 카드는 남긴다.' },
        activity: {
          title: '탈것과 운전 조건 잇기', tool: 'wordcards',
          teacher: '"탈것 이름 카드와 운전 조건 카드를 이어 볼 거예요. 면허 칸은 하나지만, 조건은 면허만 있는 게 아니에요." 첫 문항은 면허, 둘째는 안전모·승차 정원, 셋째는 한 탈것에 걸린 조건을 모두 고르게 한다. \'공유 앱 인증\'을 조건으로 고르는 학생에게 "앱 회사가 면허를 내줄 수 있을까요? 앱은 무엇을 확인한 걸까요?"라고 묻는다. 자전거에는 면허가 없지만 안전모 착용 같은 의무는 있다는 점도 짚는다.',
          task: '탈것 카드와 운전 조건 카드를 잇고, 한 탈것에 걸린 조건을 모두 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            WORDQ('탈것마다 운전하는 데 필요한 자격을 짝지으세요.', [['자전거', '운전면허가 필요 없다'], ['전동킥보드', '원동기장치자전거 면허 이상이 필요하다'], ['소형 스쿠터(원동기장치자전거)', '원동기장치자전거 면허 이상이 필요하다'], ['대형 오토바이(이륜자동차)', '이륜자동차를 운전할 수 있는 면허가 필요하다']], { k: 3, d: 0.3, more: { hints: ['모터가 있는지, 얼마나 큰 탈것인지 차례로 따져 보세요.'] } }),
            MATCHQ('탈것과 그 탈것에 걸린 통행 조건을 짝지으세요.', [['전동킥보드에 함께 탈 수 있는 사람', '운전자 한 명만'], ['전동킥보드를 탈 때 머리', '안전모를 쓴다'], ['자전거를 탈 때 머리', '안전모를 쓴다(자전거도 의무)']], { k: 2, extra: ['친구 한 명까지 함께 탄다', '가까운 길은 안 써도 된다'], d: 0.35, opt: { mode: 'match' } }),
            PICKQ('면허를 가진 고등학생이 소형 스쿠터를 탈 때 지켜야 할 조건을 모두 고르세요.', ['원동기장치자전거 면허 이상', '안전모 쓰기', '정해진 승차 정원 지키기'], ['공유 앱 본인 인증', '친구의 운전 허락'], { d: 0.4, opt: { mode: 'pick', basket: '지켜야 할 조건' }, more: { conclude: '탈것마다 면허·안전모·승차 정원 조건이 겹쳐 있어요. 하나를 갖췄다고 나머지가 풀리지는 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '탈것마다 필요한 조건을 정리하세요.', columns: ['탈것', '필요한 면허', '안전모', '함께 탈 수 있나'], cells: [['자전거', '', '', ''], ['전동킥보드', '', '', ''], ['소형 스쿠터', '', '', '']] }] },
        notes: '면허 종류와 개인형 이동장치 승차 정원(1명)·안전모 의무는 도로교통법 개정에 따라 바뀔 수 있으니 수업 전 도로교통공단·경찰청 안내로 확인한다. 범칙금 액수는 다루지 않는다.',
      }),
      M({
        id: 'activity.law-read', type: 'activity', title: '규정 요약문으로 사례 판단하기',
        method: '도로교통법 발췌 읽고 사례 판단', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '사례 1(무면허 킥보드)만 문장 틀을 보고 판단 글을 쓴다.', base: '사례 2개를 규정 인용·사실 대조·결론 기준표로 점검하며 쓴다.', challenge: '사례마다 기준 하나가 더 붙고, 마지막 문항에서 "앱이 빌려줬으니 회사 책임"이라는 반론에 답한다.' },
        activity: {
          title: '규정 요약문과 사례 판단', tool: 'rubric-writing',
          teacher: '"오늘은 법을 외우는 대신 읽고 적용해 봐요. 규정 요약문 → 사례의 사실 → 결론, 이 세 칸을 이어야 판단이 돼요." 칠판에 요약문 두 줄(개인형 이동장치는 원동기장치자전거 면허 이상, 승차 정원 지키기·안전모 쓰기)을 적고 사례를 읽는다. "잠깐 탔으니 괜찮다"처럼 사실과 상관없는 결론을 쓴 학생에게 "요약문 어느 줄이 \'잠깐\'을 예외로 두었나요?"라고 묻는다. 결론보다 근거를 잇는 과정이 판단이라는 점을 짚는다.',
          task: '규정 요약문을 읽고 가상 사례가 규정에 맞는지 근거를 들어 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('사례 1: 면허가 없는 고1 하린이가 공유 전동킥보드를 혼자 안전모를 쓰고 탔어요. 규정에 맞는지 판단하는 글을 쓰세요.', '규정 요약: 개인형 이동장치는 원동기장치자전거 면허 이상이 있어야 운전할 수 있고, 안전모를 쓰고 승차 정원을 지킨다. 사례 1이 규정에 맞는지 쓰세요.', ['규정 요약문의 해당 줄을 인용했다', '사례의 사실(면허·안전모·인원)을 하나씩 대조했다', '맞는지 아닌지 결론을 분명히 썼다'], { min: 60, max: 400, sent: [2, 5], must: [['면허']], starter: '규정에는 ~라고 되어 있다. 사례에서 하린이는 ~. 그러므로 ~', plus: '안전모를 쓴 것만으로 풀리지 않는 까닭을 썼다', d: 0.4 }),
            RWQ('사례 2: 원동기장치자전거 면허가 있는 고2 우진이가 전동킥보드에 친구를 태우고 탔어요. 규정에 맞는지 판단하는 글을 쓰세요.', '같은 규정 요약문으로 사례 2가 규정에 맞는지 쓰세요. 면허가 있다는 사실과 친구를 태운 사실을 나누어 따져요.', ['규정 요약문의 해당 줄을 인용했다', '면허와 승차 정원을 따로 대조했다', '맞는지 아닌지 결론을 분명히 썼다'], { min: 60, max: 400, sent: [2, 5], must: [['정원', '한 명', '혼자']], starter: '우진이는 면허가 ~. 그러나 ~', plus: '둘이 타면 위험해지는 까닭(균형·제동)을 덧붙였다', d: 0.45 }),
            RWQ('"앱 회사가 면허 확인 없이 빌려줬으니 사고 책임은 회사에 있다"는 반론에 답하는 글을 쓰세요.', '반론에 답하세요: "앱이 빌려줬으니 회사 책임이다." 운전한 사람의 책임과 회사의 확인 문제를 나누어 써요.', ['반론의 내용을 정확히 옮겼다', '운전자에게 남는 책임을 근거와 함께 썼다', '회사가 개선할 점도 공정하게 짚었다'], { min: 60, max: 400, sent: [3, 5], must: [['운전자', '운전한 사람']], starter: '회사의 확인이 부족했던 것은 ~. 하지만 운전한 사람은 ~', plus: '반론을 인정할 부분과 인정하지 않을 부분을 나누었다', d: 0.5, more: { conclude: '앱 인증은 운전 자격을 대신하지 않아요. 회사의 확인이 허술해도 운전한 사람의 책임은 남아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '규정 요약문 → 사례의 사실 → 결론 순서로 사례 1을 판단한 내용을 세 줄로 정리하세요.' }] },
        notes: '규정 요약문은 수업용으로 줄인 글이며 조문 번호·범칙금은 쓰지 않는다. 요약문 문구가 현행 법과 맞는지 수업 전 국가법령정보센터·도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'activity.plan-budget', type: 'activity', title: '이륜차 준비 비용 계획',
        method: '이륜차 이용 준비 시간·비용 계획', tool: 'economy', minutes: 18,
        levels: { easy: '준비 항목 4개 가운데 안전 필수 항목을 넣고 예산 안에서 고른다.', base: '항목 6개 가운데 필수 항목은 넣고 빼야 할 항목은 빼며 예산을 맞춘다.', challenge: '예산이 줄어든 경우에도 필수 항목을 지키고, 활동지에 필수로 본 근거를 쓴다.' },
        activity: {
          title: '가상 예산 안에서 준비 항목 고르기', tool: 'economy',
          teacher: '"면허를 딴 뒤 스쿠터를 타려면 무엇에 돈과 시간이 들까요? 오늘 금액은 모두 가상이에요." 예산 막대를 보며 항목을 고르게 한다. 꾸미기 용품을 먼저 담고 안전모를 빼는 학생에게 "넘어졌을 때 지켜 주는 것은 막대 안의 어느 항목인가요?"라고 묻는다. "보험은 사고 나면 그때 들면 된다"는 말에는 "사고가 난 뒤에 든 보험이 그 사고를 덮어 줄까요?"라고 되묻는다. 예산이 모자라면 안전 항목이 아니라 다른 항목을 줄인다는 점을 짚는다.',
          task: '가상 예산 안에서 이륜차 준비 항목을 고르되 안전 필수 항목은 빼지 않아요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 예산 30만 원. 면허 시험 준비와 안전모는 꼭 넣고 고르세요.', toolOptions: { mode: 'budget', budget: 300000, items: [{ id: 'lic', text: '면허 시험 준비(교재·응시)', price: 80000 }, { id: 'helmet', text: '머리에 맞는 인증 안전모', price: 120000 }, { id: 'sticker', text: '차체 꾸미기 스티커', price: 30000 }, { id: 'speaker', text: '핸들 거치 블루투스 스피커', price: 90000 }], ask: '가상 준비 예산' }, target: { budget: { must: ['lic', 'helmet'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '가상 예산 30만 원. 면허 준비와 안전모를 넣고 고르세요(항목 4개).' } } },
            { prompt: '가상 예산 50만 원. 면허 준비·안전모·보험은 꼭 넣고, 운전에 방해되는 물건은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 500000, items: [{ id: 'lic', text: '면허 시험 준비(교재·응시)', price: 80000 }, { id: 'helmet', text: '머리에 맞는 인증 안전모', price: 120000 }, { id: 'ins', text: '이륜차 보험(가상 1년)', price: 200000 }, { id: 'glove', text: '보호 장갑·무릎 보호대', price: 60000 }, { id: 'phone', text: '주행 중 영상 보는 거치대', price: 40000 }, { id: 'muffler', text: '소리 키우는 배기 부품', price: 150000 }], ask: '가상 준비 예산' }, target: { budget: { must: ['lic', 'helmet', 'ins'], not: ['phone', 'muffler'] } }, difficulty: 0.35 },
            { prompt: '예산이 40만 원으로 줄었어요. 필수 세 항목은 지키고, 방해 물건은 빼고 다시 고르세요.', toolOptions: { mode: 'budget', budget: 400000, items: [{ id: 'lic', text: '면허 시험 준비(교재·응시)', price: 80000 }, { id: 'helmet', text: '머리에 맞는 인증 안전모', price: 120000 }, { id: 'ins', text: '이륜차 보험(가상 1년)', price: 200000 }, { id: 'glove', text: '보호 장갑·무릎 보호대', price: 60000 }, { id: 'phone', text: '주행 중 영상 보는 거치대', price: 40000 }, { id: 'jacket', text: '밝은 색 긴소매 겉옷', price: 50000 }], ask: '줄어든 가상 예산' }, target: { budget: { must: ['lic', 'helmet', 'ins'], not: ['phone'] } }, difficulty: 0.4, conclude: '예산이 줄면 꾸미기·편의 항목을 먼저 줄이고, 면허·안전모·보험처럼 안전과 책임에 닿는 항목은 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 필수로 본 항목 하나와 그 근거(안전·법·책임 가운데)를 한 문장으로 쓰세요.' }] },
        notes: '금액은 모두 수업용 가상 값이다. 교구의 예산 판은 돈(원)만 세므로 준비 시간은 활동지와 정리 모듈의 시기 계획에서 다룬다. 이륜차 보험 가입 의무의 세부는 사람이 확인한다(한국교통안전공단·금융감독원 안내).',
      }),
      M({
        id: 'activity.use-dilemma', type: 'activity', title: '통학 수단 정하기 갈림길',
        method: '통학 수단 정하기 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(한 달 뒤)까지 가서 결과를 보고 근거를 고른다.', challenge: '세 번째 갈림길(한 학기 뒤)까지 따라가고, 결과마다 법·안전·비용 근거를 고른 뒤 다른 길과 견준다.' },
        activity: {
          title: '도현이의 통학 수단 갈림길', tool: 'dilemma',
          teacher: '"도현이는 통학이 힘들어요. 무면허 킥보드, 면허를 딴 뒤 스쿠터, 지금처럼 버스 — 한 학기 뒤 도현이는 어디에 있을까요?" 선택마다 영향 칸을 소리 내어 읽게 한다. 무면허 길을 고르는 학생에게 "앱이 빌려줬다는 사실이 단속 장면에서 도현이를 지켜 주었나요?"라고 묻고, 버스 길을 고른 학생에게는 "이 선택이 \'아무것도 안 한 것\'일까요, 계획일까요?"라고 묻는다. 편리함과 자격·안전을 함께 놓고 고르는 것이 판단이라는 점을 짚는다.',
          task: '도현이의 통학 수단 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('면허와 안전 의무를 모두 지키며 통학하는 길을 따라가고 근거를 고르세요.', RIDE, [['license', 'helmet', 'bus']], RIDE_R, ['license', 'gear'], { d: 0.4 }),
            EXPLOREQ('무면허 길도 끝까지 가 보고, 내가 고른 길과 결과를 견주세요.', RIDE, RIDE_R, ['무면허 길의 끝 결과를 확인했다', '두 길에서 도현이가 진 책임을 견주었다'], { d: 0.35 }),
            DILQ('면허를 딴 지 일주일, 친구가 뒷자리에 태워 달라고 하는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '면허를 딴 지 일주일, 같은 반 친구가 "학원까지 뒤에 좀 태워 줘"라고 한다. 도현이의 스쿠터에는 안전모가 하나뿐이다.', who: '도현', motif: 'cloud', choices: [
              { id: 'take', text: '가까우니 태워 준다', result: '친구는 안전모 없이 뒷자리에 앉는다.', impact: [{ who: '친구', text: '넘어지면 머리를 그대로 다친다', tone: -1 }], ending: '면허가 있어도 장구 없는 동승은 친구를 위험에 태우는 일이다.' },
              { id: 'refuse', text: '안전모가 하나뿐이라 태울 수 없다고 말한다', result: '친구가 서운해한다.', impact: [{ who: '친구', text: '잠깐 서운하다', tone: 0 }],
                next: { text: '친구가 "그럼 나 늦는데"라고 한다.', choices: [
                  { id: 'alt', text: '함께 버스 시간을 찾아 준다', result: '친구가 다음 버스를 타고 학원에 간다.', impact: [{ who: '친구', text: '조금 늦지만 안전하게 간다', tone: 1 }], ending: '거절에 대안을 붙이면 관계와 안전을 함께 지킨다.' },
                  { id: 'give', text: '내 안전모를 친구에게 주고 나는 그냥 탄다', result: '도현이가 안전모 없이 운전한다.', impact: [{ who: '도현', text: '위험이 운전자에게 옮겨 간다', tone: -1 }], ending: '안전모를 넘겨주는 것은 위험을 나누는 것이 아니라 옮기는 것이다.' }] } }] },
              [['refuse', 'alt']], [{ id: 'gear', text: '운전자와 동승자 모두 안전모를 써야 한다' }, { id: 'alt', text: '거절할 때 다른 이동 방법을 함께 찾으면 관계도 지킨다' }, { id: 'near', text: '가까운 거리는 괜찮다', why: '사고는 거리와 상관없이 일어나요.' }], ['gear', 'alt'], { d: 0.35, more: { conclude: '자격을 갖춘 뒤에도 동승·장구·날씨마다 새로 판단해요. 거절에는 대안을 붙여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 길의 한 학기 뒤 결과를 견주어 쓰세요.', columns: ['길', '법', '안전', '비용·시간'], cells: [['무면허 킥보드', '', '', ''], ['면허 뒤 스쿠터', '', '', ''], ['대중교통', '', '', '']] }] },
        notes: '이륜차의 승차 정원·동승자 안전모 의무는 수업 전 도로교통공단 안내로 확인한다. 학생이 실제로 무면허 운전을 했는지 묻지 않는다.',
      }),

      M({
        id: 'wrap.my-timeline', type: 'wrap', title: '나의 탈것 이용 시기 계획',
        method: '나의 탈것 이용 시기 계획', tool: 'timeline', minutes: 7,
        levels: { easy: '지금·면허 취득·운전 초기 3단계에 할 준비 카드를 함께 놓는다.', base: '숙련 단계까지 4단계에 준비 카드를 놓는다.', challenge: '단계마다 확인할 법적 조건(면허 종류·안전모·보험)을 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 내 시간표로 옮겨 볼까요? 지금, 면허를 딸 수 있을 때, 처음 탈 때, 익숙해졌을 때 — 단계마다 할 일이 달라요." 출구 1번은 함께 차례를 놓는다. "면허만 따면 숙련 단계로 바로 간다"는 학생에게 "처음 탄 날과 몇 달 탄 날의 판단이 같을까요?"라고 묻는다. 활동지에서 단계마다 확인할 법적 조건을 쓰게 하고, 탈것을 꼭 타야 한다는 뜻이 아니라는 점도 함께 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['지금', '숙련'], slots: 4, cards: ['익숙해져도 날씨·상태 따라 타지 않는 판단', '면허 공부와 안전모 고르기', '처음엔 낮 시간 익숙한 길만', '면허 시험 응시', '앱 인증으로 먼저 타 보기'] }, prompt: '단계별 준비 카드를 차례로 놓고, 맞지 않는 카드는 남기세요.', target: { order: ['면허 공부와 안전모 고르기', '면허 시험 응시', '처음엔 낮 시간 익숙한 길만', '익숙해져도 날씨·상태 따라 타지 않는 판단'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['공유 앱 인증을 통과하면 면허가 없어도 된다', '전동킥보드도 원동기장치자전거 면허 이상이 있어야 운전한다', '면허를 따면 안전모는 쓰지 않아도 된다'], answer: 1, difficulty: 0.15, explain: '개인형 이동장치도 면허가 필요하고, 면허를 딴 뒤에도 안전모 같은 의무는 따로 지켜요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 탈것 이용 시기 계획',
          items: [
            { type: 'table', prompt: '단계마다 할 준비와 확인할 법적 조건을 쓰세요.', columns: ['단계', '할 준비', '확인할 조건'], cells: [['지금', '', ''], ['면허 취득', '', ''], ['운전 초기', '', ''], ['숙련', '', '']] },
            { type: 'short', prompt: '내가 당분간 탈것을 타지 않기로 한다면, 그 까닭과 대신 쓸 이동 수단을 쓰세요.' },
          ],
          easy: { note: '지금 → 면허 취득 → 운전 초기 세 칸만 채워도 돼요.', items: [{ type: 'short', prompt: '면허를 따기 전에 지금 할 수 있는 준비 하나를 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.law-sort', type: 'wrap', title: '설명할 수 있는 규정, 헷갈리는 규정',
        method: '이해한 규정과 헷갈리는 규정 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 규정 카드 3장을 함께 읽으며 면허·타는 방법 칸에 나누고, 활동지에서 설명할 수 있는 규정에 표시한다.', base: '규정 카드 5장을 나누고, 활동지에서 설명할 수 있다·헷갈린다를 스스로 나눈 뒤 헷갈리는 것 하나를 질문으로 쓴다.', challenge: '설명할 수 있다고 표시한 규정 하나를 짝에게 30초 동안 설명한다.' },
        wrap: {
          teacher: '"오늘 배운 규정 가운데 친구에게 설명할 수 있는 것과 아직 헷갈리는 것을 솔직하게 나눠 봐요. 정답 칸은 없어요." 출구 1번에서 규정을 면허에 관한 것과 타는 방법에 관한 것으로 먼저 나눈 뒤, 활동지에서 그 규정마다 설명할 수 있는지 스스로 표시하게 한다. 헷갈린다고 한 규정은 출구 3번에 질문으로 쓰게 하고, 다음 시간 첫머리에 질문 몇 개를 함께 푼다. "모르면 그냥 안 타면 되니까 괜찮다"는 학생에게 "친구가 물어 오면 무엇이라고 답할 수 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '오늘 배운 규정', slots: ['면허에 관한 규정', '타는 방법에 관한 규정'], cards: ['킥보드는 원동기 면허 이상', '킥보드는 한 명만 탄다', '자전거도 안전모를 쓴다', '이륜자동차는 그에 맞는 면허', '앱 인증은 면허가 아니다', '킥보드도 안전모를 쓴다'] }, prompt: '오늘 배운 규정 카드를 면허에 관한 것과 타는 방법에 관한 것으로 나누세요.', target: { sort: { '면허에 관한 규정': ['킥보드는 원동기 면허 이상', '이륜자동차는 그에 맞는 면허', '앱 인증은 면허가 아니다'], '타는 방법에 관한 규정': ['킥보드는 한 명만 탄다', '자전거도 안전모를 쓴다', '킥보드도 안전모를 쓴다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '면허가 있는 운전자가 전동킥보드에 친구를 태웠어요. 맞는 판단은?', options: ['면허가 있으니 괜찮다', '승차 정원을 넘겨 규정에 맞지 않다', '친구가 안전모를 쓰면 괜찮다'], answer: 1, difficulty: 0.2, explain: '면허와 승차 정원은 따로 지켜야 하는 조건이에요.' },
            { type: 'short', prompt: '아직 헷갈리는 규정 하나를 질문으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '규정 이해 점검',
          items: [
            { type: 'check', prompt: '친구에게 설명할 수 있는 규정에 표시하세요.', options: ['킥보드 면허 조건', '킥보드 승차 정원', '자전거·킥보드 안전모', '이륜자동차 면허', '앱 인증과 면허의 차이'] },
            { type: 'short', prompt: '설명할 수 있는 규정 하나를 골라 친구에게 하듯 두 문장으로 설명하세요.' },
          ],
        },
        notes: '교구는 정답이 있는 나누기만 판정하므로 \'설명할 수 있다·헷갈린다\' 자기 나누기는 활동지 표시로 한다.',
      }),
    );
  }

  // ======================================================================================================
  // 2. 이륜차 사고 원인과 배달 이륜차의 구조 (10학년)
  // ======================================================================================================
  {
    const M = MOD('moto-cause', [10]);
    const LATE = { text: '비 오는 금요일 저녁, 주문한 음식이 예상 시간보다 20분 늦어지고 있다. 앱에는 "배달 중"만 떠 있다.', who: '서아', motif: 'rain', choices: [
      { id: 'call', text: '가게에 전화해 "언제 와요? 빨리 좀요"라고 재촉한다', result: '가게가 배달 기사에게 "손님이 재촉한다"고 연락한다.', impact: [{ who: '배달 기사', text: '빗길에서 더 서두르게 된다', tone: -1 }],
        next: { text: '10분 뒤에도 음식이 오지 않는다. 앱에 별점 창이 미리 떠 있다.', choices: [
          { id: 'star1', text: '늦었다고 별점 1점을 미리 주겠다고 남긴다', result: '배달 기사는 다음 배달부터 신호를 무시하고 달린다.', impact: [{ who: '배달 기사', text: '평가가 깎일까 봐 위험 운전을 한다', tone: -1 }], ending: '재촉과 낮은 평가는 빗길의 속도를 높이는 압박이 된다.' },
          { id: 'wait2', text: '재촉한 것을 사과하고 천천히 와도 된다고 남긴다', result: '배달 기사가 속도를 줄이고 도착한다.', impact: [{ who: '배달 기사', text: '압박이 조금 줄어든다', tone: 1 }], ending: '한 번의 재촉도 되돌릴 수 있지만, 처음부터 기다리는 편이 낫다.' }] } },
      { id: 'wait', text: '비가 오니 늦을 수 있다고 생각하고 기다린다', result: '음식이 25분 늦게 도착한다.', impact: [{ who: '배달 기사', text: '서두르지 않고 빗길을 달린다', tone: 1 }],
        next: { text: '도착한 배달 기사가 "늦어서 죄송합니다"라며 고개를 숙인다.', choices: [
          { id: 'thanks', text: '"비 오는데 조심히 오셔서 고마워요"라고 말하고 앱 메모로 안전 운행 응원을 남긴다', result: '배달 기사가 웃으며 다음 배달로 간다.', impact: [{ who: '배달 기사', text: '안전하게 운행할 마음을 얻는다', tone: 1 }], ending: '이용자의 말과 평가도 배달 이륜차의 안전 구조에 들어간다.' },
          { id: 'cold', text: '"음식이 식었잖아요"라며 낮은 별점을 준다', result: '배달 기사의 평가 점수가 내려간다.', impact: [{ who: '배달 기사', text: '다음엔 더 빨리 가야 한다는 압박을 받는다', tone: -1 }], ending: '늦음을 벌로 갚게 하면 다음 빗길의 속도가 올라간다.' }] } },
      { id: 'cancel', text: '주문을 취소하고 다른 가게에 다시 주문한다', result: '다른 가게 배달 기사가 새 주문을 받아 출발한다.', impact: [{ who: '처음 배달 기사', text: '헛걸음을 하고 다음 배달이 밀린다', tone: -1 }], ending: '취소는 압박을 없애지 않고 다른 사람에게 옮긴다.' }] };
    const LATE_R = [{ id: 'press', text: '이용자의 재촉과 평가가 배달 운전자의 속도 압박이 된다' }, { id: 'rain', text: '빗길에서 서두르면 이륜차는 미끄러지기 쉽다' }, { id: 'paid', text: '돈을 냈으니 빨리 받는 것이 당연하다', why: '배달비는 안전을 포기하라는 값이 아니에요.' }, { id: 'none', text: '나는 운전하지 않으니 사고와 상관없다', why: '재촉은 운전자의 판단에 영향을 줘요.' }];

    MODS.push(
      M({
        id: 'intro.cause-map', type: 'intro', title: '이륜차 사고는 왜 일어날까',
        method: '이륜차 사고 원인 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '운전자·차·환경·일의 구조 네 가지 이름을 보이고 원인 카드를 함께 붙인다.', base: '가지마다 원인 카드 2장씩 붙이고 왜 그 가지인지 말한다.', challenge: '서로 이어지는 가지(예: 일의 구조 → 운전자 과속)를 짚어 말로 연결한다.' },
        intro: {
          teacher: '"\'이륜차 사고\' 하면 누가 떠오르나요? 대부분 운전자만 떠올려요. 오늘은 가지를 네 개로 늘려 볼게요." 시연으로 원인 카드가 운전자·차·환경·일의 구조 가지에 붙는 모습을 보여 준다. "결국 운전자가 조심하면 되는 거 아니에요?"라는 말이 나오면 "건당 돈을 받고, 늦으면 평가가 깎이는 일이라면 운전자의 선택은 어디서 영향을 받을까요?"라고 되묻는다. 개인 탓만 보면 예방도 개인 몫으로만 남는다는 점을 오늘의 질문으로 남긴다.',
          student: '가운데 \'이륜차 사고\'에서 운전자·차·환경·일의 구조 네 가지를 뻗고, 원인 카드가 어느 가지에 붙는지 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '이륜차 사고', slots: ['운전자', '차', '환경', '일의 구조'], cards: ['과속·신호 위반', '닳은 타이어', '젖은 노면', '빨리 배달할수록 버는 구조', '차로 사이 주행', '어두운 밤길', '고장 난 브레이크등', '늦으면 깎이는 평가'] }, sequence: [{ sort: { '운전자': ['과속·신호 위반', '차로 사이 주행'], '차': ['닳은 타이어', '고장 난 브레이크등'], '환경': ['젖은 노면', '어두운 밤길'], '일의 구조': ['빨리 배달할수록 버는 구조', '늦으면 깎이는 평가'] } }] },
          art: { draw: 'a paper mind map with a small paper motorcycle in the center and four paper branches labeled with icons: a rider, a wheel, a rain cloud and a clock with coins', banner: '사고의 원인은 하나일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '특정 배달 업체·앱 이름을 쓰지 않는다. 배달 일을 하는 가족이 있는 학생이 있을 수 있으니 운전자를 탓하는 말투가 되지 않게 구조를 함께 본다.',
      }),
      M({
        id: 'intro.case-story', type: 'intro', title: '가상 배달 사고 다시 짜 보기',
        method: '가상 배달 사고 사례 재구성', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장(주문 몰림·신호 앞·사고)을 함께 차례로 놓는다.', base: '장면 5장을 차례로 놓고 압박이 생긴 순간 하나를 짚는다.', challenge: '압박 요인 둘(재촉 연락·평가 알림 같은)을 짚고 그 순간 바꿀 수 있었던 사람을 말한다.' },
        intro: {
          teacher: '"가상의 배달 기사 태오 씨의 저녁 한 시간이에요. 장면을 시간 차례로 놓아 보면 사고 직전에 무엇이 있었는지 보여요." 시연으로 장면 다섯 장을 놓은 뒤 "어느 장면에서 태오 씨가 서두르기 시작했나요?"라고 묻는다. "신호를 무시한 태오 씨 잘못이다"라는 말이 나오면 "맞아요, 운전자 책임은 있어요. 그럼 그 앞 장면들은 그 선택과 상관이 없을까요?"라고 되묻는다. 원인을 시간 차례로 펼치면 예방할 자리가 여럿 보인다는 점을 짚는다.',
          student: '가상의 배달 사고 장면 카드를 시간 차례로 놓고, 운전자가 서두르게 된 압박이 어느 순간 생겼는지 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '태오 씨의 저녁 한 시간(가상)', cards: [{ id: 'rush', text: '저녁 7시, 주문이 한꺼번에 몰린다', motif: 'moon' }, { id: 'call', text: '가게에서 "손님이 재촉한다"고 연락이 온다', motif: 'house' }, { id: 'alarm', text: '앱에 "예상 시간 초과" 알림이 뜬다', motif: 'star' }, { id: 'red', text: '노란불에서 속도를 올려 교차로에 들어간다', motif: 'cloud' }, { id: 'crash', text: '좌회전하던 차와 부딪친다', motif: 'rain' }], shuffle: false }, sequence: [{ order: ['rush', 'call', 'alarm', 'red', 'crash'] }] },
          art: { draw: 'a paper delivery scooter at a rainy intersection at night, a paper phone floating above it showing a red timer, and a paper car turning left in front', banner: '서두름은 어디서 왔을까?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이다. 실제 사고 보도·사진을 쓰지 않고, 배달 일 하는 가족을 둔 학생이 상처받지 않게 \'구조를 바꾸는 이야기\'로 맺는다.',
      }),

      M({
        id: 'activity.three-way', type: 'activity', title: '원인 카드 세 갈래로 나누기',
        method: '원인 세 갈래 분석', tool: 'mindmap', minutes: 19,
        levels: { easy: '원인 카드 6장(갈래마다 2장)을 세 갈래로 나누고, 놓는 즉시 맞는지 보인다.', base: '원인 카드 9장을 나누고, 원인마다 근거 카드를 짝짓는다.', challenge: '헷갈리는 카드 3장이 더해진 12장을 나누고, 가장 바꾸기 쉬운 원인을 골라 활동지에 까닭을 쓴다.' },
        activity: {
          title: '원인 세 갈래 나누기', tool: 'mindmap',
          teacher: '"태오 씨 사례의 원인 카드를 운전자 행동, 차와 장비, 환경과 구조 세 갈래로 나눠 봐요. 갈래마다 예방하는 사람도 달라져요." 카드를 놓을 때마다 "이 원인을 바꿀 수 있는 사람은 누구인가요?"라고 묻는다. \'예상 시간 표시\'를 운전자 행동에 넣는 학생에게 "그 표시를 만든 것은 운전자일까요?"라고 되묻는다. 세 갈래가 따로 있지 않고 구조가 행동을 밀어붙인다는 점을 짚는다.',
          task: '원인 카드를 운전자 행동·차와 장비·환경과 구조로 나누고, 근거를 잇고, 바꾸기 쉬운 원인을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('태오 씨 사례의 원인 카드를 세 갈래로 나누세요.', ['운전자 행동', '차와 장비', '환경과 구조'], [
              ['노란불에서 속도를 올렸다', '차로 사이로 빠져나갔다', '안전모 턱끈을 풀고 달렸다'],
              ['뒷타이어가 닳아 있었다', '브레이크등 하나가 꺼져 있었다', '휴대전화 거치대가 시야를 가렸다'],
              ['비에 젖은 교차로', '늦으면 평가가 깎이는 구조', '주문이 몰리는 저녁 시간'],
            ], { k: 2, hard: [['신호 대기 중 앱을 확인했다'], ['점검을 미룬 지 두 달'], ['예상 시간을 짧게 보이는 앱 표시']], d: 0.3, opt: { topic: '사고 원인' } }),
            MATCHQ('원인마다 그것을 바꿀 수 있는 사람을 짝지으세요.', [['노란불에서 속도를 올렸다', '운전자'], ['뒷타이어가 닳아 있었다', '운전자와 차를 빌려준 업체'], ['늦으면 평가가 깎이는 구조', '업체와 플랫폼'], ['손님의 재촉 연락', '이용자']], { k: 3, extra: ['아무도 바꿀 수 없다'], d: 0.35, opt: { mode: 'match' }, more: { hints: ['그 원인을 만든 사람, 그 원인을 멈출 수 있는 사람을 차례로 떠올려 보세요.'] } }),
            PICKQ('오늘 당장 이용자인 내가 바꿀 수 있는 원인만 고르세요.', ['손님의 재촉 연락', '늦었다고 낮은 평가 주기'], ['뒷타이어가 닳아 있었다', '비에 젖은 교차로'], { d: 0.35, opt: { mode: 'pick', basket: '내가 바꿀 수 있는 것' }, more: { conclude: '사고 원인은 운전자·차·환경과 구조에 걸쳐 있고, 이용자도 그 구조의 한 자리를 바꿀 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 갈래 가운데 가장 바꾸기 쉬운 원인 하나를 골라, 누가 어떻게 바꿀 수 있는지 쓰세요.' }] },
      }),
      M({
        id: 'activity.trend-read', type: 'activity', title: '가상 꺾은선으로 위험 시간대 읽기',
        method: '가상 자료로 시간대 위험 읽기', tool: 'chart', minutes: 18,
        levels: { easy: '점 위에 값이 보이는 운행량 꺾은선 하나를 읽는다.', base: '값 표시 없이 운행량 선과 사고 경향 선을 차례로 읽고 두 선을 견준다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 이 자료로 말할 수 없는 것을 골라 그 까닭을 짝에게 설명한다.' },
        activity: {
          title: '시간대별 운행량·사고 경향 읽기', tool: 'chart',
          teacher: '"이 꺾은선들은 실제 통계가 아니라 수업용 가상 자료예요. 그래도 자료를 읽는 방법은 진짜예요." 운행량 선을 먼저 읽고, 사고 경향 선과 견주게 한다. "사고가 많은 시간에 배달 기사가 운전을 못한다"고 결론 내리는 학생에게 "그 시간에 달리는 이륜차가 많으면 사고 수는 어떻게 될까요?"라고 묻는다. 두 선이 같이 오른다고 하나가 다른 하나의 원인이라고 단정할 수 없다는 점을 짚는다.',
          task: '가상의 시간대별 이륜차 운행량·사고 경향 꺾은선을 읽고, 위험이 커지는 시간대와 그 까닭을 추론해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 자료에서 이륜차 운행량이 가장 많은 시간대를 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '시간대별 이륜차 운행량(가상, 상대 크기)', xLabel: '시간대', yLabel: '상대 크기', data: [['오전 10시', 3], ['낮 12시', 8], ['오후 3시', 4], ['저녁 7시', 10], ['밤 10시', 6]], question: '운행량이 가장 많은 때는?', choices: ['오전 10시', '낮 12시', '오후 3시', '저녁 7시', '밤 10시'] }, target: { pick: 3 }, difficulty: 0.15 },
            { prompt: '가상의 사고 경향 선에서 사고가 가장 많은 시간대를 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '시간대별 이륜차 사고 경향(가상, 상대 크기)', xLabel: '시간대', yLabel: '상대 크기', data: [['오전 10시', 2], ['낮 12시', 6], ['오후 3시', 3], ['저녁 7시', 9], ['밤 10시', 7]], question: '사고가 가장 많은 때는?', choices: ['오전 10시', '낮 12시', '오후 3시', '저녁 7시', '밤 10시'] }, target: { pick: 3 }, difficulty: 0.2 },
            { prompt: '두 가상 선을 견주면, 운행량에 비해 사고 경향이 높아 보이는 시간대는 어디인가요?', toolOptions: { type: 'line', mode: 'read', title: '시간대별 이륜차 사고 경향(가상, 상대 크기)', xLabel: '시간대', yLabel: '상대 크기', data: [['오전 10시', 2], ['낮 12시', 6], ['오후 3시', 3], ['저녁 7시', 9], ['밤 10시', 7]], question: '운행량(밤 10시 6)에 비해 높은 때는?', choices: ['오전 10시', '오후 3시', '밤 10시'], why: ['오전은 운행량도 사고도 낮아요.', '오후 3시는 운행량 4에 사고 3이에요.', ''] }, target: { pick: 2 }, difficulty: 0.35, conclude: '밤에는 운행량이 줄어도 사고 경향이 높게 남을 수 있어요. 어둠·피로 같은 환경 원인을 함께 떠올려 봐요.' },
            { prompt: '이 가상 꺾은선만으로는 말할 수 없는 것을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '시간대별 이륜차 운행량(가상, 상대 크기)', xLabel: '시간대', yLabel: '상대 크기', data: [['오전 10시', 3], ['낮 12시', 8], ['오후 3시', 4], ['저녁 7시', 10], ['밤 10시', 6]], question: '이 자료로 말할 수 없는 것은?', choices: ['저녁 7시에 운행량이 가장 많다', '저녁 사고는 모두 재촉 때문에 일어난다', '오후 3시는 낮 12시보다 운행량이 적다'], why: ['그래프에서 읽을 수 있어요.', '', '그래프에서 읽을 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '그래프는 많고 적음을 보여 줄 뿐 원인을 증명하지 않아요. 원인은 다른 자료와 사례로 따져야 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 자료에서 위험이 커지는 시간대 하나와 그 까닭으로 짐작되는 것을 쓰고, 그것을 확인하려면 어떤 자료가 더 필요한지 쓰세요.' }] },
        notes: '그래프 값은 모두 수업용 가상 상대 크기다. 교구의 꺾은선은 한 판에 선 하나만 그려서 \'선 2개 비교\'는 두 문항(운행량·사고 경향)을 차례로 읽고 셋째 문항에서 견주는 방식으로 했다. 실제 통계는 도로교통공단 교통사고분석시스템(TAAS)에서 사람이 확인한다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '예상 시간 표시 없애기 찬반',
        method: '배달 시간 단축 경쟁 찬반 토론', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문장 틀을 보고 내 입장과 근거 1개를 쓴다.', base: '근거 2개를 넣어 입장 글을 쓰고 기준표로 점검한 뒤, 상대 근거 하나에 반박을 쓴다.', challenge: '문항마다 기준 하나가 더 붙고, 양쪽이 받아들일 수 있는 절충안까지 쓴다.' },
        activity: {
          title: '예상 시간 표시 찬반 글', tool: 'rubric-writing',
          teacher: '"\'배달 앱의 예상 도착 시간 표시를 없애야 한다.\' 찬성과 반대 모두 안전을 말할 수 있어요." 칠판에 양쪽 근거 예를 하나씩 적고, 쓰기 전에 기준표를 함께 읽는다. 찬성 쪽에서 "표시 때문에 사고가 난다"고만 쓴 학생에게 "표시가 없으면 손님은 재촉 전화를 덜 할까요, 더 할까요?"라고 묻는다. 반대 쪽이 "손님은 알 권리가 있다"고만 쓰면 "알 권리와 운전자의 안전을 함께 지킬 방법은 없을까요?"라고 묻는다. 토론은 이기는 말이 아니라 근거를 견주는 글이라는 점을 짚는다.',
          task: '예상 시간 표시를 없애는 것에 찬반 입장을 정해 근거를 쓰고 기준표로 점검한 뒤 반박과 절충안을 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('\'배달 앱의 예상 도착 시간 표시를 없애야 한다\'에 대한 내 입장과 근거 2개를 쓰세요.', '배달 앱의 예상 도착 시간 표시를 없애야 한다 — 찬성 또는 반대 입장을 정하고 근거 2개를 쓰세요.', ['첫 문장에 입장을 분명히 썼다', '근거를 2개 썼다', '근거가 운전자·이용자 가운데 누구와 관련되는지 밝혔다'], { min: 80, max: 400, sent: [3, 5], must: [['찬성', '반대']], starter: '나는 ~에 찬성(반대)한다. 첫째, ~. 둘째, ~', plus: '근거 하나는 오늘 본 사례나 자료에서 가져왔다', d: 0.4 }),
            RWQ('반대쪽의 가장 강한 근거 하나를 옮기고, 그 근거에 대한 반박을 쓰세요.', '반대쪽(내 입장과 다른 쪽)의 가장 강한 근거를 정확히 옮기고 반박하세요.', ['상대 근거를 왜곡하지 않고 옮겼다', '반박의 근거를 들었다', '상대 근거에서 인정할 부분을 밝혔다'], { min: 60, max: 400, sent: [2, 4], must: [['하지만', '그러나', '그렇지만']], starter: '상대는 ~라고 말한다. 이 말은 ~ 점에서 옳다. 하지만 ~', plus: '감정적인 말 없이 썼다', d: 0.45 }),
            RWQ('양쪽이 받아들일 수 있는 절충안을 하나 제안하는 글을 쓰세요.', '예상 시간 표시를 두고 운전자의 안전과 이용자의 알 권리를 함께 지킬 절충안을 쓰세요.', ['절충안을 구체적으로 썼다', '운전자 안전에 어떻게 도움이 되는지 썼다', '이용자에게도 어떤 점이 좋은지 썼다'], { min: 60, max: 400, sent: [2, 5], must: [['안전']], starter: '나는 ~ 방식을 제안한다. 이렇게 하면 운전자는 ~, 이용자는 ~', plus: '절충안의 한계도 한 가지 밝혔다', d: 0.45, more: { conclude: '배달 안전은 운전자만의 문제가 아니라 앱의 설계, 업체의 평가 방식, 이용자의 기다림이 함께 만드는 구조예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '토론 뒤 내 생각이 바뀌었거나 더 굳어진 점을 한 문장으로 쓰세요.' }] },
        notes: '찬반 어느 쪽도 정답이 아니다. 특정 기업·플랫폼 이름을 쓰지 않는다.',
      }),
      M({
        id: 'activity.consumer-dilemma', type: 'activity', title: '늦는 배달 앞에서 이용자의 선택',
        method: '늦는 배달 앞 이용자 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길(재촉·기다림·취소)에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(도착 뒤 말과 평가)까지 가서 배달 운전자에게 미친 결과를 보고 근거를 고른다.', challenge: '결과가 드러나지 않게 가려 둔 채 고르고, 맞힌 뒤 다른 길과 견주며 구조적 근거를 고른다.' },
        activity: {
          title: '서아의 늦는 배달 갈림길', tool: 'dilemma',
          teacher: '"비 오는 금요일, 음식이 20분 늦어요. 여러분은 손님인 서아예요. 손님의 선택이 배달 운전자에게 어떤 결과를 줄까요?" 선택마다 영향 칸의 \'배달 기사\'를 소리 내어 읽게 한다. 재촉 길을 고른 학생에게 "가게 연락을 받은 배달 기사는 빗길에서 어떻게 달렸을까요?"라고 묻는다. \'취소\'를 고른 학생에게는 "압박이 사라졌나요, 다른 사람에게 옮겨 갔나요?"라고 묻는다. 이용자의 선택도 위험 구조의 일부라는 점을 짚는다.',
          task: '늦는 배달 앞에서 서아의 선택을 따라가며 배달 운전자에게 미치는 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('늦는 배달 앞에서 배달 운전자의 안전을 지키는 길을 따라가고 근거를 고르세요.', LATE, [['wait', 'thanks']], LATE_R, ['press', 'rain'], { d: 0.4 }),
            EXPLOREQ('재촉하는 길도 끝까지 가 보고, 내가 고른 길과 배달 운전자의 결과를 견주세요.', LATE, LATE_R, ['재촉 길의 끝 결과를 확인했다', '두 길에서 배달 운전자가 받은 압박을 견주었다'], { d: 0.35 }),
            DILQ('친구가 단체 주문 배달이 늦자 "별점 테러하자"고 하는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '반 친구들과 함께 시킨 단체 주문이 늦는다. 한 친구가 "다 같이 별점 1점 주자"고 단체 대화방에 쓴다.', who: '서아', motif: 'house', choices: [
              { id: 'join', text: '다 같이 별점 1점을 준다', result: '가게와 배달 기사의 평가가 크게 떨어진다.', impact: [{ who: '배달 기사', text: '다음 배달부터 더 서두르게 된다', tone: -1 }], ending: '여럿이 주는 낮은 평가는 한 사람의 압박보다 훨씬 커진다.' },
              { id: 'say', text: '"비 와서 늦은 걸 수도 있어"라고 대화방에 쓴다', result: '몇몇 친구가 동의하고 몇몇은 투덜댄다.', impact: [{ who: '친구들', text: '생각할 틈이 생긴다', tone: 0 }],
                next: { text: '음식이 도착했고 맛은 괜찮다. 친구가 "그래도 늦었잖아"라고 한다.', choices: [
                  { id: 'fair', text: '늦은 사정과 맛을 나누어 공정하게 평가하자고 한다', result: '친구들이 맛과 친절함을 기준으로 평가한다.', impact: [{ who: '배달 기사', text: '부당한 압박을 받지 않는다', tone: 1 }], ending: '평가 기준을 나누면 배달 안전과 이용자의 의견을 함께 지킨다.' },
                  { id: 'give', text: '친구들 기분을 맞추려 낮은 평가에 동의한다', result: '결국 평가가 낮게 남는다.', impact: [{ who: '배달 기사', text: '다음엔 더 서두르게 된다', tone: -1 }], ending: '분위기에 맞춘 평가가 빗길의 속도를 올린다.' }] } }] },
              [['say', 'fair']], [{ id: 'press', text: '낮은 평가는 배달 운전자에게 속도 압박이 된다' }, { id: 'fair', text: '늦은 사정과 음식의 질을 나누어 평가하는 것이 공정하다' }, { id: 'fun', text: '여럿이 하면 장난이니 괜찮다', why: '여럿이 주는 평가는 더 큰 압박이 돼요.' }], ['press', 'fair'], { d: 0.35, more: { conclude: '이용자의 재촉·평가·기다림은 배달 운전자의 선택을 움직여요. 구조를 바꾸는 작은 자리가 이용자에게도 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '배달이 늦을 때 이용자인 내가 할 수 있는 행동 하나와, 그 행동이 배달 운전자에게 미치는 영향을 쓰세요.' }] },
        notes: '\'결과 뒤 구조적 근거 고르기\'는 모든 단계에서 근거 카드로 고르게 했고, 도전은 결과를 맞힌 뒤에만 보이게 했다. 학생에게 실제 별점을 준 경험을 묻지 않는다.',
      }),

      M({
        id: 'wrap.responsibility-cards', type: 'wrap', title: '누가 무엇을 바꿀 수 있나',
        method: '책임 나누기 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 운전자·업체·이용자 세 쌍을 함께 읽으며 잇는다.', base: '세 주체마다 예방 행동 두 가지씩, 여섯 쌍을 출구 1·2번에서 잇는다.', challenge: '출구 3번에 세 주체 가운데 하나를 골라 예방 행동을 직접 하나 더 쓴다.' },
        wrap: {
          teacher: '"오늘 본 원인을 예방 행동으로 바꿔 봐요. 운전자만 할 수 있는 일, 업체가 할 수 있는 일, 이용자가 할 수 있는 일이 따로 있어요." 출구 1·2번에서 짝을 이은 뒤 3번에서 하나를 직접 쓰게 한다. "업체 일은 우리가 어쩔 수 없다"는 학생에게 "업체가 평가 방식을 바꾸게 만드는 것은 누구의 목소리일까요?"라고 묻는다. 책임을 나누는 것은 탓을 나누는 것이 아니라 예방할 자리를 찾는 일이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '운전자', ko: '신호와 속도를 지키고 출발 전 차를 점검한다' }, { en: '업체', ko: '늦음을 벌하지 않는 평가 방식을 만든다' }, { en: '이용자', ko: '비 오는 날 늦음을 이해하고 재촉하지 않는다' }] }, prompt: '예방 행동마다 그것을 할 수 있는 주체 낱말을 짝지으세요.', target: { match: { '운전자': '운전자', '업체': '업체', '이용자': '이용자' } }, difficulty: 0.2 },
            { type: 'tool', tool: 'wordcards', options: { mode: 'match', slots: ['안전모와 보호장구를 갖춘다', '배달 기사에게 안전 교육과 장비를 준다', '공정하게 평가한다'], cards: ['이용자', '업체', '운전자'] }, prompt: '예방 행동 세 가지를 할 수 있는 주체와 짝지으세요.', target: { match: { '안전모와 보호장구를 갖춘다': '운전자', '배달 기사에게 안전 교육과 장비를 준다': '업체', '공정하게 평가한다': '이용자' } }, difficulty: 0.25 },
            { type: 'short', prompt: '운전자·업체·이용자 가운데 하나를 골라, 오늘 나온 것 말고 할 수 있는 예방 행동 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '책임 나누기',
          items: [
            { type: 'table', prompt: '주체마다 할 수 있는 예방 행동을 정리하세요.', columns: ['주체', '예방 행동 1', '예방 행동 2'], cells: [['운전자', '', ''], ['업체', '', ''], ['이용자', '', '']] },
            { type: 'short', prompt: '이용자인 내가 다음 배달 주문에서 실천할 한 가지를 쓰세요.' },
          ],
        },
        notes: '출구 질문은 단계별 판이 없어 여섯 쌍을 두 문항(세 쌍씩)으로 나누었다. 쉬움 단계는 교사가 함께 읽으며 진행한다.',
      }),
      M({
        id: 'wrap.reflection', type: 'wrap', title: '이용자인 나의 실천',
        method: '이용자로서 실천 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '주문할 때·기다릴 때·받을 때 세 가지에 실천 카드를 함께 붙인다.', base: '가지마다 실천 카드 1장씩 스스로 붙이고 함정 카드는 남긴다.', challenge: '가장 먼저 할 실천 하나를 출구 3번에 쓰고 그 까닭을 밝힌다.' },
        wrap: {
          teacher: '"다음에 배달을 시킬 때, 주문할 때·기다릴 때·받을 때 나는 무엇을 할 수 있을까요?" 출구 1번에서 실천 카드를 가지에 붙이고, 함정 카드는 왜 남겼는지 한 명에게 묻는다. "나 혼자 바꿔 봐야 소용없다"는 학생에게 "오늘 대화방 장면에서 한 사람의 말이 무엇을 바꿨나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '이용자인 나', slots: ['주문할 때', '기다릴 때', '받을 때'], cards: ['비 오는 날은 시간을 넉넉히 잡는다', '늦어도 재촉 전화를 하지 않는다', '고맙다는 말과 공정한 평가', '빨리 오면 별점 5점이라고 쓴다'] }, prompt: '실천 카드를 알맞은 때에 붙이고, 위험을 키우는 카드는 남기세요.', target: { sort: { '주문할 때': ['비 오는 날은 시간을 넉넉히 잡는다'], '기다릴 때': ['늦어도 재촉 전화를 하지 않는다'], '받을 때': ['고맙다는 말과 공정한 평가'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '이륜차 사고의 원인에 대한 설명으로 가장 알맞은 것을 고르세요.', options: ['운전자 한 사람의 실수로만 일어난다', '운전자 행동·차·환경과 일의 구조가 함께 작용한다', '이용자는 사고와 아무 상관이 없다'], answer: 1, difficulty: 0.15, explain: '운전자 책임과 함께 차, 날씨, 평가·속도 경쟁 같은 구조가 위험을 만들어요.' },
            { type: 'short', prompt: '가장 먼저 해 볼 실천 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '이용자로서 나의 실천',
          items: [
            { type: 'check', prompt: '다음 배달 주문에서 해 볼 것에 표시하세요.', options: ['날씨 나쁜 날 시간 넉넉히 잡기', '재촉 연락하지 않기', '공정하게 평가하기', '고맙다고 말하기'] },
            { type: 'short', prompt: '\'빨리 오면 별점 5점\'이라는 요청 메모가 왜 위험한지 한 문장으로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 이륜차 출발 전 점검과 보호장구 (10학년)
  // ======================================================================================================
  {
    const M = MOD('scooter-check', [10]);
    const PARTS = [{ name: '전조등', icon: 'dot', at: [0, 1] }, { name: '앞 타이어', icon: 'dot', at: [0, 3] }, { name: '브레이크 레버', icon: 'dot', at: [1, 0] }, { name: '거울', icon: 'dot', at: [2, 0] }, { name: '연료(배터리)', icon: 'dot', at: [3, 2] }, { name: '브레이크등', icon: 'dot', at: [5, 1] }, { name: '뒤 타이어', icon: 'dot', at: [5, 3] }];
    const SKIP = { text: '아침 8시 10분, 늦잠을 잔 지호는 스쿠터 앞에 섰다. 매일 하던 등화 점검을 하면 2분이 더 걸린다.', who: '지호', motif: 'sun', choices: [
      { id: 'skip', text: '낮이니 등은 괜찮겠지 하고 바로 출발한다', result: '제시간에 학원 앞에 도착한다.', impact: [{ who: '지호', text: '오늘 아침은 아무 일 없다', tone: 0 }],
        next: { text: '밤 9시, 학원을 마치고 나왔는데 비가 내리고 있다. 시동을 걸어도 전조등이 켜지지 않는다.', choices: [
          { id: 'ride', text: '집이 가까우니 그대로 출발한다', result: '어두운 골목에서 지호를 못 본 차가 바짝 다가온다.', impact: [{ who: '지호', text: '다른 사람 눈에 보이지 않는 채 달린다', tone: -1 }], ending: '아침에 건너뛴 2분이 밤길에서 나를 보이지 않게 만든다.' },
          { id: 'walk', text: '스쿠터를 두고 버스를 타고 보호자에게 알린다', result: '집에는 늦게 도착하지만 안전하다.', impact: [{ who: '지호', text: '다음 날 고칠 때까지 탈 수 없다', tone: 0 }], ending: '고장을 늦게 알았지만 타지 않는 판단으로 위험을 막았다.' }] } },
      { id: 'check', text: '2분 늦더라도 등화를 점검한다', result: '브레이크등 하나가 깜빡이다 꺼지는 것을 발견한다.', impact: [{ who: '지호', text: '조금 늦는다', tone: 0 }],
        next: { text: '브레이크등이 불안하다. 학원 시작까지 10분 남았다.', choices: [
          { id: 'fix', text: '오늘은 버스로 가고 저녁에 정비소에 맡긴다', result: '학원에 조금 늦지만 고장 난 채 달리지 않는다.', impact: [{ who: '지호', text: '뒤차가 내 멈춤을 알아볼 수 있게 된다', tone: 1 }], ending: '점검은 고장을 찾는 데서 끝나지 않고 타지 않는 판단까지 이어져야 한다.' },
          { id: 'go', text: '낮이니 괜찮다며 그대로 탄다', result: '신호에서 멈출 때 뒤차가 늦게 알아챈다.', impact: [{ who: '지호', text: '뒤에서 들이받힐 위험이 커진다', tone: -1 }], ending: '찾아낸 고장을 무시하면 점검은 의미가 없어진다.' }] } }] };
    const SKIP_R = [{ id: 'see', text: '등화는 내가 보는 것만이 아니라 남이 나를 보게 한다' }, { id: 'stop', text: '이상을 찾으면 고칠 때까지 타지 않는다' }, { id: 'day', text: '낮에는 등화가 필요 없다', why: '비·터널·흐린 날에도 등화가 나를 보이게 해요.' }, { id: 'new', text: '산 지 얼마 안 된 차는 점검이 필요 없다', why: '새 차도 전구·타이어는 언제든 문제가 생길 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.part-map', type: 'intro', title: '스쿠터 어디를 점검할까',
        method: '이륜차 점검 부위 지도', tool: 'map', minutes: 6,
        levels: { easy: '칸 지도에 부위 이름이 보이고, 교사가 타이어·브레이크·등화·거울 칸을 함께 짚는다.', base: '교사가 이름을 가리고 학생이 타이어·브레이크·등화·거울 네 곳을 말로 짚는다.', challenge: '짚은 부위마다 점검 방법(눌러 보기·당겨 보기·켜 보기·비춰 보기)을 하나씩 고른다.' },
        intro: {
          teacher: '"스쿠터를 칸으로 나눈 그림이에요. 출발하기 전에 손으로 만지거나 켜 봐야 하는 곳은 어디일까요?" 시연으로 앞 타이어 칸에 핀을 꽂고, 이어서 학생들이 브레이크 레버·전조등·거울 칸을 말로 짚게 한다. "새 스쿠터는 점검이 필요 없다"는 말이 나오면 "타이어 공기와 전구는 날마다 똑같을까요?"라고 되묻는다. 오늘은 점검할 자리와 방법을 습관으로 만드는 시간이라고 밝힌다.',
          student: '스쿠터를 칸으로 나눈 그림에서 출발 전에 점검할 타이어·브레이크·등화·거울 자리를 찾고, 어떻게 확인할지 생각해 보세요.',
          demo: { tool: 'map', options: { title: '스쿠터 점검 부위(칸 그림)', grid: [6, 4], places: PARTS, readout: true }, sequence: [{ pin: [0, 3] }] },
          art: { draw: 'a paper scooter drawn on a grid of paper squares, small paper pins on the tires, the brake lever, the headlight and the mirrors, a paper checklist beside it', banner: '출발 전에 어디를 볼까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '지도 교구는 한 번에 핀 하나만 꽂으므로 시연은 한 곳만 꽂고 나머지는 교사가 말로 짚게 한다. 실물 스쿠터 사진이나 학교 오토바이 안전 교육 자료가 있으면 함께 보인다.',
      }),
      M({
        id: 'intro.gear-body', type: 'intro', title: '보호장구는 몸의 어디를 지킬까',
        method: '보호장구가 지키는 몸 부위', tool: 'body', minutes: 7,
        levels: { easy: '장갑·무릎 보호대가 지키는 두 곳(손목·무릎)을 함께 고른다.', base: '장갑·무릎과 팔꿈치 보호대·긴 옷이 지키는 네 곳(손목·무릎·팔꿈치·피부)을 고른다.', challenge: '장구마다 그 부위를 지키는 이유(넘어질 때 먼저 닿는다·쓸린다)를 말로 고른다.' },
        intro: {
          teacher: '"이륜차가 넘어지면 몸의 어디가 먼저 땅에 닿을까요?" 종이 몸에서 손목·무릎·팔꿈치·피부가 골라지는 시연을 보여 주고, 안전모가 지키는 머리는 종이 몸에 칸이 없으니 학생이 자기 머리를 짚어 보게 한다. "안전모만 쓰면 나머지는 괜찮다"는 말이 나오면 "넘어질 때 손을 짚는 건 거의 저절로 일어나요. 그때 손목과 손바닥은 무엇이 지켜 줄까요?"라고 되묻는다. 장구마다 지키는 자리가 다르다는 점을 짚는다.',
          student: '종이 몸에서 장갑·무릎과 팔꿈치 보호대·긴 옷이 지키는 부위를 고르고, 안전모가 지키는 머리는 내 손으로 짚어 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '팔꿈치', '손목', '피부', '무릎', '발목'], names: true }, sequence: [{ parts: ['팔꿈치', '손목', '피부', '무릎'] }] },
          art: { draw: 'a paper rider figure wearing a helmet, gloves, knee and elbow pads and a long-sleeved bright jacket, with soft paper arrows pointing to each body part', banner: '장구마다 지키는 곳이 달라요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '종이 몸 교구에는 머리·손바닥 칸이 없어 안전모는 학생이 자기 머리를 짚게 하고, 장갑은 \'손목\' 칸으로 대신했다.',
      }),

      M({
        id: 'activity.pre-ride', type: 'activity', title: '출발 전 점검 순서와 확인',
        method: '출발 전 점검 순서와 기록', tool: 'timer', minutes: 19,
        levels: { easy: '점검 순서 카드 4장(타이어·브레이크·등화·거울)을 놓고 안전 점검 칸을 확인한다.', base: '점검 순서 카드 6장을 놓고 안전 점검 칸을 모두 확인한 뒤, 밤길 점검과 이상 발견 순서도 놓는다.', challenge: '이상을 발견했을 때 할 일 카드에 \'고친 뒤 다시 점검\'까지 더해 차례를 완성한다.' },
        activity: {
          title: '출발 전 점검판', tool: 'timer',
          teacher: '"점검은 순서가 있어야 빠뜨리지 않아요. 바퀴에서 시작해 손이 닿는 곳, 켜 보는 곳, 마지막에 나를 갖추는 차례로 가 봐요." 순서 카드를 놓은 뒤 안전 점검 칸을 하나씩 소리 내어 읽고 표시하게 한다. \'안전모 쓰기\'를 맨 앞에 두는 학생에게 "안전모를 쓰고 쪼그려 타이어를 보는 게 편할까요?"라고 묻고, 순서는 빠짐없이 하기 위한 약속이라는 점을 짚는다. 이상을 찾았을 때 \'일단 타고 가서 고친다\'는 학생에게는 "고장 난 채 가는 길에서 무슨 일이 생길 수 있을까요?"라고 묻는다.',
          task: '출발 전 점검 순서 카드를 차례로 놓고 안전 점검 칸을 하나씩 확인해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '출발 전 점검 순서 카드를 차례로 놓고 안전 점검을 모두 확인하세요.', toolOptions: { title: '출발 전 점검', cards: ['거울 각도 맞추기', '타이어 눌러 보고 홈 보기', '안전모 쓰고 턱끈 조이기', '브레이크 레버 당겨 보기', '연료(배터리) 남은 양 보기', '전조등·방향지시등·브레이크등 켜 보기'], safety: ['타이어에 금이나 박힌 것이 없다', '브레이크 레버가 헐겁지 않다', '등이 모두 켜진다'] }, target: { order: ['타이어 눌러 보고 홈 보기', '브레이크 레버 당겨 보기', '전조등·방향지시등·브레이크등 켜 보기', '거울 각도 맞추기', '연료(배터리) 남은 양 보기', '안전모 쓰고 턱끈 조이기'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '출발 전 점검 카드 4장을 차례로 놓고 안전 점검을 확인하세요(카드 4장).', toolOptions: { cards: ['거울 각도 맞추기', '타이어 눌러 보고 홈 보기', '브레이크 레버 당겨 보기', '전조등·방향지시등·브레이크등 켜 보기'] }, target: { order: ['타이어 눌러 보고 홈 보기', '브레이크 레버 당겨 보기', '전조등·방향지시등·브레이크등 켜 보기', '거울 각도 맞추기'], safety: true } } } },
            { prompt: '밤에 학원을 마치고 타기 전, 밤길에 더 중요한 점검을 모두 확인하세요.', toolOptions: { title: '밤길 출발 전', safety: ['전조등이 켜지고 앞이 비친다', '브레이크등이 레버를 당길 때 켜진다', '방향지시등이 양쪽 다 깜빡인다', '밝은 색 겉옷이나 반사띠를 갖췄다'] }, target: { safety: true }, difficulty: 0.2 },
            { prompt: '점검 중 브레이크 레버가 헐거운 것을 발견했어요. 할 일 카드를 차례로 놓으세요.', toolOptions: { title: '이상을 발견하면', cards: ['보호자나 정비소에 알린다', '다른 이동 수단을 고른다', '그 자리에서 타지 않기로 한다'] }, target: { order: ['그 자리에서 타지 않기로 한다', '보호자나 정비소에 알린다', '다른 이동 수단을 고른다'] }, difficulty: 0.3,
              levels: { challenge: { prompt: '이상을 발견했을 때 할 일에 \'고친 뒤 다시 점검\'까지 넣어 차례를 완성하세요(카드 4장).', toolOptions: { cards: ['보호자나 정비소에 알린다', '고친 뒤 다시 점검하고 탄다', '다른 이동 수단을 고른다', '그 자리에서 타지 않기로 한다'] }, target: { order: ['그 자리에서 타지 않기로 한다', '보호자나 정비소에 알린다', '다른 이동 수단을 고른다', '고친 뒤 다시 점검하고 탄다'] } } },
              conclude: '점검은 바퀴 → 손이 닿는 곳 → 켜 보는 곳 → 나를 갖추는 차례로 빠짐없이 하고, 이상을 찾으면 고칠 때까지 타지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '출발 전 점검을 기록하는 표를 채우세요.', columns: ['점검 부위', '확인 방법', '이상 있을 때 할 일'], cells: [['타이어', '', ''], ['브레이크', '', ''], ['등화', '', '']] }] },
        notes: '점검 차례(바퀴부터)는 빠짐없이 하기 위한 수업 약속이다. 실제 점검 항목은 차종 사용 설명서와 도로교통공단 이륜차 안전 안내로 확인한다. \'기록\'은 교구 기록판 대신 활동지 표로 한다.',
      }),
      M({
        id: 'activity.helmet-order', type: 'activity', title: '안전모를 바르게 쓰는 차례',
        method: '안전모 착용 차례', tool: 'timeline', minutes: 18,
        levels: { easy: '안전모 쓰기 카드 3장(고르기·쓰기·턱끈)을 차례로 놓는다.', base: '카드 4장(고르기·쓰기·턱끈·흔들어 확인)을 차례로 놓고, 잘못 쓴 모습을 고르고, 빌린 안전모 차례도 놓는다.', challenge: '빌린 안전모 차례에 함정 카드가 섞이고, 잘못된 착용 예를 바른 착용과 견주어 활동지에 쓴다.' },
        activity: {
          title: '안전모 착용 차례', tool: 'timeline',
          teacher: '"안전모는 쓰는 것보다 바르게 쓰는 것이 어려워요. 머리에 맞는 크기를 고르고, 이마까지 덮어 쓰고, 턱끈을 조이고, 고개를 흔들어 확인해요." 카드를 놓은 뒤 학생이 실제 안전모나 모자로 흉내 내 보게 한다. "턱끈은 답답하니 느슨하게 둔다"는 학생에게 "넘어질 때 턱끈이 풀린 안전모는 어디에 있을까요?"라고 묻는다. 뒤로 젖혀 쓴 모습과 바른 모습을 나란히 보여 주며 이마를 지키는 것이 안전모의 일이라는 점을 짚는다.',
          task: '안전모를 바르게 쓰는 차례를 놓고, 잘못 쓴 모습을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('안전모를 바르게 쓰는 차례로 카드를 놓으세요.', ['머리에 맞는 크기 고르기', '이마가 덮이게 똑바로 쓰기', '턱끈을 턱 아래에 조이기', '고개를 흔들어 움직이지 않는지 확인'], { k: 3, d: 0.25, opt: { axis: ['먼저', '나중'] } }),
            PICKQ('안전모를 잘못 쓴 모습을 모두 고르세요.', ['뒤로 젖혀 이마가 드러난 안전모', '턱끈을 풀어 늘어뜨린 안전모', '머리보다 커서 흔들리는 안전모'], ['이마를 덮고 턱끈을 조인 안전모'], { d: 0.3, opt: { mode: 'pick', basket: '잘못 쓴 모습' } }),
            ORDERQ('친구에게 안전모를 빌려 쓸 때의 차례로 놓고, 맞지 않는 카드는 남기세요.', ['깨지거나 금 간 곳이 있는지 보기', '내 머리에 맞게 조절하기', '턱끈 조이기', '흔들어 확인하기'], { k: 3, traps: ['크면 수건을 넣어 쓰기'], d: 0.35, opt: { axis: ['먼저', '나중'] }, more: { conclude: '안전모는 맞는 크기로 이마를 덮어 쓰고 턱끈을 조여야 지켜 줘요. 빌린 안전모는 먼저 깨진 곳이 없는지 봐요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '잘못된 착용과 바른 착용을 견주어 쓰세요.', columns: ['잘못된 착용', '생길 수 있는 일', '바른 착용'], cells: [['뒤로 젖혀 씀', '', ''], ['턱끈을 풂', '', '']] }] },
        notes: '턱끈을 얼마나 조일지(손가락 몇 개)는 수치로 정하지 않고 \'흔들어도 움직이지 않게\'로 다룬다. 안전모 고르기 기준(인증 표시 등)은 한국소비자원·도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'activity.skip-dilemma', type: 'activity', title: '바쁜 아침, 점검을 건너뛸까',
        method: '바쁜 아침 점검 생략 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길(건너뛰기·점검하기)에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(그날 저녁 귀갓길·고장 발견 뒤)까지 따라가 결과를 보고 근거 2개를 고른다.', challenge: '결과의 도움·피해 표시를 맞힌 뒤에만 보이게 해 두고 근거 2개를 골라 다른 길과 견준다.' },
        activity: {
          title: '지호의 바쁜 아침 갈림길', tool: 'dilemma',
          teacher: '"아침 8시 10분, 지각할 것 같아요. 등화 점검 2분을 건너뛸까요?" 첫 갈림길에서 반 전체의 선택을 손으로 확인한 뒤 따라가게 한다. 건너뛴 길을 고른 학생에게 "아침엔 아무 일이 없었죠. 그런데 그 점검은 언제를 위한 것이었나요?"라고 묻는다. 점검한 길에서 고장을 찾고도 그대로 타는 학생에게는 "찾은 고장을 무시하면 점검을 한 것과 안 한 것이 무엇이 다를까요?"라고 묻는다. 점검은 찾는 것과 타지 않는 판단까지 한 묶음이라는 점을 짚는다.',
          task: '바쁜 아침 점검을 건너뛸지 고르고, 그날 저녁 귀갓길까지 결과를 따라가 근거 2개를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('바쁜 아침에도 안전을 지키는 길을 따라가고 근거 2개를 고르세요.', SKIP, [['check', 'fix']], SKIP_R, ['see', 'stop'], { d: 0.4 }),
            EXPLOREQ('점검을 건너뛴 길도 끝까지 가 보고, 두 길의 저녁 결과를 견주세요.', SKIP, SKIP_R, ['건너뛴 길의 밤 결과를 확인했다', '두 길에서 지호가 잃고 얻은 것을 견주었다'], { d: 0.35 }),
            DILQ('친구가 "타이어가 좀 물렁한데 가까우니 그냥 가자"고 하는 상황에서 알맞은 길을 고르고 근거 2개를 고르세요.', { text: '주말에 친구와 각자 스쿠터로 도서관에 가기로 했다. 친구가 "내 뒷타이어가 좀 물렁한데 가까우니 그냥 가자"고 한다.', who: '지호', motif: 'leaf', choices: [
              { id: 'go', text: '가까우니 같이 출발한다', result: '내리막 모퉁이에서 친구 스쿠터가 휘청인다.', impact: [{ who: '친구', text: '넘어질 뻔한다', tone: -1 }], ending: '가까운 거리라도 바람 빠진 타이어는 모퉁이에서 버티지 못한다.' },
              { id: 'air', text: '가는 길 정비소에서 공기부터 넣자고 한다', result: '친구가 "귀찮은데"라며 망설인다.', impact: [{ who: '친구', text: '조금 늦어진다', tone: 0 }],
                next: { text: '정비소에서 보니 타이어에 못이 박혀 있다.', choices: [
                  { id: 'fixit', text: '고칠 때까지 기다리거나 버스로 간다', result: '도서관에 늦게 도착하지만 둘 다 무사하다.', impact: [{ who: '친구', text: '큰 사고를 피한다', tone: 1 }], ending: '이상한 느낌을 그냥 넘기지 않은 덕분에 숨은 고장을 찾았다.' },
                  { id: 'aironly', text: '공기만 넣고 그대로 간다', result: '돌아오는 길에 다시 바람이 빠진다.', impact: [{ who: '친구', text: '같은 위험이 되풀이된다', tone: -1 }], ending: '원인을 고치지 않은 점검은 위험을 잠시 미룰 뿐이다.' }] } }] },
              [['air', 'fixit']], [{ id: 'tire', text: '바람 빠진 타이어는 모퉁이와 제동에서 미끄러지기 쉽다' }, { id: 'cause', text: '이상을 찾으면 원인까지 고친 뒤 탄다' }, { id: 'near', text: '가까운 거리는 점검 없이 가도 된다', why: '사고는 거리와 상관없이 일어나요.' }], ['tire', 'cause'], { d: 0.35, more: { conclude: '점검은 습관이어야 하고, 이상을 찾으면 원인을 고칠 때까지 타지 않는 판단까지 이어져야 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '바쁜 날에도 점검을 건너뛰지 않으려면 내가 미리 바꿀 수 있는 습관 하나를 쓰세요.' }] },
        notes: '갈림길 나무가 두 단계라 도전은 결과 표시를 맞힌 뒤에만 보이게 하고 근거 2개를 고르는 것으로 했다.',
      }),
      M({
        id: 'activity.checklist-make', type: 'activity', title: '나만의 이륜차 점검표 만들기',
        method: '나만의 점검표 설계', tool: 'kitchen', minutes: 19,
        levels: { easy: '점검 후보 4개 가운데 넣을 항목을 고르고, 항목과 확인 방법을 짝짓는다.', base: '점검 후보 6개 가운데 넣을 항목을 고르고, 항목과 확인 방법을 짝지은 뒤 매일·매주로 나눈다.', challenge: '매일·매주 나누기에 헷갈리는 항목이 더해지고, 활동지에 내 점검표를 주기별로 완성한다.' },
        activity: {
          title: '내 점검표 설계', tool: 'kitchen',
          teacher: '"남이 만든 점검표는 잘 안 지켜져요. 오늘은 내가 실제로 할 수 있는 점검표를 만들어요." 먼저 넣을 항목을 고르고, 항목마다 확인 방법을 짝지은 뒤, 매일 할 것과 매주 할 것을 나누게 한다. \'멋진 스티커 붙이기\'를 점검표에 넣는 학생에게 "이 칸을 지키면 사고가 줄어들까요?"라고 묻는다. 모든 것을 매일 하겠다는 학생에게는 "지킬 수 없는 점검표는 하루 만에 버려져요. 매일 꼭 할 것은 무엇일까요?"라고 묻는다.',
          task: '점검 항목을 고르고, 확인 방법과 짝지은 뒤 매일·매주로 나누어 나만의 점검표를 만들어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHECKQ('출발 전 점검표에 넣을 항목만 고르세요.', '나의 이륜차 점검표', [['tire', '타이어 공기와 홈', true], ['brake', '앞뒤 브레이크', true], ['light', '전조등·브레이크등·방향지시등', true], ['sticker', '차체 스티커 상태', false], ['mirror', '거울 각도', true], ['music', '스피커 음량', false]], { k: 4, d: 0.25 }),
            { prompt: '점검 항목마다 알맞은 확인 방법을 짝지으세요.', toolOptions: { mode: 'match', groups: false, autoMotif: false, slots: ['타이어', '브레이크', '등화', '거울'], cards: ['앉아서 뒤가 보이게 맞춘다', '켜 보고 깜빡여 본다', '레버를 당겨 단단한지 본다', '눌러 보고 홈과 박힌 것을 본다'] }, target: { match: { '타이어': '눌러 보고 홈과 박힌 것을 본다', '브레이크': '레버를 당겨 단단한지 본다', '등화': '켜 보고 깜빡여 본다', '거울': '앉아서 뒤가 보이게 맞춘다' } }, difficulty: 0.3,
              levels: { easy: { prompt: '점검 항목 3개와 확인 방법을 짝지으세요(3쌍).', toolOptions: { slots: ['타이어', '브레이크', '등화'], cards: ['켜 보고 깜빡여 본다', '레버를 당겨 단단한지 본다', '눌러 보고 홈과 박힌 것을 본다'] }, target: { match: { '타이어': '눌러 보고 홈과 박힌 것을 본다', '브레이크': '레버를 당겨 단단한지 본다', '등화': '켜 보고 깜빡여 본다' } } } } },
            { prompt: '점검 항목을 매일 타기 전에 할 것과 매주 한 번 할 것으로 나누세요(우리 반 약속).', toolOptions: { mode: 'sort', groups: false, autoMotif: false, slots: ['매일 타기 전', '매주 한 번'], cards: ['브레이크 당겨 보기', '등 켜 보기', '체인·구동부 소리 듣기', '타이어 홈 깊이 살피기'] }, target: { sort: { '매일 타기 전': ['브레이크 당겨 보기', '등 켜 보기'], '매주 한 번': ['체인·구동부 소리 듣기', '타이어 홈 깊이 살피기'] } }, difficulty: 0.35,
              levels: { challenge: { prompt: '헷갈리는 항목까지 매일·매주로 나누세요(우리 반 약속, 카드 6장).', toolOptions: { cards: ['브레이크 당겨 보기', '등 켜 보기', '안전모 턱끈 확인', '체인·구동부 소리 듣기', '타이어 홈 깊이 살피기', '거울 나사 조임 보기'] }, target: { sort: { '매일 타기 전': ['브레이크 당겨 보기', '등 켜 보기', '안전모 턱끈 확인'], '매주 한 번': ['체인·구동부 소리 듣기', '타이어 홈 깊이 살피기', '거울 나사 조임 보기'] } } } },
              conclude: '지킬 수 있는 점검표는 꼭 필요한 항목, 구체적인 확인 방법, 알맞은 주기를 담아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나만의 이륜차 점검표를 완성하세요.', columns: ['점검 항목', '확인 방법', '주기(매일·매주)'], cells: [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']] }] },
        notes: '매일·매주 나누기는 정해진 법 기준이 아니라 이 수업의 \'우리 반 약속\'이다. 정기 점검 주기는 차종 설명서와 정비소 안내를 따른다고 말해 준다.',
      }),

      M({
        id: 'wrap.gear-words', type: 'wrap', title: '보호장구 기준 문장 완성',
        method: '보호장구 기준 낱말', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 1개짜리 문장(출구 1번)을 교사와 함께 채운다.', base: '빈칸 2개씩 든 문장 두 개(출구 1·2번)를 스스로 채운다.', challenge: '활동지에 낱말 카드 없이 보호장구 기준 문장을 스스로 짓는다.' },
        wrap: {
          teacher: '"오늘 배운 보호장구 기준을 문장으로 남겨 봐요. 맞는 크기, 턱끈, 밝은 색, 긴 소매 — 이 낱말이 어디에 들어갈까요?" 출구 1·2번에서 빈칸을 채운 뒤 활동지에서 낱말 없이 스스로 문장을 짓게 한다. \'큰 크기\'를 고르는 학생에게 "큰 안전모는 넘어질 때 어떻게 움직일까요?"라고 묻는다. 출구 3번에서 \'안전모만 쓰면 된다\'를 고른 학생에게 오늘 종이 몸에서 고른 부위를 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'g1', label: '안전모는 머리에 ___ 것으로 고른다.' }, { id: 'g2', label: '쓴 뒤에는 ___을 턱 아래에서 조인다.' }], cards: ['맞는 크기', '턱끈', '큰 크기', '머리끈'] }, prompt: '안전모 기준 문장의 빈칸을 채우세요.', target: { fill: { g1: '맞는 크기', g2: '턱끈' } }, difficulty: 0.15 },
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'c1', label: '남이 나를 잘 보도록 ___ 옷을 입는다.' }, { id: 'c2', label: '넘어질 때 쓸리지 않게 ___ 옷을 입는다.' }], cards: ['밝은 색', '긴 소매', '어두운 색', '반소매'] }, prompt: '옷차림 기준 문장의 빈칸을 채우세요.', target: { fill: { c1: '밝은 색', c2: '긴 소매' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '보호장구에 대한 설명으로 맞는 것을 고르세요.', options: ['안전모만 쓰면 다른 장구는 필요 없다', '장갑·보호대·긴 옷은 넘어질 때 먼저 닿는 곳을 지킨다', '새 차를 타면 장구를 줄여도 된다'], answer: 1, difficulty: 0.15, explain: '넘어질 때 손목·팔꿈치·무릎·피부가 먼저 닿아서 장구마다 지키는 곳이 달라요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '보호장구 기준',
          items: [
            { type: 'short', prompt: '낱말 카드 없이 보호장구 기준 문장을 하나 스스로 지어 쓰세요.' },
            { type: 'check', prompt: '이륜차를 탈 때 갖출 것에 표시하세요.', options: ['맞는 크기의 안전모', '조인 턱끈', '밝은 색 옷', '긴 소매와 장갑', '무릎·팔꿈치 보호대'] },
          ],
        },
        notes: '출구 질문은 단계별 판이 없어 빈칸 1개·2개의 차이는 교사 진행(쉬움은 1번만 함께)으로 둔다.',
      }),
      M({
        id: 'wrap.check-reflect', type: 'wrap', title: '점검을 습관으로 만드는 글',
        method: '점검 습관 성찰 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 ~할 때 ~을 점검한다. 왜냐하면 ~")을 보고 쓴다.', base: '세 문장을 쓰고 기준표 세 항목을 스스로 점검한다.', challenge: '활동지에 언제·어디서 점검할지 정한 실행 계획을 덧붙인다.' },
        wrap: {
          teacher: '"점검을 아는 것과 날마다 하는 것은 달라요. 어떻게 하면 습관이 될까요?" 쓰기 전에 기준표를 함께 읽는다. "앞으로 꼭 점검하겠다"처럼 막연하게 쓴 학생에게 "언제, 어디서, 무엇부터 할지 정하면 내일 아침에도 기억날까요?"라고 묻는다. 지금 이륜차를 타지 않는 학생은 자전거나 가족의 탈것으로 써도 된다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '출발 전 점검을 습관으로 만드는 방법을 세 문장으로 쓰세요(자전거로 써도 돼요).', minChars: 50, maxChars: 400, starter: '나는 ~할 때 ~을 점검한다. 왜냐하면 ~', sample: '나는 매일 아침 신발을 신은 뒤 바로 타이어와 브레이크를 점검한다. 신발 신기와 묶어 두면 잊지 않기 때문이다. 이상이 있으면 그날은 타지 않고 버스를 탄다.' }, prompt: '점검 습관 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['언제 점검할지 구체적으로 썼다', '무엇을 점검할지 썼다', '이상이 있을 때 할 일을 썼다'], mustInclude: [['점검', '확인']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '점검이 습관이 되기 쉬운 계획을 고르세요.', options: ['생각날 때마다 점검한다', '매일 신발을 신은 뒤 바로 타이어와 브레이크를 본다', '사고가 나면 그때 점검한다'], answer: 1, difficulty: 0.15, explain: '이미 하는 일과 묶어 때를 정해 두면 점검을 잊지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '점검 습관 계획',
          items: [
            { type: 'short', prompt: '점검을 습관으로 만드는 방법을 세 문장으로 쓰세요.' },
            { type: 'table', prompt: '점검 실행 계획을 세우세요.', columns: ['언제', '어디서', '무엇부터'], cells: [['', '', '']] },
          ],
          easy: { note: '"나는 ~할 때 ~을 점검한다. 왜냐하면 ~"', items: [{ type: 'short', prompt: '내가 점검할 때와 점검할 것 하나를 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 동승 권유와 또래 압력 판단 (10학년)
  // ======================================================================================================
  {
    const M = MOD('ride-offer', [10]);
    const BACK = { text: '밤 10시, 노래방에서 나오자 면허 없는 친구 민재가 형 스쿠터를 끌고 와 "뒤에 타, 집까지 5분이면 가"라고 한다. 다른 친구들이 "타 타!"라고 부추긴다.', who: '유나', motif: 'moon', choices: [
      { id: 'ride', text: '분위기를 깨기 싫어 뒷자리에 탄다', result: '안전모 없이 뒷자리에 앉아 출발한다.', impact: [{ who: '유나', text: '몸을 지킬 장구 없이 무면허 운전 차에 탄다', tone: -1 }],
        next: { text: '큰길로 나가자 민재가 "꽉 잡아"라며 속도를 올린다. 앞 교차로에 경찰차가 서 있다.', choices: [
          { id: 'speed', text: '민재가 단속을 피해 골목으로 꺾는다', result: '좁은 골목에서 바퀴가 미끄러져 둘이 함께 넘어진다.', impact: [{ who: '유나', text: '무릎과 팔이 크게 쓸린다', tone: -1 }],
            next: { text: '병원에서 보호자들이 모였다. 민재는 무면허 운전으로 조사를 받게 된다.', choices: [
              { id: 'blame', text: '"민재가 타라고 해서 탔다"고만 말한다', result: '민재와 사이가 멀어지고, 나도 탄 선택을 돌아보지 못한다.', impact: [{ who: '두 사람', text: '관계도 몸도 다친다', tone: -1 }], ending: '동승자도 위험을 함께 졌고, 탓하기만으로는 다음 선택이 바뀌지 않는다.' },
              { id: 'own', text: '내가 타기로 한 것도 잘못이었다고 말하고 다시는 안 타겠다고 한다', result: '보호자들이 다음부터 연락할 방법을 함께 정해 준다.', impact: [{ who: '유나', text: '다친 몸으로 다음 선택을 배운다', tone: 0 }], ending: '동승자도 책임을 함께 지며, 다음엔 타기 전에 멈출 수 있다.' }] } },
          { id: 'stop', text: '"세워 줘, 나 내릴게"라고 말한다', result: '민재가 길가에 세우고 유나가 내린다.', impact: [{ who: '유나', text: '늦었지만 위험에서 빠져나온다', tone: 1 }], ending: '탄 뒤에도 멈출 수 있지만, 타기 전에 거절하는 것이 가장 안전하다.' }] } },
      { id: 'refuse', text: '"나는 안 탈래. 같이 버스 타자"라고 말한다', result: '친구들이 "분위기 깨네"라며 웃는다.', impact: [{ who: '유나', text: '잠깐 어색해진다', tone: 0 }],
        next: { text: '민재가 "그럼 나 혼자 간다"며 시동을 건다.', choices: [
          { id: 'let', text: '어쩔 수 없다며 그냥 둔다', result: '민재가 혼자 무면허로 출발한다.', impact: [{ who: '민재', text: '위험한 운전을 그대로 한다', tone: -1 }], ending: '나는 지켰지만 친구의 위험은 그대로 남는다.' },
          { id: 'alt', text: '"형한테 연락해서 데리러 오라고 하자"며 대안을 낸다', result: '민재가 망설이다 형에게 전화한다.', impact: [{ who: '민재', text: '운전을 멈춘다', tone: 1 }],
            next: { text: '버스 정류장에서 기다리는데 민재가 "나 때문에 미안"이라고 한다.', choices: [
              { id: 'kind', text: '"괜찮아, 다음엔 처음부터 버스 타자"라고 답한다', result: '둘 다 집에 무사히 도착하고 다음 날도 웃으며 만난다.', impact: [{ who: '두 사람', text: '안전과 관계를 함께 지킨다', tone: 1 }], ending: '거절에 대안을 담으면 관계를 끊지 않고 친구까지 지킬 수 있다.' },
              { id: 'mock', text: '"너 때문에 늦었잖아"라고 놀린다', result: '민재가 기분이 상해 대화방에서 나간다.', impact: [{ who: '민재', text: '다음엔 도움을 청하지 않으려 한다', tone: -1 }], ending: '옳은 선택도 말투에 따라 관계를 다치게 할 수 있다.' }] } }] } }] };
    const BACK_R = [{ id: 'law', text: '무면허 운전 차에 타는 것은 법적 문제에 함께 휘말리는 일이다' }, { id: 'body', text: '안전모 없는 뒷자리는 넘어질 때 몸을 지켜 주지 못한다' }, { id: 'rel', text: '거절에 대안을 담으면 관계를 지킬 수 있다' }, { id: 'once', text: '한 번쯤은 괜찮다', why: '사고는 처음 한 번에도 일어나요.' }, { id: 'trust', text: '친구 운전 실력을 믿으면 된다', why: '실력과 면허·장구·정원은 따로 지켜야 해요.' }];
    const at = (p) => ({ path: p, reasons: ['law', 'body'] });

    MODS.push(
      M({
        id: 'intro.pressure-scale', type: 'intro', title: '"타 타!" 앞에서 내 부담감',
        method: '권유 상황 부담감 크기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 눈금 3칸(조금·보통·많이)으로 손을 들어 부담감을 함께 표시한다.', base: '눈금 5칸에서 부담감 크기를 고르는 시연을 본 뒤 그 마음을 말로 옮긴다.', challenge: '부담을 낮추는 말 하나("나 오늘 버스 탈래")를 골라 말해 본다.' },
        intro: {
          teacher: '"친구들이 둘이 타라고 부추길 때 마음이 얼마나 무거울까요? 정답은 없어요. 크기를 말로 옮기는 연습이에요." 시연으로 눈금에서 \'걱정\' 3칸을 고르는 모습을 보여 주고, 손을 들어 반의 부담감 크기를 확인한다. "친구가 하자는데 거절하면 이상한 애가 된다"는 말이 나오면 "그 부담이 큰 만큼, 미리 할 말을 정해 두면 어떨까요?"라고 되묻는다. 부담을 느끼는 것은 약한 게 아니라 판단이 시작되는 신호라는 점을 짚는다.',
          student: '친구들이 면허 없는 친구의 스쿠터에 둘이 타라고 부추기는 상황에서, 내 부담감이 얼마나 클지 눈금으로 골라 보고 그 마음을 말로 옮겨 보세요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '친구들이 "둘이 타!"라고 부추긴다', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' }, ask: '거절해야 할 때 마음이 얼마나 무거울까요?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper teenager standing next to a paper scooter at night under a streetlight, several paper speech bubbles from friends pulling toward the seat, a weather cloud above the teenager', banner: '이 마음, 얼마나 클까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '학생에게 실제로 동승 권유를 받은 일이 있었는지 묻지 않는다. 눈금은 내 마음을 돌아보는 것이라 어떤 크기든 맞다.',
      }),
      M({
        id: 'intro.pressure-map', type: 'intro', title: '거절이 어려운 까닭 찾기',
        method: '또래 압력 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '관계·체면·편리함 가지 이름을 보이고 까닭 카드를 함께 붙인다.', base: '가지마다 까닭 카드 2장씩 붙이고 왜 그 가지인지 말한다.', challenge: '\'대안\' 가지를 더한다고 생각하고, 가지마다 부담을 줄일 대안을 하나씩 말한다.' },
        intro: {
          teacher: '"\'타 타!\' 앞에서 거절하기 어려운 까닭은 무엇일까요? 관계, 체면, 편리함 세 가지로 나눠 봐요." 시연으로 까닭 카드가 가지에 붙는 모습을 보여 준다. "그냥 싫다고 하면 되지 왜 어려워요?"라는 말이 나오면 "단체 대화방에서 다음 날 무슨 말이 오갈지 걱정되면 어떨까요?"라고 되묻는다. 까닭을 알아야 그 까닭에 맞는 거절 말과 대안을 준비할 수 있다는 점을 짚는다.',
          student: '\'거절하기 어려운 까닭\'에서 관계·체면·편리함 세 가지를 뻗고, 까닭 카드가 어느 가지에 붙는지 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '거절하기 어려운 까닭', slots: ['관계', '체면', '편리함'], cards: ['친구가 서운해할까 봐', '무리에서 빠질까 봐', '겁쟁이로 보일까 봐', '나만 유난 떠는 것 같아서', '버스 기다리기 귀찮아서', '밤이라 걷기 싫어서'] }, sequence: [{ sort: { '관계': ['친구가 서운해할까 봐', '무리에서 빠질까 봐'], '체면': ['겁쟁이로 보일까 봐', '나만 유난 떠는 것 같아서'], '편리함': ['버스 기다리기 귀찮아서', '밤이라 걷기 싫어서'] } }] },
          art: { draw: 'a paper mind map with a heavy paper stone in the center and three paper branches showing linked hands, a paper mask and a paper bus stop sign', banner: '왜 거절이 어려울까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.chain-dilemma', type: 'activity', title: '스쿠터 뒷자리 권유, 그 뒤',
        method: '동승 결과 추적 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '두 번째 갈림길까지 따라가 결과를 보고 법적·신체적 근거 2장을 고른다.', base: '세 번째 갈림길(병원·정류장 장면)까지 끝까지 따라가 결과를 보고 근거 2장을 고른다.', challenge: '끝까지 따라가 결과를 맞힌 뒤에만 영향 표시가 보이고, 법적·신체적·관계 근거 3장을 모두 골라 결과를 갈래별로 나눈다.' },
        activity: {
          title: '유나의 동승 권유 갈림길', tool: 'dilemma',
          teacher: '"밤 10시, 면허 없는 친구가 뒤에 타라고 하고 다른 친구들이 부추겨요. 여러분이 유나라면?" 선택마다 영향 칸을 소리 내어 읽게 하고, 결과를 법적(단속·조사)·신체적(부상)·관계(믿음·대화방) 세 갈래로 칠판에 나누어 적는다. 탄 길을 고른 학생에게 "운전은 민재가 했는데, 유나에게 남은 결과는 무엇이었나요?"라고 묻는다. 거절 길에서 친구를 그냥 보낸 학생에게는 "나는 지켰는데 민재는요? 대안 한마디가 무엇을 바꿨나요?"라고 묻는다. 동승자도 위험과 책임을 함께 진다는 점을 짚는다.',
          task: '동승 권유부터 그 뒤까지 갈림길을 따라가며 결과를 추적하고, 끝에서 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '권유를 거절하고 대안까지 내는 길을 끝까지 따라가고 근거를 고르세요.', toolOptions: { scene: BACK, reasons: BACK_R }, target: at(['refuse', 'alt', 'kind']), difficulty: 0.4,
              levels: { easy: { prompt: '권유를 거절하고 대안을 내는 길을 따라가고 근거를 고르세요(갈림길 둘).', toolOptions: { scene: cut(BACK, 2) }, target: at(['refuse', 'alt']) },
                challenge: { prompt: '거절하고 대안까지 내는 길을 끝까지 따라가고, 법적·신체적·관계 근거를 모두 고르세요.', target: { path: ['refuse', 'alt', 'kind'], reasons: ['law', 'body', 'rel'] } } } },
            EXPLOREQ('뒷자리에 탄 길도 끝까지 가 보고, 결과를 법적·신체적·관계로 나누어 견주세요.', BACK, BACK_R, ['탄 길의 끝 결과를 확인했다', '법적·신체적·관계 결과를 나누어 보았다'], { d: 0.35 }),
            DILQ('친구가 공유 킥보드 하나에 둘이 타고 가자는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '수행평가 모둠 모임에 늦었다. 면허가 있는 친구가 공유 킥보드를 빌려 "하나에 둘이 타면 금방이야"라고 한다.', who: '유나', motif: 'sun', choices: [
              { id: 'two', text: '빨리 가려고 둘이 함께 탄다', result: '출발하자마자 킥보드가 흔들리고 브레이크가 잘 안 먹는다.', impact: [{ who: '두 사람', text: '균형과 제동이 나빠진다', tone: -1 }], ending: '승차 정원을 넘기면 면허가 있어도 탈것이 내 말을 듣지 않는다.' },
              { id: 'one', text: '"한 명만 타야 해. 너 먼저 가, 나는 걸어갈게"라고 한다', result: '친구가 먼저 출발한다.', impact: [{ who: '유나', text: '10분 늦는다', tone: 0 }],
                next: { text: '모둠 대화방에 "유나 왜 이렇게 늦어"라는 말이 올라온다.', choices: [
                  { id: 'tell', text: '"정원 지키느라 걸어가는 중, 10분 뒤 도착"이라고 알린다', result: '모둠원들이 이해하고 먼저 자료를 정리한다.', impact: [{ who: '모둠', text: '사정을 알고 기다린다', tone: 1 }], ending: '안전한 선택을 분명히 알리면 늦음도 이해받는다.' },
                  { id: 'run', text: '대답 없이 차도로 뛰어간다', result: '횡단보도가 아닌 곳에서 차와 마주친다.', impact: [{ who: '유나', text: '다른 위험을 만든다', tone: -1 }], ending: '한 위험을 피한 뒤 서두르면 다른 위험이 생긴다.' }] } }] },
              [['one', 'tell']], [{ id: 'seat', text: '승차 정원을 넘기면 균형과 제동이 나빠진다' }, { id: 'say', text: '늦을 때는 서두르기보다 사정을 알린다' }, { id: 'license', text: '면허가 있으면 둘이 타도 된다', why: '면허와 승차 정원은 따로 지켜야 해요.' }], ['seat', 'say'], { d: 0.35, more: { conclude: '동승자도 위험과 책임을 함께 져요. 타기 전에 거절하고, 대안을 함께 내는 것이 나와 친구를 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '뒷자리에 탄 길의 결과를 갈래별로 나누어 쓰세요.', columns: ['갈래', '유나에게 생긴 결과', '민재에게 생긴 결과'], cells: [['법적', '', ''], ['신체적', '', ''], ['관계', '', '']] }] },
        notes: '갈림길 교구는 쉬움 1번·기본 2번이 아니라 이 모듈에서는 쉬움 2번·기본 3번(끝까지)으로 나무를 잘랐다. \'결과마다 법적·신체적·관계 구분\'은 도전 단계 근거 카드 3장과 활동지 표로 한다. 학생의 실제 동승 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.refuse-script', type: 'activity', title: '거절과 대안을 담은 대본',
        method: '거절과 대안 대본', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '대본마다 문장 틀("고마운데, 나는 ~. 왜냐하면 ~. 대신 ~")을 보고 쓴다.', base: '5문장 안팎의 거절 대본을 분명한 말·까닭·대안 기준표로 점검하며 쓴다.', challenge: '대본마다 기준 하나가 더 붙고, 두 가지 상황(스쿠터 뒷자리·킥보드 둘이 타기) 버전을 모두 쓴다.' },
        activity: {
          title: '나의 거절 대본', tool: 'rubric-writing',
          teacher: '"좋은 거절에는 세 가지가 들어가요. 분명한 말, 짧은 까닭, 그리고 대안." 칠판에 \'안 탈래 / 면허·안전모가 없잖아 / 같이 버스 타자\'를 적고 쓰게 한다. "미안해, 다음에…"처럼 흐리게 끝낸 학생에게 "친구가 이 말을 듣고 \'그럼 지금은 타도 되네\'라고 생각할 수는 없을까요?"라고 묻는다. 친구를 비난하는 말("너 미쳤어?")을 쓴 학생에게는 "이 말을 들은 친구가 대안을 받아들일까요?"라고 묻는다. 거절은 관계를 끊는 말이 아니라 대안을 담는 말이라는 점을 짚는다.',
          task: '동승 권유를 거절하는 대본을 쓰고 기준표(분명한 말·까닭·대안)로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('면허 없는 친구가 스쿠터 뒷자리에 타라고 할 때의 거절 대본을 쓰세요.', '면허 없는 친구가 "뒤에 타, 금방이야"라고 해요. 거절 대본을 쓰세요(실제 이름은 쓰지 않아요).', ['첫 말에 안 탄다는 뜻을 분명히 했다', '까닭을 짧게 말했다', '함께할 수 있는 대안을 냈다'], { min: 60, max: 400, sent: [3, 5], must: [['안 탈', '안 타', '타지 않']], starter: '고마운데, 나는 ~. 왜냐하면 ~. 대신 ~', plus: '친구를 비난하는 말이 없다', d: 0.4 }),
            RWQ('친구들이 "분위기 깨지 마"라고 한 번 더 부추길 때 이어 갈 말을 쓰세요.', '친구들이 "분위기 깨지 마, 한 번만"이라고 한 번 더 부추겨요. 이어 갈 말을 쓰세요.', ['거절을 되풀이해 분명히 했다', '친구들의 마음을 인정하는 말을 넣었다', '분위기를 이어 갈 대안을 냈다'], { min: 50, max: 400, sent: [2, 4], must: [['대신', '같이', '함께']], starter: '재밌게 놀고 싶은 거 알아. 그래도 ~. 대신 ~', plus: '농담처럼 넘기지 않고 끝까지 분명했다', d: 0.45 }),
            RWQ('면허 있는 친구가 킥보드에 둘이 타자고 할 때의 거절 대본을 쓰세요.', '면허가 있는 친구가 킥보드 하나에 둘이 타자고 해요. 면허가 있어도 안 되는 까닭을 담아 거절 대본을 쓰세요.', ['안 탄다는 뜻을 분명히 했다', '승차 정원을 까닭으로 들었다', '각자 안전하게 갈 대안을 냈다'], { min: 60, max: 400, sent: [3, 5], must: [['한 명', '정원', '혼자']], starter: '면허 있는 건 아는데, ~', plus: '친구 실력을 탓하지 않고 규칙과 안전으로 말했다', d: 0.45, more: { conclude: '거절 대본은 분명한 말, 짧은 까닭, 함께할 대안으로 짜요. 미리 써 둔 말은 부추김 앞에서 꺼내기 쉬워요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 거절 대본 가운데 실제로 꺼내기 가장 쉬운 한 문장을 골라 쓰세요.' }] },
      }),
      M({
        id: 'activity.role-order', type: 'activity', title: '거절 역할극 장면 짜기',
        method: '역할극 진행 차례', tool: 'story', minutes: 18,
        levels: { easy: '역할극 장면 카드 3장(권유·거절·대안)을 차례로 놓는다.', base: '장면 카드 5장(권유·망설임·거절·대안·마무리)을 차례로 놓고 모둠이 연기한다.', challenge: '\'한 번 더 부추김\' 반전 장면이 더해진 6장을 차례로 놓고 연기한다.' },
        activity: {
          title: '역할극 장면 차례', tool: 'story',
          teacher: '"오늘 쓴 거절 대본을 몸으로 해 봐요. 먼저 장면 차례를 정하고, 모둠이 역할을 나눠 연기해요." 장면을 놓은 뒤 모둠마다 2분씩 연기하게 한다. \'거절\'을 \'망설임\'보다 앞에 놓는 학생에게 "실제로는 바로 거절이 나올까요? 망설이는 순간에 무엇을 떠올리면 좋을까요?"라고 묻는다. 반전 장면에서 거절을 포기하는 모둠에게는 "두 번째 부추김에도 같은 말을 되풀이하면 어떻게 될까요?"라고 묻는다. 연기 뒤 권유하는 역을 맡은 학생의 마음도 들어 본다.',
          task: '역할극 장면 카드를 차례로 놓고, 모둠이 그 차례대로 연기해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '스쿠터 뒷자리 권유 역할극 장면을 차례로 놓으세요.', toolOptions: { mode: 'order', slots: 5, cards: ['마무리: 다음 날 웃으며 인사', '대안: "같이 버스 타자"', '권유: "뒤에 타, 금방이야"', '거절: "나는 안 탈래"', '망설임: 친구들이 "타 타!"'] }, target: { order: ['권유: "뒤에 타, 금방이야"', '망설임: 친구들이 "타 타!"', '거절: "나는 안 탈래"', '대안: "같이 버스 타자"', '마무리: 다음 날 웃으며 인사'] }, difficulty: 0.25,
              levels: { easy: { prompt: '역할극 장면 카드 3장을 차례로 놓으세요(카드 3장).', toolOptions: { slots: 3, cards: ['대안: "같이 버스 타자"', '권유: "뒤에 타, 금방이야"', '거절: "나는 안 탈래"'] }, target: { order: ['권유: "뒤에 타, 금방이야"', '거절: "나는 안 탈래"', '대안: "같이 버스 타자"'] } },
                challenge: { prompt: '반전 장면 \'한 번 더 부추김\'까지 넣어 역할극 장면을 차례로 놓으세요(카드 6장).', toolOptions: { slots: 6, cards: ['마무리: 다음 날 웃으며 인사', '대안: "같이 버스 타자"', '반전: "분위기 깨지 마, 한 번만"', '권유: "뒤에 타, 금방이야"', '거절: "나는 안 탈래"', '망설임: 친구들이 "타 타!"'] }, target: { order: ['권유: "뒤에 타, 금방이야"', '망설임: 친구들이 "타 타!"', '거절: "나는 안 탈래"', '반전: "분위기 깨지 마, 한 번만"', '대안: "같이 버스 타자"', '마무리: 다음 날 웃으며 인사'] } } } },
            { prompt: '거절 장면에서 쓸 말로 알맞은 것을 모두 고르세요.', toolOptions: { mode: 'pick', basket: '거절 장면의 말', cards: ['"나는 안 탈래, 안전모도 없잖아"', '"면허 없는 운전은 같이 위험해져"', '"음… 그럼 조금만 타 볼까"', '"너 진짜 이상하다"'] }, target: { pick: ['"나는 안 탈래, 안전모도 없잖아"', '"면허 없는 운전은 같이 위험해져"'] }, difficulty: 0.3 },
            { prompt: '역할극 장면마다 연기할 때 신경 쓸 점을 짝지으세요.', toolOptions: { mode: 'match', slots: ['망설임', '거절', '대안', '마무리'], cards: ['관계를 이어 가는 인사', '함께할 방법을 구체적으로', '짧고 분명한 말투', '부담을 숨기지 않는 표정'] }, target: { match: { '망설임': '부담을 숨기지 않는 표정', '거절': '짧고 분명한 말투', '대안': '함께할 방법을 구체적으로', '마무리': '관계를 이어 가는 인사' } }, difficulty: 0.35, conclude: '거절은 망설임을 지나 분명한 말로 나오고, 대안과 마무리 인사가 관계를 이어 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '역할극에서 권유하는 역을 맡은 친구가 거절을 들었을 때 어떤 마음이었을지, 그 마음에 맞는 대안 말을 한 줄 쓰세요.' }] },
        notes: '연기는 교구가 판정하지 않는다. 장면 차례·말 고르기만 판정하고 연기는 모둠이 교실에서 한다. 실제 학생 이름을 역할 이름으로 쓰지 않는다.',
      }),
      M({
        id: 'activity.alt-budget', type: 'activity', title: '늦은 밤 귀가 대안 고르기',
        method: '대안 이동 수단 시간 예산', tool: 'economy', minutes: 19,
        levels: { easy: '대안 보기 3개 가운데 가상 예산 안에서 안전한 것을 고른다.', base: '대안 보기 5개 가운데 위험한 보기는 빼고 가상 예산 안에서 고른다.', challenge: '예산이 더 적은 경우에도 안전한 대안을 고르고, 활동지에 안전 근거를 쓴다.' },
        activity: {
          title: '가상 예산 안에서 귀가 대안 고르기', tool: 'economy',
          teacher: '"동승을 거절했어요. 이제 밤 11시에 집에 어떻게 갈까요? 돈과 시간은 한정돼 있어요. 오늘 금액은 모두 가상이에요." 예산 막대 안에서 대안을 고르게 한다. \'무면허 친구 스쿠터\'가 0원이라 고르는 학생에게 "돈이 안 드는 것과 안전한 것은 같을까요?"라고 묻는다. 걷기만 고르는 학생에게는 "밤 11시의 어두운 길을 혼자 걷는 것은 어떤가요? 보호자 연락과 함께라면 어떨까요?"라고 묻는다. 교구는 돈만 세니 걸리는 시간은 보기 글에 적어 두었다고 알려 준다.',
          task: '가상 예산 안에서 늦은 밤 안전한 귀가 대안을 고르되 위험한 보기는 빼요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 예산 5,000원. 보호자 연락은 꼭 넣고, 무면허 동승은 빼고 귀가 대안을 고르세요.', toolOptions: { mode: 'budget', budget: 5000, items: [{ id: 'call', text: '보호자에게 연락(0원)', price: 0 }, { id: 'bus', text: '심야버스(약 30분)', price: 1500 }, { id: 'ride', text: '무면허 친구 스쿠터 뒷자리', price: 0 }, { id: 'taxi', text: '택시(약 10분)', price: 12000 }, { id: 'walkalone', text: '어두운 지름길 혼자 걷기', price: 0 }], ask: '가상 귀가 예산' }, target: { budget: { must: ['call'], not: ['ride', 'walkalone'], min: 1500 } }, difficulty: 0.3,
              levels: { easy: { prompt: '가상 예산 5,000원. 보호자 연락은 꼭 넣고 무면허 동승은 빼고 고르세요(보기 3개).', toolOptions: { items: [{ id: 'call', text: '보호자에게 연락(0원)', price: 0 }, { id: 'bus', text: '심야버스(약 30분)', price: 1500 }, { id: 'ride', text: '무면허 친구 스쿠터 뒷자리', price: 0 }] }, target: { budget: { must: ['call', 'bus'], not: ['ride'] } } } } },
            { prompt: '가상 예산 15,000원, 친구 두 명과 함께. 보호자 연락은 넣고 위험한 보기는 빼고 셋이 안전하게 갈 방법을 고르세요.', toolOptions: { mode: 'budget', budget: 15000, items: [{ id: 'call', text: '각자 보호자에게 연락(0원)', price: 0 }, { id: 'taxi', text: '셋이 함께 택시(약 15분)', price: 13000 }, { id: 'two', text: '킥보드 하나에 둘이 타기', price: 2000 }, { id: 'ride', text: '무면허 친구 스쿠터 뒷자리', price: 0 }, { id: 'bus', text: '셋이 심야버스(약 40분)', price: 4500 }], ask: '가상 귀가 예산' }, target: { budget: { must: ['call'], not: ['two', 'ride'], min: 4500 } }, difficulty: 0.35,
              levels: { easy: { prompt: '가상 예산 15,000원, 친구 셋이 함께. 보호자 연락은 넣고 위험한 보기는 빼고 고르세요(보기 3개).', toolOptions: { items: [{ id: 'call', text: '각자 보호자에게 연락(0원)', price: 0 }, { id: 'two', text: '킥보드 하나에 둘이 타기', price: 2000 }, { id: 'bus', text: '셋이 심야버스(약 40분)', price: 4500 }] }, target: { budget: { must: ['call', 'bus'], not: ['two'] } } } } },
            { prompt: '예산이 1,000원뿐이에요. 위험한 보기는 빼고, 그래도 안전하게 귀가할 대안을 고르세요.', toolOptions: { mode: 'budget', budget: 1000, items: [{ id: 'call', text: '보호자에게 데리러 와 달라고 연락', price: 0 }, { id: 'wait', text: '불 켜진 편의점 안에서 기다리기', price: 0 }, { id: 'ride', text: '무면허 친구 스쿠터 뒷자리', price: 0 }, { id: 'walkalone', text: '어두운 지름길 혼자 걷기', price: 0 }, { id: 'bus', text: '심야버스', price: 1500 }], ask: '줄어든 가상 예산' }, target: { budget: { must: ['call', 'wait'], not: ['ride', 'walkalone'] } }, difficulty: 0.4,
              levels: { easy: { prompt: '예산이 1,000원뿐이에요. 위험한 보기는 빼고 안전한 대안을 고르세요(보기 3개).', toolOptions: { items: [{ id: 'call', text: '보호자에게 데리러 와 달라고 연락', price: 0 }, { id: 'wait', text: '불 켜진 편의점 안에서 기다리기', price: 0 }, { id: 'ride', text: '무면허 친구 스쿠터 뒷자리', price: 0 }] }, target: { budget: { must: ['call', 'wait'], not: ['ride'] } } } },
              conclude: '돈이 들지 않는 위험한 선택보다, 보호자 연락과 밝은 곳에서 기다리기처럼 안전한 대안이 먼저예요. 시간은 조금 더 걸려도 괜찮아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 귀가 대안 하나와 그것을 안전하다고 본 근거를 쓰세요.' }] },
        notes: '금액·시간은 모두 수업용 가상 값이다. 교구의 예산 판은 돈(원)만 세므로 시간은 보기 글에 적어 함께 따지게 했고, \'보기 3개/5개\'는 같은 문항의 쉬움 판에서 보기 수를 줄였다.',
      }),

      M({
        id: 'wrap.one-line', type: 'wrap', title: '나만의 거절 한 줄',
        method: '나의 거절 한 줄', tool: 'wordcards', minutes: 7,
        levels: { easy: '출구 2번의 보기에서 가장 좋은 거절 한 줄을 고른다.', base: '출구 1번에서 낱말 카드 3장을 이어 거절 한 줄을 만든다.', challenge: '출구 3번에 카드 없이 나만의 거절 한 줄을 스스로 짓는다.' },
        wrap: {
          teacher: '"오늘 배운 거절을 한 줄로 줄여 주머니에 넣어 가요. 분명한 말, 까닭, 대안 — 세 조각이면 돼요." 출구 1번에서 카드 세 장을 잇게 하고, 2번에서 보기를 고른 뒤, 3번에 나만의 한 줄을 짓게 한다. "그냥 \'싫어\'면 충분하다"는 학생에게 "\'싫어\'만 들은 친구는 다음에 뭐라고 할까요? 대안이 붙으면 어떻게 될까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'order', slots: 3, cards: ['같이 버스 타자', '나는 안 탈래', '안전모도 없잖아'] }, prompt: '낱말 카드를 분명한 말 → 까닭 → 대안 차례로 이어 거절 한 줄을 만드세요.', target: { order: ['나는 안 탈래', '안전모도 없잖아', '같이 버스 타자'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '분명한 말·까닭·대안을 모두 담은 거절 한 줄을 고르세요.', options: ['"음… 다음에 탈게"', '"나는 안 타. 면허 없는 운전은 위험해. 형한테 데리러 오라고 하자"', '"너 바보야? 그걸 왜 타"'], answer: 1, difficulty: 0.15, explain: '분명한 말, 짧은 까닭, 함께할 대안이 모두 들어 있어요.' },
            { type: 'short', prompt: '카드 없이 나만의 거절 한 줄을 지어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 거절 한 줄',
          items: [
            { type: 'short', prompt: '나만의 거절 한 줄을 분명한 말·까닭·대안을 넣어 쓰세요.' },
            { type: 'check', prompt: '내 거절 한 줄에 들어 있는 것에 표시하세요.', options: ['분명한 말', '짧은 까닭', '함께할 대안', '친구를 탓하지 않는 말투'] },
          ],
        },
        notes: '출구 질문은 단계별 판이 없어 쉬움(보기 고르기)·기본(카드 3장)·도전(스스로 짓기)을 출구 2·1·3번으로 나누어 두었다.',
      }),
      M({
        id: 'wrap.plan-order', type: 'wrap', title: '늦은 밤 귀가 대안 차례',
        method: '늦은 밤 귀가 대안 차례 정하기', tool: 'timeline', minutes: 6,
        levels: { easy: '거절 → 보호자 연락 → 대안 수단 3단계를 함께 차례로 놓는다.', base: '도착 알리기까지 4단계를 차례로 놓고 함정 카드는 남긴다.', challenge: '보호자와 연락이 안 될 때의 갈래(다른 어른·밝은 곳에서 기다리기)를 활동지에 더한다.' },
        wrap: {
          teacher: '"늦은 밤 동승을 거절한 뒤의 차례를 정해 둬요. 순서가 머리에 있으면 당황하지 않아요." 출구 1번에서 차례를 놓고, 함정 카드가 왜 함정인지 한 명에게 묻는다. "도착하면 그냥 자면 된다"는 학생에게 "연락을 기다리는 보호자는 내가 도착한 걸 어떻게 알까요?"라고 묻는다. 활동지에서 보호자와 연락이 안 될 때의 갈래를 함께 생각한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['권유받은 때', '집에 온 뒤'], slots: 4, cards: ['집에 도착했다고 알리기', '대안 이동 수단 고르기', '권유를 분명히 거절하기', '보호자에게 연락하기', '연락 없이 친구 따라가기'] }, prompt: '늦은 밤 귀가 차례 카드를 놓고, 맞지 않는 카드는 남기세요.', target: { order: ['권유를 분명히 거절하기', '보호자에게 연락하기', '대안 이동 수단 고르기', '집에 도착했다고 알리기'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '동승에 대한 설명으로 맞는 것을 고르세요.', options: ['운전한 친구만 책임진다', '동승자도 위험과 책임을 함께 진다', '친구 운전 실력을 믿으면 괜찮다'], answer: 1, difficulty: 0.15, explain: '동승자도 다치고 법적 문제에 휘말릴 수 있어요. 타기 전에 거절하는 것이 가장 안전해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '늦은 밤 귀가 계획',
          items: [
            { type: 'table', prompt: '늦은 밤 귀가 차례와 할 말을 쓰세요.', columns: ['차례', '할 일', '할 말'], cells: [['1', '거절하기', ''], ['2', '보호자 연락', ''], ['3', '대안 수단', ''], ['4', '도착 알리기', '']] },
            { type: 'short', prompt: '보호자와 연락이 안 될 때 할 일(다른 어른에게 연락, 밝은 곳에서 기다리기 등)을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 보행 중 스마트폰과 정류장 이후의 길 (10학년)
  // ======================================================================================================
  {
    const M = MOD('walk-phone', [10]);
    const STOP = [{ name: '정류장', icon: 'bus', at: [2, 1] }, { name: '서 있는 버스 앞', icon: 'dot', at: [3, 2] }, { name: '서 있는 버스 뒤', icon: 'dot', at: [1, 2] }, { name: '횡단보도', icon: 'dot', at: [5, 2] }, { name: '집', icon: 'house', at: [3, 3] }, { name: '편의점', icon: 'market', at: [0, 1] }];
    const STOPMAP = { title: '정류장 둘레(가상)', grid: [6, 4], places: STOP, roads: [[[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]]] };
    const ALLEY = { text: '밤 9시, 시우는 이어폰으로 음악을 들으며 인도가 없는 골목을 걷는다. 뒤에서 차가 천천히 다가오지만 엔진 소리가 들리지 않는다.', who: '시우', motif: 'moon', choices: [
      { id: 'keep', text: '음악을 그대로 들으며 골목 가운데로 걷는다', result: '차가 경적을 울렸지만 시우는 듣지 못한다.', impact: [{ who: '시우', text: '차와 아주 가까워질 때까지 모른다', tone: -1 }],
        next: { text: '차가 바로 옆을 스치듯 지나간다. 시우는 깜짝 놀라 멈춘다.', choices: [
          { id: 'same', text: '별일 없었으니 계속 그대로 걷는다', result: '다음 골목에서도 뒤를 살피지 못한다.', impact: [{ who: '시우', text: '같은 위험이 되풀이된다', tone: -1 }], ending: '운 좋게 지나간 위험은 다음 골목에서 다시 온다.' },
          { id: 'off', text: '한쪽 이어폰을 빼고 길 가장자리로 걷는다', result: '뒤에서 오는 소리를 들을 수 있다.', impact: [{ who: '시우', text: '늦었지만 주변 소리를 되찾는다', tone: 1 }], ending: '놀란 뒤에 바꾼 습관도 다음 위험을 줄인다.' }] } },
      { id: 'edge', text: '골목에 들어설 때 이어폰을 빼고 가장자리로 걷는다', result: '뒤에서 오는 차 소리를 듣고 한쪽으로 비켜선다.', impact: [{ who: '시우', text: '차가 안전하게 지나간다', tone: 1 }],
        next: { text: '큰길로 나오자 친구에게서 메시지가 온다.', choices: [
          { id: 'stopread', text: '인도 안쪽에 멈춰 서서 메시지를 읽는다', result: '읽고 나서 다시 앞을 보며 걷는다.', impact: [{ who: '시우', text: '걷는 동안 눈과 귀가 길에 있다', tone: 1 }], ending: '볼 때는 멈추고, 걸을 때는 길을 본다.' },
          { id: 'walkread', text: '걸으면서 바로 답장을 쓴다', result: '횡단보도 앞에서 신호가 바뀐 것을 늦게 본다.', impact: [{ who: '시우', text: '빨간불에 한 발 내디딜 뻔한다', tone: -1 }], ending: '골목에서 지킨 주의가 큰길에서 화면으로 빠져나간다.' }] } },
      { id: 'louder', text: '무서워서 음악 소리를 더 키우고 빨리 걷는다', result: '바깥 소리가 완전히 묻힌다.', impact: [{ who: '시우', text: '위험을 알릴 소리를 모두 놓친다', tone: -1 }], ending: '소리를 키우면 마음은 가려도 위험은 가려지지 않는다.' }] };
    const ALLEY_R = [{ id: 'ear', text: '이어폰은 경적·엔진 소리를 가려 다가오는 차를 늦게 알게 한다' }, { id: 'stop', text: '화면은 멈춰 서서 보고 걸을 때는 길을 본다' }, { id: 'slow', text: '골목에서는 차가 천천히 오니 들을 필요가 없다', why: '천천히 오는 차도 가까이 올 때까지 모르면 피할 수 없어요.' }, { id: 'multi', text: '나는 음악을 들어도 주변을 잘 살핀다', why: '귀가 막히면 눈으로만 뒤를 살필 수는 없어요.' }];

    MODS.push(
      M({
        id: 'intro.attention-test', type: 'intro', title: '화면 보며 걷기 주의 실험',
        method: '화면 보며 걷기 주의 실험', tool: 'timer', minutes: 6,
        levels: { easy: '화면을 볼 때와 안 볼 때 각 1번씩만 반응을 재고 기록판에 적는다.', base: '각 3번씩 재고 기록판에 적은 뒤 어느 쪽이 늦었는지 말한다.', challenge: '두 기록의 차이를 "화면을 보면 ~" 한 문장으로 해석해 발표한다.' },
        intro: {
          teacher: '"나는 걸으면서 휴대전화를 봐도 다 보인다고 생각하는 사람?" 손을 들게 한 뒤 짝 실험을 한다. 한 사람이 휴대전화 화면의 글을 소리 내어 읽는 동안 짝이 아무 때나 신호 카드를 들고, 읽던 사람이 알아채면 손을 든다. 자리에 앉아서만 하고 실제로 걷지 않는다. 시연 단추로 실험 차례를 보여 준 뒤 기록판에 우리 짝의 기록을 적게 한다. "나는 멀티태스킹을 잘해요"라는 학생에게 "그럼 화면을 볼 때와 안 볼 때 기록이 똑같이 나와야겠죠?"라고 되묻는다. 기록이 정확한 실험은 아니어도 차이가 나는지 보는 것이 목적이라고 밝힌다.',
          student: '짝과 함께 화면을 읽을 때와 안 읽을 때 신호 카드를 알아채는 데 걸린 시간을 재어 기록판에 적고, 두 기록을 견주어 보세요.',
          demo: { tool: 'timer', options: { title: '주의 실험 차례', cards: ['기록판에 적기', '짝이 신호 카드 들기', '화면 글 소리 내어 읽기', '알아채면 손 들기'] }, sequence: [{ order: ['화면 글 소리 내어 읽기', '짝이 신호 카드 들기', '알아채면 손 들기', '기록판에 적기'] }] },
          art: { draw: 'two paper students sitting face to face, one reading a glowing paper phone screen, the other raising a red paper signal card, a paper stopwatch between them', banner: '화면을 보면 얼마나 늦을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '실험은 교실 자리에서만 하고 복도·계단을 걸으며 하지 않는다. 기록은 우리 반 실험 값일 뿐 일반 기준이 아니며, 교구는 기록을 적었는지만 판정한다.',
      }),
      M({
        id: 'intro.after-bus', type: 'intro', title: '버스에서 내린 뒤 장면',
        method: '버스에서 내린 뒤 장면', tool: 'story', minutes: 7,
        levels: { easy: '장면 카드 3장(내리기·버스 앞으로 나가기·차가 나타남)을 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 위험이 시작된 순간을 짚는다.', challenge: '같은 장면에서 다른 결말(버스가 떠난 뒤 횡단보도로)을 골라 무엇이 달라졌는지 말한다.' },
        intro: {
          teacher: '"학원 버스에서 내린 다은이는 길 건너 집으로 가려고 해요. 장면을 차례로 놓아 볼까요?" 시연으로 차례를 놓은 뒤 "어느 장면에서 위험이 시작됐나요?"라고 묻는다. "정류장 앞은 차가 천천히 다니니 괜찮다"는 말이 나오면 "서 있는 버스에 가려서 다은이가 마주 오는 차를 볼 수 있었을까요? 그 차의 운전자는 다은이를 볼 수 있었을까요?"라고 되묻는다. 서로 보이지 않는다는 것이 오늘의 핵심이라고 밝힌다.',
          student: '다은이가 버스에서 내려 길을 건너는 장면 카드를 차례로 놓고, 위험이 시작된 순간과 그때 서로 보이지 않았던 사람을 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '정류장에서 내린 다은(가상)', cards: [{ id: 'off', text: '버스에서 내린다', motif: 'house' }, { id: 'front', text: '서 있는 버스 바로 앞으로 나간다', motif: 'cloud' }, { id: 'car', text: '옆 차로에서 차가 나타난다', motif: 'star' }, { id: 'brake', text: '운전자가 급히 멈춘다', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['off', 'front', 'car', 'brake'] }] },
          art: { draw: 'a paper bus stopped at a curb, a paper student stepping out in front of the bus, a paper car approaching in the next lane hidden behind the bus, dotted sight lines blocked by the bus', banner: '버스가 가린 것은 무엇일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.data-read', type: 'activity', title: '가상 보행 습관 조사 읽기',
        method: '가상 조사 자료 해석', tool: 'chart', minutes: 19,
        levels: { easy: '띠그래프 조각마다 백분율 값이 보여 큰 조각부터 읽는다.', base: '값 표시 없이 띠그래프를 읽고 위험 행동 비율을 더해 결론을 낸다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 조사 방법(학생 수·스스로 답함)의 한계를 짚는다.' },
        activity: {
          title: '가상 보행 습관 조사 띠그래프', tool: 'chart',
          teacher: '"이 자료는 가상의 우리 학교 학생 조사예요. 길을 건널 때 무엇을 하는지 물었어요." 먼저 가장 큰 조각을 읽고, 위험 행동을 더해 결론을 내게 한다. "좌우 확인이 가장 많으니 우리 학교는 안전하다"는 결론을 낸 학생에게 "나머지 조각을 더하면 얼마인가요? 그 학생들도 같은 길을 건너요"라고 묻는다. 마지막 문항에서는 스스로 답한 조사는 실제 행동보다 좋게 나올 수 있다는 점을 짚는다.',
          task: '가상 조사 띠그래프를 읽고 결론과 자료의 한계를 구분해요.', levels: { easy: { showValues: true }, base: { showValues: false }, challenge: { showValues: false } },
          items: [
            { prompt: '가상 조사에서 길을 건널 때 가장 많은 학생이 한 행동을 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '길 건널 때 하는 행동(가상 조사, %)', unit: '%', data: [['좌우를 살핀다', 40], ['화면을 본다', 25], ['이어폰을 낀다', 20], ['화면과 이어폰 둘 다', 10], ['기타', 5]], question: '가장 큰 조각은?', choices: ['좌우를 살핀다', '화면을 본다', '이어폰을 낀다', '화면과 이어폰 둘 다'] }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '화면을 보거나 이어폰을 끼는 행동(둘 다 포함)의 비율을 모두 더하면 몇 %인가요?', toolOptions: { type: 'band', mode: 'read', title: '길 건널 때 하는 행동(가상 조사, %)', unit: '%', data: [['좌우를 살핀다', 40], ['화면을 본다', 25], ['이어폰을 낀다', 20], ['화면과 이어폰 둘 다', 10], ['기타', 5]], question: '셋을 더하면?' }, target: { value: 55 }, difficulty: 0.3 },
            { prompt: '이 가상 자료로 내릴 수 있는 결론으로 가장 알맞은 것을 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '길 건널 때 하는 행동(가상 조사, %)', unit: '%', data: [['좌우를 살핀다', 40], ['화면을 본다', 25], ['이어폰을 낀다', 20], ['화면과 이어폰 둘 다', 10], ['기타', 5]], question: '알맞은 결론은?', choices: ['우리 학교 학생은 모두 안전하게 건넌다', '절반이 넘는 학생이 화면이나 이어폰에 주의를 빼앗긴 채 건넌다고 답했다', '이어폰이 화면보다 더 위험하다'], why: ['좌우를 살핀다는 학생은 절반이 안 돼요.', '', '이 자료는 행동의 비율일 뿐 어느 쪽이 더 위험한지는 보여 주지 않아요.'] }, target: { pick: 1 }, difficulty: 0.35 },
            { prompt: '이 가상 조사만으로는 알 수 없는 것을 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '길 건널 때 하는 행동(가상 조사, %)', unit: '%', data: [['좌우를 살핀다', 40], ['화면을 본다', 25], ['이어폰을 낀다', 20], ['화면과 이어폰 둘 다', 10], ['기타', 5]], question: '이 자료로 알 수 없는 것은?', choices: ['화면을 본다고 답한 학생의 비율', '학생들이 실제로도 답한 대로 행동하는지', '좌우를 살핀다고 답한 학생이 가장 많은지'], why: ['띠그래프 조각으로 읽을 수 있어요.', '', '가장 큰 조각으로 알 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '스스로 답한 조사는 실제보다 좋게 나올 수 있고, 몇 명에게 물었는지도 결론의 힘을 바꿔요. 결론과 한계를 함께 적어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 가상 자료의 결론 하나와 한계 하나를 각각 한 문장으로 쓰세요.' }] },
        notes: '자료는 모두 가상이다. 실제 우리 학교 조사를 하려면 익명으로 하고 결과를 개인과 잇지 않는다.',
      }),
      M({
        id: 'activity.bus-map', type: 'activity', title: '정류장 둘레 위험 지도',
        method: '정류장 둘레 위험 지도', tool: 'map', minutes: 18,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 읽힌다.', base: '읽기 글자 없이 상황마다 알맞은 칸에 핀을 꽂고, 버스 앞·뒤를 견주는 보기를 고른다.', challenge: '읽기 글자는 맞힌 뒤에만 보이고, 활동지에 두 경로(버스 앞 바로 건너기·횡단보도까지 걷기)를 근거와 함께 견주어 쓴다.' },
        activity: {
          title: '정류장 칸 지도에서 건널 곳 찾기', tool: 'map',
          teacher: '"가상의 정류장 둘레 지도예요. 버스에서 내려 길 건너 집으로 간다면 어디로 건너야 할까요?" 문항마다 핀을 꽂기 전에 "그 자리에서 마주 오는 차가 보이나요? 운전자에게 내가 보이나요?"라고 묻는다. 버스 뒤를 안전하다고 고른 학생에게 "버스 뒤를 지나 오는 차는 버스에 가려 나를 언제 볼까요?"라고 묻는다. 지도는 핀 하나씩 놓으므로 두 경로 비교는 활동지에서 마무리한다.',
          task: '정류장 둘레 칸 지도에서 상황마다 알맞은 칸에 핀을 꽂고 보기를 골라요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '버스에서 내려 길 건너 집으로 가요. 길을 건널 곳에 핀을 꽂으세요.', toolOptions: STOPMAP, target: { place: '횡단보도' }, difficulty: 0.2 },
            { prompt: '버스가 아직 서 있어요. 이 자리에서 건너면 옆 차로에서 오는 차가 버스에 가려 서로 보이지 않는 곳에 핀을 꽂으세요.', toolOptions: STOPMAP, target: { place: '서 있는 버스 앞' }, difficulty: 0.3, hints: ['버스가 운전자의 눈과 내 눈 사이를 막는 자리를 찾아보세요.'] },
            { prompt: '버스 바로 뒤로 건너면 왜 위험한지 가장 알맞은 까닭을 고르세요.', toolOptions: Object.assign({}, STOPMAP, { readOnly: true, ask: { q: '버스 뒤로 건너면 위험한 까닭은?', choices: ['버스가 떠날 때 뒤로 밀려서', '뒤따라오던 차가 버스를 앞지르며 나를 늦게 본다', '버스 뒤는 원래 길이 없어서'], why: ['버스는 앞으로 떠나요.', '', '버스 뒤에도 차로가 있어요.'] } }), target: { pick: 1 }, difficulty: 0.35, conclude: '서 있는 버스는 앞이든 뒤든 나와 운전자를 서로 가려요. 버스가 떠난 뒤 횡단보도에서 건너요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 경로를 견주어 쓰세요.', columns: ['경로', '걸리는 시간', '위험한 점', '내 선택과 근거'], cells: [['버스 앞 바로 건너기', '', '', ''], ['횡단보도까지 걷기', '', '', '']] }] },
        notes: '지도는 가상이다. 교구는 문항마다 핀 하나만 판정하므로 \'경로 2개 비교\'는 버스 앞·뒤 칸을 차례로 짚는 문항과 활동지 표로 나누어 한다.',
      }),
      M({
        id: 'activity.headphone-dilemma', type: 'activity', title: '이어폰 끼고 골목길 갈림길',
        method: '이어폰 끼고 골목길 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(큰길에서 메시지가 온 장면)까지 가서 결과를 보고 근거 2개를 고른다.', challenge: '확인 전에는 영향 표시가 숨겨진 채 고르고, 다른 길도 끝까지 가 본 뒤 결과를 견준다.' },
        activity: {
          title: '시우의 밤 골목길 갈림길', tool: 'dilemma',
          teacher: '"밤 골목, 이어폰, 뒤에서 오는 차. 시우는 무엇을 할 수 있을까요?" 선택마다 시우가 무엇을 듣고 못 듣는지 소리 내어 읽게 한다. 음악을 키우는 길을 고른 학생에게 "무서울 때 소리를 키우면 무엇이 더 안 들릴까요?"라고 묻는다. "차가 알아서 피해 간다"는 말에는 "운전자도 골목 가운데 사람을 늦게 볼 수 있다면요?"라고 되묻는다. 귀를 길에 돌려놓는 것이 이어폰 규칙의 핵심이라는 점을 짚는다.',
          task: '시우의 골목길 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('밤 골목에서 소리와 시선을 길에 두는 길을 따라가고 근거를 고르세요.', ALLEY, [['edge', 'stopread']], ALLEY_R, ['ear', 'stop'], { d: 0.4 }),
            EXPLOREQ('음악을 그대로 듣는 길도 끝까지 가 보고 결과를 견주세요.', ALLEY, ALLEY_R, ['다른 길의 끝 결과를 확인했다', '두 길에서 시우가 들은 소리를 견주었다'], { d: 0.35 }),
            DILQ('친구와 통화하며 주차장 출구 앞을 지나는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '서아는 친구와 영상 통화를 하며 걷는다. 앞에 상가 주차장 출구가 있고 경고음이 울린다.', who: '서아', motif: 'house', choices: [
              { id: 'pass', text: '통화를 계속하며 출구 앞을 그냥 지난다', result: '나오던 차가 서아를 늦게 보고 급히 멈춘다.', impact: [{ who: '서아', text: '차 앞에서 얼어붙는다', tone: -1 }], ending: '화면 속 친구를 보는 동안 출구의 차는 보이지 않는다.' },
              { id: 'pause', text: '통화를 잠깐 멈추고 출구 앞에서 좌우를 본다', result: '나오는 차를 보고 기다렸다 지난다.', impact: [{ who: '서아', text: '안전하게 지난다', tone: 1 }],
                next: { text: '친구가 "왜 끊어?"라며 서운해한다.', choices: [
                  { id: 'explain', text: '"길 건너고 다시 걸게"라고 말한다', result: '친구가 "그래, 조심해"라고 한다.', impact: [{ who: '친구', text: '까닭을 알고 기다린다', tone: 1 }], ending: '잠깐 끊는 한마디가 관계와 안전을 함께 지킨다.' },
                  { id: 'resume', text: '미안해서 다시 화면을 보며 걷는다', result: '다음 출구에서 같은 위험이 생긴다.', impact: [{ who: '서아', text: '위험이 되풀이된다', tone: -1 }], ending: '한 번 멈춘 것으로 끝나지 않고, 걷는 동안 계속 지켜야 한다.' }] } }] },
              [['pause', 'explain']], [{ id: 'exit', text: '주차장 출구는 운전자와 보행자가 서로 늦게 보는 곳이다' }, { id: 'say', text: '통화를 멈출 때 까닭을 말하면 관계도 지킨다' }, { id: 'beep', text: '경고음이 울리면 차가 알아서 멈춘다', why: '경고음은 차가 나온다는 알림일 뿐 멈춘다는 뜻이 아니에요.' }], ['exit', 'say'], { d: 0.35, more: { conclude: '이어폰과 화면은 귀와 눈을 길에서 빼앗아요. 위험한 자리에서는 멈추고, 그 까닭을 말해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이어폰을 끼고 걸어야 할 때 내가 지킬 조건 하나를 \'언제·어디서·어떻게\'를 넣어 쓰세요.' }] },
      }),
      M({
        id: 'activity.my-rule', type: 'activity', title: '나의 보행 규칙 쓰기',
        method: '나의 보행 규칙 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '규칙마다 문장 틀("~할 때, ~에서, ~한다")을 보고 쓴다.', base: '규칙 3개를 구체성·실천 가능성·근거 기준표로 점검하며 쓴다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 친구의 막연한 규칙을 구체적으로 고쳐 주는 의견을 쓴다.' },
        activity: {
          title: '언제·어디서·무엇을 담은 규칙', tool: 'rubric-writing',
          teacher: '"\'조심해서 걷는다\'는 규칙일까요? 언제, 어디서, 무엇을 할지가 없으면 지켰는지 알 수 없어요." 기준표 세 항목을 함께 읽고 쓰게 한다. "휴대전화를 아예 안 본다"처럼 지키기 어려운 규칙을 쓴 학생에게 "내일 아침에도 지킬 수 있을까요? 멈춰서 보는 규칙은 어때요?"라고 묻는다. 규칙은 남에게 보이려는 것이 아니라 내가 지킬 수 있는 구체적 행동이어야 한다는 점을 짚는다.',
          task: '언제·어디서·무엇을 담은 나의 보행 규칙을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('버스에서 내린 뒤 길을 건널 때 지킬 나의 규칙을 쓰세요.', '버스에서 내린 뒤 길을 건널 때의 나의 규칙을 \'언제·어디서·무엇을\' 넣어 쓰세요.', ['언제·어디서를 구체적으로 썼다', '내가 실제로 할 수 있는 행동이다', '그렇게 정한 근거를 썼다'], { min: 40, max: 300, sent: [1, 3], must: [['버스', '정류장']], starter: '버스에서 내리면 ~에서 ~한다. 왜냐하면 ~', plus: '지키지 못했을 때 다시 할 방법을 썼다', d: 0.35 }),
            RWQ('걸으며 휴대전화 화면을 볼 때 지킬 나의 규칙을 쓰세요.', '걷는 중 휴대전화를 볼 때의 나의 규칙을 \'언제·어디서·무엇을\' 넣어 쓰세요.', ['언제·어디서를 구체적으로 썼다', '내가 실제로 할 수 있는 행동이다', '그렇게 정한 근거를 썼다'], { min: 40, max: 300, sent: [1, 3], must: [['멈춰', '멈추고', '서서']], starter: '메시지가 오면 ~에 멈춰 서서 ~한다.', plus: '횡단보도·주차장 출구처럼 특히 조심할 곳을 넣었다', d: 0.35 }),
            RWQ('친구의 규칙 "길에서는 조심한다"를 더 구체적으로 고치도록 의견을 쓰세요.', '친구의 막연한 규칙 "길에서는 조심한다"에 대한 의견을 쓰세요. 무엇이 빠졌는지와 고친 규칙을 함께 써요.', ['친구 규칙에서 빠진 것(언제·어디서·무엇)을 짚었다', '고친 규칙을 예로 들었다', '친구를 탓하지 않는 말로 썼다'], { min: 50, max: 300, sent: [2, 4], must: [['언제', '어디서', '무엇']], starter: '네 규칙에 ~이 들어가면 더 좋겠어. 예를 들어 ~', plus: '고친 규칙의 근거도 함께 말했다', d: 0.4, more: { conclude: '좋은 규칙은 상황과 행동이 구체적이어서 지켰는지 내가 알 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 쓴 규칙 가운데 내일 가장 먼저 지킬 것 하나를 옮겨 쓰세요.' }] },
      }),

      M({
        id: 'wrap.rule-pick', type: 'wrap', title: '구체적인 규칙 고르기',
        method: '규칙 문장 다듬기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 규칙 카드 3장을 함께 읽으며 구체적인 것을 고른다.', base: '규칙 카드 5장에서 구체적인 것만 고른다.', challenge: '남긴 막연한 카드 하나를 활동지에서 구체적으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 만든 규칙을 다듬어 봐요. 막연한 규칙과 구체적인 규칙을 나란히 놓으면 차이가 보여요." 출구 1번은 함께 읽고 고른다. "조심하기"처럼 좋은 말이지만 행동이 없는 카드를 고른 학생에게 "이 규칙을 지켰는지 내일 내가 어떻게 알 수 있을까요?"라고 묻는다. 활동지에서 막연한 카드 하나를 고쳐 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '구체적인 규칙', cards: ['메시지가 오면 멈춰 서서 본다', '길에서는 늘 조심한다', '버스가 떠난 뒤 횡단보도에서 건넌다', '안전하게 걷는다', '골목에 들어서면 이어폰 한쪽을 뺀다'] }, prompt: '언제·어디서·무엇을 할지 드러난 구체적인 규칙 카드만 고르세요.', target: { pick: ['메시지가 오면 멈춰 서서 본다', '버스가 떠난 뒤 횡단보도에서 건넌다', '골목에 들어서면 이어폰 한쪽을 뺀다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '버스에서 내린 뒤 길을 건너는 방법으로 가장 알맞은 것을 고르세요.', options: ['서 있는 버스 바로 앞으로 빨리 건넌다', '버스 바로 뒤로 돌아서 건넌다', '버스가 떠난 뒤 횡단보도에서 좌우를 보고 건넌다'], answer: 2, difficulty: 0.15, explain: '서 있는 버스는 나와 운전자를 서로 가려요. 버스가 떠난 뒤 횡단보도에서 건너요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 보행 규칙 다듬기',
          items: [
            { type: 'short', prompt: '\'길에서는 늘 조심한다\'를 언제·어디서·무엇을 넣어 고쳐 쓰세요.' },
            { type: 'check', prompt: '내일 지킬 규칙에 표시하세요.', options: ['메시지는 멈춰 서서 본다', '버스가 떠난 뒤 건넌다', '골목에서는 이어폰 한쪽을 뺀다', '횡단보도 앞에서는 화면을 내린다'] },
          ],
        },
      }),
      M({
        id: 'wrap.week-check', type: 'wrap', title: '일주일 보행 실천 점검표',
        method: '일주일 실천 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '규칙 후보를 함께 읽고 점검표에 넣을 것 3개를 고른다.', base: '규칙 후보에서 지킬 것 5개를 고르고 함정 항목은 뺀다.', challenge: '활동지에 점검할 요일과 때(등굣길·하굣길)를 정한다.' },
        wrap: {
          teacher: '"규칙은 쓰는 것보다 지키는 것이 어려워요. 일주일 동안 스스로 표시할 점검표를 만들어 봐요." 출구 1번에서 함정 항목을 넣은 학생에게 "이 항목을 지키면 오늘 배운 위험이 줄어들까요?"라고 묻는다. 활동지에 점검할 요일과 때를 정하게 하고, 다음 주 첫 시간에 지킨 날 수를 스스로 돌아보게 한다고 알린다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '일주일 보행 점검표', items: [{ id: 'stop', text: '메시지는 멈춰 서서 보기' }, { id: 'bus', text: '버스가 떠난 뒤 횡단보도로 건너기' }, { id: 'ear', text: '골목에서는 이어폰 한쪽 빼기' }, { id: 'loud', text: '무서운 길에서는 음악 크게 듣기' }, { id: 'cross', text: '횡단보도 앞에서 화면 내리기' }, { id: 'run', text: '신호가 깜박이면 화면 보며 뛰기' }, { id: 'look', text: '주차장 출구 앞에서 좌우 보기' }] }, prompt: '일주일 동안 지킬 보행 규칙만 점검표에 넣으세요.', target: { checklist: ['stop', 'bus', 'ear', 'cross', 'look'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"나는 멀티태스킹을 잘해서 화면을 보며 걸어도 괜찮다"는 말에 대한 오늘의 결론은?', options: ['맞다, 익숙하면 괜찮다', '화면에 집중하면 시야가 좁아지고 반응이 늦어진다', '낮에는 괜찮고 밤에만 위험하다'], answer: 1, difficulty: 0.2, explain: '주의 실험처럼 화면을 보면 주변 신호를 늦게 알아채요. 익숙함이 시야를 넓혀 주지는 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일주일 보행 실천 점검',
          items: [
            { type: 'table', prompt: '점검할 요일과 때를 정하고, 지킨 날에 표시하세요.', columns: ['규칙', '월', '화', '수', '목', '금'], cells: [['멈춰 서서 보기', '', '', '', '', ''], ['버스가 떠난 뒤 건너기', '', '', '', '', ''], ['골목에서 이어폰 한쪽 빼기', '', '', '', '', '']] },
            { type: 'short', prompt: '일주일 뒤 가장 지키기 어려웠던 규칙과 그 까닭을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 운전자의 주의 분산 (11학년)
  // ======================================================================================================
  {
    const M = MOD('distraction', [11]);
    const DATA = [['휴대전화 알림 보기', 9], ['내비게이션 조작', 7], ['동승자와 말다툼', 6], ['음식 먹기', 4], ['음악 고르기', 5]];
    const CHART = { type: 'bar', mode: 'read', title: '운전자들이 꼽은 주의 분산 요인(가상 설문, 상대 크기)', yLabel: '꼽은 정도', xLabel: '요인', data: DATA };
    const PHONE = { text: '가족 여행 길, 운전하는 이모가 신호 대기 중 휴대전화를 집어 들고 메시지를 읽기 시작한다. 뒷좌석의 지안이가 그 모습을 본다.', who: '지안', motif: 'house', choices: [
      { id: 'silent', text: '어른 일이니 가만있는다', result: '신호가 바뀐 뒤에도 이모는 화면을 보며 출발한다.', impact: [{ who: '이모', text: '앞차와의 거리를 늦게 알아챈다', tone: -1 }], ending: '말하지 않은 동승자도 그 차에 함께 타고 있다.' },
      { id: 'speak', text: '"이모, 제가 대신 읽어 드릴까요?"라고 말한다', result: '이모가 휴대전화를 지안이에게 건넨다.', impact: [{ who: '이모', text: '눈과 손을 운전에 돌린다', tone: 1 }],
        next: { text: '지안이가 메시지를 읽자 이모가 "답장도 좀 해 줘, 그리고 지도도 다시 찾아 줘"라고 한다.', choices: [
          { id: 'help', text: '답장과 길 찾기를 맡고, 길 안내는 짧게 말한다', result: '이모는 앞만 보고 운전한다.', impact: [{ who: '이모', text: '주의를 운전에 둔다', tone: 1 }], ending: '동승자가 손과 눈을 대신하면 운전자의 주의가 지켜진다.' },
          { id: 'show', text: '화면을 이모 쪽으로 내밀어 직접 보게 한다', result: '이모가 화면을 보느라 차로를 살짝 벗어난다.', impact: [{ who: '가족 모두', text: '위험이 다시 커진다', tone: -1 }], ending: '도와주는 척 화면을 내밀면 주의 분산을 옮겨 줄 뿐이다.' }] } },
      { id: 'scold', text: '"운전 중에 폰 보면 안 되잖아요!"라고 크게 소리친다', result: '이모가 놀라 브레이크를 세게 밟는다.', impact: [{ who: '이모', text: '당황해 운전이 흔들린다', tone: -1 }], ending: '맞는 말도 운전 중에는 놀라게 하지 않는 방식으로 해야 한다.' }] };
    const PHONE_R = [{ id: 'law', text: '운전 중 휴대전화 사용은 도로교통법이 금지한다' }, { id: 'hand', text: '동승자가 대신 읽고 조작하면 운전자의 눈과 손이 운전에 남는다' }, { id: 'wait', text: '신호 대기 중에는 무엇을 해도 괜찮다', why: '신호는 곧 바뀌고, 그때 눈이 화면에 있으면 출발과 앞차를 놓쳐요.' }, { id: 'adult', text: '어른이 하는 일에 끼어들면 안 된다', why: '같은 차에 탄 사람의 안전은 동승자에게도 걸린 일이에요.' }];

    MODS.push(
      M({
        id: 'intro.three-sort', type: 'intro', title: '눈·손·생각을 뺏는 것',
        method: '눈·손·생각을 뺏는 것', tool: 'mindmap', minutes: 6,
        levels: { easy: '카드 4장(내비게이션 조작·문자 확인·말다툼·음식 먹기)을 함께 세 칸에 나눈다.', base: '카드 6장을 나누고 나눈 근거를 말한다.', challenge: '여러 칸에 걸치는 카드(문자 확인은 눈·손·생각 모두)를 골라 왜 그런지 설명한다.' },
        intro: {
          teacher: '"운전자의 주의를 빼앗는 것은 세 갈래예요. 눈을 길에서 떼게 하는 것, 손을 운전대에서 떼게 하는 것, 생각을 운전에서 떼게 하는 것." 시연으로 카드를 칸에 나눈 뒤 "어느 카드가 가장 헷갈렸나요?"라고 묻는다. "핸즈프리 통화는 손을 안 쓰니 괜찮다"는 말이 나오면 "손은 운전대에 있어도 생각은 어디에 가 있을까요?"라고 되묻는다. 교구는 카드 한 장을 한 칸에만 놓으므로 여러 칸에 걸치는 카드는 말로 짚는다고 알린다.',
          student: '운전자의 주의를 빼앗는 행동 카드를 눈·손·생각 칸으로 나누고, 여러 칸에 걸치는 카드가 있는지 찾아보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '주의를 뺏는 것', slots: ['눈(시선)', '손(조작)', '생각(인지)'], cards: ['창밖 사고 현장 구경', '음식 꺼내 먹기', '핸즈프리로 다툼 통화', '옆 사람 화면 보기', '음료 뚜껑 열기', '걱정거리 곱씹기'] }, sequence: [{ sort: { '눈(시선)': ['창밖 사고 현장 구경', '옆 사람 화면 보기'], '손(조작)': ['음식 꺼내 먹기', '음료 뚜껑 열기'], '생각(인지)': ['핸즈프리로 다툼 통화', '걱정거리 곱씹기'] } }] },
          art: { draw: 'a paper driver at a steering wheel with three paper arrows pulling away from the eyes, the hands and the head toward a phone, a snack and a thought bubble', banner: '눈·손·생각, 무엇을 뺏길까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '계획의 \'둘 이상 칸 허용\'은 카드 판이 카드 한 장을 한 칸에만 놓아 할 수 없다. 시연은 한 칸 카드만 쓰고, 문자 확인처럼 세 칸에 걸치는 카드는 교사 발문으로 다룬다.',
      }),
      M({
        id: 'intro.driver-view', type: 'intro', title: '알림 소리에 고개 숙인 운전자',
        method: '운전석 시점 장면', tool: 'story', minutes: 7,
        levels: { easy: '장면 카드 3장을 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 운전자가 놓친 위험 하나를 짚는다.', challenge: '놓친 위험 둘(앞차 감속·건너는 보행자)을 짚고 각각 어느 장면에서 놓쳤는지 말한다.' },
        intro: {
          teacher: '"운전석에 앉았다고 생각해 봐요. 알림 소리가 울리고, 잠깐 화면을 봐요." 시연으로 장면을 차례로 놓은 뒤 "화면을 보는 동안 앞에서는 무슨 일이 있었을까요?"라고 묻는다. "잠깐 보는 건 괜찮다"는 말이 나오면 "그 \'잠깐\' 동안 차는 멈춰 있었나요, 달리고 있었나요?"라고 되묻는다. 눈을 뗀 시간에도 차는 계속 움직인다는 것이 오늘의 출발점이라고 밝힌다.',
          student: '알림을 확인하는 운전자 장면 카드를 차례로 놓고, 화면을 보는 동안 운전자가 놓친 위험을 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '운전석의 알림(가상)', cards: [{ id: 'ring', text: '휴대전화 알림이 울린다', motif: 'star' }, { id: 'look', text: '운전자가 화면을 내려다본다', motif: 'cloud' }, { id: 'slow', text: '앞차가 속도를 줄인다', motif: 'house' }, { id: 'brake', text: '고개를 들고 급히 멈춘다', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['ring', 'look', 'slow', 'brake'] }] },
          art: { draw: 'a paper car interior seen from the driver seat, a paper phone lighting up on the passenger seat, a paper car ahead with glowing brake lights through the windshield', banner: '잠깐 보는 사이 무슨 일이?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.glance-test', type: 'activity', title: '시선 떼는 시간 체험',
        method: '시선 떼는 시간 체험', tool: 'timer', minutes: 19,
        levels: { easy: '기록판에 화면을 볼 때·안 볼 때 놓친 신호 수를 1회씩 적는다.', base: '같은 체험을 3회씩 하고 기록판 6칸을 모두 적는다.', challenge: '3회씩 적은 뒤 결과를 정지 거리와 잇는 해석을 스스로 점검 항목으로 마무리한다.' },
        activity: {
          title: '화면을 보는 동안 놓친 신호', tool: 'timer',
          teacher: '"짝이 칠판 앞에서 신호 카드(빨강·초록)를 바꿔 드는 동안, 한 사람은 화면에 뜬 문장을 읽어요. 몇 번 바뀌었는지 맞힐 수 있을까요?" 자리에 앉아서만 하고 실제 운전이나 걷기와 섞지 않는다. 체험 차례를 먼저 놓고, 기록은 우리 짝의 값을 그대로 적게 한다. "나는 화면 보면서도 다 봤다"는 학생에게 "기록판 두 줄이 정말 같나요?"라고 묻는다. 마지막 문항에서 눈을 뗀 동안 차가 움직인 거리만큼 멈추는 데 더 걸린다는 점을 짚는다.',
          task: '시선 떼기 체험 차례를 놓고, 짝과 체험한 기록을 적은 뒤 결과를 해석해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '시선 떼기 체험의 차례를 놓으세요.', toolOptions: { title: '체험 차례', cards: ['놓친 횟수 적기', '짝이 신호 카드를 바꿔 들기', '화면 문장 읽기 시작', '바뀐 횟수 말하기'] }, target: { order: ['화면 문장 읽기 시작', '짝이 신호 카드를 바꿔 들기', '바뀐 횟수 말하기', '놓친 횟수 적기'] }, difficulty: 0.2 },
            { prompt: '우리 짝 체험에서 놓친 신호 수를 기록판에 모두 적으세요.', toolOptions: { title: '놓친 신호 수(우리 짝 기록)', unit: '번', fields: ['화면 볼 때 1회', '화면 볼 때 2회', '화면 볼 때 3회', '안 볼 때 1회', '안 볼 때 2회', '안 볼 때 3회'] }, target: { records: true }, difficulty: 0.25,
              levels: { easy: { prompt: '우리 짝 체험에서 놓친 신호 수를 기록판에 적으세요(1회씩).', toolOptions: { fields: ['화면 볼 때 1회', '안 볼 때 1회'] } } } },
            { prompt: '체험 결과를 운전과 이어 해석했는지 스스로 점검하세요.', toolOptions: { title: '결과 해석 점검' }, target: { selfCheck: ['화면을 볼 때와 안 볼 때 기록을 견주었다', '눈을 뗀 동안에도 차는 계속 움직인다는 점을 말했다', '늦게 알아챈 만큼 멈추는 거리가 길어진다는 점을 이었다'] }, difficulty: 0.2, conclude: '시선을 떼는 시간은 짧아도 그동안 차는 달리고, 위험을 늦게 알아챈 만큼 멈추는 거리가 길어져요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 짝 기록에서 알게 된 점을 \'화면을 보면 ~, 그래서 운전 중에는 ~\'으로 한 문장 쓰세요.' }] },
        notes: '체험은 교실 자리에서만 한다. 교구는 기록을 적었는지·점검했는지만 판정하고 값의 크기는 판정하지 않는다. 기록은 우리 반 체험 값이며 정지 거리 수치는 다루지 않는다.',
      }),
      M({
        id: 'activity.trend-chart', type: 'activity', title: '주의 분산 요인 막대그래프',
        method: '주의 분산 요인 경향', tool: 'chart', minutes: 18,
        levels: { easy: '막대 끝에 상대 크기 값이 보여 큰 막대부터 읽는다.', base: '값 표시 없이 막대 5개를 읽고, 동승자가 줄일 수 있는 요인을 고른다.', challenge: '값 표시 없이 풀고, 마지막 문항에서 설문 방식(스스로 꼽음)의 한계를 짚는다.' },
        activity: {
          title: '가상 설문 그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 가상의 운전자 설문이에요. 상대 크기만 나타내요." 먼저 가장 큰 막대를 읽고, 동승자가 줄일 수 있는 요인을 고르게 한다. \'음식 먹기\'를 동승자와 상관없다고 보는 학생에게 "음식을 건네 주거나 뚜껑을 열어 주는 사람은 누구일까요?"라고 묻는다. 마지막 문항에서 운전자가 스스로 꼽은 설문은 실제 위험의 크기와 다를 수 있다는 점을 짚는다.',
          task: '가상 설문 막대그래프를 읽고 동승자가 줄일 수 있는 요인과 자료의 한계를 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 설문에서 운전자들이 가장 많이 꼽은 주의 분산 요인을 고르세요.', toolOptions: Object.assign({}, CHART, { question: '가장 큰 막대는?', choices: DATA.map((d) => d[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '휴대전화 알림 보기와 내비게이션 조작의 상대 크기를 더하면 얼마인가요?', toolOptions: Object.assign({}, CHART, { question: '두 막대의 합은?' }), target: { value: 16 }, difficulty: 0.3 },
            { prompt: '보기 가운데 동승자가 가장 직접 줄일 수 있는 요인을 고르세요.', toolOptions: Object.assign({}, CHART, { question: '동승자가 직접 줄일 수 있는 것은?', choices: ['내비게이션 조작', '도로 공사', '날씨'], why: ['', '도로 공사는 동승자가 바꿀 수 없어요.', '날씨는 동승자가 바꿀 수 없어요.'] }), target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '이 가상 설문만으로는 알 수 없는 것을 고르세요.', toolOptions: Object.assign({}, CHART, { question: '이 설문으로 알 수 없는 것은?', choices: ['운전자들이 휴대전화 알림을 가장 많이 꼽았는지', '어느 요인이 실제 사고를 가장 많이 일으키는지', '음식 먹기를 꼽은 정도가 음악 고르기보다 작은지'], why: ['가장 큰 막대로 알 수 있어요.', '', '두 막대를 견주면 알 수 있어요.'] }), target: { pick: 1 }, difficulty: 0.4, conclude: '설문은 운전자가 스스로 꼽은 것이라 실제 사고 원인의 크기와 다를 수 있어요. 그래도 동승자가 줄일 수 있는 요인은 분명히 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프에서 동승자가 줄일 수 있는 요인 둘을 고르고, 내가 할 행동을 하나씩 쓰세요.' }] },
        notes: '그래프는 수업용 가상 상대 크기다. 실제 통계로 말하지 않는다.',
      }),
      M({
        id: 'activity.passenger-dilemma', type: 'activity', title: '이모의 휴대전화를 본 동승자',
        method: '운전자의 휴대전화를 본 동승자 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(답장·길 찾기 부탁)까지 가서 결과를 보고 관계·안전 근거를 고른다.', challenge: '확인 전에는 영향 표시가 숨겨진 채 고르고, 소리치는 길도 끝까지 가 본 뒤 견준다.' },
        activity: {
          title: '뒷좌석 지안이의 갈림길', tool: 'dilemma',
          teacher: '"신호 대기 중 이모가 메시지를 읽어요. 지안이는 가만있을까요, 말할까요, 대신 해 줄까요?" 선택마다 이모의 눈과 손이 어디에 가는지 읽게 한다. \'가만있기\'를 고른 학생에게 "어른이니까 괜찮다는 생각이 출발하는 장면에서 지안이를 지켜 주었나요?"라고 묻고, 소리치는 길을 고른 학생에게 "맞는 말인데, 운전 중인 사람을 놀라게 하면 어떻게 될까요?"라고 묻는다. 존중하면서 대신 맡는 말이 동승자의 힘이라는 점을 짚는다.',
          task: '이모의 휴대전화를 본 지안이의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('운전자의 눈과 손을 운전에 돌려주는 길을 따라가고 근거를 고르세요.', PHONE, [['speak', 'help']], PHONE_R, ['law', 'hand'], { d: 0.4 }),
            EXPLOREQ('가만있는 길과 소리치는 길도 끝까지 가 보고 결과를 견주세요.', PHONE, PHONE_R, ['다른 두 길의 끝 결과를 확인했다', '관계와 안전에 미친 영향을 견주었다'], { d: 0.35 }),
            DILQ('운전하는 형이 이어폰으로 통화하며 화를 내는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '조수석에 탄 하율이 옆에서 운전하는 형이 이어폰 통화로 친구와 크게 다툰다. 차가 점점 빨라진다.', who: '하율', motif: 'cloud', choices: [
              { id: 'join', text: '형 편을 들며 통화에 끼어든다', result: '형이 더 흥분해 속도를 낸다.', impact: [{ who: '형', text: '생각이 운전에서 더 멀어진다', tone: -1 }], ending: '다툼에 끼어들면 운전자의 생각을 더 빼앗는다.' },
              { id: 'pause', text: '"형, 통화는 세우고 하자"라고 차분히 말한다', result: '형이 잠시 말을 멈춘다.', impact: [{ who: '형', text: '운전에 다시 생각을 돌린다', tone: 1 }],
                next: { text: '형이 "핸즈프리라 괜찮아"라고 한다.', choices: [
                  { id: 'rest', text: '"손은 괜찮아도 생각은 통화에 가 있잖아. 휴게소에서 하자"라고 한다', result: '형이 통화를 끊고 휴게소에 들른다.', impact: [{ who: '형', text: '안전하게 통화를 마친다', tone: 1 }], ending: '핸즈프리도 생각을 빼앗는다는 걸 차분히 말하면 대안이 생긴다.' },
                  { id: 'drop', text: '더 말하면 싸울까 봐 그만둔다', result: '통화가 다시 이어지고 속도가 오른다.', impact: [{ who: '하율', text: '불안한 채로 간다', tone: -1 }], ending: '한 번 말하고 멈추면 위험도 그대로 이어진다.' }] } }] },
              [['pause', 'rest']], [{ id: 'mind', text: '핸즈프리 통화도 생각을 빼앗는다' }, { id: 'calm', text: '차분히 말하고 대안을 함께 내면 운전자가 받아들이기 쉽다' }, { id: 'hands', text: '손만 운전대에 있으면 괜찮다', why: '생각이 다툼에 가 있으면 위험을 늦게 알아채요.' }], ['mind', 'calm'], { d: 0.35, more: { conclude: '동승자는 운전자의 눈·손·생각을 지켜 줄 수 있어요. 놀라게 하지 않고 차분하게, 대안과 함께 말해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가족 운전자가 운전 중 휴대전화를 볼 때 내가 할 수 있는 말 하나를 존중하는 표현으로 쓰세요.' }] },
        notes: '운전 중 휴대전화 사용 금지는 도로교통법 취지로만 다루고 범칙금은 말하지 않는다. 학생의 가족이 실제로 그러는지 묻지 않는다.',
      }),
      M({
        id: 'activity.passenger-rule', type: 'activity', title: '동승자 수칙 제안서',
        method: '동승자 수칙 제안서', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '문항마다 문장 틀을 보고 수칙을 쓴다.', base: '수칙 3개와 까닭을 담은 제안서를 기준표로 점검하며 쓴다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 "동승자가 너무 참견한다"는 반대 의견에 답한다.' },
        activity: {
          title: '동승자가 지킬 수칙 제안', tool: 'rubric-writing',
          teacher: '"우리 반 이름으로 \'동승자 수칙\'을 제안한다면 무엇을 넣을까요? 수칙과 까닭이 함께 있어야 제안이 돼요." 기준표를 함께 읽는다. "운전자를 방해하지 않는다"처럼 막연한 수칙을 쓴 학생에게 "방해하지 않으려면 구체적으로 무엇을 해 줄 수 있을까요? 길 안내? 전화 대신 받기?"라고 묻는다. 반대 의견에 답할 때는 상대 말에도 맞는 부분이 있음을 인정하게 한다.',
          task: '동승자가 지킬 수칙과 까닭을 담은 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('동승자가 지킬 수칙 하나와 그 까닭을 쓰세요(눈 지키기).', '운전자의 눈(시선)을 지키는 동승자 수칙 하나와 까닭을 쓰세요.', ['구체적인 행동으로 썼다', '운전자의 눈과 이어지는 까닭을 썼다', '동승자가 실제로 할 수 있는 일이다'], { min: 40, max: 300, sent: [2, 3], must: [['까닭', '왜냐하면', '때문에']], starter: '동승자는 ~한다. 왜냐하면 ~', plus: '언제 그 수칙이 특히 필요한지 썼다', d: 0.35 }),
            RWQ('동승자 수칙 세 가지(눈·손·생각)를 담은 짧은 제안서를 쓰세요.', '우리 반 동승자 수칙 제안서: 눈·손·생각을 지키는 수칙을 하나씩, 모두 세 가지 쓰세요.', ['수칙 세 가지를 눈·손·생각으로 나누었다', '수칙마다 까닭을 썼다', '존중하는 말투로 썼다'], { min: 80, max: 400, sent: [3, 6], must: [['생각', '집중']], starter: '첫째, 눈을 지키려고 ~. 둘째, 손을 지키려고 ~. 셋째, ~', plus: '운전자가 거절했을 때의 대안도 썼다', d: 0.4 }),
            RWQ('"동승자가 너무 참견하면 운전자가 오히려 신경 쓰인다"는 반대 의견에 답하세요.', '반대 의견에 답하세요: "동승자가 참견하면 운전자가 오히려 신경 쓰인다." 인정할 부분과 내 생각을 나누어 써요.', ['반대 의견에서 인정할 부분을 썼다', '그래도 수칙이 필요한 까닭을 썼다', '참견이 되지 않는 말하기 방법을 제안했다'], { min: 60, max: 400, sent: [3, 5], must: [['하지만', '그래도', '그러나']], starter: '그 말처럼 ~은 맞다. 하지만 ~', plus: '출발 전에 미리 약속하는 방법을 제안했다', d: 0.45, more: { conclude: '좋은 동승자 수칙은 구체적이고, 운전자를 존중하는 방식으로 눈·손·생각을 지켜 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '제안서의 수칙 가운데 우리 가족 차에서 가장 먼저 써 볼 것 하나를 쓰세요.' }] },
      }),

      M({
        id: 'wrap.focus-map', type: 'wrap', title: '집중을 지키는 방법 마인드맵',
        method: '집중을 지키는 방법 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 이름(운전자·동승자·차 설정)을 읽어 주며 카드를 함께 단다.', base: '가지마다 카드 2장씩 단다.', challenge: '가장 먼저 실천할 방법 하나를 골라 출구 3번에 까닭과 함께 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 세 가지로 모아 봐요. 운전자가 할 일, 동승자가 할 일, 출발 전에 차에서 설정할 일." 출구 1번에서 \'신호 대기 중 메시지 답장\'을 어느 가지에 넣으려는 학생에게 "그건 집중을 지키는 방법일까요, 빼앗는 행동일까요?"라고 묻는다. 출구 3번에서 실천 우선순위를 정하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '운전 중 집중 지키기', slots: ['운전자', '동승자', '차 설정'], cards: ['휴대전화는 손 닿지 않는 곳에', '정차한 뒤에 통화하기', '길 안내를 대신 말해 주기', '운전 중 다툼 꺼내지 않기', '출발 전 목적지 입력', '알림을 꺼 두는 운전 모드', '신호 대기 중 메시지 답장'] }, prompt: '집중을 지키는 방법 카드를 운전자·동승자·차 설정 가지에 다세요. 맞지 않는 카드는 남기세요.', target: { sort: { 운전자: ['휴대전화는 손 닿지 않는 곳에', '정차한 뒤에 통화하기'], 동승자: ['길 안내를 대신 말해 주기', '운전 중 다툼 꺼내지 않기'], '차 설정': ['출발 전 목적지 입력', '알림을 꺼 두는 운전 모드'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '"핸즈프리 통화는 전혀 위험하지 않다"에 대한 오늘의 결론은?', options: ['손을 안 쓰니 전혀 위험하지 않다', '손은 자유로워도 생각을 빼앗을 수 있다', '고속도로에서만 위험하다'], answer: 1, difficulty: 0.15, explain: '주의 분산은 눈·손·생각 세 갈래예요. 핸즈프리도 생각을 통화에 가져가요.' },
            { type: 'short', prompt: '가장 먼저 실천할 방법 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '운전 중 집중 지키기',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '주의 분산은 눈(시선)·손(조작)·___(인지) 세 갈래다.', answer: '생각' },
            { type: 'check', prompt: '동승자로서 해 볼 것에 표시하세요.', options: ['길 안내 대신 말하기', '운전자 대신 전화 받기', '운전 중 다툼 꺼내지 않기', '출발 전 목적지 함께 입력하기'] },
          ],
        },
      }),
      M({
        id: 'wrap.family-talk', type: 'wrap', title: '가족 운전자에게 건네는 말',
        method: '가족 운전자에게 건네는 말', tool: 'story', minutes: 6,
        levels: { easy: '교사가 말풍선 보기 카드를 함께 읽으며 빈칸을 채운다.', base: '말풍선 두 칸을 카드로 채워 존중하면서도 분명한 한마디를 만든다.', challenge: '활동지에 나만의 말을 짓고 그렇게 말한 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 가족에게 한마디로 건넨다면? 존중하면서도 분명해야 해요." 출구 1번에서 \'그것도 몰라요?\' 같은 카드를 고른 학생에게 "이 말을 들은 운전자는 휴대전화를 내려놓을까요, 기분이 상할까요?"라고 묻는다. 활동지에는 우리 집 운전자에게 맞는 말을 스스로 짓게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '운전 중에는 휴대전화를 ___.' }, { id: 'f2', who: '나', label: '급한 연락은 제가 ___.' }], cards: ['저한테 맡겨 주세요', '대신 읽어 드릴게요', '그것도 몰라요', '잠깐은 보셔도 돼요'] }, prompt: '가족 운전자에게 건넬 말풍선을 존중하면서도 분명한 말로 채우세요.', target: { fill: { f1: '저한테 맡겨 주세요', f2: '대신 읽어 드릴게요' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '신호 대기 중 운전자가 휴대전화를 보려 할 때 동승자의 말로 가장 알맞은 것은?', options: ['신호 대기니까 괜찮아요', '제가 대신 볼게요, 신호 바뀌면 바로 출발하셔야 해요', '아무 말도 하지 않는다'], answer: 1, difficulty: 0.15, explain: '신호 대기 중에도 신호는 곧 바뀌어요. 동승자가 대신 맡으면 운전자의 눈이 길에 남아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '가족 운전자에게 건네는 말',
          items: [
            { type: 'short', prompt: '우리 집 운전자에게 건넬 나만의 한마디를 쓰세요.' },
            { type: 'short', prompt: '그 말을 고른 까닭(존중·분명함)을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 7. 음주·졸음 운전과 동승자의 개입 (11학년)
  // ======================================================================================================
  {
    const M = MOD('drunk-drowsy', [11]);
    const KEYS = { text: '명절 저녁, 술을 마신 삼촌이 차 열쇠를 들고 "가까우니까 내가 데려다줄게"라고 한다. 집까지는 차로 15분 거리다.', who: '유나', motif: 'moon', choices: [
      { id: 'ride', text: '삼촌이 괜찮다고 하니 차에 탄다', result: '삼촌이 출발하자 차가 차로 안에서 조금씩 흔들린다.', impact: [{ who: '유나', text: '음주 운전 차에 함께 탄다', tone: -1 }],
        next: { text: '교차로에서 삼촌이 신호를 늦게 보고 급히 멈춘다.', choices: [
          { id: 'stay', text: '거의 다 왔으니 그대로 간다', result: '집 앞까지 가지만 내내 마음을 졸인다.', impact: [{ who: '유나', text: '운 좋게 도착했을 뿐 위험은 그대로였다', tone: -1 }], ending: '무사히 도착한 음주 운전도 위험한 운전이었다는 사실은 바뀌지 않는다.' },
          { id: 'getoff', text: '"삼촌, 여기서 세워 주세요"라고 해 안전한 곳에서 내린다', result: '편의점 앞에 내려 보호자에게 연락한다.', impact: [{ who: '유나', text: '늦었지만 위험에서 벗어난다', tone: 1 }], ending: '탄 뒤라도 멈추고 내릴 수 있다. 그래도 처음부터 타지 않는 것이 가장 안전하다.' }] } },
      { id: 'refuse', text: '"삼촌 술 드셨잖아요, 저는 안 탈게요"라고 말한다', result: '삼촌이 "나 하나도 안 취했어"라며 서운해한다.', impact: [{ who: '삼촌', text: '잠깐 서운하다', tone: 0 }],
        next: { text: '삼촌이 "그럼 너 혼자 어떻게 갈래?"라며 다시 열쇠를 든다.', choices: [
          { id: 'alt', text: '대리운전이나 다른 가족의 운전을 함께 찾자고 한다', result: '술을 마시지 않은 이모가 운전하기로 한다.', impact: [{ who: '삼촌', text: '운전대를 잡지 않는다', tone: 1 }],
            next: { text: '집에 도착하자 삼촌이 "내일 차를 가지러 와야겠네"라고 한다.', choices: [
              { id: 'next', text: '"내일 아침에도 술이 남았는지 보고 가세요"라고 덧붙인다', result: '삼촌이 다음 날 오후에 차를 가지러 간다.', impact: [{ who: '삼촌', text: '다음 날 운전까지 조심한다', tone: 1 }], ending: '술은 시간이 지나도 바로 깨지 않는다. 다음 날 운전까지 챙기는 것이 끝맺음이다.' },
              { id: 'done', text: '오늘 일은 끝났으니 아무 말도 하지 않는다', result: '삼촌이 이른 아침 바로 차를 몰고 출근한다.', impact: [{ who: '삼촌', text: '몸에 남은 술로 운전할 수 있다', tone: -1 }], ending: '오늘 밤을 막아도 내일 아침의 위험은 따로 남는다.' }] } },
          { id: 'alone', text: '"그럼 혼자 걸어갈게요"라며 밤길을 나선다', result: '삼촌은 결국 혼자 차를 몰고 집에 간다.', impact: [{ who: '삼촌', text: '음주 운전을 막지 못한다', tone: -1 }], ending: '나는 타지 않았지만 대안을 내지 않으면 음주 운전은 그대로 일어난다.' }] } },
      { id: 'hide', text: '몰래 열쇠를 숨긴다', result: '삼촌이 열쇠를 찾다 화를 내고 가족 사이에 다툼이 생긴다.', impact: [{ who: '가족', text: '분위기가 험해진다', tone: -1 }], ending: '몰래 막는 것보다 함께 대안을 찾는 것이 가족을 지킨다.' }] };
    const KEYS_R = [{ id: 'crime', text: '음주 운전은 도로교통법이 금지하는 범죄다' }, { id: 'alt', text: '거절할 때 대리운전·다른 운전자 같은 대안을 함께 내야 음주 운전을 막는다' }, { id: 'time', text: '술은 시간이 지나도 바로 깨지 않는다' }, { id: 'near', text: '가까운 거리는 조금 마셔도 괜찮다', why: '거리와 상관없이 술은 판단을 흐리고 반응을 늦춰요.' }, { id: 'fine', text: '본인이 안 취했다고 하면 믿어도 된다', why: '술은 스스로 취한 정도를 판단하는 힘부터 흐려요.' }];

    MODS.push(
      M({
        id: 'intro.drowsy-signs', type: 'intro', title: '졸음 신호 찾기',
        method: '졸음 신호 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '카드 3장 가운데 졸음 신호를 함께 고른다.', base: '카드 6장 가운데 졸음 신호만 고르고, 졸음을 쫓는 방법처럼 보이는 함정 카드는 남긴다.', challenge: '고른 신호마다 해야 할 대처(쉬기·교대)를 말로 잇는다.' },
        intro: {
          teacher: '"운전자가 졸리다는 것을 몸은 먼저 알려 줘요. 어떤 신호일까요?" 시연으로 졸음 신호 카드를 바구니에 담는 모습을 보여 준다. "창문을 열고 음악을 크게 틀면 졸음이 사라진다"는 카드를 신호로 넣으려는 학생이 있으면 "이건 신호일까요, 신호를 덮으려는 방법일까요? 덮으면 졸음은 사라질까요?"라고 되묻는다. 신호가 오면 덮지 말고 쉬는 것이 오늘의 결론이 될 거라고 밝힌다.',
          student: '운전자의 몸이 보내는 졸음 신호 카드를 골라 바구니에 담고, 졸음을 덮으려는 방법 카드는 남겨 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '졸음 신호', cards: ['하품이 자꾸 난다', '눈꺼풀이 무겁다', '차로를 넘나든다', '창문을 열고 음악 키우기', '지나온 길이 기억나지 않는다', '껌 씹기'] }, sequence: [{ pick: ['하품이 자꾸 난다', '눈꺼풀이 무겁다', '차로를 넘나든다', '지나온 길이 기억나지 않는다'] }] },
          art: { draw: 'a paper driver yawning at the wheel at dusk, heavy paper eyelids, a dashed paper lane line the car is drifting over, a paper rest-area sign ahead', banner: '몸이 보내는 졸음 신호', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.keys-scene', type: 'intro', title: '회식 뒤 열쇠를 든 어른',
        method: '열쇠를 든 어른 장면', tool: 'story', minutes: 7,
        levels: { easy: '장면 카드 3장을 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 개입할 수 있었던 순간 하나를 짚는다.', challenge: '개입할 수 있었던 순간 둘(술자리 전·열쇠를 들 때)을 짚고 각각 무엇을 할 수 있었는지 말한다.' },
        intro: {
          teacher: '"가상의 회식 장면이에요. 어른 한 분이 회식 뒤 차 열쇠를 꺼내요." 시연으로 장면을 차례로 놓고 "누가, 언제 이 운전을 막을 수 있었을까요?"라고 묻는다. "조금 마시고 시간이 지나면 괜찮다"는 말이 나오면 "몇 시간이면 괜찮은지 내 몸으로 알 수 있을까요? 술은 그 판단부터 흐려요"라고 되묻는다. 막을 수 있는 순간은 열쇠를 든 때만이 아니라는 것이 오늘의 질문이라고 밝힌다.',
          student: '회식 뒤 차 열쇠를 든 어른 장면 카드를 차례로 놓고, 음주 운전을 막을 수 있었던 순간이 언제였는지 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '회식이 끝난 밤(가상)', cards: [{ id: 'car', text: '차를 몰고 회식 장소에 간다', motif: 'house' }, { id: 'drink', text: '회식에서 술을 마신다', motif: 'moon' }, { id: 'wait', text: '"한 시간 쉬었으니 괜찮겠지"라고 한다', motif: 'cloud' }, { id: 'key', text: '차 열쇠를 꺼내 든다', motif: 'star' }], shuffle: false }, sequence: [{ order: ['car', 'drink', 'wait', 'key'] }] },
          art: { draw: 'a paper adult under a street lamp at night holding up a paper car key, a paper restaurant behind with glasses on a table, a dotted paper path splitting toward a taxi sign and a parked car', banner: '언제 막을 수 있었을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '술을 권하거나 마시는 장면을 자세히 그리지 않는다. 학생 가족의 음주 운전 여부를 묻지 않는다.',
      }),

      M({
        id: 'activity.keys-dilemma', type: 'activity', title: '차 열쇠 앞 갈림길',
        method: '차 열쇠 앞 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(삼촌이 다시 열쇠를 드는 장면)까지 가서 결과를 보고 근거를 고른다.', challenge: '세 번째 갈림길(다음 날 차를 가지러 가는 장면)까지 따라가 근거를 고르고, 확인 전에는 영향 표시가 숨겨진 채 다른 길과 견준다.' },
        activity: {
          title: '유나와 삼촌의 차 열쇠', tool: 'dilemma',
          teacher: '"술을 마신 삼촌이 데려다주겠대요. 유나는 탈까요, 거절할까요, 열쇠를 숨길까요?" 선택마다 누가 운전대를 잡는지 소리 내어 읽게 한다. 거절만 하고 혼자 걸어가는 길을 고른 학생에게 "유나는 안전해졌지만, 삼촌의 운전은 막았나요?"라고 묻는다. "다음 날은 괜찮다"는 말에는 "술이 몸에서 빠지는 데 걸리는 시간을 삼촌이 정확히 알 수 있을까요?"라고 되묻는다. 타지 않기와 대안 내기가 함께여야 예방이 된다는 점을 짚는다.',
          task: '유나의 차 열쇠 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('음주 운전 차에 타지 않고 운전도 막는 길을 따라가고 근거를 고르세요.', KEYS, [['refuse', 'alt', 'next']], KEYS_R, ['crime', 'alt'], { d: 0.4 }),
            EXPLOREQ('차에 타는 길도 끝까지 가 보고 결과를 견주세요.', KEYS, KEYS_R, ['다른 길의 끝 결과를 확인했다', '유나와 삼촌에게 생긴 결과를 따로 짚었다'], { d: 0.35 }),
            DILQ('장거리 운전 중 아빠가 하품을 계속하는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '밤 고속도로, 운전하는 아빠가 하품을 계속하고 차가 차로 가장자리로 쏠린다. 아빠는 "창문 열면 괜찮아"라고 한다.', who: '태오', motif: 'moon', choices: [
              { id: 'window', text: '창문을 열고 음악을 크게 틀어 드린다', result: '잠깐 깨는 듯하다가 다시 눈꺼풀이 무거워진다.', impact: [{ who: '가족', text: '졸음 운전이 이어진다', tone: -1 }], ending: '바람과 음악은 졸음을 잠깐 가릴 뿐 없애지 못한다.' },
              { id: 'rest', text: '"다음 휴게소에서 쉬어 가요"라고 말한다', result: '아빠가 "조금만 더 가면 되는데"라며 망설인다.', impact: [{ who: '아빠', text: '쉴지 고민한다', tone: 0 }],
                next: { text: '휴게소 안내 표지가 보인다.', choices: [
                  { id: 'stop', text: '"졸음 신호가 왔어요, 꼭 들러요"라고 한 번 더 말한다', result: '휴게소에서 쉬고 엄마와 운전을 바꾼다.', impact: [{ who: '가족', text: '안전하게 도착한다', tone: 1 }], ending: '졸음 신호가 오면 쉬거나 교대하는 것만이 답이다.' },
                  { id: 'pass', text: '아빠가 괜찮다니 그냥 지나친다', result: '다음 휴게소까지 차가 몇 번 더 쏠린다.', impact: [{ who: '가족', text: '위험이 길어진다', tone: -1 }], ending: '쉬어 갈 기회를 지나치면 졸음은 더 깊어진다.' }] } }] },
              [['rest', 'stop']], [{ id: 'sign', text: '하품·차로 쏠림은 졸음 신호라 쉬어야 한다' }, { id: 'swap', text: '쉬거나 다른 사람과 운전을 바꾸는 것이 대안이다' }, { id: 'wind', text: '창문을 열면 졸음이 사라진다', why: '바람과 음악은 졸음을 잠깐 가릴 뿐이에요.' }], ['sign', 'swap'], { d: 0.35, more: { conclude: '음주와 졸음 모두 판단과 반응을 떨어뜨려요. 동승자는 타지 않기·쉬자고 말하기·대안 찾기로 개입할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '술을 마신 어른이 데려다주겠다고 할 때 내가 낼 수 있는 대안 두 가지를 쓰세요.' }] },
        notes: '혈중알코올농도 기준 수치와 형량은 다루지 않는다. 음주 운전은 도로교통법이 금지한다는 취지만 말한다.',
      }),
      M({
        id: 'activity.body-effect', type: 'activity', title: '술과 졸음이 몸에 미치는 영향',
        method: '술과 졸음이 몸에 미치는 영향', tool: 'body', minutes: 18,
        levels: { easy: '고른 기관·부분의 이름이 바로 보인다.', base: '이름 없이 판단(뇌)·시각(눈)·반응(손목·발목) 자리를 고르고, 영향 설명 보기를 함께 고른다.', challenge: '읽기 글자는 맞힌 뒤에만 보이고, 활동지에 부위마다 영향 설명을 직접 쓴다.' },
        activity: {
          title: '판단·시각·반응이 무너지는 자리', tool: 'body',
          teacher: '"운전에 필요한 세 가지는 판단, 보기, 반응이에요. 몸의 어디가 맡을까요?" 문항마다 부위를 고르고 그 부위에 술과 졸음이 주는 영향을 고르게 한다. "술은 기분만 좋게 하고 운전 실력은 그대로다"는 학생에게 "판단을 맡은 곳이 흐려지면, 내가 흐려졌다는 것도 알아챌 수 있을까요?"라고 묻는다. 종이 몸에는 손·발 칸이 없어 운전대와 페달을 다루는 자리는 손목·발목으로 고른다고 알린다.',
          task: '판단·시각·반응에 관련된 몸의 자리를 고르고 술과 졸음의 영향을 골라요.', levels: { easy: { names: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '위험을 알아보고 운전할지 말지 판단하는 일을 맡은 기관을 고르세요.', toolOptions: { mode: 'find', organs: ['뇌', '심장', '폐', '위', '간'] }, target: { sel: '뇌' }, difficulty: 0.15 },
            { prompt: '운전 중 길과 신호를 보는 부분을 고르고, 술·졸음이 이 부분에 주는 영향을 고르세요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '코', '목', '어깨', '허리'], ask: { q: '술·졸음이 이 부분에 주는 영향은?', choices: ['더 멀리 또렷하게 보인다', '보는 범위가 좁아지고 움직임을 늦게 알아챈다', '아무 영향이 없다'], why: ['술과 졸음은 보는 힘을 높이지 않아요.', '', '보는 힘도 떨어져요.'] } }, target: { parts: ['눈'], pick: 1 }, difficulty: 0.3 },
            { prompt: '운전대를 돌리고 브레이크를 밟는 동작에 쓰는 자리(손목·발목)를 고르고 영향을 고르세요.', toolOptions: { mode: 'parts', parts: ['손목', '발목', '무릎', '팔꿈치', '어깨', '귀'], ask: { q: '술·졸음이 이 동작에 주는 영향은?', choices: ['반응이 늦어져 멈추는 데 더 오래 걸린다', '반응이 빨라진다', '힘이 세져 더 잘 멈춘다'], why: ['', '술과 졸음은 반응을 늦춰요.', '힘이 아니라 반응 시간이 문제예요.'] } }, target: { parts: ['손목', '발목'], pick: 0 }, difficulty: 0.35 },
            { prompt: '술을 마신 사람이 "나 하나도 안 취했어"라고 말하는 까닭과 가장 가까운 것을 고르세요.', toolOptions: { mode: 'find', organs: ['뇌', '심장', '폐', '위', '간'], ask: { q: '판단을 맡은 기관과 그 까닭은?', choices: ['술이 판단을 흐려 스스로 취한 정도도 잘 알지 못한다', '술을 마시면 판단이 더 정확해진다', '술은 위에만 머물러 판단과 상관없다'], why: ['', '판단은 흐려져요.', '술은 몸 전체에 퍼져 판단에 영향을 줘요.'] } }, target: { sel: '뇌', pick: 0 }, difficulty: 0.4, conclude: '술과 졸음은 판단(뇌)·보기(눈)·반응(손발의 동작)을 함께 떨어뜨리고, 스스로 그 변화를 알아채는 힘까지 흐려요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '부위마다 술·졸음의 영향을 직접 쓰세요.', columns: ['부위', '운전에서 하는 일', '술·졸음의 영향'], cells: [['뇌', '', ''], ['눈', '', ''], ['손목·발목', '', '']] }] },
        notes: '종이 몸에 손·발 칸이 없어 운전대·페달을 다루는 동작은 손목·발목으로 고른다. 계획의 \'영향 설명 잇기(match)\'는 body 의 match 모드가 기관과 기본 일만 잇기 때문에 부위 고르기에 ask 보기를 붙여 대신했다.',
      }),
      M({
        id: 'activity.rest-plan', type: 'activity', title: '장거리 운전 휴식 계획',
        method: '장거리 운전 휴식 계획', tool: 'clock', minutes: 18,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다.', base: '5분 단위로 시각을 나타내고 정한 까닭을 짝에게 말한다.', challenge: '작은 눈금 없이 1분 단위로 나타내고, 점심 뒤 졸음이 오기 쉬운 때를 반영한다.' },
        activity: {
          title: '쉬어 갈 시각 시계에 나타내기', tool: 'clock',
          teacher: '"가상의 가족 여행이에요. 우리 가족 약속은 \'2시간마다 쉬고, 졸음 신호가 오면 바로 쉰다\'예요. 이 간격은 수업에서 정한 연습용 약속이에요." 문항마다 출발 시각에서 세어 시계에 나타내게 한다. "목적지까지 한 번에 가는 게 빠르다"는 학생에게 "졸음 신호가 온 뒤의 30분과 쉬고 난 뒤의 30분이 같을까요?"라고 묻는다. 마지막 문항에서 정해진 간격보다 몸의 신호가 먼저라는 점을 짚는다.',
          task: '가상 가족 여행에서 출발 시각과 쉬어 갈 시각을 시계에 나타내요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1, showMinuteMarks: false } },
          items: [
            { prompt: '가상 가족 여행은 아침 9시에 출발해요. 출발 시각을 시계에 나타내세요.', toolOptions: {}, target: { h: 9, m: 0 }, difficulty: 0.1 },
            { prompt: '우리 가족 약속은 2시간마다 쉬기예요(연습용 약속). 아침 9시에 출발했다면 첫 휴식 시각을 나타내세요.', toolOptions: {}, target: { h: 11, m: 0 }, difficulty: 0.2 },
            { prompt: '첫 휴식 뒤 11시 30분에 다시 출발했어요. 같은 약속으로 두 번째 휴식 시각을 나타내세요.', toolOptions: {}, target: { h: 1, m: 30 }, difficulty: 0.35 },
            { prompt: '점심을 먹고 2시에 출발했는데 2시 30분에 운전자가 하품을 계속해요. 졸음 신호가 오면 바로 쉰다는 약속에 따라 쉬어야 할 시각을 나타내세요.', toolOptions: {}, target: { h: 2, m: 30 }, difficulty: 0.4, conclude: '휴식 간격은 계획일 뿐, 졸음 신호가 오면 계획보다 먼저 쉬어요. 점심 뒤처럼 졸음이 오기 쉬운 때는 더 자주 살펴요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 여행 일정에 쉬어 갈 계획을 쓰세요.', columns: ['때', '시각', '할 일'], cells: [['출발', '', ''], ['첫 휴식', '', ''], ['졸음 신호가 올 때', '바로', '']] }] },
        notes: '\'2시간마다\'는 의학·법 기준이 아니라 이 수업의 연습용 가족 약속이다. 장거리 운전 휴식 권고 간격은 사람이 확인한 뒤 안내한다.',
      }),
      M({
        id: 'activity.intervene-script', type: 'activity', title: '운전을 말리는 대본 쓰기',
        method: '개입 대본 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '대본마다 문장 틀을 보고 쓴다.', base: '대본 세 개를 존중·분명함·대안 기준표로 점검하며 쓴다.', challenge: '문항마다 기준 하나가 더 붙고, 대안을 두 가지 이상 넣는다.' },
        activity: {
          title: '존중하면서 분명하게 말리기', tool: 'rubric-writing',
          teacher: '"어른에게 \'운전하지 마세요\'라고 말하기는 어려워요. 그래서 미리 써 두는 거예요. 존중, 분명함, 대안 — 세 가지가 들어가야 해요." 기준표를 함께 읽는다. "그냥 \'하지 마세요\'만 쓰면 되죠?"라는 학생에게 "그럼 그 어른은 어떻게 집에 가나요?"라고 묻는다. 비난하는 말("왜 그렇게 생각이 없어요")을 쓴 학생에게는 "이 말을 들은 어른은 열쇠를 내려놓을까요?"라고 되묻는다.',
          task: '어른의 음주·졸음 운전을 말리는 대본을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('술을 마신 이모가 운전하려 할 때 말릴 대본을 쓰세요.', '술을 마신 이모가 "가까우니까 괜찮아"라며 운전하려 해요. 말리는 대본을 쓰세요.', ['존중하는 말로 시작했다', '운전하면 안 되는 까닭을 분명히 말했다', '대안을 하나 이상 제시했다'], { min: 50, max: 300, sent: [2, 5], must: [['대리', '택시', '버스', '대신']], starter: '이모, 걱정돼서 말씀드려요. ~', plus: '대안을 두 가지 넣었다', d: 0.4 }),
            RWQ('졸음 신호를 보이는 운전자에게 쉬자고 말하는 대본을 쓰세요.', '고속도로에서 운전하는 가족이 하품을 계속하며 "조금만 더 가자"고 해요. 쉬자고 말하는 대본을 쓰세요.', ['존중하는 말로 시작했다', '졸음 신호를 구체적으로 짚었다', '쉬기·교대 같은 대안을 제시했다'], { min: 50, max: 300, sent: [2, 5], must: [['휴게소', '쉬', '교대']], starter: '하품을 계속하시는 걸 보니 ~', plus: '대안을 두 가지 넣었다', d: 0.4 }),
            RWQ('"내 차인데 네가 무슨 상관이야"라는 대답에 이어 갈 대본을 쓰세요.', '어른이 "내 차인데 네가 무슨 상관이야"라고 답했어요. 관계를 지키면서도 물러서지 않는 대본을 쓰세요.', ['상대 마음을 먼저 인정했다', '나도 함께 타거나 다른 사람도 다칠 수 있다는 점을 말했다', '다른 어른의 도움을 청하는 길을 넣었다'], { min: 50, max: 300, sent: [2, 5], must: [['걱정', '다칠', '안전']], starter: '기분 상하셨다면 죄송해요. 그래도 ~', plus: '위험하면 112에 알릴 수 있다는 점을 솔직하게 말했다', d: 0.45, more: { conclude: '말리는 말은 존중으로 시작해 까닭을 분명히 하고 대안으로 끝나요. 혼자 어려우면 다른 어른의 도움을 청해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 대본 가운데 실제로 가장 말하기 어려울 것 같은 한 문장과 그 까닭을 쓰세요.' }] },
        notes: '학생에게 실제 가족의 음주 운전을 떠올려 말하게 하지 않는다. 대본은 가상 인물에게 쓴다.',
      }),

      M({
        id: 'wrap.alt-list', type: 'wrap', title: '음주·졸음 운전 대안 정리',
        method: '음주·졸음 대안 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 이름(음주 운전 대신·졸음 운전 대신)을 읽어 주며 카드를 함께 단다.', base: '가지마다 대안 카드를 달고 함정 카드는 남긴다.', challenge: '출구 3번에 상황별 최선의 대안 하나와 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 나온 대안을 두 가지로 모아 봐요. 술을 마셨을 때의 대안과 졸릴 때의 대안이에요." 출구 1번에서 \'창문 열고 음악 크게\'를 졸음 가지에 넣으려는 학생에게 "이건 졸음을 없앨까요, 가릴까요?"라고 묻는다. \'한두 시간 쉬었다 운전\'을 음주 가지에 넣으려는 학생에게는 "술이 깼는지 그 사람이 스스로 알 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '운전 대신 할 일', slots: ['음주 운전 대신', '졸음 운전 대신'], cards: ['대리운전 부르기', '대중교통 타기', '술 마시지 않은 사람이 운전', '휴게소에서 쉬기', '다른 운전자와 교대', '창문 열고 음악 크게', '한두 시간 쉬었다 직접 운전'] }, prompt: '대안 카드를 음주 운전 대신·졸음 운전 대신 가지에 다세요. 대안이 아닌 카드는 남기세요.', target: { sort: { '음주 운전 대신': ['대리운전 부르기', '대중교통 타기', '술 마시지 않은 사람이 운전'], '졸음 운전 대신': ['휴게소에서 쉬기', '다른 운전자와 교대'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '"조금 마시고 시간이 지나면 괜찮다"에 대한 오늘의 결론은?', options: ['한 시간만 지나면 괜찮다', '술은 바로 깨지 않고, 마신 사람은 깼는지 스스로 판단하기 어렵다', '커피를 마시면 바로 괜찮아진다'], answer: 1, difficulty: 0.2, explain: '술은 판단을 흐려서 스스로 괜찮다고 느끼기 쉬워요. 마셨다면 운전하지 않는 것이 답이에요.' },
            { type: 'short', prompt: '명절 귀갓길처럼 내가 만날 수 있는 상황 하나에서 가장 좋은 대안과 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '음주·졸음 운전 대안',
          items: [
            { type: 'table', prompt: '상황마다 대안을 쓰세요.', columns: ['상황', '대안', '까닭'], cells: [['술 마신 어른이 데려다주겠다고 함', '', ''], ['운전자가 하품을 계속함', '', '']] },
            { type: 'check', prompt: '동승자로서 할 수 있는 것에 표시하세요.', options: ['음주 운전 차에 타지 않기', '대리운전·대중교통 함께 찾기', '휴게소에서 쉬자고 말하기', '교대 운전 제안하기'] },
          ],
        },
      }),
      M({
        id: 'wrap.pledge-words', type: 'wrap', title: '동승자 약속 문장 완성',
        method: '동승자 약속 문장 완성', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 약속 문장과 카드를 함께 읽으며 빈칸을 채운다.', base: '약속 문장 세 칸을 카드로 채운다.', challenge: '활동지에 나만의 동승자 약속을 스스로 짓는다.' },
        wrap: {
          teacher: '"오늘 배운 것을 동승자 약속 세 문장으로 남겨 봐요." 출구 1번에서 \'괜찮다면 탄다\' 같은 카드를 넣은 학생에게 "그 사람이 괜찮은지 누가 판단하나요? 술은 그 판단부터 흐려요"라고 묻는다. 활동지에 나만의 약속을 짓고, 지키기 어려운 순간을 미리 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'p1', label: '술 마신 사람이 운전하는 차에는 ___.' }, { id: 'p2', label: '운전을 말릴 때는 ___.' }, { id: 'p3', label: '운전자에게 졸음 신호가 보이면 ___.' }], cards: ['타지 않는다', '대안을 함께 말한다', '쉬자고 한다', '괜찮다면 탄다', '음악을 크게 튼다'] }, prompt: '동승자 약속 문장의 빈칸을 카드로 채우세요.', target: { fill: { p1: '타지 않는다', p2: '대안을 함께 말한다', p3: '쉬자고 한다' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '음주 운전 차에 타지 않는 것이 예방이 되는 까닭으로 가장 알맞은 것은?', options: ['나만 다치지 않으면 되기 때문이다', '타지 않겠다는 말이 운전자에게 멈출 까닭이 되기 때문이다', '타지 않으면 운전자가 처벌을 받지 않기 때문이다'], answer: 1, difficulty: 0.2, explain: '동승자가 타지 않고 대안을 말하면 운전자가 운전대를 내려놓을 계기가 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 동승자 약속',
          items: [
            { type: 'short', prompt: '나만의 동승자 약속 한 문장을 지어 쓰세요.' },
            { type: 'short', prompt: '이 약속을 지키기 가장 어려운 순간과 그때 할 말을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 우회전 사각지대와 안전띠·머리받침 (11학년)
  // ======================================================================================================
  {
    const M = MOD('turn-seat', [11]);
    const CROSS = { title: '가상 교차로(우회전)', grid: [6, 4], places: [{ name: '우회전 차', icon: 'dot', at: [1, 3] }, { name: '정지선', icon: 'dot', at: [2, 3] }, { name: '횡단보도 앞', icon: 'dot', at: [3, 2] }, { name: '기둥에 가려지는 인도 끝', icon: 'dot', at: [4, 1] }, { name: '건너편 인도', icon: 'house', at: [5, 0] }, { name: '버스 정류장', icon: 'bus', at: [0, 0] }] };
    const TURN = { text: '면허를 딴 지 석 달 된 운전자 민재가 우회전하려 한다. 차량 신호는 초록불이고, 횡단보도 쪽 인도 끝에 사람 그림자가 언뜻 보인다.', who: '민재', motif: 'sun', choices: [
      { id: 'go', text: '차량 신호가 초록이니 속도를 줄이지 않고 돈다', result: '오른쪽 앞 기둥에 가려 있던 보행자가 횡단보도로 한 발 내딛는다.', impact: [{ who: '보행자', text: '차와 부딪칠 뻔해 넘어진다', tone: -1 }],
        next: { text: '보행자가 넘어진 채 놀라 있다. 뒤차가 경적을 울린다.', choices: [
          { id: 'leave', text: '부딪치지 않았으니 그냥 지나간다', result: '보행자는 혼자 일어나 다친 무릎을 본다.', impact: [{ who: '민재', text: '사고 뒤 조치 의무를 저버린다', tone: -1 }], ending: '부딪치지 않았어도 내 운전으로 사람이 다쳤다면 멈추고 살펴야 한다.' },
          { id: 'stopcare', text: '비상등을 켜고 멈춰 보행자를 살핀다', result: '보행자의 상태를 묻고 필요하면 119에 알린다.', impact: [{ who: '보행자', text: '도움을 받는다', tone: 1 }], ending: '늦었지만 멈춘 것은 맞다. 처음부터 멈췄다면 넘어질 일도 없었다.' }] } },
      { id: 'slow', text: '횡단보도 앞에서 일단 멈추고 고개를 돌려 기둥 뒤를 확인한다', result: '기둥에 가려 있던 보행자가 건너기 시작한다. 민재는 다 건널 때까지 기다린다.', impact: [{ who: '보행자', text: '안전하게 건넌다', tone: 1 }],
        next: { text: '보행자가 다 건넜다. 뒤차가 "빨리 가라"며 경적을 울린다.', choices: [
          { id: 'check2', text: '횡단보도에 다른 사람이 없는지 한 번 더 보고 출발한다', result: '자전거를 끌고 오는 학생을 보고 잠시 더 기다린 뒤 출발한다.', impact: [{ who: '자전거를 끈 학생', text: '안전하게 건넌다', tone: 1 }], ending: '경적은 재촉일 뿐, 멈춤을 끝낼 신호가 아니다.' },
          { id: 'rush', text: '경적에 놀라 서둘러 출발한다', result: '뒤늦게 뛰어오던 사람과 가까스로 비켜 간다.', impact: [{ who: '민재', text: '아찔한 순간을 만든다', tone: -1 }], ending: '처음엔 잘 멈췄어도 재촉에 밀리면 같은 위험이 돌아온다.' }] } },
      { id: 'horn', text: '경적을 울려 보행자가 비키게 하고 돈다', result: '보행자가 놀라 멈칫한다.', impact: [{ who: '보행자', text: '겁을 먹고 길 가운데 선다', tone: -1 }], ending: '횡단보도에서 먼저 가야 할 사람은 보행자다. 경적은 길을 비켜 달라는 권리가 아니다.' }] };
    const TURN_R = [{ id: 'stop', text: '우회전 차는 횡단보도 보행자를 확인하고 멈춰야 한다' }, { id: 'pillar', text: '기둥과 거울 사각에 보행자가 가려질 수 있다' }, { id: 'green', text: '차량 신호가 초록이면 보행자를 보지 않아도 된다', why: '차량 신호와 상관없이 횡단보도의 보행자를 먼저 확인해요.' }, { id: 'horn', text: '경적을 울리면 보행자가 알아서 비킨다', why: '경적은 보행자를 놀라게 할 뿐 안전을 만들지 않아요.' }];
    const SEAT = ['눈', '목', '어깨', '가슴', '배', '허리', '팔꿈치', '무릎'];

    MODS.push(
      M({
        id: 'intro.turn-map', type: 'intro', title: '우회전 차가 멈출 자리',
        method: '우회전 교차로 칸 지도', tool: 'map', minutes: 6,
        levels: { easy: '교사가 정지선 칸에 핀을 꽂는 시연을 보고, 보행자가 가려지는 칸을 함께 찾는다.', base: '멈출 칸·가려지는 칸·보행자가 기다리는 칸 세 곳을 학생이 짚는다.', challenge: '그 칸을 고른 근거(기둥 위치·운전석 자리)를 한 문장으로 말한다.' },
        intro: {
          teacher: '"우회전은 신호가 없으니 그냥 가도 된다고 생각하는 사람이 많아요. 지도에서 우회전 차가 멈춰야 할 자리는 어디일까요?" 시연 단추로 정지선 칸에 핀이 꽂히는 모습을 보여 준 뒤, 기둥에 가려지는 인도 끝 칸을 가리킨다. "우회전은 신호와 상관없이 가도 된다"는 말이 나오면 "차량 신호가 초록일 때 횡단보도 신호는 무슨 색일 수 있을까요?"라고 되묻는다. 오늘은 운전석에서 보이지 않는 사람을 찾는 시간이라고 밝힌다.',
          student: '가상 교차로 칸 지도에서 우회전 차가 멈춰야 할 칸과, 운전석에서 기둥에 가려 보행자가 안 보일 수 있는 칸을 찾아보세요.',
          demo: { tool: 'map', options: CROSS, sequence: [{ place: '정지선' }] },
          art: { draw: 'a paper crossroads seen from above, a small paper car turning right at the corner, a zebra crossing and a paper pedestrian half hidden behind the car pillar shadow', banner: '우회전 전, 일단 멈춤', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '칸 지도는 가상 교차로다. 지도는 문항마다 핀 하나라서 세 칸은 교사가 차례로 묻고 학생이 말로 짚는다. 우회전 일시정지 규정의 세부는 수업 전 도로교통공단·경찰청 안내로 확인한다.',
      }),
      M({
        id: 'intro.pillar-view', type: 'intro', title: '운전석에서 가려진 사람',
        method: '운전석에서 가려진 사람', tool: 'emotion', minutes: 7,
        levels: { easy: '보기 2개(기둥 뒤 보행자·신호등 아래 보행자) 가운데 함께 고르고 결과를 본다.', base: '보기 3개 가운데 가려질 수 있는 보행자를 고르고 결과를 읽는다.', challenge: '고른 보기가 가려지는 근거(운전석 자리·기둥 각도)를 말로 설명한다.' },
        intro: {
          teacher: '"운전석에 앉으면 앞 유리 양옆에 굵은 기둥이 있어요. 이 기둥 뒤에 사람 한 명이 통째로 숨을 수 있다면 믿겠어요?" 시연 단추로 기둥 뒤 보행자를 고르는 모습과 결과 글을 보여 준다. "차 유리는 넓어서 다 보인다"는 말이 나오면 "교실 기둥 뒤에 선 친구가 내 자리에서 보이나요?"라고 묻고 실제로 기둥 뒤에 서 보게 한다. 보이지 않는 곳이 있다는 것을 알아야 고개를 돌려 확인한다는 점을 짚는다.',
          student: '운전석에서 본 장면이에요. 앞 유리 기둥 때문에 보이지 않을 수 있는 보행자를 고르고 결과를 확인해 보세요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '운전석에서 오른쪽으로 우회전하려 한다. 앞 유리 오른쪽 기둥이 시야 한쪽을 가린다.', feeling: '걱정', who: '운전자', motif: 'sun', ask: '어느 보행자가 가려질 수 있을까요?', choices: [{ id: 'pillar', text: '오른쪽 기둥 바로 뒤에서 건너려는 보행자', result: '고개를 돌리지 않으면 차가 다가갈 때까지 보이지 않는다.', mood: '놀람' }, { id: 'signal', text: '신호등 아래 멈춰 선 보행자', result: '앞 유리 가운데로 잘 보인다.', mood: '편안함' }, { id: 'far', text: '건너편 인도를 걷는 보행자', result: '멀리 있어 앞 유리로 보인다.', mood: '편안함' }] }, sequence: [{ choice: 'pillar' }] },
          art: { draw: 'a paper car interior seen from the driver seat, a thick paper windshield pillar on the right, and a small paper pedestrian peeking out behind the pillar near a zebra crossing', banner: '기둥 뒤에 사람이 있어요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '앞 유리 기둥(A필러)은 차마다 굵기가 다르다. 교실 기둥이나 책을 세워 가려지는 시야를 몸으로 체험하게 하면 이해가 빠르다.',
      }),

      M({
        id: 'activity.stop-dilemma', type: 'activity', title: '우회전 직전 운전석 갈림길',
        method: '우회전 운전석 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거 카드 2장을 고른다.', base: '두 번째 갈림길(뒤차 경적)까지 가서 결과를 보고 근거 카드 2장을 고른다.', challenge: '두 갈림길을 지나되 도움·피해 표시와 다른 선택 비교가 맞힌 뒤에만 보여, 근거 2장을 스스로 판단해 고른다.' },
        activity: {
          title: '민재의 우회전 갈림길', tool: 'dilemma',
          teacher: '"이번에는 여러분이 운전석에 앉았어요. 차량 신호는 초록, 인도 끝에 그림자가 보여요. 멈출까요, 갈까요?" 선택마다 영향 칸을 함께 읽는다. 초록불이니 가는 길을 고른 학생에게 "차량 신호가 초록이라는 것이 횡단보도의 사람에게 무엇을 알려 주나요?"라고 묻는다. 멈춘 뒤 경적에 밀려 출발하는 길을 고른 학생에게는 "뒤차의 경적과 앞 사람의 안전 가운데 무엇이 먼저일까요?"라고 묻는다. 재촉을 견디는 것도 운전 실력이라는 점을 짚는다.',
          task: '운전자가 되어 우회전 직전 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('우회전 직전 보행자를 지키는 길을 끝까지 따라가고 근거 2장을 고르세요.', TURN, [['slow', 'check2']], TURN_R, ['stop', 'pillar'], { d: 0.4 }),
            EXPLOREQ('초록불이라 그냥 돈 길도 끝까지 가 보고, 두 길의 결과를 견주세요.', TURN, TURN_R, ['그냥 돈 길의 끝 결과를 확인했다', '보행자와 민재가 받은 영향을 견주었다'], { d: 0.35 }),
            DILQ('비 오는 밤 우회전 상황에서 알맞은 길을 고르고 근거 2장을 고르세요.', { text: '비 오는 밤, 우회전하려는데 유리에 빗물이 맺혀 오른쪽 거울이 잘 안 보인다. 횡단보도에는 어두운 옷을 입은 사람이 있을지 모른다.', who: '민재', motif: 'rain', choices: [
              { id: 'usual', text: '평소처럼 돈다', result: '어두운 옷의 보행자를 늦게 알아본다.', impact: [{ who: '보행자', text: '급히 뒤로 물러선다', tone: -1 }], ending: '안 보이는 날일수록 평소보다 더 멈추고 더 오래 봐야 한다.' },
              { id: 'stopwait', text: '횡단보도 앞에서 멈추고 창문을 내려 직접 확인한다', result: '우산을 쓴 보행자가 건너는 것을 본다.', impact: [{ who: '보행자', text: '안전하게 건넌다', tone: 1 }],
                next: { text: '보행자가 다 건넜다. 빗길이라 바퀴가 조금 미끄럽다.', choices: [
                  { id: 'gentle', text: '천천히 출발해 부드럽게 돈다', result: '미끄러지지 않고 차로에 들어선다.', impact: [{ who: '민재', text: '빗길에서도 차를 다룬다', tone: 1 }], ending: '멈춤과 느린 출발이 빗길 우회전의 두 기둥이다.' },
                  { id: 'quick', text: '늦은 만큼 빠르게 돈다', result: '바퀴가 미끄러져 차가 휘청인다.', impact: [{ who: '민재', text: '차를 놓칠 뻔한다', tone: -1 }], ending: '잘 멈춘 뒤에도 서두르면 위험이 다시 생긴다.' }] } }] },
              [['stopwait', 'gentle']], [{ id: 'see', text: '잘 안 보이는 날은 멈추고 직접 확인하는 시간을 늘린다' }, { id: 'slow', text: '빗길에서는 출발과 회전을 천천히 한다' }, { id: 'light', text: '전조등을 켰으니 보행자가 나를 피할 것이다', why: '보행자가 나를 보는 것과 내가 보행자를 보는 것은 달라요.' }], ['see', 'slow'], { d: 0.35, more: { conclude: '우회전 앞에서는 신호보다 사람을 먼저 보고, 안 보이면 멈춰서 직접 확인해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우회전 직전 내가 할 행동을 "멈춘다 → 본다 → 간다" 차례로 구체적으로 쓰세요.' }] },
        notes: '갈림길 나무가 2단계라 도전 단계는 갈림길 수를 늘리는 대신 영향 표시와 다른 선택 비교를 맞힌 뒤에만 보이게 한다. 근거는 모든 단계에서 2장을 고른다.',
      }),
      M({
        id: 'activity.seat-body', type: 'activity', title: '머리받침·안전띠가 닿을 자리',
        method: '머리받침·안전띠 위치 맞추기', tool: 'body', minutes: 18,
        levels: { easy: '고른 부위 이름이 바로 보이고, 머리받침이 지키는 곳·어깨띠가 지나는 곳을 고른다.', base: '이름 표시 없이 같은 부위를 고르고, 띠가 지나면 안 되는 곳까지 판단한다.', challenge: '이름 표시 없이 고르고 확인 전에는 고른 수가 보이지 않으며, 잘못 맞춘 경우 결과 보기까지 고른다.' },
        activity: {
          title: '종이 몸에 맞추는 머리받침과 안전띠', tool: 'body',
          teacher: '"머리받침은 기대어 쉬라고 있는 걸까요? 뒤에서 차가 들이받는 순간을 떠올려 보세요." 종이 몸에서 목을 고르며 머리가 뒤로 꺾이는 움직임을 손으로 보여 준다. 어깨띠를 목에 걸친 그림을 그리며 "띠가 목에 닿으면 불편해서 겨드랑이 밑으로 빼는 사람이 있어요. 그러면 부딪칠 때 어디가 앞으로 튀어 나갈까요?"라고 묻는다. 머리 칸이 없으므로 머리받침 높이는 학생이 자기 머리 뒤를 손으로 짚어 귀 높이와 견주게 한다.',
          task: '종이 몸에서 머리받침과 안전띠가 지켜야 할 부위를 골라요.', levels: { easy: { names: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '뒤에서 차가 들이받을 때 머리받침이 높이를 맞춰 지켜 주는 부위를 고르세요.', toolOptions: { mode: 'parts', parts: SEAT }, target: { parts: ['목'] }, difficulty: 0.2 },
            { prompt: '어깨띠가 바르게 지나야 하는 두 부위를 고르세요(목에 걸치지 않아요).', toolOptions: { mode: 'parts', parts: SEAT }, target: { parts: ['어깨', '가슴'] }, difficulty: 0.3 },
            { prompt: '어깨띠를 겨드랑이 밑으로 빼고 맨 친구가 있어요. 앞에서 부딪칠 때 붙잡히지 않아 앞으로 크게 쏠리는 부위를 고르고 결과를 고르세요.', toolOptions: { mode: 'parts', parts: SEAT, ask: { q: '이렇게 매면 어떤 결과가 생길까요?', choices: ['몸 위쪽이 붙잡히지 않아 앞으로 쏠린다', '아무 차이가 없다', '더 편해서 더 안전하다'], why: ['', '띠가 몸 위쪽을 붙잡지 못해요.', '편한 것과 안전한 것은 달라요.'] } }, target: { parts: ['가슴', '목'], pick: 0 }, difficulty: 0.4, conclude: '머리받침은 목을, 어깨띠는 어깨와 가슴을, 골반띠는 배가 아닌 골반을 지나야 몸을 붙잡아 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '골반띠는 배가 아니라 골반 위를 지나야 하는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '종이 몸에는 머리·골반 칸이 없어 머리받침은 \'목\'을 지키는 장치로 고르게 하고, 머리받침 높이(머리 가운데·귀 높이)와 골반띠 자리는 학생이 자기 몸을 짚어 확인하게 한다.',
      }),
      M({
        id: 'activity.adjust-order', type: 'activity', title: '차에 타서 조정하는 차례',
        method: '차에 타서 조정하는 차례', tool: 'timeline', minutes: 18,
        levels: { easy: '운전자 조정 카드 3장(좌석·머리받침·안전띠)을 차례로 놓는다.', base: '거울까지 4장을 차례로 놓고, 동승자 차례와 조정 기준 짝을 맞춘다.', challenge: '같은 문항이 섞인 카드로 나오고, 동승자 차례에서 함정 카드(안전띠 나중에 매기)를 남긴다.' },
        activity: {
          title: '탑승 조정 차례 놓기', tool: 'timeline',
          teacher: '"차에 타면 무엇부터 맞출까요? 안전띠부터 매면 의자를 당길 때 띠가 다시 헐거워져요." 운전자 차례를 놓은 뒤 동승자 차례를 따로 만들게 한다. 거울을 먼저 맞추는 학생에게 "의자 자리가 바뀌면 거울로 보이는 곳도 바뀔까요?"라고 묻는다. "뒷자리는 안전띠 안 매도 된다"는 학생에게는 "앞에서 부딪치면 뒷자리 사람은 어디로 갈까요?"라고 되묻는다. 차례의 까닭은 \'앞의 조정이 뒤의 조정을 바꾸기 때문\'이라는 점을 짚는다.',
          task: '운전자와 동승자가 차에 타서 조정하는 차례를 놓고 기준을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('운전자가 차에 타서 조정하는 차례로 카드를 놓으세요.', ['좌석 앞뒤·등받이', '머리받침 높이', '거울', '안전띠'], { k: 3, d: 0.3, opt: { axis: ['먼저', '나중'] }, more: { hints: ['앞의 조정이 뒤의 조정을 바꾸는지 생각해 보세요.'] } }),
            ORDERQ('뒷좌석 동승자가 차에 타서 할 일을 차례로 놓고, 맞지 않는 카드는 남기세요.', ['등받이 세우기', '머리받침 높이', '안전띠 매기', '출발 전 운전자에게 다 맸다고 알리기'], { k: 3, traps: ['가까운 길이면 띠는 나중에 매기'], d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('조정 항목과 바른 기준을 짝지으세요.', [['머리받침', '머리 가운데·귀 높이에 맞춘다'], ['어깨띠', '어깨 가운데와 가슴을 지난다'], ['골반띠', '배가 아닌 골반 위를 지난다'], ['등받이', '똑바로 세워 등을 붙인다']], { k: 3, extra: ['뒤로 눕혀 편하게 한다'], d: 0.35, more: { conclude: '좌석을 먼저 맞추고, 머리받침·거울을 맞춘 뒤 안전띠를 마지막에 매요. 뒷좌석도 똑같이 띠를 매요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '운전자와 동승자의 조정 차례를 견주어 쓰세요.', columns: ['차례', '운전자', '동승자'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] }] },
        notes: '조정 차례와 기준(머리받침 높이, 띠의 자리)은 일반 안전 수칙이다. 수업 전 한국교통안전공단·도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'activity.walker-letter', type: 'activity', title: '보행자에게 쓰는 사각 안내문',
        method: '보행자에게 쓰는 안내문', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '문장마다 시작 틀을 보고 짧은 안내문을 쓴다.', base: '네 문장 안팎으로 쓰고 정확성·짧음·행동 제안 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 그림 없이도 사각을 알 수 있게 설명을 덧붙인다.' },
        activity: {
          title: '운전석 사각 안내문', tool: 'rubric-writing',
          teacher: '"오늘 운전석에서 본 사각을 동네 초등학생과 어르신에게 알려 준다면 어떻게 쓸까요?" 기준표 세 칸(정확하다·짧다·할 행동을 말한다)을 먼저 읽는다. "차 조심하세요"처럼 막연한 글을 쓴 학생에게 "읽은 사람이 내일 횡단보도에서 무엇을 다르게 할까요?"라고 묻는다. 운전자를 탓하는 글보다 운전자와 보행자 둘 다 할 일을 말하는 글이 더 잘 읽힌다는 점을 짚는다.',
          task: '운전석 사각을 보행자에게 알리는 짧은 안내문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('초등학생에게 붙일 안내문: 우회전 차의 기둥 뒤 사각을 알리는 글을 3~4문장으로 쓰세요.', '초등학생에게 우회전 차 기둥 뒤 사각을 알리는 안내문을 쓰세요.', ['사각이 생기는 까닭을 정확히 썼다', '짧고 쉬운 낱말로 썼다', '건널 때 할 행동을 제안했다'], { min: 50, max: 300, sent: [3, 4], must: [['멈', '기다']], starter: '차를 모는 사람 눈에는 ~이 안 보일 때가 있어요. 그래서 ~', plus: '운전자와 눈을 맞추라는 행동을 넣었다', d: 0.4 }),
            RWQ('어르신에게 드릴 안내문: 버스나 트럭처럼 큰 차가 돌 때의 사각을 알리는 글을 3~4문장으로 쓰세요.', '큰 차가 돌 때 생기는 사각을 어르신께 알리는 안내문을 쓰세요. 존중하는 말투로 써요.', ['큰 차의 사각이 더 넓다는 점을 썼다', '존중하는 말투로 짧게 썼다', '횡단보도에서 기다릴 자리를 제안했다'], { min: 50, max: 300, sent: [3, 4], must: [['큰 차', '버스', '트럭']], starter: '버스나 트럭이 돌 때는 ~', plus: '서두르지 않아도 된다는 안심의 말을 넣었다', d: 0.45 }),
            RWQ('안내문 옆에 붙일 그림이 없다고 생각하고, 그림 대신 사각의 자리를 말로 그려 주는 설명을 2~3문장으로 쓰세요.', '그림 없이 말로 사각의 자리를 설명하세요. 어디에 서면 운전석에서 안 보이는지 써요.', ['서 있는 자리를 구체적으로 썼다', '운전석에서 안 보이는 까닭을 썼다', '그 자리를 피하는 방법을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['자리', '곳', '옆']], starter: '차의 오른쪽 앞 모서리 옆에 서면 ~', plus: '읽는 사람이 바로 따라 할 수 있는 한 가지 행동으로 끝맺었다', d: 0.45, more: { conclude: '좋은 안내문은 위험한 자리를 정확히, 짧게 알리고 읽는 사람이 할 행동 하나를 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 안내문을 붙이고 싶은 장소와 그 까닭을 한 문장으로 쓰세요.' }] },
      }),

      M({
        id: 'wrap.turn-words', type: 'wrap', title: '우회전 수칙 문장 완성',
        method: '우회전 수칙 낱말', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 첫 빈칸을 함께 채우는 것을 보고 나머지 하나를 채운다.', base: '빈칸 2개를 스스로 채워 수칙 문장을 완성한다.', challenge: '출구 3번에 나만의 우회전 수칙 한 문장을 낱말 카드 없이 지어 쓴다.' },
        wrap: {
          teacher: '"오늘 운전석에 앉아 본 것을 한 문장의 수칙으로 줄여 봐요. 우회전 앞에서 나는 무엇을 하나요?" 출구 1번에서 빈칸 두 개를 채우게 한다. \'경적을 울리고\' 카드를 넣은 학생에게 "경적을 들은 보행자는 무엇을 하게 될까요?"라고 묻는다. 출구 3번에서는 \'멈춤\'이 들어간 나만의 수칙을 짓게 하고 두세 명의 문장을 읽어 준다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'w1', label: '우회전하기 전에 횡단보도 앞에서 ___.' }, { id: 'w2', label: '기둥 뒤까지 ___ 보행자가 없으면 천천히 돈다.' }], cards: ['일단 멈춘다', '고개를 돌려 확인하고', '경적을 울리고', '속도를 높여'] }, prompt: '우회전 수칙 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { w1: '일단 멈춘다', w2: '고개를 돌려 확인하고' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '차량 신호가 초록일 때 우회전하는 운전자에게 맞는 말을 고르세요.', options: ['초록불이니 보행자를 볼 필요 없다', '횡단보도 보행자를 확인하고 멈출 준비를 한다', '경적을 울리면 먼저 갈 수 있다'], answer: 1, difficulty: 0.15, explain: '차량 신호와 상관없이 횡단보도의 보행자를 먼저 확인하고 멈춰요.' },
            { type: 'short', prompt: '\'멈춤\'이 들어간 나만의 우회전 수칙을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우회전 수칙',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '우회전 차는 횡단보도 보행자를 확인하고 ___.', answer: '멈춘다(일시정지)' },
            { type: 'short', prompt: '보행자로서 우회전 차 앞에서 내가 할 행동 하나를 쓰세요.' },
          ],
        },
        notes: '출구 질문은 단계별 판이 없어, 쉬움 단계는 교사가 첫 빈칸을 함께 읽어 주는 방식으로 돕는다.',
      }),
      M({
        id: 'wrap.seat-check', type: 'wrap', title: '탑승할 때 맞추는 점검표',
        method: '탑승 조정 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사와 함께 점검 항목을 읽으며 맞는 것 3개에 표시한다.', base: '점검 항목 가운데 맞는 4개만 골라 표시하고 틀린 항목은 남긴다.', challenge: '활동지에 가족 차 뒷좌석에 붙일 한 줄 문구를 짓는다.' },
        wrap: {
          teacher: '"오늘 집에 갈 때 가족 차나 통학 차에 타면 무엇을 맞출지 점검표로 만들어 봐요." 출구 1번은 맞는 항목만 고르는 점검표다. \'등받이를 눕혀 편하게\'를 고른 학생에게 "눕힌 의자에서는 안전띠가 몸 어디를 지날까요?"라고 묻는다. 활동지에 가족 차에 붙일 문구를 짓게 하고, 뒷좌석도 안전띠를 맨다는 점을 마지막으로 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '탑승 조정 점검', items: [{ id: 'back', text: '등받이를 세워 등을 붙인다' }, { id: 'head', text: '머리받침을 귀 높이에 맞춘다' }, { id: 'lie', text: '등받이를 눕혀 편하게 한다' }, { id: 'belt', text: '어깨띠가 어깨 가운데를 지나게 맨다' }, { id: 'lap', text: '골반띠를 골반 위로 맨다' }, { id: 'arm', text: '어깨띠를 겨드랑이 밑으로 뺀다' }] }, prompt: '탑승할 때 맞는 점검 항목만 표시하세요.', target: { checklist: ['back', 'head', 'belt', 'lap'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '뒷좌석에 탄 동승자에게 맞는 말을 고르세요.', options: ['뒷좌석은 안전띠를 안 매도 된다', '뒷좌석도 안전띠를 맨다', '가까운 길이면 나중에 맨다'], answer: 1, difficulty: 0.1, explain: '앞에서 부딪치면 뒷좌석 사람도 앞으로 튀어 나가요. 모든 자리에서 띠를 매요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '탑승 조정 점검표',
          items: [
            { type: 'check', prompt: '오늘 차에 탈 때 확인할 것에 표시하세요.', options: ['등받이 세우기', '머리받침 높이', '어깨띠 자리', '골반띠 자리', '뒷좌석 띠'] },
            { type: 'short', prompt: '가족 차 뒷좌석에 붙일 한 줄 문구를 지어 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 9. 침수 도로와 차 안 위급 상황 (11학년)
  // ======================================================================================================
  {
    const M = MOD('flood-car', [11]);
    const TOWN = (extra = {}) => Object.assign({ title: '가상 동네(집중호우)', grid: [6, 4], places: [{ name: '집', icon: 'house', at: [0, 0] }, { name: '지하차도', icon: 'dot', at: [2, 2] }, { name: '하천변 도로', icon: 'dot', at: [3, 3] }, { name: '언덕 위 큰길', icon: 'dot', at: [2, 0] }, { name: '학원', icon: 'school', at: [5, 1] }, { name: '다리 위 높은 길', icon: 'bridge', at: [4, 0] }] }, extra);
    const UNDER = { text: '집중호우 경보가 내린 저녁, 수아네 가족 차가 집으로 가는 지하차도 앞에 섰다. 입구에 흙탕물이 고여 있고 앞차 한 대가 막 들어갔다.', who: '수아', motif: 'rain', choices: [
      { id: 'enter', text: '앞차도 들어갔으니 따라 들어간다', result: '지하차도 가운데에서 물이 바퀴 위까지 차오른다.', impact: [{ who: '수아네 가족', text: '차 안에 갇힐 위험에 놓인다', tone: -1 }],
        next: { text: '차가 멈췄다. 문 아래로 물이 들어오기 시작한다.', choices: [
          { id: 'out', text: '바로 안전띠를 풀고 문이 열리는 지금 모두 내려 높은 쪽으로 간다', result: '무릎까지 찬 물을 헤치고 입구 쪽 높은 곳으로 나온다.', impact: [{ who: '수아네 가족', text: '젖었지만 빠져나온다', tone: 0 }], ending: '빨리 나온 것이 맞다. 그러나 처음부터 들어가지 않았다면 이 위험도 없었다.' },
          { id: 'wait', text: '차 안이 안전할 것 같아 물이 빠지기를 기다린다', result: '물이 문 높이까지 차올라 문이 잘 열리지 않는다.', impact: [{ who: '수아네 가족', text: '탈출이 더 어려워진다', tone: -1 }], ending: '물이 다 찰 때까지 기다리면 문이 열리지 않는다. 문이 열릴 때 나와야 한다.' }] } },
      { id: 'detour', text: '들어가지 않고 언덕 위 큰길로 돌아간다', result: '20분 더 걸리지만 물이 없는 길로 간다.', impact: [{ who: '수아네 가족', text: '늦게 도착하지만 안전하다', tone: 1 }],
        next: { text: '돌아가는 길에 휴대전화로 지하차도 통제 알림이 온다. 수아는 앞서 들어간 차가 걱정된다.', choices: [
          { id: 'report', text: '안전한 곳에 차를 세운 뒤 112·119에 지하차도에 차가 들어갔다고 알린다', result: '구조대가 지하차도로 향한다.', impact: [{ who: '앞차 사람들', text: '도움을 받을 수 있다', tone: 1 }], ending: '내가 피한 위험을 남에게 알리는 것까지가 판단이다.' },
          { id: 'back', text: '도와주러 지하차도로 돌아간다', result: '가족 차도 물에 들어갈 위험에 놓인다.', impact: [{ who: '수아네 가족', text: '구하려다 함께 위험해진다', tone: -1 }], ending: '물에 잠기는 곳으로 직접 들어가지 말고 구조를 부른다.' }] } },
      { id: 'park', text: '입구 앞 도로 가에 세우고 비가 그치기를 기다린다', result: '낮은 길가라 바퀴 아래로 물이 차오르기 시작한다.', impact: [{ who: '수아네 가족', text: '낮은 곳에 머물러 위험이 커진다', tone: -1 }], ending: '기다리더라도 낮은 곳이 아니라 높은 곳에서 기다린다.' }] };
    const UNDER_R = [{ id: 'noenter', text: '물이 찬 도로·지하차도에는 들어가지 않는다' }, { id: 'call', text: '위험을 본 곳은 112·119에 위치와 함께 알린다' }, { id: 'big', text: '앞차가 지나갔으면 내 차도 지나갈 수 있다', why: '물 깊이와 흐름은 몇 분 사이에도 달라져요.' }, { id: 'inside', text: '차 안에 있으면 물이 차도 안전하다', why: '물이 차면 문이 열리지 않아 탈출이 어려워져요.' }];

    MODS.push(
      M({
        id: 'intro.flood-map', type: 'intro', title: '물에 잠기기 쉬운 길 찾기',
        method: '침수 위험 도로 지도', tool: 'map', minutes: 6,
        levels: { easy: '교사가 지하차도 칸에 핀을 꽂는 시연을 보고, 하천변 도로를 함께 찾는다.', base: '지하차도·하천변 도로·낮은 길가 세 곳을 학생이 짚는다.', challenge: '언덕 위 큰길로 돌아가는 경로를 고르고 그 근거(높이·물이 모이는 곳)를 말한다.' },
        intro: {
          teacher: '"비가 한꺼번에 쏟아지면 물은 어디로 모일까요? 낮은 곳, 땅 밑, 강 옆이에요." 시연 단추로 지하차도 칸에 핀이 꽂히는 모습을 보여 주고, 학생들에게 하천변 도로를 찾게 한다. "큰 차나 SUV는 물웅덩이를 지나가도 괜찮다"는 말이 나오면 "물이 바퀴를 넘으면 차는 땅을 딛고 있을까요, 떠 있을까요?"라고 되묻는다. 오늘은 물이 찬 길 앞에서 들어갈지 말지를 판단하는 시간이라고 밝힌다.',
          student: '가상 동네 칸 지도에서 집중호우 때 물에 잠기기 쉬운 칸을 찾고, 집으로 돌아갈 더 안전한 길을 생각해 보세요.',
          demo: { tool: 'map', options: TOWN(), sequence: [{ place: '지하차도' }] },
          art: { draw: 'a paper town map in heavy rain, a dark paper underpass tunnel filling with blue paper water, a river road at the bottom and a hill road at the top with a paper car choosing the hill road', banner: '물이 모이는 길을 피해요', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '지도는 가상 동네다. 지도는 문항마다 핀 하나라서 여러 칸은 교사가 차례로 묻는다. 우리 지역의 침수 위험 지하차도·하천변 도로는 지자체 안내로 확인해 덧붙일 수 있다.',
      }),
      M({
        id: 'intro.news-story', type: 'intro', title: '집중호우 날 지하차도 앞',
        method: '집중호우 날 귀갓길 장면', tool: 'story', minutes: 7,
        levels: { easy: '장면 카드 3장(경보 알림·지하차도 앞·멈춤)을 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 판단할 순간이 어느 장면인지 짚는다.', challenge: '판단할 순간에 다르게 고른 결말을 말로 지어 본다.' },
        intro: {
          teacher: '"가상의 집중호우 날 귀갓길 장면이에요. 차례로 놓아 보고, 어느 장면에서 멈췄어야 하는지 찾아봐요." 시연으로 장면을 차례로 놓은 뒤 "판단할 수 있었던 순간이 몇 번 있었나요?"라고 묻는다. "길이 막히면 지하차도가 더 빠르다"는 말이 나오면 "빠른 길과 물에 잠기지 않는 길 가운데 오늘은 무엇이 먼저일까요?"라고 되묻는다. 위험은 한 장면이 아니라 여러 장면에 걸쳐 쌓인다는 점을 짚는다.',
          student: '집중호우 날 귀갓길 장면 카드를 차례로 놓고, 가족이 다르게 판단할 수 있었던 순간을 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '집중호우 날 귀갓길(가상)', cards: [{ id: 'alert', text: '휴대전화에 호우 경보 알림이 온다', motif: 'rain' }, { id: 'road', text: '평소 가던 지하차도 길로 간다', motif: 'cloud' }, { id: 'water', text: '입구에 흙탕물이 고여 있다', motif: 'wave' }, { id: 'go', text: '앞차를 따라 들어간다', motif: 'rain' }], shuffle: false }, sequence: [{ order: ['alert', 'road', 'water', 'go'] }] },
          art: { draw: 'a sequence of paper scenes: a phone with a rain warning, a car on a wet road, an underpass entrance with muddy paper water, and a fork in the road with a hill route', banner: '어느 순간에 멈출까?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '장면은 가상 사례다. 실제 침수 사고 보도를 쓸 경우 피해자를 특정하지 않고, 학생에게 비슷한 일을 겪었는지 묻지 않는다.',
      }),

      M({
        id: 'activity.enter-dilemma', type: 'activity', title: '물이 찬 지하차도 앞 갈림길',
        method: '물이 찬 지하차도 앞 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길(진입·우회·대기)에서 고른 결과까지 보고 근거 카드 2장을 고른다.', base: '두 번째 갈림길까지 가서 결과를 보고 근거 카드 2장을 고른다.', challenge: '두 갈림길을 지나되 도움·피해 표시와 다른 선택 비교가 맞힌 뒤에만 보여, 근거 2장을 스스로 판단해 고른다.' },
        activity: {
          title: '수아네 가족의 지하차도 갈림길', tool: 'dilemma',
          teacher: '"운전대는 어른이 잡고 있어도, 옆자리의 한마디가 판단을 바꿀 수 있어요. 수아라면 무엇이라고 말할까요?" 선택마다 영향 칸을 함께 읽는다. 앞차를 따라 들어가는 길을 고른 학생에게 "앞차가 지나간 몇 분 사이에 물은 그대로였을까요?"라고 묻는다. 차 안에서 기다리는 선택에는 "물이 문 높이까지 차면 문은 어떻게 될까요?"라고 되묻는다. 들어가지 않는 판단과 문이 열릴 때 빨리 나오는 판단이 핵심이라는 점을 짚는다.',
          task: '수아네 가족 차가 물이 찬 지하차도 앞에 섰어요. 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('물이 찬 지하차도 앞에서 가족을 지키는 길을 끝까지 따라가고 근거 2장을 고르세요.', UNDER, [['detour', 'report']], UNDER_R, ['noenter', 'call'], { d: 0.4 }),
            EXPLOREQ('지하차도에 들어간 길도 끝까지 가 보고, 문이 열릴 때와 안 열릴 때의 결과를 견주세요.', UNDER, UNDER_R, ['들어간 길의 두 결말을 모두 확인했다', '빨리 나온 길과 기다린 길의 차이를 짚었다'], { d: 0.35 }),
            DILQ('하천변 도로에서 물이 바퀴까지 차오르는 상황에서 알맞은 길을 고르고 근거 2장을 고르세요.', { text: '하천변 도로를 달리는데 갑자기 물이 불어 바퀴 절반까지 찼다. 차가 아직 움직인다.', who: '수아', motif: 'wave', choices: [
              { id: 'speed', text: '속도를 높여 물을 빨리 지나간다', result: '물보라가 일고 엔진에 물이 들어가 차가 멈춘다.', impact: [{ who: '수아네 가족', text: '물 한가운데 갇힌다', tone: -1 }], ending: '물을 빨리 지나가려 하면 오히려 차가 멈춘다.' },
              { id: 'turn', text: '더 들어가지 않고 돌아 나와 높은 길로 간다', result: '천천히 방향을 돌려 물이 없는 쪽으로 빠져나온다.', impact: [{ who: '수아네 가족', text: '위험에서 벗어난다', tone: 1 }],
                next: { text: '높은 길에 닿았다. 다른 차들이 하천변 도로로 계속 들어가고 있다.', choices: [
                  { id: 'tell', text: '안전한 곳에 세우고 112에 위치를 알린다', result: '도로 통제가 시작된다.', impact: [{ who: '다른 운전자들', text: '위험한 길에 들어가지 않게 된다', tone: 1 }], ending: '위치를 알린 한 통의 신고가 다른 차들을 멈춘다.' },
                  { id: 'none', text: '우리는 빠져나왔으니 그냥 간다', result: '다른 차들이 계속 물로 들어간다.', impact: [{ who: '다른 운전자들', text: '같은 위험을 맞는다', tone: -1 }], ending: '나만 피하는 것으로 위험이 사라지지는 않는다.' }] } }] },
              [['turn', 'tell']], [{ id: 'turnback', text: '물이 불어나면 더 들어가지 않고 높은 곳으로 돌아 나온다' }, { id: 'where', text: '신고할 때는 도로 이름 같은 위치를 함께 알린다' }, { id: 'fast', text: '빨리 지나가면 물에 덜 잠긴다', why: '속도를 높이면 물이 엔진으로 들어가 차가 멈출 수 있어요.' }], ['turnback', 'where'], { d: 0.35, more: { conclude: '물이 찬 길에는 들어가지 않고, 이미 들어갔다면 문이 열릴 때 빨리 나와 높은 곳으로 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가족이 물이 찬 길로 들어가려 할 때 옆자리에서 할 한마디를 근거와 함께 쓰세요.' }] },
        notes: '갈림길 나무가 2단계라 도전 단계는 갈림길 수 대신 영향 표시·다른 선택 비교를 맞힌 뒤에만 보이게 한다. 재난안전(자연재난)과 겹치는 재량 보충 주제다.',
      }),
      M({
        id: 'activity.escape-order', type: 'activity', title: '물에 잠기는 차 탈출 차례',
        method: '잠기는 차 탈출 순서', tool: 'timeline', minutes: 18,
        levels: { easy: '탈출 카드 3장(안전띠 풀기·문 열기 시도·높은 곳)을 차례로 놓는다.', base: '탈출 카드 5장을 차례로 놓고, 문이 안 열릴 때의 갈래 차례도 놓는다.', challenge: '카드가 섞여 나오고, 문이 안 열릴 때의 갈래에서 함정 카드(물이 다 찰 때까지 그냥 기다리기)를 남긴다.' },
        activity: {
          title: '탈출 차례 놓기', tool: 'timeline',
          teacher: '"차에 물이 차기 시작하면 무엇부터 할까요? 몇 초 사이의 차례가 갈림길이에요." 큰 갈래(문이 열릴 때)를 먼저 놓고, 문이 안 열릴 때의 갈래를 따로 놓게 한다. 휴대전화로 신고부터 하는 학생에게 "물이 차오르는 동안 통화하면 문은 언제 열까요? 신고는 밖에 나온 뒤에 해요"라고 짚는다. "문이 안 열리면 끝이다"라는 말에는 창문과, 물이 차서 안팎 수압 차가 줄어든 뒤의 문을 함께 짚는다. 수업 장면은 가상이며 실제로 따라 해 보지 않는다는 점도 말한다.',
          task: '물에 잠기는 차에서 빠져나오는 차례와 문이 안 열릴 때의 차례를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('차에 물이 차기 시작할 때 빠져나오는 차례로 카드를 놓으세요.', ['안전띠 풀기', '문 열기 시도(열리면 바로 나간다)', '문이 안 열리면 창문으로', '차 밖으로 나가기', '높은 곳으로 피하기'], { k: 3, d: 0.35, opt: { axis: ['먼저', '나중'] }, more: { hints: ['문이 열리는 동안이 가장 나오기 쉬운 때예요.'] } }),
            ORDERQ('문이 열리지 않을 때의 차례로 카드를 놓고, 맞지 않는 카드는 남기세요.', ['당황하지 말고 창문을 연다', '창문이 안 열리면 깨는 도구로 깬다', '그래도 안 되면 수압 차가 줄 때 문을 연다', '밖으로 나가 높은 곳으로 간다'], { k: 3, traps: ['물이 다 찰 때까지 그냥 기다린다'], d: 0.4, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('상황마다 가장 먼저 할 행동을 짝지으세요.', [['물이 발목까지 들어온다', '안전띠를 풀고 문을 연다'], ['문이 물에 눌려 안 열린다', '창문으로 나갈 수 있는지 본다'], ['차 밖으로 나왔다', '높은 곳으로 간 뒤 112·119에 알린다']], { k: 3, extra: ['차 안에서 구조를 기다린다'], d: 0.35, more: { conclude: '문이 열릴 때 빨리 나오고, 안 열리면 창문, 그다음 수압 차가 줄어든 뒤의 문이에요. 신고는 밖의 높은 곳에서 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"물이 다 찰 때까지 차 안에서 기다린다"가 위험한 까닭을 한 문장으로 쓰세요.' }] },
        notes: '탈출 차례는 행정안전부·국민재난안전포털의 차량 침수 행동요령으로 수업 전 확인한다. 창문 깨는 도구의 사용법·자리는 실물이나 공식 영상으로 보여 주고, 학생이 물속 탈출을 직접 따라 하지 않게 한다.',
      }),
      M({
        id: 'activity.report-call', type: 'activity', title: '차 안 위급 상황 신고 말하기',
        method: '차 안 위급 상황 신고 연습', tool: 'timer', minutes: 18,
        levels: { easy: '신고 카드 3장(위치·상황·사람 수)을 차례로 놓고 짝에게 말한다.', base: '다친 사람 상태까지 4장을 차례로 놓고 짝과 역할을 바꿔 말한다.', challenge: '위치를 모를 때 찾을 단서를 하나씩 확인하며 짝에게 말하고, 활동지에 단서로 위치를 말하는 문장을 쓴다.' },
        activity: {
          title: '112·119 신고 말하기 판', tool: 'timer',
          teacher: '"신고 전화가 연결되면 무엇부터 말할까요? 받는 사람이 가장 먼저 알아야 하는 것은 \'어디\'예요." 카드 차례를 놓은 뒤 짝과 한 사람은 신고자, 한 사람은 받는 사람이 되어 말해 보게 한다. "살려 주세요, 빨리 와 주세요"만 되풀이하는 학생에게 "구조대가 어디로 가야 할지 알 수 있을까요?"라고 묻는다. 위치를 모를 때는 도로 이름 표지판·큰 건물·지나온 다리 이름이 단서가 된다는 점을 짚는다. 연습 때 실제 번호로 전화하지 않는다.',
          task: '신고할 말의 차례를 놓고, 짝과 신고자·받는 사람이 되어 말해 봐요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '차가 물에 잠겨 밖으로 나온 뒤 119에 신고해요. 말할 차례로 카드를 놓으세요.', toolOptions: { title: '119 신고 말하기', cards: ['사람 수', '위치', '상황'] }, target: { order: ['위치', '상황', '사람 수'] }, difficulty: 0.25 },
            { prompt: '가족 가운데 다친 사람이 있어요. 다친 상태까지 넣어 말할 차례로 카드를 놓으세요.', toolOptions: { title: '119 신고 말하기', cards: ['다친 사람 상태', '사람 수', '위치', '상황'] }, target: { order: ['위치', '상황', '사람 수', '다친 사람 상태'] }, difficulty: 0.3,
              levels: { easy: { prompt: '다친 사람이 있어요. 위치·상황·다친 상태 차례로 카드를 놓으세요(카드 3장).', toolOptions: { cards: ['다친 사람 상태', '위치', '상황'] }, target: { order: ['위치', '상황', '다친 사람 상태'] } } } },
            { prompt: '어딘지 모르는 길에서 신고해야 해요. 위치 단서를 하나씩 찾아 확인하며 짝에게 말해 보세요.', toolOptions: { title: '위치 단서 찾기', safety: ['도로 이름 표지판을 찾았다', '가까운 큰 건물·간판을 찾았다', '지나온 다리·터널 이름을 떠올렸다', '휴대전화 지도에서 내 위치를 열었다'] }, target: { safety: true }, difficulty: 0.3, conclude: '신고는 위치 → 상황 → 사람 수 → 다친 상태 차례로 말하고, 위치를 모르면 표지판·건물·다리 이름을 단서로 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상의 침수 장소를 정하고, 위치 단서를 넣어 119에 할 첫마디를 한 문장으로 쓰세요(실제 집 주소는 쓰지 않아요).' }] },
        notes: '신고 차례(위치 먼저)는 일반 신고 요령이다. 연습할 때 실제 번호로 전화하지 않게 하고, 학생의 실제 주소를 말하지 않게 한다.',
      }),
      M({
        id: 'activity.prepare-check', type: 'activity', title: '차량 비상 준비물 고르기',
        method: '차량 비상 준비물 점검', tool: 'kitchen', minutes: 19,
        levels: { easy: '준비물 항목 가운데 앞쪽 일부만 보고 필요한 것을 표시한다.', base: '모든 항목에서 필요한 것만 골라 표시하고 필요 없는 것은 남긴다.', challenge: '준비물과 쓰임을 짝짓는 문항까지 풀고, 활동지에 우리 집 차에 없는 것 하나를 쓴다.' },
        activity: {
          title: '차에 둘 비상 준비물', tool: 'kitchen',
          teacher: '"우리 집 차 트렁크에는 무엇이 있을까요? 오늘은 폭우 날 쓸모 있는 것만 골라 봐요." 점검표에서 필요한 것만 표시하게 한다. 방향제나 여분 신발 같은 것을 고르는 학생에게 "물에 잠기는 차 안에서 이것이 어떤 도움이 될까요?"라고 묻는다. 창문 깨는 도구는 손이 닿는 곳에 두어야 쓸 수 있다는 점과, 준비물보다 앞서는 것은 출발 전 기상 특보를 확인하는 습관이라는 점을 짚는다.',
          task: '폭우 날 차에 두면 쓸모 있는 준비물과 출발 전 확인할 것을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            CHECKQ('폭우 날 차에 두면 쓸모 있는 비상 준비물만 표시하세요.', '차량 비상 준비물', [['hammer', '손 닿는 곳의 창문 깨는 도구', true], ['flash', '손전등', true], ['air', '방향제', false], ['charge', '휴대전화 충전기', true], ['water', '마실 물', true], ['cushion', '장식 쿠션', false]], { k: 4, d: 0.25 }),
            CHECKQ('폭우 예보가 있는 날 출발 전에 확인할 것만 표시하세요.', '출발 전 확인', [['alert', '기상 특보·호우 경보 확인', true], ['route', '지하차도를 피한 우회 경로 정하기', true], ['music', '들을 음악 목록 고르기', false], ['share', '가족에게 출발·도착 시각 알리기', true], ['fuel', '연료·배터리 넉넉한지 보기', true], ['wash', '세차 예약하기', false]], { k: 4, d: 0.3 }),
            MATCHQ('준비물과 그 쓰임을 짝지으세요.', [['창문 깨는 도구', '문이 안 열릴 때 창문으로 나간다'], ['손전등', '어두운 차 안·밖에서 길을 비춘다'], ['휴대전화 충전기', '신고와 연락을 이어 간다']], { k: 3, extra: ['차 안 냄새를 없앤다'], d: 0.35, opt: { mode: 'match' }, more: { conclude: '준비물은 위급할 때 손이 닿아야 쓸모가 있어요. 그보다 먼저 특보를 확인하고 물에 잠기는 길을 피해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 집 차(또는 자주 타는 차)에 아직 없는 준비물 하나와 둘 자리를 쓰세요.' }] },
        notes: '준비물 목록은 일반 안전 수칙이다. 차량 비상 준비물과 창문 깨는 도구의 두는 자리는 국민재난안전포털 안내로 확인한다.',
      }),

      M({
        id: 'wrap.rain-map', type: 'wrap', title: '폭우 날 판단 기준 정리',
        method: '폭우 날 판단 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 이름(출발 전·운전 중·위급 시)을 읽어 주고 카드를 함께 단다.', base: '가지마다 카드 2장씩 스스로 단다.', challenge: '활동지에서 세 가지 가운데 가장 먼저 지킬 기준에 표시하고 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 언제 쓰는지에 따라 정리해 봐요. 출발하기 전, 길 위에서, 위급할 때." 출구 1번에서 판단 카드를 세 가지에 달게 한다. \'창문 깨는 도구로 나간다\'를 출발 전 가지에 놓는 학생에게 "그 도구가 출발 전에 해야 할 일은 무엇일까요? 쓰는 것과 챙기는 것은 다르죠"라고 묻는다. 활동지에서 가장 먼저 지킬 기준을 고르게 하고, 대부분의 위험은 출발 전 판단에서 막힌다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '폭우 날 판단', slots: ['출발 전', '운전 중', '위급 시'], cards: ['호우 특보 확인', '우회 경로 정하기', '물이 찬 지하차도에 들어가지 않기', '물이 불면 돌아 나오기', '문이 열릴 때 빨리 나오기', '높은 곳에서 112·119 신고'] }, prompt: '폭우 날 판단 카드를 언제 쓰는지에 따라 세 가지에 다세요.', target: { sort: { '출발 전': ['호우 특보 확인', '우회 경로 정하기'], '운전 중': ['물이 찬 지하차도에 들어가지 않기', '물이 불면 돌아 나오기'], '위급 시': ['문이 열릴 때 빨리 나오기', '높은 곳에서 112·119 신고'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['물이 찬 도로에는 들어가지 않는다', '큰 차는 물웅덩이를 지나가도 괜찮다', '차에 물이 차면 문이 열릴 때 빨리 나온다'], answer: 1, difficulty: 0.15, explain: '물이 바퀴를 넘으면 큰 차도 떠밀리거나 멈출 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '폭우 날 판단 기준',
          items: [
            { type: 'check', prompt: '세 가지 가운데 가장 먼저 지킬 기준 하나에 표시하세요.', options: ['출발 전: 특보 확인과 우회 경로', '운전 중: 물이 찬 길에 들어가지 않기', '위급 시: 문이 열릴 때 빨리 나오기'] },
            { type: 'short', prompt: '그 기준을 가장 먼저 지키기로 한 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '폭우 날 가족 이동에서 내 역할',
        method: '폭우 날 나의 판단 성찰', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("폭우 예보가 있는 날 나는 ~")을 보고 쓴다.', base: '세 문장을 쓰고 기준표 세 항목을 스스로 점검한다.', challenge: '기준표를 모두 점검하고, 활동지에 가족에게 실제로 건넬 말까지 쓴다.' },
        wrap: {
          teacher: '"운전은 어른이 해도, 폭우 날 가족 이동에서 내가 할 수 있는 역할이 있어요. 특보를 먼저 보는 사람, 우회 길을 찾는 사람, 멈추자고 말하는 사람." 쓰기 전에 기준표를 함께 읽는다. "나는 아직 운전을 안 하니까 할 일이 없다"고 쓴 학생에게 "수아는 운전대를 잡지 않았지만 무엇을 바꿀 수 있었나요?"라고 묻는다. 내 역할은 구체적인 행동으로 써야 실제로 할 수 있다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '폭우 날 가족이 차로 이동할 때 내가 할 역할을 세 문장으로 쓰세요.', minChars: 50, maxChars: 400, starter: '폭우 예보가 있는 날 나는 ~', sample: '폭우 예보가 있는 날 나는 출발 전에 기상 특보를 먼저 확인하겠다. 지하차도를 피하는 길을 지도에서 찾아 가족에게 알리겠다. 물이 찬 길 앞에서는 돌아가자고 분명하게 말하겠다.' }, prompt: '폭우 날 내 역할을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['구체적인 행동을 썼다', '그 행동이 필요한 근거를 썼다', '운전자가 아니어도 할 수 있는 일을 썼다'], mustInclude: [['특보', '우회', '지하차도', '물']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '차에 물이 차오르기 시작했어요. 가장 먼저 할 일은?', options: ['물이 빠질 때까지 차 안에서 기다린다', '안전띠를 풀고 문이 열릴 때 나간다', '휴대전화로 사진을 찍어 둔다'], answer: 1, difficulty: 0.15, explain: '물이 더 차면 문이 열리지 않아요. 문이 열릴 때 빨리 나와요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '폭우 날 나의 역할',
          items: [
            { type: 'short', prompt: '폭우 날 가족 이동에서 내가 맡을 역할을 세 문장으로 쓰세요.' },
            { type: 'short', prompt: '가족에게 실제로 건넬 한마디를 따옴표 안에 쓰세요.' },
          ],
          easy: { note: '"폭우 예보가 있는 날 나는 ~ 하겠다. 왜냐하면 ~"', items: [{ type: 'short', prompt: '폭우 날 출발 전에 내가 할 일 하나를 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 10. 사고 후 대처와 운전자의 의무 (11학년)
  // ======================================================================================================
  {
    const M = MOD('after-crash', [11]);
    const ROAD = (extra = {}) => Object.assign({ title: '가상 도로(사고 현장)', grid: [6, 4], places: [{ name: '사고 차', icon: 'dot', at: [3, 1] }, { name: '사고 차 바로 옆 차로', icon: 'dot', at: [3, 2] }, { name: '사고 차 뒤쪽 멀리', icon: 'dot', at: [0, 1] }, { name: '가드레일 밖', icon: 'dot', at: [3, 0] }, { name: '사고 지점 앞 갓길', icon: 'dot', at: [5, 0] }, { name: '도로 한가운데', icon: 'dot', at: [2, 2] }] }, extra);
    const LEAVE = { text: '골목에서 천천히 나오던 은호의 차가 자전거 탄 고등학생의 앞바퀴를 살짝 쳤다. 학생은 넘어졌다 일어나 "괜찮아요, 그냥 가세요"라고 한다.', who: '은호', motif: 'house', choices: [
      { id: 'go', text: '본인이 괜찮다고 했으니 그냥 간다', result: '학생은 절뚝이며 자전거를 끌고 간다.', impact: [{ who: '학생', text: '다친 곳을 혼자 감당한다', tone: -1 }],
        next: { text: '사흘 뒤, 학생의 손목이 부어 병원에서 금이 갔다는 말을 들었다. 근처 차의 영상이 경찰에 전달된다.', choices: [
          { id: 'self', text: '경찰에 먼저 연락해 그날 일을 말한다', result: '늦었지만 사실을 밝히고 치료비 처리를 의논한다.', impact: [{ who: '은호', text: '책임을 지지만 떠난 일도 함께 따져진다', tone: 0 }], ending: '괜찮다는 말을 믿고 떠난 순간, 해야 할 조치를 하지 않은 책임이 남는다.' },
          { id: 'hide', text: '모른 척 기다린다', result: '경찰이 영상으로 차를 찾아 연락한다.', impact: [{ who: '은호', text: '사고 뒤 조치를 하지 않은 무거운 책임을 진다', tone: -1 }], ending: '떠나면 사고보다 떠난 일이 더 무거운 책임이 된다.' }] } },
      { id: 'stay', text: '차를 세우고 비상등을 켠 뒤 학생의 상태를 살핀다', result: '학생이 손목이 조금 아프다고 말한다.', impact: [{ who: '학생', text: '혼자가 아니다', tone: 1 }],
        next: { text: '학생이 "부모님께 혼날까 봐 신고는 싫어요"라고 한다.', choices: [
          { id: 'report', text: '그래도 112에 알리고 연락처를 주고받는다', result: '경찰이 와서 사고를 기록하고, 학생은 보호자와 병원에 간다.', impact: [{ who: '학생', text: '치료와 보상을 받을 길이 열린다', tone: 1 }], ending: '괜찮다는 말보다 멈춤·구호·신고·기록이 둘 다를 지킨다.' },
          { id: 'number', text: '연락처만 주고 신고는 하지 않는다', result: '며칠 뒤 다친 정도를 두고 말이 엇갈린다.', impact: [{ who: '두 사람', text: '기록이 없어 다툼이 생긴다', tone: -1 }], ending: '연락처는 시작일 뿐, 사람이 다쳤다면 신고와 기록이 필요하다.' }] } },
      { id: 'money', text: '현금을 조금 건네고 서둘러 간다', result: '학생은 얼떨결에 돈을 받는다.', impact: [{ who: '학생', text: '치료가 필요한지 아무도 확인하지 않는다', tone: -1 }], ending: '돈으로 끝낸 자리에는 구호도 신고도 기록도 없다.' }] };
    const LEAVE_R = [{ id: 'duty', text: '사고를 낸 운전자는 멈추고 다친 사람을 구호하며 신고해야 한다' }, { id: 'later', text: '다친 곳은 시간이 지나서야 드러날 수 있다' }, { id: 'ok', text: '다친 사람이 괜찮다고 하면 그냥 가도 된다', why: '괜찮다는 말이 운전자의 조치 의무를 없애지 않아요.' }, { id: 'small', text: '가벼운 사고는 신고할 필요가 없다', why: '사람이 다쳤는지는 그 자리에서 다 알 수 없어요.' }];

    MODS.push(
      M({
        id: 'intro.after-story', type: 'intro', title: '접촉 사고 뒤 빠진 장면',
        method: '작은 접촉 사고 뒤 장면', tool: 'story', minutes: 6,
        levels: { easy: '장면 카드 3장을 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 운전자가 빠뜨린 조치 하나를 짚는다.', challenge: '빠뜨린 조치 둘(구호·신고)을 짚고 어느 장면 사이에 들어가야 하는지 말한다.' },
        intro: {
          teacher: '"골목에서 차와 자전거가 살짝 부딪쳤어요. 장면을 차례로 놓아 보고, 운전자가 무엇을 빠뜨렸는지 찾아봐요." 시연으로 장면을 놓은 뒤 "넘어진 사람이 \'괜찮다\'고 했을 때 운전자는 무엇을 확인했나요?"라고 묻는다. "가벼운 사고는 그냥 가도 된다"는 말이 나오면 "다친 곳이 그 자리에서 다 보일까요? 사흘 뒤 손목이 부으면 누가 책임질까요?"라고 되묻는다. 오늘은 사고 뒤 운전자가 해야 할 일의 차례를 세운다고 밝힌다.',
          student: '차와 자전거의 가벼운 접촉 사고 장면 카드를 차례로 놓고, 운전자가 빠뜨린 조치가 무엇인지 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '골목 접촉 사고(가상)', cards: [{ id: 'turn', text: '차가 골목에서 천천히 나온다', motif: 'house' }, { id: 'touch', text: '자전거 앞바퀴와 살짝 부딪친다', motif: 'star' }, { id: 'ok', text: '넘어진 학생이 "괜찮아요"라고 한다', motif: 'cloud' }, { id: 'leave', text: '운전자가 그대로 떠난다', motif: 'moon' }], shuffle: false }, sequence: [{ order: ['turn', 'touch', 'ok', 'leave'] }] },
          art: { draw: 'a paper alley corner, a paper car stopped at an angle and a paper bicycle tipped on its side, a student standing up holding a wrist, and an empty dotted space where a missing step should be', banner: '괜찮다는 말 뒤에 할 일', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가상 사례다. 학생에게 사고를 겪은 적이 있는지 묻지 않는다. 사고 후 조치 의무는 도로교통법 취지로만 다루고 조문 번호·형량은 쓰지 않는다.',
      }),
      M({
        id: 'intro.duty-map', type: 'intro', title: '사고 직후 할 일 네 갈래',
        method: '사고 뒤 할 일 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 이름(안전·구호·신고·기록)을 읽어 주며 카드를 함께 단다.', base: '가지마다 할 일 카드를 하나씩 학생이 단다.', challenge: '네 가지에 할 일의 차례 번호를 매기고 그 까닭을 말한다.' },
        intro: {
          teacher: '"사고가 나면 머리가 하얘져요. 그래서 미리 네 갈래로 정리해 두는 거예요. 안전, 구호, 신고, 기록." 시연 단추로 카드가 가지에 달리는 모습을 보여 준 뒤 "이 넷 가운데 무엇이 가장 먼저일까요?"라고 묻는다. "사진부터 찍어야 증거가 남는다"는 말이 나오면 "사진을 찍는 동안 뒤에서 차가 오면 어떻게 될까요? 다친 사람은 누가 돌볼까요?"라고 되묻는다. 기록은 중요하지만 사람과 안전 다음이라는 점을 짚는다.',
          student: '가운데 \'사고 직후\'에서 안전·구호·신고·기록 가지에 할 일 카드를 달아 보고, 무엇이 가장 먼저인지 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '사고 직후', slots: ['안전', '구호', '신고', '기록'], cards: ['비상등 켜고 안전한 곳으로', '다친 사람 상태 살피기', '112·119에 알리기', '사진·연락처 남기기'] }, sequence: [{ sort: { '안전': ['비상등 켜고 안전한 곳으로'], '구호': ['다친 사람 상태 살피기'], '신고': ['112·119에 알리기'], '기록': ['사진·연락처 남기기'] } }] },
          art: { draw: 'a paper mind map with a crashed paper car in the center and four paper branches ending in a warning triangle, a first aid cross, a phone and a camera', banner: '안전·구호·신고·기록', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      M({
        id: 'activity.duty-order', type: 'activity', title: '사고 뒤 조치 차례 세우기',
        method: '사고 후 조치 차례', tool: 'timeline', minutes: 19,
        levels: { easy: '조치 카드 3장(멈춤·구호·신고)을 차례로 놓는다.', base: '2차 사고 예방·기록까지 5장을 차례로 놓고, 목격자의 차례도 놓는다.', challenge: '카드가 섞여 나오고, 목격자 차례에서 함정 카드(영상 찍어 올리기)를 남기며 당사자·목격자의 할 일을 짝짓는다.' },
        activity: {
          title: '당사자와 목격자의 조치 차례', tool: 'timeline',
          teacher: '"사고를 낸 운전자는 무엇부터 해야 할까요? 차례가 바뀌면 사람이 더 다칠 수 있어요." 당사자 차례를 놓은 뒤 목격자 차례를 따로 놓게 한다. 기록을 신고보다 앞에 두는 학생에게 "사진을 찍는 동안 다친 사람은 누가 살필까요?"라고 묻는다. 목격자 차례에서 영상을 찍어 올리는 카드를 넣는 학생에게는 "그 영상이 다친 사람에게 어떤 도움이 될까요?"라고 되묻는다. 목격자는 의무는 아니어도 신고와 안전 확보로 큰 도움이 될 수 있다는 점을 짚는다.',
          task: '사고를 낸 운전자와 목격자가 할 조치의 차례를 놓고 할 일을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('사고를 낸 운전자가 할 조치를 차례로 놓으세요.', ['즉시 멈추기', '비상등·안전 삼각대로 2차 사고 막기', '다친 사람 구호', '112·119 신고', '사진·연락처 기록'], { k: 3, d: 0.35, opt: { axis: ['먼저', '나중'] }, more: { hints: ['사람이 더 다치지 않게 하는 일이 앞에 와요.'] } }),
            ORDERQ('사고를 본 목격자가 할 일을 차례로 놓고, 맞지 않는 카드는 남기세요.', ['내 안전부터 확보하기', '112·119에 위치 알리기', '다친 사람 곁에서 돕기', '경찰에게 본 것 말하기'], { k: 3, traps: ['영상을 찍어 SNS에 올리기'], d: 0.4, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('누가 하는 일인지 짝지으세요.', [['사고를 낸 운전자', '멈추고 구호·신고하는 의무가 있다'], ['사고를 본 목격자', '안전한 곳에서 신고하고 본 것을 말한다'], ['다친 사람', '괜찮아 보여도 치료가 필요한지 확인받는다']], { k: 3, extra: ['괜찮다고 하면 그냥 보낸다'], d: 0.35, more: { conclude: '당사자는 멈춤 → 2차 사고 예방 → 구호 → 신고 → 기록, 목격자는 내 안전 → 신고 → 도움 → 진술 차례로 움직여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '당사자와 목격자의 조치 차례를 견주어 쓰세요.', columns: ['차례', '사고를 낸 운전자', '목격자'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] }] },
        notes: '사고 후 조치 의무(즉시 정차·구호·신고)는 도로교통법 취지로 다룬다. 2차 사고 예방 방법(비상등·안전 삼각대·대피)의 세부는 한국도로공사·도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'activity.leave-dilemma', type: 'activity', title: '"괜찮아요, 그냥 가세요" 갈림길',
        method: '괜찮다는 말 앞 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거 카드 2장을 고른다.', base: '두 번째 갈림길(사흘 뒤·신고를 꺼리는 말)까지 가서 결과를 보고 근거 2장을 고른다.', challenge: '두 갈림길을 지나되 도움·피해 표시와 다른 선택 비교가 맞힌 뒤에만 보이고, 법과 도덕 근거를 함께 골라 다른 길과 견준다.' },
        activity: {
          title: '은호의 사고 뒤 갈림길', tool: 'dilemma',
          teacher: '"상대가 \'괜찮다, 그냥 가라\'고 하면 운전자의 할 일은 끝난 걸까요?" 선택마다 영향 칸을 함께 읽는다. 그냥 가는 길을 고른 학생에게 "사흘 뒤 장면에서 은호에게 남은 책임은 사고 하나뿐인가요?"라고 묻는다. 돈을 건네는 길에는 "그 돈으로 다친 사람의 치료가 확인되었나요?"라고 되묻는다. 상대를 배려하는 마음과 운전자의 의무는 함께 지킬 수 있다는 점, 법은 최소한이고 도덕은 그 위라는 점을 짚는다.',
          task: '접촉 사고 뒤 상대가 괜찮다며 가라는 장면이에요. 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('접촉 사고 뒤 운전자의 조치를 다하는 길을 끝까지 따라가고 근거 2장을 고르세요.', LEAVE, [['stay', 'report']], LEAVE_R, ['duty', 'later'], { d: 0.4 }),
            EXPLOREQ('그냥 떠난 길도 끝까지 가 보고, 사흘 뒤 은호에게 남은 책임을 견주세요.', LEAVE, LEAVE_R, ['떠난 길의 두 결말을 모두 확인했다', '머문 길과 떠난 길의 책임 차이를 짚었다'], { d: 0.35 }),
            DILQ('주차장에서 빈 차를 긁은 상황에서 알맞은 길을 고르고 근거 2장을 고르세요.', { text: '은호가 마트 주차장에서 후진하다 옆 빈 차의 문을 긁었다. 주변에 아무도 없다.', who: '은호', motif: 'house', choices: [
              { id: 'drive', text: '아무도 못 봤으니 그냥 간다', result: '빈 차 주인은 돌아와 긁힌 문을 보고 당황한다.', impact: [{ who: '차 주인', text: '누가 했는지 몰라 혼자 고친다', tone: -1 }], ending: '보는 사람이 없어도 내가 낸 사고의 책임은 사라지지 않는다.' },
              { id: 'note', text: '차를 세우고 차 주인에게 연락할 방법을 찾는다', result: '앞 유리의 연락처로 연락하거나 마트 안내에 알린다.', impact: [{ who: '차 주인', text: '사정을 알게 된다', tone: 1 }],
                next: { text: '차 주인이 바로 오지 못한다며 "나중에 연락할게요"라고 한다.', choices: [
                  { id: 'record', text: '긁힌 곳 사진과 내 연락처를 남기고 보험 처리를 약속한다', result: '며칠 뒤 보험으로 수리가 처리된다.', impact: [{ who: '두 사람', text: '다툼 없이 정리된다', tone: 1 }], ending: '연락과 기록이 남으면 작은 사고는 작게 끝난다.' },
                  { id: 'vague', text: '연락처 없이 "제가 했어요"라는 쪽지만 꽂는다', result: '차 주인은 누구에게 연락할지 모른다.', impact: [{ who: '차 주인', text: '여전히 혼자 처리한다', tone: -1 }], ending: '연락할 수 없는 사과는 책임을 다한 것이 아니다.' }] } }] },
              [['note', 'record']], [{ id: 'own', text: '보는 사람이 없어도 내가 낸 사고는 알리고 처리한다' }, { id: 'contact', text: '상대가 연락할 수 있게 연락처와 기록을 남긴다' }, { id: 'nobody', text: '아무도 못 봤으면 책임이 없다', why: '목격자가 없어도 사고와 책임은 그대로예요.' }], ['own', 'contact'], { d: 0.35, more: { conclude: '사람이 다쳤다면 멈춤·구호·신고, 물건만 부서졌어도 알리고 연락처를 남겨요. 괜찮다는 말과 보는 눈은 의무를 바꾸지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"괜찮아요, 그냥 가세요"라는 말에 운전자가 할 대답을 존중과 의무를 함께 담아 한 문장으로 쓰세요.' }] },
        notes: '갈림길 나무가 2단계라 도전 단계는 갈림길 수 대신 영향 표시·다른 선택 비교를 맞힌 뒤에만 보이게 한다. 사고 뒤 떠난 경우의 처벌 내용·형량은 다루지 않는다.',
      }),
      M({
        id: 'activity.scene-map', type: 'activity', title: '2차 사고를 막는 자리 정하기',
        method: '2차 사고 막는 배치 지도', tool: 'map', minutes: 18,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보여 사람·삼각대 자리를 고른다.', base: '이름을 보고 사람이 피할 자리·안전 삼각대 자리·목격자가 차를 세울 자리에 핀을 꽂는다.', challenge: '지도에 이름 없이 칸만 보고 꽂고, 활동지에 배치마다 근거를 쓴다.' },
        activity: {
          title: '사고 현장 배치 지도', tool: 'map',
          teacher: '"고장 나거나 사고 난 차 옆에 서 있다가 뒤차에 부딪히는 2차 사고가 있어요. 사람은 어디로 피해야 할까요?" 문항마다 핀을 꽂기 전에 "뒤에서 오는 차는 이 자리를 언제 알아볼 수 있을까요?"라고 묻는다. 사고 차 옆 차로에 사람을 세우는 학생에게 "그 자리에 서서 전화하면 뒤차와 나 사이에는 무엇이 있나요?"라고 묻는다. 안전 삼각대는 뒤차가 미리 알아보도록 사고 차 뒤쪽 멀리 둔다는 점을 짚는다.',
          task: '가상 도로 칸 지도에서 2차 사고를 막을 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
          items: [
            { prompt: '비상등을 켜고 차에서 내린 사람들이 2차 사고를 피해 기다릴 자리에 핀을 꽂으세요.', toolOptions: ROAD(), target: { place: '가드레일 밖' }, difficulty: 0.25 },
            { prompt: '뒤에서 오는 차가 사고를 미리 알아보도록 안전 삼각대를 둘 자리에 핀을 꽂으세요.', toolOptions: ROAD(), target: { place: '사고 차 뒤쪽 멀리' }, difficulty: 0.3 },
            { prompt: '사고를 보고 도우려는 목격자가 자기 차를 세울 자리에 핀을 꽂으세요.', toolOptions: ROAD(), target: { place: '사고 지점 앞 갓길' }, difficulty: 0.35, conclude: '사람은 가드레일 밖으로, 안전 삼각대는 사고 차 뒤쪽 멀리, 목격자의 차는 사고 지점을 지나 앞쪽 갓길에 세워요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '배치마다 그 자리를 고른 근거를 쓰세요.', columns: ['배치', '자리', '근거'], cells: [['사람이 기다릴 곳', '', ''], ['안전 삼각대', '', ''], ['목격자의 차', '', '']] }] },
        notes: '지도는 가상 도로이고 문항마다 핀 하나다. 고속도로에서 안전 삼각대를 둘 거리·대피 방법의 수치는 쓰지 않았다 — 한국도로공사·도로교통공단 안내로 확인해 말로 보탠다.',
      }),
      M({
        id: 'activity.record-form', type: 'activity', title: '사실만 담는 사고 기록',
        method: '사고 기록 양식 작성', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '시간·장소·상황 세 항목을 문장 틀을 보고 쓴다.', base: '시간·장소·상황·다친 정도·연락 방법 다섯 항목을 사실만·빠짐없음·감정 배제 기준표로 점검하며 쓴다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 추측 문장을 사실 문장으로 고쳐 쓴다.' },
        activity: {
          title: '사고 기록 양식', tool: 'rubric-writing',
          teacher: '"사고 기록은 내 편을 드는 글이 아니라, 나중에 누가 읽어도 같은 장면이 떠오르는 글이에요." 가상 사고(오후 5시쯤, 학교 앞 골목, 차와 자전거 접촉)를 읽고 양식에 맞춰 쓰게 한다. "저 사람이 너무 빨리 달려서"처럼 추측과 감정이 섞인 문장을 쓴 학생에게 "그 속도를 내가 잰 걸까요, 그렇게 느낀 걸까요?"라고 묻는다. 기록에 실제 이름·연락처 대신 \'가해 차량 운전자\'·\'연락처 주고받음\'처럼 쓰게 한다.',
          task: '가상 사고를 양식에 맞춰 기록하고 기준표(사실만·빠짐없음·감정 배제)로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 사고의 시간·장소·상황을 사실만 담아 기록하세요.', '가상 사고: 오후 5시쯤 학교 앞 골목, 골목에서 나오던 차와 자전거가 접촉. 시간·장소·상황을 쓰세요(실제 이름·연락처는 쓰지 않아요).', ['시간·장소·상황을 모두 썼다', '본 것만 썼고 추측을 넣지 않았다', '감정 표현 없이 썼다'], { min: 50, max: 400, sent: [2, 4], must: [['시', '오후']], starter: '언제: 오후 ~. 어디서: ~. 무슨 일: ~', plus: '누가 어느 쪽에서 왔는지 방향을 썼다', d: 0.4 }),
            RWQ('같은 사고의 다친 정도와 연락처를 주고받은 방법, 신고 여부를 덧붙여 기록하세요.', '다친 정도·연락 방법·신고 여부를 덧붙여 쓰세요. 연락처 숫자는 쓰지 말고 \'주고받음\'으로 써요.', ['다친 정도를 본 대로 썼다', '연락 방법과 신고 여부를 썼다', '실제 연락처나 이름을 쓰지 않았다'], { min: 50, max: 400, sent: [2, 4], must: [['신고', '112', '119']], starter: '다친 정도: ~. 연락: ~. 신고: ~', plus: '찍은 사진의 종류(차 위치·부딪친 곳)를 썼다', d: 0.45 }),
            RWQ('"자전거가 미친 듯이 빨리 와서 어쩔 수 없었다"는 문장을 사실만 담은 문장으로 고쳐 쓰세요.', '추측과 감정이 섞인 문장을 사실 문장으로 고쳐 쓰세요. 무엇을 보았는지만 남겨요.', ['감정 낱말을 지웠다', '추측을 본 사실로 바꾸었다', '고친 까닭을 한 문장 덧붙였다'], { min: 40, max: 300, sent: [2, 3], must: [['보았', '봤', '확인']], starter: '고친 문장: 차가 골목을 나올 때 오른쪽에서 자전거가 오는 것을 ~', plus: '"어쩔 수 없었다" 같은 판단 문장을 지운 까닭을 썼다', d: 0.5, more: { conclude: '사고 기록은 시간·장소·상황·다친 정도·연락·신고를 빠짐없이, 본 사실만 감정 없이 적어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사고 기록에서 추측과 사실을 나눠 써야 하는 까닭을 한 문장으로 쓰세요.' }] },
        notes: '가상 사고이며 학생의 실제 경험을 쓰게 하지 않는다. 기록에 실제 이름·연락처·차량 번호를 쓰지 않게 한다.',
      }),

      M({
        id: 'wrap.duty-words', type: 'wrap', title: '상황마다 운전자의 의무 잇기',
        method: '운전자 의무 낱말', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 첫 상황을 함께 읽고 의무 카드를 잇는 것을 보고 나머지를 잇는다.', base: '상황 4개에 의무 카드 4장을 스스로 잇는다.', challenge: '출구 3번에 의무 하나가 필요한 새 상황을 지어 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 운전자의 의무를 상황에 이어 봐요. 즉시 정차, 구호, 신고, 기록." 출구 1번에서 상황 카드마다 의무를 잇게 한다. \'다친 사람이 괜찮다고 한다\'에 아무 의무도 잇지 않으려는 학생에게 "그 말을 들었을 때 확인할 것은 무엇일까요?"라고 묻는다. 출구 3번에서 새 상황을 지어 쓰게 하고 두세 명의 상황을 함께 읽는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '차가 자전거와 부딪쳤다' }, { id: 's2', label: '넘어진 사람이 손목을 잡고 있다' }, { id: 's3', label: '다친 사람이 괜찮다며 가라고 한다' }, { id: 's4', label: '경찰이 와서 사고를 정리한다' }], cards: ['사진·연락처 기록', '112·119 신고', '다친 사람 구호', '즉시 정차'] }, prompt: '상황 카드마다 운전자가 할 의무를 잇세요.', target: { match: { s1: '즉시 정차', s2: '다친 사람 구호', s3: '112·119 신고', s4: '사진·연락처 기록' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '사고 뒤 다친 사람이 "괜찮다"고 할 때 맞는 행동을 고르세요.', options: ['그 말을 믿고 바로 떠난다', '상태를 살피고 신고·연락처를 남긴다', '돈을 건네고 끝낸다'], answer: 1, difficulty: 0.15, explain: '다친 곳은 나중에 드러날 수 있어요. 괜찮다는 말이 운전자의 의무를 없애지 않아요.' },
            { type: 'short', prompt: '운전자의 의무 하나가 꼭 필요한 새 사고 상황을 한 문장으로 지어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '운전자의 의무',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사고를 낸 운전자는 즉시 멈추고, 다친 사람을 ___하며, 경찰에 신고한다.', answer: '구호' },
            { type: 'short', prompt: '사고 뒤 그냥 떠나면 안 되는 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '출구 질문은 단계별 판이 없어, 쉬움 단계는 교사가 첫 상황을 함께 읽어 주는 방식으로 돕는다.',
      }),
      M({
        id: 'wrap.after-sort', type: 'wrap', title: '당사자·목격자·둘 다의 할 일',
        method: '사고 대처 이해 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 카드 4장을 함께 읽으며 세 칸에 나눈다.', base: '카드 6장을 당사자·목격자·둘 다 칸에 스스로 나눈다.', challenge: '\'둘 다\' 칸에 넣은 카드 하나를 골라 출구 3번에 그 근거를 쓴다.' },
        wrap: {
          teacher: '"사고 현장에 있는 사람은 사고를 낸 사람만이 아니에요. 지나가던 나도 할 일이 있어요." 출구 1번에서 카드를 세 칸에 나누게 한다. \'다친 사람 구호\'를 당사자 칸에만 넣으려는 학생에게 "목격자는 다친 사람 곁에서 아무것도 하면 안 될까요?"라고 묻는다. 당사자에게는 법이 정한 의무가, 목격자에게는 안전한 범위의 도움이 있다는 차이를 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '사고 현장에서', slots: ['사고를 낸 운전자', '목격자', '둘 다'], cards: ['즉시 정차하기', '사고 차에 비상등 켜기', '본 것을 경찰에 말하기', '먼저 내 안전 확보', '112·119에 알리기', '다친 사람 곁에서 돕기'] }, prompt: '사고 뒤 할 일 카드를 누가 하는지에 따라 세 칸에 나누세요.', target: { sort: { '사고를 낸 운전자': ['즉시 정차하기', '사고 차에 비상등 켜기'], '목격자': ['본 것을 경찰에 말하기', '먼저 내 안전 확보'], '둘 다': ['112·119에 알리기', '다친 사람 곁에서 돕기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '사고를 본 목격자에게 가장 알맞은 첫 행동은?', options: ['사고 차 옆 차로에 서서 영상을 찍는다', '안전한 곳에서 112·119에 위치를 알린다', '모른 척 지나간다'], answer: 1, difficulty: 0.15, explain: '목격자도 내 안전을 먼저 지키고 신고로 도울 수 있어요.' },
            { type: 'short', prompt: '\'둘 다\' 칸에 넣은 카드 하나를 골라 그 근거를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '사고 현장의 할 일',
          items: [
            { type: 'table', prompt: '누가 무엇을 하는지 정리하세요.', columns: ['사고를 낸 운전자', '목격자', '둘 다'], cells: [['', '', ''], ['', '', '']] },
            { type: 'short', prompt: '목격자로서 오늘 배운 것 가운데 꼭 기억할 한 가지를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11. 운전면허 취득 로드맵 (12학년)
  // ======================================================================================================
  {
    const M = MOD('license-road', [12]);
    const NOVICE = { text: '면허를 딴 지 엿새째 금요일 저녁, 친구들이 "바다 보러 밤에 출발하자, 네가 운전해"라고 한다. 고속도로는 아직 한 번도 달려 보지 않았다.', who: '서진', motif: 'moon', choices: [
      { id: 'go', text: '분위기를 깨기 싫어 밤에 출발한다', result: '처음 타는 고속도로에서 차로를 바꿀 때마다 손에 땀이 난다.', impact: [{ who: '서진', text: '긴장과 피로가 함께 쌓인다', tone: -1 }],
        next: { text: '새벽 1시, 휴게소를 지나쳤는데 눈꺼풀이 무겁다. 친구들은 뒷자리에서 잠들었다.', choices: [
          { id: 'push', text: '조금만 더 가면 되니 참고 달린다', result: '차가 차로 경계선을 두 번 밟는다.', impact: [{ who: '탄 사람 모두', text: '졸음 운전 위험에 놓인다', tone: -1 }], ending: '초보 운전에 밤과 피로가 겹치면 위험이 한꺼번에 커진다.' },
          { id: 'rest', text: '다음 휴게소에 들어가 쉰다', result: '한참 쉬고 날이 밝은 뒤 다시 출발한다.', impact: [{ who: '서진', text: '늦었지만 위험을 멈춘다', tone: 0 }],
            next: { text: '아침에 친구가 "돌아올 땐 내가 몰게, 나 면허 딴 지 사흘 됐어"라고 한다.', choices: [
              { id: 'swap', text: '둘 다 초보라 낮에 쉬엄쉬엄 번갈아 몰자고 한다', result: '낮 시간, 한 시간마다 쉬며 돌아온다.', impact: [{ who: '탄 사람 모두', text: '천천히지만 무사히 돌아온다', tone: 1 }], ending: '출발을 잘못 골랐어도 그 뒤의 판단으로 위험을 줄일 수 있다.' },
              { id: 'night', text: '빨리 가려고 다시 밤에 출발한다', result: '같은 피로가 돌아오는 길에도 되풀이된다.', impact: [{ who: '탄 사람 모두', text: '같은 위험을 두 번 겪는다', tone: -1 }], ending: '한 번 운이 좋았다고 같은 선택이 안전해지지는 않는다.' }] } }] } },
      { id: 'day', text: '"아직 고속도로가 처음이라, 다음 주 토요일 낮에 가자"고 말한다', result: '친구 하나가 "재미없다"며 투덜댄다.', impact: [{ who: '서진', text: '잠깐 어색하지만 계획을 지킨다', tone: 0 }],
        next: { text: '토요일 아침, 출발 전에 보호자가 "고속도로 첫 운전이면 내가 옆자리에 탈까?"라고 묻는다.', choices: [
          { id: 'guide', text: '보호자와 먼저 가까운 고속도로 구간을 연습한다', result: '합류·차로 바꾸기를 한 번 해 보고 출발한다.', impact: [{ who: '서진', text: '처음 하는 일을 미리 익힌다', tone: 1 }],
            next: { text: '바다에서 돌아오는 길, 해가 지고 비가 오기 시작한다.', choices: [
              { id: 'slow', text: '속도를 줄이고 휴게소에서 비가 약해지길 기다린다', result: '한 시간 늦게 집에 도착한다.', impact: [{ who: '탄 사람 모두', text: '안전하게 돌아온다', tone: 1 }], ending: '초보 기간에는 시험에 없던 밤·비·고속도로를 하나씩 천천히 늘려 간다.' },
              { id: 'same', text: '늦을까 봐 평소 속도로 달린다', result: '앞차가 갑자기 멈춰 급정거한다.', impact: [{ who: '서진', text: '가까스로 멈추고 크게 놀란다', tone: -1 }], ending: '연습을 했어도 날씨가 바뀌면 판단도 바꿔야 한다.' }] } },
          { id: 'alone', text: '혼자 해 보고 싶어 그냥 출발한다', result: '합류 구간에서 속도를 못 맞춰 뒤차가 경적을 울린다.', impact: [{ who: '서진', text: '당황해 실수가 이어진다', tone: -1 }], ending: '낮을 고른 것은 좋았지만, 처음 하는 구간은 함께 연습해 두면 덜 위험하다.' }] } },
      { id: 'bus', text: '고속버스를 타고 가자고 제안한다', result: '모두 버스 안에서 쉬며 바다에 간다.', impact: [{ who: '친구들', text: '아무도 운전 부담 없이 간다', tone: 1 }], ending: '면허가 있어도 운전하지 않는 선택이 가장 안전할 때가 있다.' }] };
    const NOVICE_R = [{ id: 'novice', text: '면허를 딴 직후의 초보 기간에는 사고 위험이 크다' }, { id: 'step', text: '밤·고속도로·비 같은 낯선 조건은 하나씩 늘려 간다' }, { id: 'passed', text: '시험에 붙었으니 어디든 운전할 수 있다', why: '면허는 운전 자격이지 숙련이 아니에요.' }, { id: 'mood', text: '친구들 분위기를 깨지 않는 것이 먼저다', why: '분위기는 다음에 되살릴 수 있지만 사고는 되돌릴 수 없어요.' }];

    MODS.push(
      M({
        id: 'intro.step-order', type: 'intro', title: '면허 취득은 몇 단계일까',
        method: '면허 취득 단계 차례', tool: 'timeline', minutes: 6,
        levels: { easy: '교통안전교육·학과 시험·도로 주행 3단계 카드를 함께 차례로 놓는다.', base: '기능 시험까지 4단계를 차례로 놓는다.', challenge: '단계마다 시험 점수와 상관없이 배울 수 있는 안전 습관을 하나씩 말한다.' },
        intro: {
          teacher: '"수능이 끝나면 면허를 따겠다는 사람이 많죠. 면허는 몇 단계를 거쳐서 나올까요?" 시연으로 네 단계 카드를 차례로 놓은 뒤 "가장 먼저 하는 단계가 시험이 아니라 교육이라는 것, 알고 있었나요?"라고 묻는다. "도로 주행만 붙으면 운전은 다 배운 것"이라는 말이 나오면 "도로 주행 시험은 몇 분, 어떤 길에서 볼까요? 밤길이나 비 오는 날도 시험에 나올까요?"라고 되묻는다. 오늘은 단계마다 시험 너머의 습관을 함께 챙긴다고 밝힌다.',
          student: '운전면허를 따기까지 거치는 단계 카드를 차례로 놓고, 단계마다 시험과 상관없이 배워 둘 안전 습관이 무엇일지 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['처음', '면허 발급'], slots: 4, cards: ['도로 주행 시험', '교통안전교육', '기능 시험', '학과 시험'] }, sequence: [{ order: ['교통안전교육', '학과 시험', '기능 시험', '도로 주행 시험'] }] },
          art: { draw: 'a paper road winding up a hill with four paper milestones marked by small flags, a paper learner car at the bottom and a paper driver license card at the top', banner: '면허까지 네 단계', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '면허 종류별 응시 나이·시험 순서·교육 시간은 바뀔 수 있으니 수업 전 도로교통공단 안전운전 통합민원 안내로 확인한다.',
      }),
      M({
        id: 'intro.myth-pick', type: 'intro', title: '면허에 대한 사실과 오해',
        method: '면허에 대한 오해 고르기', tool: 'mindmap', minutes: 7,
        levels: { easy: '문장 카드 4장을 사실·오해 칸에 함께 나눈다.', base: '문장 카드 6장을 나누고 가장 흔한 오해 하나를 고른다.', challenge: '오해 칸에 놓은 카드마다 왜 오해인지 근거를 한 문장으로 말한다.' },
        intro: {
          teacher: '"면허에 대해 떠도는 말들이 있어요. 사실일까요, 오해일까요?" 시연으로 카드 두세 장을 칸에 넣어 보인 뒤 나머지를 학생들에게 묻는다. "면허 = 운전을 잘한다"를 사실 칸에 넣으려는 학생에게 "오늘 면허를 받은 사람과 10년 운전한 사람이 같은 실력일까요?"라고 되묻는다. 면허가 증명하는 것은 최소한의 자격이라는 것이 오늘의 출발점이라고 밝힌다.',
          student: '면허에 대한 문장 카드를 사실과 오해 칸으로 나누고, 오해라고 생각한 까닭을 말해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '면허에 대한 말', slots: ['사실', '오해'], cards: ['면허는 운전할 자격을 준다', '면허를 따면 운전을 다 배운 것이다', '초보 기간에 사고 위험이 크다', '시험 요령만 익히면 안전하게 운전한다'] }, sequence: [{ sort: { '사실': ['면허는 운전할 자격을 준다', '초보 기간에 사고 위험이 크다'], '오해': ['면허를 따면 운전을 다 배운 것이다', '시험 요령만 익히면 안전하게 운전한다'] } }] },
          art: { draw: 'a paper driver license card split in two halves, one side with a check mark and one with a question mark, surrounded by paper speech bubbles', banner: '면허 = 숙련일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.plan-budget', type: 'activity', title: '면허 준비 비용 나누기',
        method: '면허 준비 시간·비용 계획', tool: 'economy', minutes: 19,
        levels: { easy: '준비 항목 4개 가운데 안전 연습 항목을 넣고 가상 예산 안에서 고른다.', base: '항목 6개 가운데 연습 항목은 넣고 요령 항목은 빼며 예산을 맞춘다.', challenge: '예산이 줄어든 문항에서도 안전 연습 시간을 지키고, 활동지에 고른 근거를 쓴다.' },
        activity: {
          title: '가상 예산 안의 면허 준비', tool: 'economy',
          teacher: '"면허 준비에도 돈과 시간이 들어요. 오늘 금액은 모두 가상이고, 실제 학원비가 아니에요." 예산 막대를 보며 고르게 한다. \'합격 요령 특강\'만 담고 연습 시간을 빼는 학생에게 "합격한 다음 날 혼자 도로에 나가면 무엇이 나를 지켜 줄까요?"라고 묻는다. "보험은 부모님 차에 이미 있으니 상관없다"는 말에는 "그 보험이 초보인 나까지 보장하는지 확인해 봤나요?"라고 되묻는다. 예산이 모자라면 요령을 줄이고 연습을 지킨다는 점을 짚는다.',
          task: '가상 예산 안에서 면허 준비 항목을 고르되 안전 연습은 빼지 않아요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 예산 80만 원. 학원 교육과 도로 연습 시간은 꼭 넣고 고르세요.', toolOptions: { mode: 'budget', budget: 800000, items: [{ id: 'school', text: '운전 학원 교육(가상)', price: 500000 }, { id: 'drill', text: '보호자와 도로 연습 시간(가상 주유비)', price: 100000 }, { id: 'tip', text: '합격 요령 영상 강의', price: 80000 }, { id: 'acc', text: '차 꾸밈 소품', price: 60000 }], ask: '가상 면허 준비 예산' }, target: { budget: { must: ['school', 'drill'] } }, difficulty: 0.25 },
            { prompt: '가상 예산 100만 원. 학원 교육·도로 연습·초보 운전자 보험 확인은 꼭 넣고, 시험 요령 상품은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: [{ id: 'school', text: '운전 학원 교육(가상)', price: 500000 }, { id: 'drill', text: '보호자와 도로 연습 시간(가상 주유비)', price: 100000 }, { id: 'ins', text: '초보 운전자 보험 특약(가상)', price: 150000 }, { id: 'night', text: '보호자 동승 야간 연습(가상 주유비)', price: 50000 }, { id: 'tip', text: '합격 요령 영상 강의', price: 80000 }, { id: 'pass', text: '기능 시험 코스 암기 앱', price: 30000 }], ask: '가상 면허 준비 예산' }, target: { budget: { must: ['school', 'drill', 'ins'], not: ['tip', 'pass'] } }, difficulty: 0.35 },
            { prompt: '예산이 75만 원으로 줄었어요. 학원·도로 연습·보험 확인은 지키고, 요령 상품은 빼고 다시 고르세요.', toolOptions: { mode: 'budget', budget: 750000, items: [{ id: 'school', text: '운전 학원 교육(가상)', price: 500000 }, { id: 'drill', text: '보호자와 도로 연습 시간(가상 주유비)', price: 100000 }, { id: 'ins', text: '초보 운전자 보험 특약(가상)', price: 150000 }, { id: 'night', text: '보호자 동승 야간 연습(가상 주유비)', price: 50000 }, { id: 'tip', text: '합격 요령 영상 강의', price: 80000 }], ask: '줄어든 가상 예산' }, target: { budget: { must: ['school', 'drill', 'ins'], not: ['tip'] } }, difficulty: 0.4, conclude: '예산이 줄어도 실제로 몸에 익히는 연습과 사고 뒤 책임을 덜어 주는 보험 확인은 지켜요. 시험 요령은 그다음이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 끝까지 지킨 항목 하나와 그 근거를 한 문장으로 쓰세요.' }] },
        notes: '금액은 모두 수업용 가상 값이며 실제 학원비·보험료가 아니다. 교구의 예산 판은 돈(원)만 세므로 연습 시간은 \'주유비\' 같은 비용 항목과 다음 활동(시계 일정)으로 다룬다. 초보 운전자 보험 적용 범위는 가정마다 다르니 보호자와 확인하게 한다.',
      }),
      M({
        id: 'activity.schedule', type: 'activity', title: '수능 뒤 하루 연습 일정',
        method: '수능 뒤 면허 일정 짜기', tool: 'clock', minutes: 18,
        levels: { easy: '긴바늘이 15분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다.', base: '5분 단위로 학과 공부·연습 시각을 나타낸다.', challenge: '작은 눈금 없이 1분 단위로 나타내고, 아르바이트로 피곤한 날의 연습 시각까지 정한다.' },
        activity: {
          title: '연습 시각을 시계에 나타내기', tool: 'clock',
          teacher: '"수능 뒤 시간은 많아 보여도 늦잠·약속·아르바이트로 금방 흩어져요. 연습은 언제 하는 게 좋을까요?" 가상 인물 서진이의 하루를 읽고 시각을 나타내게 한다. "밤늦게 한산할 때 연습하면 좋다"는 학생에게 "피곤하고 어두울 때 처음 배우는 게 쉬울까요?"라고 묻는다. 오늘 시각은 \'피곤한 시간대를 피하고 밝을 때 연습한다\'는 우리 반 약속에 따른 연습용이라는 점을 밝힌다.',
          task: '서진이의 하루 일정에서 학과 공부와 운전 연습 시각을 시계에 나타내요.', levels: { easy: { minuteStep: 15, hourZone: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1, showMinuteMarks: false } },
          items: [
            { prompt: '서진이는 오전 10시에 일어나 아침을 먹고, 일어난 지 1시간 뒤부터 학과 공부를 해요. 학과 공부를 시작하는 시각을 나타내세요.', toolOptions: {}, target: { h: 11, m: 0 }, difficulty: 0.15 },
            { prompt: '학원 도로 연습은 점심 먹고 쉰 뒤 오후 2시 30분에 시작해요. 연습 시작 시각을 나타내세요.', toolOptions: {}, target: { h: 2, m: 30 }, difficulty: 0.2 },
            { prompt: '아르바이트가 오후 1시부터 5시까지인 날이에요. 끝난 뒤 바로 연습하지 않고 1시간 쉬었다가, 해가 지기 전에 하기로 했어요. 연습 시작 시각을 나타내세요.', toolOptions: {}, target: { h: 6, m: 0 }, difficulty: 0.35 },
            { prompt: '다음 날은 아침 9시에 일어났어요. 졸음이 가시도록 1시간 45분 뒤에 보호자와 연습을 시작해요. 시작 시각을 나타내세요.', toolOptions: {}, target: { h: 10, m: 45 }, difficulty: 0.4, conclude: '연습 시각은 \'비는 시간\'이 아니라 몸이 깨어 있고 밝은 시간으로 고르고, 피곤한 일 뒤에는 쉬는 시간을 먼저 넣어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 수능 뒤 하루 면허 준비 일정을 쓰세요.', columns: ['할 일', '시각', '그 시각을 고른 까닭'], cells: [['학과 공부', '', ''], ['운전 연습', '', ''], ['쉬는 시간', '', '']] }] },
        notes: '일정과 \'1시간 쉬기\'는 수업용 가상 예이며 의학·법 기준이 아니다.',
      }),
      M({
        id: 'activity.novice-dilemma', type: 'activity', title: '면허 딴 다음 주의 갈림길',
        method: '초보 운전 첫 주 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길까지 가서 결과를 보고 근거를 고른다.', challenge: '세 번째 갈림길(돌아오는 길)까지 따라가 근거를 고르고, 다른 길과 견준다.' },
        activity: {
          title: '서진이의 첫 주 드라이브 갈림길', tool: 'dilemma',
          teacher: '"면허를 딴 지 엿새, 친구들이 밤에 바다로 가자고 해요. 서진이라면 어떻게 할까요?" 선택마다 누가 영향을 받는지 읽게 한다. 밤 출발을 고른 학생에게 "새벽 1시 장면에서 뒷자리 친구들은 무엇을 하고 있었나요?"라고 묻고, 거절한 학생에게는 "거절만 했나요, 대안도 냈나요?"라고 묻는다. 초보 기간에 위험을 키우는 조건(밤·피로·처음 가는 길·여럿 태우기)이 한 장면에 겹쳤다는 점을 짚는다.',
          task: '서진이의 첫 주 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('초보 기간의 위험을 줄이며 바다에 다녀오는 길을 따라가고 근거를 고르세요.', NOVICE, [['day', 'guide', 'slow']], NOVICE_R, ['novice', 'step'], { d: 0.4 }),
            EXPLOREQ('밤 출발 길도 끝까지 가 보고, 내가 고른 길과 결과를 견주세요.', NOVICE, NOVICE_R, ['밤 출발 길의 끝 결과를 확인했다', '두 길에서 위험이 겹친 조건을 짚었다'], { d: 0.35 }),
            DILQ('초보 운전자가 동생을 학원에 데려다주는 날 알맞은 길을 고르고 근거를 고르세요.', { text: '면허를 딴 지 열흘, 보호자가 "동생 학원까지 데려다줄래?"라고 한다. 처음 가는 길이고 저녁 퇴근 시간이다.', who: '서진', motif: 'house', choices: [
              { id: 'phone', text: '휴대전화 길 안내를 보며 바로 출발한다', result: '화면을 보느라 신호 바뀐 것을 늦게 본다.', impact: [{ who: '동생', text: '급정거에 몸이 앞으로 쏠린다', tone: -1 }], ending: '처음 가는 길에서 화면까지 보면 초보 운전자의 눈이 모자란다.' },
              { id: 'plan', text: '출발 전 길을 미리 보고 안내를 켜 둔다', result: '길을 미리 알아 두니 조금 덜 긴장된다.', impact: [{ who: '서진', text: '앞을 보는 데 집중한다', tone: 1 }],
                next: { text: '학원 앞 도로에 차들이 줄지어 서 있고 뒤차가 재촉한다.', choices: [
                  { id: 'safe', text: '조금 지나 안전한 곳에 세워 동생을 내린다', result: '동생이 인도 쪽으로 내린다.', impact: [{ who: '동생', text: '안전하게 내린다', tone: 1 }], ending: '재촉을 받아도 내리는 자리는 안전을 기준으로 고른다.' },
                  { id: 'stop', text: '차로 한가운데 잠깐 세워 내리게 한다', result: '동생이 차 사이로 내린다.', impact: [{ who: '동생', text: '옆을 지나는 오토바이에 위험해진다', tone: -1 }], ending: '잠깐이라도 차로 한가운데는 내리는 자리가 아니다.' }] } }] },
              [['plan', 'safe']], [{ id: 'eyes', text: '처음 가는 길은 미리 익혀 두어야 앞을 볼 여유가 생긴다' }, { id: 'drop', text: '사람을 내리는 자리는 재촉보다 안전으로 고른다' }, { id: 'quick', text: '뒤차가 기다리니 빨리 내려 주는 게 예의다', why: '예의보다 동생의 안전이 먼저예요.' }], ['eyes', 'drop'], { d: 0.35, more: { conclude: '초보 기간에는 처음 하는 일(길·시간대·동승자)을 미리 준비하고, 재촉보다 안전을 기준으로 골라요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '초보 운전 첫 달에 나는 어떤 조건(밤·고속도로·비·여럿 태우기)을 언제부터 늘려 갈지 한 문장으로 쓰세요.' }] },
        notes: '초보 운전 기간 관련 제도의 세부는 수업 전 도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'activity.habit-essay', type: 'activity', title: '시험에 없는 안전 습관 쓰기',
        method: '시험 너머 안전 습관 성찰', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '문장 틀("시험에는 없지만 나는 ~을 습관으로 만들겠다. 왜냐하면 ~")을 보고 쓴다.', base: '안전 습관 3개와 까닭을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 습관을 지킬 실천 계획(언제·어떻게 확인)까지 쓴다.' },
        activity: {
          title: '시험 너머의 안전 습관', tool: 'rubric-writing',
          teacher: '"면허 시험은 몇십 분이고, 운전은 몇십 년이에요. 시험에는 없지만 꼭 필요한 습관은 무엇일까요?" 예로 \'출발 전 휴대전화 무음\', \'뒷좌석까지 안전띠 확인\'을 들고 쓰게 한다. "조심해서 운전한다"처럼 막연한 습관을 쓴 학생에게 "그 습관을 지켰는지 오늘 저녁에 확인할 수 있나요?"라고 묻는다. 습관은 언제·무엇을 하는지가 보이는 행동으로 써야 지킬 수 있다는 점을 짚는다.',
          task: '면허 시험에 없는 안전 습관과 그 까닭을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('면허 시험에는 없지만 운전자에게 꼭 필요한 안전 습관 하나와 까닭을 쓰세요.', '시험에는 없지만 꼭 필요한 안전 습관 하나를 고르고 그 까닭을 쓰세요.', ['언제·무엇을 하는지 보이는 행동으로 썼다', '그 습관이 필요한 까닭을 썼다', '시험과 실제 운전의 차이를 짚었다'], { min: 50, max: 400, sent: [2, 4], must: [['왜냐하면', '때문']], starter: '시험에는 없지만 나는 ~을 습관으로 만들겠다. 왜냐하면 ~', plus: '그 습관이 없을 때 생길 수 있는 일을 썼다', d: 0.35 }),
            RWQ('안전 습관 3개를 차례로 쓰고 각각의 까닭을 덧붙이세요.', '나의 안전 운전 습관 3개를 쓰고, 습관마다 까닭을 한 줄씩 붙이세요.', ['습관 3개를 썼다', '습관마다 까닭을 붙였다', '셋 모두 확인할 수 있는 행동이다'], { min: 80, max: 400, sent: [3, 6], plus: '셋 가운데 가장 지키기 어려운 것을 골라 적었다', d: 0.4 }),
            RWQ('세 습관 가운데 하나를 골라 첫 한 달 동안 지킬 실천 계획을 쓰세요.', '골라 둔 습관 하나를 첫 한 달 동안 어떻게 지킬지(언제·누구와·어떻게 확인) 쓰세요.', ['언제 할지 정했다', '지켰는지 확인할 방법을 정했다', '못 지킨 날 어떻게 되돌릴지 썼다'], { min: 60, max: 400, sent: [2, 5], must: [['확인', '점검']], plus: '함께 확인해 줄 사람(보호자·동승자)을 정했다', d: 0.45, more: { conclude: '시험은 한 번이지만 습관은 매번이에요. 언제·무엇을 하는지, 어떻게 확인할지까지 정해야 습관이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 습관 가운데 친구에게도 권하고 싶은 것 하나와 그 까닭을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.roadmap-story', type: 'wrap', title: '나의 면허 로드맵 다짐',
        method: '나의 면허 로드맵 장면', tool: 'story', minutes: 7,
        levels: { easy: '교사가 첫 말풍선을 함께 채워 보이고 나머지를 이어 채운다.', base: '지금·취득·초보·숙련 말풍선 네 칸을 낱말 카드로 채운다.', challenge: '출구 3번에서 카드에 없는 나만의 다짐을 스스로 지어 쓴다.' },
        wrap: {
          teacher: '"오늘 계획을 네 장면의 다짐으로 남겨 봐요. 지금, 면허를 딸 때, 초보일 때, 익숙해졌을 때 나는 무엇을 말하고 있을까요?" 출구 1번 말풍선은 카드로 채운다. \'익숙해지면 빨리 달려도 된다\' 카드를 숙련 칸에 넣는 학생에게 "익숙해진 운전자에게 가장 많이 생기는 실수는 무엇일까요?"라고 묻는다. 출구 3번에서 카드에 없는 다짐을 스스로 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '나의 면허 로드맵', slots: [{ id: 'f1', who: '지금의 나', label: '"지금은 ___."' }, { id: 'f2', who: '면허 딸 때의 나', label: '"시험 요령보다 ___."' }, { id: 'f3', who: '초보인 나', label: '"첫 달에는 ___."' }, { id: 'f4', who: '익숙해진 나', label: '"익숙해져도 ___."' }], cards: [{ id: 'w1', text: '동승자로서 운전자를 돕는다' }, { id: 'w2', text: '도로 연습 시간을 지킨다' }, { id: 'w3', text: '밝은 낮, 익숙한 길부터 달린다' }, { id: 'w4', text: '피곤하면 운전하지 않는다' }, { id: 'y1', text: '빨리 달려도 괜찮다' }] }, prompt: '네 장면의 말풍선을 다짐 카드로 채우세요.', target: { fill: { f1: 'w1', f2: 'w2', f3: 'w3', f4: 'w4' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '면허와 운전 실력에 대해 맞는 말을 고르세요.', options: ['면허를 받으면 숙련 운전자가 된다', '면허는 자격일 뿐이고 초보 기간에 사고 위험이 크다', '도로 주행 시험만 붙으면 밤길도 문제없다'], answer: 1, difficulty: 0.15, explain: '면허는 운전할 자격을 줄 뿐 숙련을 뜻하지 않아요. 초보 기간에는 조건을 하나씩 늘려 가요.' },
            { type: 'short', prompt: '카드에 없는 나만의 면허 로드맵 다짐 한 문장을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 면허 로드맵',
          items: [
            { type: 'table', prompt: '단계마다 나의 다짐을 쓰세요.', columns: ['단계', '나의 다짐'], cells: [['지금', ''], ['면허 취득', ''], ['초보', ''], ['숙련', '']] },
            { type: 'short', prompt: '로드맵에서 가장 지키기 어려울 것 같은 단계와 그 까닭을 쓰세요.' },
          ],
          easy: { note: '"지금은 ~. 면허를 딸 때는 ~." 두 칸만 채워도 돼요.', items: [{ type: 'short', prompt: '지금의 나와 면허 딸 때의 나에게 한 마디씩 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.ready-sort', type: 'wrap', title: '면허 준비, 언제 무엇을',
        method: '면허 준비 항목 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 카드 3장을 함께 읽으며 세 칸에 나눈다.', base: '카드 6장을 지금·졸업 뒤·면허 뒤 칸에 나눈다.', challenge: '활동지에 가족과 정할 것 하나를 더한다.' },
        wrap: {
          teacher: '"면허 준비는 수능 뒤에 한꺼번에 하는 일이 아니에요. 지금 할 수 있는 것도 있어요." 출구 1번에서 카드를 세 칸에 나눈다. \'교통 법규 읽기\'를 졸업 뒤 칸에 넣는 학생에게 "법규를 읽는 데 면허나 나이가 필요할까요?"라고 묻는다. 활동지에서 가족과 함께 정할 것(연습 시간·차 보험 확인 등)을 하나 더하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '면허 준비', slots: ['지금 할 수 있음', '졸업 뒤', '면허 뒤'], cards: ['동승자로 운전자 행동 살펴보기', '교통 법규 읽어 두기', '운전 학원 등록', '학과 시험 응시', '보호자 동승 도로 연습', '야간·고속도로 천천히 늘리기'] }, prompt: '면허 준비 카드를 할 수 있는 때에 따라 나누세요.', target: { sort: { '지금 할 수 있음': ['동승자로 운전자 행동 살펴보기', '교통 법규 읽어 두기'], '졸업 뒤': ['운전 학원 등록', '학과 시험 응시'], '면허 뒤': ['보호자 동승 도로 연습', '야간·고속도로 천천히 늘리기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '면허를 따는 첫 단계로 맞는 것을 고르세요.', options: ['도로 주행 시험', '교통안전교육', '기능 시험'], answer: 1, difficulty: 0.15, explain: '면허는 교통안전교육을 받은 뒤 학과·기능·도로 주행 시험을 차례로 거쳐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '면허 준비 시기 나누기',
          items: [
            { type: 'table', prompt: '시기마다 내가 할 준비를 쓰세요.', columns: ['시기', '할 준비'], cells: [['지금', ''], ['졸업 뒤', ''], ['면허 뒤', '']] },
            { type: 'short', prompt: '가족과 함께 정할 면허 준비 한 가지(연습 시간·보험 확인 등)를 쓰세요.' },
          ],
        },
        notes: '학원 등록·시험 응시가 가능한 시기는 면허 종류별 응시 나이에 따른다. \'졸업 뒤\'는 이 반의 계획 기준이며, 실제 응시 나이는 도로교통공단 안내로 확인한다.',
      }),
    );
  }

  // ======================================================================================================
  // 12. 방어 운전과 운전 전 나의 상태 (12학년)
  // ======================================================================================================
  {
    const M = MOD('defensive-drive', [12]);
    const ANGRY = { text: '대학 새내기 지안이는 주차장에서 가족과 크게 다툰 뒤 차 열쇠를 집어 들었다. 손이 떨리고 얼굴이 뜨겁다.', who: '지안', motif: 'cloud', choices: [
      { id: 'drive', text: '바로 시동을 걸고 출발한다', result: '첫 교차로에서 노란불인데도 속도를 올린다.', impact: [{ who: '지안', text: '화가 판단을 앞지른다', tone: -1 }],
        next: { text: '앞차가 천천히 가자 지안이는 바짝 붙어 경적을 울린다.', choices: [
          { id: 'tail', text: '차로를 바꿔 앞지르려 한다', result: '옆 차로 이륜차를 늦게 보고 급히 핸들을 꺾는다.', impact: [{ who: '이륜차 운전자', text: '부딪칠 뻔해 넘어질 뻔한다', tone: -1 }], ending: '화난 운전은 나보다 곁의 약한 사람을 먼저 다치게 한다.' },
          { id: 'pull', text: '갓길 안전한 곳에 세우고 숨을 고른다', result: '몇 분 뒤 손 떨림이 가라앉는다.', impact: [{ who: '지안', text: '늦게라도 위험을 멈춘다', tone: 0 }], ending: '출발은 잘못 골랐어도 멈추는 판단은 언제든 할 수 있다.' }] } },
      { id: 'wait', text: '차에 앉아 10분 동안 숨을 고르고 마음이 가라앉았는지 살핀다', result: '손 떨림은 멎었지만 아직 마음이 불편하다.', impact: [{ who: '지안', text: '내 상태를 먼저 본다', tone: 1 }],
        next: { text: '약속 시간이 다가온다. 아직 다툰 말이 머릿속을 맴돈다.', choices: [
          { id: 'bus', text: '오늘은 버스를 타고 가겠다고 알린다', result: '조금 늦게 도착하지만 마음이 편하다.', impact: [{ who: '지안', text: '운전하지 않는 것으로 방어한다', tone: 1 }],
            next: { text: '저녁에 집에 돌아오니 가족이 "아까는 미안해"라고 한다.', choices: [
              { id: 'talk', text: '화난 채 운전하지 않으려고 버스를 탔다고 말한다', result: '가족이 다음엔 다툰 뒤 서로 운전을 말리자고 한다.', impact: [{ who: '가족', text: '서로의 운전 상태를 챙기는 약속이 생긴다', tone: 1 }], ending: '운전 전 나의 상태를 말로 나누면 가족의 안전 습관이 된다.' },
              { id: 'silent', text: '그냥 넘어간다', result: '다음에도 다툰 뒤 누가 운전할지 정해 두지 않는다.', impact: [{ who: '가족', text: '같은 상황이 되풀이될 수 있다', tone: 0 }], ending: '오늘은 지켰지만, 약속으로 남기지 않으면 다음엔 운에 맡기게 된다.' }] } },
          { id: 'music', text: '음악을 크게 틀고 출발한다', result: '음악 소리에 뒤에서 오는 구급차 소리를 늦게 듣는다.', impact: [{ who: '지안', text: '화를 가렸을 뿐 집중은 돌아오지 않는다', tone: -1 }], ending: '기분을 덮는 것과 운전할 상태가 되는 것은 다르다.' }] } },
      { id: 'other', text: '다른 가족에게 오늘은 대신 운전해 달라고 한다', result: '다툰 상대가 아닌 다른 가족이 운전석에 앉는다.', impact: [{ who: '지안', text: '동승자로 마음을 가라앉힌다', tone: 1 }], ending: '상태가 나쁘면 운전대를 넘기는 것도 방어 운전이다.' }] };
    const ANGRY_R = [{ id: 'state', text: '화남·피로는 판단과 반응을 떨어뜨린다' }, { id: 'nodrive', text: '상태가 나쁘면 운전하지 않는 것도 방어 운전이다' }, { id: 'skill', text: '운전 실력이 좋으면 기분은 상관없다', why: '실력이 있어도 화가 나면 위험을 늦게 보고 서둘러요.' }, { id: 'late', text: '약속에 늦지 않는 것이 먼저다', why: '늦은 약속은 사과로 되돌릴 수 있지만 사고는 되돌릴 수 없어요.' }];
    const LINE = (title, data, question, choices, why) => ({ type: 'line', mode: 'read', title, xLabel: '앞차와의 거리', yLabel: '반응 여유(상대 크기)', data, question, choices, why });
    const DRY = [['아주 가까움', 1], ['가까움', 3], ['보통', 5], ['넉넉함', 7], ['아주 넉넉함', 9]];
    const WET = [['아주 가까움', 0], ['가까움', 1], ['보통', 3], ['넉넉함', 5], ['아주 넉넉함', 7]];

    MODS.push(
      M({
        id: 'intro.predict-view', type: 'intro', title: '공이 굴러온 다음에 올 것',
        method: '운전석에서 다음 일 예측', tool: 'emotion', minutes: 6,
        levels: { easy: '보기 두 개(그대로 지나기·속도 줄이고 멈출 준비)만 함께 견준다.', base: '보기 세 개를 놓고 다음에 일어날 일과 할 행동을 고른다.', challenge: '고른 행동의 근거(공 뒤에 아이가 따라 나온다)를 한 문장으로 말한다.' },
        intro: {
          teacher: '"주택가를 운전하는데 주차된 차 사이로 공이 굴러 나왔어요. 다음 순간 무엇이 나올까요?" 시연으로 \'속도를 줄이고 멈출 준비\'를 고르면 결과가 나오는 모습을 보여 준다. "공만 피하면 된다"는 말이 나오면 "공은 누가 가지고 놀고 있었을까요? 그 사람은 지금 어디로 뛰어올까요?"라고 되묻는다. 방어 운전은 보이는 것보다 다음에 올 것을 예측하는 일이라는 것이 오늘의 질문이라고 밝힌다.',
          student: '운전석에 앉았다고 생각하고, 공이 굴러 나온 다음에 일어날 일을 예측해 내가 할 행동을 골라 보세요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '주택가 골목, 주차된 차 사이로 공 하나가 굴러 나왔다.', feeling: '놀람', who: '운전자', motif: 'ball', choices: [{ id: 'pass', text: '공만 피해 그대로 지나간다', result: '공을 따라 아이가 뛰어나와 급정거한다.', mood: '무서움' }, { id: 'slow', text: '속도를 줄이고 멈출 준비를 한다', result: '아이가 뛰어나오지만 여유 있게 멈춘다.', mood: '편안함' }, { id: 'horn', text: '경적을 울리고 속도를 유지한다', result: '놀란 아이가 차 앞에 멈춰 서 버린다.', mood: '걱정' }] }, sequence: [{ choice: 'slow' }] },
          art: { draw: 'a paper residential street seen from a driver seat, a paper ball rolling out between two parked paper cars, a small shadow of a child behind one car', banner: '다음에 올 것을 예측해요', extra: [{ motif: 'ball', x: 300, y: 222 }] },
        },
      }),
      M({
        id: 'intro.state-map', type: 'intro', title: '운전을 해치는 나의 상태',
        method: '운전 전 나의 상태 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '몸·마음·환경 가지 이름을 보고 카드를 함께 붙인다.', base: '가지마다 카드 2장씩을 붙인다.', challenge: '상태마다 대처(쉬기·운전 넘기기·미루기)를 말로 덧붙인다.' },
        intro: {
          teacher: '"운전을 잘하는 사람도 운전하면 안 되는 날이 있어요. 어떤 날일까요?" 시연으로 \'밤샘 뒤 피로\'를 몸 가지에, \'시간에 쫓김\'을 마음 가지에 붙여 보인다. "약은 아플 때 먹는 거니까 오히려 운전에 도움이 된다"는 말이 나오면 "감기약 상자 뒤에 \'졸음\'이라는 말이 적혀 있는 걸 본 적 있나요?"라고 되묻는다. 오늘은 운전 실력보다 먼저 운전 전 나의 상태를 본다고 밝힌다.',
          student: '운전 능력을 떨어뜨리는 상태 카드를 몸·마음·환경 가지에 붙이고, 내가 운전자라면 어떤 날 운전을 미룰지 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '운전 전 나의 상태', slots: ['몸', '마음', '환경'], cards: ['밤샘 뒤 피로', '졸음이 올 수 있는 약 복용', '다툰 뒤 화남', '약속 시간에 쫓김', '처음 가는 밤길', '짙은 안개'] }, sequence: [{ sort: { '몸': ['밤샘 뒤 피로', '졸음이 올 수 있는 약 복용'], '마음': ['다툰 뒤 화남', '약속 시간에 쫓김'], '환경': ['처음 가는 밤길', '짙은 안개'] } }] },
          art: { draw: 'a paper driver silhouette sitting before a steering wheel, with three paper branches around it labelled by icons: a yawning face, a storm cloud, and a foggy road', banner: '운전 전, 나는 괜찮을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '약 복용은 \'졸음이 올 수 있는 약\'으로만 다루고 특정 약 이름을 쓰지 않는다. 운전 주의 표시가 있는 약은 약사·식품의약품안전처 안내로 확인한다.',
      }),

      M({
        id: 'activity.predict-table', type: 'activity', title: '상황마다 예측할 위험',
        method: '방어 운전 예측표', tool: 'mindmap', minutes: 19,
        levels: { easy: '카드를 놓자마자 맞는지 보이고, 상황 3개(주차 차 사이·교차로·버스 정류장) 칸에 위험 카드 2장씩만 나눈다.', base: '상황 3개에 카드 3장씩, 이어서 골목 출구를 더한 상황 4개 예측표를 채운다.', challenge: '헷갈리는 카드가 더해지고, 위험마다 대비 행동을 짝짓는 문항까지 푼다.' },
        activity: {
          title: '방어 운전 예측표 채우기', tool: 'mindmap',
          teacher: '"방어 운전의 첫째는 \'저기서 무엇이 나올까\'를 먼저 떠올리는 거예요." 상황 칸마다 예측할 위험 카드를 나누게 한다. "신호를 지키면 교차로에서는 걱정할 게 없다"는 학생에게 "다른 운전자가 신호를 늦게 보거나 보행자가 늦게 건너면 어떻게 될까요?"라고 묻는다. 내가 법을 지켜도 남의 실수는 일어난다는 점, 그래서 예측과 거리 두기가 함께 가야 한다는 점을 짚는다.',
          task: '상황 카드마다 예측할 위험을 나누고, 위험에 맞는 대비 행동을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('세 상황에서 예측할 위험 카드를 상황 칸에 나누세요.', ['주차된 차 사이', '신호 교차로', '버스 정류장 앞'], [
              ['차 사이에서 아이가 뛰어나온다', '세워 둔 차의 문이 갑자기 열린다', '주차 차가 갑자기 출발한다'],
              ['맞은편 차가 신호 끝에 무리하게 좌회전한다', '보행자가 신호 끝에 늦게 건넌다', '옆 차로 차가 노란불에 속도를 낸다'],
              ['버스 앞으로 승객이 건너 나온다', '버스가 출발하며 차로로 들어온다', '내린 승객이 차 뒤로 뛰어간다'],
            ], { k: 2, hard: [['주차 차 그늘에 자전거가 서 있다'], ['신호등이 고장 나 꺼져 있다'], ['정류장 쪽 이륜차가 버스를 앞지른다']], traps: ['내가 신호를 지키면 위험은 없다'], d: 0.3, opt: { topic: '예측할 위험' } }),
            SORTQ('골목 출구를 더한 네 상황의 예측표를 완성하세요.', ['주차된 차 사이', '신호 교차로', '버스 정류장 앞', '골목 출구'], [
              ['세워 둔 차의 문이 열린다', '차 사이로 사람이 나온다'],
              ['맞은편 차가 무리하게 좌회전한다', '늦게 건너는 보행자'],
              ['버스 앞으로 건너는 승객', '출발하는 버스'],
              ['골목에서 자전거가 튀어나온다', '담장에 가려 차가 안 보인다'],
            ], { k: 1, d: 0.35, opt: { topic: '네 상황 예측표' } }),
            MATCHQ('예측한 위험마다 알맞은 대비 행동을 짝지으세요.', [['차 사이에서 사람이 나올 수 있다', '속도를 줄이고 차 쪽 간격을 넓힌다'], ['맞은편 차가 무리하게 좌회전할 수 있다', '출발 전 교차로 안을 한 번 더 본다'], ['버스 앞으로 승객이 건널 수 있다', '버스 곁을 서행하며 지난다'], ['골목에서 자전거가 나올 수 있다', '골목 앞에서 멈출 준비를 한다']], { k: 3, extra: ['경적을 길게 울리며 지난다'], d: 0.35, more: { hints: ['위험이 나올 자리와 시간을 벌어 주는 행동을 근거로 짝지어 보세요.'] } }),
            PICKQ('방어 운전의 원리에 맞는 생각만 고르세요.', ['남이 실수할 수 있다고 미리 생각한다', '앞차와 거리를 두어 반응할 시간을 번다', '보이지 않는 곳을 살필 시야를 확보한다'], ['내가 법을 지키면 사고는 남 탓이다', '바짝 붙어야 끼어들기를 막는다'], { d: 0.35, opt: { basket: '방어 운전 원리' }, more: { conclude: '방어 운전은 예측·거리 두기·시야 확보예요. 내가 법을 지키는 것과 남의 실수에 대비하는 것은 함께 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 동네 길 한 곳을 골라 예측표를 쓰세요.', columns: ['장소', '예측할 위험', '대비 행동'], cells: [['', '', ''], ['', '', '']] }] },
      }),
      M({
        id: 'activity.distance-chart', type: 'activity', title: '차간 거리와 반응 여유 그래프',
        method: '차간 거리와 반응 여유 경향', tool: 'chart', minutes: 18,
        levels: { easy: '점 위에 상대 크기 값이 보여 마른 길 선 하나부터 읽는다.', base: '값 표시 없이 마른 길·젖은 길 선을 차례로 읽고 견준다.', challenge: '값 표시 없이 풀고, 이 가상 그래프로 알 수 없는 것(실제 거리·속도별 수치)을 고른다.' },
        activity: {
          title: '가상 경향 그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 실제 측정값이 아니라 \'거리가 늘수록 반응 여유가 커진다\'는 경향만 보여 주는 가상 그래프예요. 숫자는 상대 크기일 뿐이에요." 마른 길 선을 먼저 읽고 젖은 길 선과 견주게 한다. "앞차에 바짝 붙어도 브레이크만 빨리 밟으면 된다"는 학생에게 "아주 가까움 칸의 반응 여유는 어느 정도인가요? 젖은 길에서는요?"라고 묻는다. 마지막 문항에서 그래프로 말할 수 있는 것과 없는 것을 나누게 한다.',
          task: '가상 경향 그래프를 읽고 차간 거리와 반응 여유의 관계를 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '마른 길 가상 그래프에서 반응 여유가 가장 큰 거리를 고르세요.', toolOptions: LINE('마른 길(가상, 상대 크기)', DRY, '반응 여유가 가장 큰 거리는?', ['아주 가까움', '보통', '아주 넉넉함'], ['가장 낮은 점이에요.', '가운데 점보다 높은 점이 있어요.', '']), target: { pick: 2 }, difficulty: 0.15 },
            { prompt: '젖은 길 가상 그래프에서 반응 여유가 거의 없는(0) 거리를 고르세요.', toolOptions: LINE('젖은 길(가상, 상대 크기)', WET, '반응 여유가 0인 거리는?', ['아주 가까움', '가까움', '보통'], ['', '점이 0보다 조금 높아요.', '점이 0보다 높아요.']), target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '마른 길에서 \'보통\' 거리의 반응 여유는 상대 크기 5예요. 젖은 길에서 같은 여유(5)를 얻으려면 어느 거리가 필요한지 고르세요.', toolOptions: LINE('젖은 길(가상, 상대 크기)', WET, '여유 5가 되는 거리는?', ['보통', '넉넉함', '아주 넉넉함'], ['젖은 길의 보통은 3이에요.', '', '7이라 5보다 커요.']), target: { pick: 1 }, difficulty: 0.35, conclude: '길이 젖으면 같은 반응 여유를 얻는 데 더 먼 거리가 필요해요. 비 오는 날은 거리를 더 넓혀요.' },
            { prompt: '이 가상 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: LINE('마른 길(가상, 상대 크기)', DRY, '이 그래프로 알 수 없는 것은?', ['거리가 늘면 반응 여유도 커지는 경향', '시속 몇 km일 때 몇 m를 띄워야 하는지', '아주 가까울 때 여유가 가장 작다는 것'], ['선이 오른쪽으로 갈수록 올라가니 알 수 있어요.', '', '가장 왼쪽 점이 가장 낮으니 알 수 있어요.']), target: { pick: 1 }, difficulty: 0.4, conclude: '경향 그래프는 방향을 알려 줄 뿐 실제 거리 기준은 알려 주지 않아요. 실제 기준은 공식 안내로 확인해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '젖은 길 선과 마른 길 선을 견주어 알 수 있는 점을 한 문장으로 쓰세요.' }] },
        notes: '그래프 값은 수업용 가상 상대 크기다. 교구의 꺾은선 판은 선을 하나만 그리므로 \'선 2개 비교\'는 마른 길·젖은 길 그래프를 문항마다 차례로 읽어 견주는 방식으로 바꿨다. 실제 안전거리 기준은 도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'activity.angry-dilemma', type: 'activity', title: '화난 채 운전석에 앉은 날',
        method: '화난 채 운전대 앞 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길까지 가서 결과를 보고 근거를 고른다.', challenge: '세 번째 갈림길(그날 저녁)까지 따라가 근거 2개를 고르고 다른 길과 견준다.' },
        activity: {
          title: '지안이의 운전석 갈림길', tool: 'dilemma',
          teacher: '"가족과 크게 다툰 뒤 차 열쇠를 집었어요. 운전 실력은 그대로인데, 지금 운전해도 될까요?" 선택마다 영향 칸을 읽게 한다. 바로 출발을 고른 학생에게 "이륜차 운전자는 지안이가 화난 줄 알았을까요?"라고 묻고, \'음악 크게\'를 고른 학생에게는 "기분이 덮인 것과 집중이 돌아온 것은 같을까요?"라고 묻는다. 상태가 나쁠 때 운전하지 않는 것도 방어 운전이라는 점을 짚는다.',
          task: '지안이의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('화난 상태를 먼저 살피고 안전하게 이동하는 길을 따라가고 근거를 고르세요.', ANGRY, [['wait', 'bus', 'talk']], ANGRY_R, ['state', 'nodrive'], { d: 0.4 }),
            EXPLOREQ('바로 출발한 길도 끝까지 가 보고, 내가 고른 길과 결과를 견주세요.', ANGRY, ANGRY_R, ['바로 출발한 길의 끝 결과를 확인했다', '두 길에서 영향을 받은 사람을 견주었다'], { d: 0.35 }),
            DILQ('밤샘 과제 뒤 아침에 운전하려는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '밤새 과제를 하고 아침 8시, 지안이는 차로 30분 거리의 시험장에 가야 한다. 눈이 따갑고 하품이 계속 나온다.', who: '지안', motif: 'sun', choices: [
              { id: 'coffee', text: '커피를 마시고 운전한다', result: '출발할 때는 깬 것 같지만 신호 대기 중 깜빡 존다.', impact: [{ who: '지안', text: '졸음은 가려졌을 뿐 그대로다', tone: -1 }], ending: '커피는 피로를 없애지 못하고 잠시 가릴 뿐이다.' },
              { id: 'transit', text: '택시나 대중교통으로 가기로 한다', result: '이동하는 동안 눈을 감고 쉰다.', impact: [{ who: '지안', text: '시험장에 무사히 도착한다', tone: 1 }],
                next: { text: '시험이 끝났다. 차는 집에 있고, 아직 몸이 무겁다.', choices: [
                  { id: 'sleep', text: '집에 와서 자고 운전은 내일 한다', result: '푹 자고 다음 날 운전한다.', impact: [{ who: '지안', text: '상태가 돌아온 뒤 운전한다', tone: 1 }], ending: '운전은 상태가 돌아온 뒤로 미루면 된다.' },
                  { id: 'night', text: '저녁에 친구를 태우러 바로 운전해 나간다', result: '해 질 녘 피로가 다시 몰려온다.', impact: [{ who: '친구', text: '피곤한 운전자의 차에 탄다', tone: -1 }], ending: '아침에 지킨 판단을 저녁에 무너뜨리면 위험은 그대로 돌아온다.' }] } }] },
              [['transit', 'sleep']], [{ id: 'tired', text: '피로는 반응을 늦추고 졸음으로 이어진다' }, { id: 'later', text: '상태가 나쁘면 운전을 다른 수단이나 다음으로 미룬다' }, { id: 'coffee', text: '커피를 마시면 피로가 사라진다', why: '카페인은 졸음을 잠시 가릴 뿐 피로를 없애지 않아요.' }], ['tired', 'later'], { d: 0.35, more: { conclude: '운전 전 나의 상태가 나쁘면 운전대를 넘기거나 미루는 것이 가장 확실한 방어 운전이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 운전자라면 화가 났을 때 운전 전에 할 일 하나를 정해 쓰세요.' }] },
      }),
      M({
        id: 'activity.state-check', type: 'activity', title: '운전 전 상태 점검표 만들기',
        method: '운전 전 상태 점검표', tool: 'kitchen', minutes: 19,
        levels: { easy: '문항마다 후보 앞 4개만 보고 점검표에 넣을 항목을 표시한다.', base: '몸·마음 후보 6개씩 가운데 넣을 항목만 표시하고, 후보 8개에서 \'운전하지 않음\' 기준을 고른다.', challenge: '기본과 같은 판을 풀고, 활동지에 내가 정한 \'운전하지 않음\' 기준을 내 말로 쓴다.' },
        activity: {
          title: '나의 운전 전 상태 점검표', tool: 'kitchen',
          teacher: '"비행기 조종사는 이륙 전에 점검표를 읽어요. 운전자도 출발 전에 나의 상태를 점검할 수 있어요." 후보 가운데 점검표에 넣을 항목만 표시하게 한다. \'오늘 기분이 좋은가\'처럼 막연한 항목을 넣는 학생에게 "기분이 좋으면 운전해도 되고, 나쁘면 안 되나요? 무엇을 보면 판단할 수 있을까요?"라고 묻는다. 점검표의 마지막 줄은 \'이 중 하나라도 걸리면 운전하지 않는다\'라는 기준이어야 한다는 점을 짚는다.',
          task: '운전 전 몸·마음 상태 점검표에 넣을 항목만 고르고, 운전하지 않을 기준을 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('운전 전 몸 상태 점검표에 넣을 항목만 표시하세요.', '운전 전 몸 상태', [['sleep', '전날 충분히 잤는가', true], ['med', '졸음 주의 약을 먹지 않았는가', true], ['drink', '술을 마시지 않았는가', true], ['eye', '눈이 따갑거나 하품이 계속되지 않는가', true], ['car', '차 색이 마음에 드는가', false], ['radio', '좋아하는 음악이 준비됐는가', false]], { k: 4, d: 0.3 }),
            CHECKQ('운전 전 마음 상태 점검표에 넣을 항목만 표시하세요.', '운전 전 마음 상태', [['angry', '방금 크게 화가 나지 않았는가', true], ['rush', '시간에 쫓겨 서두르고 있지 않은가', true], ['worry', '걱정거리로 생각이 딴 데 가 있지 않은가', true], ['brave', '오늘은 빨리 달리고 싶은가', false], ['show', '친구에게 운전 실력을 보여 주고 싶은가', false], ['ok', '말할 수 있을 만큼 마음이 가라앉았는가', true]], { k: 4, d: 0.35 }),
            CHECKQ('\'운전하지 않음\' 기준으로 알맞은 항목만 표시하세요.', '이럴 때는 운전하지 않는다', [['one', '몸·마음 점검에서 하나라도 걸린다', true], ['drink', '조금이라도 술을 마셨다', true], ['sleepy', '출발 전부터 졸리다', true], ['near', '가까운 거리라 괜찮을 것 같다', false], ['late', '약속에 늦을 것 같다', false], ['alt', '대신 운전할 사람이나 대중교통이 있는지 먼저 본다', true], ['music', '음악을 크게 들으면 괜찮아진다', false], ['window', '창문을 열면 졸음이 가신다', false]], { k: 4, d: 0.4, more: { conclude: '점검표는 \'하나라도 걸리면 운전하지 않는다\'는 기준과 대안까지 있어야 실제로 나를 멈춰 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 점검표의 마지막 줄 \'이럴 때는 운전하지 않는다\'를 한 문장으로 쓰세요.' }] },
        notes: '술은 \'조금이라도 마셨으면 운전하지 않는다\'로만 다루고 혈중알코올농도 수치·처벌은 쓰지 않는다.',
      }),

      M({
        id: 'wrap.defense-words', type: 'wrap', title: '방어 운전 원리 문장 완성',
        method: '방어 운전 원리 낱말', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 첫 빈칸을 함께 채워 보이고 나머지를 채운다.', base: '원리 문장 네 빈칸을 낱말 카드로 채운다.', challenge: '출구 3번에서 카드 없이 나만의 방어 운전 원리 문장을 짓는다.' },
        wrap: {
          teacher: '"오늘 배운 방어 운전 원리를 네 낱말로 정리해 볼까요? 예측, 거리, 시야, 양보." 출구 1번에서 빈칸을 채운다. \'끼어들기\' 카드를 거리 문장에 넣으려는 학생에게 "끼어들기를 막으려고 바짝 붙으면 반응할 여유가 어떻게 되나요?"라고 묻는다. 출구 3번은 카드 없이 스스로 문장을 짓게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '다른 사람이 실수할 수 있다고 ___한다.' }, { id: 'f2', label: '앞차와 ___를 두어 반응할 시간을 번다.' }, { id: 'f3', label: '가려진 곳을 살필 ___를 확보한다.' }, { id: 'f4', label: '서두르는 차에게는 ___한다.' }], cards: [{ id: 'w1', text: '예측' }, { id: 'w2', text: '거리' }, { id: 'w3', text: '시야' }, { id: 'w4', text: '양보' }, { id: 'y1', text: '끼어들기' }] }, prompt: '방어 운전 원리 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: 'w1', f2: 'w2', f3: 'w3', f4: 'w4' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '방어 운전에 맞지 않는 생각을 고르세요.', options: ['남이 실수할 수 있다고 미리 생각한다', '내가 법을 지키면 사고는 남 탓이니 대비할 필요 없다', '상태가 나쁘면 운전하지 않는다'], answer: 1, difficulty: 0.15, explain: '법을 지키는 것과 남의 실수에 대비하는 것은 함께 가야 해요.' },
            { type: 'short', prompt: '카드 없이 나만의 방어 운전 원리 문장 하나를 지어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '방어 운전 원리',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '방어 운전은 ___·거리 두기·시야 확보다.', answer: '예측' },
            { type: 'short', prompt: '네 원리(예측·거리·시야·양보) 가운데 내가 동승자일 때도 도울 수 있는 것 하나와 방법을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.state-reflect', type: 'wrap', title: '내가 운전하지 말아야 할 때',
        method: '나의 운전 적합성 성찰', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 ~일 때 운전하지 않겠다. 대신 ~")을 보고 쓴다.', base: '세 문장을 쓰고 기준표 세 항목을 스스로 점검한다.', challenge: '기준표 세 항목을 모두 만족하고, 활동지에 가족과 나눌 약속까지 덧붙인다.' },
        wrap: {
          teacher: '"나는 어떤 상태일 때 운전대를 잡지 않을까요? 오늘 만든 점검표를 떠올리며 세 문장으로 써 봐요." 쓰기 전에 기준표를 함께 읽는다. "피곤하면 조심해서 운전하겠다"처럼 운전을 전제로 쓴 학생에게 "조심하는 것과 운전하지 않는 것은 어떻게 다를까요?"라고 묻는다. 대안까지 써야 실제로 지킬 수 있다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '내가 운전하지 말아야 할 상태와 그때의 대안을 세 문장으로 쓰세요.', minChars: 50, maxChars: 400, starter: '나는 ~일 때 운전하지 않겠다. 대신 ~', sample: '나는 밤을 새웠거나 졸음이 올 수 있는 약을 먹었을 때 운전하지 않겠다. 크게 화가 났을 때도 마찬가지다. 그럴 때는 대중교통을 타거나 가족에게 운전을 부탁하겠다.' }, prompt: '나의 운전 적합성 성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['운전하지 않을 상태를 구체적으로 썼다', '그때의 대안을 썼다', '내가 지킬 수 있는 기준인지 따져 보았다'], mustInclude: [['대신', '대안']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '운전 전 나의 상태에 대해 맞는 말을 고르세요.', options: ['화가 나도 운전 실력에는 영향이 없다', '피로·화남·일부 약 복용은 운전 능력을 떨어뜨린다', '창문을 열면 졸음이 사라진다'], answer: 1, difficulty: 0.15, explain: '피로·화남·졸음이 오는 약은 판단과 반응을 늦춰요. 그럴 때는 운전하지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 운전 적합성',
          items: [
            { type: 'short', prompt: '내가 운전하지 말아야 할 상태와 대안을 세 문장으로 쓰세요.' },
            { type: 'short', prompt: '가족과 나눌 약속(예: 다툰 뒤에는 서로 운전을 말린다)을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '"나는 ~일 때 운전하지 않겠다. 대신 ~"', items: [{ type: 'short', prompt: '운전하지 않을 상태 하나와 대안 하나를 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 13. 보행자·자전거·이륜차 곁 운전과 악천후 (12학년)
  // ======================================================================================================
  {
    const M = MOD('vulnerable-road', [12]);
    const ROAD = (o) => Object.assign({ title: '자전거 곁 도로(가상)', grid: [6, 4], rowLabels: ['맞은편 차로', '내 차로 중앙선 쪽', '내 차로 가장자리 쪽', '길 가장자리'], places: [{ name: '내 차', icon: 'dot', at: [0, 2] }, { name: '자전거', icon: 'dot', at: [3, 3] }] }, o);
    const ZONE = { text: '운전자가 된 지 석 달, 은호는 어린이보호구역 안 초등학교 앞 길을 지난다. 길가에 주차된 차가 줄지어 있고 하교 시간이다.', who: '은호', motif: 'house', choices: [
      { id: 'keep', text: '신호가 초록이니 평소 속도로 지난다', result: '주차된 승합차 뒤에서 아이가 공을 쫓아 뛰어나온다.', impact: [{ who: '아이', text: '차 앞에 갑자기 놓인다', tone: -1 }],
        next: { text: '은호가 급정거했다. 아이는 놀라 길 한가운데 서 있다.', choices: [
          { id: 'horn', text: '경적을 울리고 비켜 가라고 손짓한다', result: '아이가 더 놀라 제자리에서 움직이지 못한다.', impact: [{ who: '아이', text: '두려움이 커진다', tone: -1 }], ending: '보호구역에서 서두른 대가는 급정거와 놀란 아이로 돌아온다.' },
          { id: 'wait', text: '멈춘 채 아이가 인도로 돌아갈 때까지 기다린다', result: '아이가 인도로 돌아가고, 은호는 그제야 숨을 쉰다.', impact: [{ who: '은호', text: '가까스로 사고를 피한다', tone: 0 }], ending: '멈출 수 있었던 것은 운이 좋았기 때문이다. 처음부터 천천히 왔어야 했다.' }] } },
      { id: 'slow', text: '속도를 확 줄이고 주차 차에서 간격을 두며 멈출 준비를 한다', result: '승합차 뒤에서 아이가 뛰어나오지만 여유 있게 멈춘다.', impact: [{ who: '아이', text: '안전하게 인도로 돌아간다', tone: 1 }],
        next: { text: '보호구역 끝 횡단보도 앞, 아이들 몇이 건널지 말지 머뭇거린다. 뒤차가 바짝 붙어 있다.', choices: [
          { id: 'stop', text: '횡단보도 앞에 멈춰 아이들이 건너게 한다', result: '아이들이 손을 들고 건넌다.', impact: [{ who: '아이들', text: '안전하게 건넌다', tone: 1 }],
            next: { text: '보호구역을 벗어나자 옆으로 자전거를 탄 학생이 지나간다.', choices: [
              { id: 'gap', text: '자전거와 간격을 넓게 두고 천천히 지난다', result: '자전거가 흔들려도 부딪칠 일이 없다.', impact: [{ who: '자전거 학생', text: '안심하고 달린다', tone: 1 }], ending: '교통 약자 곁에서는 속도를 줄이고 간격을 넓히는 판단을 끝까지 이어 간다.' },
              { id: 'close', text: '보호구역이 끝났으니 바짝 붙어 앞지른다', result: '자전거가 놀라 휘청인다.', impact: [{ who: '자전거 학생', text: '넘어질 뻔한다', tone: -1 }], ending: '표지판이 끝나도 약한 사람 곁의 위험은 끝나지 않는다.' }] } },
          { id: 'go', text: '뒤차 눈치가 보여 그대로 지나간다', result: '건너려던 아이 하나가 놀라 뒤로 물러선다.', impact: [{ who: '아이', text: '건널 기회를 잃고 놀란다', tone: -1 }], ending: '뒤차의 재촉보다 앞의 아이가 먼저다.' }] } }] };
    const ZONE_R = [{ id: 'slow', text: '어린이보호구역에서는 서행하고 멈출 준비를 한다' }, { id: 'hidden', text: '주차된 차 뒤에서 아이가 갑자기 나올 수 있다' }, { id: 'green', text: '초록 신호면 보호구역에서도 평소처럼 달려도 된다', why: '신호와 상관없이 아이는 예측하기 어렵게 움직여요.' }, { id: 'rear', text: '뒤차가 재촉하면 앞으로 가 주는 것이 먼저다', why: '재촉보다 건너려는 아이의 안전이 먼저예요.' }];
    const LIGHTS = '밤·비·안개 등화 점검(가상 상황)';

    MODS.push(
      M({
        id: 'intro.overtake-map', type: 'intro', title: '자전거를 앞지를 자리',
        method: '자전거 추월 칸 지도', tool: 'map', minutes: 6,
        levels: { easy: '칸 줄 이름(맞은편 차로·내 차로·길 가장자리)을 함께 읽고 핀 자리를 고른다.', base: '자전거와 같은 줄·바로 옆 줄·한 줄 더 띄운 자리를 견주어 핀을 꽂는다.', challenge: '맞은편 차가 다가오면 핀 자리가 어떻게 바뀌어야 하는지(앞지르지 않고 뒤에서 기다리기) 말한다.' },
        intro: {
          teacher: '"운전자가 되어 길 가장자리를 달리는 자전거를 앞지르려 해요. 내 차는 어느 칸으로 지나가야 할까요?" 시연으로 자전거와 한 줄 더 띄운 칸에 핀을 꽂아 보인다. "자전거 바로 옆 칸도 차로 안이니 괜찮다"는 말이 나오면 "자전거가 웅덩이를 피해 옆으로 흔들리면 그 칸은 몇 뼘 떨어져 있을까요?"라고 되묻는다. 오늘은 운전자의 눈으로 교통 약자 곁을 지나는 판단을 한다고 밝힌다.',
          student: '칸 지도에서 내 차가 자전거를 앞지를 때 지날 칸을 고르고, 왜 그만큼 띄워야 하는지 생각해 보세요.',
          demo: { tool: 'map', options: ROAD({}), sequence: [{ at: [3, 1] }] },
          art: { draw: 'a paper road strip seen from above with a paper bicycle rider near the edge and a paper car passing with a wide dotted gap between them', banner: '간격을 넓게 두고 지나요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '추월할 때 띄울 거리는 수치로 정하지 않고 \'한 줄 더 띄우기\'로만 다룬다. 중앙선을 넘는 앞지르기의 허용 여부는 도로마다 다르니 도로교통공단 안내로 확인한다.',
      }),
      M({
        id: 'intro.weather-sort', type: 'intro', title: '밤·비·안개 수칙 가르기',
        method: '악천후 수칙 가르기', tool: 'mindmap', minutes: 7,
        levels: { easy: '수칙 카드 4장을 밤·비·안개 칸에 함께 나눈다.', base: '카드 6장을 나누고, 세 칸 모두에 맞는 \'속도 줄이기\'는 따로 말로 짚는다.', challenge: '여러 칸에 걸치는 수칙(등화 켜기·속도 줄이기)이 왜 공통인지 설명한다.' },
        intro: {
          teacher: '"밤, 비, 안개 — 운전자에게 무엇이 어려워질까요? 수칙 카드를 칸에 나눠 봐요." 시연으로 칸마다 가장 특징적인 카드를 넣어 보인다. "안개 낀 날엔 상향등을 켜야 더 잘 보인다"는 말이 나오면 "상향등 빛이 안개 알갱이에 부딪히면 앞이 어떻게 보일까요?"라고 되묻는다. 카드 한 장은 한 칸에만 들어가니, 세 날씨에 다 맞는 수칙은 따로 말로 짚는다고 밝힌다.',
          student: '악천후 운전 수칙 카드를 밤·비·안개 칸에 나누고, 세 날씨에 모두 맞는 공통 수칙이 무엇인지 찾아보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '악천후 운전 수칙', slots: ['밤', '비', '안개'], cards: ['맞은편 차가 오면 상향등을 끈다', '전조등을 일찍 켠다', '물 고인 곳은 천천히 지난다', '와이퍼 상태를 미리 본다', '상향등 대신 안개등·하향등을 쓴다', '앞차와의 거리를 더 넓힌다'] }, sequence: [{ sort: { '밤': ['맞은편 차가 오면 상향등을 끈다', '전조등을 일찍 켠다'], '비': ['물 고인 곳은 천천히 지난다', '와이퍼 상태를 미리 본다'], '안개': ['상향등 대신 안개등·하향등을 쓴다', '앞차와의 거리를 더 넓힌다'] } }] },
          art: { draw: 'three paper panels side by side: a night road under a paper moon, a rainy road with paper raindrops, and a foggy road with layered paper mist, a paper car with headlights in each', banner: '날씨마다 달라지는 운전', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '교구 카드는 한 칸에만 들어가므로 계획의 \'겹침 허용\'은 공통 수칙(속도 줄이기·등화 켜기)을 말로 짚는 것으로 바꿨다.',
      }),

      M({
        id: 'activity.school-zone', type: 'activity', title: '어린이보호구역 운전석 갈림길',
        method: '어린이보호구역 운전 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(횡단보도 앞)까지 가서 결과를 보고 근거를 고른다.', challenge: '세 번째 갈림길(자전거 곁)까지 따라가 근거 2개를 고르고 다른 길과 견준다.' },
        activity: {
          title: '은호의 보호구역 갈림길', tool: 'dilemma',
          teacher: '"운전자 은호가 하교 시간 어린이보호구역에 들어섰어요. 신호는 초록이에요. 어떻게 지날까요?" 선택마다 아이에게 미친 영향을 읽게 한다. 평소 속도를 고른 학생에게 "급정거로 멈춘 건 실력이었나요, 운이었나요?"라고 묻고, 뒤차 때문에 지나간 학생에게는 "뒤차와 앞의 아이, 누구의 안전이 먼저인가요?"라고 묻는다. 보호구역 표지가 끝나도 교통 약자 곁의 판단은 이어져야 한다는 점을 짚는다.',
          task: '은호가 되어 보호구역 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('어린이보호구역과 그 뒤 길에서 교통 약자를 지키는 길을 따라가고 근거를 고르세요.', ZONE, [['slow', 'stop', 'gap']], ZONE_R, ['slow', 'hidden'], { d: 0.4 }),
            EXPLOREQ('평소 속도로 지난 길도 끝까지 가 보고, 내가 고른 길과 결과를 견주세요.', ZONE, ZONE_R, ['평소 속도 길의 끝 결과를 확인했다', '두 길에서 아이가 받은 영향을 견주었다'], { d: 0.35 }),
            DILQ('밤에 이륜차 뒤를 따라가다 좌회전하려는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '밤, 은호가 교차로에서 좌회전하려 한다. 맞은편에서 작은 불빛 하나가 다가오는데, 멀리 있는 것처럼 보인다.', who: '은호', motif: 'moon', choices: [
              { id: 'turn', text: '멀어 보이니 바로 좌회전한다', result: '불빛은 생각보다 빨리 다가온 이륜차였다.', impact: [{ who: '이륜차 운전자', text: '급히 멈추다 미끄러질 뻔한다', tone: -1 }], ending: '이륜차는 작아서 거리와 속도를 실제보다 멀고 느리게 보기 쉽다.' },
              { id: 'wait', text: '불빛이 지나갈 때까지 기다린다', result: '이륜차가 지나간 뒤 맞은편이 빈다.', impact: [{ who: '이륜차 운전자', text: '안전하게 지나간다', tone: 1 }],
                next: { text: '좌회전한 길 끝 횡단보도에 어두운 옷을 입은 사람이 서 있다.', choices: [
                  { id: 'yield', text: '속도를 줄이고 횡단보도 앞에서 멈춘다', result: '그 사람이 건너기 시작한다.', impact: [{ who: '보행자', text: '안전하게 건넌다', tone: 1 }], ending: '밤에는 작은 불빛과 어두운 옷을 한 번 더 보고, 멈출 준비를 한다.' },
                  { id: 'pass', text: '아직 안 건너니 그냥 지난다', result: '보행자가 막 발을 내딛다 놀라 물러선다.', impact: [{ who: '보행자', text: '크게 놀란다', tone: -1 }], ending: '밤길의 보행자는 운전자가 먼저 보고 먼저 멈춰야 한다.' }] } }] },
              [['wait', 'yield']], [{ id: 'small', text: '이륜차는 작아서 거리·속도를 잘못 판단하기 쉽다' }, { id: 'night', text: '밤에는 보행자를 늦게 보니 멈출 준비를 한다' }, { id: 'far', text: '불빛이 작으면 멀리 있는 것이다', why: '불빛의 크기로 거리를 재면 이륜차를 실제보다 멀게 봐요.' }], ['small', 'night'], { d: 0.35, more: { conclude: '교통 약자 곁에서는 속도를 줄이고 간격을 넓히며, 작게 보이는 이륜차·밤길 보행자를 한 번 더 확인해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보호구역 표지가 끝난 뒤에도 서행을 이어 가야 하는 까닭을 장면 근거와 함께 한 문장으로 쓰세요.' }] },
        notes: '어린이보호구역의 제한 속도 수치와 처벌은 다루지 않는다. 보호구역 운전 수칙의 세부는 도로교통공단·경찰청 안내로 확인한다.',
      }),
      M({
        id: 'activity.case-analysis', type: 'activity', title: '안개 낀 도로 사고 따라가기',
        method: '악천후 사고 사례 분석', tool: 'story', minutes: 18,
        levels: { easy: '장면 카드 3장을 차례로 놓고, 원인 카드를 고르는 판은 기본과 같다.', base: '장면 5장을 차례로 놓고 원인 카드를 고른 뒤 원인마다 예방 행동을 짝짓는다.', challenge: '헷갈리는 카드가 더해지고, 원인을 둘 이상 고른 근거를 활동지에 쓴다.' },
        activity: {
          title: '안개 낀 아침의 가상 사고', tool: 'story',
          teacher: '"가상의 안개 낀 아침, 다리 위에서 차 세 대가 잇따라 부딪쳤어요. 사고는 한 순간이 아니라 여러 장면이 이어져 생겨요." 장면을 차례로 놓은 뒤 원인 카드를 고르게 한다. "안개가 원인이니 운전자는 어쩔 수 없었다"는 학생에게 "안개는 모두에게 같았어요. 그런데 왜 어떤 차는 멈출 수 있었을까요?"라고 묻는다. 날씨는 조건이고, 속도·거리·등화는 운전자의 선택이라는 점을 짚는다.',
          task: '가상 사고 장면을 차례로 놓고, 원인을 고른 뒤 원인마다 예방 행동을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('안개 낀 아침 다리 위 가상 사고 장면을 일어난 차례로 놓으세요.', ['짙은 안개 속에 차들이 평소 속도로 달린다', '앞차가 상향등을 켜 앞이 더 하얘진다', '앞차가 안개 속 정체를 늦게 보고 급정거한다', '바짝 따라오던 뒤차가 멈추지 못한다', '세 번째 차까지 잇따라 부딪친다'], { k: 3, d: 0.3, opt: { title: '안개 낀 다리 위(가상)' } }),
            PICKQ('이 가상 사고에서 운전자가 바꿀 수 있었던 원인만 고르세요.', ['안개 속에서 속도를 줄이지 않았다', '앞차와의 거리가 너무 가까웠다', '안개 속에서 상향등을 켰다'], ['다리 위에 안개가 끼었다', '아침 출근 시간이었다'], { d: 0.35, opt: { mode: 'pick', basket: '바꿀 수 있었던 원인' } }),
            MATCHQ('원인마다 알맞은 예방 행동을 짝지으세요.', [['안개 속 평소 속도', '속도를 크게 줄인다'], ['앞차와 가까운 거리', '거리를 평소보다 넓힌다'], ['안개 속 상향등', '하향등·안개등을 켠다']], { k: 2, extra: ['경적을 계속 울린다'], d: 0.35, opt: { mode: 'match' }, more: { conclude: '악천후 사고는 날씨 하나가 아니라 속도·거리·등화 선택이 겹쳐 생겨요. 운전자가 바꿀 수 있는 것을 먼저 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 가상 사고에서 원인 둘을 골라, 둘이 어떻게 겹쳐 사고를 키웠는지 쓰세요.' }] },
        notes: '사고는 수업용 가상 사례다. 실제 사고 보도를 쓸 때는 피해자 정보가 드러나지 않게 하고, 학생에게 아는 사고를 말하게 하지 않는다.',
      }),
      M({
        id: 'activity.light-check', type: 'activity', title: '날씨마다 켤 등화 점검',
        method: '등화 사용 점검', tool: 'timer', minutes: 18,
        levels: { easy: '문항마다 점검 칸이 2개로 줄고 순서 카드는 3장만 놓는다.', base: '밤·비·안개 세 상황마다 순서 카드를 놓고 점검 칸을 모두 확인한다.', challenge: '기본과 같은 판을 풀고, 마지막 문항에서 잘못된 등화 사용 예를 짝과 견준 뒤 스스로 점검한다.' },
        activity: {
          title: '등화 점검판', tool: 'timer',
          teacher: '"출발 전 등화 점검은 몇 초면 끝나요. 그런데 날씨마다 켤 등이 달라요." 상황마다 순서 카드를 놓고 점검 칸을 확인하게 한다. "낮에 비가 오면 등은 안 켜도 된다"는 학생에게 "내가 보는 것만이 아니라, 남이 나를 보는 것도 등화의 일일까요?"라고 묻는다. 마지막 문항에서 \'안개에 상향등\', \'맞은편 차 앞 상향등\' 같은 잘못된 예를 짝과 견주게 한다.',
          task: '밤·비·안개 상황마다 등화 사용 순서를 놓고 점검 칸을 확인해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '밤 운전 상황이에요. 등화 사용 순서를 놓고 점검 칸을 모두 확인하세요.', toolOptions: { title: LIGHTS, cards: ['맞은편 차가 오면 하향등으로 바꾼다', '해 지기 전에 전조등을 켠다', '출발 전 전조등·미등이 켜지는지 본다', '사람 없는 어두운 길에서만 상향등을 쓴다'], safety: ['전조등이 양쪽 다 켜진다', '미등·번호판 등이 켜진다', '앞 유리가 깨끗하다'] }, target: { order: ['출발 전 전조등·미등이 켜지는지 본다', '해 지기 전에 전조등을 켠다', '사람 없는 어두운 길에서만 상향등을 쓴다', '맞은편 차가 오면 하향등으로 바꾼다'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '밤 운전 등화 순서 카드 3장을 놓고 점검 칸을 확인하세요(카드 3장).', toolOptions: { cards: ['맞은편 차가 오면 하향등으로 바꾼다', '해 지기 전에 전조등을 켠다', '출발 전 전조등·미등이 켜지는지 본다'], safety: ['전조등이 양쪽 다 켜진다', '미등·번호판 등이 켜진다'] }, target: { order: ['출발 전 전조등·미등이 켜지는지 본다', '해 지기 전에 전조등을 켠다', '맞은편 차가 오면 하향등으로 바꾼다'], safety: true } } } },
            { prompt: '낮에 비가 오는 상황이에요. 등화와 시야 확보 순서를 놓고 점검 칸을 모두 확인하세요.', toolOptions: { title: LIGHTS, cards: ['속도를 줄이고 거리를 넓힌다', '와이퍼를 켠다', '낮이어도 전조등을 켠다', '출발 전 와이퍼 고무를 본다'], safety: ['와이퍼가 줄 없이 닦인다', '전조등이 켜진다', '김 서림 제거가 된다'] }, target: { order: ['출발 전 와이퍼 고무를 본다', '와이퍼를 켠다', '낮이어도 전조등을 켠다', '속도를 줄이고 거리를 넓힌다'], safety: true }, difficulty: 0.35,
              levels: { easy: { prompt: '비 오는 낮 순서 카드 3장을 놓고 점검 칸을 확인하세요(카드 3장).', toolOptions: { cards: ['와이퍼를 켠다', '낮이어도 전조등을 켠다', '출발 전 와이퍼 고무를 본다'], safety: ['와이퍼가 줄 없이 닦인다', '전조등이 켜진다'] }, target: { order: ['출발 전 와이퍼 고무를 본다', '와이퍼를 켠다', '낮이어도 전조등을 켠다'], safety: true } } } },
            { prompt: '짙은 안개 상황이에요. 등화 사용 순서를 놓고 점검 칸을 모두 확인하세요.', toolOptions: { title: LIGHTS, cards: ['앞이 안 보이면 안전한 곳에 세우고 기다린다', '하향등과 안개등을 켠다', '속도를 크게 줄인다', '상향등은 켜지 않는다'], safety: ['안개등이 켜진다', '비상등 단추 위치를 안다', '앞 유리 김 서림이 없다'] }, target: { order: ['하향등과 안개등을 켠다', '상향등은 켜지 않는다', '속도를 크게 줄인다', '앞이 안 보이면 안전한 곳에 세우고 기다린다'], safety: true }, difficulty: 0.4,
              levels: { easy: { prompt: '짙은 안개 순서 카드 3장을 놓고 점검 칸을 확인하세요(카드 3장).', toolOptions: { cards: ['하향등과 안개등을 켠다', '속도를 크게 줄인다', '앞이 안 보이면 안전한 곳에 세우고 기다린다'], safety: ['안개등이 켜진다', '앞 유리 김 서림이 없다'] }, target: { order: ['하향등과 안개등을 켠다', '속도를 크게 줄인다', '앞이 안 보이면 안전한 곳에 세우고 기다린다'], safety: true } } } },
            { prompt: '잘못된 등화 사용 예를 짝과 견주어 보고, 한 일을 스스로 점검하세요.', toolOptions: { title: '잘못된 등화 사용 견주기' }, target: { selfCheck: ['안개 속 상향등이 앞을 더 하얗게 만드는 까닭을 말했다', '맞은편 차 앞 상향등이 상대의 눈을 가리는 까닭을 말했다', '비 오는 낮에 등을 안 켜면 남이 나를 늦게 보는 까닭을 말했다'] }, difficulty: 0.2, conclude: '등화는 내가 보기 위한 것이면서 남이 나를 보게 하는 것이에요. 날씨에 맞게 켜고, 남의 눈을 가리지 않게 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '날씨마다 켤 등화와 켜지 않을 등화를 정리하세요.', columns: ['상황', '켤 등화', '조심할 점'], cells: [['밤', '', ''], ['비 오는 낮', '', ''], ['짙은 안개', '', '']] }] },
        notes: '교구의 점검 칸은 모두 확인해야 맞고, 문항 수는 단계마다 같아서 쉬움 단계는 카드·점검 칸 수를 줄였다. 실제 차의 등화 조작은 차마다 다르므로 보호자 차의 설명서로 확인하게 한다.',
      }),
      M({
        id: 'activity.share-essay', type: 'activity', title: '함께 쓰는 길 제안 글',
        method: '함께 쓰는 길 제안 글', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '문항마다 문장 틀을 보고 쓴다.', base: '운전자에게, 자전거·이륜차 이용자에게 하는 제안을 각각 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 양쪽 입장을 모두 담은 제안 글을 쓴다.' },
        activity: {
          title: '운전자와 자전거·이륜차 이용자의 약속', tool: 'rubric-writing',
          teacher: '"도로는 차만의 것도, 자전거만의 것도 아니에요. 서로에게 무엇을 부탁하고 무엇을 약속할 수 있을까요?" 기준표(구체적 행동·까닭·상대 입장)를 함께 읽고 쓰게 한다. "자전거가 차도에 나오지 않으면 된다"처럼 한쪽만 탓하는 글을 쓴 학생에게 "자전거가 차도로 다녀야 하는 길도 있다면, 운전자는 무엇을 해야 할까요?"라고 묻는다. 제안은 상대를 비난하지 않고 내가 할 행동부터 쓰면 설득력이 커진다는 점을 짚는다.',
          task: '운전자와 자전거·이륜차 이용자가 서로 지킬 것을 담은 제안 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('운전자에게 자전거·이륜차 곁을 지날 때 지킬 것을 제안하는 글을 2~3문장으로 쓰세요.', '운전자에게 하는 제안: 자전거·이륜차 곁을 지날 때 지킬 행동과 까닭을 쓰세요.', ['구체적 행동(속도·간격 등)을 썼다', '그 행동이 필요한 까닭을 썼다', '비난하는 말 없이 썼다'], { min: 50, max: 400, sent: [2, 3], must: [['간격', '속도', '서행']], starter: '운전자는 자전거 곁을 지날 때 ~. 왜냐하면 ~', plus: '이륜차가 작게 보여 생기는 착각을 짚었다', d: 0.35 }),
            RWQ('자전거·이륜차 이용자에게 운전자를 위해 지킬 것을 제안하는 글을 2~3문장으로 쓰세요.', '자전거·이륜차 이용자에게 하는 제안: 운전자가 나를 잘 보고 예측할 수 있게 지킬 행동을 쓰세요.', ['구체적 행동(등화·밝은 옷·손 신호 등)을 썼다', '운전자 입장에서 까닭을 썼다', '비난하는 말 없이 썼다'], { min: 50, max: 400, sent: [2, 3], starter: '자전거를 탈 때는 ~. 그래야 운전자가 ~', plus: '밤이나 비 오는 날에 더할 행동을 썼다', d: 0.35 }),
            RWQ('양쪽 입장을 모두 담아 \'함께 쓰는 길\' 제안 글을 4문장으로 쓰세요.', '\'함께 쓰는 길\' 제안 글: 운전자와 자전거·이륜차 이용자가 서로 지킬 것을 한 편의 글로 쓰세요.', ['운전자가 지킬 것을 썼다', '자전거·이륜차 이용자가 지킬 것을 썼다', '서로의 입장을 이해하는 문장이 있다'], { min: 80, max: 400, sent: [3, 5], must: [['함께', '서로']], plus: '우리 동네 길 하나를 예로 들었다', d: 0.45, more: { conclude: '함께 쓰는 길의 약속은 상대를 탓하기보다 내가 할 행동에서 시작하고, 서로가 서로를 잘 보게 만드는 데 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 제안 가운데 내가 운전자가 되었을 때 꼭 지키고 싶은 것 하나를 쓰세요.' }] },
      }),

      M({
        id: 'wrap.gap-chart', type: 'wrap', title: '교통 약자 곁 속도와 위험',
        method: '간격과 속도 경향 다시 보기', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 그래프의 가로축(속도)과 세로축(위험)을 함께 읽고 고른다.', base: '가상 경향 그래프를 읽고 핵심 한 문장을 고른다.', challenge: '출구 3번에서 그래프로 말할 수 없는 것을 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 그래프 하나로 다시 볼까요? 교통 약자 곁을 지나는 속도가 빨라질수록 위험은 어떻게 될까요?" 출구 1번 그래프는 실제 수치가 아닌 가상 경향이라는 점을 먼저 말한다. "조금 빠른 정도는 위험이 거의 같다"는 학생에게 "보통에서 빠름으로 갈 때 선이 얼마나 가파르게 올라가나요?"라고 묻는다. 출구 3번에서 이 그래프로 알 수 없는 것을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '교통 약자 곁 속도와 위험(가상, 상대 크기)', xLabel: '지나는 속도', yLabel: '위험(상대 크기)', data: [['아주 천천히', 1], ['천천히', 2], ['보통', 4], ['빠름', 7], ['아주 빠름', 10]], question: '이 그래프의 핵심에 가장 가까운 문장은?', choices: ['속도와 위험은 상관없다', '속도가 빨라질수록 위험이 점점 더 크게 늘어난다', '천천히 가면 위험이 0이 된다'], why: ['선이 오른쪽으로 갈수록 올라가요.', '', '가장 왼쪽 점도 0이 아니에요.'] }, prompt: '가상 경향 그래프를 읽고 핵심 문장을 고르세요.', target: { pick: 1 }, difficulty: 0.2 },
            { type: 'choice', prompt: '자전거 곁을 지날 때 알맞은 운전을 고르세요.', options: ['자전거가 비켜 갈 것이라 믿고 그대로 달린다', '속도를 줄이고 간격을 넓혀 지난다', '경적을 울려 자전거를 길 끝으로 몬다'], answer: 1, difficulty: 0.15, explain: '교통 약자 곁에서는 운전자가 먼저 속도를 줄이고 간격을 넓혀요.' },
            { type: 'short', prompt: '이 가상 그래프로는 알 수 없는 것 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '교통 약자 곁 운전',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '교통 약자 곁에서는 ___를 줄이고 간격을 넓힌다.', answer: '속도' },
            { type: 'short', prompt: '그래프 경향을 근거로 어린이보호구역에서 서행해야 하는 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '그래프 값은 수업용 가상 상대 크기이며 실제 사고 통계가 아니다. 출구 질문은 단계별 판이 없어 \'2개·3개 비교\'는 교사가 읽어 주는 범위로 나눈다.',
      }),
      M({
        id: 'wrap.zone-words', type: 'wrap', title: '교통 약자 배려 낱말 잇기',
        method: '교통 약자 배려 낱말', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 첫 짝을 함께 이어 보이고 나머지 3쌍을 잇는다.', base: '낱말 4개를 상황과 모두 잇는다.', challenge: '출구 3번에서 낱말 하나가 필요한 새 상황을 스스로 짓는다.' },
        wrap: {
          teacher: '"서행, 간격, 멈출 준비, 눈 맞춤 — 오늘의 네 낱말을 상황과 이어 봐요." 출구 1번에서 짝을 잇는다. \'눈 맞춤\'을 어디에 둘지 망설이는 학생에게 "횡단보도 앞 사람이 내 차를 보았는지 어떻게 알 수 있을까요?"라고 묻는다. 출구 3번은 낱말 하나를 골라 그 낱말이 필요한 상황을 스스로 짓게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '서행', ko: '어린이보호구역에 들어섰다' }, { en: '간격', ko: '길 가장자리 자전거를 앞지른다' }, { en: '멈출 준비', ko: '주차된 차 사이로 공이 굴러 나왔다' }, { en: '눈 맞춤', ko: '횡단보도 앞에 사람이 머뭇거린다' }] }, prompt: '배려 낱말 카드를 알맞은 상황과 이으세요.', target: { match: { '서행': '서행', '간격': '간격', '멈출 준비': '멈출 준비', '눈 맞춤': '눈 맞춤' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '안개 낀 날 등화 사용으로 맞는 것을 고르세요.', options: ['상향등을 켜서 더 멀리 본다', '하향등·안개등을 켜고 속도를 줄인다', '등을 끄고 비상등만 켠다'], answer: 1, difficulty: 0.15, explain: '상향등 빛은 안개에 부딪혀 앞을 더 하얗게 만들어요. 하향등·안개등을 켜고 속도를 줄여요.' },
            { type: 'short', prompt: '네 낱말 가운데 하나를 골라, 그 낱말이 필요한 새 상황을 한 문장으로 지으세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '교통 약자 배려 낱말',
          items: [
            { type: 'check', prompt: '내가 운전자가 되면 지킬 것에 표시하세요.', options: ['보호구역 서행', '자전거 곁 간격 넓히기', '주차 차 사이 멈출 준비', '횡단보도 앞 눈 맞춤'] },
            { type: 'short', prompt: '지금 보행자·자전거 이용자로서 운전자를 위해 할 수 있는 일 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 14. 장거리·항공·혼잡 대중교통 안전 (12학년)
  // ======================================================================================================
  {
    const M = MOD('transit-travel', [12]);
    const CROWD = { text: '불꽃 축제가 끝난 밤 9시 30분, 역 승강장에 사람이 계속 밀려든다. 서연이 뒤에서 "빨리 가!" 하는 소리와 함께 등이 떠밀린다.', who: '서연', motif: 'moon', choices: [
      { id: 'push', text: '틈을 찾아 앞사람을 밀고 나간다', result: '앞사람이 비틀거리고 주변이 더 거칠게 밀린다.', impact: [{ who: '주변 사람들', text: '균형을 잃기 쉬워진다', tone: -1 }, { who: '서연', text: '오히려 더 꽉 끼인다', tone: -1 }],
        next: { text: '열차 문 앞, 사람들이 한꺼번에 문으로 몰린다.', choices: [
          { id: 'squeeze', text: '닫히는 문 사이로 몸을 밀어 넣는다', result: '가방이 문에 끼어 열차가 다시 문을 연다.', impact: [{ who: '열차 승객', text: '출발이 늦어지고 밀집이 더 커진다', tone: -1 }], ending: '밀고 나가면 빨라 보이지만 흐름 전체가 더 위험해진다.' },
          { id: 'step', text: '다음 열차를 타기로 하고 한 발 물러선다', result: '숨 쉴 틈이 생기고 다음 열차에 탄다.', impact: [{ who: '서연', text: '늦었지만 다치지 않는다', tone: 1 }], ending: '처음에 밀었던 것보다 물러선 판단이 서연이를 지켰다.' }] } },
      { id: 'wait', text: '멈춰 서서 팔로 가슴 앞 공간을 만들고 흐름을 따른다', result: '떠밀려도 넘어지지 않고 자세를 지킨다.', impact: [{ who: '서연', text: '숨 쉴 공간을 지킨다', tone: 1 }],
        next: { text: '승강장 안내 방송이 "다른 출입구를 이용해 주세요"라고 한다. 친구는 "여기서 기다리면 곧 탈 수 있어"라고 한다.', choices: [
          { id: 'edge', text: '흐름을 따라 가장자리로 옮긴 뒤 안내된 출입구로 간다', result: '사람이 덜 몰린 출입구로 나와 다른 노선을 탄다.', impact: [{ who: '서연', text: '밀집에서 벗어난다', tone: 1 }],
            next: { text: '집에 가는 길, 가족에게서 "어디야?"라는 메시지가 온다.', choices: [
              { id: 'share', text: '지금 위치와 바뀐 경로, 도착 예정 시각을 알린다', result: '가족이 역 앞으로 마중 나오기로 한다.', impact: [{ who: '가족', text: '걱정을 덜고 도착을 기다린다', tone: 1 }], ending: '밀집을 피한 판단에 일정 공유까지 더하면 혼자 이동해도 안전망이 생긴다.' },
              { id: 'later', text: '도착해서 말하려고 답을 미룬다', result: '가족이 한동안 연락을 기다리며 불안해한다.', impact: [{ who: '가족', text: '서연이의 위치를 모른다', tone: -1 }], ending: '안전하게 움직였어도 바뀐 경로를 알리지 않으면 걱정과 혼선이 남는다.' }] } },
          { id: 'stay', text: '친구 말대로 그 자리에서 버틴다', result: '뒤에서 사람이 더 밀려와 몸이 꽉 끼인다.', impact: [{ who: '서연', text: '움직일 수 없게 된다', tone: -1 }], ending: '안내 방송은 흐름을 나누려는 신호다. 버티기보다 안내를 따르는 편이 안전하다.' }] } },
      { id: 'exit', text: '흐름을 거슬러 반대쪽 계단으로 되돌아간다', result: '마주 오는 사람들과 부딪혀 계단에서 발을 헛디딜 뻔한다.', impact: [{ who: '서연', text: '넘어질 위험이 커진다', tone: -1 }], ending: '다른 출구를 찾는 생각은 좋지만, 흐름을 거스르면 더 위험하다. 흐름을 따라 가장자리로 옮겨야 한다.' }] };
    const CROWD_R = [{ id: 'flow', text: '혼잡한 곳에서는 흐름을 거스르지 않고 넘어지지 않게 자세를 지킨다' }, { id: 'notice', text: '안내 방송과 직원 안내는 사람을 나누어 밀집을 줄이려는 것이다' }, { id: 'share', text: '경로가 바뀌면 가족에게 위치와 도착 예정 시각을 알린다' }, { id: 'fast', text: '혼잡할수록 빨리 밀고 나가야 안전하다', why: '밀면 주변이 함께 흔들려 넘어질 위험이 커져요.' }, { id: 'form', text: '안내 방송은 형식일 뿐이다', why: '안내는 지금 그 장소의 흐름을 바꾸려는 구체적인 신호예요.' }];
    const STATION = { title: '가상 환승역', grid: [6, 4], places: [{ name: '좁은 계단', icon: 'dot', at: [1, 1] }, { name: '개찰구', icon: 'station', at: [3, 1] }, { name: '넓은 통로', icon: 'dot', at: [3, 3] }, { name: '1번 출구', icon: 'dot', at: [0, 3] }, { name: '5번 출구', icon: 'dot', at: [5, 3] }, { name: '버스 정류장', icon: 'bus', at: [5, 0] }] };

    MODS.push(
      M({
        id: 'intro.cabin-card', type: 'intro', title: '기내 안내 문장 속 안전 수칙',
        method: '기내 안전 안내 속 수칙', tool: 'wordcards', minutes: 6,
        levels: { easy: '안내 문장 3개(안전띠·산소마스크·비상구)를 함께 읽으며 잇는다.', base: '안내 문장 4개를 휴대전화까지 잇고 각 수칙의 까닭을 짐작한다.', challenge: '안내에 나오지 않지만 혼자 이동할 때 챙길 위험(짐 선반·환승 시간)을 하나 짚어 말한다.' },
        intro: {
          teacher: '"비행기를 타면 이륙 전에 안전 안내가 나오죠. 그때 휴대전화를 보는 사람이 많아요. 안내 문장 하나하나가 무엇을 지키려는 걸까요?" 시연으로 안내 문장과 수칙 이름이 짝지어지는 모습을 보여 준다. "안전 안내는 매번 똑같으니 형식일 뿐"이라는 말이 나오면 "비상구 위치는 비행기마다, 앉은 자리마다 같을까요?"라고 되묻는다. 졸업 뒤 혼자 하는 장거리 이동에서 이 안내를 내 것으로 읽는 것이 오늘의 시작이라고 밝힌다.',
          student: '기내 안전 안내 문장을 읽고 안전띠·산소마스크·비상구·휴대전화 가운데 어떤 수칙을 말하는지 이어 보세요. 기차·버스·배의 안내에도 비슷한 문장이 있는지 떠올려 보세요.',
          demo: { tool: 'wordcards', options: { words: [{ en: '안전띠', ko: '좌석에 앉아 있는 동안 안전띠를 매 주십시오' }, { en: '산소마스크', ko: '기압이 낮아지면 마스크가 내려오니 본인 먼저 쓰십시오' }, { en: '비상구', ko: '가장 가까운 비상구는 앞뒤에 있으니 위치를 확인하십시오' }, { en: '휴대전화', ko: '이착륙 때는 전자기기를 비행기 모드로 바꾸십시오' }] }, sequence: [{ match: { '안전띠': '안전띠', '산소마스크': '산소마스크', '비상구': '비상구', '휴대전화': '휴대전화' } }] },
          art: { draw: 'a paper airplane cabin seen from the aisle, a paper flight attendant holding a seat belt, a dangling paper oxygen mask and glowing paper exit signs at the front and back', banner: '안전 안내는 나에게 하는 말', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '안내 문장은 수업용으로 줄인 글이다. 실제 기내 안내는 항공사·기종마다 다르므로 탑승하는 항공기 안내를 따르게 한다.',
      }),
      M({
        id: 'intro.crowd-map', type: 'intro', title: '혼잡한 환승역 칸 지도',
        method: '혼잡한 역 칸 지도', tool: 'map', minutes: 7,
        levels: { easy: '병목이 생기는 칸 두 곳(좁은 계단·개찰구)을 함께 짚는다.', base: '병목 칸에 이어 덜 붐비는 길(넓은 통로·다른 출구)까지 세 곳을 말한다.', challenge: '퇴근 시간·행사 끝난 직후처럼 시간대에 따라 병목이 어떻게 바뀌는지 말한다.' },
        intro: {
          teacher: '"가상 환승역 지도예요. 행사가 끝나고 사람이 한꺼번에 몰리면 어디서 길이 막힐까요?" 시연 단추로 좁은 계단에 핀이 꽂히는 모습을 보여 준 뒤 학생들에게 다음 병목을 묻는다. "가장 가까운 출구로 가는 게 제일 빠르다"는 말이 나오면 "모두가 같은 생각을 하면 그 출구 앞은 어떻게 될까요?"라고 되묻는다. 덜 붐비는 길을 고르는 것도 안전 판단이라는 점을 짚는다.',
          student: '가상 환승역 칸 지도에서 사람이 몰려 길이 좁아지는 곳을 찾고, 조금 멀어도 덜 붐비는 길이 어디인지 생각해 보세요.',
          demo: { tool: 'map', options: STATION, sequence: [{ place: '좁은 계단' }] },
          art: { draw: 'a top-down paper map of a busy subway transfer station with a narrow paper staircase, ticket gates, a wide corridor and two exits, many tiny paper figures bunching up at the stairs', banner: '어디서 길이 막힐까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '실제 사고 사례나 인명 피해를 다루지 않는다. 지도는 가상 역이며, 우리 지역 역의 혼잡 안내는 학생이 실제 이용하는 역의 안내로 확인하게 한다.',
      }),

      M({
        id: 'activity.crowd-dilemma', type: 'activity', title: '축제 뒤 붐비는 승강장 갈림길',
        method: '밀집한 승강장 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길(밀기·멈추기·되돌아가기)에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(안내 방송)까지 가서 결과를 보고 근거를 고른다.', challenge: '세 번째 갈림길(가족 연락)까지 따라가고, 다른 길과 결과를 견준 뒤 근거를 고른다.' },
        activity: {
          title: '밀집한 승강장에서 고르기', tool: 'dilemma',
          teacher: '"축제가 끝난 승강장, 등 뒤에서 사람이 밀려와요. 밀고 나갈까요, 멈출까요, 되돌아갈까요?" 선택마다 영향 칸을 소리 내어 읽게 한다. \'밀고 나가기\'를 고른 학생에게 "서연이가 민 앞사람은 어떻게 되었나요? 그 흔들림은 어디까지 퍼질까요?"라고 묻는다. \'되돌아가기\'를 고른 학생에게는 "다른 출구를 찾은 생각은 좋았어요. 그런데 어떤 방향으로 움직였나요?"라고 묻는다. 혼잡할수록 빨리 밀고 나가야 한다는 생각이 오개념이라는 점을 짚는다.',
          task: '서연이가 되어 붐비는 승강장의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('붐비는 승강장에서 넘어지지 않고 밀집을 벗어나는 길을 따라가고 근거를 고르세요.', CROWD, [['wait', 'edge', 'share']], CROWD_R, ['flow', 'notice', 'share'], { d: 0.4 }),
            EXPLOREQ('밀고 나간 길과 되돌아간 길도 끝까지 가 보고, 내가 고른 길과 견주세요.', CROWD, CROWD_R, ['밀고 나간 길의 끝 결과를 확인했다', '흐름을 거스른 길이 왜 위험했는지 짚었다'], { d: 0.35 }),
            DILQ('고속버스 휴게소에서 출발 시각이 다가오는데 화장실 줄이 길어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '혼자 고속버스로 이동하는 길, 휴게소 정차 시간이 5분 남았다. 화장실 줄이 길다.', who: '민재', motif: 'sun', choices: [
              { id: 'rush', text: '줄을 기다렸다가 주차장을 가로질러 뛰어간다', result: '차들이 오가는 주차장을 뛰다 후진하는 차와 부딪칠 뻔한다.', impact: [{ who: '민재', text: '버스는 탔지만 크게 놀란다', tone: -1 }], ending: '시간에 쫓겨 주차장을 뛰면 휴게소에서 가장 위험한 곳을 지나게 된다.' },
              { id: 'tell', text: '버스 기사님께 먼저 알리고 줄을 선다', result: '기사님이 출발 전 인원을 확인하겠다고 한다.', impact: [{ who: '민재', text: '서두르지 않아도 된다', tone: 1 }],
                next: { text: '줄이 생각보다 길어 정차 시간이 다 되었다.', choices: [
                  { id: 'walk', text: '보행 통로로 걸어서 버스로 돌아가 늦은 것을 사과한다', result: '1분 늦었지만 기사님이 확인하고 출발한다.', impact: [{ who: '승객들', text: '잠깐 기다리지만 모두 함께 출발한다', tone: 0 }], ending: '미리 알리고 걸어서 돌아오면 늦어도 안전하다.' },
                  { id: 'cut', text: '차 사이로 질러서 뛰어간다', result: '주차된 버스 사이에서 나오는 차를 못 본다.', impact: [{ who: '민재', text: '부딪칠 위험을 만난다', tone: -1 }], ending: '알려 두었으니 뛸 까닭이 없었다. 차 사이는 운전자 눈에 보이지 않는 자리다.' }] } }] },
              [['tell', 'walk']], [{ id: 'driver', text: '운전기사에게 미리 알리면 서두르지 않아도 된다' }, { id: 'lot', text: '주차장 차 사이는 운전자에게 보이지 않는 자리다' }, { id: 'onemin', text: '1분이라도 늦으면 안 되니 뛰는 게 맞다', why: '1분을 아끼려 뛰는 것보다 알리고 걷는 것이 안전해요.' }], ['driver', 'lot'], { d: 0.35, more: { conclude: '혼자 이동할 때도 알릴 사람에게 먼저 알리면, 시간에 쫓겨 위험한 길을 고르지 않아도 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '붐비는 곳에서 내가 지킬 행동 두 가지를 오늘 고른 근거와 함께 쓰세요.' }] },
        notes: '밀집 상황은 넘어짐을 막는 행동에 초점을 두고, 실제 사고 사례·인명 피해 묘사는 하지 않는다. 학생에게 겪은 일을 묻지 않는다.',
      }),
      M({
        id: 'activity.trip-plan', type: 'activity', title: '혼자 떠나는 장거리 이동 시각표',
        method: '혼자 하는 장거리 이동 계획', tool: 'clock', minutes: 18,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다.', base: '5분 단위로 시각을 나타내고 연락할 시각을 정한 까닭을 짝에게 말한다.', challenge: '작은 눈금 없이 1분 단위로 나타내고, 마지막 문항에서 열차가 늦어졌을 때의 대안 시각까지 정한다.' },
        activity: {
          title: '출발·환승·도착·연락 시각 정하기', tool: 'clock',
          teacher: '"가상 일정이에요. 지윤이는 아침 기차로 출발해 버스로 갈아타고 할머니 댁에 가요. 언제 가족에게 연락하면 좋을까요?" 출발·환승·도착 시각을 시계에 나타낸 뒤 연락 시각을 정하게 한다. "도착해서 한 번만 연락하면 된다"는 학생에게 "환승에서 버스를 놓친다면 가족은 그 사실을 언제 알게 될까요?"라고 묻는다. 연락은 출발·환승·도착처럼 일정이 바뀔 수 있는 자리마다 한다는 점을 짚는다.',
          task: '가상 일정표를 읽고 출발·환승·도착·연락 시각을 시계에 나타내요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1, showMinuteMarks: false } },
          items: [
            { prompt: '가상 일정: 기차는 아침 8시 30분에 출발해요. 출발 시각을 시계에 나타내세요.', toolOptions: {}, target: { h: 8, m: 30 }, difficulty: 0.1 },
            { prompt: '기차는 2시간 뒤 환승역에 도착하고, 버스는 그로부터 1시간 뒤에 출발해요. 버스 출발 시각을 나타내세요.', toolOptions: {}, target: { h: 11, m: 30 }, difficulty: 0.3 },
            { prompt: '버스를 탄 뒤 가족에게 \'버스 탔어, 도착 예정은 1시간 30분 뒤\'라고 알리기로 했어요. 알려 준 도착 예정 시각을 나타내세요.', toolOptions: {}, target: { h: 1, m: 0 }, difficulty: 0.35 },
            { prompt: '기차가 1시간 늦어져 버스를 놓쳤어요. 다음 버스는 처음 버스보다 2시간 뒤에 있어요. 가족에게 알릴 새 버스 출발 시각을 나타내세요.', toolOptions: {}, target: { h: 1, m: 30 }, difficulty: 0.4, conclude: '일정이 바뀌면 그 자리에서 바뀐 출발·도착 예정 시각을 알려요. 연락은 도착 한 번이 아니라 바뀔 수 있는 자리마다 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '혼자 이동하는 가상 일정에서 시각마다 가족에게 알릴 내용을 쓰세요.', columns: ['때', '시각', '알릴 내용'], cells: [['출발', '', ''], ['환승', '', ''], ['도착', '', '']] }] },
        notes: '일정·시각은 모두 수업용 가상 값이다. 교구 문항 수는 단계마다 같아서 지연 대안은 모든 단계의 마지막 문항으로 두고, 단계 차이는 시계 눈금 설정으로 둔다.',
      }),
      M({
        id: 'activity.guide-compare', type: 'activity', title: '교통수단별 안전 안내 견주기',
        method: '교통수단별 안전 안내 비교', tool: 'mindmap', minutes: 18,
        levels: { easy: '기차·항공기 두 수단의 안내 카드만 나누고, 공통 수칙과 비상 장비를 고른다.', base: '기차·고속버스·항공기·여객선 네 수단의 안내 카드를 나누고 공통 수칙을 고른다.', challenge: '카드를 섞어 풀고, 활동지에 공통 수칙이 왜 모든 수단에 필요한지 근거를 쓴다.' },
        activity: {
          title: '네 수단의 안전 안내 나누기', tool: 'mindmap',
          teacher: '"기차·고속버스·비행기·배는 생김새가 다르지만 안전 안내에는 겹치는 말이 있어요. 무엇이 같고 무엇이 다를까요?" 수단마다 고유한 안내를 먼저 나누고, 둘째 문항에서 모든 수단에 공통인 수칙을 고르게 한다. "버스는 짧게 타니까 안내가 필요 없다"는 학생에게 "고속버스에도 안전띠와 비상 망치가 있을까요?"라고 묻는다. 비상구·비상 장비 위치 확인은 어느 수단에서든 탑승하자마자 한다는 점을 짚는다.',
          task: '안전 안내 카드를 교통수단 칸에 나누고, 모든 수단에 공통인 수칙을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '안전 안내 카드를 그 안내가 나오는 교통수단 칸에 나누세요.', toolOptions: { mode: 'sort', topic: '수단별 안전 안내', slots: ['기차', '고속버스', '항공기', '여객선'], cards: ['열차와 승강장 사이 틈 조심', '이착륙 때 좌석 등받이 세우기', '출항 뒤 구명조끼 위치 확인', '달리는 동안 좌석 안전띠 매기', '닫히는 문에 기대지 않기', '산소마스크는 본인 먼저 쓰기', '흔들리는 갑판 난간 가까이 가지 않기', '창가 비상 망치 위치 확인'] }, target: { sort: { '기차': ['열차와 승강장 사이 틈 조심', '닫히는 문에 기대지 않기'], '고속버스': ['달리는 동안 좌석 안전띠 매기', '창가 비상 망치 위치 확인'], '항공기': ['이착륙 때 좌석 등받이 세우기', '산소마스크는 본인 먼저 쓰기'], '여객선': ['출항 뒤 구명조끼 위치 확인', '흔들리는 갑판 난간 가까이 가지 않기'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '기차와 항공기 안전 안내 카드를 알맞은 칸에 나누세요(두 수단).', toolOptions: { slots: ['기차', '항공기'], cards: ['열차와 승강장 사이 틈 조심', '이착륙 때 좌석 등받이 세우기', '닫히는 문에 기대지 않기', '산소마스크는 본인 먼저 쓰기'] }, target: { sort: { '기차': ['열차와 승강장 사이 틈 조심', '닫히는 문에 기대지 않기'], '항공기': ['이착륙 때 좌석 등받이 세우기', '산소마스크는 본인 먼저 쓰기'] } } } } },
            PICKQ('네 교통수단 모두에서 탑승하자마자 할 공통 수칙만 고르세요.', ['비상구 위치 확인하기', '안전 안내 방송 듣기'], ['창가 자리부터 맡기', '내릴 때까지 이어폰 끼고 자기'], { d: 0.3, opt: { basket: '공통 수칙' }, more: { hints: ['기차·버스·비행기·배 어디서나 할 수 있는지 하나씩 따져 보세요.'] } }),
            MATCHQ('비상 장비와 그 장비가 있는 교통수단을 짝지으세요.', [['구명조끼', '여객선'], ['비상 망치', '고속버스'], ['산소마스크', '항공기']], { k: 2, extra: ['자전거'], d: 0.35, opt: { mode: 'match', topic: '비상 장비' }, more: { conclude: '수단마다 비상 장비는 달라도, 탑승하자마자 비상구와 장비 위치를 확인하고 안내를 듣는 것은 같아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '네 수단에 공통인 안전 수칙 하나를 골라, 왜 모든 수단에 필요한지 근거를 한 문장으로 쓰세요.' }] },
        notes: '카드 한 장의 정답 칸은 하나라서 공통 수칙은 따로 고르기 문항으로 다룬다. 수단별 안내 문구는 실제 운영사 안내와 다를 수 있으니 탈 때의 안내를 따르게 한다.',
      }),
      M({
        id: 'activity.share-plan', type: 'activity', title: '위치 공유와 비상 연락 계획서',
        method: '위치 공유와 비상 연락 계획서', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '세 항목마다 문장 틀을 보고 쓴다.', base: '공유할 정보·연락 시점·비상 시 행동 세 항목을 쓰고 기준표로 점검한다.', challenge: '항목마다 기준 하나가 더 붙어, 열차 지연·휴대전화 분실 같은 대비까지 쓴다.' },
        activity: {
          title: '혼자 이동할 때의 연락 계획서', tool: 'rubric-writing',
          teacher: '"혼자 장거리 이동을 할 때 가족이 알아야 할 것은 무엇일까요? 위치 공유 앱만 켜 두면 될까요?" 계획서의 세 항목(공유할 정보·연락 시점·비상 시 행동)을 차례로 쓰게 한다. "위치 공유를 켜 두면 연락은 안 해도 된다"는 학생에게 "휴대전화 배터리가 꺼지면 가족 화면에는 무엇이 보일까요?"라고 묻는다. 계획서에 실제 전화번호·주소를 쓰지 않고 \'가족\'·\'역 이름\'처럼 쓰게 한다.',
          task: '혼자 하는 가상 장거리 이동의 연락 계획서를 세 항목으로 쓰고 기준표로 점검해요(실제 전화번호·주소는 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('계획서 1항: 출발 전에 가족과 공유할 정보를 2~3문장으로 쓰세요.', '출발 전에 가족과 공유할 정보를 쓰세요(교통수단·출발과 도착 예정 시각·환승 장소 등, 실제 번호·주소 없이).', ['교통수단과 경로를 썼다', '출발·도착 예정 시각을 썼다', '실제 번호·주소 같은 개인정보를 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['시각', '시']], starter: '나는 출발 전에 가족에게 ~을 알린다.', plus: '예약 정보(열차·좌석)를 어디서 확인할 수 있는지 썼다', d: 0.35 }),
            RWQ('계획서 2항: 이동 중 언제 연락할지 연락 시점을 2~3문장으로 쓰세요.', '이동 중 연락할 시점을 쓰세요. 일정이 바뀔 수 있는 자리마다 무엇을 알릴지 넣어요.', ['연락할 시점을 둘 이상 썼다', '시점마다 알릴 내용을 썼다', '일정이 바뀌면 바로 알린다고 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['환승', '도착', '출발']], starter: '나는 ~할 때와 ~할 때 연락한다.', plus: '연락이 안 될 때 가족이 기다릴 시간을 정했다', d: 0.4 }),
            RWQ('계획서 3항: 열차 지연이나 휴대전화 분실 같은 비상 때 할 행동을 2~4문장으로 쓰세요.', '비상 때 할 행동을 쓰세요. 열차 지연, 휴대전화 분실, 몸이 아플 때 가운데 둘 이상을 골라요.', ['비상 상황을 둘 이상 골랐다', '상황마다 먼저 도움을 청할 사람·곳을 썼다', '가족에게 알릴 방법을 썼다'], { min: 50, max: 400, sent: [2, 4], must: [['역무원', '승무원', '기사', '안내', '112', '119']], starter: '열차가 늦어지면 ~. 휴대전화를 잃어버리면 ~.', plus: '휴대전화 없이도 쓸 수 있는 방법(메모한 연락처·안내 데스크)을 넣었다', d: 0.45, more: { conclude: '위치 공유는 연락을 돕는 도구일 뿐이에요. 언제·무엇을 알릴지 정한 계획이 혼자 하는 이동의 안전망이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 계획서에서 가족이 가장 안심할 문장 하나를 골라 옮겨 쓰고 그 까닭을 쓰세요.' }] },
        notes: '학생의 실제 여행 계획·연락처·주소를 발표시키지 않는다. 교구는 개인정보 꼴(전화번호 등)이 보이면 정답 처리하지 않는다.',
      }),

      M({
        id: 'wrap.crowd-order', type: 'wrap', title: '밀집 상황 행동 차례',
        method: '밀집 상황 행동 차례', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 첫 카드(멈추기)를 함께 놓고 나머지 세 장을 차례로 놓는다.', base: '네 장을 스스로 차례로 놓고 함정 카드는 남긴다.', challenge: '출구 2번에서 넘어졌을 때의 행동까지 고르고 그 까닭을 짝에게 말한다.' },
        wrap: {
          teacher: '"오늘 승강장에서 서연이가 한 행동을 차례로 정리해 볼까요? 밀릴 때 가장 먼저 할 일은 무엇이었죠?" 출구 1번을 함께 풀 때 "밀고 나간다" 카드를 놓으려는 학생에게 "오늘 갈림길에서 밀었을 때 주변은 어떻게 되었나요?"라고 묻는다. 출구 2번에서 넘어졌을 때 몸을 보호하는 자세를 짚고, 무서운 장면보다 내가 할 수 있는 행동에 집중하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['밀리기 시작할 때', '벗어난 뒤'], slots: 4, cards: ['흐름을 따라 걷기', '가장자리로 옮기기', '멈춰서 자세 낮추기', '팔로 가슴 앞 공간 만들기', '앞사람 밀고 나가기'] }, prompt: '밀집 상황에서 할 행동을 차례로 놓고 맞지 않는 카드는 남기세요.', target: { order: ['멈춰서 자세 낮추기', '팔로 가슴 앞 공간 만들기', '흐름을 따라 걷기', '가장자리로 옮기기'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '붐비는 곳에서 넘어졌을 때 알맞은 행동을 고르세요.', options: ['바로 누워 쉰다', '몸을 웅크려 머리와 가슴을 감싸고 일어날 틈을 찾는다', '가방을 먼저 찾는다'], answer: 1, difficulty: 0.2, explain: '넘어지면 머리와 가슴을 먼저 보호하고, 주변 도움을 받아 일어날 틈을 찾아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '밀집 상황 행동',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '붐비는 곳에서는 흐름을 ___ 않고, 팔로 가슴 앞 공간을 만들어 넘어지지 않게 자세를 지킨다.', answer: '거스르지' },
            { type: 'short', prompt: '행사·축제에 갈 때 붐비는 시간을 피할 방법 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.trip-check', type: 'wrap', title: '장거리 이동 출발 전 점검',
        method: '출발 전 이동 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 점검 항목 3개를 함께 읽으며 표시한다.', base: '점검 후보 7개 가운데 알맞은 5개만 표시한다.', challenge: '활동지에 나만의 점검 항목 하나를 직접 더한다.' },
        wrap: {
          teacher: '"졸업하고 처음 혼자 먼 곳에 간다면, 집을 나서기 전에 무엇을 확인할까요?" 출구 1번에서 알맞은 항목만 표시하게 한다. "보조배터리 대신 휴대전화를 100% 충전하면 된다"는 학생에게 "길에서 지도와 연락에 계속 쓰면 배터리가 도착할 때까지 남아 있을까요?"라고 묻는다. 함정 항목(일정은 비밀로 하기 등)을 고른 학생에게는 오늘 계획서의 연락 시점을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '출발 전 이동 점검', items: [{ id: 'route', text: '경로와 환승 장소를 미리 확인한다' }, { id: 'share', text: '가족에게 일정과 도착 예정 시각을 알린다' }, { id: 'battery', text: '휴대전화를 충전하고 보조배터리를 챙긴다' }, { id: 'memo', text: '중요한 연락처를 종이에도 적어 둔다' }, { id: 'early', text: '환승 시간이 빠듯하지 않게 여유를 둔다' }, { id: 'secret', text: '혼자 가는 게 멋지니 일정은 알리지 않는다' }, { id: 'last', text: '막차 직전 표를 사서 시간을 아낀다' }] }, prompt: '장거리 이동 전에 할 일에만 표시하세요.', target: { checklist: ['route', 'share', 'battery', 'memo', 'early'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '혼자 장거리 이동을 할 때 가장 알맞은 연락 방법은?', options: ['도착해서 한 번만 연락한다', '출발·환승·도착처럼 일정이 바뀔 수 있는 때마다 알린다', '위치 공유를 켜 두었으니 연락하지 않는다'], answer: 1, difficulty: 0.15, explain: '일정이 바뀔 수 있는 자리마다 알리면 문제가 생겨도 가족이 바로 알 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '출발 전 이동 점검',
          items: [
            { type: 'check', prompt: '다음 장거리 이동 전에 할 것에 표시하세요.', options: ['경로·환승 확인', '가족에게 일정 알리기', '충전·보조배터리', '연락처 종이 메모', '환승 여유 시간'] },
            { type: 'short', prompt: '나만의 점검 항목 하나를 더 쓰고, 그 항목이 필요한 까닭을 쓰세요.' },
          ],
        },
        notes: '교구 점검표는 단계별 판이 없어 항목 수(3개·5개)는 교사 진행으로 나눈다.',
      }),
    );
  }

  // ======================================================================================================
  // 15. 보험과 법으로 읽는 책임, 운전자 서약 (12학년)
  // ======================================================================================================
  {
    const M = MOD('driver-pledge', [12]);
    const INS = { text: '면허를 딴 지 석 달 된 태윤이는 약속에 늦었다. "보험 들어 놨으니 무슨 일 있어도 괜찮아." 노란불에 속도를 높인다.', who: '태윤', motif: 'cloud', choices: [
      { id: 'speed', text: '노란불에 속도를 높여 교차로를 지난다', result: '건너던 자전거를 보고 급히 멈추지만 앞바퀴를 살짝 친다.', impact: [{ who: '자전거 운전자', text: '넘어져 팔을 다친다', tone: -1 }],
        next: { text: '자전거 운전자가 일어나 팔을 감싼다. 태윤이는 "보험 처리하면 되죠"라고 말한다.', choices: [
          { id: 'only', text: '보험사 번호만 알려 주고 약속 장소로 간다', result: '다친 사람을 두고 떠난 일이 문제가 된다.', impact: [{ who: '자전거 운전자', text: '구호를 받지 못한 채 남는다', tone: -1 }, { who: '태윤', text: '사고 후 조치를 하지 않은 책임까지 진다', tone: -1 }], ending: '보험은 보상을 돕지만, 멈추고 구호하고 신고할 의무를 대신하지 않는다.' },
          { id: 'care', text: '차를 안전한 곳에 세우고 다친 사람을 살핀 뒤 119와 112에 알린다', result: '구급대와 경찰이 와서 사고를 처리한다.', impact: [{ who: '자전거 운전자', text: '바로 치료를 받는다', tone: 1 }],
            next: { text: '한 달 뒤, 보험사가 치료비를 보상했다. 그런데 경찰 조사와 면허 처분 통지가 함께 왔다.', choices: [
              { id: 'accept', text: '조사에 성실히 응하고 피해자에게 사과하며 운전 습관을 고친다', result: '처분을 받고, 다음 해 보험료가 오른다. 운전할 때 노란불이면 멈춘다.', impact: [{ who: '태윤', text: '책임을 지고 습관을 바꾼다', tone: 1 }], ending: '보험이 덮은 것은 치료비였다. 조사·처분·사과·습관은 운전자 몫으로 남았다.' },
              { id: 'deny', text: '"보험으로 다 처리했는데 왜?"라며 조사에 불만을 낸다', result: '조사는 그대로 이어지고 피해자와의 관계도 나빠진다.', impact: [{ who: '태윤', text: '책임을 줄이지 못한다', tone: -1 }], ending: '보험 처리와 법적 책임은 서로 다른 길이다. 하나를 했다고 다른 것이 사라지지 않는다.' }] } }] } },
      { id: 'stop', text: '노란불에 멈추고 약속 상대에게 늦는다고 알린다', result: '10분 늦게 도착하지만 아무 일도 없다.', impact: [{ who: '태윤', text: '사과 한마디로 끝난다', tone: 1 }], ending: '보험을 믿고 서두른 1분이 아니라, 멈춘 1분이 모두를 지켰다.' }] };
    const INS_R = [{ id: 'cover', text: '보험은 피해 보상을 돕지만 형사·행정 책임을 없애지 않는다' }, { id: 'duty', text: '사고가 나면 멈추고 다친 사람을 구호하고 신고해야 한다' }, { id: 'stop', text: '서두를 때일수록 노란불에서 멈추는 습관이 필요하다' }, { id: 'all', text: '보험에 들면 어떤 사고도 책임지지 않는다', why: '보험은 돈으로 보상하는 것을 도울 뿐, 조사·처분·사과는 운전자에게 남아요.' }, { id: 'escape', text: '처벌만 피하면 책임을 다한 것이다', why: '다친 사람에 대한 사과와 습관을 고치는 일도 책임이에요.' }];

    MODS.push(
      M({
        id: 'intro.duty-sort', type: 'intro', title: '사고 뒤 책임은 몇 갈래일까',
        method: '책임 세 갈래 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '벌금·면허 정지·손해 배상 카드 3장을 함께 형사·행정·민사 칸에 나눈다.', base: '카드 6장을 나누고 칸마다 누가 그 책임을 묻는지(법원·경찰청·피해자) 짐작한다.', challenge: '가장 헷갈린 카드 하나(벌금과 손해 배상의 차이 등)의 근거를 한 문장으로 말한다.' },
        intro: {
          teacher: '"교통사고가 나면 운전자는 \'책임을 진다\'고 하죠. 그런데 그 책임은 한 가지일까요?" 시연으로 벌금은 형사, 면허 정지는 행정, 손해 배상은 민사 칸에 놓이는 모습을 보여 준다. "벌금이나 배상이나 다 돈을 내는 거니까 같다"는 말이 나오면 "벌금은 누구에게 내고, 배상은 누구에게 줄까요?"라고 되묻는다. 세 갈래 가운데 보험이 도와주는 것은 어디까지인지가 오늘의 질문이라고 밝힌다.',
          student: '사고 뒤 운전자가 질 수 있는 책임 카드를 형사·행정·민사 칸에 나누고, 칸마다 누가 그 책임을 묻는지 짐작해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '교통사고 뒤 책임', slots: ['형사 책임', '행정 책임', '민사 책임'], cards: ['벌금', '형사 재판', '면허 정지', '벌점', '손해 배상', '치료비 배상'] }, sequence: [{ sort: { '형사 책임': ['벌금', '형사 재판'], '행정 책임': ['면허 정지', '벌점'], '민사 책임': ['손해 배상', '치료비 배상'] } }] },
          art: { draw: 'three paper doors side by side labeled with a gavel, a driver license card and a coin purse, a paper driver standing in front of them holding a car key, a small paper umbrella labeled insurance covering only the coin door', banner: '책임은 세 갈래', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '형사·행정·민사의 구분만 다루고 조문 번호·형량·벌금 액수는 쓰지 않는다.',
      }),
      M({
        id: 'intro.case-story', type: 'intro', title: '가상 사고 뒤 한 달',
        method: '가상 사고 뒤 한 달 장면', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장(사고 당일·보험 접수·사과)을 함께 차례로 놓는다.', base: '장면 5장을 차례로 놓고 장면마다 어떤 책임에 해당하는지 말한다.', challenge: '장면마다 형사·행정·민사 가운데 책임 종류를 붙이고, 보험이 맡은 장면이 어디인지 짚는다.' },
        intro: {
          teacher: '"가상 운전자 은호의 사고 뒤 한 달이에요. 사고는 하루였지만 그 뒤에 무슨 일이 이어질까요?" 시연으로 장면을 차례로 놓은 뒤 "이 가운데 보험사가 해 준 장면은 몇 개인가요?"라고 묻는다. "보험사에 접수하면 그다음은 보험사가 다 알아서 한다"는 말이 나오면 "경찰 조사와 면허 통지 장면에 보험사가 나오나요?"라고 되묻는다. 사고 뒤 책임은 시간이 지나며 여러 갈래로 이어진다는 점을 짚는다.',
          student: '가상 운전자 은호의 사고 뒤 한 달 장면을 차례로 놓고, 장면마다 어떤 책임이 이어지는지 생각해 보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '은호의 한 달(가상)', cards: [{ id: 'day', text: '사고 당일: 멈추고 구호·신고', motif: 'star' }, { id: 'ins', text: '다음 날: 보험사에 사고 접수', motif: 'house' }, { id: 'police', text: '일주일 뒤: 경찰 조사', motif: 'cloud' }, { id: 'license', text: '보름 뒤: 면허 처분 통지', motif: 'leaf' }, { id: 'sorry', text: '한 달 뒤: 피해자에게 사과 편지', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['day', 'ins', 'police', 'license', 'sorry'] }] },
          art: { draw: 'a paper calendar page with five paper scenes pinned on it in a row: a car stopped by the road, a phone call to an insurer, a police desk, a mailed license notice and a handwritten apology letter', banner: '사고 뒤 한 달', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '장면의 날짜는 수업용 가상 차례이며 실제 처리 기간은 사건마다 다르다.',
      }),

      M({
        id: 'activity.insurance-dilemma', type: 'activity', title: '보험을 믿고 서두른 운전자',
        method: '보험 믿고 내린 선택 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '첫 갈림길(노란불)에서 고른 결과까지 보고 근거를 고른다.', base: '두 번째 갈림길(사고 직후)까지 가서 결과를 보고 근거를 고른다.', challenge: '세 번째 갈림길(한 달 뒤)까지 따라가고, 셋째 문항(보험 처리 미루자는 제안)에서 결과마다 맞는 책임 종류 근거를 고른다.' },
        activity: {
          title: '태윤이의 갈림길과 책임 종류', tool: 'dilemma',
          teacher: '"\'보험 들었으니 괜찮아.\' 이 한마디가 태윤이의 선택을 어떻게 바꿨을까요?" 갈림길마다 영향 칸을 읽게 한다. \'보험사 번호만 알려 주고 간다\'를 고른 학생에게 "보험사 번호가 다친 사람을 구호해 주었나요?"라고 묻는다. 한 달 뒤 장면에서 "보험이 치료비를 냈는데 왜 조사를 받나요?"라는 질문이 나오면 오늘 도입의 세 갈래 칸을 다시 보게 한다. 보험은 민사 쪽 보상을 돕지만 형사·행정 책임을 없애지 않는다는 점을 짚는다.',
          task: '태윤이의 갈림길을 따라가며 보험이 덮지 못하는 결과를 찾고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '노란불 앞에서 사고를 막는 길, 또는 사고가 났다면 운전자의 의무를 다하는 길을 따라가고 근거를 고르세요.', toolOptions: { scene: cut(INS, 2), reasons: INS_R }, target: { path: [['stop'], ['speed', 'care']], reasons: ['cover', 'duty'] }, difficulty: 0.4,
              levels: { easy: { prompt: '노란불 앞에서 사고를 막는 길을 고르고 근거를 고르세요(갈림길 하나).', toolOptions: { scene: cut(INS, 1) }, target: { path: [['stop']], reasons: ['cover', 'stop'] } },
                challenge: { prompt: '사고를 막는 길, 또는 사고 뒤 한 달까지 책임을 다하는 길을 따라가고 근거를 고르세요(갈림길 3개).', toolOptions: { scene: INS }, target: { path: [['stop'], ['speed', 'care', 'accept']], reasons: ['cover', 'duty'] } } } },
            EXPLOREQ('노란불에 멈춘 길도 끝까지 가 보고, 사고가 난 길과 결과를 견주세요.', INS, INS_R, ['멈춘 길의 끝 결과를 확인했다', '두 길에서 태윤이가 잃은 것을 견주었다'], { d: 0.35 }),
            DILQ('보험 처리를 미루자는 제안 앞에서 책임을 다하는 길을 고르고, 그 길에 맞는 책임 종류 근거를 고르세요.', { text: '골목에서 후진하던 서진이의 차가 걸어가던 사람의 다리를 스쳤다. 그 사람은 "괜찮아요, 보험 말고 그냥 가세요"라고 한다.', who: '서진', motif: 'house', choices: [
              { id: 'go', text: '상대가 괜찮다고 했으니 그냥 떠난다', result: '저녁에 상대의 다리가 붓기 시작한다.', impact: [{ who: '보행자', text: '혼자 병원을 찾는다', tone: -1 }, { who: '서진', text: '사고 뒤 조치를 하지 않은 책임을 진다', tone: -1 }], ending: '"괜찮다"는 말이 운전자의 구호·신고 의무를 없애지 않는다.' },
              { id: 'stay', text: '차를 세우고 다친 곳을 살핀 뒤 112에 신고하고 보험사에 알린다', result: '경찰이 사고를 기록하고 보험사가 접수한다.', impact: [{ who: '보행자', text: '치료비를 보상받을 길이 생긴다', tone: 1 }],
                next: { text: '며칠 뒤 서진이는 경찰 조사와 보험 처리가 둘 다 진행된다는 것을 알게 된다.', choices: [
                  { id: 'both', text: '보험 처리는 보상, 조사는 운전자 책임으로 나누어 받아들인다', result: '조사에 응하고 피해자에게 사과 연락을 한다.', impact: [{ who: '서진', text: '세 갈래 책임을 제대로 진다', tone: 1 }], ending: '보상은 보험이 돕고, 조사와 처분·사과는 운전자가 지는 몫이다.' },
                  { id: 'cash', text: '보험료가 오를까 봐 보험 접수를 취소하고 현금으로만 해결하려 한다', result: '치료가 길어지며 비용 다툼이 생긴다.', impact: [{ who: '보행자', text: '보상이 늦어진다', tone: -1 }], ending: '보험료를 아끼려다 피해자의 보상과 내 책임이 모두 흔들린다.' }] } }] },
              [['stay', 'both']], [{ id: 'civil', text: '피해자 치료비 보상은 민사 책임이고 보험이 도울 수 있다' }, { id: 'crim', text: '사고 조사와 처분은 보험과 따로 남는 형사·행정 책임이다' }, { id: 'ok', text: '상대가 괜찮다고 하면 책임이 없다', why: '다친 사람이 괜찮다고 해도 구호·신고 의무는 운전자에게 있어요.' }], ['civil', 'crim'], { d: 0.4, more: { conclude: '보험이 도운 것은 민사 쪽 보상이에요. 조사와 면허 처분은 보험과 상관없이 운전자에게 남아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"보험 들었으니 괜찮아"라는 말이 틀린 까닭을 오늘 갈림길의 결과를 근거로 한 문장으로 쓰세요.' }] },
        notes: '자동차보험이 보상하는 범위와 형사 책임과의 관계(종합보험 가입 때의 특례와 그 예외 포함)는 단순화했다. 세부는 사람이 확인한다. 조문 번호·형량은 다루지 않는다.',
      }),
      M({
        id: 'activity.cost-budget', type: 'activity', title: '사고 한 번으로 잃는 것 가늠하기',
        method: '사고 뒤 잃는 것 가늠', tool: 'economy', minutes: 18,
        levels: { easy: '손실 카드 4장을 돈으로 셀 수 있는 것·셀 수 없는 것으로 나눈다(카드를 놓으면 바로 맞는지 보인다).', base: '손실 카드 6장을 나누고, 가상 예산 막대에서 내가 직접 낼 비용을 고른 뒤 보험으로 되돌릴 수 없는 손실을 고른다.', challenge: '카드를 섞어 풀고 예산 합계는 맞힌 뒤에만 보이며, 활동지에 보이지 않는 손실의 근거를 쓴다.' },
        activity: {
          title: '사고 한 번의 무게 재기', tool: 'economy',
          teacher: '"사고 한 번에 잃는 것을 막대에 올려 볼까요? 금액은 모두 가상이에요. 그런데 막대에 올릴 수 없는 손실도 있어요." 첫 문항에서 돈으로 셀 수 있는 것과 없는 것을 나누고, 둘째 문항에서 보험이 대신 내 주는 비용과 내가 직접 낼 비용을 가른다. "보험이 있으니 내 돈은 안 든다"는 학생에게 "다음 해 보험료와 자기 부담금은 누가 낼까요?"라고 묻는다. 셋째 문항에서 믿음·이동의 자유처럼 막대에 올릴 수 없는 손실이 가장 무겁다는 점을 짚는다.',
          task: '사고 한 번으로 잃는 것을 나누고, 가상 예산 막대에서 내가 직접 낼 비용을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true, revealAfterCheck: true } },
          items: [
            SORTQ('사고 뒤 손실 카드를 돈으로 셀 수 있는 것과 셀 수 없는 것으로 나누세요.', ['돈으로 셀 수 있는 손실', '돈으로 셀 수 없는 손실'], [
              ['차 수리비', '다음 해 오른 보험료', '자기 부담금'],
              ['가족과 친구의 믿음', '피해자가 겪는 아픔', '운전에 대한 자신감'],
            ], { k: 2, d: 0.25, opt: { trayLabel: '손실 카드' } }),
            { prompt: '가상 사고 뒤 청구서예요. 가상 예산 80만 원 안에서 보험이 대신 내 주지 않아 내가 직접 낼 비용만 고르세요.', toolOptions: { mode: 'budget', budget: 800000, items: [{ id: 'deduct', text: '내 차 수리 자기 부담금', price: 200000 }, { id: 'premium', text: '다음 해 오른 보험료(가상)', price: 300000 }, { id: 'fine', text: '벌금(형사 처분, 가상 금액)', price: 200000 }, { id: 'other', text: '상대 차 수리비(보험 보상)', price: 1500000 }, { id: 'med', text: '피해자 치료비(보험 보상)', price: 900000 }], ask: '내가 직접 낼 비용' }, target: { budget: { must: ['deduct', 'premium', 'fine'], not: ['other', 'med'] } }, difficulty: 0.35, hints: ['청구서 글에 \'보험 보상\'이라고 적힌 항목이 어느 것인지 먼저 보세요.'] },
            { prompt: '보험으로도, 돈으로도 되돌릴 수 없는 손실을 모두 고르세요.', toolOptions: { mode: 'pick', basket: '되돌릴 수 없는 손실', cards: ['가족과 친구의 믿음', '차 수리비', '피해자가 겪는 아픔', '상대 차 수리비', '면허 정지 동안의 이동 자유'] }, target: { pick: ['가족과 친구의 믿음', '피해자가 겪는 아픔', '면허 정지 동안의 이동 자유'] }, difficulty: 0.35, conclude: '막대에 올릴 수 있는 손실은 보험이나 돈으로 일부 메울 수 있지만, 믿음·아픔·자유 같은 손실은 되돌리기 어려워요. 그래서 사고를 막는 습관이 가장 큰 보험이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '막대에 올릴 수 없는 손실 하나를 골라, 왜 그것이 가장 무겁다고 생각하는지 근거를 쓰세요.' }] },
        notes: '교구의 예산 판은 돈(원)만 세므로 시간·신뢰 같은 손실은 막대에 올리지 않고 나누기·고르기 문항으로 다룬다. 금액은 모두 수업용 가상 값이며, 자동차보험이 벌금을 보상하지 않는다는 점 등 보상 범위는 사람이 확인한다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '초보 운전자 기준 강화 찬반',
        method: '처벌 강화 찬반 토론', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '입장과 근거 1개를 문장 틀을 보고 쓴다.', base: '입장과 근거 2개를 쓰고, 상대 입장의 근거를 정리한 뒤 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙고, 마지막 문항에서 상대 근거에 반박한다.' },
        activity: {
          title: '초보 운전자 기준 찬반 글', tool: 'rubric-writing',
          teacher: '"\'면허를 딴 지 얼마 안 된 초보 운전자의 기준(야간 운전·동승 인원 등)을 더 엄격히 해야 한다.\' 곧 운전자가 될 여러분은 어느 쪽인가요?" 찬반 어느 쪽이든 괜찮고 근거의 힘을 본다고 먼저 밝힌다. "나는 운전 잘할 거니까 반대"처럼 한 사람의 생각만 쓴 학생에게 "그 근거는 다른 초보 운전자 모두에게도 맞을까요?"라고 묻는다. 반박은 상대를 깎는 말이 아니라 상대 근거의 빈 곳을 짚는 말이라는 점을 짚는다.',
          task: '초보 운전자 기준 강화에 대한 내 입장과 근거를 쓰고, 상대 근거를 정리한 뒤 반박해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('"초보 운전자 기준을 더 엄격히 해야 한다"에 대한 내 입장과 근거 2개를 3~4문장으로 쓰세요.', '초보 운전자 기준(야간 운전·동승 인원 등) 강화에 대한 내 입장을 첫 문장에 쓰고 근거 2개를 쓰세요.', ['내 입장을 첫 문장에 분명히 썼다', '근거를 두 개 썼다', '근거가 한 사람의 경험이 아니다'], { min: 80, max: 400, sent: [3, 4], must: [['왜냐하면', '때문에', '근거']], starter: '나는 ~에 찬성(반대)한다. 첫째, ~. 둘째, ~', plus: '근거를 확인할 방법(자료·조사)을 덧붙였다', d: 0.4 }),
            RWQ('내 입장과 반대쪽의 가장 강한 근거를 공정하게 2~3문장으로 정리하세요.', '반대쪽 입장의 가장 강한 근거를 그쪽 사람이 읽어도 고개를 끄덕이게 정리하세요.', ['반대쪽 입장을 정확히 옮겼다', '반대쪽의 가장 강한 근거를 골랐다', '깎아내리는 말 없이 썼다'], { min: 50, max: 300, sent: [2, 3], must: [['반대쪽', '상대', '그쪽']], starter: '반대쪽은 ~라고 본다. 그 근거는 ~', plus: '그 근거에 동의할 수 있는 부분을 인정했다', d: 0.4 }),
            RWQ('정리한 상대 근거에 반박하는 글을 2~4문장으로 쓰세요.', '상대 근거의 빈 곳을 짚어 반박하세요. 반박 뒤 내 입장으로 끝맺어요.', ['상대 근거를 먼저 짚었다', '반박의 근거를 썼다', '내 입장으로 끝맺었다'], { min: 60, max: 400, sent: [2, 4], must: [['하지만', '그러나', '그런데']], starter: '상대는 ~라고 하지만, ~', plus: '양쪽이 함께 받아들일 절충안을 하나 제안했다', d: 0.45, more: { conclude: '좋은 토론 글은 내 입장, 확인할 수 있는 근거, 공정하게 정리한 상대 근거, 빈 곳을 짚는 반박으로 이루어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '토론 뒤 내 입장이 바뀌었거나 더 굳어졌다면, 그렇게 만든 근거 하나를 쓰세요.' }] },
        notes: '토론 주제는 특정 정당·정치인과 관련짓지 않는다. 다른 나라의 단계적 면허 제도 등 사례를 들 때는 사람이 확인한 자료만 쓴다.',
      }),
      M({
        id: 'activity.three-years', type: 'activity', title: '세 해 교통안전 배움 모으기',
        method: '세 해 교통안전 배움 정리', tool: 'mindmap', minutes: 19,
        levels: { easy: '배움 카드 3장(가지마다 1장)을 고1 이륜차·고2 자동차·고3 자립 가지에 나눈다.', base: '배움 카드 6장(가지마다 2장)을 나누고, 서약에 넣을 배움만 고른다.', challenge: '헷갈리는 카드가 더해진 8장을 나누고, 가지 사이에 같은 원리로 이어지는 배움을 짝짓는다.' },
        activity: {
          title: '세 가지 배움 생각그물', tool: 'mindmap',
          teacher: '"고1에는 이륜차, 고2에는 자동차, 고3에는 졸업 뒤 자립을 배웠어요. 세 해의 배움을 한 장에 모으면 서약의 재료가 돼요." 카드를 가지에 단 뒤 서약에 넣을 것을 고르게 한다. "배운 걸 다 서약에 넣으면 된다"는 학생에게 "지킬 수 없는 약속이 많으면 서약은 어떻게 될까요?"라고 묻는다. 마지막 문항에서 \'동승을 거절하는 판단\'처럼 학년이 달라도 같은 원리가 이어진다는 점을 짚는다.',
          task: '세 해 동안 배운 교통안전 카드를 가지에 나누고, 서약에 넣을 것을 고른 뒤 가지 사이 연결을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('세 해의 배움 카드를 학년 가지에 나누세요.', ['고1 이륜차', '고2 자동차', '고3 자립'], [
              ['킥보드도 면허가 있어야 탄다', '출발 전 등화·브레이크를 점검한다'],
              ['음주 운전 차에 타지 않는다', '뒷좌석에서도 안전띠를 맨다'],
              ['면허는 숙련이 아님을 안다', '혼자 이동할 때 일정을 공유한다'],
            ], { k: 1, hard: [['안전모 턱끈을 조인다'], ['우회전 때 보행자를 먼저 본다'], []], d: 0.3, opt: { topic: '세 해의 교통안전' } }),
            PICKQ('세 해의 배움 가운데 나의 서약에 넣을 만한 것만 고르세요.', ['음주 운전 차에 타지 않는다', '혼자 이동할 때 일정을 공유한다', '출발 전 등화·브레이크를 점검한다'], ['보험이 있으니 서둘러도 된다', '시험 요령만 익히면 된다'], { d: 0.3, opt: { basket: '서약에 넣을 것' }, more: { hints: ['내가 실제로 지킬 수 있고, 법의 최소 기준보다 높은 약속인지 보세요.'] } }),
            MATCHQ('다른 학년의 배움 가운데 같은 원리로 이어지는 것을 짝지으세요.', [['고1: 면허 없는 친구 뒷자리 거절', '고2: 술 마신 어른의 차 타지 않기'], ['고1: 출발 전 이륜차 점검', '고2: 운전 전 내 상태 점검'], ['고2: 졸음 오면 쉬어 가기', '고3: 피곤하면 운전하지 않기']], { k: 2, extra: ['고3: 혼잡할수록 밀고 나가기'], d: 0.4, opt: { mode: 'match' }, more: { conclude: '탈것이 바뀌어도 원리는 이어져요 — 위험한 동승은 거절하고, 출발 전에 차와 나를 점검하고, 상태가 나쁘면 멈춰요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 해의 배움 가운데 가장 오래 지키고 싶은 것 하나를 고르고, 그것이 나의 어떤 미래 상황에 쓰일지 쓰세요.' }] },
        notes: '고1·고2 주제(이륜차·자동차)를 배우지 않은 학급은 카드 글을 함께 읽으며 짧게 되짚고 시작한다.',
      }),

      M({
        id: 'wrap.pledge', type: 'wrap', title: '나의 운전자·이용자 서약',
        method: '나의 운전자·이용자 서약', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 서약 후보 3개를 함께 읽으며 표시한다.', base: '서약 후보 7개 가운데 지킬 수 있는 안전 서약 5개를 표시하고 함정 후보는 남긴다.', challenge: '활동지에 나만의 서약 항목 하나를 직접 더한다.' },
        wrap: {
          teacher: '"오늘까지 배운 것을 서약으로 남겨요. 서약은 법의 최소 기준이 아니라 그보다 높은 나의 기준이에요." 출구 1번에서 서약에 넣을 항목만 표시하게 한다. "보험에 꼭 든다"만 고르고 다른 항목을 빼는 학생에게 "보험이 오늘 갈림길에서 덮지 못한 것은 무엇이었나요?"라고 묻는다. 활동지에 쓴 서약은 학생이 간직하는 것이며 걷어서 평가하지 않는다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '나의 운전자·이용자 서약', items: [{ id: 'drink', text: '술 마신 사람의 차에 타지도, 운전하지도 않는다' }, { id: 'belt', text: '어느 자리에서든 안전띠를 맨다' }, { id: 'phone', text: '운전 중에는 휴대전화를 만지지 않는다' }, { id: 'yellow', text: '노란불에는 속도를 높이지 않고 멈춘다' }, { id: 'tired', text: '피곤하거나 화났을 때는 운전하지 않는다' }, { id: 'insure', text: '보험이 있으니 바쁠 땐 서둘러도 된다' }, { id: 'catch', text: '단속이 없는 길에서는 규칙을 느슨하게 한다' }] }, prompt: '나의 서약에 넣을 항목에만 표시하세요.', target: { checklist: ['drink', 'belt', 'phone', 'yellow', 'tired'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '자동차보험에 대해 오늘 배운 것과 맞는 말을 고르세요.', options: ['보험에 들면 형사 책임도 사라진다', '보험은 피해 보상을 돕지만 운전자의 다른 책임은 남는다', '보험이 있으면 사고 뒤 신고하지 않아도 된다'], answer: 1, difficulty: 0.15, explain: '보험은 민사 쪽 보상을 돕고, 형사·행정 책임과 사고 뒤 의무는 운전자에게 남아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 운전자·이용자 서약',
          items: [
            { type: 'check', prompt: '내가 지킬 서약에 표시하세요.', options: ['술 마신 사람의 차 타지 않기', '어느 자리든 안전띠', '운전 중 휴대전화 안 만지기', '노란불에 멈추기', '피곤·화날 때 운전 안 하기'] },
            { type: 'short', prompt: '나만의 서약 항목 하나를 더 쓰고, 그 항목을 지킬 구체적인 상황을 쓰세요.' },
          ],
        },
        notes: '교구 점검표는 단계별 판이 없어 항목 수(3개·5개)는 교사 진행으로 나눈다. 서약은 평가하지 않는다.',
      }),
      M({
        id: 'wrap.pledge-essay', type: 'wrap', title: '서약에 담은 까닭 성찰 글',
        method: '서약 성찰 글 다듬기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 ~을 서약한다. 왜냐하면 ~")을 보고 쓴다.', base: '네 문장을 쓰고 기준표(구체성·근거·실천 가능성) 세 항목을 스스로 점검한다.', challenge: '서약을 지키기 어려운 순간과 그때의 대처까지 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"서약은 몇 줄이지만, 그 줄을 고른 까닭이 있어야 오래 지켜져요. 오늘 토론과 세 해의 배움 가운데 무엇이 이 서약을 고르게 했나요?" 쓰기 전에 기준표 세 항목을 함께 읽는다. "항상 안전하게 운전한다"처럼 막연하게 쓴 학생에게 "언제, 어떤 상황에서 무엇을 하겠다는 말로 바꿔 볼까요?"라고 묻는다. 지키기 어려운 순간을 미리 떠올려 두는 것이 서약을 지키는 힘이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '나의 운전자·이용자 서약 하나와 그 서약을 고른 까닭을 네 문장으로 쓰세요.', minChars: 60, maxChars: 400, starter: '나는 ~을 서약한다. 왜냐하면 ~', sample: '나는 노란불에 속도를 높이지 않고 멈추겠다고 서약한다. 보험이 있어도 사고 뒤 조사와 처분, 피해자의 아픔은 되돌릴 수 없기 때문이다. 약속에 늦을 때가 가장 어려울 것 같다. 그럴 때는 출발 전에 늦는다고 먼저 알리겠다.' }, prompt: '서약 성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['서약을 언제·무엇을 할지 구체적으로 썼다', '그 서약을 고른 근거를 썼다', '내가 실제로 지킬 수 있는지 따져 보았다'], mustInclude: [['왜냐하면', '때문에']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오래 지킬 수 있는 서약 문장에 가장 가까운 것을 고르세요.', options: ['항상 안전하게 다닌다', '운전 전에 피곤하면 대중교통을 탄다', '절대 사고를 내지 않는다'], answer: 1, difficulty: 0.15, explain: '언제·무엇을 할지가 분명한 서약이 실제로 지키기 쉬워요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '서약 성찰 글',
          items: [
            { type: 'short', prompt: '나의 서약과 그 까닭을 네 문장으로 쓰세요.' },
            { type: 'short', prompt: '서약을 지키기 어려운 순간 하나와 그때 할 대처를 쓰세요.' },
          ],
          easy: { note: '"나는 ~을 서약한다. 왜냐하면 ~. 어려운 순간은 ~. 그때 나는 ~"', items: [{ type: 'short', prompt: '서약 하나와 그 까닭을 쓰세요.' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
