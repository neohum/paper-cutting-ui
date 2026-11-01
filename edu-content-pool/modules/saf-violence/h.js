/* 창체 안전교육 폭력예방 및 신변보호 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-violence 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 폭력예방 및 신변보호 일곱 항목
 *   (학교폭력의 유형과 현황 및 위험성 인식하기 / 학교 폭력 유형별 신고·대처방법 알기 / 성폭력 예방과 대처방법 알기 /
 *    성매매의 위험성과 구조 및 신고 방법 알기 / 자신과 타인(가족 포함)의 소중함 인식하기 / 가정폭력 예방 지침을 알고, 보호하기(아동학대 포함) /
 *    자살 에방 및 생명존중 교육(원문 표기)) + 7대 표준안 폭력·신변안전 분류(학교폭력·언어사이버·성폭력·성매매·아동학대·자살·가정폭력).
 * 고 기준: 법·제도와 자료 분석·토론(찬반 근거)·제안서·캠페인·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 이 영역의 원칙: 피해 경험을 묻지 않는다 · 장면은 자극적이거나 자세하지 않게 · 잘못은 늘 가해자에게 있고 말한 사람은 잘한 것이다(피해자 탓 문구 금지)
 *   · 도움 받을 곳은 체계도 concepts 의 것만(112·117·119·1388·담임·상담 선생님·Wee 클래스·보호자·학교 취업 지원 담당·노동 상담 창구)
 *   · 법 조문 번호·형량·구체 나이는 쓰지 않는다(근거 파일에 없다) · 자살예방은 방법을 묘사하지 않는다.
 * 수치 자료는 모두 '가상'이다(상대 크기만). 인물은 직접 지은 가명이다.
 * 주제 15개 × 8모듈 = 120모듈(체계도 계획 전부).
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 모듈 id 와 확인할 공식 안내처)
 *   law-data.intro.define·activity.border·wrap.summary: 학교폭력의 법적 정의 풀어 쓰기(학교 안팎·학생 대상·신체·정신·재산상 피해·따돌림·사이버폭력 포함) — 국가법령정보센터 「학교폭력예방 및 대책에 관한 법률」 정의 조항
 *   law-data.activity.border: 게임 아이템 되풀이 요구 = 재산상 피해·강요, 사진 조롱 글 유포 = 명예훼손 등 경계 사례 판단 근거 — 교육부 학교폭력 사안처리 가이드북
 *   law-data.activity.border·activity.trace: 졸업생 등 학생이 아닌 사람이 가해해도 피해 학생이 재학생이면 학교가 도울 수 있다는 판단 — 교육부 학교폭력 사안처리 가이드북
 *   law-data.activity.trace: 교사가 알게 된 일을 학교폭력 사안으로 접수하고 보호자에게 알린다는 처리 흐름 — 교육부 학교폭력 사안처리 가이드북
 *   law-data.activity.trace: 협박 메시지를 지우지 않고 남겨 선생님과 112에 알리기 — 경찰청 사이버범죄 신고 안내
 *   law-data.activity.report·intro.trend: '보고도 참았다' 응답 감소·신고 증가는 가상 자료이며, 실태조사 해석 시 조사 대상·시점·응답 방식을 함께 본다는 원칙 — 교육부 학교폭력 실태조사 발표 자료
 *   committee.intro.flow·wrap.system: 신고 → 사안 조사 → 심의 → 조치 → 이행 확인의 일반 흐름(학교장 자체 해결 경로는 뺌) — 교육부 학교폭력 사안처리 가이드북
 *   committee.intro.agencies·wrap.system: 학교폭력대책심의위원회가 교육지원청에 놓인다는 점 — 국가법령정보센터 「학교폭력예방 및 대책에 관한 법률」
 *   committee.activity.measures: 피해 학생 보호조치 예(심리 상담·일시 보호·치료 지원)와 가해 학생 조치 예(특별 교육·봉사·접촉·보복 금지·학급 교체·사과)를 호수 없이 쓴 것 — 국가법령정보센터 같은 법률 / 교육부 가이드북
 *   committee.activity.measures·activity.after: 관계 회복 프로그램은 양쪽(특히 피해 학생)이 원할 때 한다는 원칙 — 교육부 학교폭력 사안처리 가이드북(관계회복)
 *   committee.activity.after·wrap.check: 신고자 보호·신고자 찾기와 소문이 2차 피해·보복이 된다는 설명 — 교육부 학교폭력 사안처리 가이드북
 *   committee.activity.after: 접촉 금지 조치를 어긴 접근은 학교에 알려 다시 다룬다는 설명 — 교육부 학교폭력 사안처리 가이드북
 *   committee.wrap.system: 117로 학교폭력 신고·상담, 위험하면 112 — 경찰청 117 학교폭력 신고센터 안내
 *   deepfake.activity.acts·activity.choice·wrap.rules: 동의 없는 성적 합성물의 제작·유포(전달 포함)는 디지털 성범죄라는 설명 — 국가법령정보센터 「성폭력범죄의 처벌 등에 관한 특례법」(허위영상물 조항)
 *   deepfake.activity.acts: 받은 성적 합성물을 저장해 두는 것도 범죄가 될 수 있다는 카드('범죄가 될 수 있는 행위' 칸) — 국가법령정보센터 같은 특례법(소지·저장·시청 처벌 여부)
 *   deepfake.activity.choice·wrap.rules: 받은 것을 학생이 '증거'로 직접 저장·수집하지 말고 증거는 학교·경찰이 다룬다는 안내 — 경찰청 디지털 성범죄 신고 안내
 *   deepfake.activity.support·activity.cardnews: 삭제 지원(퍼진 이미지 삭제 요청·재유포 감시)이 있다는 설명(기관 이름 없이) — 여성가족부 디지털 성범죄 피해자 지원 안내
 *   deepfake.activity.support: 112 수사 요청, 117 학교폭력 신고, 1388 상담으로 지원 갈래를 나눈 것 — 경찰청·117 학교폭력 신고센터·청소년상담 1388 안내
 *   deepfake.activity.choice(FUNNY): 동의 없이 반 친구 얼굴로 만든 웃긴 합성 영상도 놀림·사이버폭력이 될 수 있다는 판단 — 교육부 학교폭력 사안처리 가이드북(사이버폭력)
 *   worth.activity.signals·people·wrap.words: 건강한 관계·해로운 관계의 신호(통제·고립·경계 존중) 일반 설명 — 여성가족부·한국양성평등교육진흥원 관계 교육 자료
 *   worth.activity.time: 쉼·잠을 지키는 것이 관계를 오래 지키는 힘이라는 일반 권고(잠 7시간은 가상 인물 시간표 값) — 질병관리청 국가건강정보포털 청소년 수면 안내
 *   gatekeeper 전체: 게이트키퍼 단계(살피기·묻고 듣기·함께 어른에게 가기·곁에 있기)와 위기 신호의 말·행동·감정 변화 예시 — 보건복지부·한국생명존중희망재단 생명지킴이(보고듣고말하기) 교육 안내
 *   gatekeeper.activity.signals: '바로 어른에게 알릴 신호'(사라지고 싶다는 말·물건 나눠 주며 작별처럼 말하기·다 끝내고 싶다는 글)와 '지켜볼 변화' 구분 — 같은 곳
 *   gatekeeper.activity.secret·wrap.words: 생명과 관련된 비밀은 지킬 약속의 예외이며 어른에게 잇는다, 피해야 할 말(훈계·깎아내리기) — 같은 곳 + 교육부 학생 자살예방 안내
 *   gatekeeper.intro.paths·wrap.self: 도움 경로 구분(위급 112·119, 상담 1388·상담 선생님·Wee 클래스) — 교육부 Wee 프로젝트·청소년상담 1388 안내
 *   cyber-defame.intro.names: 새 사이버폭력 이름(강제 초대·떼 지어 공격·기프티콘 갈취·사칭 계정·몰래 캡처 유포)과 설명 — 교육부 사이버폭력 예방 자료·경찰청 사이버범죄 안내
 *   cyber-defame.activity.posts·expose: 명예훼손(공개성·사실 적시·비방 목적)과 모욕(구체 사실 없이 깎아내림)의 구별, '사실이어도 문제될 수 있다' — 국가법령정보센터 형법·정보통신망법(조문 번호·형량은 쓰지 않음)
 *   cyber-defame.activity.expose·wrap.trace·wrap.check: 익명이어도 쓴 글의 책임은 사라지지 않음, 퍼 나른 사람도 책임에서 벗어나기 어려움 — 경찰청 사이버범죄 안내·방송통신위원회
 *   cyber-defame.wrap.check 활동지: 사이버폭력 도움 경로로 117·112·담임 선생님 — 교육부 117 학교폭력 신고센터 안내
 *   dating-violence.activity.location: 반복 연락·기다림(스토킹 의심)은 112에 상담·신고할 수 있고 경찰이 조치를 안내한다는 흐름 — 경찰청 스토킹·데이트폭력 신고 안내 / 국가법령정보센터 스토킹범죄의 처벌 등에 관한 법률
 *   dating-violence.activity.location: 받은 메시지를 지우지 않고 남겨 두면 도움을 청할 때 근거가 된다 — 경찰청 사이버·스토킹 피해 대응 안내
 *   dating-violence.activity.guide: 이별을 말할 때의 안전 수칙(공개된 곳에서·믿을 사람에게 미리 알리기) — 경찰청·여성가족부 데이트폭력 예방 안내
 *   dating-violence.activity.guide: 도움 경로 112·1388·학교 상담 선생님 — 체계도 concepts(도움: 112·1388·학교 상담)와 학교 상담실 운영 안내 대조
 *   dating-violence.wrap.terms: ‘동의는 언제든 거절하거나 바꿀 수 있다’ 뜻풀이 — 교육부 성교육 표준안·여성가족부 성평등 교육 자료
 *   grooming.intro.stages: 그루밍 다섯 단계(친절·칭찬 → 고민 들어 주기 → 비밀 요구 → 관계 끊게 하기 → 대가 요구) 구분 — 여성가족부·경찰청 온라인 그루밍 예방 안내 / 국가법령정보센터 아동·청소년의 성보호에 관한 법률
 *   grooming.intro.offer, activity.rescue: 대가를 내건 만남 요구(성매매 제안)를 받은 청소년은 처벌 대상이 아니라 보호받아야 할 대상이다 — 국가법령정보센터 아동·청소년의 성보호에 관한 법률(피해아동·청소년 규정)
 *   grooming.activity.choice: 사진을 보냈어도 잘못은 요구한 사람에게 있고 도움을 받을 수 있다 — 여성가족부 디지털 성범죄 피해 지원 안내 / 경찰청
 *   grooming.activity.rescue: 117을 ‘학교폭력 등 피해 신고·상담’으로 소개 — 117 학교폭력 신고센터(교육부·경찰청) 안내
 *   grooming.activity.rescue: 신고 → 보호 → 상담 → 회복 지원으로 이어지는 구조·보호 체계 단계와 ‘신고하면서 연락을 막는 방법도 묻는다’ — 여성가족부 성매매 피해 청소년 지원 안내 / 경찰청
 *   grooming.activity.talk: 대화 기록을 지우지 않고 남겨 두기 / 상담 선생님의 비밀 보장과 안전이 걸린 경우의 예외 — 경찰청 사이버 피해 대응 안내 / 학교 상담실(Wee 클래스) 운영 안내
 *   grooming.wrap.privacy: 비공개 계정·메시지 제한·위치 정보 끄기 등 계정 안전 설정 권고 — 방송통신위원회·한국지능정보사회진흥원 청소년 SNS 안전 안내
 *   grooming.activity.route: 체계도 brief 의 ‘청소년상담복지센터’를 ‘1388 청소년 상담’으로 바꾸어 씀 — 1388 운영 기관 표기 확인(여성가족부·한국청소년상담복지개발원)
 *   family-protect.activity.types: 가정폭력·아동학대 유형(신체·정서·방임)과 ‘가족 사이 폭력을 늘 보게 하는 것도 정서적 학대’ — 국가법령정보센터 아동복지법(아동학대 정의) / 보건복지부 아동학대 신고 안내
 *   family-protect.activity.types: 존중하는 훈육과 학대의 경계, ‘어떤 이유로도 폭력은 정당화되지 않는다’(체벌 금지) — 국가법령정보센터 민법(징계권 삭제)·아동복지법 / 보건복지부 긍정 양육 안내
 *   family-protect.activity.procedure: 보호 절차 단계(신고 → 현장 확인 → 분리·보호 → 상담·지원 → 사후 관리)와 각 목적 — 보건복지부 아동학대 대응 절차 안내 / 국가법령정보센터 아동학대범죄의 처벌 등에 관한 특례법·가정폭력방지법
 *   family-protect.activity.procedure, wrap.terms: 신고한 사람의 정보는 보호받는다 / 교사 등 신고 의무자가 있다 — 국가법령정보센터 아동학대범죄의 처벌 등에 관한 특례법(신고의무·신고인 보호)
 *   family-protect.activity.procedure: 상담·지원·사후 관리 단계에서 학생 본인의 의견을 묻는다 — 보건복지부 아동학대 사례관리 안내
 *   family-protect.activity.network: 지금 위험하면 112, 다쳤으면 119, 털어놓을 곳은 상담 선생님·Wee 클래스·1388로 나눈 연결 경로 — 체계도 concepts(아동학대·가정폭력 도움 경로 112·1388·담임·상담 선생님) / 경찰청 가정폭력 신고 안내
 *   family-protect.activity.network: 체계도 brief 의 ‘아동보호 기관·청소년상담복지센터’를 도움 경로 범위(112·119·1388·학교 상담)로 바꾸어 씀 — 지역 아동보호전문기관 안내 필요 여부를 사람이 결정
 *   family-protect.wrap.check: 주변인은 확실하지 않아도 의심되면 알리고, 확인은 전문가가 한다 — 보건복지부 아동학대 신고 안내
 *   upstander.intro.feel·activity.methods: 주변인 개입 다섯 방법(멈추기·주의 돌리기·알리기·기록하기·곁에 서기)과 '내 안전 먼저' 원칙 — 교육부 학교폭력 예방교육 자료(어울림 프로그램)·교육부 학교폭력 사안처리 가이드북
 *   upstander.activity.methods·wrap.self: 117이 학교폭력 상담·신고 전화라는 안내 — 교육부·경찰청 117 학교폭력 신고센터 안내
 *   upstander.activity.trace: 담임 선생님께 알리면 알린 학생이 드러나지 않게 살핀다(신고자 보호) — 교육부 학교폭력 사안처리 가이드북
 *   upstander.activity.plan: '알린 사람이 드러나지 않게 도움을 청할 길이 있다'(익명·비밀 보장 신고 가능) — 경찰청 117 신고센터·교육부 학교폭력 사안처리 가이드북
 *   upstander.activity.methods·wrap.self: 위협·몸싸움처럼 내 안전이 흔들리면 직접 막기보다 자리를 벗어나 어른·112에 알린다 — 경찰청 학교폭력 대응 안내
 *   upstander.activity.trace: 조롱 글은 퍼뜨리지 말고 캡처해 기록으로 남긴다(증거 보존) — 교육부 사이버폭력 예방 자료·경찰청 사이버범죄 신고 안내
 *   upstander.intro.why·activity.plan·activity.proposal: '돕지 못한 이유' 설문 수치는 수업용 가상 값(실제 통계 아님 — 화면 제목에 밝힘) — 확인 불필요, 실제 수치로 바꾸려면 교육부 학교폭력 실태조사
 *   adult-duty.intro.words·wrap.self: '조치 = 학교가 학교폭력 사안을 심의해 정하는 보호·선도 결정', '처벌 = 국가가 법으로 묻는 책임', '손해 배상 = 손해를 갚게 하는 책임' 뜻풀이 — 국가법령정보센터 학교폭력예방 및 대책에 관한 법률·민법·형법
 *   adult-duty.activity.kinds: 학교 안 조치를 정하는 곳이 학교폭력대책심의위원회, 사회에서의 책임을 묻는 곳이 수사기관과 법원 — 국가법령정보센터 학교폭력예방 및 대책에 관한 법률·교육부 학교폭력 사안처리 가이드북
 *   adult-duty.activity.kinds·wrap.self: 학생 신분이어도 사회(형사·민사)에서 책임을 물을 수 있고 성인이 되면 책임이 더 커진다(구체 나이·형량 없이) — 국가법령정보센터 형법·소년법·민법
 *   adult-duty.activity.kinds·wrap.promise: 학교 안 조치와 별개로 사회에서의 책임·관계의 책임은 졸업 뒤에도 남을 수 있다 — 교육부 학교폭력 사안처리 가이드북
 *   adult-duty.intro.quiz: 단톡방 욕설·사진 무단 게시·술 강요·금품 심부름 강요에 책임이 따를 수 있다 — 국가법령정보센터 형법(모욕·강요 등)·정보통신망법·개인정보 보호 관련 안내
 *   adult-duty.activity.career: 일터 징계로 계약이 끝날 수 있다·온라인 글은 오래 남아 다시 찾아질 수 있다 — 고용노동부 근로관계 안내·방송통신위원회 디지털 시민성 자료
 *   adult-duty.activity.graduation: 퍼진 게시물 삭제 요청과 회복적 대화(사과·규칙 고치기)의 효과 — 교육부 관계회복 프로그램 안내
 *   workplace.activity.sort: 직장 내 괴롭힘을 '지위·관계의 우위를 이용해 업무 범위를 넘어 고통을 주거나 근무 환경을 나쁘게 하는 행위'로, 판단 근거를 '상대 느낌·힘의 차이·반복'으로 일반화한 설명 — 고용노동부 직장 내 괴롭힘 판단 및 예방·대응 매뉴얼·국가법령정보센터 근로기준법
 *   workplace.activity.sort·activity.joke: 성희롱을 '성적인 말이나 행동으로 성적 굴욕감·혐오감을 느끼게 하는 것'으로, 농담이라는 의도와 상관없이 문제가 될 수 있다는 설명 — 고용노동부 직장 내 성희롱 예방·대응 안내·국가법령정보센터 남녀고용평등과 일·가정 양립 지원에 관한 법률·양성평등기본법
 *   workplace.activity.joke: 손님이 일하는 사람에게 하는 성희롱·신체 접촉도 문제가 되고 사업장에 조치를 요청할 수 있다 — 고용노동부 고객 등에 의한 성희롱 안내
 *   workplace.intro.before·wrap.self: 근로계약서를 쓰고 한 부 받기, 일하는 시간·쉬는 시간·시급 확인 — 고용노동부 청소년 근로권익 안내
 *   workplace.activity.phrases·activity.record: 날짜·시각·장소·들은 말·목격자·자료(캡처)를 기록해 두면 도움을 받을 때 근거가 된다 — 고용노동부 직장 내 괴롭힘·성희롱 대응 안내
 *   workplace.wrap.help·activity.record: '학교 취업 지원 담당'과 '노동 상담 창구'가 현장실습·아르바이트 고민과 일터 괴롭힘·임금 문제를 상의하는 곳이라는 역할 설명(기관 이름·번호는 쓰지 않음) — 교육부 직업계고 현장실습 안내·고용노동부 노동 상담 안내
 *   protect-policy.intro.actors·wrap.terms·wrap.check: 아동이 위험해 보이면 112·1388 에 알릴 수 있다(아동학대 도움 경로) — 보건복지부 아동학대 신고 안내·경찰청
 *   protect-policy.activity.stages: 보호 체계를 발견·신고·보호·회복 네 단계로 보는 틀과 단계별 대안 예시(주민 교육·안내문·상담 인력·학교 연계) — 보건복지부 아동보호 체계 안내
 *   protect-policy.activity.parenting: 존중하는 훈육(감정 인정·한계 설정·대안 제시) 틀, '때리는 것은 훈육이 아니다' — 보건복지부·육아정책연구소 긍정 양육 안내, 국가법령정보센터 민법(징계권 조항 삭제 여부)
 *   protect-policy.wrap.check: 확인은 전문가가 하고 시민은 의심되면 알리면 된다 — 보건복지부 아동학대 신고 안내
 *   life-net.intro.protect·activity.factors: 보호 요인(관계·소속감·도움 접근성·희망)의 뜻과 학교 안 강화 방법 예시 — 보건복지부·한국생명존중희망재단 생명지킴이(게이트키퍼) 교육 안내
 *   life-net.intro.barrier: '도움 청하기 어려운 이유' 항목(부담·소문·어디에 청할지 모름·별일 아니라 여김)은 가상 설문 항목 — 실제 학교 조사 문항은 교육청·학교 상담 자료로 확인
 *   life-net.activity.safe·activity.council·wrap.self: 안전한 소통 원칙(방법·자세한 내용 말하지 않기·원인 단정하지 않기·극적으로 꾸미지 않기·희망과 도움 경로 함께 알리기·퍼 나르지 않기) — 보건복지부·한국기자협회 자살보도 권고기준, 한국생명존중희망재단 안내
 *   life-net.wrap.self: 생명과 관련된 비밀은 지키지 않아도 되는 예외이며 믿을 어른에게 잇는다 — 보건복지부·한국생명존중희망재단 생명지킴이 안내, 학교 상담(Wee 클래스) 안내
 *   life-net.wrap.network: 위급할 때는 112·119 — 경찰청·소방청 신고 안내
 *   respect-life.intro.month: '하루 잠 7시간'은 연습용 예시(의학 기준 아님)로 화면·교사 메모에 밝힘 — 질병관리청 수면 건강 안내
 *   respect-life.activity.support·wrap.check·wrap.network(14): 졸업 뒤에도 위급하면 112·119, 상담 1388 이용 범위(나이 등) — 여성가족부·한국청소년상담복지개발원 1388 안내, 경찰청·소방청
 *   respect-life.activity.conflict: 기숙사 생활 담당·팀장에게 업무·생활 갈등 상의를 권하는 대처 — 학교 진로·취업 지원 담당 안내(일반 생활 조언)
 *   respect-life.activity.family: 가족과의 관계가 위험할 때는 상담 선생님·1388·112에 도움을 청한다(교사 메모) — 보건복지부 아동학대·가정폭력 도움 안내
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-violence', band: '고', topic: `saf-violence.h.${topic}`, grades }, o, { id: `saf-violence.h.${topic}.${o.id}` });
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
  // 1. 법과 자료로 읽는 학교폭력 (10학년)
  // ======================================================================================================
  {
    const M = MOD('law-data', [10]);
    // 갈림 2번(쉬움)·3번(기본)·3번 + 첫 판단을 바꾼 길까지(도전)
    const DIL23 = (prompt, scene, paths, reasons, good, { d = 0.4, more = {} } = {}) => {
      const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
      return Object.assign({ prompt, toolOptions: { scene, reasons }, target: at(3), difficulty: d,
        levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
          challenge: { prompt: pfx(prompt, '첫 판단을 바꾼 길도 끝까지'), target: Object.assign(at(3), { explore: 2 }) } } }, more);
    };
    const REPORT = [['1년 전', 40], ['2년 전', 55], ['지난해', 70], ['올해', 90]];
    const REPORT_T = '우리 지역 학교폭력 신고 건수(가상)';
    const CHAT = { text: '같은 반 몇 명이 하준이만 뺀 단톡방을 만들어 하준이를 놀리는 글을 계속 올린다. 그 방에 초대된 너는 이 사실을 알게 됐다.', who: '같은 반 학생', motif: 'house', choices: [
      { id: 'tell', text: '담임 선생님께 본 내용을 알린다', result: '선생님이 고맙다며 하준이의 안전부터 살피겠다고 한다.', impact: [{ who: '하준', text: '혼자 견디지 않게 된다', tone: 1 }, { who: '알린 학생', text: '잘한 일이라는 말을 듣는다', tone: 1 }],
        next: { text: '담임 선생님(교사 입장)이 내용을 확인했다. 놀린 학생들은 "그냥 장난"이라고 한다.', who: '담임 선생님', choices: [
          { id: 'process', text: '학교폭력 사안으로 접수하고 양쪽 보호자에게 알린다', result: '학교가 사실을 조사하고 하준이를 보호할 방법을 정하기 시작한다.', impact: [{ who: '하준', text: '보호받는 절차가 시작된다', tone: 1 }],
            next: { text: '하준이의 보호자(보호자 입장)가 학교의 연락을 받았다.', who: '보호자', choices: [
              { id: 'listen', text: '하준이의 말을 먼저 듣고 학교와 보호 방안을 상의한다', result: '하준이가 그동안의 일을 털어놓고 상담 선생님과도 만난다.', impact: [{ who: '하준', text: '믿고 기댈 곳이 생긴다', tone: 1 }], ending: '말한 학생, 접수한 교사, 들어 준 보호자가 이어질 때 보호가 시작된다.' },
              { id: 'blame', text: '"네가 뭘 했길래 그러니"라며 하준이를 다그친다', result: '하준이가 입을 닫고 더는 말하지 않는다.', impact: [{ who: '하준', text: '자기 탓이라고 느낀다', tone: -1 }], ending: '잘못은 놀린 쪽에 있다. 피해 학생을 다그치면 도움의 길이 닫힌다.' }] } },
          { id: 'cover', text: '"애들끼리 화해하면 된다"며 사과만 시키고 덮는다', result: '겉으로는 조용해졌지만 다른 방이 새로 생긴다.', impact: [{ who: '하준', text: '괴롭힘이 이어진다', tone: -1 }],
            next: { text: '하준이의 보호자가 새 단톡방 일을 알고 학교에 다시 연락했다.', who: '보호자', choices: [
              { id: 'formal', text: '학교에 정식으로 신고하고 보호를 요청한다', result: '늦었지만 사안 조사가 시작된다.', impact: [{ who: '하준', text: '뒤늦게 보호받는다', tone: 0 }], ending: '덮어 둔 시간만큼 피해가 길어졌다.' },
              { id: 'wait', text: '일이 커질까 봐 조금 더 지켜본다', result: '하준이는 학교에 가기 싫다고 한다.', impact: [{ who: '하준', text: '혼자 버틴다', tone: -1 }], ending: '기다리는 동안에도 피해는 쌓인다.' }] } }] } },
      { id: 'ignore', text: '장난 같으니 그냥 모른 척한다', result: '놀리는 글이 점점 심해진다.', impact: [{ who: '하준', text: '피해가 커진다', tone: -1 }],
        next: { text: '일주일 뒤, 그 방에 하준이 사진에 조롱 글을 붙인 게시물이 올라왔다.', choices: [
          { id: 'late', text: '지금이라도 담임 선생님께 알린다', result: '선생님이 사진을 내리게 하고 사안을 접수한다.', impact: [{ who: '하준', text: '보호가 시작된다', tone: 1 }],
            next: { text: '친구들이 "누가 일렀냐"며 수군거린다.', choices: [
              { id: 'keep', text: '알린 것은 옳았다고 생각하고 선생님께 수군거림도 알린다', result: '선생님이 알린 학생이 드러나지 않게 살피겠다고 한다.', impact: [{ who: '알린 학생', text: '보호받는다', tone: 1 }], ending: '알리는 것은 고자질이 아니라 친구를 지키는 일이다.' },
              { id: 'regret', text: '괜히 말했다며 방에 사과 글을 쓴다', result: '놀린 학생들이 다시 기세를 올린다.', impact: [{ who: '하준', text: '다시 혼자가 된다', tone: -1 }], ending: '말한 사람은 사과할 일을 하지 않았다.' }] } },
          { id: 'leave', text: '방에서 조용히 나가기만 한다', result: '나는 빠졌지만 방은 그대로다.', impact: [{ who: '하준', text: '피해가 이어진다', tone: -1 }], ending: '나가는 것만으로는 친구를 지키지 못한다.' }] } }] };
    const CHAT_R = [{ id: 'def', text: '사이버 공간의 따돌림·놀림도 학교폭력의 정의에 들어간다' }, { id: 'protect', text: '피해 학생의 안전과 보호가 가장 먼저다' }, { id: 'tellok', text: '알린 사람은 잘한 것이고 보호받아야 한다' }, { id: 'joke', text: '장난이라고 하면 폭력이 아니다', why: '하는 쪽의 의도가 아니라 받는 쪽의 피해로 판단해요.' }, { id: 'victim', text: '놀림받는 쪽에도 까닭이 있다', why: '잘못은 늘 괴롭힌 쪽에 있어요. 피해 학생을 탓하지 않아요.' }];
    const ITEM = { text: '졸업한 선배가 게임 단체방에서 1학년 서연이에게 아이템을 넘기라고 며칠째 요구한다.', who: '같은 게임 방 학생', motif: 'star', choices: [
      { id: 'adult', text: '서연이와 함께 담임·상담 선생님께 알린다', result: '선생님이 "졸업생이어도 재학생이 피해를 입었으면 학교가 도울 수 있다"고 한다.', impact: [{ who: '서연', text: '혼자 감당하지 않게 된다', tone: 1 }],
        next: { text: '선배가 "말하면 가만 안 둔다"는 메시지를 보냈다.', choices: [
          { id: 'save', text: '메시지를 지우지 않고 남겨 선생님과 112에 알린다', result: '협박 메시지가 기록으로 남아 보호 요청에 쓰인다.', impact: [{ who: '서연', text: '보호받는다', tone: 1 }], ending: '기록을 남기고 알리면 협박이 힘을 잃는다.' },
          { id: 'give', text: '겁이 나서 아이템을 넘긴다', result: '선배가 다음 요구를 또 보낸다.', impact: [{ who: '서연', text: '요구가 커진다', tone: -1 }], ending: '요구를 들어주면 멈추지 않는다. 잘못은 요구한 쪽에 있다.' }] } },
      { id: 'game', text: '게임 안의 일이니 학교와 상관없다고 넘긴다', result: '서연이가 게임도 학교도 무서워한다.', impact: [{ who: '서연', text: '피해가 이어진다', tone: -1 }], ending: '장소가 게임 속이어도 학생이 입은 피해는 가볍지 않다.' }] };
    const ITEM_R = [{ id: 'harm', text: '재산상 피해와 강요가 있다' }, { id: 'record', text: '협박은 기록으로 남겨 알린다' }, { id: 'out', text: '학교 밖·게임 속 일은 학교폭력이 아니다', why: '학교 안팎에서 학생이 입은 피해라면 학교폭력으로 다룰 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.define', type: 'intro', title: '법이 정한 학교폭력 핵심어',
        method: '법적 정의 핵심어 짚기', tool: 'wordcards', minutes: 6,
        levels: { easy: '정의 문장에서 핵심어 3개(학생 대상·학교 안팎·피해)만 함께 고른다.', base: '핵심어 5개를 고르고, 함정 카드(학교 안에서만·때린 경우만)를 걸러 낸다.', challenge: '핵심어 하나를 지우면 \'게임 속 협박\'·\'단톡방 따돌림\' 판단이 어떻게 달라지는지 말한다.' },
        intro: {
          teacher: '"「학교폭력예방 및 대책에 관한 법률」은 학교폭력을 어떻게 정할까요? 학교 안에서 때리는 것만일까요?" 정의를 풀어 쓴 문장을 함께 읽고, 시연 단추로 범위를 정하는 핵심어 카드가 바구니에 담기는 모습을 보여 준다. "학교 밖에서 생긴 일은 학교폭력이 아니잖아요"라는 말이 나오면 "정의에 \'학교 안팎\'이라는 말이 있다면 학원 앞이나 단톡방은 어떻게 될까요?"라고 되묻는다. 오늘은 이 핵심어로 애매한 사례를 판단해 본다고 밝힌다.',
          student: '법이 정한 학교폭력 설명 문장을 읽고, 무엇이 학교폭력인지 범위를 정하는 핵심어 카드를 골라 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '정의의 핵심어', cards: ['학교 안팎에서', '학생을 대상으로', '신체·정신·재산상 피해', '따돌림', '사이버폭력', '학교 안에서만', '때린 경우만'] }, sequence: [{ pick: ['학교 안팎에서', '학생을 대상으로', '신체·정신·재산상 피해', '따돌림', '사이버폭력'] }] },
          art: { draw: 'a paper law book opened on a desk with five keyword cards lifting out of the page, a magnifying glass over the words, a school building and a phone chat bubble in the background', banner: '법은 어디까지 학교폭력이라 할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '법 조문 번호는 쓰지 않고 정의를 풀어 쓴다. 정의 원문은 국가법령정보센터에서 교사가 미리 확인해 화면에 띄워도 좋다.',
      }),
      M({
        id: 'intro.trend', type: 'intro', title: '신고 건수 그래프의 함정',
        method: '가상 실태조사 꺾은선에서 함정 찾기', tool: 'chart', minutes: 6,
        levels: { easy: '까닭 보기 2개(신고 방법을 알게 됨·폭력이 늘었다고 단정) 가운데 함께 고른다.', base: '보기 4개 가운데 \'신고 건수 증가 = 폭력 증가\'로 단정할 수 없는 까닭을 고른다.', challenge: '판단에 더 필요한 자료(같은 기간의 설문 응답 등)를 하나 말한다.' },
        intro: {
          teacher: '"가상 그래프예요. 4년 동안 신고 건수가 40건에서 90건으로 늘었어요. 학교폭력이 두 배 넘게 늘었다고 말해도 될까요?" 시연 단추로 \'신고 방법을 더 많은 학생이 알게 되었다\'는 보기가 골라지는 모습을 보여 준다. "숫자가 늘었으니 당연히 폭력도 늘었죠"라는 말이 나오면 "참고 넘기던 일을 이제는 신고하게 되었다면 그래프는 어떻게 움직일까요?"라고 되묻는다. 신고 건수는 \'일어난 일\'이 아니라 \'신고된 일\'의 수라는 점을 짚는다.',
          student: '가상 꺾은선그래프를 보고, 신고 건수가 늘어난 것을 곧바로 폭력이 늘어난 것으로 볼 수 없는 까닭을 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: REPORT_T, unit: '건', xLabel: '연도', yLabel: '신고 건수', data: REPORT, question: '폭력 증가 말고 다른 해석은?', choices: ['신고 방법을 아는 학생이 늘었다', '폭력이 반드시 두 배로 늘었다', '그래프는 해석할 필요가 없다', '신고한 학생이 잘못했다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper line graph rising step by step on a classroom board, a paper student holding a question mark card beside it, small envelope icons for reports climbing the line', banner: '늘어난 것은 폭력일까, 신고일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 수업용 가상 값이다. 실제 실태조사 결과를 쓸 때는 조사 대상·시점·응답 방식을 함께 보여 준다.',
      }),

      M({
        id: 'activity.border', type: 'activity', title: '경계 사례 판단과 근거',
        method: '경계 사례를 판단하고 근거 붙이기', tool: 'story', minutes: 18,
        levels: { easy: '사례 카드 4장을 \'해당\'·\'쟁점 있음\'으로 나누고, 근거 2쌍을 짝짓는다.', base: '사례 카드 7장을 나누고, 해당 사례에 근거를, 쟁점 사례에 판단에 더 필요한 사실을 짝짓는다.', challenge: '사례 9장을 나누고, 쟁점 사례마다 \'해당한다\' 쪽 반대 근거를 짝짓는다.' },
        activity: {
          title: '경계 사례 두 칸 나누기', tool: 'story',
          teacher: '"오늘 사례는 모두 가상이에요. \'해당\'은 정의의 핵심어로 바로 판단되는 사례, \'쟁점 있음\'은 사실을 더 알아야 판단할 수 있는 사례예요." 카드를 놓을 때마다 "정의의 어느 핵심어가 근거인가요?"라고 묻는다. \'게임 아이템을 넘기라고 되풀이해 요구함\'을 쟁점 칸에 두는 학생에게 "게임 속 물건도 재산일까요? 되풀이된 요구는 강요가 아닐까요?"라고 되묻는다. \'쟁점 있음\'은 \'폭력이 아니다\'가 아니라 \'더 확인해야 한다\'는 뜻이라는 점을 짚는다.',
          task: '경계 사례를 해당·쟁점 있음으로 나누고 판단 근거를 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 사례 카드를 \'해당\'과 \'쟁점 있음\' 칸에 나누세요.', ['해당', '쟁점 있음'], [
              ['단톡방에 억지로 초대해 놀림 글을 계속 올림', '게임 아이템을 넘기라고 되풀이해 요구함', '쉬는 시간마다 한 친구만 빼고 다님', '친구 사진에 조롱 글을 붙여 퍼뜨림'],
              ['졸업생 선배가 재학생과 다툼', '서로 한 번 말다툼하며 욕을 주고받음', '친한 사이끼리 장난이라며 별명을 부름'],
            ], { k: 2, hard: [['학원 앞에서 다른 학교 학생의 돈을 빼앗음'], ['단톡방 공지에 한 명만 답을 못 받음']], d: 0.3 }),
            MATCHQ('\'해당\' 사례마다 정의의 근거를 짝지으세요.', [['단톡방에 억지로 초대해 놀림 글을 계속 올림', '사이버폭력·따돌림이 정의에 들어간다'], ['게임 아이템을 넘기라고 되풀이해 요구함', '재산상 피해와 강요가 있다'], ['친구 사진에 조롱 글을 붙여 퍼뜨림', '정신적 피해와 명예훼손이 있다']], { k: 2, extra: ['장난이라고 말했으니 괜찮다'], d: 0.3, more: { hints: ['정의의 핵심어(학생 대상·학교 안팎·신체·정신·재산상 피해)에서 근거를 찾아요.'] } }),
            (() => {
              const q = MATCHQ('\'쟁점 있음\' 사례마다 판단에 더 필요한 사실을 짝지으세요.', [['졸업생 선배가 재학생과 다툼', '재학생이 어떤 피해를 입었는지'], ['서로 한 번 말다툼하며 욕을 주고받음', '한쪽이 되풀이해 힘으로 눌렀는지'], ['친한 사이끼리 장난이라며 별명을 부름', '듣는 친구가 싫다고 했는데도 이어졌는지']], { k: 2, d: 0.35, more: { conclude: '쟁점 사례는 핵심어에 비추어 빠진 사실을 확인하면 판단할 수 있어요. 판단의 기준은 하는 쪽의 의도가 아니라 받는 쪽의 피해예요.' } });
              q.levels.challenge = { prompt: '\'쟁점 있음\' 사례마다 \'학교폭력에 해당한다\' 쪽의 반대 근거를 짝지으세요.', toolOptions: { slots: ['졸업생 선배가 재학생과 다툼', '서로 한 번 말다툼하며 욕을 주고받음', '친한 사이끼리 장난이라며 별명을 부름'], cards: ['듣는 친구가 싫어하면 정신적 피해다', '한 번이라도 피해가 크면 다룰 수 있다', '피해 학생이 재학생이면 학생 대상이다', '친하면 무엇이든 괜찮다'] }, target: { match: { '졸업생 선배가 재학생과 다툼': '피해 학생이 재학생이면 학생 대상이다', '서로 한 번 말다툼하며 욕을 주고받음': '한 번이라도 피해가 크면 다룰 수 있다', '친한 사이끼리 장난이라며 별명을 부름': '듣는 친구가 싫어하면 정신적 피해다' } } };
              return q;
            })(),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쟁점 사례 하나를 골라 \'해당한다\'와 \'더 확인해야 한다\' 쪽 근거를 한 줄씩 쓰세요.' }] },
        notes: '사례는 모두 가상이다. 우리 반·우리 학교에서 있었던 일을 사례로 꺼내게 하지 않는다. 판단은 연습이며 실제 사안의 판단은 학교의 절차가 맡는다고 말해 준다.',
      }),
      M({
        id: 'activity.trace', type: 'activity', title: '단톡방 사례 판단 따라가기',
        method: '경계 사례 판단 뒤 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 둘(학생·교사의 판단)까지 가 보고 근거를 고른다.', base: '갈림길 셋(학생·교사·보호자)을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 지난 뒤 첫 판단을 \'모른 척\'으로 바꾼 길도 끝까지 가 보고 견준다.' },
        activity: {
          title: '세 입장으로 이어 가는 판단', tool: 'dilemma',
          teacher: '"한 사례에 학생, 교사, 보호자가 차례로 판단을 내려요. 누구의 판단이 하준이의 하루를 바꿀까요?" 장면마다 누구 입장인지 소리 내어 읽게 한다. \'애들끼리 화해시키자\'를 고른 학생에게 "사과 한마디로 끝내면 하준이는 보호받았을까요? 새 방이 생긴 장면을 볼까요?"라고 묻는다. 보호자가 하준이를 다그치는 길에서는 "잘못한 사람은 누구인가요?"라고 짚고, 잘못은 놀린 쪽에 있고 알린 학생은 잘한 것이라는 점을 분명히 말한다.',
          task: '사례의 갈림길을 학생·교사·보호자 입장에서 이어 가고 판단 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL23('하준이 사례에서 학생·교사·보호자가 이어 갈 가장 알맞은 길을 고르고 근거를 고르세요.', CHAT, [['tell', 'process', 'listen']], CHAT_R, ['def', 'protect', 'tellok'], { d: 0.4 }),
            DILQ('졸업생 선배의 아이템 요구 사례에서 알맞은 길을 고르고 근거를 고르세요.', ITEM, [['adult', 'save']], ITEM_R, ['harm', 'record'], { d: 0.35 }),
            EXPLOREQ('선배 사례에서 \'게임 속 일이니 넘긴다\' 길도 끝까지 가 보고 결과를 견주세요.', ITEM, ITEM_R, ['다른 길의 끝 장면을 확인했다', '두 길에서 서연이에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '판단을 미루거나 장소를 핑계로 넘기면 피해 학생의 시간이 길어져요. 알리고 기록하는 판단이 보호로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하준이 사례에서 결과를 가장 크게 바꾼 판단 하나와 그 까닭을 쓰세요.' }] },
        notes: '인물은 가상이다. 학교의 실제 처리 절차(접수·조사·보호)는 다음 주제(심의위원회)에서 자세히 다룬다.',
      }),
      M({
        id: 'activity.impact', type: 'activity', title: '한 사례가 남기는 영향',
        method: '위험성을 개인·관계·학교 문화로 펼치기', tool: 'mindmap', minutes: 18,
        levels: { easy: '세 가지에 영향 카드 6장(가지마다 2장)을 바로 확인하며 단다.', base: '카드 9장을 세 가지에 달고, 영향이 이어지는 사슬을 차례로 놓는다.', challenge: '헷갈리는 카드 3장이 더해진 12장을 섞어 달고, 사슬 5장을 차례로 놓아 가지 사이 인과를 설명한다.' },
        activity: {
          title: '영향 가지 펼치기', tool: 'mindmap',
          teacher: '"단톡방 따돌림 한 건이 남기는 영향은 피해 학생 한 사람에게서 끝날까요?" 카드를 개인·관계·학교 문화 가지에 나눈 뒤, 영향이 이어지는 사슬을 놓게 한다. "피해 학생만 조금 힘들고 말겠죠"라는 학생에게 \'다른 학생들도 말하지 않게 됨\' 카드를 가리키며 "이 카드는 누구의 영향일까요?"라고 묻는다. 폭력은 개인을 다치게 하고, 관계를 끊고, \'말해도 소용없다\'는 학교 문화를 남긴다는 점을 짚는다.',
          task: '사례의 영향을 개인·관계·학교 문화 가지에 달고 이어지는 차례를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 사례의 영향 카드를 개인·관계·학교 문화 가지에 다세요.', ['개인(몸·마음·학업)', '관계', '학교 문화'], [
              ['잠을 잘 못 자고 머리가 아픔', '수업에 집중하지 못함', '자신을 탓하는 마음이 생김'],
              ['친구를 믿기 어려워짐', '모둠 활동을 피하게 됨', '가족과 대화가 줄어듦'],
              ['다른 학생들도 말하지 않게 됨', '놀림을 장난으로 여기는 분위기', '"말해도 소용없다"는 생각이 퍼짐'],
            ], { k: 2, hard: [['학교에 오기 두려워함'], ['곁에 있던 친구도 멀어짐'], ['보고도 모른 척하는 일이 흔해짐']], d: 0.3, opt: { topic: '단톡방 따돌림의 영향' } }),
            ORDERQ('영향이 이어지는 사슬을 차례로 놓으세요.', ['놀림 글이 단톡방에 퍼짐', '피해 학생이 교실에 가기 두려워함', '수업과 모둠 활동에서 빠짐', '보던 학생들도 침묵함', '말해도 소용없다는 문화가 굳음'], { k: 3, d: 0.35, opt: { topic: '영향의 사슬' } }),
            PICKQ('\'학교 문화\'에 남는 영향을 줄이는 행동만 고르세요.', ['보고 들은 일을 믿을 어른에게 알린다', '알린 친구를 칭찬하고 지켜 준다'], ['피해 학생에게 참으라고 한다', '놀림 글에 웃는 반응을 단다'], { d: 0.3, opt: { basket: '문화를 바꾸는 행동' }, more: { conclude: '폭력의 영향은 개인에서 관계와 학교 문화로 번져요. 알리고, 알린 사람을 지키는 행동이 그 사슬을 끊어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '개인의 영향이 학교 문화의 영향으로 번지는 과정을 화살표(→)로 이어 한 줄로 쓰세요.' }] },
        notes: '영향 카드는 일반적인 사례다. 학생에게 자기 경험을 떠올려 말하게 하지 않는다.',
      }),
      M({
        id: 'activity.report', type: 'activity', title: '가상 자료 해석 단락',
        method: '가상 자료 해석 단락 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '문항마다 문장 틀(첫머리)을 보고 쓴다.', base: '틀 없이 자료 사실·주장과 근거·자료의 한계를 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙어, 반대 해석을 소개하고 반박하는 문장까지 쓴다.' },
        activity: {
          title: '자료로 주장하는 단락', tool: 'rubric-writing',
          teacher: '"가상 자료 두 개가 있어요. 신고 건수는 40건에서 90건으로 늘었고, 같은 기간 \'피해를 보고도 참았다\'는 설문 응답 비율은 줄었어요. 이 자료로 무엇을 주장할 수 있을까요?" 먼저 자료에서 읽은 사실만 쓰고, 그다음 주장과 근거, 마지막에 자료의 한계를 쓰게 한다. "폭력이 두 배 늘었다"고 쓴 학생에게 "두 자료를 함께 보면 다른 해석은 없을까요?"라고 묻는다. 좋은 해석 단락은 자료가 말하지 않는 것까지 밝힌다는 점을 짚는다.',
          task: '가상 자료를 근거로 사실·주장·한계를 담은 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가상 자료에서 읽은 사실만 2문장으로 쓰세요.', '가상 자료: 신고 건수 40건→90건(4년), 같은 기간 "보고도 참았다" 응답 비율 감소. 자료에서 읽은 사실을 쓰세요.', ['숫자와 기간을 정확히 옮겼다', '내 짐작을 섞지 않았다', '두 자료를 모두 다루었다'], { min: 40, max: 300, sent: [2, 3], must: [['신고', '건수']], starter: '가상 자료를 보면 신고 건수는 ~에서 ~로', plus: '자료가 가상이라는 점을 밝혔다', d: 0.3 }),
            RWQ('자료를 근거로 한 주장과 근거를 2~3문장으로 쓰세요.', '두 가상 자료를 함께 보고 학교폭력 신고에 대해 주장하고 근거를 쓰세요.', ['주장을 첫 문장에 썼다', '두 자료를 근거로 이었다', '\'폭력이 늘었다\'고 단정하지 않았다'], { min: 50, max: 350, sent: [2, 3], must: [['왜냐하면', '때문', '근거']], starter: '나는 ~라고 주장한다. 왜냐하면 ~', plus: '반대 해석(폭력이 실제로 늘었을 가능성)을 소개하고 반박했다', d: 0.4 }),
            RWQ('이 자료로 알 수 없는 것(한계)을 2문장으로 쓰세요.', '이 가상 자료만으로 알 수 없는 것과 더 필요한 자료를 쓰세요.', ['조사 대상·시점·응답 방식 가운데 하나를 짚었다', '더 필요한 자료를 하나 제안했다', '한계를 밝혀도 주장을 포기하지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['한계', '알 수 없', '필요']], starter: '이 자료만으로는 ~을 알 수 없다. 그래서 ~', plus: '한계 때문에 바뀔 수 있는 결론을 썼다', d: 0.4, more: { conclude: '자료 해석은 사실·주장·한계를 나누어 쓸 때 믿을 수 있어요. 신고 건수는 \'신고된 일\'의 수라는 점을 잊지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 단락을 세 칸으로 정리하세요.', columns: ['칸', '한 줄 요약'], cells: [['자료의 사실', ''], ['주장과 근거', ''], ['자료의 한계', '']] }] },
        notes: '수치는 모두 가상이다. 실제 실태조사 자료를 쓸 때는 교육부 학교폭력 실태조사 발표 자료의 조사 대상·시점·방식을 함께 확인한다.',
      }),

      M({
        id: 'wrap.summary', type: 'wrap', title: '정의·경계·자료 문장 완성',
        method: '핵심 개념 문장 완성', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 빈칸 두 개를 먼저 함께 채우고 나머지 두 개를 채운다.', base: '빈칸 네 개를 스스로 채운다.', challenge: '채운 뒤 빈칸 없이 오늘 개념을 한 문장으로 다시 써 출구 질문에 낸다.' },
        wrap: {
          teacher: '"오늘 배운 세 가지 — 법의 정의, 경계 사례, 자료의 한계 — 를 문장 하나씩으로 정리해 봐요." 빈칸을 채운 뒤 두세 명에게 \'다시 쓴 한 문장\'을 읽게 한다. \'의도\' 카드를 판단 기준 칸에 넣은 학생에게 "장난이었다는 말로 받는 사람의 상처가 없어질까요?"라고 되묻는다. 쉬움 반에서는 1·2번 빈칸을 함께 채우고 시작한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'f1', label: '학교폭력은 학교 ___에서 학생을 대상으로 일어난 일이다.' }, { id: 'f2', label: '판단 기준은 하는 쪽의 의도가 아니라 받는 쪽의 ___다.' }, { id: 'f3', label: '쟁점 사례는 폭력이 아니라는 뜻이 아니라 ___해야 한다는 뜻이다.' }, { id: 'f4', label: '신고 건수는 일어난 일이 아니라 ___ 일의 수다.' }], cards: ['안팎', '피해', '더 확인', '신고된', '안', '의도', '모른 척'] }, prompt: '오늘 개념 문장의 빈칸을 낱말 카드로 채우세요.', target: { fill: { f1: '안팎', f2: '피해', f3: '더 확인', f4: '신고된' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '자료 해석으로 가장 알맞은 말을 고르세요.', options: ['신고가 늘었으니 폭력이 늘었다', '신고가 늘어난 까닭은 여러 가지일 수 있어 다른 자료와 함께 본다', '그래프는 숫자가 크면 무조건 나쁜 뜻이다'], answer: 1, difficulty: 0.2, explain: '신고 증가는 신고를 더 잘하게 된 변화일 수도 있어요. 다른 자료와 함께 봐요.' },
            { type: 'short', prompt: '빈칸 없이, 오늘 배운 개념을 한 문장으로 다시 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '법과 자료로 읽는 학교폭력',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '학교폭력은 학교 ___에서 학생을 대상으로 일어나 신체·정신·재산상 피해를 주는 일이다.', answer: '안팎' },
            { type: 'short', prompt: '신고 건수 그래프를 볼 때 주의할 점을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '낱말 상자: 안팎 · 피해 · 신고된', items: [{ type: 'blank', prompt: '빈칸을 채우세요.', text: '판단 기준은 받는 쪽의 ___다.', answer: '피해' }] },
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '자료 읽기 점검표',
        method: '자료 읽기 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검표 앞 세 항목(대상·시점·가상인지)을 함께 읽고 표시한다.', base: '항목 일곱 가운데 함정 두 개를 빼고 다섯 개를 표시한다.', challenge: '다른 교과(사회·통계) 자료에도 쓸 항목을 골라 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"뉴스나 카드뉴스에서 학교폭력 숫자를 보면 무엇부터 확인할까요? 오늘 쓴 점검표를 마무리해 봐요." 함정 항목 \'숫자가 클수록 믿을 만하다\'에 표시한 학생에게 "100명에게 물은 조사와 1만 명에게 물은 조사의 숫자 크기는 같은 뜻일까요?"라고 묻는다. 쉬움 반은 앞의 세 항목만 함께 짚고, 도전 반은 다른 교과에도 쓸 항목을 고르게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '자료 읽기 점검표', items: [{ id: 'who', text: '누구에게 물었는지(조사 대상) 확인' }, { id: 'when', text: '언제 조사했는지(시점) 확인' }, { id: 'real', text: '가상 자료인지 실제 자료인지 확인' }, { id: 'how', text: '어떻게 물었는지(응답 방식) 확인' }, { id: 'count', text: '신고 건수인지 경험 응답인지 구별' }, { id: 'big', text: '숫자가 클수록 믿을 만하다고 봄' }, { id: 'title', text: '제목만 읽고 결론을 정함' }] }, prompt: '자료를 읽을 때 확인할 것만 표시하세요.', target: { checklist: ['who', 'when', 'real', 'how', 'count'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '두 조사의 결과가 다를 때 먼저 할 일은?', options: ['숫자가 큰 쪽을 믿는다', '조사 대상·시점·방식이 같은지 견준다', '둘 다 틀렸다고 본다'], answer: 1, difficulty: 0.2, explain: '조사 조건이 다르면 숫자가 달라질 수 있어요. 조건부터 견줘요.' },
            { type: 'short', prompt: '이 점검표에서 다른 교과 자료에도 쓸 항목 하나를 고르고 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '자료 읽기 점검표',
          items: [
            { type: 'check', prompt: '자료를 읽을 때 확인할 것에 표시하세요.', options: ['조사 대상', '조사 시점', '가상인지 실제인지', '응답 방식', '신고 건수와 경험 응답 구별'] },
            { type: 'short', prompt: '신고 건수가 늘어난 그래프를 본 친구에게 해 줄 말을 한 문장으로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 2. 심의위원회 조치와 피해 학생 보호 체계 분석 (10학년)
  // ======================================================================================================
  {
    const M = MOD('committee', [10]);
    const FLOW = ['신고', '사안 조사', '심의', '조치', '이행 확인'];
    const AGENCY = { title: '가상 도시', grid: [6, 4], places: [{ name: '학교', icon: 'school', at: [1, 1] }, { name: '교육지원청', icon: 'office', at: [4, 0] }, { name: '경찰서', icon: 'police', at: [5, 3] }, { name: '병원', icon: 'hospital', at: [2, 3] }, { name: '도서관', icon: 'library', at: [0, 3] }] };
    // 갈림 2번(쉬움)·3번(기본)·3번 + 학교가 더 할 보호 카드까지(도전)
    const AFTER = { text: '접촉을 금지하는 조치가 내려진 뒤 같은 반 교실. 쉬는 시간에 태오가 유나 자리로 와서 "잠깐 할 말 있어"라고 한다. 너는 유나의 친구다.', who: '유나의 친구', motif: 'house', choices: [
      { id: 'side', text: '유나 곁에 서서 바로 담임 선생님께 알린다', result: '선생님이 태오를 따로 부르고 유나에게 괜찮은지 묻는다.', impact: [{ who: '유나', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '유나가 "또 다가오면 어쩌지" 하며 불안해한다.', who: '유나의 친구', choices: [
          { id: 'plan', text: '유나와 함께 담임·상담 선생님을 만나 자리와 동선을 정하자고 한다', result: '자리 배치와 쉬는 시간 이동 길이 새로 정해진다.', impact: [{ who: '유나', text: '안전하다는 느낌이 돌아온다', tone: 1 }],
            next: { text: '몇 주 뒤, 태오 쪽에서 관계 회복 프로그램을 해 보자는 말이 나왔다. 반 친구 몇은 "이제 그만 화해해"라고 한다.', choices: [
              { id: 'own', text: '유나가 원할 때, 준비되었을 때만 하자고 유나 편에 선다', result: '유나가 상담 선생님과 천천히 생각해 보기로 한다.', impact: [{ who: '유나', text: '자기 결정을 존중받는다', tone: 1 }], ending: '관계 회복은 피해 학생의 뜻과 속도가 먼저다.' },
              { id: 'push', text: '반 분위기를 위해 유나에게 빨리 화해하라고 한다', result: '유나가 억지로 고개를 끄덕이고 더 말이 없어진다.', impact: [{ who: '유나', text: '다시 상처받는다', tone: -1 }], ending: '화해를 재촉하는 것도 2차 피해가 될 수 있다.' }] } },
          { id: 'done', text: '"조치가 나왔으니 이제 괜찮아"라며 넘긴다', result: '유나는 불안을 혼자 품고 쉬는 시간마다 자리를 비운다.', impact: [{ who: '유나', text: '학교생활이 위축된다', tone: -1 }], ending: '조치가 내려진 뒤에도 보호는 계속되어야 한다.' }] } },
      { id: 'away', text: '둘이 알아서 하라고 자리를 피한다', result: '태오가 "신고 때문에 내가 손해 봤다"고 말하고 유나가 굳는다.', impact: [{ who: '유나', text: '다시 겁을 먹는다', tone: -1 }],
        next: { text: '유나가 "말하면 일이 더 커질 것 같아"라고 한다.', choices: [
          { id: 'now', text: '지금이라도 함께 선생님께 알리자고 한다', result: '선생님이 조치를 어긴 일로 다시 살피겠다고 한다.', impact: [{ who: '유나', text: '다시 보호받는다', tone: 1 }], ending: '조치를 어긴 접근은 알려야 멈춘다. 알린 사람은 잘한 것이다.' },
          { id: 'quiet', text: '일이 커질까 봐 아무에게도 말하지 않는다', result: '태오의 접근이 이어진다.', impact: [{ who: '유나', text: '피해가 되풀이된다', tone: -1 }], ending: '침묵은 피해 학생을 혼자 두게 한다.' }] } },
      { id: 'post', text: '단톡방에 "태오 또 유나한테 갔다"고 올린다', result: '사건 이야기가 반 전체에 퍼지고 유나에게 질문이 쏟아진다.', impact: [{ who: '유나', text: '소문 때문에 더 힘들어진다', tone: -1 }], ending: '사건을 퍼뜨리면 피해 학생에게 2차 피해가 된다.' }] };
    const AFTER_R = [{ id: 'keep', text: '조치 뒤에도 분리와 보호가 이어져야 한다' }, { id: 'will', text: '관계 회복은 피해 학생의 뜻이 먼저다' }, { id: 'second', text: '소문과 화해 재촉은 2차 피해가 된다' }, { id: 'over', text: '조치가 나오면 학교의 일은 끝난다', why: '조치가 잘 지켜지는지 살피는 것까지가 보호예요.' }, { id: 'yield', text: '반 분위기를 위해 피해 학생이 먼저 양보해야 한다', why: '피해 학생에게 양보를 요구하는 것은 잘못을 떠넘기는 일이에요.' }];
    const AFTER_MORE = [{ id: 'watch', text: '학교가 쉬는 시간 동선을 살피고 유나에게 자주 안부를 묻는다' }, { id: 'hide', text: '유나가 스스로 태오를 피해 다니게 한다', why: '피하는 짐을 피해 학생에게 지우면 안 돼요.' }];
    const DILAFTER = (prompt, scene, paths, good, { d = 0.4, more = {} } = {}) => {
      const at = (n, g = good) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: g });
      return Object.assign({ prompt, toolOptions: { scene, reasons: AFTER_R }, target: at(3), difficulty: d,
        levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
          challenge: { prompt: pfx(prompt, '학교가 더 할 보호도 고르기'), toolOptions: { reasons: [...AFTER_R, ...AFTER_MORE] }, target: at(3, [...good, 'watch']) } } }, more);
    };
    const HUNT = { text: '심의 결과가 나온 뒤, 태오의 친구가 SNS에 "누가 신고했는지 아는 사람?"이라는 글을 올렸다. 너는 그 글을 보았다.', motif: 'star', choices: [
      { id: 'report', text: '글을 화면 캡처해 담임 선생님께 알린다', result: '선생님이 글을 내리게 하고 보복 행위가 되지 않도록 살핀다.', impact: [{ who: '신고한 학생', text: '보호받는다', tone: 1 }],
        next: { text: '반 친구가 "너도 누가 했는지 궁금하지 않아?"라고 묻는다.', choices: [
          { id: 'no', text: '"누가 했는지는 중요하지 않아, 묻지 말자"고 한다', result: '대화가 멈추고 더 퍼지지 않는다.', impact: [{ who: '유나', text: '소문에서 벗어난다', tone: 1 }], ending: '신고한 사람을 찾는 것 자체가 2차 피해를 만든다.' },
          { id: 'guess', text: '아는 대로 짐작을 말해 준다', result: '엉뚱한 친구 이름까지 퍼진다.', impact: [{ who: '여러 학생', text: '근거 없는 소문에 다친다', tone: -1 }], ending: '짐작 한마디가 또 다른 피해를 만든다.' }] } },
      { id: 'like', text: '궁금해서 댓글로 짐작을 단다', result: '글이 더 퍼지고 신고한 학생이 겁을 먹는다.', impact: [{ who: '신고한 학생', text: '보복이 두려워진다', tone: -1 }], ending: '신고자를 찾는 글에 반응하면 보복을 돕게 된다.' }] };
    const HUNT_R = [{ id: 'safe', text: '신고한 사람은 드러나지 않게 보호받아야 한다' }, { id: 'spread', text: '사건 이야기를 퍼뜨리지 않는다' }, { id: 'curious', text: '궁금하면 물어봐도 된다', why: '궁금증보다 신고한 사람의 안전이 먼저예요.' }];

    MODS.push(
      M({
        id: 'intro.flow', type: 'intro', title: '신고 뒤 절차 짐작하기',
        method: '신고 뒤 절차 미리 놓아 보기', tool: 'timeline', minutes: 6,
        levels: { easy: '절차 카드 3장(신고·심의·조치)만 함께 놓는다.', base: '절차 카드 5장(신고·사안 조사·심의·조치·이행 확인)을 짐작해 놓는다.', challenge: '놓은 차례에서 가장 오래 걸릴 단계를 골라 그 까닭을 말한다.' },
        intro: {
          teacher: '"학교폭력을 신고하면 다음 날 바로 처분이 나올까요?" 손을 들어 짐작하게 한 뒤 시연 단추로 절차 카드가 차례로 놓이는 모습을 보여 준다. "신고하면 곧바로 가해 학생이 벌을 받는다"는 말이 나오면 "양쪽 이야기를 듣고 사실을 확인하는 단계가 없다면 어떤 일이 생길까요?"라고 되묻는다. 오늘은 각 단계에서 피해 학생이 어떻게 보호받는지를 따라가 본다고 밝힌다.',
          student: '학교폭력을 신고한 뒤 어떤 단계를 거칠지 짐작해 절차 카드를 차례로 놓아 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: ['조치', '신고', '이행 확인', '사안 조사', '심의'] }, sequence: [{ order: FLOW }] },
          art: { draw: 'a paper path of five stepping stones from a report envelope to a school building, a meeting table and a checkmark, paper students walking along it with a teacher', banner: '신고 뒤에는 어떤 길을 걸을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '절차는 일반적인 흐름이다. 학교장 자체 해결 등 세부 경로는 학교의 학교폭력 사안처리 안내를 함께 보여 준다.',
      }),
      M({
        id: 'intro.agencies', type: 'intro', title: '사안이 거치는 기관',
        method: '사안이 거치는 기관 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '지도에 기관 이름이 보이고 학교·교육지원청에 함께 핀을 꽂는다.', base: '이름 대신 기호(범례)를 보고 심의가 열리는 곳을 찾는다.', challenge: '학교·교육지원청·경찰서가 맡는 일을 하나씩 말한다.' },
        intro: {
          teacher: '"가상 도시 지도예요. 학교폭력 사안은 학교 안에서만 다뤄질까요?" 시연 단추로 교육지원청에 핀이 꽂히는 모습을 보여 주고, 학교폭력대책심의위원회가 교육지원청에 놓인다는 점을 짚는다. "경찰이 오면 다 범죄자가 되는 것"이라는 말이 나오면 "급하고 위험할 때 112로 보호를 요청하는 것과 학교의 절차는 함께 갈 수 있을까요?"라고 되묻는다.',
          student: '가상 도시 지도에서 학교폭력 사안이 거치는 기관을 찾아 핀을 꽂아 보세요.',
          demo: { tool: 'map', options: AGENCY, sequence: [{ place: '교육지원청' }] },
          art: { draw: 'a top-down paper city map with a school, an education office and a police station connected by dotted paper lines, a small pin standing on the education office', banner: '사안은 어디를 거칠까?', extra: [{ motif: 'house', x: 300, y: 222 }] },
        },
        notes: '지도는 가상이다. 우리 지역 교육지원청의 위치와 담당 부서는 학교 안내문으로 확인해 준다.',
      }),

      M({
        id: 'activity.measures', type: 'activity', title: '조치를 목적으로 나누기',
        method: '조치 카드를 목적별로 나누기', tool: 'mindmap', minutes: 18,
        levels: { easy: '조치 카드 4장을 세 목적 가지에 바로 확인하며 단다.', base: '조치 카드 7장을 세 가지에 달고, 조치마다 지키려는 것을 짝짓는다.', challenge: '카드를 섞어 달고, 두 목적을 함께 가진 조치를 고른 근거를 활동지에 쓴다.' },
        activity: {
          title: '조치의 목적 가지', tool: 'mindmap',
          teacher: '"심의위원회의 조치는 모두 벌일까요? 오늘은 조치 이름보다 그 조치가 무엇을 지키려 하는지를 봐요." 카드마다 "이 조치로 가장 먼저 좋아지는 사람은 누구인가요?"라고 묻는다. \'심리 상담을 받게 함\'을 선도 칸에 둔 학생에게 "이 카드는 피해 학생에게 하는 조치일까요, 가해 학생에게 하는 조치일까요?"라고 되묻는다. 조치에는 피해 학생 보호, 가해 학생 선도, 관계 회복이라는 서로 다른 목적이 있다는 점을 짚는다.',
          task: '조치 설명 카드를 피해 학생 보호·가해 학생 선도·관계 회복 가지에 달아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            (() => {
              const q = SORTQ('조치 설명 카드를 목적에 맞는 가지에 다세요.', ['피해 학생 보호', '가해 학생 선도', '관계 회복'], [
                ['피해 학생이 심리 상담을 받게 함', '피해 학생이 잠시 쉬며 보호받게 함', '다친 곳의 치료를 돕게 함'],
                ['가해 학생이 특별 교육을 받게 함', '가해 학생이 봉사 활동을 하게 함'],
                ['잘못을 인정하는 사과의 자리를 마련함', '양쪽이 원하면 관계 회복 프로그램을 함'],
              ], { k: 1, d: 0.3, opt: { topic: '심의위원회 조치' } });
              const eg = [['피해 학생이 심리 상담을 받게 함', '피해 학생이 잠시 쉬며 보호받게 함'], ['가해 학생이 특별 교육을 받게 함'], ['양쪽이 원하면 관계 회복 프로그램을 함']];
              q.levels.easy = { prompt: '조치 설명 카드를 목적에 맞는 가지에 다세요(카드 4장).', toolOptions: { cards: mix(eg) }, target: { sort: { '피해 학생 보호': eg[0], '가해 학생 선도': eg[1], '관계 회복': eg[2] } } };
              return q;
            })(),
            MATCHQ('조치마다 그 조치가 지키려는 것을 짝지으세요.', [['피해 학생이 심리 상담을 받게 함', '피해 학생의 마음 회복'], ['가해 학생이 특별 교육을 받게 함', '같은 행동을 되풀이하지 않게 함'], ['양쪽이 원하면 관계 회복 프로그램을 함', '함께 지낼 학교생활']], { k: 2, extra: ['가해 학생에게 겁주기'], d: 0.35, more: { hints: ['조치를 받는 사람이 누구인지, 그 뒤에 무엇이 달라지는지 생각해요.'] } }),
            PICKQ('피해 학생 보호와 가해 학생 선도의 두 목적을 함께 가진 조치만 고르세요.', ['피해 학생에게 접촉·보복하지 못하게 함', '두 학생이 떨어져 지내도록 반을 바꿈'], ['피해 학생이 심리 상담을 받게 함', '피해 학생이 먼저 사과하게 함'], { d: 0.4, opt: { basket: '두 목적을 가진 조치' }, more: { conclude: '조치는 처벌만이 아니라 피해 학생을 보호하고, 가해 학생이 행동을 바꾸고, 학교생활을 되찾게 하려는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 목적을 함께 가진 조치 하나를 골라, 각 목적이 무엇인지 근거와 함께 쓰세요.' }] },
        notes: '조치 번호(호수)는 쓰지 않고 내용만 다룬다. 실제 조치의 종류와 이름은 법령과 학교 안내문으로 확인해 준다. \'피해 학생이 먼저 사과하게 함\'은 함정 카드이며, 피해 학생에게 사과를 요구하지 않는다는 점을 분명히 말한다.',
      }),
      M({
        id: 'activity.after', type: 'activity', title: '조치 뒤 다시 마주친 교실',
        method: '조치 뒤 같은 반에서 다시 마주친 상황', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 둘까지 가 보고 근거를 고른다.', base: '갈림길 셋(접근·불안·관계 회복 제안)을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 지난 뒤, 근거 카드에 더해진 \'학교가 더 할 수 있는 보호\' 가운데 알맞은 것까지 고른다.' },
        activity: {
          title: '조치 뒤의 갈림길', tool: 'dilemma',
          teacher: '"조치가 내려지면 일이 끝났을까요? 같은 반 교실에서 다시 마주친다면 어떨까요?" 장면마다 유나의 마음을 먼저 말하게 한다. \'반 분위기를 위해 빨리 화해하라\'를 고른 학생에게 "화해를 서두르면 누구의 마음이 먼저 챙겨지나요?"라고 묻는다. 신고한 사람을 찾는 장면에서는 "누가 신고했는지 아는 것이 누구에게 도움이 될까요?"라고 되묻고, 신고자 보호와 2차 피해 방지가 조치만큼 중요하다는 점을 짚는다.',
          task: '조치 뒤 교실의 갈림길을 따라가며 보호가 이어지는 길과 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILAFTER('조치 뒤 다시 마주친 상황에서 유나를 지키는 길을 고르고 근거를 고르세요.', AFTER, [['side', 'plan', 'own']], ['keep', 'will', 'second'], { d: 0.4 }),
            DILQ('신고한 사람을 찾는 글을 본 상황에서 알맞은 길을 고르고 근거를 고르세요.', HUNT, [['report', 'no']], HUNT_R, ['safe', 'spread'], { d: 0.35 }),
            EXPLOREQ('유나 상황에서 \'자리를 피한다\' 길도 끝까지 가 보고 결과를 견주세요.', AFTER, AFTER_R, ['다른 길의 끝 장면을 확인했다', '두 길에서 유나의 안전이 어떻게 달라졌는지 견주었다'], { d: 0.35, more: { conclude: '조치 뒤에도 분리·보호를 이어 가고, 소문·재촉·신고자 찾기를 막아야 피해 학생이 학교생활을 되찾아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '조치가 내려진 뒤에도 학교와 친구가 할 수 있는 보호를 두 가지 쓰세요.' }] },
        notes: '인물과 사안은 가상이다. 실제 조치를 받은 학생이 있는 학급에서는 사례를 바꾸거나 상담 선생님과 미리 의논한다.',
      }),
      M({
        id: 'activity.roleplay', type: 'activity', title: '세 입장 역할극 대본',
        method: '세 입장 역할극 대본 채우기', tool: 'story', minutes: 18,
        levels: { easy: '말풍선 빈칸 3개(교사·보호자·가해 학생 하나씩)를 채운다.', base: '말풍선 빈칸 5개를 채우고, 입장마다의 걱정을 짝짓는다.', challenge: '카드를 섞어 채우고, 헷갈리는 카드가 더해진 판에서 세 입장이 함께 동의할 말을 고른다.' },
        activity: {
          title: '사안 조사 자리의 대본', tool: 'story',
          teacher: '"사안 조사 자리에 담당 교사, 피해 학생 보호자, 가해 학생이 있어요. 각자 무엇을 걱정하고 무엇을 바랄까요?" 말풍선을 채운 뒤 세 사람이 대본을 소리 내어 읽게 한다. 피해 학생 보호자 말풍선에 \'유나가 예민해서 그래요\'를 넣는 학생에게 "이 말을 들은 유나는 어떤 마음일까요? 잘못은 누구에게 있나요?"라고 묻는다. 서로 입장이 달라도 \'피해 학생의 안전\'과 \'사실 확인\'에는 함께 동의할 수 있다는 점을 짚는다.',
          task: '세 입장의 말풍선 빈칸을 걱정과 요구 카드로 채우고 함께 동의할 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            (() => {
              const SL = [{ id: 't1', who: '담당 교사', label: '조사하는 동안 유나의 ___ 먼저 살피겠습니다.' }, { id: 'p1', who: '피해 학생 보호자', label: '가장 걱정하는 것은 ___.' }, { id: 's1', who: '가해 학생', label: '제가 한 일이 ___ 이제 알게 됐어요.' }, { id: 'p2', who: '피해 학생 보호자', label: '학교에 ___ 요청합니다.' }, { id: 't2', who: '담당 교사', label: '결과는 ___ 거쳐 정해집니다.' }];
              const C = ['안전과 마음을', '다시 마주칠 때의 불안이에요', '유나에게 상처였다는 걸', '두 아이를 떨어뜨려 줄 것을', '사실 조사와 심의를'];
              const T = ['유나가 예민해서 그래요', '장난이었으니 그만해요', '오늘 당장 처분하겠습니다'];
              const tg = (ids) => ({ fill: Object.fromEntries(ids.map((id) => [id, C[SL.findIndex((s) => s.id === id)]])) });
              return { prompt: '세 입장의 말풍선 빈칸을 알맞은 카드로 채우세요.', toolOptions: { mode: 'fill', title: '사안 조사 자리(가상)', slots: SL, cards: [C[4], T[0], C[2], C[0], T[1], C[3], C[1], T[2]] }, target: tg(['t1', 'p1', 's1', 'p2', 't2']), difficulty: 0.3,
                levels: { easy: { prompt: '세 입장의 말풍선 빈칸을 알맞은 카드로 채우세요(빈칸 3개).', toolOptions: { slots: SL.slice(0, 3), cards: [C[2], T[0], C[0], C[1]] }, target: tg(['t1', 'p1', 's1']) } } };
            })(),
            MATCHQ('입장마다 가장 큰 걱정을 짝지으세요.', [['담당 교사', '사실을 공정하게 확인하는 것'], ['피해 학생 보호자', '아이가 다시 다치지 않는 것'], ['가해 학생', '앞으로 학교생활이 어떻게 될지']], { k: 3, extra: ['누가 신고했는지 알아내는 것'], d: 0.3, opt: { mode: 'match' } }),
            (() => {
              const q = PICKQ('세 입장이 함께 동의할 수 있는 말만 고르세요.', ['피해 학생의 안전이 가장 먼저다', '사실을 확인한 뒤 결정한다'], ['피해 학생도 조금은 잘못했다', '빨리 덮고 넘어가자'], { d: 0.35, opt: { basket: '함께 동의할 말' }, more: { conclude: '입장이 달라도 피해 학생의 안전과 공정한 사실 확인에는 함께 설 수 있어요. 피해 학생에게 책임을 나누는 말은 동의의 자리가 아니에요.' } });
              q.levels = { challenge: { toolOptions: { cards: [...q.toolOptions.cards, '가해 학생의 말은 들을 필요가 없다', '양쪽 보호자가 알아서 합의한다'] } } };
              return q;
            })(),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 입장 가운데 하나를 골라, 그 사람이 조사 자리에서 할 말을 한 문장 더 써 보세요.' }] },
        notes: '역할극은 가상 인물로 한다. 학생에게 실제 피해·가해 역할을 맡기며 자기 일을 떠올리게 하지 않는다. 가해 학생 역할도 \'나쁜 사람\'이 아니라 행동을 바꿀 사람으로 다룬다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '조치는 처벌인가 보호인가',
        method: '“조치는 처벌인가 보호인가” 입장문 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '문항마다 근거 카드가 담긴 문장 틀을 보고 쓴다.', base: '틀 없이 주장·근거·반론 대응을 쓰고 기준표로 점검한다.', challenge: '문항마다 기준 하나가 더 붙어, 상대 입장의 가장 강한 근거를 소개하고 답한다.' },
        activity: {
          title: '입장문 세 문단', tool: 'rubric-writing',
          teacher: '"\'학교폭력 조치는 처벌이다\'와 \'조치는 보호다\', 여러분은 어느 쪽인가요? 정답을 고르는 글이 아니라 근거의 힘을 겨루는 글이에요." 쓰기 전에 오늘 나눈 조치의 세 목적을 칠판에 다시 적는다. "어차피 다 벌이에요"라고 쓴 학생에게 "피해 학생이 받는 심리 상담도 벌일까요?"라고 묻는다. 반론 문단에서는 상대 의견을 깎아내리지 말고 가장 강한 근거를 정확히 옮긴 뒤 답하게 한다.',
          task: '한 입장을 골라 주장·근거·반론 대응을 담은 입장문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('내 입장(처벌 / 보호 / 둘 다)을 밝히고 근거를 2~3문장으로 쓰세요.', '"학교폭력 조치는 처벌인가, 보호인가?" 내 입장과 근거를 쓰세요.', ['입장을 첫 문장에 밝혔다', '오늘 배운 조치의 목적을 근거로 썼다', '피해 학생을 탓하는 말이 없다'], { min: 50, max: 350, sent: [2, 3], must: [['왜냐하면', '때문', '근거']], starter: '나는 조치가 ~라고 생각한다. 왜냐하면 (근거 카드: 피해 학생 보호 · 가해 학생 선도 · 관계 회복) ~', plus: '조치 하나를 예로 들어 근거를 구체화했다', d: 0.4 }),
            RWQ('반대 입장의 근거를 소개하고 내 답을 2~3문장으로 쓰세요.', '내 입장과 다른 의견의 근거를 하나 소개하고, 그에 대한 내 답을 쓰세요.', ['반대 근거를 왜곡 없이 옮겼다', '그 근거에 직접 답했다', '상대를 깎아내리는 말이 없다'], { min: 50, max: 350, sent: [2, 3], must: [['반대', '다른 의견', '그러나', '하지만']], starter: '반대 입장에서는 ~라고 말한다. 하지만 ~', plus: '반대 입장의 가장 강한 근거를 골라 답했다', d: 0.45 }),
            RWQ('입장문을 마무리하는 제안을 2문장으로 쓰세요.', '조치가 목적을 잘 이루려면 학교가 무엇을 더 해야 할지 제안하며 마무리하세요.', ['제안이 구체적이다', '피해 학생 보호나 2차 피해 방지와 이어진다', '내 입장과 이어지게 끝맺었다'], { min: 40, max: 300, sent: [2, 3], must: [['제안', '해야', '하자']], starter: '조치가 제 역할을 하려면 학교는 ~', plus: '제안을 누가·언제 할지까지 썼다', d: 0.4, more: { conclude: '조치를 처벌로만 보면 피해 학생 보호와 회복이 빠져요. 목적을 따져 말하는 글이 설득력이 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 입장문을 정리하세요.', columns: ['칸', '한 줄 요약'], cells: [['내 입장', ''], ['가장 강한 근거', ''], ['반론과 내 답', '']] }] },
      }),

      M({
        id: 'wrap.system', type: 'wrap', title: '피해 학생 보호 체계 정리',
        method: '보호 체계 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 이름(학교·교육지원청·상담·보호자)을 함께 읽고 하는 일 카드를 단다.', base: '하는 일 카드를 스스로 가지에 단다.', challenge: '빈틈이 보이는 가지 하나를 골라 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 본 절차와 조치를 피해 학생을 가운데 두고 다시 그려 봐요. 누가 어떤 일로 곁에 있나요?" 카드를 단 뒤 "이 가지 가운데 하나가 비어 있다면 피해 학생에게 어떤 일이 생길까요?"라고 묻는다. \'아이 말을 먼저 들어 줌\'을 학교 가지에만 두는 학생에게 집에서 이 일을 맡는 사람은 누구인지 되묻는다. 쉬움 반은 가지 이름을 먼저 함께 읽고, 도전 반은 빈틈 가지를 골라 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '피해 학생 보호', slots: ['학교(담임)', '교육지원청(심의위원회)', '상담(Wee 클래스)', '보호자'], cards: ['사안을 접수하고 조사함', '조치를 심의해 정함', '마음을 살피고 회복을 도움', '아이 말을 먼저 들어 줌', '피해 학생에게 사과를 시킴'] }, prompt: '하는 일 카드를 보호 체계 가지에 다세요.', target: { sort: { '학교(담임)': ['사안을 접수하고 조사함'], '교육지원청(심의위원회)': ['조치를 심의해 정함'], '상담(Wee 클래스)': ['마음을 살피고 회복을 도움'], 보호자: ['아이 말을 먼저 들어 줌'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '신고 뒤 절차에 대한 말 가운데 옳은 것을 고르세요.', options: ['신고하면 다음 날 바로 처분이 나온다', '사실을 조사하고 심의를 거쳐 조치가 정해진다', '조치가 나오면 보호는 끝난다'], answer: 1, difficulty: 0.15, explain: '신고 뒤에는 사안 조사와 심의를 거치고, 조치가 지켜지는지 확인하는 것까지 보호예요.' },
            { type: 'short', prompt: '보호 체계에서 빈틈이 생길 수 있는 가지 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '피해 학생 보호 체계',
          items: [
            { type: 'table', prompt: '가지마다 하는 일을 쓰세요.', columns: ['가지', '하는 일'], cells: [['학교(담임)', ''], ['교육지원청(심의위원회)', ''], ['상담(Wee 클래스)', ''], ['보호자', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '학교폭력 신고는 117로도 할 수 있고, 지금 위험하면 ___에 신고한다.', answer: '112' },
          ],
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '2차 피해 방지 점검표',
        method: '2차 피해 방지 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검표 앞 세 항목을 함께 읽고 표시한다.', base: '항목 일곱 가운데 함정 두 개를 빼고 다섯 개를 표시한다.', challenge: '학급이 함께 지킬 항목 하나를 골라 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"사건이 알려진 뒤 우리 반이 하는 말과 행동이 피해 학생을 또 다치게 할 수 있어요. 이것을 2차 피해라고 해요." 함정 항목 \'무슨 일이 있었는지 피해 학생에게 자세히 묻기\'에 표시한 학생에게 "걱정하는 마음이어도, 같은 이야기를 여러 번 해야 하는 친구는 어떨까요?"라고 묻는다. 도전 반은 학급이 함께 지킬 항목을 골라 학급 약속으로 이어 간다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '2차 피해 방지 점검표', items: [{ id: 'rumor', text: '사건 이야기를 퍼뜨리지 않는다' }, { id: 'blame', text: '피해 학생을 탓하지 않는다' }, { id: 'who', text: '누가 신고했는지 캐묻지 않는다' }, { id: 'sns', text: 'SNS에 사건 이야기를 올리지 않는다' }, { id: 'usual', text: '피해 학생을 평소처럼 대한다' }, { id: 'ask', text: '피해 학생에게 무슨 일인지 자세히 묻는다' }, { id: 'side', text: '친한 쪽 편을 드는 단톡방에 들어간다' }] }, prompt: '2차 피해를 막는 행동만 표시하세요.', target: { checklist: ['rumor', 'blame', 'who', 'sns', 'usual'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구가 "신고한 애가 누군지 알아?"라고 물을 때 알맞은 말은?', options: ['아는 대로 짐작을 말해 준다', '"누가 했는지는 중요하지 않아, 묻지 말자"고 한다', '모른 척 웃고 넘긴다'], answer: 1, difficulty: 0.15, explain: '신고한 사람을 찾는 것은 보복과 2차 피해로 이어질 수 있어요. 신고한 사람은 잘한 것이에요.' },
            { type: 'short', prompt: '우리 반이 함께 지킬 2차 피해 방지 약속 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '2차 피해 방지',
          items: [
            { type: 'check', prompt: '2차 피해를 막는 행동에 표시하세요.', options: ['소문 퍼뜨리지 않기', '피해 학생 탓하지 않기', '신고자 캐묻지 않기', 'SNS에 올리지 않기', '평소처럼 대하기'] },
            { type: 'short', prompt: '피해 학생을 평소처럼 대한다는 것은 어떤 행동인지 예를 들어 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 딥페이크·디지털 성범죄, 동의와 유포 금지 (10학년)
  // ======================================================================================================
  {
    const M = MOD('deepfake', [10]);
    const SURVEY = [['1학년', 62], ['2학년', 70], ['3학년', 78]];
    const SURVEY_T = '"합성물도 범죄다" 응답 비율(가상)';
    // 갈림 2번(쉬움)·3번(기본)·3번 + 다른 길까지 끝까지(도전)
    const DIL23 = (prompt, scene, paths, reasons, good, { d = 0.4, more = {} } = {}) => {
      const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
      return Object.assign({ prompt, toolOptions: { scene, reasons }, target: at(3), difficulty: d,
        levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
          challenge: { prompt: pfx(prompt, '다른 길에서 수아에게 생긴 일도 끝까지'), target: Object.assign(at(3), { explore: 2 }) } } }, more);
    };
    const ROOM = { text: '반 단톡방에 같은 반 수아의 얼굴을 합성한 성적인 이미지가 올라왔다는 알림이 떴다. 너는 아직 열어 보지 않았다.', who: '같은 반 학생', motif: 'house', choices: [
      { id: 'act', text: '열지 않고, 올린 사람에게 내리라 한 뒤 담임 선생님께 알린다', result: '선생님이 "잘 알려 줬다"며 학교가 신고와 삭제 지원을 돕겠다고 한다.', impact: [{ who: '수아', text: '더 퍼지기 전에 멈춘다', tone: 1 }, { who: '알린 학생', text: '잘한 일이라는 말을 듣는다', tone: 1 }],
        next: { text: '수아는 아직 이 일을 모른다. 반 친구 몇이 수군거리기 시작했다.', who: '같은 반 학생', choices: [
          { id: 'care', text: '수아가 혼자 알게 되지 않게 선생님과 함께 조용히 만나자고 한다', result: '상담 선생님이 함께한 자리에서 수아가 이야기를 듣는다.', impact: [{ who: '수아', text: '곁에 사람이 있다', tone: 1 }],
            next: { text: '수아가 "내가 사진을 올려서 그런가 봐"라며 자신을 탓한다.', choices: [
              { id: 'notyou', text: '"네 잘못이 아니야, 만든 사람과 퍼뜨린 사람 잘못이야"라고 말한다', result: '수아가 울다가 상담을 이어 가기로 한다.', impact: [{ who: '수아', text: '자책에서 조금 벗어난다', tone: 1 }], ending: '잘못은 만든 사람과 퍼뜨린 사람에게 있다. 피해자는 탓할 대상이 아니다.' },
              { id: 'advise', text: '"앞으로는 사진을 올리지 마"라고 충고한다', result: '수아가 더 움츠러들고 말을 멈춘다.', impact: [{ who: '수아', text: '자기 탓이라고 믿게 된다', tone: -1 }], ending: '피해자의 행동을 고치라는 말은 잘못을 피해자에게 돌린다.' }] } },
          { id: 'blast', text: '반 전체에 "수아 합성물 돌았대, 조심해"라고 알린다', result: '걱정하는 말이었지만 이야기가 더 퍼진다.', impact: [{ who: '수아', text: '모두가 아는 일이 되어 더 힘들다', tone: -1 }], ending: '피해 사실을 퍼뜨리면 걱정이어도 2차 피해가 된다.' }] } },
      { id: 'silent', text: '모른 척 아무것도 하지 않는다', result: '이미지가 다른 반 단톡방까지 퍼진다.', impact: [{ who: '수아', text: '피해가 커진다', tone: -1 }],
        next: { text: '다음 날, 다른 반 친구가 "그거 봤어?"라고 묻는다.', choices: [
          { id: 'late', text: '지금이라도 담임 선생님께 알린다', result: '학교가 신고와 삭제 지원을 시작한다.', impact: [{ who: '수아', text: '늦었지만 보호가 시작된다', tone: 0 }],
            next: { text: '선생님이 "알려 줘서 고맙다"며 받은 사람이 할 일을 묻는다.', choices: [
              { id: 'delete', text: '받은 것은 저장·전달하지 않고 지웠다고 말한다', result: '선생님이 주변 학생들에게도 같은 원칙을 알린다.', impact: [{ who: '수아', text: '퍼지는 길이 줄어든다', tone: 1 }], ending: '늦게라도 알리고, 받은 것은 남기지 않는다.' },
              { id: 'keep', text: '증거라며 내 휴대폰에 저장해 두었다고 한다', result: '선생님이 저장한 것도 지우게 하고 증거는 학교·경찰이 다룬다고 한다.', impact: [{ who: '수아', text: '퍼질 길이 하나 남아 있었다', tone: 0 }], ending: '증거는 직접 모으지 말고 어른과 기관에 맡긴다.' }] } },
          { id: 'still', text: '귀찮아질까 봐 계속 모른 척한다', result: '수아는 학교에 나오지 못한다.', impact: [{ who: '수아', text: '혼자 견딘다', tone: -1 }], ending: '침묵이 이어지는 동안 피해도 이어진다.' }] } },
      { id: 'forward', text: '"이거 봤어?"라며 다른 방에 전달한다', result: '이미지가 순식간에 여러 방으로 퍼진다.', impact: [{ who: '수아', text: '피해가 걷잡을 수 없이 커진다', tone: -1 }], ending: '전달도 유포다. 받은 것을 넘기는 순간 피해를 키운다.' }] };
    const ROOM_R = [{ id: 'crime', text: '합성물이라도 동의 없는 제작·유포는 범죄다' }, { id: 'nofwd', text: '받은 것은 저장·전달하지 않는다' }, { id: 'noblame', text: '피해자를 탓하지 않는다' }, { id: 'fake', text: '진짜 사진이 아니니 장난이다', why: '합성물도 피해자의 얼굴과 삶을 다치게 하는 범죄예요.' }, { id: 'public', text: '공개된 사진을 썼으니 괜찮다', why: '사진이 공개돼 있어도 합성·유포에 동의한 것은 아니에요.' }];
    const FUNNY = { text: '친구 지훈이가 반 친구 얼굴로 웃긴 합성 영상을 만들어 단톡방에 올리자고 한다. 그 친구에게는 묻지 않았다.', who: '친구', motif: 'star', choices: [
      { id: 'stop', text: '"본인한테 묻지도 않았잖아, 하지 말자"고 말린다', result: '지훈이가 "그냥 장난인데?"라고 한다.', impact: [{ who: '반 친구', text: '아직 피해가 없다', tone: 1 }],
        next: { text: '지훈이가 "한 번만 같이 만들자"고 다시 조른다.', choices: [
          { id: 'firm', text: '동의 없는 합성은 장난이 아니라며 끝까지 거절한다', result: '지훈이가 영상을 만들지 않기로 한다.', impact: [{ who: '반 친구', text: '얼굴이 함부로 쓰이지 않는다', tone: 1 }], ending: '동의를 묻는 것이 존중의 시작이다.' },
          { id: 'once', text: '한 번만이라며 같이 만든다', result: '영상이 단톡방에 올라가 놀림거리가 된다.', impact: [{ who: '반 친구', text: '상처를 받는다', tone: -1 }], ending: '한 번이라도 동의 없는 합성은 피해를 남긴다.' }] } },
      { id: 'make', text: '재미있겠다며 같이 만든다', result: '영상이 퍼지고 그 친구가 수업에 들어오지 못한다.', impact: [{ who: '반 친구', text: '큰 상처를 받는다', tone: -1 }], ending: '웃자고 만든 합성도 동의가 없으면 폭력이다.' }] };
    const FUNNY_R = [{ id: 'consent', text: '내 얼굴·몸이 쓰이는 일에는 본인의 동의가 먼저다' }, { id: 'harm', text: '웃긴 합성도 놀림과 사이버폭력이 될 수 있다' }, { id: 'joke', text: '장난이면 동의 없이도 괜찮다', why: '장난인지는 만든 사람이 아니라 당하는 사람이 느끼는 것으로 따져요.' }];

    MODS.push(
      M({
        id: 'intro.news', type: 'intro', title: '가상 기사로 본 합성물 사건',
        method: '가상 기사 요약 읽기', tool: 'story', minutes: 6,
        levels: { easy: '기사 요약 칸 3개(합성·올림·전달)만 함께 읽고 피해가 커진 칸을 고른다.', base: '요약 칸 5개를 차례로 읽고 피해가 커진 칸을 모두 고른다.', challenge: '피해를 멈출 수 있었던 칸을 골라 그 까닭을 말한다.' },
        intro: {
          teacher: '"가상 기사예요. 어느 학교에서 학생 얼굴을 합성한 이미지가 퍼졌어요. 자세한 장면은 다루지 않고, 피해가 어디서 커졌는지만 봐요." 칸을 차례로 넘기며 두세 명에게 피해가 커진 칸을 고르게 하고, 시연 단추로 \'올림\'·\'전달\' 칸이 담기는 모습을 보여 준다. "만든 사람만 잘못이고 전달한 사람은 괜찮다"는 말이 나오면 "전달한 칸에서 이미지를 본 사람은 몇 명으로 늘었을까요?"라고 되묻는다. 오늘은 장난이 아니라 범죄라는 점과 내가 할 수 있는 행동을 다룬다고 밝힌다.',
          student: '가상 기사 요약 칸을 차례로 읽고, 피해가 커진 칸을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '피해가 커진 칸', title: '가상 기사 요약', cards: [{ id: 'make', text: '한 학생이 친구 얼굴로 합성물을 만듦', motif: 'cloud' }, { id: 'post', text: '합성물을 작은 단톡방에 올림', motif: 'house' }, { id: 'fwd', text: '본 학생들이 다른 방으로 전달함', motif: 'star' }, { id: 'tell', text: '한 학생이 열지 않고 선생님께 알림', motif: 'sun' }, { id: 'school', text: '학교가 신고와 삭제 지원을 도움', motif: 'leaf' }], shuffle: false }, sequence: [{ pick: ['post', 'fwd'] }] },
          art: { draw: 'a folded paper newspaper on a desk with a blurred paper phone screen, chat bubbles multiplying from one phone to many, and one paper student raising a hand toward a teacher', banner: '피해는 어디서 커졌을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '기사는 가상이며 이미지 내용은 묘사하지 않는다. 실제 사건 기사를 띄우지 않는다. 학생 가운데 관련 경험이 있을 수 있음을 전제로, 듣기 힘들면 언제든 상담 선생님께 갈 수 있다고 미리 말해 준다.',
      }),
      M({
        id: 'intro.survey', type: 'intro', title: '가상 설문 막대 읽기',
        method: '가상 설문 막대 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 값이 보이는 판으로 학년별 차이를 함께 읽는다.', base: '값 표시 없이 막대를 읽고 학년별 차이를 해석한다.', challenge: '자료가 가상임을 밝히고, 실제 조사라면 확인할 점(대상·질문 문장)을 말한다.' },
        intro: {
          teacher: '"가상 설문이에요. \'합성물도 범죄다\'라고 답한 학생 비율이 학년마다 달라요. 1학년 막대가 가장 짧다면 무엇을 해야 할까요?" 시연 단추로 가장 짧은 막대가 골라지는 모습을 보여 준다. "응답 비율이 높으니 우리 학교는 문제없다"는 말이 나오면 "10명 가운데 2~3명이 아직 범죄가 아니라고 생각한다면, 그 친구들이 받은 것을 전달할 수 있을까요?"라고 되묻는다. 숫자는 가상이고, 실제 조사라면 누구에게 어떤 질문으로 물었는지부터 본다는 점을 짚는다.',
          student: '가상 설문 막대그래프에서 학년별 응답 차이를 읽고, 그 차이가 무엇을 뜻하는지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: SURVEY_T, unit: '%', xLabel: '학년', yLabel: '응답 비율', data: SURVEY, question: '가장 짧은 막대는?', choices: SURVEY.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'three paper bar columns of different heights standing on a desk like paper towers, a small paper clipboard with a survey form and a pencil beside them', banner: '모두가 알고 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 가상 값이다. 실제 설문을 반에서 하지 않으며, 학생 개인의 응답이나 경험을 묻지 않는다.',
      }),

      M({
        id: 'activity.acts', type: 'activity', title: '행위 카드와 근거',
        method: '행위 카드를 범죄 여부로 나누고 근거 붙이기', tool: 'story', minutes: 18,
        levels: { easy: '행위 카드 4장을 두 칸에 바로 확인하며 나눈다.', base: '행위 카드 7장을 나누고, 범죄가 될 수 있는 행위마다 근거를 짝짓는다.', challenge: '헷갈리는 카드 2장이 더해진 9장을 나누고, 근거를 피해자 입장에서 다시 쓴 카드를 고른다.' },
        activity: {
          title: '행위 두 칸 나누기', tool: 'story',
          teacher: '"오늘 카드는 모두 가상 행위예요. \'범죄가 될 수 있는 행위\'와 \'피해를 막는 행동\'으로 나눠 봐요." 카드를 놓을 때마다 "누구의 동의가 빠졌나요?"라고 묻는다. \'공개 계정의 사진으로 합성함\'을 피해를 막는 칸이나 밖에 두는 학생에게 "사진을 공개한 것과 합성해도 된다고 허락한 것은 같을까요?"라고 되묻는다. 만들지 않았어도 받은 것을 전달하거나 남겨 두는 것이 피해를 키운다는 점을 짚는다.',
          task: '행위 카드를 두 칸에 나누고 근거를 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 행위 카드를 두 칸에 나누세요.', ['범죄가 될 수 있는 행위', '피해를 막는 행동'], [
              ['친구 얼굴로 성적인 합성물을 만들어 보냄', '받은 합성물을 다른 방에 전달함', '"진짜 아니니까"라며 합성물을 올림', '받은 합성물을 휴대폰에 저장해 둠'],
              ['열지 않고 지운 뒤 선생님께 알림', '올린 사람에게 내리라고 말함', '피해 친구에게 네 잘못이 아니라고 말함'],
            ], { k: 2, hard: [['공개 계정의 사진으로 합성함'], ['신고 방법을 피해 친구와 함께 찾음']], d: 0.3 }),
            MATCHQ('범죄가 될 수 있는 행위마다 근거를 짝지으세요.', [['친구 얼굴로 성적인 합성물을 만들어 보냄', '동의 없는 제작은 범죄다'], ['받은 합성물을 다른 방에 전달함', '전달도 유포에 들어간다'], ['"진짜 아니니까"라며 합성물을 올림', '합성물도 디지털 성범죄다']], { k: 2, extra: ['피해자가 사진을 올렸기 때문이다'], d: 0.35, more: { hints: ['누구의 동의가 빠졌는지, 행위가 피해를 퍼뜨리는지 생각해요.'] } }),
            (() => {
              const q = PICKQ('피해자 입장에서 쓴 근거만 고르세요.', ['내 얼굴이 내 뜻과 달리 쓰여 일상이 무너진다', '지워도 어디에 남았을지 몰라 불안하다'], ['만든 사람이 처벌받을까 걱정된다', '사진을 올린 피해자가 조심했어야 한다'], { d: 0.4, opt: { basket: '피해자 입장의 근거' }, more: { conclude: '합성물은 진짜가 아니어도 피해자의 얼굴과 일상을 다치게 해요. 잘못은 만든 사람과 퍼뜨린 사람에게 있어요.' } });
              q.levels = { challenge: { prompt: '피해자 입장에서 쓴 근거만 모두 고르세요(헷갈리는 카드 2장 더).', toolOptions: { cards: [...q.toolOptions.cards, '친구들이 나를 어떻게 볼지 두려워 학교에 가기 어렵다', '장난이었는데 일이 커졌다'] }, target: { pick: ['내 얼굴이 내 뜻과 달리 쓰여 일상이 무너진다', '지워도 어디에 남았을지 몰라 불안하다', '친구들이 나를 어떻게 볼지 두려워 학교에 가기 어렵다'] } } };
              return q;
            })(),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'받기만 했는데 무슨 잘못이냐\'는 친구에게, 전달과 저장이 왜 피해를 키우는지 한두 문장으로 쓰세요.' }] },
        notes: '\'사진을 올린 피해자가 조심했어야 한다\'는 함정 카드다. 고른 학생이 있으면 잘못은 만든 사람과 퍼뜨린 사람에게 있다고 분명히 바로잡는다. 행위의 처벌 수위는 다루지 않는다.',
      }),
      M({
        id: 'activity.choice', type: 'activity', title: '단톡방 합성물 갈림길',
        method: '단톡방에 합성물이 올라온 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 둘까지 가 보고 근거를 고른다.', base: '갈림길 셋을 지나 수아에게 일어난 일을 보고 근거를 고른다.', challenge: '갈림길 셋을 지난 뒤 침묵·전달 길도 끝까지 가 보고, 길마다 수아에게 일어난 일을 견준다.' },
        activity: {
          title: '단톡방 알림이 떴을 때', tool: 'dilemma',
          teacher: '"단톡방에 같은 반 친구 얼굴을 합성한 이미지가 올라왔다는 알림이 떴어요. 열기 전, 지금 할 수 있는 선택은 무엇일까요?" 장면마다 수아에게 생기는 영향을 먼저 읽게 한다. \'다른 방에 전달\'을 고른 학생에게 "나는 만들지 않았는데, 이 선택 뒤에 이미지를 본 사람은 얼마나 늘었나요?"라고 묻는다. 수아가 자신을 탓하는 장면에서는 "\'사진 올리지 마\'라는 충고는 잘못이 누구에게 있다고 말하는 걸까요?"라고 되묻고, 잘못은 만든 사람과 퍼뜨린 사람에게 있다는 점을 분명히 말한다.',
          task: '합성물이 올라온 단톡방의 갈림길을 따라가며 피해를 멈추는 길과 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL23('합성물이 올라온 단톡방에서 피해를 멈추는 길을 고르고 근거를 고르세요.', ROOM, [['act', 'care', 'notyou']], ROOM_R, ['crime', 'nofwd', 'noblame'], { d: 0.4 }),
            DILQ('웃긴 합성 영상을 같이 만들자는 친구 앞에서 알맞은 길을 고르고 근거를 고르세요.', FUNNY, [['stop', 'firm']], FUNNY_R, ['consent', 'harm'], { d: 0.35 }),
            EXPLOREQ('합성 영상 상황에서 \'같이 만든다\' 길도 끝까지 가 보고 결과를 견주세요.', FUNNY, FUNNY_R, ['다른 길의 끝 장면을 확인했다', '두 길에서 얼굴이 쓰인 친구에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '열지 않기·전달하지 않기·알리기·피해자 곁에 서기가 피해를 멈추는 길이에요. 동의 없는 합성은 장난이 아니에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '자신을 탓하는 친구에게 건넬 말을 한두 문장으로 쓰세요.' }] },
        notes: '이미지 내용은 묘사하지 않는다. 인물은 가상이다. 받은 것을 \'증거\'라며 학생이 직접 저장·수집하지 않게 하고, 증거 확보는 학교와 경찰이 맡는다고 말해 준다.',
      }),
      M({
        id: 'activity.support', type: 'activity', title: '피해 영향과 지원 정리',
        method: '피해자에게 생기는 영향과 지원 정리', tool: 'mindmap', minutes: 18,
        levels: { easy: '지원 가지 넷에 지원 카드 4장(가지마다 1장)을 바로 확인하며 단다.', base: '지원 카드 8장을 네 가지에 달고, 피해 영향마다 필요한 지원을 짝짓는다.', challenge: '헷갈리는 카드 4장이 더해진 12장을 섞어 달고, 지원이 닿지 않는 빈틈을 고른다.' },
        activity: {
          title: '영향과 지원 가지', tool: 'mindmap',
          teacher: '"피해를 입은 친구에게 무엇이 필요할까요? 오늘은 지원을 삭제 지원·상담·신고·학교 보호 네 가지로 나눠 봐요." 카드를 단 뒤 영향마다 필요한 지원을 짝짓게 한다. "신고만 하면 다 해결된다"는 학생에게 \'지워도 남았을까 불안함\' 카드를 가리키며 "이 불안은 신고 한 번으로 사라질까요?"라고 묻는다. 지원은 하나가 아니라 여러 갈래가 함께 필요하고, 도움은 112·117·1388과 담임·상담 선생님으로 이어진다는 점을 짚는다.',
          task: '지원 카드를 네 가지에 달고, 피해 영향마다 필요한 지원을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('지원 카드를 알맞은 가지에 다세요.', ['삭제 지원', '상담', '신고', '학교 보호'], [
              ['퍼진 이미지를 찾아 지우도록 요청함', '다시 올라오는지 살펴 삭제를 이어 감'],
              ['불안한 마음을 털어놓고 회복을 도움', '1388에서 고민을 상담함'],
              ['112에 알려 수사를 요청함', '117에 학교폭력으로 신고함'],
              ['가해 학생과 떨어지게 함', '학급에서 소문이 돌지 않게 막음'],
            ], { k: 1, hard: [['삭제 요청 기록을 남겨 둠'], ['Wee 클래스에서 꾸준히 만남'], ['보호자와 함께 신고함'], ['담임 선생님이 안부를 살핌']], d: 0.3, opt: { topic: '피해자 지원' } }),
            MATCHQ('피해 영향마다 가장 먼저 필요한 지원을 짝지으세요.', [['지워도 어딘가 남았을까 불안함', '삭제 지원'], ['자신을 탓하며 잠을 못 잠', '상담'], ['만든 사람이 또 올릴까 두려움', '신고'], ['교실에서 수군거림이 들림', '학교 보호']], { k: 2, d: 0.35, more: { hints: ['그 영향을 줄여 줄 수 있는 사람이나 기관이 누구인지 생각해요.'] } }),
            PICKQ('지원이 닿지 않는 빈틈만 고르세요.', ['어디에 말해야 할지 몰라 혼자 견딤', '친구들이 계속 몰래 전달함'], ['상담 선생님과 꾸준히 만남', '삭제 요청을 학교와 함께 함'], { d: 0.4, opt: { basket: '지원의 빈틈' }, more: { conclude: '지원은 삭제·상담·신고·학교 보호가 함께 이어질 때 힘이 생겨요. 빈틈은 \'말할 곳을 모름\'과 \'계속되는 전달\'에서 생겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 찾은 빈틈 하나를 메우려면 학교나 친구가 무엇을 하면 좋을지 쓰세요.' }] },
        notes: '삭제 지원은 특정 기관 이름 없이 다룬다. 실제 삭제 지원 경로는 학교 상담 선생님과 112·117·1388 안내로 이어 준다.',
      }),
      M({
        id: 'activity.cardnews', type: 'activity', title: '캠페인 카드뉴스 문구',
        method: '학교 캠페인 카드뉴스 문구 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '카드뉴스 장마다 문장 틀을 보고 쓴다.', base: '틀 없이 세 장의 문구를 쓰고 기준표(동의·유포 금지·피해자 탓 없음·도움 경로)로 점검한다.', challenge: '장마다 기준 하나가 더 붙어, 읽을 대상(1학년·학부모)에 맞게 문구를 바꾼다.' },
        activity: {
          title: '카드뉴스 세 장', tool: 'rubric-writing',
          teacher: '"학교 캠페인 카드뉴스 세 장을 만들어요. 1장은 \'합성물도 범죄\', 2장은 \'받았다면\', 3장은 \'도움받을 곳\'이에요." 쓰기 전에 기준표를 함께 읽는다. "사진을 함부로 올리지 마세요"라고 쓴 학생에게 "이 문구는 누구에게 조심하라고 말하나요? 잘못한 사람에게 하는 말로 바꿔 볼까요?"라고 묻는다. 캠페인 문구는 피해자에게 책임을 지우지 않고, 하지 말아야 할 행동과 도움 경로를 분명히 한다는 점을 짚는다.',
          task: '카드뉴스 세 장의 문구를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('카드뉴스 1장 \'합성물도 범죄\' 문구를 2문장으로 쓰세요.', '1장: 합성물도 디지털 성범죄라는 것과 동의의 원칙을 알리는 문구를 쓰세요.', ['동의 없는 제작은 범죄라는 점을 썼다', '피해자를 탓하는 말이 없다', '짧고 분명하다'], { min: 30, max: 200, sent: [1, 3], must: [['동의']], starter: '진짜 사진이 아니어도 ~. 동의 없이 ~', plus: '1학년이나 학부모가 읽기 쉬운 말로 바꾸었다', d: 0.35 }),
            RWQ('카드뉴스 2장 \'받았다면\' 문구를 2문장으로 쓰세요.', '2장: 합성물을 받았을 때 할 행동(열지 않기·저장·전달하지 않기·알리기)을 쓰세요.', ['저장·전달하지 않는다는 점을 썼다', '알릴 사람을 썼다', '피해자를 탓하는 말이 없다'], { min: 30, max: 200, sent: [1, 3], must: [['전달', '유포', '저장']], starter: '받았다면 열지 말고 ~. 그리고 ~에게 알려요.', plus: '읽을 대상에 맞게 말투를 정했다', d: 0.35 }),
            RWQ('카드뉴스 3장 \'도움받을 곳\' 문구를 2문장으로 쓰세요.', '3장: 피해를 입었거나 본 사람이 도움받을 곳을 알리고 응원하는 문구를 쓰세요.', ['도움 경로(112·117·1388·상담 선생님) 가운데 둘 이상을 썼다', '말한 사람을 응원하는 말을 썼다', '피해자를 탓하는 말이 없다'], { min: 30, max: 200, sent: [1, 3], must: [['112', '117', '1388']], starter: '혼자 견디지 마세요. ~', plus: '대상(1학년 또는 학부모)이 바로 할 수 있는 행동으로 끝맺었다', d: 0.4, more: { conclude: '좋은 캠페인 문구는 동의·유포 금지·도움 경로를 담고, 잘못을 피해자에게 돌리지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '카드뉴스 세 장의 제목과 핵심 문구를 정리하세요.', columns: ['장', '제목', '핵심 문구'], cells: [['1장', '합성물도 범죄', ''], ['2장', '받았다면', ''], ['3장', '도움받을 곳', '']] }] },
        notes: '문구에 실제 학생 이름·사건을 넣지 않는다. 피해자에게 \'조심하라\'고 책임을 지우는 문구는 고쳐 쓰게 한다.',
      }),

      M({
        id: 'wrap.rules', type: 'wrap', title: '맞는 원칙과 틀린 문장',
        method: '핵심 원칙 문장 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 카드 두 장을 함께 가른 뒤 나머지를 가른다.', base: '문장 카드 6장을 맞는 원칙·틀린 문장으로 가른다.', challenge: '틀린 문장 하나를 골라 바르게 고쳐 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 원칙을 문장으로 정리해 봐요. 맞는 원칙과 틀린 문장을 가를 수 있나요?" 가른 뒤 틀린 문장 하나를 골라 함께 고친다. \'공개된 사진이면 합성해도 된다\'를 맞는 원칙에 둔 학생에게 "공개한 것과 합성에 동의한 것은 같은가요?"라고 되묻는다. 쉬움 반은 첫 두 장을 함께 가르고 시작한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', slots: ['맞는 원칙', '틀린 문장'], cards: ['합성물도 디지털 성범죄다', '받은 것은 저장·전달하지 않는다', '잘못은 만든 사람과 퍼뜨린 사람에게 있다', '진짜 사진이 아니면 장난이다', '공개된 사진이면 합성해도 된다', '피해자가 조심했어야 한다'] }, prompt: '문장 카드를 맞는 원칙과 틀린 문장으로 가르세요.', target: { sort: { '맞는 원칙': ['합성물도 디지털 성범죄다', '받은 것은 저장·전달하지 않는다', '잘못은 만든 사람과 퍼뜨린 사람에게 있다'], '틀린 문장': ['진짜 사진이 아니면 장난이다', '공개된 사진이면 합성해도 된다', '피해자가 조심했어야 한다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '합성물을 받았을 때 가장 먼저 할 행동은?', options: ['무엇인지 확인하려고 열어 본다', '열지 않고 저장·전달하지 않은 채 믿을 어른에게 알린다', '증거로 여러 곳에 저장해 둔다'], answer: 1, difficulty: 0.15, explain: '열거나 저장·전달하면 피해가 커질 수 있어요. 증거는 학교와 경찰이 다뤄요.' },
            { type: 'short', prompt: '틀린 문장 하나를 골라 바르게 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '디지털 성범죄 예방 원칙',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '내 얼굴과 몸이 쓰이는 일에는 본인의 ___가 먼저다.', answer: '동의' },
            { type: 'short', prompt: '\'피해자가 조심했어야 한다\'는 말을 바르게 고쳐 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '받았을 때 행동 점검',
        method: '오늘 배운 행동 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '앞 세 항목(열지 않기·전달하지 않기·알리기)을 함께 읽고 표시한다.', base: '다섯 항목을 스스로 점검해 표시한다.', challenge: '친구에게 꼭 알려 줄 항목 하나를 골라 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"합성물을 받는 순간을 떠올려 봐요. 그때 나는 무엇을 할까요? 다짐을 솔직하게 표시해 봐요." 표시한 뒤 친구에게 알려 줄 항목을 고르게 한다. "나는 그런 걸 받을 일 없다"는 학생에게 "단톡방은 내가 고르지 않아도 알림이 오는 곳이에요. 그때를 미리 정해 두면 어떨까요?"라고 묻는다. 도움 경로(112·117·1388·상담 선생님)를 다시 함께 읽는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '합성물을 받았을 때' }, prompt: '합성물을 받았을 때 할 행동을 떠올리며 스스로 점검해 표시하세요.', target: { selfCheck: ['열어 보지 않는다', '저장하거나 전달하지 않는다', '믿을 어른(담임·상담 선생님·보호자)에게 알린다', '피해 친구를 탓하지 않고 곁에 선다', '필요하면 112·117·1388에 도움을 청한다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '친구가 "나도 받았는데 그냥 지웠어"라고 할 때 더 해 줄 말로 알맞은 것은?', options: ['잘했어, 이제 잊어', '지운 건 잘했어. 퍼지지 않게 선생님께도 같이 알리자', '누가 만들었는지 같이 찾아보자'], answer: 1, difficulty: 0.15, explain: '저장·전달하지 않은 것은 잘한 일이에요. 퍼지는 것을 막으려면 믿을 어른에게도 알려요.' },
            { type: 'short', prompt: '친구에게 꼭 알려 주고 싶은 행동 하나와 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '합성물을 받았을 때',
          items: [
            { type: 'check', prompt: '내가 할 행동에 표시하세요.', options: ['열지 않기', '저장·전달하지 않기', '믿을 어른에게 알리기', '피해 친구 곁에 서기', '112·117·1388'] },
            { type: 'short', prompt: '피해를 입은 친구에게 건넬 응원의 말을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '학생 자신의 경험을 묻지 않는다. 점검은 앞으로의 다짐이다.',
      }),
    );
  }

  // ======================================================================================================
  // 4. 나와 타인의 소중함, 존중하는 관계의 기준 (10학년)
  // ======================================================================================================
  {
    const M = MOD('worth', [10]);
    const VALUES = [['믿음', 34], ['존중', 26], ['재미', 18], ['함께 보낸 시간', 14], ['비슷한 취미', 8]];
    const CIRCLE = (q, more = {}) => Object.assign({ type: 'circle', mode: 'read', title: '관계에서 가장 중요한 것(가상 학급 설문)', unit: '%', data: VALUES, question: q }, more);

    MODS.push(
      M({
        id: 'intro.moment', type: 'intro', title: '존중받는 순간, 무시당하는 순간',
        method: '존중받는 순간과 무시당하는 순간의 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '두 장면의 마음 카드 4장(장면마다 2장)만 함께 나눈다.', base: '마음 카드 8장을 두 장면에 나누고 고른 까닭을 말한다.', challenge: '두 마음이 그 뒤의 관계(다시 말을 꺼낼지, 멀어질지)에 줄 영향을 짝과 말한다.' },
        intro: {
          teacher: '"모둠 회의에서 가상 인물 서진이가 의견을 말하는 두 장면이에요. 한 장면에서는 친구가 끝까지 들어 주고, 다른 장면에서는 \'됐고\' 하며 말을 잘라요." 시연 단추로 마음 카드가 두 장면에 나뉘는 모습을 보여 준다. "말 좀 자른 게 뭐가 대수냐"는 말이 나오면 "말이 잘린 서진이는 다음 회의에서 의견을 또 꺼낼까요?"라고 되묻는다. 존중은 큰 일이 아니라 이런 작은 순간에 드러난다는 점을 짚고, 오늘은 나와 남을 소중히 하는 관계의 기준을 세운다고 밝힌다.',
          student: '가상 인물 서진이가 의견을 말하는 두 장면을 떠올리며, 장면마다 서진이에게 생겼을 마음을 나누어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['끝까지 들어 준 장면', '말이 잘린 장면'], cards: [{ id: 'calm', text: '편안함' }, { id: 'thanks', text: '고마움' }, { id: 'proud', text: '뿌듯함' }, { id: 'joy', text: '신남' }, { id: 'sad', text: '속상함' }, { id: 'upset', text: '서운함' }, { id: 'angry', text: '화남' }, { id: 'worry', text: '걱정' }], shuffle: false }, sequence: [{ sort: { '끝까지 들어 준 장면': ['calm', 'thanks', 'proud', 'joy'], '말이 잘린 장면': ['sad', 'upset', 'angry', 'worry'] } }] },
          art: { draw: 'two paper meeting tables side by side, on the left a paper student speaking while friends lean in to listen, on the right the same student cut off by a hand gesture, small paper speech bubbles', banner: '존중은 작은 순간에 보여요', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학생 자신이 무시당한 일을 발표시키지 않는다. 가상 인물의 장면으로만 다룬다.',
      }),
      M({
        id: 'intro.values', type: 'intro', title: '관계에서 가장 중요한 것 그래프',
        method: '가상 설문 원그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '조각마다 비율 값을 보이고 가장 큰 조각을 함께 찾는다.', base: '값 없이 조각 크기만 보고 가장 큰 조각을 고른 뒤 내 생각과 견준다.', challenge: '그래프에 없는 가치(예: 경계 지키기)를 하나 제안하고 까닭을 말한다.' },
        intro: {
          teacher: '"가상의 학급 설문이에요. \'관계에서 가장 중요한 것 하나\'를 골랐더니 이렇게 나왔어요. 가장 큰 조각은 무엇일까요? 여러분이 골랐다면 어느 조각에 들어갔을까요?" 시연 단추로 가장 큰 조각이 골라지는 모습을 보여 준다. "가장 많이 고른 것이 정답"이라는 말이 나오면 "적게 고른 \'존중\'이 없는 믿음은 어떤 모습일까요?"라고 되묻는다. 설문은 생각의 분포를 보여 줄 뿐 옳고 그름을 정하지 않는다는 점을 짚는다.',
          student: '가상 학급 설문 원그래프에서 가장 큰 조각을 찾고, 내가 관계에서 가장 중요하게 여기는 것과 견주어 보세요.',
          demo: { tool: 'chart', options: CIRCLE('가장 큰 조각은?', { choices: VALUES.map((x) => x[0]), showValues: true }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart cut into five colored slices labeled with small paper icons of a handshake, a heart, a smile, a clock and a game controller, two paper students comparing notes beside it', banner: '관계에서 가장 중요한 것은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 수업용 가상 자료다. 학생의 실제 응답을 모아 공개하지 않는다.',
      }),

      M({
        id: 'activity.signals', type: 'activity', title: '건강한 신호, 해로운 신호',
        method: '관계 행동을 건강·해로움으로 나누기', tool: 'story', minutes: 18,
        levels: { easy: '친구·가족·연인 관계의 행동 카드 5장을 건강한 신호·해로운 신호로 나눈다(바로 피드백).', base: '카드 8장을 나누고, 해로운 신호로 본 근거를 고르며, 행동과 그 행동이 지키는 것을 짝짓는다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 활동지에 상황에 따라 달라지는 행동의 조건을 쓴다.' },
        activity: {
          title: '관계 행동 두 갈래 나누기', tool: 'story',
          teacher: '"친구, 가족, 연인 사이에서 볼 수 있는 행동 카드예요. 관계를 건강하게 하는 신호와 해롭게 하는 신호로 나눠 봐요." 카드를 놓을 때마다 "이 행동 뒤에 상대는 자기 뜻을 말할 수 있나요?"라고 묻는다. \'친하니까 휴대폰을 마음대로 본다\'를 건강한 신호에 두는 학생에게 "친한 사이라면 상대의 허락은 필요 없을까요?"라고 되묻는다. 가까운 사이일수록 경계를 지켜 주는 것이 존중이라는 점을 짚는다.',
          task: '관계 행동 카드를 건강한 신호·해로운 신호로 나누고 근거를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('친구·가족·연인 관계의 행동 카드를 건강한 신호와 해로운 신호로 나누세요.', ['건강한 신호', '해로운 신호'], [
              ['싫다고 하면 다시 묻지 않고 멈춘다', '서로 다른 의견을 끝까지 듣는다', '고마운 일에 고맙다고 말한다', '혼자만의 시간을 인정한다'],
              ['친하니까 휴대폰을 마음대로 본다', '"너는 원래 그래"라며 놀린다', '다른 친구를 못 만나게 한다', '화가 나면 말없이 무시한다'],
            ], { k: 3, hard: [['잘못하면 먼저 사과한다'], ['걱정된다며 하루 종일 위치를 묻는다']], d: 0.3, opt: { title: '관계 행동 카드' } }),
            PICKQ('\'다른 친구를 못 만나게 한다\'를 해로운 신호로 보는 근거만 고르세요.', ['상대의 관계와 선택을 줄인다', '상대가 도움을 청할 사람을 잃게 된다'], ['그만큼 나를 아낀다는 뜻이다', '연인 사이라면 당연하다'], { d: 0.35, opt: { basket: '근거' }, more: { hints: ['그 행동 뒤에 상대가 할 수 있는 선택이 늘어나는지 줄어드는지 보세요.'] } }),
            MATCHQ('건강한 행동마다 그 행동이 지켜 주는 것을 짝지으세요.', [['싫다고 하면 멈춘다', '상대의 경계'], ['다른 의견을 끝까지 듣는다', '상대의 생각'], ['혼자만의 시간을 인정한다', '상대의 쉼과 자기 생활']], { k: 2, extra: ['나의 체면'], d: 0.35, more: { conclude: '건강한 관계의 행동은 상대의 경계·생각·생활을 지켜 주고, 해로운 행동은 그것을 줄여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'자주 연락한다\'처럼 상황에 따라 건강할 수도 해로울 수도 있는 행동 하나를 골라, 어떤 조건이면 해로워지는지 쓰세요.' }] },
        notes: '연인 관계 카드는 일반적인 행동만 다룬다. 학생의 실제 관계를 묻지 않는다.',
      }),
      M({
        id: 'activity.time', type: 'activity', title: '나를 위한 일주일 시간표',
        method: '나를 위한 일주일 시간 예산', tool: 'economy', minutes: 19,
        levels: { easy: '가상 인물의 일주일 활동 블록 카드 4장을 이번 주 지킬 것·줄일 것으로 나눈다.', base: '블록 카드 7장을 나누고, 저녁 시간 블록을 차례로 놓고, 블록과 그 블록이 채워 주는 것을 짝짓는다.', challenge: '헷갈리는 블록 2장이 더해지고, 활동지에 고른 조합이 나를 존중하는 방식인 까닭을 쓴다.' },
        activity: {
          title: '나를 존중하는 일주일 블록', tool: 'economy',
          teacher: '"일주일은 168시간, 더 늘릴 수 없는 예산이에요. 가상 인물 하윤이는 친구 부탁을 다 들어주느라 쉴 시간이 없대요. 어떤 블록을 지키고 어떤 블록을 줄여야 할까요?" 블록을 나누게 한 뒤 "잠과 쉼을 줄이고 남의 부탁을 다 들어주는 것이 친구를 존중하는 걸까요, 나를 낮추는 걸까요?"라고 묻는다. "거절하면 관계가 깨진다"는 학생에게 "가끔 \'오늘은 어려워\'라고 말하는 친구와는 멀어지나요?"라고 되묻는다. 나를 돌보는 시간도 관계를 오래 지키는 힘이라는 점을 짚는다.',
          task: '하윤이의 일주일 블록을 나누고, 나를 존중하는 시간표로 고쳐요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('하윤이의 일주일 활동 블록을 이번 주 지킬 것과 줄일 것으로 나누세요.', ['이번 주 지킬 것', '이번 주 줄일 것'], [
              ['밤마다 7시간 잠', '가족과 저녁 식사', '좋아하는 운동 2번', '친한 친구와 이야기'],
              ['내키지 않는 부탁 대신 들어주기', '새벽까지 단톡방 답장', '남과 비교하며 SNS 보기'],
            ], { k: 2, hard: [['혼자 쉬는 시간 1시간'], ['밤늦게 남의 과제 대신 하기']], d: 0.3, opt: { trayLabel: '시간 블록' } }),
            ORDERQ('고친 저녁 시간을 하윤이를 돌보는 차례로 놓으세요.', ['가족과 저녁 식사', '내 과제 하기', '친구에게 "오늘은 어려워"라고 답하기', '혼자 쉬는 시간', '화면 끄고 잠자리'], { k: 3, d: 0.3, opt: { axis: ['저녁', '밤'] } }),
            MATCHQ('지킨 블록마다 그 블록이 채워 주는 것을 짝지으세요.', [['밤마다 7시간 잠', '몸과 마음의 회복'], ['가족과 저녁 식사', '가족과의 연결'], ['좋아하는 운동 2번', '나를 위한 즐거움'], ['친한 친구와 이야기', '서로 기대는 관계']], { k: 3, extra: ['남의 인정'], d: 0.35, more: { conclude: '나를 위한 시간을 지키는 것도 존중이에요. 나를 돌봐야 다른 사람도 오래 아낄 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하윤이의 고친 시간표가 \'나를 존중하는 방식\'인 까닭을 두 문장으로 쓰세요.' }] },
        notes: '교구의 예산(budget) 판은 돈(원) 단위만 보여서, 시간 예산은 블록 카드 나누기·차례·짝으로 다룬다(계획의 \'예산 막대\'는 쓰지 않음). 학생의 실제 일주일을 발표시키지 않고 가상 인물로 다룬다.',
      }),
      M({
        id: 'activity.people', type: 'activity', title: '소중한 사람과 존중 방식',
        method: '내가 소중히 여기는 사람과 존중 방식', tool: 'mindmap', minutes: 18,
        levels: { easy: '가지(가족·친구·선생님·이웃)가 주어지고 존중 행동 카드 4장을 바로 피드백 받으며 단다.', base: '존중 행동 카드 8장을 네 가지에 나누고, 마음과 행동을 짝짓는다.', challenge: '함정 카드가 섞인 판에서 풀고, 활동지에 존중을 아직 표현하지 못한 가지를 골라 방법을 덧붙인다.' },
        activity: {
          title: '소중한 사람 가지 펼치기', tool: 'mindmap',
          teacher: '"소중한 사람을 떠올려 보세요. 이름은 쓰지 않고 가족, 친구, 선생님, 이웃처럼 관계로만 생각해요. 그 사람들을 존중하는 나의 행동은 무엇일까요?" 카드를 가지에 단 뒤 "마음속으로 소중히 여기는 것과 행동으로 보이는 것은 같을까요?"라고 묻는다. "가족은 말 안 해도 안다"는 학생에게 "고맙다는 말을 들은 가족과 못 들은 가족, 무엇이 다를까요?"라고 되묻는다. 가까운 사람일수록 존중을 행동으로 보여야 한다는 점을 짚는다.',
          task: '소중한 사람 가지에 존중 행동 카드를 달고 마음과 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('존중 행동 카드를 소중한 사람 가지에 다세요.', ['가족', '친구', '선생님', '이웃'], [
              ['집안일을 나눠 맡는다', '"고마워요"라고 말로 전한다'],
              ['약속 시간을 지킨다', '빌린 물건을 제때 돌려준다'],
              ['질문할 때 예의 있게 말한다', '수업 중 말을 끝까지 듣는다'],
              ['엘리베이터에서 먼저 인사한다', '밤늦게 큰 소리를 내지 않는다'],
            ], { k: 1, traps: ['가까우니 말을 함부로 한다', '바쁘면 인사는 건너뛴다'], d: 0.3, opt: { topic: '내가 소중히 여기는 사람' } }),
            MATCHQ('마음을 행동으로 바꾸어 짝지으세요.', [['고마운 마음', '"고마워"라고 직접 말한다'], ['미안한 마음', '먼저 사과하고 고친다'], ['걱정되는 마음', '"괜찮아?"라고 묻고 들어 준다'], ['아끼는 마음', '싫다는 것은 하지 않는다']], { k: 3, extra: ['말하지 않아도 알 거라 믿는다'], d: 0.35, opt: { topic: '마음과 행동' } }),
            PICKQ('가족 관계에서 존중을 보여 주는 행동만 고르세요.', ['가족의 방에 들어갈 때 먼저 묻는다', '의견이 다를 때 목소리를 높이지 않는다'], ['가족이니 물건을 말없이 쓴다', '기분 나쁘면 가족에게 화풀이한다'], { d: 0.3, opt: { basket: '가족 존중 행동' }, more: { conclude: '가족처럼 가까운 사이에서도 허락 구하기와 말투가 존중의 기본이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '존중을 아직 행동으로 보이지 못한 관계 하나를 골라 이번 주 방법을 쓰세요(이름 대신 관계로).', columns: ['관계', '이번 주 해 볼 존중 행동'], cells: [['', '']] }] },
        notes: '\'가지 직접\'은 교구가 가지 이름을 학생이 짓게 하지 못해, 관계 네 가지를 주고 활동지에서 가지를 덧붙이게 했다. 실제 인물 이름은 쓰지 않게 한다.',
      }),
      M({
        id: 'activity.reflect', type: 'activity', title: '성찰 글 "나를 존중하는 방식"',
        method: '성찰 글 “나를 존중하는 방식”', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '나를 존중하는 방식과 타인을 존중하는 방식을 틀 없이 쓰고 기준표(구체 행동·관계 연결)로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 앞으로 바꿀 행동 하나와 실천 방법을 덧붙인다.' },
        activity: {
          title: '나와 남을 존중하는 방식 쓰기', tool: 'rubric-writing',
          teacher: '"\'나를 존중한다\'는 말은 어떤 행동일까요? 잘 자기, 싫은 것을 싫다고 말하기, 실수한 나를 몰아세우지 않기…" 쓰기 전에 기준표를 함께 읽는다. "착하게 산다"처럼 행동이 보이지 않는 문장을 쓴 학생에게 "오늘 저녁 그 사람이 무엇을 하면 착하게 사는 걸까요?"라고 묻는다. 나를 낮추는 것이 남을 존중하는 것이 아니라는 점, 두 존중이 이어져 있다는 점을 짚는다. 글은 남에게 보여 주지 않아도 된다고 미리 말한다.',
          task: '나와 남을 존중하는 방식을 구체적인 행동으로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('나를 존중하는 나의 방식을 2~3문장으로 쓰세요.', '나를 존중하는 나의 방식을 구체적인 행동으로 쓰세요.', ['눈에 보이는 행동으로 썼다', '그 행동이 나에게 주는 것을 썼다', '남에게 보이려는 말이 아니라 내가 할 수 있는 일이다'], { min: 40, max: 300, sent: [2, 3], must: [['나를', '나에게']], starter: '나는 나를 존중하기 위해 ~ 한다. 그러면 ~', plus: '나를 낮추는 습관 하나를 함께 짚었다', d: 0.35 }),
            RWQ('다른 사람(가족 포함)을 존중하는 나의 방식을 2~3문장으로 쓰세요.', '가족·친구 등 다른 사람을 존중하는 나의 방식을 쓰세요(이름 대신 관계로).', ['관계(가족·친구 등)를 밝혔다', '구체적인 행동으로 썼다', '상대의 경계나 뜻을 지키는 내용이 있다'], { min: 40, max: 300, sent: [2, 3], must: [['가족', '친구', '선생님', '이웃', '사람']], starter: '나는 가족을 존중하기 위해 ~', plus: '상대가 싫다고 할 때 내가 할 행동을 썼다', d: 0.35 }),
            RWQ('두 존중이 어떻게 이어지는지 쓰고, 앞으로 바꿀 행동 하나를 정하세요.', '나를 존중하는 것과 남을 존중하는 것은 어떻게 이어질까요? 바꿀 행동 하나도 쓰세요.', ['두 존중의 관계를 썼다', '바꿀 행동 하나를 정했다', '언제부터 할지 썼다'], { min: 50, max: 400, sent: [2, 4], must: [['왜냐하면', '때문에', '그래서']], starter: '나를 존중하면 ~ 때문에 남도 ~', plus: '실천이 잘 안 될 때의 대안을 썼다', d: 0.4, sample: '나를 존중해야 남의 경계도 존중할 수 있다. 왜냐하면 내가 싫은 것을 말할 수 있어야 남이 싫다고 할 때도 멈출 수 있기 때문이다. 이번 주부터 내키지 않는 부탁은 "오늘은 어려워"라고 말하겠다.', more: { conclude: '나를 존중하는 힘과 남을 존중하는 힘은 같은 뿌리에서 자라요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '앞으로 바꿀 존중 행동 하나와 실천 방법을 쓰세요.' }] },
        notes: '성찰 글은 발표를 강요하지 않는다. 가족 관계가 어려운 학생이 있을 수 있으니 \'가족\' 대신 다른 관계를 써도 된다고 말한다.',
      }),

      M({
        id: 'wrap.words', type: 'wrap', title: '존중의 말, 상처 주는 말',
        method: '존중의 말 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 카드 4장을 먼저 읽어 주고 함께 가른다.', base: '말 카드 6장을 관계를 지키는 말·상처 주는 말로 스스로 가른다.', challenge: '출구 글쓰기에서 상처 주는 말 하나를 존중의 말로 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 기준으로 말 카드를 갈라 볼까요? 같은 뜻도 말에 따라 관계를 지키기도, 상처를 주기도 해요." 카드를 가른 뒤 상처 주는 말 하나를 함께 고쳐 본다. "농담이면 괜찮다"는 학생에게 "듣는 사람이 웃지 않는다면 그건 누구의 농담일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', slots: ['관계를 지키는 말', '상처 주는 말'], cards: ['네 생각도 듣고 싶어', '싫으면 말해 줘', '고마워, 덕분이야', '됐고, 내 말이나 들어', '너는 원래 그렇잖아', '이것도 못 해?'] }, prompt: '말 카드를 관계를 지키는 말과 상처 주는 말로 가르세요.', target: { sort: { '관계를 지키는 말': ['네 생각도 듣고 싶어', '싫으면 말해 줘', '고마워, 덕분이야'], '상처 주는 말': ['됐고, 내 말이나 들어', '너는 원래 그렇잖아', '이것도 못 해?'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['가까운 사이일수록 경계를 지켜 준다', '가까운 사이면 상처 주는 말도 괜찮다', '나를 돌보는 시간도 존중이다'], answer: 1, difficulty: 0.15, explain: '가까운 사이일수록 말 한마디가 더 깊이 남아요. 친하다는 것이 상처 주는 말의 핑계가 될 수 없어요.' },
            { type: 'short', prompt: '상처 주는 말 하나를 골라 존중의 말로 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '존중의 말',
          items: [
            { type: 'table', prompt: '상처 주는 말을 존중의 말로 고쳐 쓰세요.', columns: ['상처 주는 말', '존중의 말'], cells: [['됐고, 내 말이나 들어', ''], ['이것도 못 해?', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '가까운 사이일수록 상대의 ___을 지켜 준다.', answer: '경계' },
          ],
        },
      }),
      M({
        id: 'wrap.pledge', type: 'wrap', title: '이번 주 존중 다짐',
        method: '존중 다짐 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '다짐 후보 가운데 3개를 함께 읽고 넣을지 고른다.', base: '다짐 후보 8개 가운데 존중 다짐 5개만 골라 표시한다.', challenge: '고른 다짐 하나를 이번 주 어떤 상황에서 할지 활동지에 적는다.' },
        wrap: {
          teacher: '"오늘 세운 존중의 기준을 이번 주 다짐으로 바꿔 봐요. 후보 가운데 존중 다짐만 골라요." 그럴듯하지만 나를 낮추는 다짐(\'부탁은 무조건 들어준다\')을 고르는 학생에게 "그 다짐을 지키면 내 쉼과 잠은 어떻게 될까요?"라고 묻는다. 다짐은 크지 않아도 이번 주에 할 수 있어야 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '이번 주 존중 다짐', items: [{ id: 'stop', text: '싫다는 말을 들으면 멈춘다' }, { id: 'thanks', text: '가족에게 고마움을 말로 전한다' }, { id: 'all', text: '부탁은 무조건 들어준다' }, { id: 'listen', text: '다른 의견을 끝까지 듣는다' }, { id: 'rest', text: '나를 위한 쉬는 시간을 지킨다' }, { id: 'joke', text: '친하면 놀려도 된다고 생각한다' }, { id: 'ask', text: '남의 물건·휴대폰은 먼저 묻고 쓴다' }, { id: 'hide', text: '서운해도 참고 아무 말 하지 않는다' }] }, prompt: '이번 주 지킬 존중 다짐만 표시하세요.', target: { checklist: ['stop', 'thanks', 'listen', 'rest', 'ask'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'서운해도 참고 아무 말 하지 않는다\'가 존중 다짐이 아닌 까닭으로 알맞은 것은?', options: ['나의 마음도 존중받아야 하기 때문에', '서운한 마음은 잘못이기 때문에', '말하면 관계가 반드시 깨지기 때문에'], answer: 0, difficulty: 0.2, explain: '내 마음을 차분히 말하는 것도 관계를 건강하게 지키는 방법이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 존중 다짐',
          items: [
            { type: 'check', prompt: '이번 주 지킬 다짐에 표시하세요.', options: ['싫다는 말에 멈추기', '가족에게 고마움 말하기', '다른 의견 끝까지 듣기', '쉬는 시간 지키기', '먼저 묻고 쓰기'] },
            { type: 'short', prompt: '고른 다짐 하나를 이번 주 어떤 상황에서 실천할지 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 생명을 지키는 이웃, 게이트키퍼의 역할 (10학년)
  // ======================================================================================================
  {
    const M = MOD('gatekeeper', [10]);
    const GK_NOTE = '자살예방 차시다. 방법·수단·장소는 말하지도 쓰지도 않는다. 수업 전에 상담 선생님과 협의해 두고, 수업 중·뒤에 힘들어 보이는 학생은 따로 살펴 상담 선생님·Wee 클래스에 잇는다. 학생 자신이나 주변의 실제 일을 묻거나 발표시키지 않는다.';
    const SECRET = { text: '밤 10시, 친구 서아가 메시지를 보냈다. "요즘 너무 힘들어. 근데 아무한테도 말하지 마."', who: '나', motif: 'moon', choices: [
      { id: 'listen', text: '"무슨 일인지 들어 볼게"라며 판단 없이 듣는다', result: '서아가 요즘 잠도 잘 못 자고 다 의미 없게 느껴진다고 털어놓는다.', impact: [{ who: '서아', text: '마음을 꺼낼 곳이 생긴다', tone: 1 }],
        next: { text: '서아가 "사라지고 싶다는 생각도 들어. 이건 진짜 비밀이야"라고 한다.', choices: [
          { id: 'promise', text: '비밀을 지키겠다고 약속하고 혼자 들어 준다', result: '서아는 잠시 안심하지만, 나는 혼자 무거운 걱정을 떠안는다.', impact: [{ who: '서아', text: '도울 수 있는 어른과 이어지지 못한다', tone: -1 }, { who: '나', text: '감당하기 어려운 비밀을 혼자 진다', tone: -1 }], ending: '생명과 관련된 비밀은 혼자 지키는 비밀이 아니다.' },
          { id: 'adult', text: '"너를 아끼니까 혼자 두고 싶지 않아. 내일 상담 선생님께 같이 가자"고 말한다', result: '서아가 한참 망설이다 "같이 가 줄 거야?"라고 묻는다.', impact: [{ who: '서아', text: '혼자가 아니라는 것을 느낀다', tone: 1 }],
            next: { text: '다음 날 아침, 서아가 "그냥 없던 일로 하자"며 눈을 피한다.', choices: [
              { id: 'together', text: '"어제 약속대로 같이 가자, 옆에 있을게"라며 함께 상담 선생님을 찾아간다', result: '상담 선생님이 서아의 이야기를 듣고 보호자와 함께 도움을 이어 가기로 한다.', impact: [{ who: '서아', text: '도움을 받을 길이 열린다', tone: 1 }, { who: '나', text: '혼자 짊어지던 걱정을 어른과 나눈다', tone: 1 }], ending: '알리는 것은 배신이 아니라 친구의 생명을 지키는 일이다.' },
              { id: 'drop', text: '서아 뜻대로 없던 일로 한다', result: '서아는 다시 혼자 남고, 어제의 신호는 묻힌다.', impact: [{ who: '서아', text: '도움에서 다시 멀어진다', tone: -1 }], ending: '한 번 망설였다고 연결을 멈추면 신호가 다시 묻힌다.' }] } }] } },
      { id: 'brush', text: '"에이, 다들 힘들어"라며 가볍게 넘긴다', result: '서아가 "그래, 별거 아니야"라며 대화를 끝낸다.', impact: [{ who: '서아', text: '말해도 소용없다고 느낀다', tone: -1 }],
        next: { text: '다음 날 서아가 학교에서 거의 말을 하지 않는다.', choices: [
          { id: 'again', text: '"어제 일이 마음에 걸려. 이야기 더 들려줄래?"라고 다시 다가간다', result: '서아가 조금씩 다시 이야기를 꺼낸다.', impact: [{ who: '서아', text: '다시 연결된다', tone: 1 }], ending: '늦었더라도 다시 다가가면 연결은 이어질 수 있다.' },
          { id: 'leave', text: '조용해졌으니 괜찮아졌다고 여긴다', result: '서아의 변화는 아무에게도 닿지 않는다.', impact: [{ who: '서아', text: '혼자 견딘다', tone: -1 }], ending: '말이 줄어든 것은 괜찮아졌다는 신호가 아닐 수 있다.' }] } },
      { id: 'post', text: '걱정돼서 친구 단톡방에 서아 이야기를 올려 의견을 묻는다', result: '서아의 이야기가 여러 사람에게 퍼진다.', impact: [{ who: '서아', text: '믿었던 마음이 무너지고 더 숨게 된다', tone: -1 }], ending: '알릴 곳은 도울 수 있는 어른이다. 소문은 친구를 더 외롭게 만든다.' }] };
    const SECRET_R = [{ id: 'life', text: '생명과 관련된 비밀은 믿을 어른에게 이어야 한다' }, { id: 'listen', text: '판단 없이 들어 주면 친구가 말을 이어 갈 수 있다' }, { id: 'with', text: '혼자 보내지 않고 함께 가는 것이 연결이다' }, { id: 'keep', text: '친구가 부탁했으니 무조건 비밀을 지킨다', why: '생명과 관련된 비밀은 지켜야 할 약속의 예외예요. 어른에게 알리는 것은 친구를 지키는 일이에요.' }, { id: 'attn', text: '관심을 끌려는 말이니 넘겨도 된다', why: '힘들다는 말은 도움을 청하는 신호로 들어야 해요.' }];
    const TRUST = { id: 'trust', text: '"너를 아끼니까"라고 까닭을 말하면 알리면서도 신뢰를 지킨다' };
    const pathsAt = (n) => [['listen', 'adult', 'together'].slice(0, n)];
    const SECRETQ = {
      prompt: '서아의 비밀 부탁에 대한 선택을 끝까지 이어 가고, 내 선택의 근거를 고르세요.',
      toolOptions: { scene: SECRET, reasons: SECRET_R, title: '친구의 비밀 부탁' },
      target: { path: pathsAt(3), reasons: ['life', 'listen', 'with'] }, difficulty: 0.4,
      levels: {
        easy: { prompt: '서아의 비밀 부탁에 대한 선택을 이어 가고, 내 선택의 근거를 고르세요(갈림길 둘).', toolOptions: { scene: cut(SECRET, 2) }, target: { path: pathsAt(2), reasons: ['life', 'listen', 'with'] } },
        challenge: { prompt: '서아의 비밀 부탁에 대한 선택을 끝까지 이어 가고, 근거와 함께 신뢰를 지키는 말의 힘도 고르세요(근거 카드 하나 더).', toolOptions: { reasons: [...SECRET_R, TRUST] }, target: { path: pathsAt(3), reasons: ['life', 'listen', 'with', 'trust'] } },
      },
    };

    MODS.push(
      M({
        id: 'intro.sns', type: 'intro', title: '가상 친구의 SNS가 달라졌다',
        method: '가상 친구의 SNS 변화 보기', tool: 'story', minutes: 6,
        levels: { easy: '세 주의 칸만 함께 넘겨 보며 달라진 칸을 고른다.', base: '다섯 주의 칸을 넘겨 보며 관심이 필요한 변화 칸을 모두 고른다.', challenge: '변화를 알아챈 뒤 내가 할 첫 행동(말 걸기·어른에게 알리기)을 짝과 말한다.' },
        intro: {
          teacher: '"가상 친구 지우의 SNS를 몇 주에 걸쳐 본다고 생각해 봐요. 무엇이 달라졌나요?" 칸을 넘기며 두세 명에게 고르게 하고, 시연 단추로 관심이 필요한 칸이 바구니에 담기는 모습을 보여 준다. "SNS 글은 그냥 기분이라 신경 쓸 필요 없다"는 말이 나오면 "몇 주 동안 같은 방향으로 바뀐다면 그것도 그냥 기분일까요?"라고 되묻는다. 오늘은 친구의 변화를 알아차리고, 듣고, 어른에게 잇는 \'게이트키퍼\'의 역할을 배운다고 밝힌다.',
          student: '가상 친구 지우의 SNS를 주마다 넘겨 보며, 관심을 두고 말을 걸어야 할 변화가 보이는 칸을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '관심이 필요한 변화', title: '지우의 SNS 다섯 주(가상)', cards: [{ id: 'w1', text: '1주: 동아리 친구들과 찍은 사진', motif: 'sun' }, { id: 'w2', text: '2주: 매일 올리던 글이 뚝 끊김', motif: 'cloud' }, { id: 'w3', text: '3주: "요즘 다 귀찮아"', motif: 'cloud' }, { id: 'w4', text: '4주: 좋아하던 동아리를 그만뒀다는 글', motif: 'leaf' }, { id: 'w5', text: '5주: "다들 나 없어도 괜찮겠지"', motif: 'moon' }], shuffle: false }, sequence: [{ pick: ['w2', 'w3', 'w4', 'w5'] }] },
          art: { draw: 'a row of five paper phone screens showing posts over five weeks, the first bright with a sun and friends, the later ones fading to grey clouds, a paper friend noticing the change with a gentle hand reaching out', banner: '달라진 것을 알아차려요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: GK_NOTE,
      }),
      M({
        id: 'intro.paths', type: 'intro', title: '내가 아는 도움 경로 점검',
        method: '내가 아는 도움 경로 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '도움 경로 세 가지(담임 선생님·상담 선생님·1388)만 함께 읽고 아는 것을 떠올린다.', base: '도움 경로 다섯 가지를 읽고 아는 것을 마음속으로 표시한다.', challenge: '잘 모르는 경로 하나를 골라 언제·어떻게 이용하는지 짝과 말한다.' },
        intro: {
          teacher: '"친구가 힘들어할 때 함께 갈 수 있는 곳을 몇 군데나 알고 있나요? 손을 들지 않아도 돼요. 마음속으로 표시해 봐요." 시연 단추로 점검 칸이 표시되는 모습을 보여 준다. "상담실은 문제 있는 애들만 가는 곳"이라는 말이 나오면 "몸이 아프면 보건실에 가듯, 마음이 힘들 때 가는 곳은 어디일까요?"라고 되묻는다. 도움 경로는 위급할 때(112·119)와 이야기를 나누고 싶을 때(상담 선생님·Wee 클래스·1388)로 나뉜다는 점을 짚는다.',
          student: '친구가 힘들어할 때 함께 갈 수 있는 도움 경로 가운데 내가 이미 아는 곳을 마음속으로 표시해 보세요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '내가 아는 도움 경로', items: [{ id: 'homeroom', text: '담임 선생님' }, { id: 'counsel', text: '학교 상담 선생님' }, { id: 'wee', text: 'Wee 클래스' }, { id: 'c1388', text: '1388 청소년 상담' }, { id: 'c112', text: '위급할 때 112' }, { id: 'c119', text: '응급할 때 119' }] }, sequence: [{ checklist: ['homeroom', 'counsel', 'c112', 'c119'] }] },
          art: { draw: 'a paper school hallway with doors labeled by small paper icons of a counselor, a classroom, a phone with a heart and an ambulance, a paper student holding a friend\'s hand walking toward one of the doors', banner: '함께 갈 곳을 알아요', extra: [{ motif: 'house', x: 300, y: 222 }] },
        },
        notes: `${GK_NOTE} 우리 학교 상담실·Wee 클래스의 위치와 이용 시간을 칠판에 적어 준다.`,
      }),

      M({
        id: 'activity.signals', type: 'activity', title: '위기 신호 나누고 근거 붙이기',
        method: '신호 카드를 분류하고 근거 붙이기', tool: 'mindmap', minutes: 18,
        levels: { easy: '말·행동·감정 변화 카드 4장을 지켜볼 변화·바로 어른에게 알릴 신호로 나눈다(바로 피드백).', base: '카드 7장을 나누고, 바로 알릴 신호로 본 근거를 고르며, 변화마다 내가 할 첫 행동을 짝짓는다.', challenge: '헷갈리는 카드 2장이 더해진 9장을 나누고, 활동지에 신호가 겹칠 때의 판단 근거를 쓴다.' },
        activity: {
          title: '말·행동·감정 변화 나누기', tool: 'mindmap',
          teacher: '"친구의 변화는 말, 행동, 감정에서 보여요. \'지켜볼 변화\'는 그냥 두라는 뜻이 아니라 관심을 두고 말을 거는 변화예요. \'바로 어른에게 알릴 신호\'는 오늘 안에 어른에게 잇는 신호고요." 카드를 놓을 때마다 "이 말을 들으면 혼자 판단해도 될까요?"라고 묻는다. "힘들다는 말은 관심을 끌려는 것"이라는 학생에게 "관심이 필요하다는 것, 그게 바로 신호 아닐까요?"라고 되묻는다. 판단이 헷갈리면 알리는 쪽을 고른다는 점을 짚는다.',
          task: '변화 카드를 두 칸에 나누고 근거와 첫 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('친구의 변화 카드를 지켜볼 변화와 바로 어른에게 알릴 신호로 나누세요.', ['지켜볼 변화', '바로 어른에게 알릴 신호'], [
              ['잠이 부쩍 줄었다고 한다', '말수가 줄고 혼자 있으려 한다', '좋아하던 일에 흥미를 잃었다', '작은 일에도 짜증이 늘었다'],
              ['"사라지고 싶다"는 말을 한다', '아끼던 물건을 나눠 주며 작별 인사처럼 말한다', '"이제 다 끝내고 싶다"는 글을 올린다'],
            ], { k: 2, hard: [['급식을 자주 거른다'], ['"나 없으면 다 편할 거야"라고 말한다']], d: 0.35, opt: { topic: '친구의 변화' } }),
            PICKQ('\'"사라지고 싶다"는 말\'을 바로 어른에게 알릴 신호로 보는 근거만 고르세요.', ['생명과 관련된 말은 혼자 판단할 일이 아니다', '전문가와 어른이 함께해야 친구를 지킬 수 있다'], ['농담일 수 있으니 넘긴다', '친구가 비밀로 해 달라고 했다'], { d: 0.35, opt: { basket: '근거' }, more: { hints: ['그 말이 생명과 이어지는지, 내가 혼자 감당할 수 있는 일인지 생각해 보세요.'] } }),
            MATCHQ('변화마다 내가 할 첫 행동을 짝지으세요.', [['말수가 줄고 혼자 있으려 한다', '"요즘 어때?"라고 먼저 말을 건다'], ['좋아하던 일에 흥미를 잃었다', '판단하지 않고 이야기를 들어 준다'], ['"사라지고 싶다"는 말을 한다', '오늘 안에 함께 상담 선생님께 간다']], { k: 2, extra: ['모른 척 기다린다'], d: 0.4, opt: { topic: '첫 행동' }, more: { conclude: '지켜볼 변화에는 먼저 말 걸기, 생명과 관련된 신호에는 바로 어른에게 잇기 — 헷갈리면 알리는 쪽을 골라요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'지켜볼 변화\' 여러 개가 한꺼번에 보일 때 어떻게 판단할지 근거와 함께 쓰세요.' }] },
        notes: GK_NOTE,
      }),
      M({
        id: 'activity.secret', type: 'activity', title: '친구의 비밀 부탁 갈림길',
        method: '친구의 비밀 부탁 갈림길과 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 둘까지 고르고 근거를 고른다.', base: '갈림길 셋을 끝까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 지나, 알리면서도 친구의 신뢰를 지키는 말의 근거 카드까지 고른다.' },
        activity: {
          title: '친구의 비밀 부탁', tool: 'dilemma',
          teacher: '"친구가 힘든 마음을 털어놓으며 \'아무한테도 말하지 마\'라고 해요. 비밀을 지키는 게 의리일까요?" 선택마다 서아에게 생긴 영향을 소리 내어 읽게 한다. \'비밀을 지키겠다고 약속한다\'를 고른 학생에게 "그 약속을 지키는 동안 서아를 도울 수 있는 어른은 몇 명일까요?"라고 묻는다. 생명과 관련된 비밀은 예외이고, 알리는 것은 배신이 아니라 친구를 지키는 일이라는 점을 짚는다. 당장 위험해 보이면 112·119에 바로 알린다는 것도 말해 둔다.',
          task: '비밀 부탁의 갈림길을 따라 결과를 보고 친구를 지키는 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            SECRETQ,
            EXPLOREQ('\'가볍게 넘긴다\' 길과 \'단톡방에 올린다\' 길도 끝까지 가 보고 서아에게 생긴 영향을 견주세요.', SECRET, SECRET_R, ['다른 길의 끝 장면을 확인했다', '서아가 도움과 가까워졌는지 멀어졌는지 견주었다'], { d: 0.35 }),
            DILQ('단톡방에서 친구 하람이 "다 의미 없어"라고 올리고 나갔어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '반 단톡방에 하람이 "다 의미 없어"라고 올리고 방을 나갔다. 몇 명이 웃는 이모티콘을 단다.', who: '나', motif: 'cloud', choices: [
              { id: 'dm', text: '하람에게 따로 "괜찮아? 네 이야기 듣고 싶어"라고 보낸다', result: '읽었다는 표시만 뜨고 답이 없다.', impact: [{ who: '하람', text: '누군가 신경 쓰고 있다는 것을 안다', tone: 1 }],
                next: { text: '밤이 되어도 하람의 답이 없다.', choices: [
                  { id: 'adult', text: '보호자나 담임 선생님께 알린다', result: '담임 선생님이 하람의 보호자에게 연락해 살피기로 한다.', impact: [{ who: '하람', text: '어른의 도움이 닿는다', tone: 1 }], ending: '답이 없을 때 혼자 기다리지 않고 어른에게 잇는다.' },
                  { id: 'wait', text: '내일 학교에서 보면 되겠지 하고 잔다', result: '하람의 하룻밤은 아무에게도 닿지 않는다.', impact: [{ who: '하람', text: '혼자 밤을 보낸다', tone: -1 }], ending: '걱정되는 신호 앞에서 기다림은 시간을 잃게 한다.' }] } },
              { id: 'emoji', text: '다들 하니 웃는 이모티콘을 단다', result: '하람의 글이 장난처럼 묻힌다.', impact: [{ who: '하람', text: '더 외로워진다', tone: -1 }], ending: '여럿이 웃어 넘긴 글에도 도움을 청하는 마음이 있을 수 있다.' },
              { id: 'stopjoke', text: '단톡방에 "웃을 일 아니야"라고만 쓴다', result: '이모티콘은 멈췄지만 하람에게는 아무도 연락하지 않는다.', impact: [{ who: '하람', text: '여전히 혼자다', tone: 0 }], ending: '분위기를 바꾸는 것과 친구에게 닿는 것은 다르다.' }] },
            [['dm', 'adult']], [{ id: 'reach', text: '걱정되는 친구에게는 직접 다가가 묻는다' }, { id: 'link', text: '답이 없으면 어른에게 잇는다' }, { id: 'joke', text: '단톡방 글은 장난이니 신경 쓰지 않는다', why: '짧은 글에도 도움을 청하는 마음이 담길 수 있어요.' }], ['reach', 'link'], { d: 0.35, more: { conclude: '살피고, 판단 없이 듣고, 어른에게 잇기 — 친구가 비밀을 부탁해도, 답이 없어도 연결을 멈추지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '비밀을 부탁한 친구에게 어른에게 알리겠다고 말할 때, 친구의 신뢰를 지키며 건넬 첫 문장을 쓰세요.' }] },
        notes: GK_NOTE,
      }),
      M({
        id: 'activity.steps', type: 'activity', title: '살피기부터 곁에 있기까지',
        method: '연결 단계와 단계마다 할 말 놓기', tool: 'timeline', minutes: 18,
        levels: { easy: '연결 단계 카드 3장을 차례로 놓는다.', base: '단계 카드 4장(살피기·묻고 듣기·함께 어른에게 가기·곁에 있기)을 차례로 놓고, 단계마다 할 말을 짝지으며, 단계를 건너뛰면 생길 문제를 고른다.', challenge: '카드를 섞어 놓고, 건너뛰면 생길 문제를 고른 까닭을 짝에게 설명한다.' },
        activity: {
          title: '연결 네 단계와 할 말', tool: 'timeline',
          teacher: '"게이트키퍼는 전문가가 아니에요. 살피고, 묻고 듣고, 함께 어른에게 가고, 곁에 있는 사람이에요." 카드를 놓은 뒤 단계마다 실제로 할 말을 소리 내어 읽어 보게 한다. "전문가만 도울 수 있다"는 학생에게 "상담 선생님께 가는 길에 친구 옆에서 걸어 줄 사람은 누구일까요?"라고 묻는다. 어른에게 연결한 뒤에도 곁에 있어 주는 것이 마지막 단계라는 점을 짚는다.',
          task: '연결 단계를 차례로 놓고 단계마다 할 말을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('게이트키퍼의 연결 단계를 차례로 놓으세요.', ['살피기', '묻고 듣기', '함께 어른에게 가기', '곁에 있기'], { k: 3, d: 0.3, opt: { axis: ['먼저', '나중'] } }),
            MATCHQ('단계마다 할 말을 짝지으세요.', [['살피기', '"요즘 좀 달라 보여서 마음이 쓰였어"'], ['묻고 듣기', '"무슨 일인지 천천히 말해 줘"'], ['함께 어른에게 가기', '"상담 선생님께 같이 가자, 내가 옆에 있을게"'], ['곁에 있기', '"오늘 어땠어? 나 여기 있어"']], { k: 3, extra: ['"그런 생각은 하면 안 돼"'], d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            PICKQ('\'묻고 듣기\'를 건너뛰고 바로 어른에게 끌고 가면 생길 수 있는 문제만 고르세요.', ['친구가 자기 이야기를 무시당했다고 느낄 수 있다', '친구가 마음을 닫고 따라가지 않을 수 있다'], ['어른이 더 빨리 해결해 준다', '아무 문제도 생기지 않는다'], { d: 0.35, opt: { basket: '생길 문제' }, more: { conclude: '듣기는 연결의 다리예요. 다만 생명과 관련된 말이 나오면 들은 그날 바로 어른에게 이어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단계마다 내가 실제로 할 말을 내 말투로 쓰세요.', columns: ['단계', '내가 할 말'], cells: [['살피기', ''], ['묻고 듣기', ''], ['함께 어른에게 가기', ''], ['곁에 있기', '']] }] },
        notes: GK_NOTE,
      }),
      M({
        id: 'activity.message', type: 'activity', title: '힘들어 보이는 친구에게 보낼 메시지',
        method: '친구에게 건넬 메시지 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '첫 메시지와 도움을 잇는 메시지를 틀 없이 쓰고 기준표(판단 없이 듣기·관심 표현·도움 연결)로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 친구가 "괜찮아, 신경 쓰지 마"라고 답했을 때 이어 갈 두 번째 메시지까지 기준을 더해 쓴다.' },
        activity: {
          title: '친구에게 보낼 메시지', tool: 'rubric-writing',
          teacher: '"가상 친구 도윤이가 요즘 말수가 줄고 \'다 귀찮다\'는 글을 올려요. 어떤 메시지를 보내면 도윤이가 답하고 싶어질까요?" 기준표를 함께 읽은 뒤 쓰게 한다. "힘내! 긍정적으로 생각해"처럼 충고로 시작한 학생에게 "이 메시지를 받은 도윤이는 자기 이야기를 꺼낼 자리가 있을까요?"라고 묻는다. 좋은 메시지는 고쳐 주려는 말보다 들어 주겠다는 말이라는 점을 짚는다.',
          task: '가상 친구 도윤이에게 보낼 메시지를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('도윤이에게 보낼 첫 메시지를 2~3문장으로 쓰세요.', '요즘 말수가 줄고 "다 귀찮다"는 글을 올린 가상 친구 도윤이에게 보낼 첫 메시지를 쓰세요.', ['내가 알아챈 변화를 판단 없이 말했다', '관심과 걱정을 표현했다', '충고나 훈계로 시작하지 않았다'], { min: 30, max: 300, sent: [2, 3], must: [['요즘', '너', '도윤']], starter: '도윤아, 요즘 ~해 보여서 마음이 쓰였어. ~', plus: '답하지 않아도 괜찮다는 말을 넣었다', d: 0.35 }),
            RWQ('도윤이를 도움과 잇는 메시지를 2~3문장으로 쓰세요.', '도윤이가 힘들다고 답했어요. 함께 도움을 청하자고 권하는 메시지를 쓰세요.', ['이야기해 줘서 고맙다는 마음을 표현했다', '함께 갈 도움 경로(상담 선생님·Wee 클래스·1388 등)를 말했다', '혼자 보내지 않고 함께하겠다고 했다'], { min: 40, max: 300, sent: [2, 3], must: [['상담', 'Wee', '1388', '선생님']], starter: '말해 줘서 고마워. ~ 같이 ~', plus: '언제 함께 갈지 구체적으로 정했다', d: 0.4 }),
            RWQ('도윤이가 "괜찮아, 신경 쓰지 마"라고 답했어요. 이어 갈 메시지를 2~3문장으로 쓰세요.', '도윤이가 "괜찮아, 신경 쓰지 마"라고 답했어요. 관계를 지키며 연결을 이어 갈 메시지를 쓰세요.', ['도윤이의 답을 존중했다', '여전히 곁에 있겠다고 했다', '걱정이 계속되면 어른과 함께하겠다는 뜻을 담았다'], { min: 40, max: 300, sent: [2, 3], starter: '알겠어, 그래도 ~', plus: '다시 연락할 때를 정했다', d: 0.4, sample: '알겠어, 그래도 나는 네가 걱정돼. 언제든 이야기하고 싶으면 나한테 말해 줘. 내일 점심 때 잠깐 같이 걷자.', more: { conclude: '좋은 메시지는 고쳐 주려는 말보다 들어 주겠다는 말이에요. 답이 없어도 걱정이 계속되면 어른에게 이어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구에게 보내면 안 되는 메시지(충고·훈계·비난) 하나를 골라 들어 주는 말로 고쳐 쓰세요.' }] },
        notes: `${GK_NOTE} 메시지는 가상 친구에게 쓰는 연습이며, 실제 친구 이름을 쓰지 않게 한다.`,
      }),

      M({
        id: 'wrap.words', type: 'wrap', title: '힘이 되는 말, 피해야 할 말',
        method: '힘이 되는 말 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 말 카드 4장을 먼저 읽어 주고 함께 가른다.', base: '말 카드 6장을 힘이 되는 말·피해야 할 말로 스스로 가른다.', challenge: '출구 고르기에서 피해야 할 말이 왜 위험한지 까닭을 고르고 짝에게 설명한다.' },
        wrap: {
          teacher: '"위기의 친구에게 힘이 되는 말과 피해야 할 말을 갈라 봐요." 카드를 가른 뒤 \'그런 생각 하면 안 돼\'가 왜 피해야 할 말인지 묻는다. "좋은 뜻으로 한 말이니 괜찮다"는 학생에게 "그 말을 들은 친구는 다음에 자기 생각을 또 말할까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', slots: ['힘이 되는 말', '피해야 할 말'], cards: ['이야기해 줘서 고마워', '네 곁에 있을게', '상담 선생님께 같이 가 볼래?', '다들 힘들어, 유난 떨지 마', '그런 생각 하면 안 돼', '관심 끌려고 그러는 거지?'] }, prompt: '말 카드를 힘이 되는 말과 피해야 할 말로 가르세요.', target: { sort: { '힘이 되는 말': ['이야기해 줘서 고마워', '네 곁에 있을게', '상담 선생님께 같이 가 볼래?'], '피해야 할 말': ['다들 힘들어, 유난 떨지 마', '그런 생각 하면 안 돼', '관심 끌려고 그러는 거지?'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '\'관심 끌려고 그러는 거지?\'가 피해야 할 말인 까닭으로 가장 알맞은 것은?', options: ['친구가 다시 말하지 않게 되어 도움에서 멀어진다', '친구가 화를 내서 내가 곤란해진다', '틀린 말이라서 선생님께 혼난다'], answer: 0, difficulty: 0.2, explain: '힘들다는 말을 깎아내리면 친구는 마음을 닫고, 도움을 청할 길이 좁아져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '힘이 되는 말',
          items: [
            { type: 'table', prompt: '피해야 할 말을 힘이 되는 말로 고쳐 쓰세요.', columns: ['피해야 할 말', '힘이 되는 말'], cells: [['다들 힘들어, 유난 떨지 마', ''], ['관심 끌려고 그러는 거지?', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '생명과 관련된 비밀은 혼자 지키지 않고 믿을 ___에게 잇는다.', answer: '어른' },
          ],
        },
        notes: GK_NOTE,
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '게이트키퍼 행동 스스로 점검',
        method: '게이트키퍼 행동 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개(살피기·듣기·연결하기)를 먼저 읽어 주고 표시한다.', base: '점검 항목 5개를 스스로 읽고 표시한다.', challenge: '출구 고르기에서 가장 자신 없는 항목을 보완할 방법을 고르고 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 게이트키퍼 행동 가운데 지금 내가 할 수 있는 것을 솔직하게 표시해 봐요. 다 못 해도 괜찮아요." 표시한 뒤 가장 자신 없는 항목 하나를 고르게 한다. "나는 말주변이 없어서 못 한다"는 학생에게 "말을 잘하는 것과 끝까지 들어 주는 것 가운데 무엇이 더 필요할까요?"라고 묻는다. 오늘 수업이 마음에 걸리는 사람은 상담 선생님을 찾아와도 된다고 말하며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 게이트키퍼 점검' }, prompt: '지금 내가 할 수 있는 게이트키퍼 행동을 스스로 점검해 표시하세요.', target: { selfCheck: ['친구의 말·행동·감정 변화를 살핀다', '판단하지 않고 끝까지 듣는다', '생명과 관련된 비밀은 믿을 어른에게 잇는다', '상담 선생님·Wee 클래스에 함께 갈 수 있다', '위급하면 112·119, 상담은 1388을 안다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '\'판단하지 않고 끝까지 듣기\'가 가장 자신 없다면, 보완할 방법으로 알맞은 것은?', options: ['충고할 말을 미리 많이 준비한다', '"그랬구나, 더 말해 줘"처럼 들어 주는 말을 익혀 둔다', '어려우니 듣기는 건너뛴다'], answer: 1, difficulty: 0.15, explain: '들어 주는 짧은 말을 익혀 두면 친구가 말을 이어 갈 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 게이트키퍼 점검',
          items: [
            { type: 'check', prompt: '지금 할 수 있는 것에 표시하세요.', options: ['변화 살피기', '판단 없이 듣기', '비밀이어도 어른에게 잇기', '함께 상담실에 가기', '도움 경로 알기'] },
            { type: 'short', prompt: '가장 자신 없는 항목 하나와 보완할 방법을 쓰세요.' },
          ],
        },
        notes: GK_NOTE,
      }),
    );
  }

  // ======================================================================================================
  // 6. 진화하는 사이버폭력과 명예훼손, 표현의 자유 찬반 (11학년)
  // ======================================================================================================
  {
    const M = MOD('cyber-defame', [11]);
    const NEWKIND = [['강제 초대', '나가도 단톡방에 계속 다시 초대해 괴롭힌다'], ['떼 지어 공격', '여럿이 한 사람의 게시물에 몰려가 비난 댓글을 단다'], ['기프티콘 갈취', '모바일 상품권·게임 아이템을 보내라고 강요한다'], ['사칭 계정', '다른 사람인 척 계정을 만들어 글을 올린다'], ['몰래 캡처 유포', '대화·사진을 허락 없이 저장해 퍼뜨린다']];
    const TREND = [['욕설·비방', 2], ['강제 초대', 9], ['떼 지어 공격', 6], ['기프티콘 갈취', 4], ['사칭 계정', 3]];
    const BAR = (q, more = {}) => Object.assign({ type: 'bar', mode: 'read', title: '작년보다 늘어난 응답(가상 학교 설문, 상대 크기)', yLabel: '늘어난 정도', xLabel: '유형', data: TREND, question: q }, more);
    const EXPOSE = { text: '같은 반 태오가 동아리 회비를 마음대로 썼다는 이야기를 들었다. 화가 난 나는 학교 익명 커뮤니티에 고발 글을 쓰려 한다.', who: '나', motif: 'star', choices: [
      { id: 'post', text: '태오 이름을 넣어 지금 바로 올린다', result: '댓글이 수십 개 달리고 누군가 태오의 사진까지 퍼 나른다.', impact: [{ who: '태오', text: '사실 확인 전에 낙인이 찍힌다', tone: -1 }, { who: '나', text: '글에 대한 책임 문제가 생길 수 있다', tone: -1 }],
        next: { text: '태오가 "오해야, 영수증이 있어"라고 해명 글을 올렸다.', choices: [
          { id: 'delete', text: '글을 내리고 사과 글을 올린다', result: '원글은 내려갔지만 캡처본은 계속 돈다.', impact: [{ who: '태오', text: '지워지지 않는 소문이 남는다', tone: -1 }], ending: '한번 퍼진 고발 글은 지워도 상처와 책임이 남는다.' },
          { id: 'keep', text: '"해명은 핑계"라며 그대로 둔다', result: '태오와 보호자가 학교에 피해를 알리고 일이 커진다.', impact: [{ who: '나', text: '명예훼손 쟁점에 휘말린다', tone: -1 }], ending: '확인 없는 고발을 고집하면 표현이 아니라 가해가 될 수 있다.' }] } },
      { id: 'check', text: '올리기 전에 동아리 담당 선생님께 사실 확인을 요청한다', result: '선생님이 회비 장부를 함께 보자고 한다.', impact: [{ who: '동아리', text: '문제를 확인할 길이 생긴다', tone: 1 }],
        next: { text: '장부를 보니 실제로 설명되지 않는 돈이 있었다.', choices: [
          { id: 'process', text: '선생님과 동아리 회의에서 절차대로 다루자고 한다', result: '회의에서 태오가 설명할 기회를 얻는다.', impact: [{ who: '태오', text: '설명하고 바로잡을 기회를 얻는다', tone: 1 }],
            next: { text: '태오가 사과하고 돈을 돌려놓겠다고 했다. 몇몇은 "그래도 커뮤니티에 올려 망신 줘야 한다"고 한다.', choices: [
              { id: 'record', text: '회의 기록으로 남기고 공개 비난은 하지 않는다', result: '회비 규칙이 새로 정해지고 동아리가 다시 돌아간다.', impact: [{ who: '동아리', text: '문제가 바로잡힌다', tone: 1 }, { who: '태오', text: '책임지고 관계를 회복할 길이 남는다', tone: 1 }], ending: '문제는 절차로 바로잡고, 사람을 공개적으로 망신 주지 않는다.' },
              { id: 'shame', text: '그래도 이름을 넣어 커뮤니티에 올린다', result: '바로잡힌 일이 다시 소문이 되어 퍼진다.', impact: [{ who: '태오', text: '이미 책임진 일로 또 공격받는다', tone: -1 }], ending: '사실이어도 망신 주려는 공개 글은 또 다른 폭력이 될 수 있다.' }] } },
          { id: 'postnow', text: '확인됐으니 이제 이름을 넣어 올린다', result: '글이 퍼지며 태오를 향한 욕설 댓글이 쌓인다.', impact: [{ who: '태오', text: '여럿에게 공격받는다', tone: -1 }], ending: '사실이 확인됐어도 공개 비난 글은 명예훼손 쟁점이 될 수 있다.' }] } },
      { id: 'hint', text: '이름은 빼고 "누군지 다 알지?"라며 힌트만 올린다', result: '댓글로 누구인지 금방 드러난다.', impact: [{ who: '태오', text: '이름 없이도 지목된다', tone: -1 }], ending: '이름을 빼도 누구인지 알 수 있으면 같은 문제가 생긴다.' }] };
    const EXPOSE_R = [{ id: 'verify', text: '공개하기 전에 사실을 확인할 길을 먼저 찾는다' }, { id: 'proc', text: '잘못은 절차로 바로잡을 수 있다' }, { id: 'nofame', text: '사실이어도 망신 주려는 공개 글은 문제가 될 수 있다' }, { id: 'truth', text: '사실이면 무엇이든 올려도 된다', why: '사실이어도 사람을 깎아내리려고 공개하면 명예훼손 쟁점이 될 수 있어요.' }, { id: 'anon', text: '익명 커뮤니티라 책임이 없다', why: '익명이어도 쓴 글에 대한 책임은 사라지지 않아요.' }];
    const EXPOSE_PATH = ['check', 'process', 'record'];
    const EXPOSEQ = {
      prompt: '고발 글을 올릴지 선택을 끝까지 이어 가고, 내 선택의 근거를 고르세요.',
      toolOptions: { scene: EXPOSE, reasons: EXPOSE_R, title: '고발 글을 올릴까' },
      target: { path: [EXPOSE_PATH], reasons: ['verify', 'proc', 'nofame'] }, difficulty: 0.4,
      levels: {
        easy: { prompt: '고발 글을 올릴지 선택을 이어 가고, 내 선택의 근거를 고르세요(갈림길 둘).', toolOptions: { scene: cut(EXPOSE, 2) }, target: { path: [EXPOSE_PATH.slice(0, 2)], reasons: ['verify', 'proc', 'nofame'] } },
        challenge: { prompt: '고발 글을 올릴지 선택을 끝까지 이어 가고 근거를 고른 뒤, 올리는 길도 끝까지 가 보고 견주세요(끝 장면 둘 이상).', target: { path: [EXPOSE_PATH], reasons: ['verify', 'proc', 'nofame'], explore: 2 } },
      },
    };

    MODS.push(
      M({
        id: 'intro.names', type: 'intro', title: '새로 생긴 사이버폭력의 이름',
        method: '새 사이버폭력 이름과 모습 잇기', tool: 'wordcards', minutes: 6,
        levels: { easy: '이름 카드 3개(강제 초대·떼 지어 공격·기프티콘 갈취)만 함께 짝짓는다.', base: '이름 카드 5개를 모습 설명과 짝짓는다.', challenge: '짝지은 유형이 예전의 욕설·따돌림과 무엇이 다른지(끝없이 이어짐·여럿이 순식간에·돈과 물건) 짝과 말한다.' },
        intro: {
          teacher: '"사이버폭력은 욕설만 있는 게 아니에요. 요즘 새로 이름이 붙은 모습들이 있어요." 시연 단추로 이름 카드가 설명과 짝지어지는 모습을 보여 준다. "단톡방에 초대하는 건 장난일 뿐"이라는 말이 나오면 "나가도 나가도 다시 초대된다면, 그 사람은 언제 쉴 수 있을까요?"라고 되묻는다. 공간이 학교 밖 화면으로 옮겨 갔을 뿐 괴롭힘이라는 점은 같고, 잘못은 늘 괴롭히는 쪽에 있다는 점을 짚는다.',
          student: '새로 이름이 붙은 사이버폭력 카드와 그 모습을 설명한 카드를 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { words: NEWKIND.map(([en, ko]) => ({ en, ko })) }, sequence: [{ match: Object.fromEntries(NEWKIND.map(([en]) => [en, en])) }] },
          art: { draw: 'a paper smartphone with chat bubbles multiplying around it, a paper door marked exit that keeps reopening, small paper gift card shapes being pulled by hands, a calm paper student stepping back', banner: '화면 속 괴롭힘에도 이름이 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례는 일반적인 모습만 다룬다. 학생에게 겪은 일을 묻지 않는다. 새 유형의 이름은 학교·기관마다 조금씩 다르게 부른다.',
      }),
      M({
        id: 'intro.data', type: 'intro', title: '가상 설문으로 보는 사이버폭력 경향',
        method: '가상 자료로 사이버폭력 경향 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝에 값을 보이고 가장 큰 막대를 함께 찾는다.', base: '값 없이 막대만 보고 가장 늘어난 유형을 고르고 그 뜻을 말한다.', challenge: '이 자료만으로는 판단할 수 없는 점(실제로 늘었는지, 이름을 알게 되어 더 답했는지)을 고른다.' },
        intro: {
          teacher: '"가상 학교 설문이에요. 작년보다 \'보거나 들은 적 있다\'는 응답이 늘어난 정도를 유형별로 나타냈어요. 가장 크게 늘어난 것은 무엇인가요?" 시연 단추로 가장 큰 막대가 골라지는 모습을 보여 준다. "막대가 크니 그 폭력이 진짜 그만큼 늘었다"는 말이 나오면 "올해 그 이름을 처음 배워서 더 많이 답했을 수도 있지 않을까요?"라고 되묻는다. 자료는 경향을 보여 주지만 해석에는 조심이 필요하다는 점을 짚는다.',
          student: '가상 학교 설문 막대그래프에서 작년보다 가장 크게 늘어난 유형을 찾고, 그 결과를 어떻게 해석할지 생각해 보세요.',
          demo: { tool: 'chart', options: BAR('가장 크게 늘어난 유형은?', { choices: TREND.map((x) => x[0]), showValues: true }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper bar chart with five bars of different heights standing on a desk, a paper magnifying glass over the tallest bar, a question mark cut from paper floating beside it', banner: '숫자를 조심해서 읽어요', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '그래프는 수업용 가상 자료다. 설문은 \'보거나 들은 적\'으로만 다루고, 학생에게 피해 경험을 묻지 않는다.',
      }),

      M({
        id: 'activity.posts', type: 'activity', title: '게시글, 명예훼손일까 모욕일까',
        method: '게시글 사례를 명예훼손·모욕·해당 없음으로', tool: 'story', minutes: 18,
        levels: { easy: '가상 게시글 카드 4장을 명예훼손·모욕·해당 없음 칸에 나눈다(바로 피드백).', base: '카드 7장을 나누고, 판단 근거(사실 적시·비방 목적·공개성)를 짝지으며, \'사실이면 괜찮다\'가 틀린 근거를 고른다.', challenge: '판단이 갈리는 카드 2장이 더해진 9장을 나누고, 활동지에 판단이 갈리는 글의 쟁점을 쓴다.' },
        activity: {
          title: '게시글 나누기', tool: 'story',
          teacher: '"가상 게시글이에요. 어떤 글은 사람에 대한 구체적인 내용을 드러내 평판을 깎고, 어떤 글은 내용 없이 깎아내리는 말을 해요. 여러 사람이 볼 수 있는 곳이라는 점도 따져 봐요." 카드를 놓을 때마다 "이 글은 사실을 드러내나요, 깎아내리는 말뿐인가요? 몇 명이 볼 수 있나요?"라고 묻는다. "사실이면 올려도 된다"는 학생에게 "친구의 사실인 약점을 반 전체가 보는 방에 올리는 것이 괜찮을까요?"라고 되묻는다. 실제 판단은 법원과 전문가의 몫이고 오늘은 쟁점을 알아보는 연습이라는 점을 밝힌다.',
          task: '가상 게시글 카드를 세 칸에 나누고 판단 근거를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 게시글 카드를 명예훼손·모욕·해당 없음 칸에 나누세요.', ['명예훼손', '모욕', '해당 없음'], [
              ['반 단톡방에 "A가 시험 때 커닝했다"고 올림', '공개 게시판에 "A네 집이 빚이 많다더라"고 씀', '확인 안 된 "그 가게 주인이 돈을 훔쳤다" 후기'],
              ['공개 댓글에 "A는 진짜 쓰레기"라고 씀', '여럿이 보는 방에 A를 비하하는 별명을 올림'],
              ['"이 식당 음식은 내 입맛엔 짰다"는 후기', '"오늘 내 발표 망했다"는 내 이야기'],
            ], { k: 2, hard: [['"B가 회비를 마음대로 썼다"는 익명 글'], [], ['"이 영화는 지루했다"는 감상평']], d: 0.35, opt: { title: '가상 게시글' } }),
            MATCHQ('판단 기준마다 그것이 드러난 글 속 부분을 짝지으세요.', [['공개성', '반 단톡방에 올림'], ['사실 적시', '"시험 때 커닝했다"는 구체적인 내용'], ['비방 목적', '"망신 좀 당해 봐"라는 말을 덧붙임']], { k: 2, extra: ['"내 입맛엔 짰다"는 느낌'], d: 0.35, more: { hints: ['몇 명이 볼 수 있는지, 구체적인 내용을 드러냈는지, 깎아내리려는 뜻이 보이는지를 나누어 보세요.'] } }),
            PICKQ('\'사실이면 올려도 된다\'가 틀린 근거만 고르세요.', ['사실을 드러내도 사람의 평판을 깎으면 문제될 수 있다', '공개된 글은 지워도 캡처로 남는다'], ['사실은 언제나 자유롭게 말할 수 있다', '익명이면 아무도 책임지지 않는다'], { d: 0.4, opt: { basket: '근거' }, more: { conclude: '사실이어도, 익명이어도 공개된 곳에서 사람을 깎아내리면 문제될 수 있어요. 잘못을 알리고 싶다면 사람이 아니라 절차를 찾아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'"B가 회비를 마음대로 썼다"는 익명 글\'처럼 판단이 갈리는 글 하나를 골라, 무엇이 쟁점인지 두 문장으로 쓰세요.' }] },
        notes: '게시글은 모두 가상이다. 명예훼손·모욕의 실제 판단은 상황에 따라 달라 법원이 가린다. 수업에서는 형량을 다루지 않는다.',
      }),
      M({
        id: 'activity.expose', type: 'activity', title: '고발 글을 올릴까',
        method: '고발 글을 올릴까 갈림길과 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 둘까지 고르고 근거를 고른다.', base: '갈림길 셋을 끝까지 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 지나 근거를 고른 뒤, 올리는 길도 끝까지 가 보고 두 결과를 견준다.' },
        activity: {
          title: '고발 글 갈림길', tool: 'dilemma',
          teacher: '"친구의 잘못을 알게 됐어요. 화가 나는 건 당연해요. 그럼 잘못을 알리는 가장 좋은 길은 무엇일까요?" 선택마다 댓글·확산·관계의 결과를 소리 내어 읽게 한다. \'지금 바로 올린다\'를 고른 학생에게 "그 글이 사실이 아니었다면, 또 사실이었다면 각각 무엇이 남을까요?"라고 묻는다. 잘못을 바로잡는 것과 사람을 공개적으로 망신 주는 것은 다르다는 점을 짚는다.',
          task: '고발 글 갈림길을 따라 결과를 보고 잘못을 바로잡는 길의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            EXPOSEQ,
            EXPLOREQ('\'힌트만 올린다\' 길과 \'확인 뒤 올린다\' 길도 끝까지 가 보고 결과를 견주세요.', EXPOSE, EXPOSE_R, ['다른 길의 끝 장면을 확인했다', '태오와 나에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('누군가 익명 게시판에 친구 C에 대한 소문 글을 올렸어요. 알맞은 길을 고르고 근거를 고르세요.', { text: '익명 게시판에 "C가 뒤에서 친구들 욕하고 다닌대"라는 글이 올라왔다. 친구들이 그 글을 단톡방으로 퍼 나른다.', who: '나', motif: 'cloud', choices: [
              { id: 'share', text: '나도 단톡방에 퍼 나른다', result: '소문이 다른 반까지 퍼진다.', impact: [{ who: 'C', text: '확인도 없이 따돌림을 받는다', tone: -1 }], ending: '퍼 나르는 사람도 소문을 키우는 책임에서 벗어나기 어렵다.' },
              { id: 'stop', text: '퍼 나르지 않고 단톡방에 "확인 안 된 글은 멈추자"고 쓴다', result: '몇 명이 공유를 멈춘다.', impact: [{ who: 'C', text: '소문이 덜 퍼진다', tone: 1 }],
                next: { text: '그래도 글은 게시판에 남아 있다.', choices: [
                  { id: 'report', text: '게시판 신고 기능으로 신고하고 담임 선생님께 알린다', result: '글이 내려가고 선생님이 C를 살핀다.', impact: [{ who: 'C', text: '보호받는다', tone: 1 }], ending: '멈추고, 신고하고, 어른에게 알리면 소문의 고리를 끊을 수 있다.' },
                  { id: 'ignore', text: '나는 안 퍼뜨렸으니 됐다고 여긴다', result: '글은 남아 계속 읽힌다.', impact: [{ who: 'C', text: '여전히 소문 속에 있다', tone: 0 }], ending: '내가 퍼뜨리지 않는 것과 피해를 멈추는 것은 다르다.' }] } }] },
            [['stop', 'report']], [{ id: 'chain', text: '공유를 멈추면 소문의 고리가 끊긴다' }, { id: 'tell', text: '신고하고 어른에게 알리면 피해를 멈출 수 있다' }, { id: 'fun', text: '모두 퍼 나르니 나 하나쯤 괜찮다', why: '한 번의 공유도 소문을 키워요. 피해는 퍼진 만큼 커져요.' }], ['chain', 'tell'], { d: 0.35, more: { conclude: '사실 확인, 절차로 알리기, 공유 멈추기 — 표현의 자유는 다른 사람의 명예를 짓밟지 않는 데서 지켜져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구의 잘못을 알게 되었을 때, 공개 글을 올리지 않고 문제를 알리는 방법 두 가지를 쓰세요.' }] },
        notes: '사례는 가상이다. \'명예훼손 쟁점\'은 가능성을 말할 뿐 실제 판단은 상황에 따라 달라진다. 형량은 다루지 않는다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '익명 기능, 없애야 하나',
        method: '찬반 근거 맵 “학교 커뮤니티 익명 기능, 없애야 하나”', tool: 'mindmap', minutes: 18,
        levels: { easy: '근거 카드 6장을 찬성·반대·근거 약함 가지에 바로 피드백 받으며 나눈다.', base: '근거 카드 8장을 나누고, 근거마다 예상 반론을 짝짓는다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 양쪽이 함께 동의할 수 있는 지점까지 고른다(고르기 문항은 모든 단계에 있다).' },
        activity: {
          title: '익명 기능 찬반', tool: 'mindmap',
          teacher: '"\'학교 커뮤니티의 익명 기능을 없애야 한다.\' 오늘은 내 편을 정하기 전에 양쪽의 가장 강한 근거부터 찾아봐요." 카드를 놓을 때마다 "이 근거는 누가 들어도 확인할 수 있나요?"라고 묻는다. "익명이면 책임이 없으니 무조건 없애야 한다"는 학생에게 "괴롭힘을 목격한 학생이 실명으로만 알릴 수 있다면 어떻게 될까요?"라고 되묻고, 반대쪽에도 강한 근거가 있다는 점을 짚는다. 익명이어도 쓴 글에 대한 책임은 사라지지 않는다는 점도 함께 말한다.',
          task: '근거 카드를 찬반 가지에 나누고 예상 반론과 공통점을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성(없애야 한다)·반대(유지해야 한다)·근거 약함 가지에 나누세요.', ['찬성(없애야 한다)', '반대(유지해야 한다)', '근거 약함'], [
              ['익명 뒤에서 비방 글이 쉽게 올라온다', '떼 지어 공격이 익명일 때 더 커진다', '피해가 생겨도 쓴 사람을 바로 알기 어렵다'],
              ['익명이라 털어놓을 수 있는 고민이 있다', '괴롭힘을 목격해도 실명으론 알리기 어렵다', '없애도 다른 앱으로 옮겨 갈 수 있다'],
              ['익명 게시판은 재미가 없다', '다른 학교도 없앴다더라'],
            ], { k: 2, hard: [['신고가 들어와도 처리가 늦어진다'], ['실명이면 소수 의견이 줄어들 수 있다']], d: 0.35, opt: { topic: '익명 기능, 없애야 하나' } }),
            MATCHQ('근거마다 상대 쪽에서 나올 예상 반론을 짝지으세요.', [['익명 뒤에서 비방 글이 쉽게 올라온다', '신고·삭제를 빠르게 하면 익명을 지키며 줄일 수 있다'], ['익명이라 털어놓을 수 있는 고민이 있다', '고민은 상담 선생님·Wee 클래스 같은 다른 통로로도 말할 수 있다'], ['없애도 다른 앱으로 옮겨 갈 수 있다', '학교 공간에서라도 줄이면 피해가 작아진다']], { k: 2, extra: ['그냥 다들 싫어한다'], d: 0.4, opt: { topic: '예상 반론' }, more: { hints: ['상대 쪽 사람이 그 근거를 들었다면 무엇이라고 답할지 떠올려 보세요.'] } }),
            PICKQ('찬성과 반대 쪽이 함께 동의할 수 있는 지점만 고르세요.', ['누구도 비방의 표적이 되어서는 안 된다', '신고와 삭제는 빨라야 한다'], ['익명이면 책임이 없다', '표현은 무엇이든 자유다'], { d: 0.4, opt: { basket: '함께 동의할 지점' }, more: { conclude: '찬반이 달라도 \'누구도 공격받지 않는 공간\'이라는 목표는 같을 수 있어요. 공통점에서 해결책이 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 쪽과 반대쪽의 가장 강한 근거 하나를 적고, 그 근거에 대한 내 답을 한 줄로 쓰세요.' }] },
        notes: '\'근거 직접\'은 교구가 학생이 쓴 근거 카드를 만들지 못해, 카드를 주고 활동지·입장문에서 근거를 직접 쓰게 했다.',
      }),
      M({
        id: 'activity.position', type: 'activity', title: '익명 기능 찬반 입장문',
        method: '찬반 입장문 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '주장·근거·반론 대응을 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 상대 입장의 가장 강한 근거를 인정한 뒤 답한다.' },
        activity: {
          title: '입장문 세 칸 쓰기', tool: 'rubric-writing',
          teacher: '"익명 기능, 없애야 할까요? 이제 한쪽을 골라 입장문을 써 봐요. 어느 쪽을 골라도 좋아요. 점수는 편이 아니라 근거와 반론 대응에서 나와요." 기준표를 먼저 함께 읽는다. "내 생각이 맞으니까"처럼 근거 없이 주장만 반복한 학생에게 "이 글을 반대쪽 친구가 읽으면 무엇 때문에 생각을 바꿀까요?"라고 묻는다. 상대 근거를 인정하는 것이 내 입장을 약하게 하는 게 아니라 단단하게 한다는 점을 짚는다. 실제 사람이나 사건 이름은 쓰지 않게 한다.',
          task: '익명 기능에 대한 입장문을 주장·근거·반론 대응 순서로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('내 주장을 1~2문장으로 쓰세요.', '학교 커뮤니티 익명 기능에 대한 내 주장(없애야 한다/유지해야 한다)을 쓰세요.', ['찬성·반대가 분명하다', '무엇을 바꾸자는지 구체적이다', '사람을 깎아내리는 말이 없다'], { min: 20, max: 200, sent: [1, 2], must: [['익명']], starter: '나는 학교 커뮤니티 익명 기능을 ~해야 한다고 생각한다.', plus: '조건을 붙인 주장(예: ~라면)으로 다듬었다', d: 0.3 }),
            RWQ('주장을 뒷받침하는 근거를 2~3문장으로 쓰세요.', '주장을 뒷받침하는 근거 두 가지를 쓰세요.', ['근거가 두 가지다', '확인할 수 있는 근거다(소문·취향이 아님)', '주장과 근거가 이어진다'], { min: 50, max: 350, sent: [2, 3], must: [['왜냐하면', '때문에', '첫째']], starter: '왜냐하면 첫째, ~ 둘째, ~', plus: '근거마다 예를 하나씩 들었다', d: 0.35 }),
            RWQ('예상 반론에 대한 대응을 2~3문장으로 쓰세요.', '반대쪽에서 나올 반론을 하나 쓰고, 그에 대한 내 대응을 쓰세요.', ['반대쪽 반론을 정확히 옮겼다', '반론에 근거로 답했다', '내 주장으로 끝맺었다'], { min: 50, max: 350, sent: [2, 3], must: [['물론', '반대', '하지만']], starter: '물론 ~라는 의견도 있다. 하지만 ~', plus: '상대 입장의 가장 강한 근거를 먼저 인정했다', d: 0.4, sample: '물론 익명이라 고민을 털어놓을 수 있다는 의견도 있다. 그 점은 중요하다. 하지만 고민은 상담 선생님이나 Wee 클래스로도 말할 수 있고, 익명 비방은 막을 길이 적다. 그래서 나는 익명 기능을 없애고 고민 상담 통로를 따로 두자고 주장한다.', more: { conclude: '좋은 입장문은 내 편을 외치는 글이 아니라, 상대를 설득할 근거와 반론 대응이 있는 글이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '입장문의 뼈대를 정리하세요.', columns: ['칸', '쓸 내용'], cells: [['주장', ''], ['근거 1·2', ''], ['예상 반론', ''], ['내 대응', '']] }] },
      }),

      M({
        id: 'wrap.trace', type: 'wrap', title: '글 하나가 남는 흐름',
        method: '글 하나가 남는 흐름 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 앞 세 단계(작성·공유·캡처)를 먼저 놓아 보이고 나머지를 함께 놓는다.', base: '단계 카드 5장을 스스로 차례로 놓는다.', challenge: '출구 고르기에서 단계마다 책임이 생기는 사람을 고르고 짝에게 설명한다.' },
        wrap: {
          teacher: '"글 하나를 올리고 지우면 끝일까요? 오늘 본 흐름을 차례로 놓아 봐요." 카드를 놓은 뒤 \'원글을 지운다\' 다음에 무엇이 남는지 묻는다. "지우면 다 사라진다"는 학생에게 "그 사이 누군가 캡처했다면, 그 캡처는 누가 지울 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: ['원글을 지운다', '친구들이 공유한다', '캡처본이 계속 돈다', '글을 쓴다', '누군가 캡처해 저장한다'] }, prompt: '글 하나가 남는 흐름을 차례로 놓으세요.', target: { order: ['글을 쓴다', '친구들이 공유한다', '누군가 캡처해 저장한다', '원글을 지운다', '캡처본이 계속 돈다'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '비방 글이 퍼지는 흐름에서 책임에 대한 말로 가장 알맞은 것은?', options: ['처음 쓴 사람에게만 책임이 있다', '공유하고 퍼 나른 사람도 책임에서 벗어나기 어렵다', '지우기만 하면 아무 책임이 없다'], answer: 1, difficulty: 0.2, explain: '글을 쓴 사람뿐 아니라 퍼 나르며 피해를 키운 사람도 책임이 따를 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '글 하나가 남는 흐름',
          items: [
            { type: 'table', prompt: '단계마다 내가 할 수 있는 멈춤 행동을 쓰세요.', columns: ['단계', '내가 할 수 있는 멈춤'], cells: [['공유', ''], ['캡처', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '원글을 지워도 ___본은 남을 수 있다.', answer: '캡처' },
          ],
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '올리기 전 점검표',
        method: '올리기 전 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 점검 후보 3개를 먼저 함께 읽고 넣을지 고른다.', base: '점검 후보 8개 가운데 올리기 전에 확인할 항목 5개만 골라 표시한다.', challenge: '출구 글쓰기에서 점검표를 친구에게 권할 한 문장으로 바꾼다.' },
        wrap: {
          teacher: '"글을 올리기 전 10초, 무엇을 확인하면 오늘 본 일들을 막을 수 있을까요?" 후보 가운데 점검 항목만 고르게 한다. \'익명이라 괜찮은가\'를 고르는 학생에게 "익명이면 글에 대한 책임이 사라질까요?"라고 묻는다. 점검표는 남을 막는 규칙이 아니라 내 글을 지키는 습관이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '올리기 전 점검표', items: [{ id: 'fact', text: '사실인지 확인했나' }, { id: 'need', text: '꼭 필요한 글인가' }, { id: 'hurt', text: '누군가 다치지 않는가' }, { id: 'views', text: '조회수가 잘 나올까' }, { id: 'face', text: '그 사람 앞에서도 할 수 있는 말인가' }, { id: 'anon', text: '익명이라 괜찮은가' }, { id: 'perm', text: '남의 사진·대화를 허락받았나' }, { id: 'all', text: '다들 쓰는 말인가' }] }, prompt: '글을 올리기 전에 확인할 항목만 표시하세요.', target: { checklist: ['fact', 'need', 'hurt', 'face', 'perm'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['사실이어도 공개적으로 깎아내리면 문제될 수 있다', '익명이면 쓴 글에 책임이 없다', '잘못은 사람을 망신 주기보다 절차로 알린다'], answer: 1, difficulty: 0.15, explain: '익명이어도 쓴 글에 대한 책임은 사라지지 않아요.' },
            { type: 'short', prompt: '점검표 가운데 하나를 골라 친구에게 권할 한 문장으로 바꿔 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '올리기 전 점검표',
          items: [
            { type: 'check', prompt: '올리기 전에 확인할 것에 표시하세요.', options: ['사실인가', '꼭 필요한가', '누군가 다치지 않는가', '그 사람 앞에서도 할 말인가', '허락받았나'] },
            { type: 'short', prompt: '사이버폭력을 보거나 알게 되었을 때 도움을 청할 곳(117·112·담임 선생님 등)과 내가 할 첫 행동을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 7. 데이트폭력의 신호, 통제와 집착 알아차리기 (11학년)
  // ======================================================================================================
  {
    const M = MOD('dating-violence', [11]);
    // 갈림길 셋 나무: 쉬움 = 갈림길 둘까지, 기본 = 셋 모두, 도전 = 셋 모두 + 다른 끝 장면도 가 보기
    const DIL3 = (prompt, scene, paths, reasons, good, { d = 0.4, more = {} } = {}) => {
      const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
      return Object.assign({ prompt, toolOptions: { scene, reasons }, target: at(3), difficulty: d,
        levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
          challenge: { prompt: pfx(prompt, '다른 끝도 가 보기'), target: Object.assign(at(3), { explore: 2 }) } } }, more);
    };
    // 말풍선 빈칸(story fill): lines = [[칸 id, 말하는 사람, '…___…', 카드 id, 카드 글]…]. 쉬움 = 앞 k줄, 도전 = hard 줄 더함
    const FILLQ = (prompt, title, lines, { k = 2, extra = [], hard = [], d = 0.3, more = {} } = {}) => {
      const mk = (ls, ex) => ({ mode: 'fill', title, slots: ls.map(([id, who, label]) => ({ id, who, label })), cards: [...ls.map(([, , , cid, text]) => ({ id: cid, text })).reverse(), ...ex] });
      const tg = (ls) => ({ fill: Object.fromEntries(ls.map(([id, , , cid]) => [id, cid])) });
      const it = { prompt, toolOptions: mk(lines, extra), target: tg(lines), difficulty: d, levels: { easy: { prompt: pfx(prompt, `빈칸 ${k}개`), toolOptions: mk(lines.slice(0, k), extra.slice(0, 1)), target: tg(lines.slice(0, k)) } } };
      if (hard.length) it.levels.challenge = { prompt: pfx(prompt, `빈칸 ${lines.length + hard.length}개`), toolOptions: mk([...lines, ...hard], extra), target: tg([...lines, ...hard]) };
      return Object.assign(it, more);
    };
    const SURVEY = [['메시지 확인하기', 20], ['위치 늘 공유하기', 50], ['옷차림 정해 주기', 15], ['바로 답장 요구', 35], ['서로 일정 존중', 85]];
    const LOC = { text: '쉬는 시간, 친구 지우가 “남자친구가 하루 종일 위치 공유를 켜 두래. 안 켜면 화내”라고 말한다.', who: '지우', motif: 'cloud', choices: [
      { id: 'normal', text: '“연인이면 그 정도는 해 줘야지”라고 한다', result: '지우가 고개를 끄덕이고 위치 공유를 켠다.', impact: [{ who: '지우', text: '통제를 당연한 일로 여기게 된다', tone: -1 }], ending: '통제를 당연하다고 말해 주면 친구는 다음에 도움을 청하기 어려워진다.' },
      { id: 'listen', text: '걱정되는 점을 말하고 지우의 이야기를 끝까지 듣는다', result: '지우가 “사실 좀 답답했어”라고 털어놓는다.', impact: [{ who: '지우', text: '마음을 말할 사람이 생긴다', tone: 1 }],
        next: { text: '지우가 “그래도 나 걱정해서 그러는 거야. 괜찮아”라며 이야기를 접으려 한다.', choices: [
          { id: 'drop', text: '지우가 괜찮다니 더는 말하지 않는다', result: '이후 지우가 그 이야기를 꺼내지 않는다.', impact: [{ who: '지우', text: '혼자 견디게 된다', tone: -1 }], ending: '한 번 거절했다고 손을 놓으면 친구는 다시 말할 곳을 잃는다.' },
          { id: 'stay', text: '“네 편이야. 언제든 다시 말해 줘”라고 하고 곁에 있는다', result: '지우가 며칠 뒤 다시 말을 건다.', impact: [{ who: '지우', text: '믿을 사람이 있다고 느낀다', tone: 1 }],
            next: { text: '며칠 뒤 지우가 “위치를 보고 학원 앞까지 찾아왔어. 무서운데 선생님께는 말하지 마”라고 한다.', choices: [
              { id: 'counsel', text: '“네 안전이 먼저야. 같이 상담 선생님께 가자”고 하고 함께 간다', result: '상담 선생님이 지우와 안전 계획을 함께 세운다.', impact: [{ who: '지우', text: '보호를 받고 혼자가 아니게 된다', tone: 1 }], ending: '안전이 걸린 비밀은 믿을 어른에게 함께 가져가는 것이 친구를 지키는 길이다.' },
              { id: 'keep', text: '부탁대로 아무에게도 말하지 않는다', result: '연인이 학원 앞에 오는 일이 이어진다.', impact: [{ who: '지우', text: '위험이 커진다', tone: -1 }], ending: '안전이 걸린 일은 비밀 약속보다 친구의 안전이 먼저다.' },
              { id: 'post', text: '지우 몰래 연인 SNS에 경고 글을 올린다', result: '연인이 화가 나 지우에게 더 집착한다.', impact: [{ who: '지우', text: '더 위험해지고 친구 사이도 흔들린다', tone: -1 }], ending: '혼자 맞서는 대신 친구와 함께 어른의 도움을 받는다.' }] } }] } },
      { id: 'rumor', text: '반 단톡방에 “지우 남친 이상하대”라고 올린다', result: '소문이 퍼지고 지우가 친구들을 피한다.', impact: [{ who: '지우', text: '부끄러움과 고립이 커진다', tone: -1 }], ending: '소문은 친구를 돕지 못하고 더 혼자로 만든다.' }] };
    const LOC_R = [{ id: 'safe', text: '친구의 안전은 비밀 약속보다 앞선다' }, { id: 'side', text: '판단하지 않고 곁에 있어야 친구가 다시 말할 수 있다' }, { id: 'love', text: '위치를 늘 확인하는 것은 사랑해서다', why: '사랑은 감시가 아니라 상대의 선택을 존중하는 데서 드러나요.' }, { id: 'private', text: '연인 사이 일은 둘이 알아서 할 일이다', why: '통제와 위협은 둘만의 문제가 아니라 도움이 필요한 일이에요.' }];

    MODS.push(
      M({
        id: 'intro.messages', type: 'intro', title: '연인 메시지 속 받는 사람의 마음',
        method: '가상 연인 메시지 장면 속 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 낱말 보기 4개 가운데 고른다.', base: '마음 낱말 보기 8개 가운데 받는 사람의 마음을 고른다.', challenge: '보내는 사람의 말이 관심인지 통제인지, 고른 마음을 근거로 말한다.' },
        intro: {
          teacher: '"가상의 메시지예요. 10분마다 “지금 누구랑 있어? 사진 보내”가 와요. 받는 사람은 어떤 마음일까요?" 두세 명에게 마음 낱말을 고르게 하고 시연 단추로 고른 카드가 바구니에 담기는 모습을 보여 준다. "그만큼 좋아하니까 그러는 거잖아요"라는 말이 나오면 "받는 사람이 설레는 마음보다 불안한 마음이 크다면, 그 말은 누구를 위한 말일까요?"라고 되묻는다. 오늘은 관심과 통제를 가르는 기준을 세운다고 밝힌다.',
          student: '가상 연인의 메시지가 10분마다 “지금 누구랑 있어? 사진 보내”라고 와요. 받는 사람의 마음에 가까운 낱말을 골라 보세요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '받는 사람의 마음', cards: [{ id: 'anx', text: '불안함' }, { id: 'stuffy', text: '답답함' }, { id: 'happy', text: '신남' }, { id: 'worry', text: '걱정' }, { id: 'calm', text: '편안함' }, { id: 'scared', text: '무서움' }, { id: 'proud', text: '뿌듯함' }, { id: 'sorry', text: '미안함' }], shuffle: false }, sequence: [{ pick: ['anx', 'stuffy', 'worry', 'scared'] }] },
          art: { draw: 'a paper smartphone with a column of identical speech bubbles stacking up, a small paper figure holding the phone with a grey cloud above, a clock face cut from paper beside it', banner: '관심일까, 통제일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '메시지 장면은 가상이다. 학생의 연애 경험이나 받은 메시지를 묻거나 보여 달라고 하지 않는다. "미안함"을 고른 학생이 있으면 통제받는 사람이 미안해할 까닭은 없다는 점을 짚는다.',
      }),
      M({
        id: 'intro.survey', type: 'intro', title: '가상 설문으로 보는 생각이 갈리는 행동',
        method: '가상 설문 막대 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝 값을 보며 가장 높은 막대와 낮은 막대를 함께 찾는다.', base: '값을 숨긴 채 막대 길이로 응답이 절반쯤 갈린 항목을 고른다.', challenge: '그 항목에서 생각이 갈리는 까닭(관심처럼 보이는 통제)을 말로 고른다.' },
        intro: {
          teacher: '"가상 설문이에요. ‘연인이 이렇게 해도 괜찮다’고 답한 학생 비율을 막대로 나타냈어요. 생각이 가장 갈리는 항목은 어디일까요?" 시연 단추로 절반쯤인 막대를 고르는 모습을 보여 준다. "많은 사람이 괜찮다고 하면 괜찮은 거죠"라는 말이 나오면 "응답 비율이 높다고 그 행동이 받는 사람에게 안전하다는 뜻일까요?"라고 되묻는다. 생각이 갈리는 항목일수록 기준이 필요하다는 점을 짚는다.',
          student: '가상 설문 막대그래프에서 ‘괜찮다’는 응답이 절반쯤이라 생각이 갈리는 항목을 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '연인의 이런 행동은 괜찮다(가상 설문)', unit: '%', yLabel: '괜찮다 응답', xLabel: '행동', data: SURVEY, question: '생각이 가장 갈리는 항목은?', choices: SURVEY.map((x) => x[0]) }, sequence: [{ pick: 1 }] },
          art: { draw: 'five paper bar columns of different heights on a desk, one column exactly halfway split in two colours, a paper heart and a paper padlock on either side', banner: '생각이 갈리는 곳에 기준이 필요해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '설문 값은 수업용 가상 자료다. 실제 조사 수치처럼 말하지 않는다. 학생에게 자기 생각을 손들어 밝히게 하지 않는다.',
      }),

      M({
        id: 'activity.signals', type: 'activity', title: '존중·통제 신호·위험 나누기',
        method: '행동을 존중·통제 신호·위험으로 나누기', tool: 'mindmap', minutes: 18,
        levels: { easy: '행동 카드 6장을 세 칸에 나눈다(바로 맞는지 보인다).', base: '카드 8장을 나누고, 행동마다 판단 근거를 짝짓는다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 처음엔 다정해 보이는 통제 행동을 골라 설명한다.' },
        activity: {
          title: '연인 관계 행동 세 칸', tool: 'mindmap',
          teacher: '"같은 행동도 어떤 마음과 방식으로 하느냐에 따라 존중이 되기도, 통제가 되기도 해요. 기준은 ‘상대가 싫다고 할 수 있는가’예요." 카드를 놓을 때마다 "받는 사람이 거절하면 어떻게 될까요?"라고 묻는다. "질투는 사랑의 증거다"라며 메시지 확인을 존중 칸에 넣는 학생에게 "보여 주기 싫다고 하면 이 관계에서 무슨 일이 생길까요?"라고 되묻는다. 위험 칸 행동은 둘이 풀 문제가 아니라 도움을 청할 일이라는 점을 짚는다.',
          task: '연인 관계 행동을 존중·통제 신호·위험으로 나누고 근거를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('연인 관계 행동 카드를 존중·통제 신호·위험 칸에 나누세요.', ['존중', '통제 신호', '위험'], [
              ['약속 전에 서로 일정을 묻고 맞춘다', '싫다고 하면 바로 멈춘다', '친구와의 약속을 응원한다'],
              ['메시지를 보여 달라고 한다', '옷차림을 바꾸라고 계속 말한다', '답장이 늦으면 화를 낸다'],
              ['헤어지자 하자 집 앞에서 계속 기다린다', '물건을 던지며 겁을 준다'],
            ], { k: 2, hard: [[], ['“걱정돼서”라며 위치를 늘 확인한다'], ['다른 친구를 못 만나게 막는다']], d: 0.3, opt: { topic: '연인 관계 행동' } }),
            MATCHQ('행동마다 판단 근거를 짝지으세요.', [['메시지를 보여 달라고 한다', '상대의 사생활을 감시한다'], ['답장이 늦으면 화를 낸다', '상대의 시간을 통제하려 한다'], ['싫다고 하면 바로 멈춘다', '상대의 거절을 존중한다']], { k: 2, extra: ['사랑하면 당연하다'], d: 0.35, opt: { topic: '판단 근거' }, more: { hints: ['상대가 거절할 수 있는지, 상대의 시간과 사생활이 지켜지는지가 근거예요.'] } }),
            PICKQ('처음엔 다정해 보이지만 통제로 이어질 수 있는 행동만 고르세요.', ['“걱정돼서”라며 위치를 늘 공유하자고 한다', '“나만 있으면 돼”라며 친구 모임을 줄이게 한다'], ['기념일을 함께 챙긴다', '서로 혼자만의 시간을 존중한다'], { d: 0.4, opt: { basket: '다정해 보이는 통제' }, more: { conclude: '질투·감시는 사랑의 증거가 아니에요. 상대가 싫다고 할 수 있고, 그 말이 존중받는 관계가 건강한 관계예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '‘걱정돼서’라는 말로 시작한 행동이 통제로 바뀌는 순간을 가상 인물의 예로 한 문장 쓰세요.' }] },
      }),
      M({
        id: 'activity.location', type: 'activity', title: '위치 공유를 요구받는 친구 곁에서',
        method: '친구의 연인이 위치 공유를 요구하는 상황', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 두 번(첫 반응·친구가 이야기를 접으려 할 때)을 지나 근거를 고른다.', base: '갈림길 세 번을 지나 친구가 “말하지 마”라고 할 때의 선택까지 가고 근거를 고른다.', challenge: '세 번째 갈림길까지 간 뒤, 친구가 도움을 거절할 때 손을 놓는 다른 길도 끝까지 가 보고 견준다.' },
        activity: {
          title: '친구 곁에서 고르는 길', tool: 'dilemma',
          teacher: '"친구가 연인에게 하루 종일 위치 공유를 요구받고 있어요. 여러분은 친구로서 무엇을 할 수 있을까요?" 선택마다 지우에게 생기는 영향을 소리 내어 읽게 한다. \'괜찮다니 더는 말하지 않는다\'를 고르는 학생에게 "지우가 다음에 무서운 일이 생기면 누구에게 말할 수 있을까요?"라고 묻는다. \'말하지 마\'라는 부탁에는 "안전이 걸린 비밀도 지켜야 할까요?"라고 되묻고, 잘못은 통제하는 사람에게 있으며 말해 준 지우는 잘한 것이라는 점을 짚는다.',
          task: '친구 곁에서 고르는 길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('위치 공유를 요구받는 친구 곁에서 친구의 안전과 마음을 함께 지키는 길을 고르고 근거를 고르세요.', LOC, [['listen', 'stay', 'counsel']], LOC_R, ['safe', 'side'], { d: 0.4 }),
            EXPLOREQ('고르지 않은 다른 길(괜찮다는 말에 손을 놓는 길 등)도 끝까지 가 보고 결과를 견주세요.', LOC, LOC_R, ['손을 놓은 길의 끝 장면을 확인했다', '두 길에서 지우가 받는 영향을 견주었다'], { d: 0.35 }),
            DILQ('헤어진 뒤 연락이 계속 오는 친구 곁에서 알맞은 길을 고르고 근거를 고르세요.', { text: '친구 하람이 헤어진 상대에게서 하루에 수십 통씩 “한 번만 만나 줘” 메시지를 받는다.', who: '하람', motif: 'moon', choices: [
              { id: 'meet', text: '“마지막으로 한 번 만나서 정리해”라고 한다', result: '하람이 혼자 만나러 나갔다가 겁이 나 급히 돌아온다.', impact: [{ who: '하람', text: '위험한 자리에 혼자 놓인다', tone: -1 }], ending: '연락을 끊으려는 사람을 혼자 만나게 하지 않는다.' },
              { id: 'record', text: '메시지를 지우지 말고 남겨 두자고 하고 함께 어른에게 말하자고 한다', result: '하람이 메시지를 남겨 두고 보호자에게 말한다.', impact: [{ who: '하람', text: '도움받을 근거가 남는다', tone: 1 }],
                next: { text: '보호자와 이야기한 뒤에도 연락이 이어진다.', choices: [
                  { id: 'police', text: '보호자·상담 선생님과 함께 112에 상담한다', result: '경찰이 할 수 있는 조치를 알려 준다.', impact: [{ who: '하람', text: '보호받을 길이 열린다', tone: 1 }], ending: '반복되는 연락과 기다림은 혼자 견딜 일이 아니라 신고하고 도움받을 일이다.' },
                  { id: 'block', text: '차단만 하고 아무에게도 다시 말하지 않는다', result: '다른 번호로 연락이 이어진다.', impact: [{ who: '하람', text: '불안이 계속된다', tone: -1 }], ending: '차단은 첫걸음일 뿐, 이어지면 어른과 기관의 도움을 받는다.' }] } }] },
              [['record', 'police']], [{ id: 'evidence', text: '남겨 둔 메시지는 도움을 청할 때 근거가 된다' }, { id: 'notalone', text: '반복되는 연락은 혼자 견딜 일이 아니다' }, { id: 'fault', text: '헤어지자고 한 사람에게도 책임이 있다', why: '헤어지자고 하는 것은 권리예요. 잘못은 놓아주지 않는 사람에게 있어요.' }], ['evidence', 'notalone'], { d: 0.35, more: { conclude: '친구가 통제와 집착 속에 있을 때는 판단하지 않고 곁에 있으며, 안전이 걸리면 믿을 어른·112와 함께 움직여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 “괜찮아, 말하지 마”라고 할 때 내가 건넬 말을 한 문장 쓰세요.' }] },
        notes: '장면은 가상이다. 학생 주변의 실제 연애 사례를 꺼내게 하지 않는다. 지금 안전이 걱정되는 친구가 있다면 수업 뒤 상담 선생님을 찾아오라고 알려 준다.',
      }),
      M({
        id: 'activity.talk', type: 'activity', title: '걱정을 전하는 대화 대본',
        method: '걱정을 전하는 대화 대본 채우기', tool: 'story', minutes: 18,
        levels: { easy: '말풍선 빈칸 2개(관찰한 사실·걱정)를 채운다.', base: '빈칸 4개(관찰한 사실·걱정·판단하지 않는 말·도움 제안)를 채운다.', challenge: '빈칸 5개 — 친구가 연인을 감쌀 때 이어 갈 말까지 넣는다.' },
        activity: {
          title: '친구에게 걱정 전하기', tool: 'story',
          teacher: '"친구의 연인 관계가 걱정될 때, 첫마디가 대화의 문을 열기도 닫기도 해요." 빈칸을 채우기 전에 ‘사실’과 ‘판단’이 어떻게 다른지 예를 들어 준다. "걔랑 헤어져"를 넣으려는 학생에게 "그 말을 들은 친구는 다음에 나에게 이야기할까요?"라고 되묻는다. 친구가 연인을 감싸도 몰아세우지 않고 문을 열어 두는 것이 목표라는 점을 짚는다.',
          task: '친구에게 걱정을 전하는 대화 말풍선을 채우고 말의 차례를 정해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            FILLQ('서아가 친구 유나에게 걱정을 전하는 대화 말풍선을 채우세요.', '서아와 유나의 대화(가상)', [
              ['t1', '서아', '"요즘 ___ 같아서 마음이 쓰였어."', 'fact', '쉬는 시간마다 휴대폰만 보는 것'],
              ['t2', '서아', '"___ 걱정돼."', 'worry', '네가 많이 지쳐 보여서'],
              ['t3', '서아', '"네 잘못이라는 게 아니야. ___"', 'nojudge', '어떤 마음인지 듣고 싶어'],
              ['t4', '서아', '"원하면 ___"', 'offer', '상담 선생님께 같이 가 줄게'],
            ], { k: 2, extra: [{ id: 'blame', text: '네가 너무 끌려다니니까 그렇지' }, { id: 'order', text: '당장 헤어져' }], hard: [['t5', '서아', '유나: "그래도 날 좋아해서 그래." 서아: "___"', 'open', '그 마음도 알아. 네가 불편하면 언제든 말해 줘']], d: 0.3 }),
            SORTQ('대화에서 쓸 말을 판단하지 않는 말과 친구를 몰아세우는 말로 나누세요.', ['판단하지 않는 말', '몰아세우는 말'], [
              ['네 이야기를 먼저 듣고 싶어', '네가 불편하면 그건 중요한 신호야', '어떤 결정을 해도 네 편이야'],
              ['그런 사람 만나는 네가 문제야', '내 말 안 들으면 이제 모른다', '왜 진작 말 안 했어'],
            ], { k: 2, d: 0.3, opt: { mode: 'sort', trayLabel: '대화 카드' } }),
            ORDERQ('걱정을 전하는 대화를 알맞은 차례로 놓으세요.', ['본 사실을 말한다', '내 걱정을 전한다', '친구의 이야기를 듣는다', '함께할 도움을 제안한다', '언제든 다시 말하라고 한다'], { k: 3, traps: ['연인을 욕한다'], d: 0.35, opt: { axis: ['처음', '끝'] }, more: { conclude: '사실 → 걱정 → 듣기 → 도움 제안. 친구가 바로 바뀌지 않아도 말할 곳이 있다는 것만으로 힘이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '판단하지 않는 말로 친구에게 걱정을 전하는 첫 문장을 내 말로 쓰세요.' }] },
      }),
      M({
        id: 'activity.guide', type: 'activity', title: '건강한 관계 가이드 제안서',
        method: '건강한 관계 가이드 제안서 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '틀 없이 기준·신호·도움 경로를 차례로 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 이별 상황의 안전 수칙을 한 항목 더한다.' },
        activity: {
          title: '또래를 위한 관계 가이드', tool: 'rubric-writing',
          teacher: '"학생회에 ‘건강한 관계 가이드’를 제안한다고 생각해 봐요. 읽는 사람은 우리 학교 학생이에요." 기준 → 신호 → 도움 경로 차례로 쓰게 하고, 쓰기 전에 기준표를 함께 읽는다. "통제당하는 쪽이 단호하지 못해서 그렇다"처럼 받는 사람을 탓하는 문장을 쓴 학생에게 "그 문장을 지금 힘든 친구가 읽으면 도움을 청할까요?"라고 되묻는다. 가이드는 받는 사람이 아니라 통제하는 행동을 겨눠야 한다는 점을 짚는다.',
          task: '건강한 관계 가이드의 세 칸을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('가이드의 첫 칸, 건강한 관계의 기준을 2~3문장으로 쓰세요.', '건강한 관계의 기준: 우리 학교 학생이 읽을 가이드의 첫 칸을 쓰세요.', ['동의와 존중이 들어간 기준을 썼다', '누구나 확인할 수 있는 행동으로 썼다', '받는 사람을 탓하는 말이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['동의', '존중', '거절']], starter: '건강한 관계에서는 ~할 수 있다.', plus: '연인뿐 아니라 친구 관계에도 맞는 기준인지 따져 보았다', d: 0.35 }),
            RWQ('두 번째 칸, 알아차려야 할 통제·집착 신호를 2~3문장으로 쓰세요.', '알아차릴 신호: 통제·집착·디지털 감시의 신호를 쓰세요.', ['구체적인 행동 신호를 둘 이상 썼다', '‘사랑해서’라는 말로 가리지 않았다', '잘못이 통제하는 사람에게 있음을 분명히 했다'], { min: 40, max: 300, sent: [2, 3], must: [['위치', '휴대폰', '메시지', '감시', '연락']], starter: '이런 행동이 되풀이되면 신호다: ~', plus: '처음엔 다정해 보이는 신호 하나를 넣었다', d: 0.4 }),
            RWQ('세 번째 칸, 도움 경로를 2~3문장으로 쓰세요.', '도움 경로: 나나 친구가 걱정될 때 연락할 곳과 할 일을 쓰세요.', ['연락할 곳(112·1388·학교 상담)을 썼다', '친구를 도울 때 할 말을 썼다', '말한 사람은 잘한 것이라는 내용이 있다'], { min: 40, max: 300, sent: [2, 3], must: [['112', '1388', '상담']], starter: '걱정될 때는 혼자 견디지 말고 ~', plus: '이별을 말할 때의 안전 수칙(공개된 곳·믿을 사람에게 알리기)을 한 항목 더했다', d: 0.4, more: { conclude: '건강한 관계 가이드는 받는 사람을 탓하지 않고, 기준·신호·도움 경로를 누구나 쓸 수 있게 알려 주는 글이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가이드의 세 칸을 정리하세요.', columns: ['칸', '핵심 한 줄'], cells: [['기준', ''], ['신호', ''], ['도움 경로', '']] }] },
        notes: '자기 연애 경험을 쓰게 하지 않는다. 가이드는 또래가 읽을 일반 안내문으로 쓴다. 이별 상황의 안전 수칙은 사람 확인 목록의 공식 안내와 견주어 고친다.',
      }),

      M({
        id: 'wrap.terms', type: 'wrap', title: '관계 신호 낱말 정리',
        method: '관계 신호 낱말 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 3개(통제·동의·존중)를 먼저 함께 짝짓는다.', base: '낱말 4개를 뜻과 짝짓는다.', challenge: '짝지은 뜻 하나를 가상 인물의 예시 문장으로 바꾸어 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 나온 낱말을 정리해 봐요. 통제, 집착, 동의, 존중." 낱말 카드를 뜻과 짝지은 뒤 한두 명에게 낱말 하나를 예시 문장으로 바꿔 말하게 한다. "동의는 한 번 하면 계속 유효하다"고 말하는 학생에게 "어제 괜찮다고 한 일을 오늘은 싫다고 할 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '통제', ko: '상대의 시간·관계·옷차림을 내 뜻대로 정하려는 것' }, { en: '집착', ko: '상대가 거절해도 연락·만남을 놓지 않는 것' }, { en: '동의', ko: '언제든 거절하거나 바꿀 수 있는 자유로운 허락' }, { en: '존중', ko: '상대의 선택과 경계를 그대로 인정하는 것' }] }, prompt: '관계 신호 낱말을 뜻과 짝지으세요.', target: { match: { 통제: '통제', 집착: '집착', 동의: '동의', 존중: '존중' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['질투는 사랑의 증거다', '연인끼리는 비밀번호를 공유해야 한다', '싫다고 말할 수 있고 그 말이 존중받아야 한다'], answer: 2, difficulty: 0.15, explain: '질투·감시는 사랑의 증거가 아니고, 비밀번호 공유는 의무가 아니에요. 거절이 존중받는 관계가 건강해요.' },
            { type: 'short', prompt: '낱말 하나를 골라 가상 인물이 나오는 예시 문장으로 바꾸어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '관계 신호 낱말',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 내 말로 쓰세요.', columns: ['낱말', '내 말로 쓴 뜻'], cells: [['통제', ''], ['집착', ''], ['동의', ''], ['존중', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '동의는 언제든 ___하거나 바꿀 수 있다.', answer: '거절' },
          ],
        },
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '나의 관계 기준 점검',
        method: '관계 기준 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 항목 가운데 3개만 골라 함께 읽고 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '친구에게 권하고 싶은 기준 하나를 출구 질문에서 고른다.' },
        wrap: {
          teacher: '"오늘 세운 건강한 관계 기준을 나에게 비춰 봐요. 연인 관계가 없어도 친구 관계에 그대로 쓸 수 있어요. 표시는 아무에게도 보이지 않아요." 점검 칸을 함께 읽고 표시하게 한다. "나는 연애를 안 해서 상관없다"는 학생에게 "친구에게 휴대폰을 보여 달라고 하거나, 싫다는 말을 못 하게 한 적은 없었는지 이 기준으로 볼까요?"라고 되묻는다. 점검은 남을 평가하는 것이 아니라 내가 지킬 약속이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 관계 기준 점검' }, prompt: '오늘 세운 관계 기준을 스스로 점검해 표시하세요.', target: { selfCheck: ['상대가 싫다고 하면 멈춘다', '상대의 휴대폰·메시지를 보여 달라고 하지 않는다', '상대의 친구 관계와 시간을 존중한다', '불편한 요구에는 분명하게 거절한다', '걱정되는 일은 믿을 어른에게 말한다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '친구에게 가장 먼저 권하고 싶은 기준으로 알맞은 것은?', options: ['연인이 원하면 위치를 늘 켜 둔다', '싫다고 말할 수 있는지 살펴본다', '다툼은 둘만 알고 넘어간다'], answer: 1, difficulty: 0.1, explain: '거절할 수 있는지가 관심과 통제를 가르는 첫 기준이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 관계 기준',
          items: [
            { type: 'check', prompt: '지키고 있는 기준에 표시하세요.', options: ['싫다고 하면 멈추기', '휴대폰 보여 달라고 하지 않기', '친구 관계와 시간 존중', '분명하게 거절하기', '걱정되면 어른에게 말하기'] },
            { type: 'short', prompt: '도움이 필요할 때 연락할 곳 두 곳을 쓰세요(예: 112, 1388, 학교 상담 선생님).' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 그루밍과 성매매 위험성, 구조와 신고 (11학년)
  // ======================================================================================================
  {
    const M = MOD('grooming', [11]);
    // 말풍선 빈칸(story fill): lines = [[칸 id, 말하는 사람, '…___…', 카드 id, 카드 글]…]. 쉬움 = 앞 k줄, 도전 = hard 줄 더함
    const FILLQ = (prompt, title, lines, { k = 2, extra = [], hard = [], d = 0.3, more = {} } = {}) => {
      const mk = (ls, ex) => ({ mode: 'fill', title, slots: ls.map(([id, who, label]) => ({ id, who, label })), cards: [...ls.map(([, , , cid, text]) => ({ id: cid, text })).reverse(), ...ex] });
      const tg = (ls) => ({ fill: Object.fromEntries(ls.map(([id, , , cid]) => [id, cid])) });
      const it = { prompt, toolOptions: mk(lines, extra), target: tg(lines), difficulty: d, levels: { easy: { prompt: pfx(prompt, `빈칸 ${k}개`), toolOptions: mk(lines.slice(0, k), extra.slice(0, 1)), target: tg(lines.slice(0, k)) } } };
      if (hard.length) it.levels.challenge = { prompt: pfx(prompt, `빈칸 ${lines.length + hard.length}개`), toolOptions: mk([...lines, ...hard], extra), target: tg([...lines, ...hard]) };
      return Object.assign(it, more);
    };
    const STAGES = ['친절과 칭찬', '고민 들어 주기', '비밀 요구', '다른 관계 끊게 하기', '대가를 내건 요구'];
    // 멈춘 지점마다 결과가 다르다 — 어느 지점에서 멈추고 알려도 맞는 길이다(늦게 멈춰도 늦지 않다)
    const CHAT = { text: '게임에서 몇 달째 이야기한 온라인 친구가 “너만 내 마음 알아. 우리 대화는 비밀로 하자”고 한다.', who: '민', motif: 'moon', choices: [
      { id: 'tell', text: '비밀 요구가 이상해서 보호자에게 말하고 대화를 멈춘다', result: '보호자와 함께 그 계정을 차단하고 신고한다.', impact: [{ who: '민', text: '가장 쉽게 빠져나온다', tone: 1 }], ending: '이상하다고 느낀 첫 순간에 멈추고 알리면 가장 쉽게 빠져나온다.' },
      { id: 'chat', text: '비밀로 하기로 하고 대화를 이어 간다', result: '온라인 친구가 하루에도 여러 번 연락한다.', impact: [{ who: '민', text: '다른 친구와 이야기하는 시간이 줄어든다', tone: -1 }],
        next: { text: '온라인 친구가 “기프티콘 보내 줄게. 대신 얼굴 사진 하나만 보내 줘”라고 한다.', choices: [
          { id: 'stop2', text: '선물을 거절하고 상담 선생님께 대화를 보여 준다', result: '선생님과 함께 대화를 남겨 두고 차단·신고한다.', impact: [{ who: '민', text: '아직 되돌리기 쉬울 때 멈춘다', tone: 1 }], ending: '선물과 요구가 함께 올 때 멈추면 아직 되돌리기 쉽다.' },
          { id: 'gift', text: '선물을 받고 사진을 보낸다', result: '온라인 친구의 말투가 달라진다.', impact: [{ who: '민', text: '빚진 마음과 불안이 생긴다', tone: -1 }],
            next: { text: '“사진 받은 거 다른 사람이 알면 어떡해? 이번엔 직접 만나자”라며 압박한다.', choices: [
              { id: 'report', text: '무섭지만 보호자와 함께 112에 신고한다', result: '경찰이 대화 기록을 바탕으로 도울 방법을 찾는다.', impact: [{ who: '민', text: '보호를 받는다', tone: 1 }], ending: '늦게 멈춰도 늦지 않다. 잘못은 요구한 사람에게 있고, 알린 것은 잘한 일이다.' },
              { id: 'alone', text: '혼자 해결하려고 약속 장소에 나간다', result: '낯선 곳에서 혼자 압박을 받는다.', impact: [{ who: '민', text: '더 위험한 자리에 놓인다', tone: -1 }], ending: '혼자 나가면 위험이 커진다. 지금이라도 어른과 112에 알린다.' },
              { id: 'hide', text: '들킬까 봐 아무에게도 말하지 않는다', result: '요구가 점점 커진다.', impact: [{ who: '민', text: '혼자 두려움을 견딘다', tone: -1 }], ending: '숨길수록 요구는 커진다. 사진을 보냈어도 도움을 받을 수 있다.' }] } }] } }] };
    const CHAT_R = [{ id: 'early', text: '이상하다고 느낀 순간 멈추고 알리는 것이 가장 안전하다' }, { id: 'fault', text: '잘못은 요구한 사람에게 있고, 알린 사람은 잘한 것이다' }, { id: 'own', text: '스스로 사진을 보냈으면 피해자가 아니다', why: '청소년은 보호받아야 할 대상이에요. 보냈어도 잘못은 요구한 사람에게 있고 도움을 받을 수 있어요.' }, { id: 'meet', text: '직접 만나지 않으면 위험이 없다', why: '온라인 대화만으로도 사진 요구·협박 같은 피해가 생겨요.' }];
    const STOPS = [['tell'], ['chat', 'stop2'], ['chat', 'gift', 'report']];
    const at = (n) => ({ path: STOPS.filter((p) => p.length <= n), reasons: ['early', 'fault'] });
    const TOWN = (names) => ({ title: '가상 동네', grid: [6, 4], names, places: [{ name: '지구대', icon: 'police', at: [1, 1], legend: '지구대(112)' }, { name: '학교 Wee 클래스', icon: 'school', at: [4, 0], legend: '학교 상담실·Wee 클래스' }, { name: '1388 청소년 상담', icon: 'office', at: [5, 3], legend: '1388 청소년 상담' }, { name: '공원', icon: 'park', at: [2, 3] }, { name: '역', icon: 'station', at: [0, 3] }, { name: '도서관', icon: 'library', at: [3, 1] }] });

    MODS.push(
      M({
        id: 'intro.stages', type: 'intro', title: '그루밍 단계 짐작해 놓기',
        method: '그루밍 단계 짐작해 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '앞의 세 단계(친절·고민 들어 주기·비밀 요구)만 함께 놓는다.', base: '다섯 단계 카드를 짐작해 차례로 놓는다.', challenge: '다섯 단계 가운데 가장 알아차리기 어려운 단계를 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"그루밍은 처음부터 위험해 보이지 않아요. 신뢰를 쌓은 뒤 조금씩 고립시키고 통제해요. 어떤 차례로 다가올지 짐작해 볼까요?" 두세 명에게 카드 차례를 말하게 하고 시연 단추로 바른 차례를 보여 준다. "처음부터 이상한 사람이면 누구나 알아차리죠"라는 말이 나오면 "첫 두 단계만 보면 그 사람은 친절한 사람일까요, 위험한 사람일까요?"라고 되묻는다. 단계마다 멈출 수 있고, 어느 단계에서 알려도 늦지 않다는 점을 짚는다.',
          student: '그루밍이 다가오는 다섯 단계 카드를 짐작해 차례로 놓아 보세요. 어느 단계가 가장 알아차리기 어려울지도 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['처음', '나중'], slots: 5, cards: [STAGES[3], STAGES[0], STAGES[4], STAGES[2], STAGES[1]], shuffle: false }, sequence: [{ order: STAGES }] },
          art: { draw: 'a paper path of five stepping stones, the first ones decorated with small paper hearts and stars, later ones fading into grey paper fog, a paper stop sign standing beside every stone', banner: '어느 돌에서든 멈출 수 있어요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '단계는 낱말로만 다루고 구체적인 행위·대화를 묘사하지 않는다. 학생의 온라인 경험을 묻지 않는다.',
      }),
      M({
        id: 'intro.offer', type: 'intro', title: '호의일까, 대가를 노린 제안일까',
        method: '제안을 호의와 대가 노림으로 가르기', tool: 'economy', minutes: 6,
        levels: { easy: '제안 카드 4장을 두 칸에 함께 나눈다.', base: '제안 카드 6장을 두 칸에 나눈다.', challenge: '두 칸에 걸쳐 보이는 제안(“용돈 줄게, 대신 우리 얘기는 비밀”)의 판단 근거를 말한다.' },
        intro: {
          teacher: '"누군가 이렇게 말해요. ‘용돈 줄게.’ ‘너만 날 이해해.’ ‘우리 얘기는 비밀로 하자.’ 호의일까요, 무언가를 노린 걸까요?" 시연 단추로 카드가 두 칸에 나뉘는 모습을 보여 준다. "돈을 준다는데 나쁜 사람은 아니겠죠"라는 말이 나오면 "공짜처럼 보이는 선물 뒤에 ‘비밀’이나 ‘만남’이 따라온다면 어떨까요?"라고 되묻는다. 대가를 내건 만남 요구는 청소년을 노린 범죄의 신호이고, 그런 제안을 받은 청소년은 보호받아야 할 대상이라는 점을 짚는다.',
          student: '온라인에서 받은 가상의 제안 카드를 ‘호의’와 ‘대가를 노림’ 칸에 나눠 보세요. 선물 뒤에 무엇이 따라오는지 보세요.',
          demo: { tool: 'economy', options: { mode: 'sort', slots: [{ id: 'kind', label: '호의' }, { id: 'catch', label: '대가를 노림' }], cards: [{ id: 'cash', text: '“용돈 줄게, 한 번만 만나 줘”', motif: 'coin' }, { id: 'study', text: '“공부 자료 공유할게, 단톡방에 올려 둘게”', motif: 'book' }, { id: 'secret', text: '“선물 줄게, 대신 우리 얘기는 비밀”', motif: 'bill' }, { id: 'event', text: '“학교 행사 같이 준비하자, 선생님께도 말해 둘게”', motif: 'shop' }, { id: 'only', text: '“너만 날 이해해, 다른 애들은 몰라도 돼”', motif: 'basket' }, { id: 'lend', text: '“우산 빌려줄게, 내일 교실에서 줘”', motif: 'cart' }], shuffle: false }, sequence: [{ sort: { kind: ['study', 'event', 'lend'], catch: ['cash', 'secret', 'only'] } }] },
          art: { draw: 'a paper gift box with a long paper string tied to it, the string leading behind a paper curtain, on the other side an open paper umbrella handed between two classmates', banner: '선물 뒤에 무엇이 따라올까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '교구의 예산 판은 돈(원)만 세므로 제안 카드 나누기(sort)로 다룬다. 실제로 받은 제안을 말하게 하지 않는다.',
      }),

      M({
        id: 'activity.choice', type: 'activity', title: '온라인 친구의 제안, 멈추는 지점',
        method: '온라인 친구의 제안 갈림길과 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 두 번(비밀 요구·선물과 사진 요구)까지 가서 멈추는 길과 근거를 고른다.', base: '갈림길 세 번(압박하며 만남 요구)까지 가서 멈추는 길과 근거를 고른다.', challenge: '서로 다른 지점에서 멈추는 길을 둘 이상 끝까지 가 보고, 늦게 멈출수록 무엇이 어려워지는지 견준다.' },
        activity: {
          title: '온라인 친구 대화 갈림길', tool: 'dilemma',
          teacher: '"몇 달째 이야기한 온라인 친구가 비밀을 요구해요. 여러분은 어디서 멈출까요? 어느 지점에서 멈춰도 맞는 길이에요." 선택마다 민에게 생기는 영향을 읽게 한다. 근거에서 ‘스스로 사진을 보냈으면 피해자가 아니다’를 고르는 학생에게 "요구하고 압박한 사람은 누구였나요? 잘못은 누구에게 있을까요?"라고 되묻는다. 늦게 멈춘 길에서도 알린 것은 잘한 일이고, 잘못은 늘 요구한 사람에게 있다는 점을 짚는다.',
          task: '온라인 친구와의 대화 갈림길에서 멈추고 알리는 길을 고르고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '온라인 친구의 제안이 이어질 때 멈추고 알리는 길을 고르고 근거를 고르세요.', toolOptions: { scene: CHAT, reasons: CHAT_R }, target: at(3), difficulty: 0.4,
              levels: { easy: { prompt: '온라인 친구의 제안이 이어질 때 멈추고 알리는 길을 고르고 근거를 고르세요(갈림길 둘).', toolOptions: { scene: cut(CHAT, 2) }, target: at(2) },
                challenge: { prompt: '온라인 친구의 제안이 이어질 때 멈추고 알리는 길을 고르고 근거를 고르세요(다른 지점에서 멈추는 길도 가 보기).', target: Object.assign(at(3), { explore: 2 }) } } },
            EXPLOREQ('서로 다른 지점에서 멈추는 길을 끝까지 가 보고, 늦게 멈출수록 무엇이 어려워지는지 견주세요.', CHAT, CHAT_R, ['첫 단계에서 멈춘 길의 끝을 확인했다', '늦게 멈춘 길에서 더 어려워진 점을 짚었다', '어느 길에서도 알리면 도움을 받을 수 있음을 확인했다'], { d: 0.35 }),
            DILQ('모르는 계정이 ‘쉽게 큰돈 버는 일’을 제안할 때 알맞은 길을 고르고 근거를 고르세요.', { text: 'SNS로 모르는 계정이 “하루 몇 시간에 큰돈 버는 일 있어. 만나서 설명해 줄게”라고 보냈다.', who: '나', motif: 'star', choices: [
              { id: 'go', text: '설명만 듣겠다며 혼자 만나러 간다', result: '낯선 사람이 “부모님께는 말하지 마”라며 조건을 붙인다.', impact: [{ who: '나', text: '거절하기 어려운 자리에 놓인다', tone: -1 }], ending: '대가를 내건 만남 제안에는 나가지 않고 어른에게 알린다.' },
              { id: 'show', text: '답하지 않고 보호자에게 메시지를 보여 준다', result: '보호자가 “같이 신고하자”고 한다.', impact: [{ who: '나', text: '혼자 판단하지 않아도 된다', tone: 1 }],
                next: { text: '같은 반 친구도 같은 메시지를 받았다고 한다.', choices: [
                  { id: 'both', text: '친구에게도 차단·신고 방법을 알려 주고 함께 1388에 묻는다', result: '두 사람 모두 계정을 차단하고 도움을 받는다.', impact: [{ who: '친구', text: '위험에서 함께 벗어난다', tone: 1 }], ending: '같은 제안이 퍼지고 있다면 친구와 함께 알리는 것이 서로를 지킨다.' },
                  { id: 'mine', text: '내 것만 신고하고 친구 일은 모른 척한다', result: '친구는 혼자 그 계정과 대화를 이어 간다.', impact: [{ who: '친구', text: '위험에 그대로 남는다', tone: -1 }], ending: '내가 안전해졌다면 친구에게도 길을 알려 준다.' }] } }] },
              [['show', 'both']], [{ id: 'adult', text: '대가를 내건 만남 제안은 혼자 판단하지 않고 어른에게 알린다' }, { id: 'protect', text: '이런 제안을 받은 청소년은 보호받아야 할 대상이다' }, { id: 'curious', text: '설명만 들어 보는 것은 괜찮다', why: '만남 자체가 거절하기 어려운 압박의 시작이 될 수 있어요.' }], ['adult', 'protect'], { d: 0.35, more: { conclude: '그루밍과 대가를 내건 제안은 어느 단계에서 멈춰도 늦지 않아요. 잘못은 요구한 사람에게 있고, 알린 사람은 잘한 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '늦게 멈출수록 무엇이 어려워지는지, 그래도 알려야 하는 까닭과 함께 한 문장으로 쓰세요.' }] },
        notes: '사례는 가상이다. 대화·사진은 얼굴 사진 요구 수준으로만 다루고 그 이상은 묘사하지 않는다. 지금 비슷한 일로 걱정하는 학생이 있으면 수업 뒤 상담 선생님에게 이어 준다.',
      }),
      M({
        id: 'activity.rescue', type: 'activity', title: '구조·보호 체계 가지 정리',
        method: '구조·보호 체계 정리', tool: 'mindmap', minutes: 19,
        levels: { easy: '네 가지(신고·보호·상담·회복 지원)에 카드를 1장씩 단다(바로 맞는지 보인다).', base: '카드 8장을 네 가지에 나누고, 연락처와 하는 일을 짝짓는다.', challenge: '카드 10장을 나누고, 청소년이 신고를 망설이게 되는 지점마다 대안을 짝짓는다.' },
        activity: {
          title: '신고에서 회복까지', tool: 'mindmap',
          teacher: '"신고는 끝이 아니라 시작이에요. 신고 → 보호 → 상담 → 회복 지원으로 이어져요." 카드를 가지에 놓을 때마다 "이 일은 누가, 무엇을 위해 하나요?"라고 묻는다. "신고하면 나도 처벌받는다"는 학생에게 "대가를 내건 만남을 요구받은 청소년은 보호받아야 할 대상이에요. 책임은 누구에게 있을까요?"라고 되묻는다. 마지막 문항에서 망설임마다 대안이 있다는 점을 짚는다.',
          task: '구조·보호 체계를 네 가지로 정리하고 연락처와 대안을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('구조·보호 체계 카드를 네 가지에 나누세요.', ['신고', '보호', '상담', '회복 지원'], [
              ['지금 위험하면 112에 신고한다', '학교폭력 등 피해를 117에 알린다'],
              ['위험한 사람과 떨어져 안전한 곳에 있게 한다', '더는 연락이 오지 않게 막는다'],
              ['1388에서 고민을 털어놓는다', '상담 선생님·Wee 클래스와 이야기한다'],
              ['다시 일상으로 돌아가도록 돕는다', '마음 회복 상담을 이어 간다'],
            ], { k: 1, hard: [['남겨 둔 대화를 근거로 함께 알린다'], [], [], ['학교생활에 다시 적응하도록 곁에서 돕는다']], d: 0.3, opt: { topic: '구조·보호 체계' } }),
            MATCHQ('연락처와 하는 일을 짝지으세요.', [['112', '지금 위험할 때 경찰에 신고'], ['117', '학교폭력 등 피해 신고·상담'], ['1388', '청소년 고민·위기 상담'], ['Wee 클래스', '학교 안에서 이야기를 듣고 연결']], { k: 3, d: 0.3, opt: { topic: '연락처와 역할' } }),
            MATCHQ('청소년이 신고를 망설이는 마음마다 알맞은 대안을 짝지으세요.', [['“사진을 보낸 내가 혼날까 봐”', '잘못은 요구한 사람에게 있고 나는 보호받는다'], ['“부모님이 아시게 될까 봐”', '상담 선생님·1388과 먼저 이야기한다'], ['“다시 연락 올까 봐”', '신고하면서 연락을 막는 방법도 함께 묻는다']], { k: 2, extra: ['혼자 조용히 견딘다'], d: 0.4, more: { conclude: '대가를 내건 만남 요구(성매매 제안)에서 청소년은 보호받아야 할 대상이에요. 망설임마다 대안이 있고, 신고 뒤에는 보호·상담·회복 지원이 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '청소년이 신고를 망설이는 까닭 하나와, 그 망설임을 줄일 학교의 방법 하나를 쓰세요.' }] },
        notes: '연락처는 112·117·1388·학교 상담 선생님·Wee 클래스만 쓴다. 지역 기관은 학교 상담실과 함께 확인해 덧붙인다.',
      }),
      M({
        id: 'activity.route', type: 'activity', title: '상황별 첫 연락처 지도',
        method: '지역 지원 기관까지의 경로 찾기', tool: 'map', minutes: 18,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 그 칸 이름이 바로 읽힌다.', base: '장소 이름 없이 범례의 기호를 보고 상황마다 첫 연락처에 핀을 꽂는다.', challenge: '범례로 찾고, 두 상황의 연결 순서(먼저·다음)는 활동지에 정해 쓴다.' },
        activity: {
          title: '첫 연락처 찾기', tool: 'map',
          teacher: '"가상 동네 지도예요. 상황마다 가장 먼저 연락할 곳은 어디일까요? 지금 위험한지, 이야기를 들어 줄 사람이 필요한지 먼저 따져요." 핀을 꽂기 전에 "지금 필요한 것은 보호인가요, 상담인가요?"라고 묻는다. 공원이나 역에 핀을 꽂는 학생에게 "그곳에서 나를 도와줄 사람은 누구일까요?"라고 되묻는다. 지금 위험하면 112, 학교 안에서는 상담 선생님·Wee 클래스, 털어놓을 곳이 필요하면 1388이라는 점을 짚는다.',
          task: '상황마다 가장 먼저 연락할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            { prompt: '방과 후, 온라인에서 만나자던 낯선 사람이 학교 앞에 와 있다는 연락이 왔어요. 가장 먼저 도움을 청할 곳에 핀을 꽂으세요.', toolOptions: TOWN(true), target: { place: '지구대' }, difficulty: 0.2 },
            { prompt: '점심시간, 친구가 이상한 제안을 받았다고 털어놓았어요. 학교 안에서 함께 갈 곳에 핀을 꽂으세요.', toolOptions: TOWN(true), target: { place: '학교 Wee 클래스' }, difficulty: 0.25 },
            { prompt: '주말 밤, 누구에게 말할지 모르겠지만 고민을 털어놓고 싶어요. 연락할 곳에 핀을 꽂으세요.', toolOptions: TOWN(true), target: { place: '1388 청소년 상담' }, difficulty: 0.3, conclude: '지금 위험하면 112(지구대), 학교 안에서는 상담 선생님·Wee 클래스, 털어놓을 곳이 필요하면 1388 — 필요에 맞게 연결해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 상황마다 먼저 연락할 곳과 다음에 연결할 곳을 쓰세요.', columns: ['상황', '먼저', '다음'], cells: [['낯선 사람이 학교 앞에 와 있다', '', ''], ['친구가 이상한 제안을 받았다고 한다', '', '']] }] },
        notes: '지도는 가상 동네다. 우리 지역 청소년 상담 기관의 위치는 학교 상담실과 함께 확인해 안내한다. 체계도의 청소년상담복지센터는 이 영역 도움 경로 범위(1388)로 바꾸어 썼다.',
      }),
      M({
        id: 'activity.talk', type: 'activity', title: '친구가 털어놓을 때의 대화',
        method: '친구가 위험 신호를 말할 때의 대화 대본', tool: 'story', minutes: 19,
        levels: { easy: '말풍선 빈칸 2개(고맙다는 말·탓하지 않는 말)를 채운다.', base: '빈칸 4개(고맙다는 말·탓하지 않는 말·남겨 두기·함께 신고)를 채운다.', challenge: '빈칸 5개 — 친구가 망설일 때 이어 갈 말까지 넣는다.' },
        activity: {
          title: '털어놓은 친구에게', tool: 'story',
          teacher: '"친구가 ‘온라인에서 이상한 제안을 받았어’라고 털어놓았어요. 첫마디로 무엇을 말해야 할까요?" 빈칸을 채우기 전에 털어놓는 데 큰 용기가 든다는 점을 먼저 말한다. "왜 그런 사람이랑 얘기했어?"를 넣으려는 학생에게 "그 말을 들은 친구는 다음에도 말해 줄까요? 잘못한 사람은 누구인가요?"라고 되묻는다. 털어놓은 친구는 잘한 것이고, 우리의 할 일은 탓하지 않고 함께 도움으로 잇는 것이라는 점을 짚는다.',
          task: '털어놓은 친구에게 건넬 말을 채우고, 할 행동과 망설임에 답할 말을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            FILLQ('친구 은이 털어놓을 때 도윤이 건넬 말풍선을 채우세요.', '은과 도윤의 대화(가상)', [
              ['g1', '도윤', '"말해 줘서 ___."', 'thanks', '정말 고마워'],
              ['g2', '도윤', '"___ 잘못한 사람은 그 사람이야."', 'notyou', '네 잘못이 아니야.'],
              ['g3', '도윤', '"대화는 지우지 말고 ___."', 'keep', '그대로 남겨 두자'],
              ['g4', '도윤', '"원하면 ___."', 'together', '상담 선생님께 같이 가서 신고하자'],
            ], { k: 2, extra: [{ id: 'why', text: '왜 그런 사람이랑 얘기했어?' }, { id: 'erase', text: '얼른 다 지워 버려' }], hard: [['g5', '도윤', '은: "일 커지면 어떡해." 도윤: "___"', 'calm', '네 속도에 맞출게. 혼자 두지 않을게']], d: 0.3 }),
            PICKQ('친구가 털어놓은 뒤 함께 할 행동만 고르세요.', ['대화 기록을 지우지 않고 남겨 둔다', '친구가 원하는 어른에게 함께 간다'], ['다른 친구들에게 이 일을 알린다', '그 계정에 직접 따지는 메시지를 보낸다'], { d: 0.3, opt: { mode: 'pick', basket: '함께 할 행동' } }),
            MATCHQ('친구가 망설이는 말마다 이어 갈 말을 짝지으세요.', [['“나도 답장했으니까 내 탓이야”', '“요구한 사람이 잘못이야. 너는 보호받아야 해”'], ['“신고하면 다들 알게 될까 봐”', '“상담 선생님은 네 이야기를 함부로 퍼뜨리지 않아”'], ['“그냥 차단하면 끝나지 않을까”', '“차단하고, 다시 오면 함께 신고하자”']], { k: 2, d: 0.4, more: { conclude: '털어놓은 친구에게는 고맙다는 말과 “네 잘못이 아니야”가 먼저예요. 그다음 기록을 남기고 함께 도움으로 이어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 털어놓았을 때 가장 먼저 건넬 말을 내 말로 쓰세요.' }] },
        notes: '역할극으로 할 때도 실제 인물·실제 대화를 쓰지 않는다. 상담 선생님의 비밀 보장은 안전이 걸린 경우의 예외가 있다는 점을 함께 말해 준다.',
      }),

      M({
        id: 'wrap.refuse', type: 'wrap', title: '분명한 거절·차단 문장',
        method: '거절·차단 문장 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '카드 6장 가운데 앞 4장을 함께 읽고 고른다.', base: '카드 6장 가운데 분명한 거절·차단·신고 카드를 고른다.', challenge: '애매한 표현을 분명하게 고친 말을 출구 질문에서 고른다.' },
        wrap: {
          teacher: '"오늘 본 제안에 어떻게 답할까요? 분명한 거절은 짧고, 이유를 길게 설명하지 않아도 돼요." 카드를 고른 뒤 두 번째 문항에서 애매한 말을 고쳐 본다. "거절하면 상대가 상처받는다"는 학생에게 "비밀과 대가를 요구한 사람의 기분을 지켜 줘야 할까요, 내 안전을 지켜야 할까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '분명한 거절·차단·신고', cards: [{ id: 'no', text: '“싫어. 그만 연락해.”' }, { id: 'maybe', text: '“음… 다음에 생각해 볼게.”' }, { id: 'block', text: '계정을 차단하고 신고한다' }, { id: 'sorry', text: '“미안, 내가 바빠서 그래.”' }, { id: 'tell', text: '대화를 남겨 두고 보호자에게 알린다' }, { id: 'secret', text: '“알았어, 아무한테도 말 안 할게.”' }] }, prompt: '분명한 거절·차단·신고에 해당하는 카드를 고르세요.', target: { pick: ['no', 'block', 'tell'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '“음… 다음에 생각해 볼게”를 분명한 거절로 고친 말은?', options: ['“지금은 좀 그래.”', '“싫어. 다시 연락하지 마.”', '“나중에 다시 말해 줘.”'], answer: 1, difficulty: 0.15, explain: '애매한 말은 다시 요구할 틈을 줘요. 짧고 분명하게 거절하고, 이어지면 차단·신고해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '분명한 거절·차단',
          items: [
            { type: 'short', prompt: '대가를 내건 제안에 답할 분명한 거절 문장을 하나 쓰세요.' },
            { type: 'check', prompt: '거절 뒤에 할 행동에 표시하세요.', options: ['계정 차단', '신고', '대화 기록 남기기', '보호자·선생님에게 알리기'] },
          ],
        },
      }),
      M({
        id: 'wrap.privacy', type: 'wrap', title: '온라인 계정 안전 설정 점검',
        method: '온라인 계정 안전 설정 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 가운데 3개를 함께 읽고 표시한다.', base: '항목 7개 가운데 안전 설정 5개만 골라 표시한다.', challenge: '친구에게 권할 설정 하나를 출구 질문에서 고른다.' },
        wrap: {
          teacher: '"그루밍은 대개 공개된 프로필과 열린 메시지 창에서 시작해요. 내 계정 설정을 점검해 봐요." 항목을 함께 읽고 안전 설정만 고르게 한다. \'팔로워를 늘리려고 모든 요청을 받는다\'를 고르는 학생에게 "모르는 사람이 내 사진과 학교를 다 볼 수 있다면 어떨까요?"라고 되묻는다. 설정을 바꾸는 일은 오늘 집에서 바로 할 수 있는 첫 행동이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내 계정 안전 설정', items: [{ id: 'private', text: '계정을 비공개로 한다' }, { id: 'dm', text: '모르는 사람의 메시지를 제한한다' }, { id: 'loc', text: '게시물 위치 정보를 끈다' }, { id: 'profile', text: '프로필에 학교·사는 곳을 쓰지 않는다' }, { id: 'report', text: '차단·신고 메뉴 자리를 알아 둔다' }, { id: 'accept', text: '팔로워를 늘리려고 모든 요청을 받는다' }, { id: 'share', text: '친한 온라인 친구와 비밀번호를 나눈다' }] }, prompt: '계정 안전 설정에 해당하는 항목만 표시하세요.', target: { checklist: ['private', 'dm', 'loc', 'profile', 'report'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구에게 가장 먼저 권하고 싶은 설정으로 알맞은 것은?', options: ['모르는 사람의 메시지 제한', '프로필 사진 자주 바꾸기', '모든 요청 받기'], answer: 0, difficulty: 0.1, explain: '그루밍은 모르는 사람의 메시지에서 시작되는 경우가 많아 메시지 제한이 첫 방어선이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 계정 안전 설정',
          items: [
            { type: 'check', prompt: '오늘 집에서 바꿀 설정에 표시하세요.', options: ['비공개 계정', '메시지 제한', '위치 정보 끄기', '프로필 정보 줄이기', '차단·신고 메뉴 확인'] },
            { type: 'short', prompt: '친구에게 권하고 싶은 설정 하나와 그 까닭을 쓰세요.' },
          ],
        },
        notes: '학생에게 자기 계정을 화면에 띄우거나 보여 주게 하지 않는다. 앱마다 메뉴 이름이 달라 일반 이름으로 적었다.',
      }),
    );
  }

  // ======================================================================================================
  // 9. 가정폭력 예방 지침과 보호 체계 분석 (11학년)
  // ======================================================================================================
  {
    const M = MOD('family-protect', [11]);
    const RECORD = [['학교', 35], ['본인', 25], ['이웃', 20], ['가족', 15], ['기타', 5]];
    const PROC = ['신고', '현장 확인', '분리·보호', '상담·지원', '사후 관리'];
    const TOWN = (names) => ({ title: '가상 동네', grid: [6, 4], names, places: [{ name: '지구대', icon: 'police', at: [1, 1], legend: '지구대(112)' }, { name: '학교 Wee 클래스', icon: 'school', at: [4, 0], legend: '학교 상담실·Wee 클래스' }, { name: '1388 청소년 상담', icon: 'office', at: [5, 2], legend: '1388 청소년 상담' }, { name: '병원(119)', icon: 'hospital', at: [2, 3], legend: '병원(119 응급)' }, { name: '공원', icon: 'park', at: [0, 3] }, { name: '도서관', icon: 'library', at: [3, 1] }] });
    // 유형 나누기: 쉬움은 네 장만(신체 1·정서 2·방임 1)
    const types = SORTQ('사례 카드를 신체·정서·방임 칸에 나누세요. 어느 칸에도 맞지 않는 카드는 남기세요.', ['신체', '정서', '방임'], [
      ['때리거나 밀쳐서 다치게 한다', '아프게 하는 벌을 되풀이한다'],
      ['“너는 없어도 돼”라고 되풀이해 말한다', '가족 앞에서 계속 깎아내리고 무시한다', '가족 사이 심한 폭력을 늘 보게 한다'],
      ['여러 날 끼니를 챙기지 않는다', '아파도 병원에 데려가지 않는다'],
    ], { k: 2, traps: ['귀가 시간을 함께 정하고 어기면 이야기한다'], d: 0.3, opt: { topic: '가정폭력·아동학대 유형' } });
    types.levels.easy = { prompt: '사례 카드를 신체·정서·방임 칸에 나누세요(카드 4장).', toolOptions: { cards: ['때리거나 밀쳐서 다치게 한다', '“너는 없어도 돼”라고 되풀이해 말한다', '여러 날 끼니를 챙기지 않는다', '가족 앞에서 계속 깎아내리고 무시한다'] }, target: { sort: { 신체: ['때리거나 밀쳐서 다치게 한다'], 정서: ['“너는 없어도 돼”라고 되풀이해 말한다', '가족 앞에서 계속 깎아내리고 무시한다'], 방임: ['여러 날 끼니를 챙기지 않는다'] } } };
    delete types.levels.challenge;

    MODS.push(
      M({
        id: 'intro.case', type: 'intro', title: '가상 사례 요약에서 보호 신호 찾기',
        method: '가상 사례 요약 읽기', tool: 'story', minutes: 6,
        levels: { easy: '사례 칸 가운데 앞 3칸만 함께 읽고 신호를 고른다.', base: '사례 칸 5개를 넘겨 보며 보호가 필요한 신호가 나타난 칸을 고른다.', challenge: '주변 사람(친구·선생님·이웃)이 개입할 수 있었던 칸을 골라 말한다.' },
        intro: {
          teacher: '"가상 인물 서진이의 한 달을 다섯 칸으로 줄였어요. 어느 칸에서 ‘도움이 필요할 수 있다’는 신호가 보이나요?" 두세 명에게 칸을 고르게 하고 시연 단추로 신호 칸이 바구니에 담기는 모습을 보여 준다. "집안일은 남이 끼어들 일이 아니다"라는 말이 나오면 "서진이가 혼자 말하기 어렵다면 누가 먼저 알아차릴 수 있을까요?"라고 되묻는다. 신호는 증거가 아니라 믿을 어른에게 알릴 까닭이라는 점을 짚는다.',
          student: '가상 인물 서진이의 한 달을 다섯 칸으로 줄였어요. 보호가 필요할 수 있다는 신호가 보이는 칸을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '보호가 필요한 신호', title: '서진이의 한 달(가상)', cards: [{ id: 'late', text: '집에 가기 싫다며 늦게까지 학교에 남는다', motif: 'moon' }, { id: 'meal', text: '끼니를 자주 거른다고 말한다', motif: 'cloud' }, { id: 'club', text: '동아리 발표를 즐겁게 준비한다', motif: 'sun' }, { id: 'flinch', text: '큰 소리가 나면 깜짝 놀라 몸을 움츠린다', motif: 'star' }, { id: 'trip', text: '주말에 다녀온 곳 사진을 보여 준다', motif: 'leaf' }], shuffle: false }, sequence: [{ pick: ['late', 'meal', 'flinch'] }] },
          art: { draw: 'five paper comic panels in a row showing a student at school at different times of a month, two panels with a soft grey cloud above, a paper hand of a teacher reaching gently toward one panel', banner: '신호를 알아차리는 사람이 있어요', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이고 폭력 장면을 묘사하지 않는다. 학생의 가정 사정을 묻거나 발표시키지 않는다. 수업 뒤 이야기하고 싶은 학생은 상담 선생님에게 이어 준다.',
      }),
      M({
        id: 'intro.record', type: 'intro', title: '가상 상담 기록 원그래프',
        method: '가상 상담 기록 원그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '조각마다 값이 보여 가장 큰 조각부터 함께 읽는다.', base: '값 없이 조각 크기로 처음 상담을 요청한 사람을 견준다.', challenge: '이 자료로 주변인의 역할을 설명하는 문장을 말로 고른다.' },
        intro: {
          teacher: '"가상 지역의 상담 기록이에요. 가정폭력·아동학대 상담을 처음 요청한 사람이 누구인지 나눴어요. 본인 조각은 얼마나 클까요?" 시연 단추로 가장 큰 조각을 고르는 모습을 보여 준다. "피해를 입은 사람이 직접 말해야만 도울 수 있다"는 말이 나오면 "본인이 아닌 조각들을 더하면 얼마일까요?"라고 되묻는다. 주변 사람이 먼저 알아차리고 잇는 경우가 많다는 점을 짚는다.',
          student: '가상 지역 상담 기록 원그래프에서 처음 상담을 요청한 사람이 누구인지 조각 크기를 견주어 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '처음 상담을 요청한 사람(가상 지역 기록)', unit: '%', data: RECORD, question: '가장 큰 조각은?', choices: RECORD.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart split into five coloured slices, small paper figures standing beside the slices — a teacher, a neighbour, a family member and a student — each holding a paper phone', banner: '먼저 알아차린 사람은 누구일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 수업용 가상 자료다. 실제 통계로 말하지 않는다.',
      }),

      M({
        id: 'activity.types', type: 'activity', title: '사례를 유형별로 나누고 근거 잇기',
        method: '사례 행위를 유형별로 나누고 근거 붙이기', tool: 'mindmap', minutes: 18,
        levels: { easy: '사례 카드 4장을 신체·정서·방임에 나눈다(바로 맞는지 보인다).', base: '카드 7장과 함정 카드(존중하는 훈육) 1장을 나누고, 훈육과 학대의 경계를 짝짓는다.', challenge: '카드를 섞어 풀고, 두 유형에 함께 걸치는 사례를 골라 설명한다.' },
        activity: {
          title: '유형 가지와 경계', tool: 'mindmap',
          teacher: '"가정폭력과 아동학대에는 몸을 다치게 하는 것만 있는 게 아니에요. 마음을 다치게 하는 것, 돌봐야 할 것을 하지 않는 것도 있어요." 카드를 놓을 때마다 "이 행동은 무엇을 다치게 하나요?"라고 묻는다. "훈육이면 어떤 행동도 괜찮다"는 학생에게 함정 카드와 정서 칸 카드를 나란히 놓고 "두 카드는 무엇이 다를까요? 아이가 존중받나요?"라고 되묻는다. 어떤 이유로도 폭력은 정당화되지 않고, 잘못은 폭력을 쓴 사람에게 있다는 점을 짚는다.',
          task: '사례 카드를 유형별로 나누고 훈육과 학대의 경계를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            types,
            MATCHQ('행동마다 알맞은 판단을 짝지으세요.', [['귀가 시간을 함께 정하고 어기면 이야기한다', '존중하는 훈육'], ['“너 때문에 우리 집이 이렇다”고 되풀이한다', '정서적 학대'], ['며칠씩 아이 혼자 끼니를 해결하게 둔다', '방임']], { k: 2, extra: ['사랑의 매'], d: 0.35, opt: { topic: '훈육과 학대의 경계' }, more: { hints: ['아이의 몸과 마음이 존중받는지, 돌봄이 이어지는지가 판단 근거예요.'] } }),
            PICKQ('신체와 정서 두 유형에 함께 걸치는 사례만 고르세요.', ['소리치며 위협하고 물건을 던져 다치게 한다', '때린 뒤 “말하면 더 혼난다”고 겁을 준다'], ['여러 날 끼니를 챙기지 않는다', '귀가 시간을 함께 정한다'], { d: 0.4, opt: { basket: '두 유형에 걸침' }, more: { conclude: '한 사례가 여러 유형에 걸치기도 해요. 유형을 가르는 까닭은 꼬리표를 붙이려는 게 아니라 필요한 보호를 알아차리려는 거예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '‘훈육’과 ‘학대’를 가르는 기준을 한 문장으로 쓰세요.' }] },
        notes: '카드 문장은 일부러 짧고 일반적으로 썼다. 더 구체적인 장면을 덧붙이지 않는다.',
      }),
      M({
        id: 'activity.procedure', type: 'activity', title: '신고 뒤 보호 절차',
        method: '신고 뒤 보호 절차 놓기', tool: 'timeline', minutes: 19,
        levels: { easy: '절차 카드 3장(신고·현장 확인·분리·보호)을 차례로 놓는다.', base: '절차 카드 5장을 차례로 놓고 함정 카드는 남기며, 단계마다 목적을 짝짓는다.', challenge: '카드를 섞어 놓고, 절차에서 학생 본인의 의견을 듣고 반영하는 지점을 고른다.' },
        activity: {
          title: '신고에서 사후 관리까지', tool: 'timeline',
          teacher: '"신고하면 무슨 일이 일어날까요? ‘신고하면 끝’도 ‘신고하면 집이 무너진다’도 아니에요. 단계마다 목적이 있어요." 카드를 놓은 뒤 단계마다 목적을 짝짓게 한다. ‘바로 화해시킨다’를 자리에 놓는 학생에게 "더 다치지 않게 지키는 일보다 화해가 먼저일까요?"라고 되묻는다. "신고하면 신고한 사람이 드러나 곤란해진다"는 말에는 신고한 사람의 정보는 보호받도록 되어 있다는 점을 짚는다.',
          task: '신고 뒤 보호 절차를 차례로 놓고 단계별 목적과 학생 의견이 반영되는 지점을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('신고 뒤 보호 절차 카드를 차례로 놓으세요.', PROC, { k: 3, traps: ['바로 가족끼리 화해시킨다'], d: 0.3, opt: { axis: ['처음', '나중'] } }),
            MATCHQ('절차 단계마다 목적을 짝지으세요.', [['신고', '위험을 알려 도움을 시작한다'], ['현장 확인', '안전한지, 무슨 일인지 살핀다'], ['분리·보호', '더 다치지 않게 떨어뜨려 지킨다'], ['상담·지원', '마음과 생활을 돕는다'], ['사후 관리', '다시 일어나지 않는지 살핀다']], { k: 3, d: 0.35, opt: { axis: ['처음', '나중'] } }),
            PICKQ('절차에서 학생 본인의 의견을 듣고 반영하는 지점만 고르세요.', ['상담·지원에서 원하는 도움을 묻는다', '사후 관리에서 지금 안전한지 묻는다'], ['신고한 사람을 다른 학생에게 알린다', '본인에게 묻지 않고 소문으로 판단한다'], { d: 0.4, opt: { basket: '의견이 반영되는 지점' }, more: { conclude: '신고 뒤에는 확인 → 분리·보호 → 상담·지원 → 사후 관리가 이어지고, 학생 본인의 의견과 신고한 사람의 정보도 보호받아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '‘신고하면 상황이 더 나빠진다’는 걱정에 절차의 한 단계를 근거로 답하는 문장을 쓰세요.' }] },
        notes: '절차 단계는 일반적인 흐름이다. 실제 처리는 기관·사안마다 다를 수 있다고 말해 준다(사람 확인 목록 참고).',
      }),
      M({
        id: 'activity.network', type: 'activity', title: '보호 기관 연결 지도',
        method: '보호 기관 연결 지도', tool: 'map', minutes: 18,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 그 칸 이름이 바로 읽힌다.', base: '장소 이름 없이 범례의 기호를 보고 상황마다 연결할 곳에 핀을 꽂는다.', challenge: '범례로 찾고, 두 상황의 경로 차이(지금 위험한가·이야기가 필요한가)를 활동지에 설명한다.' },
        activity: {
          title: '어디로 이을까', tool: 'map',
          teacher: '"가상 동네 지도예요. 상황마다 누구에게, 어디로 이어야 할까요? 지금 위험한지가 첫 질문이에요." 핀을 꽂기 전에 "지금 당장 다칠 위험이 있나요?"라고 묻는다. 위급한 상황에 학교 상담실을 고르는 학생에게 "밤에 학교에서 바로 도울 수 있을까요?"라고 되묻는다. 지금 위험하면 112, 다쳤으면 119, 털어놓고 이어 갈 곳은 상담 선생님·Wee 클래스·1388이라는 점을 짚는다.',
          task: '상황마다 연결할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            { prompt: '밤늦게 옆집에서 아이가 크게 울며 도와 달라는 소리가 계속 들려요. 가장 먼저 연결할 곳에 핀을 꽂으세요.', toolOptions: TOWN(true), target: { place: '지구대' }, difficulty: 0.2 },
            { prompt: '쉬는 시간, 친구가 집에 가기 무섭다고 털어놓았어요. 학교 안에서 함께 갈 곳에 핀을 꽂으세요.', toolOptions: TOWN(true), target: { place: '학교 Wee 클래스' }, difficulty: 0.25 },
            { prompt: '다친 친구가 지금 바로 치료를 받아야 해요. 119와 함께 연결할 곳에 핀을 꽂으세요.', toolOptions: TOWN(true), target: { place: '병원(119)' }, difficulty: 0.25, conclude: '지금 위험하면 112, 다쳤으면 119, 털어놓고 이어 갈 곳은 상담 선생님·Wee 클래스·1388 — 상황에 따라 첫 연결이 달라요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 상황의 경로 차이를 정리하세요.', columns: ['상황', '첫 연결', '그다음', '차이가 나는 까닭'], cells: [['옆집에서 도움 요청 소리', '', '', ''], ['친구가 집에 가기 무섭다고 함', '', '', '']] }] },
        notes: '지도는 가상 동네다. 체계도의 아동보호 기관·청소년상담복지센터는 이 영역 도움 경로 범위(112·119·1388·학교 상담)로 바꾸어 썼다. 지역 기관은 학교 상담실과 함께 확인해 덧붙인다.',
      }),
      M({
        id: 'activity.guide', type: 'activity', title: '또래용 예방 지침 안내문',
        method: '또래용 가정폭력 예방 지침 안내문 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '틀 없이 신호·할 수 있는 일·연락처를 차례로 쓰고 기준표(정확성·비난 없음·도움 경로)로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 중학생이 읽을 수 있게 쉬운 말로 바꾸어 쓴다.' },
        activity: {
          title: '또래가 읽을 안내문', tool: 'rubric-writing',
          teacher: '"우리 학교 학생이 읽을 ‘가정폭력 예방 지침 안내문’을 써요. 읽는 사람 가운데 지금 힘든 친구가 있을 수 있어요." 쓰기 전에 기준표의 ‘비난 없음’을 함께 읽는다. "참는 아이도 문제다"처럼 피해를 입은 사람을 탓하는 문장을 쓴 학생에게 "그 문장을 읽은 친구는 도움을 청할 수 있을까요?"라고 되묻는다. 안내문은 정확하고, 누구도 탓하지 않고, 연락처가 분명해야 한다는 점을 짚는다.',
          task: '안내문의 세 칸을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('첫 칸, 알아차릴 신호를 2~3문장으로 쓰세요.', '알아차릴 신호: 친구나 내가 보호가 필요할 수 있다는 신호를 쓰세요.', ['오늘 배운 유형(신체·정서·방임)에 맞게 정확히 썼다', '누구도 탓하는 말이 없다', '자극적인 장면 묘사 없이 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['신호', '끼니', '무서', '소리', '방임', '정서']], starter: '이런 모습이 이어지면 도움이 필요할 수 있다: ~', plus: '중학생도 알아듣는 쉬운 말로 바꾸어 썼다', d: 0.35 }),
            RWQ('두 번째 칸, 내가 할 수 있는 일을 2~3문장으로 쓰세요.', '할 수 있는 일: 나나 친구에게 이런 신호가 보일 때 할 일을 쓰세요.', ['믿을 어른에게 알리는 일을 썼다', '소문 내지 않기를 썼다', '말한 사람은 잘한 것이라는 내용이 있다'], { min: 40, max: 300, sent: [2, 3], must: [['알리', '말하', '어른', '선생님']], starter: '혼자 해결하려 하지 말고 ~', plus: '중학생이 바로 따라 할 수 있는 행동 하나로 정리했다', d: 0.4 }),
            RWQ('세 번째 칸, 연락처를 2~3문장으로 쓰세요.', '연락처: 지금 위험할 때와 이야기가 필요할 때 연락할 곳을 나누어 쓰세요.', ['지금 위험할 때 112를 썼다', '이야기가 필요할 때 1388·상담 선생님·Wee 클래스를 썼다', '연락처마다 언제 쓰는지 썼다'], { min: 40, max: 300, sent: [2, 3], must: ['112', ['1388', '상담', 'Wee']], starter: '지금 위험하면 112, ~', plus: '중학생 대상판에 맞게 문장을 짧게 고쳤다', d: 0.4, more: { conclude: '좋은 예방 지침은 정확하고, 누구도 탓하지 않으며, 언제 어디에 연락할지 분명하게 알려 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '안내문의 세 칸을 한 줄씩 정리하세요.', columns: ['칸', '핵심 한 줄'], cells: [['신호', ''], ['할 수 있는 일', ''], ['연락처', '']] }] },
        notes: '자기 가정의 일을 예로 쓰게 하지 않는다. 안내문은 일반 독자를 위한 글로 쓴다.',
      }),

      M({
        id: 'wrap.terms', type: 'wrap', title: '보호 체계 낱말 정리',
        method: '보호 체계 낱말 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 3개(신고·분리·보호)를 먼저 함께 짝짓는다.', base: '낱말 4개를 뜻과 짝짓는다.', challenge: '뜻 하나를 가상 사례 문장으로 바꾸어 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 절차에서 나온 낱말을 정리해 봐요. 신고, 분리, 보호, 사후 관리." 낱말을 뜻과 짝지은 뒤 한두 명에게 낱말 하나를 가상 사례 문장으로 바꾸어 말하게 한다. "분리는 가족을 벌주는 것"이라는 학생에게 "분리의 목적은 누구를, 무엇으로부터 지키는 걸까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '신고', ko: '위험을 알려 보호가 시작되게 하는 일' }, { en: '분리', ko: '더 다치지 않게 위험한 사람과 떨어뜨리는 일' }, { en: '보호', ko: '안전한 곳에서 몸과 마음을 지키는 일' }, { en: '사후 관리', ko: '다시 일어나지 않는지 이어서 살피는 일' }] }, prompt: '보호 체계 낱말을 뜻과 짝지으세요.', target: { match: { 신고: '신고', 분리: '분리', 보호: '보호', '사후 관리': '사후 관리' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['훈육이면 어떤 행동도 괜찮다', '신고하면 신고한 사람이 반드시 드러난다', '의심되면 믿을 어른에게 알리는 것이 보호의 시작이다'], answer: 2, difficulty: 0.15, explain: '폭력은 훈육이 될 수 없고, 신고한 사람의 정보는 보호받아요. 확실하지 않아도 알리는 것이 보호의 시작이에요.' },
            { type: 'short', prompt: '낱말 하나를 골라 가상 인물이 나오는 사례 문장으로 바꾸어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '보호 체계 낱말',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 내 말로 쓰세요.', columns: ['낱말', '내 말로 쓴 뜻'], cells: [['신고', ''], ['분리', ''], ['보호', ''], ['사후 관리', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '확실하지 않아도 의심되면 믿을 ___에게 알린다.', answer: '어른' },
          ],
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '주변인으로서 할 일 점검',
        method: '주변인 행동 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 가운데 3개를 함께 읽고 표시한다.', base: '항목 7개 가운데 주변인이 할 일 5개만 골라 표시한다.', challenge: '가장 중요한 항목과 그 까닭을 출구 질문에서 고른다.' },
        wrap: {
          teacher: '"친구에게서 신호를 보았을 때 주변인으로서 할 일만 골라 봐요." 항목을 함께 읽고 표시하게 한다. ‘직접 친구 집에 찾아가 따진다’를 고르는 학생에게 "그렇게 하면 친구와 나는 안전할까요?"라고 되묻는다. 주변인의 몫은 해결이 아니라 알아차리고 믿을 어른에게 잇는 것이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '주변인으로서 할 일', items: [{ id: 'tell', text: '의심되면 믿을 어른에게 알린다' }, { id: 'rumor', text: '친구 이야기를 소문 내지 않는다' }, { id: 'listen', text: '탓하지 않고 끝까지 듣는다' }, { id: 'urgent', text: '지금 위험하면 112에 신고한다' }, { id: 'with', text: '친구가 원하면 상담 선생님께 함께 간다' }, { id: 'confront', text: '직접 친구 집에 찾아가 따진다' }, { id: 'peek', text: '증거를 찾으려 친구 휴대폰을 몰래 본다' }] }, prompt: '주변인으로서 할 일에 해당하는 항목만 표시하세요.', target: { checklist: ['tell', 'rumor', 'listen', 'urgent', 'with'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '가장 먼저 할 일과 그 까닭으로 알맞은 것은?', options: ['혼자 증거를 모은다 — 확실해야 하니까', '믿을 어른에게 알린다 — 확실하지 않아도 보호가 시작되니까', '모른 척한다 — 집안일이니까'], answer: 1, difficulty: 0.15, explain: '확실하지 않아도 알리면 전문가가 살피고 보호가 시작돼요. 확인은 주변인의 몫이 아니에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '주변인으로서 할 일',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 일에 표시하세요.', options: ['믿을 어른에게 알리기', '소문 내지 않기', '탓하지 않고 듣기', '위급하면 112', '상담 선생님께 함께 가기'] },
            { type: 'short', prompt: '가장 중요하다고 생각하는 항목 하나와 그 까닭을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 10. 학교폭력 대처, 주변인 개입 캠페인 설계 (11학년)
  // ======================================================================================================
  {
    const M = MOD('upstander', [11]);
    // 갈림 2번(쉬움)·3번(기본·도전) 나무. chal = { tag, target } — 도전 판에 더할 target 칸
    const DIL3 = (prompt, scene, paths, reasons, good, { chal = null, d = 0.4, more = {} } = {}) => {
      const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
      const it = { prompt, toolOptions: { scene, reasons }, target: at(3), difficulty: d, levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) } } };
      if (chal) it.levels.challenge = { prompt: pfx(prompt, chal.tag), target: Object.assign(at(3), chal.target) };
      return Object.assign(it, more);
    };
    // 쉬움 판을 칸마다 정한 카드로(칸마다 장 수가 다를 때)
    const easyAs = (q, eg) => { q.levels.easy = { prompt: pfx(q.prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: { sort: Object.fromEntries(q.toolOptions.slots.map((s, i) => [s, eg[i] || []])) } }; return q; };

    const WHY = [['보복이 걱정돼서', 34], ['어떻게 도울지 몰라서', 28], ['남의 일이라서', 16], ['누군가 도울 줄 알아서', 14], ['기타', 8]];
    const LUNCH = { text: '점심시간 급식실. 지호가 식판을 들고 다가오자 한 무리가 가방으로 빈자리를 막고 웃는다. 주변 학생들은 고개를 숙인다.', who: '나', motif: 'house', choices: [
      { id: 'laugh', text: '같이 웃고 넘어간다', result: '무리가 더 크게 웃고, 지호는 식판을 든 채 서 있다.', impact: [{ who: '지호', text: '혼자라는 느낌이 커진다', tone: -1 }], ending: '구경꾼의 웃음 하나도 따돌림에 힘을 보탠다.' },
      { id: 'invite', text: '지호에게 "여기 앉아"라며 내 옆자리를 권한다', result: '지호가 옆에 앉는다. 무리가 이쪽을 흘끗 본다.', impact: [{ who: '지호', text: '함께 밥을 먹을 사람이 생긴다', tone: 1 }, { who: '나', text: '조금 불안하지만 안전하다', tone: 0 }],
        next: { text: '다음 날, 무리 가운데 한 명이 "너도 걔 편이냐"는 메시지를 보낸다.', choices: [
          { id: 'reply', text: '똑같이 거친 말로 맞받아친다', result: '말싸움이 커지고 다른 단톡방까지 퍼진다.', impact: [{ who: '나', text: '나도 공격의 대상이 된다', tone: -1 }], ending: '맞서 싸우면 내 안전이 흔들리고 사건이 더 커진다.' },
          { id: 'record', text: '메시지를 캡처해 두고 담임 선생님께 알린다', result: '선생님이 상황을 살피기로 하고, 알린 사람이 드러나지 않게 하겠다고 한다.', impact: [{ who: '나', text: '혼자 감당하지 않게 된다', tone: 1 }, { who: '지호', text: '어른이 상황을 알게 된다', tone: 1 }],
            next: { text: '선생님이 "지호에게 지금 필요한 것이 무엇일지 같이 생각해 보자"고 한다.', choices: [
              { id: 'together', text: '지호에게 117·상담 선생님 같은 도움 경로를 알려 주고 곁에 있겠다고 한다', result: '지호가 상담 선생님을 만나 보겠다고 한다.', impact: [{ who: '지호', text: '도움과 친구를 함께 얻는다', tone: 1 }], ending: '알리기와 곁에 서기가 이어질 때 지호는 혼자가 아니다.' },
              { id: 'done', text: '알렸으니 내 일은 끝났다며 지호와 거리를 둔다', result: '지호가 다시 혼자 밥을 먹는다.', impact: [{ who: '지호', text: '다시 혼자가 된다', tone: -1 }], ending: '알린 것은 잘한 일이지만, 곁을 지키지 않으면 지호는 다시 혼자가 된다.' }] } },
          { id: 'ignore', text: '답하지 않고 지호와도 거리를 둔다', result: '지호가 다시 혼자 밥을 먹는다.', impact: [{ who: '지호', text: '곁에 있던 사람을 잃는다', tone: -1 }], ending: '압박에 물러서기만 하면 따돌림이 다시 굳는다.' }] } },
      { id: 'shout', text: '무리 앞에 가서 큰 소리로 따진다', result: '모두가 쳐다보고, 무리가 나에게 화를 낸다.', impact: [{ who: '나', text: '위험한 자리에 혼자 서게 된다', tone: -1 }],
        next: { text: '무리 가운데 한 명이 "네가 뭔데" 하며 다가온다.', choices: [
          { id: 'push', text: '물러서지 않고 밀친다', result: '몸싸움이 벌어진다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], ending: '몸싸움이 되면 나도 다치고, 지호를 돕는 일은 멀어진다.' },
          { id: 'leave', text: '그 자리를 벗어나 급식실 선생님께 알린다', result: '선생님이 와서 상황을 멈춘다.', impact: [{ who: '나', text: '안전을 되찾는다', tone: 1 }], ending: '내 안전이 흔들릴 때는 물러서서 어른에게 알리는 것도 개입이다.' }] } }] };
    const LUNCH_R = [{ id: 'safe', text: '내 안전을 지키면서 할 수 있는 방법을 골랐다' }, { id: 'alone', text: '지호가 혼자가 아니라고 느끼게 했다' }, { id: 'adult', text: '기록과 알리기로 어른이 개입할 수 있게 했다' }, { id: 'brave', text: '맞서 싸워야 진짜 용기다', why: '맞서 싸우면 나도 다치고 사건이 커질 수 있어요. 안전한 방법도 용기예요.' }, { id: 'mine', text: '내가 당사자가 아니면 상관없다', why: '지켜보는 사람의 선택이 따돌림을 키우기도 멈추기도 해요.' }];

    MODS.push(
      M({
        id: 'intro.feel', type: 'intro', title: '지켜보는 사람의 마음',
        method: '목격 장면 속 주변인의 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 낱말 4개(돕고 싶은 마음 둘·멈칫하게 하는 마음 둘)를 함께 나눈다.', base: '마음 낱말 8개를 두 칸에 나누고, 한두 명이 고른 까닭을 말한다.', challenge: '\'멈칫하게 하는 마음\' 칸의 낱말을 보며 마음이 행동으로 이어지지 않는 까닭을 말로 고른다.' },
        intro: {
          teacher: '"급식실에서 한 학생의 빈자리를 무리가 막고 웃어요. 둘레에 앉은 학생들의 마음은 어땠을까요? 오늘은 지켜보는 사람의 마음에서 시작해요." 시연 단추로 마음 낱말이 두 칸에 나뉘는 모습을 보여 준다. "아무것도 안 한 애들은 마음도 없었을 것"이라는 말이 나오면 "가만히 있던 사람도 화나거나 미안했을 수 있어요. 그런데 왜 움직이지 못했을까요?"라고 되묻는다. 돕고 싶은 마음과 멈칫하게 하는 마음이 한 사람 안에 함께 있다는 점을 짚고, 오늘은 그 멈칫함을 넘는 방법과 캠페인을 설계한다고 밝힌다.',
          student: '급식실 장면을 지켜본 가상의 학생들이 되어, 마음 낱말을 \'돕고 싶은 마음\'과 \'멈칫하게 하는 마음\'으로 나눠 보세요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['돕고 싶은 마음', '멈칫하게 하는 마음'], cards: [{ id: 'angry', text: '화남' }, { id: 'sorry', text: '미안함' }, { id: 'pity', text: '안타까움' }, { id: 'stuffy', text: '답답함' }, { id: 'fear', text: '무서움' }, { id: 'worry', text: '걱정' }, { id: 'eye', text: '눈치 보임' }, { id: 'awk', text: '어색함' }], shuffle: false }, sequence: [{ sort: { '돕고 싶은 마음': ['angry', 'sorry', 'pity', 'stuffy'], '멈칫하게 하는 마음': ['fear', 'worry', 'eye', 'awk'] } }] },
          art: { draw: 'a paper school cafeteria seen from above, one student standing with a tray near an empty seat blocked by bags, several paper students at nearby tables glancing sideways with small thought clouds above them', banner: '지켜보는 사람의 마음은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이며 자세히 묘사하지 않는다. 학생에게 비슷한 장면을 본 적이 있는지 발표시키지 않는다.',
      }),
      M({
        id: 'intro.why', type: 'intro', title: '돕지 못한 이유 자료 읽기',
        method: '가상 설문 “돕지 못한 이유” 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 끝 값을 함께 읽으며 가장 큰 이유를 찾는다.', base: '값을 가리고 막대 길이로 가장 큰 이유와 캠페인이 겨눌 이유를 고른다.', challenge: '이 가상 자료로 알 수 없는 것(조사 대상·질문 방식)을 하나 골라 말한다.' },
        intro: {
          teacher: '"가상 설문이에요. 학교폭력을 보고도 돕지 못했다면 그 이유는 무엇이었을까요?" 시연 단추로 가장 큰 막대를 고르는 모습을 보이고, \'보복 걱정\'과 \'방법 모름\'이 함께 크다는 점을 짚는다. "다들 남의 일이라 생각해서 안 돕는다"는 말이 나오면 "그래프에서 \'남의 일\' 막대는 몇 번째 크기인가요?"라고 되묻는다. 캠페인은 사람들이 실제로 막히는 이유를 겨눠야 바뀐다는 점, 그리고 이 자료는 가상이라 어떤 학생에게 어떻게 물었는지 모른다는 점을 함께 말한다.',
          student: '가상 설문 그래프에서 돕지 못한 이유 가운데 가장 큰 것을 찾고, 우리 캠페인이 어느 이유를 겨눌지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '돕지 못한 이유(가상 설문, 실제 통계 아님)', unit: '%', yLabel: '응답 비율', xLabel: '이유', data: WHY, question: '가장 많이 고른 이유는?', choices: WHY.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'paper bar chart blocks of different heights standing on a desk, small paper students beside each bar holding speech bubbles, a megaphone made of folded paper waiting in front', banner: '왜 돕지 못했을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '자료는 수업용 가상 수치다. 실제 실태조사 수치를 외우게 하지 않는다.',
      }),

      M({
        id: 'activity.methods', type: 'activity', title: '상황별 개입 방법',
        method: '상황에 맞는 개입 방법 고르기', tool: 'story', minutes: 18,
        levels: { easy: '상황 카드 4장을 다섯 방법 칸에 나누고, 놓는 즉시 맞는지 본다.', base: '상황 카드 7장을 나누고, 내 안전을 먼저 살피는 근거를 고르며, 두 방법을 함께 쓰는 차례를 놓는다.', challenge: '헷갈리는 상황 카드 2장이 더해진 9장을 섞어 나누고, 두 방법을 함께 쓰는 차례에서 함정 카드를 걸러 낸다.' },
        activity: {
          title: '상황마다 개입 방법 고르기', tool: 'story',
          teacher: '"개입이라고 하면 무엇이 떠오르나요? 대부분 \'앞에 나서서 막는 것\'을 떠올려요. 오늘은 다섯 가지 방법을 상황에 맞춰 골라 봐요: 멈추기, 주의 돌리기, 알리기, 기록하기, 곁에 서기." 카드를 놓을 때마다 "이 상황에서 내가 안전하게 할 수 있는 것은 무엇인가요?"라고 묻는다. 여러 명이 둘러싸고 위협하는 장면을 \'멈추기\'에 두는 학생에게 "혼자 그 앞에 서면 어떤 일이 생길까요? 내가 안전한 자리에서 할 수 있는 방법은 없을까요?"라고 되묻는다. 잘못은 폭력을 쓴 사람에게 있고, 알리는 것은 고자질이 아니라 보호라는 점을 짚는다.',
          task: '상황 카드를 알맞은 개입 방법 칸에 나누고, 안전 근거와 차례를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            easyAs(SORTQ('상황 카드를 알맞은 개입 방법 칸에 나누세요.', ['멈추기', '주의 돌리기', '알리기', '기록하기', '곁에 서기'], [
              ['친한 친구가 단톡방에 뒷말을 올리려 한다', '같은 무리 친구가 장난이라며 놀리는 별명을 부른다'],
              ['복도에서 놀림이 막 시작되려 한다'],
              ['여러 명이 한 학생을 둘러싸고 위협한다', '물건을 빼앗고 돌려주지 않는 일이 매일 되풀이된다'],
              ['단톡방에 친구를 조롱하는 글이 계속 올라온다'],
              ['따돌림받는 친구가 쉬는 시간에 혼자 앉아 있다'],
            ], { hard: [[], ['체육 시간에 한 친구에게만 공을 세게 던지기 시작한다'], ['몸싸움이 벌어져 누군가 다칠 것 같다'], [], []], d: 0.35, opt: { trayLabel: '상황 카드' } }),
            [['친한 친구가 단톡방에 뒷말을 올리려 한다'], ['복도에서 놀림이 막 시작되려 한다'], ['여러 명이 한 학생을 둘러싸고 위협한다'], ['단톡방에 친구를 조롱하는 글이 계속 올라온다'], []]),
            PICKQ('직접 나서기 전에 내 안전을 먼저 살피는 근거로 알맞은 것만 고르세요.', ['내가 다치면 피해 학생을 도울 사람이 줄어든다', '혼자 맞서면 폭력이 더 커질 수 있다'], ['용기 있는 사람은 위험을 따지지 않는다', '안전부터 챙기면 비겁한 것이다'], { d: 0.3, opt: { basket: '안전을 먼저 살피는 근거' } }),
            ORDERQ('단톡방 조롱 글을 보고 기록하기와 알리기를 함께 쓸 때의 차례로 카드를 놓으세요.', ['조롱 글 화면을 캡처한다', '올라온 날짜와 시각을 적어 둔다', '담임 선생님이나 117에 알린다', '조롱받은 친구에게 혼자가 아니라고 말한다'], { k: 3, traps: ['캡처를 다른 단톡방에 퍼뜨린다'], d: 0.35, opt: { axis: ['먼저', '나중'] }, more: { conclude: '기록은 퍼뜨리려는 것이 아니라 어른이 개입할 근거를 남기는 일이에요. 기록하고 알린 뒤 친구 곁에 서요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '다섯 가지 개입 방법 가운데 내가 가장 안전하게 쓸 수 있는 방법 하나와 그 까닭을 쓰세요.' }] },
        notes: '상황은 모두 가상이다. 몸싸움·위협처럼 내 안전이 흔들리는 상황에서는 직접 막기보다 자리를 벗어나 어른·112에 알리는 것이 먼저라고 거듭 말한다.',
      }),
      M({
        id: 'activity.trace', type: 'activity', title: '개입 방법별 결과 따라가기',
        method: '개입 방법에 따른 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '급식실 장면에서 갈림길 둘을 지나 결과를 보고 근거를 고른다.', base: '갈림길 셋을 끝까지 따라가 지호·무리·나에게 생긴 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 가고 다른 길 하나도 끝까지 가 본 뒤, 가장 안전하면서 효과 있는 길의 근거를 고른다(영향 표시는 맞힌 뒤에 보인다).' },
        activity: {
          title: '급식실 갈림길 따라가기', tool: 'dilemma',
          teacher: '"같은 급식실 장면에서 어떤 개입을 고르느냐에 따라 지호와 나에게 생기는 일이 달라져요. 선택마다 누가 도움을 받고 누가 위험해지는지 소리 내어 읽어 봐요." \'큰 소리로 따진다\'를 고른 학생에게 "그 다음 장면에서 나는 어디에 서 있나요? 지호는 도움을 받았나요?"라고 묻는다. \'알렸으니 끝\'을 고른 학생에게 "알린 것은 잘했어요. 그런데 다음 날 지호는 누구와 밥을 먹을까요?"라고 묻는다. 가장 좋은 개입은 가장 용감해 보이는 것이 아니라 내가 안전하고 피해 학생이 혼자가 아니게 되는 것이라는 점을 짚는다.',
          task: '개입 방법을 고르며 결과를 따라가고, 고른 길의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('급식실 장면에서 나도 안전하고 지호도 혼자가 아니게 되는 길을 고르고 근거를 고르세요.', LUNCH, [['invite', 'record', 'together']], LUNCH_R, ['safe', 'alone', 'adult'], { chal: { tag: '다른 길도 끝까지', target: { explore: 2 } }, d: 0.4 }),
            EXPLOREQ('\'큰 소리로 따진다\' 길도 끝까지 가 보고, 처음 고른 길과 결과를 견주세요.', LUNCH, LUNCH_R, ['따지는 길의 끝 장면을 확인했다', '나의 안전과 지호에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('복도에서 친구 가방을 던지며 노는 장면에서 알맞은 길을 고르고 근거를 고르세요.', { text: '쉬는 시간 복도. 몇몇이 친구 서윤의 가방을 서로 던지며 웃고, 서윤은 돌려 달라고 한다.', who: '나', motif: 'house', choices: [
              { id: 'film', text: '재미있어 보여 영상을 찍어 올린다', result: '영상이 퍼지며 서윤이 더 곤란해진다.', impact: [{ who: '서윤', text: '놀림이 온라인까지 번진다', tone: -1 }], ending: '찍어 올리는 것은 기록이 아니라 또 하나의 괴롭힘이 된다.' },
              { id: 'call', text: '"선생님이 너희 찾으셔" 하고 주의를 돌린다', result: '무리가 멈칫하고 가방이 바닥에 놓인다.', impact: [{ who: '서윤', text: '가방을 되찾는다', tone: 1 }],
                next: { text: '서윤이 가방을 집으며 고개를 숙인다.', choices: [
                  { id: 'side', text: '"괜찮아? 같이 교실 가자"며 곁에 서고, 되풀이되면 함께 선생님께 알리자고 한다', result: '서윤이 고개를 끄덕인다.', impact: [{ who: '서윤', text: '함께할 사람이 생긴다', tone: 1 }], ending: '주의 돌리기 뒤에 곁에 서기가 이어지면 피해 학생이 다시 도움을 청할 수 있다.' },
                  { id: 'walk', text: '할 일은 했으니 그냥 지나간다', result: '서윤이 혼자 남는다.', impact: [{ who: '서윤', text: '여전히 혼자다', tone: 0 }], ending: '멈춘 것은 잘했지만, 혼자 남은 친구에게 한마디가 더 필요했다.' }] } }] },
              [['call', 'side']], [{ id: 'calm', text: '맞서지 않고도 상황을 멈출 수 있었다' }, { id: 'next', text: '되풀이되면 어른에게 알릴 길을 열어 두었다' }, { id: 'fun', text: '다들 웃었으니 장난이었다', why: '함께 웃었다고 장난이 되지 않아요. 서윤은 돌려 달라고 했어요.' }], ['calm', 'next'], { d: 0.35, more: { conclude: '멈추기·주의 돌리기·알리기·기록하기·곁에 서기는 상황에 맞게 이어 쓸 수 있어요. 언제나 내 안전이 먼저예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '급식실 장면에서 내가 고른 길이 지호와 나에게 어떤 결과를 남겼는지, 다른 길과 견주어 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '개입 캠페인 기획 맵',
        method: '캠페인 기획 맵', tool: 'mindmap', minutes: 18,
        levels: { easy: '대상·핵심 메시지·바라는 행동·평가 방법 가지에 예시 카드 4장을 놓고, 놓는 즉시 맞는지 본다.', base: '기획 카드 8장을 네 가지에 나누고 함정 카드 2장을 걸러 내며, 대상마다 메시지를 짝짓는다.', challenge: '카드 4장이 더해진 12장을 섞어 나누고, 평가 방법에 넣을 측정할 수 있는 지표를 고른다.' },
        activity: {
          title: '캠페인 네 가지 기획', tool: 'mindmap',
          teacher: '"학생회가 \'주변인 개입 캠페인\'을 연다면 무엇부터 정해야 할까요? 포스터부터 그리면 될까요?" 네 가지(대상·핵심 메시지·바라는 행동·평가 방법)를 칠판에 적고 카드를 나누게 한다. \'포스터를 예쁘게 만들기\'를 가지에 다는 학생에게 "예쁜 포스터를 본 학생은 다음 날 무엇을 다르게 할까요?"라고 묻는다. \'가해 학생 이름 공개하기\'를 고르는 학생에게는 "이름 공개가 피해 학생에게 다시 주목을 쏠리게 하지는 않을까요?"라고 묻는다. 도입에서 읽은 가상 자료의 \'보복 걱정\'·\'방법 모름\'을 겨누는 메시지가 무엇일지 짚는다.',
          task: '캠페인 기획 카드를 네 가지에 나누고, 대상에 맞는 메시지와 잴 수 있는 지표를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('캠페인 기획 카드를 알맞은 가지에 다세요.', ['대상', '핵심 메시지', '바라는 행동', '평가 방법'], [
              ['지켜보기만 하던 1학년 학생들', '점심시간 급식실에 있는 학생들'],
              ['돕는 방법은 하나가 아니다', '혼자 나서지 않아도 알릴 수 있다'],
              ['목격하면 담임 선생님이나 117에 알리기', '혼자 있는 친구 곁에 앉기'],
              ['캠페인 전후 같은 질문으로 설문해 견주기', '개입 방법 다섯 가지를 아는 학생 수 세기'],
            ], { k: 1, hard: [['담임 선생님과 학부모'], ['지켜보는 사람이 바뀌면 교실이 바뀐다'], ['단톡방 조롱 글을 캡처해 두기'], ['한 달 뒤 같은 설문을 다시 하기']], traps: ['포스터를 예쁘게 만들기', '가해 학생 이름 공개하기'], d: 0.35, opt: { topic: '주변인 개입 캠페인' } }),
            MATCHQ('캠페인 대상마다 알맞은 핵심 메시지를 짝지으세요.', [['보복이 걱정되는 학생', '알린 사람이 드러나지 않게 도움을 청할 길이 있다'], ['도울 방법을 모르는 학생', '곁에 앉는 것도 돕는 방법이다'], ['남의 일이라고 여기는 학생', '지켜보는 사람이 바뀌면 교실 분위기가 바뀐다']], { k: 2, extra: ['피해자도 잘못이 있다'], d: 0.35, opt: { topic: '대상별 메시지' }, more: { hints: ['도입 자료에서 돕지 못한 이유를 떠올리고, 그 이유를 풀어 주는 메시지를 찾아요.'] } }),
            PICKQ('평가 방법 가운데 숫자로 잴 수 있는 지표만 고르세요.', ['캠페인 전후 "도울 방법을 안다"고 답한 학생 비율', '개입 방법 퀴즈를 맞힌 학생 수'], ['분위기가 좋아진 느낌', '포스터가 예쁘다는 칭찬'], { d: 0.4, opt: { basket: '측정할 수 있는 지표' }, more: { conclude: '캠페인은 바라는 행동을 정하고, 그 행동이 늘었는지 잴 지표까지 있어야 고칠 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 캠페인 기획을 네 칸에 정리하세요.', columns: ['대상', '핵심 메시지', '바라는 행동', '평가 지표'], cells: [['', '', '', '']] }] },
        notes: '\'피해자도 잘못이 있다\'는 함정 카드다. 고른 학생이 있으면 잘못은 늘 폭력을 쓴 사람에게 있다는 점을 바로 짚는다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '학생회 캠페인 제안서',
        method: '캠페인 제안서 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀(첫 문장 도움말)을 보고 배경·목표, 활동, 평가를 쓴다.', base: '틀 없이 세 칸을 쓰고 칸마다 기준표 세 항목을 스스로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 평가 칸에 예상되는 반대 의견과 대응을 더한다.' },
        activity: {
          title: '캠페인 제안서 세 칸', tool: 'rubric-writing',
          teacher: '"학생회에 낼 제안서는 \'좋은 일 하자\'로는 통과되지 않아요. 왜 필요한지, 무엇을 할지, 잘됐는지 어떻게 알지를 써야 해요." 배경 칸에 앞 활동의 가상 자료를 근거로 쓰게 한다. "학교폭력은 나쁘니까 캠페인을 해야 한다"처럼 근거 없는 배경을 쓴 학생에게 "가상 설문에서 학생들이 막힌 이유는 무엇이었나요? 그 이유가 배경이 될 수 있을까요?"라고 묻는다. 활동 칸에서는 피해 학생이나 특정 학생이 드러나지 않게 쓰라고 거듭 말한다.',
          task: '학생회에 낼 캠페인 제안서를 배경·목표, 활동, 평가 칸에 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 배경과 목표를 2~3문장으로 쓰세요.', '가상 설문(돕지 못한 이유)을 근거로, 캠페인이 왜 필요하고 무엇을 바꾸려는지 쓰세요.', ['가상 자료를 근거로 들었다', '캠페인이 겨눌 이유를 하나로 정했다', '목표를 바라는 행동으로 썼다'], { min: 40, max: 400, sent: [2, 3], must: [['설문', '자료', '응답']], starter: '가상 설문에서 가장 많은 학생이 ~ 때문에 돕지 못했다고 답했다. 그래서 이 캠페인은 ~', plus: '가상 자료의 한계(누구에게 물었는지 모름)를 밝혔다', d: 0.35 }),
            RWQ('제안서의 활동을 2~3문장으로 쓰세요.', '캠페인에서 언제·어디서·무엇을 할지 쓰세요.', ['언제·어디서 할지 썼다', '바라는 행동과 이어진다', '특정 학생이 드러나지 않게 했다'], { min: 40, max: 400, sent: [2, 3], must: [['점심', '쉬는 시간', '조회', '급식실', '복도', '교실', '주간']], starter: '캠페인 주간 동안 점심시간 급식실 앞에서 ~', plus: '활동마다 맡을 사람(학생회·학급 대표 등)을 썼다', d: 0.35 }),
            RWQ('제안서의 평가 방법을 2~3문장으로 쓰세요.', '캠페인이 효과가 있었는지 무엇으로, 언제 잴지 쓰세요.', ['측정할 수 있는 지표를 썼다', '언제 잴지 썼다', '결과를 어떻게 쓸지 썼다'], { min: 40, max: 500, sent: [2, 4], must: [['설문', '비율', '수', '견주']], starter: '캠페인 전과 한 달 뒤에 같은 질문으로 ~', plus: '예상되는 반대 의견과 그 대응을 썼다', d: 0.4, more: { conclude: '좋은 제안서는 근거로 시작해 잴 수 있는 지표로 끝나요. 그래야 다음 캠페인을 더 낫게 고칠 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안서 네 칸을 정리하세요.', columns: ['칸', '쓸 내용'], cells: [['배경', ''], ['목표', ''], ['활동', ''], ['평가', '']] }] },
        notes: '실제 학교폭력 사안이나 실제 학생을 배경으로 쓰지 않게 한다. 근거는 수업의 가상 자료만 쓴다.',
      }),

      M({
        id: 'wrap.slogan', type: 'wrap', title: '캠페인 슬로건 낱말',
        method: '슬로건 낱말 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 카드 4장(쓸 말 둘·피할 표현 둘)을 먼저 함께 읽고 나눈다.', base: '카드 6장을 \'슬로건에 쓸 말\'과 \'피해야 할 표현\'으로 스스로 나눈다.', challenge: '고른 낱말로 슬로건 두 개를 만들어 활동지에서 견준다.' },
        wrap: {
          teacher: '"오늘 설계한 캠페인에 붙일 슬로건을 만든다면 어떤 낱말을 쓸까요? 듣는 사람이 움직이고 싶어지는 말과, 오히려 상처를 주거나 말하기를 막는 말을 가려 봐요." 카드를 나눈 뒤 \'고자질쟁이 되지 말자\'를 쓸 말에 둔 학생에게 "이 말을 들은 학생은 다음에 선생님께 알리고 싶어질까요?"라고 묻는다. \'피해자 이름 공개\'처럼 피해 학생을 다시 드러내는 표현은 쓰지 않는다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', slots: ['슬로건에 쓸 말', '피해야 할 표현'], cards: ['곁에 서기', '알리는 용기', '혼자 두지 않기', '고자질쟁이 되지 말자', '맞서서 혼내 주자', '피해자 이름 공개'] }, prompt: '슬로건 낱말 카드를 쓸 말과 피해야 할 표현으로 나누세요.', target: { sort: { '슬로건에 쓸 말': ['곁에 서기', '알리는 용기', '혼자 두지 않기'], '피해야 할 표현': ['고자질쟁이 되지 말자', '맞서서 혼내 주자', '피해자 이름 공개'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '주변인 개입에 대한 말 가운데 오늘 배운 것과 맞는 것을 고르세요.', options: ['개입은 직접 막아서는 것뿐이다', '내 안전을 지키며 알리기·곁에 서기도 개입이다', '피해 학생이 먼저 도움을 청할 때까지 기다린다'], answer: 1, difficulty: 0.15, explain: '멈추기·주의 돌리기·알리기·기록하기·곁에 서기 모두 개입이고, 언제나 내 안전이 먼저예요.' },
            { type: 'short', prompt: '오늘 고른 낱말로 우리 캠페인 슬로건 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '캠페인 슬로건',
          items: [
            { type: 'table', prompt: '슬로건 두 개를 만들어 견주세요.', columns: ['슬로건', '누구에게 어떤 행동을 바라나'], cells: [['', ''], ['', '']] },
            { type: 'short', prompt: '두 슬로건 가운데 더 나은 쪽과 그 까닭을 쓰세요.' },
          ],
          easy: { note: '"혼자 두지 않기"·"알리는 용기"처럼 바라는 행동이 드러나는 말을 써요.', items: [{ type: 'short', prompt: '슬로건 하나를 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '개입 방법 스스로 점검',
        method: '개입 방법 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개(알리기·곁에 서기·내 안전)를 먼저 함께 읽고 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '가장 쓰기 어려운 방법 하나를 고르고 연습 방법을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"다섯 가지 개입 방법 가운데 지금 내가 실제로 쓸 수 있는 것은 무엇인가요? 솔직하게 표시해 봐요. 다 못 해도 괜찮아요." 표시한 뒤 가장 어려운 방법 하나를 고르게 한다. "나는 성격상 못 한다"는 학생에게 "말로 멈추기가 어렵다면, 기록하거나 곁에 앉는 방법은 어떨까요?"라고 묻는다. 개입 방법은 성격이 아니라 연습으로 늘어난다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 개입 방법 점검' }, prompt: '오늘 익힌 개입 방법을 쓸 수 있는지 스스로 점검해 표시하세요.', target: { selfCheck: ['상황을 보고 내가 안전한지 먼저 살필 수 있다', '담임·상담 선생님이나 117에 알리는 방법을 안다', '혼자 있는 친구 곁에 앉을 수 있다', '조롱 글을 퍼뜨리지 않고 기록해 둘 수 있다', '다른 화제로 주의를 돌리는 말을 하나 안다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '여러 명이 한 학생을 둘러싸고 위협하는 장면을 봤을 때 먼저 할 일은?', options: ['혼자 끼어들어 몸으로 막는다', '자리를 벗어나 선생님이나 112에 알린다', '영상을 찍어 단톡방에 올린다'], answer: 1, difficulty: 0.15, explain: '내 안전이 흔들리는 상황에서는 안전한 곳에서 어른·112에 알리는 것이 먼저예요.' },
            { type: 'short', prompt: '가장 쓰기 어려운 개입 방법 하나와 그것을 연습할 방법을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '나의 개입 방법',
          items: [
            { type: 'check', prompt: '내가 쓸 수 있는 개입 방법에 표시하세요.', options: ['멈추기', '주의 돌리기', '알리기', '기록하기', '곁에 서기'] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '학교폭력을 알리는 상담·신고 전화는 ___이다.', answer: '117' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11. 성인이 되며 커지는 책임과 폭력 (12학년)
  // ======================================================================================================
  {
    const M = MOD('adult-duty', [12]);
    const DIL3 = (prompt, scene, paths, reasons, good, { chal = null, d = 0.4, more = {} } = {}) => {
      const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
      const it = { prompt, toolOptions: { scene, reasons }, target: at(3), difficulty: d, levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) } } };
      if (chal) it.levels.challenge = { prompt: pfx(prompt, chal.tag), target: Object.assign(at(3), chal.target) };
      return Object.assign(it, more);
    };
    const easyAs = (q, eg) => { q.levels.easy = { prompt: pfx(q.prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: { sort: Object.fromEntries(q.toolOptions.slots.map((s, i) => [s, eg[i] || []])) } }; return q; };

    const DUTY_WORDS = [{ en: '조치', ko: '학교가 학교폭력 사안을 심의해 정하는 보호·선도 결정' }, { en: '손해 배상', ko: '남에게 끼친 손해를 갚게 하는 책임' }, { en: '처벌', ko: '법을 어긴 행위에 대해 국가가 묻는 책임' }, { en: '회복', ko: '잘못을 인정하고 깨진 관계와 피해를 되돌리려는 노력' }];
    const CHAT = { text: '졸업을 한 달 앞둔 동아리 단톡방. 몇몇 3학년이 후배의 발표 영상을 올리고 조롱하는 글을 단다.', who: '나', motif: 'star', choices: [
      { id: 'emoji', text: '웃음 이모티콘만 남긴다', result: '조롱 글이 늘고 후배가 단톡방을 나간다.', impact: [{ who: '후배', text: '동아리에서 멀어진다', tone: -1 }], ending: '"나는 글을 쓰지 않았다"는 말로 책임이 사라지지 않는다.' },
      { id: 'stop', text: '"이건 아니다, 영상 내리자"고 쓴다', result: '한 명이 "졸업하면 끝인데 뭘"이라고 답하지만 영상은 내려간다.', impact: [{ who: '후배', text: '조롱이 잠시 멈춘다', tone: 1 }],
        next: { text: '영상은 내려갔지만 캡처가 다른 단톡방에 돌기 시작했다.', choices: [
          { id: 'leave', text: '졸업하면 끝이라며 더 신경 쓰지 않는다', result: '캡처가 계속 퍼진다.', impact: [{ who: '후배', text: '상처가 오래 남는다', tone: -1 }], ending: '졸업은 끝이 아니다. 퍼진 글은 남고, 후배의 상처도 남는다.' },
          { id: 'tell', text: '동아리 담당 선생님께 알리고 캡처를 기록으로 넘긴다', result: '선생님이 퍼진 곳에 삭제를 요청하고 후배의 마음을 살핀다.', impact: [{ who: '후배', text: '보호받는다', tone: 1 }],
            next: { text: '선생님이 "글을 쓴 3학년들과 어떻게 마무리할지" 의견을 묻는다.', choices: [
              { id: 'repair', text: '글 쓴 친구들이 후배에게 사과하고 동아리 규칙을 함께 고치는 자리를 제안한다', result: '후배가 원할 때 사과를 전하고, 동아리 단톡방 규칙을 새로 정한다.', impact: [{ who: '후배', text: '존중받았다고 느낀다', tone: 1 }, { who: '글 쓴 3학년', text: '책임을 지고 관계를 되돌릴 기회를 얻는다', tone: 1 }], ending: '잘못을 인정하고 피해와 관계를 되돌리는 회복의 길이 열린다.' },
              { id: 'shame', text: '글 쓴 친구들 이름을 전교에 공개하자고 한다', result: '소문이 커지고 후배에게 다시 주목이 쏠린다.', impact: [{ who: '후배', text: '원치 않는 관심을 받는다', tone: -1 }], ending: '공개 망신은 또 다른 상처를 만들고 회복을 막는다.' }] } }] } },
      { id: 'join', text: '분위기에 맞춰 나도 한마디 보탠다', result: '내 글도 캡처되어 함께 퍼진다.', impact: [{ who: '나', text: '내 이름이 조롱 글과 함께 남는다', tone: -1 }, { who: '후배', text: '상처가 커진다', tone: -1 }], ending: '졸업 직전의 한 줄이 내 이름과 함께 오래 남는다.' }] };
    const CHAT_R = [{ id: 'trace', text: '글을 지워도 퍼진 기록은 남을 수 있다' }, { id: 'repair', text: '책임은 잘못을 인정하고 관계를 되돌리는 데까지 간다' }, { id: 'adult', text: '퍼지는 글을 멈추려면 어른의 도움이 필요하다' }, { id: 'grad', text: '졸업하면 학교 일은 다 끝난다', why: '졸업해도 남긴 글과 상처는 남고, 사회에서 책임을 물을 수도 있어요.' }, { id: 'joke', text: '다들 웃었으니 장난이다', why: '함께 웃었다고 조롱이 장난이 되지 않아요.' }];

    MODS.push(
      M({
        id: 'intro.words', type: 'intro', title: '책임을 나타내는 낱말',
        method: '책임을 나타내는 낱말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '조치·회복 두 쌍만 함께 짝짓는다.', base: '조치·손해 배상·처벌·회복 네 쌍을 짝짓는다.', challenge: '\'조치\'와 \'처벌\'처럼 헷갈리는 두 낱말의 차이를 한 문장으로 말한다.' },
        intro: {
          teacher: '"\'책임진다\'는 말은 하나지만, 책임에는 여러 얼굴이 있어요. 학교가 정하는 조치, 손해를 갚는 배상, 국가가 묻는 처벌, 그리고 관계를 되돌리는 회복." 시연 단추로 낱말과 뜻이 짝지어지는 모습을 보여 준다. "학교에서 조치를 받으면 그걸로 끝"이라는 말이 나오면 "조치를 받았다고 상대가 입은 손해나 깨진 관계도 저절로 되돌아올까요?"라고 되묻는다. 오늘은 나이가 들며 이 책임들이 어떻게 커지는지 사례로 따져 본다고 밝힌다. 구체적인 나이나 형량은 다루지 않는다.',
          student: '책임을 나타내는 네 낱말(조치·손해 배상·처벌·회복)을 뜻과 짝지어 보고, 서로 어떻게 다른지 생각해 보세요.',
          demo: { tool: 'wordcards', options: { words: DUTY_WORDS }, sequence: [{ match: { 조치: '조치', '손해 배상': '손해 배상', 처벌: '처벌', 회복: '회복' } }] },
          art: { draw: 'four folded paper tags hanging from a string, each tag a different pastel color, a paper graduation cap resting below and a small paper scale balancing two hearts', banner: '책임에는 여러 얼굴이 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.quiz', type: 'intro', title: '이것도 책임이 따를까',
        method: '“이것도 책임이 따를까” 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개(단톡방 욕설·사진 무단 게시·생일 축하 글)만 함께 본다.', base: '항목 6개 가운데 책임이 따를 수 있는 행동 4개에 표시한다.', challenge: '표시한 항목 하나를 골라 왜 책임이 따르는지 한 줄로 말한다.' },
        intro: {
          teacher: '"이 행동들 가운데 책임이 따를 수 있는 것은 무엇일까요? 손을 들어 표시해 봐요." 시연 단추로 네 항목에 표시되는 모습을 보여 준다. "말로 한 건데 무슨 책임이냐"는 말이 나오면 "단톡방에 남긴 욕설은 말일까요, 기록일까요? 읽은 사람은 몇 명일까요?"라고 되묻는다. 술자리 강요처럼 성인이 되면 마주칠 장면도 넣었다는 점을 말하고, 오늘은 행동마다 어떤 종류의 책임이 따르는지 나눠 본다고 밝힌다.',
          student: '행동 목록을 읽고, 책임이 따를 수 있는 행동에 표시해 보세요. 왜 그렇게 생각하는지도 떠올려 보세요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '이것도 책임이 따를까', items: [{ id: 'curse', text: '단톡방에 친구를 겨냥한 욕설을 올린다' }, { id: 'photo', text: '친구 사진을 허락 없이 올리고 놀린다' }, { id: 'drink', text: '모임에서 거절하는 사람에게 술을 계속 강요한다' }, { id: 'errand', text: '후배에게 돈을 걷어 오라고 시킨다' }, { id: 'bday', text: '친구 생일에 축하 글을 남긴다' }, { id: 'oppose', text: '회의에서 다른 의견을 정중하게 말한다' }] }, sequence: [{ checklist: ['curse', 'photo', 'drink', 'errand'] }] },
          art: { draw: 'a paper checklist clipboard with six lines, small paper icons of a chat bubble, a photo, a cup and a coin beside some lines, a pencil ticking boxes', banner: '이것도 책임이 따를까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '항목은 모두 가상의 행동 목록이다. 학생에게 해 본 적이 있는지 묻지 않는다.',
      }),

      M({
        id: 'activity.kinds', type: 'activity', title: '사례별 책임 나누기',
        method: '사례별 책임의 종류 나누기', tool: 'story', minutes: 18,
        levels: { easy: '사례 카드 4장을 세 칸에 나누고, 놓는 즉시 맞는지 본다.', base: '사례 카드 6장을 나누고, 여러 책임이 겹치는 까닭을 고르며, 책임마다 묻는 곳을 짝짓는다.', challenge: '헷갈리는 사례 카드 3장이 더해진 9장을 섞어 나누고, 활동지에 한 사례에 여러 책임이 겹치는 까닭을 쓴다.' },
        activity: {
          title: '책임의 세 갈래', tool: 'story',
          teacher: '"같은 \'폭력\'이라도 누가, 어디서 했느냐에 따라 묻는 책임이 달라요. 학교 안 조치, 사회에서의 책임, 관계의 책임으로 나눠 봐요." 카드를 놓을 때마다 "이 사례에서 책임을 묻는 사람은 누구인가요?"라고 묻는다. \'사과 없이 넘어가 친구와의 믿음이 깨짐\'을 \'해당 없음\'처럼 빼려는 학생에게 "법이나 학교가 묻지 않아도 남는 책임은 없을까요?"라고 되묻는다. "학생이면 어떤 일도 처벌받지 않는다"는 말에는 학생 신분이어도 사회에서 책임을 물을 수 있고, 성인이 되면 그 책임이 더 커진다는 점을 짚는다(구체 나이·형량은 다루지 않는다).',
          task: '가상 사례 카드를 책임의 세 갈래로 나누고, 겹치는 까닭과 책임을 묻는 곳을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            easyAs(SORTQ('가상 사례 카드를 책임의 종류 칸에 나누세요.', ['학교 안 조치', '사회에서의 책임', '관계의 책임'], [
              ['재학생 사이 따돌림이 학교폭력 사안으로 신고됨', '재학생이 학교 단톡방에서 친구를 모욕해 심의에 오름'],
              ['성인이 된 뒤 일터 동료를 때려 다치게 함', '성인이 된 뒤 남의 사진을 합성해 퍼뜨림'],
              ['사과 없이 넘어가 친구와의 믿음이 깨짐', '조롱 글 때문에 동아리 후배들이 떠남'],
            ], { hard: [['재학생이 후배에게 돈을 걷어 오라고 시켜 신고됨'], ['성인이 된 뒤 모임에서 술을 강요해 다툼이 남'], ['졸업 뒤에도 옛 친구들이 연락을 끊음']], d: 0.35, opt: { trayLabel: '가상 사례' } }),
            [['재학생 사이 따돌림이 학교폭력 사안으로 신고됨', '재학생이 학교 단톡방에서 친구를 모욕해 심의에 오름'], ['성인이 된 뒤 일터 동료를 때려 다치게 함'], ['사과 없이 넘어가 친구와의 믿음이 깨짐']]),
            PICKQ('한 사례에 여러 책임이 겹칠 수 있는 까닭으로 알맞은 것만 고르세요.', ['같은 행동이 학교 규칙과 법을 함께 어길 수 있다', '조치를 받아도 깨진 관계는 따로 회복해야 한다'], ['조치를 받으면 다른 책임은 모두 사라진다', '졸업하면 모든 책임이 끝난다'], { d: 0.35, opt: { basket: '겹치는 까닭' } }),
            MATCHQ('책임의 종류마다 그 책임을 묻는 곳을 짝지으세요.', [['학교 안 조치', '학교폭력대책심의위원회'], ['사회에서의 책임', '수사기관과 법원'], ['관계의 책임', '상처받은 사람과 공동체']], { k: 2, extra: ['친구들의 투표'], d: 0.35, more: { conclude: '학교 안 조치는 학교 안의 일이지만, 사회에서의 책임과 관계의 책임은 졸업한 뒤에도 남을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 사례 하나를 골라, 그 사례에 여러 책임이 겹치는 까닭을 두 문장으로 쓰세요.' }] },
        notes: '사례는 모두 가상이며 조문 번호·형량·구체 나이를 쓰지 않는다. 실제 사건이나 학교 안 실제 사안을 사례로 쓰지 않는다.',
      }),
      M({
        id: 'activity.graduation', type: 'activity', title: '졸업 직전 단톡방 사건',
        method: '졸업 직전 단톡방 사건 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '단톡방 장면에서 갈림길 둘을 지나 결과를 보고 근거를 고른다.', base: '갈림길 셋을 끝까지 따라가 관계·진로·책임의 결과를 보고 근거를 고른다.', challenge: '갈림길 셋을 끝까지 가고, 회복의 길과 다른 길을 끝까지 가 견준 뒤 근거를 고른다(영향 표시는 맞힌 뒤에 보인다).' },
        activity: {
          title: '졸업 한 달 전 단톡방', tool: 'dilemma',
          teacher: '"졸업을 한 달 앞둔 단톡방이에요. 누군가 \'졸업하면 끝인데 뭘\'이라고 해요. 정말 끝일까요?" 선택마다 후배와 나에게 생긴 결과를 소리 내어 읽게 한다. \'이모티콘만 남긴다\'를 고른 학생에게 "글은 안 썼지만, 후배가 본 단톡방에서 내 이모티콘은 어떤 뜻으로 읽힐까요?"라고 묻는다. \'이름 공개\'를 고른 학생에게는 "잘못한 사람을 망신 주는 것과 책임지게 하는 것은 같을까요? 후배는 원했을까요?"라고 묻는다. 책임은 처벌로 끝나지 않고, 잘못을 인정하고 관계를 되돌리는 회복까지 간다는 점을 짚는다.',
          task: '졸업 직전 단톡방 장면의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('졸업 직전 단톡방에서 후배를 지키고 책임을 다하는 길을 고르고 근거를 고르세요.', CHAT, [['stop', 'tell', 'repair']], CHAT_R, ['trace', 'repair', 'adult'], { chal: { tag: '회복의 길과 견주기', target: { explore: 2 } }, d: 0.4 }),
            EXPLOREQ('\'이름 공개\' 길과 \'나도 한마디\' 길도 끝까지 가 보고, 회복의 길과 결과를 견주세요.', CHAT, CHAT_R, ['다른 길의 끝 장면을 확인했다', '후배·글 쓴 3학년·나에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('대학 새내기 모임에서 술을 강요하는 장면에서 알맞은 길을 고르고 근거를 고르세요.', { text: '대학 새내기 모임. 한 선배가 거절하는 신입생에게 계속 술을 권하며 "분위기 깨지 마"라고 놀린다.', who: '나', motif: 'moon', choices: [
              { id: 'laugh', text: '분위기를 맞추려고 함께 웃는다', result: '선배가 더 세게 권하고 신입생이 굳은 얼굴이 된다.', impact: [{ who: '신입생', text: '거절할 힘을 잃는다', tone: -1 }], ending: '함께 웃는 것은 강요에 힘을 보탠다.' },
              { id: 'help', text: '"음료로 하자"며 신입생 옆에서 분위기를 바꾼다', result: '신입생이 잔을 내려놓는다. 선배가 못마땅해한다.', impact: [{ who: '신입생', text: '숨 돌릴 틈이 생긴다', tone: 1 }],
                next: { text: '선배가 "너도 분위기 못 맞추냐"며 이번에는 나에게 잔을 내민다.', choices: [
                  { id: 'firm', text: '"강요는 안 됩니다"라고 분명히 말하고, 되풀이되면 학생회에 알리겠다고 한다', result: '다른 신입생들도 고개를 끄덕이고 선배가 물러난다.', impact: [{ who: '모임', text: '거절이 존중되는 분위기가 된다', tone: 1 }], ending: '성인의 모임에서도 거절을 존중하는 것이 책임이다.' },
                  { id: 'drink', text: '분위기를 위해 대신 마셔 준다', result: '강요가 다음 사람에게로 넘어간다.', impact: [{ who: '다른 신입생', text: '같은 강요를 받는다', tone: -1 }], ending: '대신 마셔 주면 강요는 멈추지 않고 옮겨 갈 뿐이다.' }] } }] },
              [['help', 'firm']], [{ id: 'refuse', text: '술을 거절하는 것은 그 사람의 권리다' }, { id: 'stop', text: '강요를 멈추게 하는 말이 다른 사람도 지킨다' }, { id: 'mood', text: '분위기가 우선이다', why: '분위기를 이유로 남의 거절을 무시하면 폭력이 될 수 있어요.' }], ['refuse', 'stop'], { d: 0.35, more: { conclude: '학교를 떠나도 관계와 공동체 안의 책임은 이어지고, 성인이 되면 그 책임은 더 커져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '단톡방 장면에서 \'회복의 길\'과 \'이름 공개\' 길의 결과를 견주어, 책임을 진다는 것이 무엇인지 한 문장으로 쓰세요.' }] },
        notes: '장면은 가상이다. 조롱 글의 내용은 화면에 쓰지 않는다. 술 강요 장면은 성인기 공동체의 책임을 다루기 위한 것이며 음주를 권하는 장면이 아니다.',
      }),
      M({
        id: 'activity.career', type: 'activity', title: '폭력이 진로에 남기는 것',
        method: '폭력이 진로와 자립에 주는 영향', tool: 'mindmap', minutes: 18,
        levels: { easy: '신뢰·인간관계·일자리·지역 사회 생활 가지에 영향 카드 4장을 놓고, 놓는 즉시 맞는지 본다.', base: '영향 카드 8장을 네 가지에 나누고, 기록과 신뢰가 진로에 주는 영향의 근거를 고른다.', challenge: '카드를 섞어 나누고, 가지마다 회복을 위해 할 수 있는 일 카드를 짝짓는다.' },
        activity: {
          title: '진로·자립 네 가지 영향', tool: 'mindmap',
          teacher: '"폭력은 그 순간의 일로 끝날까요? 졸업 뒤 대학, 일터, 동네에서 어떤 영향이 남을지 네 가지로 펼쳐 봐요." 카드를 가지에 놓을 때마다 "이 영향은 누가 만든 것인가요?"라고 묻는다. "실력만 있으면 행동은 상관없다"는 학생에게 "함께 일할 사람을 뽑는다면, 실력과 함께 무엇을 볼까요?"라고 되묻는다. 회복 카드를 짝지을 때는 영향을 남겼더라도 책임을 지고 바뀐 행동을 보이면 신뢰를 다시 쌓을 수 있다는 점을 짚는다.',
          task: '폭력이 진로와 자립에 남기는 영향 카드를 네 가지에 나누고, 근거와 회복 방법을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('폭력이 남기는 영향 카드를 알맞은 가지에 다세요.', ['신뢰', '인간관계', '일자리', '지역 사회 생활'], [
              ['함께 일할 사람으로 믿기 어려워진다', '사과해도 다시 믿기까지 오래 걸린다'],
              ['친구와 동료가 곁을 떠난다', '새 모임에서도 소문이 따라온다'],
              ['동료와의 갈등으로 일을 이어 가기 어렵다', '일터 징계로 계약이 끝날 수 있다'],
              ['이웃과 동네 모임에서 멀어진다', '봉사·동호회 같은 공동체 활동에 끼기 어렵다'],
            ], { k: 1, d: 0.35, opt: { topic: '폭력이 진로·자립에 남기는 것' } }),
            PICKQ('"기록과 신뢰가 진로에 영향을 준다"는 말의 근거로 알맞은 것만 고르세요.', ['사람들은 지난 행동으로 앞으로의 행동을 가늠한다', '온라인에 남긴 글은 오래 남아 다시 찾아질 수 있다'], ['학교 밖에서는 아무도 지난 일을 모른다', '실력만 있으면 행동은 상관없다'], { d: 0.35, opt: { basket: '근거' } }),
            MATCHQ('가지마다 회복을 위해 할 수 있는 일을 짝지으세요.', [['신뢰', '작은 약속을 정해 꾸준히 지킨다'], ['인간관계', '상처 준 사람에게 사과하고 바뀐 행동을 보인다'], ['일자리', '일터의 절차를 따르고 상담을 받는다'], ['지역 사회 생활', '공동체 활동에 책임 있게 참여한다']], { k: 2, d: 0.4, opt: { topic: '회복하는 길' }, more: { conclude: '폭력은 신뢰·관계·일자리·지역 생활에 오래 영향을 남겨요. 책임을 지고 회복하려는 행동이 그 영향을 줄이는 길이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가지마다 남는 영향과 회복을 위해 할 수 있는 일을 쓰세요.', columns: ['가지', '남는 영향', '회복을 위해 할 일'], cells: [['신뢰', '', ''], ['일자리', '', '']] }] },
        notes: '학교생활기록부 기재 같은 구체 제도는 다루지 않는다. 겁을 주기보다 책임과 회복의 길에 초점을 둔다.',
      }),
      M({
        id: 'activity.reflect', type: 'activity', title: '성인이 된 나의 책임',
        method: '성찰 글 “성인이 된 나의 책임”', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문단 틀(첫 문장 도움말)을 보고 상황·다짐·까닭을 쓴다.', base: '틀 없이 세 칸을 쓰고 칸마다 기준표(구체 상황·행동 다짐 등)를 스스로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에 후배에게 건네는 조언 한 단락을 더한다.' },
        activity: {
          title: '나의 책임 성찰 글', tool: 'rubric-writing',
          teacher: '"몇 달 뒤면 여러분은 대학생이 되거나 일터에 가요. 그곳에서 나는 어떤 책임을 지는 사람이고 싶나요? 지난 일을 고백하는 글이 아니라 앞으로의 다짐을 쓰는 글이에요." 쓰기 전에 기준표를 함께 읽는다. "폭력을 하지 않겠다"처럼 막연한 다짐을 쓴 학생에게 "어떤 자리에서, 어떤 말이나 행동을 하겠다는 건가요? 단톡방에서라면?"이라고 묻는다. 실제 인물 이름이나 실제 사건은 쓰지 않고, 가상의 장면으로 쓰게 한다.',
          task: '성인이 된 뒤 관계와 공동체에서 질 책임을 상황·다짐·까닭 칸에 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('성인이 된 뒤 책임이 커지는 상황 하나를 2~3문장으로 쓰세요.', '대학·일터·지역 사회 가운데 한 곳을 골라, 관계 속에서 책임이 커지는 가상의 상황을 쓰세요.', ['구체적인 장소와 관계를 썼다', '그 상황에서 커지는 책임을 썼다', '실제 인물 이름을 쓰지 않았다'], { min: 40, max: 400, sent: [2, 3], must: [['책임']], starter: '대학이나 일터에서 ~할 때, 나에게는 ~할 책임이 생긴다.', plus: '학교 안 조치와 사회에서의 책임이 어떻게 다른지 함께 썼다', d: 0.35 }),
            RWQ('그 상황에서 지킬 행동 다짐을 2~3문장으로 쓰세요.', '앞에서 쓴 상황에서 내가 할 행동을 다짐으로 쓰세요.', ['내가 할 행동을 구체적으로 썼다', '잘못했을 때 회복할 방법을 함께 썼다', '내가 지킬 수 있는 다짐이다'], { min: 40, max: 400, sent: [2, 3], must: [['하겠다', '할 것이다', '다짐']], starter: '그럴 때 나는 ~하겠다. 만약 내가 잘못한다면 ~', plus: '다짐을 지켰는지 확인할 방법을 썼다', d: 0.35 }),
            RWQ('다짐의 까닭을 2~3문장으로 쓰세요.', '그 다짐이 나와 공동체에 왜 중요한지 오늘 배운 책임과 이어 쓰세요.', ['오늘 배운 책임의 종류와 이어 썼다', '다른 사람에게 미치는 영향을 생각했다', '앞으로의 행동에 초점을 두었다'], { min: 40, max: 500, sent: [2, 4], must: [['왜냐하면', '때문에', '까닭']], starter: '이 다짐이 중요한 까닭은 ~ 때문이다.', plus: '후배에게 건네는 조언 한 단락을 더했다', d: 0.4, more: { conclude: '성인이 된다는 것은 내 행동의 결과를 내가 감당하고, 잘못했을 때 회복의 책임까지 지는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '후배에게 "졸업하면 끝"이라는 말 대신 건넬 조언을 두 문장으로 쓰세요.' }] },
        notes: '학생의 실제 경험(가해·피해)을 쓰게 하지 않는다. 가상의 상황으로 쓰게 하고, 고백처럼 흐르는 글은 개별로 살핀다.',
      }),

      M({
        id: 'wrap.promise', type: 'wrap', title: '삶의 단계마다 약속',
        method: '삶의 단계마다 지킬 약속 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 단계 셋(졸업 무렵·대학·일터·지역 사회)의 약속을 먼저 함께 짝짓고 넷째는 스스로 놓는다.', base: '단계 4칸에 지킬 약속 카드를 짝지어 놓고 함정 카드 하나를 걸러 낸다.', challenge: '단계마다 약속이 달라지는 까닭을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"졸업 무렵부터 미래의 가정까지, 삶의 단계마다 지킬 약속을 하나씩 놓아 봐요." 카드를 놓은 뒤 \'졸업하면 연락을 끊고 잊는다\'를 놓은 학생에게 "연락을 끊으면 남긴 글과 상처도 함께 사라질까요?"라고 묻는다. 단계가 바뀌면 만나는 사람과 맡는 역할이 바뀌어 약속도 달라진다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'match', axis: ['지금', '나중'], slots: [{ id: 'grad', label: '졸업 무렵' }, { id: 'work', label: '대학·일터' }, { id: 'town', label: '지역 사회' }, { id: 'home', label: '미래의 가정' }], cards: ['단톡방에 남길 말을 고르고 조롱 글은 지운다', '동료를 존중하고 괴롭힘을 보면 알린다', '이웃의 위기 신호를 보면 112·119에 알린다', '가족을 존중하는 말로 갈등을 푼다', '졸업하면 연락을 끊고 잊는다'] }, prompt: '삶의 단계마다 지킬 약속 카드를 놓으세요.', target: { match: { grad: '단톡방에 남길 말을 고르고 조롱 글은 지운다', work: '동료를 존중하고 괴롭힘을 보면 알린다', town: '이웃의 위기 신호를 보면 112·119에 알린다', home: '가족을 존중하는 말로 갈등을 푼다' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"졸업하면 다 끝난다"는 말이 맞지 않는 까닭으로 가장 알맞은 것은?', options: ['졸업하면 학교가 모든 책임을 대신 진다', '남긴 기록과 상처, 사회에서의 책임은 졸업 뒤에도 남을 수 있다', '졸업 뒤에는 아무도 지난 일을 기억하지 않는다'], answer: 1, difficulty: 0.15, explain: '학교 안 조치는 학교 안의 일이지만, 남긴 기록과 상처, 사회에서의 책임은 졸업 뒤에도 남을 수 있어요.' },
            { type: 'short', prompt: '삶의 단계마다 약속이 달라지는 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '삶의 단계마다 지킬 약속',
          items: [
            { type: 'table', prompt: '단계마다 내가 지킬 약속을 쓰세요.', columns: ['단계', '내가 지킬 약속'], cells: [['졸업 무렵', ''], ['대학·일터', ''], ['지역 사회', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '책임은 잘못을 인정하고 관계와 피해를 되돌리는 ___까지 간다.', answer: '회복' },
          ],
        },
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '오늘 배운 책임 점검',
        method: '오늘 배운 책임 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개를 먼저 함께 읽고 표시한다.', base: '점검 항목 4개를 스스로 표시한다.', challenge: '아직 헷갈리는 항목 하나와 확인 방법을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 책임을 친구에게 설명할 수 있나요? 할 수 있는 것만 솔직하게 표시해 봐요." 표시한 뒤 표시하지 못한 항목 하나를 고르게 한다. "조치랑 처벌은 같은 거 아니에요?"라는 질문이 나오면 "조치는 학교가 정하는 보호·선도 결정이고, 처벌은 국가가 법으로 묻는 책임이에요. 누가 묻는지가 달라요"라고 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '오늘 배운 책임 점검' }, prompt: '오늘 배운 책임을 설명할 수 있는지 스스로 점검해 표시하세요.', target: { selfCheck: ['조치·손해 배상·처벌·회복의 뜻을 구별해 말할 수 있다', '학교 안 조치와 사회에서의 책임이 다르다는 것을 설명할 수 있다', '한 행동에 여러 책임이 겹칠 수 있음을 예로 들 수 있다', '회복을 위해 할 수 있는 일을 하나 말할 수 있다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '"학생이면 어떤 일을 해도 처벌받지 않는다"는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 학생은 학교 안 조치만 받는다', '틀리다, 학생이어도 사회에서 책임을 물을 수 있고 성인이 되면 책임이 더 커진다', '맞다, 졸업하면 기록이 모두 사라진다'], answer: 1, difficulty: 0.15, explain: '학생 신분이어도 사회에서 책임을 물을 수 있고, 성인이 되면 그 책임은 더 커져요.' },
            { type: 'short', prompt: '아직 헷갈리는 항목 하나와 그것을 확인할 방법을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '오늘 배운 책임',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 내 말로 쓰세요.', columns: ['낱말', '내 말로 쓴 뜻'], cells: [['조치', ''], ['처벌', ''], ['회복', '']] },
            { type: 'short', prompt: '한 행동에 여러 책임이 겹치는 예를 하나 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 12. 일터와 사회의 괴롭힘·성희롱 대응 (12학년)
  // ======================================================================================================
  {
    const M = MOD('workplace', [12]);
    const DIL3 = (prompt, scene, paths, reasons, good, { chal = null, d = 0.4, more = {} } = {}) => {
      const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
      const it = { prompt, toolOptions: { scene, reasons }, target: at(3), difficulty: d, levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) } } };
      if (chal) it.levels.challenge = { prompt: pfx(prompt, chal.tag), target: Object.assign(at(3), chal.target), toolOptions: chal.opt || {} };
      return Object.assign(it, more);
    };
    const easyAs = (q, eg) => { q.levels.easy = { prompt: pfx(q.prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: { sort: Object.fromEntries(q.toolOptions.slots.map((s, i) => [s, eg[i] || []])) } }; return q; };

    const CAFE = { text: '카페 아르바이트 3주째. 손님이 없을 때마다 매니저가 하은의 외모를 두고 농담을 하고, 다른 직원들은 어색하게 웃는다.', who: '하은', motif: 'cloud', choices: [
      { id: 'along', text: '분위기를 깨기 싫어 같이 웃어 넘긴다', result: '농담이 점점 잦아진다.', impact: [{ who: '하은', text: '불편함이 쌓인다', tone: -1 }],
        next: { text: '며칠 뒤 매니저가 "너도 웃었잖아"라며 비슷한 농담을 또 한다.', choices: [
          { id: 'quit', text: '아무에게도 말하지 않고 그만둔다', result: '하은은 일터를 떠나지만 농담은 그대로 남는다.', impact: [{ who: '하은', text: '나를 지켰지만 혼자 감당했다', tone: 0 }], ending: '그만두는 것도 나를 지키는 선택이다. 기록과 도움 요청을 함께 챙기면 권리를 더 지킬 수 있다.' },
          { id: 'late', text: '지금부터라도 날짜와 들은 말을 적고 학교 취업 지원 담당 선생님께 연락한다', result: '선생님이 기록을 보고 다음 단계를 함께 정하자고 한다.', impact: [{ who: '하은', text: '혼자가 아니게 된다', tone: 1 }], ending: '함께 웃었던 날이 있어도 불편하다고 말하고 도움을 청할 수 있다. 잘못은 농담한 사람에게 있다.' }] } },
      { id: 'clear', text: '"그런 말은 불편하니 하지 말아 주세요"라고 분명히 말한다', result: '매니저가 "농담인데 예민하네"라며 웃는다.', impact: [{ who: '하은', text: '내 뜻을 분명히 밝혔다', tone: 1 }],
        next: { text: '다음 주에도 같은 농담이 되풀이된다.', choices: [
          { id: 'record', text: '날짜·장소·들은 말·옆에 있던 사람을 적고 학교 취업 지원 담당 선생님께 알린다', result: '선생님이 사업장과 이야기하고 노동 상담 창구도 함께 알려 준다.', impact: [{ who: '하은', text: '도움을 받을 근거가 생긴다', tone: 1 }],
            next: { text: '같은 시간대 동료 지우가 "사실 나도 그 농담이 불편했어"라고 말한다.', choices: [
              { id: 'support', text: '지우에게 기록을 함께 남기고 같이 도움을 요청하자고 한다', result: '두 사람의 기록이 함께 전달된다.', impact: [{ who: '지우', text: '혼자 견디지 않게 된다', tone: 1 }, { who: '일터', text: '바뀔 힘이 커진다', tone: 1 }], ending: '함께 말하면 일터의 문화가 바뀔 힘이 커진다.' },
              { id: 'alone', text: '"네 일은 네가 알아서 해"라고 한다', result: '지우는 아무 말도 하지 못한다.', impact: [{ who: '지우', text: '여전히 혼자 견딘다', tone: -1 }], ending: '내 문제는 풀려도, 같은 자리의 동료는 여전히 혼자 남는다.' }] } },
          { id: 'endure', text: '일자리를 잃을까 봐 참는다', result: '불편함이 쌓여 일하러 가는 날이 무거워진다.', impact: [{ who: '하은', text: '몸과 마음이 지친다', tone: -1 }], ending: '참는 동안에도 잘못은 하은이 아니라 농담한 사람에게 있다. 기록과 도움 요청은 언제든 시작할 수 있다.' }] } },
      { id: 'vent', text: '단톡방에 매니저 욕을 쓴다', result: '글이 퍼지며 일이 복잡해지고, 문제의 농담은 그대로다.', impact: [{ who: '하은', text: '화는 풀리지 않고 해결도 멀다', tone: 0 }], ending: '화가 나는 것은 당연하지만, 기록과 공식 도움 경로가 나를 더 잘 지킨다.' }] };
    const CAFE_R = [{ id: 'fault', text: '불편한 농담의 잘못은 농담한 사람에게 있다' }, { id: 'record', text: '날짜·말·목격자 기록이 도움을 받을 때 근거가 된다' }, { id: 'help', text: '학교 취업 지원 담당·노동 상담 창구에 도움을 청할 수 있다' }, { id: 'peer', text: '불편해하는 동료 곁에서 함께 기록하고 요청한다' }, { id: 'joke', text: '농담이었다면 문제가 아니다', why: '말한 사람이 농담이라고 해도 듣는 사람이 불쾌하고 되풀이된다면 문제가 될 수 있어요.' }, { id: 'parttime', text: '아르바이트생은 참아야 한다', why: '아르바이트생도 존중받으며 일할 권리가 있어요.' }];

    MODS.push(
      M({
        id: 'intro.first', type: 'intro', title: '아르바이트 첫날 장면',
        method: '가상 아르바이트 첫날 장면', tool: 'story', minutes: 6,
        levels: { easy: '장면 칸 3개(안내·외모 평가·계약서)만 함께 보고 불편한 칸을 고른다.', base: '장면 칸 5개를 넘겨 보며 불편한 말이 오간 칸을 모두 고른다.', challenge: '고른 칸에서 서아가 할 수 있었던 행동(분명히 말하기·기록·도움 요청)을 하나 골라 말한다.' },
        intro: {
          teacher: '"서아의 편의점 아르바이트 첫날이에요. 다섯 장면 가운데 불편한 말이 오간 장면은 어디인가요?" 시연 단추로 세 장면이 바구니에 담기는 모습을 보여 준다. "첫날이니까 다 참아야 한다"는 말이 나오면 "근로계약서를 함께 읽는 장면과 외모를 평가하는 장면은 같은 \'일터의 일\'일까요?"라고 되묻는다. 불편한 말을 들은 사람이 잘못한 것이 아니라는 점을 짚고, 오늘은 일터에서 알아차리고 기록하고 요청하는 법을 익힌다고 밝힌다.',
          student: '서아의 아르바이트 첫날 장면을 넘겨 보며, 불편한 말이 오간 장면을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '불편한 말이 오간 장면', title: '서아의 편의점 첫날(가상)', cards: [{ id: 'guide', text: '점장이 일할 곳과 쉬는 시간을 알려 준다', motif: 'sun' }, { id: 'look', text: '손님이 서아의 외모를 평가하는 말을 한다', motif: 'cloud' }, { id: 'insult', text: '선배가 다른 직원 앞에서 실수를 두고 모욕한다', motif: 'moon' }, { id: 'contract', text: '근로계약서를 함께 읽고 한 부를 받는다', motif: 'leaf' }, { id: 'body', text: '매니저가 몸매를 두고 농담을 한다', motif: 'star' }], shuffle: false }, sequence: [{ pick: ['look', 'insult', 'body'] }] },
          art: { draw: 'a paper convenience store counter on a first workday, a new part-timer in an apron holding a folded contract, small paper speech bubbles floating from different people, some bubbles cut from grey paper', banner: '첫날, 어떤 말이 불편했을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이며 불편한 말의 내용을 자세히 쓰지 않는다. 학생에게 아르바이트에서 비슷한 말을 들었는지 묻지 않는다.',
      }),
      M({
        id: 'intro.before', type: 'intro', title: '일하기 전 알아 둘 것',
        method: '일하기 전 알아 둘 것 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개(계약서·도움 창구·기록)만 함께 읽고 표시한다.', base: '항목 6개 가운데 일하기 전에 챙길 것 5개에 표시한다.', challenge: '표시한 항목 가운데 가장 먼저 확인할 것 하나를 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"아르바이트나 현장실습을 시작하기 전에 무엇을 챙겨야 할까요? 점검표를 같이 볼게요." 시연 단추로 다섯 항목에 표시되는 모습을 보여 준다. "문제 생기면 그때 찾아보면 된다"는 말이 나오면 "불편한 일이 생긴 순간, 연락할 곳을 찾을 여유가 있을까요?"라고 되묻는다. 도움 창구와 기록 방법은 일이 생기기 전에 알아 두는 것이라는 점을 짚는다.',
          student: '가상의 아르바이트를 시작하기 전이라고 생각하고, 미리 챙길 것에 표시해 보세요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '일하기 전 점검', items: [{ id: 'contract', text: '근로계약서를 쓰고 한 부를 받는다' }, { id: 'hours', text: '일하는 시간·쉬는 시간·시급을 확인한다' }, { id: 'help', text: '학교 취업 지원 담당과 노동 상담 창구를 알아 둔다' }, { id: 'record', text: '불편한 일이 생기면 적어 둘 곳을 정한다' }, { id: 'guardian', text: '보호자에게 일하는 곳과 시간을 알린다' }, { id: 'uniform', text: '유니폼 색이 마음에 드는지 본다' }] }, sequence: [{ checklist: ['contract', 'hours', 'help', 'record', 'guardian'] }] },
          art: { draw: 'a paper apron hanging on a hook beside a clipboard checklist, a folded contract, a small paper phone and a notebook with a pen, warm morning light cut from yellow paper', banner: '일하기 전에 챙겨요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.sort', type: 'activity', title: '일터의 말과 행동 나누기',
        method: '말과 행동을 괴롭힘·성희롱·해당 없음으로', tool: 'mindmap', minutes: 18,
        levels: { easy: '말·행동 카드 4장을 세 가지에 나누고, 놓는 즉시 맞는지 본다.', base: '카드 7장을 나누고, 판단 근거(상대 느낌·지위 차이·반복)를 고르며, 농담처럼 들리는 말이 문제인 까닭을 짝짓는다.', challenge: '농담처럼 들리는 카드 2장이 더해진 9장을 섞어 나누고, 활동지에 그 말이 문제인 까닭을 쓴다.' },
        activity: {
          title: '괴롭힘·성희롱·해당 없음', tool: 'mindmap',
          teacher: '"일터에서 들을 수 있는 말과 행동이에요. 괴롭힘, 성희롱, 해당 없음으로 나눠 볼게요. 판단할 때는 세 가지를 봐요. 듣는 사람이 어떻게 느꼈나, 지위나 관계에서 힘의 차이가 있나, 되풀이되나." 카드를 놓을 때마다 근거를 말하게 한다. "농담이었다고 하면 문제가 없다"는 학생에게 "말한 사람의 의도와 들은 사람의 느낌 가운데 무엇을 먼저 봐야 할까요?"라고 되묻는다. 바뀐 업무를 정중하게 알려 주는 것처럼 일에 필요한 지시는 괴롭힘이 아니라는 점도 함께 짚는다.',
          task: '일터의 말과 행동 카드를 세 가지에 나누고, 판단 근거와 문제인 까닭을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            easyAs(SORTQ('일터의 말과 행동 카드를 알맞은 가지에 다세요.', ['괴롭힘', '성희롱', '해당 없음'], [
              ['매니저가 한 직원에게만 몇 주째 궂은일을 몰아준다', '선배가 손님 앞에서 되풀이해 "머리가 나쁘다"고 모욕한다', '쉬는 시간 없이 일하라고 계속 압박한다'],
              ['상사가 외모와 몸매를 두고 평가하는 말을 되풀이한다', '동의 없이 어깨를 주무르며 "친해서 그래"라고 한다'],
              ['매니저가 바뀐 계산 방법을 정중하게 다시 알려 준다', '바쁜 시간에 정해진 업무 순서를 지키라고 요청한다'],
            ], { hard: [['"농담이야"라며 한 사람만 단톡방에서 계속 놀린다'], ['"농담인데 왜 정색해?"라며 성적인 농담을 이어 간다'], []], d: 0.35, opt: { topic: '일터의 말과 행동' } }),
            [['매니저가 한 직원에게만 몇 주째 궂은일을 몰아준다', '선배가 손님 앞에서 되풀이해 "머리가 나쁘다"고 모욕한다'], ['상사가 외모와 몸매를 두고 평가하는 말을 되풀이한다'], ['매니저가 바뀐 계산 방법을 정중하게 다시 알려 준다']]),
            PICKQ('일터의 말과 행동을 판단하는 근거로 알맞은 것만 고르세요.', ['듣는 사람이 불쾌감이나 굴욕감을 느꼈는가', '지위나 관계에서 힘의 차이가 있는가', '같은 말이나 행동이 되풀이되는가'], ['말한 사람이 농담이었다고 하는가', '듣는 사람이 아르바이트생인가'], { d: 0.35, opt: { basket: '판단 근거' } }),
            MATCHQ('농담처럼 들리는 말마다 문제가 되는 까닭을 짝지으세요.', [['"몸매 좋네, 칭찬이야"', '몸에 대한 원치 않는 말은 칭찬이라도 성적 불쾌감을 줄 수 있다'], ['"신입은 원래 이런 거 다 해, 농담이야"', '농담 형식이어도 지위를 이용한 압박이 될 수 있다']], { k: 2, extra: ['예민하게 받아들인 사람이 문제다'], d: 0.4, opt: { topic: '농담의 탈을 쓴 말' }, more: { conclude: '말한 사람이 농담이라고 해도, 듣는 사람이 불쾌하고 힘의 차이가 있거나 되풀이된다면 괴롭힘이나 성희롱이 될 수 있어요. 잘못은 들은 사람이 아니라 말한 사람에게 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '농담처럼 들리는 말 하나를 골라, 그 말이 문제가 되는 까닭을 판단 근거와 함께 쓰세요.' }] },
        notes: '\'예민하게 받아들인 사람이 문제다\'는 함정 카드다. 고른 학생이 있으면 잘못은 말한 사람에게 있다는 점을 바로 짚는다. 괴롭힘·성희롱의 법적 정의는 일반적인 말로만 다룬다.',
      }),
      M({
        id: 'activity.joke', type: 'activity', title: '매니저의 불편한 농담',
        method: '매니저의 불편한 농담 갈림길과 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '카페 장면에서 갈림길 둘을 지나 결과를 보고 근거를 고른다.', base: '갈림길 셋을 끝까지 따라가 일터 분위기·나의 권리·도움의 결과를 보고 근거를 고른다.', challenge: '동료 지우가 나오는 길을 끝까지 가서, 동료를 지지하는 행동의 근거까지 고른다(영향 표시는 맞힌 뒤에 보인다).' },
        activity: {
          title: '카페 아르바이트 갈림길', tool: 'dilemma',
          teacher: '"하은이는 일자리를 잃고 싶지 않아요. 그 마음도 진짜예요. 그럼 하은이는 무엇을 할 수 있을까요?" 선택마다 하은과 일터에 생긴 결과를 소리 내어 읽게 한다. \'같이 웃어 넘긴다\'를 고른 학생에게 "한 번 웃었다고 하은이 잘못한 걸까요? 그 뒤에도 할 수 있는 일이 있을까요?"라고 묻는다. \'참는다\'를 고른 학생에게는 "참는 동안 잘못은 누구에게 있나요?"라고 묻는다. 어느 길에서든 잘못은 농담한 사람에게 있고, 기록과 도움 요청은 늦게라도 시작할 수 있다는 점을 짚는다.',
          task: '매니저의 농담이 되풀이되는 장면의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('하은이 자신의 권리를 지키며 도움을 받는 길을 고르고 근거를 고르세요.', CAFE, [['clear', 'record', 'support'], ['along', 'late']], CAFE_R, ['fault', 'record', 'help'], { chal: { tag: '동료 지지까지', target: { path: [['clear', 'record', 'support']], reasons: ['fault', 'record', 'help', 'peer'] } }, d: 0.4 }),
            EXPLOREQ('\'참는다\' 길과 \'단톡방에 쓴다\' 길도 끝까지 가 보고, 기록하고 요청한 길과 결과를 견주세요.', CAFE, CAFE_R, ['다른 길의 끝 장면을 확인했다', '하은·동료·일터에 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('손님이 동료에게 원치 않는 접촉을 하는 장면에서 알맞은 길을 고르고 근거를 고르세요.', { text: '저녁 시간 계산대. 한 손님이 동료 지우의 어깨에 자꾸 손을 올리고, 지우는 몸을 뒤로 뺀다.', who: '나', motif: 'moon', choices: [
              { id: 'ignore', text: '손님이니 모른 척한다', result: '손님이 계속 말을 걸며 지우 곁에 머문다.', impact: [{ who: '지우', text: '혼자 피하느라 애쓴다', tone: -1 }], ending: '모른 척하면 동료는 그 자리에서 혼자가 된다.' },
              { id: 'step', text: '"제가 계산 도와드릴게요"라며 다가가 자리를 바꾼다', result: '손님이 지우에게서 떨어진다.', impact: [{ who: '지우', text: '자리를 피할 수 있게 된다', tone: 1 }],
                next: { text: '손님이 간 뒤 지우가 굳은 얼굴로 서 있다.', choices: [
                  { id: 'ask', text: '"괜찮아? 원하면 매니저께 같이 말하고 시간도 적어 두자"고 한다', result: '지우가 고개를 끄덕이고 함께 매니저에게 간다.', impact: [{ who: '지우', text: '지지를 받는다', tone: 1 }], ending: '자리를 바꿔 준 뒤 곁에서 기록과 요청을 도우면 동료가 혼자 감당하지 않는다.' },
                  { id: 'friendly', text: '"원래 친근한 손님이야"라고 넘긴다', result: '지우가 더 말하지 않는다.', impact: [{ who: '지우', text: '불편함을 말할 곳을 잃는다', tone: -1 }], ending: '\'친근함\'으로 넘기면 동료는 다음에 도움을 청하기 어렵다.' }] } }] },
              [['step', 'ask']], [{ id: 'consent', text: '동의 없는 신체 접촉은 손님이라도 해서는 안 된다' }, { id: 'side', text: '동료가 원하는 방식으로 곁에서 돕는다' }, { id: 'customer', text: '손님은 왕이니 참아야 한다', why: '손님이라도 일하는 사람을 존중해야 하고, 동의 없는 접촉은 문제가 돼요.' }], ['consent', 'side'], { d: 0.35, more: { conclude: '일터에서 불편한 말과 행동을 알아차리면 분명히 말하고, 기록하고, 도움을 청해요. 동료가 같은 상황이라면 곁에서 함께해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하은이 기록하고 도움을 청한 길과 참은 길의 결과를 견주어, 일터에서 내 권리를 지키는 방법을 한 문장으로 쓰세요.' }] },
        notes: '장면은 가상이며 농담과 접촉의 내용을 자세히 쓰지 않는다. 어느 선택을 해도 피해자를 탓하지 않는다는 점을 결과 글에 담았다.',
      }),
      M({
        id: 'activity.phrases', type: 'activity', title: '거절·기록·요청 문장',
        method: '거절·기록·요청 문장 고르기', tool: 'wordcards', minutes: 18,
        levels: { easy: '거절 말·기록 내용은 상황 3쌍씩 짝짓고, 놓는 즉시 맞는지 본다.', base: '거절 말·기록 내용을 5쌍씩 짝짓고, 도움 요청 말 3쌍을 짝지은 뒤 애매한 말을 분명하게 고친 카드를 고른다.', challenge: '카드를 섞어 짝짓고, 애매한 말을 분명하게 고친 카드를 고른 뒤 활동지에 내 말로 한 번 더 고쳐 쓴다.' },
        activity: {
          title: '분명하게 말하고 남기기', tool: 'wordcards',
          teacher: '"불편한 순간에 할 말을 미리 갖고 있으면 그 순간 덜 얼어붙어요. 거절하는 말, 적어 둘 내용, 도움을 청하는 말을 하나씩 갖춰 봐요." 카드를 짝지은 뒤 한두 명이 소리 내어 읽게 한다. "그렇게 말하면 분위기가 나빠진다"는 학생에게 "\'괜찮긴 한데…\'라고 말하면 상대는 멈춰야 한다고 알아들을까요?"라고 되묻는다. 거절은 무례가 아니라 내 뜻을 알리는 것이고, 기록은 나중에 도움을 받을 때 근거가 된다는 점을 짚는다.',
          task: '상황마다 거절 말·기록 내용·도움 요청 말 카드를 짝짓고, 분명하게 고친 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            WORDQ('상황마다 분명한 거절 말 카드를 짝지으세요.', [['그런 말은 불편하니 하지 말아 주세요', '외모를 두고 농담을 되풀이할 때'], ['퇴근 뒤 개인적인 만남은 하지 않겠습니다', '퇴근 뒤 둘이 만나자고 계속 요구할 때'], ['손을 치워 주세요', '동의 없이 어깨에 손을 올릴 때'], ['약속한 시간이 지나 이제 퇴근하겠습니다', '약속보다 계속 더 일하라고 할 때'], ['욕설은 멈추고 업무 이야기만 해 주세요', '실수했다고 욕설을 섞어 꾸짖을 때']], { k: 3, d: 0.3 }),
            WORDQ('기록지 칸마다 남길 내용 카드를 짝지으세요.', [['수요일 저녁 7시, 계산대 앞', '언제·어디서'], ['매니저가 한 말을 들은 그대로', '무슨 말·행동'], ['같은 시간 근무한 동료 지우', '옆에 있던 사람'], ['그 뒤 잠을 잘 이루지 못했다', '내 몸과 마음의 변화'], ['캡처해 둔 메시지 화면', '남아 있는 자료']], { k: 3, d: 0.3 }),
            WORDQ('연락할 곳마다 알맞은 도움 요청 말 카드를 짝지으세요.', [['일하는 곳에서 불편한 농담이 계속돼 상의하고 싶어요', '학교 취업 지원 담당 선생님께'], ['아르바이트에서 생긴 일을 적어 두었는데 어떻게 하면 될까요', '노동 상담 창구에'], ['지금 누가 따라오며 위협해요, 여기는 역 출구 앞이에요', '112에']], { d: 0.3 }),
            PICKQ('애매한 말을 분명하게 고친 카드만 고르세요.', ['그런 농담은 불편하니 그만해 주세요', '오늘은 약속한 시간에 퇴근하겠습니다'], ['아, 네… 하하, 그냥 넘어갈게요', '괜찮긴 한데 조금만 덜 해 주실 수도…'], { d: 0.35, opt: { basket: '분명하게 고친 말' }, more: { conclude: '분명한 거절은 무엇을 멈춰 달라는지 짧게 말해요. 그 말을 했든 못 했든, 잘못은 불편한 말을 한 사람에게 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '애매한 말 "괜찮긴 한데 조금만 덜 해 주실 수도…"를 분명한 거절 말로 고쳐 쓰세요.' }] },
        notes: '분명하게 말하지 못한 사람이 잘못한 것이 아니라는 점을 거듭 말한다. 거절은 안전할 때 하고, 위협이 느껴지면 자리를 벗어나 112에 알린다.',
      }),
      M({
        id: 'activity.record', type: 'activity', title: '기록지와 도움 요청 메시지',
        method: '도움 요청 메시지와 기록지 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 항목 틀(날짜·시각 / 장소 / 들은 말 / 옆에 있던 사람)을 보고 쓴다.', base: '틀 없이 기록지·요청 메시지·요청할 조치를 쓰고 칸마다 기준표를 스스로 점검한다.', challenge: '칸마다 기준이 하나 더 붙어, 감정과 사실을 나눠 쓰고 요청할 조치와 다음 연락처까지 덧붙인다.' },
        activity: {
          title: '하은의 기록지와 메시지', tool: 'rubric-writing',
          teacher: '"가상 사례예요. 하은의 그날을, 나중에 도움을 받을 수 있게 기록으로 남겨 봐요. 기록은 감정을 숨기는 글이 아니라 사실과 감정을 나눠 적는 글이에요." 쓰기 전에 기준표를 함께 읽는다. "매니저가 나쁜 사람이다"처럼 판단만 쓴 학생에게 "그렇게 판단한 근거가 된 말과 날짜는 무엇이었나요? 그걸 적으면 읽는 사람도 판단할 수 있어요"라고 묻는다. 실제 가게 이름·사람 이름·연락처는 쓰지 않게 한다.',
          task: '가상 사례로 기록지, 도움 요청 메시지, 요청할 조치를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('하은의 기록지를 2~4문장으로 쓰세요.', '가상 사례: 수요일 저녁 7시 카페 계산대 앞에서 매니저가 "웃어야 손님이 좋아하지, 얼굴 보고 뽑았잖아"라고 했고, 동료 지우가 옆에 있었다. 하은의 기록지를 쓰세요.', ['날짜·시각·장소를 썼다', '들은 말을 그대로 옮겼다', '옆에 있던 사람을 썼다'], { min: 40, max: 400, sent: [2, 4], must: [['수요일', '저녁', '7시']], starter: '날짜·시각: 수요일 저녁 7시. 장소: ~. 들은 말: "~". 옆에 있던 사람: ~', plus: '내 감정과 사실을 나눠 썼다', d: 0.35 }),
            RWQ('학교 취업 지원 담당 선생님께 보낼 도움 요청 메시지를 2~3문장으로 쓰세요.', '하은이 학교 취업 지원 담당 선생님께 보낼 메시지를 쓰세요(연락처·실제 이름은 쓰지 않기).', ['누구에게 보내는지 밝혔다', '무슨 일이 있었는지 사실로 썼다', '바라는 도움을 분명히 썼다'], { min: 40, max: 400, sent: [2, 3], must: [['도와', '부탁', '상의', '상담']], starter: '선생님, 아르바이트하는 곳에서 ~', plus: '기록해 둔 자료가 있다고 밝혔다', d: 0.35 }),
            RWQ('하은이 일터에 요청할 조치를 2~3문장으로 쓰세요.', '같은 일이 되풀이되지 않도록 하은이 일터에 요청할 조치를 쓰세요.', ['요청할 조치를 구체적으로 썼다', '사실을 근거로 들었다', '하은을 탓하는 말을 쓰지 않았다'], { min: 40, max: 400, sent: [2, 3], must: [['요청', '바랍니다', '해 주세요']], starter: '같은 말이 되풀이되지 않도록 ~을 요청합니다.', plus: '조치가 이루어지지 않을 때 다음에 연락할 곳(노동 상담 창구 등)을 썼다', d: 0.4, more: { conclude: '사실과 감정을 나눠 남긴 기록은 도움을 청할 때 나를 지키는 근거가 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기록지 칸을 정리하세요.', columns: ['칸', '적을 내용'], cells: [['언제·어디서', ''], ['들은 말·행동', ''], ['옆에 있던 사람', ''], ['내 몸과 마음의 변화', '']] }] },
        notes: '사례는 가상이다. 학생 자신의 일터 경험을 쓰게 하지 않는다. 실제로 도움이 필요한 학생이 있으면 개별로 학교 취업 지원 담당·상담 선생님과 잇는다.',
      }),

      M({
        id: 'wrap.help', type: 'wrap', title: '일터 도움 창구 정리',
        method: '도움 창구 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 가지 이름(학교 취업 지원 담당·노동 상담 창구·112)과 각 창구가 하는 일을 먼저 읽어 준 뒤 나눈다.', base: '학생이 가지를 보고 상황 카드를 스스로 나누고 함정 카드를 걸러 낸다.', challenge: '창구마다 연락할 상황을 하나씩 더 생각해 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"일터에서 불편하거나 위험한 일이 생기면 어디에 연락할까요? 오늘 나온 세 창구로 정리해 봐요." 카드를 나눈 뒤 \'익명 SNS에 올려 해결한다\'를 가지에 단 학생에게 "글을 올리면 기록과 도움이 함께 생길까요?"라고 묻는다. 지금 위험하면 112, 일터 문제를 상의할 때는 학교 취업 지원 담당과 노동 상담 창구라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '일터 도움 창구', slots: ['학교 취업 지원 담당', '노동 상담 창구', '112'], cards: ['현장실습 일터에서 불편한 일이 생겼다', '아르바이트 고민을 먼저 학교와 상의하고 싶다', '일한 시간만큼 돈을 받았는지 묻고 싶다', '일터 괴롭힘을 어떻게 다룰지 묻고 싶다', '지금 누가 위협하며 따라온다', '일터에서 폭력이 벌어지고 있다', '익명 SNS에 올려 해결한다'] }, prompt: '상황 카드를 알맞은 도움 창구 가지에 다세요.', target: { sort: { '학교 취업 지원 담당': ['현장실습 일터에서 불편한 일이 생겼다', '아르바이트 고민을 먼저 학교와 상의하고 싶다'], '노동 상담 창구': ['일한 시간만큼 돈을 받았는지 묻고 싶다', '일터 괴롭힘을 어떻게 다룰지 묻고 싶다'], 112: ['지금 누가 위협하며 따라온다', '일터에서 폭력이 벌어지고 있다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '일터에서 불편한 일을 겪는 동료를 도울 때 가장 알맞은 것은?', options: ['"네가 예민한 거야"라고 달랜다', '원하면 함께 기록하고 도움 창구에 같이 연락하자고 한다', '소문이 나지 않게 모른 척한다'], answer: 1, difficulty: 0.15, explain: '동료가 원하는 방식으로 곁에서 기록과 도움 요청을 함께하는 것이 지지예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일터 도움 창구',
          items: [
            { type: 'table', prompt: '창구마다 연락할 상황을 하나씩 쓰세요.', columns: ['도움 창구', '연락할 상황'], cells: [['학교 취업 지원 담당', ''], ['노동 상담 창구', ''], ['112', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '일터에서 지금 위험하면 ___에 신고한다.', answer: '112' },
          ],
        },
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '일터 대응 스스로 점검',
        method: '일터 대응 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 점검 항목 3개(알아차리기·기록·요청)를 먼저 함께 읽고 표시한다.', base: '점검 항목 4개를 스스로 표시한다.', challenge: '가장 자신 없는 항목 하나와 준비 방법을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"일터에서 불편한 일이 생기면 나는 알아차리고, 기록하고, 요청할 수 있을까요? 할 수 있는 것만 솔직하게 표시해 봐요." 표시한 뒤 가장 자신 없는 항목을 고르게 한다. "막상 그 순간엔 아무 말도 못 할 것 같다"는 학생에게 "그 순간 말하지 못해도 괜찮아요. 나중에 기록하고 도움을 청하는 길이 있어요. 오늘 만든 문장 중 하나를 휴대폰 메모에 저장해 둘까요?"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나의 일터 대응 점검' }, prompt: '일터에서 대응할 수 있는지 스스로 점검해 표시하세요.', target: { selfCheck: ['괴롭힘·성희롱을 판단하는 근거(느낌·힘의 차이·반복)를 말할 수 있다', '분명한 거절 말 하나를 말할 수 있다', '날짜·장소·들은 말·목격자를 기록할 수 있다', '학교 취업 지원 담당·노동 상담 창구·112 가운데 연락할 곳을 고를 수 있다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '"아르바이트생은 불편해도 참아야 한다"는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 일자리를 지키는 것이 먼저다', '틀리다, 아르바이트생도 존중받으며 일할 권리가 있고 도움을 청할 수 있다', '맞다, 짧게 일하면 상관없다'], answer: 1, difficulty: 0.15, explain: '아르바이트생도 존중받으며 일할 권리가 있고, 불편한 일이 있으면 기록하고 도움을 청할 수 있어요.' },
            { type: 'short', prompt: '가장 자신 없는 항목 하나와 그것을 준비할 방법을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '나의 일터 대응',
          items: [
            { type: 'check', prompt: '일하기 전에 준비해 둘 것에 표시하세요.', options: ['근로계약서 받기', '도움 창구 알아 두기', '기록할 곳 정하기', '거절 문장 저장하기'] },
            { type: 'short', prompt: '휴대폰 메모에 저장해 둘 거절 문장 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 13. 아동·가정 보호 체계 제안서 (12학년)
  // ======================================================================================================
  {
    const M = MOD('protect-policy', [12]);
    const TOWN = { title: '가상 동네 지도', grid: [6, 4], legend: true, places: [{ name: '학교', icon: 'school', at: [1, 0], legend: '학교(담임·상담 선생님)' }, { name: '지구대', icon: 'police', at: [0, 3], legend: '경찰(112)' }, { name: '상담 기관', icon: 'office', at: [2, 1], legend: '상담 기관' }, { name: '아파트 단지', icon: 'apartment', at: [1, 2] }, { name: '산 아래 주택가', icon: 'house', at: [5, 0] }, { name: '공원', icon: 'park', at: [3, 3] }] };
    const SUPPORT = [['발견', 3], ['신고', 6], ['보호', 8], ['회복', 2]];
    const SUPPORT_T = '단계별 지원 인력(가상 지역, 상대 크기)';

    MODS.push(
      M({
        id: 'intro.actors', type: 'intro', title: '아이를 지키는 사람들',
        method: '보호 체계에 참여하는 사람 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 네 개(가정·학교·지역·기관)를 먼저 보여 주고 카드를 함께 단다.', base: '가지 이름을 학생들이 먼저 말한 뒤 화면 가지와 견주며 카드를 단다.', challenge: '빠지기 쉬운 참여자(이웃·동네 가게 주인 등)를 찾아 어느 가지에 더할지 말한다.' },
        intro: {
          teacher: '"한 아이를 지키는 데 몇 사람이 필요할까요? 가운데에 아이를 두고 떠올려 봐요." 두세 명에게 말하게 한 뒤 시연 단추로 카드가 가정·학교·지역·기관 가지에 달리는 모습을 보여 준다. "아동 보호는 경찰이나 기관이 하는 일 아닌가요?"라는 말이 나오면 "기관은 누가 알려 줘야 움직일 수 있을까요? 처음 알아차리는 사람은 누구일 때가 많을까요?"라고 되묻는다. 오늘은 미래의 보호자이자 시민으로서 이 체계의 빈틈을 찾아 제안서를 쓴다고 밝힌다.',
          student: '가운데에 아이를 두고, 그 아이를 지키는 데 함께하는 사람과 기관을 떠올려 가정·학교·지역·기관 가지에 달아 보세요. 빠지기 쉬운 사람은 누구일까요?',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '아이를 지키는 사람', slots: ['가정', '학교', '지역', '기관'], cards: ['보호자', '담임 선생님', '이웃', '경찰(112)', '친척', '상담 선생님', '동네 가게 주인', '상담 전화 1388'], shuffle: false }, sequence: [{ sort: { 가정: ['보호자', '친척'], 학교: ['담임 선생님', '상담 선생님'], 지역: ['이웃', '동네 가게 주인'], 기관: ['경찰(112)', '상담 전화 1388'] } }] },
          art: { draw: 'a small paper child figure in the centre of a paper mind map, four paper branches reaching to a house, a school, a row of neighbourhood shops and a public office, soft pastel layers', banner: '한 아이를 지키는 사람들', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '학생 자신의 가정 사정을 말하게 하지 않는다. 늘 \'한 아이\'(가상)를 두고 이야기한다.',
      }),
      M({
        id: 'intro.gaps', type: 'intro', title: '가상 동네의 보호 자원과 빈 곳',
        method: '가상 동네에서 보호 자원과 빈 곳 찾기', tool: 'map', minutes: 6,
        levels: { easy: '지도에 장소 이름이 보이고, 학교·지구대·상담 기관을 함께 짚는다.', base: '범례(경찰·학교·상담 기관)를 보고 자원을 찾은 뒤 자원에서 가장 먼 곳을 말한다.', challenge: '자원이 먼 곳에 어떤 자원이 더 있으면 좋을지 제안한다.' },
        intro: {
          teacher: '"가상 동네 지도예요. 아이가 도움을 청할 수 있는 곳은 어디에 있나요? 그리고 그곳들에서 가장 먼 동네는 어디일까요?" 시연 단추로 핀이 \'산 아래 주택가\'에 꽂히는 모습을 보여 준다. "전화 1388이 있으니 거리는 상관없다"는 말이 나오면 "전화가 있어도 직접 가서 만날 어른과 머물 곳이 멀면 어떨까요?"라고 되묻는다. 빈 곳을 찾는 것이 제안서의 첫 줄이 된다는 점을 짚는다.',
          student: '가상 동네 지도에서 학교·경찰·상담 기관 같은 보호 자원을 찾고, 그 자원들에서 가장 멀어 도움이 닿기 어려운 곳을 생각해 보세요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '산 아래 주택가' }] },
          art: { draw: 'a paper grid map of an imaginary neighbourhood with a school, a police box and a counselling office clustered on one side and a lonely row of houses at the foot of a paper hill on the other, a dotted paper path between them', banner: '도움이 먼 곳은 어디일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '지도는 가상 동네다. 우리 지역의 실제 보호 기관 위치는 학교 상담실과 함께 확인해 안내한다.',
      }),

      M({
        id: 'activity.stages', type: 'activity', title: '보호 체계의 빈틈을 단계별로',
        method: '체계의 문제 카드를 단계별로 나누기', tool: 'mindmap', minutes: 18,
        levels: { easy: '문제 카드 4장(단계마다 1장)을 발견·신고·보호·회복 가지에 나눈다.', base: '문제 카드 7장을 네 가지에 나누고, 문제마다 대안을 짝짓는다.', challenge: '카드를 섞어 나누고, 가장 시급한 단계를 고른 근거를 카드로 고른다.' },
        activity: {
          title: '문제 카드를 네 단계로', tool: 'mindmap',
          teacher: '"보호 체계는 발견·신고·보호·회복 네 단계가 이어져야 해요. 한 곳이 끊기면 어떻게 될까요?" 카드를 놓을 때마다 "이 문제가 생기면 아이는 어느 단계에서 멈추게 되나요?"라고 묻는다. \'신고한 사람이 드러날까 걱정함\'을 발견 칸에 두는 학생에게 "이미 알아차린 뒤에 망설이는 거라면 어느 단계의 문제일까요?"라고 되묻는다. "아동 보호는 기관만의 일"이라는 말에는 발견 단계 카드 대부분이 이웃·학교의 일이라는 점을 짚는다.',
          task: '문제 카드를 발견·신고·보호·회복 가지에 나누고, 대안과 근거를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 지역의 문제 카드를 보호 체계 단계 가지에 나누세요.', ['발견', '신고', '보호', '회복'], [
              ['의심해도 알리지 않음', '아이의 변화를 아무도 눈치채지 못함'],
              ['어디에 알릴지 몰라 망설임', '신고한 사람이 드러날까 걱정함'],
              ['상담 대기가 길어짐', '머물 안전한 곳이 멂'],
              ['보호 뒤 학교 적응을 돕는 사람이 없음'],
            ], { k: 1, d: 0.3, opt: { topic: '보호 체계의 빈틈' } }),
            MATCHQ('문제마다 알맞은 대안을 짝지으세요.', [['의심해도 알리지 않음', '신호와 알릴 곳을 알리는 주민 교육'], ['어디에 알릴지 몰라 망설임', '112·1388 안내를 학교·동네에 붙이기'], ['상담 대기가 길어짐', '상담 인력과 상담 시간 늘리기'], ['보호 뒤 학교 적응을 돕는 사람이 없음', '담임·상담 선생님 연계 지원']], { k: 3, extra: ['아이에게 참으라고 하기'], d: 0.35, opt: { topic: '문제와 대안' }, more: { hints: ['문제가 생긴 단계에서 바로 그 빈틈을 메우는 대안이 알맞은 대안이에요.'] } }),
            PICKQ('\'발견\'을 가장 시급한 단계로 고른 근거로 알맞은 것만 고르세요.', ['발견되지 않으면 뒤 단계가 시작되지 않는다', '알아차린 사람이 알려야 보호가 시작된다'], ['기관만 잘하면 이웃은 몰라도 된다', '집안일은 가족끼리 해결한다'], { d: 0.4, opt: { basket: '근거' }, more: { conclude: '보호 체계는 사슬처럼 이어져요. 처음 알아차리는 이웃·학교가 움직여야 신고·보호·회복이 시작돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '네 단계 가운데 가장 시급하다고 생각하는 단계와 그 근거를 한 문장으로 쓰세요.' }] },
        notes: '문제 카드는 가상 지역의 예시다. 실제 기관을 비난하는 방향이 아니라 빈틈을 메우는 제안으로 이끈다.',
      }),
      M({
        id: 'activity.data', type: 'activity', title: '가상 지역 자료로 빈틈 근거 찾기',
        method: '가상 지역 자료로 빈틈 근거 찾기', tool: 'chart', minutes: 19,
        levels: { easy: '막대 끝에 상대 크기 값이 보여 가장 작은 단계부터 읽는다.', base: '값 표시 없이 막대를 읽고 단계 사이 차이를 셈해 제안서 근거를 고른다.', challenge: '값 표시 없이 풀고, 활동지에 이 자료가 가상임을 밝히며 실제 자료에서 확인할 점을 적는다.' },
        activity: {
          title: '단계별 지원 그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 가상 지역의 단계별 지원 인력을 상대 크기로 나타낸 자료예요. 제안서에 근거로 쓸 수 있는 것과 쓸 수 없는 것은 무엇일까요?" 막대를 읽은 뒤 근거 문장을 고르게 한다. "보호 막대가 가장 크니 체계는 충분하다"는 학생에게 "보호를 받은 뒤 학교로 돌아온 아이는 어느 막대의 도움을 받나요?"라고 묻는다. 가상 자료로 연습한 뒤 실제 제안서에는 공식 자료의 출처를 밝혀야 한다는 점을 짚는다.',
          task: '가상 지역 막대그래프를 읽고 제안서에 쓸 근거를 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 지역 자료에서 지원 인력이 가장 적은 단계를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: SUPPORT_T, yLabel: '상대 크기', xLabel: '단계', data: SUPPORT, question: '가장 작은 막대는?', choices: ['발견', '신고', '보호', '회복'] }, target: { pick: 3 }, difficulty: 0.15 },
            { prompt: '보호 단계와 회복 단계의 상대 크기 차이는 얼마인가요?', toolOptions: { type: 'bar', mode: 'read', title: SUPPORT_T, yLabel: '상대 크기', xLabel: '단계', data: SUPPORT, question: '보호 − 회복은?' }, target: { value: 6 }, difficulty: 0.3 },
            { prompt: '이 가상 자료를 제안서 근거로 쓸 때 알맞은 문장을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: SUPPORT_T, yLabel: '상대 크기', xLabel: '단계', data: SUPPORT, question: '알맞은 근거 문장은?', choices: ['회복 단계 지원이 가장 적어 보호 뒤가 비어 있다', '보호 단계가 가장 크니 다른 단계는 괜찮다', '신고가 발견보다 크니 이웃은 할 일이 없다'], why: ['', '한 단계가 크다고 다른 단계의 빈틈이 메워지지는 않아요.', '발견이 작으면 오히려 이웃·학교의 역할을 키워야 해요.'] }, target: { pick: 0 }, difficulty: 0.35 },
            { prompt: '이 가상 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: SUPPORT_T, yLabel: '상대 크기', xLabel: '단계', data: SUPPORT, question: '이 그래프로 알 수 없는 것은?', choices: ['어느 단계 막대가 가장 작은지', '실제 우리 지역의 지원이 어떤지', '보호 막대가 회복 막대보다 큰지'], why: ['막대 길이로 견줄 수 있어요.', '', '막대 길이로 견줄 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '가상 자료는 근거를 읽는 연습이에요. 실제 제안서에는 공식 자료를 찾아 출처와 함께 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 자료가 가상임을 밝히고, 실제 제안서를 쓴다면 공식 자료에서 무엇을 확인할지 한 가지 쓰세요.' }] },
        notes: '그래프 값은 수업용 가상 상대 크기다. 실제 지역 통계로 말하지 않는다.',
      }),
      M({
        id: 'activity.parenting', type: 'activity', title: '존중하는 훈육 대화 대본',
        method: '존중하는 훈육 대화 대본 채우기', tool: 'story', minutes: 18,
        levels: { easy: '대본 빈칸 2개(감정 인정·한계 설정)를 채운다.', base: '빈칸 4개(감정 인정·한계 설정·대안 제시·마무리)를 채우고, 말 카드를 세 갈래로 나눈다.', challenge: '아이가 "싫어!"라고 반응하는 빈칸까지 더해 이어 갈 말을 넣는다.' },
        activity: {
          title: '미래의 보호자 대본', tool: 'story',
          teacher: '"여러분이 미래의 보호자가 되었다고 생각해 봐요. 다섯 살 아이가 동생 장난감을 빼앗았어요. 어떤 말로 시작할까요?" 감정 인정 → 한계 설정 → 대안 제시 차례로 대본을 채우게 한다. "체벌 없이는 버릇을 고칠 수 없다"는 학생에게 "맞은 아이가 배우는 것은 장난감을 나누는 법일까요, 힘이 세면 된다는 것일까요?"라고 되묻는다. 존중하는 훈육은 봐주는 것이 아니라 한계를 분명히 말하면서 몸과 마음을 다치게 하지 않는 것이라는 점을 짚는다.',
          task: '미래의 보호자가 되어 존중하는 훈육 대본의 빈칸을 말 카드로 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '아이가 동생 장난감을 빼앗았어요. 존중하는 훈육 대본의 빈칸을 채우세요.', toolOptions: { mode: 'fill', title: '가상 장면: 장난감 다툼', slots: [{ id: 'f1', who: '나', label: '"장난감을 갖고 싶어서 ___"' }, { id: 'f2', who: '나', label: '"그래도 빼앗는 건 ___"' }, { id: 'f3', who: '나', label: '"동생에게 ___"' }, { id: 'f4', who: '나', label: '"스스로 물어봐서 ___"' }], cards: ['속상했구나', '안 돼', '"빌려줄래?" 하고 물어보자', '고마워', '"맞아야 말을 듣지"', '"넌 왜 맨날 그러니"'] }, target: { fill: { f1: '속상했구나', f2: '안 돼', f3: '"빌려줄래?" 하고 물어보자', f4: '고마워' } }, difficulty: 0.3,
              levels: {
                easy: { prompt: '아이가 동생 장난감을 빼앗았어요. 대본의 빈칸 2개를 채우세요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '"장난감을 갖고 싶어서 ___"' }, { id: 'f2', who: '나', label: '"그래도 빼앗는 건 ___"' }], cards: ['속상했구나', '안 돼', '"맞아야 말을 듣지"'] }, target: { fill: { f1: '속상했구나', f2: '안 돼' } } },
                challenge: { prompt: '아이가 "싫어!"라고 하는 데까지 대본의 빈칸을 채우세요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '"장난감을 갖고 싶어서 ___"' }, { id: 'f2', who: '나', label: '"그래도 빼앗는 건 ___"' }, { id: 'f3', who: '나', label: '"동생에게 ___"' }, { id: 'f5', who: '나', label: '아이가 "싫어!" 하면: "___"' }, { id: 'f4', who: '나', label: '"스스로 물어봐서 ___"' }], cards: ['속상했구나', '안 돼', '"빌려줄래?" 하고 물어보자', '싫은 마음은 알겠어, 같이 기다려 보자', '고마워', '"맞아야 말을 듣지"', '"넌 왜 맨날 그러니"'] }, target: { fill: { f1: '속상했구나', f2: '안 돼', f3: '"빌려줄래?" 하고 물어보자', f5: '싫은 마음은 알겠어, 같이 기다려 보자', f4: '고마워' } } },
              } },
            { prompt: '아이가 잘 시간에 게임을 그만두지 않아요. 존중하는 훈육 대본의 빈칸을 채우세요.', toolOptions: { mode: 'fill', title: '가상 장면: 잘 시간', slots: [{ id: 'g1', who: '나', label: '"더 하고 싶은 마음은 ___"' }, { id: 'g2', who: '나', label: '"하지만 지금은 ___"' }, { id: 'g3', who: '나', label: '"내일 ___"' }], cards: ['알아', '잘 시간이야', '게임할 시간을 같이 정하자', '"당장 꺼, 안 그러면 혼난다"', '"너는 게임밖에 모르니"'] }, target: { fill: { g1: '알아', g2: '잘 시간이야', g3: '게임할 시간을 같이 정하자' } }, difficulty: 0.3 },
            SORTQ('보호자의 말 카드를 감정 인정·한계 설정·대안 제시로 나누세요. 존중하지 않는 말은 남기세요.', ['감정 인정', '한계 설정', '대안 제시'], [
              ['화가 났구나', '많이 아쉽구나'],
              ['때리는 건 안 돼', '지금은 그만할 시간이야'],
              ['말로 해 보자', '숨을 고르고 다시 해 보자'],
            ], { k: 1, traps: ['"맞아야 말을 듣지"', '"너 때문에 못 살겠다"'], d: 0.35, more: { conclude: '존중하는 훈육은 마음을 알아주고, 한계를 분명히 말하고, 할 수 있는 방법을 함께 찾는 말로 이루어져요. 아이를 때리거나 깎아내리는 말은 훈육이 아니에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 장면 하나를 골라 존중하는 훈육 대본을 내 말로 쓰세요.', columns: ['차례', '내가 할 말'], cells: [['감정 인정', ''], ['한계 설정', ''], ['대안 제시', '']] }] },
        notes: '학생의 가정 훈육 방식을 묻거나 발표시키지 않는다. 늘 \'미래의 보호자\'가 된 가상 장면으로 다룬다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '보호 체계 개선 제안서 쓰기',
        method: '보호 체계 개선 제안서 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '문제·근거, 대안, 기대 효과를 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에 예상 반론과 대응을 함께 쓴다.' },
        activity: {
          title: '시민 제안서 쓰기', tool: 'rubric-writing',
          teacher: '"제안서는 \'아이들을 잘 지켜 주세요\' 한 줄이 아니에요. 문제·근거·대안·기대 효과가 이어져야 읽는 사람이 움직여요." 앞 활동의 단계 카드와 가상 그래프를 근거로 쓰게 한다. "어른들이 알아서 해야 한다"처럼 누가 무엇을 할지 빠진 문장을 쓴 학생에게 "이 제안서를 받은 사람은 내일 무엇부터 할 수 있을까요?"라고 묻는다. 근거가 가상 자료라면 \'가상 자료\'라고 밝히게 한다.',
          task: '문제·근거, 대안, 기대 효과를 차례로 써서 보호 체계 개선 제안서를 완성해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('보호 체계의 문제와 그 근거를 2~3문장으로 쓰세요.', '가상 지역 보호 체계에서 가장 시급한 빈틈은 무엇이고, 그 근거는 무엇인가요?', ['문제가 어느 단계의 빈틈인지 밝혔다', '근거 자료를 하나 이상 썼다', '가상 자료라면 가상이라고 밝혔다'], { min: 50, max: 350, sent: [2, 3], must: [['단계', '발견', '신고', '보호', '회복']], starter: '우리 지역 보호 체계의 가장 큰 빈틈은 ~ 단계이다. 그 근거는 ~', plus: '문제 때문에 아이에게 생기는 영향을 썼다', d: 0.35 }),
            RWQ('빈틈을 메울 대안을 2~3문장으로 쓰세요.', '누가, 언제, 무엇을 하면 그 빈틈이 메워질까요?', ['누가 할지 밝혔다', '무엇을 할지 구체적으로 썼다', '실제로 할 수 있는 대안이다'], { min: 50, max: 350, sent: [2, 3], must: [['학교', '이웃', '주민', '지역', '기관', '선생님']], starter: '이 빈틈을 메우기 위해 ~이(가) ~을 한다.', plus: '대안에 드는 비용이나 시간을 짐작해 썼다', d: 0.4 }),
            RWQ('대안의 기대 효과를 2~3문장으로 쓰세요.', '대안이 실행되면 아이와 지역에 무엇이 달라질까요?', ['아이에게 생길 변화를 썼다', '지역·학교에 생길 변화를 썼다', '효과를 확인할 방법을 썼다'], { min: 50, max: 350, sent: [2, 3], must: [['기대', '효과', '달라', '줄어', '늘어']], starter: '이 대안이 실행되면 ~', plus: '예상 반론 하나와 그에 대한 대응을 썼다', d: 0.4, more: { conclude: '좋은 제안서는 문제·근거·대안·기대 효과가 한 줄로 이어지고, 누가 무엇을 할지 분명해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 제안서의 뼈대를 정리하세요.', columns: ['칸', '한 줄 요약'], cells: [['문제', ''], ['근거', ''], ['대안', ''], ['기대 효과', '']] }] },
      }),

      M({
        id: 'wrap.terms', type: 'wrap', title: '제안서 핵심어 정리',
        method: '제안서 핵심어 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '교사가 단계 하나를 함께 짝지어 보이고, 나머지 단계를 짝짓는다.', base: '네 단계 낱말을 오늘 찾은 대안과 모두 짝짓는다.', challenge: '짝지은 대안 하나를 한 문장 정책 문구로 바꿔 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"발견·신고·보호·회복, 네 낱말마다 오늘 찾은 대안을 하나씩 붙여 봐요." 낱말 카드를 짝지은 뒤 정책 문구 쓰기로 넘어간다. 출구 2번에서 \'아동 보호는 기관만의 일\'을 고른 학생에게 발견 단계의 대안이 누구의 일이었는지 다시 떠올리게 한다. 정책 문구는 \'누가·무엇을·언제\'가 들어가야 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '발견', ko: '이웃·학교가 신호를 알아차리도록 함께 배운다' }, { en: '신고', ko: '알릴 곳(112·1388)을 학교와 동네에 안내한다' }, { en: '보호', ko: '상담과 머물 곳이 늦지 않게 닿도록 한다' }, { en: '회복', ko: '보호 뒤 학교 적응과 관계 회복을 돕는다' }] }, prompt: '보호 체계 단계 낱말을 오늘 찾은 대안과 짝지으세요.', target: { match: { 발견: '발견', 신고: '신고', 보호: '보호', 회복: '회복' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['보호 체계는 발견부터 회복까지 이어져야 한다', '아동 보호는 기관만의 일이다', '알린 사람을 탓하지 않아야 신고가 늘어난다'], answer: 1, difficulty: 0.2, explain: '처음 알아차리는 이웃·학교가 움직여야 기관의 보호도 시작돼요.' },
            { type: 'short', prompt: '오늘 찾은 대안 하나를 \'누가·무엇을·언제\'가 들어간 한 문장 정책 문구로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '보호 체계 핵심어',
          items: [
            { type: 'table', prompt: '단계마다 대안을 내 말로 쓰세요.', columns: ['단계', '대안'], cells: [['발견', ''], ['신고', ''], ['보호', ''], ['회복', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '보호 체계는 ___ ·신고·보호·회복이 끊기지 않고 이어져야 한다.', answer: '발견' },
          ],
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '시민으로서 할 일 점검',
        method: '시민으로서 할 일 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 알맞은 항목 세 개를 먼저 함께 읽고 표시한다.', base: '항목 7개 가운데 알맞지 않은 2개를 빼고 표시한다.', challenge: '지역 사회에 권하고 싶은 항목 하나를 골라 출구 질문에 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 제안서를 썼다면, 이제 시민인 내가 할 일을 점검해 봐요. 알맞은 것만 표시해요." \'남의 집 일이니 모른 척한다\'에 표시한 학생에게 "보호 체계의 첫 단계는 누가 맡는다고 했나요?"라고 묻는다. 알리는 것은 고자질이 아니라 아이를 지키는 일이고, 알린 사람은 잘한 것이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '시민으로서 할 일', items: [{ id: 'tell', text: '아이가 위험해 보이면 112·1388에 알린다' }, { id: 'respect', text: '아이에게 존중하는 말을 쓴다' }, { id: 'ignore', text: '남의 집 일이니 모른 척한다' }, { id: 'nobl', text: '알린 사람을 탓하지 않는다' }, { id: 'know', text: '우리 지역의 보호 자원을 알아 둔다' }, { id: 'hit', text: '버릇을 고치려면 때려서 가르친다' }, { id: 'voice', text: '보호 체계 개선 의견을 낸다' }] }, prompt: '시민으로서 할 일에 알맞은 것만 표시하세요.', target: { checklist: ['tell', 'respect', 'nobl', 'know', 'voice'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '아이가 위험해 보이는데 확실하지 않을 때 알맞은 판단은?', options: ['확실해질 때까지 기다린다', '의심되면 알려 전문가가 살피게 한다', '아이에게 직접 캐묻는다'], answer: 1, difficulty: 0.15, explain: '확인은 전문가가 해요. 시민은 의심되면 알리는 것으로 충분히 큰일을 한 거예요.' },
            { type: 'short', prompt: '지역 사회에 권하고 싶은 항목 하나와 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '시민으로서 할 일',
          items: [
            { type: 'check', prompt: '이번 달에 해 볼 것에 표시하세요.', options: ['112·1388 알아 두기', '존중하는 말 쓰기', '지역 보호 자원 찾아보기', '개선 의견 내기'] },
            { type: 'short', prompt: '보호 체계에서 내가 맡을 수 있는 역할 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 14. 공동체 생명 안전망 제안 (12학년)
  // ======================================================================================================
  {
    const M = MOD('life-net', [12]);
    const BARRIER = [['부담 줄까 봐', 8], ['소문날까 봐', 7], ['어디에 청할지 몰라서', 6], ['별일 아니라고 여겨서', 5], ['기타', 2]];
    const BARRIER_T = '도움 청하기 어려운 이유(가상 학교 설문, 상대 크기)';
    const FEST = { text: '학생회가 다음 달 \'생명존중 주간\' 행사를 맡았다. 첫 회의에서 무엇을 할지 정해야 한다.', who: '학생회', motif: 'star', choices: [
      { id: 'video', text: '위기를 겪은 사람의 이야기를 자세히 담은 영상을 튼다', result: '영상이 자세해 보기 힘들어하는 학생이 생긴다.', impact: [{ who: '힘든 시기를 지나는 학생', text: '마음이 더 무거워진다', tone: -1 }], why: '위기 이야기는 자세할수록 오히려 위험할 수 있어요.', ending: '자세한 위기 이야기는 보는 사람을 지키지 못한다.' },
      { id: 'card', text: '서로 안부를 묻는 \'괜찮니 카드\' 쓰기 행사를 연다', result: '반마다 카드 쓰기를 하기로 한다.', impact: [{ who: '학생들', text: '서로 안부를 물을 기회가 생긴다', tone: 1 }],
        next: { text: '행사 홍보 포스터를 만들어야 한다.', choices: [
          { id: 'path', text: '포스터에 도움 경로(Wee 클래스·1388)를 함께 넣는다', result: '포스터 아래에 도움받을 곳이 적힌다.', impact: [{ who: '도움이 필요한 학생', text: '어디에 말할지 알게 된다', tone: 1 }],
            next: { text: '행사 날, 카드 가운데 걱정되는 글이 몇 장 보였다.', choices: [
              { id: 'link', text: '부스에 함께한 상담 선생님께 바로 전한다', result: '상담 선생님이 글 쓴 학생을 조용히 살피기로 한다.', impact: [{ who: '글 쓴 학생', text: '도움과 이어진다', tone: 1 }], ending: '희망과 도움 경로를 함께 알리고 걱정되는 신호를 전문가에게 이으면 행사가 안전망이 된다.' },
              { id: 'alone', text: '학생회끼리 읽고 넘긴다', result: '걱정되는 글이 아무에게도 전해지지 않는다.', impact: [{ who: '글 쓴 학생', text: '도움과 이어지지 못한다', tone: -1 }], why: '걱정되는 신호는 학생끼리 덮지 말고 어른에게 이어야 해요.', ending: '신호를 알아차려도 잇지 않으면 안전망에 구멍이 난다.' }] } },
          { id: 'shock', text: '눈길을 끌려고 충격적인 문구로 홍보한다', result: '포스터 앞에 사람이 모이지만 불안해하는 학생도 있다.', impact: [{ who: '학생들', text: '불안이 커진다', tone: -1 }], why: '충격적인 문구는 희망보다 불안을 키워요.', ending: '충격으로 모은 관심은 희망과 도움으로 이어지지 않는다.' }] } },
      { id: 'quiz', text: '생명존중 퀴즈 대회만 연다', result: '참여는 많지만 도움받을 곳은 소개되지 않는다.', impact: [{ who: '도움이 필요한 학생', text: '어디에 말할지 여전히 모른다', tone: 0 }], why: '참여만 있고 도움 경로가 빠지면 안전망이 되지 못해요.', ending: '즐거운 행사도 도움 경로가 빠지면 연결로 이어지지 않는다.' }] };
    const FEST_R = [{ id: 'hope', text: '희망과 도움 경로를 함께 알린다' }, { id: 'connect', text: '걱정되는 신호는 상담 선생님 등 전문가에게 잇는다' }, { id: 'eye', text: '눈길만 끌면 성공한 행사다', why: '눈길보다 안전과 연결이 행사의 목적이에요.' }, { id: 'detail', text: '위기 이야기는 자세할수록 도움이 된다', why: '자세한 위기 이야기는 오히려 위험할 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.protect', type: 'intro', title: '생명을 지키는 보호 요인',
        method: '보호 요인 낱말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '보호 요인 두 개(관계·도움 접근성)만 함께 짝짓는다.', base: '보호 요인 네 개를 설명 카드와 짝짓는다.', challenge: '네 가지 가운데 학교에서 가장 키우기 쉬운 보호 요인을 골라 까닭을 말한다.' },
        intro: {
          teacher: '"힘든 시기를 지나는 사람을 버티게 해 주는 것은 무엇일까요? 이런 것을 보호 요인이라고 해요." 시연 단추로 낱말 카드가 설명과 짝지어지는 모습을 보여 준다. "생명존중은 결국 각자 마음먹기에 달렸다"는 말이 나오면 "믿고 이야기할 사람, 내가 속한 곳, 쉽게 닿는 도움 — 이것들은 한 사람의 마음만으로 만들어질까요?"라고 되묻는다. 보호 요인은 공동체가 함께 키울 수 있고, 오늘은 그것을 키울 제안서를 쓴다고 밝힌다.',
          student: '힘든 시기를 버티게 해 주는 보호 요인 낱말을 설명 카드와 짝지어 보고, 우리 학교에서 키울 수 있는 것은 무엇일지 생각해 보세요.',
          demo: { tool: 'wordcards', options: { words: [{ en: '관계', ko: '믿고 이야기할 사람이 곁에 있음' }, { en: '소속감', ko: '내가 이 공동체의 한 사람이라고 느낌' }, { en: '도움 접근성', ko: '도움받을 곳을 알고 쉽게 닿을 수 있음' }, { en: '희망', ko: '상황이 나아질 수 있다는 기대' }] }, sequence: [{ match: { 관계: '관계', 소속감: '소속감', '도움 접근성': '도움 접근성', 희망: '희망' } }] },
          art: { draw: 'a paper safety net woven from many paper hands held together under a small paper school building, soft warm light, four paper tags hanging from the net', banner: '우리를 버티게 하는 것', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '이 주제는 생명존중(자살예방) 교육이다. 수업 내내 위기의 방법·수단·장소를 말하지 않는다. 수업 뒤 마음이 힘든 학생이 있으면 상담 선생님에게 바로 잇는다.',
      }),
      M({
        id: 'intro.barrier', type: 'intro', title: '도움 청하기 어려운 이유 읽기',
        method: '가상 설문 “도움 청하기 어려운 이유” 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대마다 상대 크기 값을 읽어 주며 가장 큰 막대 두 개를 함께 찾는다.', base: '값을 가린 채 막대 길이로 읽고, 제안서가 먼저 겨눌 이유를 고른다.', challenge: '이 가상 설문만으로 알 수 없는 것(응답자·질문 방식 등) 하나를 말한다.' },
        intro: {
          teacher: '"가상의 학교 설문이에요. 힘들 때 도움을 청하기 어려운 이유를 물었어요. 가장 긴 막대는 무엇인가요?" 시연 단추로 가장 큰 막대를 고르는 모습을 보여 준다. "도움을 안 청하는 건 본인 탓"이라는 말이 나오면 "\'어디에 청할지 몰라서\'라는 막대는 누가 바꿀 수 있을까요?"라고 되묻는다. 이유마다 공동체가 바꿀 수 있는 것이 있다는 점, 그리고 이 자료는 가상이라 실제 학교에서는 다시 조사해야 한다는 점을 짚는다.',
          student: '가상 학교 설문 그래프에서 도움을 청하기 어려운 가장 큰 이유를 찾고, 우리 제안서가 먼저 바꿀 수 있는 이유는 무엇일지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: BARRIER_T, yLabel: '상대 크기', xLabel: '이유', data: BARRIER, question: '가장 큰 막대는?', choices: BARRIER.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'paper bar chart blocks standing like closed doors of different heights, a small paper student holding a key in front of them, a paper signpost with a phone icon', banner: '왜 도움을 청하기 어려울까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '설문은 수업용 가상 자료다. 학생에게 자기 이유를 발표시키지 않는다.',
      }),

      M({
        id: 'activity.safe', type: 'activity', title: '안전한 표현과 피해야 할 표현',
        method: '게시글 문장을 안전한 표현·피해야 할 표현으로', tool: 'story', minutes: 18,
        levels: { easy: '문장 카드 4장을 안전한 표현·피해야 할 표현으로 나눈다.', base: '카드 7장을 나누고, 피해야 할 표현마다 고친 글을 짝짓는다.', challenge: '카드를 섞어 풀고, 고친 문장 가운데 도움 경로가 들어간 것만 골라낸다.' },
        activity: {
          title: '게시글 문장 나누고 고치기', tool: 'story',
          teacher: '"생명과 관련된 위기 소식을 전하거나 걱정을 나눌 때, 말 한 줄이 누군가를 지킬 수도 위험하게 할 수도 있어요." 카드를 나눌 때마다 "이 글을 지금 힘든 친구가 읽는다면 어떨까요?"라고 묻는다. "위기 이야기는 자세할수록 경각심을 준다"는 학생에게 "자세한 이야기가 힘든 사람에게 경각심이 될까요, 위험한 생각을 키울까요?"라고 되묻는다. 안전한 소통의 원칙은 방법을 말하지 않기, 원인을 하나로 단정하지 않기, 희망과 도움 경로를 함께 알리기라는 점을 짚는다.',
          task: '문장 카드를 안전한 표현과 피해야 할 표현으로 나누고, 피해야 할 표현을 고친 글과 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('게시글 문장 카드를 안전한 표현과 피해야 할 표현으로 나누세요.', ['안전한 표현', '피해야 할 표현'], [
              ['힘들면 언제든 이야기해 줘', '도움받을 곳: 상담 선생님·Wee 클래스·1388', '도움을 청하는 것은 용기 있는 일이다', '상황은 나아질 수 있고 함께할 사람이 있다'],
              ['위기 소식의 경위를 자세히 묘사한 글', '위기를 극적인 이야기처럼 꾸민 글', '확인되지 않은 소문을 퍼 나른 글'],
            ], { k: 2, d: 0.3 }),
            MATCHQ('피해야 할 표현마다 안전하게 고친 글을 짝지으세요.', [['위기 소식의 경위를 자세히 묘사한 글', '자세한 내용은 빼고 걱정과 도움 경로를 적은 글'], ['위기를 극적인 이야기처럼 꾸민 글', '차분하게 쓰고 함께할 사람이 있다고 적은 글'], ['확인되지 않은 소문을 퍼 나른 글', '퍼 나르지 않고 걱정을 선생님께 전한 글']], { k: 2, extra: ['"다들 힘드니 그냥 참자"는 글'], d: 0.35, more: { hints: ['방법을 빼고, 단정하지 않고, 희망과 도움 경로를 넣은 글이 안전하게 고친 글이에요.'] } }),
            PICKQ('고친 문장 가운데 도움 경로가 들어간 것만 고르세요.', ['"걱정되면 상담 선생님이나 1388과 이야기해 보세요"', '"혼자 버티지 말고 믿는 어른에게 말해 줘"'], ['"다들 힘드니 그냥 참자"', '"그 이야기는 아예 하지 말자"'], { d: 0.35, opt: { basket: '도움 경로가 있는 글' }, more: { conclude: '안전한 글은 방법을 말하지 않고, 원인을 단정하지 않으며, 희망과 도움받을 곳을 함께 알려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '학교 게시판에 생명존중 주간을 알리는 한 문장을, 안전한 소통 원칙을 지켜 도움 경로를 넣어 쓰세요.' }] },
        notes: '카드에 위기의 방법·수단·장소를 쓰지 않는다. \'피해야 할 표현\'도 글의 종류로만 적는다. 실제 사건·기사를 가져와 다루지 않는다.',
      }),
      M({
        id: 'activity.factors', type: 'activity', title: '학교 안 보호 요인 지도',
        method: '학교 안 보호 요인 지도', tool: 'mindmap', minutes: 19,
        levels: { easy: '가지마다 낱말 카드 1장씩(4장)을 단다.', base: '카드 8장을 학급·동아리·상담·교사 관계 가지에 단다.', challenge: '카드를 섞어 달고, 강화 방법마다 실행 주체를 짝짓는다.' },
        activity: {
          title: '우리 학교 보호 요인 가지', tool: 'mindmap',
          teacher: '"보호 요인은 학교 곳곳에 있어요. 학급, 동아리, 상담, 선생님과의 관계 — 각각 무엇으로 키울 수 있을까요?" 카드를 달 때마다 "이 방법이 키우는 것은 관계일까요, 소속감일까요, 도움 접근성일까요?"라고 묻는다. "그런 건 상담실이 알아서 한다"는 학생에게 \'혼자 있는 친구에게 먼저 말 걸기\' 카드를 가리키며 "이건 누가 할 수 있을까요?"라고 되묻는다. 안전망은 전문가 한 명이 아니라 여러 가닥이 엮여야 한다는 점을 짚는다.',
          task: '학교 안 보호 요인을 키우는 방법을 가지에 달고, 실행 주체와 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('보호 요인을 키우는 방법 카드를 학교 안 가지에 다세요.', ['학급', '동아리', '상담', '교사 관계'], [
              ['아침에 서로 이름 불러 인사하기', '혼자 있는 친구에게 먼저 말 걸기'],
              ['새 부원 환영 모임 열기', '역할을 나눠 모두 참여하기'],
              ['Wee 클래스 위치와 이용 시간 알리기', '상담 신청 쪽지함 두기'],
              ['선생님이 먼저 안부 묻기', '담임 선생님과 짧은 면담 시간'],
            ], { k: 1, d: 0.3, opt: { topic: '학교 안 보호 요인' } }),
            MATCHQ('강화 방법마다 실행 주체를 짝지으세요.', [['혼자 있는 친구에게 먼저 말 걸기', '학급 친구들'], ['상담 신청 쪽지함 두기', '상담 선생님'], ['새 부원 환영 모임 열기', '동아리 부장'], ['담임 선생님과 짧은 면담 시간', '담임 선생님']], { k: 3, d: 0.35, opt: { topic: '실행 주체' } }),
            PICKQ('\'도움 접근성\'을 키우는 방법만 고르세요.', ['상담 신청 쪽지함 두기', '1388·Wee 클래스 안내를 교실에 붙이기'], ['상담실 문을 늘 닫아 두기', '힘든 이야기는 하지 않기로 약속하기'], { d: 0.35, opt: { basket: '도움 접근성' }, more: { conclude: '보호 요인은 학급·동아리·상담·선생님이 각자 한 가닥씩 맡아 엮을 때 튼튼한 안전망이 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교에서 키우고 싶은 보호 요인과 실행 주체를 쓰세요.', columns: ['가지', '강화 방법', '실행 주체'], cells: [['학급', '', ''], ['상담', '', '']] }] },
      }),
      M({
        id: 'activity.council', type: 'activity', title: '학생회 생명존중 행사 갈림길',
        method: '학생회 생명존중 행사 기획 갈림길', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 하나(행사 내용)에서 고르고 근거를 고른다.', base: '갈림길 둘(내용·홍보)을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋(내용·홍보·연결)까지 가고, 안전한 소통 원칙을 어긴 길의 결과와 견준다.' },
        activity: {
          title: '생명존중 주간 기획 회의', tool: 'dilemma',
          teacher: '"학생회가 생명존중 주간을 맡았어요. 많이 참여하는 행사와 안전한 행사는 같을까요?" 선택마다 누가 어떤 영향을 받는지 읽게 한다. \'자세한 영상\'이나 \'충격적인 문구\'를 고르는 학생에게 "그 장면을 지금 힘든 친구가 본다면 어떨까요?"라고 묻는다. 마지막 갈림길에서 \'학생회끼리 읽고 넘긴다\'를 고르면 "걱정되는 글을 본 것은 잘한 일이에요. 이제 그 글을 누구에게 이어야 할까요?"라고 되묻는다. 행사의 목적은 눈길이 아니라 희망과 연결이라는 점을 짚는다.',
          task: '행사 기획의 갈림길을 따라가며 참여와 안전의 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('생명존중 주간 행사를 안전하게 기획하는 길을 고르고 근거를 고르세요.', FEST, [['card', 'path', 'link']], FEST_R, ['hope', 'connect'], { d: 0.4 }),
            EXPLOREQ('\'자세한 영상\'이나 \'충격적인 문구\' 길도 끝까지 가 보고, 처음 고른 길과 결과를 견주세요.', FEST, FEST_R, ['안전한 소통 원칙을 어긴 길의 결과를 확인했다', '누가 어떤 영향을 받는지 견주었다'], { d: 0.35 }),
            DILQ('행사 뒤 익명 게시판의 걱정되는 글 앞에서 알맞은 길을 고르고 근거를 고르세요.', { text: '행사 뒤 학교 익명 게시판에 "요즘 다 그만두고 싶다"는 글이 올라왔다.', who: '학생회장', motif: 'cloud', choices: [
              { id: 'share', text: '캡처해서 여러 단톡방에 퍼 나른다', result: '글이 소문처럼 번지고 글쓴이를 추측하는 말이 오간다.', impact: [{ who: '글 쓴 학생', text: '더 숨고 싶어진다', tone: -1 }], why: '퍼 나르면 걱정이 소문이 되고 글쓴이는 더 숨게 돼요.', ending: '걱정되는 글은 퍼 나를수록 글쓴이에게서 멀어진다.' },
              { id: 'tell', text: '상담 선생님께 바로 알린다', result: '상담 선생님이 학교와 함께 살피기로 한다.', impact: [{ who: '글 쓴 학생', text: '도움이 다가갈 길이 생긴다', tone: 1 }],
                next: { text: '선생님이 살피는 동안, 게시판 글에는 아직 아무 댓글이 없다.', choices: [
                  { id: 'hope', text: '"혼자가 아니야. 상담 선생님·Wee 클래스·1388이 있어" 댓글을 남긴다', result: '다른 학생들도 응원 댓글을 단다.', impact: [{ who: '글 쓴 학생', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '어른에게 알리고 희망과 도움 경로를 남기면 글쓴이에게 두 갈래 길이 열린다.' },
                  { id: 'judge', text: '"진짜야? 관심 끌려는 거 아니야?"라고 묻는 댓글을 단다', result: '글이 지워지고 글쓴이와 이어질 길이 사라진다.', impact: [{ who: '글 쓴 학생', text: '마음을 닫는다', tone: -1 }], why: '힘들다는 말은 관심 끌기가 아니라 도움을 청하는 신호일 수 있어요.', ending: '의심하는 한마디가 도움을 청한 손을 내리게 한다.' }] } },
              { id: 'ignore', text: '관심을 끌려는 글이라 여기고 넘긴다', result: '글이 아무에게도 닿지 않은 채 묻힌다.', impact: [{ who: '글 쓴 학생', text: '도움과 이어지지 못한다', tone: -1 }], why: '힘들다는 말은 가볍게 넘기지 않고 어른에게 이어요.', ending: '넘긴 신호는 다시 오지 않을 수 있다.' }] },
              [['tell', 'hope']], [{ id: 'adult', text: '걱정되는 신호는 믿을 어른에게 바로 잇는다' }, { id: 'path', text: '희망과 도움 경로를 함께 남긴다' }, { id: 'attention', text: '힘들다는 글은 관심을 끌려는 것이다', why: '힘들다는 말은 도움을 청하는 신호일 수 있어요.' }], ['adult', 'path'], { d: 0.35, more: { conclude: '걱정되는 신호를 본 것은 잘한 일이에요. 퍼 나르거나 의심하지 말고, 어른에게 잇고 희망과 도움 경로를 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '생명존중 행사를 기획할 때 꼭 지킬 안전한 소통 원칙 하나와 그 까닭을 쓰세요.' }] },
        notes: '갈림길의 \'자세한 영상\' 길도 장면 글에 위기의 방법·내용을 쓰지 않는다. 게시판 글은 가상이다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '생명 안전망 제안서 쓰기',
        method: '생명 안전망 제안서 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '진단, 실행 계획, 실행 가능성을 틀 없이 쓰고 기준표(보호 요인·도움 경로·안전한 표현·실행 가능성)로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에 평가 방법까지 쓴다.' },
        activity: {
          title: '학교·지역 생명 안전망 제안서', tool: 'rubric-writing',
          teacher: '"오늘 찾은 보호 요인과 도움 청하기 어려운 이유를 이어서, 학교나 지역에 낼 생명 안전망 제안서를 써 봐요." 쓰기 전에 기준표 네 항목을 함께 읽는다. 제안서에 위기의 자세한 사례를 넣으려는 학생에게 "그 문장이 없어도 제안의 근거가 될까요? 오히려 누가 읽고 힘들어질까요?"라고 묻는다. "다들 서로 잘해 주자"처럼 실행 주체가 없는 문장에는 "누가, 언제 할까요?"라고 되묻는다.',
          task: '진단, 실행 계획, 실행 가능성을 차례로 써서 생명 안전망 제안서를 완성해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('우리 학교(또는 지역) 안전망의 빈틈을 진단하는 2~3문장을 쓰세요.', '어떤 보호 요인이 약하고, 도움을 청하기 어려운 이유는 무엇인가요(가상 설문을 쓰면 가상이라고 밝혀요)?', ['약한 보호 요인을 하나 이상 짚었다', '근거를 썼고 가상 자료는 가상이라고 밝혔다', '위기의 방법이나 자세한 사례를 쓰지 않았다'], { min: 50, max: 350, sent: [2, 3], must: [['관계', '소속감', '도움', '희망', '보호 요인']], starter: '우리 학교에서 가장 약한 보호 요인은 ~이다. 그 근거는 ~', plus: '빈틈 때문에 생기는 영향을 썼다', d: 0.35 }),
            RWQ('빈틈을 메울 실행 계획을 2~3문장으로 쓰세요.', '누가, 언제, 무엇을 하고, 도움 경로를 어떻게 알릴까요?', ['실행 주체와 시기를 썼다', '도움 경로(상담 선생님·Wee 클래스·1388 등)를 넣었다', '희망을 담은 안전한 표현으로 썼다'], { min: 50, max: 350, sent: [2, 3], must: [['상담', 'Wee', '1388', '선생님']], starter: '~이(가) ~마다 ~을 한다. 도움받을 곳은 ~', plus: '계획에 학생이 참여하는 자리를 넣었다', d: 0.4 }),
            RWQ('계획의 실행 가능성과 기대 효과를 2~3문장으로 쓰세요.', '이 계획은 실제로 할 수 있나요? 무엇이 달라질까요?', ['필요한 사람·시간·장소를 따져 보았다', '기대 효과를 썼다', '계획이 끝나도 이어질 방법을 썼다'], { min: 50, max: 350, sent: [2, 3], must: [['가능', '효과', '이어', '달라']], starter: '이 계획은 ~ 때문에 실행할 수 있다. 실행되면 ~', plus: '효과를 확인할 평가 방법을 썼다', d: 0.4, more: { conclude: '생명 안전망 제안서는 보호 요인을 키우고, 도움 경로를 알리고, 안전한 표현으로 쓰고, 실제로 할 수 있어야 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 제안서를 기준표로 다시 점검하세요.', columns: ['기준', '내 제안서에서 찾은 문장'], cells: [['보호 요인', ''], ['도움 경로', ''], ['안전한 표현', ''], ['실행 가능성', '']] }] },
      }),

      M({
        id: 'wrap.network', type: 'wrap', title: '졸업 뒤 나의 연결망',
        method: '졸업 뒤 나의 연결망 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 첫 단계(졸업 직후)를 함께 놓아 보이고, 나머지 단계를 놓는다.', base: '생활 단계 네 칸에 기댈 사람·기관 카드를 모두 놓는다.', challenge: '연결망이 약한 단계를 골라 보완책을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"졸업하면 매일 보던 친구와 선생님이 한꺼번에 멀어져요. 새 생활 단계마다 누구에게 기댈 수 있을까요?" 카드를 놓은 뒤 연결망이 약한 단계를 고르게 한다. "졸업하면 혼자 해결해야 한다"는 학생에게 "어른이 되어도 도움을 청하는 사람과 청하지 않는 사람 중 누가 더 오래 잘 지낼까요?"라고 묻는다. 위급할 때는 나이와 상관없이 112·119가 있다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'match', axis: ['졸업', '1년 뒤'], slots: [{ id: 's1', label: '졸업 직후' }, { id: 's2', label: '새 학교·일터 첫 달' }, { id: 's3', label: '혼자 지내는 첫 겨울' }, { id: 's4', label: '마음이 크게 힘든 날' }], cards: ['고교 담임 선생님께 소식 전하기', '새 공동체의 동기·선배와 인사', '보호자와 정해 둔 날 통화하기', '믿는 사람에게 연락, 위급하면 112·119', '아무에게도 말하지 않기'] }, prompt: '졸업 뒤 생활 단계마다 기댈 사람·기관 카드를 놓으세요.', target: { match: { s1: '고교 담임 선생님께 소식 전하기', s2: '새 공동체의 동기·선배와 인사', s3: '보호자와 정해 둔 날 통화하기', s4: '믿는 사람에게 연락, 위급하면 112·119' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['생명존중은 개인 마음가짐의 문제다', '보호 요인은 공동체가 함께 키울 수 있다', '위기 이야기는 자세할수록 도움이 된다'], answer: 1, difficulty: 0.2, explain: '관계·소속감·도움 접근성은 학교와 지역이 함께 만들 수 있어요.' },
            { type: 'short', prompt: '연결망이 가장 약할 것 같은 단계 하나와 그 보완책을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '졸업 뒤 나의 연결망',
          items: [
            { type: 'table', prompt: '단계마다 기댈 사람·기관을 쓰세요(실명 대신 관계로).', columns: ['단계', '기댈 사람·기관'], cells: [['졸업 직후', ''], ['새 학교·일터 첫 달', ''], ['마음이 크게 힘든 날', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '도움을 ___ 것은 약함이 아니라 자립의 일부다.', answer: '청하는' },
          ],
        },
      }),
      M({
        id: 'wrap.self', type: 'wrap', title: '안전한 소통 원칙 점검',
        method: '안전한 소통 원칙 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '교사가 원칙 세 가지를 소리 내어 읽고, 그 셋부터 표시한다.', base: '원칙 네 가지를 모두 스스로 점검해 표시한다.', challenge: '친구에게 가장 먼저 알려 줄 원칙을 골라 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 안전한 소통 원칙, 나는 지킬 수 있을까요? 솔직하게 표시해 봐요." 표시한 뒤 출구 2번으로 넘어간다. "친구가 힘들다고 하면 내가 다 해결해 줘야 한다"는 학생에게 "내가 할 일은 해결일까요, 듣고 어른에게 잇는 것일까요?"라고 묻는다. 걱정되는 신호를 알아차리고 알린 사람은 잘한 것이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '안전한 소통 원칙 점검' }, prompt: '오늘 배운 안전한 소통 원칙을 스스로 점검해 표시하세요.', target: { selfCheck: ['위기 이야기를 전할 때 방법·자세한 내용을 말하지 않는다', '걱정되는 글은 퍼 나르지 않고 믿을 어른에게 알린다', '희망과 도움 경로를 함께 말한다', '힘들다는 친구의 말을 판단 없이 듣는다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '친구가 "아무에게도 말하지 마"라며 생명과 관련된 걱정을 털어놓았어요. 알맞은 판단은?', options: ['약속이니 끝까지 비밀로 한다', '친구의 생명이 먼저이니 믿을 어른에게 잇는다', '다른 친구들에게 의견을 물어본다'], answer: 1, difficulty: 0.15, explain: '생명과 관련된 비밀은 지키지 않아도 되는 예외예요. 상담 선생님 등 믿을 어른에게 이어요.' },
            { type: 'short', prompt: '친구에게 가장 먼저 알려 주고 싶은 원칙 하나와 그 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '안전한 소통 원칙',
          items: [
            { type: 'check', prompt: '내가 지킬 원칙에 표시하세요.', options: ['방법을 말하지 않기', '퍼 나르지 않고 어른에게 알리기', '희망과 도움 경로 함께 말하기', '판단 없이 듣기'] },
            { type: 'short', prompt: '도움받을 곳(학교 안·밖)을 두 곳 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 15. 나와 타인을 소중히, 자립을 앞둔 관계 성찰 (12학년)
  // ======================================================================================================
  {
    const M = MOD('respect-life', [12]);
    const ROOM = { text: '대학 기숙사 첫 달. 룸메이트가 밤 1시까지 스피커로 음악을 틀어 잠을 못 잔 날이 늘었다.', who: '서아', motif: 'moon', choices: [
      { id: 'endure', text: '아무 말 없이 참는다', result: '잠이 모자라고 룸메이트에게 서운함이 쌓인다.', impact: [{ who: '서아', text: '몸과 마음이 지친다', tone: -1 }], why: '말하지 않고 참으면 관계도 나도 지쳐요.', ending: '말하지 않은 불편은 사라지지 않고 쌓인다.' },
      { id: 'talk', text: '"밤에 음악 소리 때문에 잠이 잘 안 와"라고 내 마음을 말한다', result: '룸메이트가 몰랐다며 놀란다.', impact: [{ who: '룸메이트', text: '서아의 불편을 처음 안다', tone: 1 }],
        next: { text: '룸메이트가 "그래도 내 방이기도 하잖아"라고 한다.', choices: [
          { id: 'rule', text: '밤 11시 뒤에는 이어폰 쓰기 같은 규칙을 함께 정하자고 한다', result: '둘이 함께 방 규칙 쪽지를 붙인다.', impact: [{ who: '두 사람', text: '서로의 생활을 존중하게 된다', tone: 1 }],
            next: { text: '몇 주 뒤, 룸메이트가 규칙을 또 잊었다.', choices: [
              { id: 'remind', text: '쪽지를 가리키며 차분히 다시 말하고, 안 풀리면 기숙사 생활 담당에게 함께 상의하자고 한다', result: '룸메이트가 사과하고 알람을 맞춘다.', impact: [{ who: '서아', text: '경계도 관계도 지킨다', tone: 1 }], ending: '경계를 차분히 다시 말하고 필요하면 도움을 청하는 것이 관계를 오래 지킨다.' },
              { id: 'explode', text: '화를 내며 스피커를 치워 버린다', result: '방 안 공기가 얼어붙고 서로 말을 하지 않는다.', impact: [{ who: '두 사람', text: '관계가 크게 상한다', tone: -1 }], why: '화로 밀어붙이면 경계는 지켜도 관계가 무너져요.', ending: '상대를 존중하지 않는 방식으로는 내 경계도 오래 지키기 어렵다.' }] } },
          { id: 'give', text: '"그래, 네 방이기도 하지" 하고 다 양보한다', result: '잠 못 드는 밤이 그대로 이어진다.', impact: [{ who: '서아', text: '나를 낮춰 관계를 유지한다', tone: -1 }], why: '나를 낮추는 양보는 관계를 건강하게 하지 못해요.', ending: '나를 돌보지 않는 양보는 결국 관계도 지치게 한다.' }] } },
      { id: 'post', text: '익명 커뮤니티에 룸메이트 흉을 올린다', result: '글을 본 룸메이트가 서아를 피한다.', impact: [{ who: '룸메이트', text: '상처를 받는다', tone: -1 }], why: '뒤에서 흉보면 문제는 그대로이고 관계만 깨져요.', ending: '직접 말하지 않고 흉본 말은 갈등을 키운다.' }] };
    const ROOM_R = [{ id: 'boundary', text: '내 불편을 차분히 말하는 것은 관계를 지키는 일이다' }, { id: 'ask', text: '둘이 풀기 어려우면 도움을 청하는 것도 자립이다' }, { id: 'endure', text: '참는 것이 언제나 관계를 지킨다', why: '참기만 하면 나도 관계도 지쳐요.' }, { id: 'win', text: '이겨야 내 권리가 지켜진다', why: '경계는 상대를 이기는 것이 아니라 함께 지키는 거예요.' }];

    MODS.push(
      M({
        id: 'intro.graduate', type: 'intro', title: '졸업을 앞둔 인물의 마음',
        method: '졸업을 앞둔 인물의 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 낱말 4개 가운데 서아의 마음을 함께 고른다.', base: '마음 낱말 8개 가운데 서아에게 들 법한 마음을 모두 고른다.', challenge: '설렘과 걱정이 함께 드는 까닭을 장면에서 찾아 말한다.' },
        intro: {
          teacher: '"졸업을 앞둔 서아가 기숙사로 떠날 짐을 싸고 있어요. 서아의 마음은 하나일까요?" 두세 명에게 마음 낱말을 말하게 한 뒤 시연 단추로 낱말이 바구니에 담기는 모습을 보여 준다. "어른이 되니 기쁘기만 해야 한다"는 말이 나오면 "새 방 열쇠를 받은 날, 설렘과 걱정이 함께 들 수는 없을까요?"라고 되묻는다. 오늘은 자립을 앞두고 나와 타인을 소중히 하는 관계의 방식을 생각해 본다고 밝힌다.',
          student: '졸업을 앞두고 짐을 싸는 가상 인물 서아의 장면을 보고, 서아에게 들 법한 마음 낱말을 골라 보세요. 왜 서로 다른 마음이 함께 들까요?',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '서아의 마음', cards: ['설렘', '걱정', '아쉬움', '고마움', '지루함', '화남', '두려움', '뿌듯함'], shuffle: false }, sequence: [{ pick: ['설렘', '걱정', '아쉬움', '고마움'] }] },
          art: { draw: 'a paper student packing a cardboard box in a bedroom at dusk, a framed paper photo of friends and family on the shelf, a new key on a ribbon, soft pastel paper layers', banner: '떠날 준비, 어떤 마음일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학생 자신의 가정 형편·진학 여부를 발표시키지 않는다. 늘 가상 인물 서아의 마음으로 이야기한다.',
      }),
      M({
        id: 'intro.month', type: 'intro', title: '자립 첫 주 시간 미리 보기',
        method: '자립 첫 달 시간 예산 미리 보기', tool: 'economy', minutes: 6,
        levels: { easy: '시간 블록 카드 4장을 꼭 지킬 시간·줄일 수 있는 시간으로 함께 나눈다.', base: '시간 블록 카드 7장을 나누며 일·공부·쉼·관계가 한 주에 넘치지 않게 따진다.', challenge: '관계에 쓰는 시간을 모두 줄이면 어떤 영향이 생길지 말한다.' },
        intro: {
          teacher: '"자립한 첫 주, 일주일은 168시간이에요. 일·공부·잠·쉼·관계를 다 넣을 수 있을까요?" 시연 단추로 시간 블록 카드가 \'꼭 지킬 시간\'과 \'줄일 수 있는 시간\'으로 나뉘는 모습을 보여 준다. "바쁘면 친구·가족 연락부터 줄이면 된다"는 말이 나오면 "힘든 일이 생긴 주에 아무와도 연락하지 않았다면 누구에게 기댈 수 있을까요?"라고 되묻는다. 관계에 쓰는 시간도 나를 지키는 시간이라는 점을 짚는다.',
          student: '자립한 첫 주의 시간 블록을 꼭 지킬 시간과 줄일 수 있는 시간으로 나눠 보세요. 관계에 쓰는 시간은 어느 쪽에 넣을까요?',
          demo: { tool: 'economy', options: { mode: 'sort', slots: ['꼭 지킬 시간', '줄일 수 있는 시간'], cards: ['하루 잠 7시간', '세 끼 식사', '가족과 주 1회 통화', '아르바이트 시간', '새벽까지 영상 보기', '수업·과제', '하루 종일 게임'], shuffle: false }, sequence: [{ sort: { '꼭 지킬 시간': ['하루 잠 7시간', '세 끼 식사', '가족과 주 1회 통화', '아르바이트 시간', '수업·과제'], '줄일 수 있는 시간': ['새벽까지 영상 보기', '하루 종일 게임'] } }] },
          art: { draw: 'a paper weekly planner laid out like a budget bar with colourful paper time blocks for sleep, meals, study, work and a small heart block for friends and family, a paper alarm clock beside it', banner: '한 주 168시간, 어떻게 쓸까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '교구의 예산(budget) 판은 돈(원)만 세어서, 시간 예산은 시간 블록 카드 나누기로 다룬다. \'잠 7시간\'은 의학 기준이 아니라 연습용 예시다. 학생 본인의 실제 일정을 발표시키지 않는다.',
      }),

      M({
        id: 'activity.support', type: 'activity', title: '나의 지지망 지도',
        method: '나의 지지망 지도', tool: 'mindmap', minutes: 18,
        levels: { easy: '가지마다 행동 카드 1장씩(5장)을 단다.', base: '카드 10장을 가족·친구·선생님·새 공동체·기관 가지에 단다.', challenge: '카드를 섞어 달고, 약해지기 쉬운 \'새 공동체\' 가지를 채울 방법을 골라 덧붙인다.' },
        activity: {
          title: '지지망 가지 펼치기', tool: 'mindmap',
          teacher: '"졸업 뒤 나를 받쳐 줄 사람과 곳을 가지로 펼쳐 봐요. 가족·친구·선생님·새 공동체·기관." 카드를 달 때마다 "이 사람(곳)에게는 어떤 일로 연락할 수 있을까요?"라고 묻는다. "독립은 혼자 다 해결하는 것"이라는 학생에게 "혼자 해결하는 사람과 필요할 때 도움을 청할 줄 아는 사람 중 누가 더 자립한 걸까요?"라고 되묻는다. 지지망의 가지는 저절로 자라지 않고 내가 연락해야 굵어진다는 점을 짚는다.',
          task: '지지망 행동 카드를 가지에 달고, 약한 가지를 채울 방법과 상황별 연락처를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('지지망을 키우는 행동 카드를 가지에 다세요.', ['가족', '친구', '선생님', '새 공동체', '기관'], [
              ['보호자와 정해 둔 날 통화하기', '형제자매와 안부 나누기'],
              ['고교 친구와 한 달에 한 번 만나기', '힘들 때 연락할 친구 정해 두기'],
              ['고교 담임 선생님께 소식 전하기', '진로 상담 선생님께 조언 구하기'],
              ['기숙사 이웃과 인사 나누기', '동아리·동기 모임에 참여하기'],
              ['상담 전화 1388 알아 두기', '위급할 때 112·119'],
            ], { k: 1, d: 0.3, opt: { topic: '나의 지지망' } }),
            PICKQ('약해지기 쉬운 \'새 공동체\' 가지를 채우는 방법만 고르세요.', ['첫 주에 이웃 방에 먼저 인사하기', '관심 있는 모임 하나에 들어가기'], ['익숙해질 때까지 혼자 지내기', '모두와 한꺼번에 친해지려 애쓰기'], { d: 0.35, opt: { basket: '새 공동체 채우기' } }),
            MATCHQ('상황마다 먼저 기댈 곳을 짝지으세요.', [['새 일터에서 실수해 마음이 무겁다', '믿는 친구에게 이야기하기'], ['진로를 바꿀지 고민된다', '진로 상담 선생님께 조언 구하기'], ['혼자 지내다 크게 아파 움직이기 어렵다', '보호자에게 연락하고 위급하면 119']], { k: 3, extra: ['아무에게도 말하지 않기'], d: 0.35, more: { conclude: '지지망은 여러 가지가 있을수록 튼튼해요. 상황에 맞는 곳에 도움을 청하는 것이 자립의 힘이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 지지망을 관계 이름으로 적으세요(실명 대신 \'고교 친구\'처럼).', columns: ['가지', '기댈 사람·곳', '연락할 때'], cells: [['가족', '', ''], ['새 공동체', '', ''], ['기관', '', '']] }] },
      }),
      M({
        id: 'activity.conflict', type: 'activity', title: '기숙사·첫 일터 갈등 갈림길',
        method: '기숙사·첫 일터 갈등 갈림길과 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 결과를 본 뒤 근거를 고른다.', base: '갈림길 둘을 지나 관계와 마음 건강의 결과를 보고 근거를 고른다.', challenge: '갈림길 셋, 몇 주 뒤까지 결과를 추적하고 경계를 지키면서 관계를 잇는 길을 근거로 고른다.' },
        activity: {
          title: '룸메이트·동료와의 갈등', tool: 'dilemma',
          teacher: '"갈등은 피할 수 없어요. 그런데 갈등을 다루는 방식은 고를 수 있어요." 선택마다 서아와 상대에게 어떤 영향이 가는지 읽게 한다. \'다 양보한다\'를 고르는 학생에게 "서아가 나를 낮춰 유지한 관계는 몇 주 뒤에 어떻게 될까요?"라고 묻고, \'화를 내며 치운다\'를 고르는 학생에게는 "경계는 지켰지만 무엇을 잃었나요?"라고 묻는다. 경계를 말하는 것은 관계를 끊는 일이 아니라 오래 지키는 일이고, 둘이 풀기 어려우면 도움을 청하는 것도 자립이라는 점을 짚는다.',
          task: '갈등 갈림길을 따라가며 관계와 마음 건강의 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('기숙사 룸메이트와의 갈등에서 경계와 관계를 함께 지키는 길을 고르고 근거를 고르세요.', ROOM, [['talk', 'rule', 'remind']], ROOM_R, ['boundary', 'ask'], { d: 0.4 }),
            EXPLOREQ('\'다 양보한다\'나 \'흉을 올린다\' 길도 끝까지 가 보고, 처음 고른 길과 결과를 견주세요.', ROOM, ROOM_R, ['다른 길의 결과를 확인했다', '서아의 마음 건강과 관계에 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('첫 일터에서 동료가 일을 떠넘기는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '첫 일터 셋째 주. 퇴근 직전 선배 동료가 "신입이니까"라며 자기 일을 또 넘긴다.', who: '서아', motif: 'house', choices: [
              { id: 'accept', text: '이번에도 말없이 받아 늦게까지 남는다', result: '매일 퇴근이 늦어지고 주말에도 지친다.', impact: [{ who: '서아', text: '몸과 마음이 지친다', tone: -1 }], why: '말없이 다 받으면 내가 먼저 지쳐요.', ending: '참기만 하는 동안 나를 돌볼 시간이 사라진다.' },
              { id: 'say', text: '"오늘은 제 일을 마쳐야 해서 어렵습니다. 내일 함께 나눠 볼까요?"라고 말한다', result: '동료가 잠시 언짢은 얼굴을 한다.', impact: [{ who: '서아', text: '내 경계를 말했다', tone: 1 }],
                next: { text: '동료가 "요즘 신입은 다르네"라며 투덜거린다.', choices: [
                  { id: 'keep', text: '존중하는 말투를 지키며, 업무 나누기를 팀장과 함께 상의하자고 한다', result: '팀장이 업무를 다시 나누어 준다.', impact: [{ who: '서아', text: '경계와 관계를 함께 지킨다', tone: 1 }, { who: '동료', text: '업무가 분명해진다', tone: 0 }], ending: '존중하는 말로 경계를 지키고 필요하면 도움을 청하면 관계도 일도 나아진다.' },
                  { id: 'sorry', text: '미안하다며 다시 다 맡는다', result: '다음 날에도 같은 부탁이 이어진다.', impact: [{ who: '서아', text: '다시 지친다', tone: -1 }], why: '사과하며 물러서면 같은 일이 되풀이되기 쉬워요.', ending: '한 번 말한 경계는 지켜야 힘이 생긴다.' }] } },
              { id: 'quit', text: '아무 말 없이 그만두기로 한다', result: '문제는 말하지 못한 채 일자리를 잃는다.', impact: [{ who: '서아', text: '자신감이 줄어든다', tone: -1 }], why: '말하고 도움을 청할 기회가 있었어요.', ending: '말하지 않고 떠나면 같은 어려움을 다음 곳에서도 만나기 쉽다.' }] },
              [['say', 'keep']], [{ id: 'clear', text: '존중하는 말로 내 경계를 분명히 말한다' }, { id: 'help', text: '혼자 풀기 어려우면 윗사람에게 도움을 청한다' }, { id: 'newbie', text: '신입은 무엇이든 참아야 한다', why: '신입도 존중받으며 일할 권리가 있어요.' }], ['clear', 'help'], { d: 0.35, more: { conclude: '자립한 어른의 관계는 나를 낮추지도, 상대를 깎아내리지도 않아요. 경계를 존중하는 말로 말하고, 어려우면 도움을 청해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '갈등 상황에서 내 경계를 존중하는 말로 전하는 한 문장을 쓰세요.' }] },
        notes: '갈등 장면은 가상이다. 학생 자신의 가족·또래 갈등을 발표시키지 않는다.',
      }),
      M({
        id: 'activity.family', type: 'activity', title: '가족에게 전할 감사·경계',
        method: '가족에게 전할 감사·경계 문장 고르기', tool: 'wordcards', minutes: 18,
        levels: { easy: '문장 카드 4장을 감사 문장·경계 문장으로 나눈다.', base: '문장 카드 6장과 상처 주는 말 2장을 두고 나누며, 존중을 담은 경계 문장을 고르고 빈칸을 채운다.', challenge: '카드를 섞어 풀고, 고른 문장 하나를 활동지에 내 상황에 맞게 바꿔 쓴다.' },
        activity: {
          title: '감사·경계 문장 고르기', tool: 'wordcards',
          teacher: '"집을 떠나기 전, 가족에게 어떤 말을 남기고 싶나요? 고마움도 있고, 이제는 내가 정하고 싶은 것도 있을 거예요." 카드를 나눈 뒤 경계 문장을 고르게 한다. "가족과의 갈등은 집을 떠나면 끝난다"는 학생에게 "떨어져 살아도 명절과 전화는 이어져요. 말하지 않은 서운함은 어디로 갈까요?"라고 묻는다. 경계를 말할 때도 상대의 마음을 먼저 인정하면 관계를 지키며 말할 수 있다는 점을 짚는다.',
          task: '가족에게 전할 문장 카드를 감사·경계로 나누고, 존중을 담은 경계 문장을 골라 빈칸을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가족에게 전할 문장 카드를 감사 문장과 경계 문장으로 나누세요. 상처 주는 말은 남기세요.', ['감사 문장', '경계 문장'], [
              ['그동안 챙겨 주셔서 고마워요', '힘들 때 기다려 주셔서 고마웠어요', '아침마다 깨워 주던 목소리가 생각날 거예요'],
              ['제 일은 먼저 제가 정해 보고 말씀드릴게요', '연락은 주말에 한 번 길게 하면 좋겠어요', '제 방은 들어오기 전에 물어봐 주세요'],
            ], { k: 2, traps: ['이제 저한테 신경 끄세요', '다 엄마 아빠 때문이에요'], d: 0.3 }),
            PICKQ('상대의 마음을 인정하면서 경계를 말하는 문장만 고르세요.', ['걱정하시는 마음 알아요. 그래도 이번 결정은 제가 해 볼게요', '지금은 이야기하기 힘들어요. 저녁에 다시 말씀드릴게요'], ['제 인생이니 상관하지 마세요', '말해 봤자 모르실 거예요'], { d: 0.35, opt: { basket: '존중을 담은 경계' } }),
            { prompt: '존중을 담은 경계 문장의 빈칸을 카드로 채우세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '"___ 마음은 알아요."' }, { id: 'b2', label: '"그래도 ___은 제가 정해 볼게요."' }, { id: 'b3', label: '"___ 다시 이야기 나눠요."' }], cards: ['걱정하시는', '이번 진로', '주말에', '상관하지 마시는', '당장 그만'] }, target: { fill: { b1: '걱정하시는', b2: '이번 진로', b3: '주말에' } }, difficulty: 0.3, conclude: '감사는 구체적으로, 경계는 상대의 마음을 인정한 뒤 분명하게 — 그러면 떨어져 살아도 관계가 이어져요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 고른 경계 문장 하나를 내 상황에 맞게 바꿔 쓰세요(실명·구체 사정은 쓰지 않아도 돼요).' }] },
        notes: '가족 형태와 사정은 학생마다 다르다. \'가족\'을 보호자·함께 사는 어른 등으로 넓게 말하고, 실제 가정 이야기를 발표시키지 않는다. 가족과의 관계가 위험한 학생도 있을 수 있으니, 경계 문장은 안전한 관계를 전제로 하고 위험할 때는 상담 선생님·1388·112에 도움을 청한다고 함께 알린다.',
      }),
      M({
        id: 'activity.reflect', type: 'activity', title: '나와 타인을 소중히 하는 어른',
        method: '성찰 글 “나와 타인을 소중히 하는 어른”', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문단 틀을 보고 쓴다.', base: '자기 돌봄·타인 존중·도움 청하기를 틀 없이 쓰고 기준표로 점검한다.', challenge: '칸마다 기준이 하나 더 붙고, 마지막 칸에 1년 뒤 나에게 확인할 질문을 덧붙인다.' },
        activity: {
          title: '성찰 글 세 칸', tool: 'rubric-writing',
          teacher: '"\'나와 타인을 소중히 하는 어른\'은 어떤 모습일까요? 멋진 말보다 내가 실제로 할 행동을 써 봐요." 쓰기 전에 기준표를 함께 읽는다. "힘들어도 남에게 기대지 않겠다"고 쓴 학생에게 "도움을 청하는 것과 남에게 짐이 되는 것은 같은 걸까요?"라고 묻는다. 남에게 보여 주는 글이 아니라 1년 뒤의 내가 읽을 글이라는 점, 실명이나 연락처는 쓰지 않는다는 점을 짚는다.',
          task: '자기 돌봄, 타인 존중, 도움 청하기를 차례로 써서 성찰 글을 완성해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('자립한 뒤 나를 돌보는 방법을 2~3문장으로 쓰세요.', '졸업 뒤 바쁜 생활 속에서 나는 어떻게 나를 돌볼까요?', ['구체적인 행동을 썼다', '언제 할지 썼다', '내가 지킬 수 있는 크기다'], { min: 40, max: 300, sent: [2, 3], must: [['잠', '쉬', '운동', '식사', '돌보', '시간']], starter: '나는 졸업 뒤 ~마다 ~을 하며 나를 돌보겠다.', plus: '지키지 못한 날 되돌릴 방법을 썼다', d: 0.35 }),
            RWQ('가족과 새 공동체 사람들을 존중하는 방식을 2~3문장으로 쓰세요.', '가족·룸메이트·동료를 존중하면서 내 경계도 지키려면 어떻게 말하고 행동할까요?', ['존중하는 행동을 썼다', '내 경계를 말하는 방법을 썼다', '상대를 깎아내리는 말이 없다'], { min: 40, max: 300, sent: [2, 3], must: [['존중', '경계', '고마', '말']], starter: '나는 가족과 새 공동체 사람들에게 ~', plus: '갈등이 생겼을 때의 방법을 썼다', d: 0.4 }),
            RWQ('힘들 때 도움을 청하는 나의 방법을 2~3문장으로 쓰세요.', '힘든 일이 생기면 누구에게, 어떻게 도움을 청할까요?', ['기댈 사람·곳을 관계 이름으로 썼다', '도움을 청하는 것도 자립이라는 생각을 담았다', '실명·연락처를 쓰지 않았다'], { min: 40, max: 300, sent: [2, 3], must: [['도움', '연락', '청하', '기대']], starter: '힘든 일이 생기면 나는 먼저 ~에게 ~', plus: '1년 뒤 나에게 확인할 질문을 하나 덧붙였다', d: 0.4, more: { conclude: '나를 돌보고, 타인을 존중하고, 필요할 때 도움을 청하는 것 — 셋이 함께 있어야 자립한 어른이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '1년 뒤의 나에게 확인하고 싶은 질문 하나를 쓰세요.' }] },
      }),

      M({
        id: 'wrap.future', type: 'wrap', title: '1년 뒤 나의 장면',
        method: '1년 뒤 나의 장면 이어 보기', tool: 'story', minutes: 7,
        levels: { easy: '교사가 첫 장면 칸을 함께 채워 보이고, 나머지 두 칸을 채운다.', base: '세 장면 칸(아침·저녁·지친 주말)에 존중과 돌봄의 행동 카드를 놓는다.', challenge: '어려움이 생긴 장면과 도움을 청하는 장면을 출구 짧은 글로 더해 쓴다.' },
        wrap: {
          teacher: '"1년 뒤, 새 공동체에서 지내는 나를 떠올려 봐요. 아침, 저녁, 지친 주말에 나는 무엇을 하고 있을까요?" 장면 칸에 카드를 놓은 뒤 출구 질문으로 넘어간다. \'혼자 참고 연락을 끊는다\'를 지친 주말 칸에 놓은 학생에게 "그 주말의 나에게 오늘의 내가 무엇을 권하고 싶나요?"라고 묻는다. 지친 날 도움을 청하는 장면도 잘 지내는 1년의 한 장면이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'match', title: '1년 뒤 나의 장면(상상)', slots: [{ id: 'm1', label: '아침, 새 기숙사에서' }, { id: 'm2', label: '수업·일이 끝난 저녁' }, { id: 'm3', label: '마음이 지친 주말' }], cards: [{ id: 'hi', text: '룸메이트와 서로 인사한다', motif: 'sun' }, { id: 'rest', text: '하루를 돌아보며 일찍 쉰다', motif: 'moon' }, { id: 'call', text: '믿는 사람에게 연락한다', motif: 'house' }, { id: 'cut', text: '혼자 참고 연락을 끊는다', motif: 'cloud' }] }, prompt: '1년 뒤 장면 칸마다 존중과 돌봄의 행동 카드를 놓으세요.', target: { match: { m1: 'hi', m2: 'rest', m3: 'call' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['독립은 혼자 다 해결하는 것이다', '도움을 청하는 것도 자립의 일부다', '가족과의 갈등은 집을 떠나면 끝난다'], answer: 1, difficulty: 0.15, explain: '자립한 어른도 필요할 때 도움을 청해요. 그것이 나를 지키는 힘이에요.' },
            { type: 'short', prompt: '1년 뒤 어려움이 생긴 장면 하나와, 그때 도움을 청하는 나의 모습을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '1년 뒤 나의 장면',
          items: [
            { type: 'table', prompt: '1년 뒤 나의 하루를 상상해 쓰세요.', columns: ['장면', '내가 하는 존중·돌봄 행동'], cells: [['아침', ''], ['저녁', ''], ['지친 주말', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '도움을 청하는 것도 ___의 일부다.', answer: '자립' },
          ],
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '자립 준비 관계 점검',
        method: '자립 준비 관계 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 알맞은 항목 세 개를 먼저 함께 읽고 표시한다.', base: '항목 7개 가운데 알맞지 않은 2개를 빼고 표시한다.', challenge: '알맞은 항목 가운데 졸업 전에 할 것 하나를 골라 출구 질문에 첫 행동을 쓴다.' },
        wrap: {
          teacher: '"자립을 앞두고 관계를 위해 준비할 것을 점검해 봐요. 알맞은 것만 표시해요." \'도움 청하는 것을 부끄러워한다\'에 표시한 학생에게 "오늘 지지망 지도에서 가지가 많은 사람은 어떤 사람이었나요?"라고 묻는다. 졸업 전에 할 항목 하나를 골라 이번 주에 할 수 있는 첫 행동으로 줄이게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '자립 준비 관계 점검', items: [{ id: 'who', text: '힘들 때 연락할 사람을 정해 둔다' }, { id: 'thanks', text: '가족에게 고마움을 표현한다' }, { id: 'rule', text: '새 공동체의 생활 규칙을 미리 알아본다' }, { id: 'shame', text: '도움 청하는 것을 부끄러워한다' }, { id: 'cut', text: '갈등이 생기면 연락을 끊는다' }, { id: 'care', text: '나를 돌보는 시간을 일정에 넣는다' }, { id: 'help', text: '1388·112·119 같은 도움받을 곳을 알아 둔다' }] }, prompt: '자립 준비에 알맞은 관계 행동만 표시하세요.', target: { checklist: ['who', 'thanks', 'rule', 'care', 'help'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '새 룸메이트와 생활 습관이 달라 불편할 때 알맞은 첫 행동은?', options: ['참다가 한꺼번에 말한다', '내 불편을 차분히 말하고 규칙을 함께 정한다', '말없이 방을 옮긴다'], answer: 1, difficulty: 0.15, explain: '불편을 일찍, 차분히 말하고 함께 규칙을 정하면 관계도 나도 지킬 수 있어요.' },
            { type: 'short', prompt: '졸업 전에 할 항목 하나와 이번 주에 할 첫 행동을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '자립 준비 관계 점검',
          items: [
            { type: 'check', prompt: '졸업 전에 해 볼 것에 표시하세요.', options: ['연락할 사람 정하기', '가족에게 고마움 표현하기', '나를 돌보는 시간 정하기', '도움받을 곳 알아 두기'] },
            { type: 'short', prompt: '이번 주에 할 첫 행동을 쓰세요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
