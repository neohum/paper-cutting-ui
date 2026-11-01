/* 창체 법정교육 학교폭력 예방 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 bully 고.
 * 근거: 학교폭력예방법 제15조·시행령 제17조(학기별 1회 이상, 지침 연 11시간·사이버폭력 예방 3차시 이상) — research-mandatory §1,
 *   research-mandatory §2 학교폭력 예방 고(사이버·성 관련 폭력, 법적 책임, 피해 학생 지원, 조력자 역할). 성폭력방지법 제5조(성폭력 예방교육)는 주제 g11-sexual-cyber 근거.
 * 고 기준: 법·제도와 자료 분석·토론(찬반 근거)·제안서·캠페인 설계·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 이 영역의 원칙: 피해 경험을 묻지 않는다(목격·가상 인물·일반 상황만) · 장면은 가상 인물(가명 한두 글자)로, 자극적이거나 자세하지 않게
 *   · 잘못은 괴롭힌 쪽 한 사람에게 있고, 말한(알린·도움을 청한) 사람은 잘한 것이다(피해자 탓 문구 금지)
 *   · 가해 행동을 한 사람은 낙인 없이 행동을 바로잡는 틀로 다룬다(피해 학생의 안전과 회복이 먼저)
 *   · 또래 상담자는 듣고 어른과 잇는 역할까지다(상담을 대신하거나 혼자 해결하지 않는다)
 *   · 사이버폭력은 실제 앱·플랫폼 이름 없이('가상 플랫폼 가·나·다', '단체 대화방', '익명 게시판') 쓴다
 *   · 법 조항 번호는 근거 파일에 있는 것(학교폭력예방법 제15조·시행령 제17조·성폭력방지법 제5조)만, 조치 호수·형량·생활기록부 기재 기준(기간·삭제 조건)은 쓰지 않는다
 *     ('조치가 기록으로 남을 수 있다'까지만 — 주제 objective 의 표현)
 *   · 도움 받을 곳은 체계도 concepts 의 것만(담임 선생님·상담 선생님·Wee 클래스·믿을 어른·보호자·신고·상담 창구). 전화번호는 쓰지 않고
 *     체계도 brief 가 둔 자리 글 '[학교가 확인해 넣는 학교폭력 신고·상담 번호]'를 그대로 쓴다(교사가 학교에서 확인해 채운다).
 * 수치 자료는 모두 '가상'이다(화면 제목에 밝힘). 인물은 직접 지은 가명이다.
 * 주제 18개, 체계도 계획 모듈 141개 전부.
 *
 * 교구 한계로 계획을 바꾼 곳:
 *   block-coding(거북이 코딩판)은 블록에 글을 붙일 수 없다 — 절차 단계는 판의 별 칸(들를 단계)·바위 칸(하면 안 되는 행동)·깃발(마지막 단계)로 나타내고,
 *     문항 글이 칸의 뜻을 밝힌다. 절차의 글(단계 이름·까닭)은 활동지 표에 쓴다. '갈래'는 조건 블록(막히면 돌기)과 바위로 막힌 길로 나타낸다.
 *   keyboard 는 리듬 블록(음표·쉼표)만 놓는다 — 구호 글은 활동지·말하기로 쓰고, 교구는 구호의 박(리듬)을 짓는다.
 *   pattern 의 글자 조각은 짧은 낱말만 담는다 — 요일·단계 띠는 한두 낱말 조각으로 쓰고 자세한 행동은 활동지에 쓴다.
 *   economy 는 돈(원)만 센다 — '예산 100단위'는 '가상 예산 100만 원(1단위 = 1만 원)'으로 바꾸었다.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   g10-evidence.intro.evidence-quality·wrap.checklist-timer: 믿을 만한 기록의 조건(날짜·시간·계정·대화 앞뒤·원본 화면 녹화) — 교육부 사이버폭력 예방 자료·경찰청 사이버범죄 신고 안내(증거 자료 준비)
 *   g10-evidence.activity.preserve-blocks·activity.guide-writing: 보존 절차(캡처·녹화 → 링크·위치 기록 → 원본 보존 → 백업 → 믿을 어른·학교에 알리기)와 '성적 이미지는 학생이 직접 저장·전달하지 않고 바로 어른·신고로' — 경찰청 사이버범죄·디지털 성범죄 신고 안내
 *   g10-evidence.activity.platform-compare: 신고·차단·숨김·제한 기능의 일반 뜻과 '신고자를 상대에게 알리지 않는 곳이 많지만 정책은 서비스마다 다르다' — 방송통신위원회·한국지능정보사회진흥원 청소년 SNS 안전 안내(실제 서비스 도움말)
 *   g10-evidence.activity.case-tracking: 학교가 접수 뒤 기록·진술·정황으로 사실을 확인한다는 흐름, '증거가 완벽하지 않아도 알릴 수 있다' — 교육부 학교폭력 사안처리 가이드북
 *   g10-reposter.activity.debate-board·act.case-report·wrap.my-rule: 처음 올린 사람뿐 아니라 퍼 나른 사람도 피해를 키운 책임에서 벗어나기 어렵다(책임의 크기는 상황마다 다름) — 교육부 사이버폭력 예방 자료·경찰청 사이버범죄 안내·방송통신위원회 디지털 시민성 자료
 *   g10-reposter.activity.repost-dilemma: 받은 게시물을 저장·보관하는 것도 재확산의 씨앗이 될 수 있고, 멈춘 뒤 담임 선생님께 알리면 학교가 게시물 삭제와 당사자 보호에 나선다 — 교육부 학교폭력 사안처리 가이드북(사이버폭력)
 *   g10-relational.intro.freedom-vs-exclusion·wrap.concept-map: 친구를 고를 자유와 따돌림을 가르는 기준(한 사람에게 쏠린 되풀이·일부러·웃음·배제) — 교육부 학교폭력 사안처리 가이드북(따돌림 정의)·교육부 어울림 프로그램 자료
 *   g10-relational.activity.class-norm-design: 무작위 배정·역할 나누기·중간 점검·바꾸기 요청 창구로 모둠 배제를 줄인다는 학급 운영 방법 — 교육부·시도교육청 학급 운영·협동학습 안내(일반 권고)
 *   g10-peer-counsel 전체: 또래 상담자의 역할 범위(경청·공감·열린 질문·어른과 연결, 상담을 대신하지 않음), 안전·생명이 걸린 비밀은 지키지 않고 어른에게 잇는다 — 교육부 또래상담 운영 안내·한국청소년상담복지개발원 또래상담 자료·Wee 프로젝트 안내
 *   g10-peer-counsel.activity.referral-map: 상황별 연결(다침 → 보건실, 되풀이 → 담임 선생님, 마음 → Wee 클래스·상담실, 학교 밖 → 신고·상담 창구, 위험한 비밀 → 가장 가까운 어른) — 학교 상담실 운영 안내·교육부 학교폭력 사안처리 가이드북. 신고·상담 창구 번호는 체계도 자리 글 그대로(교사가 확인해 채움)
 *   g10-peer-counsel.activity.limits-chart: '혼자 들어도 됨·어른 연결 필요·즉시 어른' 분류 기준과 '혼자 들어도 되는 일도 기록은 상담 선생님과 나눈다' — 한국청소년상담복지개발원 또래상담자 활동 지침(수치는 가상)
 *   g10-punish-restore.activity.debate·wrap.summary-collage: '학교폭력 조치는 기록으로 남을 수 있다'(주제 objective 의 표현, 근거 약함)만 쓰고 기재 기간·삭제 조건·호수는 쓰지 않음 — 교육부 학교폭력 사안처리 가이드북·학교생활기록부 기재요령(해당 연도)
 *   g10-punish-restore.activity.outcome-dilemma: 회복 대화(관계회복)는 피해 학생이 원할 때, 진행 경험이 있는 어른이 맡고, 조치와 별도로 함께 진행될 수 있다 — 교육부 학교폭력 사안처리 가이드북(관계회복 프로그램)
 *   g10-punish-restore.activity.outcome-dilemma: 조치 뒤 피해 학생 상담·학습 지원과 담임의 재발 점검 — 교육부 학교폭력 사안처리 가이드북(피해 학생 보호·사후 지도)
 *   g10-charter.intro.rule-compare·act.charter-draft: 좋은 규범의 조건(공정·실행 가능·참여로 정함)과 '행동이 보이게 쓴다'는 작성 원칙 — 교육부 학교폭력 예방교육 자료(어울림 프로그램 학급 규칙 만들기)
 *   g10-charter.activity.adoption-blocks: 헌장 채택 절차(초안 → 학급 의견 → 학생회 정리 → 공청회 → 채택 → 점검)는 수업용 제안 틀이다 — 학교 규칙 제·개정 절차는 초·중등교육법 시행령(학교규칙)·각 학교 학칙으로 교사가 확인
 *   g10-charter.activity.charter-dilemma: '행동을 멈추게 하되 사람에게 낙인을 찍지 않는다'는 회복적 생활교육 원칙 — 교육부 관계회복·회복적 생활교육 안내
 *   g11-sexual-cyber.intro.myth-check·act.response-dilemma·wrap.law-concept: 얼굴 합성 성적 이미지·불법 촬영물 유포·성적 모욕 메시지가 학교폭력(사이버폭력)이면서 성폭력이라는 설명 — 국가법령정보센터 학교폭력예방 및 대책에 관한 법률(정의)·성폭력범죄의 처벌 등에 관한 특례법(허위영상물 등)
 *   g11-sexual-cyber.activity.response-dilemma·act.report-flow·wrap.pledge: 받은 사람은 열지·저장·전달하지 않고 계정·시각·위치만 적어 바로 알린다, 성적 합성물은 학생이 증거로 저장하지 않는다 — 경찰청 디지털 성범죄 신고 안내
 *   g11-sexual-cyber.wrap.law-concept: 저장·전달(소지·유포)이 피해를 키우고 문제가 될 수 있다는 카드·문장(처벌 여부·형량은 쓰지 않음) — 국가법령정보센터 성폭력범죄의 처벌 등에 관한 특례법
 *   g11-sexual-cyber.activity.report-flow·wrap.law-concept: 플랫폼 신고(삭제·계정 제재 요청)와 수사기관 신고를 학교 절차와 함께 진행한다는 흐름 — 교육부 학교폭력 사안처리 가이드북·여성가족부 디지털 성범죄 피해자 지원 안내(삭제 지원)
 *   g11-sexual-cyber.activity.secondary-harm: 2차 피해 말(피해자 탓·캐묻기·침묵 권유)과 지지하는 말의 기준 — 여성가족부·한국양성평등교육진흥원 성폭력 2차 피해 예방 자료
 *   g11-sexual-cyber.intro.trend-data: 상담 건수 꺾은선은 가상 값(실제 통계 아님) — 실제 수치로 바꾸려면 여성가족부·방송통신심의위원회 디지털 성범죄 통계
 *   g11-doxxing.intro.justice-dilemma·act.debate·wrap.principle: '사실이어도 신상을 모아 공개하면 사적 제재가 되고 문제될 수 있다'(명예훼손·개인정보 침해 쟁점, 조문·형량 없이) — 국가법령정보센터 형법·정보통신망법·개인정보 보호법, 방송통신위원회 안내
 *   g11-doxxing.activity.response-blocks·act.debate: 플랫폼의 '개인정보 노출' 신고 항목, 확산 계정 신고로 퍼짐을 끊는다는 대응 — 개인정보보호위원회·한국인터넷진흥원 개인정보 침해 신고 안내(실제 서비스 도움말)
 *   g11-doxxing.activity.chat-rules: 단체 대화방 운영 규칙(캡처 공유 금지·개인 정보 금지·갈등은 개인 대화나 선생님과·방장 역할)은 수업용 제안 — 교육부 사이버폭력 예방 자료(학급 단체 대화방 규칙)
 *   g11-doxxing.activity.harm-chart: 댓글 수·성격 그래프는 가상 값 — 확인 불필요
 *   g11-legal-responsibility.intro.one-case-three·act.case-tracking·wrap.concept-check: 한 사건에서 학교의 조치·민사상 손해배상·형사 책임이 따로 생길 수 있다는 구분과 각 갈래의 일(학교 = 보호·조치, 민사 = 손해 배상, 형사 = 수사·법원) — 국가법령정보센터 학교폭력예방 및 대책에 관한 법률·민법·형법, 교육부 학교폭력 사안처리 가이드북
 *   g11-legal-responsibility.intro.myth-sort: '학생은 형사 책임을 지지 않는다 → 나이에 따라 다름', '보호자가 손해를 배상할 수도 있다 → 조건에 따라 다름'(구체 나이 없이) — 국가법령정보센터 형법(형사미성년자)·소년법·민법(감독자 책임)
 *   g11-legal-responsibility.activity.case-tracking·intro.myth-sort: '합의가 있어도 학교 절차·피해 학생 보호와 다른 책임이 모두 사라지지는 않는다'와 '합의 뒤에도 학교가 피해 학생 안전을 살핀다' — 교육부 학교폭력 사안처리 가이드북(학교장 자체해결·합의 관련)
 *   g11-legal-responsibility.activity.procedure-blocks: 절차 흐름(신고·접수 → 보호(분리 등) → 사안 조사 → 학교 자체 해결 또는 교육지원청 심의 → 조치·지원 → 이행 점검)과 당사자 의견 진술·이의 제기 지점 — 교육부 학교폭력 사안처리 가이드북·학교폭력예방법(심의위원회·행정심판 등)
 *   g11-legal-responsibility.activity.case-tracking: 조치 뒤 접촉하지 않기 약속, 사과는 피해 학생이 원할 때 정해진 길로 — 교육부 학교폭력 사안처리 가이드북(관계회복)
 *   g11-legal-responsibility.activity.data-analysis: 심의 건수·유형 비율 그래프는 가상 값 — 실제 수치는 교육부·교육청 학교폭력 실태조사·심의 현황 발표
 *   g11-victim-support.intro.secondary-list·act.rumor-dilemma·wrap.harm-chart: 2차 피해의 예(캐묻기·탓하기·소문·피하기·퍼 나르기)와 '사안 뒤 추측·소문이 2차 피해가 된다' — 교육부 학교폭력 사안처리 가이드북(피해 학생 보호·2차 피해 방지)
 *   g11-victim-support.intro.recovery-timeline: 회복 시기마다 필요한 지원이 달라지고 관심이 줄 때 지원이 끊기기 쉽다는 일반 설명 — 교육부 Wee 프로젝트·학교폭력 피해 학생 지원 안내
 *   g11-victim-support.activity.support-map: 필요별 연결(마음 = 상담실·Wee 클래스, 학업 = 담임 선생님을 거친 조정 요청, 학교 밖 상담 = 지역 상담 기관 자리, 보호자 협력 = 담임) — 교육부 학교폭력 피해 학생 지원 안내·학교 상담실 운영 안내(지역 기관 이름·번호는 학교 확인)
 *   g11-victim-support.activity.class-plan·act.support-letter: 지원 전에 당사자의 동의·선택을 먼저 묻는다는 원칙 — 교육부 학교폭력 사안처리 가이드북(피해 학생 의견 존중)
 *   g11-hierarchy-culture.intro.tradition-sort·wrap.concept-map: 전통과 강요를 가르는 기준(원하는 사람만 하는가·모두에게 같은가·거절하면 불이익이 있는가)과 선후배 위계를 핑계로 한 강요(벌칙 심부름·인사 강요)가 괴롭힘이 될 수 있다는 판단 — 교육부 학교폭력 사안처리 가이드북(강요·따돌림)·학교 운동부 인권 보호 안내
 *   g11-hierarchy-culture.intro.cycle-chart: 되물림 설문 수치는 수업용 가상 값(화면에 밝힘) — 실제 수치로 바꾸려면 교육부 학교폭력 실태조사·운동부 인권 실태조사
 *   g11-hierarchy-culture.activity.senior-dilemma·act.new-rules: 동기와 함께 지도 선생님께 알리고 강요 금지 규칙을 정하는 대응 — 교육부 학교 운동부 운영 안내(지도교사 역할)
 *   g11-policy.intro.problem-data·act.proposal-writing: 설문 유형·장소·시간대 수치는 수업용 가상 값(화면에 밝힘) — 실제 수치로 바꾸려면 교육부 학교폭력 실태조사·학교 자체 설문
 *   g11-policy.activity.stakeholder-dilemma: 학교 정책 제안이 학생회·교사회·보호자(학부모)회 의견을 거쳐 정해진다는 흐름 — 학교 규칙 제·개정 절차(초·중등교육법 시행령 학교 규칙 조항·각 학교 학생 자치 규정) 확인
 *   g11-policy.activity.stakeholder-dilemma: 감시 카메라는 온라인 괴롭힘을 막지 못한다는 판단과 카메라 설치의 사생활 쟁점 — 개인정보보호위원회 영상정보처리기기 안내
 *   g12-adult-chat.intro.scene-judge·wrap.rule-card: 업무 지시와 괴롭힘의 경계(공개성·인격 공격·업무 관련성)와 단톡방 공개 질책이 괴롭힘이 될 수 있다는 판단 — 고용노동부 직장 내 괴롭힘 판단 및 예방·대응 매뉴얼
 *   g12-adult-chat.intro.time-clock·act.boundary-writing: 업무 시간 밖 연락 강요를 괴롭힘의 신호로 보는 판단('밤 10시' 등은 공동체 약속의 예) — 고용노동부 직장 내 괴롭힘 매뉴얼(업무 외 시간 연락)
 *   g12-adult-chat.activity.response-dilemma·act.record-blocks: 대학·일터의 기관 안 창구(학생 지원 창구·인사 담당)와 외부 상담으로 잇는 경로(창구 이름은 학교·기관마다 다름, 번호는 학교 확인 자리 글) — 각 대학 학생상담센터·인권센터 안내, 고용노동부 노동 상담 안내
 *   g12-adult-chat.activity.data-read: 첫해 괴롭힘 유형 비율은 수업용 가상 값(화면에 밝힘) — 실제 수치로 바꾸려면 고용노동부·국가인권위원회 청년 실태조사
 *   g12-anon-review.intro.review-sort·act.rewrite: 정당한 비판(확인할 수 있는 사실·행동)과 인신공격(사람을 깎아내림)·확인 안 된 주장의 구분 — 방송통신위원회 디지털 시민성 자료·국가법령정보센터 형법·정보통신망법(모욕·명예훼손, 조문 번호·형량은 쓰지 않음)
 *   g12-anon-review.activity.comment-dilemma: 악성 후기에 맞대응하지 않고 기록 → 플랫폼 신고 → 상담·신고 창구와 의논, 추측으로 신상을 공개하면 새 피해 — 경찰청 사이버범죄 신고 안내·방송통신위원회
 *   g12-anon-review.activity.debate: '닉네임 게시 + 운영자만 확인하는 실명 인증', '비밀이 지켜지는 제보 창구'를 대안 예시로 쓴 것 — 학교 게시판 운영 지침(학교가 판단)
 *   g12-anon-review.activity.log-template: 목격 기록 항목(날짜·시간, 장소·플랫폼, 들은 말 그대로의 내용, 함께 본 사람, 자료 위치, 안전한 곳에 두기) — 교육부 학교폭력 사안처리 가이드북·고용노동부 직장 내 괴롭힘 대응 안내(기록 남기기)
 *   g12-anon-review.wrap.habit-clock: '목격한 날 저녁 9시까지 기록'은 연습용 우리 반 약속(기준 아님) — 확인 불필요, 화면·교사 메모에 밝힘
 *   g12-beyond-school.intro.structure-compare·act.case-analysis: 학교폭력의 세 기준(힘의 불균형·되풀이·피해)이 대학·군대·직장에서도 괴롭힘을 알아보는 틀로 쓰인다는 설명 — 고용노동부 직장 내 괴롭힘 판단 및 예방·대응 매뉴얼·국가인권위원회 대학 인권 안내
 *   g12-beyond-school.activity.refusal-dilemma: 되풀이되는 강요는 기록 → 동료와 함께 → 인사 등 공식 창구, 창구가 없으면 바깥 상담 창구 — 고용노동부 직장 내 괴롭힘 대응 안내(상시 근로자 수에 따른 적용 범위는 다루지 않음)
 *   g12-beyond-school.activity.support-map: 대학 학생상담센터(비밀 보장 상담)·인권센터(조사·조치 요청)·회사 인사 창구·사내 상담 창구의 역할 구분과 '익명·비밀 보장 여부를 먼저 물을 수 있다' — 각 대학·회사 안내(이름·운영은 곳마다 다름), 신고·상담 번호는 학교가 확인
 *   g12-beyond-school.activity.data-read: 강요 유형·대응 방식 수치는 수업용 가상 값(실제 통계 아님 — 제목에 밝힘) — 확인 불필요
 *   g12-beyond-school.wrap.refusal-lines: 정중한 거절 문장(분명한 거절·짧은 이유·대안) 틀 — 일반 의사소통 권고(근거 파일 없음)
 *   g12-ally.intro.action-menu·act.meeting-dilemma·wrap.ally-card: 목격자 개입 방식(화제 돌리기·나중에 따로 지지·기록·직접 말하기·윗사람이나 창구에 맡기기)과 '내 위험을 따져 고른다' — 고용노동부 직장 내 괴롭힘 예방·대응 매뉴얼(동료 지원)·교육부 학교폭력 예방교육 자료(주변인 개입)
 *   g12-ally.activity.meeting-dilemma·act.script-writing·act.collective-plan: 알릴지는 당사자의 뜻을 묻고 함께 정한다(동의 존중) — 고용노동부 직장 내 괴롭힘 대응 안내(피해자 의사 존중)
 *   g12-ally.activity.collective-plan: 여러 목격자가 각자 기록 → 맞춰 보기 → 당사자 뜻 묻기 → 함께 창구에 알리기, 보복 걱정이 있으면 비밀 보장을 먼저 묻는다 — 고용노동부 직장 내 괴롭힘 신고·조사 안내(불리한 처우 금지 세부는 다루지 않음)
 *   g12-ally.intro.bystander-data: 목격 뒤 행동 비율은 수업용 가상 값(실제 조사 아님 — 제목에 밝힘) — 확인 불필요
 *   g12-accountability.intro.change-steps·act.repair-plan·wrap.principle-poster: 책임의 단계(인정 → 영향 이해 → 피해 학생이 원하는 방식의 사과 → 바로잡기 → 행동 변화 → 점검) 틀 — 교육부 학교폭력 사안처리 가이드북(관계회복)·회복적 생활교육 자료
 *   g12-accountability.activity.repair-plan·act.case-tracking: 사과·만남은 피해 학생이 원할 때, 원하지 않으면 상담 선생님을 거친 다른 방식으로 — 교육부 학교폭력 사안처리 가이드북(관계회복은 양쪽, 특히 피해 학생이 원할 때)
 *   g12-accountability.activity.debate: 조치 뒤 반 배정·분리 여부가 학교 상황마다 다르고 피해 학생 의견을 먼저 듣는다는 설명(조치 종류·호수 없이) — 교육부 학교폭력 사안처리 가이드북
 *   g12-respect-pledge.intro.handover-dilemma·act.handover-blocks: 문화가 이어지려면 멘토 짝·공동 행사·학생회 안건·점검표 같은 지속 장치가 필요하다는 일반 설명 — 교육부 학교폭력 예방교육 자료(학생 자치 활동·어울림 프로그램)
 *   g12-respect-pledge.activity.pledge-writing·wrap.legacy-poster: 새 공동체(대학·일터)에서 상담·신고 창구를 먼저 찾아 두라는 권고, 목격 시 곁에 서기·기록·알리기 — 교육부 학교폭력 예방교육 자료·고용노동부 직장 내 괴롭힘 대응 안내
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'bully', band: '고', topic: `bully.h.${topic}`, grades }, o, { id: `bully.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;
  // 도움 경로 자리 글 — 체계도 brief 와 같은 글. 번호는 교사가 학교에서 확인해 채운다
  const HELPNO = '[학교가 확인해 넣는 학교폭력 신고·상담 번호]';

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
  // 거북이 코딩판(block-coding build): board = { cols, rows, start, goal, rocks, stars, blocks }. target 기본 = 깃발 도착 + 별(단계) 모두 들르기
  //   easy/challenge = { prompt?, board?(판을 바꿀 칸만), target? } — 판을 바꾸면 그 단계의 target 도 함께 준다
  const BCQ = (prompt, board, target, { easy = null, challenge = null, d = 0.35, more = {} } = {}) => {
    const it = { prompt, toolOptions: Object.assign({}, board), target: Object.assign({ reach: true }, target), difficulty: d, levels: {} };
    const lv = (x) => Object.assign({}, x.prompt ? { prompt: x.prompt } : {}, x.board ? { toolOptions: x.board } : {}, x.target ? { target: Object.assign({ reach: true }, x.target) } : {});
    if (easy) it.levels.easy = lv(easy);
    if (challenge) it.levels.challenge = lv(challenge);
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 거북이 코딩판(block-coding trace): 주어진 절차 프로그램을 따라가 거북이가 멈출 칸 고르기
  const TRACEQ = (prompt, board, program, end, { d = 0.3, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'trace', program }, board), target: { end }, difficulty: d }, more);
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
  // 1. 디지털 증거 보존과 플랫폼 신고 기능 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-evidence', [10]);
    // 캡처 카드: 신뢰도 높음·낮음
    const CAP_HI = ['날짜·시간·계정이 함께 보이는 캡처', '대화 앞뒤가 이어진 연속 캡처', '스크롤하며 찍은 원본 화면 녹화'];
    const CAP_LO = ['시간·계정명이 잘린 캡처', '글자를 고친 흔적이 있는 캡처', '누가 보냈는지 모르는 다시 받은 캡처'];
    // 지우기 직전 장면(도입)
    const DELETE = { text: '같은 반 현이 익명 게시판의 모욕 글을 보여 주며 "글쓴이가 곧 지울 것 같아"라고 한다. 글에는 다른 반 학생 별명이 적혀 있다.', who: '나', motif: 'cloud', choices: [
      { id: 'save', text: '날짜·시간·게시 위치가 보이게 먼저 캡처하고 화면을 녹화한다', result: '글이 10분 뒤 지워졌지만 기록은 남았다.', impact: [{ who: '모욕당한 학생', text: '도움을 청할 근거가 남는다', tone: 1 }],
        next: { text: '기록을 남긴 뒤 현이 "이제 단톡방에 올려서 다 알게 하자"고 한다.', choices: [
          { id: 'tell', text: '단톡방에는 올리지 않고 담임 선생님께 기록을 보여 드린다', result: '선생님이 사실을 확인하고 해당 학생을 살핀다.', impact: [{ who: '모욕당한 학생', text: '퍼지지 않고 보호받는다', tone: 1 }], ending: '기록은 퍼뜨리려고가 아니라 알리고 지키려고 남긴다.' },
          { id: 'spread', text: '증거라며 반 단톡방에 캡처를 올린다', result: '모욕 글이 오히려 더 많은 사람에게 퍼진다.', impact: [{ who: '모욕당한 학생', text: '피해가 더 커진다', tone: -1 }], ending: '증거를 퍼뜨리면 증거 보존이 아니라 또 하나의 확산이 된다.' }] } },
      { id: 'reply', text: '먼저 댓글로 "이거 신고한다"고 경고한다', result: '글쓴이가 눈치채고 바로 글을 지웠다.', impact: [{ who: '모욕당한 학생', text: '확인할 기록이 사라진다', tone: -1 }], ending: '경고가 먼저 가면 기록이 사라질 수 있다.' },
      { id: 'wait', text: '지워지면 끝이니 그냥 둔다', result: '글은 지워졌지만 캡처본이 이미 몇 사람에게 돌고 있다.', impact: [{ who: '모욕당한 학생', text: '도움받기 어려워진다', tone: -1 }], ending: '지워져도 피해는 남는다. 남는 것은 기록이 없는 피해다.' }] };
    const DELETE_R = [{ id: 'first', text: '지워지기 전에 원본이 보이게 남기는 것이 먼저다' }, { id: 'adult', text: '기록은 믿을 어른에게 보이려고 남긴다' }, { id: 'share', text: '증거니까 많은 사람이 보면 좋다', why: '증거를 퍼뜨리면 모욕 글이 더 퍼져 피해가 커져요.' }];
    // 증거를 남긴 사안·지운 사안(활동)
    const CASE = { text: '가상 사안: 동아리 단체 대화방에서 윤이를 향한 조롱 메시지가 며칠째 이어진다. 목격한 나는 화면을 보고 있다.', who: '나', motif: 'house', choices: [
      { id: 'keep', text: '날짜·시간·계정이 보이게 캡처하고 대화 앞뒤도 남긴다', result: '며칠 치 메시지가 이어진 기록이 생겼다.', impact: [{ who: '윤', text: '되풀이된 일이라는 근거가 남는다', tone: 1 }],
        next: { text: '조롱한 학생이 메시지를 모두 지우고 "그런 적 없다"고 한다.', choices: [
          { id: 'report', text: '기록을 지우지 않고 담임 선생님께 알린다', result: '학교가 사안을 접수하고 기록을 바탕으로 사실을 확인한다.', impact: [{ who: '윤', text: '말이 엇갈려도 사실 확인이 된다', tone: 1 }],
            next: { text: '사안 조사 단계, 선생님이 "원본 기록을 그대로 둘 수 있니?"라고 묻는다.', choices: [
              { id: 'orig', text: '원본을 지우지 않고 백업도 함께 넘긴다', result: '되풀이된 조롱이 확인되고 윤이를 보호하는 조치가 이어진다.', impact: [{ who: '윤', text: '보호와 지원을 받는다', tone: 1 }], ending: '남겨 둔 원본이 사실 확인과 보호로 이어졌다.' },
              { id: 'edit', text: '보기 좋게 일부만 잘라 다시 저장해 넘긴다', result: '앞뒤가 잘려 무슨 흐름이었는지 다시 확인해야 한다.', impact: [{ who: '윤', text: '확인이 늦어진다', tone: 0 }], ending: '잘라 낸 기록은 판단을 늦춘다. 원본 그대로가 가장 힘이 세다.' }] } },
          { id: 'reveal', text: '기록을 단체 대화방에 다시 올려 망신을 준다', result: '대화방이 둘로 갈려 싸움이 커진다.', impact: [{ who: '윤', text: '또다시 화제가 된다', tone: -1 }], ending: '기록은 알리는 곳에 쓰고, 망신 주는 데 쓰지 않는다.' }] } },
      { id: 'erase', text: '보기 싫어서 대화방을 나가고 받은 메시지도 지운다', result: '내 화면에서는 사라졌지만 윤이를 향한 조롱은 이어진다.', impact: [{ who: '윤', text: '확인할 기록이 줄어든다', tone: -1 }],
        next: { text: '며칠 뒤 윤이가 용기를 내 선생님께 알렸다. 선생님이 목격한 것을 묻는다.', choices: [
          { id: 'memory', text: '기억나는 대로라도 날짜·내용을 적어 말씀드린다', result: '기억으로 적은 메모가 확인의 실마리가 된다.', impact: [{ who: '윤', text: '말한 것이 혼자가 아니게 된다', tone: 1 }], ending: '기록을 놓쳤어도 지금 알리는 것은 늦지 않다.' },
          { id: 'nothing', text: '증거가 없으니 아무 말도 하지 않는다', result: '윤이의 말만 남아 사실 확인이 오래 걸린다.', impact: [{ who: '윤', text: '혼자 견디는 시간이 길어진다', tone: -1 }], ending: '증거가 완벽하지 않아도 알릴 수 있다.' }] } }] };
    const CASE_R = [{ id: 'repeat', text: '날짜가 이어진 기록은 되풀이된 일이라는 근거가 된다' }, { id: 'original', text: '원본 그대로가 사실 확인을 빠르게 한다' }, { id: 'late', text: '증거가 없어도 알리는 것은 늦지 않다' }, { id: 'perfect', text: '증거가 완벽해야만 알릴 수 있다', why: '증거가 부족해도 알릴 수 있어요. 확인은 학교가 함께 해요.' }];
    // 거북이 코딩판: 별 = 보존 단계, 바위 = 증거를 망치는 행동, 깃발 = 믿을 어른·학교에 알리기
    const PB_BASE = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 3], [2, 3], [3, 3], [4, 3]], rocks: [[1, 2], [3, 1]] };
    const PB_EASY = { cols: 3, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 2, y: 0 }, stars: [[1, 1], [2, 1]], rocks: [] };
    // 플랫폼 처리 기간(가상)
    const DAYS = [['가 플랫폼', 2], ['나 플랫폼', 5], ['다 플랫폼', 3]];
    const DAYBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '가상 플랫폼 신고 처리 기간(가상 자료)', unit: '일', xLabel: '플랫폼', yLabel: '처리 기간', data: DAYS }, more);

    MODS.push(
      M({
        id: 'intro.evidence-quality', type: 'intro', title: '믿을 수 있는 캡처, 믿기 어려운 캡처',
        method: '증거 두 장의 신뢰도 비교', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 캡처 카드 둘(날짜가 보이는 것·잘린 것)만 바구니에 넣어 보이며 차이를 짚는다.', base: '캡처 카드 넷을 신뢰도 높음·낮음 바구니에 넣는 시연을 보고 판단 근거를 말한다.', challenge: '신뢰도를 높이는 조건(날짜·시간·계정·앞뒤 맥락·원본)을 점검표 다섯 줄로 만들어 말한다.' },
        intro: {
          teacher: '"친구가 도움을 청하며 캡처 두 장을 보여 줬어요. 둘 다 같은 모욕 글인데, 학교가 사실을 확인할 때 더 힘이 되는 쪽은 어느 것일까요?" 시연 단추로 캡처 카드가 신뢰도 높음·낮음 바구니에 들어가는 모습을 보여 준다. "캡처 한 장이면 충분하다"는 말이 나오면 "시간도, 보낸 계정도 잘려 있다면 언제 누가 보낸 글인지 어떻게 확인할까요?"라고 되묻는다. 오늘은 내가 겪은 일을 말하는 시간이 아니라, 도움을 청한 친구를 제대로 돕는 방법을 익히는 시간이라고 밝힌다.',
          student: '가상 캡처 카드를 보고 사실을 확인할 근거로 믿을 만한 것과 믿기 어려운 것을 나누어 보세요. 날짜·시간·계정·앞뒤 대화가 보이는지가 판단 근거예요.',
          demo: { tool: 'sortboard', options: { slots: ['신뢰도 높음', '신뢰도 낮음'], cards: [CAP_HI[0], CAP_LO[0], CAP_HI[2], CAP_LO[1]] }, sequence: [{ sort: { '신뢰도 높음': [CAP_HI[0], CAP_HI[2]], '신뢰도 낮음': [CAP_LO[0], CAP_LO[1]] } }] },
          art: { draw: 'two paper smartphone screenshots side by side on a desk, one showing a full chat with a clock and an account name strip, the other with its top edge torn off, a paper magnifying glass hovering over the clock strip', banner: '어느 캡처가 더 믿을 만할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '캡처는 모두 가상이다. 학생에게 자기 휴대폰의 실제 대화를 보이게 하지 않는다.',
      }),
      M({
        id: 'intro.deleted-dilemma', type: 'intro', title: '글이 지워지기 직전에',
        method: '상대가 글을 지우기 직전', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길 두 갈래(먼저 남기기·먼저 경고하기)만 함께 걸어 결과를 비교한다.', base: '시연에서 갈림길 둘을 따라가 \'기록이 남았는가\'를 확인하고 근거 카드를 고른다.', challenge: '\'먼저 남기기\'와 \'먼저 경고하기\'의 순서를 바꾸어 다시 걸어 보고 두 결과를 견주어 말한다.' },
        intro: {
          teacher: '"친구가 \'곧 지워질 것 같아\'라며 모욕 글을 보여 줘요. 여러분이라면 무엇부터 할까요?" 시연 단추로 \'먼저 남기기\' 길을 따라가 기록이 남는 결과를 보여 준 뒤 \'먼저 경고하기\' 길도 보여 준다. "신고한다고 말하면 겁먹고 그만두지 않을까요?"라는 말이 나오면 "그만두는 대신 지우기만 한다면, 학교는 무엇으로 확인할까요?"라고 되묻는다. 기록을 남긴 다음에도 단톡방에 퍼뜨리지 않고 믿을 어른에게 보인다는 점까지 짚는다.',
          student: '지워지기 직전의 모욕 글 앞에서 무엇을 먼저 할지 고르고, 그 선택 뒤에 기록이 남는지 결과를 보세요.',
          demo: { tool: 'dilemma', options: { scene: DELETE, reasons: DELETE_R, title: '지워지기 직전' }, sequence: [{ path: ['save', 'tell'], reasons: ['first', 'adult'] }] },
          art: { draw: 'a paper phone screen showing a post fading at its edges like evaporating ink, a paper hand holding a tiny paper camera frame over it, a paper clock with its minute hand close to twelve', banner: '지워지기 전에, 퍼뜨리지 않고', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이다. 모욕 글의 내용은 보여 주지 않고 상황으로만 말한다.',
      }),

      M({
        id: 'activity.preserve-blocks', type: 'activity', title: '증거 보존 절차를 블록으로',
        method: '증거 보존 절차 설계', tool: 'block-coding', minutes: 17,
        levels: { easy: '단계 셋(별 둘 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯(별 넷 + 깃발) 판에서 별을 모두 들러 깃발에 닿게 하고, 친구 프로그램을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 왼쪽)을 써서 \'막히면 돌아가는 갈래\'로 같은 길을 만들고, 활동지에 갈래 둘의 까닭을 쓴다.' },
        activity: {
          title: '증거 보존 절차 설계', tool: 'block-coding',
          teacher: '"오늘 판의 별 네 개는 차례대로 ① 날짜·시간·계정이 보이게 캡처·화면 녹화 ② 링크·게시 위치 기록 ③ 원본 지우지 않기 ④ 안전한 곳에 백업이고, 깃발은 ⑤ 믿을 어른·학교에 알리기예요. 바위는 원본 지우기·퍼 나르기처럼 증거를 망치는 행동이에요." 프로그램을 실행할 때마다 "지금 거북이는 몇 번 단계를 지났나요?"라고 묻는다. "증거부터 모으려면 성적인 이미지도 저장해야 한다"는 말이 나오면 "성적인 이미지가 섞인 경우에는 내가 저장하지 않고 바로 어른과 신고로 가요. 저장하고 전달하는 것 자체가 또 다른 피해가 될 수 있어요"라고 바로잡는다. 이 판은 절차를 몸에 익히는 비유이고, 실제 단계의 글은 활동지에 쓴다는 점을 밝힌다.',
          task: '별(보존 단계)을 모두 들러 깃발(알리기)에 닿는 프로그램을 만들고, 절차를 활동지 표에 글로 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷(①캡처 ②위치 기록 ③원본 지우지 않기 ④백업)을 모두 들르고 바위(원본 지우기·퍼 나르기)를 피해 깃발(⑤믿을 어른에게 알리기)에 닿게 하세요.', PB_BASE, { stars: true }, {
              easy: { prompt: '별 둘(①캡처 ②위치 기록)을 들러 깃발(믿을 어른에게 알리기)에 닿게 하세요(단계 셋).', board: PB_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 막히면 도는 블록은 \'성적 이미지가 섞이면 저장 길로 가지 않고 바로 알리기로 꺾는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['별이 한 줄로 놓인 쪽부터 따라가고, 줄 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구가 짠 순서예요: 앞으로 2칸 → 왼쪽으로 돌기 → 앞으로 1칸. 이대로라면 ③원본 지우지 않기 단계에 가기 전에 꺾어요. 거북이가 멈출 칸을 고르세요.', { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 3], [2, 3], [3, 3], [4, 3]], rocks: [[3, 1]] }, ['fwd', 'fwd', 'left', 'fwd'], { x: 2, y: 2 }, { d: 0.3, more: { conclude: '단계를 건너뛰면 깃발 쪽으로 가는 것처럼 보여도 원본·백업이 빠져요. 차례가 증거의 힘이에요.' } }),
            BCQ('친구 프로그램이 ④백업 칸에서 엉뚱한 쪽으로 돌아 판 밖으로 나가요. 블록 하나만 고쳐 별 넷을 들르고 깃발에 닿게 하세요.', PB_BASE, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:4', 'fwd', 'end', 'right', 'rep:3', 'fwd', 'end'] }, conclude: '백업 다음에는 믿을 어른에게 알리는 쪽으로 — 절차의 한 칸만 틀려도 끝이 달라져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 실제 증거 보존 절차로 옮겨 쓰세요.', columns: ['단계', '할 일', '주의할 점'], cells: [['①', '날짜·시간·계정이 보이게 캡처·녹화', ''], ['②', '', ''], ['③', '', ''], ['④', '', ''], ['⑤', '믿을 어른·학교에 알리기', ''], ['갈래', '성적 이미지가 섞이면', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에는 글을 붙일 수 없어 보존 단계를 별 칸으로, 마지막 알리기를 깃발로 나타냈다. 단계 글은 문항 글과 활동지 표가 맡는다. 성적인 이미지는 학생이 직접 저장·전달하지 않고 바로 어른과 신고로 잇는다.',
      }),
      M({
        id: 'activity.platform-compare', type: 'activity', title: '가상 플랫폼 신고 기능 비교',
        method: '플랫폼 신고 기능 비교표', tool: 'chart', minutes: 18,
        levels: { easy: '플랫폼 둘(가·나)의 처리 기간 막대를 값이 보이는 채로 읽는다.', base: '플랫폼 셋의 처리 기간을 읽고, 표 빈칸을 채우고, 막대를 직접 그리며, 상황에 맞는 기능을 고른다.', challenge: '값을 숨긴 막대를 읽고, 활동지에 기능의 한계와 학교 절차를 함께 써야 하는 까닭을 쓴다.' },
        activity: {
          title: '신고 기능과 처리 기간', tool: 'chart',
          teacher: '"가상 플랫폼 세 곳 모두 신고·차단·숨김·제한 기능이 있어요. 그런데 각 기능이 하는 일과 신고가 처리되는 데 걸리는 날은 달라요." 칠판에 기능표(신고 = 운영자에게 알림, 차단 = 내게 연락 못 함, 숨김 = 내 화면에서만 안 보임, 제한 = 상대 글이 나에게 덜 보임)를 적고 막대를 읽게 한다. "차단하면 증거도 같이 지워도 된다"는 학생에게 "차단은 연락을 막을 뿐, 이미 일어난 일을 확인할 기록은 필요해요. 차단하기 전에 무엇을 해야 할까요?"라고 되묻는다. "신고하면 상대가 바로 안다"는 걱정에는 신고한 사람을 상대에게 알리지 않는 플랫폼이 많지만 정책은 곳마다 다르니 도움말을 확인하자고 말한다. 플랫폼 기능은 학교 절차를 대신하지 않는다는 점을 마지막에 짚는다.',
          task: '가상 플랫폼의 신고 처리 기간 그래프를 읽고, 상황마다 먼저 쓸 기능을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 플랫폼 신고 처리 기간 막대에서 처리가 가장 오래 걸리는 곳을 고르세요.', toolOptions: DAYBAR({ question: '처리 기간이 가장 긴 곳은?', choices: DAYS.map((x) => x[0]) }), target: { pick: 1 }, difficulty: 0.2,
              levels: { easy: { prompt: '가·나 플랫폼 막대에서 처리가 더 오래 걸리는 곳을 고르세요(플랫폼 둘).', toolOptions: { data: DAYS.slice(0, 2), choices: ['가 플랫폼', '나 플랫폼'] }, target: { pick: 1 } } } },
            { prompt: '막대를 읽고 표의 빈칸(다 플랫폼의 처리 기간)을 채우세요.', toolOptions: DAYBAR({ showTable: true, tableBlanks: [2] }), target: { table: true }, difficulty: 0.25 },
            { prompt: '표를 보고 가상 플랫폼 세 곳의 처리 기간 막대를 그리세요(가 플랫폼은 그려져 있어요).', toolOptions: { type: 'bar', mode: 'build', title: '가상 플랫폼 신고 처리 기간(가상 자료)', unit: '일', xLabel: '플랫폼', yLabel: '처리 기간', data: DAYS, given: [0] }, target: { build: true }, difficulty: 0.25 },
            { prompt: '상황: 친구가 모욕 메시지를 계속 받고 있고, 아직 아무 기록도 남기지 않았다. 가장 먼저 할 일을 고르세요.', toolOptions: DAYBAR({ question: '가장 먼저 할 일은?', choices: ['바로 차단하고 대화를 지운다', '날짜·시간·계정이 보이게 기록한 뒤 신고한다', '숨김만 눌러 내 화면에서 안 보이게 한다'], why: ['차단 전에 기록을 남겨야 확인할 근거가 생겨요.', '', '숨김은 내 화면에서만 가려 줄 뿐 피해는 그대로예요.'] }), target: { pick: 1 }, difficulty: 0.3,
              conclude: '기록 → 신고 → 차단·숨김. 그리고 처리 기간이 며칠이든 믿을 어른·학교에 함께 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '플랫폼 신고 기능만으로는 부족한 까닭 하나와, 그래서 함께 해야 할 일(학교·믿을 어른에게 알리기 등)을 쓰세요.' }] },
        notes: '플랫폼 이름과 처리 기간은 모두 가상이다. 실제 서비스의 신고·차단 기능과 신고자 정보 처리 방식은 서비스마다 다르므로 실제 이름을 띄우지 않는다.',
      }),
      M({
        id: 'activity.case-tracking', type: 'activity', title: '남긴 기록, 지운 기록의 결과',
        method: '가상 사례의 증거가 사안 처리에 미친 결과', tool: 'dilemma', minutes: 17,
        levels: { easy: '사안 하나(기록을 남긴 길)의 갈림길 하나를 고르고 근거를 고른다.', base: '두 사안(남긴 길·지운 길)의 갈림길 둘을 따라가 결과를 보고 근거를 고른다.', challenge: '사안 조사 단계까지 갈림길 셋을 따라가고, 두 길을 끝까지 견준 뒤 활동지에 원인·결과 표로 정리한다.' },
        activity: {
          title: '기록과 사안 처리의 갈림길', tool: 'dilemma',
          teacher: '"가상 사안이에요. 같은 장면을 본 목격자가 기록을 남겼을 때와 지웠을 때, 학교가 사실을 확인하는 단계에서 무엇이 달라질까요?" 선택마다 결과 글을 소리 내어 읽게 한다. "말이 엇갈리면 증거 없는 쪽이 진다"는 학생에게 "증거가 없을 때도 학교는 여러 사람의 말과 정황을 함께 봐요. 그래도 기록이 있으면 무엇이 빨라질까요?"라고 묻는다. 기록을 놓쳤어도 지금 알리는 것은 늦지 않고, 알린 사람은 잘한 것이라는 점을 짚는다.',
          task: '가상 사안을 갈림길마다 따라가며 기록이 사안 확인에 어떤 영향을 주는지 보고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('기록을 남긴 길을 따라 사안 확인까지 가 보고, 내 선택의 근거를 고르세요.', CASE, [['keep', 'report', 'orig']], CASE_R, ['repeat', 'original'], { d: 0.4 }),
            DILQ('기록을 지운 길에서 시작해요. 지금 할 수 있는 선택을 고르고 근거를 고르세요.', { text: CASE.choices[1].next.text, who: '나', motif: 'house', choices: CASE.choices[1].next.choices }, [['memory']], CASE_R, ['late'], { d: 0.35 }),
            EXPLOREQ('같은 사안의 두 길(남긴 길·지운 길)을 끝까지 가 보고 결과를 견주세요.', CASE, CASE_R, ['두 길의 끝 장면을 모두 확인했다', '윤이에게 생긴 영향을 견주었다'], { d: 0.35, more: { conclude: '기록은 되풀이를 보여 주고, 원본은 확인을 빠르게 해요. 기록을 놓쳤어도 지금 알리는 것이 윤이를 혼자 두지 않는 길이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 길의 차이를 원인과 결과로 정리하세요.', columns: ['길', '목격자의 선택(원인)', '사안 확인에서의 결과'], cells: [['남긴 길', '', ''], ['지운 길', '', '']] }] },
        notes: '사안은 가상이다. 실제 사안 처리 단계의 세부(기한·서류)는 다루지 않는다.',
      }),
      M({
        id: 'activity.guide-writing', type: 'activity', title: '친구에게 건넬 증거 보존 안내문',
        method: '친구에게 건넬 증거 보존 안내문', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 문장 안내문을 문장 틀을 보고 쓴다.', base: '다섯 문장 안내문을 순서·주의점·마음 배려·도움 연결 기준표로 점검한다.', challenge: '\'하지 말아야 할 것\' 한 가지를 근거와 함께 더한 안내문으로 기준 하나를 더 점검한다.' },
        activity: {
          title: '증거 보존 안내문', tool: 'rubric-writing',
          teacher: '"가상 친구 서가 \'단톡방에서 나를 놀리는 글이 계속 올라와. 어떻게 해야 해?\'라고 물었어요. 오늘 배운 절차를 서에게 보낼 안내문으로 써 봐요." 기준표를 먼저 함께 읽는다. 절차만 나열한 글에는 "서는 지금 어떤 마음일까요? 첫 문장에 무엇이 있으면 좋을까요?"라고 묻는다. "네가 대처를 잘 못해서 그래" 같은 문장이 보이면 "잘못은 놀린 쪽에 있어요. 말해 준 서는 잘한 거예요"라고 바로잡는다. 실제 친구 이름은 쓰지 않게 한다.',
          task: '도움을 청한 가상 친구 서에게 보낼 증거 보존 안내문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('서에게 보낼 안내문을 세 문장으로 쓰세요. 첫 문장은 서의 마음을 알아주는 말로 시작해요.', '가상 친구 서에게: 놀리는 글을 어떻게 남기고 누구에게 알릴지 세 문장으로 안내하세요.', ['서의 마음을 알아주는 말이 있다', '날짜·시간·계정이 보이게 남기라고 썼다', '믿을 어른에게 알리자고 썼다'], { min: 50, max: 300, sent: [3, 3], must: [['캡처', '기록', '녹화']], starter: '많이 힘들었겠다. 먼저 ~. 그리고 ~.', d: 0.3 }),
            RWQ('같은 안내문을 다섯 문장으로 늘려 쓰세요(순서·주의점·마음 배려·도움 연결).', '가상 친구 서에게 보낼 증거 보존 안내문을 다섯 문장으로 쓰세요.', ['보존 순서가 차례대로 있다', '원본을 지우지 말라는 주의가 있다', '서를 탓하는 말이 없다', '담임 선생님·상담 선생님 같은 도움 연결이 있다'], { min: 90, max: 450, sent: [5, 5], must: [['원본', '지우지']], starter: '말해 줘서 고마워. 첫째, ~ 둘째, ~ 셋째, ~ 그리고 ~ 혼자가 아니야.', plus: '\'하지 말아야 할 것\' 하나를 근거와 함께 썼다', d: 0.4,
              sample: '말해 줘서 고마워, 네 잘못이 아니야. 먼저 글이 지워지기 전에 날짜와 시간, 계정이 보이게 캡처하고 대화 앞뒤도 남겨 줘. 원본은 지우지 말고 안전한 곳에 한 번 더 저장해 두자. 그 캡처를 단톡방에 다시 올리면 더 퍼지니까 올리지 말자. 내일 같이 담임 선생님께 가서 보여 드리자.', more: { conclude: '좋은 안내문은 절차를 알려 주면서, 말해 준 친구가 혼자가 아니라고 느끼게 해요.' } }),
            DONEQ('짝과 안내문을 바꿔 읽고, 서의 입장에서 가장 힘이 된 문장 하나를 골라 서로 말해 주세요.', '짝과 바꿔 읽기', '짝과 바꿔 읽고 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '안내문에 넣을 \'하지 말아야 할 것\' 하나와 그 까닭을 쓰세요.' }] },
        notes: '서는 가상 인물이다. 학생에게 자기 경험을 쓰게 하지 않는다.',
      }),

      M({
        id: 'wrap.checklist-timer', type: 'wrap', title: '1분 증거 점검',
        method: '1분 증거 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 점검 세 칸(날짜·시간·계정)을 함께 짚고 나머지 두 칸을 학생이 표시한다.', base: '1분 타이머를 맞추고, 가상 캡처에 대고 점검 다섯 칸을 스스로 표시한다.', challenge: '빠진 칸(앞뒤 맥락·원본 보존)을 채우는 방법을 짝에게 말한다.' },
        wrap: {
          teacher: '"마지막 1분! 화면에 띄운 가상 캡처 한 장을 보며 다섯 칸을 하나씩 짚어 봐요." 타이머를 1분(60초)으로 맞추게 한 뒤 점검 칸을 표시하게 한다. "날짜만 보이면 됐다"는 학생에게 "계정이 잘리면 누가 보낸 글인지 알 수 있을까요?"라고 되묻는다. 출구 고르기에서 \'차단하면 증거를 지워도 된다\'를 고른 학생에게 차단과 기록은 따로라는 점을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '1분 증거 점검', plan: { work: 30, rest: 0, rounds: 1 }, safety: ['날짜가 보인다', '시간이 보인다', '보낸 계정이 보인다', '대화 앞뒤가 이어져 있다', '원본을 지우지 않았다'] }, prompt: '타이머를 1분(60초) 한 번으로 맞추고, 가상 캡처에 대고 점검 다섯 칸을 모두 확인하세요.', target: { plan: { work: 60, rounds: 1 }, safety: true }, difficulty: 0.2 },
            { type: 'choice', prompt: '차단과 증거에 대한 말로 알맞은 것은?', options: ['차단하면 증거도 함께 지워도 된다', '차단하기 전에 기록을 남기고, 원본은 지우지 않는다', '신고하면 상대가 바로 알게 되니 하지 않는다'], answer: 1, difficulty: 0.2, explain: '차단은 연락을 막을 뿐이에요. 이미 일어난 일을 확인할 기록은 남겨 두어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '1분 증거 점검',
          items: [
            { type: 'check', prompt: '믿을 만한 기록에 있어야 할 것에 표시하세요.', options: ['날짜', '시간', '보낸 계정', '대화 앞뒤', '원본 보존'] },
            { type: 'short', prompt: '빠지기 쉬운 칸 하나를 골라 그것을 채우는 방법을 쓰세요.' },
          ],
        },
        notes: '타이머는 1분 점검의 박자를 맞추는 데 쓴다. 학생의 실제 휴대폰 화면을 점검하지 않는다.',
      }),
      M({
        id: 'wrap.reflection', type: 'wrap', title: '증거는 누구를 지키는가',
        method: '증거 보존의 의미 성찰 글', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(피해 학생·목격자)에 카드 한 장씩을 함께 놓는다.', base: '가지 넷(피해 학생·목격자·학교·공정한 판단)에 카드를 나눈다.', challenge: '\'지나친 수집\' 카드가 어느 가지에도 맞지 않는 까닭을 말하고, 사생활 침해의 경계를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 남긴 기록은 결국 누구를 지킬까요? 가운데 \'증거는 누구를 지키는가\'를 두고 가지를 채워 봐요." 카드를 나눈 뒤 \'남의 대화를 몰래 다 모아 두기\' 카드가 왜 남는지 묻는다. "증거는 많을수록 좋다"는 말에 "피해와 상관없는 남의 사생활까지 모으면 그건 또 누구를 다치게 할까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '증거는 누구를 지키는가', slots: ['피해 학생', '목격자', '학교', '공정한 판단'], cards: ['되풀이된 괴롭힘을 보여 준다', '본 것을 말할 때 힘이 된다', '사실을 빠르게 확인한다', '말이 엇갈려도 사실로 가린다', '남의 대화를 몰래 다 모아 두기'] }, prompt: '증거가 지키는 대상 가지에 카드를 나누세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { '피해 학생': ['되풀이된 괴롭힘을 보여 준다'], 목격자: ['본 것을 말할 때 힘이 된다'], 학교: ['사실을 빠르게 확인한다'], '공정한 판단': ['말이 엇갈려도 사실로 가린다'] } }, difficulty: 0.25 },
            { type: 'short', prompt: '"증거는 ___를 지킨다." 빈칸에 오늘 정리한 생각을 넣어 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '증거는 누구를 지키는가',
          items: [
            { type: 'short', prompt: '증거 보존이 피해 학생을 지키는 까닭을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '증거를 모을 때 넘지 말아야 할 선(사생활)을 한 문장으로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 2. 퍼 나른 사람의 책임 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-reposter', [10]);
    // 가상 게시물이 공유될 때마다 늘어난 누적 도달(계정 수, 가상)
    const REACH = [['최초 게시', 15], ['공유 1', 28], ['공유 2', 40], ['반 단톡방 공유', 160], ['공유 4', 210], ['공유 5', 240]];
    const LINE = (more = {}) => Object.assign({ type: 'line', mode: 'read', title: '가상 게시물의 누적 도달(가상 자료)', unit: '명', xLabel: '공유 차례', yLabel: '본 사람 수', data: REACH }, more);
    // 책임의 모습(행동 → 영향 갈래)
    const MAKE = ['조롱 사진을 처음 올림'];
    const GROW = ['비웃는 댓글을 닮', '다른 방으로 공유함'];
    const LEAVE = ['좋아요를 누름', '보고도 아무 말 안 함'];
    // 이미 퍼진 게시물을 받았을 때
    const RECV = { text: '반 학생 대부분이 이미 본 모욕 게시물이 동아리 단톡방에도 올라왔다. 게시물 속 학생은 같은 학년 민이다. 친구가 "너도 봤지? 다른 방에도 올려"라고 한다.', who: '나', motif: 'cloud', choices: [
      { id: 'share', text: '다들 봤으니 다른 방에도 올린다', result: '처음 보는 학생들까지 게시물을 본다.', impact: [{ who: '민', text: '모르는 사람들까지 알게 된다', tone: -1 }], ending: '이미 퍼진 것을 하나 더 보내도 본 사람은 늘어난다.' },
      { id: 'keep', text: '올리지는 않고 혹시 몰라 내 휴대폰에 저장만 해 둔다', result: '내 사진첩에 게시물이 남는다.', impact: [{ who: '민', text: '게시물이 퍼질 곳이 하나 더 생긴다', tone: -1 }],
        next: { text: '다음 날, 다른 친구가 "그 사진 있으면 보내 줘"라고 한다.', choices: [
          { id: 'send', text: '달라고 하니 보내 준다', result: '게시물이 또 다른 방으로 옮겨 간다.', impact: [{ who: '민', text: '퍼짐이 멈추지 않는다', tone: -1 }], ending: '저장해 둔 것은 언젠가 다시 퍼질 씨앗이 된다.' },
          { id: 'delete', text: '보내지 않고 저장한 것을 지운다', result: '내 쪽 고리는 끊겼지만 단톡방 글은 그대로다.', impact: [{ who: '민', text: '한 고리가 끊긴다', tone: 0 }], ending: '내 고리를 끊는 것과 피해를 멈추는 것은 다르다.' }] } },
      { id: 'stop', text: '공유하지 않고 단톡방에 "이거 그만 돌리자"고 쓴다', result: '몇 명이 공유를 멈추지만 한 명이 "왜 너만 착한 척이야"라고 한다.', impact: [{ who: '민', text: '퍼짐이 느려진다', tone: 1 }],
        next: { text: '단톡방 글은 아직 남아 있다. 하루가 지났다.', choices: [
          { id: 'tell', text: '날짜·시간이 보이게 기록하고 담임 선생님께 알린다', result: '선생님이 게시물을 내리게 하고 민이를 살핀다.', impact: [{ who: '민', text: '보호받고 게시물이 내려간다', tone: 1 }],
            next: { text: '일주일 뒤, 민이가 다시 동아리에 나왔다. 몇몇이 아직 수군댄다.', choices: [
              { id: 'beside', text: '평소처럼 민이에게 말을 걸고 같이 활동한다', result: '민이가 동아리에 다시 섞이기 시작한다.', impact: [{ who: '민', text: '일상을 되찾는 데 힘을 얻는다', tone: 1 }], ending: '확산을 멈춘 뒤 곁에 서는 것까지가 회복을 돕는 길이다.' },
              { id: 'avoid', text: '괜히 엮일까 봐 민이를 피한다', result: '민이는 게시물이 내려간 뒤에도 혼자 남는다.', impact: [{ who: '민', text: '외로움이 남는다', tone: -1 }], ending: '게시물이 사라져도 피하는 눈길은 또 다른 상처가 된다.' }] } },
          { id: 'enough', text: '나는 할 만큼 했으니 그만둔다', result: '글이 남아 다른 학년에도 퍼진다.', impact: [{ who: '민', text: '여전히 퍼진 글 속에 있다', tone: 0 }], ending: '공유를 멈춘 다음, 알리는 데까지 가야 피해가 멈춘다.' }] } }] };
    const RECV_R = [{ id: 'more', text: '이미 퍼졌어도 한 번 더 보내면 본 사람이 늘어난다' }, { id: 'stopall', text: '공유를 멈추고 알려야 피해가 멈춘다' }, { id: 'beside', text: '내려간 뒤 곁에 서는 것이 회복을 돕는다' }, { id: 'nobig', text: '내가 만든 게 아니니 책임이 없다', why: '처음 만든 사람이 아니어도 퍼 나르면 피해를 키운 책임이 생겨요.' }];
    const RECV_PATH = ['stop', 'tell', 'beside'];

    MODS.push(
      M({
        id: 'intro.spread-network', type: 'intro', title: '공유 한 번이 바꾼 도달 수',
        method: '공유 경로 네트워크 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 최초 게시에서 공유 2까지 한 경로만 짚으며 값을 읽는다.', base: '공유 차례 전체의 꺾은선을 읽고 도달이 가장 크게 뛴 공유를 고른다.', challenge: '그 공유가 없었다면 마지막 도달이 몇 명 안팎이었을지 앞뒤 기울기로 어림해 말한다.' },
        intro: {
          teacher: '"가상 게시물 하나가 처음 15명에게 보였다가 공유를 거치며 240명까지 갔어요. 어느 공유에서 가장 크게 뛰었을까요?" 시연 단추로 \'반 단톡방 공유\'가 골라지는 모습을 보여 준다. "나 하나 공유한 건 별거 아니다"라는 말이 나오면 "그 한 번이 단톡방이라면, 그 방에 몇 명이 있을까요?"라고 되묻는다. 오늘은 처음 올린 사람과 퍼 나른 사람의 책임을 함께 따져 본다고 밝힌다.',
          student: '가상 게시물의 누적 도달 꺾은선에서 본 사람이 가장 크게 늘어난 공유를 찾고, 그 까닭을 생각해 보세요.',
          demo: { tool: 'chart', options: LINE({ question: '도달이 가장 크게 뛴 공유는?', choices: REACH.map((x) => x[0]), showValues: true }), sequence: [{ pick: 3 }] },
          art: { draw: 'a paper network of small paper phones connected by strings, one string thickening into a wide paper ribbon where a group chat bubble sits, a paper line graph rising steeply behind it', banner: '공유 한 번이 길을 넓혀요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자료는 수업용 가상 값이다. 실제 사건·계정을 다루지 않는다.',
      }),
      M({
        id: 'intro.responsibility-poll', type: 'intro', title: '내 행동이 피해에 한 일',
        method: '책임 크기 첫 판단', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 카드 셋(최초 게시·공유·침묵)만 바구니에 넣어 보인다.', base: '카드 다섯(최초 게시·댓글·공유·좋아요·침묵)을 피해를 만든·키운·그대로 둔 바구니에 넣는 시연을 보고, 첫 판단을 활동지에 적는다.', challenge: '카드마다 그 바구니에 놓은 까닭을 한 줄씩 쓰고, 수업 끝에 다시 놓을 수 있게 남긴다.' },
        intro: {
          teacher: '"조롱 사진 하나를 두고 다섯 가지 행동이 있었어요. 처음 올린 행동, 댓글, 공유, 좋아요, 그리고 보고도 아무 말 안 한 것. 각 행동이 피해에 무엇을 했을까요?" 시연 단추로 카드가 \'피해를 만든·키운·그대로 둔\' 바구니에 들어가는 모습을 보여 준다. "좋아요는 아무 의미 없다"는 말이 나오면 "좋아요가 많을수록 그 글은 어디에 더 보일까요?"라고 되묻는다. 지금 판단을 활동지에 적어 두고, 토론 뒤 다시 놓아 볼 것이라고 말한다. 침묵을 비난하려는 것이 아니라 침묵도 결과가 있다는 것을 보는 것이라고 짚는다.',
          student: '조롱 사진을 둘러싼 다섯 행동이 피해를 만들었는지, 키웠는지, 그대로 두었는지 나누어 보고 지금 내 판단을 적어 두세요.',
          demo: { tool: 'sortboard', options: { slots: ['피해를 만든 행동', '피해를 키운 행동', '피해를 그대로 둔 행동'], cards: [...MAKE, ...GROW, ...LEAVE] }, sequence: [{ sort: { '피해를 만든 행동': MAKE, '피해를 키운 행동': GROW, '피해를 그대로 둔 행동': LEAVE } }] },
          art: { draw: 'three paper baskets on a shelf labeled with small paper icons of a pen, a megaphone and a closed mouth, five paper cards floating above them about to be dropped in', banner: '내 행동은 피해에 무엇을 했을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '이 판단은 정답 맞히기가 아니라 토론 전 첫 생각이다. 같은 반 실제 사례를 꺼내지 않는다.',
      }),

      M({
        id: 'activity.debate-board', type: 'activity', title: '공유자도 같은 책임인가',
        method: '찬반 토론: 공유한 사람도 같은 책임인가', tool: 'mindmap', minutes: 17,
        levels: { easy: '근거 카드를 찬성·반대 가지에 둘씩 바로 피드백을 받으며 나눈다.', base: '근거 카드를 찬성·반대·근거 약함 가지에 셋씩 나누고, 근거마다 반박을 짝짓는다.', challenge: '헷갈리는 카드가 더해진 판을 나누고, 양쪽이 함께 동의하는 지점을 고른 뒤 모둠 토론에서 정리한다.' },
        activity: {
          title: '공유자 책임 찬반 지도', tool: 'mindmap',
          teacher: '"\'공유한 사람도 처음 올린 사람과 같은 책임을 져야 한다.\' 오늘은 편을 정하기 전에 양쪽의 가장 강한 근거부터 찾아요." 카드를 놓을 때마다 "이 근거는 사실인가요, 느낌인가요?"라고 묻는다. "내가 만든 게 아니면 책임이 없다"는 학생에게 "공유 한 번이 도달을 몇 배로 늘렸는지 아까 그래프에서 봤지요?"라고 되묻는다. 반대로 "똑같이 벌 받아야 한다"는 학생에게는 "처음 만든 사람과 모르고 한 번 넘긴 사람의 행동이 같을까요?"라고 묻는다. \'같은 책임인가\'와 \'책임이 있는가\'는 다른 질문이라는 점을 짚는다.',
          task: '근거 카드를 찬반 가지에 나누고, 반박을 짝지은 뒤 함께 동의하는 지점을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성(같은 책임)·반대(책임이 다르다)·근거 약함 가지에 나누세요.', ['찬성(같은 책임)', '반대(책임이 다르다)', '근거 약함'], [
              ['공유가 없으면 피해가 그만큼 커지지 않는다', '퍼 나른 사람도 내용을 알고 보냈다', '피해 학생은 누가 처음 올렸는지보다 퍼진 것에 더 아프다'],
              ['처음 만든 사람은 피해를 시작한 사람이다', '모르고 받은 것을 한 번 넘긴 사람도 있다', '책임은 한 행동의 크기에 맞게 따져야 한다'],
              ['요즘은 다들 공유한다', '처음 올린 사람이 원래 문제 있는 애다'],
            ], { k: 2, hard: [['공유 수가 늘수록 지우기가 어려워진다'], ['나중에 바로 지우고 사과한 사람도 있다']], d: 0.35, opt: { topic: '공유자도 같은 책임인가' } }),
            MATCHQ('근거마다 상대 쪽에서 나올 반박을 짝지으세요.', [['공유가 없으면 피해가 그만큼 커지지 않는다', '그래도 피해를 시작한 사람이 가장 큰 책임을 진다'], ['처음 만든 사람은 피해를 시작한 사람이다', '시작이 하나여도 퍼뜨린 수백 명이 피해를 키웠다'], ['모르고 받은 것을 한 번 넘긴 사람도 있다', '내용을 보고 넘겼다면 모른다고 하기 어렵다']], { k: 2, extra: ['그냥 기분이 나쁘다'], d: 0.4, opt: { topic: '반박 짝짓기' }, more: { hints: ['상대 쪽 사람이 그 근거를 들었다면 무엇부터 지적할지 떠올려 보세요.'] } }),
            PICKQ('찬성과 반대 쪽이 함께 동의할 수 있는 지점만 고르세요.', ['퍼 나른 사람에게도 책임이 있다', '확산을 멈추는 것은 모두의 일이다'], ['처음 올린 사람만 잘못했다', '공유는 아무 책임이 없다'], { d: 0.4, opt: { basket: '함께 동의할 지점' }, more: { conclude: '\'얼마나 같은가\'는 갈려도 \'퍼 나른 사람에게도 책임이 있다\'와 \'멈추는 것은 모두의 일\'은 양쪽이 함께 설 수 있는 자리예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 입장과 반대쪽의 가장 강한 근거 하나를 적고, 그 근거에 대한 내 답을 한 줄로 쓰세요.' }] },
        notes: '근거는 교구 카드로 주고, 학생이 만든 근거는 활동지와 모둠 토론에서 말로 나눈다. 실제 판단(법적 책임의 크기)은 상황에 따라 달라 이 수업에서 단정하지 않는다.',
      }),
      M({
        id: 'activity.repost-dilemma', type: 'activity', title: '이미 퍼진 게시물을 받았을 때',
        method: '이미 퍼진 게시물을 받았을 때', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘까지 따라가고 근거를 고른다.', base: '갈림길 셋(받은 날·다음 날·일주일 뒤)을 끝까지 따라가 결과를 보고 근거를 고른다.', challenge: '저장만 한 길도 끝까지 가 보고, 활동지에 각 선택이 민이의 회복에 준 영향을 견주어 쓴다.' },
        activity: {
          title: '퍼진 게시물 갈림길', tool: 'dilemma',
          teacher: '"이미 반 대부분이 본 게시물이 내 단톡방에도 왔어요. \'이미 다 봤는데 내가 뭘 해도 똑같다\'는 생각이 들 수 있어요. 정말 그럴까요?" 선택마다 다음 날·일주일 뒤 결과를 소리 내어 읽게 한다. \'저장만 해 둔다\'를 고른 학생에게 "저장한 사진은 내일 누가 달라고 하면 어떻게 될까요?"라고 묻는다. "착한 척이냐"는 말이 나와도 멈추자고 한 사람은 잘한 것이고, 잘못은 조롱 게시물을 만든 쪽에 있다는 점을 짚는다. 게시물이 내려간 뒤 민이 곁에 서는 것도 책임의 일부라는 점까지 말한다.',
          task: '이미 퍼진 게시물을 받은 장면을 갈림길마다 따라가 다음 날·일주일 뒤 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('이미 퍼진 게시물을 받은 장면에서 갈림길을 끝까지 이어 가고, 내 선택의 근거를 고르세요.', RECV, [RECV_PATH], RECV_R, ['stopall', 'beside'], { d: 0.4, opt: { title: '퍼진 게시물을 받았을 때' } }),
            EXPLOREQ('\'저장만 해 둔다\' 길과 \'멈추자고 쓴다\' 길을 끝까지 가 보고 결과를 견주세요.', RECV, RECV_R, ['두 길의 끝 장면을 모두 확인했다', '민이에게 남은 영향을 견주었다'], { d: 0.35 }),
            DILQ('친구가 "이건 그냥 웃긴 편집 영상이야"라며 체육대회 영상을 보내 왔어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '친구가 반 학생 한 명의 넘어지는 장면에 웃음소리를 입힌 편집 영상을 보내며 "웃기지? 너도 돌려"라고 한다.', who: '나', motif: 'star', choices: [
              { id: 'pass', text: '웃긴 영상이니 다른 친구에게 돌린다', result: '영상이 학년 전체로 퍼진다.', impact: [{ who: '영상 속 학생', text: '학교에 오기 싫어진다', tone: -1 }], ending: '\'웃긴 영상\'이라는 이름이 붙어도 놀림은 놀림이다.' },
              { id: 'refuse', text: '돌리지 않고 "이건 놀리는 거라 안 돌릴래"라고 답한다', result: '친구가 머쓱해하며 "그런가"라고 한다.', impact: [{ who: '영상 속 학생', text: '한 고리가 끊긴다', tone: 1 }],
                next: { text: '영상은 다른 방에서 계속 돈다.', choices: [
                  { id: 'tell', text: '담임 선생님께 영상이 돌고 있다고 알린다', result: '선생님이 영상을 내리게 하고 영상 속 학생을 살핀다.', impact: [{ who: '영상 속 학생', text: '보호받는다', tone: 1 }], ending: '거절하고 알리면 퍼짐의 고리가 끊긴다.' },
                  { id: 'mine', text: '나는 안 돌렸으니 된 거다', result: '영상이 계속 퍼진다.', impact: [{ who: '영상 속 학생', text: '여전히 놀림거리다', tone: 0 }], ending: '내가 안 퍼뜨린 것과 피해가 멈춘 것은 다르다.' }] } }] },
            [['refuse', 'tell']], [{ id: 'name', text: '\'웃긴 영상\'이라도 한 사람을 놀리면 폭력이다' }, { id: 'tell', text: '거절하고 알려야 고리가 끊긴다' }, { id: 'fun', text: '다들 웃었으니 괜찮다', why: '여럿이 웃는다고 놀림이 장난이 되지는 않아요. 웃음이 많을수록 상처는 커져요.' }], ['name', 'tell'], { d: 0.35, more: { conclude: '받았을 때 멈추고, 거절하고, 알리기 — 퍼 나르지 않는 사람이 확산의 끝을 만들어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '선택마다 민이의 회복에 준 영향을 견주세요.', columns: ['내 선택', '다음 날', '일주일 뒤 민이'], cells: [['다른 방에 올림', '', ''], ['저장만 함', '', ''], ['멈추자고 쓰고 알림', '', '']] }] },
        notes: '민이와 영상 속 학생은 가상 인물이다. 게시물의 내용은 보여 주지 않고 상황으로만 말한다.',
      }),
      M({
        id: 'activity.case-report', type: 'activity', title: '편집 영상 사례 분석 보고서',
        method: '사례 분석 보고서', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '세 문단 개요(사실·책임·대안)를 문장 틀을 보고 쓴다.', base: '계정별 행동·영향·책임을 다섯 문장 보고서로 쓰고 기준표(사실과 의견 구분·책임 근거·대안)로 점검한다.', challenge: '학교 공동체에 바라는 점을 더해 기준 하나를 더 점검한다.' },
        activity: {
          title: '사례 분석 보고서', tool: 'rubric-writing',
          teacher: '"가상 사례예요. 체육대회 날 한 학생이 넘어지는 영상에 놀리는 자막이 입혀져 퍼졌어요. 계정 가가 편집해 올렸고, 계정 나·다가 다른 방에 공유했고, 계정 라는 \'그만 돌리자\'고 댓글을 달았어요." 칠판에 네 계정의 행동을 적는다. 보고서에 "가는 원래 나쁜 애다" 같은 문장이 보이면 "그건 사실인가요, 의견인가요? 행동을 쓰면 어떻게 될까요?"라고 묻는다. 계정 라처럼 멈추자고 한 행동은 잘한 것으로 분명히 적게 하고, 사람을 깎아내리는 대신 행동과 영향을 쓰는 것이 분석이라는 점을 짚는다.',
          task: '가상 편집 영상 사례에서 계정별 행동·영향·책임을 분석한 보고서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('보고서 개요를 세 문장(사실·책임·대안)으로 쓰세요.', '가상 편집 영상 사례: 무슨 일이 있었는지(사실), 누구에게 어떤 책임이 있는지, 무엇을 바꾸면 좋을지 한 문장씩 쓰세요.', ['사실 문장이 있다', '책임 문장이 있다', '대안 문장이 있다'], { min: 50, max: 300, sent: [3, 3], starter: '사실: ~. 책임: ~. 대안: ~.', d: 0.3 }),
            RWQ('계정 가·나·다·라의 행동과 영향, 책임을 다섯 문장 보고서로 쓰세요.', '네 계정(가 편집·게시, 나·다 공유, 라 멈추자는 댓글)의 행동과 그 영향, 책임을 분석한 보고서를 쓰세요.', ['사실과 의견을 구분해 썼다', '계정마다 행동과 영향을 이었다', '책임의 근거를 썼다', '사람이 아니라 행동을 평가했다'], { min: 100, max: 500, sent: [5, 6], must: [['공유', '퍼']], plus: '학교 공동체에 바라는 점을 덧붙였다', d: 0.4,
              sample: '계정 가는 넘어지는 영상에 놀리는 자막을 입혀 처음 올렸다. 계정 나와 다는 그 영상을 다른 방에 공유해 본 사람을 크게 늘렸다. 그래서 가는 피해를 시작한 책임이, 나와 다는 피해를 키운 책임이 있다. 계정 라는 그만 돌리자는 댓글로 확산을 줄이려 했다. 공유하기 전 멈추는 사람이 늘면 같은 일이 되풀이되지 않는다.', more: { conclude: '좋은 분석은 사람을 판정하지 않고, 행동과 영향을 이어 책임과 대안을 말해요.' } }),
            DONEQ('짝과 보고서를 바꿔 읽고, 의견이 사실처럼 쓰인 문장이 있는지 서로 찾아 말해 주세요.', '짝과 바꿔 읽기', '짝과 바꿔 읽고 찾아보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '계정별로 정리하세요.', columns: ['계정', '행동', '영향', '책임'], cells: [['가', '', '', ''], ['나·다', '', '', ''], ['라', '', '', '']] }] },
        notes: '사례와 계정은 가상이다. 실제 친구 이름이나 실제 사건을 쓰지 않게 한다.',
      }),
      M({
        id: 'activity.counter-campaign', type: 'activity', title: '"멈춘 사람이 끝을 만든다" 카드뉴스',
        method: '확산을 멈추는 캠페인 설계', tool: 'collage', minutes: 18,
        levels: { easy: '카드뉴스 1장(문제)을 모양 몇 가지만 있는 고르개로 꾸민다.', base: '카드뉴스 3장(문제·수치·행동)을 꾸미고 장마다 점검한다.', challenge: '대상(1학년 또는 보호자)을 정해 문구를 바꾸고, 행동 카드에 그 대상이 할 행동이 드러나는지 하나 더 점검한다.' },
        activity: {
          title: '카드뉴스 세 장', tool: 'collage',
          teacher: '"\'멈춘 사람이 끝을 만든다\'는 주제로 카드뉴스 세 장을 만들어요. 1장은 문제, 2장은 숫자, 3장은 행동이에요." 장마다 문구를 활동지에 먼저 쓰고 조각으로 꾸미게 한다. 2장에 숫자를 지어내는 학생에게 "아까 본 가상 자료처럼 \'가상\'이라고 밝히거나, 숫자 대신 \'한 번의 공유가 단톡방 전체로\'처럼 쓸 수 있어요"라고 말한다. 실제 학생 사진·이름·노골적인 장면은 넣지 않는다는 원칙을 먼저 정한다.',
          task: '확산을 멈추자는 카드뉴스 세 장(문제·수치·행동)을 조각으로 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '카드뉴스 1장(문제): 한 사람을 향한 게시물이 퍼지는 모습을 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, target: { selfCheck: ['한 사람(가운데)을 나타내는 조각이 있다', '퍼지는 방향을 조각 배치로 보였다', '실제 사람 얼굴·이름을 넣지 않았다'], minPieces: 4 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'rect'] } } } },
            { prompt: '카드뉴스 2장(수치): 공유 한 번에 도달이 크게 뛰는 모습을 크기가 다른 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle'] }, target: { has: [{ size: 's', min: 1 }, { size: 'l', min: 1 }], selfCheck: ['작은 조각과 큰 조각으로 늘어남을 보였다', '숫자는 가상이라고 밝힐 자리를 남겼다'], minPieces: 3 }, difficulty: 0.3 },
            { prompt: '카드뉴스 3장(행동): 멈추기·거절하기·알리기를 조각 셋 이상으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'diamond'] }, target: { selfCheck: ['멈추기를 나타냈다', '거절하기를 나타냈다', '알리기를 나타냈다'], minPieces: 3 }, difficulty: 0.3,
              levels: { challenge: { prompt: '카드뉴스 3장(행동)을 정한 대상(1학년 또는 보호자)에 맞게 꾸미고 점검하세요(대상 맞춤).', target: { selfCheck: ['멈추기를 나타냈다', '거절하기를 나타냈다', '알리기를 나타냈다', '정한 대상이 할 수 있는 행동으로 바꾸었다'], minPieces: 3 } } },
              conclude: '문제를 보이고, 크기를 보이고, 할 일을 보이면 — 보는 사람이 \'나도 멈출 수 있다\'고 느껴요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '카드뉴스 문구를 쓰세요.', columns: ['장', '제목', '한 줄 문구'], cells: [['1 문제', '', ''], ['2 수치', '', ''], ['3 행동', '', '']] }] },
        notes: '카드뉴스는 수업 안에서만 나눈다. 실제 SNS에 올릴 때는 교사가 문구를 함께 검토한다. 수치는 가상이라고 밝힌다.',
      }),

      M({
        id: 'wrap.repositioning', type: 'wrap', title: '토론 뒤 다시 놓는 판단',
        method: '토론 뒤 책임 축 다시 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 \'처음 판단\' 카드 하나를 먼저 놓아 보이고 나머지를 함께 놓는다.', base: '생각을 다시 놓는 과정 카드 다섯 장을 차례로 놓고, 바뀐 카드 하나와 까닭을 쓴다.', challenge: '바뀐 카드 셋과 함께 생각이 바뀌지 않은 카드의 까닭도 쓴다.' },
        wrap: {
          teacher: '"수업 처음에 적어 둔 판단을 꺼내 봐요. 토론을 거치며 생각이 어떻게 움직였는지, 그 과정을 먼저 차례로 놓아 봐요." 카드를 놓은 뒤 활동지에 처음 판단과 지금 판단을 나란히 쓰게 한다. "생각이 바뀌면 진 것"이라는 말에는 "근거를 듣고 판단을 고치는 것이 토론의 목적이에요. 바뀌지 않았다면 그 까닭도 근거예요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['수업 처음', '지금'], slots: 5, cards: ['판단을 다시 놓는다', '처음 판단을 적어 둔다', '바뀐 까닭을 적는다', '다른 쪽 근거를 듣는다', '내 근거를 다시 따진다'] }, prompt: '생각을 다시 놓는 과정을 차례로 놓으세요.', target: { order: ['처음 판단을 적어 둔다', '다른 쪽 근거를 듣는다', '내 근거를 다시 따진다', '판단을 다시 놓는다', '바뀐 까닭을 적는다'] }, difficulty: 0.2 },
            { type: 'short', prompt: '처음과 지금, 바구니를 옮긴 카드 하나(또는 그대로 둔 카드 하나)와 그 까닭을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '토론 뒤 다시 놓기',
          items: [
            { type: 'table', prompt: '행동 카드마다 처음 판단과 지금 판단을 쓰세요.', columns: ['행동', '처음', '지금', '까닭'], cells: [['최초 게시', '', '', ''], ['공유', '', '', ''], ['좋아요', '', '', ''], ['침묵', '', '', '']] },
            { type: 'short', prompt: '생각이 바뀌지 않은 카드가 있다면 그 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.my-rule', type: 'wrap', title: '나의 공유 원칙 세 문장',
        method: '나의 공유 원칙 성찰 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '두 문장 원칙을 문장 틀을 보고 쓴다(교사가 틀을 칠판에 적어 준다).', base: '공유 전 지킬 원칙을 세 문장으로 쓰고 기준표(구체성·근거·실천 가능성)로 점검한다.', challenge: '원칙을 어기고 싶어지는 순간을 예상해 대응을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 마지막은 나에게 주는 규칙이에요. 무언가를 공유하기 전에 지킬 원칙을 세 문장으로 써 봐요." "조심해서 공유한다"처럼 막연한 글에는 "조심한다는 건 구체적으로 무엇을 확인하는 걸까요?"라고 묻는다. 원칙은 남을 감시하는 규칙이 아니라 내가 확산의 고리가 되지 않게 하는 약속이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '공유하기 전에 지킬 나의 원칙을 세 문장으로 쓰세요.', minChars: 40, maxChars: 300, starter: '나는 공유하기 전에 ~. 왜냐하면 ~. 그래서 ~.' }, prompt: '나의 공유 원칙을 세 문장으로 쓰고 기준표로 점검하세요.', target: { selfCheck: ['무엇을 확인할지 구체적으로 썼다', '그 원칙의 까닭을 썼다', '내가 실제로 지킬 수 있는 원칙이다'], sentences: [2, 4] }, difficulty: 0.2 },
            { type: 'choice', prompt: '퍼 나른 사람의 책임에 대한 말로 알맞은 것은?', options: ['내가 만든 게 아니면 책임이 없다', '이미 퍼진 것을 하나 더 보낸 건 상관없다', '공유는 피해를 키울 수 있어 퍼 나른 사람에게도 책임이 있다'], answer: 2, difficulty: 0.15, explain: '처음 만들지 않았어도 퍼 나르면 더 많은 사람이 보게 되어 피해가 커져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 공유 원칙',
          items: [
            { type: 'short', prompt: '나의 공유 원칙 한 문장을 쓰세요.' },
            { type: 'short', prompt: '원칙을 어기고 싶어지는 순간(예: 모두가 공유할 때)과 그때 할 대응을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 보이지 않는 따돌림, 관계적 폭력 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-relational', [10]);
    // '이것도 학교폭력이다' 동의율(가상)
    const AGREE = [['신체 폭력', 91], ['욕설', 84], ['정보 빼기', 37], ['은근한 무시', 29]];
    const AGBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '"이것도 학교폭력이다" 동의율(가상 학교 설문)', unit: '%', xLabel: '유형', yLabel: '동의율', max: 100, data: AGREE }, more);
    // 친하지 않을 자유와 따돌림의 경계
    const GROUP = { text: '모둠 활동 시간. 지난 석 달 동안 은이는 어느 모둠에도 끼지 못했다. 오늘도 한 모둠이 "자리 다 찼어"라고 하며 은이를 보고 웃는다. 한편 다른 반의 하가 "나는 오늘 수와 같이 하고 싶어"라며 평소 친구와 모둠을 짠다.', who: '나', motif: 'house', choices: [
      { id: 'same', text: '둘 다 친구를 고를 자유일 뿐이다', result: '은이는 이번에도 혼자 남는다.', impact: [{ who: '은', text: '석 달째 같은 일이 되풀이된다', tone: -1 }], ending: '한 사람만 매번 빠지고 웃음이 따른다면 자유가 아니라 배제다.' },
      { id: 'diff', text: '하의 선택과 은이를 매번 빼는 것은 다르다', result: '무엇이 다른지 근거를 찾아보기로 한다.', impact: [{ who: '은', text: '겪는 일이 이름을 얻는다', tone: 1 }],
        next: { text: '친구가 "은이를 빼는 애들도 때리거나 욕한 건 없잖아"라고 한다.', choices: [
          { id: 'pattern', text: '"매번 한 사람만, 일부러, 웃음과 함께 빼면 그것도 폭력이야"라고 답한다', result: '친구가 잠시 생각하더니 "그러고 보니 늘 은이였네"라고 한다.', impact: [{ who: '은', text: '주변이 알아차리기 시작한다', tone: 1 }],
            next: { text: '다음 모둠 시간이 다가온다.', choices: [
              { id: 'invite', text: '은이에게 우리 모둠에 함께하자고 하고, 담임 선생님께 모둠 짜기 방식을 바꿔 달라고 말씀드린다', result: '은이가 모둠에 들어오고, 선생님은 모둠을 짜는 규칙을 다시 정한다.', impact: [{ who: '은', text: '혼자 남는 일이 멈춘다', tone: 1 }], ending: '곁에 서기와 구조 바꾸기를 함께 하면 되풀이가 멈춘다.' },
              { id: 'watch', text: '알았지만 괜히 엮이기 싫어 지켜본다', result: '은이는 또 혼자 남는다.', impact: [{ who: '은', text: '아는 사람이 늘어도 바뀌지 않는다', tone: -1 }], ending: '알아차린 뒤의 작은 행동이 배제를 끊는다.' }] } },
          { id: 'agree', text: '"그래, 때린 건 아니니까"라고 넘어간다', result: '은이를 빼는 일이 계속된다.', impact: [{ who: '은', text: '보이지 않는 따돌림이 굳어진다', tone: -1 }], ending: '때리거나 욕하지 않아도 관계를 끊는 것은 폭력이 될 수 있다.' }] } }] };
    const GROUP_R = [{ id: 'repeat', text: '한 사람만 매번 빼는 되풀이가 경계를 가른다' }, { id: 'intent', text: '일부러 빼고 웃는 것은 선택이 아니라 배제다' }, { id: 'free', text: '누구와 어울릴지는 자유라서 무엇이든 괜찮다', why: '친구를 고를 자유는 있지만 한 사람을 일부러 매번 빼는 것까지 자유는 아니에요.' }];
    // 한 학기 사건(시간 띠)
    const TERM = ['3월: 단톡방 공지에서 빠짐', '4월: 조별 과제에서 혼자 남음', '5월: 생일 모임에만 안 불림', '6월: 옆자리 친구가 자리를 옮김', '7월: 쉬는 시간마다 혼자 있음'];
    // 모둠 구성 절차 판(별 = 단계, 바위 = 배제가 생기는 틈)
    const NB = { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2]], rocks: [[1, 1], [2, 0]] };
    const NB_EASY = { cols: 3, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 2, y: 0 }, stars: [[1, 1], [2, 1]], rocks: [] };

    MODS.push(
      M({
        id: 'intro.freedom-vs-exclusion', type: 'intro', title: '친하지 않을 자유와 따돌림 사이',
        method: '친하지 않을 자유와 따돌림의 경계', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 두 장면(매번 빠지는 은이·평소 친구와 짠 하)만 견주며 첫 갈림길을 함께 고른다.', base: '시연에서 갈림길 셋을 따라가 결과를 보고 근거 카드를 고른다.', challenge: '경계를 가르는 기준(되풀이·일부러·한 사람에게 쏠림)을 세 문장으로 활동지에 쓴다.' },
        intro: {
          teacher: '"두 장면이 있어요. 하는 오늘 친한 친구와 모둠을 짰고, 은이는 석 달째 어느 모둠에도 끼지 못하고 있어요. 둘 다 \'친구를 고를 자유\'일까요?" 시연 단추로 \'다르다\' 길을 따라가 은이에게 생긴 결과를 보여 준다. "안 노는 건 내 자유"라는 말이 나오면 "자유는 맞아요. 그런데 한 사람만 매번, 웃음과 함께 빠진다면 그건 무엇의 문제일까요?"라고 되묻는다. 누구와 친할지 강요하자는 것이 아니라 한 사람을 일부러 빼는 것을 멈추자는 것이라고 짚는다.',
          student: '친구를 고르는 장면과 한 사람을 매번 빼는 장면을 견주어 판단하고, 은이에게 어떤 결과가 생기는지 보세요.',
          demo: { tool: 'dilemma', options: { scene: GROUP, reasons: GROUP_R, title: '자유일까, 배제일까' }, sequence: [{ path: ['diff', 'pattern', 'invite'], reasons: ['repeat', 'intent'] }] },
          art: { draw: 'a paper classroom with small paper desks pushed together into groups, one paper student standing alone by an empty chair, a soft paper spotlight on the gap between the groups', banner: '자유일까, 배제일까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '은과 하는 가상 인물이다. 우리 반 모둠 이야기를 꺼내지 않는다.',
      }),
      M({
        id: 'intro.invisible-data', type: 'intro', title: '덜 보이는 폭력의 동의율',
        method: '관계적 폭력 인지 가상 자료', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 막대 값을 함께 읽고 가장 낮은 유형을 찾는다.', base: '동의율이 낮은 유형을 고르고 높은 유형과의 차이를 두 문장으로 해석한다.', challenge: '인지가 낮은 유형이 왜 더 오래 이어지기 쉬운지 추론해 말한다.' },
        intro: {
          teacher: '"가상 학교 설문이에요. \'이것도 학교폭력이다\'에 동의한 학생 비율을 유형별로 나타냈어요. 신체 폭력 91%, 은근한 무시는 몇 %일까요?" 시연 단추로 가장 낮은 막대가 골라지는 모습을 보여 준다. "동의율이 낮으니 덜 심한 거다"라는 말이 나오면 "폭력이라고 알아차리는 사람이 적으면, 누가 멈추게 할까요?"라고 되묻는다. 덜 보이는 것이 덜 아픈 것은 아니라는 점을 짚는다.',
          student: '가상 설문 막대에서 학교폭력이라고 알아차리는 비율이 가장 낮은 유형을 찾고, 그 차이가 무엇을 뜻하는지 생각해 보세요.',
          demo: { tool: 'chart', options: AGBAR({ question: '동의율이 가장 낮은 유형은?', choices: AGREE.map((x) => x[0]), showValues: true }), sequence: [{ pick: 3 }] },
          art: { draw: 'a paper bar chart with two tall bars and two short faded bars, the short bars half transparent like tracing paper, a paper magnifying glass held over the faded ones', banner: '덜 보이는 것도 폭력이에요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '수치는 체계도 계획의 가상 값이다(실제 조사 아님 — 화면 제목에 밝힘). 학생에게 겪은 일을 묻지 않는다.',
      }),

      M({
        id: 'activity.case-analysis', type: 'activity', title: '한 학기 시간 띠에 쌓인 일',
        method: '사례 속 관계적 폭력 찾기', tool: 'timeline', minutes: 17,
        levels: { easy: '가상 학생의 사건 카드 셋을 시간 띠에 차례로 놓는다.', base: '사건 카드 다섯을 차례로 놓고, 영향이 쌓인 정도를 칸에 나누며, 관계적 폭력이 아닌 카드를 가린다.', challenge: '사건마다 개입할 수 있던 사람(친구·모둠원·담임 선생님)을 짝짓는다.' },
        activity: {
          title: '한 학기 사건 띠', tool: 'timeline',
          teacher: '"가상 학생 온이의 한 학기예요. 하나하나는 \'별일 아닌 것\'처럼 보일 수 있어요. 시간 띠에 놓으면 무엇이 보일까요?" 카드를 놓은 뒤 "3월에 멈췄다면 7월은 어땠을까요?"라고 묻는다. "하나씩 보면 다 사소하다"는 학생에게 "온이에게는 하나씩이 아니라 다섯 개가 한꺼번에 쌓여 있어요"라고 말한다. 각 사건마다 누군가 개입할 수 있었다는 점, 잘못은 빼고 무시한 쪽에 있다는 점을 짚는다.',
          task: '가상 학생의 한 학기 사건을 시간 띠에 놓고, 쌓인 영향과 개입할 수 있던 사람을 찾아요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('온이의 한 학기 사건 카드를 일어난 차례로 시간 띠에 놓으세요.', TERM, { k: 3, d: 0.25, opt: { axis: ['3월', '7월'] } }),
            SORTQ('사건 카드를 온이에게 영향이 쌓인 정도에 따라 나누세요.', ['시작된 신호', '굳어진 배제'], [[TERM[0], TERM[1]], [TERM[3], TERM[4]]], { k: 1, hard: [[], [TERM[2]]], traps: ['6월: 시험 기간이라 모두 바빴음'], d: 0.3, opt: { axis: ['시작', '굳어짐'] } }),
            MATCHQ('사건마다 그때 개입할 수 있던 사람과 행동을 짝지으세요.', [[TERM[0], '공지를 올린 친구: 빠진 사람이 없는지 확인'], [TERM[1], '모둠원: "같이 하자"고 먼저 부르기'], [TERM[3], '담임 선생님: 자리 바꾸기 방식 살피기']], { k: 2, extra: ['온이: 혼자 더 참기'], d: 0.35, opt: { axis: ['사건', '개입'] }, more: { conclude: '관계적 폭력은 한 장면이 아니라 쌓임으로 보여요. 쌓이기 전 어느 칸에서든 누군가 멈출 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사건마다 쌓인 영향을 쓰세요.', columns: ['때', '사건', '온이에게 생긴 영향'], cells: [['3월', '', ''], ['5월', '', ''], ['7월', '', '']] }] },
        notes: '온은 가상 인물이다. \'시험 기간\' 카드는 관계적 폭력이 아닌 함정 카드다.',
      }),
      M({
        id: 'activity.impact-writing', type: 'activity', title: '학업·관계·마음으로 본 영향',
        method: '영향 분석 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '두 측면(관계·마음)을 문장 틀을 보고 쓴다.', base: '세 측면(학업·관계·마음)으로 나누어 근거를 들어 쓰고 기준표(근거·측면 구분·제3자 관점)로 점검한다.', challenge: '회복에 필요한 지원을 덧붙여 기준 하나를 더 점검한다.' },
        activity: {
          title: '영향 분석 글', tool: 'rubric-writing',
          teacher: '"온이의 한 학기가 남긴 영향을 학업·관계·마음 세 측면으로 나누어 분석해 봐요. 분석 글은 온이의 마음을 짐작해 꾸미는 글이 아니라, 사건에서 근거를 찾아 쓰는 글이에요." 기준표를 먼저 읽는다. "온이가 성격이 소심해서 그렇다" 같은 문장이 나오면 "그건 원인을 온이에게 돌리는 말이에요. 잘못은 뺀 쪽에 있어요. 사건에서 근거를 찾아볼까요?"라고 바로잡는다. 제3자(같은 반 학생·담임 선생님)가 볼 수 있는 신호도 함께 쓰게 한다.',
          task: '가상 학생 온이에게 쌓인 영향을 학업·관계·마음 측면으로 분석한 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('관계와 마음 측면의 영향을 두 문장으로 쓰세요.', '가상 학생 온이: 한 학기 사건이 관계와 마음에 준 영향을 사건 근거와 함께 쓰세요.', ['관계 측면을 썼다', '마음 측면을 썼다', '사건 하나 이상을 근거로 들었다'], { min: 40, max: 250, sent: [2, 3], starter: '관계 측면에서 ~. 마음 측면에서 ~.', d: 0.3 }),
            RWQ('학업·관계·마음 세 측면으로 나누어 영향을 분석하세요(네 문장 이상).', '온이의 한 학기 사건이 학업·관계·마음에 준 영향을 측면별로 분석하고, 제3자가 알아챌 수 있던 신호도 쓰세요.', ['학업 측면을 썼다', '측면마다 사건 근거가 있다', '제3자가 볼 수 있던 신호를 썼다', '온이를 탓하는 문장이 없다'], { min: 90, max: 500, sent: [4, 6], must: [['학업', '과제', '수업']], plus: '회복에 필요한 지원을 덧붙였다', d: 0.4,
              sample: '학업 측면에서 온이는 조별 과제에서 혼자 남아 과제를 혼자 해야 했다. 관계 측면에서는 공지에서 빠지고 생일 모임에도 불리지 않아 반 안의 연결이 끊겼다. 마음 측면에서는 쉬는 시간마다 혼자 있게 되며 학교가 불편한 곳이 되었을 것이다. 같은 반 학생은 공지에서 빠진 이름이나 혼자 남은 자리를 보고 신호를 알아챌 수 있었다.', more: { conclude: '영향은 여러 측면에서 쌓여요. 측면을 나누면 어디를 도와야 할지도 보여요.' } }),
            DONEQ('짝과 글을 바꿔 읽고, 온이를 탓하는 듯한 문장이 있는지 함께 찾아 고쳐 주세요.', '짝과 바꿔 읽기', '짝과 함께 찾아 고쳐 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '온이의 회복을 돕기 위해 학급에서 할 수 있는 지원 하나를 쓰세요.' }] },
        notes: '분석 대상은 가상 인물이다. 학생에게 자기 경험을 쓰게 하지 않는다.',
      }),
      M({
        id: 'activity.class-norm-design', type: 'activity', title: '배제를 막는 모둠 구성 절차',
        method: '배제를 막는 모둠 구성 규칙 설계', tool: 'block-coding', minutes: 17,
        levels: { easy: '단계 셋(별 둘 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯(별 넷 + 깃발) 판에서 별을 모두 들르고 바위(배제가 생기는 틈)를 피해 깃발에 닿게 하고, 친구 절차를 따라가 본다.', challenge: '조건 블록(막히면 왼쪽)을 써서 \'배제 신호가 보이면 돌아가는 갈래\'로 같은 길을 만든다.' },
        activity: {
          title: '모둠 구성 절차 설계', tool: 'block-coding',
          teacher: '"오늘 판의 별 넷은 모둠을 짜는 절차예요. ① 무작위 배정 ② 역할 나누기 ③ 중간 점검 ④ 바꾸기 요청 창구, 깃발은 ⑤ 모둠 활동 시작이에요. 바위는 \'친한 사람끼리 알아서 짜기\'·\'남는 사람은 아무 데나\'처럼 배제가 생기는 틈이에요." 실행할 때마다 "지금 거북이는 어느 단계를 지났나요? 그 단계는 배제를 어떻게 막나요?"라고 묻는다. "무작위면 친한 친구와 못 해서 불공평하다"는 말에는 "친한 친구와 할 기회는 다른 활동에도 있어요. 모둠 짜기에서 매번 남는 사람이 생기지 않게 하는 게 목적이에요"라고 답한다. 판은 절차의 비유이고, 실제 규칙 글은 활동지에 쓴다.',
          task: '별(모둠 구성 단계)을 모두 들러 깃발(모둠 활동 시작)에 닿는 프로그램을 만들고, 배제가 생길 틈을 활동지에 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷(①무작위 배정 ②역할 나누기 ③중간 점검 ④바꾸기 요청 창구)을 모두 들르고 바위(배제가 생기는 틈)를 피해 깃발(⑤모둠 활동 시작)에 닿게 하세요.', NB, { stars: true }, {
              easy: { prompt: '별 둘(①무작위 배정 ②역할 나누기)을 들러 깃발(모둠 활동 시작)에 닿게 하세요(단계 셋).', board: NB_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 막히면 도는 블록은 \'배제 신호(혼자 남는 사람)가 보이면 바꾸기 창구로 돌아가는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['별이 한 줄로 놓인 쪽부터 따라가고, 줄 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구가 짠 절차예요: 앞으로 1칸 → 왼쪽으로 돌기 → 앞으로 1칸. 무작위 배정 뒤 곧장 꺾어 \'친한 사람끼리 짜기\' 바위로 가요. 거북이가 멈출 칸을 고르세요.', { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2]], rocks: [[1, 1]] }, ['fwd', 'left', 'fwd'], { x: 1, y: 2 }, { d: 0.3, more: { conclude: '역할 나누기·중간 점검을 건너뛰면 바로 배제가 생기는 틈에 부딪혀요.' } }),
            BCQ('블록을 5개 안으로 써서 별 넷을 들르고 깃발에 닿게 하세요. 같은 걸음은 반복으로 묶어요.', NB, { stars: true, maxBlocks: 5 }, { d: 0.4, more: { conclude: '절차는 짧고 분명할수록 모두가 지켜요. 되풀이되는 단계는 하나의 규칙으로 묶을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모둠 구성 절차를 글로 쓰고, 단계마다 막는 배제를 쓰세요.', columns: ['단계', '할 일', '막는 배제'], cells: [['①', '무작위 배정', ''], ['②', '역할 나누기', ''], ['③', '중간 점검', ''], ['④', '바꾸기 요청 창구', ''], ['갈래', '혼자 남는 사람이 보이면', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에는 글을 붙일 수 없어 절차 단계를 별 칸으로, 배제가 생기는 틈을 바위로 나타냈다. 규칙 글은 문항 글과 활동지가 맡는다.',
      }),
      M({
        id: 'activity.inclusion-campaign', type: 'activity', title: '"보이지 않는 따돌림" 포스터',
        method: '"보이지 않는 따돌림" 캠페인 설계', tool: 'collage', minutes: 18,
        levels: { easy: '사례·행동 두 칸이 드러나는 포스터를 꾸민다.', base: '사례 한 줄·자료 수치·조력 행동 세 칸이 드러나는 포스터를 꾸미고 점검한다.', challenge: '같은 포스터에 교사를 위한 문구 칸을 더하고 하나 더 점검한다.' },
        activity: {
          title: '보이지 않는 따돌림 포스터', tool: 'collage',
          teacher: '"동의율 29%, 은근한 무시. 덜 보이는 폭력을 보이게 만드는 포스터를 만들어 봐요. 사례 한 줄, 가상 자료 수치, 그리고 지금 할 수 있는 조력 행동이 들어가요." 문구는 활동지에 먼저 쓰고 조각으로 꾸미게 한다. 포스터에 \'따돌림당하는 애\' 같은 꼬리표가 들어가면 "포스터가 한 사람을 가리키면 또 다른 낙인이 돼요. 행동을 가리키게 바꿔 볼까요?"라고 말한다. 수치는 가상이라고 밝히게 한다.',
          task: '관계적 폭력을 알리는 포스터를 사례·수치·조력 행동이 드러나게 조각으로 꾸미고 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '포스터 위쪽: 혼자 남은 한 사람과 둘러싼 무리를 조각으로 나타내 사례를 보이고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'semi', 'star', 'heart'] }, target: { has: [{ shape: 'circle', min: 3 }], selfCheck: ['혼자 남은 자리가 보인다', '특정 사람 얼굴·이름을 넣지 않았다'], minPieces: 4 }, difficulty: 0.25 },
            { prompt: '포스터 가운데: 덜 알아차리는 폭력(29%)과 잘 알아차리는 폭력(91%)의 차이를 긴 네모 막대 둘로 나타내고 점검하세요.', toolOptions: { shapes: ['rect', 'square', 'circle'] }, target: { has: [{ shape: 'rect', min: 2 }], selfCheck: ['두 막대의 길이가 다르다', '가상 자료라고 밝힐 자리를 남겼다'], minPieces: 2 }, difficulty: 0.3 },
            { prompt: '포스터 아래쪽: 조력 행동(같이 앉기·공지 전달·모둠 초대)을 조각 셋 이상으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'leaf'] }, target: { selfCheck: ['조력 행동이 셋 드러난다', '보는 사람이 내일 할 수 있는 행동이다'], minPieces: 3 }, difficulty: 0.3,
              levels: { easy: { prompt: '포스터 아래쪽: 조력 행동 둘 이상을 조각으로 나타내고 점검하세요(행동 둘).', target: { selfCheck: ['조력 행동이 둘 이상 드러난다'], minPieces: 2 } }, challenge: { prompt: '포스터 아래쪽에 조력 행동과 함께 교사를 위한 문구 칸(모둠 짜기·자리 배치 살피기)을 조각으로 넣고 점검하세요(교사 대상 문구).', target: { selfCheck: ['조력 행동이 셋 드러난다', '보는 사람이 내일 할 수 있는 행동이다', '교사를 위한 문구 칸을 넣었다'], minPieces: 4 } } },
              conclude: '사례로 알아보게 하고, 수치로 차이를 보이고, 행동으로 끝내면 \'보이지 않는\' 따돌림이 보이기 시작해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 쓰세요.', columns: ['칸', '문구'], cells: [['사례 한 줄', ''], ['자료 수치(가상)', ''], ['조력 행동', ''], ['교사에게(도전)', '']] }] },
        notes: '수치는 가상 자료다. 특정 학생을 떠올리게 하는 사례는 쓰지 않는다.',
      }),

      M({
        id: 'wrap.concept-map', type: 'wrap', title: '관계적 폭력 개념 지도',
        method: '관계적 폭력 개념 지도', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(모습·영향)에 카드 한 장씩 놓아 보이고 나머지를 함께 놓는다.', base: '가지 셋(모습·영향·대응)에 카드를 나눈다.', challenge: '사이버 공간의 관계적 폭력 카드를 어느 가지에 둘지 말하고 활동지에 사이버 가지를 더한다.' },
        wrap: {
          teacher: '"오늘 배운 관계적 폭력을 한 장 지도로 정리해 봐요. 모습, 영향, 대응." 카드를 나눈 뒤 \'단톡방에서 한 명만 빼고 새 방 만들기\' 카드가 어느 가지인지 묻는다. "친하지 않을 자유와 따돌림은 같다"고 고른 학생에게 은이와 하의 장면을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '관계적 폭력', slots: ['모습', '영향', '대응'], cards: ['공지·정보에서 일부러 빼기', '한 명만 빼고 새 단톡방 만들기', '학교가 불편한 곳이 됨', '과제를 혼자 떠안음', '모둠에 먼저 부르기', '담임 선생님께 모둠 방식 말씀드리기', '친구를 고를 자유와 같은 것'] }, prompt: '카드를 관계적 폭력의 모습·영향·대응 가지에 나누세요(맞지 않는 카드는 남겨요).', target: { sort: { 모습: ['공지·정보에서 일부러 빼기', '한 명만 빼고 새 단톡방 만들기'], 영향: ['학교가 불편한 곳이 됨', '과제를 혼자 떠안음'], 대응: ['모둠에 먼저 부르기', '담임 선생님께 모둠 방식 말씀드리기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '관계적 폭력에 대한 말로 알맞은 것은?', options: ['때리거나 욕하지 않으면 폭력이 아니다', '한 사람을 일부러 되풀이해 빼는 것도 폭력이 될 수 있다', '친하지 않을 자유와 따돌림은 같다'], answer: 1, difficulty: 0.15, explain: '관계를 끊고 일부러 빼는 것이 되풀이되면 몸을 다치지 않아도 큰 상처가 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '관계적 폭력 개념 지도',
          items: [
            { type: 'table', prompt: '가지마다 하나씩 쓰세요.', columns: ['가지', '내 말로 쓰기'], cells: [['모습', ''], ['영향', ''], ['대응', ''], ['사이버 공간(도전)', '']] },
            { type: 'short', prompt: '친하지 않을 자유와 따돌림을 가르는 기준 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.action-pattern', type: 'wrap', title: '곁에 서는 일주일 무늬',
        method: '조력 행동 일주일 패턴', tool: 'pattern', minutes: 7,
        levels: { easy: '교사가 행동 둘(앉기·전달)이 되풀이되는 띠를 함께 채운다.', base: '행동 셋(앉기·전달·초대)이 되풀이되는 일주일 띠의 빈칸을 채운다.', challenge: '부담될 때 할 다른 행동(인사)을 넣어 넷이 되풀이되는 나만의 띠를 활동지에 만든다.' },
        wrap: {
          teacher: '"곁에 서는 일은 큰 결심 한 번보다 작은 행동의 되풀이예요. 같이 앉기, 공지 전달, 모둠 초대 — 일주일 띠의 빈칸을 채워 봐요." 띠를 채운 뒤 "이 중 내일 아침 바로 할 수 있는 것은?"이라고 묻는다. "그 친구 곁에 서면 나도 빠질까 봐 무섭다"는 말에는 "그럴 땐 인사 한마디처럼 부담이 작은 행동부터 해도 돼요. 혼자 하기 어려우면 담임 선생님께 알리는 것도 곁에 서는 거예요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['앉기', '전달', '초대', '앉기', '전달', null, '앉기', null], palette: ['앉기', '전달', '초대', '무시'] }, prompt: '같이 앉기·공지 전달·모둠 초대가 되풀이되는 일주일 띠의 빈칸을 채우세요.', target: { fill: ['초대', '전달'] }, difficulty: 0.2 },
            { type: 'short', prompt: '띠의 행동 가운데 내일 할 수 있는 것 하나와, 부담될 때 대신 할 작은 행동 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '곁에 서는 일주일',
          items: [
            { type: 'table', prompt: '요일마다 할 작은 행동을 쓰세요.', columns: ['요일', '행동'], cells: [['월', ''], ['화', ''], ['수', ''], ['목', ''], ['금', '']] },
            { type: 'short', prompt: '혼자 하기 어려울 때 도움을 청할 사람(담임 선생님·상담 선생님 등)을 쓰세요.' },
          ],
        },
        notes: '교구 한계: 규칙 판 글자 조각에는 짧은 낱말만 담아 행동을 두 글자(앉기·전달·초대)로 줄였다. 자세한 행동은 활동지에 쓴다.',
      }),
    );
  }

  // ======================================================================================================
  // 4. 또래 상담자의 경청과 연결 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-peer-counsel', [10]);
    // 가상 고민 "요즘 동아리에서 나만 빼고 말해"에 대한 대답
    const ANS = {
      advise: ['"신경 쓰지 말고 다른 동아리로 옮겨"', '"네가 먼저 말을 걸어 봐"'],
      comfort: ['"괜찮아, 금방 지나갈 거야"'],
      listen: ['"요즘 많이 서운했겠다. 어떤 일이 있었어?"', '"나만 빠진 느낌이 들었구나"'],
      link: ['"상담 선생님께 같이 가 볼래?"'],
    };
    const SLOTS = ['충고·판단', '위로', '경청', '연결'];
    // 후배가 털어놓는 대화(활동)
    const TALK = { text: '또래 상담 시간. 가상 후배 다가 "선배, 사실 반에서 몇 주째 놀림을 받고 있어요. 근데 아무한테도 말하지 마세요"라고 말한다.', who: '나', motif: 'house', choices: [
      { id: 'advise', text: '"그런 애들은 그냥 무시하면 돼"라고 충고한다', result: '다가 "네…" 하고 말을 줄인다.', impact: [{ who: '다', text: '말해도 소용없다고 느낀다', tone: -1 }], ending: '빠른 충고는 말문을 닫게 할 수 있다.' },
      { id: 'blame', text: '"왜 진작 말 안 했어?"라고 묻는다', result: '다가 고개를 숙이고 "죄송해요"라고 한다.', impact: [{ who: '다', text: '말한 것이 잘못처럼 느껴진다', tone: -1 }], ending: '말한 사람은 잘한 것이다. 늦었다고 탓하지 않는다.' },
      { id: 'empathy', text: '"말해 줘서 고마워. 몇 주나 견뎠구나"라고 마음을 알아준다', result: '다가 조금 더 이야기를 꺼낸다.', impact: [{ who: '다', text: '들어 주는 사람이 있다고 느낀다', tone: 1 }],
        next: { text: '다가 "쉬는 시간마다 그래요"라며 말을 멈춘다.', choices: [
          { id: 'ask', text: '"괜찮다면 어떤 일이 있었는지 조금 더 말해 줄래?"라고 열린 질문을 한다', result: '다가 무슨 일이 되풀이되는지 이야기한다.', impact: [{ who: '다', text: '자기 속도로 말할 수 있다', tone: 1 }],
            next: { text: '듣고 나서 어른과 잇자고 하자, 다가 "어른한테 말하면 더 커질 것 같아요"라고 한다.', choices: [
              { id: 'secret', text: '"그럼 우리 둘만 알고 있자"라고 약속한다', result: '놀림은 계속되고, 나 혼자 그 무게를 안는다.', impact: [{ who: '다', text: '도움이 닿지 않는다', tone: -1 }], ending: '안전이 걸린 비밀은 둘만 지킬 수 없다. 또래 상담자는 혼자 해결하지 않는다.' },
              { id: 'connect', text: '"걱정되는 마음 알아. 네가 원하는 방식으로 상담 선생님께 같이 가 줄게"라고 한다', result: '다가 망설이다가 함께 가 보기로 한다.', impact: [{ who: '다', text: '어른의 도움에 닿는다', tone: 1 }], ending: '마음을 알아주고, 선택을 존중하며, 함께 가 주는 것이 연결이다.' }] } },
          { id: 'fix', text: '"내가 그 애들한테 가서 따질게"라고 한다', result: '다가 놀라며 "그러면 저 더 힘들어져요"라고 한다.', impact: [{ who: '다', text: '일이 커질까 더 불안해진다', tone: -1 }], ending: '또래 상담자가 대신 해결하려 하면 상대가 더 위험해질 수 있다.' }] } }] };
    const TALK_R = [{ id: 'listen', text: '판단보다 마음을 알아주는 말이 말문을 연다' }, { id: 'link', text: '또래 상담자는 듣고 어른과 잇는 데까지 한다' }, { id: 'choice', text: '연결할 때도 상대의 선택과 속도를 존중한다' }, { id: 'solo', text: '믿고 말했으니 내가 끝까지 해결해야 한다', why: '또래 상담자는 상담을 대신하지 않아요. 안전이 걸린 일은 어른과 함께 다뤄요.' }];
    // 연결할 곳 지도(가상 학교와 동네)
    const SUP = { title: '가상 학교와 동네의 도움 자리', grid: [6, 4], places: [{ name: '담임 선생님(교실)', icon: 'school', at: [1, 1] }, { name: 'Wee 클래스·상담실', icon: 'library', at: [3, 1] }, { name: '보건실', icon: 'hospital', at: [2, 2] }, { name: '교무실', icon: 'office', at: [4, 2] }, { name: '보호자', icon: 'house', at: [0, 3] }, { name: '신고·상담 창구', icon: 'post', at: [5, 0] }, { name: '지역 상담 기관', icon: 'city', at: [5, 3] }] };
    // 또래 상담 기록 20건 분류(가상)
    const LOG = [['혼자 들어도 됨', 9], ['어른 연결 필요', 8], ['즉시 어른', 3]];
    const LOG10 = [['혼자 들어도 됨', 5], ['어른 연결 필요', 4], ['즉시 어른', 1]];

    MODS.push(
      M({
        id: 'intro.response-types', type: 'intro', title: '같은 고민, 다른 대답',
        method: '대답 유형 분석', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 대답 넷(충고 둘·경청 둘)을 바구니에 넣어 보이며 차이를 짚는다.', base: '대답 여섯을 충고·판단·위로·경청·연결 바구니에 넣는 시연을 보고 효과를 말한다.', challenge: '가장 도움이 될 대답 둘을 골라 까닭을 활동지에 쓴다.' },
        intro: {
          teacher: '"가상 친구의 고민이에요. \'요즘 동아리에서 나만 빼고 말해.\' 여섯 친구가 각각 대답했어요. 어떤 대답을 들으면 더 말하고 싶어질까요?" 시연 단추로 대답이 바구니에 들어가는 모습을 보여 준다. "좋은 상담은 해결책을 바로 주는 것"이라는 말이 나오면 "해결책을 들으면 친구는 무엇을 더 말할 수 있을까요?"라고 되묻는다. 또래 상담자의 일은 고치는 것이 아니라 듣고 잇는 것이라는 점을 짚는다.',
          student: '같은 고민에 대한 여섯 대답을 충고·판단, 위로, 경청, 연결 바구니에 나누고, 어떤 대답이 말문을 열지 생각해 보세요.',
          demo: { tool: 'sortboard', options: { slots: SLOTS, cards: [ANS.advise[0], ANS.listen[0], ANS.comfort[0], ANS.link[0], ANS.advise[1], ANS.listen[1]] }, sequence: [{ sort: { '충고·판단': ANS.advise, 위로: ANS.comfort, 경청: ANS.listen, 연결: ANS.link } }] },
          art: { draw: 'six paper speech bubbles of different shapes floating toward a paper student sitting on a bench, two bubbles shaped like open ears glowing softly, one bubble shaped like a door leading to a counselor room', banner: '어떤 대답이 말문을 열까?', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
        },
        notes: '고민은 가상이다. 학생에게 자기 고민을 말하게 하지 않는다. 판단·충고 바구니는 화면 칸 수 한계(4칸)로 하나로 묶었다.',
      }),
      M({
        id: 'intro.silence-timer', type: 'intro', title: '끼어들지 않고 2분 듣기',
        method: '말 끊지 않고 2분 듣기', tool: 'timer', minutes: 7,
        levels: { easy: '듣기 1분(60초)·요약 30초로 맞추고 한 번만 해 본다.', base: '듣기 2분(120초)·요약 30초를 짝과 바꾸어 두 번 한다.', challenge: '요약할 때 감정 낱말(서운함·불안 등)을 하나 넣어 말한다.' },
        intro: {
          teacher: '"짝이 가상 인물 시나리오를 읽는 2분 동안, 끼어들지도 고개를 저어도 안 돼요. 끝나면 30초 안에 들은 것을 요약해요." 시연 단추로 타이머가 듣기 120초·요약 30초·두 번으로 맞춰지는 모습을 보여 준다. 시작 전에 "말을 끊고 싶어질 때 어떻게 참을까요?"라고 묻는다. "조용히 있으면 안 듣는 것처럼 보인다"는 말에는 "눈을 맞추고 고개를 끄덕이는 것도 듣는 말이에요"라고 답한다. 시나리오는 가상 인물의 이야기이고, 자기 이야기를 하지 않는다고 미리 밝힌다.',
          student: '짝이 가상 인물 이야기를 읽는 2분 동안 끼어들지 않고 듣고, 30초 안에 들은 내용을 요약해 보세요.',
          demo: { tool: 'timer', options: { title: '2분 듣기·30초 요약', plan: { work: 60, rest: 10, rounds: 1 } }, sequence: [{ plan: { work: 120, rest: 30, rounds: 2 } }] },
          art: { draw: 'two paper students facing each other at a small table, one reading from a paper card, the other listening with a paper ear shape glowing, a large paper stopwatch between them showing two minutes', banner: '끝까지 들어요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '시나리오는 교사가 미리 준비한 가상 인물 이야기(동아리에서 빠진 느낌 등)를 쓴다. 학생 경험을 시나리오로 쓰지 않는다. 신호음은 판 단추로 켤 때만 난다.',
      }),

      M({
        id: 'activity.counsel-dilemma', type: 'activity', title: '후배가 털어놓을 때의 갈림길',
        method: '또래 상담 대화의 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 둘(첫 반응·이어지는 말)까지 고르고 근거를 고른다.', base: '갈림길 셋을 끝까지 따라가 다가 더 말하는지 닫는지 결과를 보고 근거를 고른다.', challenge: '연결 제안을 거절당한 장면에서 다음 말을 고른 뒤, 다른 길도 끝까지 가 보고 견준다.' },
        activity: {
          title: '또래 상담 갈림길', tool: 'dilemma',
          teacher: '"가상 후배 다가 몇 주째 놀림을 받고 있다고, 그런데 아무에게도 말하지 말라고 해요. 내 첫마디가 다의 다음 말을 정해요." 선택마다 다의 반응을 소리 내어 읽게 한다. \'내가 따질게\'를 고른 학생에게 "그 뒤 다는 교실에서 어떤 일을 겪을까요?"라고 묻는다. \'둘만 알자\'를 고른 학생에게 "지켜 주고 싶은 마음은 소중해요. 그런데 안전이 걸린 비밀을 혼자 안으면 다도 나도 지킬 수 없어요"라고 말한다. 또래 상담자의 역할은 듣고, 마음을 알아주고, 어른과 잇는 데까지라는 점을 짚는다.',
          task: '후배가 털어놓는 대화의 갈림길마다 반응을 고르고, 다가 더 말하는지 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            Object.assign(DILQ('후배 다의 이야기에 반응을 고르며 대화를 이어 가고, 내 선택의 근거를 고르세요.', TALK, [['empathy', 'ask', 'connect']], TALK_R, ['listen', 'link', 'choice'], { d: 0.4, opt: { title: '털어놓은 후배' } })),
            EXPLOREQ('\'내가 따질게\' 길이나 \'둘만 알자\' 길도 끝까지 가 보고 \'함께 가 줄게\' 길과 견주세요.', TALK, TALK_R, ['다른 길의 끝 장면을 확인했다', '다에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('가상 친구 라가 밤에 메시지를 보냈어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '밤 11시, 가상 친구 라가 "단톡방 애들이 또 나만 빼고 놀러 갔대. 그냥 너한테만 말하는 거야"라고 메시지를 보냈다.', who: '나', motif: 'moon', choices: [
              { id: 'fix', text: '"걔들 진짜 별로다. 내가 내일 한마디 할게"라고 답한다', result: '라가 "아니야, 그러지 마"라며 대화를 끝낸다.', impact: [{ who: '라', text: '말한 것을 후회한다', tone: -1 }], ending: '대신 나서겠다는 말은 상대의 선택을 빼앗는다.' },
              { id: 'feel', text: '"또 그랬구나, 많이 서운했겠다. 말해 줘서 고마워"라고 답한다', result: '라가 "응, 좀 그래"라며 조금 더 이야기한다.', impact: [{ who: '라', text: '혼자가 아니라고 느낀다', tone: 1 }],
                next: { text: '라가 "요즘 학교 가기가 싫어"라고 한다.', choices: [
                  { id: 'tomorrow', text: '"내일 같이 담임 선생님이나 상담 선생님께 이야기해 볼래? 내가 옆에 있을게"라고 한다', result: '라가 "생각해 볼게"라고 하고 다음 날 함께 상담실에 간다.', impact: [{ who: '라', text: '어른의 도움에 닿는다', tone: 1 }], ending: '마음을 알아준 다음 함께 어른에게 가는 것이 연결이다.' },
                  { id: 'cheer', text: '"힘내! 그런 애들 신경 쓰지 마"라고만 한다', result: '라가 "응…"이라고 하고 대화가 끝난다.', impact: [{ who: '라', text: '학교 가기 싫은 마음이 그대로다', tone: 0 }], ending: '응원만으로는 계속되는 따돌림이 멈추지 않는다.' }] } }] },
            [['feel', 'tomorrow']], [{ id: 'feel', text: '먼저 마음을 알아주면 더 말할 수 있다' }, { id: 'adult', text: '되풀이되는 일은 어른과 함께 다룬다' }, { id: 'hero', text: '친구니까 내가 대신 싸워 줘야 한다', why: '대신 나서면 친구가 더 위험해질 수 있어요. 친구의 선택을 존중하고 어른과 이어요.' }], ['feel', 'adult'], { d: 0.35, more: { conclude: '듣기 → 마음 알아주기 → 함께 어른에게 가기. 또래 상담자는 혼자 해결하는 사람이 아니라 잇는 사람이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '연결을 거절당했을 때 할 수 있는 다음 말 하나를 쓰세요(상대의 마음을 알아주는 말 + 함께 가자는 말).' }] },
        notes: '다와 라는 가상 인물이다. 생명·안전이 걸린 이야기를 들으면 비밀로 하지 않고 바로 어른에게 알린다는 원칙을 수업 끝에 다시 말한다.',
      }),
      M({
        id: 'activity.empathy-writing', type: 'activity', title: '충고를 공감으로 바꿔 쓰기',
        method: '공감 반응 바꿔 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '충고형 대답 한 개를 문장 틀을 보고 공감·확인형으로 바꾼다.', base: '충고형 대답 세 개를 차례로 바꿔 쓰고 기준표(감정 반영·판단 없음·열린 질문)로 점검한다.', challenge: '마지막 대답 뒤에 어른과 잇는 연결 문장을 붙여 기준 하나를 더 점검한다.' },
        activity: {
          title: '공감 반응 바꿔 쓰기', tool: 'rubric-writing',
          teacher: '"충고형 대답을 공감·확인형으로 바꿔 봐요. 공식은 세 가지예요. 마음을 이름 붙여 돌려주기, 판단하지 않기, \'어떻게·무엇이\'로 묻기." 첫 대답을 함께 바꿔 본다. "그래도 해결책을 말해 줘야 도움이 된다"는 학생에게 "해결책은 친구가 충분히 말한 뒤, 친구가 원할 때 함께 찾아도 늦지 않아요"라고 말한다. 바꾼 문장에 \'네가 예민해서\'처럼 상대를 탓하는 말이 남아 있는지 함께 본다.',
          task: '충고형 대답을 공감·확인형 대답으로 바꿔 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('"신경 쓰지 말고 다른 동아리로 옮겨"를 공감·확인형으로 바꿔 쓰세요.', '충고 "신경 쓰지 말고 다른 동아리로 옮겨"를 마음을 알아주고 묻는 대답으로 바꾸세요.', ['상대의 마음을 낱말로 돌려주었다', '판단하는 말이 없다', '열린 질문이 있다'], { min: 20, max: 200, sent: [1, 3], starter: '~해서 ~했겠다. 어떤 ~?', d: 0.3 }),
            RWQ('"네가 먼저 말을 걸어 봐"를 공감·확인형으로 바꿔 쓰세요.', '충고 "네가 먼저 말을 걸어 봐"를 마음을 알아주고 묻는 대답으로 바꾸세요.', ['상대의 마음을 낱말로 돌려주었다', '해야 할 일을 시키지 않았다', '열린 질문이 있다'], { min: 20, max: 200, sent: [1, 3], must: [['?', '까', '래']], d: 0.35 }),
            RWQ('"그 정도는 다들 겪어, 예민하게 굴지 마"를 공감·확인형으로 바꿔 쓰세요.', '판단 "그 정도는 다들 겪어, 예민하게 굴지 마"를 마음을 알아주고 묻는 대답으로 바꾸세요.', ['상대의 느낌을 깎아내리지 않았다', '상대의 마음을 낱말로 돌려주었다', '열린 질문이 있다'], { min: 20, max: 250, sent: [1, 3], plus: '어른과 잇는 연결 문장을 붙였다', d: 0.4,
              sample: '그런 일이 계속되면 많이 지치고 속상했겠다. 언제 가장 힘들었는지 말해 줄 수 있어?', more: { conclude: '공감은 동의가 아니라 \'네 마음이 들렸어\'라는 신호예요. 그 신호가 있어야 다음 말이 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바꾸기 전과 뒤를 비교하세요.', columns: ['충고·판단형', '공감·확인형으로 바꾼 말'], cells: [['신경 쓰지 말고 다른 동아리로 옮겨', ''], ['네가 먼저 말을 걸어 봐', ''], ['예민하게 굴지 마', '']] }] },
      }),
      M({
        id: 'activity.referral-map', type: 'activity', title: '상황별로 연결할 곳 지도',
        method: '연결할 곳 지도', tool: 'map', minutes: 17,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보이는 지도에서 상황 셋에 맞는 곳을 찾는다.', base: '학교 안·밖 도움 자리 일곱 곳이 있는 지도에서 상황 다섯(다침·되풀이·마음·학교 밖·위험한 비밀)에 맞는 곳에 핀을 꽂는다.', challenge: '연결할 때 동의를 구하는 말 보기까지 고른다.' },
        activity: {
          title: '연결할 곳 지도', tool: 'map',
          teacher: '"또래 상담자가 혼자 들고 있지 않고 잇는 곳들이에요. 가상 학교와 동네 지도에서 상황마다 어디로 잇는지 핀을 꽂아 봐요." 칠판의 \'신고·상담 창구\' 옆에 ' + HELPNO + '를 적어 두고 학교에서 확인한 번호를 채운다. 문항마다 "지금 상황은 위급한가요, 계속되는 일인가요, 마음이 힘든 일인가요?"라고 묻는다. 모든 상황에 \'내가 들어 준다\'를 고르려는 학생에게 "들어 주는 것은 시작이에요. 그다음 누구의 손이 필요할까요?"라고 묻는다.',
          task: '상황마다 연결할 도움 자리에 핀을 꽂고, 연결할 때 할 말을 골라요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '친구가 방금 몸을 맞아 다쳤다며 찾아왔어요. 가장 먼저 함께 갈 곳에 핀을 꽂으세요.', toolOptions: SUP, target: { place: '보건실' }, difficulty: 0.2 },
            { prompt: '친구가 몇 주째 같은 무리에게 놀림을 받고 있대요. 학교에서 사안을 알고 도울 첫 어른에게 핀을 꽂으세요.', toolOptions: SUP, target: { place: '담임 선생님(교실)' }, difficulty: 0.25 },
            { prompt: '친구가 일은 멈췄지만 마음이 계속 힘들다고 해요. 마음을 함께 돌볼 곳에 핀을 꽂으세요.', toolOptions: SUP, target: { place: 'Wee 클래스·상담실' }, difficulty: 0.25 },
            { prompt: '주말 밤, 학교가 닫혀 있을 때 친구가 괴롭힘 메시지를 계속 받고 있어요. 학교 밖에서 알릴 곳에 핀을 꽂으세요.', toolOptions: SUP, target: { place: '신고·상담 창구' }, difficulty: 0.3,
              levels: { challenge: { prompt: '주말 밤 학교 밖에서 알릴 곳에 핀을 꽂고, 연결을 권할 때 할 말을 고르세요(동의 구하는 말).', toolOptions: { ask: { q: '친구에게 연결을 권하는 말로 알맞은 것은?', choices: ['"같이 알려 볼래? 네가 원하는 방법으로 해 보자"', '"내가 알아서 신고해 둘게, 넌 몰라도 돼"', '"이 정도는 참아 보자"'], why: ['', '친구 몰래 대신하면 친구의 선택을 빼앗아요. 함께 정해요.', '되풀이되는 괴롭힘은 참을 일이 아니에요.'] } }, target: { place: '신고·상담 창구', pick: 0 } } } },
            { prompt: '친구가 "아무한테도 말하지 마"라며 털어놓은 이야기에 몸이 위험해 보이는 내용이 있어요. 비밀보다 먼저 함께 갈 학교 안 어른 자리에 핀을 꽂으세요.', toolOptions: SUP, target: { place: '교무실' }, difficulty: 0.35,
              conclude: '다치면 보건실, 되풀이되면 담임 선생님, 마음은 상담실, 학교 밖은 신고·상담 창구 — 그리고 위험한 비밀은 가장 가까운 어른에게 바로. 잇는 곳을 알면 혼자 안지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교의 실제 도움 자리를 채우세요(교사와 함께 확인).', columns: ['상황', '연결할 곳', '가는 법·연락처'], cells: [['다쳤을 때', '', ''], ['되풀이될 때', '', ''], ['마음이 힘들 때', '', ''], ['학교 밖일 때', '신고·상담 창구', HELPNO]] }] },
        notes: '지도는 가상이다. 번호는 쓰지 않고 체계도의 자리 글을 둔다 — 교사가 학교에서 확인한 신고·상담 번호와 지역 상담 기관을 활동지에 채운다.',
      }),
      M({
        id: 'activity.limits-chart', type: 'activity', title: '혼자 들어도 될 때, 어른과 이을 때',
        method: '또래 상담자가 혼자 하면 안 되는 일', tool: 'chart', minutes: 18,
        levels: { easy: '가상 상담 기록 10건을 분류한 표로 막대를 그린다.', base: '기록 20건 표로 막대를 그리고, 가장 적은 갈래와 어른 연결이 필요한 건수(합)를 읽는다.', challenge: '값을 숨긴 막대를 읽고, 분류 기준을 활동지에 한 쪽 안내문으로 쓴다.' },
        activity: {
          title: '상담 기록 분류 막대', tool: 'chart',
          teacher: '"가상 또래 상담 기록 20건을 \'혼자 들어도 됨·어른 연결 필요·즉시 어른\'으로 나눴어요. 기준은 이거예요. 되풀이되는 괴롭힘·위협은 어른 연결, 몸과 생명이 위험한 내용은 즉시 어른." 칠판에 기준을 적고 막대를 그리게 한다. "즉시 어른이 3건뿐이니 드문 일"이라는 말에는 "드물어도 한 건이 가장 무거워요. 그 한 건을 놓치지 않는 게 기준을 아는 까닭이에요"라고 답한다. 또래 상담자가 혼자 들어도 되는 일도 기록은 상담 선생님과 나눈다는 점을 짚는다.',
          task: '가상 또래 상담 기록 분류 표로 막대를 그리고, 어른과 이어야 하는 기록을 읽어요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 상담 기록 20건 분류 표를 보고 막대를 그리세요(첫 막대는 그려져 있어요).', toolOptions: { type: 'bar', mode: 'build', title: '가상 또래 상담 기록 20건 분류(가상 자료)', unit: '건', xLabel: '갈래', yLabel: '기록 수', data: LOG, given: [0] }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '가상 상담 기록 10건 분류 표를 보고 막대를 그리세요(기록 10건).', toolOptions: { title: '가상 또래 상담 기록 10건 분류(가상 자료)', data: LOG10 } } } },
            { prompt: '막대에서 기록 수가 가장 적은 갈래를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '가상 또래 상담 기록 20건 분류(가상 자료)', unit: '건', xLabel: '갈래', yLabel: '기록 수', data: LOG, question: '가장 적은 갈래는?', choices: LOG.map((x) => x[0]) }, target: { pick: 2 }, difficulty: 0.2 },
            { prompt: '어른과 이어야 하는 기록(어른 연결 필요 + 즉시 어른)은 모두 몇 건인지 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '가상 또래 상담 기록 20건 분류(가상 자료)', unit: '건', xLabel: '갈래', yLabel: '기록 수', data: LOG, question: '어른과 이어야 하는 기록은 모두 몇 건?', choices: ['3건', '8건', '11건', '20건'] }, target: { pick: 2 }, difficulty: 0.3 },
            { prompt: '기록: "친구가 같은 무리에게 몇 주째 돈을 달라는 요구를 받는다." 이 기록의 갈래를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '가상 또래 상담 기록 20건 분류(가상 자료)', unit: '건', xLabel: '갈래', yLabel: '기록 수', data: LOG, question: '이 기록의 갈래는?', choices: LOG.map((x) => x[0]), why: ['되풀이되는 요구는 혼자 들을 일이 아니에요.', '', '지금 몸이 위험한 상황이면 즉시 어른이지만, 이 기록은 되풀이되는 요구라 어른 연결이 필요해요.'] }, target: { pick: 1 }, difficulty: 0.35,
              conclude: '절반이 넘는 기록이 어른의 손을 필요로 해요. 기준을 알면 \'내가 다 해야 한다\'는 무게를 내려놓을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '분류 기준을 정리하세요.', columns: ['갈래', '이럴 때', '내가 할 일'], cells: [['혼자 들어도 됨', '', ''], ['어른 연결 필요', '', ''], ['즉시 어른', '', '']] }] },
        notes: '기록은 모두 가상이다. 실제 또래 상담 기록을 수업 자료로 쓰지 않는다. 즉시 어른 갈래의 예시는 \'몸이 위험한 상황\'처럼 일반적으로만 말하고 자세히 묘사하지 않는다.',
      }),

      M({
        id: 'wrap.skill-check', type: 'wrap', title: '경청 기술 띠 점검',
        method: '경청 기술 자기 평가', tool: 'pattern', minutes: 7,
        levels: { easy: '교사가 기술 셋(눈맞춤·요약·감정)의 띠를 함께 채운다.', base: '기술 다섯(눈맞춤·요약·감정·질문·연결)이 되풀이되는 띠의 빈칸을 채우고, 잘한 칸·연습할 칸을 활동지에 표시한다.', challenge: '연습할 칸 하나로 다음 연습 목표를 정해 쓴다.' },
        wrap: {
          teacher: '"오늘 쓴 경청 기술 다섯 개를 띠로 놓아 봐요. 눈 맞추고, 요약하고, 감정을 돌려주고, 열린 질문을 하고, 어른과 잇기." 띠를 채운 뒤 활동지에 잘한 칸과 연습할 칸을 표시하게 한다. \'충고\' 조각을 넣으려는 학생에게 "충고는 경청의 차례에 들어갈 자리가 있을까요?"라고 묻는다. 연결이 마지막에 오는 까닭(충분히 들은 뒤 잇는다)을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['눈', '요약', '감정', '질문', '연결', '눈', null, '감정', null, '연결'], palette: ['눈', '요약', '감정', '질문', '연결', '충고'] }, prompt: '경청 기술 다섯(눈맞춤·요약·감정·질문·연결)이 되풀이되는 띠의 빈칸을 채우세요.', target: { fill: ['요약', '질문'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '또래 상담자의 역할로 알맞은 것은?', options: ['해결책을 바로 주고 혼자 끝까지 해결한다', '듣고 마음을 알아준 뒤 어른과 잇는다', '들은 비밀은 어떤 경우에도 둘만 지킨다'], answer: 1, difficulty: 0.15, explain: '또래 상담자는 상담을 대신하지 않아요. 안전이 걸린 일은 비밀보다 연결이 먼저예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '경청 기술 점검',
          items: [
            { type: 'table', prompt: '기술마다 오늘의 나를 표시하세요.', columns: ['기술', '잘했다', '연습할래'], cells: [['눈 맞춤', '', ''], ['요약', '', ''], ['감정 돌려주기', '', ''], ['열린 질문', '', ''], ['어른과 잇기', '', '']] },
            { type: 'short', prompt: '다음 연습 목표 하나를 쓰세요.' },
          ],
        },
        notes: '교구 한계: 규칙 판 글자 조각에 짧은 낱말만 담아 기술을 한두 낱말로 줄였다. 자기 평가(잘한 칸·연습할 칸)는 활동지가 맡는다.',
      }),
      M({
        id: 'wrap.reflection', type: 'wrap', title: '듣는 사람이 된다는 것',
        method: '조력자로서의 성찰 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '두 문장 성찰 글을 문장 틀을 보고 쓴다.', base: '"듣는 사람이 된다는 것"을 세 문장으로 쓰고 기준표로 점검한다.', challenge: '듣는 나를 돌보는 방법을 한 문장 더해 활동지에 쓴다.' },
        wrap: {
          teacher: '"마지막으로 \'듣는 사람이 된다는 것\'에 대해 세 문장을 써 봐요." 다 쓴 뒤 두세 명의 글을 동의를 받아 읽는다. "친구 고민을 다 들어 주다 보면 나도 힘들 것 같다"는 말이 나오면 "그럴 때 나도 상담 선생님께 이야기할 수 있어요. 듣는 사람도 돌봄을 받아요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '"듣는 사람이 된다는 것"에 대해 세 문장으로 쓰세요.', minChars: 40, maxChars: 300, starter: '듣는 사람이 된다는 것은 ~. 오늘 ~. 앞으로 ~.' }, prompt: '"듣는 사람이 된다는 것" 성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['오늘 배운 경청 기술 하나를 썼다', '혼자 해결하지 않고 잇는 역할을 썼다', '앞으로 할 행동을 썼다'], sentences: [2, 4] }, difficulty: 0.2 },
            MOOD,
          ],
        },
        worksheet: {
          title: '듣는 사람이 된다는 것',
          items: [
            { type: 'short', prompt: '듣는 사람이 된다는 것을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '듣고 나서 내가 지칠 때 나를 돌보는 방법 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 처벌과 회복 — 조치가 남기는 것 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-punish-restore', [10]);
    // 가상 사설 문장
    const FACT = ['이 학교는 올해 회복 대화 모임을 처음 열었다', '조치를 받은 학생은 정해진 교육을 이수했다', '학교폭력 예방교육은 학기마다 실시된다', '설문에 학생 300명이 답했다'];
    const OPIN = ['처벌이 약해서 폭력이 끊이지 않는다', '회복 대화는 가해 학생을 봐주는 일이다', '엄한 학교일수록 학생이 안전하다', '피해 학생은 사과를 받으면 다 괜찮아진다'];
    // 회복 중심 선호(가상)
    const PREF = [['학생', 58], ['교사', 47], ['보호자', 34]];
    const PREFBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '"회복 중심이 낫다" 응답 비율(가상 설문)', unit: '%', xLabel: '집단', yLabel: '응답 비율', max: 100, data: PREF }, more);
    // 두 학교의 같은 사안
    const TWO = { text: '가상 사안: 단톡방에서 한 학생(가람)을 몇 주째 조롱한 일이 확인되었다. 같은 사안을 서로 다른 방식의 두 학교가 다룬다고 생각하고 한 학교를 골라 따라간다.', who: '나', motif: 'house', choices: [
      { id: 'punish', text: '처벌 중심 학교: 조치를 엄하게 정하는 데 집중한다', result: '조치가 정해지고 조롱한 학생은 특별 교육을 받는다.', impact: [{ who: '가람', text: '조롱이 멈춘다', tone: 1 }],
        next: { text: '조치가 끝난 뒤, 가람은 교실에서 여전히 눈치를 본다.', choices: [
          { id: 'done', text: '조치가 끝났으니 사안을 닫는다', result: '한 학기 뒤, 가람은 수군거림 속에 지내고 단톡방에서 비슷한 일이 다시 생긴다.', impact: [{ who: '가람', text: '일상이 돌아오지 않는다', tone: -1 }], ending: '조치만으로는 피해 학생의 일상과 학급 문화가 저절로 돌아오지 않는다.' },
          { id: 'support', text: '조치와 함께 가람의 상담·학습 지원을 잇는다', result: '가람이 상담 선생님을 만나며 조금씩 수업에 집중한다.', impact: [{ who: '가람', text: '도움을 받으며 일상을 되찾기 시작한다', tone: 1 }],
            next: { text: '한 달 뒤, 학급 분위기를 어떻게 살필지 정해야 한다.', choices: [
              { id: 'check', text: '담임 선생님이 정기적으로 살피고 단톡방 규칙을 함께 고친다', result: '한 학기 뒤 비슷한 일이 다시 생기지 않았고 가람은 모둠 활동에 섞인다.', impact: [{ who: '가람', text: '안전하게 일상을 이어 간다', tone: 1 }], ending: '처벌 중심이어도 피해 학생 지원과 재발 점검을 함께 하면 결과가 달라진다.' },
              { id: 'skip', text: '따로 살피지 않는다', result: '조롱한 학생과 가람 사이 긴장이 그대로 남는다.', impact: [{ who: '가람', text: '불안이 이어진다', tone: 0 }], ending: '점검이 없으면 조치의 효과를 확인할 수 없다.' }] } }] } },
      { id: 'restore', text: '회복 중심 학교: 영향과 바로잡기에 집중한다', result: '학교는 먼저 가람의 안전을 확인하고, 조롱한 학생에게 자기 행동의 영향을 마주하게 한다.', impact: [{ who: '가람', text: '안전이 먼저 확인된다', tone: 1 }],
        next: { text: '회복 대화 모임을 열지 정해야 한다.', choices: [
          { id: 'force', text: '빨리 끝내려고 가람의 동의 없이 화해 자리를 만든다', result: '가람은 억지로 "괜찮아"라고 말하고 더 힘들어한다.', impact: [{ who: '가람', text: '또 한 번 상처받는다', tone: -1 }], ending: '피해 학생이 원하지 않는 화해는 회복이 아니라 또 다른 부담이다.' },
          { id: 'consent', text: '가람이 원하는지 먼저 묻고, 원할 때만 상담 선생님이 진행한다', result: '가람은 바로 만나기보다 사과 글을 먼저 받기로 한다.', impact: [{ who: '가람', text: '자기 속도와 선택을 존중받는다', tone: 1 }],
            next: { text: '조롱한 학생이 사과 글을 쓰고 단톡방 글을 지웠다. 그다음은?', choices: [
              { id: 'follow', text: '바로잡기 약속(단톡방에서 멈추기)을 정하고 한 학기 동안 점검한다', result: '한 학기 뒤 비슷한 일이 다시 생기지 않았고 가람은 친구들과 다시 웃는다.', impact: [{ who: '가람', text: '일상을 되찾는다', tone: 1 }, { who: '조롱한 학생', text: '책임지고 달라질 길이 열린다', tone: 1 }], ending: '회복은 봐주기가 아니라 책임을 행동으로 지게 하는 일이다.' },
              { id: 'end', text: '사과했으니 더 볼 것 없다', result: '몇 주 뒤 다른 방에서 비슷한 말이 나온다.', impact: [{ who: '가람', text: '다시 불안해진다', tone: -1 }], ending: '사과는 끝이 아니라 바로잡기의 시작이다.' }] } }] } }] };
    const TWO_R = [{ id: 'victim', text: '어느 방식이든 피해 학생의 안전과 일상이 먼저다' }, { id: 'act', text: '책임은 행동(지원·바로잡기·점검)으로 이어져야 한다' }, { id: 'check', text: '재발을 막으려면 끝난 뒤에도 살펴야 한다' }, { id: 'soft', text: '회복 중심은 결국 봐주기다', why: '회복적 접근은 영향을 마주하고 바로잡게 하는 책임의 방식이에요.' }, { id: 'hard', text: '처벌만 세면 폭력이 사라진다', why: '처벌만으로는 피해 학생의 회복과 학급 문화가 저절로 바뀌지 않아요.' }];
    const TWO_PATHS = [['punish', 'support', 'check'], ['restore', 'consent', 'follow']];
    // 가상 예산 100만 원(1단위 = 1만 원)
    const BUDGET = [{ id: 'cam', text: '감시 장비 늘리기', price: 400000 }, { id: 'counsel', text: '상담 인력 시간 늘리기', price: 300000 }, { id: 'restore', text: '회복 대화 프로그램', price: 200000 }, { id: 'train', text: '교사 연수', price: 100000 }];
    const BUDGET_MORE = [{ id: 'study', text: '피해 학생 학습 지원', price: 200000 }, { id: 'banner', text: '복도 현수막', price: 100000 }];

    MODS.push(
      M({
        id: 'intro.fact-opinion', type: 'intro', title: '사설 속 사실과 의견',
        method: '사설 문장의 사실과 의견', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 문장 다섯을 사실·의견 바구니에 넣어 보이며 가르는 기준(확인할 수 있는가)을 짚는다.', base: '문장 여덟을 사실·의견으로 나누는 시연을 보고, 의견 문장마다 근거가 무엇이어야 하는지 말한다.', challenge: '의견 문장 하나를 골라 숨은 전제(예: 처벌이 세면 행동이 바뀐다)를 활동지에 쓴다.' },
        intro: {
          teacher: '"학교폭력을 다룬 가상 사설에서 뽑은 문장 여덟 개예요. 어떤 문장은 확인할 수 있는 사실이고, 어떤 문장은 쓴 사람의 의견이에요." 시연 단추로 문장이 사실·의견 바구니에 들어가는 모습을 보여 준다. "숫자가 없어도 단정적으로 쓰면 사실"이라는 말이 나오면 "\'처벌이 약해서 폭력이 끊이지 않는다\'는 어떻게 확인할 수 있을까요?"라고 되묻는다. 오늘은 처벌과 회복을 두고 토론하기 전에, 사실과 의견을 가르는 눈부터 맞춘다고 밝힌다.',
          student: '가상 사설 문장을 확인할 수 있는 사실과 쓴 사람의 의견으로 나누고, 의견 문장에는 어떤 근거가 필요할지 생각해 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['사실', '의견'], cards: mix([FACT, OPIN]) }, sequence: [{ sort: { 사실: FACT, 의견: OPIN } }] },
          art: { draw: 'a paper newspaper page spread on a desk, some sentences underlined with a straight ruler line and others circled with a wavy line, two small paper trays labeled with a checkmark and a speech bubble', banner: '확인할 수 있나요?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '사설은 가상이다. 실제 언론 기사를 띄울 때는 출처와 날짜를 함께 보인다.',
      }),
      M({
        id: 'intro.opinion-chart', type: 'intro', title: '집단마다 다른 생각',
        method: '처벌·회복 선호 가상 설문', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 두 집단(학생·보호자)의 막대 값을 함께 읽는다.', base: '세 집단의 막대를 읽고 \'회복 중심\' 응답이 가장 높은 집단을 고른다.', challenge: '집단마다 차이가 생긴 까닭을 두 가지 추론해 말한다.' },
        intro: {
          teacher: '"가상 설문이에요. \'학교폭력은 처벌 강화보다 회복 중심이 낫다\'에 동의한 비율을 학생·교사·보호자로 나눴어요. 어느 집단이 가장 높을까요?" 시연 단추로 가장 높은 막대가 골라지는 모습을 보여 준다. "학생이 높은 건 처벌받기 싫어서"라는 말이 나오면 "그럴 수도 있지만, 학생이 교실 분위기를 가장 가까이 겪어서일 수도 있어요. 이 자료만으로 까닭을 단정할 수 있을까요?"라고 되묻는다. 숫자는 차이를 보여 주지만 까닭은 따로 따져야 한다는 점을 짚는다.',
          student: '가상 설문에서 집단마다 \'회복 중심이 낫다\' 응답이 어떻게 다른지 읽고, 차이가 생긴 까닭을 생각해 보세요.',
          demo: { tool: 'chart', options: PREFBAR({ question: '\'회복 중심\' 응답이 가장 높은 집단은?', choices: PREF.map((x) => x[0]), showValues: true }), sequence: [{ pick: 0 }] },
          art: { draw: 'three paper figures of different heights standing behind three paper bars, a student, a teacher with a book and a parent with a bag, a balance scale cut from paper hanging above them', banner: '같은 질문, 다른 대답', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '수치는 수업용 가상 값이다(실제 조사 아님).',
      }),

      M({
        id: 'activity.debate', type: 'activity', title: '조치를 오래 기록에 남겨야 하나',
        method: '찬반 토론: 조치를 기록에 남겨야 하는가', tool: 'mindmap', minutes: 17,
        levels: { easy: '근거 카드를 찬성·반대 가지에 둘씩 바로 피드백을 받으며 나눈다.', base: '근거 카드를 찬성·반대·근거 약함 가지에 셋씩 나누고, 근거마다 반박을 짝짓는다.', challenge: '헷갈리는 카드가 더해진 판을 나누고, 양쪽 근거를 살린 중간안을 고른다.' },
        activity: {
          title: '조치 기록 찬반 지도', tool: 'mindmap',
          teacher: '"학교폭력 조치는 기록으로 남을 수 있어요. 오늘 논제는 \'조치를 오래 기록에 남겨야 한다\'예요. 몇 년, 어떤 조건 같은 세부 기준은 해마다 바뀔 수 있어 오늘은 다루지 않고, 기록이 남는다는 것의 의미를 따져요." 카드를 놓을 때마다 "이 근거는 누구를 지키나요? 피해 학생, 가해 학생, 학교 공동체?"라고 묻는다. "기록을 남기면 낙인이라 무조건 안 된다"와 "평생 남겨야 한다" 양쪽에 모두 "피해 학생의 안전과 가해 학생의 변화 가능성을 함께 볼 수 있는 안은 없을까요?"라고 되묻는다.',
          task: '근거 카드를 찬반 가지에 나누고 반박을 짝지은 뒤, 양쪽을 살린 중간안을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성(오래 남긴다)·반대(짧게 남긴다)·근거 약함 가지에 나누세요.', ['찬성(오래 남긴다)', '반대(짧게 남긴다)', '근거 약함'], [
              ['기록이 남는다는 것을 알면 행동을 조심하게 된다', '피해 학생이 다시 같은 학생을 만날 때 보호 근거가 된다', '책임이 가볍게 지나가지 않게 한다'],
              ['오래 남으면 달라질 기회를 막는 낙인이 될 수 있다', '바로잡고 달라진 노력도 함께 보아야 한다', '기록이 두려워 사실을 부인하는 일이 늘 수 있다'],
              ['다른 나라도 다 그렇게 한다더라', '잘못한 애는 원래 안 바뀐다'],
            ], { k: 2, hard: [['같은 행동이 되풀이되면 더 무겁게 볼 근거가 된다'], ['회복 노력을 하면 기록을 줄이는 길도 있다']], d: 0.35, opt: { topic: '조치 기록, 오래 남겨야 하나' } }),
            MATCHQ('근거마다 상대 쪽에서 나올 반박을 짝지으세요.', [['기록이 남는다는 것을 알면 행동을 조심하게 된다', '두려움만으로는 행동이 바뀌지 않고 부인이 늘 수 있다'], ['오래 남으면 달라질 기회를 막는 낙인이 될 수 있다', '피해 학생에게는 기록이 안전의 근거일 수 있다'], ['바로잡고 달라진 노력도 함께 보아야 한다', '노력은 말이 아니라 확인된 행동으로 보아야 한다']], { k: 2, extra: ['그냥 싫다'], d: 0.4, opt: { topic: '반박 짝짓기' }, more: { hints: ['그 근거가 지키려는 사람과, 그 근거가 놓치는 사람을 함께 떠올려 보세요.'] } }),
            PICKQ('양쪽 근거를 함께 살린 중간안만 고르세요.', ['기록은 남기되, 확인된 회복 노력을 함께 기록한다', '피해 학생 보호가 필요한 동안은 분명히 남긴다'], ['기록은 아예 없앤다', '어떤 경우에도 평생 남긴다'], { d: 0.4, opt: { basket: '중간안' }, more: { conclude: '처벌과 회복은 둘 중 하나가 아니에요. 피해 학생의 안전을 먼저 두고, 바로잡은 행동이 보이는 길을 함께 설계할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 중간안을 한 문장으로 쓰고, 그 안이 피해 학생을 어떻게 지키는지 쓰세요.' }] },
        notes: '조치가 기록으로 남을 수 있다는 점만 다룬다. 학교생활기록부 기재 기간·삭제 조건·조치 호수는 근거 파일에 없어 쓰지 않는다 — 교사가 최신 교육부 안내를 확인해 보충할 수 있다.',
      }),
      M({
        id: 'activity.outcome-dilemma', type: 'activity', title: '두 학교, 한 학기 뒤',
        method: '두 학교의 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '한 학교를 골라 갈림길 하나까지 따라가고 근거를 고른다.', base: '한 학교를 골라 갈림길 둘을 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋으로 한 학기 뒤까지 간 뒤, 다른 학교의 길도 끝까지 가 보고 두 방식을 결합한 안을 활동지에 설계한다.' },
        activity: {
          title: '두 학교 갈림길', tool: 'dilemma',
          teacher: '"같은 사안을 두 학교가 다르게 다뤄요. 한 곳은 처벌 중심, 한 곳은 회복 중심. 어느 쪽이 정답이라기보다, 각 학교 안에서 어떤 선택이 가람의 한 학기를 바꾸는지 따라가 봐요." 선택마다 \'한 학기 뒤\' 결과를 소리 내어 읽게 한다. 회복 학교에서 \'동의 없이 화해 자리\'를 고른 학생에게 "가람이 원하지 않는 자리에서 \'괜찮아\'라고 말하면 그건 회복일까요?"라고 묻는다. 처벌 학교에서 \'사안을 닫는다\'를 고른 학생에게는 "조치가 끝난 날 가람의 일상도 끝났을까요?"라고 묻는다. 어느 방식이든 피해 학생의 안전과 일상이 먼저라는 점을 짚는다.',
          task: '같은 사안을 다룬 두 학교의 갈림길을 따라 한 학기 뒤 결과(재발·관계·피해 학생 일상)를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('한 학교를 골라 사안을 따라가며 가람의 한 학기를 바꾸는 선택을 하고, 근거를 고르세요.', TWO, TWO_PATHS, TWO_R, ['victim', 'act'], { d: 0.4, opt: { title: '두 학교의 같은 사안' } }),
            EXPLOREQ('처벌 중심 학교와 회복 중심 학교의 길을 하나씩 끝까지 가 보고 결과를 견주세요.', TWO, TWO_R, ['두 학교의 끝 장면을 모두 확인했다', '재발·관계·가람의 일상을 견주었다'], { d: 0.35 }),
            DILQ('회복 대화 모임을 맡은 가상 진행자예요. 모임 직전 장면에서 알맞은 길을 고르고 근거를 고르세요.', { text: '회복 대화 모임 직전, 피해 학생 나래가 "아직 얼굴 보기는 힘들어요"라고 한다. 상대 학생 보호자는 "오늘 꼭 끝내자"고 재촉한다.', who: '진행자', motif: 'house', choices: [
              { id: 'push', text: '모두 모였으니 그대로 진행한다', result: '나래가 말을 잇지 못하고 모임 뒤 더 힘들어한다.', impact: [{ who: '나래', text: '또 한 번 부담을 진다', tone: -1 }], ending: '피해 학생의 준비보다 일정이 앞서면 회복이 아니다.' },
              { id: 'pause', text: '모임을 미루고 나래가 원하는 방식(사과 글 먼저 등)을 묻는다', result: '나래는 사과 글을 먼저 받아 보기로 한다.', impact: [{ who: '나래', text: '선택을 존중받는다', tone: 1 }],
                next: { text: '상대 학생 보호자가 "그럼 처벌로만 가겠다는 거냐"고 묻는다.', choices: [
                  { id: 'both', text: '"조치는 조치대로 진행되고, 회복은 나래가 준비될 때 이어 갑니다"라고 설명한다', result: '보호자가 수긍하고 사과 글을 먼저 쓰기로 한다.', impact: [{ who: '나래', text: '안전과 회복의 길이 함께 열린다', tone: 1 }], ending: '처벌과 회복은 함께 갈 수 있고, 속도는 피해 학생이 정한다.' },
                  { id: 'cancel', text: '"그럼 회복은 없던 일로 하죠"라고 끝낸다', result: '바로잡을 기회가 사라진다.', impact: [{ who: '나래', text: '사과받을 길이 막힌다', tone: 0 }], ending: '미루는 것과 없애는 것은 다르다.' }] } }] },
            [['pause', 'both']], [{ id: 'pace', text: '회복의 속도는 피해 학생이 정한다' }, { id: 'both', text: '조치와 회복은 함께 갈 수 있다' }, { id: 'today', text: '정한 날에 끝내는 것이 모두에게 좋다', why: '일정보다 피해 학생의 준비가 먼저예요. 억지 화해는 또 다른 상처가 돼요.' }], ['pace', 'both'], { d: 0.35, more: { conclude: '응보와 회복은 둘 중 하나가 아니라, 피해 학생의 안전을 중심에 두고 함께 설계할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 방식을 결합한 안을 설계하세요.', columns: ['단계', '처벌 중심에서 가져올 것', '회복 중심에서 가져올 것'], cells: [['사안 직후', '', ''], ['한 달 뒤', '', ''], ['한 학기 뒤', '', '']] }] },
        notes: '사안과 학교는 가상이다. 회복 대화는 피해 학생이 원할 때만, 상담 선생님 등 진행 경험이 있는 어른이 맡는다는 원칙을 지킨다.',
      }),
      M({
        id: 'activity.position-essay', type: 'activity', title: '처벌과 회복, 내 입장 글',
        method: '입장 글 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '세 문장 입장 글(주장·근거·피해 학생 관점)을 문장 틀을 보고 쓴다.', base: '다섯 문장 입장 글을 쓰고 기준표(주장·근거 둘·반론 인정·피해 학생 관점)로 점검한다.', challenge: '반대 입장 친구에게 던질 질문 하나를 덧붙여 기준 하나를 더 점검한다.' },
        activity: {
          title: '입장 글 쓰기', tool: 'rubric-writing',
          teacher: '"\'조치를 오래 기록에 남겨야 한다\'에 대한 내 입장을 써요. 찬성이든 반대든 중간안이든 좋아요. 점수는 편이 아니라 근거와 피해 학생 관점에서 나와요." 기준표를 먼저 함께 읽는다. 근거 없이 "당연하다"만 반복한 글에는 "반대쪽 친구가 이 글을 읽고 생각을 바꿀 문장은 어디일까요?"라고 묻는다. 입장 글에 실제 친구나 사건 이름을 쓰지 않게 한다.',
          task: '조치 기록 논제에 대한 내 입장 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('내 입장을 세 문장(주장·근거·피해 학생 관점)으로 쓰세요.', '"조치를 오래 기록에 남겨야 한다"에 대한 내 입장을 주장·근거·피해 학생 관점 세 문장으로 쓰세요.', ['주장이 분명하다', '근거가 하나 있다', '피해 학생 관점을 썼다'], { min: 50, max: 300, sent: [3, 3], starter: '나는 ~고 생각한다. 왜냐하면 ~. 피해 학생의 입장에서 보면 ~.', d: 0.3 }),
            RWQ('내 입장을 다섯 문장으로 쓰세요(주장·근거 둘·반론 인정·피해 학생 관점).', '"조치를 오래 기록에 남겨야 한다"에 대한 내 입장 글을 다섯 문장으로 쓰세요.', ['주장이 분명하다', '근거가 두 가지다', '반대쪽 근거를 인정하는 문장이 있다', '피해 학생 관점을 썼다'], { min: 100, max: 500, sent: [5, 6], must: [['피해 학생']], plus: '반대 입장 친구에게 던질 질문을 덧붙였다', d: 0.4,
              sample: '나는 조치 기록은 남기되 회복 노력도 함께 기록해야 한다고 생각한다. 첫째, 기록은 피해 학생이 다시 위험해질 때 보호의 근거가 된다. 둘째, 바로잡은 행동이 함께 남으면 달라질 동기가 생긴다. 물론 오래 남는 기록이 낙인이 될 수 있다는 걱정도 맞다. 그래도 피해 학생의 안전이 먼저이므로 기록을 없애기보다 변화를 함께 보이는 쪽이 낫다.', more: { conclude: '좋은 입장 글은 상대의 근거를 인정하면서도, 피해 학생의 자리에서 다시 따져 본 글이에요.' } }),
            DONEQ('반대 입장 친구와 글을 바꿔 읽고, 서로의 글에서 가장 설득력 있는 문장 하나를 골라 말해 주세요.', '반대 입장과 바꿔 읽기', '반대 입장 친구와 바꿔 읽어 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '반대 입장 친구에게 던질 질문 하나를 쓰세요.' }] },
      }),
      M({
        id: 'activity.balance-economy', type: 'activity', title: '가상 예산 100만 원 나누기',
        method: '자원 배분 토의', tool: 'economy', minutes: 18,
        levels: { easy: '항목 둘(감시 장비·상담 인력) 가운데 예산 안에서 고른다.', base: '항목 넷(감시 장비·상담 인력·회복 프로그램·교사 연수)을 예산 100만 원 안에서 고르고, 예산이 절반이 된 경우와 학생회 안도 고른다.', challenge: '항목이 여섯으로 늘고(학습 지원·현수막), 배분이 피해 학생 지원에 주는 영향을 활동지에 쓴다.' },
        activity: {
          title: '예방 예산 고르기', tool: 'economy',
          teacher: '"가상 학교의 학교폭력 예방 예산이 100만 원 있어요. 원래 계획의 \'100단위\'를 1단위 = 1만 원으로 바꿨어요. 감시 장비·상담 인력·회복 프로그램·교사 연수 가운데 무엇을 고를까요?" 고를 때마다 "이 항목은 폭력을 막는 쪽인가요, 피해 학생을 돕는 쪽인가요, 둘 다인가요?"라고 묻는다. 감시 장비만 고른 모둠에 "카메라가 단톡방 안의 조롱도 볼 수 있을까요?"라고 묻는다. 정답 배분은 없고, 오늘 문항의 조건(피해 학생 지원은 꼭)을 지키며 근거를 말하는 것이 목표라고 밝힌다.',
          task: '가상 예산 안에서 예방 항목을 고르고, 고른 근거를 활동지에 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '예산 100만 원. 피해 학생을 돕는 \'상담 인력 시간 늘리기\'는 꼭 넣고 예산 안에서 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: BUDGET }, target: { budget: { must: ['counsel'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '예산 100만 원. 두 항목 가운데 \'상담 인력 시간 늘리기\'는 꼭 넣고 예산 안에서 고르세요(항목 둘).', toolOptions: { items: BUDGET.slice(0, 2) } }, challenge: { prompt: '예산 100만 원. 항목이 여섯으로 늘었어요. \'상담 인력 시간 늘리기\'와 \'피해 학생 학습 지원\'은 꼭 넣고 예산 안에서 고르세요(항목 여섯).', toolOptions: { items: [...BUDGET, ...BUDGET_MORE] }, target: { budget: { must: ['counsel', 'study'] } } } } },
            { prompt: '예산이 50만 원으로 줄었어요. \'상담 인력 시간 늘리기\'는 꼭 넣고 예산 안에서 다시 고르세요.', toolOptions: { mode: 'budget', budget: 500000, items: BUDGET }, target: { budget: { must: ['counsel'] } }, difficulty: 0.35 },
            { prompt: '학생회 안: 상담 인력과 회복 대화 프로그램을 함께 넣고, 남는 돈으로 하나 더 골라 예산 100만 원 안에서 세 항목을 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: BUDGET }, target: { budget: { must: ['counsel', 'restore'], count: 3 } }, difficulty: 0.35,
              conclude: '예산은 가치의 순서를 보여 줘요. 막기와 돕기, 처벌과 회복 — 무엇을 먼저 두었는지 근거로 말할 수 있으면 좋은 배분이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠이 고른 배분과, 그 배분이 피해 학생 지원에 주는 영향을 두 문장으로 쓰세요.' }] },
        notes: '교구 한계: economy 는 돈(원)만 세어 체계도의 \'예산 100단위\'를 \'가상 예산 100만 원(1단위 = 1만 원)\'으로 바꾸었고, 금액을 나누는 대신 항목을 고르는 방식으로 배분한다. 가격은 수업용 예시다.',
      }),

      M({
        id: 'wrap.my-view-shift', type: 'wrap', title: '내 생각이 움직인 자리',
        method: '생각의 변화 기록', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 가상 학생의 첫 생각 카드를 먼저 놓아 보이고 나머지를 함께 놓는다.', base: '가상 학생의 생각 변화 카드 넷을 차례로 놓고, 내 생각의 변화(수업 전·토론 중·지금)를 활동지에 쓴다.', challenge: '여전히 궁금한 점 하나를 남긴다.' },
        wrap: {
          teacher: '"가상 학생 아로의 생각이 오늘 어떻게 움직였는지 먼저 차례로 놓아 봐요. 그다음 내 생각을 수업 전·토론 중·지금으로 적어요." 카드를 놓은 뒤 "아로의 생각을 바꾼 계기는 무엇이었나요? 자료였나요, 친구의 근거였나요?"라고 묻는다. 생각이 그대로인 학생에게 "그대로인 까닭도 근거예요. 무엇이 내 생각을 지켜 줬는지 써 봐요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['수업 전', '지금'], slots: 4, cards: ['두 방식을 함께 쓰는 안을 골랐다', '처벌을 세게 하면 된다고 생각했다', '피해 학생 일상이 먼저라는 근거를 들었다', '회복 학교의 한 학기 뒤 결과를 보았다'] }, prompt: '가상 학생 아로의 생각이 움직인 차례로 카드를 놓으세요.', target: { order: ['처벌을 세게 하면 된다고 생각했다', '회복 학교의 한 학기 뒤 결과를 보았다', '피해 학생 일상이 먼저라는 근거를 들었다', '두 방식을 함께 쓰는 안을 골랐다'] }, difficulty: 0.2 },
            { type: 'short', prompt: '내 입장이 수업 전과 지금 어떻게 달라졌는지(또는 그대로인지), 그 계기를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 생각의 변화',
          items: [
            { type: 'table', prompt: '내 입장을 시점마다 쓰세요.', columns: ['시점', '내 입장', '계기'], cells: [['수업 전', '', ''], ['토론 중', '', ''], ['지금', '', '']] },
            { type: 'short', prompt: '여전히 궁금한 점 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.summary-collage', type: 'wrap', title: '처벌과 회복 비교판 한 장',
        method: '두 접근 비교 한 장', tool: 'collage', minutes: 7,
        levels: { easy: '세로 접는 선 양쪽에 두 접근의 목적만 조각으로 나타낸다.', base: '두 접근의 목적·장점·한계가 양쪽에 드러나는 비교판을 꾸미고 점검한다.', challenge: '아래쪽에 우리 학교에 맞는 조합 칸을 더하도록 교사가 권하고 활동지에 문구를 쓴다.' },
        wrap: {
          teacher: '"오늘 비교한 두 접근을 한 장으로 정리해요. 접는 선 왼쪽은 처벌(응보), 오른쪽은 회복. 목적·장점·한계를 조각으로 나누어 놓고 문구는 활동지에 써요." 두세 작품을 보여 주며 "가운데 접는 선 위에 둘 수 있는 것은 무엇일까요?"라고 묻는다. 출구 고르기에서 \'회복적 접근은 봐주기\'를 고른 학생에게 나래의 모임 장면을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { guide: 'vertical', shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'leaf'] }, prompt: '접는 선 왼쪽(처벌)·오른쪽(회복)에 목적·장점·한계를 조각으로 나타내고 점검하세요.', target: { selfCheck: ['양쪽에 목적을 나타냈다', '양쪽에 장점과 한계를 나타냈다', '피해 학생을 가운데에 두었다'], minPieces: 4 }, difficulty: 0.2 },
            { type: 'choice', prompt: '처벌과 회복에 대한 말로 알맞은 것은?', options: ['처벌만 세면 폭력이 사라진다', '회복적 접근은 가해 학생을 봐주는 일이다', '두 접근 모두 피해 학생의 안전과 일상을 먼저 두어야 한다'], answer: 2, difficulty: 0.15, explain: '어느 방식이든 중심은 피해 학생의 안전과 회복이에요. 회복은 책임을 행동으로 지게 하는 방식이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '처벌과 회복 비교',
          items: [
            { type: 'table', prompt: '두 접근을 비교하세요.', columns: ['', '처벌(응보) 중심', '회복 중심'], cells: [['목적', '', ''], ['장점', '', ''], ['한계', '', '']] },
            { type: 'short', prompt: '우리 학교에 맞는 조합을 한 문장으로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 우리 학교 평화 헌장 초안 (10학년)
  // ======================================================================================================
  {
    const M = MOD('g10-charter', [10]);
    const RULE_OK = ['놀림을 보면 곁에 서고 선생님께 알린다', '단체 대화방에 남의 사진은 동의를 받고 올린다', '학급 회의에서 함께 정하고 학기마다 다시 본다'];
    const RULE_NG = ['친구와는 절대 다투지 않는다', '1학년은 선배 말을 무조건 따른다', '담임 선생님이 정한 벌칙을 그대로 따른다'];
    const VALUES = [['존중', 76], ['안전', 54], ['온라인 예절', 42], ['조력', 28]];
    const VBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '헌장에 꼭 넣고 싶은 가치(가상 전교생 설문, 가상 자료)', unit: '명', xLabel: '가치', yLabel: '고른 학생 수', data: VALUES }, more);
    // 채택 절차 판: 별 = 학급 의견·학생회 정리·공청회·채택, 깃발 = 점검(시작 칸 = 초안)
    const AD_BASE = { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], rocks: [[2, 0], [3, 0]] };
    const AD_EASY = { cols: 2, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 1, y: 2 }, stars: [[1, 0], [1, 1]], rocks: [] };
    const AD_HARD = { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 1], [4, 2], [5, 2]], rocks: [[3, 2], [2, 0]] };
    // 헌장이 시험받는 장면
    const TEST = { text: '헌장을 채택한 지 한 달, 반에서 인기 많은 준이 수업 시간마다 다의 말투를 흉내 내고 몇몇이 따라 웃는다. 헌장 3조는 "놀림을 보면 멈추자고 말하고 알린다"이다.', who: '나', motif: 'star', choices: [
      { id: 'laugh', text: '분위기를 깨기 싫어 같이 웃는다', result: '흉내가 쉬는 시간까지 이어진다.', impact: [{ who: '다', text: '반 전체가 등을 돌린 것처럼 느낀다', tone: -1 }], ending: '헌장이 있어도 지키지 않으면 종이 한 장이 된다.' },
      { id: 'stop', text: '"헌장 3조, 우리 그만하자"라고 가볍게 말한다', result: '몇 명이 웃음을 멈추지만 준이 "장난인데 왜 정색해?"라고 한다.', impact: [{ who: '다', text: '편이 하나 생긴다', tone: 1 }],
        next: { text: '쉬는 시간, 다가 혼자 앉아 있다. 준은 "헌장은 그냥 형식"이라고 말한다.', choices: [
          { id: 'tell', text: '다의 곁에 앉아 괜찮은지 묻고, 담임 선생님께 함께 알리자고 한다', result: '다가 고개를 끄덕이고 둘이 선생님을 찾아간다.', impact: [{ who: '다', text: '혼자가 아니라고 느낀다', tone: 1 }],
            next: { text: '선생님이 학급 회의에서 헌장 3조를 함께 다시 보자고 한다. 준을 탓하는 말이 쏟아질 것 같다.', choices: [
              { id: 'behavior', text: '"준을 탓하자는 게 아니라 흉내를 멈추자는 것"이라고 행동에 초점을 맞춘다', result: '준도 회의에서 흉내를 멈추겠다고 말한다.', impact: [{ who: '준', text: '낙인 없이 행동을 바꿀 길이 열린다', tone: 1 }, { who: '다', text: '교실이 다시 편해진다', tone: 1 }], ending: '헌장은 사람을 몰아내는 규칙이 아니라 행동을 멈추게 하는 약속이다.' },
              { id: 'blame', text: '"준은 원래 그런 애"라며 다 같이 몰아세운다', result: '준이 입을 닫고 반이 둘로 갈린다.', impact: [{ who: '준', text: '바꿀 기회 대신 낙인이 남는다', tone: -1 }], ending: '사람을 몰아세우면 행동은 바뀌지 않고 또 다른 배제가 생긴다.' }] } },
          { id: 'drop', text: '한 번 말했으니 됐다며 넘어간다', result: '흉내가 다음 주에 다시 시작된다.', impact: [{ who: '다', text: '또 혼자 견딘다', tone: -1 }], ending: '한 번의 말보다 이어지는 행동이 헌장을 살린다.' }] } },
      { id: 'later', text: '수업이 끝난 뒤 선생님께만 조용히 알린다', result: '선생님이 다를 따로 만나 살핀다.', impact: [{ who: '다', text: '도움이 닿는다', tone: 1 }], ending: '그 자리에서 말하기 어렵다면 알리는 것도 헌장을 지키는 길이다.' }] };
    const TEST_R = [{ id: 'equal', text: '헌장은 인기와 상관없이 모두에게 똑같이 적용된다' }, { id: 'act', text: '헌장은 사람이 아니라 행동을 멈추게 한다' }, { id: 'side', text: '놀림당한 친구 곁에 서는 것이 헌장의 시작이다' }, { id: 'pop', text: '인기 많은 학생이면 이번만 넘어가도 된다', why: '헌장이 사람에 따라 달라지면 아무도 지키지 않아요.' }];

    MODS.push(
      M({
        id: 'intro.rule-compare', type: 'intro', title: '좋은 규범과 고칠 규범',
        method: '좋은 규범과 나쁜 규범', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 규칙 카드 넷(좋은 것 둘·고칠 것 둘)만 바구니에 넣어 보이며 공정·실행 가능·참여 기준을 하나씩 짚는다.', base: '가상 학급 규칙 여섯 장이 좋은 규범·고칠 규범 바구니에 들어가는 시연을 보고 기준 셋으로 까닭을 말한다.', challenge: '\'고칠 규범\' 하나를 골라 공정하고 지킬 수 있는 문장으로 고쳐 말한다.' },
        intro: {
          teacher: '"규칙이 많으면 학교가 평화로워질까요?" 두세 명의 생각을 듣고 시연 단추로 가상 학급 규칙 여섯 장이 두 바구니에 나뉘는 모습을 보여 준다. 기준은 셋 — 모두에게 공정한가, 실제로 지킬 수 있는가, 함께 정했는가 — 이라고 칠판에 적는다. "선생님이 정해 주면 된다"는 말이 나오면 "내가 한 번도 의견을 내지 않은 규칙을 나는 얼마나 지키고 싶을까요?"라고 되묻는다. \'절대 다투지 않는다\'는 좋은 뜻이지만 지킬 수 없는 규칙이라는 점을 짚고, 오늘부터 우리 학교 평화 헌장 초안을 만든다고 밝힌다.',
          student: '가상 학급 규칙 카드를 보고 공정한가·지킬 수 있는가·함께 정했는가 세 기준으로 좋은 규범과 고칠 규범을 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['좋은 규범', '고칠 규범'], cards: mix([RULE_OK, RULE_NG]) }, sequence: [{ sort: { '좋은 규범': RULE_OK, '고칠 규범': RULE_NG } }] },
          art: { draw: 'a paper notice board with six small paper rule slips pinned on it, three tied with green paper ribbons and three marked with small paper pencils for rewriting, a paper scale balancing a group of tiny paper students', banner: '지킬 수 있는 약속이 힘이 세요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '규칙은 가상이다. 우리 반 실제 규칙을 평가하는 시간으로 바꾸지 않는다.',
      }),
      M({
        id: 'intro.charter-survey', type: 'intro', title: '헌장에 넣고 싶은 가치 설문',
        method: '헌장 우선순위 가상 설문', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 막대 둘(존중·안전)만 짚으며 값을 함께 읽는다.', base: '가치 네 막대를 읽고 헌장에 먼저 반영할 가치를 고르는 시연을 본다.', challenge: '가장 적게 고른 \'조력\'처럼 소수 의견을 헌장에 반영할 방법을 하나 제안한다.' },
        intro: {
          teacher: '"가상 전교생 설문이에요. 헌장에 꼭 넣고 싶은 가치를 하나씩 골랐어요. 가장 많이 고른 가치는 무엇인가요?" 시연 단추로 가장 큰 막대가 골라지는 모습을 보여 준다. "가장 많은 것만 넣으면 된다"는 말이 나오면 "조력을 고른 28명의 의견은 헌장에서 사라져도 될까요? 괴롭힘을 멈추는 데 조력은 어떤 자리일까요?"라고 되묻는다. 설문은 출발점이고, 헌장은 다수와 소수 의견을 함께 담아야 모두의 약속이 된다는 점을 짚는다.',
          student: '가상 설문 막대그래프에서 가장 많이 고른 가치를 찾고, 적게 고른 가치도 헌장에 담을 방법을 생각해 보세요.',
          demo: { tool: 'chart', options: VBAR({ question: '가장 많이 고른 가치는?', choices: VALUES.map((x) => x[0]), showValues: true }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart of four bars shaped like rolled scrolls standing on a school desk, a small paper ballot box beside it, a tiny paper hand placing one more slip on the shortest bar', banner: '모두의 목소리를 담아요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '설문은 수업용 가상 자료다. 실제 학교 설문을 하면 학생 개인을 알아볼 수 없게 모은다.',
      }),

      M({
        id: 'activity.charter-draft', type: 'activity', title: '평화 헌장 다섯 조항 쓰기',
        method: '헌장 초안 다섯 조항', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '세 조항·다섯 조항 문항 모두 문장 틀(조항 번호와 \'우리는 ~\')을 보며 쓴다.', base: '세 조항과 다섯 조항을 쓰고 행동으로 씀·모두에게 적용·지킬 수 있음·온라인 포함 기준표로 점검한다.', challenge: '다섯 조항마다 실천 확인 방법을 붙이는 기준이 하나 더 붙는다.' },
        activity: {
          title: '헌장 초안 쓰기', tool: 'rubric-writing',
          teacher: '"헌장 조항은 \'~하지 말자\'보다 \'~할 때 ~한다\'처럼 행동이 보이게 써요. 그리고 교실 밖, 단체 대화방에서도 통해야 해요." 기준표를 먼저 함께 읽는다. "서로 존중한다"처럼 막연한 조항에는 "존중하는 모습이 교실에서 어떻게 보이나요? 무엇을 하는 거죠?"라고 묻는다. "어기면 반성문 다섯 장"처럼 벌칙만 적은 조항이 나오면 "헌장은 벌을 정하는 문서일까요, 서로 지킬 행동을 정하는 문서일까요?"라고 되묻는다. 실제 학생 이름은 쓰지 않게 한다.',
          task: '우리 학교 평화 헌장 초안을 행동이 보이는 문장으로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('헌장 초안 세 조항을 세 문장으로 쓰세요(한 문장 = 한 조항).', '우리 학교 평화 헌장 초안 세 조항을 쓰세요.', ['행동이 보이는 문장이다', '학년·인기와 상관없이 모두에게 적용된다', '실제로 지킬 수 있다'], { min: 40, max: 300, sent: [3, 3], starter: '1. 우리는 ~할 때 ~한다. 2. 우리는 ~. 3. 우리는 ~.', d: 0.3 }),
            Object.assign(RWQ('헌장 초안을 다섯 조항으로 늘려 쓰세요. 한 조항은 단체 대화방·온라인에 대한 것이어야 해요.', '우리 학교 평화 헌장 초안 다섯 조항을 쓰세요(온라인 조항 하나 포함).', ['행동이 보이는 문장이다', '모두에게 적용된다', '지킬 수 있다', '온라인 공간 조항이 있다'], { min: 80, max: 500, sent: [5, 5], must: [['온라인', '대화방', '단톡방']], plus: '조항마다 실천을 확인할 방법을 붙였다', starter: '1. 우리는 ~ 2. 우리는 ~ 3. 우리는 ~ 4. 단체 대화방에서 우리는 ~ 5. 우리는 ~', d: 0.4,
              sample: '우리는 놀림을 보면 멈추자고 말하고 선생님께 알린다. 우리는 단체 대화방에 남의 사진을 올리기 전에 동의를 구한다. 우리는 모둠을 만들 때 아무도 빠지지 않게 한다. 우리는 선후배 사이에도 심부름을 강요하지 않는다. 우리는 학기마다 헌장을 함께 다시 읽고 고친다.' }), {}),
            RWQ('조항 하나를 골라, 그 조항을 지켰는지 확인하는 방법을 두 문장으로 쓰세요.', '고른 조항과 그 조항을 지켰는지 확인하는 방법을 쓰세요.', ['어느 조항인지 밝혔다', '확인 방법이 구체적이다', '누군가를 감시하는 방법이 아니다'], { min: 30, max: 250, sent: [2, 2], starter: '내가 고른 조항은 ~이다. 이 조항은 ~로 확인할 수 있다.', d: 0.35, more: { conclude: '좋은 헌장 조항은 행동이 보이고, 모두에게 같고, 지킬 수 있고, 지켰는지 함께 확인할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 쓴 헌장 조항을 기준표로 다시 보세요.', columns: ['조항', '행동이 보이나', '모두에게 같나', '지킬 수 있나'], cells: [['1', '', '', ''], ['2', '', '', ''], ['3', '', '', '']] }] },
        notes: '헌장 초안은 학생 제안이다. 실제 학교 규정으로 만드는 일은 학생회·학교 절차를 따른다.',
      }),
      M({
        id: 'activity.adoption-blocks', type: 'activity', title: '헌장 채택 절차를 블록으로',
        method: '헌장 채택 절차 설계', tool: 'block-coding', minutes: 18,
        levels: { easy: '단계 셋(초안 → 학급 의견 → 학생회 정리) 판에서 거북이를 깃발까지 보낸다.', base: '단계 여섯(초안·학급 의견·학생회 정리·공청회·채택·점검) 판에서 별을 모두 들러 깃발에 닿게 하고, 친구 계획을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '공청회 칸이 바위(반대 의견이 많음)로 막힌 판에서 \'다시 의견 듣기\' 별로 돌아가는 갈래를 만들고, 활동지에 그 까닭을 쓴다.' },
        activity: {
          title: '헌장 채택 절차 설계', tool: 'block-coding',
          teacher: '"거북이가 선 시작 칸이 ①초안이에요. 아랫줄 별 다섯은 차례대로 ②학급 의견 ③학생회 정리 ④공청회 ⑤채택 ⑥(마지막 줄 끝) 점검 준비이고, 깃발은 ⑦학기마다 점검하기예요. 위쪽 바위는 \'몇 명이 몰래 정하기\'·\'선생님이 대신 정하기\'예요." 실행할 때마다 "지금 거북이는 어느 단계를 지났나요? 빠진 사람은 없나요?"라고 묻는다. "공청회는 시간 낭비"라는 말이 나오면 "반대한 사람이 한 번도 말할 기회가 없었다면 그 헌장을 지키고 싶을까요?"라고 되묻는다. 판은 절차의 차례를 익히는 비유이고, 단계의 글은 활동지에 쓴다.',
          task: '별(채택 단계)을 모두 들러 깃발(점검)에 닿는 프로그램을 만들고, 절차를 활동지 표에 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('아랫줄 별(학급 의견·학생회 정리·공청회·채택·점검 준비)을 모두 들르고 바위(몰래 정하기)를 피해 깃발(학기마다 점검)에 닿게 하세요.', AD_BASE, { stars: true }, {
              easy: { prompt: '별 둘(학급 의견·학생회 정리)을 들러 깃발에 닿게 하세요(단계 셋).', board: AD_EASY, target: { stars: true } },
              challenge: { prompt: '공청회 칸이 바위(반대 의견이 많음)로 막혔어요. 위의 별(다시 의견 듣기)로 돌아가는 갈래를 지나 별을 모두 들르고 깃발에 닿게 하세요(갈래 판).', board: AD_HARD, target: { stars: true } },
              d: 0.35, more: { hints: ['별이 놓인 줄을 따라가다가 줄 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구의 계획: 반복 3번[앞으로 한 칸] → 왼쪽으로 돌기 → 앞으로 한 칸. 학생회 정리 뒤 공청회를 건너뛰고 꺾는 계획이에요. 거북이가 멈출 칸을 고르세요.', { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2]] }, ['rep:3', 'fwd', 'end', 'left', 'fwd'], { x: 3, y: 1 }, { d: 0.3, more: { conclude: '공청회를 건너뛰면 빨라 보여도 반대 목소리가 들리지 않은 헌장이 돼요.' } }),
            BCQ('이 프로그램은 채택 뒤에 엉뚱한 쪽으로 돌아 판 밖으로 나가요. 블록 하나만 고쳐 별을 모두 들르고 깃발(점검)에 닿게 하세요.', AD_BASE, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:5', 'fwd', 'end', 'right', 'rep:2', 'fwd', 'end'] }, conclude: '채택이 끝이 아니에요. 마지막 칸은 늘 \'다시 점검하기\'예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '헌장 채택 절차를 단계별로 쓰세요.', columns: ['단계', '누가', '무엇을'], cells: [['초안', '', ''], ['학급 의견', '', ''], ['학생회 정리', '', ''], ['공청회', '', ''], ['채택', '', ''], ['점검', '', ''], ['갈래: 반대가 많으면', '', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에 글을 붙일 수 없어 채택 단계를 시작 칸·별·깃발로 나타냈다. 실제 학교 규정 제·개정 절차는 학교마다 다르므로 교사가 학교 절차로 덧붙인다.',
      }),
      M({
        id: 'activity.charter-dilemma', type: 'activity', title: '헌장이 시험받는 교실',
        method: '헌장이 시험받는 장면', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋(학급 회의까지)을 따라가고, 다른 길도 끝까지 가 본 뒤 헌장 조항을 고쳐야 하는지 활동지에 근거를 쓴다.' },
        activity: {
          title: '헌장이 시험받는 장면', tool: 'dilemma',
          teacher: '"헌장을 만들 때는 모두 찬성했어요. 그런데 놀리는 사람이 반에서 인기 많은 친구라면 어떨까요?" 선택마다 다와 준에게 생긴 영향을 소리 내어 읽게 한다. \'같이 웃는다\'를 고른 학생에게 "그 웃음이 다에게는 어떤 소리로 들렸을까요?"라고 묻는다. 학급 회의 장면에서 \'다 같이 몰아세운다\'를 고르면 "헌장이 멈추려던 것은 준이라는 사람일까요, 흉내라는 행동일까요?"라고 되묻는다. 잘못한 행동은 멈추게 하되 사람에게 낙인을 찍지 않는다는 점을 짚는다.',
          task: '헌장이 시험받는 장면을 갈림길마다 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('헌장 3조가 시험받는 장면에서 선택을 이어 가고, 내 선택의 근거를 고르세요.', TEST, [['stop', 'tell', 'behavior']], TEST_R, ['equal', 'side'], { d: 0.4 }),
            EXPLOREQ('\'같이 웃는다\' 길과 \'다 같이 몰아세운다\' 길도 끝까지 가 보고 결과를 견주세요.', TEST, TEST_R, ['다른 길의 끝 장면을 확인했다', '다와 준에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('헌장 점검 회의에서 한 학생이 "인기 많은 애니까 이번만 넘어가자"고 해요. 알맞은 선택과 근거를 고르세요.', { text: '학기 말 헌장 점검 회의. 한 학생이 "준은 인기도 많고 반 분위기를 띄우니까 이번만 넘어가자"고 한다.', who: '나', motif: 'house', choices: [
              { id: 'same', text: '"헌장은 누구에게나 같아야 지켜진다"고 말한다', result: '회의가 다의 이야기를 다시 듣기로 한다.', impact: [{ who: '다', text: '내 일이 묻히지 않는다', tone: 1 }], ending: '헌장은 사람에 따라 달라지지 않을 때 힘이 생긴다.' },
              { id: 'pass', text: '분위기상 넘어가자는 쪽에 손을 든다', result: '헌장 3조가 회의록에서 사실상 빠진다.', impact: [{ who: '다', text: '헌장이 나를 지켜 주지 않는다고 느낀다', tone: -1 }], ending: '예외가 한 번 생기면 다음 예외는 더 쉬워진다.' }] },
            [['same']], TEST_R, ['equal'], { d: 0.3, more: { conclude: '헌장은 모두에게 같고, 사람이 아닌 행동을 멈추게 하고, 놀림당한 친구 곁에 서는 데서 시작해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 장면을 겪고 나니 헌장 3조를 고쳐야 할까요? 고친다면 어떻게, 고치지 않는다면 왜 그런지 근거와 함께 쓰세요.' }] },
        notes: '장면과 인물은 가상이다. 우리 반 실제 학생을 떠올리게 하는 이름·별명을 쓰지 않는다.',
      }),

      M({
        id: 'wrap.charter-poster', type: 'wrap', title: '헌장 게시판 한 장',
        method: '헌장 게시판 디자인', tool: 'collage', minutes: 7,
        levels: { easy: '조항 셋을 담을 자리(긴 네모 셋)만 붙여 게시판 틀을 만든다.', base: '조항 다섯 자리를 포함해 게시판을 꾸미고 점검 세 칸을 표시한다.', challenge: '교사가 권하면 \'의견 창구\'(QR 자리)를 뜻하는 네모 조각을 한쪽에 더한다.' },
        wrap: {
          teacher: '"초안을 복도에 붙인다면, 지나가는 1학년이 3초 만에 무엇을 읽게 될까요?" 조각으로 게시판 틀을 만든 뒤 두세 작품을 보여 주고 "이 게시판에서 의견을 낼 자리는 어디인가요?"라고 묻는다. 예쁘게 꾸미는 것보다 조항이 읽히고 의견을 받을 자리가 있는 것이 중요하다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'square', 'circle', 'heart', 'star', 'triangle'] }, prompt: '헌장 게시판을 조각으로 꾸미세요. 조항 자리는 긴 네모 조각 셋 이상으로 나타내고 점검을 표시하세요.', target: { has: [{ shape: 'rect', min: 3 }], selfCheck: ['조항을 읽을 자리를 만들었다', '모두가 할 행동을 나타냈다', '의견을 낼 자리를 생각했다'], minPieces: 4 }, difficulty: 0.2 },
            { type: 'choice', prompt: '헌장 게시판에 꼭 있어야 할 것으로 가장 알맞은 것은?', options: ['어긴 학생의 이름을 적는 칸', '조항과 의견을 낼 수 있는 창구', '헌장을 만든 학생회 사진'], answer: 1, difficulty: 0.15, explain: '헌장은 이름을 공개하는 곳이 아니라 함께 지키고 고치는 약속이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '헌장 게시판',
          items: [
            { type: 'short', prompt: '게시판 맨 위에 둘 헌장 조항 하나를 쓰세요.' },
            { type: 'short', prompt: '게시판을 본 학생이 의견을 낼 방법(의견 상자·학생회 창구 등)을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.role-pledge', type: 'wrap', title: '헌장에서 내가 맡을 역할',
        method: '내가 맡을 역할 한 줄', tool: 'wordcards', minutes: 7,
        levels: { easy: '역할 카드 넷과 하는 일을 짝지은 뒤 교사가 역할 하나를 고르게 한다.', base: '역할과 하는 일을 짝짓고, 고른 역할로 한 줄 다짐을 쓴다.', challenge: '다짐에 언제 할지(학기 초·축제 주간 등) 시기까지 붙인다.' },
        wrap: {
          teacher: '"헌장은 만든 날보다 그다음 날이 중요해요. 네 역할 가운데 내가 맡을 수 있는 것은 무엇일까요?" 짝짓기 뒤 고른 역할로 한 줄 다짐을 쓰게 한다. "나는 아무 역할도 못 한다"는 학생에게 "조력자는 큰일을 하는 사람이 아니라 놀림당한 친구 곁에 한 번 앉아 주는 사람이에요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '제안자', ko: '헌장을 고칠 점을 회의에 낸다' }, { en: '홍보', ko: '게시판·학급 안내로 헌장을 알린다' }, { en: '점검', ko: '학기마다 헌장이 지켜지는지 함께 살핀다' }, { en: '조력자', ko: '놀림당한 친구 곁에 서고 어른께 알린다' }] }, prompt: '헌장 역할 카드와 그 역할이 하는 일을 짝지으세요.', target: { match: { 제안자: '제안자', 홍보: '홍보', 점검: '점검', 조력자: '조력자' } }, difficulty: 0.2 },
            { type: 'short', prompt: '내가 맡을 역할 하나를 고르고 "나는 ___로서 ___하겠다"는 한 줄 다짐을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '헌장 속 나의 역할',
          items: [
            { type: 'check', prompt: '내가 맡을 수 있는 역할에 표시하세요.', options: ['제안자', '홍보', '점검', '조력자'] },
            { type: 'short', prompt: '그 역할을 언제부터, 어떻게 할지 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 7. 사이버·성 관련 폭력 — 디지털 성폭력과 성적 모욕 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-sexual-cyber', [11]);
    const MYTH = ['합성이니까 실제 피해는 아니다', '받기만 했으면 아무 문제가 없다', '사진을 올린 사람에게도 빌미가 있다'];
    const FACT = ['합성물도 피해자에게 실제 상처가 된다', '받은 것을 저장·전달하면 피해를 키운다', '잘못은 만들고 퍼뜨린 사람에게 있다'];
    const TREND = [['3년 전', 40], ['2년 전', 55], ['1년 전', 80], ['올해', 120]];
    const TLINE = (more = {}) => Object.assign({ type: 'line', mode: 'read', title: '디지털 성폭력 상담 건수(가상 지역 상담 창구, 가상 자료)', unit: '건', xLabel: '때', yLabel: '상담 건수', data: TREND }, more);
    // 학년 단체 대화방 장면 — 이미지는 보이지 않고 상황 글로만
    const ROOM = { text: '학년 단체 대화방에 처음 보는 계정이 "○반 은이 얼굴로 만든 사진"이라며 성적인 합성물 파일을 올렸다는 글이 떴다. 나는 파일을 열지 않았다.', who: '나', motif: 'cloud', choices: [
      { id: 'open', text: '정말인지 확인하려고 파일을 열어 본다', result: '열어 본 사람이 늘수록 은이를 향한 수군거림이 커진다.', impact: [{ who: '은', text: '보는 눈이 하나 더 늘어난다', tone: -1 }], ending: '확인하려고 여는 것도 피해를 보는 눈을 늘린다. 열지 않고 알린다.' },
      { id: 'save', text: '나중에 증거로 쓰려고 내 휴대폰에 저장한다', result: '저장한 파일이 내 휴대폰에 남아 또 퍼질 수 있는 길이 생긴다.', impact: [{ who: '은', text: '합성물이 퍼질 자리가 하나 더 생긴다', tone: -1 }], ending: '성적인 합성물은 학생이 저장하지 않는다. 증거는 학교와 수사기관이 다룬다.' },
      { id: 'record', text: '파일은 열지 않고, 올린 계정 이름·시각·대화방 이름만 적어 바로 담임 선생님께 알린다', result: '선생님이 학교 절차를 시작하고 은이 보호를 의논한다.', impact: [{ who: '은', text: '보호가 빨리 시작된다', tone: 1 }],
        next: { text: '올린 계정이 "장난이야, 곧 지울게"라고 쓴다. 대화방에는 "지운다니까 됐지?"라는 말이 오간다.', choices: [
          { id: 'wait', text: '지운다니 더 할 일은 없다고 여긴다', result: '원글은 지워졌지만 몇몇이 이미 받아 간 파일이 다른 방으로 옮겨 간다.', impact: [{ who: '은', text: '피해가 보이지 않는 곳으로 번진다', tone: -1 }], ending: '지운다는 말로 끝나지 않는다. 신고와 알림은 계속 이어 가야 한다.' },
          { id: 'flag', text: '대화방 신고 기능으로 신고하고, 선생님께 계정 이름이 바뀌었는지도 전한다', result: '학교가 플랫폼 신고·수사기관 신고를 함께 진행한다.', impact: [{ who: '은', text: '퍼진 곳까지 지우는 길이 열린다', tone: 1 }],
            next: { text: '다음 날, 친구가 "그 파일 봤어? 진짜 은이야?"라고 묻는다.', choices: [
              { id: 'halt', text: '"보지도 넘기지도 말자, 은이 이야기도 퍼뜨리지 말자"고 말한다', result: '친구가 더 묻지 않고 주변에도 그렇게 전한다.', impact: [{ who: '은', text: '소문의 고리가 끊긴다', tone: 1 }], ending: '보지 않기·넘기지 않기·말 옮기지 않기가 피해자를 지키는 세 가지다.' },
              { id: 'gossip', text: '아는 만큼 이야기해 준다', result: '추측이 사실처럼 돌기 시작한다.', impact: [{ who: '은', text: '두 번째 상처를 입는다', tone: -1 }], ending: '피해에 대한 말을 옮기는 것도 2차 피해가 된다.' }] } }] } },
      { id: 'leave', text: '보기 싫어서 대화방을 그냥 나간다', result: '나는 보지 않았지만 파일은 대화방에 그대로 남아 있다.', impact: [{ who: '은', text: '아무도 알리지 않은 채 피해가 이어진다', tone: -1 }], ending: '나가기만 하면 내 화면에서만 사라진다. 나가기 전에 알린다.' }] };
    const ROOM_R = [{ id: 'victim', text: '은이가 더 보이지 않고 퍼지지 않는 것이 가장 먼저다' }, { id: 'noview', text: '열지·저장하지·전달하지 않아야 피해가 커지지 않는다' }, { id: 'adult', text: '바로 믿을 어른에게 알려야 보호가 시작된다' }, { id: 'fake', text: '합성이라 진짜 피해는 아니다', why: '합성물도 피해자의 이름과 얼굴로 퍼져 실제 상처가 돼요.' }, { id: 'blame', text: '사진을 올려 둔 은이에게도 책임이 있다', why: '잘못은 만들고 퍼뜨린 사람에게 있어요. 피해자 탓은 2차 피해예요.' }];
    // 즉시 대응 판: 별 = 열지·저장·전달하지 않기 → 위치·시간·계정 기록 → 믿을 어른·학교에 알리기 → 플랫폼·수사기관 신고, 깃발 = 피해 학생 지원 연결
    const RF_BASE = { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 3, y: 3 }, stars: [[0, 1], [0, 2], [0, 3], [2, 3]], rocks: [[1, 1], [2, 1]] };
    const RF_EASY = { cols: 2, rows: 3, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 1, y: 2 }, stars: [[0, 1], [0, 2]], rocks: [] };
    const STEPS = ['열지·저장·전달하지 않기', '게시 위치·시각·계정 기록', '믿을 어른·학교에 바로 알리기', '플랫폼·수사기관 신고', '피해 학생 지원 연결'];

    MODS.push(
      M({
        id: 'intro.myth-check', type: 'intro', title: '디지털 성폭력, 흔한 오해 가리기',
        method: '흔한 오해 판정', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 카드 넷(오해 둘·사실 둘)만 바구니에 넣어 보이며 근거를 짚는다.', base: '오해·사실 카드 여섯 장이 나뉘는 시연을 보고 카드마다 근거를 한 마디씩 말한다.', challenge: '오해 카드 하나를 골라 그 오해가 피해자에게 주는 영향을 짝에게 말한다.' },
        intro: {
          teacher: '"얼굴을 합성한 성적인 이미지, 불법으로 찍은 영상을 퍼뜨리는 것, 성적으로 모욕하는 메시지 — 오늘은 이것을 디지털 성폭력이라 부르고, 학교폭력이면서 성폭력이라는 점을 함께 봐요." 시연 단추로 카드가 오해·사실 바구니에 나뉘는 모습을 보여 준다. "합성이니까 괜찮다"는 말이 나오면 "그 합성물에 붙은 이름과 얼굴은 누구의 것인가요? 그 사람은 내일 교실에 어떤 마음으로 올까요?"라고 되묻는다. 이 시간에는 누구의 경험도 묻지 않고, 장면은 모두 가상이며, 이미지는 보여 주지 않는다고 먼저 밝힌다.',
          student: '디지털 성폭력에 대한 카드를 오해와 사실로 나누어 보세요. 잘못은 누구에게 있는지, 피해가 어떻게 커지는지가 판단 근거예요.',
          demo: { tool: 'sortboard', options: { slots: ['오해', '사실'], cards: mix([MYTH, FACT]) }, sequence: [{ sort: { 오해: MYTH, 사실: FACT } }] },
          art: { draw: 'two paper baskets on a shelf labeled with a question mark and a check mark, small paper cards flying into them, a paper phone face down on the desk with a paper shield standing in front of it', banner: '오해를 걷어 내요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '이미지·영상은 어떤 형태로도 보여 주지 않는다. 학생에게 경험을 묻지 않는다. 성폭력 예방교육(성폭력방지법 제5조)과 함께 운영할 수 있다.',
      }),
      M({
        id: 'intro.trend-data', type: 'intro', title: '가상 상담 건수로 보는 변화',
        method: '디지털 성폭력 상담 추이 가상 자료', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 두 점(3년 전·올해)만 짚으며 값을 함께 읽는다.', base: '네 해 꺾은선을 읽고 상담이 가장 많은 때를 고르는 시연을 본다.', challenge: '늘어난 까닭을 두 가지(합성 도구가 쉬워짐·알리는 사람이 늘어남 등) 추론하고, 자료만으로는 가릴 수 없다는 점을 말한다.' },
        intro: {
          teacher: '"가상 지역 상담 창구의 디지털 성폭력 상담 건수예요. 실제 통계가 아니라 수업용 가상 자료예요. 선이 어느 쪽으로 가나요?" 시연 단추로 가장 높은 점이 골라지는 모습을 보여 준다. "상담이 늘었으니 피해도 그만큼 늘었다"는 말이 나오면 "알리는 사람이 늘어서 상담이 늘었을 수도 있지 않을까요? 그건 좋은 신호일까요, 나쁜 신호일까요?"라고 되묻는다. 상담이 늘었다는 것은 도움을 청하는 길이 있다는 뜻이기도 하다는 점을 짚는다.',
          student: '가상 상담 건수 꺾은선에서 상담이 가장 많은 때를 찾고, 늘어난 까닭을 두 가지 짐작해 보세요.',
          demo: { tool: 'chart', options: TLINE({ question: '상담이 가장 많은 때는?', choices: TREND.map((x) => x[0]), showValues: true }), sequence: [{ pick: 3 }] },
          art: { draw: 'a paper line chart climbing like a paper staircase on a classroom wall, a paper phone with a speech bubble shaped like a heart at the top step, a paper magnifying glass resting on the lowest step', banner: '숫자 뒤의 사람을 읽어요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 실제 통계를 쓰려면 공식 발표 자료로 바꾸고 출처를 밝힌다.',
      }),

      M({
        id: 'activity.response-dilemma', type: 'activity', title: '학년 대화방에 합성물 글이 떴을 때',
        method: '단톡방에 합성 성적 이미지가 올라왔을 때', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘(알림 → 지운다는 말)을 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋(다음 날 질문까지)을 따라가고, 피해자 보호 관점의 근거를 고른 뒤 다른 길과 견준다.' },
        activity: {
          title: '합성물 글 갈림길', tool: 'dilemma',
          teacher: '"이미지는 장면에 나오지 않아요. 상황 글만 읽어요. 학년 대화방에 은이 얼굴로 만든 성적인 합성물이라는 파일이 올라왔어요." 선택마다 은에게 생긴 영향을 소리 내어 읽게 한다. \'증거로 저장한다\'를 고른 학생에게 "성적인 합성물은 학생이 저장하지 않아요. 저장한 순간 내 휴대폰도 퍼질 수 있는 자리가 돼요. 대신 남길 것은 무엇일까요?"라고 묻고, 올린 계정·시각·대화방 이름이라는 점을 짚는다. 잘못은 만들고 올린 사람에게 있고, 알린 사람은 잘한 것이라고 분명히 말한다.',
          task: '합성물 글이 뜬 장면을 갈림길마다 따라가며 피해자 보호의 길을 찾고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('학년 대화방 장면에서 선택을 이어 가고, 피해자를 지키는 근거를 고르세요.', ROOM, [['record', 'flag', 'halt']], ROOM_R, ['victim', 'noview', 'adult'], { d: 0.4 }),
            EXPLOREQ('\'열어 본다\'·\'저장한다\' 길도 끝까지 가 보고, 은에게 생긴 영향을 견주세요.', ROOM, ROOM_R, ['다른 길의 끝 장면을 확인했다', '은에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('모르는 계정이 내게 개인 메시지로 "너희 반 애 사진"이라며 성적인 파일을 보냈어요. 알맞은 선택과 근거를 고르세요.', { text: '모르는 계정이 개인 메시지로 "너희 반 애 사진"이라며 성적인 파일을 보냈다. 아직 열지 않았다.', who: '나', motif: 'moon', choices: [
              { id: 'peek', text: '누구인지 알아보려고 열어 본다', result: '보는 눈이 하나 늘고, 보낸 계정은 다른 사람에게도 보낸다.', impact: [{ who: '사진 속 친구', text: '피해가 이어진다', tone: -1 }], ending: '열지 않아도 알릴 수 있다.' },
              { id: 'forward', text: '친구에게 "이거 누구야?"라며 넘긴다', result: '파일이 한 단계 더 퍼진다.', impact: [{ who: '사진 속 친구', text: '피해가 더 커진다', tone: -1 }], ending: '넘기는 것은 퍼뜨리는 것이다.' },
              { id: 'safe', text: '열지 않고 보낸 계정·시각을 적어 바로 믿을 어른에게 알린다', result: '어른과 함께 신고하고 보낸 계정을 막는다.', impact: [{ who: '사진 속 친구', text: '보호가 시작된다', tone: 1 }], ending: '보지 않고, 넘기지 않고, 바로 알린다.' }] },
            [['safe']], ROOM_R, ['noview', 'adult'], { d: 0.3, more: { conclude: '보지 않기·저장하지 않기·넘기지 않기, 그리고 계정·시각만 적어 바로 믿을 어른에게. 잘못은 만들고 퍼뜨린 사람에게 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이런 상황에서 \'남길 것\'(올린 계정·시각·대화방)과 \'남기지 않을 것\'(파일 자체)을 나누어 쓰세요.' }] },
        notes: '장면은 가상이며 이미지는 어떤 형태로도 보여 주지 않는다. 학생에게 경험을 묻지 않는다. 수업 중 걱정되는 반응이 보이면 상담 선생님·Wee 클래스로 개별 연결한다.',
      }),
      M({
        id: 'activity.report-flow', type: 'activity', title: '즉시 대응 흐름을 블록으로',
        method: '즉시 대응 흐름 설계', tool: 'block-coding', minutes: 18,
        levels: { easy: '단계 셋(열지 않기 → 기록 → 알리기) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯 판에서 별을 모두 들러 깃발(피해 학생 지원 연결)에 닿게 하고, 친구 계획을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 왼쪽)으로 같은 길을 만들고, 활동지에 \'피해 학생에게 먼저 동의를 구하는 갈래\'와 \'위급해서 바로 신고하는 갈래\'를 나누어 쓴다.' },
        activity: {
          title: '즉시 대응 흐름 설계', tool: 'block-coding',
          teacher: '"이번 판은 위에서 아래로 내려가요. 시작 칸이 ①열지·저장·전달하지 않기, 왼쪽 줄의 별 셋이 ②게시 위치·시각·계정 기록 ③믿을 어른·학교에 바로 알리기 ④(아래 칸) 플랫폼·수사기관 신고 준비, 아랫줄 별이 ⑤신고, 깃발이 ⑥피해 학생 지원 연결이에요. 바위는 \'저장하기\'·\'전달하기\'예요." 실행할 때마다 "지금 몇 번 단계를 지났나요?"라고 묻는다. "증거는 많을수록 좋으니 파일도 모아야 한다"는 말에는 "성적인 파일은 학생이 모으지 않아요. 남길 것은 계정·시각·위치예요"라고 바로잡는다. 신고·상담 번호는 학교가 확인해 활동지에 채운다.',
          task: '별(대응 단계)을 모두 들러 깃발(지원 연결)에 닿는 프로그램을 만들고, 흐름을 활동지에 글로 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷을 모두 들르고 바위(저장하기·전달하기)를 피해 깃발(피해 학생 지원 연결)에 닿게 하세요.', RF_BASE, { stars: true }, {
              easy: { prompt: '별 둘(기록·알리기)을 들러 깃발(신고)에 닿게 하세요(단계 셋).', board: RF_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 막혀서 도는 자리가 \'피해 학생의 뜻을 묻고 다음으로 가는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['왼쪽 줄을 따라 끝까지 내려간 뒤, 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구의 계획: 앞으로 한 칸 → 앞으로 한 칸 → 왼쪽으로 돌기 → 앞으로 한 칸. 기록 뒤 어른에게 알리기 전에 꺾는 계획이에요. 거북이가 멈출 칸을 고르세요.', { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 3, y: 3 }, stars: [[0, 1], [0, 2], [0, 3], [2, 3]] }, ['fwd', 'fwd', 'left', 'fwd'], { x: 1, y: 2 }, { d: 0.3, more: { conclude: '혼자 처리하려고 알리기를 건너뛰면 피해 학생 지원까지 닿지 못해요.' } }),
            BCQ('이 프로그램은 왼쪽 줄 끝에서 판 밖으로 돌아 나가요. 블록 하나만 고쳐 별을 모두 들르고 깃발에 닿게 하세요.', RF_BASE, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:3', 'fwd', 'end', 'right', 'rep:3', 'fwd', 'end'] }, conclude: '흐름의 한 칸이 틀리면 지원까지 닿지 못해요. 차례를 몸에 익혀 두면 당황한 순간에도 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '즉시 대응 흐름을 단계별로 쓰세요.', columns: ['단계', '할 일'], cells: [['①', STEPS[0]], ['②', ''], ['③', ''], ['④', ''], ['⑤', ''], ['동의를 구하는 갈래', ''], ['위급할 때 갈래', ''], ['신고·상담 번호', HELPNO]] }] },
        notes: '교구 한계: 블록에 글을 붙일 수 없어 대응 단계를 시작 칸·별·깃발로 나타냈다. 신고·상담 번호는 체계도 brief 대로 학교가 확인해 활동지에 채운다.',
      }),
      M({
        id: 'activity.secondary-harm', type: 'activity', title: '2차 피해 말을 지지하는 말로',
        method: '2차 피해 말과 지지 말', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '첫 문장(말 한 개 바꾸기)을 문장 틀을 보고 쓰고, 나머지 두 개는 짝과 말로 바꾼다.', base: '2차 피해 말 세 개를 지지하는 말로 바꿔 쓰고 탓하지 않음·사생활 보호·도움 연결 기준으로 점검한다.', challenge: '세 번째 말에 \'퍼뜨림을 막는 말\' 기준이 하나 더 붙는다.' },
        activity: {
          title: '지지하는 말', tool: 'rubric-writing',
          teacher: '"피해를 입은 친구에게 걱정한다며 건넨 말이 두 번째 상처가 되기도 해요. 이것을 2차 피해라고 해요." 세 말을 칠판에 적고 무엇이 문제인지 먼저 묻는다. "왜 그런 사진을 올렸어"를 고친 글에 "근데"·"다음엔 조심해"가 남아 있으면 "그 말을 들은 친구는 누구 잘못이라고 느낄까요?"라고 되묻는다. 지지하는 말은 캐묻지 않고, 탓하지 않고, 선택을 친구에게 맡기며, 도움 길을 함께 알려 준다는 점을 짚는다. 실제 친구 이름은 쓰지 않는다.',
          task: '2차 피해가 되는 말 세 개를 지지하는 말로 바꿔 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('"왜 그런 사진을 올렸어?"를 지지하는 말로 바꿔 쓰세요(1~2문장).', '"왜 그런 사진을 올렸어?" → 지지하는 말로', ['친구를 탓하지 않는다', '친구 마음을 알아준다', '잘못한 사람이 누구인지 분명하다'], { min: 20, max: 200, sent: [1, 2], starter: '네 잘못이 아니야. ~', d: 0.3 }),
            RWQ('"그거 진짜 너야? 나한테만 말해 봐."를 지지하는 말로 바꿔 쓰세요(1~2문장).', '"그거 진짜 너야? 나한테만 말해 봐." → 지지하는 말로', ['캐묻지 않는다', '사생활을 지켜 준다', '말하고 싶을 때 들어 주겠다고 한다'], { min: 20, max: 200, sent: [1, 2], d: 0.35 }),
            RWQ('"그냥 조용히 넘어가는 게 너한테 낫지 않아?"를 지지하는 말로 바꿔 쓰세요(2~3문장).', '"그냥 조용히 넘어가는 게 너한테 낫지 않아?" → 지지하는 말로', ['친구의 선택을 존중한다', '혼자 두지 않겠다고 한다', '담임·상담 선생님 같은 도움 길을 알려 준다'], { min: 30, max: 300, sent: [2, 3], must: [['선생님', 'Wee', '어른']], plus: '퍼뜨림을 막겠다는 말(보지도 넘기지도 않기)이 있다', d: 0.4,
              sample: '어떻게 할지는 네가 정해도 돼, 나는 네 편이야. 혼자 견디지 않게 상담 선생님께 같이 가 줄게. 나는 그 파일을 보지도 넘기지도 않을게.', more: { conclude: '지지하는 말은 캐묻지 않고, 탓하지 않고, 선택을 맡기고, 도움 길을 함께 열어 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '2차 피해 말과 지지하는 말을 견주어 정리하세요.', columns: ['2차 피해 말', '무엇이 문제인가', '바꾼 말'], cells: [['왜 그런 사진을 올렸어?', '', ''], ['진짜 너야? 나한테만 말해 봐', '', ''], ['조용히 넘어가는 게 낫지 않아?', '', '']] }] },
      }),
      M({
        id: 'activity.campaign-design', type: 'activity', title: '보지도 넘기지도 않는 캠페인',
        method: '디지털 성폭력 예방 캠페인 설계', tool: 'collage', minutes: 18,
        levels: { easy: '핵심 메시지 카드 한 장(조각 셋 이상)을 꾸미고, 행동 카드는 별 하나로 행동 하나를 나타낸다.', base: '메시지 카드·행동 셋(별 셋)·피해자 지지 문구 자리(하트)를 차례로 꾸미고 점검한다.', challenge: '마지막 카드에 배포 경로와 시기를 나타낼 조각을 더하고 점검 항목이 하나 더 붙는다.' },
        activity: {
          title: '캠페인 카드 꾸미기', tool: 'collage',
          teacher: '"우리 학년 캠페인을 설계해요. 누구에게(대상), 무엇을(핵심 메시지), 어떻게(행동 셋), 그리고 피해자에게 건넬 한마디까지요. 노골적인 이미지나 피해 장면은 넣지 않아요." 카드를 하나씩 꾸미게 하고 문구는 활동지에 쓰게 한다. 무서운 그림으로 겁주려는 학생에게 "겁을 주는 캠페인과 행동을 알려 주는 캠페인 가운데 어느 쪽이 \'넘기지 않기\'를 더 하게 만들까요?"라고 묻는다. 피해자를 탓하는 문구(조심하자, 올리지 말자)는 쓰지 않고 행동의 주인을 \'보는 사람·받는 사람\'으로 둔다는 점을 짚는다.',
          task: '디지털 성폭력 예방 캠페인 카드를 조각으로 꾸미고, 문구는 활동지에 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '캠페인 첫 카드(핵심 메시지)를 조각으로 꾸미고 점검을 표시하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, target: { selfCheck: ['대상(우리 학년)을 정했다', '핵심 메시지 자리를 만들었다', '피해 장면·노골적 그림이 없다'], minPieces: 3 }, difficulty: 0.2 },
            { prompt: '둘째 카드: 행동 셋(보지 않기·넘기지 않기·바로 알리기)을 별 조각 셋으로 나타내세요.', toolOptions: { shapes: ['star', 'circle', 'rect', 'heart'] }, target: { has: [{ shape: 'star', min: 3 }], selfCheck: ['행동 셋을 별로 나타냈다', '행동의 주인이 보는 사람·받는 사람이다'], minPieces: 3 }, difficulty: 0.25,
              levels: { easy: { prompt: '둘째 카드: 가장 중요한 행동 하나를 별 조각으로 나타내세요(행동 하나).', target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['행동 하나를 별로 나타냈다'], minPieces: 1 } } } },
            { prompt: '셋째 카드: 피해자에게 건넬 지지 문구 자리를 하트 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['heart', 'circle', 'rect', 'square', 'star'] }, target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['지지 문구 자리를 만들었다', '피해자를 탓하는 내용이 없다'], minPieces: 2 }, difficulty: 0.25,
              levels: { challenge: { prompt: '셋째 카드: 지지 문구 자리(하트)와 배포 경로·시기를 나타낼 조각을 넣고 점검하세요(배포 계획).', target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['지지 문구 자리를 만들었다', '피해자를 탓하는 내용이 없다', '배포 경로와 시기를 정했다'], minPieces: 3 } } },
              conclude: '좋은 캠페인은 겁주기보다 할 행동을 알려 주고, 피해자 곁에 서는 말을 남겨요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '캠페인 설계를 정리하세요.', columns: ['칸', '내 계획'], cells: [['대상', ''], ['핵심 메시지', ''], ['행동 셋', ''], ['피해자 지지 문구', ''], ['배포 경로·시기', '']] }] },
        notes: '캠페인에는 노골적 이미지·피해 장면·피해자 탓 문구를 쓰지 않는다. 실제 게시 전에 담당 교사가 문구를 함께 본다.',
      }),

      M({
        id: 'wrap.law-concept', type: 'wrap', title: '법과 학교 절차, 신고 길 정리',
        method: '관련 법과 학교 절차 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(학교폭력예방법·성폭력방지법)에 카드 한 장씩을 함께 놓는다.', base: '가지 넷(학교 절차·예방교육·플랫폼 신고·수사기관 신고)에 카드를 나눈다.', challenge: '가지마다 누구를 지키는지 한 마디씩 덧붙여 짝에게 말한다.' },
        wrap: {
          teacher: '"오늘 나온 길을 법과 절차로 정리해요. 학교폭력예방법은 학교가 할 일을, 성폭력방지법 제5조는 이런 예방교육을 하도록 정해요. 그리고 플랫폼 신고와 수사기관 신고가 있어요." 카드를 나눈 뒤 \'피해자가 참으면 해결된다\'가 왜 남는지 묻는다. 형량은 다루지 않는다. "몇 년 받아요?"라는 질문에는 "오늘은 숫자보다 누가 무엇을 하는 길인지가 중요해요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '디지털 성폭력, 누가 무엇을', slots: ['학교폭력예방법(학교 절차)', '성폭력방지법(예방교육)', '플랫폼 신고', '수사기관 신고'], cards: ['학교가 접수해 피해 학생을 보호하고 조치를 정한다', '학교가 해마다 성폭력 예방교육을 한다', '게시물 삭제와 계정 제재를 요청한다', '만들고 퍼뜨린 사람의 책임을 수사로 묻는다', '피해자가 참으면 해결된다'] }, prompt: '카드를 법·절차 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { '학교폭력예방법(학교 절차)': ['학교가 접수해 피해 학생을 보호하고 조치를 정한다'], '성폭력방지법(예방교육)': ['학교가 해마다 성폭력 예방교육을 한다'], '플랫폼 신고': ['게시물 삭제와 계정 제재를 요청한다'], '수사기관 신고': ['만들고 퍼뜨린 사람의 책임을 수사로 묻는다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '디지털 성폭력에 대한 말로 알맞은 것은?', options: ['합성물은 진짜가 아니라 학교폭력이 아니다', '학교폭력이면서 성폭력이고, 바로 어른과 신고로 잇는다', '받기만 한 사람은 저장해 둬도 된다'], answer: 1, difficulty: 0.2, explain: '합성물도 실제 피해를 낳아요. 받은 사람은 열지·저장하지·전달하지 않고 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '법과 절차 정리',
          items: [
            { type: 'table', prompt: '길마다 하는 일을 쓰세요.', columns: ['길', '하는 일'], cells: [['학교 절차', ''], ['플랫폼 신고', ''], ['수사기관 신고', '']] },
            { type: 'short', prompt: `신고·상담 번호를 학교에서 확인해 적으세요: ${HELPNO}` },
          ],
        },
      }),
      M({
        id: 'wrap.pledge', type: 'wrap', title: '"보지도, 넘기지도 않는다" 1분 되짚기',
        method: '"보지도, 넘기지도 않는다" 성찰', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 앞 세 단계 카드를 몸짓 신호와 함께 먼저 놓아 보이고 나머지를 함께 놓는다.', base: '1분 타이머를 맞추고 대응 다섯 단계 카드를 차례로 놓으며 몸짓 신호로 되짚는다.', challenge: '되짚은 뒤 친구에게 전할 한 문장을 말한다.' },
        wrap: {
          teacher: '"1분 동안 오늘의 다섯 단계를 몸으로 되짚어요. 손바닥 펴기는 \'열지 않기\', 손가락 접기는 \'기록\', 손 들기는 \'알리기\'…" 타이머를 60초로 맞추고 카드를 차례로 놓게 한다. \'기록\'보다 \'신고\'를 앞에 두는 학생에게 "무엇을 신고할지 남겨 둔 것이 있어야 신고가 빨라져요. 그리고 신고는 어른과 함께예요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '1분 되짚기', plan: { work: 30, rest: 0, rounds: 1 }, cards: [STEPS[3], STEPS[1], STEPS[4], STEPS[0], STEPS[2]] }, prompt: '타이머를 1분(60초) 한 번으로 맞추고, 대응 다섯 단계 카드를 차례로 놓으세요.', target: { plan: { work: 60, rounds: 1 }, order: STEPS }, difficulty: 0.2 },
            { type: 'short', prompt: '"보지도, 넘기지도 않는다"를 친구에게 전할 한 문장으로 바꿔 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '보지도, 넘기지도 않는다',
          items: [
            { type: 'check', prompt: '받은 사람이 하지 않을 일에 표시하세요.', options: ['열어 보기', '저장하기', '다른 사람에게 넘기기', '말 옮기기'] },
            { type: 'short', prompt: '받은 사람이 바로 할 일 하나를 쓰세요.' },
          ],
        },
        notes: '몸짓 신호는 교실에서 함께 정한다. 학생의 실제 휴대폰을 꺼내게 하지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 8. 박제 계정과 신상 공개 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-doxxing', [11]);
    const JUSTICE = { text: '학교 이름을 단 익명 계정이 같은 학년 솔의 1학년 때 글과 사진을 모아 "참교육"이라는 말과 함께 올렸다. 댓글에는 솔의 반과 동아리까지 적히기 시작했다.', who: '나', motif: 'cloud', choices: [
      { id: 'share', text: '"속 시원하다"며 좋아요를 누르고 공유한다', result: '게시물이 다른 학교 계정에까지 퍼진다.', impact: [{ who: '솔', text: '학교 밖에서도 알아보는 사람이 생긴다', tone: -1 }, { who: '솔의 가족', text: '집으로 연락이 오기 시작한다', tone: -1 }], ending: '공유 한 번이 사적 제재에 힘을 보탠다.' },
      { id: 'scroll', text: '보기만 하고 넘긴다', result: '댓글이 계속 늘고 솔의 다른 계정까지 찾아진다.', impact: [{ who: '솔', text: '아무도 멈추지 않는다고 느낀다', tone: -1 }], ending: '보고 넘기는 동안에도 신상은 모인다.' },
      { id: 'report', text: '공유하지 않고 개인정보 노출로 신고한 뒤 담임 선생님께 알린다', result: '선생님이 학교 절차를 시작하고 계정 신고를 함께 진행한다.', impact: [{ who: '솔', text: '퍼짐을 멈출 길이 생긴다', tone: 1 }],
        next: { text: '친구가 "솔이 예전에 잘못한 건 사실이잖아. 당해도 싸"라고 한다.', choices: [
          { id: 'process', text: '"잘못이 있었다면 학교 절차로 다룰 일이지, 계정이 벌을 주는 건 아니야"라고 말한다', result: '친구가 공유를 멈추고 다른 친구들에게도 그렇게 전한다.', impact: [{ who: '솔', text: '사람이 아니라 절차가 판단할 기회가 생긴다', tone: 1 }], ending: '잘못을 다루는 것은 공적 절차이고, 신상을 터는 것은 또 다른 폭력이다.' },
          { id: 'agree', text: '"그건 그렇지"라며 맞장구친다', result: '신고는 했지만 반 안에서 솔을 향한 말이 더 거세진다.', impact: [{ who: '솔', text: '학교에 오기 어려워진다', tone: -1 }], ending: '잘못이 사실이어도 사적 제재는 정당해지지 않는다.' }] } }] };
    const JUSTICE_R = [{ id: 'public', text: '잘못은 공적 절차가 다루고, 개인이나 계정이 벌을 주지 않는다' }, { id: 'family', text: '신상 공개는 당사자와 가족에게 오래 남는 피해를 준다' }, { id: 'true', text: '사실이면 공개해도 된다', why: '사실이어도 신상을 모아 공개하면 사적 제재이자 또 다른 폭력이 돼요.' }];
    const PIECES = { 학교: ['교복 마크가 보이는 셀카', '체육복에 적힌 학교 이름'], 동네: ['버스 정류장 이름이 보이는 사진', '창밖 아파트 이름이 보이는 사진'], 다니는곳: ['학원 간판이 비친 유리창', '매주 같은 시각 체육관 인증'] };
    const HOURS = [['1시간', 12], ['3시간', 45], ['6시간', 130], ['12시간', 160], ['24시간', 165]];
    const HLINE = (more = {}) => Object.assign({ type: 'line', mode: 'read', title: '박제 게시물 댓글 수(가상 사례, 가상 자료)', unit: '개', xLabel: '올린 뒤', yLabel: '댓글 수', data: HOURS }, more);
    const TONE = [['비난', 55], ['조롱', 30], ['옹호', 15]];
    // 대응 판: 시작 = 화면 기록, 별 = 플랫폼 신고(개인정보 노출) → 학교에 알리기 → 당사자 지원 → 확산 계정 신고 준비, 깃발 = 확산 계정 신고
    const RB_BASE = { cols: 5, rows: 5, start: { x: 2, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[2, 3], [2, 2], [2, 1], [2, 0]], rocks: [[1, 2], [3, 2]] };
    const RB_EASY = { cols: 3, rows: 3, start: { x: 1, y: 2, dir: 'N' }, goal: { x: 2, y: 0 }, stars: [[1, 1], [1, 0]], rocks: [] };

    MODS.push(
      M({
        id: 'intro.justice-dilemma', type: 'intro', title: '"참교육" 계정의 첫 게시물',
        method: '"정의 구현" 계정의 첫 게시물', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길 두 갈래(공유·신고)만 함께 걸어 솔과 가족에게 생긴 결과를 비교한다.', base: '시연에서 갈림길 둘(신고 → 친구의 말)을 따라가 결과를 보고 근거 카드를 고른다.', challenge: '사적 제재와 공적 절차의 차이를 근거 카드로 고르고 한 문장으로 말한다.' },
        intro: {
          teacher: '"\'참교육\', \'정의 구현\'이라는 이름을 단 계정을 본 적이 있나요? 본 적이 있는지만 손으로 표시해요. 무엇을 봤는지는 말하지 않아도 돼요." 시연 단추로 \'공유한다\' 길과 \'신고한다\' 길을 따라가 솔과 가족에게 생긴 결과를 보여 준다. "잘못한 애면 당해도 싸다"는 말이 나오면 "잘못이 사실인지, 어떤 벌이 맞는지 정하는 것은 누구의 몫일까요? 계정 운영자일까요?"라고 되묻는다. 오늘은 잘못을 덮자는 것이 아니라, 잘못을 다루는 바른 길을 찾는 시간이라고 밝힌다.',
          student: '익명 계정이 한 학생의 과거 글과 사진을 모아 올린 장면에서 내 반응을 고르고, 그 학생과 가족에게 생긴 결과를 보세요.',
          demo: { tool: 'dilemma', options: { scene: JUSTICE, reasons: JUSTICE_R, title: '"참교육" 계정' }, sequence: [{ path: ['report', 'process'], reasons: ['public', 'family'] }] },
          art: { draw: 'a paper phone showing a profile page plastered with pinned paper notes and thumbtacks, a paper gavel lying unused on the side, a paper door marked with a school bell glowing softly in the background', banner: '벌은 계정이 아니라 절차가', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면과 계정은 가상이다. 실제 계정·게시물 이름을 띄우지 않는다. 학생에게 무엇을 보았는지 말하게 하지 않는다.',
      }),
      M({
        id: 'intro.info-trace', type: 'intro', title: '흩어진 정보가 모이면',
        method: '흩어진 정보가 모이면', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 조각 셋(교복·정류장·학원 간판)만 가지에 놓으며 신상이 드러나는 과정을 보인다.', base: '게시물 조각 여섯 장이 학교·동네·다니는 곳 가지에 모이는 시연을 본다.', challenge: '어느 조각을 지우거나 가리면 신상이 이어지지 않는지 찾아 말한다.' },
        intro: {
          teacher: '"가상 학생 하가 1년 동안 올린 공개 게시물 조각이에요. 하나하나는 평범해요. 그런데 이것들이 모이면 어떻게 될까요?" 시연 단추로 조각이 학교·동네·다니는 곳 가지에 모이는 모습을 보여 준다. "나는 얼굴만 안 올리면 괜찮다"는 말이 나오면 "얼굴 없이도 이 지도로 하가 매주 어디에 있는지 알 수 있을까요?"라고 되묻는다. 박제 계정은 이렇게 흩어진 조각을 모아 신상을 공개한다는 점을 짚는다.',
          student: '가상 학생 하의 공개 게시물 조각이 학교·동네·다니는 곳으로 모이는 과정을 보고, 어느 조각이 신상을 드러내는지 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '하의 공개 게시물 조각', slots: ['다니는 학교', '사는 동네', '자주 가는 곳'], cards: mix([PIECES.학교, PIECES.동네, PIECES.다니는곳]) }, sequence: [{ sort: { '다니는 학교': PIECES.학교, '사는 동네': PIECES.동네, '자주 가는 곳': PIECES.다니는곳 } }] },
          art: { draw: 'scattered paper photo cards of a school badge, a bus stop sign and a cram school signboard being pulled together by paper strings into a small paper map pin, a paper hand holding scissors ready to cut one string', banner: '조각이 모이면 지도가 돼요', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '하는 가상 인물이다. 학생의 실제 게시물을 찾아보거나 띄우지 않는다.',
      }),

      M({
        id: 'activity.harm-chart', type: 'activity', title: '박제 뒤 늘어나는 댓글 자료',
        method: '박제 뒤 반응 증가 자료', tool: 'chart', minutes: 17,
        levels: { easy: '꺾은선과 원그래프에 값이 보이는 채로 읽는다.', base: '시간별 댓글 수 꺾은선과 댓글 성격 원그래프를 읽고, 표 빈칸을 채우고, 늘어남이 멈춘 까닭을 고른다.', challenge: '값을 숨긴 그래프를 읽고, 활동지에 확산을 멈춘 요인을 두 가지 추론해 쓴다.' },
        activity: {
          title: '박제 게시물 반응 자료', tool: 'chart',
          teacher: '"가상 박제 게시물이 올라온 뒤 하루 동안 달린 댓글 수와 그 성격이에요." 꺾은선을 먼저 읽게 하고 "가장 가파른 구간에 무슨 일이 있었을까요?"라고 묻는다. "옹호 댓글도 있으니 공평하다"는 말이 나오면 "100개 가운데 15개의 옹호가 85개의 비난·조롱 속에서 솔에게 얼마나 들릴까요?"라고 되묻는다. 늘어남이 멈춘 지점에서는 신고와 공유 멈추기처럼 사람들의 행동이 숫자를 바꾼다는 점을 짚는다.',
          task: '가상 박제 게시물의 댓글 그래프를 읽고, 확산이 커진 때와 멈춘 까닭을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '댓글 수 꺾은선에서 앞 시점보다 댓글이 가장 크게 늘어난 때를 고르세요.', toolOptions: HLINE({ question: '가장 크게 늘어난 때는?', choices: HOURS.map((x) => x[0]) }), target: { pick: 2 }, difficulty: 0.3 },
            { prompt: '댓글 성격 원그래프에서 옹호 댓글이 차지하는 비율을 고르세요.', toolOptions: { type: 'circle', mode: 'read', title: '박제 게시물 댓글 성격(가상 자료)', unit: '%', data: TONE, question: '옹호 댓글의 비율은?', choices: ['15%', '30%', '55%'] }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '꺾은선을 읽고 표의 빈칸(12시간 뒤 댓글 수)을 채우세요.', toolOptions: HLINE({ showTable: true, tableBlanks: [3] }), target: { table: true }, difficulty: 0.25 },
            { prompt: '12시간 뒤부터 댓글이 거의 늘지 않았어요. 가장 그럴듯한 까닭을 고르세요.', toolOptions: HLINE({ question: '늘어남이 멈춘 까닭은?', choices: ['신고로 계정이 막히고 여럿이 공유를 멈췄다', '박제가 정당해서 할 말이 없어졌다', '솔이 해명 글을 올려서'], why: ['', '숫자가 멈춘 것이 박제가 옳았다는 뜻은 아니에요.', '피해자에게 해명할 책임을 지우는 것은 2차 피해예요.'] }), target: { pick: 0 }, difficulty: 0.3,
              conclude: '확산은 공유하는 손들이 만들고, 멈춤은 신고하고 공유를 멈춘 손들이 만들어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '확산을 멈추게 한 요인 두 가지를 그래프를 근거로 쓰세요.' }] },
        notes: '그래프는 수업용 가상 자료다. 실제 계정·게시물의 수치를 쓰지 않는다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '고발 목적이면 공개해도 되나',
        method: '찬반 토론: 고발 목적이라면 공개해도 되는가', tool: 'sortboard', minutes: 18,
        levels: { easy: '근거 카드를 바구니마다 두 장씩 나누고, 틀린 바구니에 넣으면 바로 되돌아온다.', base: '근거 카드를 찬성·반대·근거 약함으로 나누고, 반박 카드를 어느 쪽 근거를 향한 것인지 나누고, 공적 절차와 사적 제재를 가린다.', challenge: '헷갈리는 근거 카드가 더해지고, 활동지에 공적 절차로 문제를 다룰 대안을 쓴다.' },
        activity: {
          title: '공개 찬반 근거 나누기', tool: 'sortboard',
          teacher: '"\'잘못을 고발하려는 목적이라면 이름과 신상을 공개해도 된다.\' 편을 정하기 전에 양쪽의 가장 센 근거부터 찾아요." 카드를 놓을 때마다 "이 근거는 확인할 수 있나요, 기분인가요?"라고 묻는다. 찬성 쪽 학생에게 "공개한 내용이 오인이었다면, 그 학생의 이름은 어떻게 되돌릴 수 있을까요?"라고, 반대 쪽 학생에게 "절차가 너무 느려 피해가 이어진다면 무엇을 바꿔야 할까요?"라고 묻는다. 결론은 \'잘못을 알리는 길\'과 \'사람을 공개 처벌하는 길\'이 다르다는 데서 찾는다.',
          task: '근거·반박 카드를 바구니에 나누고, 공적 절차와 사적 제재를 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('근거 카드를 찬성(공개해도 된다)·반대(공개하면 안 된다)·근거 약함 바구니에 나누세요.', ['찬성(공개해도 된다)', '반대(공개하면 안 된다)', '근거 약함'], [
              ['학교가 모르는 잘못을 알릴 수 있다', '피해자가 직접 말하기 어려울 때가 있다', '공개되면 비슷한 잘못이 줄 수 있다'],
              ['오인이면 죄 없는 사람이 공격받는다', '신상은 잘못과 상관없이 오래 남는다', '벌은 계정이 아니라 절차가 정한다'],
              ['다들 속 시원해한다', '그 학생은 원래 평판이 나쁘다'],
            ], { k: 2, hard: [['알리는 사람이 보복을 피할 수 있다'], ['가족까지 공격받을 수 있다'], ['조회수가 많이 나온다']], d: 0.35 }),
            SBQ('반박 카드가 어느 쪽 근거를 향한 것인지 나누세요.', ['찬성 근거에 대한 반박', '반대 근거에 대한 반박'], [
              ['알리는 일은 신상 공개 없이 학교·신고 창구로도 된다', '공개의 효과는 두려움일 뿐 행동 변화가 아니다'],
              ['절차가 느리면 그동안 피해가 이어질 수 있다', '사실을 확인한 뒤라면 오인은 줄일 수 있다'],
            ], { k: 1, d: 0.4, more: { hints: ['카드가 \'공개해도 된다\'는 쪽의 말을 꺾는지, \'안 된다\'는 쪽의 말을 꺾는지 보세요.'] } }),
            SBQ('행동 카드를 공적 절차와 사적 제재로 나누세요.', ['공적 절차', '사적 제재'], [
              ['기록을 남겨 담임 선생님께 알린다', '플랫폼에 개인정보 노출로 신고한다', '학교폭력 신고·상담 창구에 상담한다'],
              ['이름과 학교를 붙여 박제한다', '집 주소를 찾아 올린다', '여럿이 몰려가 댓글을 단다'],
            ], { k: 2, d: 0.25, more: { conclude: '잘못을 알리는 것은 필요해요. 그 길은 절차이고, 사람을 공개 처벌하는 것은 또 다른 폭력이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '고발하고 싶은 잘못이 있을 때, 신상 공개 대신 쓸 수 있는 공적 절차 대안을 두 가지 쓰세요.' }] },
        notes: '근거는 수업용으로 고른 것이다. 실제 사건·인물을 예로 들지 않는다.',
      }),
      M({
        id: 'activity.chat-rules', type: 'activity', title: '단체 대화방 운영 규칙 만들기',
        method: '단체 대화방 운영 규칙 설계', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '규칙 셋을 문장 틀을 보며 쓴다.', base: '규칙 셋과 규칙 다섯을 쓰고, 방장 역할을 두 문장으로 쓴 뒤 기준표로 점검한다.', challenge: '규칙 다섯에 \'규칙을 어겼을 때 절차\' 기준이 하나 더 붙는다.' },
        activity: {
          title: '대화방 운영 규칙', tool: 'rubric-writing',
          teacher: '"갈등이 생기면 단체 대화방은 박제가 시작되는 곳이 되기도 해요. 우리 학급·동아리 방이 갈등 때 쓸 규칙을 미리 만들어요." 예로 캡처 공유 금지·개인 정보 금지·갈등은 개인 대화나 선생님과·방장의 역할을 칠판에 적는다. "규칙이 있으면 아무도 말을 못 한다"는 걱정에는 "규칙은 말을 막으려는 게 아니라, 누가 표적이 되지 않게 하려는 거예요"라고 답한다. 방장을 \'벌주는 사람\'으로 쓴 글에는 "방장이 할 일은 처벌일까요, 멈추고 잇는 일일까요?"라고 묻는다.',
          task: '학급·동아리 단체 대화방이 갈등 때 쓸 운영 규칙을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('갈등이 생겼을 때 지킬 대화방 규칙 셋을 세 문장으로 쓰세요.', '우리 단체 대화방 규칙 셋(갈등이 생겼을 때)', ['캡처 공유에 대한 규칙이 있다', '개인 정보에 대한 규칙이 있다', '누구에게나 같은 규칙이다'], { min: 40, max: 300, sent: [3, 3], must: [['캡처']], starter: '1. 우리 방에서는 ~ 캡처를 ~. 2. ~ 3. ~', d: 0.3 }),
            RWQ('규칙을 다섯으로 늘려 쓰세요. 갈등은 어디서 이야기할지도 넣어요.', '우리 단체 대화방 규칙 다섯', ['캡처·개인 정보 규칙이 있다', '갈등은 개인 대화나 선생님과 다룬다', '모두가 지킬 수 있다', '누군가를 망신 주는 내용이 없다'], { min: 80, max: 500, sent: [5, 5], plus: '규칙을 어겼을 때 절차(멈춤 요청 → 선생님께 알림)를 썼다', d: 0.4,
              sample: '우리 방에서는 다른 사람과의 대화를 캡처해 올리지 않는다. 이름·학교·사는 곳 같은 개인 정보는 올리지 않는다. 갈등은 방에서 다투지 않고 개인 대화나 선생님과 이야기한다. 누군가를 놀리는 글이 올라오면 바로 멈추자고 말한다. 규칙은 학기마다 함께 다시 본다.' }),
            RWQ('방장이 할 일을 두 문장으로 쓰세요.', '우리 방 방장의 역할', ['멈추게 하는 역할이 있다', '선생님이나 믿을 어른에게 잇는 역할이 있다', '방장이 혼자 벌을 주지 않는다'], { min: 30, max: 250, sent: [2, 2], starter: '방장은 ~할 때 ~한다. 그리고 ~에게 알린다.', d: 0.35, more: { conclude: '좋은 대화방 규칙은 갈등을 없애지 못해도, 누구도 박제의 표적이 되지 않게 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 규칙 가운데 가장 지키기 어려울 것 같은 하나와, 지키게 도울 방법을 쓰세요.' }] },
      }),
      M({
        id: 'activity.response-blocks', type: 'activity', title: '박제·신상 공개 대응을 블록으로',
        method: '박제·신상 공개 대응 절차', tool: 'block-coding', minutes: 18,
        levels: { easy: '단계 셋(기록 → 플랫폼 신고 → 학교에 알리기) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯 판에서 별을 모두 들러 깃발(확산 계정 신고)에 닿게 하고, 친구 계획을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 오른쪽)으로 같은 길을 만들고, 활동지에 \'당사자가 원하지 않을 때의 갈래\'를 쓴다.' },
        activity: {
          title: '박제 대응 절차 설계', tool: 'block-coding',
          teacher: '"이번 판은 아래에서 위로 올라가요. 시작 칸이 ①화면 기록(계정·시각·주소), 세로줄 별 넷이 ②개인정보 노출로 플랫폼 신고 ③학교에 알리기 ④당사자 지원(당사자 뜻 묻기) ⑤확산 계정 목록 정리, 깃발이 ⑥확산 계정 신고예요. 양옆 바위는 \'박제 계정에 맞대응 댓글\'·\'운영자 신상 털기\'예요." 실행할 때마다 지금 단계를 묻는다. "운영자를 찾아서 똑같이 해 주자"는 말이 나오면 "그러면 우리도 박제 계정과 같은 일을 하는 게 아닐까요?"라고 되묻는다. 신고·상담 번호는 학교가 확인해 활동지에 채운다.',
          task: '별(대응 단계)을 모두 들러 깃발에 닿는 프로그램을 만들고, 절차를 활동지에 글로 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('세로줄 별 넷을 모두 들르고 바위(맞대응 댓글·신상 털기)를 피해 깃발(확산 계정 신고)에 닿게 하세요.', RB_BASE, { stars: true }, {
              easy: { prompt: '별 둘(플랫폼 신고·학교에 알리기)을 들러 깃발에 닿게 하세요(단계 셋).', board: RB_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 오른쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 막혀서 도는 자리가 \'당사자가 원하지 않으면 뜻을 다시 묻고 방향을 바꾸는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['세로줄을 따라 맨 위까지 올라간 뒤 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구의 계획: 앞으로 한 칸 → 앞으로 한 칸 → 오른쪽으로 돌기 → 앞으로 한 칸. 학교에 알린 뒤 당사자 지원을 건너뛰고 꺾는 계획이에요. 거북이가 멈출 칸을 고르세요.', { cols: 5, rows: 5, start: { x: 2, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[2, 3], [2, 2], [2, 1], [2, 0]] }, ['fwd', 'fwd', 'right', 'fwd'], { x: 3, y: 2 }, { d: 0.3, more: { conclude: '신고만 하고 당사자를 혼자 두면, 게시물은 사라져도 상처는 남아요.' } }),
            BCQ('이 프로그램은 맨 위에서 깃발 반대쪽으로 돌아요. 블록 하나만 고쳐 별을 모두 들르고 깃발에 닿게 하세요.', RB_BASE, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:4', 'fwd', 'end', 'left', 'rep:2', 'fwd', 'end'] }, conclude: '마지막 칸은 퍼 나른 계정까지 신고해 확산을 끊는 일이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '박제·신상 공개 대응 절차를 단계별로 쓰세요.', columns: ['단계', '할 일'], cells: [['①', '화면 기록(계정·시각·주소)'], ['②', ''], ['③', ''], ['④', ''], ['⑤', ''], ['당사자가 원하지 않을 때', ''], ['신고·상담 번호', HELPNO]] }] },
        notes: '교구 한계: 블록에 글을 붙일 수 없어 대응 단계를 시작 칸·별·깃발로 나타냈다. 당사자 지원 단계에서는 당사자의 뜻을 먼저 묻는다.',
      }),

      M({
        id: 'wrap.principle', type: 'wrap', title: '남의 정보를 올리기 전 나의 원칙',
        method: '나의 공개 원칙 성찰 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 문장 틀(나는 ~하기 전에 ~한다)을 칠판에 적고 두 문장으로 쓰게 한다.', base: '남의 정보를 올리기 전 지킬 원칙을 세 문장으로 쓰고 기준표로 점검한다.', challenge: '원칙에 예외가 있는지(위급한 안전 문제 등) 따져 보고, 그때도 공개가 아니라 알리기로 간다는 문장을 더한다.' },
        wrap: {
          teacher: '"오늘 본 박제는 누군가의 \'올려도 되겠지\'에서 시작했어요. 나는 남의 사진·글·정보를 올리기 전에 무엇을 지킬까요?" 세 문장으로 쓰게 한 뒤 두세 명의 원칙을 듣는다. "잘못한 사람 정보는 예외"라고 쓴 학생에게 "그 예외를 누가 정하나요? 오늘 본 계정도 그렇게 생각했어요"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '남의 사진·글·정보를 올리기 전에 내가 지킬 원칙을 세 문장으로 쓰세요.', minChars: 40, maxChars: 300, starter: '나는 남의 정보를 올리기 전에 ~.' }, prompt: '남의 정보를 올리기 전 지킬 나의 원칙을 세 문장으로 쓰고 기준표를 점검하세요.', target: { selfCheck: ['동의를 구한다는 원칙이 있다', '모아 올리지 않는다는 원칙이 있다', '내가 실제로 지킬 수 있다'], sentences: [3, 3] }, difficulty: 0.25 },
            { type: 'choice', prompt: '박제·신상 공개에 대한 말로 알맞은 것은?', options: ['사실이면 공개해도 괜찮다', '잘못이 있어도 신상 공개는 사적 제재가 되고, 잘못은 절차로 다룬다', '익명 계정이 올리면 책임이 없다'], answer: 1, difficulty: 0.2, explain: '잘못을 다루는 것은 공적 절차예요. 신상을 모아 공개하면 또 다른 폭력이 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 공개 원칙',
          items: [
            { type: 'short', prompt: '내 원칙 가운데 가장 지키기 어려울 순간과 그때 할 행동을 쓰세요.' },
            { type: 'check', prompt: '올리기 전에 확인할 것에 표시하세요.', options: ['그 사람이 동의했나', '학교·동네가 드러나지 않나', '여러 조각을 모은 것은 아닌가', '조회수가 잘 나올까'] },
          ],
        },
      }),
      M({
        id: 'wrap.privacy-poster', type: 'wrap', title: '신상 보호 안내 카드',
        method: '신상 보호 안내 카드', tool: 'collage', minutes: 7,
        levels: { easy: '올리지 말 정보 둘을 조각으로 나타낸다.', base: '올리지 말 정보 셋(동그라미 셋)과 대응 하나(별)를 담은 카드를 꾸민다.', challenge: '교사가 권하면 대응 경로(믿을 어른·신고 창구)를 나타낼 조각을 한 줄 더 넣는다.' },
        wrap: {
          teacher: '"친구들에게 공유할 신상 보호 카드를 만들어요. 올리지 말 정보 셋은 동그라미로, 신상이 퍼졌을 때 할 대응 하나는 별로 나타내요." 문구는 활동지에 쓰게 한다. 카드 두세 장을 보여 주고 "이 카드를 본 친구는 내일 무엇을 다르게 할까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star', 'rect', 'square', 'heart'] }, prompt: '올리지 말 정보 셋(동그라미)과 대응 하나(별)를 담은 신상 보호 카드를 꾸미고 점검하세요.', target: { has: [{ shape: 'circle', min: 3 }, { shape: 'star', min: 1 }], selfCheck: ['올리지 말 정보 셋을 정했다', '대응 하나를 넣었다'], minPieces: 4 }, difficulty: 0.2 },
            { type: 'choice', prompt: '신상이 퍼진 친구를 위해 가장 먼저 할 일은?', options: ['퍼 나른 계정의 신상도 찾아 올린다', '공유를 멈추고 신고한 뒤 믿을 어른에게 알린다', '친구에게 계정을 모두 지우라고만 한다'], answer: 1, difficulty: 0.15, explain: '맞대응은 또 다른 박제가 돼요. 멈추고, 신고하고, 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '신상 보호 카드',
          items: [
            { type: 'short', prompt: '카드에 넣을 \'올리지 말 정보\' 셋을 쓰세요.' },
            { type: 'short', prompt: `신상이 퍼졌을 때의 대응 하나와 도움 받을 곳을 쓰세요(${HELPNO}).` },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 9. 하나의 사건, 여러 책임 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-legal-responsibility', [11]);
    const THREE = {
      '학교 절차': ['피해 학생 보호와 가해 학생 조치를 정한다', '사과·교육으로 행동을 바로잡게 돕는다'],
      민사: ['치료비·상담비 같은 손해를 돈으로 갚게 한다', '손해가 얼마인지 따져 배상을 정한다'],
      형사: ['수사기관이 범죄가 되는지 살핀다', '법원이 처벌 여부를 정한다'],
    };
    const MYTH = {
      맞음: ['한 사건에서 여러 책임이 따로 생길 수 있다', '학교 절차의 목적에는 피해 학생 보호가 있다'],
      틀림: ['합의하면 모든 책임이 없어진다', '학교에서 조치를 받으면 다른 책임은 없다'],
      조건: ['학생은 형사 책임을 지지 않는다', '보호자가 손해를 배상할 수도 있다'],
    };
    // 가상 사안: 단체 대화방 지속 모욕과 금품 요구(태 → 린)
    const CASE = { text: '가상 사안: 태가 몇 주 동안 단체 대화방에서 린을 모욕하고 기프티콘을 보내라고 요구했다. 린의 신고로 학교가 사안을 접수했다. 태의 선택부터 따라가 보자.', who: '태', motif: 'house', choices: [
      { id: 'admit', text: '잘못을 인정하고 사과와 바로잡기를 하겠다고 한다', result: '학교 절차가 이어지고, 태는 받은 기프티콘을 돌려주겠다고 한다.', impact: [{ who: '린', text: '잘못이 인정되어 조금 숨을 돌린다', tone: 1 }],
        next: { text: '린의 보호자가 상담 비용을 이야기한다. 태의 보호자는 "학교 일이 끝나면 다 끝나는 것 아니냐"고 한다.', choices: [
          { id: 'both', text: '학교 조치와 따로 손해를 갚을 책임도 있을 수 있다고 보호자와 함께 듣는다', result: '보호자끼리 손해를 갚는 방법을 의논하기 시작한다.', impact: [{ who: '린', text: '입은 손해가 인정된다', tone: 1 }],
            next: { text: '한 학기 뒤, 린이 담임 선생님께 "아직 단체 대화방 알림이 오면 무섭다"고 말했다.', choices: [
              { id: 'keep', text: '태는 접촉하지 않기 약속과 상담을 이어 가고, 학교는 린의 지원을 이어 간다', result: '린의 일상이 천천히 돌아오고 같은 일은 되풀이되지 않는다.', impact: [{ who: '린', text: '회복이 이어진다', tone: 1 }, { who: '태', text: '책임을 지며 달라질 길을 걷는다', tone: 1 }], ending: '책임은 조치 한 번이 아니라 피해 학생이 회복할 때까지 이어진다.' },
              { id: 'contact', text: '태가 "다 끝났으니 한 번 더 사과할게"라며 린에게 직접 연락한다', result: '린이 다시 알림에 놀라 학교에 알린다.', impact: [{ who: '린', text: '원하지 않는 접촉에 다시 흔들린다', tone: -1 }], ending: '사과도 피해 학생이 원할 때, 정해진 길로 해야 회복이 된다.' }] } },
          { id: 'only', text: '"학교 조치만 받으면 된다"며 손해 이야기는 듣지 않는다', result: '보호자 사이 갈등이 커지고 법적 다툼으로 이어진다.', impact: [{ who: '린', text: '회복이 길어진다', tone: -1 }], ending: '학교의 조치를 받아도 다른 책임이 사라지지는 않는다.' }] } },
      { id: 'deny', text: '그런 적 없다고 부인한다', result: '대화 기록과 목격 진술로 사실이 확인된다.', impact: [{ who: '린', text: '확인을 기다리며 불안이 길어진다', tone: -1 }],
        next: { text: '사실이 확인되었다. 태는 이제 무엇을 할까.', choices: [
          { id: 'late', text: '이제라도 인정하고 사과·바로잡기를 시작한다', result: '늦었지만 회복을 위한 절차가 시작된다.', impact: [{ who: '린', text: '조금 늦게 회복이 시작된다', tone: 0 }], ending: '부인한 시간만큼 회복이 늦어졌다.' },
          { id: 'still', text: '끝까지 부인한다', result: '조치는 정해지고, 보호자 사이 다툼도 길어진다.', impact: [{ who: '린', text: '사과받지 못한 채 남는다', tone: -1 }], ending: '부인해도 책임은 사라지지 않고 회복만 멀어진다.' }] } },
      { id: 'settle', text: '보호자끼리 합의했으니 학교는 빠져 달라고 한다', result: '합의는 기록되지만, 학교는 린이 안전한지와 지원을 계속 살핀다.', impact: [{ who: '린', text: '보호는 이어진다', tone: 0 }], ending: '합의가 있어도 피해 학생 보호와 다른 책임이 모두 사라지지는 않는다.' }] };
    const CASE_R = [{ id: 'many', text: '학교 조치·손해 배상·형사 책임은 따로 생길 수 있다' }, { id: 'recover', text: '책임은 피해 학생이 회복할 때까지 이어진다' }, { id: 'protect', text: '학교 절차의 목적은 피해 학생 보호와 행동 바로잡기다' }, { id: 'over', text: '합의하면 모든 책임이 없어진다', why: '합의가 있어도 학교 절차와 다른 책임이 모두 사라지지는 않아요.' }, { id: 'kid', text: '학생이니 아무 책임이 없다', why: '학생이어도 학교 조치와 손해 배상 등 책임이 생길 수 있어요.' }];
    // 학교 절차 판: 시작 = 신고·접수, 별 = 보호(분리 등) → 사안 조사 → 학교 자체 해결 또는 교육지원청 심의 → 조치·지원 → 이행 점검 준비, 깃발 = 이행 점검
    const PR_BASE = { cols: 6, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 5, y: 3 }, stars: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]], rocks: [[2, 2], [4, 2]] };
    const PR_EASY = { cols: 3, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 2, y: 1 }, stars: [[1, 0], [2, 0]], rocks: [] };
    const CASES = [['3년 전', 120], ['2년 전', 135], ['올해', 150]];
    const TYPES = [['신체', 25], ['언어', 25], ['사이버', 35], ['따돌림', 15]];
    const CYBER = [['3년 전', 20], ['2년 전', 27], ['올해', 35]];

    MODS.push(
      M({
        id: 'intro.one-case-three', type: 'intro', title: '한 사건에서 생기는 세 갈래',
        method: '한 사건에서 생기는 세 갈래', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 갈래 둘(학교 절차·민사)에 카드 한 장씩을 놓으며 뜻을 짚는다.', base: '가상 사안 하나에서 학교 절차·민사·형사 세 갈래로 카드가 나뉘는 시연을 본다.', challenge: '갈래마다 목적(교육·배상·처벌)을 한 낱말로 붙여 말한다.' },
        intro: {
          teacher: '"가상 사안이에요. 몇 주 동안 단체 대화방에서 한 학생을 모욕하고 기프티콘을 요구했어요. 이 한 사건에서 책임은 몇 갈래로 생길까요?" 시연 단추로 카드가 학교 절차·민사·형사 가지에 나뉘는 모습을 보여 준다. "학교에서 조치받으면 끝"이라는 말이 나오면 "학교 조치가 린이 입은 상담 비용을 갚아 줄까요?"라고 되묻는다. 이 시간에 형량 숫자는 다루지 않고, 각 갈래가 무엇을 하는 길인지만 본다고 밝힌다.',
          student: '가상 사안 하나에서 생길 수 있는 책임을 학교 절차·민사·형사 세 갈래로 나누어 보세요. 각 갈래가 무엇을 하는지가 판단 근거예요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '단체 대화방 모욕과 금품 요구(가상)', slots: ['학교 절차', '민사', '형사'], cards: mix([THREE['학교 절차'], THREE.민사, THREE.형사]) }, sequence: [{ sort: THREE }] },
          art: { draw: 'a single paper chat bubble in the middle of a desk splitting into three paper paths, one leading to a paper school building, one to a paper coin purse, one to a paper courthouse with columns', banner: '한 사건, 세 갈래', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '사안은 가상이다. 형량·조치 호수는 다루지 않는다. 실제 판단은 사안마다 다르다는 점을 함께 말한다.',
      }),
      M({
        id: 'intro.myth-sort', type: 'intro', title: '법적 책임, 맞는 말 틀린 말',
        method: '법적 책임 오해 판정', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 진술 넷(맞음 둘·틀림 둘)만 바구니에 넣으며 까닭을 짚는다.', base: '진술 여섯 장이 맞음·틀림·조건에 따라 다름 바구니에 나뉘는 시연을 본다.', challenge: '\'조건에 따라 다름\' 진술마다 무엇이 조건인지(나이·손해의 크기 등) 말한다.' },
        intro: {
          teacher: '"\'합의하면 끝\', \'학생은 책임 없음\' — 많이 들어 본 말이죠. 맞을까요?" 시연 단추로 진술이 세 바구니에 나뉘는 모습을 보여 준다. "학생은 형사 책임이 없다"를 \'맞음\'으로 고르는 학생에게 "나이에 따라 달라요. 그리고 형사 책임이 없더라도 학교 조치나 손해를 갚는 책임은 따로 생길 수 있어요"라고 답한다. 구체적인 나이와 형량은 이 수업에서 다루지 않는다고 밝힌다.',
          student: '법적 책임에 대한 진술 카드를 맞음·틀림·조건에 따라 다름으로 나누어 보세요.',
          demo: { tool: 'sortboard', options: { slots: ['맞음', '틀림', '조건에 따라 다름'], cards: mix([MYTH.맞음, MYTH.틀림, MYTH.조건]) }, sequence: [{ sort: { 맞음: MYTH.맞음, 틀림: MYTH.틀림, '조건에 따라 다름': MYTH.조건 } }] },
          art: { draw: 'three paper baskets on a shelf marked with a check, a cross and a small paper balance scale, paper statement cards hovering above them, a paper question mark tucked behind the scale', banner: '들은 말, 맞는 말일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '구체적인 나이 기준·형량은 쓰지 않는다. 실제 책임은 사안과 나이에 따라 다르다.',
      }),

      M({
        id: 'activity.case-tracking', type: 'activity', title: '가상 사안, 책임이 이어지는 길',
        method: '가상 사안 결과 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '한 시점(접수 직후)의 갈림길에서 고르고 근거를 고른다.', base: '두 시점(접수 직후·보호자 대화)을 따라가 결과를 보고 근거를 고른다.', challenge: '세 시점(한 학기 뒤까지)을 따라가고, 다른 길도 끝까지 가 본 뒤 린의 회복이 가장 크게 갈린 곳을 활동지에 쓴다.' },
        activity: {
          title: '책임의 갈림길', tool: 'dilemma',
          teacher: '"가상 사안을 태의 선택부터 따라가 봐요. 태는 잘못한 행동을 한 학생이지만, 오늘 우리가 보는 것은 \'나쁜 사람\'이 아니라 \'어떤 선택이 책임을 지는 길인가\'예요." 선택마다 린에게 생긴 영향을 먼저 읽게 한다. \'합의\' 길에서 "그럼 학교는 아무것도 못 하나요?"라는 질문이 나오면 "합의가 있어도 학교는 린이 안전한지 살펴요"라고 답한다. 한 학기 뒤 장면에서 \'직접 연락\'을 고른 학생에게 "사과는 누구의 마음이 준비되었을 때 해야 할까요?"라고 묻고, 피해 학생의 회복이 먼저라는 점을 짚는다.',
          task: '가상 사안을 시점마다 따라가며 세 갈래 책임이 어떻게 이어지는지 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('태의 선택을 시점마다 이어 가고, 책임을 지는 길의 근거를 고르세요.', CASE, [['admit', 'both', 'keep']], CASE_R, ['many', 'recover'], { d: 0.4 }),
            EXPLOREQ('\'부인한다\'·\'합의만 한다\' 길도 끝까지 가 보고, 린에게 생긴 영향을 견주세요.', CASE, CASE_R, ['다른 길의 끝 장면을 확인했다', '린의 회복이 어디서 갈렸는지 견주었다'], { d: 0.35 }),
            DILQ('담임 선생님의 시점이에요. 태의 보호자가 "합의했으니 학교는 그만 다뤄 달라"고 해요. 알맞은 선택과 근거를 고르세요.', { text: '태의 보호자가 "합의서를 썼으니 학교는 이제 그만 다뤄 달라"고 한다. 린은 아직 교실에서 태와 마주치는 것을 힘들어한다.', who: '담임 선생님', motif: 'house', choices: [
              { id: 'go', text: '합의 사실은 기록하고, 린의 안전과 지원은 학교 절차대로 계속 살핀다', result: '린의 자리 배치와 상담 지원이 이어진다.', impact: [{ who: '린', text: '보호가 끊기지 않는다', tone: 1 }], ending: '학교 절차의 목적은 피해 학생 보호와 행동 바로잡기다.' },
              { id: 'close', text: '합의했으니 더 다루지 않는다', result: '린은 아무 지원 없이 태와 같은 교실에서 지낸다.', impact: [{ who: '린', text: '혼자 견딘다', tone: -1 }], ending: '합의가 피해 학생의 회복까지 대신하지는 않는다.' }] },
            [['go']], CASE_R, ['protect'], { d: 0.3, more: { conclude: '한 사건에서 학교 조치·손해 배상·형사 책임이 따로 생길 수 있고, 어느 길이든 피해 학생의 회복이 먼저예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '태가 고른 길과 린에게 생긴 결과를 정리하세요.', columns: ['태의 선택', '이어진 책임', '린의 회복'], cells: [['인정·사과', '', ''], ['부인', '', ''], ['합의만', '', '']] }] },
        notes: '사안·인물은 가상이다. 실제 사안 처리의 기한·서류·조치 호수와 형량은 다루지 않는다.',
      }),
      M({
        id: 'activity.procedure-blocks', type: 'activity', title: '학교 절차의 큰 흐름을 블록으로',
        method: '학교 절차의 큰 흐름과 목적', tool: 'block-coding', minutes: 18,
        levels: { easy: '단계 셋(신고·접수 → 보호 → 사안 조사) 판에서 거북이를 깃발까지 보낸다.', base: '단계 여섯 판에서 별을 모두 들러 깃발(이행 점검)에 닿게 하고, 친구 계획을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 오른쪽)으로 같은 길을 만들고, 활동지에 당사자 의견 진술과 이의 제기 지점을 표시한다.' },
        activity: {
          title: '학교 절차 흐름 설계', tool: 'block-coding',
          teacher: '"시작 칸이 ①신고·접수, 윗줄 별 다섯이 ②보호(분리 등) ③사안 조사 ④학교 자체 해결 또는 교육지원청 심의 ⑤조치·지원 ⑥(줄 끝) 이행 점검 준비, 깃발이 ⑦이행 점검이에요. 바위는 \'사실 확인 없이 소문으로 정하기\'·\'피해 학생 의견 듣지 않기\'예요." 블록을 붙일 때마다 "이 단계의 목적은 무엇일까요? 누구를 위한 단계인가요?"라고 묻는다. "신고하면 곧바로 처벌로 끝난다"는 말이 나오면 "판에서 처벌 칸이 보이나요? 학교 절차는 보호와 사실 확인, 그리고 바로잡기의 흐름이에요"라고 답한다. 세부 기한·서류는 다루지 않는다.',
          task: '별(절차 단계)을 모두 들러 깃발(이행 점검)에 닿는 프로그램을 만들고, 단계마다 목적을 활동지에 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('윗줄 별 다섯을 모두 들르고 바위(소문으로 정하기·의견 듣지 않기)를 피해 깃발(이행 점검)에 닿게 하세요.', PR_BASE, { stars: true }, {
              easy: { prompt: '별 둘(보호·사안 조사)을 들러 깃발에 닿게 하세요(단계 셋).', board: PR_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 오른쪽\'을 꼭 써서 별 다섯을 들르고 깃발에 닿게 하세요. 막혀서 도는 자리가 \'당사자가 의견을 말하고, 결과에 이의를 낼 수 있는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['윗줄을 따라 끝까지 간 뒤 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구의 계획: 반복 2번[앞으로 한 칸] → 오른쪽으로 돌기 → 앞으로 한 칸. 사안 조사 전에 바로 꺾는 계획이에요. 거북이가 멈출 칸을 고르세요.', { cols: 6, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 5, y: 3 }, stars: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] }, ['rep:2', 'fwd', 'end', 'right', 'fwd'], { x: 2, y: 1 }, { d: 0.3, more: { conclude: '사안 조사를 건너뛰면 사실 대신 소문이 결정을 내려요.' } }),
            BCQ('이 프로그램은 윗줄 끝에서 판 밖으로 돌아 나가요. 블록 하나만 고쳐 별을 모두 들르고 깃발에 닿게 하세요.', PR_BASE, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:5', 'fwd', 'end', 'left', 'rep:3', 'fwd', 'end'] }, conclude: '조치로 끝나지 않아요. 마지막 칸은 조치와 지원이 실제로 이루어졌는지 점검하는 일이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '학교 절차의 단계마다 목적을 쓰세요.', columns: ['단계', '목적'], cells: [['신고·접수', ''], ['보호(분리 등)', ''], ['사안 조사', ''], ['자체 해결 또는 심의', ''], ['조치·지원', ''], ['이행 점검', ''], ['의견 진술·이의 제기는 어디서?', '']] }] },
        notes: '교구 한계: 블록에 글을 붙일 수 없어 절차 단계를 시작 칸·별·깃발로 나타냈다. 절차의 큰 흐름만 다루고 기한·서류·조치 호수는 다루지 않는다.',
      }),
      M({
        id: 'activity.data-analysis', type: 'activity', title: '가상 심의 건수 자료 해석',
        method: '심의 건수 가상 자료 해석', tool: 'chart', minutes: 17,
        levels: { easy: '한 해(올해) 자료를 값이 보이는 채로 읽는다.', base: '세 해 심의 건수 막대와 올해 유형 띠그래프를 읽고, 사이버 비율 꺾은선을 그리고, 자료만으로 알 수 없는 것을 고른다.', challenge: '값을 숨긴 그래프를 읽고, 활동지에 자료만으로 알 수 없는 것을 두 가지 쓴다.' },
        activity: {
          title: '심의 자료 읽기', tool: 'chart',
          teacher: '"가상 지역의 학교폭력 심의 건수와 유형 비율이에요. 실제 통계가 아니라 수업용 가상 자료예요." 막대와 띠를 차례로 읽게 한다. "사이버가 늘었으니 사이버폭력이 실제로 그만큼 늘었다"는 말이 나오면 "알리는 사람이 늘었거나, 사이버폭력도 학교폭력이라는 인식이 퍼져서 늘었을 수도 있지 않을까요?"라고 되묻는다. 자료는 경향을 보여 주지만 원인은 따로 확인해야 한다는 점을 짚는다.',
          task: '가상 심의 자료를 읽고 사이버 유형 비중의 변화를 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '세 해 심의 건수 막대에서 건수가 가장 많은 해를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '가상 지역 학교폭력 심의 건수(가상 자료)', unit: '건', xLabel: '때', yLabel: '심의 건수', data: CASES, question: '건수가 가장 많은 해는?', choices: CASES.map((x) => x[0]) }, target: { pick: 2 }, difficulty: 0.2,
              levels: { easy: { prompt: '올해 심의 건수 막대를 읽고 알맞은 값을 고르세요(한 해).', toolOptions: { data: CASES.slice(2), question: '올해 심의 건수는?', choices: ['120건', '150건', '200건'] }, target: { pick: 1 } } } },
            { prompt: '올해 유형 비율 띠그래프에서 가장 큰 비율을 차지하는 유형을 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '올해 심의 사안 유형 비율(가상 자료)', unit: '%', data: TYPES, question: '가장 큰 비율의 유형은?', choices: TYPES.map((x) => x[0]) }, target: { pick: 2 }, difficulty: 0.25 },
            { prompt: '표를 보고 사이버 유형 비율의 꺾은선을 그리세요(3년 전 점은 찍혀 있어요).', toolOptions: { type: 'line', mode: 'build', title: '사이버 유형 비율의 변화(가상 자료)', unit: '%', xLabel: '때', yLabel: '비율', data: CYBER, given: [0] }, target: { build: true }, difficulty: 0.3 },
            { prompt: '이 자료만으로는 알 수 없는 것을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '사이버 유형 비율의 변화(가상 자료)', unit: '%', xLabel: '때', yLabel: '비율', data: CYBER, question: '자료만으로 알 수 없는 것은?', choices: ['사이버 유형 비율이 3년 동안 커졌다', '실제로 사이버폭력이 늘었는지, 알리는 사람이 늘었는지', '올해 사이버 유형 비율이 가장 크다'], why: ['그래프에서 읽을 수 있어요.', '', '그래프에서 읽을 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.35,
              conclude: '숫자는 경향을 보여 줘요. 왜 그렇게 되었는지는 조사 대상·시점·신고 문화까지 함께 봐야 알 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 자료만으로 알 수 없는 것 두 가지와, 그것을 알려면 더 필요한 자료를 쓰세요.' }] },
        notes: '그래프는 모두 가상 자료다. 실제 수치를 쓰려면 교육부·교육청 공식 발표로 바꾸고 출처를 밝힌다.',
      }),
      M({
        id: 'activity.explain-writing', type: 'activity', title: '1학년에게 건네는 책임 안내문',
        method: '후배에게 설명하는 책임 안내문', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 문장 안내문을 문장 틀을 보고 쓴다.', base: '세 문장·다섯 문장 안내문을 쓰고 세 갈래 구분·과장 없음·형량 숫자 없음·회복 강조 기준표로 점검한다.', challenge: '다섯 문장 안내문에 \'자주 하는 질문 하나와 답\' 기준이 하나 더 붙고, 질문·답을 따로 쓴다.' },
        activity: {
          title: '책임 안내문', tool: 'rubric-writing',
          teacher: '"1학년 후배에게 \'장난이라도 책임이 생길 수 있다\'를 설명하는 안내문을 써요. 겁주는 글이 아니라 정확한 글이어야 해요." 기준표를 먼저 읽는다. "몇 년형" 같은 숫자를 쓴 학생에게 "오늘은 숫자를 쓰지 않기로 했어요. 숫자 없이도 후배가 \'아, 따로따로구나\'를 알게 쓸 수 있을까요?"라고 말한다. "인생 끝난다"처럼 과장한 문장에는 "책임을 지고 바로잡으면 달라질 수 있다는 것도 함께 알려 줄까요?"라고 묻는다.',
          task: '1학년에게 법적 책임의 세 갈래를 설명하는 안내문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('"장난이라도 책임이 생길 수 있다"를 1학년에게 세 문장으로 설명하세요.', '1학년 후배에게: 장난이라도 책임이 생길 수 있는 까닭을 세 문장으로', ['학교 조치·손해 배상·형사 책임을 구분했다', '형량 같은 숫자가 없다', '겁주는 과장이 없다'], { min: 50, max: 300, sent: [3, 3], must: [['학교', '조치']], starter: '장난이라고 해도 ~. 학교에서는 ~. 그리고 따로 ~.', d: 0.3 }),
            RWQ('같은 안내문을 다섯 문장으로 늘려 쓰세요. 마지막 문장은 바로잡기·회복에 대한 것이에요.', '1학년 후배에게 보내는 책임 안내문(다섯 문장)', ['세 갈래를 구분했다', '형량 같은 숫자가 없다', '과장이 없다', '책임을 지고 바로잡을 수 있다는 말이 있다'], { min: 90, max: 500, sent: [5, 5], must: [['바로잡', '회복', '사과']], plus: '자주 하는 질문 하나와 그 답을 넣었다', d: 0.4,
              sample: '장난이라도 상대가 다치거나 괴로우면 책임이 생길 수 있어. 학교에서는 피해 학생을 보호하고 행동을 바로잡는 조치를 정해. 그와 따로 입힌 손해를 갚는 책임이 생길 수도 있어. 사안에 따라 수사기관이 살펴보는 일도 있어. 그래도 잘못을 인정하고 바로잡으면 관계를 회복할 길이 있어.' }),
            RWQ('1학년이 자주 할 질문 하나와 그 답을 두 문장으로 쓰세요.', '자주 하는 질문과 답(예: "합의하면 끝나요?")', ['질문이 후배 말투로 쓰였다', '답이 정확하고 과장이 없다', '도움을 청할 곳(담임·상담 선생님)을 알려 준다'], { min: 30, max: 250, sent: [2, 2], must: [['선생님', 'Wee']], d: 0.35, more: { conclude: '좋은 안내문은 겁을 주지 않고 정확하게, 그리고 바로잡을 길까지 알려 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '안내문에서 가장 쓰기 어려웠던 문장과, 그 문장을 정확하게 고친 방법을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.concept-check', type: 'wrap', title: '세 갈래 책임 짝짓기',
        method: '세 갈래 구분 점검', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 짝 셋(학교의 조치·민사 책임·형사 책임)을 먼저 함께 읽고 짝짓게 한다.', base: '낱말 카드 다섯을 상황 설명과 짝짓는다.', challenge: '둘 이상에 걸치는 상황(사과와 배상을 함께 하는 경우 등)을 짝에게 설명한다.' },
        wrap: {
          teacher: '"오늘 나온 낱말을 상황과 짝지어 마무리해요." 짝짓기 뒤 \'피해 학생 보호\'와 \'학교의 조치\'를 헷갈린 학생에게 "한쪽은 피해 학생을 지키는 일, 다른 쪽은 가해 학생의 행동을 바로잡는 일이에요"라고 짚는다. 출구 고르기에서 \'합의하면 끝\'을 고르면 사안 추적의 \'합의\' 길을 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '학교의 조치', ko: '학교가 사안을 다뤄 가해 학생의 행동을 바로잡는 조치를 정한다' }, { en: '피해 학생 보호', ko: '상담·분리처럼 피해 학생의 안전과 회복을 먼저 돕는다' }, { en: '민사 책임', ko: '치료비·상담비 같은 손해를 돈으로 갚게 한다' }, { en: '형사 책임', ko: '수사기관이 살피고 법원이 처벌 여부를 정한다' }, { en: '관계 회복', ko: '당사자가 원할 때 사과와 대화로 관계를 다시 잇는다' }] }, prompt: '책임·절차 낱말 카드와 상황 설명을 짝지으세요.', target: { match: { '학교의 조치': '학교의 조치', '피해 학생 보호': '피해 학생 보호', '민사 책임': '민사 책임', '형사 책임': '형사 책임', '관계 회복': '관계 회복' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '하나의 사건과 책임에 대한 말로 알맞은 것은?', options: ['학교에서 조치받으면 다른 책임은 없다', '학교 조치·손해 배상·형사 책임은 따로 생길 수 있다', '합의하면 모든 책임이 없어진다'], answer: 1, difficulty: 0.2, explain: '한 사건에서도 갈래마다 목적이 달라 책임이 따로 생길 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '세 갈래 책임',
          items: [
            { type: 'table', prompt: '세 갈래의 목적을 한 낱말로 쓰세요.', columns: ['갈래', '목적'], cells: [['학교 절차', ''], ['민사', ''], ['형사', '']] },
            { type: 'short', prompt: '둘 이상의 갈래에 걸치는 상황 하나를 쓰고 까닭을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.reflection', type: 'wrap', title: '책임지고 달라지는 단계',
        method: '책임과 회복 성찰 글', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 첫 두 단계(인정·사과)를 먼저 놓아 보이고 나머지를 함께 놓는다.', base: '단계 카드 넷을 차례로 놓고, 함정 카드(없던 일로 하기)를 남긴다.', challenge: '단계마다 필요한 지원과 낙인 없이 돕는 방법을 활동지에 쓴다.' },
        wrap: {
          teacher: '"사안 뒤에 잘못한 학생이 책임을 지고 달라지는 길을 차례로 놓아 봐요." 카드를 놓은 뒤 \'없던 일로 하기\'가 왜 남는지 묻는다. "한 번 그런 애는 안 바뀐다"는 말이 나오면 "바뀌려는 사람에게 낙인만 남으면 무엇이 더 쉬워질까요? 되풀이일까요, 회복일까요?"라고 되묻는다. 단, 어느 단계든 피해 학생의 안전과 뜻이 먼저라는 점을 함께 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: ['바로잡기', '없던 일로 하기', '관계 회복', '잘못 인정', '사과'] }, prompt: '책임지고 달라지는 단계를 차례로 놓으세요(맞지 않는 카드는 남겨요).', target: { order: ['잘못 인정', '사과', '바로잡기', '관계 회복'] }, difficulty: 0.2 },
            { type: 'short', prompt: '단계 하나를 골라 그 단계에 필요한 지원(상담·학급의 태도 등)을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '책임과 회복',
          items: [
            { type: 'table', prompt: '단계마다 필요한 지원을 쓰세요.', columns: ['단계', '필요한 지원'], cells: [['잘못 인정', ''], ['사과', ''], ['바로잡기', ''], ['관계 회복', '']] },
            { type: 'short', prompt: '낙인 없이 돕는다는 것은 어떤 모습인지 한 문장으로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 10. 피해 학생 지원과 2차 피해 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-victim-support', [11]);
    const HARM2 = ['무슨 일이었는지 자세히 캐묻기', '"너도 뭔가 했겠지"라고 말하기', '들은 이야기를 다른 반에 전하기', '사건 뒤 눈 마주치면 피하기'];
    const BACK = ['평소처럼 같이 점심 먹기', '"말하고 싶을 때 들을게"라고 하기', '수업 자료를 챙겨 건네기', '추측하는 말이 나오면 화제 바꾸기'];
    // 지원 연결 지도(가상 학교와 동네)
    const PL = [
      { name: '담임 교실', icon: 'school', at: [0, 0] }, { name: '상담실·Wee 클래스', icon: 'house', at: [2, 0] }, { name: '보건실', icon: 'hospital', at: [4, 0] },
      { name: '특수교육 지원실', icon: 'library', at: [1, 2] }, { name: '학생회실', icon: 'office', at: [3, 2] }, { name: '지역 상담 기관 자리', icon: 'dot', at: [5, 1] },
      { name: '청소년 지원 기관 자리', icon: 'park', at: [5, 3] }, { name: '보호자', icon: 'apartment', at: [0, 3] },
    ];
    const MAPO = (names = true, more = {}) => Object.assign({ title: '가상 학교와 동네의 지원 자리', grid: [6, 4], places: PL, names }, more);
    const pick3 = (keep) => PL.filter((p) => keep.includes(p.name));
    // 소문 장면
    const RUMOR = { text: '사안이 끝나고 하가 교실로 돌아왔다. 쉬는 시간, 몇몇이 "하가 먼저 무슨 일 했다더라"며 추측을 주고받는다.', who: '나', motif: 'cloud', choices: [
      { id: 'agree', text: '"나도 그렇게 들었어"라고 맞장구친다', result: '추측이 사실처럼 굳어 옆 반까지 퍼진다.', impact: [{ who: '하', text: '돌아온 교실이 다시 불편해진다', tone: -1 }], ending: '맞장구 한마디가 소문을 사실처럼 만든다.' },
      { id: 'silent', text: '듣기만 하고 아무 말도 하지 않는다', result: '대화는 이어지고 하는 눈치를 본다.', impact: [{ who: '하', text: '누가 내 편인지 모른다', tone: 0 }],
        next: { text: '다음 날 같은 이야기가 단톡방에도 올라왔다.', choices: [
          { id: 'teacher', text: '단톡방 내용을 남기고 담임 선생님께 알린다', result: '선생님이 학급에 추측과 소문을 멈추자고 이야기한다.', impact: [{ who: '하', text: '2차 피해가 멈춘다', tone: 1 }], ending: '처음에 침묵했어도, 알리는 순간 흐름을 바꿀 수 있다.' },
          { id: 'leave', text: '단톡방 알림을 끄고 신경 쓰지 않는다', result: '소문은 계속 돌고 하는 쉬는 시간마다 자리를 비운다.', impact: [{ who: '하', text: '학교생활이 움츠러든다', tone: -1 }], ending: '보지 않는다고 소문이 멈추지는 않는다.' }] } },
      { id: 'stop', text: '"추측은 하지 말자, 하한테 상처야"라고 말한다', result: '몇 명이 머쓱해하며 대화를 멈춘다.', impact: [{ who: '하', text: '편이 있다는 걸 느낀다', tone: 1 }],
        next: { text: '한 친구가 "그럼 너는 하 편이냐?"라고 비꼰다.', choices: [
          { id: 'norm', text: '학급 회의에서 "사안 이야기는 추측하지 않기"를 약속으로 제안한다', result: '학급이 함께 약속을 정하고 담임 선생님이 돕는다.', impact: [{ who: '하', text: '교실이 다시 안전해진다', tone: 1 }, { who: '학급', text: '같은 일을 막는 규범이 생긴다', tone: 1 }],
            next: { text: '약속을 정한 일주일 뒤, 다른 반 학생이 하에 대해 묻는다.', choices: [
              { id: 'protect', text: '"우리 반은 그 이야기 안 하기로 했어"라고 답한다', result: '질문이 거기서 멈춘다.', impact: [{ who: '하', text: '사생활이 지켜진다', tone: 1 }], ending: '학급 약속이 반 밖으로도 소문을 막는 울타리가 된다.' },
              { id: 'tell', text: '아는 만큼 조금만 이야기해 준다', result: '이야기가 다른 반에서 다시 부풀려진다.', impact: [{ who: '하', text: '또 화제가 된다', tone: -1 }], ending: '조금만 전해도 소문은 다시 자란다.' }] } },
          { id: 'backoff', text: '분위기가 어색해져 다시 입을 다문다', result: '소문은 줄었지만 완전히 멈추지 않는다.', impact: [{ who: '하', text: '불안이 남는다', tone: 0 }], ending: '한 번의 말에 학급의 약속이 더해지면 오래간다.' }] } }] };
    const RUMOR_R = [{ id: 'privacy', text: '피해 학생의 사생활은 추측의 대상이 아니다' }, { id: 'norm', text: '학급이 함께 약속하면 소문이 오래 멈춘다' }, { id: 'late', text: '침묵했어도 지금 알리면 흐름을 바꿀 수 있다' }, { id: 'both', text: '피해 학생에게도 이유가 있었을 것이다', why: '잘못은 괴롭힌 쪽에 있어요. 이유를 찾는 추측이 바로 2차 피해예요.' }];
    // 학급 지원 계획 판: 별 = 동의 묻기·자리·모둠·쉬는 시간 동행, 깃발 = 점검
    const CP = { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[0, 3], [0, 2], [0, 1], [2, 0]], rocks: [[1, 3], [2, 2]] };
    const CP_EASY = { cols: 2, rows: 3, start: { x: 0, y: 2, dir: 'N' }, goal: { x: 1, y: 0 }, stars: [[0, 1], [0, 0]], rocks: [] };
    const HARMS = [['캐묻기', 5], ['소문 전하기', 7], ['탓하기', 4], ['피하기', 3], ['글·사진 퍼 나르기', 2]];

    MODS.push(
      M({
        id: 'intro.secondary-list', type: 'intro', title: '2차 피해가 되는 반응, 지지가 되는 반응',
        method: '2차 피해가 되는 행동 가리기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 카드 다섯 장을 먼저 함께 읽고 바구니에 넣어 보인다.', base: '반응 카드 여덟 장을 2차 피해·지지 바구니에 넣는 시연을 보고 까닭을 말한다.', challenge: '\'캐묻기\'처럼 걱정에서 나왔지만 2차 피해가 되는 카드의 조건(누가·어디서·얼마나)을 말한다.' },
        intro: {
          teacher: '"사안이 끝나고 친구가 교실로 돌아왔어요. 반 친구들의 반응 여덟 가지 가운데 회복을 돕는 것과 다시 상처를 주는 것을 나눠 봐요." 시연 단추로 카드가 바구니에 들어가는 모습을 보여 준다. "걱정돼서 자세히 물어보는 건 괜찮지 않나요?"라는 말이 나오면 "같은 이야기를 여러 사람에게 되풀이해야 한다면 그 친구는 어떨까요? 말할지 말지는 그 친구가 정해요"라고 되묻는다. 2차 피해는 사건 뒤에 주변에서 생기는 또 하나의 피해이고, 막는 것은 우리 몫이라는 점을 짚는다.',
          student: '가상 학급의 반응 카드를 2차 피해가 되는 것과 지지가 되는 것으로 나누어 보세요. 걱정에서 나온 말이라도 상대에게 어떻게 닿는지가 기준이에요.',
          demo: { tool: 'sortboard', options: { slots: ['2차 피해', '지지'], cards: mix([HARM2, BACK]) }, sequence: [{ sort: { '2차 피해': HARM2, 지지: BACK } }] },
          art: { draw: 'a paper classroom with two paper baskets on a shelf, one labeled with a small storm cloud and one with a small sun, paper speech bubbles drifting toward them, a paper desk with an empty chair being pulled out kindly', banner: '돌아온 친구 곁에서', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학급은 가상이다. 학생에게 실제 사안이나 자기 경험을 묻지 않는다.',
      }),
      M({
        id: 'intro.recovery-timeline', type: 'intro', title: '회복의 시간표',
        method: '회복의 시간표', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 세 시점(1주·1달·한 학기) 장면만 띠에 놓아 보인다.', base: '다섯 시점 장면을 차례로 놓는 시연을 보고, 필요한 지원이 바뀌는 지점을 말한다.', challenge: '지원이 끊기기 쉬운 시점(사안이 끝난 것처럼 보이는 때)을 찾아 그 까닭을 말한다.' },
        intro: {
          teacher: '"가상 학생 하의 회복 장면 다섯 개를 시간 차례로 놓아 봐요." 시연 단추로 장면이 띠에 놓이는 모습을 보여 준다. "사건이 끝나면 회복도 끝나지 않나요?"라는 말이 나오면 "한 달 뒤 하가 다시 웃는 날이 늘었다면, 친구들의 관심도 그만 거둬도 될까요?"라고 되묻는다. 회복은 시간이 걸리고 시기마다 필요한 지원이 다르며, 관심이 줄어드는 때가 오히려 끊기기 쉬운 때라는 점을 짚는다.',
          student: '가상 학생 하가 사건 뒤 회복해 가는 장면을 시간 차례로 놓고, 시기마다 어떤 지원이 필요한지 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['사건 직후', '한 학기 뒤'], slots: 5, cards: ['한 달 뒤: 모둠 활동에 다시 참여하기 시작한다', '사건 직후: 학교 오는 것이 두렵다', '한 학기 뒤: 가끔 불안이 다시 찾아온다', '1주 뒤: 상담 선생님과 이야기를 시작한다', '두 달 뒤: 주변 관심이 줄고 혼자 있는 시간이 는다'] }, sequence: [{ order: ['사건 직후: 학교 오는 것이 두렵다', '1주 뒤: 상담 선생님과 이야기를 시작한다', '한 달 뒤: 모둠 활동에 다시 참여하기 시작한다', '두 달 뒤: 주변 관심이 줄고 혼자 있는 시간이 는다', '한 학기 뒤: 가끔 불안이 다시 찾아온다'] }] },
          art: { draw: 'a long paper ribbon timeline stretching across a school year, small paper scenes pinned along it from a cloudy door to a sunny group table, a paper hand placing a small heart at a quiet gap in the middle', banner: '회복은 시간이 걸려요', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
        },
        notes: '하는 가상 인물이다. 회복 과정은 사람마다 다르다는 점을 함께 말한다.',
      }),

      M({
        id: 'activity.support-map', type: 'activity', title: '필요와 지원 자리 잇기',
        method: '지원 연결 지도', tool: 'map', minutes: 17,
        levels: { easy: '문항마다 지원 자리 세 곳만 있는 지도에서 이름을 보며 핀을 꽂는다.', base: '지원 자리 여덟 곳이 있는 지도에서 학업·마음·관계·안전 필요에 맞는 곳에 핀을 꽂는다.', challenge: '보호자와 협력하는 경로 문항이 더해지고, 핀을 꽂은 뒤 그곳을 고른 까닭 보기까지 고른다.' },
        activity: {
          title: '지원 연결 지도', tool: 'map',
          teacher: '"가상 학교와 동네 지도예요. 하에게 필요한 지원이 네 가지 있어요 — 학업, 마음, 관계, 안전. 필요마다 연결할 곳에 핀을 꽂아 봐요." 핀을 꽂기 전에 "이 필요는 누가 가장 잘 도울 수 있을까요?"라고 묻는다. "친구인 우리가 다 해 주면 된다"는 학생에게 "친구가 할 수 있는 일과 어른·기관이 해야 할 일은 어떻게 다를까요?"라고 되묻는다. 지역 기관 자리와 신고·상담 번호 칸은 학교가 확인해 채우는 자리라는 점을 밝히고, 연결은 늘 하의 동의를 먼저 묻는다는 점을 짚는다.',
          task: '하의 필요(학업·마음·관계·안전)마다 연결할 지원 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '마음: 하가 불안해서 잠을 잘 못 잔다고 한다. 이야기를 나눌 학교 안 지원 자리에 핀을 꽂으세요.', toolOptions: MAPO(), target: { place: '상담실·Wee 클래스' }, difficulty: 0.2,
              levels: { easy: { prompt: '마음: 하가 불안해서 잠을 잘 못 잔다고 한다. 이야기를 나눌 곳에 핀을 꽂으세요(곳 셋).', toolOptions: { places: pick3(['담임 교실', '상담실·Wee 클래스', '학생회실']) } } } },
            { prompt: '학업: 사안 기간에 빠진 수행평가가 걱정이다. 조정을 함께 요청할 곳에 핀을 꽂으세요.', toolOptions: MAPO(), target: { place: '담임 교실' }, difficulty: 0.25,
              levels: { easy: { prompt: '학업: 빠진 수행평가가 걱정이다. 조정을 함께 요청할 곳에 핀을 꽂으세요(곳 셋).', toolOptions: { places: pick3(['담임 교실', '보건실', '학생회실']) } } } },
            { prompt: '관계: 학급 행사에서 하가 혼자가 되지 않도록 학생 쪽에서 함께 계획을 세울 곳에 핀을 꽂으세요.', toolOptions: MAPO(), target: { place: '학생회실' }, difficulty: 0.3,
              levels: { easy: { prompt: '관계: 학급 행사에서 하가 혼자가 되지 않게 함께 계획할 학생 쪽 자리에 핀을 꽂으세요(곳 셋).', toolOptions: { places: pick3(['학생회실', '보건실', '특수교육 지원실']) } } } },
            { prompt: '안전: 학교 밖에서 다시 연락이 와서 하가 두려워한다. 학교 밖에서 상담을 이어 갈 수 있는 자리에 핀을 꽂으세요.', toolOptions: MAPO(), target: { place: '지역 상담 기관 자리' }, difficulty: 0.3,
              levels: { easy: { prompt: '안전: 학교 밖에서 다시 연락이 와서 하가 두려워한다. 학교 밖 상담 자리에 핀을 꽂으세요(곳 셋).', toolOptions: { places: pick3(['지역 상담 기관 자리', '학생회실', '보건실']) } },
                challenge: { prompt: '안전: 학교 밖에서 다시 연락이 왔다. 학교 밖 상담 자리에 핀을 꽂고, 함께 해야 할 일을 고르세요(까닭 고르기).', toolOptions: { ask: { q: '함께 할 일은?', choices: ['담임 선생님과 보호자에게도 알려 함께 대응한다', '친구들끼리만 해결한다', '하가 괜찮다고 할 때까지 기다린다'], why: ['', '안전이 걸린 일은 어른과 함께 다뤄요.', '두려움이 있다면 기다리지 말고 알려요.'] } }, target: { place: '지역 상담 기관 자리', pick: 0 } } } },
            { prompt: '보호자와 협력: 하의 보호자가 학교 생활을 함께 살피고 싶어 한다. 학교 안에서 보호자와 먼저 이어질 곳에 핀을 꽂으세요.', toolOptions: MAPO(), target: { place: '담임 교실' }, difficulty: 0.3,
              levels: { easy: { prompt: '보호자와 협력: 보호자가 학교 생활을 함께 살피고 싶어 한다. 먼저 이어질 곳에 핀을 꽂으세요(곳 셋).', toolOptions: { places: pick3(['담임 교실', '학생회실', '청소년 지원 기관 자리']) } } },
              conclude: '친구는 곁에 있고, 어른과 기관은 전문 지원을 해요. 어느 쪽이든 연결 전에 하의 뜻을 먼저 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교의 실제 지원 자리를 선생님과 확인해 채우세요.', columns: ['필요', '학교 안', '학교 밖'], cells: [['마음', '', ''], ['학업', '', ''], ['안전', '', HELPNO]] }] },
        notes: '지도는 가상이다. 지역 상담 기관·청소년 지원 기관과 신고·상담 번호는 교사가 학교에서 확인해 활동지에 채운다(체계도 brief 의 자리 글).',
      }),
      M({
        id: 'activity.rumor-dilemma', type: 'activity', title: '소문이 퍼지기 시작할 때',
        method: '소문이 퍼지기 시작할 때', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 하나에서 반응을 고르고 근거를 고른다.', base: '갈림길 둘을 따라가 하의 학교생활 결과를 보고 근거를 고른다.', challenge: '학급 약속까지 이어지는 갈림길 셋을 끝까지 따라가고, 침묵한 길도 끝까지 가 보고 견준다.' },
        activity: {
          title: '소문 갈림길', tool: 'dilemma',
          teacher: '"사안이 끝나고 돌아온 하에 대해 추측이 돌기 시작해요. 내 한마디가 하의 학교생활을 어떻게 바꿀까요?" 선택마다 하에게 생긴 영향을 소리 내어 읽게 한다. \'듣기만 한다\'를 고른 학생에게 "가만히 있는 것도 하에게는 어떤 신호로 보일까요?"라고 묻는다. "피해 학생에게도 이유가 있었겠지"라는 말이 나오면 "잘못은 괴롭힌 쪽에 있어요. 이유를 찾는 추측이 바로 2차 피해예요"라고 바로잡는다.',
          task: '소문이 도는 장면에서 반응을 고르며 하의 학교생활 결과를 따라가고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('추측이 오가는 쉬는 시간, 하에게 도움이 되는 길을 따라가고 근거를 고르세요.', RUMOR, [['stop', 'norm', 'protect']], RUMOR_R, ['privacy', 'norm'], { d: 0.4 }),
            DILQ('처음에 침묵했던 길에서 다시 시작해요. 다음 날 단톡방에서 할 일을 고르고 근거를 고르세요.', { text: RUMOR.choices[1].next.text, who: '나', motif: 'cloud', choices: RUMOR.choices[1].next.choices }, [['teacher']], RUMOR_R, ['late'], { d: 0.35 }),
            EXPLOREQ('맞장구친 길과 말린 길을 끝까지 가 보고 하에게 생긴 결과를 견주세요.', RUMOR, RUMOR_R, ['끝 장면 둘 이상을 확인했다', '하에게 생긴 영향을 견주었다'], { d: 0.35, more: { conclude: '추측하지 않기, 화제 바꾸기, 알리기, 학급 약속 — 2차 피해는 주변 사람이 막을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반이 정할 수 있는 \'사안 뒤 지킬 약속\' 한 가지를 문장으로 쓰세요.' }] },
        notes: '장면은 가상이다. 실제 사안이나 학생을 떠올리게 하는 이름·사건을 쓰지 않는다.',
      }),
      M({
        id: 'activity.class-plan', type: 'activity', title: '돌아오는 친구를 위한 학급 지원 계획',
        method: '학급 지원 계획 설계', tool: 'block-coding', minutes: 17,
        levels: { easy: '단계 셋(동의 묻기·자리 + 점검 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯(별 넷 + 점검 깃발) 판에서 동의 묻기부터 차례로 들르고, 친구 계획을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 오른쪽)으로 같은 길을 만들어 \'원하지 않는 지원은 걸러 돌아가는 갈래\'를 넣는다.' },
        activity: {
          title: '학급 지원 계획 설계', tool: 'block-coding',
          teacher: '"이 판의 별은 아래에서부터 ① 하에게 원하는 지원 묻기(동의) ② 자리 정하기 ③ 모둠 정하기 ④ 쉬는 시간 동행이고, 깃발은 ⑤ 일주일 뒤 점검이에요. 바위는 \'원하지 않는 지원 밀어붙이기\'·\'사안 이야기 꺼내기\'예요." 실행할 때마다 "지금 거북이가 지난 단계는 하가 원한 것인가요?"라고 묻는다. "도와주는 거니까 다 해 주면 좋다"는 학생에게 "본인이 원하지 않는 관심은 오히려 눈에 띄게 만들 수 있어요. 첫 칸이 왜 동의일까요?"라고 되묻는다. 수행평가 조정 같은 학업 지원은 학생이 아니라 담임 선생님께 요청하는 일이라는 점도 짚는다.',
          task: '동의 묻기부터 점검까지 학급 지원 단계를 차례로 들르는 프로그램을 만들고, 활동지에 계획을 글로 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷(①동의 묻기 ②자리 ③모둠 ④쉬는 시간 동행)을 차례로 들르고 바위를 피해 깃발(⑤점검)에 닿게 하세요.', CP, { stars: true }, {
              easy: { prompt: '별 둘(①동의 묻기 ②자리)을 들러 깃발(점검)에 닿게 하세요(단계 셋).', board: CP_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 오른쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 막히면 도는 블록은 \'하가 원하지 않는 지원은 걸러 다른 길로 가는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['맨 아래 동의 칸부터 위로 올라가고, 줄 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구 계획이에요: 앞으로 2칸 → 오른쪽으로 돌기 → 앞으로 1칸. 모둠·동행 단계를 건너뛰어요. 거북이가 멈출 칸을 고르세요.', { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[0, 3], [0, 2], [0, 1], [2, 0]], rocks: [[1, 3], [3, 2]] }, ['fwd', 'fwd', 'right', 'fwd'], { x: 1, y: 2 }, { d: 0.3, more: { conclude: '단계를 건너뛰면 계획이 빨라 보여도 하가 혼자 남는 시간이 생겨요.' } }),
            BCQ('친구 프로그램이 모둠 단계 뒤 엉뚱한 쪽으로 돌아 판 밖으로 나가요. 블록 하나만 고쳐 별 넷을 들르고 깃발에 닿게 하세요.', CP, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:4', 'fwd', 'end', 'left', 'rep:4', 'fwd', 'end'] }, conclude: '지원 계획은 순서와 방향이 함께 맞아야 해요 — 동의에서 시작해 점검으로 끝나요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 실제 학급 지원 계획으로 옮겨 쓰세요.', columns: ['단계', '할 일', '하에게 물을 것'], cells: [['①', '원하는 지원 묻기', ''], ['②', '', ''], ['③', '', ''], ['④', '', ''], ['⑤', '일주일 뒤 점검', ''], ['갈래', '원하지 않는 지원은', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에 글을 붙일 수 없어 지원 단계를 별 칸으로, 점검을 깃발로 나타냈다. 학업 조정 요청은 담임 선생님을 거친다.',
      }),
      M({
        id: 'activity.support-letter', type: 'activity', title: '곁에 있다는 메시지',
        method: '지지 메시지 쓰기', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '두 문장 메시지를 문장 틀을 보고 쓴다.', base: '네 문장 메시지를 캐묻지 않음·탓하지 않음·선택권 존중·도움 연결 기준표로 점검한다.', challenge: '메시지를 보내지 않는 것이 나은 경우를 판단하는 문항과 기준 하나가 더해진다.' },
        activity: {
          title: '지지 메시지', tool: 'rubric-writing',
          teacher: '"가상 친구 하에게 보낼 메시지를 써 봐요. 짧아도 좋아요. 무엇을 묻지 않을지가 무엇을 쓸지만큼 중요해요." 기준표를 먼저 함께 읽는다. "무슨 일이었어?"로 시작한 글에는 "하가 그 질문에 답하고 싶지 않다면, 이 메시지는 어떻게 읽힐까요?"라고 묻는다. "힘내, 네가 더 강해져야 해" 같은 문장에는 견디는 책임을 하에게 지우는 말이 될 수 있다고 짚는다. 실제 친구 이름은 쓰지 않는다.',
          task: '가상 친구 하에게 보낼 지지 메시지를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('하에게 보낼 메시지를 두 문장으로 쓰세요.', '가상 친구 하에게: 캐묻지 않고 곁에 있다는 마음을 두 문장으로 전하세요.', ['무슨 일인지 캐묻지 않았다', '하를 탓하는 말이 없다', '곁에 있다는 마음이 드러난다'], { min: 25, max: 200, sent: [2, 2], starter: '요즘 마음이 많이 쓰였을 것 같아. ~', d: 0.3 }),
            RWQ('같은 메시지를 네 문장으로 늘려 쓰세요(선택권 존중·도움 연결 포함).', '가상 친구 하에게 보낼 지지 메시지를 네 문장으로 쓰세요.', ['무슨 일인지 캐묻지 않았다', '하를 탓하는 말이 없다', '하가 고를 수 있게 했다(원하면·편할 때)', '담임 선생님·상담 선생님 같은 도움을 함께 알렸다'], { min: 60, max: 400, sent: [4, 4], must: [['원하면', '편할 때', '괜찮다면']], starter: '요즘 많이 힘들었지. ~ 원하면 ~ 혹시 ~ 나는 ~', d: 0.4,
              sample: '요즘 많이 힘들었을 것 같아. 말하고 싶지 않으면 아무것도 말 안 해도 괜찮아. 원하면 점심이나 쉬는 시간에 같이 있을게. 상담 선생님께 같이 가 보고 싶으면 언제든 말해 줘.' }),
            RWQ('메시지를 보내지 않는 것이 나은 경우를 하나 들고, 그때 대신 할 행동을 2~3문장으로 쓰세요.', '지지 메시지를 보내기보다 다른 방법이 나은 경우와 대신 할 행동을 쓰세요.', ['보내지 않는 것이 나은 경우를 구체적으로 썼다', '대신 할 행동을 썼다', '하의 사생활을 지키는 생각이 있다'], { min: 40, max: 300, sent: [2, 3], must: [['대신', '보다']], starter: '~할 때는 메시지보다 ~ 대신 ~', plus: '그 판단의 까닭을 하의 입장에서 썼다', d: 0.4, more: { conclude: '좋은 지지는 많이 말하는 것이 아니라, 상대가 고를 수 있게 남겨 두는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '지지 메시지에 쓰지 않을 말 한 가지와 그 까닭을 쓰세요.' }] },
        notes: '하는 가상 인물이다. 학생에게 실제로 보낸 메시지나 자기 경험을 쓰게 하지 않는다.',
      }),

      M({
        id: 'wrap.harm-chart', type: 'wrap', title: '가장 먼저 막을 2차 피해',
        method: '2차 피해 유형 정리 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 막대 셋(캐묻기·소문 전하기·탓하기)을 짚으며 가장 긴 막대를 함께 찾는다.', base: '유형 다섯의 가상 빈도 막대를 읽고 가장 막아야 할 것을 고른다.', challenge: '활동지에 막대마다 막는 행동을 한 줄씩 붙인다.' },
        wrap: {
          teacher: '"오늘 나눈 2차 피해 반응을 가상 사례 기준으로 세어 막대로 정리했어요. 가장 많은 것은 무엇이고, 가장 먼저 막아야 할 것은 무엇일까요?" 막대를 읽은 뒤 "가장 많은 것과 가장 해로운 것이 늘 같을까요?"라고 묻는다. \'퍼 나르기\'가 가장 짧아도 한 번에 가장 많이 퍼질 수 있다는 점을 함께 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '오늘 본 2차 피해 반응(가상 사례 기준)', unit: '건', xLabel: '유형', yLabel: '건수', data: HARMS, question: '가장 많이 나온 유형은?', choices: HARMS.map((x) => x[0]) }, prompt: '가상 사례 막대에서 가장 많이 나온 2차 피해 유형을 고르세요.', target: { pick: 1 }, difficulty: 0.2 },
            { type: 'choice', prompt: '돌아온 친구 곁에서 할 행동으로 알맞은 것은?', options: ['무슨 일이었는지 자세히 물어 위로한다', '평소처럼 대하고, 추측이 나오면 화제를 바꾼다', '불편할 테니 당분간 말을 걸지 않는다'], answer: 1, difficulty: 0.2, explain: '캐묻기와 피하기는 모두 2차 피해가 될 수 있어요. 평소처럼, 그리고 소문은 멈추게 해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '2차 피해 막기',
          items: [
            { type: 'table', prompt: '유형마다 막는 행동을 쓰세요.', columns: ['유형', '막는 행동'], cells: [['캐묻기', ''], ['소문 전하기', ''], ['탓하기', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사건 뒤 주변에서 생기는 또 하나의 피해를 ___ 피해라고 한다.', answer: '2차' },
          ],
        },
        notes: '막대 값은 수업용 가상 값이다.',
      }),
      M({
        id: 'wrap.support-card', type: 'wrap', title: '"곁에 있을게" 행동 카드',
        method: '"곁에 있을게" 행동 카드', tool: 'collage', minutes: 7,
        levels: { easy: '조각 2개 이상으로 행동 둘을 나타낸 카드를 만든다.', base: '행동 셋을 나타낸 카드를 조각 3개 이상으로 만들고 점검한다.', challenge: '활동지에 카드 문구를 학급 공지 문장으로 다듬는다.' },
        wrap: {
          teacher: '"오늘 배운 2차 피해를 막는 행동 셋을 담은 카드를 만들어 봐요. 교실 뒤 게시판에 붙인다고 생각해요." 두세 작품을 보여 주며 "이 카드를 본 친구는 내일 무엇을 할까요?"라고 묻는다. 카드에 특정 친구나 사안을 떠올리게 하는 내용은 넣지 않는다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '"곁에 있을게" 행동 카드를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['2차 피해를 막는 행동 셋을 나타냈다', '특정 친구를 떠올리게 하는 내용이 없다', '멀리서도 보이게 색을 골랐다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '2차 피해에 대한 말로 맞는 것은?', options: ['사안이 끝나면 2차 피해도 없다', '걱정에서 나온 질문도 2차 피해가 될 수 있다', '2차 피해는 학교만 막을 수 있다'], answer: 1, difficulty: 0.15, explain: '되풀이해 캐묻는 것은 걱정에서 나왔어도 상처가 될 수 있어요. 주변 사람 누구나 막을 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '"곁에 있을게" 카드',
          items: [
            { type: 'short', prompt: '카드에 넣은 행동 셋을 쓰세요.' },
            { type: 'short', prompt: '카드 문구를 학급 공지 한 문장으로 다듬어 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11. 동아리·운동부 위계 문화와 "전통"이라는 강요 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-hierarchy-culture', [11]);
    const TRAD = ['신입이 원하면 참여하는 환영회', '선후배가 함께 정한 연습 규칙', '졸업 선배가 남긴 응원 편지 읽기', '모두가 돌아가며 맡는 장비 정리'];
    const FORCE = ['진 사람만 하는 벌칙 심부름', '복도에서 선배에게 90도 인사 강요', '신입만 선배 짐 들기', '신입 휴대폰 검사'];
    // 되물림 고리(가상 설문)
    const CYCLE = [['신입 때 강요받음', 62], ['선배가 되어 같은 행동', 41], ['멈추자고 말해 봄', 12]];
    // 2학년 선배가 된 준의 갈림길
    const SENIOR = { text: '운동부 2학년이 된 준. 3학년 선배가 "신입 길들이기는 네가 맡아. 우리 때도 다 했어"라고 한다. 신입 다섯 명이 들어왔다.', who: '준', motif: 'star', choices: [
      { id: 'follow', text: '선배 말대로 신입에게 벌칙 달리기를 시킨다', result: '신입 둘이 한 달 만에 운동부를 그만둔다.', impact: [{ who: '신입', text: '운동이 아니라 두려움을 배운다', tone: -1 }, { who: '준', text: '하기 싫은 일의 책임을 진다', tone: -1 }], ending: '"우리도 당했다"는 이유로 이어 가면 고리는 내 손에서 한 번 더 돈다.' },
      { id: 'quiet', text: '나는 안 하겠다며 조용히 빠진다', result: '다른 2학년이 대신 맡아 길들이기가 이어진다.', impact: [{ who: '신입', text: '여전히 강요를 받는다', tone: -1 }],
        next: { text: '신입 한 명이 준에게 "형도 원래 이렇게 했어요?"라고 묻는다.', choices: [
          { id: 'honest', text: '"아니, 이건 바꿔야 해. 지도 선생님께 같이 말해 보자"고 한다', result: '신입이 처음으로 안심한 얼굴을 한다.', impact: [{ who: '신입', text: '알릴 길이 생긴다', tone: 1 }], ending: '빠지는 것에서 한 걸음 더 나가면 고리가 멈추기 시작한다.' },
          { id: 'shrug', text: '"원래 그래, 1년만 참아"라고 한다', result: '신입은 아무에게도 말하지 않게 된다.', impact: [{ who: '신입', text: '참는 것을 배운다', tone: -1 }], ending: '"참으면 된다"는 말이 다음 해의 강요를 만든다.' }] } },
      { id: 'together', text: '동기들과 먼저 의논해 "길들이기는 하지 말자"고 모은다', result: '2학년 넷 가운데 셋이 함께하기로 한다.', impact: [{ who: '준', text: '혼자가 아니게 된다', tone: 1 }],
        next: { text: '3학년 선배가 "단합을 깨는 거냐"며 화를 낸다.', choices: [
          { id: 'coach', text: '동기들과 지도 선생님께 가서 바꿀 규칙을 함께 의논한다', result: '지도 선생님이 강요 금지와 새 환영 방식을 정한다.', impact: [{ who: '신입', text: '안전하게 운동을 시작한다', tone: 1 }, { who: '팀', text: '분위기가 덜 무섭고 대화가 는다', tone: 1 }],
            next: { text: '한 학기 뒤, 대회 성적이 작년과 비슷하게 나왔다. 몇몇은 "군기가 없어서 그래"라고 한다.', choices: [
              { id: 'keep', text: '성적은 연습으로 다루고 강요 금지는 그대로 지키자고 한다', result: '그만둔 신입이 없고 연습 참여가 늘었다.', impact: [{ who: '팀', text: '오래 함께할 사람이 남는다', tone: 1 }], ending: '존중과 성적은 맞바꾸는 것이 아니다. 남은 사람이 팀의 힘이다.' },
              { id: 'back', text: '성적을 위해 길들이기를 다시 하자는 말에 따른다', result: '다시 신입들이 눈치를 보고 둘이 그만둔다.', impact: [{ who: '신입', text: '또 두려움을 배운다', tone: -1 }], ending: '"성적 때문에"는 강요를 되살리는 가장 흔한 핑계다.' }] } },
          { id: 'cave', text: '선배가 무서워 없던 일로 한다', result: '길들이기가 그대로 이어진다.', impact: [{ who: '신입', text: '강요를 받는다', tone: -1 }], ending: '동기가 모였어도 어른과 잇지 않으면 위계에 다시 눌린다.' }] } }] };
    const SENIOR_R = [{ id: 'cycle', text: '강요는 "우리도 당했다"는 말로 되물림된다' }, { id: 'adult', text: '혼자보다 동기와 함께, 그리고 지도 선생님과 이어야 바뀐다' }, { id: 'team', text: '존중과 팀 성적은 맞바꾸는 것이 아니다' }, { id: 'unity', text: '단합을 위해 어느 정도 군기는 필요하다', why: '두려움으로 만든 단합은 사람이 떠나면서 무너져요.' }];
    // 새 동아리 문화 판: 별 = 환영·멘토 짝·자율 참여·의견 창구, 깃발 = 문제 시 알리기
    const NR = { cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 0, y: 0 }, stars: [[1, 2], [3, 2], [3, 0], [1, 0]], rocks: [[1, 1], [2, 1]] };
    const NR_EASY = { cols: 3, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 2, y: 0 }, stars: [[1, 2], [2, 2]], rocks: [] };
    const SHAPES = ['circle', 'square', 'rect', 'triangle', 'heart', 'star'];

    MODS.push(
      M({
        id: 'intro.tradition-sort', type: 'intro', title: '전통일까, 강요일까',
        method: '전통과 강요 가르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 관행 카드 다섯 장을 먼저 함께 읽고 바구니에 넣어 보인다.', base: '관행 카드 여덟 장을 전통·강요 바구니에 넣는 시연을 보고 가르는 기준을 말한다.', challenge: '강요 카드 하나를 골라 \'원하는 사람만·모두에게 같게\'를 붙이면 전통이 될 수 있는지 말한다.' },
        intro: {
          teacher: '"가상 동아리의 관행 여덟 가지예요. 오래 이어져 온 것이라는 점은 같아요. 무엇이 전통이고 무엇이 강요일까요?" 시연 단추로 카드가 바구니에 나뉘는 모습을 보여 준다. "전통은 지켜야 하지 않나요?"라는 말이 나오면 "신입만 하고 선배는 안 하는 일, 싫다고 하면 불이익이 오는 일도 전통일까요?"라고 되묻는다. 가르는 기준 두 가지 — 원하는 사람만 하는가, 모두에게 같은가 — 를 칠판에 적는다.',
          student: '가상 동아리 관행 카드를 전통과 강요로 나누어 보세요. 원하는 사람만 하는지, 모두에게 같은지가 기준이에요.',
          demo: { tool: 'sortboard', options: { slots: ['전통', '강요'], cards: mix([TRAD, FORCE]) }, sequence: [{ sort: { 전통: TRAD, 강요: FORCE } }] },
          art: { draw: 'a paper club room with a trophy shelf, two paper baskets on a bench, one tied with a ribbon and one with a heavy paper chain, small paper cards of club customs fluttering toward them', banner: '오래된 것과 옳은 것', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '관행은 가상이다. 학생이 속한 동아리의 실제 일을 고발하게 하지 않는다.',
      }),
      M({
        id: 'intro.cycle-chart', type: 'intro', title: '강요가 되물림되는 고리',
        method: '되물림 고리 자료', tool: 'chart', minutes: 7,
        levels: { easy: '막대 끝에 값을 보이고 세 막대를 함께 읽는다.', base: '값을 짚으며 \'강요받음 → 같은 행동 → 멈춤\'의 차이를 해석한다.', challenge: '고리를 끊은 가상 사례의 특징(동기와 함께·어른과 연결)을 추론해 말한다.' },
        intro: {
          teacher: '"가상 설문이에요. 신입 때 강요를 받았다는 응답, 선배가 되어 같은 행동을 했다는 응답, 멈추자고 말해 봤다는 응답이에요(%)." 시연 단추로 가장 짧은 막대를 고르는 모습을 보여 준다. "당한 사람이 더 잘 알 테니 안 할 것 같은데요?"라는 말이 나오면 "그런데 왜 둘째 막대가 이렇게 길까요? 무엇이 같은 행동을 하게 만들까요?"라고 되묻는다. 숫자는 수업용 가상 값이고 실제 조사가 아니라는 점을 밝힌다.',
          student: '가상 설문 막대를 읽고, 강요가 다음 해로 되물림되는 고리와 그 고리를 멈추는 말이 얼마나 드문지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 운동부·동아리 설문(가상 자료, %)', unit: '%', xLabel: '응답', yLabel: '비율', data: CYCLE, question: '가장 적은 응답은?', choices: CYCLE.map((x) => x[0]), showValues: true }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper chain of three rings looping from a younger paper student to an older one and back again, three paper bars of different heights standing beside it, a pair of paper scissors about to cut one ring', banner: '고리는 어디서 끊길까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 가상 자료다. 학생에게 자기가 받은 강요를 묻지 않는다.',
      }),

      M({
        id: 'activity.senior-dilemma', type: 'activity', title: '2학년 선배가 되어 고르기',
        method: '2학년 선배가 되어 고르기', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 하나에서 준의 선택을 고르고 근거를 고른다.', base: '갈림길 둘을 따라가 신입과 팀의 결과를 보고 근거를 고른다.', challenge: '한 학기 뒤 팀 성적 장면까지 갈림길 셋을 따라가고, 다른 길도 끝까지 가 보고 성적과 관계 결과를 함께 견준다.' },
        activity: {
          title: '선배가 된 준의 갈림길', tool: 'dilemma',
          teacher: '"2학년이 된 준에게 길들이기를 맡으라는 압력이 와요. 준은 피해자였을 수도, 이제 가해자가 될 수도 있는 자리에 서 있어요." 선택마다 신입과 준에게 생긴 영향을 읽게 한다. "선배 말을 안 들으면 준이 따돌림당한다"는 걱정에는 "그래서 혼자가 아니라 동기와, 그리고 어른과 함께 가는 길이 있어요"라고 답한다. 마지막 장면에서 "군기가 없어서 성적이 안 나왔다"는 말을 두고 성적과 존중이 맞바꾸는 관계인지 묻는다.',
          task: '압력을 받는 준의 자리에서 갈림길을 따라가며 신입과 팀의 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('준이 고리를 끊는 길을 따라가고 내 선택의 근거를 고르세요.', SENIOR, [['together', 'coach', 'keep']], SENIOR_R, ['cycle', 'adult'], { d: 0.4 }),
            DILQ('조용히 빠졌던 길에서 신입이 준에게 묻는다. 준의 대답을 고르고 근거를 고르세요.', { text: SENIOR.choices[1].next.text, who: '준', motif: 'star', choices: SENIOR.choices[1].next.choices }, [['honest']], SENIOR_R, ['adult'], { d: 0.35 }),
            EXPLOREQ('따르는 길과 동기와 함께 거부하는 길을 끝까지 가 보고 신입·팀의 결과를 견주세요.', SENIOR, SENIOR_R, ['끝 장면 둘 이상을 확인했다', '신입과 팀 성적의 결과를 함께 견주었다'], { d: 0.35, more: { conclude: '강요는 사람이 바뀌어도 자리가 남아서 이어져요. 자리를 바꾸는 것은 동기의 연대와 어른과의 연결이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '준이 혼자가 아니라 함께 바꿀 수 있었던 까닭을 두 문장으로 쓰세요.' }] },
        notes: '준은 가상 인물이다. 실제 운동부·동아리를 떠올리게 하는 이름은 쓰지 않는다.',
      }),
      M({
        id: 'activity.culture-analysis', type: 'activity', title: '위계가 괴롭힘이 된 지점 분석',
        method: '위계 문화 사례 분석 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 문장 분석을 문장 틀(바뀐 지점·지속 요인·바꿀 방법)을 보고 쓴다.', base: '다섯 문장 분석을 기준표로 점검한다.', challenge: '지도교사·학교의 역할을 덧붙이는 기준이 하나 더해진다.' },
        activity: {
          title: '위계 문화 사례 분석', tool: 'rubric-writing',
          teacher: '"가상 사례예요: 한 동아리에서 처음엔 \'선배에게 인사하기\'였던 것이 \'90도 인사 안 하면 벌칙\'으로, 다시 \'벌칙으로 심부름\'으로 바뀌었어요. 어디서 선을 넘었을까요?" 기준표를 함께 읽는다. 원인을 \'신입이 눈치가 없어서\'로 쓴 글에는 "잘못은 강요한 쪽에 있어요. 무엇이 강요를 계속되게 했는지 구조를 찾아봐요"라고 바로잡는다. 실제 동아리 이름은 쓰지 않는다.',
          task: '가상 동아리 사례에서 괴롭힘으로 바뀐 지점·지속시킨 요인·바꿀 방법을 분석해 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 사례에서 인사가 괴롭힘으로 바뀐 지점을 2문장으로 쓰세요.', '가상 동아리에서 \'인사하기\'가 괴롭힘으로 바뀐 지점과 그렇게 판단한 기준을 쓰세요.', ['바뀐 지점을 구체적으로 짚었다', '판단 기준(원하는가·모두에게 같은가·불이익)을 썼다', '신입을 탓하는 말이 없다'], { min: 40, max: 300, sent: [2, 2], must: [['강요', '벌칙']], starter: '~가 ~로 바뀐 순간 선을 넘었다. 왜냐하면 ~', d: 0.35 }),
            RWQ('사례 전체를 다섯 문장으로 분석하세요(바뀐 지점·지속 요인·바꿀 방법).', '가상 동아리 사례를 바뀐 지점, 지속시킨 요인, 바꿀 방법 순서로 다섯 문장으로 분석하세요.', ['바뀐 지점을 짚었다', '지속시킨 요인(되물림·침묵·전통이라는 이름)을 썼다', '바꿀 방법이 실천할 수 있다', '사실과 내 의견을 구분했다'], { min: 100, max: 500, sent: [5, 5], must: [['요인', '때문']], starter: '처음에 ~ 그런데 ~ 이것이 계속된 요인은 ~ 바꾸려면 ~ 그래서 나는 ~', plus: '지도교사·학교가 할 역할을 한 문장 넣었다', d: 0.4,
              sample: '처음에 인사는 서로 반가움을 나누는 일이었다. 그런데 안 하면 벌칙을 주면서 강요로 바뀌었다. 이것이 계속된 요인은 선배들이 우리도 당했다며 되물림한 것과 아무도 말하지 않은 침묵 때문이다. 바꾸려면 인사를 자율로 하고 벌칙을 없애는 규칙을 모두가 함께 정해야 한다. 나는 지도 선생님이 이 규칙을 지키는지 함께 살펴야 한다고 생각한다.', more: { conclude: '구조를 보면 사람을 탓하지 않고도 바꿀 곳이 보여요.' } }),
            RWQ('이 동아리 신입에게 건넬 한 문장과, 2학년에게 건넬 한 문장을 쓰세요.', '가상 동아리의 신입과 2학년에게 각각 건넬 한 문장을 쓰세요.', ['신입에게 알릴 길을 알려 주었다', '2학년에게 바꿀 수 있는 행동을 제안했다', '누구도 깎아내리지 않았다'], { min: 30, max: 250, sent: [2, 2], d: 0.35 }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례 분석의 뼈대를 정리하세요.', columns: ['칸', '내용'], cells: [['바뀐 지점', ''], ['지속 요인', ''], ['바꿀 방법', '']] }] },
        notes: '사례는 가상이다.',
      }),
      M({
        id: 'activity.new-rules', type: 'activity', title: '새 동아리 문화 규칙 설계',
        method: '새 동아리 문화 규칙 설계', tool: 'block-coding', minutes: 17,
        levels: { easy: '단계 셋(환영·멘토 짝 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯(별 넷 + 깃발) 판에서 바위(벌칙 심부름·인사 강요)를 피해 별을 모두 들르고, 친구 계획을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 왼쪽)과 반복을 겹쳐 같은 길을 만들어 \'반대하는 선배가 있으면 도는 갈래\'를 넣는다.' },
        activity: {
          title: '신입 맞이 절차 설계', tool: 'block-coding',
          teacher: '"이 판은 새 신입 맞이 절차예요. 별은 ① 환영 ② 멘토 짝 정하기 ③ 자율 참여 안내 ④ 의견 창구 알리기, 깃발은 ⑤ 문제 시 알리기예요. 가운데 바위 두 개는 \'벌칙 심부름\'과 \'인사 강요\' — 지름길처럼 보여도 지나가면 안 돼요." 실행할 때마다 "이 절차에서 신입이 거절할 수 있는 칸은 어디인가요?"라고 묻는다. "규칙을 만들어도 선배가 안 지키면 소용없다"는 학생에게 "그래서 마지막 칸이 알리기예요. 알릴 곳이 정해져 있으면 무엇이 달라질까요?"라고 되묻는다.',
          task: '바위를 피해 신입 맞이 단계를 모두 들르고 깃발(알리기)에 닿는 프로그램을 만들고, 절차를 활동지에 글로 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷(①환영 ②멘토 짝 ③자율 참여 ④의견 창구)을 모두 들르고 가운데 바위(벌칙 심부름·인사 강요)를 피해 깃발(⑤문제 시 알리기)에 닿게 하세요.', NR, { stars: true }, {
              easy: { prompt: '별 둘(①환영 ②멘토 짝)을 들러 깃발(문제 시 알리기)에 닿게 하세요(단계 셋).', board: NR_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 반복 안에 넣어 별 넷을 들르고 깃발에 닿게 하세요. 막히면 도는 블록은 \'반대하는 선배가 막아서면 지도 선생님 쪽으로 도는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['가운데 바위를 지나는 지름길은 없어요. 판 가장자리를 따라 한 바퀴 돌아요.'] } }),
            TRACEQ('친구 계획이에요: 앞으로 3칸 → 왼쪽으로 돌기 → 앞으로 1칸. 자율 참여·의견 창구 단계에 닿기 전에 멈춰요. 거북이가 멈출 칸을 고르세요.', NR, ['fwd', 'fwd', 'fwd', 'left', 'fwd'], { x: 3, y: 1 }, { d: 0.3, more: { conclude: '환영과 멘토만으로는 끝나지 않아요. 거절할 자유와 알릴 길까지 있어야 새 문화예요.' } }),
            BCQ('친구 프로그램이 ③자율 참여 칸에서 엉뚱한 쪽으로 돌아 판 밖으로 나가요. 블록 하나만 고쳐 별 넷을 들르고 깃발에 닿게 하세요.', NR, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:3', 'fwd', 'end', 'left', 'rep:2', 'fwd', 'end', 'right', 'rep:3', 'fwd', 'end'] }, conclude: '절차의 한 칸이 거꾸로 돌면 처음 의도와 다른 곳에 닿아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 우리 동아리 신입 맞이 절차로 옮겨 쓰세요.', columns: ['단계', '할 일', '신입이 고를 수 있는 것'], cells: [['①', '환영', ''], ['②', '', ''], ['③', '', ''], ['④', '', ''], ['⑤', '문제 시 알리기', ''], ['갈래', '반대하는 선배가 있을 때', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에 글을 붙일 수 없어 절차 단계를 별 칸으로, 강요 관행을 바위로 나타냈다.',
      }),
      M({
        id: 'activity.campaign', type: 'activity', title: '"전통 대신 환영" 포스터',
        method: '"전통 대신 환영" 캠페인', tool: 'collage', minutes: 18,
        levels: { easy: '표어를 담을 포스터를 조각 3개 이상으로 꾸미고 점검한다.', base: '표어 포스터에 약속 셋을 긴 네모 조각 셋으로 넣고, 신입이 문제를 알릴 창구 자리를 동그라미로 표시한다.', challenge: '창구 자리를 별 조각으로 눈에 띄게 하고, 활동지에 대상(신입·선배)별 문구를 다르게 쓴다.' },
        activity: {
          title: '환영 문화 포스터', tool: 'collage',
          teacher: '"동아리 홍보 기간에 붙일 \'전통 대신 환영\' 포스터를 만들어요. 표어는 활동지에 쓰고, 판에는 포스터의 구조를 조각으로 잡아요." 첫 작품을 본 뒤 "이 포스터를 본 신입은 무엇을 알게 될까요? 선배는요?"라고 묻는다. \'군기\'·\'충성\' 같은 낱말로 표어를 쓴 모둠에게 "그 낱말이 신입에게 어떻게 들릴까요?"라고 되묻는다. 신입이 문제를 알릴 창구는 포스터에서 가장 눈에 띄어야 한다는 점을 짚는다.',
          task: '"전통 대신 환영" 포스터의 구조를 조각으로 만들고 점검해요(표어 글은 활동지에).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표어를 담을 포스터 바탕을 조각 3개 이상으로 꾸미고 점검하세요.', toolOptions: { shapes: SHAPES }, target: { selfCheck: ['표어를 둘 자리를 크게 비웠다', '환영을 나타내는 모양을 넣었다', '멀리서도 보이게 색을 골랐다'], minPieces: 3 }, difficulty: 0.2 },
            { prompt: '포스터에 약속 셋을 긴 네모 조각 세 개로 넣으세요(자율 참여·벌칙 없음·의견 창구).', toolOptions: { shapes: SHAPES }, target: { has: [{ shape: 'rect', min: 3 }], selfCheck: ['긴 네모마다 넣을 약속을 활동지에 썼다'] }, difficulty: 0.3 },
            { prompt: '신입이 문제를 알릴 창구 자리를 동그라미 조각으로 표시하세요.', toolOptions: { shapes: SHAPES }, target: { has: [{ shape: 'circle', min: 1 }], selfCheck: ['창구 자리가 포스터에서 눈에 띈다'] }, difficulty: 0.3,
              levels: { challenge: { prompt: '신입이 문제를 알릴 창구 자리를 별 조각으로 눈에 띄게 표시하세요(별 조각).', target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['창구 자리가 포스터에서 가장 눈에 띈다', '대상별 문구를 활동지에 썼다'] } } },
              conclude: '좋은 캠페인은 \'하지 마\'보다 \'이렇게 하자\'와 \'여기로 알려\'를 보여 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 쓰세요.', columns: ['칸', '문구'], cells: [['표어', ''], ['약속 셋', ''], ['알릴 창구', ''], ['선배에게 한마디', '']] }] },
        notes: '교구 한계: 콜라주 판에는 글을 쓸 수 없어 표어·약속 글은 활동지에 쓰고, 판에서는 포스터 구조(약속 칸·창구 자리)를 조각으로 잡는다.',
      }),

      M({
        id: 'wrap.concept-map', type: 'wrap', title: '위계·존중·강요 개념 지도',
        method: '위계와 존중의 차이 지도', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 위계·존중 가지에 카드 한 장씩을 함께 놓는다.', base: '위계·존중·강요 세 가지에 카드를 나눈다.', challenge: '진로(대학·직장)에서의 모습을 활동지 가지에 더한다.' },
        wrap: {
          teacher: '"오늘 다룬 세 낱말 — 위계, 존중, 강요 — 를 가지로 정리해 봐요." 카드를 나눈 뒤 "선배가 경험이 많다는 것(위계)과 선배가 시키면 다 해야 한다는 것(강요)은 어떻게 다를까요?"라고 묻는다. 위계가 있는 곳에도 존중은 있을 수 있고, 강요는 위계를 핑계로 생긴다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '선후배 사이', slots: ['위계', '존중', '강요'], cards: ['경험이 많아 연습을 이끄는 역할', '싫다고 해도 불이익이 없음', '안 하면 벌칙이 따름', '주장이 훈련 계획을 짠다', '신입 의견도 회의에서 들음', '신입만 선배 짐을 듦', '선배니까 무조건 옳다'] }, prompt: '선후배 사이의 모습을 위계·존중·강요 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { 위계: ['경험이 많아 연습을 이끄는 역할', '주장이 훈련 계획을 짠다'], 존중: ['싫다고 해도 불이익이 없음', '신입 의견도 회의에서 들음'], 강요: ['안 하면 벌칙이 따름', '신입만 선배 짐을 듦'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '"우리도 당했으니 해도 된다"에 대한 말로 알맞은 것은?', options: ['당한 사람에게는 할 권리가 생긴다', '예전 강요를 그대로 이어 가면 강요가 되물림된다', '전통이라면 괜찮다'], answer: 1, difficulty: 0.2, explain: '예전에 강요가 있었다는 것은 이어 갈 이유가 아니라 멈출 이유예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '위계·존중·강요',
          items: [
            { type: 'short', prompt: '위계와 강요의 차이를 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '대학이나 직장에서 볼 수 있는 \'위계를 핑계로 한 강요\'의 모습 하나와 그때 할 행동을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.pledge-rhythm', type: 'wrap', title: '존중을 담은 동아리 구호',
        method: '동아리 구호 바꾸기', tool: 'keyboard', minutes: 7,
        levels: { easy: '교사가 한 줄 구호를 함께 정하고, 한 마디(4박) 리듬을 놓는다.', base: '두 줄 구호를 활동지에 쓰고 두 마디 리듬을 박에 맞게 놓는다.', challenge: '모든 부원이 함께할 동작을 쉼표 자리에 붙여 말한다.' },
        wrap: {
          teacher: '"\'선배 말은 법이다\' 같은 구호 대신, 존중을 담은 구호를 만들어 봐요. 먼저 활동지에 두 줄을 쓰고, 그 말이 실릴 리듬을 두 마디로 놓아요." 리듬을 놓은 뒤 쉼표 자리에서 다 같이 손뼉을 치게 한다. 구호에 \'군기\'·\'복종\'이 들어가면 "신입이 이 구호를 외치며 무엇을 배울까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], showBeats: true }, prompt: '구호를 실을 리듬을 두 마디(마디마다 4박)로 놓으세요. 다 같이 손뼉 칠 쉼표를 한 번 이상 넣어요.', target: { beats: true, rests: 1 }, difficulty: 0.25 },
            { type: 'choice', prompt: '존중을 담은 구호로 가장 알맞은 것은?', options: ['선배 말은 곧 법이다', '처음 온 사람도 함께, 싫으면 말해도 돼', '참는 자가 이긴다'], answer: 1, difficulty: 0.15, explain: '존중의 구호는 함께하자는 말과 거절할 자유를 함께 담아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '동아리 구호',
          items: [
            { type: 'short', prompt: '존중을 담은 두 줄 구호를 쓰세요.' },
            { type: 'short', prompt: '쉼표 자리에 다 같이 할 동작을 쓰세요.' },
          ],
        },
        notes: '교구 한계: 건반 판의 리듬 블록에는 글을 실을 수 없어 구호 글은 활동지에 쓰고, 교구는 구호의 리듬(두 마디)을 짓는다.',
      }),
    );
  }

  // ======================================================================================================
  // 12. 학교폭력 예방 정책 제안서 (11학년)
  // ======================================================================================================
  {
    const M = MOD('g11-policy', [11]);
    // 가상 학교 설문: 유형·장소·시간대
    const KIND = [['언어(놀림·욕설)', 34], ['사이버(단톡방·게시판)', 29], ['따돌림', 18], ['신체', 9], ['금품', 6]];
    const PLACE = [['교실', 31], ['온라인', 33], ['복도·계단', 14], ['학교 밖', 12], ['운동장', 7]];
    const TIME = [['쉬는 시간', 28], ['점심시간', 22], ['방과 후', 19], ['밤 시간(온라인)', 26]];
    const BAR = (title, data, more = {}) => Object.assign({ type: 'bar', mode: 'read', title: `${title}(가상 학교 설문, %)`, unit: '%', xLabel: '항목', yLabel: '응답 비율', data }, more);
    // 예산 대안(가상 예산 100만 원, 1단위 = 1만 원)
    const OPT = [
      { id: 'peer', text: '또래 상담 동아리 운영', price: 300000 }, { id: 'cyber', text: '단톡방 예절 교육(학년별)', price: 250000 },
      { id: 'counsel', text: '상담 선생님 상담 시간 늘리기', price: 400000 }, { id: 'cctv', text: '복도 감시 카메라 더 달기', price: 450000 },
      { id: 'circle', text: '학급 회복 서클 연수', price: 200000 }, { id: 'poster', text: '홍보 포스터 인쇄', price: 100000 },
    ];
    const OPT2 = OPT.filter((x) => ['cyber', 'cctv'].includes(x.id));
    // 이해관계자 갈림길
    const PITCH = { text: '학생회가 \'밤 시간 단톡방 괴롭힘\'을 줄이려 "학년별 단톡방 예절 교육 + 또래 상담 동아리"를 제안했다. 첫 자리는 교사회다.', who: '학생회', motif: 'house', choices: [
      { id: 'data', text: '가상 설문 자료와 실행 일정을 함께 낸다', result: '교사회가 "시간표에 넣을 수 있겠다"며 일정 조정을 묻는다.', impact: [{ who: '제안', text: '실행할 수 있는 안으로 다듬어진다', tone: 1 }],
        next: { text: '보호자회는 "교육만으로 될까? 감시 카메라를 더 달자"고 한다.', choices: [
          { id: 'listen', text: '걱정을 받아 \'보호자 안내문\'을 더하고 카메라가 온라인 괴롭힘은 못 막는다는 근거를 낸다', result: '보호자회가 안내문 안을 받아들인다.', impact: [{ who: '제안', text: '세 집단이 함께 지지한다', tone: 1 }],
            next: { text: '학생 설문에서 "또래 상담자가 비밀을 지킬까 걱정"이라는 의견이 나왔다.', choices: [
              { id: 'link', text: '또래 상담자는 듣고 어른과 잇는 역할까지라는 원칙을 제안에 적는다', result: '학생 지지가 늘고 최종안이 채택된다.', impact: [{ who: '학생', text: '안심하고 이용한다', tone: 1 }], ending: '반응을 받아 고칠수록 제안은 모두의 안이 된다.' },
              { id: 'ignore', text: '처음 안대로 밀고 나간다', result: '동아리가 열렸지만 찾아오는 학생이 적다.', impact: [{ who: '학생', text: '이용을 망설인다', tone: 0 }], ending: '이용할 사람의 걱정을 듣지 않은 정책은 비어 있다.' }] } },
          { id: 'swap', text: '보호자회 말대로 교육을 빼고 카메라 안으로 바꾼다', result: '복도는 조용해졌지만 밤 시간 단톡방 괴롭힘은 그대로다.', impact: [{ who: '제안', text: '처음 문제를 놓친다', tone: -1 }], ending: '문제 정의를 잊고 바꾸면 다른 문제를 풀게 된다.' }] } },
      { id: 'idea', text: '자료 없이 "좋은 뜻이니 해 주세요"라고 말한다', result: '교사회가 "무엇이 문제인지 근거부터 보자"고 미룬다.', impact: [{ who: '제안', text: '다음 회의로 넘어간다', tone: 0 }], ending: '좋은 의도도 근거가 있어야 실행으로 간다.' }] };
    const PITCH_R = [{ id: 'evidence', text: '근거 자료가 있어야 제안이 실행으로 간다' }, { id: 'revise', text: '이해관계자의 걱정을 받아 고치면 지지가 넓어진다' }, { id: 'problem', text: '고칠 때도 처음 정한 문제를 놓치지 않는다' }, { id: 'adult', text: '정책은 어른만 만들 수 있다', why: '학생도 근거를 갖춰 제안할 수 있어요. 학교 공동체가 함께 정해요.' }];

    MODS.push(
      M({
        id: 'intro.problem-data', type: 'intro', title: '자료로 우선 문제 정하기',
        method: '문제 정의용 가상 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '교사가 유형 자료 하나만 함께 읽고 가장 큰 막대를 찾는다.', base: '유형·장소 자료 둘을 견주어 우선 해결할 문제를 정한다.', challenge: '세 자료(유형·장소·시간대)를 묶어 문제 정의 문장 하나를 말한다.' },
        intro: {
          teacher: '"정책 제안서의 첫 칸은 \'무엇이 문제인가\'예요. 가상 학교 설문 세 장 — 유형, 장소, 시간대 — 을 보고 우리가 먼저 풀 문제를 정해 봐요." 시연 단추로 장소 자료에서 가장 큰 막대를 고르는 모습을 보여 준다. "가장 큰 막대가 곧 해결할 문제"라는 말이 나오면 "언어 폭력이 가장 많지만, 온라인과 밤 시간이 함께 크다면 어떤 문제로 묶을 수 있을까요?"라고 되묻는다. 자료는 수업용 가상 값이라는 점을 밝힌다.',
          student: '가상 학교 설문의 유형·장소·시간대 자료를 읽고, 우리 제안서가 먼저 풀 문제를 정해 보세요.',
          demo: { tool: 'chart', options: BAR('괴롭힘을 본 장소', PLACE, { question: '가장 많이 본 장소는?', choices: PLACE.map((x) => x[0]), showValues: true }), sequence: [{ pick: 1 }] },
          art: { draw: 'three paper bar charts pinned side by side on a corkboard, a paper student council table in front with a blank proposal sheet, a paper pencil circling the tallest bars', banner: '무엇부터 풀까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '설문 값은 모두 수업용 가상 자료다. 실제 학교 실태조사는 학교가 따로 제시할 수 있다.',
      }),
      M({
        id: 'intro.option-tree', type: 'intro', title: '대안 가지 펼치기',
        method: '대안 가지 펼치기', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 교육·환경 두 가지에 대안 카드를 놓아 보인다.', base: '교육·환경·제도·문화 네 가지에 대안 카드를 나누는 시연을 본다.', challenge: '대안마다 예상 부작용(예: 감시 카메라 → 사생활 걱정)을 하나씩 말한다.' },
        intro: {
          teacher: '"문제를 \'밤 시간 단톡방 괴롭힘\'으로 정했다고 해 봐요. 대안은 한 가지만 있을까요? 교육·환경·제도·문화 네 가지로 펼쳐 봐요." 시연 단추로 카드가 가지에 나뉘는 모습을 보여 준다. "처벌을 세게 하면 다 해결된다"는 말이 나오면 "처벌은 제도 가지의 하나예요. 다른 가지의 대안 없이 그것만 하면 무엇이 빠질까요?"라고 되묻는다.',
          student: '정한 문제에 대한 대안을 교육·환경·제도·문화 네 가지로 펼쳐 보고, 어느 가지가 비어 있는지 살펴보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '밤 시간 단톡방 괴롭힘', slots: ['교육', '환경', '제도', '문화'], cards: ['학년별 단톡방 예절 교육', '학급 단톡방 밤 10시 이후 알림 끄기 약속', '익명 신고 창구 만들기', '"멈춰" 한마디 캠페인', '보호자 안내문', '또래 상담 동아리'] }, sequence: [{ sort: { 교육: ['학년별 단톡방 예절 교육', '보호자 안내문'], 환경: ['학급 단톡방 밤 10시 이후 알림 끄기 약속'], 제도: ['익명 신고 창구 만들기'], 문화: ['"멈춰" 한마디 캠페인', '또래 상담 동아리'] } }] },
          art: { draw: 'a paper tree with a phone glowing at night in the trunk and four paper branches labeled with small icons of a book, a door, a clipboard and a group of hands, paper leaves being added by students', banner: '대안은 여러 가지예요', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
        notes: '대안 카드는 예시다. \'밤 10시\' 같은 값은 학급 약속의 예이며 규정이 아니다.',
      }),

      M({
        id: 'activity.proposal-writing', type: 'activity', title: '정책 제안서 다섯 칸',
        method: '정책 제안서 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '문제·근거·대안 세 칸을 문장 틀을 보고 쓴다.', base: '문제·근거·대안·실행·평가 다섯 칸을 쓰고 기준표로 점검한다.', challenge: '예상 반론과 답을 덧붙이는 기준이 하나 더해진다.' },
        activity: {
          title: '정책 제안서', tool: 'rubric-writing',
          teacher: '"오늘은 학교에 낼 제안서를 써요. 칸은 다섯 개 — 문제, 근거, 대안, 실행, 평가." 기준표를 먼저 함께 읽는다. 근거 칸에 \'다들 그렇다고 한다\'를 쓴 학생에게 "가상 설문의 어느 막대가 그 주장을 보여 주나요?"라고 묻는다. 대안이 \'가해 학생 엄벌\'뿐인 글에는 "피해 학생의 일상 회복은 이 안에서 누가 맡나요?"라고 되묻는다. 학교·학생·교사의 실명은 쓰지 않는다.',
          task: '가상 설문을 근거로 학교 학교폭력 예방 정책 제안서를 칸마다 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('문제와 근거를 2~3문장으로 쓰세요.', '우리가 정한 문제와 그 근거(가상 설문 자료)를 쓰세요.', ['문제를 한 문장으로 분명히 썼다', '가상 설문 자료를 근거로 들었다', '자료가 가상이라는 점을 밝혔다'], { min: 50, max: 350, sent: [2, 3], must: [['자료', '설문', '%']], starter: '우리 학교의 문제는 ~이다. 가상 설문에서 ~', d: 0.35 }),
            RWQ('대안과 실행 계획을 2~3문장으로 쓰세요.', '문제를 줄일 대안 하나와, 누가·언제·어떻게 할지 실행 계획을 쓰세요.', ['대안이 문제와 이어진다', '누가·언제·어떻게가 있다', '피해 학생 지원이 들어 있다'], { min: 50, max: 350, sent: [2, 3], starter: '대안은 ~이다. ~가 ~에 ~한다.', d: 0.4 }),
            RWQ('평가 방법을 1~2문장으로 쓰세요.', '대안이 효과가 있었는지 무엇으로 확인할지 쓰세요.', ['확인할 지표를 썼다', '언제 확인할지 썼다', '결과에 따라 고칠 길을 남겼다'], { min: 30, max: 250, sent: [1, 2], must: [['평가', '확인', '설문']], starter: '한 학기 뒤 ~로 확인한다.', plus: '예상 반론 하나와 그에 대한 답을 썼다', d: 0.4,
              sample: '한 학기 뒤 같은 가상 설문을 다시 해 밤 시간 단톡방에서 괴롭힘을 봤다는 응답이 줄었는지 확인한다. 줄지 않았다면 학생회와 교사회가 함께 대안을 고친다.', more: { conclude: '좋은 제안서는 문제에서 평가까지 한 줄로 이어지고, 결과에 따라 고칠 길을 남겨 둬요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서 다섯 칸의 뼈대를 정리하세요.', columns: ['칸', '쓸 내용'], cells: [['문제', ''], ['근거', ''], ['대안', ''], ['실행', ''], ['평가', '']] }] },
      }),
      M({
        id: 'activity.budget', type: 'activity', title: '정책 예산 배분',
        method: '정책 예산 배분', tool: 'economy', minutes: 18,
        levels: { easy: '대안 둘(교육·카메라) 가운데 문제에 맞는 것을 예산 안에서 고른다.', base: '대안 여섯 가운데 가상 예산 100만 원 안에서 문제와 피해 학생 지원에 맞는 조합을 고른다.', challenge: '예산이 50만 원으로 줄었을 때 우선순위를 다시 정해 고른다.' },
        activity: {
          title: '가상 예산 배분', tool: 'economy',
          teacher: '"가상 예산은 100만 원(1단위 = 1만 원)이에요. 대안마다 드는 돈이 다르고, 다 할 수는 없어요." 고를 때마다 "이 대안은 우리가 정한 문제(밤 시간 단톡방 괴롭힘)를 줄이나요?"라고 묻는다. 감시 카메라를 먼저 고른 모둠에게 "복도 카메라가 밤 시간 단톡방을 볼 수 있을까요?"라고 되묻는다. 돈을 어디에 쓰는지가 곧 무엇을 중요하게 여기는지라는 점을 짚는다.',
          task: '가상 예산 안에서 문제와 피해 학생 지원에 맞는 대안을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '문제(밤 시간 단톡방 괴롭힘)를 줄이는 대안을 예산 100만 원 안에서 고르세요. 단톡방 예절 교육은 꼭 넣고, 복도 감시 카메라는 넣지 않아요.', toolOptions: { mode: 'budget', budget: 1000000, items: OPT, ask: '예산 100만 원(가상) 안에서 고르기' }, target: { budget: { must: ['cyber'], not: ['cctv'], min: 450000 } }, difficulty: 0.3,
              levels: { easy: { prompt: '대안 둘 가운데 밤 시간 단톡방 괴롭힘을 줄이는 것을 예산 안에서 고르세요(대안 둘).', toolOptions: { items: OPT2 }, target: { budget: { must: ['cyber'], not: ['cctv'] } } } } },
            { prompt: '피해 학생의 마음 회복도 챙겨야 해요. 상담 시간 늘리기를 꼭 넣고, 예산 100만 원 안에서 대안 세 가지를 고르세요.', toolOptions: { mode: 'budget', budget: 1000000, items: OPT }, target: { budget: { must: ['counsel'], count: 3 } }, difficulty: 0.35 },
            { prompt: '예산이 50만 원(가상)으로 줄었어요. 피해 학생 지원(상담 시간)을 지키고 남는 돈으로 하나를 더 고르세요.', toolOptions: { mode: 'budget', budget: 500000, items: OPT }, target: { budget: { must: ['counsel'], count: 2 } }, difficulty: 0.4,
              conclude: '예산이 줄어도 지켜야 할 것을 먼저 정해요. 피해 학생 지원은 마지막에 깎을 칸이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '고른 조합 하나를 쓰고, 그 조합이 문제와 피해 학생 지원에 주는 효과를 근거와 함께 쓰세요.' }] },
        notes: '교구 한계: 시장판은 돈(원)만 세어 \'예산 100단위\'를 \'가상 예산 100만 원(1단위 = 1만 원)\'으로 바꾸었다. 대안 비용은 모두 가상이다.',
      }),
      M({
        id: 'activity.stakeholder-dilemma', type: 'activity', title: '제안이 만나는 세 자리',
        method: '이해관계자 반응 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '첫 자리(교사회)에서 갈림길 하나를 고르고 근거를 고른다.', base: '교사회·보호자회 자리까지 갈림길 둘을 따라가 결과를 보고 근거를 고른다.', challenge: '학생 의견까지 갈림길 셋을 따라가고, 다른 길도 끝까지 가 보며 처음 안과 최종안의 차이를 활동지에 정리한다.' },
        activity: {
          title: '이해관계자 갈림길', tool: 'dilemma',
          teacher: '"학생회의 제안이 교사회, 보호자회, 학생들 앞에 차례로 서요. 반응을 들으면 고칠까요, 지킬까요?" 선택마다 제안에 생긴 영향을 읽게 한다. 보호자회 장면에서 카메라 안으로 바꾼 학생에게 "우리가 처음 정한 문제는 무엇이었나요?"라고 묻는다. 고치는 것과 문제를 놓치는 것은 다르다는 점을 짚는다.',
          task: '학생회 제안이 이해관계자를 만나는 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('제안이 채택되는 길을 따라가고 내 선택의 근거를 고르세요.', PITCH, [['data', 'listen', 'link']], PITCH_R, ['evidence', 'revise'], { d: 0.4 }),
            DILQ('보호자회 장면에서 다시 시작해요. 처음 정한 문제를 지키는 선택을 고르고 근거를 고르세요.', { text: PITCH.choices[0].next.text, who: '학생회', motif: 'house', choices: PITCH.choices[0].next.choices }, [['listen', 'link']], PITCH_R, ['revise', 'problem'], { d: 0.35 }),
            EXPLOREQ('카메라 안으로 바꾼 길과 고쳐서 채택된 길을 끝까지 가 보고 견주세요.', PITCH, PITCH_R, ['끝 장면 둘 이상을 확인했다', '처음 안과 최종안이 어떻게 다른지 견주었다'], { d: 0.35, more: { conclude: '반응을 들어 고치되, 처음 정한 문제는 끝까지 붙들어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '처음 안과 최종안을 견주세요.', columns: ['', '처음 안', '최종안'], cells: [['대안', '', ''], ['더해진 것', '', ''], ['바뀐 까닭', '', '']] }] },
        notes: '이해관계자의 반응은 가상이다. 실제 학교 회의 절차는 학교마다 다르다.',
      }),

      M({
        id: 'wrap.pitch-poster', type: 'wrap', title: '제안 한 장 요약판',
        method: '제안 한 장 요약판', tool: 'collage', minutes: 7,
        levels: { easy: '문제·대안·평가 세 칸을 조각 3개 이상으로 나눈 요약판을 만든다.', base: '다섯 칸(문제·근거·대안·실행·평가)을 긴 네모 다섯 조각으로 나눈다.', challenge: '근거 칸에 그래프를 나타내는 조각을 더하도록 교사가 권하고, 활동지에 칸별 한 줄을 쓴다.' },
        wrap: {
          teacher: '"제안서를 복도 게시판 한 장으로 줄여 봐요. 한 장에서 무엇이 가장 먼저 보여야 할까요?" 두세 작품을 보여 주며 "지나가는 사람이 10초만 본다면 무엇을 기억할까요?"라고 묻는다. 칸별 글은 활동지에 쓴다는 점을 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'square', 'circle', 'star', 'triangle'] }, prompt: '제안 요약판의 다섯 칸을 긴 네모 조각 다섯 개로 나누고 점검하세요.', target: { has: [{ shape: 'rect', min: 5 }], selfCheck: ['문제 칸이 가장 먼저 보인다', '칸마다 넣을 한 줄을 활동지에 썼다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '좋은 정책 제안에 대한 말로 맞는 것은?', options: ['좋은 의도면 근거는 없어도 된다', '문제·근거·대안·실행·평가가 이어져야 한다', '정책은 어른만 만들 수 있다'], answer: 1, difficulty: 0.15, explain: '근거와 평가가 있어야 제안이 실행되고 고쳐질 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '제안 한 장 요약',
          items: [
            { type: 'table', prompt: '칸마다 한 줄씩 쓰세요.', columns: ['칸', '한 줄'], cells: [['문제', ''], ['대안', ''], ['평가', '']] },
            { type: 'short', prompt: '요약판을 본 사람이 해 주었으면 하는 행동 하나를 쓰세요.' },
          ],
        },
        notes: '교구 한계: 콜라주 판에는 글을 쓸 수 없어 칸 구조만 조각으로 잡고 글은 활동지에 쓴다.',
      }),
      M({
        id: 'wrap.timeline-plan', type: 'wrap', title: '제안 실행 일정표',
        method: '실행 일정표', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 단계 셋(제안·교육·평가)을 먼저 띠에 놓아 보이고 나머지를 함께 놓는다.', base: '실행 단계 카드 다섯 장을 학기 띠에 차례로 놓는다.', challenge: '중간 점검 시점이 왜 필요한지 짝에게 말하고 활동지에 쓴다.' },
        wrap: {
          teacher: '"제안이 채택되면 언제 무엇을 할까요? 학기 띠에 단계를 놓아 봐요." 카드를 놓은 뒤 \'중간 점검\'이 빠지면 무엇이 생기는지 묻는다. "다 하고 마지막에 한 번 보면 된다"는 학생에게 "학기 중간에 효과가 없다는 걸 알았다면 무엇을 할 수 있었을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['학기 초', '학기 말'], slots: 5, cards: ['중간 점검 설문', '학생회·교사회에 제안', '학기 말 평가와 고치기', '학년별 단톡방 예절 교육', '또래 상담 동아리 시작'] }, prompt: '제안 실행 단계를 학기 띠에 차례로 놓으세요.', target: { order: ['학생회·교사회에 제안', '학년별 단톡방 예절 교육', '또래 상담 동아리 시작', '중간 점검 설문', '학기 말 평가와 고치기'] }, difficulty: 0.2 },
            { type: 'short', prompt: '중간 점검 시점이 필요한 까닭을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '실행 일정표',
          items: [
            { type: 'table', prompt: '단계마다 맡을 사람을 쓰세요(실명 대신 역할로).', columns: ['단계', '맡을 역할'], cells: [['제안', ''], ['교육', ''], ['중간 점검', ''], ['평가', '']] },
            { type: 'short', prompt: '평가 결과가 나쁘면 무엇을 고칠지 한 문장으로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 13. 성인 공동체 단톡방의 사이버 괴롭힘 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-adult-chat', [12]);
    // 아르바이트 단톡방 장면(도입)
    const SHOP = { text: '아르바이트 단톡방. 점장이 계산 실수를 한 솔에게 직원 열두 명이 보는 방에서 "이런 기본도 못 하면 그만둬라"라고 올렸다.', who: '나(같이 일하는 직원)', motif: 'house', choices: [
      { id: 'harass', text: '공개 망신이라 괴롭힘이 될 수 있다고 본다', result: '실수를 바로잡는 지시와 여럿 앞에서 깎아내리는 말은 다르다는 점이 보인다.', impact: [{ who: '솔', text: '혼자가 아니라는 판단이 생긴다', tone: 1 }],
        next: { text: '같은 날 다른 지점 단톡방에서는 점장이 "계산 실수 났으니 마감 때 영수증 확인 부탁해요"라고 올렸다.', choices: [
          { id: 'fair', text: '이건 업무 지시로 정당하다고 본다', result: '실수를 다루되 사람을 깎아내리지 않는 말이라는 점이 보인다.', impact: [{ who: '직원들', text: '할 일을 분명히 안다', tone: 1 }], ending: '같은 실수라도 업무를 말하면 지시, 사람을 깎아내리면 괴롭힘의 신호다.' },
          { id: 'both', text: '둘 다 똑같이 괴롭힘이다', result: '두 말의 차이를 놓치면 정당한 지시까지 거부하게 된다.', impact: [{ who: '나', text: '경계를 세우기 어려워진다', tone: 0 }], ending: '경계는 \'불편함\'이 아니라 공개성·인격 공격·업무 관련성으로 가린다.' }] } },
      { id: 'normal', text: '사장님 말이니 참는 게 사회생활이다', result: '솔은 다음 날부터 단톡방 알림에 손이 떨린다고 한다.', impact: [{ who: '솔', text: '혼자 견딘다', tone: -1 }], ending: '참는 것이 당연해지면 공개 망신은 되풀이된다.' }] };
    const SHOP_R = [{ id: 'public', text: '여럿이 보는 곳에서 사람을 깎아내리면 괴롭힘의 신호다' }, { id: 'task', text: '업무 지시는 사람이 아니라 일을 말한다' }, { id: 'endure', text: '어른 사이에서는 참는 게 사회생활이다', why: '참아야 할 의무는 없어요. 업무와 인격 공격은 다르게 봐요.' }];
    // 과 단톡방에서 한 명이 빠질 때(활동)
    const DEPT = { text: '대학 새내기 과 단톡방. 엠티 공지가 민에게만 따로 가지 않았고, 민이 묻자 조롱 이모티콘이 줄줄이 달린다.', who: '나(같은 과 새내기)', motif: 'cloud', choices: [
      { id: 'ignore', text: '어색해질까 봐 모른 척한다', result: '민이 단톡방을 조용히 나간다.', impact: [{ who: '민', text: '과에서 고립된다', tone: -1 }], ending: '모른 척은 한 명 빼기를 완성하는 마지막 한 칸이 된다.' },
      { id: 'dm', text: '민에게 개인 메시지로 공지를 전하고 "같이 가자"고 한다', result: '민이 공지를 받고 조금 안심한다.', impact: [{ who: '민', text: '한 사람의 편이 생긴다', tone: 1 }],
        next: { text: '그 뒤에도 단톡방에서 민을 겨냥한 이모티콘이 이어진다.', choices: [
          { id: 'public', text: '단톡방에 "공지는 모두에게, 조롱은 멈추자"고 쓴다', result: '몇 명이 이모티콘을 멈추고 과대표가 공지를 다시 올린다.', impact: [{ who: '민', text: '공개적으로 존중받는다', tone: 1 }],
            next: { text: '한 선배가 "분위기 깬다"며 나를 비꼰다.', choices: [
              { id: 'office', text: '대화를 기록해 두고 학생 지원 창구에 상담을 요청한다', result: '창구가 과 대표들과 단톡방 운영 원칙을 논의한다.', impact: [{ who: '민', text: '되풀이가 멈춘다', tone: 1 }, { who: '나', text: '혼자 감당하지 않는다', tone: 1 }], ending: '고등학교 때처럼 — 멈추고, 곁에 서고, 기록하고, 알린다. 성인 공동체에도 창구가 있다.' },
              { id: 'quit', text: '나도 피곤해져 단톡방을 나간다', result: '조롱은 줄었지만 다시 시작될 기미가 보인다.', impact: [{ who: '민', text: '든든한 편이 사라진다', tone: 0 }], ending: '혼자 맞서다 지치지 않게, 창구와 동료를 함께 써야 한다.' }] } },
          { id: 'only', text: '개인 연락으로 충분하다고 여기고 더 하지 않는다', result: '민은 받았지만 단톡방 분위기는 그대로다.', impact: [{ who: '민', text: '여전히 공개적으로 놀림받는다', tone: 0 }], ending: '개인 지지에 공개적인 멈춤이 더해질 때 분위기가 바뀐다.' }] } },
      { id: 'joke', text: '분위기에 맞춰 나도 이모티콘을 단다', result: '조롱이 더 길어진다.', impact: [{ who: '민', text: '더 큰 상처를 받는다', tone: -1 }], ending: '웃는 이모티콘 하나도 조롱에 힘을 보탠다.' }] };
    const DEPT_R = [{ id: 'side', text: '한 명에게 먼저 다가가 곁에 서는 것이 시작이다' }, { id: 'stop', text: '공개적인 멈춤이 분위기를 바꾼다' }, { id: 'channel', text: '성인 공동체에도 기록하고 알릴 창구가 있다' }, { id: 'adult', text: '성인은 스스로 알아서 해야 한다', why: '성인이 되어도 괴롭힘의 구조는 같아요. 곁에 서고 알리는 원칙도 같아요.' }];
    // 기록과 알림 판: 별 = 기록·원본 보존·믿을 사람과 의논·기관 내 창구, 깃발 = 외부 상담
    const RB = { cols: 5, rows: 5, start: { x: 2, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[2, 3], [2, 2], [2, 1], [2, 0]], rocks: [[1, 3], [3, 2]] };
    const RB_EASY = { cols: 2, rows: 3, start: { x: 0, y: 2, dir: 'N' }, goal: { x: 1, y: 0 }, stars: [[0, 1], [0, 0]], rocks: [] };
    // 청년 첫 해 괴롭힘 유형(가상 조사)
    const YOUNG = [['단톡방·메신저', 38], ['공개 질책', 24], ['업무·모임에서 빼기', 21], ['신체·물건', 9], ['그 밖', 8]];
    const PIE = (more = {}) => Object.assign({ type: 'circle', mode: 'read', title: '대학·아르바이트·직장 첫해에 본 괴롭힘 유형(가상 조사, %)', unit: '%', data: YOUNG }, more);

    MODS.push(
      M({
        id: 'intro.scene-judge', type: 'intro', title: '아르바이트 단톡방, 지시일까 괴롭힘일까',
        method: '아르바이트 단톡방 장면 판단', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 장면 하나(공개 질책)만 함께 판단하고 결과를 본다.', base: '공개 질책 장면과 업무 지시 장면 둘을 견주어 판단하는 시연을 본다.', challenge: '경계를 가르는 기준 셋(공개성·인격 공격·업무 관련성)을 짝과 말한다.' },
        intro: {
          teacher: '"졸업하면 많은 사람이 아르바이트나 일터의 단톡방에 들어가요. 점장이 실수를 단톡방에서 다뤘어요 — 이건 지시일까요, 괴롭힘일까요?" 시연 단추로 두 장면을 차례로 보여 준다. "어른 사이에서는 참는 게 사회생활"이라는 말이 나오면 "같은 실수를 두고 \'영수증 확인 부탁해요\'와 \'그만둬라\'는 무엇이 다를까요?"라고 되묻는다. 판단 기준 세 가지를 칠판에 적는다.',
          student: '아르바이트 단톡방의 두 장면을 견주어 정당한 업무 지시와 괴롭힘이 어디서 갈리는지 판단해 보세요.',
          demo: { tool: 'dilemma', options: { scene: SHOP, reasons: SHOP_R, title: '아르바이트 단톡방' }, sequence: [{ path: ['harass', 'fair'], reasons: ['public', 'task'] }] },
          art: { draw: 'a paper phone screen showing a group chat of a small cafe, one large red paper speech bubble standing out among small ones, a paper cash register and receipt on the side, a paper coworker looking at the screen with concern', banner: '지시와 괴롭힘의 경계', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '솔은 가상 인물이다. 학생에게 자기 아르바이트 경험을 말하게 하지 않는다.',
      }),
      M({
        id: 'intro.time-clock', type: 'intro', title: '밤늦은 메시지의 시각',
        method: '연락 시간 분석', tool: 'clock', minutes: 7,
        levels: { easy: '교사가 메시지 시각 다섯 개 가운데 둘을 시계판에 맞춰 보인다.', base: '가상 단톡방 메시지 시각을 시계판에 차례로 찍는 시연을 보고 밤늦은 연락이 몰린 때를 찾는다.', challenge: '적절한 연락 시간 규칙(예: 밤 10시 뒤에는 급한 일만)을 우리 반 약속처럼 제안한다.' },
        intro: {
          teacher: '"가상 동아리 단톡방에서 선배가 보낸 메시지 시각이에요 — 밤 11시 40분, 12시 15분, 1시 30분. 그리고 \'왜 답 안 해?\'가 이어져요." 시연 단추로 시계판에 시각이 차례로 찍히는 모습을 보여 준다. "급하면 밤에도 연락할 수 있지 않나요?"라는 말이 나오면 "한 번의 급한 연락과, 매일 밤 답장을 강요하는 것은 무엇이 다를까요?"라고 되묻는다. 연락 시간 규칙의 숫자는 법이 아니라 공동체가 정하는 약속이라는 점을 밝힌다.',
          student: '가상 단톡방 메시지가 온 시각을 시계판에서 확인하고, 밤늦은 연락과 답장 강요가 되풀이되는 패턴을 찾아보세요.',
          demo: { tool: 'clock', options: { minuteStep: 5 }, sequence: [{ h: 11, m: 40 }, { h: 12, m: 15 }, { h: 1, m: 30 }] },
          art: { draw: 'a paper alarm clock on a bedside table at night with three small paper message bubbles stacked around its face, a crescent moon in the window, a paper phone lighting up a pillow', banner: '이 시각에 꼭 답해야 할까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '메시지 시각은 가상이다. \'밤 10시\' 같은 규칙 값은 공동체 약속의 예다.',
      }),

      M({
        id: 'activity.response-dilemma', type: 'activity', title: '과 단톡방에서 한 명이 빠질 때',
        method: '과 단톡방에서 한 명이 빠질 때', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 하나에서 반응을 고르고 근거를 고른다.', base: '갈림길 둘을 따라가 민의 결과를 보고 근거를 고른다.', challenge: '선배가 비꼬는 장면까지 갈림길 셋을 따라가고, 근거를 고등학교 때 배운 조력자 원칙(멈추기·곁에 서기·기록·알리기)과 잇는다.' },
        activity: {
          title: '과 단톡방 갈림길', tool: 'dilemma',
          teacher: '"대학 새내기 과 단톡방이에요. 공지가 한 명에게만 안 갔고, 묻자 조롱 이모티콘이 달려요. 고등학교 때 배운 조력자 행동이 여기서도 통할까요?" 선택마다 민에게 생긴 영향을 읽게 한다. "성인은 스스로 알아서 해야 한다"는 학생에게 "한 명 빼기·공개 조롱의 구조가 고등학교와 무엇이 다른가요?"라고 묻는다. 대학에도 학생 지원 창구가 있고, 이름은 학교마다 다르니 입학 뒤 찾아 두자고 말한다.',
          task: '과 단톡방에서 한 명이 빠지는 장면의 갈림길을 따라가며 민의 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('민의 곁에 서는 길을 끝까지 따라가고 내 선택의 근거를 고르세요.', DEPT, [['dm', 'public', 'office']], DEPT_R, ['side', 'stop'], { d: 0.4 }),
            DILQ('개인 연락까지 한 뒤의 장면이에요. 이모티콘이 이어질 때 할 일을 고르고 근거를 고르세요.', { text: DEPT.choices[1].next.text, who: '나', motif: 'cloud', choices: cut(DEPT.choices[1].next, 1).choices }, [['public']], DEPT_R, ['stop'], { d: 0.35 }),
            EXPLOREQ('모른 척한 길과 곁에 선 길을 끝까지 가 보고 민에게 생긴 결과를 견주세요.', DEPT, DEPT_R, ['끝 장면 둘 이상을 확인했다', '고등학교 때 배운 조력자 원칙과 이어 보았다'], { d: 0.35, more: { conclude: '멈추기·곁에 서기·기록·알리기 — 졸업 뒤 공동체에서도 원칙은 같고, 창구의 이름만 달라요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '대학이나 일터에 가면 먼저 찾아 둘 도움 창구 두 가지(예: 학생 지원 창구)를 쓰세요.' }] },
        notes: '민은 가상 인물이다. 대학의 학생 지원 창구 이름(학생상담센터·인권센터 등)은 학교마다 다르다.',
      }),
      M({
        id: 'activity.record-blocks', type: 'activity', title: '기록하고 알리는 절차',
        method: '기록과 알림 절차 설계', tool: 'block-coding', minutes: 18,
        levels: { easy: '단계 셋(기록·원본 보존 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯(별 넷 + 외부 상담 깃발) 판에서 별을 모두 들르고, 친구 계획을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 오른쪽)으로 같은 길을 만들어 \'보복이 걱정되면 외부 상담으로 도는 갈래\'를 넣는다.' },
        activity: {
          title: '기록과 알림 절차', tool: 'block-coding',
          teacher: '"성인 공동체에서 괴롭힘을 겪거나 목격했을 때의 절차예요. 별은 아래에서부터 ① 날짜·내용·목격자·자료 기록 ② 원본 보존 ③ 믿을 사람과 의논 ④ 기관 안 창구(학생 지원·인사), 깃발은 ⑤ 외부 상담이에요. 바위는 \'단톡방에 폭로하기\'·\'혼자 참기\'예요." 실행할 때마다 "지금 단계에서 내 기록은 어디에 있나요?"라고 묻는다. "증거가 없으면 아무것도 못 한다"는 학생에게 "그래서 첫 칸이 기록이에요. 오늘부터 남긴 기록도 기록이에요"라고 답한다. 외부 상담 번호는 학교가 확인해 활동지에 채운다.',
          task: '기록부터 외부 상담까지 단계를 차례로 들르는 프로그램을 만들고, 절차를 활동지에 글로 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷(①기록 ②원본 보존 ③믿을 사람과 의논 ④기관 안 창구)을 차례로 들르고 바위를 피해 깃발(⑤외부 상담)에 닿게 하세요.', RB, { stars: true }, {
              easy: { prompt: '별 둘(①기록 ②원본 보존)을 들러 깃발(믿을 사람에게 알리기)에 닿게 하세요(단계 셋).', board: RB_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 오른쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 막히면 도는 블록은 \'보복이 걱정되면 기관 안 창구 대신 외부 상담으로 도는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['가운데 줄을 따라 위로 올라가고, 맨 위에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구 계획이에요: 앞으로 2칸 → 왼쪽으로 돌기 → 앞으로 1칸. 의논·창구 단계를 건너뛰고 옆으로 새요. 거북이가 멈출 칸을 고르세요.', RB, ['fwd', 'fwd', 'left', 'fwd'], { x: 1, y: 2 }, { d: 0.3, more: { conclude: '기록만 하고 혼자 쥐고 있으면 기록이 힘을 쓰지 못해요. 의논과 창구까지 가야 해요.' } }),
            BCQ('친구 프로그램이 마지막에 엉뚱한 쪽으로 돌아 깃발에 닿지 못해요. 블록 하나만 고쳐 별 넷을 들르고 깃발에 닿게 하세요.', RB, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:4', 'fwd', 'end', 'left', 'rep:2', 'fwd', 'end'] }, conclude: '마지막 연결 한 칸이 틀리면 지금까지의 기록이 엉뚱한 곳에 머물러요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 실제 절차로 옮겨 쓰세요.', columns: ['단계', '할 일', '주의할 점'], cells: [['①', '날짜·내용·목격자·자료 기록', ''], ['②', '', ''], ['③', '', ''], ['④', '', ''], ['⑤', '외부 상담', HELPNO], ['갈래', '보복이 걱정될 때', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에 글을 붙일 수 없어 절차 단계를 별 칸으로, 외부 상담을 깃발로 나타냈다. 외부 상담 번호는 체계도 brief 의 자리 글로 두고 교사가 확인해 채운다.',
      }),
      M({
        id: 'activity.boundary-writing', type: 'activity', title: '정중하지만 분명한 경계 메시지',
        method: '경계 설정 메시지 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '두 문장 경계 메시지를 문장 틀을 보고 쓴다.', base: '네 문장 메시지를 사실·요청·대안 시간·감정 조절 기준표로 점검한다.', challenge: '경계를 말한 뒤에도 연락 강요가 이어질 때의 다음 행동을 쓰는 문항과 기준 하나가 더해진다.' },
        activity: {
          title: '경계 메시지', tool: 'rubric-writing',
          teacher: '"가상 상황: 동아리 선배가 매일 밤 12시가 넘어 연락하고 바로 답하지 않으면 \'왜 무시해?\'라고 해요. 정중하지만 분명한 경계 메시지를 써 봐요." 기준표를 함께 읽는다. 화를 그대로 담은 글에는 "이 메시지를 받은 선배가 무엇을 바꾸면 되는지 알 수 있을까요?"라고 묻는다. 지나치게 사과만 하는 글에는 "내 시간을 지키는 것은 사과할 일이 아니에요"라고 짚는다. 실제 사람 이름은 쓰지 않는다.',
          task: '밤늦은 연락 강요에 보낼 경계 메시지를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('경계 메시지를 두 문장으로 쓰세요(사실 + 요청).', '밤늦은 연락 강요에 보낼 메시지를 사실과 요청 두 문장으로 쓰세요.', ['있었던 일을 사실로 썼다', '바라는 것을 분명히 요청했다', '상대를 깎아내리지 않았다'], { min: 30, max: 200, sent: [2, 2], starter: '요즘 밤 ~시 넘어 연락이 와서 ~. 앞으로는 ~ 부탁드려요.', d: 0.3 }),
            RWQ('같은 메시지를 네 문장으로 쓰세요(사실·요청·대안 시간·감정 조절).', '밤늦은 연락 강요에 보낼 정중하지만 분명한 경계 메시지를 네 문장으로 쓰세요.', ['있었던 일을 사실로 썼다', '바라는 것을 분명히 요청했다', '대신 연락할 수 있는 시간을 제안했다', '화난 말 대신 차분한 말을 골랐다'], { min: 70, max: 400, sent: [4, 4], must: [['시까지', '시 전', '낮', '오전', '오후']], starter: '선배, ~ 요즘 ~ 그래서 ~ 대신 ~', d: 0.4,
              sample: '선배, 동아리 일 챙겨 주셔서 고마워요. 요즘 밤 12시가 넘어 연락이 와서 바로 답하기 어려웠어요. 밤 10시 이후에는 다음 날 답해도 괜찮을까요? 급한 일은 오후 9시 전에 말씀해 주시면 바로 확인할게요.' }),
            RWQ('경계를 말했는데도 연락 강요가 이어지면 할 다음 행동을 2~3문장으로 쓰세요.', '경계 메시지를 보낸 뒤에도 강요가 이어질 때의 다음 행동을 쓰세요.', ['기록을 남긴다는 행동이 있다', '믿을 사람이나 창구에 알린다는 행동이 있다', '혼자 참지 않는다는 생각이 있다'], { min: 40, max: 300, sent: [2, 3], must: [['기록', '캡처']], starter: '그래도 계속되면 ~ 그리고 ~', plus: '보복이 걱정될 때의 길도 썼다', d: 0.4, more: { conclude: '경계는 한 번 말하면 끝이 아니라, 지켜지지 않을 때의 다음 걸음까지 준비하는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 경계 메시지에서 가장 분명한 요청 문장을 옮겨 쓰세요.' }] },
        notes: '상황은 가상이다. 학생에게 실제로 받은 메시지를 쓰게 하지 않는다.',
      }),
      M({
        id: 'activity.data-read', type: 'activity', title: '첫해에 본 괴롭힘 유형 자료',
        method: '청년 괴롭힘 경험 가상 자료', tool: 'chart', minutes: 18,
        levels: { easy: '조각 값이 보이는 원그래프에서 유형 둘(단톡방·공개 질책)을 견준다.', base: '원그래프에서 가장 큰 유형을 고르고, 표 빈칸을 채우고, 온라인 유형 비중을 해석한다.', challenge: '활동지에 이 가상 자료의 한계(누구에게·언제·어떻게 물었는지)를 쓴다.' },
        activity: {
          title: '가상 조사 읽기', tool: 'chart',
          teacher: '"가상 조사예요. 대학·아르바이트·직장 첫해에 본 괴롭힘 유형을 원그래프로 나타냈어요. \'봤다\'는 응답이지 \'겪었다\'를 물은 것이 아니에요." 원그래프를 읽게 한 뒤 "온라인 유형이 가장 크다면, 졸업 전에 무엇을 준비하면 좋을까요?"라고 묻는다. "이 그래프면 우리나라 청년 전체가 그렇다"는 학생에게 "몇 명에게, 언제, 어떤 질문으로 물었는지 모르면 어디까지 말할 수 있을까요?"라고 되묻는다.',
          task: '가상 조사 원그래프를 읽고 성인 공동체 괴롭힘에서 온라인 유형의 비중을 해석해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 조사 원그래프에서 가장 큰 유형을 고르세요.', toolOptions: PIE({ question: '가장 큰 유형은?', choices: YOUNG.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { prompt: '가상 조사에서 단톡방·메신저와 공개 질책 가운데 더 큰 것을 고르세요(유형 둘).', toolOptions: { choices: ['단톡방·메신저', '공개 질책'] }, target: { pick: 0 } } } },
            { prompt: '원그래프를 읽고 표의 빈칸(업무·모임에서 빼기)을 채우세요.', toolOptions: PIE({ showTable: true, tableBlanks: [2] }), target: { table: true }, difficulty: 0.25 },
            { prompt: '\'단톡방·메신저\'와 \'업무·모임에서 빼기\'를 합치면 전체의 몇 %인가요? 보기에서 고르세요.', toolOptions: PIE({ question: '두 유형의 합은?', choices: ['45%', '59%', '62%'] }), target: { pick: 1 }, difficulty: 0.3 },
            { prompt: '이 가상 자료로 할 수 있는 해석을 고르세요.', toolOptions: PIE({ question: '알맞은 해석은?', choices: ['성인 공동체의 괴롭힘은 온라인에서도 많이 일어날 수 있다', '청년 모두가 단톡방 괴롭힘을 겪는다', '공개 질책은 괴롭힘이 아니다'], why: ['', '가상 자료이고 \'본 것\'을 물었을 뿐이라 모두가 겪는다고 말할 수 없어요.', '여럿 앞에서 깎아내리는 질책도 괴롭힘의 신호예요.'] }), target: { pick: 0 }, difficulty: 0.3,
              conclude: '자료는 방향을 보여 주지만, 누구에게 무엇을 물었는지에 따라 말할 수 있는 범위가 정해져요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 가상 자료만으로는 알 수 없는 것 두 가지를 쓰세요.' }] },
        notes: '자료는 수업용 가상 값이다. \'본 것\'을 물은 설문으로 다루고 학생에게 피해 경험을 묻지 않는다.',
      }),

      M({
        id: 'wrap.rule-card', type: 'wrap', title: '내가 제안할 단톡방 규칙 카드',
        method: '내가 만들 단톡방 규칙', tool: 'collage', minutes: 7,
        levels: { easy: '규칙 둘을 긴 네모 조각 둘로 나타낸 카드를 만든다.', base: '규칙 넷을 긴 네모 조각 넷으로 나타내고 점검한다.', challenge: '활동지에 규칙을 어겼을 때의 절차를 한 줄 더한다.' },
        wrap: {
          teacher: '"대학 과 단톡방이나 동아리 단톡방에 들어가면 내가 먼저 제안할 규칙 카드를 만들어 봐요. 규칙 글은 활동지에, 카드의 칸은 조각으로." 두세 작품을 보며 "이 규칙 가운데 오늘 본 공지 빠뜨리기·밤늦은 연락을 막는 것은 어느 것일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'square', 'circle', 'heart', 'star'] }, prompt: '단톡방 규칙 카드의 규칙 칸을 긴 네모 조각 넷으로 만들고 점검하세요.', target: { has: [{ shape: 'rect', min: 4 }], selfCheck: ['칸마다 넣을 규칙을 활동지에 썼다', '공지는 모두에게 간다는 규칙이 있다', '연락 시간 규칙이 있다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '성인 단톡방 괴롭힘에 대한 말로 맞는 것은?', options: ['업무 지시라면 시간과 상관없다', '공개 망신·한 명 빼기·연락 강요는 괴롭힘의 신호다', '어른 사이에서는 참는 게 사회생활이다'], answer: 1, difficulty: 0.15, explain: '어른 공동체에서도 공개 망신·배제·연락 강요는 괴롭힘의 신호예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '단톡방 규칙 카드',
          items: [
            { type: 'short', prompt: '카드에 넣은 규칙 넷을 쓰세요.' },
            { type: 'short', prompt: '규칙을 어겼을 때 단톡방에서 할 절차 한 줄을 쓰세요.' },
          ],
        },
        notes: '교구 한계: 콜라주 판에는 글을 쓸 수 없어 규칙 글은 활동지에 쓴다.',
      }),
      M({
        id: 'wrap.reflection', type: 'wrap', title: '참기와 경계 세우기 사이',
        method: '사회생활과 참기의 경계 성찰', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 \'참는 것\'·\'경계를 세우는 것\' 가지에 카드 한 장씩을 함께 놓는다.', base: '세 가지(참는 것·경계를 세우는 것·도움을 청하는 것)에 카드를 나눈다.', challenge: '활동지에 나의 원칙을 한 문장으로 쓰고, 그 원칙을 지키기 어려운 순간을 예상한다.' },
        wrap: {
          teacher: '"\'사회생활이니까 참아\'라는 말, 언제는 맞고 언제는 틀릴까요? 가지로 나눠 봐요." 카드를 나눈 뒤 \'밤마다 답장 강요를 참는다\'가 어느 가지에 맞는지 다시 묻는다. 작은 불편을 넘기는 것과 괴롭힘을 참는 것은 다르다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '사회생활과 나의 경계', slots: ['넘길 수 있는 불편', '경계를 세울 일', '도움을 청할 일'], cards: ['회의 시간이 한 번 늦게 바뀜', '밤마다 바로 답하라는 요구', '단톡방에서 되풀이되는 공개 망신', '나만 공지에서 계속 빠짐', '말투가 조금 딱딱한 공지', '밤늦은 연락이 일주일째 이어짐'] }, prompt: '단톡방 상황 카드를 세 가지에 나누세요.', target: { sort: { '넘길 수 있는 불편': ['회의 시간이 한 번 늦게 바뀜', '말투가 조금 딱딱한 공지'], '경계를 세울 일': ['밤마다 바로 답하라는 요구', '밤늦은 연락이 일주일째 이어짐'], '도움을 청할 일': ['단톡방에서 되풀이되는 공개 망신', '나만 공지에서 계속 빠짐'] } }, difficulty: 0.25 },
            { type: 'short', prompt: '"나는 ___일 때 참지 않고 경계를 세운다." 빈칸을 채워 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '참기와 경계 세우기',
          items: [
            { type: 'short', prompt: '넘길 수 있는 불편과 경계를 세울 일을 가르는 나의 기준을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '성인 공동체에서 도움을 청할 곳 두 가지를 쓰세요(이름은 학교마다 달라요).' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 14. 익명 후기·댓글의 책임과 기록하는 습관 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-anon-review', [12]);
    // 후기 문장: 정당한 비판·인신공격·확인 안 된 주장
    const RV_FAIR = ['배송이 약속보다 사흘 늦었고 연락도 없었다', '설명서와 달리 부품 하나가 빠져 있었다', '강의 자료가 시험 범위와 맞지 않아 아쉬웠다'];
    const RV_ATTACK = ['사장이 생긴 것부터 사기꾼 같다', '이 강사는 머리가 나빠서 가르칠 자격이 없다', '직원이 멍청해서 말이 안 통한다'];
    const RV_RUMOR = ['들은 얘긴데 이 가게 위생 점검에서 걸렸다더라', '사장이 손님 정보를 판다는 소문이 있다'];
    // 익명성과 공격적 댓글(가상)
    const ANON = [['실명 게시판', 7], ['닉네임 게시판', 15], ['익명 게시판', 26]];
    const ANONBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '게시판별 공격적 댓글 비율(가상 자료)', unit: '%', xLabel: '게시판', yLabel: '공격적 댓글 비율', data: ANON }, more);
    // 친구 가게 후기란에 몰리는 거짓 악성 후기
    const SHOP = { text: '졸업한 선배 준이 연 작은 분식집 후기란에 하룻밤 사이 "음식에서 벌레가 나왔다", "사장 인성 최악" 같은 확인 안 된 별점 1점 후기가 스무 개 넘게 달렸다. 같은 말투가 되풀이된다.', who: '나', motif: 'house', choices: [
      { id: 'fight', text: '"거짓말하지 마라"는 맞대응 댓글을 줄줄이 단다', result: '댓글 싸움이 붙어 후기란이 더 눈에 띄고 악성 후기가 늘어난다.', impact: [{ who: '준', text: '가게가 더 많은 사람에게 퍼진다', tone: -1 }],
        next: { text: '맞대응한 내 댓글을 누군가 캡처해 "가게 쪽 사람이 협박한다"고 퍼뜨린다.', choices: [
          { id: 'stop', text: '댓글 싸움을 멈추고 지금까지 상황을 기록한다', result: '늦었지만 날짜별 기록이 생긴다.', impact: [{ who: '준', text: '도움을 청할 근거가 조금 생긴다', tone: 0 }], ending: '맞대응은 불을 키운다. 멈추고 기록하는 데서 다시 시작한다.' },
          { id: 'more', text: '더 세게 맞받아친다', result: '싸움이 가게 이야기에서 사람 공격으로 번진다.', impact: [{ who: '준', text: '가게와 이름이 함께 조롱받는다', tone: -1 }], ending: '맞대응이 커질수록 피해는 당사자에게 돌아간다.' }] } },
      { id: 'ignore', text: '곧 잦아들겠지 하고 아무것도 하지 않는다', result: '다음 날 후기가 더 늘고 별점이 크게 떨어진다.', impact: [{ who: '준', text: '손님이 줄기 시작한다', tone: -1 }], ending: '모른 척하는 사이 피해는 쌓인다.' },
      { id: 'record', text: '후기 날짜·시간·계정·내용이 보이게 기록해 둔다', result: '같은 말투의 후기가 짧은 시간에 몰린 것이 기록으로 드러난다.', impact: [{ who: '준', text: '되풀이된 공격이라는 근거가 생긴다', tone: 1 }],
        next: { text: '기록을 마쳤다. 준은 아직 후기를 모르는 것 같다.', choices: [
          { id: 'tell', text: '준에게 기록을 보여 주고 "같이 대응하자"고 연락한다', result: '준이 놀라지만 혼자가 아니라는 말에 숨을 돌린다.', impact: [{ who: '준', text: '마음의 지지를 얻는다', tone: 1 }],
            next: { text: '준이 "어떻게 해야 할지 모르겠어"라고 한다.', choices: [
              { id: 'report', text: '플랫폼 신고 기능으로 거짓 후기를 신고하고, 기록을 들고 상담·신고 창구에 함께 의논하자고 한다', result: '일부 후기가 내려가고 준이 다음 할 일을 알게 된다.', impact: [{ who: '준', text: '절차로 피해를 줄인다', tone: 1 }], ending: '기록 → 신고 → 당사자 곁에서 함께 — 맞대응 없이도 피해를 멈출 수 있다.' },
              { id: 'expose', text: '글쓴이로 보이는 사람의 신상을 찾아 공개하자고 한다', result: '엉뚱한 사람이 지목되어 새로운 피해가 생긴다.', impact: [{ who: '지목된 사람', text: '확인 없이 공격받는다', tone: -1 }], ending: '추측으로 신상을 공개하면 또 다른 폭력이 된다.' }] } },
          { id: 'post', text: '기록을 내 계정에 올려 "이 사람들 고발한다"고 쓴다', result: '글이 퍼지며 준의 가게가 다시 화제가 된다.', impact: [{ who: '준', text: '원치 않는 관심이 커진다', tone: -1 }], ending: '기록은 공개 망신이 아니라 당사자와 절차를 위해 쓴다.' }] } }] };
    const SHOP_R = [{ id: 'calm', text: '맞대응은 확산을 키우므로 멈추고 기록한다' }, { id: 'side', text: '피해를 받는 당사자의 곁에서 함께 대응한다' }, { id: 'proc', text: '신고 기능과 창구 같은 절차로 피해를 줄인다' }, { id: 'win', text: '말싸움에서 이겨야 거짓이 사라진다', why: '맞대응 댓글은 후기란을 더 눈에 띄게 해 피해를 키워요.' }];
    // 목격 기록 양식 판: 별 = 기록 항목, 깃발 = 안전한 곳에 두기
    const LOG_BASE = { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], rocks: [[2, 1]] };
    const LOG_EASY = { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 1], [2, 1], [3, 1]], rocks: [] };

    MODS.push(
      M({
        id: 'intro.review-sort', type: 'intro', title: '후기 문장, 비판인가 공격인가',
        method: '후기 문장 판정', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 문장 다섯(비판 둘·공격 둘·소문 하나)만 바구니에 넣어 보이며 기준을 말한다.', base: '문장 여덟을 정당한 비판·인신공격·확인 안 된 주장 바구니에 넣는 시연을 보고 근거를 말한다.', challenge: '인신공격 문장 하나를 사실·영향·요청이 있는 비판으로 고쳐 말한다.' },
        intro: {
          teacher: '"가게나 수업 후기는 다른 사람에게 꼭 필요한 정보예요. 그런데 같은 별점 1점이라도 어떤 글은 정보가 되고, 어떤 글은 사람을 다치게 해요." 시연 단추로 문장 카드가 세 바구니에 들어가는 모습을 보여 준다. "솔직한 건 다 괜찮다"는 말이 나오면 "\'배송이 사흘 늦었다\'와 \'사장이 사기꾼 같다\'는 둘 다 솔직하지만, 어느 쪽이 확인할 수 있는 말인가요?"라고 되묻는다. 비판은 행동과 사실을, 인신공격은 사람을 겨눈다는 기준을 짚는다.',
          student: '가상 후기 문장을 정당한 비판·인신공격·확인 안 된 주장으로 나누어 보세요. 확인할 수 있는 사실인지, 사람을 깎아내리는지가 기준이에요.',
          demo: { tool: 'sortboard', options: { slots: ['정당한 비판', '인신공격', '확인 안 된 주장'], cards: mix([RV_FAIR, RV_ATTACK, RV_RUMOR]) }, sequence: [{ sort: { '정당한 비판': RV_FAIR, 인신공격: RV_ATTACK, '확인 안 된 주장': RV_RUMOR } }] },
          art: { draw: 'a paper review board with star ratings, three paper baskets below labelled by small icons of a check mark, a frowning face and a question mark, paper review slips floating down into them', banner: '사실을 말할까, 사람을 칠까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '후기 문장은 모두 가상이다. 실제 가게·강사·플랫폼 이름을 쓰지 않는다. 비판과 모욕의 법적 경계는 상황에 따라 달라 이 수업에서는 쟁점만 다룬다.',
      }),
      M({
        id: 'intro.anon-chart', type: 'intro', title: '이름을 가리면 말이 거칠어질까',
        method: '익명성과 공격성 가상 자료', tool: 'chart', minutes: 7,
        levels: { easy: '막대 끝 값을 보이고 가장 높은 막대를 함께 읽는다.', base: '값 없이 막대를 읽고 실명·익명 게시판의 차이를 두 문장으로 해석한다.', challenge: '익명성의 장점(제보·고민 털어놓기)도 함께 따져 \'익명이 곧 나쁘다\'로 끝내지 않는다.' },
        intro: {
          teacher: '"가상 자료예요. 실명·닉네임·익명 게시판에서 공격적인 댓글이 차지하는 비율을 견주었어요. 어느 게시판이 가장 높을까요?" 시연 단추로 가장 높은 막대가 골라지는 모습을 보여 준다. "그럼 익명은 다 없애야 한다"는 말이 나오면 "괴롭힘을 목격한 사람이 이름을 밝히지 않고 알릴 수 있는 것도 익명 덕분이지 않을까요?"라고 되묻는다. 자료는 경향을 보여 줄 뿐, 익명이라고 해서 쓴 글의 책임이 사라지지는 않는다는 점을 짚는다.',
          student: '가상 그래프에서 공격적 댓글 비율이 가장 높은 게시판을 찾고, 익명성이 말투에 어떤 영향을 줄지 생각해 보세요.',
          demo: { tool: 'chart', options: ANONBAR({ question: '공격적 댓글 비율이 가장 높은 곳은?', choices: ANON.map((x) => x[0]), showValues: true }), sequence: [{ pick: 2 }] },
          art: { draw: 'three paper bulletin boards side by side, the first with name tags on each note, the second with nicknames, the third with blank masks, small sharp paper speech bubbles piling up higher in front of the masked board', banner: '가려진 이름, 남는 책임', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 가상 자료다(실제 조사 아님 — 제목에 밝힘). 익명성의 장단점을 함께 다룬다.',
      }),

      M({
        id: 'activity.debate', type: 'activity', title: '학교 익명 게시판, 실명제로 바꿀까',
        method: '찬반 토론: 익명 게시판 실명제', tool: 'mindmap', minutes: 17,
        levels: { easy: '근거 카드 6장을 찬성·반대·근거 약함 가지에 바로 피드백을 받으며 나눈다.', base: '근거 카드 8장을 나누고 근거마다 반박을 짝지은 뒤, 제3의 대안 카드를 고른다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 활동지에 제3의 대안을 직접 설계한다.' },
        activity: {
          title: '실명제 찬반 근거 지도', tool: 'mindmap',
          teacher: '"\'학교 익명 게시판을 실명제로 바꿔야 한다.\' 오늘은 세 가지 가치가 부딪혀요. 표현의 자유, 제보하는 사람의 보호, 쓴 글에 대한 책임." 카드를 놓을 때마다 "이 근거는 세 가치 가운데 무엇을 지키려는 근거인가요?"라고 묻는다. "실명이면 악플이 전부 사라진다"는 학생에게 "실명 게시판에도 공격적 댓글이 있었던 가상 자료를 떠올려 볼까요?"라고 되묻는다. 반대 근거만 고른 학생에게도 "제보자를 지키면서 책임도 묻는 방법은 없을까요?"라고 물어 제3의 대안으로 이끈다.',
          task: '실명제 찬반 근거 카드를 가지에 나누고, 반박을 짝지은 뒤 두 가치를 함께 지키는 대안을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성(실명제)·반대(익명 유지)·근거 약함 가지에 나누세요.', ['찬성(실명제)', '반대(익명 유지)', '근거 약함'], [
              ['이름이 드러나면 글에 더 책임을 진다', '공격적 댓글을 쓴 사람을 빨리 찾을 수 있다', '허위 후기가 몰리는 일이 줄 수 있다'],
              ['괴롭힘 제보자가 보복 걱정 없이 알릴 수 있다', '소수 의견을 눈치 보지 않고 낼 수 있다', '고민을 털어놓을 곳이 사라질 수 있다'],
              ['요즘 다들 실명이 싫다더라', '실명이면 게시판이 재미없다'],
            ], { k: 2, hard: [['신고가 들어와도 지금은 처리가 늦다'], ['실명이어도 다른 공간으로 옮겨 갈 뿐이다']], d: 0.35, opt: { topic: '익명 게시판 실명제' } }),
            MATCHQ('근거마다 상대 쪽에서 나올 반박을 짝지으세요.', [['이름이 드러나면 글에 더 책임을 진다', '익명이어도 신고·삭제 절차로 책임을 물을 수 있다'], ['괴롭힘 제보자가 보복 걱정 없이 알릴 수 있다', '제보는 비밀이 지켜지는 별도 창구로 받으면 된다'], ['소수 의견을 눈치 보지 않고 낼 수 있다', '닉네임만으로도 눈치를 덜 볼 수 있다']], { k: 2, extra: ['그냥 싫은 사람이 많다'], d: 0.4, opt: { topic: '근거와 반박' }, more: { hints: ['상대 쪽 사람이 그 근거를 들으면 어떤 방법으로 같은 걱정을 풀 수 있다고 답할지 떠올려 보세요.'] } }),
            PICKQ('표현의 자유·제보 보호·책임성을 함께 지키는 제3의 대안만 고르세요.', ['게시판은 닉네임으로, 운영자만 확인할 수 있게 가입은 실명 인증', '괴롭힘 제보는 비밀이 지켜지는 따로 된 창구로 받기'], ['모든 글에 이름과 학번을 공개하기', '아무 규칙 없이 익명으로 두기'], { d: 0.4, opt: { basket: '제3의 대안' }, more: { conclude: '찬반이 갈려도 \'누구도 공격받지 않고, 알릴 사람은 보호받는 공간\'이라는 목표는 같을 수 있어요. 대안은 두 가치를 함께 지키는 데서 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 설계한 제3의 대안을 한 문장으로 쓰고, 그 대안이 지키는 가치 두 가지를 쓰세요.' }] },
        notes: '\'근거 직접 쓰기\'는 교구가 학생 근거 카드를 만들지 못해, 카드를 주고 활동지에서 대안을 직접 쓰게 했다. 실제 서비스의 실명 인증 방식은 다루지 않는다.',
      }),
      M({
        id: 'activity.comment-dilemma', type: 'activity', title: '악성 후기가 몰려올 때',
        method: '악성 댓글이 달리는 게시물', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 하나를 고르고 근거를 고른다.', base: '갈림길 둘을 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가고, 맞대응 길도 끝까지 가 보며 맞대응이 키운 결과를 근거로 고른다.' },
        activity: {
          title: '악성 후기 갈림길', tool: 'dilemma',
          teacher: '"졸업한 선배의 가게에 하룻밤 사이 거짓 악성 후기가 몰렸어요. 화가 나는 게 당연해요. 그 화를 어디에 쓰면 선배에게 도움이 될까요?" 선택마다 결과를 소리 내어 읽게 한다. \'맞대응 댓글\'을 고른 학생에게 "댓글 싸움이 붙으면 그 후기란을 보는 사람이 늘까요, 줄까요?"라고 묻는다. 신상을 찾아 공개하자는 선택에는 "추측이 틀렸다면 누가 다칠까요?"라고 되묻는다. 잘못은 거짓 후기를 쓴 쪽에 있고, 선배를 돕는 길은 기록·신고·곁에 있기라는 점을 짚는다.',
          task: '거짓 악성 후기 장면에서 갈림길마다 선택하고 결과를 따라가 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('준의 가게 후기란 장면에서 피해를 줄이는 길을 끝까지 고르고, 근거를 고르세요.', SHOP, [['record', 'tell', 'report']], SHOP_R, ['calm', 'side', 'proc'], { d: 0.4 }),
            EXPLOREQ('맞대응 길과 기록 길을 모두 끝까지 가 보고 준에게 생긴 결과를 견주세요.', SHOP, SHOP_R, ['맞대응 길의 끝 장면을 확인했다', '두 길에서 준에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('내가 쓴 후기에 "너도 똑같이 당해 봐라"는 답글이 달렸어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '내가 학원 수업에 대해 남긴 짧은 불만 후기에 익명 계정이 "너도 똑같이 당해 봐라, 어디 사는지 안다"는 답글을 달았다.', who: '나', motif: 'cloud', choices: [
              { id: 'reply', text: '"해 볼 테면 해 봐"라고 답글을 단다', result: '같은 계정이 답글을 더 단다.', impact: [{ who: '나', text: '불안이 커진다', tone: -1 }], ending: '위협에 맞대응하면 대화가 위험한 쪽으로 커질 수 있다.' },
              { id: 'keep', text: '답하지 않고 답글을 날짜·시간·계정이 보이게 기록한다', result: '위협 답글이 기록으로 남는다.', impact: [{ who: '나', text: '도움을 청할 근거가 생긴다', tone: 1 }],
                next: { text: '기록을 남겼다. 답글은 아직 지워지지 않았다.', choices: [
                  { id: 'help', text: '플랫폼에 신고하고 믿을 어른·신고·상담 창구에 기록을 보이며 의논한다', result: '답글이 내려가고 다음에 할 일을 함께 정한다.', impact: [{ who: '나', text: '혼자 견디지 않게 된다', tone: 1 }], ending: '위협은 혼자 감당하지 않고 기록을 들고 알린다.' },
                  { id: 'delete', text: '무서워서 내 후기와 기록을 모두 지운다', result: '내 화면에서는 사라졌지만 근거도 함께 사라졌다.', impact: [{ who: '나', text: '도움받기 어려워진다', tone: -1 }], ending: '지우기 전에 기록을 남기고 알리는 것이 나를 지킨다.' }] } }] },
            [['keep', 'help']], [{ id: 'nofight', text: '위협에는 맞대응하지 않는다' }, { id: 'tellr', text: '기록을 들고 믿을 어른·창구에 알린다' }, { id: 'mine', text: '내가 먼저 불만을 썼으니 참아야 한다', why: '정당한 불만을 썼다고 위협을 받아도 되는 것은 아니에요. 잘못은 위협한 쪽에 있어요.' }], ['nofight', 'tellr'], { d: 0.35, more: { conclude: '맞대응 대신 기록, 혼자 대신 함께 — 악성 댓글 앞에서 피해를 줄이는 두 가지 습관이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '맞대응 댓글이 피해를 키운 까닭을 오늘 갈림길의 결과를 근거로 두 문장으로 쓰세요.' }] },
        notes: '장면은 가상이다. 준은 가상 인물이다. 실제 후기 플랫폼 이름을 쓰지 않는다.',
      }),
      M({
        id: 'activity.rewrite', type: 'activity', title: '비판은 남기고 모욕은 빼기',
        method: '비판은 남기고 모욕은 빼기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '가상 불만 후기 한 편을 문장 틀을 보고 세 문장으로 다시 쓴다.', base: '같은 후기를 사실·영향·요청 구조의 다섯 문장으로 다시 쓰고 기준표로 점검한다.', challenge: '기준 하나가 더 붙고, 다시 쓴 후기에 가게 쪽이 달 답글도 써 본다.' },
        activity: {
          title: '후기 다시 쓰기', tool: 'rubric-writing',
          teacher: '"가상 후기예요. \'주문한 지 한 시간 넘게 안 나옴. 알바생 머리가 텅 빈 듯. 다시는 안 감.\' 불만 자체는 정당할 수 있어요. 무엇을 남기고 무엇을 빼야 할까요?" 기준표를 먼저 함께 읽는다. 욕만 지우고 끝낸 학생에게 "가게가 이 글을 읽고 무엇을 고칠 수 있을까요?"라고 묻는다. "그래도 화난 건 표현해야 한다"는 말에는 "\'오래 기다려서 많이 아쉬웠다\'처럼 내 마음은 쓰되 사람을 깎아내리지 않을 수 있어요"라고 답한다. 실제 가게·사람 이름은 쓰지 않게 한다.',
          task: '가상 불만 후기를 사실·영향·요청 구조로 다시 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 후기를 세 문장(사실·영향·요청)으로 다시 쓰세요.', '가상 후기 "주문한 지 한 시간 넘게 안 나옴. 알바생 머리가 텅 빈 듯. 다시는 안 감."을 사실·영향·요청 세 문장으로 다시 쓰세요.', ['확인할 수 있는 사실만 썼다', '사람을 깎아내리는 말이 없다', '가게에 바라는 점을 구체적으로 썼다'], { min: 40, max: 250, sent: [3, 3], must: [['기다', '늦']], starter: '주문 뒤 ~. 그래서 ~. 다음에는 ~면 좋겠다.', d: 0.3 }),
            RWQ('같은 후기를 다섯 문장으로 다시 쓰세요(사실 둘·영향·요청·좋았던 점이나 마무리).', '같은 가상 후기를 다섯 문장으로 다시 쓰세요. 사실·영향·요청이 모두 들어가야 해요.', ['날짜·시간처럼 사실이 구체적이다', '인격을 공격하는 말이 없다', '바라는 점이 구체적이다', '확인하지 않은 추측을 쓰지 않았다'], { min: 80, max: 400, sent: [5, 5], must: [['좋겠', '바란다', '부탁']], starter: '주문은 ~에 했다. ~. 그래서 ~. ~면 좋겠다. ~.', plus: '가게 쪽이 달 수 있는 정중한 답글 한 문장도 함께 썼다', d: 0.4,
              sample: '토요일 저녁 7시에 떡볶이를 주문했다. 음식은 8시가 넘어 나왔고 그동안 늦어진다는 안내가 없었다. 기다리는 동안 다음 일정이 밀려서 많이 아쉬웠다. 바쁠 때는 예상 시간을 미리 알려 주면 좋겠다. 음식 맛은 괜찮아서 다음에는 덜 붐빌 때 가 보려고 한다.', more: { conclude: '좋은 비판은 사람이 아니라 일어난 일을 겨누고, 상대가 고칠 수 있는 요청으로 끝나요.' } }),
            DONEQ('짝과 다시 쓴 후기를 바꿔 읽고, 가게 주인이라면 무엇을 고치겠는지 서로 말해 주세요.', '짝과 바꿔 읽기', '짝과 바꿔 읽고 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '처음 후기와 다시 쓴 후기를 견주세요.', columns: ['구조', '처음 후기에서', '다시 쓴 후기에서'], cells: [['사실', '', ''], ['영향', '', ''], ['요청', '', ''], ['뺀 말', '', '']] }] },
        notes: '후기는 가상이다. 학생이 실제로 쓴 후기를 가져오게 하지 않는다.',
      }),
      M({
        id: 'activity.log-template', type: 'activity', title: '목격 기록 양식 만들기',
        method: '목격 기록 양식 만들기', tool: 'block-coding', minutes: 18,
        levels: { easy: '기록 항목 셋(별 셋)을 들러 깃발(안전한 곳에 두기)에 닿게 한다.', base: '기록 항목 다섯(별 다섯)을 들르고, 친구 프로그램을 따라가 보고, 틀린 블록 하나를 고친다. 활동지에 가상 사례로 양식을 채운다.', challenge: '조건 블록(막히면 왼쪽)으로 \'기록을 어디에 둘지\' 갈래를 만들고 그 까닭을 활동지에 쓴다.' },
        activity: {
          title: '목격 기록 양식 설계', tool: 'block-coding',
          teacher: '"오늘 판의 별 다섯은 목격 기록에 꼭 들어갈 항목이에요. ① 날짜·시간 ② 장소나 플랫폼 ③ 일어난 내용(들은 말 그대로) ④ 함께 본 사람 ⑤ 캡처·녹화 같은 자료 위치. 깃발은 기록을 안전한 곳에 두기예요." 실행할 때마다 "지금 거북이는 몇 번 항목을 적었나요?"라고 묻는다. "느낌만 적어도 된다"는 학생에게 "\'기분 나빴다\'만 적힌 기록과 \'몇 시에 어떤 말을 했다\'가 적힌 기록 가운데 나중에 더 힘이 되는 것은?"이라고 되묻는다. 판은 비유이고 실제 양식은 활동지에 가상 사례로 채운다는 점을 밝힌다.',
          task: '별(기록 항목)을 모두 들러 깃발(안전한 곳에 두기)에 닿는 프로그램을 만들고, 활동지에 양식을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 다섯(①날짜·시간 ②장소·플랫폼 ③내용 ④함께 본 사람 ⑤자료 위치)을 모두 들르고 바위를 피해 깃발(안전한 곳에 두기)에 닿게 하세요.', LOG_BASE, { stars: true }, {
              easy: { prompt: '별 셋(①날짜·시간 ②장소·플랫폼 ③내용)을 들러 깃발(안전한 곳에 두기)에 닿게 하세요(항목 셋).', board: LOG_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 꼭 써서 별 다섯을 들르고 깃발에 닿게 하세요. 막혀서 도는 자리는 \'내 휴대폰만으로는 불안하면 다른 안전한 곳에도 한 번 더 둔다\'는 갈래예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['별이 한 줄로 놓인 아래 줄을 먼저 끝까지 가고, 줄 끝에서 깃발 쪽으로 돌아요.'] } }),
            TRACEQ('친구의 양식 순서예요: 앞으로 3칸 → 왼쪽으로 돌기 → 앞으로 1칸. ④함께 본 사람·⑤자료 위치를 적기 전에 꺾어요. 거북이가 멈출 칸을 고르세요.', { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], rocks: [] }, ['fwd', 'fwd', 'fwd', 'left', 'fwd'], { x: 3, y: 1 }, { d: 0.3, more: { conclude: '함께 본 사람과 자료 위치가 빠진 기록은 나중에 확인하기 어려워요. 항목을 끝까지 채워요.' } }),
            BCQ('친구 프로그램이 ⑤자료 위치 칸에서 엉뚱한 쪽으로 돌아 판 밖으로 나가요. 블록 하나만 고쳐 별 다섯을 들르고 깃발에 닿게 하세요.', LOG_BASE, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:5', 'fwd', 'end', 'right', 'rep:2', 'fwd', 'end'] }, conclude: '기록을 다 적은 다음에는 안전한 곳에 두기 — 마지막 한 칸이 기록을 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 사례(회의 시간에 동료 한 명에게 되풀이된 비꼬는 말)로 목격 기록 양식을 채우세요.', columns: ['항목', '적을 내용'], cells: [['날짜·시간', ''], ['장소·플랫폼', ''], ['일어난 내용(들은 말 그대로)', ''], ['함께 본 사람', ''], ['자료 위치', ''], ['기록을 둔 곳', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에 글을 붙일 수 없어 기록 항목을 별 칸으로, 마지막 \'안전한 곳에 두기\'를 깃발로 나타냈다. 양식의 글은 활동지가 맡는다. 학생 자신의 실제 기록을 쓰게 하지 않는다.',
      }),

      M({
        id: 'wrap.habit-clock', type: 'wrap', title: '목격한 날, 몇 시까지 기록할까',
        method: '기록 습관 시간 정하기', tool: 'clock', minutes: 7,
        levels: { easy: '교사가 목격 시각(오후 4시 30분)을 시계로 먼저 보여 주고, 기록 마감 시각 하나만 함께 정한다.', base: '\'목격한 날 잠들기 전 9시까지 기록\'이라는 우리 반 약속을 시계에 나타내고 까닭을 쓴다.', challenge: '기록한 뒤 믿을 어른에게 알릴 시점(다음 날 아침 등)도 정해 활동지에 쓴다.' },
        wrap: {
          teacher: '"기억은 하루만 지나도 흐려져요. 목격한 일을 언제까지 적어 두면 좋을까요? 오늘 우리 반 약속은 \'목격한 날 잠들기 전, 저녁 9시까지\'로 해 봐요." 시계 바늘로 9시를 나타내게 한다. "나중에 한꺼번에 적으면 된다"는 학생에게 "일주일 뒤에 \'몇 시에 누가 어떤 말을 했는지\' 정확히 기억할 수 있을까요?"라고 되묻는다. 9시는 의학·법 기준이 아니라 연습용 우리 반 약속이라는 점을 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, prompt: '우리 반 약속: 목격한 날 저녁 9시까지 기록해요. 시계 바늘로 9시를 나타내세요.', target: { h: 9, m: 0 }, difficulty: 0.15 },
            { type: 'choice', prompt: '목격 기록을 그날 안에 남기는 까닭으로 가장 알맞은 것은?', options: ['시간이 지나면 날짜·말·함께 본 사람 기억이 흐려지기 때문에', '빨리 적어서 단톡방에 올려야 하기 때문에', '하루가 지나면 기록할 수 없게 정해져 있기 때문에'], answer: 0, difficulty: 0.2, explain: '기억은 빠르게 흐려져요. 그날 적은 기록이 가장 정확해요. 올리려고가 아니라 알리고 지키려고 적어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 기록 습관',
          items: [
            { type: 'short', prompt: '목격한 날 기록할 마감 시각과 그 까닭을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '기록한 뒤 믿을 어른에게 알릴 시점과 방법을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '저녁 9시는 연습용 \'우리 반 약속\'이다(법·의학 기준 아님). 학생에게 실제로 목격한 일을 말하게 하지 않는다.',
      }),
      M({
        id: 'wrap.principle', type: 'wrap', title: '익명 공간에서도 지킬 나의 댓글 원칙',
        method: '나의 댓글 원칙 성찰 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '두 문장 원칙을 문장 시작 도움말을 보고 쓴다.', base: '세 문장 원칙을 쓰고 기준표로 점검한다.', challenge: '원칙을 어기고 싶어지는 순간(화났을 때·다들 쓸 때)과 그때의 대응을 한 문장 더 쓰도록 교사가 권한다.' },
        wrap: {
          teacher: '"이름이 가려진 곳에서도 나를 지켜 줄 원칙은 무엇일까요? 세 문장으로 써 봐요." 쓴 뒤 두세 명의 원칙을 함께 읽는다. "익명이면 아무도 모르니 괜찮다"는 말이 나오면 "아무도 모르는 곳에서 쓴 말도 받는 사람에게는 똑같이 닿아요"라고 짚는다. 화가 날 때 원칙을 지키는 방법(한 번 쉬고 다시 읽기)도 함께 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '익명 공간에서도 지킬 나의 댓글 원칙을 세 문장으로 쓰세요.', minChars: 40, maxChars: 300, starter: '나는 익명이어도 ~. 그리고 ~. 화가 날 때는 ~.' }, prompt: '익명 공간에서도 지킬 나의 댓글 원칙을 세 문장으로 쓰고 기준표로 점검하세요.', target: { selfCheck: ['사람이 아니라 행동·사실을 말하겠다고 썼다', '구체적으로 지킬 행동이 있다', '실천할 수 있는 원칙이다'], sentences: [3, 4] }, difficulty: 0.25 },
            { type: 'choice', prompt: '익명 댓글에 대한 말로 알맞은 것은?', options: ['익명이면 쓴 글에 책임이 없다', '익명이어도 쓴 글의 책임은 사라지지 않는다', '사실이면 무엇이든 써도 된다'], answer: 1, difficulty: 0.15, explain: '이름이 가려져도 글은 상대에게 닿고, 쓴 글에 대한 책임은 남아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 댓글 원칙',
          items: [
            { type: 'short', prompt: '원칙을 어기고 싶어지는 순간 하나와 그때 할 행동을 쓰세요.' },
            { type: 'check', prompt: '댓글을 올리기 전에 확인할 것에 표시하세요.', options: ['사실인가', '사람을 깎아내리지 않는가', '그 사람 앞에서도 할 말인가', '한 번 쉬고 다시 읽었나'] },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 15. 학교 밖으로 이어지는 괴롭힘의 구조 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-beyond-school', [12]);
    // 새내기 행사의 장기자랑·벌칙 강요(도입)
    const FRESH = { text: '대학 새내기 환영 행사. 한 선배가 "신입은 한 명씩 나와서 장기자랑, 못 하면 벌칙"이라며 동기 은을 무대 쪽으로 떠민다. 은은 웃으며 손사래를 친다.', who: '나', motif: 'star', choices: [
      { id: 'laugh', text: '분위기를 깨기 싫어 같이 박수 치며 "나와!"를 외친다', result: '은이 억지로 나가 벌칙까지 받는다.', impact: [{ who: '은', text: '모두 앞에서 망신을 견딘다', tone: -1 }], ending: '박수와 외침도 강요에 힘을 보태는 행동이 된다.' },
      { id: 'stand', text: '은 옆으로 가 "저희 둘은 사회 보는 걸로 할게요"라고 다른 역할을 제안한다', result: '선배가 잠깐 머뭇거리다 다음 순서로 넘어간다.', impact: [{ who: '은', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '행사가 끝난 뒤 선배가 "너 분위기 못 맞추더라"는 메시지를 보낸다.', choices: [
          { id: 'together', text: '동기들과 \'원하는 사람만 참여\'를 다음 행사 규칙으로 학생회에 제안한다', result: '다음 행사부터 장기자랑이 자율 참여로 바뀐다.', impact: [{ who: '새내기들', text: '거절해도 되는 분위기가 생긴다', tone: 1 }], ending: '한 번의 곁 지키기가 동기들의 공동 제안으로 이어졌다.' },
          { id: 'sorry', text: '선배에게 사과하고 다음엔 꼭 참여하겠다고 한다', result: '다음 행사에서 같은 강요가 되풀이된다.', impact: [{ who: '은', text: '다시 표적이 될까 걱정한다', tone: -1 }], ending: '강요에 사과하면 강요가 규칙이 된다.' }] } },
      { id: 'quiet', text: '못 본 척 휴대폰을 본다', result: '은이 혼자 버티다 결국 벌칙을 받는다.', impact: [{ who: '은', text: '아무도 편이 없다고 느낀다', tone: -1 }], ending: '침묵은 중립이 아니라 혼자 두기가 된다.' }] };
    const FRESH_R = [{ id: 'nopress', text: '싫다는 사람에게 무대를 강요하는 것은 환영이 아니다' }, { id: 'side', text: '곁에서 다른 선택지를 열어 주면 혼자 거절하지 않아도 된다' }, { id: 'mood', text: '첫 모임 분위기를 위해 조금은 참아야 한다', why: '분위기를 이유로 한 사람이 망신을 견뎌야 한다면 그것은 강요예요.' }];
    // 신입 사원 단합 명목 강요(활동) — 반년 뒤까지
    const JOB = { text: '첫 직장에 들어간 가상 신입 사원 담. 팀장이 "단합"이라며 매주 금요일 밤 늦게까지 모임에 빠짐없이 나오고, 신입은 돌아가며 장기자랑을 하라고 한다. 빠지면 회의에서 놀림이 이어진다.', who: '담', motif: 'house', choices: [
      { id: 'obey', text: '찍힐까 봐 매주 따른다', result: '몇 주 뒤 담은 주말까지 지쳐 있고 일에도 집중이 안 된다.', impact: [{ who: '담', text: '몸과 마음이 지친다', tone: -1 }],
        next: { text: '석 달 뒤, 새로 온 신입에게도 같은 강요가 시작됐다.', choices: [
          { id: 'pass', text: '"나도 했으니 너도 해"라고 말한다', result: '강요가 팀의 \'전통\'처럼 굳어진다.', impact: [{ who: '새 신입', text: '같은 강요를 받는다', tone: -1 }], ending: '참고 넘긴 강요는 다음 사람에게 되물림된다.' },
          { id: 'late', text: '이제라도 동기와 공식 창구에 의논한다', result: '늦었지만 모임이 자율 참여로 바뀌는 논의가 시작된다.', impact: [{ who: '새 신입', text: '같은 강요를 피한다', tone: 1 }], ending: '늦었더라도 고리를 끊는 선택은 의미가 있다.' }] } },
      { id: 'alone', text: '혼자 팀장에게 "금요일 모임은 어렵습니다"라고 거절한다', result: '팀장이 "그래?" 하고 넘어가지만 회의에서 은근한 놀림이 이어진다.', impact: [{ who: '담', text: '혼자 표적이 된다', tone: -1 }],
        next: { text: '놀림이 몇 주째 되풀이된다.', choices: [
          { id: 'record', text: '날짜·들은 말·함께 있던 사람을 기록하고 동기와 함께 공식 창구를 찾는다', result: '기록을 바탕으로 회사가 상황을 확인하기 시작한다.', impact: [{ who: '담', text: '혼자 견디지 않게 된다', tone: 1 }],
            next: { text: '반년 뒤. 팀의 금요일 모임은 어떻게 되었을까?', choices: [
              { id: 'change', text: '창구 논의 뒤 모임이 자율 참여·이른 시간으로 바뀐 것을 확인하고 새 신입에게 알려 준다', result: '새 신입은 거절해도 불이익이 없다는 것을 처음부터 안다.', impact: [{ who: '팀', text: '강요 없는 문화가 생긴다', tone: 1 }], ending: '기록과 공식 창구, 그리고 동기의 지지가 반년 뒤 팀 문화를 바꿨다.' },
              { id: 'forget', text: '내 일은 해결됐으니 새 신입에게는 아무 말도 하지 않는다', result: '새 신입은 규칙이 바뀐 줄 모르고 눈치를 본다.', impact: [{ who: '새 신입', text: '여전히 불안하다', tone: 0 }], ending: '바뀐 규칙도 알려야 힘이 된다.' }] } },
          { id: 'quit', text: '참다못해 아무에게도 말하지 않고 그만둔다', result: '담은 떠났지만 팀의 강요는 그대로 남는다.', impact: [{ who: '다음 신입', text: '같은 일을 겪을 수 있다', tone: -1 }], ending: '혼자 떠나면 나는 벗어나도 구조는 남는다.' }] } },
      { id: 'peers', text: '같은 처지인 동기들과 이야기해 함께 "자율 참여"를 요청한다', result: '팀장이 여러 사람의 요청에 모임 방식을 다시 생각한다.', impact: [{ who: '동기들', text: '서로 지지한다', tone: 1 }],
        next: { text: '팀장이 "그럼 신입끼리 알아서 해"라며 동기들을 회의에서 따로 대하기 시작했다.', choices: [
          { id: 'channel', text: '기록을 모아 인사 창구에 함께 알린다', result: '회사가 팀장과 면담하고 모임 방식을 바꾸도록 한다.', impact: [{ who: '동기들', text: '보호받으며 일한다', tone: 1 }], ending: '함께 거절하고, 계속되면 공식 창구로 — 거절이 혼자의 짐이 되지 않는다.' },
          { id: 'giveup', text: '괜히 말했다며 다시 따르기로 한다', result: '강요가 이전보다 더 당연해진다.', impact: [{ who: '동기들', text: '다음에는 말하기가 더 어려워진다', tone: -1 }], ending: '한 번 꺾인 목소리는 다음에 더 내기 어렵다.' }] } }] };
    const JOB_R = [{ id: 'struct', text: '힘의 차이와 되풀이가 있으면 \'단합\'도 괴롭힘이 될 수 있다' }, { id: 'with', text: '혼자보다 동기와 함께 거절하면 표적이 되기 어렵다' }, { id: 'formal', text: '되풀이되면 기록을 들고 공식 창구로 간다' }, { id: 'adult', text: '성인이면 스스로 참거나 떠나야 한다', why: '성인이어도 혼자 감당할 일이 아니에요. 함께 거절하고 도움을 청하는 것도 자립이에요.' }];
    // 성인 공동체 도움 지도
    const HP = [
      { name: '학생상담센터', icon: 'school', at: [1, 1] },
      { name: '인권센터', icon: 'office', at: [4, 1] },
      { name: '인사 창구', icon: 'factory', at: [1, 3] },
      { name: '사내 상담 창구', icon: 'apartment', at: [4, 3] },
      { name: '신고·상담 번호', icon: 'dot', at: [2, 2] },
    ];
    const HMAP = (names) => ({ grid: [6, 4], title: '성인 공동체 도움 지도(가상)', places: names ? HP.filter((p) => names.includes(p.name)) : HP });
    // 신입 시기 강요(가상 조사)
    const KIND = [['장기자랑·벌칙 강요', 34], ['늦은 밤 모임 강요', 27], ['사적 심부름', 18], ['단체 대화방 연락 강요', 21]];
    const REACT = [['참고 따름', 48], ['혼자 거절', 17], ['동기와 함께 거절', 14], ['공식 창구에 알림', 6], ['그만둠', 15]];
    const RBAR = (data, more = {}) => Object.assign({ type: 'bar', mode: 'read', unit: '%', data }, more);

    MODS.push(
      M({
        id: 'intro.structure-compare', type: 'intro', title: '학교폭력의 구조는 졸업 뒤에도',
        method: '학교와 성인 공동체 구조 비교', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 공동체 하나(대학)의 가지에 사례 카드 둘을 넣어 보이며 세 기준을 짚는다.', base: '대학·군대·직장 세 가지에 사례 카드를 나누는 시연을 보고 공통 구조(힘의 불균형·되풀이·피해)를 말한다.', challenge: '공동체마다 다른 점(창구·위계의 모양)도 짝과 하나씩 말한다.' },
        intro: {
          teacher: '"학교폭력을 판단할 때 본 세 기준을 떠올려 봐요. 힘의 불균형, 되풀이, 피해. 졸업하면 이 구조가 사라질까요?" 시연 단추로 대학·군대·직장 사례 카드가 가지에 들어가는 모습을 보여 준다. "성인이 되면 다 알아서 하니까 괴롭힘은 없다"는 말이 나오면 "선배와 신입, 선임과 후임, 팀장과 신입 사이에도 힘의 차이가 있지 않을까요?"라고 되묻는다. 장소는 바뀌어도 구조를 알아보는 눈은 그대로 쓸 수 있다는 점을 짚는다.',
          student: '가운데의 세 기준(힘의 불균형·되풀이·피해)을 보고, 대학·군대·직장의 가상 사례 카드가 어느 공동체의 모습인지 나누어 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '힘의 불균형·되풀이·피해', slots: ['대학', '군대', '직장'], cards: ['선배가 새내기에게 행사 벌칙을 계속 강요', '선임이 후임에게 사적 심부름을 되풀이해 시킴', '팀장이 신입을 회의 때마다 비꼼', '과 단체 대화방에서 한 명만 공지를 빼고 보냄', '후임의 휴식 시간을 이유 없이 빼앗음', '신입만 늦은 밤 연락에 답하라고 함'] }, sequence: [{ sort: { 대학: ['선배가 새내기에게 행사 벌칙을 계속 강요', '과 단체 대화방에서 한 명만 공지를 빼고 보냄'], 군대: ['선임이 후임에게 사적 심부름을 되풀이해 시킴', '후임의 휴식 시간을 이유 없이 빼앗음'], 직장: ['팀장이 신입을 회의 때마다 비꼼', '신입만 늦은 밤 연락에 답하라고 함'] } }] },
          art: { draw: 'a paper mind map with a central paper triangle labelled by three small icons of a tilted scale, a looping arrow and a cracked heart, three paper branches leading to a university gate, a barracks and an office tower', banner: '장소는 바뀌어도 구조는 같아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 모두 가상이다. 학생에게 가족·지인의 실제 경험을 말하게 하지 않는다. 군대·직장 제도의 세부는 다루지 않는다.',
      }),
      M({
        id: 'intro.drink-dilemma', type: 'intro', title: '새내기 행사의 장기자랑과 벌칙',
        method: '새내기 뒤풀이의 강요', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길 두 갈래(같이 외치기·곁에 서기)만 함께 걸어 결과를 비교한다.', base: '시연에서 곁에 서는 길을 갈림길 둘까지 따라가 결과를 보고 근거 카드를 고른다.', challenge: '\'같이 외치기\'·\'못 본 척\' 길과 \'곁에 서기\' 길의 결과를 견주어, 동기를 지지하는 선택이 무엇을 바꿨는지 말한다.' },
        intro: {
          teacher: '"대학 첫 행사에서 선배가 동기에게 장기자랑을 강요해요. 동기는 웃으면서도 손사래를 쳐요. 여러분은 어디에 서 있을까요?" 시연 단추로 \'곁에 서기\' 길을 따라가 결과를 보여 주고, \'같이 박수 치기\' 길도 보여 준다. "웃고 있으니 괜찮은 것 아닌가요?"라는 말이 나오면 "손사래를 치며 웃는 것은 좋다는 신호일까요, 어색함을 넘기려는 신호일까요?"라고 되묻는다. 잘못은 강요한 쪽에 있고, 곁에 서는 것은 맞서 싸우는 것이 아니라 다른 선택지를 열어 주는 일이라는 점을 짚는다.',
          student: '새내기 행사에서 동기가 장기자랑을 강요받는 장면이에요. 내가 할 행동을 고르고, 그 뒤 동기에게 생긴 결과를 보세요.',
          demo: { tool: 'dilemma', options: { scene: FRESH, reasons: FRESH_R, title: '새내기 환영 행사' }, sequence: [{ path: ['stand', 'together'], reasons: ['nopress', 'side'] }] },
          art: { draw: 'a paper university hall with a small paper stage and a spotlight, one paper student gently pushed toward it, another paper student stepping beside them with an open hand, paper confetti frozen in the air', banner: '환영일까, 강요일까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이다. 음주 강요 장면은 안전교육 폭력예방(saf-violence.h.adult-duty)에서 다루므로 여기서는 장기자랑·벌칙 강요만 쓴다.',
      }),

      M({
        id: 'activity.case-analysis', type: 'activity', title: '성인 공동체 사례 분석 글',
        method: '성인 공동체 사례 분석', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '사례 하나(동아리 신입 강요)를 문장 틀을 보고 세 문장으로 분석한다.', base: '같은 사례를 구조·지속 요인·개입 지점의 다섯 문장으로 분석하고 기준표로 점검한다.', challenge: '두 번째 사례(직장 첫해 배제)와 비교하는 문장을 더해 기준 하나를 더 점검한다.' },
        activity: {
          title: '사례 분석 글', tool: 'rubric-writing',
          teacher: '"가상 사례 가: 대학 동아리에서 선배들이 신입 결에게만 뒷정리와 심부름을 몇 달째 맡기고, 거절하면 \'동아리 문화 모른다\'며 단체 대화방에서 놀린다. 가상 사례 나: 회사 첫해 신입 로가 점심 모임과 업무 공지에서 계속 빠진다." 분석의 세 칸(구조·지속 요인·개입 지점)을 칠판에 적는다. "결이 거절을 못 해서 그렇다"는 문장이 보이면 "잘못은 강요한 쪽에 있어요. 왜 거절이 어려웠는지, 무엇이 그 구조를 지켰는지를 써 봐요"라고 바로잡는다. 개입 지점은 \'누가, 언제, 무엇을\' 할 수 있었는지로 구체적으로 쓰게 한다.',
          task: '가상 성인 공동체 사례의 구조·지속 요인·개입 지점을 분석하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('사례 가(동아리 신입 결)를 세 문장으로 분석하세요(구조·지속 요인·개입 지점 하나씩).', '가상 사례 가: 동아리 선배들이 신입 결에게만 몇 달째 심부름을 맡기고, 거절하면 단체 대화방에서 놀린다. 구조·지속 요인·개입 지점을 한 문장씩 쓰세요.', ['힘의 불균형·되풀이·피해 가운데 둘 이상을 짚었다', '결을 탓하는 말이 없다', '개입할 수 있는 사람과 때를 썼다'], { min: 60, max: 300, sent: [3, 3], must: [['되풀이', '반복', '몇 달']], starter: '이 사례에는 ~라는 힘의 차이가 있다. 이 일이 계속된 까닭은 ~. ~가 ~할 때 개입할 수 있었다.', d: 0.3 }),
            RWQ('같은 사례를 다섯 문장으로 분석하세요.', '가상 사례 가를 구조·지속 요인·개입 지점으로 다섯 문장 분석하세요.', ['구조(힘의 차이·되풀이·피해)를 근거와 함께 썼다', '구조를 지킨 요인(침묵·전통이라는 말 등)을 짚었다', '개입 지점이 둘 이상이다', '결을 탓하는 말이 없다'], { min: 100, max: 450, sent: [5, 5], must: [['개입', '알릴', '도울']], starter: '먼저 ~. 둘째 ~. 이 구조가 이어진 까닭은 ~. 개입 지점은 ~. 또 ~.', plus: '사례 나(직장 첫해 신입 로)와 같은 점·다른 점을 한 문장으로 견주었다', d: 0.4,
              sample: '이 사례에는 선배와 신입이라는 힘의 차이가 있고, 심부름 강요가 몇 달째 되풀이되었다. 거절하면 단체 대화방에서 놀림을 받아 결은 마음의 피해를 입었다. 이 구조가 이어진 까닭은 다른 신입과 선배들이 \'동아리 문화\'라며 침묵했기 때문이다. 동기들이 함께 \'심부름은 돌아가며\'를 제안했다면 첫 번째 개입 지점이 되었을 것이다. 놀림이 되풀이될 때 동아리 담당 교수나 학생 지원 창구에 알리는 것이 두 번째 개입 지점이다.', more: { conclude: '구조를 보면 \'누가 약해서\'가 아니라 \'무엇이 이 일을 계속되게 했나\'가 보이고, 거기서 개입 지점이 나와요.' } }),
            DONEQ('짝과 서로의 분석에서 개입 지점을 하나씩 골라, 그때 실제로 할 수 있는 말 한마디를 서로 말해 보세요.', '개입의 말 나누기', '짝과 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 가상 사례를 견주어 정리하세요.', columns: ['', '사례 가(동아리)', '사례 나(직장 첫해)'], cells: [['힘의 차이', '', ''], ['되풀이', '', ''], ['지속 요인', '', ''], ['개입 지점', '', '']] }] },
        notes: '결·로는 가상 인물이다. 학생에게 가족·지인의 실제 직장·대학 경험을 쓰게 하지 않는다.',
      }),
      M({
        id: 'activity.refusal-dilemma', type: 'activity', title: '단합이라는 이름의 강요, 반년 뒤',
        method: '거절과 지지의 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 하나를 고르고 근거를 고른다.', base: '갈림길 둘을 따라가 석 달 뒤 결과를 보고 근거를 고른다.', challenge: '반년 뒤까지 갈림길 셋을 따라가고, 공식 창구가 없을 때의 대안을 고르는 문항까지 푼다.' },
        activity: {
          title: '신입 사원 담의 갈림길', tool: 'dilemma',
          teacher: '"가상 신입 사원 담이에요. 팀장이 \'단합\'이라며 금요일 밤 모임과 장기자랑을 강요해요. 따르기, 혼자 거절, 동기와 함께 거절 — 반년 뒤 무엇이 달라질까요?" 선택마다 결과를 읽게 한다. \'따른다\'를 고른 학생에게 "석 달 뒤 새 신입에게 이 팀은 어떤 곳이 되어 있을까요?"라고 묻는다. "그만두면 그만"이라는 말에는 "나는 벗어나도 구조는 남아요. 다음 사람은요?"라고 되묻는다. 성인이어도 도움을 청하는 것은 약함이 아니라 자립의 한 부분이라는 점을 짚는다.',
          task: '신입 사원 담의 장면을 반년 뒤까지 따라가며 거절·지지의 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('담이 혼자 거절한 뒤의 길을 반년 뒤까지 따라가 강요를 끊는 길을 고르고, 근거를 고르세요.', JOB, [['alone', 'record', 'change'], ['peers', 'channel']], JOB_R, ['struct', 'formal'], { d: 0.4 }),
            EXPLOREQ('\'따른다\' 길과 \'동기와 함께\' 길을 모두 끝까지 가 보고 새 신입에게 생긴 결과를 견주세요.', JOB, JOB_R, ['따르는 길의 끝 장면을 확인했다', '두 길에서 새 신입에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('작은 가게에서 일하는 담의 친구 휘는 기댈 공식 창구가 없어요. 대안을 고르고 근거를 고르세요.', { text: '휘가 일하는 작은 가게에는 인사 창구가 없다. 사장이 매일 영업이 끝난 뒤 남아 술자리 노래를 부르라고 한다.', who: '휘', motif: 'house', choices: [
              { id: 'endure', text: '창구가 없으니 그냥 참는다', result: '강요가 매일 되풀이된다.', impact: [{ who: '휘', text: '지쳐 간다', tone: -1 }], ending: '창구가 없다고 도움받을 곳이 없는 것은 아니다.' },
              { id: 'outside', text: '날짜·들은 말을 기록하고 바깥 상담 창구와 믿을 사람에게 의논한다', result: '휘가 할 수 있는 선택(거절 문장·도움받을 곳)을 알게 된다.', impact: [{ who: '휘', text: '혼자가 아니게 된다', tone: 1 }], ending: '안에 창구가 없으면 밖의 창구와 믿을 사람에게 기록을 들고 간다.' },
              { id: 'post', text: '가게 이름을 넣어 SNS에 폭로 글을 올린다', result: '글이 퍼지며 휘가 누구인지 드러나 일이 더 어려워진다.', impact: [{ who: '휘', text: '원치 않게 노출된다', tone: -1 }], ending: '공개 폭로는 나를 먼저 드러낼 수 있다. 기록과 상담이 먼저다.' }] },
            [['outside']], [{ id: 'out', text: '안에 창구가 없으면 바깥 창구에 의논할 수 있다' }, { id: 'rec', text: '기록이 있으면 어디에 가도 도움을 청하기 쉽다' }, { id: 'none', text: '작은 곳에서는 참는 수밖에 없다', why: '작은 곳이어도 바깥 상담 창구와 믿을 사람에게 도움을 청할 수 있어요.' }], ['out', 'rec'], { d: 0.35, more: { conclude: '함께 거절하기, 기록하기, 안이 막히면 밖의 창구로 — 거절은 혼자의 용기만으로 하는 일이 아니에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '공식 창구가 없는 곳에서 강요를 받을 때 할 수 있는 대안 두 가지를 쓰세요.' }] },
        notes: '담·휘는 가상 인물이다. 근로기준법 등 직장 내 괴롭힘 제도의 세부 조항은 다루지 않는다.',
      }),
      M({
        id: 'activity.support-map', type: 'activity', title: '졸업 뒤 도움 지도',
        method: '성인 공동체 도움 지도', tool: 'map', minutes: 17,
        levels: { easy: '지도에 곳 셋만 놓이고 핀을 꽂으면 그 칸의 이름이 보인다.', base: '곳 다섯(학생상담센터·인권센터·인사 창구·사내 상담 창구·신고·상담 번호)이 놓인 지도에서 상황마다 알맞은 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 익명·비밀 보장으로 의논할 수 있는 곳인지를 묻는 보기까지 고른다.' },
        activity: {
          title: '성인 공동체 도움 지도', tool: 'map',
          teacher: '"졸업하면 담임 선생님도, Wee 클래스도 없어요. 그럼 어디에 도움을 청할까요? 가상 지도에 대학·직장·지역의 도움 자리를 놓았어요." 지도의 \'신고·상담 번호\' 자리에는 [학교가 확인해 넣는 학교폭력 신고·상담 번호]처럼 학교가 확인한 지역 번호를 함께 적어 둔다고 말한다. 문항마다 "이 상황은 마음을 털어놓을 곳이 필요한가요, 공식 조치를 요청할 곳이 필요한가요?"라고 묻는다. "회사 인사 창구에 말하면 오히려 찍힌다"는 걱정에는 "그래서 기록을 남기고, 동료와 함께 가고, 바깥 상담 창구에서 먼저 의논할 수도 있어요"라고 답한다. 실제 학교·회사의 창구 이름은 다를 수 있다는 점을 밝힌다.',
          task: '가상 도움 지도에서 상황마다 먼저 찾아갈 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '대학 새내기 행사 뒤 마음이 계속 힘든 동기가 비밀이 지켜지는 곳에서 이야기하고 싶어 해요. 함께 갈 곳에 핀을 꽂으세요.', toolOptions: HMAP(), target: { place: '학생상담센터' }, difficulty: 0.2,
              levels: { easy: { prompt: '마음이 힘든 동기가 비밀이 지켜지는 곳에서 이야기하고 싶어 해요. 함께 갈 곳에 핀을 꽂으세요(곳 셋).', toolOptions: HMAP(['학생상담센터', '인사 창구', '신고·상담 번호']) } } },
            { prompt: '대학에서 한 선배의 괴롭힘이 몇 달째 되풀이되어, 학교에 공식 조사와 조치를 요청하려 해요. 그곳에 핀을 꽂으세요.', toolOptions: HMAP(), target: { place: '인권센터' }, difficulty: 0.3,
              levels: { easy: { prompt: '대학에서 괴롭힘이 되풀이되어 학교에 공식 조사를 요청하려 해요. 그곳에 핀을 꽂으세요(곳 셋).', toolOptions: HMAP(['인권센터', '사내 상담 창구', '신고·상담 번호']) } } },
            { prompt: '회사 첫해, 회의 때마다 비꼬는 말이 되풀이되어 기록을 들고 회사에 공식 조치를 요청하려 해요. 그곳에 핀을 꽂으세요.', toolOptions: HMAP(), target: { place: '인사 창구' }, difficulty: 0.3,
              levels: { easy: { prompt: '회사에서 비꼬는 말이 되풀이되어 공식 조치를 요청하려 해요. 그곳에 핀을 꽂으세요(곳 셋).', toolOptions: HMAP(['인사 창구', '학생상담센터', '인권센터']) },
                challenge: { prompt: '회사에서 비꼬는 말이 되풀이되어 공식 조치를 요청하려 해요. 그곳에 핀을 꽂고, 그 전에 할 준비를 고르세요(준비 고르기).', toolOptions: { ask: { q: '창구에 가기 전에 할 준비는?', choices: ['날짜·들은 말·함께 있던 사람을 기록해 둔다', '팀 단체 대화방에 먼저 폭로한다', '증거가 완벽해질 때까지 기다린다'], why: ['', '공개 폭로는 나를 먼저 드러내고 다툼을 키울 수 있어요.', '증거가 완벽하지 않아도 의논할 수 있어요.'] } }, target: { place: '인사 창구', pick: 0 } } } },
            { prompt: '위협하는 메시지까지 받아 회사나 학교 밖에서 바로 신고·상담하고 싶어요. 그 자리에 핀을 꽂으세요.', toolOptions: HMAP(), target: { place: '신고·상담 번호' }, difficulty: 0.25,
              levels: { easy: { prompt: '위협 메시지를 받아 바깥에서 바로 신고·상담하고 싶어요. 그 자리에 핀을 꽂으세요(곳 셋).', toolOptions: HMAP(['신고·상담 번호', '인사 창구', '학생상담센터']) },
                challenge: { prompt: '위협 메시지를 받아 바깥에서 신고·상담하고 싶어요. 그 자리에 핀을 꽂고, 이름을 밝히기 어려울 때 할 수 있는 것을 고르세요(익명 고르기).', toolOptions: { ask: { q: '이름을 밝히기 어려울 때는?', choices: ['비밀 보장이나 익명 상담이 되는지 먼저 물어본다', '이름을 밝힐 수 없으니 신고를 포기한다'], why: ['', '많은 상담 창구가 비밀 보장을 안내해요. 먼저 물어볼 수 있어요.'] } }, target: { place: '신고·상담 번호', pick: 0 } } },
              conclude: '털어놓을 곳(상담), 조치를 요청할 곳(인권센터·인사 창구), 바깥 창구(신고·상담) — 졸업 뒤에도 도움의 길은 여러 갈래예요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '졸업 뒤 내가 갈 곳의 도움 자리를 정리하세요(번호는 학교가 확인해 준 것만).', columns: ['곳', '어떤 때 찾아가나', '익명·비밀 보장'], cells: [['학생상담센터·사내 상담 창구', '', ''], ['인권센터·인사 창구', '', ''], [HELPNO, '', '']] }] },
        notes: '지도는 가상이다. 대학·회사마다 창구 이름과 운영 방식이 다르다(예: 인권센터가 없는 곳도 있다). 신고·상담 번호는 체계도 brief 대로 교사가 학교에서 확인해 넣는다.',
      }),
      M({
        id: 'activity.data-read', type: 'activity', title: '가상 자료로 보는 첫 조직의 침묵',
        method: '청년 첫 조직 경험 가상 자료', tool: 'chart', minutes: 18,
        levels: { easy: '유형 둘의 값이 보이는 막대를 읽는다.', base: '유형 넷과 대응 방식 다섯의 막대를 읽고, 표 빈칸을 채우고, 침묵이 많은 까닭을 고른다.', challenge: '값을 숨긴 막대를 읽고, 활동지에 침묵을 줄이는 조직 장치를 제안한다.' },
        activity: {
          title: '강요 유형과 대응 방식 자료', tool: 'chart',
          teacher: '"가상 조사예요. 대학·직장 첫해의 신입들에게 \'강요를 받았을 때 어떻게 했는가\'를 물었다고 해 봐요. 가장 많은 대응은 무엇일까요?" 막대를 읽은 뒤 \'참고 따름\'이 가장 많은 까닭을 묻는다. "참은 사람들이 약해서"라는 말이 나오면 "거절하면 불이익이 올까 봐, 어디에 말할지 몰라서라면 그건 개인이 아니라 조직의 문제 아닐까요?"라고 되묻는다. 자료는 가상이며, 학생에게 자기 경험을 묻지 않는다는 점을 밝힌다.',
          task: '가상 조사의 강요 유형·대응 방식 그래프를 읽고, 침묵이 많은 까닭과 줄이는 장치를 생각해요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '가상 조사에서 신입 시기에 가장 많이 응답된 강요 유형을 고르세요.', toolOptions: RBAR(KIND, { title: '신입 시기 강요 유형(가상 조사)', xLabel: '유형', yLabel: '응답 비율', question: '가장 많은 유형은?', choices: KIND.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { prompt: '두 유형 가운데 더 많이 응답된 것을 고르세요(유형 둘).', toolOptions: { data: KIND.slice(0, 2), choices: KIND.slice(0, 2).map((x) => x[0]) }, target: { pick: 0 } } } },
            { prompt: '대응 방식 막대를 읽고 표의 빈칸(공식 창구에 알림)을 채우세요.', toolOptions: RBAR(REACT, { title: '강요를 받았을 때의 대응(가상 조사)', xLabel: '대응', yLabel: '응답 비율', showTable: true, tableBlanks: [3] }), target: { table: true }, difficulty: 0.25 },
            { prompt: '대응 방식 그래프에서 가장 많은 대응을 고르세요.', toolOptions: RBAR(REACT, { title: '강요를 받았을 때의 대응(가상 조사)', xLabel: '대응', yLabel: '응답 비율', question: '가장 많은 대응은?', choices: REACT.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '\'참고 따름\'이 많고 \'공식 창구에 알림\'이 적은 까닭으로 가장 알맞은 해석을 고르세요.', toolOptions: RBAR(REACT, { title: '강요를 받았을 때의 대응(가상 조사)', xLabel: '대응', yLabel: '응답 비율', question: '가장 알맞은 해석은?', choices: ['신입들이 강요를 좋아해서', '불이익 걱정과 창구를 잘 몰라서일 수 있다', '강요가 실제로는 거의 없어서'], why: ['자료는 좋아했는지가 아니라 어떻게 대응했는지를 보여 줘요.', '', '강요 유형 응답이 있었다는 점을 다시 보세요.'] }), target: { pick: 1 }, difficulty: 0.3,
              conclude: '침묵이 많다는 것은 사람들이 약하다는 뜻이 아니라, 말하기 어려운 구조가 있다는 신호일 수 있어요. 함께 거절할 동료와 믿을 창구가 침묵을 줄여요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '침묵을 줄이는 조직 장치(예: 익명 의견 창구, 자율 참여 규칙) 하나를 제안하고, 그것이 어떤 걱정을 줄이는지 쓰세요.' }] },
        notes: '그래프 값은 수업용 가상 자료다(제목에 밝힘). 학생·가족의 실제 경험을 묻지 않는다.',
      }),

      M({
        id: 'wrap.refusal-lines', type: 'wrap', title: '정중하지만 분명한 거절 문장',
        method: '거절 문장 세 가지', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 상황 둘에 거절 문장을 짝지어 보이며 함께 읽는다.', base: '상황 셋에 알맞은 거절 문장 카드를 짝짓는다.', challenge: '짝지은 문장 하나를 내 말투로 고쳐 짝에게 말해 본다.' },
        wrap: {
          teacher: '"거절은 무례가 아니에요. 정중하지만 분명하게 말하는 문장을 미리 갖고 있으면, 그 자리에서 덜 흔들려요." 상황 카드와 거절 문장을 짝지은 뒤 두세 명이 소리 내어 읽게 한다. "거절하면 관계가 끝난다"는 걱정에는 "이유와 대안을 함께 말하면 관계를 지키면서도 내 경계를 지킬 수 있어요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '저는 무대는 어렵고, 사회 보는 걸 돕겠습니다', ko: '새내기 행사에서 장기자랑을 강요받을 때' }, { en: '오늘은 일찍 가야 해서, 다음 낮 모임엔 갈게요', ko: '늦은 밤 모임에 빠짐없이 나오라고 할 때' }, { en: '그 부탁은 제 일이 아니라서 어렵습니다', ko: '선배가 사적 심부름을 시킬 때' }] }, prompt: '상황마다 알맞은 정중한 거절 문장 카드를 짝지으세요.', target: { match: { '저는 무대는 어렵고, 사회 보는 걸 돕겠습니다': '저는 무대는 어렵고, 사회 보는 걸 돕겠습니다', '오늘은 일찍 가야 해서, 다음 낮 모임엔 갈게요': '오늘은 일찍 가야 해서, 다음 낮 모임엔 갈게요', '그 부탁은 제 일이 아니라서 어렵습니다': '그 부탁은 제 일이 아니라서 어렵습니다' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '거절이 되풀이해서 무시될 때 다음으로 알맞은 행동은?', options: ['더 크게 화를 낸다', '날짜·들은 말을 기록하고 동료와 함께 창구에 의논한다', '거절한 것을 사과한다'], answer: 1, difficulty: 0.2, explain: '거절이 통하지 않고 되풀이되면 기록을 남기고 함께 도움을 청해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 거절 문장',
          items: [
            { type: 'short', prompt: '오늘 짝지은 거절 문장 하나를 내 말투로 고쳐 쓰세요.' },
            { type: 'check', prompt: '좋은 거절 문장에 들어갈 것에 표시하세요.', options: ['분명한 거절', '짧은 이유', '할 수 있는 대안', '상대를 깎아내리는 말'] },
          ],
        },
      }),
      M({
        id: 'wrap.career-link', type: 'wrap', title: '졸업 뒤 1년, 5년의 나',
        method: '진로와 이어진 성찰', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 시점 둘(졸업 뒤 1년·5년) 가운데 1년 칸에 카드 하나를 함께 놓는다.', base: '시점 셋(졸업 직후·1년·5년)에 내가 할 행동 카드를 나누어 놓는다.', challenge: '활동지에 행동마다 필요한 역량(기록하기·거절 문장·창구 찾기)을 붙인다.' },
        wrap: {
          teacher: '"졸업 직후, 1년 뒤, 5년 뒤. 그때의 나는 새내기일 수도, 선배일 수도, 팀을 이끄는 사람일 수도 있어요. 괴롭힘 없는 공동체를 위해 그때 할 행동을 띠에 놓아 봐요." 카드를 놓은 뒤 \'5년 뒤\' 칸의 행동이 왜 1년 뒤와 다른지 묻는다. "그때 가서 생각하면 된다"는 말에는 "그때 내가 선배가 되어 있다면, 강요를 끊을 힘도 더 커져 있을 거예요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['졸업', '5년 뒤'], slots: [{ id: '졸업 직후', label: '졸업 직후' }, { id: '1년 뒤', label: '1년 뒤' }, { id: '5년 뒤', label: '5년 뒤' }], cards: ['새내기 행사에서 동기 곁에 서기', '싫은 강요에 정중히 거절하기', '후배를 맞을 때 자율 참여로 정하기', '팀을 이끌며 신입 의견 창구 만들기'] }, prompt: '괴롭힘 없는 공동체를 위해 그 시점에 할 행동 카드를 놓으세요.', target: { sort: { '졸업 직후': ['새내기 행사에서 동기 곁에 서기', '싫은 강요에 정중히 거절하기'], '1년 뒤': ['후배를 맞을 때 자율 참여로 정하기'], '5년 뒤': ['팀을 이끌며 신입 의견 창구 만들기'] } }, difficulty: 0.25 },
            { type: 'short', prompt: '내가 갈 곳(대학·직장·지역)에서 괴롭힘 없는 공동체를 위해 할 행동 하나를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '진로와 이어진 나의 행동',
          items: [
            { type: 'table', prompt: '시점마다 할 행동과 필요한 역량을 쓰세요.', columns: ['시점', '할 행동', '필요한 역량'], cells: [['졸업 직후', '', ''], ['1년 뒤', '', ''], ['5년 뒤', '', '']] },
            { type: 'short', prompt: '"졸업하면 괴롭힘은 끝난다"는 말에 오늘 배운 것으로 답하는 한 문장을 쓰세요.' },
          ],
        },
        notes: '진로는 학생마다 다르다(대학·취업·그 밖). 카드의 시점은 예시이며, 활동지에서 자기 진로에 맞게 바꿔 쓰게 한다.',
      }),
    );
  }

  // ======================================================================================================
  // 16. 동료 곁에 서는 목격자 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-ally', [12]);
    // 개입 방식 카드
    const ACT_LOW = ['화제를 돌려 주의를 돌린다', '회의 뒤 따로 다가가 지지한다', '본 것을 날짜·말 그대로 기록한다'];
    const ACT_RISK = ['그 자리에서 "그만하시죠"라고 직접 말한다', '선임보다 윗사람이나 창구에 맡긴다'];
    const ACT_NO = ['못 본 척 넘긴다', '뒤에서 단체 대화방에 뒷말을 퍼뜨린다'];
    // 목격 뒤 행동(가상 직장 조사)
    const SEEN = [['아무것도 안 함', 44], ['나중에 따로 지지', 23], ['화제 돌리기', 17], ['그 자리에서 말림', 9], ['함께 기록·창구', 7]];
    const SEENBAR = (more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '괴롭힘을 본 뒤 한 행동(가상 직장 조사)', unit: '%', xLabel: '행동', yLabel: '응답 비율', data: SEEN }, more);
    // 회의 장면
    const MEET = { text: '팀 회의. 선임 강이 신입 동료 하의 발표가 끝나자 "이런 걸 보고서라고, 학교 숙제야?"라며 웃는다. 몇 사람이 따라 웃고 하는 고개를 숙인다. 이번이 세 번째다.', who: '나', motif: 'house', choices: [
      { id: 'silent', text: '나도 찍힐까 봐 아무 말 하지 않는다', result: '회의가 그대로 이어지고 하는 남은 시간 내내 말이 없다.', impact: [{ who: '하', text: '모두가 같은 생각이라고 느낀다', tone: -1 }],
        next: { text: '다음 주 회의에서 강의 비꼬는 말이 또 나왔다.', choices: [
          { id: 'now', text: '이번에는 회의 뒤 하에게 다가가 "나도 불편했어"라고 말한다', result: '하가 처음으로 속마음을 이야기한다.', impact: [{ who: '하', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '늦게라도 건넨 지지가 하의 고립을 깬다.' },
          { id: 'again', text: '또 넘긴다', result: '비꼬는 말이 팀의 말투처럼 굳어 간다.', impact: [{ who: '팀', text: '다른 사람도 말을 아끼게 된다', tone: -1 }], ending: '침묵이 되풀이되면 괴롭힘이 팀의 문화가 된다.' }] } },
      { id: 'redirect', text: '"다음 안건으로 넘어가 볼까요, 시간이 빠듯해서요"라고 화제를 돌린다', result: '분위기가 넘어가고 하가 숨을 고른다.', impact: [{ who: '하', text: '그 순간을 벗어난다', tone: 1 }],
        next: { text: '회의가 끝났다. 하는 자리로 돌아가 혼자 앉아 있다.', choices: [
          { id: 'support', text: '하에게 다가가 "아까 그 말, 네 잘못 아니야. 괜찮아?"라고 묻는다', result: '하가 "세 번째라 너무 지쳐"라고 털어놓는다.', impact: [{ who: '하', text: '마음을 털어놓을 사람이 생긴다', tone: 1 }],
            next: { text: '하가 "어떻게 해야 할지 모르겠어"라고 한다.', choices: [
              { id: 'record', text: '내가 본 세 번의 날짜와 말을 기록해 주고, 하가 원하면 함께 창구에 가자고 한다', result: '하가 생각해 보겠다며 기록을 받아 둔다.', impact: [{ who: '하', text: '선택지가 생긴다', tone: 1 }, { who: '나', text: '하의 결정을 존중하며 곁에 남는다', tone: 1 }], ending: '화제 돌리기 → 따로 지지 → 기록과 동행 제안. 결정은 하가 하고, 나는 곁에 있다.' },
              { id: 'force', text: '"내가 지금 가서 다 말할게"라며 하의 대답 없이 창구로 간다', result: '하는 원치 않게 일이 커진 것 같아 더 불안해한다.', impact: [{ who: '하', text: '내 일인데 내 뜻이 빠졌다고 느낀다', tone: -1 }], ending: '돕는 마음이어도 당사자의 뜻을 묻지 않으면 또 하나의 부담이 된다.' }] } },
          { id: 'done', text: '분위기를 넘겼으니 할 일은 다 했다고 여긴다', result: '다음 회의에서 같은 말이 다시 나온다.', impact: [{ who: '하', text: '되풀이가 멈추지 않는다', tone: 0 }], ending: '그 순간을 넘기는 것과 되풀이를 멈추는 것은 다르다.' }] } },
      { id: 'clash', text: '"선임님 말이 너무 심하시네요!"라고 모두 앞에서 크게 따진다', result: '회의가 말다툼이 되고 하가 더 주목을 받는다.', impact: [{ who: '하', text: '원치 않게 싸움의 가운데에 선다', tone: -1 }, { who: '나', text: '혼자 표적이 될 위험이 커진다', tone: -1 }], ending: '용기 있는 말도 방법에 따라 당사자를 더 드러낼 수 있다. 위험과 효과를 함께 따진다.' }] };
    const MEET_R = [{ id: 'safe', text: '내 위험을 줄이면서도 그 순간을 멈출 방법이 있다' }, { id: 'after', text: '나중에 건네는 지지는 고립을 깬다' }, { id: 'choice', text: '알릴지는 당사자의 뜻을 묻고 함께 정한다' }, { id: 'hero', text: '목격자라면 모두 앞에서 맞서야만 한다', why: '모두 앞에서 맞서는 것만이 돕기는 아니에요. 위험을 줄이는 방법도 효과가 있어요.' }];
    // 지지 대화 대본(이야기 판 fill)
    const LINE = { c1: '아까 그 말, 나도 불편했어. 괜찮아?', c2: '아니야, 네가 예민한 게 아니야', c3: '네가 원하는 쪽으로 하자, 나는 네 편이야', c4: '내가 본 걸 적어 둘게, 원하면 같이 가자', c5: '알겠어, 네 뜻대로 할게. 마음 바뀌면 말해 줘' };
    const SLOT = { c1: { id: 'c1', who: '나', label: '(회의 뒤 복도에서) ___' }, c2: { id: 'c2', who: '나', label: '하: "나만 예민한 건가 싶어." / 나: ___' }, c3: { id: 'c3', who: '나', label: '하: "어떻게 해야 할지 모르겠어." / 나: ___' }, c4: { id: 'c4', who: '나', label: '하: "창구에 말하는 건 무서워." / 나: ___' }, c5: { id: 'c5', who: '나', label: '하: "아직은 아무에게도 알리지 않았으면 해." / 나: ___' } };
    const TRAP = ['그냥 참아, 원래 그런 사람이야', '솔직히 발표 준비가 좀 부족하긴 했어', '내가 지금 가서 다 따질게'];
    const FILLQ = (prompt, ids, traps, more = {}) => Object.assign({ prompt, toolOptions: { mode: 'fill', title: '회의 뒤 지지 대화', slots: ids.map((k) => SLOT[k]), cards: [...ids.map((k) => LINE[k]).reverse(), ...traps] }, target: { fill: Object.fromEntries(ids.map((k) => [k, LINE[k]])) } }, more);
    // 함께 대응하는 계획 판: 별 = 계획 단계, 깃발 = 공식 창구
    const CO_BASE = { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[0, 3], [0, 2], [0, 1], [2, 0]], rocks: [[1, 2], [3, 1]] };
    const CO_EASY = { cols: 3, rows: 3, start: { x: 0, y: 2, dir: 'N' }, goal: { x: 2, y: 0 }, stars: [[0, 1], [1, 0]], rocks: [] };

    MODS.push(
      M({
        id: 'intro.action-menu', type: 'intro', title: '목격자가 고를 수 있는 다섯 가지',
        method: '개입 방식 분석판', tool: 'sortboard', minutes: 7,
        levels: { easy: '교사가 개입 카드 셋(화제 돌리기·나중에 지지·못 본 척)만 바구니에 넣어 보이며 효과와 위험을 짚는다.', base: '개입 카드 일곱을 \'위험 적고 바로 할 수 있음\'·\'효과 크지만 위험을 따져야 함\'·\'도움 안 됨\' 바구니에 넣는 시연을 보고 근거를 말한다.', challenge: '회의실·단체 대화방·회식 자리처럼 상황마다 다른 조합(예: 화제 돌리기 + 나중에 지지)을 짝과 말한다.' },
        intro: {
          teacher: '"동료가 공개적으로 망신을 당하는 장면을 봤어요. 목격자가 할 수 있는 것은 \'맞서기 아니면 침묵\' 둘뿐일까요?" 시연 단추로 개입 카드가 세 바구니에 들어가는 모습을 보여 준다. "직접 말하지 않으면 비겁하다"는 말이 나오면 "회의 뒤 따로 건네는 한마디나 기록이 동료에게는 더 큰 힘이 될 수도 있지 않을까요?"라고 되묻는다. 개입은 하나만 고르는 것이 아니라 상황에 맞게 섞어 쓰는 것이라는 점을 짚는다.',
          student: '목격자가 할 수 있는 개입 카드를 효과와 위험을 따져 세 바구니에 나누어 보세요. 정답은 상황에 따라 달라질 수 있으니 고른 까닭을 말할 수 있어야 해요.',
          demo: { tool: 'sortboard', options: { slots: ['위험 적고 바로 할 수 있음', '효과 크지만 위험을 따져야 함', '도움 안 됨'], cards: mix([ACT_LOW, ACT_RISK, ACT_NO]) }, sequence: [{ sort: { '위험 적고 바로 할 수 있음': ACT_LOW, '효과 크지만 위험을 따져야 함': ACT_RISK, '도움 안 됨': ACT_NO } }] },
          art: { draw: 'a paper menu board on a meeting room wall listing five small paper icons: a speech bubble turning sideways, a hand on a shoulder, a notebook, a raised hand and a paper door, with three paper baskets below', banner: '맞서기와 침묵 사이에도 길이 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '바구니 나누기는 이 장면(회의실) 기준이다. 상황에 따라 위험의 크기가 달라질 수 있음을 함께 말한다.',
      }),
      M({
        id: 'intro.bystander-data', type: 'intro', title: '본 사람들은 무엇을 했을까',
        method: '목격자 반응 가상 자료', tool: 'chart', minutes: 7,
        levels: { easy: '막대 끝 값을 보이고 항목 둘(아무것도 안 함·나중에 지지)만 함께 읽는다.', base: '값 없이 막대 다섯을 읽고 가장 많은 행동을 고른 뒤 개입이 적은 까닭을 말한다.', challenge: '개입을 늘릴 조건(함께할 동료·믿을 창구·보복 걱정 줄이기)을 추론해 말한다.' },
        intro: {
          teacher: '"가상 직장 조사예요. 동료가 괴롭힘을 당하는 장면을 본 사람들이 그 뒤에 무엇을 했는지 물었어요. 가장 많은 응답은 무엇일까요?" 시연 단추로 가장 높은 막대가 골라지는 모습을 보여 준다. "본 사람들이 무관심해서"라는 말이 나오면 "누군가 하겠지, 나만 튀면 어쩌지, 어디에 말하지 — 이런 걱정이 있었다면 무엇이 그 걱정을 덜어 줄까요?"라고 되묻는다. 아무것도 안 한 사람이 많다는 것은 바꿀 여지가 크다는 뜻이기도 하다고 짚는다.',
          student: '가상 직장 조사 그래프에서 괴롭힘을 본 뒤 가장 많이 한 행동을 찾고, 개입이 적은 까닭을 생각해 보세요.',
          demo: { tool: 'chart', options: SEENBAR({ question: '가장 많은 행동은?', choices: SEEN.map((x) => x[0]), showValues: true }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper office floor with small paper figures at desks, most of them turned away facing their screens, one figure turning around toward a colleague, a paper bar chart rising from the floor beside them', banner: '많이 본 것은 침묵, 바꿀 수 있는 것도 침묵', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 가상 자료다(실제 조사 아님 — 제목에 밝힘).',
      }),

      M({
        id: 'activity.meeting-dilemma', type: 'activity', title: '회의에서 동료가 망신을 당할 때',
        method: '회의에서 동료가 공개 망신을 당할 때', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림길 하나를 고르고 근거를 고른다.', base: '갈림길 둘을 따라가 하와 팀의 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 따라가고, 크게 따지는 길과 침묵 길도 가 보며 내 위험과 동료 보호를 함께 따진 근거를 고른다.' },
        activity: {
          title: '회의실 갈림길', tool: 'dilemma',
          teacher: '"가상 장면이에요. 선임 강이 신입 하의 발표를 비꼬고, 이번이 세 번째예요. 잘못은 비꼰 강에게 있어요. 그럼 그 자리의 나는 무엇을 할 수 있을까요?" 선택마다 하와 나에게 생긴 영향을 읽게 한다. \'크게 따진다\'를 고른 학생에게 "그 용기는 귀해요. 그런데 하는 그 순간 어떤 기분이었을까요?"라고 묻는다. 하의 뜻을 묻지 않고 창구로 가는 선택에는 "도움의 결정권은 누구에게 있을까요?"라고 되묻는다. 내 안전과 동료 보호를 함께 지키는 길이 여러 개라는 점을 짚는다.',
          task: '회의 장면의 갈림길을 따라가며 하와 팀의 결과를 보고, 내 위험과 동료 보호를 함께 따진 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('화제를 돌린 뒤의 길을 끝까지 따라가 하를 지지하는 길을 고르고, 근거를 고르세요.', MEET, [['redirect', 'support', 'record']], MEET_R, ['safe', 'after', 'choice'], { d: 0.4 }),
            EXPLOREQ('\'크게 따진다\' 길과 \'침묵\' 길도 끝까지 가 보고 하와 나에게 생긴 결과를 견주세요.', MEET, MEET_R, ['다른 길의 끝 장면을 확인했다', '하의 기분과 내 위험을 함께 견주었다'], { d: 0.35 }),
            DILQ('팀 단체 대화방에서 강이 하의 실수를 캡처해 올리고 "역시"라고 썼어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '팀 단체 대화방. 강이 하의 보고서 오타를 캡처해 올리며 "역시ㅋㅋ"라고 썼다. 웃는 이모티콘이 몇 개 달린다.', who: '나', motif: 'cloud', choices: [
              { id: 'emoji', text: '분위기상 나도 이모티콘을 단다', result: '하의 오타가 팀의 놀림거리가 된다.', impact: [{ who: '하', text: '모두가 웃는다고 느낀다', tone: -1 }], ending: '이모티콘 하나도 놀림에 힘을 보탠다.' },
              { id: 'shift', text: '"오타는 제가 고쳐 둘게요, 다음 일정 공유드려요"라고 다른 글로 흐름을 바꾼다', result: '대화방의 흐름이 일정 이야기로 넘어간다.', impact: [{ who: '하', text: '놀림이 길어지지 않는다', tone: 1 }],
                next: { text: '흐름은 바뀌었지만 캡처는 대화방에 남아 있다.', choices: [
                  { id: 'dm', text: '하에게 따로 "신경 쓰지 마, 괜찮아?"라고 보내고, 캡처를 날짜와 함께 기록해 둔다', result: '하가 고맙다고 답하고, 되풀이되면 쓸 기록이 생긴다.', impact: [{ who: '하', text: '지지와 근거를 함께 얻는다', tone: 1 }], ending: '흐름 바꾸기 + 따로 지지 + 기록 — 단체 대화방에서도 목격자가 할 수 있는 일이다.' },
                  { id: 'leave', text: '흐름을 바꿨으니 됐다고 여긴다', result: '하는 혼자 그 캡처를 보며 하루를 보낸다.', impact: [{ who: '하', text: '여전히 혼자다', tone: 0 }], ending: '흐름을 바꾼 다음에는 당사자에게 한마디를 건넨다.' }] } }] },
            [['shift', 'dm']], [{ id: 'flow', text: '흐름을 바꾸면 놀림을 키우지 않으면서 멈출 수 있다' }, { id: 'one', text: '당사자에게 따로 건넨 한마디가 고립을 막는다' }, { id: 'joke', text: '단체 대화방 농담에는 끼어들 필요가 없다', why: '여럿이 웃는 농담이 한 사람을 겨눈다면 그건 놀림이에요. 흐름을 바꾸고 따로 지지할 수 있어요.' }], ['flow', 'one'], { d: 0.35, more: { conclude: '맞서기와 침묵 사이에는 흐름 바꾸기, 따로 지지하기, 기록하기, 함께 알리기가 있어요. 상황에 맞게 섞어 써요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '회의 장면에서 고른 행동의 위험과 효과를 따져 보세요.', columns: ['행동', '내 위험', '하에게 준 효과'], cells: [['화제 돌리기', '', ''], ['따로 지지하기', '', ''], ['크게 따지기', '', '']] }] },
        notes: '강·하는 가상 인물이다. 학생에게 가족·지인의 직장 경험을 말하게 하지 않는다.',
      }),
      M({
        id: 'activity.script-writing', type: 'activity', title: '회의 뒤 지지 대화 대본',
        method: '지지 대화 대본', tool: 'story', minutes: 18,
        levels: { easy: '대본 2컷의 말풍선 빈칸에 알맞은 대사 카드를 넣는다.', base: '대본 4컷의 빈칸을 채우고, 대화 장면의 차례를 놓고, 짝과 소리 내어 읽어 본다.', challenge: '하가 \'알리지 않았으면 해\'라고 할 때의 대사가 담긴 다섯째 컷까지 채운다.' },
        activity: {
          title: '지지 대화 대본', tool: 'story',
          teacher: '"회의 뒤 복도, 하에게 다가가는 장면을 대본으로 만들어 봐요. 좋은 지지 대화에는 순서가 있어요. 다가가 마음 묻기, 하의 느낌이 틀리지 않았다고 말하기, 하가 원하는 것 묻기, 기록과 동행 제안하기." 대사 카드를 넣을 때마다 "이 말을 들은 하는 더 말하고 싶어질까요, 입을 닫을까요?"라고 묻는다. \'발표 준비가 좀 부족하긴 했어\' 카드를 고른 학생에게 "그 말이 사실이어도 지금 하에게 필요한 말일까요? 잘못은 비꼰 쪽에 있어요"라고 짚는다. 대본을 다 채우면 짝과 역할을 바꿔 소리 내어 읽게 한다.',
          task: '회의 뒤 하에게 건넬 지지 대화 대본의 빈칸을 채우고, 장면 차례를 놓은 뒤 짝과 읽어 봐요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            FILLQ('지지 대화 대본 4컷의 말풍선 빈칸에 알맞은 대사 카드를 넣으세요(함정 카드는 남겨요).', ['c1', 'c2', 'c3', 'c4'], TRAP, { difficulty: 0.3,
              levels: {
                easy: Object.assign({ prompt: '지지 대화 대본 2컷의 말풍선 빈칸에 알맞은 대사 카드를 넣으세요(대본 2컷).' }, (() => { const q = FILLQ('', ['c1', 'c2'], TRAP.slice(0, 1)); return { toolOptions: q.toolOptions, target: q.target }; })()),
                challenge: Object.assign({ prompt: '하가 알리지 않기를 원할 때의 다섯째 컷까지 대본 빈칸을 채우세요(대본 5컷).' }, (() => { const q = FILLQ('', ['c1', 'c2', 'c3', 'c4', 'c5'], TRAP); return { toolOptions: q.toolOptions, target: q.target }; })()),
              },
              hints: ['하의 말을 먼저 읽고, 그 말에 이어서 하가 더 말하고 싶어질 대사를 골라 보세요.'] }),
            ORDERQ('지지 대화가 이어지는 차례대로 장면 카드를 놓으세요.', ['다가가 마음을 묻는다', '느낌이 틀리지 않았다고 말한다', '하가 원하는 것을 묻는다', '기록과 동행을 제안한다'], { k: 3, traps: ['해결책부터 정해 준다'], d: 0.3, opt: { title: '지지 대화의 차례' }, more: { conclude: '마음 묻기 → 느낌 인정 → 원하는 것 묻기 → 기록·동행 제안. 결정은 하가 하고, 나는 곁에 있어요.' } }),
            DONEQ('짝과 역할(나·하)을 바꿔 가며 대본을 소리 내어 읽고, 하 역할을 해 보니 가장 힘이 된 대사 하나를 말해 주세요.', '대본 읽어 보기', '짝과 대본을 읽어 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '대본의 대사 하나를 내 말투로 바꿔 쓰고, 하가 그 말을 들으면 어떤 마음일지 한 줄로 쓰세요.' }] },
        notes: '하는 가상 인물이다. 대본 읽기는 역할을 바꿔 하며, 학생 자신의 일을 대본에 넣지 않는다.',
      }),
      M({
        id: 'activity.collective-plan', type: 'activity', title: '여러 목격자가 함께 대응하는 계획',
        method: '함께 대응하는 계획 설계', tool: 'block-coding', minutes: 17,
        levels: { easy: '계획 단계 셋(별 둘 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '계획 단계 다섯(별 넷 + 깃발)을 들러 깃발에 닿게 하고, 친구 프로그램을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 오른쪽)으로 \'보복 걱정이 보이면 돌아가는 갈래\'를 넣어 같은 길을 만들고 까닭을 활동지에 쓴다.' },
        activity: {
          title: '함께 대응하는 계획 설계', tool: 'block-coding',
          teacher: '"한 사람이 알리면 \'튄다\'는 말을 듣기 쉬워요. 여럿이 함께하면 무엇이 달라질까요? 오늘 판의 별 넷은 차례대로 ① 각자 본 것을 기록 ② 기록을 맞춰 보기 ③ 피해 동료의 뜻 묻기 ④ 함께 갈 사람 정하기이고, 깃발은 ⑤ 공식 창구에 함께 알리기예요. 바위는 단체 대화방 폭로·피해 동료 몰래 진행하기처럼 계획을 망치는 행동이에요." 실행할 때마다 "지금 몇 번 단계를 지났나요?"라고 묻는다. ③을 건너뛰는 프로그램이 나오면 "하의 뜻을 묻지 않은 계획은 누구를 위한 계획일까요?"라고 되묻는다. 판은 비유이고 실제 계획은 활동지에 쓴다는 점을 밝힌다.',
          task: '별(계획 단계)을 모두 들러 깃발(공식 창구에 함께 알리기)에 닿는 프로그램을 만들고, 활동지에 계획을 글로 정리해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷(①각자 기록 ②기록 맞춰 보기 ③피해 동료의 뜻 묻기 ④함께 갈 사람 정하기)을 들르고 바위를 피해 깃발(⑤공식 창구에 함께 알리기)에 닿게 하세요.', CO_BASE, { stars: true }, {
              easy: { prompt: '별 둘(①각자 기록 ②피해 동료의 뜻 묻기)을 들러 깃발(공식 창구에 알리기)에 닿게 하세요(단계 셋).', board: CO_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 오른쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 막혀서 도는 자리는 \'보복 걱정이 보이면 창구에 비밀 보장을 먼저 묻는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['거북이가 바라보는 위쪽 줄의 별부터 따라가고, 맨 위에서 깃발 쪽으로 돌아요.'] } }),
            TRACEQ('친구의 계획 순서예요: 앞으로 2칸 → 오른쪽으로 돌기 → 앞으로 2칸. ③피해 동료의 뜻 묻기 전에 꺾어요. 거북이가 멈출 칸을 고르세요.', { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[0, 3], [0, 2], [0, 1], [2, 0]], rocks: [] }, ['fwd', 'fwd', 'right', 'fwd', 'fwd'], { x: 2, y: 2 }, { d: 0.3, more: { conclude: '당사자의 뜻을 묻는 단계를 건너뛴 계획은 빨라 보여도 당사자를 다시 혼자 두어요.' } }),
            BCQ('친구 프로그램이 맨 위에서 엉뚱한 쪽으로 돌아 판 밖으로 나가요. 블록 하나만 고쳐 별 넷을 들르고 깃발에 닿게 하세요.', CO_BASE, { stars: true, maxEdits: 1 }, { d: 0.4, more: { state: { program: ['rep:4', 'fwd', 'end', 'left', 'rep:4', 'fwd', 'end'] }, conclude: '함께 갈 사람을 정한 다음엔 창구 쪽으로 — 방향 하나가 계획의 끝을 바꿔요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 실제 함께 대응하는 계획으로 옮겨 쓰세요.', columns: ['단계', '할 일', '보복을 막는 장치'], cells: [['①', '각자 본 것을 기록', ''], ['②', '', ''], ['③', '피해 동료의 뜻 묻기', ''], ['④', '', ''], ['⑤', '공식 창구에 함께 알리기', ''], ['갈래', '보복 걱정이 보이면', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에 글을 붙일 수 없어 계획 단계를 별 칸으로, 공식 창구를 깃발로 나타냈다. 계획 글은 활동지가 맡는다.',
      }),
      M({
        id: 'activity.reflection-essay', type: 'activity', title: '나는 어떤 목격자가 될 것인가',
        method: '조력자로서의 성찰 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 문장 성찰 글을 문장 틀을 보고 쓴다.', base: '다섯 문장 성찰 글을 구체적 행동·위험 인식·지지 원칙 기준표로 점검한다.', challenge: '고등학교에서 배운 조력자 원칙과 잇는 문장을 더해 기준 하나를 더 점검한다.' },
        activity: {
          title: '목격자 성찰 글', tool: 'rubric-writing',
          teacher: '"졸업 뒤 어느 공동체에서든 우리는 언젠가 목격자가 될 거예요. 그때 나는 어떤 목격자가 될지 다섯 문장으로 써 봐요." 기준표를 먼저 함께 읽는다. "무조건 맞서겠다"고만 쓴 학생에게 "그 자리에서 내가 위험해질 수 있다면, 그래도 할 수 있는 다른 행동은요?"라고 묻는다. "나서지 않겠다"고 쓴 학생에게는 그 까닭을 존중하며 "나서지 않으면서도 할 수 있는 작은 행동(따로 지지·기록)은 없을까요?"라고 묻는다. 실제 사람 이름은 쓰지 않게 한다.',
          task: '\'나는 어떤 목격자가 될 것인가\'를 성찰하는 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('\'나는 어떤 목격자가 될 것인가\'를 세 문장으로 쓰세요.', '나는 어떤 목격자가 될 것인가? 할 행동·조심할 점·지킬 원칙을 한 문장씩 쓰세요.', ['구체적인 행동을 썼다', '내 안전이나 위험을 생각했다', '당사자를 지지하는 원칙이 있다'], { min: 50, max: 300, sent: [3, 3], must: [['지지', '곁', '기록']], starter: '괴롭힘을 보면 나는 ~. 다만 ~. 무엇보다 ~.', d: 0.3 }),
            RWQ('같은 주제로 다섯 문장 성찰 글을 쓰세요.', '나는 어떤 목격자가 될 것인가? 다섯 문장으로 쓰세요.', ['상황에 맞는 행동이 둘 이상이다', '내 위험을 따지는 문장이 있다', '당사자의 뜻을 존중한다는 원칙이 있다', '피해자를 탓하는 말이 없다'], { min: 100, max: 450, sent: [5, 5], must: [['뜻', '원하', '선택']], starter: '나는 ~ 목격자가 되고 싶다. 그 자리에서는 ~. 그 뒤에는 ~. 내가 위험할 때는 ~. 무엇보다 ~.', plus: '고등학교에서 배운 조력자 원칙과 잇는 문장이 있다', d: 0.4,
              sample: '나는 침묵하지 않는 목격자가 되고 싶다. 그 자리에서는 화제를 돌려 놀림이 길어지지 않게 하겠다. 회의가 끝나면 당사자에게 다가가 괜찮은지 묻고, 본 것을 날짜와 함께 기록하겠다. 내가 위험할 것 같을 때는 혼자 맞서지 않고 동료와 함께 창구를 찾겠다. 무엇보다 알릴지는 당사자의 뜻을 묻고 함께 정하겠다.', more: { conclude: '좋은 목격자는 영웅이 아니라, 상황을 보고 할 수 있는 일을 고르고 당사자 곁에 남는 사람이에요.' } }),
            DONEQ('짝과 글을 바꿔 읽고, 짝의 글에서 내일 바로 할 수 있는 행동 하나를 골라 말해 주세요.', '짝과 바꿔 읽기', '짝과 바꿔 읽고 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 글의 행동 가운데 위험이 가장 적으면서 효과가 큰 것 하나를 골라 그 까닭을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.ally-pattern', type: 'wrap', title: '지지 행동의 네 박자',
        method: '지지 행동 순서 패턴', tool: 'pattern', minutes: 7,
        levels: { easy: '교사가 띠의 첫 묶음(알기·판단·행동·지지)을 함께 읽고 빈칸 하나를 같이 채운다.', base: '두 번 되풀이되는 네 박자 띠의 빈칸 둘을 채우고, 내가 약한 박자를 활동지에 표시한다.', challenge: '약한 박자를 연습할 방법(거절 문장 외우기·기록 양식 저장 등)을 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 본 지지 행동은 네 박자로 되풀이돼요. 알아차리기, 판단하기, 행동하기, 뒤이어 지지하기. 띠의 빈칸을 채워 볼까요?" 빈칸을 채운 뒤 "네 박자 가운데 나는 어느 박자가 가장 어렵나요?"라고 묻고 활동지에 표시하게 한다. "행동만 하면 된다"는 말에는 "행동 뒤의 지지가 빠지면 동료는 다음 날 다시 혼자예요"라고 답한다.',
          exitTicket: [
            { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['알기', '판단', '행동', '지지', '알기', null, '행동', null], palette: ['알기', '판단', '행동', '지지'] }, prompt: '지지 행동의 네 박자(알기·판단·행동·지지)가 되풀이되는 띠의 빈칸을 채우세요.', target: { fill: ['판단', '지지'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '\'뒤이어 지지하기\' 박자에 맞는 행동은?', options: ['회의가 끝나고 동료에게 다가가 괜찮은지 묻는다', '그 자리에서 크게 따진다', '못 본 척 넘긴다'], answer: 0, difficulty: 0.15, explain: '뒤이어 지지하기는 그 순간이 지난 뒤 동료 곁에 남는 행동이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '지지 행동의 네 박자',
          items: [
            { type: 'check', prompt: '네 박자 가운데 내가 약한 박자에 표시하세요.', options: ['알아차리기', '판단하기', '행동하기', '뒤이어 지지하기'] },
            { type: 'short', prompt: '표시한 박자를 연습할 방법 하나를 쓰세요.' },
          ],
        },
        notes: '교구 한계: 규칙 판의 글자 조각은 짧은 낱말만 담아 네 박자를 두 글자(알기·판단·행동·지지)로 줄였다. 자세한 행동은 출구 고르기와 활동지가 맡는다.',
      }),
      M({
        id: 'wrap.ally-card', type: 'wrap', title: '지갑 속 목격자 행동 카드',
        method: '목격자 행동 카드', tool: 'collage', minutes: 7,
        levels: { easy: '행동 둘을 담은 카드를 조각 3개 이상으로 꾸민다.', base: '행동 셋과 도움 번호 자리를 담은 카드를 꾸미고 활동지에 문구를 쓴다.', challenge: '동료에게 건넬 한 문장을 카드에 넣도록 교사가 권한다.' },
        wrap: {
          teacher: '"지갑이나 휴대폰 뒤에 넣어 둘 목격자 행동 카드를 만들어 봐요. 위급한 순간에는 길게 생각할 여유가 없으니, 한눈에 보이는 행동 셋이면 충분해요." 카드 앞면은 조각으로 꾸미고, 문구와 [학교가 확인해 넣는 학교폭력 신고·상담 번호] 자리는 활동지에 쓴다고 안내한다. 두세 작품을 보여 주고 "이 카드를 본 동료는 무엇을 할 수 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'square', 'circle', 'heart', 'star', 'triangle'] }, prompt: '목격자 행동 카드를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['행동 셋을 나타낼 칸(조각)을 두었다', '도움 번호를 적을 자리를 두었다', '한눈에 읽히게 색을 골랐다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'choice', prompt: '목격자 행동 카드에 넣기에 가장 알맞은 행동 묶음은?', options: ['흐름 바꾸기 · 따로 지지하기 · 기록하기', '크게 따지기 · 폭로하기 · 맞대응하기', '못 본 척 · 나중에 소문 내기 · 잊기'], answer: 0, difficulty: 0.15, explain: '내 위험을 줄이면서 동료를 지키는 행동이 카드에 어울려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '목격자 행동 카드',
          items: [
            { type: 'table', prompt: '카드에 넣을 문구를 쓰세요.', columns: ['칸', '문구'], cells: [['행동 1', ''], ['행동 2', ''], ['행동 3', ''], ['도움 번호', HELPNO]] },
            { type: 'short', prompt: '카드 뒷면에 넣을, 동료에게 건넬 한 문장을 쓰세요.' },
          ],
        },
        notes: '도움 번호는 체계도 brief 대로 교사가 학교에서 확인한 번호만 넣는다. 콜라주 판에는 글을 쓸 수 없어 문구는 활동지에 쓴다.',
      }),
    );
  }

  // ======================================================================================================
  // 17. 책임지고 달라지는 길 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-accountability', [12]);
    // 낙인과 책임 사이(도입): 조치를 마친 준이 새 학년 모둠에서 계속 빠진다. 피해 학생 하는 다른 반이다
    const LABEL = { text: '지난해 조치를 마친 준이 새 학년이 되었다. 준과 그 일의 피해 학생 하는 다른 반이다. 그런데 우리 반 모둠을 짤 때마다 누군가 "쟤는 빼자"고 하고, 준은 매번 혼자 남는다.', who: '나', motif: 'house', choices: [
      { id: 'join', text: '분위기를 따라 나도 "빼자"에 손을 든다', result: '준은 모둠 과제를 혼자 하게 되고 반에서 말이 줄어든다.', impact: [{ who: '준', text: '책임진 뒤에도 바뀔 자리를 잃는다', tone: -1 }], ending: '빼 버리는 것은 책임을 묻는 일이 아니라 또 다른 배제가 된다.' },
      { id: 'ask', text: '담임 선생님께 모둠 짜는 방식을 의논한다', result: '선생님이 무작위 배정과 역할 나누기로 모둠 방식을 바꾼다.', impact: [{ who: '준', text: '다시 함께할 자리가 생긴다', tone: 1 }],
        next: { text: '한 친구가 "그래도 하가 알면 불안해하지 않을까?"라고 묻는다.', choices: [
          { id: 'safe', text: '하의 안전이 먼저라는 점을 확인하고, 하와 겹치는 활동이 없는지 선생님께 함께 여쭌다', result: '하의 반과 겹치는 활동은 따로 살피기로 하고, 준은 우리 반 모둠에 들어온다.', impact: [{ who: '하', text: '안전이 먼저 지켜진다', tone: 1 }, { who: '준', text: '낙인 없이 다시 시작한다', tone: 1 }], ending: '피해 학생의 안전을 먼저 두면 보호와 재통합이 함께 갈 수 있다.' },
          { id: 'gossip', text: '하에게 준 이야기를 전하며 어떻게 생각하는지 묻는다', result: '지난 일이 다시 화제가 되어 하가 불편해한다.', impact: [{ who: '하', text: '잊고 싶던 일이 다시 떠오른다', tone: -1 }], ending: '피해 학생에게 지난 일을 꺼내는 것은 걱정이 아니라 부담이 될 수 있다.' }] } },
      { id: 'silent', text: '내 일이 아니니 아무 말도 하지 않는다', result: '"쟤는 원래 그래"라는 말이 반 분위기가 된다.', impact: [{ who: '준', text: '꼬리표가 굳어진다', tone: -1 }], ending: '침묵하면 꼬리표가 공동체의 규칙처럼 굳는다.' }] };
    const LABEL_R = [{ id: 'safe1', text: '피해 학생의 안전이 먼저 지켜져야 한다' }, { id: 'change', text: '책임을 진 사람에게는 바뀔 자리가 필요하다' }, { id: 'forever', text: '한 번 가해한 사람은 계속 빼야 한다', why: '잘못한 행동에 책임을 묻는 것과 사람을 계속 빼는 것은 달라요.' }];
    // 책임의 단계(도입·정리)
    const STEPS = ['잘못을 인정한다', '피해 학생이 받은 영향을 이해한다', '사과한다(피해 학생이 원하는 방식으로)', '게시물 삭제·정정 등 바로잡는다', '같은 행동을 하지 않는다', '선생님과 함께 점검한다'];
    // 두 학생의 이후(활동): 같은 사안 뒤 준(책임지는 길)과 결(부인하는 길)
    const AFTER = { text: '가상 사안: 단톡방에서 하를 조롱한 일로 조치를 받은 학생이 있다. 조치가 끝난 첫 주, 그 학생은 선택의 갈림길에 선다.', who: '그 학생', motif: 'star', choices: [
      { id: 'own', text: '"내가 한 말이 하에게 상처였다"고 상담 선생님께 인정한다(준의 길)', result: '상담 선생님과 하가 받은 영향을 함께 짚어 본다.', impact: [{ who: '하', text: '책임이 인정되어 마음이 조금 놓인다', tone: 1 }],
        next: { text: '준은 사과하고 싶어 한다. 상담 선생님이 "하가 직접 만나기를 원하는지 먼저 물어볼게"라고 한다.', choices: [
          { id: 'wait', text: '하의 뜻을 기다리고, 그동안 남은 게시물을 지우고 정정 글을 올린다', result: '하는 만남 대신 편지를 받겠다고 하고, 게시물이 정리된다.', impact: [{ who: '하', text: '원하는 방식으로 사과를 받는다', tone: 1 }],
            next: { text: '한 달 뒤, 단톡방에서 누군가 또 하를 놀리기 시작한다.', choices: [
              { id: 'stop', text: '준이 "그만하자, 나도 예전에 그랬다가 상처를 줬어"라고 말린다', result: '놀림이 멈추고 담임 선생님이 상황을 살핀다.', impact: [{ who: '하', text: '다시 상처받지 않는다', tone: 1 }, { who: '준', text: '바뀐 행동을 보여 준다', tone: 1 }], ending: '책임은 사과로 끝나지 않고 다음 행동으로 이어질 때 완성된다.' },
              { id: 'laugh', text: '준이 예전처럼 따라 웃는다', result: '하는 다시 불안해지고 점검 상담이 다시 잡힌다.', impact: [{ who: '하', text: '회복이 흔들린다', tone: -1 }], ending: '같은 행동이 되풀이되면 사과의 무게도 사라진다.' }] } },
          { id: 'push', text: '빨리 끝내고 싶어 하의 반으로 찾아가 사과를 받아 달라고 한다', result: '하는 갑작스러운 만남에 놀라 자리를 피한다.', impact: [{ who: '하', text: '원치 않는 만남에 불안해진다', tone: -1 }], ending: '피해 학생이 원하지 않는 사과는 또 하나의 부담이 된다.' }] } },
      { id: 'deny', text: '"장난이었는데 억울하다"며 일을 부인한다(결의 길)', result: '하에게는 사과도 바로잡기도 없이 시간이 흐른다.', impact: [{ who: '하', text: '불안이 길게 남는다', tone: -1 }],
        next: { text: '친구들 사이에서 결을 두고 "원래 저런 애"라는 말이 돈다. 결은 점점 혼자가 된다.', choices: [
          { id: 'invite', text: '담임 선생님이 결과 상담을 이어 가며 하가 받은 영향을 다시 짚는다', result: '결이 처음으로 하의 입장에서 그 일을 이야기한다.', impact: [{ who: '결', text: '부인에서 인정으로 한 걸음 옮긴다', tone: 1 }], ending: '부인하던 학생도 공동체가 놓지 않으면 책임 쪽으로 걸음을 옮길 수 있다.' },
          { id: 'drop', text: '모두 결을 피하고 아무도 말을 걸지 않는다', result: '결은 반에서 멀어지고 다른 곳에서 비슷한 일을 벌인다.', impact: [{ who: '결', text: '바뀔 기회 없이 고립된다', tone: -1 }], ending: '낙인과 고립은 재발을 막지 못한다.' }] } }] };
    const AFTER_R = [{ id: 'victim', text: '피해 학생이 원하는 방식이 사과의 기준이다' }, { id: 'action', text: '책임은 다음 행동이 달라질 때 완성된다' }, { id: 'community', text: '공동체가 놓지 않으면 부인하던 사람도 바뀔 수 있다' }, { id: 'sorry', text: '사과만 하면 책임을 다한 것이다', why: '사과 뒤에 바로잡기와 바뀐 행동이 이어져야 책임을 다한 것이에요.' }];
    // 바로잡기 계획 판: 별 = 계획 단계, 바위 = 피해 학생이 원치 않는 대면 길, 깃발 = 점검
    const RP_BASE = { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], rocks: [[2, 0]] };
    const RP_EASY = { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 1], [2, 1]], rocks: [] };
    const RP_DETOUR = { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 1], [4, 1]], rocks: [[3, 2], [4, 2]] };

    MODS.push(
      M({
        id: 'intro.label-dilemma', type: 'intro', title: '조치를 마친 친구가 계속 빠질 때',
        method: '낙인과 책임 사이', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길 두 갈래(따라서 빼기·선생님과 의논)만 함께 걸어 결과를 비교한다.', base: '시연에서 갈림길 둘을 따라가 피해 학생 보호와 재통합이 함께 가는 길을 보고 근거 카드를 고른다.', challenge: '\'피해 학생의 안전을 먼저 두는 조건\'을 학생이 세 가지로 말한다(겹치는 활동 살피기·지난 일 꺼내지 않기·선생님과 의논).' },
        intro: {
          teacher: '"지난해 조치를 마친 준이 새 학년이 되었어요. 피해 학생 하는 다른 반이에요. 그런데 우리 반에서 준이 매번 모둠에서 빠져요. 이건 책임을 묻는 걸까요, 또 다른 따돌림일까요?" 시연 단추로 \'선생님과 의논\' 길과 \'따라서 빼기\' 길을 차례로 보여 준다. "한 번 가해자는 영원히 가해자다"라는 말이 나오면 "준이 바뀌기를 바란다면, 바뀔 자리는 어디에 있어야 할까요?"라고 되묻는다. 다만 어떤 경우에도 피해 학생의 안전이 먼저이고, 그 조건을 지키며 함께하는 길을 찾는다는 점을 짚는다.',
          student: '조치를 마친 준이 새 반에서 계속 빠지는 장면에서 어떻게 할지 고르고, 피해 학생 하의 안전과 준의 재통합이 함께 가능한지 결과를 보세요.',
          demo: { tool: 'dilemma', options: { scene: LABEL, reasons: LABEL_R, title: '낙인과 책임 사이' }, sequence: [{ path: ['ask', 'safe'], reasons: ['safe1', 'change'] }] },
          art: { draw: 'a paper classroom with desks pushed into small groups, one paper desk left alone at the edge, a paper teacher figure holding a card that reads groups by lot, a soft paper shield standing beside a door to another classroom', banner: '책임은 묻고, 꼬리표는 떼고', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '준·하는 가상 인물이다. 실제 학교폭력 관련 학생을 떠올리게 하는 말(이름·반)을 쓰지 않는다. 피해 학생의 안전과 의견이 늘 먼저다.',
      }),
      M({
        id: 'intro.change-steps', type: 'intro', title: '책임의 여섯 단계',
        method: '책임의 단계 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 앞 네 단계(인정·영향 이해·사과·바로잡기)를 띠에 놓아 보인다.', base: '여섯 단계 카드가 띠에 놓이는 시연을 보고, 단계가 바뀌면 무엇이 달라지는지 말한다.', challenge: '단계마다 필요한 지원(상담 선생님·담임 선생님·보호자)을 학생이 붙여 말한다.' },
        intro: {
          teacher: '"잘못을 한 사람이 \'책임을 졌다\'고 말하려면 무엇이 있어야 할까요?" 시연 단추로 여섯 단계 카드가 차례로 놓이는 모습을 보여 준다. "사과만 하면 끝"이라는 말이 나오면 "사과한 다음 날 같은 놀림을 또 한다면, 그 사과는 무엇이었을까요?"라고 되묻는다. 사과도 피해 학생이 원하는 방식이어야 한다는 점, 단계마다 혼자가 아니라 어른의 도움을 받는다는 점을 짚는다.',
          student: '가해 행동을 한 사람이 책임을 지고 달라지는 여섯 단계가 어떤 차례로 이어지는지 띠를 보며 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 6, cards: [STEPS[3], STEPS[0], STEPS[5], STEPS[2], STEPS[4], STEPS[1]] }, sequence: [{ order: STEPS }] },
          art: { draw: 'a long paper ribbon timeline with six paper stepping stones rising gently from left to right, a small paper figure stepping onto the second stone, a paper hand of a counselor reaching beside the path', banner: '사과로 끝나지 않아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      M({
        id: 'activity.case-tracking', type: 'activity', title: '책임진 학생과 부인한 학생의 한 학기',
        method: '두 학생의 이후 추적', tool: 'dilemma', minutes: 17,
        levels: { easy: '준의 길(인정)에서 갈림길 하나를 고르고 근거를 고른다.', base: '갈림길 둘을 따라가며 피해 학생 하의 회복과 재발 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 가고, 준의 길과 결의 길을 모두 걸어 공동체가 개입한 지점을 활동지에 표시한다.' },
        activity: {
          title: '두 학생의 이후 갈림길', tool: 'dilemma',
          teacher: '"같은 사안 뒤, 한 학생은 책임을 졌고 다른 학생은 부인했어요. 한 학기 동안 무엇이 달라졌는지 따라가 봐요." 선택마다 하에게 생긴 영향을 먼저 읽게 한다. \'빨리 끝내고 싶어 찾아가 사과한다\'를 고른 학생에게 "사과는 누구를 위한 것일까요? 하가 원하는 방식은 무엇이었을까요?"라고 묻는다. 결의 길에서 \'모두 피한다\'를 고른 학생에게는 "결이 다른 곳에서 같은 일을 벌인다면 그건 해결일까요?"라고 되묻는다. 공동체의 역할은 봐주기가 아니라 책임 쪽으로 이끄는 것이라는 점을 짚는다.',
          task: '같은 사안 뒤 두 학생의 길을 갈림길마다 따라가며 피해 학생 회복·재발·관계 결과를 견주고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('준의 길(인정)을 따라가 하의 회복이 이어지는 선택을 고르고, 내 선택의 근거를 고르세요.', AFTER, [['own', 'wait', 'stop']], AFTER_R, ['victim', 'action'], { d: 0.4 }),
            DILQ('결의 길(부인)에서 공동체가 할 수 있는 선택을 고르고 근거를 고르세요.', { text: AFTER.choices[1].next.text, who: '공동체', motif: 'house', choices: AFTER.choices[1].next.choices }, [['invite']], AFTER_R, ['community'], { d: 0.35 }),
            EXPLOREQ('준의 길과 결의 길을 모두 끝까지 가 보고, 하에게 생긴 결과를 견주세요.', AFTER, AFTER_R, ['두 길의 끝 장면을 모두 확인했다', '하의 회복이 어디서 갈렸는지 찾았다'], { d: 0.35, more: { conclude: '책임을 진 길에서는 하의 회복과 준의 변화가 함께 갔어요. 부인한 길에서도 공동체가 놓지 않으면 책임 쪽으로 돌아올 길이 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 학생의 한 학기를 견주어 정리하세요.', columns: ['', '준(인정)', '결(부인)'], cells: [['피해 학생 하의 회복', '', ''], ['재발', '', ''], ['공동체가 개입한 지점', '', '']] }] },
        notes: '준·결·하는 가상 인물이다. 조치의 종류·기록 기준은 다루지 않는다.',
      }),
      M({
        id: 'activity.repair-plan', type: 'activity', title: '바로잡기 계획을 블록으로',
        method: '바로잡기 계획 설계', tool: 'block-coding', minutes: 18,
        levels: { easy: '단계 셋(별 둘 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '별 다섯(삭제·정정·사과·거리 두기 약속·상담 참여)을 들러 깃발(점검)에 닿게 하고, 순서를 건너뛴 프로그램을 따라가 본다.', challenge: '\'피해 학생이 만남을 원하지 않는\' 바위 칸을 돌아가는 갈래 판에서 별을 모두 들러 깃발에 닿고, 활동지에 그 갈래의 까닭을 쓴다.' },
        activity: {
          title: '바로잡기 계획 설계', tool: 'block-coding',
          teacher: '"가상 학생 준의 바로잡기 계획이에요. 별 다섯은 차례대로 ① 남은 게시물 삭제 ② 정정 글 ③ 사과(하가 원하는 방식으로) ④ 거리 두기 약속 ⑤ 상담 참여이고, 깃발은 ⑥ 선생님과 함께 점검이에요." 프로그램을 실행할 때마다 "지금 준은 어느 단계까지 왔나요? 하의 동의는 어디서 확인했나요?"라고 묻는다. "사과는 꼭 얼굴 보고 해야 진심"이라는 말이 나오면 "하가 만남을 원하지 않는다면, 그 길은 바위처럼 막힌 길이에요. 어떤 다른 길이 있을까요?"라고 되묻는다. 바로잡기는 낙인을 찍는 벌이 아니라 행동을 바꾸는 계획이라는 점을 짚는다.',
          task: '별(바로잡기 단계)을 모두 들러 깃발(점검)에 닿는 프로그램을 만들고, 피해 학생의 동의가 필요한 단계를 활동지에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 다섯(①삭제 ②정정 ③사과 ④거리 두기 약속 ⑤상담 참여)을 모두 들르고 깃발(⑥점검)에 닿게 하세요.', RP_BASE, { stars: true }, {
              easy: { prompt: '별 둘(①삭제 ②정정)을 들러 깃발(점검)에 닿게 하세요(단계 셋).', board: RP_EASY, target: { stars: true } },
              d: 0.35, more: { hints: ['별이 한 줄로 놓인 쪽을 먼저 끝까지 가고, 줄 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            TRACEQ('친구가 짠 계획이에요: 앞으로 2칸 → 왼쪽으로 돌기 → 앞으로 2칸. 사과·거리 두기·상담을 건너뛰고 점검 쪽으로 가요. 거북이가 멈출 칸을 고르세요.', { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], rocks: [] }, ['fwd', 'fwd', 'left', 'fwd', 'fwd'], { x: 2, y: 0 }, { d: 0.3, more: { conclude: '삭제와 정정만 하고 점검으로 가면 사과·거리 두기·상담이 빠져요. 깃발 근처에 가도 바로잡기는 끝나지 않았어요.' } }),
            BCQ('하가 직접 만나기를 원하지 않아요. 바위(대면 사과 길)를 돌아 별(①삭제 ②정정 ③상담 선생님을 거친 편지 사과 ④거리 두기 약속)을 모두 들르고 깃발(점검)에 닿게 하세요.', RP_DETOUR, { stars: true }, { d: 0.4, more: { conclude: '피해 학생이 원하지 않는 길은 돌아가요. 사과의 방식은 하가 정하고, 준은 그 뜻을 따르며 바로잡아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 준의 바로잡기 계획으로 옮겨 쓰세요.', columns: ['단계', '할 일', '하의 동의가 필요한가'], cells: [['①', '남은 게시물 삭제', ''], ['②', '정정 글', ''], ['③', '사과', ''], ['④', '거리 두기 약속', ''], ['⑤', '상담 참여', ''], ['⑥', '선생님과 함께 점검', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에는 글을 붙일 수 없어 계획 단계를 별 칸, 점검을 깃발, 피해 학생이 원하지 않는 대면 길을 바위로 나타냈다. \'갈래\'는 바위를 돌아가는 판(셋째 문항)으로 나타낸다. 단계 글은 활동지 표가 맡는다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '조치 뒤 같은 반 배정 찬반',
        method: '찬반 토론: 조치 뒤 같은 반 배정', tool: 'sortboard', minutes: 17,
        levels: { easy: '근거 카드 6장을 찬성·반대·근거 약함 바구니에 나누고, 틀린 바구니에 넣으면 바로 돌아온다.', base: '근거 카드 8장을 나누고, 반박 카드를 \'찬성에 대한 반박\'·\'반대에 대한 반박\'으로 가르고, 중간안에 넣을 조건을 고른다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 활동지에 피해 학생 의견을 우선하는 안을 쓴다.' },
        activity: {
          title: '같은 반 배정 찬반', tool: 'sortboard',
          teacher: '"\'조치를 마친 학생은 피해 학생과 다른 반이어야 한다.\' 오늘은 내 편을 정하기 전에 양쪽의 가장 강한 근거부터 찾아봐요." 카드를 넣을 때마다 "이 근거는 누구의 무엇을 지키려는 것인가요?"라고 묻는다. "반대하면 피해 학생을 무시하는 거다"라는 학생에게 "반대 쪽도 피해 학생의 안전을 다른 방법으로 지키자고 할 수 있어요. 그 방법은 무엇일까요?"라고 되묻는다. 어느 쪽이든 피해 학생의 안전과 의견이 출발점이라는 점을 짚는다.',
          task: '근거 카드를 찬성·반대·근거 약함 바구니에 나누고, 반박과 중간안의 조건을 가려요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SBQ('근거 카드를 찬성(다른 반)·반대(같은 반 가능)·근거 약함 바구니에 나누세요.', ['찬성(다른 반)', '반대(같은 반 가능)', '근거 약함'], [
              ['피해 학생이 매일 마주치는 불안을 줄인다', '보복이나 다시 생길 일을 막기 쉽다', '피해 학생이 학교생활에 집중할 수 있다'],
              ['반을 나누기 어려운 작은 학교도 있다', '분리만으로는 행동이 바뀌지 않는다', '같은 반이어도 자리·모둠으로 거리를 둘 수 있다'],
              ['다들 그렇게 한다더라', '가해 학생이 미우니까'],
            ], { k: 2, hard: [['피해 학생이 원하면 바로 바꿀 길이 있어야 한다'], ['학교가 반을 나눌 수 있는지는 상황마다 다르다']], d: 0.35 }),
            SBQ('반박 카드를 어느 쪽 근거에 대한 반박인지에 따라 나누세요.', ['찬성에 대한 반박', '반대에 대한 반박'], [
              ['다른 반이어도 복도·급식실에서 마주칠 수 있다', '반만 나누고 상담이 없으면 변화가 없다'],
              ['자리·모둠으로 거리를 두는 것은 피해 학생이 매일 확인해야 하는 부담이다', '행동 변화를 기다리는 동안 피해 학생이 불안을 견딘다'],
            ], { k: 1, d: 0.4, more: { hints: ['이 반박이 무너뜨리려는 근거가 \'다른 반이어야 한다\'인지 \'같은 반이어도 된다\'인지 보세요.'] } }),
            SBQ('피해 학생 의견을 우선하는 중간안에 넣을 조건과 넣지 않을 것을 나누세요.', ['중간안에 넣을 조건', '넣지 않을 것'], [
              ['피해 학생과 보호자의 의견을 먼저 듣는다', '불안하면 언제든 바꿀 길을 연다', '상담과 점검을 함께 이어 간다'],
              ['가해 학생 의견만으로 정한다', '피해 학생에게 참으라고 한다'],
            ], { k: 2, d: 0.4, more: { conclude: '찬반이 달라도 \'피해 학생의 안전과 의견이 먼저\'라는 출발점은 같아요. 중간안은 그 출발점에서 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '피해 학생 의견을 우선하는 내 안을 두 문장으로 쓰세요(조건 하나 이상 포함).' }] },
        notes: '반 배정 등 실제 조치의 종류·결정 절차는 학교와 교육지원청이 정한다. 수업에서는 조치 호수·기록 기준을 다루지 않는다.',
      }),
      M({
        id: 'activity.letter-analysis', type: 'activity', title: '책임 편지에 담긴 것, 빠진 것',
        method: '책임 편지 분석 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '편지의 진정성 요소 둘(인정·영향 이해)을 찾아 쓴다.', base: '진정성 요소와 빠진 요소를 합쳐 넷을 찾아 쓰고 기준표로 점검한다.', challenge: '빠진 요소를 채워 편지를 고쳐 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '책임 편지 분석', tool: 'rubric-writing',
          teacher: '"가상 학생 준이 하에게 쓴 편지예요(상담 선생님을 거쳐 전하기로 했어요). 함께 읽고, 책임이 담긴 문장과 빠진 것을 찾아봐요." 편지를 소리 내어 읽은 뒤 기준표를 함께 본다. "\'오해하게 해서 미안해\'도 사과 아니냐"는 학생에게 "이 문장의 주어는 누구의 잘못인가요? 하의 오해인가요, 준의 행동인가요?"라고 되묻는다. 분석은 준을 깎아내리는 글이 아니라 책임이 무엇으로 이루어지는지 찾는 글이라는 점을 짚는다.',
          task: '가상 학생 준의 책임 편지를 읽고 진정성 요소와 빠진 요소를 분석하는 글을 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('편지에서 책임이 담긴 문장 둘을 찾아, 왜 그런지 두 문장으로 쓰세요.', '준의 편지: "하야, 단톡방에서 내가 네 사진에 놀리는 말을 단 건 내 잘못이야. 그 뒤로 네가 단톡방을 나가고 점심도 혼자 먹었다는 걸 알았어. 오해하게 해서 미안해. 앞으로는 조심할게." — 책임이 담긴 문장 둘과 그 까닭을 쓰세요.', ['편지 속 문장을 그대로 옮겼다', '인정이 담긴 문장을 찾았다', '영향 이해가 담긴 문장을 찾았다'], { min: 40, max: 300, sent: [2, 3], must: [['잘못', '인정']], starter: '"~"는 ~가 담긴 문장이다. 왜냐하면 ~', d: 0.3 }),
            RWQ('편지에 빠진 요소 둘을 찾아 두 문장으로 쓰세요.', '같은 편지에서 빠진 것(바로잡기·다시 하지 않을 구체적 약속·피해 학생의 선택 존중 등) 둘을 찾고, 왜 필요한지 쓰세요.', ['빠진 요소 두 가지를 썼다', '\'오해하게 해서\'처럼 책임을 흐리는 말을 짚었다', '하를 탓하는 말이 없다'], { min: 50, max: 350, sent: [2, 4], must: [['빠진', '없다', '부족']], starter: '이 편지에는 ~이 빠졌다. ~도 없다.', plus: '빠진 요소를 채운 문장을 한 줄 예로 들었다', d: 0.4,
              sample: '이 편지에는 남은 게시물을 어떻게 바로잡을지가 빠졌다. "조심할게"보다 무엇을 하지 않을지 구체적인 약속도 없다. 또 "오해하게 해서"라는 말은 잘못을 하의 오해로 돌린다. 예를 들어 "내가 단 댓글은 모두 지웠고, 다시는 네 사진에 댓글을 달지 않을게"처럼 써야 한다.', more: { conclude: '책임이 담긴 사과는 인정·영향 이해·바로잡기·구체적 약속, 그리고 피해 학생의 선택 존중으로 이루어져요.' } }),
            DONEQ('짝과 분석 글을 바꿔 읽고, 서로 찾지 못한 요소 하나를 알려 주세요.', '짝과 바꿔 읽기', '짝과 바꿔 읽고 말해 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '준의 편지를 고쳐 쓴다면, \'오해하게 해서 미안해\'를 무엇으로 바꿀지 한 문장으로 쓰세요.' }] },
        notes: '편지는 가상이다. 학생에게 자기 사과 경험을 쓰게 하지 않는다.',
      }),

      M({
        id: 'wrap.community-map', type: 'wrap', title: '회복을 돕는 공동체의 역할',
        method: '공동체의 역할 지도', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(학급·교사)에 카드 한 장씩을 함께 놓는다.', base: '가지 넷(학급·교사·보호자·상담)에 역할 카드를 나눈다.', challenge: '\'모두가 피하기\' 카드가 어느 가지에도 맞지 않는 까닭을 말하고, 역할 사이 충돌(예: 보호와 재통합)을 활동지에 쓴다.' },
        wrap: {
          teacher: '"피해 학생의 회복, 재발 방지, 재통합 — 이 일은 한 사람이 하지 않아요. 누가 무엇을 맡을까요?" 카드를 나눈 뒤 \'모두가 그 학생을 피하기\' 카드가 왜 남는지 묻는다. "그건 학교가 할 일이지 우리 일은 아니다"라는 말에 "모둠을 짜고 말을 거는 사람은 누구일까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '회복을 돕는 공동체', slots: ['학급', '교사', '보호자', '상담'], cards: ['꼬리표 대신 모둠에 함께한다', '피해 학생의 안전을 먼저 살핀다', '집에서 변화를 함께 점검한다', '영향을 이해하도록 대화를 이어 간다', '모두가 그 학생을 피하기'] }, prompt: '공동체의 역할 카드를 맡을 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).', target: { sort: { 학급: ['꼬리표 대신 모둠에 함께한다'], 교사: ['피해 학생의 안전을 먼저 살핀다'], 보호자: ['집에서 변화를 함께 점검한다'], 상담: ['영향을 이해하도록 대화를 이어 간다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '책임과 회복에 대한 말로 알맞은 것은?', options: ['한 번 가해한 사람은 영원히 가해자다', '피해 학생의 안전을 먼저 두고, 책임진 사람에게는 바뀔 자리를 준다', '사과만 하면 책임을 다한 것이다'], answer: 1, difficulty: 0.2, explain: '피해 회복이 먼저이고, 책임을 진 사람은 낙인 없이 행동으로 달라질 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '회복을 돕는 공동체',
          items: [
            { type: 'table', prompt: '역할마다 할 일을 한 줄씩 쓰세요.', columns: ['누구', '할 일'], cells: [['학급', ''], ['교사', ''], ['보호자', ''], ['상담', '']] },
            { type: 'short', prompt: '역할 사이에 부딪힐 수 있는 점(예: 피해 학생 보호와 재통합) 하나와 먼저 둘 것을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.principle-poster', type: 'wrap', title: '회복의 원칙 한 장',
        method: '회복의 원칙 한 장', tool: 'collage', minutes: 7,
        levels: { easy: '원칙 하나("피해 회복이 먼저")를 담은 조각 3개 이상으로 포스터를 꾸민다.', base: '원칙 셋(피해 회복이 먼저·낙인 없이 책임을·다음 행동으로 보여 주기)을 조각으로 나타내고 점검한다.', challenge: '원칙마다 실천 예시 한 줄을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 배운 것을 포스터 한 장으로 남겨 봐요. 가운데 문장은 \'피해 회복이 먼저, 낙인 없이 책임을\'이에요." 조각으로 원칙을 나타내게 하고 두세 작품을 보여 준다. "낙인 없이"를 "봐주자"로 읽는 학생에게 "책임은 그대로 묻고, 꼬리표만 떼는 거예요. 무엇이 다를까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: '\'피해 회복이 먼저, 낙인 없이 책임을\' 포스터를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['피해 학생을 지키는 모양을 가장 먼저 놓았다', '책임(바로잡기)을 나타내는 조각을 넣었다', '꼬리표·낙인을 떼는 모습을 나타냈다'], minPieces: 3 }, difficulty: 0.15 },
            { type: 'short', prompt: '포스터에 넣을 실천 예시 한 줄을 쓰세요(실제 사람 이름은 쓰지 않아요).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '회복의 원칙',
          items: [
            { type: 'short', prompt: '포스터 가운데 문장을 내 말로 다시 쓰세요.' },
            { type: 'check', prompt: '책임지고 달라지는 길에 들어가는 것에 표시하세요.', options: ['잘못 인정', '영향 이해', '피해 학생이 원하는 방식의 사과', '바로잡기', '다시 하지 않기', '꼬리표 붙이기'] },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 18. 후배에게 넘기는 평화 문화와 존중 서약 (12학년)
  // ======================================================================================================
  {
    const M = MOD('g12-respect-pledge', [12]);
    // 졸업 뒤 헌장이 잊히는 장면(도입)
    const FADE = { text: '가상 학교: 지난해 졸업한 선배들이 만든 평화 헌장이 게시판에 붙어 있다. 그런데 올해 1학년 대부분은 헌장이 있는지도 모르고, 단톡방 놀림이 다시 늘었다. 선배들은 졸업 전에 무엇을 남겨야 했을까?', who: '졸업 앞둔 3학년', motif: 'house', choices: [
      { id: 'paper', text: '헌장 문서만 잘 정리해 게시판에 붙여 둔다', result: '문서는 남았지만 읽어 줄 사람도, 지켜 볼 사람도 없다.', impact: [{ who: '1학년', text: '헌장을 모른 채 지낸다', tone: 0 }], ending: '문서만 남기면 문화는 함께 졸업해 버린다.' },
      { id: 'people', text: '2학년 후배와 멘토 짝을 맺고 헌장 행사를 함께 치른다', result: '2학년이 헌장 행사를 직접 열 줄 알게 된다.', impact: [{ who: '2학년', text: '이어 갈 사람이 된다', tone: 1 }],
        next: { text: '새 학년, 헌장 담당이던 2학년 후배가 전학을 갔다.', choices: [
          { id: 'council', text: '학생회 정기 안건과 점검표에 헌장을 넣어 두었다', result: '학생회가 새 담당을 정하고 행사가 이어진다.', impact: [{ who: '1학년', text: '헌장 행사로 평화 문화를 만난다', tone: 1 }], ending: '사람이 바뀌어도 이어지게 하는 장치(학생회·점검표)가 문화를 지킨다.' },
          { id: 'alone', text: '그 후배 한 사람에게만 맡겨 두었다', result: '담당이 사라지자 행사도 끊긴다.', impact: [{ who: '1학년', text: '헌장을 만날 기회가 없다', tone: -1 }], ending: '한 사람에게만 기대면 그 사람이 떠날 때 문화도 떠난다.' }] } },
      { id: 'none', text: '졸업하면 끝이니 아무것도 남기지 않는다', result: '헌장은 첫 학기에 떼어진다.', impact: [{ who: '1학년', text: '평화 문화를 처음부터 다시 만들어야 한다', tone: -1 }], ending: '졸업하면 학교 문화와 상관없다는 생각이 문화를 끊는다.' }] };
    const FADE_R = [{ id: 'device', text: '사람이 바뀌어도 이어지는 장치가 필요하다' }, { id: 'together', text: '후배가 직접 해 보아야 이어 갈 수 있다' }, { id: 'paperonly', text: '문서만 잘 남기면 저절로 이어진다', why: '문서는 읽고 지킬 사람이 있어야 문화가 돼요.' }];
    // 인수인계 판: 별 = 인수인계 단계, 깃발 = 학생회 연결
    const HB_BASE = { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2]], rocks: [[2, 0], [3, 0]] };
    const HB_EASY = { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 1], [3, 1]], rocks: [] };
    // 3년 가상 설문(학교 공동체 규범 제안 근거)
    const YEARS = ['1학년 때', '2학년 때', '3학년 때'];
    const STEP = [['1학년 때', 22], ['2학년 때', 35], ['3학년 때', 48]];
    const SEEN = [['1학년 때', 41], ['2학년 때', 33], ['3학년 때', 27]];
    const LINE = (data, title, yLabel, more = {}) => Object.assign({ type: 'line', mode: 'read', title, unit: '%', xLabel: '시기', yLabel, data }, more);

    MODS.push(
      M({
        id: 'intro.legacy-map', type: 'intro', title: '3년 동안 만든 평화 문화',
        method: '3년 평화 문화 지도', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 둘(헌장·캠페인)에 카드 한 장씩을 놓아 보인다.', base: '가지 넷(헌장·캠페인·또래 상담·목격자 행동)에 카드가 놓이는 시연을 보고 우리 학년 것을 떠올린다.', challenge: '후배에게 꼭 이어 가야 할 가지 하나를 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"3년 동안 우리가 만든 평화 문화를 한 장에 펼쳐 봐요. 1학년 때 만든 헌장, 2학년 때 캠페인, 또래 상담… 무엇이 남았을까요?" 시연 단추로 카드가 가지에 놓이는 모습을 보여 준다. "졸업하면 학교 문화와 상관없다"는 말이 나오면 "우리가 1학년 때 만난 선배들의 문화가 지금 우리에게 남아 있다면, 우리가 남길 것도 그렇지 않을까요?"라고 되묻는다. 여기서는 누가 무엇을 겪었는지가 아니라 학교가 함께 만든 것만 이야기한다고 밝힌다.',
          student: '고등학교 3년 동안 우리 학교가 만든 평화 문화(헌장·캠페인·또래 상담·목격자 행동)를 가지로 펼쳐 보고, 후배에게 이어 갈 것을 생각해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '3년 평화 문화', slots: ['헌장', '캠페인', '또래 상담', '목격자 행동'], cards: ['학년 평화 헌장 다섯 조항', '퍼 나르기 멈춤 카드뉴스', '듣고 어른과 잇는 또래 상담', '곁에 서고 알리는 목격자'] }, sequence: [{ sort: { 헌장: ['학년 평화 헌장 다섯 조항'], 캠페인: ['퍼 나르기 멈춤 카드뉴스'], '또래 상담': ['듣고 어른과 잇는 또래 상담'], '목격자 행동': ['곁에 서고 알리는 목격자'] } }] },
          art: { draw: 'a paper mind map spread on a school hallway notice board, four paper branches leading to a rolled charter scroll, a stack of card news sheets, two paper chairs facing each other and a small paper figure standing beside a friend', banner: '우리가 남길 평화 문화', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.handover-dilemma', type: 'intro', title: '후배가 헌장을 모를 때',
        method: '후배가 문화를 이어받지 않을 때', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길 두 갈래(문서만 남기기·멘토 짝과 행사)만 함께 걸어 결과를 견준다.', base: '시연에서 갈림길 둘을 따라가 담당이 바뀌어도 이어지는 길을 보고 근거 카드를 고른다.', challenge: '\'지속 장치\'(학생회 안건·점검표·멘토 짝)를 근거로 가장 오래갈 선택을 학생이 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"가상 학교 이야기예요. 졸업한 선배들의 헌장이 게시판에 있는데, 1학년은 그걸 몰라요. 선배들은 졸업 전에 무엇을 남겨야 했을까요?" 시연 단추로 \'문서만 남기기\' 길과 \'멘토 짝과 행사\' 길을 차례로 보여 준다. "좋은 헌장이면 알아서 지킨다"는 말이 나오면 "읽어 줄 사람도, 지켜 볼 사람도 없다면 헌장은 무엇이 될까요?"라고 되묻는다. 오늘 수업의 질문은 \'무엇을 남길까\'가 아니라 \'어떻게 이어지게 할까\'라고 밝힌다.',
          student: '졸업 뒤 헌장이 잊힌 가상 장면에서 선배들이 무엇을 남겨야 했는지 고르고, 그 선택이 후배들에게 남긴 결과를 보세요.',
          demo: { tool: 'dilemma', options: { scene: FADE, reasons: FADE_R, title: '헌장이 잊힐 때' }, sequence: [{ path: ['people', 'council'], reasons: ['device', 'together'] }] },
          art: { draw: 'a paper notice board with a faded charter sheet peeling at one corner, two paper students of different heights side by side holding the same torch-shaped paper card, a paper student council desk in the background', banner: '남기는 것보다 이어지게', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '가상 학교 장면이다. 실제 우리 학교 후배 이름이나 사건을 예로 들지 않는다.',
      }),

      M({
        id: 'activity.handover-blocks', type: 'activity', title: '인수인계 절차를 블록으로',
        method: '인수인계 절차 설계', tool: 'block-coding', minutes: 17,
        levels: { easy: '단계 셋(별 둘 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '별 넷(기록 정리·멘토 짝·공동 행사·점검표 전달)을 들러 깃발(학생회 연결)에 닿게 하고, 반복 블록으로 줄여 본다.', challenge: '조건 블록(막히면 왼쪽)으로 \'담당이 없으면 학생회 쪽으로 꺾는 갈래\'를 만들고, 활동지에 그 까닭을 쓴다.' },
        activity: {
          title: '인수인계 절차 설계', tool: 'block-coding',
          teacher: '"판의 별 넷은 차례대로 ① 기록 정리(헌장·캠페인 자료) ② 후배 멘토 짝 ③ 공동 행사 ④ 점검표 전달이고, 깃발은 ⑤ 학생회 연결이에요." 프로그램을 실행할 때마다 "지금 넘긴 것은 물건인가요, 할 줄 아는 힘인가요?"라고 묻는다. "기록만 넘기면 된다"는 말에 "별 하나만 들르고 깃발로 가면 후배는 무엇을 할 줄 알게 될까요?"라고 되묻는다. 판은 절차의 차례를 익히는 비유이고 실제 인수인계 글은 활동지에 쓴다.',
          task: '별(인수인계 단계)을 모두 들러 깃발(학생회 연결)에 닿는 프로그램을 만들고, 우리 학년 인수인계 계획을 활동지에 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BCQ('별 넷(①기록 정리 ②멘토 짝 ③공동 행사 ④점검표 전달)을 모두 들르고 깃발(⑤학생회 연결)에 닿게 하세요.', HB_BASE, { stars: true }, {
              easy: { prompt: '별 둘(①기록 정리 ②멘토 짝)을 들러 깃발(학생회 연결)에 닿게 하세요(단계 셋).', board: HB_EASY, target: { stars: true } },
              challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 판 끝에서 막히면 꺾는 블록은 \'담당이 없으면 학생회 쪽으로 넘기는 갈래\'예요(조건 블록).', board: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { stars: true, use: ['if'] } },
              d: 0.35, more: { hints: ['별이 한 줄로 놓인 쪽을 먼저 끝까지 가고, 판 끝에서 깃발 쪽으로 몸을 돌려요.'] } }),
            BCQ('같은 판에서 반복 블록을 꼭 써서, 블록 5개 안으로 별 넷을 들르고 깃발에 닿게 하세요.', HB_BASE, { stars: true, use: ['rep'], maxBlocks: 5 }, { d: 0.4, more: { conclude: '되풀이되는 일은 반복 블록처럼 해마다 같은 차례로 — 인수인계도 \'해마다 하는 일\'이 되어야 이어져요.' } }),
            TRACEQ('친구 계획이에요: 앞으로 1칸 → 왼쪽으로 돌기 → 앞으로 1칸. 기록 정리만 하고 멘토 짝·행사·점검표를 건너뛰어요. 거북이가 멈출 칸을 고르세요.', { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 2], [2, 2], [3, 2], [4, 2]], rocks: [] }, ['fwd', 'left', 'fwd'], { x: 1, y: 1 }, { d: 0.3, more: { conclude: '기록만 넘기고 멈추면 깃발(학생회)에 닿지 못해요. 사람과 행사가 함께 넘어가야 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학년 인수인계 계획을 쓰세요.', columns: ['단계', '넘길 것', '맡을 사람(역할)'], cells: [['① 기록 정리', '', ''], ['② 멘토 짝', '', ''], ['③ 공동 행사', '', ''], ['④ 점검표 전달', '', ''], ['⑤ 학생회 연결', '', ''], ['갈래: 담당이 없을 때', '', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에는 글을 붙일 수 없어 인수인계 단계를 별 칸, 학생회 연결을 깃발로 나타냈다. \'담당이 없을 때\' 갈래는 조건 블록(막히면 왼쪽)으로 나타낸다. 맡을 사람은 이름 대신 역할로 쓴다.',
      }),
      M({
        id: 'activity.pledge-writing', type: 'activity', title: '졸업 뒤에도 지킬 존중 서약',
        method: '존중 서약 글', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '세 문장 서약을 문장 틀을 보고 쓴다.', base: '다섯 문장 서약을 온라인 포함·조력 행동·도움 경로·공동체 제안 기준표로 점검한다.', challenge: '서약을 지켰는지 확인할 방법을 한 문장 더하고 기준 하나를 더 점검한다.' },
        activity: {
          title: '존중 서약 쓰기', tool: 'rubric-writing',
          teacher: '"대학·일터·동네, 졸업 뒤 어디에 가도 지킬 존중 서약을 써 봐요. \'착하게 살겠다\'보다 내일 할 수 있는 행동으로요." 기준표를 먼저 함께 읽는다. "남을 괴롭히지 않겠다"만 쓴 학생에게 "단톡방에서 누가 한 명을 빼는 걸 봤을 때는 무엇을 하겠다고 쓸 수 있을까요?"라고 묻는다. 도움 경로에는 그곳의 상담·신고 창구를 찾아 두겠다는 약속처럼 쓸 수 있다고 안내한다. 실제 사람 이름이나 연락처는 쓰지 않게 한다.',
          task: '졸업 뒤에도 지킬 존중 서약을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('존중 서약을 세 문장으로 쓰세요(온라인에서 지킬 것 하나 포함).', '졸업 뒤에도 지킬 나의 존중 서약을 세 문장으로 쓰세요.', ['행동으로 썼다', '온라인에서 지킬 것이 있다', '사람을 깎아내리는 말이 없다'], { min: 45, max: 300, sent: [3, 3], must: [['온라인', '단톡방', '댓글']], starter: '나는 ~하겠다. 온라인에서도 ~. 그리고 ~.', d: 0.3 }),
            RWQ('같은 서약을 다섯 문장으로 늘려 쓰세요(조력 행동·도움 경로·공동체 제안 포함).', '졸업 뒤 새 공동체에서 지킬 존중 서약을 다섯 문장으로 쓰세요.', ['온라인 공간이 들어 있다', '목격했을 때의 조력 행동이 있다', '도움을 청할 곳(상담·신고 창구)을 찾아 두겠다는 약속이 있다', '공동체에 제안할 규범이 하나 있다'], { min: 90, max: 450, sent: [5, 5], must: [['곁에', '알리', '기록']], starter: '나는 ~하겠다. 단톡방에서 ~. 누군가 괴롭힘을 당하는 것을 보면 ~. 새 공동체에 가면 ~를 찾아 두겠다. 그리고 ~를 제안하겠다.', plus: '서약을 지켰는지 확인할 방법을 썼다', d: 0.4,
              sample: '나는 어느 공동체에 가도 사람을 별명이나 외모로 부르지 않겠다. 단톡방에서 한 사람을 빼거나 놀리는 글이 올라오면 따라 웃지 않겠다. 누군가 괴롭힘을 당하는 것을 보면 곁에 서고 기록해 믿을 사람에게 알리겠다. 새 공동체에 가면 상담·신고 창구가 어디인지 먼저 찾아 두겠다. 그리고 신입을 환영하는 규칙을 함께 만들자고 제안하겠다.', more: { conclude: '서약은 다짐이 아니라 내일의 행동 목록이에요. 온라인과 오프라인, 목격했을 때와 도움이 필요할 때를 모두 담아요.' } }),
            DONEQ('모둠에서 서약 한 문장씩을 소리 내어 읽고, 서로의 서약에서 함께 지키고 싶은 문장 하나를 골라 주세요.', '모둠 서약 나누기', '모둠과 서약을 나누어 보았어요'),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 서약을 지켰는지 1년 뒤 확인할 방법 하나를 쓰세요.' }] },
      }),
      M({
        id: 'activity.norm-proposal', type: 'activity', title: '3년 설문으로 고르는 공동체 규범',
        method: '학교 공동체 규범 제안 자료', tool: 'chart', minutes: 17,
        levels: { easy: '지표 하나(목격 뒤 개입 비율)의 꺾은선을 값이 보이는 채로 읽는다.', base: '지표 둘(개입 비율·목격 비율)을 읽고 표 빈칸을 채운 뒤, 자료가 뒷받침하는 규범 제안을 고른다.', challenge: '값을 숨긴 그래프를 읽고, 제안 규범이 잘 지켜지는지 볼 평가 지표를 고른다.' },
        activity: {
          title: '설문 자료와 규범 제안', tool: 'chart',
          teacher: '"가상 학교 설문이에요. 우리 학년이 1학년일 때부터 3학년이 될 때까지, \'괴롭힘을 목격했다\'는 응답과 \'목격 뒤 무언가 행동했다\'는 응답이 어떻게 바뀌었는지 봐요." 그래프마다 "이 선이 오른쪽으로 올라간다는 것은 무슨 뜻일까요?"라고 묻는다. "목격이 줄었으니 이제 할 일이 없다"는 학생에게 "줄었지만 0은 아니에요. 개입이 계속 늘게 하려면 무엇을 남겨야 할까요?"라고 되묻는다. 자료는 가상이고 학생 개인의 응답을 묻지 않는다는 점을 밝힌다.',
          task: '가상 학교 3년 설문 그래프를 읽고, 후배에게 제안할 규범과 그 평가 지표를 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '\'목격 뒤 개입했다\' 비율(가상) 꺾은선에서 가장 높은 시기를 고르세요.', toolOptions: LINE(STEP, '목격 뒤 개입했다는 응답(가상 학교 설문)', '개입 비율', { question: '개입 비율이 가장 높은 때는?', choices: YEARS }), target: { pick: 2 }, difficulty: 0.2 },
            { prompt: '\'괴롭힘을 목격했다\' 비율(가상) 그래프를 읽고 표의 빈칸(2학년 때)을 채우세요.', toolOptions: Object.assign(LINE(SEEN, '괴롭힘을 목격했다는 응답(가상 학교 설문)', '목격 비율'), { showTable: true, tableBlanks: [1] }), target: { table: true }, difficulty: 0.25 },
            { prompt: '두 그래프(목격은 줄고 개입은 늘었다)가 가장 잘 뒷받침하는 규범 제안을 고르세요.', toolOptions: LINE(STEP, '목격 뒤 개입했다는 응답(가상 학교 설문)', '개입 비율', { question: '자료가 뒷받침하는 제안은?', choices: ['목격자 행동(곁에 서기·알리기)을 해마다 이어서 익힌다', '목격이 줄었으니 예방 교육을 그만둔다', '개입은 개인의 성격이라 규범으로 정할 수 없다'], why: ['', '줄었어도 아직 목격이 있어요. 그만두면 다시 늘 수 있어요.', '해마다 익힐수록 개입이 늘었다는 것이 자료의 흐름이에요.'] }), target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '\'목격자 행동을 해마다 익힌다\'는 규범이 잘 지켜지는지 볼 평가 지표를 고르세요.', toolOptions: LINE(STEP, '목격 뒤 개입했다는 응답(가상 학교 설문)', '개입 비율', { question: '알맞은 평가 지표는?', choices: ['해마다 같은 설문으로 본 목격 뒤 개입 비율', '헌장 게시물의 글자 수', '행사에 쓴 풍선 수'], why: ['', '글자 수는 행동이 바뀌었는지 보여 주지 않아요.', '행사 규모보다 행동의 변화를 재야 해요.'] }), target: { pick: 0 }, difficulty: 0.3,
              conclude: '자료로 고른 규범은 같은 자료로 다시 재요. 제안 → 실천 → 같은 지표로 점검, 이것이 후배에게 넘길 고리예요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '후배에게 제안할 규범 하나와, 그것을 해마다 확인할 지표 하나를 쓰세요.' }] },
        notes: '그래프 값은 수업용 가상 자료다. 학생에게 목격·피해 경험을 묻지 않는다.',
      }),

      M({
        id: 'wrap.legacy-poster', type: 'wrap', title: '후배에게 남기는 포스터',
        method: '후배에게 남기는 포스터', tool: 'collage', minutes: 7,
        levels: { easy: '문구 하나를 담은 조각 3개 이상으로 포스터를 꾸민다.', base: '문구와 행동 셋(곁에 서기·퍼 나르지 않기·알리기)을 조각으로 나타내고 신고·상담 번호 자리를 둔다.', challenge: '서명란 자리를 넣고, 활동지에 후배에게 건넬 한 문장을 쓴다.' },
        wrap: {
          teacher: '"후배 교실 앞에 붙일 포스터를 만들어 봐요. 문구 하나, 행동 셋, 그리고 신고·상담 번호 자리를 꼭 비워 둬요. 번호는 선생님이 학교에서 확인해 채울 거예요." 두세 작품을 보여 주고 "1학년이 이 포스터를 보고 내일 할 수 있는 것은 무엇일까요?"라고 묻는다. 번호 자리를 그냥 빼는 학생에게 "도움 경로가 없는 포스터는 무엇이 빠진 걸까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'rect', 'heart', 'star', 'leaf'] }, prompt: `후배에게 남길 평화 문화 포스터를 조각으로 꾸미세요. ${HELPNO} 자리를 긴 네모 조각으로 비워 두고 점검하세요.`, target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['문구를 넣을 자리를 정했다', '행동 셋을 나타냈다', '신고·상담 번호 자리를 비워 두었다'], minPieces: 3 }, difficulty: 0.2 },
            { type: 'choice', prompt: '평화 문화가 졸업 뒤에도 이어지게 하는 방법으로 가장 알맞은 것은?', options: ['헌장 문서를 게시판에 붙여 두기만 한다', '후배와 함께 해 보고 학생회·점검표 같은 장치에 넣는다', '졸업하면 후배들이 알아서 한다'], answer: 1, difficulty: 0.15, explain: '문화는 함께 해 본 사람과 이어지게 하는 장치가 있을 때 이어져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '후배에게 남기는 포스터',
          items: [
            { type: 'short', prompt: '포스터 문구를 쓰세요.' },
            { type: 'short', prompt: `포스터의 도움 경로 칸: ${HELPNO} 과 함께 적을 학교 안 도움(담임 선생님·상담 선생님·Wee 클래스 등)을 쓰세요.` },
          ],
        },
        notes: '신고·상담 번호는 교사가 학교에서 확인해 채운다(번호를 화면에 적지 않는다).',
      }),
      M({
        id: 'wrap.farewell-rhythm', type: 'wrap', title: '졸업 존중 구호 리듬',
        method: '졸업 존중 구호', tool: 'keyboard', minutes: 7,
        levels: { easy: '교사가 만든 한 줄 구호("서로 존중, 함께 졸업")의 리듬을 듣고 따라 놓는다.', base: '반 구호 두 줄을 정하고 두 마디 리듬 블록으로 박을 채워 쳐 본다.', challenge: '후배 반과 주고받을 수 있게 한 마디는 선배, 한 마디는 후배 몫으로 나누어 말로 정한다.' },
        wrap: {
          teacher: '"마지막은 반 전체의 존중 서약을 짧은 구호로 만들어 리듬으로 쳐 봐요. 예: \'서로 존중(쿵 쿵 쿵 쿵), 함께 졸업(쿵 쿵 쿵 쉼)\'." 리듬 블록으로 두 마디를 채운 뒤 다 같이 손뼉으로 친다. 구호가 남을 놀리는 말로 바뀌면 "이 구호를 1학년이 들었을 때 무엇을 배울까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], showBeats: true }, prompt: '반 존중 구호를 두 마디 리듬으로 지으세요. 마디마다 4박을 블록으로 채우세요.', target: { beats: true }, difficulty: 0.2 },
            { type: 'short', prompt: '우리 반 존중 구호 두 줄을 쓰세요(사람 이름은 넣지 않아요).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '졸업 존중 구호',
          items: [
            { type: 'short', prompt: '우리 반 존중 구호 두 줄을 쓰세요.' },
            { type: 'short', prompt: '후배 반이 이어 받을 답 구호 한 줄을 지어 쓰세요.' },
          ],
        },
        notes: '교구 한계: keyboard 는 리듬 블록만 놓는다. 구호 글은 출구 쓰기·활동지에서 쓰고, 교구는 구호의 박을 짓는다. 소리는 누를 때만 난다.',
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
