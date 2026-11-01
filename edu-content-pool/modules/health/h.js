/* 창체 보건교육 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 health 고.
 * 근거: 학교보건법 제9조·제9조의2 — 학교급별 1개 학년 이상 연 17차시(research-mandatory §1), 고 보건 주제(§2, 미검증). 흡연·음주·약물 오남용 예방은 보건교육 내용.
 * 쓰는 원칙: 몸·체형·외모를 평가하지 않고 다이어트·보충제를 권하지 않는다. 학생 자신의 건강 상태·몸무게·생활 습관·가정 형편·정신건강을 묻거나 채점하지 않는다(가상 인물).
 *   질병·감염병·약·의료 제도·수치 정보는 근거 파일에 없어 일반 설명까지만 쓰고 아래 사람 확인에 모았다. 그래프 값은 모두 '예시 자료(실제 통계 아님)'.
 *   같은 학년군 성교육(gender/h.js)·약물(saf-drug/h.js)·응급처치(saf-firstaid/h.js)·생명존중(life/h.js)과 문구(119·혼자 두지 않기·옆으로 눕히기 등)는 맞추고 장면은 되풀이하지 않는다.
 * 주제 9개, 계획 모듈 71개 전부.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처. 주제 블록마다 첫머리 주석에도 있다)
 *   사람 확인(inequity):
 *     - [inequity 전체] 건강 격차가 소득·주거·교육·의료 접근성 같은 사회적 결정 요인과 관련된다는 일반 설명 → 보건복지부·한국건강증진개발원(건강형평성 자료), 질병관리청 지역사회건강조사 안내
 *     - [inequity.activity.policy-dilemma] 보건소·보건 분소·이동 검진 같은 지역 보건 사업의 이름과 쓰임(일반 설명) → 보건복지부 지역보건 안내·지역 보건소
 *     - [inequity.activity.access-map] 대중교통·운영 시간이 의료 이용에 영향을 준다는 설명 → 보건복지부·지역 보건소
 *     계획대로 못 한 것:
 *     - intro.two-towns·intro.gap-chart: 도입은 시연 하나뿐이라 levels(장면 3장/4장, 값 표시/숨김)는 교사 진행 방식으로 적었다. 거리 자료는 시연 그래프에 넣지 않고(단위가 달라 한 그래프에 섞지 않음) 교사가 말로 보탠다.
 *     - activity.cause-web: mindmap 은 원인끼리 연결선을 긋지 못해 '원인 → 이어지는 결과' 짝 맞추기 문항으로 바꿨다.
 *     - activity.access-map: map 은 경로를 그리지 못해 '핀 꽂기 + 걸리는 길 보기 고르기'로 했다. 경로 1개/2개는 쉬움 = 이름 보이기, 기본 = 두 동네 문항, 도전 = 개선 위치 보기 고르기를 더했다.
 *     - wrap.*: 출구 질문에는 단계별 판이 없어 levels 는 교사 진행 방식이다(쉬움은 활동지 문장 틀).
 *
 *
 *   사람 확인(crisis-stigma):
 *     - [crisis-stigma.intro.stage-timeline · activity.actor-sort] 감염병 위기경보 네 단계(관심·주의·경계·심각)의 단계별 대응 내용과 정부·지자체·학교·개인의 역할(역학조사·등교 방식 조정·격리 지원) 일반 설명
 *         → 질병관리청(감염병 위기 대응 안내)·행정안전부 국민재난안전포털, 교육부 학교 감염병 대응 지침
 *     - [crisis-stigma.activity.stigma-dilemma · guideline · wrap.op-ed · wrap.campaign] 감염 여부·검사 사실도 보호할 개인 정보이고, 낙인이 증상 숨기기·검사 피하기로 이어져 방역을 해칠 수 있다는 설명
 *         → 질병관리청·국가인권위원회(감염병 관련 인권 보호 권고)·개인정보보호위원회
 *     - [crisis-stigma.activity.guideline] 아프면 쉬고 보건실에 알리기·손 씻기·기침 예절·환기 같은 학급 수칙 → 질병관리청 감염병 예방 수칙, 교육부 학교 감염병 대응 지침
 *     계획대로 못 한 것:
 *     - intro.*: 도입은 시연 하나뿐이라 levels(단계 2개/4개, 반응 2개/3개)는 교사 진행 방식으로 적었다.
 *     - activity.actor-sort: 계획의 '칸 2개'(쉬움)는 문항 1의 쉬움 판에서 칸 두 개(정부·방역 당국, 개인)로 줄였다. 협력 지점은 별도 분류 문항으로 뒀다.
 *     - activity.guideline: '상충 사례 하나'는 고르기 문항(방역과 인권을 함께 지키는 방법)으로 바꿨다.
 *     - 실제 감염병 이름·집단·지역·국적은 쓰지 않았다(낙인을 되풀이하지 않게). 단체방 장면은 모두 가상이다.
 *
 *
 *   사람 확인(antibiotic-vaccine):
 *     - [antibiotic-vaccine 전체] 항생제는 세균에 듣고 바이러스(감기·독감 등)에는 듣지 않는다 / 내성균은 항생제를 견딘 균이 살아남아 늘어나며 생긴다 / 처방받은 대로 끝까지 먹고, 남은 약을 남에게 주지 않는다
 *         → 질병관리청(항생제 내성 바로 알기)·식품의약품안전처(의약품 안전 사용)·약사·의사
 *     - [antibiotic-vaccine.activity.drug-sort] 세균성 인후염·폐렴·요로감염은 진단에 따라 항생제를 쓸 수 있고, 감기·독감·바이러스성 장염은 항생제가 듣지 않는다는 분류 → 질병관리청 국가건강정보포털
 *     - [antibiotic-vaccine.intro.germ-body] 감기(코), 인후염(목 — 교구에 목구멍 칸이 없어 '입'), 요로감염(방광) 부위 설명과 '원인은 검사로 확인한다' → 질병관리청 국가건강정보포털
 *     - [antibiotic-vaccine.activity.stop-dilemma · wrap.rule-check] 남은 약은 약국·보건소 등의 폐의약품 수거함에 낸다 → 식품의약품안전처·지역 보건소(폐의약품 수거 안내)
 *     - [antibiotic-vaccine.activity.vaccine-decide] 예방접종은 병을 막거나 가볍게 하는 데 도움을 주며, 결정은 이익·위험을 공식 출처로 확인하고 의료진과 상의한다 → 질병관리청 예방접종도우미
 *     - [antibiotic-vaccine.activity.reaction-order] 접종 뒤 잠시 머물며 살피기·쉬기·증상 기록·심하거나 오래가면 의료기관 연락 / 숨쉬기 어려움·얼굴·입술 붓기·의식이 흐려짐은 바로 119 → 질병관리청 예방접종도우미(이상반응 안내)·소방청
 *     계획대로 못 한 것:
 *     - intro.*: 도입은 시연 하나뿐이라 levels(단계 3개/4개, 부위 2개/3개)는 교사 진행 방식으로 적었다.
 *     - intro.germ-body: body 교구에 목구멍 칸이 없어 인후염 자리는 '입'으로 짚었다(교사가 목 안쪽이라고 말로 보탠다).
 *     - activity.reaction-order: 응급 신호 구별(계획의 도전)은 문항 수가 단계마다 같아야 해서 모든 단계의 둘째 문항으로 두었다.
 *     - wrap.rule-check: 출구 질문에는 단계별 판이 없어 항목 2개/3개는 교사 진행 방식이다(쉬움은 앞 두 항목부터 함께 읽음).
 *     - 학생 자신의 감염·복약·접종 이력은 묻지 않는다(다온·시현은 가상 인물). 실제 백신·약 이름은 쓰지 않았다.
 *
 *
 *   사람 확인(sleep-debt): (근거 파일에 세부 없음 — 수업 전 질병관리청 국가건강정보포털·국민건강보험공단 건강iN 청소년 수면 안내에서 확인)
 *     - [intro.debt-clock · activity.plan-board · wrap.strategy-write] 잠이 모자란 날이 이어지면 피로가 쌓이고(수면 부채), 주말에 몰아 자도 평일 리듬이 더 밀릴 수 있다
 *     - [intro.debt-chart · activity.effect-web] 잠이 부족하면 집중·기억 정리·기분·면역·졸음 사고 위험에 영향을 줄 수 있다(그래프 값은 예시 자료)
 *     - [activity.exam-dilemma] 잠자는 동안 낮에 공부한 내용이 정리된다는 일반 설명
 *     - [activity.caffeine-sort] 카페인은 졸음을 잠시 가릴 뿐 잠을 대신하지 못한다 / 짧은 낮잠은 도움이 될 수 있으나 길거나 늦은 낮잠은 밤잠을 방해할 수 있다 / 아침 햇빛·가벼운 스트레칭은 깨는 데 도움 / 자기 전 밝은 화면은 잠들기를 늦출 수 있다
 *     - [wrap.wind-timer] 잠들기 전 화면 끄기·내일 할 일 적기·천천히 숨 고르기 루틴(수면 위생 일반 안내)
 *     - 수면 시간 수치는 쓰지 않았다(체계도 source). 판의 시각은 가상 인물의 기록이고 '권장 시간'이 아니다.
 *   계획대로 못 한 것:
 *     - intro 의 levels(시계 2개/4개·자료 값 표시/숨김)는 도입이 시연 하나뿐이라 교사 진행 방식으로 적었다.
 *     - activity.plan-board: kitchen match 는 칸 하나에 카드 한 장이라 '요일 칸 × 여러 일정' 대신 요일마다 그날 저녁의 중심 블록 하나를 짝짓는다. 쉬움 = 3쌍, 기본·도전 = 5쌍, 시험 주간 변형은 모든 단계의 셋째 문항(도전은 함정 카드 더함).
 *     - activity.effect-web: 쉬움 '가지 2개'는 문항 1의 쉬움 판에서 가지를 집중·기분 둘로 줄였다.
 *     - wrap.wind-timer: 정리 질문은 단계별 판이 없어 '구간 2개/3개'는 교사 진행 방식이다(판은 세 구간).
 *
 *
 *   사람 확인(exercise-chronic): (근거 파일에 세부 없음 — 수업 전 질병관리청 국가건강정보포털·보건복지부 한국인을 위한 신체활동 지침서·국민건강보험공단 건강iN 에서 확인)
 *     - [intro.risk-body] 고혈압·당뇨 같은 만성질환이 심장·콩팥·뇌(혈관) 등에 부담을 줄 수 있다는 일반 설명
 *     - [intro.life-timeline · activity.risk-web] 만성질환은 오랜 생활 습관이 쌓여 위험이 커질 수 있고 청소년기 습관이 성인기로 이어지기 쉽다 / 식습관·움직임 부족·흡연·잠이 위험 요인, 나이·가족력은 바꿀 수 없는 요인
 *     - [activity.fitt-plan] 운동 계획의 빈도·강도·시간·종류(FITT) 틀, '말은 할 수 있지만 숨이 조금 찬 정도' 같은 강도 표현, 조금씩 늘려 가기
 *     - [activity.posture-timer] 오래 앉은 자세의 목·허리 부담과 스트레칭 동작(천천히·아프면 멈추기) — 보건교사·체육교사 시범으로 확인
 *     - [activity.risk-chart] 그래프 값은 예시 자료(실제 통계 아님) / 집단 자료로 한 사람의 위험을 단정할 수 없다
 *     - [wrap.body-dilemma] 끼니를 거르며 무리하게 운동할 때의 위험 신호(어지러움·쉬지 못함·지나친 집착)와 도움 요청 경로(보건실·상담실·보호자) — 국가건강정보포털·교육부 학생건강 자료
 *     - 운동 시간·체질량지수 등 수치는 쓰지 않았다(체계도 source — 교사가 최신 공식 지침 수치를 넣는다). 스트레칭 구간 초는 교실 실습용 우리 반 약속.
 *   계획대로 못 한 것:
 *     - intro.risk-body: body 교구 기관에 혈관·췌장이 없어 심장·콩팥·뇌·간으로 했다(췌장은 교사가 말로 덧붙인다). 도입은 시연 하나라 '기관 2개/3개'는 교사 진행 방식.
 *     - activity.fitt-plan: kitchen match 는 칸마다 카드 한 장이라 '요일 칸 × 여러 운동' 대신 요일마다 한 가지 운동 블록을 짝짓는다. 쉬움 3쌍·기본 5쌍, 점진적 증가는 셋째 문항(차례).
 *     - activity.posture-timer: '짝 자세 피드백'은 셋째 문항(짝 점검 selfCheck)이 모든 단계에 있고, 도전은 기준 하나를 더한다.
 *     - wrap.body-dilemma: 정리 질문에는 단계별 판이 없어 갈림길 두 번 판 하나로 하고, 쉬움 '선택 1번'은 교사가 첫 갈림길에서 함께 멈추는 방식으로 적었다.
 *
 *
 *   사람 확인(mental-helpseeking): (근거 파일에 세부 없음 — 모듈 id 와 확인할 공식 안내처)
 *     전체(MH_NOTE): 학교 위기관리 절차(상담교사·관리자 연계)와 위기 학생 연계 흐름 — 교육부 학생정신건강 자료(학생 자살 위기 대응 안내)
 *     전체: '[학교가 확인해 넣는 상담 전화]' 자리와 그 운영 시간, 급할 때의 긴급 신고 번호를 화면에 넣을지 — 보건복지부·여성가족부 청소년 상담 전화 안내(학교가 최신 번호를 확인)
 *     - [intro.barrier-feel · activity.myth-sort] 도움 요청을 막는 마음(창피함·두려움·귀찮음)과 편견 문장의 일반 설명 — 국립정신건강센터·보건복지부 정신건강 정보
 *     - [activity.myth-sort] '상담 기록이 진학에 불리하다'는 단정하지 않고 '상담 선생님께 직접 물어 확인할 것'으로 다뤘다 — 학교 상담실 운영 지침(교육부)
 *     - [activity.myth-sort] 정신건강 어려움은 누구에게나 생길 수 있고 도움을 받으면 나아질 수 있다 / 전문 진료는 약만 주는 곳이 아니다 — 국립정신건강센터
 *     - [intro.path-timeline · activity.route-map] 학교 상담실·청소년 상담 기관·지역 정신건강 기관·병원 정신건강의학과가 하는 일과 이어지는 차례(학교 상담은 진단·처방을 하지 않고 필요하면 전문가와 잇는다) — 교육부 학교 상담(Wee) 안내·보건복지부 정신건강복지센터 안내·여성가족부 청소년상담복지센터 안내
 *     - [activity.friend-dilemma · activity.script] 평소와 다른 말·행동은 위기 신호일 수 있고 걱정되면 직접 물어도 괜찮다, 생명과 관련된 비밀은 지키지 않고 어른과 잇는다 — 보건복지부·한국생명존중희망재단 생명지킴이 교육 안내
 *     - [wrap.self-care] 잠·움직임·연결·쉼이 마음 관리에 도움이 된다는 일반 설명 — 국립정신건강센터 마음건강 정보
 *   계획대로 못 한 것:
 *     - intro 의 levels(마음 2개/3개·단계 3개/4개)는 도입이 시연 하나뿐이라 교사 진행 방식으로 적었다.
 *     - activity.route-map: map 은 문항마다 핀 하나라 '핀 2개/3개'는 쉬움 = 핀 이름이 바로 보임(readout), 기본 = 이름 없이, 도전 = 밤 시간 문항에서 연결하는 말 고르기를 더함으로 바꿨다. 범례 문항은 모든 단계에 있다.
 *     - activity.myth-sort: 계획의 '편견·사실' 두 칸에 '직접 물어 확인할 것' 칸을 더했다(상담 기록 공개 범위는 근거가 없어 단정하지 않음).
 *     - activity.script: '대본 4줄/5줄'은 문장 수 범위(쉬움 문장 틀, 도전 기준 하나 더)로 했다. 채점은 기준표 자기 점검이다.
 *     - wrap.self-care·wrap.pledge: 정리 질문은 단계별 판이 없어 '항목 2개/4개'·'문구 제공/직접'은 교사 진행 방식이다.
 *     - 겹침: 생명존중 life/h.js 의 resource-access(동네 마음건강 자원 지도)·crisis-connect·stigma-campaign 과 인물·장면을 되풀이하지 않았다(인물 유진·태민, 동아리 공연 단체방·방학·밤 장면).
 *
 *
 *   사람 확인(alcohol-tobacco-policy):
 *     - [intro.sign-body · activity.help-dilemma · activity.help-order] 급성 알코올 중독 때 살필 신호(불러도 반응 없음·숨이 느리거나 고르지 않음·피부가 차갑고 창백함)와
 *         '깨워도 반응이 없으면 119, 토할 수 있으니 옆으로 눕히고 혼자 두지 않는다, 찬물·커피·샤워로 술이 깨지 않는다' → 질병관리청 국가건강정보포털·소방청 응급처치 안내·한국건강증진개발원
 *     - [activity.help-dilemma 셋째 문항] 부르면 또렷이 대답하고 숨이 고르면 곁에서 지켜보고, 반응이 흐려지면 119 — 헷갈리면 119 에 묻는다 → 소방청·질병관리청
 *     - [activity.help-order] 신고할 때 위치를 먼저, 그다음 상황과 숨 상태를 말하고 상황실 안내를 따른다 → 소방청 119 신고 안내
 *     - [intro.ad-story · activity.policy-chart · activity.debate · wrap.policy-sort] 담배·주류 규제 정책의 종류(광고 제한·경고 그림·가격 정책·금연 구역·판매 제한·금연 상담 지원)와 목적 일반 설명
 *         → 보건복지부·한국건강증진개발원(국가금연지원센터) 안내. 판매 연령·광고 시간대 같은 법 수치·조문은 쓰지 않았다
 *     - [wrap.proposal] 보건소에서 금연 상담을 받을 수 있다는 일반 설명 → 지역 보건소·보건복지부
 *   계획대로 못 한 것:
 *     - activity.help-order: 계획 차례는 '혼자 두지 않기 → 의식·호흡 확인 → 옆으로 눕히기 → 119 신고'인데, saf-drug/h.js·saf-firstaid/h.js 문구('반응이 없으면 119')와 맞춰
 *         '곁에 머물기 → 반응·숨 확인 → 사람을 콕 집어 119 부탁 → 옆으로 눕혀 지켜보기'로 놓았다(119 를 늦추지 않게). 순서는 사람 확인.
 *     - intro 의 levels(신호 2·3개, 장면 3·4장)는 교사 진행 방식이다(도입 시연은 하나뿐).
 *     - wrap.policy-sort·wrap.proposal: 출구 질문에는 단계별 판이 없어 '칸 2개/3개·항목 2/3개'는 교사 진행 방식으로 적었다.
 *     - 청소년 음주 장면은 쓰지 않고, 가족 행사에서 술을 마신 성인 사촌을 돕는 장면으로 했다(saf-drug 졸업 여행 장면과 겹치지 않게).
 *
 *
 *   사람 확인(evidence-literacy):
 *     - [activity.level-order · wrap.level-web · wrap.guide-card] 근거 수준의 일반 위계(체험담·전문가 한 명 의견 < 관찰 연구 < 무작위 실험 < 체계적 검토)와
 *         '관찰 연구는 관계를, 잘 설계된 실험은 원인을 더 잘 따질 수 있다'는 설명 → 질병관리청 국가건강정보포털·한국보건의료연구원(근거 중심 보건의료 안내)
 *     - [activity.article-check · activity.review-write] 기사 점검 항목(연구 대상·규모·연구비를 낸 곳·다른 연구와 일치)과 '사람이 아닌 동물·세포 연구는 사람에게 바로 옮기지 않는다'
 *         → 한국보건의료연구원·식품의약품안전처(건강기능식품 표시·광고 안내)
 *     - [activity.share-dilemma 셋째 문항] 처방약을 줄이거나 끊는 일은 처방한 의사·약사와 먼저 상의한다 → 식품의약품안전처 의약품 안전 사용 안내·대한약사회
 *     - [activity.share-dilemma] 근거 없는 건강 정보를 바로잡을 때 공공기관 안내를 출처로 함께 보낸다 → 질병관리청·식품의약품안전처 안내 누리집
 *     기사·제목·연구는 모두 가상이고, 실제 식품·질병 효과를 단정하지 않는다(장면 속 주장은 '근거 없는 주장'으로만 다룬다).
 *   계획대로 못 한 것:
 *     - intro.claim-feel: 도입 시연은 제목 하나만 보인다. '제목 2·3개'와 '끝에 다시 보기'는 교사가 칠판 제목으로 진행하고, 끝 다시 보기는 정리 모듈 출구 질문(신뢰도 다시 고르기)에 넣었다(wrap.level-web).
 *     - intro.corr-chart: 교구 그래프는 한 계열만 그려 '함께 늘어나는 두 값'을 가로축(헬스장 수)·세로축(건강 점수) 한 그래프로 나타냈다.
 *     - activity.level-order: sortboard 바구니는 2~4칸이라 다섯 근거를 '약함·중간·강함' 세 칸으로 나누고, 칸 안의 순서는 활동지 표로 옮겼다.
 *     - wrap.guide-card: collage 는 글을 쓰지 못해 질문 세 개를 조각(별·동그라미·네모) 자리로 나타내고 글은 활동지 카드 칸에 쓴다.
 *
 *
 *   사람 확인(care-system):
 *     - [intro.route-timeline · activity.case-sort] 1차 의료(동네 의원)에서 먼저 보고 필요하면 큰 병원·전문 진료로 의뢰하며, 회복 뒤 다시 동네 의원에서 관리한다는 일반 흐름
 *         → 보건복지부·국민건강보험공단(의료 이용 안내)·건강보험심사평가원
 *     - [intro.facility-map · activity.case-sort · activity.cost] 보건소가 하는 일(예방접종·금연 상담·건강 상담·검진 안내 등)과 공공 지원 안내처 → 지역 보건소·보건복지부·국민건강보험공단 건강검진 안내
 *     - [activity.case-sort · activity.er-dilemma] 바로 119·응급실이 필요한 신호의 일반 예(숨쉬기 힘듦·가슴을 쥐어짜는 통증·갑자기 말이 어눌함·한쪽 팔다리 힘 빠짐·의식을 잃음·멈추지 않는 출혈·점점 심해지거나 옮겨 가는 복통)
 *         → 중앙응급의료센터(응급의료포털)·소방청
 *     - [activity.er-dilemma] 응급실은 위급한 환자부터 진료하고, 판단이 어려울 때 의료 상담 전화로 물을 수 있다는 설명, '[학교가 확인해 넣는 의료 상담 전화]' 자리 → 중앙응급의료센터·보건복지부 상담 안내
 *     - [activity.cost] 금액은 모두 예시 금액(실제 수가 아님). 실제 본인 부담·지원 대상은 쓰지 않았다 → 건강보험심사평가원·국민건강보험공단·지역 보건소
 *   계획대로 못 한 것:
 *     - intro 의 levels(단계 3·5개, 핀 2·4개, 응급 경로·내 집 경로)는 교사 진행 방식이다(도입 시연은 하나뿐). 내 집 경로는 걷지 않는 활동지 '혼자 보기' 칸으로만 둔다(사는 곳을 묻지 않게).
 *     - intro.facility-map: 시연은 범례(legend) 채우기 하나로 하고, '핀 놓기'는 교사가 칠판 지도에서 짚는다.
 *     - activity.case-sort: sortboard 바구니는 문항마다 하나의 판이라 '칸 2개'는 쉬움 단계에서 바구니를 둘(동네 의원·응급실)로 줄인 판으로 했다. '애매한 사례 토의'는 도전 단계의 헷갈리는 카드와 활동지로.
 *     - activity.cost: economy 는 예산 안에서 항목을 고르는 판이라 '비용 비교'는 같은 예산으로 예방 항목과 응급 진료를 고르는 두 문항으로, '공공 지원 찾기'는 고르기 문항으로 했다.
 *     - activity.promo-plan: kitchen match 는 칸마다 카드 한 장이라 분기 칸과 목표 카드를 짝짓고(쉬움 2칸·기본 4칸), 점검 지표는 목표↔지표 짝 문항으로 했다.
 *     - wrap.plan-write·wrap.first-step: 출구 질문에는 단계별 판이 없어 문장 수·항목 수 차이는 교사 진행과 쉬운 활동지로 두었다.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'health', band: '고', topic: `health.h.${topic}`, grades }, o, { id: `health.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(카드 판 sort — mindmap·story·timeline·kitchen·economy·emotion): groups = 칸마다 카드 글 목록(글 = 카드 id). 쉬움 = 칸마다 앞 k장, 도전 = hard(칸마다 더할 카드). traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 분류판(sortboard 글 카드 모드 — 선반 위 종이 바구니): SORTQ 와 같은 꼴, mode 없음. 쉬움 = 칸마다 앞 k장 + 바로 피드백·장 수, 도전 = hard 카드 더하기
  const BOARDQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg), instant: true, showCount: true }, target: tgt(eg) };
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
  // 갈림길(dilemma): 나무를 n 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  // 세 번 갈리는 나무: 쉬움 = 갈림길 2번, 기본 = 나무 전체(3번), 도전 = 나무 전체 + 서로 다른 끝 길 2개 이상 가 보기. 근거 카드는 모든 단계에서 고른다
  const DIL3 = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const it = { prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: at(3), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
        challenge: { prompt: pfx(prompt, '다른 끝 길도 하나 더'), target: Object.assign(at(3), { explore: 2 }) } } };
    return Object.assign(it, more);
  };
  // 갈림길 1·2·3번(계획이 '선택 1번/2번/3번'일 때): 쉬움 = 1번, 기본 = 2번, 도전 = 3번(나무 전체)
  const DIL123 = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    return Object.assign({ prompt, toolOptions: Object.assign({ scene: cut(scene, 2), reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) },
        challenge: { prompt: pfx(prompt, '갈림길 셋'), toolOptions: { scene }, target: at(3) } } }, more);
  };
  // 갈림길 두 번짜리 짧은 장면: 쉬움 = 갈림길 1번, 기본·도전 = 2번
  const DIL2 = (prompt, scene, paths, reasons, good, { d = 0.35, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    return Object.assign({ prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } }, more);
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
  // 마음 크기(emotion scale) 출구 질문 — 내 생각을 돌아보는 것이라 어느 크기든 맞음
  const SCALE = (prompt, situation, feeling, labels, ask) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: labels, ask }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  // 문항 꼴(prompt·toolOptions·target)을 출구 질문 꼴로 — 출구에는 단계별 판이 없어 levels 를 버린다
  const EXIT = (tool, it) => { const { toolOptions, levels, ...rest } = it; return Object.assign({ type: 'tool', tool, options: toolOptions }, rest); };
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];
  /* 사람 확인(inequity):
   *   - [inequity 전체] 건강 격차가 소득·주거·교육·의료 접근성 같은 사회적 결정 요인과 관련된다는 일반 설명 → 보건복지부·한국건강증진개발원(건강형평성 자료), 질병관리청 지역사회건강조사 안내
   *   - [inequity.activity.policy-dilemma] 보건소·보건 분소·이동 검진 같은 지역 보건 사업의 이름과 쓰임(일반 설명) → 보건복지부 지역보건 안내·지역 보건소
   *   - [inequity.activity.access-map] 대중교통·운영 시간이 의료 이용에 영향을 준다는 설명 → 보건복지부·지역 보건소
   *   계획대로 못 한 것:
   *   - intro.two-towns·intro.gap-chart: 도입은 시연 하나뿐이라 levels(장면 3장/4장, 값 표시/숨김)는 교사 진행 방식으로 적었다. 거리 자료는 시연 그래프에 넣지 않고(단위가 달라 한 그래프에 섞지 않음) 교사가 말로 보탠다.
   *   - activity.cause-web: mindmap 은 원인끼리 연결선을 긋지 못해 '원인 → 이어지는 결과' 짝 맞추기 문항으로 바꿨다.
   *   - activity.access-map: map 은 경로를 그리지 못해 '핀 꽂기 + 걸리는 길 보기 고르기'로 했다. 경로 1개/2개는 쉬움 = 이름 보이기, 기본 = 두 동네 문항, 도전 = 개선 위치 보기 고르기를 더했다.
   *   - wrap.*: 출구 질문에는 단계별 판이 없어 levels 는 교사 진행 방식이다(쉬움은 활동지 문장 틀).
   */
  // ======================================================================================================
  // 1. 건강 격차의 원인 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('inequity', [10, 11, 12]);
    // 두 동네 비교(예시 자료, 실제 통계 아님)
    const FAC = [['가람동 운동 시설', 8], ['나루동 운동 시설', 2], ['가람동 의원', 6], ['나루동 의원', 1]];
    const TOWN = { title: '가상 도시의 두 동네', grid: [6, 4], places: [
      { name: '가람동 주택가', icon: 'apartment', at: [0, 0] }, { name: '가람동 의원', icon: 'hospital', at: [1, 0] }, { name: '가람동 공원', icon: 'park', at: [2, 1] },
      { name: '나루동 주택가', icon: 'house', at: [5, 3] }, { name: '나루동 버스 정류장', icon: 'bus', at: [4, 3] }, { name: '도시 종합병원', icon: 'hospital', at: [2, 3] }, { name: '구 보건소', icon: 'office', at: [3, 0] }, { name: '나루동 공장', icon: 'factory', at: [5, 1] }] };
    const BUDGET = { text: '가상 도시 ○구의 보건 예산 회의. 한 해 예산으로 가람동 체육관 신축·나루동 보건 분소·이동 검진 버스 가운데 하나를 고른다. 자료에 나루동은 의원까지 멀고 교대 근무자와 노인이 많다.', who: '구 주민 회의', motif: 'house', choices: [
      { id: 'gym', text: '가람동에 새 체육관을 짓는다', result: '가람동 주민의 운동 시설 이용이 늘어난다.', impact: [{ who: '가람동 주민', text: '운동할 곳이 하나 더 생긴다', tone: 1 }, { who: '나루동 주민', text: '의원까지 먼 문제는 그대로다', tone: -1 }], ending: '이미 시설이 많은 곳에 더 얹으면 격차는 오히려 벌어질 수 있다.' },
      { id: 'branch', text: '나루동에 보건 분소를 연다', result: '나루동 안에서 혈압 재기·상담을 받을 수 있게 된다.', impact: [{ who: '나루동 노인', text: '걸어서 갈 곳이 생긴다', tone: 1 }],
        next: { text: '분소가 열렸지만 낮에만 문을 열어 교대 근무자는 오기 어렵다는 의견이 모였다.', choices: [
          { id: 'evening', text: '주 2회 저녁 운영을 넣자고 제안한다', result: '퇴근길에 들르는 주민이 늘어난다.', impact: [{ who: '교대 근무자', text: '이용할 시간이 생긴다', tone: 1 }],
            next: { text: '다음 해 예산 회의. 저녁 운영에 인력 비용이 더 든다며 줄이자는 말이 나왔다.', choices: [
              { id: 'measure', text: '이용 자료를 모아 효과를 보고 정하자고 한다', result: '저녁 이용자 수와 상담 내용을 정리해 회의에 낸다.', impact: [{ who: '구 주민 회의', text: '근거로 예산을 정한다', tone: 1 }], ending: '정책은 만든 뒤에도 자료로 효과를 확인해야 이어진다.' },
              { id: 'cutnow', text: '자료 없이 바로 줄인다', result: '저녁 운영이 없어지고 이용자가 다시 줄어든다.', impact: [{ who: '교대 근무자', text: '다시 이용하기 어렵다', tone: -1 }], ending: '효과를 재지 않고 줄이면 무엇을 잃었는지도 모른다.' }] } },
          { id: 'same', text: '운영 시간은 그대로 둔다', result: '낮에 시간이 되는 주민만 이용한다.', impact: [{ who: '교대 근무자', text: '여전히 이용하기 어렵다', tone: -1 }], ending: '시설이 생겨도 이용할 수 있는 시간이 맞아야 접근성이 된다.' }] } },
      { id: 'bus', text: '이동 검진 버스를 돌린다', result: '한 달에 한 번 버스가 나루동에 와서 검진을 한다.', impact: [{ who: '나루동 주민', text: '가까이서 검진을 받는다', tone: 1 }],
        next: { text: '검진에서 더 살펴봐야 한다는 결과를 받은 주민이 다음 진료를 어디서 받을지 막막해한다.', choices: [
          { id: 'link', text: '가까운 의원 진료로 이어 주는 안내를 만든다', result: '검진 결과지에 이어 갈 곳이 적힌다.', impact: [{ who: '나루동 주민', text: '다음 단계가 보인다', tone: 1 }],
            next: { text: '안내문을 만들었는데 글이 어려워 읽기 힘들다는 주민이 있다.', choices: [
              { id: 'plain', text: '쉬운 말 안내와 전화 안내를 더한다', result: '안내를 이해하고 진료를 예약하는 주민이 늘어난다.', impact: [{ who: '나루동 주민', text: '정보를 쓸 수 있게 된다', tone: 1 }], ending: '정보도 누구나 읽을 수 있어야 접근성이 된다.' },
              { id: 'asis', text: '안내문은 이미 있으니 그대로 둔다', result: '안내문을 받아도 진료로 이어지지 않는 주민이 남는다.', impact: [{ who: '나루동 주민', text: '정보가 있어도 쓰지 못한다', tone: -1 }], ending: '읽을 수 없는 안내는 없는 안내와 비슷하다.' }] } },
          { id: 'only', text: '검진만 하고 다음은 각자 알아서 하게 둔다', result: '결과를 받고도 진료를 미루는 주민이 많다.', impact: [{ who: '나루동 주민', text: '검진이 진료로 이어지지 않는다', tone: -1 }], ending: '검진은 다음 진료와 이어질 때 힘을 낸다.' }] } }] };
    const BUDGET_R = [{ id: 'need', text: '필요가 큰 곳에 먼저 쓰는 것이 형평성이다' }, { id: 'access', text: '거리·시간·정보까지 이용할 수 있어야 한다' }, { id: 'equal', text: '모두에게 똑같이 나누면 언제나 공평하다', why: '처지가 다르면 똑같이 나눠도 격차가 남을 수 있어요.' }, { id: 'effort', text: '건강은 개인 노력 문제라 예산은 필요 없다', why: '개인 노력만으로 바꾸기 어려운 조건(거리·시간·소득)이 있어요.' }];

    MODS.push(
      M({
        id: 'intro.two-towns', type: 'intro', title: '두 동네 주민의 하루 견주기',
        method: '두 동네 사례 비교', tool: 'story', minutes: 7,
        levels: { easy: '교사가 동네마다 장면 3장(운동·식사·병원 가기)만 함께 읽으며 나눈다.', base: '동네마다 장면 4장을 나누고 가장 큰 차이 하나를 말한다.', challenge: '차이가 생긴 까닭을 가설 한 문장으로 칠판에 적는다(개인 탓/환경 탓 구분).' },
        intro: {
          teacher: '"두 동네는 가상의 도시에 있어요. 주민의 하루 장면을 동네별로 나눠 보면 무엇이 달라 보이나요?" 시연 단추로 장면이 두 칸에 나뉘는 모습을 보여 주고 두세 명에게 차이를 말하게 한다. "나루동 사람들은 운동을 안 하니까 그렇지"라는 말이 나오면 "공원이 멀고 밤늦게 퇴근하는 사람에게 운동은 얼마나 쉬운 선택일까요?"라고 되묻는다. 오늘은 건강의 차이가 어디서 생기는지 원인을 따져 본다고 밝힌다. 우리 동네나 우리 집 형편을 말하게 하지 않는다.',
          student: '가상의 두 동네 주민 장면을 가람동·나루동으로 나누고, 두 동네의 하루가 어떻게 다른지 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'sort', title: '두 동네의 하루(가상)', slots: ['가람동', '나루동'], cards: [
            { id: 'g1', text: '집 앞 공원에서 저녁 산책', motif: 'tree' }, { id: 'n1', text: '밤 10시 퇴근, 공원은 버스로 30분', motif: 'moon' },
            { id: 'g2', text: '걸어서 5분 거리 의원', motif: 'house' }, { id: 'n2', text: '의원까지 버스 두 번 갈아타기', motif: 'cloud' },
            { id: 'g3', text: '동네 시장에 채소 가게 여럿', motif: 'flower' }, { id: 'n3', text: '가까운 곳은 편의점 하나', motif: 'star' }] },
            sequence: [{ sort: { 가람동: ['g1', 'g2', 'g3'], 나루동: ['n1', 'n2', 'n3'] } }] },
          art: { draw: 'two paper neighborhoods side by side, one with a park, a clinic and green market stalls, the other with a factory, a far-away bus stop and a lone convenience store under a night sky', banner: '두 동네의 하루는 왜 다를까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '두 동네·주민은 가상이다. 실제 지역 이름을 쓰지 않고, 학생의 거주지·가정 형편을 묻거나 견주게 하지 않는다.',
      }),
      M({
        id: 'intro.gap-chart', type: 'intro', title: '예시 자료로 두 동네 차이 읽기',
        method: '예시 자료로 지역 차이 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '막대 끝 값을 보이게 하고 가장 작은 막대부터 함께 읽는다.', base: '값 표시 없이 막대 길이로 두 동네를 견준다.', challenge: '이 자료가 말하지 않는 것(주민의 소득·운영 시간 등)을 하나 골라 말한다.' },
        intro: {
          teacher: '"예시 자료예요. 실제 통계가 아니라 수업을 위해 만든 숫자예요. 두 동네의 운동 시설과 의원 수를 견주면 무엇이 보이나요?" 시연 단추로 가장 짧은 막대를 고르는 모습을 보인 뒤, 나루동에서 도시 종합병원까지는 버스로 40분이 걸린다는 설정을 말로 보탠다. "시설이 적으니 나루동 사람이 덜 건강한 건 당연하다"는 말이 나오면 "이 그래프에 사람들의 건강 상태가 나와 있나요?"라고 되묻는다. 자료가 보여 주는 것과 보여 주지 않는 것을 나눠 읽자고 한다.',
          student: '예시 자료 막대그래프에서 두 동네의 운동 시설과 의원 수를 견주고, 가장 적은 것을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '두 동네 시설 수(예시 자료, 실제 통계 아님)', unit: '곳', yLabel: '시설 수', xLabel: '동네·시설', data: FAC, question: '가장 짧은 막대는?', choices: FAC.map((x) => x[0]), showValues: true }, sequence: [{ pick: 3 }] },
          art: { draw: 'paper bar chart blocks shaped like gym buildings and small clinics, tall ones on the left neighborhood and short ones on the right, a magnifying glass over the short bars', banner: '자료가 말하는 것, 말하지 않는 것', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.cause-web', type: 'activity', title: '건강 격차 원인 가지 잇기',
        method: '격차 원인 계통도', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(소득·의료 접근)에 사례 카드를 놓는다.', base: '가지 4개(소득·주거와 환경·교육과 정보·의료 접근)에 사례 카드 8장을 나누고, 원인이 이어지는 결과를 짝짓는다.', challenge: '사례 카드가 더해지고, 정책으로 가장 바꾸기 쉬운 고리를 고른다.' },
        activity: {
          title: '건강 격차 원인 가지', tool: 'mindmap',
          teacher: '"\'건강 격차\'라는 결과 하나에 원인은 여러 가지예요. 나루동 사례 카드를 원인 가지에 붙여 봐요." 카드를 놓을 때마다 "이 사람이 혼자 노력해서 바꿀 수 있는 일인가요?"라고 묻는다. "결국 운동 안 하고 아무거나 먹는 개인 탓"이라는 학생에게 \'밤 10시 퇴근\' 카드를 가리키며 "이 조건에서 운동과 장보기는 얼마나 쉬운 선택일까요?"라고 되묻는다. 원인은 서로 이어져 있어 하나만 고쳐도 다른 고리가 풀릴 수 있다는 점을 짚는다.',
          task: '건강 격차 사례를 원인 가지에 나누고, 원인이 어떤 결과로 이어지는지 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            Object.assign(SORTQ('나루동 사례 카드를 건강 격차의 원인 가지에 나누세요.', ['소득', '주거·환경', '교육·정보', '의료 접근'], [
              ['병원비가 걱정돼 진료를 미룬다', '교대 근무라 쉬는 날이 들쭉날쭉하다'],
              ['집 근처에 공원·운동 시설이 없다', '공장 가까이라 공기가 탁한 날이 많다'],
              ['건강 안내문이 어려운 말로만 되어 있다', '검진을 언제 받는지 알려 주는 곳이 없다'],
              ['의원까지 버스를 두 번 갈아탄다', '의원이 저녁에 문을 닫는다'],
            ], { k: 2, hard: [['아픈 날 쉬면 일당이 줄어든다'], ['가까운 곳에 신선한 채소 가게가 없다'], ['인터넷 예약을 쓰기 어렵다'], ['가까운 약국이 일찍 닫는다']], d: 0.3, opt: { topic: '건강 격차' } }),
              { levels: { easy: { prompt: '사례 카드를 소득·의료 접근 두 가지에 나누세요(카드 4장).', toolOptions: { slots: ['소득', '의료 접근'], cards: ['병원비가 걱정돼 진료를 미룬다', '의원까지 버스를 두 번 갈아탄다', '교대 근무라 쉬는 날이 들쭉날쭉하다', '의원이 저녁에 문을 닫는다'] }, target: { sort: { 소득: ['병원비가 걱정돼 진료를 미룬다', '교대 근무라 쉬는 날이 들쭉날쭉하다'], '의료 접근': ['의원까지 버스를 두 번 갈아탄다', '의원이 저녁에 문을 닫는다'] } } },
                challenge: { prompt: '사례 카드를 건강 격차의 원인 가지에 나누세요(카드 12장).', toolOptions: { cards: ['병원비가 걱정돼 진료를 미룬다', '집 근처에 공원·운동 시설이 없다', '건강 안내문이 어려운 말로만 되어 있다', '의원까지 버스를 두 번 갈아탄다', '교대 근무라 쉬는 날이 들쭉날쭉하다', '공장 가까이라 공기가 탁한 날이 많다', '검진을 언제 받는지 알려 주는 곳이 없다', '의원이 저녁에 문을 닫는다', '아픈 날 쉬면 일당이 줄어든다', '가까운 곳에 신선한 채소 가게가 없다', '인터넷 예약을 쓰기 어렵다', '가까운 약국이 일찍 닫는다'] },
                  target: { sort: { 소득: ['병원비가 걱정돼 진료를 미룬다', '교대 근무라 쉬는 날이 들쭉날쭉하다', '아픈 날 쉬면 일당이 줄어든다'], '주거·환경': ['집 근처에 공원·운동 시설이 없다', '공장 가까이라 공기가 탁한 날이 많다', '가까운 곳에 신선한 채소 가게가 없다'], '교육·정보': ['건강 안내문이 어려운 말로만 되어 있다', '검진을 언제 받는지 알려 주는 곳이 없다', '인터넷 예약을 쓰기 어렵다'], '의료 접근': ['의원까지 버스를 두 번 갈아탄다', '의원이 저녁에 문을 닫는다', '가까운 약국이 일찍 닫는다'] } } } } }),
            MATCHQ('원인 가지마다 그 원인이 이어지는 결과를 짝지으세요.', [['소득', '아파도 일을 쉬지 못해 진료가 늦어진다'], ['주거·환경', '걷거나 운동할 기회가 줄어든다'], ['교육·정보', '검진 시기를 놓친다'], ['의료 접근', '작은 증상을 키운 뒤에야 병원에 간다']], { k: 2, extra: ['게을러서 병이 생긴다'], d: 0.35, opt: { topic: '원인이 이어지는 결과' } }),
            PICKQ('구청 정책으로 바꿀 수 있는 고리만 고르세요.', ['의원이 저녁에 문을 닫는다', '건강 안내문이 어려운 말로만 되어 있다', '집 근처에 공원·운동 시설이 없다'], ['주민이 운동을 싫어한다', '나이가 많은 주민이 있다'], { d: 0.4, opt: { basket: '정책으로 바꿀 고리' }, more: { conclude: '운영 시간·안내문·시설처럼 환경의 고리는 정책으로 바꿀 수 있어요. 건강 격차를 개인 탓으로만 보면 이 고리가 보이지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '나루동 사례에서 가장 먼저 바꾸고 싶은 고리 하나와, 그것이 풀리면 이어서 달라질 결과를 쓰세요.' }] },
        notes: 'mindmap 은 원인끼리 연결선을 그리지 못해 원인→결과 짝 문항으로 바꿨다. 학생 가정·동네 형편을 사례로 쓰지 않는다.',
      }),
      M({
        id: 'activity.policy-dilemma', type: 'activity', title: '구청 보건 예산 갈림길',
        method: '한정된 예산 배분 토론', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길(어디에 쓸지)만 고르고 근거 카드를 고른다.', base: '두 번째 갈림길(운영 시간·다음 진료 연결)까지 결과를 따라가고 근거 카드를 고른다.', challenge: '세 번째 갈림길(효과 확인·안내 방식)까지 가 보고, 다른 길을 끝까지 가 본 뒤 찬반 근거를 견준다.' },
        activity: {
          title: '한정된 예산, 어디에 쓸까', tool: 'dilemma',
          teacher: '"예산은 하나뿐이에요. 체육관·보건 분소·검진 버스 모두 좋은 사업인데, 누구에게 가장 필요할까요?" 첫 장면에서 손을 들어 세 선택에 표시하게 한 뒤 갈림길을 끝까지 따라가게 한다. "모든 동네에 똑같이 나누는 게 공평하다"는 학생에게 "이미 시설이 많은 곳과 거의 없는 곳에 똑같이 더하면 차이는 어떻게 될까요?"라고 묻는다. 좋은 정책도 이용할 수 있는 시간과 안내가 맞아야 효과가 난다는 점을 짚는다.',
          task: '구 주민 회의의 선택을 끝까지 따라가 결과를 보고, 예산 배분의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL123('구 주민 회의가 되어 나루동의 격차를 줄이는 길을 고르고, 근거 카드를 고르세요.', BUDGET, [['branch', 'evening', 'measure'], ['bus', 'link', 'plain']], BUDGET_R, ['need', 'access'], { d: 0.4, opt: { title: '구 보건 예산 회의(가상)' } }),
            EXPLOREQ('예산 장면에서 \'체육관\'으로 시작한 길과 \'보건 분소\'로 시작한 길을 끝까지 가 보고 견주세요.', BUDGET, BUDGET_R, ['두 길의 끝 장면을 모두 보았다', '두 길에서 나루동 주민에게 생긴 일을 견주었다', '체육관을 고른 쪽의 좋은 점도 하나 찾았다'], { d: 0.35 }),
            EXPLOREQ('예산 장면에서 \'보건 분소\' 길과 \'검진 버스\' 길을 끝까지 가 보고, 두 사업이 각각 무엇을 더 해야 효과가 나는지 견주세요.', BUDGET, BUDGET_R, ['두 길의 끝 장면을 모두 보았다', '분소 길에서 운영 시간이 왜 중요한지 찾았다', '버스 길에서 다음 진료 연결이 왜 중요한지 찾았다'], { d: 0.4, more: { conclude: '시설을 짓는 것에서 끝나지 않고, 시간·연결·쉬운 안내까지 맞춰야 필요한 사람에게 닿아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 사업과 반대쪽 사업의 가장 강한 근거를 하나씩 쓰고, 내 선택의 약점 하나를 쓰세요.' }] },
        notes: '예산·사업은 가상이다. 실제 지자체·정치인 이름을 쓰지 않는다.',
      }),
      M({
        id: 'activity.access-map', type: 'activity', title: '의료 접근성 지도 읽기',
        method: '의료 접근성 지도 분석', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 칸 이름이 바로 보이는 지도에서 가람동 주민이 갈 곳을 찾는다.', base: '나루동 주민이 갈 곳까지 핀을 꽂고, 걸리는 길 보기를 골라 두 동네를 견준다.', challenge: '나루동 주민을 위해 새 시설을 둘 자리 보기를 고르는 문항이 더해진다.' },
        activity: {
          title: '두 동네에서 의원까지', tool: 'map',
          teacher: '"지도에서 두 동네 주민이 아플 때 갈 곳을 찾아 봐요. 핀을 꽂은 뒤에는 그곳까지 가는 길이 얼마나 쉬운지도 따져 봐요." 문항마다 "걸어서 갈 수 있나요, 버스를 타야 하나요?"라고 묻는다. "병원이 많아지면 격차는 저절로 없어진다"는 학생에게 "가람동에 병원이 하나 더 생기면 나루동 주민의 길은 짧아질까요?"라고 되묻는다. 접근성은 시설의 수가 아니라 거리·시간·교통이 함께 정한다는 점을 짚는다.',
          task: '가상 도시 지도에서 주민이 갈 의료 시설에 핀을 꽂고, 그곳까지 가는 길을 견주어요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가람동 주택가에 사는 주민이 감기 기운으로 가장 가까이 갈 수 있는 의료 시설에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '가람동 의원' }, difficulty: 0.15 },
            { prompt: '나루동 주택가에 사는 주민이 진료를 받으려고 가는 의료 시설에 핀을 꽂으세요(나루동에는 의원이 없어요).', toolOptions: TOWN, target: { place: '도시 종합병원' }, difficulty: 0.25 },
            { prompt: '나루동 주민이 종합병원까지 가는 길을 따져 보세요. 길을 시작하는 곳에 핀을 꽂고 알맞은 설명을 고르세요.', toolOptions: Object.assign({}, TOWN, { ask: { q: '나루동에서 종합병원까지 가는 길은?', choices: ['정류장까지 걸어서 버스로 여러 칸을 간다', '집 바로 옆이라 걸어서 금방 간다', '가람동 의원을 지나 걸어간다'], why: ['', '지도에서 두 곳은 멀리 떨어져 있어요.', '가람동 의원은 반대쪽 끝에 있어요.'] } }), target: { place: '나루동 버스 정류장', pick: 0 }, difficulty: 0.35,
              levels: { challenge: { prompt: '나루동 주민의 길을 줄이려면 새 보건 시설을 어디에 두면 좋을지 따져 보세요. 정류장에 핀을 꽂고 알맞은 자리 보기를 고르세요.', toolOptions: { ask: { q: '새 보건 시설을 둘 자리로 알맞은 것은?', choices: ['나루동 주택가와 정류장 가까이', '가람동 공원 옆', '도시 종합병원 바로 옆'], why: ['', '가람동에는 이미 의원이 있어요.', '나루동에서 먼 곳이라 길이 줄지 않아요.'] } }, target: { place: '나루동 버스 정류장', pick: 0 } } },
              conclude: '시설이 몇 개인지보다, 필요한 사람이 얼마나 쉽게 닿을 수 있는지가 접근성이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 동네 주민이 의료 시설까지 가는 길을 견주어 쓰세요.', columns: ['', '가람동', '나루동'], cells: [['가는 곳', '', ''], ['가는 방법', '', ''], ['어려운 점', '', '']] }] },
        notes: '지도는 가상이다. map 교구는 경로 선을 그리지 못해 핀 + 보기 고르기로 길을 견주게 했다. 학생의 집 위치를 표시하게 하지 않는다.',
      }),

      M({
        id: 'wrap.proposal', type: 'wrap', title: '건강 형평성 제안 요약',
        method: '건강 형평성 제안서 요약', tool: 'rubric-writing', minutes: 10,
        levels: { easy: '활동지의 문장 틀을 보고 세 문장(원인·대상·방법)으로 쓴다.', base: '네 문장(원인·대상·방법·예상 효과)을 쓰고 기준표 네 항목을 점검한다.', challenge: '네 문장에 예상 반론과 대응 한 문장을 더해 활동지에 쓴다.' },
        wrap: {
          teacher: '"나루동의 격차 하나를 골라 구청에 낼 제안을 네 문장으로 요약해 봐요. 원인·대상·방법·예상 효과가 다 들어가야 해요." 쓰기 전에 기준표를 함께 읽는다. "주민들이 더 노력하게 캠페인을 한다"만 쓴 학생에게 "그 캠페인이 밤 10시 퇴근이라는 조건을 바꿀 수 있을까요?"라고 묻는다. 제안은 누구에게 어떻게 닿는지가 구체적이어야 한다는 점을 짚는다.',
          exitTicket: [
            EXIT('rubric-writing', RWQ('건강 격차 하나를 줄이는 제안을 쓰고 기준표로 점검하세요.', '나루동의 건강 격차 하나를 줄이는 제안을 네 문장으로 쓰세요(원인·대상·방법·예상 효과).', ['격차의 원인을 하나 짚었다', '도움이 닿을 대상을 밝혔다', '구체적인 방법을 썼다', '예상 효과를 썼다'], { min: 60, max: 400, sent: [3, 6], sample: '나루동 주민은 의원이 멀고 저녁에 문을 닫아 진료가 늦어진다. 교대 근무자와 노인을 대상으로 한다. 보건 분소를 열고 주 2회 저녁 운영을 한다. 진료를 미루는 주민이 줄어들 것이다.' })),
            { type: 'choice', prompt: '건강 격차를 줄이는 제안으로 가장 알맞은 것을 고르세요.', options: ['모든 동네에 같은 예산을 똑같이 나눈다', '필요가 큰 곳의 거리·시간 문제부터 줄인다', '건강은 개인 책임이니 안내문만 붙인다'], answer: 1, difficulty: 0.2, explain: '형평성은 똑같이 나누기가 아니라, 필요가 큰 곳의 장벽부터 줄이는 것이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '건강 형평성 제안',
          items: [
            { type: 'short', prompt: '내 제안을 네 문장(원인·대상·방법·예상 효과)으로 쓰세요.' },
            { type: 'short', prompt: '내 제안에 나올 반론 하나와 그에 대한 대응을 쓰세요.' },
          ],
          easy: { note: '"나루동은 ~ 때문에 ~. ~을 위해 ~을 하자. 그러면 ~"', items: [{ type: 'short', prompt: '원인·대상·방법을 세 문장으로 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.reflect-scale', type: 'wrap', title: '건강은 개인 책임일까 다시 보기',
        method: '생각이 바뀐 정도', tool: 'emotion', minutes: 10,
        levels: { easy: '눈금만 고르고 바뀐 까닭은 말로 나눈다.', base: '눈금을 고르고 바뀐 까닭 보기 하나를 고른다.', challenge: '까닭 두 가지와 아직 남은 질문을 활동지에 쓴다.' },
        wrap: {
          teacher: '"\'건강은 결국 개인 책임이다\'라는 문장에 지금 얼마나 동의하나요? 수업 처음과 견주어 봐요." 눈금은 옳고 그름이 없고 생각의 변화를 보는 것이라고 먼저 말한다. 바뀌지 않았다는 학생에게 "그대로인 까닭도 근거예요. 오늘 본 자료 가운데 무엇이 그 생각을 지켜 주었나요?"라고 묻는다. 개인의 노력과 사회적 조건이 함께 건강을 만든다는 점을 짚는다.',
          exitTicket: [
            SCALE('지금 이 문장에 얼마나 동의하는지 눈금으로 고르세요.', '"건강은 결국 개인 책임이다"', '생각', { 1: '전혀 아니다', 5: '아주 그렇다' }, '지금 나의 동의 정도는?'),
            { type: 'choice', prompt: '오늘 본 자료·장면과 맞는 말을 고르세요.', options: ['건강 격차는 개인 노력 차이일 뿐이다', '거리·운영 시간·정보 같은 조건도 건강의 차이를 만든다', '병원 수만 늘리면 격차는 저절로 사라진다'], answer: 1, difficulty: 0.15, explain: '개인의 노력과 함께 거리·시간·소득·정보 같은 사회적 조건이 건강을 만들어요. 시설이 늘어도 닿기 어려우면 격차는 남아요.' },
            { type: 'short', prompt: '건강 격차에 대해 아직 남은 질문 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '생각이 바뀐 정도',
          items: [
            { type: 'short', prompt: '수업 전과 후 내 동의 정도가 바뀐(또는 그대로인) 까닭 두 가지를 쓰세요.' },
            { type: 'short', prompt: '건강 격차에 대해 더 알아보고 싶은 질문 하나를 쓰세요.' },
          ],
        },
        notes: '눈금은 생각의 변화를 보는 것이라 어느 칸이든 맞다. 학생 자신의 건강 상태를 예로 들게 하지 않는다.',
      }),
    );
  }

  /* 사람 확인(crisis-stigma):
   *   - [crisis-stigma.intro.stage-timeline · activity.actor-sort] 감염병 위기경보 네 단계(관심·주의·경계·심각)의 단계별 대응 내용과 정부·지자체·학교·개인의 역할(역학조사·등교 방식 조정·격리 지원) 일반 설명
   *       → 질병관리청(감염병 위기 대응 안내)·행정안전부 국민재난안전포털, 교육부 학교 감염병 대응 지침
   *   - [crisis-stigma.activity.stigma-dilemma · guideline · wrap.op-ed · wrap.campaign] 감염 여부·검사 사실도 보호할 개인 정보이고, 낙인이 증상 숨기기·검사 피하기로 이어져 방역을 해칠 수 있다는 설명
   *       → 질병관리청·국가인권위원회(감염병 관련 인권 보호 권고)·개인정보보호위원회
   *   - [crisis-stigma.activity.guideline] 아프면 쉬고 보건실에 알리기·손 씻기·기침 예절·환기 같은 학급 수칙 → 질병관리청 감염병 예방 수칙, 교육부 학교 감염병 대응 지침
   *   계획대로 못 한 것:
   *   - intro.*: 도입은 시연 하나뿐이라 levels(단계 2개/4개, 반응 2개/3개)는 교사 진행 방식으로 적었다.
   *   - activity.actor-sort: 계획의 '칸 2개'(쉬움)는 문항 1의 쉬움 판에서 칸 두 개(정부·방역 당국, 개인)로 줄였다. 협력 지점은 별도 분류 문항으로 뒀다.
   *   - activity.guideline: '상충 사례 하나'는 고르기 문항(방역과 인권을 함께 지키는 방법)으로 바꿨다.
   *   - 실제 감염병 이름·집단·지역·국적은 쓰지 않았다(낙인을 되풀이하지 않게). 단체방 장면은 모두 가상이다.
   */
  // ======================================================================================================
  // 2. 감염병 위기 대응과 낙인·인권 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('crisis-stigma', [10, 11, 12]);
    const STAGES = ['관심: 발생 소식을 지켜보며 정보를 모은다', '주의: 들어온 감염을 막고 살피는 일을 늘린다', '경계: 퍼지지 않게 대응을 넓힌다', '심각: 사회 전체가 함께 대응한다'];
    // 주별 검사 건수(예시 자료, 실제 통계 아님) — 4주에 이름을 밝힌 낙인 보도
    const TESTS = [['1주', 50], ['2주', 55], ['3주', 58], ['4주(보도)', 35], ['5주', 30], ['6주', 40]];
    const TLINE = (more = {}) => Object.assign({ type: 'line', mode: 'read', title: '가상 지역의 주별 검사 건수(예시 자료, 실제 통계 아님)', unit: '건', xLabel: '주', yLabel: '검사 건수', data: TESTS }, more);
    const RUMOR = { text: '반 단체방에 "2반 시현이 확진됐대. 걔랑 같이 다닌 애들도 다 위험함"이라는 글이 올라왔다. 학교 공지는 아직 없다.', who: '나', motif: 'cloud', choices: [
      { id: 'share', text: '다른 반 단체방에도 옮긴다', result: '시현이의 이름이 학교 전체에 퍼진다.', impact: [{ who: '시현', text: '모두가 이름을 알게 된다', tone: -1 }],
        next: { text: '다음 날, 시현이는 확진이 아니라 검사만 받았다는 것이 알려졌다. 시현이는 학교 오기가 두렵다고 한다.', choices: [
          { id: 'apologize', text: '옮긴 단체방에 정정 글을 올리고 시현이에게 사과한다', result: '소문이 조금 잦아들지만 이미 본 사람도 많다.', impact: [{ who: '시현', text: '사과를 받지만 상처는 남는다', tone: 0 }],
            next: { text: '정정 글에 "그래도 걔 근처엔 가지 말자"는 댓글이 붙었다.', choices: [
              { id: 'stand', text: '"사람 말고 수칙 이야기를 하자"고 답한다', result: '댓글이 멈추고 손 씻기·환기 이야기로 바뀐다.', impact: [{ who: '시현', text: '조금씩 돌아올 자리가 생긴다', tone: 1 }], ending: '잘못 옮긴 뒤에도 바로잡고 멈추게 할 수 있다.' },
              { id: 'leave', text: '할 만큼 했으니 그냥 둔다', result: '피하자는 댓글이 더 달린다.', impact: [{ who: '시현', text: '따돌림이 이어진다', tone: -1 }], ending: '낙인은 정정 한 번으로 끝나지 않는다.' }] } },
          { id: 'hide', text: '내 글만 조용히 지우고 모른 척한다', result: '퍼진 글은 다른 방에 그대로 남는다.', impact: [{ who: '시현', text: '오해가 풀리지 않는다', tone: -1 }], ending: '퍼뜨린 소문은 지워도 사라지지 않는다.' }] } },
      { id: 'silent', text: '아무 말 없이 읽기만 한다', result: '소문 글에 "걔 피하자"는 댓글이 늘어난다.', impact: [{ who: '시현', text: '피하자는 말이 쌓인다', tone: -1 }],
        next: { text: '단체방 분위기가 점점 험해진다. 몇몇은 같이 다닌 친구 이름까지 올린다.', choices: [
          { id: 'tell', text: '담임 선생님께 알리고 공지를 기다리자고 쓴다', result: '담임 선생님이 확인된 사실과 수칙만 공지한다.', impact: [{ who: '반 친구들', text: '확인된 정보를 받는다', tone: 1 }],
            next: { text: '공지가 나왔는데도 단체방에선 시현이 이름이 오르내린다.', choices: [
              { id: 'support', text: '"이름 이야기는 그만하자"고 쓰고 시현이에게 따로 안부를 묻는다', result: '시현이가 "고마워, 나 괜찮아"라고 답한다.', impact: [{ who: '시현', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '공식 정보와 한 사람의 지지가 함께 낙인을 멈춘다.' },
              { id: 'done', text: '공지가 나왔으니 이제 끝났다고 생각한다', result: '이름을 올리는 글이 며칠 더 이어진다.', impact: [{ who: '시현', text: '돌아오기가 여전히 어렵다', tone: -1 }], ending: '공지만으로는 이미 붙은 낙인이 지워지지 않는다.' }] } },
          { id: 'watch', text: '끝까지 지켜보기만 한다', result: '같이 다닌 친구들까지 따돌림을 받는다.', impact: [{ who: '시현과 친구들', text: '낙인이 번진다', tone: -1 }], ending: '침묵하는 사이 낙인은 다른 사람에게로 번진다.' }] } },
      { id: 'correct', text: '"확인 안 된 이야기에 친구 이름 올리지 말자"고 쓴다', result: '몇몇이 글을 멈추고 지켜본다.', impact: [{ who: '시현', text: '이름이 더 퍼지지 않는다', tone: 1 }],
        next: { text: '"너 걔랑 친하니까 감싸는 거지?"라는 답이 달렸다.', choices: [
          { id: 'facts', text: '학교 공지와 수칙만 나누자고 다시 쓴다', result: '단체방이 조용해지고 수칙 이야기가 오간다.', impact: [{ who: '반 친구들', text: '불안 대신 할 일을 안다', tone: 1 }],
            next: { text: '시현이가 "애들이 다 알아?"라며 걱정하는 메시지를 보냈다.', choices: [
              { id: 'care', text: '이름 글은 멈췄다고 알리고, 돌아오면 평소처럼 지내자고 한다', result: '시현이가 안심하고 쉬는 데 집중한다.', impact: [{ who: '시현', text: '돌아올 자리가 지켜진다', tone: 1 }], ending: '낙인을 막는 일은 아픈 사람이 쉬고 돌아올 자리를 지키는 일이다.' },
              { id: 'hunt', text: '누가 처음 퍼뜨렸는지 같이 찾아내자고 한다', result: '이번엔 처음 글쓴이가 몰매를 맞는다.', impact: [{ who: '처음 글쓴이', text: '새로운 표적이 된다', tone: -1 }], ending: '낙인을 다른 사람에게 옮기는 것은 바로잡기가 아니다.' }] } },
          { id: 'quit', text: '지쳐서 단체방을 나간다', result: '바로잡는 사람이 사라지고 소문이 다시 돈다.', impact: [{ who: '시현', text: '편이 줄어든다', tone: -1 }], ending: '혼자 지치기 전에 어른과 함께 바로잡을 수 있다.' }] } }] };
    const RUMOR_R = [{ id: 'privacy', text: '감염·검사 여부도 보호받아야 할 개인 정보다' }, { id: 'avoid', text: '낙인이 두려우면 증상을 숨기고 검사를 피하게 된다' }, { id: 'more', text: '정보는 많이 퍼질수록 모두에게 안전하다', why: '이름은 방역에 필요한 정보가 아니고, 퍼질수록 사람을 다치게 해요.' }, { id: 'fault', text: '걸린 사람이 조심하지 않은 탓이다', why: '감염은 누구에게나 생길 수 있어요. 탓하기는 숨기기를 낳아요.' }];

    MODS.push(
      M({
        id: 'intro.stage-timeline', type: 'intro', title: '위기경보 네 단계 시간 줄',
        method: '위기 단계별 대응 시간 줄', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 관심·심각 두 단계 카드만 먼저 놓아 보이며 양 끝을 견준다.', base: '네 단계 카드를 시간 줄에 놓는 시연을 보고 단계마다 무엇이 달라지는지 말한다.', challenge: '단계마다 학교가 맡는 일(공지·등교 조정 등)을 하나씩 덧붙여 말한다.' },
        intro: {
          teacher: '"새 감염병 소식이 들리면 나라는 위기경보를 관심·주의·경계·심각 네 단계로 올리거나 내려요. 단계가 오를수록 무엇이 달라질까요?" 시연 단추로 카드가 시간 줄에 놓이는 모습을 보여 준다. "심각 단계가 되면 정보를 다 공개해야 안전하다"는 말이 나오면 "방역에 필요한 정보와 한 사람의 이름은 같은 정보일까요?"라고 되묻는다. 오늘은 대응 주체와 함께, 위기 때 사람을 지키는 일도 방역이라는 점을 다룬다고 밝힌다.',
          student: '감염병 위기경보 네 단계를 낮은 단계부터 시간 줄에 놓고, 단계가 오를수록 대응이 어떻게 넓어지는지 살펴보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['낮은 단계', '높은 단계'], slots: 4, cards: [STAGES[2], STAGES[0], STAGES[3], STAGES[1]] }, sequence: [{ order: STAGES }] },
          art: { draw: 'a paper timeline with four stepping stones rising from left to right, each lit a little brighter, small paper figures of a government building, a school and a family along the line', banner: '단계가 오를수록 함께 대응해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '단계별 대응 내용은 일반 설명이다. 수업 전 질병관리청 위기 대응 안내로 현재 기준을 확인한다(사람 확인).',
      }),
      M({
        id: 'intro.rumor-feel', type: 'intro', title: '소문 글을 본 사람들의 마음',
        method: '소문 게시글에 대한 첫 반응', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 두 사람(이름이 오른 학생·바로잡는 답글을 본 학생)의 마음만 짝짓는 시연을 보인다.', base: '세 사람의 마음을 짝짓는 시연을 보고, 같은 글이 사람마다 다르게 닿는 까닭을 말한다.', challenge: '처음 글쓴이가 무엇을 바랐을지(걱정·관심 끌기 등) 짐작해 말한다.' },
        intro: {
          teacher: '"가상의 단체방 글이에요. 이 글을 본 사람들은 각자 어떤 마음일까요?" 내 경험을 말하지 않고 장면 속 사람의 마음만 짝짓자고 먼저 말한다. 시연 단추로 마음 카드가 짝지어지는 모습을 보여 준다. "걱정돼서 알려 준 건데 뭐가 문제야"라는 말이 나오면 "이름이 오른 학생에게 이 글은 걱정일까요, 표적일까요?"라고 되묻는다. 같은 글도 누구에게는 정보, 누구에게는 낙인이 된다는 점을 짚는다.',
          student: '가상 단체방 글을 본 세 사람의 마음을 짝지어 보세요. 내 경험은 말하지 않아도 돼요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'named', label: '소문 글에 이름이 오른 학생' }, { id: 'reply', label: '"확인 전엔 이름 올리지 말자" 답글을 본 그 학생' }, { id: 'class', label: '"우리 반 다 걸린 거 아냐?" 글을 본 반 친구' }], cards: [{ id: 'lonely', text: '외로움' }, { id: 'relief', text: '안심' }, { id: 'worry', text: '걱정' }, { id: 'joy', text: '신남' }] }, sequence: [{ match: { named: 'lonely', reply: 'relief', class: 'worry' } }] },
          art: { draw: 'a paper phone screen with group chat bubbles, one bubble casting a long shadow over a small lonely paper figure, another bubble shaped like an umbrella sheltering it', banner: '같은 글, 다른 마음', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '학생의 감염·검사 경험이나 소문을 들은 경험을 묻지 않는다. 단체방 글은 가상이다.',
      }),

      M({
        id: 'activity.stigma-dilemma', type: 'activity', title: '확진 소문이 퍼지는 단체방',
        method: '확진 친구 소문 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길(옮기기·읽기만·바로잡기)만 고르고 근거 카드를 고른다.', base: '두 번째 갈림길까지 시현이와 반 친구들에게 생긴 결과를 따라가고 근거 카드를 고른다.', challenge: '세 번째 갈림길까지 가 보고 인권 근거 카드로 내 선택을 설명한다.' },
        activity: {
          title: '소문 앞의 갈림길', tool: 'dilemma',
          teacher: '"공지는 아직 없는데 친구 이름이 단체방에 올랐어요. 나는 무엇을 할까요?" 갈림길마다 "이 선택으로 시현이는 쉬는 데 집중할 수 있을까요, 숨고 싶어질까요?"라고 묻는다. "알려 줘야 다들 조심하지"라는 학생에게 "조심하는 데 필요한 것은 이름일까요, 손 씻기·증상 알리기 같은 수칙일까요?"라고 되묻는다. 낙인이 두려우면 사람들이 증상을 숨기고 검사를 피해 결국 방역이 무너진다는 점을 짚는다.',
          task: '단체방에서 내가 할 선택을 끝까지 따라가 결과를 보고, 인권과 방역의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL123('단체방의 \'나\'가 되어 낙인을 멈추는 길을 고르고, 근거 카드를 고르세요.', RUMOR, [['correct', 'facts', 'care'], ['silent', 'tell', 'support']], RUMOR_R, ['privacy', 'avoid'], { d: 0.4, opt: { title: '반 단체방(가상)' } }),
            EXPLOREQ('단체방 장면에서 \'옮긴다\'로 시작한 길과 \'바로잡는다\'로 시작한 길을 끝까지 가 보고 견주세요.', RUMOR, RUMOR_R, ['두 길의 끝 장면을 모두 보았다', '두 길에서 시현이에게 생긴 일을 견주었다', '옮긴 뒤에도 바로잡을 수 있는 지점을 찾았다'], { d: 0.35 }),
            EXPLOREQ('\'읽기만 한다\'로 시작한 길을 끝까지 가 보고, 침묵이 낙인을 어떻게 키우는지 다른 길과 견주세요.', RUMOR, RUMOR_R, ['읽기만 한 길의 끝 장면을 보았다', '다른 길 하나도 끝까지 보았다', '침묵 대신 할 수 있는 한 가지 행동을 찾았다'], { d: 0.4, more: { conclude: '감염 여부는 지켜야 할 개인 정보예요. 이름 대신 수칙을 나누고, 어른과 함께 바로잡으면 방역과 인권을 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '소문 글 대신 단체방에 올릴 수 있는 한 문장을 쓰세요(이름 없이, 수칙이나 공지 중심으로).' }] },
        notes: '시현이는 가상 인물이다. 학생의 감염·검사 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.actor-sort', type: 'activity', title: '대응 주체와 할 일 나누기',
        method: '대응 주체와 할 일 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '바구니 2개(정부·방역 당국·개인)에 카드를 넣고, 틀리면 바로 까닭이 나온다.', base: '바구니 3개(정부·방역 당국·학교·개인)에 할 일 카드를 나누고, 방역에 도움이 되는 행동과 낙인을 키우는 행동을 가른다.', challenge: '카드가 더해지고, 주체끼리 정보가 오가는 협력 지점을 나눈다.' },
        activity: {
          title: '누가 무엇을 할까', tool: 'sortboard',
          teacher: '"위기 때 할 일은 한 사람이 다 하지 않아요. 정부·학교·개인이 맡는 일을 바구니에 나눠 봐요." 카드를 넣을 때마다 "이 일은 개인이 할 수 있나요, 권한과 정보가 있는 기관이 해야 하나요?"라고 묻는다. "누가 확진인지 알아내는 것도 개인이 조심하는 방법"이라는 학생에게 "감염 경로를 조사하는 일은 누가 맡나요? 그 정보는 왜 공개 범위가 정해져 있을까요?"라고 되묻는다. 개인의 몫은 내 몸을 살피고 확인된 정보만 나누는 것이라는 점을 짚는다.',
          task: '위기 대응 할 일 카드를 맡는 주체의 바구니에 나누고, 도움이 되는 행동을 가려요.', levels: { easy: {}, base: {}, challenge: { shuffle: true } },
          items: [
            Object.assign(BOARDQ('할 일 카드를 맡는 주체의 바구니에 나누세요.', ['정부·방역 당국', '학교', '개인'], [
              ['감염 경로를 조사한다(역학조사)', '위기경보 단계를 정해 알린다'],
              ['등교·수업 방식을 조정한다', '확인된 사실과 수칙을 가정에 공지한다'],
              ['증상이 있으면 쉬고 검사를 받는다', '확인된 정보만 나눈다'],
            ], { k: 1, hard: [['격리하는 사람의 생활을 지원한다'], ['돌아온 학생이 수업을 따라가게 돕는다'], ['격리 중인 친구에게 응원 메시지를 보낸다']], traps: ['확진자 이름을 단체방에 알린다'], d: 0.3 }),
              { levels: { easy: { prompt: '할 일 카드를 정부·방역 당국과 개인 바구니에 나누세요(카드 4장).', toolOptions: { slots: ['정부·방역 당국', '개인'], cards: ['감염 경로를 조사한다(역학조사)', '증상이 있으면 쉬고 검사를 받는다', '위기경보 단계를 정해 알린다', '확인된 정보만 나눈다'], instant: true, showCount: true }, target: { sort: { '정부·방역 당국': ['감염 경로를 조사한다(역학조사)', '위기경보 단계를 정해 알린다'], 개인: ['증상이 있으면 쉬고 검사를 받는다', '확인된 정보만 나눈다'] } } },
                challenge: { prompt: '할 일 카드를 맡는 주체의 바구니에 나누세요(카드 10장).', toolOptions: { cards: ['감염 경로를 조사한다(역학조사)', '등교·수업 방식을 조정한다', '증상이 있으면 쉬고 검사를 받는다', '위기경보 단계를 정해 알린다', '확인된 사실과 수칙을 가정에 공지한다', '확인된 정보만 나눈다', '격리하는 사람의 생활을 지원한다', '돌아온 학생이 수업을 따라가게 돕는다', '격리 중인 친구에게 응원 메시지를 보낸다', '확진자 이름을 단체방에 알린다'] },
                  target: { sort: { '정부·방역 당국': ['감염 경로를 조사한다(역학조사)', '위기경보 단계를 정해 알린다', '격리하는 사람의 생활을 지원한다'], 학교: ['등교·수업 방식을 조정한다', '확인된 사실과 수칙을 가정에 공지한다', '돌아온 학생이 수업을 따라가게 돕는다'], 개인: ['증상이 있으면 쉬고 검사를 받는다', '확인된 정보만 나눈다', '격리 중인 친구에게 응원 메시지를 보낸다'] } } } } }),
            BOARDQ('개인의 행동 카드를 방역에 도움·낙인을 키움 바구니에 나누세요.', ['방역에 도움', '낙인을 키움'], [
              ['기침할 때 옷소매로 가린다', '아프면 숨기지 않고 보건실에 알린다', '공지 출처를 확인하고 나눈다'],
              ['확진된 친구의 동선을 캐묻는다', '"걔 때문에 다 걸렸다"고 말한다', '격리 끝난 친구를 피해 다닌다'],
            ], { k: 2, hard: [['돌아온 친구를 평소처럼 맞는다'], ['특정 동네 사람을 조심하라는 글을 퍼뜨린다']], d: 0.3 }),
            BOARDQ('주체끼리 정보가 오가는 협력 지점 카드를 나누세요.', ['정부 → 학교', '학교 → 개인·가정'], [
              ['위기 단계와 학교용 지침을 전한다', '학교에 필요한 방역 물품을 지원한다'],
              ['지침에 맞춘 등교 방식을 가정에 알린다', '증상이 있을 때 알릴 곳을 안내한다'],
            ], { k: 1, hard: [['지역의 검사 장소 안내를 학교에 보낸다'], ['결석 학생의 학습 자료를 보낸다']], traps: ['확진 학생 명단을 학급에 돌린다'], d: 0.35, more: { conclude: '정부는 조사하고 기준을 정하고, 학교는 그 기준을 가정과 교실로 잇고, 개인은 내 몸을 살피고 확인된 정보만 나눠요. 이름은 그 사슬 어디에도 필요하지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '위기 때 주체마다 맡는 일을 한 가지씩 쓰세요.', columns: ['주체', '맡는 일'], cells: [['정부·방역 당국', ''], ['학교', ''], ['개인', '']] }] },
        notes: '역할 설명은 일반적인 것이다. 우리 학교의 실제 감염병 대응 절차(보건실·담임·공지 경로)는 보건 교사가 덧붙인다.',
      }),
      M({
        id: 'activity.case-chart', type: 'activity', title: '낙인 보도 뒤 검사 수 읽기',
        method: '예시 자료로 낙인과 검사 회피 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '점 위에 값이 보여 주별 검사 수를 바로 읽는다.', base: '값 표시 없이 꺾은선을 읽고, 보도 앞뒤 변화를 계산한다.', challenge: '값 표시 없이 풀고, 검사 수가 줄어든 다른 까닭 가능성을 고른 뒤 짝에게 설명한다.' },
        activity: {
          title: '보도 앞뒤의 검사 건수', tool: 'chart',
          teacher: '"예시 자료예요. 가상의 지역에서 4주째에 확진자의 이름과 동선을 자세히 밝힌 보도가 나왔다고 해요. 그 뒤 검사 건수는 어떻게 되었나요?" 먼저 값을 읽고 차이를 계산하게 한다. "감염이 줄어서 검사도 줄었다"는 학생에게 "이 그래프에 감염자 수가 나와 있나요? 그 말을 하려면 어떤 자료가 더 있어야 할까요?"라고 되묻는다. 함께 일어난 변화와 원인을 구별하면서도, 낙인이 검사 회피로 이어질 수 있다는 가능성을 짚는다.',
          task: '예시 자료 꺾은선그래프를 읽고, 낙인 보도 앞뒤의 변화를 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '앞 주보다 검사 건수가 가장 크게 줄어든 주를 고르세요.', toolOptions: TLINE({ question: '가장 크게 줄어든 주는?', choices: TESTS.map((x) => x[0]) }), target: { pick: 3 }, difficulty: 0.2 },
            { prompt: '보도 직전인 3주와 보도 다음인 5주의 검사 건수 차이는 몇 건인가요?', toolOptions: TLINE({ question: '3주와 5주의 차이는?' }), target: { value: 28 }, difficulty: 0.3 },
            { prompt: '이 예시 자료로 말할 수 있는 해석을 고르세요.', toolOptions: TLINE({ question: '알맞은 해석은?', choices: ['보도 뒤 검사 건수가 줄었다', '보도가 검사 감소의 유일한 원인임이 증명됐다', '감염자가 줄어서 검사가 줄었다고 확정할 수 있다'], why: ['', '함께 일어난 변화만으로 유일한 원인이라고 할 수는 없어요.', '이 그래프에는 감염자 수가 없어요.'] }), target: { pick: 0 }, difficulty: 0.35 },
            { prompt: '검사 건수가 줄어든 까닭을 더 확인하려면 어떤 자료가 필요할지 고르세요.', toolOptions: TLINE({ question: '함께 보면 좋은 자료는?', choices: ['같은 기간 증상이 있어도 검사를 미룬 사람들의 응답', '보도한 기자의 나이', '6주의 날씨'], why: ['', '기자의 나이는 검사 수 변화와 관련이 적어요.', '날씨 하나로는 4주의 큰 감소를 설명하기 어려워요.'] }), target: { pick: 0 }, difficulty: 0.4, conclude: '그래프는 보도 뒤 검사가 줄었다는 것을 보여 줄 뿐 까닭을 확정하지 않아요. 그래도 낙인이 두려우면 검사를 피하는 사람이 생길 수 있어, 이름 공개는 조심해야 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프에서 읽은 변화와, 그 변화를 낙인과 연결할 때 조심할 점을 한 문장씩 쓰세요.' }] },
        notes: '그래프는 수업용 예시 자료다(실제 통계 아님). 실제 감염병·지역 이름을 붙이지 않는다.',
      }),
      M({
        id: 'activity.guideline', type: 'activity', title: '방역과 인권을 담은 학급 수칙',
        method: '학급 감염병 대응 수칙 만들기', tool: 'kitchen', minutes: 16,
        levels: { easy: '후보 3개 가운데 수칙에 넣을 항목을 고른다.', base: '후보 8개에서 함정 항목을 걸러 내고, 방역 수칙과 인권 수칙으로 나눈다.', challenge: '방역과 인권이 부딪치는 듯한 상황에서 둘을 함께 지키는 방법을 고른다.' },
        activity: {
          title: '우리 반 감염병 대응 수칙', tool: 'kitchen',
          teacher: '"우리 반 수칙에 방역만 넣으면 될까요? 아픈 친구가 숨기지 않고 말할 수 있으려면 무엇이 더 필요할까요?" 후보 가운데 \'누가 옮겼는지 찾아낸다\'를 넣으려는 학생에게 "그 수칙이 있는 반에서 아픈 친구는 먼저 말할 수 있을까요?"라고 묻는다. 방역 수칙과 인권 수칙은 서로 반대가 아니라, 인권 수칙이 있어야 방역 수칙이 지켜진다는 점을 짚는다.',
          task: '학급 감염병 대응 수칙에 넣을 항목을 고르고, 방역과 인권 수칙으로 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHECKQ('우리 반 감염병 대응 수칙에 넣을 항목만 표시하세요.', '우리 반 감염병 대응 수칙', [
              ['sick', '아프면 쉬고 보건실에 알린다', true], ['name', '확진된 친구 이름을 반에 알린다', false], ['wash', '손 씻기와 기침 예절을 지킨다', true], ['fact', '학교 공지로 확인된 정보만 나눈다', true],
              ['blame', '누가 옮겼는지 찾아낸다', false], ['back', '돌아온 친구를 평소처럼 맞는다', true], ['air', '쉬는 시간에 창문을 열어 환기한다', true], ['photo', '격리 중인 친구 사진을 올려 응원한다', false],
            ], { k: 3, d: 0.3 }),
            SORTQ('고른 수칙을 방역 수칙과 인권 수칙으로 나누세요.', ['방역 수칙', '인권 수칙'], [
              ['손 씻기와 기침 예절을 지킨다', '쉬는 시간에 창문을 열어 환기한다', '아프면 쉬고 보건실에 알린다'],
              ['학교 공지로 확인된 정보만 나눈다', '돌아온 친구를 평소처럼 맞는다', '아팠던 친구를 별명으로 부르지 않는다'],
            ], { k: 2, d: 0.3 }),
            PICKQ('방역과 인권을 함께 지키는 방법만 고르세요.', ['접촉한 사람에게는 학교가 이름 없이 알린다', '결석한 친구에게 학습 자료를 보내 준다'], ['모두 알 수 있게 확진자 이름을 공지한다', '확진됐던 친구는 한 달간 따로 앉힌다'], { d: 0.4, opt: { basket: '함께 지키는 방법' }, more: { conclude: '필요한 사람에게 필요한 만큼만 알리고, 돌아올 자리를 지키면 방역과 인권이 함께 서요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 수칙에 하나를 더 넣는다면 무엇을 넣을지, 그 까닭과 함께 쓰세요.' }] },
        notes: '수칙 후보는 일반 감염병 예방 수칙이다. 실제 학교 지침(등교 기준·결석 처리)은 보건 교사가 최신 교육부 지침으로 확인한다.',
      }),

      M({
        id: 'wrap.op-ed', type: 'wrap', title: '낙인이 방역을 해치는 까닭 칼럼',
        method: '낙인 반대 칼럼', tool: 'rubric-writing', minutes: 10,
        levels: { easy: '활동지 문장 틀을 보고 네 문장(주장·근거·사례·대안)을 쓴다.', base: '다섯 문장 칼럼을 쓰고 기준표 네 항목을 점검한다.', challenge: '"그래도 정보는 공개해야 안전하다"는 반론에 대한 반박 한 문장을 더한다.' },
        wrap: {
          teacher: '"오늘 본 단체방과 그래프를 근거로, 낙인이 왜 방역까지 해치는지 다섯 문장 칼럼을 써 봐요." 쓰기 전에 기준표 네 항목을 함께 읽는다. "낙인은 나쁘다"만 되풀이한 학생에게 "그래서 사람들이 무엇을 하게 되고, 그것이 방역에 어떤 일을 일으키나요?"라고 묻는다. 칼럼에 실제 사람·집단의 이름을 쓰지 않도록 한다.',
          exitTicket: [
            EXIT('rubric-writing', RWQ('낙인 반대 칼럼을 쓰고 기준표로 점검하세요.', '낙인이 방역과 인권을 함께 해치는 까닭을 다섯 문장 칼럼으로 쓰세요(실제 이름 쓰지 않기).', ['첫 문장에 주장을 썼다', '근거를 하나 이상 썼다', '오늘 본 사례를 썼다', '대안을 썼다'], { min: 80, max: 450, sent: [4, 7], must: [['낙인', '혐오']], sample: '감염병 위기에서 낙인은 방역의 적이다. 이름이 퍼질까 두려운 사람은 증상을 숨기고 검사를 미루게 되기 때문이다. 예시 자료에서도 이름을 밝힌 보도 뒤 검사 건수가 줄었다. 감염 여부는 개인 정보이고, 필요한 사람에게만 알려져야 한다. 우리는 이름 대신 수칙을 나누고 돌아온 친구를 평소처럼 맞아야 한다.' })),
            { type: 'choice', prompt: '칼럼의 근거로 가장 알맞은 것을 고르세요.', options: ['낙인이 두려우면 증상을 숨기고 검사를 피하게 된다', '걸린 사람이 조심하지 않았기 때문이다', '정보는 많이 퍼질수록 안전하다'], answer: 0, difficulty: 0.2, explain: '숨기기와 검사 회피는 방역을 직접 약하게 만들어요. 탓하기와 이름 퍼뜨리기는 그것을 부추겨요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '낙인 반대 칼럼',
          items: [
            { type: 'short', prompt: '내 칼럼을 다섯 문장(주장·근거·사례·대안)으로 쓰세요.' },
            { type: 'short', prompt: '"그래도 정보는 다 공개해야 안전하다"는 반론에 대한 내 반박을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '"낙인은 방역을 해친다. 왜냐하면 ~. 예를 들어 ~. 그러므로 우리는 ~"', items: [{ type: 'short', prompt: '주장·근거·사례·대안을 네 문장으로 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.campaign', type: 'wrap', title: '혐오 표현 대신 쓸 말 캠페인',
        method: '혐오 표현 대신 쓸 말 캠페인', tool: 'collage', minutes: 10,
        levels: { easy: '대신 쓸 표현 하나를 골라 카드를 꾸민다.', base: '대신 쓸 표현 세 개를 담아 카드를 꾸미고 점검한다.', challenge: '카드를 올릴 매체(학급 게시판·학교 누리집·단체방 공지)를 정해 활동지에 크기와 문구를 맞춘다.' },
        wrap: {
          teacher: '"\'○○ 때문에\', \'걸린 애\' 같은 말 대신 무엇이라고 하면 될까요? 대신 쓸 말을 담은 캠페인 카드를 만들어 봐요." 칠판에 혐오 표현과 대신 쓸 표현을 두 줄로 적어 둔다(실제 집단·지역 이름은 쓰지 않는다). 조각을 꾸미는 동안 "이 카드를 본 아픈 친구는 어떤 마음일까요?"라고 묻는다. 캠페인은 사람을 탓하지 않고 할 일을 알려 주어야 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '대신 쓸 표현을 담은 캠페인 카드를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['사람 대신 수칙을 앞세웠다', '아픈 사람을 응원하는 표현을 넣었다', '특정 집단·지역 이름을 쓰지 않았다'], minPieces: 3 }, difficulty: 0.2 },
            { type: 'choice', prompt: '"걸린 애"를 대신할 표현으로 가장 알맞은 것을 고르세요.', options: ['감염돼 치료 중인 친구', '조심 안 한 애', '위험한 애'], answer: 0, difficulty: 0.15, explain: '사람을 탓하거나 위험한 존재로 부르지 않고, 치료 중이라는 사실만 말해요.' },
            { type: 'short', prompt: '내 캠페인 카드의 대표 문구 한 줄을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '대신 쓸 말 캠페인',
          items: [
            { type: 'table', prompt: '혐오 표현과 대신 쓸 표현을 짝지어 쓰세요(실제 이름 쓰지 않기).', columns: ['피할 표현', '대신 쓸 표현'], cells: [['걸린 애', ''], ['○○ 때문에 퍼졌다', ''], ['그 반은 위험해', '']] },
            { type: 'short', prompt: '카드를 올릴 곳과, 그곳에 맞게 고칠 점을 쓰세요.' },
          ],
        },
      }),
    );
  }

  /* 사람 확인(antibiotic-vaccine):
   *   - [antibiotic-vaccine 전체] 항생제는 세균에 듣고 바이러스(감기·독감 등)에는 듣지 않는다 / 내성균은 항생제를 견딘 균이 살아남아 늘어나며 생긴다 / 처방받은 대로 끝까지 먹고, 남은 약을 남에게 주지 않는다
   *       → 질병관리청(항생제 내성 바로 알기)·식품의약품안전처(의약품 안전 사용)·약사·의사
   *   - [antibiotic-vaccine.activity.drug-sort] 세균성 인후염·폐렴·요로감염은 진단에 따라 항생제를 쓸 수 있고, 감기·독감·바이러스성 장염은 항생제가 듣지 않는다는 분류 → 질병관리청 국가건강정보포털
   *   - [antibiotic-vaccine.intro.germ-body] 감기(코), 인후염(목 — 교구에 목구멍 칸이 없어 '입'), 요로감염(방광) 부위 설명과 '원인은 검사로 확인한다' → 질병관리청 국가건강정보포털
   *   - [antibiotic-vaccine.activity.stop-dilemma · wrap.rule-check] 남은 약은 약국·보건소 등의 폐의약품 수거함에 낸다 → 식품의약품안전처·지역 보건소(폐의약품 수거 안내)
   *   - [antibiotic-vaccine.activity.vaccine-decide] 예방접종은 병을 막거나 가볍게 하는 데 도움을 주며, 결정은 이익·위험을 공식 출처로 확인하고 의료진과 상의한다 → 질병관리청 예방접종도우미
   *   - [antibiotic-vaccine.activity.reaction-order] 접종 뒤 잠시 머물며 살피기·쉬기·증상 기록·심하거나 오래가면 의료기관 연락 / 숨쉬기 어려움·얼굴·입술 붓기·의식이 흐려짐은 바로 119 → 질병관리청 예방접종도우미(이상반응 안내)·소방청
   *   계획대로 못 한 것:
   *   - intro.*: 도입은 시연 하나뿐이라 levels(단계 3개/4개, 부위 2개/3개)는 교사 진행 방식으로 적었다.
   *   - intro.germ-body: body 교구에 목구멍 칸이 없어 인후염 자리는 '입'으로 짚었다(교사가 목 안쪽이라고 말로 보탠다).
   *   - activity.reaction-order: 응급 신호 구별(계획의 도전)은 문항 수가 단계마다 같아야 해서 모든 단계의 둘째 문항으로 두었다.
   *   - wrap.rule-check: 출구 질문에는 단계별 판이 없어 항목 2개/3개는 교사 진행 방식이다(쉬움은 앞 두 항목부터 함께 읽음).
   *   - 학생 자신의 감염·복약·접종 이력은 묻지 않는다(다온·시현은 가상 인물). 실제 백신·약 이름은 쓰지 않았다.
   */
  // ======================================================================================================
  // 3. 항생제 내성과 예방접종 결정 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('antibiotic-vaccine', [10, 11, 12]);
    const LOOP = ['항생제를 쓴다', '약한 균이 먼저 죽는다', '견디는 균이 살아남는다', '살아남은 균이 늘어난다'];
    // 가상 지역 넷의 항생제 사용 정도와 내성균 비율(예시 자료, 실제 통계 아님)
    const RES = [['사용 적은 지역', 10], ['사용 보통 지역', 20], ['사용 많은 지역', 35], ['사용 아주 많은 지역', 45]];
    const RCHART = (more = {}) => Object.assign({ type: 'line', mode: 'read', title: '항생제 사용 정도별 내성균 비율(예시 자료, 실제 통계 아님)', unit: '%', xLabel: '지역(사용 정도)', yLabel: '내성균 비율', data: RES }, more);
    const PILLS = { text: '다온이는 목이 아파 진료를 받고 항생제 5일치를 처방받았다. 사흘째 목이 많이 나았는데 이틀치가 남았다. 감기 기운이 있는 친구 시현이가 "남은 거 나 줘"라고 한다.', who: '다온', motif: 'house', choices: [
      { id: 'finish', text: '처방대로 끝까지 먹고 시현이에게는 주지 않는다', result: '다온이는 남은 이틀치를 마저 먹는다.', impact: [{ who: '다온', text: '처방대로 치료를 마친다', tone: 1 }],
        next: { text: '시현이가 "아깝잖아, 한 알만"이라며 서운해한다.', choices: [
          { id: 'explain', text: '"네 감기엔 안 들을 수 있어, 진료받아 보자"고 말한다', result: '시현이가 고개를 갸웃하며 듣는다.', impact: [{ who: '시현', text: '맞지 않는 약을 먹지 않는다', tone: 1 }],
            next: { text: '시현이가 "병원 가서 항생제 달라고 하면 주잖아"라고 한다.', choices: [
              { id: 'ask', text: '"증상을 말하고 필요한지는 의사에게 물어보자"고 한다', result: '시현이는 진료에서 항생제가 필요 없다는 설명을 듣고 쉬며 낫는다.', impact: [{ who: '시현', text: '필요 없는 항생제를 피한다', tone: 1 }], ending: '항생제는 필요한 사람에게, 필요한 만큼, 처방대로 쓸 때 힘을 지킨다.' },
              { id: 'demand', text: '"그럼 꼭 달라고 해"라고 한다', result: '시현이는 감기인데도 항생제를 달라고 조른다.', impact: [{ who: '시현', text: '듣지 않는 약을 원하게 된다', tone: -1 }], ending: '듣지 않는 병에 쓰는 항생제는 내성균에게 기회를 준다.' }] } },
          { id: 'give', text: '서운하지 않게 한 알만 준다', result: '시현이는 한 알을 먹었지만 감기는 그대로다.', impact: [{ who: '시현', text: '맞지 않는 약을 먹는다', tone: -1 }], ending: '내 처방약은 내 병에 맞춘 것이라 한 알도 나누지 않는다.' }] } },
      { id: 'share', text: '나았으니 남은 약을 시현이에게 준다', result: '시현이는 약을 먹었지만 감기는 그대로다.', impact: [{ who: '시현', text: '맞지 않는 약을 먹는다', tone: -1 }],
        next: { text: '이틀 뒤 다온이의 목이 다시 아프다.', choices: [
          { id: 'clinic', text: '다시 진료를 받고 약을 끊은 일을 말한다', result: '의사가 상태를 다시 보고 치료를 정한다.', impact: [{ who: '다온', text: '다시 치료를 받는다', tone: 0 }],
            next: { text: '의사가 남은 약을 어떻게 했는지 묻는다.', choices: [
              { id: 'honest', text: '친구에게 준 것까지 사실대로 말한다', result: '의사가 시현이도 진료받게 하라고 안내한다.', impact: [{ who: '시현', text: '진료로 이어진다', tone: 1 }], ending: '실수했어도 사실대로 말하면 다음 치료가 바로 선다.' },
              { id: 'hide', text: '혼날까 봐 숨긴다', result: '의사는 다온이가 약을 다 먹었다고 생각한다.', impact: [{ who: '다온', text: '치료 판단이 어긋날 수 있다', tone: -1 }], ending: '복약 사실을 숨기면 의사의 판단도 흔들린다.' }] } },
          { id: 'wait', text: '그냥 참아 본다', result: '목이 쉽게 낫지 않는다.', impact: [{ who: '다온', text: '치료가 늦어진다', tone: -1 }], ending: '처방을 다 마치지 않은 뒤의 증상은 혼자 참지 말고 다시 진료를 받는다.' }] } },
      { id: 'keep', text: '그만 먹고 남은 약은 다음에 아플 때 쓰려고 둔다', result: '서랍에 남은 약이 쌓인다.', impact: [{ who: '다온', text: '다음에 혼자 판단해 먹게 된다', tone: -1 }], ending: '남은 항생제는 다음 병에 맞지 않을 수 있어 폐의약품 수거함에 낸다.' }] };
    const PILLS_R = [{ id: 'resist', text: '덜 먹거나 나눠 먹으면 견딘 균이 내성을 키울 수 있다' }, { id: 'fit', text: '처방약은 그 사람의 그 병에 맞춘 것이다' }, { id: 'waste', text: '남은 약은 아까우니 나눠 먹는 게 낫다', why: '아까움보다 맞지 않는 약을 먹는 위험이 커요.' }, { id: 'cold', text: '감기도 항생제를 먹으면 빨리 낫는다', why: '감기는 대부분 바이러스 때문이라 항생제가 듣지 않아요.' }];

    MODS.push(
      M({
        id: 'intro.resist-life', type: 'intro', title: '내성균이 늘어나는 순환',
        method: '내성균이 늘어나는 순환', tool: 'lifecycle', minutes: 7,
        levels: { easy: '교사가 단계 3개(항생제 쓰기·약한 균 죽음·강한 균 생존)만 먼저 놓아 보인다.', base: '네 단계가 고리로 이어지는 시연을 보고 한 바퀴를 말로 따라간다.', challenge: '고리를 끊을 수 있는 단계와 방법(필요할 때만·처방대로)을 짚어 말한다.' },
        intro: {
          teacher: '"항생제를 쓰면 균이 다 죽을까요? 시연을 보며 한 바퀴 따라가 봐요." 시연 단추로 네 단계가 고리에 놓이는 모습을 보여 주고, \'차례대로 따라가 보기\'로 고리를 한 번 돈다. "항생제를 세게, 자주 먹을수록 균이 더 잘 없어진다"는 말이 나오면 "자주 쓸수록 살아남는 균은 어떤 균일까요?"라고 되묻는다. 오늘은 이 고리를 끊는 사용 습관과 예방접종 결정을 함께 다룬다고 밝힌다.',
          student: '항생제를 쓸 때 균에게 생기는 일을 고리 차례대로 놓고, 내성균이 어떻게 늘어나는지 따라가 보세요.',
          demo: { tool: 'lifecycle', options: { mode: 'order', center: '내성균이 늘어나는 순환', slots: 4, cards: [LOOP[2], LOOP[0], LOOP[3], LOOP[1]] }, sequence: [{ order: LOOP }] },
          art: { draw: 'a paper ring of four stations with small round paper germs, most fading away after a pill capsule passes, a few tough spiky ones surviving and multiplying around the circle', banner: '살아남은 균이 늘어나요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '내성 과정은 단순화한 설명이다. 질병관리청 항생제 내성 안내로 확인한다(사람 확인).',
      }),
      M({
        id: 'intro.germ-body', type: 'intro', title: '감염 부위와 원인 짐작',
        method: '감염 부위와 원인 짐작', tool: 'body', minutes: 7,
        levels: { easy: '교사가 부위 2개(코·방광)를 짚는 시연을 보인다.', base: '부위 3개(코·입 안쪽 목·방광)를 차례로 짚고, 원인이 세균인지 바이러스인지 짐작해 손을 든다.', challenge: '부위만으로는 원인을 알 수 없어 진료·검사가 필요한 까닭을 말한다.' },
        intro: {
          teacher: '"감기는 코, 인후염은 목 안쪽, 요로감염은 방광 쪽에 생겨요. 몸 그림에서 짚어 볼까요?" 시연 단추로 부위가 골라지는 모습을 보여 준다. 몸 그림에 목구멍 칸이 없어 입을 눌러 목 안쪽이라고 말로 보탠다. "목이 아프면 세균이니까 항생제를 먹어야 한다"는 말이 나오면 "목이 아픈 까닭이 바이러스일 수도 있을까요? 그건 누가 어떻게 가려낼까요?"라고 되묻는다. 부위가 같아도 원인은 다를 수 있다는 점을 짚는다. 학생 자신의 병력을 묻지 않는다.',
          student: '몸 그림에서 감기·인후염·요로감염이 생기는 부위를 찾고, 원인이 세균일지 바이러스일지 짐작해 보세요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['코', '입', '기관', '폐', '방광', '위'], jobs: { 코: '감기가 시작되는 곳', 입: '인후염이 생기는 목 안쪽과 이어진 곳', 방광: '요로감염이 생기는 곳' }, names: true }, sequence: [{ sel: '코' }] },
          art: { draw: 'a paper human outline with soft glowing dots at the nose, the throat and the lower belly, a paper magnifying glass and a small test tube beside it asking which germ', banner: '부위는 같아도 원인은 달라요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: 'body 교구에 목구멍 칸이 없어 인후염은 입 칸으로 짚었다. 부위와 원인 설명은 일반적인 것이며 진단은 의료진이 한다.',
      }),

      M({
        id: 'activity.drug-sort', type: 'activity', title: '항생제가 듣는 병 가르기',
        method: '항생제가 듣는 병 가르기', tool: 'sortboard', minutes: 16,
        levels: { easy: '병 카드 4장을 나누고, 틀린 바구니에 넣으면 바로 까닭이 나온다.', base: '병 카드 6장을 나누고, 세균·바이러스의 특징 카드와 내 행동 카드까지 가른다.', challenge: '헷갈리는 카드가 더해지고, 고른 근거를 짝에게 설명한다.' },
        activity: {
          title: '듣는 병, 듣지 않는 병', tool: 'sortboard',
          teacher: '"항생제는 세균을 겨냥한 약이에요. 그럼 감기에는 들을까요?" 카드를 넣을 때마다 "이 병의 원인은 주로 세균인가요, 바이러스인가요?"라고 묻는다. "독감은 심한 병이니까 항생제가 필요하다"는 학생에게 "심한 정도와 원인은 같은 것일까요?"라고 되묻는다. \'진단받음\'이 붙은 카드처럼, 세균 감염인지는 진료와 검사로 정한다는 점을 짚는다.',
          task: '병 카드를 항생제가 듣는 병과 듣지 않는 병 바구니에 나누고, 근거와 행동까지 가려요.', levels: { easy: {}, base: {}, challenge: { shuffle: true } },
          items: [
            BOARDQ('병 카드를 항생제가 듣는 병·듣지 않는 병 바구니에 나누세요.', ['항생제가 듣는 병', '항생제가 듣지 않는 병'], [
              ['세균성 인후염(검사로 확인)', '세균성 폐렴(진단받음)', '요로감염(세균, 진단받음)'],
              ['감기', '독감', '바이러스성 장염'],
            ], { k: 2, hard: [['상처가 세균에 감염됨(진단받음)'], ['목이 아픈 감기']], d: 0.3 }),
            BOARDQ('특징 카드를 세균·바이러스 바구니에 나누세요.', ['세균', '바이러스'], [
              ['항생제로 죽일 수 있다', '혼자서도 늘어나는 작은 생물이다'],
              ['항생제가 듣지 않는다', '몸의 세포 안에 들어가야 늘어난다'],
            ], { k: 1, hard: [['항생제를 견디는 것이 생길 수 있다'], ['감기·독감의 주된 원인이다']], d: 0.35 }),
            BOARDQ('행동 카드를 바른 사용·내성을 키움 바구니에 나누세요.', ['바른 사용', '내성을 키움'], [
              ['처방받은 대로 끝까지 먹는다', '필요한지 의사에게 묻는다', '남은 약은 수거함에 낸다'],
              ['감기에 항생제를 달라고 조른다', '나아지면 혼자 판단해 끊는다', '남은 약을 가족과 나눈다'],
            ], { k: 2, d: 0.3, more: { conclude: '항생제는 세균 감염에만, 의사가 판단해, 처방대로 끝까지. 이 세 가지가 내성 고리를 끊어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"감기에 걸렸으니 항생제를 먹어야겠다"는 말에 근거를 들어 답하는 한 문장을 쓰세요.' }] },
        notes: '병 분류는 일반 설명이다(사람 확인). 학생 자신의 병력·복약 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.stop-dilemma', type: 'activity', title: '나아진 뒤 남은 약 갈림길',
        method: '나아진 뒤 남은 약 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길(끝까지 먹기·나눠 주기·남겨 두기)만 고르고 근거 카드를 고른다.', base: '두 번째 갈림길(서운해하는 친구)까지 결과를 따라가고 근거 카드를 고른다.', challenge: '세 번째 갈림길까지 가 보고, 다른 길도 끝까지 가 본 뒤 근거를 견준다.' },
        activity: {
          title: '남은 이틀치 앞에서', tool: 'dilemma',
          teacher: '"사흘 만에 많이 나았는데 약이 이틀치 남았어요. 친구는 달라고 해요. 다온이는 어떻게 할까요?" 갈림길마다 "이 선택으로 살아남는 균은 어떻게 될까요? 친구의 감기에는 그 약이 맞을까요?"라고 묻는다. "나았으면 끊는 게 몸에 덜 부담된다"는 학생에게 "증상이 나아진 것과 처방한 치료가 끝난 것은 같은 걸까요? 끊어도 될지는 누구에게 물을까요?"라고 되묻는다. 처방약은 그 사람의 그 병에 맞춘 것이라 나누지 않는다는 점을 짚는다.',
          task: '다온이의 선택을 끝까지 따라가 결과를 보고, 항생제를 바르게 쓰는 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL123('다온이가 되어 내성을 키우지 않는 길을 고르고, 근거 카드를 고르세요.', PILLS, [['finish', 'explain', 'ask']], PILLS_R, ['resist', 'fit'], { d: 0.4, opt: { title: '남은 항생제(가상)' } }),
            EXPLOREQ('남은 약 장면에서 \'나눠 준다\'로 시작한 길과 \'끝까지 먹는다\'로 시작한 길을 끝까지 가 보고 견주세요.', PILLS, PILLS_R, ['두 길의 끝 장면을 모두 보았다', '두 길에서 시현이에게 생긴 일을 견주었다', '실수한 뒤 바로잡을 수 있는 지점을 찾았다'], { d: 0.35 }),
            EXPLOREQ('\'남겨 둔다\' 길과 다른 길 하나를 끝까지 가 보고, 남은 약을 어떻게 처리해야 하는지 견주세요.', PILLS, PILLS_R, ['남겨 둔 길의 끝 장면을 보았다', '다른 길 하나도 끝까지 보았다', '남은 약을 낼 곳(폐의약품 수거함)을 찾았다'], { d: 0.4, more: { conclude: '나아져도 처방대로 마치고, 남은 약은 나누거나 두지 않고 수거함에 내요. 끊어야 할 것 같으면 혼자 정하지 않고 의사·약사에게 물어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '시현이에게 남은 약을 주지 않으면서 서운하지 않게 할 말을 한 문장으로 쓰세요.' }] },
        notes: '다온·시현은 가상 인물이다. 복약 기간·중단 여부는 처방한 의사·약사가 정한다는 원칙으로만 다룬다(사람 확인).',
      }),
      M({
        id: 'activity.vaccine-decide', type: 'activity', title: '접종 결정 사례 판단',
        method: '접종 결정 사례 판단', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 결정 근거를 쓴다(문항마다 시작 문장 제공).', base: '다온이의 결정 근거를 네 문장으로 쓰고 기준표(이익·위험·출처·대처)를 점검한다.', challenge: '각 문항에 기준이 하나 더해지고(반대 입장·출처 비교), 반대 입장을 공정하게 정리한다.' },
        activity: {
          title: '다온이의 접종 고민', tool: 'rubric-writing',
          teacher: '"가상 인물 다온이가 대학 기숙사 입소를 앞두고 권장 예방접종을 받을지 고민해요. 인터넷에서 \'부작용 무섭다\'는 글을 봤대요. 무엇을 근거로 결정하면 좋을까요?" 쓰기 전에 기준표 네 항목(이익·위험·출처·대처)을 함께 읽는다. "아는 사람이 맞고 아팠대"만 근거로 쓴 학생에게 "한 사람의 경험과 공식 기관의 자료는 무엇이 다를까요?"라고 묻는다. 접종 결정은 공식 출처로 확인하고 의료진과 상의해 내리는 것이며, 반대 입장의 걱정도 존중하며 다룬다는 점을 짚는다. 학생 자신의 접종 이력은 묻지 않는다.',
          task: '다온이의 접종 고민을 읽고, 이익·위험·출처·대처를 따져 결정 근거를 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('다온이의 접종 결정 근거를 쓰고 기준표로 점검하세요.', '다온이가 접종을 받을지 정할 때 따질 근거를 네 문장으로 쓰세요(이익·위험·출처·대처).', ['접종으로 얻는 이익을 썼다', '걱정되는 위험을 썼다', '확인할 공식 출처를 썼다', '이상반응이 생겼을 때 대처를 썼다'], { min: 60, max: 400, sent: [3, 6], starter: '다온이는 접종으로 ~을 얻을 수 있다. 걱정되는 것은 ~', plus: '의료진과 상의할 점을 썼다', sample: '다온이는 접종으로 기숙사 생활 중 감염병을 막거나 가볍게 지날 수 있다. 걱정되는 것은 접종 뒤 열이나 통증 같은 이상반응이다. 질병관리청 같은 공식 기관의 안내로 이익과 위험을 확인한다. 이상반응이 생기면 쉬면서 기록하고, 심하면 의료기관에 연락한다.' }),
            RWQ('친구의 걱정에 답하는 글을 쓰고 기준표로 점검하세요.', '친구가 "인터넷에서 부작용 글 봤어, 맞지 마"라고 해요. 다온이가 할 답을 두세 문장으로 쓰세요.', ['친구의 걱정을 먼저 인정했다', '글의 출처를 확인하자고 했다', '공식 기관이나 의료진에게 묻자고 했다'], { min: 30, max: 250, sent: [2, 4], starter: '걱정해 줘서 고마워. 그런데 ~', plus: '한 사람의 경험과 자료의 차이를 짚었다' }),
            RWQ('접종을 망설이는 입장을 공정하게 정리하세요.', '접종을 망설이는 사람의 입장과 그 까닭을 두세 문장으로 공정하게 정리하세요(비웃지 않기).', ['망설이는 까닭을 하나 이상 썼다', '그 까닭을 확인할 방법을 썼다', '비난하는 말을 쓰지 않았다'], { min: 30, max: 250, sent: [2, 4], starter: '접종을 망설이는 사람은 ~ 때문에 걱정한다.', plus: '그 걱정에 답할 공식 자료를 떠올렸다', more: { conclude: '좋은 결정은 이익과 위험을 함께 보고, 믿을 만한 출처로 확인하고, 생길 수 있는 일에 대처를 준비하는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다온이의 결정을 기준별로 정리하세요.', columns: ['기준', '다온이가 따질 것'], cells: [['이익', ''], ['위험', ''], ['출처', ''], ['대처', '']] }] },
        notes: '사례는 가상이다. 특정 백신 이름·접종 일정·이상반응 빈도는 쓰지 않는다 — 실제 정보는 질병관리청 예방접종도우미로 교사가 확인한다(사람 확인).',
      }),
      M({
        id: 'activity.reaction-order', type: 'activity', title: '접종 뒤 이상반응 대처 순서',
        method: '접종 뒤 이상반응 대처 순서', tool: 'kitchen', minutes: 16,
        levels: { easy: '대처 카드 3장(살피기·쉬기·기록)을 차례로 놓는다.', base: '대처 카드 4장을 차례로 놓고, 지켜볼 신호와 바로 119에 알릴 신호를 나누고, 기록할 것을 고른다.', challenge: '같은 문항을 함정 카드가 섞인 판으로 풀고, 응급 신호를 고른 근거를 짝에게 설명한다.' },
        activity: {
          title: '접종 뒤 이렇게 해요', tool: 'kitchen',
          teacher: '"가상 인물 시현이가 접종을 받았어요. 접종 뒤에는 무엇부터 할까요?" 카드를 놓을 때마다 "이 단계를 건너뛰면 무엇을 놓칠까요?"라고 묻는다. "열이 조금 나도 바로 응급실에 가야 한다"거나 반대로 "숨이 차도 좀 쉬면 낫는다"는 학생에게 "지켜볼 신호와 바로 도움을 불러야 할 신호는 무엇이 다를까요?"라고 되묻는다. 숨쉬기 어려움·얼굴과 입술 붓기·의식이 흐려짐은 기다리지 않고 119라는 점을 짚는다.',
          task: '접종 뒤 대처 카드를 차례로 놓고, 지켜볼 신호와 바로 알릴 신호를 나눠요.', levels: { easy: {}, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('접종 뒤 대처 카드를 차례대로 놓으세요.', ['접종 뒤 잠시 머물며 상태를 살핀다', '그날은 무리하지 않고 쉰다', '증상과 시각을 기록한다', '심하거나 오래가면 의료기관에 연락한다'], { k: 3, traps: ['아파도 참고 바로 운동한다'], d: 0.3 }),
            SORTQ('신호 카드를 지켜보며 쉴 신호와 바로 119에 알릴 신호로 나누세요.', ['지켜보며 쉴 신호', '바로 119에 알릴 신호'], [
              ['접종한 팔이 뻐근하다', '조금 피곤하다', '열이 살짝 난다'],
              ['숨쉬기가 어렵다', '얼굴·입술이 붓는다', '불러도 반응이 흐리다'],
            ], { k: 2, d: 0.35, opt: { groups: false } }),
            PICKQ('증상을 기록할 때 적을 것만 고르세요.', ['증상이 시작된 시각', '어떤 증상인지', '증상이 나아지는지 심해지는지'], ['그날 본 영상 제목', '같은 반 친구 이름'], { d: 0.3, opt: { basket: '기록할 것' }, more: { conclude: '살피고, 쉬고, 기록하고, 심하면 연락해요. 숨쉬기·붓기·의식의 이상은 기다리지 않고 119예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '접종 뒤 증상 기록표를 만들어 보세요(가상 인물 시현이 기준).', columns: ['시각', '증상', '나아짐·심해짐'], cells: [['', '', ''], ['', '', '']] }] },
        notes: '이상반응 대처는 일반 안내다. 실제 기준은 질병관리청 예방접종도우미로 확인한다(사람 확인). 학생 자신의 접종 경험을 묻지 않는다.',
      }),

      M({
        id: 'wrap.resist-chart', type: 'wrap', title: '예시 자료로 내성 경향 읽기',
        method: '예시 자료로 내성 경향 읽기', tool: 'chart', minutes: 10,
        levels: { easy: '교사가 점 값을 짚어 주며 가장 높은 지역을 함께 읽는다.', base: '꺾은선을 읽고 자료로 말할 수 있는 결론을 고른다.', challenge: '상관과 인과의 차이를 활동지에 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"예시 자료예요. 항생제를 많이 쓰는 지역일수록 내성균 비율은 어떻게 보이나요?" 그래프를 함께 읽고 출구 질문으로 넘어간다. "그러니까 항생제가 내성의 유일한 원인이라는 게 증명됐다"는 학생에게 "이 그래프는 함께 늘어나는 모습을 보여 줘요. 원인이라고 말하려면 무엇을 더 알아야 할까요?"라고 되묻는다. 그래도 오늘 본 순환 고리가 이 경향을 설명하는 까닭이 된다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: RCHART({ question: '내성균 비율이 가장 높은 지역은?', choices: RES.map((x) => x[0]) }), prompt: '예시 자료에서 내성균 비율이 가장 높은 지역을 고르세요.', target: { pick: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '이 예시 자료로 말할 수 있는 결론을 고르세요.', options: ['사용이 많은 지역일수록 내성균 비율이 높게 나타났다', '항생제가 내성의 유일한 원인임이 증명됐다', '항생제 사용과 내성은 관계가 없다'], answer: 0, difficulty: 0.25, explain: '함께 늘어나는 경향은 보이지만, 그래프 하나로 유일한 원인을 증명할 수는 없어요.' },
            { type: 'short', prompt: '내성 고리를 끊기 위해 내가 지킬 사용 원칙 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내성 경향 읽기',
          items: [
            { type: 'short', prompt: '그래프에서 읽은 경향을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '이 경향을 "원인"이라고 말하려면 더 알아야 할 것을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '그래프는 수업용 예시 자료다(실제 통계 아님).',
      }),
      M({
        id: 'wrap.rule-check', type: 'wrap', title: '나의 약 사용 원칙 점검',
        method: '나의 약 사용 원칙 점검', tool: 'timer', minutes: 10,
        levels: { easy: '앞의 두 원칙(끝까지·나누지 않기)부터 함께 읽고 표시한다.', base: '세 원칙을 스스로 점검하고 표시한다.', challenge: '활동지에 가족과 나눌 원칙 한 가지와 전할 말을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 약 사용 원칙을 앞으로 지킬지 스스로 점검해 봐요. 점검은 내가 다짐하는 것이라 제출해도 채점하지 않아요." 원칙을 하나씩 읽고 표시하게 한다. "가족이 먹던 항생제를 같이 먹은 적이 있어요" 같은 말이 나오면 개인 사례를 더 묻지 않고 "그럴 땐 다음에 약사에게 먼저 물어보면 돼요"라고 다음 행동으로 잇는다. 원칙을 가족과 나누면 집 안 서랍의 남은 약도 줄일 수 있다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 약 사용 원칙' }, prompt: '앞으로 지킬 약 사용 원칙을 스스로 점검하고 표시하세요.', target: { selfCheck: ['처방받은 대로 끝까지 먹는다', '남은 약을 남에게 주지 않고 수거함에 낸다', '감기에 항생제를 먼저 달라고 하지 않는다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '항생제를 먹다 나아졌을 때 알맞은 행동을 고르세요.', options: ['바로 끊고 남은 약은 다음을 위해 둔다', '처방대로 마치고, 끊어야 할지 궁금하면 의사·약사에게 묻는다', '남은 약을 아픈 가족에게 준다'], answer: 1, difficulty: 0.15, explain: '나아진 것과 치료가 끝난 것은 달라요. 혼자 정하지 않고 처방한 사람에게 물어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 약 사용 원칙',
          items: [
            { type: 'check', prompt: '이번 주에 해 볼 것에 표시하세요.', options: ['집에 남은 약이 있는지 보호자와 확인하기', '남은 약을 폐의약품 수거함에 내기', '약 봉투의 복용 안내 읽기', '궁금한 점을 약사에게 묻기'] },
            { type: 'short', prompt: '가족과 나눌 약 사용 원칙 한 가지와 전할 말을 쓰세요.' },
          ],
        },
      }),
    );
  }

  /* 사람 확인(sleep-debt): (근거 파일에 세부 없음 — 수업 전 질병관리청 국가건강정보포털·국민건강보험공단 건강iN 청소년 수면 안내에서 확인)
   *   - [intro.debt-clock · activity.plan-board · wrap.strategy-write] 잠이 모자란 날이 이어지면 피로가 쌓이고(수면 부채), 주말에 몰아 자도 평일 리듬이 더 밀릴 수 있다
   *   - [intro.debt-chart · activity.effect-web] 잠이 부족하면 집중·기억 정리·기분·면역·졸음 사고 위험에 영향을 줄 수 있다(그래프 값은 예시 자료)
   *   - [activity.exam-dilemma] 잠자는 동안 낮에 공부한 내용이 정리된다는 일반 설명
   *   - [activity.caffeine-sort] 카페인은 졸음을 잠시 가릴 뿐 잠을 대신하지 못한다 / 짧은 낮잠은 도움이 될 수 있으나 길거나 늦은 낮잠은 밤잠을 방해할 수 있다 / 아침 햇빛·가벼운 스트레칭은 깨는 데 도움 / 자기 전 밝은 화면은 잠들기를 늦출 수 있다
   *   - [wrap.wind-timer] 잠들기 전 화면 끄기·내일 할 일 적기·천천히 숨 고르기 루틴(수면 위생 일반 안내)
   *   - 수면 시간 수치는 쓰지 않았다(체계도 source). 판의 시각은 가상 인물의 기록이고 '권장 시간'이 아니다.
   * 계획대로 못 한 것:
   *   - intro 의 levels(시계 2개/4개·자료 값 표시/숨김)는 도입이 시연 하나뿐이라 교사 진행 방식으로 적었다.
   *   - activity.plan-board: kitchen match 는 칸 하나에 카드 한 장이라 '요일 칸 × 여러 일정' 대신 요일마다 그날 저녁의 중심 블록 하나를 짝짓는다. 쉬움 = 3쌍, 기본·도전 = 5쌍, 시험 주간 변형은 모든 단계의 셋째 문항(도전은 함정 카드 더함).
   *   - activity.effect-web: 쉬움 '가지 2개'는 문항 1의 쉬움 판에서 가지를 집중·기분 둘로 줄였다.
   *   - wrap.wind-timer: 정리 질문은 단계별 판이 없어 '구간 2개/3개'는 교사 진행 방식이다(판은 세 구간).
   */
  // ======================================================================================================
  // 4. 수험 생활의 수면 부채 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('sleep-debt', [10, 11, 12]);
    // 가상 인물 유진의 한 주 잠든 시각(가상 기록 — 권장 시각이 아님)
    const WEEK = { text: '시험 주간 셋째 날 밤 10시. 태민은 월요일·화요일 모두 새벽 2시에 잤다. 오늘 아침에는 1교시 내내 졸았고, 내일은 가장 어려운 과목 시험이다.', who: '태민', motif: 'moon', choices: [
      { id: 'again', text: '어제처럼 새벽 2시까지 문제를 더 푼다', result: '자정이 넘자 같은 문제를 세 번 틀리고, 풀이가 머리에 들어오지 않는다.', impact: [{ who: '태민', text: '사흘째 잠이 모자라 피로가 더 쌓인다', tone: -1 }],
        next: { text: '목요일 아침, 알람을 두 번 끄고 겨우 일어났다. 시험까지 한 시간이 남았다.', choices: [
          { id: 'cram', text: '등굣길에 새로운 단원을 급히 훑는다', result: '본 내용이 뒤섞여 시험지에서 헷갈린다.', impact: [{ who: '태민', text: '아는 문제도 실수한다', tone: -1 }],
            next: { text: '시험이 끝난 금요일 밤, 주말이 시작됐다.', choices: [
              { id: 'binge', text: '토요일 오후 3시까지 몰아서 잔다', result: '일요일 밤에 잠이 오지 않아 다시 새벽까지 깨어 있다.', impact: [{ who: '태민', text: '월요일 아침이 더 힘들어진다', tone: -1 }], ending: '몰아서 자면 잠드는 리듬이 더 밀릴 수 있다.' },
              { id: 'steady', text: '평소보다 조금만 더 자고, 일어나는 시각을 크게 바꾸지 않는다', result: '일요일 밤에 제때 잠이 온다.', impact: [{ who: '태민', text: '다음 주를 덜 지친 채 시작한다', tone: 1 }], ending: '부채는 한 번에 갚기보다 리듬을 되찾으며 줄인다.' }] } },
          { id: 'review', text: '어제 틀린 문제만 다시 보고 들어간다', result: '조금 차분해지지만 머리는 여전히 무겁다.', impact: [{ who: '태민', text: '졸음 때문에 마지막 문제를 서두른다', tone: 0 }], ending: '아침의 좋은 선택도 사흘 쌓인 피로를 다 덮지는 못한다.' }] } },
      { id: 'stop', text: '오늘 푼 것만 정리하고 평소보다 일찍 잔다', result: '아직 덜 본 단원이 마음에 걸리지만 불을 끈다.', impact: [{ who: '태민', text: '모자랐던 잠을 조금 되찾는다', tone: 1 }],
        next: { text: '목요일 아침, 덜 본 단원이 하나 남아 있다는 것이 떠오른다.', choices: [
          { id: 'core', text: '자주 나오는 부분만 골라 짧게 본다', result: '어젯밤 정리한 내용이 또렷하게 떠오른다.', impact: [{ who: '태민', text: '집중해서 시험을 본다', tone: 1 }],
            next: { text: '시험이 끝난 금요일 밤, 주말이 시작됐다.', choices: [
              { id: 'plan', text: '다음 시험 기간에는 잠드는 시각부터 정해 두기로 한다', result: '주말에 다음 달 공부 계획을 잠 시각에 맞춰 짠다.', impact: [{ who: '태민', text: '다음 시험 주간에 부채가 덜 쌓인다', tone: 1 }], ending: '잠을 먼저 정하고 공부 시간을 짜면 부채가 쌓이지 않는다.' },
              { id: 'reward', text: '잘 봤으니 주말 이틀 밤을 새워 논다', result: '월요일 아침 다시 1교시에 존다.', impact: [{ who: '태민', text: '되찾은 리듬이 깨진다', tone: -1 }], ending: '시험이 끝나도 잠 리듬은 이어진다.' }] } },
          { id: 'panic', text: '불안해서 새벽 4시에 일어나 그 단원을 처음부터 본다', result: '다시 잠이 모자라 시험 중간에 집중이 끊긴다.', impact: [{ who: '태민', text: '일찍 잔 효과가 줄어든다', tone: -1 }], ending: '잠을 앞당겨 줄이는 것도 결국 잠을 줄이는 일이다.' }] } }] };
    const WEEK_R = [{ id: 'debt', text: '모자란 잠은 하루로 끝나지 않고 다음 날로 쌓인다' }, { id: 'sort', text: '잠자는 동안 낮에 공부한 내용이 정리된다' }, { id: 'rhythm', text: '일어나는 시각을 지키면 리듬을 되찾기 쉽다' }, { id: 'more', text: '공부 시간이 길수록 점수는 무조건 오른다', why: '같은 줄을 여러 번 읽은 장면처럼, 지친 머리로 보낸 시간은 덜 남아요.' }, { id: 'weekend', text: '주말에 몰아 자면 한 주 부채가 다 갚아진다', why: '몰아 자면 일요일 밤 잠들기가 늦어져 다음 주 부채가 다시 시작될 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.debt-clock', type: 'intro', title: '한 주 잠든 시각 시계 기록',
        method: '한 주 잠 시각 시계 기록', tool: 'clock', minutes: 7,
        levels: { easy: '평일 하루와 주말 하루, 시계 두 개만 함께 읽는다.', base: '월·수·금·토 네 시각을 차례로 보며 잠든 시각이 밀리는 흐름을 찾는다.', challenge: '밀리는 흐름에 이름(예: 주말 밀림)을 붙이고 그 까닭을 말한다.' },
        intro: {
          teacher: '"가상 수험생 유진이의 한 주 기록이에요. 잠든 시각을 시계로 옮기면 무엇이 보일까요?" 시연 단추로 월요일 밤 12시, 수요일 밤 12시 30분, 금요일 새벽 1시 30분, 토요일 새벽 3시를 차례로 보여 준다. "한두 시간 늦게 자는 건 별일 아니잖아요"라는 말이 나오면 "하루씩 밀린 시각이 주말에는 어디까지 갔나요? 월요일 아침에는 몇 시에 일어나야 하죠?"라고 되묻는다. 하루하루 조금씩 모자란 잠이 쌓이는 것을 \'수면 부채\'라고 부른다는 점과, 오늘은 내 기록이 아니라 유진이의 기록으로 생각한다는 점을 밝힌다.',
          student: '가상 수험생 유진이의 잠든 시각이 한 주 동안 어떻게 바뀌는지 시계로 보고, 시각이 밀리는 흐름을 찾아보세요.',
          demo: { tool: 'clock', options: { minuteStep: 30, showDigital: true }, sequence: [{ h: 12, m: 0 }, { h: 12, m: 30 }, { h: 1, m: 30 }, { h: 3, m: 0 }] },
          art: { draw: 'four paper alarm clocks in a row on a desk, their hands creeping later and later, a calendar strip marked Monday to Saturday, a stack of workbooks and a crescent moon', banner: '잠든 시각이 밀려요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '시계의 시각은 가상 인물의 기록이다. 학생에게 자기 잠든 시각을 발표시키거나 걷지 않는다. 몇 시간을 자야 하는지 수치는 이 모듈에서 다루지 않는다(교사가 공식 안내를 확인해 덧붙일 수 있다).',
      }),
      M({
        id: 'intro.debt-chart', type: 'intro', title: '잠이 모자란 날과 집중 점수',
        method: '예시 자료로 수면과 집중 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '막대 끝 값을 함께 읽으며 처음과 마지막 날을 견준다.', base: '값을 가린 채 꺾은선의 흐름(언제부터 떨어지는지)을 말한다.', challenge: '이 예시 자료가 어떻게 만들어졌는지 모를 때 생기는 한계(누구를·어떻게 쟀는지)를 말한다.' },
        intro: {
          teacher: '"이 그래프는 실제 통계가 아니라 수업용 예시 자료예요. 잠이 모자란 날이 이어질 때 집중 과제 점수가 어떻게 바뀌는지 꾸며 본 것이에요." 시연 단추로 가장 낮은 날을 고르는 모습을 보인다. "첫날은 거의 안 떨어졌으니 하루쯤은 괜찮다"는 말이 나오면 "첫날이 아니라 넷째, 다섯째 날을 보세요. 부채는 하루가 아니라 쌓이는 거예요"라고 답한다. 예시 자료만으로 실제 사람의 결과를 단정할 수 없다는 점도 함께 짚는다.',
          student: '예시 자료(실제 통계 아님) 꺾은선에서 잠이 모자란 날이 이어질수록 집중 점수가 어떻게 바뀌는지 읽어 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '잠이 모자란 날이 이어질 때 집중 점수(예시 자료, 실제 통계 아님)', unit: '점', xLabel: '이어진 날', yLabel: '집중 점수', data: [['1일째', 90], ['2일째', 86], ['3일째', 78], ['4일째', 70], ['5일째', 64]], question: '집중 점수가 가장 낮은 날은?', choices: ['1일째', '3일째', '5일째'] }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper line graph sloping down across five days, a tired paper student leaning on a desk beside it, small yawning clouds drifting above', banner: '부채는 쌓여요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 예시 자료다. 수면이 집중에 영향을 준다는 일반 설명은 사람 확인 목록(질병관리청 국가건강정보포털)으로 확인한다.',
      }),

      M({
        id: 'activity.exam-dilemma', type: 'activity', title: '시험 주간 사흘째 밤',
        method: '시험 전날 밤샘 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길 하나(오늘 밤)에서 고르고 결과와 근거 카드를 본다.', base: '목요일 아침까지 갈림길 둘을 따라가고 근거 카드를 고른다.', challenge: '주말까지 갈림길 셋을 따라간다. 둘째 문항에서 다른 끝 길도 가 보고 견준다.' },
        activity: {
          title: '시험 주간 사흘째 밤', tool: 'dilemma',
          teacher: '"태민이는 이틀 내리 새벽 2시에 잤어요. 오늘은 시험 주간 사흘째 밤이에요. 하루의 선택이 아니라 쌓인 잠을 생각하며 골라 봐요." 고른 뒤마다 "이 선택으로 피로가 쌓였나요, 줄었나요?"를 묻는다. "어차피 이틀 못 잤으니 오늘 하루 더 버티면 된다"는 학생에게 "사흘째 피로는 첫날 피로와 같을까요? 첫 길 결과의 같은 문제 세 번 틀리기를 다시 볼까요?"라고 되묻는다. 주말에 몰아 자는 길이 일요일 밤에 어떻게 이어지는지도 끝까지 확인하게 한다.',
          task: '태민이의 선택을 이어 가며 쌓인 잠이 시험과 주말에 주는 결과를 따라가요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL123('태민이가 되어 시험 주간 사흘째 밤의 선택을 이어 가고, 그 길을 고른 근거 카드를 고르세요.', WEEK, [['stop', 'core', 'plan'], ['again', 'cram', 'steady']], WEEK_R, ['debt', 'sort'], { d: 0.35, opt: { title: '시험 주간 사흘째 밤', revealAfterCheck: true } }),
            EXPLOREQ('처음과 다른 길을 하나 더 끝까지 가 보고, 두 길의 결과를 견주며 점검하세요.', WEEK, WEEK_R, ['두 길의 목요일 아침 결과를 견주었다', '주말 선택이 다음 주에 미치는 영향을 확인했다'], { d: 0.4, more: { conclude: '오늘 밤의 선택은 다음 날뿐 아니라 주말과 다음 주까지 이어져요. 쌓인 잠은 리듬을 되찾으며 줄여요.' } }),
            DIL2('시험이 끝난 주말, 쌓인 잠을 줄이는 방법을 고르세요.', { text: '시험이 끝난 토요일 아침 8시, 태민은 평소 일어나는 시각에 눈을 떴다.', motif: 'sun', choices: [
              { id: 'back', text: '다시 잠들어 오후까지 잔다', result: '일요일 밤 잠이 오지 않는다.', impact: [{ who: '태민', text: '월요일 아침이 힘들다', tone: -1 }], ending: '몰아 자면 다음 밤의 잠이 밀린다.' },
              { id: 'up', text: '일어나 아침 햇빛을 쬐고 낮에 짧게 쉰다', result: '저녁이 되자 자연스럽게 졸음이 온다.', impact: [{ who: '태민', text: '리듬을 되찾는다', tone: 1 }],
                next: { text: '토요일 밤, 친구가 밤새 게임을 하자고 연락했다.', choices: [
                  { id: 'late', text: '새벽까지 함께한다', result: '되찾던 리듬이 다시 밀린다.', impact: [{ who: '태민', text: '피로가 다시 쌓인다', tone: -1 }], ending: '하루 밤샘이 이틀 동안 되찾은 리듬을 무너뜨린다.' },
                  { id: 'noon', text: '내일 낮에 하자고 시간을 바꾼다', result: '친구와 약속을 지키면서 제때 잔다.', impact: [{ who: '태민', text: '월요일을 가볍게 시작한다', tone: 1 }], ending: '약속 시간을 낮으로 옮기면 잠과 관계를 함께 지킨다.' }] } }] },
            [['up', 'noon']], [{ id: 'wake', text: '일어나는 시각을 지키는 것이 리듬을 되찾는 길이다' }, { id: 'all', text: '시험이 끝났으니 잠은 상관없다', why: '잠 리듬은 시험이 끝나도 다음 주로 이어져요.' }], ['wake'], { d: 0.3 }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '태민이가 시험 주간을 다시 맞는다면 가장 먼저 바꿀 선택 하나와 그 까닭을 쓰세요.' }] },
        notes: '가상 인물의 선택을 다룬다. 학생에게 자기 시험 기간 수면 습관을 발표시키지 않는다. 생활안전 caffeine-sleep(시험 전날 밤 하루)과 달리 여러 날 쌓인 수면 부채와 주말 리듬이 축이다.',
      }),
      M({
        id: 'activity.plan-board', type: 'activity', title: '잠을 지키는 한 주 배치',
        method: '공부와 잠의 주간 배치', tool: 'kitchen', minutes: 16,
        levels: { easy: '요일 칸 3개(월·화·수)에 블록을 짝짓고, 칸에 맞지 않으면 바로 알려 준다.', base: '요일 칸 5개(월~금)에 블록을 짝짓고 주간 점검표를 고른다.', challenge: '요일 칸 5개에 짝짓고, 시험 주간 변형 판에서 함정 카드 둘을 걸러 낸다.' },
        activity: {
          title: '잠을 지키는 한 주 배치', tool: 'kitchen',
          teacher: '"유진이의 학원 일정은 바꿀 수 없어요. 그 안에서 잠을 지키는 한 주를 짜 볼까요?" 규칙(학원이 늦게 끝나는 날은 짧은 복습만, 다음 날 시험이 있는 밤은 새 진도 대신 정리)을 칠판에 적고 짝짓게 한다. "학원 늦은 날에도 자습 두 시간을 더 넣으면 된다"는 학생에게 "그 두 시간은 어디서 가져오나요? 잠에서 빼면 다음 날은 어떻게 될까요?"라고 묻는다. 잠은 남는 시간에 넣는 블록이 아니라 먼저 놓는 블록이라는 점을 짚는다.',
          task: '유진이의 요일마다 그날 저녁의 중심 블록을 짝짓고, 시험 주간에 맞게 바꿔요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('규칙(학원이 늦게 끝나는 월·수는 짧은 복습, 학원 없는 화·목은 긴 자습, 금은 운동)을 보고 요일마다 저녁 블록을 짝지으세요.', [['월요일 저녁', '짧은 복습 후 제때 자기'], ['화요일 저녁', '긴 자습'], ['수요일 저녁', '학원 뒤 씻고 바로 자기'], ['목요일 저녁', '모의 문제 풀이'], ['금요일 저녁', '친구와 농구하기']], { k: 3, d: 0.3, opt: { autoMotif: false } }),
            CHECKQ('잠을 지키는 주간표가 맞는지 점검표에서 해당하는 것만 표시하세요.', '유진이의 주간표 점검', [
              ['first', '잠드는 시각을 먼저 정하고 나머지를 배치했다', true], ['late', '학원 늦은 날에 새 진도를 몰아 넣었다', false], ['wake', '평일 일어나는 시각이 크게 다르지 않다', true],
              ['move', '운동·쉼 블록이 한 주에 한 번 이상 있다', true], ['all', '주말에 잠을 몰아 자는 것으로 계획했다', false], ['screen', '잠자기 직전에 영상 시청 블록을 넣었다', false]], { k: 3, d: 0.3 }),
            MATCHQ('시험 주간(목요일 시험)에 맞게 바꾼 유진이의 저녁 블록을 짝지으세요.', [['월요일 저녁', '시험 범위 나누어 계획 세우기'], ['화요일 저녁', '긴 자습'], ['수요일 저녁', '틀린 문제만 다시 보고 자기'], ['목요일 저녁', '시험 뒤 일찍 쉬기'], ['금요일 저녁', '친구와 농구하기']], { k: 3, extra: ['수요일 밤샘 몰아 보기', '시험 전날 에너지 음료로 버티기'], d: 0.35, opt: { autoMotif: false }, more: { conclude: '시험 주간에도 잠드는 시각은 그대로 두고, 공부의 양이 아니라 내용(새 진도 → 정리)을 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '유진이의 시험 주간 계획에서 잠을 지키려고 바꾼 점을 정리하세요.', columns: ['요일', '평소 블록', '시험 주간 블록', '바꾼 까닭'], cells: [['월', '', '', ''], ['수', '', '', ''], ['목', '', '', '']] }] },
        notes: 'kitchen 의 짝(match) 판은 칸마다 카드 한 장이라, 요일마다 그날 저녁의 중심 블록 하나로 다룬다. 학생 자신의 학원 일정·가정 사정은 묻지 않는다(가상 인물 유진).',
      }),
      M({
        id: 'activity.caffeine-sort', type: 'activity', title: '깨어 있는 전략 가르기',
        method: '각성 전략 효과 가르기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 맞지 않는 바구니에 넣으면 바로 까닭을 알려 준다(장 수 보임).', base: '카드 8장 안팎을 나누고 조건이 붙은 전략도 따로 가른다.', challenge: '카드가 더해진 판에서 조건(언제·얼마나)에 따라 달라지는 전략을 가른다.' },
        activity: {
          title: '깨어 있는 전략 가르기', tool: 'sortboard',
          teacher: '"공부하다 졸릴 때 쓰는 방법들이에요. 잠깐 깨게 해 주는 것과 부채를 갚아 주는 것은 같을까요?" 바구니에 카드를 넣을 때마다 "이 방법은 잠을 대신하나요, 잠을 돕나요?"라고 묻는다. "에너지 음료 두 캔이면 잠 한 시간 아낀 것"이라는 학생에게 "음료가 졸음을 가렸을 때 쌓인 피로는 어디로 갔을까요?"라고 되묻는다. 짧은 낮잠처럼 조건에 따라 도움이 되기도, 밤잠을 방해하기도 하는 전략이 있다는 점을 짚는다.',
          task: '깨어 있으려고 쓰는 전략을 도움이 되는 편과 부작용이 큰 편으로 나누고, 조건이 붙는 전략도 가려요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('졸릴 때 쓰는 전략을 도움이 되는 편과 부작용이 큰 편으로 나누세요.', ['도움이 되는 편', '부작용이 큰 편'], [
              ['쉬는 시간에 일어나 몸을 편다', '아침에 햇빛을 쬔다', '찬물로 세수하고 자리를 옮긴다', '오후에 짧게 엎드려 쉰다'],
              ['밤 11시에 에너지 음료를 마신다', '졸음을 참으려고 커피를 겹쳐 마신다', '자기 전 침대에서 밝은 화면을 본다', '저녁 늦게 두세 시간 낮잠을 잔다'],
            ], { k: 2, hard: [['공부 자리를 밝게 한다'], ['쉬는 시간마다 단 음료를 찾는다']], d: 0.3 }),
            BOARDQ('각 전략이 쌓인 잠을 갚는지, 잠깐 깨어 있게만 하는지 나누세요.', ['쌓인 잠을 갚는 쪽', '잠깐 깨어 있게만 하는 쪽'], [
              ['평소보다 조금 일찍 잠자리에 든다', '일어나는 시각을 지켜 리듬을 되찾는다'],
              ['카페인 음료를 마신다', '시끄러운 음악을 크게 튼다', '찬물로 세수한다'],
            ], { k: 2, d: 0.3, more: { conclude: '카페인과 자극은 졸음을 잠시 가릴 뿐이에요. 부채는 잠으로만 줄어요.' } }),
            BOARDQ('조건에 따라 달라지는 전략을 알맞은 바구니에 나누세요.', ['시험 기간에 써 볼 만함', '언제·얼마나가 맞아야 함', '피하는 것이 나음'], [
              ['쉬는 시간마다 자리에서 일어나 걷기', '잠드는 시각을 미리 정해 두기'],
              ['점심 뒤 짧은 낮잠', '오후 이른 시간의 커피 한 잔'],
              ['시험 전날 밤샘', '밤늦게 고카페인 음료 마시기'],
            ], { k: 1, hard: [['아침 햇빛 쬐기'], ['주말 늦잠'], ['잠자리에서 영상 보기']], d: 0.4, more: { hints: ['같은 방법이라도 언제 하느냐에 따라 밤잠에 주는 영향이 달라져요.'] } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'언제·얼마나가 맞아야 함\' 바구니의 전략 하나를 골라, 어떤 조건이면 도움이 되고 어떤 조건이면 밤잠을 방해하는지 쓰세요.' }] },
        notes: '카페인·낮잠·빛의 효과는 일반 설명이다(사람 확인: 질병관리청 국가건강정보포털). 특정 음료 상품명을 쓰지 않는다. 카페인 시각 정하기는 생활안전(caffeine-sleep)에서 다루므로 여기서는 효과 가르기만 한다.',
      }),
      M({
        id: 'activity.effect-web', type: 'activity', title: '수면 부채의 영향 그물',
        method: '수면 부채의 영향 그물', tool: 'mindmap', minutes: 16,
        levels: { easy: '첫 문항은 집중·기분 가지 2개에만 카드를 단다(바로 피드백).', base: '집중·기분·몸의 방어력·사고 위험 가지 4개에 카드를 달고 연결 고리를 짝짓는다.', challenge: '가지 4개 + 카드가 더해지고, 되먹임 고리(결과가 다시 원인이 되는 고리)를 고른다.' },
        activity: {
          title: '수면 부채의 영향 그물', tool: 'mindmap',
          teacher: '"\'수면 부채\' 가운데에서 가지가 뻗어 나가요. 잠이 모자라면 무엇이 영향을 받을까요?" 카드를 달 때마다 "이것은 머리, 마음, 몸 가운데 어디에 가까운가요?"라고 묻는다. "졸리면 공부만 조금 안 될 뿐"이라는 학생에게 \'졸음운전·자전거 사고\' 카드와 \'짜증이 늘어 친구와 다툼\' 카드를 가리키며 "공부 말고 다른 곳까지 번지지 않나요?"라고 되묻는다. 마지막 문항에서 \'걱정 때문에 잠이 안 옴 → 잠이 모자람 → 더 걱정\'처럼 결과가 다시 원인이 되는 고리를 함께 찾는다.',
          task: '수면 부채가 미치는 영향을 가지에 달고, 영향끼리 이어지는 고리를 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            Object.assign(SORTQ('수면 부채가 미치는 영향 카드를 알맞은 가지에 다세요.', ['집중', '기분', '몸의 방어력', '사고 위험'], [
              ['같은 줄을 여러 번 읽는다', '수업 내용이 기억에 덜 남는다'],
              ['작은 일에도 짜증이 난다', '하고 싶은 마음이 줄어든다'],
              ['감기에 자주 걸리는 느낌이 든다', '몸이 쉽게 지친다'],
              ['자전거를 타다 반응이 늦다', '계단에서 발을 헛디딘다'],
            ], { k: 2, hard: [['문제를 대충 읽고 실수한다'], ['친구 말에 날카롭게 반응한다'], [], ['졸며 길을 건넌다']], d: 0.3, opt: { topic: '수면 부채' } }), { levels: { easy: { prompt: '수면 부채가 미치는 영향 카드를 집중·기분 가지에 다세요(가지 2개).', toolOptions: { slots: ['집중', '기분'], cards: ['같은 줄을 여러 번 읽는다', '작은 일에도 짜증이 난다', '수업 내용이 기억에 덜 남는다', '하고 싶은 마음이 줄어든다'] }, target: { sort: { 집중: ['같은 줄을 여러 번 읽는다', '수업 내용이 기억에 덜 남는다'], 기분: ['작은 일에도 짜증이 난다', '하고 싶은 마음이 줄어든다'] } } } } }),
            MATCHQ('원인 카드와 이어지는 결과 카드를 짝지어 연결 고리를 만드세요.', [['잠이 모자라 아침에 늦게 일어남', '아침을 거르고 서두름'], ['수업 시간 졸음', '모르는 부분이 쌓임'], ['짜증이 늘어남', '친구와 작은 다툼'], ['반응이 늦어짐', '등굣길 사고 위험']], { k: 2, d: 0.35, opt: { topic: '이어지는 고리' } }),
            PICKQ('결과가 다시 원인이 되어 잠을 더 줄이는 되먹임 고리만 고르세요.', ['진도가 밀림 → 밤늦게 공부 → 다음 날 또 졸음', '걱정 때문에 잠이 안 옴 → 잠이 모자람 → 더 걱정'], ['일찍 잠 → 집중 회복 → 진도를 따라감', '아침 햇빛 → 낮에 덜 졸림'], { d: 0.4, opt: { basket: '되먹임 고리', topic: '되먹임 고리' }, more: { conclude: '되먹임 고리는 스스로 커져요. 고리 하나(잠드는 시각)를 끊으면 다른 영향도 함께 줄어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '되먹임 고리 하나를 골라, 고리를 끊으려면 어느 지점에서 무엇을 바꾸면 좋을지 쓰세요.' }] },
        notes: '영향 카드는 일반 설명이다(사람 확인). 학생 자신의 증상을 묻지 않는다. 걱정 때문에 잠이 오래 안 오는 일이 이어지면 보건실·상담실과 이야기할 수 있다고 덧붙인다.',
      }),

      M({
        id: 'wrap.strategy-write', type: 'wrap', title: '수험 생활 수면 전략 성찰문',
        method: '나의 수면 전략 성찰문', tool: 'rubric-writing', minutes: 10,
        levels: { easy: '문장 틀("나는 시험 기간에 ~부터 지키겠다. 왜냐하면 ~")을 함께 읽고 세 문장으로 쓴다.', base: '네 문장을 쓰고 기준표 네 항목(문제 인식·전략·현실성·점검)을 스스로 점검한다.', challenge: '방해 요인(학원·휴대폰·불안)과 그 대책을 활동지 둘째 칸에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 본 태민이·유진이의 한 주를 떠올리며, 다음 시험 기간에 지킬 전략을 네 문장으로 써 봐요. 남에게 보여 주려는 글이 아니라 내가 지킬 수 있는 글이에요." 기준표 네 항목을 함께 읽는다. "잠을 많이 자겠다"처럼 막연한 글에는 "언제부터, 무엇을 먼저 바꾸면 지켰는지 내가 알 수 있을까요?"라고 묻는다. 출구 2번에서 \'주말에 몰아 자면 다 갚아진다\'를 고른 학생에게 일요일 밤 장면을 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '다음 시험 기간에 지킬 나의 수면 전략을 네 문장으로 쓰세요(잠든 시각·몸 상태 같은 개인 기록은 쓰지 않아도 됩니다).', minChars: 60, maxChars: 400, starter: '나는 시험 기간에 ~부터 지키겠다. 왜냐하면 ~', sample: '나는 시험 기간에도 잠드는 시각을 먼저 정해 두겠다. 잠이 모자란 날이 이어지면 같은 문제를 여러 번 틀린다는 것을 알았기 때문이다. 시험 전날에는 새 진도 대신 틀린 문제만 보겠다. 주말에는 일어나는 시각을 크게 바꾸지 않았는지 스스로 확인하겠다.' }, prompt: '수면 전략 성찰문을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['수면 부채가 왜 문제인지 썼다', '구체적인 전략을 하나 이상 썼다', '내가 지킬 수 있는 계획인지 따져 보았다', '지켰는지 확인할 방법을 썼다'], sentences: [3, 6] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 배운 수면 부채에 대한 설명으로 알맞은 것을 고르세요.', options: ['주말에 몰아 자면 한 주의 부채가 다 갚아진다', '모자란 잠은 다음 날로 쌓이고, 리듬을 되찾으며 줄인다', '카페인을 마시면 잠을 줄여도 괜찮다'], answer: 1, difficulty: 0.2, explain: '몰아 자기와 카페인은 부채를 갚지 못하고 리듬을 더 밀 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 수면 전략',
          items: [
            { type: 'short', prompt: '다음 시험 기간에 지킬 수면 전략을 네 문장으로 쓰세요.' },
            { type: 'table', prompt: '전략을 방해할 수 있는 것과 대책을 쓰세요.', columns: ['방해 요인', '대책'], cells: [['', ''], ['', '']] },
          ],
          easy: { note: '"나는 시험 기간에 ~부터 지키겠다. 왜냐하면 ~. 시험 전날에는 ~."', items: [{ type: 'short', prompt: '시험 기간에 지킬 전략 하나와 그 까닭을 쓰세요.' }] },
        },
        notes: '쓴 글은 교사 확인용이며 발표를 강요하지 않는다. 학생의 실제 수면 시간·건강 상태를 쓰게 하거나 채점하지 않는다.',
      }),
      M({
        id: 'wrap.wind-timer', type: 'wrap', title: '잠들기 전 정리 루틴 실습',
        method: '잠들기 전 정리 루틴 실습', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 화면 끄기·숨 고르기 두 구간만 함께 따라 하게 한다.', base: '세 구간(화면 끄기·내일 할 일 적기·숨 고르기)의 차례를 놓고 타이머로 실습한 뒤 점검한다.', challenge: '세 구간을 해 본 뒤 활동지에서 나에게 맞는 루틴으로 바꿔 쓴다.' },
        wrap: {
          teacher: '"잠들기 직전까지 화면을 보다가 바로 누우면 머리가 쉽게 꺼지지 않아요. 오늘은 교실에서 짧게 \'꺼지는 연습\'을 해 볼게요." 우리 반 약속(구간마다 1분, 사이 20초)으로 타이머를 맞추고 함께 따라 한다. "할 일을 적으면 더 걱정돼서 잠이 안 온다"는 학생에게 "머릿속에 계속 들고 있는 것과 종이에 내려놓는 것 중 어느 쪽이 덜 무거울까요?"라고 묻는다. 루틴은 사람마다 다를 수 있고, 핵심은 매일 비슷한 차례로 하는 것이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '잠들기 전 정리 루틴', labels: ['하기', '쉬기'], plan: { work: 30, rest: 0, rounds: 1 }, cards: ['천천히 숨 고르기', '휴대폰 화면 끄기', '내일 할 일 세 가지 적기'] }, prompt: '우리 반 약속(구간마다 60초, 사이 20초, 세 구간)으로 타이머를 맞추고, 루틴 카드를 차례로 놓으세요.', target: { plan: { work: 60, rest: 20, rounds: 3 }, order: ['휴대폰 화면 끄기', '내일 할 일 세 가지 적기', '천천히 숨 고르기'] }, difficulty: 0.2 },
            { type: 'tool', tool: 'timer', options: { title: '루틴 해 보았어요' }, prompt: '세 구간을 실제로 따라 해 보고, 해 본 것을 스스로 점검하세요.', target: { selfCheck: ['화면을 끄고 1분을 보냈다', '내일 할 일을 종이에 적어 보았다', '천천히 숨을 고르며 1분을 보냈다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '잠들기 전 루틴에 대한 설명으로 알맞은 것을 고르세요.', options: ['루틴은 매일 비슷한 차례로 하는 것이 핵심이다', '누운 채 영상을 보다 잠드는 것이 가장 빨리 잠드는 루틴이다', '루틴은 모든 사람이 똑같아야 한다'], answer: 0, difficulty: 0.15, explain: '내용은 사람마다 달라도, 매일 비슷한 차례로 하면 몸이 잠들 준비를 알아차리기 쉬워요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 잠들기 전 루틴',
          items: [
            { type: 'table', prompt: '나에게 맞는 잠들기 전 루틴을 세 구간으로 바꿔 쓰세요.', columns: ['차례', '할 일', '얼마나'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] },
            { type: 'short', prompt: '루틴을 지키기 어려운 날(학원·시험 전날)에는 어떻게 줄여서 할지 쓰세요.' },
          ],
        },
        notes: '구간 시간(60초·20초)은 교실 실습용 우리 반 약속이다. 숨 고르기는 편안한 속도로만 하고 어지러우면 멈추게 한다. 수면 위생 루틴은 일반 안내다(사람 확인).',
      }),
    );
  }

  /* 사람 확인(exercise-chronic): (근거 파일에 세부 없음 — 수업 전 질병관리청 국가건강정보포털·보건복지부 한국인을 위한 신체활동 지침서·국민건강보험공단 건강iN 에서 확인)
   *   - [intro.risk-body] 고혈압·당뇨 같은 만성질환이 심장·콩팥·뇌(혈관) 등에 부담을 줄 수 있다는 일반 설명
   *   - [intro.life-timeline · activity.risk-web] 만성질환은 오랜 생활 습관이 쌓여 위험이 커질 수 있고 청소년기 습관이 성인기로 이어지기 쉽다 / 식습관·움직임 부족·흡연·잠이 위험 요인, 나이·가족력은 바꿀 수 없는 요인
   *   - [activity.fitt-plan] 운동 계획의 빈도·강도·시간·종류(FITT) 틀, '말은 할 수 있지만 숨이 조금 찬 정도' 같은 강도 표현, 조금씩 늘려 가기
   *   - [activity.posture-timer] 오래 앉은 자세의 목·허리 부담과 스트레칭 동작(천천히·아프면 멈추기) — 보건교사·체육교사 시범으로 확인
   *   - [activity.risk-chart] 그래프 값은 예시 자료(실제 통계 아님) / 집단 자료로 한 사람의 위험을 단정할 수 없다
   *   - [wrap.body-dilemma] 끼니를 거르며 무리하게 운동할 때의 위험 신호(어지러움·쉬지 못함·지나친 집착)와 도움 요청 경로(보건실·상담실·보호자) — 국가건강정보포털·교육부 학생건강 자료
   *   - 운동 시간·체질량지수 등 수치는 쓰지 않았다(체계도 source — 교사가 최신 공식 지침 수치를 넣는다). 스트레칭 구간 초는 교실 실습용 우리 반 약속.
   * 계획대로 못 한 것:
   *   - intro.risk-body: body 교구 기관에 혈관·췌장이 없어 심장·콩팥·뇌·간으로 했다(췌장은 교사가 말로 덧붙인다). 도입은 시연 하나라 '기관 2개/3개'는 교사 진행 방식.
   *   - activity.fitt-plan: kitchen match 는 칸마다 카드 한 장이라 '요일 칸 × 여러 운동' 대신 요일마다 한 가지 운동 블록을 짝짓는다. 쉬움 3쌍·기본 5쌍, 점진적 증가는 셋째 문항(차례).
   *   - activity.posture-timer: '짝 자세 피드백'은 셋째 문항(짝 점검 selfCheck)이 모든 단계에 있고, 도전은 기준 하나를 더한다.
   *   - wrap.body-dilemma: 정리 질문에는 단계별 판이 없어 갈림길 두 번 판 하나로 하고, 쉬움 '선택 1번'은 교사가 첫 갈림길에서 함께 멈추는 방식으로 적었다.
   */
  // ======================================================================================================
  // 5. 운동 계획과 만성질환 위험 요인 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('exercise-chronic', [10, 11, 12]);
    const LIFE = ['10대: 쉬는 시간에도 앉아 화면을 본다', '20대: 앉아서 일하고 퇴근 뒤에도 거의 걷지 않는다', '30대: 계단을 오르면 숨이 차기 시작한다', '40대: 건강검진에서 혈압이 높다는 말을 듣는다'];
    const BODYQ = { text: '태민이는 "방학 3주 안에 몸을 확 바꾸겠다"며 매일 두 번씩 운동하고 저녁을 거르기 시작했다. 일주일째, 체육 시간에 어지럽다며 주저앉았다.', who: '나', motif: 'sun', choices: [
      { id: 'join', text: '"대단하다, 나도 같이 할래"라며 따라 한다', result: '둘 다 끼니를 거르며 더 세게 운동한다.', impact: [{ who: '태민', text: '어지러움이 반복된다', tone: -1 }, { who: '나', text: '나도 지치고 짜증이 는다', tone: -1 }],
        next: { text: '며칠 뒤 태민이가 "오늘 못 했으니 내일은 세 번 해야 해"라며 불안해한다.', choices: [
          { id: 'more', text: '"그래, 의지가 대단해"라고 응원한다', result: '태민이는 쉬는 날 없이 몸을 몰아붙인다.', impact: [{ who: '태민', text: '몸과 마음이 함께 지친다', tone: -1 }], ending: '쉬지 못하고 불안해지는 것은 의지가 아니라 위험 신호다.' },
          { id: 'adult', text: '"요즘 많이 힘들어 보여, 보건 선생님께 같이 가 보자"고 한다', result: '보건 선생님이 끼니와 쉼을 넣은 계획을 함께 고쳐 준다.', impact: [{ who: '태민', text: '혼자 버티지 않게 된다', tone: 1 }], ending: '늦게 알아차려도 어른과 이으면 되돌릴 수 있다.' }] } },
      { id: 'worry', text: '몸 얘기 대신 "어지럽다니 걱정돼, 밥은 먹었어?"라고 묻는다', result: '태민이가 저녁을 거르고 있다고 털어놓는다.', impact: [{ who: '태민', text: '걱정해 주는 사람이 있다는 것을 안다', tone: 1 }],
        next: { text: '태민이가 "말하지 마, 3주만 하면 돼"라고 한다.', choices: [
          { id: 'nurse', text: '"혼자 하지 말고 보건 선생님과 계획을 같이 짜 보자"며 함께 간다', result: '쉬는 날과 끼니를 지키는 운동 계획으로 바꾼다.', impact: [{ who: '태민', text: '운동을 이어 가면서 어지러움이 줄어든다', tone: 1 }], ending: '걱정을 몸 평가가 아닌 안부로 전하고, 어른과 잇는다.' },
          { id: 'keep', text: '비밀이니까 아무에게도 말하지 않는다', result: '태민이는 다음 주에도 저녁을 거른다.', impact: [{ who: '태민', text: '위험 신호가 그대로 이어진다', tone: -1 }], ending: '몸이 위험해 보이는 비밀은 혼자 지키지 않는다.' }] } },
      { id: 'look', text: '"그래도 살 빠져 보여서 좋다"고 말한다', result: '태민이는 끼니를 더 줄인다.', impact: [{ who: '태민', text: '겉모습 평가가 무리를 부추긴다', tone: -1 }], ending: '몸에 대한 평가는 칭찬이라도 무리를 키울 수 있다.' }] };
    const BODYQ_R = [{ id: 'signal', text: '어지러움·끼니 거르기·쉬지 못하는 불안은 위험 신호다' }, { id: 'care', text: '몸 평가 대신 안부와 걱정을 말한다' }, { id: 'adult', text: '몸이 위험해 보이면 어른과 잇는다' }, { id: 'will', text: '세게 할수록 의지가 강한 것이다', why: '쉬지 못하고 불안한 것은 의지가 아니라 몸이 보내는 위험 신호일 수 있어요.' }, { id: 'praise', text: '살 빠져 보인다는 말은 좋은 응원이다', why: '겉모습 평가는 칭찬이라도 무리를 부추길 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.risk-body', type: 'intro', title: '만성질환이 닿는 기관 찾기',
        method: '만성질환이 닿는 기관', tool: 'body', minutes: 7,
        levels: { easy: '교사가 심장과 콩팥 두 기관만 함께 짚는다.', base: '심장·콩팥·뇌 세 기관을 차례로 짚으며 혈압·혈당과 이어 말한다.', challenge: '세 기관마다 관련된 생활 습관(짠 식사 패턴·움직임 부족·흡연·잠)을 하나씩 말한다.' },
        intro: {
          teacher: '"고혈압·당뇨는 \'할아버지 병\'일까요? 오늘은 이 병들이 몸 어디에 부담을 주는지부터 볼게요." 시연 단추로 심장을 짚는 모습을 보이고, 혈압이 높으면 온몸으로 피를 보내는 심장의 일이 힘들어진다고 설명한다. 이 판에 없는 혈관과 췌장(혈당을 조절하는 호르몬을 만드는 곳)은 말로 덧붙인다. "만성질환은 노인만의 문제"라는 말이 나오면 "40대에 처음 들은 진단은 언제부터 쌓였을까요?"라고 되묻는다. 누구의 몸이 나쁘다는 이야기가 아니라 습관이 쌓이는 이야기라는 점을 먼저 밝힌다.',
          student: '몸 그림에서 고혈압·당뇨 같은 만성질환이 부담을 줄 수 있는 기관을 찾아보세요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '심장', '폐', '간', '위', '콩팥'], jobs: { 심장: '온몸으로 피를 보낸다 — 혈압이 높으면 부담이 커진다', 콩팥: '피를 걸러 노폐물을 내보낸다 — 혈압·혈당이 높으면 부담이 커진다', 뇌: '온몸을 조절한다 — 혈관이 상하면 영향을 받는다' }, names: true }, sequence: [{ sel: '심장' }, { sel: '콩팥' }, { sel: '뇌' }] },
          art: { draw: 'a calm paper body outline with a glowing paper heart, two bean-shaped kidneys and a brain, thin paper ribbons for blood vessels running between them, a small calendar of years in the corner', banner: '습관은 몸 안에 쌓여요', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: 'body 교구에 혈관·췌장 칸이 없어 말로 덧붙인다. 학생 자신이나 가족의 병력·건강검진 결과를 묻지 않는다. 몸 설명은 일반 설명이다(사람 확인).',
      }),
      M({
        id: 'intro.life-timeline', type: 'intro', title: '습관이 쌓이는 생애 시간 줄',
        method: '습관이 쌓이는 생애 시간 줄', tool: 'timeline', minutes: 7,
        levels: { easy: '10대·30대·40대 장면 3장만 함께 놓는다.', base: '10대부터 40대까지 장면 4장을 차례로 놓는다.', challenge: '10대 습관을 바꾼 다른 갈래 줄을 칠판에 나란히 그려 두 줄을 견준다.' },
        intro: {
          teacher: '"가상의 한 사람이 10대에 만든 습관이 40대까지 어떻게 이어질까요? 장면을 차례로 놓아 봐요." 시연 단추로 네 장면이 시간 줄에 놓이는 모습을 보인다. "40대 진단은 그때 운이 나빴던 것"이라는 말이 나오면 "10대부터 30대까지 장면에서 무엇이 계속 이어졌나요?"라고 묻는다. 칠판에 \'10대에 쉬는 시간마다 걷기 시작한 갈래\'를 함께 그리며, 바꿀 수 있는 것은 지금의 습관이라는 점을 짚는다.',
          student: '가상의 한 사람이 10대에 만든 습관이 40대까지 이어지는 장면을 시간 차례로 놓아 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['10대', '40대'], slots: 4, cards: [LIFE[2], LIFE[0], LIFE[3], LIFE[1]] }, sequence: [{ order: LIFE }] },
          art: { draw: 'a long paper path winding from a teenager at a desk to an adult at an office and then a clinic, with small paper milestone flags for each decade and a second brighter path branching off with walking shoes', banner: '지금의 습관이 미래로 이어져요', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '가상 인물의 생애다. 특정 체형·외모를 그리지 않고 습관(앉아 있기·걷기)으로만 장면을 만든다.',
      }),

      M({
        id: 'activity.risk-web', type: 'activity', title: '생활 습관과 위험 요인 잇기',
        method: '생활 습관과 위험 요인 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 4개에 사례 카드 4장(가지마다 1장)을 달고, 바꿀 수 있는·없는 요인을 카드 4장으로 나눈다(바로 피드백).', base: '사례 카드 8장을 가지에 달고, 요인 카드 6장을 바꿀 수 있는·없는 쪽으로 나눈다.', challenge: '헷갈리는 카드가 더해진 판에서 나누고, 지금부터 바꿀 수 있는 고리를 고른다.' },
        activity: {
          title: '생활 습관과 위험 요인 잇기', tool: 'mindmap',
          teacher: '"\'만성질환 위험 요인\' 가운데에서 네 가지 가지가 뻗어요. 가상 고등학생들의 생활 장면을 가지에 달아 볼까요?" 카드를 놓을 때마다 "이 장면은 어떤 습관이 반복되는 건가요?"라고 묻는다. 음식 카드를 두고 "이 음식은 나쁜 음식"이라고 말하는 학생에게 "한 번 먹는 음식이 아니라 매번 반복되는 패턴이 문제예요. 카드에 \'늘\'이 붙은 까닭을 볼까요?"라고 되묻는다. 나이·가족력처럼 바꿀 수 없는 요인이 있어도 습관은 바꿀 수 있다는 점을 짚는다.',
          task: '생활 장면을 위험 요인 가지에 달고, 바꿀 수 있는 요인과 없는 요인을 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 고등학생들의 생활 장면을 알맞은 위험 요인 가지에 다세요.', ['식습관', '움직임 부족', '흡연', '잠'], [
              ['늘 아침을 거르고 밤에 몰아 먹는다', '국물을 늘 끝까지 다 마신다'],
              ['쉬는 시간에도 자리에서 일어나지 않는다', '집까지 가까운 길도 늘 버스를 탄다'],
              ['친구 권유로 전자담배를 피우기 시작했다', '흡연하는 사람 옆에 자주 있다'],
              ['새벽 2시가 넘어 자는 날이 많다', '주말마다 낮 12시까지 잔다'],
            ], { k: 1, hard: [['단 음료를 물 대신 마신다'], ['주말 내내 누워 영상을 본다'], [], ['잠자리에서 휴대폰을 오래 본다']], d: 0.3, opt: { topic: '만성질환 위험 요인' } }),
            SORTQ('위험 요인을 지금부터 바꿀 수 있는 것과 바꿀 수 없는 것으로 나누세요.', ['바꿀 수 있는 요인', '바꿀 수 없는 요인'], [
              ['앉아 있는 시간', '흡연', '잠드는 시각'],
              ['나이', '가족력', '타고난 체질'],
            ], { k: 2, hard: [['단 음료 마시는 횟수'], []], d: 0.3, opt: { topic: '바꿀 수 있을까' } }),
            PICKQ('10대인 지금부터 바꾸면 여러 위험 요인을 함께 줄이는 고리만 고르세요.', ['쉬는 시간마다 일어나 걷기', '잠드는 시각을 앞당겨 아침 먹기'], ['가족력을 걱정만 하기', '한 달 동안 굶다시피 하기'], { d: 0.35, opt: { basket: '함께 줄이는 고리', topic: '바꿀 고리' }, more: { conclude: '바꿀 수 없는 요인이 있어도, 습관 하나가 여러 요인과 이어져 있어 한 고리를 바꾸면 여럿이 함께 줄어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 고등학생 한 명을 골라, 바꾸기 쉬운 습관 하나와 그것이 이어진 위험 요인을 쓰세요.' }] },
        notes: '음식·몸을 좋다/나쁘다로 낙인찍지 않고 반복되는 패턴으로 다룬다. 학생 자신이나 가족의 병력·습관을 묻지 않는다. 위험 요인 설명은 일반 설명이다(사람 확인).',
      }),
      M({
        id: 'activity.fitt-plan', type: 'activity', title: '빈도·강도·시간·종류 운동 계획',
        method: '빈도·강도·시간·종류로 운동 계획', tool: 'kitchen', minutes: 16,
        levels: { easy: '첫 두 문항을 3쌍씩 짝짓고, 맞지 않으면 바로 알려 준다.', base: '계획 틀 4쌍·요일 칸 5개를 짝짓고 점진적 증가 차례를 놓는다.', challenge: '요일 칸 5개에 함정 카드가 더해지고, 점진적 증가 차례 판도 섞여 나온다.' },
        activity: {
          title: '태민이의 한 주 운동 계획', tool: 'kitchen',
          teacher: '"운동 계획은 \'열심히 하자\' 한 줄로는 지킬 수 없어요. 빈도·강도·시간·종류 네 칸으로 나눠 봐요." 첫 문항에서 네 낱말의 뜻을 짝지은 뒤, 가상 인물 태민이의 조건(월·수 학원, 근력 운동 다음 날은 쉬거나 가볍게)으로 요일 칸을 채운다. "운동은 세게 할수록 좋다"는 학생에게 "처음부터 가장 세게 하면 둘째 주에도 할 수 있을까요?"라고 묻는다. 계획은 조금씩 늘려 가야 오래 간다는 점을 셋째 문항에서 짚는다. 운동 시간 수치는 교사가 최신 공식 지침을 확인해 덧붙인다.',
          task: '운동 계획의 네 칸을 알고, 태민이의 한 주와 늘려 가는 차례를 짜요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('운동 계획의 네 칸과 그 뜻을 짝지으세요.', [['빈도', '한 주에 몇 번 하는가'], ['강도', '말은 할 수 있지만 숨이 조금 찬 정도인가'], ['시간', '한 번에 얼마나 오래 하는가'], ['종류', '걷기·줄넘기·근력 운동 가운데 무엇인가']], { k: 3, d: 0.2, opt: { autoMotif: false } }),
            MATCHQ('조건(월·수 학원, 근력 운동 다음 날은 가볍게, 금요일은 친구와)을 보고 태민이의 요일마다 운동 블록을 짝지으세요.', [['월요일', '학원 가는 길 빠르게 걷기'], ['화요일', '맨몸 근력 운동'], ['수요일', '가벼운 스트레칭'], ['목요일', '줄넘기'], ['금요일', '친구와 배드민턴']], { k: 3, extra: ['쉬는 날 없이 매일 최대한 세게', '주말에 한 번에 몰아서'], d: 0.35, opt: { autoMotif: false } }),
            ORDERQ('처음 운동을 시작한 태민이가 몇 주에 걸쳐 조금씩 늘려 가는 차례대로 놓으세요.', ['1주 차: 가볍게 몸에 익히기', '2주 차: 하는 날을 하루 늘리기', '3주 차: 한 번에 하는 시간을 조금 늘리기', '4주 차: 강도를 조금 올리기'], { k: 3, traps: ['첫날부터 가장 세게 하기'], d: 0.3, opt: { axis: ['처음', '나중'] }, more: { conclude: '한 번에 하나씩, 조금씩 늘려야 다치지 않고 오래 이어 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 해 보고 싶은 운동 하나로 계획의 네 칸을 채우세요(몸무게·체형은 쓰지 않아요).', columns: ['빈도', '강도', '시간', '종류'], cells: [['', '', '', '']] }] },
        notes: '운동 시간·횟수 수치는 쓰지 않는다(교사가 보건복지부 신체활동 지침 등 최신 수치를 확인해 덧붙인다). 계획의 목표는 체형이 아니라 꾸준함·즐거움·체력이다. kitchen 짝 판은 칸마다 카드 한 장이다.',
      }),
      M({
        id: 'activity.posture-timer', type: 'activity', title: '공부 자세 부담 고치기 실습',
        method: '공부 자세 부담 고치기 실습', tool: 'timer', minutes: 16,
        levels: { easy: '스트레칭 카드 3장의 차례를 놓고, 우리 반 약속 시간으로 타이머를 맞춘다.', base: '스트레칭 카드 4장의 차례와 타이머를 맞추고, 자세 점검 칸을 모두 확인한 뒤 짝 점검을 한다.', challenge: '짝 점검에 기준 하나(짝에게 고칠 점을 한 가지 말해 주었다)를 더한다.' },
        activity: {
          title: '공부 자세 부담 고치기', tool: 'timer',
          teacher: '"한 시간 넘게 고개를 숙이고 문제를 풀면 목과 허리는 어떤 상태일까요? 오늘은 앉은 자리에서 할 수 있는 동작을 직접 해 봐요." 우리 반 약속(동작마다 20초, 사이 10초)으로 타이머를 맞추고 함께 따라 한다. "아플 때까지 세게 늘려야 효과가 있다"는 학생에게 "아프다는 건 몸이 그만하라는 신호예요. 천천히, 편안한 만큼만 해요"라고 바로잡는다. 짝끼리 화면 높이·등받이·발 위치를 서로 봐 주게 하고, 몸 모양을 평가하는 말은 하지 않는다는 약속을 먼저 정한다.',
          task: '공부 중 스트레칭 차례와 시간을 맞춰 직접 해 보고, 자세를 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '우리 반 약속(동작마다 20초, 사이 10초, 네 동작)으로 타이머를 맞추고, 스트레칭 카드를 위에서 아래 차례로 놓으세요.', toolOptions: { title: '앉은 자리 스트레칭', labels: ['동작', '쉬기'], plan: { work: 10, rest: 0, rounds: 1 }, cards: ['일어나 두 팔을 위로 쭉 펴기', '고개를 좌우로 천천히 기울이기', '어깨를 으쓱 올렸다 내리기', '등을 펴고 허리를 좌우로 돌리기'] }, target: { plan: { work: 20, rest: 10, rounds: 4 }, order: ['고개를 좌우로 천천히 기울이기', '어깨를 으쓱 올렸다 내리기', '등을 펴고 허리를 좌우로 돌리기', '일어나 두 팔을 위로 쭉 펴기'] }, difficulty: 0.25,
              levels: { easy: { prompt: '우리 반 약속(동작마다 20초, 사이 10초, 세 동작)으로 타이머를 맞추고, 스트레칭 카드를 위에서 아래 차례로 놓으세요(카드 3장).', toolOptions: { cards: ['등을 펴고 허리를 좌우로 돌리기', '고개를 좌우로 천천히 기울이기', '어깨를 으쓱 올렸다 내리기'] }, target: { plan: { work: 20, rest: 10, rounds: 3 }, order: ['고개를 좌우로 천천히 기울이기', '어깨를 으쓱 올렸다 내리기', '등을 펴고 허리를 좌우로 돌리기'] } } } },
            { prompt: '지금 앉은 자세를 1분(60초) 한 번 동안 점검하고, 점검 칸을 모두 확인하세요.', toolOptions: { title: '1분 자세 점검', plan: { work: 30, rest: 0, rounds: 1 }, safety: ['화면이나 책이 눈높이에 가깝다', '등이 등받이에 닿아 있다', '두 발이 바닥에 닿아 있다', '어깨에 힘이 들어가 있지 않다'] }, target: { plan: { work: 60, rounds: 1 }, safety: true }, difficulty: 0.2 },
            { prompt: '짝과 서로 자세를 봐 준 뒤, 우리가 지킨 것을 스스로 점검하세요.', toolOptions: { title: '짝 자세 점검' }, target: { selfCheck: ['짝의 화면 높이·등받이·발 위치를 함께 보았다', '아프지 않은 만큼만 동작을 했다', '몸 모양을 평가하는 말을 하지 않았다'] }, difficulty: 0.15, conclude: '자세 부담은 한 번의 큰 운동보다, 자주 일어나 조금씩 움직이는 습관으로 줄여요.',
              levels: { challenge: { prompt: '짝과 서로 자세를 봐 준 뒤, 우리가 지킨 것을 스스로 점검하세요(기준 하나 더).', target: { selfCheck: ['짝의 화면 높이·등받이·발 위치를 함께 보았다', '아프지 않은 만큼만 동작을 했다', '몸 모양을 평가하는 말을 하지 않았다', '짝에게 고칠 점을 한 가지 말해 주었다'] } } } },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '공부하는 자리에서 자세 부담을 줄이려고 바꿀 것 한 가지(책상·화면·쉬는 시간)를 쓰세요.' }] },
        notes: '동작 시간(20초·10초)은 교실 실습용 우리 반 약속이다. 통증이 있는 학생은 하지 않고 지켜보게 한다. 동작은 보건교사·체육교사가 시범으로 확인한다(사람 확인).',
      }),
      M({
        id: 'activity.risk-chart', type: 'activity', title: '습관 집단별 위험 요인 자료 읽기',
        method: '예시 자료로 위험 요인 비교', tool: 'chart', minutes: 16,
        levels: { easy: '막대 끝에 값이 보여 가장 큰 막대와 작은 막대부터 읽는다.', base: '값 표시 없이 막대를 읽고 두 집단의 차이를 계산한다.', challenge: '값 표시 없이 풀고, 집단 자료를 한 사람에게 쓸 때 주의할 점을 고른 까닭을 짝에게 설명한다.' },
        activity: {
          title: '습관 집단별 위험 요인 읽기', tool: 'chart',
          teacher: '"이 그래프는 실제 통계가 아니라 수업용 예시 자료예요. 하루에 앉아 있는 시간이 다른 세 집단에서, 위험 요인을 하나 이상 가진 사람의 비율을 꾸며 본 것이에요." 막대를 읽은 뒤 차이를 계산하게 한다. "앉아 있는 시간이 긴 집단이니 그 안의 모든 사람이 병에 걸린다"는 학생에게 "100명 가운데 몇 명이라는 비율이 한 사람의 미래를 정해 줄까요?"라고 묻는다. 집단 자료는 경향을 보여 줄 뿐, 개인을 판단하거나 낙인찍는 데 쓰지 않는다는 점을 짚는다.',
          task: '예시 자료 막대그래프를 읽고 물음에 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '예시 자료에서 위험 요인을 가진 사람의 비율이 가장 높은 집단을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '앉아 있는 시간별 위험 요인 보유 비율(예시 자료, 실제 통계 아님)', unit: '%', yLabel: '비율', xLabel: '집단', data: [['앉는 시간 짧은 집단', 20], ['보통 집단', 30], ['앉는 시간 긴 집단', 45]], question: '가장 높은 막대는?', choices: ['앉는 시간 짧은 집단', '보통 집단', '앉는 시간 긴 집단'] }, target: { pick: 2 }, difficulty: 0.15 },
            { prompt: '앉는 시간이 긴 집단과 짧은 집단의 비율 차이는 몇 %p인가요?', toolOptions: { type: 'bar', mode: 'read', title: '앉아 있는 시간별 위험 요인 보유 비율(예시 자료, 실제 통계 아님)', unit: '%', yLabel: '비율', xLabel: '집단', data: [['앉는 시간 짧은 집단', 20], ['보통 집단', 30], ['앉는 시간 긴 집단', 45]], question: '두 막대의 차이는?' }, target: { value: 25 }, difficulty: 0.3 },
            { prompt: '같은 예시 자료에 쉬는 시간마다 움직인 집단을 더했어요. 앉는 시간이 긴 집단과 견주어 비율이 어떻게 다른지 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '앉는 시간이 긴 사람들의 위험 요인 보유 비율(예시 자료, 실제 통계 아님)', unit: '%', yLabel: '비율', xLabel: '집단', data: [['앉아만 있는 집단', 45], ['쉬는 시간마다 움직인 집단', 32]], question: '쉬는 시간마다 움직인 집단은?', choices: ['더 낮다', '같다', '더 높다'] }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '이 예시 자료를 쓸 때 주의할 점으로 알맞은 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '앉아 있는 시간별 위험 요인 보유 비율(예시 자료, 실제 통계 아님)', unit: '%', yLabel: '비율', xLabel: '집단', data: [['앉는 시간 짧은 집단', 20], ['보통 집단', 30], ['앉는 시간 긴 집단', 45]], question: '알맞은 해석은?', choices: ['긴 집단의 모든 사람은 병에 걸린다', '집단의 경향일 뿐 한 사람의 미래를 정하지 않는다', '짧은 집단은 아무 위험도 없다'], why: ['비율은 집단의 경향이라 모든 사람에게 같지 않아요.', '', '20%처럼 짧은 집단에도 위험 요인을 가진 사람이 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '집단 자료는 습관을 바꿀 까닭을 보여 줄 뿐, 한 사람을 판단하거나 낙인찍는 데 쓰지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 예시 자료에서 알 수 있는 것과 알 수 없는 것을 한 가지씩 쓰세요.' }] },
        notes: '그래프 값은 수업용 예시 자료다. 학생 자신의 앉는 시간·건강 상태를 조사하지 않는다.',
      }),

      M({
        id: 'wrap.plan-write', type: 'wrap', title: '나의 운동 계획서와 성찰',
        method: '운동 계획서와 성찰', tool: 'rubric-writing', minutes: 10,
        levels: { easy: '문장 틀("나는 ~을 한 주에 ~번 하겠다. 왜냐하면 ~")을 보고 세 문장으로 쓴다.', base: '네 문장을 쓰고 기준표 네 항목(목표·빈도·강도·지속 방법)을 스스로 점검한다.', challenge: '부상 예방(준비 운동·아프면 멈추기) 문장을 활동지 둘째 칸에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 만든 계획 틀로 나의 운동 계획을 네 문장으로 써 봐요. 목표는 몸 모양이 아니라 내가 즐겁게 오래 할 수 있는 것이에요." 기준표 네 항목을 함께 읽는다. "살을 빼겠다"처럼 체형을 목표로 쓴 학생에게 "계단을 덜 숨차게 오르기, 친구와 매주 배드민턴하기처럼 몸이 하는 일을 목표로 바꿔 볼까요?"라고 권한다. 몸무게·체형은 쓰지 않아도 된다고 미리 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '나의 운동 계획을 네 문장으로 쓰세요(몸무게·체형은 쓰지 않아요).', minChars: 60, maxChars: 400, starter: '나는 ~을 한 주에 ~번 하겠다. 왜냐하면 ~', sample: '나는 계단을 덜 숨차게 오르는 것을 목표로 한다. 학원 없는 화·목에 줄넘기를 하고, 월·수에는 학원 가는 길을 빠르게 걷겠다. 말은 할 수 있지만 숨이 조금 찬 정도로 시작해 몇 주에 걸쳐 늘리겠다. 친구와 함께 기록을 남겨 꾸준히 이어 가겠다.' }, prompt: '운동 계획서를 쓰고 기준표로 점검하세요.', target: { selfCheck: ['몸이 하는 일로 목표를 썼다', '빈도(한 주에 몇 번)를 썼다', '강도를 어떻게 정할지 썼다', '오래 이어 갈 방법을 썼다'], sentences: [3, 6] }, difficulty: 0.3 },
            { type: 'choice', prompt: '좋은 운동 계획에 가장 가까운 것을 고르세요.', options: ['첫 주부터 매일 가장 세게 한다', '할 수 있는 만큼 시작해 조금씩 늘린다', '시험이 끝난 뒤 한 번에 몰아서 한다'], answer: 1, difficulty: 0.15, explain: '조금씩 늘려야 다치지 않고 오래 이어 가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 운동 계획',
          items: [
            { type: 'short', prompt: '나의 운동 계획을 네 문장으로 쓰세요(목표·빈도·강도·이어 갈 방법).' },
            { type: 'short', prompt: '다치지 않으려고 지킬 것(준비 운동·아프면 멈추기 등)을 쓰세요.' },
          ],
          easy: { note: '"나는 ~을 한 주에 ~번 하겠다. 처음에는 ~ 정도로 시작한다. 왜냐하면 ~"', items: [{ type: 'short', prompt: '해 보고 싶은 운동과 한 주에 할 횟수를 쓰세요.' }] },
        },
        notes: '쓴 글은 교사 확인용이며 몸무게·체형·건강 상태를 쓰게 하거나 채점하지 않는다. 장애·질환으로 운동이 어려운 학생은 할 수 있는 움직임(스트레칭·걷기 등)으로 계획하게 한다.',
      }),
      M({
        id: 'wrap.body-dilemma', type: 'wrap', title: '무리한 운동 친구 갈림길',
        method: '체형 압박과 무리한 운동 갈림길', tool: 'dilemma', minutes: 10,
        levels: { easy: '첫 갈림길에서 교사와 함께 멈추고 결과와 위험 신호를 이야기한다.', base: '갈림길 둘을 따라가고 근거 카드를 고른다.', challenge: '갈림길 둘을 따라간 뒤 위험 신호 근거를 고르고, 다른 길의 결과와 견준다.' },
        wrap: {
          teacher: '"친구 태민이가 짧은 기간에 몸을 바꾸겠다며 끼니를 거르고 운동을 몰아 하고 있어요. 친구로서 어떤 말을 할까요?" 갈림길을 함께 따라가며 고를 때마다 "이 말은 태민이의 몸을 평가하나요, 태민이를 걱정하나요?"를 묻는다. "살 빠져 보인다는 건 칭찬이잖아요"라는 학생에게 그 길의 결과(끼니를 더 줄인다)를 다시 보게 한다. 어지러움·끼니 거르기·쉬지 못하는 불안은 의지가 아니라 위험 신호이고, 이럴 때는 보건실·상담실과 잇는다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'dilemma', options: { scene: cut(BODYQ, 2), reasons: BODYQ_R, title: '무리하는 친구', revealAfterCheck: true }, prompt: '태민이에게 할 말을 갈림길마다 고르고, 그 길을 고른 근거 카드를 고르세요.', target: { path: [['worry', 'nurse'], ['join', 'adult']], reasons: ['signal', 'adult'] }, difficulty: 0.3 },
            { type: 'choice', prompt: '친구가 끼니를 거르며 무리하게 운동할 때 할 말로 가장 알맞은 것을 고르세요.', options: ['"살 빠져서 보기 좋다"', '"요즘 어지러워 보여 걱정돼, 보건 선생님께 같이 가 보자"', '"그 정도는 해야 몸이 바뀌지"'], answer: 1, difficulty: 0.15, explain: '몸 평가 대신 안부와 걱정을 전하고, 위험 신호가 보이면 어른과 함께 이어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '무리하는 친구에게',
          items: [
            { type: 'check', prompt: '오늘 본 위험 신호에 모두 표시하세요.', options: ['어지러워 주저앉음', '끼니를 거름', '쉬는 날 없이 운동함', '못 하면 불안해함', '친구와 함께 운동함'] },
            { type: 'short', prompt: '몸을 평가하지 않고 친구에게 걱정을 전하는 말을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '가상 인물의 장면이다. 학생의 체형·몸무게·식사를 묻거나 평가하지 않는다. 식사·운동 문제로 걱정되는 학생은 보건교사·상담교사와 연계한다(사람 확인: 위험 신호와 도움 경로).',
      }),
    );
  }

  /* 사람 확인(mental-helpseeking): (근거 파일에 세부 없음 — 모듈 id 와 확인할 공식 안내처)
   *   전체(MH_NOTE): 학교 위기관리 절차(상담교사·관리자 연계)와 위기 학생 연계 흐름 — 교육부 학생정신건강 자료(학생 자살 위기 대응 안내)
   *   전체: '[학교가 확인해 넣는 상담 전화]' 자리와 그 운영 시간, 급할 때의 긴급 신고 번호를 화면에 넣을지 — 보건복지부·여성가족부 청소년 상담 전화 안내(학교가 최신 번호를 확인)
   *   - [intro.barrier-feel · activity.myth-sort] 도움 요청을 막는 마음(창피함·두려움·귀찮음)과 편견 문장의 일반 설명 — 국립정신건강센터·보건복지부 정신건강 정보
   *   - [activity.myth-sort] '상담 기록이 진학에 불리하다'는 단정하지 않고 '상담 선생님께 직접 물어 확인할 것'으로 다뤘다 — 학교 상담실 운영 지침(교육부)
   *   - [activity.myth-sort] 정신건강 어려움은 누구에게나 생길 수 있고 도움을 받으면 나아질 수 있다 / 전문 진료는 약만 주는 곳이 아니다 — 국립정신건강센터
   *   - [intro.path-timeline · activity.route-map] 학교 상담실·청소년 상담 기관·지역 정신건강 기관·병원 정신건강의학과가 하는 일과 이어지는 차례(학교 상담은 진단·처방을 하지 않고 필요하면 전문가와 잇는다) — 교육부 학교 상담(Wee) 안내·보건복지부 정신건강복지센터 안내·여성가족부 청소년상담복지센터 안내
   *   - [activity.friend-dilemma · activity.script] 평소와 다른 말·행동은 위기 신호일 수 있고 걱정되면 직접 물어도 괜찮다, 생명과 관련된 비밀은 지키지 않고 어른과 잇는다 — 보건복지부·한국생명존중희망재단 생명지킴이 교육 안내
   *   - [wrap.self-care] 잠·움직임·연결·쉼이 마음 관리에 도움이 된다는 일반 설명 — 국립정신건강센터 마음건강 정보
   * 계획대로 못 한 것:
   *   - intro 의 levels(마음 2개/3개·단계 3개/4개)는 도입이 시연 하나뿐이라 교사 진행 방식으로 적었다.
   *   - activity.route-map: map 은 문항마다 핀 하나라 '핀 2개/3개'는 쉬움 = 핀 이름이 바로 보임(readout), 기본 = 이름 없이, 도전 = 밤 시간 문항에서 연결하는 말 고르기를 더함으로 바꿨다. 범례 문항은 모든 단계에 있다.
   *   - activity.myth-sort: 계획의 '편견·사실' 두 칸에 '직접 물어 확인할 것' 칸을 더했다(상담 기록 공개 범위는 근거가 없어 단정하지 않음).
   *   - activity.script: '대본 4줄/5줄'은 문장 수 범위(쉬움 문장 틀, 도전 기준 하나 더)로 했다. 채점은 기준표 자기 점검이다.
   *   - wrap.self-care·wrap.pledge: 정리 질문은 단계별 판이 없어 '항목 2개/4개'·'문구 제공/직접'은 교사 진행 방식이다.
   *   - 겹침: 생명존중 life/h.js 의 resource-access(동네 마음건강 자원 지도)·crisis-connect·stigma-campaign 과 인물·장면을 되풀이하지 않았다(인물 유진·태민, 동아리 공연 단체방·방학·밤 장면).
   */
  // ======================================================================================================
  // 6. 정신건강 도움 받기 (10~12학년) — 방법 묘사 없음, 번호는 학교가 확인해 넣는 자리
  // ======================================================================================================
  {
    const M = MOD('mental-helpseeking', [10, 11, 12]);
    const NUM = '[학교가 확인해 넣는 상담 전화]';
    const MH_NOTE = '위기 신호를 보이는 학생은 학교 위기관리 절차(상담교사·관리자 연계)를 따른다.';
    const STEPS = ['알아차리기: 평소와 다른 마음·행동을 알아챈다', '말하기: 믿을 만한 사람에게 털어놓는다', '상담하기: 상담 선생님·기관과 이야기한다', '이어 가기: 필요하면 전문 진료와 꾸준한 관리로 잇는다'];
    const FRIEND = { text: '동아리 공연을 2주 앞두고, 요즘 연습에 빠지던 유진이가 단체방에 "다 귀찮고 아무 의미 없어. 나 없어도 다들 잘할 거야"라고 남기고 나갔다.', who: '나', motif: 'cloud', choices: [
      { id: 'wait', text: '바쁜가 보다 하고 며칠 지켜본다', result: '사흘 동안 유진이에게서 아무 연락이 없다.', impact: [{ who: '유진', text: '혼자 있는 시간이 길어진다', tone: -1 }],
        next: { text: '나흘째, 유진이가 동아리 물품을 다른 친구에게 다 넘겨줬다는 말을 들었다.', choices: [
          { id: 'ask2', text: '오늘이라도 유진이에게 따로 연락해 괜찮은지 직접 묻는다', result: '유진이가 "사실 요즘 많이 힘들어"라고 답한다.', impact: [{ who: '유진', text: '이야기를 꺼낼 틈이 생긴다', tone: 1 }],
            next: { text: '유진이가 "선생님한테는 절대 말하지 마"라고 한다.', choices: [
              { id: 'go2', text: '"네가 걱정돼서 혼자 들고 있을 수 없어. 상담 선생님께 같이 가자"고 한다', result: '다음 날 함께 상담실에 간다.', impact: [{ who: '유진', text: '어른과 이어진다', tone: 1 }], ending: '늦게 알아차렸어도 지금 잇는 것이 중요하다.' },
              { id: 'secret2', text: '약속했으니 비밀로 한다', result: '유진이는 다시 연락이 뜸해진다.', impact: [{ who: '유진', text: '도움에서 멀어진다', tone: -1 }], ending: '생명과 관련될 수 있는 비밀은 지키지 않는다.' }] } },
          { id: 'rumor', text: '다른 친구들과 유진이 이야기를 수군거린다', result: '소문이 유진이 귀에 들어간다.', impact: [{ who: '유진', text: '더 마음을 닫는다', tone: -1 }], ending: '걱정은 소문이 아니라 직접 묻고 잇는 데 써야 한다.' }] } },
      { id: 'ask', text: '유진이에게 따로 "요즘 힘들어 보여. 괜찮아?"라고 직접 묻는다', result: '유진이가 잠시 뒤 "사실 요즘 많이 힘들어"라고 답한다.', impact: [{ who: '유진', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '이야기를 들어 보니 유진이는 몇 주째 잠을 못 자고 "사라지고 싶다"는 생각도 든다고 한다. 그리고 "아무한테도 말하지 마"라고 한다.', choices: [
          { id: 'go', text: '"네가 소중해서 혼자 들고 있을 수 없어. 상담 선생님께 같이 가자"고 한다', result: '유진이가 망설이다 고개를 끄덕인다.', impact: [{ who: '유진', text: '믿을 만한 어른과 이어질 길이 열린다', tone: 1 }],
            next: { text: '상담 선생님과 이야기한 뒤, 유진이가 "이제 됐으니 너는 신경 쓰지 마"라고 한다.', choices: [
              { id: 'stay', text: '평소처럼 연습에 같이 가자고 하며 곁에 있어 준다', result: '유진이가 다음 연습에 나온다.', impact: [{ who: '유진', text: '도움과 일상이 함께 이어진다', tone: 1 }], ending: '어른과 이은 뒤에도 친구는 곁에서 평소처럼 함께한다.' },
              { id: 'leave', text: '상담을 받았으니 이제 내 일은 끝났다고 연락을 끊는다', result: '유진이는 동아리에서 다시 혼자가 된다.', impact: [{ who: '유진', text: '곁의 연결이 줄어든다', tone: -1 }], ending: '상담은 끝이 아니라 이어 가기의 시작이다.' }] } },
          { id: 'fix', text: '내가 매일 들어 주면 된다며 혼자 해결하려 한다', result: '몇 주가 지나도 유진이의 잠과 기분은 그대로다.', impact: [{ who: '나', text: '혼자 감당하기 벅차다', tone: -1 }, { who: '유진', text: '전문적인 도움이 늦어진다', tone: -1 }], ending: '친구는 들어 주고 잇는 사람이지, 혼자 해결하는 사람이 아니다.' }] } },
      { id: 'joke', text: '"또 왜 그래, 공연 전이라 예민하구나"라고 넘긴다', result: '유진이의 답장이 오지 않는다.', impact: [{ who: '유진', text: '말해도 소용없다고 느낀다', tone: -1 }], ending: '평소와 다른 말은 가볍게 넘기지 않고 직접 묻는다.' }] };
    const FRIEND_R = [{ id: 'ask', text: '걱정되면 직접 물어보는 것이 괜찮다' }, { id: 'secret', text: '생명과 관련될 수 있는 비밀은 지키지 않는다' }, { id: 'link', text: '친구는 혼자 해결하지 않고 어른과 잇는다' }, { id: 'drama', text: '관심을 끌려는 말이니 무시해도 된다', why: '평소와 다른 말은 도움이 필요하다는 신호일 수 있어요. 가볍게 넘기지 않아요.' }, { id: 'trust', text: '비밀을 지켜야 친구가 나를 믿는다', why: '믿음보다 친구의 안전이 먼저예요. 함께 가자고 말하는 것도 믿음을 지키는 방법이에요.' }];
    const PLACES = [{ name: '학교 상담실', icon: 'school', at: [1, 1], legend: '학교 상담실' }, { name: '청소년 상담 기관', icon: 'library', at: [4, 0], legend: '청소년 상담 기관' }, { name: '지역 정신건강 기관', icon: 'office', at: [5, 2], legend: '지역 정신건강 기관' }, { name: '병원 정신건강의학과', icon: 'hospital', at: [3, 3], legend: '병원 정신건강의학과' }, { name: '전화 상담 창구', icon: 'post', at: [0, 3], legend: '전화 상담 창구' }, { name: '태민이네 집', icon: 'apartment', at: [2, 2] }];
    const ROUTE = { title: '태민이 동네 도움 경로(가상)', places: PLACES };
    const MEANS = { school: '학교 상담실', library: '청소년 상담 기관', office: '지역 정신건강 기관', hospital: '병원 정신건강의학과', post: NUM };

    MODS.push(
      M({
        id: 'intro.barrier-feel', type: 'intro', title: '도움 요청을 막는 마음',
        method: '도움 요청을 막는 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 두 장면(남이 알까 봐·말해도 소용없을 것 같아)만 함께 짝짓는다.', base: '세 장면의 마음(창피함·두려움·귀찮음)을 짝짓는다.', challenge: '세 장면의 마음에 \'남의 시선 장벽\'처럼 장벽 이름을 붙여 말한다.' },
        intro: {
          teacher: '"가상 인물 태민이는 몇 주째 마음이 무거운데 상담실 앞에서 자꾸 돌아서요. 태민이의 마음속 말에는 어떤 마음이 숨어 있을까요?" 시연 단추로 장면과 마음이 짝지어지는 모습을 보인다. "상담은 정말 심각한 사람만 가는 곳"이라는 말이 나오면 "감기에 걸렸을 때 많이 아파야만 보건실에 가나요?"라고 되묻는다. 오늘은 내 경험을 말하는 시간이 아니라 태민이의 마음을 이름 붙여 보는 시간이라는 점을 먼저 밝힌다.',
          student: '가상 인물 태민이가 상담실 앞에서 돌아서는 장면마다 그 마음이 무엇인지 짝지어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'see', label: '"누가 보면 어떡하지?"' }, { id: 'scare', label: '"말하면 큰일이 될 것 같아"' }, { id: 'tired', label: '"가 봤자 달라질 게 없을 거야"' }], cards: [{ id: 'shy', text: '창피함' }, { id: 'fear', text: '두려움' }, { id: 'lazy', text: '귀찮음' }] }, sequence: [{ match: { see: 'shy', scare: 'fear', tired: 'lazy' } }] },
          art: { draw: 'a paper student standing in a school hallway in front of a softly lit counseling room door, three small thought clouds above holding a blushing face, a trembling leaf and a heavy stone', banner: '문 앞에서 돌아서는 마음', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: `학생 자신의 경험·상담 여부를 묻지 않는다(가상 인물 태민). ${MH_NOTE}`,
      }),
      M({
        id: 'intro.path-timeline', type: 'intro', title: '알아차림부터 이어가기까지',
        method: '알아차림부터 이어가기까지', tool: 'timeline', minutes: 7,
        levels: { easy: '알아차리기·말하기·상담하기 세 단계만 함께 놓는다.', base: '이어 가기까지 네 단계를 차례로 놓는다.', challenge: '단계마다 도움을 주는 사람(나·친구·보호자·상담 선생님·전문가)을 칠판에 붙여 말한다.' },
        intro: {
          teacher: '"마음이 힘들 때 도움은 한 번에 오지 않고 단계를 밟아 와요. 어떤 차례일까요?" 시연 단추로 네 단계가 시간 줄에 놓이는 모습을 보인다. "상담 한 번 받으면 끝나는 것"이라는 말이 나오면 마지막 \'이어 가기\' 카드를 가리키며 "감기도 약 한 번으로 다 낫나요?"라고 묻는다. 학교 상담실은 진단이나 약 처방을 하는 곳이 아니라, 필요하면 전문가와 이어 주는 곳이라는 점도 짚는다.',
          student: '마음이 힘들 때 도움을 받는 과정을 알아차리기부터 이어 가기까지 차례대로 놓아 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['처음', '나중'], slots: 4, cards: [STEPS[2], STEPS[0], STEPS[3], STEPS[1]] }, sequence: [{ order: STEPS }] },
          art: { draw: 'four paper stepping stones crossing a calm stream, each stone with a small symbol: an eye, a speech bubble, a door, a growing sprout, a paper student stepping onto the second stone', banner: '도움은 단계로 와요', extra: [{ motif: 'sprout', x: 300, y: 96 }] },
        },
        notes: `기관의 역할은 일반 설명이다(사람 확인). ${MH_NOTE}`,
      }),

      M({
        id: 'activity.friend-dilemma', type: 'activity', title: '친구의 달라진 말 갈림길',
        method: '친구의 위기 신호 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길 하나에서 고르고 결과와 근거 카드를 본다.', base: '갈림길 둘(묻기 → 비밀 요청)을 따라가고 근거 카드를 고른다.', challenge: '갈림길 셋(상담 뒤 곁에 있기)까지 따라가고 근거 카드를 고른다.' },
        activity: {
          title: '친구의 달라진 말 갈림길', tool: 'dilemma',
          teacher: '"유진이가 단체방에 남긴 말은 평소와 달라요. 여러분이 \'나\'라면 어떻게 할까요?" 고를 때마다 "이 선택으로 유진이는 혼자가 되나요, 이어지나요?"를 묻는다. "직접 물어보면 오히려 나쁜 생각을 하게 만든다"는 학생에게 "걱정되면 직접 물어도 괜찮아요. 묻는 것은 이야기를 꺼낼 틈을 주는 일이에요"라고 답한다. "비밀을 지켜야 친구"라는 말에는 생명과 관련될 수 있는 비밀은 지키지 않고 어른과 함께 간다는 점을 짚는다. 학생이 혼자 해결하는 길이 아니라 잇는 길을 고르도록 결과를 끝까지 보게 한다.',
          task: '유진이의 달라진 말을 본 \'나\'의 선택을 이어 가며, 유진이가 혼자가 되는지 이어지는지 따라가요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL123('\'나\'가 되어 유진이에게 할 행동을 갈림길마다 고르고, 그 길을 고른 근거 카드를 고르세요.', FRIEND, [['ask', 'go', 'stay'], ['wait', 'ask2', 'go2']], FRIEND_R, ['ask', 'link'], { d: 0.35, opt: { title: '친구의 달라진 말', revealAfterCheck: true } }),
            EXPLOREQ('처음과 다른 길을 하나 더 끝까지 가 보고, 두 길에서 유진이가 어떻게 되는지 견주며 점검하세요.', FRIEND, FRIEND_R, ['지켜보기만 한 길과 직접 물은 길의 결과를 견주었다', '비밀 요청에서 어떤 선택이 유진이를 지키는지 확인했다'], { d: 0.4, more: { conclude: '알아차리고, 직접 묻고, 혼자 들고 있지 않고 어른과 잇는 것 — 그리고 그 뒤에도 곁에 있는 것이 친구의 몫이에요.' } }),
            DIL2('유진이를 상담실에 데려가기 전, 유진이가 망설일 때 할 말을 고르세요.', { text: '상담실 앞에서 유진이가 "선생님이 부모님께 다 말하면 어떡해?"라며 멈춰 섰다.', motif: 'house', choices: [
              { id: 'push', text: '"그냥 들어가"라며 등을 민다', result: '유진이가 더 굳어 돌아서려 한다.', impact: [{ who: '유진', text: '억지로 끌려가는 느낌이 든다', tone: -1 }], ending: '걱정을 들어 주지 않으면 발걸음이 멈춘다.' },
              { id: 'hear', text: '"그게 걱정되는구나. 그것도 선생님께 먼저 물어보자"고 한다', result: '유진이가 고개를 끄덕인다.', impact: [{ who: '유진', text: '걱정을 말해도 된다는 것을 안다', tone: 1 }],
                next: { text: '상담 선생님이 "무엇이 걱정되는지부터 이야기해 볼까?"라고 한다.', choices: [
                  { id: 'with', text: '유진이가 원하면 처음 몇 분 곁에 같이 앉아 있는다', result: '유진이가 조금씩 이야기를 시작한다.', impact: [{ who: '유진', text: '편하게 첫마디를 꺼낸다', tone: 1 }], ending: '함께 가 주는 것만으로도 첫걸음이 쉬워진다.' },
                  { id: 'talk', text: '내가 유진이 대신 다 설명해 버린다', result: '유진이는 아무 말도 하지 못하고 끝난다.', impact: [{ who: '유진', text: '자기 이야기를 할 기회를 놓친다', tone: -1 }], ending: '곁에 있되, 이야기는 유진이가 하게 한다.' }] } }] },
            [['hear', 'with']], [{ id: 'listen', text: '망설이는 마음을 먼저 들어 주면 발걸음이 이어진다' }, { id: 'force', text: '빨리 끝내려면 억지로라도 들여보내야 한다', why: '억지로 밀면 걱정이 커져 돌아설 수 있어요.' }], ['listen'], { d: 0.3 }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '유진이처럼 평소와 다른 말을 남긴 친구에게 직접 물어볼 첫마디를 한 문장으로 쓰세요.' }] },
        notes: `가상 장면이며 방법·수단을 묘사하지 않는다. 생명존중 crisis-connect 와 틀(알아차리고 → 묻고 → 듣고 → 잇기)은 맞추되 장면은 다르게 했다. ${MH_NOTE}`,
      }),
      M({
        id: 'activity.route-map', type: 'activity', title: '도움 경로 지도 만들기',
        method: '도움 경로 지도 만들기', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보이는 지도에서 상황에 맞는 곳을 찾고 범례를 채운다.', base: '이름이 보이지 않는 지도에서 상황 넷에 맞는 곳에 핀을 꽂고 범례를 채운다.', challenge: '밤 시간 문항에서 연결할 때 할 말 보기까지 고른다.' },
        activity: {
          title: '도움 경로 지도 만들기', tool: 'map',
          teacher: `"가상 인물 태민이의 동네 지도예요. 마음이 힘들 때 상황마다 어디로 이어질 수 있을까요?" 칠판의 '전화 상담 창구' 옆에 ${NUM}를 적어 두고 학교에서 확인한 번호와 운영 시간을 채운다. 문항마다 "지금은 학교가 열려 있는 시간인가요? 처음 가는 곳인가요, 이어 가는 곳인가요?"라고 묻는다. "병원은 아주 심할 때만 가는 곳"이라는 학생에게 "상담 선생님이 함께 정해 이어 주는 곳이 병원일 수도 있어요. 단계에 따라 가는 곳이 달라질 뿐이에요"라고 답한다.`,
          task: '상황마다 태민이가 이어질 곳에 핀을 꽂고, 지도 범례를 채워요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '학기 중, 태민이가 처음으로 마음이 힘든 이야기를 하고 싶어요. 학교 안에서 먼저 갈 곳에 핀을 꽂으세요.', toolOptions: ROUTE, target: { place: '학교 상담실' }, difficulty: 0.2 },
            { prompt: '상담 선생님과 이야기한 뒤, 잠과 기분 문제가 오래 이어져 전문 진료를 받기로 함께 정했어요. 이어질 곳에 핀을 꽂으세요.', toolOptions: ROUTE, target: { place: '병원 정신건강의학과' }, difficulty: 0.3 },
            { prompt: '방학이라 학교가 닫혀 있어요. 동네에서 청소년이 상담을 이어 갈 수 있는 곳에 핀을 꽂으세요.', toolOptions: ROUTE, target: { place: '청소년 상담 기관' }, difficulty: 0.25 },
            { prompt: '밤 늦은 시간, 학교와 기관이 닫혀 있는데 태민이가 지금 이야기할 곳이 필요해요. 보호자에게 알리는 것과 함께 이용할 곳에 핀을 꽂으세요.', toolOptions: ROUTE, target: { place: '전화 상담 창구' }, difficulty: 0.3,
              levels: { challenge: { prompt: '밤 늦은 시간 이용할 곳에 핀을 꽂고, 태민이가 전화로 처음 할 말을 고르세요.', toolOptions: { ask: { q: '전화 상담 창구에 처음 할 말로 알맞은 것은?', choices: ['"요즘 마음이 많이 힘들어서 이야기하고 싶어요"', '"아무것도 아니에요, 그냥 걸었어요"', '"제가 이상한 건지 판정해 주세요"'], why: ['', '힘든 마음을 그대로 말해도 괜찮아요. 상담원이 이어서 물어봐 줘요.', '전화 상담은 판정이 아니라 이야기를 듣고 함께 길을 찾는 곳이에요.'] } }, target: { place: '전화 상담 창구', pick: 0 } } } },
            { prompt: '지도 범례의 빈칸을 눌러 기호마다 어떤 곳인지 채우세요.', toolOptions: { mode: 'legend', title: '태민이 동네 도움 경로(가상)', places: PLACES, meanings: MEANS }, target: { legend: MEANS }, difficulty: 0.3,
              conclude: '처음은 학교 상담실, 전문 진료가 필요하면 병원, 방학에는 청소년 상담 기관, 밤에는 전화 상담 창구와 보호자 — 시간과 단계에 따라 이어질 곳이 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교·지역의 실제 도움 경로를 교사와 함께 확인해 채우세요.', columns: ['상황', '이어질 곳', '가는 법·연락처'], cells: [['학기 중 처음', '학교 상담실', ''], ['방학 중', '', ''], ['밤 늦은 시간', '전화 상담 창구', NUM]] }] },
        notes: `지도는 가상이다. 번호는 쓰지 않고 '${NUM}' 자리를 둔다 — 교사가 학교에서 확인한 번호·운영 시간과 지역 기관을 활동지에 채운다. ${MH_NOTE}`,
      }),
      M({
        id: 'activity.myth-sort', type: 'activity', title: '정신건강 편견과 사실 가르기',
        method: '정신건강 편견과 사실', tool: 'sortboard', minutes: 16,
        levels: { easy: '문장 카드 6장을 세 바구니에 나누고, 맞지 않으면 바로 까닭을 알려 준다(장 수 보임).', base: '문장 카드 8장을 나누고 출처와 도움 말을 가른다.', challenge: '카드가 더해진 판에서 나누고, 확인이 필요한 말을 어디서 확인할지 활동지에 쓴다.' },
        activity: {
          title: '정신건강 편견과 사실 가르기', tool: 'sortboard',
          teacher: '"정신건강에 대해 흔히 듣는 말이에요. 편견일까요, 사실일까요, 아니면 직접 물어 확인해야 할 말일까요?" 카드를 넣을 때마다 "이 말을 믿으면 도움 요청이 쉬워지나요, 어려워지나요?"를 묻는다. "스스로 이겨내야 진짜 강한 것"을 사실 칸에 넣는 학생에게 "다리를 다쳤을 때 깁스를 하는 사람은 약한 사람인가요?"라고 되묻는다. \'상담 기록이 진학에 불리하다\'는 소문은 단정하지 않고, 상담 선생님께 직접 물어 확인할 수 있다는 점을 짚는다.',
          task: '정신건강에 대한 말을 편견·사실·확인할 것으로 나누고, 믿을 만한 출처와 도움이 되는 말을 가려요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('정신건강에 대한 말을 알맞은 바구니에 나누세요.', ['편견', '사실', '직접 물어 확인할 것'], [
              ['스스로 이겨내야 진짜 강한 것이다', '상담은 아주 심각한 사람만 받는다', '정신건강 진료는 약만 주는 곳이다'],
              ['마음이 힘든 일은 누구에게나 생길 수 있다', '도움을 받으면 나아질 수 있다'],
              ['상담 기록이 진학에 불리하게 남는다', '상담 내용이 누구에게 알려지는지'],
            ], { k: 2, hard: [['정신건강 문제는 의지가 약해서 생긴다'], ['친구에게 털어놓는 것도 도움의 시작이다'], []], d: 0.3 }),
            BOARDQ('정신건강 정보를 믿을 만한 출처와 더 확인이 필요한 출처로 나누세요.', ['믿을 만한 출처', '더 확인이 필요한 출처'], [
              ['학교 상담실 안내문', '공공기관 정신건강 정보 누리집', '상담 선생님의 설명'],
              ['익명 커뮤니티의 "카더라" 글', '조회 수 높은 짧은 영상의 댓글', '이것만 하면 낫는다는 광고'],
            ], { k: 2, d: 0.3, more: { hints: ['누가 썼는지, 무엇을 팔려는지, 근거를 밝혔는지 살펴요.'] } }),
            BOARDQ('친구에게 하는 말을 도움 요청을 막는 말과 돕는 말로 나누세요.', ['도움 요청을 막는 말', '도움 요청을 돕는 말'], [
              ['"그런 걸로 상담까지 받아?"', '"네가 너무 예민한 거야"', '"다들 그 정도는 참아"'],
              ['"이야기해 줘서 고마워"', '"상담실에 같이 가 줄까?"', '"힘든 게 당연할 수 있어"'],
            ], { k: 2, hard: [['"그냥 잊어버려"'], ['"내가 끝까지 들을게"']], d: 0.3, more: { conclude: '편견은 도움 요청을 막고, 정확한 정보와 따뜻한 말은 도움으로 가는 길을 열어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'직접 물어 확인할 것\' 바구니의 말 하나를 골라, 누구에게(어디서) 어떻게 확인할지 쓰세요.' }] },
        notes: `상담 기록의 보관·공개 범위는 근거가 없어 단정하지 않고 '상담 선생님께 직접 묻기'로 다룬다(사람 확인). ${MH_NOTE}`,
      }),
      M({
        id: 'activity.script', type: 'activity', title: '도움을 청하는 말 대본',
        method: '도움을 청하는 말 대본', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 4문장 안팎으로 대본을 쓴다.', base: '5문장 안팎으로 대본을 쓰고 기준표를 스스로 점검한다.', challenge: '기준 하나(친구에게 어른에게 알린 까닭을 전하는 말)를 더해 점검한다.' },
        activity: {
          title: '도움을 청하는 말 대본', tool: 'rubric-writing',
          teacher: '"유진이 일을 상담 선생님께 알리려고 해요. 막상 앞에 서면 무슨 말부터 할지 막막하죠. 대본을 미리 써 두면 첫마디가 쉬워져요." 기준표(사실 전달·걱정 표현·함께 할 일)를 함께 읽는다. "그냥 \'유진이가 좀 이상해요\'라고 하면 된다"는 학생에게 "선생님이 무엇을 보고 들었는지 알면 더 빨리 도울 수 있지 않을까요? 본 것과 들은 말을 그대로 적어 봐요"라고 권한다. 대본에는 실제 친구 이름 대신 가상 인물 유진이를 쓰게 한다.',
          task: '가상 인물 유진이의 일을 믿을 만한 어른에게 알리는 대본과, 망설이는 마음을 전하는 말을 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('유진이의 일을 상담 선생님께 알리는 대화 대본을 5문장 안팎으로 쓰고 기준표로 점검하세요.', '상담 선생님께 유진이의 일을 알리는 대본을 쓰세요(실제 친구 이름은 쓰지 않아요).', ['내가 보고 들은 사실을 썼다', '걱정되는 마음을 표현했다', '선생님께 함께 해 달라고 할 일을 썼다'], { min: 60, max: 400, sent: [4, 7], starter: '선생님, 친구 일로 말씀드릴 게 있어요. 요즘 유진이가 ~', sample: '선생님, 친구 일로 말씀드릴 게 있어요. 요즘 유진이가 연습에 빠지고 단체방에 "다 의미 없다"는 말을 남겼어요. 따로 물어보니 몇 주째 잠을 못 잔다고 했어요. 혼자 들고 있기에는 너무 걱정돼서 왔어요. 유진이와 같이 이야기해 주실 수 있을까요?', plus: '유진이에게 어른에게 알린 까닭을 전할 말을 썼다', d: 0.35 }),
            RWQ('유진이에게 "선생님께 같이 가자"고 권하는 말을 3문장 안팎으로 쓰고 점검하세요.', '유진이에게 상담 선생님께 같이 가자고 권하는 말을 쓰세요.', ['유진이를 걱정하는 마음을 먼저 말했다', '혼자 들고 있을 수 없는 까닭을 말했다', '함께 가겠다고 말했다'], { min: 30, max: 300, sent: [2, 5], starter: '유진아, 네가 걱정돼서 ~', d: 0.3 }),
            RWQ('태민이가 자기 마음이 힘들 때 보호자에게 처음 꺼낼 말을 2~4문장으로 써 주세요(가상 인물의 대본).', '가상 인물 태민이가 보호자에게 힘든 마음을 처음 꺼내는 말을 쓰세요.', ['언제부터 어떤 점이 힘든지 썼다', '바라는 도움(들어 주기·상담 같이 알아보기)을 썼다', '판단이나 해결을 서두르지 않아도 된다고 말했다'], { min: 30, max: 300, sent: [2, 4], starter: '저 요즘 ~ 때문에 많이 힘들어요.', d: 0.3, more: { conclude: '도움을 청하는 말은 사실·마음·바라는 것 세 가지를 담으면 듣는 사람이 바로 함께할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '대본을 쓰며 가장 꺼내기 어려웠던 문장과, 그 문장을 쉽게 바꾼 말을 쓰세요.' }] },
        notes: `대본은 가상 인물로 쓰고 실제 친구·가족 이름이나 자기 경험을 쓰게 하지 않는다. 쓴 글은 교사 확인용이며 발표를 강요하지 않는다. ${MH_NOTE}`,
      }),

      M({
        id: 'wrap.self-care', type: 'wrap', title: '나의 마음 관리 점검',
        method: '나의 마음 관리 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 잠·움직임 두 항목만 함께 읽고 하나를 고르게 한다.', base: '잠·움직임·연결·쉼 네 항목 가운데 이번 주 해 볼 것을 표시한다.', challenge: '네 항목에 표시하고, 활동지에 힘들 때 도움을 청할 사람을 적는다.' },
        wrap: {
          teacher: '"마음 관리는 힘들 때만 하는 게 아니라 평소에 조금씩 하는 거예요. 이번 주에 해 볼 것 하나 이상에 표시해 봐요. 이 표시는 걷지 않고 채점하지도 않아요." 항목을 함께 읽고 고르게 한다. "마음 관리는 혼자 알아서 하는 것"이라는 학생에게 \'연결\' 항목을 가리키며 "누군가와 이야기하는 것도 마음 관리의 한 칸이에요"라고 말한다. 점검으로 해결되지 않는 힘든 마음은 오늘 배운 도움 경로로 잇는다는 점을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '이번 주 마음 관리', items: [{ id: 'sleep', text: '잠드는 시각을 비슷하게 지키기' }, { id: 'move', text: '하루 한 번 밖에서 걷기' }, { id: 'link', text: '믿는 사람과 짧게라도 이야기하기' }, { id: 'rest', text: '화면 없이 쉬는 시간 갖기' }] }, prompt: '이번 주에 해 볼 마음 관리 항목에 표시하세요(걷지 않아요).', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '마음 관리 점검으로도 힘든 마음이 2주 넘게 이어질 때 알맞은 행동을 고르세요.', options: ['점검을 더 열심히 혼자 한다', '학교 상담실 등 도움 경로로 잇는다', '괜찮아질 때까지 아무에게도 말하지 않는다'], answer: 1, difficulty: 0.15, explain: '스스로 하는 관리와 도움 요청은 함께 가요. 힘든 마음이 이어지면 도움 경로로 이어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 마음 관리',
          items: [
            { type: 'check', prompt: '이번 주에 해 볼 마음 관리에 표시하세요(혼자 보기 — 걷지 않아요).', options: ['잠드는 시각 지키기', '밖에서 걷기', '믿는 사람과 이야기하기', '화면 없이 쉬기'] },
            { type: 'short', prompt: '힘들 때 이야기할 수 있는 사람이나 곳을 하나 쓰세요(혼자 보기 — 걷지 않아요).' },
          ],
        },
        notes: `표시와 활동지는 학생 혼자 보는 칸이며 걷거나 채점하지 않는다. '2주 넘게'는 일반 안내 문구다(사람 확인: 보건복지부 정신건강 정보). ${MH_NOTE}`,
      }),
      M({
        id: 'wrap.pledge', type: 'wrap', title: '도움 요청 응원 메시지 카드',
        method: '도움 요청 응원 메시지', tool: 'collage', minutes: 10,
        levels: { easy: '교사가 준 문구("도움을 청하는 것도 용기예요") 가운데 하나를 골라 꾸민다.', base: '문구를 직접 써서 조각으로 꾸민다.', challenge: '메시지를 붙일 대상(후배·같은 반)과 장소(게시판·상담실 앞)를 정해 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 본 태민이와 유진이에게, 그리고 상담실 앞에서 돌아서는 누군가에게 건넬 응원 카드를 만들어 봐요. 도움을 청하는 것이 약함이 아니라 용기라는 메시지예요." 조각으로 카드를 꾸민 뒤 점검 칸을 확인하게 한다. "힘내!"만 쓴 학생에게 "힘을 내라는 말보다, 어디로 가면 되는지 함께 알려 주면 더 힘이 되지 않을까요?"라고 권한다. 실제 사람 얼굴·이름이나 방법 묘사를 넣지 않는다는 약속을 먼저 정한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '도움 요청을 응원하는 메시지 카드를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['메시지 글을 넣을 자리를 정했다', '도움을 청할 곳(상담실 등)을 함께 알렸다', '실제 사람 얼굴·이름을 넣지 않았다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '응원 메시지로 가장 알맞은 것을 고르세요.', options: ['"혼자 이겨내야 진짜 강한 거야"', '"도움을 청하는 것도 용기예요. 상담실 문은 열려 있어요"', '"그 정도로 힘들어하면 안 돼"'], answer: 1, difficulty: 0.15, explain: '용기를 인정하고 갈 곳을 함께 알려 주는 말이 도움 요청을 쉽게 해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움 요청 응원 메시지',
          items: [
            { type: 'short', prompt: '내 카드에 넣을 응원 메시지를 한 문장으로 쓰세요.' },
            { type: 'table', prompt: '메시지를 붙일 대상과 장소를 정하세요.', columns: ['대상', '장소', '그렇게 정한 까닭'], cells: [['', '', '']] },
          ],
          easy: { note: '고를 수 있는 문구: "도움을 청하는 것도 용기예요" · "혼자 들고 있지 않아도 돼요" · "상담실 문은 열려 있어요"', items: [{ type: 'short', prompt: '고른 문구를 쓰고, 함께 알릴 도움 받을 곳을 쓰세요.' }] },
        },
        notes: `카드에는 방법·수단·실제 사람 얼굴과 이름을 넣지 않는다. 게시 전 교사가 문구를 확인한다. ${MH_NOTE}`,
      }),
    );
  }

  /* 사람 확인(alcohol-tobacco-policy):
   *   - [intro.sign-body · activity.help-dilemma · activity.help-order] 급성 알코올 중독 때 살필 신호(불러도 반응 없음·숨이 느리거나 고르지 않음·피부가 차갑고 창백함)와
   *       '깨워도 반응이 없으면 119, 토할 수 있으니 옆으로 눕히고 혼자 두지 않는다, 찬물·커피·샤워로 술이 깨지 않는다' → 질병관리청 국가건강정보포털·소방청 응급처치 안내·한국건강증진개발원
   *   - [activity.help-dilemma 셋째 문항] 부르면 또렷이 대답하고 숨이 고르면 곁에서 지켜보고, 반응이 흐려지면 119 — 헷갈리면 119 에 묻는다 → 소방청·질병관리청
   *   - [activity.help-order] 신고할 때 위치를 먼저, 그다음 상황과 숨 상태를 말하고 상황실 안내를 따른다 → 소방청 119 신고 안내
   *   - [intro.ad-story · activity.policy-chart · activity.debate · wrap.policy-sort] 담배·주류 규제 정책의 종류(광고 제한·경고 그림·가격 정책·금연 구역·판매 제한·금연 상담 지원)와 목적 일반 설명
   *       → 보건복지부·한국건강증진개발원(국가금연지원센터) 안내. 판매 연령·광고 시간대 같은 법 수치·조문은 쓰지 않았다
   *   - [wrap.proposal] 보건소에서 금연 상담을 받을 수 있다는 일반 설명 → 지역 보건소·보건복지부
   * 계획대로 못 한 것:
   *   - activity.help-order: 계획 차례는 '혼자 두지 않기 → 의식·호흡 확인 → 옆으로 눕히기 → 119 신고'인데, saf-drug/h.js·saf-firstaid/h.js 문구('반응이 없으면 119')와 맞춰
   *       '곁에 머물기 → 반응·숨 확인 → 사람을 콕 집어 119 부탁 → 옆으로 눕혀 지켜보기'로 놓았다(119 를 늦추지 않게). 순서는 사람 확인.
   *   - intro 의 levels(신호 2·3개, 장면 3·4장)는 교사 진행 방식이다(도입 시연은 하나뿐).
   *   - wrap.policy-sort·wrap.proposal: 출구 질문에는 단계별 판이 없어 '칸 2개/3개·항목 2/3개'는 교사 진행 방식으로 적었다.
   *   - 청소년 음주 장면은 쓰지 않고, 가족 행사에서 술을 마신 성인 사촌을 돕는 장면으로 했다(saf-drug 졸업 여행 장면과 겹치지 않게).
   */
  // ======================================================================================================
  // 7. 음주·흡연 위험과 규제 정책 분석 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('alcohol-tobacco-policy', [10, 11, 12]);
    const FAMILY = { text: '명절 저녁, 술을 많이 마신 성인 사촌 형 정우가 거실 소파에 누웠다. 이름을 불러도 눈을 겨우 떴다 감는다. 한 어른은 "자고 나면 괜찮다"고 한다.', who: '나', motif: 'moon', choices: [
      { id: 'check', text: '어깨를 두드리며 크게 부르고 숨쉬는 모습을 살핀다', result: '불러도 대답이 없고, 숨이 느리고 고르지 않다.', impact: [{ who: '정우 형', text: '위험 신호가 일찍 드러난다', tone: 1 }],
        next: { text: '숨이 느리다고 말했지만 어른들은 "원래 술 마시면 저래"라며 아침까지 두자고 한다.', choices: [
          { id: 'call', text: '숨과 반응이 이상하다고 다시 말하고 119에 신고한다', result: '상황실이 위치를 묻고, 옆으로 눕혀 곁을 지키라고 안내한다.', impact: [{ who: '정우 형', text: '도움이 빨리 출발한다', tone: 1 }],
            next: { text: '구급대를 기다리는 동안 형이 토할 것처럼 몸을 뒤척인다.', choices: [
              { id: 'side', text: '옆으로 눕히고 곁에서 숨쉬기를 지켜본다', result: '토한 것이 숨길을 막지 않고, 구급대가 와서 형을 데려간다.', impact: [{ who: '정우 형', text: '위험한 순간을 넘긴다', tone: 1 }], ending: '반응이 없으면 119, 옆으로 눕히고 혼자 두지 않는다.' },
              { id: 'water', text: '정신 차리라고 찬물을 마시게 한다', result: '형이 사레가 들려 숨이 더 거칠어진다.', impact: [{ who: '정우 형', text: '숨길이 위험해진다', tone: -1 }], ending: '반응이 흐린 사람에게는 아무것도 먹이지 않는다.' }] } },
          { id: 'wait', text: '어른 말대로 아침까지 두기로 한다', result: '모두 잠들고 아무도 형의 숨을 살피지 않는다.', impact: [{ who: '정우 형', text: '위험한 상태로 혼자 남는다', tone: -1 }], ending: '말한 사람이 누구든, 숨과 반응이 판단의 기준이다.' }] } },
      { id: 'coffee', text: '진한 커피와 찬물 세수로 깨우려 한다', result: '형은 몸을 가누지 못하고 커피를 흘리며 사레가 들린다.', impact: [{ who: '정우 형', text: '깨지 않고 숨길만 위험해진다', tone: -1 }],
        next: { text: '형이 축 늘어지며 반응이 더 약해졌다.', choices: [
          { id: 'call2', text: '바로 119에 신고하고 옆으로 눕힌다', result: '늦었지만 도움이 출발한다.', impact: [{ who: '정우 형', text: '뒤늦게 도움을 받는다', tone: 0 }], ending: '커피·찬물은 술을 깨우지 못한다. 시간을 잃은 만큼 위험이 커진다.' },
          { id: 'shower', text: '샤워를 시키려고 일으켜 세운다', result: '형이 휘청이다 넘어질 뻔한다.', impact: [{ who: '정우 형', text: '넘어져 다칠 위험이 생긴다', tone: -1 }], ending: '샤워로 술은 깨지 않고 넘어질 위험만 커진다.' }] } },
      { id: 'leave', text: '자게 두고 방으로 들어간다', result: '거실 불이 꺼지고 아무도 형을 보지 않는다.', impact: [{ who: '정우 형', text: '아무도 상태를 살피지 않는다', tone: -1 }], ending: '자는 것처럼 보여도 반응이 없으면 위험 신호다.' }] };
    const FAMILY_R = [{ id: 'resp', text: '깨워도 반응이 없고 숨이 이상하면 바로 119다' }, { id: 'side', text: '토할 수 있어 옆으로 눕히고 혼자 두지 않는다' },
      { id: 'sleep', text: '자고 나면 술은 저절로 깬다', why: '반응이 없는 잠은 쉬는 잠이 아니라 위험 신호일 수 있어요.' },
      { id: 'coffee', text: '커피와 찬물이 술을 빨리 깨운다', why: '커피·찬물·샤워는 술을 깨우지 못해요. 시간이 지나야 해요.' },
      { id: 'adult', text: '어른이 괜찮다고 하면 기다린다', why: '누가 말했든 숨과 반응이 기준이에요.' }];
    const TREND = [['1년', 30], ['2년', 29], ['3년', 29], ['4년(광고 제한)', 27], ['5년', 24], ['6년', 21], ['7년', 19]];
    const LINE = (more = {}) => Object.assign({ type: 'line', mode: 'read', title: '가상 도시 청소년 흡연 경험 비율(예시 자료, 실제 통계 아님)', unit: '%', xLabel: '해', yLabel: '흡연 경험 비율', data: TREND }, more);
    const POLICY_BUDGET = [{ id: 'counsel', text: '학교 앞 보건소 금연 상담 연결', price: 400000 }, { id: 'campaign', text: '학생이 만드는 금연 캠페인', price: 300000 }, { id: 'zone', text: '학교 주변 금연 구역 표지와 정비', price: 300000 }, { id: 'goods', text: '금연 문구 기념품 나눠 주기', price: 200000 }, { id: 'banner', text: '큰 현수막 하나', price: 250000 }];

    MODS.push(
      M({
        id: 'intro.sign-body', type: 'intro', title: '위험 신호를 살필 몸의 자리',
        method: '급성 알코올 중독 신호', tool: 'body', minutes: 7,
        levels: { easy: '교사가 눈(반응)과 가슴(숨) 두 자리를 함께 짚는다.', base: '눈·가슴·피부 세 자리에서 무엇을 살피는지 학생이 말한다.', challenge: '세 신호 가운데 하나라도 이상하면 왜 바로 119인지 근거를 말한다.' },
        intro: {
          teacher: '"술을 많이 마신 사람이 잠든 것처럼 보일 때, 그냥 자는 것인지 위험한 것인지 무엇으로 구별할까요?" 두세 명의 대답을 듣고 시연 단추로 눈·가슴·피부 세 자리가 표시되는 모습을 보여 준다. "자고 나면 깨잖아요"라는 말이 나오면 "크게 불러도 눈을 못 뜨고 숨이 느리다면, 그것도 쉬는 잠일까요?"라고 되묻는다. 반응(눈)·숨(가슴)·피부색(피부) 세 가지를 보고, 하나라도 이상하면 기다리지 않는다는 점을 짚는다.',
          student: '술을 많이 마신 사람을 살필 때 반응·숨·피부색을 볼 몸의 자리를 몸 그림에서 골라 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '가슴', '배', '피부', '무릎'], names: true }, sequence: [{ parts: ['눈', '가슴', '피부'] }] },
          art: { draw: 'a paper outline of a person lying on a sofa seen from above, three soft highlight circles on the eyes, the chest and the skin of the arm, a paper phone with a red cross nearby, warm evening light', banner: '반응·숨·피부색을 살펴요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '술을 마시는 모습은 그리지 않는다. 신호와 대응 문구는 saf-drug/h.js binge-drinking 과 같게 맞췄다. 학생에게 음주 경험이나 가족의 음주를 묻지 않는다.',
      }),
      M({
        id: 'intro.ad-story', type: 'intro', title: '광고 한 편의 장면 차례',
        method: '광고가 음주를 그리는 방식', tool: 'story', minutes: 7,
        levels: { easy: '앞의 세 장면만 함께 차례로 놓는다.', base: '네 장면을 차례로 놓고 장면마다 보여 주는 마음(지침·설렘·어울림·자유)을 말한다.', challenge: '장면마다 광고가 보여 주지 않은 위험을 하나씩 찾아 말한다.' },
        intro: {
          teacher: '"가상의 맥주 광고 한 편이에요. 장면 네 개가 어떤 차례로 이어질 때 메시지가 가장 강해질까요?" 시연 단추로 장면이 차례대로 놓이는 모습을 보여 준다. "광고는 그냥 분위기일 뿐"이라는 말이 나오면 "마지막 장면의 웃는 얼굴 옆에 무엇이 함께 보이나요?"라고 되묻는다. 광고는 술을 \'어울림·자유\'와 잇고, 다음 날·건강·운전은 보여 주지 않는다는 점을 짚고, 오늘은 그런 광고를 사회가 어떻게 다루는지(규제 정책) 분석한다고 밝힌다.',
          student: '가상 광고 장면 카드를 메시지가 점점 강해지는 차례로 놓고, 광고가 보여 주지 않은 것을 생각해 보세요.',
          demo: { tool: 'story', options: { mode: 'order', title: '가상 맥주 광고(실제 상품 아님)', slots: ['처음', '가운데', '고조', '끝'], cards: [{ id: 'logo', text: '로고와 함께 "오늘을 즐겨"', motif: 'star' }, { id: 'tired', text: '일에 지친 젊은이들의 저녁', motif: 'moon' }, { id: 'laugh', text: '모두 웃으며 어깨동무를 한다', motif: 'sun' }, { id: 'open', text: '병을 따는 순간 음악이 커진다', motif: 'cloud' }], shuffle: false }, sequence: [{ order: ['tired', 'open', 'laugh', 'logo'] }] },
          art: { draw: 'four paper storyboard frames of a fictional advertisement in a row: tired young adults at dusk, a bottle cap popping with music notes, friends laughing arm in arm, a big glowing slogan banner; one frame corner folded to reveal a hidden empty space', banner: '광고가 보여 주지 않는 것은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '광고·제품은 모두 가상이다. 실제 상표·광고 문구를 쓰지 않는다. 미디어 속 음주 장면 비평(saf-drug media-critique)과 달리 이 주제는 규제 정책 분석으로 이어진다.',
      }),

      M({
        id: 'activity.help-dilemma', type: 'activity', title: '명절 밤 사촌 형을 도울 갈림길',
        method: '친구가 쓰러졌을 때 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '명절 밤 장면의 첫 갈림길(살피기·깨우기·두기)만 고르고, 새벽 장면도 첫 갈림길까지 간다.', base: '명절 밤 장면은 두 번째 갈림길(어른이 기다리자고 할 때)까지, 새벽 장면(반응이 있는 사람)은 끝까지 간다.', challenge: '명절 밤 장면을 세 번째 갈림길(구급대를 기다리는 동안)까지 가고, 활동지에 다른 길과 견준다.' },
        activity: {
          title: '사촌 형을 도울 갈림길', tool: 'dilemma',
          teacher: '"계획에는 \'친구\'였지만 오늘 장면은 명절에 술을 마신 성인 사촌 형이에요. 어른이 \'자게 두자\'고 할 때 여러분은 어떻게 할까요?" 갈림길마다 "지금 형의 반응과 숨은 어떤가요?"라고 묻는다. 커피·찬물 길을 고른 학생에게 "그 길에서 형의 반응은 좋아졌나요, 숨길은 어떻게 됐나요?"라고 되묻는다. 어른의 말이라도 숨과 반응이 기준이며, 119 신고는 어른을 거스르는 일이 아니라 형을 지키는 일이라는 점을 짚는다.',
          task: '갈림길마다 고르고 결과를 따라가 본 뒤, 내 선택의 근거 카드를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL123('정우 형을 살피는 길을 끝까지 따라가고 근거를 고르세요.', FAMILY, [['check', 'call', 'side']], FAMILY_R, ['resp', 'side'], { d: 0.35, opt: { title: '명절 밤' } }),
            EXPLOREQ('같은 장면에서 다른 길을 하나 더 끝까지 가 보고 결과를 견주세요.', FAMILY, FAMILY_R, ['두 길의 끝 결과를 견주어 보았다', '시간이 늦어진 길에서 무엇을 잃었는지 말할 수 있다'], { d: 0.3, more: { conclude: '커피·찬물·기다리기는 모두 시간을 잃는 길이에요. 반응과 숨이 이상하면 119가 먼저예요.' } }),
            DIL2('새벽에 다른 장면이 생겼어요. 반응과 숨을 보고 알맞게 돕는 길을 고르고 근거를 고르세요.', { text: '새벽 1시, 술을 마신 성인 고모부가 소파에서 잠들었다. 이번에는 부르자 바로 눈을 뜨고 "응, 괜찮아"라고 또렷이 대답한다. 숨도 고르다.', who: '나', motif: 'moon', choices: [
              { id: 'watch', text: '곁의 어른에게 상태를 말하고 함께 지켜보자고 부탁한다', result: '어른 한 분이 거실에 남아 함께 지켜보기로 한다.', impact: [{ who: '고모부', text: '혼자 남지 않는다', tone: 1 }],
                next: { text: '한 시간 뒤, 고모부가 몸을 뒤척이며 속이 안 좋다고 한다.', choices: [
                  { id: 'keep', text: '옆으로 눕히고 반응이 흐려지면 바로 119에 알리기로 한다', result: '고모부가 옆으로 누운 채 다시 잠들고, 어른이 곁을 지킨다.', impact: [{ who: '고모부', text: '토해도 숨길이 막히지 않는다', tone: 1 }], ending: '반응이 있으면 곁에서 지켜보고, 흐려지면 바로 119다.' },
                  { id: 'alone', text: '모두 자러 가며 거실 불을 끈다', result: '아무도 고모부의 상태를 보지 않는다.', impact: [{ who: '고모부', text: '토해도 도울 사람이 없다', tone: -1 }], ending: '괜찮아 보여도 술을 많이 마신 사람은 혼자 두지 않는다.' }] } },
              { id: 'call', text: '걱정되어 바로 119에 전화한다', result: '상황실이 반응과 숨을 묻고, 곁에서 지켜보다 반응이 흐려지면 다시 알리라고 안내한다.', impact: [{ who: '고모부', text: '전문가의 안내를 받는다', tone: 1 }],
                next: { text: '안내를 듣고 전화를 끊었다.', choices: [
                  { id: 'follow', text: '안내대로 옆으로 눕히고 곁에서 지켜본다', result: '고모부가 편히 잠들고 숨이 고르다.', impact: [{ who: '고모부', text: '안전하게 밤을 보낸다', tone: 1 }], ending: '헷갈리면 119에 묻고 안내를 따르는 것도 좋은 판단이다.' },
                  { id: 'leave2', text: '괜찮다니 혼자 두고 방으로 간다', result: '거실에 고모부만 남는다.', impact: [{ who: '고모부', text: '아무도 상태를 살피지 않는다', tone: -1 }], ending: '\'지켜보라\'는 안내는 곁에 남으라는 뜻이다.' }] } }] }, [['watch', 'keep'], ['call', 'follow']], FAMILY_R, ['resp', 'side'], { d: 0.35, opt: { title: '새벽 거실' }, more: { conclude: '반응과 숨이 있으면 곁에서 지켜보고, 흐려지면 바로 119예요. 헷갈리면 119에 묻는 것도 좋은 판단이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '어른이 "자게 두자"고 할 때 내가 할 말을 한 문장으로 쓰고, 그렇게 말하는 근거를 덧붙이세요.' }] },
        notes: '학생에게 음주 경험이나 가족의 음주 상황을 묻지 않는다. 장면의 인물은 성인이다.',
      }),
      M({
        id: 'activity.help-order', type: 'activity', title: '돕는 차례 짝 실습',
        method: '돕는 행동 순서 실습', tool: 'timer', minutes: 16,
        levels: { easy: '돕는 차례 카드 3장(곁에 머물기·반응 확인·119 부탁)을 놓고 실습한다.', base: '카드 4장(옆으로 눕혀 지켜보기까지)과 신고할 때 말할 차례를 놓고 1분씩 짝 실습을 한다.', challenge: '짝과 역할(돕는 사람·쓰러진 사람)을 바꿔 한 번 더 하고 스스로 점검에 더한다.' },
        activity: {
          title: '돕는 차례 짝 실습', tool: 'timer',
          teacher: '"오늘 실습은 몸짓으로만 해요. 실제 119에 전화하지 않고, 짝을 세게 굴리지 않아요." 먼저 안전 점검을 함께 확인한다. 옆으로 눕히는 자세는 보건 교사가 실물로 시범을 보인다. "119는 어른만 하는 거예요"라는 학생에게 "그 자리에 나밖에 없거나 어른이 망설일 때, 누가 형의 숨을 지킬까요?"라고 묻는다. 신고할 때는 위치를 먼저 말해야 구급대가 출발할 수 있다는 점을 짚는다.',
          task: '돕는 차례를 카드로 놓고, 짝과 몸짓으로 실습한 뒤 해 본 것을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '실습을 시작하기 전에 안전 점검을 모두 확인하세요.', toolOptions: { title: '실습 전 안전 점검', safety: ['실제 119에 전화하지 않는다', '짝을 세게 밀거나 굴리지 않는다', '짝과 멈춤 신호를 정했다'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '불러도 반응이 흐린 사람을 돕는 차례로 카드를 놓으세요.', toolOptions: { title: '돕는 차례', cards: ['옆으로 눕히고 숨쉬기를 지켜본다', '사람을 콕 집어 119 신고를 부탁한다', '혼자 두지 않고 곁에 머문다', '크게 부르고 숨을 살핀다'] }, target: { order: ['혼자 두지 않고 곁에 머문다', '크게 부르고 숨을 살핀다', '사람을 콕 집어 119 신고를 부탁한다', '옆으로 눕히고 숨쉬기를 지켜본다'] }, difficulty: 0.3,
              levels: { easy: { prompt: '불러도 반응이 흐린 사람을 돕는 차례로 카드를 놓으세요(카드 3장).', toolOptions: { cards: ['사람을 콕 집어 119 신고를 부탁한다', '혼자 두지 않고 곁에 머문다', '크게 부르고 숨을 살핀다'] }, target: { order: ['혼자 두지 않고 곁에 머문다', '크게 부르고 숨을 살핀다', '사람을 콕 집어 119 신고를 부탁한다'] } } } },
            { prompt: '119 상황실에 말할 차례로 카드를 놓으세요.', toolOptions: { title: '신고할 때 말할 차례', cards: ['상황실 안내대로 따른다', '술을 많이 마시고 불러도 반응이 없다', '지금 있는 곳의 주소', '숨이 느리고 고르지 않다'] }, target: { order: ['지금 있는 곳의 주소', '술을 많이 마시고 불러도 반응이 없다', '숨이 느리고 고르지 않다', '상황실 안내대로 따른다'] }, difficulty: 0.3,
              levels: { easy: { prompt: '119 상황실에 말할 차례로 카드를 놓으세요(카드 3장).', toolOptions: { cards: ['숨이 느리고 고르지 않다', '지금 있는 곳의 주소', '술을 많이 마시고 불러도 반응이 없다'] }, target: { order: ['지금 있는 곳의 주소', '술을 많이 마시고 불러도 반응이 없다', '숨이 느리고 고르지 않다'] } } } },
            { prompt: '짝 실습은 한 번에 60초, 역할을 바꾸는 준비 30초로 두 번 해요. 타이머를 맞추세요.', toolOptions: { title: '짝 실습 시간', labels: ['실습', '바꾸기'], plan: { work: 30, rest: 0, rounds: 1 }, showTotal: true }, target: { plan: { work: 60, rest: 30, rounds: 2 } }, difficulty: 0.25 },
            { prompt: '짝 실습을 마친 뒤 해 본 것을 스스로 점검하세요.', toolOptions: { title: '실습 스스로 점검' }, target: { selfCheck: ['차례 카드대로 몸짓으로 해 보았다', '신고할 때 위치를 먼저 말해 보았다', '옆으로 눕힌 뒤 곁에서 지켜보는 것까지 했다'] }, difficulty: 0.2,
              levels: { challenge: { prompt: '짝 실습을 마친 뒤 해 본 것을 스스로 점검하세요(역할 바꾸기 더하기).', target: { selfCheck: ['차례 카드대로 몸짓으로 해 보았다', '신고할 때 위치를 먼저 말해 보았다', '옆으로 눕힌 뒤 곁에서 지켜보는 것까지 했다', '짝과 역할을 바꿔 한 번 더 해 보았다'] } } },
              conclude: '곁에 머물고, 반응과 숨을 보고, 119를 부탁하고, 옆으로 눕혀 지켜봐요. 커피나 찬물은 넣지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '돕는 차례 가운데 실습에서 가장 헷갈린 단계와, 그 단계를 바르게 하는 방법을 쓰세요.' }] },
        notes: '옆으로 눕히는 자세는 보건 교사나 공식 응급처치 안내로 실물 시범을 보인다. 연습 때 실제 번호로 전화하지 않는다. 신호·차례는 saf-drug/h.js binge-drinking·saf-firstaid/h.js 와 같은 문구다.',
      }),
      M({
        id: 'activity.policy-chart', type: 'activity', title: '광고 제한 전후 자료 읽기',
        method: '예시 자료로 정책 효과 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '그래프 점마다 값이 보여 제한 전후를 바로 견준다.', base: '값 표시 없이 꺾은선을 읽고 경향과 해석을 고른다.', challenge: '값 표시 없이 풀고, 같은 해에 있었을 수 있는 다른 요인을 활동지에 쓴다.' },
        activity: {
          title: '광고 제한 전후 꺾은선 읽기', tool: 'chart',
          teacher: '"이 꺾은선은 가상의 도시 자료예요. 4년째에 청소년 대상 담배 광고를 제한했다고 해요. 그 뒤 선이 내려갔다면, 광고 제한 \'때문\'이라고 말할 수 있을까요?" 먼저 값을 읽고, 해석 문항에서는 근거를 짝에게 말하게 한다. "선이 내려갔으니 정책이 효과가 있다"고 바로 결론 내는 학생에게 "같은 해에 가격이 오르거나 학교 금연 교육이 늘었다면 어떻게 구별할까요?"라고 묻는다. 정책 효과를 말하려면 비교할 지역·다른 요인을 함께 봐야 한다는 점을 짚는다.',
          task: '예시 자료 꺾은선그래프를 읽고 정책 효과에 대한 해석을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '예시 자료에서 광고를 제한한 4년째의 흡연 경험 비율은 몇 %인가요?', toolOptions: LINE({ question: '4년째 값은?' }), target: { value: 27 }, difficulty: 0.15 },
            { prompt: '광고 제한 뒤(4년~7년) 꺾은선의 경향으로 알맞은 것을 고르세요.', toolOptions: LINE({ question: '제한 뒤 경향은?', choices: ['꾸준히 내려간다', '꾸준히 올라간다', '변화가 없다'], why: ['', '7년째 값이 4년째보다 작아요.', '4년째와 7년째 값이 달라요.'] }), target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '제한 전 3년 동안과 제한 뒤 3년 동안의 변화를 견주어, 알맞은 해석을 고르세요.', toolOptions: LINE({ question: '두 기간을 견주면?', choices: ['제한 뒤에 더 빨리 내려갔다', '두 기간 모두 똑같이 내려갔다', '제한 전에 더 빨리 내려갔다'], why: ['', '제한 전 3년은 1%p 줄었고 제한 뒤 3년은 8%p 줄었어요.', '제한 전 3년 동안은 거의 그대로였어요.'] }), target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '이 그래프만으로는 말할 수 없는 것을 고르세요.', toolOptions: LINE({ question: '이 자료만으로 말할 수 없는 것은?', choices: ['제한 뒤 비율이 내려갔다', '내려간 까닭이 광고 제한 하나뿐이다', '7년째 값이 가장 작다'], why: ['그래프에서 읽을 수 있어요.', '', '그래프에서 읽을 수 있어요.'] }), target: { pick: 1 }, difficulty: 0.4,
              conclude: '함께 일어난 변화는 원인의 후보일 뿐이에요. 같은 시기의 다른 정책·가격·교육과 비교 지역을 함께 봐야 효과를 말할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '4년째에 광고 제한 말고 함께 있었을 수 있는 다른 요인 하나와, 그것을 확인할 방법을 쓰세요.' }] },
        notes: '그래프 값은 가상 도시의 예시 자료(실제 통계 아님)다. 실제 정책 효과 수치를 말하지 않는다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '담배 광고 전면 금지 근거문',
        method: '규제 정책 찬반 근거문', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 근거문을 4~5문장으로 쓴다.', base: '주장·자료 근거·반론·대안을 담아 5문장으로 쓰고 기준표로 점검한다.', challenge: '5문장에 상대 입장 요약을 더하고 기준 하나를 더 점검한다.' },
        activity: {
          title: '광고 전면 금지 근거문', tool: 'rubric-writing',
          teacher: '"\'담배 광고를 모든 곳에서 전면 금지해야 한다.\' 찬성과 반대 가운데 한쪽을 골라 근거문을 써요. 오늘은 내 편이 아니라 근거의 힘을 봐요." 쓰기 전에 앞 활동의 그래프나 정책 목적을 근거로 쓸 수 있다고 알려 준다. "규제는 자유 침해일 뿐"이라고만 쓴 학생에게 "광고를 보는 청소년의 자유와, 광고하는 회사의 자유는 같은 무게일까요? 그 둘을 견주는 문장을 넣어 볼까요?"라고 묻는다. 반대쪽을 고른 학생도 건강 근거를 인정하는 문장을 넣게 한다.',
          task: '찬반 가운데 한쪽을 골라 근거문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('찬반 가운데 내 입장을 주장 한 문장과 근거 한 문장으로 쓰세요.', '"담배 광고를 모든 곳에서 전면 금지해야 한다"에 대한 내 입장을 두 문장(주장·근거)으로 쓰세요.', ['주장이 분명하다', '근거가 하나 있다', '근거가 확인할 수 있는 것이다'], { min: 30, max: 200, sent: [2, 3], starter: '나는 담배 광고 전면 금지에 (찬성/반대)한다. 왜냐하면 ~', d: 0.25 }),
            Object.assign(RWQ('주장·자료 근거·반론·대안을 담아 근거문을 다섯 문장으로 쓰세요.', '"담배 광고를 모든 곳에서 전면 금지해야 한다"에 대한 근거문을 다섯 문장으로 쓰세요(주장·자료 근거·반론·대안).', ['주장이 분명하다', '자료나 정책 목적을 근거로 썼다', '예상되는 반론을 썼다', '대안이나 조건을 제시했다'], { min: 100, max: 500, sent: [5, 6], must: [['왜냐하면', '때문에', '근거']], plus: '상대 입장을 한 문장으로 공정하게 요약했다', d: 0.4,
              sample: '나는 담배 광고 전면 금지에 찬성한다. 광고는 처음 담배를 접하는 청소년에게 담배를 멋진 것으로 보이게 하기 때문이다. 예시 자료에서도 광고를 제한한 뒤 흡연 경험 비율이 내려갔다. 물론 다른 요인이 함께 있었을 수 있고 회사의 표현 자유를 걱정하는 의견도 있다. 그래서 금지와 함께 효과를 해마다 점검하고 금연 교육을 늘리는 조건을 붙이자.' }),
              { levels: { easy: { prompt: '문장 틀을 보고 근거문을 4~5문장으로 쓰세요.', toolOptions: { starter: '나는 ~에 (찬성/반대)한다. 왜냐하면 ~. 예를 들어 ~. 물론 ~. 그래서 ~.' }, target: { selfCheck: ['주장이 분명하다', '자료나 정책 목적을 근거로 썼다', '예상되는 반론을 썼다', '대안이나 조건을 제시했다'], sentences: [4, 6], mustInclude: [['왜냐하면', '때문에', '근거']] } },
                challenge: { prompt: '주장·자료 근거·반론·대안을 담아 근거문을 다섯 문장으로 쓰세요(기준 하나 더).', target: { selfCheck: ['주장이 분명하다', '자료나 정책 목적을 근거로 썼다', '예상되는 반론을 썼다', '대안이나 조건을 제시했다', '상대 입장을 한 문장으로 공정하게 요약했다'], sentences: [5, 7], mustInclude: [['왜냐하면', '때문에', '근거']] } } } }),
            RWQ('반대 입장 친구의 가장 강한 근거를 한 문장으로 요약하고, 내 반박을 한 문장으로 쓰세요.', '반대 입장의 가장 강한 근거를 요약하고 그에 대한 내 반박을 두 문장으로 쓰세요.', ['상대 근거를 왜곡하지 않고 요약했다', '반박에 근거가 있다', '상대를 비난하는 말을 쓰지 않았다'], { min: 40, max: 250, sent: [2, 3], d: 0.35, more: { conclude: '좋은 근거문은 상대의 가장 강한 근거와 맞서고, 그래도 내 입장이 나은 까닭을 보여 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '짝의 근거문에서 가장 설득력 있는 문장 하나를 옮겨 적고, 그 까닭을 쓰세요.' }] },
        notes: '찬반 어느 쪽도 정답이 아니다. 판매 연령·광고 시간대 같은 법 수치·조문은 다루지 않는다(사람 확인). 학생의 흡연 여부를 묻지 않는다.',
      }),

      M({
        id: 'wrap.policy-sort', type: 'wrap', title: '정책 수단을 목적에 잇기',
        method: '정책 수단과 목적 잇기', tool: 'sortboard', minutes: 10,
        levels: { easy: '교사가 \'간접 피해 막기\' 칸을 가리고 두 칸(시작 막기·끊기 돕기)으로 먼저 함께 나눈다.', base: '정책 카드 여섯 장을 세 목적 칸에 나눈다.', challenge: '나눈 뒤 우리 학교 주변에 가장 효과가 클 정책의 순위와 까닭을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 본 정책 수단을 목적으로 묶어 봐요. 처음 시작을 막는 것, 끊기를 돕는 것, 피우지 않는 사람을 지키는 것." 카드를 나눈 뒤 출구 2번으로 넘어간다. "가격을 올리면 그냥 돈만 더 내지 않나요?"라는 말이 나오면 "가격과 경고 그림은 시작을 막고 끊기도 돕는, 두 목적에 다 닿는 정책이에요"라고 짚는다. 정책마다 겨냥한 사람이 다르다는 점을 정리한다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['시작 막기', '끊기 돕기', '간접 피해 막기'], cards: ['학교 주변 담배 광고 금지', '청소년 판매 금지 단속', '보건소 금연 상담 지원', '금연 치료 비용 지원', '버스 정류장 금연 구역', '공동주택 복도 금연'] }, prompt: '정책 카드를 주된 목적 칸에 나누세요.', target: { sort: { '시작 막기': ['학교 주변 담배 광고 금지', '청소년 판매 금지 단속'], '끊기 돕기': ['보건소 금연 상담 지원', '금연 치료 비용 지원'], '간접 피해 막기': ['버스 정류장 금연 구역', '공동주택 복도 금연'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '담뱃갑 경고 그림과 가격 정책에 대한 설명으로 가장 알맞은 것을 고르세요.', options: ['피우지 않는 사람만 겨냥한다', '시작을 막고 끊기도 돕는, 두 목적에 다 닿는다', '간접 피해만 막는다'], answer: 1, difficulty: 0.3, explain: '경고 그림과 가격은 처음 사려는 사람과 이미 피우는 사람 모두에게 닿아요.' },
            { type: 'short', prompt: '우리 학교 주변에 가장 효과가 클 것 같은 정책 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '정책 수단과 목적',
          items: [
            { type: 'table', prompt: '정책마다 주로 겨냥하는 사람과 목적을 쓰세요.', columns: ['정책', '겨냥하는 사람', '목적'], cells: [['광고 금지', '', ''], ['금연 상담 지원', '', ''], ['금연 구역', '', '']] },
            { type: 'short', prompt: '두 목적에 다 닿는 정책 하나를 골라 그렇게 본 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.proposal', type: 'wrap', title: '학교 주변 건강 환경 예산',
        method: '학교 주변 건강 환경 제안', tool: 'economy', minutes: 10,
        levels: { easy: '교사가 항목을 금연 상담·캠페인 둘로 줄여 함께 고른다.', base: '항목 다섯 가운데 금연 상담을 꼭 넣고 예산 100만 원 안에서 고른다.', challenge: '고른 배분의 효과를 무엇으로 잴지(측정 방법)를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"가상의 학생회가 학교 주변 건강 환경에 쓸 예산 100만 원을 받았어요. 무엇에 쓸까요?" 예산 막대를 보며 고른 뒤 고른 까닭을 출구 질문에 쓰게 한다. 기념품·현수막처럼 눈에 띄는 항목만 고른 학생에게 "이 돈을 쓴 뒤 1년 뒤에 무엇이 달라졌는지 어떻게 확인할 수 있을까요?"라고 묻는다. 좋은 제안은 효과를 잴 방법까지 함께 낸다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'economy', options: { mode: 'budget', budget: 1000000, items: POLICY_BUDGET }, prompt: '예산 100만 원(가상). \'보건소 금연 상담 연결\'은 꼭 넣고 예산 안에서 고르세요.', target: { budget: { must: ['counsel'] } }, difficulty: 0.25 },
            { type: 'short', prompt: '고른 배분의 효과를 1년 뒤 무엇으로 확인할지 한 가지를 쓰세요.' },
            { type: 'choice', prompt: '효과를 확인하는 방법으로 가장 알맞은 것을 고르세요.', options: ['현수막을 본 사람이 많았는지 짐작한다', '시작 전과 1년 뒤 상담 연결 수를 견준다', '기념품을 받은 학생 수만 센다'], answer: 1, difficulty: 0.3, explain: '전과 후를 같은 기준으로 견주어야 효과를 말할 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '학교 주변 건강 환경 제안',
          items: [
            { type: 'short', prompt: '우리 모둠이 고른 배분과 그 까닭을 두 문장으로 쓰세요.' },
            { type: 'short', prompt: '이 제안에 반대할 사람의 의견 하나와 그에 대한 답을 쓰세요.' },
          ],
        },
        notes: '금액은 수업용 가상 값이다. 학생에게 가족의 흡연 여부를 묻지 않는다.',
      }),
    );
  }

  /* 사람 확인(evidence-literacy):
   *   - [activity.level-order · wrap.level-web · wrap.guide-card] 근거 수준의 일반 위계(체험담·전문가 한 명 의견 < 관찰 연구 < 무작위 실험 < 체계적 검토)와
   *       '관찰 연구는 관계를, 잘 설계된 실험은 원인을 더 잘 따질 수 있다'는 설명 → 질병관리청 국가건강정보포털·한국보건의료연구원(근거 중심 보건의료 안내)
   *   - [activity.article-check · activity.review-write] 기사 점검 항목(연구 대상·규모·연구비를 낸 곳·다른 연구와 일치)과 '사람이 아닌 동물·세포 연구는 사람에게 바로 옮기지 않는다'
   *       → 한국보건의료연구원·식품의약품안전처(건강기능식품 표시·광고 안내)
   *   - [activity.share-dilemma 셋째 문항] 처방약을 줄이거나 끊는 일은 처방한 의사·약사와 먼저 상의한다 → 식품의약품안전처 의약품 안전 사용 안내·대한약사회
   *   - [activity.share-dilemma] 근거 없는 건강 정보를 바로잡을 때 공공기관 안내를 출처로 함께 보낸다 → 질병관리청·식품의약품안전처 안내 누리집
   *   기사·제목·연구는 모두 가상이고, 실제 식품·질병 효과를 단정하지 않는다(장면 속 주장은 '근거 없는 주장'으로만 다룬다).
   * 계획대로 못 한 것:
   *   - intro.claim-feel: 도입 시연은 제목 하나만 보인다. '제목 2·3개'와 '끝에 다시 보기'는 교사가 칠판 제목으로 진행하고, 끝 다시 보기는 정리 모듈 출구 질문(신뢰도 다시 고르기)에 넣었다(wrap.level-web).
   *   - intro.corr-chart: 교구 그래프는 한 계열만 그려 '함께 늘어나는 두 값'을 가로축(헬스장 수)·세로축(건강 점수) 한 그래프로 나타냈다.
   *   - activity.level-order: sortboard 바구니는 2~4칸이라 다섯 근거를 '약함·중간·강함' 세 칸으로 나누고, 칸 안의 순서는 활동지 표로 옮겼다.
   *   - wrap.guide-card: collage 는 글을 쓰지 못해 질문 세 개를 조각(별·동그라미·네모) 자리로 나타내고 글은 활동지 카드 칸에 쓴다.
   */
  // ======================================================================================================
  // 8. 건강 정보의 근거 수준 판단 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('evidence-literacy', [10, 11, 12]);
    const GYM = [['헬스장 1곳 동네', 52], ['헬스장 2곳 동네', 58], ['헬스장 3곳 동네', 63], ['헬스장 4곳 동네', 70]];
    const GYMCHART = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '동네별 헬스장 수와 주민 건강 점수(예시 자료, 실제 자료 아님)', unit: '점', xLabel: '동네', yLabel: '주민 평균 건강 점수', data: GYM }, more);
    const CHAT = { text: '가족 단체방에 이모가 링크를 올렸다. "이 차 하루 세 잔이면 독감 걱정 끝! 의사도 놀란 비밀". 엄마가 "우리도 사 볼까?"라고 답했다.', who: '나', motif: 'house', choices: [
      { id: 'check', text: '먼저 출처와 근거를 찾아본다', result: '링크는 차 판매 누리집이고, 연구 이야기는 후기뿐이다.', impact: [{ who: '나', text: '판단할 재료가 생긴다', tone: 1 }],
        next: { text: '공공기관 누리집에서 독감 예방 안내를 찾았다. 차 이야기는 없다.', choices: [
          { id: 'share', text: '"찾아보니 이런 안내가 있대요" 하고 공공기관 링크를 올린다', result: '엄마가 링크를 읽고 "그럼 예방은 이걸 따라야겠네"라고 한다.', impact: [{ who: '가족', text: '믿을 만한 정보를 함께 본다', tone: 1 }],
            next: { text: '이모가 "나는 마셔 보니 좋던데?" 하고 서운한 기색이다.', choices: [
              { id: 'respect', text: '"마시는 건 이모 자유예요. 다만 예방은 안내대로 같이 챙겨요"라고 답한다', result: '이모가 웃으며 안내 링크를 저장한다.', impact: [{ who: '이모', text: '존중받으며 정보를 받아들인다', tone: 1 }], ending: '사실은 바로잡고, 사람은 존중하면 관계도 정보도 지킨다.' },
              { id: 'win', text: '"그거 다 가짜예요. 그런 걸 왜 믿어요?"라고 답한다', result: '이모가 단체방에서 말이 없어진다.', impact: [{ who: '이모', text: '무시당한 기분이 든다', tone: -1 }], ending: '맞는 정보도 사람을 깎아내리며 전하면 닿지 않는다.' }] } },
          { id: 'keep', text: '찾은 것은 혼자 알고 넘어간다', result: '가족들이 차를 주문한다.', impact: [{ who: '가족', text: '근거 없는 정보로 돈을 쓴다', tone: -1 }], ending: '알게 된 근거는 나누어야 쓰인다.' }] } },
      { id: 'blast', text: '바로 "가짜 뉴스예요!"라고 답한다', result: '이모가 "너는 어떻게 아는데?"라고 되묻는다.', impact: [{ who: '이모', text: '당황하고 서운하다', tone: -1 }],
        next: { text: '단체방 분위기가 어색해졌다.', choices: [
          { id: 'source', text: '사과하고 공공기관 안내 링크를 찾아 올린다', result: '분위기가 풀리고 안내를 함께 읽는다.', impact: [{ who: '가족', text: '다시 정보를 함께 본다', tone: 1 }], ending: '근거 없이 한 반박은 근거를 더해야 힘이 생긴다.' },
          { id: 'quiet', text: '더 말하지 않고 단체방을 나간다', result: '정보는 그대로 남아 있다.', impact: [{ who: '가족', text: '판단할 근거를 얻지 못한다', tone: -1 }], ending: '말을 멈추면 근거 없는 정보만 남는다.' }] } },
      { id: 'ignore', text: '못 본 척 넘어간다', result: '다른 가족도 링크를 다른 단체방에 퍼 나른다.', impact: [{ who: '친척들', text: '근거 없는 정보가 더 퍼진다', tone: -1 }], ending: '침묵하면 근거 없는 정보가 더 멀리 간다.' }] };
    const CHAT_R = [{ id: 'source', text: '건강 정보는 누가 왜 썼는지 출처부터 확인한다' }, { id: 'public', text: '공공기관 안내처럼 확인할 수 있는 근거를 함께 보낸다' }, { id: 'relation', text: '정보를 바로잡을 때도 상대를 존중하는 말로 한다' },
      { id: 'doctor', text: '"의사도 놀란"이라는 말이 있으니 믿을 만하다', why: '이름도 연구도 없는 \'의사\'는 근거가 아니라 끌어당기는 말이에요.' },
      { id: 'family', text: '가족이 올린 정보니 믿어도 된다', why: '올린 사람과 가깝다고 정보의 근거가 강해지지는 않아요.' }];

    const GRAN_R = [{ id: 'expert', text: '처방약을 바꾸는 일은 의사·약사와 먼저 상의한다' }, { id: 'source', text: '건강 정보는 누가 왜 썼는지 출처부터 확인한다' },
      { id: 'title', text: '"의사"라고 소개한 영상이면 믿어도 된다', why: '이름·소속이 없고 제품을 파는 영상은 근거가 아니라 광고일 수 있어요.' },
      { id: 'natural', text: '가루는 자연 식품이라 약보다 안전하다', why: '\'자연\'이라는 말은 효과나 안전의 근거가 아니에요.' }];
    MODS.push(
      M({
        id: 'intro.claim-feel', type: 'intro', title: '건강 기사 제목 첫 신뢰도',
        method: '건강 기사 제목 첫 신뢰도', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 제목 둘(시연 제목·칠판 제목 하나)의 신뢰도를 함께 고른다.', base: '제목 셋(시연 하나·칠판 둘)을 고르고 높게 고른 제목의 끌린 까닭을 말한다.', challenge: '제목마다 마음을 끈 낱말(비밀·놀란·100%·확인)에 밑줄을 긋고, 정리 시간에 신뢰도를 다시 고른다.' },
        intro: {
          teacher: '"가상 기사 제목이에요. 읽자마자 얼마나 믿음이 가나요? 1부터 5까지 손가락으로 보여 주세요." 시연 단추로 눈금 하나를 고르는 모습을 보인 뒤 칠판에 제목 둘(\'○○ 먹으면 암 예방\'·\'한 연구, 아침 식사와 집중의 관계 살펴\')을 더 적는다. "\'과학자들이 확인\'이라고 했으니 사실이잖아요"라는 말이 나오면 "어떤 과학자가, 몇 명을, 어떻게 확인했는지 제목에 나와 있나요?"라고 되묻는다. 첫 신뢰도는 정답이 없고, 오늘 끝에 다시 골라 무엇이 바뀌었는지 본다고 밝힌다.',
          student: '가상 기사 제목을 읽고 첫 느낌으로 얼마나 믿음이 가는지 눈금을 고르세요. 마음을 끈 낱말도 찾아보세요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 기사 제목: "아침마다 ○○ 주스 한 잔, 암 예방 효과 과학자들이 확인!"', feeling: '놀람', steps: 5, scaleLabels: { 1: '전혀 안 믿음', 5: '아주 믿음' }, ask: '이 제목을 얼마나 믿나요?', after: '제목만으로는 누가·몇 명을·어떻게 조사했는지 알 수 없어요.' }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper newspaper headline with big bold letters and an exclamation mark, a paper magnifying glass hovering over tiny missing details, a five-step paper trust meter beside it', banner: '제목, 얼마나 믿을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '제목은 모두 가상이다. 실제 식품의 효과를 말하지 않는다. 학생 가족이 믿는 건강 정보를 발표하게 하지 않는다.',
      }),
      M({
        id: 'intro.corr-chart', type: 'intro', title: '함께 늘어나는 두 값의 함정',
        method: '상관과 인과 함정 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 막대 끝 값을 짚으며 함께 늘어나는 모습을 읽는다.', base: '값 표시 없이 막대를 읽고 \'원인이라고 할 수 없는 까닭\'을 학생이 말한다.', challenge: '두 값을 함께 움직였을 숨은 제3 변인(소득·나이·공원 등)을 하나 말한다.' },
        intro: {
          teacher: '"예시 자료예요. 헬스장이 많은 동네일수록 주민 건강 점수가 높아요. 그럼 동네에 헬스장을 더 지으면 주민이 건강해질까요?" 시연 단추로 가장 높은 막대를 고르는 모습을 보이고 손을 들게 한다. "그래프가 그렇게 말하잖아요"라는 말이 나오면 "헬스장이 많은 동네는 다른 무엇도 다를까요? 공원·소득·주민 나이는요?"라고 되묻는다. 함께 늘어난다는 것(상관)과 하나가 다른 하나를 만든다는 것(인과)은 다르다는 점을 짚는다.',
          student: '예시 그래프에서 헬스장 수와 건강 점수가 함께 늘어나는 모습을 읽고, 헬스장이 원인이라고 바로 말할 수 있을지 생각해 보세요.',
          demo: { tool: 'chart', options: GYMCHART({ question: '건강 점수가 가장 높은 동네는?', choices: GYM.map((x) => x[0]) }), sequence: [{ pick: 3 }] },
          art: { draw: 'four paper neighbourhood blocks of rising height, each with a tiny gym building and a heart badge, a hidden third paper figure behind the blocks holding a coin and a tree, question marks floating between them', banner: '함께 늘면 원인일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프는 예시 자료(실제 자료 아님)다. 건강 격차 주제(inequity)와 이어 읽을 수 있다.',
      }),

      M({
        id: 'activity.level-order', type: 'activity', title: '근거의 세기 나누기',
        method: '근거 수준 순서 매기기', tool: 'sortboard', minutes: 16,
        levels: { easy: '카드 3장(칸마다 1장)을 나누고, 틀린 바구니에 넣으면 바로 까닭이 나오며 장 수가 보인다.', base: '카드 5장을 근거 약함·중간·강함 바구니에 나누고, 기사 속 근거 문장과 결론의 범위도 나눈다.', challenge: '헷갈리는 카드가 더해지고, 활동지에 다섯 근거의 순서와 그 근거를 쓴다.' },
        activity: {
          title: '근거의 세기 바구니', tool: 'sortboard',
          teacher: '"같은 \'효과 있다\'도 어떤 근거에서 나왔는지에 따라 무게가 달라요. 카드를 근거의 세기 바구니에 나눠 봐요." 카드를 놓을 때마다 "이 근거는 몇 명을, 누가, 어떻게 견주었나요?"라고 묻는다. "논문에 실렸으니 모두 강한 근거"라는 학생에게 "논문에도 체험 보고·관찰·실험이 있어요. 이 논문은 무엇을 했나요?"라고 되묻는다. 관찰 연구는 \'함께 나타난다\'를, 무작위로 나눈 실험은 \'원인\'을 더 잘 따질 수 있다는 점을 짚는다.',
          task: '근거 카드를 세기 바구니에 나누고, 근거마다 말할 수 있는 결론의 범위를 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BOARDQ('연구 방법 카드를 근거의 세기 바구니에 나누세요.', ['근거 약함', '중간', '근거 강함'], [
              ['한 사람의 체험담', '전문가 한 명의 의견'],
              ['여러 사람을 오래 지켜본 관찰 연구'],
              ['무작위로 두 무리로 나눈 실험 연구', '여러 연구를 모아 따진 체계적 검토'],
            ], { k: 1, hard: [['광고에 실린 사용자 후기'], ['한 지역 주민을 몇 년 조사한 연구'], []], d: 0.3 }),
            BOARDQ('가상 기사 속 근거 문장을 세기 바구니에 나누세요.', ['근거 약함', '중간', '근거 강함'], [
              ['"마셔 보니 감기가 덜 걸렸다"는 후기가 많다', '한 유명인이 방송에서 효과를 말했다'],
              ['많이 마신 사람에게 감기가 적었다는 관찰 결과'],
              ['무작위로 나눠 견준 실험에서 차이가 났다', '비슷한 연구 여러 편을 모아도 같은 결과였다'],
            ], { k: 1, d: 0.35 }),
            BOARDQ('연구 결과를 말할 수 있는 결론의 범위로 나누세요.', ['원인까지 따져 볼 수 있음', '관계까지만 말할 수 있음'], [
              ['무작위로 나눈 무리 중 약을 먹은 쪽만 나아졌다', '같은 방법의 실험 여러 편이 모두 같은 결과를 냈다'],
              ['커피를 많이 마시는 사람이 오래 산다는 관찰', '운동을 많이 하는 학생의 성적이 높았다는 조사'],
            ], { k: 1, d: 0.4, more: { conclude: '관찰 연구는 \'함께 나타난다\'까지, 무작위 실험과 여러 연구의 모음은 \'원인\'을 더 단단히 따질 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다섯 근거를 약한 것부터 강한 것까지 차례로 쓰고, 그 차례의 근거를 쓰세요.', columns: ['차례', '근거', '그렇게 놓은 까닭'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', ''], ['5', '', '']] }] },
        notes: '근거 위계는 일반 설명이다(사람 확인). 실험도 설계가 나쁘면 약한 근거가 될 수 있다는 점을 도전 단계에서 말해 준다.',
      }),
      M({
        id: 'activity.article-check', type: 'activity', title: '가상 기사 근거 점검',
        method: '기사 근거 점검표', tool: 'kitchen', minutes: 16,
        levels: { easy: '기사 A 의 점검 항목 3개만 보고 확인되는 것을 표시한다.', base: '점검 항목 5개로 기사 A 를 검사하고, 문제 신호를 고르고, 기사 B 도 검사한다.', challenge: '두 기사의 점검 결과를 활동지 표로 견주고 더 믿을 만한 쪽과 까닭을 쓴다.' },
        activity: {
          title: '기사 두 편 점검하기', tool: 'kitchen',
          teacher: '"기사 A 와 B 는 둘 다 \'기억력에 좋다\'고 말해요. 점검표로 보면 무엇이 다를까요?" 항목마다 "기사 안에서 그 내용을 찾을 수 있나요? 손가락으로 짚어 보세요"라고 묻는다. "연구비를 회사가 냈다고 쓴 건 오히려 솔직한 것 아니에요?"라는 말이 나오면 "밝힌 것은 좋은 일이에요. 그래도 결과를 읽을 때 무엇을 더 조심해야 할까요?"라고 되묻는다. 점검표는 기사를 깎아내리는 도구가 아니라 얼마나 믿을지 정하는 도구라는 점을 짚는다.',
          task: '점검표로 가상 기사에서 확인되는 것을 표시하고 문제 신호를 찾아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('가상 기사 A: "○○ 젤리, 기억력 쑥" — 젤리 회사가 연구비를 낸 연구, 대학생 12명이 4주 먹고 시험을 봤다. 기사 A 에서 확인되는 것만 표시하세요.', '기사 A 점검표', [
              ['who', '연구 대상이 누구인지 밝혔다', true], ['size', '몇 명을 연구했는지 밝혔다', true], ['fund', '연구비를 낸 곳을 밝혔다', true], ['random', '무작위로 나눈 비교 무리가 있다', false], ['others', '다른 연구와 결과를 견주었다', false],
            ], { k: 3, d: 0.3 }),
            { prompt: '기사 A 를 읽을 때 조심해야 할 신호만 고르세요.', toolOptions: { mode: 'pick', basket: '조심할 신호', cards: ['연구 대상이 12명뿐이다', '대학생이라고 밝혔다', '젤리를 파는 회사가 연구비를 냈다', '4주 동안 지켜봤다', '비교할 무리가 없다'] }, target: { pick: ['연구 대상이 12명뿐이다', '젤리를 파는 회사가 연구비를 냈다', '비교할 무리가 없다'] }, difficulty: 0.35 },
            CHECKQ('가상 기사 B: "아침 식사와 집중, 관계 있지만 원인은 더 연구해야" — 공공 연구비로 학생 2천 명을 1년 관찰했고, 비슷한 연구들과 결과가 같았다. 확인되는 것만 표시하세요.', '기사 B 점검표', [
              ['who', '연구 대상이 누구인지 밝혔다', true], ['size', '몇 명을 연구했는지 밝혔다', true], ['fund', '연구비를 낸 곳을 밝혔다', true], ['random', '무작위로 나눈 비교 무리가 있다', false], ['others', '다른 연구와 결과를 견주었다', true],
            ], { k: 3, d: 0.35, more: { conclude: '기사 B 는 관찰 연구라 \'원인은 더 연구해야\'라고 스스로 한계를 밝혔어요. 한계를 밝힌 기사가 오히려 믿을 만한 신호일 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 기사의 점검 결과를 견주고 더 믿을 만한 쪽에 표시하세요.', columns: ['점검 항목', '기사 A', '기사 B'], cells: [['연구 대상·규모', '', ''], ['연구비를 낸 곳', '', ''], ['비교 무리', '', ''], ['다른 연구와 견줌', '', ''], ['더 믿을 만한 쪽과 까닭', '', '']] }] },
        notes: '기사·제품·연구는 모두 가상이다. 실제 식품의 효과를 말하지 않는다.',
      }),
      M({
        id: 'activity.share-dilemma', type: 'activity', title: '가족 단체방 건강 정보 갈림길',
        method: '가족 단체방 건강 정보 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '단체방 장면과 할머니 통화 장면 모두 첫 갈림길만 고르고 근거를 고른다.', base: '단체방 장면은 두 번째 갈림길(찾은 근거를 어떻게 할지)까지, 할머니 통화 장면은 끝까지 가서 근거를 고른다.', challenge: '단체방 장면을 세 번째 갈림길(이모가 서운해할 때)까지 가서 사실과 관계를 함께 지키는 근거를 고른다.' },
        activity: {
          title: '단체방 건강 정보 갈림길', tool: 'dilemma',
          teacher: '"가족 단체방에 \'이 차 하루 세 잔이면 독감 걱정 끝\'이라는 링크가 올라왔어요. 여러분이라면 어떻게 할까요?" 갈림길마다 "이 선택 뒤에 정보는 어떻게 되고, 이모와의 관계는 어떻게 될까요?"라고 두 가지를 함께 묻는다. 바로 \'가짜\'라고 반박한 길을 고른 학생에게 "맞는 말이라도 근거 없이 하면 상대가 받아들일까요?"라고 되묻는다. 사실을 바로잡는 것과 사람을 존중하는 것을 함께 해야 정보가 닿는다는 점을 짚는다.',
          task: '갈림길마다 고르고 정보와 관계에 생기는 결과를 따라가 본 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL123('단체방 장면을 끝까지 따라가 정보와 관계를 함께 지키는 길을 고르고 근거를 고르세요.', CHAT, [['check', 'share', 'respect']], CHAT_R, ['source', 'public', 'relation'], { d: 0.35, opt: { title: '가족 단체방' } }),
            EXPLOREQ('같은 장면에서 다른 길 하나를 끝까지 가 보고, 정보와 관계의 결과를 견주세요.', CHAT, CHAT_R, ['두 길에서 정보가 어떻게 되었는지 견주었다', '두 길에서 이모와의 관계가 어떻게 되었는지 견주었다'], { d: 0.3 }),
            DIL2('할머니와의 통화 장면에서 건강과 마음을 함께 지키는 길을 고르고 근거를 고르세요.', { text: '할머니가 전화로 "영상에서 ○○ 가루만 먹으면 약이 필요 없다더라. 약을 줄여 볼까 해"라고 하신다.', who: '나', motif: 'house', choices: [
              { id: 'ask', text: '"약은 처방한 의사 선생님과 먼저 상의해요"라며 다음 진료 때 같이 묻자고 한다', result: '할머니가 "그래도 영상 속 사람이 의사라던데?"라고 하신다.', impact: [{ who: '할머니', text: '약을 함부로 줄이지 않는다', tone: 1 }],
                next: { text: '할머니가 영상 링크를 보내 주셨다.', choices: [
                  { id: 'look', text: '영상 속 사람이 누구인지, 파는 제품이 있는지 할머니와 함께 찾아본다', result: '영상 끝에 가루 판매 링크가 있고, 이름·소속은 나오지 않는다.', impact: [{ who: '할머니', text: '스스로 의심할 단서를 찾는다', tone: 1 }], ending: '함께 찾아보면 상대가 스스로 판단할 힘을 얻는다.' },
                  { id: 'scam', text: '"그런 영상은 다 사기예요"라고 말한다', result: '할머니가 "너는 내 말을 안 믿는구나" 하고 서운해하신다.', impact: [{ who: '할머니', text: '무시당한 기분이 든다', tone: -1 }], ending: '맞는 말도 상대를 깎아내리면 닿지 않는다.' }] } },
              { id: 'okay', text: '"할머니 뜻대로 하세요"라고 넘긴다', result: '할머니가 약을 반만 드시기 시작한다.', impact: [{ who: '할머니', text: '처방과 다르게 약을 드신다', tone: -1 }],
                next: { text: '일주일 뒤 할머니가 어지럽다고 하신다.', choices: [
                  { id: 'clinic', text: '바로 진료를 받으시도록 가족에게 알리고 돕는다', result: '병원에서 약을 처방대로 다시 드시기로 한다.', impact: [{ who: '할머니', text: '늦게나마 바로잡는다', tone: 0 }], ending: '처방약을 바꾸는 일은 의사·약사와 먼저 상의한다.' },
                  { id: 'wait', text: '조금 더 지켜보자고 한다', result: '어지럼이 이어진다.', impact: [{ who: '할머니', text: '몸이 더 불편해진다', tone: -1 }], ending: '몸에 이상이 생기면 기다리지 말고 진료를 받는다.' }] } }] }, [['ask', 'look']], GRAN_R, ['expert', 'source'], { d: 0.35, opt: { title: '할머니와 통화' }, more: { conclude: '약은 처방한 사람과 상의하고, 정보는 함께 찾아보며 — 사실과 마음을 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이모에게 보낼 바로잡는 글을 두 문장으로 쓰세요(근거 하나와 존중하는 말 하나).' }] },
        notes: '장면 속 \'차와 독감\' 주장은 근거 없는 가상 주장이다. 실제 예방 방법은 공공기관 안내로 확인하게 한다. 학생 가족 단체방 내용을 보여 달라고 하지 않는다.',
      }),
      M({
        id: 'activity.review-write', type: 'activity', title: '건강 기사 평가문 쓰기',
        method: '건강 기사 평가문', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 평가문을 4~5문장으로 쓴다.', base: '주장 요약·근거 수준·한계·결론을 담아 5문장으로 쓰고 기준표로 점검한다.', challenge: '5문장에 더 정직한 기사 제목 제안을 더하고 기준 하나를 더 점검한다.' },
        activity: {
          title: '기사 A 평가문', tool: 'rubric-writing',
          teacher: '"앞에서 점검한 가상 기사 A(○○ 젤리, 기억력 쑥)를 평가하는 글을 써요. 평가문은 \'나쁘다\'로 끝나는 글이 아니라 \'어디까지 믿을 수 있는지\'를 밝히는 글이에요." 쓰기 전에 기준표 네 항목을 함께 읽는다. "그냥 거짓말 기사다"라고 쓴 학생에게 "12명이 젤리를 먹고 시험을 본 것은 사실일 수 있어요. 그 사실로 말할 수 있는 것과 없는 것을 나눠 볼까요?"라고 묻는다. 한계를 밝히는 문장이 평가문의 중심이라는 점을 짚는다.',
          task: '가상 기사 A 의 주장을 근거 수준으로 평가하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('기사 A 의 주장을 한 문장으로 요약하세요.', '가상 기사 A("○○ 젤리, 기억력 쑥")의 주장을 내 말로 한 문장으로 요약하세요.', ['기사가 말한 효과를 썼다', '누구를 대상으로 한 주장인지 썼다', '내 평가를 섞지 않고 요약했다'], { min: 20, max: 150, sent: [1, 2], d: 0.2 }),
            Object.assign(RWQ('기사 A 평가문을 다섯 문장으로 쓰세요(주장 요약·근거 수준·한계·결론).', '가상 기사 A 를 평가하는 글을 다섯 문장으로 쓰세요(주장 요약·근거 수준·한계·결론).', ['주장을 요약했다', '근거 수준(어떤 연구인지)을 밝혔다', '한계를 하나 이상 썼다', '어디까지 믿을지 결론을 썼다'], { min: 100, max: 500, sent: [5, 6], must: [['한계', '알 수 없', '조심']], d: 0.4,
              sample: '기사 A 는 ○○ 젤리를 먹으면 기억력이 좋아진다고 주장한다. 근거는 대학생 12명이 4주 동안 먹고 시험을 본 결과로, 비교 무리가 없는 작은 연구다. 젤리를 파는 회사가 연구비를 냈다는 점도 조심해서 읽어야 한다. 그래서 이 기사로는 젤리가 기억력의 원인이라고 말할 수 없다. 더 많은 사람을 무작위로 나눈 연구가 나올 때까지는 참고만 하겠다.' }),
              { levels: { easy: { prompt: '문장 틀을 보고 기사 A 평가문을 4~5문장으로 쓰세요.', toolOptions: { starter: '기사 A 는 ~고 주장한다. 근거는 ~ 연구다. 하지만 ~라는 한계가 있다. 그래서 ~.' }, target: { selfCheck: ['주장을 요약했다', '근거 수준(어떤 연구인지)을 밝혔다', '한계를 하나 이상 썼다', '어디까지 믿을지 결론을 썼다'], sentences: [4, 6], mustInclude: [['한계', '알 수 없', '조심']] } },
                challenge: { prompt: '기사 A 평가문을 다섯 문장으로 쓰세요(기준 하나 더).', target: { selfCheck: ['주장을 요약했다', '근거 수준(어떤 연구인지)을 밝혔다', '한계를 하나 이상 썼다', '어디까지 믿을지 결론을 썼다', '더 정직한 기사 제목을 제안했다'], sentences: [5, 7], mustInclude: [['한계', '알 수 없', '조심']] } } } }),
            RWQ('기사 A 에 붙일 더 정직한 제목을 쓰고, 그렇게 바꾼 까닭을 한 문장으로 쓰세요.', '기사 A 의 제목을 근거 수준에 맞게 다시 쓰고, 바꾼 까닭을 쓰세요.', ['과장된 낱말을 뺐다', '연구의 크기나 한계를 제목에 담았다', '바꾼 까닭을 썼다'], { min: 30, max: 200, sent: [2, 3], d: 0.3, more: { conclude: '정직한 제목은 연구가 한 만큼만 말해요. \'쑥\', \'비밀\', \'100%\' 대신 \'작은 연구\', \'관계\', \'더 연구 필요\'를 써요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 평가문에서 한계를 밝힌 문장을 옮겨 적고, 그 한계를 확인할 방법을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.level-web', type: 'wrap', title: '믿어도 될까 질문 그물',
        method: '근거 판단 체크 그물', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 \'누가\'·\'얼마나\' 두 가지에 먼저 카드를 달아 보인다.', base: '질문 카드 여덟 장을 누가·어떻게·얼마나·누구 이익 네 가지에 단다.', challenge: '오늘 본 사례(기사 A·단체방 링크)를 가지 하나와 이어 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 쓴 판단 질문을 네 가지로 정리해요. 누가 말했나, 어떻게 알아냈나, 얼마나 많이 살폈나, 누구에게 이익인가." 카드를 단 뒤, 도입에서 고른 기사 제목 신뢰도를 출구 2번에서 다시 고르게 한다. 신뢰도가 그대로인 학생에게 "그대로여도 괜찮아요. 이제 그 까닭을 질문 그물로 말할 수 있나요?"라고 묻는다. 판단 질문은 의심만 하는 도구가 아니라 믿을 만한 정보를 고르는 도구라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '믿어도 될까?', slots: ['누가', '어떻게', '얼마나', '누구 이익'], cards: ['글쓴이가 그 분야 전문가인가?', '이름과 소속을 밝혔나?', '체험담인가 연구인가?', '비교 무리가 있었나?', '몇 명을 살폈나?', '얼마 동안 지켜봤나?', '파는 쪽이 썼나?', '연구비는 누가 냈나?'] }, prompt: '판단 질문 카드를 네 가지에 다세요.', target: { sort: { 누가: ['글쓴이가 그 분야 전문가인가?', '이름과 소속을 밝혔나?'], 어떻게: ['체험담인가 연구인가?', '비교 무리가 있었나?'], 얼마나: ['몇 명을 살폈나?', '얼마 동안 지켜봤나?'], '누구 이익': ['파는 쪽이 썼나?', '연구비는 누가 냈나?'] } }, difficulty: 0.25 },
            SCALE('도입에서 본 가상 제목의 신뢰도를 다시 고르세요.', '가상 기사 제목: "아침마다 ○○ 주스 한 잔, 암 예방 효과 과학자들이 확인!"', '놀람', { 1: '전혀 안 믿음', 5: '아주 믿음' }, '지금은 이 제목을 얼마나 믿나요?'),
            { type: 'short', prompt: '신뢰도가 바뀌었거나 그대로인 까닭을 오늘 쓴 판단 질문 하나로 설명하세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '믿어도 될까 질문 그물',
          items: [
            { type: 'table', prompt: '질문 네 가지로 오늘 본 기사 A 를 점검하세요.', columns: ['질문', '기사 A 에서 찾은 답'], cells: [['누가', ''], ['어떻게', ''], ['얼마나', ''], ['누구 이익', '']] },
            { type: 'short', prompt: '앞으로 건강 정보를 볼 때 가장 먼저 던질 질문 하나와 그 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.guide-card', type: 'wrap', title: '또래용 정보 판단 카드',
        method: '또래용 정보 판단 카드', tool: 'collage', minutes: 10,
        levels: { easy: '질문 자리 하나(별)를 만들고 활동지 카드에 질문 하나를 쓴다.', base: '질문 자리 셋(별·동그라미·네모)을 만들고 활동지에 질문 셋을 쓴다.', challenge: '질문마다 오늘 본 예시(기사 A·단체방)를 하나씩 덧붙인다.' },
        wrap: {
          teacher: '"후배가 휴대폰에 붙여 둘 \'건강 정보 판단 카드\'를 만들어요. 질문은 세 개면 충분해요 — 길면 아무도 안 읽어요." 조각으로 카드 자리를 꾸미고, 글은 활동지 카드 칸에 쓰게 한다. "\'다 의심하라\'를 질문으로 넣을래요"라는 학생에게 "\'다 의심하라\'를 들은 후배는 무엇을 확인해야 할지 알 수 있을까요? 확인할 것을 질문으로 바꿔 볼까요?"라고 묻는다. 좋은 질문은 답을 찾을 수 있는 질문이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['star', 'circle', 'square', 'rect', 'heart'] }, prompt: '판단 질문 세 자리(별·동그라미·네모 하나씩)를 담은 카드를 꾸미고 점검을 표시하세요.', target: { has: [{ shape: 'star', min: 1 }, { shape: 'circle', min: 1 }, { shape: 'square', min: 1 }], selfCheck: ['질문 세 자리를 만들었다', '후배가 읽기 쉽게 배치했다', '질문마다 답을 찾을 수 있다'], minPieces: 3 }, difficulty: 0.2 },
            { type: 'choice', prompt: '판단 카드에 넣을 질문으로 가장 알맞은 것을 고르세요.', options: ['다 가짜라고 생각하자', '누가, 몇 명을, 어떻게 조사했나?', '조회 수가 많은가?'], answer: 1, difficulty: 0.2, explain: '답을 찾을 수 있는 질문이어야 판단에 쓸 수 있어요. 조회 수는 근거의 세기가 아니에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '건강 정보 판단 카드',
          items: [
            { type: 'short', prompt: '판단 카드에 넣을 질문 세 개를 쓰세요.' },
            { type: 'short', prompt: '세 질문 가운데 하나를 골라 오늘 본 예시와 함께 후배에게 설명하는 말을 쓰세요.' },
          ],
          easy: { note: '보기: 누가 썼나? / 몇 명을 조사했나? / 파는 쪽이 썼나?', items: [{ type: 'short', prompt: '판단 카드에 넣을 질문 하나를 쓰세요.' }] },
        },
      }),
    );
  }

  /* 사람 확인(care-system):
   *   - [intro.route-timeline · activity.case-sort] 1차 의료(동네 의원)에서 먼저 보고 필요하면 큰 병원·전문 진료로 의뢰하며, 회복 뒤 다시 동네 의원에서 관리한다는 일반 흐름
   *       → 보건복지부·국민건강보험공단(의료 이용 안내)·건강보험심사평가원
   *   - [intro.facility-map · activity.case-sort · activity.cost] 보건소가 하는 일(예방접종·금연 상담·건강 상담·검진 안내 등)과 공공 지원 안내처 → 지역 보건소·보건복지부·국민건강보험공단 건강검진 안내
   *   - [activity.case-sort · activity.er-dilemma] 바로 119·응급실이 필요한 신호의 일반 예(숨쉬기 힘듦·가슴을 쥐어짜는 통증·갑자기 말이 어눌함·한쪽 팔다리 힘 빠짐·의식을 잃음·멈추지 않는 출혈·점점 심해지거나 옮겨 가는 복통)
   *       → 중앙응급의료센터(응급의료포털)·소방청
   *   - [activity.er-dilemma] 응급실은 위급한 환자부터 진료하고, 판단이 어려울 때 의료 상담 전화로 물을 수 있다는 설명, '[학교가 확인해 넣는 의료 상담 전화]' 자리 → 중앙응급의료센터·보건복지부 상담 안내
   *   - [activity.cost] 금액은 모두 예시 금액(실제 수가 아님). 실제 본인 부담·지원 대상은 쓰지 않았다 → 건강보험심사평가원·국민건강보험공단·지역 보건소
   * 계획대로 못 한 것:
   *   - intro 의 levels(단계 3·5개, 핀 2·4개, 응급 경로·내 집 경로)는 교사 진행 방식이다(도입 시연은 하나뿐). 내 집 경로는 걷지 않는 활동지 '혼자 보기' 칸으로만 둔다(사는 곳을 묻지 않게).
   *   - intro.facility-map: 시연은 범례(legend) 채우기 하나로 하고, '핀 놓기'는 교사가 칠판 지도에서 짚는다.
   *   - activity.case-sort: sortboard 바구니는 문항마다 하나의 판이라 '칸 2개'는 쉬움 단계에서 바구니를 둘(동네 의원·응급실)로 줄인 판으로 했다. '애매한 사례 토의'는 도전 단계의 헷갈리는 카드와 활동지로.
   *   - activity.cost: economy 는 예산 안에서 항목을 고르는 판이라 '비용 비교'는 같은 예산으로 예방 항목과 응급 진료를 고르는 두 문항으로, '공공 지원 찾기'는 고르기 문항으로 했다.
   *   - activity.promo-plan: kitchen match 는 칸마다 카드 한 장이라 분기 칸과 목표 카드를 짝짓고(쉬움 2칸·기본 4칸), 점검 지표는 목표↔지표 짝 문항으로 했다.
   *   - wrap.plan-write·wrap.first-step: 출구 질문에는 단계별 판이 없어 문장 수·항목 수 차이는 교사 진행과 쉬운 활동지로 두었다.
   */
  // ======================================================================================================
  // 9. 의료 이용과 건강 증진 계획 (10~12학년)
  // ======================================================================================================
  {
    const M = MOD('care-system', [10, 11, 12]);
    const CALL = '[학교가 확인해 넣는 의료 상담 전화]';
    const ROUTE = [{ id: 'notice', text: '증상을 알아차리고 기록한다', motif: 'cloud' }, { id: 'clinic', text: '동네 의원에서 먼저 진료받는다', motif: 'house' }, { id: 'refer', text: '필요하면 큰 병원으로 의뢰받는다', motif: 'star' }, { id: 'special', text: '전문 진료와 검사를 받는다', motif: 'sun' }, { id: 'recover', text: '동네 의원에서 회복을 관리한다', motif: 'tree' }];
    const TOWN = [{ name: '동네 의원', icon: 'hospital', at: [1, 1], legend: '동네 의원' }, { name: '보건소', icon: 'office', at: [4, 1], legend: '보건소' }, { name: '종합병원', icon: 'apartment', at: [4, 3], legend: '종합병원' }, { name: '응급실', icon: 'lighthouse', at: [5, 3], legend: '응급실(24시간)' }, { name: '약국', icon: 'market', at: [2, 1] }, { name: '학교', icon: 'school', at: [1, 3] }];
    const BELLY = { text: '토요일 밤 10시, 혼자 집에 있는 서하가 저녁을 먹은 뒤부터 배가 아프다. 보호자는 늦게 온다고 했고 동네 의원은 문을 닫았다.', who: '서하', motif: 'moon', choices: [
      { id: 'watch', text: '아픈 자리와 정도를 적으며 30분 지켜본다', result: '통증이 배꼽 둘레에서 오른쪽 아래로 옮겨 가며 세진다.', impact: [{ who: '서하', text: '증상의 변화를 기록으로 남긴다', tone: 1 }],
        next: { text: '걸을 때 통증이 더 심해진다. 보호자가 오려면 한 시간이 남았다.', choices: [
          { id: 'ask', text: `보호자에게 알리고 ${CALL}로 증상을 묻는다`, result: '상담원이 지금 증상이면 응급실 진료를 받으라고 안내한다.', impact: [{ who: '서하', text: '혼자 판단하지 않고 안내를 받는다', tone: 1 }],
            next: { text: '보호자가 통화로 "이웃 어른께 부탁해 먼저 가 있어"라고 한다.', choices: [
              { id: 'go', text: '기록한 메모를 들고 이웃 어른과 응급실로 간다', result: '의사가 메모를 보며 바로 검사를 시작한다.', impact: [{ who: '서하', text: '늦지 않게 진료를 받는다', tone: 1 }], ending: '변하는 증상은 기록하고, 묻고, 늦지 않게 간다.' },
              { id: 'endure', text: '보호자가 올 때까지 혼자 참으며 기다린다', result: '통증이 더 심해져 결국 119 를 부른다.', impact: [{ who: '서하', text: '도움이 늦어진다', tone: -1 }], ending: '안내를 받고도 미루면 그만큼 위험이 커진다.' }] } },
          { id: 'sleep', text: '자고 나면 낫겠지 하고 눕는다', result: '새벽에 통증으로 잠이 깨고 일어나기 힘들다.', impact: [{ who: '서하', text: '밤사이 진료가 늦어진다', tone: -1 }], ending: '심해지는 통증은 잠으로 기다릴 신호가 아니다.' }] } },
      { id: 'er', text: '바로 응급실로 간다', result: '응급실에 접수하고 기다린다. 더 위급한 환자가 먼저 진료받는다.', impact: [{ who: '서하', text: '진료는 받지만 오래 기다린다', tone: 0 }],
        next: { text: '진료 결과 다행히 큰 문제는 아니었다. 기다린 시간과 비용이 생각보다 컸다.', choices: [
          { id: 'learn', text: '다음엔 증상 기록과 상담 전화로 먼저 판단하자고 정리한다', result: '서하가 휴대폰 메모에 \'밤에 아플 때 할 일\'을 적는다.', impact: [{ who: '서하', text: '다음 판단의 기준이 생긴다', tone: 1 }], ending: '가 본 결과를 다음 판단의 기준으로 남긴다.' },
          { id: 'always', text: '앞으로 아프면 무조건 큰 병원 응급실로 가기로 한다', result: '가벼운 감기에도 응급실을 찾는다.', impact: [{ who: '위급한 환자', text: '진료가 밀린다', tone: -1 }], ending: '응급실은 위급한 환자가 먼저인 곳이다.' }] } },
      { id: 'skip', text: '배가 아픈 건 흔하다며 게임을 계속한다', result: '자정 무렵 통증 때문에 몸을 웅크린다.', impact: [{ who: '서하', text: '변화를 놓친다', tone: -1 }], ending: '흔한 증상도 변하는지 살펴야 한다.' }] };
    const BELLY_R = [{ id: 'signs', text: '통증이 세지거나 옮겨 가면 진료 시간을 기다리지 않는다' }, { id: 'ask', text: '판단이 어려우면 보호자·의료 상담 전화로 먼저 묻는다' }, { id: 'record', text: '언제부터 어디가 아픈지 적어 두면 진료에 도움이 된다' },
      { id: 'big', text: '큰 병원 응급실이 언제나 가장 좋다', why: '응급실은 위급한 환자가 먼저예요. 큰 병원이 모든 증상에 맞는 곳은 아니에요.' },
      { id: 'endure', text: '참으면 대부분 저절로 낫는다', why: '변하고 심해지는 증상은 참을 신호가 아니라 물어볼 신호예요.' }];
    const COST = [{ id: 'dental', text: '치과 정기 검진', price: 50000 }, { id: 'flu', text: '독감 예방접종', price: 30000 }, { id: 'check', text: '건강 검진 추가 검사', price: 60000 }, { id: 'er', text: '밤 응급실 진료 한 번', price: 150000 }, { id: 'gym', text: '석 달 운동 시설 이용', price: 120000 }];

    MODS.push(
      M({
        id: 'intro.route-timeline', type: 'intro', title: '증상에서 진료까지 가는 길',
        method: '증상에서 진료까지 경로', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 앞의 세 단계(알아차림·동네 의원·의뢰)를 함께 놓는다.', base: '다섯 단계를 차례로 놓고 단계마다 누가 돕는지 말한다.', challenge: '응급 경로(119·응급실)를 칠판에 따로 그려 보통 경로와 견준다.' },
        intro: {
          teacher: '"며칠째 기침이 이어지면 어디부터 가나요? 큰 병원으로 바로 가야 할까요?" 두세 명의 대답을 듣고 시연 단추로 다섯 단계가 시간 줄에 놓이는 모습을 보인다. "큰 병원이 언제나 더 좋다"는 말이 나오면 "동네 의원에서 먼저 보고 필요하면 큰 병원으로 \'의뢰\'하는 길이 있어요. 왜 그런 길을 둘까요?"라고 되묻는다. 회복 뒤 관리가 다시 동네 의원으로 돌아온다는 점과, 응급은 이 길과 따로 간다는 점을 짚는다.',
          student: '증상을 알아차린 때부터 회복까지, 의료를 이용하는 단계 카드를 시간 줄에 차례로 놓아 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['증상', '회복'], slots: 5, cards: [ROUTE[3], ROUTE[0], ROUTE[4], ROUTE[2], ROUTE[1]], shuffle: false }, sequence: [{ order: ROUTE.map((r) => r.id) }] },
          art: { draw: 'a winding paper path from a small house with a thermometer, to a small neighbourhood clinic, to a larger hospital with a referral letter, then back to the clinic with a green leaf; a separate red paper road branching off to an ambulance', banner: '어디부터 갈까요?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '의료 이용 흐름은 일반 설명이다(사람 확인). 학생 자신이나 가족의 진료 경험을 발표시키지 않는다.',
      }),
      M({
        id: 'intro.facility-map', type: 'intro', title: '가상 동네의 의료 자원 지도',
        method: '지역 의료 자원 지도', tool: 'map', minutes: 7,
        levels: { easy: '교사가 동네 의원·응급실 두 곳의 범례를 함께 채운다.', base: '네 곳(동네 의원·보건소·종합병원·응급실)의 범례를 채우고 곳마다 하는 일을 말한다.', challenge: '활동지 \'혼자 보기\' 칸에 내 집에서 가까운 곳을 적어 둔다(발표하지 않음).' },
        intro: {
          teacher: '"가상 동네 지도예요. 기호마다 어떤 곳인지 범례를 채워 볼까요?" 시연 단추로 범례가 채워지는 모습을 보인 뒤 칠판 지도에서 학교와 가까운 곳에 핀을 짚는다. "보건소는 아플 때 가는 병원이잖아요"라는 말이 나오면 "보건소에서는 예방접종·금연 상담·건강 상담처럼 아프기 전에 쓰는 일도 해요. 우리 동네 보건소는 무엇을 할까요?"라고 되묻는다. 곳마다 쓰임이 다르고 밤·주말에 여는 곳도 다르다는 점을 짚는다.',
          student: '가상 동네 지도의 기호마다 어떤 곳인지 범례를 채우고, 곳마다 언제 쓰는지 생각해 보세요.',
          demo: { tool: 'map', options: { mode: 'legend', title: '가상 동네 의료 자원', places: TOWN, meanings: { hospital: '동네 의원', office: '보건소', apartment: '종합병원', lighthouse: '응급실(24시간)' } }, sequence: [{ legend: { hospital: '동네 의원', office: '보건소', apartment: '종합병원', lighthouse: '응급실(24시간)' } }] },
          art: { draw: 'a paper town map on a grid with a small clinic, a public health centre, a large hospital and a glowing emergency entrance at night, tiny paper legend tags beside each icon', banner: '우리 동네 어디에 있을까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '지도는 가상이다. 학생이 사는 곳을 묻거나 발표하게 하지 않는다. 지역 보건소가 하는 일은 학교가 지역 보건소 안내로 확인해 알려 준다.',
      }),

      M({
        id: 'activity.case-sort', type: 'activity', title: '사례마다 알맞은 의료 이용',
        method: '사례별 알맞은 의료 이용', tool: 'sortboard', minutes: 16,
        levels: { easy: '바구니 둘(동네 의원·응급실)에 사례 4장을 나누고, 틀리면 바로 까닭이 나온다.', base: '바구니 넷(보건소·동네 의원·전문 진료·응급실)에 사례를 나누고, 증상을 응급 신호와 진료 시간에 볼 증상으로 나눈다.', challenge: '헷갈리는 사례 카드가 더해지고, 활동지에 애매한 사례 하나의 판단 근거를 쓴다.' },
        activity: {
          title: '사례 바구니 나누기', tool: 'sortboard',
          teacher: '"같은 \'아프다\'도 갈 곳이 달라요. 사례 카드를 알맞은 곳 바구니에 나눠 봐요." 카드를 놓을 때마다 "지금 위급한가요, 며칠 지켜볼 일인가요, 아프기 전에 할 일인가요?"라고 묻는다. 모든 카드를 응급실이나 큰 병원에 넣는 학생에게 "가벼운 감기로 응급실이 붐비면, 그 시간에 가슴이 아픈 사람은 어떻게 될까요?"라고 되묻는다. 위급 신호는 망설이지 않고 119·응급실, 나머지는 동네 의원부터라는 점을 짚는다.',
          task: '사례 카드를 알맞은 의료 이용 바구니에 나누고, 응급 신호를 가려내요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 사례 카드를 알맞은 곳 바구니에 나누세요.', toolOptions: { slots: ['보건소', '동네 의원', '전문 진료', '응급실'], cards: ['독감 예방접종을 받고 싶다', '사흘째 콧물과 기침이 난다', '의원에서 큰 병원 검사를 권했다', '갑자기 숨쉬기가 힘들다', '금연 상담을 받고 싶다', '발목을 삐었지만 걸을 수 있다', '의뢰서를 받아 정밀 검사를 한다', '멈추지 않는 피가 난다'] },
              target: { sort: { 보건소: ['독감 예방접종을 받고 싶다', '금연 상담을 받고 싶다'], '동네 의원': ['사흘째 콧물과 기침이 난다', '발목을 삐었지만 걸을 수 있다'], '전문 진료': ['의원에서 큰 병원 검사를 권했다', '의뢰서를 받아 정밀 검사를 한다'], 응급실: ['갑자기 숨쉬기가 힘들다', '멈추지 않는 피가 난다'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '가상 사례 카드를 동네 의원·응급실 바구니에 나누세요(바구니 2개).', toolOptions: { slots: ['동네 의원', '응급실'], cards: ['사흘째 콧물과 기침이 난다', '갑자기 숨쉬기가 힘들다', '발목을 삐었지만 걸을 수 있다', '멈추지 않는 피가 난다'], instant: true, showCount: true }, target: { sort: { '동네 의원': ['사흘째 콧물과 기침이 난다', '발목을 삐었지만 걸을 수 있다'], 응급실: ['갑자기 숨쉬기가 힘들다', '멈추지 않는 피가 난다'] } } },
                challenge: { prompt: '가상 사례 카드를 알맞은 곳 바구니에 나누세요(헷갈리는 카드 2장 더).', toolOptions: { more: ['밤에 열이 나지만 물을 마시고 말도 잘한다', '가슴을 쥐어짜듯 아프고 식은땀이 난다'] }, target: { sort: { 보건소: ['독감 예방접종을 받고 싶다', '금연 상담을 받고 싶다'], '동네 의원': ['사흘째 콧물과 기침이 난다', '발목을 삐었지만 걸을 수 있다', '밤에 열이 나지만 물을 마시고 말도 잘한다'], '전문 진료': ['의원에서 큰 병원 검사를 권했다', '의뢰서를 받아 정밀 검사를 한다'], 응급실: ['갑자기 숨쉬기가 힘들다', '멈추지 않는 피가 난다', '가슴을 쥐어짜듯 아프고 식은땀이 난다'] } } } } },
            BOARDQ('가상 인물의 증상을 바로 119·응급실과 진료 시간에 동네 의원으로 나누세요.', ['바로 119·응급실', '진료 시간에 동네 의원'], [
              ['갑자기 말이 어눌하고 한쪽 팔에 힘이 빠진다', '불러도 반응이 없다', '점점 심해지며 옮겨 가는 복통'],
              ['며칠째 피부가 가렵다', '목이 칼칼하고 미열이 있다', '손가락을 살짝 베였는데 피가 멎었다'],
            ], { k: 2, d: 0.35 }),
            BOARDQ('보건소에서 할 수 있는 일과 의원·병원에서 할 일로 나누세요.', ['보건소에서 할 수 있는 일', '의원·병원에서 할 일'], [
              ['예방접종 받기', '금연 상담 받기', '건강 상담·검진 안내 받기'],
              ['며칠째 이어지는 기침 진료', '삔 발목 엑스선 검사', '의뢰받은 정밀 검사'],
            ], { k: 2, hard: [['지역 건강 프로그램 알아보기'], ['처방받은 약 상담']], d: 0.3, more: { conclude: '보건소는 아프기 전의 일(예방·상담)에, 의원은 증상이 있을 때 먼저, 큰 병원은 의뢰를 받아, 응급실은 위급할 때 — 쓰임이 나뉘어 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '헷갈렸던 사례 하나를 골라, 어디로 갈지 정한 근거(위급 신호인지)를 쓰세요.' }] },
        notes: '사례는 모두 가상이다. 응급 신호 예는 일반 설명이며(사람 확인), 실제로 위급하면 망설이지 않고 119 라는 점을 함께 말한다. 학생 자신의 증상·진료 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.er-dilemma', type: 'activity', title: '주말 밤 복통 갈림길',
        method: '응급실을 갈까 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '첫 갈림길(지켜보며 기록·바로 응급실·넘기기)만 고르고 근거를 고른다.', base: '두 번째 갈림길(통증이 세질 때·진료 결과 뒤)까지 가서 근거를 고른다.', challenge: '세 번째 갈림길(안내를 받은 뒤)까지 가서 근거를 고르고, 활동지에 두 길의 시간과 비용을 견준다.' },
        activity: {
          title: '토요일 밤 서하의 갈림길', tool: 'dilemma',
          teacher: '"토요일 밤, 동네 의원은 닫혔고 배가 아파요. 응급실에 갈까요, 기다릴까요?" 갈림길마다 "지금 증상이 변하고 있나요? 누구에게 물어볼 수 있나요?"라고 묻는다. \'자고 나면 낫겠지\'를 고른 학생에게 "기록에서 통증은 어떻게 변하고 있었나요?"라고 되묻는다. 바로 응급실로 간 길도 틀린 길이 아니며, 그 결과(대기·비용)를 다음 판단의 기준으로 남기는 것이 중요하다는 점을 짚는다. 장면 속 상담 전화 자리는 학교가 확인한 번호로 칠판에 채운다.',
          task: '갈림길마다 고르고 서하에게 생기는 결과와 비용을 따라가 본 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL123('서하의 토요일 밤을 끝까지 따라가고 근거를 고르세요.', BELLY, [['watch', 'ask', 'go'], ['er', 'learn']], BELLY_R, ['signs', 'ask'], { d: 0.35, opt: { title: '토요일 밤 복통' } }),
            EXPLOREQ('같은 장면에서 다른 길 하나를 더 끝까지 가 보고 시간과 비용을 견주세요.', BELLY, BELLY_R, ['두 길에서 진료까지 걸린 시간을 견주었다', '두 길에서 생긴 비용과 대기를 견주었다'], { d: 0.3 }),
            DIL2('짧은 장면: 일요일 낮, 서하가 감기 기운으로 목이 칼칼하다. 갈림길 둘을 따라가고 근거를 고르세요.', { text: '일요일 낮, 서하가 목이 칼칼하고 미열이 있다. 말도 잘하고 물도 잘 마신다. 친구가 "큰 병원 응급실이 제일 확실해"라고 한다.', who: '서하', motif: 'sun', choices: [
              { id: 'rest', text: '물을 마시며 쉬고, 월요일에 동네 의원에 가기로 한다', result: '증상을 메모하며 하루를 쉰다.', impact: [{ who: '서하', text: '알맞은 곳을 고른다', tone: 1 }],
                next: { text: '밤이 되자 열이 조금 올랐지만 말도 잘하고 숨쉬기는 편하다.', choices: [
                  { id: 'keep', text: '계획대로 쉬고, 숨이 차거나 심해지면 바로 묻기로 정한다', result: '월요일에 동네 의원에서 진료를 받는다.', impact: [{ who: '서하', text: '기준을 정해 두고 지켜본다', tone: 1 }], ending: '위급 신호를 정해 두면 지켜보기도 안전해진다.' },
                  { id: 'panic', text: '불안해서 밤 응급실로 간다', result: '오래 기다린 끝에 \'의원 진료면 된다\'는 말을 듣는다.', impact: [{ who: '위급한 환자', text: '진료가 밀린다', tone: -1 }], ending: '위급 신호가 없으면 진료 시간에 동네 의원이 먼저다.' }] } },
              { id: 'er2', text: '친구 말대로 바로 응급실로 간다', result: '위급한 환자가 먼저라 몇 시간을 기다린다.', impact: [{ who: '서하', text: '쉬어야 할 시간을 대기실에서 보낸다', tone: -1 }], ending: '큰 병원이 모든 증상에 맞는 곳은 아니다.' }] }, [['rest', 'keep']], BELLY_R, ['ask', 'record'], { d: 0.3, opt: { title: '일요일 낮 감기 기운' }, more: { conclude: '위급 신호가 있으면 119·응급실, 없으면 쉬며 기록하고 진료 시간에 동네 의원 — 기준을 먼저 정해 두어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '서하의 두 길을 견주어 쓰세요.', columns: ['', '지켜보며 묻고 간 길', '바로 응급실로 간 길'], cells: [['진료까지 걸린 시간', '', ''], ['생긴 비용·대기', '', ''], ['다음에 쓸 기준', '', '']] }] },
        notes: `장면은 가상이다. 상담 전화는 번호 대신 ${CALL} 자리로 두었다 — 학교가 확인한 번호를 칠판에 채운다. 응급 신호와 응급실 이용 원칙은 사람 확인 목록에 있다.`,
      }),
      M({
        id: 'activity.cost', type: 'activity', title: '예방과 응급 진료 비용 견주기',
        method: '의료 이용과 비용 생각', tool: 'economy', minutes: 16,
        levels: { easy: '항목 둘(치과 검진·독감 예방접종) 가운데 예산 안에서 고른다.', base: '항목 셋(검진 추가 검사까지)을 예산 안에서 고르고, 응급 진료 한 번 값으로 예방 항목을 고르고, 공공 지원을 찾을 곳을 고른다.', challenge: '항목 다섯(응급 진료·운동 시설까지)에서 고르고, 활동지에 공공 지원을 찾는 순서를 쓴다.' },
        activity: {
          title: '정우의 1년 건강 예산', tool: 'economy',
          teacher: '"가상 인물 정우는 스무 살, 혼자 살기 시작했어요. 1년 건강 예산 20만 원(예시 금액, 실제 수가 아님)을 어디에 쓸까요?" 예산 막대를 보며 고르게 하고, 두 번째 문항에서 응급 진료 한 번 값과 예방 항목 묶음을 견주게 한다. "아프지도 않은데 검진에 돈을 왜 써요?"라는 학생에게 "치과 검진을 몇 년 건너뛰었다가 아파서 밤에 응급 진료를 받는다면 어느 쪽이 더 들까요?"라고 묻는다. 예방은 나중의 큰 비용과 아픔을 줄이는 투자이고, 공공 지원도 찾아볼 수 있다는 점을 짚는다.',
          task: '예시 금액으로 정우의 건강 예산을 고르고, 예방과 응급 진료의 비용을 견줘요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '정우의 1년 건강 예산 20만 원(예시). 치과 정기 검진과 독감 예방접종은 꼭 넣고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 200000, items: COST.slice(0, 3) }, target: { budget: { must: ['dental', 'flu'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '정우의 1년 건강 예산 20만 원(예시). 두 항목을 모두 예산 안에서 고르세요(항목 둘).', toolOptions: { items: COST.slice(0, 2) }, target: { budget: { must: ['dental', 'flu'] } } },
                challenge: { prompt: '정우의 1년 건강 예산 20만 원(예시). 항목 다섯 가운데 치과 검진·예방접종은 꼭 넣고 응급 진료는 빼고 고르세요(항목 다섯).', toolOptions: { items: COST }, target: { budget: { must: ['dental', 'flu'], not: ['er'] } } } } },
            { prompt: '밤 응급실 진료 한 번 값(예시 15만 원)이면 예방 항목을 몇 개 할 수 있을까요? 응급 진료는 빼고 예방 항목 셋을 15만 원 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 150000, items: COST.slice(0, 4) }, target: { budget: { not: ['er'], count: 3 } }, difficulty: 0.3 },
            { prompt: '정우가 건강 검진·예방접종 공공 지원을 알아볼 곳만 고르세요.', toolOptions: { mode: 'pick', basket: '공공 지원을 알아볼 곳', cards: ['지역 보건소 안내', '광고 문자 속 무료 검진 링크', '국민건강보험공단 건강검진 안내', '친구에게 들은 소문'] }, target: { pick: ['지역 보건소 안내', '국민건강보험공단 건강검진 안내'] }, difficulty: 0.3,
              conclude: '예방 항목 셋을 합쳐도 응급 진료 한 번 값 안에 들어와요(예시 금액). 공공 지원은 공식 안내처에서 확인해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예방에 쓰는 돈이 나중의 비용을 줄일 수 있는 까닭을 오늘 견준 예시 금액을 근거로 한 문장으로 쓰세요.' }] },
        notes: '금액은 모두 예시 금액(실제 수가 아님)이다. 학생 가정의 의료비나 형편을 묻지 않는다. 실제 지원 대상·금액은 지역 보건소·국민건강보험공단 안내로 확인하게 한다.',
      }),
      M({
        id: 'activity.promo-plan', type: 'activity', title: '정우의 1년 건강 증진 계획',
        method: '건강 증진 계획 설계', tool: 'kitchen', minutes: 16,
        levels: { easy: '분기 칸 2개(1·2분기)에 목표 카드를 짝짓는다.', base: '분기 칸 4개에 목표 카드를 짝짓고, 목표마다 점검 지표를 짝짓고, 구체적인 목표를 가려낸다.', challenge: '헷갈리는 목표 카드가 섞이고, 활동지에 분기마다 점검 지표를 쓴다.' },
        activity: {
          title: '분기별 건강 목표', tool: 'kitchen',
          teacher: '"정우가 1년 건강 증진 계획을 세워요. 한꺼번에 다 하면 오래 못 가요. 분기마다 하나씩, 앞 목표가 뒤 목표를 돕게 놓아 볼까요?" 문항 글의 정우 상황을 읽고 짝짓게 한다. "건강하게 살기"처럼 막연한 목표를 고른 학생에게 "석 달 뒤에 이 목표를 이뤘는지 무엇으로 확인할 수 있을까요?"라고 묻는다. 좋은 목표는 언제·무엇을·얼마나가 들어 있어 스스로 점검할 수 있다는 점을 짚는다.',
          task: '정우의 분기별 건강 목표와 점검 지표를 짝짓고, 구체적인 목표를 가려내요.', levels: { easy: {}, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('정우는 봄에 잠부터 잡고, 여름에 운동, 가을에 검진, 겨울에 마음 돌보기를 하려 해요. 분기 칸과 목표를 짝지으세요.', [['1분기(봄)', '밤 12시 전에 잠자리에 든다'], ['2분기(여름)', '주 3번 30분 걷는다'], ['3분기(가을)', '치과·건강 검진을 예약한다'], ['4분기(겨울)', '힘들 때 이야기할 사람을 정한다']], { k: 2, extra: ['건강하게 산다'], d: 0.25, opt: { groups: false } }),
            MATCHQ('목표마다 이뤘는지 확인할 점검 지표를 짝지으세요.', [['밤 12시 전에 잠자리에 든다', '한 주에 지킨 날 수'], ['주 3번 30분 걷는다', '달력에 표시한 걷기 횟수'], ['치과·건강 검진을 예약한다', '예약한 날짜'], ['힘들 때 이야기할 사람을 정한다', '연락처에 저장한 사람 수']], { k: 2, extra: ['기분이 좋은지'], d: 0.3, opt: { groups: false } }),
            SORTQ('정우의 목표 후보를 점검할 수 있는 목표와 막연한 목표로 나누세요.', ['점검할 수 있는 목표', '막연한 목표'], [
              ['주 3번 30분 걷는다', '점심마다 채소 반찬을 남기지 않는다', '가을에 치과 검진을 예약한다'],
              ['건강하게 산다', '운동을 열심히 한다', '스트레스를 안 받는다'],
            ], { k: 2, d: 0.3, opt: { groups: false }, more: { conclude: '언제·무엇을·얼마나가 들어간 목표는 스스로 점검할 수 있어요. 막연한 목표는 이 세 가지를 채워 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '정우의 계획에서 분기마다 목표와 점검 지표를 정리하세요.', columns: ['분기', '목표', '점검 지표'], cells: [['1분기(봄)', '', ''], ['2분기(여름)', '', ''], ['3분기(가을)', '', ''], ['4분기(겨울)', '', '']] }] },
        notes: '\'주 3번 30분\'은 가상 인물의 계획 예시이며 공식 권장량이 아니다. 운동량·수면 시간 기준은 교사가 최신 공식 지침으로 안내한다. 학생 자신의 건강 상태를 묻지 않는다.',
      }),

      M({
        id: 'wrap.plan-write', type: 'wrap', title: '스무 살 나의 건강 증진 계획',
        method: '건강 증진 계획서와 성찰', tool: 'rubric-writing', minutes: 10,
        levels: { easy: '문장 틀을 보고 4문장으로 쓴다(쉬운 활동지).', base: '목표·방법·자원·점검·자립 연결을 담아 5문장으로 쓰고 기준표로 점검한다.', challenge: '계획을 막을 장애물 하나와 대책을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"스무 살, 혼자 생활을 시작한 나를 떠올려 봐요. 그때의 나를 위한 건강 증진 계획을 다섯 문장으로 써요. 지금 내 건강 상태나 병명은 쓰지 않아요 — 할 일만 써요." 쓰기 전에 기준표를 함께 읽는다. 목표만 쓰고 방법이 없는 학생에게 "그 목표를 위해 어디(보건소·동네 의원·학교)의 도움을 받을 수 있을까요?"라고 묻는다. 건강 관리는 아플 때가 아니라 아프기 전에 시작한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '스무 살의 나를 위한 건강 증진 계획을 다섯 문장으로 쓰세요(목표·방법·자원·점검·자립 연결). 지금의 건강 상태는 쓰지 않아요.', minChars: 80, maxChars: 500, starter: '스무 살의 나는 ~를 목표로 한다. 이를 위해 ~', sample: '스무 살의 나는 해마다 검진을 놓치지 않는 것을 목표로 한다. 이를 위해 봄마다 치과와 건강 검진을 예약하겠다. 예방접종은 보건소 안내를 먼저 확인하겠다. 석 달마다 달력에 지킨 일을 표시해 점검하겠다. 혼자 살아도 내 건강을 스스로 챙기는 것이 자립의 첫걸음이다.' }, prompt: '건강 증진 계획을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['목표가 구체적이다', '방법과 도움받을 곳을 썼다', '점검 방법을 썼다', '자립 생활과 이어 썼다'], sentences: [4, 6] }, difficulty: 0.3 },
            { type: 'choice', prompt: '건강 증진 계획에 대한 설명으로 가장 알맞은 것을 고르세요.', options: ['아플 때 세우는 것이다', '아프기 전에 세우고 점검하며 고쳐 간다', '큰 병원만 이용하면 된다'], answer: 1, difficulty: 0.15, explain: '건강 관리는 아프기 전에 시작하고, 점검하며 계획을 고쳐 가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '스무 살 나의 건강 증진 계획',
          items: [
            { type: 'short', prompt: '건강 증진 계획을 다섯 문장으로 쓰세요(지금의 건강 상태·병명은 쓰지 않기).' },
            { type: 'short', prompt: '계획을 막을 수 있는 장애물 하나와 그 대책을 쓰세요.' },
          ],
          easy: { note: '"스무 살의 나는 ~를 목표로 한다. 이를 위해 ~. 도움은 ~에서 받는다. ~마다 점검한다."', items: [{ type: 'short', prompt: '목표·방법·도움받을 곳·점검을 네 문장으로 쓰세요.' }] },
        },
        notes: '쓴 글은 걷어 채점하지 않는다. 학생 자신의 건강 상태·진료 이력·가정 형편을 쓰지 않도록 쓰기 전에 다시 말해 준다.',
      }),
      M({
        id: 'wrap.first-step', type: 'wrap', title: '계획의 첫 실천 점검',
        method: '첫 실천 점검', tool: 'timer', minutes: 10,
        levels: { easy: '첫 실천 점검 항목 둘(무엇·언제)만 함께 표시한다.', base: '2분 동안 첫 실천을 정하고 점검 항목 셋(무엇·언제·확인 방법)을 표시한다.', challenge: '함께할 사람(역할만, 이름 쓰지 않기)을 출구 질문에 더한다.' },
        wrap: {
          teacher: '"계획은 첫 실천 하나로 시작해요. 2분 타이머를 맞추고, 이번 주에 할 가장 작은 실천 하나를 정해요." 타이머가 도는 동안 정하게 하고 점검 항목을 표시하게 한다. "1년 계획을 다 해야 해서 못 정하겠어요"라는 학생에게 "이번 주 안에 10분이면 할 수 있는 일은 무엇일까요?"라고 묻는다. 작게 시작해 확인할 수 있어야 계속된다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '첫 실천 정하기', plan: { work: 60, rest: 0, rounds: 1 } }, prompt: '타이머를 2분(120초) 한 번으로 맞추고, 첫 실천을 정한 뒤 점검 항목을 모두 표시하세요.', target: { plan: { work: 120, rounds: 1 }, selfCheck: ['이번 주에 할 첫 실천 하나를 정했다', '언제 할지 정했다', '했는지 확인할 방법을 정했다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '첫 실천으로 가장 알맞은 것을 고르세요.', options: ['내일부터 매일 두 시간 운동', '이번 주 수요일에 보건소 예방접종 안내를 찾아본다', '언젠가 건강해지기'], answer: 1, difficulty: 0.15, explain: '언제·무엇을 할지 분명하고 작아서 확인할 수 있는 실천이에요.' },
            { type: 'short', prompt: '첫 실천을 함께할 사람을 역할로만 쓰세요(예: 친구, 보호자 — 이름은 쓰지 않아요).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 첫 실천',
          items: [
            { type: 'short', prompt: '이번 주에 할 첫 실천 하나와 할 때를 쓰세요.' },
            { type: 'short', prompt: '첫 실천을 했는지 무엇으로 확인할지 쓰세요.' },
          ],
        },
      }),
    );
  }


  PaperLessons.registerModules(MODS);
})();
