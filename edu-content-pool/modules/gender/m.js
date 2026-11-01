/* 창체 법정교육 양성평등·성교육 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 gender 중.
 * 근거: 교육기본법 제17조의2, 양성평등기본법 제30·36조, 성폭력방지법 제5조(시행령 제2조), 성매매피해자보호법 제5조, 가정폭력방지법 제4조의3, 학교보건법 제9조
 *   — 교육부 지침 연 15시간(성폭력·가정폭력 예방교육 각 매년 1회 1시간 이상 포함), 교육부 「학교 성교육 표준안」 중학교 범위(research-mandatory §1·§2).
 *   주제마다 source 는 체계도에 있다. 법 조항 번호는 근거 파일에 있는 것만 쓰고, 처벌·형량은 쓰지 않는다.
 * 주제 24개 × 7모듈 = 168모듈. 7학년 8주제(2차 성징·외모·고정관념·경계·성희롱 범위·평등한 가정·고백과 거절·사진 안전),
 *   8학년 8주제(건강한 교제·동의·데이트폭력·미디어·2차 피해·딥페이크·가정폭력 고리·그루밍), 9학년 8주제(자기결정권·구별과 지원·스토킹·온라인 혐오·
 *   성차별 구조·진로·친구의 가정폭력 이야기·성매매와 인권).
 * 지킨 틀(사용자가 발행 전 사람이 직접 보기로 한 민감 영역):
 *   - 내용은 체계도 concepts 와 「학교 성교육 표준안」 수준. 성적 행위를 묘사하지 않는다(장면은 '스킨십'·'몸 사진' 정도의 낱말로만, 자세히 쓰지 않음).
 *   - 피해 경험·개인 연애·몸 상태를 묻지 않는다. 채점 문항과 글쓰기는 늘 가상 인물(가명 두 글자)이고, 스스로 점검은 '할 수 있다·안다' 같은 앎·다짐만 묻는다.
 *   - 동의·성적 자기결정권: 자유롭고 분명하며 언제든 철회할 수 있는 동의, 침묵·압력·힘의 차이로 얻은 대답은 동의가 아니다.
 *   - 피해자 탓 문장은 함정 카드·틀린 보기·'통념' 칸으로만 나오고 늘 바로잡는다(why·explain). 잘못은 늘 가해·요구한 쪽에 있다.
 *   - 성별 고정관념·외모 평가를 정답으로 만들지 않는다. 특정 집단(성소수자 등)을 비하하지 않고 논쟁이 있는 가치 문제의 정답을 정하지 않는다.
 *   - 도움 받을 곳은 체계도(계획 brief·concepts)에 있는 것만: 보호자·담임·상담·보건 선생님·Wee 클래스·학교·경찰·전문 지원 기관.
 *     전화번호는 체계도 이 학년군에 없으므로 쓰지 않고 '[학교가 확인해 넣는 지역 상담 번호]' 칸으로 둔다.
 *   - 자료·그래프 수치는 모두 가상 설문·가상 기록이고 화면에 '가상'이라고 밝힌다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 없는 사실·수칙 문장. 확인처를 함께 적는다.
 *   - g7-puberty-mind.activity.body-change: 2차 성징 변화 목록(목소리가 낮아지거나 굵어짐·여드름과 땀 냄새·가슴 발달·어깨가 넓어짐·허리와 엉덩이 둘레 변화·키가 빨리 자람),
 *     "성호르몬이 몸에 신호를 보내 변화가 시작된다", "시작 나이·순서·정도는 사람마다 다르다" — 교육부 「학교 성교육 표준안」 중학교 2차 성징 단원, 질병관리청 국가건강정보포털(사춘기)
 *   - g7-puberty-mind.intro.stage-chart: 막대그래프 값(변화가 처음 느껴진 학년 30명)은 수업용 가상 자료 — 화면에 '가상'으로 밝힘(근거 수치 아님)
 *   - g7-puberty-mind.activity.curiosity-dilemma: "성적 호기심은 사춘기에 자연스럽다", "성인용 영상은 실제 관계·몸과 다르게 꾸며져 있다", 믿을 만한 정보원(보건 선생님·학교 성교육 자료) — 교육부 「학교 성교육 표준안」 중학교 성적 호기심·성 정보 단원
 *   - g7-puberty-mind.wrap.mood-log: 2분 호흡(1분씩 2번)은 수업 연습 약속 값(근거 수치 아님) — 화면에 '우리 반 연습 약속'으로 밝힘
 *   - g7-body-image.intro.filter-compare·activity.ad-analysis: "광고·SNS 사진은 보정(빛·피부·몸 선 고치기)을 거쳐 실제 몸과 다를 수 있다" — 한국언론진흥재단 미디어 리터러시 교육 자료, 교육부 「학교 성교육 표준안」 중학교 신체 이미지 단원
 *   - g7-body-image.activity.ad-analysis: 광고 문구 20개 분류 값(40%·35%·25%)과 광고 문구는 수업용 가상 자료 — 화면에 '가상'으로 밝힘
 *   - g7-body-image.intro.comment-scan·activity.rewrite-talk: "외모 칭찬도 몸을 평가하는 말이라 듣는 사람에게 부담이 될 수 있다" — 교육부 「학교 성교육 표준안」 중학교 신체 존중 단원
 *   - g7-body-image.activity.budget-pressure: 물건 값(원)은 수업용 가상 값, "다이어트 젤리·근육 보충제 광고가 빠른 몸 변화를 약속하는 것은 과장일 수 있다" — 식품의약품안전처 부당 광고 안내
 *   - g7-stereotype-school.intro.club-data: 동아리 지원자 수(로봇·요리·댄스·축구 × 남·여)는 수업용 가상 자료 — 화면에 '가상'으로 밝힘
 *   - g7-stereotype-school 전반: "의도하지 않은 말·관행도 기회를 막으면 차별이 될 수 있다"(간접 차별) — 국가인권위원회 차별 판단 안내, 양성평등기본법 제30·36조 원문(교육·평등 문화)
 *   - g7-boundary-voice 전반: 경계(몸·마음·정보)와 성적 자기결정권의 뜻풀이, "좋다고 했다가도 마음을 바꿀 수 있다(철회)", 분명한 거절 요소(눈 맞춤·짧은 말·반복) — 교육부 「학교 성교육 표준안」 중학교 경계·동의 단원
 *   - g7-boundary-voice.intro.voice-meter: 리듬 블록 두 가지는 말투를 견주는 비유(근거 수치 아님)
 *   - g7-boundary-voice.wrap.help-route: 도움받을 사람(담임·상담·보건 선생님·보호자)과 차례 — 계획 brief, 교육부 학생 상담 안내(Wee 클래스)
 *   - g7-harassment-range 전반: 성희롱의 뜻풀이("말·시선·접촉·온라인에서 상대가 원치 않는 성적인 말과 행동으로 불쾌감·모욕감을 주는 것"), "농담이었다는 의도와 상관없이 문제가 될 수 있다" — 양성평등기본법 원문(성희롱 정의), 교육부 「학교 성교육 표준안」 중학교 성희롱·성폭력 단원
 *   - g7-harassment-range.intro.myth-check: 통념 바로잡기 문장("놀라거나 무서우면 그 자리에서 말하기 어렵다·늦게 말해도 된다", "잘못은 옷차림이 아니라 한 사람에게 있다", "보고 웃거나 퍼 나르면 동조가 된다") — 여성가족부 성폭력 2차 피해 방지 안내, 「학교 성교육 표준안」
 *   - g7-harassment-range.activity.help-order·wrap.support-map: 도움받는 차례(믿는 어른에게 말하기 → 어른과 함께 기록 → 학교 상담(Wee 클래스) → 전문 기관 연결 → 지원받으며 생활) — 교육부 학교 성희롱·성폭력 사안 처리 안내. 지역 상담 기관 번호는 학교가 확인해 넣는다
 *   - g7-harassment-range.activity.groupchat-dilemma: "알릴 때 캡처를 다른 방에 퍼뜨리지 않고 믿는 어른에게만 보인다" — 여성가족부 디지털 성범죄 피해 지원 안내
 *   - g7-family-equal.intro.chore-chart: 가상 4인 가족 하루 집안일 시간(분) 값은 수업용 가상 자료 — 화면에 '가상'으로 밝힘(근거 수치 아님)
 *   - g7-family-equal.intro.family-forms·activity.case-analysis: 가정폭력의 모습(신체·말·위협·방임·목격), "가정폭력을 보는 것(목격)도 아이에게 피해가 된다", 갈등과 폭력을 가르는 기준(두려움·되풀이·통제) — 가정폭력방지법 원문(정의), 여성가족부 가정폭력 예방교육 표준 자료
 *   - g7-family-equal.activity.chore-plan: 나이에 맞는 집안일 예(초4 수저 놓기·빨래 개기, 불·칼 쓰는 일은 어른과 함께) — 교육부 실과 교육과정(가정생활), 학교 안전교육 생활안전 자료
 *   - g7-family-equal.activity.safe-dilemma·wrap.help-steps: 도움 요청 차례(안전한 곳 → 믿는 어른 → 학교 상담(Wee 클래스) → 신고·상담 번호), "친구가 위험하면 비밀보다 안전이 먼저" — 여성가족부·교육부 가정폭력 예방교육 자료, 지역 상담 번호는 학교가 확인
 *   - g7-crush-reject 전반: "공개 고백은 받는 사람에게 거절하기 어려운 압력이 될 수 있다", "거절을 들은 뒤 계속 조르거나 소문내는 것은 상대의 결정을 존중하지 않는 행동이다", 감정(설렘·불안·질투·민망함·서운함)을 다루는 방법 — 교육부 「학교 성교육 표준안」 중학교 건강한 관계(고백과 거절) 단원
 *   - g7-photo-safety 전반: "동의 없는 촬영·사진 공유(전달 포함)·몸 사진 요구는 디지털 성폭력이 될 수 있다", "퍼진 사진은 완전히 되돌리기 어렵다", "삭제·신고를 요청할 수 있다" — 성폭력처벌법 원문(카메라 등 이용 촬영·유포), 여성가족부 디지털성범죄피해자지원센터 안내
 *   - g7-photo-safety.activity.request-dilemma: 협박을 받으면 대화 기록(화면)을 지우지 말고 남겨 보호자·선생님께 알린다, "사진을 보낸 사람이 아니라 요구·협박한 사람의 잘못" — 여성가족부 온라인 그루밍·디지털성범죄 예방 안내, 경찰청 사이버수사 안내
 *   - g7-photo-safety.intro.share-chain: 단톡방 단계별 본 사람 수는 수업용 가상 자료 — 화면에 '가상'으로 밝힘(근거 수치 아님)
 *   - g8-healthy-dating 전반: 건강한 교제의 신호(서로의 친구·가족·공부 시간 존중, 싫다는 말 존중, 서로 같은 규칙)와 위험 신호(연락 강요·친구 만남 막기·휴대폰 검사·모든 비밀 공유 요구) — 교육부 「학교 성교육 표준안」 중학교 건강한 이성·동성 관계 단원, 여성가족부 데이트폭력 예방 자료
 *   - g8-healthy-dating.intro.feeling-scale: 관계마다 기대하는 것 설문 비율(%)은 수업용 가상 자료 — 화면에 '가상'으로 밝힘(근거 수치 아님)
 *   - g8-healthy-dating.activity.time-balance: 가상 인물 하람의 하루 시각은 수업용 가상 일과(권장 시간 기준 아님)
 *   - g8-consent-talk 전반: 동의의 세 조건(자유로운 의사·분명한 표현·언제든 철회 가능), "침묵·망설임·압력·분위기로 얻은 대답은 동의가 아니다", "사귀는 사이에도 매번 동의가 필요하다",
 *     "잠들었거나 판단할 수 없는 상태에서는 동의할 수 없다" — 교육부 「학교 성교육 표준안」 중학교 건강한 관계와 동의 단원, 여성가족부 성평등 교육 자료(동의)
 *   - g8-consent-talk.intro.tea-analogy: '차 권하기' 비유는 널리 쓰이는 동의 교육 비유를 수업용으로 옮긴 것 — 출처 표기 필요 여부를 교육부 표준안·교사용 자료에서 확인
 *   - g8-dating-violence 전반: 데이트폭력의 신호(잦은 연락·위치 확인 요구, 휴대폰 검사 같은 디지털 감시, 친구 만남 막기, 화내며 위협하기)와 "통제·집착은 사랑의 증거가 아니라 폭력의 신호일 수 있다",
 *     "점점 심해지는 흐름을 보인다", "연인 사이 일이라도 주변이 도움을 청할 수 있다" — 교육부 「학교 성교육 표준안」 중학교 데이트폭력 단원, 여성가족부·경찰청 데이트폭력 예방 안내
 *   - g8-dating-violence.intro.myth-poll: 의견 막대값은 수업용 가상 설문 — 화면에 '가상'으로 밝힘(근거 수치 아님)
 *   - g8-dating-violence.wrap.help-map·activity.campaign-design: 도움 경로(믿는 어른·담임·상담 선생님(Wee 클래스)·보건 선생님·지역 상담 기관) — 지역 상담 기관 이름·번호는 학교가 확인해 넣음
 *   - g8-media-gender 전반: 성 상품화(몸을 상품 팔기에 쓰는 표현)·대상화(사람을 몸의 부분으로 잘라 보이는 표현)의 뜻풀이, "미디어 속 고정관념이 생각과 선택에 영향을 줄 수 있다" — 양성평등기본법 제30조 원문, 교육부 「학교 성교육 표준안」 중학교 미디어 단원, 시청자미디어재단 미디어 리터러시 자료
 *   - g8-media-gender.activity.question-ladder: 미디어에 던지는 다섯 질문(누가 만들었나·누구를 노렸나·무엇이 빠졌나·누가 이득인가·어떤 기분이 드나)은 미디어 리터러시 교육에서 널리 쓰는 핵심 질문을 수업용으로 옮긴 것 — 시청자미디어재단 자료에서 표현 확인
 *   - g8-media-gender.wrap.viewer-choice: "'관심 없음'·신고·피드백 같은 시청 행동이 추천 목록에 반영된다" — 각 영상 플랫폼 도움말(추천 설정), 방송통신위원회 안내(플랫폼마다 메뉴 이름이 다름)
 *   - g8-media-gender.intro.role-count: 광고 10편 장면 수는 수업용 가상 자료 — 화면에 '가상'으로 밝힘
 *   - g8-second-harm 전반: 2차 피해의 예(피해자 탓하기·누구인지 추측하고 캐묻기·소문 전하기·사진이나 신상 퍼뜨리기)와 지지하는 말("네 잘못 아니야", "말해 줘서 고마워", "말하고 싶은 만큼만 말해도 돼"),
 *     "잘못은 늘 가해자에게 있다", "알릴 때도 피해자의 이름·사진·캡처를 퍼뜨리지 않는다" — 여성가족부 성폭력 2차 피해 방지 안내, 교육부 「학교 성교육 표준안」 중학교 성폭력 예방 단원
 *   - g8-second-harm.activity.support-letter·wrap.route-check: "학교는 사안을 다룰 때 피해 학생의 정보를 지키도록 되어 있다" — 성폭력방지법·학교 사안 처리 안내 원문(교육부)
 *   - g8-second-harm.intro.rumor-graph: 10분마다 두 배로 느는 소문 수는 수업용 가상 자료 — 화면에 '가상'으로 밝힘
 *   - g8-deepfake 전반: "친구 얼굴을 합성한 성적 편집물은 디지털 성범죄가 될 수 있다", "만든 사람뿐 아니라 퍼뜨린(전달한) 사람도 책임이 따를 수 있다",
 *     "저장·보기·전달이 피해를 키운다", "합성물은 삭제 지원을 요청할 수 있다" — 성폭력처벌법 원문, 여성가족부 디지털성범죄피해자지원센터(삭제 지원) 안내
 *   - g8-deepfake.intro.real-fake: 합성 단서(얼굴 경계가 어색함·빛 방향이 다름·배경이 일그러짐·귀걸이 등 작은 부분이 흐림) — 방송통신위원회·한국지능정보사회진흥원 딥페이크 구별 안내(단서만으로는 구별이 어렵다는 점 함께)
 *   - g8-deepfake.activity.harm-chain: 만든 사람 1명 → 전달 5명 → 본 사람 50명은 수업용 가상 기록 — 화면에 '가상'으로 밝힘
 *   - g8-deepfake.wrap.response-order: 발견했을 때의 차례(전달하지 않기 → 저장하지 않기 → 어른·학교에 알리기 → 삭제 지원 요청) — 여성가족부 디지털성범죄피해자지원센터·교육부 디지털 성범죄 대응 안내
 *   - g8-family-cycle 전반: 가정폭력의 모습(신체·정서·방임), "정서 폭력(위협·모욕·무시)과 방임(돌보지 않음)도 가정폭력이다", "훈육이라도 때리거나 위협해 다치게 하는 것은 괜찮지 않다",
 *     "가정폭력을 본(목격한) 아이도 피해를 입는다" — 가정폭력방지법·아동복지법·아동학대처벌법 원문, 여성가족부·보건복지부·아동권리보장원 안내
 *   - g8-family-cycle.intro.cycle-chart: 긴장 → 폭발 → 화해(잠잠)가 되풀이되는 '폭력의 고리' 설명, 꺾은선 값(한 달 긴장 정도)은 가상 자료 — 여성가족부 가정폭력 예방교육 자료(폭력의 주기)
 *   - g8-family-cycle.activity.cycle-case: "폭력을 본 아이가 반드시 폭력을 쓰게 되는 것은 아니다", "상담·대화 방법을 배우면 고리를 끊을 수 있다" — 여성가족부 가정폭력 예방교육 자료, 한국건강가정진흥원 가족상담 안내
 *   - g8-family-cycle.wrap.help-order: 도움 요청 차례(안전한 곳 → 믿는 어른 → 학교 상담(Wee 클래스) → 지역 상담 번호) — 교육부 Wee 클래스 안내, 여성가족부 가정폭력 피해 지원 안내
 *   - g8-grooming 전반: 온라인 그루밍의 단계(칭찬·친해지기 → 고민 들어 주기 → 선물·보상 → 비밀 약속 → 사진·만남 요구), 경고 신호 문장("우리 둘만의 비밀", "부모님은 몰라도 돼"),
 *     "청소년은 보호받아야 할 대상이고 스스로 보냈어도 피해자의 잘못이 아니다", "대가를 노린 선물은 갚을 책임이 없다", 대응(거절·차단·대화 기록 남기기·보호자와 학교에 알리기)
 *     — 청소년성보호법 원문, 여성가족부 온라인 그루밍 예방 안내, 성매매피해자보호법 제5조 예방교육 자료(근거 약함: research-mandatory 는 성매매 예방교육 항목명만)
 *   - g8-grooming.activity.reward-trap: 거래 기록의 물건·금액은 수업용 가상 값(근거 수치 아님)
 *   - g8-grooming.wrap.block-check: 계정 설정 이름(친구 신청 받기·위치 공개·프로필 공개 범위)은 앱마다 다름 — 방송통신위원회·한국지능정보사회진흥원 청소년 SNS 안전 안내
 *   - g9-self-determination 전반: 성적 자기결정권을 '내 권리 · 다른 사람의 권리 존중 · 책임' 세 갈래로 설명, "동의는 자유롭고 분명해야 하며 언제든 철회할 수 있다",
 *     "나이·지위·선물·판단하기 어려운 상태처럼 힘이 기운 상황의 대답은 자유로운 동의가 아니다", "잠들었거나 판단하기 어려운 상태에서는 동의할 수 없다"
 *     — 교육부 「학교 성교육 표준안」 중·고 성적 자기결정권·동의 단원, 성폭력방지법 제5조 예방교육 자료(근거 약함: research-mandatory §2 는 주제명만)
 *   - g9-self-determination.intro.power-scale: 관계 6쌍의 '힘 차이' 점수(0~5)는 수업용 가상 척도 — 화면에 '가상'으로 밝힘(근거 수치 아님)
 *   - g9-crime-support.intro.case-sort·activity.guide-booklet: 세 갈래 구별 기준(성희롱 = 성적인 말·행동으로 상대에게 굴욕감·불쾌감을 줌, 성폭력 = 동의 없는 성적 접촉·강요,
 *     디지털 성범죄 = 동의 없는 촬영·유포·합성·몸 사진 요구 등)과 사례 분류 — 성폭력방지법·성폭력처벌법·양성평등기본법(성희롱 정의) 원문, 여성가족부 성희롱·성폭력 예방 교육 자료
 *   - g9-crime-support.activity.responsibility-dilemma·wrap: "나이가 어려도 책임이 따르고 학교의 조치·법의 절차를 받을 수 있다", "말리지 않고 함께 찍거나 퍼뜨려도 책임이 생길 수 있다" — 소년법·학교폭력예방법·성폭력처벌법 원문, 교육부 학교 성희롱·성폭력 사안 처리 안내
 *   - g9-crime-support.intro.myth-data·activity.support-flow·activity.guide-booklet: "알린 학생의 이야기와 신원은 비밀로 지켜지고 함부로 알리지 않게 되어 있다", "피해자가 원하는 지원을 함께 정한다",
 *     지원 차례(믿는 어른 → 학교(담임·상담) → 보호자 → 경찰·전문 지원 기관 → 상담·의료·법률 지원) — 성폭력방지법(비밀 엄수)·성폭력처벌법 원문, 여성가족부 성폭력 피해자 지원 안내(해바라기센터·성폭력상담소), 교육부 사안 처리 안내
 *   - g9-crime-support.intro.myth-data: 신고를 망설이는 이유 막대그래프 값은 수업용 가상 설문 — 화면에 '가상'으로 밝힘
 *   - g9-stalking 전반: "거절당한 뒤에도 계속 연락하고, 기다리고, 따라가는 행동이 되풀이되면 스토킹이 될 수 있다", 관심과 스토킹을 가르는 기준(상대의 거절·되풀이·두려움) — 스토킹범죄처벌법 정의 조항 원문, 경찰청·여성가족부 스토킹 예방 안내
 *   - g9-stalking.intro.line-scale: 행동 8개의 불안 점수(1~5)는 수업용 가상 학급 평가 — 화면에 '가상'으로 밝힘
 *   - g9-stalking.activity.emotion-plan: 호흡 1분씩 3번(쉬기 10초)은 우리 반 연습 약속 값(근거 수치 아님), 감정 다루기 차례(멈추기 → 숨쉬기 → 감정 이름 붙이기 → 할 일 고르기) — 한국청소년상담복지개발원·국가정신건강정보포털 감정 조절 안내
 *   - g9-stalking.wrap.sns-time: 준호의 SNS 확인 시각은 가상 기록
 *   - g9-online-hate 전반: "성별을 묶어 깎아내리는 표현·밈은 되풀이될수록 차별을 당연하게 만들고 확산된다", 대항 표현(혐오 표현에 차분히 맞서는 말)이 확산을 줄이는 데 도움이 될 수 있다 — 국가인권위원회 혐오표현 대응 안내·「혐오표현 리포트」, 방송통신위원회 인터넷 윤리 교육 자료
 *   - g9-online-hate.intro.meme-origin: 표현 형식('○○충'·'○○녀/○○남'·'역시 ○자는' 등)과 그 뜻 풀이 — 실제 혐오 표현 원문은 쓰지 않았다. 국가인권위원회 안내로 표현 풀이를 확인
 *   - g9-online-hate.activity.comment-dilemma: 플랫폼 신고·숨김 기능 이름은 앱마다 다름 — 방송통신위원회·각 플랫폼 도움말
 *   - g9-online-hate.intro.spread-data: 시간별 비하 댓글 수는 수업용 가상 기록 — 화면에 '가상'으로 밝힘
 *   - g9-structure-law.activity.law-purpose: 양성평등기본법 목적을 쉬운 말로 옮긴 문장("성별 때문에 차별받지 않고, 사회 모든 영역에 평등하게 참여하고 대우받으며, 그 권리를 국가와 사회가 함께 지킨다")과 핵심어 —
 *     법제처 국가법령정보센터 양성평등기본법 제1조(목적)·제2조(기본이념) 원문(근거 파일에는 제30·36조와 교육기본법 제17조의2 근거만 있음)
 *   - g9-structure-law.activity.law-purpose: "학교에서도 양성평등교육을 한다" — 교육기본법 제17조의2·양성평등기본법 제36조 원문
 *   - g9-structure-law 전반: 유리천장·경력 단절·돌봄 부담의 뜻풀이, 돌봄 휴가·유연근무·복귀 지원 같은 제도 이름 — 고용노동부 일·가정 양립 안내, 여성가족부 경력단절 예방 안내(제도 이름·조건은 바뀔 수 있음)
 *   - g9-structure-law.intro.ladder-chart: 직급별 여성 직원 비율은 수업용 가상 회사 자료(실제 통계 아님) — 화면에 '가상'으로 밝힘
 *   - g9-structure-law.wrap.equal-budget: 가상 가족 돌봄 예산과 물건 값은 수업용 가상 값
 *   - g9-career-free.activity.interest-chart: 흥미 영역 이름(만들기·탐구하기·돕기·표현하기·정리하기)과 점수는 수업용 가상 점검 결과 — 실제 진로 검사 도구의 영역·점수가 아님(화면에 '가상'으로 밝힘). 학교 진로 검사(커리어넷 등)와 섞어 쓸 때는 진로 선생님이 확인
 *   - g9-career-free.wrap.roadmap: 진로 경로(중3 진로 체험 → 고등학교 → 대학·직업 교육 → 첫 직업)는 단순화한 예시 — 고등학교 유형·직업 교육 경로는 진로진학상담 선생님·커리어넷 안내로 확인
 *   - g9-career-free.wrap.rolemodel-card: 롤모델 카드는 가상 직업인으로 쓴다. 실존 인물을 쓰려면 교사가 확인한 자료(공공기관·언론 인터뷰)만
 *   - g9-family-friend 전반: "때리지 않아도 위협·겁주기·필요한 돌봄을 하지 않는 것도 가정폭력이 될 수 있다", 갈등과 폭력을 가르는 기준(두려움·되풀이·통제) — 가정폭력방지법 정의 조항·아동복지법(아동학대 정의) 원문, 여성가족부 가정폭력 예방교육 자료
 *   - g9-family-friend.activity.disclose-dilemma·activity.listen-script·activity.support-guide: "안전과 관련된 비밀은 지키지 않고 믿을 만한 어른에게 잇는다", 털어놓은 친구에게 할 말(들어 줘서 고마워·네 잘못이 아니야)·하지 말 말(캐묻기·소문내기·별일 아니라고 하기) — 여성가족부·아동권리보장원 아동학대·가정폭력 주변인 안내
 *   - g9-family-friend.wrap.help-route: 긴급할 때 행동("지금 위험하면 안전한 곳으로 피하고 가까운 어른·경찰에 바로 알린다") — 경찰청·여성가족부 가정폭력 긴급 대응 안내. 지역 상담 번호는 학교가 확인해 넣는다
 *   - g9-family-friend.intro.conflict-line: 장면별 두려움·되풀이·통제 점수와 경계선(6점)은 수업용 가상 값 — 화면에 '가상'으로 밝힘
 *   - g9-prostitution 전반: "성매매는 사람의 몸과 성을 돈으로 사고파는 인권 침해다", "청소년은 보호받아야 할 대상이고, 알리면 보호와 지원을 받을 수 있다", "돈·선물을 받았어도 피해 청소년의 잘못이 아니다" — 성매매피해자보호법(제5조 예방교육)·청소년성보호법 원문, 여성가족부 성매매 예방교육 자료
 *   - g9-prostitution.activity.lure-dilemma·intro.lure-ads·activity.money-trap: 유인 신호(쉬운 고액·비밀 유지·만남 요구·선입금 뒤 빚 만들기·사진 요구) — 여성가족부 청소년 성매매·온라인 그루밍 예방 안내, 경찰청 사이버 성범죄 예방 안내
 *   - g9-prostitution.intro.lure-ads: 안전한 아르바이트 공고의 표시(근로계약서 작성·보호자 동의서·일한 시간만큼 지급) — 고용노동부 청소년 근로 안내(청소년 근로권익 자료)
 *   - g9-prostitution.activity.money-trap: 금액(선입금 5만 원·'이자' 등)과 용돈 3만 원은 수업용 가상 값
 *   - g9-prostitution.activity.lure-dilemma: "증거(대화 화면·계정 이름·날짜)를 지우지 말고 남긴 뒤 알린다" — 경찰청 사이버수사국·여성가족부 디지털성범죄피해자지원 안내
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|act|wrap>.<이름>' — 'act.' 는 id 에서 'activity.' 로 바뀐다(체계도 id 와 같음)
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `gender.m.${topic}.${sid.replace(/^act\./, 'activity.')}`, schema: 'edu-module.v1', type: ({ intro: 'intro', act: 'activity', activity: 'activity', wrap: 'wrap' })[sid.split('.')[0]], domain: 'gender', band: '중', topic: `gender.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 분류판(sortboard 글 카드 모드): mode 없이 slots·cards
  const SBX = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글, who?, motif?]] — 칸 하나에 카드 한 장. who 를 주면 말풍선 인물(story fill)
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => Object.assign({ id: `f${i + 1}`, label: p[0] }, p[2] ? { who: p[2] } : {}, p[3] ? { motif: p[3] } : {})), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 출구 질문 교구 문항: 조각 → { type: 'tool', tool, prompt, options, target }
  const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);
  // 스스로 점검(timer selfCheck) 출구 질문 — 앎·다짐만 묻는다(겪은 일·몸 상태·연애 경험을 묻지 않는다)
  const SELF = (prompt, title, list, more) => Object.assign({ type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list }, difficulty: 0.1 }, more);

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(갈림 2번)·기본(갈림 3번)·도전(갈림 3번 + 근거 더) 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // good = 도전 단계의 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok } 도전에만 더할 근거
  // 쉬움: 갈림 2번 + 영향(도움·피해) 단서가 고르는 즉시 보임 / 기본: 갈림 3번, 단서는 맞힌 뒤에만 / 도전: 기본 + 견주기 근거 카드
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: R, compare: true, revealAfterCheck: true }, target: { path: paths(good, 3), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), revealAfterCheck: false }, target: { path: paths(good, 2), reasons: ok, some: true } },
      challenge: { prompt: p.challenge, toolOptions: { reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true } },
    },
  }, extra);
  // 도입 시연용 갈림길: 깊이 d 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R, d) => ({ tool: 'dilemma', options: { title, scene: cut(tree, d || 2), reasons: R || [] }, sequence: [{ path: paths(good, d || 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  // ---- 그래프 읽기 ----
  const RD = (prompt, opt, target) => ({ prompt, toolOptions: Object.assign({ mode: 'read' }, opt), target });

  // 도움 경로(체계도 계획·concepts 의 것만). 지역 번호는 학교가 확인해 넣는다.
  const LOCAL = '[학교가 확인해 넣는 지역 상담 번호]';
  const SAFE_NOTE = '가상 인물·가상 장면이다. 학생 자신의 경험·연애·몸 상태를 묻지 않고 "가상 인물이라면"으로만 이야기한다. 수업 중이나 뒤에 걱정을 말하는 학생은 따로 만나 상담 선생님·Wee 클래스로 잇는다. '
    + `지역 상담 번호 칸(${LOCAL})은 수업 전에 학교가 확인해 채운다.`;

  // ==== 01-g7-puberty-mind.js ====
  // ==== 7학년 · 2차 성징과 마음의 변화 (gender.m.g7-puberty-mind) ====
  {
    const M = MK('g7-puberty-mind', [7]);
    const START = [['초등 4학년', 3], ['초등 5학년', 7], ['초등 6학년', 10], ['중학 1학년', 7], ['아직', 3]];
    const FACES = ['몸', '마음', '관계'];
    const FACE_CARDS = [
      { id: 'b1', text: '목소리가 낮아지거나 굵어진다', to: '몸' }, { id: 'b2', text: '키가 갑자기 많이 자란다', to: '몸' }, { id: 'b3', text: '얼굴에 여드름이 난다', to: '몸' },
      { id: 'm1', text: '작은 일에도 짜증이 났다가 금방 풀린다', to: '마음' }, { id: 'm2', text: '혼자 있고 싶은 때가 늘어난다', to: '마음' }, { id: 'm3', text: '성에 대한 궁금증이 생긴다', to: '마음' },
      { id: 'r1', text: '누군가가 자꾸 신경 쓰인다', to: '관계' }, { id: 'r2', text: '친구와 내 몸을 비교하게 된다', to: '관계' }, { id: 'r3', text: '보호자보다 친구 말이 더 크게 들린다', to: '관계' },
    ];
    const PARTS_ALL = ['눈', '귀', '혀', '목', '피부', '가슴', '어깨', '허리'];
    // 호기심 갈림길(깊이 3) — 장면은 '성인용 영상 링크'까지만 말하고 내용은 묘사하지 않는다
    const D1 = { text: '쉬는 시간, 서연에게 친구가 단톡방으로 "성인용 영상인데 궁금하면 봐"라며 링크를 보낸다. 서연은 궁금하기도 하고 꺼림칙하기도 하다.', ask: '서연은 어떻게 할까?', motif: 'house', choices: [
      { id: 'open', text: '궁금하니까 링크를 열어 본다', result: '서연은 보고 나서 기분이 불편하고 머릿속이 복잡해진다.', impact: [{ who: '서연', text: '불편한 기분이 오래 남는다', tone: -1 }], why: '궁금한 마음은 자연스럽지만, 성인용 영상은 실제 관계와 몸을 꾸며 보여 주어 잘못된 정보를 남겨요.', end: '불편한 기분과 잘못된 정보가 남았어요.',
        next: { text: '그날 밤 서연은 영상 속 모습이 진짜 어른들의 관계인지 헷갈린다. 친구는 또 다른 링크를 보낸다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'more', text: '헷갈리니 다른 영상을 더 찾아본다', result: '꾸민 장면을 더 보며 헷갈림이 커진다.', impact: [{ who: '서연', text: '잘못된 생각이 굳어진다', tone: -1 }], why: '꾸민 영상을 더 보면 궁금증이 풀리지 않고 잘못된 생각이 굳어요.', end: '헷갈림이 더 커졌어요.',
            next: { text: '서연은 친구들이 하는 말과 영상 속 모습이 뒤섞여 무엇이 맞는지 모르겠다.', choices: [
              { id: 'askT', text: '보건 선생님께 "궁금한 게 있어요"라고 찾아간다', result: '선생님이 나이에 맞는 사실을 차분히 설명해 준다.', impact: [{ who: '서연', text: '헷갈림이 풀린다', tone: 1 }], ending: '늦었지만 믿을 만한 곳에서 물어봤어요.' },
              { id: 'keep', text: '부끄러우니 아무에게도 묻지 않는다', result: '잘못된 생각을 혼자 안고 지낸다.', impact: [{ who: '서연', text: '궁금증이 풀리지 않는다', tone: -1 }], why: '궁금한 것을 묻는 것은 부끄러운 일이 아니에요. 믿을 만한 어른에게 물어요.' }] } },
          { id: 'stopL', text: '"이제 안 볼래, 보내지 마"라고 답하고 링크를 지운다', result: '친구가 "알았어"라고 한다.', impact: [{ who: '서연', text: '스스로 멈췄다는 마음이 든다', tone: 1 }], end: '더 보지 않고 멈췄어요.',
            next: { text: '서연은 그래도 궁금한 것이 남아 있다.', choices: [
              { id: 'source', text: '학교 성교육 자료와 보건 선생님께 물어본다', result: '사실에 맞는 설명을 듣고 궁금증이 정리된다.', impact: [{ who: '서연', text: '궁금증을 건강하게 푼다', tone: 1 }], ending: '멈춘 뒤 믿을 만한 곳에서 답을 찾았어요.' },
              { id: 'rumor', text: '친구들이 하는 말을 그대로 믿는다', result: '친구들 말도 서로 달라 더 헷갈린다.', impact: [{ who: '서연', text: '헷갈림이 남는다', tone: -1 }], why: '또래의 말은 틀릴 때가 많아요. 확인할 수 있는 곳에서 물어요.' }] } }] } },
      { id: 'close', text: '링크를 닫고 "다른 얘기 하자"며 대화 주제를 바꾼다', result: '단톡방 대화가 다른 이야기로 넘어간다.', impact: [{ who: '서연', text: '불편한 장면을 피했다', tone: 1 }], end: '링크를 열지 않고 주제를 바꿨어요.',
        next: { text: '며칠 뒤에도 서연은 몸과 마음의 변화가 궁금하다.', ask: '궁금한 마음은 어떻게 할까?', choices: [
          { id: 'trust', text: '믿을 만한 정보원(보건 선생님·학교 자료)을 찾는다', result: '보건실에서 사춘기 자료를 함께 읽는다.', impact: [{ who: '서연', text: '궁금증이 정리된다', tone: 1 }], end: '믿을 만한 곳을 찾았어요.',
            next: { text: '보건 선생님이 "더 궁금한 것이 있으면 언제든 와"라고 한다.', choices: [
              { id: 'q', text: '궁금한 것을 쪽지에 적어 다음에 묻기로 한다', result: '서연은 궁금한 것을 묻는 길을 알게 된다.', impact: [{ who: '서연', text: '물어볼 곳이 생긴다', tone: 1 }], ending: '궁금한 것을 물어볼 길이 생겼어요.' },
              { id: 'shame', text: '궁금해한 자신이 이상하다고 생각한다', result: '서연은 괜히 위축된다.', impact: [{ who: '서연', text: '스스로를 탓한다', tone: -1 }], why: '성에 대한 궁금증은 사춘기에 자연스러운 마음이에요. 이상한 것이 아니에요.' }] } },
          { id: 'search', text: '아무 사이트나 검색해 본다', result: '광고와 꾸민 이야기가 섞인 글이 잔뜩 나온다.', impact: [{ who: '서연', text: '무엇이 맞는지 모른다', tone: -1 }], why: '아무 검색 결과는 꾸민 정보가 많아요. 믿을 만한 정보원을 골라요.' }] } },
      { id: 'askNow', text: '"이런 건 선생님께 물어볼래"라며 믿을 만한 곳을 찾기로 한다', result: '친구가 "그래, 나도 궁금했어"라고 한다.', impact: [{ who: '서연과 친구', text: '함께 바른 정보를 찾는다', tone: 1 }], ending: '처음부터 믿을 만한 곳을 골랐어요.' }] };
    const R1 = [{ id: 'r1', text: '성에 대한 호기심은 사춘기에 자연스러운 마음이다' }, { id: 'r2', text: '성 정보는 믿을 만한 곳에서 얻는다' },
      { id: 'r3', text: '궁금해하는 것 자체가 이상한 일이다', why: '호기심은 자연스러워요. 어디서 답을 찾는지가 중요해요.' }, { id: 'r4', text: '친구가 보낸 것이니 봐도 괜찮다', why: '누가 보냈는지보다 그 정보가 사실에 맞는지가 중요해요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '멈춘 길에서는 불편한 기분 없이 궁금증을 풀었다' }, { id: 'r6', text: '계속 본 길에서는 잘못된 생각이 굳어졌다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.stage-chart', {
        title: '변화가 시작된 학년 그래프', method: '가상 학급 그래프에서 변화 시작 시기의 차이 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '막대 3개(초등 5학년·초등 6학년·중학 1학년)만 보이고 값을 그대로 읽어 말한다.', base: '막대 5개에서 가장 이른 학년과 가장 늦은 응답의 범위, 가장 많은 학년을 읽는다.', challenge: '그래프가 말해 주지 못하는 것(그때의 마음 변화·사람마다 다른 순서)을 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"이 반에서 몸의 변화를 처음 느낀 학년은 언제였을까요? 가장 많은 학년은?" 가상의 중1 학급 30명 막대그래프를 띄우고 시연 단추로 \'초등 6학년\'을 고르는 모습을 보인다. 이어서 "\'아직\'이라고 답한 3명은 무엇이 잘못된 걸까요?"라고 묻는다. "늦으면 문제가 있는 것"이라는 말이 나오면 "가장 이른 학년과 가장 늦은 응답 사이가 몇 년이나 되나요? 그 안은 모두 보통이에요"라고 짚는다. 자료는 수업용 가상 설문이고, 내 몸이 어떤지는 말하지 않아도 된다고 먼저 밝힌다.',
          student: '가상 학급 30명의 그래프에서 몸의 변화가 처음 느껴진 학년이 얼마나 다른지 읽고, 늦게 시작한 친구에게 잘못이 있는지 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 중1 학급 30명 — 몸의 변화가 처음 느껴진 때', unit: '명', xLabel: '때', yLabel: '학생 수', data: START, question: '가장 많은 학생이 답한 때는?', choices: START.map((r) => r[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut bar chart of five paper bars of different heights on a classroom board, small paper students of various heights standing beside it', banner: '변화의 속도는 사람마다', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 모두 가상이다. 학생 자신의 변화 시기나 몸 상태를 묻거나 손을 들게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.three-faces', {
        title: '성의 몸·마음·관계 세 측면', method: '말 카드를 성의 세 측면 가지에 나누기', tool: 'mindmap', minutes: 7,
        levels: { easy: '시연 판처럼 가지마다 예시 카드 하나가 붙은 모습을 보고, 남은 카드는 교사가 하나씩 읽어 주며 함께 나눈다.', base: '말 카드 9장을 몸·마음·관계 세 가지에 나누는 시연을 보고, 카드마다 왜 그 가지인지 말한다.', challenge: '두 가지에 걸치는 카드(예: 친구와 내 몸을 비교하게 됨 — 관계와 마음)를 하나 골라 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"\'성\'이라고 하면 몸만 떠오르나요? 마음과 관계도 함께 바뀝니다." 가운데 \'성\'에서 몸·마음·관계 세 가지를 펼치고 시연 단추로 말 카드 9장이 붙는 모습을 보인다. "성은 몸의 일일 뿐이다"라는 말이 나오면 "\'누군가가 자꾸 신경 쓰인다\'는 몸의 변화일까요, 마음과 관계의 변화일까요?"라고 되묻는다. 성적 호기심도 마음 가지의 자연스러운 변화라는 점을 짚고, 오늘은 몸의 변화를 표준안 용어로 정리한다고 밝힌다.',
          student: '\'성\'을 몸·마음·관계 세 가지로 펼치고, 사춘기에 생길 수 있는 변화 카드를 알맞은 가지에 붙여 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '성', slots: FACES, cards: strip(FACE_CARDS) }, sequence: [{ sort: { 몸: ['b1', 'b2', 'b3'], 마음: ['m1', 'm2', 'm3'], 관계: ['r1', 'r2', 'r3'] } }] },
          art: { draw: 'a paper-cut mind map with a round paper center and three paper branches labelled with simple icons of a body outline, a heart and two people holding hands', banner: '몸·마음·관계', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '\'친구와 내 몸을 비교하게 된다\'는 관계와 마음에 걸칠 수 있다. 시연 판은 관계에 두었지만 다른 가지를 고른 학생의 까닭도 받아 준다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.body-change', {
        title: '종이 몸에서 2차 성징 짚기', method: '종이 몸에서 2차 성징 변화 부위 짚기', tool: 'body', minutes: 16,
        levels: { easy: '고를 곳 6곳(눈·귀·목·피부·가슴·어깨)에서 변화가 나타나는 4곳을 고르고, 고른 곳 이름이 바로 보인다.', base: '고를 곳 8곳에서 변화가 나타나는 5곳을 고르고(이름 표시 없음), 부위마다 변화와 대처를 보기에서 고른다.', challenge: '넷째 문항에서 변화마다 몸에 신호를 보내는 것(성호르몬)과 그 신호가 하는 일을 고른다.' },
        activity: {
          title: '종이 몸에서 2차 성징 짚기', tool: 'body',
          teacher: '"목소리·피부·가슴·어깨·허리 둘레, 이 변화들은 무엇이 신호를 보내서 시작될까요?" 옷 입은 종이 몸에서 부위를 고를 때마다 표준안 용어(2차 성징·성호르몬)를 소리 내어 말하게 한다. "남학생만 목소리가 바뀌고 여학생만 가슴이 자란다"는 학생에게 "변화의 모습과 정도는 다르지만, 누구에게나 몸 곳곳에서 변화가 온다면 어떨까요?"라고 되묻는다. 키가 자라는 변화는 몸 전체의 일이라 칸이 없으니 말로 짚고, 털이 나는 변화 등 나머지는 표준안 그림 자료로 함께 본다. 변화가 시작되는 나이와 순서가 사람마다 다르다는 안내문을 끝에 함께 읽는다.',
          task: '옷 입은 종이 몸에서 2차 성징 변화가 나타나는 부위를 고르고, 부위마다 생기는 변화와 알맞은 대처를 골라요.',
          levels: { easy: { names: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '성호르몬의 영향으로 2차 성징 변화가 나타나는 곳을 모두 고르세요.', toolOptions: { mode: 'parts', parts: PARTS_ALL }, target: { parts: ['목', '피부', '가슴', '어깨', '허리'] } },
              { prompt: '2차 성징 변화가 나타나는 곳 4곳을 고르세요(고른 곳 이름이 보여요).', toolOptions: { mode: 'parts', parts: ['눈', '귀', '목', '피부', '가슴', '어깨'], names: true }, target: { parts: ['목', '피부', '가슴', '어깨'] } }),
            IT({ prompt: '목소리 변화가 나타나는 곳을 고르고, 목소리 변화에 대해 맞는 것을 고르세요.', toolOptions: { mode: 'parts', parts: PARTS_ALL, ask: { q: '목소리 변화에 대해 맞는 것은?', choices: ['모두 같은 나이에 시작된다', '시작 시기와 정도가 사람마다 다르다', '목소리가 늦게 바뀌면 병이다'], why: ['변화가 오는 나이는 사람마다 달라요.', '', '늦게 바뀌는 것도 보통이에요. 걱정되면 보건 선생님께 물어요.'] } }, target: { parts: ['목'], pick: 1 } },
              { prompt: '목소리 변화가 나타나는 곳을 고르고 맞는 것을 고르세요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '목', '피부', '가슴', '어깨'], names: true } }),
            IT({ prompt: '여드름·땀 냄새 같은 변화가 나타나는 곳을 고르고, 알맞은 대처를 고르세요.', toolOptions: { mode: 'parts', parts: PARTS_ALL, ask: { q: '피부 변화가 생겼을 때 알맞은 대처는?', choices: ['자주 씻고 궁금하면 보건 선생님께 묻는다', '부끄러운 일이니 숨긴다', '친구 피부를 보고 별명을 붙인다'], why: ['', '누구에게나 오는 변화라 숨길 일이 아니에요.', '몸의 변화를 놀리는 말은 상처가 돼요.'] } }, target: { parts: ['피부'], pick: 0 } },
              { prompt: '여드름이 나는 곳을 고르고 알맞은 대처를 고르세요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '목', '피부', '가슴', '어깨'], names: true } }),
            IT({ prompt: '가슴·어깨·허리처럼 체형이 바뀌는 곳 가운데 하나를 고르고, 변화를 대하는 바른 태도를 고르세요.', toolOptions: { mode: 'parts', parts: PARTS_ALL, ask: { q: '체형이 바뀔 때 바른 태도는?', choices: ['친구와 견주어 더 빠른 쪽이 정상이다', '변화의 속도와 모습은 사람마다 달라 존중한다', '변화를 숨기려고 밥을 거른다'], why: ['빠르고 늦음에 정상과 비정상이 없어요.', '', '자라는 몸에는 골고루 먹는 것이 필요해요.'] } }, target: { parts: ['가슴'], pick: 1 } },
              { prompt: '가슴 발달이 나타나는 곳을 고르고 바른 태도를 고르세요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '목', '피부', '가슴', '어깨'], names: true } },
              { prompt: '가슴 발달이 나타나는 곳을 고르고, 이런 변화마다 몸에 신호를 보내는 것과 그 신호의 일을 고르세요.', toolOptions: { ask: { q: '2차 성징 변화에 신호를 보내는 것과 그 일은?', choices: ['소화액 — 음식을 잘게 부순다', '성호르몬 — 몸이 어른의 몸으로 자라도록 신호를 보낸다', '침 — 입안을 촉촉하게 한다'], why: ['소화액은 소화를 도와요.', '', '침은 입안의 일을 해요.'] } }, target: { parts: ['가슴'], pick: 1 } },
              { conclude: '2차 성징은 성호르몬이 보내는 신호로 몸 곳곳에서 일어나고, 시작하는 나이·순서·정도는 사람마다 달라요. 모두 자라는 과정이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '2차 성징 변화를 하나 골라, 그 변화가 나타나는 곳과 사람마다 다른 점을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '2차 성징이 시작되는 나이는?', options: ['누구나 같다', '사람마다 다르다'], answer: '사람마다 다르다' }] },
        notes: '종이 몸은 옷을 입은 모습으로 다룬다. 학생 자신의 몸 상태나 변화 시기를 묻지 않는다. 교구의 고를 곳에 키(몸 전체)·털이 나는 자리가 없어 이 두 변화는 표준안 그림 자료로 말로 짚는다. ' + SAFE_NOTE,
      }),
      M('act.worry-advice', {
        title: '도윤의 고민에 답장 쓰기', method: '가상 고민 글에 답장 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 시작 말("도윤아, 키가 자라는 때는 ___")을 채워 두 문장으로 쓰고 기준 2개를 점검한다.', base: '4~5문장 답장을 쓰고 기준표 3항목(사실에 맞음·비교하지 않음·도움받을 곳)으로 점검한다.', challenge: '셋째 문항에서 같은 고민을 다른 성별 인물이 보냈어도 답장이 같아야 하는 까닭을 두 문장으로 덧붙인다.' },
        activity: {
          title: '도윤의 고민에 답장 쓰기', tool: 'rubric-writing',
          teacher: '"\'나만 아직 키가 안 커서 체육 시간이 싫어.\' 이 글을 보낸 도윤에게 가장 힘이 되는 첫 문장은 무엇일까요?" 가상 인물 도윤의 고민 글을 함께 읽고 쓰게 한다. "곧 클 거야, 걱정 마"만 쓰는 학생에게 "그 말이 사실에 근거하나요? 사람마다 다르다는 사실을 넣으면 어떻게 달라질까요?"라고 되묻는다. "다른 애들보다 나으니까 괜찮아"처럼 비교로 위로하는 말이 나오면 비교는 또 다른 비교를 부른다고 짚는다. 자기 이야기를 쓰지 않고 도윤에게 답한다고 미리 말한다.',
          task: '가상 인물 도윤의 고민 글에 답장을 쓰고, 사실에 맞는지·비교하지 않았는지·도움받을 곳을 알려 줬는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 도윤의 마음을 알아주고 사실을 알려 주는 두 문장을 쓰세요.', toolOptions: { topic: '도윤의 고민: "나만 아직 키가 안 커서 체육 시간이 싫어." 도윤의 마음을 알아주고, 키가 자라는 때가 사람마다 다르다는 사실을 두 문장으로 쓰세요.', minChars: 30, maxChars: 160, minSentences: 2, maxSentences: 3, title: '답장 ① 마음과 사실' }, target: { selfCheck: ['도윤의 마음을 먼저 알아주었다', '사실에 맞는 말을 썼다', '다른 사람과 비교하지 않았다'], mustInclude: [['사람마다', '다르']] } },
              { prompt: '문장 시작 말을 채워 두 문장으로 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '도윤아, 마음이 ___ 했겠다. 키가 자라는 때는 ___.' }, target: { selfCheck: ['도윤의 마음을 먼저 알아주었다', '사실에 맞는 말을 썼다'], mustInclude: [['사람마다', '다르']] } }),
            IT({ prompt: '뒷부분: 체육 시간에 해 볼 수 있는 일과 도움받을 곳을 넣어 답장을 4~5문장으로 마무리하세요.', toolOptions: { topic: '앞에서 쓴 두 문장에 이어, 체육 시간에 해 볼 수 있는 일과 도움받을 곳(보건 선생님·담임 선생님·보호자)을 넣어 답장 전체를 4~5문장으로 완성하세요.', minChars: 70, maxChars: 300, minSentences: 4, maxSentences: 5, title: '답장 ② 도움받을 곳' }, target: { selfCheck: ['사실에 맞는 말을 썼다', '다른 사람과 비교하지 않았다', '도움받을 곳을 알려 주었다'], mustInclude: [['선생님', '보호자']] } },
              { prompt: '도움받을 곳을 넣어 한두 문장을 더 쓰세요.', toolOptions: { topic: '체육 시간이 힘들 때 도움받을 곳(보건 선생님·담임 선생님·보호자)을 한두 문장으로 알려 주세요.', minChars: 20, minSentences: 1, maxSentences: 2, starter: '걱정되면 ___ 께 물어봐.' }, target: { selfCheck: ['도움받을 곳을 알려 주었다', '다른 사람과 비교하지 않았다'], mustInclude: [['선생님', '보호자']] } }),
            IT({ prompt: '가상 친구의 답장 "너보다 작은 애도 있으니까 괜찮아"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 쓴 답장: "너보다 작은 애도 있으니까 괜찮아." 기준표(사실·비교하지 않기·도움받을 곳)로 읽고, 고친 답장을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '친구 답장 고쳐 쓰기' }, target: { selfCheck: ['비교하는 말을 빼고 고쳤다', '사실에 맞는 말을 넣었다', '친구를 탓하지 않고 썼다'] } },
              null,
              { prompt: '같은 고민을 가상 인물 지아가 보냈다면 답장이 같아야 하는 까닭을 쓰세요.', toolOptions: { topic: '같은 고민("나만 아직 키가 안 커서 체육 시간이 싫어")을 다른 성별의 가상 인물 지아가 보냈다면, 답장이 같아야 하는 까닭을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '다른 인물이 보냈다면' }, target: { selfCheck: ['성별에 따라 다른 기준을 쓰지 않았다', '사람마다 다르다는 사실을 썼다', '까닭을 문장으로 밝혔다'] } },
              { conclude: '힘이 되는 답장은 마음을 먼저 알아주고, 사실(사람마다 다르다)을 말하며, 비교하지 않고, 도움받을 곳을 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도윤에게 보낼 답장의 첫 문장을 비교하는 말 없이 써요.' }] },
        notes: '학생 자신의 키·몸 고민을 쓰게 하지 않는다. 글은 가상 인물에게 보내는 답장이다. ' + SAFE_NOTE,
      }),
      M('act.curiosity-dilemma', {
        title: '성적 호기심 다루기 갈림길', method: '성적 호기심을 다루는 갈림길 따라가기', tool: 'dilemma', minutes: 28,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 서연에게 생기는 영향(도움·피해)이 바로 보인다. 교사가 결과 글을 소리 내어 읽어 준다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 다른 길의 결과와 견주는 근거 카드까지 고르고, 넷째 문항에서 서연이 보건 선생님께 물을 질문 문장을 고른다.' },
        activity: {
          title: '성적 호기심 다루기 갈림길', tool: 'dilemma',
          teacher: '"서연이 링크를 받고 궁금해진 건 잘못일까요?" 학생마다 한 길을 끝까지 간 뒤 되돌아가 다른 길과 견주게 한다. "궁금하면 보는 게 당연하다"는 학생에게 "그 영상이 실제 사람들의 관계를 사실대로 보여 줄까요, 꾸며서 보여 줄까요?"라고 되묻고, "궁금해하는 게 이상하다"는 학생에게는 호기심은 자연스럽다는 점을 짚는다. 문제는 호기심이 아니라 정보를 얻는 곳이라는 점을 끝 장면에서 정리한다. 영상의 내용은 묻지도 말하지도 않는다.',
          task: '가상 인물 서연이 성인용 영상 링크를 받은 장면에서 길을 골라 결과를 따라가고, 끝에서 내 판단의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '서연이 링크를 받았어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '서연이 링크를 받았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '서연의 링크', D1, [['close', 'trust', 'q'], ['open', 'stopL', 'source'], ['askNow']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '믿을 만한 성 정보원을 고르는 장면을 따라가세요.', toolOptions: { title: '어디서 물어볼까?', scene: { text: '서연은 몸의 변화에 대해 궁금한 것이 있다. 물어볼 곳이 여러 군데 떠오른다.', ask: '어디서 답을 찾을까?', motif: 'house', choices: [
              { id: 'nurse', text: '보건 선생님과 학교 성교육 자료', result: '나이에 맞는 사실을 차분히 듣는다.', impact: [{ who: '서연', text: '궁금증이 풀린다', tone: 1 }], ending: '확인할 수 있는 곳에서 답을 찾았어요.' },
              { id: 'ads', text: '광고가 많은 아무 사이트', result: '광고와 꾸민 이야기가 섞여 있다.', impact: [{ who: '서연', text: '더 헷갈린다', tone: -1 }], why: '광고가 많은 곳은 사실보다 눈길 끌기가 먼저예요.' },
              { id: 'senior', text: '단톡방 선배들의 말', result: '말마다 달라 무엇이 맞는지 모른다.', impact: [{ who: '서연', text: '헷갈림이 남는다', tone: -1 }], why: '또래나 선배의 말은 틀릴 때가 많아요.' }] }, reasons: [{ id: 'q1', text: '확인할 수 있는 정보인지 본다' }, { id: 'q2', text: '나이에 맞게 설명해 주는 곳인지 본다' }, { id: 'q3', text: '자극적인 곳일수록 정확하다', why: '자극적인 곳은 눈길 끌기가 목적일 때가 많아요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['nurse']], reasons: ['q1', 'q2'], some: true } },
              { prompt: '믿을 만한 정보원을 고르세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } },
              { prompt: '믿을 만한 정보원을 고르고, 정보원을 고르는 기준 근거를 모두 고르세요.', target: { path: [['nurse']], reasons: ['q1', 'q2'] } }),
            IT({ prompt: '친구가 또 링크를 보낼 때 서연이 할 말을 고르는 장면을 따라가세요.', toolOptions: { title: '친구에게 할 말', scene: { text: '다음 날 친구가 "어제 거 봤어? 또 보내 줄게"라고 한다.', ask: '서연은 뭐라고 할까?', motif: 'house', choices: [
              { id: 'clear', text: '"나는 안 볼래. 이런 건 보내지 말아 줘."', result: '친구가 "알았어"라며 더 보내지 않는다.', impact: [{ who: '서연', text: '내 뜻을 지켰다', tone: 1 }], ending: '분명하게 말해 내 뜻을 지켰어요.' },
              { id: 'vague', text: '"음… 나중에…"라고 얼버무린다', result: '친구는 서연도 좋아한다고 여기고 또 보낸다.', impact: [{ who: '서연', text: '원치 않는 링크가 계속 온다', tone: -1 }], why: '흐린 대답은 상대가 다르게 받아들일 수 있어요. 짧고 분명하게 말해요.' }] }, reasons: [{ id: 'p1', text: '원치 않는 것은 짧고 분명하게 거절한다' }, { id: 'p2', text: '친구 사이니 참아야 한다', why: '친구 사이에도 내가 원치 않는 것은 말할 수 있어요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['clear']], reasons: ['p1'] } }),
            IT({ prompt: '서연이 보건 선생님께 물을 질문을 고르는 장면을 따라가세요.', toolOptions: { title: '선생님께 묻기', scene: { text: '서연은 보건실 앞에서 무엇을 물어볼지 고민한다.', ask: '어떤 질문이 가장 알맞을까?', motif: 'house', choices: [
              { id: 'good', text: '"사춘기에 몸과 마음이 바뀌는 게 사람마다 왜 달라요?"', result: '선생님이 성호르몬과 개인차를 설명해 준다.', impact: [{ who: '서연', text: '궁금증이 정리된다', tone: 1 }], ending: '궁금한 것을 분명한 질문으로 만들었어요.' },
              { id: 'blame', text: '"궁금해하는 제가 이상한 거죠?"', result: '선생님이 "이상한 게 아니야"라고 먼저 말해 준다.', impact: [{ who: '서연', text: '스스로를 탓하던 마음을 내려놓는다', tone: 0 }], why: '궁금해하는 것은 이상하지 않아요. 알고 싶은 것을 그대로 물어요.' }] }, reasons: [{ id: 'k1', text: '궁금한 것을 분명한 질문으로 만들면 답을 찾기 쉽다' }, { id: 'k2', text: '질문하는 것은 부끄러운 일이다', why: '묻는 것은 나를 돌보는 일이에요.' }], compare: false },
              target: { path: [['good']], reasons: ['k1'] } },
              null, null,
              { conclude: '성에 대한 호기심은 자연스러워요. 궁금한 것은 믿을 만한 곳(보건 선생님·학교 자료)에서 묻고, 원치 않는 것은 분명하게 거절해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '성적 호기심에 대한 설명으로 알맞은 것은?', options: ['사춘기에 생기는 자연스러운 마음이다', '생기면 이상한 사람이다', '친구에게만 물어야 한다'], answer: '사춘기에 생기는 자연스러운 마음이다' }, { type: 'choice', prompt: '성에 대한 궁금증을 다루는 방법으로 가장 알맞은 것은?', options: ['궁금해하지 않으려고 참는다', '보건 선생님·학교 자료처럼 믿을 만한 곳에서 묻는다', '친구가 보내 준 영상으로 확인한다'], answer: '보건 선생님·학교 자료처럼 믿을 만한 곳에서 묻는다' }] },
        notes: '영상의 내용은 장면에서도 발문에서도 묘사하지 않는다. 학생에게 본 적이 있는지 묻지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.mood-log', {
        title: '감정 기복 다루기 점검', method: '마음 변화 알기 점검과 호흡 타이머', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 4개(마음 변화가 자연스럽다는 것·가라앉히는 방법·도움받을 사람)에 표시한다.', base: '점검 항목 6개에 표시하고, 둘째 출구 질문에서 호흡 타이머를 2분(1분씩 2번)으로 맞춘다.', challenge: '넷째 출구 질문에서 나만의 마음 가라앉히기 방법을 한 줄로 쓴다.' },
        wrap: {
          teacher: '"짜증이 났다가 금방 풀리는 마음, 사춘기에 이상한 걸까요?" 점검 항목은 내 기분 상태가 아니라 오늘 알게 된 것과 해 볼 수 있는 것이라고 먼저 말한다. "감정 기복은 참아야 한다"는 학생에게 "참기만 하면 마음이 어디로 갈까요? 호흡처럼 가라앉히는 방법이 있다면요?"라고 되묻는다. 우리 반 연습 약속으로 1분씩 두 번 호흡을 함께 따라 하고, 힘든 마음이 오래가면 보호자·보건 선생님·담임 선생님에게 말할 수 있다고 짚는다.',
          exitTicket: [
            IT(SELF('오늘 알게 된 것과 해 볼 수 있는 것에 스스로 표시해요.', '마음 변화 알기 점검', ['사춘기에 짜증·설렘·외로움이 번갈아 올 수 있다는 것을 안다', '마음이 바뀌는 것은 성호르몬과 자라는 과정 때문일 수 있다는 것을 안다', '마음을 가라앉히는 호흡을 따라 할 수 있다', '힘든 마음이 오래가면 말할 사람을 안다', '친구의 기분 변화를 놀리지 않을 수 있다', '마음이 바뀌는 속도도 사람마다 다르다는 것을 안다']),
              { prompt: '오늘 알게 된 것에 스스로 표시해요(4개).', target: { selfCheck: ['사춘기에 짜증·설렘·외로움이 번갈아 올 수 있다는 것을 안다', '마음을 가라앉히는 호흡을 따라 할 수 있다', '힘든 마음이 오래가면 말할 사람을 안다', '친구의 기분 변화를 놀리지 않을 수 있다'] } }),
            { type: 'tool', tool: 'timer', options: { title: '우리 반 연습 약속 — 호흡 1분씩 2번', plan: { work: 30, rest: 10, rounds: 1 }, showTotal: true }, prompt: '호흡 연습을 1분씩 2번, 사이 쉬기 10초로 타이머를 맞춰요.', target: { plan: { work: 60, rest: 10, rounds: 2 } }, difficulty: 0.15 },
            { type: 'choice', prompt: '감정 기복으로 힘든 마음이 여러 날 이어질 때 알맞은 행동은?', options: ['혼자 참으며 아무에게도 말하지 않는다', '보호자·보건 선생님·담임 선생님 가운데 한 사람에게 말한다', '친구에게 화를 풀어 버린다'], answer: 1, difficulty: 0.2, explain: '힘든 마음이 이어지면 믿을 만한 어른에게 말해요.' },
            { type: 'short', prompt: '나만의 마음 가라앉히기 방법을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '마음 변화 다루기',
          items: [
            { type: 'check', prompt: '마음이 힘들 때 해 볼 수 있는 것에 표시해요.', options: ['천천히 숨쉬기', '잠깐 산책하기', '믿을 만한 어른에게 말하기', '좋아하는 음악 듣기'] },
            { type: 'short', prompt: '힘든 마음이 이어질 때 말할 수 있는 사람(보호자·보건 선생님·담임 선생님 등)을 하나 써요.' },
          ],
          easy: { items: [{ type: 'choice', prompt: '사춘기에 마음이 자주 바뀌는 것은?', options: ['이상한 일이다', '자랄 때 생길 수 있는 일이다'], answer: '자랄 때 생길 수 있는 일이다' }, { type: 'short', prompt: '마음이 힘들 때 말할 사람을 하나 써요.' }] },
        },
        notes: '계획 글의 \'짜증이 늘었다\' 같은 내 기분 상태 점검은 학생의 마음 상태를 묻게 되어, 마음 변화를 \'아는지\'·\'할 수 있는지\'로 바꾸어 점검한다. 호흡 1분씩 2번은 우리 반 연습 약속 값이다. ' + SAFE_NOTE,
      }),
      M('wrap.respect-poster', {
        title: '"변화 속도는 달라도 괜찮아" 포스터', method: '존중 문구를 담은 학급 포스터 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '문구 띠 3개 가운데 존중하는 문구를 골라(둘째 출구 질문) 포스터를 꾸민다.', base: '포스터를 꾸미고 존중하는 문구 하나를 직접 쓴다(셋째 출구 질문).', challenge: '포스터를 본 친구가 할 행동 하나를 문구와 함께 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"우리 반 게시판에 붙일 한 줄, 비교하지 않고 놀리지 않는 말로 무엇이 좋을까요?" 콜라주 판에는 그림만 붙고, 문구는 출구 질문과 활동지에 쓴다고 알려 준다. "빨리 크는 게 좋은 거야"처럼 한쪽을 좋게 말하는 문구가 나오면 "그 말을 늦게 자라는 친구가 읽으면 어떨까요?"라고 되묻는다. 문구에는 친구 이름이나 몸 이야기를 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 포스터 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['포스터에 넣을 존중하는 문구를 정했다', '비교하거나 놀리는 그림이 없다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '포스터에 넣을 문구로 가장 알맞은 것은?', options: ['빨리 자라는 사람이 멋지다', '변화 속도는 달라도 괜찮아, 목소리·몸 놀리지 않기', '늦게 자라면 운동을 더 해야 한다'], answer: 1, difficulty: 0.15, explain: '빠르고 늦음을 견주지 않고 존중하는 말이 알맞아요.' },
            { type: 'short', prompt: '비교·놀림 대신 존중하는 포스터 문구를 하나 써요.' },
            { type: 'short', prompt: '포스터를 본 친구가 할 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '변화 속도는 달라도 괜찮아',
          items: [
            { type: 'short', prompt: '포스터 문구를 써요(친구 이름·몸 이야기 없이).' },
            { type: 'short', prompt: '이 포스터를 본 친구가 할 수 있는 존중 행동을 하나 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 포스터 문구는 출구 질문(고르기·쓰기)과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 02-g7-body-image.js ====
  // ==== 7학년 · 외모 기준과 나의 몸 존중 (gender.m.g7-body-image) ====
  {
    const M = MK('g7-body-image', [7]);
    const STRAT = [['몸을 부족하게 말함', 8], ['불안을 키움', 7], ['구매로 이끔', 5]];
    const STRAT_PCT = [['몸을 부족하게 말함', 40], ['불안을 키움', 35], ['구매로 이끔', 25]];
    const SCHOICE = STRAT.map((r) => r[0]);
    const BAR = (extra) => Object.assign({ type: 'bar', title: '가상 광고 문구 20개 — 쓰인 전략', unit: '개', xLabel: '전략', yLabel: '문구 수', data: STRAT }, extra);
    const QCARDS = [
      { id: 'q1', text: '무엇이 바뀌었을까?', ok: true }, { id: 'q2', text: '누가 이득을 볼까?', ok: true }, { id: 'q3', text: '보는 사람은 어떤 기분일까?', ok: true },
      { id: 'q4', text: '나도 저렇게 되려면 얼마나 굶어야 할까?' }, { id: 'q5', text: '이 모델은 몇 킬로그램일까?' },
    ];
    const COMMENTS = [
      { id: 's1', label: '"살 빠지니까 훨씬 낫다!"' }, { id: 's2', label: '"다리 길이 실화? 부럽다"' },
      { id: 's3', label: '"남자가 너무 말랐네 ㅋㅋ"' }, { id: 's4', label: '"사진 분위기 좋다, 여행 즐거웠겠다"' },
    ];
    const ITEMS = [
      { id: 'book', text: '수학 문제집', price: 12000 }, { id: 'shoe', text: '닳아서 바꿀 실내화', price: 8000 },
      { id: 'tint', text: '친구들이 꼭 사라는 유행 틴트', price: 15000 }, { id: 'jelly', text: '"일주일 만에 -3kg" 다이어트 젤리', price: 9000 },
      { id: 'pro', text: '"남자는 근육" 광고 속 보충제', price: 18000 }, { id: 'gift', text: '친구 생일 선물', price: 7000 },
      { id: 'app', text: '얼굴 보정 앱 한 달 이용권', price: 6000 }, { id: 'sun', text: '체육 시간에 바를 선크림', price: 9000 },
    ];
    const pickItems = (ids) => ids.map((i) => ITEMS.find((x) => x.id === i));

    ALL.push(
      // ---- 도입 ----
      M('intro.filter-compare', {
        title: '보정 전후 그림에 질문하기', method: '보정 전후 가상 광고에 던질 질문 카드 고르기', tool: 'wordcards', minutes: 5,
        levels: { easy: '질문 카드 3장(바뀐 것·이득·기분)만 보이고 하나를 골라 소리 내어 읽는다.', base: '질문 카드 5장(몸을 재는 함정 질문 2장 포함)에서 알맞은 3장을 고르는 시연을 보고 차례를 정한다.', challenge: '보정 그림에 던질 질문을 하나 직접 만들어 짝에게 말한다.' },
        intro: {
          teacher: '"같은 사람의 광고 사진인데 오른쪽은 피부가 매끈하고 허리 선이 가늘어졌어요. 이 사진에 어떤 질문을 던져야 할까요?" 보정 전·후 가상 광고 그림 두 장을 말로 그려 보이고 시연 단추로 질문 카드 3장을 고르는 모습을 보인다. "나도 저렇게 되려면 얼마나 굶어야 할까?" 같은 질문이 나오면 "그 질문은 사진이 진짜라고 믿을 때 나와요. 먼저 무엇이 바뀌었는지부터 물어볼까요?"라고 되묻는다. 모델의 몸을 품평하지 않고 사진이 만들어진 방식을 묻는다고 밝힌다.',
          student: '보정 전과 후의 가상 광고 그림을 견주어 보고, 이 그림에 던질 질문 카드를 골라 차례대로 놓아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '광고에 던질 질문', cards: strip(QCARDS) }, sequence: [{ pick: ['q1', 'q2', 'q3'] }] },
          art: { draw: 'two paper-cut advertisement posters side by side of the same smiling person, the right one with smoothed paper skin and a reshaped outline, a paper magnifying glass between them', banner: '무엇이 바뀌었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그림은 교사가 화면이나 말로 보인다(교구는 그림을 그리지 못한다). 학생 자신의 사진·몸을 예로 들지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.comment-scan', {
        title: '댓글 속 몸 평가 말 찾기', method: '가상 게시물 댓글을 들은 사람의 기분과 잇기', tool: 'emotion', minutes: 7,
        levels: { easy: '댓글 4개 가운데 2개(살 빠짐·분위기)만 교사가 읽고 기분을 고르는 시연을 본다.', base: '댓글 4개마다 들은 사람의 기분 카드가 붙는 시연을 보고, 그 기분인 까닭을 짝과 말한다.', challenge: '칭찬처럼 보이지만 부담이 되는 댓글을 하나 골라 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"\'살 빠지니까 훨씬 낫다!\' 칭찬일까요, 평가일까요? 이 댓글을 읽은 사람은 다음 날 무엇을 걱정할까요?" 가상 인물의 여행 사진 게시물 아래 댓글 네 개를 띄우고 시연 단추로 기분 카드를 잇는 모습을 보인다. "칭찬은 다 좋은 말"이라는 학생에게 "살이 다시 찌면 그 사람은 어떤 기분일까요?"라고 되묻는다. 몸이 아니라 경험·노력·분위기를 말한 댓글과 견주어 보게 한다.',
          student: '가상 게시물 댓글을 읽고, 그 댓글을 들은 사람의 기분 카드를 골라 이어요. 칭찬처럼 보이는 평가도 찾아봐요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: COMMENTS, cards: ['부담', '민망함', '속상함', '기쁨', '편안함'] }, sequence: [{ match: { s1: '부담', s2: '민망함', s3: '속상함', s4: '기쁨' } }] },
          art: { draw: 'a paper-cut phone screen with a travel photo post and four paper comment bubbles below, one bubble glowing softly', banner: '칭찬일까, 평가일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '댓글은 가상이다. 같은 댓글이라도 사람마다 기분이 다를 수 있어 시연의 짝은 예시로 다룬다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.ad-analysis', {
        title: '광고 문구 전략 그래프', method: '가상 광고 문구를 전략별로 정리한 그래프 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '막대·띠에 값이 보이고, 띠그래프는 첫 칸이 그려져 있어 나머지 두 칸만 그린다(문구 분류는 2개).', base: '값 없이 막대를 읽어 문구 2개를 분류하고, 띠그래프 3칸을 모두 그려 가장 많이 쓰인 전략과 비율을 읽는다.', challenge: '넷째 문항에서 전략들이 노리는 감정을 고른다(값은 맞힌 뒤에만 보인다).' },
        activity: {
          title: '광고 문구 전략 그래프', tool: 'chart',
          teacher: '"\'뱃살 고민 끝!\'이라는 문구는 우리 몸을 어떻게 말하고 있나요?" 가상 다이어트·화장품·보충제 광고 문구 20개를 \'몸을 부족하게 말함·불안을 키움·구매로 이끔\' 세 전략으로 나눈 결과를 그래프로 읽는다. "광고는 그냥 정보일 뿐"이라는 학생에게 "정보라면 왜 \'지금 아니면 늦어요\'라고 서두르게 할까요?"라고 되묻는다. 광고가 성별에 따라 다른 몸(마른 몸·근육)을 기준처럼 내세운다는 점도 짚고, 자료는 수업용 가상 자료라고 밝힌다.',
          task: '가상 광고 문구 20개를 세 전략으로 나눈 그래프를 읽고, 문구를 분류하고, 가장 많이 쓰인 전략이 노리는 감정을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(RD('"뱃살 고민 끝! 날씬해야 예쁘죠" 문구는 어느 전략일까요?', BAR({ question: '이 문구가 쓴 전략은?', choices: SCHOICE, why: ['', '불안을 키우는 말보다 몸을 부족하다고 말하는 쪽이 먼저예요.', '사라고 서두르는 말은 없어요.'] }), { pick: 0 })),
            IT(RD('"이번 주만 반값, 지금 아니면 늦어요" 문구는 어느 전략일까요?', BAR({ question: '이 문구가 쓴 전략은?', choices: SCHOICE, why: ['몸을 말하지 않았어요.', '걱정보다 서둘러 사게 하는 말이에요.', ''] }), { pick: 2 })),
            IT({ prompt: '표를 보고 세 전략의 비율 띠그래프를 그리세요(가상 자료).', toolOptions: { type: 'band', mode: 'build', title: '가상 광고 문구 20개의 전략 비율', unit: '%', data: STRAT_PCT }, target: { build: true } },
              { prompt: '표를 보고 띠그래프의 나머지 두 칸을 그리세요(첫 칸은 그려져 있어요).', toolOptions: { given: [0] } }),
            IT(RD('띠그래프에서 가장 많이 쓰인 전략과 그 비율을 고르세요.', { type: 'band', title: '가상 광고 문구 20개의 전략 비율', unit: '%', data: STRAT_PCT, question: '가장 많이 쓰인 전략은?', choices: ['몸을 부족하게 말함 40%', '불안을 키움 35%', '구매로 이끔 25%'] }, { pick: 0 }),
              null,
              { prompt: '가장 많이 쓰인 전략이 노리는 감정으로 알맞은 것을 고르세요.', toolOptions: { question: '이 전략이 노리는 감정은?', choices: ['내 몸이 부족하다는 불안', '있는 그대로의 만족', '친구에 대한 고마움'], why: ['', '만족하면 물건을 사지 않아요.', '광고 문구와 먼 감정이에요.'] }, target: { pick: 0 } },
              { conclude: '외모 광고는 몸을 부족하다고 말하고 불안을 키워 사게 만들어요. 그 기준은 광고가 만든 것이지 건강한 몸의 기준이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 광고 문구 하나를 골라 그 문구가 쓴 전략과, 보는 사람에게 생길 수 있는 감정을 한 문장으로 써요.' }] },
        notes: '계획의 \'문구 3개·5개 분류\'는 그래프 교구가 문구 카드를 나누지 못해, 문구 분류는 고르기 문항 2개로, 정리는 띠그래프 그리기·읽기로 했다. 모든 값은 가상이다. ' + SAFE_NOTE,
      }),
      M('act.rewrite-talk', {
        title: '몸 평가 말을 존중하는 말로', method: '몸 평가 말을 존중하는 말로 고쳐 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '고칠 말 2개를 문장 시작 말과 함께 한 문장씩 고쳐 쓰고 기준 2개를 점검한다.', base: '고칠 말 4개(문항 1·2에 두 개씩)를 고쳐 쓰고 기준표 3항목(몸 평가 없음·성별 기준 없음·상대의 선택 존중)으로 점검한다.', challenge: '셋째 문항에서 외모 말고 칭찬할 수 있는 것을 세 가지 덧붙인다.' },
        activity: {
          title: '몸 평가 말을 존중하는 말로', tool: 'rubric-writing',
          teacher: '"\'남자가 왜 이렇게 말랐어\'라는 말에는 기준이 몇 개 숨어 있을까요?" 몸에 대한 평가와 \'남자는 이래야 한다\'는 성별 기준을 함께 찾아본 뒤 고쳐 쓰게 한다. "\'예뻐졌다\'로 바꾸면 되지 않나요?"라는 학생에게 "그것도 몸을 평가하는 말이에요. 몸 대신 무엇을 말할 수 있을까요?"라고 되묻는다. 고친 말에 친구 이름을 쓰지 않게 한다.',
          task: '몸을 평가하는 말을 존중하는 말로 고쳐 쓰고, 몸 평가 없음·성별 기준 없음·상대의 선택 존중을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '"너 살 빠지니까 낫다", "피부 왜 그래?"를 존중하는 말로 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 한 말 두 개 — "너 살 빠지니까 낫다", "피부 왜 그래?" — 를 몸을 평가하지 않는 말로 각각 한 문장씩 고쳐 쓰세요.', minChars: 20, maxChars: 160, minSentences: 2, maxSentences: 3, title: '고쳐 쓰기 ① 몸 평가' }, target: { selfCheck: ['몸을 평가하는 말을 뺐다', '상대의 선택을 존중했다', '두 말을 모두 고쳤다'] } },
              { prompt: '"너 살 빠지니까 낫다"를 존중하는 말로 고쳐 쓰세요.', toolOptions: { topic: '"너 살 빠지니까 낫다"를 몸을 평가하지 않는 말로 고쳐 쓰세요.', minChars: 10, minSentences: 1, maxSentences: 2, starter: '요즘 ___ 해 보여서 좋다.' }, target: { selfCheck: ['몸을 평가하는 말을 뺐다', '상대의 선택을 존중했다'] } }),
            IT({ prompt: '"남자가 왜 이렇게 말랐어", "여자가 다리털 좀 밀어"를 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 한 말 두 개 — "남자가 왜 이렇게 말랐어", "여자가 다리털 좀 밀어" — 를 몸 평가와 성별 기준이 없는 말로 고치거나, 하지 않아도 될 말이면 그 까닭을 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 3, title: '고쳐 쓰기 ② 성별 기준' }, target: { selfCheck: ['몸을 평가하는 말을 뺐다', '성별에 따른 기준을 뺐다', '상대의 선택을 존중했다'] } },
              { prompt: '"남자가 왜 이렇게 말랐어"를 고쳐 쓰세요.', toolOptions: { topic: '"남자가 왜 이렇게 말랐어"를 몸 평가와 성별 기준이 없는 말로 고쳐 쓰세요.', minChars: 10, minSentences: 1, maxSentences: 2, starter: '오늘 ___ 같이 하자.' }, target: { selfCheck: ['몸을 평가하는 말을 뺐다', '성별에 따른 기준을 뺐다'] } }),
            IT({ prompt: '외모를 말하지 않고 친구를 칭찬하는 문장을 두 개 쓰세요.', toolOptions: { topic: '가상 친구 지우를 외모가 아닌 것(노력·생각·행동 등)으로 칭찬하는 문장을 두 개 쓰세요.', minChars: 20, maxChars: 160, minSentences: 2, maxSentences: 3, title: '외모 말고 칭찬하기' }, target: { selfCheck: ['외모를 말하지 않았다', '구체적인 행동이나 노력을 칭찬했다', '친구 이름 대신 가상 인물로 썼다'] } },
              null,
              { prompt: '외모 말고 칭찬할 수 있는 것을 세 가지 넣어 칭찬 문장을 쓰세요.', toolOptions: { topic: '가상 친구 지우를 외모가 아닌 것 세 가지(노력·생각·행동 등)로 칭찬하는 문장을 세 개 쓰세요.', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 4, title: '외모 말고 칭찬 세 가지' }, target: { selfCheck: ['외모를 말하지 않았다', '칭찬 거리를 세 가지 넣었다', '구체적인 행동이나 노력을 칭찬했다'] } },
              { conclude: '몸을 평가하는 말은 칭찬처럼 들려도 부담이 될 수 있어요. 몸 대신 노력·생각·행동을 말하고, 몸에 대한 선택은 그 사람의 몫이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"살 빠지니까 낫다"를 몸 평가 없이 고쳐 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('act.budget-pressure', {
        title: '외모 관리 소비 압력 예산', method: '가상 용돈 예산 안에서 압력으로 고른 물건 빼 보기', tool: 'economy', minutes: 28,
        levels: { easy: '물건 5개에서 예산 3만 원 안으로 꼭 필요한 두 가지(문제집·실내화)를 담는다.', base: '물건 8개에서 필요한 것은 넣고, 광고·친구 권유 때문에 고른 물건을 빼서 예산 안으로 담는다.', challenge: '넷째 문항에서 광고 문구에 끌린 물건 둘(젤리·보충제)을 빼고 그 돈으로 대신할 선택(선크림)을 담는다.' },
        activity: {
          title: '외모 관리 소비 압력 예산', tool: 'economy',
          teacher: '"가상 인물 서윤의 이번 달 용돈은 3만 원이에요. 친구들이 다 산 틴트, \'일주일 만에 -3kg\' 젤리 — 서윤이 정말 필요해서 고르는 걸까요?" 예산 막대를 보며 담고 빼게 한다. "남들 다 하는데 안 사면 뒤처진다"는 학생에게 "뒤처진다는 기준은 누가 만들었을까요? 광고가 이득을 보는 쪽은 누구일까요?"라고 되묻는다. 화장품이나 운동을 고르는 것 자체가 나쁜 것이 아니라, 압력 때문에 고르는지가 오늘의 질문이라고 짚는다. 학생 자신의 용돈·소비는 묻지 않는다.',
          task: '가상 인물 서윤의 용돈 3만 원 예산 안에서 필요한 물건을 담고, 광고·친구 권유 때문에 고른 물건을 다시 빼 봐요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '서윤의 예산 3만 원. 문제집과 실내화는 꼭 넣고 예산 안으로 담으세요.', toolOptions: { mode: 'budget', budget: 30000, items: ITEMS }, target: { budget: { must: ['book', 'shoe'] } } },
              { prompt: '물건 5개에서 문제집과 실내화를 꼭 넣고 예산 안으로 담으세요.', toolOptions: { items: pickItems(['book', 'shoe', 'tint', 'jelly', 'gift']) } }),
            IT({ prompt: '친구들이 사라고 해서 고른 유행 틴트와 보정 앱을 빼고, 필요한 것만 담으세요.', toolOptions: { mode: 'budget', budget: 30000, items: ITEMS }, target: { budget: { must: ['book', 'shoe'], not: ['tint', 'app'] } } },
              { prompt: '친구 권유로 고른 틴트를 빼고, 문제집·실내화는 넣어 담으세요.', toolOptions: { items: pickItems(['book', 'shoe', 'tint', 'jelly', 'gift']) }, target: { budget: { must: ['book', 'shoe'], not: ['tint'] } } }),
            IT({ prompt: '체육 시간에 쓸 선크림도 필요해요. 필요한 세 가지를 넣고 예산 안으로 담으세요.', toolOptions: { mode: 'budget', budget: 30000, items: ITEMS }, target: { budget: { must: ['book', 'shoe', 'sun'] } } },
              { prompt: '친구 생일 선물도 넣어 필요한 세 가지를 예산 안으로 담으세요.', toolOptions: { items: pickItems(['book', 'shoe', 'tint', 'jelly', 'gift']) }, target: { budget: { must: ['book', 'shoe', 'gift'] } } }),
            IT({ prompt: '빠른 몸 변화를 약속하는 젤리와 보충제는 빼고, 필요한 것과 선물을 담으세요.', toolOptions: { mode: 'budget', budget: 30000, items: ITEMS }, target: { budget: { must: ['book', 'shoe', 'gift'], not: ['jelly', 'pro'] } } },
              { prompt: '빠른 몸 변화를 약속하는 젤리는 빼고, 필요한 것과 선물을 담으세요.', toolOptions: { items: pickItems(['book', 'shoe', 'tint', 'jelly', 'gift']) }, target: { budget: { must: ['book', 'shoe', 'gift'], not: ['jelly'] } } },
              { prompt: '광고 문구에 끌린 젤리·보충제를 빼고, 그 돈으로 대신 체육 시간 선크림을 넣어 필요한 것을 담으세요.', target: { budget: { must: ['book', 'shoe', 'sun'], not: ['jelly', 'pro'] } } },
              { conclude: '외모 광고와 친구의 압력은 필요하지 않은 물건을 고르게 해요. 고르기 전에 "내가 필요해서인가, 압력 때문인가?"를 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구들이 권하는 외모 관리 물건을 고를 때 가장 먼저 따져 볼 것은?', options: ['친구들이 다 샀는지', '내게 정말 필요한지와 예산 안인지', '광고에 나온 연예인이 썼는지'], answer: '내게 정말 필요한지와 예산 안인지' }, { type: 'short', prompt: '서윤이 압력 때문에 고른 물건 하나와, 그 대신 할 수 있는 선택을 써요.' }] },
        notes: '값은 모두 가상이다. 화장·운동 같은 선택 자체를 나쁘게 말하지 않고 \'압력 때문인가\'를 묻는다. 계획의 \'고른 이유를 하나씩 붙인다\'는 예산판이 이유 글을 받지 못해 활동지와 말로 한다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.self-respect-check', {
        title: '나를 존중하는 말 일주일 점검', method: '일주일 동안 지킬 존중 약속 점검표 만들기', tool: 'timer', minutes: 6,
        levels: { easy: '약속 항목 3개에 표시해 일주일 점검표를 만든다.', base: '약속 항목 5개에 표시해 점검표를 만든다.', challenge: '지키기 어려운 항목 하나에 실천 방법을 덧붙여 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"거울 앞에서 나에게 하는 말, 친구에게 하는 말 — 이번 주에 무엇을 지켜 볼까요?" 점검표는 지금의 내 몸이나 기분을 적는 것이 아니라 이번 주에 해 볼 약속이라고 말한다. "나를 깎아내리는 건 겸손"이라는 학생에게 "친구에게도 그렇게 말해 줄 건가요?"라고 되묻는다. 지키기 어려운 항목을 솔직히 고르는 것이 좋은 점검이라고 짚는다.',
          exitTicket: [
            IT(SELF('이번 주에 지킬 존중 약속에 스스로 표시해 점검표를 만들어요.', '나를 존중하는 일주일 약속', ['거울 앞에서 나를 깎아내리는 말을 하지 않는다', '친구 외모를 평가하는 말을 하지 않는다', '보정된 사진을 기준으로 삼지 않는다', '몸 평가 댓글에 좋아요를 누르지 않는다', '외모 말고 노력·행동을 칭찬한다']),
              { prompt: '이번 주에 지킬 약속 3개에 표시해요.', target: { selfCheck: ['거울 앞에서 나를 깎아내리는 말을 하지 않는다', '친구 외모를 평가하는 말을 하지 않는다', '외모 말고 노력·행동을 칭찬한다'] } }),
            { type: 'choice', prompt: '"외모 칭찬은 언제나 좋은 말이다"에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 칭찬이니 늘 좋다', '칭찬도 몸을 평가하는 말이라 부담이 될 수 있다', '친한 사이면 몸 평가도 괜찮다'], answer: 1, difficulty: 0.2, explain: '몸에 대한 칭찬도 평가라서, 기준을 만들고 부담을 줄 수 있어요.' },
            { type: 'short', prompt: '지키기 어려운 약속 하나와 그것을 지킬 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '나를 존중하는 일주일',
          items: [
            { type: 'check', prompt: '이번 주 지킬 약속에 표시해요.', options: ['나를 깎아내리지 않기', '친구 외모 평가하지 않기', '보정 사진을 기준으로 삼지 않기', '외모 말고 행동 칭찬하기'] },
            { type: 'short', prompt: '지키기 어려운 약속과 실천 방법을 써요.' },
          ],
        },
        notes: '점검 항목은 약속(다짐)이고, 학생의 몸 상태나 외모 고민을 적게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('wrap.campaign-slogan', {
        title: '"몸 평가 그만" 캠페인 카드', method: '학급 캠페인 카드 꾸미고 구호 정하기', tool: 'collage', minutes: 7,
        levels: { easy: '구호 3개 가운데 알맞은 것을 고르고(둘째 출구 질문) 카드를 꾸민다.', base: '카드를 꾸미고 구호를 직접 쓴다(셋째 출구 질문).', challenge: '캠페인을 보는 대상과 바라는 행동을 구호와 함께 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"우리 반 복도에 붙일 \'몸 평가 그만\' 카드, 누가 보고 무엇을 하게 만들고 싶나요?" 콜라주 판은 그림 조각만 붙고, 구호는 출구 질문과 활동지에 쓴다고 알려 준다. "뚱뚱해도 괜찮아"처럼 몸을 다시 이름 붙이는 구호가 나오면 "몸을 이름 붙이지 않고도 말할 수 있을까요?"라고 되묻는다. 특정 사람의 몸이나 이름을 그리거나 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 캠페인 카드 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['카드에 넣을 구호를 정했다', '사람의 몸을 평가하는 그림이 없다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '캠페인 구호로 가장 알맞은 것은?', options: ['날씬한 몸이 자기관리다', '몸 말고 마음을 봐요, 몸 평가 그만', '남자는 근육, 여자는 날씬하게'], answer: 1, difficulty: 0.15, explain: '몸의 기준을 세우지 않고 평가를 멈추자는 구호가 알맞아요.' },
            { type: 'short', prompt: '"몸 평가 그만" 캠페인 구호를 직접 써요.' },
            { type: 'short', prompt: '이 캠페인을 볼 사람과 그 사람에게 바라는 행동을 써요.' },
          ],
        },
        worksheet: {
          title: '몸 평가 그만 캠페인',
          items: [
            { type: 'short', prompt: '캠페인 구호를 써요(사람 이름·몸 이야기 없이).' },
            { type: 'short', prompt: '캠페인을 본 사람이 할 행동을 하나 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 구호는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 03-g7-stereotype-school.js ====
  // ==== 7학년 · 학교생활 속 성 역할 고정관념과 차별 (gender.m.g7-stereotype-school) ====
  {
    const M = MK('g7-stereotype-school', [7]);
    const QUOTES = [
      { id: 'q1', text: '무거운 건 남학생이 들어', ok: true }, { id: 'q2', text: '여학생이 꼼꼼하니 서기 해', ok: true },
      { id: 'q3', text: '남자가 그런 걸로 울어?', ok: true }, { id: 'q4', text: '여자애가 축구를 왜 해', ok: true },
      { id: 'q5', text: '이 일은 하고 싶은 사람이 손 들자', ok: false }, { id: 'q6', text: '응원 구호는 여학생이 해야 귀엽지', ok: true },
      { id: 'q7', text: '청소 순서는 번호대로 돌아가자', ok: false }, { id: 'q8', text: '남자는 원래 덤벙대잖아', ok: true },
    ];
    const CLUB = [['로봇·남', 18], ['로봇·여', 6], ['요리·남', 5], ['요리·여', 17], ['댄스·남', 4], ['댄스·여', 15], ['축구·남', 20], ['축구·여', 3]];
    const CHAIN = [
      { id: 'c1', text: '지우가 로봇부 지원서를 쓴다' }, { id: 'c2', text: '선배가 "여자는 잘 안 하던데"라고 말한다' },
      { id: 'c3', text: '옆 친구들이 웃으며 맞장구친다' }, { id: 'c4', text: '지우가 "나만 이상한가" 하고 망설인다' },
      { id: 'c5', text: '안내 포스터에도 남학생 사진만 있다' }, { id: 'c6', text: '지우가 지원서를 내지 않는다' },
    ];
    const C4 = ['c1', 'c2', 'c4', 'c6'];
    // 거북이 판: 별 = 순번대로 돌아가는 역할 칸, 깃발 = 모두 한 번씩 맡음, 바위 = 성별로 미리 정한 역할
    const B_BASE = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 3], [2, 3], [3, 3], [4, 3]], rocks: [[2, 1]], blocks: ['fwd', 'left', 'right', 'rep'] };
    const B_EASY = { cols: 4, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 3], [2, 3], [3, 3]], rocks: [], blocks: ['fwd', 'left', 'right'] };
    // 학급 회의 갈림길(깊이 3)
    const D1 = { text: '합창대회 학급 회의. 한 친구가 "반주는 당연히 여학생이 해야지"라고 하자 몇 명이 고개를 끄덕인다. 피아노를 칠 줄 아는 사람은 남학생 도현과 여학생 수아다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'quiet', text: '가만히 있는다', result: '반주자가 수아로 정해지고, 도현은 말을 꺼내지 못한다.', impact: [{ who: '도현', text: '해 보고 싶던 기회를 놓친다', tone: -1 }, { who: '수아', text: '원하는지 묻지도 않고 맡게 된다', tone: -1 }], why: '가만히 있으면 고정관념이 결정 기준이 돼요.', ending: '고정관념대로 정해졌어요.' },
      { id: 'laugh', text: '"남자가 반주? ㅋㅋ" 하고 웃어넘긴다', result: '반 전체가 웃고, 도현은 고개를 숙인다.', impact: [{ who: '도현', text: '놀림을 받는다', tone: -1 }], why: '웃음은 고정관념을 더 단단하게 만들어요.', end: '웃음 속에 기회가 막혔어요.',
        next: { text: '쉬는 시간, 도현이 "사실 반주해 보고 싶었어"라고 작게 말한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'sorry', text: '"아까 웃어서 미안해, 다시 정하자고 해 볼게"라고 한다', result: '도현이 고개를 든다.', impact: [{ who: '도현', text: '다시 기회가 생길 수 있다', tone: 1 }], end: '늦었지만 사과하고 다시 정하자고 했어요.',
            next: { text: '담임 선생님이 다음 회의 시간을 내준다.', choices: [
              { id: 'audition', text: '"하고 싶은 사람이 연주해 보고 정하자"고 제안한다', result: '도현과 수아가 함께 연주해 보고, 반이 투표로 정한다.', impact: [{ who: '반 전체', text: '공정한 기준을 경험한다', tone: 1 }], ending: '성별이 아니라 희망과 연습으로 정했어요.' },
              { id: 'keep', text: '이미 정했으니 그대로 두자고 한다', result: '도현은 다시 기회를 얻지 못한다.', impact: [{ who: '도현', text: '실망한다', tone: -1 }], why: '잘못 정한 기준은 다시 고칠 수 있어요.' }] } },
          { id: 'shrug', text: '"이미 정해졌잖아" 하고 넘어간다', result: '도현은 다음부터 하고 싶은 것을 말하지 않는다.', impact: [{ who: '도현', text: '말해도 소용없다고 느낀다', tone: -1 }], why: '한 번의 차별이 다음 기회까지 막아요.' }] } },
      { id: 'propose', text: '"성별 말고 하고 싶은 사람과 연습 정도로 정하자"고 기준을 제안한다', result: '회의가 잠깐 멈추고 몇 명이 "그게 맞다"고 한다.', impact: [{ who: '도현·수아', text: '자기 뜻을 말할 기회가 생긴다', tone: 1 }], end: '결정 기준을 제안했어요.',
        next: { text: '한 친구가 "원래 여자가 피아노 더 잘 치잖아"라고 반대한다.', ask: '어떻게 답할까?', choices: [
          { id: 'evidence', text: '"그건 한 사람씩 들어 보면 알 수 있어. 둘 다 쳐 보자"고 답한다', result: '반이 동의하고 두 사람이 한 소절씩 연주한다.', impact: [{ who: '반 전체', text: '근거로 정하는 법을 익힌다', tone: 1 }], end: '고정관념 대신 직접 확인하자고 했어요.',
            next: { text: '연주를 듣고 반이 정할 차례다.', choices: [
              { id: 'vote', text: '희망·연습·연주를 기준으로 투표하고 회의록에 기준을 남긴다', result: '다음 행사에서도 같은 기준을 쓰기로 한다.', impact: [{ who: '반 전체', text: '평등한 결정 기준이 생긴다', tone: 1 }], ending: '기준을 회의록에 남겨 다음에도 쓰기로 했어요.' },
              { id: 'gender', text: '그래도 여학생이 하는 게 보기 좋다며 수아로 정한다', result: '연주를 들은 의미가 없어진다.', impact: [{ who: '도현', text: '다시 기회를 잃는다', tone: -1 }], why: '\'보기 좋다\'는 고정관념이에요. 정한 기준대로 결정해요.' }] } },
          { id: 'giveup', text: '반대가 나오니 "그럼 그냥 그렇게 해"라고 물러선다', result: '고정관념대로 정해진다.', impact: [{ who: '도현', text: '기회를 놓친다', tone: -1 }], why: '반대 의견에는 근거로 답할 수 있어요.' }] } }] };
    const R1 = [{ id: 'r1', text: '역할은 성별이 아니라 희망과 능력으로 정한다' }, { id: 'r2', text: '고정관념이 결정 기준이 되면 누군가의 기회가 막힌다' },
      { id: 'r3', text: '여학생이 반주하는 것이 원래 자연스럽다', why: '\'원래\'라는 말은 근거가 아니라 고정관념이에요.' }, { id: 'r4', text: '일부러 막은 게 아니니 차별이 아니다', why: '의도가 없어도 기회를 막으면 차별이 될 수 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '기준을 제안한 길에서는 두 사람 모두 뜻을 말할 수 있었다' }, { id: 'r6', text: '가만히 있거나 웃은 길에서는 고정관념대로 정해졌다' }], ok: ['r5', 'r6'] };
    const SCHOOL = [
      { name: '교실', icon: 'school', at: [1, 1] }, { name: '운동장', icon: 'park', at: [4, 2] }, { name: '동아리실', icon: 'museum', at: [4, 0] },
      { name: '급식실', icon: 'market', at: [1, 3] }, { name: '도서관', icon: 'library', at: [2, 0] },
    ];
    const MAP = (extra) => Object.assign({ grid: [6, 4], title: '우리 학교 평등 점검 지도(가상)', places: SCHOOL }, extra);

    ALL.push(
      // ---- 도입 ----
      M('intro.quote-hunt', {
        title: '학교에서 듣는 말 속 고정관념', method: '말 카드에서 성 역할 고정관념이 숨은 말 고르기', tool: 'wordcards', minutes: 5,
        levels: { easy: '말 카드 5장에서 고정관념이 숨은 말을 교사와 함께 고른다.', base: '말 카드 8장(고정관념이 없는 말 2장 포함)에서 고정관념이 숨은 말을 고르는 시연을 본다.', challenge: '고른 말 하나에서 고정관념을 만드는 낱말(\'남학생이\', \'여자애가\')을 찾아 바꿀 말을 짝에게 말한다.' },
        intro: {
          teacher: '"\'무거운 건 남학생이 들어\' — 이 말에는 어떤 생각이 숨어 있나요?" 학교에서 흔히 듣는 말 카드 8장을 띄우고 시연 단추로 고정관념이 숨은 말을 바구니에 담는 모습을 보인다. "남학생이 힘이 더 세니까 사실 아닌가요?"라는 학생에게 "우리 반 모두를 한 사람씩 보면 정말 그럴까요? 힘이 센 여학생, 꼼꼼한 남학생은 없을까요?"라고 되묻는다. \'하고 싶은 사람이 손 들자\'처럼 고정관념이 없는 말도 섞여 있다고 짚는다.',
          student: '학교에서 흔히 듣는 말 카드에서 성 역할 고정관념이 숨은 말을 골라요. 그 말을 듣는 사람의 기회가 어떻게 달라질지 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '고정관념이 숨은 말', cards: strip(QUOTES) }, sequence: [{ pick: QUOTES.filter((c) => c.ok).map((c) => c.id) }] },
          art: { draw: 'a paper-cut school hallway with paper speech bubbles floating above students, some bubbles marked with a paper underline', banner: '이 말 속에 숨은 생각은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '말 카드는 고정관념을 찾기 위한 예시이고, 학생에게 들은 적이 있는지 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.club-data', {
        title: '가상 동아리 지원 자료 해석', method: '가상 학교 동아리 성별 지원자 그래프에서 차이와 까닭 추측', tool: 'chart', minutes: 7,
        levels: { easy: '로봇·요리 두 동아리의 막대 4개만 짚어 차이를 말한다.', base: '네 동아리 막대 8개에서 차이가 가장 큰 동아리를 고르는 시연을 보고, 까닭을 흥미·주변 기대·안내 방식으로 나누어 말한다.', challenge: '이 자료만으로는 알 수 없는 것(지원하지 않은 사람의 마음 등)을 짝에게 말한다.' },
        intro: {
          teacher: '"축구부 지원자는 남학생 20명, 여학생 3명이에요. 여학생이 축구를 싫어해서일까요?" 가상 학교의 동아리 지원자 막대그래프를 띄우고 시연 단추로 차이가 가장 큰 동아리를 고른다. "원래 좋아하는 게 다르니까"라는 말이 나오면 "포스터에 남학생 사진만 있었다면, \'여자는 잘 안 하던데\'라는 말을 들었다면 어떻게 될까요?"라고 되묻는다. 차이의 까닭은 흥미·주변 기대·안내 방식이 섞여 있고, 자료만으로 단정할 수 없다고 짚는다. 자료는 가상이다.',
          student: '가상 학교의 동아리 지원자 그래프를 읽고 차이가 큰 동아리를 찾아, 그 까닭을 흥미·주변 기대·안내 방식으로 나누어 추측해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 학교 동아리 지원자(성별)', unit: '명', xLabel: '동아리·성별', yLabel: '지원자 수', data: CLUB, question: '남녀 지원자 차이가 가장 큰 동아리는?', choices: ['로봇', '요리', '댄스', '축구'] }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut bar chart with paired paper bars for four school clubs, a robot, a pot, music notes and a soccer ball as paper icons below', banner: '차이는 왜 생겼을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 교구는 계열 하나만 그려서 동아리마다 남·여 막대를 나란히 두었다. 값은 모두 가상이다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.chain-case', {
        title: '고정관념이 차별이 되는 과정', method: '가상 사례 장면을 차례로 놓고 멈출 지점 찾기', tool: 'timeline', minutes: 16,
        levels: { easy: '장면 카드 4장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 6장을 차례대로 놓고, 멈출 수 있었던 장면 2곳을 고른다.', challenge: '넷째 문항에서 멈춤 지점마다 누가 무엇을 할 수 있었는지 장면과 행동을 잇는다.' },
        activity: {
          title: '고정관념이 차별이 되는 과정', tool: 'timeline',
          teacher: '"지우는 로봇부에 가고 싶었는데, 왜 끝내 지원서를 내지 않았을까요? 누가 막았나요?" 가상 사례 장면을 차례대로 놓은 뒤 고정관념 → 말 → 맞장구 → 기회 포기로 이어지는 흐름을 짚는다. "아무도 지원하지 말라고 하지 않았으니 차별이 아니다"라는 학생에게 "일부러 막지 않았어도 말과 포스터가 함께 지우의 기회를 줄였다면요?"라고 되묻는다. 지우가 포기한 것을 지우의 탓으로 돌리지 않고, 멈출 수 있었던 사람과 장면을 찾게 한다.',
          task: '가상 인물 지우의 사례 장면을 일어난 차례대로 놓고, 고정관념이 차별로 번지기 전에 멈출 수 있었던 장면을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('지우의 사례 장면을 일어난 차례대로 놓으세요.', CHAIN, { axis: ['처음', '나중'] }),
              OB('지우의 사례 장면 4장을 일어난 차례대로 놓으세요.', pickCards(CHAIN, C4), { axis: ['처음', '나중'] })),
            IT(PB('멈출 수 있었던 장면 두 곳을 고르세요.', '멈출 수 있었던 장면', [
              { id: 'p1', text: '선배가 "여자는 잘 안 하던데"라고 말한다', ok: true }, { id: 'p2', text: '옆 친구들이 웃으며 맞장구친다', ok: true },
              { id: 'p3', text: '지우가 로봇부 지원서를 쓴다' }, { id: 'p4', text: '지우가 지원서를 내지 않는다' }]),
              PB('멈출 수 있었던 장면 한 곳을 고르세요.', '멈출 수 있었던 장면', [
                { id: 'p1', text: '선배가 "여자는 잘 안 하던데"라고 말한다', ok: true }, { id: 'p3', text: '지우가 로봇부 지원서를 쓴다' }])),
            IT(PB('지우가 포기한 까닭을 바르게 말한 것만 고르세요.', '바르게 본 까닭', [
              { id: 'w1', text: '고정관념이 담긴 말과 포스터가 망설이게 했다', ok: true }, { id: 'w2', text: '맞장구가 말을 더 무겁게 만들었다', ok: true },
              { id: 'w3', text: '지우가 마음이 약해서 포기했다', why: '포기한 사람을 탓하면 막은 말이 보이지 않아요.' }, { id: 'w4', text: '여자는 원래 로봇에 관심이 적다', why: '이것이 바로 지우를 막은 고정관념이에요.' }])),
            IT(MB('멈춤 지점마다 할 수 있었던 행동을 이으세요.', [['선배가 "여자는 잘 안 하던데"라고 말할 때', '선배: "누구나 환영"이라고 말한다'], ['친구들이 맞장구칠 때', '친구: "그게 무슨 상관이야"라고 멈춘다']], ['지우: 혼자 참는다']),
              null,
              MB('멈춤 지점마다 누가 무엇을 할 수 있었는지 이으세요.', [['선배가 "여자는 잘 안 하던데"라고 말할 때', '선배: "누구나 환영"이라고 말한다'], ['친구들이 맞장구칠 때', '친구: "그게 무슨 상관이야"라고 멈춘다'], ['포스터에 남학생 사진만 있을 때', '동아리: 다양한 부원 사진으로 바꾼다']], ['지우: 혼자 참는다', '선생님: 모른 척한다']),
              { conclude: '고정관념은 말·맞장구·안내 방식을 거쳐 누군가의 기회를 막는 차별이 돼요. 일부러가 아니어도 그래요. 멈출 수 있는 사람은 곁에 있는 모두예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '지우의 사례에서 멈출 수 있었던 장면 하나와, 그때 할 수 있었던 말을 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('act.role-assign', {
        title: '공정한 역할 분담 순서 짜기', method: '희망·순번 규칙으로 역할을 돌리는 명령 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '역할 별 3개(짐 나르기·장식·기록) 판에서 순번대로 별을 모두 들러 깃발에 닿는다.', base: '역할 별 4개(짐 나르기·장식·기록·응원 구호) 판에서 반복 블록으로 별을 모두 들르고 깃발에 닿고, 친구 순서를 따라가 본 뒤 틀린 블록 하나를 고친다.', challenge: '반복 블록을 꼭 써서 블록 6개 안으로 줄인다(희망이 겹칠 때 쓰는 \'돌아가며 맡기\' 규칙을 반복으로 나타냄).' },
        activity: {
          title: '공정한 역할 분담 순서 짜기', tool: 'block-coding',
          teacher: '"체육대회 준비 역할은 짐 나르기·장식·기록·응원 구호예요. 지금까지는 \'짐은 남학생, 장식은 여학생\'으로 나눴다면 무엇이 문제일까요?" 판의 별은 순번대로 돌아가며 맡는 역할 칸, 깃발은 \'모두가 한 번씩 맡음\', 바위는 \'성별로 미리 정한 역할\'이라고 말한다. "힘든 일은 원래 남자가"라는 학생에게 "짐을 나르고 싶은 여학생, 장식을 하고 싶은 남학생에게는 어떤 규칙이 공정할까요?"라고 되묻는다. 판은 규칙을 몸에 익히는 비유이고, 실제 분담표는 활동지에 쓴다.',
          task: '역할 별을 순번대로 모두 들러 \'모두가 한 번씩 맡음\' 깃발에 닿는 블록을 짜고, 공정한 역할 분담 규칙을 활동지에 정리해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '역할 별 넷을 순번대로 모두 들르고 바위(성별로 정한 역할)를 피해 깃발(모두 한 번씩)에 닿게 하세요.', toolOptions: B_BASE, target: { reach: true, stars: true } },
              { prompt: '역할 별 셋을 순번대로 모두 들러 깃발(모두 한 번씩)에 닿게 하세요.', toolOptions: B_EASY, target: { reach: true, stars: true } },
              { prompt: '반복 블록을 꼭 써서 블록 6개 안으로 역할 별 넷을 들르고 깃발에 닿게 하세요.', target: { reach: true, stars: true, use: ['rep'], maxBlocks: 6 } }),
            IT({ prompt: '친구가 짠 순서: 앞으로 2칸 → 왼쪽으로 돌기 → 앞으로 1칸. 거북이가 멈출 칸을 고르세요.', toolOptions: Object.assign({}, B_BASE, { mode: 'trace', program: ['fwd', 'fwd', 'left', 'fwd'] }), target: { end: { x: 2, y: 2 } } },
              { prompt: '친구가 짠 순서: 앞으로 1칸 → 왼쪽으로 돌기 → 앞으로 1칸. 거북이가 멈출 칸을 고르세요.', toolOptions: Object.assign({}, B_EASY, { mode: 'trace', program: ['fwd', 'left', 'fwd'] }), target: { end: { x: 1, y: 2 } } }),
            IT({ prompt: '친구 순서는 마지막 역할 뒤 엉뚱한 쪽으로 돌아요. 블록 하나만 고쳐 깃발에 닿게 하세요.', toolOptions: B_BASE, target: { reach: true, stars: true, maxEdits: 1 }, state: { program: ['rep:4', 'fwd', 'end', 'right', 'rep:3', 'fwd', 'end'] } },
              { prompt: '친구 순서가 마지막에 엉뚱한 쪽으로 돌아요. 블록 하나만 고쳐 깃발에 닿게 하세요.', toolOptions: B_EASY, target: { reach: true, stars: true, maxEdits: 1 }, state: { program: ['fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd', 'fwd'] } },
              null,
              { conclude: '역할은 성별이 아니라 희망과 순번으로 정하고, 모두가 돌아가며 맡으면 누구의 기회도 막히지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '체육대회 준비 역할을 희망·순번 규칙으로 나눠 써요.', columns: ['역할', '정하는 규칙'], cells: [['짐 나르기', ''], ['장식', ''], ['기록', ''], ['응원 구호', '']], answer: '(예) 희망을 먼저 받고, 겹치면 순번대로 돌아가며 맡는다' }] },
        notes: '교구 한계: 거북이 판의 블록에 글을 붙일 수 없어 역할을 별 칸으로, \'모두가 한 번씩 맡음\'을 깃발로 나타냈다. 계획의 \'희망이 겹칠 때 규칙 하나 더\'는 반복 블록(돌아가며 맡기)으로 바꾸고, 규칙 글은 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
      M('act.class-scenario', {
        title: '합창대회 반주 학급 회의 갈림길', method: '학급 회의 고정관념 의견에 대응하는 갈림길', tool: 'dilemma', minutes: 28,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 도현·수아에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 평등한 결정 기준의 근거를 고른다.', challenge: '다른 길의 결과와 견주는 근거까지 고르고, 넷째 문항에서 회의록에 남길 결정 기준 문장을 고른다.' },
        activity: {
          title: '합창대회 반주 학급 회의 갈림길', tool: 'dilemma',
          teacher: '"\'반주는 당연히 여학생\'이라는 말에 아무도 반대하지 않으면, 그건 모두가 동의한 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "여자가 피아노를 더 잘 치는 건 사실"이라는 학생에게 "그 말이 사실인지 이 반에서 확인하는 방법은 무엇일까요?"라고 되묻는다. 끝에서 결정 기준(희망·연습·직접 확인)을 회의록에 남기면 다음 결정도 공정해진다는 점을 짚는다.',
          task: '학급 회의에서 고정관념이 담긴 의견이 나온 장면에서 길을 골라 결과를 따라가고, 평등한 결정 기준의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '반주자를 정하는 회의예요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '반주자를 정하는 회의예요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '합창대회 반주', D1, [['propose', 'evidence', 'vote'], ['laugh', 'sorry', 'audition']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '회의에서 나온 다른 의견을 판단하는 장면을 따라가세요.', toolOptions: { title: '지휘자는 누가?', scene: { text: '이번엔 지휘자를 정한다. 누군가 "지휘는 목소리 큰 남학생이 해야 멋있지"라고 한다.', ask: '이 의견을 어떻게 볼까?', motif: 'house', choices: [
              { id: 'fine', text: '멋있어 보이면 그게 기준이다', result: '하고 싶던 여학생 둘이 손을 내린다.', impact: [{ who: '하고 싶던 학생', text: '기회를 잃는다', tone: -1 }], why: '\'멋있다\'는 기준 뒤에 성별 고정관념이 숨어 있어요.' },
              { id: 'ask', text: '"하고 싶은 사람부터 받자"고 한다', result: '세 명이 손을 들고 해 보고 정한다.', impact: [{ who: '반 전체', text: '희망으로 정한다', tone: 1 }], ending: '성별 대신 희망으로 정했어요.' }] }, reasons: [{ id: 'q1', text: '\'멋있다\'는 기준에 성별 고정관념이 숨어 있다' }, { id: 'q2', text: '희망과 연습으로 정하면 모두에게 기회가 있다' }, { id: 'q3', text: '목소리 크기는 성별로 정해진다', why: '목소리 크기는 사람마다 달라요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['ask']], reasons: ['q1', 'q2'], some: true } },
              { prompt: '지휘자를 정하는 의견을 판단하세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '칭찬 말 속 고정관념을 판단하는 장면을 따라가세요.', toolOptions: { title: '칭찬처럼 들리는 말', scene: { text: '연습이 끝나자 선생님 역할의 가상 인물이 "역시 여학생들은 꼼꼼해, 남학생들은 힘이 좋고"라고 칭찬한다.', ask: '이 말을 어떻게 볼까?', motif: 'house', choices: [
              { id: 'praise', text: '칭찬이니 괜찮다', result: '꼼꼼한 남학생, 힘 좋은 여학생의 노력은 보이지 않는다.', impact: [{ who: '반 전체', text: '역할이 성별로 굳어진다', tone: -1 }], why: '성별로 묶은 칭찬도 고정관념을 키워요.' },
              { id: 'each', text: '한 사람씩 한 일을 칭찬하는 말로 바꾸자고 한다', result: '"수아는 박자를 잘 맞췄고, 도현은 악보를 정리했어"처럼 말이 바뀐다.', impact: [{ who: '반 전체', text: '각자의 노력이 보인다', tone: 1 }], ending: '한 사람씩 한 일을 칭찬했어요.' }] }, reasons: [{ id: 'k1', text: '성별로 묶은 칭찬은 사람마다의 노력을 가린다' }, { id: 'k2', text: '좋은 뜻이면 고정관념이 아니다', why: '좋은 뜻이어도 고정관념은 기회와 기대를 나눠요.' }], compare: true },
              target: { path: [['each']], reasons: ['k1'] } }),
            IT({ prompt: '회의록에 남길 결정 기준을 고르는 장면을 따라가세요.', toolOptions: { title: '회의록 한 줄', scene: { text: '회의가 끝나고 서기가 회의록에 결정 기준 한 줄을 남기려 한다.', ask: '어떤 기준을 남길까?', motif: 'house', choices: [
              { id: 'rule', text: '"역할은 희망을 먼저 받고, 겹치면 해 보고 투표로 정한다"', result: '다음 행사에서도 이 기준을 쓴다.', impact: [{ who: '반 전체', text: '평등한 기준이 이어진다', tone: 1 }], ending: '평등한 결정 기준을 남겼어요.' },
              { id: 'usual', text: '"늘 하던 대로 정한다"', result: '다음에도 고정관념대로 정해진다.', impact: [{ who: '반 전체', text: '같은 일이 되풀이된다', tone: -1 }], why: '\'하던 대로\'는 고정관념을 되풀이하게 해요.' }] }, reasons: [{ id: 'm1', text: '기준을 글로 남기면 다음 결정도 공정해진다' }, { id: 'm2', text: '기준은 그때그때 분위기로 정한다', why: '분위기로 정하면 고정관념이 끼어들어요.' }], compare: false },
              target: { path: [['rule']], reasons: ['m1'] } },
              null, null,
              { conclude: '평등한 결정은 성별이 아니라 희망·연습·직접 확인을 기준으로 해요. 가만히 있거나 웃어넘기면 고정관념이 기준이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"반주는 당연히 여학생"이라는 의견에 대한 평등한 결정 기준은?', options: ['성별로 정한다', '희망과 할 수 있는 사람을 기준으로 정한다', '목소리 큰 사람이 정한다'], answer: '희망과 할 수 있는 사람을 기준으로 정한다' }, { type: 'short', prompt: '우리 반 회의록에 남길 평등한 결정 기준을 한 문장으로 써요.' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.equal-pledge', {
        title: '평등한 표현으로 바꾸기 한 줄 글', method: '고정관념 말을 평등한 표현으로 바꾸고 까닭 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '바꿀 말("무거운 건 남학생이 들어")이 정해져 있고 문장 시작 말을 채워 쓴다.', base: '오늘 찾은 말 가운데 하나를 스스로 골라 바꾸고 까닭을 2~3문장으로 쓴다.', challenge: '바꾼 말을 듣는 사람에게 생길 변화를 한 문장 덧붙인다(셋째 출구 질문).' },
        wrap: {
          teacher: '"오늘 찾은 말 가운데 내일 교실에서 바로 바꿔 쓸 수 있는 말은 무엇일까요?" 한 줄 바꾸기와 그 까닭을 쓰게 한다. "\'남학생이\'만 빼면 되나요?"라는 학생에게 "\'힘센 사람이 들어\'로 바꾸면 고정관념이 정말 사라졌을까요? 누가 할지 어떻게 정할까요?"라고 되묻는다. 친구 이름을 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', prompt: '오늘 찾은 말 하나를 평등한 표현으로 바꾸고 까닭을 써요.', options: { topic: '오늘 찾은 고정관념 말 하나를 골라 평등한 표현으로 바꾸고, 그렇게 바꾼 까닭을 2~3문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '평등한 표현 한 줄' }, target: { selfCheck: ['바꿀 말을 하나 골랐다', '성별 대신 희망·순번·능력을 말했다', '바꾼 까닭을 썼다'] }, difficulty: 0.15 },
              { prompt: '"무거운 건 남학생이 들어"를 평등한 표현으로 바꿔 써요.', toolOptions: { topic: '"무거운 건 남학생이 들어"를 평등한 표현으로 바꾸고 까닭을 한 문장 쓰세요.', minChars: 15, minSentences: 1, maxSentences: 2, starter: '무거운 건 ___ 들자.' }, target: { selfCheck: ['성별 대신 희망·순번·능력을 말했다', '바꾼 까닭을 썼다'] } }),
            { type: 'choice', prompt: '"고정관념은 사실에 근거한 것이라 괜찮다"는 말이 틀린 까닭은?', options: ['사실이면 괜찮다', '한 집단을 하나로 묶어 그 안의 한 사람을 보지 못하게 한다', '아무도 일부러 하지 않았다'], answer: 1, difficulty: 0.2, explain: '사람마다 다른데 집단으로 묶으면 그 사람의 기회와 선택이 가려져요.' },
            { type: 'short', prompt: '바꾼 말을 듣는 사람에게 생길 변화를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '평등한 표현으로 바꾸기',
          items: [
            { type: 'table', prompt: '고정관념 말을 평등한 표현으로 바꿔 써요.', columns: ['처음 말', '바꾼 말'], cells: [['무거운 건 남학생이 들어', ''], ['여학생이 꼼꼼하니 서기 해', '']], answer: '(예) 들 수 있는 사람이 같이 들자 / 서기는 하고 싶은 사람이 돌아가며 하자' },
            { type: 'short', prompt: '바꾼 까닭을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.school-map', {
        title: '학교 안 평등 점검 지도', method: '학교 칸 지도에서 고정관념이 드러나기 쉬운 곳 고르기', tool: 'map', minutes: 7,
        levels: { easy: '장소 3곳(교실·운동장·동아리실)에 차례로 핀을 꽂는다(출구 1·2).', base: '장소 5곳 지도에서 고정관념이 드러나기 쉬운 곳에 핀을 꽂고, 그곳에서 바꿀 행동을 고른다.', challenge: '가장 먼저 바꿀 곳과 맡을 사람을 정해 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"우리 학교에서 \'남학생은 운동장, 여학생은 교실\' 같은 말이 가장 자주 나오는 곳은 어디일까요?" 가상 학교 칸 지도에 핀을 꽂으며 장소마다 바꿀 행동 하나를 정한다. "운동장은 원래 남학생이 많이 쓰니까"라는 학생에게 "운동장을 쓰고 싶은 여학생이 쓰지 못한다면, 무엇을 바꿔야 할까요?"라고 되묻는다. 바꿀 행동은 실제로 해 볼 수 있는 작은 것으로 고르게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: MAP({ ask: { q: '운동장에서 바꿀 행동은?', choices: ['공 쓰는 시간을 학급이 돌아가며 정한다', '원래대로 남학생이 먼저 쓴다', '여학생은 교실에 있게 한다'], why: ['', '\'원래대로\'는 고정관념을 그대로 두는 거예요.', '성별로 공간을 나누는 것도 차별이에요.'] } }), prompt: '공 쓰는 자리를 두고 고정관념이 드러나기 쉬운 곳에 핀을 꽂고, 바꿀 행동을 골라요.', target: { place: '운동장', pick: 0 }, difficulty: 0.2 },
              { prompt: '운동장에 핀을 꽂고 바꿀 행동을 골라요(장소 3곳).', toolOptions: { places: SCHOOL.slice(0, 3) } }),
            IT({ type: 'tool', tool: 'map', options: MAP({ ask: { q: '동아리실에서 바꿀 행동은?', choices: ['안내 포스터에 다양한 부원 사진을 싣는다', '로봇부는 남학생만 받는다', '지원자가 적으면 그냥 둔다'], why: ['', '성별로 지원을 막는 것은 차별이에요.', '적은 까닭을 살펴보는 것이 먼저예요.'] } }), prompt: '동아리 안내에서 고정관념이 드러나기 쉬운 곳에 핀을 꽂고, 바꿀 행동을 골라요.', target: { place: '동아리실', pick: 0 }, difficulty: 0.2 },
              { prompt: '동아리실에 핀을 꽂고 바꿀 행동을 골라요(장소 3곳).', toolOptions: { places: SCHOOL.slice(0, 3) } }),
            { type: 'choice', prompt: '"차별은 일부러 할 때만 차별이다"에 대한 생각으로 알맞은 것은?', options: ['맞다', '일부러가 아니어도 기회를 막으면 차별이 될 수 있다', '말로 하는 건 차별이 아니다'], answer: 1, difficulty: 0.2, explain: '의도가 없어도 결과로 기회를 막으면 차별이 될 수 있어요.' },
            { type: 'short', prompt: '가장 먼저 바꿀 곳과 그 일을 맡을 사람(학생회·학급·동아리 등)을 써요.' },
          ],
        },
        worksheet: {
          title: '학교 안 평등 점검',
          items: [
            { type: 'table', prompt: '장소마다 바꿀 행동을 써요.', columns: ['장소', '바꿀 행동'], cells: [['교실', ''], ['운동장', ''], ['동아리실', '']], answer: '(예) 역할을 순번으로, 공 쓰는 시간을 돌아가며, 안내 사진을 다양하게' },
            { type: 'short', prompt: '가장 먼저 바꿀 곳과 맡을 사람을 써요.' },
          ],
        },
        notes: '지도는 가상 학교다. 계획의 \'핀 여러 개\'는 문항마다 핀 하나라서 장소 둘을 출구 질문 두 개로 나누었다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 04-g7-boundary-voice.js ====
  // ==== 7학년 · 내 몸의 결정권과 분명한 의사 표현 (gender.m.g7-boundary-voice) ====
  {
    const M = MK('g7-boundary-voice', [7]);
    const RINGS = ['몸', '마음', '정보'];
    const RING_CARDS = [
      { id: 'b1', text: '갑자기 어깨동무하기', to: '몸' }, { id: 'b2', text: '묻지 않고 껴안기', to: '몸' }, { id: 'b3', text: '머리를 마음대로 만지기', to: '몸' },
      { id: 'm1', text: '싫다는 별명으로 부르기', to: '마음' }, { id: 'm2', text: '털어놓은 비밀을 다른 친구에게 말하기', to: '마음' }, { id: 'm3', text: '고민을 놀림거리로 삼기', to: '마음' },
      { id: 'i1', text: '내 사진을 묻지 않고 올리기', to: '정보' }, { id: 'i2', text: '내 위치를 단톡방에 알리기', to: '정보' }, { id: 'i3', text: '내 휴대폰을 마음대로 열어 보기', to: '정보' },
    ];
    // 휴대폰 사진 갈림길(깊이 3)
    const D1 = { text: '쉬는 시간, 친한 친구 예린이 "뭐 있나 보자" 하며 내 휴대폰을 집어 사진첩을 넘겨본다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'laugh', text: '웃으며 넘긴다', result: '예린이 사진을 하나 골라 다른 친구에게 보여 준다.', impact: [{ who: '나', text: '불편한데 말을 못 한다', tone: -1 }], why: '웃으면 상대는 괜찮다고 받아들일 수 있어요. 불편하면 말해요.', end: '말하지 못해 사진이 다른 친구에게까지 갔어요.',
        next: { text: '예린이 "이 사진 단톡방에 올려도 돼?"라고 묻는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'nowsay', text: '"아니, 안 돼. 그리고 내 휴대폰은 묻고 봐 줘"라고 말한다', result: '예린이 "아, 미안" 하고 휴대폰을 돌려준다.', impact: [{ who: '나', text: '늦었지만 경계를 지킨다', tone: 1 }], end: '늦었지만 분명하게 말했어요.',
            next: { text: '예린이 "친구끼리 왜 그래?"라고 서운해한다.', choices: [
              { id: 'explain', text: '"친해도 내 물건과 사진은 내가 정하고 싶어"라고 차분히 말한다', result: '예린이 "알았어, 다음엔 물어볼게"라고 한다.', impact: [{ who: '예린과 나', text: '서로의 경계를 알게 된다', tone: 1 }], ending: '친한 사이에도 경계가 있다는 것을 말로 나눴어요.' },
              { id: 'back', text: '서운해하니 "그냥 올려도 돼"라고 물러선다', result: '원하지 않는 사진이 단톡방에 올라간다.', impact: [{ who: '나', text: '마음이 무겁다', tone: -1 }], why: '상대가 서운해해도 내 경계는 지켜도 돼요.' }] } },
          { id: 'ok', text: '분위기 깨기 싫어 "응"이라고 한다', result: '사진이 단톡방에 올라가 놀림 댓글이 달린다.', impact: [{ who: '나', text: '후회한다', tone: -1 }], why: '분위기 때문에 한 대답은 내 진짜 뜻이 아닐 수 있어요.' }] } },
      { id: 'clear', text: '"내 휴대폰은 내가 보여 줄게. 돌려줘"라고 분명히 말한다', result: '예린이 멈칫하고 휴대폰을 돌려준다.', impact: [{ who: '나', text: '내 경계를 지킨다', tone: 1 }], end: '분명하게 말해 경계를 지켰어요.',
        next: { text: '예린이 "친구끼리 왜 그래? 서운하다"라고 한다.', ask: '어떻게 답할까?', choices: [
          { id: 'calm', text: '"서운하게 하려던 건 아니야. 친해도 내 사진은 내가 정하고 싶어"', result: '예린이 잠시 생각하다 고개를 끄덕인다.', impact: [{ who: '예린과 나', text: '서로 존중하는 대화가 된다', tone: 1 }], end: '서운함을 알아주면서 경계를 말했어요.',
            next: { text: '다음 날 예린이 "네 사진 보여 줄 수 있어?"라고 먼저 묻는다.', choices: [
              { id: 'thanks', text: '"물어봐 줘서 고마워"라고 답하고 내가 보여 줄 것만 보여 준다', result: '둘 다 편하게 사진을 본다.', impact: [{ who: '예린과 나', text: '믿음이 커진다', tone: 1 }], ending: '묻고 답하는 사이가 됐어요.' },
              { id: 'tease', text: '"이제야 묻네?" 하고 비꼰다', result: '예린이 머쓱해한다.', impact: [{ who: '예린', text: '물어본 것이 무안해진다', tone: -1 }], why: '상대가 바꾼 행동은 고마움으로 받아 주면 좋아요.' }] } },
          { id: 'sorry', text: '"내가 너무했나…" 하며 휴대폰을 다시 건넨다', result: '예린이 다시 사진첩을 넘긴다.', impact: [{ who: '나', text: '경계를 내려놓는다', tone: -1 }], why: '친한 사이라도 경계를 말한 것은 잘못이 아니에요.' }] } },
      { id: 'angry', text: '"야! 미쳤어?" 하고 소리치며 휴대폰을 빼앗는다', result: '예린이 놀라 화를 내고 둘 다 기분이 상한다.', impact: [{ who: '예린과 나', text: '말다툼이 된다', tone: -1 }], why: '화가 나는 마음은 자연스럽지만, 분명하고 차분한 말이 더 잘 전해져요.', ending: '경계는 지켰지만 다툼이 됐어요.' }] };
    const R1 = [{ id: 'r1', text: '친한 사이에도 몸·마음·정보의 경계가 있다' }, { id: 'r2', text: '분명하고 차분한 말이 경계를 잘 전한다' },
      { id: 'r3', text: '친구라면 휴대폰을 봐도 된다', why: '친한 사이여도 내 정보는 내가 정해요.' }, { id: 'r4', text: '서운하게 했으니 내가 잘못했다', why: '경계를 말하는 것은 잘못이 아니에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '내가 같은 일을 당하면 나도 불편할 것이다' }, { id: 'r6', text: '분명히 말한 길에서는 서로 묻는 사이가 됐다' }], ok: ['r5', 'r6'] };
    const HOME = [
      { name: '교실(담임)', icon: 'school', at: [1, 1] }, { name: '상담실', icon: 'office', at: [3, 1] },
      { name: '보건실', icon: 'hospital', at: [3, 3] }, { name: '집(보호자)', icon: 'house', at: [5, 2] },
    ];
    const MAP = (extra) => Object.assign({ grid: [6, 4], title: '학교와 집 도움 지도(가상)', places: HOME }, extra);
    const WORDS = ['묻기', '기다리기', '존중하기'];

    ALL.push(
      // ---- 도입 ----
      M('intro.boundary-rings', {
        title: '몸·마음·정보 경계 세 겹', method: '나를 가운데 두고 세 경계 가지에 사례 카드 붙이기', tool: 'mindmap', minutes: 5,
        levels: { easy: '사례 6장(가지마다 2장)을 붙이는 시연을 보고 하나씩 소리 내어 읽는다.', base: '사례 9장이 몸·마음·정보 가지에 붙는 시연을 보고, 카드마다 왜 그 경계인지 말한다.', challenge: '사람마다 경계가 다른 사례(예: 어깨동무)를 골라 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"\'경계\'라고 하면 몸만 떠오르나요? 비밀과 사진에도 경계가 있어요." 가운데 \'나\'에서 몸·마음·정보 세 가지를 펼치고 시연 단추로 사례 카드 9장이 붙는 모습을 보인다. "친한 사이면 경계가 없어도 된다"는 학생에게 "가장 친한 친구가 내 휴대폰을 마음대로 연다면 어떨까요?"라고 되묻는다. 어깨동무처럼 괜찮은 사람과 불편한 사람이 다른 사례가 있다는 것을 짚고, 그래서 묻는 것이 필요하다고 말한다.',
          student: '나를 가운데 두고 몸·마음·정보 세 경계를 펼쳐, 사례 카드가 어느 경계를 넘는 일인지 생각해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '나', slots: RINGS, cards: strip(RING_CARDS) }, sequence: [{ sort: { 몸: ['b1', 'b2', 'b3'], 마음: ['m1', 'm2', 'm3'], 정보: ['i1', 'i2', 'i3'] } }] },
          art: { draw: 'a paper-cut figure in the center surrounded by three layered paper rings of different pastel colors, small icons of a hand, a heart and a phone on the rings', banner: '내 경계 세 겹', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.voice-meter', {
        title: '같은 말, 다른 목소리', method: '흐린 말투와 분명한 말투를 리듬 블록으로 견주기', tool: 'keyboard', minutes: 7,
        levels: { easy: '시연의 두 마디(흐리게·분명하게)를 듣고 어느 쪽이 잘 들리는지만 말한다.', base: '두 마디를 듣고 분명한 거절에 필요한 요소(눈 맞춤·짧은 말·반복) 세 가지를 짝과 고른다.', challenge: '나만의 분명한 거절 문장을 하나 정해 리듬으로 손뼉 쳐 본다.' },
        intro: {
          teacher: '"\'하지 마\'를 이렇게 작고 흐리게 말할 때와, 이렇게 짧고 또박또박 말할 때 — 상대는 어느 쪽을 진짜 거절로 들을까요?" 시연 단추로 첫 마디(8분음표와 쉼표가 흩어진 흐린 리듬)와 둘째 마디(4분음표 두 번 + 2분음표 한 번의 분명한 리듬)를 차례로 들려준다. "크게 소리치면 되지 않나요?"라는 학생에게 "소리 크기보다 짧은 말, 눈 맞춤, 필요하면 한 번 더 말하기가 중요하지 않을까요?"라고 되묻는다. 거절을 분명하게 못 했다고 그 사람 잘못이 되는 것은 아니며, 멈출 책임은 듣는 쪽에 있다고 짚는다.',
          student: '"하지 마"를 흐리게 말한 리듬과 분명하게 말한 리듬을 듣고 견주어, 분명한 거절에 필요한 요소를 골라요.',
          demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er'] }, sequence: [{ rhythm: ['e', 'er', 'e', 'er', 'qr', 'qr', 'q', 'q', 'h'] }] },
          art: { draw: 'a paper-cut pair of speech bubbles, one small and wobbly, one bold and clear, paper music notes floating between them', banner: '분명하게 말하기', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '리듬은 말투를 견주는 비유다. 거절을 흐리게 했다고 그 사람에게 책임이 생기지 않는다는 점을 함께 말한다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.friend-dilemma', {
        title: '친구 사이 경계 갈림길', method: '친구가 휴대폰을 마음대로 볼 때의 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '친구 입장에서 같은 일을 당하면 어떨지 견주는 근거 카드까지 고른다.' },
        activity: {
          title: '친구 사이 경계 갈림길', tool: 'dilemma',
          teacher: '"예린은 나쁜 뜻이 없었어요. 그래도 내 휴대폰을 넘겨보는 건 괜찮을까요?" 학생마다 한 길을 끝까지 간 뒤 되돌아가 다른 길과 견주게 한다. "친구끼리 이 정도는"이라는 학생에게 "예린의 휴대폰을 내가 마음대로 넘겨보면 예린은 어떨까요?"라고 되묻는다. 화를 내는 길과 분명히 말하는 길의 결과가 어떻게 다른지, 서운함을 알아주면서도 경계를 지킬 수 있다는 점을 끝에서 짚는다.',
          task: '친한 친구가 내 휴대폰 사진을 마음대로 넘겨보는 장면에서 길을 골라 결과를 따라가고, 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '예린이 내 휴대폰을 넘겨봐요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '예린이 내 휴대폰을 넘겨봐요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 친구 입장과 견주는 근거까지 고르세요.' },
              '휴대폰 사진첩', D1, [['clear', 'calm', 'thanks'], ['laugh', 'nowsay', 'explain']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '몸의 경계를 지키는 장면을 따라가세요.', toolOptions: { title: '몸의 경계', scene: { text: '모둠 활동 중 친구 태오가 말할 때마다 내 머리를 장난스럽게 쓰다듬는다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'say', text: '"머리 만지는 건 싫어, 말로만 해 줘"라고 말한다', result: '태오가 "몰랐어, 미안" 하고 멈춘다.', impact: [{ who: '나', text: '편해진다', tone: 1 }], ending: '짧고 분명하게 말해 멈췄어요.' },
              { id: 'bear', text: '친구니까 참는다', result: '쓰다듬기가 계속된다.', impact: [{ who: '나', text: '모둠 활동이 불편하다', tone: -1 }], why: '친구 사이여도 불편한 접촉은 말할 수 있어요.' }] }, reasons: [{ id: 'q1', text: '내 몸에 대한 결정은 내가 한다' }, { id: 'q2', text: '장난이면 싫어도 참아야 한다', why: '장난이어도 싫으면 멈춰 달라고 할 수 있어요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['say']], reasons: ['q1'] } },
              { prompt: '몸의 경계를 지키는 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '마음의 경계를 지키는 장면을 따라가세요.', toolOptions: { title: '마음의 경계', scene: { text: '내가 털어놓은 고민을 친구가 다른 친구들 앞에서 "얘 이런 걱정 한대"라며 꺼낸다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'later', text: '따로 불러 "그건 너한테만 한 얘기야. 다른 데 말하지 말아 줘"라고 한다', result: '친구가 "생각 못 했어, 안 할게"라고 한다.', impact: [{ who: '나', text: '믿음을 다시 세운다', tone: 1 }], ending: '마음의 경계를 분명히 알려 줬어요.' },
              { id: 'revenge', text: '나도 그 친구 비밀을 말해 버린다', result: '둘 다 상처받고 반에 소문이 돈다.', impact: [{ who: '둘 다', text: '마음이 상한다', tone: -1 }], why: '되갚으면 경계가 더 무너져요. 원하는 것을 말로 알려요.' }] }, reasons: [{ id: 'k1', text: '비밀은 털어놓은 사람의 마음의 경계다' }, { id: 'k2', text: '되갚아야 다음에 안 한다', why: '되갚기는 다툼을 키워요.' }], compare: true },
              target: { path: [['later']], reasons: ['k1'] },
              conclude: '친한 사이에도 몸·마음·정보의 경계가 있어요. 불편하면 짧고 분명하게, 상대의 마음도 알아주며 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"친구끼리 왜 그래?"라는 말을 들었을 때 경계를 지키며 할 수 있는 말을 한 문장으로 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('act.script-refuse', {
        title: '거절·확인·철회 역할극 대본', method: '세 장면 역할극 대본 엮고 빈 대사 채우기', tool: 'story', minutes: 15,
        levels: { easy: '대본 카드를 놓으면 바로 맞는지 알려 주고, 빈 대사에는 알맞은 대사와 함정 대사 하나만 놓인다.', base: '바로 알림 없이 장면 ①을 차례로 엮고, 장면 ②·③의 빈 대사를 함정 대사가 섞인 카드에서 고른다(직접 쓰는 대사 2줄은 활동지에).', challenge: '넷째 문항에서 상대가 받아들이지 않을 때의 다음 대사까지 채운다.' },
        activity: {
          title: '거절·확인·철회 역할극 대본', tool: 'story',
          teacher: '"\'좋다고 했다가 마음이 바뀌면, 다시 싫다고 말해도 될까요?\'" 세 장면(① 사진 찍자는 말 거절 ② 장난 전 확인 묻기 ③ 좋다고 했다가 마음 바꾸기)의 대본을 엮고 짝과 역할을 바꿔 읽게 한다. "한 번 좋다고 했으면 끝"이라는 학생에게 "놀이공원에서 타겠다고 했다가 줄 앞에서 무서워지면, 타야만 할까요?"라고 되묻는다. 확인을 묻는 쪽의 말도 함께 연습해, 묻고 기다리는 것도 존중이라는 점을 짚는다.',
          task: '거절·확인·철회 세 장면의 역할극 대본을 차례대로 엮고, 빈 대사에 분명하고 존중하는 말을 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('장면 ① 사진 찍자는 말을 거절하는 대본을 차례대로 엮으세요.', [
              { id: 'o1', text: '가윤: "우리 단체 사진 찍어서 올리자!"' }, { id: 'o2', text: '나: "나는 오늘은 안 찍을래."' },
              { id: 'o3', text: '가윤: "왜? 한 장만!"' }, { id: 'o4', text: '나: "안 찍고 싶어. 나 빼고 찍어 줘."' }, { id: 'o5', text: '가윤: "알았어, 너 빼고 찍을게."' }],
              {}, [{ id: 'ox', text: '나: "음… 그럼 한 장만…"' }])),
            IT(FB('장면 ② 장난치기 전에 확인을 묻는 대사를 채우세요.', [
              ['장난치기 전: "___"', '등 간지럽혀도 괜찮아?', '태오'], ['대답: "___"', '아니, 지금은 싫어.', '나'], ['대답을 들은 뒤: "___"', '알았어, 안 할게.', '태오']],
              ['싫어도 그냥 할게!', '에이, 장난인데 뭐 어때.']),
              FB('장면 ② 장난치기 전에 확인을 묻는 대사를 채우세요.', [
                ['장난치기 전: "___"', '등 간지럽혀도 괜찮아?', '태오'], ['대답을 들은 뒤: "___"', '알았어, 안 할게.', '태오']], ['싫어도 그냥 할게!'])),
            IT(FB('장면 ③ 좋다고 했다가 마음이 바뀐 대본의 빈 대사를 채우세요.', [
              ['처음: "___"', '응, 팔짱 껴도 돼.', '나'], ['조금 뒤: "___"', '미안, 이제 그만하고 싶어.', '나'], ['들은 뒤: "___"', '그래, 말해 줘서 고마워.', '가윤']],
              ['아까 된다고 했잖아!', '한 번 좋다고 했으면 끝이야.']),
              FB('장면 ③ 마음이 바뀐 대본의 빈 대사를 채우세요.', [
                ['조금 뒤: "___"', '미안, 이제 그만하고 싶어.', '나'], ['들은 뒤: "___"', '그래, 말해 줘서 고마워.', '가윤']], ['아까 된다고 했잖아!'])),
            IT(FB('장면 ①의 뒷이야기: 가윤이 또 조를 때의 다음 대사를 채우세요.', [
              ['가윤: "에이, 한 장만 찍자니까!" 나: "___"', '두 번 말했어. 나는 안 찍어.', '나'], ['그래도 조르면: "___"', '계속 그러면 선생님께 말할게.', '나']],
              ['그래, 그럼 찍자…']),
              null,
              FB('장면 ①의 뒷이야기: 가윤이 또 조를 때의 다음 대사를 채우세요.', [
                ['가윤: "에이, 한 장만 찍자니까!" 나: "___"', '두 번 말했어. 나는 안 찍어.', '나'], ['그래도 조르면: "___"', '계속 그러면 선생님께 말할게.', '나'], ['가윤이 사진을 올렸다면: "___"', '그 사진 지워 줘. 내 동의 없이 올렸어.', '나']],
                ['그래, 그럼 찍자…', '내가 너무 예민한가 봐.']),
              { conclude: '거절은 짧고 분명하게, 확인은 묻고 기다리며, 마음은 언제든 바꿀 수 있어요(철회). 바뀐 마음을 들으면 멈추고 고맙다고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 장면 가운데 하나를 골라, 내가 직접 쓴 거절·확인·철회 대사 2줄을 써요.' }] },
        notes: '이야기 판은 대사를 직접 쓰지 못해, 계획의 \'대사 2줄 직접 쓰기\'는 활동지에서 한다. 등장인물은 가상 인물(가윤·태오)이다. ' + SAFE_NOTE,
      }),
      M('act.consent-check', {
        title: '어깨를 치는 친구에게 할 말', method: '가상 상황에서 할 말을 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 틀("나는 네가 ___ 할 때 ___. ___ 해 줘.")을 채워 쓰고 기준 2개를 점검한다.', base: '3문장으로 쓰고 기준표 4항목(나 전달·분명함·상대 존중·다음 행동)으로 점검한다.', challenge: '넷째 문항에서 말이 통하지 않을 때 도움을 청할 사람과 방법을 덧붙인다.' },
        activity: {
          title: '어깨를 치는 친구에게 할 말', tool: 'rubric-writing',
          teacher: '"모둠 친구가 이야기할 때마다 내 어깨를 자꾸 쳐요. 장난인 걸 알아도 불편하다면, 무엇이라고 말할까요?" 가상 상황에서 할 말을 쓰고 기준표로 점검하게 한다. "그냥 \'하지 마!\'만 하면 되잖아요"라는 학생에게 "그 말에 내 마음과 바라는 행동이 들어 있나요? 상대가 무엇을 바꾸면 될지 알까요?"라고 되묻는다. 상대를 깎아내리는 말("넌 왜 그렇게 무식해")은 경계를 전하지 못한다고 짚는다.',
          task: '모둠 친구가 내 어깨를 자꾸 치는 가상 상황에서 할 말을 쓰고, 나 전달·분명함·상대 존중·다음 행동이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '나 전달법으로 내 마음을 말하는 첫 문장을 쓰세요.', toolOptions: { topic: '가상 상황: 모둠 친구 준서가 말할 때마다 내 어깨를 친다. "나는 ~할 때 ~하다"처럼 내 마음을 말하는 첫 문장을 쓰세요.', minChars: 15, maxChars: 100, minSentences: 1, maxSentences: 2, title: '할 말 ① 나 전달' }, target: { selfCheck: ['\'나는\'으로 내 마음을 말했다', '상대를 깎아내리지 않았다', '무엇이 불편한지 분명히 썼다'], mustInclude: [['나는', '내가']] } },
              { prompt: '문장 틀을 채워 첫 문장을 쓰세요.', toolOptions: { starter: '나는 네가 ___ 할 때 ___.' }, target: { selfCheck: ['\'나는\'으로 내 마음을 말했다', '상대를 깎아내리지 않았다'], mustInclude: [['나는', '내가']] } }),
            IT({ prompt: '바라는 행동과 다음 행동을 넣어 할 말을 3문장으로 완성하세요.', toolOptions: { topic: '앞 문장에 이어, 준서에게 바라는 행동과 그래도 계속될 때 내가 할 행동을 넣어 할 말 전체를 3문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '할 말 ② 완성' }, target: { selfCheck: ['나 전달로 시작했다', '바라는 행동을 분명히 말했다', '상대를 존중하는 말투로 썼다', '다음 행동을 밝혔다'] } },
              { prompt: '틀을 채워 바라는 행동을 넣은 두 문장을 쓰세요.', toolOptions: { topic: '준서에게 바라는 행동을 넣어 할 말을 두 문장으로 쓰세요.', minChars: 25, minSentences: 2, maxSentences: 3, starter: '나는 네가 ___ 할 때 ___. ___ 해 줘.' }, target: { selfCheck: ['바라는 행동을 분명히 말했다', '상대를 존중하는 말투로 썼다'] } }),
            IT({ prompt: '가상 친구의 말 "야, 너 진짜 짜증 나. 손 치워"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 준서에게 한 말: "야, 너 진짜 짜증 나. 손 치워." 기준표(나 전달·분명함·존중·다음 행동)로 읽고, 고친 말을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '친구 말 고쳐 쓰기' }, target: { selfCheck: ['깎아내리는 말을 뺐다', '나 전달로 바꿨다', '바라는 행동을 남겼다'] } }),
            IT({ prompt: '세 번 말해도 계속될 때 할 일을 쓰세요.', toolOptions: { topic: '세 번 분명히 말했는데도 준서가 계속 어깨를 친다. 이때 할 일을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '말이 통하지 않을 때' }, target: { selfCheck: ['다시 분명히 말하는 것을 넣었다', '혼자 참지 않는 방법을 썼다'] } },
              null,
              { prompt: '말이 통하지 않을 때 도움을 청할 사람과 방법을 넣어 쓰세요.', toolOptions: { topic: '세 번 말했는데도 준서가 계속 어깨를 친다. 도움을 청할 사람(담임·상담 선생님·보호자)과 어떻게 말할지를 세 문장으로 쓰세요.', minChars: 40, maxChars: 200, minSentences: 3, maxSentences: 4, title: '도움 청하기' }, target: { selfCheck: ['도움을 청할 사람을 밝혔다', '무슨 일이 있었는지 말할 방법을 썼다', '내 잘못이 아니라는 것을 알고 썼다'], mustInclude: [['선생님', '보호자']] } },
              { conclude: '경계를 전하는 말은 나 전달·분명함·존중·다음 행동을 담아요. 말해도 멈추지 않으면 혼자 참지 말고 어른에게 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '모둠 친구가 내 어깨를 자꾸 칠 때 나 전달법으로 알맞은 말은?', options: ['"너 진짜 짜증 나"', '"어깨를 치면 나는 불편해. 그만해 줘"', '(아무 말 없이 참는다)'], answer: '"어깨를 치면 나는 불편해. 그만해 줘"' }, { type: 'short', prompt: '준서에게 할 말을 나 전달법으로 한 문장 써요.' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.boundary-card', {
        title: '나의 경계 카드 테두리', method: '"묻기·기다리기·존중하기" 무늬로 경계 카드 테두리 만들기', tool: 'pattern', minutes: 6,
        levels: { easy: '두 조각(묻기·존중하기)이 되풀이되는 테두리의 빈칸을 채운다.', base: '세 조각(묻기·기다리기·존중하기)이 되풀이되는 테두리 빈칸을 채우고, 세 조각 규칙으로 테두리를 직접 만든다.', challenge: '무늬 규칙의 뜻을 한 줄로 설명한다(넷째 출구 질문).' },
        wrap: {
          teacher: '"\'묻기 → 기다리기 → 존중하기\'를 되풀이하면, 경계 카드의 테두리이자 관계의 규칙이 돼요." 무늬 빈칸을 채우고 직접 테두리를 만든 뒤 가운데에 들어갈 내 경계 문장 하나를 활동지에 쓰게 한다. "묻기만 하면 되지 왜 기다려요?"라는 학생에게 "물어 놓고 대답을 듣기 전에 하면, 물어본 것일까요?"라고 되묻는다.',
          exitTicket: [
            IT(X('pattern', { prompt: '경계 카드 테두리의 빈칸에 알맞은 조각을 채워요.', toolOptions: { mode: 'fill', seq: ['묻기', '기다리기', '존중하기', '묻기', null, '존중하기', '묻기', '기다리기', null], palette: WORDS }, target: { fill: ['기다리기', '존중하기'] } }, { difficulty: 0.15 }),
              { prompt: '두 조각이 되풀이되는 테두리의 빈칸을 채워요.', toolOptions: { seq: ['묻기', '존중하기', '묻기', null, '묻기', null], palette: ['묻기', '존중하기'] }, target: { fill: ['존중하기', '존중하기'] } }),
            { type: 'tool', tool: 'pattern', options: { mode: 'make', palette: WORDS, length: 6 }, prompt: '세 조각이 차례대로 두 번 되풀이되는 테두리를 직접 만들어요.', target: { rule: 'repeat', period: 3, uses: 3 }, difficulty: 0.2 },
            { type: 'choice', prompt: '"한 번 좋다고 하면 바꿀 수 없다"에 대한 생각으로 알맞은 것은?', options: ['맞다, 약속이니까', '좋다고 했어도 언제든 마음을 바꿔 말할 수 있다', '친한 사이일 때만 바꿀 수 있다'], answer: 1, difficulty: 0.2, explain: '동의는 언제든 철회할 수 있어요. 바뀐 마음을 들으면 멈춰요.' },
            { type: 'short', prompt: '"묻기·기다리기·존중하기" 무늬 규칙의 뜻을 한 줄로 설명해요.' },
          ],
        },
        worksheet: {
          title: '나의 경계 카드',
          items: [
            { type: 'short', prompt: '경계 카드 가운데에 넣을 내 경계 문장을 하나 써요(예: 내 사진은 묻고 올려 줘).' },
            { type: 'short', prompt: '"묻기·기다리기·존중하기"가 왜 이 차례인지 한 문장으로 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.help-route', {
        title: '말해도 안 될 때 도움 경로', method: '학교·집 칸 지도에서 도움받을 사람 고르고 차례 정하기', tool: 'map', minutes: 7,
        levels: { easy: '장소 2곳(교실·집)만 있는 지도에서 도움받을 사람이 있는 곳에 핀을 꽂는다.', base: '장소 4곳 지도에서 핀을 꽂고, 도움을 청하는 차례를 고른다.', challenge: '친구를 도울 때 할 말을 한 줄로 덧붙인다(넷째 출구 질문).' },
        wrap: {
          teacher: '"분명히 말했는데도 멈추지 않으면, 학교에서는 누구에게, 집에서는 누구에게 말할까요?" 가상 학교와 집 칸 지도에 핀을 꽂으며 차례를 정한다. "고자질하는 것 같아 말 못 하겠다"는 학생에게 "내 경계를 지키려고 어른에게 말하는 것은 고자질일까요, 나를 돌보는 일일까요?"라고 되묻는다. 상담 선생님(Wee 클래스)은 비밀을 지키며 함께 방법을 찾는 곳이라고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: MAP({ ask: { q: '학교에서 먼저 말할 수 있는 사람은?', choices: ['담임 선생님', '아무에게도 말하지 않는다', '단톡방 친구들'], why: ['', '혼자 참으면 계속될 수 있어요.', '단톡방에 올리면 일이 퍼져요.'] } }), prompt: '학교에서 먼저 도움을 청할 사람이 있는 곳에 핀을 꽂고 그 사람을 골라요.', target: { place: '교실(담임)', pick: 0 }, difficulty: 0.15 },
              { prompt: '학교에서 먼저 도움을 청할 사람이 있는 곳에 핀을 꽂아요(장소 2곳).', toolOptions: { places: [HOME[0], HOME[3]] } }),
            IT({ type: 'tool', tool: 'map', options: MAP({ ask: { q: '상담실에서 할 수 있는 일은?', choices: ['비밀을 지키며 함께 방법을 찾는다', '벌을 받는다', '친구에게 바로 알려진다'], why: ['', '도움을 청한 사람이 벌을 받지 않아요.', '상담은 비밀을 지키며 해요.'] } }), prompt: '담임 선생님 다음으로 함께 방법을 찾을 곳에 핀을 꽂고, 그곳에서 하는 일을 골라요.', target: { place: '상담실', pick: 0 }, difficulty: 0.2 },
              { prompt: '집에서 도움을 청할 사람이 있는 곳에 핀을 꽂아요(장소 2곳).', toolOptions: { places: [HOME[0], HOME[3]], ask: { q: '집에서 말할 사람은?', choices: ['보호자', '아무도 없다'] } }, target: { place: '집(보호자)', pick: 0 } }),
            { type: 'choice', prompt: '말해도 멈추지 않을 때 도움을 청하는 차례로 알맞은 것은?', options: ['혼자 참기 → 더 참기', '다시 분명히 말하기 → 믿는 어른(담임·보호자)에게 알리기 → 상담 선생님과 방법 찾기', '단톡방에 올리기 → 친구들과 따지기'], answer: 1, difficulty: 0.2, explain: '혼자 참지 않고 믿는 어른과 상담으로 이어 가요.' },
            { type: 'short', prompt: '친구가 경계 문제로 힘들어할 때 내가 할 첫 말을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '도움 경로',
          items: [
            { type: 'table', prompt: '도움받을 사람과 장소를 써요.', columns: ['장소', '도움받을 사람'], cells: [['교실', ''], ['상담실', ''], ['보건실', ''], ['집', '']], answer: '(예) 담임 선생님, 상담 선생님(Wee 클래스), 보건 선생님, 보호자' },
            { type: 'short', prompt: '말해도 멈추지 않을 때 내가 할 차례를 써요.' },
          ],
        },
        notes: '지도는 가상 학교와 집이다. 문항마다 핀 하나라서 장소를 출구 질문 둘로 나누었다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 05-g7-harassment-range.js ====
  // ==== 7학년 · 성희롱·성폭력의 범위와 단톡방 대응 (gender.m.g7-harassment-range) ====
  {
    const M = MK('g7-harassment-range', [7]);
    const RANGE = ['말', '시선', '접촉', '온라인'];
    const RANGE_CARDS = [
      { id: 'a1', text: '친구 몸매를 두고 성적인 품평을 한다', to: '말' }, { id: 'a2', text: '싫다는데 성적인 농담을 계속한다', to: '말' },
      { id: 'b1', text: '몸을 위아래로 훑어보며 낄낄댄다', to: '시선' }, { id: 'b2', text: '탈의실 쪽을 일부러 엿본다', to: '시선' },
      { id: 'c1', text: '원치 않는데 허리를 감싸 안는다', to: '접촉' }, { id: 'c2', text: '지나가며 일부러 몸을 스친다', to: '접촉' },
      { id: 'd1', text: '몸 사진을 보내라는 메시지를 보낸다', to: '온라인' }, { id: 'd2', text: '단톡방에 성적인 합성 짤을 올린다', to: '온라인' },
    ];
    const MYTHS = [
      ['"싫으면 그 자리에서 말했어야지"', '놀라거나 무서우면 바로 말하기 어렵고, 늦게 말해도 된다'],
      ['"옷차림 때문이야"', '잘못은 옷이 아니라 그런 말과 행동을 한 사람에게 있다'],
      ['"농담이었으면 괜찮아"', '농담이라는 뜻과 상관없이 상대가 원치 않으면 문제다'],
      ['"단톡방에서 읽기만 했는데"', '웃음 이모티콘·퍼 나르기는 동조가 될 수 있다'],
      ['"친한 사이니까 괜찮아"', '친한 사이여도 원치 않는 성적인 말과 행동은 안 된다'],
    ];
    // 단톡방 갈림길(깊이 3)
    const D1 = { text: '반 단톡방에 누군가 같은 반 친구 사진을 올리고 그 친구 몸을 성적으로 품평하는 글을 쓴다. 벌써 몇 명이 \'ㅋㅋ\'를 달았다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'emoji', text: '나도 웃음 이모티콘을 단다', result: '\'ㅋㅋ\'가 더 늘고 품평 글이 이어진다.', impact: [{ who: '사진 속 친구', text: '모두가 함께 놀린다고 느낀다', tone: -1 }], why: '웃음 반응은 동조예요. 글을 쓴 사람이 더 해도 된다고 여겨요.', end: '동조가 늘어났어요.',
        next: { text: '사진 속 친구가 단톡방을 보고 아무 말 없이 나간다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'delete', text: '내 이모티콘을 지우고 "이거 내리자"라고 쓴다', result: '몇 명이 따라 반응을 지운다.', impact: [{ who: '사진 속 친구', text: '조금 덜 혼자라고 느낀다', tone: 1 }], end: '늦었지만 멈추자고 했어요.',
            next: { text: '글을 쓴 사람이 "장난인데 왜 진지해?"라고 한다.', choices: [
              { id: 'tellT', text: '캡처를 퍼뜨리지 않고 담임 선생님께만 보이며 알린다', result: '선생님이 사진과 글을 내리게 하고 학급에서 다룬다.', impact: [{ who: '사진 속 친구', text: '보호받는다', tone: 1 }], ending: '어른에게 알려 멈추게 했어요.' },
              { id: 'drop', text: '분위기 깨기 싫어 그만둔다', result: '사진이 그대로 남는다.', impact: [{ who: '사진 속 친구', text: '사진이 계속 돈다', tone: -1 }], why: '장난이라는 말에 멈추면 피해가 그대로 남아요.' }] } },
          { id: 'none', text: '나간 건 그 친구 선택이니 그냥 둔다', result: '품평 글이 다른 방으로도 퍼진다.', impact: [{ who: '사진 속 친구', text: '피해가 커진다', tone: -1 }], why: '나간 것은 상처받았다는 신호예요. 피해자 탓이 아니라 멈추는 것이 필요해요.' }] } },
      { id: 'ignore', text: '읽기만 하고 아무 반응도 하지 않는다', result: '아무도 막지 않아 품평이 계속된다.', impact: [{ who: '사진 속 친구', text: '아무도 편이 없다고 느낀다', tone: -1 }], why: '침묵은 괜찮다는 신호로 읽힐 수 있어요.', ending: '아무도 멈추지 않아 품평이 이어졌어요.' },
      { id: 'divert', text: '다른 이야기를 꺼내 화제를 돌린다', result: '잠시 대화가 다른 쪽으로 간다.', impact: [{ who: '반 분위기', text: '잠깐 멈춘다', tone: 0 }], end: '화제를 돌려 잠깐 멈췄어요.',
        next: { text: '조금 뒤 다시 그 사진 이야기가 나온다.', ask: '이번엔 어떻게 할까?', choices: [
          { id: 'say2', text: '"이건 장난 아니야. 사진이랑 글 내리자"라고 분명히 쓴다', result: '몇 명이 "맞아"라고 하고 글을 쓴 사람이 사진을 내린다.', impact: [{ who: '사진 속 친구', text: '편이 생긴다', tone: 1 }], end: '분명하게 멈추자고 했어요.',
            next: { text: '사진은 내려갔지만 이미 저장한 사람이 있을지 모른다.', choices: [
              { id: 'adult', text: '담임 선생님께 알리고 캡처는 선생님께만 보인다', result: '선생님이 저장본까지 지우게 하고 사진 속 친구를 만난다.', impact: [{ who: '사진 속 친구', text: '보호받는다', tone: 1 }], ending: '멈추고 어른에게 알렸어요.' },
              { id: 'spread', text: '증거라며 캡처를 다른 단톡방에 올린다', result: '사진이 오히려 더 많이 퍼진다.', impact: [{ who: '사진 속 친구', text: '피해가 커진다', tone: -1 }], why: '캡처를 퍼뜨리면 피해가 커져요. 어른에게만 보여요.' }] } },
          { id: 'again', text: '또 화제만 돌린다', result: '품평이 되풀이된다.', impact: [{ who: '사진 속 친구', text: '피해가 이어진다', tone: -1 }], why: '되풀이되면 분명히 멈추자고 말하고 어른에게 알려요.' }] } },
      { id: 'stop', text: '"이거 성희롱이야. 사진이랑 글 내리자"라고 쓴다', result: '몇 명이 반응을 지우고 글을 쓴 사람이 머뭇거린다.', impact: [{ who: '사진 속 친구', text: '편이 있다고 느낀다', tone: 1 }], end: '처음부터 멈추자고 했어요.',
        next: { text: '글을 쓴 사람이 "농담인데 오버하지 마"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'tell', text: '캡처를 퍼뜨리지 않고 담임 선생님께만 보이며 알린다', result: '선생님이 사진과 글을 내리게 하고 학급에서 다룬다.', impact: [{ who: '사진 속 친구', text: '보호받는다', tone: 1 }], end: '어른에게 알렸어요.',
            next: { text: '사진 속 친구가 다음 날 혼자 앉아 있다.', choices: [
              { id: 'support', text: '"네 잘못 아니야. 같이 점심 먹을래?"라고 말한다', result: '친구가 고개를 끄덕인다.', impact: [{ who: '사진 속 친구', text: '지지받는다', tone: 1 }], ending: '멈추고, 알리고, 곁에 있었어요.' },
              { id: 'ask', text: '"사진은 왜 찍혔어?"라고 묻는다', result: '친구가 더 움츠러든다.', impact: [{ who: '사진 속 친구', text: '탓하는 것 같아 상처받는다', tone: -1 }], why: '피해 친구에게 까닭을 묻는 것은 탓하는 말이 돼요.' }] } },
          { id: 'quit', text: '"그래, 농담이었으면 됐어" 하고 물러선다', result: '사진이 그대로 남는다.', impact: [{ who: '사진 속 친구', text: '피해가 남는다', tone: -1 }], why: '농담이라는 뜻과 상관없이 상대가 원치 않으면 문제예요.' }] } }] };
    const R1 = [{ id: 'r1', text: '웃음·침묵은 동조가 되어 피해를 키운다' }, { id: 'r2', text: '농담이라는 뜻과 상관없이 상대가 원치 않으면 성희롱이다' },
      { id: 'r3', text: '사진이 찍힌 친구에게도 책임이 있다', why: '잘못은 사진을 올리고 품평한 쪽에 있어요.' }, { id: 'r4', text: '읽기만 했으니 나와는 상관없다', why: '침묵도 괜찮다는 신호가 될 수 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '알릴 때 캡처를 퍼뜨리지 않고 믿는 어른에게만 보인다' }, { id: 'r6', text: '캡처를 다른 방에 올리면 피해가 커진다' }], ok: ['r5', 'r6'] };
    const STEPS = [
      { id: 's1', text: '믿는 어른(보호자·담임)에게 말한다' }, { id: 's2', text: '어른과 함께 있었던 일을 날짜와 함께 적는다' },
      { id: 's3', text: '학교 상담 선생님(Wee 클래스)과 만난다' }, { id: 's4', text: '필요하면 전문 기관에 연결된다' }, { id: 's5', text: '지원을 받으며 학교생활을 이어 간다' },
    ];
    const TRAP = [{ id: 't1', text: '혼자 참고 잊으려 한다' }, { id: 't2', text: '단톡방에 올려 모두에게 알린다' }];
    const PLACES = [
      { name: '교실', icon: 'school', at: [0, 1] }, { name: '상담실', icon: 'office', at: [2, 0] }, { name: '보건실', icon: 'hospital', at: [2, 3] },
      { name: '지역 상담 기관', icon: 'office', at: [5, 1] },
    ];
    const MAP = (extra) => Object.assign({ grid: [6, 4], title: '학교·지역 도움 기관 지도(가상)', places: PLACES, roads: [[[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]] }, extra);

    ALL.push(
      // ---- 도입 ----
      M('intro.range-scale', {
        title: '행동 사례를 범위 칸에 놓기', method: '가상 사례를 말·시선·접촉·온라인 칸에 나누고 공통점 찾기', tool: 'sortboard', minutes: 5,
        levels: { easy: '사례 4개(칸마다 하나)를 나누는 시연을 보고, 칸 이름을 소리 내어 읽는다.', base: '사례 8개가 말·시선·접촉·온라인 칸에 나뉘는 시연을 보고, 모두 \'상대가 원치 않음\'이 공통점이라는 것을 확인한다.', challenge: '두 칸에 걸치는 사례(예: 몸 사진 요구 메시지 — 말과 온라인)의 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"말로만 했는데도, 쳐다보기만 했는데도 성희롱이 될 수 있을까요?" 가상 사례 8개를 말·시선·접촉·온라인 바구니에 나누는 시연을 보인다. "만지지 않았으면 괜찮다"는 학생에게 "네 바구니의 사례들에 함께 들어 있는 것은 무엇일까요?"라고 되묻고, 모든 사례의 공통점이 \'상대가 원치 않는 성적인 말과 행동\'이라는 점을 짚는다. 사례는 가상이며 자세히 말하지 않는다.',
          student: '가상 사례를 말·시선·접촉·온라인 칸에 나누어 보고, 네 칸의 사례에 모두 들어 있는 공통점을 찾아요.',
          demo: { tool: 'sortboard', options: { slots: RANGE, cards: strip(RANGE_CARDS) }, sequence: [{ sort: { 말: ['a1', 'a2'], 시선: ['b1', 'b2'], 접촉: ['c1', 'c2'], 온라인: ['d1', 'd2'] } }] },
          art: { draw: 'a paper-cut shelf with four paper baskets labelled with simple icons of a speech bubble, an eye, a hand and a phone, folded paper cards sitting in each basket', banner: '공통점은 무엇일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '분류판은 카드 한 장에 정답 바구니 하나라서, 두 칸에 걸치는 사례는 도전 단계에서 말로 다룬다. ' + SAFE_NOTE,
      }),
      M('intro.myth-check', {
        title: '성희롱 통념 바로잡기', method: '통념 카드와 바른 문장 카드 짝짓기', tool: 'wordcards', minutes: 7,
        levels: { easy: '통념 3장(그 자리에서 말했어야·옷차림·농담)과 바른 문장을 잇는 시연을 본다.', base: '통념 5장마다 바른 문장 카드가 이어지는 시연을 보고, 통념이 왜 거짓인지 짝과 말한다.', challenge: '통념이 피해자에게 주는 영향(자기 탓·말하지 못함)을 짝에게 말한다.' },
        intro: {
          teacher: '"\'싫으면 그 자리에서 말했어야지\' — 이 말을 들은 사람은 다음에 무슨 일이 생기면 말할 수 있을까요?" 통념 카드와 바른 문장 카드를 잇는 시연을 보인다. "옷차림도 이유가 될 수 있지 않나요?"라는 학생에게 "같은 옷을 입은 사람 모두가 그런 말을 들어야 할까요? 잘못은 누구의 선택에서 나왔나요?"라고 되묻는다. 통념은 피해자 탓을 만들고, 잘못은 늘 그 말과 행동을 한 쪽에 있다고 분명히 말한다.',
          student: '성희롱에 대한 통념 카드마다 바로잡는 문장을 이어 보고, 통념이 왜 거짓인지 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: MYTHS.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: MYTHS.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })) }, sequence: [{ match: Object.fromEntries(MYTHS.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) }] },
          art: { draw: 'a paper-cut pair of card rows, crossed-out paper speech bubbles on the left and bright paper cards with check marks on the right, joined by paper strings', banner: '통념을 바로잡아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '통념 카드는 바로잡기 위해서만 보이고, 시연 뒤 바른 문장을 소리 내어 읽게 한다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.groupchat-dilemma', {
        title: '단톡방 성적 품평 갈림길', method: '단톡방 성적 품평 글에 대응하는 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 사진 속 친구에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 동조하지 않는 근거를 고른다.', challenge: '알리기 전에 지켜야 할 것(캡처를 퍼뜨리지 않기) 근거 카드까지 고른다.' },
        activity: {
          title: '단톡방 성적 품평 갈림길', tool: 'dilemma',
          teacher: '"\'ㅋㅋ\' 하나 단 것도 책임이 있을까요?" 학생마다 한 길을 끝까지 간 뒤 되돌아가 다른 길과 견주게 한다. "사진 찍힌 애도 조심했어야지"라는 말이 나오면 "사진을 올리고 품평한 것은 누구의 선택이었나요?"라고 바로잡는다. 증거가 필요하다며 캡처를 다른 방에 퍼뜨리면 피해가 커지니, 믿는 어른에게만 보인다는 점을 끝에서 짚는다. 사진이나 글의 내용은 말하지 않는다.',
          task: '반 단톡방에 친구 몸을 성적으로 품평하는 글이 올라온 장면에서 길을 골라 결과를 따라가고, 동조하지 않는 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '단톡방에 품평 글이 올라왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '단톡방에 품평 글이 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 알릴 때 지킬 것까지 근거를 고르세요.' },
              '반 단톡방', D1, [['stop', 'tell', 'support'], ['divert', 'say2', 'adult'], ['emoji', 'delete', 'tellT']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '단톡방에서 "읽기만 한 사람"을 판단하는 장면을 따라가세요.', toolOptions: { title: '읽기만 했다면?', scene: { text: '품평 글을 30명이 읽었고 아무도 멈추자고 하지 않았다.', ask: '읽기만 한 사람들은 어땠을까?', motif: 'house', choices: [
              { id: 'none', text: '아무 일도 하지 않았으니 상관없다', result: '글을 쓴 사람은 모두가 괜찮다고 여긴다.', impact: [{ who: '사진 속 친구', text: '아무도 편이 없다고 느낀다', tone: -1 }], why: '침묵은 괜찮다는 신호가 될 수 있어요.' },
              { id: 'signal', text: '침묵이 괜찮다는 신호가 되었다', result: '한 사람만 멈추자고 했어도 달라졌을 것이 보인다.', impact: [{ who: '반 분위기', text: '멈출 힘이 있었다는 것을 안다', tone: 1 }], ending: '침묵도 영향을 준다는 것을 알았어요.' }] }, reasons: [{ id: 'q1', text: '한 사람이 멈추자고 하면 분위기가 바뀔 수 있다' }, { id: 'q2', text: '사람이 많으면 책임이 나눠져 없어진다', why: '많을수록 한 사람의 말이 더 중요해요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['signal']], reasons: ['q1'] } },
              { prompt: '읽기만 한 사람을 판단하세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '알릴 때 캡처를 어떻게 할지 고르는 장면을 따라가세요.', toolOptions: { title: '알리기 전에', scene: { text: '선생님께 알리기로 했다. 친구가 "증거로 캡처해서 다른 방에도 올려 두자"고 한다.', ask: '캡처는 어떻게 할까?', motif: 'house', choices: [
              { id: 'only', text: '다른 방에 올리지 않고 선생님께만 보인다', result: '선생님이 확인하고 사진을 지우게 한다.', impact: [{ who: '사진 속 친구', text: '사진이 더 퍼지지 않는다', tone: 1 }], ending: '피해를 키우지 않고 알렸어요.' },
              { id: 'post', text: '여러 방에 올려 증거를 남긴다', result: '사진을 본 사람이 더 늘어난다.', impact: [{ who: '사진 속 친구', text: '피해가 커진다', tone: -1 }], why: '증거라도 퍼뜨리면 피해가 커져요.' }] }, reasons: [{ id: 'k1', text: '증거는 믿는 어른에게만 보인다' }, { id: 'k2', text: '많은 사람이 봐야 증거가 된다', why: '어른 한 사람이 보면 충분해요.' }], compare: true },
              target: { path: [['only']], reasons: ['k1'] },
              conclude: '웃음·침묵은 동조가 돼요. 멈추자고 말하고, 캡처는 퍼뜨리지 않고 믿는 어른에게만 보이며, 피해 친구에게는 "네 잘못 아니야"라고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '단톡방에 품평 글이 올라올 때 내가 쓸 멈춤 문장을 하나 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('act.help-order', {
        title: '도움받는 차례 시간표', method: '가상 인물이 도움받는 단계를 차례로 놓기', tool: 'timeline', minutes: 15,
        levels: { easy: '단계 카드 3장(말하기·상담·전문 기관)을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '단계 카드 5장과 함정 카드 2장 가운데 단계만 차례대로 놓고, 하지 말아야 할 행동을 고른다.', challenge: '셋째 문항에서 친구가 털어놓을 때 내가 할 첫 말을 함정 말이 더 섞인 카드에서 고른다.' },
        activity: {
          title: '도움받는 차례 시간표', tool: 'timeline',
          teacher: `"가상 인물 소율이 학원 차 안에서 원치 않는 성적인 농담을 계속 들었어요. 소율은 무엇부터 할 수 있을까요?" 단계 카드를 차례로 놓으며 각 단계에서 누가 함께하는지 말하게 한다. "증거가 없으면 말해도 소용없다"는 학생에게 "먼저 믿는 어른에게 말하면, 기록은 어른과 함께 남길 수 있지 않을까요?"라고 되묻는다. 전문 기관 번호는 우리 지역 것을 학교가 확인해 ${LOCAL} 칸에 적어 두었다고 알린다. 소율의 잘못이 아니라는 것을 첫 장면부터 말한다.`,
          task: '가상 인물 소율이 성희롱을 겪은 뒤 도움받는 단계를 차례대로 놓고, 하지 말아야 할 행동과 친구로서 할 첫 말을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('소율이 도움받는 단계를 차례대로 놓으세요(함정 카드는 남겨요).', STEPS, { axis: ['먼저', '나중'] }, TRAP),
              OB('소율이 도움받는 단계 3장을 차례대로 놓으세요.', pickCards(STEPS, ['s1', 's3', 's4']), { axis: ['먼저', '나중'] })),
            IT(PB('소율에게 도움이 되지 않는 행동만 골라 담으세요.', '하지 않을 행동', [
              { id: 'n1', text: '혼자 참고 잊으려 한다', ok: true }, { id: 'n2', text: '단톡방에 올려 모두에게 알린다', ok: true },
              { id: 'n3', text: '"내가 뭘 잘못했지?" 하며 자기를 탓한다', ok: true }, { id: 'n4', text: '믿는 어른에게 말한다' }, { id: 'n5', text: '상담 선생님과 만난다' }]),
              PB('소율에게 도움이 되지 않는 행동만 골라 담으세요.', '하지 않을 행동', [
                { id: 'n1', text: '혼자 참고 잊으려 한다', ok: true }, { id: 'n4', text: '믿는 어른에게 말한다' }, { id: 'n5', text: '상담 선생님과 만난다' }])),
            IT(PB('소율이 털어놓을 때 친구로서 할 첫 말을 고르세요.', '첫 말', [
              { id: 'w1', text: '"말해 줘서 고마워. 네 잘못 아니야"', ok: true }, { id: 'w2', text: '"왜 그때 바로 말 안 했어?"', why: '바로 말하지 못하는 것은 흔한 일이에요. 탓하는 말이 돼요.' },
              { id: 'w3', text: '"그 사람이 그럴 리가 없는데"', why: '믿지 않는 말은 다시 말하지 못하게 해요.' }]),
              null,
              PB('소율이 털어놓을 때 친구로서 할 말을 모두 고르세요.', '할 말', [
                { id: 'w1', text: '"말해 줘서 고마워. 네 잘못 아니야"', ok: true }, { id: 'w4', text: '"같이 믿는 선생님께 가 볼래?"', ok: true },
                { id: 'w2', text: '"왜 그때 바로 말 안 했어?"', why: '바로 말하지 못하는 것은 흔한 일이에요.' }, { id: 'w3', text: '"그 사람이 그럴 리가 없는데"', why: '믿지 않는 말은 다시 말하지 못하게 해요.' },
                { id: 'w5', text: '"옷을 그렇게 입어서 그래"', why: '잘못은 그 말을 한 사람에게 있어요.' }]),
              { conclude: '도움은 믿는 어른에게 말하기에서 시작해 학교 상담과 전문 기관으로 이어져요. 털어놓은 친구에게는 "말해 줘서 고마워, 네 잘못 아니야"가 첫 말이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: `소율이 도움받는 차례를 화살표로 이어 써요. 전문 기관 번호는 ${LOCAL} 칸에서 확인해요.` }] },
        notes: SAFE_NOTE,
      }),
      M('act.bystander-script', {
        title: '복도 주변인 개입 대본 쓰기', method: '주변인 개입 역할극 대본 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '대본 앞부분(상황과 첫 대사)이 주어지고, 이어서 3~4줄을 쓰고 기준 2개를 점검한다.', base: '대본 전체를 6~8줄(5문장 이상)로 쓰고 기준표 4항목(멈추게 함·당사자 존중·안전한 방법·어른 연결)으로 점검한다.', challenge: '넷째 문항에서 서로 다른 개입 방법 두 가지로 결말을 나눠 쓴다.' },
        activity: {
          title: '복도 주변인 개입 대본 쓰기', tool: 'rubric-writing',
          teacher: '"복도에서 친구가 다른 학생에게 성적인 농담을 하고 있어요. 나는 그 자리에서 무엇을 할 수 있을까요?" 멈추게 하기·당사자 곁에 서기·자리를 옮기게 돕기·어른에게 알리기처럼 여러 개입 방법이 있다고 먼저 말한다. "괜히 끼어들면 나도 당한다"는 학생에게 "혼자 맞서지 않고도 할 수 있는 안전한 방법은 무엇일까요?"라고 되묻는다. 대본 인물은 가상 인물이고, 농담의 내용은 쓰지 않고 \'성적인 농담\'으로만 적게 한다.',
          task: '복도에서 성적인 농담을 하는 가상 장면의 개입 대본을 쓰고, 멈추게 함·당사자 존중·안전한 방법·어른 연결을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '대본 앞부분: 장면과 내가 끼어드는 첫 대사를 쓰세요.', toolOptions: { topic: '가상 장면: 복도에서 민규가 지나가는 하은에게 성적인 농담을 한다. 장면을 한 줄로 쓰고, 내가 끼어드는 첫 대사를 두 줄로 쓰세요(농담의 내용은 쓰지 않아요).', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '대본 ① 첫 장면' }, target: { selfCheck: ['농담의 내용을 쓰지 않았다', '멈추게 하는 말을 넣었다', '하은을 탓하는 말이 없다'] } },
              { prompt: '주어진 앞부분에 이어 끼어드는 대사를 쓰세요.', toolOptions: { topic: '주어진 앞부분: "복도. 민규가 하은에게 성적인 농담을 한다. 나: \'민규야, 그만해.\'" 이어서 대사를 두세 줄 쓰세요.', minChars: 20, minSentences: 2, maxSentences: 3, starter: '나: "민규야, 그만해." 하은에게: "___"' }, target: { selfCheck: ['멈추게 하는 말을 넣었다', '하은을 탓하는 말이 없다'] } }),
            IT({ prompt: '대본 전체를 6~8줄로 완성하세요.', toolOptions: { topic: '앞 장면에 이어, 민규가 "농담인데?"라고 할 때의 대사, 하은 곁에 서는 대사, 어른에게 알리는 장면까지 넣어 대본 전체를 6~8줄(5문장 이상)로 쓰세요.', minChars: 80, maxChars: 400, minSentences: 5, maxSentences: 8, title: '대본 ② 전체' }, target: { selfCheck: ['멈추게 하는 말을 넣었다', '하은의 뜻을 묻고 존중했다', '나도 안전한 방법을 골랐다', '어른에게 알리는 장면이 있다'] } },
              { prompt: '앞부분에 이어 3~4줄을 더 써서 대본을 마무리하세요.', toolOptions: { topic: '앞 장면에 이어, 하은 곁에 서는 대사와 어른에게 알리는 장면을 넣어 3~4줄을 더 쓰세요.', minChars: 40, minSentences: 3, maxSentences: 4 }, target: { selfCheck: ['하은의 뜻을 묻고 존중했다', '어른에게 알리는 장면이 있다'] } }),
            IT({ prompt: '가상 친구의 대본 한 줄 "하은아, 너도 웃었잖아"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 쓴 대본 한 줄: "하은아, 너도 웃었잖아. 별거 아니야." 기준표(멈추게 함·당사자 존중·안전·어른 연결)로 읽고 고친 대사를 두세 줄 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '친구 대본 고쳐 쓰기' }, target: { selfCheck: ['하은을 탓하는 말을 뺐다', '당사자를 존중하는 말로 바꿨다', '멈추게 하는 말을 넣었다'] } }),
            IT({ prompt: '개입 방법을 하나 더 골라 다른 결말을 쓰세요.', toolOptions: { topic: '같은 장면에서 다른 개입 방법(예: 하은에게 "같이 가자"며 자리를 옮기기)으로 쓴 결말을 세 줄 쓰세요.', minChars: 40, maxChars: 200, minSentences: 3, maxSentences: 4, title: '다른 결말' }, target: { selfCheck: ['앞과 다른 개입 방법을 골랐다', '하은의 안전을 먼저 생각했다', '어른에게 알리는 것을 넣었다'] } },
              null,
              { prompt: '서로 다른 개입 방법 두 가지로 결말을 나눠 쓰세요.', toolOptions: { topic: '같은 장면의 결말을 두 가지로 나눠 쓰세요: (가) 그 자리에서 멈추게 하기, (나) 하은과 자리를 옮긴 뒤 어른에게 알리기. 각 결말을 두세 줄씩 쓰세요.', minChars: 70, maxChars: 320, minSentences: 4, maxSentences: 6, title: '결말 두 가지' }, target: { selfCheck: ['두 결말의 개입 방법이 다르다', '두 결말 모두 하은을 존중했다', '두 결말 모두 안전한 방법이다', '어른 연결이 들어 있다'] } },
              { conclude: '주변인은 멈추게 하기, 곁에 서기, 자리 옮기기, 어른에게 알리기로 개입할 수 있어요. 나도 안전한 방법을 고르고, 당사자를 탓하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '복도에서 성적인 농담을 하는 장면을 본 주변인의 안전한 행동은?', options: ['같이 웃는다', '"그만하자"라고 하거나 선생님께 알린다', '영상을 찍어 단톡방에 올린다'], answer: '"그만하자"라고 하거나 선생님께 알린다' }, { type: 'short', prompt: '복도 장면에서 내가 고른 개입 방법과 첫 대사를 써요.' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.chat-rule', {
        title: '우리 반 단톡방 규칙 포스터', method: '단톡방 규칙 세 가지를 담은 포스터 꾸미기', tool: 'collage', minutes: 6,
        levels: { easy: '규칙 보기에서 알맞은 규칙을 고르고(둘째 출구 질문) 포스터를 꾸민다.', base: '포스터를 꾸미고 단톡방 규칙 세 가지를 직접 쓴다(셋째 출구 질문).', challenge: '규칙을 어겼을 때 멈추는 말까지 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"오늘 단톡방 장면에서 하나만 지켰어도 달라졌을 규칙은 무엇일까요?" 콜라주 판은 그림 조각만 붙고, 규칙 글은 출구 질문과 활동지에 쓴다고 알려 준다. "규칙을 만들어도 안 지키면 소용없다"는 학생에게 "규칙을 어겼을 때 누가 어떤 말로 멈출지까지 정하면 어떨까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 단톡방 규칙 포스터를 꾸미고 스스로 점검해요.', target: { selfCheck: ['포스터에 넣을 규칙 세 가지를 정했다', '사람의 몸을 평가하는 그림이 없다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '단톡방 규칙으로 가장 알맞은 것은?', options: ['재미있으면 친구 사진을 올려도 된다', '외모·몸을 품평하는 글과 사진은 올리지 않는다', '싫은 사람은 단톡방을 나가면 된다'], answer: 1, difficulty: 0.15, explain: '품평 글을 올리지 않는 것이 규칙이에요. 나가는 것은 피해자에게 떠넘기는 말이에요.' },
            { type: 'short', prompt: '우리 반 단톡방 규칙 세 가지를 써요.' },
            { type: 'short', prompt: '규칙을 어긴 글이 올라왔을 때 쓸 멈춤 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 단톡방 규칙',
          items: [
            { type: 'short', prompt: '단톡방 규칙 세 가지를 써요(외모·몸 품평 금지 등).' },
            { type: 'short', prompt: '규칙을 어긴 글을 봤을 때 내가 할 일을 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 규칙 글은 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
      M('wrap.support-map', {
        title: '학교·지역 도움 기관 지도', method: '칸 지도에 학교·지역 도움 기관 핀 꽂기', tool: 'map', minutes: 7,
        levels: { easy: '상담실과 지역 상담 기관 두 곳에 차례로 핀을 꽂는다(출구 1·2).', base: '길이 그려진 지도에서 두 곳에 핀을 꽂고, 기관마다 하는 일과 번호 확인 방법을 고른다.', challenge: '각 기관이 하는 일을 한 줄씩 적는다(넷째 출구 질문).' },
        wrap: {
          teacher: `"학교 안에서는 어디, 학교 밖에서는 어디에 도움을 청할 수 있을까요?" 가상 학교·지역 칸 지도에 핀을 꽂고 교실에서 이어진 길을 따라가 보게 한다. 지역 상담 기관 번호는 학교가 확인해 ${LOCAL} 칸에 적어 두었다고 알리고, 인터넷에서 아무 번호나 찾지 않게 한다. "기관에 알리면 일이 커진다"는 걱정에는 상담은 당사자의 뜻을 물으며 함께 정하는 것이라고 짚는다.`,
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: MAP({ ask: { q: '상담실에서 하는 일은?', choices: ['비밀을 지키며 이야기를 듣고 방법을 함께 찾는다', '잘잘못을 따져 벌을 준다', '반 전체에 알린다'], why: ['', '상담은 벌을 주는 곳이 아니에요.', '상담은 비밀을 지켜요.'] } }), prompt: '학교 안에서 도움을 청할 곳에 핀을 꽂고, 그곳에서 하는 일을 골라요.', target: { place: '상담실', pick: 0 }, difficulty: 0.15 },
              { prompt: '학교 안에서 도움을 청할 곳(상담실)에 핀을 꽂아요.', toolOptions: { ask: null }, target: { place: '상담실' } }),
            IT({ type: 'tool', tool: 'map', options: MAP({ ask: { q: '이 기관의 번호는 어떻게 알까?', choices: ['학교가 확인해 적어 둔 번호 칸을 본다', '인터넷에서 아무 번호나 찾는다', '단톡방에 물어본다'], why: ['', '확인하지 않은 번호는 틀릴 수 있어요.', '단톡방에 물으면 일이 퍼질 수 있어요.'] } }), prompt: '학교 밖에서 도움을 청할 곳에 핀을 꽂고, 번호를 아는 방법을 골라요.', target: { place: '지역 상담 기관', pick: 0 }, difficulty: 0.2 },
              { prompt: '학교 밖에서 도움을 청할 곳(지역 상담 기관)에 핀을 꽂아요.', toolOptions: { ask: null }, target: { place: '지역 상담 기관' } }),
            { type: 'choice', prompt: '성희롱을 겪은 친구를 도움 기관에 잇는 방법으로 알맞은 것은?', options: ['친구 몰래 모두에게 알린다', '친구의 뜻을 물으며 믿는 어른·상담실에 함께 간다', '친구가 괜찮다고 할 때까지 기다린다'], answer: 1, difficulty: 0.2, explain: '친구의 뜻을 묻고 함께 믿는 어른에게 가요.' },
            { type: 'short', prompt: '상담실·보건실·지역 상담 기관이 하는 일을 한 줄씩 써요.' },
          ],
        },
        worksheet: {
          title: '학교·지역 도움 기관',
          items: [
            { type: 'table', prompt: '도움 기관과 하는 일을 써요.', columns: ['기관', '하는 일'], cells: [['상담실(Wee 클래스)', ''], ['보건실', ''], [`지역 상담 기관 ${LOCAL}`, '']], answer: '(예) 이야기를 듣고 방법을 함께 찾음 / 몸과 마음을 살핌 / 상담·지원 연결' },
            { type: 'short', prompt: '학교에서 지역 상담 기관까지 도움을 청하는 차례를 써요.' },
          ],
        },
        notes: `지도는 가상이다. 지역 상담 기관 번호는 수업 전에 학교가 확인해 ${LOCAL} 칸과 활동지에 적는다. 문항마다 핀 하나라서 기관 둘을 출구 질문 두 개로 나누었다. ` + SAFE_NOTE,
      }),
    );
  }

  // ==== 06-g7-family-equal.js ====
  // ==== 7학년 · 평등한 가정과 가정폭력의 이해 (gender.m.g7-family-equal) ====
  {
    const M = MK('g7-family-equal', [7]);
    const CHORE = [['보호자 가', 150], ['보호자 나', 30], ['첫째 서아(중1)', 10], ['둘째 도하(초4)', 5]];
    const FORMS = ['신체', '말', '위협', '방임', '목격'];
    const FORM_CARDS = [
      { id: 'f1', text: '화가 나면 가족을 밀치거나 때린다', to: '신체' }, { id: 'f2', text: '"넌 쓸모없어"라는 말을 날마다 한다', to: '말' },
      { id: 'f3', text: '"말하면 가만 안 둬"라며 겁을 준다', to: '위협' }, { id: 'f4', text: '아파도 병원에 데려가지 않고 밥을 챙기지 않는다', to: '방임' },
      { id: 'f5', text: '보호자끼리 때리고 소리치는 것을 아이가 본다', to: '목격' },
    ];
    // 갈등·폭력 가르기
    const CASES = [
      { id: 'c1', text: '저녁 메뉴로 형제가 의견이 달라 다툰다', to: '갈등' }, { id: 'c2', text: '귀가 시간으로 말다툼한 뒤 서로 사과한다', to: '갈등' },
      { id: 'c3', text: '"말 안 들으면 쫓아낸다"는 위협이 되풀이된다', to: '폭력' }, { id: 'c4', text: '한 가족이 다른 가족의 휴대폰을 날마다 검사하고 아무도 못 만나게 한다', to: '폭력' },
      { id: 'c5', text: '방 청소 순서로 다투다가 순번을 정한다', to: '갈등' }, { id: 'c6', text: '화가 나면 물건을 던져 가족이 겁에 질린다', to: '폭력' },
      { id: 'c7', text: '용돈 문제로 목소리가 커졌지만 다음 날 다시 이야기한다', to: '갈등' }, { id: 'c8', text: '아이 앞에서 보호자 한 명이 다른 보호자를 때린다', to: '폭력' },
    ];
    const CASES2 = [
      { id: 'd1', text: '주말 계획이 달라 서로 서운해하다 함께 정한다', to: '갈등' }, { id: 'd2', text: '실수할 때마다 몇 시간씩 욕을 듣는다', to: '폭력' },
      { id: 'd3', text: '여행지를 두고 투표로 정한다', to: '갈등' }, { id: 'd4', text: '돈을 쓸 때마다 허락을 받게 하고 어기면 위협한다', to: '폭력' },
    ];
    const MORE2 = [{ id: 'd5', text: '화가 나 문을 세게 닫았지만 바로 사과하고 다시 대화한다', to: '갈등' }, { id: 'd6', text: '다툴 때마다 "다 너 때문"이라며 한 사람만 몰아세운다', to: '폭력' }];
    // 친구 걱정 갈림길(깊이 3) — 집 안의 일은 자세히 묘사하지 않는다
    const D1 = { text: '하준의 친구 시우가 요즘 "집에 가기 싫어"라는 말을 자주 한다. 오늘도 수업이 끝났는데 교실에 오래 남아 있다.', ask: '하준은 어떻게 할까?', motif: 'house', choices: [
      { id: 'ignore', text: '남의 집 일이니 모른 척한다', result: '시우는 혼자 운동장 벤치에 앉아 있다 늦게 집에 간다.', impact: [{ who: '시우', text: '말할 곳이 없다고 느낀다', tone: -1 }], why: '가정의 일이라도 친구가 걱정되면 모른 척하지 않아요. 안전이 먼저예요.', end: '시우는 혼자 남았어요.',
        next: { text: '며칠 뒤 시우가 팔에 멍이 든 채 학교에 온다. 시우는 "넘어졌어"라고만 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'stillno', text: '본인이 넘어졌다니 그냥 넘어간다', result: '걱정이 쌓이지만 아무도 모른다.', impact: [{ who: '시우', text: '도움이 닿지 않는다', tone: -1 }], why: '걱정되는 신호가 이어지면 믿는 어른에게 알려야 해요.', end: '아무도 알지 못했어요.',
            next: { text: '하준은 계속 마음이 쓰인다.', choices: [
              { id: 'lateT', text: '늦었지만 담임 선생님께 걱정을 말씀드린다', result: '선생님이 시우와 따로 이야기하고 상담 선생님과 잇는다.', impact: [{ who: '시우', text: '도움이 닿는다', tone: 1 }], ending: '늦었지만 믿는 어른에게 알렸어요.' },
              { id: 'post', text: '단톡방에 "시우네 집 이상하대"라고 쓴다', result: '소문이 퍼지고 시우가 더 움츠러든다.', impact: [{ who: '시우', text: '상처가 커진다', tone: -1 }], why: '친구의 일을 퍼뜨리는 것은 도움이 아니라 상처가 돼요.' }] } },
          { id: 'tellT', text: '선생님께 "시우가 걱정돼요"라고 말씀드린다', result: '선생님이 시우를 살피고 상담 선생님과 이야기를 나누게 한다.', impact: [{ who: '시우', text: '도움이 닿는다', tone: 1 }], ending: '걱정되는 신호를 믿는 어른에게 알렸어요.' }] } },
      { id: 'push', text: '"집에 무슨 일 있어? 말해 봐"라고 계속 캐묻는다', result: '시우가 "아무것도 아니야"라며 자리를 피한다.', impact: [{ who: '시우', text: '부담을 느낀다', tone: -1 }], why: '캐묻기보다 들어 줄 준비가 됐다고 알려 주는 것이 먼저예요.', end: '시우가 자리를 피했어요.',
        next: { text: '다음 날 시우는 하준을 피한다.', ask: '어떻게 다시 다가갈까?', choices: [
          { id: 'sorry', text: '"어제 캐물어서 미안. 말하고 싶을 때 들을게"라고 한다', result: '시우가 고개를 끄덕인다.', impact: [{ who: '시우', text: '조금 마음을 연다', tone: 1 }], end: '들어 줄 준비가 됐다고 알렸어요.',
            next: { text: '시우가 "집에서 큰 소리가 자주 나서 무서워"라고 털어놓는다.', choices: [
              { id: 'adult', text: '"말해 줘서 고마워. 같이 상담 선생님께 가자"라고 한다', result: '두 사람이 함께 상담실(Wee 클래스)에 간다.', impact: [{ who: '시우', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '들어 주고 믿는 어른에게 함께 갔어요.' },
              { id: 'secret', text: '"알았어, 아무한테도 말 안 할게"라고 약속만 한다', result: '시우의 무서운 밤이 그대로 이어진다.', impact: [{ who: '시우', text: '도움이 닿지 않는다', tone: -1 }], why: '안전과 관련된 일은 비밀보다 안전이 먼저예요. 믿는 어른과 함께해요.' }] } },
          { id: 'giveup', text: '피하니까 더는 신경 쓰지 않는다', result: '시우는 다시 혼자가 된다.', impact: [{ who: '시우', text: '외로움이 커진다', tone: -1 }], why: '한 번 어긋나도 다시 다가갈 수 있어요.' }] } },
      { id: 'listen', text: '"요즘 집에 가기 싫다고 했지. 무슨 일 있으면 들을게"라고 말한다', result: '시우가 잠시 망설이다 "집이 무서울 때가 있어"라고 말한다.', impact: [{ who: '시우', text: '말할 사람이 생긴다', tone: 1 }], end: '들어 줄 준비가 됐다고 알렸어요.',
        next: { text: '시우가 "근데 선생님한테는 말하지 마"라고 한다.', ask: '하준은 뭐라고 할까?', choices: [
          { id: 'together', text: '"네가 안전한 게 제일 중요해. 믿는 어른에게 같이 가자"라고 한다', result: '시우가 망설이다 함께 가기로 한다.', impact: [{ who: '시우', text: '도움을 받을 길이 열린다', tone: 1 }], end: '안전을 먼저 두고 함께 가자고 했어요.',
            next: { text: '상담실 앞에서 시우가 다시 머뭇거린다.', choices: [
              { id: 'stay', text: '"내가 옆에 있을게"라며 함께 들어간다', result: '상담 선생님이 시우의 이야기를 차분히 듣는다.', impact: [{ who: '시우', text: '보호받을 길이 생긴다', tone: 1 }], ending: '옆에 있어 주며 도움으로 이었어요.' },
              { id: 'leave', text: '"그럼 다음에 가자"며 돌아선다', result: '시우는 다시 말할 기회를 놓친다.', impact: [{ who: '시우', text: '도움이 늦어진다', tone: -1 }], why: '머뭇거릴 때 곁에 있어 주면 용기를 낼 수 있어요.' }] } },
          { id: 'promise', text: '"응, 비밀로 할게"라며 약속하고 끝낸다', result: '시우의 걱정은 그대로 남는다.', impact: [{ who: '시우', text: '도움이 닿지 않는다', tone: -1 }], why: '친구가 위험할 수 있으면 비밀보다 안전이 먼저예요.' }] } }] };
    const R1 = [{ id: 'r1', text: '친구의 안전이 비밀보다 먼저다' }, { id: 'r2', text: '들어 주고 믿는 어른과 함께 도움을 찾는다' },
      { id: 'r3', text: '가정의 일은 가족 안에서만 해결해야 한다', why: '가정폭력은 가족 안에서만 풀 수 없는 일이에요. 밖의 도움이 필요해요.' }, { id: 'r4', text: '친구가 말하지 않으면 모른 척하는 게 예의다', why: '걱정되는 신호가 있으면 믿는 어른에게 알리는 것이 친구를 돕는 길이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '함께 간 길에서는 시우가 보호받을 길이 열렸다' }, { id: 'r6', text: '모른 척한 길에서는 걱정되는 신호가 이어졌다' }], ok: ['r5', 'r6'] };
    const STEPS4 = ['안전한 곳으로 가기', '믿는 어른에게 알리기', '학교 상담(Wee 클래스)', `신고·상담 번호 ${LOCAL}`];

    ALL.push(
      // ---- 도입 ----
      M('intro.chore-chart', {
        title: '가상 가족의 집안일 시간', method: '가상 가족의 집안일 시간 그래프 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '두 보호자의 막대만 견주어 어느 쪽이 얼마나 많은지 말한다.', base: '네 사람 막대를 모두 읽고 가장 많은 사람과 가장 적은 사람의 차이(분)를 구한다.', challenge: '그래프에 나오지 않는 돌봄(마음 쓰기·챙기기)을 짝에게 한 가지 말한다.' },
        intro: {
          teacher: '"이 가족의 하루 집안일 시간, 누구에게 가장 많이 몰려 있나요?" 가상 4인 가족의 막대그래프를 띄우고 시연 단추로 \'보호자 가\'를 고르는 모습을 보인다. "원래 한 사람이 하는 게 편하다"는 말이 나오면 "보호자 가가 아프거나 바쁜 날에는 이 집이 어떻게 될까요?"라고 되묻는다. 이 가족은 수업용 가상 가족이고, 우리 집 이야기는 하지 않아도 된다고 먼저 밝힌다.',
          student: '가상 4인 가족의 하루 집안일 시간 그래프에서 일이 한 사람에게 얼마나 몰렸는지 읽어요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 4인 가족 — 하루 집안일 시간', unit: '분', xLabel: '가족', yLabel: '시간(분)', data: CHORE, question: '집안일을 가장 많이 한 사람은?', choices: CHORE.map((r) => r[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart beside a paper house with four paper family members, one tall bar towering over three short bars', banner: '누구에게 몰렸을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '가족 구성원은 성별을 정하지 않고 \'보호자 가·나\'로 두어 성 역할을 정답처럼 보이지 않게 했다. 값은 모두 가상이다. ' + SAFE_NOTE,
      }),
      M('intro.family-forms', {
        title: '가정폭력의 여러 모습', method: '가정폭력의 다섯 모습 가지에 장면 붙이기', tool: 'mindmap', minutes: 7,
        levels: { easy: '시연 판에서 신체·말·위협 세 가지만 교사와 함께 읽는다.', base: '다섯 가지(신체·말·위협·방임·목격)에 장면 카드가 붙는 시연을 보고 가지마다 까닭을 말한다.', challenge: '목격이 왜 아이에게 피해가 되는지 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"때리지 않으면 가정폭력이 아닐까요?" 가운데 \'가정폭력\'에서 신체·말·위협·방임·목격 다섯 가지를 펼치고 시연 단추로 장면 카드가 붙는 모습을 보인다. "말로 한 건 폭력이 아니다"라는 학생에게 "\'넌 쓸모없어\'를 날마다 듣는 아이의 마음은 몸이 다친 것과 무엇이 다를까요?"라고 되묻는다. 보호자끼리의 폭력을 보는 것(목격)도 아이에게 피해가 된다는 점을 짚는다. 장면은 모두 가상이다.',
          student: '\'가정폭력\' 가운데에서 다섯 가지를 펼치고, 가상 장면 카드가 어느 모습인지 생각해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '가정폭력', slots: FORMS, cards: strip(FORM_CARDS) }, sequence: [{ sort: { 신체: ['f1'], 말: ['f2'], 위협: ['f3'], 방임: ['f4'], 목격: ['f5'] } }] },
          art: { draw: 'a paper-cut mind map with a paper house in the center and five paper branches, each ending in a small paper cloud', banner: '때리지 않아도 폭력일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.chore-plan', {
        title: '공정한 집안일 분담표 짜기', method: '체크리스트로 가상 가족의 집안일 다시 나누기', tool: 'kitchen', minutes: 16,
        levels: { easy: '문항마다 항목 6개에서 공정한 분담에 맞는 것을 표시한다.', base: '문항마다 항목 10개(두 줄)에서 나이·시간·희망에 맞는 것만 표시한다.', challenge: '넷째 문항에서 바쁜 주를 위한 바꿈 규칙 항목까지 고른다.' },
        activity: {
          title: '공정한 집안일 분담표 짜기', tool: 'kitchen',
          teacher: '"서아네 가족의 일주일 집안일, 나이·시간·희망으로 다시 나누면 누가 무엇을 맡을까요?" 앞의 가상 그래프를 떠올리게 한 뒤 항목마다 \'나이에 맞나·시간이 되나·물어봤나\'를 따지게 한다. "요리는 원래 한 사람 몫"이라는 학생에게 "그 사람이 바쁜 주에는 누가 밥을 할 수 있을까요? 성별이 아니라 무엇으로 나누면 될까요?"라고 되묻는다. 공정은 똑같이 나누는 것만이 아니라 형편에 맞게 함께 지는 것이라는 점을 짚는다.',
          task: '가상 가족(보호자 가·나, 첫째 서아 중1, 둘째 도하 초4)의 일주일 집안일을 나이·시간·희망에 맞게 다시 나누어 알맞은 항목에 표시해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('공정한 분담 원칙에 맞는 것만 표시하세요.', '우리 집 분담 원칙', [
              { id: 'p1', text: '나이와 힘에 맞는 일을 맡는다', ok: true }, { id: 'p2', text: '시간이 많은 사람이 조금 더 맡는다', ok: true },
              { id: 'p3', text: '맡기 전에 하고 싶은 일을 묻는다', ok: true }, { id: 'p4', text: '모두 하나 이상 맡는다', ok: true },
              { id: 'p5', text: '돌아가며 맡는 일을 둔다', ok: true }, { id: 'p6', text: '요리·빨래는 성별로 정한다' },
              { id: 'p7', text: '가장 어린 사람은 아무것도 안 한다' }, { id: 'p8', text: '늘 하던 사람이 계속 다 한다' },
              { id: 'p9', text: '바쁜 날은 서로 바꿔 준다', ok: true }, { id: 'p10', text: '한 사람이 정하고 나머지는 따른다' }]),
              CL('공정한 분담 원칙에 맞는 것만 표시하세요.', '우리 집 분담 원칙', [
                { id: 'p1', text: '나이와 힘에 맞는 일을 맡는다', ok: true }, { id: 'p3', text: '맡기 전에 하고 싶은 일을 묻는다', ok: true },
                { id: 'p4', text: '모두 하나 이상 맡는다', ok: true }, { id: 'p6', text: '요리·빨래는 성별로 정한다' },
                { id: 'p7', text: '가장 어린 사람은 아무것도 안 한다' }, { id: 'p9', text: '바쁜 날은 서로 바꿔 준다', ok: true }])),
            IT(CL('둘째 도하(초4)가 맡을 만한 일만 표시하세요.', '도하(초4)가 맡을 일', [
              { id: 'y1', text: '식사 전에 수저 놓기', ok: true }, { id: 'y2', text: '마른 빨래 개기', ok: true }, { id: 'y3', text: '자기 방 정리하기', ok: true },
              { id: 'y4', text: '재활용 분리해 놓기', ok: true }, { id: 'y5', text: '화분에 물 주기', ok: true }, { id: 'y6', text: '혼자 불을 켜고 볶음 요리하기' },
              { id: 'y7', text: '무거운 쓰레기봉투 여러 개 나르기' }, { id: 'y8', text: '날카로운 칼로 반찬 썰기' }, { id: 'y9', text: '신발 정리하기', ok: true }, { id: 'y10', text: '혼자 집안일을 모두 하기' }]),
              CL('둘째 도하(초4)가 맡을 만한 일만 표시하세요.', '도하(초4)가 맡을 일', [
                { id: 'y1', text: '식사 전에 수저 놓기', ok: true }, { id: 'y2', text: '마른 빨래 개기', ok: true }, { id: 'y3', text: '자기 방 정리하기', ok: true },
                { id: 'y6', text: '혼자 불을 켜고 볶음 요리하기' }, { id: 'y8', text: '날카로운 칼로 반찬 썰기' }, { id: 'y9', text: '신발 정리하기', ok: true }])),
            IT(CL('첫째 서아(중1)가 맡을 만한 일만 표시하세요.', '서아(중1)가 맡을 일', [
              { id: 's1', text: '분리배출 내놓기', ok: true }, { id: 's2', text: '설거지 돌아가며 하기', ok: true }, { id: 's3', text: '보호자와 함께 저녁 차리기', ok: true },
              { id: 's4', text: '욕실 청소 돌아가며 하기', ok: true }, { id: 's5', text: '도하 숙제 봐 주기(시간 될 때)', ok: true }, { id: 's6', text: '공부해야 하니 아무것도 안 하기' },
              { id: 's7', text: '시험 기간에도 모든 집안일 혼자 하기' }, { id: 's8', text: '빨래 널기', ok: true }, { id: 's9', text: '도하가 할 일을 모두 대신하기' }, { id: 's10', text: '장 볼 목록 함께 쓰기', ok: true }]),
              CL('첫째 서아(중1)가 맡을 만한 일만 표시하세요.', '서아(중1)가 맡을 일', [
                { id: 's1', text: '분리배출 내놓기', ok: true }, { id: 's2', text: '설거지 돌아가며 하기', ok: true }, { id: 's3', text: '보호자와 함께 저녁 차리기', ok: true },
                { id: 's6', text: '공부해야 하니 아무것도 안 하기' }, { id: 's7', text: '시험 기간에도 모든 집안일 혼자 하기' }, { id: 's8', text: '빨래 널기', ok: true }])),
            IT(CL('두 보호자가 일을 나누는 방법으로 알맞은 것만 표시하세요.', '보호자 가·나의 분담', [
              { id: 'g1', text: '요리와 설거지를 번갈아 맡는다', ok: true }, { id: 'g2', text: '장보기와 청소를 나눠 맡는다', ok: true }, { id: 'g3', text: '아이 학교 일은 둘이 함께 챙긴다', ok: true },
              { id: 'g4', text: '버는 돈이 적은 쪽이 다 한다' }, { id: 'g5', text: '집안일은 늘 보호자 가 몫이다' }, { id: 'g6', text: '한 주씩 일을 바꿔 본다', ok: true }]),
              null,
              CL('두 보호자의 분담과 바쁜 주를 위한 바꿈 규칙으로 알맞은 것만 표시하세요.', '분담과 바꿈 규칙', [
                { id: 'g1', text: '요리와 설거지를 번갈아 맡는다', ok: true }, { id: 'g2', text: '장보기와 청소를 나눠 맡는다', ok: true }, { id: 'g3', text: '아이 학교 일은 둘이 함께 챙긴다', ok: true },
                { id: 'g4', text: '버는 돈이 적은 쪽이 다 한다' }, { id: 'g5', text: '집안일은 늘 보호자 가 몫이다' }, { id: 'g6', text: '한 주씩 일을 바꿔 본다', ok: true },
                { id: 'g7', text: '바쁜 주에는 미리 말하고 일을 바꾼다', ok: true }, { id: 'g8', text: '바꾼 일은 다음 주에 되돌려 준다', ok: true }, { id: 'g9', text: '바쁘면 말없이 안 해도 된다' }]),
              { conclude: '공정한 분담은 성별이 아니라 나이·시간·희망으로 나누고, 모두 함께 맡으며 바쁠 때는 서로 바꿔 주는 것이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 가족의 집안일을 다시 나눌 때 쓴 기준(나이·시간·희망 가운데) 하나와 그 까닭을 한 문장으로 써요.' }] },
        notes: '가상 가족의 분담이다. 학생 자기 집의 분담을 발표하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('act.case-analysis', {
        title: '가족 장면으로 갈등과 폭력 가르기', method: '가상 가족 장면을 갈등과 폭력으로 가르고 기준 고르기', tool: 'sortboard', minutes: 15,
        levels: { easy: '장면 카드 4장만 나누고, 이름표 옆에 든 장 수가 보이며 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '장면 카드 8장을 \'갈등\'·\'폭력\' 바구니에 나누고, 둘째 문항에서 가르는 기준을 고른다.', challenge: '셋째 문항에 경계에 있는 장면 2장이 더 나오고, 그 판단 까닭을 활동지에 쓴다.' },
        activity: {
          title: '가족 장면으로 갈등과 폭력 가르기', tool: 'sortboard',
          teacher: '"의견이 달라 다투는 것과 폭력은 무엇이 다를까요?" 장면 카드를 넣을 때마다 \'누가 두려워하나·되풀이되나·한 사람이 통제하나\'를 묻는다. "목소리가 크면 폭력"이라는 학생에게 "목소리가 커졌어도 다음 날 다시 이야기하고 서로 사과하는 가족은 어떤가요?"라고 되묻는다. "가족끼리 휴대폰 보는 건 관심"이라는 학생에게는 날마다 검사하고 아무도 못 만나게 하는 것은 통제라는 점을 짚는다. 갈등은 어느 집에나 있고, 폭력의 책임은 피해자가 아니라 폭력을 쓴 쪽에 있다는 점을 끝에 말한다.',
          task: '가상 가족 장면 카드를 \'갈등\'과 \'폭력\' 바구니에 나누고, 둘을 가르는 기준(두려움·되풀이·통제)을 골라요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SBX('가족 장면 카드를 \'갈등\'과 \'폭력\' 바구니에 나누세요.', ['갈등', '폭력'], CASES),
              SBX('가족 장면 카드 4장을 \'갈등\'과 \'폭력\' 바구니에 나누세요.', ['갈등', '폭력'], pickCards(CASES, ['c1', 'c2', 'c3', 'c6']), { instant: true, showCount: true })),
            IT(SBX('갈등과 폭력을 가르는 기준이 되는 것과 아닌 것을 나누세요.', ['가르는 기준', '기준이 아님'], [
              { id: 'k1', text: '한 사람이 두려움을 느낀다', to: '가르는 기준' }, { id: 'k2', text: '같은 일이 되풀이된다', to: '가르는 기준' },
              { id: 'k3', text: '한 사람이 다른 사람을 통제한다', to: '가르는 기준' }, { id: 'k4', text: '의견이 서로 다르다', to: '기준이 아님' },
              { id: 'k5', text: '집 안에서 일어났다', to: '기준이 아님' }, { id: 'k6', text: '목소리가 한 번 커졌다', to: '기준이 아님' }])),
            IT(SBX('다른 가족 장면도 바구니에 나누세요.', ['갈등', '폭력'], CASES2),
              null,
              Object.assign(SBX('다른 가족 장면과 경계에 있는 장면까지 바구니에 나누세요.', ['갈등', '폭력'], [...CASES2, ...MORE2])),
              { conclude: '갈등은 어느 가족에나 있고 대화로 풀 수 있어요. 두려움·되풀이·통제가 있으면 폭력이고, 그 책임은 폭력을 쓴 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'다툰 뒤 사과하는 가족\'과 \'위협이 되풀이되는 가족\'이 다른 까닭을 기준 하나를 들어 써요.' }],
          easy: [{ type: 'choice', prompt: '폭력을 가르는 기준이 아닌 것은?', options: ['두려움', '의견이 다름'], answer: '의견이 다름' }] },
        notes: SAFE_NOTE,
      }),
      M('act.safe-dilemma', {
        title: '친구를 걱정하는 갈림길', method: '집에 가기 싫다는 친구를 돕는 갈림길', tool: 'dilemma', minutes: 28,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 시우에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길과 견주는 근거까지 고르고, 셋째 문항에서 친구에게 건넬 첫 말을 고른 뒤 활동지에 내 말로 쓴다.' },
        activity: {
          title: '친구를 걱정하는 갈림길', tool: 'dilemma',
          teacher: '"\'선생님한테는 말하지 마\'라는 부탁, 지켜 주는 것이 친구를 위하는 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "남의 집 일에 끼어들면 안 된다"는 학생에게 "시우가 무서운 밤을 계속 보낸다면, 그것도 남의 일일까요?"라고 되묻는다. 친구가 직접 해결할 필요는 없고, 들어 주고 믿는 어른에게 잇는 것까지가 친구의 몫이라는 점을 끝 장면에서 짚는다. 학생 자신의 집 이야기는 묻지 않는다.',
          task: '가상 인물 하준이 "집에 가기 싫어"라는 친구 시우를 걱정하는 장면에서 길을 골라 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '하준이 시우를 걱정해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '하준이 시우를 걱정해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '시우를 걱정하는 하준', D1, [['listen', 'together', 'stay'], ['push', 'sorry', 'adult'], ['ignore', 'tellT']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '도움을 청할 어른을 고르는 장면을 따라가세요.', toolOptions: { title: '누구에게 갈까?', scene: { text: '시우가 함께 가겠다고 했다. 하준은 누구에게 먼저 갈지 고민한다.', ask: '누구에게 갈까?', motif: 'house', choices: [
              { id: 'teacher', text: '담임 선생님이나 상담 선생님(Wee 클래스)', result: '선생님이 차분히 듣고 도움 기관과 잇는다.', impact: [{ who: '시우', text: '도움이 닿는다', tone: 1 }], ending: '믿는 어른에게 함께 갔어요.' },
              { id: 'friends', text: '반 친구들 여럿에게 먼저 알린다', result: '이야기가 소문처럼 번진다.', impact: [{ who: '시우', text: '부끄러움을 느낀다', tone: -1 }], why: '친구들에게 퍼뜨리면 상처가 돼요. 도와줄 수 있는 어른에게 가요.' },
              { id: 'alone', text: '하준이 혼자 시우네 집에 찾아가 따진다', result: '하준과 시우 모두 위험해질 수 있다.', impact: [{ who: '하준과 시우', text: '위험해진다', tone: -1 }], why: '친구가 직접 해결하려 하면 위험해요. 어른의 도움을 받아요.' }] }, reasons: [{ id: 'q1', text: '도와줄 수 있는 어른에게 간다' }, { id: 'q2', text: '친구의 이야기는 꼭 필요한 사람에게만 말한다' }, { id: 'q3', text: '친구 대신 직접 해결해 준다', why: '친구가 혼자 나서면 위험해요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['teacher']], reasons: ['q1', 'q2'], some: true } },
              { prompt: '도움을 청할 어른을 고르세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } },
              { prompt: '도움을 청할 어른을 고르고, 알맞은 근거를 모두 고르세요.', target: { path: [['teacher']], reasons: ['q1', 'q2'] } }),
            IT({ prompt: '시우에게 건넬 첫 말을 고르는 장면을 따라가세요.', toolOptions: { title: '첫 말 고르기', scene: { text: '시우가 오늘도 교실에 늦게까지 남아 있다. 하준이 다가간다.', ask: '첫 말로 무엇이 좋을까?', motif: 'house', choices: [
              { id: 'open', text: '"요즘 힘들어 보여. 말하고 싶으면 언제든 들을게."', result: '시우가 "고마워"라며 조금 웃는다.', impact: [{ who: '시우', text: '말할 사람이 생긴다', tone: 1 }], ending: '들어 줄 준비가 됐다고 알렸어요.' },
              { id: 'blame', text: '"네가 말을 안 들어서 혼나는 거 아냐?"', result: '시우가 고개를 숙이고 자리를 뜬다.', impact: [{ who: '시우', text: '자기를 탓한다', tone: -1 }], why: '폭력은 아이 탓이 아니에요. 탓하는 말은 상처를 키워요.' }] }, reasons: [{ id: 'w1', text: '탓하지 않고 들어 줄 준비가 됐다고 알린다' }, { id: 'w2', text: '혼나는 데는 까닭이 있다', why: '폭력은 어떤 까닭으로도 아이 잘못이 아니에요.' }], compare: true },
              target: { path: [['open']], reasons: ['w1'] }, conclude: '친구가 걱정되면 탓하지 않고 들어 주고, 비밀보다 안전을 먼저 두어 믿는 어른과 함께 도움을 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 집에 가기 싫다고 자주 말할 때 알맞은 행동은?', options: ['모른 척한다', '왜 그런지 끝까지 캐묻는다', '들어 주고 믿는 어른에게 함께 가자고 한다'], answer: '들어 주고 믿는 어른에게 함께 가자고 한다' }, { type: 'short', prompt: '"집에 가기 싫어"라고 말하는 친구에게 건넬 첫 말을 탓하는 말 없이 써요.' }] },
        notes: '집 안에서 일어난 일은 자세히 묘사하지 않는다. 수업 뒤 걱정을 말하는 학생은 바로 상담 선생님과 잇는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.help-steps', {
        title: '안전한 도움 요청 차례', method: '도움 요청 차례 카드 맞추기와 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '차례 카드 3장(안전한 곳·믿는 어른·학교 상담)을 맞춘다.', base: '차례 카드 4장(+ 신고·상담 번호 칸)을 맞추고 스스로 점검한다.', challenge: '번호를 모를 때 대신할 방법을 넷째 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"집이 무섭다고 느끼는 친구가 가장 먼저 해야 할 일은 무엇일까요?" 차례 카드를 맞춘 뒤 \'안전한 곳으로 가기\'가 왜 맨 앞인지 묻는다. "신고하면 가족이 다 혼난다"는 걱정이 나오면 "신고·상담은 벌을 주려는 것보다 안전하게 지내도록 돕는 일이에요"라고 짚는다. 지역 상담 번호 칸은 학교가 확인해 넣은 번호를 함께 읽는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '도움 요청 차례', cards: [STEPS4[2], STEPS4[0], STEPS4[3], STEPS4[1]] }, prompt: '도움을 요청하는 차례대로 카드를 놓아요.', target: { order: STEPS4 }, difficulty: 0.15 },
              { prompt: '도움을 요청하는 차례대로 카드 3장을 놓아요.', options: { title: '도움 요청 차례', cards: [STEPS4[2], STEPS4[0], STEPS4[1]] }, target: { order: STEPS4.slice(0, 3) } }),
            SELF('오늘 알게 된 것에 스스로 표시해요.', '도움 요청 스스로 점검', ['위험할 때는 먼저 안전한 곳으로 간다는 것을 안다', '믿는 어른 한 사람을 떠올릴 수 있다', '학교 상담(Wee 클래스)이 어디 있는지 안다', '지역 상담 번호 칸을 확인했다']),
            { type: 'choice', prompt: '친구가 "비밀로 해 줘"라며 집이 무섭다고 털어놓았을 때 알맞은 것은?', options: ['약속했으니 아무에게도 말하지 않는다', '친구의 안전을 위해 믿는 어른과 함께 도움을 찾는다', '친구 보호자에게 직접 따진다'], answer: 1, difficulty: 0.2, explain: '친구가 위험할 수 있으면 비밀보다 안전이 먼저예요.' },
            { type: 'short', prompt: '상담 번호를 모를 때 대신할 방법을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '안전한 도움 요청 차례',
          items: [
            { type: 'table', prompt: '도움 요청 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '안전한 곳으로 가기, 믿는 어른에게 알리기, 학교 상담(Wee 클래스), 신고·상담 번호' },
            { type: 'short', prompt: `학교가 알려 준 지역 상담 번호를 옮겨 써요. ${LOCAL}` },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.family-letter', {
        title: '"함께 나누는 집" 제안 글', method: '가상 가족에게 평등한 가족 약속 제안 글 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("우리 집은 ___ 을 함께 나누면 좋겠어요")을 채워 쓰고 기준 2개를 점검한다.', base: '4문장 제안 글을 쓰고 기준표 3항목(공정·구체성·존중)으로 점검한다.', challenge: '갈등이 생길 때의 대화 규칙 한 문장을 셋째 출구 질문에 덧붙인다.' },
        wrap: {
          teacher: '"서아네 가족에게 \'함께 나누는 집\'을 제안한다면 첫 문장은 무엇이 좋을까요?" 오늘 다시 짠 분담표를 떠올리며 쓰게 한다. "다 같이 열심히 하자"처럼 막연한 문장에는 "누가, 무엇을, 언제 하는지 들어가면 지킬 수 있을까요?"라고 되묻는다. 가상 가족에게 쓰는 글이며 우리 집 이야기는 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '가상 가족(서아네)에게 "함께 나누는 집" 제안 글을 4문장으로 쓰세요. 누가 무엇을 맡을지 구체적으로 써요.', minChars: 60, maxChars: 260, minSentences: 4, maxSentences: 5, title: '함께 나누는 집 제안' }, prompt: '서아네 가족에게 보낼 제안 글을 쓰고 기준표로 점검해요.', target: { selfCheck: ['한 사람에게 몰리지 않게 공정하게 나눴다', '누가 무엇을 할지 구체적으로 썼다', '가족을 존중하는 말로 썼다'] }, difficulty: 0.15 },
              { prompt: '문장 틀을 채워 두 문장으로 제안해요.', options: { topic: '서아네 가족에게 "함께 나누는 집"을 두 문장으로 제안하세요.', minChars: 25, minSentences: 2, maxSentences: 3, starter: '우리 집은 ___ 을 함께 나누면 좋겠어요. 저는 ___ 을 맡을게요.' }, target: { selfCheck: ['공정하게 나눴다', '가족을 존중하는 말로 썼다'] } }),
            { type: 'choice', prompt: '"함께 나누는 집" 제안으로 가장 알맞은 것은?', options: ['요리는 늘 한 사람이 맡는다', '나이와 시간에 맞게 나누고 바쁜 날은 서로 바꿔 준다', '어린 동생은 아무것도 하지 않는다'], answer: 1, difficulty: 0.15, explain: '나이·시간·희망에 맞게 함께 나누는 것이 공정해요.' },
            { type: 'short', prompt: '가족 사이에 갈등이 생길 때 지킬 대화 규칙을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '함께 나누는 집',
          items: [
            { type: 'short', prompt: '가상 가족에게 제안하는 분담 약속을 한 문장으로 써요.' },
            { type: 'check', prompt: '내 제안 글을 점검해요.', options: ['공정하게 나눴다', '구체적으로 썼다', '존중하는 말로 썼다'] },
          ],
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 07-g7-crush-reject.js ====
  // ==== 7학년 · 좋아하는 마음, 고백과 거절 (gender.m.g7-crush-reject) ====
  {
    const M = MK('g7-crush-reject', [7]);
    const PUBLIC = [
      { id: 'p1', text: '반 친구들이 모두 지켜보는 앞에서 꽃을 내민다', motif: 'flower', ok: true }, { id: 'p2', text: '친구들이 "받아 줘!"라고 한꺼번에 외친다', motif: 'star', ok: true },
      { id: 'p3', text: '대답하기 전에 휴대폰으로 영상을 찍는 친구가 있다', motif: 'cloud', ok: true }, { id: 'p4', text: '둘만 있을 때 쪽지로 마음을 전한다', motif: 'sun' },
      { id: 'p5', text: '"대답은 천천히 해도 돼"라고 말한다', motif: 'tree' },
    ];
    const FEEL = [['설렘', '좋아하는 마음을 일기에 적어 본다'], ['불안', '믿는 친구에게 마음을 털어놓는다'], ['질투', '그 사람의 친구 관계를 내가 정할 수 없음을 떠올린다'], ['민망함', '실수는 누구나 한다고 스스로에게 말한다'], ['서운함', '감정을 인정하고 좋아하는 활동으로 마음을 돌린다']];
    // 거절 뒤 갈림길(깊이 3)
    const D1 = { text: '민재가 같은 반 지유에게 좋아한다고 말했다. 지유는 "고마워. 그런데 나는 친구로 지내고 싶어"라고 답했다.', ask: '민재는 어떻게 할까?', motif: 'house', choices: [
      { id: 'beg', text: '"한 번만 더 생각해 줘"라며 날마다 다시 조른다', result: '지유는 민재를 피해 다른 길로 다닌다.', impact: [{ who: '지유', text: '부담과 불편이 커진다', tone: -1 }], why: '거절은 지유의 결정이에요. 계속 조르면 결정을 무시하는 것이 돼요.', end: '지유가 민재를 피하게 됐어요.',
        next: { text: '친구들이 "한 번 더 고백하면 넘어올 거야"라고 부추긴다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'again', text: '친구들 앞에서 한 번 더 고백한다', result: '지유는 모두가 보는 앞에서 곤란해하며 자리를 뜬다.', impact: [{ who: '지유', text: '더 큰 압력을 느낀다', tone: -1 }], why: '여러 번 고백한다고 마음이 바뀌지 않아요. 상대의 뜻을 존중해요.', end: '지유가 더 곤란해졌어요.',
            next: { text: '지유가 담임 선생님께 "불편하다"고 이야기했다는 것을 민재가 알게 된다.', choices: [
              { id: 'stop', text: '"미안해, 이제 그만할게"라고 짧게 사과하고 거리를 둔다', result: '지유가 조금 편해진다.', impact: [{ who: '지유', text: '안심한다', tone: 1 }], ending: '늦었지만 멈추고 사과했어요.' },
              { id: 'angry', text: '"고자질했다"며 화를 낸다', result: '지유가 더 불안해한다.', impact: [{ who: '지유', text: '불안이 커진다', tone: -1 }], why: '불편함을 어른에게 말하는 것은 지유의 권리예요.' }] } },
          { id: 'noagain', text: '"지유가 싫다고 했으니 안 해"라고 친구들에게 말한다', result: '친구들이 부추기기를 멈춘다.', impact: [{ who: '지유', text: '부담이 줄어든다', tone: 1 }], ending: '부추김에도 지유의 결정을 존중했어요.' }] } },
      { id: 'rumor', text: '친구들에게 "지유가 날 갖고 놀았다"고 소문낸다', result: '지유에 대한 이상한 말이 반에 퍼진다.', impact: [{ who: '지유', text: '억울하고 상처받는다', tone: -1 }], why: '거절당한 아픔을 상대 탓으로 돌려 소문내면 상대에게 큰 상처가 돼요.', end: '지유에 대한 소문이 퍼졌어요.',
        next: { text: '지유가 소문 때문에 쉬는 시간마다 혼자 있다.', ask: '민재는 어떻게 할까?', choices: [
          { id: 'fix', text: '소문을 낸 것이 잘못이었다고 친구들에게 바로잡는다', result: '소문이 잦아든다.', impact: [{ who: '지유', text: '조금 마음이 놓인다', tone: 1 }], end: '잘못을 바로잡았어요.',
            next: { text: '민재는 아직 마음이 아프다.', choices: [
              { id: 'care', text: '믿는 친구에게 아픈 마음을 털어놓고 운동으로 마음을 돌린다', result: '민재의 마음이 조금씩 가라앉는다.', impact: [{ who: '민재', text: '마음을 건강하게 다룬다', tone: 1 }], ending: '잘못을 바로잡고 내 마음도 돌봤어요.' },
              { id: 'blame', text: '"다 지유 때문"이라며 계속 원망한다', result: '민재의 마음은 더 무거워진다.', impact: [{ who: '민재', text: '아픔이 오래간다', tone: -1 }], why: '거절은 누구의 잘못도 아니에요. 원망보다 내 마음을 돌봐요.' }] } },
          { id: 'more', text: '더 크게 소문을 낸다', result: '지유가 학교에 오기 힘들어한다.', impact: [{ who: '지유', text: '상처가 커진다', tone: -1 }], why: '소문은 상대에게 큰 피해를 줘요.' }] } },
      { id: 'accept', text: '"알겠어, 말해 줘서 고마워"라고 하고 거리를 둔다', result: '지유가 고개를 끄덕이고 편하게 인사한다.', impact: [{ who: '지유', text: '결정을 존중받았다고 느낀다', tone: 1 }], end: '거절을 받아들였어요.',
        next: { text: '집에 온 민재는 서운하고 민망한 마음이 든다.', ask: '이 마음을 어떻게 할까?', choices: [
          { id: 'feel', text: '서운한 마음을 인정하고 믿는 친구나 보호자에게 이야기한다', result: '마음이 조금 가벼워진다.', impact: [{ who: '민재', text: '마음을 건강하게 다룬다', tone: 1 }], end: '내 마음을 돌봤어요.',
            next: { text: '다음 날 교실에서 지유와 마주친다.', choices: [
              { id: 'hello', text: '평소처럼 가볍게 인사한다', result: '두 사람 모두 편하게 하루를 보낸다.', impact: [{ who: '지유와 민재', text: '친구 사이가 이어진다', tone: 1 }], ending: '거절 뒤에도 서로 존중하며 지냈어요.' },
              { id: 'cold', text: '일부러 째려보며 지나간다', result: '지유가 불편해한다.', impact: [{ who: '지유', text: '불편을 느낀다', tone: -1 }], why: '거절은 지유의 권리예요. 서운함을 상대에게 풀지 않아요.' }] } },
          { id: 'sns', text: '지유의 SNS를 계속 들여다본다', result: '서운함이 오히려 커진다.', impact: [{ who: '민재', text: '마음이 더 무거워진다', tone: -1 }], why: '상대를 계속 살피면 마음이 정리되지 않아요. 거리를 두어요.' }] } }] };
    const R1 = [{ id: 'r1', text: '거절은 상대가 정한 결정이고 존중해야 한다' }, { id: 'r2', text: '거절당한 마음은 나를 돌보는 방법으로 다룬다' },
      { id: 'r3', text: '여러 번 고백하면 마음이 바뀐다', why: '조르는 것은 상대의 결정을 무시하는 것이에요.' }, { id: 'r4', text: '거절한 사람이 나쁜 사람이다', why: '거절은 잘못이 아니라 상대의 권리예요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '받아들인 길에서는 두 사람이 편하게 지냈다' }, { id: 'r6', text: '조르거나 소문낸 길에서는 지유가 피하고 상처받았다' }], ok: ['r5', 'r6'] };
    const KR = (o) => Object.assign({ mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, o);

    ALL.push(
      // ---- 도입 ----
      M('intro.public-confess', {
        title: '공개 고백 장면 분석', method: '공개 고백 장면을 받는 사람 입장에서 보기', tool: 'story', minutes: 5,
        levels: { easy: '시연 판의 장면 카드 3장(모두 지켜봄·한꺼번에 외침·쪽지)만 교사와 함께 읽는다.', base: '장면 카드 5장에서 받는 사람에게 부담이 되는 장면 3장을 고르는 시연을 보고 까닭을 말한다.', challenge: '부담을 줄이는 방법을 짝에게 한 가지 말한다.' },
        intro: {
          teacher: '"모두가 보는 앞에서 깜짝 고백을 받으면, 받는 사람은 거절하기 쉬울까요?" 장면 카드 5장을 띄우고 시연 단추로 부담이 되는 장면 3장이 바구니에 담기는 모습을 보인다. "많은 사람 앞에서 고백하면 더 진심이다"라는 말이 나오면 "진심인지보다, 받는 사람이 자유롭게 대답할 수 있는지가 먼저 아닐까요?"라고 되묻는다. 장면 속 인물은 모두 가상이고 우리 반 이야기는 하지 않는다.',
          student: '친구들 앞 깜짝 고백 장면 카드를 보고, 고백받는 사람 입장에서 부담이 되는 장면을 골라요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '받는 사람에게 부담이 되는 장면', cards: strip(PUBLIC) }, sequence: [{ pick: ['p1', 'p2', 'p3'] }] },
          art: { draw: 'a paper-cut classroom where many paper students surround two students, one holding out a paper flower and the other stepping back', banner: '받는 사람의 자리에서', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '학생에게 고백한 적·받은 적을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.feeling-map', {
        title: '좋아하는 마음과 함께 오는 감정', method: '감정 카드와 건강하게 다루는 방법 짝짓기', tool: 'emotion', minutes: 7,
        levels: { easy: '시연 판에서 감정 3개(설렘·불안·질투)와 방법만 교사와 함께 읽는다.', base: '감정 5개와 다루는 방법이 짝지어지는 시연을 보고 짝마다 까닭을 말한다.', challenge: '질투를 행동(상대 휴대폰 보기·친구 만남 막기)으로 옮기지 않는 방법을 짝에게 말한다.' },
        intro: {
          teacher: '"누군가를 좋아하면 설렘만 올까요?" 감정 카드 5개(설렘·불안·질투·민망함·서운함)를 띄우고 시연 단추로 감정마다 건강하게 다루는 방법이 짝지어지는 모습을 보인다. "질투는 사랑하니까 당연히 표현해도 된다"는 말이 나오면 "질투하는 마음은 생길 수 있어요. 그런데 그 마음으로 상대의 친구 관계를 막는다면 어떨까요?"라고 되묻는다. 감정은 자연스럽고, 행동은 내가 고를 수 있다는 점을 짚는다.',
          student: '좋아하는 마음과 함께 오는 감정 카드마다, 그 감정을 건강하게 다루는 방법을 짝지어 봐요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: FEEL.map((f, i) => ({ id: `s${i + 1}`, label: f[0] })), cards: FEEL.map((f, i) => ({ id: `k${i + 1}`, text: f[1] })) }, sequence: [{ match: Object.fromEntries(FEEL.map((_, i) => [`s${i + 1}`, `k${i + 1}`])) }] },
          art: { draw: 'a paper-cut heart surrounded by five small paper weather icons: sun, cloud, rain, wind and rainbow', banner: '마음은 여러 날씨', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
        },
        notes: '학생 자신의 감정 경험을 발표하게 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.confess-dilemma', {
        title: '고백과 거절 갈림길', method: '거절을 들은 뒤의 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 지유·민재에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길과 견주는 근거까지 고르고, 셋째 문항에서 거절한 지유의 입장에서 장면을 다시 본다.' },
        activity: {
          title: '고백과 거절 갈림길', tool: 'dilemma',
          teacher: '"지유가 \'친구로 지내고 싶어\'라고 했을 때, 민재가 할 수 있는 가장 존중하는 행동은 무엇일까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "여러 번 고백하면 마음이 바뀐다"는 학생에게 "지유가 날마다 피해 다니게 된 길을 보세요. 마음이 바뀌었나요, 부담이 커졌나요?"라고 되묻는다. 거절은 나쁜 일이 아니라 상대의 결정이고, 서운한 마음은 상대에게 풀지 않고 스스로 돌본다는 점을 끝에 짚는다.',
          task: '가상 인물 민재가 고백을 거절당한 장면에서 길을 골라 결과를 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '민재가 거절을 들었어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '민재가 거절을 들었어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '거절을 들은 민재', D1, [['accept', 'feel', 'hello'], ['beg', 'noagain'], ['rumor', 'fix', 'care']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '친구들이 "한 번 더 해 봐"라고 부추기는 장면을 따라가세요.', toolOptions: { title: '부추기는 친구들', scene: { text: '민재가 거절당한 것을 안 친구들이 "끈질기게 하면 넘어와"라고 말한다.', ask: '민재는 어떻게 할까?', motif: 'house', choices: [
              { id: 'respect', text: '"지유가 정한 거야. 존중할래"라고 말한다', result: '친구들이 머쓱해하며 부추기기를 멈춘다.', impact: [{ who: '지유', text: '결정을 존중받는다', tone: 1 }], ending: '부추김보다 상대의 결정을 먼저 두었어요.' },
              { id: 'follow', text: '친구들 말대로 계속 쫓아다닌다', result: '지유가 무서워하며 선생님께 도움을 청한다.', impact: [{ who: '지유', text: '불안해진다', tone: -1 }], why: '끈질기게 쫓아다니는 것은 낭만이 아니라 상대를 불안하게 하는 행동이에요.' }] }, reasons: [{ id: 'q1', text: '거절 뒤에는 상대의 결정을 존중한다' }, { id: 'q2', text: '끈질긴 고백은 진심의 증거다', why: '진심이어도 상대가 싫다면 멈춰야 해요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['respect']], reasons: ['q1'] } },
              { prompt: '부추기는 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '거절한 지유의 입장에서 다음 날 장면을 따라가세요.', toolOptions: { title: '지유의 자리에서', scene: { text: '지유는 민재에게 거절한 뒤 마음이 편하지 않다. "내가 너무했나?" 싶다.', ask: '지유에게 맞는 생각은?', motif: 'house', choices: [
              { id: 'okay', text: '"내 마음을 솔직하고 정중하게 말한 거야"라고 생각한다', result: '지유는 미안함보다 존중을 담아 평소처럼 지낸다.', impact: [{ who: '지유', text: '마음을 지킨다', tone: 1 }], ending: '거절도 존중하는 말로 할 수 있어요.' },
              { id: 'guilt', text: '"미안하니까 그냥 사귀어 줄까" 하고 생각한다', result: '지유는 원하지 않는 관계에 마음이 무겁다.', impact: [{ who: '지유', text: '원치 않는 선택을 하게 된다', tone: -1 }], why: '미안함 때문에 내 마음과 다른 결정을 할 필요는 없어요.' }] }, reasons: [{ id: 'g1', text: '거절은 잘못이 아니라 내 마음을 지키는 권리다' }, { id: 'g2', text: '상대가 서운하면 마음을 바꿔 줘야 한다', why: '상대의 서운함은 상대가 돌볼 몫이에요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['okay']], reasons: ['g1'] } },
              null, null,
              { conclude: '거절은 상대가 정한 결정이에요. 조르거나 소문내지 않고 받아들이며, 서운한 마음은 스스로 돌봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '거절을 들은 뒤 가장 존중하는 행동은?', options: ['한 번 더 고백한다', '알겠다고 하고 거리를 둔다', '친구들에게 서운했던 일을 퍼뜨린다'], answer: '알겠다고 하고 거리를 둔다' }] },
        notes: '학생의 실제 고백·연애 경험을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('act.reply-writing', {
        title: '존중하는 고백·거절 문자 쓰기', method: '고백·거절 문자 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '고백 문자 하나를 문장 틀로 쓰고, 거절 문자는 시작 말을 채워 한 문장으로 쓴다.', base: '고백 문자와 거절 문자를 각각 3문장으로 쓰고 기준표 3항목(부담 주지 않기·분명함·상대 감정 존중)으로 점검한다.', challenge: '셋째 문항에서 거절 뒤 학교에서 마주칠 때 할 말을 두 문장으로 덧붙인다.' },
        activity: {
          title: '존중하는 고백·거절 문자 쓰기', tool: 'rubric-writing',
          teacher: '"\'답 안 하면 계속 기다릴게\'라는 고백 문자, 받는 사람은 어떤 기분일까요?" 부담 주는 문장과 \'천천히 생각해도 되고 거절해도 괜찮아\'를 견주어 읽은 뒤 쓰게 한다. "거절할 때는 돌려 말해야 상처를 안 준다"는 학생에게 "흐린 말을 들은 사람은 기다려도 되는지 알 수 있을까요?"라고 되묻는다. 분명함과 존중은 함께 갈 수 있다는 점을 짚는다. 가상 인물 민재와 지유의 문자로 쓰며 실제 이름은 쓰지 않는다.',
          task: '가상 인물 민재의 고백 문자와 지유의 거절 문자를 쓰고, 부담 주지 않기·분명함·상대 감정 존중을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '민재가 지유에게 보낼 고백 문자를 3문장으로 쓰세요.', toolOptions: { topic: '민재가 지유에게 보낼 고백 문자를 3문장으로 쓰세요. 지유가 거절해도 괜찮다는 뜻을 넣어요.', minChars: 40, maxChars: 180, minSentences: 3, maxSentences: 4, title: '민재의 고백 문자' }, target: { selfCheck: ['상대에게 부담을 주는 말이 없다', '내 마음을 분명하게 썼다', '거절해도 괜찮다는 뜻을 넣었다'], mustInclude: [['괜찮', '천천히']] } },
              { prompt: '문장 틀을 채워 고백 문자를 쓰세요.', toolOptions: { minChars: 25, minSentences: 2, starter: '지유야, 나는 너를 ___. 대답은 ___ 해도 괜찮아.' }, target: { selfCheck: ['상대에게 부담을 주는 말이 없다', '거절해도 괜찮다는 뜻을 넣었다'], mustInclude: [['괜찮', '천천히']] } }),
            IT({ prompt: '지유가 민재에게 보낼 거절 문자를 3문장으로 쓰세요.', toolOptions: { topic: '지유가 민재에게 보낼 거절 문자를 3문장으로 쓰세요. 고마운 마음과 분명한 거절을 함께 넣어요.', minChars: 40, maxChars: 180, minSentences: 3, maxSentences: 4, title: '지유의 거절 문자' }, target: { selfCheck: ['거절하는 뜻이 분명하다', '상대의 마음을 존중했다', '상대를 깎아내리는 말이 없다'] } },
              { prompt: '시작 말을 채워 거절 문자를 한 문장으로 쓰세요.', toolOptions: { topic: '지유가 민재에게 보낼 거절 문자를 한 문장으로 쓰세요.', minChars: 12, minSentences: 1, maxSentences: 2, starter: '말해 줘서 고마워, 그런데 나는 ___.' }, target: { selfCheck: ['거절하는 뜻이 분명하다', '상대의 마음을 존중했다'] } }),
            IT({ prompt: '가상 고백 문자 "답 안 하면 계속 기다릴게"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 고백 문자: "답 안 하면 계속 기다릴게." 기준표(부담 주지 않기·분명함·상대 감정 존중)로 읽고 두 문장으로 고쳐 쓰세요.', minChars: 25, maxChars: 150, minSentences: 2, maxSentences: 3, title: '부담 주는 문자 고치기' }, target: { selfCheck: ['부담 주는 말을 뺐다', '상대가 자유롭게 대답할 수 있게 썼다', '쓴 사람을 탓하지 않고 고쳤다'] } },
              null,
              { prompt: '거절 뒤 다음 날 교실에서 마주칠 때 민재와 지유가 할 말을 쓰세요.', toolOptions: { topic: '거절 뒤 다음 날 교실에서 마주쳤을 때 민재와 지유가 서로에게 할 말을 두 문장으로 쓰세요.', minChars: 25, maxChars: 150, minSentences: 2, maxSentences: 3, title: '다음 날 마주칠 때' }, target: { selfCheck: ['어색함을 키우지 않는 말로 썼다', '상대의 결정을 존중했다', '두 사람 모두의 말을 썼다'] } },
              { conclude: '존중하는 고백은 거절해도 괜찮다는 여지를 주고, 존중하는 거절은 고마움과 분명한 뜻을 함께 담아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '부담 주지 않는 고백 문자의 한 문장을 써요(실제 이름 없이).' }] },
        notes: '학생 자신의 고백·거절 문자를 쓰게 하지 않는다. 가상 인물의 문자다. ' + SAFE_NOTE,
      }),
      M('act.rhythm-chant', {
        title: '"좋아해도 묻고, 싫다면 멈춰" 구호 리듬', method: '존중 구호를 리듬 블록으로 만들어 치기', tool: 'keyboard', minutes: 28,
        levels: { easy: '구호마다 들려 주는 리듬을 따라 놓고, 마디마다 지금 박 수가 보인다.', base: '구호 두 줄을 따라 놓은 뒤 우리 모둠 구호를 4박 한 마디로 만든다.', challenge: '모둠 구호를 두 마디(두 줄)로 늘려 만들고 스스로 점검한다.' },
        activity: {
          title: '"좋아해도 묻고, 싫다면 멈춰" 구호 리듬', tool: 'keyboard',
          teacher: '"\'좋-아-해-도 묻-고\', 글자 하나에 박 하나를 붙이면 몇 박이 될까요?" 구호를 손뼉으로 먼저 쳐 보고 리듬 블록을 놓게 한다. 모둠마다 존중 구호를 지어 4박에 맞추고 발표하게 한다. "구호는 재미로 하는 것"이라는 학생에게 "구호가 머리에 남으면, 고백 장면에서 어떤 말이 먼저 떠오를까요?"라고 되묻는다. 상대를 놀리거나 특정 친구를 떠올리게 하는 구호는 만들지 않게 한다.',
          task: '"좋아해도 묻고, 싫다면 멈춰" 구호를 리듬 블록으로 놓아 들어 보고, 우리 모둠의 존중 구호 리듬을 만들어요.',
          levels: { easy: { showBeats: true }, base: {}, challenge: {} },
          items: [
            { prompt: '"좋-아-해-도 묻-고" 리듬을 듣고 똑같이 놓으세요(8분음표 넷, 4분음표 둘).', toolOptions: KR({ pattern: ['e', 'e', 'e', 'e', 'q', 'q'] }), target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'q'] }, difficulty: 0.2 },
            { prompt: '"싫-다-면 멈-춰" 리듬을 듣고 똑같이 놓으세요(4분음표, 8분음표 둘, 4분음표 둘).', toolOptions: KR({ pattern: ['q', 'e', 'e', 'q', 'q'] }), target: { rhythm: ['q', 'e', 'e', 'q', 'q'] }, difficulty: 0.2 },
            IT({ prompt: '우리 모둠 존중 구호를 4박 한 마디 리듬으로 만드세요.', toolOptions: KR({}), target: { beats: true }, difficulty: 0.3 },
              { prompt: '"묻-고 기-다-려" 리듬을 듣고 똑같이 놓으세요.', toolOptions: KR({ pattern: ['q', 'q', 'q', 'e', 'e'] }), target: { rhythm: ['q', 'q', 'q', 'e', 'e'] } },
              { prompt: '우리 모둠 존중 구호를 두 마디(두 줄) 리듬으로 만드세요.', toolOptions: KR({ measures: 2 }), target: { beats: true } }),
            IT({ prompt: '모둠 구호 리듬을 다시 만들고 스스로 점검하세요.', toolOptions: KR({}), target: { beats: true, selfCheck: ['구호 글자와 박이 맞는다', '상대를 존중하는 말로 지었다', '모둠과 함께 소리 내어 쳐 보았다'] }, difficulty: 0.2 },
              { prompt: '구호 리듬을 한 마디로 만들고 스스로 점검하세요.', toolOptions: KR({ showBeats: true }), target: { beats: true, selfCheck: ['구호 글자와 박이 맞는다', '상대를 존중하는 말로 지었다'] } },
              { prompt: '두 마디 구호 리듬을 만들고 스스로 점검하세요.', toolOptions: KR({ measures: 2 }), target: { beats: true, selfCheck: ['두 줄 구호 글자와 박이 맞는다', '상대를 존중하는 말로 지었다', '모둠과 함께 소리 내어 쳐 보았다'] } },
              { conclude: '"좋아해도 묻고, 싫다면 멈춰" — 좋아하는 마음은 묻고 전하고, 거절은 바로 존중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 존중 구호를 글로 옮겨 쓰고, 그 구호가 말하는 행동을 한 문장으로 써요.' }] },
        notes: '리듬 블록은 박(4분음표 1박·8분음표 ½박)만 다룬다. 구호 글은 활동지에 쓴다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.respect-check', {
        title: '관계 존중 점검표', method: '고백·거절 뒤 존중 행동 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개에 표시한다.', base: '점검 항목 5개에 표시하고 둘째 출구 질문에 답한다.', challenge: '지키기 어려운 항목과 대안을 셋째 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 민재의 길에서 본 존중 행동 가운데 내가 할 수 있다고 생각하는 것은 무엇인가요?" 점검 항목은 내 연애 경험이 아니라 앞으로 지킬 다짐이라고 먼저 말한다. "거절당하면 화나는 건 어쩔 수 없다"는 학생에게 "화나는 마음은 생길 수 있어요. 그 마음을 소문이나 조르기로 옮기지 않는 방법은 무엇일까요?"라고 되묻는다.',
          exitTicket: [
            IT(SELF('앞으로 지킬 수 있는 존중 행동에 스스로 표시해요.', '관계 존중 점검', ['고백할 때 상대가 거절해도 된다는 여지를 줄 수 있다', '거절을 들은 뒤 소문내지 않을 수 있다', '거절을 들은 뒤 조르지 않을 수 있다', '공개 고백으로 상대를 곤란하게 하지 않을 수 있다', '서운한 마음을 믿는 사람에게 털어놓을 수 있다']),
              { prompt: '앞으로 지킬 수 있는 존중 행동에 스스로 표시해요(3개).', target: { selfCheck: ['거절을 들은 뒤 소문내지 않을 수 있다', '거절을 들은 뒤 조르지 않을 수 있다', '서운한 마음을 믿는 사람에게 털어놓을 수 있다'] } }),
            { type: 'choice', prompt: '"거절은 진심이 아니라 튕기는 것"이라는 말에 대한 반박으로 알맞은 것은?', options: ['한 번 더 물어보면 알 수 있다', '거절은 상대의 분명한 뜻이니 그대로 받아들인다', '친구들에게 물어보면 된다'], answer: 1, difficulty: 0.2, explain: '거절을 진심이 아니라고 여기면 상대의 뜻을 무시하게 돼요.' },
            { type: 'short', prompt: '지키기 어려운 존중 행동 하나와 그 대안을 써요.' },
          ],
        },
        worksheet: {
          title: '관계 존중 다짐',
          items: [
            { type: 'check', prompt: '내가 지킬 존중 행동에 표시해요.', options: ['거절해도 된다는 여지 주기', '거절 뒤 소문내지 않기', '거절 뒤 조르지 않기', '공개 고백으로 곤란하게 하지 않기'] },
            { type: 'short', prompt: '거절을 들은 뒤 서운한 마음을 다룰 방법을 하나 써요.' },
          ],
        },
        notes: '내 연애 경험을 점검하지 않고 앞으로의 다짐만 표시한다. ' + SAFE_NOTE,
      }),
      M('wrap.advice-card', {
        title: '거절당한 친구에게 건네는 조언 카드', method: '가상 친구를 위로하는 조언 카드 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '위로 문구 3개 가운데 알맞은 것을 고르고(둘째 출구 질문) 카드를 꾸민다.', base: '카드를 꾸미고 위로 문구를 직접 쓴다(셋째 출구 질문).', challenge: '친구가 할 수 있는 다음 행동 하나를 넷째 출구 질문에 함께 쓴다.' },
        wrap: {
          teacher: '"거절당한 민재에게 건넬 한마디, \'걔가 너를 몰라본 거야\'는 좋은 위로일까요?" 위로가 상대(지유) 탓으로 흐르지 않게 점검하게 한다. "다시 고백해 보라"는 조언이 나오면 "그 조언을 따르면 지유는 어떤 기분일까요?"라고 되묻는다. 콜라주 판에는 그림만 붙고, 문구는 출구 질문과 활동지에 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 위로 카드를 꾸미고 스스로 점검해요.', target: { selfCheck: ['카드에 넣을 위로 문구를 정했다', '상대를 탓하는 말이 없다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '거절당한 민재에게 건넬 위로로 가장 알맞은 것은?', options: ['지유가 너를 몰라본 거야', '서운하겠다. 네 마음 들어 줄게, 같이 농구하러 갈래?', '한 번 더 고백하면 될 거야'], answer: 1, difficulty: 0.15, explain: '상대를 탓하지 않고 마음을 알아주며 기분을 돌릴 거리를 주는 말이 좋아요.' },
            { type: 'short', prompt: '민재에게 건넬 위로 문구를 직접 써요.' },
            { type: 'short', prompt: '민재가 해 볼 수 있는 다음 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '위로 카드',
          items: [
            { type: 'short', prompt: '가상 친구 민재에게 건넬 위로 문구를 써요(상대 탓 없이).' },
            { type: 'short', prompt: '민재가 서운한 마음을 다룰 방법을 하나 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 문구는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 08-g7-photo-safety.js ====
  // ==== 7학년 · 몰래 찍기·사진 유포와 몸 사진 요구 (gender.m.g7-photo-safety) ====
  {
    const M = MK('g7-photo-safety', [7]);
    const SPREAD = [['찍은 사람', 1], ['단톡방 1', 25], ['단톡방 2', 70], ['단톡방 3', 160], ['다른 앱', 300]];
    const SITU = [
      { id: 's1', text: '탈의실·화장실 안을 찍는다', to: '하면 안 됨' }, { id: 's2', text: '잠든 친구 얼굴을 몰래 찍어 올린다', to: '하면 안 됨' },
      { id: 's3', text: '친구 몸의 한 부분만 몰래 찍는다', to: '하면 안 됨' }, { id: 's4', text: '단체 사진을 반 SNS에 올린다', to: '동의를 물어야 함' },
      { id: 's5', text: '친구 얼굴이 나온 사진을 내 SNS에 올린다', to: '동의를 물어야 함' }, { id: 's6', text: '내 필통 사진을 찍는다', to: '괜찮음' },
      { id: 's7', text: '사람이 없는 운동장 풍경을 찍는다', to: '괜찮음' },
    ];
    const SITU_SLOTS = ['하면 안 됨', '동의를 물어야 함', '괜찮음'];
    // 몸 사진 요구 갈림길(깊이 3) — 요구한 쪽의 잘못을 분명히 한다
    const D1 = { text: '서윤은 온라인 게임에서 몇 주째 함께 게임하며 친해진 사람에게서 "우리 친하잖아, 몸 사진 한 장만 보내 줘"라는 메시지를 받는다.', ask: '서윤은 어떻게 할까?', motif: 'house', choices: [
      { id: 'send', text: '친하니까 한 장쯤은 괜찮겠지 하고 보낸다', result: '상대가 곧바로 사진을 더 보내라고 한다.', impact: [{ who: '서윤', text: '불안해진다', tone: -1 }], why: '사진을 요구하는 것 자체가 잘못이에요. 친해도 몸 사진은 보내지 않고 알려요.', end: '상대의 요구가 더 커졌어요.',
        next: { text: '상대가 "안 보내면 보낸 사진을 퍼뜨린다"고 겁을 준다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'obey', text: '무서워서 시키는 대로 더 보낸다', result: '요구가 멈추지 않고 점점 커진다.', impact: [{ who: '서윤', text: '더 큰 피해로 이어진다', tone: -1 }], why: '협박에 따르면 요구가 멈추지 않아요. 혼자 감당하지 말고 알려요.', end: '요구가 계속 커졌어요.',
            next: { text: '서윤은 혼자 견디기 너무 힘들다.', choices: [
              { id: 'tellL', text: '대화 기록을 지우지 않고 보호자와 선생님께 알린다', result: '어른들이 함께 신고와 삭제 요청을 돕는다.', impact: [{ who: '서윤', text: '보호받기 시작한다', tone: 1 }], ending: '늦었어도 알려서 도움을 받았어요.' },
              { id: 'hide', text: '내 잘못이라 여기고 아무에게도 말하지 않는다', result: '피해가 혼자에게 쌓인다.', impact: [{ who: '서윤', text: '더 고립된다', tone: -1 }], why: '서윤의 잘못이 아니에요. 요구하고 협박한 사람의 잘못이에요.' }] } },
          { id: 'tellNow', text: '대화 기록을 남기고 바로 보호자·선생님께 알린다', result: '어른들이 신고와 삭제 요청을 함께 돕는다.', impact: [{ who: '서윤', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '협박을 받자 바로 알려 도움을 받았어요.' }] } },
      { id: 'block', text: '"싫어"라고 답하고 그 사람을 차단한다', result: '상대가 다른 계정으로 또 연락해 온다.', impact: [{ who: '서윤', text: '거절했지만 아직 불안하다', tone: 0 }], end: '거절하고 차단했어요.',
        next: { text: '새 계정으로 "한 번만, 아무도 몰라"라는 메시지가 온다.', ask: '어떻게 할까?', choices: [
          { id: 'record', text: '화면을 남기고 보호자·선생님께 알린다', result: '어른들이 신고를 돕고 계정 설정을 함께 바꾼다.', impact: [{ who: '서윤', text: '보호받는다', tone: 1 }], end: '거절에 이어 어른에게 알렸어요.',
            next: { text: '선생님이 "말해 줘서 고마워"라고 한다. 서윤은 그래도 마음이 무겁다.', choices: [
              { id: 'notme', text: '"요구한 사람이 잘못한 거야"라는 말을 떠올린다', result: '서윤의 마음이 조금 가벼워진다.', impact: [{ who: '서윤', text: '자기를 탓하지 않는다', tone: 1 }], ending: '잘못은 요구한 사람에게 있다는 것을 알았어요.' },
              { id: 'selfblame', text: '"내가 게임에서 친하게 지낸 탓"이라고 생각한다', result: '서윤이 자신을 탓하며 위축된다.', impact: [{ who: '서윤', text: '마음이 무거워진다', tone: -1 }], why: '친하게 지낸 것은 잘못이 아니에요. 사진을 요구한 사람의 잘못이에요.' }] } },
          { id: 'reply', text: '혼자 상대와 말다툼하며 따진다', result: '상대가 말을 바꾸며 계속 대화를 끈다.', impact: [{ who: '서윤', text: '지친다', tone: -1 }], why: '혼자 상대하지 말고 기록을 남겨 어른에게 알려요.' }] } },
      { id: 'tellFirst', text: '답하지 않고 보호자·선생님께 메시지를 보여 준다', result: '어른과 함께 기록을 남기고 신고·차단한다.', impact: [{ who: '서윤', text: '안전하게 지켜진다', tone: 1 }], ending: '처음부터 어른에게 알려 안전하게 대응했어요.' }] };
    const R1 = [{ id: 'r1', text: '잘못은 사진을 요구한 사람에게 있다' }, { id: 'r2', text: '요구를 받으면 혼자 감당하지 않고 어른에게 알린다' },
      { id: 'r3', text: '사진을 보낸 사람도 잘못이다', why: '보낸 사람은 피해를 입은 쪽이에요. 잘못은 요구하고 협박한 사람에게 있어요.' }, { id: 'r4', text: '친한 사람이면 보내도 괜찮다', why: '친한 사이라며 몸 사진을 요구하는 것이 위험 신호예요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '알린 길에서는 어른과 함께 신고·삭제를 도왔다' }, { id: 'r6', text: '혼자 견딘 길에서는 요구가 점점 커졌다' }], ok: ['r5', 'r6'] };
    const R1X = { reasons: [{ id: 'r7', text: '알릴 때 대화 기록(화면)을 지우지 않고 남긴다' }], ok: ['r7'] };
    const STAR4 = '칸마다 대응 단계가 있어요: ① 퍼뜨리지 않기 ② 보관하지 않기 ③ 어른에게 알리기 ④ 삭제·신고 요청 → 안전';

    ALL.push(
      // ---- 도입 ----
      M('intro.share-chain', {
        title: '사진 한 장이 퍼지는 경로 그래프', method: '가상 사진이 퍼지는 꺾은선그래프 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '세 단계(찍은 사람·단톡방 1·단톡방 2)만 짚으며 본 사람이 늘어난 것을 읽는다.', base: '다섯 단계 꺾은선에서 처음 100명을 넘은 때를 고르고 늘어나는 모양을 읽는다.', challenge: '퍼짐을 멈출 수 있었던 지점을 짝에게 근거와 함께 말한다.' },
        intro: {
          teacher: '"사진 한 장이 단톡방 세 곳을 거치면 몇 명이 보게 될까요?" 가상 사진이 퍼진 꺾은선그래프를 띄우고 시연 단추로 처음 100명을 넘은 \'단톡방 3\'을 고르는 모습을 보인다. "나중에 지우면 된다"는 말이 나오면 "300명의 휴대폰에 저장된 사진을 한 사람이 다 지울 수 있을까요?"라고 되묻는다. 퍼짐은 \'찍은 사람\'에서 끝나지 않고 전달한 사람마다 이어진다는 점을 짚는다. 자료는 수업용 가상 자료다.',
          student: '가상 사진 한 장이 단톡방을 거치며 몇 명에게 퍼지는지 꺾은선그래프로 읽고, 퍼진 뒤 되돌리기 어려운 까닭을 생각해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '가상 사진 한 장 — 본 사람 수', unit: '명', xLabel: '단계', yLabel: '본 사람(명)', data: SPREAD, question: '본 사람이 처음 100명을 넘은 때는?', choices: SPREAD.map((r) => r[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut phone in the center with one paper photo multiplying into many small paper photos flying toward other phones', banner: '한 번 퍼지면', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 모두 가상이다. ' + SAFE_NOTE,
      }),
      M('intro.situation-sort', {
        title: '찍기 전 물어야 할 장면 고르기', method: '촬영 장면을 하면 안 됨·동의·괜찮음으로 나누기', tool: 'sortboard', minutes: 7,
        levels: { easy: '시연 판의 장면 4장(탈의실·잠든 친구·단체 사진·필통)만 교사와 함께 나눈다.', base: '장면 7장을 세 바구니에 나누는 시연을 보고 장면마다 까닭을 말한다.', challenge: '같은 장면이라도 판단이 바뀌는 조건(예: 단체 사진에서 한 명이 싫다고 할 때)을 짝에게 말한다.' },
        intro: {
          teacher: '"찍어도 되는 사진, 물어야 하는 사진, 찍으면 안 되는 사진은 무엇이 다를까요?" 장면 카드 7장을 띄우고 시연 단추로 세 바구니에 나뉘는 모습을 보인다. "잠든 친구 사진은 장난이니까 괜찮다"는 말이 나오면 "잠든 친구는 \'싫어\'라고 말할 수 있을까요?"라고 되묻는다. 몸이나 옷 갈아입는 곳을 찍는 일은 동의를 물을 일이 아니라 하면 안 되는 일이라는 점을 짚는다.',
          student: '촬영 장면 카드를 \'하면 안 됨·동의를 물어야 함·괜찮음\' 바구니에 나누고, 무엇이 판단을 가르는지 생각해요.',
          demo: { tool: 'sortboard', options: { slots: SITU_SLOTS, cards: strip(SITU) }, sequence: [{ sort: { '하면 안 됨': ['s1', 's2', 's3'], '동의를 물어야 함': ['s4', 's5'], 괜찮음: ['s6', 's7'] } }] },
          art: { draw: 'a paper-cut phone camera facing three paper baskets on a shelf, labeled with a stop sign, a question mark and a check mark', banner: '찍기 전에 멈추고 묻기', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.request-dilemma', {
        title: '몸 사진 요구 메시지 갈림길', method: '몸 사진 요구 메시지에 대응하는 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 서윤에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길과 견주는 근거와 함께, 알릴 때 남겨야 할 증거(대화 기록) 근거까지 고른다.' },
        activity: {
          title: '몸 사진 요구 메시지 갈림길', tool: 'dilemma',
          teacher: '"사진을 보낸 서윤과 사진을 요구한 사람, 잘못은 누구에게 있을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "보낸 사람도 잘못"이라는 말이 나오면 "몇 주 동안 친한 척하며 요구한 사람과, 믿었던 서윤 가운데 누가 상대를 속였나요?"라고 되묻는다. 보낸 뒤라도 알리면 도움을 받을 수 있고, 협박을 받으면 대화 기록을 지우지 않는다는 점을 끝에 짚는다. 학생에게 이런 메시지를 받은 적이 있는지 묻지 않는다.',
          task: '가상 인물 서윤이 온라인에서 몸 사진 요구 메시지를 받은 장면에서 길을 골라 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '서윤이 몸 사진 요구를 받았어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '서윤이 몸 사진 요구를 받았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 견주는 근거와 증거를 남기는 근거까지 고르세요.' },
              '서윤이 받은 메시지', D1, [['block', 'record', 'notme'], ['send', 'tellNow'], ['tellFirst']], R1, ['r1', 'r2'], { reasons: [...R1C.reasons, ...R1X.reasons], ok: [...R1C.ok, ...R1X.ok] }),
            IT({ prompt: '친구가 같은 메시지를 받았다고 털어놓는 장면을 따라가세요.', toolOptions: { title: '친구가 털어놓을 때', scene: { text: '같은 반 친구가 "나 이상한 사람한테 사진 보내 버렸어, 어떡해"라고 울먹인다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'support', text: '"네 잘못 아니야. 같이 선생님께 말하자"라고 한다', result: '친구가 조금 진정하고 함께 상담실로 간다.', impact: [{ who: '친구', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '탓하지 않고 함께 도움을 찾았어요.' },
              { id: 'scold', text: '"그걸 왜 보냈어?"라고 다그친다', result: '친구가 더 울며 입을 닫는다.', impact: [{ who: '친구', text: '자기를 탓한다', tone: -1 }], why: '다그치는 말은 피해자 탓이 돼요. 잘못은 요구한 사람에게 있어요.' }] }, reasons: [{ id: 'q1', text: '피해를 말한 친구를 탓하지 않는다' }, { id: 'q2', text: '보낸 친구가 조심했어야 한다', why: '이 말은 피해자 탓이에요. 요구한 사람이 잘못했어요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['support']], reasons: ['q1'] } },
              { prompt: '친구가 털어놓는 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '알리기 전에 남길 것을 고르는 장면을 따라가세요.', toolOptions: { title: '알리기 전에', scene: { text: '서윤은 선생님께 알리기로 했다. 그 전에 휴대폰에 남은 대화를 어떻게 할지 고민한다.', ask: '대화 기록을 어떻게 할까?', motif: 'house', choices: [
              { id: 'keep', text: '지우지 않고 그대로 두었다가 선생님께 보여 준다', result: '선생님이 기록을 보고 신고를 돕는다.', impact: [{ who: '서윤', text: '도움이 빨라진다', tone: 1 }], ending: '기록을 남겨 도움을 받기 쉬웠어요.' },
              { id: 'delete', text: '부끄러워서 대화를 모두 지운다', result: '무슨 일이 있었는지 보여 줄 기록이 사라진다.', impact: [{ who: '서윤', text: '도움이 늦어질 수 있다', tone: -1 }], why: '부끄러워할 일이 아니에요. 기록은 서윤을 지키는 데 쓰여요.' },
              { id: 'share', text: '친구들에게 대화 화면을 돌려 보여 준다', result: '서윤의 일이 반에 퍼진다.', impact: [{ who: '서윤', text: '또 다른 상처를 입는다', tone: -1 }], why: '기록은 도와줄 어른에게만 보여 줘요.' }] }, reasons: [{ id: 'k1', text: '기록은 지우지 않고 도와줄 어른에게만 보여 준다' }, { id: 'k2', text: '기록을 지우면 없던 일이 된다', why: '지워도 상대에게는 남아 있어요. 기록은 나를 지키는 데 써요.' }], compare: false },
              target: { path: [['keep']], reasons: ['k1'] },
              conclude: '몸 사진 요구는 디지털 성폭력이 될 수 있고, 잘못은 요구한 사람에게 있어요. 보내지 말고, 보냈더라도 기록을 남겨 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '온라인에서 몸 사진 요구를 받았을 때 가장 알맞은 행동은?', options: ['친한 사람이면 한 장만 보낸다', '보내지 않고 기록을 남겨 보호자·선생님께 알린다', '혼자 상대와 따진다'], answer: '보내지 않고 기록을 남겨 보호자·선생님께 알린다' }] },
        notes: '학생에게 이런 메시지를 받았는지 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('act.response-flow', {
        title: '사진이 퍼졌을 때 대응 순서', method: '대응 단계 칸을 지나 안전 칸에 닿는 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '대응 단계 칸 두 개를 지나 안전 칸에 닿는 블록 3개를 짠다.', base: '대응 단계 칸(별)을 모두 지나고 \'다시 퍼뜨리기\' 바위를 피해 안전 칸에 닿게 블록을 짠다.', challenge: '셋째 문항에서 잘못 놓인 블록 하나만 고쳐 안전 칸에 닿게 한다.' },
        activity: {
          title: '사진이 퍼졌을 때 대응 순서', tool: 'block-coding',
          teacher: '"친구 사진이 단톡방에 올라왔을 때, 첫 칸은 무엇일까요? 퍼뜨리지 않기, 그다음은?" 판의 칸마다 대응 단계가 있다고 말하고, 거북이가 단계를 차례로 지나 \'안전\' 칸에 닿게 한다. "증거로 내 휴대폰에 저장해 두면 된다"는 학생에게 "저장해 둔 사진이 또 다른 곳으로 퍼질 수 있다면요? 기록은 어른과 함께 남겨요"라고 되묻는다. 판에는 글이 찍히지 않으니 단계 이름을 칠판에 적어 두고 활동지에 차례를 옮겨 쓰게 한다.',
          task: '친구 사진이 퍼졌을 때의 대응 단계(퍼뜨리지 않기 → 보관하지 않기 → 어른에게 알리기 → 삭제·신고 요청) 칸을 차례로 지나 거북이가 안전 칸에 닿게 블록을 짜요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: `대응 단계 칸(별)을 모두 지나 안전 칸(깃발)에 닿게 블록을 짜세요. ${STAR4}`, toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, stars: [[1, 1], [2, 1], [3, 1]] }, target: { reach: true, stars: true } },
              { prompt: '대응 단계 칸(별) 두 개를 지나 안전 칸(깃발)에 닿게 블록 3개를 짜세요.', toolOptions: { cols: 4, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 1], [2, 1]], maxBlocks: 3 }, target: { reach: true, stars: true } }),
            IT({ prompt: '\'다시 퍼뜨리기\'·\'저장해 두기\' 바위를 피해 대응 단계 칸(별)을 모두 지나 안전 칸에 닿게 하세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 2], [2, 1]], stars: [[1, 2], [1, 0], [3, 0]] }, target: { reach: true, stars: true } },
              { prompt: '\'다시 퍼뜨리기\' 바위를 피해 안전 칸에 닿게 하세요.', toolOptions: { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 0 }, rocks: [[2, 1]], maxBlocks: 6 }, target: { reach: true } }),
            IT({ prompt: '친구가 짠 대응 순서가 엉뚱한 쪽으로 가요. 블록을 고쳐 안전 칸에 닿게 하세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 } }, state: { program: ['fwd', 'left', 'fwd', 'fwd'] }, target: { reach: true } },
              null,
              { prompt: '친구가 짠 대응 순서에서 잘못 놓인 블록 하나만 고쳐 안전 칸에 닿게 하세요.', target: { reach: true, maxEdits: 1, from: ['fwd', 'left', 'fwd', 'fwd'] } }),
            IT({ prompt: '이 순서대로 가면 거북이는 어디서 멈출까요? 멈출 칸을 고르세요. (프로그램: 앞으로 2칸 → 오른쪽으로 돌기 → 앞으로 1칸)', toolOptions: { mode: 'trace', cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, program: ['fwd', 'fwd', 'right', 'fwd'] }, target: { end: { x: 2, y: 1 } } },
              null, null,
              { conclude: '사진이 퍼졌을 때는 퍼뜨리지 않기 → 보관하지 않기 → 어른에게 알리기 → 삭제·신고 요청 차례로 대응해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사진이 퍼졌을 때 대응 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '퍼뜨리지 않기, 보관하지 않기, 어른에게 알리기, 삭제·신고 요청' }] },
        notes: '거북이 판에는 칸 이름을 쓸 수 없어 대응 단계는 문항 글·칠판·활동지로 짚는다. ' + SAFE_NOTE,
      }),
      M('act.peer-message', {
        title: '친구에게 보내는 멈춤 메시지', method: '사진을 돌리려는 친구에게 멈춤 메시지 쓰기', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 틀을 채워 멈춤 메시지를 두 문장으로 쓰고 기준 2개를 점검한다.', base: '3~4문장 메시지를 쓰고 기준표 3항목(분명함·피해자 존중·대안 제시)으로 점검한다.', challenge: '넷째 문항에서 친구가 "다들 봤는데"라고 할 때의 답을 두 문장으로 쓴다.' },
        activity: {
          title: '친구에게 보내는 멈춤 메시지', tool: 'rubric-writing',
          teacher: '"친구가 \'이 사진 웃기지? 다른 방에도 올릴까?\'라고 할 때, 첫 문장을 어떻게 쓰면 멈출까요?" 흐린 말("음… 좀 그런가?")과 분명한 말("올리지 마, 그건 ○○에게 상처야")을 견주어 읽고 쓰게 한다. "친구 사이가 어색해질까 봐 못 말린다"는 학생에게 "사진 속 친구와 올리려는 친구, 지금 누구의 마음이 더 위험할까요?"라고 되묻는다. 메시지에는 사진 속 친구를 비웃는 말이나 실제 이름을 쓰지 않게 한다.',
          task: '사진 속 친구의 사진을 다른 방에 돌리려는 가상 친구 태오에게 보낼 멈춤 메시지를 쓰고, 분명함·피해자 존중·대안 제시를 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 문장: 태오에게 사진을 올리지 말라고 분명하게 쓰세요.', toolOptions: { topic: '가상 친구 태오가 "이 사진 다른 방에도 올릴까?"라고 했어요. 올리지 말라는 첫 문장을 분명하게 쓰세요.', minChars: 12, maxChars: 100, minSentences: 1, maxSentences: 2, title: '멈춤 메시지 ① 분명하게' }, target: { selfCheck: ['멈추라는 뜻이 분명하다', '사진 속 친구를 비웃는 말이 없다', '실제 이름을 쓰지 않았다'] } },
              { prompt: '문장 틀을 채워 첫 문장을 쓰세요.', toolOptions: { starter: '태오야, 그 사진은 ___ 마.' }, target: { selfCheck: ['멈추라는 뜻이 분명하다', '실제 이름을 쓰지 않았다'] } }),
            IT({ prompt: '둘째 문장: 사진 속 친구의 입장을 생각하게 하는 문장을 쓰세요.', toolOptions: { topic: '사진 속 친구가 이 사진이 퍼진 것을 알면 어떤 마음일지 태오가 생각해 보게 하는 문장을 한두 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '멈춤 메시지 ② 피해자 존중' }, target: { selfCheck: ['사진 속 친구의 마음을 썼다', '사진 속 친구를 탓하지 않았다'] } },
              { prompt: '문장 틀을 채워 사진 속 친구의 마음을 쓰세요.', toolOptions: { starter: '사진 속 친구가 보면 ___ 할 거야.' }, target: { selfCheck: ['사진 속 친구의 마음을 썼다'] } }),
            IT({ prompt: '멈춤 메시지 전체를 3~4문장으로 완성하세요(대안 넣기).', toolOptions: { topic: '앞의 두 문장에 "대신 이렇게 하자"는 대안(사진 지우기·올린 사람에게 내리자고 하기·선생님께 알리기)을 넣어 메시지 전체를 3~4문장으로 완성하세요.', minChars: 50, maxChars: 240, minSentences: 3, maxSentences: 4, title: '멈춤 메시지 완성' }, target: { selfCheck: ['멈추라는 뜻이 분명하다', '사진 속 친구를 존중했다', '대신 할 행동을 제안했다'], mustInclude: [['대신', '지우', '알리']] } },
              { prompt: '두 문장을 이어 멈춤 메시지를 완성하세요.', toolOptions: { minChars: 25, minSentences: 2, starter: '그 사진 올리지 마. 대신 ___ 하자.' }, target: { selfCheck: ['멈추라는 뜻이 분명하다', '대신 할 행동을 제안했다'], mustInclude: [['대신', '지우', '알리']] } }),
            IT({ prompt: '가상 메시지 "음… 올려도 되나? 너 알아서 해"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 보낸 메시지: "음… 올려도 되나? 너 알아서 해." 기준표(분명함·피해자 존중·대안)로 읽고 두 문장으로 고쳐 쓰세요.', minChars: 25, maxChars: 150, minSentences: 2, maxSentences: 3, title: '흐린 메시지 고치기' }, target: { selfCheck: ['흐린 말을 분명하게 고쳤다', '대안을 넣었다', '메시지를 쓴 친구를 탓하지 않았다'] } },
              null,
              { prompt: '태오가 "다들 이미 봤는데 뭐 어때"라고 답했어요. 이 말에 답하는 두 문장을 쓰세요.', toolOptions: { topic: '태오의 답: "다들 이미 봤는데 뭐 어때." 이 말에 답하는 두 문장을 쓰세요. 더 퍼뜨리지 않는 까닭과 할 일을 넣어요.', minChars: 25, maxChars: 150, minSentences: 2, maxSentences: 3, title: '"다들 봤는데"에 답하기' }, target: { selfCheck: ['많이 봤어도 더 퍼뜨리면 안 되는 까닭을 썼다', '할 일을 제안했다', '태오를 비난만 하지 않았다'] } },
              { conclude: '멈춤 메시지는 분명하게 말하고, 사진 속 친구를 존중하며, 대신 할 행동을 함께 제안해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 다른 친구 사진을 돌리려 할 때 보낼 메시지로 알맞은 것은?', options: ['"나한테도 보내 줘"', '"그건 퍼뜨리면 안 돼. 지우고 멈추자"', '"찍힌 애가 조심했어야지"'], answer: '"그건 퍼뜨리면 안 돼. 지우고 멈추자"' }, { type: 'short', prompt: '사진을 돌리려는 친구에게 보낼 멈춤 메시지의 첫 문장을 써요(실제 이름 없이).' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.three-nos', {
        title: '"찍지 않기·보내지 않기·퍼뜨리지 않기" 포스터', method: '세 가지 약속을 담은 포스터 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '포스터 구성(세 약속을 세 칸으로)을 고르는 둘째 출구 질문에 답하고 그림을 꾸민다.', base: '포스터를 꾸미고 세 약속 문구를 직접 쓴다(셋째 출구 질문).', challenge: '약속을 어긴 장면을 본 사람이 할 행동을 넷째 출구 질문에 함께 쓴다.' },
        wrap: {
          teacher: '"세 약속 가운데 \'퍼뜨리지 않기\'는 찍은 사람만 지키면 될까요?" 포스터 그림은 콜라주 판에 꾸미고 문구는 출구 질문과 활동지에 쓴다. "나는 찍지만 않으면 된다"는 학생에게 "받은 사진을 다른 방에 전달하는 것도 퍼뜨리는 일일까요?"라고 되묻는다. 포스터에 실제 사진이나 친구 이름을 쓰지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '세 약속을 담을 포스터 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['세 약속이 들어갈 자리를 나눴다', '실제 사진·이름을 넣지 않았다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '"퍼뜨리지 않기" 약속에 들어가는 행동은?', options: ['받은 사진을 다른 단톡방에 전달하지 않는다', '내 사진만 조심한다', '웃긴 사진은 친한 친구에게만 보낸다'], answer: 0, difficulty: 0.15, explain: '받은 사진을 전달하는 것도 퍼뜨리는 일이에요.' },
            { type: 'short', prompt: '포스터에 넣을 세 약속 문구를 써요.' },
            { type: 'short', prompt: '약속을 어긴 장면을 본 사람이 할 행동을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '찍지 않기·보내지 않기·퍼뜨리지 않기',
          items: [
            { type: 'table', prompt: '세 약속마다 지킬 행동을 써요.', columns: ['약속', '지킬 행동'], cells: [['찍지 않기', ''], ['보내지 않기', ''], ['퍼뜨리지 않기', '']], answer: '(예) 동의 없이 찍지 않기, 몸 사진 요구에 보내지 않기, 받은 사진 전달하지 않기' },
            { type: 'short', prompt: '약속을 어긴 장면을 보면 할 행동을 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 문구는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
      M('wrap.help-steps-check', {
        title: '도움 요청 스스로 점검', method: '알릴 사람·순서 앎 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 항목 3개에 표시한다.', base: '점검 항목 5개(지역 상담 번호 칸 확인 포함)에 표시한다.', challenge: '친구에게 알려 줄 문장을 셋째 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"사진 문제로 도움이 필요할 때, 누구에게 먼저 알릴지 떠오르나요?" 점검은 겪은 일이 아니라 아는 것과 할 수 있는 것을 표시한다고 먼저 말한다. "알리면 일이 더 커진다"는 걱정이 나오면 "알린 사람의 이야기는 꼭 필요한 사람만 알도록 지켜 주는 것이 어른의 일이에요"라고 짚는다. 지역 상담 번호 칸은 학교가 확인해 넣은 번호를 함께 읽는다.',
          exitTicket: [
            IT(SELF('아는 것과 할 수 있는 것에 스스로 표시해요.', '도움 요청 스스로 점검', ['누구에게 알릴지(보호자·담임·상담 선생님) 안다', '대화 기록을 지우지 않고 남겨야 한다는 것을 안다', '받은 사진을 퍼뜨리지 않을 수 있다', '잘못은 요구하거나 퍼뜨린 사람에게 있다는 것을 안다', '지역 상담 번호 칸을 확인했다']),
              { prompt: '아는 것과 할 수 있는 것에 스스로 표시해요(3개).', target: { selfCheck: ['누구에게 알릴지(보호자·담임·상담 선생님) 안다', '받은 사진을 퍼뜨리지 않을 수 있다', '잘못은 요구하거나 퍼뜨린 사람에게 있다는 것을 안다'] } }),
            { type: 'choice', prompt: '내 사진이 동의 없이 퍼진 것을 알았을 때 가장 먼저 할 일로 알맞은 것은?', options: ['부끄러우니 혼자 참는다', '기록을 남기고 믿는 어른에게 알린다', '똑같이 상대 사진을 퍼뜨린다'], answer: 1, difficulty: 0.2, explain: '혼자 참지 말고 기록을 남겨 어른에게 알리면 삭제·신고를 도울 수 있어요.' },
            { type: 'short', prompt: '사진 문제로 고민하는 친구에게 알려 줄 문장을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '도움 요청 점검',
          items: [
            { type: 'short', prompt: '사진 문제로 도움이 필요할 때 알릴 사람을 두 명(예: 보호자·담임 선생님) 써요.' },
            { type: 'short', prompt: `학교가 알려 준 지역 상담 번호를 옮겨 써요. ${LOCAL}` },
          ],
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 09-g8-healthy-dating.js ====
  // ==== 8학년 · 우정·호감·사랑과 건강한 교제 (gender.m.g8-healthy-dating) ====
  {
    const M = MK('g8-healthy-dating', [8]);
    const EXPECT = [['친구·함께 시간', 60], ['연인·함께 시간', 75], ['친구·응원', 70], ['연인·응원', 80], ['친구·모든 비밀', 20], ['연인·모든 비밀', 45], ['친구·바로 답장', 15], ['연인·바로 답장', 40]];
    const LYRIC = [
      { id: 'l1', text: '네가 웃으면 나도 하루가 좋아', to: '존중하는 사랑' }, { id: 'l2', text: '네 꿈을 옆에서 응원할게', to: '존중하는 사랑' },
      { id: 'l3', text: '혼자 있고 싶을 땐 기다릴게', to: '존중하는 사랑' }, { id: 'l4', text: '내 눈에만 보여야 해', to: '통제하는 사랑' },
      { id: 'l5', text: '누구랑 있는지 하나도 빼지 말고 말해', to: '통제하는 사랑' }, { id: 'l6', text: '네 휴대폰은 곧 내 것', to: '통제하는 사랑' },
    ];
    const LYRIC_SLOTS = ['존중하는 사랑', '통제하는 사랑'];
    const SIGN = ['존중 신호', '위험 신호'];
    const COUPLE_A = [
      { id: 'a1', text: '월: 시험 기간이라 연락을 줄이자고 하자 "응원할게"라고 한다', to: '존중 신호' }, { id: 'a2', text: '수: 서로 친구들과 노는 날을 따로 둔다', to: '존중 신호' },
      { id: 'a3', text: '금: 손잡기 전에 "괜찮아?"라고 묻는다', to: '존중 신호' }, { id: 'a4', text: '일: 의견이 다를 때 서로 말을 끝까지 듣는다', to: '존중 신호' },
      { id: 'a5', text: '토: 영화 고르기를 번갈아 정한다', to: '존중 신호' }, { id: 'a6', text: '화: 서운한 점을 "나는 ~해서 서운했어"라고 말한다', to: '존중 신호' },
    ];
    const COUPLE_B = [
      { id: 'b1', text: '월: 답장이 늦으면 "왜 무시해"라며 화를 낸다', to: '위험 신호' }, { id: 'b2', text: '수: 다른 친구와 놀지 말라고 한다', to: '위험 신호' },
      { id: 'b3', text: '금: 휴대폰 비밀번호를 알려 달라고 조른다', to: '위험 신호' }, { id: 'b4', text: '일: 같이 숙제할 시간을 정해 서로 지킨다', to: '존중 신호' },
      { id: 'b5', text: '토: 어디 있는지 사진으로 찍어 보내라고 한다', to: '위험 신호' }, { id: 'b6', text: '화: 생일 선물을 고르며 상대 취향을 묻는다', to: '존중 신호' },
    ];
    const H = (h, m) => ({ h, m });

    ALL.push(
      // ---- 도입 ----
      M('intro.feeling-scale', {
        title: '관계마다 기대하는 것 그래프', method: '가상 설문 그래프로 관계마다 다른 기대 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '항목 2개(함께 시간·응원)의 친구·연인 막대 넷만 견주어 읽는다.', base: '항목 4개(함께 시간·응원·모든 비밀·바로 답장)의 막대 여덟 개에서 친구와 연인의 차이가 가장 큰 항목을 고른다.', challenge: '설문으로 알 수 없는 사람마다의 차이를 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"친구에게 바라는 것과 연인에게 바라는 것, 무엇이 가장 다를까요?" 가상 중2 설문 막대그래프를 띄우고 시연 단추로 차이가 가장 큰 \'모든 비밀\'을 고르는 모습을 보인다. "사귀면 모든 것을 공유해야 한다"는 말이 나오면 "연인 사이에도 나만의 친구·비밀·시간이 있다면 무엇이 문제일까요?"라고 되묻는다. 자료는 수업용 가상 설문이고, 내 연애나 관계를 말하지 않아도 된다고 먼저 밝힌다.',
          student: '가상 설문 그래프에서 친구와 연인에게 기대하는 것(함께 시간·응원·모든 비밀·바로 답장)이 어떻게 다른지 읽어요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 중2 설문 — 친구·연인에게 바라는 것(%)', unit: '%', xLabel: '관계·바라는 것', yLabel: '그렇다(%)', data: EXPECT, question: '친구와 연인의 차이가 가장 큰 항목은?', choices: ['함께 시간', '응원', '모든 비밀', '바로 답장'] }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut bar chart with pairs of paper bars, beside two small paper figures holding hands and two friends giving a high five', banner: '관계마다 다른 기대', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 교구는 계열 하나만 그려 친구·연인 막대를 나란히 두었다. 값은 모두 가상이다. 학생 자신의 연애·관계를 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.song-lyrics', {
        title: '노래 가사 속 사랑의 모습', method: '가상 가사 구절을 존중·통제로 나누기', tool: 'wordcards', minutes: 7,
        levels: { easy: '시연 판의 구절 4장(웃으면 좋아·응원할게·내 눈에만·휴대폰은 내 것)만 교사와 함께 나눈다.', base: '구절 6장이 존중하는 사랑과 통제하는 사랑으로 나뉘는 시연을 보고 까닭을 말한다.', challenge: '통제하는 구절 하나를 존중하는 구절로 바꾸어 짝에게 말한다.' },
        intro: {
          teacher: '"\'내 눈에만 보여야 해\', 노래로 들으면 달콤한데 실제로 들으면 어떨까요?" 가상 노래 가사 구절 6장을 띄우고 시연 단추로 존중과 통제로 나뉘는 모습을 보인다. "질투하는 가사는 사랑이 깊다는 뜻"이라는 말이 나오면 "상대가 누구를 만날지까지 정해 준다면 그건 마음일까요, 통제일까요?"라고 되묻는다. 가사는 모두 수업용으로 지은 가상 가사다.',
          student: '가상 노래 가사 구절을 \'존중하는 사랑\'과 \'통제하는 사랑\'으로 나누고, 둘을 가르는 것이 무엇인지 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: LYRIC_SLOTS, cards: strip(LYRIC) }, sequence: [{ sort: { '존중하는 사랑': ['l1', 'l2', 'l3'], '통제하는 사랑': ['l4', 'l5', 'l6'] } }] },
          art: { draw: 'a paper-cut music note and a heart on a paper stage, with lyric strips floating into two paper baskets', banner: '노래 속 사랑, 존중일까 통제일까', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 노래 가사를 쓰지 않고 수업용 가상 가사를 쓴다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.green-red', {
        title: '건강한 교제·해로운 교제 사례', method: '가상 커플 두 쌍의 일주일 장면에서 신호 가르기', tool: 'story', minutes: 16,
        levels: { easy: '커플마다 장면 카드 4장을 \'존중 신호\'·\'위험 신호\'에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '커플마다 장면 카드 6장을 나누고(바로 알림 없음), 셋째 문항에서 위험 신호와 그 결과를 짝짓는다.', challenge: '셋째 문항에서 위험 신호가 생긴 까닭 카드까지 더해 짝짓는다(함정 카드 포함).' },
        activity: {
          title: '건강한 교제·해로운 교제 사례', tool: 'story',
          teacher: '"두 커플 모두 서로 좋아해요. 그런데 일주일을 보면 무엇이 다를까요?" 가상 커플 하람·지오와 유나·태오의 일주일 장면 카드를 하나씩 읽고 나누게 한다. "답장이 늦어서 화내는 건 그만큼 좋아해서"라는 학생에게 "그 화 때문에 상대가 친구와 있을 때도 휴대폰만 본다면 관계가 건강할까요?"라고 되묻는다. 한 커플 안에도 존중 신호와 위험 신호가 섞일 수 있고, 위험 신호가 되풀이되면 믿는 어른과 이야기한다는 점을 짚는다.',
          task: '가상 커플 두 쌍의 일주일 장면 카드를 \'존중 신호\'와 \'위험 신호\'로 나누고, 위험 신호가 이어지면 어떻게 되는지 살펴요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('하람·지오 커플의 일주일 장면을 두 신호 칸에 나누세요.', SIGN, COUPLE_A, { title: '하람·지오의 일주일' }),
              SB('하람·지오 커플의 장면 4장을 두 신호 칸에 나누세요.', SIGN, pickCards(COUPLE_A, ['a1', 'a2', 'a3', 'a4']), { title: '하람·지오의 일주일' })),
            IT(SB('유나·태오 커플의 일주일 장면을 두 신호 칸에 나누세요.', SIGN, COUPLE_B, { title: '유나·태오의 일주일' }),
              SB('유나·태오 커플의 장면 4장을 두 신호 칸에 나누세요.', SIGN, pickCards(COUPLE_B, ['b1', 'b2', 'b3', 'b4']), { title: '유나·태오의 일주일' })),
            IT(MB('유나·태오 커플의 위험 신호와 이어질 수 있는 결과를 짝지으세요.', [['답장이 늦으면 화를 냄', '친구와 있을 때도 휴대폰만 본다'], ['다른 친구와 놀지 말라고 함', '친구들과 점점 멀어진다'], ['휴대폰 비밀번호를 조름', '내 사생활이 사라진다']], ['서로 더 믿게 된다'], { title: '위험 신호가 이어지면' }),
              null,
              MB('위험 신호와 결과, 그 신호가 생긴 까닭까지 짝지으세요.', [['답장이 늦으면 화를 냄', '친구와 있을 때도 휴대폰만 본다'], ['다른 친구와 놀지 말라고 함', '친구들과 점점 멀어진다'], ['휴대폰 비밀번호를 조름', '내 사생활이 사라진다'], ['위험 신호가 생긴 까닭', '사랑을 상대를 가지는 것으로 여긴다']], ['서로 더 믿게 된다', '상대가 잘못해서 생긴다'], { title: '위험 신호가 이어지면' }),
              { conclude: '건강한 교제는 서로의 시간·친구·마음을 존중하고, 위험 신호(연락 강요·만남 막기·휴대폰 요구)가 되풀이되면 믿는 어른과 이야기해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '유나·태오 커플에서 찾은 위험 신호 하나를 존중 신호로 바꾸어 한 문장으로 써요.' }] },
        notes: '가상 커플이다. 학생의 연애 여부나 경험을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('act.time-balance', {
        title: '교제와 나의 시간 균형 맞추기', method: '가상 인물의 하루 시각을 시계에 맞추며 시간 균형 보기', tool: 'clock', minutes: 15,
        levels: { easy: '디지털 시각이 함께 보이고 긴바늘이 30분씩 움직인다. 하람의 하루 시각 넷을 맞춘다.', base: '디지털 시각 없이 긴바늘이 10분씩 움직이고, 하루 시각을 맞춘 뒤 한쪽 시간이 늘어나면 무엇이 줄어드는지 짝과 말한다.', challenge: '작은 눈금 없이 맞추고, 마지막 문항에서 균형이 무너졌을 때 하람이 할 말을 짝에게 말하고 활동지에 쓴다.' },
        activity: {
          title: '교제와 나의 시간 균형 맞추기', tool: 'clock',
          teacher: '"하람의 하루에는 공부·친구·가족·연인 시간이 다 들어 있어요. 연인과의 통화가 밤 11시까지 이어지면 무엇이 줄어들까요?" 가상 인물 하람의 하루 시각을 시계에 하나씩 맞추게 한다. "좋아하면 다른 건 줄여도 된다"는 학생에게 "하람이 친구 모임과 가족 저녁을 계속 빠진다면 몇 주 뒤 하람의 하루는 어떤 모습일까요?"라고 되묻는다. 시각은 가상 인물의 것이며 학생의 하루나 교제 여부는 묻지 않는다.',
          task: '가상 인물 하람의 하루(공부·친구·가족·연인 시간) 시각을 시계에 맞추고, 한쪽 시간이 다른 시간을 차지할 때 생기는 문제를 살펴요.',
          levels: { easy: { showDigital: true, minuteStep: 30 }, base: { minuteStep: 10 }, challenge: { minuteStep: 10, showMinuteMarks: false } },
          items: [
            { prompt: '하람이 학교에서 돌아와 숙제를 시작하는 시각, 4시 30분에 시계를 맞추세요.', target: H(4, 30), difficulty: 0.2 },
            { prompt: '하람이 친구들과 농구를 마치는 시각, 6시에 시계를 맞추세요.', target: H(6, 0), difficulty: 0.2 },
            { prompt: '하람이 가족과 저녁을 먹기 시작하는 시각, 7시에 시계를 맞추세요.', target: H(7, 0), difficulty: 0.2 },
            { prompt: '하람이 연인과 통화를 마치기로 서로 약속한 시각, 9시 30분에 시계를 맞추세요.', target: H(9, 30), difficulty: 0.25 },
            IT({ prompt: '통화가 약속보다 늘어 밤 11시에 끝나면 줄어드는 시간(잠·다음 날 공부)을 짝과 시계로 세어 말해요.', free: true },
              null,
              { prompt: '통화가 밤 11시까지 늘어 균형이 무너졌을 때 하람이 연인에게 할 말을 짝에게 말해요(시계를 11시에 놓고 이야기해요).' },
              { conclude: '건강한 교제는 공부·친구·가족·나의 시간과 함께 가요. 서로의 시간을 존중하는 약속을 함께 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 인물 하람의 하루를 정리해요.', columns: ['무엇', '시각'], cells: [['숙제 시작', '4시 30분'], ['친구와 농구 끝', ''], ['가족 저녁', ''], ['통화 끝(약속)', '']], answer: '6시, 7시, 9시 30분' }],
          easy: [{ type: 'choice', prompt: '통화가 밤 11시까지 늘면 줄어드는 것은?', options: ['잠자는 시간', '아무것도 없다'], answer: '잠자는 시간' }] },
        notes: '시계 교구는 한 번에 한 시각만 맞춰, 계획의 \'칸 배치\'를 하루 시각 맞추기 문항 여러 개로 바꾸었다. 시각은 모두 가상 일과다. ' + SAFE_NOTE,
      }),
      M('act.advice-column', {
        title: '교제 상담 칼럼 쓰기', method: '가상 고민에 상담 칼럼 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 틀을 채워 칼럼을 세 문장으로 쓰고 기준 2개를 점검한다.', base: '5~6문장 칼럼을 쓰고 기준표 4항목(존중·책임·구체적 행동·도움 경로)으로 점검한다.', challenge: '넷째 문항에서 고민 속 연인의 입장에서 쓴 가상 칼럼과 견주어 다른 점을 쓴다.' },
        activity: {
          title: '교제 상담 칼럼 쓰기', tool: 'rubric-writing',
          teacher: '"\'사귀는 친구가 내 친구들과 노는 걸 싫어해.\' 이 고민에 \'헤어져\'나 \'참아\' 말고 쓸 수 있는 답은 무엇일까요?" 가상 고민 글을 함께 읽고 쓰게 한다. "좋아하면 상대가 싫어하는 건 안 해야 한다"는 학생에게 "상대의 마음을 존중하는 것과 내 친구 관계를 모두 끊는 것은 같은 일일까요?"라고 되묻는다. 칼럼은 가상 고민에 답하는 글이며 자기 연애 이야기를 쓰지 않게 한다.',
          task: '가상 고민 "사귀는 친구가 내 친구들과 노는 걸 싫어해"에 상담 칼럼을 쓰고, 존중·책임·구체적 행동·도움 경로를 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 고민한 사람의 마음을 알아주고 문제를 짚는 두 문장을 쓰세요.', toolOptions: { topic: '가상 고민: "사귀는 친구가 내 친구들과 노는 걸 싫어해." 고민한 사람의 마음을 알아주고, 무엇이 문제인지 짚는 두 문장을 쓰세요.', minChars: 30, maxChars: 160, minSentences: 2, maxSentences: 3, title: '칼럼 ① 마음과 문제' }, target: { selfCheck: ['고민한 사람의 마음을 알아주었다', '친구 관계를 막는 것이 왜 문제인지 썼다'] } },
              { prompt: '문장 틀을 채워 첫 부분을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '그런 말을 들으면 ___ 하겠어요. 연인이 친구 관계를 막는 것은 ___.' }, target: { selfCheck: ['고민한 사람의 마음을 알아주었다', '친구 관계를 막는 것이 왜 문제인지 썼다'] } }),
            IT({ prompt: '가운데: 두 사람이 서로 존중하며 해 볼 구체적인 대화·행동을 두 문장으로 쓰세요.', toolOptions: { topic: '두 사람이 서로를 존중하며 해 볼 수 있는 구체적인 대화나 행동(예: 나-전달법으로 말하기, 서로의 친구 시간 정하기)을 두 문장으로 쓰세요.', minChars: 30, maxChars: 160, minSentences: 2, maxSentences: 3, title: '칼럼 ② 구체적 행동' }, target: { selfCheck: ['서로를 존중하는 방법을 썼다', '바로 해 볼 수 있는 행동으로 썼다'] } },
              { prompt: '문장 틀을 채워 해 볼 행동을 쓰세요.', toolOptions: { minChars: 15, minSentences: 1, starter: '먼저 "나는 ___ 할 때 ___" 하고 말해 보세요.' }, target: { selfCheck: ['바로 해 볼 수 있는 행동으로 썼다'] } }),
            IT({ prompt: '칼럼 전체를 5~6문장으로 완성하세요(책임과 도움 경로 넣기).', toolOptions: { topic: '앞의 내용에 이어, 교제에서 서로 지는 책임과 같은 일이 되풀이될 때 도움받을 곳(믿는 어른·상담 선생님)을 넣어 칼럼 전체를 5~6문장으로 완성하세요.', minChars: 90, maxChars: 360, minSentences: 5, maxSentences: 6, title: '상담 칼럼 완성' }, target: { selfCheck: ['서로를 존중하는 말로 썼다', '교제에서 지는 책임을 썼다', '구체적인 행동을 제안했다', '도움받을 곳을 알려 주었다'], mustInclude: [['선생님', '어른', '상담']] } },
              { prompt: '세 문장으로 칼럼을 완성하세요(도움받을 곳 넣기).', toolOptions: { minChars: 40, minSentences: 3, maxSentences: 4, starter: '연인 사이에도 ___. 먼저 ___ 해 보세요. 그래도 되풀이되면 ___ 와 이야기해요.' }, target: { selfCheck: ['서로를 존중하는 말로 썼다', '도움받을 곳을 알려 주었다'], mustInclude: [['선생님', '어른', '상담']] } }),
            IT({ prompt: '가상 칼럼 "사랑하면 그 정도는 맞춰 줘야죠"를 기준표로 읽고 고칠 점을 쓰세요.', toolOptions: { topic: '가상 칼럼 한 줄: "사랑하면 그 정도는 맞춰 줘야죠." 기준표(존중·책임·구체적 행동·도움 경로)로 읽고 고칠 점을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '가상 칼럼 고치기' }, target: { selfCheck: ['빠진 기준을 짚었다', '고칠 문장을 제안했다', '칼럼을 쓴 사람을 탓하지 않았다'] } },
              null,
              { prompt: '고민 속 연인의 입장에서 쓴 가상 칼럼("불안하면 연인에게 친구 만남을 줄여 달라고 하세요")과 내 칼럼의 다른 점을 쓰세요.', toolOptions: { topic: '고민 속 연인 쪽에서 쓴 가상 칼럼: "불안하면 연인에게 친구 만남을 줄여 달라고 하세요." 내 칼럼과 견주어 다른 점과 더 나은 조언을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '반대 입장 칼럼과 견주기' }, target: { selfCheck: ['두 칼럼의 다른 점을 썼다', '불안한 마음을 다루는 더 나은 방법을 썼다', '어느 쪽도 비난만 하지 않았다'] } },
              { conclude: '좋은 교제 칼럼은 마음을 알아주고, 서로를 존중하는 구체적 행동과 책임, 도움받을 곳을 함께 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '사귀는 친구가 내 친구 만남을 막을 때에 대한 조언으로 알맞은 것은?', options: ['사랑하면 따라야 한다', '서로의 친구 관계를 존중하자고 말하고, 계속되면 믿는 어른과 상의한다', '몰래 만나고 숨긴다'], answer: '서로의 친구 관계를 존중하자고 말하고, 계속되면 믿는 어른과 상의한다' }, { type: 'short', prompt: '가상 고민에 답하는 칼럼의 핵심 조언 한 문장을 써요.' }] },
        notes: '가상 고민에 답하는 글이다. 학생 자신의 연애 고민을 쓰게 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.relation-poster', {
        title: '건강한 관계 신호 포스터', method: '건강한 관계 신호를 담은 포스터 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '건강한 관계 신호를 고르는 둘째 출구 질문에 답하고 포스터를 꾸민다.', base: '포스터를 꾸미고 건강한 관계 신호 다섯 가지를 직접 쓴다(셋째 출구 질문).', challenge: '위험 신호 하나와 대처법을 넷째 출구 질문에 함께 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 존중 신호 가운데 포스터에 꼭 넣고 싶은 다섯 가지는 무엇인가요?" 콜라주 판에는 그림을 꾸미고, 신호 문구는 출구 질문과 활동지에 쓴다. "질투해 주는 것도 건강한 신호"라는 말이 나오면 "질투하는 마음과, 그 마음으로 상대를 통제하는 행동을 나누어 볼까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '건강한 관계 신호 포스터 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['포스터에 넣을 신호 다섯 가지를 정했다', '통제를 사랑처럼 그리지 않았다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '건강한 관계 신호로 알맞은 것은?', options: ['서로의 친구 시간을 존중한다', '답장이 늦으면 화를 낸다', '휴대폰 비밀번호를 공유해야 한다'], answer: 0, difficulty: 0.15, explain: '서로의 시간과 관계를 존중하는 것이 건강한 신호예요.' },
            { type: 'short', prompt: '포스터에 넣을 건강한 관계 신호 다섯 가지를 써요.' },
            { type: 'short', prompt: '위험 신호 하나와 그때 할 대처를 써요.' },
          ],
        },
        worksheet: {
          title: '건강한 관계 신호',
          items: [
            { type: 'short', prompt: '건강한 관계 신호 다섯 가지를 써요.' },
            { type: 'short', prompt: '위험 신호가 되풀이될 때 이야기할 수 있는 사람을 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 문구는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
      M('wrap.self-check', {
        title: '건강한 관계 원칙 점검', method: '관계에서 바랄 것·지킬 것 원칙 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 항목 3개에 표시한다.', base: '점검 항목 5개에 표시하고 둘째 출구 질문에 답한다.', challenge: '나만의 관계 원칙 한 줄을 셋째 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"어떤 관계든 지키고 싶은 원칙이 있다면 무엇일까요?" 점검은 지금 사귀는지가 아니라 친구·연인 모든 관계에 쓸 원칙이라고 먼저 말한다. "원칙을 말하면 상대가 싫어할 것"이라는 걱정이 나오면 "서로 같은 원칙을 지키는 관계라면 어떨까요?"라고 되묻는다.',
          exitTicket: [
            IT(SELF('관계에서 바랄 것·지킬 것으로 내가 동의하는 원칙에 표시해요.', '건강한 관계 원칙 점검', ['서로의 친구·가족 시간을 존중한다', '싫다는 말은 바로 받아들인다', '서로 같은 규칙을 지킨다', '내 시간과 꿈도 소중히 여긴다', '위험 신호가 되풀이되면 믿는 어른과 이야기한다']),
              { prompt: '내가 동의하는 관계 원칙에 표시해요(3개).', target: { selfCheck: ['서로의 친구·가족 시간을 존중한다', '싫다는 말은 바로 받아들인다', '위험 신호가 되풀이되면 믿는 어른과 이야기한다'] } }),
            { type: 'choice', prompt: '"사랑하면 서로 다 알아야 한다"는 말에 대한 생각으로 알맞은 것은?', options: ['맞다, 비밀이 없어야 사랑이다', '연인 사이에도 각자의 사생활과 시간이 있다', '친구에게만 비밀이 있으면 된다'], answer: 1, difficulty: 0.2, explain: '건강한 관계는 서로의 사생활과 시간을 존중해요.' },
            { type: 'short', prompt: '나만의 관계 원칙을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '건강한 관계 원칙',
          items: [
            { type: 'check', prompt: '내가 지키고 싶은 관계 원칙에 표시해요.', options: ['서로의 시간 존중', '싫다는 말 존중', '서로 같은 규칙', '내 꿈도 소중히'] },
            { type: 'short', prompt: '나만의 관계 원칙 한 줄을 써요.' },
          ],
        },
        notes: '계획의 \'나의 관계 기대 점검\'은 학생의 교제 여부를 묻게 될 수 있어, 모든 관계에 쓰는 원칙에 동의하는지로 바꾸어 점검한다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 10-g8-consent-talk.js ====
  // ==== 8학년 · 동의의 조건과 확인하는 대화 (gender.m.g8-consent-talk) ====
  {
    const M = MK('g8-consent-talk', [8]);
    const QUIZ = [
      { id: 'd3', text: '"좋아! 근데 나중에 싫어지면 말할게"', ok: true }, { id: 'd4', text: '"응, 같이 찍자. 올리는 건 나한테 먼저 물어봐 줘"', ok: true },
      { id: 'd1', text: '"음… 그래…"(작은 목소리로 고개를 돌림)' }, { id: 'd2', text: '"다들 하는데 너만 빼?" — "…알았어"' },
      { id: 'd5', text: '(잠들어 있어 아무 대답이 없음)' }, { id: 'd6', text: '"싫다고 하면 화낼 거지?" — "아니… 괜찮아"' },
    ];
    const TEA = [
      { id: 't1', text: '"차 한 잔 마실래?"라고 먼저 묻는다' }, { id: 't2', text: '대답을 재촉하지 않고 기다린다' },
      { id: 't3', text: '"아니"라고 하면 권하지 않는다' }, { id: 't4', text: '마시다 "그만"이라면 바로 거둔다' }, { id: 't5', text: '잠든 사람에게는 차를 붓지 않는다' },
    ];
    const TEA_TRAP = [{ id: 'tx', text: '어제 마셨으니 오늘도 그냥 따른다' }];
    // 압력 갈림길(깊이 3) — 장면은 '손을 잡고 기대려는 스킨십'까지만 쓴다
    const D1 = { text: '사귄 지 한 달 된 가상 커플 지안과 우진. 하굣길에 우진이 지안의 손을 잡고 어깨에 기대려 한다. 지안이 머뭇거리자 우진이 "우리 사귀는데 왜 안 돼?"라고 조른다.', ask: '지안은 어떻게 할까?', motif: 'house', who: '지안', choices: [
      { id: 'accept', text: '분위기가 어색해질까 봐 "…알았어"라고 한다', result: '우진은 지안이 좋아한다고 여긴다. 지안은 마음이 무겁다.', impact: [{ who: '지안', text: '내 마음과 다른 대답을 했다', tone: -1 }], why: '분위기에 밀려 한 "알았어"는 자유로운 동의가 아니에요. 지안의 잘못이 아니라 조른 쪽이 바꿔야 해요.', end: '압력에 밀린 대답이 남았어요.',
        next: { text: '다음 날 우진이 "어제 좋다고 했잖아"라며 또 스킨십을 하려 한다.', ask: '이번엔 어떻게 할까?', choices: [
          { id: 'say2', text: '"어제는 사실 싫었어. 지금도 싫어"라고 말한다', result: '우진이 놀라 손을 뗀다.', impact: [{ who: '지안', text: '마음을 되찾아 말했다', tone: 1 }], end: '늦었지만 내 마음을 말했어요.',
            next: { text: '우진이 "그럼 어제 왜 좋다고 했어?"라며 서운해한다.', choices: [
              { id: 'explain', text: '"조르니까 거절하기 어려웠어. 다음엔 내가 좋다고 할 때까지 기다려 줘"', result: '우진이 "미안, 몰랐어"라고 답한다.', impact: [{ who: '두 사람', text: '서로 묻고 기다리는 약속이 생긴다', tone: 1 }], ending: '압력 없이 묻고 기다리는 약속을 만들었어요.' },
              { id: 'blame', text: '"내가 분명히 말 안 한 게 잘못이야"라고 자기를 탓한다', result: '지안은 다음에도 말하기 어려워진다.', impact: [{ who: '지안', text: '스스로를 탓한다', tone: -1 }], why: '조른 쪽이 바꿔야 할 일이에요. 거절하기 어려웠던 것은 지안의 잘못이 아니에요.' }] } },
          { id: 'again', text: '한 번 좋다고 했으니 이번에도 참는다', result: '지안은 우진을 만나는 것이 불편해진다.', impact: [{ who: '지안', text: '관계가 불편해진다', tone: -1 }], why: '한 번 좋다고 했어도 언제든 마음을 바꿀 수 있어요. 동의는 매번 새로 물어요.' }] } },
      { id: 'delay', text: '"나중에…"라며 말끝을 흐린다', result: '우진은 "나중에"를 "곧 괜찮다"로 듣고 또 조른다.', impact: [{ who: '지안', text: '조르기가 이어진다', tone: -1 }], why: '흐린 대답은 상대가 다르게 들을 수 있어요. 짧고 분명하게 말해도 괜찮아요.', end: '흐린 대답 뒤에 조르기가 이어졌어요.',
        next: { text: '우진이 "그럼 언제? 지금은 왜 안 돼?"라고 다시 묻는다.', ask: '어떻게 할까?', choices: [
          { id: 'clear2', text: '"지금은 싫어. 내가 괜찮을 때 말할게"라고 분명히 말한다', result: '우진이 잠시 서운해하다가 "알았어"라고 한다.', impact: [{ who: '지안', text: '마음이 존중받는다', tone: 1 }], end: '분명하게 말해 존중받았어요.',
            next: { text: '며칠 뒤 우진이 "손잡아도 돼?"라고 먼저 묻는다.', choices: [
              { id: 'free', text: '지안이 원하는 대로 "응" 또는 "아니"라고 답한다', result: '어느 대답이든 우진이 그대로 받아들인다.', impact: [{ who: '두 사람', text: '묻고 답하는 대화가 자리 잡는다', tone: 1 }], ending: '묻고, 자유롭게 답하고, 대답을 존중했어요.' },
              { id: 'fear', text: '거절하면 헤어질까 봐 억지로 "응"이라고 한다', result: '지안의 마음과 다른 대답이 또 나온다.', impact: [{ who: '지안', text: '마음이 무겁다', tone: -1 }], why: '헤어질까 두려워 한 대답은 자유롭지 않아요. 거절해도 괜찮은 관계가 건강한 관계예요.' }] } },
          { id: 'give', text: '계속 물으니 그냥 받아들인다', result: '지안은 조르면 들어주는 사이가 된 것 같아 불편하다.', impact: [{ who: '지안', text: '내 뜻이 사라진다', tone: -1 }], why: '여러 번 졸라서 얻은 대답은 압력이에요. 동의가 아니에요.' }] } },
      { id: 'refuse', text: '"지금은 싫어"라고 짧고 분명하게 말한다', result: '우진이 손을 놓는다.', impact: [{ who: '지안', text: '내 뜻을 지켰다', tone: 1 }], end: '처음부터 분명하게 거절했어요.',
        next: { text: '우진이 "사귀는 사이에 이것도 안 돼?"라며 서운한 표정을 짓는다.', ask: '어떻게 할까?', choices: [
          { id: 'hold', text: '"사귀어도 내 몸은 내가 정해. 싫다는 말은 존중해 줘"', result: '우진이 "맞아, 미안"이라며 사과한다.', impact: [{ who: '두 사람', text: '서로의 결정을 존중한다', tone: 1 }], end: '사귀는 사이에도 동의가 필요하다고 말했어요.',
            next: { text: '우진이 친구에게 "우리 사이에 묻는 게 필요하대"라고 말한다. 친구가 "사귀면 그냥 하는 거지"라고 한다.', choices: [
              { id: 'spread', text: '우진이 "사귀어도 매번 물어야 해"라고 친구에게 말한다', result: '친구가 "그렇구나"라며 생각해 본다.', impact: [{ who: '주변 친구', text: '동의 문화가 퍼진다', tone: 1 }], ending: '묻는 문화가 친구에게도 이어졌어요.' },
              { id: 'laugh', text: '우진이 웃으며 "그러게, 좀 귀찮다"라고 맞장구친다', result: '친구는 묻지 않아도 된다고 생각한다.', impact: [{ who: '주변 친구', text: '잘못된 생각이 남는다', tone: -1 }], why: '사귀는 사이에도 동의는 필요해요. 맞장구는 통념을 키워요.' }] } },
          { id: 'sorry', text: '서운하게 한 것이 미안해 "괜찮아, 해도 돼"라고 바꾼다', result: '지안은 다시 마음과 다른 대답을 했다.', impact: [{ who: '지안', text: '내 뜻이 흔들린다', tone: -1 }], why: '상대가 서운해한다고 내 결정을 바꿀 필요는 없어요. 서운함은 조른 쪽이 다룰 몫이에요.' }] } }] };
    const R1 = [{ id: 'r1', text: '압력으로 얻은 대답은 동의가 아니다' }, { id: 'r2', text: '사귀는 사이에도 매번 묻고 존중해야 한다' },
      { id: 'r3', text: '싫다고 안 했으니 동의한 것이다', why: '침묵이나 흐린 대답은 동의가 아니에요. 분명한 "좋아"가 있어야 해요.' }, { id: 'r4', text: '지안이 처음에 분명히 거절했어야 했다', why: '거절하기 어렵게 만든 것은 조른 쪽이에요. 지안의 잘못이 아니에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '분명히 말한 길에서는 서로 묻는 약속이 생겼다' }, { id: 'r6', text: '밀려서 대답한 길에서는 지안이 불편해졌다' }], ok: ['r5', 'r6'] };
    const SUM = ['동의의 조건', '동의가 아닌 것', '철회'];

    ALL.push(
      // ---- 도입 ----
      M('intro.consent-quiz', {
        title: '동의 조건을 갖춘 대화 고르기', method: '가상 대화에서 동의 조건(자유·분명·철회 가능) 찾기', tool: 'wordcards', minutes: 5,
        levels: { easy: '대화 카드 3장(조건을 갖춘 것 1장)만 교사가 읽어 주고 함께 고른다.', base: '대화 카드 6장에서 자유·분명·철회 가능 세 조건을 모두 갖춘 대화 2장을 고르는 시연을 보고 까닭을 말한다.', challenge: '조건이 빠진 대화 하나를 골라 조건을 갖춘 대화로 고쳐 짝에게 말한다.' },
        intro: {
          teacher: '"\'음… 그래…\'라고 작은 목소리로 고개를 돌리며 한 말, 이건 \'좋아\'일까요?" 대화 카드 6장을 띄우고 시연 단추로 자유롭고 분명하며 철회할 수 있다고 밝힌 두 대화가 담기는 모습을 보인다. "싫다고 안 했으면 된 거 아니에요?"라는 말이 나오면 "대답이 없는 사람, 잠든 사람도 \'싫다\'고 하지 않았어요. 그럼 동의했을까요?"라고 되묻는다. 오늘은 동의의 세 조건과 확인하는 대화를 다룬다고 밝힌다. 대화는 모두 가상 인물의 것이다.',
          student: '가상 대화 카드에서 자유롭고, 분명하며, 언제든 바꿀 수 있는 동의를 갖춘 대화를 골라요.',
          demo: { tool: 'wordcards', options: PB('', '동의 조건을 갖춘 대화', QUIZ).toolOptions, sequence: [PB('', '', QUIZ).target] },
          art: { draw: 'a paper-cut scene of two students talking with paper speech bubbles, one bubble with a clear check mark and another bubble trailing off with dots', banner: '그건 정말 "좋아"일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '대화는 사진·놀이 같은 일상 장면으로 고른다. 학생에게 자기 경험을 말하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.tea-analogy', {
        title: '차 권하기 비유로 동의 이해', method: '비유 장면 카드를 차례로 놓고 동의와 잇기', tool: 'story', minutes: 7,
        levels: { easy: '장면 3장(묻기·기다리기·싫다면 권하지 않기)만 교사가 읽어 주며 차례로 놓는다.', base: '장면 5장을 차례로 놓는 시연을 보고, 장면마다 동의의 어느 조건인지 말한다.', challenge: '비유가 설명하지 못하는 점(사람의 마음은 차보다 복잡하고 힘의 차이가 있다)을 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"누군가에게 차를 권한다고 해 봅시다. 먼저 무엇을 해야 할까요?" 시연 단추로 장면 다섯 장이 묻기 → 기다리기 → 싫다면 권하지 않기 → 그만이라면 거두기 → 잠든 사람에게 붓지 않기 차례로 놓이는 모습을 보인다. "어제 마셨으니 오늘도 그냥 따라도 된다"는 함정 장면을 짚으며 "어제의 \'좋아\'가 오늘의 \'좋아\'일까요?"라고 되묻는다. 비유는 이해를 돕는 도구일 뿐 사람의 마음과 관계는 더 복잡하다는 점도 함께 말한다.',
          student: '"차를 권할 때" 장면 카드를 차례로 놓고, 장면마다 동의의 어떤 조건과 이어지는지 생각해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '차를 권할 때', cards: [TEA[2], TEA[0], TEA[4], TEA[1], TEA[3], ...TEA_TRAP] }, sequence: [{ order: TEA.map((c) => c.id) }] },
          art: { draw: 'a paper-cut table with a paper teapot and two paper cups, one cup being politely offered with a question mark bubble above it', banner: '먼저 묻고, 기다리기', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '비유는 동의의 원리만 다룬다. 비유를 실제 신체 접촉 장면으로 옮겨 묘사하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.pressure-dilemma', {
        title: '"사귀는데 왜 안 돼?" 갈림길', method: '압력 속 동의 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 지안에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 다른 길과 견주는 근거까지 고르고, 셋째 문항에서 조르는 사람이 바꿔야 할 말을 고른다.' },
        activity: {
          title: '"사귀는데 왜 안 돼?" 갈림길', tool: 'dilemma',
          teacher: '"우진이 \'우리 사귀는데 왜 안 돼?\'라고 했을 때, 지안이 \'알았어\'라고 한 것은 동의일까요?" 학생마다 한 길을 끝까지 간 뒤 다른 길과 견주게 한다. "지안이 처음에 분명히 거절했어야지"라는 말이 나오면 "거절하기 어렵게 만든 사람은 누구였나요? 바꿔야 할 쪽은 누구일까요?"라고 되묻는다. 사귀는 사이에도 매번 묻고, 압력으로 얻은 대답은 동의가 아니라는 점을 끝 장면에서 짚는다. 장면은 손잡기·기대기 수준으로만 말한다.',
          task: '가상 커플 지안과 우진의 장면에서 길을 골라 결과를 따라가고, 압력으로 얻은 대답이 동의인지 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '우진이 조르는 장면이에요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '우진이 조르는 장면이에요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '지안과 우진', D1, [['refuse', 'hold', 'spread'], ['delay', 'clear2', 'free'], ['accept', 'say2', 'explain']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '침묵이 동의인지 따져 보는 장면을 따라가세요.', toolOptions: { title: '대답이 없을 때', scene: { text: '우진이 "사진 찍어서 올려도 되지?"라고 묻는다. 지안은 아무 말 없이 휴대폰만 본다.', ask: '우진은 어떻게 할까?', motif: 'house', choices: [
              { id: 'post', text: '싫다고 안 했으니 올린다', result: '지안은 원치 않는 사진이 올라가 속상하다.', impact: [{ who: '지안', text: '내 사진을 내가 정하지 못했다', tone: -1 }], why: '대답이 없는 것은 동의가 아니에요.' },
              { id: 'ask', text: '"대답 없으면 안 올릴게. 올려도 괜찮아?"라고 다시 묻는다', result: '지안이 "이건 안 올렸으면 해"라고 답한다.', impact: [{ who: '지안', text: '내 뜻을 말할 수 있다', tone: 1 }], ending: '대답이 없을 때 다시 묻고 기다렸어요.' }] }, reasons: [{ id: 'q1', text: '침묵은 동의가 아니다' }, { id: 'q2', text: '분명한 "좋아"가 있을 때만 한다' }, { id: 'q3', text: '친한 사이면 묻지 않아도 된다', why: '친한 사이에도 내 사진·몸은 내가 정해요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['ask']], reasons: ['q1', 'q2'], some: true } },
              { prompt: '대답이 없을 때 할 일을 고르세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } },
              { prompt: '대답이 없을 때 할 일을 고르고, 판단 근거를 모두 고르세요.', target: { path: [['ask']], reasons: ['q1', 'q2'] } }),
            IT({ prompt: '조르는 쪽이 할 말을 바꾸는 장면을 따라가세요.', toolOptions: { title: '조르는 말 바꾸기', scene: { text: '우진이 지안의 머뭇거림을 보고 무슨 말을 할지 고민한다.', ask: '우진이 할 말로 알맞은 것은?', motif: 'house', choices: [
              { id: 'respect', text: '"싫으면 안 해도 돼. 네가 괜찮을 때 말해 줘"', result: '지안이 편하게 "지금은 싫어"라고 말한다.', impact: [{ who: '지안', text: '거절해도 안전하다고 느낀다', tone: 1 }], ending: '거절해도 괜찮다는 말이 동의를 가능하게 했어요.' },
              { id: 'guilt', text: '"나 좋아하는 거 맞아? 증명해 봐"', result: '지안은 마음과 다른 대답을 해야 할 것 같다.', impact: [{ who: '지안', text: '죄책감에 밀린다', tone: -1 }], why: '사랑을 증명하라는 말은 압력이에요.' },
              { id: 'all', text: '"다른 커플은 다 해"', result: '지안은 이상한 사람이 된 것 같다.', impact: [{ who: '지안', text: '비교에 밀린다', tone: -1 }], why: '남과 비교하는 말도 압력이에요.' }] }, reasons: [{ id: 'p1', text: '거절해도 괜찮다고 먼저 말하면 자유로운 대답이 나온다' }, { id: 'p2', text: '좋아한다면 증명해야 한다', why: '좋아하는 마음과 스킨십은 따로예요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['respect']], reasons: ['p1'] }, conclude: '압력·죄책감·비교로 얻은 대답은 동의가 아니에요. 사귀는 사이에도 묻고, 기다리고, 거절을 존중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"우리 사귀는데 왜 안 돼?"라는 말에 대한 설명으로 알맞은 것은?', options: ['사귀면 동의가 필요 없다', '거절하기 어렵게 만드는 압력이다', '좋아한다는 표현이니 들어줘야 한다'], answer: '거절하기 어렵게 만드는 압력이다' }] },
        notes: '장면은 손잡기·기대기·사진 올리기 수준이다. 학생의 연애 경험을 묻지 않는다. 피해자 탓 근거(r4·blame)는 함정이며 늘 바로잡는다. ' + SAFE_NOTE,
      }),
      M('act.ask-flow', {
        title: '확인 대화 순서 블록 짜기', method: '확인 대화 차례를 명령 블록으로 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '첫째 문항은 앞으로 블록만으로 깃발(존중)에 닿고, 둘째 문항은 바위(조르기)를 돌아가는 길을 블록으로 짠다(조건 블록 없이도 됨).', base: '첫째 문항은 반복 블록을 넣어 3블록 안에, 둘째 문항은 조건 블록(막히면 돌기)을 넣어 짠다. 셋째 문항은 한 블록만 고친다.', challenge: '셋째 문항에 바위가 하나 더 놓여(마음이 바뀐 경우) 한 블록만 고쳐 깃발에 닿고, 넷째 문항에서 멈출 칸을 고른다.' },
        activity: {
          title: '확인 대화 순서 블록 짜기', tool: 'block-coding',
          teacher: '"묻기 → 대답 기다리기 → 예면 다시 확인, 아니면 멈추고 존중. 이 대화를 순서도로 짜면 어디에 \'조건\'이 들어갈까요?" 판의 칸을 대화 단계로 읽는다고 먼저 정한다(출발 = 묻기, 바위 = 조르기·분위기로 밀어붙이기, 깃발 = 존중). 블록 이름은 바꿀 수 없어 말로 덧붙인다. "한 번 \'예\'면 끝까지 \'예\'"라는 학생에게 "중간에 마음이 바뀌면 순서도의 어느 블록이 다시 돌아야 할까요?"라고 되묻는다. 조건 블록은 \'막히면 돌기\' — 아니라는 대답 앞에서는 밀고 나가지 않고 방향을 바꾸는 일과 같다고 짚는다.',
          task: '확인 대화의 차례(묻기 → 기다리기 → 예면 다시 확인, 아니면 멈추고 존중)를 거북이 블록으로 짜서 조르기 바위를 피해 존중 깃발에 닿게 해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '출발(묻기)에서 깃발(존중)까지 네 칸, 대화 단계를 차례로 지나가게 반복 블록을 넣어 3블록 안으로 짜세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, use: ['rep'], maxBlocks: 3 } },
              { prompt: '출발(묻기)에서 깃발(존중)까지 블록을 붙여 거북이가 닿게 하세요.', target: { reach: true } }),
            IT({ prompt: '바위(조르기)가 길을 막았어요. 조건 블록(막히면 돌기)을 넣어 바위를 피해 깃발(존중)에 닿게 짜세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 2]], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, use: ['if'] } },
              { prompt: '바위(조르기)를 돌아가는 길로 블록을 붙여 깃발(존중)에 닿게 하세요.', target: { reach: true } }),
            IT({ prompt: '이 순서도는 \'아니\'라는 대답에서 멈추지 않아 깃발에 못 가요. 한 블록만 고쳐 깃발(존중)에 닿게 하세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 2 }, blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['fwd', 'fwd', 'fwd', 'left'] }, target: { reach: true, maxEdits: 1, from: ['fwd', 'fwd', 'fwd', 'left'] } },
              null,
              { prompt: '중간에 마음이 바뀐 경우(바위)가 더해졌어요. 한 블록만 고쳐 깃발(존중)에 닿게 하세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 2, y: 1 }, rocks: [[3, 2]], blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['fwd', 'fwd', 'fwd', 'left', 'fwd'] }, target: { reach: true, maxEdits: 1, from: ['fwd', 'fwd', 'fwd', 'left', 'fwd'] } }),
            IT({ prompt: '이 순서도를 따라가면 거북이가 멈추는 칸(대답이 \'아니\'여서 멈춘 자리)을 고르세요.', toolOptions: { mode: 'trace', cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, program: ['fwd', 'fwd', 'right', 'fwd'], revealAfterCheck: true }, target: { end: { x: 2, y: 1 } } },
              null, null,
              { conclude: '확인 대화는 묻고, 기다리고, \'아니\'라면 멈추는 순서예요. 중간에 마음이 바뀌면 처음부터 다시 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '확인 대화 순서도를 말로 옮겨요.', columns: ['차례', '할 말·할 일'], cells: [['1. 묻기', ''], ['2. 기다리기', ''], ['3. 예라면', ''], ['3. 아니라면', '']], answer: '(예) "해도 돼?", 재촉하지 않기, 다시 확인하며 계속, 멈추고 "알았어"' }] },
        notes: '거북이 교구는 블록 이름을 바꿀 수 없어 칸·바위·깃발을 대화 단계로 읽는다고 정하고 진행한다(계획의 \'묻기·기다리기\' 블록은 말로 붙인다). ' + SAFE_NOTE,
      }),
      M('act.roleplay-consent', {
        title: '확인 대화 역할극 대본 쓰기', method: '확인 대화 역할극 대본 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '장면 하나(손잡기 전 묻기)만 문장 시작 말을 채워 쓰고, 둘째·셋째 문항도 틀을 받아 짧게 쓴다.', base: '세 장면(손잡기 전 묻기·사진 올리기 전 묻기·마음이 바뀐 상대 존중)의 대본을 쓰고 기준표 3항목(분명한 질문·대답 존중·압력 없음)으로 점검한다.', challenge: '넷째 문항에서 대답이 애매할 때(“음… 몰라”) 어떻게 할지 대사를 덧붙인다.' },
        activity: {
          title: '확인 대화 역할극 대본 쓰기', tool: 'rubric-writing',
          teacher: '"\'해도 되지?\'와 \'해도 돼?\'는 어떻게 다를까요?" 답을 정해 놓고 묻는 말과 정말 묻는 말을 견주어 읽은 뒤 대본을 쓰게 한다. "묻는 건 분위기를 깬다"는 학생에게 "상대가 싫었는데 묻지 않았다면, 분위기는 누구에게 좋았던 걸까요?"라고 되묻는다. 대본의 인물은 가상 인물 지안·우진이고, 장면은 손잡기·사진 올리기 수준으로만 쓴다고 미리 말한다.',
          task: '가상 인물 지안과 우진의 세 장면 대본을 쓰고, 분명한 질문·대답 존중·압력 없음이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '장면 ①: 우진이 손잡기 전에 묻고, 지안의 대답을 존중하는 대본을 두세 줄로 쓰세요.', toolOptions: { topic: '장면 ① 하굣길. 우진이 지안의 손을 잡기 전에 묻는다. 묻는 말과 지안의 대답, 대답을 존중하는 우진의 말을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '대본 ① 손잡기 전 묻기' }, target: { selfCheck: ['분명하게 묻는 말이 있다', '대답을 그대로 존중했다', '조르거나 탓하는 말이 없다'], mustInclude: [['돼?', '괜찮아?', '할래?']] } },
              { prompt: '틀을 채워 장면 ① 대본을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '우진: "___ 해도 괜찮아?" 지안: "___" 우진: "___"' }, target: { selfCheck: ['분명하게 묻는 말이 있다', '대답을 그대로 존중했다'], mustInclude: [['돼?', '괜찮아?', '할래?']] } }),
            IT({ prompt: '장면 ②: 같이 찍은 사진을 SNS에 올리기 전에 묻는 대본을 두세 줄로 쓰세요.', toolOptions: { topic: '장면 ② 지안과 우진이 같이 찍은 사진. SNS에 올리기 전에 묻는 말과 대답, 대답대로 하는 말을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '대본 ② 사진 올리기 전 묻기' }, target: { selfCheck: ['올리기 전에 물었다', '대답대로 했다', '조르거나 탓하는 말이 없다'] } },
              { prompt: '틀을 채워 장면 ② 대본을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '지안: "이 사진 ___ 올려도 돼?" 우진: "___"' }, target: { selfCheck: ['올리기 전에 물었다', '대답대로 했다'] } }),
            IT({ prompt: '장면 ③: 처음엔 좋다던 지안이 "역시 그만할래"라고 할 때 우진이 존중하는 대본을 두세 줄로 쓰세요.', toolOptions: { topic: '장면 ③ 손을 잡고 걷던 지안이 "역시 그만할래"라고 한다. 우진이 마음이 바뀐 지안을 존중하는 대사를 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '대본 ③ 마음이 바뀌었을 때' }, target: { selfCheck: ['바로 멈추는 말이 있다', '마음이 바뀐 것을 탓하지 않았다', '압력이 되는 말이 없다'], mustInclude: [['알았어', '그래', '멈출게']] } },
              { prompt: '틀을 채워 장면 ③ 대본을 쓰세요.', toolOptions: { minChars: 15, minSentences: 1, starter: '우진: "___, 말해 줘서 고마워."' }, target: { selfCheck: ['바로 멈추는 말이 있다', '마음이 바뀐 것을 탓하지 않았다'], mustInclude: [['알았어', '그래', '멈출게']] } }),
            IT({ prompt: '세 장면에서 가장 중요한 대사 하나를 고르고 그 까닭을 두 문장으로 쓰세요.', toolOptions: { topic: '세 장면 대본에서 동의를 지키는 데 가장 중요한 대사 하나를 옮겨 쓰고, 그 까닭을 두 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '가장 중요한 대사' }, target: { selfCheck: ['대사 하나를 옮겨 썼다', '동의의 조건과 이어 까닭을 썼다', '실제 친구 이름을 쓰지 않았다'] } },
              null,
              { prompt: '대답이 "음… 몰라"처럼 애매할 때 우진이 할 대사를 두세 문장으로 쓰세요.', toolOptions: { topic: '지안의 대답이 "음… 몰라"처럼 애매할 때, 우진이 할 대사를 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '애매한 대답일 때' }, target: { selfCheck: ['애매하면 하지 않는다고 썼다', '다시 물을 기회를 주었다', '조르는 말이 없다'] } },
              { conclude: '확인하는 대화에는 분명한 질문, 대답 존중, 압력 없음이 들어 있어요. 애매하면 하지 않고, 마음이 바뀌면 바로 멈춰요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '상대가 처음엔 좋다고 했다가 마음을 바꿨을 때 알맞은 행동은?', options: ['한 번 좋다고 했으니 계속한다', '바로 멈추고 바뀐 마음을 존중한다', '왜 바꿨는지 따진다'], answer: '바로 멈추고 바뀐 마음을 존중한다' }, { type: 'short', prompt: '"해도 되지?" 대신 쓸 수 있는, 정말로 묻는 말을 하나 써요.' }] },
        notes: '대본은 가상 인물이고 장면은 손잡기·사진 올리기 수준이다. 역할극으로 할 때 신체 접촉을 실제로 하지 않고 대사만 읽는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.consent-chant', {
        title: '"묻고, 듣고, 멈출 줄 알기" 구호', method: '동의 구호를 4박 리듬 블록으로 만들기', tool: 'keyboard', minutes: 6,
        levels: { easy: '들려 주는 리듬(8분음표 넷 + 2분음표 하나)을 한 마디 그대로 따라 놓는다.', base: '한 마디(4박)를 리듬 블록으로 채워 구호 리듬을 짓는다.', challenge: '두 마디(8박)로 늘려 구호 뒷부분까지 리듬을 짓는다.' },
        wrap: {
          teacher: '"묻고, 듣고, 멈출 줄 알기 — 이 구호를 어떤 리듬으로 외치면 기억에 남을까요?" 리듬 블록으로 구호를 만든 뒤 반 전체가 손뼉으로 한 번 외친다. "멈추는 건 지는 거"라는 말이 나오면 "상대의 \'아니\'에 멈추는 사람과 밀어붙이는 사람 가운데 누구를 믿을 수 있을까요?"라고 되묻는다. 구호의 세 낱말이 오늘 배운 동의의 세 행동이라는 점을 마지막으로 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '"묻고, 듣고, 멈출 줄 알기" 구호를 한 마디(4박) 리듬으로 지어요.', target: { beats: true }, difficulty: 0.15 },
              { prompt: '들려 주는 구호 리듬을 한 마디 그대로 따라 놓아요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'h'], showBeats: true }, target: { rhythm: ['e', 'e', 'e', 'e', 'h'] } },
              { prompt: '구호를 두 마디(8박) 리듬으로 늘려 지어요.', toolOptions: { measures: 2 }, target: { beats: true } }),
            { type: 'choice', prompt: '구호의 "멈출 줄 알기"가 뜻하는 것은?', options: ['상대가 "아니"라거나 마음이 바뀌면 바로 멈춘다', '분위기가 좋으면 끝까지 한다', '한 번 좋다고 했으면 멈추지 않는다'], answer: 0, difficulty: 0.15, explain: '동의는 언제든 철회할 수 있어요. 철회하면 바로 멈춰요.' },
            { type: 'short', prompt: '구호의 세 낱말(묻고·듣고·멈추기) 가운데 가장 어려운 것과 까닭을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '동의 구호',
          items: [
            { type: 'blank', prompt: '구호를 완성해요.', text: '묻고, ___, 멈출 줄 알기', answer: '듣고' },
            { type: 'short', prompt: '구호를 내가 지키는 장면 하나를 일상(사진·물건 빌리기 등)에서 써요.' },
          ],
        },
        notes: '리듬 교구는 소리를 누를 때만 낸다. 반 전체 손뼉 구호로 마무리한다. ' + SAFE_NOTE,
      }),
      M('wrap.consent-summary', {
        title: '동의 조건 한 장 정리', method: '동의 생각 그물에 조건·아닌 것·철회 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(동의의 조건·동의가 아닌 것)에 카드 5장을 나눈다.', base: '가지 3개(조건·아닌 것·철회)에 카드 8장을 나누고 함정 카드는 남긴다.', challenge: '가지마다 예시 문장 카드를 짝짓는다(셋째 출구 질문은 짧은 글).' },
        wrap: {
          teacher: '"오늘 배운 동의를 한 장에 정리하면, 세 가지 가지에 무엇이 붙을까요?" 카드를 다 나눈 뒤 \'동의가 아닌 것\' 가지를 함께 소리 내어 읽는다. "싫다고 안 했으면 동의"라는 카드를 조건 가지에 놓은 학생에게 오늘 본 \'대답이 없을 때\' 장면을 떠올리게 한다. 철회 가지에서 \'한 번 좋다고 하면 바꿀 수 없다\'는 통념을 다시 바로잡는다.',
          exitTicket: [
            IT(X('mindmap', SB('카드를 동의 생각 그물의 세 가지에 나눠요.', SUM, [
              { id: 'c1', text: '스스로 원해서 하는 대답', to: '동의의 조건' }, { id: 'c2', text: '"좋아"라는 분명한 말', to: '동의의 조건' },
              { id: 'n1', text: '아무 말 없는 침묵', to: '동의가 아닌 것' }, { id: 'n2', text: '조르기에 밀린 "알았어"', to: '동의가 아닌 것' }, { id: 'n3', text: '잠들어 대답할 수 없는 상태', to: '동의가 아닌 것' },
              { id: 'w1', text: '중간에 "그만"이라고 말하기', to: '철회' }, { id: 'w2', text: '어제의 "좋아"를 오늘 바꾸기', to: '철회' },
              { id: 'z1', text: '사귀는 사이라 묻지 않기' }], { topic: '동의' }), { difficulty: 0.2 }),
              SB('카드를 두 가지에 나눠요.', ['동의의 조건', '동의가 아닌 것'], [
                { id: 'c1', text: '스스로 원해서 하는 대답', to: '동의의 조건' }, { id: 'c2', text: '"좋아"라는 분명한 말', to: '동의의 조건' },
                { id: 'n1', text: '아무 말 없는 침묵', to: '동의가 아닌 것' }, { id: 'n2', text: '조르기에 밀린 "알았어"', to: '동의가 아닌 것' }, { id: 'n3', text: '잠들어 대답할 수 없는 상태', to: '동의가 아닌 것' }], { topic: '동의' }),
              MB('가지마다 알맞은 예시 문장을 이어요.', [['동의의 조건', '"응, 좋아. 같이 하자."'], ['동의가 아닌 것', '"…다들 하니까 알았어."'], ['철회', '"아까는 좋았는데 이제 그만할래."']], ['"싫다고 안 했잖아."'], { topic: '동의' })),
            { type: 'choice', prompt: '"한 번 좋다고 했으면 바꿀 수 없다"는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 약속이니까', '틀리다, 동의는 언제든 철회할 수 있다', '사귀는 사이라면 맞다'], answer: 1, difficulty: 0.15, explain: '동의는 언제든 바꿀 수 있고, 바뀌면 바로 멈춰요.' },
            { type: 'short', prompt: '동의가 아닌 것 하나를 골라 왜 동의가 아닌지 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '동의 한 장 정리',
          items: [
            { type: 'table', prompt: '동의를 세 가지로 정리해요.', columns: ['가지', '내가 정리한 것'], cells: [['동의의 조건', ''], ['동의가 아닌 것', ''], ['철회', '']], answer: '(예) 자유롭고 분명한 "좋아", 침묵·압력·잠든 상태, 언제든 "그만"' },
            { type: 'short', prompt: '"싫다고 안 했으면 동의"라는 말을 바로잡는 문장을 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 11-g8-dating-violence.js ====
  // ==== 8학년 · 데이트폭력 — "사랑이라서"라는 오해 (gender.m.g8-dating-violence) ====
  {
    const M = MK('g8-dating-violence', [8]);
    const POLL = [['질투는 사랑의 증거다', 17], ['연락을 자주 확인하는 건 관심이다', 15], ['연인 사이 일은 남이 끼어들 일이 아니다', 20], ['헤어지자고 해도 계속 붙잡으면 진심이다', 8]];
    const STAGE = [
      { id: 'c1', text: '하루에도 수십 번 "어디야?"라고 묻는다' }, { id: 'c2', text: '그래도 불안하다며 위치 공유를 켜 두라고 한다' },
      { id: 'c3', text: '친구들과 놀면 화를 내며 못 만나게 한다' }, { id: 'c4', text: '휴대폰 비밀번호를 받아 대화를 검사한다' },
      { id: 'c5', text: '답이 늦으면 소리치며 물건을 던진다' }, { id: 'c6', text: '"헤어지면 가만 안 둬"라며 위협한다' },
    ];
    // 친구의 연애를 걱정하는 갈림길(깊이 3) — 가상 인물 수아(친구)와 그 연인
    const D1 = { text: '친한 친구 수아가 "남자친구가 매일 내 휴대폰을 검사해. 사랑해서 그렇대"라고 웃으며 말한다. 요즘 수아는 친구들 모임에도 잘 나오지 않는다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'ignore', text: '둘 사이 일이니 모른 척한다', result: '수아는 점점 더 혼자 지낸다.', impact: [{ who: '수아', text: '기댈 곳이 줄어든다', tone: -1 }], why: '연인 사이 일이어도 친구가 걱정을 말할 수 있어요. 모른 척하면 수아가 더 고립돼요.', end: '수아가 더 고립되었어요.',
        next: { text: '몇 주 뒤 수아가 "답이 늦었다고 남자친구가 소리를 질렀어"라고 작게 말한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'listen2', text: '"말해 줘서 고마워. 네 잘못 아니야"라며 이야기를 들어 준다', result: '수아가 조금씩 이야기를 꺼낸다.', impact: [{ who: '수아', text: '믿을 사람이 생긴다', tone: 1 }], end: '늦었지만 수아 곁에 섰어요.',
            next: { text: '수아가 "근데 어른한테는 말하지 마"라고 부탁한다.', choices: [
              { id: 'adult', text: '"네가 안전한 게 먼저야. 같이 상담 선생님께 가자"라고 한다', result: '수아가 망설이다 함께 상담실에 간다.', impact: [{ who: '수아', text: '도움을 받기 시작한다', tone: 1 }], ending: '수아의 안전을 먼저 두고 어른과 이었어요.' },
              { id: 'secret', text: '약속했으니 아무에게도 말하지 않는다', result: '수아는 혼자 견딘다.', impact: [{ who: '수아', text: '위험이 이어진다', tone: -1 }], why: '안전이 걸린 일은 비밀보다 먼저예요. 믿는 어른에게 함께 가요.' }] } },
          { id: 'blameS', text: '"네가 답을 늦게 하니까 그렇지"라고 한다', result: '수아는 입을 닫는다.', impact: [{ who: '수아', text: '자기 탓이라고 여긴다', tone: -1 }], why: '소리 지른 사람이 잘못이에요. 수아를 탓하는 말은 상처를 더해요.' }] } },
      { id: 'confront', text: '수아 남자친구를 찾아가 따진다', result: '남자친구가 수아에게 "친구한테 왜 말했어"라며 더 화를 낸다.', impact: [{ who: '수아', text: '더 곤란해진다', tone: -1 }], why: '혼자 따지면 수아가 더 위험해질 수 있어요. 수아의 이야기를 듣고 믿는 어른과 함께 움직여요.', end: '따진 뒤 수아가 더 곤란해졌어요.',
        next: { text: '수아가 "너 때문에 더 혼났어"라며 속상해한다.', ask: '어떻게 할까?', choices: [
          { id: 'sorryL', text: '"미안해. 네 이야기를 먼저 들을게"라며 수아 곁에 선다', result: '수아가 다시 이야기를 꺼낸다.', impact: [{ who: '수아', text: '마음이 놓인다', tone: 1 }], end: '수아의 이야기를 먼저 들었어요.',
            next: { text: '수아가 "어떻게 해야 할지 모르겠어"라고 한다.', choices: [
              { id: 'adult2', text: '믿는 어른(담임·상담 선생님)에게 함께 가 보자고 한다', result: '상담 선생님이 수아의 안전을 함께 살핀다.', impact: [{ who: '수아', text: '도움이 이어진다', tone: 1 }], ending: '수아의 선택을 존중하며 어른과 이었어요.' },
              { id: 'breakup', text: '"당장 헤어져"라고 다그친다', result: '수아는 다그침에 더 위축된다.', impact: [{ who: '수아', text: '선택을 빼앗긴 느낌이다', tone: -1 }], why: '다그치기보다 수아가 스스로 정할 수 있게 곁에 있고 도움을 이어요.' }] } },
          { id: 'quit', text: '"그럼 난 모르겠다"며 손을 뗀다', result: '수아는 다시 혼자가 된다.', impact: [{ who: '수아', text: '기댈 곳이 없다', tone: -1 }], why: '한 번 어긋났어도 다시 곁에 설 수 있어요.' }] } },
      { id: 'listen', text: '"요즘 괜찮아? 네 얘기 듣고 싶어"라며 따로 이야기를 나눈다', result: '수아가 "사실 좀 숨 막혀"라고 털어놓는다.', impact: [{ who: '수아', text: '마음을 말할 곳이 생긴다', tone: 1 }], end: '수아의 이야기를 들어 주었어요.',
        next: { text: '수아가 "근데 사랑해서 그런 거래. 나만 참으면 돼"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'name', text: '"휴대폰 검사는 사랑이 아니라 통제일 수 있어"라고 차분히 말한다', result: '수아가 "그런가…" 하며 생각에 잠긴다.', impact: [{ who: '수아', text: '상황을 다시 보게 된다', tone: 1 }], end: '통제의 신호를 함께 알아보았어요.',
            next: { text: '수아가 "누구한테 이야기하면 좋을까?"라고 묻는다.', choices: [
              { id: 'route', text: '"같이 상담 선생님께 가 볼래? 내가 옆에 있을게"', result: '수아가 고개를 끄덕인다.', impact: [{ who: '수아', text: '도움이 이어진다', tone: 1 }], ending: '수아의 선택을 존중하며 믿는 어른과 이었어요.' },
              { id: 'online', text: '"익명 게시판에 올려 물어보자"', result: '수아의 사연이 알아볼 수 있게 퍼질까 걱정된다.', impact: [{ who: '수아', text: '정보가 퍼질 위험', tone: -1 }], why: '사연을 공개된 곳에 올리면 수아가 드러날 수 있어요. 믿는 어른과 상담 기관으로 이어요.' }] } },
          { id: 'agree', text: '"그래, 사랑하면 그럴 수 있지"라고 맞장구친다', result: '수아는 계속 참기로 한다.', impact: [{ who: '수아', text: '통제가 이어진다', tone: -1 }], why: '질투·감시는 사랑의 증거가 아니에요. 맞장구는 통념을 굳혀요.' }] } }] };
    const R1 = [{ id: 'r1', text: '친구의 안전을 먼저 생각하면서 친구의 선택도 존중한다' }, { id: 'r2', text: '휴대폰 검사·만남 막기는 사랑이 아니라 통제의 신호다' },
      { id: 'r3', text: '연인 사이 일은 남이 끼어들 일이 아니다', why: '안전이 걸린 일은 친구도 걱정을 말하고 어른과 이을 수 있어요.' }, { id: 'r4', text: '수아가 참으면 해결된다', why: '참는 것으로 통제는 멈추지 않아요. 바뀌어야 할 쪽은 통제하는 사람이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '들어 준 길에서는 수아가 스스로 도움을 골랐다' }, { id: 'r6', text: '모른 척한 길에서는 수아가 더 고립되었다' }], ok: ['r5', 'r6'] };
    const HELP = { grid: [6, 4], title: '가상의 우리 학교와 동네', places: [
      { name: '상담실(Wee 클래스)', icon: 'library', at: [1, 0], legend: '상담실' }, { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '교무실(담임)', icon: 'office', at: [5, 1], legend: '교무실' },
      { name: '집(보호자)', icon: 'house', at: [0, 3], legend: '집' }, { name: '지역 상담 기관', icon: 'city', at: [4, 3] }, { name: '공원', icon: 'park', at: [2, 2] },
    ] };

    ALL.push(
      // ---- 도입 ----
      M('intro.message-log', {
        title: '가상 메시지 속 통제 신호', method: '가상 연인의 메시지를 읽고 받는 사람의 마음 잇기', tool: 'emotion', minutes: 5,
        levels: { easy: '메시지 3개(“어디야?” 20번째·“지금 당장 전화해”·“시험 잘 봐!”)에 받는 사람의 마음을 교사와 함께 잇는다.', base: '메시지 3개에 마음 카드를 이어 보는 시연을 보고, 통제 신호가 있는 메시지를 말로 고른다.', challenge: '처음엔 다정해 보이지만 통제가 숨은 말(“너 걱정돼서 그래, 누구랑 있는지 사진 보내”)을 찾아 까닭을 말한다.' },
        intro: {
          teacher: '"\'어디야?\' 한 번은 관심일 수 있어요. 오늘만 스무 번째라면요?" 가상 연인의 하루 메시지를 띄우고 시연 단추로 메시지마다 받는 사람의 마음 카드가 붙는 모습을 보인다. "그만큼 좋아해서 그런 거잖아요"라는 말이 나오면 "받는 사람의 마음이 \'불안\'·\'무서움\'이라면, 그건 누구를 위한 관심일까요?"라고 되묻는다. 메시지는 모두 가상이고, 오늘은 사랑과 통제를 가르는 신호를 찾는다고 밝힌다.',
          student: '가상 연인의 하루 메시지를 읽고 받는 사람이 어떤 마음일지 이어 보며, 사랑처럼 보이는 통제 신호를 찾아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '“어디야?” (오늘만 20번째)' }, { id: 's2', label: '“왜 답 안 해? 지금 당장 전화해”' }, { id: 's3', label: '“시험 잘 봐! 끝나고 연락해”' }], cards: ['불안', '무서움', '편안함', '답답함', '고마움'] }, sequence: [{ match: { s1: '답답함', s2: '무서움', s3: '편안함' } }] },
          art: { draw: 'a paper-cut smartphone with a long column of identical paper message bubbles, a worried paper figure holding it under a small storm cloud', banner: '관심일까, 통제일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '학생의 연애·메시지 경험을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.myth-poll', {
        title: '데이트폭력 통념 의견 막대', method: '가상 학급 의견 조사 막대그래프로 통념 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '막대 값을 보이게 두고 통념 2개(질투·연인 사이 일)만 견주어 읽는다.', base: '통념 4개 막대를 눈금으로 읽어 동의가 가장 많은 통념을 고르고, 왜 퍼지는지 토의 질문을 고른다.', challenge: '동의가 가장 많은 통념을 바꾸는 근거 문장을 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"가상의 우리 학년 30명에게 물었더니 \'연인 사이 일은 남이 끼어들 일이 아니다\'에 동의한 사람이 가장 많았어요. 왜 그럴까요?" 막대그래프를 띄우고 시연 단추로 그 막대를 고르는 모습을 보인다. "많이 동의하면 맞는 말"이라는 말이 나오면 "동의한 사람 수가 그 말이 안전한지를 알려 줄까요?"라고 되묻는다. 자료는 수업용 가상 설문이고, 통념이 퍼지는 까닭(드라마·노래·주변 말)을 오늘 함께 따진다고 밝힌다.',
          student: '가상 설문 막대그래프에서 데이트폭력에 대한 통념에 몇 명이 동의했는지 읽고, 그 통념이 왜 퍼지는지 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', horizontal: true, title: '가상 설문 30명 — 이 말에 동의한다', unit: '명', xLabel: '통념', yLabel: '동의한 사람 수', data: POLL, question: '동의한 사람이 가장 많은 통념은?', choices: POLL.map((r) => r[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut horizontal bar chart on a board with four paper bars, a paper magnifying glass hovering over the longest bar', banner: '정말 그럴까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '값은 모두 가상이다. 학생 개개인의 의견을 손들어 조사하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.control-case', {
        title: '점점 심해지는 통제 사례 분석', method: '가상 사례 장면을 차례로 놓고 심해지는 흐름 찾기', tool: 'timeline', minutes: 16,
        levels: { easy: '장면 4장(연락 요구·친구 만남 막기·휴대폰 검사·위협)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 6장을 차례로 놓고, 통제 신호 고르기와 신호 이름 잇기를 한다.', challenge: '셋째 문항에서 함정 카드가 섞인 신호 이름을 잇고, 활동지에 단계마다 도움을 청할 수 있는 사람을 쓴다.' },
        activity: {
          title: '점점 심해지는 통제 사례 분석', tool: 'timeline',
          teacher: '"처음 장면 \'어디야?\'와 마지막 장면 \'가만 안 둬\' 사이에는 무엇이 있었을까요?" 장면을 놓을 때마다 앞 장면보다 무엇이 더해졌는지(시간·사람·물건·두려움) 말하게 한다. "처음엔 다정했으니 그때는 괜찮았다"는 학생에게 "처음 신호에서 멈췄다면 뒤의 장면이 생겼을까요?"라고 되묻는다. 잘못은 통제한 사람에게 있고, 어느 단계에서든 도움을 청할 수 있다는 점을 짚는다. 사례는 가상이다.',
          task: '가상 사례 장면 카드를 처음부터 나중까지 차례로 놓아 점점 심해지는 흐름을 보고, 통제 신호와 그 이름을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '가상 사례 장면 6장을 처음부터 나중까지 차례로 놓으세요.', toolOptions: { mode: 'order', axis: ['처음', '나중'], slots: 6, cards: [STAGE[3], STAGE[0], STAGE[5], STAGE[2], STAGE[4], STAGE[1]] }, target: { order: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'] } },
              { prompt: '장면 4장을 처음부터 나중까지 차례로 놓으세요.', toolOptions: { mode: 'order', axis: ['처음', '나중'], slots: 4, cards: [STAGE[3], STAGE[0], STAGE[5], STAGE[2]] }, target: { order: ['c1', 'c3', 'c4', 'c6'] } }),
            IT(PB('건강한 교제의 모습은 빼고, 통제 신호가 있는 장면만 골라 담으세요.', '통제 신호', [
              { id: 'p1', text: '친구를 만나려면 허락을 받으라고 한다', ok: true }, { id: 'p2', text: '답장이 늦으면 몇십 통씩 전화한다', ok: true },
              { id: 'p3', text: '옷차림을 바꾸라고 화를 낸다', ok: true }, { id: 'p4', text: '시험 기간이라 연락이 뜸해도 응원한다' },
              { id: 'p5', text: '서로 친구와의 시간을 존중한다' }], { axis: ['처음', '나중'] }),
              PB('통제 신호가 있는 장면만 골라 담으세요.', '통제 신호', [
                { id: 'p1', text: '친구를 만나려면 허락을 받으라고 한다', ok: true }, { id: 'p2', text: '답장이 늦으면 몇십 통씩 전화한다', ok: true },
                { id: 'p4', text: '시험 기간이라 연락이 뜸해도 응원한다' }], { axis: ['처음', '나중'] })),
            IT(MB('장면마다 알맞은 신호 이름을 이으세요.', [['하루 수십 번 위치·연락 확인', '집착'], ['휴대폰 대화 검사', '디지털 감시'], ['친구를 못 만나게 함', '고립시키기'], ['"헤어지면 가만 안 둬"', '위협']], [], { axis: ['처음', '나중'] }),
              MB('장면마다 알맞은 신호 이름을 이으세요(두 개).', [['휴대폰 대화 검사', '디지털 감시'], ['"헤어지면 가만 안 둬"', '위협']], [], { axis: ['처음', '나중'] }),
              MB('장면마다 알맞은 신호 이름을 이으세요(함정 카드가 섞여 있어요).', [['하루 수십 번 위치·연락 확인', '집착'], ['휴대폰 대화 검사', '디지털 감시'], ['친구를 못 만나게 함', '고립시키기'], ['"헤어지면 가만 안 둬"', '위협']], ['사랑의 증거', '관심 표현'], { axis: ['처음', '나중'] }),
              { conclude: '데이트폭력은 잦은 연락 요구처럼 사랑으로 보이는 통제에서 시작해 점점 심해질 수 있어요. 잘못은 통제한 사람에게 있고, 어느 단계에서든 도움을 청할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단계마다 도움을 청할 수 있는 사람을 써요.', columns: ['단계', '도움을 청할 사람'], cells: [['잦은 연락 요구', ''], ['친구 만남 막기·휴대폰 검사', ''], ['위협', '']], answer: '(예) 믿는 친구·보호자, 담임·상담 선생님, 보호자·학교·경찰' }],
          easy: [{ type: 'choice', prompt: '휴대폰 대화를 검사하는 것은?', options: ['사랑의 증거', '통제의 신호'], answer: '통제의 신호' }] },
        notes: '사례는 가상이고 장면은 신체 폭력을 자세히 묘사하지 않는다. ' + SAFE_NOTE,
      }),
      M('act.friend-dilemma', {
        title: '친구의 연애를 걱정하는 갈림길', method: '친구의 데이트폭력 신호를 알게 된 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 수아에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 견주는 근거까지 고르고, 셋째 문항에서 수아가 "괜찮아"라고 할 때의 다음 말을 고른다.' },
        activity: {
          title: '친구의 연애를 걱정하는 갈림길', tool: 'dilemma',
          teacher: '"수아가 웃으며 \'사랑해서 그렇대\'라고 말했어요. 친구인 나는 끼어들어도 될까요?" 학생마다 한 길을 끝까지 간 뒤 다른 길과 견주게 한다. "연인 일은 남이 끼어들 일이 아니다"라는 말이 나오면 "수아가 친구 모임에도 못 나오게 됐다면, 그건 둘만의 일일까요?"라고 되묻는다. 혼자 따지거나 다그치기보다 들어 주고, 수아의 선택을 존중하며, 믿는 어른과 잇는 것이 안전하다는 점을 짚는다.',
          task: '가상 친구 수아의 연인이 휴대폰을 검사한다는 것을 알게 된 장면에서 길을 골라 결과를 따라가고, 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '수아의 이야기를 들은 장면이에요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '수아의 이야기를 들은 장면이에요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '수아의 이야기', D1, [['listen', 'name', 'route'], ['ignore', 'listen2', 'adult'], ['confront', 'sorryL', 'adult2']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '수아가 "넌 내 편이지? 남자친구 욕하지 마"라고 할 때의 장면을 따라가세요.', toolOptions: { title: '내 편이지?', scene: { text: '수아가 "남자친구 욕하지 마. 넌 내 편이지?"라고 한다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'side', text: '"응, 난 네 편이야. 그래서 네가 안전했으면 해"', result: '수아가 고개를 끄덕이며 마음을 연다.', impact: [{ who: '수아', text: '편이 있다고 느낀다', tone: 1 }], ending: '수아 편에 서면서 안전을 말했어요.' },
              { id: 'attack', text: '"그런 애를 왜 만나? 너도 참 답답하다"', result: '수아가 서운해하며 입을 닫는다.', impact: [{ who: '수아', text: '탓을 듣는다', tone: -1 }], why: '수아를 답답하다고 탓하면 이야기할 곳이 사라져요.' }] }, reasons: [{ id: 'q1', text: '탓하지 않고 수아의 편이 되어 준다' }, { id: 'q2', text: '수아가 판단을 잘못했으니 나무란다', why: '잘못은 통제한 쪽에 있어요. 수아를 나무라지 않아요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['side']], reasons: ['q1'] } },
              { prompt: '수아에게 할 말을 고르세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '수아가 "괜찮아, 별일 아니야"라고 할 때의 장면을 따라가세요.', toolOptions: { title: '"괜찮아"라고 할 때', scene: { text: '이야기를 나눈 뒤 수아가 "괜찮아, 별일 아니야. 신경 쓰지 마"라고 한다.', ask: '다음 말로 알맞은 것은?', motif: 'house', choices: [
              { id: 'door', text: '"알았어. 언제든 다시 얘기하고 싶으면 말해 줘. 상담 선생님도 있어"', result: '수아가 "고마워"라고 한다.', impact: [{ who: '수아', text: '도움의 문이 열려 있다', tone: 1 }], ending: '수아의 뜻을 존중하며 도움의 문을 열어 두었어요.' },
              { id: 'drop', text: '"그래, 네가 괜찮다면 다시는 안 물어볼게"', result: '수아는 다시 말을 꺼내기 어려워진다.', impact: [{ who: '수아', text: '말할 곳이 줄어든다', tone: -1 }], why: '"괜찮아"는 아직 말하기 어렵다는 뜻일 수 있어요. 문을 열어 두어요.' }] }, reasons: [{ id: 'k1', text: '친구의 결정을 존중하면서 도움받을 길을 알려 준다' }, { id: 'k2', text: '친구가 괜찮다면 아무것도 안 해도 된다', why: '안전이 걸린 일이면 믿는 어른과 의논할 수 있어요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['door']], reasons: ['k1'] }, conclude: '친구의 데이트폭력 신호를 알면 탓하지 않고 들어 주며, 친구의 선택을 존중하면서 믿는 어른·상담 선생님과 이어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 "사랑해서 그런 거래"라고 할 때 탓하지 않고 할 첫 말을 써요.' }] },
        notes: '학생 주변의 실제 사례를 묻지 않는다. 친구를 혼자 돕다 위험해지지 않도록 늘 어른과 잇는 길을 바른 길로 둔다. ' + SAFE_NOTE,
      }),
      M('act.campaign-design', {
        title: '데이트폭력 예방 캠페인 카드', method: '구호와 신호 그림으로 캠페인 카드 세 장 만들기', tool: 'collage', minutes: 28,
        levels: { easy: '카드 세 장 모두 조각 2개 이상과 점검 2항목으로 꾸미고, 구호는 활동지 보기에서 고른다.', base: '카드 세 장(구호·위험 신호·도움 경로)을 조각과 점검 3항목으로 꾸미고, 구호와 문구는 활동지에 직접 쓴다.', challenge: '셋째 카드 점검에 \'보는 대상(중학생)에 맞춘 까닭을 정했다\'가 더해지고 조각을 더 많이 붙인다.' },
        activity: {
          title: '데이트폭력 예방 캠페인 카드', tool: 'collage',
          teacher: '"\'사랑은 감시가 아니다\' — 이 구호를 중학생이 복도에서 3초 만에 알아보게 하려면 어떤 그림이 좋을까요?" 카드마다 콜라주 판에 그림을 꾸미고, 구호와 문구는 활동지에 쓴다고 알려 준다. "피해자가 조심하자" 같은 문구가 나오면 "조심해야 할 사람은 누구일까요? 통제하는 사람에게 할 말로 바꾸면요?"라고 되묻는다. 마지막 카드에는 믿는 어른·학교 상담과 학교가 확인한 지역 상담 번호 칸을 꼭 넣는다.',
          task: '"사랑은 감시가 아니다" 같은 구호와 신호 그림으로 데이트폭력 예방 캠페인 카드 세 장(구호·위험 신호·도움 경로)을 만들어요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '카드 ①(구호): 구호를 돋보이게 할 그림을 조각으로 꾸미고 스스로 점검하세요.', toolOptions: { maxPieces: 16 }, target: { selfCheck: ['구호를 정해 활동지에 썼다', '통제를 사랑처럼 꾸미는 그림이 없다', '한눈에 알아볼 수 있게 꾸몄다'], minPieces: 3 } },
              { prompt: '카드 ①(구호): 그림을 조각 2개 이상으로 꾸미고 스스로 점검하세요.', target: { selfCheck: ['구호를 골라 활동지에 썼다', '한눈에 알아볼 수 있게 꾸몄다'], minPieces: 2 } }),
            IT({ prompt: '카드 ②(위험 신호): 빨강 세모로 위험 신호 자리를 표시하고 스스로 점검하세요.', toolOptions: { maxPieces: 16 }, target: { has: [{ shape: 'triangle', color: '빨강', min: 1 }], selfCheck: ['위험 신호 두 가지를 활동지에 썼다', '피해자를 탓하는 말이 없다', '신호마다 그림 자리를 두었다'], minPieces: 3 } },
              { prompt: '카드 ②(위험 신호): 빨강 세모를 붙이고 스스로 점검하세요.', target: { has: [{ shape: 'triangle', color: '빨강', min: 1 }], selfCheck: ['위험 신호 하나를 활동지에 썼다', '피해자를 탓하는 말이 없다'], minPieces: 2 } }),
            IT({ prompt: '카드 ③(도움 경로): 도움받을 곳마다 동그라미를 하나씩(셋 이상) 붙이고 스스로 점검하세요.', toolOptions: { maxPieces: 16 }, target: { has: [{ shape: 'circle', min: 3 }], selfCheck: ['믿는 어른·학교 상담을 활동지에 썼다', `지역 상담 번호 칸(${LOCAL})을 남겼다`, '누구나 알아볼 수 있게 꾸몄다'] } },
              { prompt: '카드 ③(도움 경로): 동그라미 셋 이상을 붙이고 스스로 점검하세요.', target: { has: [{ shape: 'circle', min: 3 }], selfCheck: ['믿는 어른·학교 상담을 활동지에 썼다', `지역 상담 번호 칸(${LOCAL})을 남겼다`] } },
              { prompt: '카드 ③(도움 경로): 동그라미 셋 이상을 붙이고, 보는 대상에 맞춘 까닭까지 스스로 점검하세요.', target: { has: [{ shape: 'circle', min: 3 }], selfCheck: ['믿는 어른·학교 상담을 활동지에 썼다', `지역 상담 번호 칸(${LOCAL})을 남겼다`, '보는 대상(중학생)에 맞춘 까닭을 정했다'], pieces: { min: 5 } } },
              { conclude: '좋은 캠페인은 통제를 사랑으로 꾸미지 않고, 위험 신호를 알아보게 하며, 피해자를 탓하지 않고 도움 경로를 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '데이트폭력 예방 캠페인 문구로 알맞은 것은?', options: ['질투는 사랑의 증거', '사랑은 감시가 아니다', '연인 일은 둘만의 일'], answer: '사랑은 감시가 아니다' }, { type: 'table', prompt: '캠페인 카드 세 장의 문구를 써요.', columns: ['카드', '문구'], cells: [['① 구호', ''], ['② 위험 신호', ''], ['③ 도움 경로', '']], answer: `(예) 사랑은 감시가 아니다, 휴대폰 검사·만남 막기는 통제, 믿는 어른·학교 상담·${LOCAL}` }],
          easy: [{ type: 'choice', prompt: '캠페인 구호로 알맞은 것은?', options: ['사랑은 감시가 아니다', '질투는 사랑의 증거'], answer: '사랑은 감시가 아니다' }] },
        notes: '콜라주 교구는 글을 쓰지 못해 구호·문구는 활동지에 쓴다. 지역 상담 번호는 학교가 확인해 채운다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.equal-rules', {
        title: '평등한 교제 규칙 쓰기', method: '평등한 교제 규칙을 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 시작 말을 받아 규칙 3가지를 쓰고 기준 2항목을 점검한다.', base: '규칙 5가지를 쓰고 기준표 3항목(구체성·서로 같은 규칙·통제 없음)으로 점검한다.', challenge: '규칙이 깨졌을 때 할 행동을 한 문장 덧붙인다(셋째 출구 질문).' },
        wrap: {
          teacher: '"\'서로 사랑하기\'라는 규칙으로 내일 무엇을 지킬 수 있을까요?" 막연한 규칙과 \'답장이 늦어도 재촉하지 않는다\'를 견주어 읽게 한다. "남자는 지켜 주고 여자는 따라야지"처럼 한쪽만 지키는 규칙이 나오면 "두 사람에게 같은 규칙인가요?"라고 되묻는다. 규칙은 가상 커플을 위한 것이고 내 연애를 쓰지 않는다고 말한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '가상 커플을 위한 평등한 교제 규칙 5가지를 한 문장씩 쓰세요.', minChars: 60, maxChars: 300, minSentences: 5, maxSentences: 6, title: '평등한 교제 규칙' }, prompt: '가상 커플을 위한 평등한 교제 규칙 5가지를 쓰고 기준표로 점검해요.', target: { selfCheck: ['지킬 행동이 구체적이다', '두 사람에게 같은 규칙이다', '감시·통제하는 규칙이 없다'] }, difficulty: 0.15 },
              { prompt: '틀을 채워 규칙 3가지를 쓰고 점검해요.', toolOptions: { minChars: 30, minSentences: 3, maxSentences: 4, starter: '1. 서로 ___ 하지 않는다. 2. 친구와의 시간을 ___. 3. 싫다고 하면 ___.' }, target: { selfCheck: ['지킬 행동이 구체적이다', '두 사람에게 같은 규칙이다'] } }),
            { type: 'choice', prompt: '평등한 교제 규칙으로 알맞은 것은?', options: ['상대의 휴대폰 비밀번호를 서로 공유한다', '답장이 늦어도 재촉하지 않는다', '친구를 만날 때 연인에게 허락받는다'], answer: 1, difficulty: 0.15, explain: '서로의 시간과 사생활을 존중하는 규칙이 평등한 규칙이에요.' },
            { type: 'short', prompt: '규칙이 깨졌을 때(예: 계속 감시할 때) 할 행동을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '평등한 교제 규칙',
          items: [
            { type: 'short', prompt: '평등한 교제 규칙 가운데 가장 중요한 하나를 써요.' },
            { type: 'short', prompt: '통제처럼 보이는 규칙("비밀번호 공유하기")을 평등한 규칙으로 고쳐 써요.' },
          ],
        },
        notes: '규칙은 가상 커플을 위한 것이다. ' + SAFE_NOTE,
      }),
      M('wrap.help-map', {
        title: '데이트폭력 도움 경로 지도', method: '학교·동네 칸 지도에 도움받을 곳 꽂기', tool: 'map', minutes: 7,
        levels: { easy: '장소 이름이 보이는 지도에 핀 2개(상담실·지역 상담 기관)를 꽂는다.', base: '장소 이름을 숨긴 지도에서 범례 기호를 보고 핀 2개를 꽂은 뒤, 고르기로 나머지 도움처를 고른다.', challenge: '핀을 꽂은 뒤 기관마다 하는 일을 활동지 표에 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"수아가 \'어디로 가야 할지 모르겠어\'라고 한다면, 학교 안과 밖에서 어디를 알려 줄까요?" 핀을 꽂을 때마다 그곳에서 무엇을 도와주는지 한 마디씩 말하게 한다. "상담실은 큰일이 났을 때만 가는 곳"이라는 말에는 "신호가 작을 때 가면 더 쉬울까요, 어려울까요?"라고 되묻는다. 지역 상담 기관의 이름과 번호는 학교가 확인한 칸으로 함께 본다. 지도는 가상의 학교와 동네다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, HELP, { names: false }), prompt: '데이트폭력이 걱정될 때 학교 안에서 상담받을 곳에 핀을 꽂아요.', target: { place: '상담실(Wee 클래스)' }, difficulty: 0.15 },
              { prompt: '학교 안에서 상담받을 곳에 핀을 꽂아요(이름이 보여요).', toolOptions: Object.assign({}, HELP, { names: true }) }),
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, HELP, { names: false }), prompt: `학교 밖에서 전문 상담을 받을 수 있는 곳(${LOCAL})에 핀을 꽂아요.`, target: { place: '지역 상담 기관' }, difficulty: 0.15 },
              { prompt: '학교 밖에서 전문 상담을 받을 수 있는 곳에 핀을 꽂아요(이름이 보여요).', toolOptions: Object.assign({}, HELP, { names: true }) }),
            { type: 'choice', prompt: '데이트폭력이 걱정될 때 도움을 청할 수 있는 사람으로 알맞지 않은 것은?', options: ['담임·상담 선생님', '보호자', '사정을 모르는 단톡방 사람들'], answer: 2, difficulty: 0.15, explain: '단톡방에 올리면 이야기가 퍼질 수 있어요. 믿는 어른과 상담 기관으로 이어요.' },
            { type: 'short', prompt: '상담실과 지역 상담 기관이 하는 일을 한 줄씩 써요.' },
          ],
        },
        worksheet: {
          title: '데이트폭력 도움 경로',
          items: [
            { type: 'table', prompt: '도움받을 곳과 하는 일을 써요.', columns: ['도움받을 곳', '하는 일'], cells: [['담임·상담 선생님(Wee 클래스)', ''], ['보호자', ''], [`지역 상담 기관 ${LOCAL}`, '']], answer: '(예) 이야기를 듣고 안전을 함께 살핌, 곁에서 함께 의논, 전문 상담·지원' },
            { type: 'short', prompt: '친구에게 도움 경로를 알려 줄 때 할 말을 써요.' },
          ],
        },
        notes: '지도는 가상이다. 학생의 집·다니는 곳을 묻지 않는다. 지도 교구는 문항마다 핀 하나라 도움처 두 곳을 출구 질문 둘로 나누고 나머지는 고르기로 다룬다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 12-g8-media-gender.js ====
  // ==== 8학년 · 미디어 속 성 상품화와 고정관념 (gender.m.g8-media-gender) ====
  {
    const M = MK('g8-media-gender', [8]);
    const THUMB = [
      { id: 't1', text: '얼굴 없이 다리만 크게 잘라 보여 준 썸네일', ok: true }, { id: 't2', text: '"몸매 공개!" 큰 글씨와 몸 일부만 확대한 썸네일', ok: true },
      { id: 't3', text: '허리만 잘라 "이 정도는 돼야"라고 쓴 썸네일', ok: true },
      { id: 't4', text: '가수의 얼굴과 무대 전체를 함께 보여 준 썸네일' }, { id: 't5', text: '선수의 기술 동작을 경기 장면으로 보여 준 썸네일' },
      { id: 't6', text: '진행자가 소개할 책을 들고 웃는 썸네일' },
    ];
    const ROLE = [['요리·돌봄 — 여성', 8], ['요리·돌봄 — 남성', 2], ['운전·기술 — 여성', 2], ['운전·기술 — 남성', 8]];
    const Q5 = ['누가 만들었나', '누구를 노렸나', '무엇이 빠졌나', '누가 이득인가', '어떤 기분이 드나'];
    const AD1 = [['누가 만들었나', '판매를 늘리려는 음료 회사'], ['누구를 노렸나', '몸매를 신경 쓰는 10대'], ['무엇이 빠졌나', '여러 체형의 평범한 사람들'], ['누가 이득인가', '음료를 더 많이 파는 회사'], ['어떤 기분이 드나', '내 몸이 부족하다는 불안']];
    const AD2 = [['누가 만들었나', '장난감을 파는 회사'], ['누구를 노렸나', '아이와 장난감을 사 주는 보호자'], ['무엇이 빠졌나', '로봇을 고르는 여자아이, 인형을 고르는 남자아이'], ['누가 이득인가', '성별마다 따로 파는 회사'], ['어떤 기분이 드나', '"이건 내 것이 아니구나" 하는 위축']];
    // 시청자 갈림길(깊이 3)
    const D1 = { text: '가상 인물 하린의 영상 추천 목록에 몸을 부분으로 잘라 강조한 선정적인 썸네일이 자꾸 뜬다.', ask: '하린은 어떻게 할까?', motif: 'house', choices: [
      { id: 'watch', text: '궁금해서 계속 눌러 본다', result: '비슷한 영상이 추천 목록을 더 많이 채운다.', impact: [{ who: '하린', text: '보고 싶지 않은 영상이 늘어난다', tone: -1 }], why: '누를수록 추천이 그쪽으로 기울어요. 내 선택은 미디어에 신호를 보내요.', end: '추천 목록이 선정적인 영상으로 기울었어요.',
        next: { text: '하린은 추천 목록이 불편해졌다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'fix', text: '"관심 없음"을 누르고 보고 싶은 분야를 찾아본다', result: '추천 목록이 조금씩 바뀐다.', impact: [{ who: '하린', text: '목록을 되찾기 시작한다', tone: 1 }], end: '늦었지만 신호를 바꿨어요.',
            next: { text: '친구가 "그런 거 다들 봐"라고 한다.', choices: [
              { id: 'say', text: '"난 사람을 몸 부분으로만 보는 영상이 불편해"라고 말한다', result: '친구가 "그건 그렇네"라며 생각해 본다.', impact: [{ who: '친구', text: '다르게 볼 계기가 생긴다', tone: 1 }], ending: '내 기준을 말로도 밝혔어요.' },
              { id: 'back', text: '다들 보니까 다시 눌러 본다', result: '추천이 다시 그쪽으로 기운다.', impact: [{ who: '하린', text: '목록이 다시 기운다', tone: -1 }], why: '여럿이 본다고 영향이 없어지지 않아요.' }] } },
          { id: 'more', text: '불편해도 그냥 둔다', result: '추천 목록은 그대로다.', impact: [{ who: '하린', text: '불편함이 이어진다', tone: -1 }], why: '불편한 추천은 내가 바꿀 수 있어요.' }] } },
      { id: 'hide', text: '"관심 없음"을 누른다', result: '비슷한 썸네일이 덜 보인다.', impact: [{ who: '하린', text: '추천 목록이 편해진다', tone: 1 }], end: '"관심 없음"으로 신호를 보냈어요.',
        next: { text: '그래도 미성년자도 보는 곳에 이런 썸네일이 올라오는 것이 걸린다.', ask: '더 할 수 있는 것은?', choices: [
          { id: 'report', text: '신고·피드백으로 "몸을 대상화한 썸네일"이라고 남긴다', result: '플랫폼에 시청자의 의견이 전달된다.', impact: [{ who: '다른 시청자', text: '함께 바꿀 신호가 쌓인다', tone: 1 }], end: '시청자로서 의견을 남겼어요.',
            next: { text: '하린은 피드백 글을 어떻게 쓸지 고민한다.', choices: [
              { id: 'calm', text: '"사람을 몸의 부분으로만 보이는 썸네일은 불편합니다"처럼 차분히 쓴다', result: '무엇이 문제인지 분명히 전해진다.', impact: [{ who: '플랫폼', text: '고칠 점을 알게 된다', tone: 1 }], ending: '분명하고 차분한 피드백을 남겼어요.' },
              { id: 'insult', text: '출연자를 욕하는 글을 쓴다', result: '출연자에게 상처가 되고 문제는 흐려진다.', impact: [{ who: '출연자', text: '비난을 받는다', tone: -1 }], why: '비판은 표현 방식에 하고, 사람을 비하하지 않아요.' }] } },
          { id: 'enough', text: '내 목록만 괜찮으면 됐다', result: '하린의 목록은 편하지만 다른 사람들에겐 그대로다.', impact: [{ who: '다른 시청자', text: '변화가 없다', tone: 0 }], why: '틀린 길은 아니지만, 피드백은 다른 시청자에게도 신호가 돼요.' }] } },
      { id: 'feedback', text: '바로 신고·피드백을 남긴다', result: '플랫폼에 의견이 전달되고 비슷한 썸네일이 덜 보인다.', impact: [{ who: '하린과 다른 시청자', text: '함께 바꿀 신호가 생긴다', tone: 1 }], ending: '처음부터 시청자의 목소리를 냈어요.' }] };
    const R1 = [{ id: 'r1', text: '내가 누르고 넘기는 선택이 미디어에 신호를 보낸다' }, { id: 'r2', text: '사람을 몸의 부분으로만 보이는 표현은 바꿀 수 있다' },
      { id: 'r3', text: '미디어는 재미일 뿐 영향이 없다', why: '자주 보는 표현은 생각과 기준에 영향을 줄 수 있어요.' }, { id: 'r4', text: '보는 사람이 원하니까 괜찮다', why: '원한다는 것이 사람을 상품처럼 써도 된다는 뜻은 아니에요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.thumbnail-scan', {
        title: '썸네일 속 몸 표현 찾기', method: '가상 썸네일 묘사 카드에서 몸을 부분으로 자른 표현 고르기', tool: 'wordcards', minutes: 5,
        levels: { easy: '카드 3장(그런 표현 1장)만 교사가 읽어 주고 함께 고른다.', base: '카드 6장에서 몸을 부분으로 잘라 강조한 썸네일 3장을 고르는 시연을 보고 까닭을 말한다.', challenge: '고른 썸네일 하나를 같은 내용이 사람을 존중하게 보이도록 바꾸는 말을 짝에게 한다.' },
        intro: {
          teacher: '"얼굴은 없고 다리만 크게 잘라 낸 썸네일, 이 영상은 사람을 무엇으로 보이게 할까요?" 가상 썸네일 묘사 카드 6장을 띄우고 시연 단추로 몸을 부분으로 잘라 강조한 세 장이 담기는 모습을 보인다. "눈길을 끌려면 어쩔 수 없다"는 말이 나오면 "가수의 무대 전체를 보여 준 썸네일도 눈길을 끌지 않나요? 무엇이 다를까요?"라고 되묻는다. 출연자를 탓하는 것이 아니라 표현 방식을 따진다는 점을 먼저 밝힌다. 썸네일은 말로만 묘사하고 실제 이미지는 보이지 않는다.',
          student: '가상 영상 썸네일 묘사 카드에서 사람을 몸의 부분으로 잘라 강조하는 표현을 골라요.',
          demo: { tool: 'wordcards', options: PB('', '몸을 부분으로 자른 표현', THUMB).toolOptions, sequence: [PB('', '', THUMB).target] },
          art: { draw: 'a paper-cut grid of six blank paper video thumbnails with a paper magnifying glass hovering over them, no people drawn', banner: '무엇을 보여 주고 있나?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 썸네일·영상을 보여 주지 않고 말로 묘사한 카드만 쓴다. 출연자의 외모를 평가하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.role-count', {
        title: '광고 속 성별 역할 세기', method: '가상 광고 장면을 세어 막대그래프로 만들기', tool: 'chart', minutes: 7,
        levels: { easy: '장면 2종(요리·돌봄)의 막대 2개만 시연으로 세워 본다.', base: '장면 2종 × 성별 2 = 막대 4개를 세우는 시연을 보고 두 장면의 차이를 읽는다.', challenge: '그래프가 보여 주는 고정관념을 짝에게 한 문장으로 말한다.' },
        intro: {
          teacher: '"가상 광고 10편에서 요리·돌봄 장면에는 누가, 운전·기술 장면에는 누가 더 자주 나왔을까요?" 시연 단추로 막대 네 개가 세워지는 모습을 보인다. "원래 그런 거 아니에요?"라는 말이 나오면 "광고가 늘 이렇게 보여 주면, 보는 사람은 \'원래\'를 어디서 배울까요?"라고 되묻는다. 자료는 수업용 가상 자료이고, 실제로 누가 무엇을 잘하는지가 아니라 광고가 무엇을 반복해 보여 주는지를 센다고 짚는다.',
          student: '가상 광고 10편 속 요리·돌봄 장면과 운전·기술 장면의 등장 성별을 세어 막대그래프로 나타내고 차이를 읽어요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '가상 광고 10편 — 장면별 등장 성별', unit: '편', xLabel: '장면·등장 성별', yLabel: '광고 수', data: ROLE, max: 10 }, sequence: [{ values: ROLE.map((r) => r[1]) }] },
          art: { draw: 'a paper-cut board with four paper bars in two pairs, small paper icons of a cooking pot and a steering wheel under them', banner: '광고는 무엇을 되풀이할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '값은 모두 가상이다. 그래프는 광고 속 표현을 세는 것이지 성별의 능력을 말하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.question-ladder', {
        title: '미디어에 던지는 다섯 질문', method: '다섯 질문 가지에 가상 광고 분석 카드 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '질문 3개(누가 만들었나·무엇이 빠졌나·어떤 기분이 드나)에 분석 카드를 잇고, 놓으면 바로 맞는지 알려 준다.', base: '질문 5개 가지에 분석 카드를 잇는다(함정 카드가 하나 섞임).', challenge: '셋째 문항에서 질문을 던진 뒤 바뀐 판단 카드만 고르고, 활동지에 내 판단의 변화를 쓴다.' },
        activity: {
          title: '미디어에 던지는 다섯 질문', tool: 'mindmap',
          teacher: '"이 광고를 누가 만들었고, 무엇을 빼놓았을까요?" 가상 음료 광고(날씬한 모델이 \'여름엔 이 몸매\'라는 문구와 음료를 든다)를 말로 소개하고 다섯 질문 가지를 펼친다. "광고는 그냥 재미"라는 학생에게 "그 광고를 본 뒤 내 몸이 부족하다고 느꼈다면, 그 기분은 누구에게 이득일까요?"라고 되묻는다. 질문을 던지는 것은 광고를 싫어하라는 것이 아니라 스스로 판단할 힘을 갖는 것이라고 짚는다.',
          task: '가상 광고 두 편을 다섯 질문(누가 만들었나·누구를 노렸나·무엇이 빠졌나·누가 이득인가·어떤 기분이 드나)으로 분석해 가지에 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('가상 음료 광고("여름엔 이 몸매")를 다섯 질문 가지에 분석 카드로 이으세요.', AD1, ['광고는 그냥 재미일 뿐이다'], { topic: '가상 음료 광고' }),
              MB('가상 음료 광고를 세 질문 가지에 분석 카드로 이으세요.', [AD1[0], AD1[2], AD1[4]], [], { topic: '가상 음료 광고' })),
            IT(MB('가상 장난감 광고(남자아이는 로봇, 여자아이는 인형만)를 다섯 질문 가지에 이으세요.', AD2, ['아이들이 원래 그렇게 좋아한다'], { topic: '가상 장난감 광고' }),
              MB('가상 장난감 광고를 세 질문 가지에 분석 카드로 이으세요.', [AD2[0], AD2[2], AD2[4]], [], { topic: '가상 장난감 광고' })),
            IT(PB('다섯 질문을 던진 뒤 바뀐 판단만 골라 담으세요.', '질문 뒤 바뀐 판단', [
              { id: 'j1', text: '광고 속 몸이 건강의 기준은 아니다', ok: true }, { id: 'j2', text: '빠진 사람들이 있다는 것이 보인다', ok: true },
              { id: 'j3', text: '광고는 무언가를 팔려고 만든 것이다', ok: true }, { id: 'j4', text: '광고 속 모습대로 바뀌어야 한다' },
              { id: 'j5', text: '광고는 아무 영향이 없다' }], { topic: '질문 뒤 내 판단' }),
              PB('다섯 질문을 던진 뒤 바뀐 판단만 골라 담으세요(두 장).', '질문 뒤 바뀐 판단', [
                { id: 'j1', text: '광고 속 몸이 건강의 기준은 아니다', ok: true }, { id: 'j3', text: '광고는 무언가를 팔려고 만든 것이다', ok: true },
                { id: 'j4', text: '광고 속 모습대로 바뀌어야 한다' }], { topic: '질문 뒤 내 판단' }),
              null,
              { conclude: '누가 만들었나·누구를 노렸나·무엇이 빠졌나·누가 이득인가·어떤 기분이 드나 — 다섯 질문은 미디어 속 성 상품화와 고정관념을 알아보는 힘이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '다섯 질문 가운데 하나를 골라, 그 질문으로 바뀐 내 판단을 한 문장으로 써요.' }] },
        notes: '광고는 모두 가상이고 말로만 묘사한다. 모델의 외모를 평가하지 않는다. ' + SAFE_NOTE,
      }),
      M('act.ad-remake', {
        title: '고정관념 없는 광고 다시 만들기', method: '가상 장난감 광고를 성별 구분 없이 다시 꾸미기', tool: 'collage', minutes: 15,
        levels: { easy: '세 문항 모두 조각 2개 이상과 점검 2항목으로 꾸미고, 문구 바꾸기는 활동지 보기에서 고른다.', base: '배경(따뜻한 색과 차가운 색 맞닿게)·인물 자리·문구 자리를 꾸미고 점검 3항목을 표시하며, 문구는 활동지에 직접 쓴다.', challenge: '셋째 문항에서 조각을 더 많이 붙이고, 바꾼 까닭 두 가지를 정했다는 점검이 더해진다.' },
        activity: {
          title: '고정관념 없는 광고 다시 만들기', tool: 'collage',
          teacher: '"\'남자아이는 로봇, 여자아이는 인형\' 광고를 누구나 고를 수 있는 광고로 바꾸면 무엇이 달라질까요?" 색·인물 자리·문구 자리 조각으로 광고 화면을 다시 꾸미게 하고, 문구는 활동지에 쓴다. "분홍은 여자 색"이라는 말이 나오면 "색에 성별이 붙어 있을까요, 광고가 붙여 온 걸까요?"라고 되묻는다. 특정 색을 쓰지 말라는 것이 아니라 여러 색을 함께 쓰며 누구나 고를 수 있게 보이는 것이 목표라고 짚는다.',
          task: '가상 장난감 광고를 색·인물 자리·문구 조각으로 성별 구분 없이 누구나 고를 수 있는 광고로 다시 꾸며요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '광고 배경: 따뜻한 색과 차가운 색 조각을 맞닿게 놓아 누구나 고르는 느낌의 배경을 꾸미세요.', toolOptions: { maxPieces: 16 }, target: { contrast: 'warm-cool', selfCheck: ['한쪽 성별의 색으로만 꾸미지 않았다', '여러 색을 함께 썼다'] } },
              { prompt: '광고 배경을 조각 2개 이상으로 꾸미고 스스로 점검하세요.', target: { selfCheck: ['여러 색을 함께 썼다', '한쪽 성별의 색으로만 꾸미지 않았다'], minPieces: 2 } }),
            IT({ prompt: '인물 자리: 장난감을 고르는 아이 자리를 동그라미 둘 이상으로 놓고 스스로 점검하세요.', toolOptions: { maxPieces: 16 }, target: { has: [{ shape: 'circle', min: 2 }], selfCheck: ['여러 아이가 함께 고르는 모습이다', '장난감을 성별로 나누지 않았다', '아이의 외모를 강조하지 않았다'] } },
              { prompt: '인물 자리에 동그라미 둘 이상을 놓고 스스로 점검하세요.', target: { has: [{ shape: 'circle', min: 2 }], selfCheck: ['여러 아이가 함께 고르는 모습이다', '장난감을 성별로 나누지 않았다'] } }),
            IT({ prompt: '문구 자리: 긴 네모 조각으로 문구 자리를 만들고, 바꾼 문구를 활동지에 쓴 뒤 스스로 점검하세요.', toolOptions: { maxPieces: 16 }, target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['"남자아이용·여자아이용" 같은 말을 뺐다', '누구나 고를 수 있다는 문구를 썼다', '바꾼 광고를 처음 광고와 견주어 보았다'], minPieces: 4 } },
              { prompt: '문구 자리에 긴 네모 조각을 붙이고 스스로 점검하세요.', target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['"남자아이용·여자아이용" 같은 말을 뺐다', '누구나 고를 수 있다는 문구를 골랐다'] } },
              { prompt: '문구 자리를 만들고 광고 전체를 6조각 이상으로 완성한 뒤, 바꾼 까닭까지 스스로 점검하세요.', target: { has: [{ shape: 'rect', min: 1 }], pieces: { min: 6 }, selfCheck: ['"남자아이용·여자아이용" 같은 말을 뺐다', '누구나 고를 수 있다는 문구를 썼다', '바꾼 까닭 두 가지를 정했다'] } },
              { conclude: '고정관념 없는 광고는 색·인물·문구에서 성별로 나누지 않고, 누구나 고를 수 있다고 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '바꾼 광고 문구를 쓰고, 바꾼 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '고정관념 없는 광고 문구는?', options: ['남자아이라면 로봇!', '누구나 좋아하는 걸 골라요'], answer: '누구나 좋아하는 걸 골라요' }] },
        notes: '콜라주 교구는 글을 쓰지 못해 문구는 활동지에 쓴다. 특정 색을 금지하지 않고 여러 색을 함께 쓰는 것을 점검한다. ' + SAFE_NOTE,
      }),
      M('act.critique-review', {
        title: '가상 뮤직비디오 비평 쓰기', method: '미디어 비평 글을 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 시작 말을 받아 근거 장면·영향 판단·대안을 한두 문장씩 쓴다.', base: '6문장 비평을 나누어 쓰고 기준표 4항목(근거 장면·영향 판단·대안 제시·비하 없음)으로 점검한다.', challenge: '넷째 문항에서 반대 의견("그냥 예술 표현이다") 하나를 소개하고 답한다.' },
        activity: {
          title: '가상 뮤직비디오 비평 쓰기', tool: 'rubric-writing',
          teacher: '"이 뮤직비디오에서 여성 출연자는 대사 없이 몸의 일부만 비추는 장면으로만 나오고, 남성 출연자는 노래하고 춤추는 장면이 중심이에요. 무엇을 근거로 비평할 수 있을까요?" 가상 뮤직비디오를 말로만 소개하고 쓰게 한다. "출연자가 원해서 찍었으니 문제없다"는 학생에게 "비평은 출연자가 아니라 장면을 만든 방식에 대한 것이에요. 카메라는 누구를 사람으로, 누구를 몸으로 보여 주나요?"라고 되묻는다. 출연자나 팬을 비하하는 말은 쓰지 않는다고 미리 정한다.',
          task: '가상 뮤직비디오 한 편을 근거 장면·영향 판단·대안 제시가 들어간 6문장 비평으로 쓰고, 비하하는 말이 없는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 비평의 근거가 되는 장면 두 가지를 두 문장으로 쓰세요.', toolOptions: { topic: '가상 뮤직비디오: 여성 출연자는 대사 없이 몸의 일부만 비추는 장면으로만 나오고, 남성 출연자는 노래하고 춤추는 장면이 중심이다. 비평의 근거가 될 장면 두 가지를 두 문장으로 쓰세요.', minChars: 40, maxChars: 200, minSentences: 2, maxSentences: 3, title: '비평 ① 근거 장면' }, target: { selfCheck: ['장면을 구체적으로 썼다', '출연자의 외모를 평가하지 않았다', '장면을 자세히 묘사하지 않았다'] } },
              { prompt: '틀을 채워 근거 장면을 쓰세요.', toolOptions: { minChars: 25, minSentences: 2, starter: '이 영상에서 여성 출연자는 ___. 남성 출연자는 ___.' }, target: { selfCheck: ['장면을 구체적으로 썼다', '출연자의 외모를 평가하지 않았다'] } }),
            IT({ prompt: '가운데: 이런 표현이 보는 사람에게 줄 수 있는 영향을 두 문장으로 쓰세요.', toolOptions: { topic: '이 뮤직비디오의 표현이 보는 사람(특히 청소년)에게 줄 수 있는 영향을 두 문장으로 쓰세요.', minChars: 40, maxChars: 200, minSentences: 2, maxSentences: 3, title: '비평 ② 영향 판단' }, target: { selfCheck: ['영향을 근거와 이어 썼다', '고정관념이나 대상화를 짚었다', '비하하는 말이 없다'], mustInclude: [['영향', '배우', '생각']] } },
              { prompt: '틀을 채워 영향을 쓰세요.', toolOptions: { minChars: 20, minSentences: 1, starter: '이런 장면을 자주 보면 ___ 라고 생각하게 될 수 있다.' }, target: { selfCheck: ['영향을 근거와 이어 썼다', '비하하는 말이 없다'] } }),
            IT({ prompt: '마무리: 만든 사람에게 제안할 대안을 두 문장으로 쓰세요.', toolOptions: { topic: '이 뮤직비디오를 만든 사람에게, 출연자 모두를 사람으로 보여 주는 대안을 두 문장으로 제안하세요.', minChars: 40, maxChars: 200, minSentences: 2, maxSentences: 3, title: '비평 ③ 대안 제시' }, target: { selfCheck: ['실제로 바꿀 수 있는 대안이다', '출연자 모두를 존중했다', '비하하는 말이 없다'] } },
              { prompt: '틀을 채워 대안을 쓰세요.', toolOptions: { minChars: 20, minSentences: 1, starter: '다음에는 ___ 장면으로 보여 주면 좋겠다.' }, target: { selfCheck: ['실제로 바꿀 수 있는 대안이다', '비하하는 말이 없다'] } }),
            IT({ prompt: '앞의 세 부분을 이어 6문장 비평을 완성하고 기준표 4항목으로 점검하세요.', toolOptions: { topic: '근거 장면·영향 판단·대안 제시를 이어 6문장 비평을 완성하세요.', minChars: 120, maxChars: 450, minSentences: 6, maxSentences: 7, title: '나의 미디어 비평', sample: '이 영상에서 여성 출연자는 대사 없이 몸의 일부만 비친다. 남성 출연자는 노래하고 춤추는 모습이 중심이다. 이런 장면을 자주 보면 여성은 보이는 몸이라는 생각을 배우게 될 수 있다. 보는 청소년은 그것이 보통이라고 여길 수도 있다. 다음에는 모든 출연자가 노래하고 표정을 보이는 장면으로 만들면 좋겠다. 이 비평은 출연자가 아니라 장면을 만든 방식에 대한 것이다.' }, target: { selfCheck: ['근거 장면이 있다', '영향 판단이 있다', '대안을 제시했다', '비하하는 말이 없다'] } },
              null,
              { prompt: '반대 의견("그냥 예술 표현이다") 하나를 소개하고 내 답을 두세 문장으로 쓰세요.', toolOptions: { topic: '반대 의견: "그냥 예술 표현이니 비평할 필요 없다." 이 의견을 소개하고 내 답을 두세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 2, maxSentences: 3, title: '반대 의견에 답하기' }, target: { selfCheck: ['반대 의견을 바르게 옮겼다', '근거를 들어 답했다', '상대를 비하하지 않았다'] } },
              { conclude: '좋은 미디어 비평은 근거 장면을 들고, 영향을 판단하며, 대안을 제시하고, 사람을 비하하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '좋은 미디어 비평 글의 조건으로 알맞은 것은?', options: ['출연자 외모를 평가한다', '근거 장면을 들고 영향과 대안을 쓴다', '싫다는 느낌만 쓴다'], answer: '근거 장면을 들고 영향과 대안을 쓴다' }, { type: 'short', prompt: '내 비평에서 가장 중요한 근거 장면 하나와 그 까닭을 써요.' }] },
        notes: '뮤직비디오는 가상이고 말로만 소개한다. 실제 영상을 틀지 않는다. 비평 대상은 표현 방식이며 출연자·팬을 비하하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.viewer-choice', {
        title: '시청자로서 행동 갈림길', method: '추천 목록 앞 시청자 행동 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '갈림 2번까지 가고 고를 때마다 영향이 바로 보인다.', base: '갈림 3번까지 가고 영향은 맞힌 뒤에 보인다. 끝에서 근거를 고른다.', challenge: '넷째 출구 질문에서 플랫폼에 보낼 피드백 문장을 쓴다.' },
        wrap: {
          teacher: '"하린의 추천 목록이 선정적인 영상으로 기운 까닭은 무엇일까요?" 갈림길을 끝까지 간 뒤 내가 누르는 것이 미디어에 신호를 보낸다는 점을 짚는다. "나 하나 바꾼다고 달라지나요?"라는 말에는 "추천 목록은 누구의 선택으로 만들어질까요?"라고 되묻는다. 피드백은 출연자를 욕하는 것이 아니라 표현 방식을 짚는 것이라고 말한다.',
          exitTicket: [
            (() => { const d = DIL({ easy: '두 번 골라 결과를 보고 근거를 고르세요.', base: '하린의 추천 목록 장면이에요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 가고 근거를 고르세요.' }, '하린의 추천 목록', D1, [['hide', 'report', 'calm'], ['watch', 'fix', 'say'], ['feedback']], R1, ['r1', 'r2']); return { type: 'tool', tool: 'dilemma', prompt: d.prompt, options: d.toolOptions, target: d.target, levels: { easy: d.levels.easy }, difficulty: 0.2 }; })(),
            { type: 'choice', prompt: '"미디어는 그냥 재미일 뿐 영향이 없다"는 말에 대한 판단으로 알맞은 것은?', options: ['맞다, 보는 것과 생각은 따로다', '자주 보는 표현은 생각과 기준에 영향을 줄 수 있다', '재미있으면 무엇이든 괜찮다'], answer: 1, difficulty: 0.15, explain: '되풀이해 보는 표현은 무엇이 보통인지에 대한 생각에 영향을 줘요.' },
            { type: 'short', prompt: '불편한 추천이 계속될 때 내가 할 행동 하나를 써요.' },
            { type: 'short', prompt: '플랫폼에 보낼 피드백 문장을 출연자를 비하하지 않고 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '시청자의 선택',
          items: [
            { type: 'check', prompt: '불편한 추천이 뜰 때 할 수 있는 것에 표시해요.', options: ['"관심 없음" 누르기', '신고·피드백 남기기', '보고 싶은 분야 찾아보기'] },
            { type: 'short', prompt: '내 선택이 미디어에 신호를 보낸다는 말을 내 말로 풀어 써요.' },
          ],
        },
        notes: '플랫폼마다 "관심 없음"·신고 메뉴 이름이 다르니 교사가 일반 이름으로 말한다. ' + SAFE_NOTE,
      }),
      M('wrap.media-diet', {
        title: '나의 미디어 점검 시간표', method: '가상 인물의 저녁 미디어 시간을 시계로 점검', tool: 'clock', minutes: 7,
        levels: { easy: '디지털 시각이 함께 보이는 시계에 가상 인물 하린의 두 시각(시작·줄여서 끝낼 때)을 맞춘다.', base: '바늘만 보고 두 시각을 맞춘 뒤 줄일 시간을 고른다.', challenge: '대신 볼 콘텐츠 기준을 한 줄로 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"하린은 저녁 8시 30분부터 영상을 보다가, 고정관념이 많은 콘텐츠를 줄이기로 했어요. 언제 끝내면 좋을까요?" 시계 교구는 시각 하나씩만 나타내므로 하린의 시작 시각과 줄여서 끝낼 시각을 차례로 맞춘다. "많이 보는 게 문제가 아니라 무엇을 보느냐"라는 말이 나오면 "둘 다 맞아요. 오늘은 무엇을 볼지 고르는 기준을 정해 볼까요?"라고 받는다. 시각은 가상 인물의 것이고 학생의 미디어 시간을 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'clock', options: { minuteStep: 10 }, prompt: '하린이 저녁 영상 보기를 시작한 8시 30분에 시계를 맞춰요.', target: { h: 8, m: 30 }, difficulty: 0.15 },
              { prompt: '하린이 영상 보기를 시작한 8시 30분에 시계를 맞춰요(디지털 시각이 보여요).', toolOptions: { showDigital: true } }),
            IT({ type: 'tool', tool: 'clock', options: { minuteStep: 10 }, prompt: '하린이 고정관념이 많은 콘텐츠를 줄여 9시 10분에 끝내기로 했어요. 그 시각에 시계를 맞춰요.', target: { h: 9, m: 10 }, difficulty: 0.15 },
              { prompt: '하린이 끝내기로 한 9시 10분에 시계를 맞춰요(디지털 시각이 보여요).', toolOptions: { showDigital: true } }),
            { type: 'choice', prompt: '하린이 대신 볼 콘텐츠를 고르는 기준으로 알맞은 것은?', options: ['사람을 몸의 부분으로만 보이지 않는 콘텐츠', '조회수가 가장 높은 콘텐츠', '친구가 다 본 콘텐츠'], answer: 0, difficulty: 0.15, explain: '사람을 존중하며 보여 주는지가 좋은 기준이에요.' },
            { type: 'short', prompt: '내가 콘텐츠를 고를 때 쓸 기준을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '미디어 점검 시간표',
          items: [
            { type: 'table', prompt: '하린의 저녁 미디어 시간을 정리해요.', columns: ['무엇', '시각·시간'], cells: [['시작', '8시 30분'], ['줄여서 끝낼 때', ''], ['본 시간', '']], answer: '9시 10분, 40분' },
            { type: 'short', prompt: '고정관념이 많은 콘텐츠 대신 볼 콘텐츠의 기준을 써요.' },
          ],
        },
        notes: '시계 교구는 시각 하나만 나타내 계획의 \'시계에 칸 칠하기\'를 시작·끝 시각 맞추기로 바꾸었다. 시각은 가상 인물의 것이다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 13-g8-second-harm.js ====
  // ==== 8학년 · 2차 피해를 막는 주변인 (gender.m.g8-second-harm) ====
  {
    const M = MK('g8-second-harm', [8]);
    const RUMOR = [['처음', 1], ['10분 뒤', 2], ['20분 뒤', 4], ['30분 뒤', 8], ['40분 뒤', 16]];
    // 단톡방 소문 갈림길(깊이 3) — 사건 내용은 말하지 않는다
    const D1 = { text: '다른 반에서 성폭력 사건이 있었다는 이야기가 돈다. 반 단톡방에 누군가 "피해자 누군지 알아? 혹시 ○○ 아니야?"라는 글을 올린다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'guess', text: '"나도 그런 것 같던데"라며 추측을 보탠다', result: '추측이 사실처럼 퍼지고 이름까지 오르내린다.', impact: [{ who: '피해 학생', text: '학교에 오기 두려워진다', tone: -1 }], why: '누구인지 추측하는 것은 2차 피해예요. 추측은 사실이 아니어도 사람을 다치게 해요.', end: '추측이 퍼져 2차 피해가 생겼어요.',
        next: { text: '단톡방에 "그 애가 왜 거기 갔대?"라는 글이 더 올라온다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'stopLate', text: '"추측이랑 탓하는 말 그만하자"라고 쓰고, 내 글도 지운다', result: '몇 명이 멈칫하며 글을 그친다.', impact: [{ who: '반 분위기', text: '소문이 잦아든다', tone: 1 }], end: '늦었지만 멈추자고 말했어요.',
            next: { text: '그래도 캡처가 다른 방으로 돌고 있다는 말이 들린다.', choices: [
              { id: 'tellT', text: '캡처를 퍼뜨리지 않고 담임 선생님께 상황만 알린다', result: '선생님이 정보를 지키며 사안을 다룬다.', impact: [{ who: '피해 학생', text: '보호가 시작된다', tone: 1 }], ending: '정보를 지키며 어른에게 알렸어요.' },
              { id: 'shareC', text: '증거라며 캡처를 여러 친구에게 보낸다', result: '캡처가 더 퍼진다.', impact: [{ who: '피해 학생', text: '피해가 커진다', tone: -1 }], why: '알릴 때도 캡처를 퍼뜨리지 않아요. 선생님께만 상황을 알려요.' }] } },
          { id: 'blameMore', text: '"조심했어야지"라는 글에 공감 표시를 누른다', result: '탓하는 말이 더 늘어난다.', impact: [{ who: '피해 학생', text: '자기 탓이라고 여기게 된다', tone: -1 }], why: '피해자를 탓하는 말은 2차 피해예요. 잘못은 가해자에게 있어요.' }] } },
      { id: 'silent', text: '모른 척하고 단톡방을 닫는다', result: '추측 글이 계속 올라온다.', impact: [{ who: '피해 학생', text: '소문이 멈추지 않는다', tone: -1 }], why: '내가 퍼뜨리지 않은 것은 좋지만, 아무도 멈추지 않으면 2차 피해가 이어져요.', end: '아무도 멈추지 않아 소문이 이어졌어요.',
        next: { text: '다음 날 복도에서도 그 이름이 오르내린다.', ask: '어떻게 할까?', choices: [
          { id: 'tellNow', text: '담임 선생님께 단톡방과 복도 소문 상황을 알린다', result: '선생님이 학급에서 2차 피해를 멈추는 이야기를 한다.', impact: [{ who: '반 분위기', text: '소문을 멈출 기회가 생긴다', tone: 1 }], end: '어른에게 알려 소문을 멈추기 시작했어요.',
            next: { text: '친구가 "너 왜 선생님한테 말했어?"라고 묻는다.', choices: [
              { id: 'why', text: '"소문은 누군가를 다치게 해. 멈추려고 말했어"', result: '친구가 머쓱해하며 고개를 끄덕인다.', impact: [{ who: '친구', text: '생각을 바꾼다', tone: 1 }], ending: '알린 까닭을 분명히 말했어요.' },
              { id: 'deny', text: '"아니야, 난 말 안 했어"라고 감춘다', result: '친구는 소문을 멈출 까닭을 듣지 못한다.', impact: [{ who: '친구', text: '생각이 그대로다', tone: 0 }], why: '알린 것은 잘한 일이에요. 숨길 필요가 없어요.' }] } },
          { id: 'join', text: '다들 아는 이야기니 나도 이야기한다', result: '소문이 더 커진다.', impact: [{ who: '피해 학생', text: '더 큰 상처를 받는다', tone: -1 }], why: '다들 안다고 해서 전해도 되는 것은 아니에요.' }] } },
      { id: 'stop', text: '"추측하지 말자. 이건 2차 피해야"라고 쓰고 선생님께 알린다', result: '단톡방 글이 멈추고 선생님이 상황을 살핀다.', impact: [{ who: '피해 학생', text: '보호받는다', tone: 1 }], end: '바로 멈추자고 하고 어른에게 알렸어요.',
        next: { text: '선생님께 알리려는데 친구가 "증거로 캡처해서 단톡방에 보여 주자"고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'keep', text: '"캡처는 퍼뜨리지 않고 선생님께만 상황을 말하자"', result: '피해 학생의 이름이 더 퍼지지 않는다.', impact: [{ who: '피해 학생', text: '정보가 지켜진다', tone: 1 }], end: '정보를 지키며 알렸어요.',
            next: { text: '선생님이 "말해 줘서 고마워. 그 이야기는 여기서 멈추자"고 한다.', choices: [
              { id: 'support', text: '반 친구들에게 "추측·탓하기·퍼뜨리기 멈추기"를 함께 하자고 한다', result: '반에 2차 피해를 막는 약속이 생긴다.', impact: [{ who: '반 분위기', text: '지지하는 문화가 생긴다', tone: 1 }], ending: '2차 피해를 막는 약속을 함께 만들었어요.' },
              { id: 'ask', text: '피해 학생에게 찾아가 무슨 일이었는지 묻는다', result: '피해 학생이 원치 않는 질문을 받는다.', impact: [{ who: '피해 학생', text: '부담이 커진다', tone: -1 }], why: '캐묻는 것도 2차 피해가 될 수 있어요. 말하고 싶을 때 말할 수 있게 기다려요.' }] } },
          { id: 'show', text: '단톡방에 캡처를 올려 모두에게 보여 준다', result: '이름이 담긴 캡처가 더 퍼진다.', impact: [{ who: '피해 학생', text: '정보가 더 퍼진다', tone: -1 }], why: '캡처를 퍼뜨리면 피해가 커져요. 선생님께만 상황을 말해요.' }] } }] };
    const R1 = [{ id: 'r1', text: '누구인지 추측하고 소문을 전하는 것도 2차 피해다' }, { id: 'r2', text: '잘못은 가해자에게 있고 피해자를 탓하지 않는다' },
      { id: 'r3', text: '피해자에게도 원인이 있었을 것이다', why: '피해의 잘못은 늘 가해자에게 있어요. 이 생각이 2차 피해를 만들어요.' }, { id: 'r4', text: '사실을 확인하려면 이야기를 퍼뜨려도 된다', why: '확인은 학교와 어른의 몫이에요. 퍼뜨리면 피해가 커져요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '알릴 때 이름·캡처를 퍼뜨리지 않아야 피해자 정보가 지켜진다' }], ok: ['r5'] };
    const ROUTE = ['이야기를 들어 주고 "네 잘못 아니야"라고 말하기', '함께 믿는 어른(담임·보호자)에게 알리기', '학교 상담(Wee 클래스)으로 잇기', `지역 상담 기관 ${LOCAL}로 잇기`];

    ALL.push(
      // ---- 도입 ----
      M('intro.rumor-graph', {
        title: '소문이 퍼지는 속도 그래프', method: '가상 소문이 퍼지는 꺾은선그래프 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '점 3개(처음·10분 뒤·20분 뒤)만 보이고 값을 그대로 읽는다.', base: '점 5개에서 40분 뒤 소문을 아는 사람이 처음의 몇 배인지 읽는다.', challenge: '10분 뒤 한 사람이 멈췄다면 그래프가 어떻게 바뀔지 짝에게 말한다.' },
        intro: {
          teacher: '"한 사람이 두 사람에게만 전해도, 40분 뒤에는 몇 명이 알게 될까요?" 가상의 학교 소문 꺾은선그래프를 띄우고 시연 단추로 \'16배\'를 고르는 모습을 보인다. "나 하나 전한다고 큰일 안 난다"는 말이 나오면 "그래프의 어느 점에서 한 사람이 멈췄다면 선이 어떻게 됐을까요?"라고 되묻는다. 자료는 가상이고, 오늘은 피해를 입은 사람에게 상처를 더하는 2차 피해와 그것을 멈추는 주변인을 다룬다고 밝힌다. 사건 내용은 다루지 않는다.',
          student: '가상 학교에서 소문을 아는 사람 수가 시간마다 늘어나는 꺾은선그래프를 읽고, 어디서 멈출 수 있었는지 생각해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '가상 학교 — 소문을 아는 사람 수', unit: '명', xLabel: '시간', yLabel: '사람 수', data: RUMOR, question: '40분 뒤 소문을 아는 사람은 처음의 몇 배일까요?', choices: ['4배', '8배', '16배'] }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut line chart rising steeply on a board, small paper speech bubbles multiplying along the line, one paper hand raised to stop it', banner: '어디서 멈출까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '값은 모두 가상이다. ' + SAFE_NOTE,
      }),
      M('intro.words-weigh', {
        title: '탓하는 말과 지지하는 말의 무게', method: '말 카드를 듣는 사람의 마음과 잇기', tool: 'emotion', minutes: 7,
        levels: { easy: '말 4개(탓하는 말 2·지지하는 말 2)를 교사가 읽어 주며 마음 카드와 잇는다.', base: '말 4개에 마음 카드를 잇는 시연을 보고, 듣는 사람이 어떤 마음일지 까닭을 말한다.', challenge: '탓하는 말 하나를 지지하는 말로 바꿔 짝에게 말한다.' },
        intro: {
          teacher: '"\'왜 그때 말 안 했어?\'는 걱정일까요, 탓일까요?" 말 카드 넷을 띄우고 시연 단추로 듣는 사람의 마음 카드가 붙는 모습을 보인다. "궁금해서 물은 것뿐"이라는 말이 나오면 "그 말을 들은 사람은 \'내가 잘못했나\' 하고 느끼지 않을까요?"라고 되묻는다. 잘못은 늘 가해자에게 있고, 말한 사람은 잘한 것이라는 틀을 먼저 세운다.',
          student: '피해를 털어놓은 사람이 들을 수 있는 말 카드를 듣는 사람의 마음과 이어 보고, 말의 무게를 견주어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"왜 그때 바로 말 안 했어?"' }, { id: 's2', label: '"걔도 뭔가 했겠지"' }, { id: 's3', label: '"네 잘못 아니야"' }, { id: 's4', label: '"말해 줘서 고마워"' }], cards: ['속상함', '외로움', '편안함', '고마움', '신남'] }, sequence: [{ match: { s1: '속상함', s2: '외로움', s3: '편안함', s4: '고마움' } }] },
          art: { draw: 'a paper-cut balance scale with heavy dark paper word bubbles on one side and light pastel paper word bubbles on the other', banner: '말의 무게', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '학생의 경험을 묻지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.rumor-dilemma', {
        title: '단톡방 소문 갈림길', method: '피해자를 추측하는 단톡방 글 앞의 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향은 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 알릴 때 피해자 정보를 지키는 근거까지 고르고, 셋째 문항에서 정보를 지키는 알리기 방법을 고른다.' },
        activity: {
          title: '단톡방 소문 갈림길', tool: 'dilemma',
          teacher: '"\'혹시 ○○ 아니야?\'라는 글에 답을 다는 순간, 무슨 일이 생길까요?" 학생마다 한 길을 끝까지 간 뒤 다른 길과 견주게 한다. "사실을 확인하려면 물어봐야지"라는 학생에게 "확인은 누구의 일일까요? 단톡방이 확인하는 곳일까요?"라고 되묻는다. 추측·탓하기·퍼뜨리기·캐묻기가 모두 2차 피해이고, 알릴 때도 이름과 캡처를 퍼뜨리지 않는다는 점을 짚는다. 사건 내용은 묻지도 말하지도 않는다.',
          task: '반 단톡방에 피해자를 추측하는 글이 올라온 장면에서 길을 골라 결과를 따라가고, 2차 피해를 막는 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '단톡방에 추측 글이 올라왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '단톡방에 추측 글이 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 피해자 정보를 지키는 근거까지 고르세요.' },
              '단톡방의 추측 글', D1, [['stop', 'keep', 'support'], ['silent', 'tellNow', 'why'], ['guess', 'stopLate', 'tellT']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '친구가 "궁금해서 물어본 것뿐인데"라고 할 때의 장면을 따라가세요.', toolOptions: { title: '궁금해서였다면?', scene: { text: '추측 글을 올린 친구가 "궁금해서 물어본 것뿐인데 왜 그래?"라고 한다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'explain', text: '"궁금해도 추측은 누군가를 다치게 해. 그만하자"', result: '친구가 글을 지운다.', impact: [{ who: '피해 학생', text: '소문이 줄어든다', tone: 1 }], ending: '궁금함보다 사람이 먼저라고 말했어요.' },
              { id: 'ok', text: '"그래, 궁금할 수 있지"라며 넘어간다', result: '추측 글이 그대로 남는다.', impact: [{ who: '피해 학생', text: '소문이 이어진다', tone: -1 }], why: '의도가 궁금함이어도 추측은 2차 피해가 돼요.' }] }, reasons: [{ id: 'q1', text: '의도와 상관없이 추측은 2차 피해가 된다' }, { id: 'q2', text: '궁금해서였다면 괜찮다', why: '궁금함이 피해를 줄이지는 않아요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['explain']], reasons: ['q1'] } },
              { prompt: '친구에게 할 말을 고르세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '선생님께 알릴 때 피해자 정보를 지키는 방법을 고르는 장면을 따라가세요.', toolOptions: { title: '정보를 지키며 알리기', scene: { text: '나는 담임 선생님께 단톡방 상황을 알리려 한다.', ask: '어떻게 알릴까?', motif: 'house', choices: [
              { id: 'private', text: '선생님을 따로 찾아가 상황만 말하고, 추측된 이름은 말하지 않는다', result: '선생님이 정보를 지키며 사안을 다룬다.', impact: [{ who: '피해 학생', text: '정보가 지켜진다', tone: 1 }], ending: '피해자 정보를 지키며 알렸어요.' },
              { id: 'public', text: '교실에서 모두 듣게 큰 소리로 선생님께 말한다', result: '반 친구들이 더 궁금해한다.', impact: [{ who: '피해 학생', text: '이야기가 더 퍼진다', tone: -1 }], why: '알릴 때는 따로, 조용히 알려요.' },
              { id: 'forward', text: '캡처를 선생님과 친구들 단톡방에 함께 올린다', result: '캡처가 더 퍼진다.', impact: [{ who: '피해 학생', text: '피해가 커진다', tone: -1 }], why: '캡처는 퍼뜨리지 않아요.' }] }, reasons: [{ id: 'k1', text: '알릴 때는 따로, 이름과 캡처를 퍼뜨리지 않는다' }, { id: 'k2', text: '모두가 알아야 소문이 멈춘다', why: '더 많은 사람이 알면 피해가 커져요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['private']], reasons: ['k1'] }, conclude: '추측하기·탓하기·퍼뜨리기·캐묻기는 모두 2차 피해예요. 멈추자고 말하고, 정보를 지키며 믿는 어른에게 알려요. 잘못은 늘 가해자에게 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '2차 피해를 막는 행동으로 알맞은 것은?', options: ['누구인지 추측해 본다', '추측을 멈추자고 하고 선생님께 따로 알린다', '증거로 캡처를 여러 곳에 보낸다'], answer: '추측을 멈추자고 하고 선생님께 따로 알린다' }] },
        notes: '사건은 \'성폭력 사건이 있었다는 이야기\'로만 두고 내용을 다루지 않는다. 실제 학교의 일을 예로 들지 않는다. ' + SAFE_NOTE,
      }),
      M('act.support-script', {
        title: '친구가 털어놓을 때 대화 대본', method: '들어 주기→믿어 주기→함께 도움 찾기 대사 고르기', tool: 'story', minutes: 15,
        levels: { easy: '첫째 문항은 대사 빈칸 2개(들어 주기·믿어 주기)에 함정 없이 카드를 고르고, 놓으면 바로 맞는지 알려 준다.', base: '대사 빈칸 3개에 함정 카드(탓하는 말·캐묻는 말)를 걸러 고르고, 대화의 차례를 놓는다. 내 말로 바꾼 대사는 활동지에 쓴다.', challenge: '셋째 문항에서 친구가 "아무한테도 말하지 마"라고 할 때의 대사까지 고른다.' },
        activity: {
          title: '친구가 털어놓을 때 대화 대본', tool: 'story',
          teacher: '"친구가 \'사실 요즘 힘든 일이 있었어\'라고 말을 꺼냈어요. 첫마디로 무엇이 좋을까요?" 대사 카드를 고를 때마다 그 말을 들은 친구의 마음을 말하게 한다. "자세히 물어봐야 도울 수 있다"는 학생에게 "친구가 말하고 싶은 만큼만 말해도 된다면, 나는 무엇을 해 주면 될까요?"라고 되묻는다. 들어 주기 → 믿어 주기 → 함께 도움 찾기의 차례와, 안전이 걸린 비밀은 믿는 어른과 나눈다는 점을 짚는다. 대본의 인물은 가상이다.',
          task: '가상 친구가 힘든 일을 털어놓는 장면 대본에서 들어 주기 → 믿어 주기 → 함께 도움 찾기 차례로 알맞은 대사를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('친구의 말에 이어질 내 대사를 빈칸에 고르세요.', [['친구: "사실 요즘 힘든 일이 있었어…" 나: ___', '"천천히 말해도 돼, 듣고 있어"', '나'], ['친구: "내가 잘못한 걸까?" 나: ___', '"네 잘못 아니야"', '나'], ['친구: "어떻게 해야 할지 모르겠어" 나: ___', '"같이 상담 선생님께 가 볼래?"', '나']], ['"왜 그때 바로 말 안 했어?"', '"누가 그랬는데? 다 말해 봐"'], { title: '털어놓는 친구와의 대화' }),
              FB('친구의 말에 이어질 내 대사를 빈칸에 고르세요.', [['친구: "사실 요즘 힘든 일이 있었어…" 나: ___', '"천천히 말해도 돼, 듣고 있어"', '나'], ['친구: "내가 잘못한 걸까?" 나: ___', '"네 잘못 아니야"', '나']], [], { title: '털어놓는 친구와의 대화' })),
            IT(OB('대화의 차례(들어 주기 → 믿어 주기 → 함께 도움 찾기)대로 대사 카드를 놓으세요.', [
              { id: 'o1', text: '"말해 줘서 고마워. 듣고 있어"' }, { id: 'o2', text: '"네 말 믿어. 네 잘못 아니야"' }, { id: 'o3', text: '"혼자 두지 않을게. 같이 도움을 찾자"' }], { title: '지지하는 대화의 차례' }, [{ id: 'ox', text: '"이 얘기 다른 애들도 알아?"' }]),
              OB('대화의 차례대로 대사 카드를 놓으세요.', [
                { id: 'o1', text: '"말해 줘서 고마워. 듣고 있어"' }, { id: 'o2', text: '"네 말 믿어. 네 잘못 아니야"' }, { id: 'o3', text: '"혼자 두지 않을게. 같이 도움을 찾자"' }], { title: '지지하는 대화의 차례' })),
            IT(FB('친구가 "아무한테도 말하지 마"라고 할 때 이어질 대사를 고르세요.', [['친구: "아무한테도 말하지 마." 나: ___', '"네가 원치 않는 사람에겐 말 안 할게"', '나'], ['친구: "선생님한테도?" 나: ___', '"네가 안전한 게 먼저야. 같이 가자"', '나']], ['"알았어, 절대 아무한테도 안 할게"', '"다른 친구들한테만 살짝 물어볼게"'], { title: '비밀을 부탁받았을 때' }),
              FB('친구가 "아무한테도 말하지 마"라고 할 때 이어질 대사를 고르세요.', [['친구: "아무한테도 말하지 마." 나: ___', '"네가 원치 않는 사람에겐 말 안 할게"', '나']], [], { title: '비밀을 부탁받았을 때' }),
              null,
              { conclude: '털어놓은 친구에게는 들어 주고, 믿어 주고, 함께 도움을 찾아요. 탓하거나 캐묻지 않고, 안전이 걸린 비밀은 믿는 어른과 나눠요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 털어놓을 때 내가 할 첫 대사를 내 말로 써요(탓하거나 캐묻지 않게).' }] },
        notes: '대본은 가상 인물이고 친구가 무엇을 겪었는지는 말하지 않는다. 역할극으로 할 때도 사건 내용은 만들지 않는다. ' + SAFE_NOTE,
      }),
      M('act.support-letter', {
        title: '"2차 피해 멈추기" 제안 글 쓰기', method: '학교 게시판 제안 글을 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 시작 말을 받아 세 부분을 짧게 쓰고, 넷째 문항(완성 글)은 4문장으로 쓴다.', base: '세 부분(2차 피해 알리기·구체 행동·지지와 도움 경로)을 쓰고 6~8문장으로 이어 기준표 3항목(피해자 정보 없음·구체적 행동·지지 표현)으로 점검한다.', challenge: '넷째 문항에서 학생·교사·보호자별 행동을 나눠 쓴다.' },
        activity: {
          title: '"2차 피해 멈추기" 제안 글 쓰기', tool: 'rubric-writing',
          teacher: '"\'소문내지 맙시다\'라는 글로 내일 복도에서 무엇이 달라질까요?" 막연한 글과 \'누구인지 추측하는 글에 답을 달지 않는다\'처럼 구체적인 글을 견주어 읽은 뒤 쓰게 한다. 글에 사건 내용이나 누구인지 짐작할 수 있는 말이 들어가면 "이 글을 그 사람이 읽는다면 어떨까요?"라고 되묻는다. 가상 사건 뒤의 제안 글이며 실제 사건을 쓰지 않는다고 미리 말한다.',
          task: '가상 사건 뒤 학교 게시판에 올릴 "2차 피해 멈추기" 제안 글을 쓰고, 피해자 정보 없음·구체적 행동·지지 표현이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 2차 피해가 무엇인지와 멈추자는 제안을 두 문장으로 쓰세요.', toolOptions: { topic: '가상 사건 뒤 학교 게시판 제안 글의 첫 부분. 2차 피해가 무엇인지(추측·탓하기·퍼뜨리기)와 멈추자는 제안을 두 문장으로 쓰세요.', minChars: 40, maxChars: 200, minSentences: 2, maxSentences: 3, title: '제안 ① 2차 피해 알리기' }, target: { selfCheck: ['2차 피해가 무엇인지 썼다', '피해자를 짐작할 정보가 없다', '사건 내용을 쓰지 않았다'], mustInclude: [['2차 피해']] } },
              { prompt: '틀을 채워 첫 부분을 쓰세요.', toolOptions: { minChars: 20, minSentences: 1, maxSentences: 2, starter: '누구인지 추측하거나 ___ 것은 2차 피해예요.' }, target: { selfCheck: ['2차 피해가 무엇인지 썼다', '피해자를 짐작할 정보가 없다'], mustInclude: [['2차 피해']] } }),
            IT({ prompt: '가운데: 학생이 할 수 있는 구체적 행동 세 가지를 세 문장으로 쓰세요.', toolOptions: { topic: '2차 피해를 멈추기 위해 학생이 할 수 있는 구체적 행동 세 가지를 세 문장으로 쓰세요.', minChars: 50, maxChars: 240, minSentences: 3, maxSentences: 4, title: '제안 ② 구체적 행동' }, target: { selfCheck: ['행동이 구체적이다', '퍼뜨리지 않기가 들어 있다', '피해자를 탓하는 말이 없다'] } },
              { prompt: '틀을 채워 구체적 행동 두 가지를 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '첫째, ___. 둘째, ___.' }, target: { selfCheck: ['행동이 구체적이다', '퍼뜨리지 않기가 들어 있다'] } }),
            IT({ prompt: '마무리: 지지하는 말과 도움 경로를 두 문장으로 쓰세요.', toolOptions: { topic: '힘든 사람을 지지하는 말과 도움 경로(담임·상담 선생님·Wee 클래스·보호자)를 두 문장으로 쓰세요.', minChars: 40, maxChars: 200, minSentences: 2, maxSentences: 3, title: '제안 ③ 지지와 도움 경로' }, target: { selfCheck: ['지지하는 표현이 있다', '도움 경로를 알렸다', '피해자를 짐작할 정보가 없다'], mustInclude: [['선생님', 'Wee', '보호자']] } },
              { prompt: '틀을 채워 마무리를 쓰세요.', toolOptions: { minChars: 20, minSentences: 1, maxSentences: 2, starter: '당신의 잘못이 아니에요. 힘들면 ___ 에게 이야기해요.' }, target: { selfCheck: ['지지하는 표현이 있다', '도움 경로를 알렸다'], mustInclude: [['선생님', 'Wee', '보호자']] } }),
            IT({ prompt: '세 부분을 이어 6~8문장 제안 글을 완성하고 기준표로 점검하세요.', toolOptions: { topic: '세 부분을 이어 학교 게시판에 올릴 "2차 피해 멈추기" 제안 글을 6~8문장으로 완성하세요.', minChars: 120, maxChars: 480, minSentences: 6, maxSentences: 8, title: '2차 피해 멈추기 제안', sample: '누구인지 추측하거나 피해자를 탓하고 소문을 퍼뜨리는 것은 2차 피해예요. 우리 학교에서 2차 피해를 멈춥시다. 첫째, 누구인지 추측하는 글에 답을 달지 않아요. 둘째, 들은 이야기와 캡처를 다른 사람에게 전하지 않아요. 셋째, 탓하는 말을 들으면 "그만하자"고 말해요. 잘못은 피해자가 아니라 가해자에게 있어요. 힘든 사람은 담임·상담 선생님이나 Wee 클래스에 이야기할 수 있어요.' }, target: { selfCheck: ['피해자를 짐작할 정보가 없다', '구체적인 행동이 있다', '지지하는 표현이 있다'] } },
              { prompt: '세 부분을 이어 4문장 제안 글을 완성하고 점검하세요.', toolOptions: { minChars: 70, minSentences: 4, maxSentences: 6 }, target: { selfCheck: ['피해자를 짐작할 정보가 없다', '구체적인 행동이 있다', '지지하는 표현이 있다'] } },
              { prompt: '학생·교사·보호자가 할 행동을 나눠 6~8문장 제안 글을 완성하세요.', toolOptions: { topic: '학생·교사·보호자가 각각 할 행동을 나눠 "2차 피해 멈추기" 제안 글을 6~8문장으로 쓰세요.' }, target: { selfCheck: ['피해자를 짐작할 정보가 없다', '학생·교사·보호자의 행동을 나눴다', '지지하는 표현이 있다'], mustInclude: [['보호자']] } },
              { conclude: '2차 피해를 멈추는 제안 글은 피해자 정보를 담지 않고, 구체적인 행동을 알리며, 지지하는 말과 도움 경로로 끝나요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '2차 피해를 막는 학교 게시판 글에 들어가면 안 되는 것은?', options: ['추측하지 말자는 제안', '피해자를 짐작할 수 있는 정보', '지지하는 말'], answer: '피해자를 짐작할 수 있는 정보' }, { type: 'short', prompt: '내 제안 글에서 가장 중요한 행동 하나를 옮겨 써요.' }] },
        notes: '가상 사건 뒤의 글이다. 실제 사건·인물을 쓰지 않는다. 게시판에 실제로 올릴 때는 교사가 먼저 읽는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.stop-pledge', {
        title: '2차 피해 멈춤 약속 카드', method: '"추측·퍼뜨리기·탓하기 멈추기" 약속 카드 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '약속 문구를 보기에서 골라(둘째 출구 질문) 카드를 꾸민다.', base: '카드를 꾸미고 약속 문구를 직접 쓴다(셋째 출구 질문).', challenge: '약속을 지키기 어려운 순간과 그때의 대처를 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"\'추측하지 않기·퍼뜨리지 않기·탓하지 않기\' 가운데 가장 지키기 어려운 것은 무엇일까요?" 카드 그림은 콜라주 판에, 약속 문구는 출구 질문과 활동지에 쓴다고 알려 준다. "친한 친구가 물어보면 말할 수도 있지"라는 말이 나오면 "그 친구도 다른 친구에게 말한다면, 오늘 그래프의 선은 어떻게 될까요?"라고 되묻는다. 지키기 어려운 순간을 솔직하게 쓰는 것이 더 좋은 약속이라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '약속 카드를 모양·색 조각으로 꾸미고 스스로 점검해요.', target: { selfCheck: ['약속 세 가지를 정했다', '피해자를 짐작할 그림이 없다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '약속 카드에 넣을 문구로 가장 알맞은 것은?', options: ['궁금하면 살짝만 물어보기', '추측하지 않기·퍼뜨리지 않기·탓하지 않기', '피해자가 조심하기'], answer: 1, difficulty: 0.15, explain: '추측·퍼뜨리기·탓하기를 멈추는 것이 2차 피해를 막아요.' },
            { type: 'short', prompt: '2차 피해를 멈추는 나의 약속 문구를 한 줄로 써요.' },
            { type: 'short', prompt: '약속을 지키기 어려운 순간과 그때 할 대처를 써요.' },
          ],
        },
        worksheet: {
          title: '2차 피해 멈춤 약속',
          items: [
            { type: 'check', prompt: '나의 약속에 표시해요.', options: ['누구인지 추측하지 않기', '들은 이야기·캡처 퍼뜨리지 않기', '피해자 탓하지 않기'] },
            { type: 'short', prompt: '약속을 지키기 어려운 순간과 대처를 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 약속 문구는 출구 질문과 활동지에 쓴다. ' + SAFE_NOTE,
      }),
      M('wrap.route-check', {
        title: '도움 경로 차례 점검', method: '도움을 이어 가는 차례 카드 맞추기', tool: 'timer', minutes: 7,
        levels: { easy: '차례 카드 3장(들어 주기·믿는 어른·학교 상담)을 맞춘다.', base: `차례 카드 4장(지역 상담 기관 ${LOCAL} 더함)을 맞춘다.`, challenge: '친구에게 함께 가자고 할 말을 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"친구가 털어놓았을 때, 나 혼자 끝까지 해결해야 할까요?" 차례 카드를 맞춘 뒤 각 단계에서 내가 할 말을 한 마디씩 덧붙이게 한다. "어른에게 알리면 친구를 배신하는 것"이라는 말이 나오면 "친구가 안전해지려면 누구의 도움이 필요할까요?"라고 되묻는다. 지역 상담 기관 칸은 학교가 확인한 이름과 번호로 채워 함께 읽는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '도움을 이어 가는 차례', cards: [ROUTE[2], ROUTE[0], ROUTE[3], ROUTE[1]] }, prompt: '털어놓은 친구를 도움으로 이어 가는 차례대로 카드를 놓아요.', target: { order: ROUTE }, difficulty: 0.15 },
              { prompt: '도움을 이어 가는 차례대로 카드 세 장을 놓아요.', toolOptions: { cards: [ROUTE[2], ROUTE[0], ROUTE[1]] }, target: { order: ROUTE.slice(0, 3) } }),
            { type: 'choice', prompt: '털어놓은 친구를 돕는 첫 단계로 알맞은 것은?', options: ['누가 그랬는지 자세히 캐묻는다', '이야기를 들어 주고 "네 잘못 아니야"라고 말한다', '다른 친구들에게 의견을 물어본다'], answer: 1, difficulty: 0.15, explain: '먼저 들어 주고 믿어 줘요. 캐묻거나 퍼뜨리지 않아요.' },
            { type: 'short', prompt: '친구에게 "같이 가자"고 할 때 할 말을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '도움 경로 차례',
          items: [
            { type: 'table', prompt: '도움을 이어 가는 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: `들어 주고 "네 잘못 아니야", 믿는 어른에게 함께 알리기, 학교 상담(Wee 클래스), 지역 상담 기관 ${LOCAL}` },
            { type: 'short', prompt: `우리 지역 상담 기관 번호 칸 ${LOCAL} 을 선생님과 함께 채워 써요.` },
          ],
        },
        notes: `지역 상담 기관 번호(${LOCAL})는 수업 전에 학교가 확인해 채운다. ` + SAFE_NOTE,
      }),
    );
  }

  // ==== 14-g8-deepfake.js ====
  // ==== 8학년 · 딥페이크, 장난이라는 핑계 (gender.m.g8-deepfake) ====
  {
    const M = MK('g8-deepfake', [8]);
    const CLUE = [
      { id: 'c1', text: '얼굴과 목의 경계가 어색하다', ok: true }, { id: 'c2', text: '얼굴과 배경의 빛 방향이 다르다', ok: true },
      { id: 'c3', text: '귀걸이 한쪽만 흐릿하다', ok: true }, { id: 'c4', text: '배경 글자가 일그러져 있다', ok: true },
      { id: 'c5', text: '눈 깜빡임이 어색하게 멈춘다', ok: true }, { id: 'c6', text: '사진이 밝고 선명하다' }, { id: 'c7', text: '사람이 웃고 있다' },
    ];
    const EXCUSE = ['"재미로 했어"', '"다들 해"', '"진짜 아니잖아"'];
    const REBUT = [
      { id: 'e1', text: '당사자는 웃을 수 없고 깊은 상처를 받는다', to: '"재미로 했어"' }, { id: 'e2', text: '재미는 만든 쪽의 기분일 뿐 기준이 아니다', to: '"재미로 했어"' },
      { id: 'e3', text: '여럿이 해도 피해는 줄지 않고 커진다', to: '"다들 해"' }, { id: 'e4', text: '따라 한 사람도 퍼뜨린 책임이 생긴다', to: '"다들 해"' },
      { id: 'e5', text: '가짜여도 보는 사람은 진짜처럼 믿는다', to: '"진짜 아니잖아"' }, { id: 'e6', text: '가짜여도 당사자의 얼굴과 인격권이 다친다', to: '"진짜 아니잖아"' },
      { id: 'e7', text: '사진을 올린 당사자도 조심했어야 한다', why: '사진을 올렸다고 합성해도 되는 것은 아니에요. 잘못은 합성하고 퍼뜨린 쪽에 있어요.' },
    ];
    // 합성물 발견 갈림길(깊이 3) — 이미지의 내용은 말하지 않는다
    const D1 = { text: '반 단톡방에 누군가 같은 반 친구 지수의 얼굴을 합성한 이미지를 올렸다. "ㅋㅋ 진짜 같지?"라는 글이 달린다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'pass', text: '열어 보고 아무 말 없이 넘긴다', result: '조회 수가 늘고 다른 친구들도 하나둘 열어 본다.', impact: [{ who: '지수', text: '본 사람이 늘어 피해가 커진다', tone: -1 }], why: '열어 보는 것도 조회 수를 늘려 퍼짐을 도와요.', end: '보는 사람이 늘었어요.',
        next: { text: '다음 날 지수가 그 이미지를 전해 듣고 학교에 오지 못한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'tellLate', text: '늦었지만 담임 선생님께 단톡방에서 본 것을 알린다', result: '학교가 단톡방 글을 내리고 지수를 지원하기 시작한다.', impact: [{ who: '지수', text: '도움을 받기 시작한다', tone: 1 }], end: '늦었지만 알렸어요.',
            next: { text: '선생님이 "이미지를 저장했다면 지우고, 퍼뜨리지 말자"고 반에 말한다.', choices: [
              { id: 'delete', text: '휴대폰에 남은 것이 없는지 확인하고 지운다', result: '내 휴대폰에서는 더 퍼지지 않는다.', impact: [{ who: '지수', text: '퍼질 길이 하나 줄어든다', tone: 1 }], ending: '알리고, 남은 것을 지웠어요.' },
              { id: 'keep', text: '증거로 쓰겠다며 따로 저장해 둔다', result: '저장한 이미지가 또 다른 곳으로 퍼질 수 있다.', impact: [{ who: '지수', text: '다시 퍼질까 불안하다', tone: -1 }], why: '합성물은 내가 저장하지 않아요. 확인은 학교와 지원 기관이 해요.' }] } },
          { id: 'silent', text: '나는 퍼뜨리지 않았으니 상관없다며 가만히 있는다', result: '단톡방 글이 그대로 남아 있다.', impact: [{ who: '지수', text: '혼자 감당한다', tone: -1 }], why: '본 사람이 알리지 않으면 글은 남아 있어요.' }] } },
      { id: 'forward', text: '재미있다며 다른 단톡방에 전달한다', result: '이미지가 다른 반까지 퍼진다.', impact: [{ who: '지수', text: '모르는 사람까지 보게 된다', tone: -1 }], why: '전달한 사람도 피해를 키운 책임이 있어요. "장난이었어"는 핑계가 되지 않아요.', ending: '전달한 순간 피해가 학교 밖까지 퍼졌어요.' },
      { id: 'stop', text: '열지 않고 "이거 내리자, 지수가 다쳐"라고 단톡방에 쓴다', result: '몇몇이 "맞아"라며 반응을 멈춘다.', impact: [{ who: '지수', text: '편이 있다고 느낄 수 있다', tone: 1 }], end: '퍼짐을 멈추자고 말했어요.',
        next: { text: '올린 친구가 "진짜도 아닌데 왜 그래?"라며 내리지 않는다.', ask: '다음은?', choices: [
          { id: 'adult', text: '퍼뜨리지 않고 담임 선생님께 단톡방 이름과 시간을 알린다', result: '학교가 바로 글을 내리게 하고 지수를 보호한다.', impact: [{ who: '지수', text: '보호받는다', tone: 1 }], end: '퍼뜨리지 않고 어른에게 알렸어요.',
            next: { text: '선생님이 지수에게 삭제 지원을 요청하는 방법을 함께 알아보자고 한다.', choices: [
              { id: 'support', text: '지수에게 "네 잘못 아니야, 같이 있을게"라고 말한다', result: '지수가 조금 마음을 놓는다.', impact: [{ who: '지수', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '알리고, 지수의 편이 되어 주었어요.' },
              { id: 'askWhy', text: '지수에게 "왜 그런 사진을 올렸어?"라고 묻는다', result: '지수가 고개를 숙인다.', impact: [{ who: '지수', text: '자기 탓처럼 느낀다', tone: -1 }], why: '피해자에게 까닭을 묻는 말은 2차 피해가 돼요. 잘못은 합성한 쪽에 있어요.' }] } },
          { id: 'giveup', text: '말해도 안 들으니 포기한다', result: '이미지가 계속 남아 있다.', impact: [{ who: '지수', text: '피해가 이어진다', tone: -1 }], why: '말로 안 될 때는 어른에게 알려요.' }] } }] };
    const R1 = [{ id: 'r1', text: '보거나 전달하는 것도 피해를 키운다' }, { id: 'r2', text: '합성물은 퍼뜨리지 않고 어른·학교에 알린다' },
      { id: 'r3', text: '진짜가 아니니 피해가 없다', why: '가짜여도 당사자의 얼굴과 인격권이 다쳐요.' }, { id: 'r4', text: '사진을 올린 당사자에게도 잘못이 있다', why: '잘못은 합성하고 퍼뜨린 쪽에 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '멈추자고 한 길에서는 퍼짐이 반 안에서 멈췄다' }, { id: 'r6', text: '전달한 길에서는 다른 반까지 퍼졌다' }], ok: ['r5', 'r6'] };
    const CHAIN = [['만든 사람', 1], ['전달한 사람', 5], ['본 사람', 50]];
    const CH = (o) => Object.assign({ type: 'bar', title: '가상 기록 — 합성물 한 장의 퍼짐', unit: '명', xLabel: '단계', yLabel: '사람 수', data: CHAIN, scale: 10 }, o);
    // 거북이 판: 별 = 차례대로 지날 단계, 깃발 = 마지막 단계, 바위 = 다른 방에 전달하기
    const BC_EASY = { cols: 4, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 0], [2, 0]], rocks: [[1, 1]], blocks: ['fwd', 'left', 'right'] };
    const BC_BASE = { cols: 5, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 0], [2, 0], [3, 0]], rocks: [[2, 1]], blocks: ['fwd', 'left', 'right'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.real-fake', {
        title: '진짜와 합성, 구별 단서 찾기', method: '가상 이미지 설명 카드에서 합성 단서 고르기', tool: 'wordcards', minutes: 5,
        levels: { easy: '시연 판의 단서 카드 가운데 3장(얼굴 경계·빛 방향·배경 글자)만 교사와 함께 짚는다.', base: '단서 카드 7장에서 합성 단서 5장을 고르는 시연을 보고, 함정 카드 2장이 왜 단서가 아닌지 말한다.', challenge: '단서로도 구별이 안 될 때의 행동 원칙을 짝에게 한 문장으로 말한다.' },
        intro: {
          teacher: '"이 이미지 설명에서 합성을 의심할 단서는 무엇일까요? 그런데 단서를 다 찾으면 구별할 수 있을까요?" 가상 이미지 설명 카드를 띄우고 시연 단추로 합성 단서 5장이 바구니에 담기는 모습을 보인다. "잘 보면 다 알 수 있다"는 말이 나오면 "요즘 합성물은 단서가 거의 없기도 해요. 구별이 어렵다면 무엇을 기준으로 행동해야 할까요?"라고 되묻는다. 오늘의 원칙은 \'구별이 어려워도 퍼뜨리지 않는다\'라고 밝힌다. 실제 합성물은 보여 주지 않는다.',
          student: '가상 이미지 설명 카드에서 합성을 의심할 단서를 고르고, 구별이 어려울 때 지킬 원칙을 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '합성 단서', cards: strip(CLUE) }, sequence: [{ pick: ['c1', 'c2', 'c3', 'c4', 'c5'] }] },
          art: { draw: 'a paper-cut phone screen showing a blurred portrait made of two mismatched paper layers, a paper magnifying glass over the edge', banner: '구별이 어려워도 퍼뜨리지 않기', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 합성물이나 실존 인물 사진을 보여 주지 않고 설명 카드로만 다룬다. ' + SAFE_NOTE,
      }),
      M('intro.excuse-sort', {
        title: '"장난이었어" 핑계 분석', method: '핑계 바구니에 피해를 줄이지 못하는 까닭 나누기', tool: 'sortboard', minutes: 7,
        levels: { easy: '핑계 바구니 3개에 까닭 카드를 하나씩만 짚어 보는 시연을 함께 읽는다.', base: '까닭 카드 6장을 핑계 바구니 3개에 나누고, 함정 카드(피해자 탓) 1장은 남겨 두는 시연을 보고 까닭을 말한다.', challenge: '핑계 하나를 골라 그 핑계에 답하는 한 문장을 짝에게 말한다.' },
        intro: {
          teacher: '"\'재미로 했어\', \'다들 해\', \'진짜 아니잖아\' — 이 말들은 피해를 줄여 줄까요?" 핑계 바구니 셋을 띄우고 시연 단추로 까닭 카드가 담기는 모습을 보인다. \'사진을 올린 당사자도 조심했어야 한다\' 카드는 어느 바구니에도 넣지 않는다는 점을 보이며 "사진을 올렸다는 것이 합성해도 된다는 허락일까요?"라고 묻는다. 잘못은 합성하고 퍼뜨린 쪽에 있다는 오늘의 기준을 밝힌다.',
          student: '딥페이크를 만들거나 퍼뜨린 사람이 자주 하는 핑계마다, 그 핑계가 피해를 줄이지 못하는 까닭을 나누어 봐요.',
          demo: { tool: 'sortboard', options: { slots: EXCUSE, cards: strip(REBUT) }, sequence: [{ sort: { '"재미로 했어"': ['e1', 'e2'], '"다들 해"': ['e3', 'e4'], '"진짜 아니잖아"': ['e5', 'e6'] } }] },
          art: { draw: 'a paper-cut shelf with three paper baskets labelled with speech bubbles, paper cards with crossed-out laughing faces', banner: '"장난이었어"는 핑계가 아니다', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '피해자 탓 카드는 늘 바구니 밖에 남기고 바로잡는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.discover-dilemma', {
        title: '합성물을 받았을 때 갈림길', method: '단톡방 합성물 발견 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 지수에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 다른 길과 견주는 근거까지 고르고, 셋째 문항에서 당사자를 지키는 말을 고른다.' },
        activity: {
          title: '합성물을 받았을 때 갈림길', tool: 'dilemma',
          teacher: '"이미지를 열어 보기만 한 사람은 아무 책임이 없을까요?" 학생마다 한 길을 끝까지 간 뒤 전달한 길과 멈춘 길을 견주게 한다. "나는 만들지 않았으니 상관없다"는 학생에게 "조회 수와 전달이 늘면 지수가 받는 피해는 어떻게 될까요?"라고 되묻는다. "지수가 왜 사진을 올렸냐"는 말이 나오면 그 말이 2차 피해라는 점을 바로 짚는다. 이미지의 내용은 묻지도 말하지도 않는다.',
          task: '반 단톡방에 친구 얼굴을 합성한 이미지가 올라온 장면에서 길을 골라 결과를 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '단톡방에 합성 이미지가 올라왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '단톡방에 합성 이미지가 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '단톡방의 합성 이미지', D1, [['stop', 'adult', 'support'], ['pass', 'tellLate', 'delete']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '친구가 "증거로 저장해 둘까?"라고 묻는 장면을 따라가세요.', toolOptions: { title: '저장할까?', scene: { text: '친구가 "나중에 증거로 쓰게 합성 이미지를 저장해 둘까?"라고 묻는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'nosave', text: '"저장하지 말고 단톡방 이름과 시간만 선생님께 알리자"', result: '두 사람은 이미지를 남기지 않고 선생님께 알린다.', impact: [{ who: '지수', text: '이미지가 더 남지 않는다', tone: 1 }], ending: '저장하지 않고 알렸어요.' },
              { id: 'save', text: '"응, 혹시 모르니 저장해 두자"', result: '저장한 이미지가 다른 곳으로 퍼질 길이 하나 더 생긴다.', impact: [{ who: '지수', text: '다시 퍼질까 불안하다', tone: -1 }], why: '합성물은 내가 저장하지 않아요. 어디서 봤는지만 알리면 돼요.' }] }, reasons: [{ id: 'q1', text: '합성물을 저장하면 다시 퍼질 길이 생긴다' }, { id: 'q2', text: '확인은 학교와 지원 기관이 한다' }, { id: 'q3', text: '많이 저장해 둘수록 돕는 것이다', why: '저장은 돕는 일이 아니라 퍼질 길을 늘려요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['nosave']], reasons: ['q1', 'q2'], some: true } },
              { prompt: '저장할지 묻는 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } },
              { prompt: '저장할지 묻는 장면을 따라가고, 판단 근거를 모두 고르세요.', target: { path: [['nosave']], reasons: ['q1', 'q2'] } }),
            IT({ prompt: '지수를 만났을 때 할 말을 고르는 장면을 따라가세요.', toolOptions: { title: '지수에게 할 말', scene: { text: '복도에서 지수를 만났다. 지수가 고개를 숙이고 지나가려 한다.', ask: '무엇이라고 할까?', motif: 'house', choices: [
              { id: 'notyou', text: '"네 잘못 아니야. 필요하면 선생님께 같이 가자"', result: '지수가 걸음을 멈추고 고개를 끄덕인다.', impact: [{ who: '지수', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '지수의 편이 되어 주었어요.' },
              { id: 'saw', text: '"나도 봤는데 진짜 같더라"', result: '지수가 더 움츠러든다.', impact: [{ who: '지수', text: '모두가 봤다는 생각에 괴롭다', tone: -1 }], why: '본 이야기를 전하는 말은 상처를 키워요.' },
              { id: 'why', text: '"그러게 사진을 왜 올렸어"', result: '지수가 자기 탓이라고 느낀다.', impact: [{ who: '지수', text: '자기를 탓한다', tone: -1 }], why: '피해자를 탓하는 말은 2차 피해예요. 잘못은 합성한 쪽에 있어요.' }] }, reasons: [{ id: 'p1', text: '피해자를 탓하지 않고 지지한다' }, { id: 'p2', text: '본 내용을 피해자에게 전하지 않는다' }, { id: 'p3', text: '사실대로 말해 주는 것이 위로다', why: '본 것을 전하는 말은 위로가 되지 않아요.' }], compare: true },
              target: { path: [['notyou']], reasons: ['p1', 'p2'], some: true } },
              null,
              { prompt: '지수를 만났을 때 할 말을 고르고, 당사자를 지키는 근거를 모두 고르세요.', target: { path: [['notyou']], reasons: ['p1', 'p2'] } },
              { conclude: '합성물은 만들지도, 보지도, 저장하지도, 퍼뜨리지도 않아요. 본 사람이 할 일은 멈추자고 말하고, 어른·학교에 알리고, 피해자의 편이 되는 것이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '단톡방에서 친구 얼굴 합성 이미지를 보았을 때 가장 알맞은 행동은?', options: ['진짜인지 확인하려고 저장한다', '퍼뜨리지 않고 단톡방 이름과 시간을 어른·학교에 알린다', '내가 만든 게 아니니 그냥 둔다'], answer: '퍼뜨리지 않고 단톡방 이름과 시간을 어른·학교에 알린다' }] },
        notes: '합성 이미지의 내용은 장면에서도 발문에서도 묘사하지 않는다. 학생에게 본 적·받은 적이 있는지 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.harm-chain', {
        title: '피해가 커지는 고리 그래프', method: '가상 기록으로 퍼짐 막대 그리고 단계별 책임 읽기', tool: 'chart', minutes: 15,
        levels: { easy: '단계 2개(만든 사람·전달한 사람) 막대를 값이 보이는 채로 그리고 읽는다.', base: '단계 3개 막대를 그리고(만든 사람은 그려져 있음), 가장 큰 단계와 단계마다의 책임을 고른다.', challenge: '값을 숨긴 막대를 읽고, 넷째 문항에서 고리를 끊는 행동을 단계마다 고른다.' },
        activity: {
          title: '피해가 커지는 고리 그래프', tool: 'chart',
          teacher: '"한 사람이 만든 이미지를 본 사람이 50명이 되었다면, 50명을 만든 것은 누구일까요?" 가상 기록 막대를 그리게 한 뒤 단계마다 누가 무엇을 했는지 묻는다. "만든 사람만 잘못이고 전달한 사람은 괜찮다"는 학생에게 "전달한 5명이 없었다면 본 사람은 몇 명이었을까요?"라고 되묻는다. 본 사람에게도 퍼짐을 멈출 기회가 있다는 점을 짚는다. 수치는 수업용 가상 기록이다.',
          task: '가상 기록으로 합성물 한 장이 퍼진 막대그래프를 그리고, 단계마다 책임과 고리를 끊는 행동을 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '가상 기록을 보고 전달한 사람·본 사람 막대를 그리세요(만든 사람은 그려져 있어요).', toolOptions: CH({ mode: 'build', given: [0], step: 5 }), target: { build: true } },
              { prompt: '가상 기록을 보고 전달한 사람 막대를 그리세요(만든 사람은 그려져 있어요).', toolOptions: CH({ mode: 'build', data: CHAIN.slice(0, 2), given: [0], step: 1, scale: 1 }), target: { build: true } }),
            IT({ prompt: '막대를 읽고 사람 수가 가장 많은 단계를 고르세요.', toolOptions: CH({ mode: 'read', question: '사람 수가 가장 많은 단계는?', choices: CHAIN.map((r) => r[0]) }), target: { pick: 2 } },
              { prompt: '막대를 읽고 사람 수가 더 많은 단계를 고르세요.', toolOptions: CH({ mode: 'read', data: CHAIN.slice(0, 2), scale: 1, question: '사람 수가 더 많은 단계는?', choices: ['만든 사람', '전달한 사람'] }), target: { pick: 1 } }),
            { prompt: '전달한 사람의 책임으로 가장 알맞은 것을 고르세요.', toolOptions: CH({ mode: 'read', question: '전달한 사람의 책임은?', choices: ['만들지 않았으니 책임이 없다', '피해를 다른 사람에게 넓힌 책임이 있다', '재미로 했으면 책임이 없다'], why: ['전달하면 본 사람이 늘어 피해가 커져요.', '', '재미로 했어도 피해는 똑같이 커져요.'] }), target: { pick: 1 } },
            IT({ prompt: '본 사람 단계에서 고리를 끊는 행동을 고르세요.', toolOptions: CH({ mode: 'read', question: '본 사람이 고리를 끊는 행동은?', choices: ['다른 방에 보내 의견을 묻는다', '보지 않고 퍼뜨리지 않으며 어른에게 알린다', '당사자에게 봤다고 알려 준다'], why: ['다른 방에 보내면 고리가 길어져요.', '', '본 것을 전하면 상처가 커져요.'] }), target: { pick: 1 } },
              null,
              { prompt: '단계마다 고리를 끊는 행동 가운데 만든 사람·전달한 사람 단계에서 할 일을 함께 담은 것을 고르세요.', toolOptions: CH({ mode: 'read', question: '단계마다 고리를 끊는 행동은?', choices: ['만들지 않기 · 전달하지 않기 · 보고 알리기', '만들지 않기 · 전달은 친한 친구에게만', '보고 나서 지우기만'], why: ['', '친한 친구에게만 보내도 퍼짐은 이어져요.', '알리지 않으면 다른 곳의 이미지는 그대로예요.'] }), target: { pick: 0 } },
              { conclude: '한 사람이 만든 합성물은 전달과 보기로 수십 배 커져요. 단계마다 멈출 수 있고, 멈추는 것이 피해를 줄이는 길이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"만든 사람만 잘못이다"라는 말이 틀린 까닭을 오늘 그래프의 수를 들어 한 문장으로 써요.' }] },
        notes: '그래프 값은 모두 가상 기록이다. ' + SAFE_NOTE,
      }),
      M('activity.campaign', {
        title: '딥페이크 예방 숏폼 대본 쓰기', method: '30초 예방 영상 대본 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '장면 1개 대본을 문장 시작 말로 쓰고 기준 2개를 점검한다.', base: '장면 3개와 구호를 쓰고 기준표(사실 정확·피해자 존중·행동 제시·자극적 장면 없음)로 점검한다.', challenge: '셋째 문항에서 도움 경로를 알리는 자막(믿는 어른·학교 상담·지역 상담 번호 칸)을 넣는다.' },
        activity: {
          title: '딥페이크 예방 숏폼 대본 쓰기', tool: 'rubric-writing',
          teacher: '"30초 안에 중학생이 \'아, 퍼뜨리지 말아야겠다\' 하고 멈추게 하려면 어떤 장면이 필요할까요?" 장면마다 기준표를 먼저 읽고 쓰게 한다. "충격을 주려면 합성 장면을 보여 줘야 한다"는 학생에게 "자극적인 장면은 또 다른 피해가 되고, 보는 사람에게도 상처가 돼요. 행동을 보여 주는 장면으로 바꾼다면요?"라고 되묻는다. 실존 인물·친구 이름은 쓰지 않는다.',
          task: '딥페이크 예방 30초 영상 대본(장면 3개+구호)을 쓰고, 사실 정확·피해자 존중·행동 제시·자극적 장면 없음을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '장면 1: 단톡방에 합성 이미지가 올라온 순간을 자극적이지 않게 쓰세요.', toolOptions: { topic: '장면 1: 단톡방에 친구 얼굴 합성 이미지가 올라온 순간을, 이미지 내용 없이 등장인물의 반응으로 두세 문장 쓰세요.', minChars: 40, maxChars: 200, minSentences: 2, maxSentences: 3, title: '대본 장면 1' }, target: { selfCheck: ['이미지 내용을 묘사하지 않았다', '피해자를 탓하지 않았다', '실존 인물 이름을 쓰지 않았다'] } },
              { prompt: '문장 시작 말을 채워 장면 1을 쓰세요.', toolOptions: { minChars: 25, minSentences: 2, starter: '단톡방에 합성 이미지가 올라온다. 주인공은 ___.' }, target: { selfCheck: ['이미지 내용을 묘사하지 않았다', '피해자를 탓하지 않았다'] } }),
            IT({ prompt: '장면 2·3: 멈추는 행동과 알리는 행동을 보여 주는 장면을 쓰세요.', toolOptions: { topic: '장면 2·3: 주인공이 퍼뜨리지 않고 멈추자고 말하는 장면, 어른·학교에 알리는 장면을 세네 문장으로 쓰세요.', minChars: 60, maxChars: 260, minSentences: 3, maxSentences: 4, title: '대본 장면 2·3' }, target: { selfCheck: ['멈추는 행동을 보여 주었다', '알리는 행동을 보여 주었다', '사실에 맞게 썼다', '자극적인 장면이 없다'], mustInclude: [['알리', '말한']] } },
              { prompt: '장면 2: 주인공이 멈추는 행동을 한두 문장으로 쓰세요.', toolOptions: { topic: '장면 2: 주인공이 퍼뜨리지 않고 멈추자고 말하는 장면을 한두 문장으로 쓰세요.', minChars: 20, minSentences: 1, maxSentences: 2, starter: '주인공은 "___"라고 말한다.' }, target: { selfCheck: ['멈추는 행동을 보여 주었다', '자극적인 장면이 없다'] } }),
            IT({ prompt: '마지막 구호를 한 문장으로 쓰세요.', toolOptions: { topic: '영상 끝에 나올 구호를 한 문장으로 쓰세요(만들지·보지·퍼뜨리지 않기 가운데 하나 이상 넣기).', minChars: 8, maxChars: 60, minSentences: 1, maxSentences: 1, title: '구호' }, target: { selfCheck: ['행동을 담았다', '짧고 분명하다', '피해자를 탓하지 않았다'], mustInclude: [['만들지', '보지', '퍼뜨리지', '전달하지']] } },
              null,
              { prompt: '구호와 함께 도움 경로를 알리는 자막을 쓰세요.', toolOptions: { topic: `구호 한 문장과, 도움 경로를 알리는 자막(믿는 어른·학교 상담·${LOCAL})을 두 문장으로 쓰세요.`, minChars: 25, maxChars: 140, minSentences: 2, maxSentences: 2, title: '구호와 도움 자막' }, target: { selfCheck: ['행동을 담았다', '도움받을 곳을 넣었다', '피해자를 탓하지 않았다'], mustInclude: [['상담', '선생님', '어른']] } },
              { conclude: '예방 영상은 자극적인 장면 대신 멈추고 알리는 행동을 보여 주고, 피해자를 존중하며, 도움받을 곳을 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '딥페이크 예방 영상에 넣으면 안 되는 것은?', options: ['도움받는 길 안내', '자극적인 합성 장면', '"만들지도 퍼뜨리지도 않기" 구호'], answer: '자극적인 합성 장면' }, { type: 'short', prompt: '내가 쓴 숏폼 구호를 옮겨 쓰고, 자극적인 장면을 넣지 않은 까닭을 한 문장으로 써요.' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.response-order', {
        title: '발견했을 때 대응 순서', method: '대응 단계를 거북이 블록으로 차례대로 지나기', tool: 'block-coding', minutes: 6,
        levels: { easy: '별 2개(①전달하지 않기 ②저장하지 않기)를 지나 깃발(③어른·학교에 알리기)에 닿는 블록 3개를 짠다.', base: '별 3개(①전달하지 않기 ②저장하지 않기 ③어른·학교에 알리기)를 지나 깃발(④삭제 지원 요청)에 닿는 블록 4개를 짠다.', challenge: '잘못 섞인 블록 하나(중간에 꺾어 바위 \'다른 방에 전달\' 쪽으로 가는 블록)를 한 번만 고쳐 깃발에 닿게 한다.' },
        wrap: {
          teacher: '"합성물을 발견했을 때 첫 번째로 할 일은 무엇일까요? 별 하나가 한 단계예요." 판의 별은 차례대로 전달하지 않기·저장하지 않기·어른과 학교에 알리기이고, 깃발은 삭제 지원 요청, 아래 바위는 \'다른 방에 전달\'이라고 먼저 말한다. "알리려면 저장부터 해야 한다"는 학생에게 "어디서 언제 봤는지만 알려도 학교와 지원 기관이 확인할 수 있어요"라고 바로잡는다. 거북이 판은 차례를 익히는 비유이고 단계 글은 활동지에 쓴다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'block-coding', options: BC_BASE, prompt: '별 3개(①전달하지 않기 ②저장하지 않기 ③알리기)를 지나 깃발(④삭제 지원 요청)에 닿게 하세요.', target: { reach: true, stars: true, maxBlocks: 4 }, difficulty: 0.15 },
              { prompt: '별 2개(①전달하지 않기 ②저장하지 않기)를 지나 깃발(③알리기)에 닿게 하세요.', toolOptions: BC_EASY, target: { reach: true, stars: true, maxBlocks: 3 } },
              { prompt: '친구 프로그램이 ②에서 꺾어 바위(다른 방에 전달)에 부딪혀요. 블록 하나만 고쳐 깃발에 닿게 하세요.', state: { program: ['fwd', 'fwd', 'right', 'fwd'] }, target: { reach: true, stars: true, maxEdits: 1 } }),
            { type: 'choice', prompt: '합성물을 발견했을 때 가장 먼저 할 일은?', options: ['증거로 저장해 둔다', '다른 방에 보내 진짜인지 묻는다', '전달하지 않고 멈춘다'], answer: 2, difficulty: 0.2, explain: '먼저 퍼짐을 멈추고, 저장하지 않고, 어른·학교에 알려요.' },
            { type: 'short', prompt: '친구가 "알리려면 저장해야지"라고 할 때 해 줄 말을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '합성물을 발견했을 때',
          items: [
            { type: 'table', prompt: '대응 차례를 써요.', columns: ['차례', '할 일'], cells: [['①', ''], ['②', ''], ['③', ''], ['④', '']], answer: '전달하지 않기, 저장하지 않기, 어른·학교에 알리기, 삭제 지원 요청' },
            { type: 'short', prompt: '저장하지 않아야 하는 까닭을 한 문장으로 써요.' },
          ],
        },
        notes: '거북이 코딩판 블록에는 글을 붙일 수 없어 대응 단계를 별 칸으로, 마지막 단계를 깃발로, 하지 말아야 할 행동(다른 방에 전달)을 바위로 나타냈다. 단계 글은 문항 글과 활동지가 맡는다. ' + SAFE_NOTE,
      }),
      M('wrap.school-poster', {
        title: '학교 게시용 경고·도움 포스터', method: '경고와 도움 경로를 담은 포스터 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '포스터 구성(경고 문구 + 도움 경로) 가운데 알맞은 것을 고르고(둘째 출구 질문) 그림을 꾸민다.', base: '그림을 꾸미고 경고 문구와 도움 경로 문구를 직접 쓴다(셋째 출구 질문).', challenge: '보는 대상(학생·보호자)마다 다른 메시지를 나눠 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"복도에 붙일 포스터 한 장으로 \'만들지·보지·퍼뜨리지 않기\'와 도울 곳을 함께 알리려면 무엇을 크게 써야 할까요?" 콜라주 판에는 그림만 붙고 문구는 출구 질문과 활동지에 쓴다고 알려 준다. "피해자도 사진 관리를 잘하자"를 넣자는 의견이 나오면 "그 문구를 피해 학생이 읽으면 어떨까요? 잘못은 누구에게 있나요?"라고 되묻는다. 도움 경로 칸에는 학교가 확인해 넣는 지역 상담 번호가 들어간다고 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 포스터 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['경고 문구를 넣을 자리를 정했다', '도움 경로를 넣을 자리를 정했다', '자극적인 그림이 없다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '포스터 구성으로 가장 알맞은 것은?', options: ['"피해자도 사진 관리를 잘하자" + 경고', '"만들지·보지·퍼뜨리지 않기" + 믿는 어른·학교 상담·지역 상담 번호', '합성 이미지 예시 + 경고'], answer: 1, difficulty: 0.15, explain: '피해자 탓이나 합성 예시 없이 행동과 도움 경로를 담아요.' },
            { type: 'short', prompt: '포스터에 넣을 경고 문구와 도움 경로 문구를 써요.' },
            { type: 'short', prompt: '학생에게 보낼 문구와 보호자에게 보낼 문구를 하나씩 써요.' },
          ],
        },
        worksheet: {
          title: '만들지·보지·퍼뜨리지 않기',
          items: [
            { type: 'short', prompt: '포스터 경고 문구를 써요.' },
            { type: 'short', prompt: `포스터 도움 경로 칸을 써요(믿는 어른·학교 상담·${LOCAL}).` },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 포스터 문구는 출구 질문과 활동지에서 쓴다. 합성 이미지 예시는 넣지 않는다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 15-g8-family-cycle.js ====
  // ==== 8학년 · 폭력의 고리를 끊는 가정 (gender.m.g8-family-cycle) ====
  {
    const M = MK('g8-family-cycle', [8]);
    const FORMS = ['신체', '정서', '방임'];
    const FORM_CARDS = [
      { id: 'f1', text: '화가 나면 물건을 던지고 밀친다', to: '신체' }, { id: 'f2', text: '세게 붙잡아 멍이 들게 한다', to: '신체' },
      { id: 'f3', text: '"너 같은 건 필요 없어"라고 되풀이한다', to: '정서' }, { id: 'f4', text: '말을 안 들으면 쫓아내겠다고 위협한다', to: '정서' },
      { id: 'f5', text: '며칠씩 끼니를 챙기지 않고 내버려 둔다', to: '방임' }, { id: 'f6', text: '아파도 병원에 데려가지 않는다', to: '방임' },
      { id: 'f7', text: '게임 시간으로 말다툼하고 다음 날 화해한다' },
    ];
    const TENSION = [['1주', 2], ['2주', 4], ['3주', 7], ['4주', 9], ['5주', 2], ['6주', 4], ['7주', 7], ['8주', 9]];
    const LN = (o) => Object.assign({ type: 'line', mode: 'read', title: '가상 가정의 긴장 정도(가상 자료)', unit: '점', xLabel: '주', yLabel: '긴장 정도', data: TENSION, max: 10, scale: 1 }, o);
    // 대물림을 끊은 가상 인물 태오의 이야기(차례)
    const STORY = [
      { id: 't1', text: '어린 태오는 집에서 큰 소리와 다툼을 자주 본다' }, { id: 't2', text: '태오는 그게 자기 탓인 줄 알고 혼자 참는다' },
      { id: 't3', text: '중학생 태오가 Wee 클래스 상담 선생님께 털어놓는다' }, { id: 't4', text: '상담에서 "네 잘못이 아니야"라는 말을 듣는다' },
      { id: 't5', text: '태오는 화날 때 멈추고 말로 하는 법을 배운다' }, { id: 't6', text: '어른이 된 태오는 가족과 대화로 갈등을 푼다' },
    ];
    const D1 = { text: '가상 가족: 늦게 들어온 동생에게 보호자가 화가 나 소리치며 옆의 물건을 집어 던지려 한다. 언니 윤서가 그 모습을 본다.', ask: '보호자에게 필요한 선택은?', motif: 'house', choices: [
      { id: 'throw', text: '화를 참지 못하고 물건을 던진다', result: '동생이 겁에 질려 방으로 숨는다. 윤서도 떨린다.', impact: [{ who: '동생', text: '두려움이 남는다', tone: -1 }, { who: '윤서', text: '본 것만으로도 마음이 다친다', tone: -1 }], why: '훈육이라도 물건을 던지거나 위협하는 것은 폭력이에요. 잘못은 행동한 어른에게 있어요.', end: '두려움이 집 안에 남았어요.',
        next: { text: '다음 날 보호자가 아무 일 없던 것처럼 군다. 윤서는 동생이 걱정된다.', ask: '윤서는 어떻게 할까?', choices: [
          { id: 'tellT', text: '믿는 어른(담임·Wee 클래스 선생님)에게 집에서 있었던 일을 말한다', result: '선생님이 윤서와 동생의 안전부터 확인하고 도움을 잇는다.', impact: [{ who: '윤서와 동생', text: '보호받을 길이 생긴다', tone: 1 }], end: '믿는 어른에게 말했어요.',
            next: { text: '선생님이 "말해 줘서 고마워. 네 잘못이 아니야"라고 한다.', choices: [
              { id: 'keepTalk', text: '앞으로도 무서운 일이 있으면 다시 말하기로 한다', result: '윤서는 기댈 곳이 생긴다.', impact: [{ who: '윤서', text: '혼자 감당하지 않는다', tone: 1 }], ending: '말하는 길을 열어 두었어요.' },
              { id: 'regret', text: '집안일을 밖에 말한 것을 후회한다', result: '윤서가 다시 혼자 참으려 한다.', impact: [{ who: '윤서', text: '다시 고립된다', tone: -1 }], why: '안전에 관한 일은 집안일이 아니에요. 말한 것은 잘한 일이에요.' }] } },
          { id: 'hide', text: '집안일이니 아무에게도 말하지 않는다', result: '같은 일이 또 일어날까 마음 졸인다.', impact: [{ who: '윤서와 동생', text: '도움을 받지 못한다', tone: -1 }], why: '가정의 일이라도 안전이 위험하면 도움을 청할 수 있어요.' }] } },
      { id: 'pause', text: '물건을 내려놓고 "잠깐 숨 고르고 이야기하자"며 멈춘다', result: '보호자가 방을 나가 숨을 고른다. 동생이 조금 안심한다.', impact: [{ who: '동생', text: '두려움이 줄어든다', tone: 1 }], end: '화를 멈추고 숨을 골랐어요.',
        next: { text: '십 분 뒤 보호자가 돌아온다. 동생은 아직 굳어 있다.', ask: '다음 선택은?', choices: [
          { id: 'talk', text: '"걱정돼서 화가 났어. 늦을 땐 연락해 줄래?"라고 말한다', result: '동생이 "미안, 다음엔 연락할게"라고 답한다.', impact: [{ who: '가족', text: '서로의 마음을 안다', tone: 1 }], end: '감정과 바람을 말로 전했어요.',
            next: { text: '보호자는 화가 자주 커지는 것이 걱정된다.', choices: [
              { id: 'help', text: '가족 상담처럼 대화 방법을 배울 도움을 찾는다', result: '가족이 함께 대화 연습을 시작한다.', impact: [{ who: '가족', text: '고리를 끊을 힘이 생긴다', tone: 1 }], ending: '멈추고, 말하고, 도움을 받았어요.' },
              { id: 'alone', text: '참으면 된다며 혼자 넘긴다', result: '다음에 또 화가 커질 수 있다.', impact: [{ who: '가족', text: '긴장이 다시 쌓인다', tone: -1 }], why: '혼자 참기만 하면 긴장이 다시 쌓여요. 도움을 받는 것은 책임 있는 선택이에요.' }] } },
          { id: 'blame', text: '"네가 늦게 와서 내가 화난 거야"라고 몰아붙인다', result: '동생이 고개를 숙이고 입을 닫는다.', impact: [{ who: '동생', text: '자기 탓으로 느낀다', tone: -1 }], why: '화를 낸 책임은 화낸 사람에게 있어요. 상대 탓으로 돌리면 고리가 이어져요.' }] } }] };
    const R1 = [{ id: 'r1', text: '훈육은 몸과 마음을 다치게 하지 않는다' }, { id: 'r2', text: '위협과 물건 던지기는 훈육이 아니라 폭력이다' },
      { id: 'r3', text: '아이가 잘못했으면 어떤 방법도 괜찮다', why: '훈육이라도 때리거나 위협하는 것은 괜찮지 않아요.' }, { id: 'r4', text: '가족 일은 가족끼리만 풀어야 한다', why: '안전이 위험하면 밖에 도움을 청할 수 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '멈춘 길에서는 가족이 대화로 돌아왔다' }, { id: 'r6', text: '던진 길에서는 지켜본 윤서까지 마음을 다쳤다' }], ok: ['r5', 'r6'] };
    const HELP = ['안전한 곳으로 가기', '믿는 어른에게 알리기', '학교 상담(Wee 클래스)', `신고·상담 번호 ${LOCAL}`];

    ALL.push(
      // ---- 도입 ----
      M('intro.forms-map', {
        title: '가정폭력의 세 모습 정리', method: '장면 카드를 가정폭력의 세 모습 가지에 붙이기', tool: 'mindmap', minutes: 5,
        levels: { easy: '시연 판의 신체·정서 두 가지 카드만 함께 읽는다.', base: '신체·정서·방임 세 가지에 장면 카드 6장이 붙는 시연을 보고, 남겨 둔 갈등 카드가 왜 폭력이 아닌지 말한다.', challenge: '정서 폭력의 예를 하나 더 만들어 짝에게 말하고, 세 모습의 공통점(두려움·통제)을 찾는다.' },
        intro: {
          teacher: '"때리지 않으면 가정폭력이 아닐까요?" 가운데 \'가정폭력\'에서 신체·정서·방임 세 가지를 펼치고 시연 단추로 장면 카드가 붙는 모습을 보인다. 말다툼 뒤 화해한 카드는 어느 가지에도 붙이지 않는다는 점을 보이며 "갈등과 폭력은 무엇이 다를까요?"라고 묻는다. "말로 하는 건 폭력이 아니다"라는 말이 나오면 "\'쫓아내겠다\'는 말을 날마다 듣는다면 몸은 멀쩡해도 집이 안전할까요?"라고 되묻는다. 세 모습의 공통점은 두려움과 통제라는 점을 짚는다.',
          student: '가정폭력을 신체·정서·방임 세 가지로 펼치고, 가상 장면 카드를 붙인 뒤 세 모습의 공통점을 찾아요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '가정폭력', slots: FORMS, cards: strip(FORM_CARDS) }, sequence: [{ sort: { 신체: ['f1', 'f2'], 정서: ['f3', 'f4'], 방임: ['f5', 'f6'] } }] },
          art: { draw: 'a paper-cut house with three paper branches growing from its roof, each holding small cards, a cracked paper heart in the middle', banner: '가정폭력의 세 모습', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '학생 자신의 가정 이야기를 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.cycle-chart', {
        title: '긴장·폭발·화해 고리 읽기', method: '가상 꺾은선에서 되풀이되는 폭력의 고리 찾기', tool: 'chart', minutes: 7,
        levels: { easy: '앞 4주(한 고리)만 보며 긴장이 가장 높은 주를 함께 읽는다.', base: '8주 꺾은선에서 높아짐 → 폭발 → 잠잠이 두 번 되풀이되는 모양을 고르는 시연을 본다.', challenge: '고리를 끊을 수 있는 지점(긴장이 쌓이기 시작하는 때)을 짝에게 말한다.' },
        intro: {
          teacher: '"한 달 동안 이 가정의 긴장 정도는 어떻게 움직였나요? 4주 뒤에 잠잠해지면 끝난 걸까요?" 가상 가정의 긴장 정도 꺾은선을 띄우고 시연 단추로 \'되풀이된다\'를 고르는 모습을 보인다. "화해했으니 괜찮아진 것"이라는 말이 나오면 "5주 뒤에 무슨 일이 일어났나요?"라고 되묻는다. 잠잠한 때가 고리를 끊을 기회라는 점을 짚는다. 값은 수업용 가상 자료이다.',
          student: '가상 가정의 긴장 정도 꺾은선에서 높아짐·폭발·잠잠이 어떻게 되풀이되는지 읽고, 고리를 끊을 때를 생각해요.',
          demo: { tool: 'chart', options: LN({ question: '꺾은선이 보여 주는 모양은?', choices: ['한 번 높아지고 끝난다', '높아짐 → 폭발 → 잠잠이 되풀이된다', '점점 줄어 사라진다'] }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut line chart shaped like two mountain peaks drawn with paper strips, a small paper pair of scissors cutting the line at a valley', banner: '고리는 끊을 수 있다', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '꺾은선 값은 모두 가상이다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.cycle-case', {
        title: '대물림을 끊은 인물 사례 분석', method: '가상 인물 이야기 차례 놓기와 도움이 된 것 찾기', tool: 'story', minutes: 16,
        levels: { easy: '장면 카드 4장(본 것 → 털어놓기 → 배우기 → 대화로 풀기)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 6장을 차례로 놓고, 둘째 문항에서 태오에게 도움이 된 것을 고른다.', challenge: '셋째 문항에서 태오가 배운 대화 방법을 빈칸 말풍선에 골라 넣는다(헷갈리는 카드가 섞인다).' },
        activity: {
          title: '대물림을 끊은 인물 사례 분석', tool: 'story',
          teacher: '"폭력을 보고 자란 태오는 반드시 폭력을 쓰는 어른이 될까요?" 장면 카드를 차례로 놓은 뒤, 태오의 이야기가 바뀐 장면이 어디인지 묻는다. "본 대로 배우니까 어쩔 수 없다"는 학생에게 "태오가 바뀐 까닭은 무엇이었나요? 털어놓은 일과 배운 일을 찾아볼까요?"라고 되묻는다. 폭력은 본 아이의 탓이 아니고, 도움과 배움으로 고리를 끊을 수 있다는 점을 짚는다.',
          task: '가상 인물 태오가 어릴 때 본 폭력을 되풀이하지 않기로 한 이야기를 차례로 놓고, 고리를 끊는 데 도움이 된 것을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('태오의 이야기 장면 카드를 차례대로 놓으세요.', STORY, { title: '태오의 이야기' }),
              OB('태오의 이야기 장면 카드 4장을 차례대로 놓으세요.', pickCards(STORY, ['t1', 't3', 't5', 't6']), { title: '태오의 이야기' })),
            IT(PB('태오가 고리를 끊는 데 도움이 된 것만 골라 담으세요.', '도움이 된 것', [
              { id: 'h1', text: '믿는 어른에게 털어놓기', ok: true }, { id: 'h2', text: '"네 잘못이 아니야"라는 말 듣기', ok: true },
              { id: 'h3', text: '화날 때 멈추고 말로 하는 법 배우기', ok: true }, { id: 'h4', text: '혼자 참고 숨기기' }, { id: 'h5', text: '본 대로 똑같이 따라 하기' }], { title: '고리를 끊은 힘' })),
            IT(FB('태오가 배운 대화 방법을 말풍선 빈칸에 넣으세요.', [
              ['화날 때는 먼저 ___.', '멈추고 숨을 고른다', '태오'], ['상대를 탓하지 않고 ___.', '내 마음을 말한다', '태오'], ['혼자 어려우면 ___.', '상담·도움을 받는다', '태오']], [], { title: '태오의 대화 방법' }),
              null,
              FB('태오가 배운 대화 방법을 말풍선 빈칸에 넣으세요(헷갈리는 카드가 섞였어요).', [
                ['화날 때는 먼저 ___.', '멈추고 숨을 고른다', '태오'], ['상대를 탓하지 않고 ___.', '내 마음을 말한다', '태오'], ['혼자 어려우면 ___.', '상담·도움을 받는다', '태오']], ['큰 소리로 이긴다', '참고 넘긴다'], { title: '태오의 대화 방법' }),
              { conclude: '폭력을 본 것은 아이의 탓이 아니고, 본 아이가 반드시 폭력을 쓰는 것도 아니에요. 털어놓고, 도움을 받고, 대화 방법을 배우면 고리를 끊을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"폭력을 본 아이는 반드시 폭력을 쓴다"는 말이 틀린 까닭을 태오의 이야기로 한 문장 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.discipline-dilemma', {
        title: '훈육과 폭력 사이 갈림길', method: '가상 가족의 훈육과 폭력 갈림길 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 가족에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 훈육과 폭력을 가르는 근거를 고른다.', challenge: '갈림 3번 뒤 다른 길과 견주는 근거까지 고르고, 셋째 문항에서 보호자가 쓸 수 있는 대체 행동을 고른다.' },
        activity: {
          title: '훈육과 폭력 사이 갈림길', tool: 'dilemma',
          teacher: '"보호자가 화가 난 까닭은 걱정이었어요. 그렇다면 물건을 던져도 될까요?" 학생마다 보호자의 길과 지켜본 윤서의 길을 끝까지 가 보게 한다. "훈육이라면 어떤 방법도 괜찮다"는 학생에게 "훈육의 목적이 아이가 배우는 것이라면, 겁에 질린 동생은 무엇을 배웠을까요?"라고 되묻는다. 지켜본 윤서도 마음을 다친다는 것(목격도 피해), 잘못은 행동한 어른에게 있다는 것을 끝 장면에서 짚는다.',
          task: '가상 가족에서 보호자가 화가 나 물건을 던지려는 장면에서 길을 골라 결과를 따라가고, 훈육과 폭력을 가르는 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '보호자가 화가 났어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '보호자가 화가 났어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '늦은 귀가와 화', D1, [['pause', 'talk', 'help'], ['throw', 'tellT', 'keepTalk']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '훈육과 폭력 가운데 무엇인지 가르는 장면을 따라가세요.', toolOptions: { title: '훈육일까, 폭력일까?', scene: { text: '보호자가 숙제를 안 한 아이에게 할 수 있는 말과 행동이 여러 가지다.', ask: '훈육으로 알맞은 것은?', motif: 'house', choices: [
              { id: 'rule', text: '차분히 까닭을 묻고 숙제 시간을 함께 정한다', result: '아이가 스스로 계획을 세운다.', impact: [{ who: '아이', text: '배우고 존중받는다', tone: 1 }], ending: '몸과 마음을 다치게 하지 않고 가르쳤어요.' },
              { id: 'threat', text: '"또 안 하면 집에서 쫓아낸다"고 위협한다', result: '아이가 겁에 질려 거짓말을 하기 시작한다.', impact: [{ who: '아이', text: '두려움을 배운다', tone: -1 }], why: '위협은 정서 폭력이에요. 두려움으로는 배우지 않아요.' },
              { id: 'ignore', text: '며칠 동안 밥을 챙겨 주지 않는다', result: '아이가 배고픈 채로 학교에 간다.', impact: [{ who: '아이', text: '몸과 마음을 다친다', tone: -1 }], why: '돌보지 않는 것은 방임이에요.' }] }, reasons: [{ id: 'q1', text: '훈육은 아이가 배우도록 돕는다' }, { id: 'q2', text: '두려움·굶김은 훈육이 아니다' }, { id: 'q3', text: '아이가 말을 들으면 무엇이든 효과적인 훈육이다', why: '말을 듣게 하는 것보다 다치지 않게 하는 것이 먼저예요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['rule']], reasons: ['q1', 'q2'], some: true } },
              { prompt: '훈육으로 알맞은 것을 고르세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } },
              { prompt: '훈육으로 알맞은 것을 고르고 근거를 모두 고르세요.', target: { path: [['rule']], reasons: ['q1', 'q2'] } }),
            IT({ prompt: '화가 커질 때 보호자가 쓸 수 있는 행동을 고르는 장면을 따라가세요.', toolOptions: { title: '화가 커질 때', scene: { text: '보호자가 또 화가 크게 나기 시작한다.', ask: '대신할 행동은?', motif: 'house', choices: [
              { id: 'leave', text: '잠시 자리를 떠나 숨을 고른 뒤 다시 이야기한다', result: '화가 가라앉고 대화가 이어진다.', impact: [{ who: '가족', text: '안전하게 이야기한다', tone: 1 }], ending: '대체 행동으로 고리를 끊었어요.' },
              { id: 'shout', text: '목소리를 더 높여 이기려 한다', result: '집 안 긴장이 더 커진다.', impact: [{ who: '가족', text: '두려움이 커진다', tone: -1 }], why: '목소리를 높이면 긴장이 쌓여요.' }] }, reasons: [{ id: 'p1', text: '멈추고 숨 고르기는 폭발을 막는다' }, { id: 'p2', text: '화를 참지 못하는 것은 성격이라 어쩔 수 없다', why: '대체 행동은 배우고 연습할 수 있어요.' }], compare: true },
              target: { path: [['leave']], reasons: ['p1'] },
              conclude: '훈육은 몸과 마음을 다치게 하지 않고 가르치는 것이에요. 위협·물건 던지기·돌보지 않기는 폭력이고, 지켜본 가족도 피해를 입어요. 화가 날 때는 멈추고, 말하고, 도움을 받아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '훈육과 폭력을 가르는 기준으로 가장 알맞은 것은?', options: ['아이가 말을 듣게 되었는가', '몸과 마음을 다치게 하거나 두렵게 하는가', '보호자가 걱정해서 한 일인가'], answer: '몸과 마음을 다치게 하거나 두렵게 하는가' }] },
        notes: '장면은 가상 가족이며 자세히 묘사하지 않는다. 학생 자신의 집 이야기를 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.calm-talk', {
        title: '갈등을 푸는 가족 대화 대본', method: '나-전달법 가족 대화 대본 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '보호자·자녀 대사 4줄을 문장 시작 말로 쓰고 기준 2개를 점검한다.', base: '대사 8줄 대본을 나눠 쓰고 기준표(비난 없음·감정 말하기·해결 제안)로 점검한다.', challenge: '셋째 문항에서 대화가 실패할 때 도움받을 곳을 넣어 마무리한다.' },
        activity: {
          title: '갈등을 푸는 가족 대화 대본', tool: 'rubric-writing',
          teacher: '"\'너는 왜 맨날 늦어!\'와 \'연락이 없어서 걱정했어\', 듣는 사람은 무엇이 다르게 들릴까요?" 나-전달법(상황 → 내 감정 → 바람)을 먼저 보이고 쓰게 한다. "가족끼리는 말 안 해도 안다"는 학생에게 "말하지 않으면 동생은 보호자의 걱정을 알 수 있을까요?"라고 되묻는다. 대본은 가상 가족의 이야기이고 자기 집 이야기를 쓰지 않는다고 미리 말한다.',
          task: '가상 가족의 늦은 귀가 갈등을 나-전달법으로 푸는 대본을 쓰고, 비난 없음·감정 말하기·해결 제안을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '보호자 대사: 비난 없이 걱정한 마음과 바람을 말하는 대사를 쓰세요.', toolOptions: { topic: '가상 가족: 동생이 연락 없이 늦게 들어왔다. 보호자가 나-전달법(상황 → 내 감정 → 바람)으로 말하는 대사를 서너 줄 쓰세요.', minChars: 50, maxChars: 220, minSentences: 3, maxSentences: 4, title: '대본 ① 보호자' }, target: { selfCheck: ['비난하는 말이 없다', '내 감정을 말했다', '바라는 것을 말했다'], mustInclude: [['걱정', '마음', '불안']] } },
              { prompt: '문장 시작 말을 채워 보호자 대사 두 줄을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '연락 없이 늦게 와서 ___. 다음엔 ___.' }, target: { selfCheck: ['비난하는 말이 없다', '내 감정을 말했다'], mustInclude: [['걱정', '마음', '불안']] } }),
            IT({ prompt: '자녀 대사와 함께 정할 약속: 사정을 말하고 해결을 제안하는 대사를 쓰세요.', toolOptions: { topic: '동생이 보호자의 말에 답하며 늦은 사정과 미안한 마음을 말하고, 두 사람이 함께 정할 약속(해결 제안)을 서너 줄 쓰세요.', minChars: 50, maxChars: 220, minSentences: 3, maxSentences: 4, title: '대본 ② 자녀와 약속' }, target: { selfCheck: ['비난하는 말이 없다', '감정을 말했다', '해결을 제안했다'] } },
              { prompt: '문장 시작 말을 채워 자녀 대사 두 줄을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '걱정하게 해서 ___. 앞으로는 ___.' }, target: { selfCheck: ['비난하는 말이 없다', '해결을 제안했다'] } }),
            IT({ prompt: '가상 친구의 대본 "너는 맨날 그래! 됐어, 말하기 싫어"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 쓴 보호자 대사: "너는 맨날 그래! 됐어, 말하기 싫어." 기준표(비난 없음·감정 말하기·해결 제안)로 읽고 고친 대사를 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '친구 대본 고쳐 쓰기' }, target: { selfCheck: ['비난하는 말을 뺐다', '감정을 넣었다', '해결을 제안했다'] } },
              null,
              { prompt: '대화가 잘 안 될 때 가족이 도움받을 곳을 넣어 대본을 마무리하세요.', toolOptions: { topic: '대화로 풀리지 않거나 다툼이 무서워질 때, 가족이나 자녀가 도움받을 곳(믿는 어른·Wee 클래스·가족 상담)을 넣어 마무리 대사를 두세 문장 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '도움받을 곳으로 마무리' }, target: { selfCheck: ['도움받을 곳을 넣었다', '비난하는 말이 없다', '안전을 먼저 생각했다'], mustInclude: [['상담', 'Wee', '선생님', '어른']] } },
              { conclude: '갈등을 푸는 대화는 상대를 탓하지 않고, 내 감정과 바람을 말하고, 함께 해결을 제안해요. 대화로 안 될 때는 도움을 받아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가족 갈등을 푸는 대화로 알맞은 것은?', options: ['"너는 맨날 그래!"', '"늦어서 걱정했어. 다음엔 연락해 줄래?"', '(소리치며 방문을 닫는다)'], answer: '"늦어서 걱정했어. 다음엔 연락해 줄래?"' }, { type: 'short', prompt: '"너는 왜 맨날 늦어!"를 나-전달법 한 문장으로 바꾸어 써요.' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.help-order', {
        title: '안전과 도움 요청 차례', method: '안전과 도움 요청 순서 카드 맞추기', tool: 'timer', minutes: 6,
        levels: { easy: '순서 카드 3장(안전한 곳 → 믿는 어른 → 학교 상담)의 차례를 맞춘다.', base: '순서 카드 4장(안전한 곳 → 믿는 어른 → 학교 상담(Wee 클래스) → 신고·상담 번호)의 차례를 맞춘다.', challenge: '친구를 도울 때의 차례를 셋째 출구 질문에 한 줄로 덧붙인다.' },
        wrap: {
          teacher: '"집에서 무서운 일이 일어나는 순간, 가장 먼저 할 일은 무엇일까요?" 순서 카드를 섞어 보이고 차례를 맞추게 한다. "어른에게 먼저 전화해야 한다"는 학생에게 "지금 위험하다면 전화보다 먼저 몸을 지켜야 하지 않을까요?"라고 되묻는다. 지역 신고·상담 번호 칸은 학교가 확인해 채운 번호를 함께 읽는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '안전과 도움 요청 차례', cards: [HELP[2], HELP[0], HELP[3], HELP[1]] }, prompt: '안전과 도움 요청 순서 카드를 차례대로 놓아요.', target: { order: HELP }, difficulty: 0.15 },
              { prompt: '순서 카드 3장을 차례대로 놓아요.', options: { cards: [HELP[2], HELP[0], HELP[1]] }, target: { order: HELP.slice(0, 3) } }),
            { type: 'choice', prompt: '"가족 일은 남에게 말하면 안 된다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 집안일이다', '안전이 위험하면 믿는 어른과 기관에 도움을 청할 수 있다', '경찰만 도울 수 있다'], answer: 1, difficulty: 0.2, explain: '안전에 관한 일은 집안일이 아니에요.' },
            { type: 'short', prompt: '친구가 집이 무섭다고 말할 때 내가 할 차례를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '안전과 도움 요청 차례',
          items: [
            { type: 'table', prompt: '도움 요청 차례를 써요.', columns: ['차례', '할 일'], cells: [['①', ''], ['②', ''], ['③', ''], ['④', '']], answer: '안전한 곳으로 가기, 믿는 어른에게 알리기, 학교 상담(Wee 클래스), 신고·상담 번호' },
            { type: 'short', prompt: `우리 지역 신고·상담 번호를 써요(${LOCAL}).` },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.cycle-break', {
        title: '"멈추고, 말하고, 도움받기" 포스터', method: '고리를 끊는 약속 포스터 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '포스터 구성 보기 가운데 알맞은 것을 고르고(둘째 출구 질문) 그림을 꾸민다.', base: '그림을 꾸미고 "멈추고, 말하고, 도움받기"를 풀어 쓴 문구를 직접 쓴다(셋째 출구 질문).', challenge: '가족 모두가 지킬 규칙 하나를 넣는다(넷째 출구 질문).' },
        wrap: {
          teacher: '"고리를 끊는 세 마디 \'멈추고, 말하고, 도움받기\'를 포스터에 어떻게 담을까요?" 콜라주 판에는 그림만 붙고 문구는 출구 질문과 활동지에 쓴다고 알려 준다. "참는 가족이 좋은 가족"이라는 문구가 나오면 "참기만 하면 긴장은 어디로 갈까요? 오늘 본 꺾은선을 떠올려 봐요"라고 되묻는다. 특정 가족 이야기를 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 포스터 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['멈추고·말하고·도움받기를 담을 자리를 정했다', '두려움을 주는 그림이 없다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '포스터 구성으로 가장 알맞은 것은?', options: ['"참는 가족이 좋은 가족"', '"화날 땐 멈추고, 마음은 말로, 어려우면 도움받기"', '"집안일은 집 안에서만"'], answer: 1, difficulty: 0.15, explain: '멈추고, 말하고, 도움받는 행동을 담아요.' },
            { type: 'short', prompt: '"멈추고, 말하고, 도움받기"를 풀어 쓴 포스터 문구를 써요.' },
            { type: 'short', prompt: '가족 모두가 지킬 대화 규칙 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '멈추고, 말하고, 도움받기',
          items: [
            { type: 'short', prompt: '포스터 문구를 써요.' },
            { type: 'short', prompt: '도움받을 곳을 하나 써요(믿는 어른·Wee 클래스·지역 상담 번호 등).' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 포스터 문구는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 16-g8-grooming.js ====
  // ==== 8학년 · 온라인 그루밍과 성착취 예방 기초 (gender.m.g8-grooming) ====
  {
    const M = MK('g8-grooming', [8]);
    const STAGE = [
      { id: 's1', text: '"너 진짜 잘한다" 칭찬하며 친해진다' }, { id: 's2', text: '고민을 들어 주며 "나만 너를 이해해"라고 한다' },
      { id: 's3', text: '게임 아이템을 선물한다' }, { id: 's4', text: '"우리 둘만의 비밀이야"라고 약속하게 한다' },
      { id: 's5', text: '"사진 한 장만" 보내 달라고 요구한다' },
    ];
    const RED = [
      { id: 'w1', text: '"우리 둘만의 비밀이야"', ok: true }, { id: 'w2', text: '"부모님은 몰라도 돼"', ok: true },
      { id: 'w3', text: '"나만 너를 진짜 이해해"', ok: true }, { id: 'w4', text: '"사진 한 장만 보내 줘"', ok: true },
      { id: 'w5', text: '"어느 학교 다녀? 집은 어디쯤이야?"', ok: true }, { id: 'w6', text: '"오늘 게임 재밌었다"' }, { id: 'w7', text: '"다음 판도 같이 하자"' },
    ];
    const D1 = { text: '몇 주 동안 게임을 같이 한 \'하늘\'이 아이템을 여러 번 선물해 주었다. 오늘은 "만나서 직접 이야기하자, 부모님한텐 비밀로 하고"라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'meet', text: '선물을 받았으니 미안해서 만나기로 한다', result: '하늘이 장소와 시간을 정하며 "혼자 와"라고 한다.', impact: [{ who: '나', text: '위험한 상황으로 다가간다', tone: -1 }], why: '선물을 받았어도 갚을 책임은 없어요. 비밀 만남 요구는 위험 신호예요.', end: '혼자 만나러 갈 위험에 놓였어요.',
        next: { text: '약속 전날, 마음이 불안해진다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'tellLate', text: '약속을 취소하고 대화 기록을 보호자에게 보여 준다', result: '보호자와 함께 차단·신고하고 학교에도 알린다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }], end: '늦었지만 알렸어요.',
            next: { text: '하늘이 다른 계정으로 "선물 값 갚아"라는 메시지를 보낸다.', choices: [
              { id: 'record', text: '답하지 않고 화면을 저장해 보호자·선생님께 보여 준다', result: '어른들이 함께 신고 절차를 밟는다.', impact: [{ who: '나', text: '혼자 감당하지 않는다', tone: 1 }], ending: '갚을 책임이 없다는 걸 알고 함께 대응했어요.' },
              { id: 'pay', text: '겁이 나서 용돈으로 갚겠다고 답한다', result: '요구가 더 커진다.', impact: [{ who: '나', text: '빠져나오기 어려워진다', tone: -1 }], why: '대가를 노린 선물은 갚을 책임이 없어요. 답하지 말고 어른과 함께 대응해요.' }] } },
          { id: 'go', text: '약속했으니 그냥 나간다', result: '모르는 사람을 혼자 만나는 위험에 놓인다.', impact: [{ who: '나', text: '위험해진다', tone: -1 }], why: '약속보다 내 안전이 먼저예요. 언제든 취소하고 알릴 수 있어요.' }] } },
      { id: 'refuse', text: '"만나는 건 안 돼"라고 거절한다', result: '하늘이 "선물 준 게 얼만데"라며 섭섭하다고 조른다.', impact: [{ who: '나', text: '내 안전을 지킨다', tone: 1 }], end: '만남을 거절했어요.',
        next: { text: '하늘이 계속 조르며 "비밀만 지키면 아무 일 없어"라고 한다.', ask: '다음은?', choices: [
          { id: 'block', text: '대화 화면을 저장한 뒤 차단하고 신고한다', result: '하늘의 연락이 멈춘다.', impact: [{ who: '나', text: '연락에서 벗어난다', tone: 1 }], end: '기록을 남기고 차단했어요.',
            next: { text: '그래도 하늘이 다른 친구에게도 그럴까 걱정된다.', choices: [
              { id: 'tellP', text: '보호자와 담임 선생님께 저장한 화면을 보여 준다', result: '학교가 같은 게임을 하는 학생들에게 주의를 알린다.', impact: [{ who: '친구들', text: '함께 보호받는다', tone: 1 }], ending: '거절하고, 기록하고, 알렸어요.' },
              { id: 'secret', text: '내가 거절했으니 됐다며 아무에게도 말하지 않는다', result: '하늘은 다른 학생에게 같은 말을 건다.', impact: [{ who: '다른 학생', text: '같은 위험에 놓인다', tone: -1 }], why: '알리면 다른 친구도 지킬 수 있어요.' }] } },
          { id: 'keepS', text: '미안한 마음에 비밀은 지켜 주기로 한다', result: '하늘이 비밀을 핑계로 요구를 이어 간다.', impact: [{ who: '나', text: '혼자 고민을 안는다', tone: -1 }], why: '나를 불안하게 하는 비밀은 지키지 않아도 돼요.' }] } },
      { id: 'askP', text: '대답하지 않고 대화 화면을 보호자에게 바로 보여 준다', result: '보호자와 함께 차단·신고한다.', impact: [{ who: '나', text: '처음부터 보호받는다', tone: 1 }], ending: '바로 알려 함께 대응했어요.' }] };
    const R1 = [{ id: 'r1', text: '선물이 비밀·만남 요구와 함께 오면 거래로 바뀐 신호다' }, { id: 'r2', text: '선물을 받았어도 갚을 책임은 없고 잘못은 요구한 쪽에 있다' },
      { id: 'r3', text: '선물을 받았으니 부탁 하나는 들어줘야 한다', why: '대가를 노린 선물은 갚을 책임이 없어요.' }, { id: 'r4', text: '먼저 대화를 시작했다면 내 책임이다', why: '청소년에게 비밀·만남을 요구한 쪽의 잘못이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '알린 길에서는 어른과 함께 대응했다' }, { id: 'r6', text: '비밀을 지킨 길에서는 요구가 이어졌다' }], ok: ['r5', 'r6'] };
    const DEAL = [
      { id: 'g1', text: '1주: 칭찬과 함께 받은 게임 아이템', price: 3000 }, { id: 'g2', text: '2주: "비밀로 해" 하며 받은 스킨', price: 5000 },
      { id: 'g3', text: '3주: "사진 보내면" 하며 받은 용돈', price: 10000 }, { id: 'g4', text: '4주: "만나면 더 줄게" 하며 받은 기프티콘', price: 7000 },
      { id: 'g5', text: '5주: "그동안 준 거 갚아" 하며 보낸 기프티콘', price: 5000 },
    ];
    const BUD = (ids, o) => Object.assign({ mode: 'budget', budget: 30000, items: ids ? pickCards(DEAL, ids) : DEAL, ask: '가상 거래 기록 — 고른 거래의 값이 막대에 쌓여요' }, o);
    const NET = { grid: [6, 4], title: '알릴 사람·기관 지도', places: [
      { name: '집(보호자)', icon: 'house', at: [0, 3] }, { name: '교실(담임)', icon: 'school', at: [2, 1] },
      { name: '상담실', icon: 'office', at: [3, 1], legend: '상담실' }, { name: '지역 상담 기관', icon: 'hospital', at: [5, 0], legend: '지역 상담 기관' },
      { name: 'PC방', icon: 'market', at: [4, 3], legend: 'PC방' }] };

    ALL.push(
      // ---- 도입 ----
      M('intro.stage-cards', {
        title: '그루밍 단계 순서 맞추기', method: '가상 대화 장면을 그루밍 단계 차례로 놓기', tool: 'timeline', minutes: 5,
        levels: { easy: '시연 판의 장면 카드 3장(칭찬 → 선물 → 사진 요구)만 짚어 차례를 읽는다.', base: '장면 카드 5장이 차례로 놓이는 시연을 보고 단계마다 무엇이 바뀌는지 말한다.', challenge: '단계마다 알아차릴 경고 신호를 짝에게 하나씩 말한다.' },
        intro: {
          teacher: '"처음엔 칭찬이었는데, 어디서부터 이상해졌을까요?" 가상 대화 장면 카드를 섞어 보인 뒤 시연 단추로 칭찬 → 고민 들어 주기 → 선물 → 비밀 약속 → 사진 요구 차례로 놓이는 모습을 보인다. "나를 이해해 주는 사람이면 안전하다"는 말이 나오면 "그 사람은 왜 부모님께는 비밀로 하자고 할까요?"라고 되묻는다. 단계가 천천히 이어져 알아차리기 어렵다는 것, 어느 단계에서든 멈추고 알릴 수 있다는 것을 밝힌다.',
          student: '온라인에서 친해진 사람과의 가상 대화 장면을 차례로 놓고, 친밀감이 요구로 바뀌는 흐름을 봐요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['처음', '나중'], slots: STAGE.length, cards: STAGE }, sequence: [{ order: STAGE.map((c) => c.id) }] },
          art: { draw: 'a paper-cut path of five stepping stones leading to a phone with a lock, each stone with a small chat bubble, the last stone cracked', banner: '친밀감이 요구로 바뀔 때', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.chat-red', {
        title: '대화 속 경고 신호 찾기', method: '가상 채팅 문장에서 경고 신호 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '시연 판의 경고 문장 4장(비밀·부모님·사진·학교와 집)만 함께 읽는다.', base: '채팅 문장 7장에서 경고 신호 5장이 바구니에 담기는 시연을 보고, 평범한 문장 2장과 견준다.', challenge: '평범해 보이지만 경고 신호인 문장("나만 너를 진짜 이해해")을 골라 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"\'다음 판도 같이 하자\'와 \'부모님은 몰라도 돼\', 어느 쪽이 경고 신호일까요?" 가상 채팅 문장 카드를 띄우고 시연 단추로 경고 신호 5장이 바구니에 담기는 모습을 보인다. "다정한 말은 괜찮다"는 학생에게 "\'나만 너를 이해해\'라는 말은 나와 다른 사람 사이를 어떻게 만들까요?"라고 되묻는다. 비밀·고립·개인 정보·사진 요구가 경고 신호라는 점을 짚는다.',
          student: '가상 채팅 문장 카드에서 그루밍 경고 신호를 고르고, 평범한 대화와 무엇이 다른지 견주어 봐요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '경고 신호', cards: strip(RED) }, sequence: [{ pick: ['w1', 'w2', 'w3', 'w4', 'w5'] }] },
          art: { draw: 'a paper-cut chat window with several paper speech bubbles, three of them outlined with small red paper flags', banner: '이 말은 경고 신호', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.gift-dilemma', {
        title: '선물과 요구 갈림길', method: '게임 선물 뒤 만남 요구 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 나에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 다른 길과 견주는 근거까지 고르고, 셋째 문항에서 알릴 때 남길 증거를 고른다.' },
        activity: {
          title: '선물과 요구 갈림길', tool: 'dilemma',
          teacher: '"아이템을 여러 번 받았다면, \'만나자\'는 부탁 하나쯤은 들어줘야 할까요?" 학생마다 한 길을 끝까지 간 뒤 알린 길과 비밀을 지킨 길을 견주게 한다. "먼저 말을 건 내 책임"이라는 학생에게 "청소년에게 비밀 만남을 요구하는 사람이 있다면, 잘못은 누구에게 있을까요?"라고 되묻는다. 선물을 받았어도 갚을 책임은 없고, 언제든 거절하고 알릴 수 있다고 짚는다.',
          task: '게임에서 선물을 준 사람이 비밀 만남을 요구하는 장면에서 길을 골라 결과를 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '선물을 준 사람이 만나자고 해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '선물을 준 사람이 만나자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '게임 친구의 선물과 요구', D1, [['refuse', 'block', 'tellP'], ['meet', 'tellLate', 'record'], ['askP']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '"선물 값 갚아"라는 메시지를 받은 장면을 따라가세요.', toolOptions: { title: '갚아야 할까?', scene: { text: '차단한 뒤 하늘이 다른 계정으로 "그동안 준 거 갚아"라고 보낸다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'owe', text: '받았으니 하라는 대로 한다', result: '요구가 더 커진다.', impact: [{ who: '나', text: '빠져나오기 어려워진다', tone: -1 }], why: '대가를 노린 선물은 갚을 책임이 없어요.' },
              { id: 'tell', text: '답하지 않고 화면을 저장해 보호자·선생님께 알린다', result: '어른들과 함께 차단·신고한다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }], ending: '갚을 책임이 없다는 걸 알고 알렸어요.' }] }, reasons: [{ id: 'q1', text: '조건을 숨긴 선물은 갚을 책임이 없다' }, { id: 'q2', text: '받았으면 갚는 것이 예의다', why: '청소년을 노린 선물에는 예의가 아니라 보호가 먼저예요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['tell']], reasons: ['q1'] } },
              { prompt: '"갚아"라는 메시지를 받은 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '알릴 때 남길 증거를 고르는 장면을 따라가세요.', toolOptions: { title: '무엇을 남길까?', scene: { text: '보호자에게 알리기 전, 무엇을 남겨 두면 좋을지 생각한다.', ask: '남길 것은?', motif: 'house', choices: [
              { id: 'log', text: '대화 화면과 상대 계정 이름, 날짜를 저장한다', result: '어른들이 무슨 일이 있었는지 바로 알 수 있다.', impact: [{ who: '나', text: '도움이 빨라진다', tone: 1 }], ending: '대화 기록을 남겼어요.' },
              { id: 'erase', text: '창피하니 대화를 모두 지운다', result: '무슨 일이 있었는지 확인하기 어려워진다.', impact: [{ who: '나', text: '도움이 늦어진다', tone: -1 }], why: '대화 기록은 나를 지키는 증거예요. 창피한 일이 아니에요.' }] }, reasons: [{ id: 'p1', text: '대화 기록은 나를 지키는 증거다' }, { id: 'p2', text: '내 잘못이 드러날까 봐 지우는 것이 낫다', why: '잘못은 요구한 쪽에 있어요. 지우지 말고 알려요.' }], compare: true },
              target: { path: [['log']], reasons: ['p1'] },
              conclude: '선물이 비밀·만남·사진 요구와 함께 오면 거래로 바뀐 신호예요. 갚을 책임은 없고, 거절·차단·기록·알리기로 대응해요. 잘못은 요구한 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '온라인에서 선물을 준 사람이 "부모님한텐 비밀로 하고 만나자"고 할 때 알맞은 행동은?', options: ['선물을 받았으니 만난다', '거절하고 대화를 저장해 보호자·선생님께 알린다', '비밀은 지키고 혼자 고민한다'], answer: '거절하고 대화를 저장해 보호자·선생님께 알린다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.reward-trap', {
        title: '보상의 덫 예산판', method: '가상 거래 기록을 예산 막대로 따라가며 멈출 지점 고르기', tool: 'economy', minutes: 15,
        levels: { easy: '거래 기록 3개(1~3주)에서 요구가 붙은 거래를 고르고, 막대에 쌓인 값을 본다.', base: '거래 기록 5개에서 요구(비밀·사진·만남·갚으라는 말)가 붙은 거래를 모두 고르고, 처음 멈출 지점을 고른다.', challenge: '셋째 문항에서 선물이 거래로 바뀐 첫 지점(처음으로 조건이 붙은 거래) 하나만 고른다.' },
        activity: {
          title: '보상의 덫 예산판', tool: 'economy',
          teacher: '"막대가 쌓일수록 상대는 무엇을 말하기 시작하나요?" 가상 거래 기록을 하나씩 읽고 고르게 한 뒤, 5주의 \'갚아야지\' 메시지를 함께 읽는다. "이만큼 받았으면 갚는 게 맞다"는 학생에게 "처음부터 갚으라고 했다면 받았을까요? 조건을 숨긴 선물은 선물일까요, 덫일까요?"라고 되묻는다. 막대 값은 갚을 빚이 아니라 상대가 걸어 둔 덫의 크기라는 점, 가장 좋은 멈춤은 처음 받은 순간이라는 점을 짚는다. 값은 모두 가상이다.',
          task: '가상 거래 기록을 예산 막대로 따라가며, 요구가 붙은 거래와 처음 멈췄어야 할 지점을 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '요구(비밀·사진·만남·갚으라는 말)가 붙은 거래만 고르세요.', toolOptions: BUD(), target: { budget: { must: ['g2', 'g3', 'g4', 'g5'], not: ['g1'] } } },
              { prompt: '거래 기록 3개에서 요구가 붙은 거래만 고르세요.', toolOptions: BUD(['g1', 'g2', 'g3']), target: { budget: { must: ['g2', 'g3'], not: ['g1'] } } }),
            IT({ prompt: '처음 받은 순간 멈췄다면 쌓였을 거래만 고르세요.', toolOptions: BUD(), target: { budget: { must: ['g1'], count: 1 } } },
              { prompt: '거래 기록 3개에서 처음 받은 순간 멈췄다면 쌓였을 거래만 고르세요.', toolOptions: BUD(['g1', 'g2', 'g3']), target: { budget: { must: ['g1'], count: 1 } } }),
            IT({ prompt: '막대에 쌓인 값에 대해 맞는 생각을 고르세요.', toolOptions: ({ mode: 'pick', basket: '맞는 생각', cards: [{ id: 'k1', text: '조건을 숨긴 선물은 갚을 책임이 없다' }, { id: 'k2', text: '받은 만큼 요구를 들어줘야 한다' }, { id: 'k3', text: '쌓일수록 빠져나오기 어려우니 일찍 알린다' }] }), target: { pick: ['k1', 'k3'] } },
              null,
              { prompt: '선물이 거래로 바뀐 첫 지점(처음 조건이 붙은 거래) 하나만 고르세요.', toolOptions: BUD(), target: { budget: { must: ['g2'], count: 1 } } },
              { conclude: '공짜처럼 보이는 보상이 쌓이면 "갚아야지"라는 요구가 따라와요. 조건을 숨긴 선물은 갚을 책임이 없고, 처음 받은 순간 멈추고 알리는 것이 가장 안전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"그동안 준 거 갚아"라는 메시지를 받은 가상 친구에게 해 줄 말을 한 문장으로 써요.' }] },
        notes: '거래 기록의 물건·금액은 가상이다. 셋째 문항 기본 판은 예산판 대신 같은 교구의 고르기 판(맞는 생각 고르기)을 쓴다. ' + SAFE_NOTE,
      }),
      M('activity.safety-guide', {
        title: '후배를 위한 온라인 안전 안내문', method: '초등 후배용 안내문 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 시작 말로 경고 신호와 대응 행동을 두 문장씩 쓰고 기준 2개를 점검한다.', base: '안내문 5문장을 나눠 쓰고 기준표(경고 신호·대응 행동·피해자 탓 없음·도움 경로)로 점검한다.', challenge: '셋째 문항에서 후배 눈높이에 맞는 예시 장면 하나를 넣는다.' },
        activity: {
          title: '후배를 위한 온라인 안전 안내문', tool: 'rubric-writing',
          teacher: '"초등학생 후배가 읽고 \'아, 이럴 때 말해야지\' 하려면 어떤 말이 들어가야 할까요?" 기준표 네 가지를 먼저 읽고 쓰게 한다. "모르는 사람이랑 말하면 네 잘못이야"처럼 쓰는 학생에게 "그 문장을 읽은 후배가 일이 생겼을 때 말할 수 있을까요?"라고 되묻는다. 안내문은 탓하지 않고 \'언제든 말해도 된다\'로 끝맺게 한다.',
          task: '초등학생 후배에게 줄 온라인 안전 안내문을 쓰고, 경고 신호·대응 행동·피해자 탓 없음·도움 경로를 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 후배가 알아차릴 경고 신호를 두 문장으로 쓰세요.', toolOptions: { topic: '초등학생 후배에게: 온라인에서 이런 말을 들으면 조심해야 한다는 경고 신호를 두 문장으로 쓰세요.', minChars: 30, maxChars: 160, minSentences: 2, maxSentences: 2, title: '안내문 ① 경고 신호' }, target: { selfCheck: ['경고 신호를 구체적으로 썼다', '후배가 알기 쉬운 말로 썼다', '탓하는 말이 없다'], mustInclude: [['비밀', '사진', '만나']] } },
              { prompt: '문장 시작 말을 채워 경고 신호 두 문장을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '누군가 "___"라고 하면 조심해요. "___"도 경고 신호예요.' }, target: { selfCheck: ['경고 신호를 구체적으로 썼다', '탓하는 말이 없다'], mustInclude: [['비밀', '사진', '만나']] } }),
            IT({ prompt: '뒷부분: 대응 행동과 도움 경로를 넣어 안내문을 5문장으로 완성하세요.', toolOptions: { topic: '앞의 두 문장에 이어, 대응 행동(거절·차단·기록·알리기)과 도움 경로(보호자·담임 선생님·상담 선생님)를 넣어 안내문 전체를 5문장으로 완성하세요.', minChars: 80, maxChars: 320, minSentences: 5, maxSentences: 5, title: '안내문 ② 대응과 도움' }, target: { selfCheck: ['경고 신호를 썼다', '대응 행동을 썼다', '피해자를 탓하지 않았다', '도움받을 곳을 썼다'], mustInclude: [['보호자', '선생님']] } },
              { prompt: '문장 시작 말을 채워 대응 행동과 도움 경로를 쓰세요.', toolOptions: { topic: '대응 행동과 도움받을 곳을 두 문장으로 쓰세요.', minChars: 20, minSentences: 2, maxSentences: 2, starter: '그럴 땐 ___. 그리고 ___께 꼭 말해요.' }, target: { selfCheck: ['대응 행동을 썼다', '도움받을 곳을 썼다'], mustInclude: [['보호자', '선생님']] } }),
            IT({ prompt: '가상 친구의 안내문 "모르는 사람이랑 대화하면 네 잘못이야"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 쓴 문장: "모르는 사람이랑 대화하면 네 잘못이야." 기준표(피해자 탓 없음·대응 행동·도움 경로)로 읽고 고친 문장을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '친구 안내문 고쳐 쓰기' }, target: { selfCheck: ['탓하는 말을 뺐다', '대응 행동을 넣었다', '언제든 말해도 된다고 썼다'] } },
              null,
              { prompt: '후배 눈높이에 맞는 예시 장면 하나를 넣어 안내문을 마무리하세요.', toolOptions: { topic: '초등학생이 겪을 법한 가상 예시 장면(게임·영상 앱 등) 하나와 그때의 행동을 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '후배 눈높이 예시' }, target: { selfCheck: ['가상 장면으로 썼다', '행동을 함께 썼다', '무섭게 하지 않고 썼다'] } },
              { conclude: '좋은 안내문은 경고 신호와 할 일을 구체적으로 알려 주고, 피해자를 탓하지 않으며, 언제든 말할 곳이 있다고 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '후배에게 줄 안내문의 마지막 문장을 "언제든 말해도 돼"라는 뜻이 담기게 써요.' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.block-check', {
        title: '나의 계정 안전 점검', method: '계정 안전 설정을 아는지 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개(친구 신청·위치 공개·알리기)에 표시한다.', base: '점검 항목 6개에 표시한다.', challenge: '바로 바꿀 설정 하나를 셋째 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 집에 가서 바로 바꿀 수 있는 설정은 무엇일까요?" 점검 항목은 내 계정 상태가 아니라 할 수 있는지·아는지를 묻는다고 먼저 말한다. "설정을 잘해 두면 무슨 일이 생겨도 내 책임"이라는 말이 나오면 "설정은 나를 지키는 도구일 뿐, 일이 생기면 잘못은 요구한 쪽에 있어요"라고 짚는다. 설정 이름은 앱마다 다르니 보호자와 함께 찾아보게 한다.',
          exitTicket: [
            IT(SELF('할 수 있는 것과 아는 것에 스스로 표시해요.', '계정 안전 점검', ['모르는 사람의 친구 신청을 받지 않을 수 있다', '위치 공개를 끄는 곳을 찾을 수 있다', '프로필 공개 범위를 친구로 좁힐 수 있다', '불편한 대화는 저장한 뒤 차단할 수 있다', '이상한 요구는 보호자·선생님께 알릴 수 있다', '개인 정보(학교·집)를 채팅에 쓰지 않을 수 있다']),
              { prompt: '할 수 있는 것에 스스로 표시해요(3개).', target: { selfCheck: ['모르는 사람의 친구 신청을 받지 않을 수 있다', '위치 공개를 끄는 곳을 찾을 수 있다', '이상한 요구는 보호자·선생님께 알릴 수 있다'] } }),
            { type: 'choice', prompt: '그루밍 피해를 입은 사람에 대한 생각으로 가장 알맞은 것은?', options: ['설정을 안 했으니 피해자 잘못이다', '스스로 보냈어도 잘못은 요구한 쪽에 있다', '알리면 혼나니 숨기는 게 낫다'], answer: 1, difficulty: 0.2, explain: '청소년은 보호받아야 할 대상이고 잘못은 요구한 쪽에 있어요.' },
            { type: 'short', prompt: '오늘 바로 바꿀 계정 설정 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '나의 계정 안전 약속',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 것에 표시해요.', options: ['친구 신청 가려 받기', '위치 공개 끄기', '불편한 대화 저장 뒤 차단', '이상한 요구 알리기'] },
            { type: 'short', prompt: '설정을 함께 찾아볼 사람을 써요(보호자 등).' },
          ],
        },
        notes: '계정 설정 이름은 앱마다 다르다. 학생의 실제 계정이나 대화를 보이게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('wrap.help-network', {
        title: '알릴 사람·기관 지도', method: '칸 지도에 알릴 사람과 기관 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '장소 이름이 보이는 지도에서 핀을 꽂는다(문항마다 핀 하나).', base: '장소 이름을 숨기고 기호와 범례로 찾아 핀을 꽂고, \'왜 여기\' 보기를 고른다.', challenge: '기관마다 할 수 있는 일을 고르는 보기까지 고르고, 넷째 출구 질문에 한 줄로 쓴다.' },
        wrap: {
          teacher: '"온라인에서 이상한 요구를 받았을 때 알릴 수 있는 곳은 몇 군데나 될까요?" 칸 지도를 띄우고 집(보호자)·교실(담임)·상담실·지역 상담 기관을 함께 읽는다. "PC방 사장님께 말하면 된다"는 의견이 나오면 "그분도 도울 수 있지만, 계속 함께 대응해 줄 사람은 누구일까요?"라고 되묻는다. 지역 상담 기관의 번호는 학교가 확인해 넣는 칸이라고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: NET, prompt: '집에서 가장 먼저 알릴 사람이 있는 곳에 핀을 꽂아요.', target: { place: '집(보호자)' }, difficulty: 0.1 },
              { prompt: '장소 이름을 보며 집(보호자)에 핀을 꽂아요.' },
              { prompt: '집(보호자)에 핀을 꽂고, 보호자에게 알리는 까닭을 고르세요.', toolOptions: Object.assign({}, NET, { names: false, ask: { q: '보호자에게 먼저 알리는 까닭은?', choices: ['혼날까 봐', '함께 차단·신고하고 계속 지켜 줄 수 있어서', '선물을 갚아 줄 수 있어서'] } }), target: { place: '집(보호자)', pick: 1 } }),
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, NET, { names: false }), prompt: '학교에서 상담 선생님이 있는 곳에 핀을 꽂아요(기호와 범례를 봐요).', target: { place: '상담실' }, difficulty: 0.15 },
              { prompt: '장소 이름을 보며 상담실에 핀을 꽂아요.', toolOptions: { names: true } },
              { prompt: '상담실에 핀을 꽂고, 상담 선생님이 할 수 있는 일을 고르세요.', toolOptions: Object.assign({}, NET, { names: false, ask: { q: '상담 선생님이 할 수 있는 일은?', choices: ['이야기를 듣고 보호와 지원을 잇는다', '상대에게 선물 값을 대신 갚는다', '대화를 모두 지워 준다'] } }), target: { place: '상담실', pick: 0 } }),
            { type: 'choice', prompt: '지역 상담 기관 번호를 모를 때 알맞은 행동은?', options: ['알리지 않고 참는다', '담임·상담 선생님께 물어 학교가 확인한 번호를 받는다', '채팅 상대에게 묻는다'], answer: 1, difficulty: 0.15, explain: '학교가 확인한 번호를 받거나 믿는 어른에게 먼저 알려요.' },
            { type: 'short', prompt: '지도에서 고른 곳 하나와 그곳에서 받을 수 있는 도움을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '알릴 사람·기관',
          items: [
            { type: 'table', prompt: '알릴 사람·기관과 할 수 있는 일을 써요.', columns: ['사람·기관', '할 수 있는 일'], cells: [['보호자', ''], ['담임 선생님', ''], ['상담 선생님', ''], [`지역 상담 기관 ${LOCAL}`, '']], answer: '(예) 함께 차단·신고, 학교 대응, 이야기 듣고 지원 잇기, 전문 상담' },
            { type: 'short', prompt: '이상한 요구를 받으면 가장 먼저 알릴 사람을 써요.' },
          ],
        },
        notes: '지도 교구는 문항마다 핀 하나라 장소마다 문항을 나누었다. 단계 차이는 이름 보이기·이름 숨기기·\'왜 여기\' 보기 고르기로 둔다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 17-g9-self-determination.js ====
  // ==== 9학년 · 성적 자기결정권과 힘의 차이 (gender.m.g9-self-determination) ====
  {
    const M = MK('g9-self-determination', [9]);
    const BR = ['내 권리', '다른 사람의 권리 존중', '책임'];
    const BR_CARDS = [
      { id: 'a1', text: '원치 않는 스킨십은 거절할 수 있다', to: '내 권리' }, { id: 'a2', text: '좋다고 했다가도 마음을 바꿀 수 있다', to: '내 권리' },
      { id: 'a3', text: '내 몸 사진을 누가 볼지 내가 정한다', to: '내 권리' }, { id: 'b1', text: '상대가 망설이면 묻고 기다린다', to: '다른 사람의 권리 존중' },
      { id: 'b2', text: '"싫어"를 듣는 즉시 멈춘다', to: '다른 사람의 권리 존중' }, { id: 'b3', text: '상대 사진을 허락 없이 올리지 않는다', to: '다른 사람의 권리 존중' },
      { id: 'c1', text: '내 선택이 상대에게 주는 영향을 생각한다', to: '책임' }, { id: 'c2', text: '선배·어른이라는 힘을 쓰지 않는다', to: '책임' },
      { id: 'x1', text: '사귀는 사이면 묻지 않아도 된다' },
    ];
    const PAIRS = [['동갑 친구', 1], ['같은 모둠 친구', 1], ['선배와 후배', 3], ['동아리 부장과 신입', 3], ['교사와 학생', 4], ['온라인 성인과 청소년', 5]];
    const PW = (o) => Object.assign({ type: 'bar', mode: 'read', title: '관계별 힘 차이(가상 척도 0~5)', unit: '점', xLabel: '관계', yLabel: '힘 차이', data: PAIRS, max: 5, scale: 1 }, o);
    const D1 = { text: '동아리 선배 도현이 뒤풀이 자리에서 "후배면 이 정도는 괜찮지?"라며 원치 않는 스킨십을 하려 한다. 주변 선배들은 웃고 있다.', ask: '후배 서아는 어떻게 할까?', motif: 'house', choices: [
      { id: 'laugh', text: '분위기를 깨기 싫어 웃으며 넘긴다', result: '도현은 서아가 괜찮다고 여기고 다음에도 그런다.', impact: [{ who: '서아', text: '불편함이 쌓인다', tone: -1 }], why: '웃으며 넘긴 것은 동의가 아니에요. 그래도 잘못은 요구한 선배에게 있어요.', end: '불편한 일이 되풀이됐어요.',
        next: { text: '며칠 뒤 같은 일이 또 일어난다. 서아는 동아리에 가기 싫어진다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'tellA', text: '동아리 담당 선생님께 있었던 일을 알린다', result: '선생님이 서아의 안전부터 확인하고 학교 절차를 시작한다.', impact: [{ who: '서아', text: '보호받는다', tone: 1 }], end: '믿는 어른에게 알렸어요.',
            next: { text: '도현이 "그때 웃었잖아"라고 말한다는 소문이 들린다.', choices: [
              { id: 'firm', text: '"웃은 건 동의가 아니야"라는 사실을 선생님과 함께 정리한다', result: '학교가 지위를 이용한 행동을 바로잡는다.', impact: [{ who: '서아', text: '자기 탓이 아님을 안다', tone: 1 }], ending: '힘 차이 속 웃음은 동의가 아니라는 것을 분명히 했어요.' },
              { id: 'doubt', text: '내가 웃었으니 내 잘못이라고 생각한다', result: '서아가 스스로를 탓한다.', impact: [{ who: '서아', text: '자책이 커진다', tone: -1 }], why: '힘이 기운 자리에서 웃은 것은 거절하기 어려웠던 것이에요. 잘못은 요구한 쪽에 있어요.' }] } },
          { id: 'quit', text: '아무 말 없이 동아리를 그만둔다', result: '서아만 좋아하던 활동을 잃는다.', impact: [{ who: '서아', text: '기회를 잃는다', tone: -1 }], why: '피해를 입은 쪽이 떠나야 하는 것은 공정하지 않아요. 알리면 학교가 도울 수 있어요.' }] } },
      { id: 'refuse', text: '"싫어요, 하지 마세요"라고 분명히 말하고 자리를 옮긴다', result: '도현이 "농담인데 예민하네"라고 한다.', impact: [{ who: '서아', text: '내 뜻을 지킨다', tone: 1 }], end: '분명히 거절했어요.',
        next: { text: '다른 선배가 "선배가 그럴 수도 있지, 너무 정색했다"고 말한다.', ask: '다음은?', choices: [
          { id: 'tellB', text: '믿는 다른 선배와 담당 선생님께 알린다', result: '선생님이 동아리 안의 지위 문화를 함께 살핀다.', impact: [{ who: '동아리', text: '존중하는 문화로 바뀐다', tone: 1 }], end: '거절하고 알렸어요.',
            next: { text: '선생님이 "거절한 건 잘한 일이야"라고 말한다.', choices: [
              { id: 'support', text: '같은 일을 겪을 수 있는 후배들과 존중 약속을 함께 만든다', result: '동아리에 "묻고 기다리기" 약속이 생긴다.', impact: [{ who: '후배들', text: '함께 보호받는다', tone: 1 }], ending: '거절하고, 알리고, 문화를 바꾸었어요.' },
              { id: 'sorry', text: '분위기를 깬 게 미안해 도현에게 사과한다', result: '도현은 자기가 잘못하지 않았다고 여긴다.', impact: [{ who: '서아', text: '잘못이 뒤바뀐다', tone: -1 }], why: '거절은 사과할 일이 아니에요. 사과할 사람은 요구한 쪽이에요.' }] } },
          { id: 'endure', text: '선배 말이니 참기로 한다', result: '도현의 행동이 계속된다.', impact: [{ who: '서아', text: '불편함이 이어진다', tone: -1 }], why: '선배라는 지위는 원치 않는 스킨십을 정당하게 만들지 않아요.' }] } },
      { id: 'tellNow', text: '그 자리를 벗어나 다른 선배와 선생님께 바로 알린다', result: '어른들이 바로 상황을 멈추게 한다.', impact: [{ who: '서아', text: '곧바로 보호받는다', tone: 1 }], ending: '힘 차이가 있는 자리에서 바로 도움을 청했어요.' }] };
    const R1 = [{ id: 'r1', text: '지위 차이 속의 웃음·침묵은 자유로운 동의가 아니다' }, { id: 'r2', text: '원치 않는 스킨십은 언제든 거절하고 알릴 수 있다' },
      { id: 'r3', text: '선배가 원하면 후배는 따르는 게 예의다', why: '예의는 내 몸의 결정권을 넘어서지 않아요.' }, { id: 'r4', text: '거절하지 못한 서아에게도 책임이 있다', why: '힘이 기운 자리에서는 거절하기 어려워요. 책임은 요구한 쪽에 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '거절하고 알린 길에서는 동아리 문화가 바뀌었다' }, { id: 'r6', text: '참은 길에서는 같은 일이 되풀이됐다' }], ok: ['r5', 'r6'] };
    const CASES = [['사례 1: 비싼 선물을 받은 뒤 "이제 해 줄 거지?"라는 요구를 받았다', '동의 아님 — 선물은 대가가 아니다'],
      ['사례 2: 잠들었거나 판단하기 어려운 상태에서 대답을 들었다', '동의 아님 — 판단하기 어려운 상태에서는 동의할 수 없다'],
      ['사례 3: 처음엔 좋다고 했다가 "그만하자"고 말했다', '그만하자는 말에서 멈춘다 — 동의는 언제든 철회할 수 있다']];

    ALL.push(
      // ---- 도입 ----
      M('intro.rights-tree', {
        title: '권리·존중·책임 세 갈래', method: '성적 자기결정권을 세 갈래 가지로 정리하기', tool: 'mindmap', minutes: 5,
        levels: { easy: '시연 판에서 가지마다 카드 한두 장(4장)만 함께 읽는다.', base: '사례 카드 8장이 세 갈래에 붙는 시연을 보고, 남겨 둔 함정 카드가 왜 틀렸는지 말한다.', challenge: '세 갈래가 부딪치는 가상 사례(내 바람과 상대의 거절)를 하나 만들어 짝에게 말한다.' },
        intro: {
          teacher: '"성적 자기결정권은 \'내 마음대로 할 권리\'일까요?" 가운데 \'성적 자기결정권\'에서 내 권리·다른 사람의 권리 존중·책임 세 가지를 펼치고 시연 단추로 사례 카드 8장이 붙는 모습을 보인다. \'사귀는 사이면 묻지 않아도 된다\' 카드는 어느 가지에도 붙이지 않으며 "사귀는 사이에도 상대에게 결정권이 있을까요?"라고 묻는다. 내 결정권만큼 상대의 결정권도 있고, 힘을 가진 쪽에 책임이 더 크다는 점을 밝힌다.',
          student: '성적 자기결정권을 내 권리·다른 사람의 권리 존중·책임 세 갈래로 펼치고, 사례 카드를 알맞은 갈래에 붙여 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '성적 자기결정권', slots: BR, cards: strip(BR_CARDS) }, sequence: [{ sort: { '내 권리': ['a1', 'a2', 'a3'], '다른 사람의 권리 존중': ['b1', 'b2', 'b3'], 책임: ['c1', 'c2'] } }] },
          art: { draw: 'a paper-cut tree with three strong paper branches, small hands and a balance scale hanging from them, soft pastel leaves', banner: '나의 결정, 너의 결정', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.power-scale', {
        title: '힘의 차이 척도 그래프', method: '가상 척도 막대에서 동의가 어려워지는 관계 찾기', tool: 'chart', minutes: 7,
        levels: { easy: '관계 3쌍(동갑 친구·선배와 후배·온라인 성인과 청소년)만 보며 힘 차이를 함께 읽는다.', base: '관계 6쌍 막대에서 힘 차이가 가장 큰 관계를 고르는 시연을 보고, 차이가 커질수록 거절이 어려워지는 까닭을 말한다.', challenge: '힘 차이를 만드는 요인(나이·지위·돈과 선물·정보)을 짝과 나누어 분류한다.' },
        intro: {
          teacher: '"\'싫어\'라고 말하기가 가장 어려운 관계는 어디일까요?" 관계별 힘 차이를 가상 척도 막대로 띄우고 시연 단추로 \'온라인 성인과 청소년\'을 고르는 모습을 보인다. "거절하기 어려운 건 그 사람 성격 문제"라는 말이 나오면 "같은 사람도 동갑 친구 앞과 선배 앞에서 똑같이 말할 수 있을까요?"라고 되묻는다. 힘이 기운 관계에서는 대답이 있어도 자유로운 동의가 되기 어렵고, 힘을 가진 쪽에 더 큰 책임이 있다고 밝힌다. 척도는 수업용 가상 값이다.',
          student: '가상 척도 막대로 관계마다 힘의 차이를 견주고, 동의가 어려워지는 지점을 찾아요.',
          demo: { tool: 'chart', options: PW({ question: '힘 차이가 가장 큰 관계는?', choices: PAIRS.map((r) => r[0]) }), sequence: [{ pick: 5 }] },
          art: { draw: 'a paper-cut seesaw with a tall paper figure on one side and a small paper figure on the other, bar chart strips behind them', banner: '힘이 기울면 동의도 기운다', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '척도 값은 모두 가상이다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.power-dilemma', {
        title: '선배의 부탁 갈림길', method: '지위 차이 속 스킨십 요구 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 서아에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 다른 길과 견주는 근거까지 고르고, 셋째 문항에서 선배가 책임져야 할 점을 고른다.' },
        activity: {
          title: '선배의 부탁 갈림길', tool: 'dilemma',
          teacher: '"서아가 웃으며 넘겼다면, 그건 괜찮다는 뜻이었을까요?" 학생마다 한 길을 끝까지 간 뒤 참은 길과 거절하고 알린 길을 견주게 한다. "후배가 정색하면 분위기가 깨진다"는 학생에게 "분위기와 서아의 몸, 어느 쪽이 먼저일까요? 분위기를 깬 사람은 누구일까요?"라고 되묻는다. 지위 차이 속의 웃음과 침묵은 동의가 아니고, 책임은 요구한 쪽에 있다는 점을 끝 장면에서 짚는다. 장면은 자세히 묘사하지 않는다.',
          task: '동아리 선배가 지위를 앞세워 원치 않는 스킨십을 요구하는 장면에서 길을 골라 결과를 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '선배가 "후배면 이 정도는"이라고 해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '선배가 "후배면 이 정도는"이라고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '동아리 뒤풀이', D1, [['refuse', 'tellB', 'support'], ['laugh', 'tellA', 'firm'], ['tellNow']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '주변 선배들이 할 수 있는 행동을 고르는 장면을 따라가세요.', toolOptions: { title: '지켜보던 선배들', scene: { text: '도현이 서아에게 다가갈 때 옆의 선배 지원이 그 모습을 본다.', ask: '지원은 어떻게 할까?', motif: 'house', choices: [
              { id: 'step', text: '"선배, 그만해요. 서아가 싫어하잖아요"라며 사이에 선다', result: '도현이 멈추고 서아가 자리를 옮긴다.', impact: [{ who: '서아', text: '편이 있다고 느낀다', tone: 1 }], ending: '주변인이 멈추게 했어요.' },
              { id: 'joke', text: '같이 웃으며 "부럽다"고 한다', result: '도현이 더 당당해진다.', impact: [{ who: '서아', text: '더 거절하기 어려워진다', tone: -1 }], why: '같이 웃는 반응은 요구하는 쪽의 힘을 키워요.' }] }, reasons: [{ id: 'q1', text: '주변인이 멈추면 힘의 차이가 줄어든다' }, { id: 'q2', text: '둘의 일이니 끼어들지 않는다', why: '힘이 기운 자리에서는 주변인의 한마디가 큰 도움이 돼요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['step']], reasons: ['q1'] } },
              { prompt: '주변 선배의 행동을 고르세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '도현이 "나는 장난이었다"고 말할 때 판단하는 장면을 따라가세요.', toolOptions: { title: '책임은 누구에게?', scene: { text: '학교 상담에서 도현이 "장난이었고, 서아도 웃었다"고 말한다.', ask: '알맞은 판단은?', motif: 'house', choices: [
              { id: 'resp', text: '지위를 앞세워 원치 않는 스킨십을 한 도현에게 책임이 있다', result: '도현이 자기 행동의 영향을 마주한다.', impact: [{ who: '서아', text: '자기 탓이 아님을 확인한다', tone: 1 }], ending: '책임을 바르게 짚었어요.' },
              { id: 'both', text: '서아도 웃었으니 둘 다 책임이 있다', result: '서아가 다시 자신을 탓한다.', impact: [{ who: '서아', text: '자책한다', tone: -1 }], why: '힘이 기운 자리의 웃음은 거절하기 어려웠다는 뜻일 수 있어요. 책임은 요구한 쪽에 있어요.' }] }, reasons: [{ id: 'p1', text: '힘을 가진 쪽은 상대의 뜻을 먼저 묻고 확인할 책임이 있다' }, { id: 'p2', text: '장난이었다는 의도가 상대의 피해를 지우지 않는다' }, { id: 'p3', text: '거절하지 않았으면 동의한 것이다', why: '침묵이나 웃음은 동의가 아니에요.' }], compare: true },
              target: { path: [['resp']], reasons: ['p1', 'p2'], some: true } },
              null,
              { prompt: '책임을 판단하고, 선배가 책임져야 할 점을 담은 근거를 모두 고르세요.', target: { path: [['resp']], reasons: ['p1', 'p2'] } },
              { conclude: '나이·지위 차이가 있는 자리에서 나온 웃음·침묵·대답은 자유로운 동의가 아니에요. 원치 않으면 거절하고 알릴 수 있고, 책임은 힘을 앞세워 요구한 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"후배면 이 정도는"이라는 말이 동의를 만들지 못하는 까닭을 힘의 차이를 들어 한 문장으로 써요.' }] },
        notes: '스킨십 장면은 \'원치 않는 스킨십\'이라는 말로만 나타내고 자세히 묘사하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.case-court', {
        title: '사례 판단 모의 토의', method: '가상 사례와 동의 판단·근거 카드 짝짓기', tool: 'story', minutes: 15,
        levels: { easy: '사례 1개(선물 뒤 요구)에 판단 카드를 짝짓고, 놓으면 바로 맞는지 알려 준다.', base: '사례 3개에 판단·근거 카드를 짝짓고(함정 카드 섞임), 둘째 문항에서 모둠 판단문 빈칸을 채운다.', challenge: '셋째 문항에서 반대 판단을 한 가상 모둠의 근거에 답하는 카드를 고른다.' },
        activity: {
          title: '사례 판단 모의 토의', tool: 'story',
          teacher: '"이 세 사례에서 동의가 성립했을까요? 판결문을 쓰는 재판부가 되어 근거를 붙여 봅시다." 모둠마다 사례 카드를 읽고 판단 카드를 짝짓게 한 뒤 판단문을 완성하게 한다. "선물을 받았으면 어느 정도는 응해야 한다"는 의견에 "선물이 몸에 대한 결정을 사는 값이 될 수 있을까요?"라고 되묻고, "한 번 좋다고 했으면 끝까지 유효하다"는 의견에는 "\'그만하자\'는 말은 언제부터 효력이 있을까요?"라고 묻는다. 판단하기 어려운 상태의 사례는 자세히 다루지 않고 원칙만 짚는다.',
          task: '가상 사례 3개를 읽고 동의가 성립하는지 판단·근거 카드를 짝지어, 모둠 판단문을 완성해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('사례마다 알맞은 판단·근거 카드를 짝지으세요.', CASES, ['동의 — 선물을 받았으니 응해야 한다', '동의 — 처음에 좋다고 했으니 끝까지 유효하다'], { title: '사례 판단' }),
              MB('사례 1에 알맞은 판단·근거 카드를 짝지으세요.', CASES.slice(0, 1), ['동의 — 선물을 받았으니 응해야 한다'], { title: '사례 판단' })),
            IT(FB('모둠 판단문의 빈칸에 알맞은 카드를 넣으세요.', [
              ['동의는 ___ 대답이어야 한다.', '자유롭고 분명한'], ['선물·지위·분위기의 압력 속 대답은 ___.', '동의가 아니다'], ['동의는 ___.', '언제든 철회할 수 있다']], ['한 번 하면 끝이다', '침묵이면 충분하다'], { title: '모둠 판단문' }),
              FB('모둠 판단문의 빈칸에 알맞은 카드를 넣으세요(두 칸).', [
                ['동의는 ___ 대답이어야 한다.', '자유롭고 분명한'], ['동의는 ___.', '언제든 철회할 수 있다']], [], { title: '모둠 판단문' })),
            IT(PB('반대 판단을 한 가상 모둠의 근거("거절하지 않았으니 동의다")에 답하는 카드만 골라 담으세요.', '반론에 답하기', [
              { id: 'k1', text: '침묵이나 망설임은 동의가 아니다', ok: true }, { id: 'k2', text: '힘의 차이가 있으면 거절하기 어렵다', ok: true },
              { id: 'k3', text: '확인할 책임은 요구하는 쪽에 있다', ok: true }, { id: 'k4', text: '싫었으면 크게 소리쳤어야 한다' }, { id: 'k5', text: '분위기가 좋았으면 동의다' }], { title: '반론에 답하기' }),
              null, null,
              { conclude: '동의는 자유롭고 분명한 대답이고 언제든 철회할 수 있어요. 선물·지위·판단하기 어려운 상태 속의 대답은 동의가 아니며, 확인할 책임은 요구하는 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사례 3("처음엔 좋다고 했다가 그만하자고 말했다")의 판단과 근거를 한 문장으로 써요.' }] },
        notes: '판단하기 어려운 상태의 사례는 상황을 자세히 묘사하지 않고 원칙(그 상태에서는 동의할 수 없다)만 다룬다. ' + SAFE_NOTE,
      }),
      M('activity.rights-essay', {
        title: '나의 권리와 책임 성찰 글', method: '권리와 책임 성찰 글 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 시작 말로 권리·존중·책임을 한 문장씩 쓰고 기준 2개를 점검한다.', base: '7~8문장 성찰 글을 세 부분으로 나눠 쓰고 기준표(개념 정확·예시·책임 언급·존중 표현)로 점검한다.', challenge: '셋째 문항에서 힘의 차이가 있는 가상 상황을 예시로 넣는다.' },
        activity: {
          title: '나의 권리와 책임 성찰 글', tool: 'rubric-writing',
          teacher: '"\'내 몸의 결정\'과 \'다른 사람의 결정을 존중하는 법\'을 한 글에 담으려면 무엇부터 써야 할까요?" 기준표 네 가지를 먼저 읽고 세 부분으로 나눠 쓰게 한다. "내 권리만 지키면 된다"고 쓰는 학생에게 "상대에게도 같은 권리가 있다면 내 행동은 어떻게 달라질까요?"라고 되묻는다. 자기 연애나 경험을 쓰지 않고, 개념과 가상 예시로 쓰게 한다.',
          task: '"내 몸의 결정과 다른 사람의 결정을 존중하는 법"을 성찰 글로 쓰고, 개념 정확·예시·책임 언급·존중 표현을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 성적 자기결정권이 무엇인지 내 권리를 중심으로 두세 문장 쓰세요.', toolOptions: { topic: '성적 자기결정권이 무엇인지, 내 몸에 대한 결정(거절·철회 포함)을 중심으로 두세 문장 쓰세요.', minChars: 40, maxChars: 220, minSentences: 2, maxSentences: 3, title: '성찰 글 ① 내 권리' }, target: { selfCheck: ['개념을 정확히 썼다', '거절이나 철회를 넣었다', '내 경험이 아닌 개념으로 썼다'], mustInclude: [['결정', '자기결정권']] } },
              { prompt: '문장 시작 말을 채워 두 문장을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '성적 자기결정권은 ___. 그래서 나는 ___.' }, target: { selfCheck: ['개념을 정확히 썼다', '내 경험이 아닌 개념으로 썼다'], mustInclude: [['결정', '자기결정권']] } }),
            IT({ prompt: '둘째 부분: 다른 사람의 결정을 존중하는 법과 책임을 서너 문장 쓰세요.', toolOptions: { topic: '다른 사람의 결정을 존중하는 법(묻기·기다리기·멈추기)과 내 선택에 따르는 책임을 가상 예시와 함께 서너 문장 쓰세요.', minChars: 60, maxChars: 280, minSentences: 3, maxSentences: 4, title: '성찰 글 ② 존중과 책임' }, target: { selfCheck: ['존중하는 행동을 구체적으로 썼다', '가상 예시를 넣었다', '책임을 언급했다', '존중하는 표현을 썼다'], mustInclude: [['책임'], ['묻', '기다리', '멈추']] } },
              { prompt: '문장 시작 말을 채워 존중과 책임을 두 문장으로 쓰세요.', toolOptions: { topic: '다른 사람의 결정을 존중하는 법과 책임을 두 문장으로 쓰세요.', minChars: 20, minSentences: 2, maxSentences: 2, starter: '다른 사람이 ___ 하면 나는 ___. 내 선택에는 ___ 책임이 따른다.' }, target: { selfCheck: ['존중하는 행동을 썼다', '책임을 언급했다'], mustInclude: [['책임']] } }),
            IT({ prompt: '마무리: 앞의 글을 이어 7~8문장 성찰 글로 다듬고 내 다짐으로 끝맺으세요.', toolOptions: { topic: '앞에서 쓴 두 부분을 이어 \'내 몸의 결정과 다른 사람의 결정을 존중하는 법\' 성찰 글을 7~8문장으로 다듬고, 내 다짐 한 문장으로 끝맺으세요.', minChars: 140, maxChars: 520, minSentences: 7, maxSentences: 8, title: '성찰 글 완성', sample: '성적 자기결정권은 내 몸에 대한 결정을 스스로 내릴 권리이다. 원치 않으면 거절할 수 있고, 좋다고 했다가도 마음을 바꿀 수 있다. 다른 사람에게도 똑같은 권리가 있다. 그래서 가상 인물 민호는 친구와 사진을 찍기 전에 먼저 묻고 대답을 기다린다. 친구가 망설이면 멈추고 다시 묻지 않는다. 내 선택이 상대에게 주는 영향을 생각하는 것도 나의 책임이다. 나는 묻고, 기다리고, 존중하는 사람이 되겠다.' }, target: { selfCheck: ['개념을 정확히 썼다', '예시를 넣었다', '책임을 언급했다', '존중하는 표현으로 끝맺었다'] } },
              null,
              { prompt: '힘의 차이가 있는 가상 상황을 예시로 넣어 성찰 글을 7~8문장으로 완성하세요.', toolOptions: { topic: '선후배·온라인 성인처럼 힘의 차이가 있는 가상 상황을 예시로 넣어, 그때 동의가 왜 어려운지와 내가 지킬 책임을 담아 성찰 글을 7~8문장으로 완성하세요.', minChars: 140, maxChars: 520, minSentences: 7, maxSentences: 8, title: '힘의 차이 예시 넣기', sample: '성적 자기결정권은 내 몸에 대한 결정을 스스로 내릴 권리이다. 다른 사람에게도 같은 권리가 있어 나는 묻고 기다려야 한다. 그런데 선배와 후배처럼 힘의 차이가 있으면 거절하기가 어렵다. 가상 인물 서아는 선배의 요구 앞에서 웃기만 했지만 그것은 동의가 아니었다. 힘을 가진 쪽은 상대의 뜻을 더 조심스럽게 확인할 책임이 있다. 나도 선배가 되면 지위를 앞세우지 않겠다. 나는 내 결정과 다른 사람의 결정을 함께 존중하겠다.' }, target: { selfCheck: ['힘의 차이가 있는 가상 상황을 넣었다', '그때 동의가 어려운 까닭을 썼다', '책임을 언급했다', '존중하는 표현으로 끝맺었다'], mustInclude: [['힘', '지위', '선배', '나이']] } },
              { conclude: '성적 자기결정권은 내 몸에 대한 결정권이면서, 같은 권리를 가진 다른 사람을 존중하고 내 선택에 책임지는 것까지 함께 담아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '성적 자기결정권에 대한 설명으로 알맞은 것은?', options: ['내 결정만 중요하다', '내 권리와 다른 사람의 권리 존중, 책임이 함께 있다', '한 번 동의하면 끝까지 유효하다'], answer: '내 권리와 다른 사람의 권리 존중, 책임이 함께 있다' }, { type: 'short', prompt: '성찰 글의 마지막 다짐 문장을 옮겨 써요.' }] },
        notes: '학생 자신의 연애·경험을 쓰게 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.decision-check', {
        title: '압력 앞의 결정 점검표', method: '압력 앞에서 던질 질문을 아는지 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 질문 3개("누가 힘을 갖고 있나?" 등)를 떠올릴 수 있는지 표시한다.', base: '점검 질문 5개를 떠올릴 수 있는지 표시한다.', challenge: '점검 질문을 하나 더 만들어 셋째 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"압력을 느끼는 순간, 머릿속으로 던질 질문 다섯 개가 있다면 무엇일까요?" 점검표의 질문을 차례로 함께 읽고, 떠올릴 수 있는 것에 표시하게 한다. "그 순간엔 생각할 틈이 없다"는 학생에게 "그래서 미리 질문을 외워 두는 거예요. 하나만 떠올려도 \'잠깐\'이라고 말할 수 있어요"라고 짚는다. 내 경험을 떠올리지 않아도 된다고 먼저 말한다.',
          exitTicket: [
            IT(SELF('압력 앞에서 떠올릴 수 있는 질문에 스스로 표시해요.', '압력 앞의 결정 점검', ['"지금 누가 힘을 갖고 있나?"를 떠올릴 수 있다', '"거절해도 안전한가?"를 떠올릴 수 있다', '"내가 정말 원하는가?"를 떠올릴 수 있다', '"선물이나 분위기 때문에 대답하려는가?"를 떠올릴 수 있다', '"지금 도움을 청할 사람이 있나?"를 떠올릴 수 있다']),
              { prompt: '떠올릴 수 있는 질문에 스스로 표시해요(3개).', target: { selfCheck: ['"지금 누가 힘을 갖고 있나?"를 떠올릴 수 있다', '"거절해도 안전한가?"를 떠올릴 수 있다', '"지금 도움을 청할 사람이 있나?"를 떠올릴 수 있다'] } }),
            { type: 'choice', prompt: '"한 번 동의하면 끝까지 유효하다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 약속은 지켜야 한다', '동의는 언제든 철회할 수 있고 상대는 그 말에 멈춰야 한다', '사귀는 사이에서만 유효하다'], answer: 1, difficulty: 0.2, explain: '동의는 언제든 철회할 수 있어요.' },
            { type: 'short', prompt: '압력 앞에서 던질 나만의 점검 질문 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '압력 앞의 결정 점검',
          items: [
            { type: 'check', prompt: '압력 앞에서 던질 질문에 표시해요.', options: ['누가 힘을 갖고 있나?', '거절해도 안전한가?', '내가 정말 원하는가?', '도움을 청할 사람이 있나?'] },
            { type: 'short', prompt: '"잠깐"이라고 말한 뒤 할 수 있는 행동을 하나 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.rights-badge', {
        title: '권리 선언 배지 만들기', method: '성적 자기결정권 선언 배지 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '선언 문구 보기 가운데 알맞은 것을 고르고(둘째 출구 질문) 배지를 꾸민다.', base: '배지를 꾸미고 나의 선언 문구를 직접 쓴다(셋째 출구 질문).', challenge: '다른 사람의 권리를 존중하는 문구를 함께 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"가방에 달 작은 배지 하나에 오늘 배운 권리를 한 줄로 담는다면?" 콜라주 판에는 그림만 붙고 문구는 출구 질문과 활동지에 쓴다고 알려 준다. "내 몸은 내 마음대로"만 쓰는 학생에게 "그 문장에 다른 사람의 결정은 들어 있나요? 한 줄을 더한다면요?"라고 되묻는다. 배지 문구에 친구 이름이나 개인 이야기를 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 10, shapes: ['circle', 'star', 'heart', 'semi', 'diamond'] }, prompt: '동그라미 바탕에 모양·색 조각을 붙여 배지를 꾸미고 스스로 점검해요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }], selfCheck: ['배지에 넣을 선언 문구를 정했다', '존중하는 그림으로 꾸몄다', '개인 이야기를 넣지 않았다'], minPieces: 2 }, difficulty: 0.1 },
            { type: 'choice', prompt: '배지에 넣을 선언 문구로 가장 알맞은 것은?', options: ['내 몸은 내가 정하고, 너의 결정도 존중해', '선배 말은 무조건 따르기', '좋다고 한 번 하면 끝'], answer: 0, difficulty: 0.15, explain: '내 권리와 다른 사람의 권리 존중을 함께 담아요.' },
            { type: 'short', prompt: '나의 성적 자기결정권 선언 문구를 한 줄로 써요.' },
            { type: 'short', prompt: '다른 사람의 권리를 존중하는 문구를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '나의 권리 선언',
          items: [
            { type: 'short', prompt: '배지 선언 문구를 써요.' },
            { type: 'short', prompt: '이 선언을 지키기 위해 할 행동 하나를 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 배지 문구는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 18-g9-crime-support.js ====
  // ==== 9학년 · 성희롱·성폭력·디지털 성범죄 구별과 신고 뒤 지원 (gender.m.g9-crime-support) ====
  {
    const M = MK('g9-crime-support', [9]);
    const KINDS = ['성희롱', '성폭력', '디지털 성범죄'];
    const CASES = [
      { id: 'c1', text: '친구 몸을 성적으로 품평하는 말을 되풀이한다', to: '성희롱' }, { id: 'c2', text: '싫다는 후배에게 성적인 농담을 계속 건넨다', to: '성희롱' },
      { id: 'c3', text: '수업 중 성적인 눈빛과 손짓으로 불쾌감을 준다', to: '성희롱' }, { id: 'c4', text: '싫다는데 억지로 몸을 만진다', to: '성폭력' },
      { id: 'c5', text: '선배라는 힘으로 원치 않는 스킨십을 강요한다', to: '성폭력' }, { id: 'c6', text: '동의 없이 친구의 몸을 몰래 찍는다', to: '디지털 성범죄' },
      { id: 'c7', text: '친구 얼굴을 성적인 사진에 합성해 돌린다', to: '디지털 성범죄' }, { id: 'c8', text: '온라인에서 만난 사람이 몸 사진을 요구한다', to: '디지털 성범죄' },
      { id: 'c9', text: '받은 촬영물을 다른 단톡방에 전달한다', to: '디지털 성범죄' },
    ];
    const WHY = [['소문이 날까 봐', 18], ['믿어 주지 않을까 봐', 14], ['내 잘못이라고 할까 봐', 11], ['절차를 몰라서', 9]];
    const D1 = { text: '체육 시간 전, 친구들이 "탈의실에서 장난 영상 찍자, 재밌을 거야"라며 은재에게 휴대폰을 들게 한다.', ask: '은재는 어떻게 할까?', motif: 'house', choices: [
      { id: 'follow', text: '분위기에 맞춰 따라간다', result: '옷을 갈아입는 친구들이 놀라 소리친다.', impact: [{ who: '찍힌 친구들', text: '수치심과 두려움을 느낀다', tone: -1 }], why: '동의 없이 몸을 찍는 것은 장난이 아니라 디지털 성범죄가 될 수 있어요.', end: '친구들이 동의하지 않은 촬영이 됐어요.',
        next: { text: '찍은 영상을 단톡방에 올리자는 말이 나온다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'post', text: '"다들 하니까" 하고 올린다', result: '영상이 다른 방으로 퍼진다.', impact: [{ who: '찍힌 친구들', text: '피해가 걷잡을 수 없이 커진다', tone: -1 }, { who: '은재', text: '나이와 상관없이 책임이 따른다', tone: -1 }], why: '퍼뜨리면 피해가 커지고, 올린 사람에게도 책임이 생겨요.', end: '영상이 퍼져 피해가 커졌어요.',
            next: { text: '선생님이 일을 알고 학생들을 부른다.', choices: [
              { id: 'admit', text: '사실대로 말하고 지울 수 있는 곳을 함께 찾는다', result: '피해를 줄이는 조치가 시작된다.', impact: [{ who: '찍힌 친구들', text: '삭제 도움을 받기 시작한다', tone: 1 }], ending: '늦었지만 책임을 지고 피해를 줄이는 쪽을 골랐어요.' },
              { id: 'deny', text: '"장난이었어요"라고만 한다', result: '장난이라는 말로 책임이 줄지 않는다.', impact: [{ who: '찍힌 친구들', text: '또 상처를 받는다', tone: -1 }], why: '장난이라는 의도는 책임을 없애지 못해요.' }] } },
          { id: 'delete', text: '"이건 아니야" 하고 영상을 지운 뒤 선생님께 말한다', result: '영상이 퍼지지 않고 선생님이 조치한다.', impact: [{ who: '찍힌 친구들', text: '더 큰 피해를 막는다', tone: 1 }], end: '퍼지기 전에 멈추고 알렸어요.',
            next: { text: '친구들이 "고자질했다"며 은재를 몰아세운다.', choices: [
              { id: 'firm', text: '"친구들이 다치는 걸 막은 거야"라고 말하고 선생님께 상황을 알린다', result: '선생님이 알린 학생을 보호한다.', impact: [{ who: '은재', text: '보호를 받는다', tone: 1 }], ending: '알리는 것은 고자질이 아니라 피해를 막는 일이에요.' },
              { id: 'sorry', text: '미안하다며 다시 어울리려고 영상을 다시 찍자고 한다', result: '같은 일이 되풀이된다.', impact: [{ who: '찍힌 친구들', text: '다시 피해를 입는다', tone: -1 }], why: '알린 것을 사과할 일은 없어요. 다시 찍으면 피해가 되풀이돼요.' }] } }] } },
      { id: 'stop', text: '"동의 없이 찍으면 범죄가 될 수 있어, 하지 말자"라고 말린다', result: '몇 명이 멈칫하지만 한 친구는 계속 하자고 한다.', impact: [{ who: '탈의실 친구들', text: '촬영을 피할 기회가 생긴다', tone: 1 }], end: '분명한 말로 말렸어요.',
        next: { text: '한 친구가 "너 혼자 착한 척이야?"라며 다시 휴대폰을 꺼낸다.', ask: '어떻게 할까?', choices: [
          { id: 'tell', text: '바로 선생님께 알린다', result: '선생님이 와서 촬영을 막는다.', impact: [{ who: '탈의실 친구들', text: '피해를 입지 않는다', tone: 1 }], end: '말린 뒤 어른에게 알렸어요.',
            next: { text: '선생님이 "말해 줘서 고마워. 네 이름은 지켜 줄게"라고 한다.', choices: [
              { id: 'class', text: '학급에 촬영 동의 약속을 만들자고 제안한다', result: '모두가 지킬 약속이 생긴다.', impact: [{ who: '반 분위기', text: '서로를 지키는 약속이 생긴다', tone: 1 }], ending: '말리고, 알리고, 약속까지 만들었어요.' },
              { id: 'brag', text: '누가 찍으려 했는지 단톡방에 알린다', result: '또 다른 소문이 퍼진다.', impact: [{ who: '반 분위기', text: '서로 불신한다', tone: -1 }], why: '일은 선생님께 맡기고 소문은 내지 않아요.' }] } },
          { id: 'give', text: '더 말리면 따돌릴까 봐 그냥 물러선다', result: '촬영이 이어진다.', impact: [{ who: '탈의실 친구들', text: '피해를 입는다', tone: -1 }], why: '말려도 안 되면 바로 어른에게 알려요.' }] } },
      { id: 'report', text: '자리를 떠나 곧바로 선생님께 알린다', result: '선생님이 탈의실로 와 촬영을 막는다.', impact: [{ who: '탈의실 친구들', text: '피해를 입지 않는다', tone: 1 }], ending: '바로 알려 피해가 생기기 전에 막았어요.' }] };
    const R1 = [{ id: 'r1', text: '나이와 상관없이 동의 없는 촬영·유포에는 책임이 따른다' }, { id: 'r2', text: '장난이라는 의도는 피해를 줄이지 못한다' },
      { id: 'r3', text: '함께 있었을 뿐이면 아무 책임이 없다', why: '함께 찍거나 퍼뜨리면 책임이 생길 수 있어요. 말리고 알려요.' }, { id: 'r4', text: '찍힌 친구가 조심했어야 한다', why: '잘못은 찍은 사람에게 있어요. 찍힌 사람을 탓하지 않아요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '말리거나 알린 길에서는 찍힌 친구들이 피해를 입지 않았다' }, { id: 'r6', text: '따라간 길에서는 영상이 퍼져 피해가 커졌다' }], ok: ['r5', 'r6'] };
    const FLOW = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 3], [2, 3], [3, 3], [4, 3]], rocks: [[1, 2], [3, 1]] };
    const FLOW_E = { cols: 3, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 2, y: 0 }, stars: [[1, 1], [2, 1]], rocks: [] };
    const SCHOOL = { title: '우리 학교와 동네 지원 기관(가상 지도)', grid: [6, 4], places: [
      { name: '우리 교실', icon: 'school', at: [0, 3] }, { name: '상담실', icon: 'office', at: [2, 3] }, { name: '보건실', icon: 'hospital', at: [3, 2] },
      { name: '경찰서', icon: 'police', at: [5, 0] }, { name: '지역 지원 기관', icon: 'dot', at: [4, 1] }, { name: '공원', icon: 'park', at: [1, 0] }] };

    ALL.push(
      // ---- 도입 ----
      M('intro.case-sort', {
        title: '사례를 세 갈래로 구별하기', method: '가상 사례를 성희롱·성폭력·디지털 성범죄로 나누기', tool: 'sortboard', minutes: 5,
        levels: { easy: '사례 5장(갈래마다 한두 장)을 시연 판에서 함께 나누고, 교사가 갈래 뜻을 읽어 준다.', base: '사례 9장을 세 바구니에 나누는 시연을 보며 사례마다 갈래를 말한다.', challenge: '두 갈래에 걸치는 사례(예: 단톡방 품평 글 — 성희롱이면서 온라인)를 하나 골라 판단 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"친구 몸을 품평하는 말, 억지로 만지는 일, 몰래 찍는 일 — 셋은 같은 이름일까요?" 시연 단추로 가상 사례 9장이 세 바구니에 들어가는 모습을 보인다. "말로만 한 건 별것 아니다"라는 말이 나오면 "듣는 사람이 굴욕감을 느꼈다면 말도 성희롱이 될 수 있어요"라고 짚고, "온라인은 진짜가 아니다"라는 말에는 "찍히고 퍼진 사진은 지울 수 없을 만큼 오래 남아요"라고 되묻는다. 갈래의 이름보다 모두 상대의 동의가 없었다는 공통점이 먼저라고 밝힌다.',
          student: '가상 사례 카드를 성희롱·성폭력·디지털 성범죄 바구니에 나누고, 세 갈래의 공통점(상대가 동의하지 않았다)을 찾아요.',
          demo: { tool: 'sortboard', options: { slots: KINDS, cards: strip(CASES) }, sequence: [{ sort: { 성희롱: ['c1', 'c2', 'c3'], 성폭력: ['c4', 'c5'], '디지털 성범죄': ['c6', 'c7', 'c8', 'c9'] } }] },
          art: { draw: 'a paper-cut shelf with three paper baskets labelled with simple icons of a speech bubble, a hand and a phone, paper cards floating toward them', banner: '세 갈래, 하나의 공통점', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이고 행동을 자세히 묘사하지 않는다. 학생에게 이런 일을 보거나 겪었는지 묻지 않는다. 갈래가 겹치는 사례(온라인 성희롱 등)는 정답 하나를 강요하지 않고 까닭을 받아 준다. ' + SAFE_NOTE,
      }),
      M('intro.myth-data', {
        title: '신고를 망설이는 이유 그래프', method: '가상 설문 그래프로 신고에 대한 오해 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '이유 2개(소문·믿어 주지 않음) 막대만 값이 보이게 읽는다.', base: '이유 4개 막대에서 가장 많은 이유를 읽고, 그 오해를 푸는 실제 절차를 말한다.', challenge: '학교가 오해를 풀기 위해 할 일을 하나 제안한다.' },
        intro: {
          teacher: '"가상 설문에서 친구들이 신고를 망설이는 가장 큰 이유는 무엇일까요?" 막대그래프를 띄우고 시연 단추로 \'소문이 날까 봐\'를 고르는 모습을 보인다. "신고하면 모두에게 알려진다"는 말이 나오면 "알린 사람의 이야기와 이름은 비밀로 지켜지게 되어 있어요. 이 오해가 사실이라면 누가 가장 손해를 볼까요?"라고 되묻는다. \'내 잘못이라고 할까 봐\' 막대에서는 잘못은 언제나 가해한 쪽에 있다는 점을 짚는다. 자료는 수업용 가상 설문이다.',
          student: '가상 설문 그래프에서 신고를 망설이는 이유를 읽고, 실제 지원 절차가 어떤 오해를 풀어 주는지 이어 봐요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 설문 — 피해를 알리기 망설이는 이유', unit: '명', xLabel: '이유', yLabel: '응답 수', data: WHY, question: '가장 많이 답한 이유는?', choices: WHY.map((r) => r[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart on a classroom board, a paper student hesitating in front of a paper door with a heart-shaped lock', banner: '망설임 뒤의 오해', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 모두 가상이다. 학생 자신이 망설인 적이 있는지 묻지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.support-flow', {
        title: '신고 뒤 지원 흐름도 만들기', method: '알린 뒤 이어지는 지원 차례를 명령 블록으로 짜기', tool: 'block-coding', minutes: 16,
        levels: { easy: '단계 셋(별 둘 + 깃발) 판에서 거북이를 깃발까지 보낸다.', base: '단계 다섯(별 넷 + 깃발) 판에서 별을 모두 들러 깃발에 닿게 하고, 친구 프로그램을 따라가 보고, 틀린 블록 하나를 고친다.', challenge: '조건 블록(막히면 왼쪽)을 꼭 써서 같은 길을 만든다 — 조건 블록은 \'피해자의 선택을 묻고 따르는 갈래\'를 뜻한다.' },
        activity: {
          title: '지원 흐름도 짜기', tool: 'block-coding',
          teacher: '"판의 별 넷은 차례대로 ① 믿는 어른에게 알리기 ② 학교(담임·상담 선생님) ③ 보호자 ④ 경찰·전문 지원 기관이고, 깃발은 ⑤ 상담·의료·법률 지원이에요. 바위는 혼자 참기·소문내기예요." 실행할 때마다 "지금 거북이는 몇 번 단계를 지났나요?"라고 묻는다. "신고하면 모든 게 내 뜻과 상관없이 진행된다"는 학생에게 "지원은 피해자가 원하는 것을 묻고 함께 정해요. 조건 블록이 바로 그 묻는 자리예요"라고 짚는다. 이 판은 차례를 익히는 비유이고, 전문 지원 기관 번호는 학교가 확인해 넣는 칸이라고 밝힌다.',
          task: '별(지원 단계)을 모두 들러 깃발(상담·의료·법률 지원)에 닿는 프로그램을 만들고, 단계를 활동지 표에 글로 정리해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            Object.assign({ prompt: '별 넷(①믿는 어른 ②학교 ③보호자 ④경찰·전문 지원 기관)을 모두 들르고 바위(혼자 참기·소문내기)를 피해 깃발(⑤상담·의료·법률 지원)에 닿게 하세요.', toolOptions: Object.assign({}, FLOW), target: { reach: true, stars: true }, difficulty: 0.35,
              levels: { easy: { prompt: '별 둘(①믿는 어른 ②학교)을 들러 깃발(지원)에 닿게 하세요(단계 셋).', toolOptions: FLOW_E, target: { reach: true, stars: true } },
                challenge: { prompt: '조건 블록 \'막히면 왼쪽\'을 꼭 써서 별 넷을 들르고 깃발에 닿게 하세요. 조건 블록은 \'피해자의 선택을 묻고 따르는 갈래\'예요.', toolOptions: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, stars: true, use: ['if'] } } } }),
            { prompt: '친구가 짠 순서예요: 앞으로 2칸 → 왼쪽으로 돌기 → 앞으로 1칸. 이대로라면 ③보호자 단계에 가기 전에 꺾어요. 거북이가 멈출 칸을 고르세요.', toolOptions: Object.assign({ mode: 'trace', program: ['fwd', 'fwd', 'left', 'fwd'] }, FLOW), target: { end: { x: 2, y: 2 } }, difficulty: 0.3, conclude: '단계를 건너뛰면 지원이 끊길 수 있어요. 알린 뒤에도 차례대로 이어져요.' },
            { prompt: '친구 프로그램이 ④경찰·전문 지원 기관 칸에서 엉뚱한 쪽으로 돌아 판 밖으로 나가요. 블록 하나만 고쳐 별 넷을 들르고 깃발에 닿게 하세요.', toolOptions: Object.assign({}, FLOW), target: { reach: true, stars: true, maxEdits: 1 }, state: { program: ['rep:4', 'fwd', 'end', 'right', 'rep:3', 'fwd', 'end'] }, difficulty: 0.4, conclude: '알린 뒤에는 학교·보호자·전문 기관으로 이어지고, 지원은 피해자가 원하는 것을 함께 정해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판의 칸을 실제 지원 차례로 옮겨 쓰세요.', columns: ['단계', '누구에게·어디로', '그곳에서 하는 일'], cells: [['①', '믿는 어른', ''], ['②', '', ''], ['③', '', ''], ['④', `경찰·전문 지원 기관 ${LOCAL}`, ''], ['⑤', '상담·의료·법률 지원', '']] }] },
        notes: '교구 한계: 거북이 코딩판 블록에는 글을 붙일 수 없어 지원 단계를 별 칸으로, 마지막 지원을 깃발로 나타냈다. 단계 글은 문항 글과 활동지 표가 맡는다. ' + SAFE_NOTE,
      }),
      M('act.responsibility-dilemma', {
        title: '장난 영상 촬영 갈림길', method: '탈의실 장난 영상 제안 갈림길 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길의 결과와 견주는 근거까지 고르고, 셋째 문항에서 말릴 때 쓸 말을 고른다.' },
        activity: {
          title: '장난 영상 촬영 갈림길', tool: 'dilemma',
          teacher: '"친구들이 \'재밌을 거야\'라고 하면 장난일까요?" 학생마다 한 길을 끝까지 간 뒤 되돌아가 다른 길과 견주게 한다. "중학생은 아직 어려서 책임이 없다"는 학생에게 "나이가 어려도 동의 없는 촬영·유포에는 책임이 따르고 학교의 조치를 받을 수 있어요. 찍힌 친구의 피해도 나이에 따라 작아질까요?"라고 되묻는다. 찍힌 친구가 조심했어야 한다는 말은 바로잡고, 말리기와 알리기는 고자질이 아니라 피해를 막는 일이라는 점을 끝 장면에서 정리한다.',
          task: '가상 인물 은재가 탈의실 장난 영상을 찍자는 제안을 받은 장면에서 길을 골라 결과를 따라가고, 책임에 대한 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '은재가 촬영 제안을 받았어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '은재가 촬영 제안을 받았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '탈의실 장난 영상', D1, [['stop', 'tell', 'class'], ['follow', 'delete', 'firm'], ['report']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '영상을 받기만 한 친구의 장면을 따라가세요.', toolOptions: { title: '받기만 했다면?', scene: { text: '하준은 단톡방에서 누군가 찍은 탈의실 영상을 받았다. 직접 찍지는 않았다.', ask: '하준은 어떻게 할까?', motif: 'house', choices: [
              { id: 'fwd', text: '재미로 다른 친구에게 전달한다', result: '영상이 또 다른 방으로 퍼진다.', impact: [{ who: '찍힌 친구', text: '피해가 커진다', tone: -1 }], why: '전달하는 것도 피해를 키우고 책임이 생길 수 있어요.' },
              { id: 'keep', text: '보관만 해 둔다', result: '영상이 하준의 휴대폰에 남는다.', impact: [{ who: '찍힌 친구', text: '언제 퍼질지 모른다', tone: -1 }], why: '보관하지 않고, 어른에게 알려 지우는 도움을 받아요.' },
              { id: 'tellT', text: '전달하지 않고 선생님께 알린다', result: '선생님이 삭제와 보호 조치를 시작한다.', impact: [{ who: '찍힌 친구', text: '보호를 받기 시작한다', tone: 1 }], ending: '퍼뜨리지 않고 알려 피해를 줄였어요.' }] }, reasons: [{ id: 'q1', text: '전달·보관도 피해를 키운다' }, { id: 'q2', text: '알리면 삭제와 보호로 이어질 수 있다' }, { id: 'q3', text: '직접 찍지 않았으니 상관없다', why: '받은 뒤의 행동에도 책임이 따라요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['tellT']], reasons: ['q1', 'q2'], some: true } },
              { prompt: '받기만 한 친구의 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } },
              { prompt: '받기만 한 친구의 장면을 따라가고, 근거를 모두 고르세요.', target: { path: [['tellT']], reasons: ['q1', 'q2'] } }),
            IT({ prompt: '촬영을 말릴 때 할 말을 고르는 장면을 따라가세요.', toolOptions: { title: '말릴 때 쓸 말', scene: { text: '친구가 "그냥 웃기려는 거야"라며 다시 휴대폰을 든다.', ask: '어떤 말로 말릴까?', motif: 'house', choices: [
              { id: 'clear', text: '"동의 없이 찍는 건 장난이 아니야. 멈추자."', result: '친구가 휴대폰을 내린다.', impact: [{ who: '탈의실 친구들', text: '촬영을 피한다', tone: 1 }], ending: '짧고 분명한 말로 멈추게 했어요.' },
              { id: 'joke', text: '"너무 심하게는 찍지 마"라고 웃으며 말한다', result: '친구는 조금만 찍으면 된다고 여긴다.', impact: [{ who: '탈의실 친구들', text: '여전히 찍힌다', tone: -1 }], why: '\'조금은 괜찮다\'는 뜻이 되는 말은 말리는 말이 아니에요.' }] }, reasons: [{ id: 'k1', text: '말릴 때는 짧고 분명하게 멈추자고 말한다' }, { id: 'k2', text: '분위기를 깨지 않게 웃으며 넘긴다', why: '웃으며 넘기면 괜찮다는 뜻으로 들려요.' }], compare: false },
              target: { path: [['clear']], reasons: ['k1'] } },
              null, null,
              { conclude: '동의 없는 촬영·유포는 나이와 상관없이 책임이 따르는 일이에요. 찍지 않고, 퍼뜨리지 않고, 말리고 알려요. 잘못은 찍은 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"중학생은 어려서 책임이 없다"는 말에 대한 바른 생각은?', options: ['맞다, 어리면 책임이 없다', '나이가 어려도 동의 없는 촬영·유포에는 책임이 따른다', '찍힌 사람이 조심했어야 한다'], answer: '나이가 어려도 동의 없는 촬영·유포에는 책임이 따른다' }] },
        notes: '장면은 탈의실 촬영 제안까지만 말하고 찍힌 모습을 묘사하지 않는다. 책임에 대한 문장은 사람 확인 목록에 있다. ' + SAFE_NOTE,
      }),
      M('act.guide-booklet', {
        title: '지원 안내 소책자', method: '또래용 안내 소책자 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '1쪽(구별하기)만 문장 틀을 채워 쓰고 기준 2개를 점검한다.', base: '3쪽(구별하기·알리는 방법·지원받는 차례)을 쓰고 기준표 4항목(정확·피해자 존중·비밀 보장 안내·도움 자리 표시)으로 점검한다.', challenge: '넷째 문항에서 또래가 물을 만한 Q&A 두 개를 덧붙인다.' },
        activity: {
          title: '지원 안내 소책자', tool: 'rubric-writing',
          teacher: '"이 소책자를 처음 읽는 친구가 가장 먼저 알아야 할 한 문장은 무엇일까요?" 쪽마다 기준표를 먼저 읽고 쓰게 한다. "피해자도 조심해야 한다"는 문장이 나오면 "그 문장을 피해를 입은 친구가 읽으면 어떤 마음일까요? 조심할 사람은 누구인가요?"라고 되묻는다. 알린 사람의 이야기가 비밀로 지켜진다는 안내를 꼭 넣게 하고, 지역 기관 번호는 \'학교가 확인해 넣는 칸\'으로 비워 둔다. 실제 사람 이름이나 학교 사건은 쓰지 않는다.',
          task: '또래에게 줄 안내 소책자를 쪽마다 쓰고, 정확한지·피해자를 존중하는지·비밀 보장을 알렸는지·도움 자리를 표시했는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '1쪽 구별하기: 성희롱·성폭력·디지털 성범죄를 한 문장씩 쉬운 말로 쓰세요.', toolOptions: { topic: '소책자 1쪽: 성희롱·성폭력·디지털 성범죄를 또래가 알아듣게 한 문장씩, 모두 세 문장으로 쓰세요(사례는 가상으로).', minChars: 60, maxChars: 260, minSentences: 3, maxSentences: 4, title: '1쪽 구별하기' }, target: { selfCheck: ['세 갈래를 사실에 맞게 썼다', '공통점(동의 없음)을 넣었다', '피해자를 탓하는 말이 없다'], mustInclude: [['동의']] } },
              { prompt: '문장 틀을 채워 1쪽을 쓰세요.', toolOptions: { minChars: 40, minSentences: 2, starter: '성희롱은 ___. 디지털 성범죄는 ___. 셋 모두 상대의 동의가 없었다.' }, target: { selfCheck: ['세 갈래를 사실에 맞게 썼다', '피해자를 탓하는 말이 없다'], mustInclude: [['동의']] } }),
            IT({ prompt: '2쪽 알리는 방법: 누구에게 어떻게 알릴지, 비밀이 지켜진다는 것을 넣어 쓰세요.', toolOptions: { topic: '소책자 2쪽: 피해를 알게 되면 누구에게 어떻게 알리는지, 알린 사람의 이야기와 이름이 비밀로 지켜진다는 것을 넣어 세 문장으로 쓰세요.', minChars: 60, maxChars: 260, minSentences: 3, maxSentences: 4, title: '2쪽 알리는 방법' }, target: { selfCheck: ['알릴 사람(믿는 어른·담임·상담 선생님)을 썼다', '비밀 보장을 안내했다', '피해자를 탓하는 말이 없다'], mustInclude: [['비밀']] } },
              { prompt: '알릴 사람을 넣어 2쪽을 한두 문장으로 쓰세요.', toolOptions: { minChars: 25, minSentences: 1, maxSentences: 2, starter: '이런 일을 알게 되면 ___ 에게 말해요. 이야기는 ___ 로 지켜져요.' }, target: { selfCheck: ['알릴 사람을 썼다', '비밀 보장을 안내했다'], mustInclude: [['비밀']] } }),
            IT({ prompt: '3쪽 지원받는 차례: 학교·보호자·전문 기관으로 이어지는 차례와 도움 자리를 쓰세요.', toolOptions: { topic: `소책자 3쪽: 알린 뒤 학교 → 보호자 → 경찰·전문 지원 기관 → 상담·의료·법률 지원으로 이어지는 차례를 세 문장 이상 쓰고, 지역 번호 자리는 ${LOCAL}로 표시하세요.`, minChars: 60, maxChars: 300, minSentences: 3, maxSentences: 5, title: '3쪽 지원받는 차례' }, target: { selfCheck: ['차례를 정확하게 썼다', '도움 자리(지역 번호 칸)를 표시했다', '피해자가 원하는 지원을 함께 정한다고 썼다', '실제 사람 이름을 쓰지 않았다'] } },
              { prompt: '3쪽은 차례를 한 문장으로 쓰세요.', toolOptions: { minChars: 20, minSentences: 1, maxSentences: 2, starter: '알린 뒤에는 ___ → ___ → 전문 지원 기관으로 이어져요.' }, target: { selfCheck: ['차례를 정확하게 썼다', '실제 사람 이름을 쓰지 않았다'] } }),
            IT({ prompt: '마무리: 소책자 전체를 기준표로 다시 읽고 고칠 점을 한 문장 쓰세요.', toolOptions: { topic: '세 쪽을 다시 읽고, 기준표(정확·피해자 존중·비밀 보장 안내·도움 자리 표시) 가운데 가장 약한 것을 골라 고칠 점을 한두 문장으로 쓰세요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '소책자 다시 읽기' }, target: { selfCheck: ['정확한지 다시 읽었다', '피해자를 존중하는지 다시 읽었다', '비밀 보장을 안내했는지 보았다', '도움 자리를 표시했는지 보았다'] } },
              null,
              { prompt: '또래가 물을 만한 Q&A 두 개를 쓰세요.', toolOptions: { topic: '소책자 끝에 붙일 Q&A 두 개를 쓰세요(예: "신고하면 다 알려져요?"). 질문과 답을 합쳐 네 문장 안팎으로 쓰세요.', minChars: 50, maxChars: 260, minSentences: 3, maxSentences: 5, title: 'Q&A 덧붙이기' }, target: { selfCheck: ['질문 두 개를 썼다', '답이 사실에 맞다', '피해자를 탓하는 말이 없다'] } },
              { conclude: '좋은 안내 소책자는 세 갈래를 정확히 구별하고, 알린 사람의 비밀이 지켜진다는 것과 지원받는 차례·도움 자리를 알려 주며, 피해자를 탓하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '또래용 신고·지원 안내 소책자에 알맞은 문장은?', options: ['신고하면 모두에게 알려진다', '알린 사람의 이야기는 필요한 사람만 알게 다룬다', '증거는 지우는 게 좋다'], answer: '알린 사람의 이야기는 필요한 사람만 알게 다룬다' }, { type: 'short', prompt: '소책자 2쪽에 꼭 넣을 \'비밀 보장\' 안내 한 문장을 써요.' }] },
        notes: '글은 또래를 위한 안내문이며 학생 자신의 경험을 쓰지 않는다. 지역 지원 기관 번호는 학교가 확인해 채운다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.support-map', {
        title: '학교·지역 지원 기관 지도', method: '칸 지도에 지원 기관 핀 꽂고 범례 채우기', tool: 'map', minutes: 6,
        levels: { easy: '장소 이름이 보이는 지도에서 상담실과 지역 지원 기관에 핀을 꽂는다(첫째·둘째 출구 질문).', base: '이름을 숨긴 지도에서 범례 기호를 읽어 경찰서에 핀을 꽂고, 셋째 출구 질문에서 범례 빈칸(기관 이름)을 채운다.', challenge: '넷째 출구 질문에서 지역 지원 기관까지 가는 이동 방법과 각 기관이 하는 일을 한 줄씩 쓴다.' },
        wrap: {
          teacher: '"우리 교실에서 가장 먼저 찾아갈 수 있는 곳은 어디일까요? 학교 밖에서는요?" 가상 지도에서 상담실·보건실·경찰서·지역 지원 기관 자리를 찾게 한다. "경찰서는 큰일일 때만 가는 곳"이라는 학생에게 "지금 위험하거나 촬영물이 퍼지고 있다면 경찰과 전문 기관이 삭제·보호를 도울 수 있어요"라고 짚는다. 지역 지원 기관 번호는 학교가 확인한 번호로 활동지에 채운다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, SCHOOL, { names: false }), prompt: '학교 안에서 먼저 찾아갈 상담실에 핀을 꽂아요(범례 기호를 읽어요).', target: { place: '상담실' }, difficulty: 0.15 },
              { prompt: '이름이 보이는 지도에서 상담실에 핀을 꽂아요.', toolOptions: { names: true } }),
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, SCHOOL, { names: false }), prompt: '지금 위험할 때 학교 밖에서 도움을 청할 경찰서에 핀을 꽂아요.', target: { place: '경찰서' }, difficulty: 0.2 },
              { prompt: '이름이 보이는 지도에서 지역 지원 기관에 핀을 꽂아요.', toolOptions: { names: true }, target: { place: '지역 지원 기관' } }),
            { type: 'tool', tool: 'map', options: Object.assign({}, SCHOOL, { mode: 'legend', meanings: { office: '상담실', hospital: '보건실', police: '경찰서', dot: '지역 지원 기관' } }), prompt: '범례 빈칸에 기관 이름을 채워요.', target: { legend: { office: '상담실', hospital: '보건실', police: '경찰서', dot: '지역 지원 기관' } }, difficulty: 0.2 },
            { type: 'short', prompt: '지역 지원 기관까지 가는 방법과 그곳에서 하는 일을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 학교·지역 지원 기관',
          items: [
            { type: 'table', prompt: '기관마다 하는 일을 써요.', columns: ['기관', '하는 일'], cells: [['상담실(담임·상담 선생님)', ''], ['보건실', ''], ['경찰서', ''], [`지역 지원 기관 ${LOCAL}`, '']], answer: '(예) 이야기 듣고 연결, 몸 돌봄, 지금 위험할 때 보호, 상담·의료·법률 지원' },
            { type: 'short', prompt: '친구가 털어놓으면 함께 가자고 할 첫 장소와 그 까닭을 써요.' },
          ],
        },
        notes: '지도는 가상 학교·동네다. 지역 지원 기관 이름·번호는 학교가 확인해 채운다. 핀은 문항마다 하나라 기관마다 출구 질문을 나눴다. ' + SAFE_NOTE,
      }),
      M('wrap.pledge-chant', {
        title: '존중 약속 구호 리듬', method: '"찍지 않고, 퍼뜨리지 않고, 침묵하지 않기" 구호 리듬 짓기', tool: 'keyboard', minutes: 7,
        levels: { easy: '들려 주는 4박 리듬을 그대로 따라 놓는다.', base: '구호 한 줄을 4박 마디 하나 리듬으로 짓는다.', challenge: '구호를 두 줄로 늘려 4박 마디 둘에 맞춰 짓는다.' },
        wrap: {
          teacher: '"\'찍지 않고, 퍼뜨리지 않고, 침묵하지 않기\' — 세 마디 가운데 가장 힘주어 칠 말은 무엇일까요?" 리듬 블록으로 박을 채운 뒤 소리 내어 맞춰 친다. "침묵하지 않기는 아무 데나 말하라는 뜻"이라는 학생에게 "소문내기가 아니라 믿는 어른에게 알리는 것이 침묵하지 않기예요"라고 바로잡는다. 구호는 판단과 행동의 약속이지 누군가를 가리키는 말이 아니라고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '구호 "찍지 않고, 퍼뜨리지 않고"를 4박 마디 하나 리듬으로 지어요.', target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '소리 내어 쳐 보았다'] }, difficulty: 0.2 },
              { prompt: '들려 주는 4박 리듬을 그대로 따라 놓아요.', toolOptions: { pattern: ['e', 'e', 'q', 'e', 'e', 'q'], blocks: ['q', 'e', 'h'] }, target: { rhythm: ['e', 'e', 'q', 'e', 'e', 'q'] } },
              { prompt: '구호를 "찍지 않고, 퍼뜨리지 않고 / 침묵하지 않기"로 늘려 4박 마디 두 개 리듬으로 지어요.', toolOptions: { measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '두 줄을 이어 쳤다', '소리 내어 쳐 보았다'] } }),
            { type: 'choice', prompt: '"침묵하지 않기"의 뜻으로 가장 알맞은 것은?', options: ['단톡방에 누가 그랬는지 알린다', '믿는 어른·학교에 알린다', '혼자 참고 지나간다'], answer: 1, difficulty: 0.15, explain: '소문이 아니라 도움받을 곳에 알리는 것이 침묵하지 않기예요.' },
            { type: 'short', prompt: '구호에 더하고 싶은 존중 약속 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '존중 약속 구호',
          items: [
            { type: 'blank', prompt: '구호를 완성해요.', text: '___ 않고, 퍼뜨리지 않고, ___ 않기', answer: '찍지, 침묵하지' },
            { type: 'short', prompt: '우리 반 존중 약속 구호를 한 줄로 써요.' },
          ],
        },
        notes: '교구는 구호 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 구호 글은 문제 글·활동지에 적었다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 19-g9-stalking.js ====
  // ==== 9학년 · 관심과 집착의 경계, 거절 뒤의 나 (gender.m.g9-stalking) ====
  {
    const M = MK('g9-stalking', [9]);
    const DRAMA = [
      { id: 'd1', text: '거절당한 주인공이 매일 집 앞에서 기다린다', motif: 'house', ok: true }, { id: 'd2', text: '답이 없는데 하루 수십 번 메시지를 보낸다', ok: true },
      { id: 'd3', text: '상대 친구들에게 일정을 몰래 묻고 다닌다', ok: true }, { id: 'd4', text: '거절한 상대를 하굣길에 뒤따라간다', ok: true },
      { id: 'd5', text: '한 번 고백하고 대답을 존중한다' }, { id: 'd6', text: '거절을 듣고 "알겠어"라며 인사만 한다' },
    ];
    const LINE = [['인사하기', 1], ['한 번 연락하기', 1], ['거절 뒤 다시 한 번 묻기', 2], ['SNS 계속 들여다보기', 3], ['거절 뒤 반복 연락', 4], ['친구 통해 계속 연락', 4], ['집 앞에서 기다리기', 5], ['하굣길 뒤따라가기', 5]];
    const D1 = { text: '준호는 같은 반 친구에게 마음을 전했지만 "고마운데 나는 친구로 지내고 싶어"라는 답을 들었다. 밤이 되자 마음이 계속 쓰인다.', ask: '준호는 어떻게 할까?', motif: 'house', choices: [
      { id: 'sns', text: '그 친구 SNS를 계속 들여다본다', result: '새 글이 올라올 때마다 마음이 더 흔들린다.', impact: [{ who: '준호', text: '마음이 가라앉지 않는다', tone: -1 }], why: 'SNS를 계속 들여다보면 마음을 정리하기 어렵고 집착으로 이어질 수 있어요.', end: '들여다볼수록 마음이 흔들렸어요.',
        next: { text: '다음 날 준호는 "한 번만 더 물어볼까" 하는 생각이 든다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'again', text: '답이 바뀔 때까지 계속 메시지를 보낸다', result: '친구가 준호를 피하고 불안해한다.', impact: [{ who: '친구', text: '두려움을 느낀다', tone: -1 }], why: '거절 뒤 되풀이되는 연락은 상대에게 두려움을 주고 스토킹이 될 수 있어요.', end: '거절을 무시해 친구가 불안해졌어요.',
            next: { text: '친구가 "그만해 줘, 무서워"라고 답한다.', choices: [
              { id: 'stopNow', text: '사과하고 연락을 멈춘 뒤 믿는 어른에게 마음을 털어놓는다', result: '친구가 안심하고, 준호도 도움을 받는다.', impact: [{ who: '친구', text: '안심한다', tone: 1 }], ending: '늦었지만 멈추고 도움을 청했어요.' },
              { id: 'push', text: '"진심을 알아줄 때까지"라며 계속한다', result: '친구가 선생님께 도움을 청한다.', impact: [{ who: '친구', text: '일상이 흔들린다', tone: -1 }], why: '"무서워"라는 말은 분명한 거절이에요. 바로 멈춰야 해요.' }] } },
          { id: 'mute', text: 'SNS 알림을 끄고 일주일 쉬어 보기로 한다', result: '처음엔 허전하지만 마음이 조금씩 가라앉는다.', impact: [{ who: '준호', text: '마음을 정리할 틈이 생긴다', tone: 1 }], end: '들여다보기를 멈췄어요.',
            next: { text: '그래도 서운한 마음이 남아 있다.', choices: [
              { id: 'talk', text: '믿는 친구나 상담 선생님께 서운한 마음을 말한다', result: '이야기하고 나니 마음이 가벼워진다.', impact: [{ who: '준호', text: '감정을 건강하게 다룬다', tone: 1 }], ending: '감정을 혼자 쌓지 않고 나눴어요.' },
              { id: 'blame', text: '거절한 친구를 탓하는 글을 올린다', result: '친구가 상처를 받고 반 분위기가 나빠진다.', impact: [{ who: '친구', text: '상처를 받는다', tone: -1 }], why: '거절은 잘못이 아니에요. 거절한 사람을 탓하지 않아요.' }] } }] } },
      { id: 'proxy', text: '다른 친구에게 대신 연락해 달라고 부탁한다', result: '부탁받은 친구가 곤란해하고, 상대는 부담을 느낀다.', impact: [{ who: '친구', text: '거절했는데 또 연락이 온다', tone: -1 }], why: '다른 사람을 통해 연락해도 거절을 무시하는 것이에요.', end: '대신 연락하게 해 부담을 줬어요.',
        next: { text: '부탁받은 친구가 "그 애는 이미 답했잖아"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'accept', text: '"맞아, 그 답을 존중할게"라며 부탁을 거둔다', result: '더 이상 연락이 가지 않는다.', impact: [{ who: '친구', text: '부담이 사라진다', tone: 1 }], end: '거절을 받아들였어요.',
            next: { text: '준호는 마음을 어떻게 달랠지 고민한다.', choices: [
              { id: 'diary', text: '감정 일기를 쓰고 운동으로 기분을 바꾼다', result: '하루하루 마음이 정리된다.', impact: [{ who: '준호', text: '마음이 가라앉는다', tone: 1 }], ending: '거절을 존중하고 내 마음을 돌봤어요.' },
              { id: 'watch', text: '몰래 그 친구가 가는 곳을 따라가 본다', result: '친구가 알아채고 두려워한다.', impact: [{ who: '친구', text: '두려움을 느낀다', tone: -1 }], why: '따라가는 행동은 상대에게 큰 두려움을 줘요.' }] } },
          { id: 'insist', text: '"한 번만 더 전해 줘"라고 조른다', result: '부탁받은 친구도 준호를 피한다.', impact: [{ who: '부탁받은 친구', text: '곤란해진다', tone: -1 }], why: '거절을 대신 뒤집어 줄 수 있는 사람은 없어요.' }] } },
      { id: 'space', text: '감정 일기를 쓰고 그 친구와 거리를 둔다', result: '서운하지만 다음 날 교실에서 편하게 인사할 수 있다.', impact: [{ who: '준호와 친구', text: '서로 편하게 지낸다', tone: 1 }], ending: '처음부터 거절을 존중하고 내 마음을 돌봤어요.' }] };
    const R1 = [{ id: 'r1', text: '거절은 상대의 결정이고 존중해야 한다' }, { id: 'r2', text: '서운한 감정은 내가 건강하게 다룰 수 있다' },
      { id: 'r3', text: '끈질기게 노력하면 마음이 바뀐다', why: '거절 뒤의 끈질긴 연락은 상대에게 두려움을 줘요.' }, { id: 'r4', text: '거절한 사람이 상처를 줬으니 책임이 있다', why: '거절은 잘못이 아니에요. 감정은 내가 다룰 몫이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '거리를 둔 길에서는 둘 다 편하게 지냈다' }, { id: 'r6', text: '계속 연락한 길에서는 친구가 두려움을 느꼈다' }], ok: ['r5', 'r6'] };
    const CALM = ['잠깐 멈추기', '천천히 숨쉬기', '감정에 이름 붙이기', '할 일 하나 고르기'];

    ALL.push(
      // ---- 도입 ----
      M('intro.drama-scene', {
        title: '드라마 속 "끈질긴 구애" 장면', method: '드라마 장면 카드를 받는 사람 입장에서 다시 보기', tool: 'story', minutes: 5,
        levels: { easy: '장면 카드 3장(집 앞 기다리기·수십 번 메시지·한 번 고백하고 존중)만 짚고 부담이 되는 장면을 함께 고른다.', base: '장면 카드 6장에서 받는 사람에게 부담이 되는 장면 4장을 고르는 시연을 보고 까닭을 말한다.', challenge: '드라마 장면 하나를 거절을 존중하는 결말로 바꾸어 짝에게 말한다.' },
        intro: {
          teacher: '"드라마에서는 집 앞에서 기다리는 장면이 낭만적으로 나와요. 현실에서 그 장면을 받는 사람은 어떤 마음일까요?" 가상 드라마 장면 카드를 띄우고 시연 단추로 부담이 되는 장면이 바구니에 담기는 모습을 보인다. "결국 드라마에서는 마음이 바뀌잖아요"라는 말이 나오면 "드라마는 작가가 결말을 정해요. 현실의 상대는 \'싫다\'고 말한 사람이에요"라고 되묻는다. 끈질긴 노력과 거절 존중의 차이를 오늘 따져 본다고 밝힌다.',
          student: '가상 드라마의 "끈질긴 구애" 장면을 받는 사람 입장에서 다시 보고, 부담이 되는 장면을 골라요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '받는 사람에게 부담이 되는 장면', title: '가상 드라마 장면', cards: strip(DRAMA) }, sequence: [{ pick: ['d1', 'd2', 'd3', 'd4'] }] },
          art: { draw: 'a paper-cut TV screen showing a paper figure waiting under a street lamp, a second paper figure peeking worriedly from a window', banner: '낭만일까, 부담일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '드라마는 가상이다. 학생 자신의 고백·연애 경험을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.line-scale', {
        title: '관심에서 스토킹까지 척도', method: '행동 8개의 불안 정도 막대에서 선을 넘는 지점 찾기', tool: 'chart', minutes: 7,
        levels: { easy: '행동 4개(인사·한 번 연락·거절 뒤 반복 연락·뒤따라가기) 막대만 값이 보이게 읽는다.', base: '행동 8개 막대에서 불안 점수가 처음 4에 닿는 행동(선을 넘는 지점)을 고른다.', challenge: '선을 넘게 만드는 조건(거절 뒤·되풀이·두려움)을 짝에게 말한다.' },
        intro: {
          teacher: '"인사와 뒤따라가기 사이 어디쯤에서 선을 넘을까요?" 가상 학급이 매긴 불안 점수 막대그래프를 띄우고 시연 단추로 \'거절 뒤 반복 연락\'을 고르는 모습을 보인다. "연락은 한 번이든 열 번이든 연락일 뿐"이라는 말이 나오면 "같은 연락이라도 거절을 들은 뒤라면, 그리고 되풀이된다면 받는 사람의 마음은 어떻게 바뀔까요?"라고 되묻는다. 점수는 수업용 가상 자료다.',
          student: '가상 학급이 매긴 불안 점수 그래프에서 관심이 스토킹으로 넘어가는 지점을 찾아요.',
          demo: { tool: 'chart', options: { type: 'bar', horizontal: true, mode: 'read', title: '가상 학급이 매긴 받는 사람의 불안 점수(1~5)', unit: '점', xLabel: '행동', yLabel: '불안 점수', max: 5, data: LINE, question: '불안 점수가 처음으로 4점에 닿는 행동은?', choices: LINE.map((r) => r[0]) }, sequence: [{ pick: 4 }] },
          art: { draw: 'a paper-cut horizontal ladder of paper bars growing longer from a friendly wave to a shadowy figure following someone, a red paper line across the middle', banner: '어디서 선을 넘을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 모두 가상이다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.after-reject', {
        title: '거절 뒤 갈림길', method: '거절을 들은 뒤의 선택 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길과 견주는 근거까지 고르고, 셋째 문항에서 준호의 감정을 도울 방법을 고른다.' },
        activity: {
          title: '거절 뒤 갈림길', tool: 'dilemma',
          teacher: '"준호의 서운함은 잘못일까요? 서운함으로 무엇을 하느냐는요?" 학생마다 한 길을 끝까지 간 뒤 되돌아가 다른 길과 견주게 한다. "포기하지 않는 게 진심"이라는 학생에게 "상대가 \'친구로 지내고 싶어\'라고 답한 뒤에도 계속 연락이 오면, 그 사람은 진심을 느낄까요, 두려움을 느낄까요?"라고 되묻는다. 거절한 친구를 탓하는 말은 바로잡고, 감정은 인정하되 행동은 상대의 결정을 존중한다는 점을 끝 장면에서 정리한다.',
          task: '가상 인물 준호가 거절을 들은 뒤의 장면에서 길을 골라 결과를 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '준호가 거절을 들었어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '준호가 거절을 들었어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '거절 뒤의 준호', D1, [['sns', 'mute', 'talk'], ['proxy', 'accept', 'diary'], ['space']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '거절한 친구와 교실에서 마주친 장면을 따라가세요.', toolOptions: { title: '다음 날 교실', scene: { text: '다음 날 준호는 교실에서 거절한 친구와 눈이 마주쳤다.', ask: '준호는 어떻게 할까?', motif: 'house', choices: [
              { id: 'hello', text: '평소처럼 짧게 인사하고 자리로 간다', result: '둘 다 어색함이 조금 풀린다.', impact: [{ who: '친구', text: '편하게 지낼 수 있다', tone: 1 }], ending: '평소처럼 대해 서로 편해졌어요.' },
              { id: 'stare', text: '대답을 바꿔 달라는 듯 계속 쳐다본다', result: '친구가 불편해 자리를 피한다.', impact: [{ who: '친구', text: '불편함을 느낀다', tone: -1 }], why: '계속 쳐다보는 것도 상대에게 부담을 줘요.' },
              { id: 'cold', text: '반 친구들 앞에서 일부러 모른 척하며 흉본다', result: '친구가 상처받는다.', impact: [{ who: '친구', text: '상처를 받는다', tone: -1 }], why: '거절했다고 흉보는 것은 상대를 탓하는 일이에요.' }] }, reasons: [{ id: 'q1', text: '거절 뒤에도 상대를 평소처럼 존중한다' }, { id: 'q2', text: '거절한 사람이 먼저 사과해야 한다', why: '거절은 사과할 일이 아니에요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['hello']], reasons: ['q1'] } },
              { prompt: '교실에서 마주친 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '준호의 서운한 마음을 도울 방법을 고르는 장면을 따라가세요.', toolOptions: { title: '서운한 마음 돌보기', scene: { text: '준호의 친구 시우는 준호가 며칠째 힘이 없어 보인다는 것을 알아챘다.', ask: '시우는 어떻게 도울까?', motif: 'house', choices: [
              { id: 'listen', text: '"요즘 힘들어 보여, 얘기할래?" 하고 들어 준다', result: '준호가 서운한 마음을 털어놓고 조금 웃는다.', impact: [{ who: '준호', text: '마음이 가벼워진다', tone: 1 }], ending: '들어 주기로 친구의 마음을 도왔어요.' },
              { id: 'help', text: '"내가 대신 가서 다시 말해 줄게"라고 한다', result: '거절한 친구가 또 부담을 느낀다.', impact: [{ who: '거절한 친구', text: '다시 부담을 느낀다', tone: -1 }], why: '대신 연락해 주는 것은 거절을 무시하도록 돕는 일이에요.' }] }, reasons: [{ id: 'k1', text: '친구의 감정은 들어 주되 상대의 결정은 존중하게 돕는다' }, { id: 'k2', text: '친구를 위해 상대를 설득해 준다', why: '상대의 결정을 바꾸려 하면 부담을 줘요.' }], compare: false },
              target: { path: [['listen']], reasons: ['k1'] } },
              null, null,
              { conclude: '거절은 상대의 결정이에요. 서운한 감정은 자연스럽지만, 계속 연락하고 기다리고 따라가는 행동은 두려움을 주고 스토킹이 될 수 있어요. 감정은 내가 돌보고 행동은 존중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '거절을 들은 뒤 알맞은 행동은?', options: ['답이 바뀔 때까지 연락한다', '상대의 결정을 존중하고 내 감정을 돌본다', '친구를 시켜 대신 연락한다'], answer: '상대의 결정을 존중하고 내 감정을 돌본다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.emotion-plan', {
        title: '거절 뒤 감정 다루기 계획', method: '호흡 타이머와 감정 다루기 차례로 준호의 일주일 계획 세우기', tool: 'timer', minutes: 15,
        levels: { easy: '호흡 타이머를 1분씩 2번으로 맞추고, 감정 다루기 카드 3장 차례를 놓고, 준호의 계획 2개에 표시한다.', base: '호흡 타이머를 1분씩 3번(쉬기 10초)으로 맞추고, 카드 4장 차례를 놓고, 준호의 계획 4개에 표시한다.', challenge: '셋째 문항에서 준호의 계획에 도움받을 사람까지 넣어 표시한다.' },
        activity: {
          title: '거절 뒤 감정 다루기 계획', tool: 'timer',
          teacher: '"서운함이 확 올라올 때 준호가 가장 먼저 할 수 있는 일은 무엇일까요?" 우리 반 연습 약속인 1분 호흡을 함께 따라 한 뒤 가상 인물 준호의 계획을 세우게 한다. "감정은 참으면 사라진다"는 학생에게 "참기만 하면 그 감정은 어디로 갈까요? 멈추고, 숨쉬고, 이름을 붙이면 어떻게 달라질까요?"라고 되묻는다. 계획은 준호의 것이고, 학생 자신의 연애나 마음 상태는 말하지 않아도 된다고 밝힌다.',
          task: '호흡 타이머를 맞추고, 감정 다루기 차례를 놓고, 가상 인물 준호의 일주일 계획을 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '우리 반 연습 약속: 호흡 1분씩 3번, 사이 쉬기 10초로 타이머를 맞추세요.', toolOptions: { title: '호흡 타이머(우리 반 연습 약속)', plan: { work: 30, rest: 10, rounds: 1 }, showTotal: true }, target: { plan: { work: 60, rest: 10, rounds: 3 } }, difficulty: 0.2 },
              { prompt: '호흡 1분씩 2번, 사이 쉬기 10초로 타이머를 맞추세요.', target: { plan: { work: 60, rest: 10, rounds: 2 } } }),
            IT({ prompt: '서운함이 올라올 때 해 볼 차례대로 카드를 놓으세요.', toolOptions: { title: '감정 다루기 차례', cards: [CALM[2], CALM[0], CALM[3], CALM[1]] }, target: { order: CALM }, difficulty: 0.2 },
              { prompt: '카드 3장을 차례대로 놓으세요.', toolOptions: { cards: [CALM[2], CALM[0], CALM[1]] }, target: { order: CALM.slice(0, 3) } }),
            IT({ prompt: '준호의 일주일 계획에 넣은 것을 스스로 표시하세요.', toolOptions: { title: '준호의 일주일 계획' }, target: { selfCheck: ['운동 하나를 넣었다', '친구 만남을 넣었다', 'SNS 쉬는 시간을 넣었다', '감정 일기를 넣었다'] }, difficulty: 0.1 },
              { prompt: '준호의 계획에 넣은 것 두 가지를 표시하세요.', target: { selfCheck: ['운동 하나를 넣었다', 'SNS 쉬는 시간을 넣었다'] } },
              { prompt: '준호의 계획에 넣은 것과 도움받을 사람을 표시하세요.', target: { selfCheck: ['운동 하나를 넣었다', '친구 만남을 넣었다', 'SNS 쉬는 시간을 넣었다', '감정 일기를 넣었다', '도움받을 사람(믿는 친구·상담 선생님)을 적었다'] } },
              { conclude: '거절 뒤의 감정은 멈추고, 숨쉬고, 이름을 붙이고, 할 일을 고르며 다룰 수 있어요. 힘들면 믿는 사람에게 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '준호의 일주일 계획을 채워요.', columns: ['요일', '할 일'], cells: [['월', ''], ['수', ''], ['금', ''], ['도움받을 사람', '']], answer: '(예) 운동, 친구 만남, SNS 쉬기, 감정 일기, 상담 선생님' }] },
        notes: '계획은 가상 인물 준호의 것이다. 호흡 시간은 우리 반 연습 약속 값이다. ' + SAFE_NOTE,
      }),
      M('act.letter-self', {
        title: '거절 뒤 나에게 쓰는 편지', method: '가상 인물이 되어 자신에게 편지 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 틀을 채워 편지 앞부분 두 문장을 쓰고 기준 2개를 점검한다.', base: '편지를 앞(감정 인정)·가운데(상대 존중)·끝(다음 행동) 세 문항으로 나눠 7문장 안팎으로 쓰고 기준표 3항목으로 점검한다.', challenge: '넷째 문항에서 준호가 믿는 친구에게 털어놓는 장면을 두세 문장 덧붙인다.' },
        activity: {
          title: '거절 뒤 나에게 쓰는 편지', tool: 'rubric-writing',
          teacher: '"준호가 일주일 뒤의 자신에게 편지를 쓴다면, 첫 줄에 무엇을 써 줄까요?" 가상 인물 준호가 되어 쓰게 하고, 자기 연애 이야기는 쓰지 않는다고 미리 말한다. "그 애가 나쁜 거야"처럼 상대를 탓하는 문장이 나오면 "거절은 잘못일까요? 준호가 다룰 수 있는 것은 누구의 마음일까요?"라고 되묻는다. 감정을 인정하는 문장과 상대를 존중하는 문장이 함께 있어야 좋은 편지라고 짚는다.',
          task: '가상 인물 준호가 되어 거절 뒤 자신에게 편지를 쓰고, 감정 인정·상대 존중·다음 행동이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '편지 앞부분: 준호의 서운한 감정을 인정하는 문장 두 개를 쓰세요.', toolOptions: { topic: '가상 인물 준호가 자신에게 쓰는 편지의 앞부분이에요. 서운하고 아쉬운 감정을 있는 그대로 인정하는 문장 두 개를 쓰세요.', minChars: 30, maxChars: 160, minSentences: 2, maxSentences: 3, title: '편지 ① 감정 인정' }, target: { selfCheck: ['감정을 있는 그대로 썼다', '나를 탓하지 않았다', '상대를 탓하지 않았다'] } },
              { prompt: '문장 틀을 채워 편지 앞부분을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '준호야, 지금 ___ 마음이 드는 건 당연해. 그 마음을 ___.' }, target: { selfCheck: ['감정을 있는 그대로 썼다', '상대를 탓하지 않았다'] } }),
            IT({ prompt: '편지 가운데: 상대의 결정을 존중하는 문장 두 개를 쓰세요.', toolOptions: { topic: '친구가 "친구로 지내고 싶어"라고 한 결정을 준호가 존중하는 문장 두 개를 쓰세요.', minChars: 30, maxChars: 160, minSentences: 2, maxSentences: 3, title: '편지 ② 상대 존중' }, target: { selfCheck: ['상대의 결정을 존중한다고 썼다', '다시 조르거나 기다리는 계획이 없다', '상대를 탓하지 않았다'], mustInclude: [['존중', '받아들']] } }),
            IT({ prompt: '편지 끝: 이번 주에 할 다음 행동 두 가지를 넣어 편지를 마무리하는 세 문장을 쓰세요.', toolOptions: { topic: '앞에서 쓴 네 문장에 이어, 이번 주 준호가 할 다음 행동 두 가지(운동·친구 만남·감정 일기 등)를 넣어 편지를 마무리하는 세 문장을 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '편지 ③ 다음 행동' }, target: { selfCheck: ['감정을 인정했다', '상대를 존중했다', '다음 행동을 구체적으로 썼다'] } },
              { prompt: '편지 끝에 다음 행동 한 가지를 한두 문장으로 쓰세요.', toolOptions: { topic: '이번 주 준호가 할 다음 행동 한 가지를 한두 문장으로 쓰세요.', minChars: 15, minSentences: 1, maxSentences: 2, starter: '이번 주에는 ___ 을 해 볼게.' }, target: { selfCheck: ['다음 행동을 구체적으로 썼다', '상대를 존중했다'] } }),
            IT({ prompt: '가상 친구의 편지 "포기하지 말고 계속 연락해"를 기준표로 읽고 고칠 점을 쓰세요.', toolOptions: { topic: '가상 친구가 준호에게 쓴 쪽지: "포기하지 말고 계속 연락해, 언젠가는 마음이 바뀔 거야." 기준표(감정 인정·상대 존중·다음 행동)로 읽고 고칠 점을 두 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '친구 쪽지 고치기' }, target: { selfCheck: ['상대 존중이 빠진 점을 짚었다', '고친 문장을 제안했다', '친구를 탓하지 않고 썼다'] } },
              null,
              { prompt: '준호가 믿는 친구에게 털어놓는 장면을 쓰세요.', toolOptions: { topic: '준호가 믿는 친구에게 서운한 마음을 털어놓는 장면을 두세 문장의 대화로 쓰세요(실제 이름 없이).', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 4, title: '털어놓는 장면' }, target: { selfCheck: ['감정을 말로 표현했다', '상대를 탓하지 않았다', '친구가 들어 주는 말을 넣었다'] } },
              { conclude: '거절 뒤 나를 돌보는 글은 감정을 인정하고, 상대의 결정을 존중하며, 내가 할 수 있는 다음 행동을 담아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '거절당한 뒤 상대를 존중하는 행동은?', options: ['SNS를 계속 확인한다', '친구에게 대신 연락해 달라고 한다', '상대의 결정을 받아들이고 거리를 둔다'], answer: '상대의 결정을 받아들이고 거리를 둔다' }, { type: 'short', prompt: '준호의 편지에서 상대를 존중하는 문장 하나를 옮겨 써요.' }] },
        notes: '편지는 가상 인물의 것이며 학생 자신의 고백·거절 경험을 쓰게 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.respect-poster', {
        title: '"싫다면 멈춤" 포스터', method: '거절 존중 캠페인 포스터 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '구호 보기 3개 가운데 하나를 골라(둘째 출구 질문) 포스터를 꾸민다.', base: '포스터를 꾸미고 구호를 직접 쓴다(셋째 출구 질문).', challenge: `스토킹을 겪는 사람을 위한 도움 경로(믿는 어른·학교 상담·${LOCAL})를 넣는 문구를 쓴다(넷째 출구 질문).` },
        wrap: {
          teacher: '"\'싫다면 멈춤\'을 처음 보는 친구도 알아듣게 하려면 어떤 그림이 좋을까요?" 콜라주 판에는 그림만 붙고 구호는 출구 질문과 활동지에 쓴다고 알려 준다. "포기하지 않는 사랑" 같은 문구가 나오면 "이 포스터를 거절한 사람이 보면 안심이 될까요?"라고 되묻는다. 도움 경로를 넣을 때 지역 번호는 학교가 확인한 번호로 채운다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 "싫다면 멈춤" 포스터 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['포스터에 넣을 거절 존중 구호를 정했다', '끈질긴 구애를 멋지게 그리지 않았다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '포스터 구호로 가장 알맞은 것은?', options: ['진심이면 끝까지 기다려', '싫다면 멈춤, 거절은 존중', '한 번 더 물어보면 바뀔지도'], answer: 1, difficulty: 0.15, explain: '거절을 존중하는 구호가 알맞아요.' },
            { type: 'short', prompt: '거절을 존중하는 포스터 구호를 직접 써요.' },
            { type: 'short', prompt: `스토킹을 겪는 사람이 도움받을 곳(믿는 어른·학교 상담·${LOCAL})을 넣은 문구를 써요.` },
          ],
        },
        worksheet: {
          title: '싫다면 멈춤',
          items: [
            { type: 'short', prompt: '포스터 구호를 써요.' },
            { type: 'short', prompt: '이 포스터를 본 친구가 할 존중 행동을 하나 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 구호는 출구 질문(고르기·쓰기)과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
      M('wrap.sns-time', {
        title: 'SNS 확인 시간 점검', method: '가상 기록의 SNS 확인 시각을 시계에 나타내고 멈출 시각 정하기', tool: 'clock', minutes: 7,
        levels: { easy: '디지털 시각이 함께 보이는 시계에서 가상 기록의 두 시각을 나타낸다.', base: '디지털 시각 없이 10분 눈금으로 두 시각(마지막 확인 밤 11시 40분, 멈추기로 한 밤 9시 30분)을 나타낸다.', challenge: '넷째 출구 질문에서 SNS 대신 할 활동을 쓴다.' },
        wrap: {
          teacher: '"준호의 가상 기록을 보면, 밤 11시 40분까지 그 친구 SNS를 확인했어요. 몇 시에 멈추면 좋을까요?" 시계에 두 시각을 나타내게 한다. "그냥 보는 건 괜찮다"는 학생에게 "거절 뒤 특정 사람의 SNS를 늦게까지 계속 보는 것은 준호의 마음에 어떤 영향을 줄까요?"라고 되묻는다. 시각은 가상 기록이고 학생의 실제 SNS 습관은 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'clock', options: { minuteStep: 10 }, prompt: '가상 기록: 준호가 마지막으로 그 친구 SNS를 확인한 밤 11시 40분을 시계에 나타내요.', target: { h: 11, m: 40 }, difficulty: 0.15 },
              { prompt: '디지털 시각을 보며 밤 11시 40분을 나타내요.', toolOptions: { minuteStep: 10, showDigital: true } }),
            IT({ type: 'tool', tool: 'clock', options: { minuteStep: 10 }, prompt: '준호가 SNS를 끄기로 정한 밤 9시 30분을 시계에 나타내요.', target: { h: 9, m: 30 }, difficulty: 0.15 },
              { prompt: '디지털 시각을 보며 밤 9시 30분을 나타내요.', toolOptions: { minuteStep: 10, showDigital: true } }),
            { type: 'choice', prompt: '밤 9시 30분에 끄면 11시 40분보다 몇 시간 몇 분 일찍 멈추나요?', options: ['1시간 10분', '2시간 10분', '2시간 30분'], answer: 1, difficulty: 0.2, explain: '9시 30분에서 11시 40분까지는 2시간 10분이에요.' },
            { type: 'short', prompt: 'SNS 확인 대신 준호가 할 활동을 하나 써요.' },
          ],
        },
        worksheet: {
          title: 'SNS 확인 시간 줄이기',
          items: [
            { type: 'table', prompt: '준호의 가상 기록을 채워요.', columns: ['무엇', '시각'], cells: [['마지막으로 확인한 시각', '밤 11시 40분'], ['멈추기로 한 시각', '']], answer: '밤 9시 30분' },
            { type: 'short', prompt: 'SNS 대신 할 활동과 그 까닭을 써요.' },
          ],
        },
        notes: '계획 글의 \'2칸·4칸 표시\'는 시계가 한 번에 한 시각만 나타내서, 두 시각을 출구 질문 둘로 나누고 쉬움은 디지털 시각을 보이는 쪽으로 했다. 시각은 가상 기록이다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 20-g9-online-hate.js ====
  // ==== 9학년 · 성별 비하 표현과 온라인 혐오 (gender.m.g9-online-hate) ====
  {
    const M = MK('g9-online-hate', [9]);
    // 실제 혐오 표현 원문은 쓰지 않는다 — 형식만 '○○'로 보인다
    const FORMS = [
      ['"○○충"처럼 사람 뒤에 벌레를 붙인 말', '사람을 벌레에 빗대 깎아내린다'],
      ['"○○녀·○○남"처럼 한 일에 성별을 붙인 말', '한 사람의 일을 성별 전체 탓으로 돌린다'],
      ['"역시 ○자는 안 돼"처럼 성별을 묶는 말', '한 성별 전체를 하나로 묶어 낮춘다'],
      ['"○○답지 못하다"며 역할을 정하는 말', '성별에 따른 역할을 강요한다'],
      ['외모와 성별을 엮어 붙인 별명', '외모와 성별로 사람을 평가한다'],
    ];
    const HOURS = [['1시간째', 4], ['2시간째', 9], ['3시간째', 15], ['4시간째(대항 댓글)', 12], ['5시간째', 7], ['6시간째', 4]];
    const D1 = { text: '하린이 좋아하는 크리에이터 영상 아래에 "역시 ○자들은…" 같은 성별 비하 댓글이 줄줄이 달린다. 좋아요도 점점 늘어난다.', ask: '하린은 어떻게 할까?', motif: 'house', choices: [
      { id: 'like', text: '재미있어 보여 좋아요를 누른다', result: '그 댓글이 맨 위로 올라가 더 많은 사람이 본다.', impact: [{ who: '그 성별의 시청자들', text: '깎아내려진다고 느낀다', tone: -1 }], why: '좋아요 하나도 비하 댓글을 더 위로 올려 퍼뜨려요.', end: '좋아요로 비하 댓글이 더 퍼졌어요.',
        next: { text: '다른 영상에서도 비슷한 댓글이 보이고, 하린도 친구와 대화하며 그 말을 따라 쓴다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'useIt', text: '유행어니까 계속 쓴다', result: '친구 한 명이 그 말에 상처받았다고 말한다.', impact: [{ who: '친구', text: '상처를 받는다', tone: -1 }], why: '유행어라도 한 성별을 깎아내리는 말은 상처와 차별을 키워요.', end: '유행어가 친구에게 상처가 됐어요.',
            next: { text: '친구가 "그 말 들으면 기분 나빠"라고 한다.', choices: [
              { id: 'sorryU', text: '"몰랐어, 미안해. 이제 안 쓸게"라고 한다', result: '친구가 고개를 끄덕인다.', impact: [{ who: '친구', text: '존중받는다고 느낀다', tone: 1 }], ending: '늦었지만 멈추고 사과했어요.' },
              { id: 'justJoke', text: '"다들 쓰는 말인데 예민하네"라고 한다', result: '친구와 사이가 멀어진다.', impact: [{ who: '친구', text: '또 상처를 받는다', tone: -1 }], why: '모두가 쓴다고 문제없는 말이 되지는 않아요.' }] } },
          { id: 'unlike', text: '좋아요를 취소하고 그 말을 쓰지 않기로 한다', result: '하린은 자기 언어 습관을 돌아본다.', impact: [{ who: '하린', text: '비하 표현을 멈춘다', tone: 1 }], end: '좋아요를 거두고 말을 바꿨어요.',
            next: { text: '친구가 "그거 그냥 웃자고 하는 거잖아"라고 한다.', choices: [
              { id: 'explain', text: '"웃자고 해도 누군가는 깎아내려져"라고 짧게 말한다', result: '친구가 잠깐 생각해 본다.', impact: [{ who: '친구', text: '다시 생각해 본다', tone: 1 }], ending: '내 생각을 짧고 분명하게 말했어요.' },
              { id: 'fight', text: '친구를 "너도 똑같은 ○○충"이라고 몰아붙인다', result: '말싸움이 커진다.', impact: [{ who: '둘 사이', text: '싸움이 된다', tone: -1 }], why: '비하로 맞서면 또 다른 비하가 돼요. 사실과 존중으로 말해요.' }] } }] } },
      { id: 'ignore', text: '불편하지만 그냥 넘긴다', result: '비하 댓글은 그대로 늘어난다.', impact: [{ who: '그 성별의 시청자들', text: '댓글창을 떠난다', tone: -1 }], why: '넘기면 나는 편하지만 댓글창은 그대로예요. 안전하게 할 수 있는 일을 골라요.', end: '댓글이 그대로 늘었어요.',
        next: { text: '하린은 이 댓글들이 계속 신경 쓰인다.', ask: '어떻게 할까?', choices: [
          { id: 'report2', text: '비하 댓글을 신고하고 숨김을 누른다', result: '몇몇 댓글이 가려지고 신고가 접수된다.', impact: [{ who: '댓글창', text: '비하 댓글이 줄어든다', tone: 1 }], end: '안전하게 신고했어요.',
            next: { text: '그래도 새 댓글이 올라온다.', choices: [
              { id: 'counter2', text: '"사람을 성별로 묶지 말아요"라는 짧은 대항 댓글을 단다', result: '대항 댓글에 공감이 붙고 비하 댓글이 줄어든다.', impact: [{ who: '댓글창', text: '분위기가 바뀐다', tone: 1 }], ending: '신고와 대항 표현으로 멈추게 했어요.' },
              { id: 'insult2', text: '댓글 단 사람의 계정을 찾아 욕을 남긴다', result: '싸움이 번지고 하린도 공격받는다.', impact: [{ who: '하린', text: '공격을 받는다', tone: -1 }], why: '찾아가 욕하는 것은 또 다른 폭력이고 나를 위험하게 해요.' }] } },
          { id: 'leave', text: '그 크리에이터 영상을 보지 않기로 한다', result: '하린은 편해지지만 댓글창은 그대로다.', impact: [{ who: '댓글창', text: '바뀌지 않는다', tone: 0 }], why: '보지 않는 것도 선택이지만, 신고처럼 안전하게 멈추게 하는 방법도 있어요.' }] } },
      { id: 'report', text: '비하 댓글을 신고하고 짧은 대항 댓글을 단다', result: '대항 댓글에 공감이 붙고 비하 댓글이 눈에 띄게 줄어든다.', impact: [{ who: '댓글창', text: '분위기가 바뀐다', tone: 1 }], ending: '처음부터 안전하게 신고하고 대항 표현을 남겼어요.' }] };
    const R1 = [{ id: 'r1', text: '좋아요·따라 쓰기도 비하 표현을 퍼뜨린다' }, { id: 'r2', text: '신고와 짧은 대항 표현으로 안전하게 멈출 수 있다' },
      { id: 'r3', text: '유행어라서 괜찮다', why: '유행어라도 한 성별을 깎아내리면 차별을 키워요.' }, { id: 'r4', text: '똑같은 비하로 맞서야 멈춘다', why: '비하로 맞서면 싸움과 또 다른 비하가 돼요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '신고·대항 댓글 길에서는 비하 댓글이 줄었다' }, { id: 'r6', text: '좋아요를 누른 길에서는 비하 댓글이 더 위로 퍼졌다' }], ok: ['r5', 'r6'] };
    const S = 'hexagon:rose'; const Q = 'circle:sky'; const A = 'star:mint';

    ALL.push(
      // ---- 도입 ----
      M('intro.meme-origin', {
        title: '유행어의 숨은 뜻 찾기', method: '유행어 형식 카드와 숨은 뜻 짝짓기', tool: 'wordcards', minutes: 5,
        levels: { easy: '형식 카드 3장(○○충·○○녀/○○남·역시 ○자는)만 시연 판에서 함께 짝짓는다.', base: '형식 카드 5장과 숨은 뜻 카드를 짝짓는 시연을 보고, 형식마다 누가 깎아내려지는지 말한다.', challenge: '형식 하나를 골라 대신 쓸 존중하는 말을 짝에게 말한다.' },
        intro: {
          teacher: '"\'○○충\', \'역시 ○자는\' — 이런 말 뒤에 숨은 뜻은 무엇일까요?" 실제 혐오 표현은 쓰지 않고 형식만 보인다고 먼저 밝힌 뒤, 시연 단추로 형식 카드와 숨은 뜻 카드가 짝지어지는 모습을 보인다. "다들 쓰는 유행어라 뜻 없이 쓴다"는 말이 나오면 "뜻 없이 썼어도 그 말을 들은 사람이 깎아내려진다면 어떨까요?"라고 되묻는다. 어느 한 성별 편을 드는 시간이 아니라, 누구든 성별로 묶어 깎아내리는 말을 살피는 시간이라고 짚는다.',
          student: '실제 표현 대신 "○○" 형식으로 보인 유행어 카드와 그 숨은 뜻을 짝짓고, 누가 깎아내려지는지 생각해요.',
          demo: { tool: 'wordcards', options: MB('', FORMS).toolOptions, sequence: [MB('', FORMS).target] },
          art: { draw: 'a paper-cut phone screen with paper speech bubbles whose words are covered by paper patches with circles, a magnifying glass lifting one patch', banner: '유행어 뒤의 숨은 뜻', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 혐오 표현 원문을 판서하거나 학생에게 예를 들게 하지 않는다. 특정 성별을 비하하거나 성별 갈등의 편을 가르는 토론으로 흐르지 않게 한다. ' + SAFE_NOTE,
      }),
      M('intro.spread-data', {
        title: '비하 댓글 확산 그래프', method: '가상 게시물의 시간별 비하 댓글 수 꺾은선 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '꺾은선을 값이 보이게 두고 가장 많은 때를 함께 읽는다.', base: '대항 댓글이 달린 4시간째 앞뒤를 견주어 비하 댓글이 가장 많던 때와 그 뒤의 변화를 읽는다.', challenge: '대항 표현의 효과를 한 문장으로 짝에게 말한다(그래프가 가상 자료라 단정하지 않는다).' },
        intro: {
          teacher: '"비하 댓글은 언제 가장 많았고, 대항 댓글이 달린 뒤에는 어떻게 바뀌었나요?" 가상 게시물의 꺾은선을 띄우고 시연 단추로 \'3시간째\'를 고르는 모습을 보인다. "어차피 댓글은 막을 수 없다"는 말이 나오면 "4시간째 뒤의 선을 보세요. 무엇이 바뀌었을까요?"라고 되묻는다. 자료는 수업용 가상 기록이고, 한 게시물의 모양으로 모든 경우를 단정하지 않는다고 덧붙인다. 교구가 한 줄만 그려서 대항 댓글이 달린 때는 눈금 이름에 적었다.',
          student: '가상 게시물의 시간별 비하 댓글 수 꺾은선에서 가장 많았던 때와 대항 댓글이 달린 뒤의 변화를 읽어요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '가상 게시물 — 시간별 비하 댓글 수', unit: '개', xLabel: '시간', yLabel: '비하 댓글 수', data: HOURS, question: '비하 댓글이 가장 많았던 때는?', choices: HOURS.map((r) => r[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut line chart rising then falling, a small paper shield-shaped speech bubble placed at the peak', banner: '대항 댓글 뒤에 무엇이 바뀌었나', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 모두 가상이다. 계획의 \'두 줄 비교\'는 교구가 꺾은선 한 줄만 그려, 대항 댓글이 달린 때를 눈금 이름(4시간째)에 적고 앞뒤를 견준다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.comment-dilemma', {
        title: '댓글창 갈림길', method: '성별 비하 댓글이 달린 댓글창 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길과 견주는 근거까지 고르고, 셋째 문항에서 하린이 달 대항 댓글을 고른다.' },
        activity: {
          title: '댓글창 갈림길', tool: 'dilemma',
          teacher: '"좋아요 하나, 넘기기 하나가 댓글창에 무엇을 할까요?" 학생마다 한 길을 끝까지 간 뒤 되돌아가 다른 길과 견주게 한다. "똑같이 비하해서 맞서야 멈춘다"는 학생에게 "비하로 맞서면 댓글창에 비하가 하나 더 늘어나요. 멈추게 하는 다른 방법은 무엇일까요?"라고 되묻는다. 계정을 찾아가 공격하는 길은 나를 위험하게 한다는 점, 신고와 짧은 대항 표현이 안전하게 멈추는 방법이라는 점을 끝 장면에서 정리한다.',
          task: '가상 인물 하린이 성별 비하 댓글을 본 장면에서 길을 골라 결과를 따라가고, 안전하게 멈추는 방법의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '하린이 비하 댓글을 봤어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '하린이 비하 댓글을 봤어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '댓글창의 하린', D1, [['ignore', 'report2', 'counter2'], ['like', 'unlike', 'explain'], ['report']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '반 단톡방에 성별 비하 밈이 올라온 장면을 따라가세요.', toolOptions: { title: '단톡방의 밈', scene: { text: '반 단톡방에 한 성별을 놀리는 밈 사진이 올라오고 웃음 이모티콘이 달린다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'laugh', text: '나도 웃음 이모티콘을 단다', result: '비슷한 밈이 더 올라온다.', impact: [{ who: '반 친구들', text: '불편한 사람이 말을 못 한다', tone: -1 }], why: '웃음 반응도 비하 밈을 키워요.' },
              { id: 'stopIt', text: '"이건 누군가 불편할 것 같아, 그만 올리자"라고 쓴다', result: '몇 명이 동의하고 밈이 멈춘다.', impact: [{ who: '반 친구들', text: '편하게 대화한다', tone: 1 }], ending: '짧고 존중하는 말로 멈추게 했어요.' }] }, reasons: [{ id: 'q1', text: '짧고 존중하는 말로 멈추자고 할 수 있다' }, { id: 'q2', text: '단톡방은 우리끼리라 괜찮다', why: '우리끼리라도 불편한 사람이 있고 캡처로 퍼질 수 있어요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['stopIt']], reasons: ['q1'] } },
              { prompt: '단톡방 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '하린이 달 대항 댓글을 고르는 장면을 따라가세요.', toolOptions: { title: '대항 댓글 고르기', scene: { text: '하린은 비하 댓글 아래에 한 줄을 남기기로 했다.', ask: '어떤 댓글이 알맞을까?', motif: 'house', choices: [
              { id: 'good', text: '"사람을 성별로 묶어 말하지 말아요. 영상 얘기 해요."', result: '공감이 붙고 대화가 영상 이야기로 돌아간다.', impact: [{ who: '댓글창', text: '분위기가 바뀐다', tone: 1 }], ending: '사실과 존중으로 짧게 맞섰어요.' },
              { id: 'bad', text: '"그렇게 말하는 너희가 더 ○○충이다"', result: '맞불 댓글이 쏟아진다.', impact: [{ who: '댓글창', text: '싸움이 커진다', tone: -1 }], why: '비하로 맞서면 또 다른 비하가 돼요.' }] }, reasons: [{ id: 'k1', text: '대항 표현은 비난이 아니라 사실과 존중으로 짧게 쓴다' }, { id: 'k2', text: '세게 말할수록 효과가 크다', why: '세게 말하면 싸움이 커질 수 있어요.' }], compare: false },
              target: { path: [['good']], reasons: ['k1'] } },
              null, null,
              { conclude: '좋아요와 따라 쓰기도 비하 표현을 퍼뜨려요. 신고와 짧고 존중하는 대항 표현으로 안전하게 멈출 수 있고, 비하로 맞서지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '성별 비하 댓글을 보았을 때 안전하게 멈추는 방법은?', options: ['좋아요를 눌러 분위기를 맞춘다', '신고하고 짧고 존중하는 대항 댓글을 단다', '그 사람 계정을 찾아가 욕한다'], answer: '신고하고 짧고 존중하는 대항 댓글을 단다' }] },
        notes: '댓글 장면에서 어느 성별을 비하하는지 밝히지 않는다(○○로 둔다). ' + SAFE_NOTE,
      }),
      M('act.counter-speech', {
        title: '대항 표현 글쓰기', method: '비하 댓글에 답하는 대항 표현 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 채워 대항 표현 1개를 쓰고 기준 2개를 점검한다.', base: '대항 표현 3개(첫 문항 1개·둘째 문항 2개)를 쓰고 기준표 3항목(비난 아닌 사실·존중·짧고 분명)으로 점검한다.', challenge: '셋째 문항에서 맞불 댓글을 고쳐 쓰고, 대항 표현이 싸움이 되지 않게 하는 조건을 덧붙인다.' },
        activity: {
          title: '대항 표현 글쓰기', tool: 'rubric-writing',
          teacher: '"\'역시 ○자들은…\'이라는 가상 댓글에 한 줄로 답한다면, 어떤 말이 싸움 대신 멈춤을 부를까요?" 기준표를 먼저 읽고 쓰게 한다. "세게 말해야 알아듣는다"는 학생에게 "세게 말한 댓글에는 어떤 답이 달릴까요? 사실을 짧게 말한 댓글에는요?"라고 되묻는다. 실제 혐오 표현을 그대로 옮겨 쓰지 않고 \'○○\'로 둔다고 미리 말한다.',
          task: '가상 비하 댓글에 답하는 대항 표현을 쓰고, 비난이 아닌 사실·존중·짧고 분명한지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '가상 댓글 "역시 ○자들은 이래서 안 돼"에 답하는 대항 표현 1개를 쓰세요.', toolOptions: { topic: '가상 댓글: "역시 ○자들은 이래서 안 돼." 이 댓글에 답하는 대항 표현을 한두 문장으로 쓰세요(실제 비하 말은 쓰지 않아요).', minChars: 15, maxChars: 100, minSentences: 1, maxSentences: 2, title: '대항 표현 ①' }, target: { selfCheck: ['비난이 아니라 사실로 말했다', '상대도 존중하는 말로 썼다', '짧고 분명하게 썼다'] } },
              { prompt: '문장 틀을 채워 대항 표현 1개를 쓰세요.', toolOptions: { minChars: 10, minSentences: 1, starter: '한 사람의 일을 ___ 전체로 묶지 말아요.' }, target: { selfCheck: ['비난이 아니라 사실로 말했다', '짧고 분명하게 썼다'] } }),
            IT({ prompt: '다른 가상 댓글 두 개에 답하는 대항 표현 2개를 쓰세요.', toolOptions: { topic: '가상 댓글 ㉮ "○○답지 못하게 왜 저래" ㉯ "○○녀 또 시작이네"에 답하는 대항 표현을 하나씩, 모두 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '대항 표현 ②③' }, target: { selfCheck: ['비난이 아니라 사실로 말했다', '상대도 존중하는 말로 썼다', '짧고 분명하게 썼다'] } },
              { prompt: '가상 댓글 ㉮에 답하는 대항 표현 하나를 쓰세요.', toolOptions: { topic: '가상 댓글 ㉮ "○○답지 못하게 왜 저래"에 답하는 대항 표현을 한 문장으로 쓰세요.', minChars: 10, minSentences: 1, maxSentences: 2 }, target: { selfCheck: ['비난이 아니라 사실로 말했다', '짧고 분명하게 썼다'] } }),
            IT({ prompt: '가상 친구의 맞불 댓글 "너희가 더 ○○충이야"를 기준표로 읽고 고쳐 쓰세요.', toolOptions: { topic: '가상 친구가 단 댓글: "너희가 더 ○○충이야." 기준표(사실·존중·짧고 분명)로 읽고 고친 대항 표현을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '맞불 댓글 고치기' }, target: { selfCheck: ['비하로 맞선 점을 짚었다', '사실과 존중으로 고쳤다', '친구를 탓하지 않고 썼다'] } },
              null,
              { prompt: '맞불 댓글을 고쳐 쓰고, 대항 표현이 싸움이 되지 않는 조건을 덧붙이세요.', toolOptions: { topic: '가상 친구의 맞불 댓글 "너희가 더 ○○충이야"를 고친 대항 표현으로 쓰고, 대항 표현이 싸움이 되지 않게 하는 조건을 한 문장 덧붙여 모두 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '싸움이 되지 않는 조건' }, target: { selfCheck: ['사실과 존중으로 고쳤다', '싸움이 되지 않는 조건을 썼다', '친구를 탓하지 않고 썼다'] } },
              { conclude: '대항 표현은 비난 대신 사실을, 상대도 존중하는 말로, 짧고 분명하게 써요. 비하로 맞서지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 쓴 대항 표현 가운데 가장 마음에 드는 것 하나를 옮겨 써요(실제 비하 말 없이).' }] },
        notes: SAFE_NOTE,
      }),
      M('act.word-pattern', {
        title: '대화 규칙 무늬 만들기', method: '"멈춤-질문-대안" 무늬를 되풀이해 학급 온라인 대화 규칙 띠 만들기', tool: 'pattern', minutes: 28,
        levels: { easy: '두 조각 무늬(멈춤 육각형·대안 별)로 빈칸을 채우고, 틀린 조각을 찾고, 두 조각 되풀이 띠를 만든다.', base: '세 조각 무늬(멈춤 육각형·질문 동그라미·대안 별)로 빈칸 채우기·틀린 조각 찾기·뜻 고르기·띠 만들기를 한다.', challenge: '넷째 문항에서 세 조각 묶음을 그대로 되풀이한 띠를 만들고, 활동지에 규칙의 뜻을 쓴다.' },
        activity: {
          title: '대화 규칙 무늬 만들기', tool: 'pattern',
          teacher: '"분홍 육각형은 멈춤, 하늘 동그라미는 질문, 민트 별은 대안이에요. 비하 표현을 보면 이 세 조각을 차례대로 떠올려요." 칠판에 조각의 뜻(멈춤 = 따라 쓰거나 좋아요 누르지 않기, 질문 = "이 말 누가 불편할까?" 묻기, 대안 = 다른 말 제안하기)을 적고 무늬를 채우게 한다. "한 번 멈추면 끝"이라는 학생에게 "무늬가 되풀이되는 것처럼, 대화에서도 비하가 다시 나오면 같은 차례를 다시 써요"라고 짚는다. 띠는 학급 온라인 대화방 규칙으로 게시한다.',
          task: '멈춤·질문·대안 조각의 규칙을 찾아 무늬를 채우고, 우리 반 온라인 대화 규칙 띠를 만들어요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '멈춤·질문·대안 무늬의 빈칸을 채우세요.', toolOptions: { seq: [S, Q, A, S, Q, A, S, null, null], palette: [S, Q, A] }, target: { fill: [Q, A] }, difficulty: 0.15 },
              { prompt: '멈춤·대안 두 조각 무늬의 빈칸을 채우세요.', toolOptions: { seq: [S, A, S, A, S, null], palette: [S, A] }, target: { fill: [A] } }),
            IT({ prompt: '규칙을 깨는 조각 하나를 찾으세요.', toolOptions: { mode: 'odd', seq: [S, Q, A, S, Q, S, S, Q, A] }, target: { odd: 5 }, difficulty: 0.2 },
              { prompt: '두 조각 무늬에서 규칙을 깨는 조각 하나를 찾으세요.', toolOptions: { mode: 'odd', seq: [S, A, S, A, A, A] }, target: { odd: 4 } }),
            IT({ prompt: '이 무늬가 뜻하는 대화 규칙을 고르세요.', toolOptions: { mode: 'rule', seq: [S, Q, A, S, Q, A], question: '분홍 육각형(멈춤)·하늘 동그라미(질문)·민트 별(대안)이 되풀이되는 뜻은?', choices: ['비하 표현을 보면 멈추고, 묻고, 다른 말을 제안한다', '비하 표현을 보면 참고, 참고, 또 참는다', '비하 표현을 보면 따지고, 맞서고, 끝낸다'], why: ['', '참기만 하면 비하가 이어져요.', '맞서 싸우면 또 다른 비하가 생겨요.'] }, target: { pick: 0 }, difficulty: 0.15 },
              { prompt: '두 조각 무늬가 뜻하는 대화 규칙을 고르세요.', toolOptions: { seq: [S, A, S, A], question: '분홍 육각형(멈춤)·민트 별(대안)이 되풀이되는 뜻은?', choices: ['비하 표현을 보면 멈추고 다른 말을 제안한다', '비하 표현을 보면 참는다', '비하 표현을 보면 따진다'] } }),
            IT({ prompt: '세 조각을 써서 세 조각 묶음이 되풀이되는 우리 반 대화 규칙 띠를 만드세요.', toolOptions: { mode: 'make', palette: [S, Q, A], length: 9 }, target: { rule: 'repeat', period: 3, uses: 3 }, difficulty: 0.25 },
              { prompt: '두 조각을 써서 두 조각 묶음이 되풀이되는 띠를 만드세요.', toolOptions: { mode: 'make', palette: [S, A], length: 6 }, target: { rule: 'repeat', period: 2, uses: 2 } },
              { prompt: '멈춤-질문-대안 묶음을 그대로 되풀이한 띠를 만드세요.', target: { rule: 'core', core: [S, Q, A] } },
              { conclude: '비하 표현을 보면 멈추고, 묻고, 다른 말을 제안해요. 다시 나오면 같은 차례를 되풀이해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '온라인 대화에서 비하 표현을 봤을 때 ‘멈춤’에 해당하는 행동은?', options: ['좋아요를 누른다', '따라 쓰지 않고 반응을 멈춘다', '더 센 말로 받아친다'], answer: '따라 쓰지 않고 반응을 멈춘다' }, { type: 'table', prompt: '대화 규칙 띠의 조각 뜻을 써요.', columns: ['조각', '뜻', '이럴 때 할 말'], cells: [['분홍 육각형', '멈춤', ''], ['하늘 동그라미', '질문', ''], ['민트 별', '대안', '']], answer: '(예) 좋아요·따라 쓰기 멈추기 / "이 말 누가 불편할까?" / "다른 말로 하자"' }] },
        notes: '교구 조각에는 글을 쓰지 못해 조각마다 뜻(멈춤·질문·대안)을 정해 두고 문항 글·교사 판서·활동지가 뜻을 맡는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.class-rule', {
        title: '우리 반 온라인 언어 규칙 포스터', method: '성별 비하 없는 언어 규칙 포스터 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '규칙 보기 3개 가운데 하나를 골라(둘째 출구 질문) 포스터를 꾸민다.', base: '포스터를 꾸미고 규칙을 직접 쓴다(셋째 출구 질문).', challenge: '규칙을 어겼을 때의 회복 방법(사과·지우기·다른 말로 다시 쓰기)을 쓴다(넷째 출구 질문).' },
        wrap: {
          teacher: '"우리 반 대화방에 붙일 규칙 한 줄, 누구든 성별로 묶어 깎아내리지 않는 말로 무엇이 좋을까요?" 콜라주 판에는 그림만 붙고 규칙 글은 출구 질문과 활동지에 쓴다고 알려 준다. "어기면 강퇴" 같은 벌만 있는 규칙이 나오면 "어긴 친구가 다시 함께하려면 무엇을 하면 될까요?"라고 되묻고 회복 방법을 함께 정한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 온라인 언어 규칙 포스터 그림을 꾸미고 스스로 점검해요.', target: { selfCheck: ['포스터에 넣을 언어 규칙을 정했다', '어느 성별도 깎아내리는 그림이 없다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '우리 반 온라인 언어 규칙으로 가장 알맞은 것은?', options: ['유행어는 써도 된다', '누구든 성별로 묶어 깎아내리는 말은 쓰지 않는다', '불편하면 대화방을 나가면 된다'], answer: 1, difficulty: 0.15, explain: '누구든 성별로 묶어 깎아내리지 않는 규칙이 알맞아요.' },
            { type: 'short', prompt: '우리 반 온라인 언어 규칙을 한 줄로 써요.' },
            { type: 'short', prompt: '규칙을 어겼을 때 관계를 되돌리는 방법을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 온라인 언어 규칙',
          items: [
            { type: 'short', prompt: '포스터에 넣을 규칙을 써요.' },
            { type: 'short', prompt: '규칙을 어겼을 때 회복하는 방법을 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 규칙 글은 출구 질문(고르기·쓰기)과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
      M('wrap.self-audit', {
        title: '내 언어 습관 점검표 만들기', method: '일주일 언어 습관 점검표 항목 정하기', tool: 'timer', minutes: 7,
        levels: { easy: '점검표에 넣을 항목 3개에 표시한다.', base: '점검표에 넣을 항목 5개에 표시한다.', challenge: '넷째 출구 질문에서 바꾼 말 목록(비하 말 → 대신 쓸 말)을 덧붙인다.' },
        wrap: {
          teacher: '"다음 일주일 동안 내 말과 댓글을 점검할 표에 어떤 항목을 넣을까요?" 지금까지 쓴 말을 고백하게 하지 않고, 앞으로 점검할 항목만 정한다고 먼저 밝힌다. "나는 원래 그런 말 안 써서 필요 없다"는 학생에게 "좋아요나 웃음 이모티콘도 점검할 거리가 될까요?"라고 되묻는다. 점검표는 활동지에 옮겨 일주일 뒤 스스로 본다.',
          exitTicket: [
            IT(SELF('내 언어 습관 점검표에 넣은 항목에 스스로 표시해요.', '일주일 언어 습관 점검표', ['성별로 묶어 깎아내리는 말을 쓰지 않기', '"○○충" 같은 비하 유행어를 쓰지 않기', '비하 댓글에 좋아요·웃음을 누르지 않기', '불편한 말을 보면 신고하거나 멈추자고 말하기', '말하기 전에 "누가 불편할까?" 생각하기']),
              { prompt: '점검표에 넣은 항목 3개에 표시해요.', target: { selfCheck: ['성별로 묶어 깎아내리는 말을 쓰지 않기', '"○○충" 같은 비하 유행어를 쓰지 않기', '비하 댓글에 좋아요·웃음을 누르지 않기'] } }),
            { type: 'choice', prompt: '비하 댓글에 좋아요만 눌렀다면?', options: ['댓글을 쓰지 않았으니 상관없다', '좋아요도 그 댓글을 퍼뜨리는 데 힘을 보탠다', '좋아요는 아무 뜻이 없다'], answer: 1, difficulty: 0.15, explain: '좋아요는 비하 댓글을 더 위로 올려 더 많은 사람이 보게 해요.' },
            { type: 'short', prompt: '이번 주 가장 지키기 어려울 것 같은 항목과 그 까닭을 써요.' },
            { type: 'short', prompt: '바꾼 말 목록을 써요(비하 유행어 → 대신 쓸 말, 실제 비하 말은 ○○로).' },
          ],
        },
        worksheet: {
          title: '일주일 언어 습관 점검표',
          items: [
            { type: 'check', prompt: '일주일 동안 지킨 것에 표시해요(일주일 뒤에 스스로 봐요).', options: ['성별로 묶는 말 쓰지 않기', '비하 유행어 쓰지 않기', '비하 댓글에 좋아요 누르지 않기', '불편한 말에 멈추자고 말하기'] },
            { type: 'short', prompt: '대신 쓸 말 하나를 써요.' },
          ],
        },
        notes: '지금까지 쓴 말을 고백하게 하지 않고 앞으로의 점검 항목만 정한다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 21-g9-structure-law.js ====
  // ==== 9학년 · 사회 속 성차별 구조와 양성평등 제도 (gender.m.g9-structure-law) ====
  {
    const M = MK('g9-structure-law', [9]);
    const LADDER = [['사원', 50], ['대리', 44], ['과장', 32], ['부장', 18], ['임원', 8]];
    const CAREER = [
      { id: 'e1', text: '20대, 회사에 들어가 일을 배운다' }, { id: 'e2', text: '승진 시험을 준비한다' },
      { id: 'e3', text: '아이가 태어나 휴가를 낸다' }, { id: 'e4', text: '돌봄을 나눌 사람이 없어 일을 그만둔다' },
      { id: 'e5', text: '다시 일하려 하지만 경력이 끊겨 어렵다' }, { id: 'e6', text: '40대, 짧은 시간제 일자리로 돌아온다' },
    ];
    const D1 = { text: '나는 가상 회사 대표다. 직원들이 "아이·가족 돌봄 때문에 일을 그만두는 동료가 많아요. 돌봄 휴가가 있으면 좋겠어요"라고 건의한다.', ask: '대표로서 어떻게 할까?', motif: 'house', choices: [
      { id: 'adopt', text: '모든 직원이 쓸 수 있는 돌봄 휴가를 도입한다', result: '휴가를 쓰는 직원이 생기자 그 사람 일을 누가 할지 문제가 생긴다.', impact: [{ who: '돌봄을 맡은 직원', text: '일을 그만두지 않아도 된다', tone: 1 }, { who: '팀', text: '업무 조정이 필요하다', tone: 0 }], end: '휴가를 도입했지만 업무 조정이 남았어요.',
        next: { text: '팀장들이 "사람이 빠지면 일이 밀려요"라고 걱정한다.', ask: '어떻게 할까?', choices: [
          { id: 'plan', text: '업무를 나누고 대체 인력 계획을 함께 세운다', result: '일이 나뉘어 밀리지 않고, 다른 직원도 필요할 때 휴가를 쓸 수 있다고 느낀다.', impact: [{ who: '모든 직원', text: '오래 일할 수 있다고 느낀다', tone: 1 }], end: '평등과 운영을 함께 챙겼어요.',
            next: { text: '그런데 한 성별의 직원만 휴가를 쓰고, 다른 직원은 "눈치 보여서 못 쓴다"고 한다.', choices: [
              { id: 'everyone', text: '누구나 눈치 보지 않고 쓰도록 안내하고 관리자부터 써 본다', result: '휴가를 쓰는 직원이 고르게 늘고 돌봄이 한쪽에 몰리지 않는다.', impact: [{ who: '모든 직원', text: '돌봄을 함께 나눈다', tone: 1 }], ending: '제도가 실제로 쓰이도록 문화까지 바꿨어요.' },
              { id: 'leaveIt', text: '쓰고 싶은 사람만 쓰면 된다며 그대로 둔다', result: '돌봄 부담이 여전히 한쪽에 몰린다.', impact: [{ who: '돌봄을 맡은 직원', text: '승진에서 밀린다', tone: -1 }], why: '제도가 있어도 쓰기 어려운 분위기면 구조는 그대로예요.' }] } },
          { id: 'cancel', text: '일이 밀리니 휴가를 다시 없앤다', result: '돌봄을 맡은 직원이 회사를 떠난다.', impact: [{ who: '회사', text: '경력 있는 직원을 잃는다', tone: -1 }], why: '제도를 없애면 운영도 평등도 함께 잃을 수 있어요. 업무를 나누는 방법을 찾아요.' }] } },
      { id: 'no', text: '비용이 드니 도입하지 않는다', result: '돌봄을 맡은 직원이 하나둘 회사를 떠난다.', impact: [{ who: '돌봄을 맡은 직원', text: '일을 그만둔다', tone: -1 }, { who: '회사', text: '새 직원을 뽑고 가르치는 데 시간이 든다', tone: -1 }], why: '도입하지 않아도 비용이 생겨요. 경력 있는 사람을 잃는 것도 손해예요.', end: '직원이 떠나 회사도 손해를 봤어요.',
        next: { text: '남은 직원들이 "우리도 언젠가 그만둬야 하나" 하고 불안해한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'reconsider', text: '직원 의견을 다시 듣고 도입을 검토한다', result: '직원들이 회사가 바뀔 수 있다고 느낀다.', impact: [{ who: '직원들', text: '불안이 줄어든다', tone: 1 }], end: '다시 검토하기로 했어요.',
            next: { text: '검토 모임에서 모든 직원에게 같은 기준을 쓰자는 의견이 나온다.', choices: [
              { id: 'same', text: '모든 직원이 같은 기준으로 쓰는 휴가를 만든다', result: '떠나는 직원이 줄어든다.', impact: [{ who: '모든 직원', text: '오래 일할 수 있다', tone: 1 }], ending: '늦었지만 모두에게 같은 제도를 만들었어요.' },
              { id: 'some', text: '한 성별의 직원에게만 휴가를 준다', result: '다른 직원은 돌봄을 나누기 어렵다.', impact: [{ who: '돌봄', text: '여전히 한쪽에 몰린다', tone: -1 }], why: '한 성별에게만 주면 돌봄은 그 성별의 일이라는 고정관념이 굳어요.' }] } },
          { id: 'blameP', text: '"개인이 알아서 해결할 일"이라고 말한다', result: '불안해한 직원들이 다른 회사를 알아본다.', impact: [{ who: '회사', text: '직원을 더 잃는다', tone: -1 }], why: '여러 사람이 같은 이유로 떠난다면 개인이 아니라 구조의 문제예요.' }] } },
      { id: 'part', text: '일부 부서에서만 시험 삼아 도입해 보고 넓힌다', result: '시험 부서에서 떠나는 직원이 줄고, 다른 부서도 원한다.', impact: [{ who: '시험 부서 직원', text: '일을 이어 간다', tone: 1 }], ending: '작게 시작해 효과를 보고 넓히기로 했어요.' }] };
    const R1 = [{ id: 'r1', text: '여러 사람이 같은 이유로 떠난다면 구조의 문제다' }, { id: 'r2', text: '평등한 제도와 업무 운영을 함께 계획할 수 있다' },
      { id: 'r3', text: '돌봄은 개인이 알아서 할 일이다', why: '돌봄이 한쪽에 몰려 경력이 끊긴다면 구조가 바뀌어야 해요.' }, { id: 'r4', text: '한 성별에게만 휴가를 주면 공평하다', why: '한 성별에게만 주면 돌봄 고정관념이 굳어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '도입하고 업무를 나눈 길에서는 직원이 떠나지 않았다' }, { id: 'r6', text: '도입하지 않은 길에서는 회사도 경력자를 잃었다' }], ok: ['r5', 'r6'] };
    const AREAS = ['가정', '학교', '일터', '미디어'];
    const CAUSE = [
      { id: 'a1', text: '집안일과 돌봄을 한 사람이 거의 맡는다', to: '가정' }, { id: 'a2', text: '"딸이니까·아들이니까" 다른 기대를 한다', to: '가정' },
      { id: 'a3', text: '반장·서기 역할을 성별로 나눈다', to: '학교' }, { id: 'a4', text: '진로 상담에서 성별에 맞는 직업을 권한다', to: '학교' },
      { id: 'a5', text: '돌봄 때문에 일을 그만두면 다시 돌아오기 어렵다', to: '일터' }, { id: 'a6', text: '위로 갈수록 한 성별이 드물다', to: '일터' },
      { id: 'a7', text: '광고가 요리는 한 성별, 운전은 다른 성별로 그린다', to: '미디어' }, { id: 'a8', text: '뉴스 전문가 자리에 한 성별만 나온다', to: '미디어' },
      { id: 'z1', text: '차별은 노력하지 않은 사람 탓이다' },
    ];
    const CARE = [{ id: 'care', text: '방과후 돌봄 교실', price: 40000 }, { id: 'dish', text: '식기세척기 한 달 대여', price: 30000 }, { id: 'deliv', text: '장보기 배달 두 번', price: 20000 }, { id: 'cook', text: '가족 함께 요리 교실', price: 30000 }, { id: 'game', text: '한 사람만 쓰는 게임 아이템', price: 30000 }];

    ALL.push(
      // ---- 도입 ----
      M('intro.ladder-chart', {
        title: '가상 회사 직급별 성비 그래프', method: '가상 회사 직급별 성비 막대에서 위로 갈수록 달라지는 모양 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '직급 3단계(사원·과장·임원) 막대만 값이 보이게 읽는다.', base: '직급 5단계 막대에서 비율이 가장 낮은 직급과 위로 갈수록 바뀌는 모양을 읽는다.', challenge: '그래프만으로 원인을 단정할 수 없는 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"가상 회사에서 사원은 절반이 여성인데, 위로 갈수록 어떻게 바뀌나요?" 막대그래프를 띄우고 시연 단추로 \'임원\'을 고르는 모습을 보인다. "능력이 부족해서 그런 것"이라는 말이 나오면 "사원 때는 절반이었어요. 그 사이에 무슨 일이 있었을지, 그래프만으로 알 수 있을까요?"라고 되묻는다. 이 자료는 수업용 가상 회사 자료이고, 오늘은 원인을 개인 탓으로 단정하지 않고 구조를 따져 본다고 밝힌다.',
          student: '가상 회사의 직급별 여성 직원 비율 그래프에서 위로 갈수록 달라지는 모양을 찾고, 그 까닭을 추측해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 회사 — 직급별 여성 직원 비율', unit: '%', xLabel: '직급', yLabel: '비율', max: 60, data: LADDER, question: '비율이 가장 낮은 직급은?', choices: LADDER.map((r) => r[0]) }, sequence: [{ pick: 4 }] },
          art: { draw: 'a paper-cut ladder of office floors with paper figures, fewer figures on each higher rung and a faint paper glass ceiling at the top', banner: '위로 갈수록 무엇이 바뀔까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 모두 가상이다. 특정 성별의 능력 문제로 흐르지 않게 구조(돌봄·승진 기준·문화)로 질문을 돌린다. ' + SAFE_NOTE,
      }),
      M('intro.career-story', {
        title: '가상 인물의 경력 단절 이야기', method: '가상 인물의 20대~40대 장면을 차례로 놓고 구조적 장애물 찾기', tool: 'timeline', minutes: 7,
        levels: { easy: '장면 카드 4장(입사·출산 휴가·그만둠·시간제 복귀) 차례를 함께 놓는다.', base: '장면 카드 6장 차례를 놓는 시연을 보고, 일이 끊기게 만든 장면(구조적 장애물)을 짚는다.', challenge: '장애물마다 필요한 제도(돌봄 휴가·유연근무·복귀 지원)를 짝에게 추측해 말한다.' },
        intro: {
          teacher: '"가상 인물 서윤의 20대부터 40대까지, 어느 장면에서 일이 끊겼을까요?" 시연 단추로 장면 카드 6장이 차례대로 놓이는 모습을 보인다. "서윤이 그만두기로 선택한 것"이라는 말이 나오면 "돌봄을 나눌 사람도, 쓸 수 있는 휴가도 없었다면 그것은 자유로운 선택이었을까요?"라고 되묻는다. 경력 단절은 누구에게나 생길 수 있고, 돌봄이 한 사람에게 몰리는 구조가 문제라는 점을 짚는다.',
          student: '가상 인물 서윤의 20대~40대 장면을 차례로 놓고, 일이 끊기게 만든 구조적 장애물을 찾아요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['20대', '40대'], slots: CAREER.length, cards: CAREER }, sequence: [{ order: CAREER.map((c) => c.id) }] },
          art: { draw: 'a paper-cut winding road from a young paper figure entering an office to the same figure years later, with a broken paper bridge in the middle', banner: '어디서 길이 끊겼을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가상 인물의 성별을 정하지 않고 돌봄이 한 사람에게 몰리는 구조로 다룬다. 학생 가족의 일을 묻지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.law-purpose', {
        title: '양성평등기본법 목적 문장 해석', method: '법 목적을 쉬운 말로 푼 카드에서 핵심어를 찾고 생활 사례와 잇기', tool: 'wordcards', minutes: 16,
        levels: { easy: '핵심어 2개(차별 해소·평등한 참여)를 함정 카드 둘과 섞인 판에서 고르고, 놓으면 바로 맞는지 알려 준다.', base: '핵심어 4개를 고르고, 핵심어 4개를 생활 사례와 짝짓고, 목적 문장 빈칸을 채운다.', challenge: '셋째 문항에서 핵심어를 학교에 적용되는 사례와 짝짓는다(함정 카드가 섞인다).' },
        activity: {
          title: '법 목적 문장 해석', tool: 'wordcards',
          teacher: '"\'성별 때문에 차별받지 않고, 사회 모든 영역에 평등하게 참여하고 대우받는다\' — 이 문장에서 가장 중요한 낱말은 무엇일까요?" 양성평등기본법의 목적을 쉬운 말로 옮긴 카드를 함께 읽고 핵심어를 고르게 한다. "법이 있으니 이제 차별은 없다"는 학생에게 "법이 \'없애자\'고 목표를 세웠다는 것은 지금 무엇이 남아 있다는 뜻일까요?"라고 되묻는다. 법은 한 성별을 앞세우는 것이 아니라 모든 사람의 평등을 목표로 한다는 점을 짚는다.',
          task: '양성평등기본법의 목적을 쉬운 말로 푼 카드에서 핵심어를 고르고, 핵심어를 생활 사례와 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(PB('목적 문장에서 핵심어 카드만 골라 담으세요.', '양성평등기본법 목적의 핵심어', [
              { id: 'p1', text: '차별 해소', ok: true }, { id: 'p2', text: '평등한 참여', ok: true }, { id: 'p3', text: '평등한 대우', ok: true }, { id: 'p4', text: '권리 보장', ok: true },
              { id: 'p5', text: '성별 역할 지키기' }, { id: 'p6', text: '한 성별 우대' }, { id: 'p7', text: '개인 노력 경쟁' }], { title: '쉬운 말로 푼 목적' }),
              PB('목적 문장에서 핵심어 카드 2장을 골라 담으세요.', '양성평등기본법 목적의 핵심어', [
                { id: 'p1', text: '차별 해소', ok: true }, { id: 'p2', text: '평등한 참여', ok: true }, { id: 'p5', text: '성별 역할 지키기' }, { id: 'p6', text: '한 성별 우대' }], { title: '쉬운 말로 푼 목적' })),
            IT(MB('핵심어마다 알맞은 생활 사례를 이으세요.', [['차별 해소', '같은 일에 성별 때문에 다른 대우를 받지 않는다'], ['평등한 참여', '회의·위원회에 여러 성별이 함께 참여한다'], ['일과 돌봄의 균형', '누구나 눈치 보지 않고 돌봄 휴가를 쓴다'], ['고정관념 바꾸기', '광고·교과서 속 성 역할 고정관념을 고친다']], ['돌봄은 한 성별이 맡는다'], { title: '핵심어와 생활' }),
              MB('핵심어 2개에 알맞은 생활 사례를 이으세요.', [['차별 해소', '같은 일에 성별 때문에 다른 대우를 받지 않는다'], ['평등한 참여', '회의·위원회에 여러 성별이 함께 참여한다']], [], { title: '핵심어와 생활' })),
            IT(FB('쉬운 말로 푼 목적 문장의 빈칸을 채우세요.', [['누구나 성별 때문에 ___ 받지 않는다.', '차별'], ['사회 모든 영역에 ___ 참여하고 대우받는다.', '평등하게'], ['학교에서도 ___ 교육을 한다.', '양성평등']], ['경쟁', '따로따로'], { title: '목적 문장 채우기' }),
              FB('목적 문장의 빈칸 두 개를 채우세요.', [['누구나 성별 때문에 ___ 받지 않는다.', '차별'], ['사회 모든 영역에 ___ 참여한다.', '평등하게']], ['경쟁'], { title: '목적 문장 채우기' }),
              MB('핵심어마다 우리 학교에 적용되는 사례를 이으세요.', [['차별 해소', '같은 잘못에 성별과 상관없이 같은 기준을 쓴다'], ['평등한 참여', '학생회 역할을 성별이 아니라 희망으로 정한다'], ['고정관념 바꾸기', '동아리 안내에 "○○부는 남학생·여학생"을 쓰지 않는다']], ['체육대회 짐은 늘 한 성별이 나른다'], { title: '우리 학교에 적용하기' }),
              { conclude: '양성평등기본법은 누구나 성별 때문에 차별받지 않고 사회 모든 영역에 평등하게 참여하고 대우받도록 하는 것을 목표로 해요. 학교도 그 자리 가운데 하나예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '양성평등기본법의 목적을 내 말로 한 문장 써요.' }] },
        notes: '법 목적은 쉬운 말로 옮긴 것이며 원문 확인이 필요하다(사람 확인 목록). 조문 원문 인용·처벌 내용은 다루지 않는다. ' + SAFE_NOTE,
      }),
      M('act.policy-dilemma', {
        title: '가상 회사 제도 도입 갈림길', method: '가상 회사 대표가 되어 돌봄 휴가 도입을 정하는 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길과 견주는 근거까지 고르고, 셋째 문항에서 결과를 이해관계자(직원·팀·회사)별로 고른다.' },
        activity: {
          title: '가상 회사 제도 도입 갈림길', tool: 'dilemma',
          teacher: '"대표라면 비용과 직원의 삶 가운데 무엇을 먼저 볼까요? 둘을 함께 볼 수는 없을까요?" 학생마다 한 길을 끝까지 간 뒤 되돌아가 다른 길과 견주게 한다. "돌봄은 개인이 해결할 문제"라는 학생에게 "여러 직원이 같은 이유로 떠난다면 그것은 한 사람의 문제일까요, 회사 구조의 문제일까요?"라고 되묻는다. 한 성별에게만 휴가를 주는 길은 돌봄 고정관념을 굳힌다는 점, 제도는 실제로 쓸 수 있는 분위기까지 만들어야 한다는 점을 끝 장면에서 정리한다. 결과 장면의 수치는 쓰지 않는다.',
          task: '가상 회사 대표가 되어 돌봄 휴가 도입을 정하고 결과를 따라간 뒤, 평등과 운영을 함께 고려한 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '돌봄 휴가 건의를 받았어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '돌봄 휴가 건의를 받았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '가상 회사의 돌봄 휴가', D1, [['adopt', 'plan', 'everyone'], ['no', 'reconsider', 'same'], ['part']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '승진 기준을 정하는 장면을 따라가세요.', toolOptions: { title: '승진 기준', scene: { text: '가상 회사가 승진 기준을 정한다. "밤늦게까지 남은 시간"을 기준으로 하자는 의견이 나온다.', ask: '어떤 기준이 공정할까?', motif: 'house', choices: [
              { id: 'hours', text: '회사에 남은 시간으로 정한다', result: '돌봄을 맡은 직원은 늘 뒤처진다.', impact: [{ who: '돌봄을 맡은 직원', text: '승진에서 밀린다', tone: -1 }], why: '남은 시간 기준은 돌봄을 맡은 사람에게 불리한 구조예요.' },
              { id: 'result', text: '맡은 일의 성과와 협력으로 정한다', result: '돌봄을 맡아도 성과로 평가받는다.', impact: [{ who: '모든 직원', text: '같은 기준으로 평가받는다', tone: 1 }], ending: '모두에게 같은 기회가 열리는 기준을 골랐어요.' }] }, reasons: [{ id: 'q1', text: '겉으로 같은 기준도 한쪽에 불리하면 고쳐야 한다' }, { id: 'q2', text: '오래 남는 사람이 더 열심히 하는 사람이다', why: '오래 남을 수 없는 까닭이 돌봄이라면 구조의 문제예요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['result']], reasons: ['q1'] } },
              { prompt: '승진 기준 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '돌봄 휴가 도입 뒤 결과를 이해관계자별로 정리하는 장면을 따라가세요.', toolOptions: { title: '누구에게 어떤 영향?', scene: { text: '돌봄 휴가를 도입하고 1년이 지났다. 회의에서 결과를 정리한다.', ask: '결과 정리로 가장 알맞은 것은?', motif: 'house', choices: [
              { id: 'all', text: '직원·팀·회사가 각각 얻은 것과 남은 과제를 함께 적는다', result: '좋은 점과 고칠 점이 모두 보인다.', impact: [{ who: '회사', text: '제도를 더 낫게 고칠 수 있다', tone: 1 }], ending: '이해관계자별로 고르게 정리했어요.' },
              { id: 'cost', text: '든 비용만 적는다', result: '직원이 떠나지 않은 효과가 빠진다.', impact: [{ who: '회사', text: '효과를 놓친다', tone: -1 }], why: '한쪽만 적으면 제도의 효과를 바르게 판단하기 어려워요.' }] }, reasons: [{ id: 'k1', text: '결과는 이해관계자별로 나눠 보아야 공정하게 판단할 수 있다' }, { id: 'k2', text: '숫자로 적을 수 없는 것은 결과가 아니다', why: '떠나지 않은 직원의 경력처럼 숫자로 적기 어려운 결과도 있어요.' }], compare: false },
              target: { path: [['all']], reasons: ['k1'] } },
              null, null,
              { conclude: '성차별 구조는 돌봄·승진 기준·문화가 한쪽에 불리할 때 생겨요. 평등한 제도는 운영 계획과 함께 세우고, 누구나 실제로 쓸 수 있어야 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"여러 직원이 돌봄 때문에 회사를 떠난다"를 바르게 본 것은?', options: ['개인이 노력하지 않은 탓이다', '돌봄이 한쪽에 몰리는 구조의 문제일 수 있다', '돌봄은 원래 한 성별의 일이다'], answer: '돌봄이 한쪽에 몰리는 구조의 문제일 수 있다' }] },
        notes: '가상 회사 장면이며 실제 통계·기업은 다루지 않는다. ' + SAFE_NOTE,
      }),
      M('act.proposal', {
        title: '학교·지역 평등 제안서 쓰기', method: '바꿀 성차별 구조 하나를 골라 제안서 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 틀을 채워 문제와 제안 두 칸만 쓰고(근거·기대 효과 문항은 한 문장 틀) 기준 2개를 점검한다.', base: '제안서 네 칸(문제·근거·제안·기대 효과)을 문항마다 쓰고 기준표로 점검한다.', challenge: '넷째 문항에서 예상되는 반대 의견 하나에 답하는 문장을 덧붙인다.' },
        activity: {
          title: '학교·지역 평등 제안서', tool: 'rubric-writing',
          teacher: '"우리 학교나 동네에서 성별에 따라 기회가 달라지는 자리 하나를 고른다면 어디일까요?" 오늘 본 구조(역할 나누기·동아리 안내·돌봄 부담·미디어)에서 하나를 고르게 한다. "그건 원래 그런 거라 못 바꾼다"는 학생에게 "원래 그렇다는 것이 바로 구조예요. 누가 무엇을 바꾸면 달라질까요?"라고 되묻는다. 특정 사람이나 학급을 비난하지 않고, 근거는 관찰한 사실이나 가상 자료로 쓰게 한다.',
          task: '학교나 동네에서 바꿀 성차별 구조 하나를 골라 문제·근거·제안·기대 효과를 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '문제: 바꾸고 싶은 성차별 구조 하나를 두 문장으로 쓰세요.', toolOptions: { topic: '학교나 동네에서 성별에 따라 역할·기회가 달라지는 구조 하나를 골라, 무엇이 문제인지 두 문장으로 쓰세요(실제 사람 이름 없이).', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '제안서 ① 문제' }, target: { selfCheck: ['구조(되풀이되는 방식)를 문제로 썼다', '특정 사람을 비난하지 않았다', '실제 사람 이름을 쓰지 않았다'] } },
              { prompt: '문장 틀을 채워 문제를 쓰세요.', toolOptions: { minChars: 15, minSentences: 1, starter: '우리 학교에서는 ___ 을 성별로 나눠 정하는 일이 많다.' }, target: { selfCheck: ['구조를 문제로 썼다', '특정 사람을 비난하지 않았다'] } }),
            IT({ prompt: '근거: 그것이 문제라는 근거를 두 문장으로 쓰세요.', toolOptions: { topic: '앞에서 고른 문제가 왜 문제인지, 관찰한 사실이나 오늘 본 가상 자료를 근거로 두 문장 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '제안서 ② 근거' }, target: { selfCheck: ['관찰한 사실이나 가상 자료를 근거로 썼다', '근거와 문제가 이어진다', '고정관념을 사실처럼 쓰지 않았다'] } },
              { prompt: '근거를 한 문장으로 쓰세요.', toolOptions: { topic: '그것이 문제라는 근거를 한 문장으로 쓰세요.', minChars: 12, minSentences: 1, maxSentences: 2, starter: '이렇게 하면 ___ 학생은 기회를 잃는다.' }, target: { selfCheck: ['근거와 문제가 이어진다'] } }),
            IT({ prompt: '제안: 누가 무엇을 바꾸면 되는지 두세 문장으로 쓰세요.', toolOptions: { topic: '그 구조를 바꾸기 위해 누가(학생회·담임 선생님·학교 등) 무엇을 하면 좋을지 두세 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 3, title: '제안서 ③ 제안' }, target: { selfCheck: ['누가 할지 썼다', '무엇을 할지 구체적으로 썼다', '모든 성별에게 같은 기준을 제안했다'] } },
              { prompt: '문장 틀을 채워 제안을 쓰세요.', toolOptions: { minChars: 15, minSentences: 1, starter: '___ 은 역할을 성별이 아니라 ___ 로 정하자.' }, target: { selfCheck: ['무엇을 할지 구체적으로 썼다', '모든 성별에게 같은 기준을 제안했다'] } }),
            IT({ prompt: '기대 효과: 제안이 이루어지면 무엇이 달라지는지 두 문장으로 쓰세요.', toolOptions: { topic: '제안이 이루어지면 누구에게 어떤 변화가 생기는지 두 문장으로 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 3, title: '제안서 ④ 기대 효과' }, target: { selfCheck: ['누구에게 생길 변화인지 썼다', '모두에게 좋은 점을 썼다', '과장하지 않았다'] } },
              { prompt: '기대 효과를 한 문장으로 쓰세요.', toolOptions: { topic: '제안이 이루어지면 달라질 점을 한 문장으로 쓰세요.', minChars: 12, minSentences: 1, maxSentences: 2 }, target: { selfCheck: ['모두에게 좋은 점을 썼다'] } },
              { prompt: '기대 효과를 쓰고, 예상되는 반대 의견 하나에 답하는 문장을 덧붙이세요.', toolOptions: { topic: '제안이 이루어지면 달라질 점 두 문장과, "원래 그렇게 해 왔는데 왜 바꿔?" 같은 반대 의견에 답하는 문장 하나를 써서 모두 세 문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 4, title: '기대 효과와 반대 의견' }, target: { selfCheck: ['모두에게 좋은 점을 썼다', '반대 의견에 근거로 답했다', '상대를 비난하지 않았다'] } },
              { conclude: '좋은 제안서는 개인 탓이 아니라 구조를 문제로 짚고, 근거를 대며, 누가 무엇을 바꿀지와 모두에게 생길 변화를 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '성차별 구조를 바꾸는 제안서에 꼭 들어갈 것은?', options: ['문제·근거·제안·기대 효과', '특정 성별을 탓하는 말', '근거 없는 소문'], answer: '문제·근거·제안·기대 효과' }, { type: 'table', prompt: '내 제안서를 한 줄씩 정리해요.', columns: ['칸', '내용'], cells: [['문제', ''], ['근거', ''], ['제안', ''], ['기대 효과', '']] }] },
        notes: '특정 학생·교사·학급을 비난하는 제안이 되지 않게 한다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.structure-map', {
        title: '구조 원인 마인드맵 정리', method: '성차별 구조 원인을 가정·학교·일터·미디어 가지로 정리', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(가정·일터)에 카드 4장을 나눈다.', base: '가지 4개(가정·학교·일터·미디어)에 카드 8장을 나누고 함정 카드는 남긴다.', challenge: '셋째 출구 질문에서 가지 사이 연결(예: 미디어의 고정관념 → 학교의 진로 권유)을 한 줄로 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 원인들은 어디에서 생기나요? 집·학교·일터·미디어로 나눠 볼까요?" 마인드맵에 원인 카드를 나누게 한다. \'차별은 노력하지 않은 사람 탓이다\' 카드를 가지에 붙인 학생에게 "이 카드는 원인일까요, 원인을 가리는 생각일까요?"라고 되묻는다. 가지들이 서로 이어져 있어 한 곳만 바꾸면 끝나지 않는다는 점을 짚는다.',
          exitTicket: [
            IT(X('mindmap', SB('원인 카드를 가정·학교·일터·미디어 가지에 나누세요(함정 카드는 남겨요).', AREAS, CAUSE, { topic: '성차별 구조' }), { difficulty: 0.2 }),
              SB('원인 카드를 가정·일터 가지에 나누세요.', ['가정', '일터'], pickCards(CAUSE, ['a1', 'a2', 'a5', 'a6']), { topic: '성차별 구조' })),
            { type: 'choice', prompt: '"법이 있으니 차별은 없다"에 대한 바른 생각은?', options: ['맞다, 법이 있으면 차별은 사라진다', '법은 목표를 세운 것이고 가정·학교·일터·미디어의 구조가 함께 바뀌어야 한다', '차별은 개인의 노력 부족 때문이다'], answer: 1, difficulty: 0.2, explain: '법이 있어도 구조와 문화가 바뀌어야 차별이 줄어요.' },
            { type: 'short', prompt: '가지 두 개를 골라 서로 어떻게 이어지는지 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '성차별 구조 마인드맵',
          items: [
            { type: 'table', prompt: '가지마다 원인 하나씩을 써요.', columns: ['가지', '원인'], cells: [['가정', ''], ['학교', ''], ['일터', ''], ['미디어', '']], answer: '(예) 돌봄이 한 사람에게 몰림, 역할을 성별로 나눔, 경력 단절, 성 역할 광고' },
            { type: 'short', prompt: '내가 바꿀 수 있는 가지 하나와 할 일을 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.equal-budget', {
        title: '평등한 돌봄 예산 나누기', method: '가상 가족의 돌봄 예산을 한 사람에게 몰지 않게 나누기', tool: 'economy', minutes: 7,
        levels: { easy: '물건 3개(돌봄 교실·식기세척기 대여·게임 아이템)에서 돌봄을 나누는 것을 고른다.', base: '물건 5개에서 예산 12만 원 안에 돌봄 교실을 꼭 넣고, 돌봄을 나누는 데 7만 원 이상 쓴다.', challenge: '셋째 출구 질문에서 나눈 기준을 한 줄로 설명한다.' },
        wrap: {
          teacher: '"가상 가족은 보호자 한 사람이 집안일과 돌봄을 거의 다 맡고 있어요. 한 달 돌봄 예산 12만 원으로 무엇을 고르면 그 부담이 나뉠까요?" 예산 막대 안에서 고르게 한다. 교구는 돈만 세기 때문에 시간 나누기는 활동지의 표로 함께 정한다고 알려 준다. "도와줄 사람을 사면 끝"이라는 학생에게 "돈으로 살 수 없는 몫, 가족이 함께 맡을 일은 무엇일까요?"라고 되묻는다. 값은 수업용 가상 값이다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'economy', options: { mode: 'budget', budget: 120000, items: CARE, ask: '가상 가족의 한 달 돌봄 예산 12만 원' }, prompt: '돌봄이 한 사람에게 몰리지 않게 도울 것을 고르세요. 돌봄 교실은 꼭 넣고, 7만 원 이상 써요.', target: { budget: { must: ['care'], not: ['game'], min: 70000 } }, difficulty: 0.2 },
              { prompt: '돌봄을 나누는 데 도움이 되는 것을 고르세요(돌봄 교실은 꼭 넣어요).', toolOptions: { items: CARE.filter((c) => ['care', 'dish', 'game'].includes(c.id)) }, target: { budget: { must: ['care'], not: ['game'] } } }),
            { type: 'choice', prompt: '돌봄을 평등하게 나누는 방법으로 가장 알맞은 것은?', options: ['보호자 한 사람이 계속 맡는다', '가족이 일을 나눠 맡고 필요한 서비스를 함께 쓴다', '아이가 크면 저절로 해결된다'], answer: 1, difficulty: 0.15, explain: '돌봄은 가족이 함께 나누고 필요한 지원을 쓰는 것이 평등해요.' },
            { type: 'short', prompt: '내가 예산을 나눈 기준을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '평등한 돌봄 나누기',
          items: [
            { type: 'table', prompt: '가상 가족의 일주일 돌봄 시간을 나눠 써요.', columns: ['가족', '맡을 일'], cells: [['보호자 1', ''], ['보호자 2', ''], ['중학생', ''], ['초등학생', '']], answer: '(예) 등원 돕기, 저녁 준비, 설거지, 장난감 정리 — 한 사람에게 몰리지 않게' },
            { type: 'short', prompt: '돈으로 살 수 없어 가족이 함께 맡을 일을 하나 써요.' },
          ],
        },
        notes: '계획 글의 \'시간·돈 예산\'에서 경제 교구는 돈(원)만 세어, 시간 나누기는 활동지 표로 옮겼다. 값은 가상이고 학생 가족의 사정을 묻지 않는다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 22-g9-career-free.js ====
  // ==== 9학년 · 고정관념 없이 내 진로 설계하기 (gender.m.g9-career-free) ====
  {
    const M = MK('g9-career-free', [9]);
    const JOBS = ['간호사', '비행기 조종사', '요리사', '프로그래머', '유치원 교사', '건축가'];
    const ADVICE = [
      { id: 'a1', text: '"여자는 안정적인 직업이 제일이야"', to: '고정관념에 기댄 조언' }, { id: 'a2', text: '"남자가 무슨 유치원 선생님이야"', to: '고정관념에 기댄 조언' },
      { id: 'a3', text: '"공대는 남자들이 많아서 힘들걸"', to: '고정관념에 기댄 조언' }, { id: 'a4', text: '"네가 좋아하는 걸 해 봐"', to: '흥미·적성에 기댄 조언' },
      { id: 'a5', text: '"만들기를 잘하니 그쪽 체험을 해 볼래?"', to: '흥미·적성에 기댄 조언' }, { id: 'a6', text: '"그 직업에 필요한 공부를 같이 찾아보자"', to: '흥미·적성에 기댄 조언' },
      { id: 'a7', text: '"남자는 돈을 많이 벌어야 하니 그쪽은 안 돼"', to: '고정관념에 기댄 조언' },
    ];
    const SLOT2 = ['고정관념에 기댄 조언', '흥미·적성에 기댄 조언'];
    const HARIN = [['만들기', 9], ['탐구하기', 8], ['돕기', 5], ['표현하기', 4], ['정리하기', 6]];
    // 하린의 진로 갈림길(깊이 3) — 어느 진로가 정답인지가 아니라 '내 기준으로 정보를 모아 결정하는 길'이 바른 길
    const D1 = { text: '9학년 하린은 만들기·탐구하기 점수가 높아 공학 계열 고등학교 과정에 관심이 있다. 친척 어른은 "여자애가 무슨 공학이야, 사무직이 편해"라고 한다.', ask: '하린은 어떻게 할까?', motif: 'house', choices: [
      { id: 'give', text: '어른 말이 맞겠지 싶어 관심을 접는다', result: '하린은 좋아하던 만들기 동아리도 그만둔다.', impact: [{ who: '하린', text: '하고 싶은 일을 시도도 못 한다', tone: -1 }], why: '성별 때문에 진로를 접으면 내 흥미와 적성을 확인할 기회를 잃어요.', end: '관심을 접었어요.',
        next: { text: '몇 달 뒤 하린은 공학 계열에 간 선배의 이야기를 듣고 아쉬움이 남는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'reopen', text: '다시 정보를 찾아보고 진로 선생님과 상담한다', result: '하린은 늦었지만 체험 프로그램을 알게 된다.', impact: [{ who: '하린', text: '다시 선택지를 연다', tone: 1 }], end: '다시 정보를 찾았어요.',
            next: { text: '진로 선생님이 공학 체험 캠프를 소개해 준다.', choices: [
              { id: 'camp', text: '체험해 보고 내 흥미가 맞는지 확인한다', result: '하린은 체험 뒤 진로 기준을 스스로 정한다.', impact: [{ who: '하린', text: '근거를 갖고 결정한다', tone: 1 }], ending: '체험으로 내 기준을 확인했어요.' },
              { id: 'skip', text: '또 반대할까 봐 체험도 신청하지 않는다', result: '하린은 확인할 기회를 다시 놓친다.', impact: [{ who: '하린', text: '아쉬움이 남는다', tone: -1 }], why: '반대가 걱정되면 보호자와 함께 신청서를 보며 이야기해요.' }] } },
          { id: 'regret', text: '이미 늦었다며 생각을 멈춘다', result: '아쉬움만 남는다.', impact: [{ who: '하린', text: '선택지를 스스로 닫는다', tone: -1 }], why: '진로는 지금도 다시 살펴볼 수 있어요.' }] } },
      { id: 'info', text: '공학 계열에서 배우는 것과 필요한 준비를 찾아본다', result: '하린은 과정·과목·체험 기회를 알게 된다.', impact: [{ who: '하린', text: '판단할 정보가 생긴다', tone: 1 }], end: '정보를 모았어요.',
        next: { text: '보호자는 "힘들까 봐 걱정돼"라고 말한다.', ask: '보호자와 어떻게 이야기할까?', choices: [
          { id: 'talk', text: '찾은 정보와 내 흥미 점수를 보여 주며 대화한다', result: '보호자가 "체험부터 해 보자"고 한다.', impact: [{ who: '하린과 보호자', text: '함께 계획을 세운다', tone: 1 }], end: '정보로 대화했어요.',
            next: { text: '체험 신청 마감이 다가온다.', choices: [
              { id: 'try', text: '체험을 해 보고 결정 기준(흥미·적성·가치)을 정리한다', result: '하린은 자기 기준으로 다음 학년 계획을 세운다.', impact: [{ who: '하린', text: '스스로 결정한다', tone: 1 }], ending: '정보·대화·체험으로 내 기준을 세웠어요.' },
              { id: 'friends', text: '친한 친구들이 가는 쪽으로 정한다', result: '하린의 흥미와 맞는지 확인하지 못한다.', impact: [{ who: '하린', text: '내 기준이 흐려진다', tone: -1 }], why: '친구와 같은 길이 내 흥미와 같은지는 따로 확인해요.' }] } },
          { id: 'fight', text: '"내 맘이야!" 하고 대화를 끊는다', result: '보호자의 걱정이 커진다.', impact: [{ who: '하린과 보호자', text: '서로 답답해진다', tone: -1 }], why: '걱정에는 정보와 계획으로 답하면 대화가 이어져요.' }] } },
      { id: 'avoid', text: '다른 사람 기대에 맞추려고 진로 생각을 미룬다', result: '하린은 무엇을 원하는지 점점 흐려진다.', impact: [{ who: '하린', text: '결정을 남에게 맡긴다', tone: -1 }], why: '미루기만 하면 다른 사람의 기대가 결정을 대신해요.', ending: '결정을 미뤘어요.' }] };
    const R1 = [{ id: 'r1', text: '진로는 성별이 아니라 흥미·적성·가치로 정한다' }, { id: 'r2', text: '걱정하는 사람과는 정보와 계획으로 대화한다' },
      { id: 'r3', text: '어떤 직업은 특정 성별에 맞는다', why: '직업에 맞는 것은 성별이 아니라 흥미·능력·준비예요.' }, { id: 'r4', text: '주변 기대를 따르는 것이 늘 안전하다', why: '주변 기대는 참고할 수 있지만 결정의 근거는 내 기준이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '정보를 찾은 길에서는 보호자와 함께 계획을 세웠다' }, { id: 'r6', text: '관심을 접은 길에서는 확인할 기회를 잃었다' }], ok: ['r5', 'r6'] };
    const ROAD = { title: '가상 진로 로드맵', grid: [6, 4], places: [
      { name: '중학교 3학년', icon: 'school', at: [0, 3] }, { name: '진로 체험 센터', icon: 'museum', at: [2, 3] }, { name: '진로 상담실', icon: 'office', at: [1, 1] },
      { name: '고등학교', icon: 'school', at: [3, 1] }, { name: '대학·직업 교육', icon: 'library', at: [5, 1] }, { name: '첫 직업', icon: 'factory', at: [5, 3] }] };

    ALL.push(
      // ---- 도입 ----
      M('intro.job-image', {
        title: '직업 이름에 떠오르는 사람', method: '직업 카드에 떠오른 사람 점검하기', tool: 'emotion', minutes: 5,
        levels: { easy: '직업 카드 4장(간호사·조종사·요리사·프로그래머)만 짚으며 떠오른 사람을 마음속으로 정하고 시연 판과 견준다.', base: '직업 카드 6장 모두 떠오른 사람을 마음속으로 정한 뒤, 시연 판에서 모든 칸에 \'누구나\'가 붙는 모습과 견준다.', challenge: '떠오른 모습이 한쪽으로 쏠린 까닭(드라마·광고·주변 사람)을 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"\'비행기 조종사\'라고 들으면 어떤 사람이 떠오르나요? \'유치원 교사\'는요?" 손을 들거나 말하지 않고 마음속으로만 떠올리게 한 뒤, 시연 단추로 직업마다 \'누구나 할 수 있다\' 카드가 붙는 모습을 보인다. "그래도 그 직업엔 남자(여자)가 더 맞는다"는 말이 나오면 "그 직업에 필요한 것은 성별일까요, 흥미·능력·준비일까요?"라고 되묻는다. 떠오른 모습이 한쪽으로 쏠렸다면 그것이 바로 우리가 보고 들은 고정관념이라고 짚는다.',
          student: '직업 카드를 보고 떠오른 사람을 마음속으로 정한 뒤, 그 직업에 정말 필요한 것이 무엇인지 견주어 봐요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: JOBS.map((j, i) => ({ id: `j${i + 1}`, label: j })), cards: [...JOBS.map((_, i) => ({ id: `n${i + 1}`, text: '누구나 할 수 있다' })), { id: 'm', text: '남자만 맞다' }, { id: 'f', text: '여자만 맞다' }] },
            sequence: [{ match: Object.fromEntries(JOBS.map((_, i) => [`j${i + 1}`, `n${i + 1}`])) }] },
          art: { draw: 'a paper-cut row of six job cards with simple tool icons (a plane, a stethoscope, a pot, a laptop, building blocks, a ruler) and diverse paper figures standing behind each card', banner: '누가 떠올랐나요?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '학생이 떠올린 성별을 손들기나 발표로 모으지 않는다(고정관념을 드러내게 하는 활동이라 마음속으로만). 학급 결과 비교는 교사가 "떠오른 모습이 한쪽으로 쏠렸을 수 있다"는 말로 대신한다. ' + SAFE_NOTE,
      }),
      M('intro.advice-sort', {
        title: '들어 본 진로 조언 나누기', method: '가상 진로 조언을 근거에 따라 나누기', tool: 'sortboard', minutes: 7,
        levels: { easy: '조언 카드 4장을 두 바구니에 나누는 시연을 보고, 바구니마다 왜 그런지 한 마디씩 말한다.', base: '조언 카드 7장을 \'고정관념에 기댄 조언\'·\'흥미·적성에 기댄 조언\'으로 나누는 시연을 보고 까닭을 말한다.', challenge: '고정관념에 기댄 조언 하나에 정중하게 답하는 말을 짝에게 해 본다.' },
        intro: {
          teacher: '"\'여자는 안정적인 직업이 제일이야\', \'네가 좋아하는 걸 해 봐\' — 두 조언은 무엇을 근거로 하나요?" 가상의 진로 조언 카드를 두 바구니에 나누는 시연을 보인다. "어른 말씀이니 다 맞다"는 학생에게 "걱정해서 한 말과, 그 말의 근거가 맞는지는 따로 볼 수 있지 않을까요?"라고 되묻는다. 조언한 사람을 나쁘게 말하는 것이 아니라 조언의 근거를 가려 보는 것이라고 짚는다.',
          student: '가상의 진로 조언 카드를 \'고정관념에 기댄 조언\'과 \'흥미·적성에 기댄 조언\'으로 나누고, 근거가 무엇인지 생각해요.',
          demo: { tool: 'sortboard', options: { slots: SLOT2, cards: strip(ADVICE) }, sequence: [{ sort: { '고정관념에 기댄 조언': ['a1', 'a2', 'a3', 'a7'], '흥미·적성에 기댄 조언': ['a4', 'a5', 'a6'] } }] },
          art: { draw: 'a paper-cut shelf with two paper baskets, speech-bubble cards floating into them, a student holding a compass', banner: '그 조언의 근거는?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '조언은 모두 가상이다. 학생이 실제로 들은 조언이나 가족 이야기를 발표하게 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.interest-chart', {
        title: '하린의 흥미 그래프 읽기', method: '가상 흥미 점검 결과를 그래프로 만들고 읽기', tool: 'chart', minutes: 16,
        levels: { easy: '첫 문항에서 영역 2개가 미리 그려진 판에 나머지 3개 막대를 그리고, 읽기 문항은 막대 끝에 값이 보인다.', base: '영역 5개 막대를 모두 그리고, 값 표시 없이 눈금으로 상위 영역을 읽는다.', challenge: '넷째 문항에서 고정관념 때문에 지운 진로가 그래프와 맞는지 근거를 골라 점검한다.' },
        activity: {
          title: '하린의 흥미 그래프 읽기', tool: 'chart',
          teacher: '"하린의 점수가 가장 높은 영역은 무엇이고, 그 영역과 이어지는 일은 무엇일까요?" 가상 인물 하린의 흥미 점검 결과(10점 만점)를 막대그래프로 그리게 한다. "만들기 점수가 높아도 여자니까 공학은 아니지"라는 말이 나오면 "그래프 어디에 성별이 나와 있나요?"라고 되묻는다. 흥미 그래프는 진로를 정해 주는 답이 아니라 살펴볼 쪽을 알려 주는 단서라는 점도 짚는다. 학생 자신의 결과는 원하는 사람만 활동지에 적는다.',
          task: '가상 인물 하린의 흥미 점검 결과를 막대그래프로 만들고, 점수가 높은 영역과 이어지는 진로를 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '하린의 가상 흥미 점검 결과 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '하린의 흥미 점검(가상, 10점 만점)', unit: '점', xLabel: '영역', yLabel: '점수', data: HARIN, max: 10, scale: 1 }, target: { build: true } },
              { prompt: '미리 그린 두 막대에 이어 나머지 막대를 완성하세요.', toolOptions: { type: 'bar', title: '하린의 흥미 점검(가상, 10점 만점)', unit: '점', xLabel: '영역', yLabel: '점수', data: HARIN, max: 10, scale: 1, given: [0, 1] }, target: { build: true } }),
            IT(RD('그래프에서 하린의 점수가 가장 높은 두 영역을 고르세요.', { type: 'bar', title: '하린의 흥미 점검(가상)', unit: '점', data: HARIN, max: 10, question: '점수가 가장 높은 두 영역은?', choices: ['만들기·탐구하기', '돕기·표현하기', '정리하기·돕기'], why: ['', '두 영역은 점수가 낮은 편이에요.', '눈금을 다시 읽어요.'] }, { pick: 0 }),
              { prompt: '막대 끝의 값을 보고 점수가 가장 높은 두 영역을 고르세요.' }),
            IT(RD('하린의 상위 두 영역과 가장 잘 이어지는 진로 분야를 고르세요.', { type: 'bar', title: '하린의 흥미 점검(가상)', unit: '점', data: HARIN, max: 10, question: '만들기·탐구하기와 가장 잘 이어지는 분야는?', choices: ['공학·과학 기술', '무대 공연', '고객 상담'], why: ['', '표현하기 점수와 더 이어져요.', '돕기 점수와 더 이어져요.'] }, { pick: 0 })),
            IT(RD('하린이 "여자는 공학이 안 맞대"라는 말을 듣고 공학을 지우려 해요. 그래프를 근거로 점검하세요.', { type: 'bar', title: '하린의 흥미 점검(가상)', unit: '점', data: HARIN, max: 10, question: '그래프로 볼 때 하린이 공학을 지워야 할까?', choices: ['지워야 한다, 성별에 맞지 않으니까', '지울 까닭이 없다, 흥미 점수가 높은 쪽과 이어진다', '그래프로는 아무것도 알 수 없다'], why: ['그래프 어디에도 성별 기준은 없어요.', '', '그래프는 결정을 대신하지 않지만, 살펴볼 쪽은 알려 줘요.'] }, { pick: 1 }),
              null, null, { conclude: '흥미·적성 그래프는 살펴볼 진로를 알려 주는 단서이고, 성별은 그 기준이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하린의 그래프에서 점수가 높은 영역과 이어지는 진로를 하나 쓰고, 성별이 기준이 아닌 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '하린이 진로를 고를 때 근거로 삼을 것은?', options: ['흥미·적성 그래프', '성별'], answer: '흥미·적성 그래프' }] },
        notes: '그래프는 가상 인물 하린의 결과다. 학생 자신의 검사 결과를 공개하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('act.choice-dilemma', {
        title: '하린의 진로 선택 갈림길', method: '진로 선택 갈림길 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 하린에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길의 결과와 견주는 근거까지 고르고, 셋째 문항에서 하린이 보호자에게 할 첫마디를 고른다.' },
        activity: {
          title: '하린의 진로 선택 갈림길', tool: 'dilemma',
          teacher: '"하린이 공학을 고르든 다른 진로를 고르든, 그 결정이 하린의 것이 되려면 무엇이 필요할까요?" 이 갈림길의 바른 길은 특정 진로가 아니라 정보·대화·체험으로 내 기준을 세우는 길이라고 먼저 밝힌다. "어른 말을 안 들으면 버릇없다"는 학생에게 "걱정을 무시하는 것과, 정보로 대답하는 것은 같을까요?"라고 되묻는다. 끝 장면에서 성별이 아니라 흥미·적성·가치로 결정하는 근거를 고르게 한다.',
          task: '가상 인물 하린이 원하는 공학 계열과 주변의 기대 사이에서 길을 골라 결과를 따라가고, 끝에서 내 판단의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '하린이 진로 고민을 해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '하린이 진로 고민을 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '하린의 진로 고민', D1, [['info', 'talk', 'try'], ['give', 'reopen', 'camp']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '같은 고민을 가상 인물 도현(유치원 교사를 꿈꿈)이 할 때의 장면을 따라가세요.', toolOptions: { title: '도현의 꿈', scene: { text: '도현은 아이들을 돌보는 일이 좋아 유치원 교사를 꿈꾼다. 친구들이 "남자가 무슨 유치원 선생님이야"라며 웃는다.', ask: '도현은 어떻게 할까?', motif: 'house', choices: [
              { id: 'keep', text: '흥미와 경험(봉사 활동)을 근거로 꿈을 이어 간다', result: '도현은 봉사 활동에서 아이들과 잘 지낸다는 것을 다시 확인한다.', impact: [{ who: '도현', text: '내 기준을 지킨다', tone: 1 }], ending: '흥미와 경험을 근거로 꿈을 이어 갔어요.' },
              { id: 'hide', text: '웃음이 싫어 꿈을 숨기고 다른 직업을 말한다', result: '도현은 진로 활동에서 하고 싶은 것을 못 해 본다.', impact: [{ who: '도현', text: '기회를 놓친다', tone: -1 }], why: '놀림 때문에 꿈을 숨기면 내 흥미를 확인할 기회를 잃어요.' }] }, reasons: [{ id: 'q1', text: '돌봄 직업에 필요한 것은 성별이 아니라 적성과 준비다' }, { id: 'q2', text: '남이 웃으면 그 진로는 틀린 것이다', why: '웃음은 고정관념에서 나온 반응이지 진로의 근거가 아니에요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['keep']], reasons: ['q1'] } },
              { prompt: '도현의 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '하린이 보호자에게 할 첫마디를 고르는 장면을 따라가세요.', toolOptions: { title: '보호자와 대화', scene: { text: '하린은 저녁에 보호자에게 진로 이야기를 꺼내려 한다.', ask: '어떤 첫마디가 대화를 이어 줄까?', motif: 'house', choices: [
              { id: 'plan', text: '"제가 찾아본 공학 과정 자료가 있는데 같이 봐 주실래요?"', result: '보호자가 자료를 함께 읽는다.', impact: [{ who: '하린과 보호자', text: '대화가 이어진다', tone: 1 }], ending: '정보를 나누는 말로 시작했어요.' },
              { id: 'blame', text: '"왜 맨날 여자라서 안 된다고 해요?"', result: '보호자가 "그런 뜻이 아니었어"라며 서운해한다.', impact: [{ who: '하린과 보호자', text: '말다툼이 된다', tone: -1 }], why: '서운한 마음은 말해도 되지만, 첫마디는 함께 볼 정보로 열면 대화가 쉬워요.' }] }, reasons: [{ id: 'k1', text: '걱정에는 정보와 계획으로 답한다' }, { id: 'k2', text: '어른과의 진로 대화는 피하는 게 낫다', why: '보호자와 함께 계획하면 체험·준비를 도움받을 수 있어요.' }], compare: false },
              target: { path: [['plan']], reasons: ['k1'] } },
              null, null,
              { conclude: '진로는 성별이 아니라 흥미·적성·가치로 정하고, 주변의 걱정에는 정보·대화·체험으로 답해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '진로를 결정할 때 가장 알맞은 근거는?', options: ['나의 흥미·적성·가치', '내 성별에 흔한 직업인지', '친구들이 가는 쪽인지'], answer: '나의 흥미·적성·가치' }] },
        notes: '이 갈림길의 바른 길은 특정 진로를 정답으로 만들지 않고 \'스스로 정보를 모아 결정하는 길\'이다. ' + SAFE_NOTE,
      }),
      M('act.career-plan', {
        title: '진로 설계 글과 기준표 점검', method: '진로 설계 글 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '문장 틀("나는 ___에 관심이 있다. 왜냐하면 ___")을 채워 두 부분을 쓰고 기준 2개를 점검한다.', base: '희망 진로와 이유·필요한 준비를 6문장으로 쓰고 기준표 3항목(흥미 근거·고정관념 점검·구체 계획)으로 점검한다.', challenge: '넷째 문항에서 고정관념을 만났을 때 대처를 두 문장으로 덧붙인다.' },
        activity: {
          title: '진로 설계 글과 기준표 점검', tool: 'rubric-writing',
          teacher: '"\'그냥 좋아서\'보다 더 단단한 이유는 무엇일까요? 흥미 그래프·해 본 경험·중요하게 여기는 가치 가운데 무엇을 넣을 수 있나요?" 희망 진로를 아직 정하지 못한 학생은 가상 인물 하린의 진로로 써도 된다고 먼저 말한다. "내 성별에 흔한 직업이라 안전하다"는 이유가 나오면 "그 이유는 흥미일까요, 고정관념일까요?"라고 되묻는다. 준비는 이번 학기에 할 수 있는 한 가지처럼 구체적으로 쓰게 한다. 이름·학교 같은 개인정보는 쓰지 않는다.',
          task: '희망 진로(또는 가상 인물 하린의 진로)와 그 이유, 필요한 준비를 쓰고, 흥미 근거·고정관념 점검·구체 계획이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 희망 진로와 그 이유를 두 문장으로 쓰세요.', toolOptions: { topic: '희망 진로(정하지 못했으면 가상 인물 하린의 공학 진로)와 그 이유를 흥미·적성·경험 가운데 하나를 근거로 두 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '진로 설계 ① 진로와 이유' }, target: { selfCheck: ['희망 진로를 밝혔다', '흥미·적성·경험을 근거로 썼다', '개인정보를 쓰지 않았다'], mustInclude: [['왜냐하면', '때문', '흥미', '좋아']] } },
              { prompt: '문장 틀을 채워 진로와 이유를 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '나는 ___에 관심이 있다. 왜냐하면 ___ 때문이다.' }, target: { selfCheck: ['희망 진로를 밝혔다', '흥미·적성·경험을 근거로 썼다'], mustInclude: [['왜냐하면', '때문']] } }),
            IT({ prompt: '가운데: 이유를 고정관념 없이 다시 점검하는 문장을 두 문장으로 쓰세요.', toolOptions: { topic: '내 이유에 "내 성별에 맞아서", "남들이 그 성별이 많이 한다고 해서" 같은 고정관념이 섞였는지 점검하고, 점검한 결과를 두 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '진로 설계 ② 고정관념 점검' }, target: { selfCheck: ['이유에 성별 기준이 섞였는지 점검했다', '점검 결과를 문장으로 밝혔다', '특정 성별을 깎아내리지 않았다'] } },
              { prompt: '이유에 성별 기준이 있는지 한 문장으로 점검하세요.', toolOptions: { topic: '내 이유에 성별 기준이 섞였는지 한 문장으로 점검하세요.', minChars: 12, minSentences: 1, maxSentences: 2, starter: '내 이유에는 성별 기준이 ___.' }, target: { selfCheck: ['이유에 성별 기준이 섞였는지 점검했다', '특정 성별을 깎아내리지 않았다'] } }),
            IT({ prompt: '끝부분: 필요한 준비와 이번 학기에 할 일을 두 문장으로 쓰세요.', toolOptions: { topic: '그 진로에 필요한 준비(과목·체험·자격 등)와 이번 학기에 할 일 하나를 구체적으로 두 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '진로 설계 ③ 준비와 계획' }, target: { selfCheck: ['필요한 준비를 썼다', '이번 학기에 할 일을 구체적으로 썼다', '실천할 수 있는 크기로 썼다'] } },
              { prompt: '이번 학기에 할 일 하나를 한 문장으로 쓰세요.', toolOptions: { topic: '그 진로를 위해 이번 학기에 할 일 하나를 한 문장으로 쓰세요.', minChars: 12, minSentences: 1, maxSentences: 2, starter: '이번 학기에 ___ 을(를) 해 본다.' }, target: { selfCheck: ['이번 학기에 할 일을 구체적으로 썼다', '실천할 수 있는 크기로 썼다'] } }),
            IT({ prompt: '세 부분을 이어 6문장 진로 설계 글을 완성하세요.', toolOptions: { topic: '앞의 세 부분(진로와 이유·고정관념 점검·준비와 계획)을 이어 6문장 진로 설계 글로 완성하세요.', minChars: 90, maxChars: 380, minSentences: 6, maxSentences: 7, title: '나의 진로 설계', sample: '나는 가상 인물 하린처럼 공학 진로에 관심이 있다. 만들기와 탐구하기 흥미 점수가 높기 때문이다. 내 이유에 성별 기준이 섞였는지 점검했다. 성별이 아니라 흥미와 경험이 근거라는 것을 확인했다. 공학에는 수학과 과학 공부가 필요하다. 이번 학기에는 학교 진로 체험을 신청해 본다.' }, target: { selfCheck: ['흥미·적성을 근거로 썼다', '고정관념을 점검했다', '구체적인 계획이 있다'] } },
              null,
              { prompt: '진로 설계 글에 고정관념을 만났을 때 대처를 더해 8문장으로 완성하세요.', toolOptions: { topic: '앞의 6문장에 "누군가 내 진로를 성별로 반대할 때 나는 어떻게 할지"를 두 문장 더해 8문장으로 완성하세요.', minChars: 120, maxChars: 480, minSentences: 8, maxSentences: 9, title: '나의 진로 설계 + 대처', sample: '나는 가상 인물 하린처럼 공학 진로에 관심이 있다. 만들기와 탐구하기 흥미 점수가 높기 때문이다. 내 이유에 성별 기준이 섞였는지 점검했다. 성별이 아니라 흥미와 경험이 근거라는 것을 확인했다. 공학에는 수학과 과학 공부가 필요하다. 이번 학기에는 학교 진로 체험을 신청해 본다. 누군가 성별 때문에 반대하면 내 흥미 그래프와 체험 결과를 보여 주며 이야기한다. 그래도 어려우면 진로 선생님께 함께 이야기해 달라고 부탁한다.' }, target: { selfCheck: ['흥미·적성을 근거로 썼다', '고정관념을 점검했다', '구체적인 계획이 있다', '고정관념을 만났을 때 대처를 썼다'] } },
              { conclude: '단단한 진로 설계는 흥미·적성의 근거, 고정관념 점검, 지금 할 수 있는 구체 계획으로 이루어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 진로 이유에 고정관념이 섞였는지 점검한 결과를 한 문장으로 써요.' }] },
        notes: '희망 진로를 정하지 못한 학생은 가상 인물 하린의 진로로 쓴다. 쓴 글을 발표하게 할 때는 원하는 학생만. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.roadmap', {
        title: '하린의 진로 로드맵 지도', method: '진로 경로를 칸 지도에 핀으로 놓기', tool: 'map', minutes: 6,
        levels: { easy: '장소 이름이 보이는 지도에서 핀을 꽂고 핀 칸 이름이 바로 읽힌다(출구 질문 둘에 핀 하나씩).', base: '장소 이름을 숨긴 지도에서 기호를 보고 핀을 꽂는다.', challenge: '이름을 숨긴 지도에 헷갈리는 장소가 더해지고, 넷째 출구 질문에서 갈림길 두 개(고등학교 과정 고르기·직업 교육 고르기)에서 할 일을 쓴다.' },
        wrap: {
          teacher: '"중3 하린이 지금 들를 곳은 어디일까요? 그다음은요?" 가상 진로 로드맵 지도에서 핀을 꽂게 한다. "진로는 한 번 정하면 바꿀 수 없다"는 말이 나오면 "로드맵에 되돌아가는 길이나 갈림길이 있으면 안 될까요?"라고 되묻는다. 지도는 단순화한 예시이고 실제 경로는 진로 선생님과 함께 알아본다고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, ROAD, { readout: true }), prompt: '중3 하린이 먼저 공학 일을 직접 해 볼 수 있는 곳에 핀을 꽂아요.', target: { place: '진로 체험 센터' }, difficulty: 0.15 },
              { toolOptions: Object.assign({}, ROAD, { readout: true }) },
              { toolOptions: Object.assign({}, ROAD, { names: false, extra: ['도서관', '공원'] }) }),
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, ROAD, { names: false }), prompt: '체험 뒤 고민을 정리하러 진로 선생님을 만날 곳에 핀을 꽂아요.', target: { place: '진로 상담실' }, difficulty: 0.2 },
              { toolOptions: Object.assign({}, ROAD, { readout: true }) },
              { toolOptions: Object.assign({}, ROAD, { names: false, extra: ['도서관', '공원'] }) }),
            { type: 'choice', prompt: '진로 로드맵에 대한 생각으로 가장 알맞은 것은?', options: ['한 번 정한 길은 바꿀 수 없다', '정보와 경험이 쌓이면 갈림길에서 다시 고를 수 있다', '내 성별에 흔한 길이 가장 안전하다'], answer: 1, difficulty: 0.2, explain: '로드맵은 계획이지 정해진 운명이 아니에요. 내 기준으로 다시 고를 수 있어요.' },
            { type: 'short', prompt: '하린의 로드맵에 갈림길 두 곳을 정하고, 갈림길마다 할 일을 한 줄씩 써요.' },
          ],
        },
        worksheet: {
          title: '진로 로드맵',
          items: [
            { type: 'table', prompt: '하린의 로드맵에서 단계마다 할 일을 써요.', columns: ['단계', '할 일'], cells: [['중학교 3학년', ''], ['고등학교', ''], ['대학·직업 교육', '']], answer: '(예) 진로 체험·상담, 관심 과목 듣기, 필요한 공부·자격 준비' },
            { type: 'short', prompt: '로드맵에서 고정관념을 만날 수 있는 지점과 그때 할 일을 써요.' },
          ],
        },
        notes: '지도는 가상의 진로 로드맵이다. 지도 교구는 문항마다 핀 하나라 경로를 출구 질문 둘로 나누었다. 학생의 실제 진학 계획을 발표하게 하지 않는다.',
      }),
      M('wrap.rolemodel-card', {
        title: '고정관념을 넘은 직업인 카드', method: '가상 직업인 소개 카드 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '카드 구성 문구를 보기에서 고르고(둘째 출구 질문) 조각으로 꾸민다.', base: '카드를 꾸미고 소개 문구를 직접 쓴다(셋째 출구 질문).', challenge: '넷째 출구 질문에서 그 직업인에게서 내가 배울 점을 한 줄로 쓴다.' },
        wrap: {
          teacher: '"성별 고정관념이 강한 직업에서 자기 길을 간 사람을 소개한다면, 무엇을 넣어야 할까요? 성별일까요, 그 사람이 한 일과 준비일까요?" 소개할 직업인은 가상 인물로 만들고, 실존 인물은 교사가 확인한 자료가 있을 때만 쓴다고 알린다. "특별히 대단한 사람만 롤모델이다"라는 말에는 "꾸준히 준비한 평범한 사람도 롤모델이 될 수 있을까요?"라고 되묻는다. 콜라주 판에는 그림을, 문구는 출구 질문과 활동지에 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 직업인 소개 카드를 꾸미고 스스로 점검해요.', target: { selfCheck: ['소개할 가상 직업인의 직업을 정했다', '성별이 아니라 한 일과 준비를 담기로 했다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '직업인 소개 카드의 문구로 가장 알맞은 것은?', options: ['여자인데도 대단하다!', '로봇을 좋아해 10년 동안 공부하고 실험한 엔지니어', '남자가 하기엔 특이한 직업'], answer: 1, difficulty: 0.15, explain: '성별을 놀라움의 이유로 삼지 않고, 그 사람의 흥미와 준비를 소개해요.' },
            { type: 'short', prompt: '가상 직업인 소개 문구를 한두 문장으로 써요(성별이 아니라 한 일과 준비 중심).' },
            { type: 'short', prompt: '그 직업인에게서 내가 배울 점을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '직업인 소개 카드',
          items: [
            { type: 'short', prompt: '소개할 가상 직업인의 직업과 그 사람이 한 준비를 써요.' },
            { type: 'short', prompt: '그 직업인에게서 내가 배울 점을 써요.' },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 소개 문구는 출구 질문과 활동지에서 쓴다. 실존 인물을 쓸 때는 교사가 확인한 공공 자료만. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 23-g9-family-friend.js ====
  // ==== 9학년 · 평등한 가족 문화와 친구의 가정폭력 이야기 (gender.m.g9-family-friend) ====
  {
    const M = MK('g9-family-friend', [9]);
    const SCENE8 = [['A 저녁 메뉴 말다툼', 2], ['B 문 쾅 닫고 사과', 3], ['C 날마다 "쓸모없다" 고함', 8], ['D 휴대폰 뺏고 연락 막기', 7], ['E 청소 당번 다툼', 2], ['F 물건 던지며 위협', 9], ['G 한동안 말 안 하다 대화', 3], ['H 밥을 며칠씩 안 챙김', 7]];
    const VALUES = ['대화', '분담', '존중', '안전'];
    const VALUE_CARDS = [
      { id: 'v1', text: '저녁마다 오늘 있었던 일을 나눈다', to: '대화' }, { id: 'v2', text: '화가 나면 잠깐 쉬었다가 이야기한다', to: '대화' },
      { id: 'v3', text: '집안일 표를 모두 함께 짠다', to: '분담' }, { id: 'v4', text: '돌봄을 한 사람에게 몰지 않는다', to: '분담' },
      { id: 'v5', text: '방문을 열기 전에 노크한다', to: '존중' }, { id: 'v6', text: '서로의 선택을 놀리지 않는다', to: '존중' },
      { id: 'v7', text: '누구도 겁주거나 때리지 않는다', to: '안전' }, { id: 'v8', text: '위험할 때 도움을 청할 곳을 안다', to: '안전' },
    ];
    // 털어놓은 순간 갈림길(깊이 3) — 친구의 이야기 내용은 자세히 묻지 않는다
    const D1 = { text: '하굣길에 친구 다은이 "집에 들어가기 무서워. 또 맞을까 봐…"라고 작게 말한다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
      { id: 'small', text: '"에이, 별일 아니겠지. 다들 혼나잖아."', result: '다은이 "그렇지…" 하고 입을 닫는다.', impact: [{ who: '다은', text: '말해도 소용없다고 느낀다', tone: -1 }], why: '무섭다는 말은 안전이 걸린 신호예요. 별일 아니라고 하면 다시 말하기 어려워져요.', end: '다은이 입을 닫았어요.',
        next: { text: '며칠 뒤 다은이 쉬는 시간마다 엎드려 있다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'reask', text: '"지난번 얘기, 내가 제대로 못 들어 줬어. 다시 들어도 돼?"', result: '다은이 조금씩 이야기를 꺼낸다.', impact: [{ who: '다은', text: '다시 말할 기회가 생긴다', tone: 1 }], end: '늦었지만 다시 들어 줬어요.',
            next: { text: '다은이 "선생님한테는 말하지 마"라고 한다.', choices: [
              { id: 'together', text: '"네가 안전한 게 먼저야. 같이 상담 선생님께 가자."', result: '다은과 함께 상담실에 간다.', impact: [{ who: '다은', text: '도움에 이어진다', tone: 1 }], ending: '안전을 먼저 두고 함께 어른에게 갔어요.' },
              { id: 'promise', text: '"알았어, 절대 아무에게도 말 안 할게."', result: '다은은 계속 혼자 버틴다.', impact: [{ who: '다은', text: '위험이 이어진다', tone: -1 }], why: '안전과 관련된 비밀은 지키는 것이 아니라 믿을 만한 어른에게 잇는 것이 친구를 지키는 길이에요.' }] } },
          { id: 'wait', text: '괜히 끼어들기 싫어 지켜보기만 한다', result: '다은은 아무에게도 도움을 받지 못한다.', impact: [{ who: '다은', text: '혼자 견딘다', tone: -1 }], why: '가족 일이어도 안전이 걸리면 주변 사람이 도움을 이을 수 있어요.' }] } },
      { id: 'secret', text: '"다른 사람한텐 비밀로 할게."', result: '다은이 고마워하지만 상황은 그대로다.', impact: [{ who: '다은', text: '위험이 그대로 남는다', tone: -1 }], why: '비밀을 지켜 주는 것보다 안전이 먼저예요. 친구의 이야기는 믿을 만한 어른에게 이어야 해요.', end: '비밀로만 남았어요.',
        next: { text: '다은이 다음 날 팔에 멍이 든 채 학교에 온다.', ask: '약속을 어떻게 할까?', choices: [
          { id: 'tell', text: '"약속을 바꿔야겠어, 네가 다칠까 봐. 같이 선생님께 가자."', result: '다은이 망설이다가 함께 간다.', impact: [{ who: '다은', text: '보호가 시작된다', tone: 1 }], end: '안전을 위해 약속을 바꿨어요.',
            next: { text: '상담 선생님이 "말해 줘서 고마워"라며 다은의 이야기를 듣는다.', choices: [
              { id: 'stay', text: '다은 곁에서 기다리며 소문내지 않는다', result: '다은이 학교에서 기댈 곳이 생긴다.', impact: [{ who: '다은', text: '믿을 사람이 생긴다', tone: 1 }], ending: '곁에 있어 주고 이야기를 지켰어요.' },
              { id: 'spread', text: '걱정돼서 반 친구들에게 이야기한다', result: '다은이 반에서 불편한 눈길을 받는다.', impact: [{ who: '다은', text: '2차 피해를 겪는다', tone: -1 }], why: '어른에게 잇는 것과 친구들에게 퍼뜨리는 것은 달라요. 이야기는 도울 수 있는 어른에게만.' }] } },
          { id: 'keepS', text: '약속했으니 끝까지 말하지 않는다', result: '다은의 상처가 계속된다.', impact: [{ who: '다은', text: '도움을 못 받는다', tone: -1 }], why: '다칠 수 있는 비밀은 지키지 않아도 돼요. 그게 친구를 배신하는 일이 아니에요.' }] } },
      { id: 'thanks', text: '"얘기해 줘서 고마워. 네 잘못 아니야. 같이 믿는 어른에게 가자."', result: '다은이 고개를 끄덕인다.', impact: [{ who: '다은', text: '혼자가 아니라고 느낀다', tone: 1 }], end: '고마움과 지지를 말하고 함께 가자고 했어요.',
        next: { text: '다은이 "그래도 무서워, 집에 알려지면 어떡해"라고 한다.', ask: '어떻게 답할까?', choices: [
          { id: 'safe', text: '"선생님은 네가 안전하게 지내는 방법을 같이 찾아 주실 거야. 내가 같이 있을게."', result: '다은과 함께 담임 선생님을 찾아간다.', impact: [{ who: '다은', text: '안심하고 도움을 청한다', tone: 1 }], end: '함께 어른을 찾아갔어요.',
            next: { text: '선생님이 다은과 따로 이야기하겠다고 한다.', choices: [
              { id: 'leave', text: '다은에게 "끝나면 기다릴게"라고 하고 자리를 비켜 준다', result: '다은이 선생님께 차분히 이야기한다.', impact: [{ who: '다은', text: '도움에 이어진다', tone: 1 }], ending: '어른에게 잇고 곁을 지켰어요.' },
              { id: 'pry', text: '옆에 남아 무슨 일이 있었는지 자세히 묻는다', result: '다은이 말하기 힘들어한다.', impact: [{ who: '다은', text: '부담이 커진다', tone: -1 }], why: '자세한 일은 도울 수 있는 어른이 듣게 하고, 친구는 캐묻지 않아요.' }] } },
          { id: 'force', text: '"그럼 내가 지금 바로 너희 집에 따지러 갈게."', result: '다은이 겁에 질려 "하지 마"라고 한다.', impact: [{ who: '다은', text: '더 위험해질까 봐 걱정한다', tone: -1 }], why: '혼자 해결하려 하면 친구와 나 모두 위험해질 수 있어요. 어른에게 이어요.' }] } }] };
    const R1 = [{ id: 'r1', text: '안전과 관련된 비밀은 지키기보다 믿을 만한 어른에게 잇는다' }, { id: 'r2', text: '털어놓은 친구에게는 고마움과 "네 잘못 아니야"를 먼저 말한다' },
      { id: 'r3', text: '가족 일은 남이 끼어들면 안 된다', why: '가정폭력은 가족만의 일이 아니라 안전의 문제예요. 주변 사람이 도움을 이을 수 있어요.' }, { id: 'r4', text: '친구의 비밀은 무조건 지켜야 한다', why: '다칠 수 있는 비밀은 지키는 것보다 알리는 것이 친구를 지키는 길이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '함께 간 길에서는 다은이 혼자가 아니게 됐다' }, { id: 'r6', text: '비밀로만 둔 길에서는 위험이 이어졌다' }], ok: ['r5', 'r6'] };
    const ORDER = [{ id: 'o1', text: '믿는 어른(보호자·담임)에게 알린다' }, { id: 'o2', text: '학교 상담(상담 선생님·Wee 클래스)' }, { id: 'o3', text: `지역 상담 기관 ${LOCAL}` }];

    ALL.push(
      // ---- 도입 ----
      M('intro.conflict-line', {
        title: '갈등과 폭력의 경계선 그래프', method: '가상 가족 장면 점수 그래프에서 경계선 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '교사가 장면 4개(A·C·E·F) 막대만 짚으며 점수를 소리 내어 읽어 준다.', base: '장면 8개 막대에서 경계선(6점) 위에 있는 장면을 눈금으로 읽는다.', challenge: '경계선을 6점으로 정한 기준(두려움·되풀이·통제가 함께 높다)을 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"가족끼리 다투는 일과 가정폭력은 무엇이 다를까요?" 가상 가족 장면 8개를 두려움·되풀이·통제 세 가지로 매긴 점수(가상, 10점 만점) 막대그래프를 띄우고, 시연 단추로 \'F 물건 던지며 위협\'을 고르는 모습을 보인다. "때리지 않으면 폭력이 아니다"라는 말이 나오면 "날마다 \'쓸모없다\'는 고함을 듣는 C 장면은 어디쯤 있나요?"라고 되묻는다. 다툼은 어느 가족에게나 있지만, 겁을 주고 되풀이되며 한 사람을 통제하면 폭력이 될 수 있다고 짚는다. 우리 집 이야기는 하지 않는다고 먼저 밝힌다.',
          student: '가상 가족 장면 8개의 점수 그래프를 보고, 갈등과 가정폭력의 경계가 어디쯤인지 읽어요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 가족 장면 — 두려움·되풀이·통제 점수(가상)', unit: '점', xLabel: '장면', yLabel: '점수', data: SCENE8, max: 10, question: '점수가 가장 높은 장면은?', choices: SCENE8.map((r) => r[0]) }, sequence: [{ pick: 5 }] },
          art: { draw: 'a paper-cut bar chart with eight paper bars and a dotted paper line across the middle, small paper house icons under each bar', banner: '갈등과 폭력 사이', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '쉬움에서는 A·C·E·F 장면만 말로 짚는다. 점수와 경계선은 수업용 가상 값이다. 학생의 가정 이야기를 묻거나 발표하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.family-values', {
        title: '평등한 가족 문화의 네 가치', method: '평등한 가족 가치 가지에 실천 예 붙이기', tool: 'mindmap', minutes: 7,
        levels: { easy: '시연 판의 대화·분담 두 가지에 붙은 카드만 짚는다.', base: '대화·분담·존중·안전 네 가지에 실천 예 카드 8장이 붙는 시연을 보고 까닭을 말한다.', challenge: '평등한 가족 문화를 위해 우리 사회에 필요한 지원(돌봄 지원·상담 등)을 짝에게 하나 말한다.' },
        intro: {
          teacher: '"평등한 가족은 어떤 모습일까요? 누가 무엇을 하든 모두 같아야 한다는 뜻일까요?" 가운데 \'평등한 가족\'에서 대화·분담·존중·안전 가지를 펼치고 시연 단추로 실천 예 카드가 붙는 모습을 보인다. "가족 모양은 정해져 있다"는 말이 나오면 "가족의 모습은 여러 가지지만, 어떤 가족이든 지킬 수 있는 가치는 무엇일까요?"라고 되묻는다. 안전 가지는 오늘 배울 \'친구가 털어놓을 때\'와 이어진다고 짚는다.',
          student: '평등한 가족을 가운데 두고 대화·분담·존중·안전 가지에 실천 예 카드를 붙여 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '평등한 가족', slots: VALUES, cards: strip(VALUE_CARDS) }, sequence: [{ sort: { 대화: ['v1', 'v2'], 분담: ['v3', 'v4'], 존중: ['v5', 'v6'], 안전: ['v7', 'v8'] } }] },
          art: { draw: 'a paper-cut house shape with four paper branches labelled with icons of speech bubbles, a shared chore wheel, an open hand and a shield', banner: '어떤 가족이든 함께 지킬 것', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: '가족 형태(한부모·조부모·다문화 등)에 따라 좋고 나쁨을 말하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.disclose-dilemma', {
        title: '털어놓은 순간 갈림길', method: '친구가 가정폭력을 털어놓는 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 다은에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길의 결과와 견주는 근거까지 고르고, 셋째 문항에서 다은이 도움을 거부할 때의 다음 말을 고른다.' },
        activity: {
          title: '털어놓은 순간 갈림길', tool: 'dilemma',
          teacher: '"다은이 \'비밀로 해 줘\'라고 하면, 비밀을 지키는 것이 다은을 지키는 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "가족 일에 끼어들면 안 된다"는 학생에게 "다은이 다칠 수 있다면, 그래도 가족만의 일일까요?"라고 되묻는다. 친구가 할 일은 혼자 해결하거나 캐묻는 것이 아니라 들어 주고, 탓하지 않고, 믿을 만한 어른에게 잇는 것이라고 끝 장면에서 짚는다. 장면 속 일을 자세히 묘사하거나 묻지 않는다.',
          task: '가상 인물 다은이 "집에 들어가기 무섭다"고 털어놓은 장면에서 길을 골라 결과를 따라가고, 끝에서 내 판단의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '다은이 무섭다고 털어놓아요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '다은이 무섭다고 털어놓아요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '다은의 이야기', D1, [['thanks', 'safe', 'leave'], ['secret', 'tell', 'stay'], ['small', 'reask', 'together']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '다은이 "그냥 잊어 줘"라며 도움을 거부할 때의 장면을 따라가세요.', toolOptions: { title: '도움을 거부할 때', scene: { text: '다은이 "그냥 잊어 줘. 말한 거 후회돼"라고 한다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'stayW', text: '"말해 준 건 잘한 거야. 나 혼자 감당하긴 어려워서, 믿을 만한 선생님께는 꼭 알릴게."', result: '다은이 놀라지만 "같이 가 줄래?"라고 묻는다.', impact: [{ who: '다은', text: '안전에 이어진다', tone: 1 }], ending: '친구의 마음을 존중하면서도 안전을 지켰어요.' },
              { id: 'forget', text: '"알았어, 없던 일로 하자."', result: '다은은 다시 혼자가 된다.', impact: [{ who: '다은', text: '도움에서 멀어진다', tone: -1 }], why: '친구가 후회한다고 해도 안전이 걸린 일은 어른에게 잇는 것이 맞아요.' }] }, reasons: [{ id: 'q1', text: '친구의 마음은 존중하되 안전은 양보하지 않는다' }, { id: 'q2', text: '친구가 원하지 않으면 알리면 안 된다', why: '다칠 수 있는 일은 친구가 원하지 않아도 어른에게 잇는 것이 친구를 지키는 길이에요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['stayW']], reasons: ['q1'] } },
              { prompt: '다은이 도움을 거부하는 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '다은을 도운 뒤 나를 돌보는 장면을 따라가세요.', toolOptions: { title: '나도 돌보기', scene: { text: '다은을 선생님께 데려다준 뒤, 나도 마음이 무겁고 잠이 잘 오지 않는다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'talkMe', text: '내 마음도 상담 선생님이나 보호자에게 이야기한다', result: '마음이 조금 가벼워진다.', impact: [{ who: '나', text: '나도 도움을 받는다', tone: 1 }], ending: '친구를 도운 나도 돌봤어요.' },
              { id: 'alone', text: '친구 일이니 내 마음은 혼자 삭인다', result: '무거운 마음이 오래간다.', impact: [{ who: '나', text: '지친다', tone: -1 }], why: '친구를 돕는 사람도 마음이 힘들 수 있어요. 나도 도움을 받아도 돼요.' }] }, reasons: [{ id: 'k1', text: '돕는 사람도 자기 마음을 돌볼 수 있다' }, { id: 'k2', text: '힘든 마음을 말하면 친구를 배신하는 것이다', why: '내 마음을 상담 선생님께 말하는 것은 배신이 아니에요.' }], compare: false },
              target: { path: [['talkMe']], reasons: ['k1'] } },
              null, null,
              { conclude: '친구가 가정폭력을 털어놓으면 고마움과 "네 잘못 아니야"를 말하고, 안전과 관련된 비밀은 믿을 만한 어른에게 이어요. 돕는 나도 돌봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "집에서 맞을까 봐 무섭다, 비밀로 해 줘"라고 할 때 가장 알맞은 행동은?', options: ['약속대로 아무에게도 말하지 않는다', '고맙다고 말하고 함께 믿는 어른에게 간다', '친구 집에 혼자 따지러 간다'], answer: '고맙다고 말하고 함께 믿는 어른에게 간다' }] },
        notes: '친구가 털어놓은 일의 자세한 내용을 장면·발문에서 다루지 않는다. 학생의 가정 경험을 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('act.listen-script', {
        title: '들어 주기 역할극 대본', method: '들어 주기 대본 카드로 빈 대사 채우기', tool: 'story', minutes: 15,
        levels: { easy: '대사 카드에서 고르고, 놓으면 바로 맞는지 알려 준다.', base: '빈 대사 칸 4개에 대사 카드를 골라 넣고(함정 카드 둘), 대본 장면을 차례대로 놓는다.', challenge: '셋째 문항에서 하지 말아야 할 말 카드만 골라 담고, 대화 뒤 내가 할 일은 활동지에 쓴다.' },
        activity: {
          title: '들어 주기 역할극 대본', tool: 'story',
          teacher: '"친구가 힘든 이야기를 꺼낼 때, 첫마디로 무엇이 가장 힘이 될까요?" 들어 주기→감정 인정→함께 어른 찾기 차례로 대본 카드를 엮게 한다. "왜 진작 말 안 했어?"를 고른 학생에게 "그 말을 들은 친구는 다음에 또 말할 수 있을까요?"라고 되묻는다. 대본은 짝과 읽어 볼 수 있지만 친구 역을 맡은 학생에게 실제 이야기를 지어내라고 하지 않는다.',
          task: '친구 다은이 힘든 이야기를 털어놓는 가상 장면의 대본에서 들어 주기·감정 인정·함께 어른 찾기 대사를 골라 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('빈 대사 칸에 알맞은 대사 카드를 넣어 대본을 완성하세요.', [
              ['다은: "집에 가기 무서워…" 나: "___"', '"얘기해 줘서 고마워. 천천히 말해도 돼."', '나'],
              ['나: "그런 일이 있었구나. ___"', '"무서웠겠다. 네 잘못이 아니야."', '나'],
              ['다은: "아무한테도 말하지 마." 나: "___"', '"네가 안전한 게 먼저야. 같이 선생님께 가자."', '나'],
              ['나: "___"', '"내가 같이 가서 기다릴게."', '나']], ['"왜 진작 말 안 했어?"', '"다들 그 정도는 혼나."'], { title: '들어 주기 대본' }),
              FB('빈 대사 칸 두 곳에 알맞은 대사 카드를 넣으세요.', [
                ['다은: "집에 가기 무서워…" 나: "___"', '"얘기해 줘서 고마워. 천천히 말해도 돼."', '나'],
                ['다은: "아무한테도 말하지 마." 나: "___"', '"네가 안전한 게 먼저야. 같이 선생님께 가자."', '나']], ['"다들 그 정도는 혼나."'], { title: '들어 주기 대본' })),
            IT(OB('대본 장면 카드를 들어 주기 → 감정 인정 → 함께 어른 찾기 차례로 놓으세요.', [
              { id: 'p1', text: '다은의 말을 끊지 않고 끝까지 듣는다' }, { id: 'p2', text: '"무서웠겠다, 네 잘못 아니야"라고 말한다' },
              { id: 'p3', text: '함께 믿는 어른을 정한다' }, { id: 'p4', text: '상담 선생님께 같이 간다' }], { title: '대본 차례' }, [{ id: 'p5', text: '무슨 일인지 자세히 캐묻는다' }])),
            IT(PB('친구가 털어놓을 때 하지 말아야 할 말만 골라 담으세요.', '하지 말 말', [
              { id: 'n1', text: '"왜 진작 말 안 했어?"', ok: true }, { id: 'n2', text: '"너희 집이 좀 이상하다"', ok: true },
              { id: 'n3', text: '"이거 반 애들한테 말해도 돼?"', ok: true }, { id: 'n4', text: '"말해 줘서 고마워"' }, { id: 'n5', text: '"같이 선생님께 가 볼까?"' }], { title: '하지 말 말 고르기' }),
              null, null, { conclude: '들어 주기 대본은 끝까지 듣고, 마음을 알아주고 "네 잘못 아니야"라고 말한 뒤, 함께 믿는 어른을 찾는 차례예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 힘든 이야기를 털어놓은 뒤 내가 할 일을 한 문장으로 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('act.support-guide', {
        title: '친구 돕기 안내문 쓰기', method: '친구 돕기 안내문 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '\'할 말\' 칸만 문장 틀을 채워 쓰고 기준 2개를 점검한다.', base: '할 말·하지 말 말·연결할 곳 세 칸을 모두 쓰고 기준표 3항목(안전 우선·탓하지 않기·도움 자리 표시)으로 점검한다.', challenge: '넷째 문항에서 돕는 나를 돌보는 방법을 두 문장으로 덧붙인다.' },
        activity: {
          title: '친구 돕기 안내문 쓰기', tool: 'rubric-writing',
          teacher: '"친구가 가정폭력을 털어놓을 때 쓸 안내문을 또래에게 만든다면, 가장 먼저 무엇을 적을까요?" 할 말·하지 말 말·연결할 곳 세 칸으로 나누어 쓰게 한다. "가족 일이니 비밀로 해 주라고 쓰자"는 의견이 나오면 "다칠 수 있는 비밀도 지키라고 적으면 안내문을 읽은 친구는 어떻게 행동할까요?"라고 되묻는다. 연결할 곳 칸에는 지역 상담 번호 자리를 비워 두고 학교가 확인해 채운다고 알린다. 실제 사례나 이름은 쓰지 않는다.',
          task: '또래가 가정폭력을 털어놓을 때 할 말·하지 말 말·연결할 곳을 정리한 안내문을 쓰고, 안전 우선·탓하지 않기·도움 자리가 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 칸: 친구가 털어놓을 때 할 말을 두 문장으로 쓰세요.', toolOptions: { topic: '안내문 첫 칸 \'할 말\': 친구가 가정폭력을 털어놓을 때 해 줄 말을 두 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '안내문 ① 할 말' }, target: { selfCheck: ['고마움이나 지지를 표현했다', '친구를 탓하지 않았다', '실제 이름을 쓰지 않았다'], mustInclude: [['고마', '잘못이 아니', '잘못 아니']] } },
              { prompt: '문장 틀을 채워 할 말을 쓰세요.', toolOptions: { minChars: 20, minSentences: 2, starter: '"얘기해 줘서 ___." "네 ___."' }, target: { selfCheck: ['고마움이나 지지를 표현했다', '친구를 탓하지 않았다'], mustInclude: [['고마', '잘못이 아니', '잘못 아니']] } }),
            IT({ prompt: '둘째 칸: 하지 말아야 할 말과 그 까닭을 두 문장으로 쓰세요.', toolOptions: { topic: '안내문 둘째 칸 \'하지 말 말\': 하지 말아야 할 말(캐묻기·탓하기·소문내기 등)과 그 까닭을 두 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '안내문 ② 하지 말 말' }, target: { selfCheck: ['하지 말 말을 하나 이상 썼다', '그 까닭을 썼다', '친구를 탓하지 않았다'] } }),
            IT({ prompt: '셋째 칸: 연결할 곳과 안전이 먼저인 까닭을 두 문장으로 쓰세요.', toolOptions: { topic: `안내문 셋째 칸 '연결할 곳': 믿는 어른·학교 상담·지역 상담 기관(${LOCAL})을 넣고, 비밀보다 안전이 먼저인 까닭을 두 문장으로 쓰세요.`, minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 3, title: '안내문 ③ 연결할 곳' }, target: { selfCheck: ['안전이 비밀보다 먼저라고 썼다', '도움받을 자리를 표시했다', '혼자 해결하라고 쓰지 않았다'], mustInclude: [['선생님', '상담', '어른']] } }),
            IT({ prompt: '세 칸을 이어 안내문을 6문장으로 완성하세요.', toolOptions: { topic: '앞의 세 칸(할 말·하지 말 말·연결할 곳)을 이어 또래용 안내문을 6문장으로 완성하세요.', minChars: 90, maxChars: 400, minSentences: 6, maxSentences: 7, title: '친구 돕기 안내문', sample: '친구가 털어놓으면 "얘기해 줘서 고마워"라고 말해요. "네 잘못이 아니야"라고 꼭 말해 줘요. "왜 진작 말 안 했어?"처럼 탓하는 말은 하지 않아요. 친구의 이야기를 다른 친구들에게 퍼뜨리지 않아요. 다칠 수 있는 일은 비밀보다 안전이 먼저예요. 함께 담임 선생님이나 상담 선생님께 가요.' }, target: { selfCheck: ['안전 우선이 들어갔다', '탓하지 않는 말이 들어갔다', '도움 자리가 들어갔다'] } },
              null,
              { prompt: '안내문에 돕는 나를 돌보는 방법을 더해 8문장으로 완성하세요.', toolOptions: { topic: '앞의 6문장에 "친구를 도운 뒤 내 마음이 힘들 때 할 일"을 두 문장 더해 8문장으로 완성하세요.', minChars: 120, maxChars: 500, minSentences: 8, maxSentences: 9, title: '안내문 + 나 돌보기', sample: '친구가 털어놓으면 "얘기해 줘서 고마워"라고 말해요. "네 잘못이 아니야"라고 꼭 말해 줘요. "왜 진작 말 안 했어?"처럼 탓하는 말은 하지 않아요. 친구의 이야기를 다른 친구들에게 퍼뜨리지 않아요. 다칠 수 있는 일은 비밀보다 안전이 먼저예요. 함께 담임 선생님이나 상담 선생님께 가요. 친구를 도운 뒤 내 마음이 무거우면 나도 상담 선생님께 이야기해요. 잠을 충분히 자고 좋아하는 일을 하며 마음을 돌봐요.' }, target: { selfCheck: ['안전 우선이 들어갔다', '탓하지 않는 말이 들어갔다', '도움 자리가 들어갔다', '나를 돌보는 방법을 썼다'] } },
              { conclude: '친구 돕기 안내문에는 고마움과 지지의 말, 하지 말 말, 안전을 위한 연결할 곳이 들어가요. 돕는 나도 돌봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 가정폭력을 털어놓을 때 하지 말아야 할 말은?', options: ['"얘기해 줘서 고마워"', '"왜 진작 말 안 했어?"', '"같이 선생님께 가자"'], answer: '"왜 진작 말 안 했어?"' }, { type: 'table', prompt: '친구 돕기 안내문의 세 칸을 정리해요.', columns: ['칸', '내용'], cells: [['할 말', ''], ['하지 말 말', ''], ['연결할 곳', '']], answer: '(예) 고마워·네 잘못 아니야, 캐묻기·탓하기·소문내기, 담임·상담 선생님·지역 상담 기관' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.help-route', {
        title: '도움 연결 순서 점검', method: '도움 연결 순서 카드 맞추기', tool: 'timer', minutes: 6,
        levels: { easy: '순서 카드 3장(믿는 어른 → 학교 상담 → 지역 상담 기관)을 차례대로 놓는다.', base: '순서 카드 3장을 놓고, 둘째 출구 질문에서 긴급할 때의 행동을 고른다.', challenge: '넷째 출구 질문에서 지금 바로 위험한 상황인지 가르는 기준을 한 줄로 쓴다.' },
        wrap: {
          teacher: '"친구의 이야기를 들은 뒤, 누구에게 먼저 이어야 할까요? 지금 당장 위험하다면요?" 순서 카드를 맞춘 뒤 긴급할 때는 차례를 건너뛰어 안전한 곳으로 피하고 가까운 어른과 경찰에 바로 알린다고 짚는다. "번호를 모르면 아무것도 못 한다"는 말에는 "담임 선생님께 먼저 말하면 어떤 도움이 이어질까요?"라고 되묻는다. 지역 상담 번호 칸은 학교가 확인해 채운 값을 함께 읽는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '도움 연결 순서', cards: [ORDER[2].text, ORDER[0].text, ORDER[1].text] }, prompt: '도움 연결 순서 카드를 차례대로 놓아요.', target: { order: ORDER.map((c) => c.text) }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구가 지금 집에서 위험하다고 연락했을 때 가장 먼저 할 행동은?', options: ['다음 날 학교에서 선생님께 말한다', '안전한 곳으로 피하라고 하고 가까운 어른·경찰에 바로 알린다', '친구 집에 혼자 찾아간다'], answer: 1, difficulty: 0.2, explain: '지금 위험하면 순서를 기다리지 않고 바로 알려요.' },
            { type: 'choice', prompt: '친구의 이야기를 어른에게 알리는 것에 대한 생각으로 알맞은 것은?', options: ['친구를 배신하는 일이다', '친구의 안전을 지키는 일이다', '가족 일에 끼어드는 일이다'], answer: 1, difficulty: 0.15, explain: '안전과 관련된 일을 어른에게 잇는 것은 친구를 지키는 일이에요.' },
            { type: 'short', prompt: '지금 바로 위험한 상황인지 가르는 기준을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '도움 연결 순서',
          items: [
            { type: 'table', prompt: '도움 연결 순서를 써요.', columns: ['차례', '어디로'], cells: [['1', ''], ['2', ''], ['3', '']], answer: `(예) 믿는 어른(보호자·담임), 학교 상담(Wee 클래스), 지역 상담 기관 ${LOCAL}` },
            { type: 'short', prompt: '긴급할 때 할 행동을 한 문장으로 써요.' },
          ],
        },
        notes: `지역 상담 기관 칸(${LOCAL})은 수업 전에 학교가 확인해 채운다. 긴급할 때의 행동(안전한 곳·가까운 어른·경찰)은 계획 글의 '긴급할 때의 행동'을 옮긴 것이다. ` + SAFE_NOTE,
      }),
      M('wrap.family-campaign', {
        title: '"함께 지키는 집" 캠페인 카드', method: '평등한 가족 문화와 도움 경로 캠페인 카드', tool: 'collage', minutes: 7,
        levels: { easy: '캠페인 문구를 보기에서 고르고(둘째 출구 질문) 조각으로 꾸민다.', base: '카드를 꾸미고 캠페인 문구를 직접 쓴다(셋째 출구 질문).', challenge: '넷째 출구 질문에서 친구 대상과 보호자 대상으로 문구를 나누어 쓴다.' },
        wrap: {
          teacher: '"\'함께 지키는 집\' 캠페인 카드에 꼭 들어가야 할 것은 무엇일까요?" 평등한 가족 문화 한 가지와 도움 경로가 함께 들어가야 한다고 알려 준다. "가정 일은 집 안에서"라는 문구가 나오면 "그 문구를 위험한 친구가 읽으면 어떻게 될까요?"라고 되묻는다. 콜라주 판에는 그림을, 문구는 출구 질문과 활동지에 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 캠페인 카드를 꾸미고 스스로 점검해요.', target: { selfCheck: ['평등한 가족 문화 한 가지를 담기로 했다', '도움 경로를 넣을 자리를 정했다', '조각을 세 개 이상 붙였다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '캠페인 카드 문구로 가장 알맞은 것은?', options: ['집안일은 원래 한 사람 몫', '함께 나누고, 겁주지 않고, 위험하면 알려요', '가족 일은 집 밖에 말하지 않기'], answer: 1, difficulty: 0.15, explain: '평등한 분담·안전·도움 요청이 함께 들어간 문구가 알맞아요.' },
            { type: 'short', prompt: '평등한 가족 문화와 도움 경로가 담긴 캠페인 문구를 써요.' },
            { type: 'short', prompt: '친구 대상 문구와 보호자 대상 문구를 하나씩 써요.' },
          ],
        },
        worksheet: {
          title: '함께 지키는 집',
          items: [
            { type: 'short', prompt: '캠페인 카드 문구를 써요(평등한 가족 문화 + 도움 경로).' },
            { type: 'short', prompt: `카드에 넣을 도움 경로를 써요(믿는 어른·학교 상담·지역 상담 기관 ${LOCAL}).` },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 캠페인 문구는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
    );
  }

  // ==== 24-g9-prostitution.js ====
  // ==== 9학년 · 성을 사고파는 일과 인권 (gender.m.g9-prostitution) ====
  {
    const M = MK('g9-prostitution', [9]);
    const SELL = ['사고팔 수 있음', '사고팔 수 없음'];
    const RIGHTS = [
      { id: 'c1', text: '중고 자전거', to: '사고팔 수 있음' }, { id: 'c2', text: '머리 손질 서비스', to: '사고팔 수 있음' },
      { id: 'c3', text: '근로계약을 맺고 일한 시간의 노동', to: '사고팔 수 있음' }, { id: 'c4', text: '학용품', to: '사고팔 수 있음' },
      { id: 'c5', text: '사람의 몸과 성', to: '사고팔 수 없음' }, { id: 'c6', text: '사람의 존엄', to: '사고팔 수 없음' },
      { id: 'c7', text: '다른 사람의 개인정보', to: '사고팔 수 없음' }, { id: 'c8', text: '친구의 사진', to: '사고팔 수 없음' },
    ];
    const ADS = [
      { id: 'l1', text: '"하루 1시간, 대화만 해도 고액 지급"', ok: true }, { id: 'l2', text: '"나이 무관, 비밀 보장"', ok: true },
      { id: 'l3', text: '"먼저 만나서 면접, 교통비 줄게"', ok: true }, { id: 'l4', text: '"사진 먼저 보내면 바로 입금"', ok: true },
      { id: 'l5', text: '"근로계약서를 쓰고 일한 시간만큼 지급"' }, { id: 'l6', text: '"보호자 동의서를 함께 받아요"' },
    ];
    // 고액 알바 제안 갈림길(깊이 3) — 행위·수법을 자세히 쓰지 않는다
    const D1 = { text: '가상 인물 지후에게 모르는 계정이 SNS 메시지를 보낸다. "대화만 하면 돈 줄게. 나이는 상관없어, 비밀만 지켜."', ask: '지후는 어떻게 할까?', motif: 'house', choices: [
      { id: 'accept', text: '용돈이 필요해서 "어떻게 하면 돼요?"라고 답한다', result: '상대가 선입금을 보내고 개인 정보와 사진을 요구하기 시작한다.', impact: [{ who: '지후', text: '요구가 점점 커진다', tone: -1 }], why: '"대화만"이라는 쉬운 돈은 처음부터 요구를 키우려는 미끼예요.', end: '요구가 커지기 시작했어요.',
        next: { text: '상대가 "돈 받았잖아. 안 하면 학교에 다 말한다"라고 겁을 준다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'tellLate', text: '대화 화면을 남기고 보호자와 선생님께 알린다', result: '어른들이 함께 대응하고 지후는 보호받는다.', impact: [{ who: '지후', text: '혼자 감당하지 않게 된다', tone: 1 }], end: '늦었지만 알렸어요.',
            next: { text: '지후는 "내가 돈을 받았으니 내 잘못이야"라며 괴로워한다.', choices: [
              { id: 'notFault', text: '"유인한 사람이 잘못이야. 너는 보호받아야 해"라는 말을 받아들인다', result: '지후가 상담을 받으며 마음을 추스른다.', impact: [{ who: '지후', text: '자책에서 벗어난다', tone: 1 }], ending: '잘못은 유인한 사람에게 있다는 것을 알았어요.' },
              { id: 'selfBlame', text: '부끄러워서 상담을 거부한다', result: '지후는 혼자 괴로움을 안는다.', impact: [{ who: '지후', text: '도움에서 멀어진다', tone: -1 }], why: '돈을 받았어도 청소년은 피해자로서 보호받아요. 상담은 부끄러운 일이 아니에요.' }] } },
          { id: 'obey', text: '들킬까 봐 시키는 대로 한다', result: '요구가 더 커지고 빠져나오기 어려워진다.', impact: [{ who: '지후', text: '더 깊이 빠진다', tone: -1 }], why: '겁주는 요구에 따르면 요구는 멈추지 않아요. 지금이라도 알리면 보호받을 수 있어요.' }] } },
      { id: 'ignore', text: '답하지 않고 무시한다', result: '메시지가 멈춘 듯하지만 같은 계정이 다른 친구에게도 보낸다.', impact: [{ who: '지후', text: '당장은 안전하다', tone: 0 }, { who: '다른 친구들', text: '같은 제안을 받는다', tone: -1 }], why: '무시는 나를 지키지만, 알리면 다른 친구까지 지킬 수 있어요.', end: '무시했지만 계정은 그대로예요.',
        next: { text: '다음 날 같은 계정이 "답 안 해도 네 사진 갖고 있어"라고 보낸다.', ask: '어떻게 할까?', choices: [
          { id: 'tellNow', text: '대화 화면을 남기고 보호자·선생님께 알린다', result: '어른들이 신고와 차단을 함께 돕는다.', impact: [{ who: '지후', text: '보호받는다', tone: 1 }], end: '증거를 남기고 알렸어요.',
            next: { text: '선생님이 "말해 줘서 고마워. 네 잘못이 아니야"라고 한다.', choices: [
              { id: 'warn', text: '친구들에게 "이런 계정 조심해, 받으면 어른에게 알려"라고 알린다', result: '같은 메시지를 받은 친구들도 알린다.', impact: [{ who: '반 친구들', text: '함께 안전해진다', tone: 1 }], ending: '나와 친구들을 함께 지켰어요.' },
              { id: 'shareImg', text: '친구들에게 그 메시지 화면을 단톡방에 돌린다', result: '화면이 여기저기 퍼져 지후가 불편해진다.', impact: [{ who: '지후', text: '원치 않게 이야기가 퍼진다', tone: -1 }], why: '증거는 도울 어른에게만 보여 주고, 단톡방에 돌리지 않아요.' }] } },
          { id: 'delete', text: '무서워서 대화를 모두 지운다', result: '알리고 싶어도 남은 증거가 없다.', impact: [{ who: '지후', text: '도움받기 어려워진다', tone: -1 }], why: '대화 화면·계정 이름·날짜는 지우지 말고 남긴 뒤 알려요.' }] } },
      { id: 'report', text: '대화 화면을 남기고 보호자·선생님께 바로 알린다', result: '어른들이 신고와 차단을 돕고 학교에서도 주의를 알린다.', impact: [{ who: '지후', text: '처음부터 안전하게 멈춘다', tone: 1 }], ending: '유인 신호를 알아채고 바로 알렸어요.' }] };
    const R1 = [{ id: 'r1', text: '청소년은 보호받아야 할 대상이고 알리면 보호받는다' }, { id: 'r2', text: '쉬운 돈·비밀 요구는 유인 신호다' },
      { id: 'r3', text: '돈을 받았으면 스스로 선택한 것이다', why: '유인과 겁주기로 얻은 대답은 자유로운 선택이 아니에요. 잘못은 유인한 사람에게 있어요.' }, { id: 'r4', text: '청소년도 함께 혼나니 숨겨야 한다', why: '청소년은 보호받아야 할 대상이에요. 숨기면 요구가 더 커져요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '바로 알린 길에서는 요구가 커지기 전에 멈췄다' }, { id: 'r6', text: '시키는 대로 한 길에서는 빠져나오기 더 어려워졌다' }], ok: ['r5', 'r6'] };
    const FLOW = [{ id: 'm1', text: '"대화만 하면 돈 줄게" 제안' }, { id: 'm2', text: '선입금 5만 원을 보낸다' }, { id: 'm3', text: '"받았으니 사진 보내" 요구' }, { id: 'm4', text: '"안 하면 돈 두 배로 갚아" 빚 만들기' }, { id: 'm5', text: '"학교에 알린다" 겁주며 더 큰 요구' }];
    const SPEND = [{ id: 'bus', text: '교통카드 충전', price: 10000 }, { id: 'gift', text: '친구 생일 선물', price: 8000 }, { id: 'snack', text: '간식', price: 5000 }, { id: 'note', text: '학용품', price: 4000 }, { id: 'game', text: '게임 아이템', price: 25000 }];
    const HELP = { title: '가상 동네 — 알릴 곳 지도', grid: [6, 4], places: [
      { name: '집(보호자)', icon: 'house', at: [0, 2] }, { name: '학교 상담실', icon: 'school', at: [2, 1] },
      { name: '지역 지원 기관', icon: 'office', at: [4, 2] }, { name: '경찰서', icon: 'police', at: [5, 0] }, { name: '공원', icon: 'park', at: [3, 3] }] };

    ALL.push(
      // ---- 도입 ----
      M('intro.rights-cards', {
        title: '사고팔 수 없는 것 고르기', method: '사고팔 수 있는 것과 없는 것 나누기', tool: 'sortboard', minutes: 5,
        levels: { easy: '카드 5장(자전거·머리 손질·몸과 성·존엄·학용품)을 두 바구니에 나누는 시연을 보고 까닭을 말한다.', base: '카드 8장을 \'사고팔 수 있음\'·\'사고팔 수 없음\'으로 나누는 시연을 보고 바구니마다 까닭을 고른다.', challenge: '경계처럼 보이는 카드(근로계약을 맺은 노동과 사람의 몸)가 왜 다른 바구니인지 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"자전거, 머리 손질, 일한 시간… 이것들은 돈으로 사고팔 수 있습니다. 그럼 사고팔 수 없는 것은 무엇일까요?" 카드를 두 바구니에 나누는 시연을 보인다. "서로 원하면 무엇이든 팔 수 있다"는 말이 나오면 "사람의 몸과 성, 존엄에 값을 매기면 그 사람은 물건처럼 다뤄지지 않을까요?"라고 되묻는다. 성매매가 사람의 몸과 성을 사고파는 인권 침해라는 오늘의 주제로 잇는다. 장면이나 행위는 묘사하지 않는다.',
          student: '물건·서비스·노동·몸·존엄 카드를 \'사고팔 수 있음\'과 \'사고팔 수 없음\'으로 나누고, 왜 그런지 생각해요.',
          demo: { tool: 'sortboard', options: { slots: SELL, cards: strip(RIGHTS) }, sequence: [{ sort: { '사고팔 수 있음': ['c1', 'c2', 'c3', 'c4'], '사고팔 수 없음': ['c5', 'c6', 'c7', 'c8'] } }] },
          art: { draw: 'a paper-cut shelf with two paper baskets, one holding a bicycle and school supplies, the other holding a glowing paper heart and a shield', banner: '값을 매길 수 없는 것', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.lure-ads', {
        title: '"고액 알바" 유인 문구 분석', method: '가상 알바 문구에서 유인 신호 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '문구 카드 3장(고액·비밀·사진 요구)만 짚으며 유인 신호를 함께 고른다.', base: '문구 카드 6장에서 유인 신호 4장을 바구니에 담는 시연을 보고 까닭을 말한다.', challenge: '남은 두 장(안전한 공고의 표시)과 유인 문구를 견주어 다른 점을 짝에게 말한다.' },
        intro: {
          teacher: '"\'하루 1시간 대화만 해도 고액\' — 이런 문구가 노리는 것은 무엇일까요?" 가상 알바 문구 카드에서 유인 신호를 바구니에 담는 시연을 보인다. "진짜 알바일 수도 있잖아"라는 말이 나오면 "안전한 공고에는 무엇이 적혀 있을까요? 근로계약서·보호자 동의가 있나요, 비밀 보장이 있나요?"라고 되묻는다. 쉬운 돈·비밀·만남·사진 요구가 겹치면 멈추고 알릴 신호라고 짚는다.',
          student: '가상의 아르바이트 문구 카드에서 쉬운 돈·비밀·만남·사진 요구 같은 유인 신호를 골라요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '유인 신호', cards: strip(ADS) }, sequence: [{ pick: ['l1', 'l2', 'l3', 'l4'] }] },
          art: { draw: 'a paper-cut phone screen showing paper ad cards with coins, one card folding into a warning triangle, a student holding a magnifier', banner: '쉬운 돈의 신호', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '문구는 모두 가상이다. 실제 광고 화면이나 사이트를 보여 주지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.lure-dilemma', {
        title: '고액 알바 제안 갈림길', method: '고액 알바 제안 갈림길 따라가기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 지후에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고 영향 표시는 맞힌 뒤에만 보인다. 끝에서 판단 근거를 고른다.', challenge: '다른 길의 결과와 견주는 근거까지 고르고, 셋째 문항에서 알릴 때 남길 증거를 고른다.' },
        activity: {
          title: '고액 알바 제안 갈림길', tool: 'dilemma',
          teacher: '"지후가 용돈이 필요했던 건 잘못일까요? 그럼 잘못은 누구에게 있을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "돈을 받았으면 지후도 책임이 있다"는 학생에게 "쉬운 돈으로 유인하고 겁을 준 사람과, 유인당한 청소년 가운데 누가 보호받아야 할까요?"라고 되묻는다. 청소년은 보호받아야 할 대상이고 알리는 것이 가장 안전하다는 점을 끝 장면에서 짚는다. 제안의 구체적인 내용이나 수법은 다루지 않는다.',
          task: '가상 인물 지후가 SNS로 "대화만 하면 돈 준다"는 제안을 받은 장면에서 길을 골라 결과를 따라가고, 끝에서 내 판단의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '지후가 고액 알바 제안을 받아요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '지후가 고액 알바 제안을 받아요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '지후의 SNS 메시지', D1, [['report'], ['ignore', 'tellNow', 'warn'], ['accept', 'tellLate', 'notFault']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '친구가 같은 제안을 받고 "한 번만 해 볼까?" 할 때의 장면을 따라가세요.', toolOptions: { title: '친구의 고민', scene: { text: '친구 서준이 "나도 그 메시지 받았어. 한 번만 해 볼까? 돈 급한데"라고 한다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'stopIt', text: '"그건 유인이야. 같이 선생님께 말하자. 돈 문제도 같이 방법 찾아보자."', result: '서준이 망설이다가 함께 가기로 한다.', impact: [{ who: '서준', text: '덫에 들어가기 전에 멈춘다', tone: 1 }], ending: '친구를 멈추고 어른에게 이었어요.' },
              { id: 'yourCall', text: '"네 선택이지, 알아서 해."', result: '서준이 답장을 보내 버린다.', impact: [{ who: '서준', text: '위험에 들어선다', tone: -1 }], why: '유인은 자유로운 선택처럼 보이게 만들어요. 친구라면 멈추고 함께 알려요.' }] }, reasons: [{ id: 'q1', text: '돈이 급한 마음을 노리는 것이 유인이다' }, { id: 'q2', text: '스스로 고르면 무엇이든 괜찮다', why: '쉬운 돈과 비밀로 끌어낸 선택은 자유로운 선택이 아니에요.' }], compare: true, revealAfterCheck: true },
              target: { path: [['stopIt']], reasons: ['q1'] } },
              { prompt: '친구의 고민 장면을 따라가세요(영향 단서를 보며 골라요).', toolOptions: { revealAfterCheck: false } }),
            IT({ prompt: '지후가 알리기 전에 무엇을 남길지 고르는 장면을 따라가세요.', toolOptions: { title: '알리기 전에', scene: { text: '지후는 보호자에게 알리기로 했다. 그 전에 휴대폰을 어떻게 할까 고민한다.', ask: '무엇을 할까?', motif: 'house', choices: [
              { id: 'keepEv', text: '대화 화면·계정 이름·날짜를 저장해 두고 알린다', result: '어른들이 신고와 차단을 빨리 돕는다.', impact: [{ who: '지후', text: '도움이 빨라진다', tone: 1 }], ending: '증거를 남기고 알렸어요.' },
              { id: 'wipe', text: '창피해서 대화를 다 지우고 알린다', result: '무슨 일이 있었는지 확인하기 어렵다.', impact: [{ who: '지후', text: '도움이 늦어진다', tone: -1 }], why: '증거는 지우지 않고 남긴 뒤 알려야 도움받기 쉬워요.' }] }, reasons: [{ id: 'k1', text: '증거를 남기면 신고·차단 도움을 받기 쉽다' }, { id: 'k2', text: '증거를 남기면 내가 혼난다', why: '증거는 유인한 사람의 잘못을 보여 주는 것이에요.' }], compare: false },
              target: { path: [['keepEv']], reasons: ['k1'] } },
              null, null,
              { conclude: '쉬운 돈·비밀·만남·사진 요구는 유인 신호예요. 청소년은 보호받아야 할 대상이고, 증거를 남겨 믿을 만한 어른에게 알리는 것이 가장 안전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"대화만 하면 돈 준다"는 메시지를 받았을 때 가장 알맞은 행동은?', options: ['한 번만 해 보고 그만둔다', '대화 화면을 남기고 보호자·선생님께 알린다', '창피하니 대화를 지우고 잊는다'], answer: '대화 화면을 남기고 보호자·선생님께 알린다' }] },
        notes: '제안의 구체적인 내용·수법은 다루지 않는다. 학생에게 이런 메시지를 받아 본 적이 있는지 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('act.money-trap', {
        title: '쉬운 돈의 덫 따라가기', method: '가상 거래 기록으로 쉬운 돈의 덫 따라가기', tool: 'economy', minutes: 15,
        levels: { easy: '가상 기록 카드 3장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다. 예산 문항은 꼭 넣을 것 하나만 지킨다.', base: '가상 기록 카드 5장을 차례대로 놓고, 장치와 뜻을 잇고, 용돈 예산 안에서 덫에 들어가지 않는 선택을 한다.', challenge: '넷째 문항에서 멈출 지점(처음 제안·선입금)을 골라 담고, 빚을 만든 장치는 활동지에 설명한다.' },
        activity: {
          title: '쉬운 돈의 덫 따라가기', tool: 'economy',
          teacher: '"처음엔 \'대화만\'이었는데, 왜 \'빚\'과 \'겁주기\'까지 가게 됐을까요?" 가상 거래 기록 카드를 차례대로 놓으며 단계마다 요구가 어떻게 커지는지 짚는다. "돈을 받았으니 갚아야 한다"는 학생에게 "유인하려고 먼저 보낸 돈을 빚이라고 부르는 것, 그것이 바로 덫의 장치가 아닐까요?"라고 되묻는다. 돈이 급한 마음은 누구에게나 생길 수 있고, 그럴 때 용돈 안에서 고르거나 어른과 상의하는 길이 있다고 정리한다. 금액은 모두 가상이다.',
          task: '가상 인물 지후의 거래 기록 카드로 쉬운 돈이 빚과 요구로 커지는 흐름을 따라가고, 멈출 지점과 안전한 선택을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('지후의 가상 거래 기록 카드를 일어난 차례대로 놓으세요.', FLOW, { title: '쉬운 돈이 덫이 되는 차례' }, [{ id: 'm6', text: '"근로계약서부터 써요"' }]),
              OB('지후의 가상 거래 기록 카드 3장을 차례대로 놓으세요.', [FLOW[0], FLOW[1], FLOW[3]], { title: '쉬운 돈이 덫이 되는 차례' })),
            IT(MB('덫의 장치와 그 뜻을 이으세요.', [['선입금', '먼저 돈을 줘서 빚진 느낌을 만든다'], ['비밀 요구', '어른이 알지 못하게 막는다'], ['겁주기', '알리지 못하게 겁을 준다']], ['일한 만큼 정당하게 준다'], { title: '덫의 장치' })),
            IT({ prompt: '지후의 한 달 용돈 3만 원(가상) 안에서, 교통카드 충전은 꼭 넣고 게임 아이템은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 30000, items: SPEND, ask: '용돈 안에서 고르기' }, target: { budget: { must: ['bus'], not: ['game'], min: 20000 } } },
              { prompt: '지후의 한 달 용돈 3만 원(가상) 안에서 교통카드 충전을 꼭 넣고 고르세요.', target: { budget: { must: ['bus'] } } }),
            IT(PB('덫에서 가장 쉽게 멈출 수 있는 지점만 골라 담으세요.', '멈출 지점', [
              { id: 's1', text: '"대화만 하면 돈 줄게" 제안을 받았을 때', ok: true }, { id: 's2', text: '선입금이 들어왔을 때(돌려주고 알린다)', ok: true },
              { id: 's3', text: '빚을 다 갚은 뒤', why: '빚이라는 장치는 갚아도 끝나지 않게 만들어져 있어요. 그 전에 알려요.' }, { id: 's4', text: '요구를 몇 번 들어준 뒤' }], { title: '어디서 멈출까?' }),
              null, null, { conclude: '쉬운 돈은 선입금·비밀·겁주기로 빚과 요구를 키우는 덫이에요. 처음 제안을 받았을 때 멈추고 어른에게 알려요. 잘못은 유인한 사람에게 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"선입금"이 왜 덫의 장치인지 한 문장으로 설명해요.' }],
          easy: [{ type: 'choice', prompt: '쉬운 돈 제안을 받았을 때 멈출 때는?', options: ['처음 제안을 받았을 때', '빚을 다 갚은 뒤'], answer: '처음 제안을 받았을 때' }] },
        notes: '금액은 모두 가상이다. 학생의 용돈이나 돈 사정을 묻지 않는다. 예산 막대는 \'돈이 급한 마음\'을 덫이 아닌 안전한 선택으로 다루는 문항에 쓰고, 덫의 흐름은 경제 교구의 차례·짝·고르기 판으로 따라간다(예산 교구는 돈이 늘어나는 빚을 그리지 못한다). ' + SAFE_NOTE,
      }),
      M('act.rights-essay', {
        title: '인권 관점 주장 글 쓰기', method: '인권 관점 주장 글 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 28,
        levels: { easy: '주장과 근거 두 부분만 문장 틀을 채워 쓰고 기준 2개를 점검한다.', base: '주장·근거·반론 대응 세 구조로 7문장을 쓰고 기준표 3항목으로 점검한다.', challenge: '넷째 문항에서 청소년 보호 관점을 두 문장으로 덧붙인다.' },
        activity: {
          title: '인권 관점 주장 글 쓰기', tool: 'rubric-writing',
          teacher: '"\'왜 성매매는 인권 침해인가\'에 답할 때, 가장 힘 있는 근거는 무엇일까요?" 주장·근거·반론 대응 차례로 쓰게 한다. "서로 합의했으면 괜찮다"는 반론이 나오면 "돈이 급한 마음이나 힘의 차이로 끌어낸 대답을 자유로운 합의라고 할 수 있을까요?"라고 되묻는다. 반론 대응 칸에서 피해자를 탓하는 문장을 쓰지 않도록, 잘못은 사고파는 구조와 유인한 사람에게 있다는 점을 짚는다.',
          task: '"왜 성매매는 인권 침해인가"를 주장·근거·반론 대응 차례로 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 부분: 주장과 근거를 세 문장으로 쓰세요.', toolOptions: { topic: '"성매매는 인권 침해다"라는 주장과, 사람의 몸과 성·존엄을 근거로 든 문장을 세 문장으로 쓰세요.', minChars: 45, maxChars: 240, minSentences: 3, maxSentences: 4, title: '주장 글 ① 주장과 근거' }, target: { selfCheck: ['주장을 첫 문장에 썼다', '존엄이나 인권을 근거로 들었다', '피해자를 탓하지 않았다'], mustInclude: [['인권', '존엄']] } },
              { prompt: '문장 틀을 채워 주장과 근거를 쓰세요.', toolOptions: { minChars: 25, minSentences: 2, starter: '성매매는 ___ 침해다. 왜냐하면 사람의 몸과 성은 ___ 때문이다.' }, target: { selfCheck: ['주장을 첫 문장에 썼다', '존엄이나 인권을 근거로 들었다'], mustInclude: [['인권', '존엄']] } }),
            IT({ prompt: '가운데: 반론 "서로 합의했으면 괜찮다"에 답하는 두 문장을 쓰세요.', toolOptions: { topic: '반론 "서로 합의했으면 괜찮다"를 소개하고, 돈이 급한 마음·힘의 차이·유인으로 얻은 대답은 자유로운 합의가 아니라는 점으로 두 문장을 쓰세요.', minChars: 35, maxChars: 200, minSentences: 2, maxSentences: 3, title: '주장 글 ② 반론 대응' }, target: { selfCheck: ['반론을 소개했다', '반론에 근거를 들어 답했다', '피해자를 탓하지 않았다'] } },
              { prompt: '반론에 답하는 한 문장을 쓰세요.', toolOptions: { topic: '반론 "서로 합의했으면 괜찮다"에 답하는 한 문장을 쓰세요.', minChars: 15, minSentences: 1, maxSentences: 2, starter: '돈이나 유인으로 얻은 대답은 ___.' }, target: { selfCheck: ['반론에 근거를 들어 답했다', '피해자를 탓하지 않았다'] } }),
            IT({ prompt: '끝부분: 우리가 할 일로 마무리하는 두 문장을 쓰세요.', toolOptions: { topic: '유인 신호를 알아차리고 알리기, 사고파는 구조를 멈추기 같은 우리가 할 일로 두 문장을 써 글을 마무리하세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '주장 글 ③ 마무리' }, target: { selfCheck: ['우리가 할 일을 썼다', '주장으로 다시 끝맺었다', '피해자를 탓하지 않았다'] } }),
            IT({ prompt: '세 부분을 이어 7문장 주장 글을 완성하세요.', toolOptions: { topic: '앞의 세 부분(주장과 근거·반론 대응·마무리)을 이어 7문장 주장 글로 완성하세요.', minChars: 110, maxChars: 450, minSentences: 7, maxSentences: 8, title: '왜 성매매는 인권 침해인가', sample: '성매매는 인권 침해다. 사람의 몸과 성은 돈으로 사고팔 수 있는 물건이 아니기 때문이다. 값을 매기면 사람의 존엄이 물건처럼 다뤄진다. 어떤 사람은 서로 합의했으면 괜찮다고 말한다. 그러나 돈이 급한 마음이나 유인으로 얻은 대답은 자유로운 합의가 아니다. 우리는 유인 신호를 알아차리면 멈추고 어른에게 알려야 한다. 사람의 존엄은 누구도 사고팔 수 없다.' }, target: { selfCheck: ['주장·근거가 있다', '반론 대응이 있다', '피해자를 탓하지 않았다'] } },
              null,
              { prompt: '주장 글에 청소년 보호 관점을 더해 9문장으로 완성하세요.', toolOptions: { topic: '앞의 7문장에 "청소년은 왜 보호받아야 하고, 유인된 청소년에게 어떤 도움이 필요한지"를 두 문장 더해 9문장으로 완성하세요.', minChars: 140, maxChars: 560, minSentences: 9, maxSentences: 10, title: '주장 글 + 청소년 보호', sample: '성매매는 인권 침해다. 사람의 몸과 성은 돈으로 사고팔 수 있는 물건이 아니기 때문이다. 값을 매기면 사람의 존엄이 물건처럼 다뤄진다. 어떤 사람은 서로 합의했으면 괜찮다고 말한다. 그러나 돈이 급한 마음이나 유인으로 얻은 대답은 자유로운 합의가 아니다. 우리는 유인 신호를 알아차리면 멈추고 어른에게 알려야 한다. 사람의 존엄은 누구도 사고팔 수 없다. 청소년은 판단과 힘에서 어른보다 불리해 보호받아야 할 대상이다. 유인된 청소년에게는 탓하는 말이 아니라 상담과 지원이 필요하다.' }, target: { selfCheck: ['주장·근거가 있다', '반론 대응이 있다', '피해자를 탓하지 않았다', '청소년 보호 관점을 썼다'] } },
              { conclude: '성매매는 사람의 몸과 성·존엄을 사고파는 인권 침해이고, 유인으로 얻은 대답은 자유로운 합의가 아니에요. 청소년은 보호받아야 할 대상이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '성매매가 인권 침해인 까닭으로 알맞은 것은?', options: ['사람의 몸과 성·존엄은 사고팔 수 없기 때문이다', '돈이 적게 오가기 때문이다', '어른만 하는 일이기 때문이다'], answer: '사람의 몸과 성·존엄은 사고팔 수 없기 때문이다' }, { type: 'short', prompt: '"서로 합의했으면 괜찮다"는 반론에 답하는 문장을 써요.' }] },
        notes: '행위·장면을 묘사하는 글을 쓰지 않도록 주제는 인권·존엄·보호 관점으로만 둔다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.help-map', {
        title: '알릴 곳 지도', method: '알릴 곳을 칸 지도에 핀으로 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '장소 이름이 보이는 지도에서 핀 2개(학교 상담실·지역 지원 기관)를 꽂고 핀 칸 이름이 바로 읽힌다.', base: '이름을 숨긴 지도에서 핀 2개를 꽂고, 셋째 출구 질문에서 범례(기호의 뜻) 3칸을 채운다.', challenge: '넷째 출구 질문에서 기관마다 하는 일을 한 줄씩 쓴다.' },
        wrap: {
          teacher: '"쉬운 돈 제안을 받았을 때, 지후가 알릴 수 있는 곳은 어디일까요?" 가상 동네 지도에서 핀을 꽂고 범례를 채우게 한다. "경찰에 가면 나도 혼난다"는 말이 나오면 "오늘 갈림길에서 청소년은 누구라고 했나요?"라고 되묻는다. 지역 지원 기관의 이름과 번호는 학교가 확인해 넣은 값을 함께 읽는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, HELP, { names: false }), prompt: '학교에서 이야기를 듣고 도움을 이어 줄 곳에 핀을 꽂아요.', target: { place: '학교 상담실' }, difficulty: 0.15 },
              { toolOptions: Object.assign({}, HELP, { readout: true }) }),
            IT({ type: 'tool', tool: 'map', options: Object.assign({}, HELP, { names: false }), prompt: `학교 밖에서 상담과 지원을 받을 곳(${LOCAL})에 핀을 꽂아요.`, target: { place: '지역 지원 기관' }, difficulty: 0.2 },
              { toolOptions: Object.assign({}, HELP, { readout: true }) }),
            { type: 'tool', tool: 'map', options: Object.assign({}, HELP, { mode: 'legend', meanings: { house: '보호자', school: '학교 상담', office: '지역 지원 기관', police: '경찰' } }), prompt: '지도 기호마다 알릴 곳의 뜻을 골라 범례를 채워요.', target: { legend: { house: '보호자', school: '학교 상담', office: '지역 지원 기관', police: '경찰' } }, difficulty: 0.2 },
            { type: 'short', prompt: '보호자·학교 상담·지역 지원 기관이 각각 하는 일을 한 줄씩 써요.' },
          ],
        },
        worksheet: {
          title: '알릴 곳',
          items: [
            { type: 'table', prompt: '알릴 곳과 하는 일을 써요.', columns: ['알릴 곳', '하는 일'], cells: [['보호자', ''], ['학교 상담실', ''], ['지역 지원 기관', '']], answer: `(예) 함께 대응하기, 이야기 듣고 도움 잇기, 상담·지원(${LOCAL})` },
            { type: 'short', prompt: '알릴 때 남길 증거를 써요.' },
          ],
        },
        notes: `지도는 가상 동네다. 지도 교구는 문항마다 핀 하나라 알릴 곳을 출구 질문 둘과 범례로 나누었다. 지역 지원 기관 칸(${LOCAL})은 학교가 확인해 채운다. ` + SAFE_NOTE,
      }),
      M('wrap.campaign', {
        title: '"사고팔 수 없는 존엄" 캠페인', method: '인권과 도움 경로 캠페인 카드 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '캠페인 문구를 보기에서 고르고(둘째 출구 질문) 조각으로 꾸민다.', base: '카드를 꾸미고 캠페인 문구를 직접 쓴다(셋째 출구 질문).', challenge: '넷째 출구 질문에서 또래에게 할 행동 제안을 한 줄로 쓴다.' },
        wrap: {
          teacher: '"\'사고팔 수 없는 존엄\' 캠페인 카드를 또래가 본다면, 무엇을 알게 되어야 할까요?" 인권 문구와 도움 경로가 함께 들어가야 한다고 알려 준다. "유혹에 넘어가는 사람이 문제"라는 문구가 나오면 "그 문구는 누구를 탓하고 있나요? 유인한 사람은 어디 있나요?"라고 되묻는다. 콜라주 판에는 그림을, 문구는 출구 질문과 활동지에 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양·색 조각으로 캠페인 카드를 꾸미고 스스로 점검해요.', target: { selfCheck: ['인권·존엄 문구를 담기로 했다', '도움 경로를 넣을 자리를 정했다', '피해자를 탓하는 그림이 없다'], minPieces: 3 }, difficulty: 0.1 },
            { type: 'choice', prompt: '캠페인 문구로 가장 알맞은 것은?', options: ['유혹에 넘어가지 않는 사람이 똑똑하다', '존엄은 사고팔 수 없어요. 쉬운 돈 제안은 멈추고 알려요', '돈이 급하면 어쩔 수 없다'], answer: 1, difficulty: 0.15, explain: '피해자를 탓하지 않고, 인권과 행동(멈추고 알리기)을 함께 담은 문구가 알맞아요.' },
            { type: 'short', prompt: '인권과 도움 경로가 담긴 캠페인 문구를 써요.' },
            { type: 'short', prompt: '또래에게 할 행동 제안을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '사고팔 수 없는 존엄',
          items: [
            { type: 'short', prompt: '캠페인 카드 문구를 써요(인권 + 도움 경로).' },
            { type: 'short', prompt: `카드에 넣을 도움 경로를 써요(보호자·학교 상담·지역 지원 기관 ${LOCAL}).` },
          ],
        },
        notes: '콜라주 교구는 글을 쓰지 못해 캠페인 문구는 출구 질문과 활동지에서 쓴다. ' + SAFE_NOTE,
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
